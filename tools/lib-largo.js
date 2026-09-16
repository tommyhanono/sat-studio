'use strict';
/**
 * lib-largo.js — ¿el largo de las opciones delata la respuesta?
 *
 * Una sola definición para las dos herramientas que lo miden. Antes cada una
 * tenía la suya: `validar-set.js` contaba los EMPATES como "la más larga" y solo
 * miraba esa dirección, mientras `auditar-longitud.js` pedía un margen visible y
 * miraba las dos. Resultado: el mismo set salía "28 de 34" en una y "3 %" en la
 * otra, y dos personas distintas dedujeron cosas opuestas del mismo archivo.
 * Cuando dos números contestan la misma pregunta y no coinciden, el problema no
 * es cuál tiene razón: es que hay dos.
 *
 * La medida honesta pide que la diferencia SE VEA. Nadie ordena cuatro renglones
 * de ochenta caracteres por uno de diferencia; sí se nota cuando uno mide el
 * doble. El margen es el mayor de dos cosas: 6 caracteres, o el 10 % del largo
 * de la opción correcta.
 *
 * Se miden las DOS direcciones a propósito. Arreglar solo "la correcta es la más
 * larga" fabrica "la correcta es la más corta", y entonces la estrategia ganadora
 * pasa a ser "nunca marques la más larga", que es igual de mala.
 */

/** Margen mínimo para que una diferencia cuente como pista visible. */
function margen(largoCorrecta){ return Math.max(6, Math.round(largoCorrecta * 0.10)); }

/**
 * Mide un conjunto de preguntas de opción múltiple.
 * Devuelve { n, larga, corta, pctL, pctC, prosa, promMax, casos }.
 *
 * `prosa` es false cuando las opciones son cortas (números, una palabra, un
 * signo): ahí "la más larga" es ruido y no una pista, así que no se juzga. El
 * corte está en 14 caracteres de promedio, que separa limpiamente la matemática
 * numérica de la prosa.
 */
function medir(questions){
  const mc = (questions || []).filter(q => (q.type || 'mc') === 'mc' && q.choices && q.correct);
  let larga = 0, corta = 0, sumaMax = 0;
  const casos = [];
  mc.forEach(q => {
    const lc = String(q.choices[q.correct]).length;
    const claves = Object.keys(q.choices);
    const todas = claves.map(k => String(q.choices[k]).length);
    const otras = claves.filter(k => k !== q.correct).map(k => String(q.choices[k]).length);
    if (!otras.length) return;
    const max = Math.max.apply(null, otras);
    const min = Math.min.apply(null, otras);
    sumaMax += Math.max.apply(null, todas);
    const m = margen(lc);
    if (lc - max >= m) { larga++; casos.push({ id: q.id, tipo: 'larga', ventaja: lc - max }); }
    if (min - lc >= m) { corta++; casos.push({ id: q.id, tipo: 'corta', ventaja: min - lc }); }
  });
  const n = mc.length || 1;
  const promMax = mc.length ? sumaMax / mc.length : 0;

  /* La tercera pista, la que no se ve mirando los dos porcentajes de arriba.
     Si la correcta NUNCA es ni la más larga ni la más corta, entonces siempre es
     una de las dos del medio — y "marca la del largo intermedio" pasa a acertar
     el 50 %. Cero por ciento en las dos direcciones no es la meta: es el mismo
     defecto girado noventa grados.

     Solo cuenta donde el largo de verdad varía. Si las cuatro opciones miden
     casi lo mismo —la puntuación, por ejemplo, donde son el mismo texto con
     distinta coma— no hay extremo que evitar y "ninguna es extrema" es la
     verdad, no una pista. Entre las que SÍ varían, al azar la correcta cae en un
     extremo la mitad de las veces: hay cuatro posiciones y dos son extremas. */
  let variables = 0, enExtremo = 0;
  mc.forEach(q => {
    const claves = Object.keys(q.choices);
    const largos = claves.map(k => String(q.choices[k]).length);
    const lc = String(q.choices[q.correct]).length;
    const max = Math.max.apply(null, largos), min = Math.min.apply(null, largos);
    if (max - min < margen(lc)) return;   // las cuatro pesan casi igual
    variables++;
    if (lc === max || lc === min) enExtremo++;
  });
  const pctExtremo = variables ? 100 * enExtremo / variables : null;

  return {
    n: mc.length, larga, corta,
    pctL: 100 * larga / n, pctC: 100 * corta / n,
    prosa: promMax > 14, promMax: Math.round(promMax), casos,
    variables, enExtremo, pctExtremo,
  };
}

module.exports = { margen, medir };
