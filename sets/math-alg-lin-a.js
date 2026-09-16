/* SAT Studio question set — Math: Algebra — Linear equations in one variable + Linear functions
   (LFA-01 a LFA-34).
   Destrezas oficiales: al-1var "Linear equations in one variable" (LFA-01..17) y
   al-func "Linear functions" (LFA-18..34), las dos dentro del dominio Algebra.

   OJO con skillOf(): lee `skill` + los primeros 160 caracteres del `stem` y prueba
   las destrezas de Algebra en este orden — al-sys, al-ineq, al-2var, al-func, al-1var.
   Por eso en TODO el set no aparece (en skill ni en el arranque del enunciado):
     · "system", "elimination", "substitution", "simultaneous",
       "no solution", "infinitely many"      → se la lleva al-sys
     · "inequalit", "at least", "at most", "constraint", "budget",
       "capacity", "region"                  → se la lleva al-ineq
     · "solve for", "in terms of", "literal equation", "standard form",
       "point-slope", "intercept form", "two variables"  → se la lleva al-2var
   Las de UNA VARIABLE además evitan lo de al-func ("slope", "intercept",
   "linear function", "linear model", "rate of change", "from a table",
   "from a graph", "parallel", "per hour/minute/year/day") y dicen
   "linear equation" / "isolate" / "value of x", que es el cajón al-1var.
   Las de FUNCIÓN sí dicen "linear function" / "slope" / "intercept" /
   "linear model" / "rate of change" / "from a table" / "from a graph" /
   "unit trap", que es lo que al-func busca.
   Para "sin solución" e "infinitas" se usa la versión hablada ("no value of x
   makes it true" / "true for every value of x"), que dice lo mismo sin mandar la
   pregunta a la destreza de sistemas.

   Reparto: 28 MC + 6 SPR · 8 Fácil · 14 Media · 12 Difícil (5 de ellas extreme).
   Clave: A 6 · B 8 · C 7 · D 7. */
(function(){

  /* ---- Tabla de LFA-20: paso de x = 1, pendiente 4, f(0) = 5 ---- */
  var TBL_STEP1 =
    '<table border="1" cellpadding="6" style="border-collapse:collapse">' +
    '<tr><th>x</th><th>1</th><th>2</th><th>3</th><th>4</th></tr>' +
    '<tr><th>f(x)</th><td>9</td><td>13</td><td>17</td><td>21</td></tr></table>';

  /* ---- Tabla de LFA-30: los pasos de x NO son iguales (3 y 6). Ahí vive el distractor. ---- */
  var TBL_GAPS =
    '<table border="1" cellpadding="6" style="border-collapse:collapse">' +
    '<tr><th>x</th><th>2</th><th>5</th><th>11</th></tr>' +
    '<tr><th>f(x)</th><td>41</td><td>32</td><td>14</td></tr></table>';

  /* ---- Gráfica de LFA-22: f(x) = 5x + 10, de (0, 10) a (6, 40).
         Origen en (55, 200); 40 px por unidad en x, 42 px por cada 10 dólares en y. ---- */
  var FIG_WALKS =
    '<svg viewBox="0 0 330 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of the linear function f in the first quadrant. The horizontal axis is x, the number of dog walks, marked 1 through 6. The vertical axis is f of x, the total charge in dollars, marked 0, 10, 20, 30 and 40. The line rises steadily from the point 0 comma 10 and passes through 2 comma 20, 4 comma 30 and 6 comma 40.">' +
    '<g fill="none" stroke="#e4e4e4" stroke-width="1">' +
    '<path d="M95 32V200M135 32V200M175 32V200M215 32V200M255 32V200M295 32V200"/>' +
    '<path d="M55 158H305M55 116H305M55 74H305M55 32H305"/></g>' +
    '<path d="M55 26V200H312" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<path d="M55 158L295 32" fill="none" stroke="#B8860B" stroke-width="2.5"/>' +
    '<g fill="#B8860B"><circle cx="55" cy="158" r="4"/><circle cx="135" cy="116" r="4"/>' +
    '<circle cx="215" cy="74" r="4"/><circle cx="295" cy="32" r="4"/></g>' +
    '<g font-size="12" font-family="Georgia,serif" fill="#1e1e1e">' +
    '<g text-anchor="middle"><text x="95" y="217">1</text><text x="135" y="217">2</text>' +
    '<text x="175" y="217">3</text><text x="215" y="217">4</text><text x="255" y="217">5</text>' +
    '<text x="295" y="217">6</text>' +
    '<text x="180" y="240" font-size="13">x (walks)</text>' +
    '<text x="14" y="116" font-size="13" transform="rotate(-90 14 116)">f(x) (dollars)</text></g>' +
    '<g text-anchor="end"><text x="48" y="204">0</text><text x="48" y="162">10</text>' +
    '<text x="48" y="120">20</text><text x="48" y="78">30</text><text x="48" y="36">40</text></g>' +
    '</g></svg>';

  window.SAT_SETS.push({
    id: 'math-alg-lin-a',
    title: 'Linear Equations and Linear Functions — Core',
    section: 'math',
    level: 'Media',
    description: 'The two workhorses of the Algebra section: one-variable equations (parentheses, fractions, formulas, parameters, word problems) and linear functions (tables, graphs, and what the slope and the starting value MEAN in the units of the problem).',
    minutes: 42,
    questions: [

      /* ═══════════ Linear equations in one variable (LFA-01 a LFA-17) ═══════════ */

      {
        id:'LFA-01', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear equation with parentheses',
        stem:'If 5(x − 3) = 40, what is the value of x?',
        choices:{A:'5', B:'8', C:'8.6', D:'11'},
        correct:'D',
        expCorrect:'Divide both sides by 5 first: x − 3 = 8. Then add 3 to both sides: x = 11. (Distributing works too: 5x − 15 = 40, so 5x = 55 and x = 11. Check: 5(11 − 3) = 5(8) = 40 ✓.)',
        expWrong:{
          A:'5 comes from 8 − 3. Once you have x − 3 = 8, the 3 is being SUBTRACTED from x, so it comes back by adding: 8 + 3.',
          B:'8 is the value of x − 3, the step right before the answer. One addition of 3 is still missing.',
          C:'8.6 comes from multiplying only the x by 5, as if the equation were 5x − 3 = 40. The 5 multiplies everything inside the parentheses, the −3 included.'
        },
        tip:'A number in front of parentheses gives you two safe routes: divide both sides by it, or distribute it to EVERY term inside. Distributing it to the first term only is the one move that is never allowed.',
        desmos:'Graph y = 5(x − 3) and y = 40. The x-coordinate of the crossing point is the answer.',
        desmosLatex:['y=5(x-3)','y=40']
      },
      {
        id:'LFA-02', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear equation with the variable on both sides',
        stem:'If 7x − 9 = 4x + 15, what is the value of x?',
        choices:{A:'−8', B:'2', C:'8', D:'24'},
        correct:'C',
        expCorrect:'Subtract 4x from both sides: 3x − 9 = 15. Add 9 to both sides: 3x = 24. Divide by 3: x = 8. (Check: 7(8) − 9 = 56 − 9 = 47 and 4(8) + 15 = 32 + 15 = 47 ✓.)',
        expWrong:{
          A:'−8 comes from subtracting 7x instead of 4x, which gives −9 = −3x + 15 and then −24 = −3x. Dividing −24 by −3 gives +8: a negative divided by a negative is positive.',
          B:'2 comes from 15 − 9 instead of 15 + 9. The −9 sits on the LEFT, so it leaves by adding 9 to both sides.',
          D:'24 is the value of 3x, the step before the answer. One division by 3 is still missing.'
        },
        tip:'Move the SMALLER x-term across so the coefficient you divide by stays positive, and remember that a term crosses the equals sign by doing the opposite operation on both sides — not by keeping its sign.',
        desmos:'Graph y = 7x − 9 and y = 4x + 15. Two lines with different steepness meet exactly once, here at x = 8.',
        desmosLatex:['y=7x-9','y=4x+15']
      },
      {
        id:'LFA-03', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Translating a sentence into a linear equation',
        stem:'The sum of a number k and 12 is the same as four times the number. Which equation represents this relationship?',
        choices:{A:'k + 12 = 4k', B:'12 − k = 4k', C:'k + 12 = k + 4', D:'4(k + 12) = k'},
        correct:'A',
        expCorrect:'"The sum of k and 12" is k + 12. "Four times the number" is 4k. "Is the same as" is the equals sign, so k + 12 = 4k. (Solving it: 12 = 3k, so k = 4, and 4 + 12 = 16 = 4(4) ✓.)',
        expWrong:{
          B:'12 − k reads "sum" as a subtraction, and it also reverses the order. A sum adds; nothing here is being taken away.',
          C:'k + 4 is "four MORE than the number". "Four TIMES the number" multiplies, so it has to be 4k.',
          D:'4(k + 12) multiplies the whole sum by 4. The sentence multiplies only the number itself, and the 4k sits on the other side of the equals sign.'
        },
        tip:'Translate one phrase at a time and keep the equals sign where the sentence puts it ("is", "is the same as", "equals"). Then test your equation with an easy number before trusting it.',
        desmos:'Graph y = x + 12 and y = 4x. They meet at x = 4, the number the sentence describes.',
        desmosLatex:['y=x+12','y=4x']
      },
      {
        id:'LFA-04', type:'spr', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear equation with a fractional coefficient',
        stem:'If 2x/3 + 7 = 19, what is the value of x?',
        answer:'18',
        expCorrect:'Subtract 7 from both sides: 2x/3 = 12. Multiply both sides by 3: 2x = 36. Divide by 2: x = 18. (Check: 2(18)/3 + 7 = 36/3 + 7 = 12 + 7 = 19 ✓.) Answer: 18.',
        tip:'Clear the fraction by multiplying BOTH sides by the denominator, and do it only after the loose constant has been moved. A shortcut that works every time: multiply the whole equation by 3 at the start, which turns 2x/3 + 7 = 19 into 2x + 21 = 57.',
        desmos:'Graph y = 2x/3 + 7 and y = 19 and read the x-coordinate where they cross.',
        desmosLatex:['y=2x/3+7','y=19']
      },
      {
        id:'LFA-05', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Rewriting a formula to isolate a letter',
        stem:'A boat repair shop uses the formula C = 45h + 80, where C is the total charge in dollars for a job and h is the number of hours of labor. Which equation gives h?',
        choices:{A:'h = (C − 80)/45', B:'h = (C + 80)/45', C:'h = C/45 − 80', D:'h = (80 − C)/45'},
        correct:'A',
        expCorrect:'Treat h exactly like an x. Subtract 80 from both sides: C − 80 = 45h. Divide both sides by 45: h = (C − 80)/45. (Check with C = 305: h = 225/45 = 5, and 45(5) + 80 = 305 ✓.)',
        expWrong:{
          B:'h = (C + 80)/45 moves the 80 the wrong way. The 80 is ADDED on the right, so it comes off by subtracting it from both sides.',
          C:'h = C/45 − 80 divides only the C by 45 and leaves the 80 outside. When you divide a side of an equation you must divide the WHOLE side, which would give C/45 − 80/45.',
          D:'h = (80 − C)/45 has the subtraction backwards. C is the bigger total and 80 is what is taken off it, so the numerator is C − 80.'
        },
        tip:'Isolating a letter follows the same order as working with a number: undo what is added or subtracted first, then undo what multiplies. If you divide, divide every term on that side.',
        desmos:'Graph y = 45x + 80 and a horizontal line at a total charge you pick, say y = 305. The x of the crossing point is the number of hours.',
        desmosLatex:['y=45x+80','y=305']
      },
      {
        id:'LFA-06', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equation with parentheses on both sides',
        stem:'If 4(2x − 5) = 3(x + 5) + 10, what is the value of x?',
        choices:{A:'1', B:'6', C:'7', D:'9'},
        correct:'D',
        expCorrect:'Distribute on both sides: 8x − 20 = 3x + 15 + 10, so 8x − 20 = 3x + 25. Subtract 3x: 5x − 20 = 25. Add 20: 5x = 45. Divide by 5: x = 9. (Check: 4(18 − 5) = 4(13) = 52 and 3(14) + 10 = 42 + 10 = 52 ✓.)',
        expWrong:{
          A:'1 comes from subtracting the 20 on the right instead of adding it: 25 − 20 = 5, then 5/5. The −20 is on the LEFT, so it leaves by adding 20 to both sides.',
          B:'6 comes from multiplying only the 2x by 4, as if the left side were 8x − 5. The 4 has to reach the −5 as well.',
          C:'7 comes from multiplying only the x by 3 on the right, as if that side were 3x + 5 + 10. The 3 has to reach the +5 too.'
        },
        tip:'Distribute completely on both sides BEFORE moving anything. Most errors in these are not in the algebra but in a factor that never reached the second term inside its parentheses.',
        desmos:'Graph y = 4(2x − 5) and y = 3(x + 5) + 10 and read the x-coordinate where the two lines meet.',
        desmosLatex:['y=4(2x-5)','y=3(x+5)+10']
      },
      {
        id:'LFA-07', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equation with two fractions',
        stem:'If (x + 2)/3 − (x − 4)/5 = 2, what is the value of x?',
        choices:{A:'−10', B:'4', C:'8', D:'16'},
        correct:'B',
        expCorrect:'Multiply EVERY term by 15, the least common denominator: 5(x + 2) − 3(x − 4) = 30. Distribute, watching the minus: 5x + 10 − 3x + 12 = 30, so 2x + 22 = 30 and 2x = 8, giving x = 4. (Check: 6/3 − 0/5 = 2 − 0 = 2 ✓.)',
        expWrong:{
          A:'−10 comes from multiplying the two fractions by 15 but leaving the 2 on the right untouched: 2x + 22 = 2. Whatever you multiply one side by, you multiply the other side by too.',
          C:'8 is the value of 2x, the step before the answer. One division by 2 is still missing.',
          D:'16 comes from distributing the minus sign to the x only: −3(x − 4) written as −3x − 12. A minus in front of a parenthesis flips BOTH signs inside, so it is −3x + 12.'
        },
        tip:'Kill the fractions first: multiply every term on both sides by the least common denominator. Then put the whole numerator in parentheses before distributing, so the sign in front reaches each of its terms.',
        desmos:'Graph y = (x + 2)/3 − (x − 4)/5 and y = 2 and look at where they cross.',
        desmosLatex:['y=(x+2)/3-(x-4)/5','y=2']
      },
      {
        id:'LFA-08', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Linear equation from a fixed charge plus a variable charge',
        stem:'A pottery studio charges a flat bench fee of $18 plus $6.50 for each item that is fired in the kiln. Ines paid $63.50 in total. How many items did she have fired?',
        answer:'7',
        expCorrect:'Write the total as one equation: 18 + 6.5n = 63.50. Subtract the part that does not change: 6.5n = 45.50. Divide by the amount each item adds: n = 45.50/6.5 = 7. (Check: 18 + 6.5(7) = 18 + 45.50 = 63.50 ✓.) Answer: 7.',
        tip:'In a "fixed amount plus an amount for each item" problem, the fixed part is added ONCE and never multiplied. Subtract it first, and only then divide by the repeated amount.',
        desmos:'Graph y = 18 + 6.5x and y = 63.5. The x-coordinate where they meet is the number of items.',
        desmosLatex:['y=18+6.5x','y=63.5']
      },
      {
        id:'LFA-09', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Rewriting a formula to isolate a letter inside a sum',
        stem:'The area T of a trapezoid is given by T = h(a + b)/2, where a and b are the lengths of the two bases and h is the height. Which equation isolates a?',
        choices:{A:'a = 2T/h − b', B:'a = (2T − b)/h', C:'a = T/(2h) − b', D:'a = 2T/h + b'},
        correct:'A',
        expCorrect:'Multiply both sides by 2: 2T = h(a + b). Divide both sides by h: 2T/h = a + b. Subtract b: a = 2T/h − b. (Check with h = 4, a = 7, b = 3: T = 4(10)/2 = 20, and 2(20)/4 − 3 = 10 − 3 = 7 ✓.)',
        expWrong:{
          B:'a = (2T − b)/h subtracts b before dividing by h. The b is added INSIDE the parentheses that h multiplies, so the division by h has to happen first.',
          C:'a = T/(2h) − b divides by 2 instead of multiplying by it. The 2 is under the whole right side, so it comes off by multiplying both sides by 2.',
          D:'a = 2T/h + b moves the b without changing its sign. It is added to a, so it leaves by subtracting it from both sides.'
        },
        tip:'Unwrap the letter you want from the outside in: first whatever divides or multiplies the WHOLE side, then whatever is added inside. Check your rewrite by plugging in easy numbers that satisfy the original formula.',
        desmos:'Fix h = 4 and b = 3 and graph y = 2x/4 − 3 with x standing for T. Reading it at T = 20 gives a = 7.',
        desmosLatex:['y=2x/4-3']
      },
      {
        id:'LFA-10', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equation that is true for every value of x',
        stem:'In the equation 6x + a = 2(3x + 7), a is a constant. For which value of a is the equation true for every value of x?',
        choices:{A:'0', B:'3', C:'7', D:'14'},
        correct:'D',
        expCorrect:'Expand the right side: 2(3x + 7) = 6x + 14. The equation is now 6x + a = 6x + 14. The x-terms already match, so the two sides are identical exactly when the constants match: a = 14. (With a = 14 the equation reads 6x + 14 = 6x + 14, true no matter what x is.)',
        expWrong:{
          A:'0 assumes the constant has to disappear. Setting a = 0 gives 6x = 6x + 14, which is false for every x — the opposite of what the question asks.',
          B:'3 is the coefficient sitting inside the parentheses, not the constant term. The number that must be matched comes from 2 times 7.',
          C:'7 is the constant inside the parentheses before the 2 reaches it. The 2 multiplies the 7 as well, giving 14.'
        },
        tip:'An equation is true for every value of x exactly when both sides become the SAME expression: matching x-coefficients AND matching constants. Expand first, then compare the two parts separately.',
        desmos:'Graph y = 6x + 14 and y = 2(3x + 7): one line sits exactly on top of the other.',
        desmosLatex:['y=6x+14','y=2(3x+7)']
      },
      {
        id:'LFA-11', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equation with a parameter that makes it never true',
        stem:'In the equation 5(2x − 3) = kx + 8, k is a constant. For which value of k is there no value of x that makes the equation true?',
        choices:{A:'−10', B:'2', C:'5', D:'10'},
        correct:'D',
        expCorrect:'Expand the left side: 10x − 15 = kx + 8. Gather the x-terms: (10 − k)x = 23. If 10 − k is any nonzero number you can divide and get an x, so the only way to have no possible x is 10 − k = 0, that is k = 10 — and then the equation reads −15 = 8, which is false. (k = 10 works because the constants do NOT match.)',
        expWrong:{
          A:'−10 is a sign slip. Setting 10 − k = 0 gives k = +10; with k = −10 the equation becomes 20x = 23, which has a perfectly good answer.',
          B:'2 is the coefficient of x inside the parentheses. The coefficient that must be matched is the one AFTER distributing, which is 5 times 2.',
          C:'5 is the factor in front of the parentheses, not the coefficient of x on the left. Distribute first: 5 times 2x is 10x.'
        },
        tip:'Make the x-terms identical. If the constants then disagree, no x can work; if the constants also agree, every x works. Both questions are answered by comparing the two sides AFTER expanding.',
        desmos:'Graph y = 5(2x − 3) and y = 10x + 8: two lines that run side by side and never meet.',
        desmosLatex:['y=5(2x-3)','y=10x+8']
      },
      {
        id:'LFA-12', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear equation from a mixture',
        stem:'A lab technician combines an acid mix that is 20% acid with 12 liters of an acid mix that is 50% acid. The combined liquid is 30% acid. How many liters of the 20% mix were used?',
        choices:{A:'12', B:'24', C:'36', D:'60'},
        correct:'B',
        expCorrect:'Let x be the liters of the 20% mix. Acid before = 0.20x + 0.50(12) = 0.2x + 6. Acid after = 0.30(x + 12) = 0.3x + 3.6. Set them equal: 0.2x + 6 = 0.3x + 3.6, so 2.4 = 0.1x and x = 24. (Check: 24 + 12 = 36 liters holding 4.8 + 6 = 10.8 liters of acid, and 10.8/36 = 0.30 ✓.)',
        expWrong:{
          A:'12 is the amount given in the problem — the liters of the 50% mix, not the amount you were asked for.',
          C:'36 is the total volume of the combined liquid. It is the sum x + 12 once x is known, one step past what the question asks.',
          D:'60 comes from writing the right side as 0.30x instead of 0.30(x + 12). After mixing, the 30% applies to the WHOLE batch, the 12 liters included.'
        },
        tip:'In a mixture problem, count the same thing on both sides: the amount of pure substance before mixing equals the amount after. The percentage after mixing always multiplies the TOTAL volume.',
        desmos:'Graph y = 0.2x + 6 and y = 0.3(x + 12) and read the x-coordinate where they cross.',
        desmosLatex:['y=0.2x+6','y=0.3(x+12)']
      },
      {
        id:'LFA-13', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear equation from an age relationship',
        stem:'Dalia is 4 years older than twice the age of her cousin Nadim. In 6 years, the sum of their two ages will be 61. How old is Nadim now?',
        choices:{A:'15', B:'17', C:'21', D:'34'},
        correct:'A',
        expCorrect:'Let n be the age of Nadim now, so Dalia is 2n + 4 now. In 6 years they are n + 6 and 2n + 10. Their sum: (n + 6) + (2n + 10) = 61, so 3n + 16 = 61, 3n = 45 and n = 15. (Check: now 15 and 34; in 6 years 21 and 40, and 21 + 40 = 61 ✓.)',
        expWrong:{
          B:'17 comes from adding the 6 years to only one of them: (n + 6) + (2n + 4) = 61. Time passes for both cousins, so both ages go up by 6.',
          C:'21 is the age of Nadim IN 6 YEARS, not now. The question asks for his age today, which is 6 less.',
          D:'34 is the age of Dalia now. It answers the right equation about the wrong person.'
        },
        tip:'Name the younger person as the variable, write every other age from it, and add the same amount of time to EVERY age before using the future condition. Then re-read which person the question asked about.',
        desmos:'Graph y = 3x + 16 and y = 61: the x-coordinate where they meet is the age of Nadim now.',
        desmosLatex:['y=3x+16','y=61']
      },
      {
        id:'LFA-14', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear equation from two machines working together',
        stem:'Two printers work on the same order. The faster one prints 24 pages each minute and the slower one prints 18 pages each minute. The faster printer starts alone and runs for 15 minutes before the slower one is switched on; from then on both print until the order of 2,250 pages is finished. For how many minutes does the slower printer run?',
        answer:'45',
        expCorrect:'Let t be the minutes the slower printer runs. The faster one runs t + 15 minutes, so it prints 24(t + 15) pages and the slower one prints 18t pages. Together: 24(t + 15) + 18t = 2250, so 24t + 360 + 18t = 2250, 42t = 1890 and t = 45. (Check: the faster one runs 60 minutes for 1,440 pages, the slower one 45 minutes for 810 pages, and 1,440 + 810 = 2,250 ✓.) Answer: 45.',
        tip:'When one worker starts earlier, give the LATE one the plain variable and write the early one as the variable plus the head start. Pages = pages each minute × minutes, and the two amounts add up to the job.',
        desmos:'Graph y = 24(x + 15) + 18x and y = 2250; the x-coordinate where they meet is the running time of the slower printer.',
        desmosLatex:['y=24(x+15)+18x','y=2250']
      },
      {
        id:'LFA-15', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear equation with a parameter, then a second computation',
        stem:'The equation 4(3x − a) = 5x + 26 has the solution x = 6, where a is a constant. What is the value of a² − a?',
        choices:{A:'4', B:'12', C:'16', D:'20'},
        correct:'B',
        expCorrect:'Put x = 6 into both sides: 4(18 − a) = 30 + 26 = 56. So 72 − 4a = 56, giving 4a = 16 and a = 4. The question asks for a² − a = 16 − 4 = 12. (Check the original: 4(18 − 4) = 4(14) = 56 and 5(6) + 26 = 56 ✓.)',
        expWrong:{
          A:'4 is the value of a itself. It is the last number you compute, but not the one the question asks for.',
          C:'16 is a² alone. The expression asked for subtracts a from it: 16 − 4.',
          D:'20 is a² + a. The expression is a² − a, so the second term is subtracted, not added.'
        },
        tip:'When a question gives you the solution and asks for the parameter, substitute the solution and treat the parameter as the unknown. Then underline what is actually being asked — it is often an expression built from the parameter, not the parameter.',
        desmos:'Graph y = 4(18 − x) and y = 56 to see that a = 4, then evaluate x² − x at that value.',
        desmosLatex:['y=4(18-x)','y=56']
      },
      {
        id:'LFA-16', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear equation with two parameters that is true for every value of x',
        stem:'In the equation a(4x + 3) = 12x + b − 5, a and b are constants and the equation is true for every value of x. What is the value of a + b?',
        choices:{A:'7', B:'12', C:'17', D:'21'},
        correct:'C',
        expCorrect:'Expand the left side: 4ax + 3a = 12x + (b − 5). For the two sides to be identical, the x-coefficients must match: 4a = 12, so a = 3. The constants must match too: 3a = b − 5, that is 9 = b − 5, so b = 14. Therefore a + b = 3 + 14 = 17. (Check: 3(4x + 3) = 12x + 9 and 12x + 14 − 5 = 12x + 9 ✓.)',
        expWrong:{
          A:'7 comes from writing b = 3a − 5 = 4. The −5 is on the SAME side as b, so undoing it adds 5: b = 3a + 5.',
          B:'12 comes from ignoring the −5 and setting 3a = b, which gives b = 9. The constant on the right is b − 5, not b.',
          D:'21 comes from a = 12/3 = 4, dividing by the 3 inside the parentheses. The coefficient of x on the left is 4a, so a = 12/4.'
        },
        tip:'"True for every value of x" means the two sides are the same expression. Expand, then write TWO small equations — one matching the x-coefficients, one matching the constants — and solve them in that order.',
        desmos:'Graph y = 3(4x + 3) and y = 12x + 14 − 5: the two lines land exactly on top of each other.',
        desmosLatex:['y=3(4x+3)','y=12x+14-5']
      },
      {
        id:'LFA-17', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Rewriting an equation to isolate a letter that appears on both sides',
        stem:'The equation y = 3(y − k) + 8x relates the quantities x, y and k. Which equation gives k?',
        choices:{A:'k = (y − 8x)/3', B:'k = (4y − 8x)/3', C:'k = 2y + 8x', D:'k = (2y + 8x)/3'},
        correct:'D',
        expCorrect:'Expand: y = 3y − 3k + 8x. Add 3k to both sides and subtract y: 3k = 3y − y + 8x = 2y + 8x. Divide by 3: k = (2y + 8x)/3. (Check with y = 10 and x = 1: k = 28/3, and 3(10 − 28/3) + 8 = 30 − 28 + 8 = 10 = y ✓.)',
        expWrong:{
          A:'k = (y − 8x)/3 treats the two y-terms as cancelling and keeps the wrong sign on the 8x. Collecting 3y − y leaves 2y, and the 8x arrives on the k-side as +8x.',
          B:'k = (4y − 8x)/3 adds the y-terms instead of subtracting: 3y + y. The lone y starts on the LEFT, so bringing it over subtracts it from 3y.',
          C:'k = 2y + 8x is the numerator by itself — the step before the answer. The 3 that multiplies k still has to be divided out.'
        },
        tip:'When the letter you want shows up more than once, first get every copy of it onto one side and every other term onto the other, then factor it out and divide by what multiplies it. Expanding before you move anything keeps the signs honest.',
        desmos:'Fix x = 1 and graph y = (2x + 8)/3 with x standing for the other letter: at 10 it gives 28/3, which is the k that makes the original equation true.',
        desmosLatex:['y=(2x+8)/3']
      },

      /* ═══════════ Linear functions (LFA-18 a LFA-34) ═══════════ */

      {
        id:'LFA-18', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Evaluating a linear function',
        stem:'The function f is defined by f(x) = 7x − 12. What is the value of f(5)?',
        choices:{A:'−49', B:'5', C:'23', D:'35'},
        correct:'C',
        expCorrect:'Replace every x by 5: f(5) = 7(5) − 12 = 35 − 12 = 23. (Check by adding the 12 back: 23 + 12 = 35 = 7(5) ✓.)',
        expWrong:{
          A:'−49 is 7(5 − 12), which pulls the −12 inside the multiplication. Only x is multiplied by 7; the 12 comes off afterwards.',
          B:'5 is the input, the number that goes IN. f(5) asks for what comes OUT once the rule has been applied to it.',
          D:'35 is 7(5), the step before the answer. The rule still has 12 to subtract.'
        },
        tip:'f(5) means "write 5 wherever x appears, then compute". Write the whole substitution down before doing arithmetic and keep the order of operations: multiply first, add or subtract second.',
        desmos:'Graph y = 7x − 12 and click on the line at x = 5; the y-value it shows is f(5).',
        desmosLatex:['y=7x-12','(5,23)']
      },
      {
        id:'LFA-19', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Meaning of the slope of a linear model in context',
        stem:'A ball of dough is taken out of a refrigerator, and its temperature is modeled by T(m) = 4 + 1.5m, where T(m) is the temperature of the dough in degrees Celsius m minutes after it left the refrigerator. Which of the following is the best interpretation of the number 1.5 in this model?',
        choices:{
          A:'The temperature of the dough rises by 1.5 degrees Celsius each minute.',
          B:'The temperature of the dough was 1.5 degrees Celsius when it left the refrigerator.',
          C:'The dough needs 1.5 minutes to warm up by 1 degree Celsius.',
          D:'The temperature of the dough is 1.5 degrees Celsius one minute after it left the refrigerator.'
        },
        correct:'A',
        expCorrect:'In a model written as a starting value plus a number times the input, that number is the slope, and it says how much the output changes when the input goes up by 1. Here m grows by one minute and T grows by 1.5, so the dough warms 1.5 degrees Celsius each minute. (Check: T(0) = 4, T(1) = 5.5, T(2) = 7 — a jump of 1.5 every time ✓.)',
        expWrong:{
          B:'The temperature at the start is the number standing alone, 4, not the one attached to m. This swaps the slope with the starting value.',
          C:'This turns the slope upside down. A rise of 1.5 degrees each minute means one degree takes 1/1.5 ≈ 0.67 minutes, not 1.5 minutes.',
          D:'After one minute the temperature is T(1) = 4 + 1.5 = 5.5 degrees. The 1.5 is the CHANGE during that minute, not the temperature itself.'
        },
        tip:'In a linear model the number multiplying the input is a change PER UNIT of input, and the lone number is the output when the input is 0. Say the interpretation out loud with both units attached ("1.5 degrees for each extra minute") and the wrong options fall apart.',
        desmos:'Graph y = 4 + 1.5x and trace it: every time x moves right by 1, y climbs by 1.5.',
        desmosLatex:['y=4+1.5x']
      },
      {
        id:'LFA-20', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear function from a table',
        stem:'The table shows four values of x and the corresponding values of the linear function f. Which equation defines f?',
        figure: TBL_STEP1,
        choices:{A:'f(x) = 9x + 4', B:'f(x) = 4x + 9', C:'f(x) = 4x − 5', D:'f(x) = 4x + 5'},
        correct:'D',
        expCorrect:'Every time x goes up by 1, f(x) goes up by 4 (9 → 13 → 17 → 21), so the slope is 4. To get the value at x = 0, step back once from x = 1: 9 − 4 = 5. So f(x) = 4x + 5. (Check x = 3: 4(3) + 5 = 17 ✓.)',
        expWrong:{
          A:'f(x) = 9x + 4 swaps the two numbers: 9 is a value of the function and 4 is the step between rows. The number multiplying x has to be the step.',
          B:'f(x) = 4x + 9 uses f(1) = 9 as if it were the value at x = 0. The table starts at x = 1, so one step of 4 has to be undone first.',
          C:'f(x) = 4x − 5 computes the constant as 4 − 9 = −5. The subtraction runs the other way: 9 − 4 = 5.'
        },
        tip:'From a table with equal steps in x, the slope is the change in f(x) divided by the change in x, and the constant is what you reach by stepping BACK to x = 0. Never read the first row as the constant unless that row is x = 0.',
        desmos:'Plot the four points and add y = 4x + 5; the line goes through every one of them.',
        desmosLatex:['(1,9)','(2,13)','(3,17)','(4,21)','y=4x+5']
      },
      {
        id:'LFA-21', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Finding the input of a linear function from its output',
        stem:'The function f is defined by f(x) = 48 − 6x. If f(a) = 12, what is the value of a?',
        choices:{A:'−6', B:'6', C:'10', D:'12'},
        correct:'B',
        expCorrect:'f(a) = 12 means 48 − 6a = 12. Subtract 48 from both sides: −6a = −36. Divide by −6: a = 6. (Check: 48 − 6(6) = 48 − 36 = 12 ✓.)',
        expWrong:{
          A:'−6 keeps a minus sign that should cancel. Both sides end up negative, −36 divided by −6, and a negative divided by a negative is positive.',
          C:'10 comes from (48 + 12)/6. The 48 is ADDED on the left, so it leaves by subtracting it from both sides, which gives (48 − 12)/6 = 6.',
          D:'12 is the OUTPUT the question handed you. f(a) = 12 says what comes out; a is what went in.'
        },
        tip:'"f(a) = number" is an equation in disguise: replace the rule by the number and work back to the input. Before bubbling, ask whether the question wanted the input or the output.',
        desmos:'Graph y = 48 − 6x and y = 12; the x-coordinate where they cross is a.',
        desmosLatex:['y=48-6x','y=12']
      },
      {
        id:'LFA-22', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Linear function from a graph',
        stem:'The graph shows the linear function f, where f(x) is the amount a dog walker charges, in dollars, during a week in which x walks are done. What is the value of f(9)?',
        figure: FIG_WALKS,
        answer:'55',
        expCorrect:'Read two points off the line: (0, 10) and (2, 20). The slope is (20 − 10)/(2 − 0) = 5 dollars for each walk, and the line meets the vertical axis at 10, so f(x) = 5x + 10. Then f(9) = 5(9) + 10 = 45 + 10 = 55. (Check against the graph: f(6) = 40, and three more walks add 3(5) = 15, giving 55 ✓.) Answer: 55.',
        tip:'Read a line off a graph in two moves: the height where it meets the vertical axis is the constant, and the rise between two marked points divided by the run is the slope. With the equation in hand you can evaluate inputs the graph does not even show.',
        desmos:'Graph y = 5x + 10 and confirm it passes through the marked points (2, 20) and (6, 40); then read the line at x = 9.',
        desmosLatex:['y=5x+10','(9,55)']
      },
      {
        id:'LFA-23', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Meaning of the y-intercept of a linear model in context',
        stem:'The height of a young mango tree is modeled by h(t) = 1.5 + 0.15t, where h(t) is the height of the tree in meters t months after it was planted. Which of the following is the best interpretation of the number 1.5 in this model?',
        choices:{
          A:'The number of meters the tree grows each month.',
          B:'The number of months the tree needed to reach a height of 0.15 meters.',
          C:'The height of the tree, in meters, on the day it was planted.',
          D:'The height of the tree, in meters, one month after it was planted.'
        },
        correct:'C',
        expCorrect:'The input t counts months after planting, so "the day it was planted" is t = 0. Putting t = 0 into the model: h(0) = 1.5 + 0.15(0) = 1.5 meters. The lone number in a linear model is always the output when the input is 0. (Check: after one month h(1) = 1.65, exactly 0.15 more ✓.)',
        expWrong:{
          A:'The growth each month is 0.15, the number attached to t. This swaps the starting value with the slope.',
          B:'This reads the model backwards. 0.15 is a height added each month, not a height the tree has to reach, and 1.5 is measured in meters, not months.',
          D:'After one month the height is h(1) = 1.5 + 0.15 = 1.65 meters. The 1.5 belongs to t = 0, not to t = 1.'
        },
        tip:'To interpret the constant term, set the input to 0 and say what that means in the words of the problem. Attach the units of the OUTPUT to it: if your sentence ends in the units of the input, you picked the wrong number.',
        desmos:'Graph y = 1.5 + 0.15x and look at where the line meets the vertical axis: that height is 1.5.',
        desmosLatex:['y=1.5+0.15x']
      },
      {
        id:'LFA-24', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Reasonable domain of a linear model in context',
        stem:'A water tank holds 60 gallons when it is full. A valve is opened and the water drains out steadily, so the volume left is modeled by V(t) = 60 − 4t, where V(t) is the volume in gallons and t is the number of minutes since the valve was opened. Which of the following is the most reasonable domain of V for this situation?',
        choices:{A:'0 ≤ t ≤ 4', B:'0 ≤ t ≤ 15', C:'0 ≤ t ≤ 60', D:'All real numbers'},
        correct:'B',
        expCorrect:'Time cannot run backwards, so the left end is t = 0. The model stops describing reality once the tank is empty: 60 − 4t = 0 gives t = 15 minutes. The sensible inputs run from 0 to 15. (Check: V(15) = 60 − 60 = 0, while V(16) would be −4 gallons, which no tank can hold.)',
        expWrong:{
          A:'4 is the number of gallons that leave each minute, not a number of minutes. Using it as the far end empties the tank 11 minutes too early.',
          C:'60 is the volume the tank holds in gallons, not a time. At t = 60 the model returns −180 gallons.',
          D:'All real numbers ignores the situation: negative t is time before the valve was opened, and large t gives a negative volume.'
        },
        tip:'A domain in context has two ends: where the quantity starts (usually 0) and where the model stops describing reality, which is often where the output reaches 0. Set the expression equal to 0 to find the far end, and check the units of any number you borrow from the problem.',
        desmos:'Graph y = 60 − 4x and see where the line crosses the horizontal axis: at x = 15 the tank is empty.',
        desmosLatex:['y=60-4x','y=0']
      },
      {
        id:'LFA-25', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Comparing two linear functions',
        stem:'The functions f and g are defined by f(x) = 9x + 4 and g(x) = 3x + 28. For one value of x the two functions produce the same output. What is that output?',
        choices:{A:'4', B:'24', C:'32', D:'40'},
        correct:'D',
        expCorrect:'Set the two rules equal: 9x + 4 = 3x + 28. Subtract 3x: 6x + 4 = 28. Subtract 4: 6x = 24, so x = 4. The question asks for the OUTPUT, so evaluate either function there: f(4) = 36 + 4 = 40. (Check with the other one: g(4) = 12 + 28 = 40 ✓.)',
        expWrong:{
          A:'4 is the x-value where the two functions agree — the input, not the output. It is also the constant of f, which makes it doubly tempting.',
          B:'24 is the value of 6x, the step before dividing by 6. Even finished, that road gives the input.',
          C:'32 adds the two constants, 4 + 28. Constants from different rules cannot be added; the shared value comes from substituting the input into one of the functions.'
        },
        tip:'Two linear functions agree where their rules are equal, so solve that equation first — then read the question again. If it asks for the value of the functions, you still have to substitute x back in.',
        desmos:'Graph y = 9x + 4 and y = 3x + 28. The crossing point is (4, 40): the first coordinate is the input, the second is the output the question wants.',
        desmosLatex:['y=9x+4','y=3x+28']
      },
      {
        id:'LFA-26', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear function notation: f(x + 2) against f(x) + 2',
        stem:'The function f is defined by f(x) = 5x − 3. What is the value of f(x + 2) − f(x)?',
        choices:{A:'2', B:'7', C:'10', D:'5x + 7'},
        correct:'C',
        expCorrect:'f(x + 2) means writing x + 2 wherever x appears: f(x + 2) = 5(x + 2) − 3 = 5x + 10 − 3 = 5x + 7. Subtract f(x) = 5x − 3: (5x + 7) − (5x − 3) = 10. (Check with x = 1: f(3) = 12 and f(1) = 2, and 12 − 2 = 10 ✓.)',
        expWrong:{
          A:'2 treats f(x + 2) as f(x) + 2, which would leave a difference of 2. Adding 2 to the INPUT adds 5(2) = 10 to the output, because the 5 multiplies whatever goes in.',
          B:'7 is f(2) = 5(2) − 3. That replaces the whole input by 2 instead of shifting it by 2.',
          D:'5x + 7 is f(x + 2) on its own. The expression still has f(x) to subtract.'
        },
        tip:'f(x + 2) shifts the INPUT; f(x) + 2 shifts the OUTPUT. For a linear function with slope m, adding h to the input adds m·h to the output, so the two are the same thing only when m = 1.',
        desmos:'Graph y = 5x − 3 and y = 5(x + 2) − 3: two lines that never meet, always exactly 10 apart vertically.',
        desmosLatex:['y=5x-3','y=5(x+2)-3']
      },
      {
        id:'LFA-27', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Slope of a linear function from two of its values',
        stem:'For the linear function g, g(3) = 17 and g(7) = 29. What is the value of g(12)?',
        answer:'44',
        expCorrect:'The slope is the change in output over the change in input: (29 − 17)/(7 − 3) = 12/4 = 3. From g(7) = 29, step five more units to x = 12: 29 + 5(3) = 44. (Building the rule gives the same thing: g(x) = 3x + 8, and g(12) = 36 + 8 = 44 ✓.) Answer: 44.',
        tip:'Two values pin a linear function down completely: divide the change in the outputs by the change in the inputs to get the slope, then step from a point you already know. Divide by the CHANGE in x, never by x itself.',
        desmos:'Graph y = 3x + 8 and check that it passes through (3, 17) and (7, 29); then read it at x = 12.',
        desmosLatex:['y=3x+8','(12,44)']
      },
      {
        id:'LFA-28', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Meaning of the slope in a decreasing linear model',
        stem:'The battery charge of a delivery drone is modeled by p(t) = 100 − 2.5t, where p(t) is the percent of the battery that is left and t is the number of minutes the drone has been flying. Which of the following is the best interpretation of the number 2.5 in this model?',
        choices:{
          A:'The battery loses 2.5 percentage points of charge each minute of flight.',
          B:'The battery loses 2.5 percent of whatever charge is left each minute of flight.',
          C:'The drone can fly for 2.5 minutes before the battery is empty.',
          D:'The battery holds 2.5 percent of its charge when the drone takes off.'
        },
        correct:'A',
        expCorrect:'The number attached to t is the change for each minute, and the minus sign in front of it makes that change a loss. Every extra minute of flight takes the charge down by 2.5 of the 100 points. (Check: p(0) = 100, p(1) = 97.5, p(2) = 95 — the same drop of 2.5 each time ✓.)',
        expWrong:{
          B:'Taking 2.5 percent OF the charge that is left would shrink the loss as the battery drains, which is a curve, not a straight line. Here the loss is the same 2.5 points every minute.',
          C:'2.5 is not a time. The drone runs out when 100 − 2.5t = 0, which happens after 40 minutes.',
          D:'At takeoff t = 0 and p(0) = 100 percent. The 2.5 describes the CHANGE; 100 is the starting charge.'
        },
        tip:'When a linear model decreases, read the slope as "how much is lost for each unit of input", in the units of the output. Losing a fixed AMOUNT each time is linear; losing a fixed PERCENT of what is left is not.',
        desmos:'Graph y = 100 − 2.5x. The line falls by the same 2.5 for every step right, and it reaches 0 at x = 40.',
        desmosLatex:['y=100-2.5x','y=0']
      },
      {
        id:'LFA-29', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Slope of a linear model in different units (unit trap)',
        stem:'A fuel truck pumps diesel into a generator. The number of liters of diesel in the generator is modeled by L(m) = 45 + 8m, where m is the number of minutes since pumping began. At this rate, how many liters does the truck pump per hour?',
        choices:{A:'8', B:'480', C:'525', D:'2,700'},
        correct:'B',
        expCorrect:'The model adds 8 liters for each minute, and one hour is 60 minutes, so the truck pumps 8 × 60 = 480 liters in an hour. (Check with the model itself: L(60) − L(0) = (45 + 480) − 45 = 480 ✓.)',
        expWrong:{
          A:'8 is the amount pumped each MINUTE. The question changes the unit of time, so the number has to change with it.',
          C:'525 is L(60), the total amount of diesel in the generator after an hour. That total includes the 45 liters that were already there before pumping started.',
          D:'2,700 multiplies the starting amount by 60 instead of the pumping rate. Those 45 liters were there from the beginning and are never repeated.'
        },
        tip:'When the model runs in one unit of time and the question asks for another, convert the SLOPE only. The constant term is a one-time amount and is never multiplied by the conversion factor.',
        desmos:'Graph y = 45 + 8x with x in minutes and compare y at x = 0 and x = 60: the difference, 480, is what the hour added.',
        desmosLatex:['y=45+8x','x=60']
      },
      {
        id:'LFA-30', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear function from a table with unequal steps',
        stem:'The table shows three values of x and the corresponding values of the linear function f. Which equation defines f?',
        figure: TBL_GAPS,
        choices:{A:'f(x) = 41 − 3x', B:'f(x) = 47 + 3x', C:'f(x) = 47 − 3x', D:'f(x) = 59 − 9x'},
        correct:'C',
        expCorrect:'The steps in x are not equal, so divide by them. From x = 2 to x = 5 the output falls from 41 to 32: (32 − 41)/(5 − 2) = −9/3 = −3. The second gap agrees: (14 − 32)/(11 − 5) = −18/6 = −3. Step back from x = 2 to x = 0, adding 3 twice: 41 + 6 = 47. So f(x) = 47 − 3x. (Check x = 11: 47 − 33 = 14 ✓.)',
        expWrong:{
          A:'f(x) = 41 − 3x has the right slope but takes 41, the value at x = 2, as the value at x = 0. Two steps of 3 still have to be added back.',
          B:'f(x) = 47 + 3x has the sign of the slope backwards. The outputs shrink as x grows, so the slope is negative.',
          D:'f(x) = 59 − 9x uses the drop of 9 as if x had moved by 1. From x = 2 to x = 5 the input moved 3, so the drop for each unit is 9/3 = 3.'
        },
        tip:'In a table, never subtract two outputs and call the result the slope until you check how far the inputs moved. Divide the change in output by the change in input every single time.',
        desmos:'Plot the three points and add y = 47 − 3x: the line passes through all three.',
        desmosLatex:['(2,41)','(5,32)','(11,14)','y=47-3x']
      },
      {
        id:'LFA-31', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Slope and starting value of a linear model from two data points',
        stem:'A photographer charges a fixed sitting fee plus a fixed amount for each printed photograph. A session that includes 6 prints costs $213, and a session that includes 10 prints costs $285. What is the sitting fee, in dollars?',
        answer:'105',
        expCorrect:'The 4 extra prints add 285 − 213 = 72 dollars, so one print costs 72/4 = 18 dollars. The 6 prints of the first session account for 6(18) = 108 dollars, which leaves 213 − 108 = 105 for the sitting fee. (Check the other session: 105 + 10(18) = 105 + 180 = 285 ✓.) Answer: 105.',
        tip:'With two totals from the same "fixed fee plus an amount for each item" model, the difference of the totals divided by the difference of the item counts is the price of one item. Then peel that off one of the totals to uncover the fixed fee.',
        desmos:'Plot (6, 213) and (10, 285) and graph y = 18x + 105 through them; the value at x = 0 is the sitting fee.',
        desmosLatex:['(6,213)','(10,285)','y=18x+105']
      },
      {
        id:'LFA-32', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear function notation with a shifted input',
        stem:'The linear function f satisfies f(2) = 13 and f(6) = 29. The function g is defined by g(x) = f(x + 3) − 7. What is the value of g(4)?',
        choices:{A:'14', B:'17', C:'26', D:'33'},
        correct:'C',
        expCorrect:'First build f: the slope is (29 − 13)/(6 − 2) = 16/4 = 4, and 13 = 4(2) + b gives b = 5, so f(x) = 4x + 5. Now g(4) = f(4 + 3) − 7 = f(7) − 7, and f(7) = 28 + 5 = 33, so g(4) = 33 − 7 = 26. (Check with the rule for g written out: g(x) = 4(x + 3) + 5 − 7 = 4x + 10, and 4(4) + 10 = 26 ✓.)',
        expWrong:{
          A:'14 evaluates f at 4 instead of at 7: f(4) − 7 = 21 − 7. The + 3 is inside the parentheses, so it changes the input before f is applied.',
          B:'17 reads g(x) = f(x + 3) − 7 as f(x) + 3 − 7, moving the 3 outside: 21 + 3 − 7. A number added inside f cannot be pulled out without multiplying it by the slope.',
          D:'33 is f(7), the correct middle step. The rule for g still subtracts 7 from it.'
        },
        tip:'Work a nested definition from the inside out: build the input first, apply the function, then apply whatever sits outside. For a linear f with slope m, f(x + h) = f(x) + m·h, so a shift inside is multiplied by the slope before it reaches the output.',
        desmos:'Graph y = 4x + 5 and y = 4x + 10 (that second one is g) and read both at x = 4: 21 and 26.',
        desmosLatex:['y=4x+5','y=4x+10']
      },
      {
        id:'LFA-33', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Rate of change of a linear model and a later value',
        stem:'A hydrologist models the depth of a reservoir with the linear function h, where h(w) is the depth in meters w weeks after the measurements began. The measurements give h(3) = 84 and h(11) = 68, and the depth keeps falling at that same rate. How many weeks after the measurements began will the depth be 40 meters?',
        choices:{A:'22', B:'25', C:'44', D:'45'},
        correct:'B',
        expCorrect:'The slope is (68 − 84)/(11 − 3) = −16/8 = −2 meters each week. Find the depth at w = 0 by stepping back three weeks from h(3): 84 + 3(2) = 90, so h(w) = 90 − 2w. Set it equal to 40: 90 − 2w = 40 gives 2w = 50 and w = 25. (Check: h(25) = 90 − 50 = 40, and from week 3 the depth fell 44 meters over 22 weeks, which is 2 each week ✓.)',
        expWrong:{
          A:'22 counts from the FIRST measurement instead of from the start: (84 − 40)/2 = 22, but that measurement already sat 3 weeks in. The question counts weeks from w = 0.',
          C:'44 is how many METERS the depth still has to fall from 84, not a number of weeks. Dividing it by 2 is what turns it into a time.',
          D:'45 divides the depth at week 0 by the weekly drop: 90/2. That is when the reservoir would be EMPTY, not when it reaches 40 meters.'
        },
        tip:'When neither given value sits at input 0, find the value at 0 before writing the model — that single step is the whole difficulty of an offset problem. Then check which starting point the question is counting from.',
        desmos:'Graph y = 90 − 2x and y = 40, and confirm the line passes through (3, 84) and (11, 68).',
        desmosLatex:['y=90-2x','y=40']
      },
      {
        id:'LFA-34', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Comparing two linear models with a fixed gap',
        stem:'A rental company offers two mileage plans for the same van. Plan A charges a $25 starting fee plus $0.40 for each mile driven. Plan B charges $0.65 for each mile driven and has no starting fee. For a trip of how many miles is the Plan B charge exactly $10 less than the Plan A charge?',
        choices:{A:'40', B:'60', C:'100', D:'140'},
        correct:'B',
        expCorrect:'For m miles, Plan A costs 25 + 0.40m and Plan B costs 0.65m. "Plan B is $10 less" means A − B = 10: (25 + 0.40m) − 0.65m = 10, so 25 − 0.25m = 10, then 0.25m = 15 and m = 60. (Check: Plan A charges 25 + 24 = $49, Plan B charges $39, and 49 − 39 = 10 ✓.)',
        expWrong:{
          A:'40 is 10/0.25, which uses only the gap between the two mileage charges and forgets the $25. That fee is part of the difference and belongs in the equation.',
          C:'100 is where the two plans charge the SAME amount, the answer to 25 + 0.40m = 0.65m. It is one condition short of the $10 gap the question describes.',
          D:'140 subtracts in the wrong direction: B − A = 10 gives 0.25m − 25 = 10 and m = 140. At 140 miles Plan B charges $91 against $81 for Plan A, so Plan B is $10 MORE, not less.'
        },
        tip:'Turn "X is $10 less than Y" into Y − X = 10 and keep that order to the end. When one plan carries a fixed fee, the gap between the plans changes with distance, so the "equal cost" mileage and the "$10 apart" mileage are different numbers.',
        desmos:'Graph y = (25 + 0.4x) − 0.65x together with y = 10: the crossing point is where the gap between the plans is exactly 10 dollars.',
        desmosLatex:['y=25+0.4x','y=0.65x','y=(25+0.4x)-0.65x','y=10']
      }

    ]
  });
})();
