/* SAT Studio question set — Math: Algebra 3, núcleo de dificultad media (AL3-01 a AL3-12)
 *
 * Por qué existe: la auditoría del 26-jul-2026 midió las 733 preguntas del banco
 * contra la distribución oficial de College Board (Assessment Framework, tabla 19).
 * Algebra pesa 35 % del examen —el dominio más grande junto con Advanced Math— y
 * en el banco estaba al 0,68× de ese peso. Además doce habilidades tenían UNA sola
 * pregunta, y casi todas eran de acá.
 *
 * Este set cubre las cinco habilidades oficiales del dominio Algebra:
 *   · Linear equations in one variable
 *   · Linear equations in two variables
 *   · Linear functions
 *   · Systems of two linear equations in two variables
 *   · Linear inequalities in one or two variables
 *
 * Nivel Media a propósito: el banco ya tiene 61 % de dificultad alta y solo 13 %
 * de fácil. El primer módulo del SAT es mixto y es el que fija el techo de puntaje,
 * así que hace falta velocidad acá, no solo resistencia en lo difícil.
 */
(function(){
  window.SAT_SETS.push({
    id: 'math-alg3',
    title: 'Math — Algebra 3 (core)',
    section: 'math',
    level: 'Media',
    description: 'The five skills of the Algebra domain at Module 1 difficulty: solving, slope, function notation, systems, inequalities and translating word problems.',
    minutes: 18,
    questions: [
      {
        id:'AL3-01', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equations (one variable, with distribution)',
        stem:'If 3(x − 4) = 2x + 7, what is the value of x ?',
        choices:{A:'19', B:'11', C:'−5', D:'19/5'},
        correct:'A',
        expCorrect:'Distribute first: 3(x − 4) = 3x − 12. That leaves 3x − 12 = 2x + 7. Move the x terms to one side and the numbers to the other: 3x − 2x = 7 + 12 ⇒ x = 19. (Check: 3(19 − 4) = 3(15) = 45 and 2(19) + 7 = 45 ✓.)',
        expWrong:{
          B:'11 comes from distributing wrong: 3(x − 4) is NOT 3x − 4. The 3 multiplies BOTH terms inside the parentheses, so the −4 becomes −12.',
          C:'−5 is a sign error when moving the −12: it crosses over as +12, not as −12. If you get a negative in an equation with everything positive on the other side, be suspicious.',
          D:'19/5 comes from adding the x terms instead of subtracting: 3x + 2x = 5x. The 2x is on the other side of the equals sign, so it gets subtracted.'
        },
        tip:'ALWAYS distribute before moving terms. Multiplying only the first term inside the parentheses is the most common error in the whole domain, and there is always an option waiting for it.',
        desmos:'Graph y=3(x-4) and y=2x+7 and tap where they cross: x = 19.',
        desmosLatex:['y=3(x-4)','y=2x+7']
      },
      {
        id:'AL3-02', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equations (two variables, solving for one)',
        stem:'The equation 5x − 2y = 20 relates the quantities x and y. Which of the following expresses y in terms of x ?',
        choices:{A:'y = (5/2)x − 10', B:'y = (5/2)x + 10', C:'y = 10 − (5/2)x', D:'y = (2/5)x − 10'},
        correct:'A',
        expCorrect:'Isolate the y term: 5x − 2y = 20 ⇒ −2y = 20 − 5x. Now divide EVERYTHING by −2: y = 20/(−2) − 5x/(−2) = −10 + (5/2)x, that is y = (5/2)x − 10. (Check with x = 4: y = 10 − 10 = 0, and in the original 5(4) − 2(0) = 20 ✓.)',
        expWrong:{
          B:'y = (5/2)x + 10 divides only the x term by −2 and leaves the 20 with its sign. Dividing by a negative changes the sign of BOTH terms.',
          C:'y = 10 − (5/2)x comes from dividing by 2 instead of by −2. Both signs end up backwards.',
          D:'y = (2/5)x − 10 flips the coefficient. Dividing 5x by 2 gives (5/2)x, not (2/5)x — it is a division, not an upside-down fraction.'
        },
        tip:'When you solve, the expensive error is not the algebra: it is dividing by a negative and applying it to only one term. Divide the whole equation at once and check both signs.',
        desmos:'Graph 5x-2y=20 and then y=2.5x-10 on top: they overlap exactly. Graph a wrong option instead and you see two different lines.',
        desmosLatex:['5x-2y=20','y=2.5x-10']
      },
      {
        id:'AL3-03', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear functions (slope between two points)',
        stem:'Line ℓ in the xy-plane passes through the points (−3, 8) and (5, −4). What is the slope of line ℓ ?',
        choices:{A:'−3/2', B:'3/2', C:'−6', D:'−2/3'},
        correct:'A',
        expCorrect:'Slope = (change in y)/(change in x) = (−4 − 8)/(5 − (−3)) = −12/8 = −3/2. Watch the denominator: 5 − (−3) = 5 + 3 = 8. (It makes sense: the line drops from y = 8 to y = −4 as x grows, so the slope is negative.)',
        expWrong:{
          B:'3/2 has the wrong sign. If y FALLS as x rises, the slope is negative. A glance at the points tells you before you compute.',
          C:'−6 comes from subtracting the denominator wrong: 5 − 3 = 2 instead of 5 − (−3) = 8. Subtracting a negative adds.',
          D:'−2/3 is the slope upside down: you put the change in x on top. The formula is Δy over Δx, in that order.'
        },
        tip:'Before computing, look at whether the line rises or falls and lock in the sign. After that, the only real trap is the double negative in the denominator.',
        desmos:'Type (-3,8) and (5,-4) to see the points, then y=-1.5x+3.5 to confirm the line passes through both.',
        desmosLatex:['(-3,8)','(5,-4)','y=-1.5x+3.5']
      },
      {
        id:'AL3-04', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Function notation (evaluating at a negative)',
        stem:'The function f is defined by f(x) = 4 − 3x. What is the value of f(−2) ?',
        choices:{A:'10', B:'−2', C:'2', D:'−10'},
        correct:'A',
        expCorrect:'Replace x with −2, using parentheses: f(−2) = 4 − 3(−2) = 4 − (−6) = 4 + 6 = 10. The −3 times −2 gives +6, and that positive is ADDED to the 4.',
        expWrong:{
          B:'−2 comes from computing 4 − 6: the sign on the −2 got lost in the multiplication. −3 × (−2) = +6, not −6.',
          C:'2 comes from mishandling the two negatives: it gives 4 − 6 and then the result gets its sign flipped. Do one operation at a time.',
          D:'−10 has the final sign inverted. The absolute value is right, so the slip was at the end; substitute with parentheses and it does not get lost.'
        },
        tip:'ALWAYS write the parentheses when you substitute: f(−2) = 4 − 3(−2). Half of all function-notation errors are a sign that evaporates because they were left out.',
        desmos:'Graph y=4-3x and type (-2,10): the point lands right on the line.',
        desmosLatex:['y=4-3x','(-2,10)']
      },
      {
        id:'AL3-05', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Systems of two linear equations (elimination)',
        stem:'2x + 3y = 16\nx − 3y = 2\nThe system of equations above has solution (x, y). What is the value of x ?',
        choices:{A:'6', B:'4/3', C:'18', D:'2'},
        correct:'A',
        expCorrect:'The y terms are already opposites (+3y and −3y), so ADD the equations: (2x + x) + (3y − 3y) = 16 + 2 ⇒ 3x = 18 ⇒ x = 6. (Check: if x = 6, the second gives 6 − 3y = 2 ⇒ y = 4/3, and the first gives 12 + 4 = 16 ✓.)',
        expWrong:{
          B:'4/3 is the value of y, not of x. You solved it correctly and answered for the other variable — read what the question wants before you mark it.',
          C:'18 is 3x, the intermediate step. It still needs dividing by 3. This option is planted exactly for whoever stops one step early.',
          D:'2 is the right-hand side of the second equation, not the value of x. x − 3y = 2 does not mean x = 2.'
        },
        tip:'Before solving anything, check whether the coefficients of one variable are already opposites. If they are, adding the equations solves the system in one line.',
        desmos:'Graph 2x+3y=16 and x-3y=2 and tap the intersection: (6, 1.333).',
        desmosLatex:['2x+3y=16','x-3y=2']
      },
      {
        id:'AL3-06', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear equations (translating words)',
        stem:'A gym charges a one-time registration fee of $40 plus $25 for each month of membership. Which equation gives the total cost C, in dollars, for m months of membership?',
        choices:{A:'C = 25m + 40', B:'C = 40m + 25', C:'C = 65m', D:'C = 25(m + 40)'},
        correct:'A',
        expCorrect:'What repeats every month multiplies m: it is $25 per month, so 25m. What is paid once is a constant: +40. Total: C = 25m + 40. (Check with 3 months: 25(3) + 40 = $115.)',
        expWrong:{
          B:'C = 40m + 25 swaps the roles: it would charge $40 every month and $25 once. That is the reverse of what the problem says.',
          C:'C = 65m adds the two figures and charges them every month. The sign-up fee is one-time; it cannot be folded into the monthly rate.',
          D:'C = 25(m + 40) multiplies the sign-up fee by the monthly rate. With 3 months it would give $1,075 — an absurdity you catch by trying a number.'
        },
        tip:'Fixed rule: whatever says "per month", "per hour" or "each" multiplies the variable; whatever says "one-time", "initial" or "sign-up" is added separately. Try a small value and rule out the absurd ones.',
        desmos:'Graph y=25x+40 along with the three wrong options: you see at once which one starts at 40 and climbs by 25.',
        desmosLatex:['y=25x+40','y=40x+25','y=65x']
      },
      {
        id:'AL3-07', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equations (decreasing model in context)',
        stem:'A tank contains 500 liters of water and is being drained at a constant rate of 10 liters per minute. After how many minutes will the tank contain 260 liters?',
        choices:{A:'24', B:'240', C:'50', D:'76'},
        correct:'A',
        expCorrect:'The amount left is 500 − 10t, where t is the minutes. Set up 500 − 10t = 260 ⇒ 10t = 240 ⇒ t = 24 minutes. (Check: in 24 minutes 240 liters drain out and 260 are left ✓.)',
        expWrong:{
          B:'240 is the LITERS that drained out, not the minutes. It is the intermediate step; it still needs dividing by the rate of 10 L/min.',
          C:'50 is how long it takes to empty the WHOLE tank (500/10). The question does not ask to empty it, it asks to reach 260 liters.',
          D:'76 comes from adding instead of subtracting: (500 + 260)/10. If the tank is draining, the amount left goes down.'
        },
        tip:'In models that decrease, write the expression for what is LEFT first (initial − rate × time) and only then set it equal. And check which unit the answer wants: liters and minutes are both among the options.',
        desmos:'Graph y=500-10x and y=260, then tap the intersection: x = 24.',
        desmosLatex:['y=500-10x','y=260']
      },
      {
        id:'AL3-08', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear inequalities (flipping the sign)',
        stem:'Which of the following is the solution to the inequality −4x + 9 ≥ 25 ?',
        choices:{A:'x ≤ −4', B:'x ≥ −4', C:'x ≤ 4', D:'x ≥ 4'},
        correct:'A',
        expCorrect:'−4x + 9 ≥ 25 ⇒ −4x ≥ 16. Dividing by −4, which is negative, FLIPS the inequality: x ≤ −4. (Check with x = −5: −4(−5) + 9 = 29 ≥ 25 ✓. And with x = 0: 9 ≥ 25 is false, so 0 is out, as it should be.)',
        expWrong:{
          B:'x ≥ −4 forgets to flip the sign when dividing by −4. Try x = 0: it satisfies x ≥ −4 but gives 9 ≥ 25, which is false.',
          C:'x ≤ 4 loses the sign on the −4 while dividing. Try x = 0: it satisfies x ≤ 4 and does not satisfy the inequality.',
          D:'x ≥ 4 has both errors at once: neither the sign of the number nor the flip of the symbol.'
        },
        tip:'Multiplying or dividing by a negative FLIPS the symbol. And there is always a free check: try x = 0 in the original inequality and rule out any option that includes or excludes it the wrong way.',
        desmos:'Type -4x+9>=25 and Desmos shades the region for you: everything to the left of -4.',
        desmosLatex:['-4x+9\\ge 25']
      },
      {
        id:'AL3-09', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Equivalent expressions (product of binomials)',
        stem:'Which expression is equivalent to (2x − 5)(3x + 4) ?',
        choices:{A:'6x² − 7x − 20', B:'6x² + 7x − 20', C:'6x² − 7x + 20', D:'6x² − 20'},
        correct:'A',
        expCorrect:'Multiply every term by every term: (2x)(3x) = 6x², (2x)(4) = 8x, (−5)(3x) = −15x, (−5)(4) = −20. The middle ones combine: 8x − 15x = −7x. That leaves 6x² − 7x − 20. (Check with x = 1: (2−5)(3+4) = −21, and 6 − 7 − 20 = −21 ✓.)',
        expWrong:{
          B:'6x² + 7x − 20 combines the middle terms wrong: 8x − 15x = −7x, not +7x. The −15x outweighs the +8x.',
          C:'6x² − 7x + 20 gets the last product wrong: (−5)(4) = −20, not +20. Only two negatives make a positive.',
          D:'6x² − 20 multiplies only first by first and last by last. The two cross products are missing, and those are what generate the x term.'
        },
        tip:'After expanding, check with x = 1: the sum of the coefficients in your result has to equal the product of the parentheses evaluated at 1. It costs five seconds and catches any sign error.',
        desmos:'Graph y=(2x-5)(3x+4) and y=6x^2-7x-20: they overlap. With a wrong option you see two curves.',
        desmosLatex:['y=(2x-5)(3x+4)','y=6x^2-7x-20']
      },
      {
        id:'AL3-10', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear functions (interpreting the intercept in context)',
        stem:'The equation y = 3.5x + 18 models the height y, in centimeters, of a plant x weeks after it was planted. What does 18 represent in this model?',
        choices:{
          A:'The height of the plant, in centimeters, at the time it was planted',
          B:'The number of centimeters the plant grows each week',
          C:'The height of the plant, in centimeters, after 18 weeks',
          D:'The number of weeks it takes the plant to reach its full height'},
        correct:'A',
        expCorrect:'The 18 is the constant term, that is, the value of y when x = 0: y = 3.5(0) + 18 = 18. Since x is the number of weeks since planting, x = 0 is the moment it was planted. So the plant was 18 cm tall when planted.',
        expWrong:{
          B:'That is the 3.5, not the 18: the number multiplying x is the weekly growth rate. The 18 is not multiplying anything.',
          C:'After 18 weeks the height would be 3.5(18) + 18 = 81 cm. The 18 appears in the model, but not as a future height.',
          D:'The model is a line that grows forever; it has no maximum height and no point where it stops. Nothing in the equation represents that.'
        },
        tip:'In y = mx + b: b is "how much there was at the start" and m is "how much it changes per unit". Set x = 0 in your head and the intercept interprets itself.',
        desmos:'Graph y=3.5x+18 and look at where it crosses the y-axis: at 18, exactly at x=0.',
        desmosLatex:['y=3.5x+18','(0,18)']
      },
      {
        id:'AL3-11', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Linear equations (one variable, with parentheses)',
        stem:'If 7(x + 2) − 3x = 46, what is the value of x? (Grid in your answer.)',
        answer:'8',
        expCorrect:'Distribute: 7x + 14 − 3x = 46. Combine the x terms: 4x + 14 = 46 ⇒ 4x = 32 ⇒ x = 8. (Check: 7(8 + 2) − 3(8) = 70 − 24 = 46 ✓.)',
        tip:'On SPR questions there are no options to catch your error, so checking is not optional: plug your answer back into the original equation before you write it. They are one in four questions of the section.',
        desmos:'Graph y=7(x+2)-3x and y=46, then tap the intersection: x = 8.',
        desmosLatex:['y=7(x+2)-3x','y=46']
      },
      {
        id:'AL3-12', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Systems with no solution (parallel lines)',
        stem:'4x + 6y = 12\n2x + ky = 5\nIn the system of equations above, k is a constant. If the system has no solution, what is the value of k ?',
        choices:{A:'3', B:'6', C:'2', D:'12'},
        correct:'A',
        expCorrect:'No solution means PARALLEL lines: proportional coefficients, but a constant that does not match. Divide the first by 2: 2x + 3y = 6. For the second to be parallel it needs the same left-hand side, so k = 3. That leaves 2x + 3y = 6 against 2x + 3y = 5: two parallel lines that never meet ✓ (and since 6 ≠ 5, they are not the same line, which would give infinitely many solutions).',
        expWrong:{
          B:'6 copies the coefficient from the first equation without adjusting the scale. The x coefficients are 4 and 2, so the second equation is half the size: the 6 has to be halved too.',
          C:'2 copies the x coefficient instead of computing the y one. Those are different positions in the equation.',
          D:'12 multiplies by 2 instead of dividing. The factor runs from the first to the second, and the second is the smaller one.'
        },
        tip:'"No solution" = parallel = same slope, different intercept. Bring the two equations to the same scale in x and read what the other letter has to be. If the constants matched too, they would be the SAME line and there would be infinitely many solutions — that is the other half of this question, and the SAT asks it just as often.',
        desmos:'Graph 4x+6y=12 and 2x+3y=5: they are parallel and never touch. Change the 3 to another number and you see them cross.',
        desmosLatex:['4x+6y=12','2x+3y=5']
      }
    ]
  });
})();
