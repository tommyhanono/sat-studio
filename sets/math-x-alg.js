/* SAT Studio question set — Math EXTREME: Algebra (XA-01 a XA-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-x-alg',
    title: 'Extreme — Algebra',
    section: 'math',
    level: 'Extreme',
    description: 'Hard-Module-2 level: parameter systems, unit-trap linear models, and absolute-value hybrids.',
    minutes: 20,
    questions: [
      {
        id:'XA-01', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Systems with a parameter (no solution)',
        stem:'In the system of equations below, k is a constant.<br><br>(k/2)x − 3y = 7<br>5x − (9/4)y = 10<br><br>For what value of k does the system have no solution?',
        choices:{A:'20/3', B:'15/2', C:'40/3', D:'7'},
        correct:'C',
        expCorrect:'A linear system has NO solution when the lines are parallel: proportional coefficients but constants that do not follow the proportion. You set (k/2)/5 = (−3)/(−9/4). The right-hand side is 3 ÷ 9/4 = 12/9 = 4/3. So k/2 = 5 · 4/3 = 20/3, and k = 40/3. Check: with k = 40/3 the first equation is (20/3)x − 3y = 7, and the second multiplied by 4/3 gives (20/3)x − 3y = 40/3. Same left-hand sides, different constants (7 ≠ 40/3): parallel, zero solutions.',
        expWrong:{
          A:'20/3 is the value of k/2, not of k. You reached k/2 = 20/3 and skipped the last step: multiply by 2.',
          B:'15/2 comes from cross-multiplying wrong: (k/2)(−3) = 5(−9/4). In the parallelism proportion you compare coefficients of the SAME variable: (k/2)/5 = (−3)/(−9/4), not x against y.',
          D:'7 comes from using the ratio of the constants: (k/2)/5 = 7/10. For “no solution” the constants stay OUT of the proportion; only the x and y coefficients are matched.'
        },
        tip:'“No solution” = proportional coefficients, constants not: a₁/a₂ = b₁/b₂ ≠ c₁/c₂. Watch the signs: (−3)/(−9/4) is POSITIVE 4/3.',
        desmos:'Graph the two lines with a slider for k: when k = 40/3 they come out parallel (they never cross). With any other value of k, they do intersect.',
        desmosLatex:['y=((k/2)x-7)/3','y=(5x-10)/(9/4)','k=40/3']
      },
      {
        id:'XA-02', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Systems with a parameter (no solution)',
        stem:'In the system of equations below, k is a constant.<br><br>6x + (k/3)y = 7<br>9x − 5y = 12<br><br>If the system has no solution, what is the value of k?',
        choices:{A:'−10', B:'10', C:'−10/3', D:'−45/2'},
        correct:'A',
        expCorrect:'No solution ⇒ proportional coefficients: 6/9 = (k/3)/(−5). The left side is 2/3, so k/3 = (2/3)(−5) = −10/3 and k = −10. Check: with k = −10 the first equation is 6x − (10/3)y = 7; multiplying the second by 2/3 gives 6x − (10/3)y = 8. Same coefficients, different constants (7 ≠ 8): parallel, no solution.',
        expWrong:{
          B:'10 is the classic sign error: the y coefficient in the second equation is −5, not 5. When you solve, k/3 = (2/3)(−5) comes out negative.',
          C:'−10/3 is the value of k/3. You stopped one step early: you still have to multiply by 3.',
          D:'−45/2 comes from inverting the proportion: you used 9/6 = 3/2 instead of 6/9 = 2/3. The order has to be consistent in both fractions (first equation on top in each).'
        },
        tip:'ALWAYS build the proportion in the same order: (x coefficient of eq. 1)/(x coefficient of eq. 2) = (y coefficient of eq. 1)/(y coefficient of eq. 2). Mixing the order inverts the ratio and produces distractors like −45/2.',
        desmos:'With the k slider, watch the first line rotate. At k = −10 it turns parallel to the second: zero intersections. Nudge it a little and the intersection reappears way off screen.',
        desmosLatex:['y=(7-6x)/(k/3)','y=(9x-12)/5','k=-10']
      },
      {
        id:'XA-03', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Systems with a parameter (infinitely many solutions)',
        stem:'In the system of equations below, k and c are constants.<br><br>(k/4)x + 6y = c<br>3x + 8y = 10<br><br>If the system has infinitely many solutions, what is the value of c/k?',
        choices:{A:'9', B:'15/2', C:'6/5', D:'5/6'},
        correct:'D',
        expCorrect:'Infinitely many solutions ⇒ the two equations are the SAME line: (k/4)/3 = 6/8 = c/10. Since 6/8 = 3/4: k/4 = 9/4 ⇒ k = 9, and c = 10 · 3/4 = 15/2. So c/k = (15/2)/9 = 15/18 = 5/6. Check: multiplying 3x + 8y = 10 by 3/4 gives you (9/4)x + 6y = 15/2, exactly the first equation.',
        expWrong:{
          A:'9 is the value of k, an intermediate value. The question asks for c/k, not k. In a hard Module 2 ALWAYS reread which expression they want at the end.',
          B:'15/2 is the value of c, another intermediate value. You skipped the division: c/k = (15/2)/9 = 5/6.',
          C:'6/5 is c/k upside down: you did k/c or divided the wrong way. (15/2) ÷ 9 = 15/18 = 5/6, not 18/15.'
        },
        tip:'“Infinitely many solutions” = the WHOLE equation is proportional, constants included: a₁/a₂ = b₁/b₂ = c₁/c₂. Pull out the factor (here 3/4, from 6/8) and multiply the entire second equation by it. And underline what they want: c/k, not k and not c.',
        desmos:'Graph both lines with sliders for k and c. When k = 9 and c = 7.5 the two lines lie on top of each other as one (infinitely many points in common).',
        desmosLatex:['y=(c-(k/4)x)/6','y=(10-3x)/8','k=9','c=7.5']
      },
      {
        id:'XA-04', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Systems with a parameter (no solution, SPR)',
        stem:'In the system of equations below, k is a constant.<br><br>kx − (3/2)y = 5<br>(5/6)x + 2y = 9<br><br>If the system has no solution, what is the value of k?',
        answer:'-5/8',
        expCorrect:'No solution ⇒ parallel lines ⇒ same slope. From the first: y = (2/3)kx − 10/3, slope (2/3)k. From the second: y = −(5/12)x + 9/2, slope −5/12. Set them equal: (2/3)k = −5/12 ⇒ k = (−5/12)(3/2) = −15/24 = −5/8. Check by proportion: k/(5/6) = (−3/2)/2 = −3/4 ⇒ k = (5/6)(−3/4) = −5/8 ✓. The constants 5 and 9 do not follow that ratio, so it is genuine parallelism (not infinitely many solutions). Answer: −5/8.',
        tip:'When the fractions pile up, convert each equation to y = mx + b and set the slopes equal: it is mechanical and avoids proportion errors. In the grid-in you can write -5/8 or -.625.',
        desmos:'Enter both lines with a k slider. Adjust k until they are parallel: it happens exactly at k = −5/8 = −0.625. That confirms your algebra in 10 seconds.',
        desmosLatex:['y=(kx-5)/(3/2)','y=(9-(5/6)x)/2','k=-5/8']
      },
      {
        id:'XA-05', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear model (unit trap)',
        stem:'The number of liters L of water remaining in an industrial tank t minutes after a pump is turned on is modeled by L = 840 − 0.4t. At this rate, how many liters of water does the pump remove from the tank each hour?',
        choices:{A:'0.4', B:'24', C:'14', D:'840'},
        correct:'B',
        expCorrect:'The slope −0.4 means 0.4 liters PER MINUTE (because t is in minutes). The question asks per HOUR: 0.4 × 60 = 24 liters per hour. The whole trap of the problem sits in the last word of the prompt: “hour”.',
        expWrong:{
          A:'0.4 is the rate per MINUTE (the slope as it stands). The model uses t in minutes, but the question asks for liters per hour: the ×60 is missing.',
          C:'14 comes from dividing 840 ÷ 60. That mixes the initial amount with the time conversion; the draining rate lives in the slope 0.4, not in the 840.',
          D:'840 is the initial amount of water (the intercept), not a rate. Rates always come from the slope.'
        },
        tip:'Underline the model’s units (t in minutes) and the question’s units (per hour). If they do not match, a conversion is mandatory: ×60. College Board hides the trap unit in the LAST word of the prompt.',
        desmos:'Graph L = 840 − 0.4t and evaluate at t = 0 and t = 60: it goes from 840 to 816. The drop in one hour is 840 − 816 = 24, which confirms 0.4 × 60.',
        desmosLatex:['y=840-0.4x','840-(840-0.4\\cdot60)','0.4*60']
      },
      {
        id:'XA-06', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear model (“years after”, a disguised intercept)',
        stem:'The population P of a town x years after 2015 is modeled by P(x) = 350(x − 3) + 13,450. According to the model, what was the population of the town in 2015?',
        choices:{A:'12,400', B:'13,450', C:'14,500', D:'13,100'},
        correct:'A',
        expCorrect:'The year 2015 corresponds to x = 0 (x counts years AFTER 2015). Evaluate: P(0) = 350(0 − 3) + 13,450 = −1,050 + 13,450 = 12,400. Careful: 13,450 is NOT the initial value, because the model is shifted with (x − 3); 13,450 is the population at x = 3, that is, in 2018.',
        expWrong:{
          B:'13,450 is the population when x = 3 (the year 2018), not in 2015. Since the model has (x − 3), the visible constant is not the intercept. A classic point-slope-form trap.',
          C:'14,500 comes from adding instead of subtracting: 350(3) + 13,450. But P(0) = 350(−3) + 13,450, and 350(−3) is NEGATIVE.',
          D:'13,100 subtracts only one year of 350: 13,450 − 350. The shift is 3 years: you have to subtract 3 × 350 = 1,050.'
        },
        tip:'“x years after 2015” ⇒ 2015 is x = 0, ALWAYS. If the model comes in shifted form like 350(x − 3) + 13,450, the visible constant is NOT the initial value: evaluate at x = 0 with no shortcuts.',
        desmos:'Graph y = 350(x − 3) + 13450 and tap the point at x = 0: you will see (0, 12400). You will also see that (3, 13450) is the model’s "anchor" point, which is 2018, not 2015.',
        desmosLatex:['y=350(x-3)+13450','(0,12400)','(3,13450)']
      },
      {
        id:'XA-07', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear model (intermediate value + units)',
        stem:'The total cost C, in dollars, to rent a kayak consists of an $18 fixed fee plus $7.50 per hour, so C = 18 + 7.5h, where h is the number of hours. Marco paid a total of $85.50. For how many minutes did Marco rent the kayak?',
        choices:{A:'9', B:'90', C:'684', D:'540'},
        correct:'D',
        expCorrect:'First solve for the hours: 85.50 − 18 = 67.50, and 67.50 ÷ 7.50 = 9 hours. But the question asks for MINUTES: 9 × 60 = 540. Two chained traps: the intermediate value (9) appears as an option, and the unit conversion comes at the end.',
        expWrong:{
          A:'9 is the number of HOURS, the intermediate value of the problem. The question asks for minutes: 9 × 60 = 540. Always reread the last line before you mark.',
          B:'90 is 9 × 10, a careless conversion. An hour has 60 minutes, not 10.',
          C:'684 comes from forgetting the flat fee: 85.50 ÷ 7.50 = 11.4 hours, × 60 = 684. You have to SUBTRACT the $18 flat fee before dividing by the hourly rate.'
        },
        tip:'In a hard Module 2, the number you just computed (9) is almost never the answer: it is the bait. Circle the unit the question wants (minutes) BEFORE solving, and leave the conversion as a mandatory last step.',
        desmos:'Graph y = 18 + 7.5x together with y = 85.5: they cross at x = 9 (hours). Then compute 9 × 60 = 540 on the same screen. Desmos gives you the exact intersection without solving by hand.',
        desmosLatex:['y=18+7.5x','y=85.5','9*60']
      },
      {
        id:'XA-08', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Rate from two points (converting to hours, SPR)',
        stem:'A tank is drained at a constant rate. The tank contained 96 gallons of water 2 minutes after draining began and 81 gallons of water 7 minutes after draining began. At this rate, how many gallons of water are drained from the tank each hour?',
        answer:'180',
        expCorrect:'The rate is the slope between (2, 96) and (7, 81): (81 − 96)/(7 − 2) = −15/5 = −3 gallons per MINUTE. The question asks per hour: 3 × 60 = 180 gallons per hour. Answer: 180. (Answering 3, the per-minute rate, is the designed error of this question.)',
        tip:'Two points ⇒ slope first, interpretation after. And mark the units: the data come in minutes but they want per hour, so the ×60 is not optional.',
        desmos:'Enter the points (2, 96) and (7, 81) and the line y = −3x + 102: it passes through both. The drop per minute is 3; on the same screen type 3*60 = 180 for the hourly rate.',
        desmosLatex:['(2,96)','(7,81)','y=-3x+102','3*60']
      },
      {
        id:'XA-09', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Absolute value (number of solutions)',
        stem:'In the equation |2x − 5| = c − 3, c is a constant. For what value of c does the equation have exactly one solution?',
        choices:{A:'0', B:'5/2', C:'3', D:'5'},
        correct:'C',
        expCorrect:'|2x − 5| = (something) has: two solutions if that “something” is positive, ONE solution if it is exactly zero, and none if it is negative. Exactly one solution ⇒ c − 3 = 0 ⇒ c = 3. (The single solution would be x = 5/2, but they want c, not x.)',
        expWrong:{
          A:'0 is the value the whole RIGHT-HAND SIDE (c − 3) has to take, not c. Since c − 3 = 0, c is 3.',
          B:'5/2 is the solution x of the equation when c = 3 (the vertex of |2x − 5|). They want the value of c, not of x: an intermediate value in disguise.',
          D:'With c = 5 the right-hand side is 2 > 0 and the equation would have TWO solutions (x = 7/2 and x = 3/2), not exactly one.'
        },
        tip:'Think graphically: y = |2x − 5| is a V with its vertex at (5/2, 0). The horizontal line y = c − 3 touches it at a single point only when it passes through the vertex, that is, at height 0. “One solution” with absolute value almost always means “right-hand side = 0”.',
        desmos:'Graph y = |2x − 5| and the horizontal line y = c − 3 with a c slider. With c > 3 there are two crossings, with c < 3 none, and exactly at c = 3 the line touches the V at a single point (the vertex).',
        desmosLatex:['y=\\left|2x-5\\right|','y=c-3','c=3']
      },
      {
        id:'XA-10', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Absolute value inequality (counting integers, SPR)',
        stem:'How many integer values of x satisfy the inequality |3x − 7| < 11 ?',
        answer:'7',
        expCorrect:'|3x − 7| < 11 opens up as −11 < 3x − 7 < 11. Add 7 to all three sides: −4 < 3x < 18, and divide by 3: −4/3 < x < 6. The integers strictly between −1.33… and 6 are: −1, 0, 1, 2, 3, 4, 5. That is 7 integers. A double catch: −1 DOES count (−1 > −4/3) and 6 does NOT (the inequality is strict). Answer: 7.',
        tip:'With |expression| < a, open the sandwich −a < expression < a and operate on ALL THREE sides at once. When counting integers, check each boundary separately: the fractional boundary (−4/3) lets the next integer (−1) through, and the strict boundary (< 6) excludes 6. Counting on your fingers is fine.',
        desmos:'Graph y = |3x − 7| and y = 11: the crossings are at x = −4/3 and x = 6. The integer values of x where the V sits BELOW the line are exactly 7 (from x = −1 to x = 5).',
        desmosLatex:['y=\\left|3x-7\\right|','y=11','\\left|3x-7\\right|<11']
      },
      {
        id:'XA-11', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'System: target expression (shortcut vs. brute force)',
        stem:'If 7x + 3y = 41 and 4x + 5y = 34, what is the value of 3x − 2y ?',
        choices:{A:'−7', B:'7', C:'23', D:'75'},
        correct:'B',
        expCorrect:'The shortcut: SUBTRACT the equations as they stand. (7x + 3y) − (4x + 5y) = 3x − 2y, exactly the expression they want! So 3x − 2y = 41 − 34 = 7. Thirty seconds. If you solve the whole system you get x = 103/23, y = 74/23 (hideous), and 3x − 2y = (309 − 148)/23 = 161/23 = 7. Same result, five minutes longer.',
        expWrong:{
          A:'−7 subtracts the wrong way: 34 − 41. The expression 3x − 2y comes from (first) − (second), so the constants go in that same order: 41 − 34.',
          C:'23 is the coefficient that shows up when you eliminate y by brute force (23x = 103): an intermediate number from the long route, not the answer.',
          D:'75 comes from ADDING the equations (41 + 34), which gives 11x + 8y, an expression that is no use. Before you operate, check which combination produces the target expression.'
        },
        tip:'When they want an EXPRESSION (3x − 2y) and not the variables, first try adding or subtracting the equations without solving anything: on the SAT the direct combination almost always produces exactly what they asked for. Individual solutions coming out ugly (103/23) is the sign the test expected the shortcut.',
        desmos:'Check it: graph 7x + 3y = 41 and 4x + 5y = 34, tap the intersection (≈4.478, ≈3.217) and evaluate 3x − 2y at those values: it comes out to exactly 7. But subtracting the equations is faster than opening the calculator.',
        desmosLatex:['7x+3y=41','4x+5y=34','3\\cdot\\frac{103}{23}-2\\cdot\\frac{74}{23}']
      },
      {
        id:'XA-12', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Difference of squares (structural shortcut)',
        stem:'If x + y = 9 and x² − y² = 54, what is the value of x ?',
        choices:{A:'3/2', B:'6', C:'9', D:'15/2'},
        correct:'D',
        expCorrect:'The shortcut: x² − y² = (x + y)(x − y), so 54 = 9(x − y) and x − y = 6. Now add the two linear equations: (x + y) + (x − y) = 9 + 6 ⇒ 2x = 15 ⇒ x = 15/2. Check: x = 7.5, y = 1.5; x² − y² = 56.25 − 2.25 = 54 ✓. Brute force (substituting y = 9 − x into the quadratic) lands in the same place, but takes three times as long.',
        expWrong:{
          A:'3/2 is the value of y, not of x. After getting x − y = 6, subtracting the equations instead of adding gives 2y = 3. They want x.',
          B:'6 is the value of x − y, an intermediate result from the shortcut. You still have to combine it with x + y = 9 to isolate x.',
          C:'9 is x + y, the figure from the prompt. Neither variable equals 9 on its own.'
        },
        tip:'Seeing x² − y² next to x + y (or x − y) is an alarm bell: factor it as (x + y)(x − y) BEFORE you think about substituting. Divide, get the second linear equation, and add or subtract. The intermediate values (6 and 9) are always among the options waiting to catch you.',
        desmos:'Graph the line x + y = 9 and the curve x² − y² = 54: they meet at (7.5, 1.5). Right there you see that x = 15/2, and that the 6 and the 3/2 among the options are other things (x − y and the value of y).',
        desmosLatex:['x+y=9','x^2-y^2=54','(7.5,1.5)']
      }
    ]
  });
})();
