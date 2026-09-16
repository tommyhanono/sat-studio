# SAT Studio — CLAUDE.md

Plataforma de práctica para el **Digital SAT** con interfaz estilo **Bluebook**. Se reparte por link, se
instala en el teléfono como app, y la idea es que la use un colegio entero. **Toda la interfaz y las 1.200
preguntas están en inglés**, igual que el examen; el código, los comentarios y estas notas siguen en español.

Para entrar hace falta **cuenta**, creada con el correo de la escuela. Al registrarse, el estudiante elige su
**puntaje meta** y su **fecha de examen**.

**Lo usan estudiantes reales y sus datos no se pueden perder.** Esa es la regla que manda sobre todo lo demás.

## Stack

**HTML estático** — `index.html` es la app entera, sin build ni npm. Los sets de preguntas viven en `sets/`,
las utilidades en `tools/`, la documentación en `docs/` y el SQL en `supabase/`.

Backend: **Supabase** reusando el proyecto compartido de tres-leches, en un **schema `sat` propio** que NO
está expuesto a la API: todo pasa por funciones RPC en `public` que filtran por `auth.uid()`.

- Live: <https://sat-studio.vercel.app> · espejo en <https://tommyhanono.github.io/sat-studio/>

## Cómo se corre

Abrir `index.html` en el navegador, o cualquier server estático. No hay `npm run dev`.

## Verificar (antes de tocar nada y antes de publicar)

```bash
tools/verificar.sh
```

Corre las once y sale con código 1 si algo falla:

| Qué | Verifica | Casos |
|---|---|---|
| `test-shell.js` | la **estructura** de `index.html`: llaves del CSS, bloques que compilan, `</script>` sueltos, secciones repetidas | 13 |
| `auditar-destrezas.js` | que las 1.200 caigan en una de las **30 destrezas oficiales**, y cuántas las recoge el cajón | — |
| `auditar-banco.js` | el contenido: dominios contra los pesos oficiales, dificultad, formato, integridad, duplicados | — |
| `test-humo.js` | que la app **se juega**: los tres formatos de pregunta, la calificación, y que el backend quede vivo | 13 |
| `test-datos.js` | que **una sesión jugada no se pierde**, con un Supabase falso al que se le corta la red | 48 |
| `test-plan.js` | que "Mi plan de mejora" recomienda desde los datos del estudiante y arma el test que prometió | 30 |
| `test-idioma.js` | que los 9.000+ campos que lee un estudiante en el banco están en inglés | — |
| `test-pantallas.js` | **lo que se ve**: recorre las ocho pestañas y todas las pantallas en Chrome, más los botones sin acción, el XSS, las barras vacías, Classroom entero, Fast Pace, la confianza, y **siete aparatos** (celular, iPad en las dos orientaciones, computadora) midiendo desborde y tamaño táctil | 66 |
| `test-pwa.js` | que se **instale** en el teléfono y **abra sin internet** (corta la red de verdad) | 20 |
| `auditar-longitud.js` | que la correcta no sea sistemáticamente la opción más larga (se contesta sin leer) | — |
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

## La taxonomía oficial: las 30 destrezas

`domain` (los ocho dominios) alcanza para armar un examen con los pesos oficiales. **No** alcanza para lo otro:
el reporte que College Board le manda al estudiante habla de **destrezas con nombre propio**, y si la app no
habla ese idioma, "practicá lo que fallaste" no se puede contestar.

`SAT_SKILLS` en `index.html` son las 30 (11 de R&W, 19 de matemática) con su dominio, su peso y un matcher.
`skillOf(q)` clasifica cada pregunta en **exactamente una**, y `tools/auditar-destrezas.js` falla si alguna
queda afuera.

Dos cosas que hay que saber antes de tocar los matchers:

- **Se prueban por `pri` (menor primero), no por el orden del arreglo.** Ese orden es el oficial y es el que se
  *muestra*. Cuando dos destrezas se pisan gana la más específica, no la que quedó más arriba. El caso que lo
  motivó: `pd-margin` llevaba `/sample|survey|population/` suelto y se comía las preguntas de diseño de estudio
  antes de que `pd-claims` llegara a probarse — 18 contra 4, cuando la verdad es al revés.
- **Cada dominio tiene UN cajón de sastre, marcado `cajon:true`.** Antes era implícito ("el que quedó último"),
  y así el 30 % de las preguntas se clasificaba solo por dominio sin que nada lo dijera. Hoy los ocho tienen
  regla propia y el auditor reporta cuántas entran por el cajón: **6,3 %**.

Al escribir un set nuevo, **el texto de `skill` decide la destreza**. Una palabra de más (`system`, `factor`,
`at least`, `randomly selected`) manda la pregunta a otra destreza en silencio. Después de agregar un set:
`node tools/auditar-destrezas.js`.

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
- Las dos pestañas de temas abren con **la taxonomía oficial completa** (19 destrezas en matemática, 11 en
  verbal), con cuántas preguntas hay de cada una y en qué nivel. Antes Math solo tenía el buscador de sets, así
  que entrar a Math no mostraba "todo lo de Math", mostraba las tandas que alguien armó.
- El **camino de dominio** se parte por sección: los temas de matemática viven en Math Topics y los de verbal en
  Verbal Topics. Entero vivía en Daily, y era el motivo real de que Daily mostrara todo; ahí queda solo el
  siguiente paso, que sí es de hoy.
- `Fast Pace` **pregunta cuánto tiempo hay** y decide. Eran tres botones (5, 10, 15 preguntas) que no se
  distinguían de un Drill más corto, porque eso es lo que eran: un parámetro, no una pestaña. La prioridad se
  muestra: primero lo que se está olvidando, después lo que se falló, y solo si no hay nada de eso, la destreza
  más floja. El **Pace Trainer** entrena lo único que ningún otro modo entrena — los 71 s por pregunta de verbal
  y los 95 de matemática (`PACE_SEG`), con el reloj de ESA pregunta al lado del de la sesión.

## Classroom — clases de verdad

v1 era un tablón plano: todos los que compartían dominio de correo veían lo mismo. Eso alcanza para un
profesor y se rompe con dos — en un colegio todos son `@iae.edu`, así que la de matemática de 11.º le
publicaba a la escuela entera. **Una clase tiene que ser una lista, no un dominio.**

```
sat.classes        teacher_id · escuela · nombre · periodo · codigo (6 car, sin 0/O ni 1/I/L) · archivada
sat.class_members  class_id · user_id
sat.classwork      class_id · kind · titulo · cuerpo · spec · vence
```

`kind` son cuatro y cada uno significa algo distinto:

| kind | qué es | intentos | cuenta |
|---|---|---|---|
| `warmup` | 3-5 preguntas para abrir la clase | ilimitados | no |
| `assignment` | trabajo para practicar | ilimitados | el mejor |
| `final` | una parte del final | **uno** | sí, y se reporta |
| `material` | un ejemplo resuelto que arma el profesor | — | no |

- **No hay tabla de entregas.** El resultado de cada intento vive en `sat.sessions` con `set_id = 'cw-<id>'`.
  Tener una segunda tabla obligaría a mantener dos verdades sobre el mismo hecho, y se contradicen.
- **Cada intento arma un test NUEVO** desde las mismas destrezas, así que repetir es practicar y no memorizar
  el orden de las respuestas. Las `skills` guardadas son claves de `SAT_SKILLS`, que **por esto** no se
  renombran nunca (igual que `PLAN_TOPICS` en v1).
- **El reporte contesta una sola pregunta**: en qué está fallando la clase, por destreza **oficial** — el mismo
  idioma que usa el reporte de College Board. Lista a **todos** los inscritos, incluidos los que no entregaron:
  un reporte que solo muestra a quien hizo la tarea esconde justo lo que hay que mirar.
- **`material` es como enseña la profesora.** Puede llevar tres cosas, las tres opcionales: una **pregunta real
  del banco** (la clase la ve, la intenta, y la respuesta con su explicación oficial llega **tapada** hasta que
  ella la descubre), **sus pasos** (salen de a uno: mostrar el final de golpe no enseña nada), y expresiones de
  **Desmos** para la demo en vivo.
- **v1 no se borró.** `sat.posts` y sus tres RPC siguen igual: hay datos de personas ahí.

**Pendiente de operación:** la migración de `supabase/schema.sql` **todavía no está aplicada** en el proyecto
de Supabase. Hasta que se corra, Classroom muestra un aviso claro ("Classroom is not switched on yet") en vez
de un error de Postgres, y el resto de la app anda normal.

## Lo que el porcentaje esconde

Desde el 15-sep-2026 cada respuesta guarda dos cosas más: **`conf`** (qué tan seguro estaba el estudiante
ANTES de ver la respuesta: `guess` · `unsure` · `sure`) y **`ms`** (cuánto tardó en esa pregunta, con tope de
5 minutos por si alguien deja la pestaña abierta).

- La confianza se pregunta **solo en Drill**. En el examen cronometrado rompería la simulación.
- `missedPool()` devuelve lo fallado **más lo acertado adivinando**: acertar una que adivinaste no es saberla,
  y la pantalla de resultados le promete al estudiante que esas vuelven.
- Una respuesta **sin `conf`** (de antes de que existiera, o de un examen) cuenta como acierto normal. No se
  inventa un dato que no se tomó.

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

Estado al 15-sep-2026, contra el sitio EN VIVO: **34 PASS · 0 FAIL · 2 WARN** (medido antes de este cambio;
hay que volver a correrlo después de publicar). Contra el repo local salta
un FAIL extra, `B1-12`, que apunta a un `console.log` de `tools/huella-banco.js` — un script de línea de
comandos, donde el estado de éxito es lo que imprime y su código de salida. Falso positivo por construcción.

Los dos WARN que quedan, los dos decididos a propósito:

1. **`B2-04` peso del JS** — 680 KB comprimidos en vivo. Es el banco entero, y desde que se carga después del
   primer pintado ya no bloquea nada: `DOMContentLoaded` está en 83 ms locales.
2. **`B2-18` dominio propio** — el sitio vive en `sat-studio.vercel.app`. Decisión de Tommy.

**En `index.html` no queda ningún catch mudo.**
