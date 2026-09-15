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
