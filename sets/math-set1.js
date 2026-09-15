/* SAT Studio question set — Math: Mixed Practice Set 1 (M-001 a M-010) */
(function(){
  var FIG_TRIANGLE =
    '<svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right triangle with legs 15 and 8 and hypotenuse x">' +
    '<polygon points="30,130 210,130 210,34" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="196" y="116" width="14" height="14" fill="none" stroke="#1e1e1e" stroke-width="2"/>' +
    '<text x="115" y="152" font-size="16" font-family="Georgia,serif" text-anchor="middle">15</text>' +
    '<text x="222" y="86" font-size="16" font-family="Georgia,serif">8</text>' +
    '<text x="100" y="72" font-size="17" font-family="Georgia,serif" font-style="italic">x</text>' +
    '<text x="12" y="150" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_BARS = (function(){
    // frequencies for 1..5 books: 3, 5, 4, 2, 1 (15 students)
    var freqs = [3,5,4,2,1];
    var svg = '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar graph: number of books read last month by 15 students">';
    svg += '<line x1="48" y1="150" x2="280" y2="150" stroke="#1e1e1e" stroke-width="2"/>';
    svg += '<line x1="48" y1="150" x2="48" y2="20" stroke="#1e1e1e" stroke-width="2"/>';
    for(var g=1; g<=5; g++){
      var y = 150 - g*24;
      svg += '<line x1="44" y1="'+y+'" x2="280" y2="'+y+'" stroke="#d9d9d9" stroke-width="1"/>';
      svg += '<text x="38" y="'+(y+4)+'" font-size="11" text-anchor="end" font-family="Arial,sans-serif">'+g+'</text>';
    }
    for(var i=0; i<5; i++){
      var h = freqs[i]*24;
      var x = 62 + i*44;
      svg += '<rect x="'+x+'" y="'+(150-h)+'" width="26" height="'+h+'" fill="#324DC7"/>';
      svg += '<text x="'+(x+13)+'" y="166" font-size="12" text-anchor="middle" font-family="Arial,sans-serif">'+(i+1)+'</text>';
    }
    svg += '<text x="164" y="186" font-size="12" text-anchor="middle" font-family="Arial,sans-serif">Number of books read</text>';
    svg += '<text x="14" y="90" font-size="12" text-anchor="middle" font-family="Arial,sans-serif" transform="rotate(-90 14 90)">Number of students</text>';
    svg += '</svg>';
    return svg;
  })();

  window.SAT_SETS.push({
    id: 'math-set1',
    title: 'Math Mixed Practice — Set 1',
    section: 'math',
    description: 'Algebra, Advanced Math, Problem-Solving & Data Analysis, and Geometry/Trig. Includes 3 SPR (student-produced response) questions to practice the real exam entry rules.',
    minutes: 15,
    questions: [
      {
        id:'M-001', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear equations (manipulating expressions)',
        stem:'If 3x \u2212 7 = 14, what is the value of 6x \u2212 14?',
        choices:{A:'7', B:'28', C:'35', D:'42'},
        correct:'B',
        expCorrect:'You do not need to solve for x: notice that 6x \u2212 14 = 2(3x \u2212 7). Since 3x \u2212 7 = 14, then 6x \u2212 14 = 2 \u00d7 14 = 28. (The long check: 3x = 21 → x = 7 → 6(7) \u2212 14 = 42 \u2212 14 = 28.)',
        expWrong:{
          A:'7 is the value of x, not of 6x \u2212 14. The SAT almost always plants "x" as a distractor when it asks for an expression.',
          C:'35 sale de calcular 6x \u2212 7 (olvidando duplicar el \u22127).',
          D:'42 is only 6x. You forgot to subtract the 14.'
        },
        tip:'Before solving, ask yourself: is the expression they want a MULTIPLE of the one they gave me? Here 6x\u221214 = 2(3x\u22127). Double it and you are done — 5 seconds.'
      },
      {
        id:'M-002', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Porcentajes (descuento)',
        stem:'A jacket has an original price of $80. During a sale, the price of the jacket is reduced by 35%. What is the sale price of the jacket?',
        choices:{A:'$28', B:'$45', C:'$52', D:'$55'},
        correct:'C',
        expCorrect:'Reducir 35% = pagar el 65%. Precio de oferta = 0.65 \u00d7 80 = $52.',
        expWrong:{
          A:'$28 is the DISCOUNT (0.35 \u00d7 80), not the final price. A classic distractor.',
          B:'$45 comes from subtracting 35 directly (80 \u2212 35), treating the percent as dollars.',
          D:'$55 is an incorrect rough calculation; 80 \u2212 0.35(80) = 52, not 55.'
        },
        tip:'Descuento de p% → multiplica por (1 \u2212 p/100) en un solo paso. "Reduced by 35%" = \u00d70.65. Nunca calcules el descuento aparte si piden el precio final.'
      },
      {
        id:'M-003', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas de ecuaciones lineales',
        stem:'The system of equations below is given.<br><br>x + 2y = 17<br>x \u2212 y = 5<br><br>If (x, y) is the solution to the system, what is the value of x?',
        answer:'9',
        expCorrect:'Resta las ecuaciones: (x + 2y) \u2212 (x \u2212 y) = 17 \u2212 5 → 3y = 12 → y = 4. Sustituye: x \u2212 4 = 5 → x = 9. (Verifica: 9 + 8 = 17 ✓.) Respuesta: 9.',
        expWrong:{},
        tip:'Desmos trick: type both equations exactly as they are into the calculator and tap the intersection point — it hands you (9, 4) instantly. Careful: the question asks for x, not y (4 would be the trap).'
      },
      {
        id:'M-004', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Quadratic functions (vertex from factored form)',
        stem:'The function f is defined by f(x) = (x \u2212 3)(x + 5). Which of the following is the x-coordinate of the vertex of the graph of y = f(x) in the xy-plane?',
        choices:{A:'\u22125', B:'\u22121', C:'1', D:'3'},
        correct:'B',
        expCorrect:'The roots are x = 3 and x = \u22125. By the symmetry of the parabola, the vertex sits at the midpoint of the roots: (3 + (\u22125))/2 = \u22122/2 = \u22121.',
        expWrong:{
          A:'\u22125 is one of the roots, not the vertex.',
          C:'1 comes from averaging 3 and \u22125 with a sign error: (3+5)/2 = 4 or (3\u22125)/2 miscomputed. The correct average is \u22121.',
          D:'3 is the other root. The vertex sits BETWEEN the roots, not on them.'
        },
        tip:'Factored form → vertex_x = the average of the roots. In Desmos: graph (x\u22123)(x+5) and tap the minimum point; it marks (\u22121, \u221216).'
      },
      {
        id:'M-005', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Pythagorean theorem',
        figure: FIG_TRIANGLE,
        stem:'In the right triangle shown, the two legs have lengths 15 and 8. What is the value of x, the length of the hypotenuse?',
        choices:{A:'13', B:'17', C:'19', D:'23'},
        correct:'B',
        expCorrect:'Pythagoras: x\u00b2 = 15\u00b2 + 8\u00b2 = 225 + 64 = 289 → x = \u221a289 = 17. (8-15-17 is a classic Pythagorean triple, like 3-4-5 and 5-12-13.)',
        expWrong:{
          A:'13 belongs to the 5-12-13 triple; here the legs are 8 and 15.',
          C:'19 sale de errores de suma (225 + 64 = 289, no 361).',
          D:'23 = 15 + 8. The hypotenuse is NEVER the sum of the legs (that would be a degenerate triangle).'
        },
        tip:'Memorize the triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25 (and their multiples). Seeing "15 and 8" should shout "17" at you with no computing. The formula is in the app Reference Sheet.'
      },
      {
        id:'M-006', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Median from a frequency graph',
        figure: FIG_BARS,
        passage:'The bar graph shows the number of books read last month by each of the 15 students in a book club.',
        stem:'What is the median number of books read by the 15 students?',
        choices:{A:'1', B:'2', C:'2.5', D:'3'},
        correct:'B',
        expCorrect:'With 15 data points, the median is value #8 once they are in order. Adding up frequencies: 1 book → students 1–3; 2 books → students 4–8. The eighth student falls in "2 books", so the median is 2.',
        expWrong:{
          A:'1 is the smallest value / the one with the first frequency, not the one in the middle.',
          C:'2.5 would be averaging two middle values — that applies with an EVEN number of data points; here there are 15 (odd).',
          D:'3 is the visually tempting mode if you misread the tallest bar, or a miscomputed average. The tallest bar (mode) is 2, and the median is 2 as well.'
        },
        tip:'Median with frequencies: middle position = (n+1)/2 → here #8. Add bars from left to right until you cover that position. Do not confuse median with mode or with mean.'
      },
      {
        id:'M-007', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Ecuaciones racionales',
        stem:'If <span style="white-space:nowrap">3/(x + 1) = 12</span>, what is the value of x?',
        answer:'-3/4',
        expCorrect:'Multiply both sides by (x + 1): 3 = 12(x + 1) → 3 = 12x + 12 → 12x = \u22129 → x = \u22129/12 = \u22123/4. Valid forms for the box: -3/4, -.75 or -0.75 (also -9/12, since it is the same value). Careful: 0.75 without the sign would be wrong.',
        expWrong:{},
        tip:'Desmos trick: graph y = 3/(x+1) and y = 12; the intersection point gives you x = \u22120.75. For the box: negatives get 6 spaces (the sign counts as a character).'
      },
      {
        id:'M-008', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Media (efecto de agregar un dato)',
        stem:'The mean of a list of 5 numbers is 14. When a 6th number is added to the list, the mean of the 6 numbers is 16. What is the value of the 6th number?',
        choices:{A:'16', B:'18', C:'24', D:'26'},
        correct:'D',
        expCorrect:'Original sum = 5 \u00d7 14 = 70. New sum = 6 \u00d7 16 = 96. The sixth number = 96 \u2212 70 = 26.',
        expWrong:{
          A:'16 is the new mean; to RAISE the mean from 14 to 16, the added number has to be ABOVE 16.',
          B:'18 comes from reasoning "2 more than 16", but the new value has to make up +2 for EACH of the 6 values: 16 + 5(2) = 26.',
          C:'24 comes from 16 + 4\u00d72 (miscounting how many values need making up for).'
        },
        tip:'Mean = ALWAYS work with total sums: sum = mean \u00d7 count. Two sums, one subtraction, zero tangles. Mental shortcut: new value = new mean + n_old \u00d7 (the rise) = 16 + 5(2) = 26.'
      },
      {
        id:'M-009', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Trigonometry (complementary angles)',
        stem:'In right triangle ABC, the measure of angle B is 90\u00b0 and sin A = 3/5. What is the value of cos C?',
        choices:{A:'3/5', B:'4/5', C:'3/4', D:'5/3'},
        correct:'A',
        expCorrect:'Since B = 90\u00b0, angles A and C are complementary (A + C = 90\u00b0). Key SAT identity: sin A = cos(90\u00b0 \u2212 A) = cos C. So cos C = 3/5, with nothing else to compute.',
        expWrong:{
          B:'4/5 is cos A (or sin C) — the co-function of the SAME angle, not of the complementary one.',
          C:'3/4 es tan A; no es lo que piden.',
          D:'5/3 is 1/sin A flipped; a sine or cosine can never be greater than 1 in a triangle.'
        },
        tip:'Star rule: sin(x) = cos(90\u00b0 \u2212 x). In a right triangle, the sine of one acute angle = the cosine of the other. If you see "sin A … cos C" with B = 90°, the answer is immediate.'
      },
      {
        id:'M-010', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Discriminante (soluciones no reales)',
        stem:'The equation 2x\u00b2 + bx + 8 = 0, where b is a positive integer, has no real solutions. What is the greatest possible value of b?',
        answer:'7',
        expCorrect:'"No real solutions" ⇔ negative discriminant: b\u00b2 \u2212 4ac &lt; 0 → b\u00b2 \u2212 4(2)(8) &lt; 0 → b\u00b2 &lt; 64 → \u22128 &lt; b &lt; 8. The largest positive integer strictly less than 8 is 7. (With b = 8 the discriminant would be 0 and there would be ONE real solution — no good.)',
        expWrong:{},
        tip:'Discriminant b\u00b2\u22124ac: &lt;0 no real solutions, =0 one, &gt;0 two. The trap is always at the boundary: the inequality is STRICT, so 8 does not count. Check in Desmos: 2x\u00b2+7x+8 does not touch the x-axis; 2x\u00b2+8x+8 does.'
      }
    ]
  });
})();
