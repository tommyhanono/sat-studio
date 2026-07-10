/* SAT Studio question set — Math: Algebra (ALG-01 a ALG-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-alg',
    title: 'Math — Algebra',
    section: 'math',
    level: 'Media',
    description: 'Algebra: linear equations and functions, systems, and inequalities.',
    minutes: 18,
    questions: [
      {
        id:'ALG-01', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Ecuaciones lineales (una variable)',
        stem:'If 5x + 8 = 3x + 20, what is the value of x?',
        choices:{A:'6', B:'2', C:'12', D:'14'},
        correct:'A',
        expCorrect:'Junta las x de un lado y los números del otro: 5x − 3x = 20 − 8 → 2x = 12 → x = 6. (Comprueba: 5(6)+8 = 38 y 3(6)+20 = 38 ✓.)',
        expWrong:{
          B:'2 sale de restar mal: 8 − (algo) o dividir 4/2. Vuelve a agrupar: 2x = 12, no 2x = 4.',
          C:'12 es el valor de 2x, no de x. Te faltó el último paso: dividir entre 2.',
          D:'14 sale de sumar 20 + 8 = 28 y no restar las x correctamente. Mueve primero los términos con x.'
        },
        tip:'Regla fija: variables a un lado, constantes al otro, luego divide por el coeficiente. No te detengas en 2x = 12 — eso NO es x.'
      },
      {
        id:'ALG-02', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Ecuaciones lineales (dos variables, despeje)',
        stem:'The equation 4x + 3y = 24 relates x and y. If x = 3, what is the value of y?',
        choices:{A:'3', B:'4', C:'7', D:'12'},
        correct:'B',
        expCorrect:'Sustituye x = 3: 4(3) + 3y = 24 → 12 + 3y = 24 → 3y = 12 → y = 4. (Comprueba: 12 + 12 = 24 ✓.)',
        expWrong:{
          A:'3 es el valor de x que te dieron, no de y. No lo copies como respuesta.',
          C:'7 sale de restar mal: 24 − 12 = 12, no 21; y luego 12/3 = 4, no 7.',
          D:'12 es 3y (o el valor de 4x). Te faltó dividir entre 3 para despejar y.'
        },
        tip:'Sustituir es reemplazar y despejar. Primer paso siempre: multiplica el número conocido. Aquí 4×3 = 12 antes de tocar la y.'
      },
      {
        id:'ALG-03', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Funciones lineales (pendiente)',
        stem:'A line in the xy-plane passes through the points (1, 5) and (4, 17). What is the slope of the line?',
        choices:{A:'3', B:'6', C:'4', D:'12'},
        correct:'C',
        expCorrect:'Pendiente = (cambio en y)/(cambio en x) = (17 − 5)/(4 − 1) = 12/3 = 4.',
        expWrong:{
          A:'3 es el cambio en x (4 − 1), no la pendiente. Es el denominador, no el resultado.',
          B:'6 sale de dividir mal o de promediar; 12/3 = 4, no 6.',
          D:'12 es solo el cambio en y (17 − 5). Te faltó dividir entre el cambio en x.'
        },
        tip:'Pendiente = subida/avance = Δy/Δx. Resta en el MISMO orden arriba y abajo: (y₂−y₁)/(x₂−x₁). Nunca dejes el Δy solo.'
      },
      {
        id:'ALG-04', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Inecuaciones lineales (una variable)',
        stem:'Which of the following is a solution to the inequality 2x + 5 > 13?',
        choices:{A:'2', B:'3', C:'4', D:'5'},
        correct:'D',
        expCorrect:'Despeja: 2x + 5 > 13 → 2x > 8 → x > 4. La única opción estrictamente mayor que 4 es 5. (Comprueba: 2(5)+5 = 15 > 13 ✓.)',
        expWrong:{
          A:'2 no cumple: 2(2)+5 = 9, que no es > 13.',
          B:'3 no cumple: 2(3)+5 = 11, que no es > 13.',
          C:'4 es el borde exacto: 2(4)+5 = 13, y 13 NO es > 13. La desigualdad es estricta.'
        },
        tip:'Despeja como una ecuación normal (solo inviertes el signo si multiplicas/divides por negativo). Con ">" el borde NO cuenta: x > 4 excluye al 4.'
      },
      {
        id:'ALG-05', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas de ecuaciones lineales (eliminación)',
        stem:'The system of equations below is given.<br><br>3x + y = 11<br>x − y = 1<br><br>If (x, y) is the solution to the system, what is the value of x?',
        choices:{A:'2', B:'3', C:'5', D:'8'},
        correct:'B',
        expCorrect:'Suma las dos ecuaciones (las y se cancelan): (3x + y) + (x − y) = 11 + 1 → 4x = 12 → x = 3. (Comprueba: 3(3)+2 = 11 y 3−2 = 1 ✓.)',
        expWrong:{
          A:'2 es el valor de y, no de x. Cuidado: la pregunta pide x.',
          C:'5 sale de sumar mal o de resolver x − y = 1 aislado sin usar la otra ecuación.',
          D:'8 es 4x sin dividir, o 11 − 3 mal hecho. Recuerda 4x = 12 → x = 3.'
        },
        tip:'Si una ecuación tiene +y y la otra −y, SÚMALAS: las y desaparecen solas. Es el atajo más rápido de sistemas. Luego revisa si piden x o y.'
      },
      {
        id:'ALG-06', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas de ecuaciones lineales (sustitución)',
        stem:'The system of equations below is given.<br><br>y = 2x − 5<br>4x + y = 13<br><br>What is the value of y in the solution (x, y)?',
        choices:{A:'1', B:'3', C:'-1', D:'6'},
        correct:'A',
        expCorrect:'La primera ecuación ya te da y. Sustituye en la segunda: 4x + (2x − 5) = 13 → 6x − 5 = 13 → 6x = 18 → x = 3. Luego y = 2(3) − 5 = 1. (Comprueba: 4(3)+1 = 13 ✓.) Respuesta: y = 1.',
        expWrong:{
          B:'3 es el valor de x, no de y. La pregunta pide y — sustituye x en y = 2x − 5.',
          C:'-1 sale de un error de signo en 2x − 5: 2(3) − 5 = 1, no −1.',
          D:'6 es 2x sin restar el 5, o un despeje incompleto de y.'
        },
        tip:'Cuando una ecuación ya está despejada (y = ...), sustitúyela directo en la otra. Un paso menos. Luego usa esa misma fórmula para hallar y.'
      },
      {
        id:'ALG-07', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Funciones lineales (ecuación de la recta)',
        stem:'Line k in the xy-plane has a slope of −2 and passes through the point (3, 4). Which equation represents line k?',
        choices:{A:'y = −2x + 4', B:'y = −2x − 2', C:'y = 2x − 2', D:'y = −2x + 10'},
        correct:'D',
        expCorrect:'Usa y = mx + b con m = −2 y el punto (3, 4): 4 = −2(3) + b → 4 = −6 + b → b = 10. La recta es y = −2x + 10. (Comprueba: −2(3)+10 = 4 ✓.)',
        expWrong:{
          A:'y = −2x + 4 usa 4 como intercepto, pero 4 es la coordenada y de un punto, no el valor de b.',
          B:'y = −2x − 2 sale de b = −2(3) + 4 con signos cambiados: −6 + 4 = −2 en vez de despejar b correctamente.',
          C:'y = 2x − 2 tiene la pendiente con signo equivocado; la pendiente dada es −2.'
        },
        tip:'Para hallar b: mete el punto y la pendiente en y = mx + b y despeja b. No confundas la coordenada y del punto con el intercepto b.'
      },
      {
        id:'ALG-08', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Ecuaciones lineales (traducción de palabras)',
        stem:'A technician charges a fixed fee of $40 for a house visit plus $25 per hour of work. If the total charge for a visit was $190, for how many hours did the technician work?',
        choices:{A:'5', B:'7', C:'6', D:'8'},
        correct:'C',
        expCorrect:'Modelo: 40 + 25h = 190. Resta el cargo fijo: 25h = 150 → h = 6. (Comprueba: 40 + 25(6) = 40 + 150 = 190 ✓.)',
        expWrong:{
          A:'5 sale de dividir 190/40 o de restar mal; 150/25 = 6, no 5.',
          B:'7 sale de olvidar el cargo fijo o restarlo dos veces.',
          D:'8 sale de dividir 190/25 ≈ 7.6 y redondear, sin quitar antes los $40 fijos.'
        },
        tip:'Traduce: "fijo" = constante, "por hora" = coeficiente de h. Arma total = fijo + tarifa×h, luego resta el fijo ANTES de dividir.'
      },
      {
        id:'ALG-09', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Inecuaciones lineales (dividir por negativo)',
        stem:'What is the solution to the inequality −3x + 7 ≥ 1?',
        choices:{A:'x ≥ 2', B:'x ≤ 2', C:'x ≥ −2', D:'x ≤ −2'},
        correct:'B',
        expCorrect:'−3x + 7 ≥ 1 → −3x ≥ −6. Al dividir entre −3 (número negativo) el signo se INVIERTE: x ≤ 2. (Comprueba con x = 0: −3(0)+7 = 7 ≥ 1 ✓, y 0 ≤ 2 ✓.)',
        expWrong:{
          A:'x ≥ 2 olvida invertir el signo al dividir entre un negativo. Ese es el error clásico de esta pregunta.',
          C:'x ≥ −2 tiene mal el signo del 2 y no invierte la desigualdad.',
          D:'x ≤ −2 invierte el signo (bien) pero calcula −6/−3 = 2, no −2. El resultado es +2.'
        },
        tip:'Regla de oro de inecuaciones: si multiplicas o divides por un número NEGATIVO, voltea el signo (≥ pasa a ≤). Es lo que más evalúan aquí.'
      },
      {
        id:'ALG-10', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas de ecuaciones lineales (coeficientes)',
        stem:'The system of equations below has no solution.<br><br>y = 5x + 2<br>y = (c − 1)x + 9<br><br>What is the value of the constant c?',
        choices:{A:'4', B:'5', C:'6', D:'7'},
        correct:'C',
        expCorrect:'Un sistema lineal "no solution" significa rectas PARALELAS: misma pendiente, distinto intercepto. Iguala las pendientes: 5 = c − 1 → c = 6. (Los interceptos 2 y 9 ya son distintos, así que nunca se cruzan ✓.)',
        expWrong:{
          A:'4 sale de resolver c + 1 = 5 en vez de c − 1 = 5. Cuidado con el signo del −1.',
          B:'5 iguala c directamente a la pendiente, olvidando que la pendiente es (c − 1), no c.',
          D:'7 sale de sumar 5 + 2 (la pendiente y el intercepto), que no tiene sentido aquí.'
        },
        tip:'"No solution" = rectas paralelas = pendientes iguales, interceptos distintos. Iguala solo los coeficientes de x. "Infinitas soluciones" sería la misma recta (todo igual).'
      },
      {
        id:'ALG-11', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas de ecuaciones lineales (valor combinado)',
        stem:'The system of equations below is given.<br><br>2x + 3y = 18<br>x + y = 7<br><br>What is the value of x + 2y in the solution to the system?',
        answer:'11',
        expCorrect:'Resuelve el sistema. De x + y = 7 → x = 7 − y. Sustituye: 2(7 − y) + 3y = 18 → 14 − 2y + 3y = 18 → 14 + y = 18 → y = 4. Entonces x = 7 − 4 = 3. Piden x + 2y = 3 + 2(4) = 3 + 8 = 11. (Comprueba el sistema: 2(3)+3(4) = 18 ✓ y 3+4 = 7 ✓.) Respuesta: 11.',
        expWrong:{},
        tip:'Lee bien qué combinación piden. Aquí no es x ni y solos, sino x + 2y. Resuelve el sistema completo primero y luego arma la expresión exacta que te piden.'
      },
      {
        id:'ALG-12', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Funciones lineales (evaluar y despejar)',
        stem:'The function f is defined by f(x) = 7x − 4. If f(a) = 31, what is the value of a?',
        answer:'5',
        expCorrect:'f(a) = 31 significa 7a − 4 = 31. Despeja: 7a = 35 → a = 5. (Comprueba: f(5) = 7(5) − 4 = 35 − 4 = 31 ✓.) Respuesta: 5.',
        expWrong:{},
        tip:'f(a) = 31 quiere decir "la salida es 31": reemplaza la fórmula por 31 y despeja la entrada a. No confundas entrada (a) con salida (31).'
      }
    ]
  });
})();
