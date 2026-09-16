/* SAT Studio question set — Math: Advanced Math · rampa de entrada (AMR-01 a AMR-34)
   El tier de ABAJO del dominio: un paso o dos, planteo limpio, sin parametros encadenados.
   Es lo que le faltaba a Advanced Math, que ya tenia math-adv-equiv-a, math-adv-nl-a y math-adv-d
   viviendo todos en el rango medio-alto.

   Reparto pensado para que el clasificador (`skillOf`, que prueba am-equiv -> am-nonlin-eq ->
   am-nonlin-fn contra `skill` + los primeros 160 caracteres del enunciado) las reparta 11/11/12:
     · AMR-01..11  Equivalent expressions      (11)
     · AMR-12..22  Nonlinear equations/systems (11)
     · AMR-23..34  Nonlinear functions         (12)
   Por eso en el grupo 2 no aparece la palabra "radical" (cae en am-equiv por `\bradicals?\b`) y en
   el grupo 3 no aparecen "solution", "root", "quadratic" ni "intersect" en el skill ni en el arranque
   del enunciado: se dice "value", "x-intercept", "where the graphs meet".

   Verificacion: las equivalencias de AMR-01..11 se comprobaron evaluando la expresion original Y las
   cuatro opciones en 5 valores de la variable (solo la correcta coincidio en los 5); en AMR-12..22
   cada raiz —y cada distractor— se sustituyo de vuelta en la ecuacion original; en AMR-23..34 se
   evaluo el modelo en varios puntos. 0 fallos. */
(function(){
  window.SAT_SETS.push({
    id: 'math-adv-e',
    title: 'Advanced Math — Entry Ramp',
    section: 'math',
    level: 'Media',
    description: 'The bottom rung of Advanced Math: one or two clean steps through rewriting expressions, quadratics and systems, and nonlinear functions — where the domain actually starts.',
    minutes: 40,
    questions: [

      /* ---------- 1) Equivalent expressions (AMR-01 a AMR-11) ---------- */
      {
        id:'AMR-01', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Equivalent expressions: distributing a negative',
        stem:'Which of the following expressions is equivalent to 6m − 2(4m − 9)?',
        choices:{A:'−2m − 18', B:'2m + 18', C:'−2m + 18', D:'−2m − 9'},
        correct:'C',
        expCorrect:'The −2 multiplies both terms inside: −2 · 4m = −8m and −2 · (−9) = +18. So the expression becomes 6m − 8m + 18. Combine the m-terms: 6m − 8m = −2m. Result: −2m + 18. (Check with m = 1: the original is 6 − 2(4 − 9) = 6 − 2(−5) = 16, and −2(1) + 18 = 16 ✓.)',
        expWrong:{
          A:'The sign of the 9 was never flipped. A negative times a negative is positive, so −2 · (−9) = +18, not −18.',
          B:'This subtracted in the wrong order: 6m − 8m = −2m, not +2m. Keep the first term first.',
          D:'The −2 reached the 4m but stopped before the −9. Distributing means every term inside the parentheses gets multiplied.'
        },
        tip:'When a negative sits in front of parentheses, multiply it into EVERY term inside and write the new sign immediately. Only then combine like terms.',
        desmos:'Graph y=6x-2(4x-9) and y=-2x+18: one line appears. Add y=-2x-18 and it drops far below, same slope, wrong intercept.',
        desmosLatex:['y=6x-2(4x-9)','y=-2x+18']
      },
      {
        id:'AMR-02', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Equivalent expressions: multiplying powers with the same base',
        stem:'Which of the following is equivalent to (3x⁴)(5x³)?',
        choices:{A:'15x⁷', B:'15x¹²', C:'8x⁷', D:'8x¹²'},
        correct:'A',
        expCorrect:'Two different operations happen at the same time. The coefficients get MULTIPLIED: 3 · 5 = 15. The exponents get ADDED, because x⁴ · x³ means four x\'s times three x\'s, which is seven x\'s: x⁴⁺³ = x⁷. Result: 15x⁷. (Check with x = 2: 3 · 16 = 48 and 5 · 8 = 40, so 48 · 40 = 1920; and 15 · 2⁷ = 15 · 128 = 1920 ✓.)',
        expWrong:{
          B:'The exponents were multiplied: 4 · 3 = 12. Multiplying exponents is what a power of a power does, as in (x⁴)³. Here the two powers are being multiplied side by side, so they add.',
          C:'The coefficients were added: 3 + 5 = 8. The 3 and the 5 are factors, not like terms, so they multiply to 15.',
          D:'Both rules were swapped: the coefficients were added and the exponents multiplied. It is exactly the other way around.'
        },
        tip:'xᵃ · xᵇ = xᵃ⁺ᵇ, and the numbers out front just multiply. Add exponents when powers are multiplied; multiply exponents only when a power is raised to another power.',
        desmos:'Graph y=(3x^4)(5x^3) and y=15x^7: the curves coincide. Swap the second for y=15x^12 and it separates immediately for x greater than 1.',
        desmosLatex:['y=(3x^4)(5x^3)','y=15x^7']
      },
      {
        id:'AMR-03', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Equivalent expressions: factoring a difference of squares',
        stem:'Which of the following is equivalent to 49t² − 25?',
        choices:{A:'(7t − 5)²', B:'(49t − 5)(t + 5)', C:'(7t − 25)(7t + 1)', D:'(7t − 5)(7t + 5)'},
        correct:'D',
        expCorrect:'Both pieces are perfect squares: 49t² = (7t)² and 25 = 5², and they are subtracted. The difference of squares a² − b² always splits as (a − b)(a + b), so 49t² − 25 = (7t − 5)(7t + 5). The two middle terms cancel: −35t + 35t = 0, which is why no t-term survives. (Check with t = 2: 49 · 4 − 25 = 171, and (14 − 5)(14 + 5) = 9 · 19 = 171 ✓.)',
        expWrong:{
          A:'(7t − 5)² = 49t² − 70t + 25 — it carries a middle term and the constant comes out POSITIVE. A squared binomial is never the answer to a subtraction of two squares.',
          B:'49 and 1 were used as the pair instead of 7 and 7. Multiplying out gives 49t² + 240t − 25, which has a huge middle term the original does not have.',
          C:'This picked 25 and 1 as a number pair without checking the middle term: (7t − 25)(7t + 1) = 49t² − 168t − 25.'
        },
        tip:'a² − b² = (a − b)(a + b). Check that BOTH terms are perfect squares and that the sign between them is a minus; a sum of two squares does not factor this way.',
        desmos:'Graph y=49x^2-25 and y=(7x-5)(7x+5): a single parabola. Add y=(7x-5)^2 and watch it sit in a different place entirely.',
        desmosLatex:['y=49x^2-25','y=(7x-5)(7x+5)']
      },
      {
        id:'AMR-04', type:'spr', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Equivalent expressions: the remainder theorem',
        stem:'The polynomial p is defined by p(x) = x³ − 4x² + 6x − 1. What is the remainder when p(x) is divided by x − 2?',
        answer:'3',
        expCorrect:'The remainder theorem says: the remainder of p(x) ÷ (x − c) is just p(c). Here the divisor is x − 2, so c = 2 — the value that makes the divisor zero. Substitute: p(2) = 2³ − 4(2²) + 6(2) − 1 = 8 − 16 + 12 − 1 = 3. No long division needed. (Long division confirms it: x³ − 4x² + 6x − 1 = (x − 2)(x² − 2x + 2) + 3 ✓.)',
        tip:'To divide by x − c, substitute x = c and read the number. Watch the sign: the divisor x − 2 means c = +2, and x + 2 would mean c = −2.',
        desmos:'Graph y=x^3-4x^2+6x-1 and the horizontal line y=3, then look at x=2: the curve passes exactly through that height.',
        desmosLatex:['y=x^3-4x^2+6x-1','y=3','x=2']
      },
      {
        id:'AMR-05', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Equivalent expressions: simplifying a rational expression',
        stem:'For x ≠ −4, which of the following is equivalent to (x² + 9x + 20)/(x + 4)?',
        choices:{A:'x² + 5', B:'x + 5', C:'x + 4', D:'x + 16'},
        correct:'B',
        expCorrect:'Factor the top first: two numbers that multiply to 20 and add to 9 are 4 and 5, so x² + 9x + 20 = (x + 4)(x + 5). Now the whole factor x + 4 appears on top and on the bottom, so it cancels and x + 5 is left. (Check with x = 1: (1 + 9 + 20)/(1 + 4) = 30/5 = 6, and 1 + 5 = 6 ✓.)',
        expWrong:{
          A:'Only the x\'s were crossed out, leaving x² on top. Cancelling works on whole FACTORS, never on one term of a sum — the x in x + 4 is glued to the 4.',
          C:'This is the denominator written again. The binomial that survives is the OTHER one, x + 5.',
          D:'The numbers were subtracted: 20 − 4 = 16. Cancelling is division of matching factors, not subtraction of constants.'
        },
        tip:'Factor the numerator and the denominator completely, then cancel only identical whole factors. If nothing factors, nothing cancels.',
        desmos:'Graph y=(x^2+9x+20)/(x+4) and y=x+5: the same line, except that the first has a hole at x=-4. Trace to x=-4 and the first is undefined.',
        desmosLatex:['y=\\frac{x^2+9x+20}{x+4}','y=x+5']
      },
      {
        id:'AMR-06', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: factoring a trinomial with a leading coefficient',
        stem:'Which of the following is equivalent to 6x² − 7x − 3?',
        choices:{A:'(3x + 1)(2x − 3)', B:'(3x − 1)(2x + 3)', C:'(6x + 1)(x − 3)', D:'(2x + 1)(3x − 3)'},
        correct:'A',
        expCorrect:'The 6x² can come from 3x · 2x, and the −3 from +1 · (−3). Test that arrangement: (3x + 1)(2x − 3) = 6x² − 9x + 2x − 3 = 6x² − 7x − 3 ✓. The middle term is the whole point — the outer product (−9x) and the inner product (+2x) have to land on −7x. (Check with x = 2: 24 − 14 − 3 = 7, and (7)(1) = 7 ✓.)',
        expWrong:{
          B:'The two signs were swapped, which flips the middle term: (3x − 1)(2x + 3) = 6x² + 7x − 3. The x-term comes out +7x instead of −7x.',
          C:'The 6 was split as 6 · 1 instead of 3 · 2: (6x + 1)(x − 3) = 6x² − 17x − 3. The first and last terms are right and the middle one is not, which is the usual sign that the split is wrong.',
          D:'(2x + 1)(3x − 3) = 6x² − 3x − 3. Notice the second binomial has a common factor of 3, so this could be written 3(2x + 1)(x − 1) — and the original has no common factor at all.'
        },
        tip:'With a leading coefficient, list the ways to split it and the ways to split the constant, then check the MIDDLE term for each pairing. First and last terms matching is not enough.',
        desmos:'Graph y=6x^2-7x-3 and y=(3x+1)(2x-3): one parabola. Add y=(3x-1)(2x+3) and the two curves cross the x-axis at different places.',
        desmosLatex:['y=6x^2-7x-3','y=(3x+1)(2x-3)']
      },
      {
        id:'AMR-07', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: the power and quotient exponent rules',
        stem:'If a and b are positive, which of the following is equivalent to (2a³b)⁴ / (8a⁵b²)?',
        choices:{A:'(a⁷b²)/4', B:'2a⁷b⁶', C:'2a⁷b²', D:'16a⁷b²'},
        correct:'C',
        expCorrect:'Raise the top first, giving the exponent to EVERY factor inside: (2a³b)⁴ = 2⁴ · a¹² · b⁴ = 16a¹²b⁴. Now divide, subtracting exponents on matching bases: 16 ÷ 8 = 2, a¹² ÷ a⁵ = a⁷, b⁴ ÷ b² = b². Result: 2a⁷b². (Check with a = 1, b = 2: the original is (2 · 1 · 2)⁴/(8 · 1 · 4) = 256/32 = 8, and 2 · 1 · 4 = 8 ✓.)',
        expWrong:{
          A:'The exponent 4 was applied to the variables but not to the 2, leaving 2 ÷ 8 = 1/4. Parentheses hand the exponent to the coefficient too: 2⁴ = 16.',
          B:'The b exponents were added: 4 + 2 = 6. Division subtracts exponents, so b⁴ ÷ b² = b².',
          D:'The coefficient was never divided. 16 ÷ 8 = 2, the same way the variables were reduced.'
        },
        tip:'(xy)ⁿ gives the exponent to every factor inside, including the number. Then dividing the same base subtracts exponents: xᵃ ÷ xᵇ = xᵃ⁻ᵇ.',
        desmos:'Set b=1 and graph y=(2x^3)^4/(8x^5) next to y=2x^7: the curves coincide for x greater than 0. Try y=16x^7 and it runs eight times higher.',
        desmosLatex:['y=\\frac{(2x^3)^4}{8x^5}','y=2x^7']
      },
      {
        id:'AMR-08', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: multiplying two binomials',
        stem:'The expression (4x + 9)(2x − 5) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of b?',
        answer:'-2',
        expCorrect:'Multiply every term by every term: 4x · 2x = 8x², 4x · (−5) = −20x, 9 · 2x = 18x, 9 · (−5) = −45. The two middle products are the ones that build b: −20x + 18x = −2x. So the expression is 8x² − 2x − 45 and b = −2. (Check with x = 1: (13)(−3) = −39, and 8 − 2 − 45 = −39 ✓.)',
        tip:'When a question names a, b, and c, only one of the three products usually matters. For the x-coefficient, add the outer and inner products and stop — there is no need to build the whole expression.',
        desmos:'Graph y=(4x+9)(2x-5) and y=8x^2-2x-45: a single parabola. Change the -2 to +2 and the curve shifts off it.',
        desmosLatex:['y=(4x+9)(2x-5)','y=8x^2-2x-45']
      },
      {
        id:'AMR-09', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: radicals and rational exponents',
        stem:'For x greater than 0, which of the following is equivalent to (∛x⁵)(√x)?',
        choices:{A:'x^(5/6)', B:'x^(13/6)', C:'x^(11/10)', D:'x^(6/5)'},
        correct:'B',
        expCorrect:'Rewrite each root as a fractional exponent: the index goes on the bottom and the power on top, so ∛x⁵ = x^(5/3) and √x = x^(1/2). Multiplying the same base adds the exponents: 5/3 + 1/2 = 10/6 + 3/6 = 13/6. Result: x^(13/6). (Check with x = 64: ∛(64⁵) = 4⁵ = 1024 and √64 = 8, so the product is 8192; and 64^(13/6) = 2^13 = 8192 ✓.)',
        expWrong:{
          A:'The exponents were multiplied: (5/3)(1/2) = 5/6. Multiplication of the same base adds exponents; you would multiply them only for a power of a power.',
          C:'∛x⁵ was read as x^(3/5), flipping index and power. The index is the DENOMINATOR: ∛x⁵ = x^(5/3), which is bigger than x, not smaller.',
          D:'The numerators and the denominators were added separately: (5 + 1)/(3 + 2) = 6/5. Fractions need a common denominator before they can be added.'
        },
        tip:'ⁿ√(xᵐ) = x^(m/n): power on top, index on the bottom. Once everything is a fractional exponent, the ordinary rules take over.',
        desmos:'Graph y=x^{5/3}\\cdot\\sqrt{x} and y=x^{13/6} for x greater than 0: one curve. Add y=x^{5/6} and it stays far below.',
        desmosLatex:['y=x^{5/3}\\cdot\\sqrt{x}','y=x^{13/6}']
      },
      {
        id:'AMR-10', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: factoring by grouping',
        stem:'Which of the following is equivalent to x³ + 3x² − 4x − 12?',
        choices:{A:'(x + 3)(x² + 4)', B:'(x − 3)(x − 2)(x + 2)', C:'(x + 3)(x − 2)²', D:'(x + 3)(x − 2)(x + 2)'},
        correct:'D',
        expCorrect:'Group the four terms in pairs: (x³ + 3x²) + (−4x − 12). Pull x² out of the first pair and −4 out of the second: x²(x + 3) − 4(x + 3). The same binomial x + 3 now appears twice, so it comes out front: (x + 3)(x² − 4). And x² − 4 is a difference of squares: (x − 2)(x + 2). Result: (x + 3)(x − 2)(x + 2). (Check with x = 1: 1 + 3 − 4 − 12 = −12, and (4)(−1)(3) = −12 ✓.)',
        expWrong:{
          A:'The second pair was handled as +4(x + 3), so the leftover came out x² + 4 instead of x² − 4. Pulling out a positive 4 from −4x − 12 would give 4(−x − 3), not 4(x + 3) — the sign has to come out with it. And a sum of two squares does not split further.',
          B:'The sign of the grouped binomial got flipped: the pairs give x + 3, not x − 3. Substituting x = 1 into this gives 6, not −12.',
          C:'x² − 4 was treated as a perfect square. A perfect square would be x² − 4x + 4; with no middle term it is a difference of squares, so the two factors carry OPPOSITE signs.'
        },
        tip:'Four terms with no common factor: split into two pairs, factor each pair, and make sure the leftover binomials come out IDENTICAL. If they differ by a sign, pull out a negative from the second pair.',
        desmos:'Graph y=x^3+3x^2-4x-12 and y=(x+3)(x-2)(x+2): one curve crossing at x=-3, -2 and 2. Add y=(x+3)(x^2+4) and it only crosses once.',
        desmosLatex:['y=x^3+3x^2-4x-12','y=(x+3)(x-2)(x+2)']
      },
      {
        id:'AMR-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Equivalent expressions: polynomial division with a remainder',
        stem:'For x ≠ 2, the expression (3x² − 5x + 4)/(x − 2) is equivalent to 3x + 1 + k/(x − 2), where k is a constant. What is the value of k?',
        choices:{A:'6', B:'26', C:'4', D:'2'},
        correct:'A',
        expCorrect:'The k in that form IS the remainder of the division, and the remainder theorem gives it in one step: the divisor x − 2 is zero at x = 2, so k = p(2) where p(x) = 3x² − 5x + 4. That is 3(4) − 5(2) + 4 = 12 − 10 + 4 = 6. (Long division agrees: 3x² − 5x + 4 = (x − 2)(3x + 1) + 6, and multiplying out gives 3x² + x − 6x − 2 + 6 = 3x² − 5x + 4 ✓.)',
        expWrong:{
          B:'26 is p(−2). The remainder theorem substitutes the value that makes the DIVISOR zero, and x − 2 = 0 at x = +2, not −2.',
          C:'4 is p(0), the constant term — that is the remainder when dividing by x, not by x − 2.',
          D:'2 is the number you substitute, not the number that comes out. Once x = 2 goes in, the whole polynomial has to be evaluated.'
        },
        tip:'Any division can be written quotient + remainder/divisor. To get the remainder alone, evaluate the numerator at the value that zeroes the divisor — no long division required.',
        desmos:'Graph y=(3x^2-5x+4)/(x-2) and y=3x+1+6/(x-2): the two coincide everywhere. Change the 6 to a 4 and a visible gap opens near x=2.',
        desmosLatex:['y=\\frac{3x^2-5x+4}{x-2}','y=3x+1+\\frac{6}{x-2}']
      },

      /* ---------- 2) Nonlinear equations and systems (AMR-12 a AMR-22) ---------- */
      {
        id:'AMR-12', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Quadratic equations: solving by taking square roots',
        stem:'If (x − 3)² = 49, what is the greatest possible value of x?',
        choices:{A:'7', B:'52', C:'−4', D:'10'},
        correct:'D',
        expCorrect:'Undo the square first, and keep BOTH signs: x − 3 = 7 or x − 3 = −7. Then undo the subtraction: x = 10 or x = −4. The greatest of the two is 10. (Check: (10 − 3)² = 7² = 49 ✓, and (−4 − 3)² = (−7)² = 49 ✓.)',
        expWrong:{
          A:'7 is the value of x − 3, not of x. One step is missing: add the 3 back.',
          B:'52 comes from 49 + 3, adding before taking the square root. The square has to be undone first.',
          C:'−4 is the other value of x — the LEAST one. The question asks for the greatest.'
        },
        tip:'Taking a square root of both sides produces two cases, + and −. Write both, finish both, and only then read which one the question wants.',
        desmos:'Graph y=(x-3)^2 and y=49: they cross at x=-4 and x=10, the two values, and the right-hand crossing is the greatest.',
        desmosLatex:['y=(x-3)^2','y=49']
      },
      {
        id:'AMR-13', type:'spr', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Quadratic equations: reading both solutions',
        stem:'The solutions to x² − 11x + 24 = 0 are p and q, where p is greater than q. What is the value of p − q?',
        answer:'5',
        expCorrect:'Find two numbers that multiply to 24 and add to −11: −3 and −8. So x² − 11x + 24 = (x − 3)(x − 8) = 0, which gives x = 3 and x = 8. Then p = 8, q = 3, and p − q = 8 − 3 = 5. (Check: 8² − 11(8) + 24 = 64 − 88 + 24 = 0 ✓ and 3² − 11(3) + 24 = 9 − 33 + 24 = 0 ✓.)',
        tip:'For x² + bx + c, look for a number pair whose product is c and whose sum is b. Both negative when c is positive and b is negative.',
        desmos:'Graph y=x^2-11x+24: it crosses the x-axis at 3 and 8, and the gap between the crossings is the answer.',
        desmosLatex:['y=x^2-11x+24']
      },
      {
        id:'AMR-14', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Nonlinear systems: solving by substitution',
        stem:'In the system y = x² − 2 and y = x, which of the following ordered pairs (x, y) is a solution?',
        choices:{A:'(2, 2)', B:'(2, −1)', C:'(−2, 2)', D:'(1, 1)'},
        correct:'A',
        expCorrect:'Both equations already give y, so set them equal: x² − 2 = x. Move everything to one side: x² − x − 2 = 0, which is (x − 2)(x + 1) = 0, so x = 2 or x = −1. Then use the easy equation y = x to get the partners: (2, 2) and (−1, −1). Only (2, 2) is listed. (Check: 2 = 2² − 2 = 2 ✓ and 2 = 2 ✓.)',
        expWrong:{
          B:'The two x-values were paired with each other. Each x has its OWN y, found by putting that x back into an equation; x = 2 goes with y = 2.',
          C:'The sign of x was flipped. Test it: y = x says y should be −2, and the pair claims 2.',
          D:'This satisfies y = x but not the other equation: 1² − 2 = −1, not 1. A solution has to work in BOTH equations.'
        },
        tip:'When both equations are solved for y, set the right sides equal, solve for x, and then feed each x back to get its own y. Finish by testing the pair in both equations.',
        desmos:'Graph y=x^2-2 and y=x: they cross at (-1,-1) and (2,2). Those two crossings are the two solutions.',
        desmosLatex:['y=x^2-2','y=x']
      },
      {
        id:'AMR-15', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Quadratic equations: how many real solutions',
        stem:'How many distinct real solutions does the equation x² + 6x + 9 = 0 have?',
        choices:{A:'Exactly two', B:'Exactly one', C:'None', D:'Infinitely many'},
        correct:'B',
        expCorrect:'Compute b² − 4ac with a = 1, b = 6, c = 9: 36 − 4(1)(9) = 36 − 36 = 0. A value of zero means the two roots have collapsed into one. You can see it directly: x² + 6x + 9 = (x + 3)², so the only solution is x = −3. (Check: (−3)² + 6(−3) + 9 = 9 − 18 + 9 = 0 ✓.)',
        expWrong:{
          A:'Two is what you get whenever b² − 4ac is POSITIVE. Here it is exactly 0, the borderline case, and the graph touches the x-axis at a single point instead of crossing it twice.',
          C:'No real solutions happens when b² − 4ac is negative. Here it is 0, not negative, so one solution does exist.',
          D:'Infinitely many would require the equation to be true for every x, which only an identity like 0 = 0 does. A genuine quadratic has at most two solutions.'
        },
        tip:'Read b² − 4ac: positive means two, zero means one, negative means none. It answers "how many" without solving anything.',
        desmos:'Graph y=x^2+6x+9: the parabola just touches the x-axis at x=-3 and never crosses it. Change the 9 to an 8 and it cuts through at two points.',
        desmosLatex:['y=x^2+6x+9']
      },
      {
        id:'AMR-16', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Quadratic equations: using the quadratic formula',
        stem:'What are the solutions to 3x² − 6x + 2 = 0?',
        choices:{A:'(−3 ± √3)/3', B:'(3 ± √15)/3', C:'(3 ± √3)/3', D:'(3 ± √12)/3'},
        correct:'C',
        expCorrect:'With a = 3, b = −6, c = 2: x = (6 ± √(36 − 24))/6 = (6 ± √12)/6. Since √12 = 2√3, this is (6 ± 2√3)/6, and dividing every term by 2 gives (3 ± √3)/3. (Check numerically: (3 + 1.732)/3 ≈ 1.577, and 3(1.577²) − 6(1.577) + 2 ≈ 0 ✓.)',
        expWrong:{
          A:'The formula starts with −b, and b is already negative: −(−6) = +6. Using −6 flips the sign of the first term.',
          B:'This used 36 + 24 = 60 under the root. The formula subtracts: b² − 4ac = 36 − 24 = 12.',
          D:'The 6 outside was reduced to 3 but the √12 was left alone. Dividing a numerator by 2 means dividing EVERY term: √12 ÷ 2 = 2√3 ÷ 2 = √3.'
        },
        tip:'x = (−b ± √(b² − 4ac))/(2a). Substitute b with its sign attached, and when you reduce the fraction at the end, divide all three parts — the number, the root, and the denominator.',
        desmos:'Graph y=3x^2-6x+2 and read the two x-intercepts near 0.42 and 1.58. Then graph x=(3+\\sqrt{3})/3 and see it land on the right one.',
        desmosLatex:['y=3x^2-6x+2','x=\\frac{3+\\sqrt{3}}{3}']
      },
      {
        id:'AMR-17', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Square root equations: checking for extraneous solutions',
        stem:'What is the solution to √(2x + 15) = x?',
        choices:{A:'−3', B:'both 5 and −3', C:'No solution', D:'5'},
        correct:'D',
        expCorrect:'Square both sides: 2x + 15 = x², so x² − 2x − 15 = 0, which is (x − 5)(x + 3) = 0 and gives x = 5 or x = −3. Now check both in the ORIGINAL equation. x = 5: √25 = 5 ✓. x = −3: √9 = 3, but the right side is −3, and 3 ≠ −3, so −3 is extraneous. Only x = 5 survives.',
        expWrong:{
          A:'−3 is the extraneous one. It satisfies the squared equation but not the original: a square root sign returns the non-negative value, so it can never equal a negative number.',
          B:'Both came out of the squared equation, but squaring can invent solutions. Every candidate has to be tested in the equation you started with.',
          C:'Squaring both sides is a legal move; it just has to be followed by a check. Here x = 5 passes that check.'
        },
        tip:'Squaring both sides can create solutions that were never there. Always substitute each candidate back into the ORIGINAL equation, and remember that √(something) is never negative.',
        desmos:'Graph y=\\sqrt{2x+15} and y=x: they meet only at x=5. At x=-3 the line is below the curve, which is exactly why that value fails.',
        desmosLatex:['y=\\sqrt{2x+15}','y=x']
      },
      {
        id:'AMR-18', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Quadratic equations: a parameter that makes the two solutions equal',
        stem:'In the equation x² + kx + 36 = 0, k is a positive constant and the equation has exactly one real solution. What is the value of k?',
        answer:'12',
        expCorrect:'Exactly one real solution means b² − 4ac = 0. With a = 1, b = k, c = 36: k² − 4(1)(36) = 0, so k² = 144 and k = ±12. The problem says k is positive, so k = 12. (Check: x² + 12x + 36 = (x + 6)², whose only solution is x = −6 ✓.)',
        tip:'"Exactly one solution" is always the signal to set the discriminant to zero. When that gives two values of k, the extra condition in the problem — positive, negative, integer — picks one.',
        desmos:'Graph y=x^2+kx+36 with a slider for k and drag it: at k=12 the parabola just touches the x-axis, and above or below it either misses or cuts twice.',
        desmosLatex:['y=x^2+kx+36','k=12']
      },
      {
        id:'AMR-19', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Nonlinear systems: where two graphs meet',
        stem:'The graphs of y = x² + 4x + 7 and y = 2x + 6 intersect at exactly one point in the xy-plane. What is the x-coordinate of that point?',
        choices:{A:'1', B:'−1', C:'−2', D:'4'},
        correct:'B',
        expCorrect:'Set the two right sides equal: x² + 4x + 7 = 2x + 6. Bring everything to one side: x² + 2x + 1 = 0, which is (x + 1)² = 0. The repeated factor is exactly why there is a single meeting point, and it gives x = −1. (Check: (−1)² + 4(−1) + 7 = 4, and 2(−1) + 6 = 4 — both curves are at height 4 ✓.)',
        expWrong:{
          A:'Sign slip at the end: (x + 1)² = 0 gives x + 1 = 0, so x = −1. The value inside the parentheses gets the opposite sign.',
          C:'−2 is where the parabola turns, its axis of symmetry from −4/(2 · 1). That is a feature of one curve alone, not of the meeting point.',
          D:'4 is the y-coordinate of the point. The question asks for the x-coordinate.'
        },
        tip:'Two curves meet where their outputs agree: set the expressions equal and solve. A perfect square left over means exactly one meeting point.',
        desmos:'Graph y=x^2+4x+7 and y=2x+6: the line brushes the parabola at a single point. Zoom in near x=-1 to see they touch without crossing.',
        desmosLatex:['y=x^2+4x+7','y=2x+6']
      },
      {
        id:'AMR-20', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Rational equations: solving a proportion',
        stem:'What is the solution to 5/(x − 2) = 3/(x + 4)?',
        choices:{A:'−13', B:'−11', C:'−5', D:'11'},
        correct:'A',
        expCorrect:'Cross-multiply: 5(x + 4) = 3(x − 2). Distribute both sides fully: 5x + 20 = 3x − 6. Subtract 3x: 2x + 20 = −6. Subtract 20: 2x = −26, so x = −13. It is allowed, since it makes neither denominator zero. (Check: 5/(−15) = −1/3 and 3/(−9) = −1/3 ✓.)',
        expWrong:{
          B:'The 3 never reached the −2, giving 5x + 20 = 3x − 2 and x = −11. Distributing means multiplying both terms inside the parentheses.',
          C:'The 5 never reached the +4, giving 5x + 4 = 3x − 6 and x = −5. Same slip on the other side.',
          D:'The cross-multiplication was paired wrongly, as 5(x − 2) = 3(x + 4). Each numerator multiplies the OTHER fraction\'s denominator.'
        },
        tip:'For one fraction equal to one fraction, cross-multiply, distribute both sides completely, and then confirm the answer does not make any denominator zero.',
        desmos:'Graph y=5/(x-2) and y=3/(x+4): the curves cross once, far to the left near x=-13.',
        desmosLatex:['y=\\frac{5}{x-2}','y=\\frac{3}{x+4}']
      },
      {
        id:'AMR-21', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Quadratic equations: the sum of the two solutions',
        stem:'The solutions to 2x² − 14x + 20 = 0 are r and s. What is the value of r + s?',
        choices:{A:'14', B:'10', C:'7', D:'−7'},
        correct:'C',
        expCorrect:'Divide everything by 2 first: x² − 7x + 10 = 0, which is (x − 2)(x − 5) = 0, so the solutions are 2 and 5 and their sum is 7. The shortcut gives the same thing: the sum of the solutions is −b/a = −(−14)/2 = 7. (Check: 2(2²) − 14(2) + 20 = 8 − 28 + 20 = 0 ✓ and 2(25) − 70 + 20 = 0 ✓.)',
        expWrong:{
          A:'14 is −b without dividing by a. The sum is −b/a, and a = 2 here, so 14 ÷ 2 = 7.',
          B:'10 is the PRODUCT of the two solutions, c/a = 20/2. The question asks for the sum.',
          D:'The minus sign in −b/a was applied to an already negative b. Since b = −14, −b = +14 and the sum comes out positive.'
        },
        tip:'For ax² + bx + c = 0 the two solutions add to −b/a and multiply to c/a. Dividing the whole equation by a first makes both easy to read.',
        desmos:'Graph y=2x^2-14x+20: the x-intercepts are 2 and 5. Their midpoint, x=3.5, is the axis of symmetry — twice that is the sum.',
        desmosLatex:['y=2x^2-14x+20']
      },
      {
        id:'AMR-22', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Nonlinear systems: a parameter that gives exactly one solution',
        stem:'The system of equations y = x² − 6x + 13 and y = c, where c is a constant, has exactly one real solution. What is the value of c?',
        answer:'4',
        expCorrect:'Substituting gives x² − 6x + 13 = c, or x² − 6x + (13 − c) = 0. Exactly one solution means the discriminant is zero: 36 − 4(13 − c) = 0, so 36 − 52 + 4c = 0, 4c = 16, and c = 4. (Check: with c = 4 the equation becomes x² − 6x + 9 = 0 = (x − 3)², whose only solution is x = 3 ✓. Geometrically, y = 4 is the one horizontal line that touches the parabola at its lowest point.)',
        tip:'A horizontal line meets a parabola once only at the turning point, so "exactly one solution" and "discriminant equals zero" are the same condition written two ways.',
        desmos:'Graph y=x^2-6x+13 and y=c with a slider. Drag c: above 4 the line cuts twice, below 4 it misses, and at exactly 4 it touches once.',
        desmosLatex:['y=x^2-6x+13','y=4']
      },

      /* ---------- 3) Nonlinear functions (AMR-23 a AMR-34) ---------- */
      {
        id:'AMR-23', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Nonlinear functions: evaluating a function at a value',
        stem:'The function f is defined by f(x) = 3x² − 5. What is the value of f(−4)?',
        choices:{A:'−53', B:'43', C:'139', D:'−17'},
        correct:'B',
        expCorrect:'Substitute −4 wherever x appears, and square before multiplying: (−4)² = 16, then 3 · 16 = 48, then 48 − 5 = 43. The negative disappears in the squaring step, which is why the answer is positive.',
        expWrong:{
          A:'(−4)² was treated as −16, giving 3(−16) − 5 = −53. A negative number squared is positive; the minus sign is inside the parentheses and gets squared too.',
          C:'The 3 was squared along with the x: (3 · −4)² − 5 = 144 − 5 = 139. In 3x² the exponent belongs only to x; the 3 waits and multiplies afterward.',
          D:'The squaring was skipped: 3(−4) − 5 = −17. Exponents come before multiplication.'
        },
        tip:'Substitute in parentheses — f(−4) means 3(−4)² − 5 — and follow the order of operations: exponent first, then multiply, then add or subtract.',
        desmos:'Graph y=3x^2-5 and trace to x=-4: the curve is at 43. Add the point (-4,43) and it lands exactly on the parabola.',
        desmosLatex:['y=3x^2-5','(-4,43)']
      },
      {
        id:'AMR-24', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Nonlinear functions: reading the vertex from vertex form',
        stem:'The graph of g(x) = (x − 6)² + 5 in the xy-plane is a parabola. What is the vertex of this parabola?',
        choices:{A:'(−6, 5)', B:'(6, −5)', C:'(6, 5)', D:'(5, 6)'},
        correct:'C',
        expCorrect:'In the form a(x − h)² + k the vertex is (h, k). Here the expression is (x − 6)² + 5, so h = 6 and k = 5: the vertex is (6, 5). Another way to see it: a square is never negative, so the smallest value of (x − 6)² is 0, and that happens when x = 6, leaving g(6) = 5.',
        expWrong:{
          A:'The sign inside was copied instead of reversed. The form subtracts h, so (x − 6)² means h = +6; you would need (x + 6)² to get −6.',
          B:'The sign of the constant OUTSIDE was flipped as well. Only the number inside the parentheses reverses; the +5 is already the y-coordinate.',
          D:'The coordinates were swapped. The x-coordinate comes from inside the parentheses, the y-coordinate from the number added at the end.'
        },
        tip:'a(x − h)² + k has vertex (h, k): reverse the sign of the number inside, copy the number outside as it is.',
        desmos:'Graph y=(x-6)^2+5 and add the point (6,5): it sits exactly at the bottom of the curve.',
        desmosLatex:['y=(x-6)^2+5','(6,5)']
      },
      {
        id:'AMR-25', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Exponential functions: reading the rate from the model',
        stem:'A colony of bacteria is modeled by P(t) = 240(1.15)ᵗ, where t is the number of hours since the colony was measured. By what percent does the colony grow each hour?',
        choices:{A:'1.15%', B:'115%', C:'240%', D:'15%'},
        correct:'D',
        expCorrect:'In P = P₀(1 + r)ᵗ the base is 1 + r. Here 1.15 = 1 + 0.15, so r = 0.15, which is 15% per hour. Confirm with the model: P(0) = 240 and P(1) = 240(1.15) = 276, and (276 − 240)/240 = 36/240 = 0.15 ✓.',
        expWrong:{
          A:'The base was read as a percent directly. 1.15 is the MULTIPLIER; the percent increase is the part above 1.',
          B:'115% is the multiplier expressed as a percent — that is how big the colony becomes, not how much it gained. Growing by 115% would nearly double it plus another 15%.',
          C:'240 is the starting population, not a rate. It is the number the base gets applied to.'
        },
        tip:'For P₀(1 + r)ᵗ, subtract 1 from the base and read the leftover as a percent: 1.15 → 15% up, 0.92 → 8% down.',
        desmos:'Graph y=240(1.15)^x and read y at x=0 and x=1: 240 and 276. The jump of 36 is 15% of 240.',
        desmosLatex:['y=240(1.15)^x','(0,240)','(1,276)']
      },
      {
        id:'AMR-26', type:'spr', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Nonlinear functions: the minimum value of a parabola',
        stem:'The function h is defined by h(x) = (x + 2)² − 9. What is the minimum value of h(x)?',
        answer:'-9',
        expCorrect:'A square can never be negative, so the smallest that (x + 2)² can be is 0, and that happens at x = −2. At that input h(−2) = 0 − 9 = −9, and every other input adds something positive to −9. The minimum value is −9. (Check a nearby input: h(0) = 4 − 9 = −5, which is indeed larger.)',
        tip:'In a(x − h)² + k with a positive, k IS the minimum value. The question asks for the value of the function, not the x that produces it.',
        desmos:'Graph y=(x+2)^2-9: the lowest point of the curve sits at (-2,-9), and the whole parabola stays above y=-9.',
        desmosLatex:['y=(x+2)^2-9','y=-9']
      },
      {
        id:'AMR-27', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Exponential functions: writing a decay model',
        stem:'A savings balance of $800 decreases by 4% each year. Which of the following functions models the balance B, in dollars, after y years?',
        choices:{A:'B(y) = 800(0.96)ʸ', B:'B(y) = 800(1.04)ʸ', C:'B(y) = 800(0.04)ʸ', D:'B(y) = 800 − 0.04y'},
        correct:'A',
        expCorrect:'Losing 4% means keeping 96%, so each year the balance is multiplied by 0.96. Starting from 800 and repeating that y times gives B(y) = 800(0.96)ʸ. (Check one year: 800 · 0.96 = 768, and 800 − 4% of 800 = 800 − 32 = 768 ✓.)',
        expWrong:{
          B:'1.04 GROWS the balance by 4% a year. A decrease needs a base below 1.',
          C:'A base of 0.04 keeps only 4% of the balance each year — that is a 96% loss, the reverse of what is described.',
          D:'This subtracts 0.04 dollars per year, a straight line. A percent change applies to whatever is left, so it is repeated multiplication, not repeated subtraction.'
        },
        tip:'Percent change per period always becomes a base: up r% → (1 + r), down r% → (1 − r). Only a fixed AMOUNT per period gives a linear model.',
        desmos:'Graph y=800(0.96)^x and y=800-0.04x: the curve bends and falls quickly while the line stays almost flat, so they are nothing alike.',
        desmosLatex:['y=800(0.96)^x','y=800-0.04x']
      },
      {
        id:'AMR-28', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Nonlinear functions: finding the vertex from standard form',
        stem:'The function f is defined by f(x) = x² − 8x + 11. What is the y-coordinate of the vertex of the graph of f?',
        choices:{A:'4', B:'−5', C:'11', D:'5'},
        correct:'B',
        expCorrect:'The vertex sits on the axis of symmetry, x = −b/(2a) = −(−8)/2 = 4. Now evaluate there: f(4) = 16 − 32 + 11 = −5. So the vertex is (4, −5) and its y-coordinate is −5. (Completing the square agrees: x² − 8x + 11 = (x − 4)² − 5 ✓.)',
        expWrong:{
          A:'4 is the x-coordinate of the vertex, the halfway point between the x-intercepts. The question asks for the y-coordinate, which takes one more step.',
          C:'11 is f(0), where the graph crosses the y-axis. That is a different point from the vertex.',
          D:'Sign slip in the arithmetic: 16 − 32 + 11 = −5, not +5. The −32 is bigger than 16 + 11.'
        },
        tip:'From standard form: x = −b/(2a) first, then substitute that x back into the function to get the y-coordinate. Two steps, always in that order.',
        desmos:'Graph y=x^2-8x+11 and add the point (4,-5): it lands at the bottom of the curve. The line y=11 crosses at x=0, a different place.',
        desmosLatex:['y=x^2-8x+11','(4,-5)']
      },
      {
        id:'AMR-29', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Nonlinear functions: the x-intercepts of a parabola',
        stem:'The graph of y = (x − 7)(x + 2) in the xy-plane has two x-intercepts. What is the distance between them?',
        choices:{A:'5', B:'14', C:'9', D:'2.5'},
        correct:'C',
        expCorrect:'A product is zero when a piece is zero, so the x-intercepts are at x = 7 and x = −2. Distance on a number line is the difference: 7 − (−2) = 7 + 2 = 9. (Check: both values give y = 0, and the points are (7, 0) and (−2, 0), nine units apart ✓.)',
        expWrong:{
          A:'The −2 was subtracted instead of the point being subtracted: 7 − 2 = 5. Subtracting a NEGATIVE adds, so the gap is 7 + 2.',
          B:'14 is the y-intercept in disguise — y(0) = (−7)(2) = −14 — or the product of the two numbers. Neither is a distance along the x-axis.',
          D:'2.5 is the midpoint of the two intercepts, (7 + (−2))/2, which is the axis of symmetry. The distance is the full gap, not the halfway mark.'
        },
        tip:'Factored form hands you the x-intercepts: each factor set to zero. The distance between two points on a horizontal line is the difference of the x-values, with the signs respected.',
        desmos:'Graph y=(x-7)(x+2): it crosses at -2 and 7. Add x=-2 and x=7 as vertical lines to see the width between them.',
        desmosLatex:['y=(x-7)(x+2)','x=-2','x=7']
      },
      {
        id:'AMR-30', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponential functions: using the model to find a later value',
        stem:'The value of a machine is modeled by V(t) = 18000(0.5)^(t/6), where t is the number of years since it was bought. What is the value of the machine, in dollars, 18 years after it was bought?',
        answer:'2250',
        expCorrect:'Substitute t = 18: the exponent becomes 18/6 = 3, so V(18) = 18000(0.5)³ = 18000 · 0.125 = 2250. The t/6 is the giveaway that the value halves every 6 years: 18000 → 9000 at 6 years → 4500 at 12 → 2250 at 18 ✓.',
        tip:'An exponent of t/k means one full step every k units of time. Divide first to count how many steps happened, then apply the base that many times.',
        desmos:'Graph y=18000(0.5)^{x/6} and trace to x=18. Add y=2250 and the curve meets the line right there.',
        desmosLatex:['y=18000(0.5)^{x/6}','y=2250']
      },
      {
        id:'AMR-31', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Nonlinear functions: a vertical translation of a graph',
        stem:'The graph of y = f(x) is shifted down 4 units to produce the graph of y = g(x). If f(x) = x² + 3x, which of the following defines g(x)?',
        choices:{A:'g(x) = x² + 3x − 4', B:'g(x) = x² + 3x + 4', C:'g(x) = (x − 4)² + 3(x − 4)', D:'g(x) = (x + 4)² + 3(x + 4)'},
        correct:'A',
        expCorrect:'Moving a graph down 4 lowers every output by 4, so g(x) = f(x) − 4 = x² + 3x − 4. The change happens OUTSIDE the function, after the input has been processed. (Check one point: f(1) = 4, and the shifted graph should be at 4 − 4 = 0; and g(1) = 1 + 3 − 4 = 0 ✓.)',
        expWrong:{
          B:'Adding 4 moves the graph UP. Down means subtract.',
          C:'Replacing x with x − 4 changes the INPUT, which slides the graph 4 units to the RIGHT, not down.',
          D:'Replacing x with x + 4 slides the graph 4 units to the left. Horizontal moves come from changes inside the function; this shift is vertical.'
        },
        tip:'Outside the function moves it vertically and behaves as written (−4 goes down). Inside the function moves it horizontally and behaves backwards (x − 4 goes right).',
        desmos:'Graph y=x^2+3x and y=x^2+3x-4: the same curve, dropped four units. Add y=(x-4)^2+3(x-4) and it moves sideways instead.',
        desmosLatex:['y=x^2+3x','y=x^2+3x-4']
      },
      {
        id:'AMR-32', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponential functions: the horizontal asymptote',
        stem:'The function f is defined by f(x) = 5(2)ˣ + 3. As x decreases without bound, the graph of f approaches which horizontal line?',
        choices:{A:'y = 0', B:'y = 5', C:'y = 8', D:'y = 3'},
        correct:'D',
        expCorrect:'As x goes to very negative values, 2ˣ shrinks toward 0 — 2⁻¹⁰ is about 0.001 — so 5(2)ˣ also shrinks toward 0. What is left is the +3. The graph flattens out against the line y = 3 without ever reaching it. (Check: f(−10) = 5(0.000977) + 3 ≈ 3.005, already almost 3 ✓.)',
        expWrong:{
          A:'y = 0 is the asymptote of 5(2)ˣ by itself. The +3 lifts the entire graph, and the asymptote rises with it.',
          B:'5 is the coefficient in front of the power, which stretches the curve vertically. It does not set the level the graph flattens toward.',
          C:'8 is f(0) = 5 + 3, the y-intercept. That is a point the graph passes through, not the line it approaches.'
        },
        tip:'For a·bˣ + k with b greater than 1, the graph flattens toward y = k on the left. The constant added at the end IS the horizontal asymptote.',
        desmos:'Graph y=5(2)^x+3 and y=3, then zoom out to the left: the curve hugs the line without touching it.',
        desmosLatex:['y=5(2)^x+3','y=3']
      },
      {
        id:'AMR-33', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Nonlinear functions: the maximum value of a modeled parabola',
        stem:'A ball is thrown upward and its height above the ground, in feet, after t seconds is given by h(t) = −16t² + 48t + 5. What is the maximum height, in feet, that the ball reaches?',
        choices:{A:'1.5', B:'41', C:'5', D:'77'},
        correct:'B',
        expCorrect:'Because the leading coefficient is negative the parabola opens downward, so the vertex is the highest point. Its time is t = −b/(2a) = −48/(2 · −16) = 1.5 seconds. Then evaluate: h(1.5) = −16(2.25) + 48(1.5) + 5 = −36 + 72 + 5 = 41 feet. (Check the neighbours: h(1) = 37 and h(2) = 37, both below 41 ✓.)',
        expWrong:{
          A:'1.5 is WHEN the ball is highest, in seconds, not HOW high it is. It is the input, and the question asks for the output.',
          C:'5 is h(0), the height at the instant of release. The ball keeps rising from there.',
          D:'77 comes from 48(1.5) + 5, dropping the −16t² term. That term is what pulls the ball back down and it is worth −36 at t = 1.5.'
        },
        tip:'In a height model, t = −b/(2a) gives the TIME of the peak and h(−b/(2a)) gives the HEIGHT. Read which one the question wants before answering.',
        desmos:'Graph y=-16x^2+48x+5 and add the point (1.5,41): it sits at the top of the arc. The line y=41 touches the curve exactly once.',
        desmosLatex:['y=-16x^2+48x+5','(1.5,41)']
      },
      {
        id:'AMR-34', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponential functions: building the model from two values',
        stem:'The function f is exponential, f(0) = 12, and f(3) = 96. What is the value of f(5)?',
        choices:{A:'152', B:'192', C:'384', D:'768'},
        correct:'C',
        expCorrect:'An exponential function is f(x) = f(0) · rˣ, so f(x) = 12rˣ. Use the second value: 12r³ = 96, so r³ = 8 and r = 2 — the function doubles every step. Then f(5) = 12 · 2⁵ = 12 · 32 = 384. (Check the ladder: 12, 24, 48, 96 at x = 3 ✓, then 192 at x = 4 and 384 at x = 5 ✓.)',
        expWrong:{
          A:'152 treats the function as linear: a constant rise of (96 − 12)/3 = 28 per step gives 12 + 28(5) = 152. Exponential means a constant MULTIPLIER, not a constant difference.',
          B:'192 is f(4). Going from x = 3 to x = 5 is two steps, so the doubling has to be applied twice.',
          D:'768 multiplies 96 by 8, which is r³ — the jump for three steps. From x = 3 to x = 5 is only two steps, so the factor is r² = 4.'
        },
        tip:'With f(0) given, the coefficient is free: f(x) = f(0)·rˣ. Find r from the second point, then count how many steps separate it from the input you need.',
        desmos:'Graph y=12(2)^x and check the points (0,12), (3,96) and (5,384): all three land on the curve.',
        desmosLatex:['y=12(2)^x','(3,96)','(5,384)']
      }
    ]
  });
})();
