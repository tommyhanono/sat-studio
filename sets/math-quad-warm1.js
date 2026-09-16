/* SAT Studio question set — Math: Advanced Math — Nonlinear equations and systems, warm-up (W1Q-01 a W1Q-12)
   La rampa de abajo de la destreza: el banco tenía 58 preguntas acá y solo 1 fácil.
   5 Fácil · 5 Media · 2 Difícil · 10 MC + 2 SPR. Ningún `extreme:true`: este set
   es la entrada, no el tier brutal. Reparto de la clave: A2 · B3 · C2 · D3. */
(function(){
  window.SAT_SETS.push({
    id: 'math-quad-warm1',
    title: 'Quadratics — Warm-up',
    section: 'math',
    level: 'Fácil',
    description: 'The starting ramp for quadratics: solving them three ways, what the discriminant tells you, where a line meets a parabola, and the two equation types where you must check your answer.',
    minutes: 15,
    questions: [
      {
        id:'W1Q-01', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Zero-product property (solutions from two binomials)',
        stem:'The equation (x − 6)(x + 2) = 0 is given. What are all values of x that satisfy this equation?',
        choices:{A:'x = −6 and x = 2', B:'x = 6 and x = −2', C:'x = 6 and x = 2', D:'x = −6 and x = −2'},
        correct:'B',
        expCorrect:'Two things multiplied together give 0 only when one of them IS 0, so take each piece on its own. x − 6 = 0 gives x = 6, and x + 2 = 0 gives x = −2. (Check x = 6: (6 − 6)(6 + 2) = 0 · 8 = 0 ✓. Check x = −2: (−2 − 6)(−2 + 2) = −8 · 0 = 0 ✓.)',
        expWrong:{
          A:'x = −6 and x = 2 copies the numbers out of the parentheses and keeps the sign it sees. Solving x − 6 = 0 moves the 6 across the equal sign, so it comes out +6, not −6.',
          C:'x = 6 and x = 2 handles the first piece right and the second one wrong. x + 2 = 0 means x = −2: the +2 has to move across too.',
          D:'x = −6 and x = −2 makes both answers negative. Only the piece that ADDS a number gives a negative solution; (x − 6) gives +6.',
        },
        tip:'When a product equals 0, set each piece equal to 0 separately. The solution is always the OPPOSITE sign of the number you see: (x − 6) → x = 6, (x + 2) → x = −2.',
        desmos:'Graph y = (x − 6)(x + 2) and look at where the curve crosses the x-axis. Those two x-values, 6 and −2, are the solutions.',
        desmosLatex:['y=(x-6)(x+2)']
      },
      {
        id:'W1Q-02', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Quadratics: both solutions of x² + bx + c = 0',
        stem:'What are the solutions to the equation x² − 7x + 10 = 0?',
        choices:{A:'x = −2 and x = −5', B:'x = −7 and x = 10', C:'x = 2 and x = −5', D:'x = 2 and x = 5'},
        correct:'D',
        expCorrect:'Look for two numbers that multiply to +10 and add to −7: they are −2 and −5. That splits the equation into (x − 2)(x − 5) = 0, so x = 2 or x = 5. (Check x = 2: 4 − 14 + 10 = 0 ✓. Check x = 5: 25 − 35 + 10 = 0 ✓.)',
        expWrong:{
          A:'x = −2 and x = −5 are the two numbers you searched for, not the solutions. The solutions are their OPPOSITES, because the piece (x − 2) equals zero at x = +2.',
          B:'x = −7 and x = 10 copies b and c straight out of the equation. Those coefficients tell you what to look for; they are never the answers themselves.',
          C:'x = 2 and x = −5 flips the sign on one solution but not the other. Both pieces come out as (x − 2) and (x − 5), so both solutions are positive.',
        },
        tip:'For x² + bx + c = 0 with a = 1: find two numbers whose PRODUCT is c and whose SUM is b, then flip their signs. Plugging one back in costs five seconds and catches every sign slip.',
        desmos:'Graph y = x² − 7x + 10. The parabola crosses the x-axis at 2 and at 5, and those crossings are the solutions.',
        desmosLatex:['y=x^2-7x+10']
      },
      {
        id:'W1Q-03', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Discriminant: how many real solutions there are',
        stem:'For the equation 2x² + 7x + 3 = 0, the value of b² − 4ac is 25. How many distinct real solutions does this equation have?',
        choices:{A:'None', B:'Exactly one', C:'Exactly two', D:'It cannot be determined without solving'},
        correct:'C',
        expCorrect:'The number b² − 4ac is the discriminant, and its SIGN answers the question on its own. Here it is 25, which is positive, so there are exactly two distinct real solutions. (Sure enough, 2x² + 7x + 3 = 0 comes out to x = −1/2 and x = −3: two different real numbers.)',
        expWrong:{
          A:'None is the answer when the discriminant is NEGATIVE, which means the square root in the formula has no real value. 25 is positive, so real solutions do exist.',
          B:'Exactly one is the answer when the discriminant is exactly ZERO, which makes the ± part add nothing. 25 is not zero.',
          D:'You never have to solve. Deciding the count without solving is the entire job of the discriminant, and the SIGN of 25 already settles it.',
        },
        tip:'Discriminant b² − 4ac: positive → two real solutions, zero → exactly one, negative → none. Read the SIGN, not the size: 25 and 2,500 both mean the same thing.',
        desmos:'Graph y = 2x² + 7x + 3 and count how many times the parabola crosses the x-axis. Two crossings means two real solutions.',
        desmosLatex:['y=2x^2+7x+3']
      },
      {
        id:'W1Q-04', type:'spr', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Rational equation solved by cross-multiplying',
        stem:'If 3/(x − 2) = 9/(x + 4), what is the value of x?',
        answer:'5',
        expCorrect:'One fraction equals one fraction, so cross-multiply: 3(x + 4) = 9(x − 2), which is 3x + 12 = 9x − 18. Collect the x-terms on one side: 12 + 18 = 9x − 3x, so 30 = 6x and x = 5. (Check: 3/(5 − 2) = 3/3 = 1 and 9/(5 + 4) = 9/9 = 1 ✓. Neither denominator is zero at x = 5, so the answer stands.)',
        tip:'A single fraction equal to a single fraction → cross-multiply, then solve the linear equation that is left. Always confirm your answer does not make a denominator zero; a value that does gets thrown out.',
        desmos:'Graph y = 3/(x − 2) and y = 9/(x + 4) and find where the two curves meet. The meeting point is at x = 5.',
        desmosLatex:['y=\\frac{3}{x-2}','y=\\frac{9}{x+4}']
      },
      {
        id:'W1Q-05', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Where a parabola and a horizontal line intersect',
        stem:'In the xy-plane, the graph of y = x² + 1 and the horizontal line y = 10 meet at two points. What is the x-coordinate of the meeting point that lies to the right of the y-axis?',
        choices:{A:'3', B:'−3', C:'9', D:'10'},
        correct:'A',
        expCorrect:'The graphs meet where the y-values agree, so set x² + 1 = 10. Subtract 1 from both sides: x² = 9, which gives x = 3 or x = −3. The point to the right of the y-axis has the positive x-coordinate, x = 3. (Check: 3² + 1 = 10 ✓.)',
        expWrong:{
          B:'−3 is the meeting point on the LEFT of the y-axis. It is a real solution of x² = 9, but the question asked for the one on the right.',
          C:'9 is the value of x², which is the next-to-last step. One move is missing: take the square root of 9 to get x = 3.',
          D:'10 is the y-coordinate that both meeting points share. The question asked for an x-coordinate.',
        },
        tip:'Two graphs meet where their y-values are equal, so set the two expressions equal to each other. And remember x² = 9 has TWO answers, +3 and −3 — re-read the question to see which one it wants.',
        desmos:'Graph y = x² + 1 and y = 10, then click each meeting point. Desmos shows (3, 10) and (−3, 10), so you can see which one is positive.',
        desmosLatex:['y=x^2+1','y=10']
      },
      {
        id:'W1Q-06', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Quadratic formula (irrational solutions)',
        stem:'What are the solutions to the equation x² − 4x − 6 = 0?',
        choices:{A:'x = −2 ± √10', B:'x = 2 ± √10', C:'x = 4 ± √10', D:'x = 2 ± √40'},
        correct:'B',
        expCorrect:'Use x = (−b ± √(b² − 4ac))/(2a) with a = 1, b = −4, c = −6. Then −b = +4 and b² − 4ac = 16 − 4(1)(−6) = 16 + 24 = 40, so x = (4 ± √40)/2. Since √40 = 2√10, that becomes (4 ± 2√10)/2 = 2 ± √10. (Check with x = 2 + √10: (14 + 4√10) − (8 + 4√10) − 6 = 0 ✓.)',
        expWrong:{
          A:'x = −2 ± √10 uses b at the front instead of −b. Here b = −4, so −b is +4, and after dividing by 2a the constant part is +2.',
          C:'x = 4 ± √10 divides the square-root part by 2a but leaves the 4 alone. The fraction bar sits under the WHOLE numerator, both terms.',
          D:'x = 2 ± √40 divides the 4 by 2 and forgets the root. √40 ÷ 2 is √10, not √40 — the 2 has to come out of the root first.',
        },
        tip:'In the quadratic formula the bar runs under both terms: −b AND the root both get divided by 2a. Pull perfect squares out of the root first (√40 = 2√10), because the answer choices are almost always in that form.',
        desmos:'Graph y = x² − 4x − 6 and click the two x-intercepts. Desmos shows about −1.162 and 5.162, and 2 − √10 ≈ −1.162 while 2 + √10 ≈ 5.162.',
        desmosLatex:['y=x^2-4x-6']
      },
      {
        id:'W1Q-07', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Quadratic formula when the leading coefficient is not 1',
        stem:'What are the solutions to the equation 2x² + 5x − 3 = 0?',
        choices:{A:'x = −6 and x = 1', B:'x = 3 and x = −1/2', C:'x = −1 and x = −3/2', D:'x = −3 and x = 1/2'},
        correct:'D',
        expCorrect:'Here a = 2, b = 5, c = −3. Then b² − 4ac = 25 − 4(2)(−3) = 25 + 24 = 49, and √49 = 7, so x = (−5 ± 7)/(2 · 2) = (−5 ± 7)/4. That gives x = 2/4 = 1/2 and x = −12/4 = −3. (Check x = 1/2: 2(1/4) + 5(1/2) − 3 = 0.5 + 2.5 − 3 = 0 ✓.)',
        expWrong:{
          A:'x = −6 and x = 1 divides by a instead of by 2a. With a = 2 the denominator is 4, not 2: (−5 + 7)/2 = 1 is what this mistake produces.',
          B:'x = 3 and x = −1/2 has both signs flipped, which happens when the formula is started with +b. It opens with −b, and here b = +5, so the numerator begins at −5.',
          C:'x = −1 and x = −3/2 comes from computing 25 − 24 = 1 instead of 25 + 24 = 49. Because c = −3 is negative, −4ac turns into a PLUS.',
        },
        tip:'Write down a, b and c WITH their signs before touching the formula. When c is negative, −4ac becomes addition — that single sign is where most of the lost points in this topic live.',
        desmos:'Graph y = 2x² + 5x − 3 and click the two x-intercepts. Desmos shows exactly −3 and 0.5.',
        desmosLatex:['y=2x^2+5x-3']
      },
      {
        id:'W1Q-08', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Discriminant: how many x-intercepts a parabola has',
        stem:'In the xy-plane, the graph of y = x² − 6x + 10 is a parabola. How many times does this parabola cross the x-axis?',
        choices:{A:'Zero times', B:'One time', C:'Two times', D:'Three times'},
        correct:'A',
        expCorrect:'Crossing the x-axis means y = 0, so the count is the number of real solutions of x² − 6x + 10 = 0. The discriminant is (−6)² − 4(1)(10) = 36 − 40 = −4, which is negative: no real solutions, so the parabola never touches the axis. (It checks out on the graph: the lowest point is at x = −b/2a = 3, where y = 9 − 18 + 10 = 1, one unit ABOVE the axis, and the parabola opens upward from there.)',
        expWrong:{
          B:'One time is what happens when the discriminant is exactly 0 and the lowest point sits ON the axis. Here that point is (3, 1), a full unit above it.',
          C:'Two times comes from computing 36 + 40 instead of 36 − 40, or from writing −4 and then reading it as if the minus were not there. With the discriminant, the sign is the whole answer.',
          D:'Three times cannot happen to a parabola. A quadratic has at most two real solutions, so at most two crossings.',
        },
        tip:'Number of x-intercepts = number of real solutions once you set y = 0, and b² − 4ac gives that count without solving. A negative discriminant means the parabola floats entirely above the axis (or entirely below it).',
        desmos:'Graph y = x² − 6x + 10 and look at the x-axis: the curve stays above it the whole way, with its lowest point at (3, 1).',
        desmosLatex:['y=x^2-6x+10']
      },
      {
        id:'W1Q-09', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Product of the solutions of a quadratic',
        stem:'The solutions to the equation 2x² − 10x + 6 = 0 are r and s. What is the value of rs?',
        choices:{A:'−3', B:'5', C:'3', D:'6'},
        correct:'C',
        expCorrect:'For ax² + bx + c = 0 the two solutions always multiply to c/a. Here a = 2 and c = 6, so rs = 6/2 = 3. (The long way agrees: the solutions are (5 ± √13)/2, whose product is (25 − 13)/4 = 12/4 = 3 ✓.)',
        expWrong:{
          A:'−3 borrows the minus sign from the SUM shortcut. The sum is −b/a; the product is c/a, with no sign change at all.',
          B:'5 is r + s, not rs: −b/a = 10/2 = 5. The question asked for the product, not the sum.',
          D:'6 is c on its own, stopping one step early. The product is c divided by a, and here a = 2, so 6/2 = 3.',
        },
        tip:'Two shortcuts worth memorizing for ax² + bx + c = 0: the solutions ADD to −b/a and MULTIPLY to c/a. The minus sign belongs to the sum only, and both are divided by a.',
        desmos:'Graph y = 2x² − 10x + 6 and click the two x-intercepts (about 0.697 and 4.303). Multiply them and you get 3.',
        desmosLatex:['y=2x^2-10x+6']
      },
      {
        id:'W1Q-10', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Sum and product of the solutions used together',
        stem:'The solutions to the equation x² − 9x + 20 = 0 are r and s. What is the value of (r + 2)(s + 2)?',
        answer:'42',
        expCorrect:'Open up the product first: (r + 2)(s + 2) = rs + 2r + 2s + 4 = rs + 2(r + s) + 4. Now read the two pieces off the equation: the solutions add to −b/a = 9 and multiply to c/a = 20. So the value is 20 + 2(9) + 4 = 20 + 18 + 4 = 42. (The long way agrees: the solutions are 4 and 5, and (4 + 2)(5 + 2) = 6 · 7 = 42 ✓.)',
        tip:'When a question asks for an expression built from BOTH solutions, rewrite it so only their sum and their product appear, then read those off as −b/a and c/a. You almost never need the individual solutions.',
        desmos:'Graph y = x² − 9x + 20 and click the x-intercepts: Desmos shows 4 and 5. Then type (4+2)(5+2) in a new line and Desmos returns 42.',
        desmosLatex:['y=x^2-9x+20','(4+2)(5+2)']
      },
      {
        id:'W1Q-11', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Nonlinear system: where a line meets a parabola',
        stem:'In the xy-plane, the graph of y = x² − 3x + 2 and the line y = x − 1 meet at two points. What is the greater of the two x-coordinates?',
        choices:{A:'1', B:'2', C:'4', D:'3'},
        correct:'D',
        expCorrect:'Set the two expressions for y equal: x² − 3x + 2 = x − 1. Move everything to one side: x² − 4x + 3 = 0, which splits into (x − 1)(x − 3) = 0, so x = 1 or x = 3. The greater one is 3. (Check at x = 3: the parabola gives 9 − 9 + 2 = 2, the line gives 3 − 1 = 2 — same point ✓.)',
        expWrong:{
          A:'1 is the SMALLER of the two x-coordinates. It is a genuine meeting point, but the question asked for the greater one.',
          B:'2 is the y-coordinate of that meeting point: at x = 3 both graphs give y = 2. The question asked for x, not y.',
          C:'4 is lifted straight out of x² − 4x + 3 = 0. That 4 is b, which happens to equal the SUM of the two solutions (1 + 3), not a solution itself.',
        },
        tip:'For a line and a curve, set the two y-expressions equal so only x is left, push everything to one side, and solve. Then re-read the question: greater or smaller, x-coordinate or y-coordinate.',
        desmos:'Graph y = x² − 3x + 2 and y = x − 1 together and click both meeting points: Desmos labels them (1, 0) and (3, 2).',
        desmosLatex:['y=x^2-3x+2','y=x-1']
      },
      {
        id:'W1Q-12', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Square-root equation with an extraneous solution',
        stem:'What is the solution to the equation √(2x + 7) = x − 4 ?',
        choices:{A:'x = 1', B:'x = 9', C:'x = 1 and x = 9', D:'There is no solution'},
        correct:'B',
        expCorrect:'Square both sides: 2x + 7 = (x − 4)² = x² − 8x + 16, so x² − 10x + 9 = 0, which splits into (x − 1)(x − 9) = 0 and offers two candidates, x = 1 and x = 9. Now test each one in the ORIGINAL equation. x = 9: √(18 + 7) = √25 = 5 and 9 − 4 = 5 ✓. x = 1: √(2 + 7) = √9 = 3 but 1 − 4 = −3, and 3 ≠ −3 ✗. Only x = 9 survives.',
        expWrong:{
          A:'x = 1 is exactly the extraneous one. It satisfies the SQUARED equation, but back in the original it asks a square root to equal −3, and a square root is never negative.',
          C:'x = 1 and x = 9 keeps both candidates without testing them. Squaring both sides can invent solutions, so the check is part of the method, not an optional extra step.',
          D:'There is no solution would be right only if BOTH candidates failed. x = 9 passes cleanly: √(2 · 9 + 7) = √25 = 5 = 9 − 4.',
        },
        tip:'Squaring both sides can create solutions that were never there, so every candidate goes back into the ORIGINAL equation. Fast filter: the square-root side is never negative, so any candidate that makes the other side negative is out before you do any arithmetic.',
        desmos:'Graph y = √(2x + 7) and y = x − 4. The two curves cross only once, at (9, 5). Near x = 1 the line is below the x-axis while the root is above it, which is why that candidate fails.',
        desmosLatex:['y=\\sqrt{2x+7}','y=x-4']
      }
    ]
  });
})();
