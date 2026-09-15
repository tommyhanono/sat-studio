/* SAT Studio question set — Math: Geometry & Trigonometry 2 (GE2-01 a GE2-12) */
(function(){
  var FIG_LADDER =
    '<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right triangle: a ladder of length 13 leaning on a wall, base 5 from the wall, reaching height h">' +
    '<line x1="40" y1="20" x2="40" y2="150" stroke="#1e1e1e" stroke-width="3"/>' +
    '<line x1="40" y1="150" x2="200" y2="150" stroke="#1e1e1e" stroke-width="3"/>' +
    '<line x1="40" y1="40" x2="150" y2="150" stroke="#324DC7" stroke-width="3"/>' +
    '<rect x="40" y="136" width="14" height="14" fill="none" stroke="#1e1e1e" stroke-width="2"/>' +
    '<text x="86" y="86" font-size="16" font-family="Georgia,serif" font-style="italic" fill="#324DC7">13</text>' +
    '<text x="90" y="168" font-size="16" font-family="Georgia,serif">5</text>' +
    '<text x="20" y="98" font-size="16" font-family="Georgia,serif" font-style="italic">h</text>' +
    '<text x="12" y="176" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_CONE =
    '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right circular cone with base radius 3 and height 4">' +
    '<ellipse cx="110" cy="150" rx="60" ry="18" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="50" y1="150" x2="110" y2="30" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="170" y1="150" x2="110" y2="30" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="110" y1="150" x2="110" y2="30" stroke="#757575" stroke-width="1.5" stroke-dasharray="5,4"/>' +
    '<line x1="110" y1="150" x2="170" y2="150" stroke="#324DC7" stroke-width="2"/>' +
    '<text x="135" y="145" font-size="15" font-family="Georgia,serif" fill="#324DC7">3</text>' +
    '<text x="116" y="95" font-size="15" font-family="Georgia,serif" font-style="italic">4</text>' +
    '<text x="12" y="184" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-geo2',
    title: 'Math — Geometry & Trig 2',
    section: 'math',
    level: 'Difícil',
    description: 'More Geometry & Trig: circles (arcs, sectors, equations), triangles & similarity, area/volume, and right-triangle trig.',
    minutes: 16,
    questions: [
      {
        id:'GE2-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Area of a circular sector',
        stem:'A circle has a radius of 6. A sector of the circle is bounded by a central angle of 120°. What is the area of the sector?',
        choices:{A:'4π', B:'12π', C:'36π', D:'6π'},
        correct:'B',
        expCorrect:'Sector area = (central angle / 360°) × area of the circle. Total area = πr² = π(6)² = 36π. Sector = (120/360)(36π) = (1/3)(36π) = 12π.',
        expWrong:{
          A:'4π comes from taking (120/360) of the radius, or from a computation with r not squared. You have to use the area πr² = 36π.',
          C:'36π is the area of the WHOLE circle (360°), not just the 120° sector.',
          D:'6π confuses it with arc length (fraction × circumference). Here they want AREA, so use πr².'
        },
        tip:'Sector = a fraction of the area: (angle/360) × πr². Arc = a fraction of the circumference: (angle/360) × 2πr. Do not mix area with perimeter.'
      },
      {
        id:'GE2-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Volume of a cone',
        figure: FIG_CONE,
        stem:'A right circular cone has a base radius of 3 and a height of 4. What is the volume of the cone?',
        choices:{A:'12π', B:'36π', C:'48π', D:'16π'},
        correct:'A',
        expCorrect:'Volume of the cone = (1/3)πr²h = (1/3)π(3)²(4) = (1/3)π(9)(4) = (1/3)(36π) = 12π.',
        expWrong:{
          B:'36π is πr²h without the (1/3) factor: that would be the volume of a CYLINDER with the same radius and height. A cone is one third of that.',
          C:'48π squares the height or mixes up the numbers; the formula is (1/3)πr²h with r=3, h=4.',
          D:'16π squares the height (4²=16) instead of the radius. It is the RADIUS that gets squared, not the height.'
        },
        tip:'The cone carries the (1/3) up front: V = (1/3)πr²h. Forgetting the 1/3 is the classic error — a cone is exactly one third of the cylinder that contains it.'
      },
      {
        id:'GE2-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Pythagorean theorem (word problem)',
        figure: FIG_LADDER,
        stem:'A 13-foot ladder leans against a vertical wall. The base of the ladder is 5 feet from the wall. How many feet up the wall does the top of the ladder reach?',
        choices:{A:'8', B:'12', C:'18', D:'14'},
        correct:'B',
        expCorrect:'The ladder (13) is the hypotenuse, the distance to the wall (5) is one leg, and the height h is the other leg. Pythagoras: 5² + h² = 13² → 25 + h² = 169 → h² = 144 → h = 12. (The 5-12-13 triple.)',
        expWrong:{
          A:'8 comes from subtracting 13 − 5 = 8. The sides of a right triangle are not subtracted directly; you have to use Pythagoras with the squares.',
          C:'18 comes from adding 13 + 5 = 18. That makes no sense: the height cannot be greater than the ladder.',
          D:'14 confuses the triple; with hypotenuse 13 and leg 5 the other leg is 12, not 14.'
        },
        tip:'In ladder or ramp problems, the ladder is the HYPOTENUSE. Memorize the triples: 3-4-5, 5-12-13, 8-15-17. Here 5-12-13 falls out instantly.'
      },
      {
        id:'GE2-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'General equation of a circle (center)',
        stem:'In the xy-plane, the equation x² + y² − 10x + 4y + 13 = 0 represents a circle. What are the coordinates of the center of the circle?',
        choices:{A:'(−5, 2)', B:'(10, −4)', C:'(−10, 4)', D:'(5, −2)'},
        correct:'D',
        expCorrect:'Complete the square. In x: x² − 10x = (x − 5)² − 25. In y: y² + 4y = (y + 2)² − 4. That leaves (x − 5)² + (y + 2)² − 25 − 4 + 13 = 0 → (x − 5)² + (y + 2)² = 16. The center is (5, −2).',
        expWrong:{
          A:'(−5, 2) flips the signs: completing the square gives you (x − 5) and (y + 2), which give center (5, −2), not (−5, 2).',
          B:'(10, −4) uses the linear coefficients as they are. The center is HALF those coefficients (with the opposite sign): −(−10)/2 = 5 and −(4)/2 = −2.',
          C:'(−10, 4) takes the linear coefficients straight, without halving them or flipping the sign correctly.'
        },
        tip:'Quick trick: for x²+y²+Dx+Ey+F=0, the center is (−D/2, −E/2). Here (−(−10)/2, −(4)/2) = (5, −2). Completing the square confirms the same.'
      },
      {
        id:'GE2-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Special 30-60-90 triangle',
        stem:'In right triangle ABC, angle C is the right angle and angle A measures 30°. The side opposite the 30° angle has length 9. What is the length of the hypotenuse?',
        choices:{A:'9√3', B:'4.5', C:'18', D:'9√2'},
        correct:'C',
        expCorrect:'In a 30-60-90 the sides are x (opposite 30°), x√3 (opposite 60°) and 2x (hypotenuse). The side opposite the 30° is x = 9, so the hypotenuse = 2x = 18.',
        expWrong:{
          A:'9√3 is the side opposite the 60° angle, not the hypotenuse. The hypotenuse is 2x = 18.',
          B:'4.5 divides 9 by 2, reversing the relationship. The short side is x = 9, and the hypotenuse is 2x, so you MULTIPLY by 2.',
          D:'9√2 belongs to the 45-45-90 triangle, not the 30-60-90. There is no √2 here.'
        },
        tip:'30-60-90 → sides x : x√3 : 2x (short, long, hypotenuse). The side opposite the 30° is always the shortest (x), and the hypotenuse is twice that.'
      },
      {
        id:'GE2-06', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Right-triangle trigonometry (tangent)',
        stem:'In a right triangle, one of the acute angles is θ. The side opposite θ has length 7 and the side adjacent to θ has length 24. What is the value of tan θ?',
        choices:{A:'7/25', B:'24/7', C:'24/25', D:'7/24'},
        correct:'D',
        expCorrect:'SOHCAHTOA: tan θ = opposite / adjacent = 7/24. (The hypotenuse would be √(7²+24²)=√625=25, but the tangent does not use it.)',
        expWrong:{
          A:'7/25 is sin θ (opposite/hypotenuse), using the hypotenuse 25. The tangent does NOT use the hypotenuse.',
          B:'24/7 is the reciprocal: adjacent/opposite. That would be 1/tan θ (the cotangent), not tan θ.',
          C:'24/25 is cos θ (adjacent/hypotenuse). They are asking for the tangent, which is opposite/adjacent.'
        },
        tip:'Tangent = Opposite / Adjacent (the T in TOA). You do not need the hypotenuse for the tangent. Watch the order: opposite ON TOP, adjacent below.'
      },
      {
        id:'GE2-07', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Similar triangles (ratio of areas)',
        stem:'Triangle ABC is similar to triangle XYZ. The ratio of a side of triangle ABC to the corresponding side of triangle XYZ is 2 to 3. If the area of triangle ABC is 20, what is the area of triangle XYZ?',
        choices:{A:'30', B:'45', C:'13.5', D:'40'},
        correct:'B',
        expCorrect:'In similar figures, the ratio of areas is the SQUARE of the ratio of sides. Ratio of sides = 2/3, so ratio of areas = (2/3)² = 4/9. So 20 / Area(XYZ) = 4/9 → Area(XYZ) = 20 × (9/4) = 45.',
        expWrong:{
          A:'30 uses the side ratio 2/3 directly (20 × 3/2 = 30), forgetting to SQUARE the ratio for areas.',
          C:'13.5 applies the ratio backwards (20 × 4/9), shrinking the area when XYZ is the larger triangle.',
          D:'40 just doubles 20; it does not correspond to any correct ratio between the triangles.'
        },
        tip:'Similarity: the ratio of AREAS = (ratio of sides)². The ratio of VOLUMES = (ratio of sides)³. Squaring or cubing is the step almost everyone forgets.'
      },
      {
        id:'GE2-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Distance between two points (circle/coordinates)',
        stem:'In the xy-plane, a circle has its center at the point (1, 2) and passes through the point (5, 5). What is the radius of the circle?',
        choices:{A:'7', B:'25', C:'5', D:'√7'},
        correct:'C',
        expCorrect:'The radius is the distance from the center (1, 2) to the point (5, 5). Distance = √((5−1)² + (5−2)²) = √(4² + 3²) = √(16 + 9) = √25 = 5.',
        expWrong:{
          A:'7 adds the differences 4 + 3 = 7. The distance is not the sum; you have to square, add and take the root.',
          B:'25 is r² (16 + 9), that is, the distance squared. The square root is still missing to get the radius.',
          D:'√7 comes from adding the differences before squaring (4+3=7) and then taking the root. The right order is square first, add after.'
        },
        tip:'Distance = √(Δx² + Δy²). The radius of a circle is the distance from center to a point on the edge. Here the 3-4-5 triple shows up, so r = 5.'
      },
      {
        id:'GE2-09', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volume of a sphere',
        stem:'A sphere has a radius of 3. What is the volume of the sphere, in terms of π? (Enter your answer as the coefficient of π. For example, if the volume is 10π, enter 10.)',
        answer:'36',
        expCorrect:'Volume of the sphere = (4/3)πr³ = (4/3)π(3)³ = (4/3)π(27) = (4 × 27)/3 × π = 108/3 × π = 36π. The coefficient of π is 36.',
        expWrong:{},
        tip:'Sphere: V = (4/3)πr³ (the radius is CUBED, not squared). It is on the Reference Sheet. With r = 3: 3³ = 27, and (4/3)(27) = 36.'
      },
      {
        id:'GE2-10', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Complementary angles with a variable inside the ratio',
        stem:'If sin(3x)° = cos(x + 10)°, and 0 < x < 30, what is the value of x?',
        choices:{A:'5', B:'20', C:'42.5', D:'50'},
        correct:'B',
        expCorrect:'sin(θ) = cos(90° − θ), so a sine and a cosine are equal when their angles are COMPLEMENTARY. Set the two angles to add to 90: 3x + (x + 10) = 90 → 4x + 10 = 90 → 4x = 80 → x = 20. (Check: sin 60° = cos 30° ✓, and 20 is inside 0 < x < 30.)',
        expWrong:{
          A:'5 comes from setting the angles EQUAL (3x = x + 10). That is what you would do for sin = sin; for sin = cos the angles are complementary, not equal.',
          C:'42.5 comes from making the angles add to 180 instead of 90. Complementary means 90°, not supplementary. It also falls outside the given range 0 < x < 30.',
          D:'50 comes from subtracting the angles instead of adding them: 3x − (x + 10) = 90 gives x = 50, which is also outside the given range.'
        },
        tip:'sin(A) = cos(B) means A + B = 90, not A = B. Write that sum, solve the linear equation, and then check the answer against any range the question gives you — the range is usually there to kill one of the other choices.',
        desmos:'In degree mode, graph y=sin(3x) and y=cos(x+10) and look at the first crossing after x = 0: it lands on x = 20.',
        desmosLatex:['y=\\sin(3x)','y=\\cos(x+10)']
      },
      {
        id:'GE2-11', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Area using a 45-45-90 triangle / diagonal',
        stem:'A square has a diagonal of length 10√2. What is the area of the square?',
        choices:{A:'100', B:'200', C:'50', D:'100√2'},
        correct:'A',
        expCorrect:'The diagonal of a square with side s is s√2 (from the 45-45-90). Here s√2 = 10√2, so s = 10. Area = s² = 10² = 100.',
        expWrong:{
          B:'200 squares the diagonal: (10√2)² = 200. But that is twice the area; the area is s², with s = 10, not the diagonal squared.',
          C:'50 comes from taking half the diagonal squared incorrectly, or from misapplying (1/2)d·d.',
          D:'100√2 mixes up the side with the diagonal; the area of a square is a whole number of units², with no √2 here.'
        },
        tip:'Diagonal of a square = side × √2. Solve for the side first (divide the diagonal by √2), THEN square it for the area. Do not square the diagonal directly.'
      },
      {
        id:'GE2-12', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Arc length (solving for the angle)',
        stem:'A circle has a radius of 10. An arc of this circle has a length of 4π. What is the measure, in degrees, of the central angle that intercepts this arc?',
        answer:'72',
        expCorrect:'Arc length = (angle/360) × 2πr. The circumference is 2π(10) = 20π. So 4π = (angle/360)(20π) → 4π/20π = angle/360 → 1/5 = angle/360 → angle = 360/5 = 72°.',
        expWrong:{},
        tip:'The arc is a fraction of the circumference: arc/circumference = angle/360. Set up that proportion (4π/20π = 1/5) and multiply by 360. Here it gives 72°.'
      }
    ]
  });
})();
