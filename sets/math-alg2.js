/* SAT Studio question set — Math: Algebra 2 (AL2-01 a AL2-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-alg2',
    title: 'Math — Algebra 2',
    section: 'math',
    level: 'Media',
    description: 'More Algebra: systems of equations, linear relationships, inequalities, and word problems.',
    minutes: 18,
    questions: [
      {
        id:'AL2-01', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Ecuaciones lineales (una variable)',
        stem:'If 6x − 9 = 2x + 15, what is the value of x?',
        choices:{A:'4', B:'3', C:'24', D:'6'},
        correct:'D',
        expCorrect:'Junta las x de un lado y los números del otro: 6x − 2x = 15 + 9 → 4x = 24 → x = 6. (Comprueba: 6(6)−9 = 27 y 2(6)+15 = 27 ✓.)',
        expWrong:{
          A:'4 sale de restar mal los números: 15 − 9 = 6 en vez de sumar 15 + 9 = 24. El −9 pasa sumando al otro lado.',
          B:'3 sale de dividir 6/2 o de agrupar mal; el resultado correcto de 4x = 24 es 6, no 3.',
          C:'24 es el valor de 4x, no de x. Te faltó el último paso: dividir entre 4.'
        },
        tip:'Variables a un lado, constantes al otro. Cuidado con los signos al pasar: −9 se vuelve +9. No te quedes en 4x = 24 — eso NO es x.'
      },
      {
        id:'AL2-02', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Sistemas de ecuaciones lineales (eliminación)',
        stem:'The system of equations below is given.<br><br>x + y = 10<br>x − y = 4<br><br>If (x, y) is the solution, what is the value of x?',
        choices:{A:'3', B:'6', C:'7', D:'14'},
        correct:'C',
        expCorrect:'Suma las dos ecuaciones (las y se cancelan): (x + y) + (x − y) = 10 + 4 → 2x = 14 → x = 7. (Comprueba: 7 + 3 = 10 y 7 − 3 = 4 ✓.)',
        expWrong:{
          A:'3 es el valor de y, no de x. La pregunta pide x — no confundas las variables.',
          B:'6 sale de promediar mal o de restar las ecuaciones en vez de sumarlas.',
          D:'14 es el valor de 2x, no de x. Te faltó dividir entre 2.'
        },
        tip:'Si una ecuación tiene +y y la otra −y, SÚMALAS y las y desaparecen. Luego divide entre el coeficiente y revisa si piden x o y.'
      },
      {
        id:'AL2-03', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Inecuaciones lineales (una variable)',
        stem:'Which value of x is a solution to the inequality 3x − 4 < 11?',
        choices:{A:'6', B:'7', C:'5', D:'4'},
        correct:'D',
        expCorrect:'Despeja: 3x − 4 < 11 → 3x < 15 → x < 5. La única opción estrictamente menor que 5 es 4. (Comprueba: 3(4)−4 = 8 < 11 ✓.)',
        expWrong:{
          A:'6 no cumple: 3(6)−4 = 14, que no es < 11.',
          B:'7 no cumple: 3(7)−4 = 17, que no es < 11.',
          C:'5 es el borde exacto: 3(5)−4 = 11, y 11 NO es < 11. La desigualdad es estricta.'
        },
        tip:'Despeja como una ecuación normal: x < 5. Con "<" el borde NO cuenta — x < 5 excluye al 5. Solo quedan valores menores.'
      },
      {
        id:'AL2-04', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Funciones lineales (pendiente e intercepto)',
        stem:'The graph of the line y = −4x + 7 is shown in the xy-plane. What is the y-intercept of the line?',
        choices:{A:'(0, 7)', B:'(0, −4)', C:'(7, 0)', D:'(−4, 0)'},
        correct:'A',
        expCorrect:'En y = mx + b, el intercepto en y es b, que aquí es 7, y ocurre cuando x = 0. Así que el punto es (0, 7). (Comprueba: y = −4(0) + 7 = 7 ✓.)',
        expWrong:{
          B:'(0, −4) usa la pendiente (−4) como si fuera el intercepto. La pendiente es m, no b.',
          C:'(7, 0) invierte las coordenadas: el intercepto en y tiene x = 0, no y = 0. (7, 0) sería un intercepto en x.',
          D:'(−4, 0) confunde pendiente con intercepto y además invierte las coordenadas.'
        },
        tip:'Intercepto en y = donde x = 0. En y = mx + b es el punto (0, b). No confundas b (intercepto) con m (pendiente).'
      },
      {
        id:'AL2-05', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas de ecuaciones lineales (sustitución)',
        stem:'The system of equations below is given.<br><br>y = 3x − 4<br>2x + y = 16<br><br>What is the value of x in the solution (x, y)?',
        choices:{A:'8', B:'2', C:'12', D:'4'},
        correct:'D',
        expCorrect:'La primera ecuación ya da y. Sustituye en la segunda: 2x + (3x − 4) = 16 → 5x − 4 = 16 → 5x = 20 → x = 4. (Comprueba: y = 3(4)−4 = 8, y 2(4)+8 = 16 ✓.)',
        expWrong:{
          A:'8 es el valor de y, no de x. La pregunta pide x — no confundas las variables.',
          B:'2 sale de olvidar el −4 al sustituir: 5x = 16 → no; falta sumar 4 antes de dividir.',
          C:'12 sale de resolver 5x = 20 mal o de sumar 16 − 4 = 12 sin dividir entre 5.'
        },
        tip:'Cuando una ecuación ya está despejada (y = ...), sustitúyela directo en la otra. Junta términos: 2x + 3x = 5x, luego despeja.'
      },
      {
        id:'AL2-06', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas de ecuaciones lineales (palabras)',
        stem:'At a snack stand, 2 hot dogs and 3 sodas cost $13, while 1 hot dog and 1 soda cost $5. What is the price, in dollars, of one hot dog?',
        choices:{A:'2', B:'4', C:'3', D:'5'},
        correct:'A',
        expCorrect:'Sea h el precio del hot dog y s el de la soda: 2h + 3s = 13 y h + s = 5. De la segunda, h = 5 − s. Sustituye: 2(5 − s) + 3s = 13 → 10 − 2s + 3s = 13 → 10 + s = 13 → s = 3. Entonces h = 5 − 3 = 2. (Comprueba: 2(2)+3(3) = 4+9 = 13 ✓ y 2+3 = 5 ✓.)',
        expWrong:{
          B:'4 sale de resolver para la variable equivocada o de un error de signo; el hot dog cuesta 2, la soda 3.',
          C:'3 es el precio de la soda (s), no del hot dog. La pregunta pide el hot dog.',
          D:'5 es el costo total de 1 hot dog + 1 soda, no el precio del hot dog solo.'
        },
        tip:'Nombra cada variable (h, s), arma una ecuación por frase, y despeja una de la ecuación más simple. Al final revisa cuál precio te piden.'
      },
      {
        id:'AL2-07', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Funciones lineales (ecuación de la recta)',
        stem:'Line m in the xy-plane has a slope of 3 and passes through the point (2, 1). Which equation represents line m?',
        choices:{A:'y = 3x + 1', B:'y = 3x − 5', C:'y = 3x − 1', D:'y = −3x + 5'},
        correct:'B',
        expCorrect:'Usa y = mx + b con m = 3 y el punto (2, 1): 1 = 3(2) + b → 1 = 6 + b → b = −5. La recta es y = 3x − 5. (Comprueba: 3(2)−5 = 1 ✓.)',
        expWrong:{
          A:'y = 3x + 1 usa 1 como intercepto, pero 1 es la coordenada y de un punto, no el valor de b.',
          C:'y = 3x − 1 sale de un error de signo o aritmético al despejar b; el correcto es b = −5.',
          D:'y = −3x + 5 tiene la pendiente con signo cambiado; la pendiente dada es +3.'
        },
        tip:'Para hallar b: mete el punto y la pendiente en y = mx + b y despeja b. Aquí b = 1 − 6 = −5, no la coordenada y del punto.'
      },
      {
        id:'AL2-08', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Inecuaciones lineales (dividir por negativo)',
        stem:'What is the solution to the inequality 4 − 2x ≤ 10?',
        choices:{A:'x ≥ −3', B:'x ≤ −3', C:'x ≥ 3', D:'x ≤ 3'},
        correct:'A',
        expCorrect:'4 − 2x ≤ 10 → −2x ≤ 6. Al dividir entre −2 (negativo) el signo se INVIERTE: x ≥ −3. (Comprueba con x = 0: 4 − 0 = 4 ≤ 10 ✓, y 0 ≥ −3 ✓.)',
        expWrong:{
          B:'x ≤ −3 olvida invertir el signo al dividir entre un negativo. Ese es el error clásico aquí.',
          C:'x ≥ 3 tiene mal el signo del 3: −2x ≤ 6 da x ≥ −3, no +3.',
          D:'x ≤ 3 ni invierte la desigualdad ni maneja bien el signo del 3.'
        },
        tip:'Si divides o multiplicas por un número NEGATIVO, voltea el signo (≤ pasa a ≥). Y ojo con el signo del resultado: 6/(−2) = −3.'
      },
      {
        id:'AL2-09', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas de ecuaciones lineales (infinitas soluciones)',
        stem:'The system of equations below has infinitely many solutions.<br><br>4x + 6y = 10<br>2x + 3y = k<br><br>What is the value of the constant k?',
        choices:{A:'10', B:'20', C:'5', D:'2'},
        correct:'C',
        expCorrect:'"Infinitas soluciones" significa que las dos ecuaciones son la MISMA recta. La primera, 4x + 6y = 10, dividida entre 2 da 2x + 3y = 5. Comparando con 2x + 3y = k, se ve que k = 5. (Comprueba: multiplicar 2x + 3y = 5 por 2 devuelve 4x + 6y = 10 ✓.)',
        expWrong:{
          A:'10 copia la constante de la primera ecuación sin ajustar por el factor 2 entre las ecuaciones.',
          B:'20 multiplica por 2 en vez de dividir; la segunda ecuación es la primera dividida entre 2, no multiplicada.',
          D:'2 es el factor entre las ecuaciones, no el valor de la constante k.'
        },
        tip:'"Infinitas soluciones" = misma recta. Haz que los coeficientes de x y y coincidan (aquí divide la primera entre 2) y el término constante debe coincidir también.'
      },
      {
        id:'AL2-10', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Ecuaciones lineales (traducción y despeje)',
        stem:'A gym charges a one-time sign-up fee of $30 plus a monthly membership of $45. Another gym has no sign-up fee but charges $55 per month. After how many months will the two gyms cost the same total amount?',
        choices:{A:'2', B:'3', C:'4', D:'5'},
        correct:'B',
        expCorrect:'Costo gym 1: 30 + 45m. Costo gym 2: 55m. Iguala: 30 + 45m = 55m → 30 = 10m → m = 3. (Comprueba: 30 + 45(3) = 165 y 55(3) = 165 ✓.)',
        expWrong:{
          A:'2 sale de igualar mal o de dividir 30 entre algo distinto de 10 (la diferencia de tarifas mensuales).',
          C:'4 sale de un error aritmético: 30/10 = 3, no 4.',
          D:'5 sale de dividir 30 entre 6 o de restar mal las tarifas; la diferencia por mes es 55 − 45 = 10.'
        },
        tip:'Arma una expresión de costo por opción, iguálalas y despeja. La clave: la diferencia mensual (55 − 45 = 10) es lo que cierra la brecha del cargo fijo (30).'
      },
      {
        id:'AL2-11', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas de ecuaciones lineales (valor combinado)',
        stem:'The system of equations below is given.<br><br>3x + 2y = 20<br>x + 2y = 8<br><br>What is the value of x − y in the solution to the system?',
        answer:'5',
        expCorrect:'Resta las ecuaciones para eliminar y: (3x + 2y) − (x + 2y) = 20 − 8 → 2x = 12 → x = 6. Sustituye en x + 2y = 8: 6 + 2y = 8 → 2y = 2 → y = 1. Piden x − y = 6 − 1 = 5. (Comprueba el sistema: 3(6)+2(1) = 20 ✓ y 6+2(1) = 8 ✓.) Respuesta: 5.',
        expWrong:{},
        tip:'Resta las ecuaciones cuando el término de y es idéntico (+2y en ambas): las y se cancelan directo. Luego halla la otra variable y arma la expresión exacta que piden.'
      },
      {
        id:'AL2-12', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Funciones lineales (evaluar y despejar)',
        stem:'The function g is defined by g(x) = −4x + 26. If g(a) = 6, what is the value of a?',
        answer:'5',
        expCorrect:'g(a) = 6 significa −4a + 26 = 6. Despeja: −4a = 6 − 26 = −20 → a = (−20)/(−4) = 5. (Comprueba: g(5) = −4(5) + 26 = −20 + 26 = 6 ✓.) Respuesta: 5.',
        expWrong:{},
        tip:'g(a) = 6 quiere decir "la salida es 6": reemplaza la fórmula por 6 y despeja la entrada a. Ojo con los dos negativos: −20 entre −4 da +5.'
      }
    ]
  });
})();
