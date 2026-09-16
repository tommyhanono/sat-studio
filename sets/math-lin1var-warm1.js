/* SAT Studio question set — Math: Algebra — Linear equations in one variable (LIN-01 a LIN-11) */
/* Tier de ENTRADA: 5 Fácil · 4 Media · 2 Difícil, 9 MC + 2 SPR.
   Cubre despeje en uno y en dos pasos, paréntesis, variable de los dos lados,
   fracciones y decimales, literal equations, sin solución / infinitas, y
   traducir una frase a una ecuación. Cada distractor es un error con nombre. */
(function(){
  window.SAT_SETS.push({
    id: 'math-lin1var-warm1',
    title: 'Linear Equations in One Variable — Warm-up',
    section: 'math',
    level: 'Fácil',
    description: 'One-variable equations from the ground up: one and two steps, parentheses, variables on both sides, fractions and decimals, solving a formula for a letter, and what "no solution" actually means.',
    minutes: 16,
    questions: [
      {
        id:'LIN-01', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Solving a two-step linear equation',
        stem:'If 4x + 9 = 33, what is the value of x?',
        choices:{A:'6', B:'10.5', C:'20', D:'24'},
        correct:'A',
        expCorrect:'Undo the addition first: subtract 9 from both sides, 4x = 33 − 9 = 24. Now undo the multiplication: divide both sides by 4, x = 24/4 = 6. (Check: 4(6) + 9 = 24 + 9 = 33 ✓.)',
        expWrong:{
          B:'10.5 comes from ADDING 9 instead of subtracting it: (33 + 9)/4 = 42/4. A term that is added on the left leaves by subtracting on the right.',
          C:'20 comes from subtracting the 4 instead of dividing by it: 24 − 4 = 20. The 4 is multiplying x, so only division removes it.',
          D:'24 is the value of 4x, not of x. That is the penultimate step — one division by 4 short of the answer.'
        },
        tip:'Undo the operations in reverse order: first whatever is ADDED or SUBTRACTED, then whatever MULTIPLIES the variable. A number that multiplies comes off by dividing, never by subtracting.',
        desmos:'Graph y = 4x + 9 and y = 33. The x of the intersection point is the solution: x = 6.',
        desmosLatex:['y=4x+9','y=33']
      },
      {
        id:'LIN-02', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Solving a one-step equation with a negative coefficient',
        stem:'If −8x = 56, what is the value of x?',
        choices:{A:'−448', B:'−7', C:'7', D:'64'},
        correct:'B',
        expCorrect:'The −8 is multiplying x, so divide both sides by −8: x = 56/(−8) = −7. A positive divided by a negative is negative. (Check: −8(−7) = 56 ✓.)',
        expWrong:{
          A:'−448 comes from MULTIPLYING by −8 instead of dividing: 56 × (−8). Multiplication is what is already happening to x; you undo it by dividing.',
          C:'7 drops the negative sign. Only 56/8 was computed; the coefficient is −8, and a positive divided by a negative has to be negative.',
          D:'64 treats −8x as "x minus 8" and adds 8 to both sides. There is no subtraction here: −8x means −8 TIMES x.'
        },
        tip:'A number written right next to the variable is multiplying it, so it leaves by division — sign included. Divide by the whole coefficient, −8, not just by 8.',
        desmos:'Graph y = −8x and y = 56 and look at where they cross: the x-coordinate is −7, on the left of the y-axis.',
        desmosLatex:['y=-8x','y=56']
      },
      {
        id:'LIN-03', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear equation with the variable on both sides',
        stem:'If 5x + 12 = 2x + 27, what is the value of x?',
        choices:{A:'3', B:'5', C:'13', D:'15'},
        correct:'B',
        expCorrect:'Subtract 2x from both sides to get the variable on one side only: 3x + 12 = 27. Subtract 12: 3x = 15. Divide by 3: x = 5. (Check: 5(5) + 12 = 37 and 2(5) + 27 = 37 ✓.)',
        expWrong:{
          A:'3 divides by the coefficient you STARTED with: 15/5. After combining the x-terms the coefficient is 3, so the last step is 15/3.',
          C:'13 adds the 12 instead of subtracting it: (27 + 12)/3 = 39/3. The +12 is on the left, so it leaves by subtracting 12 from both sides.',
          D:'15 is the value of 3x, not of x. One division by 3 is still missing.'
        },
        tip:'With x on both sides, subtract the SMALLER x-term from both sides so the coefficient stays positive. Then divide by the coefficient you end up with, not the one you began with.',
        desmos:'Graph y = 5x + 12 and y = 2x + 27. Two lines with different slopes cross exactly once, here at x = 5.',
        desmosLatex:['y=5x+12','y=2x+27']
      },
      {
        id:'LIN-04', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Translating a sentence into a linear equation',
        stem:'Five less than three times a number n is equal to 31. Which equation represents this relationship?',
        choices:{A:'3n + 5 = 31', B:'3(n − 5) = 31', C:'5 − 3n = 31', D:'3n − 5 = 31'},
        correct:'D',
        expCorrect:'"Three times a number" is 3n. "Five less than 3n" means you start at 3n and take 5 away, so it is 3n − 5. Setting that equal to 31 gives 3n − 5 = 31. (Solving it: 3n = 36, n = 12, and 3(12) − 5 = 36 − 5 = 31 ✓.)',
        expWrong:{
          A:'3n + 5 = 31 reads "less" as addition. "Less than" removes an amount, so the 5 is subtracted.',
          B:'3(n − 5) = 31 subtracts the 5 BEFORE multiplying, which is "three times five less than a number". Here the tripling happens first and only then the 5 comes off.',
          C:'5 − 3n = 31 has the subtraction backwards. "A less than B" is always B − A, so the 5 is what gets taken away, not what you take away from.'
        },
        tip:'"A less than B" comes out as B − A: the phrase says the subtracted amount FIRST but writes it SECOND. Translate piece by piece, then test the equation with a number.',
        desmos:'Graph y = 3x − 5 and y = 31: they meet at x = 12, which is the number the sentence describes.',
        desmosLatex:['y=3x-5','y=31']
      },
      {
        id:'LIN-05', type:'spr', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear equation with a fraction',
        stem:'If x/4 + 5 = 12, what is the value of x?',
        answer:'28',
        expCorrect:'Subtract 5 from both sides: x/4 = 7. Here x is DIVIDED by 4, so undo that by multiplying both sides by 4: x = 7 × 4 = 28. (Check: 28/4 + 5 = 7 + 5 = 12 ✓.) Answer: 28.',
        tip:'A variable divided by a number comes free by MULTIPLYING both sides by that number — and only after the constant has been moved. Multiplying by 4 to cancel a /4 is the same idea as dividing by 4 to cancel a 4x.',
        desmos:'Graph y = x/4 + 5 and y = 12 and read the x-coordinate of the crossing point.',
        desmosLatex:['y=x/4+5','y=12']
      },
      {
        id:'LIN-06', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equation with parentheses and variables on both sides',
        stem:'If 3(x + 4) = 5x − 6, what is the value of x?',
        choices:{A:'3', B:'5', C:'9', D:'18'},
        correct:'C',
        expCorrect:'Distribute the 3 to BOTH terms inside: 3x + 12 = 5x − 6. Subtract 3x from both sides: 12 = 2x − 6. Add 6 to both sides: 18 = 2x. Divide by 2: x = 9. (Check: 3(9 + 4) = 3(13) = 39 and 5(9) − 6 = 45 − 6 = 39 ✓.)',
        expWrong:{
          A:'3 comes from subtracting the 6 instead of adding it: 12 − 6 = 2x gives 6 = 2x. The 6 is being subtracted on the right, so it moves by ADDING 6 to both sides.',
          B:'5 comes from distributing the 3 only to the x: 3x + 4 = 5x − 6 gives 10 = 2x. The 3 multiplies every term inside the parentheses, so the 4 becomes 12.',
          D:'18 is the value of 2x, not of x. The equation reached 18 = 2x, and that last division by 2 is still pending.'
        },
        tip:'Clear the parentheses first, multiplying EVERY term inside, and only then move things across. A term that is subtracted on one side is added on the other.',
        desmos:'Graph y = 3(x + 4) and y = 5x − 6 and find the intersection: x = 9, and both lines pass through y = 39 there.',
        desmosLatex:['y=3(x+4)','y=5x-6']
      },
      {
        id:'LIN-07', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Distributing a negative over parentheses',
        stem:'If 12 − 3(x − 2) = 6, what is the value of x?',
        choices:{A:'−4', B:'0', C:'4', D:'12'},
        correct:'C',
        expCorrect:'The minus sign belongs to the 3, so the factor is −3: −3(x − 2) = −3x + 6. The equation becomes 12 − 3x + 6 = 6, that is 18 − 3x = 6. Subtract 18: −3x = −12. Divide by −3: x = 4. (Check: 12 − 3(4 − 2) = 12 − 3(2) = 12 − 6 = 6 ✓.)',
        expWrong:{
          A:'−4 keeps a stray negative at the end. From −3x = −12, dividing a negative by a negative gives a POSITIVE: x = +4.',
          B:'0 comes from distributing as −3x − 6: the second sign was not flipped. Since −3 × (−2) = +6, the equation is 18 − 3x = 6, not 6 − 3x = 6.',
          D:'12 is the value of 3x, not of x. After −3x = −12 you still have to divide by 3 (and the two negatives cancel).'
        },
        tip:'A minus in front of parentheses multiplies EVERY term inside and flips each sign: −3(x − 2) = −3x + 6. Do the distribution before combining anything, and remember that negative divided by negative is positive.',
        desmos:'Graph y = 12 − 3(x − 2) and y = 6 and read the crossing point; the line goes DOWN because the slope is −3.',
        desmosLatex:['y=12-3(x-2)','y=6']
      },
      {
        id:'LIN-08', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear equation with decimals from a context (fixed fee plus a rate)',
        stem:'An arcade charges an entry fee of $8.40 plus $0.35 for each token. Priya paid $50.40 in total for entry and tokens. How many tokens did she buy?',
        choices:{A:'5', B:'12', C:'120', D:'144'},
        correct:'C',
        expCorrect:'Total = entry + price per token × number of tokens, so 8.40 + 0.35n = 50.40. Subtract the entry fee: 0.35n = 42.00. Divide by 0.35 — multiply both numbers by 100 to make it easy: 4200/35 = 120. (Check: 8.40 + 0.35(120) = 8.40 + 42.00 = 50.40 ✓.)',
        expWrong:{
          A:'5 divides the $42 by the ENTRY FEE, 42/8.40. The 8.40 is a one-time charge, not the price of a token; you divide by the per-token rate, 0.35.',
          B:'12 is a decimal slip: 42/3.5 instead of 42/0.35. Moving the decimal one place changes the answer by a factor of 10 — 0.35 is 35 cents, so $42 buys ten times more than 12 tokens.',
          D:'144 is 50.40/0.35: the entry fee was never removed. The $8.40 buys no tokens at all, so it has to come out of the total first.'
        },
        tip:'A one-time charge is a constant and a per-item charge multiplies the variable: total = fixed + rate × n. Take the fixed part out FIRST, then divide by the rate. To divide by a decimal, scale both numbers by 100 and divide whole numbers.',
        desmos:'Graph y = 0.35x + 8.40 and y = 50.40 and read the intersection at x = 120 tokens.',
        desmosLatex:['y=0.35x+8.40','y=50.40']
      },
      {
        id:'LIN-09', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Literal equations (solving a formula for one of its letters)',
        stem:'The perimeter P of a rectangle with length l and width w is given by P = 2l + 2w. Which equation gives w in terms of P and l?',
        choices:{A:'w = (P − 2l)/2', B:'w = (P − l)/2', C:'w = P/2 − 2l', D:'w = (2l − P)/2'},
        correct:'A',
        expCorrect:'Treat every letter except w as if it were a number. Subtract 2l from both sides: P − 2l = 2w. Divide both sides by 2: w = (P − 2l)/2. (Check with numbers: if l = 5 and w = 3, then P = 2(5) + 2(3) = 16, and (16 − 2·5)/2 = 6/2 = 3 ✓.)',
        expWrong:{
          B:'This subtracts l instead of 2l. The formula has 2l, so the whole term 2l leaves — dropping the coefficient removes only half of what the two lengths contribute.',
          C:'Here only the P was divided by 2. Dividing a side by 2 divides EVERY term on it, so the l-term becomes l and not 2l. With l = 5 and P = 16 this gives 8 − 10 = −2, a negative width.',
          D:'The subtraction is reversed. You take 2l away FROM P, so the numerator is P − 2l. With l = 5 and P = 16 this version gives −3.'
        },
        tip:'Solving for a letter uses the exact same steps as solving for x; the other letters just stay as letters. When you divide a side by a number, every term on that side gets divided. Then test the formula with easy numbers.',
        desmos:'Desmos will not isolate w for you, so check with numbers: evaluate (16 − 2*5)/2 and 16/2 − 2*5 and see that only the first returns the width 3.',
        desmosLatex:['(16-2*5)/2','16/2-2*5']
      },
      {
        id:'LIN-10', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Why a linear equation can have no solution',
        stem:'Consider the equation 2(3x − 4) = 6x + 5. Which statement about this equation is true?',
        choices:{
          A:'It has exactly one solution, x = 13, because the −8 moves across and the 6x on each side then cancels out.',
          B:'It has infinitely many solutions, because after distributing, both sides contain exactly the same term, 6x.',
          C:'It has exactly one solution, x = 0, because the x-terms cancel and only the two constants are left over.',
          D:'It has no solution, because after distributing, the x-terms cancel and what is left, −8 = 5, is false.'
        },
        correct:'D',
        expCorrect:'Distribute first: 2(3x − 4) = 6x − 8, so the equation is 6x − 8 = 6x + 5. Subtract 6x from both sides and the variable disappears completely, leaving −8 = 5. That is false no matter what x is, so no number works: the equation has no solution. (Compare: if the right side had been 6x − 8, the leftover would be −8 = −8, true for every x — infinitely many solutions.)',
        expWrong:{
          A:'This cancels the 6x on the right but not on the left. Whatever you subtract, you subtract from BOTH sides: 6x − 8 = 6x + 5 becomes −8 = 5, and no value of x, 13 included, satisfies it.',
          B:'Matching x-terms alone is not enough. Two sides with the same x-term and DIFFERENT constants are parallel lines: never equal. Infinitely many solutions needs the constants to match too.',
          C:'When the x-terms cancel, x = 0 is not the answer — x has left the equation entirely. What remains is a numeric claim, and here it is false, so nothing works.'
        },
        tip:'When the x-terms cancel, read what is left. A FALSE numeric statement (−8 = 5) means no solution; a TRUE one (−8 = −8) means every number is a solution. Same coefficient plus different constants = parallel lines that never meet.',
        desmos:'Graph y = 2(3x − 4) and y = 6x + 5: two parallel lines that never touch. That picture IS "no solution".',
        desmosLatex:['y=2(3x-4)','y=6x+5']
      },
      {
        id:'LIN-11', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Value of a constant that makes an equation have infinitely many solutions',
        stem:'In the equation kx − 12 = 4(x − 3), k is a constant. If the equation has infinitely many solutions, what is the value of k?',
        answer:'4',
        expCorrect:'Distribute the right side: 4(x − 3) = 4x − 12, so the equation reads kx − 12 = 4x − 12. Infinitely many solutions means the two sides are the SAME expression for every x. The constants already match (−12 on both sides), so the x-coefficients have to match as well: k = 4. (Check with k = 4 and x = 7: 4(7) − 12 = 16 and 4(7 − 3) = 16 ✓. With any other k, say k = 5, subtracting 4x leaves x = 0 — a single solution, not infinitely many.) Answer: 4.',
        tip:'Infinitely many solutions = the two sides are the same line: coefficients match AND constants match. If only the coefficients match, there is no solution; if only the constants match, there is exactly one.',
        desmos:'Graph y = 4(x − 3) and y = kx − 12 and drag the k slider: only at k = 4 do the two lines sit exactly on top of each other.',
        desmosLatex:['y=4(x-3)','y=kx-12']
      }
    ]
  });
})();
