/* SAT Studio question set — Math: Algebra — Brutal (BLG-01 to BLG-16) */
(function(){
  var TBL_F =
    '<table border="1" cellpadding="6" style="border-collapse:collapse">' +
    '<tr><th>x</th><th>f(x)</th></tr>' +
    '<tr><td>2</td><td>45</td></tr>' +
    '<tr><td>6</td><td>33</td></tr>' +
    '<tr><td>11</td><td>k</td></tr></table>';

  window.SAT_SETS.push({
    id: 'math-brutal-alg-g',
    title: 'Algebra — Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Sixteen brutal Algebra questions built to even out the two thinnest corners of the hard bank: eight on linear inequalities (a parameter inside a coefficient, two conditions that have to hold at once, a sign that flips in an intermediate step, counting integers in a compound bound, and rounding toward the side the money actually allows) and eight on linear functions (a rate given per minute and asked per hour, perpendicular and parallel slopes with a parameter, points whose coordinates are letters, a table whose x-values are unequally spaced, two models compared five months after they met, and a coefficient whose meaning turns on its unit).',
    minutes: 22,
    questions: [

      /* ---------- Linear inequalities (8) ---------- */

      {
        id:'BLG-01', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Compound linear inequality (counting the integers in the solution set)',
        stem:'How many integer values of x satisfy the inequality −7 ≤ 3 − 2x &lt; 11?',
        choices:{A:'8', B:'9', C:'10', D:'18'},
        correct:'B',
        expCorrect:'Work on all three parts at once. Subtract 3 from every part: −10 ≤ −2x &lt; 8. Now divide every part by −2 — a NEGATIVE — so both symbols flip: 5 ≥ x &gt; −4, which is the same as −4 &lt; x ≤ 5. The integers in that range run −3, −2, −1, 0, 1, 2, 3, 4, 5, and there are 5 − (−3) + 1 = 9 of them. (Check both ends. x = 5: 3 − 10 = −7, and −7 ≤ −7 is true and −7 &lt; 11 is true, so 5 is in. x = −4: 3 + 8 = 11, and 11 &lt; 11 is false, so −4 is out. x = −3: 3 + 6 = 9, and −7 ≤ 9 &lt; 11 is true. ✓)',
        expWrong:{
          A:'8 drops x = 5. That happens when the flip is applied to the direction of the symbols but not to which end is inclusive: the ≤ that started on the left ends up attached to x = 5, so 5 belongs in the count. Testing x = 5 in the original settles it: 3 − 2(5) = −7, and the left part reads −7 ≤ −7, which is true.',
          C:'10 counts x = −4 as well, treating the strict &lt; as if it included its endpoint. Substituting x = −4 gives 3 − 2(−4) = 11, and the inequality asks for a value less than 11, not equal to it.',
          D:'18 is what you get by dividing by −1 instead of by −2: flipping the symbols but never halving. That turns −10 ≤ −2x &lt; 8 into −8 &lt; x ≤ 10, which holds 18 integers. The coefficient of x is −2, so both the sign AND the 2 have to be divided out.'
        },
        tip:'A compound inequality is three parts and every operation touches all three. Dividing by a negative flips BOTH symbols, and the fastest way to protect against a slip is to rewrite the result with the smaller number on the left, then test each endpoint in the original: an endpoint attached to ≤ or ≥ is in the count, one attached to &lt; or &gt; is not.',
        desmos:'Graph y = 3 − 2x together with the horizontal lines y = −7 and y = 11. Read off the x-values where the slanted line sits between the two horizontals: it touches y = −7 at x = 5 and y = 11 at x = −4, so the range is −4 &lt; x ≤ 5 and you can count the integers straight off the axis.',
        desmosLatex:['y=3-2x','y=-7','y=11']
      },

      {
        id:'BLG-02', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Two constraints at once (greatest integer that satisfies both)',
        stem:'The two conditions below must both be true.<br><br>3 − 5x ≥ 2(4 − x) − 20<br>−2(x − 7) &gt; 3x + 4<br><br>What is the greatest integer value of x that satisfies both conditions?',
        choices:{A:'−4', B:'2', C:'5', D:'1'},
        correct:'D',
        expCorrect:'Reduce each condition on its own, then take the overlap. First: 3 − 5x ≥ 8 − 2x − 20, so 3 − 5x ≥ −2x − 12; add 5x and 12 to both sides to get 15 ≥ 3x, so x ≤ 5. Second: −2x + 14 &gt; 3x + 4; subtract 4 and add 2x to get 10 &gt; 5x, so x &lt; 2. Both have to hold, so the tighter one wins: x &lt; 2. The greatest integer strictly below 2 is 1. (Check x = 1. First: 3 − 5 = −2 and 2(4 − 1) − 20 = −14, and −2 ≥ −14 ✓. Second: −2(1 − 7) = 12 and 3(1) + 4 = 7, and 12 &gt; 7 ✓. Check x = 2 in the second: −2(2 − 7) = 10 and 3(2) + 4 = 10, and 10 &gt; 10 is false.)',
        expWrong:{
          A:'−4 comes from distributing −2 over only the first term of (x − 7), writing −2x − 14 instead of −2x + 14. That turns the second condition into −18 &gt; 5x, so x &lt; −3.6 and the greatest integer looks like −4. A negative multiplied by a negative is positive: −2(−7) = +14.',
          B:'2 is the boundary of the second condition, not a member of it. That condition is strict, so x = 2 makes both sides equal to 10 and 10 &gt; 10 is false. Only ≤ and ≥ hand you their endpoint.',
          C:'5 is the ceiling of the FIRST condition alone. When two conditions apply together the answer is the overlap, and x &lt; 2 is far tighter than x ≤ 5, so the first one never binds. Always reduce both and then compare.'
        },
        tip:'With two conditions, reduce each to the form x ≤ number or x &gt; number, then keep the one that bites. Two upper bounds means the smaller one governs; two lower bounds means the larger one governs. And before writing a whole number down, check whether the binding bound is strict — a strict bound never contributes its own endpoint.',
        desmos:'Graph y = 3 − 5x, y = 2(4 − x) − 20, y = −2(x − 7) and y = 3x + 4 on one screen. The first pair crosses at x = 5 and the second pair at x = 2, which shows instantly that x = 2 is the ceiling that matters.',
        desmosLatex:['y=3-5x','y=2(4-x)-20','y=-2(x-7)','y=3x+4']
      },

      {
        id:'BLG-03', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear inequality in context (rounding toward the side the budget allows)',
        stem:'A caterer charges a flat setup fee of $185 plus $25 for each guest, and then adds a service charge equal to 10% of the per-guest total. A client has a budget of $1,415 for the catering. What is the greatest number of guests the client can have without going over that amount?',
        answer:'44',
        expCorrect:'Build the cost first. With g guests the per-guest total is 25g, the service charge is 0.10(25g) = 2.5g, and the flat fee is 185, so the cost is 185 + 25g + 2.5g = 185 + 27.5g. The condition is 185 + 27.5g ≤ 1,415, so 27.5g ≤ 1,230 and g ≤ 44.727…. The number of guests has to be a whole number that still fits the amount, so the answer is 44, NOT 45 — even though 44.727 rounds to 45 by the usual rule. (Check: 44 guests cost 185 + 27.5(44) = 185 + 1,210 = $1,395, which fits. 45 guests cost 185 + 27.5(45) = 185 + 1,237.50 = $1,422.50, which does not. ✓) Answer: 44.',
        tip:'When a word problem ends in a decimal, the inequality — not the decimal — decides the direction. A ceiling (≤, "without going over", "at most") rounds DOWN no matter what the decimal is; a floor (≥, "enough to cover", "at least") rounds UP even when the decimal is .04. Confirm by pricing the whole number you chose and the one next to it.',
        desmos:'Graph y = 185 + 27.5x and y = 1415 and tap the intersection: x ≈ 44.73. Everything to the LEFT of that point is affordable, so step back to the nearest whole number on that side, 44, and type 185+27.5*44 on a new line to see $1,395.',
        desmosLatex:['y=185+27.5x','y=1415','185+27.5\\cdot44']
      },

      {
        id:'BLG-04', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Least possible value of an expression under two constraints',
        stem:'The numbers x and y satisfy both 2x + y ≥ 14 and x − y ≥ 1. What is the least possible value of 5x + 2y?',
        choices:{A:'33', B:'9', C:'30', D:'41'},
        correct:'A',
        expCorrect:'The two boundaries are 2x + y = 14 and x − y = 1. Add them: 3x = 15, so x = 5, and then y = x − 1 = 4. That corner point (5, 4) gives 5(5) + 2(4) = 25 + 8 = 33. It is the LEAST value because 5x + 2y grows as you move away from the corner along either edge: along 2x + y = 14 write y = 14 − 2x, and 5x + 2(14 − 2x) = x + 28, which increases as x increases (and the other condition forces x ≥ 5 there); along x − y = 1 write y = x − 1, and 5x + 2(x − 1) = 7x − 2, which also increases, with x ≥ 5 again. (Check the corner: 2(5) + 4 = 14 ✓ and 5 − 4 = 1 ✓. Check a neighbour: (6, 5) satisfies 17 ≥ 14 and 1 ≥ 1, and gives 30 + 10 = 40, larger than 33. ✓)',
        expWrong:{
          B:'9 is 5 + 4, the sum of the corner coordinates. The corner is the right point, but the question asks for the value of 5x + 2y at that point, not for x + y.',
          C:'30 is 2x + 5y at the corner: 2(5) + 5(4) = 10 + 20. The coefficients got swapped on the way from the two conditions to the expression. The expression is 5x + 2y, so 5 goes with x.',
          D:'41 comes from turning x − y = 1 into y = 1 − x instead of y = x − 1. That gives 2x + (1 − x) = 14, so x = 13 and y = −12, and 5(13) + 2(−12) = 41. Isolating y in x − y = 1 means subtracting x from both sides and then multiplying by −1, which leaves y = x − 1.'
        },
        tip:'When two conditions of the form ≥ pin a value from below, the smallest value of a linear expression sits at the CORNER where the two boundaries meet — never in the middle of the shaded area. Find the corner by solving the two boundaries as equations, then test one nearby allowed point to confirm which direction makes the expression grow.',
        desmos:'Shade 2x + y ≥ 14 and x − y ≥ 1, then add the line 5x + 2y = 33. It just touches the shaded overlap at its corner (5, 4). Lower the 33 to 30 and the line slides completely off the shaded area, which is the visual proof that 33 cannot be beaten.',
        desmosLatex:['2x+y\\ge14','x-y\\ge1','5x+2y=33','(5,4)']
      },

      {
        id:'BLG-05', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear inequality with a negative divisor hidden in an intermediate step',
        stem:'Which of the following gives all values of x that satisfy the inequality below?<br><br>(6 − 2x)/(−2) + 2(x − 1) ≤ 5x − 9',
        choices:{A:'x ≤ 2', B:'x ≥ 4/5', C:'x ≥ 2', D:'x ≥ 5/2'},
        correct:'C',
        expCorrect:'Simplify the left side before doing anything to the inequality. Dividing 6 − 2x by −2 divides EVERY term: 6 ÷ (−2) = −3 and (−2x) ÷ (−2) = +x, so that piece is x − 3. The left side becomes (x − 3) + 2x − 2 = 3x − 5. Now 3x − 5 ≤ 5x − 9, so add 9 and subtract 3x: 4 ≤ 2x, and therefore x ≥ 2. The symbol does NOT flip here, because the −2 divided one expression on one side; it never divided both sides. (Check x = 2: the left side is (6 − 4)/(−2) + 2(1) = −1 + 2 = 1 and the right side is 10 − 9 = 1, so 1 ≤ 1 ✓. Check x = 1: left is (6 − 2)/(−2) + 0 = −2 and right is −4, and −2 ≤ −4 is false, so 1 is correctly excluded. ✓)',
        expWrong:{
          A:'x ≤ 2 flips the symbol at the end because a negative appeared somewhere in the problem. The flip is earned only by multiplying or dividing BOTH sides by a negative. Here the −2 sits under one expression on one side, so simplifying it is ordinary arithmetic and the direction stays.',
          B:'x ≥ 4/5 comes from dividing only the 6 by −2 and leaving −2x untouched, giving −3 − 2x. Then the left side collapses to −5 and the answer looks like 4 ≤ 5x. A fraction bar divides the whole numerator, so both terms have to be divided.',
          D:'x ≥ 5/2 comes from dividing 6 − 2x by +2 instead of −2, producing 3 − x. The left side then reads x + 1 and you end with 10 ≤ 4x. The divisor printed under the bar is −2, and its sign changes both terms.'
        },
        tip:'Separate two different operations that look alike. Simplifying an expression on one side — clearing a fraction bar that belongs to that expression only — never changes the direction of the inequality. Multiplying or dividing BOTH sides by the same negative number always does. Do all the simplifying first, get to ax + b ≤ cx + d, and only then move terms.',
        desmos:'Graph y = (6 − 2x)/(−2) + 2(x − 1) and y = 5x − 9 on one screen. The first line is below or level with the second exactly from x = 2 rightwards, and tapping the intersection confirms the boundary is 2 and that the solution opens to the right, not to the left.',
        desmosLatex:['y=\\frac{6-2x}{-2}+2(x-1)','y=5x-9','(2,1)']
      },

      {
        id:'BLG-06', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear inequality with a parameter (the least integer in the solution set)',
        stem:'In the inequality 5x + 2 ≥ 3(x − 4) + c, c is a constant. The least integer value of x that satisfies this inequality is 7. What is the greatest possible value of c?',
        answer:'28',
        expCorrect:'Reduce with c carried along. 5x + 2 ≥ 3x − 12 + c, so 2x ≥ c − 14 and x ≥ (c − 14)/2. The solution is everything at or above the boundary (c − 14)/2, so the smallest integer in it is 7 exactly when that boundary sits above 6 and no higher than 7: 6 &lt; (c − 14)/2 ≤ 7. Multiply through by 2: 12 &lt; c − 14 ≤ 14, then add 14: 26 &lt; c ≤ 28. The greatest value c can take is 28. (Check c = 28: the inequality becomes x ≥ 7, whose least integer is 7 ✓. Check c = 29: x ≥ 7.5, whose least integer is 8 ✗. ✓) Answer: 28.',
        tip:'"The least integer that works is 7" is not one equation, it is a band: the boundary has to be greater than 6 and no greater than 7, so write 6 &lt; boundary ≤ 7 and reduce that. Which end is strict comes from the original symbol — with ≥ the boundary itself is allowed, so 7 may sit exactly on it, while 6 may not. Then test the two values just outside the band.',
        desmos:'Graph y = 5x + 2 and y = 3(x − 4) + c with a slider for c, and add the vertical lines x = 6 and x = 7. Drag c upward and watch the crossing point march right; the largest c for which the crossing has not yet passed x = 7 is 28.',
        desmosLatex:['y=5x+2','y=3(x-4)+c','c=28','x=7']
      },

      {
        id:'BLG-07', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Capacity constraints in context (the least whole number of vehicles)',
        stem:'A tour operator must seat 149 passengers. Each van seats at most 11 passengers and each car seats at most 4 passengers. The operator plans to use exactly 6 more cars than vans. What is the least number of vans that will seat everyone?',
        choices:{A:'8', B:'9', C:'10', D:'15'},
        correct:'B',
        expCorrect:'Let v be the number of vans. Then the number of cars is v + 6, and the seats available are 11v + 4(v + 6) = 11v + 4v + 24 = 15v + 24. Everyone has to fit, so 15v + 24 ≥ 149, which gives 15v ≥ 125 and v ≥ 8.33…. The number of vans is a whole number and the requirement is a floor, so round UP to 9. (Check: 9 vans and 15 cars seat 11(9) + 4(15) = 99 + 60 = 159 ≥ 149 ✓. 8 vans and 14 cars seat 88 + 56 = 144, which leaves 5 passengers standing. ✓)',
        expWrong:{
          A:'8 rounds 8.33 to the nearest whole number. Nearest is the wrong rule here: the condition is "enough seats", so any fraction of a van has to become a whole extra van. Eight vans and fourteen cars hold only 144 people.',
          C:'10 comes from writing 11v + 4v + 6 ≥ 149 — distributing the 4 over the v but not over the 6. That gives 15v ≥ 143 and v ≥ 9.53, so 10. The 6 extra cars carry 4 passengers each, so the parentheses matter: 4(v + 6) = 4v + 24.',
          D:'15 is the number of CARS, which is 9 + 6. It is the last number many students compute, but the question asks how many vans.'
        },
        tip:'Translate "exactly 6 more cars than vans" into cars = vans + 6 and substitute it before doing anything else, so the whole condition lives in one variable. Then let the direction of the condition set the rounding: a seating or covering requirement rounds UP, a spending or fitting limit rounds DOWN. Finally reread the last line to see which of the two quantities was asked for.',
        desmos:'Graph y = 15x + 24 and y = 149 and tap the intersection: x ≈ 8.33. Everything to the RIGHT seats the group, so the first whole number on that side is 9. Type 11*9+4*15 on a new line to confirm 159 seats.',
        desmosLatex:['y=15x+24','y=149','11\\cdot9+4\\cdot15']
      },

      {
        id:'BLG-08', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Bounding an expression from a compound inequality',
        stem:'If x is an integer and −5 ≤ 3 − 2x &lt; 11, what is the greatest possible value of 5x − 2?',
        choices:{A:'−22', B:'13', C:'20', D:'18'},
        correct:'D',
        expCorrect:'Trap x first. Subtract 3 from all three parts: −8 ≤ −2x &lt; 8. Divide all three by −2 and flip both symbols: 4 ≥ x &gt; −4, which is −4 &lt; x ≤ 4. Since x is an integer, the largest value it can take is 4 (the ≤ lets it reach 4 exactly). Now evaluate the expression the question actually asks about: 5(4) − 2 = 20 − 2 = 18. (Check x = 4 in the original: 3 − 2(4) = −5, and −5 ≤ −5 ✓ and −5 &lt; 11 ✓. ✓)',
        expWrong:{
          A:'−22 is 5(−4) − 2, the value at the other end. That end is the LEAST side, not the greatest, and x = −4 is excluded anyway because 3 − 2(−4) = 11 and the right part is strict.',
          B:'13 comes from dividing −8 ≤ −2x &lt; 8 by 2 and quietly dropping the minus sign on x, which produces −4 ≤ x &lt; 4. That version makes 4 unreachable, so the largest integer looks like 3 and the expression looks like 5(3) − 2. The coefficient is −2, so the division has to carry the sign and flip the symbols.',
          C:'20 is 5x at x = 4 with the −2 never subtracted. Finding x is the middle of this problem, not the end: the last step is substituting it into 5x − 2.'
        },
        tip:'Two-step problems like this one have three places to lose it, so run them in order: isolate x across all three parts, flip both symbols if you divide by a negative, then decide which endpoint an integer can actually reach, and only then substitute into the expression that was asked for. The endpoint attached to ≤ is reachable; the one attached to &lt; is not.',
        desmos:'Graph y = 3 − 2x with y = −5 and y = 11 to see that x runs from just above −4 up to and including 4. Then graph y = 5x − 2 and read its height at x = 4: it is 18.',
        desmosLatex:['y=3-2x','y=-5','y=11','y=5x-2','(4,18)']
      },

      /* ---------- Linear functions (8) ---------- */

      {
        id:'BLG-09', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Rate of change of a linear model with a unit conversion',
        stem:'The linear model P(t) = 3,600 − 48t gives the number of pages left in a print job t minutes after the job starts. A second printer prints 2,340 pages per hour. How many more pages does the first printer produce in 45 minutes than the second printer produces in 45 minutes?',
        choices:{A:'405', B:'540', C:'1,107', D:'2,160'},
        correct:'A',
        expCorrect:'Put both printers on the same clock. The first model loses 48 pages from the "left to print" count for every 1 added to t, and t counts MINUTES, so the first printer produces 48 pages per minute and 48(45) = 2,160 pages in 45 minutes. The second printer is quoted per HOUR, and 45 minutes is 45/60 = 0.75 hour, so it produces 2,340(0.75) = 1,755 pages. The difference is 2,160 − 1,755 = 405. (Check by converting the other way: the first printer does 48(60) = 2,880 pages per hour against 2,340, a gap of 540 pages per hour, and 540(0.75) = 405 ✓.)',
        expWrong:{
          B:'540 is the gap per HOUR: 2,880 − 2,340. It is the right comparison over the wrong window. The question asks about 45 minutes, so this number still has to be multiplied by 0.75.',
          C:'1,107 comes from reading 45 minutes as 0.45 hour, which gives 2,340(0.45) = 1,053 for the second printer and 2,160 − 1,053. Minutes are sixtieths, not hundredths: 45 minutes is 45/60 = 0.75 hour.',
          D:'2,160 is the first printer alone over 45 minutes. It is the correct intermediate number, but the question asks how many MORE pages it produces than the second printer, so the 1,755 still has to come off.'
        },
        tip:'Before comparing two rates, force them into the same time unit and only then apply the window the question names. Converting a rate per minute to a rate per hour multiplies by 60; turning a stretch of minutes into hours divides by 60, so 45 minutes is 0.75 hour and never 0.45. Doing the whole problem in minutes is usually the safer of the two routes.',
        desmos:'Graph y = 48x and y = 39x, reading x as minutes (2,340 ÷ 60 = 39 pages per minute). At x = 45 the heights are 2,160 and 1,755, and the gap between the two lines at that point is the answer, 405.',
        desmosLatex:['y=48x','y=39x','x=45','48\\cdot45-39\\cdot45']
      },

      {
        id:'BLG-10', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Perpendicular lines with a parameter in the slope',
        stem:'In the xy-plane, line r has the equation y = (2k − 1)x + 5, where k is a constant, and line s has the equation 3x + 9y = 12. Line r is perpendicular to line s. What is the value of k?',
        choices:{A:'−1', B:'2/3', C:'2', D:'1/3'},
        correct:'C',
        expCorrect:'Get the slope of line s first. From 3x + 9y = 12, subtract 3x and divide every term by 9: y = −(1/3)x + 4/3, so line s has slope −1/3. Perpendicular means the slopes multiply to −1, so line r needs the negative reciprocal: flip −1/3 to −3 and change its sign to get 3. Line r is written with its slope already exposed as 2k − 1, so 2k − 1 = 3, giving 2k = 4 and k = 2. (Check: with k = 2 line r is y = 3x + 5, and 3 × (−1/3) = −1 ✓.)',
        expWrong:{
          A:'−1 uses −3, the reciprocal of −1/3 with the sign left alone. Perpendicular takes the negative reciprocal, which is two changes: flip the fraction AND switch the sign. One change out of two gives a line parallel to the correct one, not perpendicular to line s.',
          B:'2/3 uses +1/3, the sign switched without the fraction flipped. That slope makes the two lines mirror images across the horizontal, not perpendicular: 1/3 × (−1/3) = −1/9, not −1.',
          D:'1/3 sets 2k − 1 = −1/3, which matches line s exactly. That is the condition for PARALLEL. Perpendicular needs the product of the slopes to be −1, and (−1/3)(−1/3) = 1/9.'
        },
        tip:'Perpendicular is a two-part instruction: flip the fraction, then flip the sign. Sanity-check it by multiplying — the product of the two slopes has to be exactly −1 — and remember that a line written as Ax + By = C hides its slope, so rewrite it as y = mx + b before comparing anything. When the unknown sits inside the slope, set the whole slope expression equal to the number you need.',
        desmos:'Graph 3x + 9y = 12 and y = (2k − 1)x + 5 with a slider for k. Sweep k and watch the angle between the lines: it opens to a clean right angle exactly at k = 2, and at k = 1/3 the two lines become parallel instead.',
        desmosLatex:['3x+9y=12','y=(2k-1)x+5','k=2']
      },

      {
        id:'BLG-11', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Slope of a linear function from points with symbolic coordinates',
        stem:'A linear function f has the property that f(a) = 3a and f(2a) = 5a, where a is a positive constant. If f(10) = 27, what is the value of f(0)?',
        answer:'7',
        expCorrect:'Treat (a, 3a) and (2a, 5a) as two points and take the slope: (5a − 3a)/(2a − a) = 2a/a = 2. The a cancels, so the slope is the plain number 2 no matter what a turns out to be. Write f(x) = 2x + b. Using f(a) = 3a: 2a + b = 3a, so b = a. That means f(x) = 2x + a, and f(0) = b = a, so the question reduces to finding a. Use the last fact: f(10) = 2(10) + a = 27, so a = 7, and f(0) = 7. (Check with a = 7: f(7) = 14 + 7 = 21 = 3(7) ✓, f(14) = 28 + 7 = 35 = 5(7) ✓, f(10) = 20 + 7 = 27 ✓.) Answer: 7.',
        tip:'Points whose coordinates are letters behave exactly like points whose coordinates are numbers — build (y₂ − y₁)/(x₂ − x₁) and let the letter cancel. It usually does, and when it does the slope is a fixed number and the letter survives only in the constant term. Then read the last line carefully: f(0) is the constant term, which here is the letter itself.',
        desmos:'Add a slider for a and graph y = 2x + a together with the points (a, 3a), (2a, 5a) and (10, 27). Drag a until the line passes through (10, 27): it lands at a = 7, and the line then crosses the y-axis at 7.',
        desmosLatex:['y=2x+a','(a,3a)','(2a,5a)','(10,27)','a=7']
      },

      {
        id:'BLG-12', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Slope and y-intercept read from a table with unequal x-steps',
        stem:'The table below shows three values of x and the corresponding values of the linear function f. What is the value of k?<br><br>' + TBL_F,
        choices:{A:'21', B:'18', C:'30', D:'51'},
        correct:'B',
        expCorrect:'The x-values do not step evenly, so the slope has to be computed, not guessed from the pattern of the f column. Use the two complete rows: slope = (33 − 45)/(6 − 2) = −12/4 = −3. From x = 6 to x = 11 is a run of 5, so k = 33 + (−3)(5) = 33 − 15 = 18. (Check with the full rule. f(x) = −3x + b and 45 = −3(2) + b gives b = 51, so f(x) = −3x + 51. Then f(6) = −18 + 51 = 33 ✓ and f(11) = −33 + 51 = 18 ✓.)',
        expWrong:{
          A:'21 repeats the drop of 12 that took f from 45 to 33, as if the third row were the same size step as the second. It is not: x went up by 4 the first time and by 5 the second, so the drop is 15, not 12.',
          C:'30 subtracts the slope exactly once, treating x = 11 as one unit past x = 6. The slope is the change per single unit of x, so it has to be multiplied by the run, and here the run is 11 − 6 = 5.',
          D:'51 is f(0), the y-intercept. It is a real number in this problem and a useful stepping stone, but the table asks for the output at x = 11, so the rule still has to be evaluated there.'
        },
        tip:'In a table the column of outputs only tells you the slope directly when the inputs step by equal amounts. Check the x-column first; if the steps differ, compute (change in f) ÷ (change in x) from any two complete rows and then multiply that slope by the actual run to the missing entry. Writing the full rule f(x) = mx + b and testing it against every given row catches the error every time.',
        desmos:'Plot (2, 45) and (6, 33), then graph y = −3x + 51 and confirm it passes through both. Read the line at x = 11 — or add the point (11, 18) and watch it land exactly on the line.',
        desmosLatex:['(2,45)','(6,33)','y=-3x+51','(11,18)']
      },

      {
        id:'BLG-13', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Two linear models compared (the gap, not the crossing point)',
        stem:'The number of members at Club A is modeled by A(t) = 240 + 18t, and the number of members at Club B is modeled by B(t) = 492 − 10t, where t is the number of months after January. The two clubs have the same number of members when t = n. What is the difference between the number of members at Club A and the number at Club B when t = n + 5?',
        choices:{A:'0', B:'9', C:'28', D:'140'},
        correct:'D',
        expCorrect:'Find n by setting the two models equal: 240 + 18t = 492 − 10t, so 28t = 252 and t = 9, giving n = 9. (Check: A(9) = 240 + 162 = 402 and B(9) = 492 − 90 = 402 ✓.) The question asks about t = n + 5 = 14: A(14) = 240 + 18(14) = 240 + 252 = 492, and B(14) = 492 − 10(14) = 492 − 140 = 352. The difference is 492 − 352 = 140. Faster route: Club A gains 18 members a month while Club B loses 10, so the gap between them widens by 18 − (−10) = 28 members every month. Starting from a gap of 0 at month n, after 5 months the gap is 28(5) = 140. ✓',
        expWrong:{
          A:'0 is the difference at month n itself, where the two counts are equal by definition. The question moves 5 months past that point, and the two models pull apart the moment they cross.',
          B:'9 is n, the month in which the counts match. That is the intermediate result, and a very natural place to stop, but the question asks for a difference in MEMBERS, not for a month.',
          C:'28 is how much the gap opens in ONE month — the difference between the two rates, 18 and −10. It is the right per-month figure; five months of it is 28(5) = 140.'
        },
        tip:'When two linear models start from a moment where they are equal, the gap after h more time units is (difference of the rates) × h, and a rate going down counts as negative, so the rates SUBTRACT into a sum of their sizes. Then reread the final line: a question that names a month and asks for a difference wants the difference, and the month is only the scaffolding.',
        desmos:'Graph y = 240 + 18x and y = 492 − 10x and tap the intersection: (9, 402). Add the vertical line x = 14 and read the two heights, 492 and 352; the segment between them is the 140 the question wants.',
        desmosLatex:['y=240+18x','y=492-10x','x=14','(9,402)']
      },

      {
        id:'BLG-14', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Parallel lines: a missing coordinate from a matched slope',
        stem:'In the xy-plane, line v passes through the points (−3, 8) and (−7, c). Line v is parallel to the line whose equation is 6x + 4y = 21. What is the value of c?',
        answer:'14',
        expCorrect:'Expose the slope of the given line: 4y = −6x + 21, so y = −(6/4)x + 21/4 = −(3/2)x + 21/4 and its slope is −3/2. Parallel lines share a slope, so line v also has slope −3/2. Now write the slope of line v from its two points: (c − 8)/(−7 − (−3)) = (c − 8)/(−4). Set that equal to −3/2: (c − 8)/(−4) = −3/2, so c − 8 = (−3/2)(−4) = 6 and c = 14. (Check the slope directly: from (−3, 8) to (−7, 14) the rise is 14 − 8 = 6 and the run is −7 − (−3) = −4, and 6/(−4) = −3/2 ✓.) Answer: 14.',
        tip:'Two habits carry this whole family of questions. First, a line written as Ax + By = C hides its slope, so rewrite it as y = mx + b before comparing it to anything — its slope is never the number sitting in front of x in the original. Second, when the run comes out negative, keep the negative: subtract the coordinates in the SAME order on top and bottom, and let the two signs settle the direction instead of guessing it.',
        desmos:'Graph 6x + 4y = 21, then y = −1.5x + 3.5, the parallel line through (−3, 8). The two look identical in tilt and never meet. Add the point (−7, 14) and it lands exactly on the second line.',
        desmosLatex:['6x+4y=21','y=-1.5x+3.5','(-3,8)','(-7,14)']
      },

      {
        id:'BLG-15', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Interpreting the slope of a linear model in context (the unit decides)',
        stem:'A reservoir is losing water at a constant rate. The linear model V(w) = 8,600 − 145w gives the volume of water in the reservoir, in thousands of gallons, w weeks after monitoring began. Which of the following is the best interpretation of the number 145 in this model?',
        choices:{
          A:'The volume of water decreases by 145 thousand gallons each week.',
          B:'The volume of water decreases by 145 thousand gallons each day.',
          C:'The volume of water decreases by 145 gallons each week.',
          D:'The reservoir contained 145 thousand gallons when monitoring began.'
        },
        correct:'A',
        expCorrect:'The 145 is multiplied by w, so it is the amount V changes by when w increases by 1 — and the minus sign in front makes that change a decrease. Two units then have to be read off the sentence that defines the model. The input w counts WEEKS, so "when w increases by 1" means one week. The output V is measured in THOUSANDS of gallons, so 145 units of V is 145 thousand gallons. Putting both together: the volume falls by 145 thousand gallons each week. (Check with numbers: V(0) = 8,600 and V(1) = 8,600 − 145 = 8,455, a drop of 145 in a model whose units are thousands of gallons, over one week. ✓)',
        expWrong:{
          B:'The size is right and the time unit is wrong. The variable w is defined as the number of weeks, so each step of 1 in w is a week, not a day. A daily figure would be 145 ÷ 7 ≈ 20.7 thousand gallons.',
          C:'The time unit is right and the size unit is wrong. The model states that V is measured in thousands of gallons, so one unit of V is 1,000 gallons and the weekly loss is 145,000 gallons, not 145.',
          D:'145 is the number attached to w, which makes it the rate, not a starting amount. The starting amount is the constant term, the value of V when w = 0, which is 8,600 thousand gallons.'
        },
        tip:'Interpreting a coefficient is two questions, not one. What does a step of 1 in the input mean — the sentence defining the variable tells you, and it is often minutes or weeks rather than the unit the answer choices tempt you with. And what does one unit of the output mean — phrases like "in thousands" or "in millions" live in that same sentence. The number multiplied by the variable is the rate; the number standing alone is the starting value.',
        desmos:'Graph y = 8600 − 145x and add the points (0, 8600) and (1, 8455). The step down between them is 145, and the step across is a single week, which is exactly what the coefficient describes.',
        desmosLatex:['y=8600-145x','(0,8600)','(1,8455)']
      },

      {
        id:'BLG-16', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Slope of a linear function from a repeated-difference condition',
        stem:'The linear function f satisfies f(x + 4) = f(x) + 10 for every value of x, and f(1) = −3. What is the value of f(13)?',
        choices:{A:'7', B:'17', C:'27', D:'30'},
        correct:'C',
        expCorrect:'The condition says that moving 4 units to the right raises the output by 10, so the slope is 10/4 = 2.5. From x = 1 to x = 13 the run is 13 − 1 = 12, which is 12 ÷ 4 = 3 of those steps, so the output rises by 3(10) = 30: f(13) = −3 + 30 = 27. (Check with the full rule. f(x) = 2.5x + b and f(1) = 2.5 + b = −3 gives b = −5.5, so f(x) = 2.5x − 5.5 and f(13) = 32.5 − 5.5 = 27 ✓. Check the condition too: f(5) = 12.5 − 5.5 = 7 = −3 + 10 ✓.)',
        expWrong:{
          A:'7 adds 10 a single time, as if x = 13 were one step of 4 past x = 1. It is f(5), not f(13). The run from 1 to 13 is 12 units, which is three steps of 4.',
          B:'17 adds 10 twice. That counts the steps by pairing 13 and 1 with the 4 loosely instead of dividing: the number of steps is (13 − 1) ÷ 4 = 3, not 2.',
          D:'30 is the total CHANGE in f across those three steps, 3(10). The starting value f(1) = −3 still has to be added, and it is negative, which is why the final answer lands below 30.'
        },
        tip:'A condition of the form f(x + h) = f(x) + d hands you the slope directly as d/h, and it holds for every x, so you can either step it the right number of times or convert it into f(x) = (d/h)x + b and pin b with the one known value. Count the steps by dividing the run by h — never by eyeballing — and never forget to add the starting output at the end.',
        desmos:'Graph y = 2.5x − 5.5 and add the points (1, −3) and (13, 27); both sit on the line. Add (5, 7) and (9, 17) as well to watch the output climb by exactly 10 for every 4 you move right.',
        desmosLatex:['y=2.5x-5.5','(1,-3)','(5,7)','(9,17)','(13,27)']
      }

    ]
  });
})();
