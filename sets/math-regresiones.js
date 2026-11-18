/* SAT Studio question set — Math: Regressions Lab (REG-01 to REG-24)
   Todo el set gira alrededor de UNA destreza de calculadora: correr una
   regresión en Desmos (lineal, exponencial, cuadrática) y saber leer lo que
   devuelve. Cada número se comprobó con numpy.polyfit antes de escribirse
   (la línea de mínimos cuadrados de cada tabla da EXACTAMENTE la que dice la
   explicación). Lo usa el "Regressions Lab" de Math Topics: las preguntas
   llevan `regresion:true` para que el laboratorio las encuentre. */
(function(){

  function tabla(fx, fy, xs, ys){
    var th = 'style="padding:4px 10px;border:1px solid #c8c8c8"';
    return '<table border="1" cellpadding="6" style="border-collapse:collapse;margin:8px 0">' +
      '<tr><th ' + th + '>' + fx + '</th>' + xs.map(function(v){ return '<td ' + th + '>' + v + '</td>'; }).join('') + '</tr>' +
      '<tr><th ' + th + '>' + fy + '</th>' + ys.map(function(v){ return '<td ' + th + '>' + v + '</td>'; }).join('') + '</tr>' +
      '</table>';
  }
  function L(xs, ys){ return ['x_1=[' + xs.join(',') + ']', 'y_1=[' + ys.join(',') + ']']; }

  var Q = [
    /* ---------------- Warm-up ---------------- */
    {
      id:'REG-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
      skill:'Linear regression: line of best fit from a table, then predict',
      stem:'The table shows five data points. A line of best fit for the data has the form y = mx + b.' +
        tabla('x', 'y', [1,2,3,4,5], [11,12,18,24,25]) +
        'Based on the least-squares line of best fit, what is the predicted value of y when x = 7?',
      choices:{A:'31', B:'34', C:'32', D:'28'},
      correct:'B',
      expCorrect:'Put the table in Desmos as x₁ and y₁ and type y₁ ~ mx₁ + b. Desmos returns m = 4 and b = 6, so the line of best fit is y = 4x + 6. Substitute x = 7: y = 4(7) + 6 = 28 + 6 = 34. (By hand: the mean point is (3, 18), and 4(3) + 6 = 18 ✓ — the least-squares line always passes through the mean point.)',
      expWrong:{
        A:'31 adds the intercept 6 to the LAST data value, 25. A prediction comes from the line, not from the last dot.',
        C:'32 uses only the two end points: they rise 14 over 4 steps, 3.5 per step, so 25 + 2(3.5) = 32. Two points are not the line of best fit — the regression uses all five.',
        D:'28 is 4(7) with the intercept left out. The model is y = 4x + 6, so the 6 still has to be added.'
      },
      tip:'When a question gives a table and says "line of best fit", stop estimating: type the table into Desmos and run y₁ ~ mx₁ + b. It takes 20 seconds and returns the exact least-squares line.',
      desmos:'Type the two lists, then y_1~mx_1+b. Desmos shows m = 4 and b = 6. On a new line type 4(7)+6 to get 34.',
      desmosLatex: L([1,2,3,4,5],[11,12,18,24,25]).concat(['y_1\\sim mx_1+b','4(7)+6'])
    },
    {
      id:'REG-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
      skill:'Running a line of best fit in Desmos: the regression syntax',
      stem:'A student enters the data from a scatterplot into a Desmos table, with the x-values in column x₁ and the y-values in column y₁. Which expression should the student type to have Desmos compute the line of best fit?',
      choices:{A:'y = mx + b', B:'y₁ = mx₁ + b', C:'y₁ ~ mx₁ + b', D:'x₁ ~ my₁ + b'},
      correct:'C',
      expCorrect:'The tilde ~ is what tells Desmos "fit this, don\'t solve it". Written as y₁ ~ mx₁ + b, it finds the values of m and b that make the line as close as possible to every point in the table and prints them, together with r² and the residuals.',
      expWrong:{
        A:'With plain x and y and an equals sign, Desmos just graphs a line with sliders for m and b. It never looks at the table.',
        B:'An equals sign asks Desmos to make every point satisfy the equation exactly, which is impossible for scattered data. Regression needs the tilde ~.',
        D:'This regresses x on y — it swaps the roles of the variables and gives a different line. The SAT always predicts y from x, so y₁ goes on the left.'
      },
      tip:'The regression pattern is always "column on the left, tilde, model with the other column": y₁ ~ mx₁ + b (linear), y₁ ~ ab^x₁ (exponential), y₁ ~ ax₁² + bx₁ + c (parabola). Subscripts must match the table headers.',
      desmos:'Make a table (type "table" or press + then table), fill a few points, then type y_1~mx_1+b on a new line. Swap ~ for = and see the difference.',
      desmosLatex: L([1,2,3,4],[3,5,6,9]).concat(['y_1\\sim mx_1+b'])
    },
    {
      id:'REG-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
      skill:'Residual from a line of best fit',
      stem:'For a group of students, the line of best fit relating hours studied, x, to quiz score, y, is y = 2.5x + 12. One student studied for 8 hours and earned a quiz score of 35. What is the residual for this student?',
      choices:{A:'−3', B:'32', C:'35', D:'3'},
      correct:'D',
      expCorrect:'Residual = actual − predicted. The line predicts 2.5(8) + 12 = 20 + 12 = 32. The student actually scored 35, so the residual is 35 − 32 = 3. A positive residual means the point sits ABOVE the line.',
      expWrong:{
        A:'−3 subtracts in the wrong order (predicted − actual). The residual is always actual minus predicted, so a point above the line has a positive residual.',
        B:'32 is the predicted score, the first step of the calculation, not the residual.',
        C:'35 is the actual score. The residual is how far that actual score is from the prediction.'
      },
      tip:'Residual = actual − predicted ("A minus P", alphabetical). Above the line → positive; below the line → negative; on the line → 0.',
      desmos:'Type y=2.5x+12 and the point (8,35). Tap the line at x = 8: it is at 32, so the point is 3 above it.',
      desmosLatex:['y=2.5x+12','(8,35)']
    },
    {
      id:'REG-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
      skill:'Choosing a regression model for two-variable data',
      stem:'The table shows the values of y for five values of x.' +
        tabla('x', 'y', [0,1,2,3,4], [5,10,20,40,80]) +
        'Which type of model fits these data exactly?',
      choices:{
        A:'An exponential model, y = ab^x',
        B:'A linear model, y = mx + b',
        C:'A parabola model, y = ax² + bx + c',
        D:'No model of these three types fits them exactly'
      },
      correct:'A',
      expCorrect:'Look at what happens from one x to the next: 5 → 10 → 20 → 40 → 80. Each y is DOUBLE the one before, so y is multiplied by the same factor every step. Constant ratio = exponential: y = 5·2^x. In Desmos, y₁ ~ ab^x₁ returns a = 5, b = 2 and r² = 1.',
      expWrong:{
        B:'A linear model needs a constant DIFFERENCE. Here the differences are 5, 10, 20, 40 — they grow, so a line cannot pass through all five points.',
        C:'A parabola needs the differences of the differences to be constant. Here they are 5, 10, 20 — still doubling — so no parabola fits all five exactly.',
        D:'An exponential model does fit exactly: y = 5·2^x gives 5, 10, 20, 40, 80.'
      },
      tip:'Before running any regression, check the table: constant difference → linear; constant ratio → exponential; constant second difference → parabola. Then let Desmos confirm with r² = 1.',
      desmos:'Type the lists, then y_1~ab^{x_1}. Desmos returns a = 5, b = 2 and r² = 1.',
      desmosLatex: L([0,1,2,3,4],[5,10,20,40,80]).concat(['y_1\\sim ab^{x_1}'])
    },
    {
      id:'REG-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
      skill:'Line of best fit: what a negative slope predicts',
      stem:'A scatterplot shows the number of hours, x, that each of 30 phones was used in a day and its remaining battery charge, y, in percent. The line of best fit is y = −3.2x + 96. Which statement is the best interpretation of −3.2 in this context?',
      choices:{
        A:'Each phone loses exactly 3.2 percentage points of charge every hour.',
        B:'For each additional hour of use, the predicted remaining charge decreases by 3.2 percentage points.',
        C:'A phone that is not used at all is predicted to have 3.2 percent charge left.',
        D:'For each 3.2 hours of use, the predicted remaining charge decreases by 1 percentage point.'
      },
      correct:'B',
      expCorrect:'The slope is the change in the PREDICTED y for each one-unit increase in x. Here that is −3.2 percentage points of predicted charge per extra hour of use. The word "predicted" matters: a line of best fit describes the trend, not what every phone does.',
      expWrong:{
        A:'"Each phone … exactly" is too strong. The points scatter around the line, so the slope describes the predicted trend, not a guarantee for every phone.',
        C:'The value when x = 0 is the intercept, 96 percent, not the slope.',
        D:'This reads the slope upside down: −3.2 is percentage points per hour, not hours per percentage point.'
      },
      tip:'Two words every correct slope interpretation has: "predicted" (or "estimated") and "per one unit of x". If a choice says "exactly" or "each one", it is describing the data points, not the model.',
      desmos:'Type y=-3.2x+96 and check x = 5 and x = 6 in the table: 80 and 76.8. One more hour drops the prediction by 3.2.',
      desmosLatex:['y=-3.2x+96']
    },
    {
      id:'REG-06', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
      skill:'Linear regression: slope of the line of best fit from a table',
      stem:'The table shows five data points.' +
        tabla('x', 'y', [1,2,3,4,5], [9,9,14,19,19]) +
        'What is the slope of the least-squares line of best fit for these data?',
      answer:'3',
      expCorrect:'Enter the table in Desmos and run y₁ ~ mx₁ + b: Desmos returns m = 3 and b = 5. The slope is 3. (Notice that no two points give slope 3 by themselves — 9 to 9 is slope 0, 14 to 19 is slope 5 — which is why the regression, not two hand-picked points, is the answer.)',
      expWrong:{},
      tip:'A line of best fit does not have to pass through ANY of the points. Picking two dots and computing rise over run gives a slope, but not the least-squares slope.',
      desmos:'Type the lists, then y_1~mx_1+b. Desmos shows m = 3.',
      desmosLatex: L([1,2,3,4,5],[9,9,14,19,19]).concat(['y_1\\sim mx_1+b'])
    },

    /* ---------------- Test Level ---------------- */
    {
      id:'REG-07', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
      skill:'Linear regression: predict from the line of best fit',
      stem:'A coach recorded the number of weeks, x, that each of six runners had trained and the number of laps, y, each could run without stopping.' +
        tabla('Weeks, x', 'Laps, y', [2,4,6,8,10,12], [24,25,27,34,36,37]) +
        'Based on the least-squares line of best fit for these data, how many laps is a runner predicted to run after 20 weeks of training?',
      answer:'50',
      expCorrect:'Run y₁ ~ mx₁ + b on the table: m = 1.5 and b = 20, so the line is y = 1.5x + 20. At x = 20: y = 1.5(20) + 20 = 30 + 20 = 50 laps.',
      expWrong:{},
      tip:'Predicting beyond the data (x = 20 when the table stops at 12) is called extrapolation. The SAT will still ask you to do it — just use the line.',
      desmos:'Type the lists, then y_1~mx_1+b (m = 1.5, b = 20). Then type 1.5(20)+20 = 50.',
      desmosLatex: L([2,4,6,8,10,12],[24,25,27,34,36,37]).concat(['y_1\\sim mx_1+b','1.5(20)+20'])
    },
    {
      id:'REG-08', type:'spr', domain:'Advanced Math', difficulty:'Media',
      skill:'Exponential function from two points (exponential regression)',
      stem:'The function f is defined by f(x) = a·b^x, where a and b are positive constants. If f(1) = 12 and f(3) = 27, what is the value of f(5)?',
      answer:'60.75',
      expCorrect:'From x = 1 to x = 3 the function is multiplied by b twice: b² = 27/12 = 9/4, so b = 3/2. From x = 3 to x = 5 it is multiplied by b² again: f(5) = 27 · 9/4 = 243/4 = 60.75. (Then a = 12/1.5 = 8, and 8·1.5⁵ = 60.75 ✓.)',
      expWrong:{},
      tip:'Two points are enough for an exponential regression: in Desmos type x₁ = [1, 3], y₁ = [12, 27] and y₁ ~ ab^x₁. Desmos returns a = 8, b = 1.5 exactly, then evaluate.',
      desmos:'Type the two lists and y_1~ab^{x_1}. Desmos gives a = 8 and b = 1.5. Then type 8(1.5)^5.',
      desmosLatex: L([1,3],[12,27]).concat(['y_1\\sim ab^{x_1}','8(1.5)^5'])
    },
    {
      id:'REG-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
      skill:'Residuals: points above the line of best fit',
      stem:'The table shows the temperature, y, in degrees Celsius, of a cup of tea x minutes after it was poured.' +
        tabla('Minutes, x', 'Temperature, y', [1,2,3,4,5,6], [50,44,43,42,41,38]) +
        'For how many of the six data points is the actual temperature greater than the temperature predicted by the least-squares line of best fit?',
      choices:{A:'2', B:'3', C:'4', D:'1'},
      correct:'A',
      expCorrect:'The regression y₁ ~ mx₁ + b gives y = −2x + 50. Predicted values: 48, 46, 44, 42, 40, 38. Residuals (actual − predicted): +2, −2, −1, 0, +1, 0. Only x = 1 and x = 5 have a positive residual, so 2 points are above the line. Two others sit exactly ON it.',
      expWrong:{
        B:'3 assumes half the points must be above and half below. Points can sit exactly on the line — here two do (x = 4 and x = 6).',
        C:'4 counts the two points on the line (residual 0) as above it. "Greater than" needs a residual strictly above 0.',
        D:'1 misses x = 5, where the actual 41 is above the predicted 40.'
      },
      tip:'Desmos stores the residuals for you: after running y₁ ~ mx₁ + b, click "plot" next to residuals e₁ to add a column. Count the positive ones.',
      desmos:'Type the lists and y_1~mx_1+b. Under the regression, tap "plot" next to e₁ to get the residual column: 2, −2, −1, 0, 1, 0.',
      desmosLatex: L([1,2,3,4,5,6],[50,44,43,42,41,38]).concat(['y_1\\sim mx_1+b'])
    },
    {
      id:'REG-10', type:'spr', domain:'Algebra', difficulty:'Media',
      skill:'Linear function from a table (fit with a regression)',
      stem:'For the linear function f, the table shows three values of x and their corresponding values of f(x).' +
        tabla('x', 'f(x)', [-3,1,6], ['17.4','9.0','−1.5']) +
        'What is the value of f(0)?',
      answer:'11.1',
      expCorrect:'The slope from (1, 9.0) to (−3, 17.4) is (17.4 − 9.0)/(−3 − 1) = 8.4/(−4) = −2.1. Going back one step, from x = 1 to x = 0, adds 2.1: f(0) = 9.0 + 2.1 = 11.1. Check with the third point: −2.1(6) + 11.1 = −12.6 + 11.1 = −1.5 ✓.',
      expWrong:{},
      tip:'Ugly decimals in a linear table are a signal to let Desmos do it: x₁, y₁ and y₁ ~ mx₁ + b give m = −2.1 and b = 11.1 with r² = 1 — and the intercept b IS f(0).',
      desmos:'Type the lists and y_1~mx_1+b. Desmos returns m = −2.1 and b = 11.1; b is f(0).',
      desmosLatex: L([-3,1,6],[17.4,9.0,-1.5]).concat(['y_1\\sim mx_1+b'])
    },
    {
      id:'REG-11', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
      skill:'Exponential regression on two-variable data: reading b',
      stem:'The value of a used laptop decreases by about 12% each year. A student fits the model y = ab^x to data on the laptop\'s value, y, in dollars, x years after purchase. Which of the following is closest to the value of b the regression should return?',
      choices:{A:'1.12', B:'0.12', C:'−0.12', D:'0.88'},
      correct:'D',
      expCorrect:'Losing 12% each year means keeping 100% − 12% = 88% of the value: each year the value is multiplied by 0.88. In y = ab^x, b is that yearly multiplier, so b ≈ 0.88. Any decay model has 0 < b < 1.',
      expWrong:{
        A:'1.12 is the multiplier for 12% GROWTH. A value that decreases needs b less than 1.',
        B:'0.12 is the fraction LOST each year. Multiplying by 0.12 would keep only 12% of the value each year.',
        C:'b in an exponential model is always positive; a negative b would make the values flip sign every year.'
      },
      tip:'In y = ab^x: b = 1 + r for growth, b = 1 − r for decay. So b = 0.88 means 12% decay, b = 1.07 means 7% growth. Read the percent straight off b.',
      desmos:'Type y=1000(0.88)^x and check the table: 1000, 880, 774.4… each value is 88% of the one before.',
      desmosLatex:['y=1000(0.88)^x']
    },
    {
      id:'REG-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
      skill:'Least-squares line of best fit passes through the mean point',
      stem:'For a data set, the mean of the x-values is 12 and the mean of the y-values is 40. The least-squares line of best fit for the data has a slope of 2.5. What is the predicted value of y when x = 20?',
      choices:{A:'50', B:'60', C:'90', D:'70'},
      correct:'B',
      expCorrect:'A least-squares line always passes through the mean point (x̄, ȳ) = (12, 40). From x = 12 to x = 20 is 8 units, so the prediction rises 2.5 × 8 = 20 above 40: y = 60. (The line is y − 40 = 2.5(x − 12), that is, y = 2.5x + 10, and 2.5(20) + 10 = 60 ✓.)',
      expWrong:{
        A:'50 is 2.5 × 20, a line through the origin. The line goes through (12, 40), not (0, 0).',
        C:'90 is 2.5 × 20 + 40: it adds the mean of y as if it were the intercept. The mean point is at x = 12, not at x = 0.',
        D:'70 is 40 + 2.5 × 12: it moves 12 units from the mean instead of the 8 units between x = 12 and x = 20.'
      },
      tip:'The point (mean of x, mean of y) is always on the least-squares line. With that point and the slope, use point-slope: y − ȳ = m(x − x̄).',
      desmos:'Type y-40=2.5(x-12) and check x = 20 in the table: 60.',
      desmosLatex:['y-40=2.5(x-12)','(20,60)']
    },
    {
      id:'REG-13', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
      skill:'Residual from a regression on a table',
      stem:'The table shows five data points.' +
        tabla('x', 'y', [1,2,3,4,5], [35,28,36,44,37]) +
        'What is the residual of the data point with x = 4 relative to the least-squares line of best fit?',
      answer:'6',
      expCorrect:'Run y₁ ~ mx₁ + b: m = 2 and b = 30, so the line is y = 2x + 30. At x = 4 it predicts 2(4) + 30 = 38. Residual = actual − predicted = 44 − 38 = 6.',
      expWrong:{},
      tip:'Residual questions are two steps: regression for the line, then actual − predicted. Desmos can do both: the e₁ column lists every residual.',
      desmos:'Type the lists and y_1~mx_1+b, then plot e₁: the fourth residual is 6.',
      desmosLatex: L([1,2,3,4,5],[35,28,36,44,37]).concat(['y_1\\sim mx_1+b'])
    },

    /* ---------------- Hard ---------------- */
    {
      id:'REG-14', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
      skill:'Line of best fit: solve for the x that gives a predicted value',
      stem:'A plant nursery recorded the number of days, x, since planting and the height, y, in centimeters, of five seedlings.' +
        tabla('Days, x', 'Height, y', [10,20,30,40,50], [8,9,15,21,22]) +
        'Based on the least-squares line of best fit, after how many days is a seedling predicted to reach a height of 31 centimeters?',
      answer:'70',
      expCorrect:'Regression: y₁ ~ mx₁ + b gives m = 0.4 and b = 3, so y = 0.4x + 3. Set the prediction equal to 31: 0.4x + 3 = 31 → 0.4x = 28 → x = 70 days.',
      expWrong:{},
      tip:'This time the question gives y and asks for x. After the regression, graph y = 31 too and tap where it crosses the line — Desmos solves it for you.',
      desmos:'Type the lists, y_1~mx_1+b, then y=31. They cross at (70, 31).',
      desmosLatex: L([10,20,30,40,50],[8,9,15,21,22]).concat(['y_1\\sim mx_1+b','y=31','y=0.4x+3'])
    },
    {
      id:'REG-15', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
      skill:'Exponential function from two points that are not consecutive',
      stem:'The function f is defined by f(x) = a·b^x, where a and b are positive constants. If f(2) = 50 and f(5) = 400, what is the value of f(0)?',
      answer:'12.5',
      expCorrect:'From x = 2 to x = 5 the function is multiplied by b three times: b³ = 400/50 = 8, so b = 2. Going back from x = 2 to x = 0 divides by b twice: f(0) = 50/2² = 50/4 = 12.5. And f(0) = a, so a = 12.5.',
      expWrong:{},
      tip:'f(0) of an exponential is always a, the starting value. With two points, divide the outputs to get b raised to the gap in x, then walk back to x = 0. Or: x₁ = [2, 5], y₁ = [50, 400], y₁ ~ ab^x₁.',
      desmos:'Type the two lists and y_1~ab^{x_1}. Desmos returns a = 12.5, b = 2.',
      desmosLatex: L([2,5],[50,400]).concat(['y_1\\sim ab^{x_1}'])
    },
    {
      id:'REG-16', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
      skill:'Parabola through three points: fit with y1 ~ ax1² + bx1 + c',
      stem:'The function f is defined by f(x) = ax² + bx + c, where a, b and c are constants. If f(−1) = 10, f(1) = 2 and f(4) = 5, what is the minimum value of f(x)?',
      answer:'1',
      expCorrect:'In Desmos: x₁ = [−1, 1, 4], y₁ = [10, 2, 5], then y₁ ~ ax₁² + bx₁ + c returns a = 1, b = −4, c = 5. So f(x) = x² − 4x + 5. The vertex is at x = −b/(2a) = 2, and f(2) = 4 − 8 + 5 = 1. By hand: f(1) − f(−1) gives 2b = −8, so b = −4; then a + c = 6 and 16a − 16 + c = 5 give a = 1, c = 5.',
      expWrong:{},
      tip:'Three points determine a parabola, and the fastest way to get it is a regression with r² = 1. Then tap the vertex on the graph. Careful: the question asks for the minimum VALUE (the y of the vertex), not where it happens.',
      desmos:'Type the lists, y_1~ax_1^2+bx_1+c, then y=x^2-4x+5 and tap the vertex: (2, 1).',
      desmosLatex: L([-1,1,4],[10,2,5]).concat(['y_1\\sim ax_1^2+bx_1+c','y=x^2-4x+5'])
    },
    {
      id:'REG-17', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
      skill:'Parabola from a table: maximum value of the function',
      stem:'The function g is defined by g(x) = ax² + bx + c, where a, b and c are constants.' +
        tabla('x', 'g(x)', [0,1,3], ['−3','2','0']) +
        'The table shows three values of x and g(x). What is the maximum value of g(x)?',
      answer:'25/8',
      expCorrect:'g(0) = c = −3. Then a + b − 3 = 2 → a + b = 5, and 9a + 3b − 3 = 0 → 3a + b = 1. Subtract: 2a = −4, a = −2, b = 7. So g(x) = −2x² + 7x − 3. The vertex is at x = −7/(2·−2) = 7/4, and g(7/4) = −2(49/16) + 49/4 − 3 = −49/8 + 98/8 − 24/8 = 25/8 = 3.125.',
      expWrong:{},
      tip:'The vertex of a regression parabola is rarely a whole number. Tap the vertex in Desmos and read 3.125, then grid it as 25/8 or 3.125 — both fit the box.',
      desmos:'Type the lists and y_1~ax_1^2+bx_1+c (a = −2, b = 7, c = −3). Graph y=-2x^2+7x-3 and tap the top: (1.75, 3.125).',
      desmosLatex: L([0,1,3],[-3,2,0]).concat(['y_1\\sim ax_1^2+bx_1+c','y=-2x^2+7x-3'])
    },
    {
      id:'REG-18', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
      skill:'Line of best fit: the effect of removing an outlier on the predicted trend',
      stem:'The table shows six data points.' +
        tabla('x', 'y', [1,2,3,4,5,6], [5,8,11,14,17,5]) +
        'The point (6, 5) is removed and a new least-squares line of best fit is computed for the remaining five points. Which of the following is closest to the change in the slope of the line of best fit?',
      choices:{A:'It decreases by about 2.1.', B:'It increases by about 0.9.', C:'It increases by about 2.1.', D:'It does not change.'},
      correct:'C',
      expCorrect:'With all six points, y₁ ~ mx₁ + b gives m ≈ 0.86 (exactly 6/7): the low point at the far right drags the line down. Without it, the five remaining points lie exactly on y = 3x + 2, so the slope is 3. The change is 3 − 0.86 ≈ 2.1, an increase.',
      expWrong:{
        A:'Right size, wrong direction. The removed point sits far BELOW the trend on the right side, so it was pulling the slope down; removing it raises the slope.',
        B:'0.9 is the old slope itself (about 0.86), not the change in the slope.',
        D:'An outlier at the edge of the data has a lot of leverage on a least-squares line. Removing (6, 5) changes the slope from about 0.86 to 3.'
      },
      tip:'An outlier far from the mean x-value has the most pull on a regression line. Run the regression twice in Desmos — once with all the points, once without — and compare m.',
      desmos:'Type the six-point lists and y_1~mx_1+b: m ≈ 0.857. Then delete the last number from each list: m becomes 3.',
      desmosLatex: L([1,2,3,4,5,6],[5,8,11,14,17,5]).concat(['y_1\\sim mx_1+b'])
    },
    {
      id:'REG-19', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
      skill:'Exponential decay model from a table: the yearly rate',
      stem:'The number of fish in a lake is modeled by the function P(t) = a·b^t, where t is the number of years since 2020 and a and b are positive constants. The model gives P(0) = 800 and P(2) = 578. According to the model, the number of fish decreases by p% each year. What is the value of p?',
      answer:'15',
      expCorrect:'P(0) = a = 800. Then 800b² = 578 → b² = 578/800 = 0.7225 → b = 0.85. Each year the population is multiplied by 0.85, that is, it keeps 85% and loses 15%. So p = 15.',
      expWrong:{},
      tip:'Decay rate = 1 − b, written as a percent. The trap answer is 85 (that is b, the fraction KEPT) or 27.75 (the total two-year loss).',
      desmos:'Type x_1=[0,2], y_1=[800,578] and y_1~ab^{x_1}. Desmos returns b = 0.85, so 1 − 0.85 = 0.15.',
      desmosLatex: L([0,2],[800,578]).concat(['y_1\\sim ab^{x_1}'])
    },
    {
      id:'REG-20', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
      skill:'Two lines of best fit: when the predicted values are equal',
      stem:'For store A, the line of best fit relating weeks since opening, x, to weekly customers, y, in hundreds, is y = 1.2x + 30. For store B, the line of best fit is y = 2x + 14. For what value of x do the two lines of best fit predict the same number of weekly customers?',
      choices:{A:'54', B:'5', C:'20', D:'16'},
      correct:'C',
      expCorrect:'Set the predictions equal: 1.2x + 30 = 2x + 14 → 16 = 0.8x → x = 20 weeks. (Both predict 1.2(20) + 30 = 54 hundred customers then.)',
      expWrong:{
        A:'54 is the predicted number of customers (in hundreds) at that moment — the y-value, not the x the question asks for.',
        B:'5 divides 16 by 3.2, the SUM of the slopes. The gap closes at the DIFFERENCE of the slopes, 2 − 1.2 = 0.8.',
        D:'16 is the gap between the intercepts, 30 − 14. It still has to be divided by how fast the gap closes, 0.8 per week.'
      },
      tip:'"When do two models agree?" = graph both and tap the crossing point. Read which coordinate the question wants before you answer.',
      desmos:'Graph y=1.2x+30 and y=2x+14; they cross at (20, 54).',
      desmosLatex:['y=1.2x+30','y=2x+14']
    },

    /* ---------------- Brutal ---------------- */
    {
      id:'REG-21', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
      skill:'Parabola through three points and its axis of symmetry',
      stem:'The function f is defined by f(x) = ax² + bx + c, where a, b and c are constants. The graph of y = f(x) passes through the points (1, 4), (3, 4) and (4, 10). If f(k) = f(−2) and k ≠ −2, what is the value of k?',
      answer:'6',
      expCorrect:'(1, 4) and (3, 4) have the same height, so the axis of symmetry is halfway between them: x = 2. Points that mirror each other across x = 2 have equal outputs. −2 is 4 units left of the axis, so its mirror is 4 units right: k = 2 + 4 = 6. (The regression confirms: a = 2, b = −8, c = 10, and f(−2) = f(6) = 42.)',
      expWrong:{},
      tip:'Equal outputs ⇒ symmetric around the vertex: x₁ + x₂ = 2h. Here −2 + k = 2(2) gives k = 6. If you don\'t see it, run the parabola regression and graph y = f(−2) to find the other crossing.',
      desmos:'Type x_1=[1,3,4], y_1=[4,4,10] and y_1~ax_1^2+bx_1+c. Graph y=2x^2-8x+10 and y=42: they cross at x = −2 and x = 6.',
      desmosLatex: L([1,3,4],[4,4,10]).concat(['y_1\\sim ax_1^2+bx_1+c','y=2x^2-8x+10','y=42'])
    },
    {
      id:'REG-22', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
      skill:'Exponential function from two points, then solve for the input',
      stem:'The function f is defined by f(t) = a·b^t, where a and b are positive constants. If f(1) = 96 and f(3) = 54, for what value of t is f(t) = 30.375?',
      answer:'5',
      expCorrect:'b² = 54/96 = 9/16, so b = 3/4 and a = 96/(3/4) = 128. Solve 128(3/4)^t = 30.375 → (3/4)^t = 30.375/128 = 0.2373046875 = 243/1024 = (3/4)⁵. So t = 5. (Shortcut: from t = 3, multiply by 3/4 twice: 54 → 40.5 → 30.375.)',
      expWrong:{},
      tip:'After the exponential regression, graph the model and the horizontal line y = target, then tap the crossing. No logarithms needed on the SAT.',
      desmos:'Type x_1=[1,3], y_1=[96,54] and y_1~ab^{x_1} (a = 128, b = 0.75). Then graph y=128(0.75)^x and y=30.375; they cross at x = 5.',
      desmosLatex: L([1,3],[96,54]).concat(['y_1\\sim ab^{x_1}','y=128(0.75)^x','y=30.375'])
    },
    {
      id:'REG-23', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
      skill:'Exponential function with a vertical shift, from a table',
      stem:'The function h is defined by h(x) = a·b^x + c, where a, b and c are constants and b > 0.' +
        tabla('x', 'h(x)', [0,1,2,3,4], ['−2','1','7','19','43']) +
        'The table shows five values of x and h(x). What is the value of a + b + c?',
      answer:'0',
      expCorrect:'The differences are 3, 6, 12, 24: each is double the one before, so b = 2. For h(x) = a·2^x + c, the difference h(x+1) − h(x) = a·2^x, and at x = 0 it is 3, so a = 3. Then h(0) = 3 + c = −2 gives c = −5. a + b + c = 3 + 2 − 5 = 0. Desmos: y₁ ~ ab^x₁ + c returns a = 3, b = 2, c = −5 with r² = 1.',
      expWrong:{},
      tip:'A shifted exponential does not have a constant ratio of outputs — but its DIFFERENCES do. When the ratio test fails, try ratios of differences, or just run y₁ ~ ab^x₁ + c.',
      desmos:'Type the lists and y_1~ab^{x_1}+c. Desmos returns a = 3, b = 2, c = −5.',
      desmosLatex: L([0,1,2,3,4],[-2,1,7,19,43]).concat(['y_1\\sim ab^{x_1}+c'])
    },
    {
      id:'REG-24', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
      skill:'Line of best fit after re-labeling x: the new intercept',
      stem:'A researcher fits a line of best fit to data on a city\'s population, y, in thousands, and obtains y = 1.8t + 42, where t is the number of years since 2015. The researcher then redoes the regression on the same data, but with x equal to the actual year (for example, x = 2015 instead of t = 0). The new line of best fit is y = 1.8x + k. What is the value of k?',
      choices:{A:'42', B:'−3627', C:'3669', D:'−3585'},
      correct:'D',
      expCorrect:'Same data, same trend, so the slope stays 1.8; only the labels on the x-axis shift. Since t = x − 2015, substitute: y = 1.8(x − 2015) + 42 = 1.8x − 3627 + 42 = 1.8x − 3585. So k = −3585. Check: in 2015, 1.8(2015) − 3585 = 3627 − 3585 = 42 ✓.',
      expWrong:{
        A:'42 is the predicted population in 2015. With x = actual year, the intercept is the prediction for the year 0, two thousand years earlier.',
        B:'−3627 is 1.8 × (−2015), the shift by itself. The original intercept 42 still has to be added.',
        C:'3669 adds 1.8 × 2015 instead of subtracting it. Moving the data 2015 units to the right lowers the y-intercept.'
      },
      tip:'Shifting x by h changes only the intercept: y = m(x − h) + b. A rescaled x (like months instead of years) changes the slope. Decide which one happened before touching numbers.',
      desmos:'Graph y=1.8(x-2015)+42 and y=1.8x-3585: they are the same line. Check x = 2015 in the table: 42.',
      desmosLatex:['y=1.8(x-2015)+42','y=1.8x-3585']
    }
  ];

  Q.forEach(function(q){ q.regresion = true; });

  window.SAT_SETS.push({
    id: 'math-regresiones',
    title: 'Regressions Lab — the Desmos regression toolkit',
    section: 'math',
    level: 'Difícil',
    description: 'Twenty-four questions built around one calculator move: running a regression in Desmos (linear, exponential, parabola) and reading what it returns — slope, intercept, residuals, the mean point, outliers and shifted models.',
    minutes: 36,
    questions: Q
  });
})();
