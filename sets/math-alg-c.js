/* SAT Studio question set — Math: Algebra — Hard tier (ALC-01 a ALC-34)
 *
 * Por qué existe: es el extremo superior del dominio Algebra. Nada se resuelve
 * con un despeje directo; todas piden varios pasos encadenados o interpretar el
 * resultado. Las cinco destrezas oficiales del dominio, en su versión dura:
 *
 *   · Linear equations in one variable (7): fracciones apiladas, el parámetro
 *     que vuelve la ecuación cierta para todo x, y la constante que se recupera
 *     desde la solución. Lo que se pide casi nunca es x.
 *   · Linear functions (7): la misma función en tres representaciones —tabla,
 *     gráfica y fórmula—, la trampa de unidades (modelo en minutos, pregunta en
 *     horas) y la identidad f(x+4) = f(x)+10 como fuente de la pendiente.
 *   · Linear equations in two variables (7): forma estándar, ecuación literal,
 *     cuánto cambia una variable cuando la otra cambia, y el punto anclado por
 *     una segunda condición.
 *   · Systems of two linear equations (7): el parámetro que deja las rectas
 *     paralelas o superpuestas, y el dato que se pide (suma, diferencia,
 *     producto) que nunca es una de las dos variables.
 *   · Linear inequalities (6): compuestas con contexto, el redondeo hacia abajo,
 *     y qué extremo del intervalo contesta la pregunta.
 *
 * Reparto: 27 MC + 7 SPR · 0 Fácil · 12 Media · 22 Difícil (10 de ellas extreme).
 *
 * OJO al escribir aquí:
 *   1. El texto se inyecta con innerHTML: un `<` pegado a una letra se lee como
 *      etiqueta. Toda desigualdad va con espacio (`x < 5`).
 *   2. `skillOf` lee `skill` + los primeros 160 caracteres del `stem` y prueba en
 *      orden al-sys → al-ineq → al-2var → al-func → al-1var. Gana el PRIMERO que
 *      calce, no el más específico. Por eso:
 *        · las de desigualdad no dicen system / elimination / substitution /
 *          no solution / infinitely many / simultaneous;
 *        · las de dos variables y las de funciones además evitan inequality /
 *          at least / at most / budget / constraint / capacity / region;
 *        · las de funciones evitan in terms of / solve for / two variables /
 *          standard form / point-slope / literal equation;
 *        · las de una variable evitan todo lo anterior MÁS slope / intercept /
 *          parallel / rate of change / linear model / per hour|minute|year|day.
 *      El reparto que tiene que dar es 7 / 7 / 7 / 7 / 6.
 *   3. Cada distractor es un error con nombre. En este tier los dos que más
 *      valen son contestar la variable equivocada y quedarse en el penúltimo
 *      paso; los dos aparecen a propósito una y otra vez.
 */
(function(){
  window.SAT_SETS.push({
    id: 'math-alg-c',
    title: 'Algebra — The Last Step',
    section: 'math',
    level: 'Difícil',
    description: 'Thirty-four Algebra questions where solving is only half the work: the number you found is almost never the number they asked for. Parameters, three representations of the same line, compound inequalities with context, and systems whose answer is a sum, a difference or a product.',
    minutes: 45,
    questions: [

      /* ═══════════ Linear equations in one variable (7) ═══════════
         Ninguna dice slope / intercept / parallel / rate of change / linear
         model / per hour: cualquiera de esas la manda a al-func. */
      {
        id:'ALC-01', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equation in one variable: distribute, collect, then evaluate the expression the question names',
        stem:'The equation 6(x − 2) − 2(3 − x) = 4x + 10 is true for exactly one value of x. What is the value of 2x − 9 ?',
        choices:{A:'5', B:'7', C:'0', D:'−5'},
        correct:'A',
        expCorrect:'Distribute both products, keeping the sign of every term: 6x − 12 − 6 + 2x = 4x + 10, so 8x − 18 = 4x + 10. Subtract 4x and add 18: 4x = 28, so x = 7. The question asks for 2x − 9, not for x: 2(7) − 9 = 14 − 9 = 5. (Check the original: 6(5) − 2(−4) = 30 + 8 = 38 and 4(7) + 10 = 38 ✓.)',
        expWrong:{
          B:'7 is x itself. Everything before the last line was right; the last line asked for 2x − 9. Underline what is being asked before you start.',
          C:'0 comes from distributing 6(x − 2) as 6x − 2 instead of 6x − 12. That gives 8x − 8 = 4x + 10 and x = 4.5, so 2x − 9 = 0. The 6 multiplies BOTH terms inside.',
          D:'−5 is 9 − 2x instead of 2x − 9. The order of a subtraction is not negotiable: read the expression left to right.'
        },
        tip:'Once you have x, go back and re-read the last sentence. When the question names an expression like 2x − 9, the value of x is a distractor that is already sitting in the choices.',
        desmos:'Graph y=6(x-2)-2(3-x) and y=4x+10; they cross at x=7. Then evaluate 2(7)-9.',
        desmosLatex:['y=6(x-2)-2(3-x)','y=4x+10']
      },
      {
        id:'ALC-02', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear equation in one variable: the constant that makes both sides identical',
        stem:'In the equation 4(3x − c) = 12x − 20, c is a constant. For which value of c is the equation true for every value of x ?',
        choices:{A:'3', B:'5', C:'20', D:'80'},
        correct:'B',
        expCorrect:'Distribute the left side: 12x − 4c = 12x − 20. The 12x terms already match, so the equation holds for every x exactly when the constant terms match too: −4c = −20, so c = 5. (Check: 4(3x − 5) = 12x − 20 ✓, which is the same expression on both sides.)',
        expWrong:{
          A:'3 is the coefficient of x inside the parentheses, not the constant. The 3 is what makes the x terms match; c is what makes the numbers match.',
          C:'20 matches c to the 20 without distributing the 4 first. The parentheses are multiplied by 4, so the constant that reaches the right side is 4c, not c.',
          D:'80 multiplies 4 by 20 instead of dividing. From −4c = −20 you undo a multiplication by 4, so you divide.'
        },
        tip:'An equation is true for every value of the variable only when the two sides are the same expression. Distribute first, then match the x terms and the constant terms separately.',
        desmos:'Graph y=4(3x-5) and y=12x-20: one line on top of the other. Try c=3 and watch them separate.',
        desmosLatex:['y=4(3x-5)','y=12x-20']
      },
      {
        id:'ALC-03', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear equation in one variable: clearing three denominators before evaluating',
        stem:'If (2x + 5)/3 − (x − 4)/2 = (x + 1)/4, what is the value of (x + 7)/6 ?',
        answer:'8',
        expCorrect:'Multiply every term by 12, the least common denominator: 4(2x + 5) − 6(x − 4) = 3(x + 1). Distribute: 8x + 20 − 6x + 24 = 3x + 3, so 2x + 44 = 3x + 3 and x = 41. Now answer what was asked: (41 + 7)/6 = 48/6 = 8. (Check the original with x = 41: 87/3 − 37/2 = 29 − 18.5 = 10.5, and 42/4 = 10.5 ✓.)',
        tip:'Multiply the WHOLE equation by the least common denominator, including the terms that have no fraction. Then finish the job: the last line asks for an expression, and x = 41 is not it.',
        desmos:'Graph y=(2x+5)/3-(x-4)/2 and y=(x+1)/4 and read the crossing at x=41; then compute (41+7)/6.',
        desmosLatex:['y=(2x+5)/3-(x-4)/2','y=(x+1)/4']
      },
      {
        id:'ALC-04', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equation in one variable from a before-and-after count, with the total asked at the end',
        stem:'Marisol has three times as many blue tiles as red tiles. After she uses 12 blue tiles and buys 4 red tiles, she has twice as many blue tiles as red tiles. How many tiles does she have in all after those changes?',
        choices:{A:'20', B:'48', C:'72', D:'80'},
        correct:'C',
        expCorrect:'Let r be the number of red tiles at the start, so the blue tiles are 3r. After the changes: blue = 3r − 12 and red = r + 4, and blue is twice red, so 3r − 12 = 2(r + 4) = 2r + 8. That gives r = 20, so she started with 20 red and 60 blue. After the changes: 48 blue and 24 red, for 48 + 24 = 72 tiles in all. (Check: 48 is twice 24 ✓.)',
        expWrong:{
          A:'20 is r, the number of red tiles at the START. It is the number the equation hands you, but three questions were asked after it: blue now, red now, and the total.',
          B:'48 is the number of blue tiles at the end. The question asks for all the tiles, so the 24 red ones still have to be added.',
          D:'80 is the total BEFORE the changes, 20 + 60. She used 12 tiles and bought 4, so the total moved by −8.'
        },
        tip:'Name one letter for the smaller quantity at the START, write both quantities before and after, and only then write the sentence the problem gives you. The total is one more line of work after the letter is found.',
        desmos:'Graph y=3x-12 and y=2(x+4) and read the crossing at x=20; the total asked for is (3·20-12)+(20+4).',
        desmosLatex:['y=3x-12','y=2(x+4)']
      },
      {
        id:'ALC-05', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear equation in one variable: recovering the constant when the answer is given',
        stem:'In the equation 3(2x − a) + 5 = 7x − 4, a is a constant. If x = 6 makes the equation true, what is the value of a ?',
        choices:{A:'11', B:'3', C:'−1', D:'1'},
        correct:'D',
        expCorrect:'Put x = 6 into both sides. Left: 3(12 − a) + 5 = 36 − 3a + 5 = 41 − 3a. Right: 7(6) − 4 = 38. So 41 − 3a = 38, which gives 3a = 3 and a = 1. (Check: 3(12 − 1) + 5 = 38 ✓.)',
        expWrong:{
          A:'11 is the value of 12 − a, the penultimate line. From 3(12 − a) = 33 you get 12 − a = 11, and there is still one step left: a = 12 − 11.',
          B:'3 comes from not distributing the 3 onto a: 36 − a + 5 = 38 gives a = 3. The 3 multiplies everything inside the parentheses, so the term is −3a.',
          C:'−1 is a sign slip at the end. From 41 − 3a = 38 you get −3a = −3, and dividing two negatives gives a positive.'
        },
        tip:'When a question hands you the value of the variable, substituting is always faster than solving. The unknown becomes the constant, and the constant becomes the thing you isolate.',
        desmos:'Graph y=3(2·6-x)+5 and y=7·6-4 with x standing in for a; they cross at x=1.',
        desmosLatex:['y=3(12-x)+5','y=38']
      },
      {
        id:'ALC-06', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear equation in one variable with fractions, where the quantity asked for is a multiple of the unknown',
        stem:'A lab worksheet records that the mass m, in grams, of a sample makes the equation 8 − (m − 3)/2 = (3m + 1)/4 + 1 true. What is the value of 5m ?',
        choices:{A:'33', B:'6.6', C:'21', D:'165'},
        correct:'A',
        expCorrect:'Multiply every term by 4: 32 − 2(m − 3) = (3m + 1) + 4. Distribute: 32 − 2m + 6 = 3m + 5, so 38 − 2m = 3m + 5 and 33 = 5m. The question asks for 5m, so the work is already finished: 5m = 33. (Check with m = 6.6: 8 − 3.6/2 = 6.2 and (19.8 + 1)/4 + 1 = 6.2 ✓.)',
        expWrong:{
          B:'6.6 is m, found by dividing 33 by 5 — one step too many. The question asked for 5m, and 5m was the last thing on the page before that division.',
          C:'21 comes from distributing −(m − 3)/2 as (−m − 3)/2: the minus has to reach BOTH terms, so it is −2m + 6 after clearing, not −2m − 6.',
          D:'165 multiplies 33 by 5 again. The 33 already IS 5m; multiplying by 5 a second time answers 25m.'
        },
        tip:'Before you divide at the end, look at what is being asked. Questions that ask for 5m, 2x − 9 or a + b are built so that the extra division is the trap, not the solution.',
        desmos:'Graph y=8-(x-3)/2 and y=(3x+1)/4+1; they cross at x=6.6, and 5·6.6=33.',
        desmosLatex:['y=8-(x-3)/2','y=(3x+1)/4+1']
      },
      {
        id:'ALC-07', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Linear equation in one variable with decimals on both sides',
        stem:'If 0.6(x + 15) = 0.25x + 16, what is the value of x + 4 ?',
        answer:'24',
        expCorrect:'Distribute: 0.6x + 9 = 0.25x + 16. Subtract 0.25x from both sides and subtract 9: 0.35x = 7, so x = 7 ÷ 0.35 = 20. The question asks for x + 4 = 24. (Check: 0.6(35) = 21 and 0.25(20) + 16 = 21 ✓.)',
        tip:'Decimals follow exactly the same rules as whole numbers; if they bother you, multiply the whole equation by 100 first. And keep one eye on the last line: x = 20 is not what was asked for.',
        desmos:'Graph y=0.6(x+15) and y=0.25x+16; they cross at x=20, and the answer is 20+4.',
        desmosLatex:['y=0.6(x+15)','y=0.25x+16']
      },

      /* ═══════════ Linear functions (7) ═══════════
         Todas dicen linear function / slope / rate of change / from a table /
         from a graph, y ninguna dice in terms of, solve for ni two variables:
         eso las mandaría a al-2var, que se prueba antes. */
      {
        id:'ALC-08', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear functions: comparing a function given by a formula with one given by two ordered pairs',
        stem:'The linear function f is defined by f(x) = 4x − 9. The linear function g satisfies g(2) = 1 and g(6) = 13. What is the value of f(5) − g(5) ?',
        choices:{A:'−1', B:'1', C:'9', D:'21'},
        correct:'B',
        expCorrect:'For g, the rate of change is (13 − 1)/(6 − 2) = 12/4 = 3, so g(x) = 3x + b with 1 = 3(2) + b, giving b = −5 and g(x) = 3x − 5. Now f(5) = 4(5) − 9 = 11 and g(5) = 3(5) − 5 = 10, so f(5) − g(5) = 11 − 10 = 1. (Check g: g(6) = 18 − 5 = 13 ✓.)',
        expWrong:{
          A:'−1 is g(5) − f(5): the two functions were subtracted in the order they appear in your head instead of the order printed in the question.',
          C:'9 comes from flipping the rate of change of g to (6 − 2)/(13 − 1) = 1/3. The change in the OUTPUT goes on top.',
          D:'21 adds the two outputs, 11 + 10. The question has a minus sign between them.'
        },
        tip:'Two functions described two different ways still live on the same grid. Turn the one given by points into a formula first, then evaluate both at the same input.',
        desmos:'Graph y=4x-9 and y=3x-5, then read both at x=5: 11 and 10.',
        desmosLatex:['y=4x-9','y=3x-5']
      },
      {
        id:'ALC-09', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear functions: reading the rate of change from a table, then inverting the question',
        stem:'The table gives three values of the linear function h.<table><thead><tr><th>x</th><th>h(x)</th></tr></thead><tbody><tr><td>1</td><td>23</td></tr><tr><td>4</td><td>14</td></tr><tr><td>9</td><td>−1</td></tr></tbody></table>For what value of x does h(x) = 2 ?',
        choices:{A:'−6', B:'20', C:'8', D:'24'},
        correct:'C',
        expCorrect:'The rate of change is (14 − 23)/(4 − 1) = −9/3 = −3, so h(x) = 23 − 3(x − 1) = 26 − 3x. (Check the third row: 26 − 27 = −1 ✓.) Now set the OUTPUT to 2: 26 − 3x = 2, so 3x = 24 and x = 8.',
        expWrong:{
          B:'20 is h(2), the output when the input is 2. The question gives the output and asks for the input; the table is being read in the wrong direction.',
          C:'',
          D:'24 is the value of 3x, one division short. Finish by dividing by the 3 that multiplies x.'
        },
        tip:'When a table gives an output and asks for the input, build the formula once and then read it backwards. Writing h(x) = 26 − 3x takes ten seconds and answers every version of the question.',
        desmos:'Plot (1,23), (4,14), (9,-1) and y=26-3x through them; then graph y=2 and read the crossing at x=8.',
        desmosLatex:['y=26-3x','y=2']
      },
      {
        id:'ALC-10', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear functions: recovering the rate of change from a shifted-input identity',
        stem:'The linear function f satisfies f(x + 4) = f(x) + 10 for every value of x, and f(3) = 8. What is the value of f(11) ?',
        choices:{A:'18', B:'20', C:'88', D:'28'},
        correct:'D',
        expCorrect:'The identity says that moving 4 to the right raises the output by 10, so the rate of change is 10/4 = 2.5 per unit. From x = 3 to x = 11 is 8 units, so the output rises by 8(2.5) = 20: f(11) = 8 + 20 = 28. (Check by steps of 4: f(7) = 18, f(11) = 28 ✓.)',
        expWrong:{
          A:'18 applies the +10 once. That takes you from f(3) to f(7); there is a second jump of 4 left to reach x = 11.',
          B:'20 is the increase in the output, not the output. It still has to be added to f(3) = 8.',
          C:'88 treats the 10 as the change per unit: 8 + 8(10). The 10 is the change over 4 units, so per unit it is 2.5.'
        },
        tip:'An identity like f(x + k) = f(x) + c is the rate of change in disguise: it is c/k per unit. Count how many units the question moves you, multiply, and add to the value you were given.',
        desmos:'Graph y=2.5x+0.5 (it has f(3)=8) and read y at x=11.',
        desmosLatex:['y=2.5x+0.5']
      },
      {
        id:'ALC-11', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear functions: the rate of change in one unit when the question asks for another',
        stem:'A candle burns at a constant rate. Its height H, in centimeters, is given by H = 30 − 0.45t, where t is the number of minutes since the candle was lit. By how many centimeters does the height fall per hour?',
        choices:{A:'27', B:'0.45', C:'0.0075', D:'30'},
        correct:'A',
        expCorrect:'The coefficient of t is −0.45, so the height falls 0.45 centimeters each minute. One hour is 60 minutes, so the fall per hour is 0.45 × 60 = 27 centimeters. (Check: after 60 minutes H = 30 − 0.45(60) = 30 − 27 = 3, which is 27 below the starting 30 ✓.)',
        expWrong:{
          B:'0.45 is the fall per MINUTE, which is the number the formula hands you. The question changed the unit of time, so the number has to change with it.',
          C:'0.0075 divides by 60 instead of multiplying. More minutes fit in an hour, so the change over an hour is bigger, not smaller.',
          D:'30 is the height at t = 0, the constant term. It says where the candle started, not how fast it shrinks.'
        },
        tip:'Read the unit attached to the variable in the model, then read the unit in the question. When they disagree, the only safe move is one explicit conversion line: per minute × 60 = per hour.',
        desmos:'Graph y=30-0.45x with x in minutes and compare y at x=0 and x=60: the drop is 27.',
        desmosLatex:['y=30-0.45x']
      },
      {
        id:'ALC-12', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear functions: the input whose output is zero, read from a graph through two points',
        stem:'In the xy-plane, the graph of the linear function f passes through the points (−3, 14) and (5, −2). If f(c) = 0, what is the value of c ?',
        answer:'4',
        expCorrect:'The rate of change is (−2 − 14)/(5 − (−3)) = −16/8 = −2, so f(x) = 14 − 2(x + 3) = 8 − 2x. (Check: f(5) = 8 − 10 = −2 ✓.) Setting the output to zero: 8 − 2c = 0, so 2c = 8 and c = 4.',
        tip:'The input whose output is zero is where the graph meets the x-axis. Build the formula from the two points first — guessing from a sketch costs more time than the two lines of algebra.',
        desmos:'Plot (-3,14) and (5,-2), graph y=8-2x through them, and read where it meets the x-axis.',
        desmosLatex:['y=8-2x']
      },
      {
        id:'ALC-13', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear functions: one question that needs a formula, a graph and a table at the same time',
        stem:'Function f is defined by f(x) = 3x + 11. The graph of the linear function g in the xy-plane passes through (2, 9) and (6, 25). The table gives two values of the linear function h.<table><thead><tr><th>x</th><th>h(x)</th></tr></thead><tbody><tr><td>0</td><td>5</td></tr><tr><td>5</td><td>30</td></tr></tbody></table>What is the value of h(10) − g(10) + f(0) ?',
        choices:{A:'14', B:'25', C:'17', D:'107'},
        correct:'B',
        expCorrect:'Build all three. g: rate of change (25 − 9)/(6 − 2) = 4, and 9 = 4(2) + b gives g(x) = 4x + 1, so g(10) = 41. h: rate of change (30 − 5)/(5 − 0) = 5 and h(0) = 5, so h(x) = 5x + 5 and h(10) = 55. f(0) = 3(0) + 11 = 11. Now 55 − 41 + 11 = 25.',
        expWrong:{
          A:'14 is h(10) − g(10), stopping before the + f(0). The expression has three terms.',
          C:'17 uses 3 instead of 11 for f(0): the 3 is the rate of change of f, and f(0) is the constant term, 11.',
          D:'107 adds all three values, 55 + 41 + 11. The middle term is subtracted.'
        },
        tip:'A formula, a pair of points and a table are three ways of saying the same thing. Convert everything to y = (rate)x + (value at 0) before you evaluate anything, and the three representations stop being three problems.',
        desmos:'Graph y=3x+11, y=4x+1 and y=5x+5; read them at x=10 and x=0 and combine as the question asks.',
        desmosLatex:['y=3x+11','y=4x+1','y=5x+5']
      },
      {
        id:'ALC-14', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear functions: interpreting the slope of a linear model in context',
        stem:'A biologist models the length L, in millimeters, of a seedling as L = 3.5 + 0.8w, where w is the number of weeks since it was planted. Which of the following is the best interpretation of the number 0.8 in this model?',
        choices:{
          A:'The seedling was 0.8 millimeters tall when planted.',
          B:'It takes 0.8 weeks for the seedling to grow 1 millimeter.',
          C:'The seedling grows by 0.8 millimeters each week.',
          D:'The seedling grows by 0.8 millimeters each day.'
        },
        correct:'C',
        expCorrect:'The 0.8 multiplies w, so it is the change in L for a one-unit change in w. One unit of w is one week and L is measured in millimeters, so the seedling gains 0.8 millimeters per week. (Check: at w = 0, L = 3.5; at w = 1, L = 4.3, a gain of 0.8 ✓.)',
        expWrong:{
          A:'0.8 is not the starting length. The length at w = 0 is the constant term, 3.5 millimeters.',
          B:'That is the reciprocal. Growing 0.8 millimeters per week means 1 millimeter takes 1 ÷ 0.8 = 1.25 weeks, not 0.8 weeks.',
          D:'The unit of w is stated in the question as weeks, not days. Changing the unit without a conversion changes the claim by a factor of 7.'
        },
        tip:'The coefficient of the variable always carries the units of (output unit) per (input unit). Say the sentence out loud with both units attached and three of the four choices disqualify themselves.',
        desmos:'Graph y=3.5+0.8x and compare y at x=0 and x=1: the gap is 0.8.',
        desmosLatex:['y=3.5+0.8x']
      },

      /* ═══════════ Linear equations in two variables (7) ═══════════
         Todas llevan "two variables" (o standard form / literal equation) en el
         skill. Se prueban antes que al-func, así que pueden nombrar intercepts
         sin irse de destreza; lo que no pueden es decir system ni at least. */
      {
        id:'ALC-15', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equations in two variables: rewriting a literal equation to isolate y',
        stem:'The equation 5x − 2y = 18 relates the two variables x and y. Which expression is equal to y ?',
        choices:{A:'(18 − 5x)/2', B:'(5x + 18)/2', C:'5x/2 − 18', D:'(5x − 18)/2'},
        correct:'D',
        expCorrect:'Move the x term to the other side: −2y = 18 − 5x. Divide both sides by −2: y = (18 − 5x)/(−2) = (5x − 18)/2. (Check with x = 4: y = (20 − 18)/2 = 1, and 5(4) − 2(1) = 18 ✓.)',
        expWrong:{
          A:'(18 − 5x)/2 divides by +2 instead of −2. Dividing by a negative flips the sign of every term in the numerator.',
          B:'(5x + 18)/2 moves the 18 without changing its sign. It was on the right at +18, so it arrives on the left at −18.',
          C:'5x/2 − 18 divides only the first term by 2. The division applies to the whole side, so the 18 is halved as well.'
        },
        tip:'When you divide by a negative, write the division out as a separate line instead of doing it in your head. Every term in the numerator changes sign, and skipping one is the most common way to lose this question.',
        desmos:'Graph 5x-2y=18 and y=(5x-18)/2 on top of each other: same line.',
        desmosLatex:['5x-2y=18','y=(5x-18)/2']
      },
      {
        id:'ALC-16', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear equations in two variables: the missing coefficient in standard form',
        stem:'In the xy-plane, the line with equation 3x + ky = 24 has an x-intercept at (8, 0) and also passes through the point (2, 9). What is the value of k ?',
        choices:{A:'2', B:'3', C:'18', D:'−1.5'},
        correct:'A',
        expCorrect:'The point (8, 0) satisfies 3(8) + k(0) = 24 for any k, so it confirms the 24 but says nothing about k. Use the other point: 3(2) + k(9) = 24, so 6 + 9k = 24, then 9k = 18 and k = 2. (Check: 3(2) + 2(9) = 6 + 18 = 24 ✓.)',
        expWrong:{
          B:'3 is the coefficient of x, copied across. The two coefficients have no reason to be equal.',
          C:'18 is the value of 9k, the penultimate line. Divide by the 9 that multiplies k.',
          D:'−1.5 comes from feeding the point in as (9, 2): 27 + 2k = 24. In an ordered pair the first number is always x.'
        },
        tip:'A point with a zero coordinate kills one of the two unknown terms, which makes it useless for finding the coefficient sitting on that term. Spend it on the constant and use the other point for the coefficient.',
        desmos:'Graph 3x+2y=24 and check that it passes through (8,0) and (2,9).',
        desmosLatex:['3x+2y=24']
      },
      {
        id:'ALC-17', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear equations in two variables: the answer is a difference, not either variable',
        stem:'A print shop bills a job with the equation 12p + 5q = 384, where p is the number of plates used and q is the number of quarts of ink used. For one job, p = 17. For that job, how many more quarts of ink than plates were used?',
        choices:{A:'36', B:'19', C:'53', D:'180'},
        correct:'B',
        expCorrect:'Substitute p = 17: 12(17) + 5q = 384, so 204 + 5q = 384 and 5q = 180, giving q = 36. The question asks how many MORE quarts than plates, which is q − p = 36 − 17 = 19. (Check: 12(17) + 5(36) = 204 + 180 = 384 ✓.)',
        expWrong:{
          A:'36 is q. It is the value the equation gives you, and the question asks for a comparison between q and p.',
          C:'53 is p + q. "How many more A than B" is a subtraction, never a sum.',
          D:'180 is 5q, the penultimate line. Divide by the 5 that multiplies q before comparing anything.'
        },
        tip:'Circle the comparison word in the last sentence. "How many more X than Y" always means X − Y, and the value of X alone will be sitting right there among the choices.',
        desmos:'Graph 12x+5y=384, read y at x=17 (which is 36), and subtract 17.',
        desmosLatex:['12x+5y=384','x=17']
      },
      {
        id:'ALC-18', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear equations in two variables: how much one changes when the other does',
        stem:'The equation 4x + 7y = 210 relates the two variables x and y. If the value of x is decreased by 14, the value of y increases by how much?',
        answer:'8',
        expCorrect:'The total 210 does not move, so whatever the x term loses, the y term must gain. Decreasing x by 14 changes 4x by 4(−14) = −56, so 7y must change by +56, which means y changes by 56/7 = 8. (Check with a concrete pair: (x, y) = (35, 10) works, since 140 + 70 = 210; then x = 21 gives 7y = 210 − 84 = 126, so y = 18, which is 8 more ✓.)',
        tip:'For a question about change, you never need an actual point. Multiply the change in one variable by its coefficient and divide by the other coefficient — or just pick one convenient pair and move it.',
        desmos:'Graph 4x+7y=210 and compare the y values at x=35 and x=21.',
        desmosLatex:['4x+7y=210']
      },
      {
        id:'ALC-19', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equations in two variables: two points rewritten in standard form',
        stem:'In the xy-plane, a line passes through (−1, 6) and (3, −2). Which equation represents that line?',
        choices:{A:'2x − y = 4', B:'−2x + y = 8', C:'2x + y = 4', D:'x + 2y = 4'},
        correct:'C',
        expCorrect:'The rate of change is (−2 − 6)/(3 − (−1)) = −8/4 = −2, so y = −2x + b. Using (−1, 6): 6 = 2 + b, so b = 4 and y = −2x + 4, which rearranges to 2x + y = 4. (Check the other point: 2(3) + (−2) = 4 ✓.)',
        expWrong:{
          A:'2x − y = 4 fails both points: (−1, 6) gives −8 and (3, −2) gives 8. The sign in front of y was dropped when the equation was rearranged.',
          B:'−2x + y = 8 comes from computing the rate of change as (6 − (−2))/(3 − (−1)) = +2, subtracting the y values in the opposite order from the x values. It passes through (−1, 6) but not through (3, −2).',
          D:'x + 2y = 4 uses the reciprocal of the rate of change. The change in y goes on top of the change in x.'
        },
        tip:'When the choices are equations, testing beats deriving: plug in BOTH points. A distractor built from a sign error usually still passes one of them, so one test is never enough.',
        desmos:'Graph 2x+y=4 and plot (-1,6) and (3,-2): the line goes through both.',
        desmosLatex:['2x+y=4']
      },
      {
        id:'ALC-20', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear equations in two variables: reading a second value off the same relationship',
        stem:'The number of liters of water w in a tank and the number of minutes t since a valve was opened are related by the equation 6t + w = 450. How many liters are in the tank 25 minutes after the moment when it holds 300 liters?',
        choices:{A:'275', B:'50', C:'600', D:'150'},
        correct:'D',
        expCorrect:'First find when the tank holds 300 liters: 6t + 300 = 450, so 6t = 150 and t = 25 minutes. Twenty-five minutes later t = 50, so w = 450 − 6(50) = 450 − 300 = 150 liters. (Check: 6(50) + 150 = 450 ✓.)',
        expWrong:{
          A:'275 subtracts the 25 minutes as if they were liters. The equation says each minute costs 6 liters, so 25 minutes cost 150.',
          B:'50 is t, the number of minutes. The question asks for liters, and the two are not interchangeable.',
          C:'600 adds the 150 liters instead of subtracting them. The w term and the t term add to a fixed 450, so when t grows, w shrinks.'
        },
        tip:'When an equation relates two quantities and the question moves one of them, do it in two explicit steps: find the current value of the other variable, move it, then come back. Doing it in one line is how the rate gets skipped.',
        desmos:'Graph 6x+y=450 and read y at x=25 and at x=50.',
        desmosLatex:['6x+y=450']
      },
      {
        id:'ALC-21', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear equations in two variables: a point on the line pinned down by a second condition',
        stem:'In the xy-plane, the point (h, k) lies on the graph of 3x + 4y = 48, and h + k = 15. What is the value of h − k ?',
        choices:{A:'9', B:'12', C:'3', D:'−9'},
        correct:'A',
        expCorrect:'Since (h, k) is on the line, 3h + 4k = 48. The second condition gives k = 15 − h, so 3h + 4(15 − h) = 48, which is 3h + 60 − 4h = 48, so −h = −12 and h = 12. Then k = 3, and h − k = 12 − 3 = 9. (Check: 3(12) + 4(3) = 36 + 12 = 48 ✓ and 12 + 3 = 15 ✓.)',
        expWrong:{
          B:'12 is h. The question asks for the difference of the two coordinates, and h is the one the algebra hands you first.',
          C:'3 is k, the coordinate you get on the second line of the work. It is one subtraction short of the answer.',
          D:'−9 is k − h. The expression printed is h − k, in that order.'
        },
        tip:'A single point on a line is not determined; a point on a line plus one more condition is. Replace one coordinate using the condition, solve, and then read the expression the question actually prints.',
        desmos:'Graph 3x+4y=48 and x+y=15 and read the point where they meet: (12, 3).',
        desmosLatex:['3x+4y=48','x+y=15']
      },

      /* ═══════════ Systems of two linear equations (7) ═══════════ */
      {
        id:'ALC-22', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two linear equations: the question asks for a sum, not a variable',
        stem:'In the system of equations 3x + 4y = 26 and 5x − 2y = 26, what is the value of x + y ?',
        choices:{A:'6', B:'8', C:'4', D:'2'},
        correct:'B',
        expCorrect:'Multiply the second equation by 2 so the y terms cancel: 10x − 4y = 52. Add it to the first: 13x = 78, so x = 6. Then 3(6) + 4y = 26 gives 4y = 8 and y = 2. The question asks for x + y = 6 + 2 = 8. (Check the second equation: 5(6) − 2(2) = 26 ✓.)',
        expWrong:{
          A:'6 is x. Elimination hands you one variable first, and the question was written so that variable is a choice.',
          C:'4 is x − y. Read the operation printed between the letters.',
          D:'2 is y, the second variable you found. The work was right up to the final line.'
        },
        tip:'Scale the equation that needs it BEFORE adding, and when the y terms already have opposite signs, adding is all it takes. Then re-read the last line: sums and differences of the two variables are the standard way this question is made harder.',
        desmos:'Graph 3x+4y=26 and 5x-2y=26; they cross at (6, 2).',
        desmosLatex:['3x+4y=26','5x-2y=26']
      },
      {
        id:'ALC-23', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Systems of two linear equations: the parameter that leaves the lines parallel',
        stem:'In the system of equations 2x − 5y = 9 and 6x + ky = 11, k is a constant. For which value of k does the system have no solution?',
        choices:{A:'−5', B:'15', C:'−15', D:'−45'},
        correct:'C',
        expCorrect:'Scale the first equation so the x terms match the second: multiply by 3 to get 6x − 15y = 27. For no solution the left sides must be identical and the right sides must differ, so k = −15, and then 27 ≠ 11 ✓. The two lines are parallel and never meet.',
        expWrong:{
          A:'−5 copies the coefficient of y from the first equation without scaling it. The x coefficient was tripled, so every term on that side is tripled.',
          B:'15 has the right size and the wrong sign. Tripling −5 gives −15; a positive 15 would make the lines cross.',
          D:'−45 triples the coefficient twice, once to −15 and again to −45. The first equation is multiplied by 3 exactly once.'
        },
        tip:'Make the x coefficients match first. Then: same left side and same right side means infinitely many solutions, and same left side with a different right side means no solution. The difference between the two answers is one glance at the constants.',
        desmos:'Graph 2x-5y=9 and 6x-15y=11: two parallel lines that never meet.',
        desmosLatex:['2x-5y=9','6x-15y=11']
      },
      {
        id:'ALC-24', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Systems of two linear equations: two parameters that make the two equations the same line',
        stem:'The system of equations ax + 6y = 18 and 5x + by = 30 has infinitely many solutions, where a and b are constants. What is the value of a + b ?',
        choices:{A:'3', B:'11', C:'16', D:'13'},
        correct:'D',
        expCorrect:'Infinitely many solutions means one equation is a multiple of the other. The constants give the factor: 18/30 = 3/5, so the first equation is 3/5 of the second. Then a = (3/5)(5) = 3 and 6 = (3/5)b, so b = 10. Therefore a + b = 13. (Check: 3x + 6y = 18 reduces to x + 2y = 6, and 5x + 10y = 30 reduces to x + 2y = 6 — the same line ✓.)',
        expWrong:{
          A:'3 is a alone, stopping at the first of the two constants. The question asks for a + b.',
          B:'11 copies each coefficient from the other equation, giving a = 5 and b = 6. Matching coefficients across is not the same as scaling by a common factor.',
          C:'16 reads a off the 6 in the first equation, giving 6 + 10. The 6 is already a coefficient of that equation; a is the one that is missing.'
        },
        tip:'For infinitely many solutions, every pair of matching numbers has the SAME ratio: a/5 = 6/b = 18/30. Find the ratio from the two constants, because those are the only two numbers you are always given.',
        desmos:'Graph 3x+6y=18 and 5x+10y=30: one line drawn twice.',
        desmosLatex:['3x+6y=18','5x+10y=30']
      },
      {
        id:'ALC-25', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Systems of two linear equations from a context: the difference between the two counts',
        stem:'A hardware store sold 43 hammers and mallets in one morning and took in $1,244. Each hammer sold for $32 and each mallet sold for $20. How many more hammers than mallets were sold that morning?',
        answer:'21',
        expCorrect:'Let h be hammers and m mallets: h + m = 43 and 32h + 20m = 1244. Substitute m = 43 − h into the money equation: 32h + 20(43 − h) = 1244, so 12h + 860 = 1244 and 12h = 384, giving h = 32 and m = 11. The question asks for the difference: 32 − 11 = 21. (Check: 32(32) + 20(11) = 1024 + 220 = 1244 ✓.)',
        tip:'Two unknowns need two equations: one counts the items, the other counts the money. Then look at what is asked — a difference costs one extra subtraction and is the easiest place in the whole problem to lose the point.',
        desmos:'Graph x+y=43 and 32x+20y=1244; they cross at (32, 11), and the answer is the difference.',
        desmosLatex:['x+y=43','32x+20y=1244']
      },
      {
        id:'ALC-26', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Systems of two linear equations with a parameter, given one coordinate of the solution',
        stem:'In the system of equations 5x + 2y = 3k and 3x − 4y = k + 10, k is a constant and the solution has y = −1. What is the value of k ?',
        choices:{A:'6', B:'4', C:'18', D:'−1'},
        correct:'A',
        expCorrect:'Put y = −1 into both equations. First: 5x − 2 = 3k. Second: 3x + 4 = k + 10, so k = 3x − 6. Substitute that into the first: 5x − 2 = 3(3x − 6) = 9x − 18, so 16 = 4x and x = 4. Then k = 3(4) − 6 = 6. (Check: 5(4) + 2(−1) = 18 = 3(6) ✓ and 3(4) − 4(−1) = 16 = 6 + 10 ✓.)',
        expWrong:{
          B:'4 is x. Both unknowns come out of the same two lines of work, and the question names k.',
          C:'18 is 3k, the left-hand value of the first equation. Divide by 3 to finish.',
          D:'−1 is y, the value the question GAVE you. It is data, not an answer.'
        },
        tip:'When a solution coordinate is handed to you, substitute it into both equations right away. That turns a system in x, y and k into a system in x and k, which is one unknown fewer than it looks.',
        desmos:'Graph y=(5x-3k+2)/0 is messy; instead check k=6 by graphing 5x+2y=18 and 3x-4y=16: they cross at (4, -1).',
        desmosLatex:['5x+2y=18','3x-4y=16']
      },
      {
        id:'ALC-27', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two linear equations: eliminating the variable the question does not ask about',
        stem:'At a farmers market, one customer buys 3 bunches of basil and 2 bunches of mint for $23. Another customer buys 5 bunches of basil and 4 bunches of mint for $41. What is the price, in dollars, of one bunch of mint?',
        answer:'4',
        expCorrect:'Let b be the price of basil and m the price of mint: 3b + 2m = 23 and 5b + 4m = 41. Double the first equation: 6b + 4m = 46. Subtract the second: b = 5. Then 3(5) + 2m = 23 gives 2m = 8 and m = 4. (Check: 5(5) + 4(4) = 25 + 16 = 41 ✓.)',
        tip:'Scale the equation whose coefficients are smaller so that the variable you do NOT want disappears. Eliminating mint first would have worked too, but it leaves you with an extra step at the end.',
        desmos:'Graph 3x+2y=23 and 5x+4y=41; they cross at (5, 4), and the price of mint is the y value.',
        desmosLatex:['3x+2y=23','5x+4y=41']
      },
      {
        id:'ALC-28', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Systems of two linear equations with fractional coefficients: the product of the solution',
        stem:'In the system of equations x/2 + y/3 = 7 and x/4 − y/6 = 1.5, what is the value of xy ?',
        choices:{A:'16', B:'60', C:'10', D:'4'},
        correct:'B',
        expCorrect:'Clear the fractions. Multiply the first by 6: 3x + 2y = 42. Multiply the second by 12: 3x − 2y = 18. Add them: 6x = 60, so x = 10, and 2y = 42 − 30 = 12 gives y = 6. The question asks for the product: xy = 10(6) = 60. (Check: 10/2 + 6/3 = 5 + 2 = 7 ✓ and 10/4 − 6/6 = 2.5 − 1 = 1.5 ✓.)',
        expWrong:{
          A:'16 is x + y. The question prints xy, which is a product, not a sum.',
          C:'10 is x. It is the first thing elimination produces once the fractions are gone.',
          D:'4 is x − y. Once again, read the operation between the two letters.'
        },
        tip:'Clear every denominator before you eliminate anything: fractions make sign errors far more likely than big numbers do. Multiply each equation by its own least common denominator, not both by the same one.',
        desmos:'Graph x/2+y/3=7 and x/4-y/6=1.5; they cross at (10, 6).',
        desmosLatex:['x/2+y/3=7','x/4-y/6=1.5']
      },

      /* ═══════════ Linear inequalities (6) ═══════════
         Ninguna dice system / no solution / infinitely many / substitution:
         al-sys se prueba primero y se las llevaría todas. */
      {
        id:'ALC-29', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear inequalities: the least integer that satisfies a strict inequality',
        stem:'What is the least integer value of x that satisfies the inequality 7 − 4x < 2x + 31 ?',
        choices:{A:'−5', B:'−4', C:'−3', D:'5'},
        correct:'C',
        expCorrect:'Add 4x to both sides: 7 < 6x + 31. Subtract 31: −24 < 6x. Divide by the positive 6, so the symbol does not flip: −4 < x. The integers that work start just above −4, and the least of them is −3. (Check: x = −3 gives 7 + 12 = 19 on the left and −6 + 31 = 25 on the right, and 19 < 25 ✓.)',
        expWrong:{
          A:'−5 goes the wrong way along the number line. The solution is x > −4, so −5 is too small: it does not satisfy the inequality at all.',
          B:'−4 is the boundary itself, and the symbol is strict. At x = −4 both sides equal 23, so the inequality is false there.',
          D:'5 comes from computing 31 − 7 = 24 instead of 7 − 31 = −24, which turns the answer positive. Move the 31 to the left or the 7 to the right, but keep the sign it travels with.'
        },
        tip:'Solve for the variable first and read the result as a region of the number line. "Least integer" for x > a is the first integer strictly above a — and when a is itself an integer, the answer is a + 1, not a.',
        desmos:'Graph y=7-4x and y=2x+31 and see that the first is below the second when x is greater than -4.',
        desmosLatex:['y=7-4x','y=2x+31']
      },
      {
        id:'ALC-30', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear inequalities: a budget that must be rounded down',
        stem:'A caterer has $540 to spend on trays. Each fruit tray costs $38 and each cheese tray costs $46. If the caterer buys 7 fruit trays, what is the greatest number of cheese trays that can also be bought?',
        choices:{A:'6', B:'11', C:'14', D:'5'},
        correct:'D',
        expCorrect:'The fruit trays take 7(38) = $266, leaving 540 − 266 = $274. If c is the number of cheese trays, 46c ≤ 274, so c ≤ 5.95…, and c must be a whole number, so c = 5. (Check: 5 cheese trays cost $230 and 266 + 230 = $496 ≤ 540, while 6 would cost $276 and push the total to $542 ✓.)',
        expWrong:{
          A:'6 rounds 5.95 up. Money runs out at 5.95 trays, and you cannot buy the fraction — with a spending limit you always round DOWN.',
          B:'11 divides the whole $540 by 46 and forgets the fruit trays. Only what is left after the first purchase is available.',
          C:'14 divides by 38, the price of the fruit trays. The trays being counted are the cheese ones.'
        },
        tip:'Spending limits round down and requirements round up. Write the inequality, divide, and then ask which direction keeps the statement true — never round to the nearest.',
        desmos:'Graph y=(540-266)/46 or just compute 274/46 = 5.95 and take the whole number below it.',
        desmosLatex:['y=274/46']
      },
      {
        id:'ALC-31', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear inequalities: a compound inequality where only one end answers the question',
        stem:'To qualify for a discount, a shipment must satisfy 18 ≤ 2.5b + 6 ≤ 43, where b is the number of boxes in the shipment. What is the greatest number of boxes a qualifying shipment can have?',
        choices:{A:'14', B:'15', C:'17', D:'5'},
        correct:'A',
        expCorrect:'Work on the right half, since "greatest" lives there: 2.5b + 6 ≤ 43 gives 2.5b ≤ 37 and b ≤ 14.8. The number of boxes is a whole number, so the greatest is 14. (Check: 2.5(14) + 6 = 41, and 18 ≤ 41 ≤ 43 ✓; 15 boxes would give 43.5, just above the limit.)',
        expWrong:{
          B:'15 rounds 14.8 up. At 15 boxes the expression is 43.5, which breaks the upper limit — an upper limit always rounds down.',
          C:'17 divides 43 by 2.5 and ignores the +6. The 6 is part of the expression being bounded, so it has to be subtracted first.',
          D:'5 answers the other end of the compound inequality: 18 ≤ 2.5b + 6 gives b ≥ 4.8, so 5 is the LEAST qualifying number of boxes, not the greatest.'
        },
        tip:'A compound inequality gives you two answers; the question only wants one. Decide first which half of the sandwich the word "greatest" or "least" points to, then solve just that half.',
        desmos:'Graph y=2.5x+6, y=18 and y=43; the qualifying x values run from 4.8 to 14.8.',
        desmosLatex:['y=2.5x+6','y=18','y=43']
      },
      {
        id:'ALC-32', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear inequalities: a floor that forces the count down, with one step left afterwards',
        stem:'A printer tray starts with 480 sheets, and each run of a job uses 26 sheets. The tray may never be left with fewer than 100 sheets. After the greatest number of runs the tray allows, how many sheets are left in it?',
        answer:'116',
        expCorrect:'If n is the number of runs, the sheets left are 480 − 26n, and that must be at least 100: 480 − 26n ≥ 100, so 26n ≤ 380 and n ≤ 14.6. Runs are whole, so the greatest is n = 14. Now answer what was asked: 480 − 26(14) = 480 − 364 = 116 sheets. (Check: a 15th run would leave 90, below the floor ✓.)',
        tip:'Two traps stacked: the division gives a decimal that must be rounded down, and the rounded number is still not the answer. Write the inequality, round, then substitute back into the original expression.',
        desmos:'Graph y=480-26x and y=100; the graphs meet near x=14.6, so use x=14 and read y=116.',
        desmosLatex:['y=480-26x','y=100']
      },
      {
        id:'ALC-33', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear inequalities: the greatest integer in the solution set after distributing a negative',
        stem:'The inequality 5 − 3(x − 2) > 4x − 10 is satisfied by some integers but not by all of them. What is the greatest integer value of x that satisfies it?',
        choices:{A:'1', B:'2', C:'3', D:'7'},
        correct:'B',
        expCorrect:'Distribute: 5 − 3x + 6 > 4x − 10, so 11 − 3x > 4x − 10. Add 3x and add 10 to both sides: 21 > 7x, so x < 3. The greatest integer strictly below 3 is 2. (Check: x = 2 gives 5 − 0 = 5 on the left and −2 on the right, and 5 > −2 ✓; x = 3 gives 2 on both sides, which is not a strict inequality.)',
        expWrong:{
          A:'1 comes from distributing −3(x − 2) as −3x − 6. The −3 multiplies the −2 to give +6, so the left side is 11 − 3x, not −1 − 3x.',
          C:'3 is the boundary itself. At x = 3 both sides equal 2, and the symbol printed is strictly greater than, so 3 is excluded.',
          D:'7 is the coefficient in 21 > 7x, one step short. Divide both sides by 7 — and since 7 is positive, the symbol stays as it is.'
        },
        tip:'Distribute a negative onto BOTH terms inside the parentheses before you move anything. And the symbol only flips when you multiply or divide by a negative, not when you add or subtract one.',
        desmos:'Graph y=5-3(x-2) and y=4x-10; the first is above the second for x less than 3.',
        desmosLatex:['y=5-3(x-2)','y=4x-10']
      },
      {
        id:'ALC-34', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear inequalities: two counts that add to a fixed total, with a floor on the money',
        stem:'A vending machine earns $1.25 for each bottle and $0.75 for each snack it sells. On one day the machine sold 180 items in all and took in at least $171. What is the least number of bottles it could have sold that day?',
        choices:{A:'36', B:'73', C:'72', D:'108'},
        correct:'C',
        expCorrect:'Let b be the bottles, so the snacks are 180 − b. The money is 1.25b + 0.75(180 − b) ≥ 171, which is 1.25b + 135 − 0.75b ≥ 171, so 0.5b ≥ 36 and b ≥ 72. The least value is 72. (Check: 72 bottles and 108 snacks give 1.25(72) + 0.75(108) = 90 + 81 = $171 ✓, exactly the floor.)',
        expWrong:{
          A:'36 is the value of 0.5b, the penultimate line. Divide by the 0.5 that multiplies b — and dividing by 0.5 doubles the number.',
          B:'73 rounds 72 up as if it failed. It does not: 72 bottles bring in exactly $171, and "at least" includes the boundary.',
          D:'108 is the number of snacks, 180 − 72. The question names bottles.'
        },
        tip:'Two counts adding to a fixed total need only one letter: write the second as (total − b). And check whether the boundary itself is allowed — "at least" and "at most" include it, so no rounding is needed when the division comes out whole.',
        desmos:'Graph y=1.25x+0.75(180-x) and y=171; they meet at x=72, and the graph rises after that.',
        desmosLatex:['y=1.25x+0.75(180-x)','y=171']
      }

    ]
  });
})();
