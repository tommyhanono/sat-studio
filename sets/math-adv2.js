/* SAT Studio question set — Math: Advanced Math 2 (AV2-01 a AV2-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-adv2',
    title: 'Math — Advanced Math 2',
    section: 'math',
    level: 'Difícil',
    description: 'More Advanced Math: quadratics, polynomials, exponential models, and nonlinear functions.',
    minutes: 18,
    questions: [
      {
        id:'AV2-01', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Exponential equations (same bases)',
        stem:'If 2^(3x) = 2^12, what is the value of x?',
        choices:{A:'3', B:'4', C:'9', D:'36'},
        correct:'B',
        expCorrect:'With the same base, the exponents have to be equal: 3x = 12 → x = 4. (Check: 2^(3·4) = 2^12 ✓.)',
        expWrong:{
          A:'3 is the coefficient in the exponent, not the value of x. You still have to divide 12 by 3.',
          C:'9 comes from subtracting 12 − 3 instead of dividing. The equation is 3x = 12, so you divide.',
          D:'36 comes from multiplying 3 · 12. Set the exponents equal and DIVIDE: x = 12/3 = 4.'
        },
        tip:'If a^m = a^n with the same base a, then m = n. Set the exponents equal and solve the linear equation — here 3x = 12.'
      },
      {
        id:'AV2-02', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Quadratics: factoring (roots)',
        stem:'What is the positive solution to the equation x² + 2x − 15 = 0?',
        choices:{A:'3', B:'5', C:'6', D:'15'},
        correct:'A',
        expCorrect:'Look for two numbers that multiply to −15 and add to +2: they are +5 and −3. You factor (x + 5)(x − 3) = 0, so x = −5 or x = 3. The positive solution is 3. (Check: 9 + 6 − 15 = 0 ✓.)',
        expWrong:{
          B:'5 is the absolute value of the NEGATIVE root (−5), not the positive one. Watch the sign.',
          C:'6 is not a root: 36 + 12 − 15 = 33 ≠ 0. It does not satisfy the equation.',
          D:'15 is the constant term c, not a root. Factor to find the solutions.'
        },
        tip:'For x² + bx + c: two numbers that MULTIPLY to c and ADD to b. Here product −15, sum +2 → +5 and −3. The roots are their opposites: −5 and 3.'
      },
      {
        id:'AV2-03', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Function notation (evaluating)',
        stem:'The function f is defined by f(x) = 2x² − 3x + 1. What is the value of f(−2)?',
        choices:{A:'−1', B:'3', C:'11', D:'15'},
        correct:'D',
        expCorrect:'Sustituye x = −2: f(−2) = 2(−2)² − 3(−2) + 1 = 2(4) + 6 + 1 = 8 + 6 + 1 = 15.',
        expWrong:{
          A:'−1 comes from treating (−2)² as −4: 2(−4) + 6 + 1 = −1. Remember a square is always positive: (−2)² = 4.',
          B:'3 comes from forgetting the sign in −3x: 2(4) − 6 + 1 = 3. With x = −2, the term −3x becomes +6.',
          C:'11 comes from writing −3(−2) as −6 instead of +6: 8 − 6 + … gives a smaller value. Watch the double sign.'
        },
        tip:'When you evaluate, put the input in parentheses: (−2)² = 4 (positive) and −3(−2) = +6 (two negatives make a positive). Substitute the signs carefully.'
      },
      {
        id:'AV2-04', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponential decay (model)',
        stem:'A car is worth $400 (in hundreds of dollars) and its value decreases by 15% each year. Which function V models the value after t years?',
        choices:{A:'V(t) = 400 − 0.15t', B:'V(t) = 400(0.15)^t', C:'V(t) = 400(0.85)^t', D:'V(t) = 400(1.15)^t'},
        correct:'C',
        expCorrect:'Losing 15% each year multiplies by (1 − 0.15) = 0.85 at every step. The model is V(t) = 400(0.85)^t. (Check: at t = 1, V = 400·0.85 = 340, which is 400 minus 15%.)',
        expWrong:{
          A:'This model is LINEAR (it subtracts 0.15 per year). A percentage repeating every year is multiplicative, not additive.',
          B:'Multiplying by 0.15 would make the value drop to 15% each year (an 85% loss), not a 15% one.',
          D:'1.15 models 15% GROWTH, not decay.'
        },
        tip:'Decay of r% → factor (1 − r/100)^t. Growth → (1 + r/100)^t. "Decreases by 15%" is ×0.85 per period.'
      },
      {
        id:'AV2-05', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Quadratics: vertex (minimum value)',
        stem:'The function f is defined by f(x) = x² − 8x + 11. What is the minimum value of f(x)?',
        choices:{A:'−5', B:'−4', C:'4', D:'11'},
        correct:'A',
        expCorrect:'The vertex sits at x = −b/(2a) = −(−8)/(2·1) = 4. The minimum value is f(4) = 16 − 32 + 11 = −5. Since a > 0, the parabola opens upward and that is the minimum.',
        expWrong:{
          B:'−4 confuses −b/2 with the minimum value. The minimum is f(4) = −5, not −4.',
          C:'4 is the x-coordinate of the vertex, not the minimum value of the function (which is the y-coordinate).',
          D:'11 is f(0), the constant term (the y-intercept), not the minimum.'
        },
        tip:'Minimum value = the y-coordinate of the vertex. First x = −b/(2a), then EVALUATE f at that x. Do not confuse the vertex x with the value of the function.'
      },
      {
        id:'AV2-06', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Polynomial functions (distinct zeros)',
        stem:'The polynomial p is defined by p(x) = (x − 1)(x + 3)²(x − 6). For how many distinct values of x does p(x) = 0?',
        choices:{A:'2', B:'3', C:'4', D:'6'},
        correct:'B',
        expCorrect:'A product is zero when some factor is zero: x = 1, x = −3 and x = 6. Even though (x + 3) appears squared, x = −3 is ONE distinct value. That makes 3 distinct values.',
        expWrong:{
          A:'2 misses a factor. The distinct zeros are 1, −3 and 6: that is three.',
          C:'4 counts the factor (x + 3)² twice, but it yields a single value x = −3. The DISTINCT values are 3.',
          D:'6 is one of the roots (and the degree of the polynomial), not the number of distinct zeros.'
        },
        tip:'Distinct zeros = different values of x that make p zero. A repeated factor like (x + 3)² is still ONE distinct zero (x = −3), even though it is a double root.'
      },
      {
        id:'AV2-07', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Quadratics: product of roots / factoring',
        stem:'The equation x² − 14x + 40 = 0 has two solutions, r and s. What is the value of the product r · s?',
        answer:'40',
        expCorrect:'Factor it: two numbers that multiply to 40 and add to −14 are −4 and −10 → (x − 4)(x − 10) = 0 → roots 4 and 10. Their product is 4 · 10 = 40. (Shortcut: for ax² + bx + c, the product of the roots is c/a = 40/1 = 40.) Answer: 40.',
        expWrong:{},
        tip:'Vieta formulas: for ax² + bx + c = 0, the product of the roots is c/a and the sum is −b/a. Here c/a = 40/1 = 40, without factoring at all.'
      },
      {
        id:'AV2-08', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratics: discriminant (one solution)',
        stem:'In the equation x² + 10x + c = 0, c is a constant. If the equation has exactly one real solution, what is the value of c?',
        choices:{A:'5', B:'20', C:'25', D:'100'},
        correct:'C',
        expCorrect:'Exactly one real solution ⇔ discriminant zero: b² − 4ac = 0 → 10² − 4(1)(c) = 0 → 100 − 4c = 0 → c = 25. (Check: x² + 10x + 25 = (x + 5)², double root x = −5.)',
        expWrong:{
          A:'5 is the double root (x = −5 in absolute value), not the value of c. c = 5² = 25.',
          B:'20 no anula el discriminante: 100 − 4(20) = 20 ≠ 0. Resuelve 100 − 4c = 0.',
          D:'100 is b², but you forgot to divide by 4: c = 100/4 = 25.'
        },
        tip:'A single real solution → discriminant = 0. Solve b² = 4ac. Here 100 = 4c → c = 25. Verify: it has to leave a perfect square (x + 5)².'
      },
      {
        id:'AV2-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratics: sum of roots',
        stem:'The solutions to the equation 3x² − 18x + 15 = 0 are r and s. What is the value of r + s?',
        choices:{A:'−6', B:'5', C:'6', D:'15'},
        correct:'C',
        expCorrect:'Divide everything by 3: x² − 6x + 5 = 0 → (x − 1)(x − 5) = 0 → roots 1 and 5. Their sum is 1 + 5 = 6. (Shortcut: for ax² + bx + c, the sum of the roots is −b/a = −(−18)/3 = 6.)',
        expWrong:{
          A:'−6 has the sign flipped: the sum of the roots is −b/a = −(−18)/3 = +6, not −6.',
          B:'5 is only one of the roots, not the sum of both.',
          D:'15 is the constant term c; the product of the roots is c/a = 15/3 = 5, not the sum.'
        },
        tip:'Vieta formulas: for ax² + bx + c = 0, the sum of the roots is −b/a. Here −(−18)/3 = 6, without factoring at all.'
      },
      {
        id:'AV2-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratics: vertex form',
        stem:'The graph of y = (x + 2)² − 7 in the xy-plane is a parabola. What are the coordinates of its vertex?',
        choices:{A:'(2, −7)', B:'(−2, −7)', C:'(−2, 7)', D:'(2, 7)'},
        correct:'B',
        expCorrect:'In vertex form y = a(x − h)² + k, the vertex is (h, k). Here (x + 2)² is (x − (−2))², so h = −2, and k = −7. The vertex is (−2, −7). Careful: the sign of h flips relative to what is inside the parentheses.',
        expWrong:{
          A:'(2, −7) takes the 2 with the sign inside the parentheses, but in y = a(x − h)² + k the vertex uses h = −2.',
          C:'(−2, 7) flips the sign of k: the term is − 7, so k = −7, not +7.',
          D:'(2, 7) has both signs wrong: h = −2 (not 2) and k = −7 (not 7).'
        },
        tip:'Vertex form y = a(x − h)² + k → vertex (h, k). The (x + 2) FLIPS the sign (h = −2), but − 7 is taken as is (k = −7).'
      },
      {
        id:'AV2-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Nonlinear systems (parabola and line)',
        stem:'The system of equations below has two solutions.<br><br>y = x² − 3<br>y = 2x + 5<br><br>What is the greatest value of x among the solutions to the system?',
        choices:{A:'−2', B:'2', C:'5', D:'4'},
        correct:'D',
        expCorrect:'Set them equal: x² − 3 = 2x + 5 → x² − 2x − 8 = 0 → (x − 4)(x + 2) = 0 → x = 4 or x = −2. The greater value of x is 4. (Check: at x = 4, y = 4² − 3 = 13 and y = 2·4 + 5 = 13 ✓.)',
        expWrong:{
          A:'−2 is the OTHER solution (the smaller one). They want the GREATER value of x, which is 4.',
          B:'2 is not a root: 4 − 4 − 8 = −8 ≠ 0. Check your factoring of x² − 2x − 8.',
          C:'5 is the constant term of the line, not a solution of the system.'
        },
        tip:'Set the two expressions for y equal, move everything to one side and factor. Here x² − 2x − 8 = 0 → (x − 4)(x + 2). They want the greater x: 4.'
      },
      {
        id:'AV2-12', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratics: discriminant with a parameter',
        stem:'In the equation 4x² + bx + 25 = 0, b is a positive constant. If the equation has exactly one real solution, what is the value of b?',
        answer:'20',
        expCorrect:'Exactly one real solution ⇔ discriminant zero: b² − 4ac = 0 → b² − 4(4)(25) = 0 → b² = 400 → b = ±20. Since b is positive, b = 20. (Check: 4x² + 20x + 25 = (2x + 5)², double root.) Answer: 20.',
        expWrong:{},
        tip:'A single solution → discriminant = 0 → b² = 4ac = 4(4)(25) = 400 → b = 20 (take the positive one). It has to leave a perfect square: (2x + 5)².'
      }
    ]
  });
})();
