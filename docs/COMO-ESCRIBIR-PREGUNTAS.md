# Cómo se escribe una pregunta para SAT Studio

Esta nota es el contrato. Cualquiera —persona o modelo— que agregue preguntas
sigue esto, y `tools/validar-set.js` lo comprueba antes de que el archivo se
enchufe a la app.

```bash
node tools/validar-set.js sets/mi-set-nuevo.js
```

## Regla cero: las preguntas son ORIGINALES

El pie de la app dice *"All questions are original; College Board does not
sponsor or endorse this tool"*, y eso tiene que seguir siendo verdad.

- **Sí**: estudiar el formato, el reparto de dominios, el nivel y los tipos de
  trampa de los exámenes publicados y de la documentación oficial, y escribir
  preguntas nuevas con esa forma.
- **No**: copiar el enunciado, el pasaje o las opciones de una pregunta
  publicada, ni parafrasearla tan de cerca que se reconozca. Eso es material con
  derechos de autor y además hace inútil la práctica cuando el estudiante se
  encuentre la original.

Los pasajes de Reading se escriben desde cero. Si uno cita a una persona real,
la cita tiene que ser inventada y el texto tiene que dejar claro que el escenario
es ilustrativo, o mejor: usar nombres inventados.

Y esto no se afirma, se comprueba: `tools/auditar-originalidad.js` compara el
banco entero contra el material que College Board publica, buscando cadenas de N
palabras seguidas que estén en los dos lados. Lo compartido que sí es legítimo
—las consignas del examen, las definiciones de matemática— se reconoce solo
porque se repite en muchas preguntas nuestras; un pasaje copiado aparecería en
una sola, así que lo que hay que mirar a mano son las coincidencias **únicas**.
La corrida del 24-sep-2026 contra los dos PDF oficiales (el Assessment Framework
de 227 pp. y las Sample Questions) dio **1 coincidencia única a 15 palabras**, y
es la consigna oficial de las preguntas de síntesis. El informe para el colegio
está en `docs/ORIGEN-DE-LAS-PREGUNTAS.md`.

## El archivo

Un archivo = un set = un `window.SAT_SETS.push({...})`. Nada más.

```js
/* SAT Studio question set — Math: Algebra — Brutal (BAL-01 to BAL-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-brutal-alg1',          // único en todo el banco, en kebab-case
    title: 'Algebra — Brutal',       // lo que se ve en la tarjeta
    section: 'math',                 // 'math' | 'rw' | 'mixed'
    level: 'Extreme',                // CLAVE INTERNA, ver abajo
    description: 'One line saying what is inside and why it is hard.',
    minutes: 20,                     // número, para el estimado de tiempo
    questions: [ /* ... */ ]
  });
})();
```

## Las claves internas que NO se traducen

`level` y `difficulty` son **claves de enrutamiento**, no etiquetas. La app las
usa literalmente para armar los mocks adaptativos y para pintar el badge:

| clave interna | lo que ve el estudiante |
|---|---|
| `'Fácil'` | Warm-up |
| `'Media'` | Test Level |
| `'Difícil'` | Hard · real M2 |
| `'Extreme'` | Brutal |

Se escriben con acento y en español porque así nacieron y así las lee
`SAT_NIVELES` / `SAT_NIVEL_CLASE` / `LVLORD` en `index.html`. Cambiarlas rompe
el examen adaptativo en silencio. **Todo lo demás va en inglés.**

> [!warning] El tier brutal se marca distinto en el SET y en la PREGUNTA
> En el **set** va `level: 'Extreme'` — esa es la etiqueta que se muestra.
> En cada **pregunta** va `difficulty: 'Difícil'` **más** `extreme: true`.
>
> No es capricho. Todo el motor —`hrank`, `cbDiff`, `assembleModule`,
> `weightOf`, `LVLORD`, `DIFFS`— compara la dificultad contra las **tres**
> cadenas `Fácil`/`Media`/`Difícil`. Una pregunta con `difficulty:'Extreme'`
> cae al rango 0 y el mock adaptativo **la manda al módulo fácil**: justo lo
> contrario de lo que dice. `validar-set.js` lo rechaza, y `indexSets()` lo
> normaliza al cargar por si alguna se cuela.

`domain` tiene ocho valores y ninguno más:

- Matemática: `Algebra` · `Advanced Math` · `Problem-Solving & Data Analysis` ·
  `Geometry & Trigonometry`
- Reading & Writing: `Craft and Structure` · `Information and Ideas` ·
  `Standard English Conventions` · `Expression of Ideas`

## Una pregunta de opción múltiple

```js
{
  id:'BAL-01', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
  skill:'Systems with a parameter (no solution)',
  stem:'In the system 3x + ky = 12 and 9x + 15y = 30, k is a constant. For which value of k does the system have NO solution?',
  choices:{A:'5', B:'3', C:'15', D:'−5'},
  correct:'A',
  expCorrect:'Divide the second equation by 3: 3x + 5y = 10. Now the left sides match when k = 5, and the right sides do NOT (12 ≠ 10): two parallel lines, no solution. (With k = 5 and 12 = 10 it would have been the same line.)',
  expWrong:{
    B:'3 comes from 9/3, the factor that relates the two equations — not from the coefficient of y.',
    C:'15 compares k to the 15 in the second equation without scaling it down first. Divide by 3 and the number to match is 5.',
    D:'−5 is a sign slip: dividing 15 by 3 gives +5.'
  },
  tip:'Scale one equation so the x-coefficients match. Then: same left side and same right side → infinitely many; same left side and DIFFERENT right side → no solution.',
  desmos:'Graph 3x+5y=12 and 3x+5y=10: parallel, never meet.',
  desmosLatex:['3x+5y=12','3x+5y=10']
}
```

Reglas que el validador exige:

- Exactamente cuatro opciones: `A`, `B`, `C`, `D`.
- La respuesta correcta **no puede caer siempre en la misma letra**. El validador
  falla si una letra se lleva más del 45 % de un set de 8 o más preguntas; se
  arregla con `node tools/rebalancear-clave.js <archivo>`, que solo renombra
  letras y comprueba que la pregunta no cambió.
- **La correcta no puede ser sistemáticamente la opción más larga.** El validador
  falla si lo es en más del 60 % de un set, y avisa por pregunta cuando le saca
  demasiada ventaja a las tres incorrectas. No es estética: si el largo delata la
  respuesta, el estudiante acierta sin leer, aprende una estrategia que en el
  examen real no funciona, y de paso infla el porcentaje que el plan de mejora
  usa para decidir qué practicar. Se arregla dándole a los distractores el
  razonamiento concreto que los hace tentadores, no rellenando con palabras.
  Medida del banco entero: `node tools/auditar-longitud.js --todos`.
  **Ojo:** en matemática el número no significa nada. Cuando las cuatro opciones
  son `4 · 6 · 12 · 18`, "la más larga" es ruido y no una pista: el 79 % de las
  preguntas de matemática tienen las cuatro opciones en 12 caracteres o menos.
  El punto vive en Reading, donde las opciones son prosa y el largo sí se ve.
  Y no hay que empujarlo a 0 %: eso solo invierte el problema, y "nunca marques
  la más larga" pasa a ser la estrategia ganadora. El objetivo es el azar, ~25 %.
  Por eso la herramienta mide **las dos direcciones**, más larga y más corta: el
  primer set que se arregló a conciencia terminó con la correcta siendo la más
  corta en el 42 % de sus preguntas, que es el mismo defecto al revés.
- **Dos opciones no pueden tener el mismo texto.** El que razona bien puede
  marcar la que no está en `correct`.
- **Ojo con `<`**: todo esto se inyecta con `innerHTML`, y un `<` seguido de letra
  abre una etiqueta — el navegador se come el texto hasta el siguiente `>` sin
  decir nada. `x < y` hay que escribirlo `x &lt; y` (o dejar el espacio, que ya lo
  hace seguro). El validador lo revisa.
- `correct` tiene que ser una de ellas.
- `expWrong` explica **las tres incorrectas, ni una más ni una menos**. Si
  `correct` es `'B'`, las claves son `A`, `C`, `D`.
- `skill`, `stem`, `expCorrect` y `tip` nunca van vacíos.
- Nada de español en ningún texto que lea el estudiante.

## Una pregunta de respuesta escrita (grid-in, SPR)

```js
{
  id:'BAL-07', type:'spr', domain:'Algebra', difficulty:'Difícil',
  skill:'Linear model from two conditions',
  stem:'…',
  answer:'26',
  expCorrect:'…',
  tip:'…',
  desmos:'…'
}
```

- `type:'spr'`, `answer` presente, **sin** `choices` y **sin** `correct`.
- El SAT real es ~25 % SPR en matemática. El banco venía en 21,7 %, así que los
  sets nuevos de matemática empujan hacia arriba ese porcentaje a propósito.

## La trampa del clasificador: qué destreza se lleva tu pregunta

Esta es la parte que más trabajo costó en la tanda a 3.250, y la que no se ve.

Cada pregunta cae en **una** de las 30 destrezas oficiales, y quien lo decide no
eres tú: es `skillOf()` en `index.html`, corriendo un regex contra el campo
`skill` **más los primeros 160 caracteres de `stem`**. Dentro de un dominio las
destrezas se prueban **en orden** —primero las que llevan `pri`, después el orden
del arreglo— y **gana la primera que machea**. La última de cada dominio es el
cajón de sastre.

Así que una palabra de más manda tu pregunta a otra destreza **en silencio**. No
falla nada: `auditar-destrezas.js` sigue diciendo "todas clasificadas", porque lo
están — solo que en el casillero equivocado, y el número que el estudiante ve en
su pestaña de temas queda mentiroso.

**Antes de escribir un set, abre `SAT_SKILLS` en `index.html`** y mira, para tu
destreza: qué palabras la disparan, y qué palabras disparan las que se prueban
**antes** que ella. Esas segundas son tus prohibidas, en `skill` y en el arranque
del `stem`. Más allá del carácter 160 puedes escribir lo que quieras.

Las que de verdad mordieron, para que no vuelvan a morder:

| escribes | se va a | escribe mejor |
|---|---|---|
| "200 residents **randomly selected**" | Evaluating statistical claims | "a **random sample of** 200 residents" |
| "**correlation** between the two" | Evaluating statistical claims | "**association** between the two" |
| "the **sample mean** of the 40 values" | Inference from samples | "the **mean of** the 40 values" |
| "the **average** price rose 8 %" | One-variable data | "the price rose 8 %" |
| "the **price** per liter" (en una de tasas) | Percentages | "the **cost** per liter" |
| "**average speed**" (en una de tasas) | One-variable data | "**speed**" |
| "**complementary angles** in the figure" | Right triangles and trig | "the two angles add to 90 degrees" |
| "the **radius** of the cylinder" | Circles | "a cylinder 12 cm **across**" |
| "**tangent line**" (en una de trigonometría) | Circles | "the **tangent of** angle A", "tan A" |
| "**slope-intercept form**" | Linear equations in two variables | "**slope-intercept**", o solo "slope" |
| "**at least** 12 tickets" (en una que no es de desigualdades) | Linear inequalities | "**exactly** 12 tickets" |
| "**infinitely many solutions**" | Systems of two linear equations | "the two equations describe the same line" |
| "**factor** the quadratic" | Equivalent expressions | "**solve**", "the **roots** of" |
| "**radical equation**" | Equivalent expressions | "**square-root equation**" |
| "which choice best **supports**" (en una de inferencia) | Command of Evidence: Textual | "which choice most **logically completes** the text" |
| "the **meaning** of the disagreement" | Words in Context | "how Text 2 **responds to** Text 1" |
| "the verb in the subordinate **clause**" | Boundaries | "the verb in the **inner phrase**" |

Y dos que muerden por el otro lado, porque al matcher le faltaba algo:

- El examen escribe **`sin` / `cos` / `tan`**, no "sine"/"cosine". El matcher no las
  conocía y una identidad de cofunción caía en el cajón de sastre.
- **`counting`, `range`, `spread` y `unit`** iban sin `\b` por delante y se comían
  "discounting", "orange", "spreadsheet" y "community".

Las dos redes que lo vigilan ahora: **S18** en `test-shell.js` (ningún matcher
muerde una palabra inglesa ajena) y los **casos canónicos** en
`auditar-destrezas.js` (cada caso sacado de un error real cae donde debe). S18
sola no alcanzaba: un matcher también falla cuando **no reconoce lo suyo**, y ahí
la pregunta se va al cajón sin que nada se ponga en rojo.

**Después de agregar un set, corre siempre `node tools/auditar-destrezas.js`** y
mira que tus preguntas hayan caído donde querías, y que no las haya recogido el
cajón (la columna marcada con `~`).

## Qué hace buena a una explicación

Esta es la parte que de verdad enseña, y es donde se nota si la pregunta la
escribió alguien que entiende el examen.

1. **`expCorrect` hace la cuenta.** No "sustituye y resuelve": el paso a paso con
   los números, y una comprobación al final cuando se puede (`Check: 12 + 12 = 24 ✓`).
2. **Cada `expWrong` nombra el error concreto** que produce ESA opción. Los
   distractores no son ruido: cada uno corresponde a una equivocación típica
   (signo mal movido, dividir por el número equivocado, contestar la variable que
   no piden, quedarse en el penúltimo paso). La explicación tiene que decir cuál.
3. **`tip` es transferible.** Es la regla que sirve para la próxima pregunta del
   mismo tipo, no un comentario sobre esta. "Si multiplicas o divides por un
   negativo, el signo de la desigualdad se voltea" sirve; "acuérdate de revisar"
   no sirve.
4. **Nada de relleno.** Se lee en la pantalla de resultados, con el estudiante
   cansado.

## Qué hace difícil a una pregunta (y qué no)

Difícil **no** es números más feos. Difícil es:

- **Más pasos encadenados**, donde el resultado intermedio no es la respuesta
  (pedir `a² − a` en vez de `a`).
- **Un parámetro** en vez de un número (`kx + 3y = 12`, "¿para qué k…?").
- **Elegir entre dos raíces** con una condición (`a > 1`).
- **La trampa de unidades**: el modelo está en minutos y la pregunta en horas.
- **Condición escondida en el enunciado** que descarta una opción entera.
- En Reading: pasajes con dos voces que casi coinciden, distractores que son
  verdaderos *según el texto* pero no contestan la pregunta, y síntesis donde la
  opción correcta generaliza y las otras tres son ejemplos sueltos.

Un buen chequeo: si un estudiante fuerte resuelve la pregunta en un paso mental,
no es `Extreme`.

## Pista de Desmos

`desmos` es **texto que el estudiante lee** en la pantalla de resultados bajo
"📈 In Desmos", así que va en inglés y dice qué graficar y qué mirar.
`desmosLatex` es el arreglo de expresiones que el botón carga en la calculadora:
eso es código, no se traduce.

En matemática el validador **avisa** (no bloquea) si falta. Se deja pasar solo
cuando Desmos de verdad no aporta nada.

## Los ids

`PREFIJO-NN`, con el prefijo propio del set y dos dígitos: `BAL-01`, `HMP-12`.
El validador falla si un id choca con el banco vivo o se repite dentro del
archivo.

## Enchufar el set

1. `node tools/validar-set.js sets/mi-set.js` → tiene que salir en verde.
2. Agregar `<script defer src="sets/mi-set.js"></script>` en `index.html`, en el
   bloque de sets, junto a los de su familia.
3. `tools/verificar.sh` → las siete suites en verde.
4. `node tools/huella-banco.js` → la huella CAMBIA (agregaste preguntas); lo que
   no puede cambiar es el resto del banco, y de eso se encarga el auditor.
