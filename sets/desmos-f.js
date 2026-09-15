/* SAT Studio — Desmos how-to hints for Math Hard sets (circles, geo, data) */
/* Each entry: { note: tip in English, latex: [expressions to type into Desmos] } */
window.SAT_DESMOS = Object.assign(window.SAT_DESMOS || {}, {

  /* ===== math-hard-circles (HMC) ===== */
  'HMC-01': {
    note:'Type the general equation exactly as written in Desmos and it draws the circle; the center is the middle of the figure. Graph (-5,2) as well to confirm that it lands right at the center.',
    latex:['x^2+y^2+10x-4y-7=0', '(-5,2)']
  },
  'HMC-02': {
    note:'Desmos as a calculator: type the sector area formula (1/2)r²θ with r=6 and θ=2π/3 and it gives you 12π ≈ 37.7. Remember the 1/2 and squaring the radius.',
    latex:['(1/2)*6^2*(2*pi/3)']
  },
  'HMC-03': {
    note:'Use Desmos as a calculator: type rθ with r=10 and θ=3π/5 and you get 6π ≈ 18.85. Arc length does NOT take the 1/2 (that one belongs to the area).',
    latex:['10*(3*pi/5)']
  },
  'HMC-04': {
    note:'Graph the circle x²+y²=25 and the point (3,4); add the line y=(-3/4)(x-3)+4 and you will see that it only grazes the circle at that point (tangent). With slope 4/3 it would cut through at two points.',
    latex:['x^2+y^2=25', '(3,4)', 'y=(-3/4)(x-3)+4']
  },
  'HMC-05': {
    note:'Graph the circle x²+y²=8 and the line y=x+c with a slider for c; move c until the line touches the circle at exactly one point (tangent): that happens at c=4.',
    latex:['x^2+y^2=8', 'y=x+c', 'y=x+4']
  },
  'HMC-06': {
    note:'Plot the two points and let Desmos compute the slope of ℓ by typing (5-(-1))/(6-2)=1.5. The perpendicular slope is the negative reciprocal: -1/1.5 = -2/3.',
    latex:['(2,-1)', '(6,5)', '(5-(-1))/(6-2)', '-1/((5-(-1))/(6-2))']
  },
  'HMC-07': {
    note:'Graph 4x−2y=10 to see its slope (2) and then y=2x+1; check that they are parallel (same steepness) and that the new one passes through (1,3).',
    latex:['4x-2y=10', '(1,3)', 'y=2x+1']
  },
  'HMC-08': {
    note:'Desmos as a calculator: type the distance formula with the coordinates and it gives you 10. Watch the subtraction of a negative: 4-(-2)=6.',
    latex:['\\sqrt{(4-(-2))^2+(-5-3)^2}']
  },
  'HMC-09': {
    note:'Plot A and M and let Desmos compute B=2M−A by typing the point (2*5-1, 2*2-(-4)); it lands at (9,8). Graph all three and check that M sits in the middle.',
    latex:['(1,-4)', '(5,2)', '(2*5-1,2*2-(-4))']
  },
  'HMC-10': {
    note:'Graph the two endpoints of the diameter and the circle (x-2)²+(y-6)²=25; you will see that both points land on it and that the center (2,6) sits right in the middle.',
    latex:['(-1,2)', '(5,10)', '(x-2)^2+(y-6)^2=25']
  },
  'HMC-11': {
    note:'Type the general equation and Desmos draws the circle; to read off the radius, also graph (x-4)²+(y+3)²=4, which confirms center (4,-3) and radius √4=2.',
    latex:['x^2+y^2-8x+6y+21=0', '(x-4)^2+(y+3)^2=4']
  },
  'HMC-12': {
    note:'Desmos as a calculator: first OP=√(9²+12²)=15, then the tangent length PT=√(OP²−r²). Type √(9²+12²−9²) and you get 12.',
    latex:['\\sqrt{9^2+12^2}', '\\sqrt{(9^2+12^2)-9^2}']
  },

  /* ===== math-hard-geo (HMG) ===== */
  'HMG-01': {
    note:'Use Desmos as a calculator. First get the radius from the volume: (288·3/4)^(1/3)=6. Then the area 4πr²: type 4*pi*6^2 and it gives 144π ≈ 452.4.',
    latex:['(288*3/4)^(1/3)', '4*pi*6^2']
  },
  'HMG-02': {
    note:'This one is conceptual: since V=πr²h and the radius is squared, multiplying r by 3 multiplies the volume by 3². Type 3^2 in Desmos and confirm the 9.',
    latex:['3^2']
  },
  'HMG-03': {
    note:'Desmos as a calculator: type the cone formula (1/3)πr²h with r=6 and h=8, and you get 96π ≈ 301.6. Do not forget the 1/3, and that the radius (6) is what gets squared.',
    latex:['(1/3)*pi*6^2*8']
  },
  'HMG-04': {
    note:'Add the two pieces in Desmos: cylinder πr²h plus hemisphere (2/3)πr³. Type pi*3^2*10+(2/3)*pi*3^3 and it gives 108π ≈ 339.3.',
    latex:['pi*3^2*10+(2/3)*pi*3^3']
  },
  'HMG-05': {
    note:'Desmos as a calculator: two bases plus the side, 2πr²+2πrh with r=4 and h=10. Type 2*pi*4^2+2*pi*4*10 and you get 112π ≈ 351.9.',
    latex:['2*pi*4^2+2*pi*4*10']
  },
  'HMG-06': {
    note:'The ratio of areas is the square of the ratio of sides. In Desmos type 12*(5/2)^2 and it gives 75.',
    latex:['12*(5/2)^2']
  },
  'HMG-07': {
    note:'Desmos as a calculator: the side across from 60° is x√3 with x=5√3, that is, (5√3)(√3). Type 5*sqrt(3)*sqrt(3) and it gives 15 (the √3·√3=3 clears the radical).',
    latex:['5*\\sqrt{3}*\\sqrt{3}']
  },
  'HMG-08': {
    note:'Shortcut in Desmos: area of a square = diagonal²/2. Type 10^2/2 and you get 50.',
    latex:['10^2/2']
  },
  'HMG-09': {
    note:'cos θ = adjacent/hypotenuse. In Desmos type 12/15 and it gives 0.8 = 4/5.',
    latex:['12/15']
  },
  'HMG-10': {
    note:'A and B are complementary, so cos B = sin A = 0.6. You can check it in Desmos (radian mode) by typing cos(π/2 − arcsin(0.6)), which gives 0.6.',
    latex:['cos(pi/2-arcsin(0.6))']
  },
  'HMG-11': {
    note:'Area grows with the square of the scale factor. Doubling the edge (×2) multiplies the area by 2²; type 2^2 in Desmos and it gives 4 (the volume would be 2³=8).',
    latex:['2^2']
  },
  'HMG-12': {
    note:'With the same base and height, the cone is 1/3 of the cylinder. In Desmos type (1/3)*60 and you get 20.',
    latex:['(1/3)*60']
  },

  /* ===== math-hard-data (HMD) ===== */
  'HMD-01': {
    note:'Reverse percent in Desmos: a 25% drop is ×0.75, so the original is 90 divided by 0.75. Type 90/0.75 and it gives 120.',
    latex:['90/0.75']
  },
  'HMD-02': {
    note:'Successive changes multiply, they do not add: type 1.30*0.80 in Desmos and it gives 1.04, that is, a net increase of 4%.',
    latex:['1.30*0.80']
  },
  'HMD-03': {
    note:'Conditional probability: the phrase "prefers online" fixes the denominator at that column (112). Type 84/112 in Desmos and it gives 0.75.',
    latex:['84/112']
  },
  'HMD-04': {
    note:'Weighted average in Desmos: multiply each group by its count, add, and divide by the total. Type (18*80+12*90)/30 and it gives 84.',
    latex:['(18*80+12*90)/30']
  },
  'HMD-05': {
    note:'Use lists in Desmos: define A (with the 12) and B (with the 40) and compare mean and median for each. The median stays at 8 while the mean rises from ≈7.6 to ≈11.6.',
    latex:['A=[3,5,6,8,9,10,12]', 'B=[3,5,6,8,9,10,40]', 'mean(A)', 'median(A)', 'mean(B)', 'median(B)']
  },
  'HMD-06': {
    note:'Enter each set as a list in Desmos and compare the spread with stdev(R) and stdev(S); the one for S comes out much larger (≈15.8 vs ≈3.2), so S has the greater standard deviation.',
    latex:['R=[46,48,50,52,54]', 'S=[30,40,50,60,70]', 'stdev(R)', 'stdev(S)']
  },
  'HMD-07': {
    note:'Conditional: the phrase "did not read the book" fixes the denominator at that row (150). Of those, 60 did like it: type 60/150 in Desmos and it gives 0.40.',
    latex:['60/150']
  },
  'HMD-08': {
    note:'Infinitely many solutions = the same line. Divide the first by 2: type 10/2 and it gives c=5. You can graph 6x+4y=10 and 3x+2y=5 to see that they overlap.',
    latex:['10/2', '6x+4y=10', '3x+2y=5']
  },
  'HMD-09': {
    note:'Graph 3x+2y=16 and 2x+4y=16 in Desmos (x=hot dog, y=drink) and click the intersection: it lands at (4,2), so the hot dog costs $4.',
    latex:['3x+2y=16', '2x+4y=16']
  },
  'HMD-10': {
    note:'Successive changes multiply: type 1.40*0.75 in Desmos and it gives 1.05, that is, the final price is 105% of the original.',
    latex:['1.40*0.75']
  },
  'HMD-11': {
    note:'Reverse percent: a 15% rise is ×1.15, so the original is 460 divided by 1.15. Type 460/1.15 in Desmos and it gives 400.',
    latex:['460/1.15']
  },
  'HMD-12': {
    note:'Graph x+y=40 and 6x+10y=312 in Desmos (x=small, y=large) and click the intersection: (22,18), so 18 large candles were sold.',
    latex:['x+y=40', '6x+10y=312']
  }

});
