/* SAT Studio question set — Math: Algebra — Linear equations in two variables (L2V-01 a L2V-12)
   Destreza oficial: "Linear equations in two variables". El banco tenía 7 y era el hueco
   más grande; este set agrega 12 con sesgo a fácil (5 Fácil · 5 Media · 2 Difícil) porque
   lo va a usar una escuela entera, incluida gente que arranca en 400.
   Cobertura: escribir la ecuación desde un contexto · las tres formas (pendiente-intersección,
   estándar, punto-pendiente) · interpretar pendiente e intercepto EN LAS UNIDADES del problema
   (lo que más pregunta el examen real) · desde dos puntos y desde una tabla · paralelas y
   perpendiculares · y una al revés (dada la ecuación, qué situación la describe).
   Todos los números se verificaron con un script antes de escribir las explicaciones. */
(function(){

  /* Tabla con el valor en x = 0 servido: el intercepto se LEE, no se calcula. */
  var TBL_PASO =
    '<table><thead><tr><th>x</th><th>0</th><th>1</th><th>2</th><th>3</th></tr></thead>' +
    '<tbody><tr><th>y</th><td>5</td><td>11</td><td>17</td><td>23</td></tr></tbody></table>';

  /* La misma idea pero con x saltando de 3 en 3 y SIN el x = 0: hay que volver hacia atrás. */
  var TBL_SALTO =
    '<table><thead><tr><th>x</th><th>2</th><th>5</th><th>8</th></tr></thead>' +
    '<tbody><tr><th>y</th><td>17</td><td>8</td><td>−1</td></tr></tbody></table>';

  window.SAT_SETS.push({
    id: 'math-lin2var1',
    title: 'Algebra — Lines in Two Variables',
    section: 'math',
    level: 'Media',
    description: 'Build the equation of a line from a context, a table or two points; switch between slope-intercept, standard and point-slope form; and say what the slope and the intercept mean in the units of the problem.',
    minutes: 16,
    questions: [
      {
        id:'L2V-01', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Writing a linear equation in two variables from a context',
        stem:'A kayak rental shop charges a one-time launch fee of $18 plus $9 for each hour a kayak is used. Which equation gives the total charge y, in dollars, for using a kayak for x hours?',
        choices:{A:'y = 18x + 9', B:'y = (9 + 18)x', C:'y = 9x + 18', D:'y = 9x − 18'},
        correct:'C',
        expCorrect:'The $9 is charged once per hour, so it multiplies x. The $18 is charged once for the whole rental, so it is added on its own: y = 9x + 18. Check with 4 hours: 9(4) + 18 = 36 + 18 = $54, which is four hours at $9 plus the single $18 fee ✓.',
        expWrong:{
          A:'y = 18x + 9 swaps the two numbers: it charges the $18 launch fee every hour and the $9 only once. At 4 hours it gives $81 instead of $54.',
          B:'y = (9 + 18)x adds the two numbers and treats the whole thing as an hourly rate. The launch fee happens once, not once per hour, so it can never multiply x. At 4 hours it gives $108.',
          D:'y = 9x − 18 subtracts the fee instead of adding it. A one-hour rental would then cost 9 − 18 = −$9, and a charge cannot be negative.'
        },
        tip:'For "fixed amount plus a rate per unit", the rate multiplies the variable and the fixed amount is the constant: y = (rate)x + (fixed). Ask which number repeats — the one that repeats is the one attached to x.',
        desmos:'Graph y = 9x + 18 and look at the point (0, 18): with zero hours you still pay the launch fee. The line rises 9 for every 1 step to the right.',
        desmosLatex:['y=9x+18','(0,18)']
      },
      {
        id:'L2V-02', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Interpreting the slope of a linear equation in two variables',
        stem:'A gardener measures a seedling every day after planting it. The height of the seedling is modeled by h = 1.5d + 12, where h is the height, in centimeters, and d is the number of days since it was planted. Which of the following is the best interpretation of the number 1.5 in this model?',
        choices:{
          A:'The height of the seedling, in centimeters, on the day it was planted.',
          B:'The height of the seedling, in centimeters, increases by 1.5 each day.',
          C:'The seedling grows 1 centimeter every 1.5 days.',
          D:'The height of the seedling, in centimeters, one day after it was planted.'
        },
        correct:'B',
        expCorrect:'The number multiplying d is the rate of change: every time d goes up by 1 day, h goes up by 1.5 centimeters. Check the model: d = 0 gives 12, d = 1 gives 13.5, d = 2 gives 15 — the same 1.5 cm every day ✓.',
        expWrong:{
          A:'That is the 12, not the 1.5. At d = 0 the model gives h = 1.5(0) + 12 = 12 cm, so 12 is the height on planting day.',
          C:'This is the reciprocal, 1/1.5 days per centimeter. The model gives centimeters per day; read the units of the two variables in the same order the fraction has them.',
          D:'One day after planting the height is 1.5(1) + 12 = 13.5 cm, not 1.5 cm. The 1.5 is how much the height CHANGES in a day, not what the height IS.'
        },
        tip:'In y = mx + b, m always means "how much y changes for each 1-unit increase in x". Say it out loud with both units attached ("centimeters per day") and the wrong choices fall away.',
        desmos:'Graph y = 1.5x + 12 and open the table for x = 0, 1, 2. The y values go 12, 13.5, 15: a jump of 1.5 for every extra day.',
        desmosLatex:['y=1.5x+12']
      },
      {
        id:'L2V-03', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Interpreting the y-intercept of a linear equation in two variables',
        stem:'A valve is opened on a full water tank and the tank drains at a constant rate. The number of liters of water left in the tank is modeled by w = 500 − 40t, where t is the number of hours since the valve was opened. Which of the following is the best interpretation of the number 500 in this model?',
        choices:{
          A:'The number of liters that drain out of the tank each hour.',
          B:'The number of hours it takes for the tank to drain completely.',
          C:'The number of liters in the tank at the moment the valve was opened.',
          D:'The number of liters left in the tank one hour after the valve was opened.'
        },
        correct:'C',
        expCorrect:'Put t = 0, the moment the valve was opened: w = 500 − 40(0) = 500 liters. The constant term of a linear model is always the value before anything has changed, and here it carries the units of w, liters.',
        expWrong:{
          A:'That is the 40: each hour, 40 liters drain out. The 500 does not repeat — it is already there before any draining happens.',
          B:'The tank is empty when 500 − 40t = 0, that is t = 12.5 hours. The 500 is measured in liters, not in hours.',
          D:'One hour in, w = 500 − 40(1) = 460 liters. The 500 is the amount at t = 0, not at t = 1.'
        },
        tip:'To interpret the constant term, substitute 0 for the variable and read what comes out. Whatever the model returns is what that number means, and it carries the units of the other variable.',
        desmos:'Graph y = 500 − 40x. It meets the vertical axis at (0, 500), the starting amount, and the horizontal axis at (12.5, 0), the moment the tank runs dry.',
        desmosLatex:['y=500-40x','(0,500)']
      },
      {
        id:'L2V-04', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Rewriting a linear equation in two variables in slope-intercept form',
        stem:'The equation 2x + y = 9 is graphed in the xy-plane. Which of the following is the same equation written in slope-intercept form?',
        choices:{A:'y = −2x + 9', B:'y = 2x + 9', C:'y = 9x − 2', D:'y = −2x − 9'},
        correct:'A',
        expCorrect:'Slope-intercept form is y = mx + b, so isolate y. Subtract 2x from both sides: 2x + y = 9 becomes y = 9 − 2x, which is written y = −2x + 9. Check with x = 1: the original gives 2 + y = 9, so y = 7; and −2(1) + 9 = 7 ✓.',
        expWrong:{
          B:'y = 2x + 9 moves the 2x across the equals sign without changing its sign. Subtracting 2x from both sides turns +2x into −2x.',
          C:'y = 9x − 2 swaps the jobs of the two numbers. Here 2 is the coefficient of x and 9 is the constant, not the other way around.',
          D:'y = −2x − 9 changes the sign of the 9 as well. Only the term that crosses the equals sign changes sign; the 9 was already alone on the right.'
        },
        tip:'From Ax + By = C to y = mx + b: move the x-term across (sign flips) and divide everything by the coefficient of y. That makes the slope −A/B and the y-intercept C/B.',
        desmos:'Graph 2x + y = 9 and y = −2x + 9 at the same time. If they are the same line, one covers the other exactly and you only see one line.',
        desmosLatex:['2x+y=9','y=-2x+9']
      },
      {
        id:'L2V-05', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear equation in two variables from a table',
        stem:'The table gives four pairs of values for a linear relationship between x and y.<br><br>' + TBL_PASO + '<br>Which equation represents this relationship?',
        choices:{A:'y = 5x + 6', B:'y = 6x + 5', C:'y = 11x + 5', D:'y = 6x'},
        correct:'B',
        expCorrect:'Each time x goes up by 1, y goes up by 6 (5 → 11 → 17 → 23), so the slope is 6. The table already includes x = 0, and the matching y is 5, so that is the y-intercept: y = 6x + 5. Check the last column: 6(3) + 5 = 23 ✓.',
        expWrong:{
          A:'y = 5x + 6 swaps the two numbers. 5 is the value of y at x = 0 (the intercept) and 6 is the jump per step (the slope). At x = 3 it gives 21, not 23.',
          C:'y = 11x + 5 uses the y value from the column x = 1 as the slope. The slope is the CHANGE in y per step, 11 − 5 = 6, not the y value itself. At x = 2 it gives 27, not 17.',
          D:'y = 6x has the right slope but no starting value: at x = 0 it gives 0, and the table says 5.'
        },
        tip:'With a table: first check that equal steps in x give equal steps in y, and divide to get the slope. If x = 0 is in the table, the matching y is b straight away; if it is not, step backwards.',
        desmos:'Type the points (0,5), (1,11), (2,17) and (3,23) into Desmos, then graph y = 6x + 5 on top. The line should pass through all four.',
        desmosLatex:['(0,5)','(1,11)','(2,17)','(3,23)','y=6x+5']
      },
      {
        id:'L2V-06', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Point-slope form of a line through two points',
        stem:'In the xy-plane, line ℓ passes through the points (−2, 9) and (4, −3). Which of the following is an equation of line ℓ written in point-slope form?',
        choices:{A:'y − 9 = −2(x − 2)', B:'y + 9 = −2(x − 2)', C:'y − 9 = 2(x + 2)', D:'y − 9 = −2(x + 2)'},
        correct:'D',
        expCorrect:'Slope first: m = (−3 − 9)/(4 − (−2)) = −12/6 = −2. Point-slope is y − y₁ = m(x − x₁). Using (x₁, y₁) = (−2, 9): y − 9 = −2(x − (−2)) = −2(x + 2). Check the other point: at x = 4, y = −2(4 + 2) + 9 = −12 + 9 = −3 ✓.',
        expWrong:{
          A:'y − 9 = −2(x − 2) uses x₁ = 2 instead of −2. The formula subtracts the coordinate, so x − (−2) becomes x + 2, not x − 2. This line misses (−2, 9) entirely.',
          B:'y + 9 = −2(x − 2) flips the sign of both coordinates. Both signs in y − y₁ = m(x − x₁) are minus, so y₁ = 9 stays as y − 9.',
          C:'y − 9 = 2(x + 2) has the slope backwards. Subtracting in opposite orders — (9 − (−3))/(4 − (−2)) — gives +2. This line does pass through (−2, 9), but at x = 4 it gives 21, not −3.'
        },
        tip:'Point-slope is y − y₁ = m(x − x₁): both operations are subtraction, so a negative coordinate turns into a plus sign. Either given point works, so substitute the OTHER one to check.',
        desmos:'Graph y − 9 = −2(x + 2) together with the points (−2, 9) and (4, −3). The right equation passes through both of them.',
        desmosLatex:['y-9=-2(x+2)','(-2,9)','(4,-3)']
      },
      {
        id:'L2V-07', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Parallel line written in standard form (two variables)',
        stem:'In the xy-plane, line k is parallel to the line with equation 3x + 4y = 20 and passes through the point (4, −1). Which equation represents line k?',
        choices:{A:'3x + 4y = 8', B:'3x + 4y = 20', C:'4x − 3y = 19', D:'3x − 4y = 16'},
        correct:'A',
        expCorrect:'Two equations written as Ax + By = C are parallel exactly when A and B match, because the slope is −A/B. So line k is 3x + 4y = C, and the point fixes C: 3(4) + 4(−1) = 12 − 4 = 8. Line k is 3x + 4y = 8. (In slope form both are y = −(3/4)x + something ✓.)',
        expWrong:{
          B:'3x + 4y = 20 is the given line itself. It is parallel, but it does not pass through (4, −1): 3(4) + 4(−1) = 8, not 20.',
          C:'4x − 3y = 19 does pass through (4, −1), but swapping the coefficients and changing a sign makes the slope 4/3 — the negative reciprocal. That is the PERPENDICULAR line.',
          D:'3x − 4y = 16 also passes through (4, −1), but flipping the sign of the y-term changes the slope from −3/4 to +3/4, so the lines are not parallel.'
        },
        tip:'In standard form, keep A and B exactly as they are and recompute only C from the point. Passing through the point is not enough — three wrong answers can do that. Parallel is about the slope.',
        desmos:'Graph 3x + 4y = 20, 3x + 4y = 8 and the point (4, −1). The two lines never meet, and only the second one touches the point.',
        desmosLatex:['3x+4y=20','3x+4y=8','(4,-1)']
      },
      {
        id:'L2V-08', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Perpendicular line written in slope-intercept form',
        stem:'In the xy-plane, line m is perpendicular to the line with equation y = (1/3)x + 2 and passes through the point (6, −2). Which equation represents line m?',
        choices:{A:'y = 3x − 20', B:'y = −(1/3)x', C:'y = (1/3)x − 4', D:'y = −3x + 16'},
        correct:'D',
        expCorrect:'Perpendicular means the negative reciprocal: flip 1/3 into 3 and change the sign, so m = −3. Now use the point (6, −2): −2 = −3(6) + b → −2 = −18 + b → b = 16. Line m is y = −3x + 16. (Check: −3 × 1/3 = −1 ✓, and −3(6) + 16 = −2 ✓.)',
        expWrong:{
          A:'y = 3x − 20 flips the fraction but keeps the sign positive. Then 3 × 1/3 = 1, not −1, so the lines are not perpendicular.',
          B:'y = −(1/3)x changes the sign but never flips the fraction. Then −1/3 × 1/3 = −1/9, not −1.',
          C:'y = (1/3)x − 4 keeps the same slope, 1/3, which makes it PARALLEL to the given line rather than perpendicular.'
        },
        tip:'Perpendicular slope = negative reciprocal: flip the fraction AND flip the sign, so the two slopes multiply to −1. All four choices here pass through the point, so only the slope decides.',
        desmos:'Graph y = x/3 + 2 and y = −3x + 16, then zoom so both axes use the same scale. The lines should cross at a right angle.',
        desmosLatex:['y=x/3+2','y=-3x+16','(6,-2)']
      },
      {
        id:'L2V-09', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'y-intercept of a linear equation in two variables, read from a table',
        stem:'The table gives three pairs of values for a linear relationship between x and y.<br><br>' + TBL_SALTO + '<br>What is the value of y when x = 0?',
        answer:'23',
        expCorrect:'The x values step by 3 and the y values drop by 9 each step (17 → 8 → −1), so the slope is −9/3 = −3. Going from x = 2 back to x = 0 is two steps to the LEFT, and each step left adds 3 to y: 17 + 3 + 3 = 23. Written as an equation, y = −3x + 23, and −3(2) + 23 = 17 ✓.',
        tip:'Moving left along a line undoes the slope: subtract the slope for every step back. And confirm the slope with two different pairs before trusting it — if the two do not match, the relationship is not linear.',
        desmos:'Plot (2, 17), (5, 8) and (8, −1), then graph y = −3x + 23 over them. The line should hit all three points and cross the vertical axis at 23.',
        desmosLatex:['(2,17)','(5,8)','(8,-1)','y=-3x+23']
      },
      {
        id:'L2V-10', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Matching a linear equation in two variables to a situation',
        stem:'The equation y = 250 − 15x is graphed in the xy-plane. Which of the following situations could this equation represent?',
        choices:{
          A:'A tank holds 15 liters of fuel and loses 250 liters each hour; y is the number of liters left after x hours.',
          B:'A tank holds 250 liters of fuel and loses 15 liters each hour; y is the number of liters left after x hours.',
          C:'A tank holds 250 liters of fuel and gains 15 liters each hour; y is the number of liters in it after x hours.',
          D:'A tank is filled at 250 liters per hour for 15 hours; y is the number of liters added after x hours.'
        },
        correct:'B',
        expCorrect:'Give each number its job. 250 is the value of y when x = 0, so it is the starting amount. The −15 says y goes DOWN by 15 for every increase of 1 in x, so it is a loss of 15 per hour. Check at x = 4: 250 − 15(4) = 190 liters left ✓.',
        expWrong:{
          A:'This swaps the roles and would be written y = 15 − 250x. The number attached to x is the per-hour rate, and in this equation that number is 15, not 250.',
          C:'Gaining 15 liters an hour would be y = 250 + 15x. The minus sign in front of the 15 means the quantity goes down, not up.',
          D:'Filling at 250 liters per hour would be y = 250x, with the 15 only saying when to stop. Neither number would then sit alone as a constant.'
        },
        tip:'Before reading the choices, label the equation: the constant is the value at x = 0, and the coefficient of x is the change per unit — its sign tells you whether the quantity grows or shrinks.',
        desmos:'Graph y = 250 − 15x. It starts at (0, 250) and drops 15 for every step right, reaching 0 at about x = 16.7 hours.',
        desmosLatex:['y=250-15x','(0,250)']
      },
      {
        id:'L2V-11', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Interpreting the slope of a linear equation in two variables given in standard form',
        stem:'A drama club sold adult tickets for $8 each and student tickets for $5 each, and collected $400 in all. The equation 8a + 5s = 400 represents this relationship, where a is the number of adult tickets sold and s is the number of student tickets sold. If the equation is graphed with a on the horizontal axis and s on the vertical axis, the slope of the graph is −8/5. Which of the following is the best interpretation of this slope?',
        choices:{
          A:'Each time 8 more adult tickets are sold, 5 fewer student tickets are sold.',
          B:'For each additional adult ticket sold, 8 fewer student tickets are sold.',
          C:'For every 5 more adult tickets sold, 8 fewer student tickets are sold.',
          D:'For every 5 more adult tickets sold, 8 more student tickets are sold.'
        },
        correct:'C',
        expCorrect:'Solve for the vertical variable to watch the slope work: 5s = 400 − 8a → s = 80 − (8/5)a. A slope of −8/5 means s falls by 8 every time a rises by 5. Check it: a = 0 gives s = 80, a = 5 gives s = 72, a = 10 gives s = 64 — eight fewer each time ✓. It also makes sense in money: 5 adult tickets bring in 5 × $8 = $40, and $40 is exactly 8 student tickets.',
        expWrong:{
          A:'This reads the slope as −5/8, with the numbers in the wrong places. In −8/5 the 8 is the change in the vertical variable (s) and the 5 is the step in the horizontal one (a).',
          B:'One extra adult ticket replaces 8/5 = 1.6 student tickets, not 8. The drop of 8 goes with a step of 5 in a, so getting a per-ticket figure means dividing.',
          D:'The slope is negative, so the two quantities move in opposite directions. The total is locked at $400, so more adult tickets forces FEWER student tickets.'
        },
        tip:'For Ax + By = C the slope is −A/B: the denominator is the step in the horizontal variable and the numerator is the change in the vertical one. Say it as "for every B more of x, A fewer of y".',
        desmos:'Graph 8x + 5y = 400 and open the table at x = 0, 5, 10. The y values read 80, 72, 64 — down 8 for every 5 to the right.',
        desmosLatex:['8x+5y=400']
      },
      {
        id:'L2V-12', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Finding a constant that makes two linear equations in two variables perpendicular (standard form)',
        stem:'In the xy-plane, line ℓ is represented by the equation 4x + ky = 24, where k is a nonzero constant. Line ℓ is perpendicular to the line represented by y = 2x + 9. What is the value of k?',
        answer:'8',
        expCorrect:'Put line ℓ in slope form even though a letter is in the way: ky = −4x + 24 → y = −(4/k)x + 24/k, so the slope of ℓ is −4/k. Perpendicular to a line of slope 2 means the slope must be the negative reciprocal, −1/2. Set them equal: −4/k = −1/2 → 4/k = 1/2 → k = 8. Check: 4x + 8y = 24 → y = −(1/2)x + 3, and (−1/2)(2) = −1 ✓.',
        tip:'When a coefficient is a letter, solve for y anyway and read the slope as a fraction in that letter — then the condition gives you one equation to solve. The constant term (24 here) never affects the slope, so it cannot help you find k.',
        desmos:'Graph 4x + 8y = 24 and y = 2x + 9 with both axes at the same scale: they meet at a right angle. Change the 8 to a 2 and watch the right angle disappear.',
        desmosLatex:['4x+8y=24','y=2x+9']
      }
    ]
  });
})();
