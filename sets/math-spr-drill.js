/* SAT Studio question set — Math: Student-Produced Response (SPR) Grid-In Drill */
(function(){
  window.SAT_SETS.push({
    id: 'math-spr-drill',
    title: 'Math — Grid-In SPR Drill',
    section: 'math',
    level: 'Difícil',
    description: 'All grid-in (SPR) questions: practice numeric entry mechanics, fractions, decimals, and reasoning under timed conditions.',
    minutes: 18,
    questions: [
      {
        id:'SPR-01', type:'spr', domain:'Algebra', difficulty:'Fácil',
        skill:'One-step linear equation',
        stem:'If 3x = 21, what is the value of x? (Grid in your answer.)',
        answer:'7',
        expCorrect:'Divide both sides by 3: x = 21/3 = 7. Answer: 7.',
        tip:'Grid-in rule: write only the final number. No variables, commas, units or equations.',
        desmos:'Type 21/3 and Desmos returns 7 — worth one line as a guard against a slip, though on a one-step division doing it in your head is faster.',
        desmosLatex:['21/3']
      },
      {
        id:'SPR-02', type:'spr', domain:'Algebra', difficulty:'Fácil',
        skill:'Two-step linear equation',
        stem:'If 2x + 5 = 17, what is the value of x? (Grid in your answer.)',
        answer:'6',
        expCorrect:'Subtract 5 from both sides: 2x = 12. Divide by 2: x = 6. (Check: 2(6) + 5 = 17 ✓.)',
        tip:'Do not write the intermediate step (12): finish solving before you fill the box.',
        desmos:'Graph y=2x+5 and y=17 and tap the crossing: x = 6.',
        desmosLatex:['y=2x+5','y=17']
      },
      {
        id:'SPR-03', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Linear equation (exact answer)',
        stem:'If 4x − 3 = 5, what is the value of x? (Grid in your answer as a fraction or decimal.)',
        answer:'2',
        expCorrect:'Add 3: 4x = 8. Divide by 4: x = 2. (Check: 4(2) − 3 = 5 ✓.) Even though the question allows a fraction or a decimal, here it comes out as an exact integer.',
        tip:'Always give the exact value. If solving leaves you an integer, write it as is: do not convert it or round anything.',
        desmos:'Graph y=4x-3 and y=5: they cross at x = 2, a whole number, so 2 is what goes in the box with nothing to convert.',
        desmosLatex:['y=4x-3','y=5']
      },
      {
        id:'SPR-04', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Answer as a fraction or decimal',
        stem:'If 5x + 2 = 4, what is the value of x? (Grid in your answer as a fraction or decimal.)',
        answer:'2/5',
        expCorrect:'Subtract 2: 5x = 2. Divide by 5: x = 2/5 = 0.4. (Check: 5(2/5) + 2 = 2 + 2 = 4 ✓.) The box accepts 2/5, .4 or 0.4.',
        tip:'You can drop the leading zero (.4 instead of 0.4) to save space. A fraction and its equivalent decimal are worth the same.',
        desmos:'Graph y=5x+2 and y=4 and tap the crossing: x = 0.4, which is the same value as 2/5, and the box takes either one.',
        desmosLatex:['y=5x+2','y=4']
      },
      {
        id:'SPR-05', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Rates (average speed)',
        stem:'A car travels 240 miles in 4 hours. What is the car\'s average speed in miles per hour? (Grid in your answer.)',
        answer:'60',
        expCorrect:'Average speed = distance / time = 240 / 4 = 60 miles per hour. Answer: 60.',
        tip:'Identify the operation being asked for (speed = distance ÷ time) and write the result, not the figures from the problem (240 or 4).',
        desmos:'Type 240/4 for 60; the calculator only guards the arithmetic here, because choosing distance ÷ time is the whole question.',
        desmosLatex:['240/4']
      },
      {
        id:'SPR-06', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Percents (finding the whole)',
        stem:'If 25% of a number is 15, what is the number? (Grid in your answer.)',
        answer:'60',
        expCorrect:'Let n be the number: 0.25n = 15 → n = 15 / 0.25 = 60. (Or faster: if 25% is 15, then 100% is 4 × 15 = 60.)',
        tip:'Here they give you the PART (15) and want the WHOLE. 25% = 1/4, so the total is 4 times the part. Do not write 15 or 25.',
        desmos:'Type 15/0.25 and read 60 in one line, which beats setting up and solving the proportion by hand.',
        desmosLatex:['15/0.25']
      },
      {
        id:'SPR-07', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Quadratic (solution with a constraint)',
        stem:'If x² − 6x + 8 = 0, what is the smaller positive solution? (Grid in your answer.)',
        answer:'2',
        expCorrect:'Factor: (x − 2)(x − 4) = 0 → x = 2 or x = 4. Both are positive; the SMALLER one is 2. (Check: 4 − 12 + 8 = 0 ✓.)',
        tip:'After solving a quadratic, reread the question: words like "positive", "smaller" or "greater" decide which of the two solutions you write.',
        desmos:'Graph y=x^2-6x+8 and read the two x-intercepts, 2 and 4: the smaller one is the 2 they want.',
        desmosLatex:['y=x^2-6x+8']
      },
      {
        id:'SPR-08', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Mean (solving for a missing value)',
        stem:'The mean of the numbers 5, 8, 12, and x is 10. What is the value of x? (Grid in your answer.)',
        answer:'15',
        expCorrect:'Mean = (5 + 8 + 12 + x) / 4 = 10. Multiply by 4: 25 + x = 40 → x = 15. (Check: (5+8+12+15)/4 = 40/4 = 10 ✓.)',
        tip:'Total sum = mean × count. Here 10 × 4 = 40; subtract what you already have (25) and the missing value falls out.',
        desmos:'After solving, type mean(5,8,12,15) and confirm Desmos returns exactly 10 before you grid the 15.',
        desmosLatex:['mean(5,8,12,15)']
      },
      {
        id:'SPR-09', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Area of a rectangle',
        stem:'A rectangle has a length of 12 and a width of 5. What is the area? (Grid in your answer.)',
        answer:'60',
        expCorrect:'Area = length × width = 12 × 5 = 60. Answer: 60.',
        tip:'Do not confuse area (l × w = 60) with perimeter (2(l + w) = 34). They want area: multiply.',
        desmos:'Type 12*5 and 2(12+5) on two lines: seeing 60 next to 34 is what stops you from gridding the perimeter when they asked for area.',
        desmosLatex:['12*5','2(12+5)']
      },
      {
        id:'SPR-10', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Systems of equations (solving for one variable)',
        stem:'If 3x + y = 18 and x − y = 2, what is the value of x? (Grid in your answer.)',
        answer:'5',
        expCorrect:'Add the two equations to eliminate y: (3x + y) + (x − y) = 18 + 2 → 4x = 20 → x = 5. (Check: y = 3; 3(5) + 3 = 18 ✓ and 5 − 3 = 2 ✓.)',
        tip:'In systems, solve for the variable the question wants (here x, not y). Adding the equations eliminates y in one go.',
        desmos:'Graph 3x+y=18 and x-y=2 and tap the intersection (5, 3): the question wants x, so grid 5, not 3.',
        desmosLatex:['3x+y=18','x-y=2']
      },
      {
        id:'SPR-11', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Exponents (powers of 2)',
        stem:'If 2^a = 64, what is the value of a? (Grid in your answer.)',
        answer:'6',
        expCorrect:'64 = 2 × 2 × 2 × 2 × 2 × 2 = 2⁶, so a = 6.',
        tip:'Learn the powers of 2: 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2⁹=512, 2¹⁰=1024.',
        desmos:'Graph y=2^x and y=64 and tap the crossing at x = 6 — the fast route whenever the power is not one you have memorized.',
        desmosLatex:['y=2^x','y=64']
      },
      {
        id:'SPR-12', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Multi-step percent problem',
        stem:'A store sells books at $12 each. If a customer buys 5 books and receives a 20% discount on the total, how much does the customer pay? (Grid in your answer.)',
        answer:'48',
        expCorrect:'Original total: 5 × 12 = $60. A 20% discount: 0.20 × 60 = $12. You pay: 60 − 12 = $48. (Shortcut: you pay 80% → 0.80 × 60 = 48.) In the box: 48, with no dollar sign.',
        tip:'Discounts: compute the total, apply the percentage and subtract (or multiply straight by 0.80). Never write $ or units in the grid.',
        desmos:'Type 5*12*0.8 and read 48 straight out, skipping the separate step of computing the $12 discount.',
        desmosLatex:['5*12*0.8']
      }
    ]
  });
})();
