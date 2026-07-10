/* SAT Studio question set — Math: Advanced Math 2 (AV2-01 a AV2-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-adv2',
    title: 'Math — Advanced Math 2',
    section: 'math',
    level: 'Difícil',
    description: 'More Advanced Math: quadratics, polynomials, exponential models, and nonlinear functions.',
    minutes: 18,
    questions: [
      {
        id:'AV2-01', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Ecuaciones exponenciales (bases iguales)',
        stem:'If 2^(3x) = 2^12, what is the value of x?',
        choices:{A:'3', B:'4', C:'9', D:'36'},
        correct:'B',
        expCorrect:'Con la misma base, los exponentes deben ser iguales: 3x = 12 → x = 4. (Comprobación: 2^(3·4) = 2^12 ✓.)',
        expWrong:{
          A:'3 es el coeficiente del exponente, no el valor de x. Todavía te falta dividir 12 entre 3.',
          C:'9 sale de restar 12 − 3 en vez de dividir. La ecuación es 3x = 12, así que divides.',
          D:'36 sale de multiplicar 3 · 12. Iguala exponentes y DIVIDE: x = 12/3 = 4.'
        },
        tip:'Si a^m = a^n con la misma base a, entonces m = n. Iguala exponentes y resuelve la lineal — aquí 3x = 12.'
      },
      {
        id:'AV2-02', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Cuadráticas: factorización (raíces)',
        stem:'What is the positive solution to the equation x² + 2x − 15 = 0?',
        choices:{A:'3', B:'5', C:'6', D:'15'},
        correct:'A',
        expCorrect:'Busca dos números que multipliquen −15 y sumen +2: son +5 y −3. Factorizas (x + 5)(x − 3) = 0, así que x = −5 o x = 3. La solución positiva es 3. (Comprobación: 9 + 6 − 15 = 0 ✓.)',
        expWrong:{
          B:'5 es el valor absoluto de la raíz NEGATIVA (−5), no la positiva. Ojo con el signo.',
          C:'6 no es raíz: 36 + 12 − 15 = 33 ≠ 0. No cumple la ecuación.',
          D:'15 es el término constante c, no una raíz. Factoriza para hallar las soluciones.'
        },
        tip:'Para x² + bx + c: dos números que MULTIPLIQUEN c y SUMEN b. Aquí producto −15, suma +2 → +5 y −3. Las raíces son los opuestos: −5 y 3.'
      },
      {
        id:'AV2-03', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Notación de funciones (evaluar)',
        stem:'The function f is defined by f(x) = 2x² − 3x + 1. What is the value of f(−2)?',
        choices:{A:'−1', B:'3', C:'11', D:'15'},
        correct:'D',
        expCorrect:'Sustituye x = −2: f(−2) = 2(−2)² − 3(−2) + 1 = 2(4) + 6 + 1 = 8 + 6 + 1 = 15.',
        expWrong:{
          A:'−1 sale de tratar (−2)² como −4: 2(−4) + 6 + 1 = −1. Recuerda que un cuadrado siempre da positivo: (−2)² = 4.',
          B:'3 sale de olvidar el signo en −3x: 2(4) − 6 + 1 = 3. Con x = −2, el término −3x se vuelve +6.',
          C:'11 sale de escribir −3(−2) como −6 en vez de +6: 8 − 6 + ... da un valor menor. Cuida el doble signo.'
        },
        tip:'Al evaluar, pon la entrada entre paréntesis: (−2)² = 4 (positivo) y −3(−2) = +6 (dos negativos dan positivo). Sustituye con cuidado los signos.'
      },
      {
        id:'AV2-04', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Decrecimiento exponencial (modelo)',
        stem:'A car is worth $400 (in hundreds of dollars) and its value decreases by 15% each year. Which function V models the value after t years?',
        choices:{A:'V(t) = 400 − 0.15t', B:'V(t) = 400(0.15)^t', C:'V(t) = 400(0.85)^t', D:'V(t) = 400(1.15)^t'},
        correct:'C',
        expCorrect:'Perder 15% cada año multiplica por (1 − 0.15) = 0.85 en cada paso. El modelo es V(t) = 400(0.85)^t. (Comprobación: en t = 1, V = 400·0.85 = 340, que es 400 menos 15%.)',
        expWrong:{
          A:'Este modelo es LINEAL (resta 0.15 por año). Un porcentaje que se repite cada año es multiplicativo, no aditivo.',
          B:'Multiplicar por 0.15 haría que el valor caiga al 15% cada año (una pérdida del 85%), no del 15%.',
          D:'1.15 modela un CRECIMIENTO del 15%, no un decrecimiento.'
        },
        tip:'Decrecimiento de r% → factor (1 − r/100)^t. Crecimiento → (1 + r/100)^t. "Decreases by 15%" es ×0.85 por período.'
      },
      {
        id:'AV2-05', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Cuadráticas: vértice (valor mínimo)',
        stem:'The function f is defined by f(x) = x² − 8x + 11. What is the minimum value of f(x)?',
        choices:{A:'−5', B:'−4', C:'4', D:'11'},
        correct:'A',
        expCorrect:'El vértice está en x = −b/(2a) = −(−8)/(2·1) = 4. El valor mínimo es f(4) = 16 − 32 + 11 = −5. Como a > 0, la parábola abre hacia arriba y ese es el mínimo.',
        expWrong:{
          B:'−4 confunde −b/2 con el valor mínimo. El mínimo es f(4) = −5, no −4.',
          C:'4 es la coordenada x del vértice, no el valor mínimo de la función (que es la coordenada y).',
          D:'11 es f(0), el término constante (intersección con el eje y), no el mínimo.'
        },
        tip:'Valor mínimo = coordenada y del vértice. Primero x = −b/(2a), luego EVALÚA f en ese x. No confundas la x del vértice con el valor de la función.'
      },
      {
        id:'AV2-06', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Funciones polinómicas (ceros distintos)',
        stem:'The polynomial p is defined by p(x) = (x − 1)(x + 3)²(x − 6). For how many distinct values of x does p(x) = 0?',
        choices:{A:'2', B:'3', C:'4', D:'6'},
        correct:'B',
        expCorrect:'Un producto es cero cuando algún factor es cero: x = 1, x = −3 y x = 6. Aunque (x + 3) aparece al cuadrado, x = −3 es UN solo valor distinto. Son 3 valores distintos.',
        expWrong:{
          A:'2 se te olvida un factor. Los ceros distintos son 1, −3 y 6: son tres.',
          C:'4 cuenta el factor (x + 3)² dos veces, pero da un único valor x = −3. Los valores DISTINTOS son 3.',
          D:'6 es una de las raíces (y el grado del polinomio), no la cantidad de ceros distintos.'
        },
        tip:'Ceros distintos = valores diferentes de x que anulan p. Un factor repetido como (x + 3)² sigue siendo UN cero distinto (x = −3), aunque sea raíz doble.'
      },
      {
        id:'AV2-07', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Cuadráticas: producto de raíces / factorización',
        stem:'The equation x² − 14x + 40 = 0 has two solutions, r and s. What is the value of the product r · s?',
        answer:'40',
        expCorrect:'Factoriza: dos números que multipliquen 40 y sumen −14 son −4 y −10 → (x − 4)(x − 10) = 0 → raíces 4 y 10. Su producto es 4 · 10 = 40. (Atajo: para ax² + bx + c, el producto de raíces es c/a = 40/1 = 40.) Respuesta: 40.',
        expWrong:{},
        tip:'Fórmulas de Vieta: para ax² + bx + c = 0, producto de raíces = c/a y suma = −b/a. Aquí c/a = 40/1 = 40, sin siquiera factorizar.'
      },
      {
        id:'AV2-08', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Cuadráticas: discriminante (una solución)',
        stem:'In the equation x² + 10x + c = 0, c is a constant. If the equation has exactly one real solution, what is the value of c?',
        choices:{A:'5', B:'20', C:'25', D:'100'},
        correct:'C',
        expCorrect:'Exactamente una solución real ⇔ discriminante cero: b² − 4ac = 0 → 10² − 4(1)(c) = 0 → 100 − 4c = 0 → c = 25. (Comprobación: x² + 10x + 25 = (x + 5)², raíz doble x = −5.)',
        expWrong:{
          A:'5 es la raíz doble (x = −5 en valor absoluto), no el valor de c. c = 5² = 25.',
          B:'20 no anula el discriminante: 100 − 4(20) = 20 ≠ 0. Resuelve 100 − 4c = 0.',
          D:'100 es b², pero olvidaste dividir entre 4: c = 100/4 = 25.'
        },
        tip:'Una sola solución real → discriminante = 0. Resuelve b² = 4ac. Aquí 100 = 4c → c = 25. Verifica: debe quedar un cuadrado perfecto (x + 5)².'
      },
      {
        id:'AV2-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Cuadráticas: suma de raíces',
        stem:'The solutions to the equation 3x² − 18x + 15 = 0 are r and s. What is the value of r + s?',
        choices:{A:'−6', B:'5', C:'6', D:'15'},
        correct:'C',
        expCorrect:'Divide todo entre 3: x² − 6x + 5 = 0 → (x − 1)(x − 5) = 0 → raíces 1 y 5. Su suma es 1 + 5 = 6. (Atajo: para ax² + bx + c, la suma de raíces es −b/a = −(−18)/3 = 6.)',
        expWrong:{
          A:'−6 tiene el signo cambiado: la suma de raíces es −b/a = −(−18)/3 = +6, no −6.',
          B:'5 es solo una de las raíces, no la suma de ambas.',
          D:'15 es el término constante c; el producto de raíces es c/a = 15/3 = 5, no la suma.'
        },
        tip:'Fórmulas de Vieta: para ax² + bx + c = 0, suma de raíces = −b/a. Aquí −(−18)/3 = 6, sin siquiera factorizar.'
      },
      {
        id:'AV2-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Cuadráticas: forma de vértice',
        stem:'The graph of y = (x + 2)² − 7 in the xy-plane is a parabola. What are the coordinates of its vertex?',
        choices:{A:'(2, −7)', B:'(−2, −7)', C:'(−2, 7)', D:'(2, 7)'},
        correct:'B',
        expCorrect:'En la forma de vértice y = a(x − h)² + k, el vértice es (h, k). Aquí (x + 2)² es (x − (−2))², así que h = −2, y k = −7. El vértice es (−2, −7). Ojo: el signo de h se invierte respecto al de dentro del paréntesis.',
        expWrong:{
          A:'(2, −7) toma el 2 con el signo de dentro del paréntesis, pero en y = a(x − h)² + k el vértice usa h = −2.',
          C:'(−2, 7) cambia el signo de k: el término es − 7, así que k = −7, no +7.',
          D:'(2, 7) tiene los dos signos equivocados: h = −2 (no 2) y k = −7 (no 7).'
        },
        tip:'Forma de vértice y = a(x − h)² + k → vértice (h, k). El (x + 2) INVIERTE el signo (h = −2), pero − 7 se toma tal cual (k = −7).'
      },
      {
        id:'AV2-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Sistemas no lineales (parábola y recta)',
        stem:'The system of equations below has two solutions.<br><br>y = x² − 3<br>y = 2x + 5<br><br>What is the greatest value of x among the solutions to the system?',
        choices:{A:'−2', B:'2', C:'5', D:'4'},
        correct:'D',
        expCorrect:'Iguala: x² − 3 = 2x + 5 → x² − 2x − 8 = 0 → (x − 4)(x + 2) = 0 → x = 4 o x = −2. El mayor valor de x es 4. (Comprobación: en x = 4, y = 4² − 3 = 13 y y = 2·4 + 5 = 13 ✓.)',
        expWrong:{
          A:'−2 es la OTRA solución (la menor). Piden el MAYOR valor de x, que es 4.',
          B:'2 no es raíz: 4 − 4 − 8 = −8 ≠ 0. Revisa la factorización de x² − 2x − 8.',
          C:'5 es el término constante de la recta, no una solución del sistema.'
        },
        tip:'Iguala las dos expresiones de y, pasa todo a un lado y factoriza. Aquí x² − 2x − 8 = 0 → (x − 4)(x + 2). Piden el mayor x: 4.'
      },
      {
        id:'AV2-12', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Cuadráticas: discriminante con parámetro',
        stem:'In the equation 4x² + bx + 25 = 0, b is a positive constant. If the equation has exactly one real solution, what is the value of b?',
        answer:'20',
        expCorrect:'Exactamente una solución real ⇔ discriminante cero: b² − 4ac = 0 → b² − 4(4)(25) = 0 → b² = 400 → b = ±20. Como b es positivo, b = 20. (Comprobación: 4x² + 20x + 25 = (2x + 5)², raíz doble.) Respuesta: 20.',
        expWrong:{},
        tip:'Una sola solución → discriminante = 0 → b² = 4ac = 4(4)(25) = 400 → b = 20 (tomas el positivo). Debe quedar un cuadrado perfecto: (2x + 5)².'
      }
    ]
  });
})();
