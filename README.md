# SAT Studio 🎓

Plataforma de práctica para el Digital SAT con interfaz estilo **Bluebook**, hecha con Claude.

## 🔗 Link

**Live app (share this):** https://sat-studio.vercel.app

_(also mirrored at https://tommyhanono.github.io/sat-studio/)_

Entra **sin cuenta** y practica todo (el historial se guarda en ese navegador), o **crea tu cuenta** con correo y
contraseña y el historial te sigue a cualquier dispositivo. Lo que juegues sin cuenta se pasa solo a tu cuenta
cuando la crees.

## Cómo usarla

**Opción 1 — Doble clic (lo más fácil):**
Descomprime la carpeta y abre `index.html` en Chrome/Edge/Safari. Listo. Todo funciona en local (la calculadora Desmos necesita internet).

**Opción 2 — GitHub Pages (recomendado para usarla desde cualquier dispositivo):**
1. Crea un repositorio en github.com (ej. `sat-studio`).
2. Sube TODOS los archivos (index.html + carpeta `sets/`), manteniendo la estructura.
3. Settings → Pages → Source: branch `main`, folder `/ (root)` → Save.
4. En ~1 minuto tu app queda en `https://TU-USUARIO.github.io/sat-studio/`.

**Opción 3 — Servidor local:** `python3 -m http.server 8000` dentro de la carpeta y abre `http://localhost:8000`.

> Con cuenta, tu historial y dashboard se guardan **en la nube** (Supabase) y te siguen en cualquier dispositivo. Sin conexión se guardan localmente y se sincronizan al reconectar.

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

- Se puede entrar **sin cuenta**: todo funciona y el historial vive en ese navegador.
- Con **correo + contraseña**, el historial te sigue a cualquier dispositivo. Cada quien ve **solo su** historial.
- **Nada de lo que juegues se pierde por quedarte sin internet.** La sesión se guarda primero en tu dispositivo,
  queda en una cola que sobrevive cerrar el navegador, y se sube sola cuando vuelve la conexión. Si algo está
  sin subir, la pantalla te lo dice — nunca te promete "sincronizado" cuando no lo está.
- **Aislamiento:** los datos viven en un **schema `sat` propio** (separado de los otros proyectos que comparten el mismo Supabase); el acceso va únicamente por **funciones RPC** en `public` que filtran por el usuario autenticado. La info de SAT nunca se cruza con la de otros proyectos.
- El esquema (schema `sat` + tabla + funciones RPC) está en [`supabase/schema.sql`](supabase/schema.sql).

## Panel de admin

- La cuenta con `app_metadata.role = 'admin'` ve un botón **📊 Admin** que abre un panel con: KPIs (cuentas, estudiantes activos, sesiones, accuracy global), gráficas (accuracy por dominio, sesiones por set) y la **tabla de estudiantes** (nombre, email, sesiones, accuracy, última actividad).
- Los datos son **en vivo** vía RPC admin-gated (`sat_admin_overview`, `sat_admin_students`) que verifican el rol admin y **solo incluyen usuarios de SAT Studio** (con sesiones SAT o `user_metadata.app='sat-studio'`), nunca los de otros apps del mismo proyecto Supabase.
- La config del backend (URL + anon key, ambas públicas) está en las constantes `SUPABASE_URL` / `SUPABASE_ANON_KEY` dentro de `index.html`. La anon key es pública por diseño; la seguridad la dan el login + RLS.

## Agregar sets nuevos (los genera Claude)

1. Guarda el archivo nuevo (ej. `rw-set2.js`) dentro de la carpeta `sets/`.
2. En `index.html`, agrega una línea junto a las demás:
   ```html
   <script src="sets/rw-set2.js"></script>
   ```
3. Recarga. El set aparece en el menú automáticamente.

## Contenido actual

- **Banco:** 45+ sets · 530+ preguntas originales (0 IDs duplicados), Verbal y Math, niveles Easy/Medium/Hard.
- **Mocks adaptativos** con la lógica del SAT real (Módulo 1 → rutea Módulo 2; score escalado): **Full Mocks** (8, /1600), **Hard Mocks** (6, todo difícil), **English Mocks** (8, /800) y **Math Mocks** (6, /800) — numerados, estables y re-tomables, con Review completo de cada intento.
- **📋 Exam-Day Playbook:** estrategia investigada (pacing con checkpoints, Módulo 1 adaptativo, jugadas de Desmos, plan de semana final, protocolo del día del examen). Fuentes en `docs/final-week-playbook.md`.
- **📖 Cheat sheet adaptativo** de Grammar & Punctuation: en cualquier Drill, el botón "Rules" abre un panel que resalta la regla exacta que evalúa la pregunta actual.
- **Explicaciones de Math** paso a paso + bloque "📈 In Desmos" con botón que abre la calculadora con las expresiones pre-cargadas.
- **Calculadora:** Desmos graphing (la misma del SAT/Bluebook) + modo Scientific.
- **🎯 Study Plan** (cuenta admin): ruta de dominio por temas débiles — rondas de 4/4 por tema + exámenes finales que exigen 100%.
