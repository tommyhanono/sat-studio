/* SAT Studio question set — Math: Algebra — Linear inequalities, warm-up (LIW-01 a LIW-11)
   El banco tenía 28 preguntas de esta destreza pero solo 2 fáciles: esto es la
   rampa de abajo, para el que arranca en 400. Cubre un paso, dos pasos, el
   volteo del signo al dividir por negativo, la traducción de las frases al
   símbolo, armar la desigualdad desde un presupuesto o una capacidad, leer la
   región del plano y contar los enteros que cumplen. */
(function(){
  /* El plano partido por dos rectas punteadas en cuatro regiones.
     Escala 30 px por unidad, origen en (70, 90): x = 3 cae en px 160 y
     y = −2 cae en py 150 (la y crece hacia abajo en SVG). */
  var FIG_REGIONES =
    '<svg viewBox="0 0 264 208" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The xy-plane cut by the dashed vertical line x equals 3 and the dashed horizontal line y equals negative 2 into four regions: region II upper left, region I upper right, region III lower left, region IV lower right">' +
    '<line x1="16" y1="90" x2="250" y2="90" stroke="#1e1e1e" stroke-width="2"/>' +
    '<line x1="70" y1="12" x2="70" y2="198" stroke="#1e1e1e" stroke-width="2"/>' +
    '<line x1="160" y1="12" x2="160" y2="198" stroke="#1e1e1e" stroke-width="2" stroke-dasharray="7 5"/>' +
    '<line x1="16" y1="150" x2="250" y2="150" stroke="#1e1e1e" stroke-width="2" stroke-dasharray="7 5"/>' +
    '<text x="254" y="95" font-size="14" font-family="Georgia,serif" font-style="italic">x</text>' +
    '<text x="60" y="12" font-size="14" font-family="Georgia,serif" font-style="italic">y</text>' +
    '<text x="166" y="24" font-size="14" font-family="Georgia,serif"><tspan font-style="italic">x</tspan> = 3</text>' +
    '<text x="18" y="144" font-size="14" font-family="Georgia,serif"><tspan font-style="italic">y</tspan> = &#8722;2</text>' +
    '<text x="104" y="56" font-size="16" font-family="Georgia,serif">II</text>' +
    '<text x="208" y="56" font-size="16" font-family="Georgia,serif">I</text>' +
    '<text x="104" y="184" font-size="16" font-family="Georgia,serif">III</text>' +
    '<text x="208" y="184" font-size="16" font-family="Georgia,serif">IV</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-ineq-warm1',
    title: 'Linear Inequalities — Warm-up',
    section: 'math',
    level: 'Fácil',
    description: 'The bottom of the ramp for linear inequalities: one and two steps, the sign flip, the words that pick the symbol, budget and capacity limits, and reading a region.',
    minutes: 14,
    questions: [
      {
        id:'LIW-01', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear inequalities: one step (dividing by a positive)',
        stem:'What is the solution to the inequality 5x ≤ 45 ?',
        choices:{A:'x ≤ 9', B:'x ≥ 9', C:'x ≤ 40', D:'x ≤ 225'},
        correct:'A',
        expCorrect:'The 5 is multiplying x, so undo it by dividing both sides by 5: 5x ÷ 5 ≤ 45 ÷ 5, which gives x ≤ 9. Dividing by a POSITIVE number leaves the direction of the sign alone. (Check: x = 9 gives 5(9) = 45, and 45 ≤ 45 ✓; x = 10 gives 50, which is not ≤ 45 ✓.)',
        expWrong:{
          B:'x ≥ 9 has the right number but flips the sign for no reason. The flip only happens when you multiply or divide by a NEGATIVE number, and 5 is positive.',
          C:'x ≤ 40 comes from subtracting 5 from 45. The 5 is attached to x by multiplication, so it comes off by division, not by subtraction.',
          D:'x ≤ 225 multiplies 45 by 5 instead of dividing. Multiplying is what x is already suffering from; the undo is the opposite operation.'
        },
        tip:'Undo multiplication with division, and flip the inequality sign only when the number you multiply or divide by is negative.',
        desmos:'Graph y = 5x and the horizontal line y = 45. The slanted line sits at or below 45 exactly for x at or to the left of 9.',
        desmosLatex:['y=5x','y=45']
      },
      {
        id:'LIW-02', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear inequalities: turning the words into a symbol (no more than)',
        stem:'A school van can carry no more than 14 passengers. Which inequality represents all possible values of p, the number of passengers the van can carry?',
        choices:{A:'p > 14', B:'p ≤ 14', C:'p &lt; 14', D:'p ≥ 14'},
        correct:'B',
        expCorrect:'"No more than 14" says 14 is allowed and nothing above it is, so p can be 14 or any number below it: p ≤ 14. (Check: 14 passengers is legal ✓, 15 is not ✓, and 14 is not ruled out ✓.)',
        expWrong:{
          A:'p > 14 says the van must carry MORE than 14, which turns a limit into a requirement and even rules out a half-empty van.',
          C:'p &lt; 14 has the right direction but throws out 14 itself. "No more than 14" allows exactly 14, so the symbol has to include the endpoint: ≤, not the strict one.',
          D:'p ≥ 14 turns the ceiling into a floor. "No more than" caps the number from above, not from below.'
        },
        tip:'Match the phrase to the symbol: "at most" and "no more than" → ≤ · "at least" and "no fewer than" → ≥ · "more than" → > · "fewer than" and "less than" → the strict one. The words "at" and "no" are the tell that the endpoint counts.',
        desmos:'Plot x ≤ 14 in Desmos and look at the edge: it is drawn SOLID at 14, which is exactly what "no more than 14" means. Then plot x < 14 and watch that same edge turn hollow.',
        desmosLatex:['x\\le 14']
      },
      {
        id:'LIW-03', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear inequalities: two steps',
        stem:'What is the solution to the inequality 6x + 12 ≤ 48 ?',
        choices:{A:'x ≤ −4', B:'x ≤ 10', C:'x ≤ 6', D:'x ≥ 6'},
        correct:'C',
        expCorrect:'Subtract 12 from both sides first: 6x ≤ 36. Then divide both sides by 6: x ≤ 6. Both moves are with positive numbers, so the sign never turns. (Check: x = 6 gives 6(6) + 12 = 48, and 48 ≤ 48 ✓; x = 7 gives 54, too big ✓.)',
        expWrong:{
          A:'x ≤ −4 divides 48 by 6 first and then subtracts 12 (8 − 12 = −4). The 12 has to come off BEFORE the 6 is divided out, because the 6 multiplies only the x, not the 12.',
          B:'x ≤ 10 adds 12 to 48 instead of subtracting it: 6x ≤ 60. A +12 on the left is undone by taking 12 away from both sides.',
          D:'x ≥ 6 lands on the right number but reverses the sign. Nothing was multiplied or divided by a negative here, so the direction stays put.'
        },
        tip:'Peel a two-step inequality in reverse order: undo the addition or subtraction first, then the multiplication or division. Same moves as an equation, with one extra rule — a negative multiply or divide flips the sign.',
        desmos:'Graph y = 6x + 12 and y = 48. The line is at or below 48 exactly for x at or to the left of 6, and you can read that crossing point off the graph.',
        desmosLatex:['y=6x+12','y=48']
      },
      {
        id:'LIW-04', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear inequalities: dividing by a negative flips the sign',
        stem:'What is the solution to the inequality −5x ≤ 40 ?',
        choices:{A:'x ≥ −8', B:'x ≤ −8', C:'x ≥ 8', D:'x ≤ 8'},
        correct:'A',
        expCorrect:'Divide both sides by −5. Because −5 is negative, the direction of the sign reverses: x ≥ 40 ÷ (−5), that is x ≥ −8. (Check: x = 0 gives −5(0) = 0 ≤ 40 ✓, and 0 does sit inside x ≥ −8. Going the other way, x = −10 gives 50, which is NOT ≤ 40, and −10 is outside x ≥ −8 ✓.)',
        expWrong:{
          B:'x ≤ −8 divides by −5 correctly but keeps the sign pointing the same way. This is the single most common mistake on the whole topic: dividing by a negative reverses it.',
          C:'x ≥ 8 flips the sign correctly but loses the minus in the number. 40 divided by −5 is −8, not 8.',
          D:'x ≤ 8 ignores the minus sign twice: it neither reverses the inequality nor keeps the negative in 40 ÷ (−5) = −8.'
        },
        tip:'Multiply or divide by a negative → flip the inequality sign. Adding or subtracting a negative never flips it. When in doubt, test one number from your answer back in the original inequality.',
        desmos:'Graph y = −5x and y = 40. The falling line is at or below 40 for every x to the RIGHT of −8, which is the picture of why the sign has to turn around.',
        desmosLatex:['y=-5x','y=40']
      },
      {
        id:'LIW-05', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Building a budget inequality from a context',
        stem:'Dana can spend at most $60 at a school supply store. She buys one backpack that costs $22 and n notebooks that cost $4 each. Which inequality represents all possible values of n?',
        choices:{A:'4n + 22 ≥ 60', B:'4n − 22 ≤ 60', C:'22n + 4 ≤ 60', D:'4n + 22 ≤ 60'},
        correct:'D',
        expCorrect:'The notebooks cost 4n dollars and the backpack adds 22 dollars once, so the total spent is 4n + 22. "At most $60" caps that total, which gives 4n + 22 ≤ 60. (Check: n = 9 costs 36 + 22 = 58 ≤ 60 ✓; n = 10 costs 62, over budget ✓.)',
        expWrong:{
          A:'4n + 22 ≥ 60 builds the total correctly but reverses the sign. "At most" is a ceiling, so the total has to land at or BELOW 60, not above it.',
          B:'4n − 22 ≤ 60 subtracts the backpack. The backpack is money leaving her pocket, so it ADDS to the total she has to keep under 60.',
          C:'22n + 4 ≤ 60 swaps the two prices. The $4 is the price per notebook, so it is the one multiplied by n; the $22 is paid a single time.'
        },
        tip:'Build the total first — (price per item)(how many) + the one-time costs — and only then attach the symbol the words hand you. "At most" → ≤ · "at least" → ≥.',
        desmos:'Graph y = 4x + 22 and y = 60. They cross at x = 9.5, so 9 notebooks is the largest whole number that stays under the line.',
        desmosLatex:['y=4x+22','y=60']
      },
      {
        id:'LIW-06', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Capacity inequality: the greatest number that fits',
        stem:'A delivery drone can lift a total of at most 9,000 grams. The battery pack it carries weighs 1,150 grams, and each package weighs 620 grams. What is the greatest number of packages the drone can lift in one flight?',
        answer:'12',
        expCorrect:'Let p be the number of packages. The total lifted is 620p + 1,150, and it has to stay at or under the limit: 620p + 1,150 ≤ 9,000. Subtract 1,150: 620p ≤ 7,850. Divide by 620: p ≤ 12.66…. Packages come whole, so round DOWN to 12 — even though 12.66 looks closer to 13. (Check: 12 packages weigh 7,440, plus the battery is 8,590 ≤ 9,000 ✓; 13 would be 8,060 + 1,150 = 9,210, over the limit ✓.)',
        tip:'On "the greatest number that fits" always round DOWN, whatever the decimal is, because one more whole item breaks the limit. On "the least number needed to reach a goal" always round UP. And never forget the fixed weight or fixed fee that rides along.',
        desmos:'Graph y = 620x + 1150 and y = 9000 and look at where they cross: about x = 12.66. The last whole number still under the horizontal line is 12.',
        desmosLatex:['y=620x+1150','y=9000']
      },
      {
        id:'LIW-07', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Compound inequality from words (at least, younger than)',
        stem:'A community pool gives a youth rate to swimmers who are at least 13 years old but younger than 18. Which inequality represents all ages a, in years, that qualify for the youth rate?',
        choices:{A:'13 &lt; a &lt; 18', B:'13 ≤ a &lt; 18', C:'13 ≤ a ≤ 18', D:'13 &lt; a ≤ 18'},
        correct:'B',
        expCorrect:'Read the two ends separately. "At least 13" allows 13 itself, so the left end includes its endpoint: 13 ≤ a. "Younger than 18" does not allow 18, so the right end excludes its endpoint: a is strictly below 18. Put together: 13 ≤ a and a below 18. (Check: a swimmer who just turned 13 qualifies ✓, and one who just turned 18 does not ✓.)',
        expWrong:{
          A:'This one locks out the 13-year-olds by making the left end strict. "At least 13" means 13 is in.',
          C:'This one lets an 18-year-old in by making the right end inclusive. "Younger than 18" stops before 18, so that side has to be strict.',
          D:'This has both ends backwards: it excludes 13, which qualifies, and includes 18, which does not.'
        },
        tip:'Handle each end of a compound inequality on its own. "At least" and "at most" keep the endpoint (≥ and ≤); "more than", "less than", "older than" and "younger than" drop it. Decide inclusive-or-not BEFORE you worry about which way the arrow points.',
        desmos:'Plot x ≥ 13 and x < 18 as two separate lines. The youth rate is where the two shadings overlap, and the edges tell the story: solid at 13, hollow at 18.',
        desmosLatex:['x\\ge 13','x<18']
      },
      {
        id:'LIW-08', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear inequalities: two steps with a negative coefficient',
        stem:'What is the solution to the inequality 15 − 2x > 3 ?',
        choices:{A:'x > −6', B:'x &lt; −6', C:'x > 6', D:'x &lt; 6'},
        correct:'D',
        expCorrect:'Subtract 15 from both sides: −2x > −12. Now divide by −2, and since −2 is negative the sign reverses: x is strictly below −12 ÷ (−2) = 6. (Check: x = 0 gives 15 − 0 = 15 > 3 ✓ and 0 is below 6; x = 7 gives 15 − 14 = 1, which is not > 3 ✓; x = 6 gives exactly 3, and 3 is not greater than 3, so the endpoint is correctly left out ✓.)',
        expWrong:{
          A:'x > −6 keeps the sign pointing the same way AND loses a minus: −12 divided by −2 is +6, not −6.',
          B:'x &lt; −6 reverses the sign correctly but divides −12 by +2 instead of by −2, so the answer drags along a minus it should not have.',
          C:'x > 6 gets the number right and leaves the sign alone. Dividing by −2 is exactly the move that turns it around.'
        },
        tip:'Move the constant out of the way first, then divide. The flip happens at the divide step and only because the number you divide BY is negative — whether the answer itself comes out negative has nothing to do with it.',
        desmos:'Graph y = 15 − 2x and y = 3. The falling line is above 3 only to the LEFT of x = 6, which is the answer drawn out.',
        desmosLatex:['y=15-2x','y=3']
      },
      {
        id:'LIW-09', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear inequalities in two variables: which region of the plane',
        stem:'In the xy-plane shown, the dashed line x = 3 and the dashed line y = −2 cut the plane into four regions labeled I, II, III, and IV. Which region contains every point whose x-coordinate is more than 3 and whose y-coordinate is less than −2?',
        figure:FIG_REGIONES,
        choices:{A:'Region II', B:'Region I', C:'Region IV', D:'Region III'},
        correct:'C',
        expCorrect:'Turn each condition into a direction. "x-coordinate more than 3" keeps only the points to the RIGHT of the vertical dashed line. "y-coordinate less than −2" keeps only the points BELOW the horizontal dashed line, because on the y-axis smaller means lower. The only corner of the picture that is both to the right and below is Region IV. (Check: the point (5, −4) has 5 more than 3 and −4 below −2, and it lands in Region IV ✓.)',
        expWrong:{
          A:'Region II reverses both conditions: it is to the LEFT of x = 3 and ABOVE y = −2.',
          B:'Region I is on the correct side left-to-right but the wrong one up-and-down. It sits ABOVE y = −2, and "less than −2" means below the line, not above it.',
          D:'Region III is on the correct side up-and-down but the wrong one left-to-right. It sits to the LEFT of x = 3, and "more than 3" means to the right.'
        },
        tip:'Translate before you look: x greater than a number is right of the vertical line and x smaller is left; y greater is above the horizontal line and y smaller is below. Then take the overlap and confirm with one test point you make up yourself.',
        desmos:'Type x > 3 on one line and y < −2 on the next. Desmos shades each one, and the darker rectangle where the two shadings overlap is Region IV.',
        desmosLatex:['x>3','y<-2']
      },
      {
        id:'LIW-10', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Counting the integers that satisfy a compound inequality',
        stem:'How many integer values of x satisfy the inequality −7 &lt; 2x + 3 ≤ 11 ?',
        answer:'9',
        expCorrect:'Work on all three parts at once. Subtract 3 everywhere: −10 is strictly below 2x, and 2x ≤ 8. Divide everything by 2, a positive number, so nothing flips: −5 is strictly below x, and x ≤ 4. The left end is strict, so −5 is OUT; the right end is inclusive, so 4 is IN. The integers are −4, −3, −2, −1, 0, 1, 2, 3, 4, which is 9 of them. (Check: x = −4 gives 2(−4) + 3 = −5, and −5 is above −7 and below 11 ✓; x = −5 gives exactly −7, which is not above −7 ✓.)',
        tip:'Count integers on an interval with (last that fits) − (first that fits) + 1, here 4 − (−4) + 1 = 9. The +1 is what people forget. Find the first and last that ACTUALLY fit before counting: a strict end throws its endpoint out, an inclusive end keeps it.',
        desmos:'Graph y = 2x + 3 together with y = −7 and y = 11. The chunk of the slanted line trapped between the two horizontal lines sits over x from −5 (open) to 4 (closed), and you can count the whole numbers under it.',
        desmosLatex:['y=2x+3','y=-7','y=11']
      },
      {
        id:'LIW-11', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear inequality with a parameter (recovering the constant)',
        stem:'In the inequality 4(x − 2) ≥ 6x + k, k is a constant. If the solution to this inequality is x ≤ −5, what is the value of k?',
        choices:{A:'10', B:'2', C:'−18', D:'8'},
        correct:'B',
        expCorrect:'Expand the left side: 4x − 8 ≥ 6x + k. Subtract 6x and add 8 to both sides: −2x ≥ k + 8. Divide by −2 and reverse the sign: x ≤ −(k + 8)/2. That boundary has to be the given one, so −(k + 8)/2 = −5, giving k + 8 = 10 and k = 2. (Check with k = 2: 4(x − 2) ≥ 6x + 2 → 4x − 8 ≥ 6x + 2 → −2x ≥ 10 → x ≤ −5 ✓. And x = −6 works while x = −4 does not ✓.)',
        expWrong:{
          A:'10 is the value of k + 8, one step short of the answer. Subtract the 8 and the constant itself is 2.',
          C:'−18 matches the boundary to +5 instead of −5: k + 8 = −10. The solution given is x ≤ −5, so the boundary is negative.',
          D:'8 comes from expanding 4(x − 2) as 4x − 2. The 4 multiplies BOTH terms inside the parentheses, so the constant term is −8, not −2.'
        },
        tip:'With a parameter in the way, solve symbolically until x stands alone, then set your boundary equal to the boundary you were given. Substituting the boundary value into the original as an EQUATION is a fast second check, since that is the point where both sides are equal.',
        desmos:'Graph y = 4(x − 2) and y = 6x + 2. They meet at x = −5, and the first line is above the second only to the LEFT of that crossing, which is exactly x ≤ −5.',
        desmosLatex:['y=4(x-2)','y=6x+2']
      }
    ]
  });
})();
