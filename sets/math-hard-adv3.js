/* SAT Studio question set — Math: Polynomials & Radicals — Hard (HV3-01 to HV3-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-hard-adv3',
    title: 'Polynomials & Radicals — Hard',
    section: 'math',
    level: 'Difícil',
    description: 'Hard polynomials and radicals — factoring by grouping, quadratics in disguise, rational expressions, radical and fractional-exponent forms, the quadratic formula, and quadratic models.',
    minutes: 20,
    questions: [
      {
        id:'HV3-01', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Factoring by grouping (four terms)',
        stem:'Which of the following is equivalent to 6x³ + 9x² − 10x − 15?',
        choices:{
          A:'(2x + 3)(3x² + 5)',
          B:'(2x + 3)(3x² − 5)',
          C:'(2x − 3)(3x² − 5)',
          D:'(2x + 3)(3x − 5)'
        },
        correct:'B',
        expCorrect:'Group the four terms in pairs: (6x³ + 9x²) + (−10x − 15). From the first pair pull out 3x²: 3x²(2x + 3). From the second pair pull out −5 (a NEGATIVE, so that the leftover matches): −5(2x + 3). Both pairs now share the binomial (2x + 3), so the expression is (2x + 3)(3x² − 5). (Check by expanding: 6x³ − 10x + 9x² − 15 ✓.)',
        expWrong:{
          A:'(2x + 3)(3x² + 5) comes from pulling +5 out of −10x − 15, but +5(2x + 3) = 10x + 15, the opposite of what is there. Pulling out −5 is what reproduces −10x − 15.',
          C:'(2x − 3)(3x² − 5) expands to 6x³ − 9x² − 10x + 15: the sign on the 9x² term is wrong. The first pair gives 3x²(2x + 3), with a plus inside.',
          D:'(2x + 3)(3x − 5) is only degree 2; it expands to 6x² − x − 15. That happens when you pull 3x instead of 3x² out of 6x³ + 9x².'
        },
        tip:'Four terms with no common factor → group them in pairs and factor each pair so the SAME binomial is left over. If the leftovers do not match, change what you pull out of the second pair: pulling out a negative is usually what fixes it.',
        desmos:'Graph y=6x^3+9x^2-10x-15 and y=(2x+3)(3x^2-5): the two curves sit exactly on top of each other, so choice B is the equivalent form.',
        desmosLatex:['y=6x^3+9x^2-10x-15','y=(2x+3)(3x^2-5)']
      },
      {
        id:'HV3-02', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratic in disguise (quartic in x²)',
        stem:'What is the greatest solution to the equation x⁴ − 13x² + 36 = 0?',
        answer:'3',
        expCorrect:'Only even powers of x appear, so let u = x². The equation becomes u² − 13u + 36 = 0 → (u − 4)(u − 9) = 0 → u = 4 or u = 9. Now undo the substitution: x² = 4 gives x = 2 or x = −2, and x² = 9 gives x = 3 or x = −3. The four solutions are −3, −2, 2 and 3, and the greatest is 3. (Check: 3⁴ − 13(3²) + 36 = 81 − 117 + 36 = 0 ✓.) Answer: 3.',
        expWrong:{},
        tip:'A quartic built only from x⁴, x² and a constant is a quadratic in disguise: substitute u = x², factor in u, then UNDO the substitution. Each positive value of u gives TWO values of x (±√u) — stopping at u = 9 and answering 9 is the usual way to lose this one.',
        desmos:'Graph y=x^4-13x^2+36 and look at the four x-intercepts (−3, −2, 2, 3); the rightmost one is 3.',
        desmosLatex:['y=x^4-13x^2+36']
      },
      {
        id:'HV3-03', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Adding rational expressions (unlike denominators)',
        stem:'Which of the following is equivalent to 3/(x − 2) + 5/(x + 1), where x ≠ 2 and x ≠ −1?',
        choices:{
          A:'8/(2x − 1)',
          B:'(8x + 13)/(x² − x − 2)',
          C:'(8x − 7)/(x² + x − 2)',
          D:'(8x − 7)/(x² − x − 2)'
        },
        correct:'D',
        expCorrect:'The common denominator is (x − 2)(x + 1) = x² − x − 2. Rewrite each fraction over it: 3(x + 1)/[(x − 2)(x + 1)] + 5(x − 2)/[(x − 2)(x + 1)]. Add the numerators: 3x + 3 + 5x − 10 = 8x − 7. So the sum is (8x − 7)/(x² − x − 2). (Check with x = 0: the original is 3/(−2) + 5/1 = 3.5, and (−7)/(−2) = 3.5 ✓.)',
        expWrong:{
          A:'8/(2x − 1) adds the tops and the bottoms straight across (3 + 5 over the two denominators added). Fractions are never added that way; at x = 0 it gives −8, not 3.5.',
          B:'(8x + 13)/(x² − x − 2) multiplies 5(x − 2) as 5x + 10. Distributing over a minus keeps the minus: 5(x − 2) = 5x − 10, so the numerator is 8x − 7.',
          C:'(8x − 7)/(x² + x − 2) expands the denominator wrong: (x − 2)(x + 1) = x² + x − 2x − 2 = x² − x − 2, with a MINUS on the middle term.'
        },
        tip:'To add fractions with unlike denominators, multiply each numerator by the other denominator and keep the product of the denominators underneath. Then distribute carefully: the sign of the second denominator travels into its numerator.',
        desmos:'Graph y=3/(x-2)+5/(x+1) and y=(8x-7)/(x^2-x-2): a single curve appears, which confirms choice D.',
        desmosLatex:['y=3/(x-2)+5/(x+1)','y=(8x-7)/(x^2-x-2)']
      },
      {
        id:'HV3-04', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Complex fraction (simplifying)',
        stem:'For x > 3, which of the following is equivalent to (1/x − 1/3) / (x − 3)?',
        choices:{
          A:'−1/(3x)',
          B:'1/(3x)',
          C:'(3 − x)/(3x)',
          D:'1/(x − 3)²'
        },
        correct:'A',
        expCorrect:'Combine the top into one fraction first: 1/x − 1/3 = (3 − x)/(3x). Dividing by (x − 3) means multiplying by 1/(x − 3): (3 − x)/(3x) · 1/(x − 3) = (3 − x)/[3x(x − 3)]. Since 3 − x = −(x − 3), the factor (x − 3) cancels and leaves −1/(3x). (Check with x = 6: (1/6 − 1/3)/3 = (−1/6)/3 = −1/18, and −1/(3·6) = −1/18 ✓.)',
        expWrong:{
          B:'1/(3x) drops a sign: the top is 1/x − 1/3 = (3 − x)/(3x), not (x − 3)/(3x). For x > 3 the whole expression is negative, so a positive answer cannot be right.',
          C:'(3 − x)/(3x) is the top alone, simplified. You still have to divide it by (x − 3), which is the step that cancels the binomial and leaves −1/(3x).',
          D:'1/(x − 3)² treats 1/x − 1/3 as 1/(x − 3). Subtracting fractions does not mean subtracting their denominators; you need the common denominator 3x.'
        },
        tip:'A complex fraction is a DIVISION. Combine the top into a single fraction, then multiply by the reciprocal of the bottom. Keep the order of the subtraction: 1/x − 1/3 = (3 − x)/(3x), and 3 − x = −(x − 3) is exactly what makes the final answer negative.',
        desmos:'Graph y=(1/x-1/3)/(x-3) and y=-1/(3x): for x > 3 they trace the same curve, below the x-axis, which rules out the positive options.',
        desmosLatex:['y=(1/x-1/3)/(x-3)','y=-1/(3x)']
      },
      {
        id:'HV3-05', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Negative fractional exponent rewritten as a radical',
        stem:'For x > 0, which of the following is equivalent to 5x^(−3/4)?',
        choices:{
          A:'⁴√(x³)/5',
          B:'−5·⁴√(x³)',
          C:'5/⁴√(x³)',
          D:'5/³√(x⁴)'
        },
        correct:'C',
        expCorrect:'A negative exponent means a reciprocal, and it applies only to x: 5x^(−3/4) = 5 · 1/x^(3/4) = 5/x^(3/4). Then read the fraction: the DENOMINATOR 4 is the index of the root and the NUMERATOR 3 is the power, so x^(3/4) = ⁴√(x³). The expression is 5/⁴√(x³). (Check with x = 16: 5(16)^(−3/4) = 5/8, and ⁴√(16³) = ⁴√4096 = 8, so 5/8 ✓.)',
        expWrong:{
          A:'⁴√(x³)/5 sends the 5 to the bottom too. The exponent −3/4 sits on x only; the coefficient 5 stays where it is, in the numerator.',
          B:'−5·⁴√(x³) reads the negative exponent as a minus sign. A negative exponent flips the factor into the denominator; it never makes the value negative (for x > 0 this expression is positive).',
          D:'5/³√(x⁴) swaps the two numbers: in x^(3/4) the 4 (the bottom) is the index of the root and the 3 (the top) is the power, so it is the FOURTH root of x³.'
        },
        tip:'x^(−m/n) = 1/(ⁿ√(x^m)). Three separate rules: the minus sign flips it into a denominator, the bottom of the fraction is the index of the root, and the top is the power. A coefficient in front is untouched by the exponent on x.',
        desmos:'Graph y=5x^(-3/4) and y=5/(x^(3/4)) for x>0: the same decreasing curve, and it stays above the x-axis, which kills the negative option.',
        desmosLatex:['y=5x^{-3/4}','y=5/\\sqrt[4]{x^{3}}']
      },
      {
        id:'HV3-06', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quotient of radicals (same index)',
        stem:'For x > 0, which of the following is equivalent to ³√(54x⁷) / ³√(2x)?',
        choices:{
          A:'27x²',
          B:'3x²',
          C:'3x⁶',
          D:'3x³'
        },
        correct:'B',
        expCorrect:'Two cube roots divide into one cube root: ³√(54x⁷)/³√(2x) = ³√(54x⁷ / 2x). Inside, 54/2 = 27 and x⁷/x = x⁶ (subtract the exponents), giving ³√(27x⁶). Now take the cube root by dividing each exponent by 3: ³√27 = 3 and ³√(x⁶) = x², so the result is 3x². (Check with x = 2: ³√(54·128)/³√4 = ³√6912/³√4 = ³√1728 = 12, and 3(2²) = 12 ✓.)',
        expWrong:{
          A:'27x² divides inside correctly but never takes the cube root of the number: ³√27 = 3, not 27.',
          C:'3x⁶ takes the cube root of 27 but leaves the x alone. The root applies to everything inside: ³√(x⁶) = x^(6/3) = x².',
          D:'3x³ divides the exponent by 2 instead of by 3 — the square-root reflex. With a cube root the index is 3, so 6/3 = 2.'
        },
        tip:'Same index → one radical: ⁿ√A / ⁿ√B = ⁿ√(A/B). Simplify inside first (divide the numbers, subtract the exponents), then take the root by DIVIDING every exponent by the index. The number inside gets rooted too.',
        desmos:'Graph y=(54x^7)^(1/3)/(2x)^(1/3) and y=3x^2 for x>0: identical curves, so 3x² is the match.',
        desmosLatex:['y=\\sqrt[3]{54x^{7}}/\\sqrt[3]{2x}','y=3x^{2}']
      },
      {
        id:'HV3-07', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratic formula (irrational solutions, simplified)',
        stem:'What are the solutions to the equation 2x² − 6x − 3 = 0?',
        choices:{
          A:'x = (3 ± √15)/2',
          B:'x = (−3 ± √15)/2',
          C:'x = (3 ± √3)/2',
          D:'x = (3 ± 2√15)/2'
        },
        correct:'A',
        expCorrect:'Here a = 2, b = −6 and c = −3. The formula gives x = (−b ± √(b² − 4ac))/(2a) = (6 ± √(36 − 4(2)(−3)))/4. Since c is negative, −4ac = +24, so the discriminant is 36 + 24 = 60. Then x = (6 ± √60)/4, and √60 = √(4·15) = 2√15, so x = (6 ± 2√15)/4. Divide EVERY term by 2: x = (3 ± √15)/2. (Check: √15 ≈ 3.873, so x ≈ 3.436 or x ≈ −0.436, and 2(3.436)² − 6(3.436) − 3 ≈ 0 ✓.)',
        expWrong:{
          B:'(−3 ± √15)/2 has the sign of −b wrong. With b = −6, the term is −b = +6, so the fraction starts at +3 after simplifying.',
          C:'(3 ± √3)/2 computes the discriminant as 36 − 24 = 12. Because c = −3 is negative, −4ac ADDS: 36 + 24 = 60.',
          D:'(3 ± 2√15)/2 simplifies only half of the fraction: from (6 ± 2√15)/4 you have to divide BOTH the 6 and the 2√15 by 2, not just the 6.'
        },
        tip:'x = (−b ± √(b² − 4ac))/(2a). Two places to be careful: when c is negative, −4ac adds to b²; and when you simplify, the common factor has to divide every term of the numerator and the denominator.',
        desmos:'Graph y=2x^2-6x-3 and read the two x-intercepts (about −0.436 and 3.436); (3+√15)/2 ≈ 3.436, which is choice A.',
        desmosLatex:['y=2x^2-6x-3']
      },
      {
        id:'HV3-08', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Matching irrational solutions back to the equation',
        stem:'The solutions to a quadratic equation are x = (5 ± √17)/4. Which of the following could be that equation?',
        choices:{
          A:'4x² − 5x + 1 = 0',
          B:'2x² + 5x + 1 = 0',
          C:'2x² − 5x − 1 = 0',
          D:'2x² − 5x + 1 = 0'
        },
        correct:'D',
        expCorrect:'Read the quadratic formula backwards. The denominator is 2a, so 4 = 2a → a = 2. The number in front of the ± is −b, so −b = 5 → b = −5. The number under the root is b² − 4ac: 25 − 4(2)c = 17 → 8c = 8 → c = 1. The equation is 2x² − 5x + 1 = 0. (Check: x = (5 ± √(25 − 8))/4 = (5 ± √17)/4 ✓.)',
        expWrong:{
          A:'4x² − 5x + 1 = 0 reads the denominator 4 as a instead of as 2a. Its discriminant is 25 − 16 = 9, a perfect square, so its solutions are rational: (5 ± 3)/8.',
          B:'2x² + 5x + 1 = 0 has b = +5, so −b = −5 and the solutions come out as (−5 ± √17)/4 — the right root but the wrong sign out front.',
          C:'2x² − 5x − 1 = 0 has c = −1, which makes the discriminant 25 + 8 = 33, not 17. A negative c makes the number under the root bigger, not smaller.'
        },
        tip:'Given the solutions, work the formula in reverse: denominator = 2a, the number before the ± = −b, and the number under the radical = b² − 4ac. A denominator of 4 means a = 2, not a = 4 — that single step decides this kind of question.',
        desmos:'Graph y=2x^2-5x+1 and add the vertical line x=(5+sqrt(17))/4: the line meets the parabola exactly at its right-hand x-intercept.',
        desmosLatex:['y=2x^2-5x+1','x=(5+\\sqrt{17})/4']
      },
      {
        id:'HV3-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'From an x-intercept to a coefficient (factor–zero link)',
        stem:'The polynomial p is defined by p(x) = (x + 2)(x² + bx − 21), where b is a constant. In the xy-plane, the graph of y = p(x) has an x-intercept at (3, 0). What is the value of b?',
        choices:{
          A:'−7',
          B:'12',
          C:'4',
          D:'−4'
        },
        correct:'C',
        expCorrect:'An x-intercept at (3, 0) means p(3) = 0. Substitute x = 3 into the whole product: (3 + 2)(9 + 3b − 21) = 5(3b − 12). The first factor is 5, which is not zero, so the second one has to be: 3b − 12 = 0 → 3b = 12 → b = 4. (Check: x² + 4x − 21 = (x + 7)(x − 3), which is indeed zero at x = 3 ✓.)',
        expWrong:{
          A:'−7 is the OTHER zero of the quadratic factor (x² + 4x − 21 = (x + 7)(x − 3)), not the coefficient b that the question asks for.',
          B:'12 is 3b, the value one step before the end. Divide by 3 to finish: b = 4.',
          D:'−4 comes from substituting x = −3, as if the intercept (3, 0) gave the factor (x + 3). An x-intercept at (3, 0) corresponds to the factor (x − 3), so the value to plug in is +3.'
        },
        tip:'An x-intercept at (k, 0) means p(k) = 0, which means (x − k) is a factor. Substituting k into the whole expression is faster than factoring: any factor that is not zero at k can be divided away, leaving one small equation for the unknown.',
        desmos:'Graph y=(x+2)(x^2+4x-21) and check that it crosses the x-axis at x = 3 (and at −7 and −2); with any other b the curve misses (3, 0).',
        desmosLatex:['y=(x+2)(x^2+4x-21)']
      },
      {
        id:'HV3-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Factor, zero and x-intercept (all three at once)',
        stem:'For a polynomial function p, the value of p(−6) is 0. Which of the following must be true?',
        choices:{
          A:'The graph of y = p(x) in the xy-plane has a y-intercept at (0, −6).',
          B:'(x + 6) is a factor of p(x), and the graph of y = p(x) in the xy-plane has an x-intercept at (−6, 0).',
          C:'(x − 6) is a factor of p(x), and the graph of y = p(x) in the xy-plane has an x-intercept at (6, 0).',
          D:'(x + 6) is a factor of p(x), and the graph of y = p(x) in the xy-plane has an x-intercept at (0, −6).'
        },
        correct:'B',
        expCorrect:'p(−6) = 0 is one fact with three names. As a factor: (x − k) is a factor when p(k) = 0, and here k = −6, so the factor is (x − (−6)) = (x + 6). As a point: the input −6 produced the output 0, so the graph passes through (−6, 0), and a point with y = 0 sits on the x-axis — it is an x-intercept. Both halves of choice B are right. (Example: p(x) = (x + 6)(x − 1) has p(−6) = 0 and crosses the x-axis at (−6, 0) ✓.)',
        expWrong:{
          A:'A y-intercept comes from the input x = 0, that is, from p(0). Knowing p(−6) tells you nothing about p(0), and the given output is 0, not −6.',
          C:'This flips the sign twice. A zero at x = −6 gives the factor (x + 6), not (x − 6), and the point is (−6, 0), not (6, 0).',
          D:'The factor is right, but the point is written backwards. An x-intercept lies ON the x-axis, so its y-coordinate is 0: the point is (−6, 0). The point (0, −6) is on the y-axis.'
        },
        tip:'Three names, one fact: p(k) = 0 ⇔ (x − k) is a factor of p(x) ⇔ the graph has an x-intercept at (k, 0). Watch the two sign flips: a zero at −6 gives the factor (x + 6), and the intercept is written (−6, 0).',
        desmos:'Graph y=(x+6)(x-1) as an example and also type the point (0,-6): the curve crosses the x-axis at (−6, 0), while that point sits on the y-axis somewhere else entirely.',
        desmosLatex:['y=(x+6)(x-1)','(0,-6)']
      },
      {
        id:'HV3-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratic model (zeros in context, negative root rejected)',
        stem:'A ball is launched upward from the roof of a building. Its height above the ground, in feet, is modeled by h(t) = −16t² + 48t + 64, where t is the number of seconds after the launch. How many seconds after the launch does the ball hit the ground?',
        choices:{
          A:'4',
          B:'−1',
          C:'64',
          D:'1.5'
        },
        correct:'A',
        expCorrect:'Hitting the ground means the height is 0, so solve −16t² + 48t + 64 = 0. Factor out −16: −16(t² − 3t − 4) = 0 → t² − 3t − 4 = 0 → (t − 4)(t + 1) = 0 → t = 4 or t = −1. Time after the launch cannot be negative, so t = 4 seconds. (Check: h(4) = −16(16) + 192 + 64 = −256 + 256 = 0 ✓.)',
        expWrong:{
          B:'−1 is the other root of the equation, but it means one second BEFORE the launch. The model only describes t ≥ 0, so that root is rejected by the context.',
          C:'64 is h(0), the height of the roof in feet. It is a height, not a number of seconds.',
          D:'1.5 is when the ball is highest: t = −b/(2a) = −48/(2·(−16)) = 1.5. That is the peak, not the landing.'
        },
        tip:'In a height model, "hits the ground" means height = 0, so you want the x-intercepts, not the vertex. Factor out the common number first to get an easy quadratic, then discard any root that the context forbids — negative times do not exist in these problems.',
        desmos:'Graph y=-16x^2+48x+64 and read where the curve crosses the positive part of the x-axis: x = 4.',
        desmosLatex:['y=-16x^2+48x+64']
      },
      {
        id:'HV3-12', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Building a revenue model (maximum from the vertex)',
        stem:'A shop sells 400 − 8p T-shirts per week when the price of a shirt is p dollars, for 0 < p < 50. The weekly revenue, in dollars, is the price of a shirt times the number of shirts sold. What price, in dollars, gives the greatest weekly revenue?',
        answer:'25',
        expCorrect:'Build the model first: revenue = price × quantity, so R(p) = p(400 − 8p) = −8p² + 400p. The leading coefficient is negative, so the parabola opens downward and its vertex is the maximum. The vertex is at p = −b/(2a) = −400/(2(−8)) = 400/16 = 25. (Check: at p = 25 the shop sells 400 − 200 = 200 shirts for a revenue of 25 × 200 = $5,000; at p = 24 it is 24 × 208 = $4,992 and at p = 26 it is 26 × 192 = $4,992, both lower ✓.) Answer: 25.',
        expWrong:{},
        tip:'Revenue = price × quantity. When the quantity is linear in the price, the revenue is a downward quadratic, so the best price is the VERTEX: p = −b/(2a). Shortcut: the vertex sits halfway between the zeros, here p = 0 and p = 50, so p = 25. Careful about what is asked — the price (25) is not the revenue (5,000).',
        desmos:'Graph y=x(400-8x) and look at the highest point of the parabola: it is at x = 25, where y = 5,000.',
        desmosLatex:['y=x(400-8x)']
      }
    ]
  });
})();
