# SAT Studio 🎓

Plataforma de práctica para el Digital SAT con interfaz estilo **Bluebook**, hecha con Claude.

## 🔗 Link

**App en vivo:** https://tommyhanono.github.io/sat-studio/

Cada estudiante crea su cuenta (correo + contraseña) y su historial se guarda en la nube — se ve desde cualquier dispositivo.

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

## Qué incluye

- **2 modos**: Exam (cronometrado, se califica al final, con Check Your Work) y Drill (sin timer, feedback + explicación inmediata en cada pregunta).
- **Herramientas Bluebook**: timer con Hide y alerta roja, Mark for Review, eliminador ABC, menú de preguntas, calculadora Desmos, Reference Sheet (Math), Highlights & Notes (selecciona texto con el mouse), Line Reader, Zoom, Layout split/vertical.
- **Math real**: multiple choice centrado + preguntas SPR (respuesta escrita) con las reglas de entrada oficiales (5 caracteres, 6 con negativo, fracciones equivalentes, decimales con precisión completa).
- **Dashboard**: accuracy por dominio y skill, historial, estimación de score 200–800, y **Redo my mistakes**.
- **Resumen copiable** al final de cada sesión → pégaselo a Claude para mantener el error log y recibir sets nuevos enfocados en tus debilidades.

## Cuentas y sincronización en la nube

- Cada estudiante entra con **correo + contraseña**. Su historial vive en **Supabase** con seguridad por fila (RLS): cada quien ve **solo lo suyo**.
- El esquema de la base de datos está en [`supabase/schema.sql`](supabase/schema.sql).
- La config del backend (URL + anon key, ambas públicas) está en las constantes `SUPABASE_URL` / `SUPABASE_ANON_KEY` dentro de `index.html`. La anon key es pública por diseño; la seguridad la dan el login + RLS.

## Agregar sets nuevos (los genera Claude)

1. Guarda el archivo nuevo (ej. `rw-set2.js`) dentro de la carpeta `sets/`.
2. En `index.html`, agrega una línea junto a las demás:
   ```html
   <script src="sets/rw-set2.js"></script>
   ```
3. Recarga. El set aparece en el menú automáticamente.

## Sets incluidos

| Set | Sección | Preguntas | IDs |
|---|---|---|---|
| Punctuation Drill — Set 1 | Reading & Writing | 10 | RW-001–RW-010 |
| Math Mixed Practice — Set 1 | Math | 10 (7 MC + 3 SPR) | M-001–M-010 |
