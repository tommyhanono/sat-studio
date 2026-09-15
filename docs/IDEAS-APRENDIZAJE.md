# Cómo se aprende de verdad con una app así, y qué le agregaría a SAT Studio

Investigación + propuesta, 15-sep-2026. Escrito para decidir, no para leer completo:
la sección 3 está ordenada por impacto contra esfuerzo.

---

## 1. Lo que dice la evidencia (los números, no las frases bonitas)

Cuatro cosas tienen respaldo fuerte y medible. Todo lo demás es decoración.

| Técnica | Qué es | Tamaño del efecto |
|---|---|---|
| **Práctica de recuperación** (contestar, no releer) | Sacar la respuesta de la cabeza | g ≈ 0,50 en aula real; d = 0,31–1,26 según el montaje |
| **Espaciado** | Repartir las repeticiones en el tiempo | Combinado con recuperación: **g = 0,74** contra repetir todo junto |
| **Intercalado** | Mezclar tipos de problema en vez de hacer 12 iguales seguidos | Menos estudiado, pero consistente; se siente peor y funciona mejor |
| **Ejemplos resueltos que se van vaciando** | Al principiante se le muestra la solución; después se le quita de a poco | Fuerte en novatos; se **invierte** en el que ya sabe |

La meta-revisión más grande (242 estudios, 169.179 personas) concluye que las dos
técnicas más efectivas son **práctica distribuida** y **práctica con preguntas**.
Justo lo que es esta app. La oportunidad no es agregar categorías nuevas: es
terminar bien las que ya tiene a medias.

Un matiz honesto que conviene tener presente: en **matemática** el efecto de
"contestar en vez de repasar" es más chico y menos robusto que en contenido
verbal (g ≈ 0,18 comparando test contra re-estudio, con el intervalo cruzando el
cero). En matemática lo que manda es el **ejemplo resuelto** y el **intercalado**,
no el volumen de preguntas. Eso cambia qué conviene construir para cada sección.

Sobre el examen en sí: el Digital SAT enruta al **Módulo 2 difícil** según el
Módulo 1, y el módulo fácil **techa** el puntaje alcanzable (queda por ahí de
560–600 por sección). El umbral no es público, pero la estimación que circula es
**~70 % del Módulo 1**. La app ya enruta con `RW_HARD_MIN 17/27` (63 %) y
`MATH_HARD_MIN 16/22` (73 %), o sea que está en el rango correcto. Eso además
convierte "¿entro al módulo difícil?" en **la única métrica que de verdad le
importa a un estudiante ambicioso** — y hoy la app no se la dice.

**Fuentes:** [meta-análisis de espaciado + recuperación (Educational Psychology Review, 2021)](https://eric.ed.gov/?id=EJ1310148) · [espaciado y recuperación en matemática (Educ Psych Review, 2025)](https://link.springer.com/article/10.1007/s10648-025-10035-1) · [meta-análisis en nueve cursos STEM](https://stemeducationjournal.springeropen.com/articles/10.1186/s40594-024-00468-5) · [cómo el Módulo 2 techa el puntaje](https://www.tutelaprep.com/blog/adaptive-testing-on-digital-sat-what-module-2-difficulty-tells-you-about-your-score/) · [formato y scoring 2026](https://www.catalysttestprep.com/blog/complete-guide-digital-sat-2026) · [recursos oficiales para educadores](https://satsuite.collegeboard.org/practice/practice-resources-educators)

---

## 2. Lo que la app ya hace bien (y no hay que tocar)

- **Es práctica con preguntas, no lectura.** El mecanismo de mayor efecto ya es
  el centro del producto.
- **Explica las tres incorrectas, una por una.** Eso es retroalimentación
  elaborativa: lo que más multiplica el efecto de contestar.
- **El plan sale de los errores del propio estudiante**, no de una lista fija.
- **El mock es adaptativo de verdad** y enruta al módulo difícil con umbrales
  parecidos a los reales.
- **Interfaz igual a Bluebook.** No es estética: reduce la carga cognitiva del día
  del examen a cero para todo lo que no sea el contenido.

---

## 3. Los diez cambios que más moverían la aguja

> [!success] Estado al 15-sep-2026 — cuatro ya están hechos
> **3.2 intercalado**, **3.3 confianza al contestar**, **3.4 dónde estás respecto
> del Módulo 2** y **3.6 tiempo por pregunta** están implementados y probados
> (P14 en `tools/test-pantallas.js`). Quedan pendientes 3.1, 3.5, 3.7, 3.8, 3.9
> y 3.10.

Ordenados por impacto ÷ esfuerzo. Los cuatro primeros son los que yo haría
primero y los tres últimos son los que valen para la escuela, no para el alumno
suelto.

### 3.1 · Que el repaso espaciado programe de verdad — y por DESTREZA, no por pregunta
**Impacto: alto. Esfuerzo: medio. Es el g = 0,74.**

Hoy existe `spacedQueue()` y la sección "🔁 Spaced Review", pero repasar la
*misma pregunta* enseña a reconocer el enunciado, no a resolver el tipo. La
versión correcta: la unidad que se programa es la **destreza** (`skill`), y cada
vencimiento trae una pregunta **distinta** de esa destreza, del banco.

Intervalos: 1, 3, 7, 16, 35 días. Si falla, vuelve a 1. Si acierta dos veces
seguidas rápido, salta un escalón. Es SM-2 simplificado y con el banco actual
(786 preguntas, ~90 destrezas) hay material de sobra para no repetir.

### 3.2 · Intercalar dentro del plan, en vez de agrupar por tema ✅ HECHO
**Impacto: alto. Esfuerzo: bajo — es ordenar distinto un arreglo.**

`planBuildSet()` arma el test agrupado por tema. Ese es el orden que *se siente*
bien y el que **funciona peor**: el estudiante entra en piloto automático y
resuelve sin decidir qué método usa. Mezclar las destrezas elegidas obliga a la
parte difícil y real: primero reconocer qué tipo de problema es.

Cuidado con una cosa: esto empeora el porcentaje de la sesión y el estudiante lo
va a sentir como retroceso. Hay que decírselo en pantalla, una línea: *mixed on
purpose — it is harder now and it is what makes it stick.*

### 3.3 · Preguntar la confianza antes de revelar ✅ HECHO
**Impacto: alto. Esfuerzo: bajo.**

Al contestar, tres botones: **Guess · Not sure · Sure**. Dos razones:

1. Hoy una respuesta adivinada cuenta igual que una sabida, así que el plan cree
   que el estudiante domina algo que no domina. `perQuestion` ya guarda `ok`;
   agregarle `conf` arregla el diagnóstico de raíz.
2. El momento de máxima retención es cuando alguien estaba **seguro y se
   equivocó**. Esas hay que marcarlas distinto y traerlas de vuelta antes.

De paso da la métrica más útil que puede tener un estudiante: *"acertaste 8, pero
adivinaste 3 de ellas"*.

### 3.4 · Decirle dónde está parado respecto del Módulo 2 ✅ HECHO
**Impacto: alto. Esfuerzo: bajo.**

`estimadoActual()` devuelve un punto (`1340`). Un punto es mentira: el intervalo
real es ancho. Mostrar una **banda** y, sobre todo, la única frase accionable que
existe en este examen:

> Math Module 1: you are at **68 %**. The hard Module 2 opens around 70 %.
> That module is what puts 700+ in reach.

Eso convierte un número abstracto en una meta a tres preguntas de distancia.

### 3.5 · Ejemplos resueltos que se van vaciando, para las destrezas en rojo
**Impacto: alto en matemática. Esfuerzo: medio.**

Si una destreza está bajo 40 %, mandarle más preguntas es tirarlo a la pileta otra
vez. La secuencia que funciona con novatos: **ejemplo completamente resuelto → el
mismo tipo con el último paso en blanco → con los dos últimos en blanco →
pregunta normal.**

El banco ya tiene el material: `expCorrect` ES el ejemplo resuelto. Solo hay que
mostrarlo *antes* en vez de después, y solo cuando la destreza está en rojo. Y
apagarlo cuando sube: el efecto se **invierte** con el que ya sabe.

### 3.6 · Medir el tiempo por pregunta, no por sesión ✅ HECHO
**Impacto: medio-alto. Esfuerzo: bajo.**

Se guarda `timeUsed` de la sesión entera. Por pregunta aparece la categoría que
hoy es invisible y que decide el examen: **correcta pero lenta**. En un examen con
tiempo, "lo sé pero tardo 3 minutos" es un error que todavía no ocurrió. Un tercer
cubo en el plan —*fallas · lentas · sólidas*— le dice a qué dedicarle la semana.

### 3.7 · Una línea escrita por el estudiante en cada error
**Impacto: medio-alto. Esfuerzo: bajo — el popover de notas ya existe.**

Al fallar, un campo de una línea: *"what did you actually do wrong?"*. Escribirlo
es auto-explicación, y aparece otra vez cuando esa destreza vuelva por repaso
espaciado. Es el cuaderno de errores de toda la vida, pero que no se pierde.

### 3.8 · Segundo intento, pero días después
**Impacto: medio. Esfuerzo: bajo.**

Reintentar una pregunta enseguida es reconocer, no recordar. Que la pregunta
fallada vuelva en el repaso del día 1 y del día 3, con la explicación **tapada**
hasta contestar.

### 3.9 · Mini-mock semanal de 20 minutos, armado con SUS debilidades
**Impacto: medio. Esfuerzo: bajo — las piezas ya están.**

Recuperación + espaciado + intercalado en un solo hábito, y una sola decisión que
tomar por semana en vez de una por día. Los "Daily Mini Mocks" ya existen; esto es
el hermano semanal y con contenido personalizado.

### 3.10 · Para la escuela: tarea asignable y mapa por destreza
**Impacto: alto para adopción. Esfuerzo: medio.**

La vista de profesor (borrador) hoy muestra **dominios**. Un dominio no se puede
enseñar el martes; una **destreza** sí. Dos cosas la vuelven usable de verdad:

- **Mapa de calor por destreza** del grupo: qué enseñar el martes.
- **Asignar un plan** a un grupo con fecha de entrega, y ver quién lo hizo.

Eso es lo que hace que un colegio adopte una herramienta: que le ahorre a la
profesora la pregunta *"¿en qué está fallando mi clase?"*.

---

## 4. Lo que NO le agregaría

Vale tanto como la lista de arriba, porque son las features que todo el mundo
copia y que en una herramienta de escuela hacen daño:

- **Tabla de posiciones entre estudiantes.** Motiva a los tres de arriba y hunde
  a los de abajo, que son justamente para quienes existe la herramienta. Si se
  quiere comparación, que sea **contra uno mismo** hace dos semanas.
- **Rachas con castigo.** Perder una racha de 40 días por un examen de otra
  materia hace que la gente abandone la app entera. Si hay racha, que sea sin
  culpa: "3 de los últimos 7 días" en vez de un contador que se rompe.
- **Puntos por volumen.** Premia contestar mucho y fácil, que es exactamente el
  hábito que hay que desarmar. Si hay premio, que sea por **dificultad superada**.
- **Un chat de IA que explique de nuevo.** Suena obvio y es la trampa más cara:
  sin anclarlo al banco inventa matemática que suena bien. Si algún día se hace,
  se hace **anclado a `expCorrect` y `tip`**, sin libertad para redactar pasos
  nuevos.

---

## 4.bis · Un defecto que no estaba en la lista y sí importaba

Midiendo el banco apareció algo que ninguna de las diez ideas cubría: **en Reading
& Writing, la respuesta correcta era la opción más larga el 47 % de las veces**, y
en seis sets el 100 %. Al azar sería 25 %.

En esos seis, un estudiante que marque siempre la más larga saca 12 de 12 sin leer
el pasaje. Hace daño dos veces: le enseña una estrategia que en el examen real no
funciona —College Board controla el largo— y le infla el porcentaje que este mismo
plan usa para decidir qué practicar.

Se arregla haciendo **mejores los distractores**, no más cortos los correctos: un
distractor corto suele serlo porque es perezoso, nombra una idea equivocada sin
darle al estudiante ninguna razón para creerla. Lo mide
`node tools/auditar-longitud.js --todos` y `validar-set.js` ya rechaza un set nuevo
que pase del 60 %.

## 5. Si tuviera que elegir tres

1. **Confianza al contestar** (3.3) — barata, y arregla el diagnóstico de raíz.
2. **Repaso espaciado por destreza** (3.1) — es el efecto más grande que existe.
3. **Dónde estás respecto del Módulo 2** (3.4) — convierte el progreso en algo
   que el estudiante entiende y persigue.

Las tres se apoyan en datos que la app ya guarda. Ninguna necesita backend nuevo.
