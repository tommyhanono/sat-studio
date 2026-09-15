/* SAT Studio — Desmos how-to hints for Math sets (math-set1 + math-alg + math-alg2) */
window.SAT_DESMOS = Object.assign(window.SAT_DESMOS || {}, {
  // ----- math-set1 (M-001 a M-010) -----
  'M-001': {
    note: 'Graph y=3x-7 and y=14; they cross at x=7. Then type 6*7-14 on a new line and Desmos gives you 28.',
    latex: ['y=3x-7', 'y=14', '6*7-14']
  },
  'M-002': {
    note: 'Use it as a calculator: taking 35% off means paying 65%, so type 0.65*80 and Desmos gives you the final price, 52.',
    latex: ['0.65*80']
  },
  'M-003': {
    note: 'Type both equations exactly as given and tap the point where they cross: it is (9, 4). The question asks for x, so the answer is 9.',
    latex: ['x+2y=17', 'x-y=5']
  },
  'M-004': {
    note: 'Graph y=(x-3)(x+5) and tap the lowest point of the parabola: it is (-1, -16). The x-coordinate of the vertex is -1.',
    latex: ['y=(x-3)(x+5)']
  },
  'M-005': {
    note: 'Use it as a calculator: type the square root of 15^2+8^2 and Desmos gives you 17, the hypotenuse.',
    latex: ['\\sqrt{15^2+8^2}']
  },
  'M-006': {
    note: 'Type the 15 values (from the bars: three 1s, five 2s, four 3s, two 4s, one 5) inside median(...) and Desmos returns the median: 2.',
    latex: ['median(1,1,1,2,2,2,2,2,3,3,3,3,4,4,5)']
  },
  'M-007': {
    note: 'Graph y=3/(x+1) and y=12; the point where they cross has x=-0.75, that is, -3/4.',
    latex: ['y=3/(x+1)', 'y=12']
  },
  'M-008': {
    note: 'Use it as a calculator: the new total minus the old one is 6*16-5*14. Type that and Desmos gives you 26, the sixth number.',
    latex: ['6*16-5*14']
  },
  'M-009': {
    note: 'Since B=90°, A and C are complementary, so cos C = sin A = 3/5. Use Desmos as a calculator: type 3/5 and confirm it equals 0.6.',
    latex: ['3/5']
  },
  'M-010': {
    note: 'Graph y=2x^2+7x+8 and y=2x^2+8x+8. The one with b=7 never touches the x-axis (no real solutions) and the one with b=8 does; that is why the largest valid b is 7.',
    latex: ['y=2x^2+7x+8', 'y=2x^2+8x+8']
  },

  // ----- math-alg (ALG-01 a ALG-12) -----
  'ALG-01': {
    note: 'Graph y=5x+8 and y=3x+20; the crossing point has x=6.',
    latex: ['y=5x+8', 'y=3x+20']
  },
  'ALG-02': {
    note: 'Graph 4x+3y=24 and the vertical line x=3; they cross at (3, 4), so y=4.',
    latex: ['4x+3y=24', 'x=3']
  },
  'ALG-03': {
    note: 'Use it as a slope calculator: type (17-5)/(4-1) and Desmos gives you 4.',
    latex: ['(17-5)/(4-1)']
  },
  'ALG-04': {
    note: 'Graph y=2x+5 and y=13; the line rises above 13 when x>4, so among the choices only 5 works.',
    latex: ['y=2x+5', 'y=13']
  },
  'ALG-05': {
    note: 'Type both equations and tap the crossing point: it is (3, 2). They ask for x, so 3.',
    latex: ['3x+y=11', 'x-y=1']
  },
  'ALG-06': {
    note: 'Graph both equations; they cross at (3, 1). The question asks for y, so 1.',
    latex: ['y=2x-5', '4x+y=13']
  },
  'ALG-07': {
    note: 'Graph y=-2x+10 along with the point (3,4): the line passes right through the point, so it is the correct one.',
    latex: ['y=-2x+10', '(3,4)']
  },
  'ALG-08': {
    note: 'Use it as a calculator: subtract the flat fee and divide by the rate. Type (190-40)/25 and Desmos gives you 6 hours.',
    latex: ['(190-40)/25']
  },
  'ALG-09': {
    note: 'Graph y=-3x+7 and y=1; the line is at 1 or above when x<=2, and that is the solution.',
    latex: ['y=-3x+7', 'y=1']
  },
  'ALG-10': {
    note: 'No solution = parallel lines. With c=6 the second line is y=5x+9; graph y=5x+2 and y=5x+9 and you will see they never cross. So c=6.',
    latex: ['y=5x+2', 'y=5x+9']
  },
  'ALG-11': {
    note: 'Graph both equations; they cross at (3, 4). Then type 3+2*4 and Desmos gives you 11, which is x+2y.',
    latex: ['2x+3y=18', 'x+y=7', '3+2*4']
  },
  'ALG-12': {
    note: 'Graph y=7x-4 and y=31; the crossing point has x=5, so a=5.',
    latex: ['y=7x-4', 'y=31']
  },

  // ----- math-alg2 (AL2-01 a AL2-12) -----
  'AL2-01': {
    note: 'Graph y=6x-9 and y=2x+15; the crossing point has x=6.',
    latex: ['y=6x-9', 'y=2x+15']
  },
  'AL2-02': {
    note: 'Type both equations and tap the crossing point: it is (7, 3). They ask for x, so 7.',
    latex: ['x+y=10', 'x-y=4']
  },
  'AL2-03': {
    note: 'Graph y=3x-4 and y=11; the line stays below 11 when x<5, so among the choices only 4 works.',
    latex: ['y=3x-4', 'y=11']
  },
  'AL2-04': {
    note: 'Graph y=-4x+7 and look at where it crosses the y-axis (where x=0): it is the point (0, 7).',
    latex: ['y=-4x+7']
  },
  'AL2-05': {
    note: 'Graph both equations; they cross at (4, 8). The question asks for x, so 4.',
    latex: ['y=3x-4', '2x+y=16']
  },
  'AL2-06': {
    note: 'Graph with x=price of a hot dog and y=price of a soda; 2x+3y=13 and x+y=5 cross at (2, 3). The hot dog costs 2.',
    latex: ['2x+3y=13', 'x+y=5']
  },
  'AL2-07': {
    note: 'Graph y=3x-5 along with the point (2,1): the line passes right through the point, so it is the correct one.',
    latex: ['y=3x-5', '(2,1)']
  },
  'AL2-08': {
    note: 'Graph y=4-2x and y=10; the line is at 10 or below when x>=-3, and that is the solution.',
    latex: ['y=4-2x', 'y=10']
  },
  'AL2-09': {
    note: 'Infinitely many solutions = the same line. Divide the first by 2 to get 2x+3y=5; graph 4x+6y=10 and 2x+3y=5 and you will see one drawn on top of the other. So k=5.',
    latex: ['4x+6y=10', '2x+3y=5']
  },
  'AL2-10': {
    note: 'Graph y=30+45x and y=55x; they cross at x=3 (months), where both gyms cost 165.',
    latex: ['y=30+45x', 'y=55x']
  },
  'AL2-11': {
    note: 'Graph both equations; they cross at (6, 1). Then type 6-1 and Desmos gives you 5, which is x-y.',
    latex: ['3x+2y=20', 'x+2y=8', '6-1']
  },
  'AL2-12': {
    note: 'Graph y=-4x+26 and y=6; the crossing point has x=5, so a=5.',
    latex: ['y=-4x+26', 'y=6']
  }
});
