/* SAT Studio question set — Math: Advanced Math (ADV-01 a ADV-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-adv',
    title: 'Math — Advanced Math',
    section: 'math',
    level: 'Difícil',
    description: 'Advanced Math: quadratics, polynomials, exponentials, and nonlinear functions.',
    minutes: 18,
    questions: [
      {
        id:'ADV-01', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Exponential equations (equal bases)',
        stem:'If 5^(x + 2) = 5^7, what is the value of x?',
        choices:{A:'2', B:'5', C:'7', D:'9'},
        correct:'B',
        expCorrect:'With the same base, the exponents have to be equal: x + 2 = 7 → x = 5. (Check: 5^(5+2) = 5^7 ✓.)',
        expWrong:{
          A:'2 is the number added to the exponent, not the value of x. You mixed up the term with the unknown.',
          C:'7 is the exponent on the right-hand side; you still have to subtract the 2.',
          D:'9 comes from adding 7 + 2 instead of subtracting: the equation is x + 2 = 7, so you solve it by subtracting.'
        },
        tip:'If a^m = a^n with the same base a, then m = n. Set the exponents equal and solve the linear equation — no logarithms needed.'
      },
      {
        id:'ADV-02', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Quadratics: factoring (roots)',
        stem:'What is the positive solution to the equation x² − x − 12 = 0?',
        choices:{A:'2', B:'3', C:'4', D:'6'},
        correct:'C',
        expCorrect:'Look for two numbers that multiply to −12 and add to −1: they are −4 and +3. You factor (x − 4)(x + 3) = 0, so x = 4 or x = −3. The positive solution is 4. (Check: 16 − 4 − 12 = 0 ✓.)',
        expWrong:{
          A:'2 is not a root: 4 − 2 − 12 = −10 ≠ 0. No pair multiplying to −12 and adding to −1 gives 2.',
          B:'3 is the absolute value of the NEGATIVE root (−3), not the positive one. Watch the sign.',
          D:'6 multiplies to −12 with −2, but −2 + 6 = 4, not −1. It does not match the middle term sum.'
        },
        tip:'For x² + bx + c: two numbers that MULTIPLY to c and ADD to b. Here product −12, sum −1 → −4 and 3. The roots are their opposites: 4 and −3.'
      },
      {
        id:'ADV-03', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Quadratics: vertex (minimum value)',
        stem:'The function f is defined by f(x) = x² − 6x + 5. What is the minimum value of f(x)?',
        choices:{A:'−4', B:'−3', C:'3', D:'5'},
        correct:'A',
        expCorrect:'The vertex sits at x = −b/(2a) = −(−6)/(2·1) = 3. The minimum value is f(3) = 9 − 18 + 5 = −4. Since a > 0, the parabola opens upward and that is the minimum.',
        expWrong:{
          B:'−3 is −b/2 without dividing correctly, or an arithmetic slip evaluating f(3). The correct minimum is −4.',
          C:'3 is the x-coordinate of the vertex, not the minimum value of the function (which is the y-coordinate).',
          D:'5 is f(0), the constant term (the y-intercept), not the minimum.'
        },
        tip:'Minimum or maximum value = the y-coordinate of the vertex. First x = −b/(2a), then EVALUATE f at that x. Do not confuse the vertex x with the value of the function.'
      },
      {
        id:'ADV-04', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponential growth (model)',
        stem:'A colony of bacteria has a population of 300, and the population increases by 12% each hour. Which function P models the population after t hours?',
        choices:{A:'P(t) = 300 + 0.12t', B:'P(t) = 300(0.12)^t', C:'P(t) = 300(0.88)^t', D:'P(t) = 300(1.12)^t'},
        correct:'D',
        expCorrect:'Growing 12% each hour multiplies by (1 + 0.12) = 1.12 at every step. The model is P(t) = 300(1.12)^t. (Check: at t = 1, P = 300·1.12 = 336, which is 300 plus 12%.)',
        expWrong:{
          A:'This model is LINEAR (it adds 0.12 per hour). A percentage repeating every hour is multiplicative, not additive.',
          B:'Multiplying by 0.12 would make the population nearly vanish every hour; that factor does not represent 12% growth.',
          C:'0.88 = 1 − 0.12 models 12% DECAY, not growth.'
        },
        tip:'Growth of r% → factor (1 + r/100)^t. Decay → (1 − r/100)^t. "Increases by 12%" is ×1.12 per period, not +0.12.'
      },
      {
        id:'ADV-05', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Expresiones equivalentes (producto de binomios)',
        stem:'Which of the following is equivalent to (2x + 3)(x − 4)?',
        choices:{A:'2x² − 12', B:'2x² − 5x − 12', C:'2x² + 5x − 12', D:'2x² − 11x − 12'},
        correct:'B',
        expCorrect:'Usa FOIL: (2x)(x) + (2x)(−4) + (3)(x) + (3)(−4) = 2x² − 8x + 3x − 12 = 2x² − 5x − 12.',
        expWrong:{
          A:'2x² − 12 comes from multiplying only the first and last terms, forgetting the cross products (−8x and +3x).',
          C:'2x² + 5x − 12 has the wrong sign in the middle: −8x + 3x = −5x, not +5x.',
          D:'2x² − 11x − 12 comes from multiplying the cross terms wrong (for example −8x − 3x instead of −8x + 3x).'
        },
        tip:'FOIL: First, Outer, Inner, Last. The middle term adds the TWO cross products with their signs: −8x + 3x = −5x. Watch the signs there.'
      },
      {
        id:'ADV-06', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Polynomial functions (zeros and factors)',
        stem:'The polynomial p is defined by p(x) = (x + 4)(x − 2)(x − 5). For how many values of x does p(x) = 0?',
        choices:{A:'0', B:'1', C:'2', D:'3'},
        correct:'D',
        expCorrect:'A product is zero when some factor is zero. Each factor gives a root: x = −4, x = 2 and x = 5. Those are three different values, so p(x) = 0 at 3 values of x.',
        expWrong:{
          A:'0 would say it never equals zero, but each linear factor contributes a real root.',
          B:'1 counts only one root; there are three distinct linear factors, each with its own zero.',
          C:'2 misses a factor. Count all three: (x + 4), (x − 2) and (x − 5).'
        },
        tip:'Zero product property: each distinct linear factor = one zero (one crossing of the x-axis). Count the distinct factors to know how many real roots there are.'
      },
      {
        id:'ADV-07', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Nonlinear systems (parabola and line)',
        stem:'The system of equations below has two solutions.<br><br>y = x²<br>y = x + 6<br><br>What is the greatest value of y among the solutions to the system?',
        answer:'9',
        expCorrect:'Set them equal: x² = x + 6 → x² − x − 6 = 0 → (x − 3)(x + 2) = 0 → x = 3 or x = −2. The y values are y = 3² = 9 and y = (−2)² = 4. The greater y value is 9. (Check: (3, 9) satisfies 9 = 3 + 6 ✓.) Answer: 9.',
        expWrong:{},
        tip:'Desmos trick: graph y = x² and y = x + 6, and tap the two intersection points: (−2, 4) and (3, 9). Careful: they want the greatest VALUE OF y (9), not the greatest value of x.'
      },
      {
        id:'ADV-08', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratics: discriminant (one solution)',
        stem:'In the equation x² + 12x + c = 0, c is a constant. If the equation has exactly one real solution, what is the value of c?',
        choices:{A:'6', B:'12', C:'36', D:'144'},
        correct:'C',
        expCorrect:'Exactly one real solution ⇔ discriminant zero: b² − 4ac = 0 → 12² − 4(1)(c) = 0 → 144 − 4c = 0 → c = 36. (Check: x² + 12x + 36 = (x + 6)², double root x = −6.)',
        expWrong:{
          A:'6 is the double root (x = −6 in absolute value), not the value of c. c = 6² = 36.',
          B:'12 es el coeficiente b, no c.',
          D:'144 is b², but you forgot to divide by 4: c = 144/4 = 36.'
        },
        tip:'A single real solution → discriminant = 0. Solve b² = 4ac. Here 144 = 4c → c = 36. Verify: it has to leave a perfect square (x + 6)².'
      },
      {
        id:'ADV-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratics: sum and product of roots',
        stem:'The solutions to the equation 2x² − 16x + 24 = 0 are r and s. What is the value of r + s?',
        choices:{A:'−8', B:'6', C:'8', D:'12'},
        correct:'C',
        expCorrect:'Divide everything by 2: x² − 8x + 12 = 0 → (x − 2)(x − 6) = 0 → roots 2 and 6. Their sum is 2 + 6 = 8. (Shortcut: for ax² + bx + c, the sum of the roots is −b/a = −(−16)/2 = 8.)',
        expWrong:{
          A:'−8 has the sign flipped: the sum of the roots is −b/a = −(−16)/2 = +8, not −8.',
          B:'6 is only one of the roots, not the sum of both.',
          D:'12 is the PRODUCT of the roots (c/a = 24/2 = 12), not the sum.'
        },
        tip:'Vieta formulas: for ax² + bx + c = 0, the sum of the roots is −b/a and the product is c/a. Here −(−16)/2 = 8, without factoring at all.'
      },
      {
        id:'ADV-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponential decay (half-life)',
        stem:'A radioactive sample has an initial mass of 80 grams and its mass is halved every 6 years. Which function m gives the mass, in grams, remaining after t years?',
        choices:{A:'m(t) = 80(1/2)^(6t)', B:'m(t) = 80(1/2)^(t/6)', C:'m(t) = 80(1/2)^(t−6)', D:'m(t) = 80(6)^(t/2)'},
        correct:'B',
        expCorrect:'Every 6 years the mass is multiplied by 1/2, so the number of halvings is t/6. The model is m(t) = 80(1/2)^(t/6). (Check: at t = 6, m = 80(1/2)^1 = 40; at t = 12, m = 80(1/2)^2 = 20.)',
        expWrong:{
          A:'The exponent 6t would halve the mass SIX times per year, not once every 6 years. The period DIVIDES: t/6.',
          C:'Subtracting in the exponent (t − 6) does not represent half-life periods; the exponent has to be the number of periods, t/6.',
          D:'Base 6 and growth make no sense for something that halves; on top of that the 1/2 factor disappears.'
        },
        tip:'Half-life: amount = initial · (1/2)^(t / period). The period DIVIDES the time in the exponent. "Every 6 years" → t/6.'
      },
      {
        id:'ADV-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratics: vertex form',
        stem:'The graph of y = (x − 4)² − 9 in the xy-plane is a parabola. What are the coordinates of its vertex?',
        choices:{A:'(−4, −9)', B:'(4, −9)', C:'(4, 9)', D:'(−4, 9)'},
        correct:'B',
        expCorrect:'In vertex form y = a(x − h)² + k, the vertex is (h, k). Here (x − 4)² − 9 has h = 4 and k = −9, so the vertex is (4, −9). Careful: the sign of h flips relative to what is inside the parentheses.',
        expWrong:{
          A:'(−4, −9) takes the 4 with the sign inside the parentheses, but in y = a(x − h)² + k the vertex uses h = +4.',
          C:'(4, 9) flips the sign of k: the term is − 9, so k = −9, not +9.',
          D:'(−4, 9) has both signs wrong: h = 4 (not −4) and k = −9 (not 9).'
        },
        tip:'Vertex form y = a(x − h)² + k → vertex (h, k). The (x − h) FLIPS the sign (x − 4 → h = 4), but + k is taken as is (− 9 → k = −9).'
      },
      {
        id:'ADV-12', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratics: discriminant with a parameter',
        stem:'In the equation 9x² + bx + 4 = 0, b is a positive constant. If the equation has exactly one real solution, what is the value of b?',
        answer:'12',
        expCorrect:'Exactly one real solution ⇔ discriminant zero: b² − 4ac = 0 → b² − 4(9)(4) = 0 → b² = 144 → b = ±12. Since b is positive, b = 12. (Check: 9x² + 12x + 4 = (3x + 2)², double root.) Answer: 12.',
        expWrong:{},
        tip:'A single solution → discriminant = 0 → b² = 4ac = 4(9)(4) = 144 → b = 12 (take the positive one). It has to leave a perfect square: (3x + 2)².'
      }
    ]
  });
})();
