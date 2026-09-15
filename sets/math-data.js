/* SAT Studio question set — Math: Problem-Solving & Data Analysis (DAT-01 a DAT-10) */
(function(){
  window.SAT_SETS.push({
    id: 'math-data',
    title: 'Math — Problem-Solving & Data',
    section: 'math',
    level: 'Media',
    description: 'Problem-Solving & Data Analysis: percentages, ratios, statistics, and probability.',
    minutes: 15,
    questions: [
      {
        id:'DAT-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Percents (percent of a total)',
        stem:'A school has 350 students. If 40% of the students are in the band, how many students are in the band?',
        choices:{A:'40', B:'140', C:'210', D:'245'},
        correct:'B',
        expCorrect:'40% of 350 = 0.40 × 350 = 140 students.',
        expWrong:{
          A:'40 is the percent itself, not the number of students. You have to multiply it by the total.',
          C:'210 is 60% (the ones NOT in the band). They are asking for the 40%.',
          D:'245 is 70% of 350; it does not match the 40% being asked for.'
        },
        tip:'"Percent of a total" = decimal × total in one step. 40% → 0.40 × 350. If your result is the same number as the percent, you forgot to multiply.'
      },
      {
        id:'DAT-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Percents (percent change)',
        stem:'A plant was 60 centimeters tall. Over the summer it grew to 75 centimeters tall. What was the percent increase in the height of the plant?',
        choices:{A:'15%', B:'20%', C:'25%', D:'75%'},
        correct:'C',
        expCorrect:'Percent increase = (change / original value) × 100 = (75 − 60)/60 × 100 = 15/60 × 100 = 25%.',
        expWrong:{
          A:'15% confuses the absolute change (15 cm) with the percent. You have to divide by the original value.',
          B:'20% comes from dividing the change by the NEW value (15/75), but percent change is always figured on the original value.',
          D:'75% is the final height in cm, not a percent change.'
        },
        tip:'Percent change = (new − old) / OLD. The denominator is always the starting value. Divide by 75 and you have already gone wrong.'
      },
      {
        id:'DAT-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Ratios (splitting a total by a ratio)',
        stem:'In a club, the ratio of boys to girls is 3 to 5. If there are 240 members in the club, how many of the members are girls?',
        choices:{A:'90', B:'96', C:'144', D:'150'},
        correct:'D',
        expCorrect:'The ratio 3:5 has 3 + 5 = 8 parts. Each part = 240 / 8 = 30 members. The girls are 5 parts: 5 × 30 = 150.',
        expWrong:{
          A:'90 is the number of BOYS (3 parts × 30). They are asking for the girls.',
          B:'96 comes from splitting the parts wrong; with 8 equal parts each one is 30, not 32.',
          C:'144 would be 60% of 240, treating the ratio as 3:5 = 2:3; the correct ratio gives 8 parts, not 5.'
        },
        tip:'Ratio a:b over a total → add the parts (a+b), divide the total by that sum, and multiply by the part they asked for. Careful not to answer for the wrong group.'
      },
      {
        id:'DAT-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Rates and units (constant speed)',
        stem:'A train travels 150 miles in 2.5 hours at a constant speed. At this rate, how many miles will the train travel in 4 hours?',
        choices:{A:'96', B:'160', C:'240', D:'375'},
        correct:'C',
        expCorrect:'Speed = 150 / 2.5 = 60 miles per hour. In 4 hours: 60 × 4 = 240 miles.',
        expWrong:{
          A:'96 flips the ratio (it multiplies by 2.5/4 instead of by the speed).',
          B:'160 uses a miscomputed speed; 150/2.5 = 60, not 40.',
          D:'375 comes from 150 × 2.5, multiplying instead of dividing to find the rate.'
        },
        tip:'First get the unit rate (miles per HOUR = distance/time), then multiply by the new time. Divide before you multiply and you dodge the trap.'
      },
      {
        id:'DAT-05', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'One-variable statistics (mean/average)',
        stem:'A student scored 12, 15, 18, 20, and 25 points in five games. What is the mean (average) number of points the student scored per game?',
        answer:'18',
        expCorrect:'Mean = sum / count. Sum = 12 + 15 + 18 + 20 + 25 = 90. Mean = 90 / 5 = 18. Answer: 18.',
        expWrong:{},
        tip:'Mean = the sum of all the values divided by how many there are. Do not confuse it with the median (here the middle ordered value is also 18, but that is a coincidence).'
      },
      {
        id:'DAT-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'One-variable statistics (standard deviation / spread)',
        stem:'Data set X consists of the values 48, 49, 50, 51, and 52. Data set Y consists of the values 10, 30, 50, 70, and 90. Both data sets have a mean of 50. Which of the following correctly compares the standard deviations of the two data sets?',
        choices:{
          A:'The standard deviation of X is greater than the standard deviation of Y.',
          B:'The standard deviation of Y is greater than the standard deviation of X.',
          C:'The standard deviations of X and Y are equal.',
          D:'There is not enough information to compare the standard deviations.'
        },
        correct:'B',
        expCorrect:'Standard deviation measures how spread out the data are around the mean. The X values sit very close together (48 to 52), while the Y values are far apart (10 to 90). Since Y is more spread out, its standard deviation is larger.',
        expWrong:{
          A:'The other way around: X is the MORE clustered set, so it has the SMALLER standard deviation, not the larger one.',
          C:'They are not equal: having the same mean does not imply the same spread. Y is far more scattered.',
          D:'There is enough information: we know every value, so we can compare the spread directly.'
        },
        tip:'Standard deviation = how "spread out" the data are around the mean. Closer together → smaller. Further apart → larger. You do not need to compute it: compare the ranges at a glance.'
      },
      {
        id:'DAT-07', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Probability (single event)',
        stem:'A bag contains 30 marbles: 12 are red, 8 are green, and 10 are blue. If one marble is selected at random from the bag, what is the probability that it is red?',
        answer:'2/5',
        expCorrect:'Probability = favorable cases / total cases = 12 / 30 = 2/5. Valid forms for the box: 2/5 or .4 or 0.4 (also 12/30, the same value). Answer: 2/5.',
        expWrong:{},
        tip:'Simple probability = (what you want) / (the total). Here 12 red out of 30. Simplify it or write the decimal; 2/5 and .4 are worth the same in the box.'
      },
      {
        id:'DAT-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Conditional probability (a two-way table in words)',
        stem:'A survey was given to 200 people. Of the 120 adults surveyed, 90 said they prefer tea over coffee. If one of the surveyed adults is selected at random, what is the probability that this person prefers tea over coffee?',
        choices:{A:'0.375', B:'0.45', C:'0.60', D:'0.75'},
        correct:'D',
        expCorrect:'The condition already narrows the group to the adults, so the denominator is 120 (not 200). Probability = 90 / 120 = 3/4 = 0.75.',
        expWrong:{
          A:'0.375 divides 90 by 240; there are no 240 people and the relevant group is the 120 adults.',
          B:'0.45 uses 90/200, taking the whole total instead of only the adults. The words "of the adults" fix the denominator at 120.',
          C:'0.60 is the proportion of adults in the survey (120/200), not the probability being asked for.'
        },
        tip:'Conditional probability: the phrase "of the adults…" tells you the denominator is ONLY that subgroup (120), not the total. Favorable/subgroup, not favorable/total.'
      },
      {
        id:'DAT-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two-variable data (line of best fit / prediction)',
        stem:'A scatterplot shows the relationship between the number of hours studied, x, and a test score, y. The line of best fit for the data is given by y = 2.5x + 60. Based on this line, what is the predicted test score for a student who studies for 8 hours?',
        choices:{A:'68', B:'80', C:'62.5', D:'140'},
        correct:'B',
        expCorrect:'Substitute x = 8 into the line of best fit: y = 2.5(8) + 60 = 20 + 60 = 80.',
        expWrong:{
          A:'68 comes from adding 8 + 60, forgetting to multiply by the slope 2.5.',
          C:'62.5 comes from adding 2.5 + 60 (using x wrong, as if x = 1).',
          D:'140 multiplies everything wrong: 2.5 × 8 = 20, not 80. The correct computation gives 80.'
        },
        tip:'"Prediction with the line of best fit" = substitute the x value into the equation and compute y. Respect the order: multiply the slope by x BEFORE adding the intercept.'
      },
      {
        id:'DAT-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Percents (two successive percent changes)',
        stem:'The price of a product was first increased by 20%. Later, the new price was decreased by 10%. The final price is what percent of the original price?',
        choices:{A:'108%', B:'110%', C:'100%', D:'90%'},
        correct:'A',
        expCorrect:'Successive changes MULTIPLY, they do not add. Up 20% = ×1.20; down 10% = ×0.90. Total factor = 1.20 × 0.90 = 1.08. The final price is 108% of the original.',
        expWrong:{
          B:'110% adds the percentages (+20 − 10 = +10%). Successive percent changes do not add.',
          C:'100% assumes up 20% and down 10% cancel, but the 10% applies to an already higher price, so they do not return to the start.',
          D:'90% applies only the 10% drop and ignores the 20% rise.'
        },
        tip:'Successive changes = multiply the factors (1 ± p/100), never add them. Up 20% and down 10% does NOT cancel out: 1.20 × 0.90 = 1.08, a net 8% increase.'
      }
    ]
  });
})();
