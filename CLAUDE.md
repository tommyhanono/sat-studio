# SAT Studio — CLAUDE.md

Plataforma de práctica para el **Digital SAT** con interfaz estilo **Bluebook**. Cada estudiante crea su cuenta (correo + contraseña) y su historial se guarda en la nube, así que se ve desde cualquier dispositivo. Lo usan estudiantes reales.

## Stack

**HTML estático** — `index.html` es la app entera, sin build ni npm. Los sets de preguntas viven en `sets/`, las utilidades en `tools/` y el SQL en `supabase/`.

Backend: **Supabase** (tabla `sat_sessions` con RLS) **reusando el proyecto compartido** de tres-leches. Se provisionó con el `SUPABASE_DB_URL` de kioskopay.

- Live: <https://sat-studio.vercel.app> · espejo en <https://tommyhanono.github.io/sat-studio/> (los dos respondían 200 el 13-ago-2026)

## Cómo se corre

Abrir `index.html` en el navegador, o cualquier server estático. No hay `npm run dev`.

## Gotchas

- La clave de Supabase embebida en `index.html` es la **`anon`**: es pública por diseño y la protección real es **RLS**. Nunca poner ahí una `service_role`.
- Dos deploys (Vercel + Pages) del mismo contenido: si se cambia algo, actualizar los dos o el espejo queda viejo.
- Los "Daily Mini Mocks" se siembran **por fecha**, así que son deterministas: cambiar la semilla cambia lo que ya vio un estudiante.
- Feature nueva → revisar que siga funcionando sin cuenta (modo invitado).
