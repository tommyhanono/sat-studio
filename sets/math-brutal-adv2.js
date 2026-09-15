/* SAT Studio question set — Math: Advanced Math — Brutal (BV2-01 to BV2-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-brutal-adv2',
    title: 'Exponentials & Rationals — Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Twelve Extreme items on exponential models, rational equations and asymptotes, radical equations, polynomial division and functions defined in pieces: rates read back out of a model, holes that are not asymptotes, and roots that squaring invented.',
    minutes: 20,
    questions: [
      {
        id:'BV2-01', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Exponential decay (reading the rate AND the period out of the model)',
        stem:'The function V defined by V(t) = 18,000(0.86)^(t/4) models the value, in dollars, of a machine t years after it was purchased. According to this model, by what percentage does the value of the machine decrease over the first 12 years after it was purchased?',
        choices:{A:'42%', B:'36.4%', C:'63.6%', D:'14%'},
        correct:'B',
        expCorrect:'Read the model in two pieces. The base 0.86 says each period KEEPS 86% of the value, so it loses 1 − 0.86 = 14%; the exponent t/4 says one period lasts 4 years. Twelve years is 12/4 = 3 periods, so V(12) = 18,000(0.86)³ = 18,000(0.636056) ≈ 11,449 dollars. The value lost is 18,000 − 11,449 = 6,551, and 6,551/18,000 = 0.3639 ≈ 36.4%. Faster check straight from the factor: what is LEFT is 0.86³ ≈ 0.636 = 63.6%, so what is gone is 100% − 63.6% = 36.4% ✓.',
        expWrong:{
          A:'42% adds 14% three times, which treats the decay as if it removed 14% of the ORIGINAL value every period. Exponential decay takes 14% of whatever is left, and each bite is smaller than the one before, so the total loss is less than 42%.',
          C:'63.6% is 0.86³, the fraction of the value that REMAINS after 12 years. The question asks for the decrease: 100% − 63.6% = 36.4%.',
          D:'14% is the loss over ONE period. The t/4 in the exponent makes a period 4 years long, and 12 years holds three of them.'
        },
        tip:'Read an exponential model as (base)^(t/n): the base gives the rate for one period (0.86 → 14% lost, 1.06 → 6% gained) and the n under the t gives the LENGTH of that period. Percent change over several periods is never the per-period percent times the number of periods, and “remaining” plus “lost” always makes 100%.',
        desmos:'Graph y = 18000*0.86^(x/4) and read the value at x = 12: about 11449. Against the starting 18000 that is a loss of about 36.4%, and notice the curve falls more slowly as it goes.',
        desmosLatex:['y=18000*0.86^{x/4}','(12,11449)']
      },
      {
        id:'BV2-02', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Comparing two exponential models (when the smaller one overtakes)',
        stem:'The population of Rivadel is modeled by A(t) = 8,000(1.06)^t and the population of Montara is modeled by B(t) = 12,000(1.02)^t, where t is the number of years after 2020. According to these models, what is the least integer value of t for which the population of Rivadel is greater than the population of Montara?',
        choices:{A:'11', B:'10', C:'7', D:'17'},
        correct:'A',
        expCorrect:'Divide one model by the other instead of solving them separately: 8,000(1.06)^t > 12,000(1.02)^t → (1.06/1.02)^t > 12,000/8,000 = 1.5 → (1.03922)^t > 1.5. Taking logs, t > log(1.5)/log(1.03922) ≈ 0.40546/0.03847 ≈ 10.54, so the least INTEGER is t = 11. Check both sides of the boundary: at t = 10, Rivadel ≈ 8,000(1.7908) ≈ 14,327 and Montara ≈ 12,000(1.2190) ≈ 14,628, so Rivadel is still behind; at t = 11, Rivadel ≈ 15,186 and Montara ≈ 14,920 ✓.',
        expWrong:{
          B:'10 is the crossing value 10.54 with the decimal chopped off. At t = 10 Rivadel is still about 300 people short, so it fails the condition. A “least integer” answer above a boundary rounds UP, even from 10.04.',
          C:'7 solves 8,000(1.06)^t = 12,000, which treats Montara as a fixed target. Montara is growing too, so the gap takes longer to close.',
          D:'17 is linear reasoning: 6% of 8,000 is 480 a year and 2% of 12,000 is 240 a year, so 240t > 4,000 gives t > 16.7. Those yearly amounts are not constant — each year the percent applies to a larger population.'
        },
        tip:'To compare two exponential models, divide one by the other: the two bases collapse into one base (1.06/1.02) and the two starting values into one ratio. Then remember which way to round — “least integer for which it is greater” always rounds the boundary UP.',
        desmos:'Graph y = 8000*1.06^x and y = 12000*1.02^x and click where they cross: about x = 10.54. The first whole year with the first curve on top is x = 11.',
        desmosLatex:['y=8000*1.06^{x}','y=12000*1.02^{x}']
      },
      {
        id:'BV2-03', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Rational equation with a parameter (simplify first, then find the k with no solution)',
        stem:'In the equation (3x² − 27)/(x² + 6x + 9) = k, k is a constant. There is exactly one value of k for which the equation has no solution. What is that value of k?',
        answer:'3',
        expCorrect:'Factor before doing anything else: 3x² − 27 = 3(x − 3)(x + 3) and x² + 6x + 9 = (x + 3)². One (x + 3) cancels, so for every x ≠ −3 the left side is 3(x − 3)/(x + 3). Clear the denominator: 3(x − 3) = k(x + 3) → 3x − 9 = kx + 3k → x(3 − k) = 3k + 9. If k ≠ 3 this has exactly one solution, x = 3(k + 3)/(3 − k), and that value is never the forbidden −3 (it would force 9 = −9). If k = 3 the equation collapses to 0·x = 18, which nothing satisfies. So k = 3. Check: with k = 3, 3(x − 3) = 3(x + 3) → −9 = 9, impossible ✓. Answer: 3.',
        expWrong:{},
        tip:'Factor and cancel BEFORE solving a rational equation — the fight is much smaller afterwards. And the output a rational function can never produce is the height its graph never reaches: with equal degrees on top and bottom that is the horizontal asymptote, here y = 3/1 = 3.',
        desmos:'Graph y = (3x^2 - 27)/(x^2 + 6x + 9) with y = k on a slider. Every horizontal line cuts the curve exactly once except y = 3, the horizontal asymptote, which never touches it.',
        desmosLatex:['y=(3x^2-27)/(x^2+6x+9)','y=k','k=3']
      },
      {
        id:'BV2-04', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Rational equation whose only candidate root is extraneous',
        stem:'What is the solution to the equation 2x/(x − 5) = 3 + 10/(x − 5) ?',
        choices:{A:'x = 5', B:'x = 13/2', C:'There is no solution.', D:'x = −5'},
        correct:'C',
        expCorrect:'Write the excluded value first: x ≠ 5, because that zeroes both denominators. Now multiply EVERY term by (x − 5): 2x = 3(x − 5) + 10 → 2x = 3x − 15 + 10 → 2x = 3x − 5 → −x = −5 → x = 5. That is precisely the value the domain forbids, so it is extraneous and cannot be a solution. No candidate survives, so the equation has no solution. Seen another way: for x ≠ 5 the left side is 2x/(x − 5) and the right side is (3x − 5)/(x − 5), and their difference is a constant −1, so the two sides are never equal ✓.',
        expWrong:{
          A:'x = 5 is exactly what the algebra produces, and that is the trap. Substitute it and both fractions become 10/0, which is undefined. An extraneous root is not a solution.',
          B:'x = 13/2 comes from multiplying only the terms that already HAD a denominator: 2x = 3 + 10. The 3 has no denominator, so it is the term most likely to be skipped — and it still has to be multiplied by (x − 5).',
          D:'x = −5 is a sign slip in the last step: −x = −5 divides by −1 to give x = +5, not −5.'
        },
        tip:'List the excluded values first, solve second, compare third. When the only candidate is on the excluded list, “no solution” is the honest answer — a rational equation is allowed to have none, and on the SAT that option is offered because it is sometimes right.',
        desmos:'Graph y = 2x/(x - 5) and y = 3 + 10/(x - 5). The first curve is the second one shifted down exactly 1 unit, so they never meet, and x = 5 is a vertical asymptote of both.',
        desmosLatex:['y=2x/(x-5)','y=3+10/(x-5)']
      },
      {
        id:'BV2-05', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Asymptotes of a rational function when a shared factor makes a hole',
        stem:'The function f is defined by f(x) = (x² − 2x − 15)/(x² − 9). In the xy-plane, the graph of y = f(x) has exactly one vertical asymptote, the line x = a, and one horizontal asymptote, the line y = b. What is the value of a + b?',
        choices:{A:'−2', B:'3', C:'14/3', D:'4'},
        correct:'D',
        expCorrect:'Factor both parts: x² − 2x − 15 = (x − 5)(x + 3) and x² − 9 = (x − 3)(x + 3). The factor (x + 3) is shared, so it cancels and f(x) = (x − 5)/(x − 3) for every x ≠ −3. A cancelled factor leaves a HOLE, not an asymptote: at x = −3 the single point (−3, 4/3) is missing and the curve continues normally on both sides. The only zero of the denominator that survives is x = 3, so a = 3. Top and bottom have the same degree, so the horizontal asymptote is the ratio of the LEADING coefficients, 1/1, giving b = 1. Therefore a + b = 3 + 1 = 4. Check the horizontal behavior: f(1000) = 995/997 ≈ 0.998, closing in on 1 ✓.',
        expWrong:{
          A:'−2 uses a = −3, treating the cancelled factor as an asymptote. Where a factor cancels the graph has a hole; the function does not blow up there.',
          B:'3 is a by itself (or a + b with b taken as 0). y = 0 is the horizontal asymptote only when the numerator has a SMALLER degree than the denominator; here the degrees are equal.',
          C:'14/3 reads the horizontal asymptote off the constant terms, −15/−9 = 5/3. For equal degrees the asymptote comes from the leading coefficients, not the constants.'
        },
        tip:'Factor numerator and denominator before deciding anything. A zero of the denominator that cancels is a hole; one that survives is a vertical asymptote. For the horizontal asymptote compare degrees: bottom bigger → y = 0; equal → ratio of leading coefficients; top bigger → no horizontal asymptote at all.',
        desmos:'Graph y = (x^2 - 2x - 15)/(x^2 - 9). The curve blows up only at x = 3; at x = -3 it looks perfectly ordinary even though the point (-3, 4/3) is missing. Zoom out and it flattens toward y = 1.',
        desmosLatex:['y=(x^2-2x-15)/(x^2-9)','y=1','x=3']
      },
      {
        id:'BV2-06', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Choosing a parameter so a shared factor removes one vertical asymptote',
        stem:'The function f is defined by f(x) = (3x² + kx − 2)/(2x² − 8), where k is a constant. In the xy-plane, the graph of y = f(x) has exactly one vertical asymptote, the line x = −2. What is the value of k?',
        choices:{A:'−5', B:'5', C:'−2', D:'−10'},
        correct:'A',
        expCorrect:'The denominator factors as 2x² − 8 = 2(x − 2)(x + 2), so it is zero at x = 2 and at x = −2. Two zeros but only ONE asymptote means one of them has to cancel, and since the surviving asymptote is x = −2, the factor that must cancel is (x − 2). That happens exactly when the numerator is zero at x = 2: 3(2)² + k(2) − 2 = 0 → 12 + 2k − 2 = 0 → 2k = −10 → k = −5. Check: 3x² − 5x − 2 = (3x + 1)(x − 2), so f(x) = (3x + 1)(x − 2)/[2(x − 2)(x + 2)] = (3x + 1)/[2(x + 2)] — a hole at x = 2 and a single vertical asymptote at x = −2 ✓.',
        expWrong:{
          B:'5 makes the numerator vanish at x = −2 instead: 3(−2)² + k(−2) − 2 = 0 gives k = 5. That cancels the wrong factor, leaving the hole at x = −2 and the asymptote at x = 2, the exact opposite of what the stem describes.',
          C:'−2 is where the asymptote sits, a number copied straight out of the stem. It is the location, not the value of k.',
          D:'−10 stops at 2k = −10. One step is left: divide by 2.'
        },
        tip:'A zero of the denominator becomes a vertical asymptote unless the numerator kills it there. So “remove the asymptote at x = c” always means “make the numerator zero at x = c”. Substitute the zero that has to DISAPPEAR into the numerator, set it equal to 0, and solve for the parameter.',
        desmos:'Graph y = (3x^2 + kx - 2)/(2x^2 - 8) with a slider for k. At k = -5 the blow-up at x = 2 disappears and only the wall at x = -2 is left; at k = 5 the opposite happens.',
        desmosLatex:['y=(3x^2+kx-2)/(2x^2-8)','k=-5']
      },
      {
        id:'BV2-07', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Radical equation (squaring invents a root that fails the check)',
        stem:'What is the sum of all values of x that satisfy the equation √(3x + 10) = x + 2 ?',
        choices:{A:'−1', B:'2', C:'−3', D:'3'},
        correct:'B',
        expCorrect:'Square both sides: 3x + 10 = (x + 2)² = x² + 4x + 4 → 0 = x² + x − 6 = (x + 3)(x − 2), so the candidates are x = −3 and x = 2. Squaring is not reversible, so test both in the ORIGINAL equation. x = 2: √16 = 4 and 2 + 2 = 4 ✓. x = −3: √1 = 1 but −3 + 2 = −1, and 1 ≠ −1 ✗ — the radical symbol never returns a negative value, so it could not have worked. Only x = 2 satisfies the equation, so the sum of all values that satisfy it is 2.',
        expWrong:{
          A:'−1 adds both candidates, −3 + 2. Only values that pass the check belong in the sum, and x = −3 is not a solution of the original equation.',
          C:'−3 is the candidate that fails. It satisfies the SQUARED equation but not the original one, because √1 = 1 while the right side there is −1.',
          D:'3 comes from squaring term by term, as if (x + 2)² = x² + 4. That gives x² − 3x − 6 = 0, whose roots add to 3. The square of a binomial has a middle term: (x + 2)² = x² + 4x + 4.'
        },
        tip:'After squaring, every candidate must be substituted back. A one-second pre-check: √(anything) is never negative, so any candidate that makes the other side negative is dead on arrival. And when a question asks for “the sum of all values”, make sure the extraneous one is not sitting in that sum.',
        desmos:'Graph y = sqrt(3x + 10) and y = x + 2: they cross only once, at (2, 4). Near x = -3 the line is below the x-axis while the radical curve is above it, which is exactly why that candidate fails.',
        desmosLatex:['y=\\sqrt{3x+10}','y=x+2']
      },
      {
        id:'BV2-08', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Radical equation (isolate before squaring, then discard the failing root)',
        stem:'What is the solution to the equation x − √(x + 7) = 5 ?',
        answer:'9',
        expCorrect:'Isolate the radical before squaring anything: x − 5 = √(x + 7). Now square both sides: (x − 5)² = x + 7 → x² − 10x + 25 = x + 7 → x² − 11x + 18 = 0 → (x − 2)(x − 9) = 0, so the candidates are x = 2 and x = 9. Test both in the original equation. x = 9: 9 − √16 = 9 − 4 = 5 ✓. x = 2: 2 − √9 = 2 − 3 = −1, not 5 ✗ (it would need √9 to be −3). The only solution is x = 9.',
        expWrong:{},
        tip:'Get the radical alone on one side BEFORE squaring — squaring x − √(x + 7) as written leaves a radical behind and doubles the work. Then square, solve, and substitute every candidate back, because squaring is what created the extra root in the first place.',
        desmos:'Graph y = x - sqrt(x + 7) and y = 5: they meet only at x = 9. At x = 2 the first curve is at -1, nowhere near 5, which is what marks that candidate as extraneous.',
        desmosLatex:['y=x-\\sqrt{x+7}','y=5']
      },
      {
        id:'BV2-09', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Remainder theorem twice (find the coefficient, then the other remainder)',
        stem:'The polynomial p is defined by p(x) = 2x³ + ax² − 5x + 4, where a is a constant. When p(x) is divided by (x − 1), the remainder is 8. What is the remainder when p(x) is divided by (x + 2)?',
        answer:'26',
        expCorrect:'The remainder theorem says the remainder of p(x) ÷ (x − c) is just p(c). Use the given information first, with c = 1: p(1) = 2 + a − 5 + 4 = a + 1, and that equals 8, so a = 7 and p(x) = 2x³ + 7x² − 5x + 4. The question asks about (x + 2), which is (x − (−2)), so now c = −2: p(−2) = 2(−8) + 7(4) − 5(−2) + 4 = −16 + 28 + 10 + 4 = 26. Check the first condition with a = 7: p(1) = 2 + 7 − 5 + 4 = 8 ✓. Answer: 26.',
        expWrong:{},
        tip:'Dividing by (x − c) leaves the remainder p(c), so no long division is needed. Two traps live here: the sign — for (x + 2) you evaluate at −2, not at 2 — and stopping at the parameter. Finding a is only the first half of the work.',
        desmos:'Define f(x) = 2x^3 + ax^2 - 5x + 4 with a slider for a and watch the value of f(1): it reads 8 when a = 7. Then read f(-2), which is 26.',
        desmosLatex:['f(x)=2x^3+ax^2-5x+4','a=7','f(-2)']
      },
      {
        id:'BV2-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Polynomial division (quotient plus remainder over divisor)',
        stem:'Which of the following expressions is equivalent to (2x³ + 7x² − 3x + 5)/(x + 4), where x ≠ −4?',
        choices:{
          A:'2x² + 15x + 57 + 233/(x + 4)',
          B:'2x² − x + 1',
          C:'2x² − x + 1 + 5/(x + 4)',
          D:'2x² − x + 1 + 1/(x + 4)'
        },
        correct:'D',
        expCorrect:'Divide 2x³ + 7x² − 3x + 5 by x + 4. In synthetic division the divisor (x + 4) is (x − (−4)), so the number carried through is −4. Bring down 2; 2(−4) = −8 and 7 + (−8) = −1; (−1)(−4) = 4 and −3 + 4 = 1; (1)(−4) = −4 and 5 + (−4) = 1. The quotient is 2x² − x + 1 with a remainder of 1, which is written 2x² − x + 1 + 1/(x + 4). Check by rebuilding: (x + 4)(2x² − x + 1) = 2x³ + 7x² − 3x + 4, and adding the remainder 1 gives back 2x³ + 7x² − 3x + 5 ✓. Second check: the remainder has to equal p(−4) = −128 + 112 + 12 + 5 = 1 ✓.',
        expWrong:{
          A:'This is what synthetic division gives if you carry +4 instead of −4. The divisor (x + 4) is (x − (−4)), so the number you use is the ZERO of the divisor, −4.',
          B:'2x² − x + 1 is only the quotient. The division does not come out even — there is a remainder of 1 — so the term 1/(x + 4) has to stay, and without it the two expressions differ everywhere.',
          C:'The 5 here is the constant term of the original polynomial, not the remainder. The remainder is what is left at the END of the division, which equals p(−4) = 1.'
        },
        tip:'Every division can be written as quotient + remainder/divisor, and two checks cost seconds: the remainder must equal p(c) for a divisor (x − c), and (quotient)(divisor) + remainder must rebuild the original polynomial exactly.',
        desmos:'Graph y = (2x^3 + 7x^2 - 3x + 5)/(x + 4) and y = 2x^2 - x + 1 + 1/(x + 4): one curve lands exactly on the other. Try y = 2x^2 - x + 1 alone and watch it drift away near x = -4.',
        desmosLatex:['y=(2x^3+7x^2-3x+5)/(x+4)','y=2x^2-x+1+1/(x+4)']
      },
      {
        id:'BV2-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Piecewise function (matching the pieces at the boundary, then using the right branch)',
        stem:'The function f is defined by f(x) = 4x + c for x < 3 and by f(x) = x² − 4x + 9 for x ≥ 3, where c is a constant. In the xy-plane, the graph of y = f(x) is a single unbroken curve, so the two pieces meet at x = 3. What is the value of f(−1)?',
        choices:{A:'14', B:'−6', C:'−10', D:'−4'},
        correct:'C',
        expCorrect:'Unbroken at x = 3 means both rules give the same output there. The quadratic rule owns x = 3: 3² − 4(3) + 9 = 9 − 12 + 9 = 6. So the linear rule has to arrive at 6 as well: 4(3) + c = 6 → 12 + c = 6 → c = −6, and the first piece is 4x − 6. Now answer what was actually asked. Since −1 < 3, f(−1) uses the FIRST rule: f(−1) = 4(−1) − 6 = −4 − 6 = −10. Check the join once more: 4(3) − 6 = 6 and 3² − 4(3) + 9 = 6 ✓.',
        expWrong:{
          A:'14 evaluates the quadratic rule at x = −1: 1 + 4 + 9 = 14. That rule only applies for x ≥ 3, and −1 is far to the left of the boundary.',
          B:'−6 is c, the constant found on the way. It is the intermediate result, not f(−1).',
          D:'−4 is 4(−1) with c left out. Once c = −6 is known it has to be added: 4(−1) − 6 = −10.'
        },
        tip:'For a piecewise function that has to connect, set the two rules equal AT the boundary value and solve for the parameter. Then check which inequality your input satisfies before evaluating — the whole danger of a piecewise definition is that the wrong branch hands you a perfectly clean, perfectly wrong number.',
        desmos:'Graph y = 4x - 6 and y = x^2 - 4x + 9 and add the point (3, 6): both curves pass through it, which is what “no break” means. Then read the line at x = -1 to get -10.',
        desmosLatex:['y=4x-6','y=x^2-4x+9','(3,6)']
      },
      {
        id:'BV2-12', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'System of a cubic and a line (identifying WHICH intersection is asked for)',
        stem:'In the xy-plane, the graph of y = x³ − 2x² − 2x + 4 and the line y = 3x − 2 intersect at exactly three points. What is the y-coordinate of the intersection point that is farthest to the left?',
        choices:{A:'−2', B:'−8', C:'1', D:'7'},
        correct:'B',
        expCorrect:'Set the two expressions equal and move everything to one side: x³ − 2x² − 2x + 4 = 3x − 2 → x³ − 2x² − 5x + 6 = 0. Test the small factors of 6: x = 1 gives 1 − 2 − 5 + 6 = 0 ✓, so (x − 1) divides it and x³ − 2x² − 5x + 6 = (x − 1)(x² − x − 6) = (x − 1)(x − 3)(x + 2). The three x-coordinates are 1, 3 and −2. “Farthest to the left” means the SMALLEST x, which is −2. Get the y-coordinate from the line, the easier of the two equations: y = 3(−2) − 2 = −8. Check in the cubic: (−2)³ − 2(−2)² − 2(−2) + 4 = −8 − 8 + 4 + 4 = −8 ✓.',
        expWrong:{
          A:'−2 is the x-coordinate of that point. The question asks for its y-coordinate, and the line gives 3(−2) − 2 = −8.',
          C:'1 is the y-coordinate at x = 1, the MIDDLE intersection — and usually the first root anyone finds by testing. Farthest to the left is the smallest x-value, x = −2.',
          D:'7 is the y-coordinate at x = 3, the point farthest to the RIGHT. The three points are (−2, −8), (1, 1) and (3, 7).'
        },
        tip:'For a polynomial-and-line system, subtract the line from the polynomial and factor what is left: its roots are the x-coordinates of every intersection. Then read the question again, because it usually wants a y-value, one specific point, or a sum — almost never the list of roots you just produced.',
        desmos:'Graph y = x^3 - 2x^2 - 2x + 4 and y = 3x - 2 and click each crossing: (-2, -8), (1, 1) and (3, 7). The leftmost one is (-2, -8).',
        desmosLatex:['y=x^3-2x^2-2x+4','y=3x-2']
      }
    ]
  });
})();
