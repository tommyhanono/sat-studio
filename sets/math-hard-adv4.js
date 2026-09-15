/* SAT Studio question set — Math: Exponential Models — Hard (HV4-01 to HV4-12) */
(function(){
  var TBL_RATIO =
    '<table><thead><tr><th>x</th><th>1</th><th>2</th><th>3</th><th>4</th></tr></thead>' +
    '<tbody><tr><th>f(x)</th><td>48</td><td>72</td><td>108</td><td>162</td></tr></tbody></table>';

  var TBL_FOAM =
    '<table><thead><tr><th>t (minutes)</th><th>0</th><th>3</th><th>6</th><th>9</th></tr></thead>' +
    '<tbody><tr><th>V (liters)</th><td>800</td><td>600</td><td>450</td><td>337.5</td></tr></tbody></table>';

  window.SAT_SETS.push({
    id: 'math-hard-adv4',
    title: 'Exponential Models — Hard',
    section: 'math',
    level: 'Difícil',
    description: 'Hard exponential work: building a model from a described situation, compounding more often than once a year, half-life and doubling time, exponential versus linear, same-base equations, and reading a model off a table.',
    minutes: 20,
    questions: [
      {
        id:'HV4-01', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Writing an exponential model (percent decrease, with an index offset)',
        stem:'A ball is dropped from a window. Its first bounce reaches a height of 480 centimeters, and each bounce after that reaches a height 8% lower than the height of the bounce before it. Which function H gives the height, in centimeters, of the nth bounce, where n = 1 is the first bounce?',
        choices:{
          A:'H(n) = 480(0.92)^n',
          B:'H(n) = 480(1.08)^(n − 1)',
          C:'H(n) = 480(0.92)^(n − 1)',
          D:'H(n) = 480(0.08)^(n − 1)'
        },
        correct:'C',
        expCorrect:'Two decisions. First the base: a height 8% LOWER keeps 100% − 8% = 92% of the previous height, so the base is 0.92. Then the exponent: it has to count how many bounces have already happened, and the first bounce has had none, so the exponent must be 0 when n = 1 — that is n − 1. The model is H(n) = 480(0.92)^(n − 1). (Check n = 1: 480(0.92)⁰ = 480 ✓; n = 2: 480(0.92) = 441.6, which is 8% below 480 ✓.)',
        expWrong:{
          A:'With the exponent n the first bounce would be 480(0.92) = 441.6 cm, but the first bounce is 480 cm. Because the count starts at n = 1, the exponent is n − 1.',
          B:'1.08 makes each bounce 8% HIGHER than the one before, so the ball would climb forever. A decrease of 8% means multiplying by 1 − 0.08 = 0.92.',
          D:'0.08 is the fraction LOST on each bounce, not the fraction kept. The new height is 92% of the old one, so the base is 0.92.'
        },
        tip:'Build an exponential model in two separate moves: the base is 1 + r for an increase and 1 − r for a decrease, and the exponent counts how many changes have already happened. If the first listed term is n = 1 and has had no change yet, the exponent is n − 1, not n.',
        desmos:'Graph y=480(0.92)^(x-1) and y=480(0.92)^x and look at x=1: only the first one gives 480, so the answer is the one with the exponent n − 1.',
        desmosLatex:['y=480(0.92)^{x-1}','y=480(0.92)^{x}']
      },
      {
        id:'HV4-02', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Writing an exponential model when the period is shorter than the unit',
        stem:'A community center had 1,250 members at the start of 2024, and the number of members increases by 6% every 4 months. Which function E gives the number of members t years after the start of 2024?',
        choices:{
          A:'E(t) = 1,250(1.06)^(3t)',
          B:'E(t) = 1,250(1.06)^(t/3)',
          C:'E(t) = 1,250(1.06)^(4t)',
          D:'E(t) = 1,250(1.18)^t'
        },
        correct:'A',
        expCorrect:'An increase of 6% multiplies by 1.06 once per period, and the period here is 4 months. The variable t is in YEARS, and one year holds 12/4 = 3 of those periods, so t years hold 3t of them: E(t) = 1,250(1.06)^(3t). (Check t = 1: 1,250(1.06)³ = 1,250(1.191016) ≈ 1,489 members, which is exactly three 6% increases ✓.)',
        expWrong:{
          B:'The exponent t/3 says one 6% increase every 3 YEARS, which is far slower than reality. A period shorter than the unit gives MORE periods per unit, so the exponent grows faster than t, not slower.',
          C:'4t reuses the 4 from "4 months" as the number of periods per year. What matters is how many 4-month periods fit inside a year: 12/4 = 3, not 4.',
          D:'Applying 6% three times is not one 18% increase: 1.06³ = 1.191016, so the yearly factor is about 1.191. Percent changes compound, they do not add.'
        },
        tip:'Match the exponent to the period. If the change happens once every p units and t is measured in those same units, the exponent is t/p. If t is in the BIGGER unit (years) and the period is in a smaller one (months), first count how many periods fit in one unit and multiply t by that count.',
        desmos:'Graph y=1250(1.06)^(3x) and y=1250(1.18)^x and read x=1: about 1,489 versus 1,475, which shows three 6% increases beat one 18% increase and picks out the (1.06)^(3t) model.',
        desmosLatex:['y=1250(1.06)^{3x}','y=1250(1.18)^{x}']
      },
      {
        id:'HV4-03', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Compound interest (annual rate compounded monthly)',
        stem:'An account is opened with $3,500 and earns an annual interest rate of 4.8%, compounded monthly. Which function M gives the value of the account, in dollars, t years after it is opened?',
        choices:{
          A:'M(t) = 3,500(1 + 0.048)^(12t)',
          B:'M(t) = 3,500(1 + 0.048/12)^t',
          C:'M(t) = 3,500(1 + 0.048 × 12)^(12t)',
          D:'M(t) = 3,500(1 + 0.048/12)^(12t)'
        },
        correct:'D',
        expCorrect:'Compounded monthly means the yearly rate is cut into 12 equal pieces and applied 12 times a year. Each month the balance is multiplied by 1 + 0.048/12 = 1.004, and t years contain 12t months, so M(t) = 3,500(1 + 0.048/12)^(12t). (Check t = 1: 3,500(1.004)¹² ≈ 3,500(1.04907) ≈ $3,671.75, a little more than the $3,668 that one 4.8% payment would give ✓.)',
        expWrong:{
          A:'This keeps the full 4.8% and still applies it 12 times a year: the balance would be multiplied by 1.048¹² ≈ 1.755 in a single year, a 75% return. The rate has to be divided by 12 first.',
          B:'Dividing the rate by 12 is the right half of the move, but the exponent t counts years. With monthly compounding the number of times interest is applied is 12t.',
          C:'Multiplying the rate by 12 inflates it instead of splitting it: 0.048 × 12 = 0.576, a 57.6% rate per month. Compounding more often divides the rate.'
        },
        tip:'For a nominal annual rate r compounded n times a year, the base is (1 + r/n) and the exponent is nt. The two moves always come as a pair: the rate is DIVIDED by n and the exponent is MULTIPLIED by n. Doing only one of them is the classic error.',
        desmos:'Graph y=3500(1+0.048/12)^(12x) and y=3500(1.048)^x and read x=10: about 5,651 versus about 5,593, so the monthly model is the slightly higher curve.',
        desmosLatex:['y=3500(1+0.048/12)^{12x}','y=3500(1.048)^{x}']
      },
      {
        id:'HV4-04', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Effective yearly growth when compounding is quarterly',
        stem:'A bank offers a savings account with an annual interest rate of 6%, compounded quarterly. If no money is added to or removed from the account, which of the following is closest to the percent by which the balance grows over one full year?',
        choices:{A:'6.00%', B:'6.14%', C:'6.09%', D:'1.50%'},
        correct:'B',
        expCorrect:'Quarterly means four applications a year at 6%/4 = 1.5% each, so over one year the balance is multiplied by (1 + 0.015)⁴ = 1.06136. That is a growth of 0.06136, or about 6.14%. It beats the stated 6% because the interest paid in the first quarter earns interest during the other three. (Check: 1.015² = 1.030225 and 1.030225² = 1.061364 ✓.)',
        expWrong:{
          A:'6.00% would be right only if the interest were paid once, at the end of the year. Paying it four times lets earlier interest earn interest, which always pushes the yearly total above the stated rate.',
          C:'6.09% is (1.03)² − 1, which compounds twice a year. Quarterly means four periods of 1.5%, not two periods of 3%.',
          D:'1.50% is the rate for ONE quarter (6% divided by 4). The question asks about a full year, which is four of those periods.'
        },
        tip:'A stated annual rate is nominal. The real one-year growth factor is (1 + r/n)ⁿ, and for n greater than 1 it is always a little above 1 + r. More compounding periods means slightly more growth — never less, and never n times more.',
        desmos:'Type (1+0.06/4)^4 and read 1.06136: the balance is multiplied by about 1.0614 in one year, so the growth is 6.14%.',
        desmosLatex:['(1+0.06/4)^{4}','(1+0.06/2)^{2}']
      },
      {
        id:'HV4-05', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Recovering the half-life from a model whose base is not 1/2',
        stem:'The mass, in milligrams, of a sample of a radioactive isotope is modeled by m(t) = 250(1/4)^(t/26), where t is the number of hours after the sample was first measured. According to this model, what is the half-life of the isotope, in hours? (The half-life is the time it takes for the mass of the sample to be cut in half.)',
        choices:{A:'13', B:'26', C:'52', D:'6.5'},
        correct:'A',
        expCorrect:'Force the base to be 1/2. Since 1/4 = (1/2)², the model becomes m(t) = 250((1/2)²)^(t/26) = 250(1/2)^(2t/26) = 250(1/2)^(t/13). The mass is multiplied by 1/2 once every 13 hours, so the half-life is 13 hours. (Check: m(13) = 250(1/4)^(1/2) = 250(1/2) = 125, exactly half of 250 ✓.)',
        expWrong:{
          B:'26 is how long the sample takes to fall to one QUARTER of its mass, because the base of this model is 1/4. Half is reached earlier than a quarter.',
          C:'52 is two full 26-hour periods, when only 1/16 of the mass is left. More time means less mass, so a number bigger than 26 cannot be the half-life here.',
          D:'6.5 divides 26 by the 4 in the base. But a base of 1/4 means TWO halvings per period, so the 26 hours splits into two, not four: 26/2 = 13.'
        },
        tip:'To read a half-life, rewrite the base as a power of 1/2. In (1/2)^(t/h) the half-life is h. A base of 1/4 is two halvings per period and a base of 1/8 is three, so divide the period by 2 or by 3. Same trick with doubling: a base of 4 is two doublings, a base of 8 is three.',
        desmos:'Graph y=250(1/4)^(x/26) and y=125 and find the intersection at x=13, the half-life.',
        desmosLatex:['y=250(1/4)^{x/26}','y=125']
      },
      {
        id:'HV4-06', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Doubling time used to predict (elapsed-time count, then the increase)',
        stem:'A biologist starts a cell culture with 5,000 cells at 8:00 a.m. on Monday. The number of cells in the culture doubles every 9 hours. According to this model, how many MORE cells are in the culture at 8:00 p.m. on Tuesday than there were at 8:00 a.m. on Monday?',
        answer:'75000',
        expCorrect:'First the elapsed time: from 8:00 a.m. Monday to 8:00 p.m. Monday is 12 hours, plus another 24 hours to 8:00 p.m. Tuesday, for 36 hours in total. At one doubling every 9 hours that is 36/9 = 4 doublings, so the culture holds 5,000 · 2⁴ = 5,000 · 16 = 80,000 cells. The question asks how many MORE, so subtract the starting amount: 80,000 − 5,000 = 75,000. (Check the doublings one at a time: 5,000 → 10,000 → 20,000 → 40,000 → 80,000 ✓.)',
        tip:'Two traps stacked. Count the elapsed time in the same unit the period uses before dividing, and then reread what is being asked: "how many more" is the growth, so the starting amount has to be subtracted at the end. The total is the second-to-last step, not the answer.',
        desmos:'Graph y=5000(2)^(x/9) and read x=36: the curve is at 80,000 cells, and the answer is 80,000 − 5,000 = 75,000.',
        desmosLatex:['y=5000(2)^{x/9}','x=36']
      },
      {
        id:'HV4-07', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponential vs. linear over the same interval (why the crossover exists)',
        stem:'The functions f and g are defined by f(x) = 250 + 45x and g(x) = 250(1.08)^x, where x ≥ 0. Which of the following best describes how the values of f and g compare?',
        choices:{
          A:'f(x) is greater than g(x) for every x greater than 0, because 45 is more than 8% of 250.',
          B:'g(x) is greater than f(x) for every x greater than 0, because exponential growth always beats linear growth.',
          C:'f(x) is greater for small values of x, but past a certain point g(x) is greater and stays greater.',
          D:'g(x) is greater for small values of x, but past a certain point f(x) is greater and stays greater.'
        },
        correct:'C',
        expCorrect:'Both start at 250. The line adds a flat 45 per step; the curve adds 8% of its current value, which at the start is only 8% of 250 = 20 — so f pulls ahead immediately (f(1) = 295 against g(1) = 270). But the 8% is taken of a number that keeps growing, so what g adds per step keeps rising while the line is stuck at 45 forever. At x = 19, f = 1,105 and g ≈ 1,078.9, so f is still ahead; at x = 20, f = 1,150 and g ≈ 1,165.2, so g has passed — and since its per-step gain only keeps growing, it never falls behind again.',
        expWrong:{
          A:'The reason is right at the start (8% of 250 is 20, less than 45), but 8% is charged on a growing amount. Once g passes 45/0.08 = 562.50 it gains more than 45 per step, and from there it closes the gap.',
          B:'An exponential does win in the long run, but not from the first step: f(1) = 295 is bigger than g(1) = 270. It has to catch up first, which here takes about 20 steps.',
          D:'This reverses the order. The exponential is the SLOWER one at the start here — at x = 1 it is 25 behind — and the faster one later.'
        },
        tip:'A line adds the same amount every step; an exponential with base greater than 1 adds the same PERCENT of a growing amount. So a line can lead for a long time, but the exponential always passes it eventually and never falls behind again. The question is when, not whether.',
        desmos:'Graph y=250+45x and y=250(1.08)^x and zoom to x between 15 and 25: they cross between x=19 and x=20, so the curve starts below and ends above.',
        desmosLatex:['y=250+45x','y=250(1.08)^{x}']
      },
      {
        id:'HV4-08', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponential vs. linear (least integer where the curve overtakes the line)',
        stem:'The functions f and g are defined by f(x) = 40x + 120 and g(x) = 15(2)^x, where x ≥ 0. What is the least integer value of x for which g(x) is greater than f(x)?',
        answer:'5',
        expCorrect:'Test consecutive integers. x = 3: g = 15 · 8 = 120 and f = 240, so the line leads. x = 4: g = 15 · 16 = 240 and f = 280 — the line still leads, but the gap has shrunk to 40. x = 5: g = 15 · 32 = 480 and f = 320, so the curve is now ahead. The least integer is 5. (Check the step before: at x = 4, 240 is less than 280, so 4 does not work ✓.)',
        tip:'Doubling beats a fixed increase once the exponential gets large enough, but the crossing is rarely a round number. Evaluate at consecutive integers until the exponential wins, then check the integer just before it — that second check is what keeps the answer from being off by one.',
        desmos:'Graph y=40x+120 and y=15(2)^x and look at the crossing between x=4 and x=5: the first integer where the curve is above the line is x=5.',
        desmosLatex:['y=40x+120','y=15(2)^{x}']
      },
      {
        id:'HV4-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponential equation with a reciprocal base (rewrite both sides in base 2)',
        stem:'If (1/4)^(x + 1) = 8^(2x − 3), what is the value of x?',
        choices:{A:'4', B:'7/8', C:'11/4', D:'−7/8'},
        correct:'B',
        expCorrect:'Write both sides in base 2: 1/4 = 2⁻² and 8 = 2³. The left side is 2^(−2(x + 1)) = 2^(−2x − 2) and the right side is 2^(3(2x − 3)) = 2^(6x − 9). With the same base the exponents must be equal: −2x − 2 = 6x − 9 → −8x = −7 → x = 7/8. (Check: −2(7/8) − 2 = −3.75 and 6(7/8) − 9 = −3.75 ✓.)',
        expWrong:{
          A:'4 comes from setting x + 1 = 2x − 3 right away, without first writing both sides with the same base. Exponents can only be matched when the bases are identical, and 1/4 is not 8.',
          C:'11/4 treats 1/4 as if it were 4, which gives 2^(2x + 2) on the left. A reciprocal flips the sign of the exponent: 1/4 = 2⁻², not 2².',
          D:'−7/8 is a sign slip in the final division: −8x = −7 gives x = +7/8, because a negative divided by a negative is positive.'
        },
        tip:'Rewrite every base as a power of the same prime, distribute the outer exponent across the whole parenthesis, then set the exponents equal. Keep the reciprocals memorized: 1/4 = 2⁻², 1/8 = 2⁻³, 1/9 = 3⁻², 1/27 = 3⁻³.',
        desmos:'Graph y=(1/4)^(x+1) and y=8^(2x-3) and find the intersection at x=0.875, which is 7/8.',
        desmosLatex:['y=(1/4)^{x+1}','y=8^{2x-3}']
      },
      {
        id:'HV4-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponential equation with bases 9 and 27 (distributing the new exponent)',
        stem:'If 9^(x + 3) = 27^(x − 1), what is the value of x?',
        choices:{A:'7', B:'6', C:'−11', D:'9'},
        correct:'D',
        expCorrect:'Both bases are powers of 3: 9 = 3² and 27 = 3³. The equation becomes (3²)^(x + 3) = (3³)^(x − 1), that is 3^(2x + 6) = 3^(3x − 3). Same base, so 2x + 6 = 3x − 3 → x = 9. (Check: 9⁹⁺³ = 9¹² = (3²)¹² = 3²⁴, and 27⁹⁻¹ = 27⁸ = (3³)⁸ = 3²⁴ ✓.)',
        expWrong:{
          A:'7 comes from not distributing the 3 on the right: 3(x − 1) is 3x − 3, not 3x − 1. Solving 2x + 6 = 3x − 1 gives 7.',
          B:'6 comes from not distributing the 2 on the left: 2(x + 3) is 2x + 6, not 2x + 3. Solving 2x + 3 = 3x − 3 gives 6.',
          C:'−11 swaps the two conversions, using 9 = 3³ and 27 = 3². It is the other way around: 9 = 3² and 27 = 3³.'
        },
        tip:'Converting a base multiplies the exponent, so the whole parenthesis has to be distributed: (3²)^(x + 3) = 3^(2x + 6), never 3^(2x + 3). Write the multiplication out before solving and this error disappears.',
        desmos:'Graph y=2(x+3) and y=3(x-1) — the two exponents once both sides are in base 3 — and read the intersection at x=9.',
        desmosLatex:['y=2(x+3)','y=3(x-1)']
      },
      {
        id:'HV4-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponential model from a table (initial value when the table starts at x = 1)',
        stem:'The table gives four values of x and the corresponding values of f(x) for the exponential function f.' + TBL_RATIO + 'Which equation defines f?',
        choices:{
          A:'f(x) = 32(1.5)^x',
          B:'f(x) = 48(1.5)^x',
          C:'f(x) = 24x + 24',
          D:'f(x) = 32(0.5)^x'
        },
        correct:'A',
        expCorrect:'Divide consecutive outputs to get the common ratio: 72/48 = 1.5, 108/72 = 1.5, 162/108 = 1.5, so b = 1.5. The table starts at x = 1, not at x = 0, so the initial value is one step BACK from 48: f(0) = 48/1.5 = 32. The equation is f(x) = 32(1.5)^x. (Check x = 3: 32(1.5)³ = 32(3.375) = 108 ✓.)',
        expWrong:{
          B:'48 is f(1), not f(0). In f(x) = a(b)^x the number a is the value at x = 0, so 48 has to be divided by the ratio once to step back to x = 0.',
          C:'This is linear. It matches the first two rows (48 and 72 differ by 24) and then fails: at x = 3 it gives 96 while the table says 108. The differences are 24, 36 and 54 — not constant, so the data is not linear.',
          D:'0.5 comes from reading the ratio 1.5 as "50%" and using that as the base. A 50% increase means multiplying by 1 + 0.5 = 1.5; a base of 0.5 would cut the values in half each step.'
        },
        tip:'For an exponential table, divide consecutive outputs to find b, then walk back to x = 0 to find a, dividing by b once for every step you move left. Verify the ratio on every pair: if it is not constant, the table is not exponential.',
        desmos:'Plot the points (1,48), (2,72), (3,108), (4,162) and graph y=32(1.5)^x: the curve passes through all four and hits 32 at x=0.',
        desmosLatex:['y=32(1.5)^{x}','(1,48)','(2,72)','(3,108)','(4,162)']
      },
      {
        id:'HV4-12', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponential model from a table whose rows are more than one unit apart',
        stem:'The table gives the volume V, in liters, of foam remaining in a fire-suppression tank t minutes after the tank is switched off.' + TBL_FOAM + 'Which function models the relationship between t and V?',
        choices:{
          A:'V(t) = 800(0.75)^t',
          B:'V(t) = 800(0.75)^(3t)',
          C:'V(t) = 800(0.75)^(t/3)',
          D:'V(t) = 800(0.25)^(t/3)'
        },
        correct:'C',
        expCorrect:'The initial value is read straight off the table: V = 800 when t = 0. The ratio between consecutive rows is constant: 600/800 = 0.75, 450/600 = 0.75, 337.5/450 = 0.75. But consecutive rows are 3 minutes apart, not 1, so the multiplication by 0.75 happens once every 3 minutes — that is t/3 times in t minutes. The model is V(t) = 800(0.75)^(t/3). (Check t = 9: 800(0.75)³ = 800(0.421875) = 337.5 ✓.)',
        expWrong:{
          A:'An exponent of t multiplies by 0.75 every single minute. That would give 800(0.75)³ = 337.5 liters at t = 3, but the table says 600 liters there.',
          B:'3t multiplies by 0.75 three times per minute, speeding the decay up instead of stretching it out. A period longer than one unit divides the exponent, it does not multiply it.',
          D:'0.25 is the fraction that LEAVES the tank every 3 minutes. The base has to be the fraction that stays: 1 − 0.25 = 0.75.'
        },
        tip:'When the rows of a table are p units apart, the ratio you compute belongs to that whole gap, not to one unit. With initial value a and ratio r per p units, the model is a(r)^(t/p): divide the variable by the length of the period.',
        desmos:'Plot (0,800), (3,600), (6,450), (9,337.5) and graph y=800(0.75)^(x/3) next to y=800(0.75)^x: only the first passes through every point.',
        desmosLatex:['y=800(0.75)^{x/3}','y=800(0.75)^{x}','(0,800)','(3,600)','(6,450)','(9,337.5)']
      }
    ]
  });
})();
