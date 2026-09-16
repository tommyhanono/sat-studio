/* SAT Studio question set — Math: Advanced Math · Equivalent expressions — Warm-up (EQW-01 a EQW-12)
   La rampa de abajo de la destreza `am-equiv`: el banco tenía 44 preguntas y solo 2 fáciles,
   así que acá va lo que un estudiante que arranca en 400 necesita ANTES de las brutales.
   Cada distractor es un error con nombre (sumar exponentes al elevar una potencia, distribuir
   mal el negativo, cancelar un sumando en vez de un factor), y las 12 equivalencias se
   comprobaron evaluando original y opciones en cinco valores de x antes de escribir nada. */
(function(){
  window.SAT_SETS.push({
    id: 'math-equiv-warm1',
    title: 'Equivalent Expressions — Warm-up',
    section: 'math',
    level: 'Fácil',
    description: 'One step at a time: distribute, factor, the five exponent rules, and rational expressions with easy denominators.',
    minutes: 16,
    questions: [
      {
        id:'EQW-01', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Distributing and combining like terms (equivalent expressions)',
        stem:'Which of the following is equivalent to 5(2x + 3) − 4x?',
        choices:{A:'6x + 3', B:'14x + 15', C:'6x + 15', D:'10x + 11'},
        correct:'C',
        expCorrect:'Distribute first: 5(2x + 3) = 10x + 15. Then combine only the like terms: 10x − 4x = 6x, and the 15 has no partner, so it stays. The result is 6x + 15. (Check with x = 1: the original is 5(5) − 4 = 21, and 6(1) + 15 = 21 ✓.)',
        expWrong:{
          A:'The 5 reached the 2x but never reached the 3. Distributing means multiplying the 5 by BOTH terms inside: 5(2x + 3) = 10x + 15, not 10x + 3.',
          B:'This adds 10x and 4x. The 4x is being SUBTRACTED, so the x-terms give 10x − 4x = 6x.',
          D:'Here the 4 was taken off the 15. A 4x is an x-term and the 15 is a constant: only like terms combine, so the 4x comes off the 10x.'
        },
        tip:'Distribute to EVERY term inside the parentheses, then combine only terms with the same variable raised to the same power. A constant and an x-term never merge.',
        desmos:'Graph y=5(2x+3)-4x and y=6x+15: one line appears, not two. That is what "equivalent" looks like.',
        desmosLatex:['y=5(2x+3)-4x','y=6x+15']
      },
      {
        id:'EQW-02', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Factoring out the greatest common factor',
        stem:'Which of the following is equivalent to 12x³ + 18x²?',
        choices:{A:'6x²(2x + 3)', B:'6x²(2x + 3x)', C:'6x³(2x + 3)', D:'6x²(2x² + 3)'},
        correct:'A',
        expCorrect:'Pull out the biggest piece both terms share. Coefficients: the greatest common factor of 12 and 18 is 6. Variables: x³ and x² share x², the SMALLER power. So the common factor is 6x². Divide each term by it: 12x³ ÷ 6x² = 2x and 18x² ÷ 6x² = 3, which gives 6x²(2x + 3). (Check by distributing back: 6x²·2x = 12x³ and 6x²·3 = 18x² ✓.)',
        expWrong:{
          B:'18x² ÷ 6x² = 3, not 3x. Dividing powers SUBTRACTS the exponents: x²/x² = x⁰ = 1, so there is no x left behind.',
          C:'x³ is not common to both terms — the second one only carries x². Pulling out x³ would require 18x² to contain an x³, and it does not. Take the smaller power.',
          D:'The coefficient was divided (12 ÷ 6 = 2) but the exponent was not: x³ ÷ x² = x, so the first term inside becomes 2x, not 2x².'
        },
        tip:'Greatest common factor = the GCF of the coefficients times each variable at its SMALLEST exponent across the terms. Divide each term by it, then distribute back to check.',
        desmos:'Graph y=12x^3+18x^2 and y=6x^2(2x+3): the two curves coincide. Try y=6x^3(2x+3) to see a factoring that does not.',
        desmosLatex:['y=12x^3+18x^2','y=6x^2(2x+3)']
      },
      {
        id:'EQW-03', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Difference of squares (factoring)',
        stem:'Which of the following is equivalent to x² − 49?',
        choices:{A:'(x − 7)(x − 7)', B:'(x + 7)(x − 7)', C:'(x + 7)(x + 7)', D:'(x + 49)(x − 1)'},
        correct:'B',
        expCorrect:'x² − 49 is a difference of two squares: x² is (x)² and 49 is (7)². The pattern a² − b² = (a + b)(a − b) gives (x + 7)(x − 7). (Check by expanding: x² − 7x + 7x − 49 = x² − 49 — the middle terms cancel ✓.)',
        expWrong:{
          A:'Two identical minus factors give (x − 7)² = x² − 14x + 49: an extra −14x and a plus on the 49. The two factors need OPPOSITE signs.',
          C:'(x + 7)² = x² + 14x + 49. Squaring a binomial always leaves a middle term, and a difference of squares has none.',
          D:'This treats 49 as the product 49 · 1, the way you would factor a trinomial. It expands to x² + 48x − 49, but the original has no x-term at all.'
        },
        tip:'a² − b² = (a + b)(a − b): the same two numbers with opposite signs, which is why the middle term dies. It works only for a DIFFERENCE — a² + b² does not factor over the real numbers.',
        desmos:'Graph y=x^2-49 and y=(x+7)(x-7): one parabola, crossing the x-axis at −7 and 7 — the two numbers in the factors, sign flipped.',
        desmosLatex:['y=x^2-49','y=(x+7)(x-7)']
      },
      {
        id:'EQW-04', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Exponent rules: product of powers',
        stem:'Which of the following is equivalent to (3x⁴)(5x²), where x > 0?',
        choices:{A:'15x⁸', B:'8x⁶', C:'15x²', D:'15x⁶'},
        correct:'D',
        expCorrect:'Multiply the coefficients and ADD the exponents on the same base: (3 · 5)(x⁴ · x²) = 15x⁴⁺² = 15x⁶. (Check with x = 2: 3·16 = 48 and 5·4 = 20, so the original is 48 · 20 = 960, and 15 · 2⁶ = 15 · 64 = 960 ✓.)',
        expWrong:{
          A:'The exponents were multiplied (4 · 2 = 8). Multiplying exponents is the power-of-a-power rule; multiplying two POWERS adds them: x⁴ · x² = x⁶.',
          B:'The coefficients were added (3 + 5 = 8). The two factors are being multiplied, so the coefficients multiply too: 3 · 5 = 15.',
          C:'The exponents were subtracted (4 − 2 = 2). Subtracting is the rule for DIVIDING powers, and nothing here is being divided.'
        },
        tip:'Same base multiplied → ADD the exponents; same base divided → subtract them. The coefficients follow whatever the expression itself does, so here 3 · 5 = 15.',
        desmos:'Graph y=(3x^4)(5x^2) and y=15x^6 for x greater than 0: the curves sit on top of each other. Add y=15x^8 and it peels away immediately.',
        desmosLatex:['y=(3x^4)(5x^2)','y=15x^6']
      },
      {
        id:'EQW-05', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Exponent rules: power of a power',
        stem:'Which of the following is equivalent to (2x³)⁴, where x > 0?',
        choices:{A:'16x¹²', B:'2x¹²', C:'8x¹²', D:'16x⁷'},
        correct:'A',
        expCorrect:'An exponent outside parentheses reaches EVERY factor inside: (2x³)⁴ = 2⁴ · (x³)⁴. Then 2⁴ = 16, and a power raised to a power multiplies the exponents: (x³)⁴ = x^(3·4) = x¹². The result is 16x¹². (Check with x = 1: (2·1)⁴ = 16 and 16 · 1 = 16 ✓.)',
        expWrong:{
          B:'The exponent 4 was applied only to the x. It applies to the coefficient as well, and 2⁴ = 16.',
          C:'8 is 2³ — the exponent from INSIDE the parentheses. The coefficient has to be raised to the outside exponent: 2⁴ = 16, not 2³.',
          D:'The exponents were added (3 + 4 = 7). Adding is for multiplying two powers; a power raised to a power MULTIPLIES them: 3 · 4 = 12.'
        },
        tip:'Power of a power multiplies the exponents, and the outside exponent hits every factor inside the parentheses, coefficient included: (ax^m)^n = a^n · x^(mn).',
        desmos:'Graph y=(2x^3)^4 and y=16x^{12} for x greater than 0. Adding y=2x^{12} shows how much is lost by leaving the coefficient alone.',
        desmosLatex:['y=(2x^3)^4','y=16x^{12}']
      },
      {
        id:'EQW-06', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponent rules: quotient of powers',
        stem:'The expression (20x⁷)/(4x³) is equivalent to axⁿ, where a and n are constants and x > 0. What is the value of a + n?',
        answer:'9',
        expCorrect:'Handle the numbers and the variables separately. Coefficients: 20 ÷ 4 = 5. Same base divided → SUBTRACT the exponents: x⁷/x³ = x⁷⁻³ = x⁴. So the expression is 5x⁴, which means a = 5 and n = 4, and a + n = 5 + 4 = 9. (Check with x = 2: (20 · 128)/(4 · 8) = 2560/32 = 80, and 5 · 2⁴ = 5 · 16 = 80 ✓.) Answer: 9.',
        expWrong:{},
        tip:'Dividing powers of the same base subtracts the exponents, while the coefficients divide as ordinary numbers. Then read what is being ASKED — here it is a + n, not the expression itself.',
        desmos:'Graph y=(20x^7)/(4x^3) and y=5x^4 for x greater than 0: the curves coincide, confirming a = 5 and n = 4.',
        desmosLatex:['y=(20x^7)/(4x^3)','y=5x^4']
      },
      {
        id:'EQW-07', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponent rules: negative exponents',
        stem:'Which of the following is equivalent to 4x⁻³, where x > 0?',
        choices:{A:'1/(4x³)', B:'−4x³', C:'4/x³', D:'−4/x³'},
        correct:'C',
        expCorrect:'A negative exponent means "reciprocal", and it belongs only to the factor it sits on. It sits on the x, so x⁻³ = 1/x³ and the expression is 4 · (1/x³) = 4/x³. The 4 carries no negative exponent, so it does not move. (Check with x = 2: 4 · 2⁻³ = 4/8 = 0.5, and 4/2³ = 4/8 = 0.5 ✓.)',
        expWrong:{
          A:'The 4 was dragged into the denominator too. Only the x carries the −3; a coefficient with no negative exponent of its own stays where it is.',
          B:'The minus was turned into the sign of the whole term. A negative exponent never makes a value negative — at x = 2 the original is +0.5, while this gives −32.',
          D:'Moving x⁻³ into the denominator is right, but the minus does not survive the move. Once x⁻³ becomes 1/x³ the exponent is positive and no minus sign is left over.'
        },
        tip:'A negative exponent flips ONLY its own factor across the fraction bar and turns positive there. It never changes the sign of the expression, and it never drags along a coefficient.',
        desmos:'Graph y=4x^{-3} and y=4/x^3: one curve. Add y=-4/x^3 and it appears mirrored below the x-axis — the sign error, made visible.',
        desmosLatex:['y=4x^{-3}','y=4/x^3']
      },
      {
        id:'EQW-08', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Factoring a simple trinomial',
        stem:'Which of the following is equivalent to x² + 9x + 20?',
        choices:{A:'(x + 2)(x + 10)', B:'(x + 4)(x + 5)', C:'(x − 4)(x − 5)', D:'(x + 9)(x + 20)'},
        correct:'B',
        expCorrect:'Look for two numbers that MULTIPLY to 20 and ADD to 9: 4 and 5. So x² + 9x + 20 = (x + 4)(x + 5). (Check by expanding: x² + 5x + 4x + 20 = x² + 9x + 20 ✓.)',
        expWrong:{
          A:'2 and 10 do multiply to 20, but they add to 12, not 9. The pair has to pass BOTH tests; this one expands to x² + 12x + 20.',
          C:'Two negatives still multiply to +20, but they add to −9. This factors x² − 9x + 20, with a minus on the middle term.',
          D:'The 9 and the 20 were copied straight into the factors. Those are the sum and the product you are SEARCHING for, not the numbers that go inside.'
        },
        tip:'For x² + bx + c with a leading coefficient of 1: two numbers whose product is c and whose sum is b. Test both conditions before writing anything, then expand to confirm.',
        desmos:'Graph y=x^2+9x+20 and y=(x+4)(x+5): one parabola, with x-intercepts at −4 and −5. A wrong pair shifts the curve visibly.',
        desmosLatex:['y=x^2+9x+20','y=(x+4)(x+5)']
      },
      {
        id:'EQW-09', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Fractional exponents (radical rewritten in exponent form)',
        stem:'For x > 0, which of the following is equivalent to ³√(x⁵)?',
        choices:{A:'x^(3/5)', B:'x¹⁵', C:'x²', D:'x^(5/3)'},
        correct:'D',
        expCorrect:'A radical becomes a fractional exponent with the POWER on top and the INDEX of the root on the bottom. Here the power is 5 and the index is 3, so ³√(x⁵) = x^(5/3). (Check with x = 8: 8⁵ = 32,768 and its cube root is 32, while 8^(5/3) = (8^(1/3))⁵ = 2⁵ = 32 ✓.)',
        expWrong:{
          A:'The index and the power were swapped. The index of the root always goes in the DENOMINATOR — a cube root is an exponent of 1/3, so the 3 belongs underneath.',
          B:'The 5 and the 3 were multiplied. A root DIVIDES the exponent; at x = 8 this gives a number in the trillions instead of 32.',
          C:'The index was subtracted from the power (5 − 3). Subtracting exponents is the rule for dividing powers, not for taking a root.'
        },
        tip:'ⁿ√(x^m) = x^(m/n): power on top, index of the root underneath. Square root → 1/2, cube root → 1/3; the root always lands in the denominator.',
        desmos:'Graph y=\\sqrt[3]{x^5} and y=x^{5/3} for x greater than 0: one curve. Adding y=x^{3/5} shows how far the swapped version drifts.',
        desmosLatex:['y=\\sqrt[3]{x^5}','y=x^{5/3}']
      },
      {
        id:'EQW-10', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Adding rational expressions (simple denominators)',
        stem:'Which of the following is equivalent to 5/(2x) + 1/x, where x ≠ 0?',
        choices:{A:'7/(2x)', B:'6/(3x)', C:'6/(2x)', D:'6/x'},
        correct:'A',
        expCorrect:'The common denominator is 2x. The first fraction already has it; rewrite the second by multiplying top and bottom by 2: 1/x = 2/(2x). Now add the NUMERATORS only: 5/(2x) + 2/(2x) = 7/(2x). (Check with x = 1: 5/2 + 1 = 3.5, and 7/2 = 3.5 ✓.)',
        expWrong:{
          B:'The tops and the bottoms were added straight across (5 + 1 over 2x + x). Fractions are never added that way; this equals 2/x, which at x = 1 gives 2, not 3.5.',
          C:'The common denominator is right, but the second numerator was not rescaled with it. Turning x into 2x doubles the top too: 1/x = 2/(2x), so the numerators are 5 and 2.',
          D:'The numerators were added and the 2 underneath was dropped. That 2 is part of the common denominator and does not disappear.'
        },
        tip:'Adding fractions changes only the NUMERATORS. Rewrite each one over the common denominator by multiplying its top and bottom by the same thing, add the tops, and write the denominator once.',
        desmos:'Graph y=5/(2x)+1/x and y=7/(2x): one curve. Add y=6/(3x) and it is clearly a different one.',
        desmosLatex:['y=5/(2x)+1/x','y=7/(2x)']
      },
      {
        id:'EQW-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Simplifying a rational expression (factor, then cancel)',
        stem:'Which of the following is equivalent to (2x² − 8)/(x² + 5x + 6), where x ≠ −2 and x ≠ −3?',
        choices:{A:'(x − 2)/(x + 3)', B:'−8/(5x + 6)', C:'2(x − 2)/(x + 3)', D:'2(x + 2)/(x + 3)'},
        correct:'C',
        expCorrect:'Factor both parts completely. Top: 2x² − 8 = 2(x² − 4) = 2(x − 2)(x + 2). Bottom: x² + 5x + 6 = (x + 2)(x + 3). The shared FACTOR (x + 2) cancels, leaving 2(x − 2)/(x + 3). (Check with x = 0: the original is −8/6 = −4/3, and 2(−2)/3 = −4/3 ✓.)',
        expWrong:{
          A:'The cancelling is right, but the 2 pulled out of the top was dropped along the way. Only (x + 2) cancels; at x = 0 this gives −2/3 instead of −4/3.',
          B:'The x² on top was crossed out against the x² on the bottom. Only FACTORS of the whole top and bottom cancel, and here x² is one addend inside a sum — you have to factor before anything cancels.',
          D:'The wrong half of the difference of squares was kept. Since x² − 4 = (x − 2)(x + 2), it is (x + 2) that cancels with the bottom, so (x − 2) is what survives on top.'
        },
        tip:'Factor the top and the bottom COMPLETELY before cancelling, and cancel only whole factors — never one term out of a sum. One easy value (x = 0 usually works) settles which option is right in seconds.',
        desmos:'Graph y=(2x^2-8)/(x^2+5x+6) and y=2(x-2)/(x+3): the same curve, except for the hole at x = −2 that cancelling removed.',
        desmosLatex:['y=(2x^2-8)/(x^2+5x+6)','y=2(x-2)/(x+3)']
      },
      {
        id:'EQW-12', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Subtracting rational expressions (simple denominators)',
        stem:'For x > 0, the expression 5/x − 2/(x + 3) is equivalent to (ax + 15)/(x² + 3x), where a is a constant. What is the value of a?',
        answer:'3',
        expCorrect:'The common denominator is the product x(x + 3) = x² + 3x, which is already the denominator shown. Rewrite each fraction over it: 5(x + 3)/[x(x + 3)] − 2x/[x(x + 3)]. Distribute in the first numerator and subtract: 5x + 15 − 2x = 3x + 15. So the expression is (3x + 15)/(x² + 3x), and a = 3. (Check with x = 1: 5 − 2/4 = 4.5, and (3 + 15)/(1 + 3) = 18/4 = 4.5 ✓.) Answer: 3.',
        expWrong:{},
        tip:'Common denominator = the product of the two denominators. Rescale each numerator by the OTHER denominator, then subtract the entire second numerator — the minus applies to every term it produces, which is where most of these go wrong.',
        desmos:'Graph y=5/x-2/(x+3) and y=(3x+15)/(x^2+3x) for x greater than 0: one curve. Swap in a=5 and the second graph separates.',
        desmosLatex:['y=5/x-2/(x+3)','y=(3x+15)/(x^2+3x)']
      }
    ]
  });
})();
