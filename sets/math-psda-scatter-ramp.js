/* SAT Studio question set — Math: Problem-Solving & Data Analysis
   Two-variable data and scatterplots (SKR-01 to SKR-23) */
(function(){

  window.SAT_SETS.push({
    id: 'math-psda-scatter-ramp',
    title: 'Scatterplots & Two-Variable Data — Warm-up to Test Level',
    section: 'math',
    level: 'Media',
    description: 'Two-variable data, from warm-up to test level: reading a line of best fit, slope and intercept in context, residuals with their signs, predicting inside and outside the range of the data, describing an association, and choosing between a linear and an exponential model.',
    minutes: 30,
    questions: [

      /* ============ Warm-up: reading the line (SKR-01 to SKR-07) ============ */
      {
        id:'SKR-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Slope of a line of best fit, with its units',
        stem:'A scatterplot relates x, the number of liters of fuel added to a delivery van, and y, the number of kilometers the van traveled on that fuel. The line of best fit is y = 12.4x + 3. Which of the following is the best interpretation of the number 12.4 in this model?',
        choices:{
          A:'For each additional liter of fuel, the model predicts 12.4 more kilometers.',
          B:'A van given no fuel at all is predicted to travel 12.4 kilometers.',
          C:'For each additional kilometer, the model predicts 12.4 more liters of fuel.',
          D:'On a 12.4-liter fill-up, the model predicts 3 kilometers of travel.'
        },
        correct:'A',
        expCorrect:'In y = mx + b the slope m is the change in y produced by a one-unit change in x. Here x counts liters and y counts kilometers, so 12.4 carries the units "kilometers per liter". (Check: at x = 10, y = 12.4(10) + 3 = 127; at x = 11, y = 12.4(11) + 3 = 139.4, and 139.4 − 127 = 12.4 ✓.)',
        expWrong:{
          B:'That is the y-intercept, 3: with x = 0 liters the model predicts 3 kilometers. The 12.4 is what each liter adds on top of it.',
          C:'This reads the slope upside down. It measures kilometers per liter, not liters per kilometer; the reciprocal, about 0.081 liters per kilometer, is what this sentence describes.',
          D:'This swaps the roles of the two numbers. The 12.4 multiplies the liters and the 3 is added once, so a 12.4-liter fill-up predicts 12.4(12.4) + 3 ≈ 156 kilometers.'
        },
        tip:'Say the slope out loud with its units before you read the choices: "12.4 kilometers for each extra liter". That one sentence kills both classic traps at once, swapping the slope with the intercept and flipping the units upside down.',
        desmos:'Graph y=12.4x+3 and read the table at x = 10 and x = 11: 127 and 139.4, a gap of exactly 12.4.',
        desmosLatex:['y=12.4x+3']
      },
      {
        id:'SKR-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'The y-intercept of a line of best fit, read in context',
        stem:'For 15 phones of the same model, a scatterplot relates x, the number of hours since the phone was unplugged, and y, the battery level, as a percent. The line of best fit is y = 98 − 6.5x. Which of the following is the best interpretation of the number 98 in this model?',
        choices:{
          A:'The battery level falls by 98 percentage points each hour.',
          B:'At the moment a phone is unplugged, the model predicts 98 percent.',
          C:'A phone is predicted to reach 98 percent after 6.5 hours.',
          D:'A fully charged battery is predicted to last 98 hours before it dies.'
        },
        correct:'B',
        expCorrect:'The y-intercept is what the model predicts when x = 0, and here x = 0 is the instant the phone came off the charger: y = 98 − 6.5(0) = 98 percent. (Check one hour later: 98 − 6.5(1) = 91.5, which is 6.5 points lower, so 98 is a starting level and 6.5 is the drop per hour ✓.)',
        expWrong:{
          A:'6.5 is the amount that falls off each hour, not 98. The 98 stands alone in the equation and is counted once, at x = 0.',
          C:'This pairs the intercept with the slope as though 6.5 were a time at which the level is 98. At x = 6.5 the model actually gives 98 − 6.5(6.5) = 55.75 percent.',
          D:'The model reaches 0 percent at 98 ÷ 6.5 ≈ 15.1 hours, not at 98 hours. A y-intercept here is a battery level, never a length of time.'
        },
        tip:'The y-intercept answers "what does the model predict when x = 0?", so first say out loud what x = 0 MEANS in the story. If x = 0 is a moment in time, the intercept is a level at that moment, not a duration.',
        desmos:'Graph y=98-6.5x. It meets the vertical axis at 98 and reaches zero near x = 15.1, so 98 is a percent and 15.1 is a number of hours.',
        desmosLatex:['y=98-6.5x','98/6.5']
      },
      {
        id:'SKR-03', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Line of best fit: a prediction inside the range of the data',
        stem:'A gardener measured the height of a sunflower once a week for 10 weeks and made a scatterplot of the data. The line of best fit is y = 9.4x + 6, where x is the number of weeks since planting and y is the predicted height, in centimeters. What height, in centimeters, does the line predict for week 7?',
        answer:'71.8',
        expCorrect:'Substitute x = 7 into the line: y = 9.4(7) + 6 = 65.8 + 6 = 71.8 centimeters. Week 7 sits inside the 10 weeks the gardener actually measured, so the line is being used where the data support it. (Check against week 6: 9.4(6) + 6 = 62.4, and 71.8 − 62.4 = 9.4, exactly one week of predicted growth ✓.) Answer: 71.8.',
        tip:'A prediction is always the LINE evaluated at that x, never the nearest dot. Substitute, then confirm that the x you used lies inside the range the data actually cover.',
        desmos:'Type 9.4*7+6, or graph y=9.4x+6 and read the table at x = 7: 71.8.',
        desmosLatex:['y=9.4x+6','9.4*7+6']
      },
      {
        id:'SKR-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Describing an association: direction first, then strength',
        stem:'A kayak stand recorded, on each of 8 mornings, the percent of the sky covered by clouds (x) and the number of kayaks rented (y). A scatterplot of the pairs (10, 34), (20, 31), (30, 29), (40, 25), (50, 22), (60, 18), (70, 16) and (80, 12) shows the points falling in a tight, nearly straight path. Which of the following best describes the data?',
        choices:{
          A:'Negative but weak: the points sit far from any line drawn through them.',
          B:'Positive and strong: rentals rise steadily as cloud cover rises.',
          C:'Negative and strong: rentals fall steadily as cloud cover rises.',
          D:'No association: rentals stay near the same value at every value of x.'
        },
        correct:'C',
        expCorrect:'Read the two things separately. DIRECTION: as x climbs from 10 to 80 percent, y falls from 34 rentals to 12, so the association is negative. STRENGTH: each 10-point step in cloud cover costs 3, 2, 4, 3, 4, 2 and 4 rentals — nearly the same amount every time — so the points hug one straight path and nothing sits far off it. The association is negative and strong.',
        expWrong:{
          A:'The direction is right, but weak means points scattered well above and below any line. Here every step in x costs between 2 and 4 rentals, so the path is tight.',
          B:'Positive would mean the cloud rises from left to right. This one falls: the cloudiest morning had 12 rentals and the clearest had 34.',
          D:'"No association" is a flat picture, with y about the same whatever x does. Here y drops by nearly two thirds, from 34 down to 12.'
        },
        tip:'Direction and strength are two separate readings. Direction is whether the cloud rises or falls; strength is how tightly the points hug one line. Check the step-by-step changes: nearly equal steps mean strong and linear.',
        desmos:'Plot the eight pairs and add y=-0.3155x+37.57. Every point lands within about one rental of that falling line.',
        desmosLatex:['(10,34)','(40,25)','(80,12)','y=-0.3155x+37.57']
      },
      {
        id:'SKR-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Residual: a point above or below the line of best fit',
        stem:'A bakery made a scatterplot relating x, the number of kilograms of flour used in a day, and y, the number of loaves baked that day. The line of best fit is y = 1.6x + 20. On one day the bakery used 50 kilograms of flour and baked 112 loaves. Which of the following is true about that day?',
        choices:{
          A:'The point lies on the line, so the model is exactly right for that day.',
          B:'The point lies below the line, and the model overestimates by 12 loaves.',
          C:'The point lies above the line, and the model underestimates by 32 loaves.',
          D:'The point lies above the line, and the model underestimates by 12 loaves.'
        },
        correct:'D',
        expCorrect:'Prediction first: y = 1.6(50) + 20 = 80 + 20 = 100 loaves. The bakery actually baked 112, so the residual is actual − predicted = 112 − 100 = +12. A positive residual puts the point ABOVE the line and says the model fell 12 loaves short. (Check: 100 + 12 = 112 ✓.)',
        expWrong:{
          A:'On the line would mean 112 = 1.6(50) + 20, that is 112 = 100, which is false. The 12-loaf gap is exactly the residual.',
          B:'Below the line would mean the actual count is smaller than the prediction. Here 112 is larger than 100, so the point sits above it and the model came up short.',
          C:'32 is 112 − 80, the prediction with the intercept left out. The model is y = 1.6x + 20, so the 20 has to be added before anything is compared.'
        },
        tip:'Residual = actual − predicted, in that order. Positive puts the point above the line and means the model UNDERestimated; negative puts it below and means it overestimated.',
        desmos:'Type 1.6*50+20 to get 100, then 112-100 for the residual. Graph y=1.6x+20 with (50,112) and the point sits 12 above the line.',
        desmosLatex:['y=1.6x+20','(50,112)','1.6*50+20','112-100']
      },
      {
        id:'SKR-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Two-variable data: choosing a linear or an exponential model',
        stem:'An app developer records the number of users once a month. The totals for months 0 through 4 are 20, 30, 45, 67.5 and 101.25 thousand. Which model best fits these two-variable data, and why?',
        choices:{
          A:'Exponential, because the total is multiplied by 1.5 each month.',
          B:'Linear, because the total grows every month without ever falling.',
          C:'Linear, because the total grows by a fixed 15 thousand each month.',
          D:'Exponential, because the total is 20 thousand when x = 0.'
        },
        correct:'A',
        expCorrect:'Run the two tests in order. DIFFERENCES: 30 − 20 = 10, 45 − 30 = 15, 67.5 − 45 = 22.5 and 101.25 − 67.5 = 33.75 — not constant, so no straight line fits. RATIOS: 30/20 = 1.5, 45/30 = 1.5, 67.5/45 = 1.5 and 101.25/67.5 = 1.5 — constant, which is exactly what exponential growth means. The model is y = 20(1.5)^x. (Check month 4: 20(1.5)^4 = 20(5.0625) = 101.25 ✓.)',
        expWrong:{
          B:'Always rising is not the same as rising by a constant amount. An exponential curve rises every month too; what makes a model linear is EQUAL differences, and these grow from 10 to 33.75.',
          C:'15 is only the second difference, 45 − 30. The first is 10 and the last is 33.75, so there is no fixed step.',
          D:'The value at x = 0 is the starting amount, and both families have one; here it is the 20 in y = 20(1.5)^x. What separates the families is equal differences against equal ratios.'
        },
        tip:'Run both tests on the list: subtract consecutive values, then divide them. Constant differences mean linear, constant ratios mean exponential. Whichever test comes out constant names the model.',
        desmos:'Type 30/20, 45/30, 67.5/45 and 101.25/67.5: all four give 1.5. Then graph y=20*1.5^x through the five points.',
        desmosLatex:['y=20*1.5^{x}','(0,20)','(2,45)','(4,101.25)','101.25/67.5']
      },
      {
        id:'SKR-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Line of best fit: the predicted value against the observed value',
        stem:'For 9 shops in a mall, a scatterplot relates x, the floor area in square meters, and y, the number of customers per day. The line of best fit passes through the points (40, 130) and (140, 430). Based on the line of best fit, how many customers per day are predicted for a shop with a floor area of 100 square meters?',
        choices:{
          A:'300',
          B:'310',
          C:'290',
          D:'280'
        },
        correct:'B',
        expCorrect:'Two points give the whole line. Slope = (430 − 130)/(140 − 40) = 300/100 = 3 customers per day for each extra square meter. Then 130 = 3(40) + b gives b = 130 − 120 = 10, so the line is y = 3x + 10 (check the other point: 3(140) + 10 = 430 ✓). At x = 100 the prediction is y = 3(100) + 10 = 310.',
        expWrong:{
          A:'300 is 3(100) with the intercept dropped. This line does not pass through the origin: it meets the vertical axis at 10.',
          C:'290 subtracts the constant instead of adding it. From 130 = 3(40) + b the constant comes out +10, not −10.',
          D:'280 is the average of 130 and 430, which is what the line predicts at x = 90 — the midpoint of 40 and 140 — and not at x = 100.'
        },
        tip:'Two points on a line of best fit are enough for the whole model: slope first, then put one point back in to find the constant, then check with the other point before you substitute.',
        desmos:'Plot (40,130) and (140,430) and graph y=3x+10 through them; the table at x = 100 reads 310.',
        desmosLatex:['y=3x+10','(40,130)','(140,430)']
      },

      /* ============ Test level: residuals, units, shape (SKR-08 to SKR-23) ============ */
      {
        id:'SKR-08', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Residual from a line of best fit: actual minus predicted',
        stem:'A scatterplot relates x, the number of minutes a podcast episode runs, and y, the percent of its listeners who finish it. The line of best fit is y = 82 − 0.9x. One episode that runs 40 minutes was finished by 52 percent of its listeners. What is the residual for that episode?',
        answer:'6',
        expCorrect:'Prediction first: y = 82 − 0.9(40) = 82 − 36 = 46 percent. The residual is actual − predicted = 52 − 46 = 6. It is positive, so the point sits above the line and the model came up 6 points short for this episode. (Check: 46 + 6 = 52 ✓.) Answer: 6.',
        tip:'Residual = actual − predicted, always in that order, and the prediction is a step, not the answer. Label it before you subtract so it does not get handed in by mistake.',
        desmos:'Type 82-0.9*40 for the prediction, 46, then 52-46 for the residual. Graphing y=82-0.9x with (40,52) shows the point sitting 6 above the line.',
        desmosLatex:['y=82-0.9x','(40,52)','82-0.9*40','52-46']
      },
      {
        id:'SKR-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Residual: the sign tells you which side of the line of best fit',
        stem:'For 20 rooftops, a scatterplot relates x, the panel area in square meters, and y, the energy produced in one day, in kilowatt-hours. The line of best fit is y = 0.14x + 1.2. One rooftop with 60 square meters of panels produced 8.4 kilowatt-hours in a day. Which statement about the residual for that rooftop is true?',
        choices:{
          A:'The residual is −8.4, so the rooftop produced less than the model predicted.',
          B:'The residual is 1.2, so the rooftop produced more than the model predicted.',
          C:'The residual is −1.2, so the rooftop produced less than the model predicted.',
          D:'The residual is 0, so the rooftop produced exactly what the model predicted.'
        },
        correct:'C',
        expCorrect:'Prediction: y = 0.14(60) + 1.2 = 8.4 + 1.2 = 9.6 kilowatt-hours. Residual = actual − predicted = 8.4 − 9.6 = −1.2. A negative residual puts the point BELOW the line: this rooftop produced 1.2 kilowatt-hours less than the model called for. (Check: 9.6 − 1.2 = 8.4 ✓.)',
        expWrong:{
          A:'−8.4 treats the actual output as the gap. 8.4 is what the rooftop produced; the gap is 8.4 − 9.6, which is −1.2.',
          B:'+1.2 is the subtraction done backwards, predicted − actual. The order is fixed, actual first, and flipping it turns an overestimate into an underestimate.',
          D:'0 comes from stopping at 0.14(60) = 8.4 and never adding the 1.2. The intercept is part of every prediction, and with it the model asks for 9.6.'
        },
        tip:'Two habits kill most residual errors: write the prediction down with its units before subtracting, and read the sign as a position — positive is above the line, negative is below it.',
        desmos:'Type 0.14*60+1.2 to get 9.6, then 8.4-9.6 for the residual. Graph y=0.14x+1.2 with (60,8.4): the point sits below the line.',
        desmosLatex:['y=0.14x+1.2','(60,8.4)','0.14*60+1.2','8.4-9.6']
      },
      {
        id:'SKR-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Slope of a line of best fit against the total change across the data',
        stem:'A scatterplot relates x, the age of a trout in months, and y, its length in centimeters, for 30 trout aged 6 to 30 months. The line of best fit is y = 1.15x + 9.4. Which of the following is the best interpretation of the slope of this line?',
        choices:{
          A:'A trout is predicted to be 1.15 months older for each additional centimeter of length.',
          B:'The predicted length increases by 1.15 centimeters over the whole 6-to-30-month range.',
          C:'Every trout in the study grew exactly 1.15 centimeters during its first month.',
          D:'The predicted length increases by 1.15 centimeters for each additional month of age.'
        },
        correct:'D',
        expCorrect:'The slope of y = mx + b is the change in the predicted y for a one-unit change in x. Here x is months and y is centimeters, so 1.15 carries the units "centimeters per month of age". (Check: at x = 10, y = 1.15(10) + 9.4 = 20.9; at x = 11, y = 22.05, and 22.05 − 20.9 = 1.15 ✓.)',
        expWrong:{
          A:'This reads the slope upside down. It is centimeters per month, not months per centimeter; the reciprocal, about 0.87 months per centimeter, is what this sentence describes.',
          B:'That is a total change, not a rate. From x = 6 to x = 30 the model climbs 1.15(30 − 6) = 27.6 centimeters, from 16.3 up to 43.9; the 1.15 is what ONE month is worth.',
          C:'A line of best fit describes the cloud on average and says nothing about what one particular trout did in one particular month. Individual points sit above and below the line.'
        },
        tip:'Slope is a rate: "y-units for ONE more x-unit". When a choice describes the change across the whole range instead, multiply the slope by the width of that range and you will land on a different number.',
        desmos:'Graph y=1.15x+9.4 and read the table at x = 10 and x = 11 (20.9 and 22.05), then at x = 6 and x = 30 (16.3 and 43.9, a gap of 27.6).',
        desmosLatex:['y=1.15x+9.4']
      },
      {
        id:'SKR-11', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Line of best fit: slope from two points, converted to other units',
        stem:'A scatterplot relates x, the number of minutes a 3D printer has been running, and y, the number of layers it has finished. The line of best fit passes through the points (15, 96) and (75, 456). Based on the line of best fit, how many more layers are predicted for each additional HOUR of running?',
        answer:'360',
        expCorrect:'Slope from the two points: (456 − 96)/(75 − 15) = 360/60 = 6 layers per MINUTE. The question asks per hour, and one hour is 60 minutes, so the predicted gain is 6 × 60 = 360 layers. (Check from the model itself: 96 = 6(15) + b gives b = 6, so y = 6x + 6; then y(135) − y(75) = 816 − 456 = 360 ✓.) Answer: 360.',
        tip:'Do the unit change LAST, after the slope. A slope in "per minute" becomes "per hour" by multiplying by 60, and the intercept never enters a question that asks only about change.',
        desmos:'Type (456-96)/(75-15) to get 6, then 6*60. Or graph y=6x+6 and compare the table at x = 75 and x = 135: 456 and 816.',
        desmosLatex:['(456-96)/(75-15)','y=6x+6']
      },
      {
        id:'SKR-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Line of best fit: when the y-intercept has no meaning in context',
        stem:'For 30 adults, a scatterplot relates x, the height in centimeters, and y, the forearm length in centimeters. The line of best fit is y = 0.21x − 9.7. Which of the following statements about the y-intercept, −9.7, is true?',
        choices:{
          A:'It is the model value at a height of 0 centimeters, so it has no meaning here.',
          B:'It is the shortest forearm length measured in the study.',
          C:'It says the predicted forearm length falls by 9.7 centimeters for each extra centimeter of height.',
          D:'It is the height at which the predicted forearm length is zero.'
        },
        correct:'A',
        expCorrect:'The y-intercept is what the model predicts at x = 0, and here x is an adult height, so x = 0 would be an adult 0 centimeters tall. Nobody in the study is anywhere near that, and the answer, a negative length, is impossible on its face: the number is only where the straight line lands far outside the data. Inside the range the model behaves: at x = 170, y = 0.21(170) − 9.7 = 35.7 − 9.7 = 26 centimeters.',
        expWrong:{
          B:'The intercept is not a value taken from the data at all; it is where the fitted line meets the vertical axis. The shortest forearm measured is a positive number, and −9.7 is not.',
          C:'That describes a slope, and it would be one if the slope were −9.7. The slope here is 0.21, so each extra centimeter of height adds 0.21 centimeters of predicted forearm.',
          D:'That is the x-intercept, not the y-intercept. The model predicts y = 0 at x = 9.7/0.21 ≈ 46 centimeters, which is also far outside the range of adult heights.'
        },
        tip:'Always ask what x = 0 MEANS in the story before interpreting an intercept. If x = 0 is impossible or sits far outside the data, the intercept is just where the line happens to land, not a fact about anything.',
        desmos:'Graph y=0.21x-9.7 and set the window from x = 150 to x = 200, where the data live. Zoom out to x = 0 and the line is below the horizontal axis.',
        desmosLatex:['y=0.21x-9.7','9.7/0.21']
      },
      {
        id:'SKR-13', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Predicting outside the range of the data: why the model stops being reliable',
        stem:'For 35 weather stations, a scatterplot relates x, the elevation in hundreds of meters, and y, the snow depth in centimeters. The stations range from x = 8 to x = 24, and the line of best fit is y = 7.5x − 40. A hiker uses this line to predict the snow depth at a station where x = 60. Which of the following is the best reason to doubt that prediction?',
        choices:{
          A:'The line has a negative constant, so it cannot be used for large values of x.',
          B:'The value x = 60 lies far outside the 8-to-24 range that the data cover.',
          C:'The predicted depth, 410 centimeters, is deeper than any station recorded.',
          D:'A line of best fit may only be used at x-values that appear in the data.'
        },
        correct:'B',
        expCorrect:'The data run from x = 8 to x = 24. A line of best fit only summarizes the cloud it was fitted to, and at x = 60 there are no points at all, so nothing in the study says the straight pattern keeps going that far out. That is extrapolation. (The line would hand back y = 7.5(60) − 40 = 410 centimeters, but no evidence backs that number.)',
        expWrong:{
          A:'A negative constant is ordinary and harmless. It only shifts the line down; here it means the model predicts no snow until x ≈ 5.3, and the line still works across the x-values the data cover.',
          C:'A prediction being larger than everything observed is expected when the x is larger than everything observed. What makes it unreliable is the missing data at x = 60, not the size of the answer.',
          D:'This goes too far. A fitted line is meant to be used anywhere INSIDE the range of the data, including at x-values that no station happens to have, such as x = 15.5. The trouble here is being outside it.'
        },
        tip:'Before trusting a prediction, check that the x you are substituting lies between the smallest and the largest x in the data. Inside that range is interpolation and is fine; outside it is extrapolation, and the model is only a guess.',
        desmos:'Graph y=7.5x-40 and mark x = 8 and x = 24, where the data live; then read the table at x = 60 and notice there is nothing around it. Type 40/7.5 to see where the line reaches zero.',
        desmosLatex:['y=7.5x-40','7.5*60-40','40/7.5']
      },
      {
        id:'SKR-14', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Scatterplot shape: a curved pattern that no line of best fit can follow',
        stem:'A scatterplot relates x, the distance of an apartment from the city center in kilometers, and y, its monthly rent in dollars. The points fall steeply from x = 1 to x = 4, then flatten out and sit nearly level from x = 8 to x = 15. Which of the following statements about these data is true?',
        choices:{
          A:'The association is positive, because rent is higher far from the center.',
          B:'The association is negative and the form is linear, so a straight line fits well.',
          C:'The association is negative, but the form is curved, so a straight line fits poorly.',
          D:'There is no association, because the points are level from x = 8 to x = 15.'
        },
        correct:'C',
        expCorrect:'Two readings again. DIRECTION: rent goes down as distance goes up, so the association is negative. FORM: a straight line has the same steepness everywhere, and this cloud does not — it drops sharply over the first few kilometers and then levels off. Any line drawn through it would sit below the close-in points and above the far-out ones, so the form is curved and a straight-line model fits poorly.',
        expWrong:{
          A:'Positive would mean rent RISES with distance. The description says the points fall, which is the opposite; even the flat tail sits far below where the cloud started.',
          B:'Linear means a constant rate of change. Rent here falls fast near the center and barely at all past 8 kilometers, so no single slope can describe both halves.',
          D:'Being level over PART of the range is not the same as having no association. Across the whole range the rent changes a great deal, and a flat tail is one of the signs of a curved form.'
        },
        tip:'Describe a scatterplot with three words: direction, form, strength. A cloud that steepens or flattens as it goes has a curved form, and that alone rules out a straight-line model no matter how clear the direction looks.',
        desmos:'Plot (1,2400), (2,1900), (4,1450), (8,1150), (12,1080) and (15,1050), then add y=-83.1x+2086.9. The line misses the closest apartment by about 400 dollars.',
        desmosLatex:['(1,2400)','(4,1450)','(8,1150)','(15,1050)','y=-83.1x+2086.9']
      },
      {
        id:'SKR-15', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Residual: how far the line of best fit overestimates one point',
        stem:'A scatterplot relates x, the number of stops on a bus route, and y, the time the route takes, in minutes. The line of best fit is y = 2.4x + 11. One route with 25 stops takes 62 minutes. By how many minutes does the line of best fit overestimate the time for that route?',
        answer:'9',
        expCorrect:'Prediction: y = 2.4(25) + 11 = 60 + 11 = 71 minutes. The route actually takes 62, so the residual is 62 − 71 = −9: negative, which puts the point below the line and says the model asked for too much. The question wants HOW MUCH it overestimates, which is the size of that gap, 9 minutes. (Check: 71 − 9 = 62 ✓.) Answer: 9.',
        tip:'Work out the signed residual first, then answer the question that was actually asked. "By how much does it overestimate" wants the size, a positive number; "what is the residual" wants the signed value.',
        desmos:'Type 2.4*25+11 to get 71, then 71-62. Graph y=2.4x+11 with (25,62) and the point sits 9 below the line.',
        desmosLatex:['y=2.4x+11','(25,62)','2.4*25+11','71-62']
      },
      {
        id:'SKR-16', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'An outlier and what it does to the line of best fit',
        stem:'A scatterplot shows 8 points. Seven of them are (2, 9), (3, 12), (4, 15), (5, 18), (6, 21), (7, 24) and (8, 27), and they all lie on one rising line. The eighth point is (20, 14), far to the right and well below that line. What happens to the line of best fit for all 8 points when the point (20, 14) is removed?',
        choices:{
          A:'The slope stays the same but the line shifts up, because a low point is gone.',
          B:'The slope becomes much flatter, and the line then passes through all 7 points.',
          C:'The slope barely changes, because one point out of eight has little effect.',
          D:'The slope becomes much steeper, and the line then passes through all 7 points.'
        },
        correct:'D',
        expCorrect:'The seven clustered points already sit on one line: from (2, 9) to (3, 12) the value of y climbs 3 for each step of 1, and y = 3x + 3 fits every one of them (check the last: 3(8) + 3 = 27 ✓). With (20, 14) in the data, the fit is dragged almost flat, to about y = 0.14x + 16.54, because that point lies far from the rest HORIZONTALLY and so carries a lot of leverage. Removing it lets the line snap back to y = 3x + 3 — a slope of 3 instead of 0.14, which is much steeper.',
        expWrong:{
          A:'A point can change the slope, not only the height, whenever it sits far out in x. Here the whole tilt changes, from about 0.14 to 3.',
          B:'Flatter is what the outlier already made it. The slope of about 0.14 is the flat one; taking the point away restores the steep slope of 3.',
          C:'"One point out of eight" is the wrong thing to count. Leverage depends on how far a point sits in the x-direction, and x = 20 is more than twice the largest x in the cluster, so this single point controls the tilt.'
        },
        tip:'A point far from the rest HORIZONTALLY has leverage: it swings the slope. A point far out only vertically, near the middle of the x-range, mostly shifts the line up or down instead of tilting it.',
        desmos:'Plot the seven clustered points with y=3x+3: it hits every one. Add (20,14) and y=0.14x+16.54 to see how flat the fit for all eight becomes.',
        desmosLatex:['y=3x+3','(8,27)','(20,14)','y=0.14x+16.54']
      },
      {
        id:'SKR-17', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Comparing residuals: where the line of best fit overestimates most',
        stem:'A scatterplot of four points is modeled by the line of best fit y = 4x + 6. The four points are (3, 22), (5, 20), (8, 44) and (11, 46). At which of these points does the value given by the line sit furthest ABOVE the actual value?',
        choices:{
          A:'(5, 20)',
          B:'(3, 22)',
          C:'(8, 44)',
          D:'(11, 46)'
        },
        correct:'A',
        expCorrect:'The line sitting above a point means predicted is bigger than actual, so the residual actual − predicted is negative, and the question wants the most negative one. Point by point: (3, 22) gives 4(3) + 6 = 18, residual +4. (5, 20) gives 26, residual −6. (8, 44) gives 38, residual +6. (11, 46) gives 50, residual −4. Two residuals are negative, −6 and −4, and −6 is the further one, so the line rides highest above its point at (5, 20).',
        expWrong:{
          B:'(3, 22) has residual +4: the actual value is ABOVE the line there, so the model underestimates rather than sitting above the point.',
          C:'(8, 44) has the largest gap in size, 6, but its sign is positive: the actual 44 sits above the predicted 38. Ignoring the sign is exactly the trap here.',
          D:'(11, 46) is overestimated, by 4, but that is the smaller of the two overestimates. Once the signs are sorted, −6 beats −4.'
        },
        tip:'Build a small table of predicted, actual and residual for every point before choosing. "The line above the point" means a negative residual, and "by the most" then compares sizes only among the points that already have the right sign.',
        desmos:'Graph y=4x+6 with the four points. Two sit above the line and two below; the biggest drop below it is at x = 5.',
        desmosLatex:['y=4x+6','(3,22)','(5,20)','(8,44)','(11,46)']
      },
      {
        id:'SKR-18', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Slope of a line of best fit when x is measured in thousands',
        stem:'For 40 towns, a scatterplot relates x, the population in thousands, and y, the number of pharmacies in the town. The line of best fit is y = 0.42x + 1.5. Which of the following is the best interpretation of the slope of this line?',
        choices:{
          A:'For each additional resident, the model predicts 0.42 more pharmacies.',
          B:'For each additional thousand residents, the model predicts 0.42 more pharmacies.',
          C:'For each additional pharmacy, the model predicts 0.42 thousand more residents.',
          D:'A town with no residents at all is predicted to have 0.42 pharmacies.'
        },
        correct:'B',
        expCorrect:'The slope is the change in y for a one-unit change in x, and one unit of x here is one THOUSAND residents, because that is how x was defined. So 0.42 is pharmacies per thousand residents. (Check: at x = 10, y = 0.42(10) + 1.5 = 5.7; at x = 11, y = 6.12, and 6.12 − 5.7 = 0.42 for one more thousand residents ✓.)',
        expWrong:{
          A:'This forgets how x was measured. Per single resident the model gives 0.42/1000 = 0.00042 pharmacies, which is why the units of x have to be read before the slope is put into words.',
          C:'This reads the slope upside down. It is pharmacies per thousand residents, not residents per pharmacy; the reciprocal, about 2.4 thousand residents per pharmacy, is what this sentence describes.',
          D:'That is the y-intercept, 1.5, and not the slope. It is what the model predicts at x = 0.'
        },
        tip:'Copy the units of x straight out of the sentence that defines it. When x is given "in thousands" or "in hundreds", the slope is y-units per thousand or per hundred, and the choice that says "per person" is the built-in trap.',
        desmos:'Graph y=0.42x+1.5 and read the table at x = 10 and x = 11: 5.7 and 6.12, a gain of 0.42 for one more thousand residents.',
        desmosLatex:['y=0.42x+1.5']
      },
      {
        id:'SKR-19', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Line of best fit: the x that produces a given predicted y',
        stem:'A beekeeper made a scatterplot relating x, the number of weeks since a hive was started, and y, the weight of the hive in kilograms. The line of best fit is y = 1.75x + 8.5. According to the line of best fit, after how many weeks is the hive predicted to weigh 43.5 kilograms?',
        answer:'20',
        expCorrect:'Set the model equal to the target weight and solve for x: 1.75x + 8.5 = 43.5. Subtract the intercept: 1.75x = 35. Divide by the slope: x = 35/1.75 = 20 weeks. (Check: 1.75(20) + 8.5 = 35 + 8.5 = 43.5 ✓.) Answer: 20.',
        tip:'A prediction question hands you x and asks for y; this one hands you y and asks for x. Same model, run backwards: undo the intercept first, then the slope.',
        desmos:'Graph y=1.75x+8.5 together with y=43.5 and click where they meet: x = 20. Or just type (43.5-8.5)/1.75.',
        desmosLatex:['y=1.75x+8.5','y=43.5','(43.5-8.5)/1.75']
      },
      {
        id:'SKR-20', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Scatterplot shape: a weak positive association described correctly',
        stem:'For 50 city blocks, a scatterplot relates x, the number of street trees on the block, and y, the number of bird species seen there in one morning. The cloud drifts upward from left to right, but the points are spread widely above and below the line of best fit. Which description fits the plot best?',
        choices:{
          A:'The association is negative but weak: a wide spread always means y falls as x rises.',
          B:'The association is positive and strong: the upward drift means the points hug the line.',
          C:'The association is positive but weak: the upward drift is real, and the spread is wide.',
          D:'There is no association: a wide spread means the two variables move separately.'
        },
        correct:'C',
        expCorrect:'Direction and strength are read separately. DIRECTION: the cloud drifts upward from left to right, so more trees go with more species on average — positive. STRENGTH: the points are spread widely above and below the fitted line, so knowing x pins down y only loosely — weak. The association is positive and weak.',
        expWrong:{
          A:'The direction is wrong. Spread is about strength, not direction; a wide spread says nothing about which way the cloud tilts, and this one tilts up.',
          B:'Direction and strength are two different readings. A cloud can tilt upward and still be loose; strong would require the points to sit close to the line, and these do not.',
          D:'A wide spread weakens an association without erasing it. "No association" means no tilt at all, and this cloud clearly drifts upward.'
        },
        tip:'Direction comes from the tilt, strength comes from the spread around the line. Weak does not mean absent, and strong does not mean steep — a nearly flat line can still be a very tight fit.',
        desmos:'Plot (2,3), (4,4), (4,9), (7,5), (9,11), (10,6), (12,12) and (14,9) with y=0.516x+3.38. The tilt is upward and single points sit more than 3 species off the line.',
        desmosLatex:['(4,4)','(4,9)','(10,6)','(12,12)','y=0.516x+3.38']
      },
      {
        id:'SKR-21', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two lines compared: which one fits the scatterplot better',
        stem:'A scatterplot shows the points (1, 5), (2, 9), (3, 11), (4, 16) and (5, 19). Two models are proposed for these data: model P is y = 3.5x + 1.7 and model Q is y = 3.5x + 4. Which of the following statements comparing the two models is true?',
        choices:{
          A:'Model P fits better: its line passes exactly through all five points.',
          B:'Model Q fits better: it has the larger constant, so it reaches the higher points.',
          C:'The two fit equally well, because they have the same slope, 3.5.',
          D:'Model P fits better: model Q predicts too high at every one of the five points.'
        },
        correct:'D',
        expCorrect:'Compare the predictions point by point. Model P gives 5.2, 8.7, 12.2, 15.7 and 19.2 against the actual 5, 9, 11, 16 and 19, so its residuals are −0.2, +0.3, −1.2, +0.3 and −0.2: small, and some above the line and some below. Model Q gives 7.5, 11, 14.5, 18 and 21.5, so its residuals are −2.5, −2, −3.5, −2 and −2.5: every one negative, which means that line sits above every single point. A model that misses the same way at every point is the worse fit.',
        expWrong:{
          A:'Model P is close but not exact: at x = 3 it predicts 12.2 while the point is at 11, a residual of −1.2. A line through all five points would need every residual to be 0.',
          B:'A larger constant only lifts the line; it does not make it fit. Lifting it by 2.3 here carries the line ABOVE all five points, which is what makes every residual negative.',
          C:'Equal slopes make two lines parallel, not equally good. Where a line sits matters as much as how it tilts, and these two sit 2.3 apart.'
        },
        tip:'To compare two models, list the residuals of both. The better one has smaller residuals AND a mix of signs; residuals that all carry the same sign say the line is riding above or below the entire cloud and could be shifted to fit better.',
        desmos:'Plot the five points and graph y=3.5x+1.7 and y=3.5x+4 together. The second line passes above every point.',
        desmosLatex:['(1,5)','(3,11)','(5,19)','y=3.5x+1.7','y=3.5x+4']
      },
      {
        id:'SKR-22', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two-variable data: reading the shape to pick a linear or an exponential model',
        stem:'A scatterplot relates x, the number of days since a rumor started, and y, the number of students who have heard it. The points rise slowly over the first four days, then climb more and more steeply through day ten, so each step up is larger than the one before it. Which model best fits, and why?',
        choices:{
          A:'An exponential model, because the rise per day keeps growing.',
          B:'A linear model, because the points rise on every single day.',
          C:'A linear model, because a line of best fit can be drawn through any cloud.',
          D:'An exponential model, because the points never fall.'
        },
        correct:'A',
        expCorrect:'What separates the two families is the SIZE OF THE STEPS. A linear model adds the same amount of y for each extra day, so its cloud climbs at one steady steepness. Here each day adds more than the day before, so the cloud bends upward, and steps that keep growing are the signature of exponential growth: a constant multiplier instead of a constant addition. (For example, 4(1.5)^x adds 2, 3, 4.5 and 6.75 over its first four days.)',
        expWrong:{
          B:'Rising every day is true of both families. Linear needs EQUAL steps, and the description says the steps get bigger.',
          C:'A line can always be drawn, but "fits" is the question. Through a curved cloud a line sits above the middle and below both ends, and its residuals form a clear pattern instead of scattering.',
          D:'"Never falls" is true of every increasing model, linear included, so it cannot pick exponential over linear. What does is that the increases themselves keep growing.'
        },
        tip:'Turn shape into arithmetic: equal steps mean linear, steps that grow by a constant multiple mean exponential. Given values instead of a picture, subtract consecutive ones and then divide them, and see which test comes out constant.',
        desmos:'Graph y=4*1.5^x and y=20x-40 on the same screen from x = 0 to x = 10: the curve bends upward while the line keeps one steepness the whole way.',
        desmosLatex:['y=4*1.5^{x}','y=20x-40']
      },
      {
        id:'SKR-23', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Residuals compared: which point the line of best fit comes closest to',
        stem:'A scatterplot is modeled by the line of best fit y = 2.5x + 7. Four of its points are (2, 13), (6, 20), (10, 35) and (16, 42). At which of these points is the residual smallest in size?',
        choices:{
          A:'(6, 20)',
          B:'(2, 13)',
          C:'(10, 35)',
          D:'(16, 42)'
        },
        correct:'B',
        expCorrect:'Work out predicted, then actual − predicted, for all four. (2, 13): 2.5(2) + 7 = 12, residual +1. (6, 20): 22, residual −2. (10, 35): 32, residual +3. (16, 42): 47, residual −5. The sizes are 1, 2, 3 and 5, so the line comes closest at (2, 13). The sign plays no part here; only how far the point sits from the line.',
        expWrong:{
          A:'(6, 20) has residual −2, the second smallest. Its actual value is the smallest of the four, but a small y and a small residual are different things.',
          C:'(10, 35) has residual +3. Sitting above the line is not the same as sitting near it; the size, 3, is what this question compares.',
          D:'(16, 42) has residual −5, the largest gap of the four. Its x is the largest, which is why the line has climbed furthest away from it.'
        },
        tip:'When a question asks which point is CLOSEST to the line, compare the sizes of the residuals and drop the signs. When it asks which point the model overestimates most, keep the signs and compare only within that sign.',
        desmos:'Graph y=2.5x+7 with the four points: the dot at x = 2 is almost on the line, while the one at x = 16 is five below it.',
        desmosLatex:['y=2.5x+7','(2,13)','(6,20)','(10,35)','(16,42)']
      }

    ]
  });
})();
