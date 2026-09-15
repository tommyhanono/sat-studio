/* SAT Studio question set — Math: Geometry & Trigonometry (GEO-01 a GEO-10) */
(function(){
  var FIG_RIGHT_TRI =
    '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right triangle with hypotenuse 10, one leg 6 opposite angle theta">' +
    '<polygon points="30,140 210,140 30,30" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="30" y="126" width="14" height="14" fill="none" stroke="#1e1e1e" stroke-width="2"/>' +
    '<text x="120" y="158" font-size="16" font-family="Georgia,serif" text-anchor="middle">8</text>' +
    '<text x="8" y="90" font-size="16" font-family="Georgia,serif">6</text>' +
    '<text x="118" y="80" font-size="16" font-family="Georgia,serif" font-style="italic">10</text>' +
    '<text x="188" y="134" font-size="15" font-family="Georgia,serif">θ</text>' +
    '<text x="12" y="166" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_PARALLEL =
    '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two parallel lines cut by a transversal, one angle labeled 5x plus 12 and another 3x plus 48">' +
    '<line x1="20" y1="45" x2="280" y2="45" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="20" y1="110" x2="280" y2="110" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="70" y1="20" x2="230" y2="135" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<text x="150" y="38" font-size="14" font-family="Georgia,serif" text-anchor="end">(5x + 12)°</text>' +
    '<text x="158" y="128" font-size="14" font-family="Georgia,serif">(3x + 48)°</text>' +
    '<text x="286" y="49" font-size="14" font-family="Georgia,serif" fill="#324DC7">m</text>' +
    '<text x="286" y="114" font-size="14" font-family="Georgia,serif" fill="#324DC7">n</text>' +
    '<text x="12" y="146" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. Lines m and n are parallel.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-geo',
    title: 'Math — Geometry & Trig',
    section: 'math',
    level: 'Difícil',
    description: 'Geometry & Trigonometry: area and volume, triangles, circles, and trigonometry.',
    minutes: 16,
    questions: [
      {
        id:'GEO-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Circles (area and circumference)',
        stem:'A circle in the xy-plane has an area of 36π square units. What is the circumference of the circle?',
        choices:{A:'6π', B:'18π', C:'12π', D:'72π'},
        correct:'C',
        expCorrect:'Area = πr² = 36π → r² = 36 → r = 6. Circumference = 2πr = 2π(6) = 12π.',
        expWrong:{
          A:'6π uses the radius (6) as if it were the circumference, forgetting the 2πr. 6 is only the radius.',
          B:'18π comes from dividing the area by 2 (36π / 2), which is not a valid formula.',
          D:'72π is 2 × 36π, that is, twice the area, not the circumference.'
        },
        tip:'Always get the radius first. From πr² you solve for r, and with r you compute whatever they ask (2πr for circumference). Area and circumference are NOT proportional to each other.'
      },
      {
        id:'GEO-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Special 45-45-90 triangle',
        stem:'In a right isosceles triangle, each of the two legs has a length of 7. What is the length of the hypotenuse?',
        choices:{A:'7', B:'7√2', C:'7√3', D:'14'},
        correct:'B',
        expCorrect:'In a 45-45-90 triangle, the hypotenuse = leg × √2. With a leg of 7: hypotenuse = 7√2. (Check with Pythagoras: 7² + 7² = 49 + 49 = 98, and √98 = 7√2.)',
        expWrong:{
          A:'7 is the length of a leg, not of the hypotenuse. The hypotenuse is always the longest side.',
          C:'7√3 belongs to the 30-60-90 triangle, not the 45-45-90. Here the factor is √2.',
          D:'14 would be adding the two legs (7 + 7). The hypotenuse is never the sum of the legs.'
        },
        tip:'Memorize the two special triangles: 45-45-90 → sides x, x, x√2. 30-60-90 → sides x, x√3, 2x. They are on the Reference Sheet, but recognizing them from memory saves you seconds.'
      },
      {
        id:'GEO-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Volumen (cilindro)',
        stem:'A right circular cylinder has a radius of 3 and a height of 10. What is the volume of the cylinder?',
        choices:{A:'90π', B:'60π', C:'30π', D:'300π'},
        correct:'A',
        expCorrect:'Volumen del cilindro = πr²h = π(3)²(10) = π(9)(10) = 90π.',
        expWrong:{
          B:'60π comes from π(2)(3)(10), mixing up the volume formula with something like “2rh” (lateral area / r).',
          C:'30π comes from π(3)(10): you used the radius WITHOUT squaring it. The formula calls for r².',
          D:'300π uses r = 10 and h = 3 wrong, or squares the 10 instead of the 3. Here r = 3, so r² = 9.'
        },
        tip:'Error #1 in volumes is forgetting to square the radius. Always write r² first: 3² = 9, THEN multiply by h. The formula is on the Reference Sheet.'
      },
      {
        id:'GEO-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Equation of a circle',
        stem:'In the xy-plane, a circle has its center at (2, −3) and a radius of 5. Which of the following is an equation of the circle?',
        choices:{
          A:'(x − 2)² + (y + 3)² = 25',
          B:'(x + 2)² + (y − 3)² = 25',
          C:'(x − 2)² + (y + 3)² = 5',
          D:'(x + 2)² + (y − 3)² = 5'
        },
        correct:'A',
        expCorrect:'The standard form is (x − h)² + (y − k)² = r², with center (h, k). Center (2, −3) → (x − 2)² + (y − (−3))² = (x − 2)² + (y + 3)². And r² = 5² = 25.',
        expWrong:{
          B:'(x + 2)² + (y − 3)² flips the signs of the center: that would give center (−2, 3), not (2, −3).',
          C:'The center is right, but the right-hand side has to be r² = 25, not r = 5. The radius still needs squaring.',
          D:'Combina dos errores: signos del centro invertidos Y usa 5 en vez de 25.'
        },
        tip:'Two fixed traps: (1) the signs FLIP relative to the center — center (2, −3) gives (x − 2) and (y + 3). (2) the right-hand side is r², not r. Radius 5 → 25.'
      },
      {
        id:'GEO-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Right-triangle trigonometry (SOHCAHTOA)',
        figure: FIG_RIGHT_TRI,
        stem:'In the right triangle shown, the hypotenuse has length 10 and the leg opposite angle θ has length 6. What is the value of cos θ?',
        choices:{A:'3/5', B:'5/4', C:'3/4', D:'4/5'},
        correct:'D',
        expCorrect:'The leg opposite θ is 6 and the hypotenuse is 10, so the adjacent leg = √(10² − 6²) = √(100 − 36) = √64 = 8. cos θ = adjacent / hypotenuse = 8/10 = 4/5.',
        expWrong:{
          A:'3/5 is sin θ (opposite/hypotenuse = 6/10). They asked for the cosine, which uses the ADJACENT leg.',
          B:'5/4 is the reciprocal of 4/5 (that would be 1/cos, i.e. sec θ). A cosine in a triangle never goes above 1.',
          C:'3/4 es tan θ (opuesto/adyacente = 6/8). No es lo que piden.'
        },
        tip:'SOHCAHTOA: Cosine = Adjacent / Hypotenuse. First work out which side is opposite and which is adjacent relative to the angle. Here the adjacent one was missing: get it with Pythagoras (the 6-8-10 triple).'
      },
      {
        id:'GEO-06', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Similar triangles',
        stem:'Triangle ABC is similar to triangle DEF, where vertices A, B, and C correspond to vertices D, E, and F, respectively. The length of side AB is 6 and the length of the corresponding side DE is 15. If the length of side BC is 8, what is the length of side EF?',
        answer:'20',
        expCorrect:'In similar triangles, corresponding sides are proportional. The ratio is DE/AB = 15/6 = 2.5. So EF = BC × 2.5 = 8 × 2.5 = 20. (Or by proportion: 6/15 = 8/EF → EF = 8·15/6 = 20.) Answer: 20.',
        expWrong:{},
        tip:'Similarity = multiplying by a RATIO (a scale factor), never adding. Set up the proportion side/corresponding side = side/side and cross-multiply. Sanity-check the scale: here the big triangle is 2.5×.'
      },
      {
        id:'GEO-07', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Circles (arc length)',
        stem:'A circle has a radius of 9. An arc of the circle is intercepted by a central angle of 40°. What is the length of the arc?',
        choices:{A:'π', B:'4π', C:'2π', D:'18π'},
        correct:'C',
        expCorrect:'Arc length = (central angle / 360°) × circumference. Circumference = 2π(9) = 18π. Arc = (40/360)(18π) = (1/9)(18π) = 2π.',
        expWrong:{
          A:'π comes from taking (40/360) of the radius (9) instead of the circumference (18π): (1/9)(9) = 1, and with π that gives π. You have to use the circumference.',
          B:'4π doubles the result, as if the radius were 18 or the angle 80°. The correct fraction is 40/360 = 1/9.',
          D:'18π is the FULL circumference (the whole circle, 360°), not just the 40° arc.'
        },
        tip:'An arc and a sector are always a FRACTION of the whole: (angle/360). Arc → fraction × circumference (2πr). Sector → fraction × area (πr²). Do not mix up radius with circumference.'
      },
      {
        id:'GEO-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Parallel lines and angles',
        figure: FIG_PARALLEL,
        stem:'In the figure, lines m and n are parallel and are cut by a transversal. The two marked angles have measures (5x + 12)° and (3x + 48)°. What is the value of x?',
        choices:{A:'12', B:'18', C:'22', D:'30'},
        correct:'B',
        expCorrect:'The marked angles are alternate interior angles, so they are equal: 5x + 12 = 3x + 48. Subtracting 3x: 2x + 12 = 48 → 2x = 36 → x = 18. (Check: 5(18)+12 = 102 and 3(18)+48 = 102 ✓.)',
        expWrong:{
          A:'12 is only the constant term of the first angle, not the solution of the equation. You have to set the two expressions equal and solve for x.',
          C:'22 comes from solving the equation wrong (for example 5x + 12 = 3x + 48 giving 2x = 44). The correct step is 2x = 36.',
          D:'30 comes from treating them as supplementary (5x + 12 + 3x + 48 = 180 → 8x = 120 → x = 15) miscomputed, or from another setup error. These angles are equal, they do not add to 180.'
        },
        tip:'With parallel lines: alternate interior and corresponding angles are EQUAL; the ones forming a straight line (same-side interior and linear pairs) ADD to 180. Work out which case it is BEFORE setting up the equation.'
      },
      {
        id:'GEO-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'30-60-90 triangle (area)',
        stem:'In right triangle PQR, angle Q is 90°, angle R is 30°, and the hypotenuse PR has length 12. What is the area of triangle PQR?',
        choices:{A:'18', B:'36', C:'36√3', D:'18√3'},
        correct:'D',
        expCorrect:'It is a 30-60-90 triangle with hypotenuse PR = 12 = 2x, so x = 6. The side opposite 30° (PQ) is x = 6, and the one opposite 60° (QR) is x√3 = 6√3. The legs are PQ and QR (the right angle is at Q). Area = (1/2)(6)(6√3) = 18√3.',
        expWrong:{
          A:'18 uses (1/2)(6)(6) = 18, forgetting that one of the legs is 6√3, not 6.',
          B:'36 comes from (1/2)(12)(6) using the hypotenuse as a leg. The hypotenuse is NOT a leg; the legs are 6 and 6√3.',
          C:'36√3 uses (1/2)(12)(6√3), again taking the hypotenuse (12) as the base. You have to use the two legs: 6 and 6√3.'
        },
        tip:'In a 30-60-90 with hypotenuse 2x: the short leg (facing the 30°) is x and the long one (facing the 60°) is x√3. The area uses the two LEGS, never the hypotenuse. Locate the right angle to know which sides are the legs.'
      },
      {
        id:'GEO-10', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Circles (general equation → radius)',
        stem:'The equation x² + y² − 6x + 8y + 9 = 0 represents a circle in the xy-plane. What is the radius of the circle?',
        answer:'4',
        expCorrect:'Complete the square. For x: x² − 6x = (x − 3)² − 9. For y: y² + 8y = (y + 4)² − 16. Substituting: (x − 3)² − 9 + (y + 4)² − 16 + 9 = 0 → (x − 3)² + (y + 4)² = 16. So r² = 16 → r = 4.',
        expWrong:{},
        tip:'To go from general form to standard form, complete the square in x and in y separately: take half the linear coefficient and square it. Remember to move ALL the constants to the right-hand side. The radius is √(right side), not the right side itself.'
      }
    ]
  });
})();
