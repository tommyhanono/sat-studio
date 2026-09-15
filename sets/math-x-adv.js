/* SAT Studio question set — EXTREME Math: Advanced Math (XV-01 a XV-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-x-adv',
    title: 'Extreme — Advanced Math',
    section: 'math',
    level: 'Extreme',
    description: 'Hard-Module-2 level: parametric discriminants, fractional-exponent manipulation, composition/transformation combos, exponential models.',
    minutes: 20,
    questions: [
      {
        id:'XV-01', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Parametric discriminant (line-parabola tangency)',
        stem:'In the xy-plane, the graph of y = x² + 4x + 12 intersects the graph of y = −3x + c, where c is a constant, at exactly one point. What is the value of c?',
        choices:{A:'49/4', B:'−1/4', C:'1/4', D:'−7/2'},
        correct:'B',
        expCorrect:'Set the two equations equal: x² + 4x + 12 = −3x + c. Move everything to one side: x² + 7x + (12 − c) = 0. “Exactly one point” means a zero discriminant: 7² − 4(1)(12 − c) = 0 → 49 − 48 + 4c = 0 → 4c = −1 → c = −1/4. Check: with c = −1/4 the equation becomes x² + 7x + 49/4 = (x + 7/2)² = 0, a single solution. ✓',
        expWrong:{
          A:'49/4 is the value the constant term 12 − c has to take, not the value of c. You skipped the last step: 12 − c = 49/4 → c = −1/4.',
          C:'1/4 comes from a sign error while solving: 49 − 48 + 4c = 0 gives 4c = −1, that is, c = −1/4, which is negative.',
          D:'−7/2 is the x-coordinate of the point of tangency (where (x + 7/2)² = 0), not the value of c they asked for.'
        },
        tip:'A line touching a parabola at ONE point → set them equal, rearrange into ax² + bx + c = 0 and demand b² − 4ac = 0. Careful: the “b” in the discriminant is the coefficient AFTER moving the line to the other side (here 4 + 3 = 7), not the original 4.',
        desmos:'Graph y = x^2 + 4x + 12 and y = -3x + c with a slider for c. Move c: at c = -1/4 the line just grazes the parabola (tangent). With a larger c it cuts it at 2 points and with a smaller c at 0.',
        desmosLatex:['y=x^2+4x+12', 'y=-3x+c', 'c=-1/4']
      },
      {
        id:'XV-02', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Parametric discriminant (line-parabola tangency)',
        stem:'In the xy-plane, the line y = −3x + c is tangent to the parabola y = x² + 2x + 12 (they meet at exactly one point). What is the value of the constant c?',
        choices:{A:'25/4', B:'−23/4', C:'23/4', D:'73/4'},
        correct:'C',
        expCorrect:'Set them equal: x² + 2x + 12 = −3x + c → x² + 5x + (12 − c) = 0. Tangency = zero discriminant: 25 − 4(12 − c) = 0 → 25 = 48 − 4c → 4c = 23 → c = 23/4. Check: the constant term becomes 12 − 23/4 = 25/4 and x² + 5x + 25/4 = (x + 5/2)² = 0, a single point. ✓',
        expWrong:{
          A:'25/4 is what 12 − c (the constant term) has to equal, not c. You still have to solve: c = 12 − 25/4 = 23/4.',
          B:'−23/4 is a sign error moving terms: from 25 = 48 − 4c you get 4c = +23, positive.',
          D:'73/4 comes from ADDING 12 + 25/4 instead of subtracting. The discriminant requires 12 − c = 25/4, that is, c = 12 − 25/4.'
        },
        tip:'The flow is always the same: set equal → rearrange → b² − 4ac = 0 → solve for the parameter. The most common error is answering the value of the constant term (12 − c) instead of c. Read WHAT they want before you mark.',
        desmos:'Graph y = x^2 + 2x + 12 and y = -3x + c with a slider for c. At c = 23/4 = 5.75 the line touches the parabola at a single point (x = -5/2). Try c = 25/4: it cuts at two points.',
        desmosLatex:['y=x^2+2x+12', 'y=-3x+c', 'c=23/4']
      },
      {
        id:'XV-03', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Parametric discriminant (fractional answer)',
        stem:'In the xy-plane, the graph of y = x² + 6x + 12 and the graph of y = −3x + c, where c is a constant, intersect at exactly one point. What is the value of c?',
        answer:'-33/4',
        expCorrect:'Set them equal: x² + 6x + 12 = −3x + c → x² + 9x + (12 − c) = 0. A single point → zero discriminant: 81 − 4(12 − c) = 0 → 81 − 48 + 4c = 0 → 4c = −33 → c = −33/4. Check: the constant becomes 12 + 33/4 = 81/4 and x² + 9x + 81/4 = (x + 9/2)² = 0. ✓ In the grid write -33/4 (or -8.25).',
        expWrong:{},
        tip:'On SPR the answer can be a negative fraction: -33/4 fits the grid perfectly. Do NOT round to -8.2 when you can write the exact fraction or -8.25. And remember: the b in the discriminant is 6 + 3 = 9, not 6.',
        desmos:'Graph y = x^2 + 6x + 12 and y = -3x + c with a slider for c between -12 and 0. At c = -33/4 = -8.25 the line is tangent. You can also graph y = 81 - 4(12 - x) and see where it crosses zero: at x = -8.25.',
        desmosLatex:['y=x^2+6x+12', 'y=-3x+c', 'c=-33/4']
      },
      {
        id:'XV-04', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Parametric discriminant (no real solutions → a range)',
        stem:'The equation x² + 8x + k = −3x + 4, where k is a constant, has no real solutions. Which of the following must be true about k?',
        choices:{A:'k > 137/4', B:'k < 137/4', C:'k > 121/4', D:'k > 105/4'},
        correct:'A',
        expCorrect:'Rearrange: x² + 11x + (k − 4) = 0. “No real solutions” = negative discriminant: 121 − 4(k − 4) < 0 → 121 − 4k + 16 < 0 → 137 < 4k → k > 137/4. Check with k = 35 (> 34.25): discriminant = 121 − 4(31) = −3 < 0, no real solutions. ✓ And with k = 34: 121 − 120 = 1 > 0, there are solutions. ✓',
        expWrong:{
          B:'k < 137/4 flips the inequality. From 137 − 4k < 0 you get 137 < 4k: it is a LARGE k that makes the discriminant negative (it lifts the parabola off the x-axis).',
          C:'k > 121/4 ignores the +16 contributed by the constant term: the correct constant is k − 4 (because of the 4 in the line), and −4(k − 4) = −4k + 16.',
          D:'k > 105/4 comes from SUBTRACTING 16 instead of adding it: −4(k − 4) = −4k + 16; the double negative turns positive.'
        },
        tip:'No real solutions → b² − 4ac < 0. The two stumbles: (1) forgetting to move the −3x + 4 to the left side before reading a, b, c; (2) the sign of −4(k − 4) = −4k + 16. Distribute slowly.',
        desmos:'Graph y = x^2 + 11x + (k - 4) with a slider for k. When k > 137/4 = 34.25 the parabola sits entirely above the x-axis (no roots). Also graph y = 137 - 4x and see that it crosses zero at x = 34.25.',
        desmosLatex:['y=x^2+11x+(k-4)', 'k=34.25', 'y=137-4x']
      },
      {
        id:'XV-05', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Fractional exponents (nested radicals)',
        stem:'For x > 1, the expression x·⁵√(x³·√x) is equivalent to x^(a/b), where a/b is a fraction in lowest terms. What is the value of a + b?',
        answer:'27',
        expCorrect:'From the inside out. Inside the fifth root: x³ · x^(1/2) = x^(7/2). The fifth root divides the exponent by 5: (x^(7/2))^(1/5) = x^(7/10). Multiply by the x outside: x¹ · x^(7/10) = x^(17/10). It is already in lowest terms (17 and 10 share no factors), so a = 17, b = 10 and a + b = 27. Check with x = 2: 2·(8·√2)^(1/5) ≈ 3.249 and 2^(1.7) ≈ 3.249. ✓',
        expWrong:{},
        tip:'Nested radicals: convert EVERYTHING to fractional exponents and work from the inside out. Rules: a product adds exponents, an nth root divides by n. The classic slip is applying the fifth root only to the x³ and not to the √x: the root covers everything inside it.',
        desmos:'Equivalence test by overlay: graph y = x*(x^3*sqrt(x))^(1/5) and then y = x^(17/10) on top of it. If the two curves overlap exactly for x > 0, they are equivalent. At x = 2 both give ≈ 3.249.',
        desmosLatex:['y=x(x^3\\sqrt{x})^{1/5}', 'y=x^{17/10}']
      },
      {
        id:'XV-06', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Fractional and negative exponents',
        stem:'For x > 0, which of the following is equivalent to (x^(2/3) · x^(−1/2))⁶ / x^(−3)?',
        choices:{A:'x¹⁰', B:'x', C:'x⁻²', D:'x⁴'},
        correct:'D',
        expCorrect:'Inside the parentheses add exponents: 2/3 + (−1/2) = 4/6 − 3/6 = 1/6. Raise to the 6th: x^(1/6 · 6) = x¹. Dividing by x^(−3) SUBTRACTS the exponent: 1 − (−3) = 4. Result: x⁴. Check with x = 2: (2^(2/3)·2^(−1/2))⁶/2^(−3) = 2¹ · 2³ = 16 = 2⁴. ✓',
        expWrong:{
          A:'x¹⁰ comes from adding 2/3 + 1/2 = 7/6 while ignoring the sign of the −1/2: 7/6 · 6 = 7, and 7 + 3 = 10. The exponent −1/2 subtracts.',
          B:'x is only the numerator (x¹): you skipped processing the division by x^(−3), which adds 3 to the exponent.',
          C:'x⁻² comes from treating the division by x^(−3) as a multiplication: 1 + (−3) = −2. Dividing SUBTRACTS the exponent: 1 − (−3) = 4.'
        },
        tip:'Three rules, in order: inside the parentheses ADD exponents; power of a power MULTIPLIES; division SUBTRACTS. The double negative 1 − (−3) = 4 is where almost everyone falls. Always check with x = 2 on the calculator.',
        desmos:'Overlay test: graph y = (x^(2/3)*x^(-1/2))^6/x^(-3) and then y = x^4 on top of it. They overlap for x > 0. Try y = x^(-2) as well: that one does NOT match, so it is ruled out.',
        desmosLatex:['y=\\frac{\\left(x^{2/3}\\cdot x^{-1/2}\\right)^6}{x^{-3}}', 'y=x^4', 'y=x^{-2}']
      },
      {
        id:'XV-07', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Fractional exponents (combining three factors)',
        stem:'For x > 0, which of the following is equivalent to (⁵√(x²) · ³√x) / x^(1/15)?',
        choices:{A:'x^(2/3)', B:'x^(11/15)', C:'x^(4/5)', D:'x^(2/15)'},
        correct:'A',
        expCorrect:'Convert everything to exponents: ⁵√(x²) = x^(2/5) and ³√x = x^(1/3). Common denominator 15: 2/5 = 6/15 and 1/3 = 5/15. Multiplying on top (add): 6/15 + 5/15 = 11/15. Dividing (subtract): 11/15 − 1/15 = 10/15 = 2/3. Result: x^(2/3). Check with x = 32: 32^(2/5) · 32^(1/3) / 32^(1/15) ≈ 4 · 3.1748 / 1.2599 ≈ 10.08 and 32^(2/3) ≈ 10.08. ✓',
        expWrong:{
          B:'x^(11/15) is only the numerator (6/15 + 5/15): you skipped subtracting the 1/15 from the division.',
          C:'x^(4/5) = x^(12/15) comes from ADDING the 1/15 instead of subtracting it. Dividing subtracts exponents.',
          D:'x^(2/15) comes from MULTIPLYING 2/5 · 1/3 = 2/15 instead of adding. Multiplying powers of the same base ADDS exponents; only power-of-a-power multiplies.'
        },
        tip:'Convert each radical into a fractional exponent and use a common denominator (here 15) so you do not slip while adding. Multiplying equal bases adds exponents, dividing subtracts. And simplify at the end: 10/15 = 2/3, because the options come reduced.',
        desmos:'Overlay: graph y = x^(2/5)*x^(1/3)/x^(1/15) and then y = x^(2/3) on top of it. They match exactly for x > 0. Graph y = x^(11/15) in another color: it separates from the original curve, which rules out B.',
        desmosLatex:['y=\\frac{x^{2/5}\\cdot x^{1/3}}{x^{1/15}}', 'y=x^{2/3}', 'y=x^{11/15}']
      },
      {
        id:'XV-08', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Composition and shift (minimum of g)',
        stem:'The function f is defined by f(x) = (x − 1)² − 5. The function g is defined by g(x) = f(x − 3) + 2. What is the minimum value of g?',
        choices:{A:'−5', B:'−7', C:'−3', D:'4'},
        correct:'C',
        expCorrect:'Substitute: g(x) = (x − 3 − 1)² − 5 + 2 = (x − 4)² − 3. In vertex form, the minimum of (x − 4)² − 3 is −3 (at x = 4). Shortcut: the minimum of f is −5; the horizontal shift (x − 3) does NOT change the minimum value, and the +2 raises it: −5 + 2 = −3. Check: g(4) = f(1) + 2 = −5 + 2 = −3. ✓',
        expWrong:{
          A:'−5 is the minimum of f, without applying the +2 that lifts the whole graph two units.',
          B:'−7 comes from SUBTRACTING 2 instead of adding it: g(x) = f(x − 3) + 2 raises the graph, it does not lower it.',
          D:'4 is the x-coordinate of g’s vertex (where the minimum happens), not the minimum VALUE, which is the y-coordinate.'
        },
        tip:'g(x) = f(x − h) + k moves the graph h to the right and k upward. A horizontal shift never changes the minimum or maximum value; only the vertical one (+k) does. And distinguish: “minimum value” = the y-coordinate of the vertex, not the x.',
        desmos:'Graph f(x) = (x-1)^2 - 5 and g(x) = f(x-3) + 2 (Desmos handles the composition directly). You will see the same parabola shifted 3 to the right and 2 up: vertex of f at (1, -5), of g at (4, -3).',
        desmosLatex:['f(x)=(x-1)^2-5', 'g(x)=f(x-3)+2']
      },
      {
        id:'XV-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Composition and shift (evaluating g(k))',
        stem:'The function f is defined by f(x) = 2(x + 1)² + 3. If g(x) = f(x − 3) + 2, what is the value of g(5)?',
        choices:{A:'21', B:'23', C:'77', D:'167'},
        correct:'B',
        expCorrect:'Two steps, in order. Step 1: g(5) = f(5 − 3) + 2 = f(2) + 2. Step 2: f(2) = 2(2 + 1)² + 3 = 2(9) + 3 = 21. So g(5) = 21 + 2 = 23. Check by rewriting all of g: g(x) = 2(x − 2)² + 5, and g(5) = 2(3)² + 5 = 23. ✓',
        expWrong:{
          A:'21 is f(2) without the final +2: you skipped the last step of g’s definition.',
          C:'77 comes from evaluating f(5) + 2 = 2(36) + 3 + 2: you skipped the x − 3 shift and put the 5 straight into f.',
          D:'167 comes from f(5 + 3) + 2 = f(8) + 2 = 2(81) + 3 + 2: you added the 3 instead of subtracting it. In f(x − 3), you SUBTRACT 3 from x before it enters f.'
        },
        tip:'Two-step compositions: evaluate from the inside out. First compute the argument (5 − 3 = 2), then run it through f, and AT THE END apply the outer part (+2). Writing each step on its own line stops you from skipping the last one.',
        desmos:'Define f(x) = 2(x+1)^2 + 3 and g(x) = f(x-3) + 2 in Desmos. Type g(5) on a new line and it gives 23 straight away. You can also graph g and click the point where x = 5.',
        desmosLatex:['f(x)=2(x+1)^2+3', 'g(x)=f(x-3)+2', 'g(5)']
      },
      {
        id:'XV-10', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Composition and shift (finding the parameter)',
        stem:'The function f is defined by f(x) = (x − 2)² + k, where k is a constant. The function g is defined by g(x) = f(x + 5) − 4. If the minimum value of g is 6, what is the value of k?',
        answer:'10',
        expCorrect:'Work backwards. g(x) = (x + 5 − 2)² + k − 4 = (x + 3)² + (k − 4). The minimum of g is k − 4 (the horizontal shift x + 5 does not affect the minimum value). Setting them equal: k − 4 = 6 → k = 10. Check: with k = 10, g(x) = (x + 3)² + 6 and its minimum is g(−3) = 6. ✓ Answer: 10.',
        expWrong:{},
        tip:'The minimum of a(x − h)² + c with a > 0 is c, full stop. Horizontal shifts (x + 5) move WHERE the minimum happens but not HOW MUCH it is. Track only the constant: k − 4 = 6. The typical slip is answering 2 (from 6 − 4) by subtracting instead of adding the 4.',
        desmos:'Define f(x) = (x-2)^2 + k with a slider for k, and g(x) = f(x+5) - 4. Move k until the vertex of g sits at y = 6: it happens exactly at k = 10 (vertex of g at (-3, 6)).',
        desmosLatex:['f(x)=(x-2)^2+k', 'g(x)=f(x+5)-4', 'k=10']
      },
      {
        id:'XV-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Exponential model (decay every n days)',
        stem:'A patient receives a 400-milligram dose of a medication. The amount of the medication in the bloodstream decreases by 12% every 5 days. Which equation models the amount A(t), in milligrams, remaining t days after the dose?',
        choices:{A:'A(t) = 400(0.88)^(5t)', B:'A(t) = 400(0.12)^(t/5)', C:'A(t) = 400(0.88)^t', D:'A(t) = 400(0.88)^(t/5)'},
        correct:'D',
        expCorrect:'Decaying 12% leaves 88%: the factor is 1 − 0.12 = 0.88. That factor applies ONCE every 5 days, so in t days it happens t/5 times: A(t) = 400(0.88)^(t/5). Check: at t = 5, A = 400(0.88)¹ = 352 (down 12% ✓); at t = 10, A = 400(0.88)² = 309.76 (down 12% twice ✓).',
        expWrong:{
          A:'(0.88)^(5t) applies the decay 25 times in 5 days: at t = 5 it would give 400(0.88)²⁵ ≈ 16 mg, an absurd collapse. The exponent has to equal 1 when t = 5, that is t/5.',
          B:'0.12 is what is LOST, not what is left. With base 0.12, after 5 days 12% (48 mg) would remain instead of 12% being lost. The decay factor is 1 − 0.12 = 0.88.',
          C:'(0.88)^t applies the 12% loss EVERY DAY: after 5 days 400(0.88)⁵ ≈ 211 mg would remain, not 352. The period is 5 days, which is why the exponent is t/5.'
        },
        tip:'Exponential model a·b^(t/n): b = 1 ± the rate (here 0.88) and n = the length of the period. Foolproof check: substitute t = one full period (t = 5) and demand that the exponent come out to 1. If it gives 25 or 5, the exponent is built wrong.',
        desmos:'Graph A = 400(0.88)^(t/5) and check that it passes through (5, 352) and (10, 309.76). Graph 400(0.88)^(5t) and 400(0.88)^t on top: they fall far faster and do not pass through (5, 352).',
        desmosLatex:['y=400(0.88)^{x/5}', 'y=400(0.88)^{5x}', 'y=400(0.88)^x', '(5,352)']
      },
      {
        id:'XV-12', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Exponential model (growth every n years)',
        stem:'The population of a town was 2,500 in the year 2020 and increases by 8% every 3 years. Which equation models the population P(t), in people, t years after 2020?',
        choices:{A:'P(t) = 2500(1.08)^(t/3)', B:'P(t) = 2500(1.08)^(3t)', C:'P(t) = 2500(0.08)^(t/3)', D:'P(t) = 2500(1.08)^t'},
        correct:'A',
        expCorrect:'Growing 8% multiplies by 1 + 0.08 = 1.08, and that happens once every 3 years: in t years the factor applies t/3 times, that is P(t) = 2500(1.08)^(t/3). Check: at t = 3, P = 2500(1.08)¹ = 2700 (up 8% ✓); at t = 6, P = 2500(1.08)² = 2916 (8% twice ✓).',
        expWrong:{
          B:'(1.08)^(3t) applies the 8% nine times in 3 years: at t = 3 it would give 2500(1.08)⁹ ≈ 4997, nearly double. The exponent has to equal 1 when t = 3.',
          C:'0.08 as the base makes the population COLLAPSE (multiplying by 0.08 leaves only 8%). Growing 8% means multiplying by 1.08, not by 0.08.',
          D:'(1.08)^t applies the 8% every YEAR: after 3 years it would give 2500(1.08)³ ≈ 3149, not 2700. Since the period is 3 years, the exponent is t/3.'
        },
        tip:'Same mold as decay: P = a(1 + r)^(t/n) with n = years per period. Quick test on the exam: plug t = 3 into each option and keep the one giving exactly 2500 × 1.08 = 2700. Only one survives.',
        desmos:'Graph P = 2500(1.08)^(t/3) and mark the points (3, 2700) and (6, 2916). Compare with 2500(1.08)^t and 2500(1.08)^(3t): they grow too fast and do not pass through (3, 2700).',
        desmosLatex:['y=2500(1.08)^{x/3}', 'y=2500(1.08)^x', '(3,2700)']
      }
    ]
  });
})();
