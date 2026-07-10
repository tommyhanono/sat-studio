/* SAT Studio question set — Math: Advanced Math (ADV-01 a ADV-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-adv',
    title: 'Math — Advanced Math',
    section: 'math',
    level: 'Difícil',
    description: 'Advanced Math: quadratics, polynomials, exponentials, and nonlinear functions.',
    minutes: 18,
    questions: [
      {
        id:'ADV-01', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Ecuaciones exponenciales (bases iguales)',
        stem:'If 5^(x + 2) = 5^7, what is the value of x?',
        choices:{A:'2', B:'5', C:'7', D:'9'},
        correct:'B',
        expCorrect:'Con la misma base, los exponentes deben ser iguales: x + 2 = 7 → x = 5. (Comprobación: 5^(5+2) = 5^7 ✓.)',
        expWrong:{
          A:'2 es el número que se suma al exponente, no el valor de x. Te confundiste el término con la incógnita.',
          C:'7 es el exponente del lado derecho; todavía te falta restar el 2.',
          D:'9 sale de sumar 7 + 2 en lugar de restar: la ecuación es x + 2 = 7, así que despejas restando.'
        },
        tip:'Si a^m = a^n con la misma base a, entonces m = n. Iguala exponentes y resuelve la lineal — nada de logaritmos.'
      },
      {
        id:'ADV-02', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Cuadráticas: factorización (raíces)',
        stem:'What is the positive solution to the equation x² − x − 12 = 0?',
        choices:{A:'2', B:'3', C:'4', D:'6'},
        correct:'C',
        expCorrect:'Busca dos números que multipliquen −12 y sumen −1: son −4 y +3. Factorizas (x − 4)(x + 3) = 0, así que x = 4 o x = −3. La solución positiva es 4. (Comprobación: 16 − 4 − 12 = 0 ✓.)',
        expWrong:{
          A:'2 no es raíz: 4 − 2 − 12 = −10 ≠ 0. Ningún par que multiplique −12 y sume −1 da 2.',
          B:'3 es el valor absoluto de la raíz NEGATIVA (−3), no la positiva. Ojo con el signo.',
          D:'6 multiplica −12 con −2, pero −2 + 6 = 4, no −1. No cumple la suma del término del medio.'
        },
        tip:'Para x² + bx + c: dos números que MULTIPLIQUEN c y SUMEN b. Aquí producto −12, suma −1 → −4 y 3. Las raíces son los opuestos: 4 y −3.'
      },
      {
        id:'ADV-03', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Cuadráticas: vértice (valor mínimo)',
        stem:'The function f is defined by f(x) = x² − 6x + 5. What is the minimum value of f(x)?',
        choices:{A:'−4', B:'−3', C:'3', D:'5'},
        correct:'A',
        expCorrect:'El vértice está en x = −b/(2a) = −(−6)/(2·1) = 3. El valor mínimo es f(3) = 9 − 18 + 5 = −4. Como a > 0, la parábola abre hacia arriba y ese es el mínimo.',
        expWrong:{
          B:'−3 es −b/2 sin dividir bien, o un error aritmético al evaluar f(3). El mínimo correcto es −4.',
          C:'3 es la coordenada x del vértice, no el valor mínimo de la función (que es la coordenada y).',
          D:'5 es f(0), el término constante (intersección con el eje y), no el mínimo.'
        },
        tip:'Valor mínimo/máximo = coordenada y del vértice. Primero x = −b/(2a), luego EVALÚA f en ese x. No confundas la x del vértice con el valor de la función.'
      },
      {
        id:'ADV-04', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Crecimiento exponencial (modelo)',
        stem:'A colony of bacteria has a population of 300, and the population increases by 12% each hour. Which function P models the population after t hours?',
        choices:{A:'P(t) = 300 + 0.12t', B:'P(t) = 300(0.12)^t', C:'P(t) = 300(0.88)^t', D:'P(t) = 300(1.12)^t'},
        correct:'D',
        expCorrect:'Crecer 12% cada hora multiplica por (1 + 0.12) = 1.12 en cada paso. El modelo es P(t) = 300(1.12)^t. (Comprobación: en t = 1, P = 300·1.12 = 336, que es 300 más 12%.)',
        expWrong:{
          A:'Este modelo es LINEAL (suma 0.12 por hora). Un porcentaje que se repite cada hora es multiplicativo, no aditivo.',
          B:'Multiplicar por 0.12 haría que la población casi desaparezca cada hora; ese factor no representa crecer 12%.',
          C:'0.88 = 1 − 0.12 modela un DECRECIMIENTO del 12%, no un crecimiento.'
        },
        tip:'Crecimiento de r% → factor (1 + r/100)^t. Decrecimiento → (1 − r/100)^t. "Increases by 12%" es ×1.12 por período, no +0.12.'
      },
      {
        id:'ADV-05', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Expresiones equivalentes (producto de binomios)',
        stem:'Which of the following is equivalent to (2x + 3)(x − 4)?',
        choices:{A:'2x² − 12', B:'2x² − 5x − 12', C:'2x² + 5x − 12', D:'2x² − 11x − 12'},
        correct:'B',
        expCorrect:'Usa FOIL: (2x)(x) + (2x)(−4) + (3)(x) + (3)(−4) = 2x² − 8x + 3x − 12 = 2x² − 5x − 12.',
        expWrong:{
          A:'2x² − 12 sale de multiplicar solo los primeros y los últimos términos, olvidando los productos cruzados (−8x y +3x).',
          C:'2x² + 5x − 12 tiene el signo del medio equivocado: −8x + 3x = −5x, no +5x.',
          D:'2x² − 11x − 12 sale de multiplicar mal los cruzados (por ejemplo −8x − 3x en vez de −8x + 3x).'
        },
        tip:'FOIL: First, Outer, Inner, Last. El término del medio suma los DOS productos cruzados con su signo: −8x + 3x = −5x. Cuida los signos ahí.'
      },
      {
        id:'ADV-06', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Funciones polinómicas (ceros y factores)',
        stem:'The polynomial p is defined by p(x) = (x + 4)(x − 2)(x − 5). For how many values of x does p(x) = 0?',
        choices:{A:'0', B:'1', C:'2', D:'3'},
        correct:'D',
        expCorrect:'Un producto es cero cuando algún factor es cero. Cada factor da una raíz: x = −4, x = 2 y x = 5. Son tres valores distintos, así que p(x) = 0 en 3 valores de x.',
        expWrong:{
          A:'0 diría que nunca se anula, pero cada factor lineal aporta una raíz real.',
          B:'1 cuenta solo una raíz; hay tres factores lineales distintos, cada uno con su propio cero.',
          C:'2 se te olvida un factor. Cuenta los tres: (x + 4), (x − 2) y (x − 5).'
        },
        tip:'Propiedad del producto cero: cada factor lineal distinto = un cero (una intersección con el eje x). Cuenta los factores distintos para saber cuántas raíces reales hay.'
      },
      {
        id:'ADV-07', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Sistemas no lineales (parábola y recta)',
        stem:'The system of equations below has two solutions.<br><br>y = x²<br>y = x + 6<br><br>What is the greatest value of y among the solutions to the system?',
        answer:'9',
        expCorrect:'Iguala: x² = x + 6 → x² − x − 6 = 0 → (x − 3)(x + 2) = 0 → x = 3 o x = −2. Los valores de y son y = 3² = 9 y y = (−2)² = 4. El mayor valor de y es 9. (Comprobación: (3, 9) cumple 9 = 3 + 6 ✓.) Respuesta: 9.',
        expWrong:{},
        tip:'Truco Desmos: grafica y = x² y y = x + 6, toca los dos puntos de corte: (−2, 4) y (3, 9). Ojo: piden el mayor VALOR DE y (9), no el mayor valor de x.'
      },
      {
        id:'ADV-08', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Cuadráticas: discriminante (una solución)',
        stem:'In the equation x² + 12x + c = 0, c is a constant. If the equation has exactly one real solution, what is the value of c?',
        choices:{A:'6', B:'12', C:'36', D:'144'},
        correct:'C',
        expCorrect:'Exactamente una solución real ⇔ discriminante cero: b² − 4ac = 0 → 12² − 4(1)(c) = 0 → 144 − 4c = 0 → c = 36. (Comprobación: x² + 12x + 36 = (x + 6)², raíz doble x = −6.)',
        expWrong:{
          A:'6 es la raíz doble (x = −6 en valor absoluto), no el valor de c. c = 6² = 36.',
          B:'12 es el coeficiente b, no c.',
          D:'144 es b², pero olvidaste dividir entre 4: c = 144/4 = 36.'
        },
        tip:'Una sola solución real → discriminante = 0. Resuelve b² = 4ac. Aquí 144 = 4c → c = 36. Verifica: debe quedar un cuadrado perfecto (x + 6)².'
      },
      {
        id:'ADV-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Cuadráticas: suma y producto de raíces',
        stem:'The solutions to the equation 2x² − 16x + 24 = 0 are r and s. What is the value of r + s?',
        choices:{A:'−8', B:'6', C:'8', D:'12'},
        correct:'C',
        expCorrect:'Divide todo entre 2: x² − 8x + 12 = 0 → (x − 2)(x − 6) = 0 → raíces 2 y 6. Su suma es 2 + 6 = 8. (Atajo: para ax² + bx + c, la suma de raíces es −b/a = −(−16)/2 = 8.)',
        expWrong:{
          A:'−8 tiene el signo cambiado: la suma de raíces es −b/a = −(−16)/2 = +8, no −8.',
          B:'6 es solo una de las raíces, no la suma de ambas.',
          D:'12 es el PRODUCTO de las raíces (c/a = 24/2 = 12), no la suma.'
        },
        tip:'Fórmulas de Vieta: para ax² + bx + c = 0, suma de raíces = −b/a y producto = c/a. Aquí −(−16)/2 = 8, sin siquiera factorizar.'
      },
      {
        id:'ADV-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Decaimiento exponencial (semivida)',
        stem:'A radioactive sample has an initial mass of 80 grams and its mass is halved every 6 years. Which function m gives the mass, in grams, remaining after t years?',
        choices:{A:'m(t) = 80(1/2)^(6t)', B:'m(t) = 80(1/2)^(t/6)', C:'m(t) = 80(1/2)^(t−6)', D:'m(t) = 80(6)^(t/2)'},
        correct:'B',
        expCorrect:'Cada 6 años la masa se multiplica por 1/2, así que el número de veces que se reduce a la mitad es t/6. El modelo es m(t) = 80(1/2)^(t/6). (Comprobación: en t = 6, m = 80(1/2)^1 = 40; en t = 12, m = 80(1/2)^2 = 20.)',
        expWrong:{
          A:'El exponente 6t haría que la masa se reduzca a la mitad SEIS veces por año, no una vez cada 6 años. El período va DIVIDIENDO: t/6.',
          C:'Restar en el exponente (t − 6) no representa períodos de semivida; el exponente debe ser el número de períodos, t/6.',
          D:'Base 6 y crecimiento no tienen sentido para algo que se reduce a la mitad; además desaparece el factor 1/2.'
        },
        tip:'Semivida: cantidad = inicial · (1/2)^(t / período). El período va DIVIDIENDO al tiempo en el exponente. "Cada 6 años" → t/6.'
      },
      {
        id:'ADV-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Cuadráticas: forma de vértice',
        stem:'The graph of y = (x − 4)² − 9 in the xy-plane is a parabola. What are the coordinates of its vertex?',
        choices:{A:'(−4, −9)', B:'(4, −9)', C:'(4, 9)', D:'(−4, 9)'},
        correct:'B',
        expCorrect:'En la forma de vértice y = a(x − h)² + k, el vértice es (h, k). Aquí (x − 4)² − 9 tiene h = 4 y k = −9, así que el vértice es (4, −9). Ojo: el signo de h se invierte respecto al de dentro del paréntesis.',
        expWrong:{
          A:'(−4, −9) toma el 4 con el signo de dentro del paréntesis, pero en y = a(x − h)² + k el vértice usa h = +4.',
          C:'(4, 9) cambia el signo de k: el término es − 9, así que k = −9, no +9.',
          D:'(−4, 9) tiene los dos signos equivocados: h = 4 (no −4) y k = −9 (no 9).'
        },
        tip:'Forma de vértice y = a(x − h)² + k → vértice (h, k). El (x − h) INVIERTE el signo (x − 4 → h = 4), pero + k se toma tal cual (− 9 → k = −9).'
      },
      {
        id:'ADV-12', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Cuadráticas: discriminante con parámetro',
        stem:'In the equation 9x² + bx + 4 = 0, b is a positive constant. If the equation has exactly one real solution, what is the value of b?',
        answer:'12',
        expCorrect:'Exactamente una solución real ⇔ discriminante cero: b² − 4ac = 0 → b² − 4(9)(4) = 0 → b² = 144 → b = ±12. Como b es positivo, b = 12. (Comprobación: 9x² + 12x + 4 = (3x + 2)², raíz doble.) Respuesta: 12.',
        expWrong:{},
        tip:'Una sola solución → discriminante = 0 → b² = 4ac = 4(9)(4) = 144 → b = 12 (tomas el positivo). Debe quedar un cuadrado perfecto: (3x + 2)².'
      }
    ]
  });
})();
