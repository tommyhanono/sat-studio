/* SAT Studio question set — Math EXTREME: Data & Probability (XD-01 a XD-12) */
(function(){
  var TBL_TRANSPORT =
    '<table><thead><tr><th></th><th>Bus</th><th>Car</th><th>Walk</th><th>Total</th></tr></thead>' +
    '<tbody>' +
    '<tr><th>Junior</th><td>24</td><td>18</td><td>18</td><td>60</td></tr>' +
    '<tr><th>Senior</th><td>16</td><td>&nbsp;</td><td>14</td><td>60</td></tr>' +
    '<tr><th>Total</th><td>40</td><td>48</td><td>32</td><td>120</td></tr>' +
    '</tbody></table>';

  var TBL_PETS =
    '<table><thead><tr><th></th><th>Owns a cat</th><th>Does not own a cat</th><th>Total</th></tr></thead>' +
    '<tbody>' +
    '<tr><th>Owns a dog</th><td>&nbsp;</td><td>&nbsp;</td><td>90</td></tr>' +
    '<tr><th>Does not own a dog</th><td>&nbsp;</td><td>60</td><td>&nbsp;</td></tr>' +
    '<tr><th>Total</th><td>80</td><td>&nbsp;</td><td>200</td></tr>' +
    '</tbody></table>';

  var TBL_MACHINES =
    '<table><thead><tr><th>Machine</th><th>Defective</th><th>Not defective</th><th>Total</th></tr></thead>' +
    '<tbody>' +
    '<tr><th>A</th><td>15</td><td>485</td><td>500</td></tr>' +
    '<tr><th>B</th><td>12</td><td>288</td><td>300</td></tr>' +
    '<tr><th>C</th><td>&nbsp;</td><td>187</td><td>200</td></tr>' +
    '<tr><th>Total</th><td>40</td><td>960</td><td>1,000</td></tr>' +
    '</tbody></table>';

  var TBL_CUSTOMERS =
    '<table><thead><tr><th></th><th>Satisfied</th><th>Not satisfied</th><th>Total</th></tr></thead>' +
    '<tbody>' +
    '<tr><th>Under 40 years old</th><td>45</td><td>25</td><td>70</td></tr>' +
    '<tr><th>40 years old or older</th><td>&nbsp;</td><td>20</td><td>80</td></tr>' +
    '<tr><th>Total</th><td>&nbsp;</td><td>45</td><td>150</td></tr>' +
    '</tbody></table>';

  window.SAT_SETS.push({
    id: 'math-x-data',
    title: 'Extreme — Data & Probability',
    section: 'math',
    level: 'Extreme',
    description: 'Hard-Module-2 level: layered conditional probability, weighted means with unknowns, and inference limits.',
    minutes: 20,
    questions: [
      {
        id:'XD-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Conditional probability in a two-way table (compound condition)',
        stem:'The incomplete table below summarizes how the 120 students in a school’s junior and senior classes travel to school. Each student uses exactly one mode of transportation.' + TBL_TRANSPORT + 'If a student is selected at random from those who travel by bus or walk, what is the probability that the student is a senior?',
        choices:{A:'1/4', B:'5/12', C:'1/2', D:'3/5'},
        correct:'B',
        expCorrect:'First fill in the table: Senior Car = 60 − 16 − 14 = 30 (or 48 − 18 = 30 from the column). The condition “bus or walk” narrows the universe to 40 + 32 = 72 students. Of those, the seniors are 16 + 14 = 30. Probability = 30/72 = 5/12.',
        expWrong:{
          A:'1/4 = 30/120 uses the GRAND TOTAL as the denominator. The phrase “selected from those who travel by bus or walk” changes the denominator to 72, not 120.',
          C:'1/2 = 30/60 divides by the total number of seniors. That answers a different question (P(bus or walk | senior)), not the one asked.',
          D:'3/5 = 72/120 is the probability that any student takes the bus or walks. That is not what they want.'
        },
        tip:'In conditional probability, the phrase “from those who…” defines the DENOMINATOR. Always complete the table before computing: the missing cell almost always shows up in the answer or in a distractor.',
        desmos:'Fill in the cell: 60-16-14 gives 30. Then the probability: (16+14)/(40+32) = 30/72 ≈ 0.4167, which is 5/12. Compare with the trap 30/120 = 0.25.',
        desmosLatex:['60-16-14', '(16+14)/(40+32)', '5/12']
      },
      {
        id:'XD-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Two-way table: filling in cells from the totals',
        stem:'A survey asked 200 adults whether they own a dog and whether they own a cat. The results are partially shown in the table below.' + TBL_PETS + 'If one of the surveyed adults who owns a dog is selected at random, what is the probability that the adult also owns a cat?',
        choices:{A:'3/20', B:'3/8', C:'1/3', D:'2/5'},
        correct:'C',
        expCorrect:'Fill the table in from the totals: those who do NOT own a cat add to 200 − 80 = 120, and of those 60 own no dog, so 120 − 60 = 60 own a dog but no cat. Then dog AND cat = 90 − 60 = 30. The condition is “owns a dog” (90 adults): P = 30/90 = 1/3.',
        expWrong:{
          A:'3/20 = 30/200 uses the grand total of 200 as the denominator. Since you are conditioned on dog owners, the denominator is 90.',
          B:'3/8 = 30/80 conditions the wrong way: that would be P(dog | cat). Read carefully which group is the given one.',
          D:'2/5 = 80/200 is simply the share of cat owners in the whole sample, with no condition at all.'
        },
        tip:'When the table comes in incomplete, start with the row or column missing only ONE cell and chain from there. Here the route is: the “does not own a cat” column → the dog-without-cat cell → the dog-and-cat cell.',
        desmos:'Chain it in Desmos: 200-80 = 120 (no cat); 120-60 = 60 (dog without cat); 90-60 = 30 (dog and cat). Probability: 30/90 ≈ 0.333, that is 1/3. The trap 30/200 gives 0.15.',
        desmosLatex:['200-80', '120-60', '90-60', '30/90']
      },
      {
        id:'XD-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Conditional probability P(X | Y or Z) with a missing cell',
        stem:'A factory uses three machines, A, B, and C, to produce 1,000 parts in one day. The incomplete table below classifies the parts by machine and by whether they were found to be defective.' + TBL_MACHINES + 'If one part is selected at random from the parts produced by machine B or machine C, what is the probability that the part is defective?',
        choices:{A:'1/20', B:'1/40', C:'1/25', D:'5/8'},
        correct:'A',
        expCorrect:'The missing cell: defective from C = 40 − 15 − 12 = 13 (check: 13 + 187 = 200 ✓). The conditioned universe is B or C: 300 + 200 = 500 parts. Defective among those: 12 + 13 = 25. P = 25/500 = 1/20.',
        expWrong:{
          B:'1/40 = 25/1,000 divides by the GRAND TOTAL. The selection is only among parts from B or C, so the denominator is 500.',
          C:'1/25 = 40/1,000 is the defect rate of the WHOLE factory, ignoring the “B or C” condition.',
          D:'5/8 = 25/40 conditions the wrong way: it is P(came from B or C | defective), not P(defective | B or C).'
        },
        tip:'“From the parts produced by B or C” → add those two full rows and use them as the denominator. Before that, fill the missing cell using the column total; without it you cannot build the numerator.',
        desmos:'Missing cell: 40-15-12 = 13. Probability: (12+13)/(300+200) = 25/500 = 0.05 = 1/20. The grand-total trap, 25/1000, gives 0.025.',
        desmosLatex:['40-15-12', '(12+13)/(300+200)', '1/20']
      },
      {
        id:'XD-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Reverse conditional: conditioning on the column',
        stem:'The incomplete table below shows the results of a satisfaction survey given to 150 customers of a store.' + TBL_CUSTOMERS + 'If one of the customers who reported being satisfied is selected at random, what is the probability that the customer is under 40 years old?',
        choices:{A:'3/10', B:'9/14', C:'7/10', D:'3/7'},
        correct:'D',
        expCorrect:'Fill in the table: satisfied among 40+ = 80 − 20 = 60, so the total satisfied = 45 + 60 = 105 (check: 105 + 45 = 150 ✓). The condition is “satisfied” (105 customers) and of those 45 are under 40. P = 45/105 = 3/7.',
        expWrong:{
          A:'3/10 = 45/150 uses the grand total of 150 as the denominator. You were conditioned on the satisfied customers: the denominator is 105.',
          B:'9/14 = 45/70 conditions the wrong way: that is P(satisfied | under 40). The question flips the condition.',
          C:'7/10 = 105/150 is the share of satisfied customers in the whole sample, not the probability asked for.'
        },
        tip:'The SAT loves flipping the conditional: they give you rows by age, but condition on the COLUMN (satisfied). The correct denominator is that column’s total, which here you have to compute yourself.',
        desmos:'Satisfied among the 40+ group: 80-20 = 60. Total satisfied: 45+60 = 105. Probability: 45/105 ≈ 0.4286 = 3/7. Compare with the trap 45/150 = 0.3 and with the flipped 45/70 ≈ 0.643.',
        desmosLatex:['80-20', '45/(45+60)', '3/7']
      },
      {
        id:'XD-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Weighted mean: finding how many values are added',
        stem:'The mean of a list of 20 test scores is 82. After n additional scores of 94 each are added to the list, the mean of all the scores in the list is 86. What is the value of n?',
        choices:{A:'4', B:'5', C:'10', D:'20'},
        correct:'C',
        expCorrect:'Work with SUMS, not with loose averages. Original sum: 20 × 82 = 1640. Equation: (1640 + 94n)/(20 + n) = 86 → 1640 + 94n = 1720 + 86n → 8n = 80 → n = 10. Check: (1640 + 940)/30 = 2580/30 = 86 ✓.',
        expWrong:{
          A:'4 is just the difference 86 − 82. The difference of means is not n; you have to set up the equation with the sums.',
          B:'5 comes from dividing the leftovers wrong (for instance 80 by 16). The correct coefficient of n is 94 − 86 = 8, and the right-hand side is 86 − 82 times 20, that is 80.',
          D:'20 assumes as many scores were added as there already were. With 20 and 20, the mean would be the midpoint (82 + 94)/2 = 88, not 86.'
        },
        tip:'Bullet method: each 94 sits 8 points ABOVE the final mean (94 − 86) and each old score sat 4 below (86 − 82). Balance: 8n = 4(20) → n = 10. Deviations from the final mean always sum to zero.',
        desmos:'Solve it graphically: (20*82+94n)/(20+n)=86. Type y=(1640+94x)/(20+x) together with y=86 and they cross at x = 10. Check: (1640+94*10)/30 = 86.',
        desmosLatex:['y=(20*82+94x)/(20+x)', 'y=86', '(20*82+94*10)/(20+10)']
      },
      {
        id:'XD-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Weighted mean of two groups: finding the proportion',
        stem:'In a class, the mean quiz score of the boys is 74, and the mean quiz score of the girls is 89. The mean quiz score of the entire class is 83. What fraction of the students in the class are girls?',
        choices:{A:'2/5', B:'3/5', C:'1/2', D:'2/3'},
        correct:'B',
        expCorrect:'Let b be the number of boys and g the girls: 74b + 89g = 83(b + g) → 6g = 9b → g/b = 3/2. So the girls are 3 parts out of every 5: g/(b + g) = 3/5. Check with 2 boys and 3 girls: (74·2 + 89·3)/5 = (148 + 267)/5 = 415/5 = 83 ✓.',
        expWrong:{
          A:'2/5 inverts the proportion: that is the fraction of BOYS. The mean 83 sits closer to 89, so the girls’ group weighs more, not less.',
          C:'1/2 would only work if the combined mean were the midpoint (74 + 89)/2 = 81.5. Since it is 83, the groups are not equal.',
          D:'2/3 confuses the ratio g:b = 3:2 with the fraction of the total. The fraction of girls is 3/(3+2) = 3/5, not 2/3.'
        },
        tip:'Balance rule (alligation): the quantities are INVERSELY proportional to the distances from the combined mean. Boys are 83 − 74 = 9 away; girls are 89 − 83 = 6 away → b:g = 6:9 = 2:3. Sanity check: the combined mean lands closer to the larger group.',
        desmos:'If x is the fraction of girls, graph y=74(1-x)+89x together with y=83: they cross at x = 0.6 = 3/5. Check: 74*0.4+89*0.6 = 83.',
        desmosLatex:['y=74(1-x)+89x', 'y=83', '74*0.4+89*0.6']
      },
      {
        id:'XD-07', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Mean: removing a value from the list',
        stem:'The mean of a list of 15 numbers is 62. When one number is removed from the list, the mean of the remaining 14 numbers is 59. What is the value of the number that was removed?',
        answer:'104',
        expCorrect:'Original total sum: 15 × 62 = 930. Sum after removing the value: 14 × 59 = 826. The number removed is the difference of the sums: 930 − 826 = 104. It makes sense: removing a value well ABOVE the mean pulls the mean down.',
        expWrong:{},
        tip:'With means, convert everything to SUMS: sum = mean × count. Removed value = (old sum) − (new sum). Sanity check: if the mean dropped, the removed value was larger than the original mean.',
        desmos:'Type 15*62-14*59 in Desmos and it gives 104 straight away. To check, solve graphically (930-x)/14 = 59: graph y=(930-x)/14 and y=59; they cross at x = 104.',
        desmosLatex:['15*62-14*59', 'y=(930-x)/14', 'y=59']
      },
      {
        id:'XD-08', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Weighted mean: finding the unknown added value',
        stem:'A student’s first 8 quiz scores have a mean of 76. The student then takes 2 more quizzes and earns the same score, x, on each. If the mean of all 10 quiz scores is 79, what is the value of x?',
        answer:'91',
        expCorrect:'Sum of the first 8: 8 × 76 = 608. Equation with the total sum: (608 + 2x)/10 = 79 → 608 + 2x = 790 → 2x = 182 → x = 91. Check: (608 + 182)/10 = 790/10 = 79 ✓.',
        expWrong:{},
        tip:'The final mean “demands” a total of 10 × 79 = 790 points. The first 8 contribute 608, so the 2 new ones must contribute 790 − 608 = 182 between them → 91 each. Always think in terms of the TOTAL the target mean requires.',
        desmos:'Solve graphically (8*76+2x)/10 = 79: graph y=(608+2x)/10 together with y=79 and they cross at x = 91. Or straight to it: (10*79-8*76)/2 = 91.',
        desmosLatex:['y=(8*76+2x)/10', 'y=79', '(10*79-8*76)/2']
      },
      {
        id:'XD-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Margin of error: a justified conclusion',
        stem:'A researcher selected a random sample of 400 students from Riverside High School and asked whether they support a later school start time. Of the students sampled, 62% said they support it, with an associated margin of error of 4.8%. Which of the following conclusions is best supported by these results?',
        choices:{
          A:'It is guaranteed that more than 57% of the students at Riverside High School support a later start time.',
          B:'The percentage of all high school students in the city who support a later start time is between 57.2% and 66.8%.',
          C:'Exactly 62% of all students in the school district support a later start time.',
          D:'It is plausible that the percentage of students at Riverside High School who support a later start time is between 57.2% and 66.8%.'
        },
        correct:'D',
        expCorrect:'The margin of error gives a PLAUSIBLE interval for the population sampled: 62% ± 4.8% → between 57.2% and 66.8%, and only for the students of Riverside High School (that is where the random sample came from). “Plausible” is the right word: it is not a guarantee or a certainty.',
        expWrong:{
          A:'“Guaranteed” kills the option: a margin of error NEVER guarantees anything; it describes uncertainty, not certainty. The real value could fall outside the interval.',
          B:'It stretches the conclusion to “all high school students in the city”, but the sample came ONLY from Riverside. You cannot generalize beyond the sampled population.',
          C:'“Exactly 62%” confuses the sample statistic with the population parameter, and on top of that changes the population to the whole district. A double error.'
        },
        tip:'Checklist: (1) does the conclusion stay WITHIN the sampled population? (2) does it use the language of plausibility (“plausible”, “likely”) and not of certainty (“exactly”, “guaranteed”, “will”)? If either fails, rule it out.',
        desmos:'Compute the interval in Desmos: 62-4.8 = 57.2 and 62+4.8 = 66.8. The plausible range is [57.2, 66.8], and it applies only to Riverside High School.',
        desmosLatex:['62-4.8', '62+4.8']
      },
      {
        id:'XD-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Margin of error: an interval for the mean, not for individuals',
        stem:'A quality engineer selected a random sample of 100 batteries from a shipment of 10,000 batteries and measured how long each battery lasted. The sample mean was 14.2 hours, with an associated margin of error of 0.6 hours. Which of the following is the most appropriate conclusion?',
        choices:{
          A:'Every battery in the shipment lasts between 13.6 and 14.8 hours.',
          B:'It is plausible that the mean life of all the batteries in the shipment is between 13.6 and 14.8 hours.',
          C:'It is plausible that the mean life of all batteries produced by the manufacturer is between 13.6 and 14.8 hours.',
          D:'The mean life of the batteries in the shipment is exactly 14.2 hours.'
        },
        correct:'B',
        expCorrect:'The interval 14.2 ± 0.6 → [13.6, 14.8] is a PLAUSIBLE range for the MEAN of the sampled population: the 10,000 batteries in the shipment. It is about the mean, not individual batteries, and only about the shipment the sample came from.',
        expWrong:{
          A:'A margin of error describes uncertainty about the MEAN, not a range every individual battery has to fall in. A single battery could last 12 or 16 hours without contradicting anything.',
          C:'It stretches the conclusion to “all batteries produced by the manufacturer”, but the sample came only from THIS shipment of 10,000. Outside the sampling frame you cannot claim anything.',
          D:'“Exactly 14.2” is the SAMPLE value. The margin of error exists precisely because the population mean almost never lands exactly on the sample mean.'
        },
        tip:'Three classic MOE traps: (1) applying it to individuals instead of to the mean, (2) stepping outside the sampled population, (3) treating the sample statistic as an exact value. The right one always combines “plausible” + “mean” + the correct population.',
        desmos:'Interval in Desmos: 14.2-0.6 = 13.6 and 14.2+0.6 = 14.8. That range is for the mean of the shipment, not for each individual battery.',
        desmosLatex:['14.2-0.6', '14.2+0.6']
      },
      {
        id:'XD-11', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Chain of percentages: reversing successive changes',
        stem:'The price of a jacket was first increased by 20%. The new price was then decreased by 25%, resulting in a final price of $270. What was the original price of the jacket?',
        choices:{A:'$300', B:'$283.50', C:'$337.50', D:'$225'},
        correct:'A',
        expCorrect:'Chain the multipliers: +20% → ×1.20; then −25% → ×0.75. Net effect: 1.20 × 0.75 = 0.90. If p is the original price, 0.90p = 270 → p = 270/0.90 = 300. Check forward: 300 × 1.2 = 360; 360 × 0.75 = 270 ✓.',
        expWrong:{
          B:'$283.50 comes from adding 5% to 270 (270 × 1.05), as if the net change were −5% and could be undone by adding 5%. Successive percentages do NOT add, and a −5% is not undone by adding 5%: it is undone by DIVIDING by the net multiplier 0.90.',
          C:'$337.50 = 270/0.80 undoes a 20% discount nobody applied (the discount was 25% and there was an increase before it). You have to reverse the WHOLE chain.',
          D:'$225 = 270/1.2 only undoes the 20% increase and ignores the 25% discount. You reversed half the story.'
        },
        tip:'Turn each percent change into a multiplier and MULTIPLY them: +20% → 1.2, −25% → 0.75. To work backwards, divide the final value by the product of the multipliers. Never add or subtract successive percentages.',
        desmos:'Net multiplier: 1.2*0.75 = 0.9. Original price: 270/0.9 = 300. Or solve graphically: y=1.2*0.75x and y=270 cross at x = 300.',
        desmosLatex:['1.2*0.75', '270/(1.2*0.75)', 'y=1.2*0.75x', 'y=270']
      },
      {
        id:'XD-12', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Chain of three percentages: finding the original value',
        stem:'The population of a town increased by 25% during its first decade, decreased by 20% during its second decade, and then increased by 10% during its third decade. If the population at the end of the third decade was 3,300, what was the population at the beginning of the first decade?',
        answer:'3000',
        expCorrect:'Multipliers: +25% → 1.25; −20% → 0.80; +10% → 1.10. Product: 1.25 × 0.80 × 1.10 = 1.10. If p is the initial population: 1.10p = 3300 → p = 3300/1.10 = 3000. Check forward: 3000 → 3750 → 3000 → 3300 ✓. Notice that +25% and −20% cancel exactly (1.25 × 0.8 = 1).',
        expWrong:{},
        tip:'Golden fact: +25% followed by −20% cancels out (1.25 × 0.8 = 1). If you spot the cancellation, the problem reduces to undoing the +10% alone: 3300/1.1 = 3000. And careful: adding 25 − 20 + 10 = 15% gives a wrong result.',
        desmos:'Product of the multipliers: 1.25*0.8*1.1 = 1.1. Initial population: 3300/1.1 = 3000. Check the whole chain: 3000*1.25*0.8*1.1 = 3300.',
        desmosLatex:['1.25*0.8*1.1', '3300/(1.25*0.8*1.1)', '3000*1.25*0.8*1.1']
      }
    ]
  });
})();
