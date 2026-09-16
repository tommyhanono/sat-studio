/* SAT Studio question set — Math: Advanced Math — Brutal (BAG-01 to BAG-26) */
(function(){
  window.SAT_SETS.push({
    id: 'math-brutal-adv-g',
    title: 'Advanced Math — Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Twenty-six brutal Advanced Math items built to deepen the three thinnest corners of the hard bank: nine on equivalent expressions (a parameter chosen so a division comes out exact, a three-story fraction, nested rational exponents, a hidden difference of squares behind u = x², a rewrite that makes a business quantity readable), nine on nonlinear equations and systems (a parameter inside the discriminant, a square-root equation that manufactures an impostor, a denominator that quietly deletes one answer, p squared plus q squared instead of p and q), and eight on nonlinear functions (a vertex buried in a form that hides it, a rate quoted per year and asked per month, a piecewise rule evaluated exactly at its seam, a stacked transformation solved backwards, and a context maximum whose value is not the input that produces it).',
    minutes: 34,
    questions: [

      /* ================= Equivalent expressions (9) ================= */

      {
        id:'BAG-01', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Polynomial division with a parameter (choosing the constant that makes the quotient exact)',
        stem:'The expression (6x² + cx − 20)/(2x + 5) is equivalent to 3x − 4 for all x ≠ −5/2, where c is a constant. What is the value of c?',
        choices:{A:'15', B:'−7', C:'7', D:'23'},
        correct:'C',
        expCorrect:'If the quotient is exactly 3x − 4, then the numerator is the product of the divisor and the quotient. Multiply it out: (2x + 5)(3x − 4) = 6x² − 8x + 15x − 20 = 6x² + 7x − 20. Match that against 6x² + cx − 20 term by term: the x² terms agree (6 = 6), the constants agree (−20 = −20), and the middle terms force c = 7. Check by dividing: 6x² + 7x − 20 over 2x + 5 gives 3x with 6x² + 15x used up, leaving −8x − 20, which is exactly (2x + 5)(−4). Nothing is left over.',
        expWrong:{
          A:'15 comes from the outer product only, 5 · 3x = 15x. The middle term of a product of two binomials collects TWO pieces: 2x · (−4) = −8x as well, and −8 + 15 = 7.',
          B:'−7 has the two middle pieces the right size but the wrong way around: it is 8 − 15 instead of −8 + 15. The −4 multiplies the 2x and the +5 multiplies the 3x, so the negative piece is the smaller one.',
          D:'23 adds the two middle coefficients as if both were positive, 8 + 15. One of them carries the minus sign from the −4 in the quotient, so they partly cancel instead of piling up.'
        },
        tip:'When a division is stated as exact, stop dividing and multiply instead: divisor times quotient must reproduce the numerator, coefficient by coefficient. Matching the x² and constant terms first is free, and then a single equation pins the parameter down.',
        desmos:'Graph y = (6x^2 + 7x - 20)/(2x + 5) and y = 3x - 4 on the same screen. The two curves sit on top of each other everywhere except the single missing point at x = -2.5. Try c = 23 instead and the curve visibly peels away from the line.',
        desmosLatex:['y=\\frac{6x^2+7x-20}{2x+5}','y=3x-4']
      },

      {
        id:'BAG-02', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Remainder of a polynomial division by a linear divisor',
        stem:'The polynomial p is defined by p(x) = 2x³ − 5x² + 3x − 7. What is the remainder when p(x) is divided by x − 3?',
        choices:{A:'11', B:'−115', C:'18', D:'−7'},
        correct:'A',
        expCorrect:'Dividing by x − 3 leaves a remainder equal to p evaluated at the number that makes the divisor zero, and x − 3 = 0 at x = 3. So compute p(3) = 2(3)³ − 5(3)² + 3(3) − 7 = 2(27) − 5(9) + 9 − 7 = 54 − 45 + 9 − 7 = 11. Check the long way: 2x³ − 5x² + 3x − 7 = (x − 3)(2x² + x + 6) + 11, and expanding that product gives 2x³ + x² + 6x − 6x² − 3x − 18 = 2x³ − 5x² + 3x − 18, which plus 11 is p(x).',
        expWrong:{
          B:'−115 is p(−3). The divisor x − 3 is zero at x = +3, not at −3; the sign inside the divisor is already the opposite of the number you substitute.',
          C:'18 is 54 − 45 + 9, the calculation stopped one term early. The constant −7 of the polynomial still has to be added in.',
          D:'−7 is the remainder when dividing by x alone, which is p(0). Dividing by x − 3 shifts the evaluation point from 0 to 3.'
        },
        tip:'Divided by x − a, the remainder is p(a) — one substitution instead of a full long division. Read the number off the divisor by setting it equal to zero, which flips the sign you see written.',
        desmos:'Type p(x) = 2x^3 - 5x^2 + 3x - 7 in Desmos and then p(3) on its own line: it reads 11. Typing p(-3) reads -115, which is the trap option.',
        desmosLatex:['p(x)=2x^3-5x^2+3x-7','p(3)','p(-3)']
      },

      {
        id:'BAG-03', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Complex fraction built from a difference of reciprocals',
        stem:'For x &gt; 3, which expression is equivalent to (1/x − 1/3)/(x − 3)?',
        choices:{A:'1/(3x)', B:'−1/(3x(x − 3))', C:'−(x − 3)/(3x)', D:'−1/(3x)'},
        correct:'D',
        expCorrect:'Clear the top floor first. 1/x − 1/3 needs the common denominator 3x: it becomes 3/(3x) − x/(3x) = (3 − x)/(3x). Dividing by x − 3 means multiplying by 1/(x − 3), so the whole thing is (3 − x)/(3x(x − 3)). Now notice 3 − x = −(x − 3), so the expression is −(x − 3)/(3x(x − 3)), and the matching binomials cancel, leaving −1/(3x). Check with x = 4: the original is (1/4 − 1/3)/(4 − 3) = (−1/12)/1 = −1/12, and −1/(3 · 4) = −1/12 ✓.',
        expWrong:{
          A:'1/(3x) misses the sign. On the top floor the subtraction runs 1/x − 1/3, which produces 3 − x, and that is the NEGATIVE of the x − 3 sitting downstairs. Testing x = 4 gives −1/12, not +1/12.',
          B:'−1/(3x(x − 3)) is the penultimate step: the sign was handled but the cancellation was never done. Once the numerator is written as −(x − 3), the x − 3 on top and the x − 3 underneath divide out.',
          C:'−(x − 3)/(3x) multiplies by x − 3 instead of dividing by it. The x − 3 is the denominator of the big fraction, so it goes underneath, not on top.'
        },
        tip:'A three-story fraction is two separate jobs: combine the small fractions on the top floor into one, then turn the outer division into multiplication by the reciprocal. And when you see a − b upstairs and b − a downstairs, they are not the same thing, they differ by a factor of −1.',
        desmos:'Graph y = (1/x - 1/3)/(x - 3) and y = -1/(3x) together and they trace the same curve for x greater than 3. Graphing y = 1/(3x) instead shows a curve that is the mirror image across the x-axis.',
        desmosLatex:['y=\\frac{\\frac{1}{x}-\\frac{1}{3}}{x-3}','y=-\\frac{1}{3x}']
      },

      {
        id:'BAG-04', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Rational and negative exponents inside a nested radical',
        stem:'For x &gt; 0, the expression [√(x · ∛x) · x^(4/3)] / √x can be written in the form x^k, where k is a constant. What is the value of k?',
        answer:'3/2',
        expCorrect:'Turn every radical into an exponent and work from the inside out. Inside the square root: x · ∛x = x^1 · x^(1/3) = x^(1 + 1/3) = x^(4/3). Taking the square root of that multiplies the exponent by 1/2: √(x^(4/3)) = x^(4/3 · 1/2) = x^(2/3). Now multiply by x^(4/3): exponents add, 2/3 + 4/3 = 6/3 = 2, so the numerator is x². Finally divide by √x = x^(1/2): exponents subtract, 2 − 1/2 = 3/2. So k = 3/2. Check with x = 16: the numerator is √(16 · 2.5198) · 40.317 = 6.3496 · 40.317 = 256, and dividing by √16 = 4 gives 64, while 16^(3/2) = 64 ✓.',
        tip:'Never mix radicals and exponents in the same line of work. Rewrite every root as a fractional exponent first, then only three rules are left: multiply means add exponents, divide means subtract, a root or a power of a power means multiply.',
        desmos:'Enter y = (sqrt(x * x^(1/3)) * x^(4/3))/sqrt(x) and y = x^(3/2) on the same screen for x greater than 0: one curve. Then try y = x^2 or y = x^(1/2) and watch them separate immediately.',
        desmosLatex:['y=\\frac{\\sqrt{x\\cdot x^{1/3}}\\cdot x^{4/3}}{\\sqrt{x}}','y=x^{3/2}']
      },

      {
        id:'BAG-05', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'A difference of squares hidden behind the substitution u = x²',
        stem:'Which of the following is equivalent to 9x⁴ − 40x² + 16?',
        choices:{A:'(9x² − 4)(x² + 4)', B:'(3x − 2)(3x + 2)(x − 2)(x + 2)', C:'(3x − 4)(3x + 4)(x − 1)(x + 1)', D:'(9x − 4)(x − 4)'},
        correct:'B',
        expCorrect:'Let u = x², so 9x⁴ − 40x² + 16 becomes 9u² − 40u + 16. Split the middle term: 9 · 16 = 144, and the pair that multiplies to 144 and adds to −40 is −36 and −4. So 9u² − 36u − 4u + 16 = 9u(u − 4) − 4(u − 4) = (9u − 4)(u − 4). Put x² back: (9x² − 4)(x² − 4). Both pieces are now a difference of two squares: 9x² − 4 = (3x − 2)(3x + 2) and x² − 4 = (x − 2)(x + 2). The full product is (3x − 2)(3x + 2)(x − 2)(x + 2). Check at x = 1: the original is 9 − 40 + 16 = −15, and the product is (1)(5)(−1)(3) = −15 ✓.',
        expWrong:{
          A:'(9x² − 4)(x² + 4) has the right first piece but the wrong sign in the second. The two numbers must multiply to +16 and add to −40, so both are negative: the second piece is x² − 4. Testing x = 1 gives (5)(5) = 25 instead of −15.',
          C:'(3x − 4)(3x + 4)(x − 1)(x + 1) splits the 16 as 16 · 1 instead of 4 · 4. That choice gives a middle term of −(9 + 16) = −25 times x², not −40. At x = 1 it evaluates to (−1)(7)(0)(2) = 0.',
          D:'(9x − 4)(x − 4) is the u-form with x written back in place of u instead of x². The substitution was u = x², so u − 4 becomes x² − 4, and the degree has to return to 4.'
        },
        tip:'When a quartic only has even powers, name u = x² and the problem shrinks to a familiar three-term one. Two jobs remain after that: substitute x² back in — not x — and then check whether either piece is still a difference of squares, because these problems almost always hide a second round.',
        desmos:'Graph y = 9x^4 - 40x^2 + 16 and read the four x-intercepts: -2, -2/3, 2/3 and 2. Those are exactly the zeros of (3x-2)(3x+2)(x-2)(x+2), which confirms the product.',
        desmosLatex:['y=9x^4-40x^2+16','y=(3x-2)(3x+2)(x-2)(x+2)']
      },

      {
        id:'BAG-06', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Rewriting an expression in an equivalent form to read the greatest value off the context',
        stem:'The daily profit, in dollars, of a print shop that makes n posters a day is modeled by P(n) = −0.5n² + 60n − 1000. What is the greatest daily profit, in dollars, the model predicts?',
        choices:{A:'60', B:'1800', C:'800', D:'2800'},
        correct:'C',
        expCorrect:'Rewrite the rule so the top of the curve is readable. Pull −0.5 out of the first two terms: P(n) = −0.5(n² − 120n) − 1000. Half of 120 is 60 and 60² = 3600, so n² − 120n = (n − 60)² − 3600. Substituting back: P(n) = −0.5[(n − 60)² − 3600] − 1000 = −0.5(n − 60)² + 1800 − 1000 = −0.5(n − 60)² + 800. The squared piece is never negative and −0.5 times it is never positive, so P is largest when that piece is 0, at n = 60, and the value there is 800. Check directly: P(60) = −0.5(3600) + 3600 − 1000 = −1800 + 3600 − 1000 = 800 ✓.',
        expWrong:{
          A:'60 is the number of posters that produces the greatest profit, not the profit itself. The question asks for dollars, so that 60 still has to be run through the rule for P.',
          B:'1800 is the penultimate step: it is what you get after undoing the square but before folding in the −1000 that was sitting outside all along.',
          D:'2800 adds the 1000 instead of subtracting it, 1800 + 1000. The rule ends in −1000, so it lowers the top of the curve rather than raising it.'
        },
        tip:'A model written as a(n − h)² + k hands you both answers at once: h is the input that optimizes it and k is the optimal value. The question decides which one to report, and in a money problem it is almost always k.',
        desmos:'Graph y = -0.5x^2 + 60x - 1000 and use the maximum point Desmos marks: it sits at (60, 800). The 60 is on the horizontal axis and the 800 is the height, which is the distinction the question is testing.',
        desmosLatex:['y=-0.5x^2+60x-1000','y=800']
      },

      {
        id:'BAG-07', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Combining two rational expressions, with the parameters read off the numerator',
        stem:'The expression 3/(x − 2) − 5/(x + 1) is equivalent to (ax + b)/((x − 2)(x + 1)) for all x ≠ 2 and x ≠ −1, where a and b are constants. What is the value of a + b?',
        choices:{A:'11', B:'−9', C:'1', D:'−13'},
        correct:'A',
        expCorrect:'Give both fractions the common denominator (x − 2)(x + 1). The first one is missing the factor x + 1, so it becomes 3(x + 1)/((x − 2)(x + 1)); the second is missing x − 2, so it becomes 5(x − 2)/((x − 2)(x + 1)). Subtract the numerators, distributing the minus across BOTH terms: 3(x + 1) − 5(x − 2) = 3x + 3 − 5x + 10 = −2x + 13. So a = −2 and b = 13, and a + b = 11. Check at x = 0: the original is 3/(−2) − 5/1 = −1.5 − 5 = −6.5, and the rewritten form is (0 + 13)/((−2)(1)) = 13/(−2) = −6.5 ✓.',
        expWrong:{
          B:'−9 comes from 3x + 3 − 5x − 10, where the minus sign was distributed to the 5x but not to the −2 inside the parentheses. Subtracting 5(x − 2) means subtracting 5x AND adding 10.',
          C:'1 treats the subtraction as an addition: 3(x + 1) + 5(x − 2) = 8x − 7. The expression has a minus between the two fractions, and that sign belongs to the whole second numerator.',
          D:'−13 multiplies each numerator by its OWN denominator instead of the other one, giving 3(x − 2) − 5(x + 1) = −2x − 11. The missing factor for each fraction is the denominator it does not already have.'
        },
        tip:'Build the common denominator by asking what each fraction is MISSING, then subtract inside one set of parentheses before you distribute. Writing the minus sign in front of a parenthesis is what keeps the second constant from flipping the wrong way.',
        desmos:'Graph y = 3/(x-2) - 5/(x+1) and y = (-2x+13)/((x-2)(x+1)) together: identical curves. Graphing the trap y = (-2x-7)/((x-2)(x+1)) instead shows a visibly different pair of branches.',
        desmosLatex:['y=\\frac{3}{x-2}-\\frac{5}{x+1}','y=\\frac{-2x+13}{(x-2)(x+1)}']
      },

      {
        id:'BAG-08', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Exponent rules across three different bases, with a division on one side',
        stem:'If 9^(2x − 1) · 27^(x + 2) = 3^(x + 9)/81, what is the value of x?',
        answer:'1/6',
        expCorrect:'Write every base as a power of 3 so the two sides can be compared exponent to exponent. On the left: 9 = 3², so 9^(2x − 1) = 3^(2(2x − 1)) = 3^(4x − 2); and 27 = 3³, so 27^(x + 2) = 3^(3(x + 2)) = 3^(3x + 6). Multiplying adds exponents: the left side is 3^(4x − 2 + 3x + 6) = 3^(7x + 4). On the right: 81 = 3⁴, and dividing subtracts exponents, so 3^(x + 9)/3⁴ = 3^(x + 5). Equal powers of the same base force equal exponents: 7x + 4 = x + 5, so 6x = 1 and x = 1/6. Check: 7(1/6) + 4 = 7/6 + 24/6 = 31/6, and (1/6) + 5 = 1/6 + 30/6 = 31/6 ✓.',
        tip:'One base or nothing. Rewrite 4, 8, 9, 16, 27, 81 and the rest as powers of 2 or 3, remember that an outer exponent MULTIPLIES the inner one while a product ADDS them, and the whole problem collapses into one linear equation.',
        desmos:'Graph y = 9^(2x-1) * 27^(x+2) and y = 3^(x+9)/81 and click the crossing point: it reads x = 0.1667, which is 1/6. The curves are steep, so zoom in near the origin to see it clearly.',
        desmosLatex:['y=9^{2x-1}\\cdot 27^{x+2}','y=\\frac{3^{x+9}}{81}']
      },

      {
        id:'BAG-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Factoring a cubic by grouping, with two constants to recover',
        stem:'The expression 21x³ − 14x² − 9x + 6 is equivalent to (3x − 2)(ax² + b), where a and b are constants. What is the value of a + b?',
        choices:{A:'10', B:'−21', C:'−4', D:'4'},
        correct:'D',
        expCorrect:'Group the four terms in pairs and pull out what each pair shares. From 21x³ − 14x² take out 7x²: 7x²(3x − 2). From −9x + 6 take out −3, choosing the negative so the parenthesis matches: −3(3x − 2). Now both pairs carry the same 3x − 2, so the whole expression is (3x − 2)(7x² − 3). Matching that against (3x − 2)(ax² + b) gives a = 7 and b = −3, so a + b = 7 + (−3) = 4. Check by expanding: (3x − 2)(7x² − 3) = 21x³ − 9x − 14x² + 6 ✓.',
        expWrong:{
          A:'10 is 7 + 3: the sign of b was dropped. The second pair is −9x + 6, and pulling out a POSITIVE 3 would leave −3x + 2, which is not the same parenthesis as 3x − 2, so the constant has to come out as −3.',
          B:'−21 multiplies a and b instead of adding them, 7 · (−3). The question asks for a + b.',
          C:'−4 flips both signs at once, as if the product were (3x − 2)(−7x² + 3). Expanding that gives −21x³ + 14x² + 9x − 6, the negative of the original expression.'
        },
        tip:'Grouping only works if the two parentheses come out IDENTICAL, and the sign you pull out of the second pair is what makes that happen. If the leftover parenthesis is the opposite of the first, pull out the negative instead and try again.',
        desmos:'Graph y = 21x^3 - 14x^2 - 9x + 6 and y = (3x-2)(7x^2-3): the same curve. The visible x-intercept at x = 0.667 is the 3x - 2 piece, and the two near x = ±0.655 come from 7x^2 - 3.',
        desmosLatex:['y=21x^3-14x^2-9x+6','y=(3x-2)(7x^2-3)']
      },

      /* ============ Nonlinear equations and systems (9) ============ */

      {
        id:'BAG-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Discriminant carrying a parameter (exactly one real solution)',
        stem:'In the equation 2x² + kx + 18 = 0, k is a positive constant. If the equation has exactly one real solution, what is the value of k?',
        choices:{A:'6', B:'12', C:'144', D:'−12'},
        correct:'B',
        expCorrect:'Exactly one real solution means the quantity under the square root in the formula is zero: b² − 4ac = 0. Here a = 2, b = k and c = 18, so k² − 4(2)(18) = 0, which is k² − 144 = 0 and therefore k² = 144. That gives k = 12 or k = −12, and the stem says k is positive, so k = 12. Check: 2x² + 12x + 18 = 2(x² + 6x + 9) = 2(x + 3)², which touches zero only at x = −3 ✓.',
        expWrong:{
          A:'6 divides the final answer by the leading coefficient 2, as if the 2 in 2x² still had to be removed at the end. The 2 is already accounted for inside 4ac.',
          C:'144 is the penultimate step. k² = 144 is not k; the square root still has to be taken.',
          D:'−12 is the other square root of 144 and is discarded by the stem, which states that k is positive. Both signs make the curve touch the axis once, so the condition in the sentence is what decides.'
        },
        tip:'Under the square root lives the whole story: b² − 4ac equal to zero means one real answer, greater than zero means two, less than zero means none. After you take a square root you have TWO candidates, and the sentence in the stem is there to kill one of them.',
        desmos:'Graph y = 2x^2 + 12x + 18 and watch it touch the x-axis at exactly one point, x = -3. Add a slider for k in y = 2x^2 + kx + 18 and drag it: below 12 the curve floats clear of the axis, above 12 it cuts through twice.',
        desmosLatex:['y=2x^2+kx+18','k=12','y=0']
      },

      {
        id:'BAG-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Discriminant carrying a parameter (no real solutions)',
        stem:'In the equation x² − 6x + k = 0, k is a constant and the equation has no real solutions. Which of the following describes all possible values of k?',
        choices:{A:'k &gt; 9', B:'k &lt; 9', C:'k ≥ 9', D:'k &gt; 36'},
        correct:'A',
        expCorrect:'No real solutions means the quantity under the square root is negative: b² − 4ac &lt; 0. With a = 1, b = −6 and c = k, that is (−6)² − 4(1)(k) &lt; 0, so 36 − 4k &lt; 0. Subtract 36 from both sides: −4k &lt; −36. Now divide by −4, a NEGATIVE, so the inequality flips: k &gt; 9. Check k = 10: 36 − 40 = −4, negative, no real answers ✓. Check k = 8: 36 − 32 = 4, positive, so there are two ✓.',
        expWrong:{
          B:'k &lt; 9 divides by −4 without flipping the symbol. Dividing an inequality by a negative number reverses its direction; a quick test settles it, because k = 0 gives x² − 6x = 0, which does have real answers.',
          C:'k ≥ 9 sweeps in the boundary value. At k = 9 the expression under the root is 36 − 36 = 0, which is exactly one real answer, not none, so 9 itself has to be excluded.',
          D:'k &gt; 36 drops the 4 in 4ac, solving 36 − k &lt; 0 instead. The coefficient a is 1 here, but the 4 in the formula is always there.'
        },
        tip:'Translate the words into the sign of b² − 4ac before touching any algebra: none means negative, one means zero, two means positive. Then treat the inequality like any other — dividing by a negative flips it — and check whether the boundary itself belongs, because the endpoint is what separates one answer from none.',
        desmos:'Graph y = x^2 - 6x + k with a slider for k. The curve lifts completely off the x-axis the moment k passes 9, and at exactly k = 9 it rests on the axis at x = 3, which is the case the strict inequality excludes.',
        desmosLatex:['y=x^2-6x+k','k=9','y=0']
      },

      {
        id:'BAG-12', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Choosing between two solutions, then reporting a² − a instead of a',
        stem:'The equation 2x² − 9x + 4 = 0 has two solutions. If a is the greater of the two, what is the value of a² − a?',
        answer:'12',
        expCorrect:'Use the formula with a = 2, b = −9, c = 4. Under the root: (−9)² − 4(2)(4) = 81 − 32 = 49, and √49 = 7. So x = (9 ± 7)/4, which gives x = 16/4 = 4 and x = 2/4 = 1/2. The greater one is a = 4. Now answer what was asked: a² − a = 4² − 4 = 16 − 4 = 12. Check that 4 really is a solution: 2(16) − 9(4) + 4 = 32 − 36 + 4 = 0 ✓.',
        tip:'These problems finish one step after you think they do. Circle what the last sentence actually asks for before you start, so the number you grid is the one requested and not the intermediate value you just worked so hard to find.',
        desmos:'Graph y = 2x^2 - 9x + 4 and click the two x-intercepts: 0.5 and 4. Then type 4^2 - 4 on its own line to see 12.',
        desmosLatex:['y=2x^2-9x+4','y=0']
      },

      {
        id:'BAG-13', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Square-root equation that manufactures an extraneous solution',
        stem:'What is the sum of all solutions to the equation √(x + 7) = x − 5?',
        choices:{A:'2', B:'11', C:'9', D:'18'},
        correct:'C',
        expCorrect:'Square both sides: x + 7 = (x − 5)² = x² − 10x + 25. Bring everything to one side: 0 = x² − 11x + 18, which splits as (x − 2)(x − 9) = 0, so the candidates are x = 2 and x = 9. Squaring can invent answers, so test both in the ORIGINAL equation. x = 9: the left side is √16 = 4 and the right side is 9 − 5 = 4 ✓. x = 2: the left side is √9 = 3 and the right side is 2 − 5 = −3, and 3 does not equal −3, so 2 is an impostor and is thrown out. Only x = 9 survives, so the sum of all solutions is 9.',
        expWrong:{
          A:'2 is the impostor itself. It satisfies the squared equation but not the original one, because a square root is never negative while 2 − 5 is.',
          B:'11 adds both candidates, 2 + 9, without testing either. Squaring both sides is not a reversible step, so every candidate it produces has to be checked against the original.',
          D:'18 is the product of the two candidates rather than their sum, and it also keeps the one that fails the check.'
        },
        tip:'Squaring both sides can only add answers, never lose them, so every candidate must go back into the original equation. The fastest screen: the square root on the left is never negative, so any candidate that makes the other side negative is dead on arrival.',
        desmos:'Graph y = sqrt(x + 7) and y = x - 5 on the same screen. They cross only once, at x = 9. There is no crossing at x = 2 because the line is below the axis there, which is exactly why that candidate fails.',
        desmosLatex:['y=\\sqrt{x+7}','y=x-5']
      },

      {
        id:'BAG-14', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Nonlinear system of a line and a parabola (difference of the x-coordinates)',
        stem:'In the xy-plane, the graph of y = x² + 3x − 4 and the line y = 5x + 11 meet at two points. What is the positive difference of the x-coordinates of those two points?',
        choices:{A:'2', B:'15', C:'40', D:'8'},
        correct:'D',
        expCorrect:'At a meeting point both rules give the same y, so set them equal: x² + 3x − 4 = 5x + 11. Move everything to one side: x² − 2x − 15 = 0, which splits as (x − 5)(x + 3) = 0. The two x-coordinates are 5 and −3. Their positive difference is 5 − (−3) = 5 + 3 = 8. Check one point: at x = 5 the curve gives 25 + 15 − 4 = 36 and the line gives 25 + 11 = 36 ✓.',
        expWrong:{
          A:'2 is the SUM of the two x-coordinates, 5 + (−3). Subtracting a negative adds, so the difference is 8 while the sum is 2 — the same two numbers give very different results.',
          B:'15 is the product of the two x-coordinates with its sign dropped, read straight off the constant of x² − 2x − 15. That number is −15, and it is a product, not a difference.',
          C:'40 is the difference of the Y-coordinates: the points are (5, 36) and (−3, −4), and 36 − (−4) = 40. The question asks about the x-coordinates.'
        },
        tip:'Two graphs meet where their rules are equal, so set them equal and collect on one side — the result is a single equation in x. Then read the question one more time: sum, difference, product and the y-values are four different answers sitting in the same problem.',
        desmos:'Graph y = x^2 + 3x - 4 and y = 5x + 11 and click both crossings: (-3, -4) and (5, 36). The horizontal gap between them is 8, and the vertical gap is 40, which is the trap option.',
        desmosLatex:['y=x^2+3x-4','y=5x+11']
      },

      {
        id:'BAG-15', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Rational equation whose denominator rules out one of the two solutions',
        stem:'Which of the following gives all values of x that satisfy the equation x²/(x − 2) = 4/(x − 2) + 3?',
        choices:{A:'2 only', B:'1 only', C:'1 and 2', D:'No value of x'},
        correct:'B',
        expCorrect:'Before anything else, note that x − 2 sits in a denominator, so x = 2 is forbidden no matter what the algebra produces. Multiply every term by x − 2: x² = 4 + 3(x − 2) = 4 + 3x − 6 = 3x − 2. Rearranged, x² − 3x + 2 = 0, which splits as (x − 1)(x − 2) = 0, giving candidates x = 1 and x = 2. The candidate x = 2 is exactly the value the denominator forbids, so it is thrown out. Only x = 1 remains. Check x = 1: the left side is 1/(1 − 2) = −1, and the right side is 4/(−1) + 3 = −4 + 3 = −1 ✓.',
        expWrong:{
          A:'2 only keeps the forbidden value and discards the good one. Substituting x = 2 into the original equation makes both denominators zero, which is undefined, so 2 can never be an answer here.',
          C:'1 and 2 is the algebra done correctly with the domain check skipped. Multiplying by x − 2 is only legal when x − 2 is not zero, so that step quietly adds x = 2 as a candidate.',
          D:'No value of x assumes both candidates are forbidden. Only x = 2 makes a denominator zero; x = 1 is perfectly legal and does satisfy the original equation.'
        },
        tip:'Write down the forbidden values the instant you see a variable in a denominator, before you clear it. Multiplying through is what creates impostors, and the list you wrote at the start is what removes them at the end.',
        desmos:'Graph y = x^2/(x-2) and y = 4/(x-2) + 3. They cross at x = 1 only. At x = 2 both curves have a vertical asymptote and neither has a point there, which is the visual version of the restriction.',
        desmosLatex:['y=\\frac{x^2}{x-2}','y=\\frac{4}{x-2}+3']
      },

      {
        id:'BAG-16', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Sum and product of the two solutions, reporting p² + q²',
        stem:'The equation 3x² + bx − 21 = 0 has two solutions, p and q, where b is a constant and p + q = 5. What is the value of p² + q²?',
        answer:'39',
        expCorrect:'For any equation of the form ax² + bx + c = 0, the two answers add to −b/a and multiply to c/a — no need to find them individually. Here a = 3 and c = −21, so the product is pq = −21/3 = −7. The sum is given: p + q = 5. Now use the identity (p + q)² = p² + 2pq + q², which rearranges to p² + q² = (p + q)² − 2pq = 5² − 2(−7) = 25 + 14 = 39. Check by finding b: −b/3 = 5 gives b = −15, so the equation is 3x² − 15x − 21 = 0, or x² − 5x − 7 = 0, whose answers are (5 ± √53)/2. Adding their squares gives (25 + 53)/2 = 39 ✓.',
        tip:'Sum equals −b/a and product equals c/a lets you answer questions about the two solutions without ever computing them. The bridge to squares is (p + q)² = p² + 2pq + q², and subtracting a negative product is where the sign mistakes happen.',
        desmos:'Set b = -15 and graph y = 3x^2 - 15x - 21. Click both x-intercepts, square each one, and add: the total reads 39, which confirms the identity without the shortcut.',
        desmosLatex:['y=3x^2-15x-21','y=0']
      },

      {
        id:'BAG-17', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Nonlinear system with a parameter (exactly one real solution)',
        stem:'The system of equations y = x² + 4 and y = 2x + c has exactly one real solution, where c is a constant. What is the value of c?',
        choices:{A:'3', B:'4', C:'5', D:'12'},
        correct:'A',
        expCorrect:'Set the two rules equal, since a shared point has the same y: x² + 4 = 2x + c. Collect on one side: x² − 2x + (4 − c) = 0. One real solution means the quantity under the square root is zero: (−2)² − 4(1)(4 − c) = 0, so 4 − 16 + 4c = 0, then 4c = 12 and c = 3. Check: with c = 3 the equation is x² − 2x + 1 = 0, which is (x − 1)² = 0, meeting only at x = 1, where both rules give y = 5 ✓.',
        expWrong:{
          B:'4 is the constant already visible in y = x² + 4. That number is where the curve sits on the y-axis, and it has nothing to do with where the line just touches it.',
          C:'5 comes from adding instead of subtracting inside the discriminant: 4 + 4(4 − c) = 0 gives 4 + 16 − 4c = 0 and c = 5. The formula is b² − 4ac, so the 4ac piece is always subtracted.',
          D:'12 is the penultimate step. The line 4c = 12 still has to be divided by 4.'
        },
        tip:'A line and a parabola sharing exactly one point is the same statement as a single equation with b² − 4ac = 0. Substitute first, collect into the standard three-term form, and only then read off a, b and c — the c of the stem is buried inside the constant term, not next to x.',
        desmos:'Graph y = x^2 + 4 and y = 2x + c with a slider for c. Drag it: below 3 the line misses the curve entirely, above 3 it slices through twice, and at exactly 3 it grazes the curve at (1, 5).',
        desmosLatex:['y=x^2+4','y=2x+c','c=3']
      },

      {
        id:'BAG-18', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Quadratic in disguise (greatest of the four solutions)',
        stem:'If (x² − 7)² − 5(x² − 7) − 36 = 0, what is the greatest value of x that satisfies the equation?',
        answer:'4',
        expCorrect:'The same block x² − 7 appears twice, so call it u. The equation becomes u² − 5u − 36 = 0, which splits as (u − 9)(u + 4) = 0 because −9 and +4 multiply to −36 and add to −5. So u = 9 or u = −4. Now undo the substitution, one branch at a time. If x² − 7 = 9, then x² = 16, so x = 4 or x = −4. If x² − 7 = −4, then x² = 3, so x = √3 ≈ 1.73 or x = −√3. All four values work, and the greatest of them is 4. Check x = 4: x² − 7 = 9, and 9² − 5(9) − 36 = 81 − 45 − 36 = 0 ✓.',
        tip:'When one block repeats, name it and the problem shrinks to three terms. The trap is stopping once you have the value of the block: each branch has to be pushed all the way back to x, and a branch of the form x² = positive number contributes TWO values, not one.',
        desmos:'Graph y = (x^2 - 7)^2 - 5(x^2 - 7) - 36 and look at the x-intercepts: -4, -1.73, 1.73 and 4. Four crossings for a single substitution is exactly what the two branches predict.',
        desmosLatex:['y=(x^2-7)^2-5(x^2-7)-36','y=0']
      },

      /* ================== Nonlinear functions (8) ================== */

      {
        id:'BAG-19', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Vertex of a parabola given in a form that hides it',
        stem:'The graph of the function f(x) = −2x² + 12x − 23 in the xy-plane has its highest point at (h, k). What is the value of h + k?',
        choices:{A:'3', B:'−8', C:'−2', D:'8'},
        correct:'C',
        expCorrect:'The turning point of a curve written as ax² + bx + c sits at h = −b/(2a). Here a = −2 and b = 12, so h = −12/(2 · (−2)) = −12/(−4) = 3. The height there is k = f(3) = −2(3)² + 12(3) − 23 = −2(9) + 36 − 23 = −18 + 36 − 23 = −5. So the top is at (3, −5) and h + k = 3 + (−5) = −2. Check the symmetry: f(2) = −8 + 24 − 23 = −7 and f(4) = −32 + 48 − 23 = −7, equal heights on either side of x = 3, exactly as the turning point requires ✓.',
        expWrong:{
          A:'3 is h alone. The question asks for h + k, so the height of the turning point still has to be computed and added.',
          B:'−8 uses h = −3, from writing −b/(2a) as −12/4 and forgetting that a itself is negative. With a = −2 the denominator is −4, so the sign of h flips back to positive.',
          D:'8 is 3 + 5, the height taken as positive. The curve opens downward and its top sits below the x-axis: f(3) = −5, not +5.'
        },
        tip:'Find h = −b/(2a) first, then feed h back into the rule to get k — k is never readable directly from ax² + bx + c. Watch the sign of a in the denominator, because a negative leading coefficient flips h and is also what makes the turning point a maximum rather than a minimum.',
        desmos:'Graph y = -2x^2 + 12x - 23 and click the top of the arch: Desmos labels it (3, -5). Adding the two coordinates gives -2.',
        desmosLatex:['y=-2x^2+12x-23','(3,-5)']
      },

      {
        id:'BAG-20', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Exponential decay with the rate given per year and the question asked per month',
        stem:'The value of a delivery van is 24,000 dollars today and decreases by 18 percent each year. Which function gives the value of the van, in dollars, m months from today?',
        choices:{A:'24,000(0.82)^(12m)', B:'24,000(0.18)^(m/12)', C:'24,000(0.985)^m', D:'24,000(0.82)^(m/12)'},
        correct:'D',
        expCorrect:'Losing 18 percent a year means keeping 100 − 18 = 82 percent of the value each year, so the yearly multiplier is 0.82 and the rule in YEARS is 24,000(0.82)^t. The question counts months, and m months is m/12 years, so substitute t = m/12: the value is 24,000(0.82)^(m/12). Check after one full year, m = 12: 24,000(0.82)^(12/12) = 24,000(0.82) = 19,680, which is 24,000 minus 18 percent ✓.',
        expWrong:{
          A:'24,000(0.82)^(12m) applies a full year of loss every month. At m = 12 it would give 24,000(0.82)^144, essentially zero, when the van should still be worth 19,680 dollars after one year.',
          B:'24,000(0.18)^(m/12) uses the percentage LOST as the multiplier. A multiplier of 0.18 would leave only 18 percent of the value each year, which is a 82 percent loss, not an 18 percent one.',
          C:'24,000(0.985)^m splits the 18 percent evenly across the 12 months and subtracts, treating the loss as if it added up in a straight line. Percentage change compounds, so the yearly rate is converted with the EXPONENT m/12, never by dividing the rate itself.'
        },
        tip:'Build the model in the period the rate was quoted in, then convert the time variable, not the rate: t years becomes m/12 when the clock is in months, and t years becomes 12m when the rate was quoted per month. And a decrease of r percent gives a multiplier of 1 − r, which you subtract from 1 before it ever reaches the exponent.',
        desmos:'Graph y = 24000(0.82)^(x/12) and y = 24000(0.82)^(12x) on the same screen for x from 0 to 24. The first curve passes through (12, 19680) and the second collapses to the axis almost immediately.',
        desmosLatex:['y=24000(0.82)^{x/12}','y=24000(0.82)^{12x}','(12,19680)']
      },

      {
        id:'BAG-21', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Piecewise function evaluated exactly at the point where the rule changes',
        stem:'The function g is defined by g(x) = 3x + 7 for x ≤ 2, and g(x) = x² − 4x + 19 for x &gt; 2. What is the value of g(2) + g(5)?',
        answer:'37',
        expCorrect:'Pick the branch by reading its condition, not by which looks easier. For g(2): the first branch covers x ≤ 2, and 2 satisfies x ≤ 2 because the symbol includes equality, so g(2) = 3(2) + 7 = 6 + 7 = 13. The second branch covers x &gt; 2 strictly, so it does NOT apply at x = 2. For g(5): 5 is greater than 2, so the second branch applies and g(5) = 5² − 4(5) + 19 = 25 − 20 + 19 = 24. Add them: 13 + 24 = 37. (Using the wrong branch at x = 2 would have given 4 − 8 + 19 = 15 and a total of 39, which is why the symbol matters.)',
        tip:'At the seam of a piecewise rule, the inclusive symbol wins: exactly one branch carries ≤ or ≥, and that is the branch that owns the boundary value. Circle the condition before you substitute, because the two branches usually disagree there on purpose.',
        desmos:'Enter the piecewise rule in Desmos with braces, taking the branch 3x + 7 on x at most 2 and the branch x^2 - 4x + 19 beyond 2, and then type g(2) and g(5) on their own lines: 13 and 24. The graph shows the filled point at (2, 13) and the open circle just above it.',
        desmosLatex:['g(x)=\\left\\{x\\le 2:3x+7,x>2:x^2-4x+19\\right\\}','g(2)','g(5)']
      },

      {
        id:'BAG-22', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Stacked transformation of a function, solved backwards from a known point',
        stem:'The graph of y = f(x) in the xy-plane passes through the point (8, −3). The function h is defined by h(x) = f(2x − 3) + 1. Which point must lie on the graph of y = h(x)?',
        choices:{A:'(13, −2)', B:'(5.5, −2)', C:'(11, −2)', D:'(5.5, −4)'},
        correct:'B',
        expCorrect:'The only fact available about f is that f(8) = −3, so the useful input to h is the one that feeds 8 into f. Set the inside equal to 8: 2x − 3 = 8, so 2x = 11 and x = 5.5. Then h(5.5) = f(2(5.5) − 3) + 1 = f(8) + 1 = −3 + 1 = −2. The point is (5.5, −2). Check the direction of the reasoning: the inside of a function is solved BACKWARDS, so the horizontal move is the inverse of what the expression looks like, while the +1 on the outside acts directly on the output.',
        expWrong:{
          A:'(13, −2) runs the inside transformation forwards, computing 2(8) − 3 = 13. That would answer the question of where f sends 13, but what is known is the OUTPUT of f at 8, so 8 has to be the value the inside produces.',
          C:'(11, −2) stops at the penultimate step, 2x = 11, without dividing by 2.',
          D:'(5.5, −4) subtracts the 1 instead of adding it. The +1 sits outside f, so it raises every output by one: −3 becomes −2, not −4.'
        },
        tip:'Split any transformation into inside and outside. Whatever is inside acts on x and is undone backwards — set the inside expression equal to the known input and solve. Whatever is outside acts on y and is applied forwards, exactly as written.',
        desmos:'Define f(x) = (x - 8)^2 - 3, a curve through (8, -3), then graph y = f(2x - 3) + 1. Its lowest point sits at (5.5, -2), and moving the 8 in the definition moves that point in the way the algebra predicts.',
        desmosLatex:['f(x)=(x-8)^2-3','y=f(2x-3)+1','(5.5,-2)']
      },

      {
        id:'BAG-23', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Horizontal asymptote of a rational function with a negative leading coefficient',
        stem:'The function f is defined by f(x) = (6x² − 5x + 2)/(3 − 2x²). The graph of y = f(x) in the xy-plane has a horizontal asymptote at y = a. What is the value of a?',
        choices:{A:'−3', B:'0', C:'2/3', D:'3'},
        correct:'A',
        expCorrect:'When the top and bottom have the same degree, the far-away behavior is decided by the leading coefficients alone, because every lower power becomes negligible. The top is 6x² − 5x + 2, whose leading coefficient is 6. The bottom is written as 3 − 2x², so reorder it as −2x² + 3, whose leading coefficient is −2. Therefore a = 6/(−2) = −3. Check with a large input, x = 1000: the top is about 6,000,000 and the bottom is about −2,000,000, and the quotient is about −3 ✓.',
        expWrong:{
          B:'0 is the rule for when the top has a LOWER degree than the bottom. Both are degree 2 here, so the curve levels off at a nonzero height instead of flattening onto the x-axis.',
          C:'2/3 divides the constant terms, 2 and 3. Constants control behavior near x = 0, not far out, where the squared terms dominate everything else.',
          D:'3 reads the bottom left to right and treats 3 as its leading coefficient, or else drops the minus sign on −2x². Written in descending order the bottom is −2x² + 3, so the quotient of the leading coefficients is negative.'
        },
        tip:'Compare degrees first: bottom bigger means the level is y = 0, equal degrees means the level is the quotient of the leading coefficients, top bigger means there is no horizontal level at all. Always rewrite both parts in descending order before reading a coefficient, because a term written first is not always the leading one.',
        desmos:'Graph y = (6x^2 - 5x + 2)/(3 - 2x^2) together with y = -3 and zoom out. The curve hugs the line y = -3 on both sides, while y = 3 sits on the wrong side of the picture entirely.',
        desmosLatex:['y=\\frac{6x^2-5x+2}{3-2x^2}','y=-3']
      },

      {
        id:'BAG-24', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Maximum value of a function that models a context, not the input that produces it',
        stem:'A stone is launched upward from a platform, and its height above the ground, in feet, t seconds after launch is given by h(t) = −16t² + 64t + 12. What is the greatest height above the ground, in feet, that the stone reaches?',
        choices:{A:'2', B:'12', C:'76', D:'64'},
        correct:'C',
        expCorrect:'The path is an arch opening downward, so its highest point is at the turning point, t = −b/(2a) = −64/(2 · (−16)) = −64/(−32) = 2 seconds. That is WHEN, not how high. Substitute it back: h(2) = −16(2)² + 64(2) + 12 = −16(4) + 128 + 12 = −64 + 128 + 12 = 76 feet. Check the symmetry: h(1) = −16 + 64 + 12 = 60 and h(3) = −144 + 192 + 12 = 60, equal heights one second on either side of t = 2 ✓.',
        expWrong:{
          A:'2 is the time in seconds at which the stone is highest, not the height. It is the input that has to be pushed back through the rule to answer the question in feet.',
          B:'12 is h(0), the height of the platform the stone starts from. The stone rises well above that before falling back.',
          D:'64 is the coefficient of t, the launch speed in feet per second. It sets how fast the stone leaves the platform, not how high it gets.'
        },
        tip:'In a context problem the turning point answers two different questions, and the units tell you which one is wanted: seconds means the input, feet means the output. Find the input first, then always substitute it back — the greatest value is never the input itself.',
        desmos:'Graph y = -16x^2 + 64x + 12 and click the top of the arch: Desmos labels it (2, 76). The 2 is on the time axis and the 76 is the height, which is precisely the pair the question separates.',
        desmosLatex:['y=-16x^2+64x+12','(2,76)']
      },

      {
        id:'BAG-25', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Exponential growth with the rate asked over a shorter period than the model uses',
        stem:'The membership of a sports club is modeled by the exponential function M(t) = 240(1.44)^t, where t is the number of years since 2020. The membership grows by p percent every 6 months. What is the value of p?',
        answer:'20',
        expCorrect:'Six months is half a year, so the multiplier for one half-year is whatever number, used twice, produces the yearly multiplier 1.44. That is 1.44^(1/2) = √1.44 = 1.2. A multiplier of 1.2 means keeping 100 percent and adding 20 percent, so p = 20. Check: 1.2 · 1.2 = 1.44 ✓, and starting from 240, after six months there are 288, after a year 345.6, which matches 240(1.44)^1 ✓.',
        tip:'To move a rate to a shorter period, take the corresponding root of the MULTIPLIER, never divide the percentage. Half a year takes the square root, a month takes the twelfth root. Then convert back by subtracting 1: a multiplier of 1.2 is a 20 percent rise, not a 120 percent one.',
        desmos:'Graph y = 240(1.44)^x and y = 240(1.2)^(2x) on the same screen: one curve, which proves 1.2 is the half-year multiplier. Typing 1.44^0.5 on its own line reads 1.2.',
        desmosLatex:['y=240(1.44)^x','y=240(1.2)^{2x}','1.44^{0.5}']
      },

      {
        id:'BAG-26', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Minimum of a parabola recovered from its two x-intercepts',
        stem:'In the xy-plane, the graph of the function f crosses the x-axis at x = −4 and at x = 10, and the y-coordinate of its lowest point is −49. What is the value of f(0)?',
        choices:{A:'3', B:'−49', C:'40', D:'−40'},
        correct:'D',
        expCorrect:'A curve of this shape with x-intercepts at −4 and 10 can be written as f(x) = a(x + 4)(x − 10) for some constant a. The lowest point sits halfway between the intercepts, at x = (−4 + 10)/2 = 3. Its height is f(3) = a(3 + 4)(3 − 10) = a(7)(−7) = −49a, and the stem says that height is −49, so −49a = −49 and a = 1. Now evaluate at 0: f(0) = 1(0 + 4)(0 − 10) = (4)(−10) = −40. Check the intercepts: f(−4) = (0)(−14) = 0 ✓ and f(10) = (14)(0) = 0 ✓.',
        expWrong:{
          A:'3 is the x-coordinate of the lowest point, found on the way to the answer. The question asks for f(0), a height, not a horizontal position.',
          B:'−49 is the lowest height of the curve, which happens at x = 3. At x = 0 the curve has already started climbing back up, so f(0) is higher than the minimum.',
          C:'40 has the right size and the wrong sign. The product (0 + 4)(0 − 10) is (4)(−10), one positive factor and one negative one, so the result is negative — and it has to be, since 0 lies between the two x-intercepts where the curve is below the axis.'
        },
        tip:'Two x-intercepts hand you the shape for free: f(x) = a(x − r)(x − s), with the turning point exactly halfway between r and s. One more piece of information pins down a, and only then can any other height be computed.',
        desmos:'Graph y = (x + 4)(x - 10) and confirm the x-intercepts at -4 and 10 and the lowest point at (3, -49). Then click where the curve meets the y-axis: it reads (0, -40).',
        desmosLatex:['y=(x+4)(x-10)','(3,-49)','(0,-40)']
      }

    ]
  });
})();
