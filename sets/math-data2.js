/* SAT Studio question set — Math: Problem-Solving & Data Analysis 2 (DT2-01 a DT2-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-data2',
    title: 'Math — Problem-Solving & Data 2',
    section: 'math',
    level: 'Media',
    description: 'More Problem-Solving & Data: percentages, ratios/rates, statistics (mean/median/spread), and probability.',
    minutes: 16,
    questions: [
      {
        id:'DT2-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Percentages (percent of a total)',
        stem:'A store received a shipment of 250 shirts. If 36% of the shirts were size medium, how many of the shirts were size medium?',
        choices:{A:'36', B:'72', C:'90', D:'160'},
        correct:'C',
        expCorrect:'36% de 250 = 0.36 × 250 = 90 camisas medianas.',
        expWrong:{
          A:'36 is the percent itself, not the quantity. You have to multiply it by the total of 250.',
          B:'72 would be 36% of 200, but the total is 250, not 200.',
          D:'160 is 64% (the ones that are NOT medium). They want the 36%.'
        },
        tip:'"Percent of a total" = decimal × total in one step. 36% → 0.36 × 250. If your answer is the same number as the percent, you forgot to multiply.'
      },
      {
        id:'DT2-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Percentages (percent change)',
        stem:'A monthly gym membership cost $45 last year. This year it costs $54. What was the percent increase in the cost of the membership?',
        choices:{A:'9%', B:'16.7%', C:'20%', D:'54%'},
        correct:'C',
        expCorrect:'Percent increase = (change / original value) × 100 = (54 − 45)/45 × 100 = 9/45 × 100 = 20%.',
        expWrong:{
          A:'9% confuses the absolute change ($9) with the percent. You have to divide by the original value.',
          B:'16.7% comes from dividing the change by the NEW value (9/54). Percent change is figured on the original value.',
          D:'54% is the new price in dollars, not a percent change.'
        },
        tip:'Percent change = (new − old) / OLD. The denominator is always the starting value (45), not the new one.'
      },
      {
        id:'DT2-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Percentages (reverse percent / finding the original)',
        stem:'During a sale, a jacket was sold for $51 after a 15% discount off its original price. What was the original price of the jacket, in dollars?',
        choices:{A:'$58.65', B:'$60', C:'$66', D:'$68'},
        correct:'B',
        expCorrect:'With 15% off you pay 85% of the original: 0.85 × original = 51. Original = 51 / 0.85 = $60.',
        expWrong:{
          A:'$58.65 adds 15% to $51 (51 × 1.15), but the discount is figured on the ORIGINAL price, not on the discounted one.',
          C:'$66 uses the wrong base; 51/0.85 gives 60, not 66.',
          D:'$68 divides 51 by 0.75 (as if it were 25% off). The discount is 15%, so you divide by 0.85.'
        },
        tip:'Reverse percent: if 15% was taken off, the price paid is 85% of the original. Divide the final price by 0.85 (do not add 15% back to the discounted price).'
      },
      {
        id:'DT2-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Percentages (percent of, correct base)',
        stem:'At a conference, 80 people attended. Of the attendees, 25% were speakers and the rest were guests. If 15% of the guests were first-time attendees, how many guests were first-time attendees?',
        choices:{A:'12', B:'20', C:'60', D:'9'},
        correct:'D',
        expCorrect:'Speakers = 25% of 80 = 20, so guests = 80 − 20 = 60. First-time = 15% of the guests = 0.15 × 60 = 9.',
        expWrong:{
          A:'12 is 15% of 80 (the total), but the 15% applies only to the GUESTS (60), not to everyone attending.',
          B:'20 is the number of speakers (25% of 80), not the first-time guests.',
          C:'60 is the total number of guests, not the ones attending for the first time.'
        },
        tip:'Watch the BASE of the percentage. "15% of the guests" uses 60, not 80. First find the right subgroup, then apply the percentage to it.'
      },
      {
        id:'DT2-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Ratios (splitting a total into three parts)',
        stem:'A recipe mixes flour, sugar, and butter in a ratio of 5 to 2 to 1 by weight. If a baker makes 480 grams of this mixture, how many grams of sugar are used?',
        choices:{A:'60', B:'96', C:'120', D:'300'},
        correct:'C',
        expCorrect:'The ratio 5:2:1 has 5 + 2 + 1 = 8 parts. Each part = 480 / 8 = 60 grams. The sugar is 2 parts: 2 × 60 = 120 grams.',
        expWrong:{
          A:'60 is the value of ONE part (the butter, 1 part). The sugar is 2 parts, so it is 120.',
          B:'96 comes from splitting it wrong; with 8 equal parts each one is 60, not 48.',
          D:'300 is the flour (5 parts × 60). They want the sugar.'
        },
        tip:'A three-term ratio → add ALL the parts (5+2+1=8), divide the total by that sum, and multiply by the parts of the ingredient they want.'
      },
      {
        id:'DT2-06', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Tasas y unidades (tasa unitaria)',
        stem:'A printer produces pages at a constant rate. It printed 210 pages in 6 minutes. At this rate, how many pages does the printer produce in 10 minutes?',
        answer:'350',
        expCorrect:'Rate = 210 / 6 = 35 pages per minute. In 10 minutes: 35 × 10 = 350 pages. Answer: 350.',
        expWrong:{},
        tip:'First get the unit rate (pages per MINUTE = 210/6 = 35), then multiply by the new time. Divide before you multiply.'
      },
      {
        id:'DT2-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'One-variable statistics (median and range)',
        stem:'A basketball player scored the following points in 7 games: 8, 11, 14, 14, 17, 20, and 30. What is the median number of points scored?',
        choices:{A:'14', B:'16', C:'17', D:'22'},
        correct:'A',
        expCorrect:'The 7 values are already in order. The median is the middle value: the 4th of 7, which is 14.',
        expWrong:{
          B:'16 is roughly the mean (114/7 ≈ 16.3), not the median. The median is the middle value, not the average.',
          C:'17 is the 5th value, but with 7 data points the middle is the 4th value (14), not the 5th.',
          D:'22 is the midpoint between the smallest (8) and the largest (30); that is not the median.'
        },
        tip:'Median = the middle value of the ORDERED list. With n odd it is the middle term (position (n+1)/2). With 7 data points, it is the 4th. Do not confuse it with the mean.'
      },
      {
        id:'DT2-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'One-variable statistics (effect of adding a value to the mean)',
        stem:'The mean of a data set of 5 numbers is 8. A sixth number, 20, is added to the data set. What is the mean of the new data set of 6 numbers?',
        choices:{A:'8', B:'12', C:'14', D:'10'},
        correct:'D',
        expCorrect:'The sum of the 5 original numbers = mean × count = 8 × 5 = 40. Adding 20, the new sum = 40 + 20 = 60. New mean = 60 / 6 = 10.',
        expWrong:{
          A:'8 assumes the mean does not change, but adding a value (20) greater than the mean does raise it.',
          B:'12 averages only 8 and 20 ((8+20)/2), ignoring that there are 5 numbers in the original group.',
          C:'14 does not fit; recover the original sum (40), add 20 and divide by 6 to get 10.'
        },
        tip:'To work with means, recover the SUM: sum = mean × count. Adjust the sum, adjust the count, and divide again. Here 40 → 60, divided by 6 = 10.'
      },
      {
        id:'DT2-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'One-variable statistics (comparing spread)',
        stem:'Data set P consists of the values 20, 40, 60, 80, and 100. Data set Q consists of the values 58, 59, 60, 61, and 62. Both data sets have a mean of 60. Which of the following correctly compares the standard deviations of the two data sets?',
        choices:{
          A:'The standard deviation of P is greater than the standard deviation of Q.',
          B:'The standard deviation of Q is greater than the standard deviation of P.',
          C:'The standard deviations of P and Q are equal.',
          D:'There is not enough information to compare the standard deviations.'
        },
        correct:'A',
        expCorrect:'Standard deviation measures how spread out the data are around the mean. The P values are far apart (20 to 100), while the Q values sit very close together (58 to 62). Since P is more spread out, its standard deviation is larger.',
        expWrong:{
          B:'The other way around: Q is the MORE clustered set (58 to 62), so it has the SMALLER standard deviation, not the larger one.',
          C:'They are not equal: having the same mean does not imply the same spread. P is far more scattered than Q.',
          D:'There is enough information: we know every value, so we can compare the spread directly.'
        },
        tip:'Standard deviation = how "spread out" the data are around the mean. Closer together → smaller. Further apart → larger. Compare the ranges at a glance; no computing needed.'
      },
      {
        id:'DT2-10', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Probability (simple event)',
        stem:'A jar contains 40 buttons: 16 are white, 15 are black, and 9 are red. If one button is selected at random, what is the probability that it is NOT white?',
        answer:'3/5',
        expCorrect:'The ones that are not white = 15 + 9 = 24 (or 40 − 16 = 24). Probability = 24 / 40 = 3/5. Valid forms for the box: 3/5 or .6 or 0.6. Answer: 3/5.',
        expWrong:{},
        tip:'"NOT white" = everything but the white ones: 40 − 16 = 24 favorable. Probability = 24/40 = 3/5. The box also takes .6.'
      },
      {
        id:'DT2-11', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Probability (subgroup within a total, in words)',
        stem:'A class has 30 students. There are 18 girls, and 12 of the girls play a sport. There are 12 boys, and 9 of the boys play a sport. If one student who plays a sport is chosen at random, what is the probability that the student is a boy?',
        choices:{A:'3/10', B:'9/30', C:'9/21', D:'3/4'},
        correct:'C',
        expCorrect:'Total students who play a sport = 12 (girls) + 9 (boys) = 21. Of those, 9 are boys. Probability = 9 / 21 = 3/7.',
        expWrong:{
          A:'3/10 = 9/30 uses the total of 30 students, but the pick is only from those who play a sport (21), not from everyone.',
          B:'9/30 makes the same error: the denominator has to be 21 (the athletes), not 30.',
          D:'3/4 = 9/12 uses only the 12 boys as the base, but the pick is from ALL the athletes (21), not just the boys.'
        },
        tip:'When they pick "from among those who play a sport", the denominator is that subgroup (21), not the total (30) or a single group (12). Favorable over the right subgroup.'
      },
      {
        id:'DT2-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Percentages (two successive percent changes)',
        stem:'A stock lost 20% of its value on Monday. On Tuesday, its value increased by 25% from its Monday value. After these two days, the stock\'s value is what percent of its value before Monday?',
        choices:{A:'100%', B:'105%', C:'95%', D:'45%'},
        correct:'A',
        expCorrect:'Successive changes MULTIPLY. Down 20% = ×0.80; up 25% = ×1.25. Total factor = 0.80 × 1.25 = 1.00. The final value is 100% of the original (it returns exactly to the start).',
        expWrong:{
          B:'105% adds the percentages (−20 + 25 = +5%). Successive percent changes do not add.',
          C:'95% also adds the percentages wrong or applies them to the same base; you have to multiply the factors.',
          D:'45% adds 20% + 25% as if they were discounts; it has nothing to do with the correct computation.'
        },
        tip:'Successive changes = multiply the factors (1 ± p/100), never add them. 0.80 × 1.25 = 1.00: here they do cancel, but by multiplication, not by adding −20 + 25.'
      }
    ]
  });
})();
