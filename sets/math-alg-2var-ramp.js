/* SAT Studio question set — Math: Algebra — Linear equations in two variables (L2R-01 a L2R-13)

   Destreza oficial: al-2var "Linear equations in two variables", la más flaca de
   todo Algebra (34 preguntas en el banco antes de este set).

   OJO con skillOf(): lee `skill` + los primeros 160 caracteres del `stem` y prueba
   las destrezas de Algebra en ESTE orden — al-sys, al-ineq, al-2var, al-func, al-1var.
   La nuestra va TERCERA, así que:
     · en TODOS los `skill` aparece uno de los disparadores de al-2var
       ("standard form", "point-slope", "intercept form", "in terms of",
        "two variables", "literal equation", "solve for");
     · y NO aparece —ni en el skill ni en el arranque del enunciado—
       "system", "elimination", "substitution", "simultaneous", "no solution",
       "infinitely many"  → se la llevaría al-sys
       "inequalit", "at least", "at most", "greatest integer", "least integer",
       "constraint", "budget", "capacity", "region"  → se la llevaría al-ineq.
   "at least" y "at most" son las dos que salen solas al redactar: acá se dicen
   con otras palabras ("exactly", "billed exactly $640") a propósito.

   El error que persiguen los distractores de L2R-01, L2R-04, L2R-06 y L2R-08 es
   el mismo, y es el número uno al despejar: dividir SOLO un término del lado
   derecho por el coeficiente. Las `expWrong` hacen la división completa.

   Reparto: 10 MC + 3 SPR · 3 Fácil · 10 Media · ninguna extreme.
   Clave: A 2 · B 3 · C 3 · D 2. */
(function(){

  window.SAT_SETS.push({
    id: 'math-alg-2var-ramp',
    title: 'Linear Equations in Two Variables — Warm-up to Test Level',
    section: 'math',
    level: 'Media',
    description: 'Move between standard form, slope-intercept form and point-slope form; solve a two-variable equation for one letter in terms of the other; read both intercepts straight off Ax + By = C; and say what a coefficient means in a real situation.',
    minutes: 18,
    questions: [

      /* ═══════════ Fácil: una conversión de forma o un intercepto directo ═══════════ */

      {
        id:'L2R-01', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Standard form rewritten in slope-intercept form',
        stem:'The equation 3x + 4y = 20 is graphed in the xy-plane. Which of the following is an equivalent equation with y isolated on one side?',
        choices:{A:'y = −3x + 5', B:'y = (3/4)x + 5', C:'y = −(3/4)x + 5', D:'y = −(3/4)x + 20'},
        correct:'C',
        expCorrect:'Subtract 3x from both sides: 4y = −3x + 20. Now divide EVERY term on the right by 4: y = −3x/4 + 20/4, which is y = −(3/4)x + 5. Check with x = 4: the original gives 12 + 4y = 20, so y = 2; and −(3/4)(4) + 5 = −3 + 5 = 2 ✓.',
        expWrong:{
          A:'y = −3x + 5 divides only the 20 by 4 and leaves −3x untouched. The bar goes under the whole right side: (−3x + 20)/4 = −(3/4)x + 5, so the x-term becomes −3/4, not −3.',
          B:'y = (3/4)x + 5 keeps +3x when the 3x crosses the equals sign. Subtracting 3x from both sides turns it into −3x, so the coefficient of x is negative.',
          D:'y = −(3/4)x + 20 divides only the x-term by 4 and leaves the 20 alone. Both terms get divided: 20/4 = 5.'
        },
        tip:'Going from Ax + By = C to y = mx + b is two moves: cross the x-term over (its sign flips), then divide EVERY term on the right by the coefficient of y. The slope ends up as −A/B and the y-intercept as C/B.',
        desmos:'Graph 3x + 4y = 20 and y = −(3/4)x + 5 at the same time. Two names for the same line means one covers the other exactly and you only see one line.',
        desmosLatex:['3x+4y=20','y=-(3/4)x+5']
      },
      {
        id:'L2R-02', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'x-intercept and y-intercept of a line in standard form',
        stem:'The line with equation 5x − 2y = 30 is graphed in the xy-plane. What is the x-coordinate of the point where the line crosses the x-axis?',
        choices:{A:'−15', B:'6', C:'30', D:'−6'},
        correct:'B',
        expCorrect:'Every point on the x-axis has y = 0. Put y = 0 into the equation: 5x − 2(0) = 30, so 5x = 30 and x = 6. The crossing point is (6, 0) ✓.',
        expWrong:{
          A:'−15 is the OTHER intercept. Setting x = 0 gives −2y = 30 and y = −15, which is where the line crosses the y-axis, not the x-axis.',
          C:'30 is the value of 5x, the step right before the answer. One division by 5 is still missing.',
          D:'−6 borrows the minus sign from the −2y term. That minus belongs to the y-term, which became zero and disappeared; 30 divided by +5 is +6.'
        },
        tip:'x-intercept: set y = 0 and solve. y-intercept: set x = 0 and solve. The letter you set to zero is the one whose axis you are NOT on, and mixing them up is the most common way to lose this point.',
        desmos:'Graph 5x − 2y = 30 and look at where the line meets each axis: (6, 0) on the horizontal one and (0, −15) on the vertical one.',
        desmosLatex:['5x-2y=30','(6,0)','(0,-15)']
      },
      {
        id:'L2R-03', type:'spr', domain:'Algebra', difficulty:'Fácil',
        skill:'y-intercept of a line written in standard form',
        stem:'In the xy-plane, the graph of 4x + 9y = 72 crosses the y-axis at the point (0, k). What is the value of k?',
        answer:'8',
        expCorrect:'On the y-axis, x = 0. Put x = 0 into the equation: 4(0) + 9y = 72, so 9y = 72 and y = 8. The crossing point is (0, 8), so k = 8. Check: 4(0) + 9(8) = 72 ✓. Answer: 8.',
        tip:'The y-intercept of Ax + By = C is always C/B, because setting x = 0 wipes out the x-term. Here 72/9 = 8 — you can read it off without rewriting the equation at all.',
        desmos:'Graph 4x + 9y = 72 and type the point (0, 8). If the point sits exactly on the line, k is right.',
        desmosLatex:['4x+9y=72','(0,8)']
      },

      /* ═══════════ Media: despejar con parámetros y leer coeficientes ═══════════ */

      {
        id:'L2R-04', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Literal equation in two variables: writing y in terms of x',
        stem:'In the equation ax + by = c, a, b, and c are constants and b ≠ 0. Which of the following correctly gives y in terms of x, a, b, and c?',
        choices:{A:'y = (c − ax)/b', B:'y = c − ax/b', C:'y = c/b − ax', D:'y = (c + ax)/b'},
        correct:'A',
        expCorrect:'Treat the letters exactly like numbers. Subtract ax from both sides: by = c − ax. Divide both sides by b, and the bar covers the WHOLE right side: y = (c − ax)/b. Check with a = 2, b = 3, c = 12 and x = 3: the original gives 6 + 3y = 12, so y = 2; and (12 − 6)/3 = 2 ✓.',
        expWrong:{
          B:'y = c − ax/b divides only the ax by b and leaves c undivided. With a = 2, b = 3, c = 12 and x = 3 it gives 12 − 2 = 10, not 2. Dividing by b means dividing every term: c/b − ax/b.',
          C:'y = c/b − ax does the opposite half: it divides c by b and leaves ax alone. Same numbers give 4 − 6 = −2, not 2.',
          D:'y = (c + ax)/b never flipped the sign. The ax was ADDED on the left, so it leaves by subtracting it from both sides. Same numbers give (12 + 6)/3 = 6, not 2.'
        },
        tip:'When you divide by a coefficient, the bar goes under the ENTIRE other side — not under the term nearest to it. If you are unsure, put easy numbers in the letters and test both the original and your answer.',
        desmos:'Try it with numbers: graph 2x + 3y = 12 and y = (12 − 2x)/3. One line on top of the other means the rearrangement is right.',
        desmosLatex:['2x+3y=12','y=(12-2x)/3']
      },
      {
        id:'L2R-05', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Interpreting a term of a linear equation in two variables in context',
        stem:'A school theater sells adult tickets for $12 each and student tickets for $7 each. On one night the theater collected $2,100 from ticket sales, so 12a + 7s = 2100, where a is the number of adult tickets sold and s is the number of student tickets sold. Which of the following is the best interpretation of 7s in this equation?',
        choices:{
          A:'The number of student tickets sold that night.',
          B:'The price of one student ticket, in dollars.',
          C:'The total number of tickets sold that night, adult and student.',
          D:'The total amount collected from student tickets that night.'
        },
        correct:'D',
        expCorrect:'Read the units. 7 is dollars per student ticket and s is student tickets, so 7 times s is (dollars per ticket)(tickets) = dollars: the money that came in from student tickets alone. Check with s = 100: 7(100) = $700, and the remaining 2100 − 700 = $1,400 came from adult tickets ✓.',
        expWrong:{
          A:'That is s by itself, without the 7. The 7 turns a count of tickets into an amount of money.',
          B:'That is the 7 by itself. Multiplying it by s stops it from being a per-ticket price and makes it a total.',
          C:'A total count of tickets would be a + s. Here each count is multiplied by its own price first, so nothing in this equation is a plain ticket count.'
        },
        tip:'To interpret a piece of a two-variable model, multiply the units of its parts. (dollars per item)(items) = dollars; the number standing alone is a rate, and the product is a total.',
        desmos:'Graph 12x + 7y = 2100 with x as adult tickets and y as student tickets. Every point on the line is a pair of counts that brings in exactly $2,100.',
        desmosLatex:['12x+7y=2100']
      },
      {
        id:'L2R-06', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Two-price model solved for one variable in terms of the other',
        stem:'A caterer charges $8 for each pasta plate and $5 for each dessert plate. One party was billed exactly $640, so 8p + 5d = 640, where p is the number of pasta plates and d is the number of dessert plates. Which equation gives d in terms of p?',
        choices:{A:'d = 640 − 1.6p', B:'d = 128 − 1.6p', C:'d = 128 − 8p', D:'d = 1.6p − 128'},
        correct:'B',
        expCorrect:'Subtract 8p from both sides: 5d = 640 − 8p. Divide BOTH terms on the right by 5: d = 640/5 − 8p/5 = 128 − 1.6p. Check with p = 50: d = 128 − 80 = 48, and 8(50) + 5(48) = 400 + 240 = 640 ✓.',
        expWrong:{
          A:'d = 640 − 1.6p divides only the 8p by 5 and leaves the 640 as it was. Both terms get divided: 640/5 = 128.',
          C:'d = 128 − 8p is the same slip on the other term: the 640 was divided but the 8p was not. 8/5 = 1.6, so the coefficient of p is 1.6.',
          D:'d = 1.6p − 128 subtracts in the wrong order. From 5d = 640 − 8p the 640 stays positive, so the constant is +128 and the p-term is the one that is negative. At p = 50 it gives −48 plates.'
        },
        tip:'Isolating a variable in a two-price model has one dangerous step: after you move the other term across, divide EVERY term by the coefficient, not just the one it is touching. Testing one convenient value catches the error in ten seconds.',
        desmos:'Graph 8x + 5y = 640 and y = 128 − 1.6x. If the two graphs land on top of each other the rearrangement is correct.',
        desmosLatex:['8x+5y=640','y=128-1.6x']
      },
      {
        id:'L2R-07', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Line through two points written in standard form',
        stem:'In the xy-plane, a line passes through the points (2, −1) and (6, 11). The equation of this line can be written as 3x − y = c, where c is a constant. What is the value of c?',
        answer:'7',
        expCorrect:'First the slope: (11 − (−1))/(6 − 2) = 12/4 = 3, which matches the 3x in the given form. Now put either point into 3x − y = c. Using (2, −1): 3(2) − (−1) = 6 + 1 = 7. Check with the other point: 3(6) − 11 = 18 − 11 = 7 ✓. Answer: 7.',
        tip:'When the form of the answer is handed to you, do not rebuild the whole equation — drop a known point into that form and read off the missing constant. Then verify with the second point, which costs one line and catches every sign slip.',
        desmos:'Graph 3x − y = 7 together with the points (2, −1) and (6, 11). The right value of c puts the line through both.',
        desmosLatex:['3x-y=7','(2,-1)','(6,11)']
      },
      {
        id:'L2R-08', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'The same line written in standard form and in slope-intercept form',
        stem:'The equation 6x − 10y = 45 is graphed in the xy-plane. Which of the following equations has the same graph?',
        choices:{A:'y = −6x − 4.5', B:'y = 0.6x + 4.5', C:'y = 0.6x − 4.5', D:'y = −0.6x − 4.5'},
        correct:'C',
        expCorrect:'Subtract 6x: −10y = −6x + 45. Divide every term by −10: y = (−6/−10)x + 45/(−10) = 0.6x − 4.5. Check with x = 5: the original gives 30 − 10y = 45, so −10y = 15 and y = −1.5; and 0.6(5) − 4.5 = 3 − 4.5 = −1.5 ✓.',
        expWrong:{
          A:'y = −6x − 4.5 divides only the 45 by −10 and leaves −6x standing. The −6 has to be divided too: −6/−10 = 0.6.',
          B:'y = 0.6x + 4.5 gets the slope right but keeps the constant positive. 45 divided by −10 is −4.5; only the x-term changes sign twice and comes out positive.',
          D:'y = −0.6x − 4.5 divides −6 by +10 instead of by −10. Dividing a negative by a negative gives a positive, so the slope is +0.6.'
        },
        tip:'Two equations describe the same line only if BOTH the slope and the intercept survive the rewrite. When the coefficient of y is negative, every term changes sign as you divide — check the x-term and the constant separately.',
        desmos:'Graph 6x − 10y = 45 and y = 0.6x − 4.5. One visible line means they are the same; two lines means the rewrite went wrong.',
        desmosLatex:['6x-10y=45','y=0.6x-4.5']
      },
      {
        id:'L2R-09', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Changing the constant term in standard form: what happens to the graph',
        stem:'In the xy-plane, line ℓ has equation 4x + 3y = 12 and line n has equation 4x + 3y = 27. Which of the following statements about lines ℓ and n is true?',
        choices:{
          A:'They have the same slope and the same y-intercept.',
          B:'They have the same slope but different x-intercepts.',
          C:'They have different slopes and meet at exactly one point.',
          D:'Line n is line ℓ shifted 15 units to the right.'
        },
        correct:'B',
        expCorrect:'Rewrite both: 3y = −4x + 12 gives y = −(4/3)x + 4, and 3y = −4x + 27 gives y = −(4/3)x + 9. The slope −4/3 depends only on the 4 and the 3, which did not change, so it is the same for both. The intercepts do change: setting y = 0 gives x = 3 for line ℓ and x = 27/4 = 6.75 for line n ✓.',
        expWrong:{
          A:'The slope is indeed the same, but the y-intercepts are 12/3 = 4 and 27/3 = 9. The constant on the right is exactly the piece that sets the intercepts.',
          C:'Different slopes would need a change in the coefficient of x or of y. Only the number on the right moved, so the steepness is untouched.',
          D:'Shifting a graph h units right replaces x with x − h, which turns the right side into 12 + 4h. Matching 12 + 4h = 27 gives h = 3.75, not 15. The 15 is the change in the constant, not the distance the line moved.'
        },
        tip:'In Ax + By = C, A and B fix the direction of the line and C fixes its position. Change C alone and you slide the line without tilting it; change A or B and the steepness itself moves.',
        desmos:'Graph 4x + 3y = 12 and 4x + 3y = 27 together, then drag the value 27 up and down. The line slides but never tilts.',
        desmosLatex:['4x+3y=12','4x+3y=27']
      },
      {
        id:'L2R-10', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Point-slope form converted to standard form',
        stem:'In the xy-plane, line k has slope −5/2 and passes through the point (4, −3). Which of the following equations represents line k?',
        choices:{A:'5x − 2y = 26', B:'2x + 5y = −7', C:'5x + 2y = 26', D:'5x + 2y = 14'},
        correct:'D',
        expCorrect:'Start in point-slope form: y − (−3) = −(5/2)(x − 4), that is y + 3 = −(5/2)(x − 4). Multiply both sides by 2: 2y + 6 = −5(x − 4) = −5x + 20. Move the x-term over and the 6 across: 5x + 2y = 14. Check the point: 5(4) + 2(−3) = 20 − 6 = 14 ✓, and rewriting gives y = −(5/2)x + 7, slope −5/2 ✓.',
        expWrong:{
          A:'5x − 2y = 26 rewrites as y = (5/2)x − 13, a slope of +5/2. The minus sign of the slope was dropped somewhere in the rearranging.',
          B:'2x + 5y = −7 rewrites as y = −(2/5)x − 7/5. The slope was turned upside down: −5/2 became −2/5. It does pass through (4, −3), which is what makes it tempting.',
          C:'5x + 2y = 26 has the right slope but uses the point (4, 3) instead of (4, −3): 5(4) + 2(3) = 26. The y-coordinate of the given point is negative.'
        },
        tip:'Point-slope first, standard form second. To clear a fractional slope, multiply the whole equation by the denominator BEFORE you distribute — it keeps every coefficient a whole number and the sign errors visible.',
        desmos:'Graph 5x + 2y = 14 and the point (4, −3). The line should pass through the point and fall 5 units for every 2 units you move right.',
        desmosLatex:['5x+2y=14','(4,-3)']
      },
      {
        id:'L2R-11', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Finding a missing coefficient in standard form',
        stem:'In the xy-plane, the graph of 5x + ky = 40 passes through the point (2, 6), where k is a constant. What is the value of k?',
        answer:'5',
        expCorrect:'A point on the graph makes the equation true, so put x = 2 and y = 6 into it: 5(2) + k(6) = 40, that is 10 + 6k = 40. Subtract 10: 6k = 30. Divide by 6: k = 5. Check: 5(2) + 5(6) = 10 + 30 = 40 ✓. Answer: 5.',
        tip:'"Passes through" is an instruction: substitute the coordinates and the unknown coefficient becomes the only letter left. The point gives you two numbers, and they go in the right slots — x first, y second.',
        desmos:'Graph 5x + 5y = 40 and the point (2, 6) to confirm the point lands on the line. Then try 5x + ky = 40 with a slider on k and watch the line swing until it catches the point.',
        desmosLatex:['5x+5y=40','(2,6)']
      },
      {
        id:'L2R-12', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Reading the trade-off between two variables from a linear model',
        stem:'A florist spends exactly $240 on roses and tulips for one display. Roses cost $3 each and tulips cost $2 each, so 3r + 2t = 240, where r is the number of roses and t is the number of tulips. If the number of roses bought increases by 2, what is the corresponding change in the number of tulips bought?',
        choices:{A:'It decreases by 3.', B:'It decreases by 1.5.', C:'It increases by 3.', D:'It decreases by 4.'},
        correct:'A',
        expCorrect:'Solve for t: 2t = 240 − 3r, so t = 120 − 1.5r. Each extra rose costs 1.5 tulips, so two extra roses cost 2(1.5) = 3 tulips, and t goes DOWN. Check: r = 40 gives t = 120 − 60 = 60, and r = 42 gives t = 120 − 63 = 57 — three fewer tulips ✓.',
        expWrong:{
          B:'1.5 is the change for ONE more rose. The question adds two roses, so the change doubles to 3.',
          C:'The total spent is fixed, so buying more roses leaves less money for tulips. The coefficient of r in t = 120 − 1.5r is negative, and the count has to fall.',
          D:'4 comes from doubling the tulip price, 2, instead of the rate at which tulips are lost. That rate is the rose price divided by the tulip price, 3/2 = 1.5, per rose.'
        },
        tip:'When two quantities with different prices add up to a fixed total, one unit more of the first costs (price of the first)/(price of the second) units of the second. Solve for the variable you are being asked about and the rate is sitting right in front of it.',
        desmos:'Graph 3x + 2y = 240 and y = 120 − 1.5x. Trace along the line from x = 40 to x = 42 and watch y drop from 60 to 57.',
        desmosLatex:['3x+2y=240','y=120-1.5x','(40,60)','(42,57)']
      },
      {
        id:'L2R-13', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Standard form with an unknown constant: from the x-intercept to the y-intercept',
        stem:'In the xy-plane, the graph of 4x − 3y = k has an x-intercept at (9, 0), where k is a constant. What is the y-coordinate of the y-intercept of this graph?',
        choices:{A:'12', B:'9', C:'−12', D:'−36'},
        correct:'C',
        expCorrect:'Find k first by putting the given intercept into the equation: 4(9) − 3(0) = k, so k = 36 and the line is 4x − 3y = 36. Now set x = 0 for the y-intercept: −3y = 36, so y = −12. Check: 4(0) − 3(−12) = 36 ✓.',
        expWrong:{
          A:'12 drops the minus sign on the −3y term. Dividing 36 by −3 gives −12; a positive divided by a negative is negative.',
          B:'9 is the x-intercept given in the question, handed back. The two intercepts of this line are (9, 0) and (0, −12), and the question asks for the second one.',
          D:'−36 stops at −3y = 36 and only flips the sign. The −3 still has to be divided out, and 36/(−3) = −12.'
        },
        tip:'An unknown constant plus a known point is always the same two-step job: substitute the point to pin down the constant, then answer the actual question with the completed equation. Never answer before the constant is known.',
        desmos:'Graph 4x − 3y = 36 and check both crossings: (9, 0) on the horizontal axis and (0, −12) on the vertical one.',
        desmosLatex:['4x-3y=36','(9,0)','(0,-12)']
      }

    ]
  });
})();
