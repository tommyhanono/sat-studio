/* SAT Studio — Desmos how-to hints for Math sets: math-warmup1 (MW1-*) + math-hard-poly (HMP-*) */
window.SAT_DESMOS = Object.assign(window.SAT_DESMOS || {}, {
  'MW1-01': {
    note: 'Graph y=x^2+2x-15 and look at where the parabola crosses the x-axis (the roots). You will see crossings at x=−5 and x=3; the positive solution is 3.',
    latex: ['y=x^2+2x-15']
  },
  'MW1-02': {
    note: 'Graph y=x^2+8x+10 and click the lowest point (the vertex). The y-coordinate of that vertex is the minimum value: −6.',
    latex: ['y=x^2+8x+10']
  },
  'MW1-03': {
    note: 'Graph y=3x^2-12x+12 and count how many times it touches or crosses the x-axis. It only touches at x=2 (the vertex sits right on the axis), so there is exactly one solution.',
    latex: ['y=3x^2-12x+12']
  },
  'MW1-04': {
    note: 'Graph the two lines 2x+y=11 and x−y=1 and click the point where they cross. The x-coordinate of that intersection is 4.',
    latex: ['2x+y=11', 'x-y=1']
  },
  'MW1-05': {
    note: 'Graph y=3x−4 and 6x−2y=8. You will see only one line because they lie on top of each other (they are the same): that means infinitely many solutions.',
    latex: ['y=3x-4', '6x-2y=8']
  },
  'MW1-06': {
    note: 'The sector is a fraction of the total area. In Desmos type (60/360)*pi*6^2 and compare it with 6*pi: both give ≈18.85, so the area is 6π.',
    latex: ['(60/360)*pi*6^2', '6*pi']
  },
  'MW1-07': {
    note: 'This is a similarity proportion (scale factor 25/10=2.5). In Desmos type 14*25/10 and it gives you 35, the length of XZ.',
    latex: ['14*25/10']
  },
  'MW1-08': {
    note: 'This is SOHCAHTOA: tan θ = opposite/adjacent = 5/12. In Desmos type 5/12 (≈0.417) to see the value; remember that tangent does NOT use the hypotenuse (13).',
    latex: ['5/12']
  },
  'MW1-09': {
    note: 'The final price is 80% of the original, that is, 0.8·original=60. In Desmos type 60/0.8 and you get 75.',
    latex: ['60/0.8']
  },
  'MW1-10': {
    note: 'The total sum has to be mean×count = 12·5 = 60. In Desmos type 12*5-(4+9+12+20) and it gives you 15, the value of x.',
    latex: ['12*5-(4+9+12+20)']
  },
  'MW1-11': {
    note: 'Losing 15% each year multiplies by 0.85. Graph y=24000*0.85^x (it falls over time) and compare it with 24000*1.15^x (that would rise); evaluate 24000*0.85=20400 for t=1.',
    latex: ['y=24000*0.85^x', '24000*0.85']
  },
  'MW1-12': {
    note: 'The line passes through (0,3) and (4,15): slope 3, so graph y=3x+3 and check that it goes through those points. Then type 3*10+3 and it gives 33.',
    latex: ['y=3x+3', '3*10+3']
  },
  'HMP-01': {
    note: 'Graph y=(x-3)^2(x+1)(x-5). Where the curve bounces without crossing the axis (x=3, even power) counts; where it passes through (x=−1 and x=5) does not. There is only 1 bounce.',
    latex: ['y=(x-3)^2(x+1)(x-5)']
  },
  'HMP-02': {
    note: 'Graph y=-2x^3+5x^2-7 and zoom out. Look at the ends: on the left the curve rises (→+∞) and on the right it falls (→−∞).',
    latex: ['y=-2x^3+5x^2-7']
  },
  'HMP-03': {
    note: 'Let x play the role of k. Graph y=2*2^3-3*2^2+2x-5 (which is p(2)) along with y=7; they cross at x=4, so k=4.',
    latex: ['y=2*2^3-3*2^2+2x-5', 'y=7']
  },
  'HMP-04': {
    note: 'Let x play the role of c. Graph y=(-3)^3+2*(-3)^2-5*(-3)+x (which is p(−3)) and find where it crosses the x-axis: at x=−6, so c=−6.',
    latex: ['y=(-3)^3+2*(-3)^2-5*(-3)+x']
  },
  'HMP-05': {
    note: 'Graph y=(x^2-9)/(x^2-x-6) and y=(x+3)/(x+2). The curves land on top of each other (identical), so they are equivalent; try the other choices and you will see they do not match.',
    latex: ['y=(x^2-9)/(x^2-x-6)', 'y=(x+3)/(x+2)']
  },
  'HMP-06': {
    note: 'Graph y=12/(x^2-4)+1 and y=3/(x-2). They cross only at x=1 (that is the solution). At x=2 both have an asymptote, which is why x=2 is an extraneous solution and does not count.',
    latex: ['y=12/(x^2-4)+1', 'y=3/(x-2)']
  },
  'HMP-07': {
    note: 'Graph y=(27x^6)^{2/3} and y=9x^4; for x>0 the curves land on top of each other, confirming that they are equivalent.',
    latex: ['y=(27x^6)^{2/3}', 'y=9x^4']
  },
  'HMP-08': {
    note: 'With two variables, check with numbers: use x=2, y=3. Type (2^{-3}*3^2)/(2^{-5}*3^{-1}) → 108, and compare it with x²y³ = 2^2*3^3 = 108. They match.',
    latex: ['(2^{-3}*3^2)/(2^{-5}*3^{-1})', '2^2*3^3']
  },
  'HMP-09': {
    note: 'Graph y=100x and y=2^x and zoom out. At first 100x is ahead, but 2^x crosses it near x≈10 and stays above it from then on.',
    latex: ['y=100x', 'y=2^x']
  },
  'HMP-10': {
    note: 'Define f(x)=3x-4 and g(x)=x^2+2, then type g(f(3)); Desmos returns 27 (first f(3)=5, then g(5)=27).',
    latex: ['f(x)=3x-4', 'g(x)=x^2+2', 'g(f(3))']
  },
  'HMP-11': {
    note: 'Graph y=x^3-7x^2+10x and find where it crosses the x-axis (the zeros): x=0, 2, and 5. The largest is 5.',
    latex: ['y=x^3-7x^2+10x']
  },
  'HMP-12': {
    note: 'Let x play the role of a. Graph y=2^3+x*2^2-4*2-12 (which is p(2)) and look at where it crosses the x-axis: at x=3, so a=3.',
    latex: ['y=2^3+x*2^2-4*2-12']
  }
});
