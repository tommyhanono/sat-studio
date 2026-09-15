# SAT Studio — CLAUDE.md

Plataforma de práctica para el **Digital SAT** con interfaz estilo **Bluebook**. Se reparte por link, se
instala en el teléfono como app, y la idea es que la use un colegio entero. **Toda la interfaz y las 1.002
preguntas están en inglés**, igual que el examen; el código, los comentarios y estas notas siguen en español.

Para entrar hace falta **cuenta**, creada con el correo de la escuela. Al registrarse, el estudiante elige su
**puntaje meta** y su **fecha de examen**.

**Lo usan estudiantes reales y sus datos no se pueden perder.** Esa es la regla que manda sobre todo lo demás.

## Stack

**HTML estático** — `index.html` es la app entera, sin build ni npm. Los sets de preguntas viven en `sets/`,
las utilidades en `tools/`, la documentación en `docs/` y el SQL en `supabase/`.

Backend: **Supabase** reusando el proyecto compartido de tres-leches, en un **schema `sat` propio** que NO
está expuesto a la API: todo pasa por seis funciones RPC en `public` que filtran por `auth.uid()`.

- Live: <https://sat-studio.vercel.app> · espejo en <https://tommyhanono.github.io/sat-studio/>

## Cómo se corre

Abrir `index.html` en el navegador, o cualquier server estático. No hay `npm run dev`.

## Verificar (antes de tocar nada y antes de publicar)

```bash
tools/verificar.sh
```

Corre las ocho y sale con código 1 si algo falla:

| Qué | Verifica | Casos |
|---|---|---|
| `auditar-banco.js` | el contenido: dominios contra los pesos oficiales, dificultad, formato, integridad, duplicados | — |
| `test-humo.js` | que la app **se juega**: los tres formatos de pregunta, la calificación, y que el backend quede vivo | 13 |
| `test-datos.js` | que **una sesión jugada no se pierde**, con un Supabase falso al que se le corta la red | 48 |
| `test-plan.js` | que "Mi plan de mejora" recomienda desde los datos del estudiante y arma el test que prometió | 30 |
| `test-idioma.js` | que los 9.000+ campos que lee un estudiante en el banco están en inglés | — |
| `test-pantallas.js` | **lo que se ve**: recorre las ocho pestañas y todas las pantallas en Chrome leyendo el texto renderizado, más los botones sin acción, el XSS del panel y del tablón, las barras que se pintan vacías y el scroll horizontal a 320/375/414 | 22 |
| `test-pwa.js` | que se **instale** en el teléfono y **abra sin internet** (corta la red de verdad) | 20 |
| `huella-banco.js` | la huella estructural del banco (ids, respuestas, dominios, dificultades) | — |

Necesitan Chrome y `puppeteer-core` (se toma de `~/jarvis/app`); si no están, se **saltan** con código 0 para
que el repo siga siendo clonable sin instalar nada.

Para agregar preguntas: **[`docs/COMO-ESCRIBIR-PREGUNTAS.md`](docs/COMO-ESCRIBIR-PREGUNTAS.md)** es el contrato,
y `tools/validar-set.js` es la puerta de entrada. `tools/rebalancear-clave.js` reparte la respuesta correcta
entre A, B, C y D cuando un set generado la deja cargada a una letra.

## Reglas de este repo

- **Los datos del estudiante primero.** Guardar es: local (síncrono) → cola durable → subida con reintento.
  Nunca al revés, y **ningún error de guardado se traga en silencio** — si algo no subió, la pantalla lo dice.
- **No se borra nada sin respaldo.** Borrar el historial descarga antes un `.json`, exige escribir BORRAR y
  **verifica que el servidor borró** antes de tocar lo local. Si el servidor falla, no se borra nada.
- La clave de Supabase embebida es la **`anon`**: es pública por diseño y la protección real es el login +
  las RPC. Nunca poner ahí una `service_role`.
- **Todo lo que escribió una persona pasa por `escHtml()` antes de un `innerHTML`.** El nombre de la cuenta lo
  elige el estudiante y se muestra en el panel del profesor y del admin: sin escapar, se ejecuta ahí. Lo cubre
  P11 de `test-pantallas.js`.
- **Nada cableado a una persona.** Ni fechas de examen, ni diagnósticos, ni features detrás del rol admin que
  le sirvan a cualquiera. Si algo es de un estudiante, sale de SU historial.
- Dos deploys (Vercel + Pages) del mismo contenido: si se cambia algo, actualizar los dos.
- Los "Daily Mini Mocks" se siembran **por fecha**: cambiar la semilla cambia lo que ya vio un estudiante.
- Para cambiar de pantalla, **`mostrarSolo(id)`**, nunca `classList.add('hidden')` a mano. Cada vista tenía su
  propia lista y ninguna las incluía a todas; el síntoma era scroll horizontal en móvil porque la tabla de la
  vista de abajo seguía midiendo.

## Las dos claves internas que NO se traducen

- En el **set**: `level: 'Fácil' | 'Media' | 'Difícil' | 'Extreme'` — es la etiqueta que se muestra
  (Warm-up · Test Level · Hard · real M2 · Brutal).
- En la **pregunta**: `difficulty: 'Fácil' | 'Media' | 'Difícil'` **más** `extreme: true` para el tier brutal.

`difficulty: 'Extreme'` **no existe**: todo el motor (`hrank`, `cbDiff`, `assembleModule`, `weightOf`,
`LVLORD`, `DIFFS`) compara contra esas tres cadenas, así que una pregunta marcada así cae al rango 0 y el mock
adaptativo **la manda al módulo fácil**. `validar-set.js` lo rechaza e `indexSets()` lo normaliza al cargar.

## Las ocho pestañas del inicio

`Daily` · `Math Topics` · `Verbal Topics` · `Fast Pace` · `Practice Tests` · `Full Mocks` · `Classroom` ·
`My Progress`. Se ve **una a la vez** (la clave está en `store` bajo `satapp_home_tab`, y `homeTab()` traduce
los nombres viejos para que una preferencia guardada no deje a nadie en una pestaña que ya no existe).

Antes eran cinco grupos apilados en una sola página: 21 secciones plegables y cinco bloques de cabecera
encima. Decidir entre 21 acordeones es la forma más rápida de que alguien no haga nada.

- Los sets de las dos pestañas de temas pasan por `buscadorSets()`: búsqueda, filtro por tema y por nivel,
  ocho visibles y "Show the rest". **Filtra en el DOM**, sin repintar el inicio — repintar pierde el scroll y
  lo que el estudiante ya escribió.
- `Fast Pace` arma el test en el momento con los temas que el plan marcó como los más flojos. Existe porque
  el hueco real de un estudiante no son 70 minutos seguidos, son los diez entre clase y clase.
- `Classroom` es el tablón del profesor: tabla `sat.posts` + tres RPC, el grupo sale del dominio del correo.

## Como app en el teléfono

`manifest.webmanifest` + `sw.js`. Dos cosas que hay que saber antes de tocarlos:

- **`index.html` va por RED PRIMERO** en el service worker. Si se cachea primero, el estudiante se queda
  congelado en una versión vieja y no hay forma de sacarlo. Los sets y los iconos sí van por caché primero.
- **Supabase y los CDN nunca se cachean.** Servir una respuesta guardada de la API sería darle a alguien el
  historial de otro.
- Al cambiar `sw.js` o el shell hay que **subir `VERSION`** (`sat-studio-v1`), o los navegadores que ya lo
  tienen siguen sirviendo la caché vieja.
- Los iconos se regeneran con el script de `iconos.js` desde `icon.svg`: esta Mac no tiene ImageMagick ni
  brew, así que rasteriza con el Chrome instalado vía puppeteer-core.

## Cómo se carga el banco

Los ~1,5 MB de preguntas **no** se cargan con `defer`: `defer` descarga en paralelo pero bloquea el
`DOMContentLoaded`, y la pantalla de cuenta —que no necesita ni una pregunta— esperaba el banco entero.

- La lista de sets vivos es `var SAT_SET_FILES` dentro de `index.html`. **Es la fuente de verdad**, y todas las
  herramientas la leen a través de `tools/lib-banco.js` (antes cada una tenía su copia del regex, y cuando el
  formato cambió se rompieron todas a la vez — una siguió diciendo "Banco íntegro" sobre cero preguntas).
- `cargarBanco()` inyecta los archivos después del primer pintado. `conBanco(fn)` espera por ellos y muestra
  el cartel de carga; solo lo llama quien de verdad necesita las preguntas.
- **Ojo:** un `</script>` dentro del bloque `<script>` lo cierra aunque esté en un comentario. Los dos sets
  retirados traían el tag original en su comentario y partían el archivo en dos: la app cargaba con 0 preguntas.
- `DOMContentLoaded`: **83 ms**.

## Antes de abrirlo a una escuela (pendientes de operación)

- **SMTP propio en Supabase** (Auth → SMTP Settings). El correo de recuperación de contraseña lo manda
  Supabase, y su servicio por defecto está limitado a unos pocos envíos por hora: con 100 estudiantes, el
  "olvidé mi contraseña" deja de funcionar el primer día. **Es el pendiente más urgente.**
- **Protección de contraseñas filtradas** (Auth → Passwords → HaveIBeenPwned). Está apagada y **no se puede
  encender en el plan actual**: la API devuelve HTTP 402, es una función de Pro.
- **Quién puede registrarse.** Hoy cualquiera con el link crea cuenta con cualquier correo — decisión de Tommy,
  por ahora abierto. El grupo sale solo del dominio del correo, así que `@iae.edu` ya se agrupa en el panel.

## Lanzamiento

Este sitio es **público**: pasa `90_Sistema/TOMMY-WEB-LAUNCH.md` completo (vault). No es opcional.

```bash
~/.claude/scripts/web-launch-audit/run.sh . --out report.md
```

Estado al 15-sep-2026, contra el sitio EN VIVO: **34 PASS · 0 FAIL · 2 WARN**. Contra el repo local salta
un FAIL extra, `B1-12`, que apunta a un `console.log` de `tools/huella-banco.js` — un script de línea de
comandos, donde el estado de éxito es lo que imprime y su código de salida. Falso positivo por construcción.

Los dos WARN que quedan, los dos decididos a propósito:

1. **`B2-04` peso del JS** — 680 KB comprimidos en vivo. Es el banco entero, y desde que se carga después del
   primer pintado ya no bloquea nada: `DOMContentLoaded` está en 83 ms locales.
2. **`B2-18` dominio propio** — el sitio vive en `sat-studio.vercel.app`. Decisión de Tommy.

**En `index.html` no queda ningún catch mudo.**
