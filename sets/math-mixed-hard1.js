/* SAT Studio question set — Math: Multi-Step Mixed — Hard (MX1-01 to MX1-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-mixed-hard1',
    title: 'Multi-Step Mixed — Hard',
    section: 'math',
    level: 'Difícil',
    description: 'Every question needs two different tools and the intermediate result is never the answer: systems that feed quadratics, zeros that become rates, parameters recovered from one condition and used somewhere else.',
    minutes: 20,
    questions: [
      {
        id:'MX1-01', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Linear system first, quadratic decides (evaluating f at the solution)',
        stem:'In the system of equations 2x + 3y = 19 and x − y = 2, the solution is the ordered pair (x, y). The function f is defined by f(t) = t² − 4t + 1. What is the value of f(x)?',
        choices:{A:'6', B:'5', C:'3', D:'−2'},
        correct:'A',
        expCorrect:'Step 1 — the system. From x − y = 2, x = y + 2. Substitute: 2(y + 2) + 3y = 19 → 2y + 4 + 3y = 19 → 5y = 15 → y = 3, so x = 5. (Check: 2(5) + 3(3) = 10 + 9 = 19 ✓ and 5 − 3 = 2 ✓.) Step 2 — the quadratic, which is the step that produces the answer. f(5) = 5² − 4(5) + 1 = 25 − 20 + 1 = 6.',
        expWrong:{
          B:'5 is x itself — the intermediate value, and the most tempting wrong answer here. Solving the system is only half the question; the answer is f(x), not x.',
          C:'3 is y, the other half of the solution pair. The function is evaluated at x.',
          D:'−2 is f(3), that is, f evaluated at y instead of at x: 9 − 12 + 1 = −2.'
        },
        tip:'When a system feeds a function, the ordered pair is never the answer. Solve, write down (x, y), then re-read which of the two goes into the function and what the question actually asks for.',
        desmos:'Graph 2x+3y=19 and x-y=2 and tap the crossing to get x = 5, then type 5^2-4*5+1 on the next line: the 6 it prints is f(x), the answer.',
        desmosLatex:['2x+3y=19','x-y=2','5^2-4*5+1']
      },
      {
        id:'MX1-02', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Zero of a quadratic used as a rate (the linear cost equation decides)',
        stem:'The function h is defined by h(t) = t² − 9t + 14. A repair shop charges a flat fee of $35 for any job plus, for each hour of labor, a number of dollars equal to the greater zero of h. A job costs $91 in total. How many hours of labor did that job take?',
        choices:{A:'28', B:'13', C:'8', D:'7'},
        correct:'C',
        expCorrect:'Step 1 — the zeros. t² − 9t + 14 = (t − 7)(t − 2), so the zeros are 7 and 2 and the greater one is 7. The shop charges $7 per hour. Step 2 — the linear equation, which is the step that produces the answer. 35 + 7n = 91 → 7n = 56 → n = 8 hours. (Check: 35 + 7(8) = 35 + 56 = 91 ✓.)',
        expWrong:{
          A:'28 uses the smaller zero as the rate: 35 + 2n = 91 → n = 28. The stem says the GREATER zero.',
          B:'13 is 91 ÷ 7, which ignores the $35 flat fee. Subtract the fee before dividing by the hourly rate.',
          D:'7 is the greater zero — the intermediate value, and the answer the question is baiting you into. It is dollars per hour, not hours.'
        },
        tip:'When a zero, a slope or a root is only an ingredient, label it with its units the moment you find it ($/hour here). A number with the wrong units can never be the answer, and it is always sitting in the choices.',
        desmos:'Graph y=x^2-9x+14 and read the right-hand zero (x = 7), then type (91-35)/7 to get the 8 hours.',
        desmosLatex:['y=x^2-9x+14','(91-35)/7']
      },
      {
        id:'MX1-03', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Linear demand into a revenue quadratic (two roots, one condition picks it)',
        stem:'A theater models its nightly attendance as q = 300 − 10p, where p is the ticket price in dollars and 0 < p < 30. The nightly revenue, in dollars, is R = pq. The theater takes in exactly $2,000 of revenue at two different ticket prices. At the greater of those two prices, how many tickets are sold?',
        choices:{A:'200', B:'100', C:'20', D:'10'},
        correct:'B',
        expCorrect:'Step 1 — build the revenue model: R = p(300 − 10p) = 300p − 10p². Step 2 — the quadratic, which is the step that produces the answer. Set it equal to 2000: 300p − 10p² = 2000 → 10p² − 300p + 2000 = 0 → p² − 30p + 200 = 0 → (p − 10)(p − 20) = 0, so p = 10 or p = 20. The condition "the greater of those two prices" picks p = 20. Then q = 300 − 10(20) = 100 tickets. (Check: 20 × 100 = $2,000 ✓, and 10 × 200 = $2,000 ✓ at the other price.)',
        expWrong:{
          A:'200 is the attendance at the LOWER price ($10). Both prices give $2,000; the question asks about the greater one.',
          C:'20 is the price, the intermediate value. The question asks for tickets, not dollars.',
          D:'10 is the other price — again the intermediate value, and the smaller root at that.'
        },
        tip:'Revenue problems always give two prices for the same revenue (a parabola hits each height twice). Solve for both, let the stated condition choose one, then convert that price into whatever the question asked for.',
        desmos:'Graph y=x(300-10x) and y=2000: the crossings are at p = 10 and p = 20, and typing 300-10*20 turns the greater price into the 100 tickets.',
        desmosLatex:['y=x(300-10x)','y=2000','300-10*20']
      },
      {
        id:'MX1-04', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Two cost models set equal, then a minutes-to-hours conversion',
        stem:'Plan A charges a $40 monthly fee plus $0.25 for each minute of calls. Plan B charges a $70 monthly fee plus $0.10 for each minute of calls. For how many hours of calls in one month do the two plans cost the same amount?',
        answer:'10/3',
        expCorrect:'Step 1 — build both models with m in minutes: A = 40 + 0.25m and B = 70 + 0.10m. Step 2 — set them equal: 40 + 0.25m = 70 + 0.10m → 0.15m = 30 → m = 200 minutes. (Check: 40 + 0.25(200) = $90 and 70 + 0.10(200) = $90 ✓.) Step 3 — the units, which is the step that produces the answer: the question asks for HOURS, so 200 ÷ 60 = 10/3 hours ≈ 3.33. Answer: 10/3.',
        tip:'Watch the trap: 200 is the honest answer to a question nobody asked — it is minutes, and the stem says hours. Build the model in the units the rates come in, solve, and convert only at the very end. Grid 10/3; as a decimal you must fill the box (3.333), because 3.33 is not accepted.',
        desmos:'Graph y=40+0.25x and y=70+0.10x with x in minutes: they cross at x = 200, and typing 200/60 gives the 10/3 hours you grid in.',
        desmosLatex:['y=40+0.25x','y=70+0.10x','200/60']
      },
      {
        id:'MX1-05', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Coefficients of a quadratic recovered from a 2×2 system (the system decides)',
        stem:'The function f is defined by f(x) = ax² + bx, where a and b are constants. If f(2) = 2 and f(−1) = 14, what is the value of f(3)?',
        choices:{A:'−36', B:'−4', C:'5', D:'18'},
        correct:'D',
        expCorrect:'Step 1 — turn the two conditions into a system, which is the step that decides everything here. f(2) = 4a + 2b = 2, so 2a + b = 1. f(−1) = a(−1)² + b(−1) = a − b = 14. Step 2 — solve it: adding the two gives 3a = 15 → a = 5, and then b = 1 − 2(5) = −9. (Check: f(2) = 20 − 18 = 2 ✓ and f(−1) = 5 + 9 = 14 ✓.) Step 3 — evaluate: f(3) = 9(5) + 3(−9) = 45 − 27 = 18.',
        expWrong:{
          A:'−36 comes from writing f(−1) = a + b = 14 (forgetting that b(−1) = −b). That gives a = −13 and b = 27, and 9(−13) + 3(27) = −36.',
          B:'−4 is a + b = 5 + (−9). Combining the coefficients is not the same as evaluating the function at 3.',
          C:'5 is a — the intermediate value, and the one the choices are daring you to pick. Finding the coefficients is the middle of the problem, not the end.'
        },
        tip:'Two conditions on two unknown coefficients is a linear system in disguise. Substitute each point, line up the two equations, solve for BOTH constants, and only then plug in the x they asked about.',
        desmos:'Graph 4x+2y=2 and x-y=14 reading x as a and y as b: the crossing is (5, −9), and typing 9*5+3*(-9) gives the 18.',
        desmosLatex:['4x+2y=2','x-y=14','9*5+3*(-9)']
      },
      {
        id:'MX1-06', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponential equation solved in months, answered in years',
        stem:'A sample of a compound decays so that the mass remaining, in milligrams, after m months is A(m) = 640(1/2)^(m/4). After how many years does the sample have a mass of 40 milligrams?',
        choices:{A:'4/3', B:'4', C:'16', D:'192'},
        correct:'A',
        expCorrect:'Step 1 — the exponential equation, which is the step that produces the number. 640(1/2)^(m/4) = 40 → (1/2)^(m/4) = 40/640 = 1/16 = (1/2)⁴ → m/4 = 4 → m = 16 months. (Check: 640 → 320 → 160 → 80 → 40 is four halvings of 4 months each ✓.) Step 2 — the units: 16 months ÷ 12 = 4/3 years ≈ 1.33.',
        expWrong:{
          B:'4 is the number of halvings (the exponent m/4), not a time. Each halving takes 4 months, so four of them take 16 months.',
          C:'16 is the time in MONTHS — the intermediate value, and exactly what the question is baiting you with. The stem asks for years.',
          D:'192 multiplies 16 months by 12 instead of dividing. Months → years divides by 12; years → months multiplies.'
        },
        tip:'In an exponential model, write down what the letter in the exponent measures (months here) before you solve. Matching bases gives you the time in the model’s units, and the last step is converting to the units in the question.',
        desmos:'Graph y=640*0.5^(x/4) and y=40 with x in months: they meet at x = 16, and typing 16/12 turns it into the 4/3 years asked for.',
        desmosLatex:['y=640*0.5^{x/4}','y=40','16/12']
      },
      {
        id:'MX1-07', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Factor a quadratic, then count integers in the interval (the inequality decides)',
        stem:'The function f is defined by f(x) = x² − 8x + 12. For how many integer values of x is f(x) < 0?',
        choices:{A:'3', B:'4', C:'5', D:'6'},
        correct:'A',
        expCorrect:'Step 1 — factor: x² − 8x + 12 = (x − 2)(x − 6), so the zeros are 2 and 6. Since the parabola opens upward, f(x) < 0 strictly between the zeros: 2 < x < 6. Step 2 — the counting, which is the step that produces the answer. The integers strictly between 2 and 6 are 3, 4 and 5 — three of them. (Check: f(3) = −3, f(4) = −4, f(5) = −3, all negative; f(2) = f(6) = 0, which is not < 0.)',
        expWrong:{
          B:'4 is 6 − 2, the width of the interval. The distance between the zeros is not the count of integers inside it.',
          C:'5 counts 2, 3, 4, 5 and 6 — it includes the zeros, where f(x) = 0. The inequality is strict (< 0), so the endpoints are out.',
          D:'6 is the greater zero — the intermediate value, sitting in the choices to catch a student who stops at the factoring.'
        },
        tip:'An upward parabola is negative only BETWEEN its zeros. Find the zeros, write the interval, then count integers by listing them — and check whether the inequality is strict (endpoints out) or not (endpoints in).',
        desmos:'Graph y=x^2-8x+12 and look at the piece below the x-axis, from 2 to 6: the whole numbers inside are 3, 4 and 5, so the count is 3.',
        desmosLatex:['y=x^2-8x+12','(3,-3)','(4,-4)','(5,-3)']
      },
      {
        id:'MX1-08', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Parameter from one point, then a difference of two vertex-form values',
        stem:'The function g is defined by g(x) = a(x − 3)² + 4, where a is a constant. The graph of y = g(x) in the xy-plane passes through the point (1, 16). What is the value of g(5) − g(0)?',
        answer:'-15',
        expCorrect:'Step 1 — recover a from the point: 16 = a(1 − 3)² + 4 → 16 = 4a + 4 → 4a = 12 → a = 3, so g(x) = 3(x − 3)² + 4. Step 2 — evaluate twice, which is the step that produces the answer. g(5) = 3(5 − 3)² + 4 = 3(4) + 4 = 16 and g(0) = 3(0 − 3)² + 4 = 3(9) + 4 = 31. So g(5) − g(0) = 16 − 31 = −15. (Note g(5) = 16 matches the given point: 5 and 1 are both 2 units from the vertex x = 3, so the parabola has the same height at both.) Answer: -15.',
        tip:'Two traps live here. 3 is only the parameter a, not the answer, and the order matters: g(5) − g(0) is negative, so grid -15, not 15. In vertex form a(x − h)² + k, inputs the same distance from h always give the same output — a free check on your arithmetic.',
        desmos:'Graph y=a(x-3)^2+4 with a slider and push a to 3 so the curve passes through (1,16), then type 3*(5-3)^2+4-(3*(0-3)^2+4) to see the −15.',
        desmosLatex:['y=a(x-3)^2+4','a=3','(1,16)','3*(5-3)^2+4-(3*(0-3)^2+4)']
      },
      {
        id:'MX1-09', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'System built from words, then an expression in both variables',
        stem:'At a bake sale every muffin costs $3 and every scone costs $5. A customer buys 16 items in total and pays $68. If m is the number of muffins and s is the number of scones the customer buys, what is the value of 2s − m?',
        choices:{A:'26', B:'14', C:'10', D:'4'},
        correct:'B',
        expCorrect:'Step 1 — the system: m + s = 16 (items) and 3m + 5s = 68 (dollars). Substitute s = 16 − m: 3m + 5(16 − m) = 68 → 80 − 2m = 68 → 2m = 12 → m = 6, so s = 10. (Check: 6 + 10 = 16 ✓ and 3(6) + 5(10) = 18 + 50 = 68 ✓.) Step 2 — the expression they actually asked for: 2s − m = 2(10) − 6 = 20 − 6 = 14.',
        expWrong:{
          A:'26 is 2s + m = 20 + 6, a sign slip in the final expression. The question asks for 2s − m.',
          C:'10 is s — the intermediate value, and the choice waiting for anyone who solves the system and stops there.',
          D:'4 is s − m = 10 − 6, which drops the factor of 2 on s.'
        },
        tip:'Two sentences with two unknowns is a system: one equation for the COUNT and one for the MONEY. Solve for both, then read the final line again — the SAT rarely asks for m or s by itself, and both of them are in the choices.',
        desmos:'Graph x+y=16 and 3x+5y=68 reading x as muffins and y as scones: the crossing is (6, 10), and typing 2*10-6 gives the 14.',
        desmosLatex:['x+y=16','3x+5y=68','2*10-6']
      },
      {
        id:'MX1-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Linear model against an exponential model (when one passes the other)',
        stem:'The value of Plan P starts at $1,200 and increases by $180 each year. The value of Plan Q starts at $600 and increases by 20% each year. Let t be a whole number of years. For the first time at t years, the value of Plan Q is greater than the value of Plan P. What is that value of t?',
        choices:{A:'2', B:'3', C:'8', D:'9'},
        correct:'D',
        expCorrect:'Step 1 — the two models: P(t) = 1200 + 180t (linear) and Q(t) = 600(1.2)^t (exponential). Step 2 — compare them, which is the step that produces the answer. At t = 8: P = 1200 + 1440 = $2,640 and Q = 600(1.2)⁸ ≈ $2,579.89, so P is still ahead. At t = 9: P = 1200 + 1620 = $2,820 and Q = 600(1.2)⁹ ≈ $3,095.87, so Q is ahead. The first whole year with Q greater is t = 9.',
        expWrong:{
          A:'2 comes from 1200 ÷ 600 = 2 and treats "twice as much at the start" as the number of years. Starting ratios say nothing about when the curves cross.',
          B:'3 is the first year Q GAINS more per year than P: Q(3) ≈ $1,036.80, so its next year adds about $207, beating P’s fixed $180. Growing faster is not the same as being worth more — Q is still far behind at that point.',
          C:'8 is the last whole year P is still ahead. The curves cross at about t = 8.2, so the first whole year where Q wins is the next one.'
        },
        tip:'An exponential always overtakes a linear eventually, but "grows faster" and "is bigger" happen in different years. Evaluate both models at consecutive whole numbers around the crossing and pick the first year the inequality actually flips.',
        desmos:'Graph y=1200+180x and y=600*1.2^x: the curves cross at about x = 8.2, so the first whole year with Q on top is 9.',
        desmosLatex:['y=1200+180x','y=600*1.2^x','x=9']
      },
      {
        id:'MX1-11', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Parameter forced by infinitely many solutions, then a cubic expression',
        stem:'In the system of equations 2x + 6y = 10 and kx + 9y = 15, k is a constant and the system has infinitely many solutions. What is the value of k³ − k?',
        choices:{A:'30', B:'24', C:'6', D:'3'},
        correct:'B',
        expCorrect:'Step 1 — the condition, which is the step that pins down k. Infinitely many solutions means the two equations are the same line. Scale the first one so the y-terms match: 9 ÷ 6 = 1.5, and 1.5(2x + 6y = 10) gives 3x + 9y = 15. That is identical to the second equation when k = 3 (and the right sides already agree: 15 = 15 ✓). Step 2 — the expression: k³ − k = 3³ − 3 = 27 − 3 = 24.',
        expWrong:{
          A:'30 is k³ + k = 27 + 3, a sign slip in the final expression.',
          C:'6 comes from taking k = 2 (copying the 2 from 2x instead of scaling the whole equation by 9/6): 2³ − 2 = 6.',
          D:'3 is k — the intermediate value, and the answer this question is built to tempt you with. Finding k is step one of two.'
        },
        tip:'Same left side and same right side → infinitely many solutions; same left side, different right side → no solution. Find the scale factor from the coefficients you can see, use it on the WHOLE equation, then go back and compute whatever expression in k was requested.',
        desmos:'Graph 2x+6y=10 and kx+9y=15 with a slider for k: the second line lands exactly on top of the first at k = 3, and typing 3^3-3 gives the 24.',
        desmosLatex:['2x+6y=10','kx+9y=15','k=3','3^3-3']
      },
      {
        id:'MX1-12', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Radical equation with an extraneous root, then evaluate an expression',
        stem:'In the equation √(x + 7) = x − 5, the only solution is x = a. What is the value of a² − 3a?',
        choices:{A:'−2', B:'9', C:'54', D:'108'},
        correct:'C',
        expCorrect:'Step 1 — the radical equation, which is the step that decides which number a is. Square both sides: x + 7 = x² − 10x + 25 → 0 = x² − 11x + 18 → (x − 2)(x − 9) = 0, so the candidates are x = 2 and x = 9. Check both in the ORIGINAL equation: at x = 2, √9 = 3 but x − 5 = −3, so 3 ≠ −3 and x = 2 is extraneous; at x = 9, √16 = 4 and 9 − 5 = 4 ✓. So a = 9. Step 2 — evaluate: a² − 3a = 81 − 27 = 54.',
        expWrong:{
          A:'−2 is a² − 3a computed with the extraneous root x = 2: 4 − 6 = −2. Squaring invented that root; it fails the original equation.',
          B:'9 is a itself — the intermediate value. The question asks for a² − 3a, not for a.',
          D:'108 is a² + 3a = 81 + 27, a sign slip in the final expression.'
        },
        tip:'Squaring both sides can create roots that were never there, so every candidate goes back into the ORIGINAL equation. A square root is never negative, so any root that makes the right side negative dies immediately — and then finish the expression they asked for.',
        desmos:'Graph y=sqrt(x+7) and y=x-5: they meet only at x = 9 (x = 2 is the root squaring invented), and typing 9^2-3*9 gives the 54.',
        desmosLatex:['y=\\sqrt{x+7}','y=x-5','9^2-3*9']
      }
    ]
  });
})();
