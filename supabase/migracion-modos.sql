-- ============================================================================
-- Classroom como MODO, no como pestaña: lo que la base necesita para eso.
-- 22-sep-2026.
--
-- Tres cosas:
--   1. un quinto tipo de trabajo, `mock`: un simulacro asignado a la clase.
--      El profesor lo manda y TODOS reciben el mismo examen (la semilla sale
--      del id del trabajo), que es lo único que hace comparables los puntajes.
--   2. el puntaje ESCALADO viaja en los reportes. Un simulacro no se mide en
--      "18 de 27": se mide en 1290 de 1600, y eso vive en data->mock->total.
--   3. `sat_class_progreso`: la pregunta que hoy no se puede contestar —
--      ¿está mejorando el grupo, y quién no?
--
-- Nada de esto borra ni reescribe datos: solo agrega.
-- ============================================================================

-- ---- 1. `mock` entra al check de `kind` ------------------------------------
do $$
declare n text;
begin
  select conname into n
    from pg_constraint
   where conrelid = 'sat.classwork'::regclass and contype = 'c'
     and pg_get_constraintdef(oid) ilike '%kind%';
  if n is not null then execute format('alter table sat.classwork drop constraint %I', n); end if;
end $$;
alter table sat.classwork add constraint classwork_kind_check
  check (kind in ('warmup','assignment','final','material','mock'));

-- ---- 2. guardar un trabajo, ahora con `mock` -------------------------------
create or replace function public.sat_classwork_save(
  p_id uuid, p_class uuid, p_kind text, p_titulo text,
  p_cuerpo text default '', p_spec jsonb default null, p_vence date default null
) returns uuid language plpgsql security definer set search_path = '' as $$
declare v_id uuid;
begin
  if not sat.mi_clase(p_class) then raise exception 'not your class' using errcode = '42501'; end if;
  if p_kind not in ('warmup','assignment','final','material','mock') then
    raise exception 'unknown kind' using errcode = '22023';
  end if;
  if coalesce(btrim(p_titulo), '') = '' then raise exception 'it needs a title' using errcode = '22023'; end if;
  -- warmup / assignment / final arman un test desde destrezas: sin destrezas no hay test.
  if p_kind in ('warmup','assignment','final')
     and coalesce(jsonb_array_length(p_spec -> 'skills'), 0) = 0 then
    raise exception 'pick at least one skill' using errcode = '22023';
  end if;
  -- un mock tiene que decir CUÁL: la sección completa o el examen entero.
  if p_kind = 'mock' and coalesce(p_spec ->> 'mock', '') not in ('full','rw','math') then
    raise exception 'pick which test to assign' using errcode = '22023';
  end if;

  if p_id is null then
    insert into sat.classwork(class_id, kind, titulo, cuerpo, spec, vence)
    values (p_class, p_kind, btrim(p_titulo), coalesce(p_cuerpo,''), p_spec, p_vence)
    returning id into v_id;
  else
    update sat.classwork
       set kind = p_kind, titulo = btrim(p_titulo), cuerpo = coalesce(p_cuerpo,''),
           spec = p_spec, vence = p_vence, updated_at = now()
     where id = p_id and class_id = p_class
     returning id into v_id;
    if v_id is null then raise exception 'not found in this class' using errcode = '42501'; end if;
  end if;
  return v_id;
end $$;

-- ---- 3. el feed del estudiante, con su puntaje escalado --------------------
create or replace function public.sat_class_feed(p_class uuid)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare res jsonb;
begin
  if not (sat.mi_clase(p_class) or sat.en_clase(p_class)) then
    raise exception 'not authorized' using errcode = '42501';
  end if;
  select coalesce(jsonb_agg(to_jsonb(t) order by t.created_at desc), '[]'::jsonb) into res from (
    select w.id, w.kind, w.titulo, w.cuerpo, w.spec, w.vence, w.created_at,
           to_char(w.created_at,'YYYY-MM-DD') as fecha,
           coalesce(mi.intentos, 0)::int as mis_intentos,
           mi.mejor as mi_mejor,
           mi.escala as mi_escala          -- el /1600 o /800 de un mock
    from sat.classwork w
    left join lateral (
      select count(*)::int as intentos,
             max(case when s.total > 0 then round(100.0 * s.score / s.total) else null end) as mejor,
             max(nullif(s.data->'mock'->>'total','')::int) as escala
      from sat.sessions s
      where s.user_id = (select auth.uid()) and s.set_id = 'cw-' || w.id::text
    ) mi on true
    where w.class_id = p_class and (w.publicado or sat.mi_clase(p_class))
  ) t;
  return res;
end $$;

-- ---- 4. el reporte de un trabajo, con el puntaje escalado ------------------
create or replace function public.sat_classwork_report(p_id uuid)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare v_class uuid; v_kind text; res jsonb;
begin
  select class_id, kind into v_class, v_kind from sat.classwork where id = p_id;
  if v_class is null then raise exception 'not found' using errcode = 'P0002'; end if;
  if not sat.mi_clase(v_class) then raise exception 'not your class' using errcode = '42501'; end if;

  select jsonb_build_object(
    'kind', v_kind,
    -- uno por estudiante, incluidos los que NO lo hicieron: esa es la lista que
    -- el profesor usa, y si solo salieran los que entregaron no serviría
    'alumnos', coalesce((
      select jsonb_agg(to_jsonb(a) order by a.intentos desc, a.nombre)
      from (
        select coalesce(u.raw_user_meta_data->>'name', split_part(u.email,'@',1)) as nombre,
               u.email,
               coalesce(x.intentos, 0)::int as intentos,
               x.mejor, x.ultimo, x.escala
        from sat.class_members m
        join auth.users u on u.id = m.user_id
        join sat.classes c on c.id = m.class_id
        left join lateral (
          select count(*)::int as intentos,
                 max(case when s.total > 0 then round(100.0 * s.score / s.total) else null end) as mejor,
                 to_char(max(s.played_at),'YYYY-MM-DD') as ultimo,
                 max(nullif(s.data->'mock'->>'total','')::int) as escala
          from sat.sessions s
          where s.user_id = m.user_id and s.set_id = 'cw-' || p_id::text
        ) x on true
        where m.class_id = v_class and m.user_id <> c.teacher_id
      ) a), '[]'::jsonb),
    'skills', coalesce((
      select jsonb_agg(jsonb_build_object('sk', sk, 'total', t, 'ok', c) order by (c::numeric / t))
      from (
        select pq->>'sk' sk, count(*) t, count(*) filter (where (pq->>'ok')::boolean) c
        from sat.sessions s
        join sat.class_members m on m.user_id = s.user_id and m.class_id = v_class
        , lateral jsonb_array_elements(coalesce(s.data->'perQuestion','[]'::jsonb)) pq
        where s.set_id = 'cw-' || p_id::text and pq->>'sk' is not null
        group by 1
      ) z), '[]'::jsonb)
  ) into res;
  return res;
end $$;

-- ---- 5. ¿está mejorando el grupo? -----------------------------------------
-- La pregunta que el profesor no podía contestar. Devuelve SOLO agregados por
-- estudiante (cuánto hizo, cuánto acierta, cuánto mejoró); nunca una respuesta
-- suelta. El PROFESOR ve la lista entera de su clase; un ESTUDIANTE se ve solo
-- a sí mismo, y los agregados del grupo (tendencia, destrezas flojas, promedio)
-- porque le sirven para ubicarse.
--
-- Y las dos escalas NO se mezclan: la práctica se mide en puntos de acierto y
-- los simulacros en puntaje escalado. Sumarlas daría un número bonito y falso.
create or replace function public.sat_class_progreso(p_class uuid)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare res jsonb; v_profe boolean;
begin
  v_profe := sat.mi_clase(p_class);
  if not (v_profe or sat.en_clase(p_class)) then
    raise exception 'not authorized' using errcode = '42501';
  end if;

  with alumnos as (
    select m.user_id,
           coalesce(u.raw_user_meta_data->>'name', split_part(u.email,'@',1)) as nombre,
           u.email
      from sat.class_members m
      join auth.users u   on u.id = m.user_id
      join sat.classes c  on c.id = m.class_id
     where m.class_id = p_class and m.user_id <> c.teacher_id
  ),
  trabajos as (
    select id, kind, titulo, vence, created_at
      from sat.classwork where class_id = p_class
  ),
  ses as (
    select s.user_id, s.played_at, s.score, s.total, s.data, w.id as cw_id, w.kind,
           case when s.total > 0 then 100.0 * s.score / s.total end as pct,
           nullif(s.data->'mock'->>'total','')::int as escala
      from sat.sessions s
      join trabajos w on s.set_id = 'cw-' || w.id::text
      join alumnos a  on a.user_id = s.user_id
  ),
  por_alumno as (
    select a.user_id, a.nombre, a.email,
           count(s.user_id)::int                                          as intentos,
           count(s.user_id) filter (where s.kind <> 'mock')::int           as intentos_practica,
           count(s.escala)::int                                            as intentos_mock,
           count(distinct s.cw_id)::int                                    as entregados,
           coalesce(sum(s.total), 0)::int                  as preguntas,
           case when sum(s.total) > 0 then round(100.0 * sum(s.score) / sum(s.total)) end as precision,
           round((array_agg(s.pct order by s.played_at)
                  filter (where s.pct is not null and s.kind <> 'mock'))[1])      as primera,
           round((array_agg(s.pct order by s.played_at desc)
                  filter (where s.pct is not null and s.kind <> 'mock'))[1])      as ultima,
           (array_agg(s.escala order by s.played_at)
            filter (where s.escala is not null))[1]                              as primera_escala,
           (array_agg(s.escala order by s.played_at desc)
            filter (where s.escala is not null))[1]                              as ultima_escala,
           to_char(max(s.played_at), 'YYYY-MM-DD')         as ultimo,
           max(s.escala)                                   as mejor_escala
      from alumnos a
      left join ses s on s.user_id = a.user_id
     group by 1, 2, 3
  ),
  -- lo que practica por su cuenta, en agregado: dice quién le está metiendo
  propia as (
    select s.user_id, count(*)::int as sesiones, coalesce(sum(s.total),0)::int as preguntas,
           case when sum(s.total) > 0 then round(100.0 * sum(s.score) / sum(s.total)) end as precision
      from sat.sessions s
      join alumnos a on a.user_id = s.user_id
     where s.set_id not like 'cw-%'
     group by 1
  )
  select jsonb_build_object(
    'soyProfe', v_profe,
    'alumnos', coalesce((
      select jsonb_agg(jsonb_build_object(
               'nombre', p.nombre, 'email', p.email,
               'intentos', p.intentos, 'entregados', p.entregados, 'preguntas', p.preguntas,
               'precision', p.precision, 'primera', p.primera, 'ultima', p.ultima,
               'mejora', case when p.intentos_practica >= 2 then p.ultima - p.primera end,
               'primeraEscala', p.primera_escala, 'ultimaEscala', p.ultima_escala,
               'mejoraEscala', case when p.intentos_mock >= 2 then p.ultima_escala - p.primera_escala end,
               'ultimo', p.ultimo, 'mejorEscala', p.mejor_escala,
               'propiaSesiones', coalesce(pr.sesiones, 0), 'propiaPrecision', pr.precision)
             order by (p.intentos = 0) desc, p.precision nulls last, p.nombre)
        from por_alumno p left join propia pr on pr.user_id = p.user_id
        -- el profesor ve la lista entera; un alumno se ve SOLO a si mismo
       where v_profe or p.user_id = (select auth.uid())), '[]'::jsonb),
    'porDestreza', coalesce((
      select jsonb_agg(jsonb_build_object('sk', sk, 'total', t, 'ok', c) order by (c::numeric / t))
        from (select pq->>'sk' sk, count(*) t, count(*) filter (where (pq->>'ok')::boolean) c
                from ses, lateral jsonb_array_elements(coalesce(ses.data->'perQuestion','[]'::jsonb)) pq
               where pq->>'sk' is not null group by 1) z), '[]'::jsonb),
    'porSemana', coalesce((
      select jsonb_agg(jsonb_build_object('semana', semana, 'total', t, 'ok', c) order by semana)
        from (select to_char(date_trunc('week', played_at), 'YYYY-MM-DD') semana,
                     sum(total)::int t, sum(score)::int c
                from ses group by 1 order by 1 desc limit 10) w), '[]'::jsonb),
    'trabajos', coalesce((
      select jsonb_agg(jsonb_build_object(
               'id', t.id, 'kind', t.kind, 'titulo', t.titulo, 'vence', t.vence,
               'entregados', (select count(distinct s.user_id) from ses s where s.cw_id = t.id),
               'promedio',   (select round(avg(x.m)) from (select max(s.pct) m from ses s where s.cw_id = t.id group by s.user_id) x),
               'promedioEscala', (select round(avg(x.m)) from (select max(s.escala) m from ses s where s.cw_id = t.id group by s.user_id) x))
             order by t.created_at desc)
        from trabajos t where t.kind <> 'material'), '[]'::jsonb),
    'resumen', (
      select jsonb_build_object(
        'alumnos',  (select count(*) from alumnos),
        'activos',  (select count(*) from por_alumno where intentos > 0),
        'asignados',(select count(*) from trabajos where kind <> 'material'),
        'precision',(select round(avg(precision)) from por_alumno where precision is not null),
        'mejora',   (select round(avg(ultima - primera)) from por_alumno where intentos_practica >= 2),
        'mejoraEscala', (select round(avg(ultima_escala - primera_escala)) from por_alumno where intentos_mock >= 2))
    )
  ) into res;
  return res;
end $$;

revoke all on function public.sat_class_progreso(uuid) from public, anon;
grant execute on function public.sat_class_progreso(uuid) to authenticated;
