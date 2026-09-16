/* SAT Studio question set — Math: Algebra — Systems warm-up (WS1-01 to WS1-11) */
/* La rampa de ENTRADA de "Systems of two linear equations": el banco ya tenía 63
   de esta destreza y casi todas eran Difícil o brutal. Acá va el piso: sustitución
   y eliminación con números limpios, armar el sistema desde un pedido de dos cosas,
   leer el corte de dos rectas graficadas, contar soluciones (una / ninguna /
   infinitas) con su porqué, y comprobar si un par ordenado cumple las DOS. */
(function(){

  /* Mismo plano que math-hard-alg3: viewBox 300×300, origen en (150, 150),
     22 px por unidad, x e y de −6 a 6. Un punto (x, y) cae en
     (150 + 22x, 150 − 22y). */
  function planeGrid(){
    var s = '<g stroke="#d9d9d9" stroke-width="1">';
    for (var i = 0; i <= 12; i++){
      var p = 18 + i * 22;
      s += '<line x1="' + p + '" y1="18" x2="' + p + '" y2="282"/>';
      s += '<line x1="18" y1="' + p + '" x2="282" y2="' + p + '"/>';
    }
    return s + '</g>';
  }

  /* Dos rectas: y = x + 3 (de (−6, −3) a (3, 6)) y y = −2x − 3 (de (−4.5, 6)
     a (1.5, −6)). Se cortan en (−2, 1), que en pantalla es (106, 128). */
  var FIG_CROSS =
    '<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The xy-plane with two straight lines. One line rises from left to right and passes through the points (0, 3) and (3, 6). The other line falls steeply from left to right and passes through the points (0, −3) and (1, −5). The two lines cross at the point (−2, 1).">' +
    planeGrid() +
    '<line x1="18" y1="150" x2="282" y2="150" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<line x1="150" y1="18" x2="150" y2="282" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<line x1="18" y1="216" x2="216" y2="18" stroke="#324DC7" stroke-width="2.5"/>' +
    '<line x1="51" y1="18" x2="183" y2="282" stroke="#B4351C" stroke-width="2.5"/>' +
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

  window.SAT_SETS.push({
    id: 'math-systems-warm1',
    title: 'Systems of Two Equations — Warm-up',
    section: 'math',
    level: 'Fácil',
    description: 'The bottom rung for systems of two linear equations: substitution and elimination with clean numbers, building the two equations from a two-item order, reading the solution off two graphed lines, deciding whether a system has one solution, none, or infinitely many and why, and checking whether an ordered pair really satisfies both equations.',
    minutes: 16,
    questions: [

      {
        id:'WS1-01', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Systems of two linear equations: substitution when one equation is already solved for y',
        stem:'The system of equations below is given.<br><br>y = 2x + 5<br>3x + y = 30<br><br>If (x, y) is the solution to the system, what is the value of x?',
        choices:{A:'5', B:'6', C:'7', D:'15'},
        correct:'A',
        expCorrect:'The first equation already says what y is, so put that whole expression in place of y in the second one: 3x + (2x + 5) = 30. Combine the x terms: 5x + 5 = 30. Subtract 5 from both sides: 5x = 25, so x = 5. (Then y = 2(5) + 5 = 15. Check both: 15 = 2(5) + 5 ✓ and 3(5) + 15 = 15 + 15 = 30 ✓.)',
        expWrong:{
          B:'6 comes from dropping the +5 and solving 5x = 30. The 5 is part of what replaced y, so it stays in the equation and has to be subtracted first.',
          C:'7 adds the 5 instead of subtracting it: 5x + 5 = 30 becomes 5x = 25, not 5x = 35. Whatever is on the left with a plus sign leaves by subtracting.',
          D:'15 is y, not x. It is the right number for the other variable — the question asks for x, which is 5.'
        },
        tip:'When one equation is already in the form y = …, substitution is faster than anything else: copy that expression into the other equation, in parentheses, and you are left with one variable.',
        desmos:'Type y=2x+5 and 3x+y=30. Click where the two lines cross and Desmos labels the point (5, 15): the x-coordinate, 5, is the answer.',
        desmosLatex:['y=2x+5','3x+y=30']
      },

      {
        id:'WS1-02', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Systems of two linear equations: elimination when the y terms are already opposites',
        stem:'The system of equations below is given.<br><br>3x + y = 17<br>2x − y = 8<br><br>If (x, y) is the solution to the system, what is the value of y?',
        choices:{A:'−2', B:'2', C:'5', D:'12'},
        correct:'B',
        expCorrect:'The y terms are +y and −y, already opposites, so ADD the two equations and y disappears: (3x + 2x) + (y − y) = 17 + 8, which is 5x = 25, so x = 5. Now put x = 5 back into either equation: 3(5) + y = 17 gives 15 + y = 17, so y = 2. (Check the other one: 2(5) − 2 = 10 − 2 = 8 ✓.)',
        expWrong:{
          A:'−2 loses a sign in the last step. From 2(5) − y = 8 you get 10 − y = 8, so −y = −2 and y = +2. Dividing both sides by −1 flips the sign.',
          C:'5 is x, the variable that came out of the elimination first. The question asks for y, which takes one more step.',
          D:'12 comes from 17 − 5, using x by itself instead of 3x. The first equation has 3x, so the number to subtract is 3(5) = 15, not 5.'
        },
        tip:'Look at the two coefficients of the same variable before choosing a move: opposite signs (+y and −y) means ADD; identical terms (x and x) means SUBTRACT.',
        desmos:'Graph 3x+y=17 and 2x-y=8. Clicking the intersection shows (5, 2); the question asks for y, the second coordinate.',
        desmosLatex:['3x+y=17','2x-y=8']
      },

      {
        id:'WS1-03', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Systems of two linear equations: testing whether an ordered pair satisfies both equations',
        stem:'The system of equations below is given.<br><br>x + y = 9<br>2x − y = 3<br><br>Which ordered pair (x, y) satisfies BOTH equations of the system?',
        choices:{A:'(2, 1)', B:'(4, −5)', C:'(4, 5)', D:'(5, 4)'},
        correct:'C',
        expCorrect:'A solution has to work in both equations, so test both every time. For (4, 5): the first gives 4 + 5 = 9 ✓, and the second gives 2(4) − 5 = 8 − 5 = 3 ✓. Both hold, so (4, 5) is the solution. (Solving confirms it: adding the equations gives 3x = 12, so x = 4, and then 4 + y = 9 gives y = 5.)',
        expWrong:{
          A:'(2, 1) passes the second equation, 2(2) − 1 = 3 ✓, and fails the first: 2 + 1 = 3, not 9. Stopping after one equation is the most common way to pick a wrong pair here.',
          B:'(4, −5) has the right x with the sign of y flipped. From 2(4) − y = 3 you get 8 − y = 3, so −y = −5 and y = +5.',
          D:'(5, 4) is the solution with the coordinates written in the wrong order. It passes 5 + 4 = 9 ✓ but fails 2(5) − 4 = 6, not 3. The first number is always x.'
        },
        tip:'To check a pair you never have to solve anything: substitute the numbers into both equations. One failure is enough to throw the pair out, so test the shorter equation first.',
        desmos:'Graph x+y=9 and 2x-y=3, then type each pair, such as (4,5), as its own line. The solution is the only point that lands exactly where the two lines cross.',
        desmosLatex:['x+y=9','2x-y=3','(4,5)']
      },

      {
        id:'WS1-04', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Systems of two linear equations: reading the solution from two graphed lines',
        stem:'The two lines shown in the xy-plane above are the graphs of the two equations of a system of linear equations. What is the solution (x, y) of that system?',
        figure:FIG_CROSS,
        choices:{A:'(0, 3)', B:'(1, −2)', C:'(2, 1)', D:'(−2, 1)'},
        correct:'D',
        expCorrect:'On a graph, the solution of a system is the point that is on BOTH lines, which is where they cross. The crossing sits 2 units to the left of the y-axis and 1 unit above the x-axis, so it is (−2, 1). (The rising line is y = x + 3: −2 + 3 = 1 ✓. The falling line is y = −2x − 3: −2(−2) − 3 = 4 − 3 = 1 ✓.)',
        expWrong:{
          A:'(0, 3) is where the rising line crosses the y-axis. That point is on one line only; the falling line is down at −3 when x is 0.',
          B:'(1, −2) reverses the coordinates and the signs both at once. Read across first for x, then up for y: left of the y-axis makes x negative, above the x-axis makes y positive.',
          C:'(2, 1) is at the right height but on the wrong side of the y-axis. The crossing is to the LEFT of it, so x is −2.'
        },
        tip:'On a graph, one crossing means one solution, parallel lines mean no solution, and one line drawn twice means infinitely many. Always read the crossing as (across, up), not (up, across).',
        desmos:'Type y=x+3 and y=-2x-3 to rebuild the picture, then click the crossing: Desmos labels it (−2, 1).',
        desmosLatex:['y=x+3','y=-2x-3']
      },

      {
        id:'WS1-05', type:'spr', domain:'Algebra', difficulty:'Fácil',
        skill:'Systems of two linear equations: elimination by subtracting when one variable matches',
        stem:'The system of equations below is given.<br><br>x + 3y = 22<br>x + y = 10<br><br>If (x, y) is the solution to the system, what is the value of y?',
        answer:'6',
        expCorrect:'Both equations carry exactly one x, so SUBTRACTING the second from the first removes it: (x − x) + (3y − y) = 22 − 10, which is 2y = 12, so y = 6. (Then x + 6 = 10 gives x = 4. Check the first: 4 + 3(6) = 4 + 18 = 22 ✓.)',
        tip:'Identical terms cancel by subtraction, opposite terms cancel by addition. Subtract the WHOLE equation, right-hand side included, or the balance is lost.',
        desmos:'Graph x+3y=22 and x+y=10 and click where they meet: (4, 6). The question asks for y, so the answer is 6.',
        desmosLatex:['x+3y=22','x+y=10']
      },

      {
        id:'WS1-06', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two linear equations built from a two-item order',
        stem:'A plant shop sells succulents in two sizes, and every plant of the same size has the same price. Three small succulents and two large succulents cost $37 in total. One small succulent and four large succulents cost $39 in total. What is the price of one small succulent?',
        choices:{A:'$7', B:'$8', C:'$15', D:'$21'},
        correct:'A',
        expCorrect:'Let s be the price of a small one and L the price of a large one, then write one equation per order: 3s + 2L = 37 and s + 4L = 39. The second one is easy to rearrange: s = 39 − 4L. Substitute it into the first: 3(39 − 4L) + 2L = 37 → 117 − 12L + 2L = 37 → −10L = −80 → L = 8. Then s = 39 − 4(8) = 39 − 32 = 7. (Check both orders: 3(7) + 2(8) = 21 + 16 = 37 ✓ and 7 + 4(8) = 7 + 32 = 39 ✓.)',
        expWrong:{
          B:'$8 is the price of a LARGE succulent. It is the number the algebra hands you first, which is exactly why it is worth circling the word the question asks about before starting.',
          C:'$15 is 7 + 8, the cost of one of each. That answers a question nobody asked.',
          D:'$21 is what the THREE small ones cost together in the first order (37 − 16 = 21). One small one is 21 ÷ 3 = 7.'
        },
        tip:'Two unknown prices, two orders, two equations. Name the unknowns with a letter each, keep the columns lined up (smalls with smalls, larges with larges, dollars with dollars), and check at the end which price was actually requested.',
        desmos:'Let x be the small price and y the large price, then graph 3x+2y=37 and x+4y=39. They cross at (7, 8), so a small succulent is $7.',
        desmosLatex:['3x+2y=37','x+4y=39']
      },

      {
        id:'WS1-07', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two linear equations: how many solutions when one equation is a multiple of the other',
        stem:'The system of equations below is given.<br><br>2x − 5y = 8<br>6x − 15y = 24<br><br>How many solutions (x, y) does this system have?',
        choices:{A:'Exactly one', B:'Exactly two', C:'None', D:'Infinitely many'},
        correct:'D',
        expCorrect:'Compare the two equations term by term: 6 is 3 times 2, −15 is 3 times −5, and 24 is 3 times 8. Multiplying the first equation by 3 produces the second one exactly, so the two equations describe the SAME line and every point on it solves both. That is infinitely many solutions. (Try any point of the line: (4, 0) gives 2(4) − 0 = 8 ✓ and 6(4) − 0 = 24 ✓; (9, 2) gives 18 − 10 = 8 ✓ and 54 − 30 = 24 ✓.)',
        expWrong:{
          A:'Exactly one is what happens when the two lines have different slopes and cross at a single point. Here there is really only one line on the screen, drawn twice.',
          B:'Exactly two is impossible for two straight lines: they either cross once, never cross, or lie on top of each other. Two solutions belongs to curves, not lines.',
          C:'None would need the same left side with a DIFFERENT constant, like 6x − 15y = 30. Tripling the first equation lands on 24, which is exactly the constant the second one already has.'
        },
        tip:'Scale one equation so the left sides match, then look at the right sides: same constant means one line and infinitely many solutions; different constant means parallel lines and no solution.',
        desmos:'Graph 2x-5y=8 and 6x-15y=24: Desmos draws what looks like a single line, because the second equation is the first one tripled.',
        desmosLatex:['2x-5y=8','6x-15y=24']
      },

      {
        id:'WS1-08', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two linear equations: explaining why a system has no solution',
        stem:'The system of equations below is given.<br><br>y = −3x + 5<br>6x + 2y = 14<br><br>Which statement about this system is true?',
        choices:{
          A:'It has exactly one solution: two different linear equations always cross somewhere.',
          B:'It has infinitely many solutions: one equation is a multiple of the other.',
          C:'It has no solution: the two lines have the same slope but different y-intercepts.',
          D:'It has no solution: the two lines have different slopes, so they never meet.'
        },
        correct:'C',
        expCorrect:'Put the second equation in the same form as the first: 6x + 2y = 14 → 2y = −6x + 14 → y = −3x + 7. Now compare: both slopes are −3, but one line crosses the y-axis at 5 and the other at 7. Same steepness, different starting height means the lines stay a fixed distance apart and never meet, so the system has no solution. (Setting them equal confirms it: −3x + 5 = −3x + 7 leads to 5 = 7, which is false for every x.)',
        expWrong:{
          A:'Two different linear equations do NOT always cross. Parallel lines are different equations and never meet, and that is exactly the case here.',
          B:'Doubling the first equation gives 6x + 2y = 10, not 6x + 2y = 14. The left sides match but the constants do not, so the second equation is not a multiple of the first.',
          D:'The verdict is right and the reason is wrong, which on a "why" question counts as wrong. Different slopes is the case in which two lines DO cross, at exactly one point.'
        },
        tip:'Rewrite both equations as y = mx + b before deciding: same m and different b means no solution, same m and same b means infinitely many, different m means exactly one.',
        desmos:'Graph y=-3x+5 and 6x+2y=14: two lines with the same tilt that stay apart no matter how far you zoom out.',
        desmosLatex:['y=-3x+5','6x+2y=14']
      },

      {
        id:'WS1-09', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two linear equations from a count and a total (tickets)',
        stem:'A city aquarium charges $14 for an adult ticket and $9 for a child ticket. On Tuesday the aquarium sold 52 tickets in total and collected $608 from them. How many child tickets did the aquarium sell on Tuesday?',
        answer:'24',
        expCorrect:'Let a be the number of adult tickets and c the number of child tickets. One equation counts tickets and the other counts dollars: a + c = 52 and 14a + 9c = 608. From the count equation, a = 52 − c. Substitute into the money equation: 14(52 − c) + 9c = 608 → 728 − 14c + 9c = 608 → 728 − 5c = 608 → 5c = 120 → c = 24. (Then a = 28. Check: 28($14) = $392, 24($9) = $216, and 392 + 216 = 608 ✓, with 28 + 24 = 52 tickets ✓.)',
        tip:'Word problems about tickets, coins, or mixtures give you two different equations about the same two unknowns: one that counts things and one that counts money. Only the money equation carries the prices.',
        desmos:'Let x be adult tickets and y child tickets, then graph x+y=52 and 14x+9y=608. The lines meet at (28, 24), and the question asks for the child tickets: 24.',
        desmosLatex:['x+y=52','14x+9y=608']
      },

      {
        id:'WS1-10', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Systems of two linear equations: elimination that needs one equation scaled first',
        stem:'The system of equations below is given.<br><br>2x + 3y = 14<br>4x − y = 14<br><br>If (x, y) is the solution to the system, what is the value of y?',
        choices:{A:'−2', B:'0', C:'2', D:'4'},
        correct:'C',
        expCorrect:'Nothing cancels as the equations stand, so scale one of them first. Multiply the WHOLE first equation by 2: 4x + 6y = 28. Now both start with 4x, so subtract the second equation from it: (4x − 4x) + (6y − (−y)) = 28 − 14, which is 7y = 14, so y = 2. (Then 4x − 2 = 14 gives 4x = 16 and x = 4. Check the first: 2(4) + 3(2) = 8 + 6 = 14 ✓.)',
        expWrong:{
          A:'−2 flips a sign at the end. From 4(4) − y = 14 you get 16 − y = 14, so −y = −2 and y = +2.',
          B:'0 comes from doubling only the left side of the first equation: 4x + 6y = 14 instead of 4x + 6y = 28. Multiplying an equation means multiplying every term, the constant included.',
          D:'4 is x, not y. It is the value of the other variable, and it is what you get if you eliminate y instead and then forget which one was asked for.'
        },
        tip:'When no coefficient matches, pick the pair that is easiest to match and multiply one entire equation, both sides. Subtracting a −y adds y, so watch that double sign while combining.',
        desmos:'Graph 2x+3y=14 and 4x-y=14 and click the crossing: (4, 2). The question asks for y, so the answer is 2.',
        desmosLatex:['2x+3y=14','4x-y=14']
      },

      {
        id:'WS1-11', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Systems of two linear equations: the constant that leaves the system with no solution',
        stem:'In the system of equations below, k is a constant.<br><br>y = 2x + 1<br>4x − ky = 9<br><br>For which value of k does the system have NO solution?',
        choices:{A:'−2', B:'2', C:'4', D:'8'},
        correct:'B',
        expCorrect:'Substitute the first equation into the second and see what has to go wrong: 4x − k(2x + 1) = 9 → 4x − 2kx − k = 9 → (4 − 2k)x = 9 + k. A system has no solution when the variable vanishes and the two sides disagree, so force 4 − 2k = 0, which gives k = 2; then the equation reads 0 = 11, false for every x, so there is no solution. (Seen as graphs: with k = 2 the second equation is 4x − 2y = 9, that is y = 2x − 4.5, which has the same slope 2 as y = 2x + 1 and a different intercept: parallel lines.)',
        expWrong:{
          A:'−2 solves 4 + 2k = 0, which is what you get if the minus sign in −k(2x + 1) is not distributed. With k = −2 the second equation is 4x + 2y = 9, whose slope is −2, so those lines cross once.',
          C:'4 matches k to the 4 in front of x, as if the two coefficients had to be equal. With k = 4 the second line is y = x − 2.25, slope 1, and it does cross y = 2x + 1.',
          D:'8 flips the ratio, solving k/4 = 2 instead of 4/k = 2. With k = 8 the second line has slope 4/8 = 1/2, far flatter than 2, so there is exactly one solution.'
        },
        tip:'For "no solution" with a parameter, make the variable disappear and the statement turn false. The slope version is the same rule: match the slopes, then confirm the intercepts DIFFER, or the system would have infinitely many solutions instead.',
        desmos:'Graph y=2x+1 and 4x-2y=9 (which is k = 2): two parallel lines that never meet. Replace the 2 in 4x-2y=9 with any other number and the lines cross once.',
        desmosLatex:['y=2x+1','4x-2y=9']
      }

    ]
  });
})();
