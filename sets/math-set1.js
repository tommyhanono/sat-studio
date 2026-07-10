/* SAT Studio question set — Math: Mixed Practice Set 1 (M-001 a M-010) */
(function(){
  var FIG_TRIANGLE =
    '<svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right triangle with legs 15 and 8 and hypotenuse x">' +
    '<polygon points="30,130 210,130 210,34" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="196" y="116" width="14" height="14" fill="none" stroke="#1e1e1e" stroke-width="2"/>' +
    '<text x="115" y="152" font-size="16" font-family="Georgia,serif" text-anchor="middle">15</text>' +
    '<text x="222" y="86" font-size="16" font-family="Georgia,serif">8</text>' +
    '<text x="100" y="72" font-size="17" font-family="Georgia,serif" font-style="italic">x</text>' +
    '<text x="12" y="150" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_BARS = (function(){
    // frequencies for 1..5 books: 3, 5, 4, 2, 1 (15 students)
    var freqs = [3,5,4,2,1];
    var svg = '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar graph: number of books read last month by 15 students">';
    svg += '<line x1="48" y1="150" x2="280" y2="150" stroke="#1e1e1e" stroke-width="2"/>';
    svg += '<line x1="48" y1="150" x2="48" y2="20" stroke="#1e1e1e" stroke-width="2"/>';
    for(var g=1; g<=5; g++){
      var y = 150 - g*24;
      svg += '<line x1="44" y1="'+y+'" x2="280" y2="'+y+'" stroke="#d9d9d9" stroke-width="1"/>';
      svg += '<text x="38" y="'+(y+4)+'" font-size="11" text-anchor="end" font-family="Arial,sans-serif">'+g+'</text>';
    }
    for(var i=0; i<5; i++){
      var h = freqs[i]*24;
      var x = 62 + i*44;
      svg += '<rect x="'+x+'" y="'+(150-h)+'" width="26" height="'+h+'" fill="#324DC7"/>';
      svg += '<text x="'+(x+13)+'" y="166" font-size="12" text-anchor="middle" font-family="Arial,sans-serif">'+(i+1)+'</text>';
    }
    svg += '<text x="164" y="186" font-size="12" text-anchor="middle" font-family="Arial,sans-serif">Number of books read</text>';
    svg += '<text x="14" y="90" font-size="12" text-anchor="middle" font-family="Arial,sans-serif" transform="rotate(-90 14 90)">Number of students</text>';
    svg += '</svg>';
    return svg;
  })();

  window.SAT_SETS.push({
    id: 'math-set1',
    title: 'Math Mixed Practice — Set 1',
    section: 'math',
    description: 'Algebra, Advanced Math, Problem-Solving & Data Analysis, and Geometry/Trig. Includes 3 SPR (student-produced response) questions to practice the real exam entry rules.',
    minutes: 15,
    questions: [
      {
        id:'M-001', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Ecuaciones lineales (manipulación de expresiones)',
        stem:'If 3x \u2212 7 = 14, what is the value of 6x \u2212 14?',
        choices:{A:'7', B:'28', C:'35', D:'42'},
        correct:'B',
        expCorrect:'No hace falta despejar x: fíjate que 6x \u2212 14 = 2(3x \u2212 7). Como 3x \u2212 7 = 14, entonces 6x \u2212 14 = 2 \u00d7 14 = 28. (Comprobación larga: 3x = 21 → x = 7 → 6(7) \u2212 14 = 42 \u2212 14 = 28.)',
        expWrong:{
          A:'7 es el valor de x, no de 6x \u2212 14. El SAT casi siempre pone "x" como distractor cuando pregunta por una expresión.',
          C:'35 sale de calcular 6x \u2212 7 (olvidando duplicar el \u22127).',
          D:'42 es solo 6x. Te faltó restar el 14.'
        },
        tip:'Antes de despejar, pregúntate: ¿la expresión que piden es un MÚLTIPLO de la que me dan? Aquí 6x\u221214 = 2(3x\u22127). Duplicar y listo — 5 segundos.'
      },
      {
        id:'M-002', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Porcentajes (descuento)',
        stem:'A jacket has an original price of $80. During a sale, the price of the jacket is reduced by 35%. What is the sale price of the jacket?',
        choices:{A:'$28', B:'$45', C:'$52', D:'$55'},
        correct:'C',
        expCorrect:'Reducir 35% = pagar el 65%. Precio de oferta = 0.65 \u00d7 80 = $52.',
        expWrong:{
          A:'$28 es el DESCUENTO (0.35 \u00d7 80), no el precio final. Distractor clásico.',
          B:'$45 sale de restar 35 directamente (80 \u2212 35), tratando el porcentaje como dólares.',
          D:'$55 es un cálculo aproximado incorrecto; 80 \u2212 0.35(80) = 52, no 55.'
        },
        tip:'Descuento de p% → multiplica por (1 \u2212 p/100) en un solo paso. "Reduced by 35%" = \u00d70.65. Nunca calcules el descuento aparte si piden el precio final.'
      },
      {
        id:'M-003', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas de ecuaciones lineales',
        stem:'The system of equations below is given.<br><br>x + 2y = 17<br>x \u2212 y = 5<br><br>If (x, y) is the solution to the system, what is the value of x?',
        answer:'9',
        expCorrect:'Resta las ecuaciones: (x + 2y) \u2212 (x \u2212 y) = 17 \u2212 5 → 3y = 12 → y = 4. Sustituye: x \u2212 4 = 5 → x = 9. (Verifica: 9 + 8 = 17 ✓.) Respuesta: 9.',
        expWrong:{},
        tip:'Truco Desmos: escribe las dos ecuaciones tal cual en la calculadora y toca el punto de intersección — te da (9, 4) al instante. Cuidado: la pregunta pide x, no y (4 sería la trampa).'
      },
      {
        id:'M-004', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Funciones cuadráticas (vértice desde forma factorizada)',
        stem:'The function f is defined by f(x) = (x \u2212 3)(x + 5). Which of the following is the x-coordinate of the vertex of the graph of y = f(x) in the xy-plane?',
        choices:{A:'\u22125', B:'\u22121', C:'1', D:'3'},
        correct:'B',
        expCorrect:'Las raíces son x = 3 y x = \u22125. Por simetría de la parábola, el vértice está en el punto medio de las raíces: (3 + (\u22125))/2 = \u22122/2 = \u22121.',
        expWrong:{
          A:'\u22125 es una de las raíces, no el vértice.',
          C:'1 sale de promediar 3 y \u22125 con error de signo: (3+5)/2 = 4 o (3\u22125)/2 mal calculado. El promedio correcto es \u22121.',
          D:'3 es la otra raíz. El vértice está ENTRE las raíces, no en ellas.'
        },
        tip:'Forma factorizada → vértice_x = promedio de las raíces. En Desmos: grafica (x\u22123)(x+5) y toca el punto mínimo; te marca (\u22121, \u221216).'
      },
      {
        id:'M-005', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Teorema de Pitágoras',
        figure: FIG_TRIANGLE,
        stem:'In the right triangle shown, the two legs have lengths 15 and 8. What is the value of x, the length of the hypotenuse?',
        choices:{A:'13', B:'17', C:'19', D:'23'},
        correct:'B',
        expCorrect:'Pitágoras: x\u00b2 = 15\u00b2 + 8\u00b2 = 225 + 64 = 289 → x = \u221a289 = 17. (8-15-17 es una terna pitagórica clásica, como 3-4-5 y 5-12-13.)',
        expWrong:{
          A:'13 corresponde a la terna 5-12-13; aquí los catetos son 8 y 15.',
          C:'19 sale de errores de suma (225 + 64 = 289, no 361).',
          D:'23 = 15 + 8. La hipotenusa NUNCA es la suma de los catetos (sería un triángulo degenerado).'
        },
        tip:'Memoriza las ternas: 3-4-5, 5-12-13, 8-15-17, 7-24-25 (y sus múltiplos). Ver "15 y 8" debe gritarte "17" sin calcular. En el Reference Sheet del app tienes la fórmula.'
      },
      {
        id:'M-006', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Mediana a partir de una gráfica de frecuencias',
        figure: FIG_BARS,
        passage:'The bar graph shows the number of books read last month by each of the 15 students in a book club.',
        stem:'What is the median number of books read by the 15 students?',
        choices:{A:'1', B:'2', C:'2.5', D:'3'},
        correct:'B',
        expCorrect:'Con 15 datos, la mediana es el valor #8 al ordenarlos. Acumulando frecuencias: 1 libro → estudiantes 1–3; 2 libros → estudiantes 4–8. El octavo estudiante cae en "2 libros", así que la mediana es 2.',
        expWrong:{
          A:'1 es el valor mínimo/con frecuencia inicial, no el del centro.',
          C:'2.5 sería promediar dos valores centrales — eso aplica con un número PAR de datos; aquí hay 15 (impar).',
          D:'3 es la moda visualmente tentadora si miras la barra más alta mal, o el promedio mal calculado. La barra más alta (moda) es 2, y la mediana también es 2.'
        },
        tip:'Mediana con frecuencias: posición central = (n+1)/2 → aquí la #8. Ve sumando barras de izquierda a derecha hasta cubrir esa posición. No confundas mediana con moda ni con media.'
      },
      {
        id:'M-007', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Ecuaciones racionales',
        stem:'If <span style="white-space:nowrap">3/(x + 1) = 12</span>, what is the value of x?',
        answer:'-3/4',
        expCorrect:'Multiplica ambos lados por (x + 1): 3 = 12(x + 1) → 3 = 12x + 12 → 12x = \u22129 → x = \u22129/12 = \u22123/4. Formas válidas para el box: -3/4, -.75 o -0.75 (también -9/12, porque equivale al mismo valor). Ojo: 0.75 sin el signo sería incorrecta.',
        expWrong:{},
        tip:'Truco Desmos: grafica y = 3/(x+1) y y = 12; el punto de intersección te da x = \u22120.75. Para el box: los negativos tienen 6 espacios (el signo cuenta como carácter).'
      },
      {
        id:'M-008', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Media (efecto de agregar un dato)',
        stem:'The mean of a list of 5 numbers is 14. When a 6th number is added to the list, the mean of the 6 numbers is 16. What is the value of the 6th number?',
        choices:{A:'16', B:'18', C:'24', D:'26'},
        correct:'D',
        expCorrect:'Suma original = 5 \u00d7 14 = 70. Suma nueva = 6 \u00d7 16 = 96. El sexto número = 96 \u2212 70 = 26.',
        expWrong:{
          A:'16 es la media nueva; para SUBIR la media de 14 a 16, el número agregado debe estar por ENCIMA de 16.',
          B:'18 sale de razonar "2 más que 16", pero el nuevo dato debe compensar +2 para CADA uno de los 6 datos: 16 + 5(2) = 26.',
          C:'24 sale de 16 + 4\u00d72 (contando mal cuántos datos deben compensarse).'
        },
        tip:'Media = trabaja SIEMPRE con sumas totales: suma = media \u00d7 cantidad. Dos sumas, una resta, cero enredos. Atajo mental: nuevo dato = media nueva + n_viejo \u00d7 (subida) = 16 + 5(2) = 26.'
      },
      {
        id:'M-009', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Trigonometría (ángulos complementarios)',
        stem:'In right triangle ABC, the measure of angle B is 90\u00b0 and sin A = 3/5. What is the value of cos C?',
        choices:{A:'3/5', B:'4/5', C:'3/4', D:'5/3'},
        correct:'A',
        expCorrect:'Como B = 90\u00b0, los ángulos A y C son complementarios (A + C = 90\u00b0). Identidad clave del SAT: sin A = cos(90\u00b0 \u2212 A) = cos C. Por lo tanto cos C = 3/5, sin calcular nada más.',
        expWrong:{
          B:'4/5 es cos A (o sin C) — la co-función del MISMO ángulo, no la del complementario.',
          C:'3/4 es tan A; no es lo que piden.',
          D:'5/3 es 1/sin A invertida; un seno o coseno nunca puede ser mayor que 1 en un triángulo.'
        },
        tip:'Regla estrella: sin(x) = cos(90\u00b0 \u2212 x). En un triángulo rectángulo, seno de un ángulo agudo = coseno del otro. Si ves "sin A … cos C" con B = 90°, la respuesta es directa.'
      },
      {
        id:'M-010', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Discriminante (soluciones no reales)',
        stem:'The equation 2x\u00b2 + bx + 8 = 0, where b is a positive integer, has no real solutions. What is the greatest possible value of b?',
        answer:'7',
        expCorrect:'"No real solutions" ⇔ discriminante negativo: b\u00b2 \u2212 4ac &lt; 0 → b\u00b2 \u2212 4(2)(8) &lt; 0 → b\u00b2 &lt; 64 → \u22128 &lt; b &lt; 8. El mayor entero positivo estrictamente menor que 8 es 7. (Con b = 8 el discriminante sería 0 y habría UNA solución real — no sirve.)',
        expWrong:{},
        tip:'Discriminante b\u00b2\u22124ac: &lt;0 sin soluciones reales, =0 una, &gt;0 dos. La trampa siempre está en el borde: la desigualdad es ESTRICTA, así que 8 no cuenta. Verifica en Desmos: 2x\u00b2+7x+8 no toca el eje x; 2x\u00b2+8x+8 sí lo toca.'
      }
    ]
  });
})();
