/* SAT Studio question set — Math: Advanced Math / Equivalent expressions
   Polinomios y expresiones racionales (PRX-01 a PRX-11).
   Sesgo a fácil a propósito: el banco venía 64 % difícil y esto lo usa una
   escuela entera, incluyendo a quien arranca en 400. 4 Fácil · 5 Media · 2 Difícil. */
(function(){
  window.SAT_SETS.push({
    id: 'math-poly-rational1',
    title: 'Polynomials & Rational Expressions',
    section: 'math',
    level: 'Media',
    description: 'Equivalent expressions, start to finish: multiplying binomials, the factor and remainder theorems, zeros and the graph, degree and leading coefficient, division with a remainder, where a rational expression is undefined, and one complex fraction.',
    minutes: 15,
    questions: [

      /* ---------- Fácil ---------- */
      {
        id:'PRX-01', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Equivalent expressions (product of two binomials)',
        stem:'Which of the following is equivalent to (x + 7)(x − 3)?',
        choices:{A:'x² − 4x − 21', B:'x² + 4x − 21', C:'x² + 10x − 21', D:'x² − 21'},
        correct:'B',
        expCorrect:'Multiply every term by every term: (x)(x) = x², (x)(−3) = −3x, (7)(x) = 7x, (7)(−3) = −21. The two middle terms combine: −3x + 7x = +4x. That leaves x² + 4x − 21. (Check with x = 1: (1 + 7)(1 − 3) = 8 · (−2) = −16, and 1 + 4 − 21 = −16 ✓.)',
        expWrong:{
          A:'x² − 4x − 21 gets the middle term backwards. The two middle pieces are −3x and +7x, and 7 is bigger than 3, so the sum is +4x, not −4x.',
          C:'x² + 10x − 21 adds 7 and 3 as if both were positive. One of them comes from −3, so you combine +7x with −3x and get 4x.',
          D:'x² − 21 is the classic missing middle term: it multiplies only first-by-first and last-by-last. The outer and inner products do not disappear.'
        },
        tip:'Every term of the first parenthesis multiplies every term of the second one (FOIL). The middle term is the SUM of the outer and inner products, with their signs — it is never zero unless the two cancel.',
        desmos:'Graph y = (x + 7)(x − 3) and y = x² + 4x − 21: they land on top of each other as one single curve. Add y = x² − 21 and watch it sit somewhere else.',
        desmosLatex:['y=(x+7)(x-3)','y=x^2+4x-21','y=x^2-21']
      },
      {
        id:'PRX-02', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Factor theorem (a zero gives a factor)',
        stem:'For a polynomial function p, the value of p(3) is 0. Which of the following must be a factor of p(x)?',
        choices:{A:'x + 3', B:'3x', C:'x − 3', D:'x'},
        correct:'C',
        expCorrect:'The factor theorem says: p(a) = 0 if and only if (x − a) is a factor of p(x). Here the input that makes p equal 0 is a = 3, so the factor is (x − 3). Read it the other way to see it: setting x − 3 = 0 gives x = 3, exactly the value where p is zero.',
        expWrong:{
          A:'x + 3 is the sign trap. Setting x + 3 = 0 gives x = −3, so (x + 3) being a factor would mean p(−3) = 0 — a different statement from the one you were given.',
          B:'3x reads the 3 in p(3) as a coefficient multiplying x. The 3 is the INPUT you plugged in, not a number sitting in front of x.',
          D:'x is a factor exactly when p(0) = 0. That swaps the input (3) with the output (0): you were told the value of p at 3, not the value of p at 0.'
        },
        tip:'Zero and factor are mirror images with opposite signs: a zero at x = a comes from the factor (x − a), and the factor (x + a) means a zero at x = −a. Set the factor equal to 0 and solve — that is the zero.',
        desmos:'Graph y = (x − 3)(x + 1) and check that it hits the x-axis at x = 3. Then graph y = (x + 3)(x + 1) and see that it dies at x = −3 instead.',
        desmosLatex:['y=(x-3)(x+1)','y=(x+3)(x+1)']
      },
      {
        id:'PRX-03', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Zeros from factored form and the graph',
        stem:'The function f is defined by f(x) = (x + 2)(x − 9). In the xy-plane, the graph of y = f(x) intersects the x-axis at exactly two points. What are those two points?',
        choices:{
          A:'(−2, 0) and (9, 0)',
          B:'(2, 0) and (−9, 0)',
          C:'(0, −2) and (0, 9)',
          D:'(−2, 0) and (−9, 0)'
        },
        correct:'A',
        expCorrect:'The graph meets the x-axis where y = 0, so set each factor to zero: x + 2 = 0 gives x = −2, and x − 9 = 0 gives x = 9. On the x-axis the y-coordinate is 0, so the points are (−2, 0) and (9, 0). (Check: f(−2) = (0)(−11) = 0 and f(9) = (11)(0) = 0 ✓.)',
        expWrong:{
          B:'(2, 0) and (−9, 0) flips both signs. The factor (x + 2) gives the zero −2, not +2 — the zero always has the opposite sign of the number inside the parenthesis.',
          C:'(0, −2) and (0, 9) has the coordinates swapped. Points of the form (0, y) sit on the y-AXIS; the x-intercepts have the 0 in second place.',
          D:'(−2, 0) and (−9, 0) flips the sign of only the second factor. (x − 9) gives x = +9, because x − 9 = 0 means x = 9.'
        },
        tip:'Factored form hands you the x-intercepts for free: set each factor equal to zero. And keep the order straight — an x-intercept is (number, 0), a y-intercept is (0, number).',
        desmos:'Graph y = (x + 2)(x − 9) and click the two points where the parabola crosses the x-axis: Desmos labels them (−2, 0) and (9, 0).',
        desmosLatex:['y=(x+2)(x-9)']
      },
      {
        id:'PRX-04', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Rational expression: the value where it is undefined',
        stem:'For what value of x is the expression 9/(2x − 6) undefined?',
        choices:{A:'−3', B:'6', C:'0', D:'3'},
        correct:'D',
        expCorrect:'A fraction is undefined only when its DENOMINATOR is 0. Set 2x − 6 = 0: 2x = 6, so x = 3. (Check: at x = 3 the bottom is 2(3) − 6 = 0, and 9/0 has no value. At every other x the bottom is a nonzero number and the fraction is fine.)',
        expWrong:{
          A:'−3 is the sign flip. Solving 2x − 6 = 0 moves the 6 to the other side as +6, giving x = +3.',
          B:'6 stops one step early: 2x = 6 is not the answer yet, you still have to divide both sides by 2.',
          C:'0 assumes the variable itself cannot be 0. Plug it in: the bottom is 2(0) − 6 = −6, so the expression equals 9/(−6) = −1.5. Perfectly defined.'
        },
        tip:'Only the bottom can break a fraction. Ignore the numerator, set the denominator equal to 0, and solve — those are the excluded values, and they are also where a vertical asymptote or a hole shows up.',
        desmos:'Graph y = 9/(2x − 6) and add the line x = 3: the curve shoots off to infinity on both sides of that line and never touches it.',
        desmosLatex:['y=9/(2x-6)','x=3']
      },

      /* ---------- Media ---------- */
      {
        id:'PRX-05', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Degree and leading coefficient of an expanded product',
        stem:'The polynomial p is defined by p(x) = (2x³ − 5x + 1)(4x² + 3x − 7). If p(x) were written in standard form, what would its degree and its leading coefficient be?',
        choices:{
          A:'Degree 6, leading coefficient 8',
          B:'Degree 5, leading coefficient 8',
          C:'Degree 5, leading coefficient −7',
          D:'Degree 5, leading coefficient 6'
        },
        correct:'B',
        expCorrect:'You do not need to expand all of it. The highest power of the product comes from multiplying the two highest-power terms: (2x³)(4x²) = 8x⁵. So the degree is 3 + 2 = 5 and the leading coefficient is 2 · 4 = 8. (Expanding in full gives 8x⁵ + 6x⁴ − 34x³ − 11x² + 38x − 7, which starts with 8x⁵ ✓.)',
        expWrong:{
          A:'Degree 6 multiplies the degrees (3 · 2) instead of adding them. Exponents ADD when you multiply powers: x³ · x² = x⁵.',
          C:'−7 is the product of the CONSTANT terms, (1)(−7). That is the last term of the expansion, not the first. The leading coefficient comes from the leading terms.',
          D:'6 multiplies 2 by 3, taking the wrong coefficient out of the second factor. The leading term there is 4x², so you need 2 · 4 = 8. (6 is really the coefficient of x⁴.)'
        },
        tip:'For a product of polynomials: degrees ADD and leading coefficients MULTIPLY. Look only at the first term of each factor — everything below it can only produce lower powers.',
        desmos:'Graph y = (2x³ − 5x + 1)(4x² + 3x − 7) and y = 8x⁵ and zoom way out. Far from the origin the two curves are nearly the same shape, because the leading term runs the show.',
        desmosLatex:['y=(2x^3-5x+1)(4x^2+3x-7)','y=8x^5']
      },
      {
        id:'PRX-06', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Polynomial division with a remainder',
        stem:'Which of the following is equivalent to (x² + 7x + 10)/(x + 4), where x ≠ −4?',
        choices:{
          A:'x + 3 + 2/(x + 4)',
          B:'x + 3',
          C:'x + 3 − 2/(x + 4)',
          D:'x + 3 − 2/x'
        },
        correct:'C',
        expCorrect:'Rebuild the numerator around the divisor: (x + 4)(x + 3) = x² + 7x + 12, which is 2 MORE than x² + 7x + 10. So x² + 7x + 10 = (x + 4)(x + 3) − 2, and dividing every piece by (x + 4) gives x + 3 − 2/(x + 4). (Check with x = 1: original = 18/5 = 3.6; and 1 + 3 − 2/5 = 3.6 ✓.)',
        expWrong:{
          A:'The + before the fraction is a sign slip. The remainder is p(−4) = 16 − 28 + 10 = −2, a NEGATIVE 2, so it is subtracted. At x = 1 this gives 4.4, not 3.6.',
          B:'x + 3 throws the remainder away, as if the division came out exact. At x = 1 the original is 3.6 while x + 3 is only 4 — the leftover −2/(x + 4) is real.',
          D:'x + 3 − 2/x cancels the + 4 in the denominator as if it were a factor. You may only cancel factors that MULTIPLY, never a number that is added. At x = 1 this gives 2, not 3.6.'
        },
        tip:'Any division writes as quotient + remainder/divisor, and the remainder equals p(value that zeroes the divisor). Get the sign from that number: p(−4) = −2 means the fraction is SUBTRACTED.',
        desmos:'Graph y = (x² + 7x + 10)/(x + 4) and y = x + 3 − 2/(x + 4): one single curve. Add y = x + 3 and see it run slightly above.',
        desmosLatex:['y=(x^2+7x+10)/(x+4)','y=x+3-2/(x+4)','y=x+3']
      },
      {
        id:'PRX-07', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Remainder theorem (evaluate at the zero of the divisor)',
        stem:'The polynomial p is defined by p(x) = x³ − 4x² + 2x + 9. What is the remainder when p(x) is divided by (x − 3)?',
        choices:{A:'6', B:'0', C:'9', D:'−60'},
        correct:'A',
        expCorrect:'The remainder theorem turns a long division into one substitution: the remainder of p(x) ÷ (x − a) is p(a). Here x − 3 = 0 at a = 3, so compute p(3) = 27 − 4(9) + 2(3) + 9 = 27 − 36 + 6 + 9 = 6. The remainder is 6.',
        expWrong:{
          B:'0 would mean (x − 3) divides evenly, that is, that it is a factor. It is not: p(3) = 6, and only a value of 0 would make it a factor.',
          C:'9 is the constant term of p. That is p(0), which is the remainder when you divide by x — not by (x − 3).',
          D:'−60 is p(−3): it uses the number as it appears in (x − 3) instead of the value that makes the divisor zero. For (x − 3) you substitute +3.'
        },
        tip:'Never long-divide by a linear factor on the SAT. Solve divisor = 0, substitute that value into p, and the number you get IS the remainder. Watch the sign: (x − 3) sends you to +3, (x + 3) to −3.',
        desmos:'Type f(x) = x³ − 4x² + 2x + 9 on one line, then f(3) on the next: Desmos prints 6. Try f(−3) and you get −60, which is the trap.',
        desmosLatex:['f(x)=x^3-4x^2+2x+9','f(3)','f(-3)']
      },
      {
        id:'PRX-08', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: the middle coefficient of a product',
        stem:'The expression (3x − 4)(2x + 7) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of b?',
        answer:'13',
        expCorrect:'Only the middle coefficient is asked for, and it comes from the outer and inner products: (3x)(7) = 21x and (−4)(2x) = −8x. Together: 21x − 8x = 13x, so b = 13. (The full expansion is 6x² + 13x − 28, so a = 6 and c = −28. Check with x = 1: (3 − 4)(2 + 7) = −9, and 6 + 13 − 28 = −9 ✓.) Answer: 13.',
        tip:'When a question asks for ONE coefficient, do not expand everything. The x-coefficient of a product of two binomials is always outer + inner, carrying both signs. Read carefully which letter they want — a, b or c.',
        desmos:'Graph y = (3x − 4)(2x + 7) and y = 6x² + 13x − 28: one single curve. Change the 13 to any other number and the two curves split apart.',
        desmosLatex:['y=(3x-4)(2x+7)','y=6x^2+13x-28']
      },
      {
        id:'PRX-09', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Rational expression: vertical and horizontal asymptotes',
        stem:'The function f is defined by f(x) = (5x − 1)/(x + 3). In the xy-plane, the graph of y = f(x) has a vertical asymptote at the line x = a and a horizontal asymptote at the line y = b. What is the value of a + b?',
        answer:'2',
        expCorrect:'Vertical asymptote: set the denominator to 0, so x + 3 = 0 and a = −3. Horizontal asymptote: top and bottom have the SAME degree (both degree 1), so the ratio of the leading coefficients decides, b = 5/1 = 5. Then a + b = −3 + 5 = 2. (Check b: at x = 1000, f(1000) = 4999/1003 ≈ 4.98, closing in on 5 ✓.) Answer: 2.',
        tip:'Two different rules, one for each asymptote. Vertical: denominator = 0. Horizontal: compare degrees — same degree gives the ratio of leading coefficients, a smaller top gives y = 0, and a bigger top gives no horizontal asymptote at all.',
        desmos:'Graph y = (5x − 1)/(x + 3) together with x = −3 and y = 5. The curve hugs both lines forever and never touches either one.',
        desmosLatex:['y=(5x-1)/(x+3)','x=-3','y=5']
      },

      /* ---------- Difícil ---------- */
      {
        id:'PRX-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Complex fraction (a sum of two fractions over a number)',
        stem:'For x &gt; 2, which of the following is equivalent to ( 1/(x − 2) + 1/(x + 2) ) / 2 ?',
        choices:{
          A:'2x/(x² − 4)',
          B:'x/(x² + 4)',
          C:'1/(2x)',
          D:'x/(x² − 4)'
        },
        correct:'D',
        expCorrect:'First add the top. The common denominator is (x − 2)(x + 2) = x² − 4, so 1/(x − 2) + 1/(x + 2) = [(x + 2) + (x − 2)]/(x² − 4) = 2x/(x² − 4). Now divide that by 2, which halves the numerator: x/(x² − 4). (Check with x = 3: 1/1 + 1/5 = 1.2, and 1.2/2 = 0.6; meanwhile 3/(9 − 4) = 0.6 ✓.)',
        expWrong:{
          A:'2x/(x² − 4) is the sum of the two fractions BEFORE dividing by 2 — it stops one step early. At x = 3 it gives 1.2, exactly twice the right value.',
          B:'x/(x² + 4) expands (x − 2)(x + 2) as x² + 4. Difference of squares keeps the minus: (x − 2)(x + 2) = x² − 4. At x = 3 it gives 3/13 ≈ 0.23, not 0.6.',
          C:'1/(2x) comes from adding straight across, numerator with numerator and denominator with denominator: (1 + 1)/((x − 2) + (x + 2)) = 2/(2x). Fractions are never added that way. At x = 3 it gives 1/6 ≈ 0.17.'
        },
        tip:'Clear the little fractions first: add the top over a common denominator, and only then handle the outer division. Dividing by 2 means multiplying by 1/2 — it touches the whole fraction once, not the top and the bottom separately.',
        desmos:'Graph y = (1/(x − 2) + 1/(x + 2))/2 and y = x/(x² − 4) and look to the right of x = 2: one single curve. Add y = 2x/(x² − 4) and watch it sit twice as high.',
        desmosLatex:['y=(1/(x-2)+1/(x+2))/2','y=x/(x^2-4)','y=2x/(x^2-4)']
      },
      {
        id:'PRX-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Factoring by grouping to recover the third zero',
        stem:'The polynomial p is defined by p(x) = 2x³ + bx² − 18x + c, where b and c are constants. In the xy-plane, the graph of y = p(x) crosses the x-axis at (3, 0) and at (−1, 0). At what other value of x does the graph cross the x-axis?',
        choices:{A:'3', B:'−3', C:'9', D:'2'},
        correct:'B',
        expCorrect:'Each x-intercept means the polynomial is 0 there. p(3) = 54 + 9b − 54 + c = 9b + c = 0. p(−1) = −2 + b + 18 + c = b + c + 16 = 0. Subtracting the second from the first: 8b = 16, so b = 2 and then c = −18. Now p(x) = 2x³ + 2x² − 18x − 18 = 2[x²(x + 1) − 9(x + 1)] = 2(x + 1)(x² − 9) = 2(x + 1)(x − 3)(x + 3). The three zeros are −1, 3 and −3, so the new one is −3. (Check: p(−3) = −54 + 18 + 54 − 18 = 0 ✓.)',
        expWrong:{
          A:'3 is one of the two intercepts you were already given, not the new one. The leftover factor is (x + 3), and its zero is −3.',
          C:'9 solves x² − 9 = 0 as x = 9. That skips the square root: x² = 9 gives x = 3 AND x = −3, and 3 was already known.',
          D:'2 is the value of b you found on the way. It is a coefficient inside p, not a zero of p — check it: p(2) = −30, not 0.'
        },
        tip:'Each point on the x-axis is one equation p(value) = 0, so two points pin down two unknown constants. Once the polynomial is fully known, factor by grouping and read every zero — and make sure the number you bubble answers the question, not the intermediate step.',
        desmos:'Type y = 2x³ + 2x² − 18x − 18 and read the three x-intercepts: −3, −1 and 3. You can also add sliders b and c to y = 2x³ + bx² − 18x + c and drag them until the curve passes through (3, 0) and (−1, 0).',
        desmosLatex:['y=2x^3+2x^2-18x-18','y=2x^3+bx^2-18x+c','b=2','c=-18']
      }

    ]
  });
})();
