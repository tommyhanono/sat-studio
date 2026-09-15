/* SAT Studio question set — Math: Algebra — Hard III (HA3-01 to HA3-12) */
(function(){

  /* Four-quadrant grid, 22 px per unit, origin at (150, 150), x and y from −6 to 6. */
  function planeGrid(){
    var s = '<g stroke="#d9d9d9" stroke-width="1">';
    for (var i = 0; i <= 12; i++){
      var p = 18 + i * 22;
      s += '<line x1="' + p + '" y1="18" x2="' + p + '" y2="282"/>';
      s += '<line x1="18" y1="' + p + '" x2="282" y2="' + p + '"/>';
    }
    return s + '</g>';
  }

  /* Boundary y = 2x − 1 drawn dashed; everything ABOVE it is shaded. */
  var FIG_REGION =
    '<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The xy-plane with a dashed line passing through the points (0, −1) and (2, 3). The region above the dashed line is shaded.">' +
    '<polygon points="18,282 95,282 227,18 18,18" fill="#324DC7" fill-opacity="0.16"/>' +
    planeGrid() +
    '<line x1="18" y1="150" x2="282" y2="150" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<line x1="150" y1="18" x2="150" y2="282" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<line x1="95" y1="282" x2="227" y2="18" stroke="#324DC7" stroke-width="2.5" stroke-dasharray="7 5"/>' +
    '<g font-size="12" font-family="Georgia,serif" fill="#1e1e1e">' +
    '<text x="62" y="166" text-anchor="middle">−4</text>' +
    '<text x="106" y="166" text-anchor="middle">−2</text>' +
    '<text x="194" y="166" text-anchor="middle">2</text>' +
    '<text x="238" y="166" text-anchor="middle">4</text>' +
    '<text x="145" y="66" text-anchor="end">4</text>' +
    '<text x="145" y="110" text-anchor="end">2</text>' +
    '<text x="145" y="198" text-anchor="end">−2</text>' +
    '<text x="145" y="242" text-anchor="end">−4</text>' +
    '</g>' +
    '<text x="286" y="145" font-size="14" font-family="Georgia,serif" font-style="italic">x</text>' +
    '<text x="156" y="26" font-size="14" font-family="Georgia,serif" font-style="italic">y</text>' +
    '</svg>';

  /* V (liters) against t (minutes): the line runs from (0, 60) down to (20, 0). */
  var FIG_TANK =
    '<svg viewBox="0 0 360 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A line graph of the volume V, in liters, of water in a tank against the time t, in minutes. The line starts at the point (0, 60) and falls steadily to the point (20, 0).">' +
    '<g stroke="#e0e0e0" stroke-width="1">' +
    '<line x1="118" y1="40" x2="118" y2="190"/><line x1="178" y1="40" x2="178" y2="190"/>' +
    '<line x1="238" y1="40" x2="238" y2="190"/><line x1="298" y1="40" x2="298" y2="190"/>' +
    '<line x1="58" y1="140" x2="298" y2="140"/><line x1="58" y1="90" x2="298" y2="90"/>' +
    '<line x1="58" y1="40" x2="298" y2="40"/>' +
    '</g>' +
    '<line x1="58" y1="190" x2="340" y2="190" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<line x1="58" y1="30" x2="58" y2="190" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<line x1="58" y1="40" x2="298" y2="190" stroke="#324DC7" stroke-width="2.5"/>' +
    '<circle cx="58" cy="40" r="4" fill="#1e1e1e"/><circle cx="298" cy="190" r="4" fill="#1e1e1e"/>' +
    '<g font-size="12" font-family="Georgia,serif" fill="#1e1e1e">' +
    '<text x="118" y="206" text-anchor="middle">5</text><text x="178" y="206" text-anchor="middle">10</text>' +
    '<text x="238" y="206" text-anchor="middle">15</text><text x="298" y="206" text-anchor="middle">20</text>' +
    '<text x="51" y="194" text-anchor="end">0</text>' +
    '<text x="51" y="144" text-anchor="end">20</text><text x="51" y="94" text-anchor="end">40</text>' +
    '<text x="51" y="44" text-anchor="end">60</text>' +
    '<text x="70" y="34" text-anchor="start">(0, 60)</text>' +
    '<text x="306" y="186" text-anchor="start">(20, 0)</text>' +
    '</g>' +
    '<text x="184" y="230" font-size="13" font-family="Georgia,serif" text-anchor="middle">t (minutes)</text>' +
    '<text x="16" y="110" font-size="13" font-family="Georgia,serif" text-anchor="middle" transform="rotate(-90 16 110)">V (liters)</text>' +
    '</svg>';

  /* C (dollars) against p (posters): the segment shown runs from (20, 80) to (80, 260). */
  var FIG_POSTER =
    '<svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A line graph of the total charge C, in dollars, against the number of posters p in an order. The segment shown starts at the point (20, 80), passes through the point (60, 200), and ends at the right edge; it does not reach the C-axis.">' +
    '<g stroke="#e0e0e0" stroke-width="1">' +
    '<line x1="126" y1="44" x2="126" y2="200"/><line x1="190" y1="44" x2="190" y2="200"/>' +
    '<line x1="254" y1="44" x2="254" y2="200"/><line x1="318" y1="44" x2="318" y2="200"/>' +
    '<line x1="62" y1="148" x2="318" y2="148"/><line x1="62" y1="96" x2="318" y2="96"/>' +
    '<line x1="62" y1="44" x2="318" y2="44"/>' +
    '</g>' +
    '<line x1="62" y1="200" x2="330" y2="200" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<line x1="62" y1="34" x2="62" y2="200" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<line x1="126" y1="158.4" x2="318" y2="64.8" stroke="#324DC7" stroke-width="2.5"/>' +
    '<circle cx="126" cy="158.4" r="4" fill="#1e1e1e"/><circle cx="254" cy="96" r="4" fill="#1e1e1e"/>' +
    '<g font-size="12" font-family="Georgia,serif" fill="#1e1e1e">' +
    '<text x="126" y="216" text-anchor="middle">20</text><text x="190" y="216" text-anchor="middle">40</text>' +
    '<text x="254" y="216" text-anchor="middle">60</text><text x="318" y="216" text-anchor="middle">80</text>' +
    '<text x="55" y="204" text-anchor="end">0</text>' +
    '<text x="55" y="152" text-anchor="end">100</text><text x="55" y="100" text-anchor="end">200</text>' +
    '<text x="55" y="48" text-anchor="end">300</text>' +
    '<text x="134" y="172" text-anchor="start">(20, 80)</text>' +
    '<text x="248" y="88" text-anchor="end">(60, 200)</text>' +
    '</g>' +
    '<text x="190" y="240" font-size="13" font-family="Georgia,serif" text-anchor="middle">p (posters)</text>' +
    '<text x="18" y="118" font-size="13" font-family="Georgia,serif" text-anchor="middle" transform="rotate(-90 18 118)">C (dollars)</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-hard-alg3',
    title: 'Algebra — Hard III',
    section: 'math',
    level: 'Difícil',
    description: 'Hard linear algebra — shaded inequality regions and dashed boundaries, rearranging formulas with parentheses and fractional coefficients, direct and inverse variation, systems that are one line or two parallel lines, age and coin setups, and linear models read off a graph.',
    minutes: 20,
    questions: [
      {
        id:'HA3-01', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Graph of a linear inequality (boundary and shaded side)',
        stem:'The shaded region shown in the xy-plane is the graph of one of the inequalities below, and the dashed line is its boundary. Which inequality is it?',
        figure:FIG_REGION,
        choices:{
          A:'y ≥ 2x − 1',
          B:'y > 2x − 1',
          C:'y < 2x − 1',
          D:'y > (1/2)x − 1'
        },
        correct:'B',
        expCorrect:'Read the picture in two steps. FIRST the boundary: the line crosses the y-axis one unit below the origin, at (0, −1), and it climbs to (2, 3), so the slope is (3 − (−1))/(2 − 0) = 4/2 = 2 and the boundary is y = 2x − 1. SECOND the sign: the line is DASHED, so its own points are not solutions and the inequality is strict; the shading sits ABOVE the line, so y is greater. Together: y > 2x − 1. (Check with (0, 0), which is inside the shading: 0 > 2(0) − 1 = −1 ✓.)',
        expWrong:{
          A:'y ≥ 2x − 1 has the right boundary and the right side, but ≥ would include the line itself, and an included boundary is drawn SOLID. This one is dashed.',
          C:'y < 2x − 1 shades the other side, below the line. Test a point from the shaded part, (0, 0): 0 < −1 is false, so this inequality does not describe the region shown.',
          D:'y > (1/2)x − 1 reads the slope upside down, as run over rise (2 across, 4 up gives 4/2 = 2, not 2/4). A line with slope 1/2 would rise half a unit per step, much flatter than the one drawn.'
        },
        tip:'Three readings, always in this order: the boundary (slope and intercept), the style of the line (dashed → < or >, solid → ≤ or ≥), and one test point from inside the shading to decide which way the sign points.',
        desmos:'Type y>2x-1: Desmos draws the boundary dashed and shades above it, matching the picture exactly, so the answer is y > 2x − 1.',
        desmosLatex:['y>2x-1','y=2x-1','(0,0)']
      },
      {
        id:'HA3-02', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear inequality: dashed vs. solid boundary and which side',
        stem:'In the xy-plane, the solution set of the inequality −2y > 6x − 8 is a shaded region with a boundary line. Which statement about that graph is true?',
        choices:{
          A:'The boundary line is dashed, and the point (0, 0) is in the shaded region.',
          B:'The boundary line is dashed, and the point (0, 0) is not in the shaded region.',
          C:'The boundary line is solid, and the point (0, 0) is in the shaded region.',
          D:'The boundary line is solid, and the point (0, 0) is not in the shaded region.'
        },
        correct:'A',
        expCorrect:'Two separate questions. (1) Dashed or solid? The sign is >, strict, so the boundary line is NOT part of the solution set: it is drawn DASHED. (2) Which side? Test the origin in the inequality as given: −2(0) = 0 on the left, 6(0) − 8 = −8 on the right, and 0 > −8 is TRUE, so (0, 0) belongs to the shaded region. (Rewriting confirms it: dividing by −2 flips the sign, giving y < −3x + 4, and 0 < 4 ✓.)',
        expWrong:{
          B:'This is what you get if you divide by −2 and forget to flip the sign, landing on y > −3x + 4, which excludes the origin. Dividing an inequality by a negative number reverses it: the correct form is y < −3x + 4, and the origin IS a solution.',
          C:'The boundary is solid only for ≤ and ≥, which include the line. Here the sign is >, strict, so the line is dashed.',
          D:'Both halves are wrong: the strict > makes the boundary dashed, and testing (0, 0) gives 0 > −8, which is true, so the origin is inside the region.'
        },
        tip:'To decide the side, plug an easy point (usually the origin) into the inequality EXACTLY as it is printed — that sidesteps the flip entirely. To decide the line, look only at the sign: < and > are dashed, ≤ and ≥ are solid.',
        desmos:'Type -2y>6x-8: the boundary comes out dashed and the shading covers the origin, which is statement A.',
        desmosLatex:['-2y>6x-8','(0,0)']
      },
      {
        id:'HA3-03', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Solving a formula for a variable inside parentheses',
        stem:'A shipping company charges C dollars for a package that weighs w pounds, where w ≥ 3, according to the formula C = b + p(w − 3). In the formula, b and p are positive constants. Which equation correctly gives w in terms of C, b, and p?',
        choices:{
          A:'w = (C − b)/p − 3',
          B:'w = (C − b − 3)/p',
          C:'w = (C − b)/p + 3',
          D:'w = (C − b)/(p + 3)'
        },
        correct:'C',
        expCorrect:'Undo the operations in reverse order, treating (w − 3) as one block. Subtract b from both sides: C − b = p(w − 3). Divide both sides by p: (C − b)/p = w − 3. Finally add 3 to both sides: w = (C − b)/p + 3. (Check with b = 5 and p = 2: a package of w = 8 pounds costs C = 5 + 2(8 − 3) = 15, and the formula gives back (15 − 5)/2 + 3 = 5 + 3 = 8 ✓.)',
        expWrong:{
          A:'w = (C − b)/p − 3 moves the 3 the wrong way. In the original it is SUBTRACTED from w, so undoing it means adding 3, not subtracting it again.',
          B:'w = (C − b − 3)/p subtracts the 3 before dividing. Distributing first gives C = b + pw − 3p, so the number that comes off with b is 3p, not 3 — which is exactly why it is cleaner to divide by p first.',
          D:'w = (C − b)/(p + 3) glues the 3 onto the denominator. The 3 is added AFTER the division, so it stays outside the fraction: (C − b)/p + 3.'
        },
        tip:'When the variable you want sits inside parentheses, peel the outside first — subtract the loose constant, then divide by the coefficient — and only open or undo the parentheses at the end. Reverse order, opposite operations.',
        desmos:'With b = 5 and p = 2, type y=5+2(x-3) and the point (8,15): the graph passes through it, confirming that w = (C − b)/p + 3 sends C = 15 back to w = 8.',
        desmosLatex:['y=5+2\\left(x-3\\right)','(8,15)']
      },
      {
        id:'HA3-04', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Solving a formula for a variable with a fractional coefficient',
        stem:'The power output P of a motor is related to its setting s by the equation P = (3/4)s − t, where t is a positive constant. Which equation gives s in terms of P and t?',
        choices:{
          A:'s = (4/3)(P + t)',
          B:'s = (3/4)(P + t)',
          C:'s = (4/3)P + t',
          D:'s = (4/3)(P − t)'
        },
        correct:'A',
        expCorrect:'Add t to both sides first: P + t = (3/4)s. Now undo the fractional coefficient by multiplying both sides by its RECIPROCAL, 4/3: (4/3)(P + t) = s. So s = (4/3)(P + t). (Check with t = 2 and s = 8: P = (3/4)(8) − 2 = 6 − 2 = 4, and (4/3)(4 + 2) = (4/3)(6) = 8 ✓.)',
        expWrong:{
          B:'s = (3/4)(P + t) multiplies by the same fraction instead of by its reciprocal. To cancel a coefficient of 3/4 you multiply by 4/3; multiplying by 3/4 again shrinks the value a second time.',
          C:'s = (4/3)P + t multiplies only the P by 4/3. The t was moved across BEFORE the multiplication, so the 4/3 has to hit the whole group (P + t): (4/3)P + (4/3)t.',
          D:'s = (4/3)(P − t) keeps the minus sign. In the original the t is subtracted, so it crosses the equals sign as +t.'
        },
        tip:'Clear the loose constant first, then kill a fractional coefficient by multiplying both sides by its reciprocal. Whatever you multiply by hits EVERY term on the other side, so keep the parentheses.',
        desmos:'Set t = 2 and type y=(3/4)x-2 with the point (8,4): the graph passes through it, so s = (4/3)(4 + 2) = 8 recovers the setting.',
        desmosLatex:['y=\\frac{3}{4}x-2','(8,4)']
      },
      {
        id:'HA3-05', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Direct and inverse variation (two-factor model)',
        stem:'At a bottling plant, the time t, in hours, needed to finish an order varies directly with the number of units n in the order and inversely with the number of machines m that are running. An order of 240 units takes 30 hours when 4 machines are running. How many hours does an order of 400 units take when 10 machines are running?',
        choices:{A:'45', B:'125', C:'50', D:'20'},
        correct:'D',
        expCorrect:'Directly with n means n goes on TOP; inversely with m means m goes on the BOTTOM: t = kn/m. Find k from the order you are given: 30 = k(240)/4 = 60k, so k = 0.5. Now use the model for the new order: t = 0.5(400)/10 = 200/10 = 20 hours. (Check: 400 units is 5/3 as many as 240, which pushes the time up to 50, while 10 machines instead of 4 cuts it by a factor of 2.5, and 50/2.5 = 20 ✓.)',
        expWrong:{
          A:'45 comes from swapping the two roles, t = km/n. That model says more units make the job faster, which is backwards: units go on top, machines on the bottom.',
          B:'125 treats both quantities as direct, t = kmn. Adding machines would then make the job take longer — the opposite of what "inversely" says.',
          C:'50 scales only the units (30 × 400/240 = 50) and never uses the machines. Both factors change here, so both have to be applied.'
        },
        tip:'Turn the sentence straight into a fraction: "varies directly with" → numerator, "varies inversely with" → denominator. Solve for k with the one complete data set you are given, then substitute the new values.',
        desmos:'Type y = 0.5*400/x and read the graph at x = 10: y = 20, the number of hours the order takes with 10 machines.',
        desmosLatex:['y=0.5\\cdot\\frac{400}{x}','x=10','(10,20)']
      },
      {
        id:'HA3-06', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Inverse variation (constant product)',
        stem:'The number of hours h needed to finish a certain job varies inversely with the number of workers w assigned to it. A crew of 6 workers finishes the job in 14 hours. How many workers must be assigned so that the same job is finished in 4 hours?',
        answer:'21',
        expCorrect:'Inverse variation means h = k/w, which is the same as saying the product hw is constant. From the crew you are told about, k = hw = 6 × 14 = 84 (the job is worth 84 worker-hours). Now set the time to 4 hours: 4 = 84/w → 4w = 84 → w = 21 workers. (Check: 21 workers × 4 hours = 84 worker-hours ✓, the same total as 6 × 14.) Answer: 21.',
        expWrong:{},
        tip:'Inverse variation → the PRODUCT stays constant (hw = k), so multiply the pair you are given and divide by the new value. Direct variation is the other one, where the QUOTIENT stays constant (y/x = k).',
        desmos:'Type y=84/x together with y=4: they meet at x = 21, the number of workers needed.',
        desmosLatex:['y=\\frac{84}{x}','y=4','(21,4)']
      },
      {
        id:'HA3-07', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Number of solutions: the two equations are the same line',
        stem:'How many solutions (x, y) does the following system of equations have?<br><br>y = (3/4)x − 2<br>3x − 4y = 8',
        choices:{
          A:'Exactly one solution',
          B:'Exactly two solutions',
          C:'Infinitely many solutions',
          D:'No solution'
        },
        correct:'C',
        expCorrect:'Put the second equation into the same form as the first: 3x − 4y = 8 → −4y = −3x + 8 → y = (3/4)x − 2. That is the first equation, letter for letter: one single line written two ways. Every point on it satisfies both equations, so the system has infinitely many solutions. (Substitution says the same thing: 3x − 4((3/4)x − 2) = 3x − 3x + 8 = 8, true for every x.)',
        expWrong:{
          A:'Exactly one solution is what happens when the slopes DIFFER, so the lines cross once. Here both slopes are 3/4, so the lines never cross at a single point — they coincide.',
          B:'Two straight lines can meet at one point, at no point, or at every point. Exactly two intersections is impossible for a linear system.',
          D:'No solution requires equal slopes and DIFFERENT intercepts (parallel but separate). Here the intercepts also match, both −2, so the lines lie on top of each other.'
        },
        tip:'Rewrite both equations as y = mx + b, then compare: different m → one solution; same m and different b → no solution; same m and same b → infinitely many.',
        desmos:'Type both equations: only one line shows up on the screen because the second sits exactly on top of the first, which is what infinitely many solutions looks like.',
        desmosLatex:['y=\\frac{3}{4}x-2','3x-4y=8']
      },
      {
        id:'HA3-08', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Number of solutions: identifying the parallel system',
        stem:'Each of the following is a system of two linear equations graphed in the xy-plane. Which system has NO solution?',
        choices:{
          A:'y = 4x − 1 and y = −4x + 1',
          B:'2x + 6y = 9 and x + 3y = 12',
          C:'3x − y = 7 and 6x − 2y = 14',
          D:'x + y = 5 and x − y = 5'
        },
        correct:'B',
        expCorrect:'No solution means parallel but distinct lines: same slope, different intercept. Rewrite choice B: 2x + 6y = 9 → y = −(1/3)x + 3/2, and x + 3y = 12 → y = −(1/3)x + 4. Same slope −1/3, intercepts 3/2 and 4, so the lines never meet. (Elimination confirms it: doubling the second equation gives 2x + 6y = 24, next to 2x + 6y = 9 — the same left side cannot equal two different numbers.)',
        expWrong:{
          A:'Slopes 4 and −4 are different, so these two lines cross exactly once. Different slopes always guarantee one solution.',
          C:'Here the second equation is exactly 2 times the first (6x − 2y = 14 is double 3x − y = 7), so it is the SAME line: infinitely many solutions, not none. Proportional coefficients only mean "no solution" when the constant term does not follow the same proportion.',
          D:'x + y = 5 and x − y = 5 have slopes −1 and 1, so they cross once, at (5, 0).'
        },
        tip:'Scale one equation so the x- and y-coefficients match the other. If the constants then match too, it is one line (infinitely many); if the constants disagree, the lines are parallel (no solution).',
        desmos:'Graph 2x+6y=9 and x+3y=12: the two lines run parallel and never touch, so that system has no solution.',
        desmosLatex:['2x+6y=9','x+3y=12','3x-y=7','6x-2y=14']
      },
      {
        id:'HA3-09', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Age problem as a system of two equations',
        stem:'In 2014, Marisol was 4 times as old as her nephew Teo. In 2022, Marisol was twice as old as Teo. How old was Marisol in 2014?',
        choices:{A:'4', B:'24', C:'12', D:'16'},
        correct:'D',
        expCorrect:'Let m and k be the ages of Marisol and Teo in 2014. The first sentence gives m = 4k. The second sentence is set 8 years later, so BOTH ages grow by 8: m + 8 = 2(k + 8). Substitute m = 4k: 4k + 8 = 2k + 16 → 2k = 8 → k = 4, and m = 4(4) = 16. Marisol was 16 in 2014. (Check 2022: Marisol 24, Teo 12, and 24 = 2 × 12 ✓.)',
        expWrong:{
          A:'4 is Teo’s age in 2014 — the other person in the problem. The question asks about Marisol, whose age is 4 times that: 16.',
          B:'24 is Marisol’s age in 2022, not in 2014. Take the 8 years back off: 24 − 8 = 16.',
          C:'12 is Teo’s age in 2022: the wrong person AND the wrong year.'
        },
        tip:'Name the ages in ONE year, then add the same number of years to every person for the other year — a common mistake is aging only one of them. At the end, reread which person and which year the question asks for.',
        desmos:'Type y=4x and y=2x+8 (Marisol’s age against Teo’s in 2014): they meet at (4, 16), so Teo was 4 and Marisol was 16.',
        desmosLatex:['y=4x','y=2x+8','(4,16)']
      },
      {
        id:'HA3-10', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Coin problem as a system (count and value)',
        stem:'A jar contains only quarters, worth $0.25 each, and dimes, worth $0.10 each. The jar holds 78 coins with a total value of $13.20. How many more dimes than quarters are in the jar?',
        answer:'6',
        expCorrect:'Two unknowns need two equations: one that counts coins and one that counts money. Let q be the quarters and d the dimes. Counting coins: q + d = 78. Counting value in cents (to avoid decimals): 25q + 10d = 1,320. Substitute d = 78 − q into the value equation: 25q + 10(78 − q) = 1,320 → 25q + 780 − 10q = 1,320 → 15q = 540 → q = 36, so d = 78 − 36 = 42. The question asks for the DIFFERENCE: 42 − 36 = 6. (Check: 36 × $0.25 = $9.00 and 42 × $0.10 = $4.20, and $9.00 + $4.20 = $13.20 ✓.) Answer: 6.',
        expWrong:{},
        tip:'For coin and ticket problems, write one equation for HOW MANY and one for HOW MUCH, and convert the money to cents so the second equation has whole numbers. Then check the last line of the stem: it often asks for a difference or a total, not for one of the two counts.',
        desmos:'Type x+y=78 and 25x+10y=1320: they meet at (36, 42), so the answer is 42 − 36 = 6.',
        desmosLatex:['x+y=78','25x+10y=1320','(36,42)']
      },
      {
        id:'HA3-11', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Slope of a linear model read from a graph (units in context)',
        stem:'The graph shows the volume V, in liters, of water in a tank t minutes after a drain valve is opened. Which statement is the best interpretation of the slope of the line?',
        figure:FIG_TANK,
        choices:{
          A:'The volume of water in the tank decreases by 3 liters each minute.',
          B:'The volume of water in the tank decreases by 60 liters each minute.',
          C:'The volume of water in the tank decreases by 1 liter every 3 minutes.',
          D:'The tank held 20 liters of water at the moment the valve was opened.'
        },
        correct:'A',
        expCorrect:'Slope is rise over run between two points of the line. The graph shows (0, 60) and (20, 0), so the slope is (0 − 60)/(20 − 0) = −60/20 = −3. Now attach the units of the axes: V is in liters and t is in minutes, so the slope is −3 liters per minute, and the minus sign means the volume goes DOWN. The tank loses 3 liters each minute.',
        expWrong:{
          B:'60 is the starting volume, the V-intercept, not the rate. If the tank lost 60 liters per minute it would be empty after one minute, but the graph shows it takes 20.',
          C:'1 liter every 3 minutes is the slope upside down: 20/60 instead of 60/20. Rise over RUN means liters divided by minutes, not minutes divided by liters.',
          D:'20 is the t-intercept, the time when the tank runs dry — it is in minutes, not liters. The volume at t = 0 is 60 liters.'
        },
        tip:'The slope of a graph in context always carries the units of the vertical axis divided by the units of the horizontal axis (here liters per minute), and its sign tells you whether the quantity grows or shrinks. The intercepts are levels, never rates.',
        desmos:'Type y=-3x+60 and the points (0,60) and (20,0): the line passes through both, so the rate is −3 liters per minute.',
        desmosLatex:['y=-3x+60','(0,60)','(20,0)']
      },
      {
        id:'HA3-12', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Intercept of a linear model read from a graph (units in context)',
        stem:'A print shop takes orders of 20 posters or more. The graph shows the total charge C, in dollars, for an order of p posters; the segment shown begins at the smallest order the shop accepts. If the line were extended to the left until it met the C-axis, what would the value of C at that point represent?',
        figure:FIG_POSTER,
        choices:{
          A:'A charge of $3 for each poster printed.',
          B:'A fixed charge of $20 that is added to an order before any poster is printed.',
          C:'A fixed charge of $80 that is added to an order before any poster is printed.',
          D:'A charge of $4 for each poster printed.'
        },
        correct:'B',
        expCorrect:'Get the model first. The two marked points are (20, 80) and (60, 200), so the slope is (200 − 80)/(60 − 20) = 120/40 = 3 dollars per poster, and C = 3p + b. Put in (20, 80): 80 = 3(20) + b = 60 + b → b = 20. The C-intercept is 20, and since C is measured in dollars it is a charge of $20 that applies at p = 0 posters — a fixed setup fee added to every order. (Check with the other point: 3(60) + 20 = 200 ✓.)',
        expWrong:{
          A:'$3 per poster is the SLOPE, the part of the charge that grows with the order. The C-intercept is the part that does not depend on p at all.',
          C:'$80 is the charge for the smallest order the shop accepts, 20 posters — the height of the leftmost plotted point, not the height at p = 0. Of that $80, sixty dollars pays for the posters and $20 is the fixed fee.',
          D:'$4 per poster comes from dividing one point by itself, 80/20, as if the line went through the origin. The rate has to be a rise over a run between TWO points: 120/40 = 3.'
        },
        tip:'When the graph does not reach the vertical axis, find the slope from two marked points, then back out b from y = mx + b with one of them. Read the intercept in the units of the vertical axis: it is the value when the horizontal variable is zero, never a rate.',
        desmos:'Type y=3x+20 with the points (20,80) and (60,200): the line hits both, and at x = 0 it gives y = 20, the fixed $20 charge.',
        desmosLatex:['y=3x+20','(20,80)','(60,200)','(0,20)']
      }
    ]
  });
})();
