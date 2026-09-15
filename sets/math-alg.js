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
        expCorrect:'Gather the x terms on one side and the numbers on the other: 5x − 3x = 20 − 8 → 2x = 12 → x = 6. (Check: 5(6)+8 = 38 and 3(6)+20 = 38 ✓.)',
        expWrong:{
          B:'2 sale de restar mal: 8 − (algo) o dividir 4/2. Vuelve a agrupar: 2x = 12, no 2x = 4.',
          C:'12 is the value of 2x, not of x. You skipped the last step: divide by 2.',
          D:'14 comes from adding 20 + 8 = 28 and not subtracting the x terms correctly. Move the x terms first.'
        },
        tip:'Fixed rule: variables on one side, constants on the other, then divide by the coefficient. Do not stop at 2x = 12 — that is NOT x.'
      },
      {
        id:'ALG-02', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Ecuaciones lineales (dos variables, despeje)',
        stem:'The equation 4x + 3y = 24 relates x and y. If x = 3, what is the value of y?',
        choices:{A:'3', B:'4', C:'7', D:'12'},
        correct:'B',
        expCorrect:'Sustituye x = 3: 4(3) + 3y = 24 → 12 + 3y = 24 → 3y = 12 → y = 4. (Comprueba: 12 + 12 = 24 ✓.)',
        expWrong:{
          A:'3 is the value of x they gave you, not of y. Do not copy it as the answer.',
          C:'7 sale de restar mal: 24 − 12 = 12, no 21; y luego 12/3 = 4, no 7.',
          D:'12 is 3y (or the value of 4x). You skipped dividing by 3 to solve for y.'
        },
        tip:'Substituting means replacing and solving. First step, always: multiply out the known value. Here 4×3 = 12 before you touch the y.'
      },
      {
        id:'ALG-03', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Funciones lineales (pendiente)',
        stem:'A line in the xy-plane passes through the points (1, 5) and (4, 17). What is the slope of the line?',
        choices:{A:'3', B:'6', C:'4', D:'12'},
        correct:'C',
        expCorrect:'Pendiente = (cambio en y)/(cambio en x) = (17 − 5)/(4 − 1) = 12/3 = 4.',
        expWrong:{
          A:'3 is the change in x (4 − 1), not the slope. It is the denominator, not the result.',
          B:'6 sale de dividir mal o de promediar; 12/3 = 4, no 6.',
          D:'12 is only the change in y (17 − 5). You skipped dividing by the change in x.'
        },
        tip:'Slope = rise/run = Δy/Δx. Subtract in the SAME order on top and bottom: (y₂−y₁)/(x₂−x₁). Never leave the Δy on its own.'
      },
      {
        id:'ALG-04', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Inecuaciones lineales (una variable)',
        stem:'Which of the following is a solution to the inequality 2x + 5 > 13?',
        choices:{A:'2', B:'3', C:'4', D:'5'},
        correct:'D',
        expCorrect:'Solve it: 2x + 5 > 13 → 2x > 8 → x > 4. The only choice strictly greater than 4 is 5. (Check: 2(5)+5 = 15 > 13 ✓.)',
        expWrong:{
          A:'2 no cumple: 2(2)+5 = 9, que no es > 13.',
          B:'3 no cumple: 2(3)+5 = 11, que no es > 13.',
          C:'4 es el borde exacto: 2(4)+5 = 13, y 13 NO es > 13. La desigualdad es estricta.'
        },
        tip:'Solve it like a normal equation (you only flip the sign if you multiply or divide by a negative). With ">" the boundary does NOT count: x > 4 excludes 4.'
      },
      {
        id:'ALG-05', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of linear equations (elimination)',
        stem:'The system of equations below is given.<br><br>3x + y = 11<br>x − y = 1<br><br>If (x, y) is the solution to the system, what is the value of x?',
        choices:{A:'2', B:'3', C:'5', D:'8'},
        correct:'B',
        expCorrect:'Add the two equations (the y terms cancel): (3x + y) + (x − y) = 11 + 1 → 4x = 12 → x = 3. (Check: 3(3)+2 = 11 and 3−2 = 1 ✓.)',
        expWrong:{
          A:'2 es el valor de y, no de x. Cuidado: la pregunta pide x.',
          C:'5 comes from adding wrong, or from solving x − y = 1 on its own without using the other equation.',
          D:'8 es 4x sin dividir, o 11 − 3 mal hecho. Recuerda 4x = 12 → x = 3.'
        },
        tip:'If one equation has +y and the other has −y, ADD them: the y terms vanish on their own. It is the fastest shortcut in systems. Then check whether they want x or y.'
      },
      {
        id:'ALG-06', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of linear equations (substitution)',
        stem:'The system of equations below is given.<br><br>y = 2x − 5<br>4x + y = 13<br><br>What is the value of y in the solution (x, y)?',
        choices:{A:'1', B:'3', C:'-1', D:'6'},
        correct:'A',
        expCorrect:'The first equation already gives you y. Substitute into the second: 4x + (2x − 5) = 13 → 6x − 5 = 13 → 6x = 18 → x = 3. Then y = 2(3) − 5 = 1. (Check: 4(3)+1 = 13 ✓.) Answer: y = 1.',
        expWrong:{
          B:'3 es el valor de x, no de y. La pregunta pide y — sustituye x en y = 2x − 5.',
          C:'-1 sale de un error de signo en 2x − 5: 2(3) − 5 = 1, no −1.',
          D:'6 is 2x without subtracting the 5, or an incomplete solve for y.'
        },
        tip:'When one equation is already solved (y = ...), substitute it straight into the other. One step less. Then use that same formula to find y.'
      },
      {
        id:'ALG-07', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear functions (equation of a line)',
        stem:'Line k in the xy-plane has a slope of −2 and passes through the point (3, 4). Which equation represents line k?',
        choices:{A:'y = −2x + 4', B:'y = −2x − 2', C:'y = 2x − 2', D:'y = −2x + 10'},
        correct:'D',
        expCorrect:'Use y = mx + b with m = −2 and the point (3, 4): 4 = −2(3) + b → 4 = −6 + b → b = 10. The line is y = −2x + 10. (Check: −2(3)+10 = 4 ✓.)',
        expWrong:{
          A:'y = −2x + 4 uses 4 as the intercept, but 4 is the y-coordinate of a point, not the value of b.',
          B:'y = −2x − 2 comes from b = −2(3) + 4 with the signs switched: −6 + 4 = −2 instead of solving for b correctly.',
          C:'y = 2x − 2 has the wrong sign on the slope; the slope you were given is −2.'
        },
        tip:'To find b: plug the point and the slope into y = mx + b and solve for b. Do not confuse the y-coordinate of the point with the intercept b.'
      },
      {
        id:'ALG-08', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equations (translating words)',
        stem:'A technician charges a fixed fee of $40 for a house visit plus $25 per hour of work. If the total charge for a visit was $190, for how many hours did the technician work?',
        choices:{A:'5', B:'7', C:'6', D:'8'},
        correct:'C',
        expCorrect:'Modelo: 40 + 25h = 190. Resta el cargo fijo: 25h = 150 → h = 6. (Comprueba: 40 + 25(6) = 40 + 150 = 190 ✓.)',
        expWrong:{
          A:'5 sale de dividir 190/40 o de restar mal; 150/25 = 6, no 5.',
          B:'7 sale de olvidar el cargo fijo o restarlo dos veces.',
          D:'8 comes from dividing 190/25 ≈ 7.6 and rounding, without taking off the fixed $40 first.'
        },
        tip:'Translate it: “flat” = the constant, “per hour” = the coefficient of h. Build total = flat + rate×h, then subtract the flat fee BEFORE dividing.'
      },
      {
        id:'ALG-09', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Inecuaciones lineales (dividir por negativo)',
        stem:'What is the solution to the inequality −3x + 7 ≥ 1?',
        choices:{A:'x ≥ 2', B:'x ≤ 2', C:'x ≥ −2', D:'x ≤ −2'},
        correct:'B',
        expCorrect:'−3x + 7 ≥ 1 → −3x ≥ −6. Dividing by −3 (a negative number) FLIPS the sign: x ≤ 2. (Check with x = 0: −3(0)+7 = 7 ≥ 1 ✓, and 0 ≤ 2 ✓.)',
        expWrong:{
          A:'x ≥ 2 forgets to flip the sign when dividing by a negative. That is the classic error on this question.',
          C:'x ≥ −2 has the wrong sign on the 2 and does not flip the inequality.',
          D:'x ≤ −2 flips the sign (correctly) but computes −6/−3 = 2, not −2. The result is +2.'
        },
        tip:'Golden rule of inequalities: if you multiply or divide by a NEGATIVE number, flip the sign (≥ becomes ≤). That is what they test most here.'
      },
      {
        id:'ALG-10', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas de ecuaciones lineales (coeficientes)',
        stem:'The system of equations below has no solution.<br><br>y = 5x + 2<br>y = (c − 1)x + 9<br><br>What is the value of the constant c?',
        choices:{A:'4', B:'5', C:'6', D:'7'},
        correct:'C',
        expCorrect:'A linear system with "no solution" means PARALLEL lines: same slope, different intercept. Set the slopes equal: 5 = c − 1 → c = 6. (The intercepts 2 and 9 are already different, so they never meet ✓.)',
        expWrong:{
          A:'4 comes from solving c + 1 = 5 instead of c − 1 = 5. Watch the sign on the −1.',
          B:'5 iguala c directamente a la pendiente, olvidando que la pendiente es (c − 1), no c.',
          D:'7 comes from adding 5 + 2 (the slope and the intercept), which makes no sense here.'
        },
        tip:'"No solution" = parallel lines = equal slopes, different intercepts. Set only the x coefficients equal. "Infinitely many solutions" would be the same line (everything equal).'
      },
      {
        id:'ALG-11', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas de ecuaciones lineales (valor combinado)',
        stem:'The system of equations below is given.<br><br>2x + 3y = 18<br>x + y = 7<br><br>What is the value of x + 2y in the solution to the system?',
        answer:'11',
        expCorrect:'Solve the system. From x + y = 7 → x = 7 − y. Substitute: 2(7 − y) + 3y = 18 → 14 − 2y + 3y = 18 → 14 + y = 18 → y = 4. Then x = 7 − 4 = 3. They want x + 2y = 3 + 2(4) = 3 + 8 = 11. (Check the system: 2(3)+3(4) = 18 ✓ and 3+4 = 7 ✓.) Answer: 11.',
        expWrong:{},
        tip:'Read carefully which combination they want. Here it is not x or y alone, but x + 2y. Solve the whole system first, then build the exact expression they asked for.'
      },
      {
        id:'ALG-12', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Funciones lineales (evaluar y despejar)',
        stem:'The function f is defined by f(x) = 7x − 4. If f(a) = 31, what is the value of a?',
        answer:'5',
        expCorrect:'f(a) = 31 significa 7a − 4 = 31. Despeja: 7a = 35 → a = 5. (Comprueba: f(5) = 7(5) − 4 = 35 − 4 = 31 ✓.) Respuesta: 5.',
        expWrong:{},
        tip:'f(a) = 31 means "the output is 31": replace the formula with 31 and solve for the input a. Do not confuse the input (a) with the output (31).'
      }
    ]
  });
})();
