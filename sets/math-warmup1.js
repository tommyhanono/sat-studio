/* SAT Studio question set — Math: Pre-Mock Warmup (MW1-01 a MW1-12) */
(function(){
  var FIG_TRIG_TRI =
    '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right triangle with legs 5 and 12 and hypotenuse 13, angle theta between the hypotenuse and the leg of length 12">' +
    '<polygon points="30,140 210,140 30,40" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="30" y="126" width="14" height="14" fill="none" stroke="#1e1e1e" stroke-width="2"/>' +
    '<text x="120" y="158" font-size="16" font-family="Georgia,serif" text-anchor="middle">12</text>' +
    '<text x="10" y="95" font-size="16" font-family="Georgia,serif">5</text>' +
    '<text x="115" y="82" font-size="16" font-family="Georgia,serif" font-style="italic">13</text>' +
    '<text x="186" y="134" font-size="15" font-family="Georgia,serif">θ</text>' +
    '<text x="12" y="166" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-warmup1',
    title: 'Math Pre-Mock Warmup',
    section: 'math',
    level: 'Difícil',
    description: 'A focused warm-up across your weakest Math topics — do this right before a full mock.',
    minutes: 18,
    questions: [
      {
        id:'MW1-01', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Quadratics: factoring (roots)',
        stem:'What is the positive solution to the equation x² + 2x − 15 = 0?',
        choices:{A:'−5', B:'−3', C:'3', D:'5'},
        correct:'C',
        expCorrect:'Look for two numbers that multiply to −15 and add to +2: they are +5 and −3. You factor (x + 5)(x − 3) = 0, so x = −5 or x = 3. The positive solution is 3. (Check: 3² + 2·3 − 15 = 9 + 6 − 15 = 0 ✓.)',
        expWrong:{
          A:'−5 is the NEGATIVE root, not the positive one. The factor (x + 5) gives x = −5.',
          B:'−3 flips the sign of the positive root. The factor (x − 3) gives x = +3, not −3.',
          D:'5 takes the number from the factor (x + 5) without flipping its sign. That factor gives x = −5.'
        },
        tip:'For x² + bx + c: two numbers that MULTIPLY to c and ADD to b (here product −15, sum +2 → 5 and −3). The roots are the OPPOSITES of those numbers inside each factor: (x + 5) → −5 and (x − 3) → 3.'
      },
      {
        id:'MW1-02', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Quadratics: vertex (minimum value)',
        stem:'The function f is defined by f(x) = x² + 8x + 10. What is the minimum value of f(x)?',
        choices:{A:'−6', B:'−4', C:'6', D:'10'},
        correct:'A',
        expCorrect:'The vertex sits at x = −b/(2a) = −8/(2·1) = −4. The minimum value is f(−4) = (−4)² + 8(−4) + 10 = 16 − 32 + 10 = −6. Since a > 0, the parabola opens upward and that is the minimum.',
        expWrong:{
          B:'−4 is the x-coordinate of the vertex, not the minimum value (which is the y-coordinate). You still have to evaluate f(−4).',
          C:'6 has the sign flipped or an arithmetic slip: f(−4) = 16 − 32 + 10 = −6, not +6.',
          D:'10 is f(0), the constant term (the y-intercept), not the minimum.'
        },
        tip:'Minimum value = the y-coordinate of the vertex. First x = −b/(2a), THEN evaluate f at that x. Do not confuse the vertex x with the value of the function.'
      },
      {
        id:'MW1-03', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratics: discriminant (number of solutions)',
        stem:'How many distinct real solutions does the equation 3x² − 12x + 12 = 0 have?',
        choices:{A:'Zero', B:'Exactly one', C:'Exactly two', D:'Exactly three'},
        correct:'B',
        expCorrect:'The discriminant is b² − 4ac = (−12)² − 4(3)(12) = 144 − 144 = 0. When the discriminant is 0 there is exactly one real solution (a double root). (Check: 3x² − 12x + 12 = 3(x² − 4x + 4) = 3(x − 2)², which is zero only at x = 2.)',
        expWrong:{
          A:'Zero solutions would mean a NEGATIVE discriminant. Here the discriminant is 0, not less than 0.',
          C:'Two distinct solutions require a POSITIVE discriminant. Here it comes out exactly 0, which produces a single double root.',
          D:'A quadratic never has three solutions; its degree is 2, so there are at most two real roots.'
        },
        tip:'Count solutions with the discriminant b² − 4ac: positive → 2 solutions, zero → 1 solution (double root), negative → 0 real solutions. Compute the discriminant BEFORE solving.'
      },
      {
        id:'MW1-04', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear systems (elimination)',
        stem:'If (x, y) is the solution to the system of equations below, what is the value of x?<br><br>2x + y = 11<br>x − y = 1',
        choices:{A:'4', B:'3', C:'5', D:'7'},
        correct:'A',
        expCorrect:'Add the two equations to eliminate y: (2x + y) + (x − y) = 11 + 1 → 3x = 12 → x = 4. (Check: with x = 4, y = 4 − 1 = 3, and 2·4 + 3 = 11 ✓.)',
        expWrong:{
          B:'3 is the value of y, not of x. Adding the equations correctly gives x = 4.',
          C:'5 comes from a slip adding or subtracting the equations. Correct elimination gives 3x = 12 → x = 4.',
          D:'7 is x + y (4 + 3), not x alone. They asked only for the value of x.'
        },
        tip:'When the coefficients of a variable are opposites (+y and −y), ADD the equations to eliminate it in one go. Then solve and substitute back to check.'
      },
      {
        id:'MW1-05', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear systems (number of solutions)',
        stem:'How many solutions (x, y) does the following system of equations have?<br><br>y = 3x − 4<br>6x − 2y = 8',
        choices:{A:'Zero', B:'Exactly one', C:'Exactly two', D:'Infinitely many'},
        correct:'D',
        expCorrect:'Substitute y = 3x − 4 into the second: 6x − 2(3x − 4) = 6x − 6x + 8 = 8, which gives 8 = 8, true for every x. The two equations are the SAME line (6x − 2y = 8 is equivalent to y = 3x − 4), so there are infinitely many solutions.',
        expWrong:{
          A:'Zero solutions would be the case of PARALLEL lines (same slope, different intercept). Here they are the same line, not parallel.',
          B:'Exactly one solution happens when the lines have DIFFERENT slopes and cross at a point. Here they have the same slope AND are the same line.',
          C:'Two solutions is impossible for a system of two lines: they either cross once, never, or coincide at infinitely many points.'
        },
        tip:'Put both into y = mx + b. Same m and same b → the same line → infinitely many solutions. Same m, different b → parallel → zero. Different m → exactly one. Here 6x − 2y = 8 simplifies to y = 3x − 4: identical.'
      },
      {
        id:'MW1-06', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Circles (sector area)',
        stem:'A circle has a radius of 6. A sector of the circle is bounded by a central angle of 60°. What is the area of the sector?',
        choices:{A:'2π', B:'12π', C:'36π', D:'6π'},
        correct:'D',
        expCorrect:'Sector area = (central angle / 360°) × total area. Total area = πr² = π(6)² = 36π. Sector = (60/360)(36π) = (1/6)(36π) = 6π.',
        expWrong:{
          A:'2π is the ARC LENGTH (you used the circumference 12π: (1/6)(12π) = 2π), not the sector area. A sector is a fraction of the AREA (πr²).',
          B:'12π is the full circumference (2πr = 12π), not the area of a sector.',
          C:'36π is the area of the WHOLE circle (360°), not just the 60° slice.'
        },
        tip:'A sector and an arc are a FRACTION of the whole: (angle/360). Sector area → fraction × area (πr²). Arc length → fraction × circumference (2πr). Do not mix area with circumference.'
      },
      {
        id:'MW1-07', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Similar triangles',
        stem:'Triangle ABC is similar to triangle XYZ, where vertices A, B, and C correspond to vertices X, Y, and Z, respectively. The length of side AB is 10 and the length of the corresponding side XY is 25. If the length of side AC is 14, what is the length of side XZ?',
        answer:'35',
        expCorrect:'In similar triangles, corresponding sides are proportional. The ratio is XY/AB = 25/10 = 2.5. So XZ = AC × 2.5 = 14 × 2.5 = 35. (Or by cross multiplication: 10/25 = 14/XZ → XZ = 14·25/10 = 35.) Answer: 35.',
        expWrong:{},
        tip:'Similarity = multiplying by a scale RATIO, never adding. Set up side/corresponding side = side/side and cross-multiply. Sanity-check the scale: the big triangle is 2.5× the small one.'
      },
      {
        id:'MW1-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Right-triangle trigonometry (SOHCAHTOA)',
        figure: FIG_TRIG_TRI,
        stem:'In the right triangle shown, the leg opposite angle θ has length 5, the leg adjacent to angle θ has length 12, and the hypotenuse has length 13. What is the value of tan θ?',
        choices:{A:'5/13', B:'12/13', C:'5/12', D:'12/5'},
        correct:'C',
        expCorrect:'SOHCAHTOA: tan θ = opposite / adjacent. The leg opposite θ is 5 and the adjacent one is 12, so tan θ = 5/12. (The 5-12-13 triple satisfies 5² + 12² = 25 + 144 = 169 = 13² ✓.)',
        expWrong:{
          A:'5/13 is sin θ (opposite/hypotenuse). The tangent does NOT use the hypotenuse.',
          B:'12/13 is cos θ (adjacent/hypotenuse), not the tangent.',
          D:'12/5 is the reciprocal: that would be adjacent/opposite (cot θ). The tangent is opposite/adjacent = 5/12.'
        },
        tip:'SOHCAHTOA: Tangent = Opposite / Adjacent (the only ratio that does NOT use the hypotenuse). First work out which side is opposite and which is adjacent relative to θ.'
      },
      {
        id:'MW1-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Reverse percent (original price)',
        stem:'After a discount of 20%, the price of a jacket is $60. What was the original price of the jacket, in dollars?',
        choices:{A:'$48', B:'$72', C:'$75', D:'$80'},
        correct:'C',
        expCorrect:'A 20% discount leaves 80% of the original price: 0.80 × (original) = 60. Solving: original = 60 / 0.80 = 75. (Check: 20% of 75 is 15, and 75 − 15 = 60 ✓.)',
        expWrong:{
          A:'$48 applies the discount AGAIN to 60 (60 − 20% = 48). The $60 is already the discounted price; you have to work backwards by dividing.',
          B:'$72 ADDS 20% of 60 (60 + 12 = 72). The 20% is figured on the ORIGINAL price, not on the 60.',
          D:'$80 sale de un ajuste aproximado incorrecto. La cuenta exacta es 60 / 0.80 = 75, no 80.'
        },
        tip:'Reverse percent: if something dropped 20%, the final price is 80% of the original. Divide by 0.80 (do not subtract 20% from the final number). Rule: final price = original × (1 − discount).'
      },
      {
        id:'MW1-10', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Mean (missing value)',
        stem:'A list of 5 numbers is 4, 9, 12, x, and 20. The mean (average) of the 5 numbers is 12. What is the value of x?',
        answer:'15',
        expCorrect:'The mean is the sum divided by the number of data points, so the total sum = mean × count = 12 × 5 = 60. The four known numbers add to 4 + 9 + 12 + 20 = 45. So x = 60 − 45 = 15. (Check: (4 + 9 + 12 + 15 + 20)/5 = 60/5 = 12 ✓.) Answer: 15.',
        expWrong:{},
        tip:'To find a missing value given the mean: total sum = mean × number of data points. Subtract the known values. Do not average only the ones you already have.'
      },
      {
        id:'MW1-11', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponential decay (model)',
        stem:'A car is purchased for $24,000 and loses 15% of its value each year. Which function V models the value of the car, in dollars, after t years?',
        choices:{A:'V(t) = 24000(0.85)^t', B:'V(t) = 24000(1.15)^t', C:'V(t) = 24000(0.15)^t', D:'V(t) = 24000 − 0.15t'},
        correct:'A',
        expCorrect:'Losing 15% each year leaves 85% of the value at every step, so you multiply by (1 − 0.15) = 0.85 per year: V(t) = 24000(0.85)^t. (Check: at t = 1, V = 24000·0.85 = 20400, which is 24000 minus 15%.)',
        expWrong:{
          B:'1.15 models 15% GROWTH per year, not a loss. The value has to go down.',
          C:'Multiplying by 0.15 would leave only 15% of the value each year (a brutal drop), not a 15% loss. The correct factor is 0.85.',
          D:'This model is LINEAR and on top of that it subtracts a mere 0.15 per year. A percentage repeating every year is MULTIPLICATIVE, not additive.'
        },
        tip:'Decay of r% → factor (1 − r/100)^t. Losing 15% → ×0.85 per period. Growth would be (1 + r/100). A repeated annual percentage is multiplicative, never a fixed number added or subtracted.'
      },
      {
        id:'MW1-12', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear functions (evaluating)',
        stem:'The linear function f satisfies f(0) = 3 and f(4) = 15. What is the value of f(10)?',
        choices:{A:'30', B:'33', C:'36', D:'45'},
        correct:'B',
        expCorrect:'The slope is (15 − 3)/(4 − 0) = 12/4 = 3, and f(0) = 3 is the intercept, so f(x) = 3x + 3. Then f(10) = 3(10) + 3 = 33. (Check: f(0) = 3 ✓, f(4) = 12 + 3 = 15 ✓.)',
        expWrong:{
          A:'30 is 3·10 but you forgot to add the intercept: f(x) = 3x + 3, so the 3 has to be added.',
          C:'36 comes from adding wrong (for instance 3·11, or 33 + 3). The correct value is 3·10 + 3 = 33.',
          D:'45 uses the wrong slope (for instance 15/…) or multiplies 15 by something. The slope is 3.'
        },
        tip:'With two points of a linear function: get the slope (Δy/Δx), build f(x) = (slope)x + f(0), and then evaluate. Do not forget to add the y-intercept.'
      }
    ]
  });
})();
