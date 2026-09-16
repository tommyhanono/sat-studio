# Plan de la sesión — Classroom de verdad, taxonomía oficial y 1.200 preguntas

Escrito al arrancar, 15-sep-2026. Sirve para dos cosas: que el trabajo sea
legible si se corta a la mitad, y para no inventar el diseño sobre la marcha.

---

## 0. Lo que se investigó antes de diseñar

**La taxonomía oficial del Digital SAT** (College Board): cuatro dominios por
sección y, dentro de cada uno, *skills and knowledge testing points* con nombre
propio. Son **30 en total**, y son los nombres que el estudiante va a ver en su
reporte oficial — así que son los que tiene que ver acá.

| Reading & Writing | destrezas |
|---|---|
| Information and Ideas (26 %) | Central Ideas and Details · Command of Evidence: Textual · Command of Evidence: Quantitative · Inferences |
| Craft and Structure (28 %) | Words in Context · Text Structure and Purpose · Cross-Text Connections |
| Expression of Ideas (20 %) | Rhetorical Synthesis · Transitions |
| Standard English Conventions (26 %) | Boundaries · Form, Structure, and Sense |

| Math | destrezas |
|---|---|
| Algebra (35 %) | Linear equations in one variable · Linear functions · Linear equations in two variables · Systems of two linear equations · Linear inequalities |
| Advanced Math (35 %) | Equivalent expressions · Nonlinear equations and systems · Nonlinear functions |
| Problem-Solving & Data Analysis (15 %) | Ratios, rates and units · Percentages · One-variable data · Two-variable data and scatterplots · Probability and conditional probability · Inference from samples and margin of error · Evaluating statistical claims |
| Geometry & Trigonometry (15 %) | Area and volume · Lines, angles and triangles · Right triangles and trigonometry · Circles |

**Fuentes:** [College Board · Reading and Writing](https://satsuite.collegeboard.org/sat/whats-on-the-test/reading-writing) ·
[desglose de destrezas de R&W](https://www.piqosity.com/digital-sat-english-test-content/) ·
[desglose de destrezas de matemática](https://www.piqosity.com/digital-sat-math-test-content/)

**Google Classroom**, qué vale la pena copiar y qué no:

- **Copiar**: la clase como contenedor con **código para unirse** (el profesor no
  depende de que un admin le importe la lista); el trabajo **tipado** (material,
  tarea, examen) en vez de un muro plano; agrupar el trabajo por tema; y la
  cuadrícula de "quién hizo qué" como pantalla principal del profesor.
- **No copiar**: el muro social con comentarios. Acá el valor no es la
  conversación, es que el profesor vea dónde falla el grupo.

---

## 1. La taxonomía oficial dentro del banco

Hoy el banco tiene `domain` (los ocho oficiales) y `skill`, que es un título
libre: **536 valores distintos**. Eso sirve para leer una pregunta y no sirve
para nada más: no se puede filtrar, ni agrupar, ni pedirle al profesor que elija.

Se agrega `SAT_SKILLS`: las 30 destrezas oficiales con su dominio, su peso y un
matcher. Cada pregunta queda clasificada en **exactamente una**, y hay una prueba
que falla si alguna queda sin clasificar.

Con eso:
- las pestañas de temas se arman solas, por dominio → destreza, con cuántas hay
  de cada una y en qué nivel;
- el profesor arma trabajo eligiendo destrezas **oficiales**;
- el reporte de la clase habla el mismo idioma que el reporte de College Board.

## 2. Las pestañas de temas

`Math Topics` y `Verbal Topics` dejan de ser una lista de sets y pasan a ser
**la taxonomía**: cuatro dominios, sus destrezas, y para cada una cuántas
preguntas hay por nivel (Warm-up · Test Level · Hard · Brutal). Se practica una
destreza directamente, en el nivel que se elija, sin pasar por un set.

Los sets siguen existiendo debajo, en su buscador, para quien quiera una tanda
armada.

## 3. Classroom de verdad

```
sat.classes          id · school · teacher_id · nombre · periodo · codigo · archivada
sat.class_members    class_id · user_id · joined_at
sat.classwork        id · class_id · kind · titulo · cuerpo · spec · vence · publicado
```

`kind` son cuatro y cada uno significa algo distinto:

| kind | qué es | intentos | cuenta |
|---|---|---|---|
| `warmup` | 3–5 preguntas para abrir la clase | ilimitados | no |
| `assignment` | trabajo para practicar | ilimitados | mejor intento |
| `final` | una parte del final | **uno** | sí, y se reporta |
| `material` | un ejemplo resuelto que escribe el profesor | — | no |

El resultado de cada intento ya vive en `sat.sessions`; se ata con
`set_id = 'cw-<id>'`. El profesor ve por trabajo: quién lo hizo, cuántas veces,
su mejor resultado, y **en qué destrezas falló la clase entera** — que es la
única pregunta que un profesor necesita contestar el martes.

`material` es la respuesta a "que la profesora pueda enseñar": escribe el
ejemplo, opcionalmente con expresiones de Desmos, y todos lo ven y lo pueden
abrir en la calculadora.

## 4. Fast Pace

Se rehace. Hoy son tres botones que arman un test y no queda claro qué los
diferencia de todo lo demás.

## 5. Qué sale en cada pestaña

- `Math Topics` / `Verbal Topics`: **todo** lo de esa sección.
- `Daily`: solo lo de hoy. No todo.
- `Practice Tests`: todos los de sección (English Mod / Math Mod). Ya está bien.
- `Full Mocks`: todos, por sección. Ya está bien.
- `My Progress`: ya está perfecto, no se toca.

## 6. El banco a 1.200

De 1.002 a 1.200: **+198**, repartidas contra los huecos que muestre la
taxonomía, no a ojo.

## 7. La ronda final

Las nueve suites, más móvil (375), tablet (iPad 768 y 1024) y escritorio.
