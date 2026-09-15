/* SAT Studio question set — Math: Grid-Ins — Hard (HSP-01 to HSP-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-hard-spr1',
    title: 'Grid-Ins — Hard',
    section: 'math',
    level: 'Difícil',
    description: 'Twelve hard grid-in (SPR) questions: combined expressions, parameters in systems, extraneous roots, exponential models and functions defined indirectly.',
    minutes: 18,
    questions: [
      {
        id:'HSP-01', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Systems: solving for a combined expression',
        stem:'The system of equations below is given.<br><br>5x + 7y = 29<br>7x + 5y = 43<br><br>If (x, y) is the solution to the system, what is the value of 3x + 3y?',
        answer:'18',
        expCorrect:'You never need x and y separately here. Add the two equations: (5x + 7y) + (7x + 5y) = 29 + 43 → 12x + 12y = 72. Divide by 12: x + y = 6. The question asks for 3x + 3y = 3(x + y) = 3(6) = 18. (Check the long way: subtracting the equations gives −2x + 2y = −14, so y = x − 7; then 5x + 7(x − 7) = 29 → 12x = 78 → x = 6.5 and y = −0.5. So 3x + 3y = 19.5 − 1.5 = 18 ✓.) Answer: 18.',
        expWrong:{},
        tip:'When the two equations are mirror images (5, 7 and 7, 5), adding them gives a multiple of x + y and subtracting gives a multiple of y − x. The trap is gridding the intermediate value 6 (that is x + y) instead of 3x + 3y = 18: read the last line of the question again before you fill the box.',
        desmos:'Graph the two lines; they cross at (6.5, −0.5). Now graph x + y = 6 as well: it passes through that same point, which is the shortcut the question is built on.',
        desmosLatex:['5x+7y=29','7x+5y=43','x+y=6']
      },
      {
        id:'HSP-02', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'System with parameters (infinitely many solutions)',
        stem:'In the system of equations below, k and c are constants.<br><br>(k/3)x − 5y = 7<br>12x − 20y = c<br><br>If the system has infinitely many solutions, what is the value of k + c?',
        answer:'37',
        expCorrect:'Infinitely many solutions means the two equations describe the SAME line, so the whole second equation is a fixed multiple of the first — constant included. Compare the y-coefficients to find the multiplier: (−20)/(−5) = 4, so equation 2 = 4 × equation 1. Then the x-coefficients must match: 4(k/3) = 12 → k/3 = 3 → k = 9. And the constants must match too: c = 4(7) = 28. So k + c = 9 + 28 = 37. (Check: with k = 9 the first equation is 3x − 5y = 7; multiplying it by 4 gives exactly 12x − 20y = 28 ✓.) Answer: 37.',
        expWrong:{},
        tip:'Infinitely many solutions ⇔ a₁/a₂ = b₁/b₂ = c₁/c₂ (the constants are IN the proportion; for "no solution" they are the one part that does not match). The trap here is gridding an intermediate value — 9 (that is k) or 28 (that is c) — when the question asks for their sum.',
        desmos:'Graph y = ((k/3)x − 7)/5 and y = (12x − c)/20 with sliders for k and c. Only at k = 9 and c = 28 do the two lines land exactly on top of each other; move either slider and they separate.',
        desmosLatex:['y=((k/3)x-7)/5','y=(12x-c)/20','k=9','c=28']
      },
      {
        id:'HSP-03', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Elimination (answering the variable that is asked)',
        stem:'The system of equations below is given.<br><br>2x + 4y = 2<br>3x − 2y = 15<br><br>If (x, y) is the solution to the system, what is the value of y?',
        answer:'-3/2',
        expCorrect:'Eliminate x. Multiply the first equation by 3 and the second by 2 so both carry 6x: 6x + 12y = 6 and 6x − 4y = 30. Subtract the second from the first: 16y = −24 → y = −24/16 = −3/2. (Check: with y = −3/2, the first equation gives 2x − 6 = 2 → x = 4; and 3(4) − 2(−3/2) = 12 + 3 = 15 ✓.) Valid forms for the box: -3/2 or -1.5 (also -6/4, the same value). Answer: -3/2.',
        expWrong:{},
        tip:'Eliminate the variable you do NOT want: here you cancel x because the question asks for y. The classic grid-in trap is solving the system, getting the clean x = 4 first, and gridding that. Also remember the minus sign is a character in the box, and a negative answer gets six spaces instead of five.',
        desmos:'Graph 2x + 4y = 2 and 3x − 2y = 15 and click the intersection: Desmos reads (4, −1.5). The y-coordinate is what the question wants; 4 is the decoy.',
        desmosLatex:['2x+4y=2','3x-2y=15']
      },
      {
        id:'HSP-04', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear model from two conditions (unit trap)',
        stem:'Water drains from a tank at a constant rate. There are 174 liters of water in the tank 6 minutes after the drain is opened, and 120 liters in the tank 15 minutes after the drain is opened. According to this linear model, how many liters of water are in the tank one half hour after the drain is opened?',
        answer:'30',
        expCorrect:'Rate of change = (120 − 174)/(15 − 6) = −54/9 = −6 liters per minute. Build the model from the point (6, 174): V(t) = 174 − 6(t − 6) = 210 − 6t, where t is in MINUTES. One half hour is 30 minutes, so t = 30: V(30) = 210 − 6(30) = 210 − 180 = 30 liters. (Check the model against both given points: V(6) = 210 − 36 = 174 ✓ and V(15) = 210 − 90 = 120 ✓. The tank runs dry at t = 35, so 30 minutes is still inside the model.) Answer: 30.',
        expWrong:{},
        tip:'When the rate is per minute and the question says hours, convert BEFORE substituting: using t = 0.5 would give 207, an answer that looks reasonable and is completely wrong. Other values worth writing in the box: not the rate (6) and not the starting amount (210).',
        desmos:'Plot (6, 174) and (15, 120), draw y = 210 − 6x through them, and read the height at x = 30 — not at x = 0.5. The line hits the x-axis at 35 minutes, when the tank is empty.',
        desmosLatex:['(6,174)','(15,120)','y=210-6x','(30,30)']
      },
      {
        id:'HSP-05', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear inequality with fractions (greatest integer)',
        stem:'What is the greatest integer value of x that satisfies the inequality (3x + 5)/4 − (x − 7)/3 &lt; 6 ?',
        answer:'5',
        expCorrect:'Multiply every term by the LCD, 12: 3(3x + 5) − 4(x − 7) &lt; 72. Distribute carefully — the minus sign hits both terms of (x − 7): 9x + 15 − 4x + 28 &lt; 72 → 5x + 43 &lt; 72 → 5x &lt; 29 → x &lt; 5.8. The inequality is STRICT, so x has to stay below 5.8; the greatest integer that does is 5. (Check x = 5: 20/4 − (−2)/3 = 5 + 0.667 = 5.667 &lt; 6 ✓. Check x = 6: 23/4 − (−1)/3 = 5.75 + 0.333 = 6.083, which is NOT less than 6 ✓ it really fails.) Answer: 5.',
        expWrong:{},
        tip:'Kill the fractions first by multiplying by the LCD, and watch the sign when a minus sign sits in front of a parenthesis: −4(x − 7) = −4x + 28, not −4x − 28. Then the trap: the boundary 5.8 is not griddable as the answer — the question asks for the greatest INTEGER, and because the inequality is strict, 6 is out and 5 is in.',
        desmos:'Graph y = (3x+5)/4 − (x−7)/3 and y = 6. The curve is below the line to the left of x = 5.8, so the integers that work stop at 5. You can also type the inequality straight in and look at the shaded region.',
        desmosLatex:['y=(3x+5)/4-(x-7)/3','y=6','x=5.8']
      },
      {
        id:'HSP-06', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Absolute value equation (two cases, both tested)',
        stem:'What is the sum of all solutions to the equation |3x − 4| = 2x + 1 ?',
        answer:'28/5',
        expCorrect:'An absolute value equation splits into two cases. Case 1 (the inside is positive): 3x − 4 = 2x + 1 → x = 5. Case 2 (the inside is negative): 3x − 4 = −(2x + 1) → 3x − 4 = −2x − 1 → 5x = 3 → x = 3/5. Now test both in the ORIGINAL equation, because the right side must not be negative. For x = 5: |15 − 4| = 11 and 2(5) + 1 = 11 ✓. For x = 3/5: |1.8 − 4| = 2.2 and 2(0.6) + 1 = 2.2 ✓. Both survive, so the sum is 5 + 3/5 = 25/5 + 3/5 = 28/5 = 5.6. Valid forms for the box: 28/5 or 5.6. Answer: 28/5.',
        expWrong:{},
        tip:'|A| = B splits into A = B and A = −B, but when B contains a variable you MUST substitute each candidate back: any case that makes the right side negative dies. And the question asks for the SUM, so gridding 5 (the pretty solution) leaves the fractional one behind.',
        desmos:'Graph y = abs(3x − 4) and y = 2x + 1. The V-shape meets the line at exactly two points, x = 0.6 and x = 5; add them to get 5.6. If a case had been rejected, you would simply see only one intersection.',
        desmosLatex:['y=abs(3x-4)','y=2x+1']
      },
      {
        id:'HSP-07', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Sum of the solutions of a quadratic',
        stem:'The equation 3x² + 12x − 7 = 2x² + 20x + 9 is given. What is the sum of the solutions to this equation?',
        answer:'8',
        expCorrect:'Put the equation in standard form first: subtract 2x² + 20x + 9 from both sides → (3x² − 2x²) + (12x − 20x) + (−7 − 9) = 0 → x² − 8x − 16 = 0. For ax² + bx + c = 0 the two solutions add up to −b/a, so the sum is −(−8)/1 = 8. (Check: the discriminant is 64 + 64 = 128, so the solutions are (8 ± √128)/2 = 4 ± 4√2 ≈ 9.657 and −1.657. They do not factor nicely, yet 9.657 + (−1.657) = 8 ✓.) Answer: 8.',
        expWrong:{},
        tip:'Sum of the roots = −b/a and product = c/a — but ONLY after everything has been moved to one side. Reading b off the original equation gives −12/3 = −4, the classic wrong answer. When the discriminant is not a perfect square, that formula is the whole point: you never have to find the roots.',
        desmos:'Graph y = 3x² + 12x − 7 and y = 2x² + 20x + 9 and read the two intersection x-values (≈ −1.657 and ≈ 9.657): they add to 8. Graphing y = x² − 8x − 16 instead shows the same two x-intercepts.',
        desmosLatex:['y=3x^2+12x-7','y=2x^2+20x+9','y=x^2-8x-16']
      },
      {
        id:'HSP-08', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponential model evaluated at a given time',
        stem:'The function P is defined by P(t) = 150(3)^(t/8), where P(t) is the number of bacteria in a sample t hours after the sample was prepared. According to this model, how many bacteria are in the sample 1 day after it was prepared?',
        answer:'4050',
        expCorrect:'The model counts t in HOURS, so first convert: 1 day = 24 hours, and t = 24. The exponent becomes t/8 = 24/8 = 3, which says the population has tripled 3 times. P(24) = 150(3)³ = 150(27) = 4050. (Check by steps of 8 hours: 150 → 450 → 1350 → 4050 ✓.) Answer: 4050.',
        expWrong:{},
        tip:'In b^(t/n), the fraction t/n is the NUMBER OF PERIODS, not the time. Convert the units of t before substituting: plugging t = 1 (one day) gives 150(3)^(1/8) ≈ 172, a number that looks harmless and is wrong. And do not grid the growth factor 27 — they asked how many bacteria.',
        desmos:'Graph y = 150·3^(x/8) with x in hours and trace to x = 24: the curve passes through (24, 4050). Notice x = 1 sits almost at the start of the curve — that is the unit trap drawn out.',
        desmosLatex:['y=150*3^{x/8}','(24,4050)']
      },
      {
        id:'HSP-09', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Rational equation with an extraneous solution',
        stem:'What value of x satisfies the equation  20/(x² − 25) + 1 = 2/(x − 5) ?',
        answer:'-3',
        expCorrect:'Before solving, note what is forbidden: x² − 25 = (x − 5)(x + 5), so x = 5 and x = −5 would make a denominator zero and are out of the domain. Multiply everything by (x − 5)(x + 5): 20 + (x² − 25) = 2(x + 5) → x² − 5 = 2x + 10 → x² − 2x − 15 = 0 → (x − 5)(x + 3) = 0 → x = 5 or x = −3. The candidate x = 5 is exactly the forbidden value, so it is EXTRANEOUS and gets thrown out; the surviving solution is x = −3. (Check x = −3: 20/(9 − 25) + 1 = −1.25 + 1 = −0.25, and 2/(−3 − 5) = −0.25 ✓.) Answer: -3.',
        expWrong:{},
        tip:'In any rational equation, write the forbidden values down BEFORE you clear denominators, then cross off any solution that matches one. Clearing denominators is the step that invents extra roots. Gridding 5 here — the root that came out first and looks friendlier — is exactly the mistake the question is built to catch.',
        desmos:'Graph y = 20/(x² − 25) + 1 and y = 2/(x − 5). They intersect only at x = −3; at x = 5 both curves have a vertical asymptote, so nothing is there to cross.',
        desmosLatex:['y=20/(x^2-25)+1','y=2/(x-5)']
      },
      {
        id:'HSP-10', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Function defined indirectly',
        stem:'The function f satisfies f(3x − 2) = x² + 4x for every value of x. What is the value of f(10)?',
        answer:'32',
        expCorrect:'The rule is written in terms of the INPUT 3x − 2, not in terms of x. So ask which x makes that input equal to 10: 3x − 2 = 10 → 3x = 12 → x = 4. Substitute that x into the right-hand side: f(10) = 4² + 4(4) = 16 + 16 = 32. (Check by rewriting f itself: if u = 3x − 2 then x = (u + 2)/3, so f(u) = ((u+2)/3)² + 4(u+2)/3; at u = 10 that is 4² + 4(4) = 32 ✓.) Answer: 32.',
        expWrong:{},
        tip:'When a function is given as f(something) = rule, never substitute the target number into the rule: solve something = target first. Putting x = 10 into x² + 4x gives 140, the standard wrong answer. Same idea works for f(x + 1), f(2x), f(x/3).',
        desmos:'Rewrite the function and let Desmos confirm it: define f(x) = ((x+2)/3)^2 + 4(x+2)/3 and then type f(10). It returns 32. Typing f(28) returns 140 — that is the trap answer, because 28 = 3(10) − 2 is the input that corresponds to x = 10.',
        desmosLatex:['f(x)=((x+2)/3)^2+4(x+2)/3','f(10)']
      },
      {
        id:'HSP-11', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Percent change hidden in an exponential model',
        stem:'The function v is defined by v(t) = 7500(0.729)^(t/3), where v(t) is the value, in dollars, of a machine t years after it was purchased. According to this model, the value of the machine decreases by p% each year. What is the value of p?',
        answer:'10',
        expCorrect:'Rewrite the base so the exponent is a plain t: 0.729^(t/3) = (0.729^(1/3))^t. The cube root of 0.729 is 0.9, because 0.9 × 0.9 × 0.9 = 0.729. So v(t) = 7500(0.9)^t, and each year the value is multiplied by 0.9. A yearly factor of 0.9 = 1 − 0.10 is a 10% decrease, so p = 10. (Check: v(0) = 7500 and v(1) = 7500(0.9) = 6750, which is 750 less — exactly 10% of 7500 ✓.) Answer: 10.',
        expWrong:{},
        tip:'To read a percent change out of b^(t/n), first take the nth root of b: that is the factor for ONE period. Then percent change = |1 − factor| × 100. The two traps here are gridding 27.1 (from 1 − 0.729, which is the drop over three years, not one) and gridding 90 or 72.9 (the factor itself instead of the change).',
        desmos:'Graph y = 7500·0.729^(x/3) and y = 7500·0.9^x on the same screen: the two curves land exactly on top of each other, which proves the yearly factor is 0.9. The point (1, 6750) shows the 10% drop after one year.',
        desmosLatex:['y=7500*0.729^{x/3}','y=7500*0.9^x','(1,6750)']
      },
      {
        id:'HSP-12', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Discriminant with a parameter and a sign condition',
        stem:'The equation 3x² + kx + 12 = 0, where k is a constant, has exactly one real solution. If k &lt; 0, what is the value of k?',
        answer:'-12',
        expCorrect:'"Exactly one real solution" means the discriminant is zero: b² − 4ac = 0 with a = 3, b = k, c = 12 → k² − 4(3)(12) = 0 → k² − 144 = 0 → k² = 144 → k = 12 or k = −12. A squared parameter always gives TWO candidates; the condition k &lt; 0 in the stem picks the negative one, so k = −12. (Check: 3x² − 12x + 12 = 3(x² − 4x + 4) = 3(x − 2)², which touches the x-axis at the single point x = 2 ✓.) Answer: -12.',
        expWrong:{},
        tip:'Discriminant: b² − 4ac &gt; 0 gives two real solutions, = 0 gives exactly one, &lt; 0 gives none. When you solve for a squared parameter, expect ±, and then look back at the stem for the condition that keeps only one of them. The trap is gridding 12 and dropping the sign — in the grid the minus sign is typed as part of the answer.',
        desmos:'Graph y = 3x² + kx + 12 with a slider for k. The parabola is tangent to the x-axis at exactly two slider values, k = −12 and k = 12; the condition k &lt; 0 keeps the first. In between, the parabola floats above the axis (no real solutions).',
        desmosLatex:['y=3x^2+kx+12','k=-12']
      }
    ]
  });
})();
