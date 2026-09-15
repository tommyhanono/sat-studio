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
        expCorrect:'Gather the x terms on one side and the numbers on the other: 6x − 2x = 15 + 9 → 4x = 24 → x = 6. (Check: 6(6)−9 = 27 and 2(6)+15 = 27 ✓.)',
        expWrong:{
          A:'4 comes from subtracting the numbers wrong: 15 − 9 = 6 instead of adding 15 + 9 = 24. The −9 moves to the other side as an addition.',
          B:'3 sale de dividir 6/2 o de agrupar mal; el resultado correcto de 4x = 24 es 6, no 3.',
          C:'24 is the value of 4x, not of x. You skipped the last step: divide by 4.'
        },
        tip:'Variables on one side, constants on the other. Watch the signs as they move: −9 becomes +9. Do not stop at 4x = 24 — that is NOT x.'
      },
      {
        id:'AL2-02', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Systems of linear equations (elimination)',
        stem:'The system of equations below is given.<br><br>x + y = 10<br>x − y = 4<br><br>If (x, y) is the solution, what is the value of x?',
        choices:{A:'3', B:'6', C:'7', D:'14'},
        correct:'C',
        expCorrect:'Add the two equations (the y terms cancel): (x + y) + (x − y) = 10 + 4 → 2x = 14 → x = 7. (Check: 7 + 3 = 10 and 7 − 3 = 4 ✓.)',
        expWrong:{
          A:'3 is the value of y, not of x. The question asks for x — do not mix up the variables.',
          B:'6 comes from averaging wrong, or from subtracting the equations instead of adding them.',
          D:'14 is the value of 2x, not of x. You skipped dividing by 2.'
        },
        tip:'If one equation has +y and the other has −y, ADD them and the y terms vanish. Then divide by the coefficient and check whether they want x or y.'
      },
      {
        id:'AL2-03', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Inecuaciones lineales (una variable)',
        stem:'Which value of x is a solution to the inequality 3x − 4 < 11?',
        choices:{A:'6', B:'7', C:'5', D:'4'},
        correct:'D',
        expCorrect:'Solve it: 3x − 4 < 11 → 3x < 15 → x < 5. The only choice strictly less than 5 is 4. (Check: 3(4)−4 = 8 < 11 ✓.)',
        expWrong:{
          A:'6 no cumple: 3(6)−4 = 14, que no es < 11.',
          B:'7 no cumple: 3(7)−4 = 17, que no es < 11.',
          C:'5 es el borde exacto: 3(5)−4 = 11, y 11 NO es < 11. La desigualdad es estricta.'
        },
        tip:'Solve it like a normal equation: x < 5. With "<" the boundary does NOT count — x < 5 excludes 5. Only smaller values are left.'
      },
      {
        id:'AL2-04', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Funciones lineales (pendiente e intercepto)',
        stem:'The graph of the line y = −4x + 7 is shown in the xy-plane. What is the y-intercept of the line?',
        choices:{A:'(0, 7)', B:'(0, −4)', C:'(7, 0)', D:'(−4, 0)'},
        correct:'A',
        expCorrect:'In y = mx + b, the y-intercept is b, which here is 7, and it happens when x = 0. So the point is (0, 7). (Check: y = −4(0) + 7 = 7 ✓.)',
        expWrong:{
          B:'(0, −4) uses the slope (−4) as if it were the intercept. The slope is m, not b.',
          C:'(7, 0) swaps the coordinates: the y-intercept has x = 0, not y = 0. (7, 0) would be an x-intercept.',
          D:'(−4, 0) confuses slope with intercept and swaps the coordinates on top of that.'
        },
        tip:'The y-intercept = where x = 0. In y = mx + b it is the point (0, b). Do not confuse b (intercept) with m (slope).'
      },
      {
        id:'AL2-05', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of linear equations (substitution)',
        stem:'The system of equations below is given.<br><br>y = 3x − 4<br>2x + y = 16<br><br>What is the value of x in the solution (x, y)?',
        choices:{A:'8', B:'2', C:'12', D:'4'},
        correct:'D',
        expCorrect:'The first equation already gives y. Substitute into the second: 2x + (3x − 4) = 16 → 5x − 4 = 16 → 5x = 20 → x = 4. (Check: y = 3(4)−4 = 8, and 2(4)+8 = 16 ✓.)',
        expWrong:{
          A:'8 is the value of y, not of x. The question asks for x — do not mix up the variables.',
          B:'2 comes from forgetting the −4 when substituting: 5x = 16 → no; you have to add 4 before dividing.',
          C:'12 comes from solving 5x = 20 wrong, or from computing 16 − 4 = 12 without dividing by 5.'
        },
        tip:'When one equation is already solved (y = ...), substitute it straight into the other. Combine terms: 2x + 3x = 5x, then solve.'
      },
      {
        id:'AL2-06', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas de ecuaciones lineales (palabras)',
        stem:'At a snack stand, 2 hot dogs and 3 sodas cost $13, while 1 hot dog and 1 soda cost $5. What is the price, in dollars, of one hot dog?',
        choices:{A:'2', B:'4', C:'3', D:'5'},
        correct:'A',
        expCorrect:'Let h be the price of the hot dog and s the soda: 2h + 3s = 13 and h + s = 5. From the second, h = 5 − s. Substitute: 2(5 − s) + 3s = 13 → 10 − 2s + 3s = 13 → 10 + s = 13 → s = 3. Then h = 5 − 3 = 2. (Check: 2(2)+3(3) = 4+9 = 13 ✓ and 2+3 = 5 ✓.)',
        expWrong:{
          B:'4 comes from solving for the wrong variable or from a sign slip; the hot dog costs 2, the soda 3.',
          C:'3 is the price of the soda (s), not the hot dog. The question asks for the hot dog.',
          D:'5 is the combined cost of 1 hot dog + 1 soda, not the price of the hot dog alone.'
        },
        tip:'Name each variable (h, s), build one equation per sentence, and solve one of them from the simplest equation. At the end, check which price they asked for.'
      },
      {
        id:'AL2-07', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear functions (equation of a line)',
        stem:'Line m in the xy-plane has a slope of 3 and passes through the point (2, 1). Which equation represents line m?',
        choices:{A:'y = 3x + 1', B:'y = 3x − 5', C:'y = 3x − 1', D:'y = −3x + 5'},
        correct:'B',
        expCorrect:'Use y = mx + b with m = 3 and the point (2, 1): 1 = 3(2) + b → 1 = 6 + b → b = −5. The line is y = 3x − 5. (Check: 3(2)−5 = 1 ✓.)',
        expWrong:{
          A:'y = 3x + 1 uses 1 as the intercept, but 1 is the y-coordinate of a point, not the value of b.',
          C:'y = 3x − 1 comes from a sign or arithmetic slip while solving for b; the correct value is b = −5.',
          D:'y = −3x + 5 has the wrong sign on the slope; the slope you were given is +3.'
        },
        tip:'To find b: plug the point and the slope into y = mx + b and solve for b. Here b = 1 − 6 = −5, not the y-coordinate of the point.'
      },
      {
        id:'AL2-08', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Inecuaciones lineales (dividir por negativo)',
        stem:'What is the solution to the inequality 4 − 2x ≤ 10?',
        choices:{A:'x ≥ −3', B:'x ≤ −3', C:'x ≥ 3', D:'x ≤ 3'},
        correct:'A',
        expCorrect:'4 − 2x ≤ 10 → −2x ≤ 6. Dividing by −2 (a negative) FLIPS the sign: x ≥ −3. (Check with x = 0: 4 − 0 = 4 ≤ 10 ✓, and 0 ≥ −3 ✓.)',
        expWrong:{
          B:'x ≤ −3 forgets to flip the sign when dividing by a negative. That is the classic error here.',
          C:'x ≥ 3 has the wrong sign on the 3: −2x ≤ 6 gives x ≥ −3, not +3.',
          D:'x ≤ 3 neither flips the inequality nor handles the sign of the 3 correctly.'
        },
        tip:'If you divide or multiply by a NEGATIVE number, flip the sign (≤ becomes ≥). And watch the sign of the result: 6/(−2) = −3.'
      },
      {
        id:'AL2-09', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas de ecuaciones lineales (infinitas soluciones)',
        stem:'The system of equations below has infinitely many solutions.<br><br>4x + 6y = 10<br>2x + 3y = k<br><br>What is the value of the constant k?',
        choices:{A:'10', B:'20', C:'5', D:'2'},
        correct:'C',
        expCorrect:'"Infinitely many solutions" means the two equations are the SAME line. The first, 4x + 6y = 10, divided by 2 gives 2x + 3y = 5. Comparing with 2x + 3y = k, you can see k = 5. (Check: multiplying 2x + 3y = 5 by 2 gives back 4x + 6y = 10 ✓.)',
        expWrong:{
          A:'10 copies the constant from the first equation without adjusting for the factor of 2 between the equations.',
          B:'20 multiplies by 2 instead of dividing; the second equation is the first divided by 2, not multiplied.',
          D:'2 is the factor between the equations, not the value of the constant k.'
        },
        tip:'"Infinitely many solutions" = the same line. Make the x and y coefficients match (here divide the first by 2) and the constant term has to match too.'
      },
      {
        id:'AL2-10', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear equations (translating and solving)',
        stem:'A gym charges a one-time sign-up fee of $30 plus a monthly membership of $45. Another gym has no sign-up fee but charges $55 per month. After how many months will the two gyms cost the same total amount?',
        choices:{A:'2', B:'3', C:'4', D:'5'},
        correct:'B',
        expCorrect:'Costo gym 1: 30 + 45m. Costo gym 2: 55m. Iguala: 30 + 45m = 55m → 30 = 10m → m = 3. (Comprueba: 30 + 45(3) = 165 y 55(3) = 165 ✓.)',
        expWrong:{
          A:'2 comes from setting it up wrong, or from dividing 30 by something other than 10 (the difference in monthly rates).',
          C:'4 comes from an arithmetic slip: 30/10 = 3, not 4.',
          D:'5 comes from dividing 30 by 6, or from subtracting the rates wrong; the monthly difference is 55 − 45 = 10.'
        },
        tip:'Build a cost expression for each option, set them equal and solve. The key: the monthly difference (55 − 45 = 10) is what closes the gap of the fixed charge (30).'
      },
      {
        id:'AL2-11', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas de ecuaciones lineales (valor combinado)',
        stem:'The system of equations below is given.<br><br>3x + 2y = 20<br>x + 2y = 8<br><br>What is the value of x − y in the solution to the system?',
        answer:'5',
        expCorrect:'Subtract the equations to eliminate y: (3x + 2y) − (x + 2y) = 20 − 8 → 2x = 12 → x = 6. Substitute into x + 2y = 8: 6 + 2y = 8 → 2y = 2 → y = 1. They want x − y = 6 − 1 = 5. (Check the system: 3(6)+2(1) = 20 ✓ and 6+2(1) = 8 ✓.) Answer: 5.',
        expWrong:{},
        tip:'Subtract the equations when the y term is identical (+2y in both): the y terms cancel outright. Then find the other variable and build the exact expression they asked for.'
      },
      {
        id:'AL2-12', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Funciones lineales (evaluar y despejar)',
        stem:'The function g is defined by g(x) = −4x + 26. If g(a) = 6, what is the value of a?',
        answer:'5',
        expCorrect:'g(a) = 6 significa −4a + 26 = 6. Despeja: −4a = 6 − 26 = −20 → a = (−20)/(−4) = 5. (Comprueba: g(5) = −4(5) + 26 = −20 + 26 = 6 ✓.) Respuesta: 5.',
        expWrong:{},
        tip:'g(a) = 6 means "the output is 6": replace the formula with 6 and solve for the input a. Watch the two negatives: −20 divided by −4 gives +5.'
      }
    ]
  });
})();
