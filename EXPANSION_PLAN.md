# SAT Studio — Plan de expansión del banco

**Medición: 26 de julio de 2026.** Reemplaza al plan del 14-jul-2026, que se
conserva íntegro en `EXPANSION_PLAN_2026-07-14_historico.md` y en el historial
de git.

> **El plan anterior no fue ignorado: se ejecutó completo.** Sus cinco
> prioridades —mashups de Algebra+Functions, paired passages, drill de SPR,
> tono y actitud, y el puente de vocabulario— están todas en `sets/`. El banco
> pasó de ~34 sets a 61. Y precisamente por eso sus conclusiones hoy están
> **invertidas**: pedía más dificultad alta y más SPR, y ahora sobra dificultad
> alta y el SPR está en su punto. Seguir aquel documento llevaría a expandir en
> la dirección opuesta a la que hace falta.

---

## Cómo se midió

Se ejecutaron los `<script src="sets/...">` **vivos** de `index.html` y se contó
cada pregunta. La distinción importa:

| | |
|---|---:|
| Archivos en `sets/` | 69 |
| − diccionarios de pistas `desmos-*.js` (no son sets) | −6 |
| − sets retirados (`rw-set3`, `rw-set10`: `<script>` comentado el 14-jul-2026) | −2 |
| **Sets que la app carga** | **61** |
| **Preguntas jugables** | **725** (307 math · 418 R&W) |

Contar la carpeta en vez de lo que se carga infla el número en dos sets. Un set
retirado no es práctica.

Los pesos oficiales salen del **Assessment Framework for the Digital SAT Suite**
de College Board (PDF, 227 pp.): tabla 19 en la p. 85 para matemática, y las
pp. 68, 74, 81 y 84 para Reading and Writing.

⚠️ Al citar ese PDF: las tablas 17 y 18 son del **PSAT**, con pesos distintos.
La columna que aplica es la del **SAT**.

---

## Estado real del banco

### Matemática — 307 preguntas

Las preguntas cruzadas (*Algebra + Functions*) cuentan en cada dominio que
tocan, así que los porcentajes suman más de 100.

| Dominio | Preguntas | Banco | Oficial | Relación |
|---|---:|---:|---:|:--|
| **Algebra** | 82 | 26,7 % | **35 %** | **0,76×** ← el hueco |
| Advanced Math | 94 | 30,6 % | 35 % | 0,87× |
| Problem-Solving and Data Analysis | 70 | 22,8 % | 15 % | **1,52×** |
| Geometry and Trigonometry | 79 | 25,7 % | 15 % | **1,72×** |

**Algebra y Advanced Math son el 70 % del examen** y el 57 % del banco. Los dos
dominios chicos son el 30 % del examen y casi la mitad de la práctica.

### Reading and Writing — 418 preguntas

| Dominio | Preguntas | Banco | Oficial | Relación |
|---|---:|---:|---:|:--|
| Standard English Conventions | 110 | 26,3 % | 26 % | 1,01× |
| Information and Ideas | 109 | 26,1 % | 26 % | 1,00× |
| Craft and Structure | 104 | 24,9 % | 28 % | 0,89× |
| Expression of Ideas | 95 | 22,7 % | 20 % | 1,14× |

**Esta mitad está calibrada.** No necesita trabajo de balance — lo cual es
mérito del plan viejo, que atacó justo los huecos de R&W. La energía ahora va a
matemática.

### Dificultad — el problema nuevo

| Nivel | Math | R&W | Total |
|---|---:|---:|---:|
| Fácil | 13,0 % | 9,8 % | **11,2 %** |
| Media | 27,7 % | 31,1 % | 29,7 % |
| **Difícil** | **59,3 %** | **59,1 %** | **59,2 %** |

**Por qué esto es un problema y no un logro.** El SAT digital es adaptativo por
módulo: el **primer** módulo trae una mezcla amplia y es el que fija el techo de
puntaje al que se puede aspirar. Entrenar casi solo en dificultad máxima
construye resistencia pero no **velocidad** en las preguntas fáciles, que son
las que hay que despachar rápido para que sobre tiempo en las difíciles.

Retirar `rw-set3` y `rw-set10` por «demasiado fáciles» fue parte de este
movimiento. La decisión tenía sentido para apuntar a 700 en el segundo módulo;
el efecto lateral fue quedarse sin material que se parezca al primero.

### Formato — correcto

| | Banco | Oficial |
|---|---:|---:|
| Opción múltiple | 77,9 % | ≈75 % |
| SPR (grid-in) | 22,1 % | ≈25 % |

El hueco de SPR que denunciaba el plan viejo (**«solo 3 preguntas»**) está
cerrado: hay **68**.

### Pistas de Desmos — 85 %

260 de 307 preguntas de matemática traen pista. Se guardan de **dos formas** y
hay que mirar las dos al contar: el diccionario `SAT_DESMOS` de los archivos
`desmos-*.js`, y la propiedad `desmos` **inline** en la pregunta. Mirar solo una
da 55 % y hace parecer un hueco grande donde hay un pendiente menor.

### Integridad — impecable

Verificadas las 725: **cero** sin explicación de la correcta, cero MC sin
explicar los tres distractores, cero sin `tip`, cero con la clave fuera de las
opciones, cero IDs duplicados.

El banco está **bien construido**. El problema es de proporciones.

---

## Qué se hizo el 26-jul-2026

**`math-alg3` — «Algebra 3 (núcleo)»**, 12 preguntas.
Cubre las cinco habilidades oficiales del dominio Algebra y ataca las que tenían
una sola pregunta en todo el banco: despeje en dos variables, pendiente entre
dos puntos, notación de funciones, sistemas por eliminación, desigualdades con
inversión de signo, producto de binomios, traducción de enunciados e
interpretación del intercepto. Nivel Media, una SPR, pista de Desmos en las
doce. Cada respuesta y cada distractor verificados con álgebra simbólica.

Efecto medido: **Algebra 0,68× → 0,76×**.

---

## Qué falta, en orden de impacto

### 1. Segundo set de Algebra — llegar a ~1,0×

Faltan unas **25 preguntas** del dominio. Dos sets de 12 lo dejan parejo. Uno
Media y uno Difícil, para no empeorar el sesgo de dificultad.

Habilidades a cubrir, priorizando las que siguen finas: sistemas por sustitución
· sistemas sin solución e infinitas soluciones · desigualdades en dos variables
· rectas paralelas y perpendiculares · modelos lineales con dos condiciones ·
valor absoluto lineal.

### 2. Set Fácil/Media mixto que simule el primer módulo

**Hoy no existe nada parecido.** El banco entero está calibrado para el segundo
módulo difícil. Hacen falta 20–22 preguntas con la mezcla real del primer módulo
—mayoría Fácil y Media, unas pocas Difícil— y con reloj, para entrenar la parte
del examen que decide el techo.

Es también el mejor destino para `rw-set3` y `rw-set10`: en vez de dejarlos
retirados, sus preguntas fáciles pueden alimentar este set.

### 3. Dejar de agregar a Geometry and Trigonometry

Está en 1,72×, y Problem-Solving en 1,52×. No hay que sacar nada —el material es
bueno— pero cada set nuevo de esos dominios empeora el balance. **La forma más
barata de corregir una proporción es no seguir empujándola.**

### 4. Pistas de Desmos para las 47 que faltan

Mecánico, por tandas. Impacto bajo, costo bajo.

### 5. Cruzar el banco con el desempeño real

Esta medición dice **qué practicás**, no **qué fallás**. Los aciertos por dominio
están en la tabla `sat_sessions` de Supabase. Un dominio sobrerrepresentado puede
estar perfectamente bien si es justo el que cuesta. Hasta hacer ese cruce, todo
lo de arriba es una hipótesis basada en el examen, no en el estudiante.

---

## Cómo reproducir la medición

No hace falta ninguna herramienta especial: los sets son JavaScript ejecutable.

1. Sacar de `index.html` los `<script src="sets/...">` que **no** estén dentro de
   un comentario HTML.
2. Ejecutar cada archivo en un contexto con `window.SAT_SETS = []` y
   `window.SAT_DESMOS = {}`.
3. Contar sobre `window.SAT_SETS`, agrupando por `section`, `domain`,
   `difficulty` y `type`.
4. Para Desmos, contar `SAT_DESMOS[q.id] || q.desmos`.

Rehacerla después de cada set nuevo cuesta segundos, y es lo único que evita que
este documento vuelva a quedar equivocado.

## Qué sigue valiendo del plan viejo

Su análisis **cualitativo** de tipos de pregunta no caducó: los patrones de error
en paired passages, las trampas de entrada del grid-in, la diferencia entre tono
«escéptico pero curioso» y «desdeñoso», y la escasez de verbos y modificadores
frente a la puntuación en Conventions. Todo eso está en
`EXPANSION_PLAN_2026-07-14_historico.md` y sigue siendo buen material de
referencia al escribir preguntas nuevas.

Lo que caducó son sus **números** y, por lo tanto, sus prioridades.

---

El análisis completo, con el contexto de estudio, vive en el vault:
`20_Academico/SAT/SAT - Auditoría del banco.md`.
