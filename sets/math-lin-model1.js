/* SAT Studio question set — Math: Algebra — Linear functions, modeling (LMD-01 a LMD-12)
   Destreza oficial: al-func "Linear functions" (dominio Algebra).
   Cada `skill` arranca con "Linear functions" a propósito: skillOf() prueba
   al-sys / al-ineq / al-2var ANTES que al-func, así que ni el skill ni los
   primeros 160 caracteres del stem pueden decir "system", "at least", "budget",
   "solve for" ni "in terms of" — cualquiera de esos se lleva la pregunta a otra
   destreza aunque el tema sea este.
   Reparto pedido: 10 MC + 2 SPR · 5 Fácil · 5 Media · 2 Difícil. */
(function(){

  /* ---- Tabla de LMD-04: f lineal, paso de x = 1, pendiente 12, f(0) = 35 ---- */
  var TBL_PLUMBER =
    '<table border="1" cellpadding="6" style="border-collapse:collapse">' +
    '<tr><th>x (hours)</th><th>0</th><th>1</th><th>2</th><th>3</th></tr>' +
    '<tr><th>f(x) (dollars)</th><td>35</td><td>47</td><td>59</td><td>71</td></tr></table>';

  /* ---- Tabla de LMD-07: el paso de x es 2, NO 1. Ahí vive el distractor. ---- */
  var TBL_SHELF =
    '<table border="1" cellpadding="6" style="border-collapse:collapse">' +
    '<tr><th>x (months after January)</th><th>0</th><th>2</th><th>4</th></tr>' +
    '<tr><th>g(x) (books)</th><td>210</td><td>228</td><td>246</td></tr></table>';

  /* ---- Gráfica de LMD-05: h(t) = 24 − 4t, de (0, 24) a (6, 0).
         Origen en (55, 200); 40 px por hora en x, 7 px por centímetro en y. ---- */
  var FIG_CANDLE =
    '<svg viewBox="0 0 330 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of the linear function h in the first quadrant. The horizontal axis is t, the number of hours since the candle was lit, marked 1 through 6. The vertical axis is h of t, the height of the candle in centimeters, marked 0, 6, 12, 18 and 24. The line falls steadily from the point 0 comma 24 to the point 6 comma 0, passing through 1 comma 20, 2 comma 16, 3 comma 12, 4 comma 8 and 5 comma 4.">' +
    '<g fill="none" stroke="#e4e4e4" stroke-width="1">' +
    '<path d="M95 32V200M135 32V200M175 32V200M215 32V200M255 32V200M295 32V200"/>' +
    '<path d="M55 158H305M55 116H305M55 74H305M55 32H305"/></g>' +
    '<path d="M55 26V200H312" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<path d="M55 32L295 200" fill="none" stroke="#B8860B" stroke-width="2.5"/>' +
    '<g fill="#B8860B"><circle cx="55" cy="32" r="4"/><circle cx="295" cy="200" r="4"/></g>' +
    '<g font-size="12" font-family="Georgia,serif" fill="#1e1e1e">' +
    '<g text-anchor="middle"><text x="95" y="217">1</text><text x="135" y="217">2</text>' +
    '<text x="175" y="217">3</text><text x="215" y="217">4</text><text x="255" y="217">5</text>' +
    '<text x="295" y="217">6</text>' +
    '<text x="180" y="240" font-size="13">t (hours)</text>' +
    '<text x="14" y="116" font-size="13" transform="rotate(-90 14 116)">h(t) (centimeters)</text></g>' +
    '<g text-anchor="end"><text x="48" y="204">0</text><text x="48" y="162">6</text>' +
    '<text x="48" y="120">12</text><text x="48" y="78">18</text><text x="48" y="36">24</text></g>' +
    '</g></svg>';

  /* ---- Gráfica de LMD-08: y = 3x + 6, de (0, 6) a (6, 24). Misma retícula. ---- */
  var FIG_BIKE =
    '<svg viewBox="0 0 330 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of a line in the xy-plane. The horizontal axis is x, the length of a bike rental in hours, marked 1 through 6. The vertical axis is y, the total charge in dollars, marked 0, 6, 12, 18 and 24. The line rises steadily and passes through the points 0 comma 6, 2 comma 12, 4 comma 18 and 6 comma 24.">' +
    '<g fill="none" stroke="#e4e4e4" stroke-width="1">' +
    '<path d="M95 32V200M135 32V200M175 32V200M215 32V200M255 32V200M295 32V200"/>' +
    '<path d="M55 158H305M55 116H305M55 74H305M55 32H305"/></g>' +
    '<path d="M55 26V200H312" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<path d="M55 158L295 32" fill="none" stroke="#B8860B" stroke-width="2.5"/>' +
    '<g fill="#B8860B"><circle cx="55" cy="158" r="4"/><circle cx="135" cy="116" r="4"/>' +
    '<circle cx="215" cy="74" r="4"/><circle cx="295" cy="32" r="4"/></g>' +
    '<g font-size="12" font-family="Georgia,serif" fill="#1e1e1e">' +
    '<g text-anchor="middle"><text x="95" y="217">1</text><text x="135" y="217">2</text>' +
    '<text x="175" y="217">3</text><text x="215" y="217">4</text><text x="255" y="217">5</text>' +
    '<text x="295" y="217">6</text>' +
    '<text x="180" y="240" font-size="13">x (hours)</text>' +
    '<text x="14" y="116" font-size="13" transform="rotate(-90 14 116)">y (dollars)</text></g>' +
    '<g text-anchor="end"><text x="48" y="204">0</text><text x="48" y="162">6</text>' +
    '<text x="48" y="120">12</text><text x="48" y="78">18</text><text x="48" y="36">24</text></g>' +
    '</g></svg>';

  window.SAT_SETS.push({
    id: 'math-lin-model1',
    title: 'Linear Functions — Modeling',
    section: 'math',
    level: 'Fácil',
    description: 'Everyday situations turned into linear functions and then read back: evaluating f(x) in context, finding the input behind an output, what f(0) means, which inputs the story allows, comparing two models, pulling a function off a graph and out of a table, and why f(x + 2) is not f(x) + 2.',
    minutes: 16,
    questions: [

      /* ---------- Fácil (5) ---------- */
      {
        id:'LMD-01', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear functions: evaluating the model in context',
        stem:'A community pool is being filled with water. The function W gives the number of gallons of water in the pool t minutes after filling begins, where W(t) = 250t + 900. How many gallons of water are in the pool 12 minutes after filling begins?',
        choices:{A:'1,150', B:'3,000', C:'3,900', D:'11,050'},
        correct:'C',
        expCorrect:'"12 minutes after filling begins" means t = 12, so evaluate W at 12: W(12) = 250(12) + 900 = 3,000 + 900 = 3,900 gallons. The 900 is water the pool already held at t = 0, so it stays in every total no matter how long the hose runs. (Check: 3,900 − 900 = 3,000, which is exactly 250 × 12 ✓.)',
        expWrong:{
          A:'1,150 is W(1): 250(1) + 900. The 12 has to replace t inside the formula, not sit outside it.',
          B:'3,000 counts only the water the hose added, 250 × 12, and drops the 900 gallons the pool started with.',
          D:'11,050 swaps the two numbers, using 900 as the per-minute rate and 250 as the starting amount: 900 × 12 + 250. In W(t) = 250t + 900 the rate is the number multiplied by t.'
        },
        tip:'In f(t) = (rate)t + (starting amount), the number attached to t is what happens EVERY unit of time, and the number sitting alone is where the count begins. To evaluate, replace t everywhere it appears and leave the constant alone.',
        desmos:'Graph y = 250x + 900 and open the table at x = 12; the y column reads 3900. The point (0, 900) shows where the pool starts.',
        desmosLatex:['y=250x+900','(12,3900)','(0,900)']
      },
      {
        id:'LMD-02', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear functions: finding the input from the output',
        stem:'A print shop charges a one-time setup fee of $40 for a poster order, plus $5 for each poster printed. The function C gives the total cost, in dollars, of an order of n posters, where C(n) = 5n + 40. One order cost a total of $290. How many posters were in that order?',
        choices:{A:'50', B:'58', C:'66', D:'250'},
        correct:'A',
        expCorrect:'The $290 is an output, so set the function equal to it: 5n + 40 = 290. Take off the setup fee first, because it is charged once and does not buy posters: 5n = 250. Then divide by the price per poster: n = 250 ÷ 5 = 50 posters. (Check: 5(50) + 40 = 250 + 40 = 290 ✓.)',
        expWrong:{
          B:'58 is 290 ÷ 5. It divides the whole bill by the price per poster and never removes the $40 fee, so the fee gets counted as if it had bought posters.',
          C:'66 adds the fee instead of subtracting it: (290 + 40) ÷ 5. The $40 is already inside the $290, so it comes out, not in.',
          D:'250 is the next-to-last step — the part of the bill spent on posters, in dollars. The question asks for a number of posters, so that amount still has to be divided by 5.'
        },
        tip:'Given an output, undo the model in reverse order: subtract the constant first, then divide by the coefficient. Before writing the answer, check its unit — dollars and items are not the same question.',
        desmos:'Graph y = 5x + 40 and y = 290 and tap the crossing: (50, 290). The x-coordinate is the number of posters.',
        desmosLatex:['y=5x+40','y=290','(50,290)']
      },
      {
        id:'LMD-03', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear functions: what f(0) means in context',
        stem:'The function P gives the total number of pages Priya has read d days after a school reading challenge began, where P(d) = 18d + 40. What is the best interpretation of P(0) = 40 in this context?',
        choices:{
          A:'Priya reads 40 pages on each day of the challenge.',
          B:'Priya read 40 pages in total during the challenge.',
          C:'Priya finished the book on day 40 of the challenge.',
          D:'Priya had read 40 pages before the challenge began.'
        },
        correct:'D',
        expCorrect:'P(0) is the output when the input is zero — the total at the very start, on day 0, before the challenge added a single page. So Priya came in with 40 pages already read. The 18 is what changes per day: P(1) = 58, P(2) = 76, and so on. (Check: 18(0) + 40 = 40 ✓.)',
        expWrong:{
          A:'The daily rate is 18, not 40: it is the number multiplied by d. Reading 40 pages a day would make the model P(d) = 40d.',
          B:'40 is the total at d = 0, before the challenge contributed anything. The total keeps climbing: by day 10 it is P(10) = 220.',
          C:'40 is an output, a number of pages, not an input. Day 40 would be P(40) = 760 pages.'
        },
        tip:'f(0) is the starting value: the number that stands alone in the formula, and the height where the graph crosses the vertical axis. The number multiplied by the variable is the rate. Swapping those two is the most common slip in a modeling question.',
        desmos:'Graph y = 18x + 40 and look at where it meets the y-axis: (0, 40). That is the total before day 1, and the line climbs 18 for each step right.',
        desmosLatex:['y=18x+40','(0,40)','(1,58)']
      },
      {
        id:'LMD-04', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear functions: building the model from a table',
        figure: TBL_PLUMBER,
        stem:'The table shows four values of the linear function f, where f(x) is the amount a plumber charges, in dollars, for a job that lasts x hours. Which equation defines f?',
        choices:{A:'f(x) = 12x', B:'f(x) = 12x + 35', C:'f(x) = 35x + 12', D:'f(x) = 47x + 35'},
        correct:'B',
        expCorrect:'Each time x rises by 1, f(x) rises by the same amount: 47 − 35 = 12, 59 − 47 = 12, 71 − 59 = 12. That constant change is the slope, so the plumber charges $12 per hour. The table also hands you the starting value directly: f(0) = 35, the charge before any hour is worked. So f(x) = 12x + 35. (Check the last column: 12(3) + 35 = 36 + 35 = 71 ✓.)',
        expWrong:{
          A:'f(x) = 12x has the right hourly rate but no starting charge, so it predicts f(0) = 0 while the table clearly says 35.',
          C:'f(x) = 35x + 12 swaps the slope and the starting value. It is tempting because it does give 47 at x = 1, but at x = 2 it gives 82 instead of 59.',
          D:'f(x) = 47x + 35 treats the table value at x = 1 as the rate. The rate is the DIFFERENCE between consecutive values, 12, not a value itself.'
        },
        tip:'From a table: the slope is (change in output) ÷ (change in input), and the starting value is f(0), which you can read straight off when x = 0 appears. Always test the equation on a SECOND row — a wrong model often matches one row by luck.',
        desmos:'Plot (0, 35), (1, 47), (2, 59) and (3, 71), then graph y = 12x + 35 on top: the line passes through all four points.',
        desmosLatex:['(0,35)','(1,47)','(2,59)','(3,71)','y=12x+35']
      },
      {
        id:'LMD-05', type:'spr', domain:'Algebra', difficulty:'Fácil',
        skill:'Linear functions: reading a value from a graph',
        figure: FIG_CANDLE,
        stem:'The graph shows the linear function h, where h(t) is the height of a candle, in centimeters, t hours after it was lit. What is the value of h(3)?',
        answer:'12',
        expCorrect:'h(3) asks for the height when t = 3. Go up from 3 on the horizontal axis until you hit the line, then across to the vertical axis: 12 centimeters. The model confirms it — the line runs from (0, 24) to (6, 0), dropping 24 centimeters over 6 hours, or 4 centimeters per hour, so h(t) = 24 − 4t and h(3) = 24 − 12 = 12 ✓. Answer: 12.',
        expWrong:{},
        tip:'On a graph, f(a) means: find a on the HORIZONTAL axis, go to the line, then read the VERTICAL axis. Running it the other way answers a different question — that one finds the input that produces a given output.',
        desmos:'Graph y = 24 − 4x and tap the point at x = 3; it reads (3, 12). The line reaches y = 0 at x = 6, the hour the candle is gone.',
        desmosLatex:['y=24-4x','(3,12)','(6,0)']
      },

      /* ---------- Media (5) ---------- */
      {
        id:'LMD-06', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear functions: a reasonable domain in context',
        stem:'A delivery drone takes off with a fully charged battery and flies until the battery is empty. The function B gives the percent of battery charge remaining after m minutes of flight, where B(m) = 100 − 2.5m. Which of the following is the most reasonable domain for B in this context?',
        choices:{A:'All real numbers', B:'m ≥ 0', C:'0 ≤ m ≤ 40', D:'0 ≤ m ≤ 100'},
        correct:'C',
        expCorrect:'The story fences in the input from both sides. The drone cannot fly for a negative number of minutes, so m ≥ 0. And the charge cannot fall below empty, so B(m) ≥ 0: 100 − 2.5m ≥ 0 → 2.5m ≤ 100 → m ≤ 40. Putting both together: 0 ≤ m ≤ 40. (Check the right edge: B(40) = 100 − 100 = 0, exactly empty ✓, while B(41) = −2.5, a negative percent of charge, which cannot happen.)',
        expWrong:{
          A:'The formula 100 − 2.5m happily accepts any real number, but m counts minutes of flight. All real numbers would allow m = −8, eight minutes before takeoff, and m = 60, where the model reports −50 percent charge.',
          B:'m ≥ 0 rules out negative time but forgets the far end. At m = 50 the model returns −25, and a battery cannot hold a negative percent of charge.',
          D:'0 ≤ m ≤ 100 borrows the 100 from B(m) = 100 − 2.5m, but that 100 is a percent of charge, not a number of minutes. The battery is already empty at m = 40.'
        },
        tip:'A reasonable domain comes from the STORY, not the formula. Ask two questions: what is the smallest input the situation allows (usually 0 for time, distance or a count), and at what input does the output stop making sense — often where the model hits zero?',
        desmos:'Graph y = 100 − 2.5x. It leaves the first quadrant at (40, 0): to the right the model predicts a negative charge, and to the left of x = 0 it predicts more than a full battery.',
        desmosLatex:['y=100-2.5x','(0,100)','(40,0)']
      },
      {
        id:'LMD-07', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear functions: comparing two rates of change',
        figure: TBL_SHELF,
        stem:'Function f is defined by f(x) = 6x + 150, where f(x) is the number of books on one library shelf x months after January. The table gives values of the linear function g, the number of books on a second shelf x months after January. Which statement correctly compares the two rates of change?',
        choices:{
          A:'f grows faster, by 3 books per month.',
          B:'g grows faster, by 3 books per month.',
          C:'g grows faster, by 12 books per month.',
          D:'g grows faster, by 60 books per month.'
        },
        correct:'B',
        expCorrect:'A rate of change is how much the output moves for ONE unit of input. For f it is the number multiplied by x: 6 books per month. For g, read it from the table — but notice the x values jump by 2, not by 1. From x = 0 to x = 2 the count goes 210 → 228, a change of 18 over 2 months, so 18 ÷ 2 = 9 books per month. (The next step agrees: 246 − 228 = 18 over another 2 months ✓.) So g gains 9 − 6 = 3 more books per month than f.',
        expWrong:{
          A:'The gap of 3 is right, but the direction is backwards: g is the shelf gaining 9 books a month, while f gains 6.',
          C:'12 comes from treating 18 as the monthly rate of g. Those 18 books arrived over 2 months, so the monthly rate is 9, and 9 − 6 = 3.',
          D:'60 is 210 − 150, the distance between the two STARTING counts. A rate of change compares how fast the shelves grow, not how far apart they begin.'
        },
        tip:'A rate of change from a table is (change in output) ÷ (change in input). Check the input step before subtracting: when x jumps by 2 or 5, the raw difference is not the per-unit rate. In an equation the rate is simply the coefficient of the variable.',
        desmos:'Graph y = 6x + 150 and y = 9x + 210 together. The second starts higher AND climbs more steeply; step from x = 0 to x = 1 on each to see the +6 against the +9.',
        desmosLatex:['y=6x+150','y=9x+210']
      },
      {
        id:'LMD-08', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear functions: slope and starting value from a graph',
        figure: FIG_BIKE,
        stem:'The graph shows the total charge y, in dollars, for renting a bike for x hours at one shop. Based on the graph, what is the total charge for a rental that lasts 7 hours?',
        choices:{A:'$21', B:'$27', C:'$31.50', D:'$42'},
        correct:'B',
        expCorrect:'Pick two points where the line crosses grid corners: (0, 6) and (2, 12). The slope is (12 − 6) ÷ (2 − 0) = 3, so the shop charges $3 per hour, and the line meets the vertical axis at 6, a flat $6 to start. That makes y = 3x + 6. At x = 7: 3(7) + 6 = 21 + 6 = $27. (Check the model against the picture: at x = 4 it gives 18, and the plotted point really is (4, 18) ✓.)',
        expWrong:{
          A:'$21 is 3 × 7, the hourly part by itself. The line does not pass through the origin: $6 is charged before the first hour.',
          C:'$31.50 turns the plotted point (4, 18) into a rate, 18 ÷ 4 = $4.50 per hour, and multiplies by 7. A point on a line gives the TOTAL at that hour, not a rate.',
          D:'$42 is 6 × 7, using the starting charge as if it were the hourly price. On the graph, 6 is where the line meets the vertical axis, not how steeply it climbs.'
        },
        tip:'To turn a graphed line into a model, grab two points that sit on grid corners: slope is rise ÷ run, and the starting value is where the line meets the vertical axis. Then use the equation for inputs past the edge of the picture instead of extending the line by eye.',
        desmos:'Graph y = 3x + 6 with the points (0, 6), (2, 12) and (4, 18): the line hits all three. Then read x = 7 in the table to get y = 27.',
        desmosLatex:['y=3x+6','(0,6)','(2,12)','(4,18)','(7,27)']
      },
      {
        id:'LMD-09', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Linear functions: when two models give the same output',
        stem:'The function f gives the total amount, in dollars, that a member has paid to Gym A after m months, where f(m) = 25m + 60. The function g gives the total amount paid to Gym B over the same months, where g(m) = 40m. After how many months will the two totals be equal?',
        answer:'4',
        expCorrect:'"The two totals are equal" means f(m) = g(m), so set the expressions equal to each other: 25m + 60 = 40m. Subtract 25m from both sides: 60 = 15m. Divide by 15: m = 4 months. (Check: f(4) = 25(4) + 60 = 100 + 60 = 160, and g(4) = 40(4) = 160 ✓ — the same total.) Answer: 4.',
        expWrong:{},
        tip:'Two models match where their outputs agree, so write expression = expression, never expression = 0. Then read the question again: the month (4) and the amount at that month (160) are both sitting in your work, and only one of them is being asked for.',
        desmos:'Graph y = 25x + 60 and y = 40x and tap where they cross: (4, 160). The x-coordinate is the month; the y-coordinate is what each member has paid by then.',
        desmosLatex:['y=25x+60','y=40x','(4,160)']
      },
      {
        id:'LMD-10', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Linear functions: f(x + 2) is not f(x) + 2',
        stem:'A compost bin is started with 250 grams of material, and 40 grams are added each week. The function f gives the number of grams in the bin w weeks after it was started, where f(w) = 40w + 250. Which of the following is equal to f(w + 2)?',
        choices:{A:'40w + 252', B:'40w + 290', C:'40w + 330', D:'42w + 250'},
        correct:'C',
        expCorrect:'f(w + 2) means: put w + 2 wherever the formula has w. f(w + 2) = 40(w + 2) + 250 = 40w + 80 + 250 = 40w + 330. It matches the story too — two more weeks means two more 40-gram loads, so 80 extra grams. (Check at w = 5: f(7) = 40(7) + 250 = 530, and 40(5) + 330 = 200 + 330 = 530 ✓.)',
        expWrong:{
          A:'40w + 252 is f(w) + 2, which adds 2 GRAMS to the output. f(w + 2) adds 2 to the INPUT, which means 2 more weeks — and a week is worth 40 grams, not 1.',
          B:'40w + 290 moves the bin forward by one week rather than two: that is f(w + 1) = 40(w + 1) + 250. The 2 has to be multiplied by 40 as well.',
          D:'42w + 250 adds the 2 to the rate, turning 40 grams a week into 42. f(w + 2) never changes how fast the bin fills; it only changes when you look at it.'
        },
        tip:'Changing the INPUT shifts the model in time and gets multiplied by the rate: f(x + k) adds k times the slope. Changing the OUTPUT just adds: f(x) + k lifts everything by k. Substitute the whole expression in parentheses and distribute — the difference shows up right there.',
        desmos:'Graph y = 40x + 250, y = 40(x + 2) + 250 and y = 40x + 252. The second is the first slid 2 units LEFT and sits 80 above it; the third sits only 2 above.',
        desmosLatex:['y=40x+250','y=40(x+2)+250','y=40x+252']
      },

      /* ---------- Difícil (2) ---------- */
      {
        id:'LMD-11', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear functions: the input from the output, with a unit trap',
        stem:'A parking garage charges a $3 entry fee plus $0.05 for each minute a car stays. The function C gives the total cost, in dollars, of parking for t minutes, where C(t) = 0.05t + 3. A driver paid a total of $12. For how many hours did that driver park?',
        choices:{A:'3', B:'4', C:'5', D:'180'},
        correct:'A',
        expCorrect:'Set the total equal to 12 and undo the model in reverse: 0.05t + 3 = 12 → 0.05t = 9 → t = 9 ÷ 0.05 = 180. That 180 is in MINUTES, because t counts minutes, and the question asks for hours: 180 ÷ 60 = 3 hours. (Check: 3 hours is 180 minutes, so the meter charge is 0.05 × 180 = $9, and $9 + $3 = $12 ✓.)',
        expWrong:{
          B:'4 hours skips the entry fee: 12 ÷ 0.05 = 240 minutes = 4 hours. The $3 is already inside the $12, so it has to come out before dividing.',
          C:'5 hours adds the fee instead of subtracting it: (12 + 3) ÷ 0.05 = 300 minutes = 5 hours. The driver paid $12 in total, not $12 on top of the fee.',
          D:'180 is the right number in the wrong unit. It is minutes, and the question asks for hours, so it still has to be divided by 60.'
        },
        tip:'Two habits close a question like this. First, undo the model in reverse order: subtract the constant, then divide by the rate. Second, before writing anything down, compare the unit of the variable with the unit the question names — a model in minutes and a question in hours means one more division by 60.',
        desmos:'Graph y = 0.05x + 3 and y = 12; they meet at (180, 12). The 180 on the x-axis is minutes, so divide by 60 to answer in hours.',
        desmosLatex:['y=0.05x+3','y=12','(180,12)']
      },
      {
        id:'LMD-12', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Linear functions: two models that meet, and what is actually asked',
        stem:'Sprayer A holds 90 liters of paint and uses 7 liters per hour. Sprayer B holds 120 liters and uses 12 liters per hour. The function f(h) = 90 − 7h gives the liters of paint left in A after h hours, and g(h) = 120 − 12h gives the liters left in B. At the moment the two sprayers hold the same amount of paint, how many liters does each one hold?',
        choices:{A:'6', B:'30', C:'42', D:'48'},
        correct:'D',
        expCorrect:'First find WHEN the amounts match: 90 − 7h = 120 − 12h. Add 12h to both sides: 90 + 5h = 120. Subtract 90: 5h = 30, so h = 6 hours. But 6 counts hours, and the question asks for liters, so evaluate either function there: f(6) = 90 − 7(6) = 90 − 42 = 48 liters. (Check with the other model: g(6) = 120 − 12(6) = 120 − 72 = 48 ✓ — they agree, which is what "the same amount" promised.)',
        expWrong:{
          A:'6 is the number of HOURS at which the two sprayers match — the intermediate step. The question asks how many liters each one holds at that moment, which is f(6) = 48.',
          B:'30 is 120 − 90, the gap between the two starting amounts. That gap is what closes over time; it is not the amount left when it closes.',
          C:'42 is 7 × 6, the paint sprayer A has USED after 6 hours. These models report what is LEFT: 90 − 42 = 48.'
        },
        tip:'Setting two models equal gives you the INPUT. Read the question once more before writing: if it asks for an amount, a cost or a height, put that input back into either function — and use the other function as a free check, since at that input both have to agree.',
        desmos:'Graph y = 90 − 7x and y = 120 − 12x and tap the crossing: (6, 48). The x-coordinate is the hour; the y-coordinate, 48, is the number of liters the question wants.',
        desmosLatex:['y=90-7x','y=120-12x','(6,48)']
      }
    ]
  });
})();
