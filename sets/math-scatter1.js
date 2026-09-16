/* SAT Studio question set — Math: Scatterplots & Models (SCT-01 to SCT-12) */
(function(){

  function r(n){ return Math.round(n * 10) / 10; }

  /* A list of [x, y] data pairs turned into plotted dots. */
  function dots(list, X, Y){
    return '<g fill="#324DC7">' + list.map(function(p){
      return '<circle cx="' + r(X(p[0])) + '" cy="' + r(Y(p[1])) + '" r="3.6"/>';
    }).join('') + '</g>';
  }

  /* Bicycles rented against daily high temperature. The nine points below have a
     least-squares line of EXACTLY y = 3x − 10, which is the line drawn. */
  var BIKE_PTS = [[8,11],[11,21],[14,34],[17,44],[19,50],[22,59],[26,60],[27,74],[29,76]];
  var FIG_BIKES =
    '<svg viewBox="0 0 340 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scatterplot of the number of bicycles rented (y) against the daily high temperature in degrees Celsius (x) for 9 days, with the line of best fit drawn. The points are (8, 11), (11, 21), (14, 34), (17, 44), (19, 50), (22, 59), (26, 60), (27, 74) and (29, 76). The line rises from left to right and passes through (10, 20) and (30, 80).">' +
    '<g fill="none" stroke="#e4e4e4"><path d="M140 34V205M225 34V205M310 34V205M55 148H332M55 91H332M55 34H332"/></g>' +
    '<path d="M55 28V205H332" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<path d="M97.5 195.5L310 53" fill="none" stroke="#B8860B" stroke-width="2.5"/>' +
    dots(BIKE_PTS, function(x){ return 55 + x * 8.5; }, function(y){ return 205 - y * 1.9; }) +
    '<g font-size="12" font-family="Georgia,serif" fill="#1e1e1e">' +
    '<g text-anchor="middle"><text x="140" y="221">10</text><text x="225" y="221">20</text>' +
    '<text x="310" y="221">30</text>' +
    '<text x="195" y="243" font-size="13">x (degrees Celsius)</text>' +
    '<text x="16" y="116" font-size="13" transform="rotate(-90 16 116)">y (bicycles)</text></g>' +
    '<g text-anchor="end"><text x="48" y="209">0</text><text x="48" y="152">30</text>' +
    '<text x="48" y="95">60</text><text x="48" y="38">90</text></g></g></svg>';

  /* Points gained against practice sets completed. Least-squares line of these
     nine points is EXACTLY y = 4x + 10; four of them carry labels. */
  var GAIN_PTS = [[1,12],[2,23],[4,20],[5,31],[6,36],[7,39],[8,40],[9,48],[10,49]];
  var FIG_GAIN =
    '<svg viewBox="0 0 340 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scatterplot of points gained (y) against practice sets completed (x) for 9 students, with the line of best fit drawn through (0, 10) and (10, 50). The labeled points are P at (2, 23), Q at (4, 20), R at (6, 36) and S at (9, 48). The unlabeled points are (1, 12), (5, 31), (7, 39), (8, 40) and (10, 49).">' +
    '<g fill="none" stroke="#e4e4e4"><path d="M103 40V205M199 40V205M295 40V205M55 143H325M55 81H325"/></g>' +
    '<path d="M55 34V205H325" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<path d="M67 167.8L307 43.8" fill="none" stroke="#B8860B" stroke-width="2.5"/>' +
    dots(GAIN_PTS, function(x){ return 55 + x * 24; }, function(y){ return 205 - y * 3.1; }) +
    '<g font-size="12" font-family="Georgia,serif" fill="#1e1e1e">' +
    '<g font-size="13" font-style="italic"><text x="95" y="130" text-anchor="end">P</text>' +
    '<text x="159" y="149">Q</text><text x="191" y="90" text-anchor="end">R</text>' +
    '<text x="263" y="53" text-anchor="end">S</text></g>' +
    '<g text-anchor="middle"><text x="103" y="221">2</text><text x="199" y="221">6</text>' +
    '<text x="295" y="221">10</text><text x="190" y="243" font-size="13">x (practice sets)</text>' +
    '<text x="16" y="116" font-size="13" transform="rotate(-90 16 116)">y (points gained)</text></g>' +
    '<g text-anchor="end"><text x="48" y="209">0</text><text x="48" y="147">20</text>' +
    '<text x="48" y="85">40</text></g></g></svg>';

  /* Shares of a video: the ratio of consecutive values is about 1.6, so the cloud
     bends upward and no straight line can follow it. */
  var SHARE_PTS = [[1,2],[2,3],[3,5],[4,8],[5,13],[6,20],[7,32]];
  var FIG_SHARES =
    '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scatterplot of the number of shares of a video, in thousands (y), against the number of hours since it was posted (x). The seven points are (1, 2), (2, 3), (3, 5), (4, 8), (5, 13), (6, 20) and (7, 32); they curve upward and get steeper from left to right. No line is drawn.">' +
    '<g fill="none" stroke="#e4e4e4"><path d="M116 40V195M182 40V195M248 40V195M50 149H305M50 103H305M50 57H305"/></g>' +
    '<path d="M50 34V195H305" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    dots(SHARE_PTS, function(x){ return 50 + x * 33; }, function(y){ return 195 - y * 4.6; }) +
    '<g font-size="12" font-family="Georgia,serif" fill="#1e1e1e">' +
    '<g text-anchor="middle"><text x="116" y="211">2</text><text x="182" y="211">4</text>' +
    '<text x="248" y="211">6</text><text x="178" y="233" font-size="13">x (hours)</text>' +
    '<text x="14" y="112" font-size="13" transform="rotate(-90 14 112)">y (thousands of shares)</text></g>' +
    '<g text-anchor="end"><text x="43" y="199">0</text><text x="43" y="153">10</text>' +
    '<text x="43" y="107">20</text><text x="43" y="61">30</text></g></g></svg>';

  /* Nine clustered points lying exactly on y = 2x + 3, plus one high-left outlier.
     The line drawn is the best fit for all TEN: y = 0.487x + 16.545. */
  var CLUS_PTS = [[1,30],[4,11],[5,13],[6,15],[7,17],[8,19],[9,21],[10,23],[11,25],[12,27]];
  var FIG_OUTLIER =
    '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scatterplot of 10 points with the line of best fit for all 10 drawn. Nine of them form a tight, steeply rising cluster: (4, 11), (5, 13), (6, 15), (7, 17), (8, 19), (9, 21), (10, 23), (11, 25) and (12, 27). The tenth point, (1, 30), sits far above and to the left of that cluster. The fitted line is nearly flat, running from about (0.5, 16.8) on the left to about (12.5, 22.6) on the right.">' +
    '<g fill="none" stroke="#e4e4e4"><path d="M126 40V195M202 40V195M278 40V195M50 147H305M50 99H305M50 51H305"/></g>' +
    '<path d="M50 34V195H305" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<path d="M59.5 114.4L287.5 86.4" fill="none" stroke="#B8860B" stroke-width="2.5"/>' +
    dots(CLUS_PTS, function(x){ return 50 + x * 19; }, function(y){ return 195 - y * 4.8; }) +
    '<g font-size="12" font-family="Georgia,serif" fill="#1e1e1e">' +
    '<g text-anchor="middle"><text x="126" y="211">4</text><text x="202" y="211">8</text>' +
    '<text x="278" y="211">12</text><text x="178" y="233" font-size="13">x</text>' +
    '<text x="14" y="112" font-size="13" transform="rotate(-90 14 112)">y</text></g>' +
    '<g text-anchor="end"><text x="43" y="199">0</text><text x="43" y="151">10</text>' +
    '<text x="43" y="103">20</text><text x="43" y="55">30</text></g></g></svg>';

  window.SAT_SETS.push({
    id: 'math-scatter1',
    title: 'Scatterplots & Models',
    section: 'math',
    level: 'Media',
    description: 'Two-variable data: reading a line of best fit (prediction, slope and intercept in context), residuals, choosing between a linear and an exponential model, extrapolating past the data, and what the shape of a scatterplot does and does not license.',
    minutes: 20,
    questions: [
      {
        id:'SCT-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Line of best fit: what the slope means in context',
        stem:'A biologist measured the height of a bamboo shoot once a week and made a scatterplot of the data. The line of best fit is y = 1.8x + 4.2, where x is the number of weeks since the study began and y is the predicted height, in centimeters. Which of the following is the best interpretation of the number 1.8 in this context?',
        choices:{
          A:'The predicted height of the shoot was 1.8 centimeters when the study began.',
          B:'The shoot is predicted to reach a height of 1.8 centimeters after 4.2 weeks.',
          C:'The predicted height of the shoot increases by 1.8 centimeters each week.',
          D:'The shoot gains one more week of age for every 1.8 centimeters it grows.'
        },
        correct:'C',
        expCorrect:'In y = mx + b the slope m is the change in y produced by a one-unit change in x. Here x is counted in weeks and y in centimeters, so the slope carries the units "centimeters per week": one more week adds 1.8 more predicted centimeters. (Check: at x = 3, y = 1.8(3) + 4.2 = 9.6; at x = 4, y = 1.8(4) + 4.2 = 11.4, and 11.4 − 9.6 = 1.8 ✓.)',
        expWrong:{
          A:'That is the y-intercept, 4.2, not the slope. At x = 0 the model predicts 4.2 centimeters; 1.8 is what gets added for each week after that.',
          B:'This swaps the two numbers and turns 4.2 into a number of weeks. In y = 1.8x + 4.2 the 4.2 is a height in centimeters at week 0, not a time.',
          D:'This reads the slope upside down. The slope is centimeters per week, not weeks per centimeter; the reciprocal, about 0.56 weeks per centimeter, is what this sentence describes.'
        },
        tip:'The slope of a line of best fit always carries the units "y-units per one x-unit", and the intercept is the predicted y when x = 0. Say the slope out loud with its units BEFORE you read the choices and the slope-intercept swap stops working.',
        desmos:'Type y=1.8x+4.2 and open the table at x = 3 and x = 4: the values are 9.6 and 11.4. One extra week is worth exactly 1.8 centimeters.',
        desmosLatex:['y=1.8x+4.2']
      },
      {
        id:'SCT-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Line of best fit: prediction read from a graph',
        figure:FIG_BIKES,
        stem:'The scatterplot shows the number of bicycles rented, y, at a rental stand on each of 9 days, together with the daily high temperature, x, in degrees Celsius. The line of best fit for the data is also shown. Based on the line of best fit, what is the predicted number of bicycles rented on a day with a high temperature of 26 degrees Celsius?',
        choices:{A:'68', B:'78', C:'88', D:'60'},
        correct:'A',
        expCorrect:'Read the LINE, not a dot. The line of best fit passes through (10, 20) and (30, 80), so its slope is (80 − 20)/(30 − 10) = 60/20 = 3, and since 3(10) − 20 = 10 the equation is y = 3x − 10 (check at x = 30: 90 − 10 = 80 ✓). Substitute x = 26: y = 3(26) − 10 = 78 − 10 = 68. On the graph, above x = 26 the line sits a little above the gridline at 60.',
        expWrong:{
          B:'78 is 3(26) with the intercept left out. The model is y = 3x − 10, so the 10 still has to be subtracted.',
          C:'88 adds 10 instead of subtracting it. The line crosses the vertical axis below the origin, so the constant is −10, not +10.',
          D:'60 is the height of the DATA POINT that happens to sit at x = 26, not the height of the line there. That point lies 8 below the line; the gap between them is the residual, not the prediction.'
        },
        tip:'A prediction from a line of best fit always comes from the LINE, never from a nearby dot. Pick two points the line clearly passes through, build y = mx + b from them, then substitute. Whatever distance is left between a dot and the line is a residual.',
        desmos:'Type y=3x-10 and the point (26,68): the line passes through it. Now add (26,60), the real data point, and the 8-unit gap you see is the residual.',
        desmosLatex:['y=3x-10','(26,68)','(26,60)']
      },
      {
        id:'SCT-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Line of best fit: what the y-intercept means in context',
        stem:'A dealer made a scatterplot relating the age of a used delivery van, x, in years, and its resale value, y, in thousands of dollars. The line of best fit for the data is y = −2.4x + 31. Which of the following is the best interpretation of the number 31 in this context?',
        choices:{
          A:'The predicted resale value drops by 31 thousand dollars for each year of age.',
          B:'The van is predicted to be worth nothing once it reaches 31 years of age.',
          C:'The resale values in the study ranged from 2.4 to 31 thousand dollars.',
          D:'A van of age 0 years has a predicted resale value of 31 thousand dollars.'
        },
        correct:'D',
        expCorrect:'The y-intercept is the predicted y when x = 0. Substitute: y = −2.4(0) + 31 = 31. Since x is an age in years and y is a resale value in thousands of dollars, the model predicts 31 thousand dollars for a van of age 0 — a brand-new van.',
        expWrong:{
          A:'That is the slope, −2.4, not the intercept. Each additional year lowers the predicted value by 2.4 thousand dollars; 31 is where the model starts.',
          B:'Setting y = 0 gives −2.4x + 31 = 0, so x = 31/2.4 ≈ 12.9 years, not 31 years. The 31 is measured on the value axis, not on the age axis.',
          C:'The 2.4 and the 31 are the slope and the intercept of a model, not the smallest and largest numbers in the data. A line of best fit says nothing directly about the range of the values.'
        },
        tip:'Intercept = the predicted y when x = 0, read with the y-units. Slope = y-units per one x-unit. Both numbers in y = mx + b describe the MODEL, never the spread of the data, so "ranged from" answers are always a trap.',
        desmos:'Type y=-2.4x+31 and look at where the line meets the vertical axis: (0, 31). That point is the prediction for a van of age 0.',
        desmosLatex:['y=-2.4x+31']
      },
      {
        id:'SCT-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Residuals: which point the model overestimates',
        figure:FIG_GAIN,
        stem:'The scatterplot shows, for each of 9 students in a study group, the number of practice sets completed, x, and the number of points gained between a first and a second diagnostic, y. The line of best fit is shown, and four of the points are labeled P, Q, R and S. For which of these four points does the line of best fit OVERESTIMATE the number of points gained?',
        choices:{A:'P', B:'Q', C:'R', D:'S'},
        correct:'B',
        expCorrect:'The line passes through (0, 10) and (10, 50), so it is y = 4x + 10. "Overestimates" means the predicted value is greater than the actual one, which on the picture means the LINE is above the point. Check the four: P is at (2, 23) against a prediction of 4(2) + 10 = 18, so P is 5 above the line; R is at (6, 36) against 34, also above; S is at (9, 48) against 46, above again. Only Q, at (4, 20), sits below its prediction of 4(4) + 10 = 26, so the model overestimates Q by 26 − 20 = 6 points.',
        expWrong:{
          A:'P sits ABOVE the line: the model predicts 18 points at x = 2 and P actually gained 23, a residual of +5. A point above the line is one the model UNDERestimates.',
          C:'R is above the line as well — predicted 34, actual 36, residual +2. A small gap is still a positive one, so the model falls short of R rather than overshooting it.',
          D:'S is above the line too (predicted 46, actual 48). Being the highest point on the plot does not make it an overestimate; what decides it is which side of the line the point is on.'
        },
        tip:'Residual = actual − predicted, and the picture tells you the sign: point ABOVE the line → positive residual → the model UNDERestimates it; point BELOW the line → negative residual → the model OVERestimates it. Find the point, slide straight up or down to the line, and see which one is on top.',
        desmos:'Type y=4x+10 and then the four labeled points (2,23), (4,20), (6,36) and (9,48). Only (4,20) lands below the line, so that is the one the model overestimates.',
        desmosLatex:['y=4x+10','(2,23)','(4,20)','(6,36)','(9,48)']
      },
      {
        id:'SCT-05', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Residuals: size of the overestimate',
        stem:'A taster rates the aroma of a bag of coffee beans on a 100-point scale. For a collection of bags, a scatterplot relates the number of days d that a bag has been open and its aroma score s. The line of best fit for the data is s = 92 − 1.5d. One bag that had been open for 12 days received an aroma score of 68. By how many points does the line of best fit overestimate the aroma score of that bag?',
        answer:'6',
        expCorrect:'First get the prediction from the model: s = 92 − 1.5(12) = 92 − 18 = 74. The bag actually scored 68, so the residual is actual − predicted = 68 − 74 = −6. The residual is negative, which confirms that the line sits above the point, that is, the model OVERestimates. The question asks by how much, so report the size of the gap: 74 − 68 = 6 points. Answer: 6.',
        expWrong:{},
        tip:'Residual = actual − predicted, always in that order. Negative → the model overestimated; positive → it underestimated. When the question asks "by how many", it wants the SIZE of the gap, so hand back a positive number even when the residual is negative.',
        desmos:'Type 92-1.5*12 and Desmos returns 74, the prediction. Graph y=92-1.5x with the point (12,68) and you can see the line running 6 above that point.',
        desmosLatex:['y=92-1.5x','(12,68)','92-1.5*12']
      },
      {
        id:'SCT-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Choosing a model: linear or exponential, from a list of values',
        stem:'A biologist counts the number of duckweed fronds floating in a tank once a week. The counts for weeks 0 through 4 are 12, 18, 27, 40.5 and 60.75. Which model best fits these counts, and for which reason?',
        choices:{
          A:'A linear model, because the counts go up by the same amount each week.',
          B:'An exponential model, because the counts go up by the same amount each week.',
          C:'An exponential model, because the counts are multiplied by the same factor each week.',
          D:'A linear model, because the counts go up by a larger amount each week than the week before.'
        },
        correct:'C',
        expCorrect:'Test both patterns. DIFFERENCES: 18 − 12 = 6, 27 − 18 = 9, 40.5 − 27 = 13.5, 60.75 − 40.5 = 20.25 — not constant, so no straight line fits. RATIOS: 18/12 = 1.5, 27/18 = 1.5, 40.5/27 = 1.5, 60.75/40.5 = 1.5 — the same multiplier every single week, which is exactly what an exponential model does. The model is y = 12(1.5)^x. (Check week 4: 12(1.5)⁴ = 12(5.0625) = 60.75 ✓.)',
        expWrong:{
          A:'Both halves are wrong. The amounts added are 6, then 9, then 13.5, then 20.25 — nowhere near equal, so the data are not linear.',
          B:'The model is right but the reason belongs to a linear one. Exponential means equal RATIOS (times 1.5 each week); equal differences is the linear fingerprint.',
          D:'The reason given is exactly what rules a linear model OUT. A linear model adds the same amount every step; growing by a bigger amount each week is what an exponential model does.'
        },
        tip:'To choose between linear and exponential, run both tests on consecutive values: SUBTRACT them (equal differences → linear) and DIVIDE them (equal ratios → exponential). A constant multiplier is the fingerprint of exponential growth, and a constant difference is the fingerprint of a line.',
        desmos:'Plot (0,12), (1,18), (2,27), (3,40.5) and (4,60.75), then type y=12*1.5^x: the curve goes through all five points. Try any straight line and it misses the ends.',
        desmosLatex:['y=12*1.5^x','(0,12)','(1,18)','(2,27)','(3,40.5)','(4,60.75)']
      },
      {
        id:'SCT-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Choosing a model: linear or exponential, from a scatterplot',
        figure:FIG_SHARES,
        stem:'The scatterplot shows the number of shares of a video, y, in thousands, x hours after the video was posted. Which of the following statements about modeling these data is true?',
        choices:{
          A:'A linear model fits well, because consecutive points go up by about the same amount.',
          B:'An exponential model fits better: each hour multiplies the shares by about 1.6.',
          C:'A linear model fits well, because the number of shares never decreases as the hours go by.',
          D:'An exponential model fits better, because the points eventually level off at a ceiling.'
        },
        correct:'B',
        expCorrect:'Read the heights: about 2, 3, 5, 8, 13, 20 and 32 thousand shares at hours 1 through 7. The DIFFERENCES grow steadily — 1, 2, 3, 5, 7, 12 — so no straight line can stay close to all seven points. The RATIOS, though, hold steady near 1.6: 3/2 = 1.5, 5/3 ≈ 1.7, 8/5 = 1.6, 13/8 ≈ 1.6, 20/13 ≈ 1.5, 32/20 = 1.6. A roughly constant multiplier per hour is exponential growth, and y = 1.25(1.6)^x tracks the points closely.',
        expWrong:{
          A:'The jumps are not about the same size: they climb from 1 thousand in the first hour to 12 thousand in the last one. Equal jumps are what a linear model needs.',
          C:'Never decreasing is not the same as linear. A curve that bends upward also never decreases; what makes a model linear is a CONSTANT rate of change, not the direction alone.',
          D:'Nothing here levels off — the plot gets steeper as it moves right. Leveling off at a ceiling describes a different shape entirely and is not what this scatterplot shows.'
        },
        tip:'For a scatterplot that bends upward, test the ratios of consecutive y-values: roughly constant ratio → exponential, roughly constant difference → linear. "It always increases" tells you nothing about which model to pick, since both of them increase.',
        desmos:'Plot (1,2), (2,3), (3,5), (4,8), (5,13), (6,20), (7,32), then compare y=1.25*1.6^x with a line such as y=5x-8: the curve hugs the points and the line misses both ends.',
        desmosLatex:['y=1.25*1.6^x','y=5x-8','(1,2)','(4,8)','(7,32)']
      },
      {
        id:'SCT-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Extrapolation: predicting outside the range of the data',
        stem:'For 40 lakes, a researcher recorded the average summer water temperature, in degrees Celsius, and the number of algae species observed. The temperatures in the study ranged from 16 to 26 degrees, and the line of best fit is y = 0.6x + 14, where x is the temperature and y is the number of species. A student uses this line to predict the number of species in a lake whose average summer temperature is 45 degrees. Which of the following is the best reason to doubt that prediction?',
        choices:{
          A:'The prediction uses a temperature far outside the range of the data the model came from.',
          B:'The line of best fit does not pass exactly through any of the 40 data points.',
          C:'The model gives a value that is not a whole number, and species are counted in whole numbers.',
          D:'The slope of the model, 0.6 species per degree, is too small to be meaningful.'
        },
        correct:'A',
        expCorrect:'The model was fitted to lakes between 16 and 26 degrees, so that is the only stretch the data speak about. Using it at 45 degrees is EXTRAPOLATION: it assumes the same straight-line relationship keeps holding 19 degrees past anything that was ever measured, and nothing in the study supports that. Real relationships bend, flatten or reverse outside the observed range — past some temperature the algae die off rather than multiply. The arithmetic still runs, 0.6(45) + 14 = 41 species, but that 41 has no evidence behind it.',
        expWrong:{
          B:'A line of best fit almost never passes exactly through the data points; that is normal and is not what makes this particular prediction risky. The same line is perfectly usable anywhere between 16 and 26 degrees.',
          C:'Rounding is a detail, not a reason to distrust a model. A prediction of 40.5 species is fine, and it would still be fine inside the range the model was built from.',
          D:'A slope of 0.6 is a real rate: about 3 more species for every 5 degrees. The size of the slope is not the problem here; WHERE the prediction is being made is.'
        },
        tip:'A line of best fit is evidence only across the range of x that the data actually cover. Predicting inside that range is interpolation and is fair; predicting outside it is extrapolation, and the model carries no evidence there. Always check the stated range before trusting a prediction.',
        desmos:'Graph y=0.6x+14, then graph it again restricted to the interval from x = 16 to x = 26. That short segment is the part the data support; x = 45 is far off the right end of it.',
        desmosLatex:['y=0.6x+14','y=0.6x+14\\left\\{16\\le x\\le26\\right\\}']
      },
      {
        id:'SCT-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Scatterplot shape: what a strong association does and does not license',
        stem:'For 120 neighborhoods in one city, a researcher plotted the number of public bookshelves, x, against the median household income, y, in thousands of dollars. The scatterplot shows a strong positive linear association, and the line of best fit is y = 1.4x + 38. Which of the following conclusions is best supported by these data?',
        choices:{
          A:'Installing more public bookshelves in a neighborhood would raise its median household income.',
          B:'Every neighborhood in this city with 20 bookshelves has a median household income of 66 thousand dollars.',
          C:'A neighborhood’s median household income is determined mainly by its number of public bookshelves.',
          D:'Neighborhoods in this city with more public bookshelves tend to have a higher median household income.'
        },
        correct:'D',
        expCorrect:'A strong positive association supports exactly one kind of claim, and D is it: within the group that was studied, higher x goes WITH higher y, stated as a tendency. Everything else in the list adds something the plot cannot deliver — a cause, a guarantee, or a ranking of causes. (The line does give 1.4(20) + 38 = 66 thousand dollars at 20 bookshelves, but that is an average prediction, not a promise about any one neighborhood.)',
        expWrong:{
          A:'This turns association into CAUSE. The researcher only observed neighborhoods; nobody installed bookshelves and watched what happened, so the data cannot say what installing more would do. A lurking variable such as the size of the municipal budget could easily be driving both numbers.',
          B:'The line of best fit predicts an AVERAGE, not a guarantee. Even in a strong association the individual points scatter above and below the line, so "every neighborhood" is far more than the plot shows.',
          C:'Even a strong association does not say that one variable "determines" another, and it certainly does not rank causes against each other. The plot shows the two move together, not that one is the main driver of the other.'
        },
        tip:'An observational scatterplot licenses one thing: an association, inside the group that was sampled, phrased as a tendency. It never licenses cause ("would raise"), never a guarantee about an individual ("every"), and never a ranking of causes ("determined mainly by"). Only a randomized experiment supports a causal claim.',
        desmos:'Type y=1.4x+38 with the point (20,66): the line passes right through it. That is the model’s average prediction at 20 bookshelves, not a value any single neighborhood is promised.',
        desmosLatex:['y=1.4x+38','(20,66)']
      },
      {
        id:'SCT-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Scatterplot shape: an outlier with leverage on the line of best fit',
        figure:FIG_OUTLIER,
        stem:'The scatterplot shows 10 data points along with the line of best fit for all 10 of them. Nine of the points form a tight, steeply rising cluster; the tenth sits far above and to the left of that cluster. What happens to the line of best fit if that tenth point is removed from the data?',
        choices:{
          A:'The slope decreases and the y-intercept increases.',
          B:'The slope stays the same and the y-intercept decreases.',
          C:'The slope increases and the y-intercept decreases.',
          D:'The slope increases and the y-intercept increases.'
        },
        correct:'C',
        expCorrect:'The nine clustered points lie exactly on y = 2x + 3: from (4, 11) to (12, 27) the values rise by 2 for every 1 across. The tenth point, (1, 30), sits high up at the LEFT edge, so it drags that end of the line upward — which lifts the intercept and flattens the line at the same time. That is the line you see drawn, y ≈ 0.49x + 16.5. Take the point away and the fit snaps back to the cluster, y = 2x + 3: the slope rises from about 0.49 to 2 and the y-intercept falls from about 16.5 to 3.',
        expWrong:{
          A:'That is what ADDING the outlier does, not what removing it does. Both effects reverse when the point comes out, so read carefully which direction the question is asking about.',
          B:'A point off to one side does more than shift the line up or down — it TILTS it. Sitting at a low x gives that point leverage on the slope, so the slope changes too, from about 0.49 all the way back to 2.',
          D:'The slope does increase, but the intercept cannot rise as well. The outlier is what was holding the left end of the line up; remove it and the left end drops, so the intercept goes down, from about 16.5 to 3.'
        },
        tip:'An outlier far from the cluster HORIZONTALLY has leverage: it tilts the line toward itself. A high point on the far left flattens the line and lifts the intercept; a high point on the far right steepens it. Work out which end of the line the point is pulling, then check whether the question adds it or removes it.',
        desmos:'Plot the nine clustered points with y=2x+3: the line passes through every one of them. Now add (1,30) and compare with y=0.487x+16.545 — that flatter line is the fit for all ten, and it is the one drawn in the figure.',
        desmosLatex:['y=2x+3','y=0.487x+16.545','(1,30)','(4,11)','(8,19)','(12,27)']
      },
      {
        id:'SCT-11', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Line of best fit: slope from two points, with a change of units',
        stem:'A scatterplot relates the number of minutes m that a printing press has been running and the number of pages p it has produced. The line of best fit passes through the points (4, 265) and (20, 985). Based on the line of best fit, what is the predicted increase in the number of pages produced during one additional HOUR of running?',
        answer:'2700',
        expCorrect:'The slope of the line of best fit is the predicted change in pages for ONE minute: (985 − 265)/(20 − 4) = 720/16 = 45 pages per minute. The question asks about an hour, and an hour is 60 minutes, so the predicted increase is 45 × 60 = 2700 pages. (Check with the model itself: the intercept is 265 − 45(4) = 85, so p = 45m + 85, and p(64) − p(4) = 2965 − 265 = 2700 ✓.) Answer: 2700.',
        expWrong:{},
        tip:'Slope from two points on a line of best fit = (change in y)/(change in x), and it comes out in "y-units per one x-unit". When the question uses a different time unit than the model, convert AFTER computing the slope: a per-minute rate becomes a per-hour rate by multiplying by 60. Note also that an INCREASE needs only the slope, never the intercept.',
        desmos:'Type (985-265)/(20-4) and Desmos gives 45, the pages per minute. Then type 45*60 for the hour: 2700. Graphing y=45x+85 through (4,265) and (20,985) confirms the slope.',
        desmosLatex:['(985-265)/(20-4)','45*60','y=45x+85','(4,265)','(20,985)']
      },
      {
        id:'SCT-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Scatterplot shape: a weak association and what it rules out',
        stem:'For each of 24 towns, a researcher plotted the number of farmers markets, x, against the average price of a kilogram of tomatoes, y, in dollars. The points form a wide, shapeless cloud: the line of best fit is nearly flat, and the points sit far above and far below it. Which of the following conclusions is best supported by the scatterplot?',
        choices:{
          A:'In these towns, the number of farmers markets tells you very little about the average tomato price.',
          B:'Towns in the study with more farmers markets tend to have lower tomato prices.',
          C:'A line of best fit should not be reported for data this scattered, because it cannot be computed.',
          D:'The relationship between the two variables is strong, but the line of best fit was drawn incorrectly.'
        },
        correct:'A',
        expCorrect:'A wide, shapeless cloud is the picture of a WEAK association, and two separate features say so. The line is nearly flat, so the prediction barely changes as x changes; and the points sit far from the line, so even that flat prediction misses badly. Put together, knowing how many farmers markets a town has does almost nothing to narrow down its tomato price — which is exactly what A claims, and all the plot supports.',
        expWrong:{
          B:'A nearly flat line means there is almost no trend in either direction. Claiming lower prices would need a clearly negative slope AND points that hug the line; the plot shows neither.',
          C:'A line of best fit can always be computed, no matter how scattered the points are — and that is the trap. The software hands back an equation even when the association is useless, which is why you judge the scatter as well as the equation.',
          D:'A wide cloud is evidence AGAINST a strong relationship, not evidence that the line was drawn badly. The line is a fine summary of the data; what is weak is the association it summarizes.'
        },
        tip:'Read two separate things off a scatterplot: DIRECTION, which is the sign of the slope, and STRENGTH, which is how tightly the points hug the line. A flat line plus a wide cloud means x is a poor predictor of y — and remember that a line of best fit is still computable, and still nearly useless, in that case.',
        desmos:'Build your own wide cloud: plot (1,4), (2,9), (3,3), (4,8), (5,5), (6,9), (7,4) and then y=6. Desmos will still fit a line to that, and it comes out almost flat while every point stays 1 to 3 away from it.',
        desmosLatex:['y=6','(1,4)','(2,9)','(3,3)','(4,8)','(5,5)','(6,9)','(7,4)']
      }
    ]
  });
})();
