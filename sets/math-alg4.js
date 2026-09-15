/* SAT Studio question set — Math: Algebra 4, sistemas y rectas (AL4-01 a AL4-12)
 *
 * Segundo de los dos sets que pedía la auditoría del 26-jul-2026 para llevar el
 * dominio Algebra de 0,68× a ~1,0× de su peso oficial (35 % del examen).
 * math-alg3 cubrió el núcleo de una variable, funciones y desigualdades; este
 * cubre lo que quedaba fino:
 *   · Sistemas por sustitución y por eliminación con multiplicación
 *   · Sistemas sin solución e infinitas soluciones
 *   · Desigualdades en dos variables
 *   · Rectas paralelas y perpendiculares
 *   · Modelos lineales con dos condiciones
 *   · Valor absoluto lineal
 *
 * Mezcla 8 Media / 4 Difícil: el banco ya tiene 59 % de dificultad alta y hay
 * que dejar de empujar ese sesgo.
 */
(function(){
  window.SAT_SETS.push({
    id: 'math-alg4',
    title: 'Math — Algebra 4 (sistemas y rectas)',
    section: 'math',
    level: 'Media',
    description: 'Systems by substitution and elimination, no solution and infinitely many, inequalities in two variables, parallel and perpendicular lines, models with two conditions, and absolute value.',
    minutes: 20,
    questions: [
      {
        id:'AL4-01', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two equations (substitution)',
        stem:'y = 2x − 3\n4x + y = 21\nThe system of equations above has solution (x, y). What is the value of y ?',
        choices:{A:'5', B:'4', C:'21', D:'−3'},
        correct:'A',
        expCorrect:'The first equation already has y solved, so substitute straight into the second: 4x + (2x − 3) = 21 ⇒ 6x − 3 = 21 ⇒ 6x = 24 ⇒ x = 4. Now go back to the first: y = 2(4) − 3 = 5. (Check in the second: 4(4) + 5 = 21 ✓.)',
        expWrong:{
          B:'4 is the value of x, not of y. You solved it correctly and answered for the other variable: it is the most expensive error on this topic because it does not feel like one.',
          C:'21 is the right-hand side of the second equation, not a solution. Neither variable equals 21.',
          D:'−3 is the intercept of the first equation, the loose number. It is y only when x = 0, and here x = 4.'
        },
        tip:'If one equation already has a variable solved, substitution always wins: there is nothing to set up. And before you mark, reread which variable they want — x and y are usually both among the options.',
        desmos:'Grafica y=2x-3 y 4x+y=21 y toca la intersección: (4, 5).',
        desmosLatex:['y=2x-3','4x+y=21']
      },
      {
        id:'AL4-02', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas con infinitas soluciones',
        stem:'3x − 6y = 12\nax − 2y = 4\nIn the system above, a is a constant. If the system has infinitely many solutions, what is the value of a ?',
        choices:{A:'1', B:'3', C:'2', D:'1/3'},
        correct:'A',
        expCorrect:'Infinitely many solutions means the two equations are **the same line**: one is an exact multiple of the other, coefficients AND constant. Divide the first by 3: x − 2y = 4. Compare it with ax − 2y = 4: the y terms and the constants already match, so a = 1. (With a = 1 the two equations are identical, that is, infinitely many solutions ✓.)',
        expWrong:{
          B:'3 copies the coefficient from the first equation without adjusting the scale. The second equation is one third of the first: the 3 gets divided too.',
          C:'2 is the y coefficient, not the x one. Those are different positions in the equation.',
          D:'1/3 divides one time too many. Going from 3x − 6y = 12 to x − 2y = 4 you already divided everything by 3; the x coefficient ended up as 1, not 1/3.'
        },
        tip:'Infinitely many solutions = the SAME line (coefficients and constant proportional). No solution = PARALLEL lines (coefficients proportional, constant NOT). It is the same computation and the SAT asks both versions equally often; all that changes is what you do with the constant.',
        desmos:'Grafica 3x-6y=12 y x-2y=4: se dibujan una encima de la otra. Cambiá el 4 por un 5 y verás dos rectas paralelas — ese sería el caso "sin solución".',
        desmosLatex:['3x-6y=12','x-2y=4']
      },
      {
        id:'AL4-03', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Desigualdades en dos variables (verificar un punto)',
        stem:'Which of the following ordered pairs (x, y) is a solution to the inequality y > 3x − 5 ?',
        choices:{A:'(0, 0)', B:'(2, 1)', C:'(1, −3)', D:'(3, 4)'},
        correct:'A',
        expCorrect:'Substitute each point and check. With (0, 0): 3(0) − 5 = −5, and the inequality asks for y > −5. Since 0 > −5, the point works ✓.',
        expWrong:{
          B:'(2, 1): 3(2) − 5 = 1, so you would need y > 1. But y is exactly 1, and the inequality is STRICT (>, not ≥). The point is on the line, not above it.',
          C:'(1, −3): 3(1) − 5 = −2, so you need y > −2. But −3 < −2, so the point is below the line.',
          D:'(3, 4): 3(3) − 5 = 4, so you need y > 4. y is exactly 4: again on the line, not inside the region.'
        },
        tip:'Two options of this kind usually land EXACTLY on the line. With > or < they do not count; with ≥ or ≤ they do. Look at the symbol before you compute anything — it saves you from ruling out the wrong one.',
        desmos:'Escribe y>3x-5 y Desmos sombrea la región. Agregá (0,0), (2,1), (1,-3) y (3,4) y verás cuál cae adentro y cuáles justo en el borde.',
        desmosLatex:['y>3x-5','(0,0)','(2,1)','(3,4)']
      },
      {
        id:'AL4-04', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Rectas paralelas (misma pendiente)',
        stem:'Line k is parallel to the line y = −4x + 7 and passes through the point (2, 1). Which equation represents line k ?',
        choices:{A:'y = −4x + 9', B:'y = −4x + 7', C:'y = (1/4)x + 1/2', D:'y = −4x − 7'},
        correct:'A',
        expCorrect:'Parallel = same slope, so m = −4. Use the point to find b: 1 = −4(2) + b ⇒ 1 = −8 + b ⇒ b = 9. The line is y = −4x + 9. (Check: −4(2) + 9 = 1 ✓.)',
        expWrong:{
          B:'y = −4x + 7 is the ORIGINAL line, not one parallel to it. And it does not pass through (2, 1) either: −4(2) + 7 = −1.',
          C:'y = (1/4)x + 1/2 is the PERPENDICULAR through that point: it uses the sign-flipped reciprocal. It passes through (2, 1), but the question asks for the parallel.',
          D:'y = −4x − 7 has the right slope but it flipped the sign of the original intercept instead of computing it with the point. Check: −4(2) − 7 = −15, not 1.'
        },
        tip:'Parallel: same m. Perpendicular: reciprocal AND flipped sign (−4 → 1/4). The SAT always plants the perpendicular among the options, so underline which one they want before you solve.',
        desmos:'Grafica y=-4x+7, y=-4x+9 y el punto (2,1): las dos rectas nunca se cruzan y la segunda pasa por el punto.',
        desmosLatex:['y=-4x+7','y=-4x+9','(2,1)']
      },
      {
        id:'AL4-05', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Perpendicular lines (negative reciprocal slope)',
        stem:'Line m is perpendicular to the line 2x + 3y = 12 in the xy-plane. What is the slope of line m ?',
        choices:{A:'3/2', B:'−2/3', C:'−3/2', D:'2/3'},
        correct:'A',
        expCorrect:'First get the slope of the given line by solving for y: 3y = −2x + 12 ⇒ y = −(2/3)x + 4, so its slope is −2/3. The perpendicular one is the reciprocal with the sign flipped: flipping −2/3 gives −3/2, and flipping the sign gives 3/2. (Check: (−2/3)(3/2) = −1 ✓, which is the condition for perpendicularity.)',
        expWrong:{
          B:'−2/3 es la pendiente de la recta ORIGINAL, no de la perpendicular. Es el paso intermedio.',
          C:'−3/2 flipped the fraction but forgot to flip the sign. Check it: (−2/3)(−3/2) = +1, and it should give −1.',
          D:'2/3 flipped the sign but did not flip the fraction. (−2/3)(2/3) = −4/9, which is not −1.'
        },
        tip:'The condition is that the product of the slopes is **−1**. It is a one-second check: multiply your answer by the original slope and if it does not give −1, it is wrong. And watch out: the equation comes in general form, so you have to solve for y before reading the slope.',
        desmos:'Grafica 2x+3y=12 y y=1.5x: se cruzan en ángulo recto.',
        desmosLatex:['2x+3y=12','y=1.5x']
      },
      {
        id:'AL4-06', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Modelo lineal a partir de dos condiciones',
        stem:'A taxi service charges a flat fee plus a constant rate per mile. A 4-mile ride costs $13.00 and a 9-mile ride costs $25.50. What is the flat fee, in dollars?',
        choices:{A:'$3.00', B:'$2.50', C:'$10.50', D:'$13.00'},
        correct:'A',
        expCorrect:'Two points, (4, 13.00) and (9, 25.50), define the line. The per-mile rate is the slope: (25.50 − 13.00)/(9 − 4) = 12.50/5 = $2.50 per mile. The fixed charge is the intercept: on the 4-mile trip, 4 × 2.50 = $10.00 went to mileage, so the fixed part is 13.00 − 10.00 = **$3.00**. (Check with the other trip: 3.00 + 9(2.50) = $25.50 ✓.)',
        expWrong:{
          B:'$2.50 is the PER-MILE rate, not the fixed charge. It is the intermediate step; you still have to use it to solve for the fixed part.',
          C:'$10.50 comes from subtracting the per-mile rate only once (13.00 − 2.50). You have to subtract it the 4 times it was charged.',
          D:'$13.00 es el costo total del viaje de 4 millas, no el cargo fijo. Incluye el millaje.'
        },
        tip:'"Fixed charge plus a rate per unit" is always y = mx + b with two given points. Compute the slope first, and only then solve for b using EITHER of the two points. Check with the other point: if both give the same thing, you are right.',
        desmos:'Escribe (4,13) y (9,25.5), grafica y=2.5x+3 y mirá que pase por los dos puntos. El intercepto en y es el cargo fijo.',
        desmosLatex:['(4,13)','(9,25.5)','y=2.5x+3']
      },
      {
        id:'AL4-07', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Valor absoluto lineal (dos soluciones)',
        stem:'If |2x − 7| = 11, what is the sum of all possible values of x ?',
        choices:{A:'7', B:'9', C:'11', D:'3.5'},
        correct:'A',
        expCorrect:'El valor absoluto abre en DOS casos. Caso 1: 2x − 7 = 11 ⇒ 2x = 18 ⇒ x = 9. Caso 2: 2x − 7 = −11 ⇒ 2x = −4 ⇒ x = −2. La suma es 9 + (−2) = **7**. (Comprueba: |2(9) − 7| = |11| = 11 ✓ y |2(−2) − 7| = |−11| = 11 ✓.)',
        expWrong:{
          B:'9 is only the first solution. The equation has two and the question asks for the SUM. Forgetting the negative case is the classic error on this topic.',
          C:'11 comes from adding 9 + 2 instead of 9 + (−2). The second solution is negative: x = −2, not 2.',
          D:'3.5 is the midpoint between the two solutions (the center of symmetry, x = 7/2). It is half the answer: the sum is twice the center.'
        },
        tip:'A shortcut that always works: the two solutions of |ax + b| = c are symmetric about x = −b/a, so their sum is 2(−b/a) without solving anything. Here: 2(7/2) = 7. But if you use it, verify at least one solution by hand.',
        desmos:'Grafica y=abs(2x-7) y y=11: la V corta a la horizontal en x=-2 y x=9.',
        desmosLatex:['y=\\left|2x-7\\right|','y=11']
      },
      {
        id:'AL4-08', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Ecuaciones lineales con fracciones',
        stem:'If x/3 + x/4 = 14, what is the value of x ?',
        choices:{A:'24', B:'98', C:'2', D:'168'},
        correct:'A',
        expCorrect:'Multiply the WHOLE equation by 12, the least common denominator: 12(x/3) + 12(x/4) = 12(14) ⇒ 4x + 3x = 168 ⇒ 7x = 168 ⇒ x = 24. (Check: 24/3 + 24/4 = 8 + 6 = 14 ✓.)',
        expWrong:{
          B:'98 comes from adding the denominators: x/3 + x/4 is NOT x/7. Fractions are added with a common denominator, not by adding the bottoms.',
          C:'2 comes from treating the equation as 7x = 14. The 7 only appears after multiplying by 12, and the other side gets multiplied too.',
          D:'168 es 12 × 14, el paso intermedio. Falta dividir entre 7.'
        },
        tip:'Fractions in an equation: multiply everything by the LCD and they vanish in one step. The error of adding denominators shows up when you try to combine the fractions before solving — you do not need to.',
        desmos:'Grafica y=x/3+x/4 y y=14: se cruzan en x=24.',
        desmosLatex:['y=\\frac{x}{3}+\\frac{x}{4}','y=14']
      },
      {
        id:'AL4-09', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Funciones lineales (interpretar la pendiente en contexto)',
        stem:'The equation C = 0.18m + 45 gives the monthly cost C, in dollars, of a phone plan that includes m minutes of international calling. What does 0.18 represent in this model?',
        choices:{
          A:'The cost, in dollars, of each minute of international calling',
          B:'The monthly cost, in dollars, when no international calls are made',
          C:'The number of minutes of international calling included in the plan',
          D:'The total monthly cost, in dollars, of the plan'},
        correct:'A',
        expCorrect:'The 0.18 multiplies m, so it is what gets added to the cost for EACH minute: $0.18 per minute. It is the slope, and a slope always reads as "how much C changes for every unit of m".',
        expWrong:{
          B:'That is the 45: the cost when m = 0, that is, the plan’s fixed charge. The 0.18 is not a starting value, it is multiplying.',
          C:'The 0.18 is in dollars per minute, not in minutes. On top of that the model charges for every minute: there are no free minutes included.',
          D:'The total cost is C, which depends on how many minutes are used. The 0.18 is only one part of the formula.'
        },
        tip:'In y = mx + b: **m** answers "how much does it change per unit?" and **b** answers "how much was there at the start?". Look at which number is multiplying the variable and the interpretation falls out on its own.',
        desmos:'Grafica y=0.18x+45 y comparalo con y=0.18x+60: la inclinación es la misma y solo cambia dónde arranca.',
        desmosLatex:['y=0.18x+45','y=0.18x+60']
      },
      {
        id:'AL4-10', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Systems by elimination (multiplying one equation)',
        stem:'3x + 4y = 10\n5x + 2y = 12\nThe system of equations above has solution (x, y). What is the value of x ?',
        choices:{A:'2', B:'1', C:'14', D:'7'},
        correct:'A',
        expCorrect:'The y coefficients are 4 and 2: multiply the SECOND equation by 2 to match them. That gives 10x + 4y = 24. Subtract the first: (10x − 3x) + (4y − 4y) = 24 − 10 ⇒ 7x = 14 ⇒ x = 2. (Check: 3(2) + 4y = 10 ⇒ y = 1, and in the second 5(2) + 2(1) = 12 ✓.)',
        expWrong:{
          B:'1 is the value of y, not of x. The system is solved correctly but the other variable was answered.',
          C:'14 es 7x, el resultado de la resta antes de despejar. Falta dividir entre 7.',
          D:'7 is the coefficient left after eliminating (the 7 in 7x), not the value of x.'
        },
        tip:'Choose to eliminate the variable whose coefficients match with the smallest multiplication: here 4 and 2 match by multiplying by 2, while 3 and 5 would need 15. And be careful when subtracting: the signs of ALL the terms change.',
        desmos:'Grafica 3x+4y=10 y 5x+2y=12 y toca la intersección: (2, 1).',
        desmosLatex:['3x+4y=10','5x+2y=12']
      },
      {
        id:'AL4-11', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Linear equations (parentheses on both sides)',
        stem:'If 4(x − 3) = 2(x + 5), what is the value of x? (Grid in your answer.)',
        answer:'11',
        expCorrect:'Distribute on both sides: 4x − 12 = 2x + 10. Gather the x terms on the left and the numbers on the right: 4x − 2x = 10 + 12 ⇒ 2x = 22 ⇒ x = 11. (Check: 4(11 − 3) = 32 and 2(11 + 5) = 32 ✓.)',
        tip:'With parentheses on both sides, distribute both BEFORE moving anything. On an SPR there are no options to expose the error, so plug your answer back into the original equation: if both sides give the same number, you are done.',
        desmos:'Grafica y=4(x-3) y y=2(x+5): se cruzan en x=11.',
        desmosLatex:['y=4(x-3)','y=2(x+5)']
      },
      {
        id:'AL4-12', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas a partir de un enunciado',
        stem:'At a bakery, 2 muffins and 3 scones cost $16, and 4 muffins and 1 scone cost $22. What is the cost, in dollars, of one muffin?',
        choices:{A:'$5', B:'$2', C:'$8', D:'$5.50'},
        correct:'A',
        expCorrect:'Call m the muffin and s the scone: 2m + 3s = 16 and 4m + s = 22. From the second, s = 22 − 4m. Substitute into the first: 2m + 3(22 − 4m) = 16 ⇒ 2m + 66 − 12m = 16 ⇒ −10m = −50 ⇒ m = **5**. (Then s = 22 − 20 = 2. Check: 2(5) + 3(2) = 16 ✓ and 4(5) + 2 = 22 ✓.)',
        expWrong:{
          B:'$2 is the price of the SCONE. The system is solved correctly but the other product was answered — reread what the question asks.',
          C:'$8 comes from dividing $16 by the 2 muffins, ignoring that the total also includes 3 scones.',
          D:'$5.50 comes from dividing $22 by the 4 muffins of the second purchase, ignoring the scone that was paid for too.'
        },
        tip:'Name the variables before you write anything and build one equation per purchase. The two most tempting distractors are always "divide a total by a single quantity" — but each total includes both products.',
        desmos:'Grafica 2x+3y=16 y 4x+y=22 (x = muffin, y = scone): se cruzan en (5, 2).',
        desmosLatex:['2x+3y=16','4x+y=22']
      }
    ]
  });
})();
