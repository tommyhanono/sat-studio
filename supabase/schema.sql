-- ============================================================
-- SAT Studio — persistencia AISLADA en su propio schema `sat`
-- (separado de public / kioskopay / tres-leches en el mismo proyecto)
--
-- Los datos viven en el schema `sat` (NO expuesto a la API).
-- El acceso va SOLO por funciones RPC en `public` (que sí está expuesto),
-- cada una filtrando por el usuario autenticado (auth.uid()).
-- Así la info de SAT nunca se cruza con la de los otros proyectos.
-- ============================================================

create schema if not exists sat;

create table if not exists sat.sessions (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  sid         text not null,              -- id de sesión del cliente (dedupe / sync multi-dispositivo)
  played_at   timestamptz not null default now(),
  mode        text,
  set_id      text,
  set_title   text,
  score       integer,
  total       integer,
  time_used   integer,
  data        jsonb not null default '{}'::jsonb,
  created_at  timestamptz not null default now(),
  unique (user_id, sid)
);

-- Defensa en profundidad: nadie toca la tabla directamente (ni anon ni authenticated).
-- El único acceso es vía las funciones SECURITY DEFINER de abajo.
alter table sat.sessions enable row level security;
revoke all on sat.sessions from anon, authenticated;

-- ---- RPC: listar mis sesiones ----
create or replace function public.sat_list_sessions()
returns setof sat.sessions
language sql
security definer
set search_path = ''
as $$
  select * from sat.sessions where user_id = (select auth.uid()) order by played_at asc;
$$;

-- ---- RPC: guardar/actualizar una sesión (upsert por sid) ----
create or replace function public.sat_upsert_session(
  p_sid text, p_played_at timestamptz, p_mode text, p_set_id text, p_set_title text,
  p_score integer, p_total integer, p_time_used integer, p_data jsonb
) returns void
language sql
security definer
set search_path = ''
as $$
  insert into sat.sessions(user_id, sid, played_at, mode, set_id, set_title, score, total, time_used, data)
  values ((select auth.uid()), p_sid, coalesce(p_played_at, now()), p_mode, p_set_id, p_set_title,
          p_score, p_total, p_time_used, coalesce(p_data, '{}'::jsonb))
  on conflict (user_id, sid) do update set
    played_at = excluded.played_at, mode = excluded.mode, set_id = excluded.set_id,
    set_title = excluded.set_title, score = excluded.score, total = excluded.total,
    time_used = excluded.time_used, data = excluded.data;
$$;

-- ---- RPC: borrar todo mi historial ----
create or replace function public.sat_delete_all_sessions()
returns void
language sql
security definer
set search_path = ''
as $$
  delete from sat.sessions where user_id = (select auth.uid());
$$;

-- Solo usuarios autenticados pueden ejecutar las RPC (anon no).
revoke execute on function public.sat_list_sessions()          from public, anon;
revoke execute on function public.sat_upsert_session(text,timestamptz,text,text,text,integer,integer,integer,jsonb) from public, anon;
revoke execute on function public.sat_delete_all_sessions()    from public, anon;
grant  execute on function public.sat_list_sessions()          to authenticated;
grant  execute on function public.sat_upsert_session(text,timestamptz,text,text,text,integer,integer,integer,jsonb) to authenticated;
grant  execute on function public.sat_delete_all_sessions()    to authenticated;

notify pgrst, 'reload schema';
