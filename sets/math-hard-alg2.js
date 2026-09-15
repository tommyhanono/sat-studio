/* SAT Studio question set — Math: Algebra — Hard II (HA2-01 to HA2-12) */
(function(){
  var TBL_F =
    '<table><thead><tr><th>x</th><th>2</th><th>5</th><th>11</th></tr></thead>' +
    '<tbody><tr><th>f(x)</th><td>13</td><td>22</td><td>40</td></tr></tbody></table>';

  var TBL_G =
    '<table><thead><tr><th>x</th><th>−3</th><th>1</th><th>6</th></tr></thead>' +
    '<tbody><tr><th>g(x)</th><td>20</td><td>8</td><td>−7</td></tr></tbody></table>';

  window.SAT_SETS.push({
    id: 'math-hard-alg2',
    title: 'Algebra — Hard II',
    section: 'math',
    level: 'Difícil',
    description: 'Hard linear algebra — parallel and perpendicular lines, slope and intercept from a table, distributing on both sides, substitution, compound inequalities, and linear models.',
    minutes: 20,
    questions: [
      {
        id:'HA2-01', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Perpendicular line through a given point',
        stem:'In the xy-plane, line n is perpendicular to the line 2x + y = 8 and passes through the point (4, 5). What is the y-coordinate of the y-intercept of line n?',
        choices:{A:'13', B:'7', C:'3', D:'−3'},
        correct:'C',
        expCorrect:'First get the slope of the given line: 2x + y = 8 → y = −2x + 8, so its slope is −2. Perpendicular means the NEGATIVE RECIPROCAL: m = −1/(−2) = 1/2. Now use the point (4, 5) in point-slope form: y − 5 = (1/2)(x − 4) → y = (1/2)x − 2 + 5 = (1/2)x + 3. The y-intercept is 3. (Check: at x = 4, y = 2 + 3 = 5 ✓, and (1/2)(−2) = −1 ✓ confirms the lines are perpendicular.)',
        expWrong:{
          A:'13 uses the SAME slope −2 as the given line, which builds a PARALLEL line, not a perpendicular one: y = −2(x − 4) + 5 = −2x + 13.',
          B:'7 takes the reciprocal but keeps the sign, using m = −1/2: y = −(1/2)(x − 4) + 5 = −(1/2)x + 7. Perpendicular flips the sign too, so the slope is +1/2.',
          D:'−3 flips the sign but never takes the reciprocal, using m = 2: y = 2(x − 4) + 5 = 2x − 3. The reciprocal of 2 is 1/2, and both steps are needed.'
        },
        tip:'Perpendicular slopes multiply to −1: flip the fraction AND flip the sign. Slope −2 → perpendicular slope 1/2. Then plug the point into y = mx + b and solve for b.',
        desmos:'Graph 2x + y = 8 and y = 0.5x + 3 together. They should cross at a right angle at (4, 5), and the second one crosses the y-axis at 3.',
        desmosLatex:['2x+y=8','y=0.5x+3','(4,5)']
      },
      {
        id:'HA2-02', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Parallel line through a point (x-intercept)',
        stem:'In the xy-plane, line p is parallel to the line that passes through the points (−2, 7) and (4, −5), and line p passes through the point (3, 2). What is the x-coordinate of the x-intercept of line p?',
        choices:{A:'4', B:'8', C:'2', D:'7'},
        correct:'A',
        expCorrect:'Slope of the first line = (−5 − 7)/(4 − (−2)) = −12/6 = −2. Parallel lines have the SAME slope, so line p also has slope −2. Through (3, 2): y = −2(x − 3) + 2 = −2x + 8. The x-intercept is where y = 0: 0 = −2x + 8 → 2x = 8 → x = 4. (Check: −2(4) + 8 = 0 ✓ and −2(3) + 8 = 2 ✓.)',
        expWrong:{
          B:'8 is the Y-intercept of line p (y = −2x + 8), not the x-intercept. The x-intercept is found by setting y = 0, not x = 0.',
          C:'2 comes from a sign slip in the slope, using +2 instead of −2: y = 2(x − 3) + 2 = 2x − 4 gives an x-intercept of 2. Going from y = 7 down to y = −5 is a DROP of 12, so the slope is negative.',
          D:'7 comes from inverting the slope formula, computing Δx/Δy = 6/(−12) = −1/2 instead of Δy/Δx. With m = −1/2 the line is y = −(1/2)x + 3.5, whose x-intercept is 7.'
        },
        tip:'Slope is rise over run: (y₂ − y₁)/(x₂ − x₁), in that order. Parallel → same slope. And read the question: x-intercept means y = 0; y-intercept means x = 0.',
        desmos:'Plot (−2, 7) and (4, −5) to see the slope, then graph y = −2x + 8 and check where it crosses the x-axis.',
        desmosLatex:['(-2,7)','(4,-5)','y=-2x+8','(3,2)']
      },
      {
        id:'HA2-03', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Intercept of a linear function from a table',
        stem:'The table below gives three values of x and their corresponding values of the linear function f.' + TBL_F + 'What is the value of f(0)?',
        choices:{A:'13', B:'3', C:'10', D:'7'},
        correct:'D',
        expCorrect:'The x-values in the table are NOT one unit apart, so find the rate of change first: (22 − 13)/(5 − 2) = 9/3 = 3 per unit of x. (Confirm with the other pair: (40 − 22)/(11 − 5) = 18/6 = 3 ✓.) So f(x) = 3x + b. Use the pair (2, 13): 13 = 3(2) + b → b = 7. Since f(0) = b, the answer is 7. (Check: f(11) = 3(11) + 7 = 40 ✓.)',
        expWrong:{
          A:'13 is f(2), the first value listed. It is only the intercept if the table starts at x = 0, and here it starts at x = 2.',
          B:'3 is the SLOPE (the change in f per unit of x), not the value of f at x = 0.',
          C:'10 backs up only ONE unit from f(2) = 13 (13 − 3 = 10), landing on f(1). Getting from x = 2 to x = 0 takes two steps: 13 − 3 − 3 = 7.'
        },
        tip:'With a table, always compute slope as Δy/Δx — never assume the rows are one apart. Then f(0) is the b in f(x) = mx + b: substitute any row and solve.',
        desmos:'Plot (2, 13), (5, 22) and (11, 40), then graph y = 3x + 7 and confirm the line hits all three points and crosses the y-axis at 7.',
        desmosLatex:['(2,13)','(5,22)','(11,40)','y=3x+7']
      },
      {
        id:'HA2-04', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Equation of a linear function from a table',
        stem:'The table below gives three values of x and their corresponding values of the linear function g.' + TBL_G + 'Which equation defines g?',
        choices:{
          A:'g(x) = −12x + 11',
          B:'g(x) = −3x + 11',
          C:'g(x) = 3x + 11',
          D:'g(x) = −3x + 20'
        },
        correct:'B',
        expCorrect:'Rate of change = (8 − 20)/(1 − (−3)) = −12/4 = −3. (Confirm: (−7 − 8)/(6 − 1) = −15/5 = −3 ✓.) So g(x) = −3x + b. Substitute the pair (1, 8): 8 = −3(1) + b → b = 11. That gives g(x) = −3x + 11. (Check every row: g(−3) = 9 + 11 = 20 ✓, g(6) = −18 + 11 = −7 ✓.)',
        expWrong:{
          A:'−12 is the change in g alone, not the RATE: you still have to divide by the change in x, which is 4. −12/4 = −3. Test it: g(1) would be −1, not 8.',
          C:'The slope must be negative — g decreases from 20 to 8 to −7 while x increases. With +3 you get g(1) = 14, not 8.',
          D:'20 is g(−3), the first value in the table, used as if it were the intercept. But the table never shows x = 0, so the intercept has to be solved for: it is 11.'
        },
        tip:'From a table: slope = Δy/Δx using any two columns (check with a third), then plug one point into y = mx + b to get b. Finish by testing your equation on a row you did not use.',
        desmos:'Plot (−3, 20), (1, 8) and (6, −7) and graph y = −3x + 11; the line should pass through all three points.',
        desmosLatex:['(-3,20)','(1,8)','(6,-7)','y=-3x+11']
      },
      {
        id:'HA2-05', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear equation with parentheses on both sides',
        stem:'If 4(x − 1) − 2(x + 3) = 3(x − 4) − 4, what is the value of x?',
        choices:{A:'18', B:'9', C:'2', D:'6'},
        correct:'D',
        expCorrect:'Distribute on each side, watching the minus in front of the second group. Left: 4x − 4 − 2x − 6 = 2x − 10. Right: 3x − 12 − 4 = 3x − 16. Now 2x − 10 = 3x − 16 → −10 + 16 = 3x − 2x → 6 = x. (Check: left = 4(5) − 2(9) = 20 − 18 = 2; right = 3(2) − 4 = 2 ✓.)',
        expWrong:{
          A:'18 comes from writing −2(x + 3) as −2x + 6: the minus has to reach BOTH terms, giving −2x − 6. With the wrong sign the left side becomes 2x + 2 and you get x = 18.',
          B:'9 comes from writing 4(x − 1) as 4x − 1, distributing the 4 only to the x. It has to multiply the −1 as well: 4x − 4.',
          C:'2 comes from dropping the lone −4 on the right and solving 2x − 10 = 3x − 12. That −4 sits outside the parentheses but still belongs to the equation.'
        },
        tip:'Distribute every factor to EVERY term inside its parentheses, sign included, before you combine anything. Then collect the variable on the side where its coefficient ends up positive.',
        desmos:'Graph y = 4(x − 1) − 2(x + 3) and y = 3(x − 4) − 4; the x-value where they cross is the solution.',
        desmosLatex:['y=4(x-1)-2(x+3)','y=3(x-4)-4']
      },
      {
        id:'HA2-06', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear equation with a parameter (no solution)',
        stem:'In the equation 5(2x + 3) − 4 = a(x − 2) + 3x, a is a constant. If the equation has no solution, what is the value of a?',
        answer:'7',
        expCorrect:'Expand both sides. Left: 10x + 15 − 4 = 10x + 11. Right: ax − 2a + 3x = (a + 3)x − 2a. A linear equation has NO solution when the x-terms match but the constants do not, so set the coefficients equal: a + 3 = 10 → a = 7. Then check the constants really differ: left constant is 11, right constant is −2a = −14, and 11 ≠ −14 ✓, so there is no solution. (With a = 7 the equation reads 10x + 11 = 10x − 14, which says 11 = −14: impossible.) Answer: 7.',
        expWrong:{},
        tip:'Same slope + different constant → no solution. Same slope + same constant → infinitely many. Match the x-coefficients first, then confirm the constants do NOT match.',
        desmos:'Graph y = 5(2x + 3) − 4 and y = 7(x − 2) + 3x. The two lines are parallel and never meet, which is what "no solution" looks like.',
        desmosLatex:['y=5(2x+3)-4','y=7(x-2)+3x']
      },
      {
        id:'HA2-07', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'System by substitution (value of a product)',
        stem:'The system of equations below is given.<br><br>x = 5 − 2y<br>3x + 4y = 9<br><br>If (x, y) is the solution to the system, what is the value of xy?',
        choices:{A:'−3', B:'3', C:'−1', D:'2'},
        correct:'A',
        expCorrect:'The first equation is already solved for x, so substitute it into the second: 3(5 − 2y) + 4y = 9 → 15 − 6y + 4y = 9 → 15 − 2y = 9 → −2y = −6 → y = 3. Then x = 5 − 2(3) = −1. The question asks for the PRODUCT: xy = (−1)(3) = −3. (Check the second equation: 3(−1) + 4(3) = −3 + 12 = 9 ✓.)',
        expWrong:{
          B:'3 is y, the first value you find. It is the intermediate result, not the product they asked for.',
          C:'−1 is x. Finding x correctly is only step two of three; you still have to multiply.',
          D:'2 is x + y = −1 + 3. The question asks for xy, a product, not a sum.'
        },
        tip:'When one equation already reads "x = …", substitute it whole into the other, in parentheses. Then underline what the question actually wants — x, y, xy, x + y — before you bubble anything.',
        desmos:'Graph x = 5 − 2y and 3x + 4y = 9; they intersect at (−1, 3), so xy = −3.',
        desmosLatex:['x=5-2y','3x+4y=9']
      },
      {
        id:'HA2-08', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'System by substitution (subtracting a negative)',
        stem:'The system of equations below is given.<br><br>y = 4 − 3x<br>2x − y = 11<br><br>If (x, y) is the solution to the system, what is the value of x − y?',
        answer:'8',
        expCorrect:'Substitute y = 4 − 3x into the second equation, keeping the parentheses because the whole expression is being subtracted: 2x − (4 − 3x) = 11 → 2x − 4 + 3x = 11 → 5x = 15 → x = 3. Then y = 4 − 3(3) = −5. So x − y = 3 − (−5) = 3 + 5 = 8. (Check: 2(3) − (−5) = 6 + 5 = 11 ✓.) Answer: 8.',
        expWrong:{},
        tip:'When you substitute an expression behind a minus sign, put it in parentheses first: −(4 − 3x) = −4 + 3x. And subtracting a negative adds — 3 − (−5) = 8, not −2.',
        desmos:'Graph y = 4 − 3x and 2x − y = 11; they meet at (3, −5), so x − y = 3 − (−5) = 8.',
        desmosLatex:['y=4-3x','2x-y=11']
      },
      {
        id:'HA2-09', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Compound inequality (dividing by a negative)',
        stem:'Which of the following describes all values of x that satisfy −5 < 9 − 2x ≤ 7 ?',
        choices:{
          A:'1 < x ≤ 7',
          B:'−8 ≤ x < −2',
          C:'1 ≤ x < 7',
          D:'−7 < x ≤ −1'
        },
        correct:'C',
        expCorrect:'Work on all three parts at once. Subtract 9 everywhere: −5 − 9 < −2x ≤ 7 − 9, so −14 < −2x ≤ −2. Now divide everything by −2, which REVERSES both inequality symbols: 7 > x ≥ 1. Written left to right that is 1 ≤ x < 7. (Check the ends: x = 1 gives 9 − 2 = 7, and 7 ≤ 7 ✓ so 1 is included; x = 7 gives 9 − 14 = −5, and −5 is not greater than −5, so 7 is excluded ✓.)',
        expWrong:{
          A:'1 < x ≤ 7 has the right endpoints but the strictness on the wrong ends. When the symbols reverse, the "≤" travels with the number it came from: it came from the 7 on the right of the original, which corresponds to x = 1.',
          B:'−8 ≤ x < −2 comes from ADDING 9 instead of subtracting it: 4 < −2x ≤ 16. The 9 is being added on the middle, so you remove it by subtracting.',
          D:'−7 < x ≤ −1 divides −14 < −2x ≤ −2 by +2 instead of by −2, so the signs never reverse and the answers keep the wrong sign. Test x = −1: 9 + 2 = 11, which is not ≤ 7.'
        },
        tip:'In a compound inequality do the same operation to ALL THREE parts. If you multiply or divide by a negative, BOTH symbols flip — and each endpoint keeps its own strict/non-strict status as it moves.',
        desmos:'Graph y = 9 − 2x with the horizontal lines y = −5 and y = 7; the x-values where the line sits between them run from 1 (included) to 7 (not included).',
        desmosLatex:['y=9-2x','y=-5','y=7','-5<9-2x\\le 7']
      },
      {
        id:'HA2-10', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Inequality with the variable on both sides (greatest integer)',
        stem:'What is the greatest integer value of x that satisfies the inequality 15 − 4x > 6x + 45 ?',
        choices:{A:'−3', B:'−4', C:'−2', D:'3'},
        correct:'B',
        expCorrect:'Collect the x-terms on the left: 15 − 4x − 6x > 45 → 15 − 10x > 45 → −10x > 30. Divide by −10 and REVERSE the symbol: x < −3. The greatest integer strictly less than −3 is −4. (Check x = −4: left = 15 + 16 = 31, right = −24 + 45 = 21, and 31 > 21 ✓. Check x = −3: left = 27, right = 27, and 27 is not greater than 27 ✗.)',
        expWrong:{
          A:'−3 is the boundary, not a solution. At x = −3 both sides equal 27, and the symbol is strict (>), so −3 itself does not satisfy the inequality.',
          C:'−2 correctly rules out −3 but then steps the wrong way. The solutions are BELOW −3, so the next integer to take is −4, not −2. (At x = −2: 23 > 33 is false.)',
          D:'3 comes from dividing 30 by 10 and dropping the negative. The coefficient is −10, so 30/(−10) = −3, and the symbol reverses.'
        },
        tip:'Divide by a negative → flip the inequality. Then translate: "x < −3" with a strict symbol means −3 is out, and "greatest integer" means step DOWN to −4, not up.',
        desmos:'Graph y = 15 − 4x and y = 6x + 45. The first is above the second only when x < −3, so the largest integer that works is −4.',
        desmosLatex:['y=15-4x','y=6x+45','x<-3']
      },
      {
        id:'HA2-11', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear model from a rate (unit conversion)',
        stem:'A pool contains 4,500 liters of water. A pump is switched on and adds water at a constant rate of 75 liters per minute. Which equation gives the number of liters of water, w, in the pool h hours after the pump is switched on?',
        choices:{
          A:'w = 4,500 + 75h',
          B:'w = 75 + 4,500h',
          C:'w = 4,500 + 1.25h',
          D:'w = 4,500 + 4,500h'
        },
        correct:'D',
        expCorrect:'The starting amount 4,500 is the constant term, and the rate is the coefficient — but the rate has to be expressed PER HOUR, because the variable h counts hours. In one hour the pump adds 75 × 60 = 4,500 liters. So w = 4,500 + 4,500h. (Check with h = 2: w = 4,500 + 9,000 = 13,500 liters, which matches 120 minutes × 75 = 9,000 liters added ✓. The two 4,500s being equal is a coincidence of the numbers, not a mistake.)',
        expWrong:{
          A:'w = 4,500 + 75h uses the per-MINUTE rate with a variable measured in hours. After 1 hour it predicts only 75 extra liters instead of 4,500.',
          B:'w = 75 + 4,500h swaps the two roles: 4,500 is what is already in the pool at h = 0, and 75 is the rate. Here the equation starts the pool at 75 liters.',
          C:'w = 4,500 + 1.25h converts the wrong direction, dividing by 60 (75/60 = 1.25) instead of multiplying. Dividing turns liters per minute into liters per second, making the pump slower, not faster.'
        },
        tip:'Before writing the model, match the rate to the units of the variable. Per minute → per hour means × 60; per hour → per minute means ÷ 60. Starting amount is the constant; rate is the coefficient.',
        desmos:'Graph w = 4500 + 4500h and w = 4500 + 75h and compare them at h = 1: the correct model has to be at 9,000 liters.',
        desmosLatex:['y=4500+4500x','y=4500+75x','x=1']
      },
      {
        id:'HA2-12', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear model: build it, invert it, then predict',
        stem:'A print shop charges a fixed setup fee of $85 plus $0.60 for each poster printed. A school placed one order and paid $445. If the shop raises the price to $0.80 per poster but keeps the same $85 setup fee, what would the same number of posters cost, in dollars?',
        answer:'565',
        expCorrect:'Write the model first: cost = 85 + 0.60p, where p is the number of posters. Use the order that is known to find p: 445 = 85 + 0.60p → 0.60p = 360 → p = 600 posters. (Check: 85 + 0.60(600) = 85 + 360 = 445 ✓.) Now rebuild the model with the new rate and the SAME setup fee: cost = 85 + 0.80(600) = 85 + 480 = 565. Answer: 565.',
        expWrong:{},
        tip:'A "fixed fee plus a rate" problem is always cost = fee + rate × quantity. Peel the fixed fee off FIRST, then divide by the rate to recover the quantity. When the rate changes, the fee usually does not.',
        desmos:'Graph y = 85 + 0.6x and y = 445 to find x = 600, then evaluate y = 85 + 0.8x at x = 600.',
        desmosLatex:['y=85+0.6x','y=445','y=85+0.8x','x=600']
      }
    ]
  });
})();
