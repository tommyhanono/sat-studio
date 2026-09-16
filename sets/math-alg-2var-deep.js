/* SAT Studio question set — Math: Algebra — Linear equations in two variables, tier duro y brutal
   (L2D-01 a L2D-23).

   Destreza oficial: "Linear equations in two variables" — la más flaca de todo Algebra
   (34 preguntas en el banco y solo 4 brutales). Este set agrega 23: 13 Difícil y 10
   Difícil + extreme:true.

   TAXONOMÍA: el regex de Algebra se prueba en orden
   al-sys → al-ineq → al-2var → al-func → al-1var, corriendo contra `skill` + los
   primeros 160 caracteres del `stem`. Por eso cada `skill` de acá lleva a propósito
   una de las llaves de al-2var ("standard form", "point-slope", "intercept form",
   "in terms of", "literal equation", "solve for", "two variables"), y ni el `skill`
   ni el arranque del `stem` dicen nunca "system", "elimination", "substitution",
   "infinitely many", "no solution", "simultaneous", "inequality", "at least",
   "at most", "constraint", "budget", "capacity" ni "region". La pregunta sobre dos
   ecuaciones que son la misma recta está escrita como "describe the same line"
   justamente para no caer en Systems.

   Qué las hace duras: ecuaciones literales con varios parámetros, pedir algo que no
   es la variable despejada (el coeficiente, la suma de los interceptos, A + B + C),
   dos formas de la misma recta, el efecto de mover un coeficiente sobre el intercepto
   razonado y no calculado, puntos con parámetro, y en el tier brutal tres pasos
   encadenados donde ningún intermedio es la respuesta.

   Todos los números se verificaron sustituyendo el punto de vuelta en la ecuación. */
(function(){

  window.SAT_SETS.push({
    id: 'math-alg-2var-deep',
    title: 'Linear Equations in Two Variables — Hard & Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Twenty-three hard and brutal items on lines in two variables: literal equations with several parameters, standard form and point-slope traded back and forth, intercepts that carry a parameter, questions that ask for the coefficient or for a sum instead of the variable you just isolated, and hidden conditions about which coefficient is allowed to be zero.',
    minutes: 30,
    questions: [

      {
        id:'L2D-01', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Literal equation: the coefficient of x after solving for y in terms of x',
        stem:'In the equation ax + by = c, a, b, and c are constants and b ≠ 0. When this equation is solved for y in terms of x, what is the coefficient of x?',
        choices:{A:'−a/b', B:'a/b', C:'−b/a', D:'c/b'},
        correct:'A',
        expCorrect:'Move the x-term first: by = c − ax. Now divide EVERY term on the right by b: y = c/b − (a/b)x. The number multiplying x is −a/b. Check with a = 3, b = 2, c = 12 and x = 2: the original gives 3(2) + 2y = 12, so 2y = 6 and y = 3; the rewritten form gives 12/2 − (3/2)(2) = 6 − 3 = 3 ✓.',
        expWrong:{
          B:'a/b forgets that ax changes sign when it crosses the equals sign. Subtracting ax from both sides leaves by = c − ax, so the x-term arrives negative. With a = 3, b = 2, c = 12 and x = 2 this version predicts 6 + 3 = 9 instead of 3.',
          C:'−b/a inverts the fraction. You divide by b, the number attached to y, so b lands in the denominator and a stays on top.',
          D:'c/b is the constant term of the rewritten equation — the y-intercept — not the coefficient of x. It is the piece that has no x next to it.'
        },
        tip:'For Ax + By = C, solving for y always gives y = (−A/B)x + C/B. The slope is −A/B and the y-intercept is C/B: the minus sign belongs to the slope only, and each piece is divided by B, the coefficient of y.',
        desmos:'Graph 3x + 2y = 12 and y = -1.5x + 6 on the same screen. They land on top of each other, which is the point: the coefficient of x is −a/b = −3/2, not 3/2.',
        desmosLatex:['3x+2y=12','y=-1.5x+6']
      },

      {
        id:'L2D-02', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Literal equation: solve for x when a parameter multiplies y',
        stem:'In the equation 4x − ky = 3k, k is a constant and k ≠ 0. Which of the following expressions gives x in terms of y and k?',
        choices:{A:'x = (3k − ky)/4', B:'x = (y + 3)/4', C:'x = k(y + 3)/4', D:'x = 4k(y + 3)'},
        correct:'C',
        expCorrect:'Isolate the x-term by adding ky to both sides: 4x = 3k + ky. The right side has a common factor of k, so 4x = k(y + 3). Divide both sides by 4: x = k(y + 3)/4. Check with k = 2 and y = 1: the original gives 4x − 2(1) = 3(2) = 6, so 4x = 8 and x = 2; the expression gives 2(1 + 3)/4 = 8/4 = 2 ✓.',
        expWrong:{
          A:'(3k − ky)/4 keeps the minus sign on ky. The term −ky is on the left, so it becomes +ky when it moves to the right. With k = 2 and y = 1 this gives (6 − 2)/4 = 1, not 2.',
          B:'(y + 3)/4 cancels k as if it divided out of both terms. It is a common factor of the right side only, so it stays in the numerator. With k = 2 and y = 1 this gives 1, not 2.',
          D:'4k(y + 3) multiplies by 4 instead of dividing by 4. The 4 is attached to x by multiplication, so it is undone by division. With k = 2 and y = 1 this gives 32.'
        },
        tip:'Solving for a variable is three moves in a fixed order: clear anything added to its term, factor the other side if a letter is shared, then divide by whatever multiplies the variable. A parameter that multiplies the OTHER variable never cancels — it travels with its own term.',
        desmos:'Set a slider for k and graph 4x - ky = 3k. Slide k and watch the whole line move: for each k, the x you read off the graph at a given y matches k(y+3)/4.',
        desmosLatex:['4x-ky=3k','k=2']
      },

      {
        id:'L2D-03', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Both intercepts read from standard form',
        stem:'In the xy-plane, the graph of 5x − 4y = 60 has an x-intercept at (p, 0) and a y-intercept at (0, q). What is the value of p − q?',
        answer:'27',
        expCorrect:'The x-intercept is the point where y = 0: 5p − 4(0) = 60, so 5p = 60 and p = 12. The y-intercept is the point where x = 0: 5(0) − 4q = 60, so −4q = 60 and q = −15. Then p − q = 12 − (−15) = 12 + 15 = 27. Check both points in the equation: 5(12) − 4(0) = 60 ✓ and 5(0) − 4(−15) = 60 ✓.',
        tip:'In Ax + By = C the x-intercept is C/A and the y-intercept is C/B — each one divided by the coefficient of ITS OWN variable. When that coefficient is negative, the intercept is negative too, and subtracting a negative is what turns 12 and −15 into 27 rather than −3.',
        desmos:'Graph 5x - 4y = 60 and plot (12,0) and (0,-15). Both sit on the line, and the y-intercept is below the x-axis — that negative is what the subtraction turns into a plus.',
        desmosLatex:['5x-4y=60','(12,0)','(0,-15)']
      },

      {
        id:'L2D-04', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Standard form: finding a coefficient from a relation between the two intercepts',
        stem:'In the xy-plane, the graph of 6x + By = 30 is a line whose y-intercept has a y-coordinate 4 times the x-coordinate of its x-intercept. What is the value of B?',
        choices:{A:'2/3', B:'3/2', C:'20', D:'24'},
        correct:'B',
        expCorrect:'Find the x-intercept first, because it does not involve B: set y = 0 to get 6x = 30, so x = 5. The y-intercept is 4 times that, or 4(5) = 20, which means the line passes through (0, 20). Now set x = 0 in the original equation: B(20) = 30, so B = 30/20 = 3/2. Check: 6x + (3/2)y = 30 has x-intercept 30/6 = 5 and y-intercept 30 ÷ (3/2) = 20, and 20 = 4(5) ✓.',
        expWrong:{
          A:'2/3 divides in the wrong order. The equation at x = 0 reads B(20) = 30, so B = 30 ÷ 20, not 20 ÷ 30. With B = 2/3 the y-intercept would be 30 ÷ (2/3) = 45, which is 9 times the x-intercept.',
          C:'20 is the y-intercept itself — the intermediate result, and the last number written down before the final division. The question asks for the coefficient B, not for the point the coefficient produces.',
          D:'24 multiplies the coefficient 6 by 4. A coefficient and its own intercept move in OPPOSITE directions, because the intercept is C divided by the coefficient: making B four times bigger makes the y-intercept four times smaller. With B = 24 the y-intercept is 30/24 = 1.25.'
        },
        tip:'Never chase two unknowns at once. Compute the intercept that has no parameter in it, use the stated relation to get the value of the other intercept as a number, and only then set that number equal to C divided by the unknown coefficient. Bigger coefficient, smaller intercept — always.',
        desmos:'Put a slider on B and graph 6x + By = 30 with the points (5,0) and (0,20). Slide B down toward 1.5 and watch the y-intercept climb to 20 — larger B pulls the intercept down, which kills one of the wrong options on sight.',
        desmosLatex:['6x+By=30','B=1.5','(5,0)','(0,20)']
      },

      {
        id:'L2D-05', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Matching two equations in standard form that describe one line',
        stem:'The equations 6x − 15y = 24 and 2x + ky = 8 describe the same line in the xy-plane, where k is a constant. What is the value of k?',
        choices:{A:'5', B:'−15', C:'3', D:'−5'},
        correct:'D',
        expCorrect:'Two equations describe the same line exactly when one is a nonzero multiple of the other, term for term. The x-coefficients are 6 and 2, so divide every term of the first equation by 3: 2x − 5y = 8. The constants already agree (8 = 8), so matching the y-terms gives k = −5. Check with a point: x = 4 in 2x − 5y = 8 gives 8 − 5y = 8, so y = 0, and the original gives 6(4) − 15(0) = 24 ✓.',
        expWrong:{
          A:'5 drops the minus sign. Dividing −15y by 3 gives −5y, so the coefficient that matches is −5, not 5.',
          B:'−15 compares k with the coefficient of the first equation before it was scaled. Two equations can only be compared term by term once their x-coefficients are equal, and 6 is not 2.',
          C:'3 is the scale factor that relates the two equations, not a coefficient inside either of them. It is the number you divide BY on the way to the answer.'
        },
        tip:'To decide whether two lines in standard form are the same line, scale one until its x-coefficients match the other, then read the remaining coefficients straight across. The scale factor itself is never the answer — it is the tool.',
        desmos:'Graph 6x - 15y = 24 and 2x - 5y = 8 together. Only one line appears, because the second equation is the first one divided by 3.',
        desmosLatex:['6x-15y=24','2x-5y=8']
      },

      {
        id:'L2D-06', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Solve for a parameter hidden in a point on a line in standard form',
        stem:'In the xy-plane, the graph of 4x + 7y = 61 passes through the point (k, 2k + 1), where k is a constant. What is the value of 3k − 2?',
        answer:'7',
        expCorrect:'A point on a line makes the equation true, so replace x with k and y with 2k + 1: 4k + 7(2k + 1) = 61. Distribute the 7 over BOTH terms: 4k + 14k + 7 = 61, so 18k + 7 = 61 and 18k = 54, giving k = 3. The question asks for 3k − 2, not for k, so the answer is 3(3) − 2 = 9 − 2 = 7. Check the point: k = 3 makes the point (3, 2(3) + 1) = (3, 7), and 4(3) + 7(7) = 12 + 49 = 61 ✓.',
        tip:'When both coordinates of a point are written with the same letter, substituting turns a two-variable equation into a single-letter solve. Then reread the last sentence before you grid anything: if the question asks for an expression in k, the value of k is only the second-to-last step.',
        desmos:'Graph 4x + 7y = 61 and y = 2x + 1 and look at where they meet: x = 3. Every point of the form (k, 2k+1) sits on that second line, so the crossing point is what k has to be.',
        desmosLatex:['4x+7y=61','y=2x+1','(3,7)']
      },

      {
        id:'L2D-07', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Point-slope form rewritten in standard form with integer coefficients',
        stem:'A line in the xy-plane passes through the point (−3, 7) and has slope −2/5. Which of the following is an equation of this line written with integer coefficients?',
        choices:{A:'2x + 5y = 29', B:'2x + 5y = 41', C:'5x + 2y = 29', D:'−2x + 5y = 29'},
        correct:'A',
        expCorrect:'Start from point-slope form: y − 7 = (−2/5)(x − (−3)), which is y − 7 = (−2/5)(x + 3). Multiply both sides by 5 to clear the fraction: 5y − 35 = −2(x + 3) = −2x − 6. Add 2x to both sides and add 35 to both sides: 2x + 5y = −6 + 35 = 29. Check the point: 2(−3) + 5(7) = −6 + 35 = 29 ✓, and the slope of 2x + 5y = 29 is −2/5 ✓.',
        expWrong:{
          B:'41 loses the sign of the x-coordinate: x − (−3) was written as x − 3. That path gives 5y − 35 = −2x + 6 and 2x + 5y = 41. Test the point: 2(−3) + 5(7) = 29, not 41.',
          C:'5x + 2y = 29 puts the numerator and the denominator of the slope on the wrong variables. In Ax + By = C the slope is −A/B, so a slope of −2/5 needs A = 2 and B = 5; with A = 5 and B = 2 the slope would be −5/2.',
          D:'−2x + 5y = 29 carries the −2x to the left side without changing its sign. Adding 2x to both sides of 5y − 35 = −2x − 6 removes it from the right and makes it +2x on the left. This one also fails the point: −2(−3) + 5(7) = 41.'
        },
        tip:'Point-slope to standard form is one recipe: write y − y0 = m(x − x0), multiply by the denominator of m, then move the x-term across and the constant to the right. Two signs decide the whole problem — the one inside (x − x0) and the one on the x-term as it crosses over. Substituting the given point back in catches both.',
        desmos:'Graph 2x + 5y = 29 and plot (-3,7). The point is on the line. Then graph the other three candidate equations and watch the point miss every one of them.',
        desmosLatex:['2x+5y=29','(-3,7)','2x+5y=41','5x+2y=29']
      },

      {
        id:'L2D-08', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Standard form: how changing one coefficient moves the intercepts',
        stem:'In the xy-plane, the graph of Ax + By = C is a line with a positive x-intercept and a positive y-intercept, where A, B, and C are positive constants. The value of A is then replaced by a larger positive number while B and C are unchanged. How do the intercepts of the new line compare with those of the original line?',
        choices:{
          A:'The x-intercept is larger and the y-intercept is unchanged.',
          B:'Both intercepts are smaller.',
          C:'The x-intercept is smaller and the y-intercept is unchanged.',
          D:'The x-intercept is unchanged and the y-intercept becomes smaller.'
        },
        correct:'C',
        expCorrect:'Write both intercepts as formulas instead of computing them. Setting y = 0 gives Ax = C, so the x-intercept is C/A. Setting x = 0 gives By = C, so the y-intercept is C/B. Only the first formula contains A, and A sits in the DENOMINATOR, so making A larger makes C/A smaller; the second formula never mentions A, so C/B does not move. Concretely, 2x + 3y = 12 has intercepts 6 and 4, while 4x + 3y = 12 has intercepts 3 and 4 ✓.',
        expWrong:{
          A:'This treats a bigger coefficient as a bigger intercept. The x-intercept is C divided by A, so A growing pushes the quotient down: going from 2x + 3y = 12 to 4x + 3y = 12 moves the x-intercept from 6 to 3, not up.',
          B:'Both intercepts changing would require both formulas to involve A. The y-intercept is C/B, built only from the two numbers that were left alone, so it is literally the same number as before — 4 in the example.',
          D:'This pairs A with the wrong axis. Setting y = 0 is what leaves Ax = C, so A controls the x-intercept; B is the coefficient you divide by once x = 0 has erased the x-term.'
        },
        tip:'Turn "what happens if" questions into formulas before you touch numbers: x-intercept = C/A, y-intercept = C/B. A letter that does not appear in a formula cannot change it, and a letter in the denominator moves the result the opposite way it moves itself.',
        desmos:'Graph Ax + 3y = 12 with a slider for A, starting at 2. Drag A up and watch only the point where the line crosses the x-axis slide left; the crossing on the y-axis never budges.',
        desmosLatex:['Ax+3y=12','A=2','2x+3y=12','4x+3y=12']
      },

      {
        id:'L2D-09', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Solve for y in terms of x to read a rate and a flat fee',
        stem:'A courier charges a flat fee plus a fixed amount for each kilometer driven. The total charge y, in dollars, for a trip of x kilometers satisfies 4y − 3x = 140. When this equation is solved for y in terms of x, the result has the form y = mx + b. What is the value of 8m + b?',
        answer:'41',
        expCorrect:'Add 3x to both sides: 4y = 3x + 140. Now divide EVERY term by 4, the constant included: y = (3/4)x + 35. So m = 3/4 and b = 35. The question asks for 8m + b = 8(3/4) + 35 = 6 + 35 = 41. Check the model at x = 4 kilometers: y = 3 + 35 = 38 dollars, and the original equation gives 4(38) − 3(4) = 152 − 12 = 140 ✓.',
        tip:'To pull a per-unit rate and a one-time fee out of a two-variable equation, solve for the total first. Once it reads y = mx + b, m is the rate per unit and b is the amount charged once. The mistake that costs the point is dividing only one term on the right — the divisor applies to all of them.',
        desmos:'Graph 4y - 3x = 140 and y = 0.75x + 35 together: one line. Then open the table at x = 0 and x = 4 to see the 35 flat fee and the 0.75 per kilometer.',
        desmosLatex:['4y-3x=140','y=0.75x+35']
      },

      {
        id:'L2D-10', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Standard form with a parameter on both sides, matched to a given slope',
        stem:'In the equation 3(2x − ky) = 4x + 9y + 6, k is a constant. In the xy-plane, the graph of this equation is a line with slope 1/6. What is the value of k?',
        choices:{A:'3', B:'1', C:'7', D:'1/6'},
        correct:'B',
        expCorrect:'Distribute the 3 across BOTH terms inside the parentheses: 6x − 3ky = 4x + 9y + 6. Gather the x-terms and the y-terms on the left: 6x − 4x = 2x, and −3ky − 9y = −(3k + 9)y, so the equation is 2x − (3k + 9)y = 6. For Ax + By = C the slope is −A/B, so here the slope is −2 ÷ (−(3k + 9)) = 2/(3k + 9). Set that equal to 1/6: 2/(3k + 9) = 1/6 gives 3k + 9 = 12, so k = 1. Check k = 1: 3(2x − y) = 4x + 9y + 6 becomes 6x − 3y = 4x + 9y + 6, then 2x − 12y = 6, then y = x/6 − 1/2, whose slope is 1/6 ✓.',
        expWrong:{
          A:'3 comes from distributing the 3 over 2x but not over −ky, leaving 6x − ky = 4x + 9y + 6 and then 2/(k + 9) = 1/6. A factor in front of a parenthesis multiplies every term inside it, so −ky becomes −3ky.',
          C:'7 comes from a sign slip while collecting the y-terms: writing 2x + (9 − 3k)y = 6 instead of 2x − (3k + 9)y = 6. Moving +9y from the right to the left makes it −9y, which adds to the −3ky already there rather than cancelling part of it.',
          D:'1/6 is the slope the problem hands you, copied into the answer. The slope is the given information; k is the unknown that the slope pins down.'
        },
        tip:'When a parameter appears on both sides, do the algebra in a fixed order: distribute everything, move all x-terms and all y-terms to one side, factor the y-coefficient into a single bracket, and only then use slope = −A/B. Rushing to the slope formula before the equation is in standard form is what produces every wrong answer here.',
        desmos:'Graph 3(2x - ky) = 4x + 9y + 6 with a slider for k, and graph y = x/6 - 0.5 next to it. Slide k until the two lines coincide — it happens at k = 1.',
        desmosLatex:['3\\left(2x-ky\\right)=4x+9y+6','k=1','y=\\frac{x}{6}-0.5']
      },

      {
        id:'L2D-11', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Literal equation with the unknown on both sides, solved for y in terms of m and x',
        stem:'In the equation m = (3x + 2y)/(x − y), x ≠ y and m ≠ −2. Which of the following gives y in terms of m and x?',
        choices:{
          A:'y = x(3 − m)/(m + 2)',
          B:'y = x(m + 2)/(m − 3)',
          C:'y = x(m − 3)/(m − 2)',
          D:'y = x(m − 3)/(m + 2)'
        },
        correct:'D',
        expCorrect:'Clear the denominator first: multiply both sides by (x − y) to get m(x − y) = 3x + 2y, so mx − my = 3x + 2y. Put every y-term on one side and everything else on the other: mx − 3x = 2y + my. Factor each side separately: x(m − 3) = y(m + 2). Divide by (m + 2) — which is exactly why the problem says m ≠ −2 — to get y = x(m − 3)/(m + 2). Check with x = 4 and y = 1: m = (12 + 2)/(4 − 1) = 14/3, and 4(14/3 − 3)/(14/3 + 2) = 4(5/3)/(20/3) = (20/3)/(20/3) = 1 ✓.',
        expWrong:{
          A:'The numerator was built as 3x − mx instead of mx − 3x. Moving 3x to the left side of mx − my = 3x + 2y leaves mx − 3x, not 3x − mx. With x = 4 and m = 14/3 this gives −1, the negative of the true value.',
          B:'The two factors are inverted. From x(m − 3) = y(m + 2), you solve for y by dividing by the factor attached to y, which is (m + 2); dividing by (m − 3) instead solves for x. With x = 4 and m = 14/3 this gives 16.',
          C:'The y-terms were collected as m − 2 instead of m + 2. The term −my is on the LEFT, so it arrives on the right as +my and adds to 2y. With x = 4 and m = 14/3 this gives 2.5.'
        },
        tip:'A literal equation with the target letter on both sides is always the same four moves: clear denominators, expand, collect every term containing the target on one side, factor it out, divide. The restriction printed in the stem (here m ≠ −2) is a free hint — it names the factor you are about to divide by.',
        desmos:'Fix m = 14/3 and graph y = x(m-3)/(m+2) together with the original relation (3x + 2y)/(x - y) = 14/3. The two graphs land on the same line, which the wrong options do not.',
        desmosLatex:['\\frac{3x+2y}{x-y}=\\frac{14}{3}','y=\\frac{x\\left(\\frac{14}{3}-3\\right)}{\\frac{14}{3}+2}']
      },

      {
        id:'L2D-12', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Parallel line written in standard form through a given point',
        stem:'In the xy-plane, line n passes through the point (8, −1) and is parallel to the graph of 7x − 4y = 20. Which of the following equations represents line n?',
        choices:{A:'7x − 4y = 60', B:'7x − 4y = 52', C:'4x − 7y = 39', D:'7x + 4y = 52'},
        correct:'A',
        expCorrect:'Parallel lines have equal slopes, and two equations in standard form are parallel exactly when their x- and y-coefficients match. So line n has the form 7x − 4y = C, and C is fixed by the point: 7(8) − 4(−1) = 56 + 4 = 60. The equation is 7x − 4y = 60. Check the slope the long way too: −4y = −7x + 20 gives y = (7/4)x − 5, and 7x − 4y = 60 gives y = (7/4)x − 15 — same slope, different intercept ✓.',
        expWrong:{
          B:'52 comes from using y − 1 instead of y + 1 in point-slope form. The point has y = −1, and y − (−1) is y + 1. Test it directly: 7(8) − 4(−1) = 60, not 52.',
          C:'4x − 7y = 39 inverts the slope to 4/7. In 7x − 4y = 20 the slope is −7/(−4) = 7/4; the coefficients stay attached to their own variables when you copy a line that is parallel.',
          D:'7x + 4y = 52 uses slope −7/4, the value you get by reading the coefficient of x and forgetting that you divide by a NEGATIVE coefficient of y. Two minus signs cancel: −7/(−4) = +7/4.'
        },
        tip:'Copying a line in standard form is the fastest move on the test: keep A and B exactly as they are, then plug the point in to get C. Changing A or B changes the slope, which is the one thing a parallel line is not allowed to do.',
        desmos:'Graph 7x - 4y = 20 and 7x - 4y = 60 with the point (8,-1). The two lines never meet and the point sits on the second one.',
        desmosLatex:['7x-4y=20','7x-4y=60','(8,-1)']
      },

      {
        id:'L2D-13', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Perpendicular line written in standard form',
        stem:'In the xy-plane, line t passes through the point (0, −4) and is perpendicular to the graph of 5x + 2y = 17. Which of the following equations represents line t?',
        choices:{A:'2x + 5y = −20', B:'2x − 5y = −20', C:'2x − 5y = 20', D:'5x + 2y = −8'},
        correct:'C',
        expCorrect:'Solve 5x + 2y = 17 for y: 2y = −5x + 17, so y = (−5/2)x + 17/2 and the slope is −5/2. A perpendicular line takes the negative reciprocal: flip −5/2 to −2/5, then change the sign to +2/5. Through (0, −4) the line is y = (2/5)x − 4. Multiply by 5: 5y = 2x − 20, so 2x − 5y = 20. Check the point: 2(0) − 5(−4) = 20 ✓. Check the slopes multiply to −1: (−5/2)(2/5) = −1 ✓.',
        expWrong:{
          A:'2x + 5y = −20 flips the fraction but keeps the minus sign, giving slope −2/5. The negative reciprocal needs both moves; as written, the slopes multiply to (−5/2)(−2/5) = +1, not −1.',
          B:'2x − 5y = −20 has the right slope but the wrong constant — the sign of the y-coordinate flipped during substitution. Putting x = 0 into this equation gives −5y = −20, so y = 4, not −4.',
          D:'5x + 2y = −8 is PARALLEL to the given line, not perpendicular: it reuses the coefficients 5 and 2 and only adjusts the constant so the point fits. Perpendicular means the slope has to change.'
        },
        tip:'Perpendicular in standard form has a shortcut worth memorizing: from Ax + By = C, a perpendicular line is Bx − Ay = C2 — swap the coefficients and flip one sign — then plug the point in to get C2. Doing only the swap, or only the sign flip, produces two of the classic wrong answers.',
        desmos:'Graph 5x + 2y = 17 and 2x - 5y = 20 and zoom until the axes are square. The lines meet at a right angle, and the second one crosses the y-axis at -4.',
        desmosLatex:['5x+2y=17','2x-5y=20','(0,-4)']
      },

      {
        id:'L2D-14', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Standard form: which coefficient has to vanish for a horizontal line',
        stem:'In the xy-plane, the graph of (k − 4)x + (k + 2)y = 10 is a line, where k is a constant. For what value of k is this line horizontal?',
        choices:{A:'−2', B:'4', C:'−4', D:'0'},
        correct:'B',
        expCorrect:'A horizontal line is one where y is the same no matter what x is, which happens exactly when the x-term disappears and the y-term survives. So set the coefficient of x to zero: k − 4 = 0, giving k = 4. Check that the y-term survives: at k = 4 the coefficient of y is 4 + 2 = 6, which is not zero, so the equation becomes 0x + 6y = 10, that is y = 5/3 — a horizontal line ✓.',
        expWrong:{
          A:'−2 sets the y-coefficient to zero instead. At k = −2 the equation is −6x = 10, so x = −5/3: a VERTICAL line. Horizontal means the x-term goes away, not the y-term.',
          C:'−4 is a sign slip while solving k − 4 = 0; adding 4 to both sides gives k = 4. At k = −4 the equation is −8x − 2y = 10, a slanted line with slope −4.',
          D:'0 puts zero in for k rather than making a coefficient equal to zero. At k = 0 the equation is −4x + 2y = 10, whose slope is 2. The zero has to land on the coefficient of x, not on the letter itself.'
        },
        tip:'In Ax + By = C: A = 0 (with B not 0) gives a horizontal line, B = 0 (with A not 0) gives a vertical one, and A = B = 0 is not a line at all. Whenever a problem sets a coefficient to zero, check the OTHER coefficient afterwards — that check is what separates the two answers the test offers you.',
        desmos:'Graph (k-4)x + (k+2)y = 10 with a slider for k. Sweep k from -3 to 5: the line is vertical at k = -2, tilts as k grows, and lies flat at k = 4.',
        desmosLatex:['\\left(k-4\\right)x+\\left(k+2\\right)y=10','k=4']
      },

      {
        id:'L2D-15', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Solve for one variable in terms of the other and interpret the coefficient',
        stem:'A shop’s total machine time for one shift is modeled by 12p + 20f = 480, where p is the number of plates cut and f is the number of frames cut during that shift. When this equation is solved for f in terms of p, the result has the form f = mp + b. Which of the following is the best interpretation of m in this context?',
        choices:{
          A:'Each additional frame cut reduces the number of plates cut by 0.6.',
          B:'Each additional plate cut reduces the number of frames cut by 12.',
          C:'With no plates cut, 24 frames can be cut in one shift.',
          D:'Each extra plate cut reduces the number of frames cut by 0.6.'
        },
        correct:'D',
        expCorrect:'Solve for f: 20f = 480 − 12p, then divide every term by 20 to get f = 24 − 0.6p, so m = −0.6 and b = 24. The coefficient m answers "what happens to f when p goes up by 1", and −0.6 means f drops by 0.6 for each extra plate. Check with numbers: p = 10 gives f = 24 − 6 = 18, and p = 15 gives f = 24 − 9 = 15 — five more plates cost exactly 5(0.6) = 3 frames ✓.',
        expWrong:{
          A:'This reads the rate backwards, describing the change in p per frame. That number is the reciprocal, 1/0.6 ≈ 1.67 plates per frame. Whichever variable is alone on the left is the one the rate describes.',
          B:'12 is the raw coefficient of p in the original equation, before the division by 20. It is machine time per plate, not frames per plate; the trade-off between the two counts only appears after the equation is solved for f.',
          C:'24 is the value of b, not of m. It is what f equals when p = 0 — a starting amount, not a rate of change.'
        },
        tip:'Interpreting a coefficient has two halves and both are graded: the SIZE and the UNITS. Solve for the variable the question is about, then read m out loud as "per one more of the other variable", with a sign. A coefficient copied straight out of standard form has the wrong units almost every time.',
        desmos:'Graph 12x + 20y = 480 and open the table at x = 10 and x = 15. The y values are 18 and 15: three fewer frames for five more plates, which is 0.6 per plate.',
        desmosLatex:['12x+20y=480','y=24-0.6x']
      },

      {
        id:'L2D-16', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Point-slope form converted to standard form, then read back as a sum',
        stem:'The line in the xy-plane with equation y − 5 = (2/3)(x + 6) can also be written in the form Ax + By = C, where A, B, and C are integers and A = 2. What is the value of A + B + C?',
        choices:{A:'−28', B:'−22', C:'−18', D:'−4'},
        correct:'A',
        expCorrect:'Multiply both sides by 3 to clear the fraction, remembering that the 3 hits every term: 3(y − 5) = 2(x + 6), so 3y − 15 = 2x + 12. Now move 3y to the right and 12 to the left: −15 − 12 = 2x − 3y, that is 2x − 3y = −27. With A = 2 as required, B = −3 and C = −27, so A + B + C = 2 − 3 − 27 = −28. Check with the point the original form hands you, (−6, 5): 2(−6) − 3(5) = −12 − 15 = −27 ✓.',
        expWrong:{
          B:'−22 comes from writing 2x + 3y = −27, moving the 3y across without changing its sign. Test that equation at (−6, 5): 2(−6) + 3(5) = 3, nowhere near −27.',
          C:'−18 comes from multiplying only the y by 3 and leaving the −5 alone: 3y − 5 = 2x + 12 leads to 2x − 3y = −17 and 2 − 3 − 17 = −18. A factor multiplies every term on both sides.',
          D:'−4 reads (x + 6) as (x − 6), which gives 3y − 15 = 2x − 12, then 2x − 3y = −3 and 2 − 3 − 3 = −4. In y − y0 = m(x − x0), a PLUS inside the parentheses means x0 is negative: the point here is (−6, 5).'
        },
        tip:'A question that asks for A + B + C is really three questions, and the sign of B is where most points are lost. Convert carefully, write the final equation out, label A, B and C underneath it, and only then add. Verifying with the point that point-slope form gives you for free costs ten seconds.',
        desmos:'Graph y - 5 = (2/3)(x + 6) and 2x - 3y = -27 on the same screen: one line. Plot (-6,5) to confirm it is the point built into the original form.',
        desmosLatex:['y-5=\\frac{2}{3}\\left(x+6\\right)','2x-3y=-27','(-6,5)']
      },

      {
        id:'L2D-17', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Finding a coefficient and an intercept from an equation in standard form',
        stem:'In the xy-plane, the graph of 12x − ky = 60 passes through the points (0, −4) and (p, 0), where k and p are constants. What is the value of k + p?',
        answer:'20',
        expCorrect:'Use the point (0, −4) first, because x = 0 wipes out the term that does not contain k: 12(0) − k(−4) = 60 becomes 4k = 60, so k = 15. Now use (p, 0), where y = 0 wipes out the k-term: 12p − 15(0) = 60 becomes 12p = 60, so p = 5. Then k + p = 15 + 5 = 20. Check both points in 12x − 15y = 60: 12(0) − 15(−4) = 60 ✓ and 12(5) − 15(0) = 60 ✓.',
        tip:'When an equation carries an unknown coefficient and you are handed two points, substitute the point that zeroes out the other variable first — it hands you the coefficient alone, on one line, with no rearranging. Watch the double negative: −k times −4 is +4k.',
        desmos:'Graph 12x - 15y = 60 and plot (0,-4) and (5,0). Both land on the line, which confirms k = 15 before you add anything.',
        desmosLatex:['12x-15y=60','(0,-4)','(5,0)']
      },

      {
        id:'L2D-18', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Standard form: recovering both coefficients from a slope and a point',
        stem:'In the xy-plane, the line with equation ax + by = 36 passes through the point (8, 3) and has slope −3/4, where a and b are constants. What is the value of a + b?',
        choices:{A:'1', B:'−7', C:'7', D:'4'},
        correct:'C',
        expCorrect:'Solve ax + by = 36 for y: by = −ax + 36, so y = (−a/b)x + 36/b and the slope is −a/b. Setting −a/b = −3/4 gives a/b = 3/4, so a and b are proportional to 3 and 4: write a = 3t and b = 4t. Substitute the point (8, 3): 3t(8) + 4t(3) = 24t + 12t = 36t, and that has to equal 36, so t = 1. Then a = 3, b = 4 and a + b = 7. Check both conditions: 3(8) + 4(3) = 24 + 12 = 36 ✓, and the slope of 3x + 4y = 36 is −3/4 ✓.',
        expWrong:{
          A:'1 uses slope = a/b instead of −a/b, producing a = −3 and b = 4. Solving for y puts a minus in front of a/b. Test it: −3(8) + 4(3) = −12, not 36.',
          B:'−7 attaches the minus sign in −3/4 to both coefficients, giving a = −3 and b = −4. Then −3(8) − 4(3) = −36, the negative of what the equation needs.',
          D:'4 is the value of b alone — the second number computed and the last one written down. The question asks for a + b, so a still has to be added.'
        },
        tip:'A slope pins down only the RATIO of the two coefficients, never their sizes. Write them as 3t and 4t, use the point to find t, and then answer whatever the last sentence actually asks for. Skipping the t and setting a = 3, b = 4 by hand happens to work here only because t turned out to be 1.',
        desmos:'Graph 3x + 4y = 36 and plot (8,3): the point is on the line and the line falls 3 for every 4 it runs right. Graph -3x + 4y = 36 next to it to see why the sign version misses the point entirely.',
        desmosLatex:['3x+4y=36','(8,3)','-3x+4y=36']
      },

      {
        id:'L2D-19', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Equivalent equations of one line in standard form',
        stem:'Which of the following equations has the same graph in the xy-plane as the equation −6x + 10y = −14?',
        choices:{A:'3x − 5y = −7', B:'3x − 5y = 7', C:'−3x + 5y = 7', D:'3x + 5y = 7'},
        correct:'B',
        expCorrect:'Two equations graph the same line exactly when one is a nonzero multiple of the other, term for term. Divide every term of −6x + 10y = −14 by −2: (−6 ÷ −2)x + (10 ÷ −2)y = (−14 ÷ −2), which is 3x − 5y = 7. Check with a point on the original: x = 4 gives −24 + 10y = −14, so 10y = 10 and y = 1; the point (4, 1) in 3x − 5y = 7 gives 12 − 5 = 7 ✓.',
        expWrong:{
          A:'3x − 5y = −7 divides the left side by −2 but leaves the constant with the sign it started with. The divisor applies to all three terms: −14 ÷ −2 = +7. The point (4, 1) gives 7, not −7.',
          C:'−3x + 5y = 7 divides the left side by 2 and the right side by −2, mixing two divisors. Dividing everything by 2 gives −3x + 5y = −7; dividing everything by −2 gives 3x − 5y = 7.',
          D:'3x + 5y = 7 loses the sign of the y-term along the way, since 10 ÷ (−2) = −5. The point (4, 1) gives 12 + 5 = 17, not 7.'
        },
        tip:'Scaling an equation is all-or-nothing: the same nonzero number divides A, B and C, and if it is negative every one of the three signs flips. The fastest check on the test is to find one point on the original line and test it in the candidate — one substitution kills three options.',
        desmos:'Graph -6x + 10y = -14 and 3x - 5y = 7: a single line. Add 3x + 5y = 7 and watch a different line cut across it.',
        desmosLatex:['-6x+10y=-14','3x-5y=7','3x+5y=7']
      },

      {
        id:'L2D-20', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Intercept form of a line solved for y in terms of x',
        stem:'In the xy-plane, the graph of x/a + y/b = 1 is a line whose x-intercept is (a, 0) and whose y-intercept is (0, b), where a and b are nonzero constants. Which of the following gives y in terms of x, a, and b?',
        choices:{
          A:'y = b(x − a)/a',
          B:'y = a(b − x)/b',
          C:'y = b − x/a',
          D:'y = b(a − x)/a'
        },
        correct:'D',
        expCorrect:'Isolate the y-term: y/b = 1 − x/a. Multiply BOTH sides by b: y = b(1 − x/a) = b − bx/a. Put the right side over the common denominator a: y = (ab − bx)/a = b(a − x)/a. Check with a = 4 and b = 3 at x = 2: the original gives 2/4 + y/3 = 1, so y/3 = 1/2 and y = 1.5; the expression gives 3(4 − 2)/4 = 6/4 = 1.5 ✓. Check the intercepts too: x = a = 4 gives y = 0 ✓ and x = 0 gives y = b = 3 ✓.',
        expWrong:{
          A:'b(x − a)/a has the subtraction backwards, as if the y-term had been isolated as y/b = x/a − 1. With a = 4, b = 3 and x = 2 it gives −1.5, the opposite of the right value, and it puts the y-intercept at −b.',
          B:'a(b − x)/b swaps the roles of a and b. In x/a + y/b = 1 the letter sitting under y is b, so b is what multiplies through and a is what stays in the denominator. With a = 4, b = 3 and x = 2 it gives 4/3.',
          C:'b − x/a multiplies only the 1 by b and leaves x/a untouched. Every term on the right gets the b: b(1) − b(x/a). With a = 4, b = 3 and x = 2 it gives 2.5.'
        },
        tip:'Intercept form x/a + y/b = 1 is worth recognizing on sight: the denominators ARE the intercepts, so a line through (6, 0) and (0, −2) is x/6 + y/(−2) = 1 with no algebra at all. When you rearrange it, the multiplier reaches every term on the other side, including the 1.',
        desmos:'Graph x/4 + y/3 = 1 and y = 3(4 - x)/4 together: the same line, crossing at (4,0) and (0,3). Add sliders for a and b and the pattern holds for every pair.',
        desmosLatex:['\\frac{x}{4}+\\frac{y}{3}=1','y=\\frac{3\\left(4-x\\right)}{4}','(4,0)','(0,3)']
      },

      {
        id:'L2D-21', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Two points on a line in standard form, each with a missing coordinate',
        stem:'In the xy-plane, the graph of 5x − 2y = 26 passes through the points (a, 7) and (12, b). What is the value of b − a?',
        answer:'9',
        expCorrect:'Each point has to satisfy the equation. Put y = 7 in: 5a − 2(7) = 26, so 5a − 14 = 26, 5a = 40 and a = 8. Put x = 12 in: 5(12) − 2b = 26, so 60 − 2b = 26, −2b = −34 and b = 17. Then b − a = 17 − 8 = 9. Check both points: 5(8) − 2(7) = 40 − 14 = 26 ✓ and 5(12) − 2(17) = 60 − 34 = 26 ✓.',
        tip:'A point on a line is just a pair of numbers that makes the equation true, so drop the coordinate you know into its own slot and solve what is left. The step that costs points is dividing by a negative: −2b = −34 gives b = +17, not −17.',
        desmos:'Graph 5x - 2y = 26 and plot (8,7) and (12,17). Both sit on the line; the table in Desmos will hand you the second coordinate for any x you type.',
        desmosLatex:['5x-2y=26','(8,7)','(12,17)']
      },

      {
        id:'L2D-22', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Solve for a parameter that sits on both sides, then read the y-intercept from standard form',
        stem:'In the xy-plane, the graph of 3x + ky = 2k + 9 passes through the point (1, 4) and crosses the y-axis at (0, d), where k and d are constants. What is the value of d?',
        answer:'5',
        expCorrect:'Substitute the point (1, 4), remembering that k appears on BOTH sides: 3(1) + k(4) = 2k + 9, so 3 + 4k = 2k + 9. Subtract 2k and subtract 3 from both sides: 2k = 6, so k = 3. Rewrite the whole equation with k = 3: 3x + 3y = 2(3) + 9 = 15. The y-axis is where x = 0: 3(0) + 3d = 15, so 3d = 15 and d = 5. Check both points in 3x + 3y = 15: 3(1) + 3(4) = 15 ✓ and 3(0) + 3(5) = 15 ✓.',
        tip:'When the same unknown constant appears on both sides, treat it as the variable for one line of work: collect it on one side and solve. Then rewrite the ORIGINAL equation with that number in place — including the constant on the right, which is the term people forget — before you go looking for the intercept the question actually wants.',
        desmos:'Graph 3x + ky = 2k + 9 with a slider for k and plot (1,4). Slide k until the line catches the point: it happens at k = 3, and the line then crosses the y-axis at 5.',
        desmosLatex:['3x+ky=2k+9','k=3','(1,4)','(0,5)']
      },

      {
        id:'L2D-23', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Two equations in standard form that describe the same line',
        stem:'The equations 8x − 12y = 20 and 2x + ay = b describe the same line in the xy-plane, where a and b are constants. What is the value of ab?',
        choices:{A:'−15', B:'15', C:'−60', D:'−240'},
        correct:'A',
        expCorrect:'Two equations describe the same line exactly when one is a nonzero multiple of the other. The x-coefficients are 8 and 2, so the scale factor is 8 ÷ 2 = 4: divide every term of the first equation by 4 to get 2x − 3y = 5. Matching that against 2x + ay = b term by term gives a = −3 and b = 5, so ab = (−3)(5) = −15. Check with a point: (1, −1) satisfies 8(1) − 12(−1) = 8 + 12 = 20 ✓ and 2(1) + (−3)(−1) = 2 + 3 = 5 ✓.',
        expWrong:{
          B:'15 loses the minus sign on a. Dividing −12y by 4 gives −3y, so a = −3 and the product of a negative and a positive is negative.',
          C:'−60 divides by 2 instead of by 4, producing 4x − 6y = 10 and then a = −6, b = 10. The scale factor is set by the x-coefficients, and 8 becomes 2 only after dividing by 4.',
          D:'−240 reads a = −12 and b = 20 straight off the first equation with no scaling at all. The first equation starts with 8x and the second with 2x, so the two cannot be compared term by term until they match.'
        },
        tip:'Same line means every coefficient scales by the SAME factor, so find the factor from the pair of numbers you can see and apply it to all three terms. Then reread the question: it asks for ab, not for a or b, and the product is where the sign you almost dropped finally shows up.',
        desmos:'Graph 8x - 12y = 20 and 2x - 3y = 5: one line on the screen. Then graph 2x - 12y = 20 to see how far off the unscaled version lands.',
        desmosLatex:['8x-12y=20','2x-3y=5','2x-12y=20']
      }

    ]
  });
})();
