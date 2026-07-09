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

-- ============================================================
-- ADMIN: panel de administrador (solo cuentas con app_metadata.role='admin').
-- Alcance SOLO SAT Studio: usuarios con sesiones SAT o con user_metadata.app='sat-studio'
-- (excluye a los usuarios de otros apps que comparten el mismo proyecto Supabase).
-- ============================================================

create or replace function public.sat_admin_overview()
returns jsonb language plpgsql security definer set search_path = '' as $$
declare res jsonb;
begin
  if coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') <> 'admin' then
    raise exception 'not authorized' using errcode = '42501';
  end if;
  select jsonb_build_object(
    'total_accounts', (select count(*) from auth.users u where exists(select 1 from sat.sessions s where s.user_id = u.id) or coalesce(u.raw_user_meta_data->>'app','') = 'sat-studio'),
    'active_students', (select count(distinct user_id) from sat.sessions),
    'total_sessions', (select count(*) from sat.sessions),
    'total_questions', (select coalesce(sum(total), 0) from sat.sessions),
    'global_accuracy', (select case when coalesce(sum(total),0) > 0 then round(100.0 * sum(score) / sum(total), 1) else 0 end from sat.sessions),
    'sessions_7d', (select count(*) from sat.sessions where played_at > now() - interval '7 days'),
    'by_domain', (select coalesce(jsonb_agg(jsonb_build_object('domain', d, 'total', t, 'correct', c) order by t desc), '[]'::jsonb)
                  from (select pq->>'domain' d, count(*) t, count(*) filter (where (pq->>'ok')::boolean) c
                        from sat.sessions s, lateral jsonb_array_elements(coalesce(s.data->'perQuestion','[]'::jsonb)) pq
                        where pq->>'domain' is not null group by 1) dd),
    'by_set', (select coalesce(jsonb_agg(jsonb_build_object('label', set_title, 'sessions', n) order by n desc), '[]'::jsonb)
               from (select coalesce(set_title,'—') set_title, count(*) n from sat.sessions group by 1) ss),
    'by_day', (select coalesce(jsonb_agg(jsonb_build_object('day', d, 'sessions', n) order by d), '[]'::jsonb)
               from (select to_char(played_at,'YYYY-MM-DD') d, count(*) n from sat.sessions group by 1) dg)
  ) into res;
  return res;
end $$;

create or replace function public.sat_admin_students()
returns jsonb language plpgsql security definer set search_path = '' as $$
declare res jsonb;
begin
  if coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') <> 'admin' then
    raise exception 'not authorized' using errcode = '42501';
  end if;
  select coalesce(jsonb_agg(to_jsonb(t) order by t.sessions desc, t.email), '[]'::jsonb) into res from (
    select u.email,
           coalesce(u.raw_user_meta_data->>'name', split_part(u.email, '@', 1)) as name,
           to_char(u.created_at, 'YYYY-MM-DD') as joined,
           coalesce(u.raw_app_meta_data->>'role', 'estudiante') as role,
           count(s.id)::int as sessions,
           to_char(max(s.played_at), 'YYYY-MM-DD') as last_active,
           coalesce(sum(s.total), 0)::int as questions,
           case when coalesce(sum(s.total),0) > 0 then round(100.0 * sum(s.score) / sum(s.total), 1) else null end as accuracy
    from auth.users u
    left join sat.sessions s on s.user_id = u.id
    group by u.id, u.email, u.raw_user_meta_data, u.created_at, u.raw_app_meta_data
    having count(s.id) > 0 or coalesce(u.raw_user_meta_data->>'app','') = 'sat-studio'
  ) t;
  return res;
end $$;

revoke execute on function public.sat_admin_overview()  from public, anon;
revoke execute on function public.sat_admin_students()  from public, anon;
grant  execute on function public.sat_admin_overview()  to authenticated;
grant  execute on function public.sat_admin_students()  to authenticated;

notify pgrst, 'reload schema';
