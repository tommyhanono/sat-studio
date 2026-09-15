# SAT Studio — CLAUDE.md

Plataforma de práctica para el **Digital SAT** con interfaz estilo **Bluebook**. Se reparte por link y la
idea es que la use un colegio entero. Cada estudiante puede entrar **sin cuenta** (todo funciona, el historial
vive en ese navegador) o **con cuenta** (correo + contraseña, el historial lo sigue a cualquier dispositivo).

**Lo usan estudiantes reales y sus datos no se pueden perder.** Esa es la regla que manda sobre todo lo demás.

## Stack

**HTML estático** — `index.html` es la app entera, sin build ni npm. Los sets de preguntas viven en `sets/`,
las utilidades en `tools/` y el SQL en `supabase/`.

Backend: **Supabase** reusando el proyecto compartido de tres-leches, en un **schema `sat` propio** que NO
está expuesto a la API: todo pasa por cinco funciones RPC en `public` que filtran por `auth.uid()`.

- Live: <https://sat-studio.vercel.app> · espejo en <https://tommyhanono.github.io/sat-studio/>

## Cómo se corre

Abrir `index.html` en el navegador, o cualquier server estático. No hay `npm run dev`.

## Verificar (antes de tocar nada y antes de publicar)

```bash
tools/verificar.sh
```

Corre las cuatro y sale con código 1 si algo falla:

| Qué | Verifica | Casos |
|---|---|---|
| `auditar-banco.js` | el contenido: dominios contra los pesos oficiales, dificultad, formato, integridad, duplicados | — |
| `test-humo.js` | que la app **se juega**: los tres formatos de pregunta, la calificación, y que el backend de cuentas quede vivo | 13 |
| `test-datos.js` | que **una sesión jugada no se pierde**, con un Supabase falso al que se le corta la red | 48 |
| `test-plan.js` | que "Mi plan de mejora" recomienda desde los datos del estudiante y arma el test que prometió | 30 |

Necesitan Chrome y `puppeteer-core` (se toma de `~/jarvis/app`); si no están, se **saltan** con código 0 para
que el repo siga siendo clonable sin instalar nada.

## Reglas de este repo

- **Los datos del estudiante primero.** Guardar es: local (síncrono) → cola durable → subida con reintento.
  Nunca al revés, y **ningún error de guardado se traga en silencio** — si algo no subió, la pantalla lo dice.
- **No se borra nada sin respaldo.** Borrar el historial descarga antes un `.json`, exige escribir BORRAR y
  **verifica que el servidor borró** antes de tocar lo local. Si el servidor falla, no se borra nada.
- La clave de Supabase embebida es la **`anon`**: es pública por diseño y la protección real es el login +
  las RPC. Nunca poner ahí una `service_role`.
- **Nada cableado a una persona.** Ni fechas de examen, ni diagnósticos ("Mock 1: 0/2"), ni features detrás
  del rol admin que le sirvan a cualquiera. Si algo es de un estudiante, sale de SU historial.
- Dos deploys (Vercel + Pages) del mismo contenido: si se cambia algo, actualizar los dos.
- Los "Daily Mini Mocks" se siembran **por fecha**: cambiar la semilla cambia lo que ya vio un estudiante.
- Feature nueva → probarla **sin cuenta** también.
- Los sets van con `defer`; el CDN de Supabase **no** (el script en línea crea el cliente al parsear, y con
  defer `window.supabase` todavía no existe: la app se queda sin cuentas y sin un solo error). Lo cubre H13.

## Antes de abrirlo a una escuela (pendientes de operación)

- **SMTP propio en Supabase** (Auth → SMTP Settings). El correo de recuperación de contraseña lo manda
  Supabase, y su servicio por defecto está limitado a unos pocos envíos por hora: con 100 estudiantes, el
  "olvidé mi contraseña" deja de funcionar el primer día.
- **Protección de contraseñas filtradas** (Auth → Passwords → HaveIBeenPwned). Hoy está apagada; es un
  interruptor y lo pide el advisor de seguridad de Supabase.
- **Quién puede registrarse.** Hoy cualquiera con el link crea cuenta con cualquier correo. Para un colegio
  hay que decidir: abierto, restringido a un dominio (`@iae.edu`), o con código de clase.

## Lanzamiento

Este sitio es **público**: pasa `90_Sistema/TOMMY-WEB-LAUNCH.md` completo (vault). No es opcional.

```bash
~/.claude/scripts/web-launch-audit/run.sh . --out /tmp/launch.md
```

Estado al 14-sep-2026: **31 PASS · 3 FAIL · 3 WARN**. Los tres FAIL abiertos, con su razón:

1. **`B2-17` og:image 404** — `og.png` existe en el repo; el auditor lo pide contra
   `https://sat-studio.vercel.app/og.png`, que es 404 hasta el deploy. Se cierra solo al publicar.
2. **`B1-13` 5 catch mudos** — 3 están en `tools/*.js` (scripts de desarrollo, no se publican) y 2 son el
   propio logger (`intenta()` y el respaldo de `toast()`). Todos los catch donde el estudiante tiene algo que
   aprender o hacer **ya avisan en pantalla**.
3. **`B3-07` regla cero de diseño** — quedan dos firmas: fondo blanco plano y tipografía del sistema.
   **Es deliberado y está sin decidir:** el producto imita al Bluebook de College Board a propósito, y ese
   parecido es la mitad de su valor. Ponerle navy+dorado+serif editorial lo mejora como sitio de Tommy y lo
   empeora como simulacro. **Decisión pendiente de Tommy.**
