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
-- El grupo sale del dominio del correo: no hace falta tabla de grupos ni que
-- nadie lo escriba a mano. Todo @iae.edu cae solo en su grupo.
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
               from (select coalesce(set_title,'-') set_title, count(*) n from sat.sessions group by 1) ss),
    'by_day', (select coalesce(jsonb_agg(jsonb_build_object('day', d, 'sessions', n) order by d), '[]'::jsonb)
               from (select to_char(played_at,'YYYY-MM-DD') d, count(*) n from sat.sessions group by 1) dg),
    'by_group', (select coalesce(jsonb_agg(jsonb_build_object(
                    'group', g, 'students', n, 'active', act, 'sessions', ses,
                    'accuracy', case when q > 0 then round(100.0 * c / q, 1) else null end) order by n desc), '[]'::jsonb)
                 from (
                   select lower(split_part(u.email, '@', 2)) g,
                          count(*) n,
                          count(*) filter (where ss.ses > 0) act,
                          coalesce(sum(ss.ses), 0) ses,
                          coalesce(sum(ss.q), 0) q,
                          coalesce(sum(ss.c), 0) c
                   from auth.users u
                   left join lateral (
                     select count(*) ses, coalesce(sum(s.total),0) q, coalesce(sum(s.score),0) c
                     from sat.sessions s where s.user_id = u.id
                   ) ss on true
                   where exists(select 1 from sat.sessions s where s.user_id = u.id)
                      or coalesce(u.raw_user_meta_data->>'app','') = 'sat-studio'
                   group by 1
                 ) gg)
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
           lower(split_part(u.email, '@', 2)) as "group",
           u.raw_user_meta_data->>'target_score' as target,
           u.raw_user_meta_data->>'exam_date' as exam_date,
           to_char(u.created_at, 'YYYY-MM-DD') as joined,
           coalesce(u.raw_app_meta_data->>'role', 'student') as role,
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

-- ============================================================
-- PROFESOR (BORRADOR, todavía no es oficial).
-- Un profesor ve SOLO a los estudiantes de su mismo dominio de correo, y solo
-- agregados: cuántas sesiones, cuántas preguntas, qué porcentaje, cuándo entró
-- por última vez, y en qué dominio del examen falla el grupo. NUNCA respuesta
-- por respuesta. El admin ve todos los dominios.
-- Se activa poniéndole a la cuenta app_metadata.role = 'teacher'.
-- ============================================================

create or replace function public.sat_teacher_overview()
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
  v_role text;
  v_dominio text;
  res jsonb;
begin
  v_role := coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '');
  if v_role not in ('teacher', 'admin') then
    raise exception 'not authorized' using errcode = '42501';
  end if;

  select lower(split_part(u.email, '@', 2)) into v_dominio
  from auth.users u where u.id = (select auth.uid());

  select jsonb_build_object(
    'group', v_dominio,
    'is_admin', (v_role = 'admin'),
    'students', coalesce((
      select jsonb_agg(to_jsonb(t) order by t.sessions desc, t.name)
      from (
        select coalesce(u.raw_user_meta_data->>'name', split_part(u.email, '@', 1)) as name,
               u.email,
               u.raw_user_meta_data->>'target_score' as target,
               u.raw_user_meta_data->>'exam_date'   as exam_date,
               count(s.id)::int                      as sessions,
               coalesce(sum(s.total), 0)::int        as questions,
               case when coalesce(sum(s.total),0) > 0
                    then round(100.0 * sum(s.score) / sum(s.total), 1) end as accuracy,
               to_char(max(s.played_at), 'YYYY-MM-DD') as last_active
        from auth.users u
        left join sat.sessions s on s.user_id = u.id
        where (v_role = 'admin' or lower(split_part(u.email, '@', 2)) = v_dominio)
          and (exists(select 1 from sat.sessions x where x.user_id = u.id)
               or coalesce(u.raw_user_meta_data->>'app','') = 'sat-studio')
        group by u.id, u.email, u.raw_user_meta_data
      ) t
    ), '[]'::jsonb),
    'by_domain', coalesce((
      select jsonb_agg(jsonb_build_object('domain', d, 'total', t, 'correct', c) order by t desc)
      from (
        select pq->>'domain' d, count(*) t, count(*) filter (where (pq->>'ok')::boolean) c
        from sat.sessions s
        join auth.users u on u.id = s.user_id
        , lateral jsonb_array_elements(coalesce(s.data->'perQuestion','[]'::jsonb)) pq
        where pq->>'domain' is not null
          and (v_role = 'admin' or lower(split_part(u.email, '@', 2)) = v_dominio)
        group by 1
      ) dd
    ), '[]'::jsonb)
  ) into res;
  return res;
end $$;

revoke all on function public.sat_teacher_overview() from public, anon;
grant  execute on function public.sat_teacher_overview() to authenticated;

-- ============================================================
-- CLASSROOM: el tablón del profesor.
-- Un post pertenece a un GRUPO, y el grupo es el dominio del correo — la misma
-- regla que usan el panel de admin y la vista de profesor, así que nadie tiene
-- que escribir a qué clase pertenece. Lee cualquiera de ese dominio; escribe
-- solo teacher o admin, y ese límite está acá, no en la pantalla.
-- ============================================================

create table if not exists sat.posts (
  id          uuid primary key default gen_random_uuid(),
  grupo       text not null,
  autor_id    uuid not null references auth.users(id) on delete cascade,
  autor_nom   text,
  titulo      text not null,
  cuerpo      text not null default '',
  fijado      boolean not null default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
create index if not exists sat_posts_grupo_idx on sat.posts (grupo, fijado desc, created_at desc);

alter table sat.posts enable row level security;
revoke all on sat.posts from anon, authenticated;

create or replace function public.sat_dominio_actual()
returns text language sql stable security definer set search_path = '' as $$
  select lower(split_part(u.email, '@', 2)) from auth.users u where u.id = (select auth.uid());
$$;

-- Tareas: viven en la MISMA tabla. Un post con `tarea` distinto de null es una
-- asignación; sin ella, un aviso. Una sola tabla y un solo juego de RPC.
--   tarea = { temas:['circles','punct'], nivel:'examen'|'mas'|'donde',
--             minutos:10|20|40, modo:'drill'|'exam', vence:'YYYY-MM-DD'|null }
-- Los `temas` son las claves de PLAN_TOPICS en index.html, que por esto mismo no
-- se renombran nunca. Cada intento arma un test NUEVO desde esos temas, así que
-- repetir una tarea es practicar y no memorizar el orden de las respuestas.
alter table sat.posts add column if not exists tarea jsonb;

create or replace function public.sat_class_posts()
returns jsonb language plpgsql security definer set search_path = '' as $$
declare v_dom text; res jsonb;
begin
  if (select auth.uid()) is null then raise exception 'not authorized' using errcode = '42501'; end if;
  v_dom := public.sat_dominio_actual();
  select coalesce(jsonb_agg(to_jsonb(t) order by t.fijado desc, t.created_at desc), '[]'::jsonb) into res
  from (
    select p.id, p.titulo, p.cuerpo, p.fijado, p.tarea,
           coalesce(p.autor_nom, 'Teacher') as autor,
           to_char(p.created_at, 'YYYY-MM-DD') as fecha,
           (p.autor_id = (select auth.uid())) as mio
    from sat.posts p
    where p.grupo = v_dom
  ) t;
  return res;
end $$;

create or replace function public.sat_class_post_save(
  p_id uuid, p_titulo text, p_cuerpo text, p_fijado boolean, p_tarea jsonb default null
) returns uuid language plpgsql security definer set search_path = '' as $$
declare v_role text; v_dom text; v_id uuid; v_nom text;
begin
  v_role := coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '');
  if v_role not in ('teacher', 'admin') then
    raise exception 'not authorized' using errcode = '42501';
  end if;
  if coalesce(btrim(p_titulo), '') = '' then
    raise exception 'a post needs a title' using errcode = '22023';
  end if;
  -- Una tarea sin temas no puede armar ningún test: se rechaza acá y no cuando
  -- el estudiante le da a "Start" y no pasa nada.
  if p_tarea is not null and coalesce(jsonb_array_length(p_tarea -> 'temas'), 0) = 0 then
    raise exception 'an assignment needs at least one topic' using errcode = '22023';
  end if;
  v_dom := public.sat_dominio_actual();
  select coalesce(u.raw_user_meta_data->>'name', split_part(u.email, '@', 1)) into v_nom
  from auth.users u where u.id = (select auth.uid());

  if p_id is null then
    insert into sat.posts(grupo, autor_id, autor_nom, titulo, cuerpo, fijado, tarea)
    values (v_dom, (select auth.uid()), v_nom, btrim(p_titulo), coalesce(p_cuerpo, ''), coalesce(p_fijado, false), p_tarea)
    returning id into v_id;
  else
    update sat.posts
       set titulo = btrim(p_titulo), cuerpo = coalesce(p_cuerpo, ''),
           fijado = coalesce(p_fijado, false), tarea = p_tarea, updated_at = now()
     where id = p_id and grupo = v_dom
     returning id into v_id;
    if v_id is null then raise exception 'post not found in your group' using errcode = '42501'; end if;
  end if;
  return v_id;
end $$;

create or replace function public.sat_class_post_delete(p_id uuid)
returns void language plpgsql security definer set search_path = '' as $$
declare v_role text;
begin
  v_role := coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '');
  if v_role not in ('teacher', 'admin') then
    raise exception 'not authorized' using errcode = '42501';
  end if;
  delete from sat.posts where id = p_id and grupo = public.sat_dominio_actual();
end $$;

revoke all on function public.sat_dominio_actual() from public, anon;
revoke all on function public.sat_class_posts() from public, anon;
revoke all on function public.sat_class_post_save(uuid, text, text, boolean, jsonb) from public, anon;
revoke all on function public.sat_class_post_delete(uuid) from public, anon;
grant execute on function public.sat_class_posts() to authenticated;
grant execute on function public.sat_class_post_save(uuid, text, text, boolean, jsonb) to authenticated;
-- La firma vieja de cuatro argumentos se retira: dejarla viva sería una segunda
-- puerta de entrada que no valida los temas de la tarea.
drop function if exists public.sat_class_post_save(uuid, text, text, boolean);
grant execute on function public.sat_class_post_delete(uuid) to authenticated;

notify pgrst, 'reload schema';

-- ═══════════════════════════════════════════════════════════════════════════
-- CLASSROOM v2 — clases de verdad, con código para unirse y trabajo tipado
-- ═══════════════════════════════════════════════════════════════════════════
--
-- v1 era un tablón plano: todos los que compartían dominio de correo veían los
-- mismos avisos. Eso alcanza para un profesor, y se rompe con dos: en un colegio
-- todos son @iae.edu, así que la de matemática de 11.º le publicaba a la escuela
-- entera. Una clase tiene que ser una LISTA, no un dominio.
--
-- v1 NO SE BORRA. `sat.posts` y sus tres RPC siguen exactamente como estaban:
-- hay datos de personas ahí y la regla de este repo es que no se borra nada sin
-- respaldo. Esto es aditivo; el día que el tablón viejo no haga falta, se retira
-- aparte y a propósito.
--
-- El resultado de cada intento NO vive acá: vive en `sat.sessions` con
-- `set_id = 'cw-<uuid>'`. Una sola tabla de resultados para todo lo que el
-- estudiante hace, y el reporte del profesor sale de ahí.

create table if not exists sat.classes (
  id          uuid primary key default gen_random_uuid(),
  teacher_id  uuid not null references auth.users(id) on delete cascade,
  escuela     text not null,                  -- dominio del correo, para el panel de admin
  nombre      text not null,
  periodo     text,
  codigo      text not null unique,           -- lo que el estudiante escribe para entrar
  archivada   boolean not null default false,
  created_at  timestamptz not null default now()
);
create index if not exists classes_teacher_idx on sat.classes(teacher_id);

create table if not exists sat.class_members (
  class_id    uuid not null references sat.classes(id) on delete cascade,
  user_id     uuid not null references auth.users(id) on delete cascade,
  joined_at   timestamptz not null default now(),
  primary key (class_id, user_id)
);
create index if not exists class_members_user_idx on sat.class_members(user_id);

-- `kind` son cuatro y cada uno significa algo distinto:
--   warmup      3-5 preguntas para abrir la clase · intentos ilimitados · no cuenta
--   assignment  trabajo para practicar            · ilimitados · cuenta el mejor
--   final       una parte del final               · UNO SOLO   · cuenta y se reporta
--   material    un ejemplo resuelto del profesor  · sin intentos
-- `spec` para los tres primeros: { skills:[claves de SAT_SKILLS], nivel, n, modo }
-- `spec` para material:          { latex:[expresiones para abrir en Desmos] }
-- Las claves de `skills` son las de SAT_SKILLS en index.html, que por esto mismo
-- no se renombran nunca (igual que PLAN_TOPICS en v1).
create table if not exists sat.classwork (
  id          uuid primary key default gen_random_uuid(),
  class_id    uuid not null references sat.classes(id) on delete cascade,
  kind        text not null check (kind in ('warmup','assignment','final','material')),
  titulo      text not null,
  cuerpo      text,
  spec        jsonb not null default '{}'::jsonb,
  vence       date,
  created_at  timestamptz not null default now()
);
create index if not exists classwork_class_idx on sat.classwork(class_id, created_at desc);

alter table sat.classes       enable row level security;
alter table sat.class_members enable row level security;
alter table sat.classwork     enable row level security;
revoke all on sat.classes, sat.class_members, sat.classwork from public, anon, authenticated;

-- Un código corto, legible en voz alta y sin caracteres que se confundan:
-- nada de 0/O ni 1/I/L, que es lo que hace que un salón entero escriba mal.
create or replace function sat.codigo_clase()
returns text language plpgsql volatile set search_path = '' as $$
declare v_abc text := '23456789ABCDEFGHJKMNPQRSTUVWXYZ'; v_cod text; i int;
begin
  loop
    v_cod := '';
    for i in 1..6 loop
      v_cod := v_cod || substr(v_abc, 1 + floor(random() * length(v_abc))::int, 1);
    end loop;
    exit when not exists (select 1 from sat.classes c where c.codigo = v_cod);
  end loop;
  return v_cod;
end $$;

-- ---- las clases del que pregunta: las que dicta y las que cursa ----
create or replace function public.sat_class_mine()
returns jsonb language plpgsql security definer set search_path = '' as $$
declare v_uid uuid; res jsonb;
begin
  v_uid := (select auth.uid());
  if v_uid is null then raise exception 'not authorized' using errcode = '42501'; end if;
  select coalesce(jsonb_agg(to_jsonb(t) order by t.mia desc, t.nombre), '[]'::jsonb) into res
  from (
    select c.id, c.nombre, c.periodo, c.archivada,
           (c.teacher_id = v_uid) as mia,
           -- el código solo lo ve quien dicta: es la llave de entrada al salón
           case when c.teacher_id = v_uid then c.codigo else null end as codigo,
           (select count(*) from sat.class_members m where m.class_id = c.id) as alumnos
    from sat.classes c
    where c.archivada = false
      and (c.teacher_id = v_uid
           or exists (select 1 from sat.class_members m where m.class_id = c.id and m.user_id = v_uid))
  ) t;
  return res;
end $$;

create or replace function public.sat_class_create(p_nombre text, p_periodo text default null)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare v_uid uuid; v_role text; v_id uuid; v_cod text;
begin
  v_uid := (select auth.uid());
  v_role := coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '');
  if v_uid is null or v_role not in ('teacher','admin') then
    raise exception 'only a teacher can open a class' using errcode = '42501';
  end if;
  if coalesce(btrim(p_nombre), '') = '' then
    raise exception 'a class needs a name' using errcode = '22023';
  end if;
  v_cod := sat.codigo_clase();
  insert into sat.classes (teacher_id, escuela, nombre, periodo, codigo)
  values (v_uid, public.sat_dominio_actual(), btrim(p_nombre), nullif(btrim(coalesce(p_periodo,'')),''), v_cod)
  returning id into v_id;
  return jsonb_build_object('id', v_id, 'codigo', v_cod);
end $$;

-- Unirse es idempotente a propósito: el estudiante que escribe el código dos
-- veces tiene que ver "ya estás", no un error de llave duplicada.
create or replace function public.sat_class_join(p_codigo text)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare v_uid uuid; v_c record;
begin
  v_uid := (select auth.uid());
  if v_uid is null then raise exception 'not authorized' using errcode = '42501'; end if;
  select c.id, c.nombre, c.teacher_id into v_c
  from sat.classes c where upper(btrim(p_codigo)) = c.codigo and c.archivada = false;
  if v_c.id is null then
    raise exception 'that code does not match any class' using errcode = '22023';
  end if;
  if v_c.teacher_id = v_uid then
    return jsonb_build_object('id', v_c.id, 'nombre', v_c.nombre, 'ya', true);
  end if;
  insert into sat.class_members (class_id, user_id) values (v_c.id, v_uid)
  on conflict (class_id, user_id) do nothing;
  return jsonb_build_object('id', v_c.id, 'nombre', v_c.nombre, 'ya', false);
end $$;

-- ---- el feed de una clase, ya con MIS intentos contados ----
-- Los intentos se cuentan de `sat.sessions` por `set_id = 'cw-<id>'`. No hay una
-- tabla de entregas: tenerla obligaría a mantener dos verdades sobre el mismo
-- hecho, y tarde o temprano se contradicen.
create or replace function public.sat_class_feed(p_class uuid)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare v_uid uuid; res jsonb;
begin
  v_uid := (select auth.uid());
  if v_uid is null then raise exception 'not authorized' using errcode = '42501'; end if;
  if not exists (
    select 1 from sat.classes c where c.id = p_class
      and (c.teacher_id = v_uid
           or exists (select 1 from sat.class_members m where m.class_id = c.id and m.user_id = v_uid))
  ) then
    raise exception 'that class is not yours' using errcode = '42501';
  end if;
  select coalesce(jsonb_agg(to_jsonb(t) order by t.created_at desc), '[]'::jsonb) into res
  from (
    select w.id, w.kind, w.titulo, w.cuerpo, w.spec, w.vence, w.created_at,
           to_char(w.created_at, 'YYYY-MM-DD') as fecha,
           (select count(*) from sat.sessions s
              where s.user_id = v_uid and s.set_id = 'cw-' || w.id::text) as mis_intentos,
           (select max(case when s.total > 0 then round(100.0 * s.score / s.total) else null end)
              from sat.sessions s
              where s.user_id = v_uid and s.set_id = 'cw-' || w.id::text) as mi_mejor
    from sat.classwork w
    where w.class_id = p_class
  ) t;
  return res;
end $$;

create or replace function public.sat_classwork_save(
  p_id uuid, p_class uuid, p_kind text, p_titulo text,
  p_cuerpo text default null, p_spec jsonb default '{}'::jsonb, p_vence date default null
) returns uuid language plpgsql security definer set search_path = '' as $$
declare v_uid uuid; v_id uuid;
begin
  v_uid := (select auth.uid());
  if v_uid is null or not exists (
    select 1 from sat.classes c where c.id = p_class and c.teacher_id = v_uid
  ) then
    raise exception 'only the teacher of this class can assign work' using errcode = '42501';
  end if;
  if coalesce(btrim(p_titulo), '') = '' then
    raise exception 'it needs a title' using errcode = '22023';
  end if;
  if p_kind not in ('warmup','assignment','final','material') then
    raise exception 'unknown kind of work' using errcode = '22023';
  end if;
  -- Trabajo sin destrezas no puede armar ningún test. Se rechaza acá y no
  -- cuando el estudiante toca "Start" y no pasa nada.
  if p_kind <> 'material' and coalesce(jsonb_array_length(p_spec -> 'skills'), 0) = 0 then
    raise exception 'pick at least one skill' using errcode = '22023';
  end if;
  if p_id is null then
    insert into sat.classwork (class_id, kind, titulo, cuerpo, spec, vence)
    values (p_class, p_kind, btrim(p_titulo), p_cuerpo, coalesce(p_spec,'{}'::jsonb), p_vence)
    returning id into v_id;
  else
    update sat.classwork
       set kind = p_kind, titulo = btrim(p_titulo), cuerpo = p_cuerpo,
           spec = coalesce(p_spec,'{}'::jsonb), vence = p_vence
     where id = p_id and class_id = p_class
    returning id into v_id;
    if v_id is null then raise exception 'that work is not in this class' using errcode = '22023'; end if;
  end if;
  return v_id;
end $$;

create or replace function public.sat_classwork_delete(p_id uuid)
returns void language plpgsql security definer set search_path = '' as $$
declare v_uid uuid;
begin
  v_uid := (select auth.uid());
  if v_uid is null or not exists (
    select 1 from sat.classwork w join sat.classes c on c.id = w.class_id
     where w.id = p_id and c.teacher_id = v_uid
  ) then
    raise exception 'not yours to delete' using errcode = '42501';
  end if;
  -- Se borra la asignación, NUNCA las sesiones del estudiante: lo que practicó
  -- es suyo y sigue contando en su historial y en su plan de mejora.
  delete from sat.classwork where id = p_id;
end $$;

-- ---- el reporte: en qué falló la clase ----
-- Contesta la única pregunta que un profesor necesita el martes. Devuelve a
-- TODOS los inscritos, incluidos los que no entregaron: un reporte que solo
-- muestra a los que hicieron la tarea esconde justo lo que hay que mirar.
create or replace function public.sat_classwork_report(p_id uuid)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare v_uid uuid; v_class uuid; v_set text; res_al jsonb; res_sk jsonb;
begin
  v_uid := (select auth.uid());
  select w.class_id into v_class
  from sat.classwork w join sat.classes c on c.id = w.class_id
  where w.id = p_id and c.teacher_id = v_uid;
  if v_class is null then
    raise exception 'only the teacher of this class can see the report' using errcode = '42501';
  end if;
  v_set := 'cw-' || p_id::text;

  select coalesce(jsonb_agg(to_jsonb(t) order by t.intentos = 0 desc, t.mejor nulls last), '[]'::jsonb) into res_al
  from (
    select coalesce(nullif(btrim(u.raw_user_meta_data ->> 'name'), ''), split_part(u.email,'@',1)) as nombre,
           (select count(*) from sat.sessions s where s.user_id = m.user_id and s.set_id = v_set) as intentos,
           (select max(case when s.total > 0 then round(100.0 * s.score / s.total) else null end)
              from sat.sessions s where s.user_id = m.user_id and s.set_id = v_set) as mejor
    from sat.class_members m join auth.users u on u.id = m.user_id
    where m.class_id = v_class
  ) t;

  -- Dónde pierde puntos la clase, por destreza OFICIAL: el mismo idioma que el
  -- reporte que College Board le manda al estudiante. `sk` sale de perQuestion,
  -- que lo guarda el cliente al calificar.
  select coalesce(jsonb_agg(to_jsonb(t) order by (t.ok::numeric / nullif(t.total,0))), '[]'::jsonb) into res_sk
  from (
    select q ->> 'sk' as sk,
           count(*) as total,
           count(*) filter (where (q ->> 'ok')::boolean) as ok
    from sat.sessions s
    cross join lateral jsonb_array_elements(coalesce(s.data -> 'perQuestion', '[]'::jsonb)) q
    where s.set_id = v_set
      and s.user_id in (select m.user_id from sat.class_members m where m.class_id = v_class)
      and coalesce(q ->> 'sk', '') <> ''
    group by 1
  ) t;

  return jsonb_build_object('alumnos', res_al, 'skills', res_sk);
end $$;

revoke all on function public.sat_class_mine()                                   from public, anon;
revoke all on function public.sat_class_create(text, text)                       from public, anon;
revoke all on function public.sat_class_join(text)                               from public, anon;
revoke all on function public.sat_class_feed(uuid)                               from public, anon;
revoke all on function public.sat_classwork_save(uuid, uuid, text, text, text, jsonb, date) from public, anon;
revoke all on function public.sat_classwork_delete(uuid)                         from public, anon;
revoke all on function public.sat_classwork_report(uuid)                         from public, anon;
grant execute on function public.sat_class_mine()                                to authenticated;
grant execute on function public.sat_class_create(text, text)                    to authenticated;
grant execute on function public.sat_class_join(text)                            to authenticated;
grant execute on function public.sat_class_feed(uuid)                            to authenticated;
grant execute on function public.sat_classwork_save(uuid, uuid, text, text, text, jsonb, date) to authenticated;
grant execute on function public.sat_classwork_delete(uuid)                      to authenticated;
grant execute on function public.sat_classwork_report(uuid)                      to authenticated;
