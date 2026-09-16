/* SAT Studio question set — Math: Algebra — tier de ENTRADA (ALD-01 a ALD-34).

   Las cinco destrezas oficiales de Algebra, un paso o dos cada una, planteo
   limpio y contextos claros. Es el piso del banco: el estudiante que arranca en
   400 tiene que poder entrar por acá.

   Reparto pedido y comprobado: 27 MC + 7 SPR · 14 Facil · 16 Media · 4 Dificil ·
   ninguna extreme. Destrezas 7/7/7/7/6.
   Clave: A 7 · B 7 · C 7 · D 6.

   OJO con skillOf(): lee `skill` + los primeros 160 caracteres del `stem` y
   prueba las destrezas de Algebra en este orden — al-sys, al-ineq, al-2var,
   al-func, al-1var. Gana la PRIMERA que calce, no la mas especifica. Por eso:
     · las de SISTEMAS dicen "system" (unica familia que puede decirlo),
     · las de DESIGUALDADES dicen "inequality" / "budget" / "constraint" /
       "at least" / "at most" / "greatest integer",
     · las de DOS VARIABLES dicen "solve for" / "two variables" / "standard form"
       / "literal equation",
     · las de FUNCIONES dicen "slope" / "linear function" / "linear model" /
       "rate of change" / "parallel" / "from a table" / "per hour|minute",
     · las de UNA VARIABLE dicen "linear equation" / "value of x" y evitan todo
       lo de arriba — en especial "solve for" (se la lleva al-2var), "slope" y
       "slope-intercept form" (el "intercept form" de adentro se lo lleva
       al-2var), y "no solution" / "infinitely many" (se los lleva al-sys).
   Para "vale para todo x" se usa la version hablada ("true for every value of
   x"), que dice lo mismo sin mandar la pregunta a la destreza de sistemas.

   Los `<` van siempre con espacio despues (`x < 5`): pegado a una letra el
   navegador lo lee como etiqueta y se come el texto. */
(function(){

  /* ---- Tabla de ALD-10: f(x) = 5x − 4, con f(0) a la vista a proposito ---- */
  var TBL_F =
    '<table border="1" cellpadding="6" style="border-collapse:collapse">' +
    '<tr><th>x</th><th>0</th><th>1</th><th>2</th><th>3</th></tr>' +
    '<tr><th>f(x)</th><td>−4</td><td>1</td><td>6</td><td>11</td></tr></table>';

  window.SAT_SETS.push({
    id: 'math-alg-d',
    title: 'Algebra — First Steps',
    section: 'math',
    level: 'Fácil',
    description: 'The entry door to the Algebra section: one-variable equations, linear functions, lines in two variables, systems and inequalities, each in one or two clean steps. Start here if the Algebra questions still feel fast and confusing.',
    minutes: 40,
    questions: [

      /* ═══════════ Linear equations in one variable (ALD-01 a ALD-07) ═══════════ */

      {
        id:'ALD-01', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear equation in one variable',
        stem:'If 4x − 9 = 27, what is the value of x?',
        choices:{A:'4.5', B:'6.75', C:'9', D:'36'},
        correct:'C',
        expCorrect:'Add 9 to both sides: 4x = 36. Divide both sides by 4: x = 9. (Check: 4(9) − 9 = 36 − 9 = 27 ✓.)',
        expWrong:{
          A:'4.5 is (27 − 9)/4. The 9 is being SUBTRACTED on the left, so it comes off by adding 9 to both sides, not by subtracting it.',
          B:'6.75 is 27/4, which divides before the −9 has been dealt with. The 4 only multiplies the x, so the 9 has to move first.',
          D:'36 is the value of 4x, the step right before the answer. One division by 4 is still missing.'
        },
        tip:'Undo the operations in reverse order: first whatever is added or subtracted, then the number multiplying the variable. Substituting your answer back into the original equation catches almost every slip.',
        desmos:'Graph y = 4x − 9 and y = 27. The x-coordinate of the crossing point is the answer.',
        desmosLatex:['y=4x-9','y=27']
      },
      {
        id:'ALD-02', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear equation with parentheses and the variable on both sides',
        stem:'If 8(n − 5) = 3n + 15, what is the value of n?',
        choices:{A:'−5', B:'4', C:'11', D:'55'},
        correct:'C',
        expCorrect:'Distribute the 8: 8n − 40 = 3n + 15. Subtract 3n from both sides: 5n − 40 = 15. Add 40: 5n = 55. Divide by 5: n = 11. (Check: 8(11 − 5) = 8(6) = 48 and 3(11) + 15 = 33 + 15 = 48 ✓.)',
        expWrong:{
          A:'−5 comes from moving the −40 by subtracting: 5n = 15 − 40 = −25. A term that is subtracted comes back by ADDING it to both sides, so the right side is 15 + 40.',
          B:'4 comes from writing 8(n − 5) as 8n − 5, multiplying only the first term inside. The 8 multiplies everything in the parentheses, so the 5 becomes 40.',
          D:'55 is the value of 5n, one division short of the answer.'
        },
        tip:'A number in front of parentheses multiplies EVERY term inside. After distributing, gather the variable on the side where its coefficient stays positive: fewer sign errors that way.',
        desmos:'Graph y = 8(x − 5) and y = 3x + 15 and read the x-coordinate where the two lines meet.',
        desmosLatex:['y=8(x-5)','y=3x+15']
      },
      {
        id:'ALD-03', type:'spr', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear equation with a fraction',
        stem:'If h/6 + 4 = 15, what is the value of h?',
        answer:'66',
        expCorrect:'Subtract 4 from both sides: h/6 = 11. Multiply both sides by 6: h = 66. (Check: 66/6 + 4 = 11 + 4 = 15 ✓.) Answer: 66.',
        tip:'Clear the fraction by multiplying BOTH sides by the denominator, and do it after the loose number has been moved. A shortcut that always works: multiply every term by 6 at the start, which turns h/6 + 4 = 15 into h + 24 = 90.',
        desmos:'Graph y = x/6 + 4 and y = 15 and read the x-coordinate of the crossing point.',
        desmosLatex:['y=x/6+4','y=15']
      },
      {
        id:'ALD-04', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equation from a word problem',
        stem:'A drama club sold student tickets for $6 each and also received a flat $150 gift from a sponsor. Altogether the club took in $684. How many student tickets did the club sell?',
        choices:{A:'89', B:'114', C:'139', D:'534'},
        correct:'A',
        expCorrect:'Let t be the number of tickets. The tickets bring in 6t dollars and the gift adds 150, so 6t + 150 = 684. Subtract 150: 6t = 534. Divide by 6: t = 89. (Check: 89($6) = $534, and $534 + $150 = $684 ✓.)',
        expWrong:{
          B:'114 is 684/6, which divides the whole total by the ticket price. But $150 of that total did not come from tickets, so it has to come out first.',
          C:'139 is (684 + 150)/6. The gift is already part of the $684 collected, so adding it again counts it twice.',
          D:'534 is the number of DOLLARS that came from tickets, not the number of tickets. One division by the $6 price is missing.'
        },
        tip:'Name the unknown, write what each piece contributes in the same units, and then check what the question actually asks for — dollars and counts are the two answers that get swapped most often.',
        desmos:'Graph y = 6x + 150 and y = 684; the x-coordinate where they meet is the number of tickets.',
        desmosLatex:['y=6x+150','y=684']
      },
      {
        id:'ALD-05', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equation with a negative in front of parentheses',
        stem:'If 5 − 2(x + 3) = 4x − 13, what is the value of x?',
        choices:{A:'2', B:'4', C:'12', D:'22'},
        correct:'A',
        expCorrect:'Distribute the −2 to both terms: 5 − 2x − 6 = −1 − 2x. The equation is now −1 − 2x = 4x − 13. Add 2x to both sides: −1 = 6x − 13. Add 13: 12 = 6x. Divide by 6: x = 2. (Check: 5 − 2(2 + 3) = 5 − 10 = −5 and 4(2) − 13 = −5 ✓.)',
        expWrong:{
          B:'4 comes from writing −2(x + 3) as −2x + 6, keeping the plus sign on the 3. The minus belongs to both terms inside, so it is −2x − 6.',
          C:'12 is the value of 6x, the step before dividing by 6.',
          D:'22 comes from subtracting before multiplying: (5 − 2)(x + 3) = 3x + 9. The 2 is attached to the parentheses, so it multiplies first and only then is subtracted from the 5.'
        },
        tip:'A minus sign in front of parentheses is a −1 (or here a −2) that multiplies EVERY term inside. Write the distributed line out before combining anything; most errors in this family happen in that one step.',
        desmos:'Graph y = 5 − 2(x + 3) and y = 4x − 13 and read where they cross.',
        desmosLatex:['y=5-2(x+3)','y=4x-13']
      },
      {
        id:'ALD-06', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Linear equation built from a perimeter description',
        stem:'The perimeter of a rectangular vegetable bed is 76 feet. The length of the bed is 5 feet more than twice its width. What is the width of the bed, in feet?',
        answer:'11',
        expCorrect:'Call the width w. The length is 2w + 5. Perimeter adds two widths and two lengths: 2w + 2(2w + 5) = 76, so 2w + 4w + 10 = 76, then 6w = 66 and w = 11. (Check: the length is 2(11) + 5 = 27, and 2(11) + 2(27) = 22 + 54 = 76 ✓.) Answer: 11.',
        tip:'Write every other quantity using the single unknown BEFORE you build the equation. "Five more than twice the width" is 2w + 5, never 2(w + 5): the doubling happens first.',
        desmos:'Graph y = 2x + 2(2x + 5) and y = 76; the x-coordinate where they meet is the width.',
        desmosLatex:['y=2x+2(2x+5)','y=76']
      },
      {
        id:'ALD-07', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear equation with a parameter that is true for every value of x',
        stem:'In the equation 3(2x − 5) + 7 = ax − 8, a is a constant. If the equation is true for every value of x, what is the value of a?',
        choices:{A:'−8', B:'2', C:'3', D:'6'},
        correct:'D',
        expCorrect:'Simplify the left side: 3(2x − 5) + 7 = 6x − 15 + 7 = 6x − 8. For the two sides to agree for EVERY x they have to be the same expression, so the x-coefficients must match: a = 6. (The constants already match: −8 on both sides. Check with x = 4: 3(8 − 5) + 7 = 16 and 6(4) − 8 = 16 ✓.)',
        expWrong:{
          A:'−8 is the constant term on each side, not the coefficient of x. a is the number multiplying x.',
          B:'2 is the coefficient sitting next to x inside the parentheses, before the 3 has been distributed. Distributing turns 3(2x) into 6x.',
          C:'3 is the factor in front of the parentheses. It still has to be multiplied by the 2 next to x.'
        },
        tip:'When an equation must hold for EVERY value of the variable, the two sides are the same expression in disguise: simplify each side fully, then match the variable terms and the constants separately.',
        desmos:'Graph y = 3(2x − 5) + 7 and y = 6x − 8: the two graphs land exactly on top of each other.',
        desmosLatex:['y=3(2x-5)+7','y=6x-8']
      },

      /* ═══════════ Linear functions (ALD-08 a ALD-14) ═══════════ */

      {
        id:'ALD-08', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Slope of a line through two points',
        stem:'A line in the xy-plane passes through the points (2, 7) and (6, 19). What is the slope of the line?',
        choices:{A:'−3', B:'1/3', C:'3', D:'6.5'},
        correct:'C',
        expCorrect:'Slope is the change in y over the change in x: (19 − 7)/(6 − 2) = 12/4 = 3. (Check: from x = 2 to x = 6 the line moves 4 to the right and 12 up, which is 3 up for each 1 across ✓.)',
        expWrong:{
          A:'−3 comes from subtracting in opposite orders, (7 − 19)/(6 − 2). Both differences have to start from the same point: either (19 − 7)/(6 − 2) or (7 − 19)/(2 − 6).',
          B:'1/3 is the ratio upside down, (6 − 2)/(19 − 7). Slope is rise over run, so the y-difference goes on top.',
          D:'6.5 adds the y-values instead of subtracting them, (19 + 7)/(6 − 2). Slope measures a CHANGE, so both parts are differences.'
        },
        tip:'Write the slope formula with the points labeled before you plug in, and keep the same point first in both the top and the bottom. Sign errors here come almost entirely from mixing that order.',
        desmos:'Plot (2, 7) and (6, 19), then graph y = 3x + 1 and see it pass through both.',
        desmosLatex:['(2,7)','(6,19)','y=3x+1']
      },
      {
        id:'ALD-09', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Meaning of the slope in a linear model',
        stem:'A bakery models its daily electricity cost with C(t) = 0.18t + 22, where t is the number of minutes its oven runs and C(t) is the cost in dollars. What does 0.18 represent?',
        choices:{
          A:'The cost in dollars when the oven does not run at all',
          B:'The cost in dollars added by each extra minute of oven time',
          C:'The number of minutes the oven runs on a typical day',
          D:'The total cost in dollars of running the oven for one minute'
        },
        correct:'B',
        expCorrect:'In C(t) = 0.18t + 22 the number multiplying t is the rate of change: every extra minute adds $0.18. (Check: C(10) = 0.18(10) + 22 = $23.80 and C(0) = $22, so ten minutes added $1.80, which is $0.18 each ✓.)',
        expWrong:{
          A:'That is 22, the value of C(0) — the fixed part of the bill that is there even with the oven off.',
          C:'0.18 is measured in dollars for each minute, not in minutes. The number of minutes is t, the input of the function.',
          D:'At one minute the total is 0.18 + 22 = $22.18, because the $22 is still charged. 0.18 is only the amount that minute ADDS.'
        },
        tip:'In y = mx + b, m is how much y changes when x goes up by 1, and b is the value of y when x is 0. Attach the problem units to each ("dollars per minute", "dollars") before choosing.',
        desmos:'Graph y = 0.18x + 22 and compare the height at x = 0 with the height at x = 1: the gap is 0.18.',
        desmosLatex:['y=0.18x+22','x=0','x=1']
      },
      {
        id:'ALD-10', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Value of a linear function read from a table',
        stem:'The table gives four values of the linear function f.<br>' + TBL_F + '<br>What is the value of f(5)?',
        choices:{A:'16', B:'21', C:'25', D:'26'},
        correct:'B',
        expCorrect:'Each time x goes up by 1, f(x) goes up by 5 (−4 to 1 to 6 to 11), so the slope is 5, and the table already shows f(0) = −4. That makes f(x) = 5x − 4, so f(5) = 25 − 4 = 21. (Check by continuing the table: f(4) = 16 and f(5) = 21 ✓.)',
        expWrong:{
          A:'16 is f(4), one step short of x = 5.',
          C:'25 is 5(5), the slope part alone. The starting value −4 still has to be added.',
          D:'26 is 5(5) + 1, using f(1) = 1 as the starting value. The constant in y = mx + b is the value at x = 0, which the table gives as −4.'
        },
        tip:'From a table with equal steps in x, the slope is the repeated jump in f(x) divided by the repeated jump in x. The constant is the value at x = 0 — if the table does not show it, step backwards to find it.',
        desmos:'Graph y = 5x − 4 and check it passes through (0, −4), (1, 1), (2, 6) and (3, 11), then read y at x = 5.',
        desmosLatex:['y=5x-4','(5,21)']
      },
      {
        id:'ALD-11', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Linear model from a starting value and a rate of change',
        stem:'A rooftop tank holds 240 gallons of rainwater when full, and it drains at a constant rate of 15 gallons every hour. After how many hours does the tank hold 90 gallons?',
        answer:'10',
        expCorrect:'The volume after h hours is 240 − 15h. Set it equal to 90: 240 − 15h = 90. Subtract 240: −15h = −150. Divide by −15: h = 10. (Or: the tank has to lose 240 − 90 = 150 gallons, and at 15 gallons an hour that takes 150/15 = 10 hours. Check: 240 − 15(10) = 90 ✓.) Answer: 10.',
        tip:'A constant decrease is y = start − (rate)(time). Instead of solving blindly, ask how much has to disappear and divide that by the rate — same answer, fewer sign errors.',
        desmos:'Graph y = 240 − 15x and y = 90 and read the x-coordinate where they meet.',
        desmosLatex:['y=240-15x','y=90']
      },
      {
        id:'ALD-12', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Parallel lines have equal slopes',
        stem:'Line k is defined by y = −4x + 9. Line m is parallel to line k and passes through the point (2, 3). What is the y-coordinate of the point on line m whose x-coordinate is 5?',
        choices:{A:'−12', B:'−11', C:'−9', D:'15'},
        correct:'C',
        expCorrect:'Parallel means the same slope, so line m also has slope −4. From (2, 3) to x = 5 is 3 units to the right, and each unit drops the line 4: 3 − 4(3) = 3 − 12 = −9. (Or build the rule: 3 = −4(2) + b gives b = 11, so y = −4x + 11 and y = −4(5) + 11 = −9 ✓.)',
        expWrong:{
          A:'−12 is only the CHANGE in y over those 3 units. The starting height of 3 still has to be added.',
          B:'−11 is −4(5) + 9, which reuses the constant that belongs to line k. Line m is a different line: it has the same slope but its own starting value, 11.',
          D:'15 uses a slope of +4 instead of −4. Parallel lines copy the slope exactly, minus sign included.'
        },
        tip:'Parallel copies the slope and nothing else; the point you are given is what fixes the new line. Fastest route: start at the given point and move the slope the required number of steps.',
        desmos:'Graph y = −4x + 9 and y = −4x + 11: they never meet, and the second passes through (2, 3) and (5, −9).',
        desmosLatex:['y=-4x+9','y=-4x+11','(2,3)','(5,-9)']
      },
      {
        id:'ALD-13', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Writing a linear function from two data points',
        stem:'A repair shop charges a flat inspection fee plus a fixed amount for each 10 minutes of labor. A 20-minute job costs $46 and a 50-minute job costs $82. What is the flat inspection fee, in dollars?',
        choices:{A:'$12', B:'$22', C:'$24', D:'$36'},
        correct:'B',
        expCorrect:'A 20-minute job is 2 blocks of 10 minutes and a 50-minute job is 5 blocks, so 3 extra blocks cost 82 − 46 = $36, which is $12 per block. The $46 job includes 2 blocks, or $24 of labor, so the fee is 46 − 24 = $22. (Check on the other job: 22 + 5($12) = 22 + 60 = $82 ✓.)',
        expWrong:{
          A:'$12 is the charge for one 10-minute block, the rate rather than the fixed fee.',
          C:'$24 is the labor part of the $46 job, 2 blocks at $12. The fee is what is LEFT after the labor is removed.',
          D:'$36 is the difference between the two totals. That gap is pure labor for 3 extra blocks, so it says nothing directly about the fee.'
        },
        tip:'Two totals give you the rate first: divide the difference in cost by the difference in quantity. Then subtract the labor from either total to uncover the fixed part.',
        desmos:'Graph y = 12x + 22 with x in 10-minute blocks and confirm it passes through (2, 46) and (5, 82); the y-intercept is the fee.',
        desmosLatex:['y=12x+22','(2,46)','(5,82)']
      },
      {
        id:'ALD-14', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear model with a unit trap: rate of change per minute and per hour',
        stem:'A hot-air balloon descends at a constant rate. Its height above the ground is 2,150 feet 6 minutes after the descent begins and 1,940 feet 13 minutes after it begins. At this rate, how many feet does the balloon descend in one hour?',
        choices:{A:'30', B:'210', C:'1,800', D:'12,600'},
        correct:'C',
        expCorrect:'Between the two readings the balloon drops 2,150 − 1,940 = 210 feet in 13 − 6 = 7 minutes, so the rate is 210/7 = 30 feet each minute. An hour is 60 minutes: 30(60) = 1,800 feet. (Check: 1,800/60 = 30 feet a minute, and 7 minutes at that rate is 210 feet ✓.)',
        expWrong:{
          A:'30 is the rate per MINUTE. The question asks for an hour, so it still has to be multiplied by 60.',
          B:'210 is the drop between the two given readings, which covers 7 minutes and not 60.',
          D:'12,600 is 210(60), scaling the 7-minute drop as if it were a one-minute drop. Divide by the 7 minutes first to get a per-minute rate, then multiply by 60.'
        },
        tip:'Convert to a per-unit rate BEFORE changing units: (total change)/(elapsed time), then scale. And read the last line of the question again — the units it asks for are rarely the units you just computed.',
        desmos:'Graph y = 2150 − 30(x − 6) and check it passes through (6, 2150) and (13, 1940); the drop from x = 6 to x = 66 is 1,800.',
        desmosLatex:['y=2150-30(x-6)','(6,2150)','(13,1940)']
      },

      /* ═══════════ Linear equations in two variables (ALD-15 a ALD-21) ═══════════ */

      {
        id:'ALD-15', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Rearranging a formula to solve for one of its letters',
        stem:'The formula P = 2L + 2W gives the perimeter P of a rectangle whose length is L and whose width is W. Which equation gives W?',
        choices:{A:'W = P − 2L', B:'W = P/2 − 2L', C:'W = (P − L)/2', D:'W = (P − 2L)/2'},
        correct:'D',
        expCorrect:'Treat W like an x. Subtract 2L from both sides: P − 2L = 2W. Divide both sides by 2: W = (P − 2L)/2. (Check with P = 30 and L = 9: W = (30 − 18)/2 = 6, and 2(9) + 2(6) = 30 ✓.)',
        expWrong:{
          A:'W = P − 2L is the value of 2W, one division by 2 short. With P = 30 and L = 9 it gives 12, which is two widths, not one.',
          B:'W = P/2 − 2L divides only the first term by 2. Every term on that side has to be divided, so the 2L becomes L.',
          C:'W = (P − L)/2 removes only ONE length. A rectangle has two sides of length L, so 2L is what comes off the perimeter.'
        },
        tip:'Isolating a letter inside a formula uses the same two moves as any equation: first undo what is added or subtracted, then undo what multiplies. When you divide, divide EVERY term on that side.',
        desmos:'Set P = 30 and graph y = (30 − 2x)/2 against the candidates to see which one returns 6 at x = 9.',
        desmosLatex:['y=(30-2x)/2','y=30-2x','y=30/2-2x','(9,6)']
      },
      {
        id:'ALD-16', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Intercepts of a line written in standard form',
        stem:'The graph of 5x + 4y = 60 is a line in the xy-plane. What is the y-coordinate of the point where this line crosses the y-axis?',
        choices:{A:'4', B:'12', C:'15', D:'60'},
        correct:'C',
        expCorrect:'Every point on the y-axis has x = 0. Substitute: 5(0) + 4y = 60, so 4y = 60 and y = 15. (Check: 5(0) + 4(15) = 60 ✓.)',
        expWrong:{
          A:'4 is the coefficient of y in the equation, not a value of y.',
          B:'12 is 60/5, the x-coordinate where the line crosses the x-AXIS. That is the other intercept.',
          D:'60 is the constant on the right, the value of 4y before dividing by 4.'
        },
        tip:'On the y-axis x = 0; on the x-axis y = 0. Substituting a zero is faster and safer than rearranging the whole equation, and it works in any form the line is written in.',
        desmos:'Graph 5x + 4y = 60 and look at where it meets the vertical axis.',
        desmosLatex:['5x+4y=60','(0,15)','(12,0)']
      },
      {
        id:'ALD-17', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Writing a linear equation in two variables from a description',
        stem:'A caterer buys trays of empanadas at $18 each and trays of plantain chips at $12 each, spending exactly $216 in all. If e is the number of empanada trays and c is the number of chip trays, which equation represents this purchase?',
        choices:{A:'18e + 12c = 216', B:'18e − 12c = 216', C:'18c + 12e = 216', D:'30(e + c) = 216'},
        correct:'A',
        expCorrect:'Each empanada tray costs $18, so e of them cost 18e; each chip tray costs $12, so c of them cost 12c. The two purchases add up to the total: 18e + 12c = 216. (Check with e = 8 and c = 6: 144 + 72 = 216 ✓.)',
        expWrong:{
          B:'Subtracting would mean the chip trays give money back. Both purchases add to the bill, so the two terms are added.',
          C:'The prices are attached to the wrong counts. The $18 belongs to the empanada trays, so it multiplies e, not c. With e = 8 and c = 6 this gives 204, not 216.',
          D:'30(e + c) charges $30 for every tray, as if each tray were one of each kind. The two prices are different and multiply two different counts.'
        },
        tip:'Match each price to the count it multiplies, then add the pieces that make up the stated total. Testing one easy pair of numbers takes ten seconds and rules out swapped coefficients immediately.',
        desmos:'Graph 18x + 12y = 216 and check that (8, 6) sits on the line.',
        desmosLatex:['18x+12y=216','(8,6)']
      },
      {
        id:'ALD-18', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Linear equation in two variables: finding a missing coordinate',
        stem:'The point (a, −3) lies on the line 7x − 2y = 34 in the xy-plane. What is the value of a?',
        answer:'4',
        expCorrect:'A point on a line makes the equation true, so substitute x = a and y = −3: 7a − 2(−3) = 34. Subtracting a negative adds: 7a + 6 = 34, so 7a = 28 and a = 4. (Check: 7(4) − 2(−3) = 28 + 6 = 34 ✓.) Answer: 4.',
        tip:'"Lies on the line" means substitute. The step that costs points is the sign: −2 times a negative y gives a POSITIVE term, which then moves across by subtracting.',
        desmos:'Graph 7x − 2y = 34 and the horizontal line y = −3; read the x-coordinate of the crossing point.',
        desmosLatex:['7x-2y=34','y=-3']
      },
      {
        id:'ALD-19', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Rewriting a line to solve for y',
        stem:'The equation 6x − 3y = 21 defines a line in the xy-plane. Which equation gives y?',
        choices:{A:'y = 6x − 21', B:'y = −2x + 7', C:'y = 2x − 7', D:'y = 2x + 7'},
        correct:'C',
        expCorrect:'Subtract 6x from both sides: −3y = −6x + 21. Divide EVERY term by −3: y = 2x − 7. (Check with x = 5: 6(5) − 3y = 21 gives 30 − 3y = 21, so y = 3, and 2(5) − 7 = 3 ✓.)',
        expWrong:{
          A:'y = 6x − 21 subtracts the 3 instead of dividing by it. The 3 multiplies y, so it comes off by division.',
          B:'y = −2x + 7 divides by 3 instead of by −3, so every sign comes out backwards. At x = 5 it gives −3, not 3.',
          D:'y = 2x + 7 divides the 21 by +3 while dividing the −6x by −3. One divisor has to be used on the whole side.'
        },
        tip:'When the y-term ends up negative, divide by the negative number in one move and apply it to every term. Test your result with one easy x-value against the original equation.',
        desmos:'Graph 6x − 3y = 21 and y = 2x − 7: the two graphs land on top of each other.',
        desmosLatex:['6x-3y=21','y=2x-7']
      },
      {
        id:'ALD-20', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Rewriting a linear equation in standard form',
        stem:'In the xy-plane, line t crosses the y-axis at (0, −5), and y increases by 3 whenever x increases by 1. Which equation represents line t in standard form?',
        choices:{A:'3x + y = −5', B:'x − 3y = 15', C:'3x − y = −5', D:'3x − y = 5'},
        correct:'D',
        expCorrect:'A rise of 3 for each 1 across is a slope of 3, and the line starts at −5, so y = 3x − 5. Move the y across: subtract y and add 5 to both sides to get 3x − y = 5. (Check with x = 4: y = 3(4) − 5 = 7, and 3(4) − 7 = 5 ✓.)',
        expWrong:{
          A:'3x + y = −5 gives y = −3x − 5, a line that FALLS 3 for each 1. Only one term changed sign in the rewrite; when a term crosses, its sign flips on its own.',
          B:'x − 3y = 15 puts the 3 with the y instead of the x. It gives y = x/3 − 5, a slope of 1/3. The slope multiplies x.',
          C:'3x − y = −5 keeps the −5 on the right. Moving the −5 from y = 3x − 5 to the other side turns it into +5.'
        },
        tip:'Build the slope-and-starting-value equation first, then rearrange it — going straight to standard form is where signs get lost. Verify with one x-value in BOTH versions before choosing.',
        desmos:'Graph y = 3x − 5 and 3x − y = 5 and confirm they are the same line through (0, −5) and (4, 7).',
        desmosLatex:['y=3x-5','3x-y=5','(0,-5)','(4,7)']
      },
      {
        id:'ALD-21', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Literal equation where the letter appears in two terms',
        stem:'The formula A = P + Prt gives the amount A in a simple-interest account, where P is the principal in dollars, r is the annual interest rate and t is the time in years. Which equation gives P?',
        choices:{A:'P = A − rt', B:'P = A/(1 + rt)', C:'P = A/(rt)', D:'P = (A − 1)/rt'},
        correct:'B',
        expCorrect:'P appears in both terms on the right, so factor it out: A = P(1 + rt). Now it is a single multiplication, so divide both sides by (1 + rt): P = A/(1 + rt). (Check with P = 400, r = 0.05 and t = 3: A = 400 + 400(0.15) = 460, and 460/(1 + 0.15) = 460/1.15 = 400 ✓.)',
        expWrong:{
          A:'P = A − rt moves rt as if it were added on its own. It is multiplied by P, and a factor cannot be taken across by subtracting. With the numbers above it gives 459.85, not 400.',
          C:'P = A/(rt) divides by rt only, which throws away the lone P. Factoring keeps both terms: P + Prt = P(1 + rt).',
          D:'P = (A − 1)/rt pulls the 1 out of the parentheses as a subtraction from A. The 1 sits inside a product, so it cannot be peeled off that way.'
        },
        tip:'When the letter you want shows up in more than one term, collect those terms and factor it out; only then can you divide it free. A factor never crosses the equals sign by addition or subtraction.',
        desmos:'With r = 0.05 and t = 3, graph y = x + 0.15x and y = 460 and check the crossing point is x = 400.',
        desmosLatex:['y=x+0.15x','y=460']
      },

      /* ═══════════ Systems of two linear equations (ALD-22 a ALD-28) ═══════════ */

      {
        id:'ALD-22', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'System of two linear equations solved by substitution',
        stem:'In the system y = 3x − 4 and y = x + 10, what is the value of x?',
        choices:{A:'3', B:'7', C:'14', D:'17'},
        correct:'B',
        expCorrect:'Both expressions equal y, so they equal each other: 3x − 4 = x + 10. Subtract x: 2x − 4 = 10. Add 4: 2x = 14. Divide by 2: x = 7. (Check: 3(7) − 4 = 17 and 7 + 10 = 17, so both give the same y ✓.)',
        expWrong:{
          A:'3 comes from 2x = 10 − 4, moving the −4 by subtracting. It is subtracted on the left, so it comes off by adding 4 to both sides.',
          C:'14 is the value of 2x, one division short.',
          D:'17 is the value of y at the solution. The question asks for x.'
        },
        tip:'When both equations are already solved for the same variable, set the two right sides equal — no substitution work needed. Then look back at which variable the question wants.',
        desmos:'Graph y = 3x − 4 and y = x + 10; the point where they meet is (7, 17).',
        desmosLatex:['y=3x-4','y=x+10','(7,17)']
      },
      {
        id:'ALD-23', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'System of two linear equations solved by elimination',
        stem:'The system 2x + 5y = 31 and 2x − 3y = 7 has exactly one solution. What is the value of y?',
        choices:{A:'3', B:'4.8', C:'8', D:'24'},
        correct:'A',
        expCorrect:'Both equations have the same 2x, so subtracting the second from the first removes x: (5y) − (−3y) = 31 − 7, that is 8y = 24, so y = 3. (Check: with y = 3, 2x + 15 = 31 gives x = 8, and 2(8) − 3(3) = 16 − 9 = 7 ✓.)',
        expWrong:{
          B:'4.8 is 24/5, dividing by the 5 that appears in the first equation. The subtraction produced 8y, so the divisor is 8.',
          C:'8 is the value of x. The question asks for y.',
          D:'24 is the value of 8y, the step before dividing.'
        },
        tip:'When a variable has the SAME coefficient in both equations, subtract to remove it; when the coefficients are opposites, add. Then divide by the coefficient the operation actually produced, not by one from the original lines.',
        desmos:'Graph 2x + 5y = 31 and 2x − 3y = 7 and read the intersection point (8, 3).',
        desmosLatex:['2x+5y=31','2x-3y=7','(8,3)']
      },
      {
        id:'ALD-24', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'System of two linear equations from a word problem',
        stem:'A juice stand sells fruit cups and smoothies. On Saturday it sold 46 items in all and took in $338. Each fruit cup sells for $5 and each smoothie sells for $9. How many smoothies did the stand sell on Saturday?',
        answer:'27',
        expCorrect:'Let c be the fruit cups and s the smoothies. Counting items: c + s = 46. Counting money: 5c + 9s = 338. Substitute c = 46 − s into the money equation: 5(46 − s) + 9s = 338, so 230 + 4s = 338, then 4s = 108 and s = 27. (Check: c = 19, and 19($5) + 27($9) = 95 + 243 = $338 ✓.) Answer: 27.',
        tip:'Two unknowns need two equations, and in these problems one counts things while the other counts money. Write both before solving, and substitute the count equation into the money equation — it is always the easier direction.',
        desmos:'Graph x + y = 46 and 5x + 9y = 338; the intersection is (19, 27), so 27 smoothies.',
        desmosLatex:['x+y=46','5x+9y=338','(19,27)']
      },
      {
        id:'ALD-25', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'System of two linear equations: value of a combination of the variables',
        stem:'For the system 4x + y = 23 and x − y = 2, what is the value of x + y?',
        choices:{A:'2', B:'3', C:'5', D:'8'},
        correct:'D',
        expCorrect:'The y-terms are +y and −y, so adding the equations removes y: 5x = 25 and x = 5. Substituting into x − y = 2: 5 − y = 2, so y = 3. Then x + y = 5 + 3 = 8. (Check: 4(5) + 3 = 23 ✓ and 5 − 3 = 2 ✓.)',
        expWrong:{
          A:'2 is the value of x − y, which the second equation hands over directly. The question asks for the SUM.',
          B:'3 is the value of y alone.',
          C:'5 is the value of x alone.'
        },
        tip:'When a question asks for a combination such as x + y or 2x − y, solve the system first and then build what was asked. The most common lost point here is stopping at one variable.',
        desmos:'Graph 4x + y = 23 and x − y = 2; they meet at (5, 3), so x + y = 8.',
        desmosLatex:['4x+y=23','x-y=2','(5,3)']
      },
      {
        id:'ALD-26', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'System of two linear equations: the solution as an ordered pair',
        stem:'Which ordered pair (x, y) is the solution to the system 3x + 2y = 4 and x − 2y = 12?',
        choices:{A:'(4, −4)', B:'(−4, 4)', C:'(4, 4)', D:'(2, −1)'},
        correct:'A',
        expCorrect:'The y-terms are +2y and −2y, so adding the equations removes y: 4x = 16 and x = 4. Substituting into x − 2y = 12: 4 − 2y = 12, so −2y = 8 and y = −4. (Check both: 3(4) + 2(−4) = 12 − 8 = 4 ✓ and 4 − 2(−4) = 4 + 8 = 12 ✓.)',
        expWrong:{
          B:'(−4, 4) has the two values swapped along with their signs. Substituting into the first equation gives 3(−4) + 2(4) = −4, not 4.',
          C:'(4, 4) keeps the correct x but loses the sign when dividing −2y = 8. Dividing a positive by a negative gives a negative: y = −4.',
          D:'(2, −1) satisfies the FIRST equation only: 3(2) + 2(−1) = 4 ✓, but 2 − 2(−1) = 4, not 12. A solution has to make both equations true.'
        },
        tip:'With an ordered-pair answer, substitution is faster than solving: plug a candidate into BOTH equations and stop at the first one it fails. Checking only one equation is how the near-miss option gets chosen.',
        desmos:'Graph 3x + 2y = 4 and x − 2y = 12 and read the intersection point.',
        desmosLatex:['3x+2y=4','x-2y=12','(4,-4)']
      },
      {
        id:'ALD-27', type:'spr', domain:'Algebra', difficulty:'Fácil',
        skill:'System of two linear equations where adding removes a variable',
        stem:'In the system 3m + 4n = 29 and 5m − 4n = 27, what is the value of m?',
        answer:'7',
        expCorrect:'The n-terms are +4n and −4n, exact opposites, so adding the two equations cancels them: 8m = 56 and m = 7. (Check: 3(7) + 4n = 29 gives 4n = 8 and n = 2, and 5(7) − 4(2) = 35 − 8 = 27 ✓.) Answer: 7.',
        tip:'Scan the coefficients before doing any algebra: opposites mean add, identical means subtract. Either way one variable vanishes in a single line and there is nothing to substitute.',
        desmos:'Graph 3x + 4y = 29 and 5x − 4y = 27; they meet at (7, 2), so m = 7.',
        desmosLatex:['3x+4y=29','5x-4y=27','(7,2)']
      },
      {
        id:'ALD-28', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'System of two linear equations from a mixture problem',
        stem:'A lab technician mixes a 20% salt solution with a 45% salt solution to make 100 milliliters of a 30% salt solution. How many milliliters of the 45% solution does the mixture contain?',
        choices:{A:'10', B:'40', C:'50', D:'60'},
        correct:'B',
        expCorrect:'Let w be the milliliters of the weak (20%) liquid and s the milliliters of the strong (45%) one. Volume: w + s = 100. Salt: 0.20w + 0.45s = 0.30(100) = 30. Substitute w = 100 − s: 0.20(100 − s) + 0.45s = 30, so 20 + 0.25s = 30, then 0.25s = 10 and s = 40. (Check: 60 mL at 20% gives 12 g and 40 mL at 45% gives 18 g, and 12 + 18 = 30 g, which is 30% of 100 mL ✓.)',
        expWrong:{
          A:'10 is 30 − 20, the gap in percentage points between the weak liquid and the mixture. That is not a volume yet; it still has to be turned into a share of the 100 mL.',
          C:'50 assumes half of each. Half and half would give (20 + 45)/2 = 32.5%, which is stronger than the 30% wanted.',
          D:'60 is the amount of the 20% solution. The question asks for the 45% one.'
        },
        tip:'A mixture is always two equations: one for the total amount and one for the amount of the thing being mixed in (salt, acid, money). Write the second as (percent)(volume) for each part, and notice that 30% sits closer to 20% than to 45%, so the weaker liquid must dominate.',
        desmos:'Graph x + y = 100 and 0.2x + 0.45y = 30; the intersection (60, 40) gives 40 mL of the 45% solution.',
        desmosLatex:['x+y=100','0.2x+0.45y=30','(60,40)']
      },

      /* ═══════════ Linear inequalities (ALD-29 a ALD-34) ═══════════ */

      {
        id:'ALD-29', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Solving a one-variable inequality',
        stem:'Which inequality gives all the values of x that satisfy 5x + 12 ≤ 47?',
        choices:{A:'x ≤ 35', B:'x ≥ 7', C:'x ≤ 11.8', D:'x ≤ 7'},
        correct:'D',
        expCorrect:'Subtract 12 from both sides: 5x ≤ 35. Divide both sides by 5, a positive number, so the sign stays as it is: x ≤ 7. (Check x = 7: 35 + 12 = 47 ✓. Check x = 8: 40 + 12 = 52, which is above 47, and 8 is indeed not allowed ✓.)',
        expWrong:{
          A:'x ≤ 35 is the step before dividing by 5. That line says 5x ≤ 35, not x ≤ 35.',
          B:'x ≥ 7 flips the sign for no reason. The direction only changes when you multiply or divide by a NEGATIVE number, and 5 is positive.',
          C:'x ≤ 11.8 is (47 + 12)/5, adding the 12 instead of subtracting it. It is added on the left, so it comes off by subtraction.'
        },
        tip:'Solve an inequality with exactly the same steps as an equation, and change the direction of the sign only when you multiply or divide by a negative. Testing one value on each side of your boundary confirms the direction in seconds.',
        desmos:'Graph y = 5x + 12 and y = 47: the part of the line at or below 47 sits to the left of x = 7.',
        desmosLatex:['y=5x+12','y=47','x=7']
      },
      {
        id:'ALD-30', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Inequality where dividing by a negative flips the sign',
        stem:'Which of the following is equivalent to the inequality 9 − 4x < 25?',
        choices:{A:'x < −4', B:'x > −4', C:'x > 4', D:'x < 8.5'},
        correct:'B',
        expCorrect:'Subtract 9 from both sides: −4x < 16. Divide both sides by −4 and FLIP the sign: x > −4. (Check x = 0: 9 − 0 = 9, which is below 25 ✓, and 0 > −4 ✓. Check x = −5: 9 + 20 = 29, which is not below 25, and −5 is correctly excluded ✓.)',
        expWrong:{
          A:'x < −4 divides by −4 but leaves the sign pointing the same way. Dividing by a negative reverses the order of every pair of numbers, so the sign has to turn around.',
          C:'x > 4 drops the minus sign from the boundary. 16 divided by −4 is −4, not 4.',
          D:'x < 8.5 is (25 + 9)/4, adding the 9 instead of subtracting it and ignoring the negative coefficient entirely.'
        },
        tip:'Multiplying or dividing an inequality by a negative flips the direction — nothing else does. If that rule ever feels shaky, test your answer with one easy number, such as x = 0.',
        desmos:'Graph y = 9 − 4x and y = 25: the line dips below 25 for every x to the right of −4.',
        desmosLatex:['y=9-4x','y=25','x=-4']
      },
      {
        id:'ALD-31', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Inequality from a budget constraint',
        stem:'A club has $340 to spend on one banner and on T-shirts. The banner costs $76 and each T-shirt costs $11. Which inequality gives the possible numbers t of T-shirts the club can buy?',
        choices:{A:'11t + 76 ≤ 340', B:'11t − 76 ≤ 340', C:'11t + 76 ≥ 340', D:'76t + 11 ≤ 340'},
        correct:'A',
        expCorrect:'The T-shirts cost 11t dollars and the single banner adds 76, so the club spends 11t + 76. That total cannot pass the $340 available: 11t + 76 ≤ 340. (Solving it gives t ≤ 24; check t = 24: 264 + 76 = $340 exactly ✓.)',
        expWrong:{
          B:'11t − 76 ≤ 340 subtracts the banner, as if buying it gave money back. The banner is a cost, so it is added to the total spent.',
          C:'11t + 76 ≥ 340 says the club must spend AT LEAST $340. The $340 is a ceiling, not a target.',
          D:'76t + 11 ≤ 340 swaps the two prices. The $11 is the price of one T-shirt, so it is the number that multiplies t; the banner is bought once.'
        },
        tip:'In a spending problem, build the total cost first and then attach the sign: money available means "≤", a minimum requirement means "≥". The price that repeats is the one that multiplies the variable.',
        desmos:'Graph y = 11x + 76 and y = 340: the affordable T-shirt counts are where the line stays at or below 340.',
        desmosLatex:['y=11x+76','y=340','x=24']
      },
      {
        id:'ALD-32', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Greatest integer that satisfies an inequality',
        stem:'A van weighs 3,120 pounds when empty and its total weight can be at most 6,500 pounds. Each crate loaded onto the van weighs 145 pounds. What is the greatest number of crates the van can carry?',
        answer:'23',
        expCorrect:'With c crates the van weighs 3,120 + 145c, and that has to stay at or below 6,500: 3,120 + 145c ≤ 6,500, so 145c ≤ 3,380 and c ≤ 23.31. A crate cannot be split, so the greatest whole number allowed is 23. (Check: 23 crates weigh 3,335 pounds for a total of 6,455 ✓, while 24 crates give 6,600, which is over the limit ✗.) Answer: 23.',
        tip:'When the answer counts real objects and the limit is "at most", round the quotient DOWN, never to the nearest whole number. The quick confirmation is to test your number and the next one up against the limit.',
        desmos:'Graph y = 3120 + 145x and y = 6500: the last whole x with the line still at or below 6,500 is 23.',
        desmosLatex:['y=3120+145x','y=6500','x=23']
      },
      {
        id:'ALD-33', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Two constraints written as one compound inequality',
        stem:'A food truck needs at least 40 orders in a day to break even, and it cannot fill more than 95 orders in a day. Which inequality describes every possible number n of orders in one day?',
        choices:{A:'40 < n < 95', B:'n ≥ 40 or n ≤ 95', C:'40 ≥ n ≥ 95', D:'40 ≤ n ≤ 95'},
        correct:'D',
        expCorrect:'"At least 40" allows 40 itself, so n ≥ 40. "Cannot fill more than 95" allows 95 itself, so n ≤ 95. Both hold at once: 40 ≤ n ≤ 95. (Check the edges: 40 orders breaks even, and 95 orders is the most the truck can fill ✓.)',
        expWrong:{
          A:'40 < n < 95 leaves out the two endpoints. "At least 40" includes 40, and "no more than 95" includes 95, so both need the line under the sign.',
          B:'Joining the two with "or" makes every number qualify: 200 is at least 40, and −5 is at most 95. The truck has to satisfy both conditions together.',
          C:'40 ≥ n ≥ 95 points both signs the wrong way and asks for a number that is below 40 and above 95 at the same time. No number does that.'
        },
        tip:'Translate each condition on its own, then decide whether they join with "and" (both true, one compound inequality) or "or". "At least" and "at most" always include the endpoint; "more than" and "less than" never do.',
        desmos:'Graph y = x with the restriction 40 ≤ x ≤ 95 to see the closed interval the truck can operate in.',
        desmosLatex:['y=x\\left\\{40\\le x\\le 95\\right\\}']
      },
      {
        id:'ALD-34', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Inequality with the variable on both sides',
        stem:'Which inequality describes every value of x for which 7 − 3x ≥ 2x − 18?',
        choices:{A:'x ≤ 5', B:'x ≥ 5', C:'x ≤ −2.2', D:'x ≥ 25'},
        correct:'A',
        expCorrect:'Add 3x to both sides: 7 ≥ 5x − 18. Add 18: 25 ≥ 5x. Divide by 5, a positive number, so nothing flips: 5 ≥ x, that is x ≤ 5. (Check x = 5: 7 − 15 = −8 and 2(5) − 18 = −8, equal ✓. Check x = 6: 7 − 18 = −11 against 2(6) − 18 = −6, and −11 is not greater than or equal to −6, so 6 is correctly excluded ✓.)',
        expWrong:{
          B:'x ≥ 5 keeps the sign facing the same way after the sides are swapped. "25 ≥ 5x" read from the other end is "5x ≤ 25", so the sign turns when the sides do.',
          C:'x ≤ −2.2 comes from 7 − 18 instead of 7 + 18. The −18 is subtracted on the right, so it comes off by adding 18 to both sides.',
          D:'x ≥ 25 is the value of 5x, and the direction is wrong too. One division by 5 is still missing.'
        },
        tip:'Move the variable to the side that keeps its coefficient positive: then no flip is needed at all. If you do end up writing the boundary first, as in 25 ≥ 5x, remember the sign turns around when you rewrite it with x on the left.',
        desmos:'Graph y = 7 − 3x and y = 2x − 18: the first line sits above the second for every x to the left of 5.',
        desmosLatex:['y=7-3x','y=2x-18','x=5']
      }

    ]
  });
})();
