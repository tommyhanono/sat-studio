/* SAT Studio — Math: Simulacro del MÓDULO 1 (M1-01 a M1-22)
 *
 * El set que faltaba. Auditoría del 26-jul-2026: el banco entero está calibrado
 * para el segundo módulo difícil (59 % de dificultad alta, 11 % fácil) y **no
 * existía nada que se pareciera al primero**.
 *
 * Por qué importa: el Digital SAT es adaptativo POR MÓDULO. El primero trae una
 * mezcla amplia y su resultado decide si el segundo es la versión difícil o la
 * fácil — o sea que **fija el techo de puntaje** al que se puede aspirar en la
 * sección. Entrenar solo en dificultad máxima construye resistencia pero no
 * VELOCIDAD en las preguntas fáciles, que son las que hay que despachar rápido
 * para que sobre tiempo.
 *
 * Composición, calcada de las especificaciones oficiales (Assessment Framework,
 * tabla 19, p. 85) para un módulo de 22 preguntas:
 *
 *   Dominio                            este set   oficial
 *   Algebra                              8 (36%)    ≈35 %
 *   Advanced Math                        8 (36%)    ≈35 %
 *   Problem-Solving and Data Analysis    3 (14%)    ≈15 %
 *   Geometry and Trigonometry            3 (14%)    ≈15 %
 *   SPR (respuesta propia)               5 (23%)    ≈25 %
 *
 * Dificultad 5 Fácil / 13 Media / 4 Difícil: la mezcla amplia de un módulo 1
 * real, no la del segundo.
 *
 * Se usa CON RELOJ. 22 preguntas en 35 minutos son ~95 segundos cada una.
 */
(function(){
  window.SAT_SETS.push({
    id: 'math-mod1-sim',
    title: 'Math — Module 1 Simulation (timed)',
    section: 'math',
    level: 'Media',
    description: 'A full Module 1 with the official mix of domains, formats and difficulty. 22 questions in 35 minutes: the module that sets your score ceiling.',
    minutes: 35,
    questions: [
      // ---------------- ALGEBRA (8) ----------------
      {
        id:'M1-01', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Ecuaciones lineales (una variable)',
        stem:'If 6x − 9 = 27, what is the value of x ?',
        choices:{A:'6', B:'3', C:'4.5', D:'36'},
        correct:'A',
        expCorrect:'Add 9 to both sides: 6x = 36. Divide by 6: x = 6. (Check: 6(6) − 9 = 27 ✓.)',
        expWrong:{
          B:'3 comes from subtracting the 9 instead of adding it: 27 − 9 = 18 and 18/6 = 3. The −9 crosses over as +9.',
          C:'4.5 is 27/6: the −9 was ignored entirely.',
          D:'36 is the value of 6x, not of x. The last step is missing, dividing by 6.'
        },
        tip:'A warm-up one: do not think about it, just do it. In Module 1 these are worth as much as the hard ones and they have to take 30 seconds so you have time left at the end.',
        desmos:'y=6x-9 y y=27 se cruzan en x=6.',
        desmosLatex:['y=6x-9','y=27']
      },
      {
        id:'M1-02', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Function notation (evaluating)',
        stem:'The function g is defined by g(x) = 5x + 2. What is the value of g(4) ?',
        choices:{A:'22', B:'20', C:'30', D:'7'},
        correct:'A',
        expCorrect:'Reemplaza x por 4: g(4) = 5(4) + 2 = 20 + 2 = 22.',
        expWrong:{
          B:'20 es solo 5(4): falta sumar el 2.',
          C:'30 comes from adding before multiplying, 5(4 + 2). The 2 is outside the parentheses.',
          D:'7 is 5 + 2: it ignores that the 5 multiplies x.'
        },
        tip:'Evaluating a function is substituting and computing, nothing more. Respect the order of operations: multiplication first, then addition.',
        desmos:'Grafica y=5x+2 y escribe (4,22): el punto cae sobre la recta.',
        desmosLatex:['y=5x+2','(4,22)']
      },
      {
        id:'M1-03', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Funciones lineales (pendiente entre dos puntos)',
        stem:'What is the slope of the line that passes through the points (1, −2) and (5, 10) ?',
        choices:{A:'3', B:'2', C:'1/3', D:'−3'},
        correct:'A',
        expCorrect:'Pendiente = (10 − (−2))/(5 − 1) = 12/4 = 3. Ojo con el numerador: restar −2 SUMA 2.',
        expWrong:{
          B:'2 comes from computing 10 − 2 = 8 in the numerator. The point has y = −2, so it is 10 − (−2) = 12.',
          C:'1/3 is the fraction upside down: you put the change in x on top. It is Δy over Δx.',
          D:'−3 tiene el signo cambiado. Si y sube de −2 a 10 mientras x crece, la pendiente es positiva.'
        },
        tip:'The double negative in the numerator or the denominator is the only real error on this question. Write the subtraction with parentheses and it does not get lost.',
        desmos:'Escribe (1,-2) y (5,10), y grafica y=3x-5 para confirmar que pasa por los dos.',
        desmosLatex:['(1,-2)','(5,10)','y=3x-5']
      },
      {
        id:'M1-04', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two equations (direct elimination)',
        stem:'x + y = 12\nx − y = 4\nThe system above has solution (x, y). What is the value of x ?',
        choices:{A:'8', B:'4', C:'16', D:'12'},
        correct:'A',
        expCorrect:'The y terms are opposites: add the equations and they vanish. 2x = 16 ⇒ x = 8. (Then y = 4. Check: 8 + 4 = 12 ✓ and 8 − 4 = 4 ✓.)',
        expWrong:{
          B:'4 is the value of y, not of x. It is also the right-hand side of the second equation — a double trap.',
          C:'16 es 2x, el paso intermedio. Falta dividir entre 2.',
          D:'12 is the right-hand side of the first equation, not a solution.'
        },
        tip:'When the coefficients are already opposites, adding solves it in one line. It is one of the fastest in the module: do not solve it by substitution.',
        desmos:'x+y=12 y x-y=4 se cruzan en (8,4).',
        desmosLatex:['x+y=12','x-y=4']
      },
      {
        id:'M1-05', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Desigualdades lineales (una variable)',
        stem:'Which of the following is equivalent to 3x + 7 < 22 ?',
        choices:{A:'x < 5', B:'x > 5', C:'x < 15', D:'x < 29/3'},
        correct:'A',
        expCorrect:'Subtract 7: 3x < 15. Divide by 3, which is POSITIVE, so the sign does NOT flip: x < 5. (Check with x = 0: 7 < 22 ✓, and 0 < 5 ✓.)',
        expWrong:{
          B:'x > 5 flips the sign for no reason. The symbol only flips when you multiply or divide by a NEGATIVE, and here you divided by +3.',
          C:'x < 15 forgot to divide by 3. It is the intermediate step.',
          D:'x < 29/3 added the 7 instead of subtracting it: (22 + 7)/3.'
        },
        tip:'The flip-the-sign rule only applies with negatives. There are none here, and that option is planted for whoever applies it from memory without looking.',
        desmos:'Escribe 3x+7<22 y Desmos sombrea todo lo que está a la izquierda de 5.',
        desmosLatex:['3x+7<22']
      },
      {
        id:'M1-06', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Modelo lineal en contexto (despejar el tiempo)',
        stem:'A plumber charges $75 for a house visit plus $45 for each hour of work. If a job cost $255 in total, how many hours did the plumber work?',
        choices:{A:'4', B:'5.67', C:'7.33', D:'180'},
        correct:'A',
        expCorrect:'The cost is 75 + 45h. Set it equal to 255: 45h = 255 − 75 = 180 ⇒ h = 180/45 = 4 hours. (Check: 75 + 45(4) = 255 ✓.)',
        expWrong:{
          B:'5.67 is 255/45: the total was divided without taking off the $75 visit first.',
          C:'7.33 is (255 + 75)/45: the visit charge was added instead of subtracted. The visit is part of the total, not something extra.',
          D:'180 is the DOLLARS of labor, not the hours. It is the intermediate step; it still needs dividing by the rate.'
        },
        tip:'Fixed charge + hourly rate: ALWAYS subtract the fixed part before dividing. And check the unit the answer wants — dollars and hours are both among the options.',
        desmos:'y=75+45x y y=255 se cruzan en x=4.',
        desmosLatex:['y=75+45x','y=255']
      },
      {
        id:'M1-07', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Ecuaciones lineales (variable en los dos lados)',
        stem:'If 2(x + 6) = 5x − 3, what is the value of x? (Grid in your answer.)',
        answer:'5',
        expCorrect:'Distribute: 2x + 12 = 5x − 3. Move the x terms to one side and the numbers to the other: 12 + 3 = 5x − 2x ⇒ 15 = 3x ⇒ x = 5. (Check: 2(5 + 6) = 22 and 5(5) − 3 = 22 ✓.)',
        tip:'Move the x terms to whichever side keeps them POSITIVE (here, to the right): it saves you a negative sign and an error. On SPR always check by substituting.',
        desmos:'y=2(x+6) y y=5x-3 se cruzan en x=5.',
        desmosLatex:['y=2(x+6)','y=5x-3']
      },
      {
        id:'M1-08', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Systems with no solution (parallel lines)',
        stem:'6x + ky = 10\n3x + 4y = 7\nIn the system above, k is a constant. If the system has no solution, what is the value of k ?',
        choices:{A:'8', B:'4', C:'2', D:'14'},
        correct:'A',
        expCorrect:'No solution = PARALLEL lines: same left-hand side, different constant. Multiply the second equation by 2 to match the x terms: 6x + 8y = 14. Comparing with 6x + ky = 10, you need k = 8. And since 10 ≠ 14, they are not the same line: there really is no solution ✓.',
        expWrong:{
          B:'4 copies the coefficient from the second equation without scaling it. The x terms are 6 and 3, so the whole second equation has to be doubled.',
          C:'2 is the scale factor (from 3x to 6x), not the coefficient you are after.',
          D:'14 is the constant left after scaling the second equation, not the y coefficient.'
        },
        tip:'"No solution" = parallel. "Infinitely many solutions" = the same line. It is the same computation; all that changes is whether the constant matches. The SAT asks both versions equally often.',
        desmos:'Grafica 6x+8y=10 y 3x+4y=7: paralelas, nunca se tocan.',
        desmosLatex:['6x+8y=10','3x+4y=7']
      },

      // ---------------- ADVANCED MATH (8) ----------------
      {
        id:'M1-09', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Evaluating a quadratic function at a negative',
        stem:'If f(x) = x² − 3x, what is the value of f(−2) ?',
        choices:{A:'10', B:'−2', C:'2', D:'−10'},
        correct:'A',
        expCorrect:'f(−2) = (−2)² − 3(−2) = 4 − (−6) = 4 + 6 = 10. Los dos signos importan: el cuadrado de un negativo es positivo, y restar −6 suma.',
        expWrong:{
          B:'−2 comes from computing 4 − 6: the sign got lost multiplying −3 by −2, which gives +6.',
          C:'2 comes from writing (−2)² as −4. The square of a negative is POSITIVE.',
          D:'−10 has the final sign inverted; the absolute value is right, so the slip was at the close.'
        },
        tip:'Substitute with parentheses: (−2)² − 3(−2). Almost every error of this kind is a sign that evaporates because they were left out.',
        desmos:'Grafica y=x^2-3x y escribe (-2,10).',
        desmosLatex:['y=x^2-3x','(-2,10)']
      },
      {
        id:'M1-10', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Quadratics (zeros by factoring)',
        stem:'What are the solutions to the equation x² − 5x − 14 = 0 ?',
        choices:{A:'x = 7 and x = −2', B:'x = −7 and x = 2', C:'x = 7 and x = 2', D:'x = −7 and x = −2'},
        correct:'A',
        expCorrect:'Look for two numbers that multiply to −14 and add to −5: they are −7 and +2. So x² − 5x − 14 = (x − 7)(x + 2), and the solutions are x = 7 and x = −2. (Check x = 7: 49 − 35 − 14 = 0 ✓.)',
        expWrong:{
          B:'x = −7 and x = 2 are the signs backwards. With those values: (−7)² − 5(−7) − 14 = 49 + 35 − 14 = 70, not 0.',
          C:'x = 7 and x = 2 give a product of +14, but the constant term is −14: the solutions have OPPOSITE signs.',
          D:'x = −7 y x = −2 dan producto +14 y suma −9. Ni el producto ni la suma coinciden.'
        },
        tip:'Two-second check: the sum of the solutions has to be −b (=5) and the product c (=−14). 7 + (−2) = 5 ✓ and 7(−2) = −14 ✓. It rules out three options without factoring.',
        desmos:'Grafica y=x^2-5x-14 y mirá dónde corta el eje x: en -2 y en 7.',
        desmosLatex:['y=x^2-5x-14']
      },
      {
        id:'M1-11', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponential growth (doubling)',
        stem:'A population of bacteria doubles every 3 hours. If there are 500 bacteria at time 0, how many bacteria are there after 9 hours? (Grid in your answer.)',
        answer:'4000',
        expCorrect:'In 9 hours there are 9/3 = 3 doublings. Each one multiplies by 2, so the total is 500 × 2³ = 500 × 8 = 4000. (Step by step: 500 → 1000 → 2000 → 4000.)',
        tip:'Count DOUBLINGS, not hours. The classic error is multiplying by 2 once per hour (which would give 500 × 2⁹) or multiplying by 9. With small numbers it is best to double by hand: it is faster than the formula and leaves no room for confusion.',
        desmos:'Grafica y=500*2^(x/3) y evaluá en x=9: da 4000.',
        desmosLatex:['y=500\\cdot 2^{\\frac{x}{3}}','500\\cdot 2^{3}']
      },
      {
        id:'M1-12', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Expresiones equivalentes (cuadrado de un binomio)',
        stem:'Which expression is equivalent to (3x + 2)² ?',
        choices:{A:'9x² + 12x + 4', B:'9x² + 6x + 4', C:'9x² + 4', D:'6x² + 12x + 4'},
        correct:'A',
        expCorrect:'(3x + 2)² = (3x + 2)(3x + 2) = 9x² + 6x + 6x + 4 = 9x² + 12x + 4. The middle term is 2·(3x)·(2) = 12x. (Check with x = 1: (3 + 2)² = 25, and 9 + 12 + 4 = 25 ✓.)',
        expWrong:{
          B:'9x² + 6x + 4 uses 3·2 = 6 for the middle term, but it has to be DOUBLED: the two cross products are equal, 6x + 6x = 12x.',
          C:'9x² + 4 squares each term separately. (a + b)² is NOT a² + b²: the whole middle term is missing.',
          D:'6x² + 12x + 4 computes (3x)² as 6x². Squaring means multiplying by itself, not by 2: 3² = 9.'
        },
        tip:'Check with x = 1: the sum of the coefficients has to equal the value of the parenthesis squared. Five seconds, and it catches all four possible errors.',
        desmos:'Grafica y=(3x+2)^2 y y=9x^2+12x+4: se superponen.',
        desmosLatex:['y=(3x+2)^2','y=9x^2+12x+4']
      },
      {
        id:'M1-13', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratics (vertex / minimum value)',
        stem:'The function f is defined by f(x) = x² − 8x + 3. What is the x-coordinate of the minimum value of f ?',
        choices:{A:'4', B:'−4', C:'8', D:'3'},
        correct:'A',
        expCorrect:'The vertex of a parabola sits at x = −b/(2a). Here a = 1 and b = −8, so x = −(−8)/(2·1) = 8/2 = 4. Since a > 0 the parabola opens upward and that vertex is the MINIMUM. (Completing the square: x² − 8x + 3 = (x − 4)² − 13, minimum at x = 4.)',
        expWrong:{
          B:'−4 forgot the minus sign in the formula: b is already −8, so −b is +8.',
          C:'8 es el valor de −b, sin dividir entre 2a.',
          D:'3 is the constant term, which shifts the parabola vertically. It does not affect where the vertex is.'
        },
        tip:'x = −b/(2a) comes free and answers half a dozen question types: vertex, axis of symmetry, maximum, minimum. Memorize that **b goes in with its own sign**.',
        desmos:'Grafica y=x^2-8x+3 y tocá el punto más bajo: (4, -13).',
        desmosLatex:['y=x^2-8x+3','(4,-13)']
      },
      {
        id:'M1-14', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratics (solving with a condition)',
        stem:'If x² + 6x = 16 and x > 0, what is the value of x? (Grid in your answer.)',
        answer:'2',
        expCorrect:'Move everything to one side: x² + 6x − 16 = 0. Factor by looking for two numbers with product −16 and sum +6: they are +8 and −2, so (x + 8)(x − 2) = 0 and the solutions are x = −8 and x = 2. The condition x > 0 leaves **x = 2**. (Check: 4 + 12 = 16 ✓.)',
        tip:'The condition "x > 0" is there because there are TWO solutions and the SPR takes only one. When you see a restriction like that, solve it completely and only discard at the end — do not assume which one it is before you have both.',
        desmos:'Grafica y=x^2+6x y y=16: se cruzan en x=-8 y x=2.',
        desmosLatex:['y=x^2+6x','y=16']
      },
      {
        id:'M1-15', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Solving an equation with a quadratic function',
        stem:'The function h is defined by h(x) = 2x² + 1. For what positive value of x does h(x) = 19 ?',
        choices:{A:'3', B:'9', C:'√10', D:'8.5'},
        correct:'A',
        expCorrect:'Set it equal and solve: 2x² + 1 = 19 ⇒ 2x² = 18 ⇒ x² = 9 ⇒ x = 3 (the positive one is asked for). Check: 2(9) + 1 = 19 ✓.',
        expWrong:{
          B:'9 is the value of x², not of x. The square root is missing — the last step.',
          C:'√10 comes from adding the 1 instead of subtracting it: (19 + 1)/2 = 10. The +1 crosses over as −1.',
          D:'8.5 comes from dividing before subtracting: 19/2 − 1. You have to isolate the x² term first.'
        },
        tip:'Undo in the reverse order of how it was built: first what is added, then what multiplies, and last the power. The option "x²" is always among the answers.',
        desmos:'Grafica y=2x^2+1 y y=19: se cruzan en x=-3 y x=3.',
        desmosLatex:['y=2x^2+1','y=19']
      },
      {
        id:'M1-16', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Ecuaciones racionales',
        stem:'If 12/(x − 2) = 4, what is the value of x ?',
        choices:{A:'5', B:'3', C:'1', D:'48'},
        correct:'A',
        expCorrect:'Multiply both sides by (x − 2): 12 = 4(x − 2) ⇒ 12 = 4x − 8 ⇒ 4x = 20 ⇒ x = 5. (Check: 12/(5 − 2) = 12/3 = 4 ✓. And x = 5 does not zero the denominator, so it is valid.)',
        expWrong:{
          B:'3 is the value of x − 2, not of x. It is correct that x − 2 = 3, but you still have to add 2.',
          C:'1 comes from subtracting 2 instead of adding it after finding x − 2 = 3.',
          D:'48 is 12 × 4: it multiplied where it had to divide. If 12 divided by something gives 4, that something is 3, not 48.'
        },
        tip:'In a rational equation, look at the denominator BEFORE you operate: any solution that zeroes it (here x = 2) has to be discarded. And always check by substituting, which is what exposes the "one step early" error.',
        desmos:'Grafica y=12/(x-2) y y=4: se cruzan en x=5.',
        desmosLatex:['y=\\frac{12}{x-2}','y=4']
      },

      // ---------------- PROBLEM-SOLVING AND DATA ANALYSIS (3) ----------------
      {
        id:'M1-17', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Porcentajes (descuento)',
        stem:'A jacket originally priced at $80 is on sale for 25% off. What is the sale price of the jacket?',
        choices:{A:'$60', B:'$20', C:'$55', D:'$100'},
        correct:'A',
        expCorrect:'Descontar 25 % es pagar el 75 %: 0.75 × 80 = $60. (O bien: el descuento es 0.25 × 80 = $20, y 80 − 20 = $60.)',
        expWrong:{
          B:'$20 is the DISCOUNT, not the final price. It still has to be subtracted from the $80.',
          C:'$55 subtracts 25 dollars instead of 25 percent. A percentage is computed on the price, it is not subtracted directly.',
          D:'$100 suma el 25 % en vez de restarlo. "Off" significa descuento.'
        },
        tip:'A shortcut that saves a step: to take 25% off, multiply by 0.75 directly. It works for any percentage — and it avoids the error of keeping the discount instead of the price.',
        desmos:'Escribí 0.75*80 y Desmos te da 60 al toque.',
        desmosLatex:['0.75\\cdot 80']
      },
      {
        id:'M1-18', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Proporciones y razones',
        stem:'A recipe requires 3 cups of flour for every 4 cups of milk. If a baker uses 15 cups of flour, how many cups of milk are needed?',
        choices:{A:'20', B:'11.25', C:'16', D:'60'},
        correct:'A',
        expCorrect:'The flour:milk ratio is 3:4. With 15 cups of flour, the factor is 15/3 = 5, so the milk is 4 × 5 = **20 cups**. (Check the proportion: 3/4 = 15/20 ✓.)',
        expWrong:{
          B:'11.25 uses the ratio backwards: 15 × (3/4). With more flour you need MORE milk, not less — the result had to be greater than 15.',
          C:'16 adds the difference (4 − 3 = 1) instead of multiplying by the scale factor. Proportions scale by multiplying.',
          D:'60 is 15 × 4: it multiplied by the milk without first dividing by the 3 cups of flour in the original recipe.'
        },
        tip:'Before computing, decide whether the answer has to be bigger or smaller than the given figure. Here the recipe has more milk than flour, so 20 > 15 makes sense and 11.25 is ruled out with no arithmetic.',
        desmos:'Escribí 15/3*4 y te da 20.',
        desmosLatex:['\\frac{15}{3}\\cdot 4']
      },
      {
        id:'M1-19', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Media (hallar el dato que falta)',
        stem:'The mean of five numbers is 14. Four of the numbers are 10, 12, 16, and 20. What is the fifth number? (Grid in your answer.)',
        answer:'12',
        expCorrect:'If the mean of five numbers is 14, the SUM of the five is 5 × 14 = 70. The four known ones add to 10 + 12 + 16 + 20 = 58. The fifth is 70 − 58 = **12**. (Check: 70/5 = 14 ✓.)',
        tip:'The mean is almost never used as a formula here: it is used backwards, to rebuild the SUM. The moment you read "the average is", write sum = average × count and the rest is arithmetic.',
        desmos:'Escribí 5*14-(10+12+16+20) y da 12.',
        desmosLatex:['5\\cdot 14-(10+12+16+20)']
      },

      // ---------------- GEOMETRY AND TRIGONOMETRY (3) ----------------
      {
        id:'M1-20', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Sum of the angles of a triangle',
        stem:'In triangle ABC, the measure of angle A is 40° and the measure of angle B is 75°. What is the measure of angle C ?',
        choices:{A:'65°', B:'115°', C:'245°', D:'75°'},
        correct:'A',
        expCorrect:'The angles of any triangle add to 180°. So C = 180 − 40 − 75 = 180 − 115 = 65°.',
        expWrong:{
          B:'115° is the sum of the other two angles, not the third one. It still has to be subtracted from 180.',
          C:'245° uses 360 instead of 180. The 360° is a full turn or the angles of a quadrilateral, not of a triangle.',
          D:'75° repeats angle B, which is given in the problem. Nothing says the triangle is isosceles.'
        },
        tip:'A rule that never changes: 180° in a triangle, 360° in a quadrilateral. These questions exist to be solved in fifteen seconds and buy you time for the hard ones.',
        desmos:'No hace falta calculadora: 180-40-75.',
        desmosLatex:['180-40-75']
      },
      {
        id:'M1-21', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Circles (from area to radius)',
        stem:'A circle has an area of 49π. What is the radius of the circle? (Grid in your answer.)',
        answer:'7',
        expCorrect:'The area of a circle is πr². Set it equal: πr² = 49π ⇒ r² = 49 ⇒ r = **7**. The π cancels on both sides, so there is nothing to approximate.',
        tip:'When the area comes "in terms of π", cancel it and work with the number: the problem turns into arithmetic. And do not confuse r² with r — the 49 is the square, the answer is its root.',
        desmos:'Escribí sqrt(49) o graficá y=pi*x^2 con y=49pi.',
        desmosLatex:['\\sqrt{49}']
      },
      {
        id:'M1-22', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Pythagorean theorem',
        stem:'A right triangle has legs of length 9 and 12. What is the length of the hypotenuse?',
        choices:{A:'15', B:'21', C:'225', D:'√21'},
        correct:'A',
        expCorrect:'Pythagoras: c² = 9² + 12² = 81 + 144 = 225, so c = √225 = 15. (It is the 3-4-5 triangle times 3: 9-12-15.)',
        expWrong:{
          B:'21 adds the legs, 9 + 12. The hypotenuse is not the sum of the sides: it has to be less than that and more than either leg.',
          C:'225 is c², not c. The square root is missing — the last step.',
          D:'√21 takes the root of the sum of the legs instead of the sum of their SQUARES. On top of that it would give ≈4.6, smaller than the legs, which is impossible.'
        },
        tip:'Learn the triples 3-4-5, 5-12-13 and 8-15-17 and their multiples: 9-12-15 is 3-4-5 times 3 and it comes out from memory. And a sanity check: the hypotenuse is always between the longer leg and the sum of the two.',
        desmos:'Escribí sqrt(9^2+12^2) y da 15.',
        desmosLatex:['\\sqrt{9^2+12^2}']
      }
    ]
  });
})();
