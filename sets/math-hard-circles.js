/* SAT Studio question set — Math: Circles & Coordinate Geometry — Hard (HMC-01 a HMC-12) */
(function(){
  var FIG_TANGENT_PT =
    '<svg viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle of radius 5 centered at O with a line tangent at the point (3, 4)">' +
    '<circle cx="90" cy="150" r="60" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="62" y1="54" x2="190" y2="150" stroke="#324DC7" stroke-width="2.5"/>' +
    '<line x1="90" y1="150" x2="126" y2="102" stroke="#1e1e1e" stroke-width="2"/>' +
    '<rect x="112" y="98" width="13" height="13" fill="none" stroke="#1e1e1e" stroke-width="1.5" transform="rotate(37 118 104)"/>' +
    '<circle cx="90" cy="150" r="3" fill="#1e1e1e"/>' +
    '<circle cx="126" cy="102" r="3" fill="#1e1e1e"/>' +
    '<text x="96" y="120" font-size="15" font-family="Georgia,serif" font-style="italic">5</text>' +
    '<text x="132" y="98" font-size="13" font-family="Georgia,serif">(3, 4)</text>' +
    '<text x="74" y="166" font-size="14" font-family="Georgia,serif">O</text>' +
    '<text x="12" y="202" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_EXT_TANGENT =
    '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle of radius 9 centered at O with a segment from external point P tangent to the circle at point T">' +
    '<circle cx="70" cy="110" r="45" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="70" y1="110" x2="210" y2="110" stroke="#bdbdbd" stroke-width="1.5" stroke-dasharray="4 4"/>' +
    '<line x1="70" y1="110" x2="85" y2="67" stroke="#1e1e1e" stroke-width="2"/>' +
    '<line x1="85" y1="67" x2="210" y2="110" stroke="#324DC7" stroke-width="2.5"/>' +
    '<rect x="80" y="62" width="12" height="12" fill="none" stroke="#1e1e1e" stroke-width="1.5" transform="rotate(70 86 68)"/>' +
    '<circle cx="70" cy="110" r="3" fill="#1e1e1e"/>' +
    '<circle cx="85" cy="67" r="3" fill="#1e1e1e"/>' +
    '<circle cx="210" cy="110" r="3" fill="#1e1e1e"/>' +
    '<text x="58" y="126" font-size="14" font-family="Georgia,serif">O</text>' +
    '<text x="70" y="60" font-size="14" font-family="Georgia,serif">T</text>' +
    '<text x="216" y="114" font-size="14" font-family="Georgia,serif">P</text>' +
    '<text x="60" y="86" font-size="14" font-family="Georgia,serif" font-style="italic">9</text>' +
    '<text x="12" y="182" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-hard-circles',
    title: 'Circles & Coordinate Geometry — Hard',
    section: 'math',
    level: 'Difícil',
    description: 'Hard circle problems — equation of a circle (completing the square), arcs & sectors, tangents, and lines in the coordinate plane.',
    minutes: 20,
    questions: [
      {
        id:'HMC-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Equation of a circle (completing the square)',
        stem:'In the xy-plane, the equation x² + y² + 10x − 4y − 7 = 0 represents a circle. What are the coordinates of the center of the circle?',
        choices:{
          A:'(−5, 2)',
          B:'(5, −2)',
          C:'(−10, 4)',
          D:'(10, −4)'
        },
        correct:'A',
        expCorrect:'Completa cuadrados. En x: x² + 10x = (x + 5)² − 25. En y: y² − 4y = (y − 2)² − 4. Sustituyendo: (x + 5)² − 25 + (y − 2)² − 4 − 7 = 0 → (x + 5)² + (y − 2)² = 36. El centro es (h, k) = (−5, 2) y el radio es 6.',
        expWrong:{
          B:'(5, −2) flips the signs. Careful: (x + 5)² comes from h = −5, and (y − 2)² comes from k = +2. The sign of the center is the opposite of what you see inside the parentheses.',
          C:'(−10, 4) uses the full linear coefficients (10 and −4) without halving them. When you complete the square you take HALF of each coefficient.',
          D:'(10, −4) uses the linear coefficients as they are and with the wrong sign on top of that. You have to halve them AND flip the sign.'
        },
        tip:'To go from general to standard form, take half the linear coefficient in x and in y. The center is (−half_x, −half_y). Here: half of 10 is 5 → h = −5; half of −4 is −2 → k = +2.'
      },
      {
        id:'HMC-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Sector area (radians)',
        stem:'A sector of a circle has a radius of 6 and a central angle measuring 2π/3 radians. What is the area of the sector?',
        choices:{A:'2π', B:'4π', C:'12π', D:'24π'},
        correct:'C',
        expCorrect:'The area of a sector in radians is (1/2)r²θ. With r = 6 and θ = 2π/3: area = (1/2)(6²)(2π/3) = (1/2)(36)(2π/3) = 18 · (2π/3) = 12π.',
        expWrong:{
          A:'2π comes from using r instead of r²: (1/2)(6)(2π/3) = 2π. The formula calls for the radius SQUARED.',
          B:'4π is the ARC LENGTH (s = rθ = 6 · 2π/3 = 4π), not the sector area. They are different things.',
          D:'24π forgets the 1/2 factor: r²θ = 36 · 2π/3 = 24π. Sector area always carries the (1/2).'
        },
        tip:'In radians: arc length = rθ (a single r), sector area = (1/2)r²θ (r squared and the 1/2). Confusing arc with sector, or forgetting the square or the 1/2, are the classic traps.'
      },
      {
        id:'HMC-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Longitud de arco (radianes)',
        stem:'In a circle with a radius of 10, an arc is intercepted by a central angle measuring 3π/5 radians. What is the length of the arc?',
        choices:{A:'3π', B:'6π', C:'30π', D:'12π'},
        correct:'B',
        expCorrect:'La longitud de arco en radianes es s = rθ. Con r = 10 y θ = 3π/5: s = 10 · (3π/5) = 30π/5 = 6π.',
        expWrong:{
          A:'3π comes from multiplying by 1/2 for no reason: (1/2)(10)(3π/5) = 3π. Arc length does NOT carry the 1/2 factor (that belongs to the sector area).',
          C:'30π is the sector AREA, (1/2)r²θ = (1/2)(100)(3π/5) = 30π, not the arc length.',
          D:'12π uses the diameter (20) instead of the radius: 20 · 3π/5 = 12π. In s = rθ it is the radius, not the diameter.'
        },
        tip:'Arc = rθ with the angle in RADIANS. If the angle came in degrees, you would have to convert (×π/180) or use the fraction of the circle. Here it is already in radians, so you multiply directly.'
      },
      {
        id:'HMC-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Recta tangente a una circunferencia',
        figure: FIG_TANGENT_PT,
        stem:'A circle in the xy-plane is centered at the origin with a radius of 5. A line is tangent to the circle at the point (3, 4), as shown. What is the slope of the tangent line?',
        choices:{A:'4/3', B:'3/4', C:'−4/3', D:'−3/4'},
        correct:'D',
        expCorrect:'The radius reaching the point of tangency runs from the origin (0, 0) to (3, 4), with slope 4/3. The tangent is PERPENDICULAR to the radius at that point, so its slope is the negative reciprocal: −3/4.',
        expWrong:{
          A:'4/3 es la pendiente del RADIO, no de la tangente. La tangente es perpendicular al radio, no paralela.',
          B:'3/4 is the reciprocal but it is missing the negative sign. Perpendicular = NEGATIVE reciprocal.',
          C:'−4/3 only flipped the sign of the radius slope, without inverting the fraction. For perpendicular you have to do both: invert AND flip the sign.'
        },
        tip:'Key tangent rule: the radius to the point of tangency is perpendicular to the tangent line. Get the slope of the radius and take its negative reciprocal (flip the fraction and change the sign).'
      },
      {
        id:'HMC-05', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Line-circle intersection (tangency)',
        stem:'In the xy-plane, the line y = x + c is tangent to the circle x² + y² = 8. What is the positive value of c?',
        choices:{A:'4', B:'2√2', C:'8', D:'2'},
        correct:'A',
        expCorrect:'A line is tangent when its distance from the center (the origin) equals the radius. Write the line as x − y + c = 0. The distance from the origin is |c|/√(1² + (−1)²) = |c|/√2. The radius is √8 = 2√2. Setting them equal: |c|/√2 = 2√2 → |c| = 2√2 · √2 = 4. The positive value is c = 4.',
        expWrong:{
          B:'2√2 is the circle’s RADIUS, not c. You stopped halfway: you set |c| equal to the radius without multiplying by √2.',
          C:'8 is r² (the right-hand side of the circle equation), not the radius and not c. The radius is √8, not 8.',
          D:'2 comes from dividing by √2 instead of multiplying: 2√2/√2 = 2. Solving |c| from |c|/√2 = 2√2 you have to MULTIPLY by √2.'
        },
        tip:'Tangent line ⇔ distance from the center to the line = radius. Use distance = |Ax₀ + By₀ + C|/√(A² + B²). It is faster than substituting and forcing the discriminant to zero, though both methods work.'
      },
      {
        id:'HMC-06', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Rectas perpendiculares (pendiente)',
        stem:'Line ℓ passes through the points (2, −1) and (6, 5). Line k is perpendicular to line ℓ. What is the slope of line k?',
        choices:{A:'3/2', B:'2/3', C:'−2/3', D:'−3/2'},
        correct:'C',
        expCorrect:'The slope of ℓ is (5 − (−1))/(6 − 2) = 6/4 = 3/2. Since k is perpendicular to ℓ, its slope is the negative reciprocal of 3/2, which is −2/3.',
        expWrong:{
          A:'3/2 is the slope of ℓ, not of k. Perpendicular means negative reciprocal, not the same slope.',
          B:'2/3 inverted the fraction correctly but is missing the negative sign. Perpendicular = NEGATIVE reciprocal.',
          D:'−3/2 flipped the sign of ℓ’s slope without inverting the fraction. For perpendicular you have to invert AND flip the sign.'
        },
        tip:'Two steps for perpendiculars: (1) compute the slope with (y₂ − y₁)/(x₂ − x₁); (2) flip the fraction and change the sign. Check: the product of two perpendicular slopes has to be −1 (3/2 · −2/3 = −1 ✓).'
      },
      {
        id:'HMC-07', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Parallel lines (equation)',
        stem:'In the xy-plane, line ℓ is parallel to the line 4x − 2y = 10 and passes through the point (1, 3). Which of the following is an equation of line ℓ?',
        choices:{
          A:'y = −(1/2)x + 7/2',
          B:'y = 2x + 1',
          C:'y = 2x − 5',
          D:'y = −2x + 5'
        },
        correct:'B',
        expCorrect:'Solve the given line for y: 4x − 2y = 10 → −2y = −4x + 10 → y = 2x − 5, with slope 2. A parallel line has the same slope, 2. Using the point (1, 3): y − 3 = 2(x − 1) → y = 2x + 1. Check: 2(1) + 1 = 3 ✓.',
        expWrong:{
          A:'y = −(1/2)x + 7/2 usa la pendiente PERPENDICULAR (−1/2). Paralela significa MISMA pendiente (2), no perpendicular.',
          C:'y = 2x − 5 is the original line itself: it has the right slope (2) but it does not pass through (1, 3): 2(1) − 5 = −3, not 3.',
          D:'y = −2x + 5 flipped the sign of the slope. A parallel line keeps the exact slope, sign included.'
        },
        tip:'Parallel = same slope; perpendicular = negative reciprocal. To build the equation through a point, use point-slope form y = y₁ + m(x − x₁), and verify by plugging the point back in at the end.'
      },
      {
        id:'HMC-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Distance formula',
        stem:'In the xy-plane, what is the distance between the points (−2, 3) and (4, −5)?',
        choices:{A:'√14', B:'2√17', C:'14', D:'10'},
        correct:'D',
        expCorrect:'Distancia = √((x₂ − x₁)² + (y₂ − y₁)²) = √((4 − (−2))² + (−5 − 3)²) = √(6² + (−8)²) = √(36 + 64) = √100 = 10.',
        expWrong:{
          A:'√14 adds the differences (6 + 8 = 14) and then takes the root, without squaring first. You have to square EACH difference before adding.',
          B:'2√17 = √68 comes from a sign error in x: using (4 − 2) = 2 instead of (4 − (−2)) = 6, giving √(4 + 64). Careful subtracting a negative number.',
          C:'14 is 6 + 8, the sum of the horizontal and vertical distances. That is not the straight-line distance: you need Pythagoras (the hypotenuse), not the sum of the legs.'
        },
        tip:'The distance formula is Pythagoras in disguise. Subtracting a negative adds: 4 − (−2) = 6. Square BEFORE you add. Here the 6-8-10 triple shows up, so the distance is 10.'
      },
      {
        id:'HMC-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Punto medio (hallar el extremo)',
        stem:'In the xy-plane, M is the midpoint of segment AB. Point A has coordinates (1, −4) and M has coordinates (5, 2). What are the coordinates of point B?',
        choices:{
          A:'(9, 8)',
          B:'(−3, −10)',
          C:'(3, −1)',
          D:'(4, 6)'
        },
        correct:'A',
        expCorrect:'The midpoint satisfies M = (A + B)/2, so B = 2M − A. In x: 2(5) − 1 = 9. In y: 2(2) − (−4) = 4 + 4 = 8. So B = (9, 8). Check the midpoint: ((1 + 9)/2, (−4 + 8)/2) = (5, 2) ✓.',
        expWrong:{
          B:'(−3, −10) uses the formula backwards (2A − M instead of 2M − A). The one you know in full is M; you solve for the missing endpoint as 2M − A.',
          C:'(3, −1) is the average of A and M, as if M were the other endpoint. But M is the MIDPOINT, not an endpoint: you have to extrapolate, not average.',
          D:'(4, 6) is the displacement M − A (how far you travel from A to M). You still have to add that to M again to reach B.'
        },
        tip:'If M is the midpoint and you know one endpoint, the other is B = 2M − A. Think of it as a reflection: B is as far from M as A is, but on the opposite side. Always verify by recomputing the midpoint.'
      },
      {
        id:'HMC-10', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Equation of a circle from a diameter',
        stem:'In the xy-plane, the points (−1, 2) and (5, 10) are the endpoints of a diameter of a circle. Which of the following is an equation of the circle?',
        choices:{
          A:'(x + 2)² + (y + 6)² = 25',
          B:'(x − 2)² + (y − 6)² = 100',
          C:'(x − 2)² + (y − 6)² = 25',
          D:'(x − 2)² + (y − 6)² = 5'
        },
        correct:'C',
        expCorrect:'The center is the midpoint of the diameter: ((−1 + 5)/2, (2 + 10)/2) = (2, 6). The diameter measures √((5 − (−1))² + (10 − 2)²) = √(36 + 64) = √100 = 10, so the radius is 5 and r² = 25. Equation: (x − 2)² + (y − 6)² = 25.',
        expWrong:{
          A:'(x + 2)² + (y + 6)² flips the signs of the center: that would give center (−2, −6), not (2, 6). The sign inside the parentheses is the opposite of the center.',
          B:'100 uses the DIAMETER (10) as the radius and squares it. The radius is HALF the diameter: 5, and r² = 25.',
          D:'5 is the radius without squaring it. The right-hand side of the equation is r², not r. Radius 5 → 25.'
        },
        tip:'With a given diameter: the center is the midpoint of the endpoints, and the radius is HALF the distance between them. Do not forget the right-hand side of the equation is r² (the radius squared).'
      },
      {
        id:'HMC-11', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'General equation → radius (completing the square)',
        stem:'The equation x² + y² − 8x + 6y + 21 = 0 represents a circle in the xy-plane. What is the radius of the circle?',
        answer:'2',
        expCorrect:'Complete the square. In x: x² − 8x = (x − 4)² − 16. In y: y² + 6y = (y + 3)² − 9. Substituting: (x − 4)² − 16 + (y + 3)² − 9 + 21 = 0 → gather the constants: −16 − 9 + 21 = −4, so (x − 4)² + (y + 3)² = 4. Since r² = 4, the radius is r = 2.',
        expWrong:{},
        tip:'When completing the square, move ALL the constants to the right-hand side: −16 − 9 + 21 = −4, and that −4 crosses over as +4. The radius is √(right side), not the right side itself. Here √4 = 2.'
      },
      {
        id:'HMC-12', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Longitud de tangente desde un punto externo',
        figure: FIG_EXT_TANGENT,
        stem:'A circle in the xy-plane is centered at the origin O with a radius of 9. Point P has coordinates (9, 12). A segment is drawn from P tangent to the circle, touching it at point T, as shown. What is the length of segment PT?',
        answer:'12',
        expCorrect:'The distance from P to the center is OP = √(9² + 12²) = √(81 + 144) = √225 = 15. The radius OT is perpendicular to the tangent PT, so triangle OTP is right-angled with hypotenuse OP. By Pythagoras: PT = √(OP² − OT²) = √(15² − 9²) = √(225 − 81) = √144 = 12.',
        expWrong:{},
        tip:'The tangent is perpendicular to the radius at the point of contact, so you get a right triangle with hypotenuse = the distance from the external point to the center. Tangent length = √(distance² − radius²). Here the 9-12-15 triple shows up, and the 12 falls out.'
      }
    ]
  });
})();
