/* SAT Studio question set — Math: Problem-Solving & Data Analysis
   Two-variable data and scatterplots — Hard & Brutal (SKH-01 to SKH-30) */
(function(){

  window.SAT_SETS.push({
    id: 'math-psda-scatter-hard',
    title: 'Scatterplots & Two-Variable Data — Hard & Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Thirty hard two-variable problems: signed residuals turned back into observations, slopes read across a change of units, two competing models and where their predictions cross, influential points measured instead of pointed at, extrapolation with the reason it fails, and model choice settled by squared residuals rather than by eye.',
    minutes: 40,
    questions: [

      {
        id:'SKH-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Residuals: the observed value recovered from a signed residual',
        stem:'A scatterplot relates x, the number of days since a sapling was planted, and y, the height of the sapling, in centimeters. The line of best fit is y = 0.85x + 14.2. The point recorded on day 40 has a residual of −2.6. What was the observed height of the sapling on day 40, in centimeters?',
        choices:{A:'45.6', B:'50.8', C:'48.2', D:'11.6'},
        correct:'A',
        expCorrect:'The model first: y = 0.85(40) + 14.2 = 34 + 14.2 = 48.2 centimeters predicted. Residual = observed − predicted, so −2.6 = observed − 48.2, which gives observed = 48.2 − 2.6 = 45.6. Check: 45.6 − 48.2 = −2.6 ✓, and the negative sign matches a point sitting below the line.',
        expWrong:{
          B:'50.8 adds the residual instead of subtracting it. A negative residual means the point is BELOW the prediction, so the 2.6 comes off 48.2.',
          C:'48.2 is the prediction itself, the step before the answer. The question asks for the height that was actually measured, which is 2.6 lower.',
          D:'11.6 subtracts 2.6 from the intercept 14.2 and never uses the 40 days. The intercept is only the prediction at x = 0.'
        },
        tip:'Residual = observed − predicted, always in that order. Rearranged it reads observed = predicted + residual, so a negative residual pulls the point DOWN from the line and a positive one lifts it above.',
        desmos:'Type y=0.85x+14.2 and add the points (40,48.2) and (40,45.6). The lower point is the measurement, and the 2.6 gap between them is the residual.',
        desmosLatex:['y=0.85x+14.2','(40,48.2)','(40,45.6)']
      },

      {
        id:'SKH-02', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Line of best fit: a slope per month used over a span of years',
        stem:'A scatterplot relates x, the number of months a battery pack has been in service, and y, its measured capacity, in kilowatt-hours. The line of best fit is y = 34.8 − 0.15x. According to this model, by how many kilowatt-hours does the predicted capacity fall over a period of 3 years?',
        answer:'5.4',
        expCorrect:'The slope is −0.15 kilowatt-hours per MONTH, and the question asks about 3 YEARS, so convert before using it: 3 years = 36 months. The predicted drop is 0.15(36) = 5.4 kilowatt-hours. Check with the model at both ends: at x = 0, y = 34.8; at x = 36, y = 34.8 − 5.4 = 29.4, and 34.8 − 29.4 = 5.4 ✓.',
        expWrong:{},
        tip:'Before using a slope, compare the unit on the x-axis with the unit in the question. A slope given per month has to be multiplied by 12 to become a rate per year; the model never converts for you.',
        desmos:'Type y=34.8-0.15x and read the table at x=0 and x=36: 34.8 and 29.4. The difference is the drop over three years.',
        desmosLatex:['y=34.8-0.15x','0.15*36']
      },

      {
        id:'SKH-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Line of best fit: reading the slope when both axes are scaled',
        stem:'A scatterplot relates x, the floor area of a warehouse, in thousands of square feet, and y, its annual heating cost, in hundreds of dollars. The line of best fit is y = 2.6x + 31. Which of the following is the best interpretation of the number 2.6 in this context?',
        choices:{
          A:'Each additional square foot raises the predicted heating cost by $260.',
          B:'Each additional 1,000 square feet raises the predicted heating cost by $260.',
          C:'Each additional 1,000 square feet raises the predicted heating cost by $2.60.',
          D:'A warehouse with no floor area has a predicted heating cost of $3,100.'
        },
        correct:'B',
        expCorrect:'A slope is y-units per one x-unit. One x-unit here is 1,000 square feet and one y-unit is $100, so 2.6 y-units are 2.6(100) = $260. The model adds $260 of predicted cost for every extra 1,000 square feet. Check: x = 10 gives y = 57, that is $5,700, and x = 11 gives y = 59.6, that is $5,960 — a difference of $260 ✓.',
        expWrong:{
          A:'This uses the right $260 but attaches it to a single square foot. The x-axis is in THOUSANDS, so the 2.6 belongs to a 1,000-square-foot step.',
          C:'This handles the thousands on the x-axis but forgets the hundreds on the y-axis. Each y-unit is $100, so 2.6 units are $260, not $2.60.',
          D:'That is a reading of the intercept 31, which is 31 hundreds of dollars, or $3,100. It answers a true question about the model, but not the one asked.'
        },
        tip:'When an axis is labeled "in thousands" or "in hundreds", the slope is still y-units per one x-unit: convert BOTH ends before writing a sentence about it.',
        desmos:'Type y=2.6x+31 and open the table at x=10 and x=11: 57 and 59.6. That 2.6 difference is 2.6 hundreds of dollars for 1,000 more square feet.',
        desmosLatex:['y=2.6x+31']
      },

      {
        id:'SKH-04', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'An influential point removed: two lines of best fit compared by their predictions',
        stem:'A scatterplot of 10 points has the line of best fit y = 0.62x + 18.4. When the single point (3, 41) is deleted, the line of best fit for the 9 points that remain becomes y = 1.9x + 7.2. At x = 15, how much greater is the prediction of the second line than the prediction of the first?',
        answer:'8',
        expCorrect:'Run x = 15 through both models. First line: 0.62(15) + 18.4 = 9.3 + 18.4 = 27.7. Second line: 1.9(15) + 7.2 = 28.5 + 7.2 = 35.7. The second prediction is larger by 35.7 − 27.7 = 8. Neither 27.7 nor 35.7 is the answer on its own; the question asks for the gap between them.',
        expWrong:{},
        tip:'A point far from the rest can drag a whole line toward it. To measure how much a model moved, evaluate BOTH equations at the same x and subtract — comparing the slopes alone hides what the intercepts are doing.',
        desmos:'Graph y=0.62x+18.4 and y=1.9x+7.2 together, then look at x=15: they read 27.7 and 35.7. The vertical gap there is the answer.',
        desmosLatex:['y=0.62x+18.4','y=1.9x+7.2','(15,27.7)','(15,35.7)']
      },

      {
        id:'SKH-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Predictions far outside the data: why this extrapolation fails',
        stem:'A scatterplot relates x, the number of hours a cut stem has stood in a preservative solution, and y, the mass of water it has taken up, in grams. Every stem in the study was measured between 1 and 12 hours, and the line of best fit is y = 0.9x + 1.4. A florist uses that model to predict the uptake at x = 90 hours. Why is the prediction unreliable?',
        choices:{
          A:'The value 90 was not one of the x-values measured, so the model gives nothing there.',
          B:'The slope 0.9 is too small for a model to stay accurate that far along the x-axis.',
          C:'A cut stem cannot go on taking up water at a fixed rate of 0.9 grams per hour for nearly four straight days.',
          D:'The line of best fit lies above most of the points, so it overestimates everywhere.'
        },
        correct:'C',
        expCorrect:'The data run from 1 to 12 hours, and 90 hours is more than seven times past the far end. The line keeps adding 0.9 grams every hour forever, so at x = 90 it reports 0.9(90) + 1.4 = 82.4 grams. A stem has a finite capacity and eventually stops absorbing, so the mechanism that made the trend straight inside the data is gone out there. The arithmetic is fine; the model is not.',
        expWrong:{
          A:'A linear model returns a value at any x, and predicting between measured values is ordinary. The trouble is that 90 sits far OUTSIDE the range, not that it was skipped.',
          B:'The size of a slope says nothing about how far a model can be trusted. A model with slope 9 would fail at x = 90 for exactly the same reason.',
          D:'Nothing says the line sits above the points, and a line of best fit never does: it runs through the middle of the cloud, with residuals on both sides of it.'
        },
        tip:'Extrapolation is unsafe for a REASON that lives in the context: a quantity that saturates, a season that ends, a tank that fills. Name the mechanism that stops the trend instead of saying only that the value is outside the data.',
        desmos:'Graph y=0.9x+1.4 with the window running from 0 to 100 on x. At x=90 the line reads 82.4 grams, while every measured stem lived between x=1 and x=12 at the far left.',
        desmosLatex:['y=0.9x+1.4','(90,82.4)']
      },

      {
        id:'SKH-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Line of best fit: the prediction comes from the line, not from the nearby point',
        stem:'A scatterplot relates x, the number of weeks since a pond was stocked, and y, the number of tagged fish recorded. The line of best fit passes through (0, 18) and (25, 143). One of the plotted points is (10, 76). According to the line of best fit, what is the predicted number of tagged fish at 10 weeks?',
        choices:{A:'76', B:'50', C:'8', D:'68'},
        correct:'D',
        expCorrect:'Build the line from the two points it passes through: slope = (143 − 18)/(25 − 0) = 125/25 = 5, and the point (0, 18) is the intercept, so y = 5x + 18. At x = 10: y = 5(10) + 18 = 68. Check the other end: 5(25) + 18 = 125 + 18 = 143 ✓.',
        expWrong:{
          A:'76 is the height of the plotted POINT at x = 10, not the height of the line there. A prediction always comes from the model.',
          B:'50 is 5(10) with the intercept dropped. The line is already at 18 when x = 0, so that 18 stays in every prediction.',
          C:'8 is the residual, 76 − 68: the gap between the point and the line, not the prediction itself.'
        },
        tip:'Read the LINE for a prediction and the POINT for an observation; the vertical distance between them is the residual. Two points on the line give slope and intercept in one step when one of them sits on the y-axis.',
        desmos:'Type y=5x+18 with the points (10,68) and (10,76). The line passes through the first one; the second is the data point sitting 8 above it.',
        desmosLatex:['y=5x+18','(10,68)','(10,76)']
      },

      {
        id:'SKH-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Residual with a sign, after building the line of best fit from two of its points',
        stem:'On a scatterplot, the line of best fit passes through (4, 31) and (16, 67). One of the plotted data points is (10, 42). What is the residual of that point with respect to the line of best fit?',
        choices:{A:'−7', B:'7', C:'9', D:'49'},
        correct:'A',
        expCorrect:'Slope = (67 − 31)/(16 − 4) = 36/12 = 3. Using (4, 31): 31 = 3(4) + b, so b = 19 and the line is y = 3x + 19 (check at x = 16: 48 + 19 = 67 ✓). The prediction at x = 10 is 3(10) + 19 = 49. Residual = observed − predicted = 42 − 49 = −7.',
        expWrong:{
          B:'7 is the gap with its sign thrown away, which is predicted − observed. A residual keeps its sign, and a point below the line carries a negative one.',
          C:'9 comes from inverting the slope: (16 − 4)/(67 − 31) = 1/3 gives a prediction near 33 and a gap of about +9. Slope is rise over run, never run over rise.',
          D:'49 is the prediction at x = 10, the step before the answer. The residual is what is left once that prediction is subtracted from 42.'
        },
        tip:'Two points on the line give the slope; either one of them gives the intercept. Then residual = observed − predicted with the sign kept: below the line is negative, above the line is positive.',
        desmos:'Type y=3x+19 with (4,31), (16,67) and (10,42). The line passes through the first two points, and the third sits 7 below it.',
        desmosLatex:['y=3x+19','(4,31)','(16,67)','(10,42)']
      },

      {
        id:'SKH-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Two-variable data: choosing a model by total squared residual, not by eye',
        stem:'Three observations from a scatterplot are (1, 9), (2, 14) and (3, 23). Two models are proposed: model L, y = 7x + 1, and model E, y = 6(1.5)^x. Which model has the smaller total of squared residuals over these three observations?',
        choices:{
          A:'Model E, because the observed values rise by a larger amount at each step.',
          B:'Model L, with a squared-residual total of 3.',
          C:'Model E, whose squared residuals total about 7.8 against 9 for model L.',
          D:'Model L, because its line passes above all three of the observed points.'
        },
        correct:'B',
        expCorrect:'Compute both sets of residuals. Model L predicts 8, 15 and 22, so the residuals are 9 − 8 = 1, 14 − 15 = −1 and 23 − 22 = 1; squared and added, 1 + 1 + 1 = 3. Model E predicts 9, 13.5 and 20.25, so the residuals are 0, 0.5 and 2.75; squared and added, 0 + 0.25 + 7.5625 = 7.8125. Model L wins, 3 against about 7.8.',
        expWrong:{
          A:'The jumps are 5 and then 9, which does look exponential, but that is judging by eye. The residuals put model L closer at two of the three points and only 1 away at the third.',
          C:'The two totals are swapped, and model L is given 9 — which is its largest squared residual counted three times. Model L totals 3.',
          D:'Model L predicts 8 against an observed 9 and 22 against an observed 23, so it runs BELOW two of the three points. It still fits better.'
        },
        tip:'When two models are on the table, do not judge the bend by eye. Evaluate both at every x, take observed − predicted, square each one, and add: the smaller total of squared residuals is the better fit.',
        desmos:'Type y=7x+1 and y=6*1.5^x with (1,9), (2,14) and (3,23). At x=3 the line lands at 22 and the curve at 20.25, while the point is at 23.',
        desmosLatex:['y=7x+1','y=6*1.5^x','(1,9)','(2,14)','(3,23)']
      },

      {
        id:'SKH-09', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Two residuals on one line of best fit, turned back into observed values',
        stem:'A scatterplot relates x, the number of minutes a kiln has been cooling, and y, the temperature inside it, in degrees Celsius. The line of best fit is y = 980 − 6.5x. The point at x = 50 has a residual of −15, and the point at x = 80 has a residual of +22. By how many degrees Celsius is the observed temperature at 50 minutes greater than the observed temperature at 80 minutes?',
        answer:'158',
        expCorrect:'Turn each residual back into an observation with observed = predicted + residual. At x = 50 the model gives 980 − 6.5(50) = 980 − 325 = 655, so observed = 655 − 15 = 640. At x = 80 it gives 980 − 6.5(80) = 980 − 520 = 460, so observed = 460 + 22 = 482. The difference is 640 − 482 = 158 degrees Celsius. (The model by itself would have predicted a gap of 655 − 460 = 195, so the two residuals shrink it by 37.)',
        expWrong:{},
        tip:'Observed = predicted + residual. When a question hands you residuals at two different x-values, rebuild both observations first: the answer is almost never one residual on its own.',
        desmos:'Graph y=980-6.5x and add (50,640) and (80,482). The line reads 655 and 460 at those x-values, and the two points sit 15 below and 22 above it.',
        desmosLatex:['y=980-6.5x','(50,640)','(80,482)']
      },

      {
        id:'SKH-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Residuals compared: the point the line of best fit misses by the most',
        stem:'A scatterplot has the line of best fit y = 2x + 6. Four of its points are labeled: P at (3, 15), Q at (7, 16), R at (14, 28) and S at (18, 45). For which of these four points does the line of best fit miss the observed value by the greatest amount?',
        choices:{A:'P', B:'Q', C:'R', D:'S'},
        correct:'C',
        expCorrect:'Predict at each x with y = 2x + 6 and subtract. P: predicted 12, observed 15, residual +3. Q: predicted 20, observed 16, residual −4. R: predicted 34, observed 28, residual −6. S: predicted 42, observed 45, residual +3. The biggest miss in size is R, where the line runs 6 above the point.',
        expWrong:{
          A:'P misses by only 3, and in the other direction: the point sits above the line. Being the leftmost point says nothing about the size of the gap.',
          B:'Q is below the line like R, but by 4 rather than 6. Both carry negative residuals; the question asks which one is largest in size.',
          D:'S has the largest y-value on the plot, which is not the same as the largest residual. Its gap is +3, the smallest on the list along with P.'
        },
        tip:'The size of a residual is a VERTICAL distance from a point to the line, so it has nothing to do with how large x or y is. Predict at each x, subtract, then compare the sizes with the signs set aside.',
        desmos:'Type y=2x+6 with (3,15), (7,16), (14,28) and (18,45). The vertical gaps are 3, 4, 6 and 3, so the widest sits at x=14.',
        desmosLatex:['y=2x+6','(3,15)','(7,16)','(14,28)','(18,45)']
      },

      {
        id:'SKH-11', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Two lines of best fit from two seasons: when one prediction pulls far enough ahead',
        stem:'For one growing season, a scatterplot of x, the number of weeks after planting, against y, the height of a stalk in centimeters, gave the line of best fit y = 6.4x + 12. For the next season in the same field, the line of best fit was y = 4.9x + 36. What is the smallest whole number of weeks for which the first model predicts a height at least 20 centimeters greater than the second model predicts?',
        answer:'30',
        expCorrect:'Subtract the two models and work with the single expression that is left: (6.4x + 12) − (4.9x + 36) = 1.5x − 24. That difference has to reach 20, so 1.5x − 24 = 20 gives 1.5x = 44 and x = 29.33. Weeks are whole numbers and the difference grows with x, so the first whole week that works is 30. Check both sides of it: at x = 29 the gap is 1.5(29) − 24 = 19.5, short of 20; at x = 30 it is 1.5(30) − 24 = 21 ✓.',
        expWrong:{},
        tip:'To compare two models, build the DIFFERENCE model and solve with that one expression. Then, when the answer has to be a whole number, test the two integers around the exact solution instead of rounding out of habit.',
        desmos:'Graph y=6.4x+12, y=4.9x+36 and y=1.5x-24 along with y=20. The difference graph crosses 20 a little past x=29, so the first whole week is 30.',
        desmosLatex:['y=6.4x+12','y=4.9x+36','y=1.5x-24','y=20']
      },

      {
        id:'SKH-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Residuals read in order: the sign that a line is the wrong model',
        stem:'The line of best fit y = 12x + 40 was fit to five points of a scatterplot. At x = 1, 2, 3, 4 and 5 the observed values were 58, 61, 70, 85 and 106. Which statement is best supported by the residuals?',
        choices:{
          A:'The residuals add up to 0, which shows the line is the best possible fit for these data.',
          B:'The first residual is positive, so the line underestimates every observed value.',
          C:'Every residual is 6 or less in size, so the linear model fits these data well.',
          D:'The residuals are positive at both ends and negative in the middle, so the data bend and a curve fits better.'
        },
        correct:'D',
        expCorrect:'Predict at each x with y = 12x + 40: 52, 64, 76, 88 and 100. Subtract to get the residuals: 58 − 52 = +6, 61 − 64 = −3, 70 − 76 = −6, 85 − 88 = −3 and 106 − 100 = +6. Read them in order of x: +6, −3, −6, −3, +6. The line runs below the data at both ends and above it in the middle, which is exactly what happens when a straight line is laid over a curve. A model that bends upward would sit closer to all five points.',
        expWrong:{
          A:'The residuals of a line of best fit always add to about 0, whatever the shape of the data, so that sum can never be evidence of a good fit. What matters is the PATTERN they make.',
          B:'One positive residual says nothing about the rest. Three of the five here are negative, so the line overestimates at x = 2, 3 and 4.',
          C:'The size of the residuals is not what rules a line out here; their order is. Six units of miss in a tidy plus-minus-plus arc is a bend, not noise.'
        },
        tip:'After fitting a line, read the residuals IN ORDER of x. Signs that jump around mean the line is doing its job; a plus-minus-plus arc, or a long run of one sign, means the data curve and a line is the wrong family.',
        desmos:'Type y=12x+40 with (1,58), (2,61), (3,70), (4,85) and (5,106). The first and last points sit above the line and the middle three below it, the fingerprint of a curve.',
        desmosLatex:['y=12x+40','(1,58)','(2,61)','(3,70)','(4,85)','(5,106)']
      },

      {
        id:'SKH-13', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Line of best fit built from two points, with months and years mixed',
        stem:'A scatterplot relates x, the number of months since a machine was overhauled, and y, its output in units per hour. The line of best fit passes through (0, 62) and (25, 12). What does the model predict for the output after 1.5 years?',
        choices:{A:'26', B:'59', C:'32', D:'2'},
        correct:'A',
        expCorrect:'Slope first: (12 − 62)/(25 − 0) = −50/25 = −2, and (0, 62) is the intercept, so the model is y = 62 − 2x, falling 2 units per hour for each MONTH. Now convert the question: 1.5 years = 18 months. Then y = 62 − 2(18) = 62 − 36 = 26 units per hour. Check the far end: 62 − 2(25) = 12 ✓.',
        expWrong:{
          B:'59 drops 1.5 straight into the model: 62 − 2(1.5) = 59. The x-axis counts months, so 1.5 years has to become 18 first.',
          C:'32 uses 15 months, as if a year and a half were 15 months rather than 18.',
          D:'2 uses 30 months, which is two and a half years, not one and a half.'
        },
        tip:'Whenever a model is built on months and the question speaks in years, or the reverse, convert BEFORE substituting. Writing the unit next to the x on your paper is the cheapest way to stop the slip.',
        desmos:'Type y=62-2x and read the table at x=18: 26. Check the model at x=25, where it gives 12, the second point you were handed.',
        desmosLatex:['y=62-2x','(18,26)','(25,12)']
      },

      {
        id:'SKH-14', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Scatterplot: how many points the line of best fit overestimates',
        stem:'The line of best fit for a scatterplot is y = 1.5x + 6. The eight plotted points are (2, 10), (4, 13), (6, 14), (8, 19), (10, 20), (12, 25), (14, 26) and (16, 31). For how many of these eight points does the line of best fit overestimate the observed value?',
        answer:'3',
        expCorrect:'Predict at every x: 1.5(2) + 6 = 9, then 12, 15, 18, 21, 24, 27 and 30. Now take observed − predicted down the list: +1, +1, −1, +1, −1, +1, −1, +1. Overestimate means the prediction sits above the observation, that is a NEGATIVE residual, and that happens at (6, 14), (10, 20) and (14, 26). Answer: 3.',
        expWrong:{},
        tip:'Overestimate = the line is above the point = negative residual. Run the whole list through the model once, write the signs in a row, and count the minus signs; guessing from the shape of the cloud costs more than the arithmetic.',
        desmos:'Type y=1.5x+6 and plot all eight points. Three of them sit just below the line: (6,14), (10,20) and (14,26).',
        desmosLatex:['y=1.5x+6','(6,14)','(10,20)','(14,26)']
      },

      {
        id:'SKH-15', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'An influential point added: what it does to the slope and the intercept of the line of best fit',
        stem:'Ten points of a scatterplot lie exactly on the line y = 3x + 2, at x = 1, 2, 3, and so on up to 10. An eleventh point, (11, 5), is then added and the line of best fit is computed for all eleven points. Which of the following describes that new line, compared with y = 3x + 2?',
        choices:{
          A:'A smaller slope and a y-intercept that is still 2.',
          B:'A smaller slope and a larger y-intercept.',
          C:'A larger slope and a y-intercept smaller than 2.',
          D:'The same slope and a y-intercept smaller than 2.'
        },
        correct:'B',
        expCorrect:'The eleventh point sits far to the right and far BELOW the pattern: y = 3x + 2 would put x = 11 at 35, and the point is at 5, a miss of 30. A point that extreme on the right end drags the right end of the fitted line down, which flattens it, and the line then has to rise on the left to stay near the ten points still there. Running the least-squares formulas on all eleven gives y = 1.64x + 7.45 to two decimals: the slope fell from 3 to about 1.64 and the intercept rose from 2 to about 7.45.',
        expWrong:{
          A:'The intercept cannot stay at 2. Once the right end is pulled down the line pivots, and pivoting around the middle of the data lifts the left end, carrying the intercept up to about 7.45.',
          C:'A point below the trend on the right end lowers the slope; it does not raise it. A point ABOVE the trend at x = 11 is the one that would have steepened the line.',
          D:'The slope does change. A least-squares line is pulled by every point, and this one is 30 units off the pattern at the far right, the position with the most leverage of all.'
        },
        tip:'A point far from the rest, especially at the extreme left or right, is influential: it pivots the line. Below the trend on the right end means the slope falls and the intercept rises; above it means the slope rises and the intercept falls.',
        desmos:'Plot the ten points of y=3x+2 plus (11,5), then graph y=3x+2 and y=1.64x+7.45. The second line is clearly flatter and starts higher.',
        desmosLatex:['y=3x+2','y=1.64x+7.45','(11,5)']
      },

      {
        id:'SKH-16', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Line of best fit: rewriting the model when the unit on y changes',
        stem:'A scatterplot relates x, the distance a tire has been driven, in thousands of kilometers, and y, its tread depth, in millimeters. The line of best fit is y = 8.4 − 0.35x. If the tread depth is measured in centimeters instead, which equation is the line of best fit for the same data?',
        choices:{A:'y = 84 − 3.5x', B:'y = 0.84 − 0.35x', C:'y = 0.84 − 0.035x', D:'y = 8.4 − 0.035x'},
        correct:'C',
        expCorrect:'Ten millimeters make one centimeter, so every y-value is divided by 10 — and dividing y by 10 divides the WHOLE right side by 10, both terms: (8.4 − 0.35x)/10 = 0.84 − 0.035x. Check one value: at x = 4 the original gives 8.4 − 1.4 = 7 millimeters and the new one gives 0.84 − 0.14 = 0.7 centimeters, the same depth ✓.',
        expWrong:{
          A:'This multiplies by 10 instead of dividing. A centimeter is larger than a millimeter, so the same depth is a SMALLER number of centimeters.',
          B:'Only the constant was divided. The slope carries y-units too, so 0.35 millimeters per thousand kilometers becomes 0.035 centimeters per thousand kilometers.',
          D:'Only the slope was divided; the intercept stayed in millimeters, which mixes two units in one equation. At x = 0 it claims 8.4 centimeters of tread.'
        },
        tip:'Changing the unit on the y-axis rescales the entire right side — intercept AND slope — by the same factor. Changing the unit on the x-axis touches only the slope. Rescale one value both ways to check.',
        desmos:'Graph y=8.4-0.35x and y=0.84-0.035x and look at x=4: the readings are 7 and 0.7, the same depth in two units.',
        desmosLatex:['y=8.4-0.35x','y=0.84-0.035x']
      },

      {
        id:'SKH-17', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Residual plus a unit change: a model in days and a question in weeks',
        stem:'A scatterplot relates x, the number of days a cell has been on a shelf, and y, its charge as a percent. The line of best fit is y = 96 − 0.45x. One cell was measured after exactly 8 weeks, and its residual is +3.2. What was its observed charge, as a percent?',
        choices:{A:'92.4', B:'67.6', C:'70.8', D:'74'},
        correct:'D',
        expCorrect:'Convert first, because the model counts x in days: 8 weeks = 8(7) = 56 days. Predicted charge: y = 96 − 0.45(56) = 96 − 25.2 = 70.8 percent. Then observed = predicted + residual = 70.8 + 3.2 = 74 percent. Check: 74 − 70.8 = 3.2 ✓, a point 3.2 above the line.',
        expWrong:{
          A:'92.4 uses x = 8 instead of 56: 96 − 0.45(8) = 92.4. The model is built on days, and 8 weeks is 56 of them.',
          B:'67.6 subtracts the residual instead of adding it. A residual of +3.2 puts the point ABOVE the line.',
          C:'70.8 is the prediction, one step short. The residual still has to be added to it.'
        },
        tip:'Two traps travel together in these: convert the time into the unit on the x-axis BEFORE substituting, then use observed = predicted + residual with the sign of the residual kept.',
        desmos:'Type y=96-0.45x with (56,70.8) and (56,74). The line passes through the lower point and the measurement sits 3.2 above it.',
        desmosLatex:['y=96-0.45x','(56,70.8)','(56,74)']
      },

      {
        id:'SKH-18', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Working backwards from a residual to the x-value of the point',
        stem:'The line of best fit for a scatterplot is y = 2.5x + 14. One plotted point has an observed y-value of 50 and a residual of −4. What is the x-value of that point?',
        answer:'16',
        expCorrect:'Residual = observed − predicted, so predicted = observed − residual = 50 − (−4) = 54. The negative residual says the point sits below the line, so the prediction has to be ABOVE 50 — and 54 is. Now solve the model for the x that produces it: 2.5x + 14 = 54, so 2.5x = 40 and x = 16. Check: 2.5(16) + 14 = 40 + 14 = 54, and 50 − 54 = −4 ✓.',
        expWrong:{},
        tip:'Run the residual formula in whichever direction the question needs: predicted = observed − residual. Once you have the prediction, the model is just an equation and solving for x is one more line of algebra.',
        desmos:'Graph y=2.5x+14 and y=54: they meet at x=16. Add (16,50) and the point sits 4 below the line.',
        desmosLatex:['y=2.5x+14','y=54','(16,50)']
      },

      {
        id:'SKH-19', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Scatterplot: estimating the slope of the line of best fit from the points',
        stem:'A scatterplot contains exactly five points: (1, 4), (2, 11), (3, 14), (4, 23) and (5, 27). Which of the following is closest to the slope of the line of best fit for these five points?',
        choices:{A:'5.8', B:'0.17', C:'15.8', D:'23'},
        correct:'A',
        expCorrect:'The x-values are evenly spaced, so the fit runs straight through the middle of the cloud: the average x is 3 and the average y is (4 + 11 + 14 + 23 + 27)/5 = 79/5 = 15.8. Working out the least-squares slope gives 58/10 = 5.8, and the line is y = 5.8x − 1.6. A quick check that lands in the same place: from the first point to the last the data rise 27 − 4 = 23 over a run of 4, which is 5.75.',
        expWrong:{
          B:'0.17 is 10/58, the slope with rise and run swapped. A slope is the change in y per one unit of x, so the y-difference belongs on top.',
          C:'15.8 is the average of the y-values. That locates the line vertically; it says nothing about how steep it is.',
          D:'23 is the total rise from the first point to the last, with the run of 4 never divided out. A slope is a rate, so the rise has to be shared over the run.'
        },
        tip:'For a fast estimate of the slope of a line of best fit, take the overall rise over the overall run of the cloud; with evenly spread points it lands very near the least-squares value. Never report a total change as a slope.',
        desmos:'Put the five points in a table and run a linear regression: Desmos reports m = 5.8. Graph y=5.8x-1.6 over the points to see it split them evenly.',
        desmosLatex:['(1,4)','(2,11)','(3,14)','(4,23)','(5,27)','y=5.8x-1.6']
      },

      {
        id:'SKH-20', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Two lines of best fit compared: which model predicts more, and where',
        stem:'Two labs each made a scatterplot relating x, the mass of a sample in grams, and y, the volume of gas it released in milliliters. Lab A reports the line of best fit y = 0.65x + 4.2, and lab B reports y = 0.45x + 12.2. For which masses does the model from lab A predict a greater volume than the model from lab B?',
        choices:{
          A:'Masses greater than 8 grams.',
          B:'Masses greater than 40 grams.',
          C:'Masses less than 40 grams.',
          D:'Masses greater than 30.2 grams.'
        },
        correct:'B',
        expCorrect:'Set the two predictions equal to find where they cross: 0.65x + 4.2 = 0.45x + 12.2, so 0.2x = 8 and x = 40. Both models agree there: 0.65(40) + 4.2 = 30.2 and 0.45(40) + 12.2 = 30.2 ✓. Lab A has the steeper slope, 0.65 against 0.45, so past the crossing point it is the higher line: masses greater than 40 grams.',
        expWrong:{
          A:'8 is the difference of the intercepts, 12.2 − 4.2, which is only the numerator of the step. It still has to be divided by the difference of the slopes, 0.2.',
          C:'Below 40 grams lab A predicts LESS: it starts lower, at 4.2 against 12.2, and only catches up at the crossing point.',
          D:'30.2 is the predicted VOLUME where the two models agree, read off the y-axis. The question asks about masses, which live on the x-axis.'
        },
        tip:'Two linear models cross exactly once. Find that x by setting them equal, then decide which side is which from the slopes: the steeper model is the higher one to the RIGHT of the crossing point.',
        desmos:'Graph y=0.65x+4.2 and y=0.45x+12.2 and click the intersection: (40, 30.2). To the right of it the steeper line is on top.',
        desmosLatex:['y=0.65x+4.2','y=0.45x+12.2','(40,30.2)']
      },

      {
        id:'SKH-21', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Line of best fit run backwards: the x that produces a given prediction',
        stem:'On a scatterplot, the line of best fit passes through (5, 34) and (20, 19). For what value of x does the line of best fit predict a y-value of 25.5?',
        choices:{A:'25.5', B:'64.5', C:'13.5', D:'−3.5'},
        correct:'C',
        expCorrect:'Slope = (19 − 34)/(20 − 5) = −15/15 = −1. Using (5, 34): 34 = −1(5) + b, so b = 39 and the model is y = 39 − x (check at x = 20: 39 − 20 = 19 ✓). Now set the prediction to 25.5: 39 − x = 25.5, so x = 39 − 25.5 = 13.5.',
        expWrong:{
          A:'25.5 is the y-value the question already gave you. The answer has to be an x, and the model is what turns one into the other.',
          B:'64.5 is 39 + 25.5, adding where the equation subtracts. From 39 − x = 25.5 the x moves across as 39 − 25.5.',
          D:'−3.5 comes from a slope of +1 instead of −1: x + 29 = 25.5 gives −3.5. The y-values fall as x rises, so the slope is negative.'
        },
        tip:'Going backwards from a prediction is just solving the model for x. Build y = mx + b from the two points first, substitute the given y, and check by feeding your x back into the model.',
        desmos:'Graph y=39-x and y=25.5 and click where they meet: (13.5, 25.5). The two given points, (5,34) and (20,19), sit on the same line.',
        desmosLatex:['y=39-x','y=25.5','(5,34)','(20,19)']
      },

      {
        id:'SKH-22', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Scatterplot: the point whose removal changes the line of best fit the most',
        stem:'A scatterplot has exactly six points: (1, 4), (2, 7), (3, 9), (4, 12), (5, 14) and (16, 10). Removing which one of them would produce the largest increase in the slope of the line of best fit?',
        choices:{A:'(1, 4)', B:'(3, 9)', C:'(5, 14)', D:'(16, 10)'},
        correct:'D',
        expCorrect:'Five of the six points climb steadily: from (1, 4) to (5, 14) they gain about 2.5 for each unit of x. The sixth, (16, 10), sits eleven units to the right of that cluster and well BELOW where the climb would put it, so it drags the right end of the line down and flattens it. The numbers: with all six points the line of best fit is y = 0.22x + 8.18, and with (16, 10) removed it is y = 2.5x + 1.7. Dropping that one point takes the slope from about 0.22 to 2.5.',
        expWrong:{
          A:'Removing (1, 4) takes the slope from about 0.22 down to about 0.05. It does move the line, but the wrong way, because that point is the low end of a rising cluster.',
          B:'(3, 9) sits near the middle of the x-values, the position with the least leverage of all. Removing it leaves the slope at about 0.23, essentially where it started.',
          C:'(5, 14) lies on the trend of the cluster, so taking it out shifts the slope by about 0.01. The flattening is the work of the far-right point, not of this one.'
        },
        tip:'Leverage lives at the extremes of the x-axis. A point far to the left or right that is OFF the trend pivots the line; a point near the middle of the x-range mostly shifts it up or down instead.',
        desmos:'Plot the six points with y=0.22x+8.18, then hide (16,10) and graph y=2.5x+1.7. The fit goes from nearly flat to steep.',
        desmosLatex:['(1,4)','(2,7)','(3,9)','(4,12)','(5,14)','(16,10)','y=0.22x+8.18','y=2.5x+1.7']
      },

      {
        id:'SKH-23', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Line of best fit given in standard form: reading the slope in context',
        stem:'A scatterplot relates x, the number of days a concrete cylinder has cured, and y, its compressive strength in megapascals. The line of best fit is 4y − 3x = 56. Which of the following is the best interpretation of the slope of that line?',
        choices:{
          A:'Each additional day of curing adds 0.75 megapascals to the predicted strength.',
          B:'Each additional day of curing adds 3 megapascals to the predicted strength.',
          C:'Each additional day of curing adds 14 megapascals to the predicted strength.',
          D:'Each additional megapascal of strength adds 1.33 days to the predicted curing time.'
        },
        correct:'A',
        expCorrect:'Put the model into slope-intercept form first: 4y − 3x = 56 gives 4y = 3x + 56 and y = 0.75x + 14. The slope is 0.75, in y-units per one x-unit, which here reads megapascals per day. Check it: at x = 8, y = 6 + 14 = 20; at x = 9, y = 6.75 + 14 = 20.75, an increase of 0.75 ✓.',
        expWrong:{
          B:'3 is the coefficient of x while the y still carries its 4. The slope is the ratio 3/4, not the numerator by itself.',
          C:'14 is the intercept, 56/4: the predicted strength at 0 days of curing, not the change produced by one more day.',
          D:'This is the slope turned upside down, 4/3. The x-axis counts days, so the rate runs in megapascals per day, not days per megapascal.'
        },
        tip:'A line of best fit does not always arrive as y = mx + b. Solve for y FIRST, then read the slope with its units — y-units per one x-unit — before going anywhere near the choices.',
        desmos:'Type 4y-3x=56 and y=0.75x+14: the two graphs land on top of each other. Read the table at x=8 and x=9 to see the 0.75 step.',
        desmosLatex:['4y-3x=56','y=0.75x+14']
      },

      {
        id:'SKH-24', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Scatterplot: line of best fit from two points, then the residual at a third',
        stem:'On a scatterplot, the line of best fit passes through (2, 47) and (10, 23). One of the plotted points is (6, 39). By how much does the observed value at x = 6 exceed the value predicted by the line of best fit?',
        answer:'4',
        expCorrect:'Build the line: slope = (23 − 47)/(10 − 2) = −24/8 = −3, and 47 = −3(2) + b gives b = 53, so y = 53 − 3x (check at x = 10: 53 − 30 = 23 ✓). Predict at x = 6: 53 − 18 = 35. The observed value is 39, so it exceeds the prediction by 39 − 35 = 4. That 4 is the residual, positive because the point sits above the line.',
        expWrong:{},
        tip:'Three numbers, three steps: slope from the two points, prediction at the x you care about, then observed minus predicted. The prediction is never the answer when the question asks by how much.',
        desmos:'Graph y=53-3x with (2,47), (10,23) and (6,39). The first two points are on the line; the third floats 4 above it.',
        desmosLatex:['y=53-3x','(2,47)','(10,23)','(6,39)']
      },

      {
        id:'SKH-25', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Two-variable data: choosing the model when the gaps shrink by a constant factor',
        stem:'A scatterplot relates x, the number of hours since a tank began filling, and y, the water level in centimeters. At x = 0, 1, 2, 3, 4 and 5 the observed levels were 40, 70, 85, 92.5, 96.25 and 98.125. Which model best fits these observations?',
        choices:{A:'y = 40 + 11.6x', B:'y = 100 − 60(0.5)^x', C:'y = 40(1.2)^x', D:'y = 100 − 60(2)^x'},
        correct:'B',
        expCorrect:'Look at the DISTANCE from each level to 100: 60, 30, 15, 7.5, 3.75 and 1.875. Every one is half the one before it, so that distance is 60(0.5)^x and the level is y = 100 − 60(0.5)^x. Check at x = 3: 100 − 60(0.125) = 100 − 7.5 = 92.5 ✓. The level climbs while the climbs shrink, so the curve flattens toward 100 without ever reaching it.',
        expWrong:{
          A:'A line adds the same amount every hour. Here the gains are 30, 15, 7.5, 3.75 and 1.875, each half the one before, so no straight line can follow them.',
          C:'This grows without any limit and in the wrong shape: it gives 40, 48, 57.6 and keeps accelerating, while the observed levels slow down.',
          D:'The base 2 makes the gap to 100 DOUBLE each hour: at x = 1 it gives 100 − 120 = −20. A shrinking gap needs a base between 0 and 1.'
        },
        tip:'When values climb toward a ceiling, subtract each one from that ceiling and look at what is left. If those leftovers are multiplied by a constant factor each step, the model is ceiling minus an exponential.',
        desmos:'Graph y=100-60*0.5^x with the six points, then add y=100. The curve closes in on that line, halving the gap every hour.',
        desmosLatex:['y=100-60*0.5^x','y=100','(0,40)','(1,70)','(2,85)','(3,92.5)']
      },

      {
        id:'SKH-26', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'A recording error in every y-value: what moves in the line of best fit and what does not',
        stem:'A student fit the line of best fit y = 5x + 20 to a scatterplot. It is then found that every y-value had been recorded 4 units too low. The y-values are corrected and the line of best fit is computed again. Which statement about the corrected fit is true?',
        choices:{
          A:'It is y = 5x + 24, and every residual grows by 4.',
          B:'It is y = 5x + 16, and every residual stays the same.',
          C:'It is y = 5x + 24, and every residual stays the same.',
          D:'It is y = 9x + 20, and every residual grows by 4.'
        },
        correct:'C',
        expCorrect:'Adding 4 to every y-value slides the whole cloud of points up by 4 without changing its shape, so the fitted line slides up by 4 as well: the slope stays 5 and the intercept moves from 20 to 24. Residuals are vertical distances between points and line, and both rose by the same 4, so every gap is exactly what it was. Check with one point: if (3, 30) had a prediction of 35 and a residual of −5, the corrected point is (3, 34) with a prediction of 39 and a residual of 34 − 39 = −5 ✓.',
        expWrong:{
          A:'The intercept is right but the residuals are not. Point and line both rose by the same 4, so the distance between them did not change at all.',
          B:'The values were recorded too LOW, so correcting them adds 4 and pushes the intercept up to 24. Subtracting moves the line the wrong way.',
          D:'The slope changes only when the SHAPE of the cloud changes. Adding the same amount to every y-value is a pure vertical shift, so 5 stays 5.'
        },
        tip:'Adding a constant to every y-value shifts the line of best fit up by that constant and leaves the slope and every residual untouched. Multiplying every y-value by a constant scales the slope, the intercept and the residuals alike.',
        desmos:'Graph y=5x+20 and y=5x+24: same steepness, 4 apart everywhere. A point and its prediction both rise by 4, so the gap between them is unchanged.',
        desmosLatex:['y=5x+20','y=5x+24']
      },

      {
        id:'SKH-27', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Line of best fit with a coded year: predicting past the end of the table',
        stem:'A scatterplot relates x, the number of years since 2010, and y, the average price of a used cargo bike, in thousands of dollars. The line of best fit is y = 0.62x + 8.4. What does the model predict for the average price in 2027?',
        choices:{A:'$25,140', B:'$18.94', C:'$1,265,140', D:'$18,940'},
        correct:'D',
        expCorrect:'The x-axis counts years SINCE 2010, so 2027 is x = 2027 − 2010 = 17. Then y = 0.62(17) + 8.4 = 10.54 + 8.4 = 18.94. The y-units are thousands of dollars, so 18.94 thousand is $18,940.',
        expWrong:{
          A:'$25,140 uses x = 27, which would be years since 2000. The model says since 2010, so the code for 2027 is 17.',
          B:'$18.94 is the correct value of y, never converted. Each y-unit here is one thousand dollars.',
          C:'$1,265,140 feeds the whole year, 2027, into the model. A coded x-value always needs the base year subtracted first.'
        },
        tip:'When x is defined as years since a base year, subtract the base year before substituting, and read the y-units (in thousands, in millions) before writing the amount. Both slips can hit the same question.',
        desmos:'Type y=0.62x+8.4 and read the table at x=17: 18.94, in thousands of dollars. At x=27 it gives 25.14, which is the 2037 prediction, not the 2027 one.',
        desmosLatex:['y=0.62x+8.4','(17,18.94)']
      },

      {
        id:'SKH-28', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Line of best fit: a slope per quarter-hour used across two different spans of time',
        stem:'A scatterplot relates x, the number of quarter-hours a press has been running, and y, the number of sheets it has produced. The line of best fit is y = 18.5x + 6. According to the model, how many more sheets are predicted after 2 hours of running than after 45 minutes of running?',
        answer:'92.5',
        expCorrect:'Convert both times into quarter-hours, the unit on the x-axis: 2 hours = 8 quarter-hours and 45 minutes = 3 quarter-hours. Predictions: y = 18.5(8) + 6 = 148 + 6 = 154 and y = 18.5(3) + 6 = 55.5 + 6 = 61.5. The difference is 154 − 61.5 = 92.5 sheets. Shortcut worth keeping: a difference of two predictions from one line uses only the slope, 18.5(8 − 3) = 92.5, because the intercept cancels.',
        expWrong:{},
        tip:'A difference of two predictions from the same line equals slope times the difference in x; the intercept always cancels. Convert both times into the x-axis unit before subtracting anything.',
        desmos:'Type y=18.5x+6 and read the table at x=3 and x=8: 61.5 and 154. Or just compute 18.5*5, which gives the same 92.5.',
        desmosLatex:['y=18.5x+6','18.5*5']
      },

      {
        id:'SKH-29', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Line of best fit: the intercept when x = 0 is outside the data',
        stem:'A scatterplot relates x, the rainfall a field received in a month, in centimeters, and y, the alfalfa it yielded that month, in tons. Every month in the study had between 4 and 22 centimeters of rain, and the line of best fit is y = 0.8x + 1.2. Which of the following is the best interpretation of the number 1.2?',
        choices:{
          A:'The model predicts 1.2 tons for a rainless month, which the study never saw.',
          B:'The smallest alfalfa yield that any month in the study produced was 1.2 tons.',
          C:'Each additional centimeter of rain adds 1.2 tons to the predicted yield.',
          D:'A month with 1.2 centimeters of rain is predicted to produce no alfalfa at all.'
        },
        correct:'A',
        expCorrect:'The intercept is the prediction at x = 0: y = 0.8(0) + 1.2 = 1.2 tons for a month with no rain. But the data only cover 4 to 22 centimeters, so x = 0 lies outside the range the model was built on. The 1.2 is what the line says, not something the study ever measured — a prediction, and an extrapolated one.',
        expWrong:{
          B:'The intercept is a value of the MODEL, not of the data. The driest month in the study had 4 centimeters, where the model predicts 0.8(4) + 1.2 = 4.4 tons.',
          C:'That is the slope, 0.8 tons per centimeter. The 1.2 is the constant that stays put no matter what x is.',
          D:'This puts the 1.2 on the wrong axis. Setting y = 0 gives 0.8x + 1.2 = 0 and x = −1.5 centimeters, which is not a possible amount of rain.'
        },
        tip:'The intercept is always the predicted y when x = 0. Then check where x = 0 falls: inside the data it is an ordinary prediction, outside it is an extrapolation and has to be described as one.',
        desmos:'Graph y=0.8x+1.2 and mark (0,1.2) and (4,4.4). The data only live between x=4 and x=22, so the intercept sits outside the measured strip.',
        desmosLatex:['y=0.8x+1.2','(0,1.2)','(4,4.4)']
      },

      {
        id:'SKH-30', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'A residual and a slope, used to recover the intercept of the line of best fit',
        stem:'On a scatterplot, the line of best fit has slope 2.5, and the point (12, 58) has a residual of −6 with respect to that line. What is the y-intercept of the line of best fit?',
        choices:{A:'28', B:'34', C:'22', D:'64'},
        correct:'B',
        expCorrect:'Residual = observed − predicted, so predicted = observed − residual = 58 − (−6) = 64. The point sits 6 below the line, so the line is at 64 when x = 12. Now use the slope: 64 = 2.5(12) + b = 30 + b, so b = 34. Check: y = 2.5x + 34 gives 30 + 34 = 64 at x = 12, and 58 − 64 = −6 ✓.',
        expWrong:{
          A:'28 treats the observed 58 as if it were the prediction: 58 − 30 = 28. The residual says the line runs 6 higher than the point at that x.',
          C:'22 subtracts the residual instead of adding it: 58 − 6 = 52, then 52 − 30 = 22. A negative residual means the prediction is LARGER than the observation.',
          D:'64 is the predicted value at x = 12, one step short. The intercept is what remains once the 2.5(12) is taken off it.'
        },
        tip:'A residual plus an observation hands you a point that is ON the line. With one point on the line and the slope, y = mx + b gives up b in a single substitution.',
        desmos:'Graph y=2.5x+34 with (12,64) and (12,58): the line passes through the first point and the data point sits 6 below it.',
        desmosLatex:['y=2.5x+34','(12,64)','(12,58)']
      }

    ]
  });
})();
