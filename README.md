# SAT Studio 🎓

Plataforma de práctica para el Digital SAT con interfaz estilo **Bluebook**, hecha con Claude.

## 🔗 Link

**Live app (share this):** https://sat-studio.vercel.app

_(also mirrored at https://tommyhanono.github.io/sat-studio/)_

**Toda la interfaz y todas las preguntas están en inglés**, igual que el examen.

Para entrar hace falta **una cuenta**, creada con el correo de la escuela. Al registrarte eliges tu **puntaje
meta** y tu **fecha de examen**, y con eso la app te dice cuánto te falta y cuánto tiempo tienes. El historial
te sigue a cualquier dispositivo.

## Instálala en el teléfono

Ábrela en el navegador del celular y elige **Añadir a pantalla de inicio** (Safari: el botón de compartir;
Chrome: el menú de tres puntos). Queda como una app de verdad —icono propio, pantalla completa, sin barra del
navegador— y **abre aunque no haya internet**. Lo que practiques sin señal se guarda igual y sube solo cuando
vuelve la conexión.

## Cómo usarla

**Opción 1 — Doble clic:** abre `index.html` en Chrome/Edge/Safari. Todo funciona en local (la calculadora
Desmos necesita internet).

**Opción 2 — Servidor local:** `python3 -m http.server 8000` dentro de la carpeta y abre `http://localhost:8000`.

**Opción 3 — Publicarla:** el repo se despliega solo en Vercel y en GitHub Pages; son el mismo contenido y hay
que actualizar los dos.

> Lo que juegas se guarda **primero en este navegador** y después se sube. Si no hay internet queda en una cola
> durable y se sube sola al volver. Si algo no subió, **la pantalla lo dice**: nunca se pierde en silencio.

## 🧭 Mi plan de mejora

La sección con la que arranca el home. Lee **tu** historial y te arma un test a tu medida en tres pasos:

1. **Propone temas con los números a la vista**, separados en dos grupos que no significan lo mismo:
   *donde estás fallando* (medido con tus respuestas) y *puntos ciegos* (pesa mucho en el examen y todavía no
   hay datos tuyos). Si aún no has practicado, **no inventa un diagnóstico: lo dice.** Marcas y desmarcas lo
   que quieras, y hay buscador para pedir un tema que no te propuso.
2. **Te hace tres preguntas**: cuánto tiempo tienes, con o sin reloj, y qué tan difícil.
3. **Arma el test**: dentro de cada tema van primero las preguntas que ya fallaste y después las que nunca
   has visto.

Son 28 temas que cubren 783 de las 786 preguntas del banco. La prioridad sale del peso oficial de cada dominio
en el examen multiplicado por lo mal que vas. **La app propone; la decisión final es tuya.**

## Qué incluye

- **2 modos**: Exam (cronometrado, se califica al final, con Check Your Work) y Drill (sin timer, feedback + explicación inmediata en cada pregunta).
- **Herramientas Bluebook**: timer con Hide y alerta roja, Mark for Review, eliminador ABC, menú de preguntas, calculadora Desmos, Reference Sheet (Math), Highlights & Notes (selecciona texto con el mouse), Line Reader, Zoom, Layout split/vertical.
- **Math real**: multiple choice centrado + preguntas SPR (respuesta escrita) con las reglas de entrada oficiales (5 caracteres, 6 con negativo, fracciones equivalentes, decimales con precisión completa).
- **Dashboard**: accuracy por dominio y skill, historial, estimación de score 200–800, y **Redo my mistakes**.
- **Resumen copiable** al final de cada sesión → pégaselo a Claude para mantener el error log y recibir sets nuevos enfocados en tus debilidades.
- **Tu historial es tuyo**: se descarga en `.json` cuando quieras y se vuelve a importar sin pisar nada.

## Cuentas y sincronización en la nube

- **La cuenta es obligatoria** y se crea con el correo de la escuela. Al registrarte pones tu puntaje meta y tu
  fecha de examen (las dos opcionales, y se pueden cambiar después en **Progress**).
- El historial te sigue a cualquier dispositivo. Cada quien ve **solo su** historial.
- **Nada de lo que juegues se pierde por quedarte sin internet.** La sesión se guarda primero en tu dispositivo,
  queda en una cola que sobrevive cerrar el navegador, y se sube sola cuando vuelve la conexión. Si algo está
  sin subir, la pantalla te lo dice — nunca te promete "sincronizado" cuando no lo está.
- **Aislamiento:** los datos viven en un **schema `sat` propio** (separado de los otros proyectos que comparten el mismo Supabase); el acceso va únicamente por **funciones RPC** en `public` que filtran por el usuario autenticado. La info de SAT nunca se cruza con la de otros proyectos.
- El esquema (schema `sat` + tabla + funciones RPC) está en [`supabase/schema.sql`](supabase/schema.sql).

## Vista de profesor (borrador)

- La cuenta con `app_metadata.role = 'teacher'` (o `admin`) ve un botón **Class** que abre una vista de grupo.
- Muestra **solo agregados**: cuánto practicó cada estudiante, su porcentaje, cuándo entró por última vez, y en
  qué dominio falla el grupo entero. **Nunca la respuesta de una pregunta de nadie.**
- El límite está puesto **en el servidor**, no en la pantalla: `sat_teacher_overview()` solo devuelve los
  estudiantes del **mismo dominio de correo** que el profesor, y ni siquiera puede pedir el detalle.
- Está marcada como **borrador** en la propia pantalla: el diseño y los números que muestra pueden cambiar.

## Panel de admin

- La cuenta con `app_metadata.role = 'admin'` ve un botón **📊 Admin** que abre un panel con: KPIs (cuentas, estudiantes activos, sesiones, accuracy global), gráficas (accuracy por dominio, sesiones por set) y la **tabla de estudiantes** (nombre, email, sesiones, accuracy, última actividad).
- Los datos son **en vivo** vía RPC admin-gated (`sat_admin_overview`, `sat_admin_students`) que verifican el rol admin y **solo incluyen usuarios de SAT Studio** (con sesiones SAT o `user_metadata.app='sat-studio'`), nunca los de otros apps del mismo proyecto Supabase.
- La config del backend (URL + anon key, ambas públicas) está en las constantes `SUPABASE_URL` / `SUPABASE_ANON_KEY` dentro de `index.html`. La anon key es pública por diseño; la seguridad la dan el login + RLS.

## Agregar sets nuevos

El contrato completo está en **[`docs/COMO-ESCRIBIR-PREGUNTAS.md`](docs/COMO-ESCRIBIR-PREGUNTAS.md)**: qué campos
lleva una pregunta, qué hace buena a una explicación, qué hace difícil a una pregunta de verdad, y la regla cero
(las preguntas son **originales**, nunca copiadas de College Board).

```bash
node tools/validar-set.js sets/mi-set-nuevo.js   # la puerta de entrada
node tools/rebalancear-clave.js sets/mi-set.js   # si la clave quedó cargada a una letra
```

El validador revisa que el id no choque con el banco vivo, que las opciones sean A–D, que `correct` esté entre
ellas, que `expWrong` explique exactamente las tres incorrectas, que los SPR traigan `answer` y no traigan
opciones, que el enunciado no repita uno que ya existe, que todo esté en inglés, y que la respuesta correcta no
caiga siempre en la misma letra. Recién cuando sale en verde se agrega la línea
`<script defer src="sets/mi-set.js"></script>` en `index.html`.

## Contenido actual

- **Banco:** 71 sets · 870 preguntas originales, sin ids ni enunciados repetidos, Verbal y Math, en cuatro
  niveles (Warm-up · Test Level · Hard · real M2 · Brutal). El reparto por dominio y el estado contra los
  pesos oficiales de College Board sale de `node tools/auditar-banco.js`.
- **Mocks adaptativos** con la lógica del SAT real (Módulo 1 → rutea Módulo 2; score escalado): **Full Mocks** (8, /1600), **Hard Mocks** (6, todo difícil), **English Mocks** (8, /800) y **Math Mocks** (6, /800) — numerados, estables y re-tomables, con Review completo de cada intento.
- **📋 Exam-Day Playbook:** estrategia investigada (pacing con checkpoints, Módulo 1 adaptativo, jugadas de Desmos, plan de semana final, protocolo del día del examen). Fuentes en `docs/final-week-playbook.md`.
- **📖 Cheat sheet adaptativo** de Grammar & Punctuation: en cualquier Drill, el botón "Rules" abre un panel que resalta la regla exacta que evalúa la pregunta actual.
- **Explicaciones de Math** paso a paso + bloque "📈 In Desmos" con botón que abre la calculadora con las expresiones pre-cargadas.
- **Calculadora:** Desmos graphing (la misma del SAT/Bluebook) + modo Scientific.
- **🎯 Study Plan** (cuenta admin): ruta de dominio por temas débiles — rondas de 4/4 por tema + exámenes finales que exigen 100%.
