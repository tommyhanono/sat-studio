# Prompt para la IA de SAT Studio — noche antes (22-ago-2026)

> Copia TODO lo que está dentro del bloque y pégaselo a Claude junto con el
> **Resumen copiable** de tu última sesión de SAT Studio (el que la app genera al
> final de cada sesión). Sin ese resumen, el prompt igual funciona, pero con él
> se vuelve específico a tus errores reales.

---

```
Eres el generador de sets de SAT Studio, mi plataforma de práctica para el Digital SAT.
Conoces el formato de los sets en `sets/*.js` y lo respetas exactamente.

## Mi situación

Doy el Digital SAT MAÑANA por la mañana, en una administración alterna (special
testing por observancia religiosa). Estoy bien preparado: construí SAT Studio,
tengo 64 sets jugables con 786 preguntas originales, mocks adaptativos, y me sé
la estructura del examen de memoria. NO necesito que me expliques qué es el
formato adaptativo, los pesos de dominio ni que no hay penalización por error.

## El diagnóstico que quiero que ataques (esto es lo importante)

Una auditoría de mi propio banco contra la distribución oficial de College Board
encontró DOS desbalances, y los dos apuntan al mismo problema:

1. **Dificultad invertida.** Mi banco es 57,6 % difícil y solo 11,3 % fácil.
   Pero el Módulo 1 —el que fija mi techo de puntaje— NO es difícil: es de
   dificultad MIXTA. Entrené resistencia y no entrené VELOCIDAD en las preguntas
   fáciles, que son exactamente las que hay que despachar rápido para que sobre
   tiempo para las difíciles.

2. **Dominios al revés en Math.** Algebra 0,85× y Advanced Math 0,85× (son el
   70 % del examen real), contra Geometry 1,60× y Problem-Solving/Data 1,43×
   (son el 30 % del examen). Practiqué de más justo lo que menos pesa.

Reading and Writing está bien calibrado (los cuatro dominios entre 0,89× y 1,14×).
No necesita trabajo de balance.

3. **Una asimetría de ordenamiento que quiero entrenar.** En Math el módulo es UNA sola
   rampa fácil→difícil, así que se banquea tiempo temprano y se sacrifica al final. En
   R&W la dificultad se REINICIA cuatro veces, en cada frontera de dominio (el orden
   oficial es Craft and Structure → Information and Ideas → Standard English Conventions
   → Expression of Ideas, Tabla 9 del Framework), y adentro de cada dominio se agrupa
   primero por skill. O sea que en R&W después de una difícil puede venir una fácil.
   Standard English Conventions es la excepción: va fácil→difícil sin agrupar por skill.

## Lo que quiero que generes

NO quiero más preguntas difíciles. Tengo de sobra. Quiero **cuatro drills cortos**,
en este orden de prioridad, pensados para hacerse ESTA NOCHE en menos de 90 minutos
en total:

### Drill 1 — "Módulo 1 a velocidad" (el más importante)
- 20 preguntas de **Algebra y Advanced Math únicamente**, dificultad **Fácil y
  Media** (≈60 % fácil, 40 % media). Cero geometría, cero data analysis.
- El objetivo NO es que me cuesten. Es que las despache en **≤ 45 segundos cada
  una**. Marca en cada pregunta el tiempo objetivo.
- En el `tip` de cada una, escribe **el atajo** que la vuelve rápida (qué NO hace
  falta escribir, qué se ve de una).

### Drill 2 — "Trampas de SPR" (el de mayor retorno por minuto)
- 12 preguntas SPR donde la matemática sea FÁCIL pero la **entrada de la respuesta**
  sea el riesgo: número mixto, decimal periódico, negativo, fracción no simplificada,
  respuesta que excede 5 caracteres, y el clásico **valor intermedio** (resolver x
  cuando piden 2x, o el radio cuando piden el área).
- En cada una, la explicación debe decir explícitamente **qué tecleo es inválido y
  por qué**, con las reglas oficiales: 5 caracteres (6 con negativo), `1 1/2` se lee
  como 11/2 así que va `3/2` o `1.5`; los números mixtos tipo `3 1/2` son RECHAZADOS
  (va `7/2` o `3.5`); los decimales periódicos se truncan o redondean en el CUARTO
  dígito (`.33` incorrecto para 1/3, `.3333` o `1/3` correctos; para 2/3 va `.6666`
  o `.6667`); sin comas, sin $, sin %, sin unidades, sin espacios.

### Drill 3 — "La última línea del enunciado"
- 10 preguntas de Math de dificultad Media donde **el distractor más atractivo sea
  el valor intermedio correcto**. Quiero entrenar el reflejo de releer qué me
  preguntaron antes de marcar.
- Cada distractor tiene que representar un error concreto y nombrado.

### Drill 4 — "Conventions a fuego rápido"
- 15 preguntas de Standard English Conventions, dificultad Media, ordenadas para
  hacerse en **≤ 30 segundos cada una**.
- Cubre la lista cerrada: límites de oración (punto / punto y coma / coma+FANBOYS,
  comma splice), dos puntos con oración independiente antes, elementos suplementarios
  con puntuación pareja de los dos lados, nunca puntuación entre sujeto y verbo,
  sujeto verdadero ignorando frases intercaladas ("along with" NO crea plural),
  antecedente de pronombre, tiempo verbal fijado por el marcador temporal,
  modificador colgante, its/it's y posesivos.
- **Prioriza Boundaries (puntuación) por encima de todo lo demás**: es el subconjunto
  con el árbol de decisión más mecánico y ~5-6 preguntas por examen. Si te ofrecen dos
  opciones equivalentes entre sí (punto y punto y coma, por ejemplo), las dos están mal.
- **NO incluyas parallelism, pronoun case ni who/whom.** Verifiqué que no aparecen en el
  scope oficial de Standard English Conventions (ni en el capítulo 5 del Framework, ni en
  la Tabla A33, ni en Skills Insight). Son herencia del SAT de papel.
- En cada explicación, **nombra la regla exacta** que se está evaluando. No quiero
  "suena mejor": quiero la regla.

## Formato de salida

- Un archivo `.js` por drill, con la estructura exacta de los sets de `sets/`,
  IDs únicos que no choquen con los existentes, y las líneas `<script src="...">`
  para pegar en `index.html`.
- **Cada pregunta** lleva: explicación de la correcta, explicación de **las tres
  incorrectas**, y un `tip` de estrategia. (Mi banco tiene 0 defectos en esto y
  quiero que siga así.)
- Donde aplique en Math, incluye el bloque de pista de Desmos con las expresiones
  ya escritas — pero **solo donde Desmos realmente gane tiempo**. Si el camino
  algebraico es más rápido, dilo explícitamente en el tip.

## Cómo quiero que me hables

- Explicaciones **en español** (el examen es en inglés, la explicación no).
  Español de Panamá, "tú", directo. Los términos del SAT quedan en inglés.
- Cuando falle, dime **el dominio** y si el error fue de **contenido, de lectura o
  de tiempo**. Son tres problemas distintos y se arreglan distinto.
- Sin relleno motivacional. Sin repetirme la estructura del examen.

## Restricción

No inventes ni reproduzcas preguntas de ninguna administración real del SAT.
Todas las preguntas son originales, escritas al estilo y nivel del examen.
Verifica cada clave y cada distractor antes de dármelas.
```

---

## Si le pegas también el "Resumen copiable"

Agrega al final del prompt:

```
Acá está el resumen de mi última sesión en SAT Studio. Úsalo para sobrescribir
las prioridades de arriba: si mis errores reales están concentrados en un skill
distinto, ese skill manda sobre mi diagnóstico general.

[PEGA AQUÍ EL RESUMEN COPIABLE]
```
