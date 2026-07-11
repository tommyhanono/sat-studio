/* SAT Studio question set — Math: Pre-Mock Warmup (MW1-01 a MW1-12) */
(function(){
  var FIG_TRIG_TRI =
    '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right triangle with legs 5 and 12 and hypotenuse 13, angle theta between the hypotenuse and the leg of length 12">' +
    '<polygon points="30,140 210,140 30,40" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="30" y="126" width="14" height="14" fill="none" stroke="#1e1e1e" stroke-width="2"/>' +
    '<text x="120" y="158" font-size="16" font-family="Georgia,serif" text-anchor="middle">12</text>' +
    '<text x="10" y="95" font-size="16" font-family="Georgia,serif">5</text>' +
    '<text x="115" y="82" font-size="16" font-family="Georgia,serif" font-style="italic">13</text>' +
    '<text x="186" y="134" font-size="15" font-family="Georgia,serif">θ</text>' +
    '<text x="12" y="166" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-warmup1',
    title: 'Math Pre-Mock Warmup',
    section: 'math',
    level: 'Difícil',
    description: 'A focused warm-up across your weakest Math topics — do this right before a full mock.',
    minutes: 18,
    questions: [
      {
        id:'MW1-01', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Cuadráticas: factorización (raíces)',
        stem:'What is the positive solution to the equation x² + 2x − 15 = 0?',
        choices:{A:'−5', B:'−3', C:'3', D:'5'},
        correct:'C',
        expCorrect:'Busca dos números que multipliquen −15 y sumen +2: son +5 y −3. Factorizas (x + 5)(x − 3) = 0, así que x = −5 o x = 3. La solución positiva es 3. (Comprobación: 3² + 2·3 − 15 = 9 + 6 − 15 = 0 ✓.)',
        expWrong:{
          A:'−5 es la raíz NEGATIVA, no la positiva. El factor (x + 5) da x = −5.',
          B:'−3 le cambia el signo a la raíz positiva. Del factor (x − 3) sale x = +3, no −3.',
          D:'5 toma el número del factor (x + 5) sin cambiarle el signo. Ese factor da x = −5.'
        },
        tip:'Para x² + bx + c: dos números que MULTIPLIQUEN c y SUMEN b (aquí producto −15, suma +2 → 5 y −3). Las raíces son los OPUESTOS de esos números dentro de cada factor: (x + 5) → −5 y (x − 3) → 3.'
      },
      {
        id:'MW1-02', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Cuadráticas: vértice (valor mínimo)',
        stem:'The function f is defined by f(x) = x² + 8x + 10. What is the minimum value of f(x)?',
        choices:{A:'−6', B:'−4', C:'6', D:'10'},
        correct:'A',
        expCorrect:'El vértice está en x = −b/(2a) = −8/(2·1) = −4. El valor mínimo es f(−4) = (−4)² + 8(−4) + 10 = 16 − 32 + 10 = −6. Como a > 0, la parábola abre hacia arriba y ese es el mínimo.',
        expWrong:{
          B:'−4 es la coordenada x del vértice, no el valor mínimo (que es la coordenada y). Todavía te falta evaluar f(−4).',
          C:'6 tiene el signo cambiado o un error aritmético: f(−4) = 16 − 32 + 10 = −6, no +6.',
          D:'10 es f(0), el término constante (intersección con el eje y), no el mínimo.'
        },
        tip:'Valor mínimo = coordenada y del vértice. Primero x = −b/(2a), LUEGO evalúa f en ese x. No confundas la x del vértice con el valor de la función.'
      },
      {
        id:'MW1-03', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Cuadráticas: discriminante (número de soluciones)',
        stem:'How many distinct real solutions does the equation 3x² − 12x + 12 = 0 have?',
        choices:{A:'Zero', B:'Exactly one', C:'Exactly two', D:'Exactly three'},
        correct:'B',
        expCorrect:'El discriminante es b² − 4ac = (−12)² − 4(3)(12) = 144 − 144 = 0. Cuando el discriminante es 0 hay exactamente una solución real (raíz doble). (Comprobación: 3x² − 12x + 12 = 3(x² − 4x + 4) = 3(x − 2)², que se anula solo en x = 2.)',
        expWrong:{
          A:'Cero soluciones sería discriminante NEGATIVO. Aquí el discriminante es 0, no menor que 0.',
          C:'Dos soluciones distintas requieren discriminante POSITIVO. Aquí da exactamente 0, lo que produce una sola raíz doble.',
          D:'Una cuadrática nunca tiene tres soluciones; su grado es 2, así que como máximo hay dos raíces reales.'
        },
        tip:'Cuenta soluciones con el discriminante b² − 4ac: positivo → 2 soluciones, cero → 1 solución (raíz doble), negativo → 0 soluciones reales. Calcula el discriminante ANTES de resolver.'
      },
      {
        id:'MW1-04', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas lineales (eliminación)',
        stem:'If (x, y) is the solution to the system of equations below, what is the value of x?<br><br>2x + y = 11<br>x − y = 1',
        choices:{A:'4', B:'3', C:'5', D:'7'},
        correct:'A',
        expCorrect:'Suma las dos ecuaciones para eliminar y: (2x + y) + (x − y) = 11 + 1 → 3x = 12 → x = 4. (Comprobación: con x = 4, y = 4 − 1 = 3, y 2·4 + 3 = 11 ✓.)',
        expWrong:{
          B:'3 es el valor de y, no de x. Sumando bien las ecuaciones, x = 4.',
          C:'5 sale de un error al sumar o restar las ecuaciones. La eliminación correcta da 3x = 12 → x = 4.',
          D:'7 es x + y (4 + 3), no x sola. Te pidieron solo el valor de x.'
        },
        tip:'Cuando los coeficientes de una variable son opuestos (+y y −y), SUMA las ecuaciones para eliminarla de una. Luego despeja y regresa a sustituir para revisar.'
      },
      {
        id:'MW1-05', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas lineales (número de soluciones)',
        stem:'How many solutions (x, y) does the following system of equations have?<br><br>y = 3x − 4<br>6x − 2y = 8',
        choices:{A:'Zero', B:'Exactly one', C:'Exactly two', D:'Infinitely many'},
        correct:'D',
        expCorrect:'Sustituye y = 3x − 4 en la segunda: 6x − 2(3x − 4) = 6x − 6x + 8 = 8, que da 8 = 8, verdadero para todo x. Las dos ecuaciones son la MISMA recta (6x − 2y = 8 equivale a y = 3x − 4), así que hay infinitas soluciones.',
        expWrong:{
          A:'Cero soluciones sería el caso de rectas PARALELAS (misma pendiente, distinta intersección). Aquí son la misma recta, no paralelas.',
          B:'Exactamente una solución ocurre cuando las rectas tienen pendientes DISTINTAS y se cruzan en un punto. Aquí tienen la misma pendiente Y la misma recta.',
          C:'Dos soluciones es imposible en un sistema de dos rectas: o se cruzan una vez, o nunca, o coinciden en infinitos puntos.'
        },
        tip:'Lleva ambas a y = mx + b. Igual m e igual b → misma recta → infinitas soluciones. Igual m, distinto b → paralelas → cero. Distinto m → una sola. Aquí 6x − 2y = 8 se simplifica a y = 3x − 4: idéntica.'
      },
      {
        id:'MW1-06', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Círculos (área de sector)',
        stem:'A circle has a radius of 6. A sector of the circle is bounded by a central angle of 60°. What is the area of the sector?',
        choices:{A:'2π', B:'12π', C:'36π', D:'6π'},
        correct:'D',
        expCorrect:'Área del sector = (ángulo central / 360°) × área total. Área total = πr² = π(6)² = 36π. Sector = (60/360)(36π) = (1/6)(36π) = 6π.',
        expWrong:{
          A:'2π es la longitud del ARCO (usaste la circunferencia 12π: (1/6)(12π) = 2π), no el área del sector. El sector es una fracción del ÁREA (πr²).',
          B:'12π es la circunferencia completa (2πr = 12π), no el área de un sector.',
          C:'36π es el área del círculo COMPLETO (360°), no solo la porción de 60°.'
        },
        tip:'Sector y arco son una FRACCIÓN del total: (ángulo/360). Área de sector → fracción × área (πr²). Longitud de arco → fracción × circunferencia (2πr). No mezcles área con circunferencia.'
      },
      {
        id:'MW1-07', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Triángulos semejantes',
        stem:'Triangle ABC is similar to triangle XYZ, where vertices A, B, and C correspond to vertices X, Y, and Z, respectively. The length of side AB is 10 and the length of the corresponding side XY is 25. If the length of side AC is 14, what is the length of side XZ?',
        answer:'35',
        expCorrect:'En triángulos semejantes, los lados correspondientes son proporcionales. La razón es XY/AB = 25/10 = 2.5. Entonces XZ = AC × 2.5 = 14 × 2.5 = 35. (O por proporción cruzada: 10/25 = 14/XZ → XZ = 14·25/10 = 35.) Respuesta: 35.',
        expWrong:{},
        tip:'Semejanza = multiplicar por una RAZÓN de escala, nunca sumar. Arma lado/lado correspondiente = lado/lado y haz multiplicación en cruz. Verifica que la escala tenga sentido: el triángulo grande es 2.5× el pequeño.'
      },
      {
        id:'MW1-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Trigonometría del triángulo rectángulo (SOHCAHTOA)',
        figure: FIG_TRIG_TRI,
        stem:'In the right triangle shown, the leg opposite angle θ has length 5, the leg adjacent to angle θ has length 12, and the hypotenuse has length 13. What is the value of tan θ?',
        choices:{A:'5/13', B:'12/13', C:'5/12', D:'12/5'},
        correct:'C',
        expCorrect:'SOHCAHTOA: tan θ = opuesto / adyacente. El cateto opuesto a θ mide 5 y el adyacente mide 12, así que tan θ = 5/12. (La terna 5-12-13 cumple 5² + 12² = 25 + 144 = 169 = 13² ✓.)',
        expWrong:{
          A:'5/13 es sin θ (opuesto/hipotenusa). La tangente NO usa la hipotenusa.',
          B:'12/13 es cos θ (adyacente/hipotenusa), no la tangente.',
          D:'12/5 es el recíproco: sería adyacente/opuesto (cot θ). La tangente es opuesto/adyacente = 5/12.'
        },
        tip:'SOHCAHTOA: Tangente = Opuesto / Adyacente (la única razón que NO usa la hipotenusa). Identifica primero quién es opuesto y quién adyacente respecto al ángulo θ.'
      },
      {
        id:'MW1-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Porcentaje inverso (precio original)',
        stem:'After a discount of 20%, the price of a jacket is $60. What was the original price of the jacket, in dollars?',
        choices:{A:'$48', B:'$72', C:'$75', D:'$80'},
        correct:'C',
        expCorrect:'Un descuento del 20% deja el 80% del precio original: 0.80 × (original) = 60. Despejas: original = 60 / 0.80 = 75. (Comprobación: 20% de 75 es 15, y 75 − 15 = 60 ✓.)',
        expWrong:{
          A:'$48 aplica el descuento OTRA VEZ sobre 60 (60 − 20% = 48). El $60 ya es el precio rebajado; debes ir hacia atrás dividiendo.',
          B:'$72 SUMA 20% de 60 (60 + 12 = 72). El 20% se calcula sobre el precio ORIGINAL, no sobre los 60.',
          D:'$80 sale de un ajuste aproximado incorrecto. La cuenta exacta es 60 / 0.80 = 75, no 80.'
        },
        tip:'Porcentaje inverso: si algo bajó 20%, el precio final es el 80% del original. Divide entre 0.80 (no restes 20% del número final). Regla: precio final = original × (1 − descuento).'
      },
      {
        id:'MW1-10', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Media (valor faltante)',
        stem:'A list of 5 numbers is 4, 9, 12, x, and 20. The mean (average) of the 5 numbers is 12. What is the value of x?',
        answer:'15',
        expCorrect:'La media es la suma dividida entre la cantidad de datos, así que la suma total = media × cantidad = 12 × 5 = 60. Los cuatro números conocidos suman 4 + 9 + 12 + 20 = 45. Entonces x = 60 − 45 = 15. (Comprobación: (4 + 9 + 12 + 15 + 20)/5 = 60/5 = 12 ✓.) Respuesta: 15.',
        expWrong:{},
        tip:'Para hallar un dato faltante con la media dada: suma total = media × cantidad de datos. Réstale los valores conocidos. No promedies solo los que ya tienes.'
      },
      {
        id:'MW1-11', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Decaimiento exponencial (modelo)',
        stem:'A car is purchased for $24,000 and loses 15% of its value each year. Which function V models the value of the car, in dollars, after t years?',
        choices:{A:'V(t) = 24000(0.85)^t', B:'V(t) = 24000(1.15)^t', C:'V(t) = 24000(0.15)^t', D:'V(t) = 24000 − 0.15t'},
        correct:'A',
        expCorrect:'Perder 15% cada año deja el 85% del valor en cada paso, así que se multiplica por (1 − 0.15) = 0.85 por año: V(t) = 24000(0.85)^t. (Comprobación: en t = 1, V = 24000·0.85 = 20400, que es 24000 menos 15%.)',
        expWrong:{
          B:'1.15 modela un CRECIMIENTO del 15% por año, no una pérdida. El valor debe bajar.',
          C:'Multiplicar por 0.15 dejaría solo el 15% del valor cada año (una caída brutal), no una pérdida del 15%. El factor correcto es 0.85.',
          D:'Este modelo es LINEAL y además resta apenas 0.15 al año. Un porcentaje que se repite cada año es MULTIPLICATIVO, no aditivo.'
        },
        tip:'Decrecimiento de r% → factor (1 − r/100)^t. Perder 15% → ×0.85 por período. Crecer sería (1 + r/100). Un porcentaje anual repetido es multiplicativo, nunca +/− un número fijo.'
      },
      {
        id:'MW1-12', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Funciones lineales (evaluar)',
        stem:'The linear function f satisfies f(0) = 3 and f(4) = 15. What is the value of f(10)?',
        choices:{A:'30', B:'33', C:'36', D:'45'},
        correct:'B',
        expCorrect:'La pendiente es (15 − 3)/(4 − 0) = 12/4 = 3, y f(0) = 3 es la intersección, así que f(x) = 3x + 3. Entonces f(10) = 3(10) + 3 = 33. (Comprobación: f(0) = 3 ✓, f(4) = 12 + 3 = 15 ✓.)',
        expWrong:{
          A:'30 es 3·10 pero olvidaste sumar la intersección: f(x) = 3x + 3, así que hay que sumar el 3.',
          C:'36 sale de sumar mal (por ejemplo 3·11 o 33 + 3). El valor correcto es 3·10 + 3 = 33.',
          D:'45 usa una pendiente equivocada (por ejemplo 15/... ) o multiplica 15 por algo. La pendiente es 3.'
        },
        tip:'Con dos puntos de una función lineal: saca la pendiente (Δy/Δx), arma f(x) = (pendiente)x + f(0), y luego evalúa. No olvides sumar la intersección con el eje y.'
      }
    ]
  });
})();
