/* SAT Studio question set — EXTREME Math: Geometry & Trig (XG-01 a XG-12) */
(function(){
  var FIG_ALTITUDE =
    '<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right triangle ABC with the right angle at C. The altitude from C meets hypotenuse AB at D, with AD equal to 4 and DB equal to 9.">' +
    '<polygon points="30,150 270,150 104,40" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="104" y1="40" x2="104" y2="150" stroke="#1e1e1e" stroke-width="2" stroke-dasharray="5,4"/>' +
    '<rect x="104" y="136" width="13" height="14" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<text x="22" y="166" font-size="15" font-family="Georgia,serif" font-style="italic">A</text>' +
    '<text x="268" y="166" font-size="15" font-family="Georgia,serif" font-style="italic">B</text>' +
    '<text x="98" y="32" font-size="15" font-family="Georgia,serif" font-style="italic">C</text>' +
    '<text x="100" y="168" font-size="15" font-family="Georgia,serif" font-style="italic">D</text>' +
    '<text x="62" y="145" font-size="14" font-family="Georgia,serif">4</text>' +
    '<text x="184" y="145" font-size="14" font-family="Georgia,serif">9</text>' +
    '<text x="12" y="184" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_TANGENT =
    '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle with center O and radius 5. Point P is outside the circle with OP equal to 13. Segment PT is tangent to the circle at point T.">' +
    '<circle cx="95" cy="95" r="60" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="95" cy="95" r="2.5" fill="#1e1e1e"/>' +
    '<line x1="95" y1="95" x2="295" y2="140" stroke="#1e1e1e" stroke-width="2"/>' +
    '<line x1="95" y1="95" x2="122" y2="41" stroke="#324DC7" stroke-width="2"/>' +
    '<line x1="122" y1="41" x2="295" y2="140" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="122" cy="41" r="2.5" fill="#1e1e1e"/>' +
    '<circle cx="295" cy="140" r="2.5" fill="#1e1e1e"/>' +
    '<text x="80" y="112" font-size="15" font-family="Georgia,serif" font-style="italic">O</text>' +
    '<text x="116" y="30" font-size="15" font-family="Georgia,serif" font-style="italic">T</text>' +
    '<text x="302" y="146" font-size="15" font-family="Georgia,serif" font-style="italic">P</text>' +
    '<text x="94" y="62" font-size="13" font-family="Georgia,serif" fill="#324DC7">5</text>' +
    '<text x="185" y="132" font-size="13" font-family="Georgia,serif">13</text>' +
    '<text x="12" y="184" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. PT is tangent to the circle at T.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-x-geo',
    title: 'Extreme — Geometry & Trig',
    section: 'math',
    level: 'Extreme',
    description: 'Hard-Module-2 level: circle systems with tangency, similar-triangle chains, cofunction trig, and volume-rate problems.',
    minutes: 20,
    questions: [
      {
        id:'XG-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Circle (coefficient ≠ 1, tangency)',
        stem:'In the xy-plane, the graph of 2x² + 2y² − 12x + 4y = k, where k is a constant, is a circle that is tangent to the x-axis. What is the value of k?',
        choices:{A:'−36', B:'−18', C:'−20', D:'−2'},
        correct:'B',
        expCorrect:'First divide EVERYTHING by 2: x² + y² − 6x + 2y = k/2. Complete the square: (x − 3)² − 9 + (y + 1)² − 1 = k/2 → (x − 3)² + (y + 1)² = k/2 + 10. The center is (3, −1). To be tangent to the x-axis, the radius has to equal the vertical distance from the center to the axis: r = |−1| = 1, so r² = 1. Then k/2 + 10 = 1 → k/2 = −9 → k = −18. (Check: (x − 3)² + (y + 1)² = 1 touches the x-axis only at (3, 0) ✓.)',
        expWrong:{
          A:'−36 comes from completing the square WITHOUT dividing by 2 first: (x − 6)² + (y + 2)² = k + 40 with a “radius” of 2 gives k = −36. With a coefficient of 2 you have to divide the whole equation before completing the square.',
          C:'−20 makes k/2 + 10 = 0, which gives a single point (zero radius), not a circle tangent to the x-axis. Tangency with the x-axis demands r = 1, not r = 0.',
          D:'−2 uses the distance to the y-axis (|3| = 3, r² = 9): that would be tangent to the Y-axis. They asked for tangent to the x-axis, which depends on the y-coordinate of the center.'
        },
        tip:'With a leading coefficient ≠ 1, the FIRST step is always dividing the whole equation. Tangent to the x-axis → radius = |the y-coordinate of the center|. Tangent to the y-axis → radius = |h|. And remember: the right-hand side of standard form is r², not r.',
        desmos:'Graph 2x^2+2y^2-12x+4y=-18 in Desmos and you will see the circle touching the x-axis at a single point, (3, 0). Change the −18 to −36 and the tangency disappears.',
        desmosLatex:['2x^2+2y^2-12x+4y=-18', '(x-3)^2+(y+1)^2=1']
      },
      {
        id:'XG-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Circle (coefficient ≠ 1 → diameter)',
        stem:'The graph of 2x² + 2y² + 16x − 8y = −22 in the xy-plane is a circle. What is the length of the diameter of the circle?',
        choices:{A:'3', B:'9', C:'6', D:'18'},
        correct:'C',
        expCorrect:'Divide by 2: x² + y² + 8x − 4y = −11. Complete the square: (x + 4)² − 16 + (y − 2)² − 4 = −11 → (x + 4)² + (y − 2)² = 9. So r² = 9 → r = 3, and the DIAMETER = 2r = 6. (Check: −11 + 16 + 4 = 9 ✓.)',
        expWrong:{
          A:'3 is the RADIUS. The question asks for the diameter, which is double: 6. This is the classic trap of stopping at the intermediate value.',
          B:'9 is r², the right-hand side of the standard equation. It is not even the radius: you still have to take the root (r = 3) and then double it (d = 6).',
          D:'18 doubles r² (2 × 9) instead of doubling the radius (2 × 3). Root first, double after.'
        },
        tip:'The full chain: divide by the coefficient → complete the square → r² → square root → r → did they ask for the radius or the diameter? Underline the word “diameter” in the stem: the test ALWAYS plants the radius as a distractor.',
        desmos:'Graph 2x^2+2y^2+16x-8y=-22 in Desmos: a circle centered at (−4, 2). From x=−7 to x=−1 through the center is 6 units: that is the diameter.',
        desmosLatex:['2x^2+2y^2+16x-8y=-22', '(x+4)^2+(y-2)^2=9']
      },
      {
        id:'XG-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Circle + line system (number of solutions)',
        stem:'In the xy-plane, how many points of intersection do the graphs of 3x² + 3y² = 48 and y = x + 6 have?',
        choices:{A:'Zero', B:'Exactly one', C:'Exactly two', D:'Infinitely many'},
        correct:'A',
        expCorrect:'Divide by 3: x² + y² = 16, a circle with center (0, 0) and radius 4. Substitute y = x + 6: x² + (x + 6)² = 16 → 2x² + 12x + 36 = 16 → 2x² + 12x + 20 = 0 → x² + 6x + 10 = 0. Discriminant: 6² − 4(1)(10) = 36 − 40 = −4 < 0, so there are NO real solutions: zero intersections. (Geometric check: the distance from the center to the line x − y + 6 = 0 is 6/√2 = 3√2 ≈ 4.24 > 4 = the radius; the line passes outside ✓.)',
        expWrong:{
          B:'Exactly one intersection would require a discriminant of 0 (a tangent line), that is, the distance from the center to the line EQUAL to the radius. Here 3√2 ≈ 4.24 ≠ 4.',
          C:'Two intersections would need a positive discriminant (a secant line). If you do not divide by 3 and treat √48 ≈ 6.9 as the radius, you wrongly conclude the line cuts through — the real radius is 4.',
          D:'Infinitely many solutions only happen when the two equations describe the SAME curve. A line and a circle never coincide.'
        },
        tip:'Circle + line system: substitute, build the quadratic and look at the DISCRIMINANT: positive → 2 solutions, zero → 1 (tangent), negative → 0. Geometric shortcut: compare the distance from the center to the line against the radius. Do not forget to divide 3x² + 3y² = 48 first: the radius is 4, not √48.',
        desmos:'Graph x^2+y^2=16 and y=x+6 in Desmos: the line passes entirely outside the circle without touching it. Zero intersections, plain to see.',
        desmosLatex:['x^2+y^2=16', 'y=x+6']
      },
      {
        id:'XG-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Circle (coefficient ≠ 1, condition on k)',
        stem:'In the xy-plane, the graph of 2x² + 2y² − 20x + 12y = k, where k is a constant, is a circle with radius 6. What is the value of k?',
        choices:{A:'−100', B:'−56', C:'2', D:'4'},
        correct:'D',
        expCorrect:'Divide by 2: x² + y² − 10x + 6y = k/2. Complete the square: (x − 5)² − 25 + (y + 3)² − 9 = k/2 → (x − 5)² + (y + 3)² = k/2 + 34. A radius of 6 means r² = 36, so k/2 + 34 = 36 → k/2 = 2 → k = 4. (Check: with k = 4 the right-hand side is 2/2 + 34 = 36 = 6² ✓.)',
        expWrong:{
          A:'−100 comes from completing the square without dividing by 2: (x − 10)² + (y + 6)² = k + 136 = 36 → k = −100. The coefficient of 2 forces you to divide the whole equation first.',
          B:'−56 sets k/2 + 34 equal to 6 (the radius) instead of 36 (the radius squared). The right-hand side of standard form is r², not r.',
          C:'2 is the value of k/2, not of k. You solved correctly up to k/2 = 2 but forgot the last step: multiply by 2.'
        },
        tip:'Three traps stacked in one problem: (1) divide by the coefficient BEFORE completing the square, (2) set it equal to r² = 36 and not to r = 6, (3) solve for the full k, do not stop at k/2. Write out every step.',
        desmos:'Graph 2x^2+2y^2-20x+12y=4 in Desmos and then (x-5)^2+(y+3)^2=36 on top: they match exactly. A circle centered at (5, −3) with radius 6.',
        desmosLatex:['2x^2+2y^2-20x+12y=4', '(x-5)^2+(y+3)^2=36']
      },
      {
        id:'XG-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Altitude to the hypotenuse (geometric mean)',
        figure: FIG_ALTITUDE,
        stem:'In right triangle ABC shown, the right angle is at C, and the altitude from C meets hypotenuse AB at point D. If AD = 4 and DB = 9, what is the length of altitude CD?',
        choices:{A:'2√13', B:'6.5', C:'36', D:'6'},
        correct:'D',
        expCorrect:'The altitude to the hypotenuse creates THREE similar triangles (ACD ~ CBD ~ ABC). From the similarity ACD ~ CBD comes the geometric-mean relation: CD/AD = DB/CD → CD² = AD · DB = 4 · 9 = 36 → CD = 6. (Check the other way: 6/4 = 9/6 = 1.5 ✓.)',
        expWrong:{
          A:'2√13 = √(4 · 13) is the length of LEG AC (the geometric mean of the adjacent segment AD with the WHOLE hypotenuse AB = 13). You confused the leg relation with the altitude one.',
          B:'6.5 is half the hypotenuse (13/2), which would be the MEDIAN from C to AB, not the altitude. The median and the altitude from C coincide only if the triangle is isosceles.',
          C:'36 is CD², the product 4 × 9. You forgot to take the square root: CD = √36 = 6.'
        },
        tip:'Memorize the altitude-to-hypotenuse relations: altitude² = (segment)(segment); leg² = (the adjacent segment)(the whole hypotenuse). The altitude uses BOTH pieces; each leg uses its own piece and the whole.',
        desmos:'In Desmos as a calculator: sqrt(4*9) gives 6. Compare with sqrt(4*13) ≈ 7.21 — that is leg AC, not the altitude. They are two different relations.',
        desmosLatex:['sqrt(4*9)', 'sqrt(4*13)']
      },
      {
        id:'XG-06', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Altitude to the hypotenuse (with expressions)',
        stem:'In a right triangle, the altitude to the hypotenuse has length 6 and divides the hypotenuse into two segments of lengths x and x + 5. What is the length of the hypotenuse?',
        choices:{A:'4', B:'9', C:'13', D:'36'},
        correct:'C',
        expCorrect:'From the similar triangles the altitude creates: altitude² = the product of the segments → 6² = x(x + 5) → x² + 5x − 36 = 0 → (x + 9)(x − 4) = 0 → x = 4 (the length has to be positive; discard −9). The segments are 4 and 4 + 5 = 9, so the hypotenuse = 4 + 9 = 13. (Check: √(4 · 9) = 6 ✓.)',
        expWrong:{
          A:'4 is the value of x (the short segment), not the hypotenuse. After solving the quadratic you still have to ADD the two segments: 4 + 9 = 13.',
          B:'9 is the long segment (x + 5). The hypotenuse is the sum of both segments, not just one.',
          D:'36 is 6², the square of the altitude (and the product of the segments). It is not any length in the triangle.'
        },
        tip:'When they give you the segments as expressions: set up altitude² = (seg1)(seg2), solve the quadratic, DISCARD the negative root and reread what they asked for. It is almost never x: usually it is a sum or a whole side.',
        desmos:'Graph y=x^2+5x-36 in Desmos: it crosses the x-axis at x=4 and x=−9. Only x=4 works (a length has to be positive). Then 4+(4+5) gives 13.',
        desmosLatex:['y=x^2+5x-36', '4+(4+5)']
      },
      {
        id:'XG-07', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Tangent from an external point',
        figure: FIG_TANGENT,
        stem:'In the figure, the circle has center O and radius 5. Point P lies outside the circle with OP = 13, and segment PT is tangent to the circle at point T. What is the length of PT?',
        answer:'12',
        expCorrect:'A tangent is PERPENDICULAR to the radius at the point of tangency, so triangle OTP is right-angled at T, with hypotenuse OP = 13 and leg OT = 5. By Pythagoras: PT = √(13² − 5²) = √(169 − 25) = √144 = 12. (It is the 5-12-13 Pythagorean triple ✓.) Answer: 12.',
        expWrong:{},
        tip:'Radius + tangent = a right angle AT the point of tangency, always. That turns almost every tangent problem into a hidden Pythagoras with OP as the hypotenuse. Bonus: the TWO tangents drawn from the same external point are equal in length.',
        desmos:'In Desmos: sqrt(13^2-5^2) gives 12. To see it, graph x^2+y^2=25 and mark the point (13, 0): the tangent from there forms a 5-12-13 triangle with the radius.',
        desmosLatex:['sqrt(13^2-5^2)', 'x^2+y^2=25']
      },
      {
        id:'XG-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Cofunction identity (sin = cos)',
        stem:'In the equation sin(3x − 17)° = cos(2x + 42)°, the measures (3x − 17)° and (2x + 42)° are those of acute angles. What is the value of x?',
        choices:{A:'13', B:'31', C:'59', D:'65'},
        correct:'A',
        expCorrect:'Cofunctions: sin θ = cos(90° − θ). The sine of an acute angle equals the cosine of another when the two angles ADD to 90°. So (3x − 17) + (2x + 42) = 90 → 5x + 25 = 90 → 5x = 65 → x = 13. (Check: 3(13) − 17 = 22° and 2(13) + 42 = 68°; 22 + 68 = 90 ✓ and sin 22° = cos 68° ≈ 0.3746 ✓.)',
        expWrong:{
          B:'31 comes from setting the sum equal to 180 instead of 90: 5x + 25 = 180 → x = 31. The cofunction relation uses COMPLEMENTARY angles (adding to 90°), not supplementary ones.',
          C:'59 comes from setting the angles equal to each other: 3x − 17 = 2x + 42 → x = 59. But sin θ = cos θ only when θ = 45°; the sine-cosine equality demands that the angles add to 90°, not that they be equal.',
          D:'65 is the value of 5x, not of x. You skipped the last step: divide by 5.'
        },
        tip:'Golden rule of the Digital SAT: sin A = cos B (with A and B acute) ⟺ A + B = 90°. Never set the angles equal to each other. Set up the sum, solve, and VERIFY that both angles come out acute and complementary.',
        desmos:'In Desmos (degree mode): sin(22) and cos(68) give exactly the same value, ≈0.3746. Try x=59 (sin(160) vs cos(160)) and you will see they do not match.',
        desmosLatex:['sin(22)', 'cos(68)']
      },
      {
        id:'XG-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Tangent of the other acute angle',
        stem:'In right triangle JKL, the right angle is at K, and tan J = 8/15. What is the value of tan L?',
        choices:{A:'8/15', B:'8/17', C:'15/17', D:'15/8'},
        correct:'D',
        expCorrect:'J and L are the two acute angles, so they are complementary. The leg OPPOSITE J (8) is the one ADJACENT to L, and vice versa: the ratio FLIPS. tan L = 15/8. (Formally: tan L = tan(90° − J) = 1/tan J = 15/8. Check: (8/15)(15/8) = 1 ✓.)',
        expWrong:{
          A:'8/15 is tan J, the trap of repeating the ratio without flipping it. The acute angles of a right triangle swap opposite and adjacent: the tangent of the other angle is the RECIPROCAL.',
          B:'8/17 is sin J (or cos L), pulling in the hypotenuse 17 from the 8-15-17 triple. They asked for the tangent, which is leg/leg: the hypotenuse does not enter.',
          C:'15/17 is cos J (or sin L). Once again the hypotenuse shows up, and the tangent does not use it.'
        },
        tip:'Complementary angles in a right triangle: sin J = cos L, and tan J and tan L are RECIPROCALS (their product is 1). If they give you the tangent of one and want the tangent of the other, just flip the fraction. Draw the triangle if you are unsure.',
        desmos:'In Desmos: (8/15)*(15/8) gives 1, confirming they are reciprocals. And in degree mode, arctan(8/15)+arctan(15/8) gives 90: the two angles are complementary.',
        desmosLatex:['(8/15)*(15/8)', '15/8']
      },
      {
        id:'XG-10', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Radians by arc proportion',
        stem:'An arc on a circle has a length equal to 3/8 of the circumference of the circle. The measure of the central angle that intercepts the arc is kπ radians. What is the value of k?',
        answer:'3/4',
        expCorrect:'The central angle is the same FRACTION of a full turn as the arc is of the circumference. A full turn = 2π radians, so the angle = (3/8)(2π) = 6π/8 = 3π/4 radians. Since the angle is kπ, k = 3/4 (or 0.75). (Check: (3π/4)/(2π) = 3/8 ✓.)',
        expWrong:{},
        tip:'Radians by proportion: fraction of the circle × 2π. Typical errors: multiplying by π instead of 2π (that would give 3/8) or by 360 (those are degrees). If the SPR wants the k in “kπ radians”, your answer does NOT carry the π: write only the number. 3/4 or .75 are both accepted.',
        desmos:'In Desmos: (3/8)*2 gives 3/4, which is the k in kπ. If you want the full angle, (3/8)*2*pi gives ≈2.356 = 3π/4 radians.',
        desmosLatex:['(3/8)*2', '(3/8)*2*pi']
      },
      {
        id:'XG-11', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Volume + rate (converting cm³ → liters)',
        stem:'A cylindrical tank has a base radius of 30 centimeters and a height of 100 centimeters. Water is pumped into the empty tank at a constant rate of 12 liters per minute. (1 liter = 1,000 cubic centimeters.) Which of the following is closest to the number of minutes required to fill the tank completely?',
        choices:{A:'8', B:'24', C:'94', D:'23,562'},
        correct:'B',
        expCorrect:'Volume = πr²h = π(30)²(100) = 90,000π cm³ ≈ 282,743 cm³. The hidden conversion: 282,743 ÷ 1,000 ≈ 282.74 liters. Time = 282.74 ÷ 12 ≈ 23.56 ≈ 24 minutes. (Clean route: 90,000π cm³ = 90π L; 90π/12 = 7.5π ≈ 23.56 ✓.)',
        expWrong:{
          A:'8 comes from forgetting the π: 90,000 cm³ “= 90 L” and 90/12 = 7.5 ≈ 8. The volume of a cylinder carries π: it is 90π ≈ 283 liters, not 90.',
          C:'94 comes from using the diameter 60 as if it were the radius: π(60)²(100) = 360,000π cm³ = 360π L, and 360π/12 ≈ 94. In πr²h it is the RADIUS.',
          D:'23,562 is 90,000π/12 WITHOUT converting cm³ to liters: you are dividing cubic centimeters by liters per minute. The units have to match before you divide.'
        },
        tip:'Filling problems: (1) volume in cm³, (2) CONVERT to liters (÷1,000) — this is the buried trap, (3) divide by the rate. Sanity check: a ~283 L tank at 12 L/min should take twenty-odd minutes, not thousands.',
        desmos:'In Desmos: pi*30^2*100/1000 gives ≈282.7 liters. Then 282.7/12 gives ≈23.6 → 24 minutes. All on one line: pi*30^2*100/1000/12.',
        desmosLatex:['pi*30^2*100/1000/12', 'pi*30^2*100/1000']
      },
      {
        id:'XG-12', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Partial volume + rate (unit conversion)',
        stem:'A rectangular tank has a base that is 50 centimeters long and 40 centimeters wide, and the tank is 30 centimeters tall. The empty tank is filled with water at a constant rate of 2.4 liters per minute until the water reaches a depth of 27 centimeters. (1 liter = 1,000 cubic centimeters.) For how many minutes does the water flow?',
        answer:'22.5',
        expCorrect:'Careful: the water reaches a depth of 27 cm, NOT the tank’s 30 cm. Volume of water = 50 × 40 × 27 = 54,000 cm³. Conversion: 54,000 ÷ 1,000 = 54 liters. Time = 54 ÷ 2.4 = 22.5 minutes. (Check: 2.4 × 22.5 = 54 L = 54,000 cm³ ✓. With the full height of 30 you would get 60 L ÷ 2.4 = 25: that is the trap answer.) Answer: 22.5 (or 45/2).',
        expWrong:{},
        tip:'Two buried traps: (1) use the DEPTH of the water (27), not the height of the tank (30) — the volume that matters is the water’s; (2) convert cm³ to liters before dividing by the rate. In the grid-in you can write 22.5 or 45/2.',
        desmos:'In Desmos: 50*40*27/1000 gives 54 liters of water. Then 54/2.4 gives 22.5 minutes. All together: 50*40*27/1000/2.4.',
        desmosLatex:['50*40*27/1000/2.4', '50*40*27/1000']
      }
    ]
  });
})();
