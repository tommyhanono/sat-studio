/* SAT Studio question set — Math: Advanced Math — Brutal (BAV-01 to BAV-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-brutal-adv1',
    title: 'Quadratics & Functions — Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Twelve Extreme quadratic items: parametric discriminants, vertex form, Vieta shortcuts, quadratic-linear systems, function notation, and roots that a stated condition throws out.',
    minutes: 20,
    questions: [
      {
        id:'BAV-01', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Discriminant with a parameter (no real solutions)',
        stem:'The equation 2x² + 8x + c = 3x − 1, where c is a constant, has no real solutions. What is the least integer value of c?',
        choices:{A:'3', B:'4', C:'8', D:'2'},
        correct:'A',
        expCorrect:'Collect every term on one side first: 2x² + 8x + c − 3x + 1 = 0 → 2x² + 5x + (c + 1) = 0. “No real solutions” means a negative discriminant: 5² − 4(2)(c + 1) < 0 → 25 − 8c − 8 < 0 → 17 < 8c → c > 17/8 = 2.125. The least INTEGER above 2.125 is 3. Check c = 3: the discriminant is 25 − 8(4) = −7 < 0, so there is no real solution ✓. Check c = 2: 25 − 8(3) = 1 > 0, so two real solutions exist and c = 2 fails ✓.',
        expWrong:{
          B:'4 comes from never moving the −1 across. Using 2x² + 5x + c = 0 gives 25 − 8c < 0 → c > 3.125 → 4. The constant term of the rearranged equation is c + 1, not c.',
          C:'8 comes from leaving the 3x on the right side. With 2x² + 8x + (c + 1) = 0 the discriminant is 64 − 8(c + 1) and you land on c > 7. Everything has to be on one side BEFORE you read off a, b and c.',
          D:'2 is the whole-number part of 2.125. But c must be strictly GREATER than 2.125, and 2 sits below it: with c = 2 the equation still has two real solutions.'
        },
        tip:'No real solutions → b² − 4ac < 0; exactly one → = 0; two → > 0. Two habits win this question: rearrange to one side before reading a, b, c, and when the answer is “the least integer”, round the boundary UP instead of truncating it.',
        desmos:'Graph y = 2x^2 + 8x + c and y = 3x - 1 with a slider for c. Raising c lifts the parabola off the line: at c = 2.125 they just touch, and any larger c gives no intersection at all.',
        desmosLatex:['y=2x^2+8x+c','y=3x-1','c=2.125']
      },
      {
        id:'BAV-02', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Discriminant with a parameter (exactly one solution)',
        stem:'In the equation kx² + 12x + 9 = 0, k is a nonzero constant. If the equation has exactly one real solution, what is the value of that solution?',
        answer:'-3/2',
        expCorrect:'Exactly one real solution means the discriminant is zero: 12² − 4(k)(9) = 0 → 144 − 36k = 0 → k = 4. The equation is now 4x² + 12x + 9 = 0, which is the perfect square (2x + 3)² = 0, so 2x + 3 = 0 → x = −3/2. (A repeated root always sits at the vertex: x = −b/(2a) = −12/8 = −3/2.) Check: 4(9/4) + 12(−3/2) + 9 = 9 − 18 + 9 = 0 ✓. Grid in -3/2 (or -1.5).',
        expWrong:{},
        tip:'Two chained steps: the discriminant gives the PARAMETER, and then −b/(2a) gives the repeated root. Stopping at k = 4 answers a question nobody asked. On the grid a negative fraction like -3/2 is fine, and so is the decimal -1.5.',
        desmos:'Graph y = kx^2 + 12x + 9 with a slider for k. At k = 4 the parabola stops cutting the x-axis and only touches it, and the point where it touches is x = -1.5.',
        desmosLatex:['y=kx^2+12x+9','k=4']
      },
      {
        id:'BAV-03', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Completing the square (vertex, h + k)',
        stem:'The function f is defined by f(x) = 2x² − 12x + 23. The minimum value of f occurs at x = h, and that minimum value is k. What is the value of h + k?',
        choices:{
          A:'17',
          B:'8',
          C:'5',
          D:'26'
        },
        correct:'B',
        expCorrect:'Complete the square. Factor the 2 out of the x-terms: f(x) = 2(x² − 6x) + 23. Half of −6 is −3 and (−3)² = 9, so x² − 6x = (x − 3)² − 9. That −9 is inside the parentheses, so it comes out multiplied by 2: f(x) = 2(x − 3)² − 18 + 23 = 2(x − 3)² + 5. The vertex is (3, 5), so h = 3, k = 5 and h + k = 8. Check: f(3) = 18 − 36 + 23 = 5 ✓.',
        expWrong:{
          A:'17 subtracts 9 instead of 18, which would make k = 14. The 9 sits inside the parentheses, so the leading 2 multiplies it on the way out: −2(9) = −18.',
          C:'5 is k by itself, the minimum value. The question asks for h + k, so the x-coordinate 3 still has to be added.',
          D:'26 uses f(0) = 23 as the minimum. 23 is the y-intercept; on an upward parabola the smallest output is at the vertex, f(3) = 5.'
        },
        tip:'Completing the square with a leading coefficient: factor it out of the x-terms FIRST, and remember that whatever you subtract inside gets multiplied by that coefficient on the way out. Vertex form a(x − h)² + k then hands you both numbers at once.',
        desmos:'Graph y = 2x^2 - 12x + 23 and click the lowest point: Desmos labels the vertex (3, 5), so h + k = 8. Graph y = 2(x - 3)^2 + 5 on top to confirm both forms are the same curve.',
        desmosLatex:['y=2x^2-12x+23','y=2(x-3)^2+5']
      },
      {
        id:'BAV-04', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Vertex from a parameter (minimum value, not its location)',
        stem:'The function f is defined by f(x) = 2x² + bx + 11, where b is a constant. The minimum value of f occurs at x = 3. What is the minimum value of f?',
        choices:{
          A:'−12',
          B:'3',
          C:'−7',
          D:'11'
        },
        correct:'C',
        expCorrect:'The vertex of y = ax² + bx + c sits at x = −b/(2a). Here −b/(2·2) = 3 → −b = 12 → b = −12, so f(x) = 2x² − 12x + 11. The minimum VALUE is the output at the vertex: f(3) = 2(9) − 12(3) + 11 = 18 − 36 + 11 = −7. Check in vertex form: 2(x − 3)² − 7 = 2x² − 12x + 18 − 7 = 2x² − 12x + 11 ✓.',
        expWrong:{
          A:'−12 is b, the intermediate result. Once b is known you still have to evaluate f at x = 3.',
          B:'3 is WHERE the minimum happens, the x-coordinate handed to you in the stem. The minimum value is the output f(3).',
          D:'11 is f(0), the y-intercept. On an upward parabola the smallest output is at the vertex, not at x = 0.'
        },
        tip:'x = −b/(2a) locates the vertex; substituting that x back into the function gives the minimum (or maximum) VALUE. They are two different questions with two different answers, so read which one is being asked before you mark.',
        desmos:'Graph y = 2x^2 + bx + 11 with a slider for b and drag until the vertex lands on x = 3: that happens at b = -12, and the vertex then reads (3, -7).',
        desmosLatex:['y=2x^2+bx+11','b=-12']
      },
      {
        id:'BAV-05', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Sum and product of the roots (Vieta as a shortcut)',
        stem:'The two solutions of 3x² − 11x + 4 = 0 are r and s. What is the value of 1/r + 1/s?',
        choices:{
          A:'3/4',
          B:'4/11',
          C:'−11/4',
          D:'11/4'
        },
        correct:'D',
        expCorrect:'The roots are never needed. For ax² + bx + c = 0, r + s = −b/a and rs = c/a, so r + s = 11/3 and rs = 4/3. Add the fractions: 1/r + 1/s = (s + r)/(rs) = (11/3) ÷ (4/3) = 11/4. Check the slow way: the roots are (11 ± √73)/6 ≈ 3.257 and ≈ 0.409, and 1/3.257 + 1/0.409 ≈ 2.75 = 11/4 ✓.',
        expWrong:{
          A:'3/4 is 1/(rs), from treating 1/r + 1/s as a single fraction over the product. Adding two fractions gives (r + s)/(rs); the numerator is not 1.',
          B:'4/11 is the fraction upside down, rs/(r + s). Adding 1/r + 1/s puts the SUM on top and the PRODUCT on the bottom.',
          C:'−11/4 keeps a minus sign that cancels. Since b = −11, the sum is −b/a = −(−11)/3 = +11/3, and both roots here are positive anyway.'
        },
        tip:'Vieta: r + s = −b/a and rs = c/a. Any symmetric expression in the roots (1/r + 1/s, r² + s², r/s + s/r) can be rebuilt from those two numbers, which beats the quadratic formula outright when the roots are irrational.',
        desmos:'Graph y = 3x^2 - 11x + 4 and read the two x-intercepts (about 0.409 and 3.257). Their reciprocals add to 2.75, which is 11/4.',
        desmosLatex:['y=3x^2-11x+4']
      },
      {
        id:'BAV-06', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Symmetric expression in the roots (r² + s²)',
        stem:'The solutions of the equation x² − 8x + 5 = 0 are r and s. What is the value of r² + s²?',
        answer:'54',
        expCorrect:'Rebuild the expression from the sum and the product. Since (r + s)² = r² + 2rs + s², it follows that r² + s² = (r + s)² − 2rs. Vieta gives r + s = −(−8)/1 = 8 and rs = 5/1 = 5, so r² + s² = 8² − 2(5) = 64 − 10 = 54. Check the slow way: the roots are 4 ± √11, and (4 + √11)² + (4 − √11)² = (16 + 8√11 + 11) + (16 − 8√11 + 11) = 54 ✓. Answer: 54.',
        expWrong:{},
        tip:'Rewrite whatever is asked in terms of the sum and the product before reaching for the quadratic formula: r² + s² = (r + s)² − 2rs. The −2rs is the piece everyone drops, and dropping it leaves 64, a number that looks clean and is wrong.',
        desmos:'Graph y = x^2 - 8x + 5 and read the two x-intercepts (about 0.683 and 7.317). Squaring each and adding gives 54.',
        desmosLatex:['y=x^2-8x+5']
      },
      {
        id:'BAV-07', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Quadratic-linear system (sum of the y-coordinates)',
        stem:'In the xy-plane, the graph of y = x² − 2x − 8 and the line y = 2x − 5 intersect at two points. What is the sum of the y-coordinates of those two points?',
        choices:{A:'−2', B:'4', C:'3', D:'−18'},
        correct:'A',
        expCorrect:'Set the two expressions equal: x² − 2x − 8 = 2x − 5 → x² − 4x − 3 = 0. The x-coordinates are the roots, and by Vieta their sum is −(−4)/1 = 4 (the roots themselves are 2 ± √7, so you never want them). Both points sit on the line, so y₁ + y₂ = (2x₁ − 5) + (2x₂ − 5) = 2(x₁ + x₂) − 10 = 2(4) − 10 = −2. Check numerically: x ≈ 4.646 and x ≈ −0.646 give y ≈ 4.29 and y ≈ −6.29, which add to ≈ −2 ✓.',
        expWrong:{
          B:'4 is the sum of the x-coordinates, the intermediate result. Feed it through the line to reach the y-values: 2(4) − 10 = −2.',
          C:'3 subtracts the −5 only once, as if 2(x₁ + x₂) − 5. There are TWO points, so the −5 shows up twice.',
          D:'−18 uses x₁ + x₂ = −4. The sum of the roots is −b/a, and here b = −4, so the sum is +4, not −4.'
        },
        tip:'In a quadratic-linear system you rarely need the intersection points themselves. Combine into one quadratic, get the sum of the roots from Vieta, then push that sum through the LINE, which is the easier of the two equations to evaluate.',
        desmos:'Graph y = x^2 - 2x - 8 and y = 2x - 5 and click both intersection points: their y-values are about 4.29 and -6.29, which add to -2.',
        desmosLatex:['y=x^2-2x-8','y=2x-5']
      },
      {
        id:'BAV-08', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Tangency parameter (line and parabola)',
        stem:'In the xy-plane, the line y = mx − 4, where m is a positive constant, is tangent to the parabola y = x² + 5, meaning the two graphs meet at exactly one point. What is the x-coordinate of that point?',
        choices:{
          A:'6',
          B:'3',
          C:'−3',
          D:'9'
        },
        correct:'B',
        expCorrect:'Set them equal: x² + 5 = mx − 4 → x² − mx + 9 = 0. Meeting at exactly one point means a zero discriminant: (−m)² − 4(1)(9) = 0 → m² = 36 → m = 6 or m = −6. The stem says m is POSITIVE, so m = 6. The equation becomes x² − 6x + 9 = (x − 3)² = 0 → x = 3. Check: the line y = 6x − 4 at x = 3 gives 14, and the parabola gives 9 + 5 = 14 ✓.',
        expWrong:{
          A:'6 is m, the slope solved for along the way. The question asks for the x-coordinate of the point where the graphs touch.',
          C:'−3 is the touching point for m = −6, the branch the condition m > 0 rules out. Whenever a parameter comes out as ±, re-read the stem before choosing.',
          D:'9 is the constant term of x² − mx + 9 = 0, which is the PRODUCT of the two equal roots. If r² = 9 with r positive, then r = 3.'
        },
        tip:'Tangent line plus parabola → set equal, then force the discriminant to 0. Solving for a squared parameter always yields two signs, and a word in the stem (“positive”, “m > 0”) picks one. The repeated root itself is x = −b/(2a).',
        desmos:'Graph y = x^2 + 5 and y = mx - 4 with a slider for m. At m = 6 the line grazes the parabola at the single point (3, 14); at m = -6 it grazes at (-3, 14), which the condition m > 0 discards.',
        desmosLatex:['y=x^2+5','y=mx-4','m=6']
      },
      {
        id:'BAV-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Function notation (solve f(g(a)) = value, then reverse the order)',
        stem:'The functions f and g are defined by f(x) = 3x + 4 and g(x) = x³ − 2. If f(g(a)) = 22, what is the value of g(f(a))?',
        choices:{
          A:'10',
          B:'22',
          C:'998',
          D:'2'
        },
        correct:'C',
        expCorrect:'First solve for a, working from the inside out: f(g(a)) = 3(a³ − 2) + 4 = 3a³ − 6 + 4 = 3a³ − 2. Set that equal to 22: 3a³ = 24 → a³ = 8 → a = 2. Now build the OTHER composition with the same a: f(2) = 3(2) + 4 = 10, and g(10) = 10³ − 2 = 1000 − 2 = 998. Check the given condition: f(g(2)) = f(8 − 2) = f(6) = 3(6) + 4 = 22 ✓.',
        expWrong:{
          A:'10 is f(2), the inner step of g(f(a)). That 10 still has to go through g: 10³ − 2 = 998.',
          B:'22 assumes g(f(a)) equals f(g(a)). Composition is not commutative: running the machines in the other order changes the output.',
          D:'2 is a itself, the value solved for in the first stage. It is the intermediate result, not what the question asks for.'
        },
        tip:'Composition with a parameter runs in two stages: solve the composition you are given for the unknown, then rebuild the one they actually ask about. Evaluate inside out every time, and never assume f(g(a)) = g(f(a)).',
        desmos:'Graph y = 3(x^3 - 2) + 4 and y = 22 and click the intersection: it sits at x = 2, which is a. Then graph y = (3x + 4)^3 - 2, the other composition, and read its value at x = 2.',
        desmosLatex:['y=3(x^3-2)+4','y=22','y=(3x+4)^3-2']
      },
      {
        id:'BAV-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Function notation (rewriting f(x + 2))',
        stem:'The function f is defined by f(x) = 2x² − 8x + 3, and the function h is defined by h(x) = f(x + 2). Which of the following is equivalent to h(x)?',
        choices:{
          A:'2x² − 4x − 9',
          B:'2x² − 8x + 5',
          C:'2x² − 16x + 27',
          D:'2x² − 5'
        },
        correct:'D',
        expCorrect:'Wherever the rule for f shows an x, write (x + 2): h(x) = 2(x + 2)² − 8(x + 2) + 3. Expand one piece at a time: (x + 2)² = x² + 4x + 4, so 2(x + 2)² = 2x² + 8x + 8; and −8(x + 2) = −8x − 16. Add everything: 2x² + 8x + 8 − 8x − 16 + 3 = 2x² − 5. Check with x = 0: h(0) has to equal f(2) = 8 − 16 + 3 = −5, and 2(0)² − 5 = −5 ✓. Check with x = 1: f(3) = 18 − 24 + 3 = −3, and 2(1) − 5 = −3 ✓.',
        expWrong:{
          A:'2x² − 4x − 9 comes from expanding 2(x + 2)² as 2x² + 4x + 4. The 2 has to multiply all three terms of x² + 4x + 4, which gives 2x² + 8x + 8.',
          B:'2x² − 8x + 5 is f(x) + 2: the 2 was added to the OUTPUT. In f(x + 2) the 2 goes into the input, before the rule is applied.',
          C:'2x² − 16x + 27 is f(x − 2). Substituting x − 2 shifts the graph the opposite way; the definition says x + 2.'
        },
        tip:'f(input) means: replace every x in the rule with the whole input in parentheses, then expand. Two traps live there — the square of a binomial (never (x + 2)² = x² + 4) and distributing the leading coefficient. A quick numeric check at x = 0 catches both.',
        desmos:'In Desmos define f(x) = 2x^2 - 8x + 3, then graph y = f(x + 2) and y = 2x^2 - 5: the curves land exactly on top of each other. Try y = f(x) + 2 as well and watch it miss.',
        desmosLatex:['f(x)=2x^2-8x+3','y=f(x+2)','y=2x^2-5']
      },
      {
        id:'BAV-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Quadratic in context (negative root rejected, derived answer)',
        stem:'A rectangular garden is 3 meters longer than it is wide, and its area is 108 square meters. What is the perimeter of the garden, in meters?',
        choices:{A:'42', B:'21', C:'54', D:'9'},
        correct:'A',
        expCorrect:'Let w be the width, so the length is w + 3 and w(w + 3) = 108 → w² + 3w − 108 = 0 → (w + 12)(w − 9) = 0 → w = −12 or w = 9. A width cannot be negative, so w = 9 and the length is 12. Perimeter = 2(9 + 12) = 42 meters. Check: 9 × 12 = 108 ✓ and 12 is 3 more than 9 ✓.',
        expWrong:{
          B:'21 is the width plus the length, which is only HALF the perimeter. A rectangle has two of each side: 2(9 + 12) = 42.',
          C:'54 uses w = 12, reading the factor (w + 12) as if it gave a positive root. That factor gives w = −12, which is rejected; the surviving root comes from (w − 9).',
          D:'9 is the width. It is the intermediate result, and the question asks for the perimeter.'
        },
        tip:'A word problem that ends in a quadratic almost always produces one impossible root: a length, a width, a time after launch or a count of people cannot be negative, so drop it. Then re-read the question, because the surviving root is usually not what was asked for.',
        desmos:'Graph y = x^2 + 3x - 108 and read the x-intercepts: -12 and 9. Only the positive one can be a width, so the sides are 9 and 12 and the perimeter is 42.',
        desmosLatex:['y=x^2+3x-108']
      },
      {
        id:'BAV-12', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Quadratic in context (side length rejects a root)',
        stem:'In a right triangle, one leg is 7 inches longer than the other leg, and the area of the triangle is 30 square inches. What is the length, in inches, of the hypotenuse?',
        answer:'13',
        expCorrect:'Let the shorter leg be a, so the other leg is a + 7 and the area is (1/2)a(a + 7) = 30 → a(a + 7) = 60 → a² + 7a − 60 = 0 → (a + 12)(a − 5) = 0 → a = −12 or a = 5. A side length cannot be negative, so a = 5 and the legs are 5 and 12. The hypotenuse is √(5² + 12²) = √(25 + 144) = √169 = 13. Check the area: (1/2)(5)(12) = 30 ✓. Answer: 13.',
        expWrong:{},
        tip:'Three chained steps and only the last one is the answer: build the quadratic, throw out the negative root because it is a length, then do what the question actually asks (here the Pythagorean theorem). Knowing 5-12-13 and 3-4-5 by heart removes the final calculation.',
        desmos:'Graph y = x^2 + 7x - 60 and read the positive x-intercept: x = 5, the shorter leg. The other leg is 12, so the hypotenuse is 13.',
        desmosLatex:['y=x^2+7x-60']
      }
    ]
  });
})();
