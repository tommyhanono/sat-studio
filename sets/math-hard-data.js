/* SAT Studio question set — Math: Percents, Data & Systems — Hard (HMD-01 a HMD-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-hard-data',
    title: 'Percents, Data & Systems — Hard',
    section: 'math',
    level: 'Difícil',
    description: 'Hard percentages (successive & reverse percent), probability (conditional & two-way tables), statistics (mean/median/spread), and systems of equations.',
    minutes: 20,
    questions: [
      {
        id:'HMD-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Porcentajes (porcentaje inverso / hallar el original)',
        stem:'After a 25% discount, the sale price of a bicycle is $90. What was the original price of the bicycle, before the discount?',
        choices:{A:'$67.50', B:'$120.00', C:'$112.50', D:'$115.00'},
        correct:'B',
        expCorrect:'Cutting 25% means multiplying by 0.75. If the original price is P, then P × 0.75 = 90, so P = 90 / 0.75 = 120. (Check: 120 × 0.75 = 90 ✓.)',
        expWrong:{
          A:'$67.50 = 90 × 0.75, that is, you applied the discount AGAIN. The 90 is already the discounted price; you have to undo the discount, not repeat it.',
          C:'$112.50 = 90 × 1.25. You added 25% to the already-discounted price, but the original 25% was figured on the ORIGINAL price, not on the sale price. Wrong base.',
          D:'$115.00 = 90 + 25, adding the 25 as if it were dollars. The 25 is a percentage, not a fixed amount.'
        },
        tip:'Reverse percent: if you are given the value AFTER the change, DIVIDE by the factor. Down 25% → divide by 0.75. Multiplying by 1.25 does not undo a 25% discount.'
      },
      {
        id:'HMD-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Porcentajes (dos cambios porcentuales sucesivos)',
        stem:'The number of subscribers to a channel increased by 30% during one year and then decreased by 20% the following year. Over these two years, the number of subscribers changed by what percent, compared with the original number?',
        choices:{
          A:'It increased by 4%.',
          B:'It increased by 10%.',
          C:'It stayed the same.',
          D:'It decreased by 4%.'
        },
        correct:'A',
        expCorrect:'Successive changes MULTIPLY. Up 30% = ×1.30; down 20% = ×0.80. Total factor = 1.30 × 0.80 = 1.04, that is, a net 4% increase.',
        expWrong:{
          B:'10% adds the percentages (+30 − 20 = +10). Successive percent changes never add.',
          C:'It does not cancel: the 20% drop applies to an already larger base (after the +30%), so you do not return to the start. You end up +4% net.',
          D:'The magnitude 4% is right, but the sign is not: 1.04 is GREATER than 1, so the net effect is an increase, not a decrease.'
        },
        tip:'Successive changes = multiply the factors (1 ± p/100), never add them. 1.30 × 0.80 = 1.04 → +4%, not +10% and not "it cancels out".'
      },
      {
        id:'HMD-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Probabilidad condicional (tabla de doble entrada)',
        stem:'A group of 200 people were asked whether they prefer shopping online or in-store. The results are shown in the two-way table below, organized by age group.<br><br>Under 40 — Online: 84, In-store: 36, Total: 120<br>40 or older — Online: 28, In-store: 52, Total: 80<br>Total — Online: 112, In-store: 88, Total: 200<br><br>If one of the 200 people is selected at random and that person prefers shopping online, what is the probability that the person is under 40 years old?',
        choices:{A:'0.42', B:'0.56', C:'0.75', D:'0.70'},
        correct:'C',
        expCorrect:'The condition "prefers online" fixes the denominator at the online column: 112 people. Of those, 84 are under 40. Probability = 84 / 112 = 0.75.',
        expWrong:{
          A:'0.42 = 84 / 200. That is the JOINT probability (online AND under 40 over the total). The condition already narrows the universe to the 112 online.',
          B:'0.56 = 112 / 200, which is only the marginal share of people preferring online, not what is being asked.',
          D:'0.70 = 84 / 120. There you flipped the condition: that is P(online | under 40), but they want P(under 40 | online), that is 84/112.'
        },
        tip:'Conditional probability in tables: the phrase "given that they prefer online" tells you the denominator is ONLY that column (112), not the total. Favorable over the subgroup, not over the total.'
      },
      {
        id:'HMD-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'One-variable statistics (weighted average)',
        stem:'In a class of 30 students, the 18 students who studied Spanish averaged 80 points on an exam, and the 12 students who studied French averaged 90 points on the same exam. What was the average score of all 30 students on the exam?',
        choices:{A:'85', B:'86', C:'88', D:'84'},
        correct:'D',
        expCorrect:'Weighted average = (total sum of points) / (total students). Sum = 18 × 80 + 12 × 90 = 1440 + 1080 = 2520. Average = 2520 / 30 = 84. Since there are more students in the 80 group, the average lands closer to 80 than to 90.',
        expWrong:{
          A:'85 = (80 + 90) / 2, the SIMPLE average. That only holds if both groups had the same number of students, but it is 18 vs 12.',
          B:'86 = (18 × 90 + 12 × 80) / 30. You swapped the weights: the group of 18 scored 80, not 90.',
          C:'88 tips the average too far toward the 90. Since the big group (18) scored 80, the real average lands BELOW 85, not above.'
        },
        tip:'Weighted average: multiply each average by its count, add, and divide by the total count. The result gets pulled toward the larger group (here, toward the 80).'
      },
      {
        id:'HMD-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'One-variable statistics (effect of an outlier on mean and median)',
        stem:'The data set below lists the number of overtime hours worked by 7 employees last month.<br><br>3, 5, 6, 8, 9, 10, 12<br><br>It is later found that the employee recorded as 12 hours actually worked 40 hours, so the value 12 should be replaced by 40. Compared with the original data set, how do the mean and the median of the corrected data set change?',
        choices:{
          A:'The mean increases, but the median stays the same.',
          B:'Both the mean and the median increase.',
          C:'The mean stays the same, but the median increases.',
          D:'The mean increases, and the median decreases.'
        },
        correct:'A',
        expCorrect:'The median is the middle value of the 7 ordered data points: the 4th value, which is 8, both before (3,5,6,8,9,10,12) and after (3,5,6,8,9,10,40). It does not change. The mean does rise because the sum goes from 53 to 81 (53 − 12 + 40), so the mean climbs from ≈7.6 to ≈11.6.',
        expWrong:{
          B:'The median does NOT rise: changing the LARGEST value (12→40) does not move the middle data point, which is still 8. Only the mean reacts to extreme values.',
          C:'The mean does not stay the same: you raised a value from 12 to 40, so the sum grows and so does the mean. It is the MEDIAN that stays put, not the mean.',
          D:'The median does not fall: it is still 8. Raising the largest value never lowers the median.'
        },
        tip:'The mean reacts to outliers; the median barely does. Changing the highest (or lowest) value moves the mean but leaves the middle value alone.'
      },
      {
        id:'HMD-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'One-variable statistics (standard deviation / spread)',
        stem:'Two data sets each contain five values and each has a mean of 50.<br><br>Data set R: 46, 48, 50, 52, 54<br>Data set S: 30, 40, 50, 60, 70<br><br>Which of the following correctly compares the standard deviations of the two data sets?',
        choices:{
          A:'The standard deviation of R is greater than the standard deviation of S.',
          B:'The standard deviation of S is greater than the standard deviation of R.',
          C:'The standard deviations of R and S are equal.',
          D:'There is not enough information to compare the standard deviations.'
        },
        correct:'B',
        expCorrect:'Standard deviation measures how spread out the data are around the mean (50 in both here). R runs from 46 to 54 (tightly clustered); S runs from 30 to 70 (widely scattered). Since S is far more spread out, its standard deviation is larger.',
        expWrong:{
          A:'The other way around: R is the MORE clustered set, so it has the SMALLER standard deviation, not the larger one.',
          C:'They are not equal: sharing a mean does not mean sharing a spread. S is far more scattered than R.',
          D:'There is enough information: you know every value, so you can compare the spread at a glance.'
        },
        tip:'Standard deviation = how "spread out" the data are around the mean. Tighter data → smaller; more scattered → larger. Compare the ranges without computing anything.'
      },
      {
        id:'HMD-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Probabilidad condicional (tabla de doble entrada)',
        stem:'A total of 300 people who watched a movie were asked whether they liked it, categorized by whether they had read the book first. The two-way table below shows the results.<br><br>Read the book — Liked: 120, Did not like: 30, Total: 150<br>Did not read the book — Liked: 60, Did not like: 90, Total: 150<br>Total — Liked: 180, Did not like: 120, Total: 300<br><br>If one of these 300 people who did NOT read the book is selected at random, what is the probability that the person liked the movie?',
        choices:{A:'0.20', B:'0.33', C:'0.40', D:'0.60'},
        correct:'C',
        expCorrect:'The condition "did not read the book" fixes the denominator at that row: 150 people. Of them, 60 did like the film. Probability = 60 / 150 = 0.40.',
        expWrong:{
          A:'0.20 = 60 / 300, the JOINT probability over the total. The condition narrows the universe to the 150 who did not read the book.',
          B:'0.33 = 60 / 180. That flips the condition: it would be P(did not read | liked it), using the "Liked" column (180). They want the opposite.',
          D:'0.60 = 90 / 150, which is the probability of NOT liking it among those who did not read. That is the complement; they want the ones who DID like it.'
        },
        tip:'"Given that they did not read the book" → denominator = that row only (150). Watch two traps: flipping the condition (using the column) and computing the complement (the ones who did not like it).'
      },
      {
        id:'HMD-08', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas de ecuaciones lineales (infinitas soluciones)',
        stem:'The system of equations below has infinitely many solutions.<br><br>6x + 4y = 10<br>3x + 2y = c<br><br>What is the value of the constant c?',
        choices:{A:'2', B:'2.5', C:'10', D:'5'},
        correct:'D',
        expCorrect:'"Infinitely many solutions" means the two equations are the SAME line, that is, one is a multiple of the other. Divide the first by 2: 6x + 4y = 10 → 3x + 2y = 5. For it to match 3x + 2y = c, you need c = 5.',
        expWrong:{
          A:'2 is the ratio of the coefficients (6/3 = 2), but c is not the ratio: it is the constant term of the second equation once reduced.',
          B:'2.5 = 10 / 4, mixing the 10 with the wrong coefficient. You have to divide the 10 by 2 (the same factor that reduces 6x→3x), not by 4.',
          C:'10 copies the constant term from the first equation without scaling it. Since you divided the coefficients by 2, the 10 gets divided by 2 as well → 5.'
        },
        tip:'Infinitely many solutions = the same line = one equation is an exact multiple of the other. Scale EVERYTHING by the same factor (coefficients AND the constant term). "No solution" would be the same left-hand side but a different constant.'
      },
      {
        id:'HMD-09', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas de ecuaciones lineales (problema en palabras)',
        stem:'At a concession stand, 3 hot dogs and 2 drinks cost $16, and 2 hot dogs and 4 drinks cost $16. What is the price, in dollars, of one hot dog?',
        choices:{A:'$4', B:'$2', C:'$3', D:'$5'},
        correct:'A',
        expCorrect:'Let h be the price of a hot dog and d the price of a drink: 3h + 2d = 16 and 2h + 4d = 16. Multiply the first by 2: 6h + 4d = 32. Subtract the second: (6h + 4d) − (2h + 4d) = 32 − 16 → 4h = 16 → h = 4. (Check: d = 2, and 3(4)+2(2)=16 ✓, 2(4)+4(2)=16 ✓.)',
        expWrong:{
          B:'$2 is the price of the DRINK (d = 2), not the hot dog. The question asks for h.',
          C:'$3 comes from a slip while eliminating; subtracting the equations leaves 4h = 16, that is h = 4, not 3.',
          D:'$5 does not work: 3(5) + 2d = 16 would give 2d = 1, which does not fit the second equation. Solve the whole system.'
        },
        tip:'Build two equations from the two conditions. Match the coefficients of one variable (here the drinks: multiply the first by 2) and subtract to eliminate it. Then check whether they want the hot dog or the drink.'
      },
      {
        id:'HMD-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Porcentajes (aumento y descuento sucesivos)',
        stem:'A store first increases the price of an item by 40%. It then offers a coupon that takes 25% off the increased price. The final price is what percent of the original price?',
        choices:{A:'115%', B:'105%', C:'100%', D:'75%'},
        correct:'B',
        expCorrect:'Multiply the factors: up 40% = ×1.40; down 25% = ×0.75. Total factor = 1.40 × 0.75 = 1.05. The final price is 105% of the original.',
        expWrong:{
          A:'115% adds the percentages (+40 − 25 = +15). Successive changes do not add, they multiply.',
          C:'100% assumes the increase and the discount cancel out, but the 25% applies to an already higher base (after the +40%), so you do not return to the original price.',
          D:'75% applies only the discount (×0.75) and ignores the 40% increase entirely.'
        },
        tip:'An increase and a discount back to back = multiply 1.40 × 0.75 = 1.05. Up 40% and down 25% does NOT cancel or subtract; you end up 5% above the original.'
      },
      {
        id:'HMD-11', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Porcentajes (porcentaje inverso / hallar el original)',
        stem:'After a 15% increase, a gym now has 460 members. How many members did the gym have before the increase?',
        answer:'400',
        expCorrect:'Raising by 15% means multiplying by 1.15. If M is the original amount, M × 1.15 = 460, so M = 460 / 1.15 = 400. (Check: 400 × 1.15 = 460 ✓.) Answer: 400.',
        expWrong:{},
        tip:'Reverse percent: when you are given the value AFTER the change, DIVIDE by the factor. Up 15% → divide by 1.15, do not multiply. Subtracting 15% from 460 gives the wrong value because the 15% was figured on the original.'
      },
      {
        id:'HMD-12', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas de ecuaciones lineales (problema en palabras)',
        stem:'A vendor sells small candles for $6 each and large candles for $10 each. One day the vendor sold 40 candles for a total of $312. How many large candles were sold that day?',
        answer:'18',
        expCorrect:'Let s be the number of small candles and g the large ones: s + g = 40 and 6s + 10g = 312. From the first, s = 40 − g. Substitute: 6(40 − g) + 10g = 312 → 240 − 6g + 10g = 312 → 240 + 4g = 312 → 4g = 72 → g = 18. (Check: small = 22, and 22 × 6 + 18 × 10 = 132 + 180 = 312 ✓.) Answer: 18.',
        expWrong:{},
        tip:'Build two equations: one for the total count (s + g = 40) and one for the total money (6s + 10g = 312). Substitute and solve. Read carefully: they want the LARGE ones (g), not the small ones.'
      }
    ]
  });
})();
