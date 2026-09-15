/* SAT Studio question set — Math: Algebra — Brutal (BAL-01 to BAL-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-brutal-alg1',
    title: 'Algebra — Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Brutal Algebra: parameter systems with two roots and a condition that kills one, absolute-value rings and no-solution cases, unit traps, literal equations with the variable on both sides, target expressions, and integer-boundary inequalities.',
    minutes: 20,
    questions: [
      {
        id:'BAL-01', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Systems with a parameter (infinitely many solutions, two roots)',
        stem:'In the system of equations below, k and c are constants and k > 0.<br><br>3x − ky = 12<br>kx − 27y = c<br><br>If the system has infinitely many solutions, what is the value of c − k?',
        choices:{A:'27', B:'36', C:'45', D:'−27'},
        correct:'A',
        expCorrect:'Infinitely many solutions means the two equations describe the SAME line, so all three ratios match: 3/k = (−k)/(−27) = 12/c. Start with the coefficients: (−k)/(−27) = k/27, so 3/k = k/27 → k² = 81 → k = 9 or k = −9. The stem says k > 0, so k = 9. The common ratio is then 3/9 = 1/3, and 12/c = 1/3 → c = 36. The question asks for c − k = 36 − 9 = 27. (Check: with k = 9 and c = 36 the system is 3x − 9y = 12 and 9x − 27y = 36, and the second equation is exactly 3 times the first ✓.)',
        expWrong:{
          B:'36 is the value of c, the last thing you computed. You still owe the subtraction: 36 − 9 = 27. On a brutal item the number you just finished calculating is almost never the answer.',
          C:'45 is c + k. The question asks for c − k. Both combinations look equally reasonable on the page, which is exactly why the last line of the stem has to be reread before you mark.',
          D:'−27 comes from the other root, k = −9, which really does give infinitely many solutions (with c = −36). But the stem states k > 0, and that condition is there precisely to kill this option. A squared parameter always produces two roots; the condition in the stem picks one of them.'
        },
        tip:'Infinitely many solutions ⇒ EVERY ratio matches, constants included: a₁/a₂ = b₁/b₂ = c₁/c₂. When the parameter appears in both equations you end up with k², so expect two roots, then hunt the stem for the condition (k > 0, k is an integer, …) that discards one.',
        desmos:'Graph both equations with sliders for k and c: at k = 9, c = 36 the two lines lie exactly on top of each other, and at k = −9, c = −36 they do too, which is why the k > 0 condition matters.',
        desmosLatex:['3x-ky=12','kx-27y=c','k=9','c=36']
      },
      {
        id:'BAL-02', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Systems with a parameter (no solution, sum of all values)',
        stem:'In the system of equations below, k is a constant.<br><br>kx + 4y = 10<br>9x + ky = 6<br><br>What is the sum of all values of k for which the system has no solution?',
        choices:{A:'0', B:'6', C:'12', D:'36'},
        correct:'A',
        expCorrect:'No solution means parallel lines: the coefficients are proportional but the constants are not. Coefficients first: k/9 = 4/k → k² = 36 → k = 6 or k = −6. Now test each against the constants. With k = 6 the system is 6x + 4y = 10 and 9x + 6y = 6; dividing gives 3x + 2y = 5 and 3x + 2y = 2 — same line direction, different constants ✓ no solution. With k = −6 it is −6x + 4y = 10 and 9x − 6y = 6; dividing gives −3x + 2y = 5 and −3x + 2y = −2 ✓ no solution as well. Both values qualify, so the sum is 6 + (−6) = 0.',
        expWrong:{
          B:'6 keeps only the positive square root. k² = 36 has TWO solutions, and here the negative one survives the constant check too, so it belongs in the sum.',
          C:'12 adds the two roots as if both were +6. The roots are +6 and −6: they cancel, they do not double.',
          D:'36 is the value of k², one step short. You still have to take the square root — and take it with both signs.'
        },
        tip:'When the parameter sits in both equations, the proportion produces k² and therefore two candidates. Test EACH candidate against the constants: a candidate that also matches the constant ratio gives infinitely many solutions, not zero, and has to be thrown out. Here neither does, so both count and they cancel.',
        desmos:'Graph both equations with a k slider and sweep it slowly: the lines come out parallel (no crossing at all) at k = 6 and again at k = −6, and they cross at every other value.',
        desmosLatex:['kx+4y=10','9x+ky=6','k=6']
      },
      {
        id:'BAL-03', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Absolute value inequality (recovering the constants from the solution set)',
        stem:'In the inequality |ax − b| ≤ 9, a and b are constants and a > 0. The solution set of this inequality is 2 ≤ x ≤ 8. What is the value of a + b?',
        choices:{A:'8', B:'15', C:'18', D:'−18'},
        correct:'C',
        expCorrect:'Open the absolute value into a sandwich: −9 ≤ ax − b ≤ 9, so b − 9 ≤ ax ≤ b + 9, and since a > 0 you may divide by a without flipping anything: (b − 9)/a ≤ x ≤ (b + 9)/a. Match those endpoints to the ones given: (b − 9)/a = 2 and (b + 9)/a = 8. Subtracting the first equation from the second kills b: 18/a = 6 → a = 3. Then b − 9 = 3(2) = 6 → b = 15. So a + b = 3 + 15 = 18. (Check: |3x − 15| ≤ 9 → −9 ≤ 3x − 15 ≤ 9 → 6 ≤ 3x ≤ 24 → 2 ≤ x ≤ 8 ✓.)',
        expWrong:{
          A:'8 uses b = 5, the CENTER of the interval from 2 to 8. The center is b/a, not b: with a = 3 that gives b = 15. The quick "center and radius" reading of an absolute value works only after the whole expression has been divided by a.',
          B:'15 is the value of b by itself. The question asks for a + b, so the 3 is still missing. Intermediate values are always among the options.',
          D:'−18 matches the endpoints to the wrong signs — ax − b = +9 at x = 2 and ax − b = −9 at x = 8 — which produces a = −3 and b = −15. The stem says a > 0, so that assignment is impossible: with a positive a, the LEFT endpoint has to come from the −9 side.'
        },
        tip:'|ax − b| ≤ c becomes −c ≤ ax − b ≤ c. Subtracting the two endpoint equations eliminates b in one move and hands you a, because 2c/a is always the LENGTH of the solution interval. Back-substitute for b, then reread what was asked: a + b, not b.',
        desmos:'Graph y = |3x − 15| and the horizontal line y = 9: the V dips below the line exactly between x = 2 and x = 8, which is the solution set the problem describes. Put a and b on sliders to see how each one moves the interval.',
        desmosLatex:['y=\\left|ax-b\\right|','y=9','a=3','b=15']
      },
      {
        id:'BAL-04', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Compound absolute value inequality (two branches, counting integers)',
        stem:'How many integer values of x satisfy the inequality 4 ≤ |2x + 3| ≤ 10 ?',
        answer:'6',
        expCorrect:'A two-sided absolute-value inequality like this one is really TWO intervals, because |2x + 3| can be big in either direction. Branch 1 (inside positive): 4 ≤ 2x + 3 ≤ 10 → 1 ≤ 2x ≤ 7 → 0.5 ≤ x ≤ 3.5, which holds the integers 1, 2, 3. Branch 2 (inside negative): 4 ≤ −(2x + 3) ≤ 10 → −10 ≤ 2x + 3 ≤ −4 → −13 ≤ 2x ≤ −7 → −6.5 ≤ x ≤ −3.5, which holds −6, −5, −4. Total: 3 + 3 = 6 integers. (Spot check: x = −6 gives |−9| = 9 and 4 ≤ 9 ≤ 10 ✓; x = −3 gives |−3| = 3, too small ✗; x = 4 gives |11| = 11, too big ✗.) Answer: 6.',
        tip:'"At least 4" and "at most 10" at the same time is a RING, not a single band: the |expr| ≥ 4 half splits into expr ≥ 4 OR expr ≤ −4, so the solution lands on both sides of the vertex. Solve the two branches separately and only then count. Answering 3 means you found the positive branch and stopped.',
        desmos:'Graph y = |2x + 3| together with y = 4 and y = 10: the part of the V trapped between the two horizontal lines is two separate strips, one on each side of the vertex, and each strip contains 3 integers.',
        desmosLatex:['y=\\left|2x+3\\right|','y=4','y=10']
      },
      {
        id:'BAL-05', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear model in context (unit trap: minutes vs. hours)',
        stem:'A large video file is being uploaded to a server. The number of megabytes M still left to upload t minutes after the upload begins is modeled by M = 4,500 − 7.5t. According to the model, how many hours after the upload begins are 1,800 megabytes still left to upload?',
        choices:{A:'4', B:'6', C:'10', D:'360'},
        correct:'B',
        expCorrect:'Set the model equal to 1,800: 4,500 − 7.5t = 1,800 → 7.5t = 2,700 → t = 360. But t is measured in MINUTES and the question asks for hours, so divide: 360 ÷ 60 = 6 hours. (Check: 4,500 − 7.5(360) = 4,500 − 2,700 = 1,800 ✓.)',
        expWrong:{
          A:'4 divides the leftover amount by the rate: 1,800 ÷ 7.5 = 240 minutes = 4 hours. But 1,800 is what is still LEFT, not what has already gone up; the amount uploaded is 4,500 − 1,800 = 2,700.',
          C:'10 is how long the ENTIRE upload takes: 4,500 ÷ 7.5 = 600 minutes = 10 hours. That is the moment M reaches 0, not the moment M reaches 1,800.',
          D:'360 is the right number in the wrong unit: it is minutes, the intermediate value. The model runs on minutes, the question asks for hours, so the ÷ 60 is mandatory.'
        },
        tip:'Mark the units twice before solving: once in the model (t in minutes) and once in the last line of the question (hours). Then check what the variable actually MEASURES — here M is what remains, so "1,800 left" means 2,700 already transferred.',
        desmos:'Graph y = 4500 − 7.5x and y = 1800 and tap the intersection: it lands at x = 360, in minutes. Then type 360/60 on the next line to land on 6 hours.',
        desmosLatex:['y=4500-7.5x','y=1800','360/60']
      },
      {
        id:'BAL-06', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear model in context (shifted start + "in thousands")',
        stem:'The number of subscribers S, in thousands, of a magazine is modeled by S(t) = 12.5 + 0.8(t − 6), where t is the number of years after 2010. According to this model, what is the first year in which the magazine has at least 20,000 subscribers?',
        choices:{A:'2014', B:'2020', C:'2025', D:'2026'},
        correct:'D',
        expCorrect:'S is measured in THOUSANDS, so 20,000 subscribers means S = 20. Solve 12.5 + 0.8(t − 6) ≥ 20 → 0.8(t − 6) ≥ 7.5 → t − 6 ≥ 9.375 → t ≥ 15.375. Since t counts whole years after 2010, the first t that works is t = 16, and the year is 2010 + 16 = 2026. (Check: t = 15 gives 12.5 + 0.8(9) = 19.7 thousand = 19,700, still short; t = 16 gives 12.5 + 0.8(10) = 20.5 thousand = 20,500 ✓.)',
        expWrong:{
          A:'2014 reads the shift backwards, as 0.8(t + 6): that gives 0.8t ≥ 2.7 → t ≥ 3.375 → t = 4 → 2014. The model says t − 6, so the shift SUBTRACTS.',
          B:'2020 ignores the shift and treats 12.5 as the value at t = 0: 12.5 + 0.8t ≥ 20 → t ≥ 9.375 → t = 10 → 2020. But 12.5 is the value at t = 6, that is, in 2016 — not the starting value.',
          C:'2025 rounds t = 15.375 DOWN to 15. When the question says "at least" and "first year", the whole number you need is the one ABOVE the decimal, and t = 15 lands at 19,700 subscribers.'
        },
        tip:'Two habits for models in context. First, a model given "in thousands" needs the TARGET converted before you solve: 20,000 subscribers is S = 20, never S = 20,000. Second, a model written with a shift like (t − 6) does not have its intercept on display — the visible constant belongs to t = 6. And "first year that reaches" always rounds UP, never to the nearest.',
        desmos:'Graph y = 12.5 + 0.8(x − 6) and y = 20: they cross at x = 15.375, so the first whole year is x = 16. Tap x = 15 and x = 16 on the line to see 19.7 and 20.5 thousand.',
        desmosLatex:['y=12.5+0.8(x-6)','y=20','(15,19.7)','(16,20.5)']
      },
      {
        id:'BAL-07', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Literal equation (variable in the denominator and on both sides)',
        stem:'The equation y = (3x + 5)/(x − 2) relates the quantities x and y, where x ≠ 2 and y ≠ 3. Which of the following expresses x in terms of y?',
        choices:{
          A:'x = 7/(y − 3)',
          B:'x = (2y − 5)/(y − 3)',
          C:'x = (2y + 5)/(3 − y)',
          D:'x = (2y + 5)/(y − 3)'
        },
        correct:'D',
        expCorrect:'Clear the denominator first: y(x − 2) = 3x + 5 → yx − 2y = 3x + 5. Now x appears on BOTH sides, so gather every x term on one side and everything else on the other: yx − 3x = 5 + 2y. Factor the x out: x(y − 3) = 2y + 5. Divide by (y − 3), which is legal because the stem guarantees y ≠ 3: x = (2y + 5)/(y − 3). (Check with x = 4: y = (12 + 5)/(4 − 2) = 8.5, and (2(8.5) + 5)/(8.5 − 3) = 22/5.5 = 4 ✓.)',
        expWrong:{
          A:'7/(y − 3) comes from not distributing the y across (x − 2): the left side is yx − 2y, not yx − 2. Dropping that y turns 5 + 2y into the bare constant 7.',
          B:'(2y − 5)/(y − 3) flips the sign of the 5. The 5 starts on the right-hand side and stays there; the term that crosses the equals sign is the −2y, which arrives as +2y. Nothing makes the 5 negative.',
          C:'(2y + 5)/(3 − y) collects the x terms as 3x − yx instead of yx − 3x. That is allowed, but then the OTHER side has to flip sign as well and becomes −(2y + 5). Flipping one side only negates the whole answer.'
        },
        tip:'Solving for a variable that appears twice is always the same three moves: clear denominators, move every term containing that variable to one side, then FACTOR it out. The factoring step is the one students skip, and without it there is nothing to divide by.',
        desmos:'Graph y = (3x + 5)/(x − 2), then on a second line enter x = (2y + 5)/(y − 3): Desmos accepts an equation solved for x and draws the SAME curve, which is the visual proof that the two forms are equivalent.',
        desmosLatex:['y=\\frac{3x+5}{x-2}','x=\\frac{2y+5}{y-3}']
      },
      {
        id:'BAL-08', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Literal equation with a value substituted (unknown in the denominator)',
        stem:'A cyclist rides from a park to a lake at a constant speed of x kilometers per hour and returns along the same road at a constant speed of y kilometers per hour. The average speed A for the entire round trip, in kilometers per hour, satisfies A = 2xy/(x + y). On one round trip the cyclist rode to the lake at 60 kilometers per hour and the average speed for the entire round trip was 48 kilometers per hour. What was the value of y for that trip?',
        answer:'40',
        expCorrect:'Substitute A = 48 and x = 60: 48 = 2(60)y/(60 + y) = 120y/(60 + y). Multiply both sides by (60 + y) to lift y out of the denominator: 48(60 + y) = 120y → 2,880 + 48y = 120y. Now collect the y terms, which sit on both sides: 2,880 = 72y → y = 40. (Check: 2(60)(40)/(60 + 40) = 4,800/100 = 48 ✓.) Answer: 40.',
        tip:'When the unknown is stuck in a denominator, multiply the WHOLE equation by that denominator before doing anything else; what is left is an ordinary "variable on both sides" problem. And notice what this formula is not: a round-trip average is not the average of the two speeds, so the answer 36 — from (60 + y)/2 = 48 — is the trap this question was built around.',
        desmos:'Graph y = 120x/(60 + x), using x for the return speed, and the horizontal line y = 48: they cross at x = 40. The curve flattening out toward 120 also shows why a round-trip average can never reach twice the outbound speed, no matter how fast the return is.',
        desmosLatex:['y=\\frac{120x}{60+x}','y=48','(40,48)']
      },
      {
        id:'BAL-09', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'System: target expression from a symmetric pair',
        stem:'If 7x + 4y = 45 and 4x + 7y = 43, what is the value of 2x + 5y?',
        choices:{A:'8', B:'27', C:'28', D:'29'},
        correct:'B',
        expCorrect:'The coefficients are the same pair in swapped order, which is the signal to combine instead of solving. Add the equations: 11x + 11y = 88 → x + y = 8. Subtract the second from the first: 3x − 3y = 2 → x − y = 2/3. Those two give x = 13/3 and y = 11/3. Then 2x + 5y = 26/3 + 55/3 = 81/3 = 27. (Shortcut without fractions on the page: 2x + 5y = 2(x + y) + 3y = 16 + 3(11/3) = 16 + 11 = 27.) (Check: 7(13/3) + 4(11/3) = (91 + 44)/3 = 135/3 = 45 ✓.)',
        expWrong:{
          A:'8 is x + y, the first intermediate result. It is what you need on the way, not what was asked: 2x + 5y weights the two variables differently, so the plain sum cannot answer it.',
          C:'28 assumes x = y = 4. The sum x + y = 8 is right, but the halves are not equal — the constants 45 and 43 differ, so x and y differ too. Splitting the sum evenly gives 2(4) + 5(4) = 28.',
          D:'29 swaps x and y. From 3x − 3y = 2 the difference is POSITIVE in favor of x, so x = 13/3 and y = 11/3. Reading it as y − x = 2/3 gives 2(11/3) + 5(13/3) = 87/3 = 29.'
        },
        tip:'When the two equations use the same coefficients in swapped order (7 and 4, then 4 and 7), ADD them to get x + y and SUBTRACT them to get x − y. Every target expression ax + by can be rebuilt from those two, and you never meet an ugly fraction until the final line.',
        desmos:'Graph 7x + 4y = 45 and 4x + 7y = 43 and tap the intersection: it sits at about (4.333, 3.667), which is (13/3, 11/3). Evaluate 2x + 5y there and it comes out to exactly 27.',
        desmosLatex:['7x+4y=45','4x+7y=43','2\\cdot\\frac{13}{3}+5\\cdot\\frac{11}{3}']
      },
      {
        id:'BAL-10', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'System: target expression needing a scaled combination',
        stem:'If 4x + 3y = 26 and x + 2y = 14, what is the value of 6x + 7y?',
        choices:{A:'6', B:'40', C:'54', D:'66'},
        correct:'C',
        expCorrect:'Find the combination that builds the target directly. Double the second equation: 2x + 4y = 28. Add it to the first: (4x + 3y) + (2x + 4y) = 6x + 7y = 26 + 28 = 54. No need to find x or y at all. (Check by solving anyway: x = 14 − 2y, so 4(14 − 2y) + 3y = 26 → 56 − 5y = 26 → y = 6 and x = 2; then 6(2) + 7(6) = 12 + 42 = 54 ✓.)',
        expWrong:{
          A:'6 is the value of y. It is a genuine number from this system, but the question asks for an expression, not a variable — and the individual variables are always sitting among the options on a brutal item.',
          B:'40 adds the two equations exactly as they stand: (4x + 3y) + (x + 2y) = 5x + 5y = 40. That statement is TRUE, but 5x + 5y is not 6x + 7y. Check the coefficients land on the target before you add.',
          D:'66 doubles the wrong equation: 2(4x + 3y) + (x + 2y) = 9x + 8y = 52 + 14 = 66. True again, and again about the wrong expression. The target 6x + 7y needs one copy of the first equation and TWO of the second.'
        },
        tip:'To hit a target expression, solve for the multipliers first: you want m(4x + 3y) + n(x + 2y) = 6x + 7y, so 4m + n = 6 and 3m + 2n = 7, giving m = 1 and n = 2. That two-second system tells you exactly which equation to scale, and it is far quicker than solving the original one.',
        desmos:'Graph 4x + 3y = 26 and x + 2y = 14: they meet at (2, 6). Evaluate 6x + 7y there to confirm 54 — though on the real test the combination 1×(first) + 2×(second) gets you there without opening the calculator.',
        desmosLatex:['4x+3y=26','x+2y=14','6\\cdot2+7\\cdot6']
      },
      {
        id:'BAL-11', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear inequality in context (greatest integer that works)',
        stem:'A print shop charges a one-time setup fee of $45 plus $2.80 for each poster. A second shop charges no setup fee but $4.15 for each poster. What is the greatest number of posters for which the second shop’s total charge is less than the first shop’s total charge?',
        choices:{A:'10', B:'16', C:'33', D:'34'},
        correct:'C',
        expCorrect:'Let n be the number of posters. Second shop: 4.15n. First shop: 45 + 2.80n. "The second costs less" is 4.15n < 45 + 2.80n. Subtract 2.80n from both sides: 1.35n < 45 → n < 33.33… Since n is a whole number and the inequality is strict, the greatest value that works is n = 33. (Check: at n = 33 the second shop charges $136.95 and the first charges 45 + 92.40 = $137.40, so the second is cheaper ✓. At n = 34 the second charges $141.10 and the first charges $140.20, so the second is no longer cheaper ✓.)',
        expWrong:{
          A:'10 comes from 45 ÷ 4.15 ≈ 10.8, which weighs the setup fee against the second shop’s price alone. The first shop also charges per poster, so what erodes the $45 head start is the DIFFERENCE between the rates, 4.15 − 2.80 = 1.35.',
          B:'16 comes from 45 ÷ 2.80 ≈ 16.1 — the same mistake as A, just with the other rate. Neither rate on its own is what matters; the gap of 1.35 per poster is.',
          D:'34 rounds 33.33 UP. The inequality is strict and the question asks for the GREATEST value that still satisfies it, so you round DOWN. At n = 34 the second shop has already become the expensive one.'
        },
        tip:'Write the comparison as an inequality, gather the variable on one side, and divide by the DIFFERENCE of the two rates. Then let the wording pick the rounding: "greatest number that works" rounds DOWN, "least number that works" rounds UP. Never round to the nearest.',
        desmos:'Graph y = 4.15x and y = 45 + 2.8x: the steeper line stays below the other one only to the LEFT of their crossing at x = 33.33, so the last whole number that works is 33.',
        desmosLatex:['y=4.15x','y=45+2.8x','x=33.33']
      },
      {
        id:'BAL-12', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear inequality in context (net rate + least integer that works)',
        stem:'A student club has $1,860 in its account. Each week the club spends $37.50 on supplies and collects $12.00 in dues. If this continues, what is the least number of whole weeks after which the club’s balance is below $500?',
        answer:'54',
        expCorrect:'First get the NET weekly change: the club loses 37.50 and gains 12.00, so the balance drops by 37.50 − 12.00 = 25.50 each week. After w weeks the balance is 1,860 − 25.50w, and it has to be below 500: 1,860 − 25.50w < 500 → −25.50w < −1,360 → w > 53.33… (dividing by a negative FLIPS the inequality). Since w is a whole number and the question asks for the LEAST one that works, round up: w = 54. (Check: after 53 weeks the balance is 1,860 − 1,351.50 = $508.50, not yet below 500; after 54 weeks it is 1,860 − 1,377 = $483 ✓.) Answer: 54.',
        tip:'Two traps live in this one. Use the NET rate, not the gross spending: dividing 1,360 by 37.50 gives ≈ 36.3 and the wrong answer 37. And dividing by a negative FLIPS the inequality sign — if you would rather avoid that, rearrange first as 1,860 − 500 < 25.50w. Finally, "least number of weeks" rounds UP, never down.',
        desmos:'Graph y = 1860 − 25.5x and y = 500: they cross at about x = 53.3, so the first whole week below the line is x = 54. Tap x = 53 and x = 54 on the line to read $508.50 and $483.',
        desmosLatex:['y=1860-25.5x','y=500','(53,508.5)','(54,483)']
      }
    ]
  });
})();
