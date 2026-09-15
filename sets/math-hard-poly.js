/* SAT Studio question set — Math: Polynomials & Functions — Hard (HMP-01 a HMP-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-hard-poly',
    title: 'Polynomials & Functions — Hard',
    section: 'math',
    level: 'Difícil',
    description: 'Hard polynomial and rational functions — end behavior, zeros & multiplicity, factoring, remainder, fractional exponents, and function models.',
    minutes: 20,
    questions: [
      {
        id:'HMP-01', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Ceros y multiplicidad (tocar vs. cruzar)',
        stem:'The polynomial p is defined by p(x) = (x − 3)²(x + 1)(x − 5). At how many distinct values of x does the graph of y = p(x) touch the x-axis without crossing it?',
        choices:{A:'1', B:'2', C:'3', D:'0'},
        correct:'A',
        expCorrect:'A zero with EVEN multiplicity makes the graph touch the x-axis and bounce back (it does not cross it); one with ODD multiplicity crosses. The zeros are x = 3 (multiplicity 2, even → touches), x = −1 (multiplicity 1, crosses) and x = 5 (multiplicity 1, crosses). Only x = 3 touches without crossing, so the answer is 1.',
        expWrong:{
          B:'2 would count two bouncing zeros, but only (x − 3)² has even multiplicity. The factors (x + 1) and (x − 5) cross the axis.',
          C:'3 is the total number of distinct zeros, not how many bounce. Only the one with even multiplicity touches without crossing.',
          D:'0 would say the graph never touches the axis, but (x − 3)² does touch it at x = 3.'
        },
        tip:'Multiplicidad PAR → toca y rebota (no cruza). Multiplicidad IMPAR → cruza el eje. Cuenta solo los factores elevados a potencia par.'
      },
      {
        id:'HMP-02', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Comportamiento en los extremos (end behavior)',
        stem:'The function f is defined by f(x) = −2x³ + 5x² − 7. Which statement describes the end behavior of the graph of f?',
        choices:{
          A:'As x → −∞, f(x) → −∞; and as x → +∞, f(x) → +∞',
          B:'As x → −∞, f(x) → +∞; and as x → +∞, f(x) → +∞',
          C:'As x → −∞, f(x) → −∞; and as x → +∞, f(x) → −∞',
          D:'As x → −∞, f(x) → +∞; and as x → +∞, f(x) → −∞'
        },
        correct:'D',
        expCorrect:'End behavior is governed by the highest-degree term, −2x³. The degree is odd and the leading coefficient is negative, so the ends go in opposite directions with the sign flipped: as x → −∞, −2x³ → +∞; as x → +∞, −2x³ → −∞.',
        expWrong:{
          A:'This describes a cubic with a POSITIVE leading coefficient. The −2 flips both ends.',
          B:'Both ends heading to +∞ belongs to an EVEN degree (like x²), not a cubic. An odd degree gives opposite ends.',
          C:'Both ends heading to −∞ is also even degree (with a negative coefficient). A cubic never sends both ends the same way.'
        },
        tip:'Only the leading term matters. Odd degree → opposite ends; even degree → matching ends. A negative coefficient flips everything. Here −2x³: up on the left, down on the right.'
      },
      {
        id:'HMP-03', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Teorema del residuo',
        stem:'When the polynomial p(x) = 2x³ − 3x² + kx − 5 is divided by (x − 2), the remainder is 7. What is the value of the constant k?',
        choices:{A:'2', B:'3', C:'4', D:'6'},
        correct:'C',
        expCorrect:'By the remainder theorem, the remainder when dividing by (x − 2) is p(2). So p(2) = 2(8) − 3(4) + 2k − 5 = 16 − 12 + 2k − 5 = 2k − 1. Set it equal to 7: 2k − 1 = 7 → 2k = 8 → k = 4. (Check: 16 − 12 + 8 − 5 = 7 ✓.)',
        expWrong:{
          A:'2 es el valor que sustituyes (x = 2), no el resultado de despejar k.',
          B:'3 comes from an arithmetic slip; substituting correctly, 2k − 1 = 7 forces k = 4.',
          D:'6 probably comes from dropping the −1 (writing 2k = 12). The constant term leaves 2k − 1, not 2k.'
        },
        tip:'Remainder theorem: the remainder when dividing p(x) by (x − a) is p(a). Evaluate p(2), set it equal to the given remainder and solve. No long division needed.'
      },
      {
        id:'HMP-04', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Teorema del factor',
        stem:'The expression (x + 3) is a factor of the polynomial p(x) = x³ + 2x² − 5x + c, where c is a constant. What is the value of c?',
        choices:{A:'6', B:'12', C:'−3', D:'−6'},
        correct:'D',
        expCorrect:'By the factor theorem, if (x + 3) is a factor then p(−3) = 0. Substitute: (−3)³ + 2(−3)² − 5(−3) + c = −27 + 18 + 15 + c = 6 + c. Set it equal to 0: 6 + c = 0 → c = −6. (Check: −27 + 18 + 15 − 6 = 0 ✓.)',
        expWrong:{
          A:'6 is the result of the numeric part (−27 + 18 + 15) before solving; c has to cancel that 6, so c = −6.',
          B:'12 no cumple p(−3) = 0. Al sustituir x = −3 queda 6 + c, y solo c = −6 lo anula.',
          C:'−3 is the value of x you use (the root), not the value of c.'
        },
        tip:'Factor theorem: (x − a) is a factor ⇔ p(a) = 0. Here the factor is (x + 3), so a = −3. Evaluate p(−3), set it to 0 and solve for c.'
      },
      {
        id:'HMP-05', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Expresiones racionales (simplificar)',
        stem:'Which of the following is equivalent to (x² − 9) / (x² − x − 6), where x ≠ 3 and x ≠ −2?',
        choices:{A:'(x − 3)/(x + 2)', B:'(x − 3)/(x − 2)', C:'(x + 3)/(x + 2)', D:'(x + 3)/(x − 2)'},
        correct:'C',
        expCorrect:'Factor the top and the bottom: x² − 9 = (x − 3)(x + 3) and x² − x − 6 = (x − 3)(x + 2). The common factor (x − 3) cancels, leaving (x + 3)/(x + 2). (Check with x = 0: original = −9/−6 = 3/2; simplified = 3/2 ✓.)',
        expWrong:{
          A:'(x − 3)/(x + 2) cancela el factor equivocado: se cancela (x − 3), no (x + 3). Arriba queda (x + 3).',
          B:'(x − 3)/(x − 2) factoriza mal el denominador; x² − x − 6 = (x − 3)(x + 2), no (x − 2)(algo).',
          D:'(x + 3)/(x − 2) has the wrong denominator: the factor left on the bottom is (x + 2), not (x − 2).'
        },
        tip:'Factor the numerator and denominator separately, and cancel ONLY identical factors. Difference of squares: x² − 9 = (x − 3)(x + 3).'
      },
      {
        id:'HMP-06', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Rational equations (extraneous solutions)',
        stem:'What are all real solutions to the equation  12/(x² − 4) + 1 = 3/(x − 2) ?',
        choices:{A:'x = 1 only', B:'x = 2 only', C:'x = 1 and x = 2', D:'There is no real solution'},
        correct:'A',
        expCorrect:'Since x² − 4 = (x − 2)(x + 2), multiply everything by (x − 2)(x + 2): 12 + (x² − 4) = 3(x + 2) → x² + 8 = 3x + 6 → x² − 3x + 2 = 0 → (x − 1)(x − 2) = 0 → x = 1 or x = 2. But x = 2 zeroes the denominators, so it is an EXTRANEOUS solution and gets discarded. Only x = 1 is left. (Check x = 1: 12/(−3) + 1 = −3, and 3/(−1) = −3 ✓.)',
        expWrong:{
          B:'x = 2 zeroes the denominators (x − 2 and x² − 4), so it is not in the domain: it is an extraneous solution, not a valid one.',
          C:'x = 1 and x = 2 includes the extraneous root. Always check that no solution zeroes a denominator.',
          D:'There is a solution: x = 1 works perfectly. Only x = 2 gets discarded.'
        },
        tip:'In rational equations, solve as usual BUT discard any value that zeroes a denominator. Those are extraneous solutions. Here x = 2 falls out.'
      },
      {
        id:'HMP-07', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponentes fraccionarios',
        stem:'Which of the following is equivalent to (27x⁶)^(2/3), where x > 0?',
        choices:{A:'729x⁴', B:'18x⁴', C:'9x⁹', D:'9x⁴'},
        correct:'D',
        expCorrect:'Distribute the exponent 2/3 to each factor: 27^(2/3) · (x⁶)^(2/3). Since 27 = 3³, we get 27^(2/3) = (3³)^(2/3) = 3² = 9. And (x⁶)^(2/3) = x^(6·2/3) = x⁴. The result is 9x⁴. (Check with x = 1: (27)^(2/3) = 9 ✓.)',
        expWrong:{
          A:'729x⁴ squares 27 (27² = 729) without taking the cube root first. The 2/3 is a cube root and then a square: 27^(2/3) = 9.',
          B:'18x⁴ multiplies 27 · (2/3) = 18, treating the exponent as a factor. Exponents do not multiply the base like that.',
          C:'9x⁹ multiplica los exponentes de x mal: 6 · (2/3) = 4, no 9.'
        },
        tip:'a^(m/n) = the nth root of a, raised to m. Distribute the exponent to each factor. With powers of x, multiply the exponents: (x⁶)^(2/3) = x⁴.'
      },
      {
        id:'HMP-08', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponentes negativos',
        stem:'Which of the following is equivalent to (x⁻³ y²) / (x⁻⁵ y⁻¹), where x > 0 and y > 0?',
        choices:{A:'x⁸y', B:'x²y³', C:'y³/x⁸', D:'x²y'},
        correct:'B',
        expCorrect:'When dividing powers of the same base you subtract exponents. For x: −3 − (−5) = −3 + 5 = 2, so x². For y: 2 − (−1) = 3, so y³. The result is x²y³. (Check with x = y = 2: top 2⁻³·2² = 2⁻¹ = 1/2; bottom 2⁻⁵·2⁻¹ = 2⁻⁶ = 1/64; quotient = 64/2 = 32 = 2⁵ = x²y³ since 2²·2³ = 2⁵ ✓.)',
        expWrong:{
          A:'x⁸y suma los exponentes de x (−3 + 5 = ... da 2, no 8) y maneja mal la y. Al dividir se RESTAN: −3 − (−5) = 2.',
          C:'y³/x⁸ leaves the x in the denominator with exponent 8; but −3 − (−5) = +2, so the x moves up to the numerator as x².',
          D:'x²y drops the sign on the y exponent: 2 − (−1) = 3, so it is y³, not y.'
        },
        tip:'When dividing equal bases, SUBTRACT exponents: base^(top − bottom). Careful with double negatives: subtracting a negative adds.'
      },
      {
        id:'HMP-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponential vs. polynomial model',
        stem:'The functions f and g are defined by f(x) = 100x and g(x) = 2^x, for x > 0. Which statement best describes how the values of f and g compare as x increases?',
        choices:{
          A:'f(x) is greater than g(x) for every value of x > 0',
          B:'g(x) eventually exceeds f(x) and stays greater for all larger x',
          C:'f(x) and g(x) are equal for every value of x > 0',
          D:'g(x) is greater than f(x) for every value of x > 0'
        },
        correct:'B',
        expCorrect:'f grows LINEARLY (a constant 100 per unit) and g grows EXPONENTIALLY (doubling every unit). At first the linear one wins: at x = 5, f = 500 but g = 32. However, an exponential model always ends up overtaking a linear one: at x = 10, g = 1024 > f = 1000, and from there on g stays above. That is why g eventually overtakes and stays greater.',
        expWrong:{
          A:'False: even though f wins at first, g overtakes it for large x (at x = 10, for instance). The exponential does not stay behind forever.',
          C:'They are not equal for every x; their values only cross at one point, they do not coincide everywhere.',
          D:'False at the start: at x = 1, f = 100 but g = 2, so f begins far larger. g is not greater "always".'
        },
        tip:'Key SAT rule: a growing exponential function ALWAYS ends up overtaking any linear or polynomial one, even if it starts out lower. "Eventually" is the word that gives the answer away.'
      },
      {
        id:'HMP-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Composition of functions',
        stem:'The functions f and g are defined by f(x) = 3x − 4 and g(x) = x² + 2. What is the value of g(f(3))?',
        choices:{A:'11', B:'29', C:'27', D:'23'},
        correct:'C',
        expCorrect:'Work from the inside out. First f(3) = 3(3) − 4 = 5. Then g(5) = 5² + 2 = 25 + 2 = 27. So g(f(3)) = 27.',
        expWrong:{
          A:'11 es g(3) = 3² + 2, es decir, aplicaste solo g al 3 y olvidaste evaluar f primero.',
          B:'29 es f(g(3)) = 3(11) − 4, o sea invertiste el orden. g(f(3)) aplica f primero, luego g.',
          D:'23 olvida el "+ 2" de g: 5² = 25 y sumas 2 → 27, no 23 (o evaluaste g(3²) mal).'
        },
        tip:'g(f(3)) se lee de adentro hacia afuera: calcula f(3) primero y ese resultado entra a g. El orden importa: g(f(x)) ≠ f(g(x)).'
      },
      {
        id:'HMP-11', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Ceros de un polinomio (forma factorizada)',
        stem:'The polynomial p is defined by p(x) = x³ − 7x² + 10x. What is the greatest value of x for which p(x) = 0?',
        answer:'5',
        expCorrect:'Factor out the common x: p(x) = x(x² − 7x + 10) = x(x − 2)(x − 5). A product is zero when some factor is zero, so the zeros are x = 0, x = 2 and x = 5. The largest is 5. (Check: p(5) = 125 − 175 + 50 = 0 ✓.) Answer: 5.',
        expWrong:{},
        tip:'First factor out the common term (here x), then factor the quadratic that is left. Each factor gives a zero. They want the LARGEST, so compare: 0, 2, 5 → 5.'
      },
      {
        id:'HMP-12', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Factor theorem with a parameter',
        stem:'The polynomial p is defined by p(x) = x³ + ax² − 4x − 12, where a is a constant. If (x − 2) is a factor of p(x), what is the value of a?',
        answer:'3',
        expCorrect:'By the factor theorem, if (x − 2) is a factor then p(2) = 0. Substitute: (2)³ + a(2)² − 4(2) − 12 = 8 + 4a − 8 − 12 = 4a − 12. Set it equal to 0: 4a − 12 = 0 → 4a = 12 → a = 3. (Check: 8 + 3(4) − 8 − 12 = 8 + 12 − 8 − 12 = 0 ✓.) Answer: 3.',
        expWrong:{},
        tip:'(x − a) is a factor ⇔ p(a) = 0. Here evaluate p(2), set it to 0 and solve for the parameter. Substituting is faster than dividing.'
      }
    ]
  });
})();
