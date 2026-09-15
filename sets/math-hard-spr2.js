/* SAT Studio question set — Math: Grid-Ins — Hard II (HS2-01 to HS2-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-hard-spr2',
    title: 'Grid-Ins — Hard II',
    section: 'math',
    level: 'Difícil',
    description: 'Twelve more hard grid-in (SPR) questions: counting integer solutions, recovering a coefficient from a root, products and differences of roots, piecewise inputs, remainders, nested compositions, mixtures and unit conversions.',
    minutes: 18,
    questions: [
      {
        id:'HS2-01', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Counting the integer solutions of a compound inequality',
        stem:'How many integer values of x satisfy the inequality −3 ≤ 4 − x/2 &lt; 9 ?',
        answer:'24',
        expCorrect:'Keep the compound inequality together and work on all three parts at once. Subtract 4 everywhere: −7 ≤ −x/2 &lt; 5. Now multiply all three parts by −2; multiplying an inequality by a negative number FLIPS both signs: 14 ≥ x &gt; −10. Written in reading order that is −10 &lt; x ≤ 14. The left end is strict, so −10 is out and the smallest integer allowed is −9; the right end is inclusive, so 14 is in. Count the integers from −9 to 14: 14 − (−9) + 1 = 24. (Check both ends: x = 14 gives 4 − 7 = −3, and −3 ≤ −3 is true ✓; x = −10 gives 4 + 5 = 9, and 9 &lt; 9 is false, so −10 really is excluded ✓; x = −9 gives 8.5, comfortably inside ✓.) Answer: 24.',
        expWrong:{},
        tip:'Two separate traps sit in this one question. First, multiplying or dividing a compound inequality by a negative flips BOTH signs. Second, the number of integers from a to b is b − a + 1, not b − a: from −9 to 14 that is 24 values, not 23. And the question asks HOW MANY, so the endpoints 14 and −9 are not the answer.',
        desmos:'Graph y = 4 − x/2 together with y = −3 and y = 9. The line stays between the two horizontal lines only from x = −10 to x = 14; tap each crossing to see that x = 14 is included and x = −10 is not.',
        desmosLatex:['y=4-x/2','y=-3','y=9']
      },
      {
        id:'HS2-02', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'The value that makes two expressions equal',
        stem:'The two expressions below are given.<br><br>(2x + 7)/5<br>(x − 1)/2 − 3<br><br>What value of x makes the two expressions equal?',
        answer:'49',
        expCorrect:'Set them equal and clear the fractions with the LCD, 10 — remembering that the −3 gets multiplied too: (2x + 7)/5 = (x − 1)/2 − 3 becomes 2(2x + 7) = 5(x − 1) − 30. Expand: 4x + 14 = 5x − 5 − 30 = 5x − 35. Subtract 4x from both sides: 14 = x − 35 → x = 49. (Check by evaluating both expressions at x = 49: (98 + 7)/5 = 105/5 = 21, and (49 − 1)/2 − 3 = 24 − 3 = 21 ✓ the same value.) Answer: 49.',
        expWrong:{},
        tip:'Multiply EVERY term by the LCD, including a lone constant that sits outside any fraction: skipping the −3 turns 5x − 35 into 5x − 8 and hands you x = 22. Then the grid-in trap: both expressions are worth 21 at the solution, and 21 is the last number your pencil writes. The question asks for the value of x, so 49 goes in the box.',
        desmos:'Graph y = (2x + 7)/5 and y = (x − 1)/2 − 3 and zoom out until they cross: the intersection is (49, 21). The x-coordinate is the answer; 21 is the shared value of the two expressions.',
        desmosLatex:['y=(2x+7)/5','y=(x-1)/2-3','(49,21)']
      },
      {
        id:'HS2-03', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Recovering a coefficient from a known root',
        stem:'The equation 4x² + kx − 15 = 0, where k is a constant, has x = −3/2 as one of its solutions. What is the value of k?',
        answer:'-4',
        expCorrect:'A solution is a number that makes the equation true, so substitute it and solve for k. Watch the square: 4(−3/2)² = 4(9/4) = 9, and k(−3/2) = −3k/2. The equation becomes 9 − 3k/2 − 15 = 0 → −3k/2 − 6 = 0 → −3k/2 = 6 → k = 6(−2/3) = −4. (Check: with k = −4 the equation is 4x² − 4x − 15 = 0, which factors as (2x + 3)(2x − 5) = 0, giving x = −3/2 ✓ and x = 5/2.) Answer: -4.',
        expWrong:{},
        tip:'A given solution is an invitation to substitute, not to factor. Two things go wrong here: squaring a negative fraction, since (−3/2)² = +9/4 and never −9/4; and the sign at the end, which has to be typed into the box as a character. The other root, 5/2, is a decoy — the question asks for the coefficient k, not for a solution.',
        desmos:'Graph y = 4x² + kx − 15 with a slider for k and watch where the parabola cuts the x-axis. Only at k = −4 does it pass exactly through (−1.5, 0).',
        desmosLatex:['y=4x^2+kx-15','k=-4','(-1.5,0)']
      },
      {
        id:'HS2-04', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Product of the solutions of a quadratic',
        stem:'The equation (2x − 3)(x + 4) = 3x + 10 is given. What is the product of the solutions to this equation?',
        answer:'-11',
        expCorrect:'Expand and move everything to one side before using any root formula. (2x − 3)(x + 4) = 2x² + 8x − 3x − 12 = 2x² + 5x − 12, so the equation is 2x² + 5x − 12 = 3x + 10 → 2x² + 2x − 22 = 0. For ax² + bx + c = 0 the product of the two solutions is c/a, so the product is −22/2 = −11. (Check: dividing through by 2 gives x² + x − 11 = 0, whose solutions are (−1 ± √45)/2 ≈ 2.854 and ≈ −3.854; their product is 2.854 × (−3.854) ≈ −11 ✓. Nothing factors over the integers here, which is exactly why the formula earns its keep.) Answer: -11.',
        expWrong:{},
        tip:'Product of the roots = c/a; sum of the roots = −b/a. Both work only once the equation reads ax² + bx + c = 0, and both keep the signs of a and c. Three traps: gridding −22 (that is c, not c/a), gridding −1 (that is the sum), and dropping the minus sign to write 11.',
        desmos:'Graph y = (2x − 3)(x + 4) and y = 3x + 10; the crossings are at x ≈ −3.854 and x ≈ 2.854. Multiply them on a calculator line to get −11 — the same number c/a gives with no decimals at all.',
        desmosLatex:['y=(2x-3)(x+4)','y=3x+10','y=2x^2+2x-22']
      },
      {
        id:'HS2-05', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'y-intercept of a line through two given points',
        stem:'The function f is linear, and f(−6) = 13 and f(9) = −7. What is the value of f(0)?',
        answer:'5',
        expCorrect:'A linear function has a constant rate of change: m = (−7 − 13)/(9 − (−6)) = −20/15 = −4/3. Now travel from the known point (−6, 13) to x = 0, a run of 6 units to the right: f(0) = 13 + 6(−4/3) = 13 − 8 = 5. (Or build the whole function: f(x) = 13 − (4/3)(x + 6) = 5 − (4/3)x, then check it against the second given point: f(9) = 5 − 12 = −7 ✓.) Answer: 5.',
        expWrong:{},
        tip:'f(0) IS the y-intercept, so this question is asking where the line crosses the y-axis. Build the slope as change in outputs over change in inputs, in that order: flipping it to 15/(−20) = −3/4 gives f(0) = 8.5, a clean-looking wrong answer. And do not grid the slope −4/3 — it is the number you worked hardest for, which is why it tempts.',
        desmos:'Plot (−6, 13) and (9, −7), then graph y = 5 − (4/3)x through them and read the height at x = 0: the line meets the y-axis at 5.',
        desmosLatex:['(-6,13)','(9,-7)','y=5-(4/3)x','(0,5)']
      },
      {
        id:'HS2-06', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Piecewise function: finding the input for a given output',
        stem:'The function f is defined as follows.<br><br>f(x) = 2x + 9 for x &lt; −1<br>f(x) = x² − 3 for x ≥ −1<br><br>There is exactly one value of x for which f(x) = 13. What is that value?',
        answer:'4',
        expCorrect:'Test both branches, then check every candidate against the interval that produced it. Top branch: 2x + 9 = 13 → 2x = 4 → x = 2. That rule only applies when x &lt; −1, and 2 is not less than −1, so this candidate is rejected. Bottom branch: x² − 3 = 13 → x² = 16 → x = 4 or x = −4. That rule applies when x ≥ −1: 4 qualifies ✓, and −4 does not, since −4 &lt; −1. Exactly one survivor: x = 4. (Check: 4 ≥ −1, so f(4) uses the bottom rule and gives 16 − 3 = 13 ✓.) Answer: 4.',
        expWrong:{},
        tip:'Solve each branch, then test each answer against the condition written beside that branch: a candidate that lands outside its own interval is not a solution at all. Three candidates appear here (2, 4 and −4) and two of them die. The trap is stopping at the first branch — 2 solves an equation, but not this function.',
        desmos:'Graph y = 2x + 9, y = x² − 3 and y = 13, then add the vertical line x = −1. Only the pieces on the correct side of x = −1 belong to f: the parabola on the right meets y = 13 at x = 4, while the line meets y = 13 at x = 2, on the side where that rule is not in use.',
        desmosLatex:['y=2x+9','y=x^2-3','y=13','x=-1']
      },
      {
        id:'HS2-07', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Remainder of a polynomial division (two chained steps)',
        stem:'The polynomial p is defined by p(x) = x³ + ax² − 7x + 12, where a is a constant. If (x − 3) is a factor of p(x), what is the remainder when p(x) is divided by (x + 2)?',
        answer:'10',
        expCorrect:'The same theorem is used twice. Step 1 — a factor of (x − 3) means p(3) = 0: 27 + 9a − 21 + 12 = 0 → 9a + 18 = 0 → a = −2, so p(x) = x³ − 2x² − 7x + 12. Step 2 — the remainder on dividing by (x + 2) is p(−2), because x + 2 = x − (−2): p(−2) = −8 − 2(4) − 7(−2) + 12 = −8 − 8 + 14 + 12 = 10. (Check by factoring out the known factor: p(x) = (x − 3)(x² + x − 4), so p(−2) = (−5)(4 − 2 − 4) = (−5)(−2) = 10 ✓.) Answer: 10.',
        expWrong:{},
        tip:'Remainder theorem: dividing by (x − c) leaves p(c). Read c off the divisor with the sign flipped — dividing by (x + 2) means evaluating at x = −2, never at x = 2. That slip is baked into this question: p(2) = −2, which is also the value of a, so two different wrong routes land on the same number and look confirmed.',
        desmos:'Graph y = x³ − 2x² − 7x + 12. It crosses the x-axis at x = 3, which confirms that (x − 3) is a factor, and the point (−2, 10) on the curve is the remainder being asked for.',
        desmosLatex:['y=x^3-2x^2-7x+12','(3,0)','(-2,10)']
      },
      {
        id:'HS2-08', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Nested composition of functions',
        stem:'The functions f and g are defined by f(x) = 2x + 1 and g(x) = x² − 3x. What is the value of f(g(f(−2)))?',
        answer:'37',
        expCorrect:'Work from the inside out, one layer at a time. Innermost: f(−2) = 2(−2) + 1 = −4 + 1 = −3. Middle: g(−3) = (−3)² − 3(−3) = 9 + 9 = 18 — subtracting a negative ADDS, so the two terms pile up instead of cancelling. Outermost: f(18) = 2(18) + 1 = 37. (Check the chain in one line: −2 → −3 → 18 → 37 ✓.) Answer: 37.',
        expWrong:{},
        tip:'A nested composition is evaluated inside out: get the innermost value first and carry it upward. The sign is where this one bites — g(−3) = 9 + 9 = 18, not 9 − 9 = 0, and a student who writes 0 there ends at 1 and feels fine about it. Also note 18 is the last big number before the final step, so it is the one that gets gridded by mistake.',
        desmos:'Define f(x) = 2x + 1 and g(x) = x² − 3x in Desmos, then type f(g(f(-2))) on its own line: it returns 37. Typing g(f(-2)) alone returns 18, which shows you exactly which value is only an intermediate one.',
        desmosLatex:['f(x)=2x+1','g(x)=x^2-3x','f(g(f(-2)))']
      },
      {
        id:'HS2-09', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Mixture: solving for the total, not the amount added',
        stem:'A chemist has 12 liters of a solution that is 20% acid by volume. She adds some amount of a solution that is 50% acid by volume, and the mixture that results is 30% acid by volume. How many liters of the 30% mixture does she end up with?',
        answer:'18',
        expCorrect:'Track the ACID, not the bottles. Let x be the liters of 50% solution added. Acid going in: 0.20(12) + 0.50x. Acid coming out: 0.30(12 + x), because the final volume is 12 + x. Set them equal: 2.4 + 0.5x = 3.6 + 0.3x → 0.2x = 1.2 → x = 6 liters added. The question asks for the size of the MIXTURE, so the answer is 12 + 6 = 18 liters. (Check: the acid is 2.4 + 0.5(6) = 5.4 liters inside 18 liters of mixture, and 5.4/18 = 0.30 = 30% ✓.) Answer: 18.',
        expWrong:{},
        tip:'Mixture setup: (acid in the first) + (acid in the second) = (acid in the result), where every term is a percent times a volume and the final volume is the SUM of the two volumes. Then reread the last line: here the 6 you solved for is only half the job, because the question asks for the total mixture — 18 goes in the box.',
        desmos:'Graph y = (2.4 + 0.5x)/(12 + x), the acid fraction of the mixture, together with y = 0.3. They meet at x = 6, the liters added, so the total is 12 + 6 = 18.',
        desmosLatex:['y=(2.4+0.5x)/(12+x)','y=0.3','(6,0.3)']
      },
      {
        id:'HS2-10', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Positive difference between the two solutions',
        stem:'The equation x(2x − 7) = 15 is given. What is the positive difference between the two solutions to this equation?',
        answer:'6.5',
        expCorrect:'Put the equation in standard form first: 2x² − 7x = 15 → 2x² − 7x − 15 = 0. Factor: (2x + 3)(x − 5) = 0 → x = −3/2 or x = 5. The positive difference is 5 − (−3/2) = 5 + 1.5 = 6.5. (Check with the shortcut that works even when nothing factors: the gap between the roots is √(b² − 4ac)/|a| = √(49 + 120)/2 = √169/2 = 13/2 = 6.5 ✓.) Valid forms for the box: 6.5 or 13/2. Answer: 6.5.',
        expWrong:{},
        tip:'Positive difference means larger minus smaller, so the result is never negative — and subtracting a negative root adds. The two decoys are the SUM, 5 + (−1.5) = 3.5, and a single root (5 or −1.5). When the quadratic refuses to factor, √(b² − 4ac)/|a| still gives the gap between the roots.',
        desmos:'Graph y = 2x² − 7x − 15 and read the x-intercepts: −1.5 and 5. The horizontal gap between them is 6.5, which you can see by plotting the points (−1.5, 0) and (5, 0).',
        desmosLatex:['y=2x^2-7x-15','(-1.5,0)','(5,0)']
      },
      {
        id:'HS2-11', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Constant that makes a system have no solution',
        stem:'In the system of equations below, a is a constant.<br><br>ax − 9y = 15<br>4x + 6y = −7<br><br>If the system has no solution, what is the value of a?',
        answer:'-6',
        expCorrect:'No solution means the two lines are PARALLEL and distinct: same slope, different intercept. Match the coefficients across the equations: a/4 = −9/6. Cross-multiply: 6a = 4(−9) = −36 → a = −6. Then confirm the lines are distinct rather than identical by checking that the constants do NOT follow that same ratio: −9/6 = −1.5 while 15/(−7) ≈ −2.14, so the system really has no solution. (Check in slope form: with a = −6 the first equation is −6x − 9y = 15 → y = −(2/3)x − 5/3, and the second is 4x + 6y = −7 → y = −(2/3)x − 7/6. Same slope, different y-intercepts ✓ parallel lines that never meet.) Answer: -6.',
        expWrong:{},
        tip:'No solution ⇔ the x- and y-coefficients are proportional but the constants are not; infinitely many ⇔ all three ratios match. Always run the constant check at the end, because the coefficient condition alone cannot tell those two cases apart. Watch the signs: the y-coefficients are −9 and 6, and treating both as positive gives a = +6, the mirror-image wrong answer.',
        desmos:'Graph y = (ax − 15)/9 and y = (−7 − 4x)/6 with a slider for a. As a moves toward −6 the first line rotates until it is exactly parallel to the second; at a = −6 they never touch, and that is what no solution looks like.',
        desmosLatex:['y=(ax-15)/9','y=(-7-4x)/6','a=-6']
      },
      {
        id:'HS2-12', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear rate model with a unit conversion at both ends',
        stem:'A machine dispenses liquid at a constant rate. The volume it has dispensed is modeled by V(t) = 250t, where V(t) is the volume in milliliters and t is the time in minutes since the machine started. According to this model, how many liters does the machine dispense in 90 seconds? (1 liter = 1,000 milliliters.)',
        answer:'0.375',
        expCorrect:'There are two conversions: one on the way in and one on the way out. In: the model measures t in MINUTES, so 90 seconds = 90/60 = 1.5 minutes. Substitute: V(1.5) = 250(1.5) = 375. Out: that 375 is in MILLILITERS while the question asks for liters, so divide by 1,000: 375/1000 = 0.375 liters. (Check the other way around: 250 mL per minute is 0.25 liters per minute, and 0.25 × 1.5 = 0.375 ✓.) Valid forms for the box: .375 or 0.375. Answer: 0.375.',
        expWrong:{},
        tip:'With any rate model, check the units at BOTH ends before writing anything: the units of t going in, and the units of the output coming out. Substituting t = 90 treats seconds as minutes and gives 22500, while stopping at 375 answers in milliliters when liters were asked for. Both mistakes are common, and neither is the number they want.',
        desmos:'Graph y = 250x with x in minutes and mark (1.5, 375): that is the volume in milliliters after 90 seconds. Then type 375/1000 to convert, and the calculator returns 0.375.',
        desmosLatex:['y=250x','(1.5,375)','375/1000']
      }
    ]
  });
})();
