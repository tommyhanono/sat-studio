/* SAT Studio question set — Math: Advanced Math — Nonlinear equations and functions (NLA-01 a NLA-34)
   Dos destrezas oficiales, mitad y mitad:
     · am-nonlin-eq "Nonlinear equations and systems"  → NLA-01 a NLA-17
     · am-nonlin-fn "Nonlinear functions"              → NLA-18 a NLA-34

   OJO con skillOf(): dentro de Advanced Math prueba am-equiv PRIMERO, después
   am-nonlin-eq y al final am-nonlin-fn (que es el cajón). Así que ni el `skill`
   ni los primeros 160 caracteres del `stem` pueden decir "factor", "equivalent",
   "expand", "simplif", "radical", "remainder" ni "difference of squares":
   cualquiera de esas se lleva la pregunta a Equivalent expressions.
   Y para que una cuente como FUNCIÓN hay que evitar además las palabras de
   ecuaciones: "quadratic", "discriminant", "root(s)" (incluido "square root"),
   "solution(s)", "extraneous", "nonlinear system", "intersect", "tangen".

   Reparto pedido: 28 MC + 6 SPR · 8 Fácil · 14 Media · 12 Difícil (5 con extreme).
   Clave repartida a mano: 7 A · 7 B · 7 C · 7 D. */
(function(){

  /* ---- Tabla de NLA-20: razón fija 3. La trampa vive en la PRIMERA
         diferencia (15 − 5 = 10), que parece lineal hasta el segundo paso. ---- */
  var TBL_ALGAE =
    '<table border="1" cellpadding="6" style="border-collapse:collapse">' +
    '<tr><th>x</th><th>0</th><th>1</th><th>2</th><th>3</th></tr>' +
    '<tr><th>h(x)</th><td>5</td><td>15</td><td>45</td><td>135</td></tr></table>';

  /* ---- Gráfica de NLA-27: g(x) = (x − 3)² − 4.
         px(x) = 50 + 38x · py(y) = 210 − 16y. Vértice (3, −4) → (164, 274);
         cortes en (1, 0) y (5, 0); extremos dibujados en (0, 5) y (6, 5). ---- */
  var FIG_PARABOLA =
    '<svg viewBox="0 0 330 320" xmlns="http://www.w3.org/2000/svg" role="img" ' +
    'aria-label="The graph of the function g in the xy-plane. The horizontal axis is x, marked 1 through 6, and the vertical axis is y, marked negative 4, negative 2, 2, 4 and 6. The curve is a parabola that opens upward. It comes down from the point 0 comma 5, crosses the x-axis at 1 comma 0, bottoms out at the point 3 comma negative 4, crosses the x-axis again at 5 comma 0, and climbs back up to the point 6 comma 5. Nothing on the curve is lower than negative 4.">' +
    '<g fill="none" stroke="#e4e4e4" stroke-width="1">' +
    '<path d="M88 110V300M126 110V300M164 110V300M202 110V300M240 110V300M278 110V300"/>' +
    '<path d="M46 274H290M46 242H290M46 178H290M46 146H290M46 114H290"/></g>' +
    '<path d="M50 104V300M46 210H292" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<polyline points="50,130 57.6,148.6 65.2,165.8 72.8,181.8 80.4,196.6 88,210 95.6,222.2 103.2,233 110.8,242.6 118.4,251 126,258 133.6,263.8 141.2,268.2 148.8,271.4 156.4,273.4 164,274 171.6,273.4 179.2,271.4 186.8,268.2 194.4,263.8 202,258 209.6,251 217.2,242.6 224.8,233 232.4,222.2 240,210 247.6,196.6 255.2,181.8 262.8,165.8 270.4,148.6 278,130" ' +
    'fill="none" stroke="#B8860B" stroke-width="2.5"/>' +
    '<g fill="#B8860B"><circle cx="164" cy="274" r="4"/><circle cx="88" cy="210" r="4"/><circle cx="240" cy="210" r="4"/></g>' +
    '<g font-size="12" font-family="Georgia,serif" fill="#1e1e1e">' +
    '<g text-anchor="middle"><text x="88" y="227">1</text><text x="126" y="227">2</text>' +
    '<text x="164" y="227">3</text><text x="202" y="227">4</text><text x="240" y="227">5</text>' +
    '<text x="278" y="227">6</text><text x="170" y="316" font-size="13">x</text></g>' +
    '<g text-anchor="end"><text x="44" y="278">−4</text><text x="44" y="246">−2</text>' +
    '<text x="44" y="182">2</text><text x="44" y="150">4</text><text x="44" y="118">6</text></g>' +
    '<text x="16" y="205" font-size="13" transform="rotate(-90 16 205)">y</text>' +
    '</g></svg>';

  window.SAT_SETS.push({
    id: 'math-adv-nl-a',
    title: 'Math — Nonlinear Equations and Functions',
    section: 'math',
    level: 'Difícil',
    description: 'Advanced Math from both sides: solving nonlinear equations and systems, then reading nonlinear functions. Ramps from warm-up to brutal.',
    minutes: 42,
    questions: [

      /* ============ Nonlinear equations and systems (NLA-01 a NLA-17) ============ */

      {
        id:'NLA-01', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Quadratic equations: finding both solutions',
        stem:'What are the solutions to the quadratic equation x² − 7x + 12 = 0 ?',
        choices:{A:'x = 1 and x = 12', B:'x = 2 and x = 6', C:'x = 3 and x = 4', D:'x = −3 and x = −4'},
        correct:'C',
        expCorrect:'Look for two numbers that multiply to +12 and add to −7: those are −3 and −4, so the equation splits into (x − 3)(x − 4) = 0 and x = 3 or x = 4. Check both: 3² − 7(3) + 12 = 9 − 21 + 12 = 0 ✓ and 4² − 7(4) + 12 = 16 − 28 + 12 = 0 ✓.',
        expWrong:{
          A:'1 and 12 multiply to 12 but add to 13, not 7. Substituting gives 1 − 7 + 12 = 6 ≠ 0.',
          B:'2 and 6 multiply to 12 but add to 8, not 7. Substituting gives 4 − 14 + 12 = 2 ≠ 0. Both conditions have to hold, not just the product.',
          D:'−3 and −4 are the solutions of x² + 7x + 12 = 0. With a middle term of −7x the two numbers must be negative inside the parentheses, which makes the solutions positive.'
        },
        tip:'For x² + bx + c = 0 look for two numbers whose PRODUCT is c and whose SUM is b. Then flip their signs to read off the solutions: −3 and −4 in the parentheses means x = 3 and x = 4.',
        desmos:'Graph y=x^2-7x+12 and read where the curve crosses the x-axis: at 3 and at 4.',
        desmosLatex:['y=x^{2}-7x+12','y=0']
      },
      {
        id:'NLA-02', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Quadratic equations: the zero-product idea',
        stem:'The quadratic equation (2x − 9)(x + 5) = 0 has two solutions. What is the smaller of the two solutions?',
        choices:{A:'−5', B:'−9/2', C:'4.5', D:'5'},
        correct:'A',
        expCorrect:'A product is 0 only when one of its parts is 0. From 2x − 9 = 0 we get x = 9/2 = 4.5, and from x + 5 = 0 we get x = −5. The smaller one is −5. Check: (2(−5) − 9)((−5) + 5) = (−19)(0) = 0 ✓.',
        expWrong:{
          B:'−9/2 takes the 9 with the wrong sign. The part 2x − 9 is zero when 2x = +9, so x = +4.5.',
          C:'4.5 is the other, LARGER value. The question asks for the smaller one.',
          D:'5 flips the sign of the second part. x + 5 is zero at x = −5, not at x = 5: check (2(5) − 9)(5 + 5) = (1)(10) = 10 ≠ 0.'
        },
        tip:'When a product equals zero, set each part to zero separately and solve. Then read the question again: "smaller", "greater" and "positive" are three different answers from the same pair.',
        desmos:'Graph y=(2x-9)(x+5) and look at the two x-intercepts: −5 and 4.5.',
        desmosLatex:['y=(2x-9)(x+5)','y=0']
      },
      {
        id:'NLA-03', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Discriminant: how many real solutions an equation has',
        stem:'For the quadratic equation 2x² + 3x + 5 = 0, what is the value of the discriminant, and how many real solutions does the equation have?',
        choices:{A:'−31; no real solutions', B:'−31; two real solutions', C:'9; one real solution', D:'49; two real solutions'},
        correct:'A',
        expCorrect:'The discriminant is b² − 4ac with a = 2, b = 3, c = 5: 3² − 4(2)(5) = 9 − 40 = −31. A negative discriminant means the square root step asks for the square root of a negative number, so there is no real solution. (The graph of y = 2x² + 3x + 5 sits entirely above the x-axis.)',
        expWrong:{
          B:'The discriminant is right, but the reading is not. Negative means NO real solutions; only a positive discriminant gives two.',
          C:'9 is b² alone. The 4ac part was dropped: 9 − 40 = −31, not 9.',
          D:'49 comes from adding instead of subtracting: 9 + 40. The formula is b² − 4ac.'
        },
        tip:'Discriminant b² − 4ac: positive → two real solutions, zero → exactly one, negative → none. Compute b² and 4ac separately, then SUBTRACT, and keep the sign.',
        desmos:'Graph y=2x^2+3x+5: the whole parabola stays above the x-axis, so it never crosses it.',
        desmosLatex:['y=2x^{2}+3x+5','y=0']
      },
      {
        id:'NLA-04', type:'spr', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Sum of the solutions without solving',
        stem:'The equation 2x² − 22x + 36 = 0 has two solutions, p and q. What is the value of p + q ?',
        answer:'11',
        expCorrect:'For ax² + bx + c = 0 the two solutions always add to −b/a. Here −(−22)/2 = 11. (Long way, same answer: divide by 2 to get x² − 11x + 18 = 0, which splits into (x − 2)(x − 9) = 0, so the solutions are 2 and 9 and 2 + 9 = 11 ✓.) Answer: 11.',
        expWrong:{},
        tip:'Sum of the solutions = −b/a, product = c/a. Both use the ORIGINAL a, so divide by a; here −b is +22 and a is 2, which gives 11, not 22.',
        desmos:'Graph y=2x^2-22x+36: the x-intercepts are 2 and 9, and they add to 11.',
        desmosLatex:['y=2x^{2}-22x+36','y=0']
      },
      {
        id:'NLA-05', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Nonlinear system: a line and a parabola that meet once',
        stem:'The nonlinear system below has exactly one solution.<br><br>y = x² + 2<br>y = 4x − 2<br><br>What is the value of x at that solution?',
        choices:{A:'−2', B:'2', C:'4', D:'6'},
        correct:'B',
        expCorrect:'Both right sides equal y, so set them equal: x² + 2 = 4x − 2. Move everything to one side: x² − 4x + 4 = 0, which is (x − 2)² = 0, so x = 2. Check: x² + 2 = 4 + 2 = 6 and 4(2) − 2 = 6 ✓.',
        expWrong:{
          A:'−2 is a sign slip when moving 4x across. Substituting: (−2)² + 2 = 6 but 4(−2) − 2 = −10, so the two sides do not agree.',
          C:'4 comes from cancelling the constants and reading x² = 4x as x = 4. Substituting: 16 + 2 = 18 but 4(4) − 2 = 14.',
          D:'6 is the y-value at the meeting point, not the x-value. The question asks for x.'
        },
        tip:'Two equations that both start with "y =" can be set equal to each other. Collect everything on one side and solve; then go back and read whether the question wants x or y.',
        desmos:'Graph y=x^2+2 and y=4x-2: the line touches the parabola at exactly one point, (2, 6).',
        desmosLatex:['y=x^{2}+2','y=4x-2']
      },
      {
        id:'NLA-06', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Completing the square to reach the solutions',
        stem:'Completing the square rewrites x² + 6x − 11 = 0 in the form (x + h)² = k, where h and k are constants. What are the values of h and k?',
        choices:{A:'h = −3, k = 20', B:'h = 3, k = 2', C:'h = 6, k = 47', D:'h = 3, k = 20'},
        correct:'D',
        expCorrect:'Move the constant across first: x² + 6x = 11. Half of 6 is 3, and 3² = 9, so add 9 to BOTH sides: x² + 6x + 9 = 11 + 9 = 20. The left side is now (x + 3)², so (x + 3)² = 20, giving h = 3 and k = 20. Check by opening it up: (x + 3)² − 20 = x² + 6x + 9 − 20 = x² + 6x − 11 ✓.',
        expWrong:{
          A:'h = −3 borrows the sign flip from vertex form y = a(x − h)² + k. Here the target form is written (x + h)², so h is the +3 you see inside.',
          B:'k = 2 comes from 11 − 9: the 9 was added on the left and SUBTRACTED on the right. Whatever you add to one side you add to the other, so it is 11 + 9 = 20.',
          C:'h = 6 uses b itself instead of b/2, and k = 47 comes from 11 + 36. The number you add is (b/2)² = 9, not b² = 36.'
        },
        tip:'To complete the square on x² + bx: take half of b, square it, and add that to both sides. The left side then becomes (x + b/2)². Half FIRST, square SECOND.',
        desmos:'Graph y=x^2+6x-11 and y=(x+3)^2-20: the two curves land exactly on top of each other.',
        desmosLatex:['y=x^{2}+6x-11','y=(x+3)^{2}-20']
      },
      {
        id:'NLA-07', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Quadratic equations: finding the missing second solution',
        stem:'One solution of the quadratic equation 3x² − 5x − 2 = 0 is x = −1/3. What is the other solution?',
        choices:{A:'−2', B:'−2/3', C:'5/3', D:'2'},
        correct:'D',
        expCorrect:'The two solutions add to −b/a = −(−5)/3 = 5/3. So the missing one is 5/3 − (−1/3) = 6/3 = 2. Check it in the original equation: 3(2)² − 5(2) − 2 = 12 − 10 − 2 = 0 ✓.',
        expWrong:{
          A:'−2 is the constant term read straight off as a solution. Substituting: 3(4) + 10 − 2 = 20 ≠ 0.',
          B:'−2/3 is the PRODUCT of the two solutions (c/a = −2/3), not the missing one. Dividing that product by −1/3 is what gives 2.',
          C:'5/3 is the SUM of the two solutions. You still have to subtract the solution you already have: 5/3 − (−1/3) = 2.'
        },
        tip:'When one solution is handed to you, use sum = −b/a or product = c/a to get the other in one step. Just be clear about which of the two you computed before you write it down.',
        desmos:'Graph y=3x^2-5x-2: it crosses the x-axis at −1/3 and at 2.',
        desmosLatex:['y=3x^{2}-5x-2','y=0']
      },
      {
        id:'NLA-08', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Square root equations: spotting the extraneous solution',
        stem:'Which of the following gives ALL the solutions to the equation √(4x + 21) = x ?',
        choices:{A:'x = 7 only', B:'x = −3 only', C:'x = −7 only', D:'x = 7 and x = −3'},
        correct:'A',
        expCorrect:'Square both sides: 4x + 21 = x², so x² − 4x − 21 = 0 and (x − 7)(x + 3) = 0, giving candidates x = 7 and x = −3. Now test them in the ORIGINAL equation. x = 7: √(28 + 21) = √49 = 7 ✓. x = −3: √(−12 + 21) = √9 = 3, but the right side is −3, and 3 ≠ −3 ✗. Only x = 7 survives.',
        expWrong:{
          B:'−3 is exactly the candidate that fails the check: the square root sign gives the nonnegative value 3, which cannot equal −3.',
          C:'−7 comes from squaring only the left side: 4x + 21 = x gives 3x = −21. It fails twice, since 4(−7) + 21 = −7 is negative and has no real square root.',
          D:'Keeping both means the check was never done. Squaring can create values that satisfy the squared equation but not the original one.'
        },
        tip:'Squaring both sides can invent solutions. Always substitute every candidate back into the ORIGINAL equation, and remember that √ of a number is never negative, so √(stuff) = x forces x ≥ 0.',
        desmos:'Graph y=sqrt(4x+21) and y=x: they cross only at x = 7. At x = −3 the curve sits at 3 while the line is at −3, so they do not meet there.',
        desmosLatex:['y=\\sqrt{4x+21}','y=x']
      },
      {
        id:'NLA-09', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Rational equations: excluded values and extraneous solutions',
        stem:'What are all the solutions to the rational equation (x² + x)/(x + 4) = 12/(x + 4) ?',
        choices:{A:'x = −4 only', B:'x = 3 only', C:'x = 3 and x = −4', D:'x = 0 and x = −1'},
        correct:'B',
        expCorrect:'Write the excluded value FIRST: x + 4 = 0 at x = −4, so x ≠ −4. The denominators match, so the numerators must match: x² + x = 12, which gives x² + x − 12 = 0 and (x − 3)(x + 4) = 0, so the candidates are 3 and −4. Throw out −4 because it is excluded. Check x = 3: (9 + 3)/7 = 12/7 and 12/7 ✓. Only x = 3.',
        expWrong:{
          A:'−4 is the value that makes both denominators zero, so both sides are undefined there. It solves the numerator equation but it can never solve the original one.',
          C:'Keeping both means the excluded value was never checked. x = −4 breaks the fractions.',
          D:'0 and −1 come from solving x² + x = 0, as if the right side were zero. The right side is 12/(x + 4), not 0. Check x = 0: the left side is 0 but the right side is 3.'
        },
        tip:'With an unknown in a denominator, list the excluded values before you solve. Solve as usual, then cross off any candidate on that list. A candidate that only breaks a denominator is extraneous, not a solution.',
        desmos:'Graph y=(x^2+x)/(x+4) and y=12/(x+4): they meet only at x = 3, and both have a hole in the picture at x = −4.',
        desmosLatex:['y=(x^{2}+x)/(x+4)','y=12/(x+4)']
      },
      {
        id:'NLA-10', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Equations in quadratic form: counting the real solutions',
        stem:'How many distinct real solutions does the equation x⁴ − 5x² + 4 = 0 have?',
        answer:'4',
        expCorrect:'Let u = x². The equation becomes u² − 5u + 4 = 0, which splits into (u − 1)(u − 4) = 0, so u = 1 or u = 4. Now undo the substitution: x² = 1 gives x = 1 and x = −1, and x² = 4 gives x = 2 and x = −2. That is 4 distinct real values. Check x = −2: 16 − 20 + 4 = 0 ✓. Answer: 4.',
        expWrong:{},
        tip:'An equation with x⁴ and x² and a number is a quadratic in disguise: substitute u = x². Two values of u give FOUR values of x, because every positive u gives a positive and a negative x. Losing the negative ones is the classic mistake.',
        desmos:'Graph y=x^4-5x^2+4: the curve crosses the x-axis four times, at −2, −1, 1 and 2.',
        desmosLatex:['y=x^{4}-5x^{2}+4','y=0']
      },
      {
        id:'NLA-11', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Discriminant: the parameter that leaves exactly one solution',
        stem:'In the quadratic equation 9x² + kx + 16 = 0, k is a negative constant. If the equation has exactly one real solution, what is the value of k?',
        choices:{A:'−576', B:'−25', C:'−24', D:'24'},
        correct:'C',
        expCorrect:'Exactly one real solution means the discriminant is zero: k² − 4(9)(16) = 0, so k² = 576 and k = ±24. The problem says k is negative, so k = −24. Check: 9x² − 24x + 16 = (3x − 4)², a perfect square with the single solution x = 4/3.',
        expWrong:{
          A:'−576 is k², not k. The square root step is missing: √576 = 24.',
          B:'−25 comes from adding the two numbers you can see, 9 + 16. The discriminant multiplies them and then multiplies by 4: 4(9)(16) = 576.',
          D:'24 is the right size but the wrong sign. The problem states that k is negative, so only −24 qualifies.'
        },
        tip:'"Exactly one real solution" always means b² − 4ac = 0. Solve for the parameter, then read the extra condition in the problem (positive, negative, integer) to pick between the two signs.',
        desmos:'Graph y=9x^2-24x+16: the parabola just touches the x-axis at one point, x = 4/3.',
        desmosLatex:['y=9x^{2}-24x+16','y=0']
      },
      {
        id:'NLA-12', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Nonlinear system: where a line and a parabola meet',
        stem:'In the xy-plane, the line y = x + 6 and the parabola y = x² meet at two points. What is the sum of the y-coordinates of those two points?',
        choices:{A:'1', B:'5', C:'6', D:'13'},
        correct:'D',
        expCorrect:'Set the two expressions equal: x² = x + 6, so x² − x − 6 = 0 and (x − 3)(x + 2) = 0, giving x = 3 and x = −2. Now find the y-values: y = 3² = 9 and y = (−2)² = 4. Their sum is 9 + 4 = 13. Check on the line: 3 + 6 = 9 ✓ and −2 + 6 = 4 ✓.',
        expWrong:{
          A:'1 is the sum of the x-coordinates (3 + (−2)). The question asks for the y-coordinates.',
          B:'5 is 9 − 4, the difference of the two y-values instead of their sum.',
          C:'6 is where the line cuts the y-axis. That point, (0, 6), is not one of the two meeting points.'
        },
        tip:'Solving a line-and-parabola system gives you the x-values. Substitute each one back to get its y before you add, subtract or compare anything the question asks for.',
        desmos:'Graph y=x^2 and y=x+6: they cross at (−2, 4) and (3, 9), and 4 + 9 = 13.',
        desmosLatex:['y=x^{2}','y=x+6']
      },
      {
        id:'NLA-13', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratic equations: using the sum and the product of the solutions',
        stem:'The solutions to the quadratic equation 2x² − 10x + 3 = 0 are r and s. What is the value of r² + s² ?',
        choices:{A:'19', B:'22', C:'25', D:'28'},
        correct:'B',
        expCorrect:'Do not find r and s. Their sum is −b/a = 10/2 = 5 and their product is c/a = 3/2 = 1.5. Since (r + s)² = r² + 2rs + s², we get r² + s² = (r + s)² − 2rs = 5² − 2(1.5) = 25 − 3 = 22. (The actual solutions are about 4.679 and 0.321, and 4.679² + 0.321² = 22 ✓.)',
        expWrong:{
          A:'19 uses the product as 3 instead of 3/2: 25 − 2(3) = 19. The product of the solutions is c/a, so the 3 has to be divided by the leading 2.',
          C:'25 is (r + s)², the very first piece. The −2rs correction is still missing.',
          D:'28 adds 2rs instead of subtracting it: 25 + 3. Expanding (r + s)² produces +2rs, so isolating r² + s² means moving it across as −2rs.'
        },
        tip:'r² + s² = (r + s)² − 2rs. Combined with sum = −b/a and product = c/a, this answers "the sum of the squares" without ever solving the equation. Remember the a underneath BOTH.',
        desmos:'Graph y=2x^2-10x+3 and read the two x-intercepts; squaring and adding them gives 22.',
        desmosLatex:['y=2x^{2}-10x+3','y=0']
      },
      {
        id:'NLA-14', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Nonlinear system: substitution when one equation is a product',
        stem:'The nonlinear system x + y = 10 and xy = 21 has two solutions (x, y). What is the greater of the two values of x?',
        answer:'7',
        expCorrect:'From the first equation y = 10 − x. Substitute into the second: x(10 − x) = 21, so 10x − x² = 21 and x² − 10x + 21 = 0, which splits into (x − 3)(x − 7) = 0. So x = 3 (with y = 7) or x = 7 (with y = 3). The greater value of x is 7. Check: 7 + 3 = 10 ✓ and 7 · 3 = 21 ✓. Answer: 7.',
        expWrong:{},
        tip:'A sum-and-product pair is a quadratic in disguise: the two numbers are the solutions of t² − (sum)t + (product) = 0. Here t² − 10t + 21 = 0 gives 3 and 7 straight away.',
        desmos:'Graph x+y=10 and xy=21: the line cuts the curve at (3, 7) and (7, 3).',
        desmosLatex:['x+y=10','xy=21']
      },
      {
        id:'NLA-15', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Square root equations: isolating one root before squaring',
        stem:'What is the solution to the equation √(x + 7) − √x = 1 ?',
        choices:{A:'3', B:'9', C:'16', D:'There is no solution'},
        correct:'B',
        expCorrect:'Move one square root across so that only one of them gets squared: √(x + 7) = 1 + √x. Square both sides: x + 7 = 1 + 2√x + x. The x cancels, leaving 6 = 2√x, so √x = 3 and x = 9. Check in the original: √16 − √9 = 4 − 3 = 1 ✓.',
        expWrong:{
          A:'3 is the value of √x, the result of the next-to-last step. One step is missing: square it to get x = 9. Testing 3: √10 − √3 ≈ 1.43, not 1.',
          C:'16 is the value of x + 7 when x = 9, not x itself. Testing 16: √23 − √16 ≈ 0.80, not 1.',
          D:'"No solution" is what you get from squaring term by term: (x + 7) − x = 1 turns into 7 = 1, a contradiction. But (a − b)² is not a² − b², so that step is not allowed.'
        },
        tip:'With two square roots, isolate ONE of them on its own side before squaring; squaring a difference term by term is never valid. After squaring you will usually be left with a single root, which you isolate and square once more.',
        desmos:'Graph y=sqrt(x+7)-sqrt(x) and y=1: the curve drops through the line at x = 9.',
        desmosLatex:['y=\\sqrt{x+7}-\\sqrt{x}','y=1']
      },
      {
        id:'NLA-16', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Equations in quadratic form: picking out specific solutions',
        stem:'The equation x⁴ − 13x² + 36 = 0 has four real solutions. What is the sum of the two GREATEST solutions?',
        choices:{A:'−5', B:'0', C:'5', D:'13'},
        correct:'C',
        expCorrect:'Let u = x²: u² − 13u + 36 = 0 splits into (u − 4)(u − 9) = 0, so u = 4 or u = 9. Then x² = 4 gives x = ±2 and x² = 9 gives x = ±3. The four solutions are −3, −2, 2 and 3; the two greatest are 3 and 2, and 3 + 2 = 5. Check x = 3: 81 − 117 + 36 = 0 ✓.',
        expWrong:{
          A:'−5 is the sum of the two LEAST solutions, −3 and −2. Greatest means farthest to the right on the number line.',
          B:'0 is the sum of all four solutions, since they cancel in pairs. The question asks only for the top two.',
          D:'13 is 4 + 9, the sum of the two u-values. The substitution was never undone: u = 4 means x = ±2, not x = 4.'
        },
        tip:'After substituting u = x², always go back: each positive u gives two values of x. Then sort the four values before you answer "greatest", "least" or "positive".',
        desmos:'Graph y=x^4-13x^2+36: the four x-intercepts are −3, −2, 2 and 3.',
        desmosLatex:['y=x^{4}-13x^{2}+36','y=0']
      },
      {
        id:'NLA-17', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Nonlinear system: the parameter that leaves a single intersection point',
        stem:'In the xy-plane, the parabola y = x² − 4x + k and the line y = 2x − 5 meet at exactly one point, where k is a constant. What is the y-coordinate of that point?',
        choices:{A:'−5', B:'1', C:'3', D:'4'},
        correct:'B',
        expCorrect:'Set them equal: x² − 4x + k = 2x − 5, so x² − 6x + (k + 5) = 0. One meeting point means the discriminant is zero: 36 − 4(k + 5) = 0, so 4(k + 5) = 36, k + 5 = 9 and k = 4. Now the equation is x² − 6x + 9 = 0, that is (x − 3)² = 0, so x = 3. Finally the y-coordinate: y = 2(3) − 5 = 1. Check on the parabola: 9 − 12 + 4 = 1 ✓.',
        expWrong:{
          A:'−5 is where the line cuts the y-axis, not the height of the meeting point.',
          C:'3 is the x-coordinate of the point. The question asks for the y-coordinate, which takes one more substitution.',
          D:'4 is the value of k, the constant you found on the way. It is a middle result, not the answer.'
        },
        tip:'Three chained steps: set the two sides equal, use discriminant = 0 to pin down the parameter, then substitute back to get the actual point. Mark clearly which letter each number belongs to, because the question can ask for any one of them.',
        desmos:'Graph y=x^2-4x+4 and y=2x-5: the line touches the parabola at the single point (3, 1).',
        desmosLatex:['y=x^{2}-4x+4','y=2x-5']
      },

      /* ============ Nonlinear functions (NLA-18 a NLA-34) ============ */

      {
        id:'NLA-18', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Exponential growth: building the function from a percent',
        stem:'A school library owns 1,200 e-books, and the collection grows by 6% each year. Which function E gives the number of e-books t years from now?',
        choices:{A:'E(t) = 1,200(1.06)^t', B:'E(t) = 1,200(0.06)^t', C:'E(t) = 1,200(6)^t', D:'E(t) = 1,200 + 0.06t'},
        correct:'A',
        expCorrect:'Growing by 6% means keeping the whole collection and adding 6% of it, so each year the number is multiplied by 1 + 0.06 = 1.06. That gives E(t) = 1,200(1.06)^t. Check at t = 1: 1,200(1.06) = 1,272, which is 1,200 plus 6% of 1,200 ✓.',
        expWrong:{
          B:'Multiplying by 0.06 keeps only 6% of the collection each year: at t = 1 that is 72 e-books, a 94% loss. The 1 in 1.06 is what keeps what you already had.',
          C:'Multiplying by 6 makes the collection six times bigger each year (1,200 → 7,200). That is 500% growth, not 6%.',
          D:'This model ADDS 0.06 books per year, which is both linear and far too small. A percent of a growing amount is multiplicative.'
        },
        tip:'A percent change that repeats every period is always a multiplier: growth of r% → (1 + r/100)^t, decay of r% → (1 − r/100)^t. If the model adds instead of multiplying, it is linear, not exponential.',
        desmos:'Graph y=1200*1.06^{x} and y=1200+0.06x side by side: the curve pulls away from the flat line almost at once.',
        desmosLatex:['y=1200*1.06^{x}','y=1200+0.06x']
      },
      {
        id:'NLA-19', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Parabola in vertex form: reading the vertex',
        stem:'The graph of the function g(x) = −3(x − 5)² + 8 is a parabola in the xy-plane. What is the vertex of this parabola?',
        choices:{A:'(−5, 8)', B:'(5, −8)', C:'(8, 5)', D:'(5, 8)'},
        correct:'D',
        expCorrect:'Vertex form is a(x − h)² + k, and the vertex is (h, k). Matching (x − 5)² to (x − h)² gives h = 5, and the number added at the end gives k = 8. The vertex is (5, 8). Check: g(5) = −3(0) + 8 = 8, and nearby values are smaller, since g(4) = g(6) = 5.',
        expWrong:{
          A:'(−5, 8) flips the sign of h. The form subtracts h, so (x − 5)² already means h = +5.',
          B:'(5, −8) flips the sign of k. The −3 out front controls which way the parabola opens; it does not change the +8.',
          C:'(8, 5) has the coordinates swapped. h comes from inside the parentheses, k from the number at the end.'
        },
        tip:'In a(x − h)² + k the vertex is (h, k): the sign inside the parentheses flips, the sign at the end does not. The a only says which way the parabola opens and how narrow it is.',
        desmos:'Graph y=-3(x-5)^2+8: the highest point sits at (5, 8).',
        desmosLatex:['y=-3(x-5)^{2}+8','(5,8)']
      },
      {
        id:'NLA-20', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Linear or exponential: reading a table of values of a function',
        figure: TBL_ALGAE,
        stem:'The table gives four values of the function h. Which statement best describes h?',
        choices:{
          A:'Exponential, because consecutive values have a constant ratio of 3',
          B:'Linear, because consecutive values have a constant difference of 10',
          C:'Linear, because the values rise by a fixed amount as x rises by 1',
          D:'Exponential, because the values rise by more than 10 at each step'
        },
        correct:'A',
        expCorrect:'Divide each value by the one before it: 15/5 = 3, 45/15 = 3, 135/45 = 3. The ratio is constant, which is exactly what makes a function exponential. (The differences are 10, 30 and 90, so they are NOT constant.)',
        expWrong:{
          B:'The first difference really is 15 − 5 = 10, and that is the trap. The next ones are 30 and 90, so there is no constant difference.',
          C:'Rising steadily is not the test. Linear requires the same amount added at every step; here each step adds three times as much as the one before.',
          D:'The conclusion is right but the reason is wrong: "more than 10 each step" would also be true for many non-exponential functions. What matters is that the RATIO stays the same.'
        },
        tip:'Equal steps in x: constant DIFFERENCE means linear, constant RATIO means exponential. Always check all the steps, since the first one alone can look like either.',
        desmos:'Plot (0,5),(1,15),(2,45),(3,135) and graph y=5*3^{x}: every point lands on the curve.',
        desmosLatex:['y=5*3^{x}','(0,5)','(1,15)','(2,45)','(3,135)']
      },
      {
        id:'NLA-21', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Maximum of a function in context: the greatest height reached',
        stem:'A toy rocket is launched from a platform, and the function h(t) = −16t² + 64t + 5 gives its height in feet t seconds after launch. What is the maximum height, in feet, the rocket reaches?',
        choices:{A:'2 feet', B:'5 feet', C:'64 feet', D:'69 feet'},
        correct:'D',
        expCorrect:'The graph opens downward (the leading number is negative), so the highest point is the vertex, at t = −b/(2a) = −64/(2(−16)) = 2 seconds. Evaluate there: h(2) = −16(4) + 64(2) + 5 = −64 + 128 + 5 = 69 feet. Check the neighbours: h(1.9) = h(2.1) = 68.84, both lower ✓.',
        expWrong:{
          A:'2 is WHEN the rocket is highest, measured in seconds, not how high it gets. It is the input, not the output.',
          B:'5 is h(0), the height of the platform at launch. That is where the rocket starts, not where it peaks.',
          C:'64 is the coefficient of t, which controls the launch speed. A coefficient is not a height.'
        },
        tip:'Two-step routine for "maximum in context": first t = −b/(2a), then EVALUATE the function there. Then read the units in the question: seconds means the input, feet means the output.',
        desmos:'Graph y=-16x^2+64x+5 and look at the top of the arc: (2, 69).',
        desmosLatex:['y=-16x^{2}+64x+5','(2,69)']
      },
      {
        id:'NLA-22', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Maximum of a function: the input where it happens',
        stem:'A drone climbs and then descends so that the function d(x) = −5x² + 40x + 12 gives its height in meters x seconds after take-off. After how many seconds is the drone at its greatest height?',
        answer:'4',
        expCorrect:'The graph opens downward, so the greatest height is at the vertex: x = −b/(2a) = −40/(2(−5)) = −40/(−10) = 4 seconds. Check the neighbours: d(3) = 87 and d(5) = 87, while d(4) = 92, so 4 is indeed the peak. Answer: 4.',
        expWrong:{},
        tip:'x = −b/(2a) gives the INPUT at the peak. Watch the two minus signs: with a negative a, −b/(2a) comes out positive when b is positive.',
        desmos:'Graph y=-5x^2+40x+12: the top of the curve is directly above x = 4.',
        desmosLatex:['y=-5x^{2}+40x+12','x=4']
      },
      {
        id:'NLA-23', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Maximum of a function: the price that gives the greatest revenue',
        stem:'A food cart models its daily revenue with the function R(p) = −20p² + 360p, where p is the price in dollars of one empanada. What price gives the greatest daily revenue?',
        choices:{A:'$9', B:'$18', C:'$360', D:'$1,620'},
        correct:'A',
        expCorrect:'The graph opens downward, so revenue peaks at the vertex: p = −b/(2a) = −360/(2(−20)) = 9 dollars. Check: R(9) = −20(81) + 360(9) = −1,620 + 3,240 = 1,620, while R(8) = R(10) = 1,600, both lower ✓.',
        expWrong:{
          B:'18 comes from dividing by a instead of by 2a. It is also where revenue falls back to zero: R(18) = 0.',
          C:'360 is the coefficient of p in the model, not a price anyone would charge.',
          D:'1,620 is the greatest REVENUE in dollars, which is the output. The question asks for the price, the input.'
        },
        tip:'"What price maximizes revenue" asks for the input, p = −b/(2a); "what is the greatest revenue" asks for the output, R at that p. Both are dollars, so the units will not save you: read the sentence.',
        desmos:'Graph y=-20x^2+360x: the peak of the arc sits above x = 9, at a height of 1,620.',
        desmosLatex:['y=-20x^{2}+360x','(9,1620)']
      },
      {
        id:'NLA-24', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Transformations of a function: a vertical shift',
        stem:'The graph of the function f has its minimum at the point (−1, 4). What is the minimum point of the graph of y = f(x) − 6 ?',
        choices:{A:'(−7, 4)', B:'(−1, −2)', C:'(−1, 10)', D:'(5, 4)'},
        correct:'B',
        expCorrect:'Subtracting 6 OUTSIDE the function lowers every output by 6 and leaves the inputs alone. So the x-coordinate stays at −1 and the y-coordinate becomes 4 − 6 = −2. The minimum point is (−1, −2).',
        expWrong:{
          A:'(−7, 4) subtracts the 6 from x. Changes to the input go INSIDE the parentheses, as in f(x − 6).',
          C:'(−1, 10) adds 6 instead of subtracting it. The rule is y = f(x) − 6, so the graph moves down.',
          D:'(5, 4) shifts the graph to the right by 6, which again is a change to the input, not the output.'
        },
        tip:'Outside the function → vertical, and it behaves as written: −6 means down 6. Inside the function → horizontal, and it behaves backwards. Check which side of the parentheses the number is on before anything else.',
        desmos:'Graph y=(x+1)^2+4 and y=(x+1)^2+4-6: the second curve is the first one slid straight down.',
        desmosLatex:['y=(x+1)^{2}+4','y=(x+1)^{2}-2']
      },
      {
        id:'NLA-25', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Transformations of a function: the direction of a horizontal shift',
        stem:'The graph of the function f passes through the point (2, 7). Which point must be on the graph of y = f(x + 3) ?',
        choices:{A:'(2, 4)', B:'(2, 10)', C:'(5, 7)', D:'(−1, 7)'},
        correct:'D',
        expCorrect:'The new graph at input x uses the old output at x + 3. To reuse the known value f(2) = 7 we need x + 3 = 2, that is x = −1. So the new graph passes through (−1, 7): the whole picture slid 3 units to the LEFT.',
        expWrong:{
          A:'(2, 4) subtracts 3 from the output. The +3 is inside the parentheses, so it changes the input, not the height.',
          B:'(2, 10) adds 3 to the output, which is what y = f(x) + 3 would do.',
          C:'(5, 7) shifts right by 3, the classic reversed reading. On the new graph, x = 5 asks for f(8), a value the problem never gives you.'
        },
        tip:'Horizontal shifts run backwards: f(x + 3) moves LEFT 3 and f(x − 3) moves RIGHT 3. If the sign confuses you, solve "inside = the input you know" for x, exactly as above.',
        desmos:'Graph y=(x-2)^2+7 and y=(x+1)^2+7: the second is the first one slid 3 to the left.',
        desmosLatex:['y=(x-2)^{2}+7','y=(x+1)^{2}+7']
      },
      {
        id:'NLA-26', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Transformations of a function: the graph of minus f of x',
        stem:'The graph of the function f contains the point (−4, 9). Which point must lie on the graph of y = −f(x) ?',
        choices:{A:'(−4, −9)', B:'(4, 9)', C:'(4, −9)', D:'(9, −4)'},
        correct:'A',
        expCorrect:'The minus sign is outside the function, so it acts on the OUTPUT: every height flips sign while the input stays put. With f(−4) = 9 we get −f(−4) = −9, so the point is (−4, −9). Geometrically the graph is reflected across the x-axis.',
        expWrong:{
          B:'(4, 9) is what y = f(−x) gives: the minus sign inside flips the INPUT, reflecting across the y-axis instead.',
          C:'(4, −9) flips both signs, which is what −f(−x) does — two reflections, not one.',
          D:'(9, −4) swaps the coordinates. That is what an inverse function would do, not a reflection.'
        },
        tip:'Minus OUTSIDE → the output flips → reflection across the x-axis. Minus INSIDE → the input flips → reflection across the y-axis. Same word, two different pictures.',
        desmos:'Graph y=x^2-7 and y=-(x^2-7): the second curve is the first one flipped over the x-axis.',
        desmosLatex:['y=x^{2}-7','y=-(x^{2}-7)']
      },
      {
        id:'NLA-27', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Range of a function read from its graph',
        figure: FIG_PARABOLA,
        stem:'The graph of the function g is shown in the xy-plane, and g is defined for every real number. What is the range of g?',
        choices:{A:'x ≥ −4', B:'g(x) ≥ 3', C:'g(x) ≥ −4', D:'−4 ≤ g(x) ≤ 5'},
        correct:'C',
        expCorrect:'The range is the set of OUTPUTS. The curve opens upward and its lowest point is at (3, −4), so the smallest output is −4 and every value above it is reached. The range is g(x) ≥ −4. (The graph confirms it: the lowest dot on the curve sits at height −4.)',
        expWrong:{
          A:'This describes inputs, not outputs, so it is a statement about the domain. And the domain here is every real number anyway.',
          B:'3 is the x-coordinate of the lowest point. The range is bounded by its y-coordinate, −4.',
          D:'5 is just the highest value that fits in the picture. The curve keeps climbing past the edge of the graph, so there is no upper bound.'
        },
        tip:'Domain = the x-values the graph covers, range = the y-values it reaches. For a parabola opening upward the range starts at the y-coordinate of the lowest point and runs up forever; the edges of the drawing are not limits.',
        desmos:'Graph y=(x-3)^2-4 and the horizontal line y=-4: the curve touches the line once and never goes below it.',
        desmosLatex:['y=(x-3)^{2}-4','y=-4']
      },
      {
        id:'NLA-28', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponential function: interest compounded once a year',
        stem:'A savings account opens with $2,500 and earns 4% interest compounded annually, so the exponential function B(t) = 2,500(1.04)^t gives the balance after t years. To the nearest dollar, what is the balance after 3 years?',
        choices:{A:'$2,600', B:'$2,704', C:'$2,800', D:'$2,812'},
        correct:'D',
        expCorrect:'Compute 1.04³ = 1.04 · 1.04 · 1.04 = 1.124864, then 2,500(1.124864) = 2,812.16, which rounds to $2,812. Year by year: 2,500 → 2,600 → 2,704 → 2,812.16, and each year earns a bit more than the last because the interest itself starts earning interest.',
        expWrong:{
          A:'2,600 is the balance after ONE year. Two more periods are missing.',
          B:'2,704 is the balance after TWO years, a classic off-by-one on the exponent.',
          C:'2,800 treats the interest as a flat $100 a year (3 × 100). That would be simple interest; compounding pays on the new balance each year.'
        },
        tip:'Compounded annually means multiply by (1 + rate) once per year, so the exponent counts the years. Compare with simple interest: the gap is small at first and grows fast, which is exactly what the distractors are built from.',
        desmos:'Graph y=2500*1.04^{x} and y=2500+100x: at x = 3 the curve reads 2,812.16 and the line reads 2,800.',
        desmosLatex:['y=2500*1.04^{x}','y=2500+100x']
      },
      {
        id:'NLA-29', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponential function: changing the length of the period',
        stem:'A colony of algae doubles every 5 days, so the exponential function M(d) = 300(2)^(d/5) gives its mass in grams after d days. The mass after 15 days is how many times the mass at d = 0?',
        choices:{A:'3', B:'6', C:'8', D:'32'},
        correct:'C',
        expCorrect:'In 15 days the colony goes through 15/5 = 3 doubling periods, so the mass is multiplied by 2³ = 8. Straight from the model: M(15) = 300(2)^(15/5) = 300(2)³ = 300(8) = 2,400 grams, and 2,400/300 = 8 ✓.',
        expWrong:{
          A:'3 is the number of doubling periods, the value of the exponent. It still has to be used AS an exponent: 2³.',
          B:'6 comes from multiplying 2 by 3 instead of raising 2 to the third power. Repeated doubling multiplies, it does not add.',
          D:'32 is 2⁵, using the 5 from the model as the exponent. The 5 is the LENGTH of one period in days; the exponent is d/5.'
        },
        tip:'In a·b^(t/k), the k is how long one period lasts. Over a stretch of time T the number of periods is T/k, and the total multiplier is b^(T/k). Count periods first, then raise b to that count.',
        desmos:'Graph y=300*2^{x/5}: at x = 0 it reads 300 and at x = 15 it reads 2,400, which is 8 times as much.',
        desmosLatex:['y=300*2^{x/5}','(0,300)','(15,2400)']
      },
      {
        id:'NLA-30', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Parabola: which form of the function displays which feature',
        stem:'The function p is written three ways below.<br><br>p(x) = x² − 6x + 8<br>p(x) = (x − 2)(x − 4)<br>p(x) = (x − 3)² − 1<br><br>Which one displays the minimum value of p as a constant or coefficient?',
        choices:{A:'p(x) = x² − 6x + 8', B:'p(x) = (x − 3)² − 1', C:'p(x) = (x − 2)(x − 4)', D:'All three display it equally well'},
        correct:'B',
        expCorrect:'Vertex form a(x − h)² + k puts the vertex (h, k) in plain sight, and for an upward parabola k is the minimum value. Here (x − 3)² − 1 shows the vertex (3, −1), so the minimum value is −1, visible as the constant at the end. Check: p(3) = 9 − 18 + 8 = −1 ✓.',
        expWrong:{
          A:'Standard form displays the y-intercept: the 8 is p(0). The minimum is not any of the numbers you can read off.',
          C:'This form displays the x-intercepts, 2 and 4. Useful, but neither of them is the minimum VALUE.',
          D:'All three are the same function and give the same answers, but they do not display the same thing. Which feature is readable depends on the form.'
        },
        tip:'Three forms, three gifts: standard form hands you the y-intercept, the product of two linear pieces hands you the x-intercepts, vertex form hands you the maximum or minimum. Ask which gift the question wants, then pick the form.',
        desmos:'Graph all three: y=x^2-6x+8, y=(x-2)(x-4), y=(x-3)^2-1 land exactly on top of each other, with the lowest point at (3, −1).',
        desmosLatex:['y=x^{2}-6x+8','y=(x-3)^{2}-1','(3,-1)']
      },
      {
        id:'NLA-31', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Parabola: the axis of symmetry from two points at the same height',
        stem:'In the xy-plane, the graph of the function q is a parabola that opens upward. The points (−3, 12) and (7, 12) both lie on this graph. What is the x-coordinate of the vertex of the parabola?',
        answer:'2',
        expCorrect:'Two points at the SAME height sit at equal distances on either side of the axis of symmetry, and the vertex is on that axis. So take the midpoint of the x-values: (−3 + 7)/2 = 4/2 = 2. Check with a parabola that fits: q(x) = (x − 2)² − 13 gives q(−3) = 25 − 13 = 12 ✓ and q(7) = 25 − 13 = 12 ✓. Answer: 2.',
        expWrong:{},
        tip:'Any two points on a parabola with equal y-values are mirror images. Average their x-coordinates and you have the axis of symmetry — no need for the equation. Averaging is a midpoint, not half the distance between them.',
        desmos:'Graph y=(x-2)^2-13 with the points (−3,12) and (7,12): they sit at the same height, one on each side of x = 2.',
        desmosLatex:['y=(x-2)^{2}-13','(-3,12)','(7,12)']
      },
      {
        id:'NLA-32', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Piecewise function: how many inputs give a certain output',
        stem:'The function f is defined by f(x) = 2x + 1 when x &lt; 3, and by f(x) = x² − 4 when x ≥ 3. For how many values of x is f(x) = 5 ?',
        choices:{A:'Zero', B:'One', C:'Two', D:'Three'},
        correct:'C',
        expCorrect:'Work one branch at a time and check the condition each time. First branch: 2x + 1 = 5 gives x = 2, and 2 &lt; 3, so it is allowed ✓. Second branch: x² − 4 = 5 gives x² = 9, so x = 3 or x = −3; only x = 3 satisfies x ≥ 3, and f(3) = 9 − 4 = 5 ✓, while x = −3 is not covered by that rule. Two values in total: x = 2 and x = 3.',
        expWrong:{
          A:'Zero would mean neither rule ever reaches 5, but both do. The value 5 is hit twice.',
          B:'One comes from stopping after the first branch that works. A piecewise rule can reach the same output on more than one piece.',
          D:'Three counts x = −3 as well. It solves x² − 4 = 5, but that rule only applies when x ≥ 3, and on the branch that does apply at −3 the value is f(−3) = 2(−3) + 1 = −5.'
        },
        tip:'With a piecewise rule, solve on EVERY branch and then throw out any answer that falls outside the branch it came from. The condition is part of the equation, not decoration.',
        desmos:'Type the two rules with their conditions, y=(2x+1)\\{x&lt;3\\} and y=(x^2-4)\\{x>=3\\}, then add y=5: the horizontal line meets the picture twice.',
        desmosLatex:['y=(2x+1)\\{x<3\\}','y=(x^{2}-4)\\{x>=3\\}','y=5']
      },
      {
        id:'NLA-33', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Exponential decay: how much value is lost over a stretch of time',
        stem:'The value of a printing machine is modeled by the exponential function V(t) = 24,000(0.75)^(t/2), where V is in dollars and t is the number of years after it was bought. How many dollars of value does the machine lose during its first 4 years?',
        answer:'10500',
        expCorrect:'Start: V(0) = 24,000(0.75)⁰ = 24,000. After 4 years there are 4/2 = 2 periods, so V(4) = 24,000(0.75)² = 24,000(0.5625) = 13,500. The question asks for the value LOST, which is the drop: 24,000 − 13,500 = 10,500. Answer: 10500.',
        expWrong:{},
        tip:'Two traps stacked: the /2 in the exponent means the decay factor applies once every TWO years, and "how much does it lose" asks for the difference, not the remaining value. Compute both endpoints, then subtract.',
        desmos:'Graph y=24000*0.75^{x/2}: at x = 0 it reads 24,000 and at x = 4 it reads 13,500, a drop of 10,500.',
        desmosLatex:['y=24000*0.75^{x/2}','(0,24000)','(4,13500)']
      },
      {
        id:'NLA-34', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Transformations of a function: two changes at once',
        stem:'The graph of the function f has its maximum at the point (2, 9). What are the coordinates of the corresponding point on the graph of y = −f(x − 1) + 3 ?',
        choices:{A:'(1, −6)', B:'(3, −9)', C:'(3, −6)', D:'(3, 12)'},
        correct:'C',
        expCorrect:'Handle the input first: the new graph at x uses f(x − 1), so to reuse f(2) = 9 we need x − 1 = 2, that is x = 3. Now the output, in the order written: take 9, apply the minus sign to get −9, then add 3 to get −6. The point is (3, −6). (It is now a minimum, because the reflection turns the peak upside down.)',
        expWrong:{
          A:'(1, −6) shifts left instead of right. Inside the parentheses, x − 1 moves the graph 1 unit to the RIGHT.',
          B:'(3, −9) applies the reflection but drops the +3 at the end.',
          D:'(3, 12) applies the +3 but ignores the minus sign, giving 9 + 3 instead of −9 + 3.'
        },
        tip:'Do the input change first, then the output changes in the order the expression is written: reflect, then shift. Doing them in the wrong order gives −(9 + 3) = −12, which is a different point altogether.',
        desmos:'Graph y=-(x-2)^2+9 and y=-(-(x-3)^2+9)+3: the peak at (2, 9) becomes a lowest point at (3, −6).',
        desmosLatex:['y=-(x-2)^{2}+9','y=(x-3)^{2}-6','(3,-6)']
      }
    ]
  });
})();
