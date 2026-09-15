#!/usr/bin/env node
/**
 * detector-espanol.js — la única definición de "esto está en español".
 *
 *     const { esEspanol } = require('./detector-espanol');
 *
 * Lo usan test-idioma.js (el banco) y test-pantallas.js (lo que se ve en
 * pantalla). Vive aparte para que no haya dos versiones que se desincronicen:
 * ya pasó una vez y dejó 499 campos sin traducir.
 */
'use strict';

/* Detector de español. Dos reglas y las dos son DEFINITIVAS: un solo acierto
   basta. La versión anterior era "sensible a propósito" y eso resultó ser un
   error de diseño: metía en la lista palabras que también son inglesas (son,
   era, solo, area, radio, coma, error, divide, sale, dice, valor) y sufijos que
   chocan con el inglés (-arse en "parse", -erse en "universe", -ando en
   "commando", -endo en "crescendo", -anza en "bonanza"). Con el banco ya
   traducido marcaba 228 campos que estaban perfectos en inglés, así que como
   compuerta permanente no servía: nunca iba a poder quedar en verde.

   Ahora la lista es SOLO palabras que no existen en inglés. Lo que un regex no
   puede ver —una frase corta en español sin ninguna de estas palabras— lo cubre
   la revisión semántica que se hizo sobre las 786 preguntas; esto es la red que
   evita que vuelva a entrar español sin que nadie se dé cuenta. */

/* Nombres propios y notación que llevan acento o parecen españoles y no lo son. */
/* OJO con esto: la lista se APLICA BORRANDO, así que un patrón que muerda media
   palabra inventa una palabra que no estaba. Pasó de verdad: `tan` seguido de
   cualquier letra se comía el "tang" de "tangles" y dejaba "les", que sí es
   español. Por eso todo va con \\b a los dos lados y la notación trigonométrica
   exige que después venga un paréntesis, un dígito, θ, o una letra MAYÚSCULA
   suelta (sin A, cos B). Y se reemplaza por un espacio, no por nada, para no
   pegar dos trozos y formar otra palabra. */
const PERMITIDOS = /(?<![A-Za-zÀ-ÿ])(?:Inés|Ibáñez|Bogotá|café|Perú|México|Nicolás|naïve|résumé|Zaha|José|García|Amara|Petrova|Ada Rourke|Los Angeles|Las Vegas|La Niña|El Niño)(?![A-Za-zÀ-ÿ])|\bLos\b(?=\s+[A-Z])|\bLas\b(?=\s+[A-Z])|\b(?:sin|cos|tan|sec|csc|cot)\s*[²³]?\s*(?:[(θ0-9]|[A-Z]\b)|\b(?:sin|cos|tan)\s*[²³]|\bet\s+al\b|SOHCAHTOA/g;

/* Palabras que NO existen en inglés. Cada una se verificó una por una: las que
   son homógrafas del inglés están fuera a propósito y se listan arriba. */
const ES_PALABRAS = /\b(los|las|una|unos|unas|del|que|por|para|como|cuando|donde|porque|entre|desde|hasta|hacia|durante|mientras|aunque|tampoco|siempre|nunca|toda|todo|todos|todas|otra|otro|otros|otras|mismo|misma|tanto|tiene|tienen|puede|pueden|hace|hacen|dicen|queda|quedan|salen|fue|pero|esto|eso|este|esta|ese|esa|estos|estas|esos|esas|sus|les|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|primero|primera|segundo|segunda|tercero|tercera|alguien|nadie|ninguno|ninguna|cual|cuyo|cuya|ambos|ambas|varios|varias|mucho|mucha|muchos|muchas|poco|poca|pocos|pocas|menos|muy|cada|nada|hay|siguiente|siguientes)\b/i;

/* Vocabulario del banco en español, sin acentos (con acento ya cae por la otra regla). */
const ES_VOCAB = /\b(ecuacion\w*|ecuaciones|exponencial\w*|iguales|cuadratic\w*|raices|despeje|pendiente|recta|rectas|circunferencia|triangul\w*|volumen|posesiv\w*|verbo|verbos|oraciones|palabra|palabras|pregunta|preguntas|respuesta|respuestas|nivel|niveles|facil|dificil|dificultad|simulacro|nucleo|banco|sujeto|sujetos|signo|signos|valores|numeros|suma|resta|multiplica|elevar|elevado|entero|enteros|cateto|catetos|hipotenusa|angulo|angulos|lado|lados|altura|diametro|grafica|graficas|tabla|texto|opcion|opciones|dominio|correcto|correcta|correctas|incorrect[ao]|resuelve|resolver|calcula|calcular|sustituye|sustituir|factoriza|simplifica|verifica|ejemplo|ejemplos|cuenta|cuentas|errores|servidor|correo|guardar|cargar|secciones|seccion|estudiante|estudiantes|puntaje|examen|prueba|pruebas|semana|semanas|fecha|fechas|repaso|practica|practicar)\b/i;

/* Terminaciones que no chocan con ninguna palabra inglesa. */
const ES_SUFIJOS = /\b\w{2,}(ciones|idad|edad|miento|mientos|encia|ancia)\b|\b\w{3,}mente\b|\b\w{3,}aje\b/i;

function esEspanol(t) {
  const limpio = String(t).replace(PERMITIDOS, ' ');
  if (/[áéíóúñ¿¡]/i.test(limpio)) return true;
  return ES_PALABRAS.test(limpio) || ES_VOCAB.test(limpio) || ES_SUFIJOS.test(limpio);
}

module.exports = { esEspanol, PERMITIDOS, ES_PALABRAS, ES_VOCAB, ES_SUFIJOS };
