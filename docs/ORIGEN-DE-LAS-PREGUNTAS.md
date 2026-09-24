# De dónde salen las preguntas de SAT Studio

**Documento de evidencia.** Qué se tomó del material oficial de College Board, qué no,
y la prueba de que el banco no está copiado.

- **Autor:** Tommy Hanono
- **Fecha:** 24 de septiembre de 2026
- **Aplica a:** el banco de 3.250 preguntas, versión del 16 de septiembre de 2026
- **Código fuente público:** <https://github.com/tommyhanono/sat-studio>

> **Las 3.250 preguntas de SAT Studio se escribieron desde cero para esta aplicación.**
> Ninguna es una copia ni una paráfrasis de una pregunta publicada por College Board.
> Lo que sí se tomó del material oficial es el *molde* del examen: cuántas preguntas por
> dominio, qué destrezas se evalúan, los tiempos, el ruteo adaptativo y la hoja de
> referencia de matemática.

La propia aplicación lo declara en pantalla, en el pie de la página de ingreso y del
inicio: *"All questions are original; College Board does not sponsor or endorse this tool."*

---

## 1. Qué se tomó del material oficial

Para que la práctica sirva, un examen de práctica tiene que tener la misma *forma* que el
real. Esa forma —no el contenido— viene de documentos públicos de College Board, y cada
dato está citado en [`docs/sat-reference.md`](sat-reference.md).

| Fuente oficial | Qué se tomó de ahí |
|---|---|
| **Assessment Framework for the Digital SAT Suite** (v3.01, agosto 2024) · [PDF](https://satsuite.collegeboard.org/media/pdf/assessment-framework-for-digital-sat-suite.pdf) | Conteo de preguntas, tiempos, división operativa/pretest, peso de cada dominio, las **30 destrezas oficiales**, la terminología de los módulos, el modelo de puntaje y la **hoja de referencia de matemática** (Apéndice D), que sí se reproduce literal porque es la que el estudiante ve en el examen. |
| **How the SAT Is Structured** · [link](https://satsuite.collegeboard.org/sat/whats-on-the-test/structure) | Dos secciones, dos módulos cada una, 32 y 35 minutos por módulo, receso de 10 minutos, 54 y 44 preguntas. |
| **What Are Content Domains?** · [link](https://satsuite.collegeboard.org/practice/content-domains) | Los ocho dominios y la lista de destrezas de cada uno, con los nombres exactos que usa el reporte que College Board le manda al estudiante. |
| **Reading and Writing · question distribution** · [link](https://satsuite.collegeboard.org/digital/about/alignment/reading-writing/question-distribution) | Cuántas preguntas de cada dominio trae la sección verbal. |
| **The Math Section: Overview · Student-Produced Responses** · [link](https://satsuite.collegeboard.org/sat/whats-on-the-test/math/overview) | Proporción de opción múltiple y de respuesta escrita, reglas de formato de la respuesta escrita, y que la calculadora Desmos se permite en toda la sección. |
| **Digital SAT Sample Questions** · [PDF](https://satsuite.collegeboard.org/media/pdf/digital-sat-sample-questions.pdf) | El **formato** de cada tipo de pregunta: cómo se redacta la consigna, cómo se presentan las notas de una pregunta de síntesis, cómo se ve una tabla. Los ítems de ese PDF no se usaron como contenido; de hecho ese mismo PDF se usa como referencia en la prueba de la sección 3. |

**Lo que no se tomó:** ningún enunciado, ningún pasaje de lectura, ninguna opción de
respuesta y ninguna explicación. Los pasajes de lectura se escriben completos, con nombres
y escenarios inventados. Esa es la "regla cero" de
[`docs/COMO-ESCRIBIR-PREGUNTAS.md`](COMO-ESCRIBIR-PREGUNTAS.md), que además explica por qué:
copiar es material con derechos de autor, y le quita el sentido a la práctica cuando el
estudiante se encuentre la pregunta original en Bluebook.

## 2. Cómo se escribió el banco

Las preguntas las redactó el autor del proyecto con asistencia de un modelo de lenguaje
(Claude), siguiendo un contrato escrito que fija qué campos lleva una pregunta, cómo se
construye una explicación y qué hace difícil a una pregunta de verdad. Antes de que un
archivo entre a la aplicación, `tools/validar-set.js` lo rechaza si no cumple:

- el identificador del set y de cada pregunta son nuevos, no chocan con nada del banco;
- cuatro opciones A–D, la correcta entre ellas, y una explicación para **cada una** de las tres incorrectas;
- las de respuesta escrita traen la respuesta y no traen opciones;
- el dominio es uno de los ocho oficiales;
- **ningún enunciado repite otro**, ni dentro del archivo ni contra las 3.250 que ya están vivas;
- todo el texto que lee el estudiante está en inglés;
- la respuesta correcta no cae siempre en la misma letra.

Encima corren catorce baterías de verificación (`tools/verificar.sh`) cada vez que se publica.

## 3. La prueba: se comparó el banco contra el material publicado

Afirmar que algo es original no es lo mismo que comprobarlo. `tools/auditar-originalidad.js`
compara las 3.250 preguntas contra el material que College Board publica, y cualquiera
puede volver a correrlo.

**El método.** Los dos textos se normalizan —se quitan formato, comillas tipográficas y
puntuación, y todo pasa a minúscula— y se parten en **cadenas de N palabras consecutivas**.
Después se busca una sola cadena que esté en los dos lados. Ocho palabras seguidas
idénticas no ocurren por casualidad en prosa: ocurren cuando hay copia.

La excepción legítima son las **fórmulas**: las instrucciones del examen ("Which choice
completes the text so that it conforms to the conventions of Standard English?") y las
definiciones de matemática son idénticas para todo el mundo *por diseño*. Esas se distinguen
solas, sin lista que mantener: una fórmula se repite en muchas preguntas nuestras, mientras
que un pasaje copiado aparecería en una sola. Por eso la columna que importa es la de
coincidencias **únicas**.

**El material contra el que se comparó:**

- *Digital SAT Sample Questions* — 19 páginas, 8.892 palabras, con pasajes, opciones y explicaciones oficiales.
- *Assessment Framework for the Digital SAT Suite* — 227 páginas, 96.298 palabras, incluidos todos los ítems de ejemplo de los apéndices.

**El resultado** (corrida del 24-sep-2026):

| Largo de la cadena | Fórmulas compartidas | Coincidencias únicas |
|---|---:|---:|
| 8 palabras seguidas | 7.291 | 14 |
| 10 palabras seguidas | 4.688 | 5 |
| 12 palabras seguidas | 2.544 | 2 |
| **15 palabras seguidas** | **386** | **1** |

Las 14 coincidencias únicas del nivel más exigente se revisaron una por una. Las catorce son
fórmulas: consignas estándar del examen o enunciados matemáticos que no tienen otra forma de
decirse. Tres ejemplos:

| La cadena que coincide | La pregunta de SAT Studio que la contiene |
|---|---|
| *"in a right triangle, the two sides that form the right angle"* | "In a right triangle, the two sides that form the right angle have lengths **21 and 28**. What is the length of the hypotenuse?" — la definición de cateto es la misma en todo libro de geometría; los números y las opciones son propios. |
| *"the line of best fit for the data is also shown"* | Un diagrama de dispersión de **bicicletas alquiladas contra la temperatura del día** en nueve días. La frase es la manera estándar de decir que la recta está dibujada; el escenario y los datos son propios. |
| *"most effectively uses relevant information from the notes to accomplish this goal"* | Es la **consigna oficial** de las preguntas de síntesis, palabra por palabra. Las notas de esa pregunta —la conservación de un fresco dañado por sales— están escritas para esta aplicación. |

**Ni un solo pasaje de lectura, escenario de matemática u opción de respuesta coincide con el
material publicado.** El mismo resultado se obtiene incluyendo las explicaciones
(`--con-explicaciones`).

## 4. Trazabilidad

El banco no apareció terminado: se construyó a la vista, en un repositorio público con
historial completo. **3.250 preguntas · 168 sets vivos · 109 commits que tocan el banco ·
70 días de escritura.** El primer set se escribió el 9 de julio de 2026 y el último el
16 de septiembre de 2026.

```bash
git clone https://github.com/tommyhanono/sat-studio
cd sat-studio
git log --oneline -- sets/          # los 109 commits del banco
```

## 5. Cómo repetir la prueba

No requiere permiso de nadie ni acceso a nada privado: los dos PDF son públicos y la
herramienta está en el repositorio.

```bash
# 1. bajar el material oficial
curl -L -o muestras.pdf https://satsuite.collegeboard.org/media/pdf/digital-sat-sample-questions.pdf
curl -L -o marco.pdf    https://satsuite.collegeboard.org/media/pdf/assessment-framework-for-digital-sat-suite.pdf

# 2. pasarlo a texto (cualquier extractor sirve; con pdftotext es igual)
python3 -c "import fitz,sys; d=fitz.open(sys.argv[1]); \
  open(sys.argv[2],'w').write(chr(10).join(p.get_text() for p in d))" muestras.pdf muestras.txt

# 3. correr la auditoría
node tools/auditar-originalidad.js muestras.txt marco.txt
```

## 6. Lo que este documento no afirma

Para que la evidencia valga hay que decir también dónde termina.

- **La comparación es contra el material que College Board publica**, no contra su banco
  completo de ítems, que no es público y al que nadie fuera de College Board tiene acceso.
  Lo que se comprobó es que no hay copia del material disponible.
- **No hay revisión humana pregunta por pregunta.** El banco lo escribió el autor con
  asistencia de un modelo de lenguaje y lo revisa una batería automática. Es posible que
  alguna pregunta tenga una clave discutible; la aplicación está pensada para que un
  profesor que encuentre una la reporte y quede corregida para todos.
- **SAT Studio no está afiliado a College Board**, ni patrocinado ni avalado por ellos.
  SAT® es una marca registrada de College Board. La herramienta es gratuita y sin fines de lucro.
