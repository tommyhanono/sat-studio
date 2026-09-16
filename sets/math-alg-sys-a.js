/* SAT Studio question set — Math: Algebra — Systems & Inequalities (ASY-01 a ASY-34)
 *
 * Por qué existe: dentro del dominio Algebra (35 % del examen) las dos destrezas
 * oficiales que más se pisan entre sí son "Systems of two linear equations" y
 * "Linear inequalities". El set las trabaja juntas a propósito, en escalera:
 *
 *   · Sistemas (18): sustitución · eliminación (con y sin escalar) · armar el
 *     sistema desde un contexto de dos incógnitas · leer la solución de dos rectas
 *     graficadas · cuántas soluciones y POR QUÉ · el parámetro que deja el sistema
 *     sin solución o con infinitas · verificar un par ordenado.
 *   · Desigualdades (16): el volteo del signo al dividir por negativo · traducir
 *     at least / at most / no more than / fewer than · presupuesto y capacidad ·
 *     dos desigualdades y qué región del plano cumplen · contar enteros en una
 *     compuesta · una con parámetro.
 *
 * Reparto: 28 MC + 6 SPR · 8 Fácil · 14 Media · 12 Difícil (5 de ellas extreme).
 *
 * OJO al escribir aquí:
 *   1. El texto se inyecta con innerHTML: un `<` pegado a una letra se lee como
 *      etiqueta. Todas las desigualdades van con espacio (`x < 5`).
 *   2. El clasificador de destrezas (`skillOf`) lee `skill` + los primeros 160
 *      caracteres del `stem`, y prueba al-sys ANTES que al-ineq. Por eso ninguna
 *      pregunta de desigualdad usa las palabras system / elimination /
 *      substitution / no solution / infinitely many / simultaneous ahí: caería
 *      contada como sistema. Y las de sistemas evitan inequality / at least /
 *      at most / budget / constraint por la misma razón, al revés.
 */
(function(){
  window.SAT_SETS.push({
    id: 'math-alg-sys-a',
    title: 'Algebra — Systems & Inequalities',
    section: 'math',
    level: 'Media',
    description: 'The two Algebra skills that get confused with each other, from warm-up to brutal: solving systems four ways, counting their solutions, and every inequality trap — the flipped sign, the words that hide the symbol, and the limit you must round down to.',
    minutes: 42,
    questions: [

      /* ───────────────── SISTEMAS · Fácil ───────────────── */
      {
        id:'ASY-01', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Systems of two linear equations: substitution when one equation is already solved for y',
        stem:'In the system of equations y = 3x − 4 and 2x + y = 11, what is the value of x ?',
        choices:{A:'5', B:'3', C:'1.4', D:'15'},
        correct:'B',
        expCorrect:'The first equation already gives y, so drop it into the second one: 2x + (3x − 4) = 11. Combine: 5x − 4 = 11, so 5x = 15 and x = 3. (Check: y = 3(3) − 4 = 5, and 2(3) + 5 = 11 ✓.)',
        expWrong:{
          A:'5 is the value of y, not of x. The system was solved correctly and then the wrong variable was reported — read the last line of the question again.',
          C:'1.4 comes from moving the −4 the wrong way: 5x − 4 = 11 becomes 5x = 15, not 5x = 7. A term that is subtracted on the left is added on the right.',
          D:'15 is the value of 5x, one step short. Divide by the 5 that is multiplying x.'
        },
        tip:'When one equation is already solved for a variable, substitution beats elimination every time. Put the whole expression in parentheses so the sign of every term survives the trip.',
        desmos:'Graph y=3x-4 and y=11-2x and tap the crossing point: (3, 5).',
        desmosLatex:['y=3x-4','y=11-2x']
      },
      {
        id:'ASY-02', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Systems of two linear equations: testing whether an ordered pair satisfies both equations',
        stem:'Which ordered pair (x, y) is the solution to the system of equations x + y = 9 and 2x − y = 3 ?',
        choices:{A:'(4, 5)', B:'(5, 4)', C:'(2, 1)', D:'(6, 3)'},
        correct:'A',
        expCorrect:'A solution has to work in BOTH equations. Test (4, 5): 4 + 5 = 9 ✓ and 2(4) − 5 = 8 − 5 = 3 ✓. Both hold, so (4, 5) is the solution. (Adding the two equations confirms it: 3x = 12, x = 4.)',
        expWrong:{
          B:'(5, 4) has the coordinates swapped. It passes the first equation, 5 + 4 = 9, but 2(5) − 4 = 6, not 3. An ordered pair is (x, y), in that order.',
          C:'(2, 1) works only in the second equation: 2(2) − 1 = 3 ✓, but 2 + 1 = 3, not 9. One equation out of two is not enough.',
          D:'(6, 3) works only in the first equation: 6 + 3 = 9 ✓, but 2(6) − 3 = 9, not 3.'
        },
        tip:'When the choices are ordered pairs, testing is faster than solving — but test BOTH equations. Three of the four options are built to pass exactly one of them.',
        desmos:'Graph x+y=9 and 2x-y=3; the single crossing point is (4, 5).',
        desmosLatex:['x+y=9','2x-y=3']
      },
      {
        id:'ASY-03', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Systems of two linear equations: elimination when the y terms are already opposites',
        stem:'In the system of equations 3x + y = 17 and 2x − y = 8, what is the value of x ?',
        choices:{A:'2', B:'1.8', C:'25', D:'5'},
        correct:'D',
        expCorrect:'The y terms are +y and −y, so adding the two equations kills y: (3x + 2x) + (y − y) = 17 + 8, which is 5x = 25, so x = 5. (Check: y = 17 − 3(5) = 2, and 2(5) − 2 = 8 ✓.)',
        expWrong:{
          A:'2 is the value of y. Once x = 5 is found, the question still asks for x.',
          B:'1.8 comes from subtracting the constants instead of adding them: 17 − 8 = 9 gives 5x = 9. You added the left sides, so you must add the right sides too.',
          C:'25 is 5x, the result one step before the end. Divide both sides by 5.'
        },
        tip:'Scan the two equations for a variable whose coefficients are already opposites (+y and −y). Adding then removes it with no scaling at all — this is the cheapest system on the test.',
        desmos:'Graph 3x+y=17 and 2x-y=8; they cross at (5, 2).',
        desmosLatex:['3x+y=17','2x-y=8']
      },
      {
        id:'ASY-04', type:'spr', domain:'Algebra', difficulty:'Fácil',
        skill:'Systems of two linear equations built from a count and a total',
        stem:'At a school bake sale, a scone costs $2 and a muffin costs $5. Mariela buys 9 items in all and pays $27. How many muffins does she buy?',
        answer:'3',
        expCorrect:'Let s be the scones and m the muffins. The count gives s + m = 9; the money gives 2s + 5m = 27. From the first, s = 9 − m. Substitute: 2(9 − m) + 5m = 27, so 18 + 3m = 27, then 3m = 9 and m = 3. (Check: 6 scones at $2 is $12, 3 muffins at $5 is $15, and 12 + 15 = 27 ✓.)',
        tip:'Two-item word problems always give you two different kinds of information: a COUNT (how many things) and a TOTAL (how much money or weight). One equation comes from each. If you only wrote one, you are missing a sentence.',
        desmos:'Graph s+m=9 and 2s+5m=27 with s on the x-axis: the crossing point is (6, 3).',
        desmosLatex:['x+y=9','2x+5y=27']
      },

      /* ───────────────── SISTEMAS · Media ───────────────── */
      {
        id:'ASY-05', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two linear equations: elimination that needs one equation scaled first',
        stem:'In the system of equations 4x + 3y = 25 and 2x − y = 5, what is the value of y ?',
        choices:{A:'4', B:'1', C:'3', D:'−3'},
        correct:'C',
        expCorrect:'Multiply the WHOLE second equation by 3 so the y terms cancel: 6x − 3y = 15. Add it to the first: 10x = 40, so x = 4. Then 2(4) − y = 5 gives y = 3. (Check: 4(4) + 3(3) = 16 + 9 = 25 ✓.)',
        expWrong:{
          A:'4 is the value of x. It is the number you find first, which is exactly why it is the most common wrong answer here.',
          B:'1 comes from scaling only one side: writing 6x − 3y = 5 instead of 6x − 3y = 15. Multiplying an equation by 3 multiplies EVERY term, the constant included.',
          D:'−3 is a sign slip when isolating y: 2x − y = 5 gives y = 2x − 5, not y = 5 − 2x.'
        },
        tip:'Before adding, ask what one equation must be multiplied by so a variable cancels. Then multiply every single term, both sides. Scaling half an equation is the single most expensive mistake in elimination.',
        desmos:'Graph 4x+3y=25 and 2x-y=5; the crossing point is (4, 3).',
        desmosLatex:['4x+3y=25','2x-y=5']
      },
      {
        id:'ASY-06', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two linear equations: explaining why a system has no solution',
        stem:'Consider the system of equations 2x − 6y = 9 and x − 3y = 5. How many solutions does the system have, and why?',
        choices:{
          A:'Exactly one, because the two equations are not identical.',
          B:'None: the lines have the same slope but different intercepts.',
          C:'Infinitely many, because one equation is a multiple of the other.',
          D:'Exactly one, because two different lines always cross somewhere.'
        },
        correct:'B',
        expCorrect:'Divide the first equation by 2: x − 3y = 4.5. The second says x − 3y = 5. The left sides are now identical but the right sides are not, and x − 3y cannot equal 4.5 and 5 at once. In slope form both are y = x/3 − something: same slope 1/3, different intercepts. Two parallel lines never meet, so there is no solution.',
        expWrong:{
          A:'Being different equations is not enough. 2x − 6y = 9 and x − 3y = 4.5 are different equations and they describe the SAME line.',
          C:'Infinitely many would need the right sides to match after scaling too: 4.5 and 5 do not. One equation is not a multiple of the other.',
          D:'Two different lines do not always cross. Parallel lines are different lines with the same slope, and they never meet — that is this system.'
        },
        tip:'Scale one equation so the x and y coefficients match the other. Then: same constant too → infinitely many; different constant → none; cannot be matched at all → exactly one.',
        desmos:'Graph 2x-6y=9 and x-3y=5: two parallel lines, no crossing point anywhere.',
        desmosLatex:['2x-6y=9','x-3y=5']
      },
      {
        id:'ASY-07', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two linear equations: reading the solution from two graphed lines',
        stem:'In the xy-plane, line k passes through (0, 5) and (5, 0), and line m passes through (0, −1) and (2, 1). The two lines are graphed on the same axes. At which point do they intersect?',
        choices:{A:'(3, 2)', B:'(2, 3)', C:'(0, 5)', D:'(5, 0)'},
        correct:'A',
        expCorrect:'Line k: slope = (0 − 5)/(5 − 0) = −1 and y-intercept 5, so y = −x + 5. Line m: slope = (1 − (−1))/(2 − 0) = 1 and y-intercept −1, so y = x − 1. Set them equal: −x + 5 = x − 1, so 6 = 2x and x = 3, then y = 3 − 1 = 2. They meet at (3, 2). (Check in line k: −3 + 5 = 2 ✓.)',
        expWrong:{
          B:'(2, 3) has the coordinates swapped. x = 3 came out of the equation; y is what you get after plugging it back in.',
          C:'(0, 5) is where line k crosses the y-axis, not where the two lines meet. An intercept belongs to one line only.',
          D:'(5, 0) is where line k crosses the x-axis. The intersection point has to satisfy BOTH equations, and 0 ≠ 5 − 1.'
        },
        tip:'Two points give you a line: slope first, then the y-intercept. The solution of the system is the one point that sits on both lines, never an intercept of just one of them.',
        desmos:'Graph y=-x+5 and y=x-1 and tap the crossing point: (3, 2).',
        desmosLatex:['y=-x+5','y=x-1']
      },
      {
        id:'ASY-08', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two linear equations built from a two-item order',
        stem:'Two identical crates of mangoes and three identical crates of papayas weigh 74 kilograms together. One crate of mangoes and one crate of papayas weigh 28 kilograms together. How many kilograms does one crate of papayas weigh?',
        answer:'18',
        expCorrect:'Let m and p be the weights of one crate of each. The two sentences give 2m + 3p = 74 and m + p = 28. From the second, m = 28 − p. Substitute: 2(28 − p) + 3p = 74, so 56 + p = 74 and p = 18. (Check: m = 10, and 2(10) + 3(18) = 20 + 54 = 74 ✓.)',
        tip:'Name the two unknowns before you write anything else. Each sentence that mentions both items becomes one equation, and two such sentences are exactly what you need.',
        desmos:'Graph 2x+3y=74 and x+y=28 with x = mangoes: the crossing point is (10, 18).',
        desmosLatex:['2x+3y=74','x+y=28']
      },
      {
        id:'ASY-09', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two linear equations: the constant that gives infinitely many solutions',
        stem:'In the system of equations 6x + 4y = 14 and 3x + 2y = c, c is a constant. For which value of c does the system have infinitely many solutions?',
        choices:{A:'14', B:'28', C:'3.5', D:'7'},
        correct:'D',
        expCorrect:'Infinitely many solutions means the two equations describe the same line. Divide the first by 2: 3x + 2y = 7. That is exactly the second equation when c = 7. (Check: every point on 3x + 2y = 7, such as (1, 2), also satisfies 6x + 4y = 14 ✓.)',
        expWrong:{
          A:'14 copies the constant without scaling. The left side was cut in half, so the right side has to be cut in half too.',
          B:'28 multiplies by 2 instead of dividing. You are going from 6x + 4y down to 3x + 2y, so every number gets smaller, not bigger.',
          C:'3.5 divides 14 by 4, the coefficient of y. The scaling factor is 6 ÷ 3 = 2 (the same as 4 ÷ 2), not 4.'
        },
        tip:'One scaling factor has to work for every term at once. Find it from the x coefficients, confirm it on the y coefficients, then apply it to the constant — that last number is what the parameter has to equal.',
        desmos:'Graph 6x+4y=14 and 3x+2y=7: one line sits exactly on top of the other.',
        desmosLatex:['6x+4y=14','3x+2y=7']
      },
      {
        id:'ASY-10', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two linear equations: substitution when the answer is a combination',
        stem:'In the system of equations x = 2y + 1 and 3x + 4y = 23, what is the value of x + y ?',
        choices:{A:'5', B:'2', C:'7', D:'3'},
        correct:'C',
        expCorrect:'Substitute x = 2y + 1 into the second equation: 3(2y + 1) + 4y = 23, which is 6y + 3 + 4y = 23, so 10y = 20 and y = 2. Then x = 2(2) + 1 = 5, and x + y = 5 + 2 = 7. (Check: 3(5) + 4(2) = 15 + 8 = 23 ✓.)',
        expWrong:{
          A:'5 is x alone. The question asks for the SUM of the two coordinates, so you still owe one addition.',
          B:'2 is y alone, the first value that comes out of the substitution.',
          D:'3 is x − y. The question asks for x + y; read the operation, not just the letters.'
        },
        tip:'When a system question ends in x + y, xy, or y − x, solve the system completely and then answer the actual question. The values of x and y are always sitting in the choices, waiting for whoever stops early.',
        desmos:'Graph x=2y+1 and 3x+4y=23; the crossing point is (5, 2), so x+y = 7.',
        desmosLatex:['x=2y+1','3x+4y=23']
      },
      {
        id:'ASY-11', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two linear equations: elimination by subtracting when one variable matches',
        stem:'In the system of equations 5x + 2y = 31 and 3x + 2y = 21, what is the value of y ?',
        choices:{A:'3', B:'5', C:'6', D:'−3'},
        correct:'A',
        expCorrect:'Both equations have +2y, so SUBTRACT the second from the first: (5x − 3x) + (2y − 2y) = 31 − 21, which is 2x = 10 and x = 5. Then 3(5) + 2y = 21 gives 2y = 6 and y = 3. (Check: 5(5) + 2(3) = 25 + 6 = 31 ✓.)',
        expWrong:{
          B:'5 is the value of x, the number elimination hands you first.',
          C:'6 is the value of 2y. One division short of the answer.',
          D:'−3 comes from subtracting in the wrong order: 2y = 21 − 15 = 6, not 15 − 21 = −6. Keep the equation as written and move the 15 across.'
        },
        tip:'Matching coefficients (+2y and +2y) call for subtraction; opposite coefficients (+2y and −2y) call for addition. Getting that backwards is what produces the negative-looking answer.',
        desmos:'Graph 5x+2y=31 and 3x+2y=21; the crossing point is (5, 3).',
        desmosLatex:['5x+2y=31','3x+2y=21']
      },
      {
        id:'ASY-12', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two linear equations: how many solutions when one equation is a multiple of the other',
        stem:'Consider the system of equations 4x − 10y = 6 and −6x + 15y = −9. How many solutions does the system have, and why?',
        choices:{
          A:'Exactly one, because the coefficients are not identical.',
          B:'Infinitely many: the second equation is −1.5 times the first.',
          C:'None, because the two lines are parallel and never meet.',
          D:'Exactly one, at the point where the two lines cross the x-axis.'
        },
        correct:'B',
        expCorrect:'Multiply the first equation by −1.5: 4(−1.5) = −6, (−10)(−1.5) = 15, and 6(−1.5) = −9. That produces −6x + 15y = −9, which is the second equation exactly. One line, written twice: every point on it solves the system, so there are infinitely many solutions.',
        expWrong:{
          A:'Different-looking coefficients prove nothing. 4x − 10y = 6 and −6x + 15y = −9 look different and are the same line.',
          C:'Parallel would mean the left sides match after scaling but the constants do NOT. Here the constant matches too (−9), so the lines coincide instead of running alongside each other.',
          D:'The two lines are the same line, so they share every point, not one. And x-intercepts are not where a system is solved.'
        },
        tip:'Test the multiple on all three numbers, constant included. Match on the variables only → parallel, no solution. Match on all three → same line, infinitely many.',
        desmos:'Graph 4x-10y=6 and -6x+15y=-9: you only ever see one line, because the second is drawn on top of the first.',
        desmosLatex:['4x-10y=6','-6x+15y=-9']
      },

      /* ───────────────── SISTEMAS · Difícil ───────────────── */
      {
        id:'ASY-13', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Systems of two linear equations: the constant that leaves the system with no solution',
        stem:'In the system of equations 2x − 3y = 7 and kx + 9y = 4, k is a constant. For which value of k does the system have no solution?',
        choices:{A:'6', B:'−3', C:'3', D:'−6'},
        correct:'D',
        expCorrect:'No solution means parallel lines: same left side after scaling, different constant. To turn −3y into +9y you multiply the first equation by −3, which gives −6x + 9y = −21. So the left sides match when k = −6, and the constants (−21 and 4) do not match, which is exactly what parallel requires. (If the second equation had been −6x + 9y = −21 it would have been the same line instead.)',
        expWrong:{
          A:'6 comes from scaling by +3. That turns −3y into −9y, not +9y — the sign of the factor matters as much as its size.',
          B:'−3 is the scaling factor itself, and also the coefficient of y in the first equation. It is a number you used on the way, not the answer.',
          C:'3 divides 9 by 3 and keeps the sign positive. The y coefficients go from −3 to +9, so the factor has to be negative.'
        },
        tip:'Get the factor from the variable whose coefficients you can see completely — here the y terms, −3 and 9 — and only then apply it to the unknown coefficient. Working from the parameter side leaves you guessing at the sign.',
        desmos:'Graph 2x-3y=7 and -6x+9y=4: two parallel lines. Change the 4 to -21 and they become one line.',
        desmosLatex:['2x-3y=7','-6x+9y=4']
      },
      {
        id:'ASY-14', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Systems of two linear equations: the difference between the two unknowns',
        stem:'A community pool charges one price for an adult pass and another for a child pass. One family buys 3 adult passes and 4 child passes for $61. Another family buys 2 adult passes and 5 child passes for $57. How many more dollars does an adult pass cost than a child pass?',
        choices:{A:'4', B:'11', C:'18', D:'7'},
        correct:'A',
        expCorrect:'Let a and c be the two prices: 3a + 4c = 61 and 2a + 5c = 57. Multiply the first by 2 and the second by 3 to match the a terms: 6a + 8c = 122 and 6a + 15c = 171. Subtract: 7c = 49, so c = 7, and then 3a = 61 − 28 = 33 gives a = 11. The question asks for the difference: 11 − 7 = 4. (Check: 2(11) + 5(7) = 22 + 35 = 57 ✓.)',
        expWrong:{
          B:'11 is the adult price. It is the second number you calculate, and the question asks how much MORE an adult pass costs.',
          C:'18 is a + c. The words "how many more" call for subtraction, not a total.',
          D:'7 is the child price, the first value elimination produces here.'
        },
        tip:'Underline what the last sentence asks for BEFORE you start solving. On hard system questions the two prices are almost always among the choices, so finding them correctly is not the same as being done.',
        desmos:'Graph 3x+4y=61 and 2x+5y=57 with x = adult price: the crossing point is (11, 7).',
        desmosLatex:['3x+4y=61','2x+5y=57']
      },
      {
        id:'ASY-15', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Systems of two linear equations: elimination when both equations must be scaled',
        stem:'At a print shop, 4 posters and 3 banners cost $149, and 6 posters and 5 banners cost $237. What is the cost, in dollars, of one banner?',
        answer:'27',
        expCorrect:'Let p and b be the two prices: 4p + 3b = 149 and 6p + 5b = 237. Neither variable cancels on its own, so scale both: multiply the first by 3 (12p + 9b = 447) and the second by 2 (12p + 10b = 474). Subtract: b = 27. (Then 4p = 149 − 81 = 68, so p = 17, and 6(17) + 5(27) = 102 + 135 = 237 ✓.)',
        tip:'When no coefficient divides into the other, scale BOTH equations to the least common multiple of the two coefficients — here 12 for the posters. It is one extra line of work and it removes all the fractions.',
        desmos:'Graph 4x+3y=149 and 6x+5y=237 with x = poster price: the crossing point is (17, 27).',
        desmosLatex:['4x+3y=149','6x+5y=237']
      },
      {
        id:'ASY-16', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Systems of two linear equations: the parameter, plus what happens for every other value',
        stem:'In the system of equations 4x + 3y = 15 and 8x + 6y = 3c, c is a constant. For which value of c does the system have infinitely many solutions, and how many solutions does it have for every other value of c ?',
        choices:{
          A:'c = 5, and for any other value of c there is exactly one solution.',
          B:'c = 30, and for any other value of c there is no solution at all.',
          C:'c = 10, and for any other value of c there is no solution at all.',
          D:'c = 10, and for any other value of c there is exactly one solution.'
        },
        correct:'C',
        expCorrect:'Double the first equation: 8x + 6y = 30. The left side already matches the second equation, so everything depends on the constant. Infinitely many needs 3c = 30, that is c = 10. For any other c the left sides still match while the constants differ, which is the definition of parallel lines — so every other value of c gives no solution at all. (Check c = 10: 8x + 6y = 30, the doubled first equation ✓.)',
        expWrong:{
          A:'c = 5 comes from matching 3c to 15 without doubling the first equation. And the second half is wrong for a deeper reason: once the left sides are proportional, the lines can never cross at exactly one point.',
          B:'c = 30 stops one step early: 3c = 30 is the condition, so c is 10. The second half of this option is right, which is what makes it tempting.',
          D:'The value is right but the reasoning is not. When two lines have the same slope, changing only the constant slides one line off the other — it never produces a single crossing point.'
        },
        tip:'Once the left sides of a system are proportional, "exactly one solution" is off the table forever. The constant decides between the only two outcomes left: identical (infinitely many) or parallel (none).',
        desmos:'Graph 4x+3y=15 and 8x+6y=30 (c=10): one line. Change 30 to 24 and watch it slide off into a parallel line.',
        desmosLatex:['4x+3y=15','8x+6y=30']
      },
      {
        id:'ASY-17', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Systems of two linear equations: evaluating an expression at the solution',
        stem:'The solution to the system of equations 7x + 5y = 41 and 3x − 2y = 1 is the ordered pair (x, y). What is the value of 4x + 3y ?',
        choices:{A:'25', B:'24', C:'40', D:'7'},
        correct:'B',
        expCorrect:'Eliminate y: multiply the first by 2 (14x + 10y = 82) and the second by 5 (15x − 10y = 5), then add: 29x = 87, so x = 3. Back-substitute: 3(3) − 2y = 1 gives 2y = 8 and y = 4. Now evaluate what was asked: 4(3) + 3(4) = 12 + 12 = 24. (Check the solution first: 7(3) + 5(4) = 21 + 20 = 41 ✓.)',
        expWrong:{
          A:'25 is 4y + 3x — the solution was found correctly and then the coefficients were attached to the wrong variables. x = 3 and y = 4 are easy to swap because they are consecutive.',
          C:'40 comes from subtracting the original equations instead of solving: (7x + 5y) − (3x − 2y) = 4x + 7y = 40. That is 4x + 7y, not 4x + 3y — a shortcut that only works when the combination you need really is a difference of the two equations.',
          D:'7 is x + y. It is the right solution combined with the wrong expression.'
        },
        tip:'When a question asks for an expression instead of a variable, first check whether adding or subtracting the equations produces it directly. If it does not, solve fully, write x and y down, and only then evaluate.',
        desmos:'Graph 7x+5y=41 and 3x-2y=1; the crossing point is (3, 4), so 4x+3y = 24.',
        desmosLatex:['7x+5y=41','3x-2y=1']
      },
      {
        id:'ASY-18', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Systems of two linear equations with a unit trap (hours asked in minutes)',
        stem:'A tour boat runs short trips and long trips, each always the same length. On Saturday it made 5 short trips and 2 long trips and was out on the water for 9 hours in total. On Sunday it made 3 short trips and 4 long trips, for 11 hours in total. How many MINUTES does one long trip take?',
        choices:{A:'2', B:'60', C:'180', D:'120'},
        correct:'D',
        expCorrect:'Let s and L be the lengths in hours: 5s + 2L = 9 and 3s + 4L = 11. Double the first: 10s + 4L = 18, then subtract the second: 7s = 7, so s = 1. Back-substitute: 5(1) + 2L = 9 gives 2L = 4 and L = 2 hours. The question asks for minutes: 2 × 60 = 120. (Check: 3(1) + 4(2) = 11 ✓.)',
        expWrong:{
          A:'2 is the long trip in HOURS. The system was solved perfectly and the last instruction — "how many MINUTES" — was skipped.',
          B:'60 converts the wrong trip: s = 1 hour is the SHORT trip, which is 60 minutes.',
          C:'180 is s + L = 3 hours converted to minutes. That is the two trips added together, not one long trip.'
        },
        tip:'When a question capitalizes or changes the unit, write the conversion on your scratch paper before solving. Every one of these questions keeps the unconverted value among the choices.',
        desmos:'Graph 5x+2y=9 and 3x+4y=11 with x = short trip in hours: the crossing point is (1, 2), and 2 hours is 120 minutes.',
        desmosLatex:['5x+2y=9','3x+4y=11']
      },

      /* ───────────────── DESIGUALDADES · Fácil ───────────────── */
      {
        id:'ASY-19', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear inequalities: one step, dividing by a positive number',
        stem:'If 7x ≥ 56, what is the least possible value of x ?',
        choices:{A:'8', B:'392', C:'49', D:'−8'},
        correct:'A',
        expCorrect:'Divide both sides by 7: x ≥ 8. Since x can be 8 or anything larger, the least possible value is 8. (Check: 7(8) = 56, and 56 ≥ 56 is true, so 8 itself is allowed.)',
        expWrong:{
          B:'392 is 7 × 56. The 7 is multiplying x, so it is removed by dividing, not by multiplying again.',
          C:'49 is 56 − 7. Subtraction undoes addition; here the 7 and the x are multiplied.',
          D:'−8 flips the sign of the answer for no reason. Nothing in 7x ≥ 56 is negative, and dividing by a POSITIVE number changes nothing about the inequality.'
        },
        tip:'"At least" and "≥" both include the boundary, so the least possible value is the boundary itself, not the next number up. Dividing by a positive number never flips anything.',
        desmos:'Graph y=7x and y=56; to the right of x = 8 the line 7x sits at or above 56.',
        desmosLatex:['y=7x','y=56']
      },
      {
        id:'ASY-20', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear inequalities: dividing by a negative flips the sign',
        stem:'If −4x > 20, which of the following gives all the possible values of x ?',
        choices:{A:'x > −5', B:'x < 5', C:'x < −5', D:'x > 5'},
        correct:'C',
        expCorrect:'Divide both sides by −4. Dividing by a negative number reverses the direction of the inequality, so > becomes < : x < 20/(−4), that is x < −5. (Check with x = −6: −4(−6) = 24, and 24 > 20 ✓. Check with x = −4: −4(−4) = 16, and 16 > 20 is false ✓.)',
        expWrong:{
          A:'x > −5 divides by −4 correctly but leaves the sign pointing the same way. Test x = 0: −4(0) = 0, and 0 > 20 is false, so 0 cannot be a solution — yet this option includes it.',
          B:'x < 5 flips the sign but drops the minus on the 5. Two negatives were used: one to flip the direction, one on the value. Both survive.',
          D:'x > 5 changes neither. Test x = 6: −4(6) = −24, and −24 > 20 is false.'
        },
        tip:'Multiply or divide an inequality by a negative and the sign flips — every time, no exceptions. Then test one number from your answer in the ORIGINAL inequality: it costs five seconds and catches the flip.',
        desmos:'Graph y=-4x and y=20; the line -4x is above 20 only to the left of x = -5.',
        desmosLatex:['y=-4x','y=20']
      },
      {
        id:'ASY-21', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear inequalities: turning "at most" into the right symbol',
        stem:'A delivery van can carry at most 900 kilograms. It is already carrying 240 kilograms of crates, and each box it picks up weighs 15 kilograms. Which of the following gives all possible numbers b of boxes the van can still carry?',
        choices:{A:'15b + 240 ≥ 900', B:'15b + 240 ≤ 900', C:'15b + 240 < 900', D:'15b − 240 ≤ 900'},
        correct:'B',
        expCorrect:'The boxes weigh 15b kilograms and the crates add a fixed 240, so the load on board is 15b + 240. "At most 900" means the load can reach 900 but not pass it, which is ≤ 900. So 15b + 240 ≤ 900.',
        expWrong:{
          A:'≥ says the van must carry at least 900 kilograms, the opposite of a weight limit. A limit is a ceiling, not a floor.',
          C:'< 900 excludes exactly 900. "At most" includes the limit itself — a van at exactly 900 kilograms is still legal.',
          D:'Subtracting the 240 treats the crates as if they made room instead of taking it. Weight already on board adds to the total.'
        },
        tip:'Translate the words before the numbers: at most / no more than → ≤ · at least / no less than → ≥ · fewer than / under → < · more than / over → >. Only "fewer than" and "more than" leave the boundary out.',
        desmos:'Graph y=15x+240 and y=900; the boxes that work are where the first line is at or below the second.',
        desmosLatex:['y=15x+240','y=900']
      },
      {
        id:'ASY-22', type:'spr', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear inequalities: the greatest number that fits under a capacity',
        stem:'A freight elevator can hold at most 1,500 pounds. Two workers whose combined weight is 340 pounds ride with identical boxes weighing 58 pounds each. What is the greatest number of boxes they can take in one trip?',
        answer:'20',
        expCorrect:'Let b be the boxes: 58b + 340 ≤ 1500. Subtract the workers: 58b ≤ 1160. Divide by 58: b ≤ 20. So 20 boxes is the greatest number. (Check: 58(20) = 1160, and 1160 + 340 = 1500 exactly — allowed, because "at most" includes the limit. A 21st box would make 1558.)',
        tip:'Strip out every fixed weight first, then divide by the per-item weight. When the division comes out exact, "at most" lets you keep that whole number; only "less than" would force you down one.',
        desmos:'Graph y=58x+340 and y=1500; they meet exactly at x = 20.',
        desmosLatex:['y=58x+340','y=1500']
      },

      /* ───────────────── DESIGUALDADES · Media ───────────────── */
      {
        id:'ASY-23', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear inequalities: two steps with a negative coefficient',
        stem:'If 9 − 2x ≤ 17, which of the following gives all possible values of x ?',
        choices:{A:'x ≤ −4', B:'x ≥ 4', C:'x ≥ −13', D:'x ≥ −4'},
        correct:'D',
        expCorrect:'Subtract 9 from both sides: −2x ≤ 8. Now divide by −2, which reverses the sign: x ≥ −4. (Check with x = 0: 9 − 0 = 9, and 9 ≤ 17 ✓. Check with x = −5: 9 + 10 = 19, and 19 ≤ 17 is false ✓.)',
        expWrong:{
          A:'x ≤ −4 keeps the sign pointing the same way after dividing by −2. Test x = 0, which this option excludes: 9 ≤ 17 is true, so 0 must be a solution.',
          B:'x ≥ 4 flips the sign but loses the minus: 8 ÷ (−2) is −4, not 4.',
          C:'x ≥ −13 comes from moving the 9 across as +9 instead of −9: −2x ≤ 26. A term that is added on the left is subtracted on the right.'
        },
        tip:'Do the adding and subtracting first and the dividing last. That way there is exactly one moment where a flip can happen, and you know which moment it is.',
        desmos:'Graph y=9-2x and y=17; the first is at or below the second for every x to the right of -4.',
        desmosLatex:['y=9-2x','y=17']
      },
      {
        id:'ASY-24', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear inequalities: a budget with a fixed cost, rounded the right way',
        stem:'A student club has $480 for a field trip. The bus costs a flat $150 and each boxed lunch costs $9. What is the greatest number of boxed lunches the club can pay for?',
        choices:{A:'36', B:'37', C:'53', D:'70'},
        correct:'A',
        expCorrect:'Let L be the lunches: 9L + 150 ≤ 480. Subtract the bus: 9L ≤ 330. Divide by 9: L ≤ 36.67. Lunches come whole, and 37 would cost 9(37) + 150 = $483, over budget, so the answer is 36. (Check: 9(36) + 150 = 324 + 150 = $474 ≤ $480 ✓.)',
        expWrong:{
          B:'37 rounds 36.67 up. Rounding is for estimates; a budget is a ceiling, so the count always goes DOWN to the whole number below.',
          C:'53 is 480 ÷ 9, which spends the bus money on lunches. The $150 is gone before the first lunch is bought.',
          D:'70 is 630 ÷ 9 — the bus was added to the budget instead of subtracted from it.'
        },
        tip:'Subtract every fixed cost first, divide second, and then ask whether the thing you are counting can be a fraction. If it cannot, round DOWN no matter what the decimal says.',
        desmos:'Graph y=9x+150 and y=480; they cross near x = 36.7, and only whole numbers up to 36 stay under the line.',
        desmosLatex:['y=9x+150','y=480']
      },
      {
        id:'ASY-25', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear inequalities: a compound condition from words (at least, fewer than)',
        stem:'At an animal shelter, the number of puppies p on a given day is at least 6 and fewer than 15. Which of the following represents all the possible values of p ?',
        choices:{A:'6 < p < 15', B:'6 ≤ p ≤ 15', C:'6 ≤ p < 15', D:'6 < p ≤ 15'},
        correct:'C',
        expCorrect:'"At least 6" means 6 is allowed, so the lower end takes ≤ : 6 ≤ p. "Fewer than 15" means 15 is not allowed, so the upper end takes the strict symbol: p < 15. Together: 6 ≤ p < 15, which is every whole number from 6 through 14.',
        expWrong:{
          A:'This excludes 6, but "at least 6" is precisely the phrase that lets p equal 6.',
          B:'This includes 15, and "fewer than 15" rules 15 out. It is the only value the two options disagree about, so it is the whole question.',
          D:'Both endpoints are backwards: 6 is excluded when it should be included, and 15 is included when it should be excluded.'
        },
        tip:'Handle each end of a compound inequality as its own translation. The words that INCLUDE the boundary are at least, at most, no more than, no fewer than, minimum and maximum; the words that exclude it are fewer than, more than, under, over, above and below.',
        desmos:'Graph 6 ≤ x ≤ 14 on a number line, or type 6<=y and y<15 to shade the band that works.',
        desmosLatex:['y\\ge 6','y<15']
      },
      {
        id:'ASY-26', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Linear inequalities: counting the integers that satisfy a compound condition',
        stem:'How many integer values of n satisfy both 3n + 5 > −7 and 2n − 1 ≤ 13 ?',
        answer:'11',
        expCorrect:'Solve each one. First: 3n > −12, so n > −4 — and since n is an integer, the smallest allowed value is −3, not −4. Second: 2n ≤ 14, so n ≤ 7, and 7 is allowed. The integers from −3 through 7 are −3, −2, −1, 0, 1, 2, 3, 4, 5, 6, 7. Count them: 7 − (−3) + 1 = 11.',
        tip:'Counting integers from a to b inclusive is b − a + 1, and forgetting the +1 is the classic off-by-one. Decide separately whether each endpoint is in: a strict > at the bottom pushes the first integer one step up.',
        desmos:'Graph y=3x+5, y=-7, y=2x-1 and y=13; the allowed band runs from just above x = -4 to x = 7.',
        desmosLatex:['y=3x+5','y=-7','y=2x-1','y=13']
      },
      {
        id:'ASY-27', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear inequalities in two variables: which region of the plane works',
        stem:'In the xy-plane, a shaded region contains every point that satisfies both y > 2x − 3 and y ≤ −x + 6. Which of the following points lies in that region?',
        choices:{A:'(0, 7)', B:'(0, 0)', C:'(3, 1)', D:'(5, 2)'},
        correct:'B',
        expCorrect:'Test the point in both inequalities. At (0, 0): the first needs 0 > 2(0) − 3, that is 0 > −3 ✓; the second needs 0 ≤ −0 + 6, that is 0 ≤ 6 ✓. Both hold, so (0, 0) is in the region.',
        expWrong:{
          A:'(0, 7) satisfies the first (7 > −3) but fails the second: −0 + 6 = 6, and 7 ≤ 6 is false. It sits above the second boundary line.',
          C:'(3, 1) satisfies the second (1 ≤ 3) but fails the first: 2(3) − 3 = 3, and 1 > 3 is false. It sits below the first boundary line.',
          D:'(5, 2) fails both: 2(5) − 3 = 7 and 2 > 7 is false, while −5 + 6 = 1 and 2 ≤ 1 is false.'
        },
        tip:'With two inequalities, plug the point into both and stop at the first failure. The overlap of the two shaded half-planes is the only region that counts, and the wrong options are built to satisfy exactly one of them.',
        desmos:'Type y>2x-3 and y<=-x+6; the doubly shaded wedge is the region, and (0, 0) sits inside it.',
        desmosLatex:['y>2x-3','y\\le -x+6']
      },
      {
        id:'ASY-28', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear inequalities: clearing a fraction before solving',
        stem:'If (x/3) + 4 > 10, which of the following gives all possible values of x ?',
        choices:{A:'x > 6', B:'x > 26', C:'x < 18', D:'x > 18'},
        correct:'D',
        expCorrect:'Subtract 4 from both sides: x/3 > 6. Multiply both sides by 3 — a positive number, so nothing flips: x > 18. (Check with x = 21: 21/3 + 4 = 7 + 4 = 11, and 11 > 10 ✓. Check with x = 18: 6 + 4 = 10, and 10 > 10 is false, so 18 itself is correctly excluded ✓.)',
        expWrong:{
          A:'x > 6 stops at x/3 > 6 and reads off the 6. The variable is still divided by 3 at that point.',
          B:'x > 26 multiplies by 3 but skips one term: x + 4 > 30 instead of x + 12 > 30. Multiplying an inequality by 3 multiplies EVERY term.',
          C:'x < 18 flips the sign although nothing was multiplied or divided by a negative. Adding, subtracting, and multiplying by positives all leave the direction alone.'
        },
        tip:'Either clear the fraction first (multiply everything by the denominator) or isolate the fraction first — both work, but mixing them halfway is what drops a term. Pick one and finish it.',
        desmos:'Graph y=x/3+4 and y=10; the first rises above the second to the right of x = 18.',
        desmosLatex:['y=x/3+4','y=10']
      },

      /* ───────────────── DESIGUALDADES · Difícil ───────────────── */
      {
        id:'ASY-29', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear inequalities: recovering the constant from the solution set',
        stem:'The solutions to the inequality 5 − ax ≥ 23, where a is a constant, are all values of x such that x ≤ −3. What is the value of a ?',
        choices:{A:'6', B:'−6', C:'18', D:'−3'},
        correct:'A',
        expCorrect:'Subtract 5: −ax ≥ 18. The answer has the form x ≤ (a number), so the sign flipped, which means the coefficient −a is negative and a is positive. Dividing by −a gives x ≤ 18/(−a), and that boundary must be −3: 18/(−a) = −3, so −a = −6 and a = 6. (Check: 5 − 6x ≥ 23 gives −6x ≥ 18, then x ≤ −3 ✓.)',
        expWrong:{
          B:'−6 makes the coefficient of x positive: 5 + 6x ≥ 23 gives x ≥ 3, which points the wrong way and has the wrong boundary.',
          C:'18 is the constant left after subtracting 5, not the coefficient. It is the number that gets divided, not the divisor.',
          D:'−3 is the boundary of the solution set, copied straight out of the question. It is what the answer must produce, not the answer.'
        },
        tip:'Read the direction of the given solution set first. If the inequality started with ≥ and the solution shows ≤, a flip happened, so whatever divided x was negative — that alone kills half the choices.',
        desmos:'Graph y=5-6x and y=23; they meet at x = -3, and 5-6x is above 23 to the left of it.',
        desmosLatex:['y=5-6x','y=23']
      },
      {
        id:'ASY-30', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear inequalities: the greatest integer with the variable on both sides',
        stem:'What is the greatest integer value of w that satisfies 11 − 4w > 3w − 17 ?',
        choices:{A:'4', B:'5', C:'3', D:'7'},
        correct:'C',
        expCorrect:'Collect the w terms on the side that keeps them positive: add 4w to both sides and add 17 to both sides, giving 28 > 7w. Divide by 7: 4 > w, that is w < 4. The greatest INTEGER below 4 is 3. (Check w = 3: 11 − 12 = −1 and 9 − 17 = −8, and −1 > −8 ✓. Check w = 4: −5 > −5 is false ✓.)',
        expWrong:{
          A:'4 is the boundary, and the symbol is a strict > : w = 4 makes both sides equal −5, so it is not a solution. Only ≥ would let the boundary in.',
          B:'5 comes from moving the w terms to the left and not flipping: −7w > −28 becomes w < 4, not w > 4. Dividing by −7 reverses the sign.',
          D:'7 divides 28 by 4 instead of by 7. The coefficient sitting next to w after collecting is 7.'
        },
        tip:'Move the variable to whichever side makes its coefficient positive — then no flip can happen at all. When the answer must be an integer and the symbol is strict, the boundary is never the answer.',
        desmos:'Graph y=11-4x and y=3x-17; the first is above the second for every x to the left of 4.',
        desmosLatex:['y=11-4x','y=3x-17']
      },
      {
        id:'ASY-31', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear inequalities: a fixed fee plus a rate, with a whole-number answer',
        stem:'A cargo van rental costs $65 plus $0.32 per kilometer driven. Sofia has $200 to spend on the rental. What is the greatest whole number of kilometers she can drive?',
        answer:'421',
        expCorrect:'Let k be the kilometers: 0.32k + 65 ≤ 200. Subtract the fee: 0.32k ≤ 135. Divide by 0.32: k ≤ 421.875. Kilometers are counted in whole numbers here, so round DOWN to 421. (Check: 421(0.32) = $134.72, and 134.72 + 65 = $199.72 ≤ $200 ✓. At 422 km the cost is $200.04, which is over.)',
        tip:'Fixed fee out first, then divide by the rate, then round down. Rounding 421.875 up to 422 feels natural and is wrong every time: the decimal means she can afford part of a kilometer, not a whole extra one.',
        desmos:'Graph y=0.32x+65 and y=200; they cross at x = 421.875, so the last whole kilometer under the line is 421.',
        desmosLatex:['y=0.32x+65','y=200']
      },
      {
        id:'ASY-32', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear inequalities: the greatest integer that keeps a point inside a region',
        stem:'In the xy-plane, the point (2, k) satisfies both y ≥ 3x − 8 and y < −2x + 9. What is the greatest integer value of k ?',
        choices:{A:'5', B:'4', C:'−2', D:'12'},
        correct:'B',
        expCorrect:'Put x = 2 into each inequality. First: k ≥ 3(2) − 8 = −2. Second: k < −2(2) + 9 = 5. So −2 ≤ k < 5, and because the upper end is strict, the greatest integer is 4. (Check k = 4: 4 ≥ −2 ✓ and 4 < 5 ✓. Check k = 5: 5 < 5 is false ✓.)',
        expWrong:{
          A:'5 treats the strict < as if it were ≤. The point (2, 5) lies exactly ON the boundary line y = −2x + 9, and a strict inequality leaves its own boundary out.',
          C:'−2 is the LEAST value k can take, from the first inequality. The question asks for the greatest.',
          D:'12 comes from dropping the minus sign in −2x: 2(2) + 9 = 13 instead of 5, which would allow k up to 12. Substitute the sign along with the number.'
        },
        tip:'Substituting the known coordinate turns a region question into two plain bounds on one letter. Then the only decision left is whether each bound is open or closed — and a strict symbol always costs you the boundary value.',
        desmos:'Type y>=3x-8 and y<-2x+9, then look at the vertical line x=2: the shaded part runs from y = -2 up to (but not including) y = 5.',
        desmosLatex:['y\\ge 3x-8','y<-2x+9','x=2']
      },
      {
        id:'ASY-33', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear inequalities: a parameter recovered from a flipped solution set',
        stem:'In the inequality (c − 5)x > 12, c is a constant. The solutions are all values of x such that x < −4. What is the value of c ?',
        choices:{A:'8', B:'−3', C:'1', D:'2'},
        correct:'D',
        expCorrect:'The original symbol is > and the solution shows < , so the inequality flipped, which means c − 5 is negative. Divide: x < 12/(c − 5), and that boundary has to be −4. So 12/(c − 5) = −4, giving c − 5 = 12/(−4) = −3, and c = −3 + 5 = 2. (Check: (2 − 5)x > 12 is −3x > 12, and dividing by −3 flips it to x < −4 ✓.)',
        expWrong:{
          A:'8 gives c − 5 = 3, a positive coefficient: 3x > 12 becomes x > 4. Nothing flips and both the direction and the boundary come out wrong.',
          B:'−3 is the value of c − 5, one step short. The question asks for c, so add the 5 back.',
          C:'1 uses the boundary −4 as the coefficient: c − 5 = −4. The coefficient is 12 ÷ (−4) = −3, not −4 itself.'
        },
        tip:'On a parameter inequality, the DIRECTION of the given solution set tells you the sign of the coefficient before you compute anything, and the boundary tells you its size. Sign first, size second, then undo whatever is wrapped around the parameter.',
        desmos:'Graph y=-3x and y=12; -3x stays above 12 only to the left of x = -4.',
        desmosLatex:['y=-3x','y=12']
      },
      {
        id:'ASY-34', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear inequalities: two limits at once, where money is not the binding one',
        stem:'A charter boat charges $340 for the trip plus $28 for each passenger, and it can carry at most 25 passengers. A group has $1,200 to spend on the trip. What is the greatest number of passengers the group can bring?',
        choices:{A:'25', B:'30', C:'31', D:'42'},
        correct:'A',
        expCorrect:'Money first: 28p + 340 ≤ 1200 gives 28p ≤ 860, so p ≤ 30.71 and money alone would allow 30 passengers. But the boat holds at most 25, so p ≤ 25 as well. Both limits must hold at once, and the smaller ceiling wins: 25. (Check: 28(25) + 340 = 700 + 340 = $1,040, which is under $1,200, and 25 is the full capacity ✓.)',
        expWrong:{
          B:'30 is the money answer and ignores the boat. The capacity sentence is not background information — it is the second condition, and it is the one that binds here.',
          C:'31 rounds 30.71 up and still ignores the capacity. Even without the boat limit, 31 passengers would cost $1,208, over budget.',
          D:'42 is 1200 ÷ 28 with the $340 trip charge never subtracted, and the capacity ignored as well.'
        },
        tip:'When a word problem states two limits, compute both ceilings and take the SMALLER one. The test writes these so that the number you work hardest for is the one that does not bind.',
        desmos:'Graph y=28x+340, y=1200 and x=25; the budget line is crossed near x = 30.7, but the vertical line x = 25 stops you first.',
        desmosLatex:['y=28x+340','y=1200','x=25']
      }

    ]
  });
})();
