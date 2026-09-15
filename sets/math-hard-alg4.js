/* SAT Studio question set — Math: Linear Systems & Models — Hard (HA4-01 to HA4-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-hard-alg4',
    title: 'Linear Systems & Models — Hard',
    section: 'math',
    level: 'Difícil',
    description: 'Hard linear systems and linear models — elimination that forces you to scale BOTH equations, equal-cost and equilibrium conditions, converting between standard, slope-intercept and point-slope form, budget and capacity inequalities, and reading what a single number means inside a model.',
    minutes: 20,
    questions: [
      {
        id:'HA4-01', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Elimination that requires scaling both equations',
        stem:'The system of equations below is given.<br><br>6x + 4y = 18<br>4x + 5y = 5<br><br>If (x, y) is the solution to the system, what is the value of y?',
        choices:{A:'21', B:'3', C:'−3', D:'5'},
        correct:'C',
        expCorrect:'Neither pair of coefficients matches, and neither one is a multiple of its partner, so BOTH equations have to be scaled. Take the x-terms: 6 and 4 meet at 12. Multiply the first equation by 2 → 12x + 8y = 36. Multiply the second by 3 → 12x + 15y = 15. Now subtract the first from the second: (12x − 12x) + (15y − 8y) = 15 − 36 → 7y = −21 → y = −3. (Check: 6x + 4(−3) = 18 → 6x = 30 → x = 5, and 4(5) + 5(−3) = 20 − 15 = 5 ✓.)',
        expWrong:{
          A:'21 is the right-hand side of the subtraction with the minus sign lost, and it is also one step early: 7y = −21 still has to be divided by 7.',
          B:'3 drops the negative when dividing: −21 ÷ 7 = −3, not 3. The right side came out negative, so y is negative.',
          D:'5 is the value of x, not of y. The system is solved correctly, but the question asks for the other variable.'
        },
        tip:'When no coefficient is a multiple of its partner, scale BOTH equations up to the least common multiple (6 and 4 → 12). Multiply every term, right-hand side included, and flip the sign of every term when you subtract.',
        desmos:'Graph 6x+4y=18 and 4x+5y=5 and tap the intersection: (5, −3), so y = −3.',
        desmosLatex:['6x+4y=18','4x+5y=5']
      },
      {
        id:'HA4-02', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Point-slope form rewritten in standard form',
        stem:'In the xy-plane, line ℓ is represented by the equation y − 5 = −(3/4)(x + 8). Which of the following is an equation of line ℓ written in the form Ax + By = C, where A, B, and C are integers?',
        choices:{A:'3x + 4y = −4', B:'3x + 4y = 44', C:'3x + 4y = −44', D:'4x + 3y = −4'},
        correct:'A',
        expCorrect:'Clear the fraction first: multiply both sides by 4. That gives 4(y − 5) = −3(x + 8) → 4y − 20 = −3x − 24. Move the x-term to the left and the −20 to the right by adding 3x and adding 20 to both sides: 3x + 4y = −24 + 20 = −4. (Check with the point the original form hands you, (−8, 5): 3(−8) + 4(5) = −24 + 20 = −4 ✓.)',
        expWrong:{
          B:'3x + 4y = 44 comes from distributing −3(x + 8) as −3x + 24. The −3 multiplies the +8 as well, so that term is −24, not +24.',
          C:'3x + 4y = −44 moves the −20 across without changing its sign (−24 − 20). Adding 20 to both sides turns −24 into −24 + 20 = −4.',
          D:'4x + 3y = −4 reads the slope backwards. In Ax + By = C the slope is −A/B, so a slope of −3/4 needs A = 3 and B = 4, not A = 4 and B = 3.'
        },
        tip:'Point-slope → standard in two moves: multiply both sides by the denominator of the slope, then collect x and y on the left. Multiply EVERY term, and remember the coefficient outside the parentheses hits both terms inside.',
        desmos:'Graph y−5=−(3/4)(x+8) and 3x+4y=−4: the two graphs land exactly on top of each other, so 3x + 4y = −4 is the answer.',
        desmosLatex:['y-5=-\\frac{3}{4}(x+8)','3x+4y=-4']
      },
      {
        id:'HA4-03', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'System in context: quantity at the price where supply meets demand',
        stem:'At a produce market, the number of crates of mangoes growers are willing to supply in a week is modeled by s = 40p − 60, and the number of crates stores are willing to buy that week is modeled by d = 300 − 20p, where p is the price per crate in dollars. At the price for which supply equals demand, how many crates of mangoes are sold that week?',
        choices:{A:'6', B:'180', C:'240', D:'360'},
        correct:'B',
        expCorrect:'Supply equals demand means s = d: 40p − 60 = 300 − 20p → 60p = 360 → p = 6 dollars per crate. That is only half the job. Substitute p = 6 into either model to get the number of crates: supply gives 40(6) − 60 = 240 − 60 = 180, and demand gives 300 − 20(6) = 300 − 120 = 180 ✓. So 180 crates are sold.',
        expWrong:{
          A:'6 is the price per crate, the intermediate result. The question asks for a number of crates, so p = 6 still has to go back into one of the two models.',
          C:'240 is 40(6) with the −60 left off. Substitute the whole supply expression: 40(6) − 60 = 180.',
          D:'360 is the 60p side before dividing by 60. It is a step on the way to the price, not a number of crates.'
        },
        tip:'"Supply equals demand" (like "the two costs are equal") means: set the two expressions equal and solve for the shared variable. Then read the question again — it usually wants the OTHER quantity at that point, which takes one more substitution.',
        desmos:'Graph y=40x−60 and y=300−20x and tap the intersection: (6, 180) — the price is 6 and the answer, the number of crates, is the y-coordinate 180.',
        desmosLatex:['y=40x-60','y=300-20x']
      },
      {
        id:'HA4-04', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Interpreting a coefficient in a two-variable equation in context',
        stem:'A school buys f fruit trays and d dessert trays for an awards night and spends $540 in total, a situation represented by the equation 6f + 9d = 540. Which of the following is the best interpretation of the 9 in this equation?',
        choices:{
          A:'The school buys 9 dessert trays.',
          B:'The school spends $9 on dessert trays in total.',
          C:'Each fruit tray costs $9.',
          D:'Each dessert tray costs $9.'
        },
        correct:'D',
        expCorrect:'Follow the units. The whole equation adds up to 540 dollars, and d counts dessert trays, so the product 9d must come out in dollars. The only way (9) × (a number of trays) gives dollars is if 9 is the price of ONE dessert tray: 9 dollars/tray × d trays = dollars. (Sanity check: if the school bought nothing but dessert trays, it would get 540 ÷ 9 = 60 of them, exactly what $9 each buys.)',
        expWrong:{
          A:'This confuses the coefficient with the variable. The number of dessert trays is d, and d is not fixed at 9 — it is whatever the school orders.',
          B:'This confuses the coefficient with the product. The total spent on desserts is 9d dollars, which equals $9 only in the one case d = 1.',
          C:'This attaches the 9 to the wrong variable. The 9 multiplies d, the dessert trays; the number sitting next to f is 6, so $6 is the price of each fruit tray.'
        },
        tip:'In a model like ax + by = c, every coefficient is a rate "per one unit" of the variable it multiplies, and c is the total. Before choosing, check which variable the number is touching and check that the units of the product match the units of the total.',
        desmos:'Graph 6x+9y=540 and read the y-intercept: 60 dessert trays and nothing else uses the whole $540, so 540/60 = $9 per dessert tray.',
        desmosLatex:['6x+9y=540']
      },
      {
        id:'HA4-05', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Capacity inequality: greatest number that fits',
        stem:'A freight elevator can carry a total load of at most 2,400 pounds. An operator who weighs 180 pounds rides with the load and stacks crates that weigh 95 pounds each. What is the greatest number of crates the operator can take up in one trip?',
        choices:{A:'23', B:'24', C:'25', D:'27'},
        correct:'A',
        expCorrect:'Let n be the number of crates. The load is the operator plus the crates, and it cannot pass the limit: 180 + 95n ≤ 2,400 → 95n ≤ 2,220 → n ≤ 23.36… Crates are whole and the limit is a maximum, so round DOWN: 23. (Check: 180 + 95(23) = 180 + 2,185 = 2,365 ≤ 2,400 ✓, while 24 crates give 180 + 2,280 = 2,460 > 2,400 ✗.)',
        expWrong:{
          B:'24 rounds 23.36 up. With an "at most" limit you round down — 24 crates put the elevator at 2,460 pounds, over the limit.',
          C:'25 ignores the operator: 2,400 ÷ 95 = 25.26 → 25. He rides with the load, so his 180 pounds come off the limit before the crates get counted.',
          D:'27 adds the operator instead of subtracting him: (2,400 + 180) ÷ 95 = 27.1. His weight uses up part of the limit, so it is subtracted.'
        },
        tip:'Constraint problems all read the same: fixed amount + (rate)(n) ≤ limit. Isolate n, then round the way the words demand — "at most / greatest" rounds DOWN, "at least / least" rounds UP — and test the whole number back in the inequality.',
        desmos:'Graph y=180+95x and y=2400 and look at where they cross (x ≈ 23.4); the last whole number still below the line is 23.',
        desmosLatex:['y=180+95x','y=2400']
      },
      {
        id:'HA4-06', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear function from two points in context (evaluating at a new input)',
        stem:'The pressure inside a diving bell is a linear function of its depth below the surface. At a depth of 8 meters the pressure is 1.8 atmospheres, and at a depth of 20 meters the pressure is 3.0 atmospheres. According to this model, what is the pressure, in atmospheres, at a depth of 30 meters?',
        choices:{A:'3.0', B:'4.2', C:'4.0', D:'4.5'},
        correct:'C',
        expCorrect:'Slope first: (3.0 − 1.8)/(20 − 8) = 1.2/12 = 0.1 atmosphere per meter. Then the constant, using one of the points: 1.8 = 0.1(8) + b → b = 1.8 − 0.8 = 1.0. So P = 0.1d + 1.0. At d = 30: P = 0.1(30) + 1.0 = 3.0 + 1.0 = 4.0. (Check the other point: 0.1(20) + 1.0 = 3.0 ✓.)',
        expWrong:{
          A:'3.0 is 0.1(30) with the constant left off. The line does not pass through the origin — at depth 0 the pressure is already 1.0 atmosphere.',
          B:'4.2 adds the whole 1.2 change onto 3.0, but that 1.2 belongs to a 12-meter jump. From 20 m to 30 m is only 10 meters, worth 10(0.1) = 1.0.',
          D:'4.5 assumes pressure is proportional to depth (3.0 ÷ 20 = 0.15 per meter, times 30). A linear function with a nonzero constant is not a proportion; the slope comes from the CHANGE between the two points.'
        },
        tip:'Two points in context → slope = change in output ÷ change in input, then use one point to solve for the constant. Never divide a single output by a single input: that shortcut only works if the line passes through (0, 0).',
        desmos:'Type y=0.1x+1, confirm it passes through (8, 1.8) and (20, 3), then read y at x=30 → 4.',
        desmosLatex:['y=0.1x+1','(8,1.8)','(20,3)']
      },
      {
        id:'HA4-07', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Elimination that requires scaling both equations (opposite signs)',
        stem:'The system of equations below is given.<br><br>5x + 6y = 47<br>4x − 9y = 10<br><br>If (x, y) is the solution to the system, what is the value of x?',
        answer:'7',
        expCorrect:'No coefficient is a multiple of its partner, so both equations get scaled. Eliminating y is the cheaper route: 6 and 9 meet at 18, while 5 and 4 would need 20. Multiply the first equation by 3 → 15x + 18y = 141. Multiply the second by 2 → 8x − 18y = 20. The y-terms are now opposites, so ADD the equations: 23x = 161 → x = 7. (Check: 5(7) + 6y = 47 → 6y = 12 → y = 2, and 4(7) − 9(2) = 28 − 18 = 10 ✓.) Answer: 7.',
        expWrong:{},
        tip:'Choose the variable whose coefficients reach a common multiple fastest (6 and 9 → 18 beats 5 and 4 → 20). After scaling: opposite signs → add; matching signs → subtract.',
        desmos:'Graph 5x+6y=47 and 4x−9y=10 and tap the intersection: (7, 2), so x = 7.',
        desmosLatex:['5x+6y=47','4x-9y=10']
      },
      {
        id:'HA4-08', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Standard form rewritten in point-slope form',
        stem:'In the xy-plane, line m is represented by 2x + 5y = 30, and the point (5, 4) lies on line m. Which of the following is an equation of line m written in point-slope form?',
        choices:{
          A:'y − 4 = −(5/2)(x − 5)',
          B:'y − 4 = −(2/5)(x − 5)',
          C:'y − 5 = −(2/5)(x − 4)',
          D:'y + 4 = −(2/5)(x + 5)'
        },
        correct:'B',
        expCorrect:'Solve for y to read the slope: 2x + 5y = 30 → 5y = −2x + 30 → y = −(2/5)x + 6, so the slope is −2/5. Point-slope form is y − y₁ = m(x − x₁), and the given point is (x₁, y₁) = (5, 4), so y − 4 = −(2/5)(x − 5). (Check by expanding: y − 4 = −(2/5)x + 2 → y = −(2/5)x + 6, the same line ✓.)',
        expWrong:{
          A:'This flips the slope to −5/2. From Ax + By = C the slope is −A/B = −2/5, not −B/A.',
          C:'This swaps the coordinates of the point: in y − y₁ = m(x − x₁) the 4 (the y-value) goes with y and the 5 (the x-value) goes with x. And (4, 5) is not even on the line: 2(4) + 5(5) = 33, not 30.',
          D:'Both signs are wrong. Point-slope SUBTRACTS the coordinates, so the point (5, 4) gives y − 4 and x − 5; y + 4 and x + 5 would describe the point (−5, −4), which is not on the line.'
        },
        tip:'Standard → point-slope: get the slope (solve for y, or use slope = −A/B), then drop the given point into y − y₁ = m(x − x₁). The coordinates are always subtracted, so a positive coordinate leaves a minus sign behind.',
        desmos:'Graph 2x+5y=30 and y−4=−(2/5)(x−5): they land exactly on top of each other, so that point-slope equation is the answer.',
        desmosLatex:['2x+5y=30','y-4=-\\frac{2}{5}(x-5)']
      },
      {
        id:'HA4-09', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'System in context: the common total when two plans cost the same',
        stem:'A pottery studio offers two plans. Plan A charges a $75 membership fee plus $14 for each class taken. Plan B charges a $20 membership fee plus $25 for each class taken. For the number of classes at which the two plans cost the same, what is that total cost, in dollars?',
        choices:{A:'5', B:'70', C:'125', D:'145'},
        correct:'D',
        expCorrect:'Set the two totals equal: 75 + 14n = 20 + 25n → 75 − 20 = 25n − 14n → 55 = 11n → n = 5 classes. That is the intermediate step; the question asks for the cost. Substitute n = 5 into either plan: plan A gives 75 + 14(5) = 75 + 70 = 145 dollars. (Check with plan B: 20 + 25(5) = 20 + 125 = 145 ✓.)',
        expWrong:{
          A:'5 is the number of classes, the value of n. It is where the two plans meet, not what they cost there.',
          B:'70 is 14(5), the class charges under plan A with the $75 membership fee left out. The total has to include the fee.',
          C:'125 is 25(5), the class charges under plan B without its $20 membership fee.'
        },
        tip:'"The two plans cost the same" → set the two expressions equal and solve for the shared variable. Then ask what the question wants: the variable itself, or the common value both plans reach. The second one needs one more substitution.',
        desmos:'Graph y=75+14x and y=20+25x and tap the intersection: (5, 145) — the answer is the y-coordinate, 145.',
        desmosLatex:['y=75+14x','y=20+25x']
      },
      {
        id:'HA4-10', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Interpreting the rate in a model measured in thousands',
        stem:'The equation N = 1.8t + 46.5 models the number of households N, in thousands, in a county t years after 2005. Which of the following is the best interpretation of the 1.8 in this model?',
        choices:{
          A:'The number of households increases by about 1,800 per year.',
          B:'The number of households increases by about 1.8 per year.',
          C:'The number of households increases by about 18,000 per year.',
          D:'There were about 1,800 households in the county in 2005.'
        },
        correct:'A',
        expCorrect:'The 1.8 multiplies t, so it is the rate: how much N moves when t goes up by one year. But N is measured IN THOUSANDS, so an increase of 1.8 in N means 1.8 × 1,000 = 1,800 households. The county gains about 1,800 households per year. (For contrast, the constant 46.5 is the starting value: about 46,500 households in 2005.)',
        expWrong:{
          B:'This reads the slope but ignores the words "in thousands". N counts thousands of households, so a rise of 1.8 in N is 1,800 households, not 1.8 of them.',
          C:'18,000 moves the decimal one place too far. 1.8 thousand is 1,800.',
          D:'This describes a starting value, which is the job of the constant 46.5 (about 46,500 households in 2005). The 1.8 sits next to t, so it has to be a yearly rate.'
        },
        tip:'With "in thousands" or "in millions" models, do it in two steps: interpret the number first (rate or starting value), convert the units second. The number multiplying the variable is always a rate; the lone constant is always the value at variable = 0.',
        desmos:'Graph y=1.8x+46.5 and compare y at x=0 and x=1: it rises 1.8, and because y counts thousands that is 1,800 households a year.',
        desmosLatex:['y=1.8x+46.5']
      },
      {
        id:'HA4-11', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Budget inequality: least number needed to reach a goal',
        stem:'A robotics club needs to raise at least $2,000 for a competition. A local business donates $350, and the club raises the rest by selling raffle tickets at $22.50 each. What is the least number of raffle tickets the club must sell to reach its goal?',
        choices:{A:'73', B:'74', C:'89', D:'105'},
        correct:'B',
        expCorrect:'Let n be the number of tickets: 350 + 22.5n ≥ 2,000 → 22.5n ≥ 1,650 → n ≥ 73.33… Tickets are whole and the club needs AT LEAST $2,000, so round UP: 74. (Check: 350 + 22.5(74) = 350 + 1,665 = 2,015 ≥ 2,000 ✓, while 73 tickets raise 350 + 1,642.50 = 1,992.50, which falls short.)',
        expWrong:{
          A:'73 rounds 73.33 down, which leaves the club at $1,992.50 — under the goal. With "at least" you round UP.',
          C:'89 ignores the $350 donation: 2,000 ÷ 22.5 = 88.9 → 89. The donation already counts toward the goal, so subtract it first.',
          D:'105 adds the donation to the goal instead of subtracting it: (2,000 + 350) ÷ 22.5 = 104.4 → 105.'
        },
        tip:'Same setup as a spending cap, opposite rounding: "at least / minimum" rounds UP, "at most / maximum" rounds DOWN. When the division comes out fractional, the decimal never survives — decide which way it moves by rereading the phrase.',
        desmos:'Graph y=350+22.5x and y=2000; they cross near x=73.3, so the first whole number that clears the line is 74.',
        desmosLatex:['y=350+22.5x','y=2000']
      },
      {
        id:'HA4-12', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear function from two points in context (inverting the model)',
        stem:'After an industrial oven is switched off, its temperature decreases at a constant rate. A thermometer reads 372 °F at 5 minutes after the oven is switched off and 282 °F at 20 minutes after it is switched off. How many minutes after the oven is switched off will the thermometer read 180 °F?',
        answer:'37',
        expCorrect:'Rate first: (282 − 372)/(20 − 5) = −90/15 = −6 °F per minute. Build the model from the point (5, 372): T = 372 − 6(t − 5) = 402 − 6t. Now invert it — the question gives a temperature and wants a time, so set T = 180: 180 = 402 − 6t → 6t = 222 → t = 37. (Check: 402 − 6(37) = 402 − 222 = 180 ✓, and 402 − 6(20) = 282 ✓.) Answer: 37.',
        expWrong:{},
        tip:'Build the model from the two points, then check which way the question runs. Given a time → substitute it in. Given an output → set the model equal to that output and solve for the time. Stopping at the rate (here −6) is the most common miss.',
        desmos:'Graph y=402−6x and y=180 and tap the intersection: x = 37 minutes.',
        desmosLatex:['y=402-6x','y=180']
      }
    ]
  });
})();
