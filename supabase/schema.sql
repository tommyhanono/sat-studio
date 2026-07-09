-- ============================================================
-- SAT Studio — esquema de persistencia por usuario (Supabase)
-- Pegar este bloque en:  Dashboard → SQL Editor → New query → Run
-- ============================================================

create table if not exists public.sat_sessions (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  sid         text not null,                 -- id de sesión generado en el cliente (dedupe / sync entre dispositivos)
  played_at   timestamptz not null default now(),
  mode        text,                          -- 'exam' | 'drill'
  set_id      text,
  set_title   text,
  score       integer,
  total       integer,
  time_used   integer,
  data        jsonb not null default '{}'::jsonb,  -- entrada completa de la sesión (incluye perQuestion)
  created_at  timestamptz not null default now(),
  unique (user_id, sid)
);

-- Row Level Security: cada usuario solo ve/escribe SUS filas
alter table public.sat_sessions enable row level security;

drop policy if exists "sat_sessions_select_own" on public.sat_sessions;
create policy "sat_sessions_select_own" on public.sat_sessions
  for select using (auth.uid() = user_id);

drop policy if exists "sat_sessions_insert_own" on public.sat_sessions;
create policy "sat_sessions_insert_own" on public.sat_sessions
  for insert with check (auth.uid() = user_id);

drop policy if exists "sat_sessions_update_own" on public.sat_sessions;
create policy "sat_sessions_update_own" on public.sat_sessions
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "sat_sessions_delete_own" on public.sat_sessions;
create policy "sat_sessions_delete_own" on public.sat_sessions
  for delete using (auth.uid() = user_id);

create index if not exists sat_sessions_user_played_idx
  on public.sat_sessions (user_id, played_at desc);

-- Privilegios de tabla (RLS sigue restringiendo a las filas propias)
grant select, insert, update, delete on public.sat_sessions to authenticated, service_role;

-- Que PostgREST recargue el cache de esquema y vea la tabla al instante
notify pgrst, 'reload schema';
