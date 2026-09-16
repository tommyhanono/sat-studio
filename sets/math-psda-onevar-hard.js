/* SAT Studio question set — Math: Problem-Solving & Data Analysis
   One-variable data — Hard & Brutal (OVH-01 to OVH-22)

   Todas caen en la destreza oficial "One-variable data" (pd-1var). El matcher
   corre contra `skill` + los primeros 160 caracteres de `stem`, y pd-1var se
   prueba QUINTA (después de pd-claims, pd-prob, pd-margin y pd-2var), así que
   ni el skill ni el arranque del enunciado nombran muestras, margen de error,
   nubes de puntos, probabilidad ni diseño de estudio. */
(function(){
  window.SAT_SETS.push({
    id: 'math-psda-onevar-hard',
    title: 'One-Variable Data — Hard & Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Center and spread the hard way: means run backwards to a missing value or a missing count, weighted means solved for the group you were not given, medians dug out of big frequency tables, what a shift or a stretch does to the mean and to the standard deviation, and outliers that move one measure of center but not the other. Nine of the twenty-two sit in the brutal tier, where a parameter replaces a number and the step that feels like the answer is not.',
    minutes: 30,
    questions: [

      /* ==================== Difícil (OVH-01 a OVH-13) ==================== */

      {
        id:'OVH-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Mean: recovering a missing value from the average',
        stem:'A small bakery wrote down how many sourdough loaves it sold on each of 7 days. Six of the counts were 48, 52, 61, 45, 58, and 48, and the mean of all 7 counts was 54 loaves. How many loaves were sold on the seventh day?',
        choices:{A:'54', B:'52', C:'12', D:'66'},
        correct:'D',
        expCorrect:'The mean times the count gives the total: 7 × 54 = 378 loaves across the whole week. The six known days add to 48 + 52 + 61 + 45 + 58 + 48 = 312, so the seventh day is 378 − 312 = 66. (Check: 312 + 66 = 378, and 378 / 7 = 54 ✓.)',
        expWrong:{
          A:'54 is the mean itself. A missing value equals the mean only when the other values already average out to it; these six average 52, so the seventh day has to pull the week up.',
          B:'52 = 312 / 6, the mean of the six days you already had. That is a useful check, not the count being asked for.',
          C:'12 = 6 × 54 − 312. The total has to be built from all seven days (7 × 54 = 378), not from the six you can see.'
        },
        tip:'Every missing-value mean question is one equation: (sum of the known values) + x = (mean) × (how many values in all). Multiply by the FULL count, the missing one included.',
        desmos:'Graph y = (312 + x)/7 and y = 54; the x-coordinate where they meet is the missing count.',
        desmosLatex:['y=\\frac{312+x}{7}','y=54']
      },

      {
        id:'OVH-02', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Mean: how many values are in the set',
        stem:'A hydrologist logged the depth, in centimeters, of water in a rain gauge. The mean of her list of depths is 12. When one more depth of 40 is added to the list, the mean of the longer list becomes 16. How many depths were in the original list?',
        answer:'6',
        expCorrect:'Let n be how many depths the list started with. Its total is 12n. After the new reading the total is 12n + 40 spread over n + 1 values, and that mean is 16, so 12n + 40 = 16(n + 1) = 16n + 16. Then 24 = 4n and n = 6. (Check: 6 depths with mean 12 total 72; 72 + 40 = 112, and 112 / 7 = 16 ✓.)',
        tip:'Turn every mean into a TOTAL before anything else: total = mean × count. Then one equation in n finishes it — and remember the new count is n + 1, not n.',
        desmos:'Graph y = (12x + 40)/(x + 1) and y = 16; the x-coordinate where they cross is the original count.',
        desmosLatex:['y=\\frac{12x+40}{x+1}','y=16']
      },

      {
        id:'OVH-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Weighted mean run backwards: the mean of the second group',
        stem:'A trail club recorded the finishing time of each of 40 runners. The 24 runners in the morning wave had a mean time of 52 minutes, and the mean time of all 40 runners was 58 minutes. What was the mean finishing time, in minutes, of the 16 runners in the afternoon wave?',
        choices:{A:'55', B:'64', C:'67', D:'70'},
        correct:'C',
        expCorrect:'Work in totals. All 40 runners: 40 × 58 = 2320 minutes. The morning wave: 24 × 52 = 1248 minutes. The afternoon wave therefore holds 2320 − 1248 = 1072 minutes across 16 runners, so its mean is 1072 / 16 = 67. (Check: 1248 + 1072 = 2320, and 2320 / 40 = 58 ✓.)',
        expWrong:{
          A:'55 = (52 + 58) / 2, the plain average of the two numbers printed in the problem. Those sit on groups of different sizes, and one of them is already the overall mean, so averaging them gives nothing.',
          B:'64 = 58 + 6, adding the 6-minute gap once. The gap has to be scaled by the size ratio 24/16 = 1.5, which gives 58 + 9 = 67.',
          D:'70 = 58 + 12, doubling the gap instead of multiplying it by 24/16 = 1.5.'
        },
        tip:'Weighted means: turn each group into a TOTAL (mean × count), subtract to get the missing total, then divide by that group count alone. The overall mean always lands between the two group means, nearer the bigger group.',
        desmos:'In Desmos evaluate (40·58 − 24·52)/16 and confirm you get 67.',
        desmosLatex:['\\frac{40\\cdot58-24\\cdot52}{16}']
      },

      {
        id:'OVH-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Median from a frequency table with an even number of values',
        stem:'A bike-share station logged how many times each of 50 bicycles was checked out last Saturday. The record, written as (checkouts — bicycles), was: 0 — 8; 1 — 17; 2 — 9; 3 — 6; 4 — 6; 5 — 4. What is the median number of checkouts?',
        choices:{A:'1', B:'1.5', C:'2', D:'2.5'},
        correct:'B',
        expCorrect:'With 50 values the median is the average of the 25th and the 26th in order. Running totals: 8 bicycles at 0 checkouts fill positions 1–8, the 17 bicycles at 1 checkout fill positions 9–25, and the 9 bicycles at 2 checkouts fill positions 26–34. So the 25th value is 1 and the 26th is 2, and the median is (1 + 2)/2 = 1.5.',
        expWrong:{
          A:'1 is the value that occurs most often (17 bicycles), which makes it the mode. It is also only the 25th value; an even total needs the 26th averaged in.',
          C:'2 is only the 26th value. The other middle position, the 25th, sits at 1 checkout, so the median falls between the two.',
          D:'2.5 averages the two middle ROWS of the record (2 and 3) as if each checkout number happened once. The rows are labels; the 50 bicycles are the data.'
        },
        tip:'In a frequency table, build a running total and hunt for POSITIONS, not rows. Even total n → average the values sitting in positions n/2 and n/2 + 1.',
        desmos:'Add the frequencies in Desmos to confirm the total is 50, then read positions 25 and 26 off the running total 8, 25, 34, 40, 46, 50.',
        desmosLatex:['8+17+9+6+6+4','\\operatorname{median}\\left(\\left[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5\\right]\\right)']
      },

      {
        id:'OVH-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Effect on the mean and the standard deviation of adding a constant',
        stem:'Each of the 30 packages in a shipment was weighed. The mean weight was 61 ounces and the standard deviation was 7 ounces. Every package is then slipped into an outer box weighing exactly 4 ounces, so every recorded weight goes up by 4 ounces. What is the sum of the new mean and the new standard deviation, in ounces?',
        choices:{A:'68', B:'72', C:'76', D:'65'},
        correct:'B',
        expCorrect:'Adding the same amount to every value slides the whole set 4 ounces to the right, so the mean travels with it: 61 + 4 = 65. The standard deviation measures how far the values sit FROM their mean, and the values and the mean moved together, so every gap is untouched and it stays 7. The sum is 65 + 7 = 72.',
        expWrong:{
          A:'68 = 61 + 7, the two ORIGINAL numbers. The mean does move: every package gained 4 ounces, so the center gains 4 as well.',
          C:'76 = 65 + 11. The mean was updated correctly but 4 was added to the standard deviation too. A common shift changes no distance from the mean, so the spread is exactly where it was.',
          D:'65 is only the new mean. The question asks for the new mean PLUS the new standard deviation.'
        },
        tip:'Add a constant c to every value: mean goes up by c, standard deviation does not move at all. Multiply every value by k: mean AND standard deviation are both multiplied by k.',
        desmos:'In Desmos compare mean and stdev of a short list with the same list plus 4: the mean climbs, the stdev holds still.',
        desmosLatex:['\\operatorname{mean}\\left(\\left[10,12,14,16\\right]\\right)','\\operatorname{mean}\\left(\\left[14,16,18,20\\right]\\right)','\\operatorname{stdev}\\left(\\left[10,12,14,16\\right]\\right)','\\operatorname{stdev}\\left(\\left[14,16,18,20\\right]\\right)']
      },

      {
        id:'OVH-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Comparing the standard deviation of two data sets that share a mean',
        stem:'Data set J is 20, 22, 24, 26, 28. Data set K is 12, 18, 24, 30, 36. Which of the following correctly compares the mean and the standard deviation of the two data sets?',
        choices:{
          A:'The means are equal, and the standard deviation of K is greater than that of J.',
          B:'The means are equal, and the standard deviation of J is greater than that of K.',
          C:'The mean of K is greater, and the two standard deviations are equal.',
          D:'The means are equal, and the two standard deviations are equal as well.'
        },
        correct:'A',
        expCorrect:'Both lists add to 120 over 5 values, so both means are 24. Now read the distances from 24: in J they are 4, 2, 0, 2, 4; in K they are 12, 6, 0, 6, 12 — exactly three times as large, one for one. K is the looser set, so K has the greater standard deviation. (K is J stretched away from 24 by a factor of 3, so its standard deviation is exactly 3 times that of J.)',
        expWrong:{
          B:'This has the comparison backwards. J never strays more than 4 from the mean, while K reaches 12 away from it, so K is the spread-out one.',
          C:'The means are not different: 12 + 18 + 24 + 30 + 36 = 120 and 20 + 22 + 24 + 26 + 28 = 120, both over 5 values. Equal totals over equal counts give equal means.',
          D:'Equal means do not force equal standard deviations. The mean says where a set sits; the standard deviation says how tightly it bunches, and K is far looser.'
        },
        tip:'Same mean does not mean same spread. Compare DISTANCES from the mean value by value: the set with the bigger distances has the bigger standard deviation, and you never have to run the formula.',
        desmos:'In Desmos enter the standard deviation of each list and see the second come out exactly three times the first.',
        desmosLatex:['\\operatorname{stdev}\\left(\\left[20,22,24,26,28\\right]\\right)','\\operatorname{stdev}\\left(\\left[12,18,24,30,36\\right]\\right)']
      },

      {
        id:'OVH-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'How one corrected outlier moves the mean but not the median',
        stem:'A gallery counted visitors on each of 9 mornings: 12, 14, 15, 17, 18, 20, 21, 23, and 31. The largest of those counts was later found to be wrong — it should have been 58, not 31. Compared with the original nine counts, what happens to the mean and to the median?',
        choices:{
          A:'The mean rises by 27 and the median stays 18.',
          B:'The mean rises by 3 and the median rises by 3.',
          C:'The mean rises by 3 and the median stays 18.',
          D:'The mean and the median both rise by 27.'
        },
        correct:'C',
        expCorrect:'The nine original counts add to 171, so the mean is 171 / 9 = 19, and the middle value in order — the 5th — is 18. Replacing 31 with 58 adds 27 to the total: 198 / 9 = 22, which is 3 more than 19. Put the new list in order and 58 is still last, so the 5th value is still 18. Mean +3, median unchanged.',
        expWrong:{
          A:'27 is the change in the TOTAL, not in the mean. It gets shared among all 9 values, so the mean climbs by 27/9 = 3.',
          B:'The median is the 5th value in order, and only the last value changed. Nothing crossed the middle position, so the median does not budge.',
          D:'Both halves miss at once: 27 is the jump in the total (the mean moves 3), and the median does not move at all.'
        },
        tip:'One extreme value drags the mean by (change in that value) ÷ n, but the median moves only if the change pushes something past the middle POSITION. Extreme values are exactly where mean and median part ways.',
        desmos:'In Desmos compute the mean of each version of the list and watch it jump from 19 to 22 while the middle value stays 18.',
        desmosLatex:['\\operatorname{mean}\\left(\\left[12,14,15,17,18,20,21,23,31\\right]\\right)','\\operatorname{mean}\\left(\\left[12,14,15,17,18,20,21,23,58\\right]\\right)']
      },

      {
        id:'OVH-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Median of two data sets combined into one',
        stem:'List P is 4, 6, 9, 11, 14 and its median is 9. List Q is 20, 24, 30, 36, 40, 44 and its median is 33. The two lists are poured together into a single list of 11 values. What is the median of the combined list?',
        choices:{A:'17', B:'21', C:'22', D:'20'},
        correct:'D',
        expCorrect:'Merge and order: 4, 6, 9, 11, 14, 20, 24, 30, 36, 40, 44. That is 11 values, an odd count, so the median is the single 6th value: 20. (Positions 1–5 come from P, positions 6–11 from Q.)',
        expWrong:{
          A:'17 = (14 + 20)/2, the midpoint of the gap between the two lists. The median is a position inside the merged order, not the seam where the pieces meet.',
          B:'21 = (9 + 33)/2, the average of the two separate medians. Medians never combine that way: the lists differ in size and their values interleave.',
          C:'22 = (20 + 24)/2. Averaging two middle values is what an EVEN count calls for; 5 + 6 = 11 is odd, so there is exactly one middle value.'
        },
        tip:'To combine two sets, merge them into one ordered list and count positions from scratch. The median of a union is almost never the average of the two medians.',
        desmos:'In Desmos take the median of the merged list and compare it with the average of 9 and 33.',
        desmosLatex:['\\operatorname{median}\\left(\\left[4,6,9,11,14,20,24,30,36,40,44\\right]\\right)','\\frac{9+33}{2}']
      },

      {
        id:'OVH-09', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Mean: the value that must be added to reach a target average',
        stem:'Over 5 shifts a bookbinder repaired 18, 23, 19, 26, and 24 volumes. She will work one more shift. How many volumes must she repair on that sixth shift so that the mean number repaired per shift over all 6 shifts is 23?',
        answer:'28',
        expCorrect:'Five shifts add to 18 + 23 + 19 + 26 + 24 = 110 volumes. Six shifts averaging 23 need a total of 6 × 23 = 138. So the last shift has to supply 138 − 110 = 28. (Check: 110 + 28 = 138, and 138 / 6 = 23 ✓.)',
        tip:'"What do I add to hit a target mean?" is always (target mean × NEW count) − (current total). The count goes up by one when the new value joins, and forgetting that is the whole trap.',
        desmos:'Graph y = (110 + x)/6 and y = 23 in Desmos; they meet at x = 28.',
        desmosLatex:['y=\\frac{110+x}{6}','y=23']
      },

      {
        id:'OVH-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Reading a dot plot: where the mean sits relative to the median',
        stem:'A dot plot shows how many siblings each of 24 students reported. Above 0 there are 7 dots, above 1 there are 9 dots, above 2 there are 4 dots, above 3 there are 2 dots, and above 6 there are 2 dots. By how much does the mean of the 24 values exceed the median, to the nearest hundredth?',
        choices:{A:'0.40', B:'1.06', C:'0.46', D:'1.46'},
        correct:'C',
        expCorrect:'The 24 values are seven 0s, nine 1s, four 2s, two 3s and two 6s. Their total is 0(7) + 1(9) + 2(4) + 3(2) + 6(2) = 0 + 9 + 8 + 6 + 12 = 35, so the mean is 35/24 = 1.4583… The median needs positions 12 and 13; the running count is 7 then 16, so positions 8 through 16 all sit at 1 and the median is 1. The gap is 1.4583… − 1 = 0.4583…, or 0.46 rounded.',
        expWrong:{
          A:'0.40 treats the five labels 0, 1, 2, 3, 6 as the data set (mean 2.4, median 2). Those are the columns; the data are the 24 dots stacked above them.',
          B:'1.06 comes from dividing the total 35 by 17, the students who reported at least one sibling. The seven students with 0 siblings are still values and still belong in the denominator.',
          D:'1.46 is the mean by itself. The question asks how far the mean sits ABOVE the median, so the 1 has to come off.'
        },
        tip:'A long right tail — here the two students at 6 — hauls the mean above the median while the median barely notices. Read a median off a dot plot by counting POSITIONS, never by eyeballing the tallest stack.',
        desmos:'In Desmos take the mean and the median of the full 24-value list and subtract.',
        desmosLatex:['\\operatorname{mean}\\left(\\left[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,6,6\\right]\\right)','\\operatorname{median}\\left(\\left[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,6,6\\right]\\right)']
      },

      {
        id:'OVH-11', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Mean from a histogram given as a frequency table',
        stem:'A histogram records how many moths a light trap caught on each of 40 nights. The bars are: 0 moths on 6 nights, 1 moth on 10 nights, 2 moths on 11 nights, 3 moths on 7 nights, 4 moths on 4 nights, and 5 moths on 2 nights. What is the mean number of moths caught per night?',
        answer:'1.975',
        expCorrect:'Multiply each catch by how many nights showed it and add: 0(6) + 1(10) + 2(11) + 3(7) + 4(4) + 5(2) = 0 + 10 + 22 + 21 + 16 + 10 = 79 moths in all. The nights add to 6 + 10 + 11 + 7 + 4 + 2 = 40. Mean = 79 / 40 = 1.975.',
        tip:'A histogram is a frequency table drawn with bars. Mean = (sum of value × frequency) ÷ (sum of the frequencies). Dividing by the number of BARS instead of the number of nights is the classic slip.',
        desmos:'In Desmos evaluate (0·6 + 1·10 + 2·11 + 3·7 + 4·4 + 5·2) divided by (6 + 10 + 11 + 7 + 4 + 2).',
        desmosLatex:['\\frac{0\\cdot6+1\\cdot10+2\\cdot11+3\\cdot7+4\\cdot4+5\\cdot2}{6+10+11+7+4+2}']
      },

      {
        id:'OVH-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Effect on the mean, the median and the standard deviation of scaling every value',
        stem:'A caterer recorded 18 serving weights, in grams: the mean was 46, the median was 44, and the standard deviation was 9. For a larger event every serving is tripled, so each recorded weight is multiplied by 3. What are the new mean, median, and standard deviation?',
        choices:{
          A:'Mean 138, median 132, standard deviation 9',
          B:'Mean 138, median 44, standard deviation 27',
          C:'Mean 49, median 47, standard deviation 12',
          D:'Mean 138, median 132, standard deviation 27'
        },
        correct:'D',
        expCorrect:'Multiplying every value by 3 stretches the whole set away from 0 by a factor of 3, and every summary carrying grams stretches with it: mean 46 × 3 = 138, median 44 × 3 = 132, standard deviation 9 × 3 = 27.',
        expWrong:{
          A:'Holding the standard deviation at 9 is the rule for ADDING a constant, not for multiplying. Tripling every value also triples every distance from the mean, so the spread triples too.',
          B:'The median is one of the values, so if every value triples the middle one triples as well: 44 × 3 = 132.',
          C:'This adds 3 to everything instead of multiplying by 3, and then bumps the standard deviation by 3 on top of that. Adding a constant does not touch the spread, and the operation here is multiplication anyway.'
        },
        tip:'Add c → mean and median shift by c, standard deviation unchanged. Multiply by k (with k positive) → mean, median AND standard deviation all multiply by k.',
        desmos:'In Desmos compare the stdev of a short list with the stdev of that same list tripled.',
        desmosLatex:['\\operatorname{stdev}\\left(\\left[2,4,6,8\\right]\\right)','\\operatorname{stdev}\\left(\\left[6,12,18,24\\right]\\right)']
      },

      {
        id:'OVH-13', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Judging which distribution has the larger standard deviation from its shape',
        stem:'Two orchards each harvested 200 apples and weighed every one. In orchard R, 180 of the weights fall between 148 and 152 grams and the other 20 fall between 140 and 160 grams. In orchard S the weights run almost evenly from 120 to 180 grams. Both sets have a mean of 150 grams. Which orchard has the larger standard deviation, and why?',
        choices:{
          A:'Orchard S, because its weights sit much farther from the shared mean of 150.',
          B:'Orchard R, because 180 of its weights crowd into a band only 4 grams wide.',
          C:'Neither; the two means are equal, so the two standard deviations are equal.',
          D:'Orchard R, because the weights outside its band are the farthest from 150.'
        },
        correct:'A',
        expCorrect:'Standard deviation asks how far the values sit from the mean, on average. Both sets center on 150. In R, 90 % of the weights are within 2 grams of 150 and not one is more than 10 grams away. In S the weights run from 120 to 180, so typical distances from 150 are tens of grams. S is far more spread out, so S carries the larger standard deviation.',
        expWrong:{
          B:'That tight 4-gram band is exactly why R has the SMALLER standard deviation. Crowding near the mean drives spread down, not up.',
          C:'Equal means only say the two sets are centered in the same place. Spread is a separate question, and here one set is packed tight and the other is not.',
          D:'R does have weights away from its band, but they stop at 140 and 160. S reaches all the way out to 120 and 180, so S owns the larger distances.'
        },
        tip:'To compare standard deviations by eye, ask where the bulk of the values sits relative to the mean. Packed around the center = small. Stretched evenly across a wide interval = large. The formula never has to be run.',
        desmos:'In Desmos compare the stdev of a tight list around 150 with the stdev of a wide one that shares the same mean.',
        desmosLatex:['\\operatorname{stdev}\\left(\\left[148,149,150,151,152\\right]\\right)','\\operatorname{stdev}\\left(\\left[120,135,150,165,180\\right]\\right)']
      },

      /* ============== Brutal: Difícil + extreme (OVH-14 a OVH-22) ============== */

      {
        id:'OVH-14', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Mean with a parameter: two conditions on the same list',
        stem:'A list of 6 numbers has mean 17. The two smallest numbers in the list have a mean of 7. Those two numbers are taken out and replaced by a single number t, and the 5 numbers that are left have mean 20. What is the value of t?',
        answer:'12',
        expCorrect:'Totals first. Six numbers with mean 17 add to 6 × 17 = 102. The two smallest have mean 7, so together they are 2 × 7 = 14. Taking them out leaves 4 numbers adding to 102 − 14 = 88. Putting t in gives 5 numbers adding to 88 + t, and their mean is 20, so 88 + t = 5 × 20 = 100 and t = 12. (Check: 88 + 12 = 100, and 100 / 5 = 20 ✓.)',
        tip:'Track the COUNT as carefully as the total. Removing two values and adding one turns 6 into 5, so the second total is 5 × 20 — not 6 × 20 and not 4 × 20.',
        desmos:'Graph y = (88 + x)/5 and y = 20; the crossing gives t.',
        desmosLatex:['y=\\frac{88+x}{5}','y=20']
      },

      {
        id:'OVH-15', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Mean of what is left after values are removed',
        stem:'The 15 entries in a photography contest received scores with a mean of 62. The judges then threw out the two highest scores, 95 and 89, and also the lowest score, 26. What is the mean of the 12 scores that are left?',
        choices:{A:'48', B:'62', C:'60', D:'70'},
        correct:'C',
        expCorrect:'Fifteen scores with mean 62 total 15 × 62 = 930. The three discarded scores add to 95 + 89 + 26 = 210, so the 12 survivors add to 930 − 210 = 720. Their mean is 720 / 12 = 60. (Check: 720 + 210 = 930 ✓.)',
        expWrong:{
          A:'48 = 720 / 15. The total came down correctly, but the count came down too — 12 scores are left, not 15.',
          B:'62 keeps the original mean. Discarding values leaves the mean alone only when the discarded ones average exactly 62; these three average 70, so the mean has to fall.',
          D:'70 = 210 / 3, the mean of the three scores that were THROWN OUT. The question is about the 12 that stayed.'
        },
        tip:'Removing values: new mean = (old total − removed total) ÷ (old count − how many you removed). Numerator and denominator both change, and dropping the denominator half is the usual slip.',
        desmos:'In Desmos evaluate (15·62 − (95 + 89 + 26))/12.',
        desmosLatex:['\\frac{15\\cdot62-\\left(95+89+26\\right)}{12}']
      },

      {
        id:'OVH-16', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Weighted mean: finding the size of one group',
        stem:'At a conservatory every student plays either strings or winds. The string players have a mean rehearsal time of 9 hours per week and the wind players a mean of 14 hours per week. Across all 60 students the mean rehearsal time is 11 hours per week. How many of the 60 students play winds?',
        answer:'24',
        expCorrect:'Let w be the number of wind players, so 60 − w play strings. Totals: 9(60 − w) + 14w = 60 × 11 = 660, that is 540 + 5w = 660, so 5w = 120 and w = 24. (Check: 36 string players × 9 = 324, 24 wind players × 14 = 336, and 324 + 336 = 660 = 60 × 11 ✓.)',
        tip:'Two groups and one overall mean act like a seesaw: the overall mean splits the gap between the group means in the INVERSE ratio of the group sizes. Here 11 is 2 above 9 and 3 below 14, so strings to winds is 3 : 2, giving 36 and 24.',
        desmos:'Graph y = (9(60 − x) + 14x)/60 and y = 11; they cross at x = 24.',
        desmosLatex:['y=\\frac{9\\left(60-x\\right)+14x}{60}','y=11']
      },

      {
        id:'OVH-17', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Median from a frequency table when one frequency is unknown',
        stem:'A theater logged how many tickets each buyer purchased. The log, written as (tickets — buyers), was: 1 — 14; 2 — 21; 3 — n; 4 — 9; 5 — 6. Altogether 70 buyers were logged. What is the median number of tickets per buyer?',
        choices:{A:'2', B:'2.5', C:'3', D:'20'},
        correct:'B',
        expCorrect:'First recover n: 14 + 21 + 9 + 6 = 50, and the log holds 70 buyers, so n = 20. The running totals are then 14, 35, 55, 64, 70. With 70 buyers the median averages positions 35 and 36. Position 35 is the last of the 2-ticket buyers and position 36 is the first of the 3-ticket buyers, so the median is (2 + 3)/2 = 2.5.',
        expWrong:{
          A:'2 is only the 35th value. An even count has two middle positions, and the 36th buyer bought 3 tickets.',
          C:'3 is only the 36th value, the other middle position. The two have to be averaged: (2 + 3)/2 = 2.5.',
          D:'20 is n, the missing frequency. It is the step that lets you place positions 35 and 36, but it is a number of buyers, not a number of tickets.'
        },
        tip:'When a frequency is missing, recover it from the stated total FIRST, then build running totals, then ask which positions the median needs. With an even total it needs two of them.',
        desmos:'In Desmos compute 70 − (14 + 21 + 9 + 6) to get n, then follow the running totals 14, 35, 55, 64, 70.',
        desmosLatex:['70-\\left(14+21+9+6\\right)']
      },

      {
        id:'OVH-18', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Mean and median of a list written in terms of a variable',
        stem:'A list of 5 numbers is x − 6, x − 1, x + 2, x + 7, and x + 13, where x is a constant. The mean of these 5 numbers is 27. What is the median of the list?',
        choices:{A:'26', B:'24', C:'24.5', D:'27'},
        correct:'A',
        expCorrect:'Add them: (x − 6) + (x − 1) + (x + 2) + (x + 7) + (x + 13) = 5x + 15. The mean is (5x + 15)/5 = x + 3, and that equals 27, so x = 24. The list is already written in increasing order, and with 5 terms the median is the third one, x + 2 = 26. (Check: the list is 18, 23, 26, 31, 37, which adds to 135, and 135 / 5 = 27 ✓.)',
        expWrong:{
          B:'24 is x, the value you solve for along the way. The question asks for the median of the list, which is x + 2.',
          C:'24.5 averages x − 1 and x + 2, which is what an EVEN count calls for. Five numbers have a single middle one, the third.',
          D:'27 is the mean. Mean and median agree only when the values sit symmetrically about the center, and these offsets (−6, −1, 2, 7, 13) do not.'
        },
        tip:'When every term carries the same variable, the mean is x plus the AVERAGE of the offsets and the median is x plus the MIDDLE offset. Solve for x, then answer the question actually asked.',
        desmos:'Graph y = x + 3 and y = 27 to get x, then evaluate x + 2.',
        desmosLatex:['y=x+3','y=27']
      },

      {
        id:'OVH-19', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Mean after every value is rescaled and one value is replaced',
        stem:'A set of 8 measurements has mean 25. Every measurement is multiplied by 4, and then the largest of the new values, which is 160, is replaced by 96. What is the mean of the resulting 8 values?',
        answer:'92',
        expCorrect:'Eight measurements with mean 25 total 8 × 25 = 200. Multiplying every value by 4 multiplies the total by 4, giving 800, so the mean at that point is 800 / 8 = 100. Swapping 160 for 96 drops the total by 64: 800 − 64 = 736, still over 8 values. Mean = 736 / 8 = 92. (Check: 100 − 64/8 = 100 − 8 = 92 ✓.)',
        tip:'Chain the operations on the TOTAL, not on the mean, and keep the count in view. Scaling multiplies the total; replacing one value shifts it by the difference; here the count never changed, so the mean moved by 64/8 = 8.',
        desmos:'In Desmos evaluate (4·200 − 64)/8.',
        desmosLatex:['\\frac{4\\cdot200-64}{8}']
      },

      {
        id:'OVH-20', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Standard deviation under a shift applied to only part of the data',
        stem:'Data set V has 10 values with mean 50 and standard deviation 6. Data set W is built from V by adding 20 to each of the 5 largest values and subtracting 20 from each of the 5 smallest. How do the mean and the standard deviation of W compare with those of V?',
        choices:{
          A:'The mean is unchanged and the standard deviation is unchanged.',
          B:'The mean is larger and the standard deviation is unchanged.',
          C:'The mean is unchanged and the standard deviation is smaller.',
          D:'The mean is unchanged and the standard deviation is larger.'
        },
        correct:'D',
        expCorrect:'The total is untouched: five values gained 20 (that is +100) and five lost 20 (that is −100), so the sum stays put and the mean is still 50 over the same 10 values. But every value moved AWAY from 50 — the big ones grew, the small ones shrank — so every distance from the mean got bigger, and the standard deviation grows with those distances.',
        expWrong:{
          A:'A standard deviation survives untouched only when the same amount is added to EVERY value, which slides the set without stretching it. Here half went up and half went down, which stretches it.',
          B:'The mean does not move: the +100 from the top half is cancelled exactly by the −100 from the bottom half, and the count is still 10.',
          C:'Smaller would mean the values crowded toward 50. They did the opposite — the largest rose and the smallest fell.'
        },
        tip:'Ask two separate questions of any transformation: did the CENTER move, and did the DISTANCES change? Adding the same constant to all values moves the center only; pushing the high half up and the low half down moves the distances only.',
        desmos:'In Desmos compare the stdev of a tight list centered on 50 with the stdev of the same list after the ends are pushed outward; the mean holds at 50 either way.',
        desmosLatex:['\\operatorname{stdev}\\left(\\left[44,47,50,53,56\\right]\\right)','\\operatorname{stdev}\\left(\\left[24,27,50,73,76\\right]\\right)']
      },

      {
        id:'OVH-21', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Weighted mean: recovering the two group sizes',
        stem:'A cooperative bottles olive oil at two mills. Bottles from the north mill have a mean fill of 742 milliliters and bottles from the south mill a mean fill of 766 milliliters. Taken together, all the bottles have a mean fill of 751 milliliters. The north mill filled 1,200 more bottles than the south mill did. How many bottles did the south mill fill?',
        answer:'1800',
        expCorrect:'The overall mean 751 sits 9 above 742 and 15 below 766, and for those pulls to balance, (north count) × 9 = (south count) × 15. So north : south = 15 : 9 = 5 : 3. With south = s and north = s + 1200: s + 1200 = (5/3)s, so (2/3)s = 1200 and s = 1800 (north is 3000). Check: 3000 × 742 + 1800 × 766 = 2,226,000 + 1,378,800 = 3,604,800, and 3,604,800 / 4,800 = 751 ✓.',
        tip:'An overall mean balances two groups like a seesaw: (its distance from the low mean) × (low group size) = (its distance from the high mean) × (high group size). The group whose mean is CLOSER to the overall mean is the bigger group.',
        desmos:'Graph y = (742(x + 1200) + 766x)/(2x + 1200) and y = 751; the crossing gives the south count.',
        desmosLatex:['y=\\frac{742\\left(x+1200\\right)+766x}{2x+1200}','y=751']
      },

      {
        id:'OVH-22', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Median and mean after one value is replaced by an unknown',
        stem:'A list of 7 numbers, written in increasing order, is 3, 8, 12, 15, 19, 24, 30. The value 15 is replaced by a number k, and after the replacement the mean of the 7 numbers is 17. What is the median of the new list?',
        choices:{A:'19', B:'15', C:'17', D:'23'},
        correct:'A',
        expCorrect:'The original seven add to 3 + 8 + 12 + 15 + 19 + 24 + 30 = 111. Dropping the 15 leaves 96, so 96 + k = 7 × 17 = 119 and k = 23. Rewrite the list in order: 3, 8, 12, 19, 23, 24, 30. Seven values, so the median is the 4th one, which is 19. (Check: 3 + 8 + 12 + 19 + 23 + 24 + 30 = 119, and 119 / 7 = 17 ✓.)',
        expWrong:{
          B:'15 was the old median, but 15 is no longer in the list — it is the value that got replaced. Re-sort before you read a median off anything.',
          C:'17 is the mean you were handed. A median matches the mean only when the values balance around the center, and this list does not.',
          D:'23 is k, the number you solve for along the way. In the re-sorted list 23 sits in the 5th position; the 4th, and therefore the median, is 19.'
        },
        tip:'Replacing a value can move the median even when the count stays the same, because the ORDER changes. Solve for the new value, rewrite the list in order, then count to the middle position.',
        desmos:'In Desmos compute 7·17 − (111 − 15) to get k, then take the median of the re-sorted list.',
        desmosLatex:['7\\cdot17-\\left(111-15\\right)','\\operatorname{median}\\left(\\left[3,8,12,19,23,24,30\\right]\\right)']
      }

    ]
  });
})();
