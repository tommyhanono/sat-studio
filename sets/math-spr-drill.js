/* SAT Studio question set — Math: Student-Produced Response (SPR) Grid-In Drill */
(function(){
  window.SAT_SETS.push({
    id: 'math-spr-drill',
    title: 'Math — Grid-In SPR Drill',
    section: 'math',
    level: 'Media-Hard',
    description: 'All grid-in (SPR) questions: practice numeric entry mechanics, fractions, decimals, and reasoning under timed conditions.',
    minutes: 18,
    questions: [
      {
        id:'SPR-01', type:'spr', domain:'Algebra', difficulty:'Fácil',
        skill:'Simple linear equation (one step)',
        stem:'If 3x = 21, what is the value of x? (Grid in your answer.)',
        choices:null,
        correct:'7',
        expCorrect:'Divide both sides by 3: x = 21/3 = 7.',
        expWrong:{
          'common':'Do not grid in "3x = 21" or "21/3"; only grid the final numeric answer: 7.'
        },
        tip:'Grid-in rule: enter only the final answer, left-aligned in the grid. No variables, no commas, no labels.'
      },
      {
        id:'SPR-02', type:'spr', domain:'Algebra', difficulty:'Fácil',
        skill:'Two-step linear equation',
        stem:'If 2x + 5 = 17, what is the value of x? (Grid in your answer.)',
        choices:null,
        correct:'6',
        expCorrect:'Subtract 5: 2x = 12. Divide by 2: x = 6.',
        expWrong:{
          'common':'Entering 12 (the intermediate step) instead of 6 (the final answer). Always finish solving.'
        },
        tip:'Multi-step equations: complete every step before gridding. Don\'t stop at intermediate results.'
      },
      {
        id:'SPR-03', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Fraction as answer',
        stem:'If 4x − 3 = 5, what is the value of x? (Grid in your answer as a fraction or decimal.)',
        choices:null,
        correct:'2',
        expCorrect:'Add 3: 4x = 8. Divide by 4: x = 2. (Exact value; no rounding.)',
        expWrong:{
          'common':'Rounding or entering an approximation. Always enter exact answers unless the problem specifies otherwise.'
        },
        tip:'Fraction answers: grid left-to-right (e.g., 3/4 or 7/3). If the fraction doesn\'t fit in 4 columns, convert to decimal. Decimals: enter with full precision.'
      },
      {
        id:'SPR-04', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Fraction answer (proper)',
        stem:'If 5x + 2 = 4, what is the value of x? (Grid in your answer as a fraction or decimal.)',
        choices:null,
        correct:'.4',
        expCorrect:'Subtract 2: 5x = 2. Divide by 5: x = 2/5 = 0.4. (Grid as 2/5 or .4; both are correct. Using decimals saves space.)',
        expWrong:{
          'common':'Entering "0.4" instead of ".4" (wastes a grid space); entering "2/5" without simplifying or converting to decimal if space is tight.'
        },
        tip:'Decimals: you may omit the leading zero (.4 instead of 0.4), which saves space in the grid. But 0.4 is also acceptable.'
      },
      {
        id:'SPR-05', type:'spr', domain:'Problem-Solving & Data', difficulty:'Media',
        skill:'Ratio or rate calculation',
        stem:'A car travels 240 miles in 4 hours. What is the car\'s average speed in miles per hour? (Grid in your answer.)',
        choices:null,
        correct:'60',
        expCorrect:'Average speed = distance / time = 240 / 4 = 60 miles per hour.',
        expWrong:{
          'common':'Entering 4 (the time) or 240 (the distance) instead of the calculated rate. Always perform the operation requested (speed = distance/time).'
        },
        tip:'Rate/ratio questions: identify the operation (divide distance by time for speed). Don\'t grid intermediate values.'
      },
      {
        id:'SPR-06', type:'spr', domain:'Problem-Solving & Data', difficulty:'Media',
        skill:'Percentage calculation',
        stem:'If 25% of a number is 15, what is the number? (Grid in your answer.)',
        choices:null,
        correct:'60',
        expCorrect:'Let n = the number. 0.25n = 15 → n = 15 / 0.25 = 60. (Or: if 25% is 15, then 100% is 4 × 15 = 60.)',
        expWrong:{
          'common':'Gridding 15 (the given percentage value) or 25 (the percentage itself). Solve for the whole number.'
        },
        tip:'Percentage problems: identify the part (15), the percent (25%), and solve for the whole. Algebra: 0.25n = 15 → n = 60.'
      },
      {
        id:'SPR-07', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Quadratic with one solution in valid range',
        stem:'If x² − 6x + 8 = 0, what is the smaller positive solution? (Grid in your answer.)',
        choices:null,
        correct:'2',
        expCorrect:'Factor: (x − 2)(x − 4) = 0 → x = 2 or x = 4. The smaller positive solution is 2.',
        expWrong:{
          'common':'Gridding 4 (the larger solution) or −2, −4 (negative solutions; the problem specifies "positive"). Read carefully.'
        },
        tip:'Quadratic SPR: after finding solutions, re-read the question for any constraints ("positive," "smaller," "greater").'
      },
      {
        id:'SPR-08', type:'spr', domain:'Problem-Solving & Data', difficulty:'Media',
        skill:'Mean calculation',
        stem:'The mean of the numbers 5, 8, 12, and x is 10. What is the value of x? (Grid in your answer.)',
        choices:null,
        correct:'15',
        expCorrect:'Mean = (5 + 8 + 12 + x) / 4 = 10. Multiply both sides by 4: 25 + x = 40 → x = 15.',
        expWrong:{
          'common':'Solving 5 + 8 + 12 + x = 10 (forgetting to divide by 4). Mean includes division.'
        },
        tip:'Mean = sum / count. Rearrange: sum = mean × count. Here: sum = 10 × 4 = 40. So 25 + x = 40 → x = 15.'
      },
      {
        id:'SPR-09', type:'spr', domain:'Geometry', difficulty:'Media',
        skill:'Area of a rectangle',
        stem:'A rectangle has a length of 12 and a width of 5. What is the area? (Grid in your answer.)',
        choices:null,
        correct:'60',
        expCorrect:'Area = length × width = 12 × 5 = 60.',
        expWrong:{
          'common':'Confusing perimeter (2(12 + 5) = 34) with area. Perimeter ≠ area.'
        },
        tip:'Rectangle formulas: Area = l × w. Perimeter = 2(l + w). Don\'t mix them up.'
      },
      {
        id:'SPR-10', type:'spr', domain:'Problem-Solving & Data', difficulty:'Difícil',
        skill:'Solving a system (grid one variable)',
        stem:'If 3x + y = 18 and x − y = 2, what is the value of x? (Grid in your answer.)',
        choices:null,
        correct:'5',
        expCorrect:'Add the equations: (3x + y) + (x − y) = 18 + 2 → 4x = 20 → x = 5. (Check: x = 5, y = 3; 3(5) + 3 = 18 ✓ and 5 − 3 = 2 ✓.)',
        expWrong:{
          'common':'Gridding y = 3 instead of x = 5. Re-read the question to confirm which variable is requested.'
        },
        tip:'When solving a system for SPR, solve for the variable explicitly asked, not just any variable.'
      },
      {
        id:'SPR-11', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Exponent and fraction interplay',
        stem:'If 2^a = 64, what is the value of a? (Grid in your answer.)',
        choices:null,
        correct:'6',
        expCorrect:'64 = 2^6 (since 2 × 2 × 2 × 2 × 2 × 2 = 64), so a = 6.',
        expWrong:{
          'common':'Confusing exponent with multiplication: 2 × 64 = 128, not related to 2^a = 64. Recognize powers of 2: 2^6 = 64.'
        },
        tip:'Know common powers: 2^3 = 8, 2^4 = 16, 2^5 = 32, 2^6 = 64, 2^7 = 128, 2^8 = 256, 2^9 = 512, 2^10 = 1024.'
      },
      {
        id:'SPR-12', type:'spr', domain:'Problem-Solving & Data', difficulty:'Hard',
        skill:'Multi-step problem with fraction',
        stem:'A store sells books at $12 each. If a customer buys 5 books and receives a 20% discount on the total, how much does the customer pay? (Grid in your answer.)',
        choices:null,
        correct:'48',
        expCorrect:'Original total: 5 × 12 = $60. Discount (20%): 0.20 × 60 = $12. Amount paid: 60 − 12 = $48.',
        expWrong:{
          'common':'Discounting the unit price instead of the total: 12 × 0.80 = 9.60, then 5 × 9.60 = 48 (same answer here, but conceptually wrong). Alternatively: gridding 12 (the discount amount) instead of 48 (the amount paid).'
        },
        tip:'Discount problems: calculate the original total first, then apply the discount rate, then subtract. Or apply the discount rate directly to each item, then sum. Both work.'
      }
    ]
  });
})();
