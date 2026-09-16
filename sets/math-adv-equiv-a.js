/* SAT Studio question set — Math: Advanced Math · Equivalent expressions (AEQ-01 a AEQ-34)
   Una rampa completa de la destreza oficial "Equivalent expressions": distribuir y agrupar,
   factor comun, trinomios con y sin coeficiente principal, diferencia de cuadrados y trinomio
   cuadrado perfecto, las seis reglas de exponentes, radicales y forma exponencial, racionalizar,
   expresiones racionales (simplificar, sumar, restar, multiplicar), fracciones complejas,
   teorema del residuo y del factor, division con residuo, grado y coeficiente principal, y
   valores excluidos.
   Cada distractor es un error con nombre. Las 24 equivalencias se comprobaron evaluando la
   expresion original Y las cuatro opciones en 5 valores de la variable con un script desechable:
   en las 24 solo la correcta coincidio en los 5. Las cuentas de cada "Check:" y de cada
   afirmacion numerica de los distractores se comprobaron en una segunda pasada. */
(function(){
  window.SAT_SETS.push({
    id: 'math-adv-equiv-a',
    title: 'Advanced Math — Equivalent Expressions A',
    section: 'math',
    level: 'Media',
    description: 'Thirty-four ways to rewrite the same thing: distributing, factoring, every exponent rule, radicals, rational expressions and the remainder theorem, from one-step warm-ups to brutal.',
    minutes: 42,
    questions: [
      {
        id:'AEQ-01', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Equivalent expressions: distributing and combining like terms',
        stem:'Which of the following expressions is equivalent to 4(3x − 7) + 9x?',
        choices:{A:'21x − 7', B:'12x − 19', C:'21x − 28', D:'21x + 28'},
        correct:'C',
        expCorrect:'Distribute the 4 across BOTH terms inside: 4(3x − 7) = 12x − 28. Then add the 9x to the other x-term: 12x + 9x = 21x, and the −28 has no partner, so it stays. The result is 21x − 28. (Check with x = 2: the original is 4(−1) + 18 = 14, and 21(2) − 28 = 14 ✓.)',
        expWrong:{
          A:'The 4 multiplied the 3x but never reached the −7. Distributing means every term inside the parentheses gets multiplied: 4 · 7 = 28, so the constant becomes −28.',
          B:'Here −28 and 9x were merged into −19. A constant and an x-term are not like terms; the 9x has to join the 12x instead.',
          D:'Sign slip: 4 · (−7) = −28, not +28. A positive factor never flips the sign of what is inside.'
        },
        tip:'Distribute to EVERY term inside the parentheses, keeping the sign attached to each one, and only then combine terms that share the same variable and the same exponent.',
        desmos:'Graph y=4(3x-7)+9x and y=21x-28: a single line appears. Add y=21x-7 and it sits above, parallel — same slope, wrong constant.',
        desmosLatex:['y=4(3x-7)+9x','y=21x-28']
      },
      {
        id:'AEQ-02', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Equivalent expressions: the zero exponent rule',
        stem:'If x ≠ 0, what is the value of 5x⁰ + (5x)⁰?',
        choices:{A:'2', B:'6', C:'10', D:'5x + 1'},
        correct:'B',
        expCorrect:'Any nonzero base raised to the 0 power equals 1, but read WHAT is being raised. In 5x⁰ the exponent belongs to x alone, so 5x⁰ = 5 · 1 = 5. In (5x)⁰ the parentheses hand the whole product to the exponent, so (5x)⁰ = 1. Total: 5 + 1 = 6. (Check with x = 3: 5 · 1 + 1 = 6 ✓.)',
        expWrong:{
          A:'This treats both terms as (5x)⁰ = 1. Without parentheses the exponent grabs only the x, so the first term keeps its coefficient 5.',
          C:'This treats (5x)⁰ as 5, as if the 0 exponent applied only to the x inside. The parentheses put the whole 5x under the exponent, and that gives 1.',
          D:'This reads x⁰ as x. A 0 exponent does not mean "leave it alone" — it means the factor collapses to 1.'
        },
        tip:'a⁰ = 1 for every a ≠ 0. The real battle is over what the exponent owns: without parentheses it takes only the letter beside it, with parentheses it takes everything inside.',
        desmos:'Graph y=5x^{0}+(5x)^{0}: a flat line at 6 for every x except 0. Then graph y=6 on top of it and nothing changes.',
        desmosLatex:['y=5x^{0}+(5x)^{0}','y=6']
      },
      {
        id:'AEQ-03', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Equivalent expressions: factoring out the greatest common factor',
        stem:'Which of the following is equivalent to 24y⁵ + 40y³?',
        choices:{A:'8y³(3y² + 5)', B:'8y³(3y² + 5y)', C:'8y⁵(3y² + 5)', D:'8y³(3y³ + 5)'},
        correct:'A',
        expCorrect:'Coefficients: the greatest common factor of 24 and 40 is 8. Variables: y⁵ and y³ share y³, the SMALLER power. So pull out 8y³ and divide each term by it: 24y⁵ ÷ 8y³ = 3y² and 40y³ ÷ 8y³ = 5. That gives 8y³(3y² + 5). (Check by distributing back: 8y³ · 3y² = 24y⁵ and 8y³ · 5 = 40y³ ✓.)',
        expWrong:{
          B:'40y³ ÷ 8y³ = 5, not 5y. Dividing powers subtracts exponents: y³ ÷ y³ = y⁰ = 1, so no y survives in that term.',
          C:'y⁵ is not shared — the second term carries only y³. Pulling out the LARGER power would force 40y³ to contain a y⁵, and it does not.',
          D:'The exponent was copied instead of reduced: y⁵ ÷ y³ = y², not y³. Division subtracts the exponents.'
        },
        tip:'Greatest common factor = the GCF of the coefficients times each variable at its SMALLEST exponent across the terms. Divide each term by it, then distribute back as a check.',
        desmos:'Rename the variable as x and graph y=24x^5+40x^3 next to y=8x^3(3x^2+5): the curves coincide. Swap in y=8x^5(3x^2+5) and it shoots away.',
        desmosLatex:['y=24x^5+40x^3','y=8x^3(3x^2+5)']
      },
      {
        id:'AEQ-04', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Equivalent expressions: difference of squares',
        stem:'Which of the following is equivalent to 9m² − 25?',
        choices:{A:'(3m − 5)(3m − 5)', B:'(9m + 5)(m − 5)', C:'(3m + 5)(3m + 5)', D:'(3m + 5)(3m − 5)'},
        correct:'D',
        expCorrect:'9m² is (3m)² and 25 is 5², so this is a difference of two squares. The pattern a² − b² = (a + b)(a − b) with a = 3m and b = 5 gives (3m + 5)(3m − 5). (Check by expanding: 9m² − 15m + 15m − 25 = 9m² − 25 — the middle terms cancel ✓.)',
        expWrong:{
          A:'(3m − 5)(3m − 5) = 9m² − 30m + 25: an unwanted −30m and a +25 at the end. The two factors need OPPOSITE signs, not the same one.',
          B:'This splits 25 as 5 · 5 but pairs it with 9m and m. Expanding gives 9m² − 40m − 25, which carries a middle term the original does not have.',
          C:'(3m + 5)² = 9m² + 30m + 25. Squaring a binomial always leaves a middle term; a difference of squares has none.'
        },
        tip:'a² − b² = (a + b)(a − b). Take the square root of each piece — here 3m and 5 — and write them twice with opposite signs. It works only for a DIFFERENCE.',
        desmos:'Graph y=9x^2-25 and y=(3x+5)(3x-5): one parabola. It meets the x-axis at 5/3 and −5/3, the numbers hiding inside the factors.',
        desmosLatex:['y=9x^2-25','y=(3x+5)(3x-5)']
      },
      {
        id:'AEQ-05', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Equivalent expressions: product of powers rule',
        stem:'For a > 0, which of the following is equivalent to (6a⁵)(4a³)?',
        choices:{A:'24a¹⁵', B:'24a⁸', C:'10a⁸', D:'24a²'},
        correct:'B',
        expCorrect:'Multiply the coefficients and ADD the exponents on the shared base: (6 · 4)(a⁵ · a³) = 24a⁵⁺³ = 24a⁸. (Check with a = 2: 6 · 32 = 192 and 4 · 8 = 32, so the original is 192 · 32 = 6,144, and 24 · 2⁸ = 24 · 256 = 6,144 ✓.)',
        expWrong:{
          A:'The exponents were multiplied (5 · 3 = 15). Multiplying exponents is what happens to a power raised to a power; two powers being multiplied ADD.',
          C:'The coefficients were added (6 + 4 = 10). The two factors are multiplied, so their coefficients multiply too: 6 · 4 = 24.',
          D:'The exponents were subtracted (5 − 3 = 2). Subtraction belongs to DIVISION of powers, and nothing here is being divided.'
        },
        tip:'Same base multiplied → add the exponents. Same base divided → subtract them. A power raised to a power → multiply them. The coefficients just follow the operation the expression itself shows.',
        desmos:'Graph y=(6x^5)(4x^3) and y=24x^8 for x greater than 0: identical curves. Add y=24x^{15} and it leaves the screen far sooner.',
        desmosLatex:['y=(6x^5)(4x^3)','y=24x^8']
      },
      {
        id:'AEQ-06', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Equivalent expressions: factoring a trinomial with leading coefficient 1',
        stem:'Which of the following is equivalent to x² + 11x + 24?',
        choices:{A:'(x + 3)(x + 8)', B:'(x + 4)(x + 6)', C:'(x + 2)(x + 12)', D:'(x − 3)(x − 8)'},
        correct:'A',
        expCorrect:'With a leading coefficient of 1, look for two numbers whose PRODUCT is 24 and whose SUM is 11. The pairs that multiply to 24 are 1·24, 2·12, 3·8 and 4·6; only 3 and 8 add to 11. So the factorization is (x + 3)(x + 8). (Check by expanding: x² + 8x + 3x + 24 = x² + 11x + 24 ✓.)',
        expWrong:{
          B:'4 · 6 = 24, but 4 + 6 = 10, so this expands to x² + 10x + 24. The pair has to satisfy BOTH conditions, not just the product.',
          C:'2 · 12 = 24, but 2 + 12 = 14: expanding gives x² + 14x + 24. Again the product is right and the sum is not.',
          D:'Two negatives multiply to +24 but add to −11, so this expands to x² − 11x + 24. With every sign in the original positive, both numbers must be positive.'
        },
        tip:'For x² + bx + c, hunt for two numbers with product c and sum b. Both conditions, every time — checking only the product is what makes a wrong pair look right.',
        desmos:'Graph y=x^2+11x+24 and y=(x+3)(x+8): one parabola crossing at −3 and −8. Try y=(x+4)(x+6) and the crossings move.',
        desmosLatex:['y=x^2+11x+24','y=(x+3)(x+8)']
      },
      {
        id:'AEQ-07', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Equivalent expressions: excluded values of a rational expression',
        stem:'For which value of x is the expression (x + 5)/(x − 7) undefined?',
        choices:{A:'−5', B:'5', C:'−7', D:'7'},
        correct:'D',
        expCorrect:'A fraction is undefined exactly when its DENOMINATOR is 0. Set x − 7 = 0, which happens at x = 7. There the expression asks for 12 ÷ 0, which has no value. (At x = −5 the numerator is 0 instead, and 0 ÷ (−12) = 0 — a perfectly good number.)',
        expWrong:{
          A:'−5 makes the NUMERATOR zero. That gives the value 0, not an undefined expression; only the bottom of a fraction can break it.',
          B:'5 leaves the denominator at 5 − 7 = −2, and the expression evaluates to 10 ÷ (−2) = −5. Nothing goes wrong there.',
          C:'−7 comes from flipping the sign of the 7. Solve x − 7 = 0 as written: adding 7 to both sides gives x = +7.'
        },
        tip:'Excluded values come from setting each DENOMINATOR equal to zero and solving. The numerator never excludes anything — it only makes the expression equal zero.',
        desmos:'Graph y=(x+5)/(x-7): the curve breaks at x=7 with a vertical asymptote, and it simply crosses the axis at x=−5.',
        desmosLatex:['y=(x+5)/(x-7)']
      },
      {
        id:'AEQ-08', type:'spr', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Equivalent expressions: degree and leading coefficient of a polynomial',
        stem:'The polynomial p is defined by p(x) = 4x³ − 9x⁵ + 2x − 6. What is the leading coefficient of p?',
        answer:'-9',
        expCorrect:'The leading coefficient belongs to the term of highest DEGREE, not to whatever happens to be written first. Put the terms in descending order: −9x⁵, 4x³, 2x, −6. The highest power is x⁵, so the leading term is −9x⁵ and the leading coefficient is −9 (the minus sign travels with the number). Answer: −9.',
        tip:'Rewrite a polynomial in descending order of exponents before naming its degree or its leading coefficient, and keep each sign attached to its own coefficient.',
        desmos:'Graph y=4x^3-9x^5+2x-6 and zoom out: both ends point DOWN, the signature of an odd degree with a negative leading coefficient.',
        desmosLatex:['y=4x^3-9x^5+2x-6']
      },
      {
        id:'AEQ-09', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: product of two binomials',
        stem:'Which of the following is equivalent to (2x − 5)(3x + 4)?',
        choices:{A:'6x² − 20', B:'6x² + 7x − 20', C:'6x² − 7x − 20', D:'6x² − 23x − 20'},
        correct:'C',
        expCorrect:'Multiply every term of the first binomial by every term of the second: 2x · 3x = 6x², 2x · 4 = 8x, −5 · 3x = −15x, −5 · 4 = −20. Combine the two middle terms: 8x − 15x = −7x. The result is 6x² − 7x − 20. (Check with x = 1: (−3)(7) = −21, and 6 − 7 − 20 = −21 ✓.)',
        expWrong:{
          A:'Only first-times-first and last-times-last were computed. The two cross products, 8x and −15x, belong in the answer; together they give −7x.',
          B:'The middle terms were combined as 15x − 8x = 7x. The −15x is the larger of the two in size, so the sum comes out negative: 8x − 15x = −7x.',
          D:'The cross products were added by size (8 + 15 = 23) instead of combined with their signs. One is positive and one is negative, so they partly cancel.'
        },
        tip:'Four products, always: first·first, first·last, last·first, last·last. Carry each sign into its product, then combine the two middle terms with those signs.',
        desmos:'Graph y=(2x-5)(3x+4) and y=6x^2-7x-20: one parabola. Add y=6x^2-23x-20 and the vertex jumps to the right.',
        desmosLatex:['y=(2x-5)(3x+4)','y=6x^2-7x-20']
      },
      {
        id:'AEQ-10', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: squaring a binomial (perfect square trinomial)',
        stem:'Which of the following is equivalent to (3x − 7)²?',
        choices:{A:'9x² − 42x + 49', B:'9x² + 49', C:'9x² − 21x + 49', D:'9x² − 42x − 49'},
        correct:'A',
        expCorrect:'(a − b)² = a² − 2ab + b² with a = 3x and b = 7: a² = 9x², 2ab = 2 · 3x · 7 = 42x (subtracted), and b² = 49. So (3x − 7)² = 9x² − 42x + 49. (Check with x = 1: (−4)² = 16, and 9 − 42 + 49 = 16 ✓.)',
        expWrong:{
          B:'The middle term went missing. (3x − 7)² means (3x − 7)(3x − 7), and the two cross products give −21x − 21x = −42x — they add up, they do not cancel.',
          C:'The middle term was computed as 3 · 7 = 21 instead of 2 · 3 · 7 = 42. There are TWO cross products, so the factor of 2 is not optional.',
          D:'(−7)² = +49, not −49. Squaring a negative always produces a positive.'
        },
        tip:'(a ± b)² = a² ± 2ab + b². The middle term is twice the product of the two pieces, and the last term is always positive because it is a square.',
        desmos:'Graph y=(3x-7)^2 and y=9x^2-42x+49: they overlap, touching the x-axis once at 7/3. Add y=9x^2+49 and it floats above, never touching.',
        desmosLatex:['y=(3x-7)^2','y=9x^2-42x+49']
      },
      {
        id:'AEQ-11', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: negative exponents',
        stem:'For x ≠ 0, which of the following is equivalent to 4x⁻³?',
        choices:{A:'1/(4x³)', B:'4/x³', C:'1/(64x³)', D:'−4x³'},
        correct:'B',
        expCorrect:'A negative exponent moves only the factor it is attached to. Here the exponent belongs to x, so x⁻³ = 1/x³ and the 4 stays on top: 4x⁻³ = 4 · (1/x³) = 4/x³. (Check with x = 2: 4 · 2⁻³ = 4/8 = 0.5, and 4/2³ = 4/8 = 0.5 ✓.)',
        expWrong:{
          A:'The coefficient was dragged down with the x. The exponent −3 sits on the x only, so the 4 never moves; it would take (4x)⁻³ to send both.',
          C:'This is (4x)⁻³ = 1/(4³x³) = 1/(64x³). Without parentheses the exponent does not reach the 4.',
          D:'A negative EXPONENT is not a negative sign. It calls for a reciprocal, so the value of 4x⁻³ stays positive whenever x is positive.'
        },
        tip:'x⁻ⁿ = 1/xⁿ: the negative exponent flips only its own base. A coefficient standing in front does not move unless parentheses put it under the exponent too.',
        desmos:'Graph y=4x^{-3} and y=4/x^{3}: the same two branches. Add y=1/(4x^{3}) and it is flatter by a factor of 16.',
        desmosLatex:['y=4x^{-3}','y=4/x^{3}']
      },
      {
        id:'AEQ-12', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: radicals written in exponential form',
        stem:'For x > 0, which of the following is equivalent to ∛(x⁵)?',
        choices:{A:'x^(3/5)', B:'x²', C:'x¹⁵', D:'x^(5/3)'},
        correct:'D',
        expCorrect:'A radical becomes a fractional exponent whose NUMERATOR is the power inside and whose DENOMINATOR is the index of the root: ⁿ√(xᵐ) = x^(m/n). Here m = 5 and n = 3, so ∛(x⁵) = x^(5/3). (Check with x = 8: 8⁵ = 32,768 and its cube root is 32; also 8^(5/3) = (∛8)⁵ = 2⁵ = 32 ✓.)',
        expWrong:{
          A:'The fraction is upside down. x^(3/5) is the FIFTH root of x cubed; the index of the root always lands in the denominator.',
          B:'The 3 and the 5 were subtracted. Subtracting exponents belongs to division of powers, not to rewriting a radical.',
          C:'The 3 and the 5 were multiplied. Multiplying would mean raising a power to a power; taking a root DIVIDES the exponent instead.'
        },
        tip:'ⁿ√(xᵐ) = x^(m/n): power on top, root underneath. A root shrinks an exponent, which is why its number belongs in the denominator.',
        desmos:'Graph y=(x^5)^{1/3} and y=x^{5/3} for x greater than 0: one curve. Add y=x^{3/5} and it grows far more slowly.',
        desmosLatex:['y=(x^5)^{1/3}','y=x^{5/3}']
      },
      {
        id:'AEQ-13', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: simplifying a rational expression',
        stem:'For x ≠ −3 and x ≠ −4, which of the following is equivalent to (x² − 9)/(x² + 7x + 12)?',
        choices:{A:'−9/(7x + 12)', B:'(x + 3)/(x + 4)', C:'(x − 3)/(x + 4)', D:'(x − 3)/(x − 4)'},
        correct:'C',
        expCorrect:'Factor both parts before cancelling anything. Top: x² − 9 = (x + 3)(x − 3). Bottom: x² + 7x + 12 = (x + 3)(x + 4). The shared FACTOR (x + 3) cancels and leaves (x − 3)/(x + 4). (Check with x = 1: the original is (1 − 9)/(1 + 7 + 12) = −8/20 = −0.4, and (1 − 3)/(1 + 4) = −2/5 = −0.4 ✓.)',
        expWrong:{
          A:'The x² terms were cancelled as if they were factors. Cancelling is division, so only a whole factor of the top and a whole factor of the bottom can go — never one term plucked out of a sum.',
          B:'This keeps the wrong half of the numerator. Once the (x + 3) cancels, what survives on top is the OTHER factor, (x − 3).',
          D:'The bottom factors as (x + 3)(x + 4), both signs positive, because 3 · 4 = 12 and 3 + 4 = 7. An (x − 4) would force the constant or the middle term to turn negative.'
        },
        tip:'Factor completely, then cancel only matching FACTORS. A term that is being added can never be cancelled, no matter how tempting the match looks.',
        desmos:'Graph y=(x^2-9)/(x^2+7x+12) and y=(x-3)/(x+4): the same curve, with a hole at x=−3 where the cancelled factor used to live.',
        desmosLatex:['y=(x^2-9)/(x^2+7x+12)','y=(x-3)/(x+4)']
      },
      {
        id:'AEQ-14', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: quotient rule with negative exponents',
        stem:'For x > 0 and y > 0, which of the following is equivalent to (12x⁻²y⁵)/(3x⁴y⁻¹)?',
        choices:{A:'4y⁶/x⁶', B:'4y⁴/x⁶', C:'4x⁶y⁶', D:'9y⁶/x⁶'},
        correct:'A',
        expCorrect:'Divide the coefficients and SUBTRACT the exponents, top minus bottom, one base at a time. Coefficients: 12 ÷ 3 = 4. For x: −2 − 4 = −6, so x⁻⁶. For y: 5 − (−1) = 6, so y⁶. That gives 4x⁻⁶y⁶, and moving the negative power down: 4y⁶/x⁶. (Check with x = 2 and y = 1: the original is (12 · 0.25 · 1)/(3 · 16 · 1) = 3/48 = 0.0625, and 4/2⁶ = 4/64 = 0.0625 ✓.)',
        expWrong:{
          B:'The y exponents were subtracted as 5 − 1 = 4. The bottom exponent is −1, so the subtraction is 5 − (−1) = 6: subtracting a negative adds.',
          C:'The x landed on top. Its exponent came out as −6, and a negative exponent sends the factor to the DENOMINATOR, not to the numerator.',
          D:'The coefficients were subtracted (12 − 3 = 9). Only the exponents are subtracted here; the coefficients are divided: 12 ÷ 3 = 4.'
        },
        tip:'Same base divided → subtract the exponents top minus bottom, signs included. Then rewrite any negative exponent by moving that factor across the fraction bar.',
        desmos:'Hold y at 1 and graph f(x)=(12x^{-2})/(3x^{4}) against g(x)=4/x^{6} for x greater than 0: the two land on top of each other.',
        desmosLatex:['y=(12x^{-2})/(3x^{4})','y=4/x^{6}']
      },
      {
        id:'AEQ-15', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: subtracting rational expressions with unlike denominators',
        stem:'For x ≠ 2 and x ≠ −2, which of the following is equivalent to 5/(x − 2) − 3/(x + 2)?',
        choices:{A:'2/(x² − 4)', B:'(2x + 16)/(x² − 4)', C:'(2x + 4)/(x² − 4)', D:'(8x + 4)/(x² − 4)'},
        correct:'B',
        expCorrect:'The common denominator is (x − 2)(x + 2) = x² − 4. Rebuild each fraction: 5/(x − 2) = 5(x + 2)/(x² − 4) and 3/(x + 2) = 3(x − 2)/(x² − 4). Subtract the numerators, distributing the minus to BOTH terms: 5x + 10 − (3x − 6) = 5x + 10 − 3x + 6 = 2x + 16. The result is (2x + 16)/(x² − 4). (Check with x = 0: 5/(−2) − 3/2 = −4, and 16/(−4) = −4 ✓.)',
        expWrong:{
          A:'The numerators were subtracted (5 − 3 = 2) and the common denominator was written underneath. Changing a denominator changes its numerator too: each fraction has to be rebuilt first.',
          C:'The minus reached the 3x but not the −6: 5x + 10 − 3x − 6 = 2x + 4. Subtracting a whole numerator flips EVERY sign inside it, so −(3x − 6) = −3x + 6.',
          D:'The two numerators were added instead of subtracted: 5x + 10 + 3x − 6 = 8x + 4. The expression asks for a difference.'
        },
        tip:'Build the common denominator, rebuild each numerator, and put the second numerator in parentheses before subtracting. Those parentheses are what stop the sign error.',
        desmos:'Graph y=5/(x-2)-3/(x+2) and y=(2x+16)/(x^2-4): identical, with breaks at x=2 and x=−2. Add y=(2x+4)/(x^2-4) and it separates.',
        desmosLatex:['y=5/(x-2)-3/(x+2)','y=(2x+16)/(x^2-4)']
      },
      {
        id:'AEQ-16', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: the remainder theorem',
        stem:'The polynomial p is defined by p(x) = 2x³ − 5x² + x + 8. What is the remainder when p(x) is divided by x − 3?',
        answer:'20',
        expCorrect:'The remainder theorem says the remainder of p(x) ÷ (x − a) equals p(a). The divisor is x − 3, so a = 3: p(3) = 2(27) − 5(9) + 3 + 8 = 54 − 45 + 3 + 8 = 20. No long division needed. Answer: 20.',
        tip:'Dividing by (x − a) leaves remainder p(a). Read the sign carefully: x − 3 means a = +3, while x + 3 would mean a = −3.',
        desmos:'Graph y=(2x^3-5x^2+x+8)/(x-3) and y=2x^2+x+4+20/(x-3): the same curve — the 20 sitting over (x−3) is exactly the remainder.',
        desmosLatex:['y=(2x^3-5x^2+x+8)/(x-3)','y=2x^2+x+4+20/(x-3)']
      },
      {
        id:'AEQ-17', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: factoring a trinomial with a leading coefficient',
        stem:'Which of the following is equivalent to 6x² + 11x − 10?',
        choices:{A:'(2x − 5)(3x + 2)', B:'(6x + 5)(x − 2)', C:'(3x + 5)(2x − 2)', D:'(2x + 5)(3x − 2)'},
        correct:'D',
        expCorrect:'With a leading coefficient, the middle term comes from the CROSS products. Test (2x + 5)(3x − 2): first terms give 6x², cross products give −4x + 15x = 11x, last terms give −10. All three match, so the factorization is (2x + 5)(3x − 2). (Check with x = 1: 6 + 11 − 10 = 7, and (7)(1) = 7 ✓.)',
        expWrong:{
          A:'The signs are swapped. This expands to 6x² + 4x − 15x − 10 = 6x² − 11x − 10: right constant, wrong middle sign.',
          B:'The 6 was kept whole in one factor. Expanding gives 6x² − 12x + 5x − 10 = 6x² − 7x − 10, so the cross products no longer add to 11x.',
          C:'The factor (2x − 2) still hides a common factor of 2. Expanding gives 6x² + 4x − 10: the constant is right, but the cross products add to 4x instead of 11x.'
        },
        tip:'For ax² + bx + c, the constant comes from the last terms and the middle term from the SUM of the two cross products. Multiply your factors back before committing.',
        desmos:'Graph y=6x^2+11x-10 and y=(2x+5)(3x-2): one parabola meeting the axis at −5/2 and 2/3. Add y=(2x-5)(3x+2) and the picture mirrors.',
        desmosLatex:['y=6x^2+11x-10','y=(2x+5)(3x-2)']
      },
      {
        id:'AEQ-18', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: rationalizing a simple denominator',
        stem:'Which of the following is equivalent to 8/√2?',
        choices:{A:'8√2', B:'2√2', C:'4√2', D:'4'},
        correct:'C',
        expCorrect:'Multiply top and bottom by √2 so the radical leaves the denominator: (8/√2)(√2/√2) = 8√2/(√2 · √2) = 8√2/2 = 4√2. (Check numerically: 8 ÷ 1.4142 ≈ 5.6569, and 4 · 1.4142 ≈ 5.6569 ✓.)',
        expWrong:{
          A:'The numerator was multiplied by √2 but the denominator was left alone. √2 · √2 = 2, and that 2 still has to divide the 8.',
          B:'The 8 was divided by 2 twice — once for the √2 · √2 and once more out of habit. It happens only once: 8 ÷ 2 = 4, giving 4√2 ≈ 5.66, not 2.83.',
          D:'The radical was cancelled away entirely, as if the √2 underneath simply removed a factor of 2 from the 8. Multiplying by √2/√2 leaves a √2 on TOP; it does not vanish.'
        },
        tip:'To clear a single square root from a denominator, multiply the whole fraction by that root over itself. The bottom turns into a whole number and the root reappears on top.',
        desmos:'Type 8/sqrt(2) and 4sqrt(2) in Desmos: both display 5.65685…. Type 2sqrt(2) and it shows 2.8284, half as much.',
        desmosLatex:['y=8/\sqrt{2}','y=4\sqrt{2}']
      },
      {
        id:'AEQ-19', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: dividing a polynomial by a monomial',
        stem:'For x ≠ 0, which of the following is equivalent to (6x³ − 4x² + 10x)/(2x)?',
        choices:{A:'3x² − 2x + 5', B:'3x² − 2x', C:'3x³ − 2x² + 5x', D:'3x² − 2x + 5x'},
        correct:'A',
        expCorrect:'Split the fraction term by term over 2x: 6x³/2x = 3x², −4x²/2x = −2x, and 10x/2x = 5. So the quotient is 3x² − 2x + 5. (Check with x = 1: the original is (6 − 4 + 10)/2 = 6, and 3 − 2 + 5 = 6 ✓.)',
        expWrong:{
          B:'The last term was dropped. 10x ÷ 2x is not 0 — the x cancels and leaves the number 5, which belongs in the answer.',
          C:'The coefficients were divided but the exponents were not reduced. Dividing by x subtracts 1 from each exponent: x³ becomes x², x² becomes x, and x becomes x⁰ = 1.',
          D:'10x ÷ 2x = 5, not 5x. The x on top and the x on the bottom cancel each other completely.'
        },
        tip:'Dividing by a monomial means dividing EVERY term: divide the coefficients and subtract the divisor exponent from each one. A term that loses all of its x becomes a constant, not zero.',
        desmos:'Graph y=(6x^3-4x^2+10x)/(2x) and y=3x^2-2x+5: the same parabola with a hole at x=0. Add y=3x^2-2x and the gap is a constant 5.',
        desmosLatex:['y=(6x^3-4x^2+10x)/(2x)','y=3x^2-2x+5']
      },
      {
        id:'AEQ-20', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: simplifying a complex fraction',
        stem:'What is the value of (1/2 + 1/3) ÷ (1/6)?',
        answer:'5',
        expCorrect:'Handle the top first: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Then dividing by 1/6 means multiplying by its reciprocal: (5/6) · (6/1) = 5. Answer: 5.',
        tip:'In a complex fraction, combine the top into one fraction and the bottom into one fraction, then multiply the top by the RECIPROCAL of the bottom.',
        desmos:'Type (1/2+1/3)/(1/6) in Desmos: it returns 5. Change the bottom to 1/3 and it returns 2.5, which shows how much the divisor matters.',
        desmosLatex:['(1/2+1/3)/(1/6)']
      },
      {
        id:'AEQ-21', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: factoring by grouping',
        stem:'Which of the following is equivalent to 3x³ + 12x² − 2x − 8?',
        choices:{A:'(x + 4)(3x² + 2)', B:'(x + 4)(3x² − 2)', C:'(x − 4)(3x² − 2)', D:'(3x² − 2x)(x + 4)'},
        correct:'B',
        expCorrect:'Group in pairs: (3x³ + 12x²) + (−2x − 8). From the first pair pull 3x²: 3x²(x + 4). From the second pull −2, which flips both signs inside: −2(x + 4). Both now share (x + 4), so the expression is (x + 4)(3x² − 2). (Check with x = 1: 3 + 12 − 2 − 8 = 5, and (5)(1) = 5 ✓.)',
        expWrong:{
          A:'The second pair was factored with +2, which would require it to read +2x + 8. Pulling out a NEGATIVE is what makes the second parenthesis match the first.',
          C:'Expanding this gives 3x³ − 12x² − 2x + 8: two signs flip. The common binomial is (x + 4), exactly as it came out of the first pair.',
          D:'An x was pulled out of the second group as well, but x does not divide −8. The leftover factor is 3x² − 2, with no x attached to the 2.'
        },
        tip:'Group in pairs, factor each pair, and aim for the SAME binomial in both. If the second pair starts with a minus, factor out a negative so the signs inside line up.',
        desmos:'Graph y=3x^3+12x^2-2x-8 and y=(x+4)(3x^2-2): one curve. Add y=(x+4)(3x^2+2) and it separates at once.',
        desmosLatex:['y=3x^3+12x^2-2x-8','y=(x+4)(3x^2-2)']
      },
      {
        id:'AEQ-22', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Equivalent expressions: power of a power and power of a product',
        stem:'For x > 0, which of the following is equivalent to (2x³)⁴?',
        choices:{A:'2x¹²', B:'16x⁷', C:'8x¹²', D:'16x¹²'},
        correct:'D',
        expCorrect:'An exponent outside parentheses reaches every factor inside: (2x³)⁴ = 2⁴ · (x³)⁴. Then 2⁴ = 16, and a power raised to a power MULTIPLIES exponents: (x³)⁴ = x¹². So the answer is 16x¹². (Check with x = 2: (2 · 8)⁴ = 16⁴ = 65,536, and 16 · 2¹² = 16 · 4,096 = 65,536 ✓.)',
        expWrong:{
          A:'The exponent never reached the coefficient. Everything inside the parentheses gets raised, so the 2 becomes 2⁴ = 16.',
          B:'The exponents were added (3 + 4 = 7). Adding belongs to multiplying two separate powers; a power RAISED to a power multiplies them: 3 · 4 = 12.',
          C:'The 2 was multiplied by the exponent (2 · 4 = 8) instead of raised to it. The rule is 2⁴ = 2 · 2 · 2 · 2 = 16.'
        },
        tip:'(ab)ⁿ = aⁿbⁿ and (xᵐ)ⁿ = xᵐⁿ. The outside exponent touches every factor inside, and it MULTIPLIES any exponent it lands on.',
        desmos:'Graph y=(2x^3)^4 and y=16x^{12} for x greater than 0: one curve. Add y=8x^{12} and it sits at half the height everywhere.',
        desmosLatex:['y=(2x^3)^4','y=16x^{12}']
      },
      {
        id:'AEQ-23', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Equivalent expressions: complex fraction with variables',
        stem:'For x > 0 and x ≠ 3, which of the following is equivalent to (1/x − 1/3) ÷ (x − 3)?',
        choices:{A:'1/(x − 3)²', B:'(3 − x)/(3x)', C:'−1/(3x)', D:'1/(3x)'},
        correct:'C',
        expCorrect:'Combine the top over the common denominator 3x: 1/x − 1/3 = 3/(3x) − x/(3x) = (3 − x)/(3x). Dividing by (x − 3) means multiplying by 1/(x − 3), which gives (3 − x)/(3x(x − 3)). Now notice 3 − x = −(x − 3), so the (x − 3) cancels and leaves −1/(3x). (Check with x = 1: (1 − 1/3) ÷ (−2) = (2/3)(−1/2) = −1/3, and −1/(3 · 1) = −1/3 ✓.)',
        expWrong:{
          A:'The top was combined as 1/x − 1/3 = 1/(x − 3), subtracting the denominators. Fractions never combine that way: they need a common denominator first.',
          B:'This is only the numerator after it was combined. The division by (x − 3) still has to happen, and that step is what produces the minus sign.',
          D:'The sign was lost in the cancellation. 3 − x and x − 3 are opposites, so their quotient is −1, not +1.'
        },
        tip:'When a factor and its reverse appear across a fraction bar, factor out −1: 3 − x = −(x − 3). That single move turns a stuck cancellation into a clean one, with a minus left behind.',
        desmos:'Graph y=(1/x-1/3)/(x-3) and y=-1/(3x) for x greater than 0: the same branch, with a hole at x=3. Add y=1/(3x) and it mirrors across the axis.',
        desmosLatex:['y=(1/x-1/3)/(x-3)','y=-1/(3x)']
      },
      {
        id:'AEQ-24', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Equivalent expressions: the factor theorem',
        stem:'The polynomial p is defined by p(x) = x³ + kx² − 11x + 6, where k is a constant. If x − 2 is a factor of p(x), what is the value of k?',
        choices:{A:'2', B:'−2', C:'8', D:'−5'},
        correct:'A',
        expCorrect:'The factor theorem: x − 2 is a factor exactly when p(2) = 0. Substitute: p(2) = 8 + 4k − 22 + 6 = 4k − 8. Set it equal to 0: 4k = 8, so k = 2. (Check: with k = 2, p(2) = 8 + 8 − 22 + 6 = 0 ✓.)',
        expWrong:{
          B:'This solves 4k + 8 = 0. Adding the constants gives 8 − 22 + 6 = −8, a negative, so the equation to solve is 4k − 8 = 0.',
          C:'The final division was skipped: 4k = 8 gives k = 2, not 8. The coefficient 4 comes from the k · 2² in the substitution.',
          D:'This substitutes x = −2. A factor of x − 2 vanishes at x = +2; the number to plug in always has the OPPOSITE sign of the constant written inside the factor.'
        },
        tip:'x − a is a factor of p exactly when p(a) = 0 — the same statement as "the remainder is 0". Set the factor equal to zero to find which number to substitute.',
        desmos:'Graph y=x^3+2x^2-11x+6: it meets the x-axis at 2, the sign that (x−2) divides it evenly. Change the 2 in front of x^2 and that meeting point drifts off.',
        desmosLatex:['y=x^3+2x^2-11x+6']
      },
      {
        id:'AEQ-25', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Equivalent expressions: polynomial division with a remainder',
        stem:'For x ≠ −3, which of the following is equivalent to (2x³ + 3x² − 5x + 7)/(x + 3)?',
        choices:{A:'2x² − 3x + 4 + 5/(x + 3)', B:'2x² − 3x + 4 − 5/(x + 3)', C:'2x² + 9x + 22 + 73/(x + 3)', D:'2x² − 3x − 1'},
        correct:'B',
        expCorrect:'Dividing by x + 3 means the synthetic-division number is −3, the value that makes the divisor zero. Bring down 2; 2(−3) = −6 and 3 + (−6) = −3; (−3)(−3) = 9 and −5 + 9 = 4; 4(−3) = −12 and 7 + (−12) = −5. So the quotient is 2x² − 3x + 4 and the remainder is −5, giving 2x² − 3x + 4 − 5/(x + 3). (Check with x = 0: the original is 7/3, and 4 − 5/3 = 7/3 ✓.)',
        expWrong:{
          A:'The remainder is −5, and its sign belongs to the term. Adding 5/(x + 3) instead of subtracting it misses by 10/(x + 3).',
          C:'The synthetic division used +3. The divisor x + 3 is zero at x = −3, so −3 is the number that goes in the box; +3 belongs to a divisor of x − 3.',
          D:'The remainder was folded into the constant term (4 − 5 = −1). A remainder of −5 means −5 left over out of (x + 3), so it has to appear as −5/(x + 3).'
        },
        tip:'Dividing by (x − a) gives quotient + remainder/(x − a). Keep the remainder as a fraction over the divisor, and carry its sign: a negative remainder subtracts.',
        desmos:'Graph y=(2x^3+3x^2-5x+7)/(x+3) and y=2x^2-3x+4-5/(x+3): one curve. Add y=2x^2-3x+4 and watch the gap close as x grows.',
        desmosLatex:['y=(2x^3+3x^2-5x+7)/(x+3)','y=2x^2-3x+4-5/(x+3)']
      },
      {
        id:'AEQ-26', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Equivalent expressions: excluded values after factoring',
        stem:'For which values of x is the expression (x² − 4)/(x² − x − 6) undefined?',
        choices:{A:'x = 3 only', B:'x = 2 and x = −2', C:'x = 3 and x = −2', D:'x = −3 and x = 2'},
        correct:'C',
        expCorrect:'Factor the denominator: x² − x − 6 = (x − 3)(x + 2), which is 0 at x = 3 and at x = −2. Both values break the expression. At x = −2 the numerator is 0 as well, so the expression reads 0 ÷ 0 — still undefined, just a hole instead of an asymptote. Answer: x = 3 and x = −2.',
        expWrong:{
          A:'This cancels the (x + 2) first and then reads the excluded values off the simplified form. Simplifying removes the factor from the page, not from the original expression: x = −2 stays excluded as a hole.',
          B:'These are the values that make the NUMERATOR zero, since x² − 4 = (x − 2)(x + 2). A zero on top makes the expression equal 0; only a zero on the bottom makes it undefined.',
          D:'The signs of the factors were read backwards. (x − 3)(x + 2) is zero when x − 3 = 0 or x + 2 = 0, so the values are x = 3 and x = −2 — each one the opposite of the constant inside its factor.'
        },
        tip:'Read excluded values off the ORIGINAL denominator, before any cancelling. A factor that cancels leaves a hole, and a hole is still a value the expression cannot take.',
        desmos:'Graph y=(x^2-4)/(x^2-x-6): a vertical asymptote at x=3 and an open hole at x=−2. Zoom in near x=−2 to find the missing point.',
        desmosLatex:['y=(x^2-4)/(x^2-x-6)']
      },
      {
        id:'AEQ-27', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Equivalent expressions: remainder theorem with an unknown coefficient',
        stem:'The polynomial p is defined by p(x) = x³ − 4x² + ax − 9, where a is a constant. When p(x) is divided by x − 2, the remainder is 5. What is the value of a?',
        answer:'11',
        expCorrect:'By the remainder theorem the remainder equals p(2), so p(2) = 5. Substitute: 8 − 16 + 2a − 9 = 5, which is 2a − 17 = 5. Then 2a = 22 and a = 11. (Check: with a = 11, p(2) = 8 − 16 + 22 − 9 = 5 ✓.) Answer: 11.',
        tip:'The remainder theorem run backwards: set p(a) equal to the given remainder and solve for the unknown coefficient. One substitution replaces a whole long division.',
        desmos:'Graph y=x^3-4x^2+11x-9 and the horizontal line y=5: they meet at x=2, which is exactly the statement p(2)=5.',
        desmosLatex:['y=x^3-4x^2+11x-9','y=5']
      },
      {
        id:'AEQ-28', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Equivalent expressions: fractional exponent applied to a product',
        stem:'For x > 0, which of the following is equivalent to (16x⁸)^(3/4)?',
        choices:{A:'12x⁶', B:'64x⁶', C:'2x⁶', D:'8x⁶'},
        correct:'D',
        expCorrect:'The outside exponent reaches both factors: (16x⁸)^(3/4) = 16^(3/4) · (x⁸)^(3/4). For the number, take the root first and then the power: 16^(3/4) = (⁴√16)³ = 2³ = 8. For the variable, multiply the exponents: 8 · (3/4) = 6. So the result is 8x⁶. (Check with x = 2: (16 · 256)^(3/4) = 4,096^(3/4) = 512, and 8 · 2⁶ = 8 · 64 = 512 ✓.)',
        expWrong:{
          A:'The 16 was multiplied by 3/4 (16 · 3/4 = 12) instead of raised to it. A fractional exponent is a root-and-power, never a multiplication.',
          B:'This used a square root: √16 = 4 and 4³ = 64. The denominator of the exponent is 4, so the root is a FOURTH root, and ⁴√16 = 2.',
          C:'Only the root was taken: ⁴√16 = 2, and then the cube was forgotten. The numerator 3 still has to be applied.'
        },
        tip:'a^(m/n) = (ⁿ√a)^m. Taking the root first keeps the numbers small, and remember the outside exponent multiplies whatever exponent already sits on the variable.',
        desmos:'Graph y=(16x^8)^{3/4} and y=8x^6 for x greater than 0: one curve. Add y=64x^6 and it climbs eight times faster.',
        desmosLatex:['y=(16x^8)^{3/4}','y=8x^6']
      },
      {
        id:'AEQ-29', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Equivalent expressions: adding rational expressions with a factorable denominator',
        stem:'For x ≠ 3 and x ≠ −3, which of the following is equivalent to 3/(x² − 9) + 2/(x + 3)?',
        choices:{A:'(2x − 3)/(x² − 9)', B:'(2x + 9)/(x² − 9)', C:'5/(x² − 9)', D:'(2x − 3)/((x − 3)(x + 3)²)'},
        correct:'A',
        expCorrect:'Factor first: x² − 9 = (x − 3)(x + 3), so the second denominator already lives inside the first and the common denominator is just x² − 9. Rebuild the second fraction: 2/(x + 3) = 2(x − 3)/(x² − 9) = (2x − 6)/(x² − 9). Add the numerators: 3 + 2x − 6 = 2x − 3, giving (2x − 3)/(x² − 9). (Check with x = 0: 3/(−9) + 2/3 = −1/3 + 2/3 = 1/3, and −3/(−9) = 1/3 ✓.)',
        expWrong:{
          B:'The second fraction was multiplied by (x + 3) instead of (x − 3): 3 + 2x + 6 = 2x + 9. The missing factor is whatever the denominator LACKS, and it already owns a copy of (x + 3).',
          C:'The numerators were added straight across (3 + 2 = 5) with the larger denominator kept underneath. A fraction only holds its value if numerator and denominator are scaled together.',
          D:'The denominators were multiplied together as (x² − 9)(x + 3). That is a common denominator but not the LEAST one, and the numerator was never rescaled to match it, so the value changed.'
        },
        tip:'Factor every denominator before choosing the common one. Often one denominator is already a factor of another, and the LCD is the bigger one exactly as it stands.',
        desmos:'Graph y=3/(x^2-9)+2/(x+3) and y=(2x-3)/(x^2-9): the same three-branch picture. Add y=5/(x^2-9) and it peels off.',
        desmosLatex:['y=3/(x^2-9)+2/(x+3)','y=(2x-3)/(x^2-9)']
      },
      {
        id:'AEQ-30', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Equivalent expressions: multiplying rational expressions',
        stem:'For x > 4, which of the following is equivalent to ((x² − 16)/(x² + 5x + 4)) · ((x² + 3x + 2)/(x − 4))?',
        choices:{A:'x − 2', B:'x² − 2x − 8', C:'x + 2', D:'(x + 2)/(x + 1)'},
        correct:'C',
        expCorrect:'Factor everything before multiplying: x² − 16 = (x − 4)(x + 4), x² + 5x + 4 = (x + 1)(x + 4), and x² + 3x + 2 = (x + 1)(x + 2). The product is [(x − 4)(x + 4)(x + 1)(x + 2)] / [(x + 1)(x + 4)(x − 4)]. Cancel (x − 4), (x + 4) and (x + 1), and what remains is x + 2. (Check with x = 5: (9/54)(42/1) = 7, and 5 + 2 = 7 ✓.)',
        expWrong:{
          A:'A sign was flipped while factoring x² + 3x + 2. Its factors are (x + 1)(x + 2), both positive, because 1 · 2 = 2 and 1 + 2 = 3.',
          B:'This is (x − 4)(x + 2): the (x − 4) on top was never cancelled against the (x − 4) in the second denominator. In a product of fractions, any factor on top cancels with any factor on the bottom.',
          D:'The (x + 1) was cancelled only halfway. It appears once on top and once on the bottom, so it disappears completely instead of surviving in the denominator.'
        },
        tip:'Multiplying rational expressions: factor every piece, then cancel across BOTH fractions before multiplying anything out. Expanding first buries the factors you were about to cancel.',
        desmos:'Graph y=((x^2-16)/(x^2+5x+4))((x^2+3x+2)/(x-4)) and y=x+2 for x greater than 4: the same line. Below 4 the first one shows its holes.',
        desmosLatex:['y=((x^2-16)/(x^2+5x+4))((x^2+3x+2)/(x-4))','y=x+2']
      },
      {
        id:'AEQ-31', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Equivalent expressions: completing a perfect square trinomial',
        stem:'The expression 9x² + bx + 49 is a perfect square trinomial for exactly two values of the constant b. What is the positive value of b?',
        answer:'42',
        expCorrect:'A perfect square trinomial comes from (mx + n)² = m²x² + 2mnx + n². Match the ends: m² = 9 gives m = 3, and n² = 49 gives n = 7 or n = −7. The middle coefficient is 2mn = 2 · 3 · 7 = 42 (or −42 when n = −7). The positive value is 42. (Check: (3x + 7)² = 9x² + 42x + 49 ✓.) Answer: 42.',
        tip:'In a perfect square trinomial the middle coefficient is TWICE the product of the square roots of the two end terms. Forgetting that factor of 2 is the single most common slip here.',
        desmos:'Graph y=9x^2+42x+49: it touches the x-axis at exactly one point, x=−7/3, the signature of a perfect square. Change 42 to 40 and it dips below.',
        desmosLatex:['y=9x^2+42x+49']
      },
      {
        id:'AEQ-32', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Equivalent expressions: rationalizing a two-term radical denominator',
        stem:'Which of the following is equivalent to 10/(√7 − √2)?',
        choices:{A:'2√7 − 2√2', B:'2√7 + 2√2', C:'(10√7 + 10√2)/9', D:'10/(√7 + √2)'},
        correct:'B',
        expCorrect:'Multiply top and bottom by the conjugate √7 + √2. The bottom becomes (√7 − √2)(√7 + √2) = 7 − 2 = 5, a difference of squares with no radical left. The top becomes 10(√7 + √2). So the expression is 10(√7 + √2)/5 = 2(√7 + √2) = 2√7 + 2√2. (Check numerically: 10 ÷ (2.6458 − 1.4142) ≈ 8.1199, and 2(2.6458) + 2(1.4142) ≈ 8.1199 ✓.)',
        expWrong:{
          A:'The conjugate was used on the bottom but the top kept the original minus. Whatever multiplies the denominator multiplies the numerator too, so the top must carry √7 + √2.',
          C:'The denominator was computed as 7 + 2 = 9. A conjugate pair gives a DIFFERENCE of squares: (√7)² − (√2)² = 7 − 2 = 5.',
          D:'The sign in the denominator was simply flipped. Changing a denominator without multiplying the whole fraction by the same thing changes its value: this one is about 2.463, not 8.1199.'
        },
        tip:'To clear a two-term radical denominator, multiply by its conjugate — same terms, opposite middle sign. The product is a² − b², and the radicals disappear.',
        desmos:'Type 10/(sqrt(7)-sqrt(2)) and 2sqrt(7)+2sqrt(2) in Desmos: both give 8.1199…. The version over 9 gives 4.51.',
        desmosLatex:['y=10/(\sqrt{7}-\sqrt{2})','y=2\sqrt{7}+2\sqrt{2}']
      },
      {
        id:'AEQ-33', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Equivalent expressions: degree and leading coefficient after expanding',
        stem:'The polynomial q is defined by q(x) = (2x³ − 7)² − 4x⁶. What is the degree of q, and what is its leading coefficient?',
        choices:{A:'Degree 6, leading coefficient 4', B:'Degree 6, leading coefficient 0', C:'Degree 3, leading coefficient 28', D:'Degree 3, leading coefficient −28'},
        correct:'D',
        expCorrect:'Expand the square: (2x³ − 7)² = 4x⁶ − 28x³ + 49. Subtracting 4x⁶ wipes out the sixth-power term, leaving q(x) = −28x³ + 49. The highest power that survives is x³, so the degree is 3 and the leading coefficient is −28. (Check with x = 1: (2 − 7)² − 4 = 25 − 4 = 21, and −28 + 49 = 21 ✓.)',
        expWrong:{
          A:'This reads the degree off the unexpanded expression. The (2x³)² produces 4x⁶, and the −4x⁶ cancels it exactly, so no sixth-power term survives.',
          B:'A leading coefficient of 0 cannot happen: if a term has coefficient 0 it is not there at all, and the degree drops to the next power that actually appears.',
          C:'The middle term of the square is −2 · 2x³ · 7 = −28x³, and the minus travels with it, so the leading coefficient is −28.'
        },
        tip:'Expand and combine BEFORE reading a degree. When the highest-power terms cancel, the degree drops and the leading coefficient comes from whatever term is left standing.',
        desmos:'Graph y=(2x^3-7)^2-4x^6 and y=-28x^3+49: one curve, falling from left to right — odd degree with a negative lead.',
        desmosLatex:['y=(2x^3-7)^2-4x^6','y=-28x^3+49']
      },
      {
        id:'AEQ-34', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Equivalent expressions: simplifying a quotient with a perfect square numerator',
        stem:'For 3x − 5 ≠ 0, the expression (9x² − 30x + 25)/(3x − 5) is equivalent to 3x + c, where c is a constant. What is the value of c?',
        answer:'-5',
        expCorrect:'The numerator is a perfect square: 9x² − 30x + 25 = (3x − 5)², since (3x)² = 9x², (−5)² = 25, and 2 · 3x · (−5) = −30x. So the quotient is (3x − 5)²/(3x − 5) = 3x − 5. Written in the form 3x + c, that makes c = −5. (Check with x = 2: (36 − 60 + 25)/(6 − 5) = 1/1 = 1, and 3(2) − 5 = 1 ✓.) Answer: −5.',
        tip:'When a quotient looks ugly, test whether the numerator is a perfect square: match the two end terms, then confirm the middle term is twice their product. One factor then cancels the whole denominator.',
        desmos:'Graph y=(9x^2-30x+25)/(3x-5) and y=3x-5: the same line, with a hole at x=5/3 where the denominator is zero.',
        desmosLatex:['y=(9x^2-30x+25)/(3x-5)','y=3x-5']
      }
    ]
  });
})();
