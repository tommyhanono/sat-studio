/* SAT Studio question set — Math: Parametric & Modular Reasoning (INSANE tier) */
(function(){
  window.SAT_SETS.push({
    id: 'math-insane-parametric',
    title: 'Math — Parametric & Modular Reasoning (INSANE)',
    section: 'math',
    level: 'Difícil',
    description: 'Ultra-hard: modular arithmetic reasoning, nested function composition, parametric systems, and constraint optimization.',
    minutes: 20,
    questions: [
      {
        id:'INS-PM-02', type:'mc', domain:'Advanced Math + Algebra', difficulty:'Difícil',
        skill:'Modular arithmetic reasoning (remainder logic)',
        stem:'If n ≡ 3 (mod 5) and n ≡ 2 (mod 7), which of the following is a possible value of n?',
        choices:{A:'17', B:'23', C:'43', D:'52'},
        correct:'B',
        expCorrect:'n ≡ 3 (mod 5) means n leaves a remainder of 3 when divided by 5 (candidates: 3, 8, 13, 18, 23, …). n ≡ 2 (mod 7) means a remainder of 2 when divided by 7. Try 23: 23 = 4·5 + 3 ✓ and 23 = 3·7 + 2 ✓. It meets both conditions. (General method: by the Chinese remainder theorem, the solutions are n = 35j + 23; the smallest positive one is 23.)',
        expWrong:{
          A:'17 leaves a remainder of 2 when divided by 5 (17 = 3·5 + 2), not 3. It fails the first condition.',
          C:'43 does leave a remainder of 3 with 5 (43 = 8·5 + 3), but 43 = 6·7 + 1 leaves a remainder of 1 with 7, not 2.',
          D:'52 leaves a remainder of 2 when divided by 5 (52 = 10·5 + 2), not 3. It fails the first condition.'
        },
        tip:'Systems of congruences: list the numbers satisfying one condition (3, 8, 13, 18, 23, …) and filter with the other. With options given, the fastest route is checking each option against both remainders.'
      },
      {
        id:'INS-PM-03', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Nested function composition and inverse logic',
        stem:'Let f(x) = 2x + 1 and g(x) = x² − 3, and let h(x) = f(g(x)) be defined for x ≥ 0. What is the value of h⁻¹(13)?',
        choices:{A:'1', B:'2', C:'3', D:'4'},
        correct:'C',
        expCorrect:'First build the composite: h(x) = f(g(x)) = 2(x² − 3) + 1 = 2x² − 5. Finding h⁻¹(13) means solving h(x) = 13: 2x² − 5 = 13 → 2x² = 18 → x² = 9 → x = 3 (take the positive root because of the domain x ≥ 0). Check: h(3) = 2(9) − 5 = 13 ✓.',
        expWrong:{
          A:'h(1) = 2(1) − 5 = −3, no 13.',
          B:'h(2) = 2(4) − 5 = 3, not 13. Careful: h(2) = 3 is not the same as h⁻¹(13) = 3.',
          D:'h(4) = 2(16) − 5 = 27, no 13. Revisa el despeje: 2x² = 18, no 32.'
        },
        tip:'For h⁻¹(y) you do not need the inverse formula: solve the equation h(x) = y. And for the composite, work from the inside out: g first, then f.'
      },
      {
        id:'INS-PM-04', type:'spr', domain:'Advanced Math + Algebra', difficulty:'Difícil',
        skill:'Constraint-based algebraic solving',
        stem:'A rectangle has integer dimensions. Its perimeter is 34, and its area is 60. What is the length of the longer side? (Grid in your answer.)',
        answer:'12',
        expCorrect:'Let a and b be the sides. Perimeter: 2(a + b) = 34 → a + b = 17. Area: ab = 60. So a and b are the roots of t² − 17t + 60 = 0 → (t − 5)(t − 12) = 0 → the sides are 5 and 12. Check: 2(5 + 12) = 34 ✓ and 5 × 12 = 60 ✓. The longer side is 12. Answer: 12.',
        expWrong:{},
        tip:'With perimeter and area you have the SUM (a + b) and the PRODUCT (ab): the sides are the roots of t² − (sum)t + (product) = 0. You can also hunt factors of 60 that add to 17: 5 and 12.'
      },
      {
        id:'INS-PM-05', type:'mc', domain:'Advanced Math + Data', difficulty:'Difícil',
        skill:'Exponential decay with asymptotic reasoning',
        stem:'A radioactive substance decays according to N(t) = N₀ · (0.5)^(t/T), where T is the half-life. If a sample starts with 1000 atoms and after 20 years has 125 atoms, what is the half-life T (in years)?',
        choices:{A:'10', B:'6.67', C:'5', D:'3.33'},
        correct:'B',
        expCorrect:'Set up 125 = 1000 · (0.5)^(20/T) → 0.125 = (0.5)^(20/T). Since 0.125 = 1/8 = (1/2)³, you need 20/T = 3 → T = 20/3 ≈ 6.67 years. Check: 20 years holds 3 half-lives: 1000 → 500 → 250 → 125 ✓.',
        expWrong:{
          A:'With T = 10, (0.5)^(20/10) = (0.5)² = 1/4 and 250 atoms would be left, not 125.',
          C:'With T = 5, (0.5)^(20/5) = (0.5)⁴ = 1/16 and 62.5 atoms would be left, not 125.',
          D:'With T = 3.33, (0.5)^(20/3.33) ≈ (0.5)⁶ = 1/64 and about 15.6 atoms would be left, not 125.'
        },
        tip:'Exponential decay: write the ratio N/N₀ as a power of 1/2 (here 1/8 = (1/2)³) and set the exponents equal: the number of half-lives is t/T.'
      },
      {
        id:'INS-PM-06', type:'mc', domain:'Algebra + Problem-Solving', difficulty:'Difícil',
        skill:'Rational functions and asymptotic behavior',
        stem:'A rational function f(x) = (ax + 2)/(x − 3) has a vertical asymptote at x = 3 and a horizontal asymptote at y = 2. What is the value of a?',
        choices:{A:'1', B:'2', C:'3', D:'6'},
        correct:'B',
        expCorrect:'Vertical asymptote at x = 3 is confirmed (denominator = 0). Horizontal asymptote: as x → ∞, f(x) → a/1 = a. So a = 2.',
        expWrong:{
          A:'If a = 1, the horizontal asymptote is y = 1, not 2.',
          C:'If a = 3, the horizontal asymptote is y = 3, not 2.',
          D:'If a = 6, the horizontal asymptote is y = 6, not 2.'
        },
        tip:'Rational function f(x) = P(x)/Q(x): vertical asymptotes are zeros of Q; when degrees are equal, the horizontal asymptote is the ratio of leading coefficients.'
      },
      {
        id:'INS-PM-07', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Trigonometric identity and angle reasoning',
        stem:'If sin(θ) = 3/5 and θ is in the second quadrant, what is the value of cos(2θ)?',
        choices:{A:'-7/25', B:'-24/25', C:'-1/5', D:'7/25'},
        correct:'D',
        expCorrect:'Use cos(2θ) = 1 − 2sin²(θ), which depends only on sin²(θ): cos(2θ) = 1 − 2(9/25) = 1 − 18/25 = 7/25. Verification another way: in Q2, cos(θ) = −4/5, and cos²θ − sin²θ = 16/25 − 9/25 = 7/25 ✓. Even though θ is in the second quadrant, cos(2θ) comes out positive.',
        expWrong:{
          A:'−7/25 comes from forcing the negative sign "because θ is in Q2", but cos(2θ) = 1 − 2sin²θ uses sin² and the result here is positive.',
          B:'−24/25 es sin(2θ) = 2·sin(θ)·cos(θ) = 2(3/5)(−4/5), no cos(2θ).',
          C:'−1/5 does not come from any correct double-angle identity; review cos(2θ) = 1 − 2sin²θ.'
        },
        tip:'Double angle: cos(2θ) = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ. Pick the form that uses the data you have (here only sin θ) and mind the sign of cos θ by quadrant if you need it.'
      },
      {
        id:'INS-PM-08', type:'spr', domain:'Advanced Math + Algebra', difficulty:'Difícil',
        skill:'Solving a cubic with constraint',
        stem:'If x³ − 6x² + 11x − 6 = 0, what is the sum of all real solutions? (Grid in your answer.)',
        answer:'6',
        expCorrect:'By Vieta formulas, in ax³ + bx² + cx + d = 0 the sum of the roots is −b/a = −(−6)/1 = 6. (You can also factor: x = 1 is a root because 1 − 6 + 11 − 6 = 0; dividing leaves (x − 1)(x − 2)(x − 3) = 0, with roots 1, 2 and 3, and 1 + 2 + 3 = 6.) Answer: 6.',
        expWrong:{},
        tip:'Vieta formulas for cubics: sum of roots = −b/a, sum of pairwise products = c/a, product = −d/a. Here you do not even need to factor.'
      },
      {
        id:'INS-PM-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Systems with parameter variation',
        stem:'For which value of k does the system of equations x + ky = 5 and 2x + 4y = 10 have infinitely many solutions?',
        choices:{A:'1', B:'2', C:'3', D:'4'},
        correct:'B',
        expCorrect:'For infinitely many solutions, the two equations must represent the same line. 2x + 4y = 10 simplifies (dividing by 2) to x + 2y = 5. Comparing x + ky = 5 with x + 2y = 5 gives k = 2.',
        expWrong:{
          A:'If k = 1, the equations are x + y = 5 and x + 2y = 5: different lines that intersect at one point.',
          C:'If k = 3, the equations are x + 3y = 5 and x + 2y = 5: different lines, exactly one solution.',
          D:'If k = 4, the equations are x + 4y = 5 and x + 2y = 5: different lines, exactly one solution.'
        },
        tip:'Infinitely many solutions: same line (all coefficients proportional). No solution: parallel lines (x, y proportional but constants not). One solution: non-proportional coefficients.'
      },
      {
        id:'INS-PM-10', type:'mc', domain:'Advanced Math + Problem-Solving', difficulty:'Difícil',
        skill:'Logarithmic reasoning and constraint',
        stem:'If log₃(x) + log₃(x − 2) = 1, what is the value of x?',
        choices:{A:'2', B:'3', C:'4', D:'6'},
        correct:'B',
        expCorrect:'log₃(x(x − 2)) = 1 → x(x − 2) = 3¹ = 3 → x² − 2x − 3 = 0 → (x − 3)(x + 1) = 0 → x = 3 or x = −1. Since the logs require x > 0 and x − 2 > 0 (that is, x > 2), the only valid solution is x = 3.',
        expWrong:{
          A:'With x = 2, the second term is log₃(0), which is undefined.',
          C:'With x = 4: log₃(4) + log₃(2) = log₃(8) ≠ 1, because 3¹ = 3, not 8.',
          D:'With x = 6: log₃(6) + log₃(4) = log₃(24) ≠ 1.'
        },
        tip:'Logarithmic equations: combine with log(a) + log(b) = log(ab), convert to exponential form, and ALWAYS check domain restrictions (every argument must be > 0).'
      },
      {
        id:'INS-PM-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Piecewise function reasoning with composition',
        stem:'A piecewise function is defined as f(x) = { x² + 1 if x ≤ 0; 2x if x > 0 }. What is f(f(−1))?',
        choices:{A:'2', B:'4', C:'5', D:'8'},
        correct:'B',
        expCorrect:'Evaluate from the inside out. f(−1): since −1 ≤ 0, use x² + 1 → f(−1) = (−1)² + 1 = 2. Then f(2): since 2 > 0, use 2x → f(2) = 4. So f(f(−1)) = 4.',
        expWrong:{
          A:'2 is only f(−1), the inner step; you still have to apply f a second time.',
          C:'5 comes from using the wrong piece in the second step: 2² + 1 = 5. Since 2 > 0, the piece is 2x, not x² + 1.',
          D:'8 comes from applying f one time too many: f(4) = 8. It is composed only twice: f(f(−1)) = f(2) = 4.'
        },
        tip:'In piecewise functions check the condition (≤ or >) for EACH evaluation: the inner one first, then the outer one with the result you got. Do not carry the same piece over.'
      },
      {
        id:'INS-PM-12', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Constraint optimization with multiple variables',
        stem:'If a + b = 10 and ab = 24, what is the value of a² + b²? (Grid in your answer.)',
        answer:'52',
        expCorrect:'Use the identity a² + b² = (a + b)² − 2ab = 10² − 2(24) = 100 − 48 = 52. (Direct check: a and b are 4 and 6, since 4 + 6 = 10 and 4·6 = 24; then 16 + 36 = 52 ✓.) Answer: 52.',
        expWrong:{},
        tip:'Key identity: a² + b² = (a + b)² − 2ab. It saves you finding a and b separately when you know the sum and the product.'
      }
    ]
  });
})();
