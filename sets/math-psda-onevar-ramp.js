/* SAT Studio question set — Math: Problem-Solving & Data Analysis
   One-variable data, warm-up to test level (OVR-01 to OVR-17) */
(function(){

  window.SAT_SETS.push({
    id: 'math-psda-onevar-ramp',
    title: 'One-Variable Data — Warm-up to Test Level',
    section: 'math',
    level: 'Media',
    description: 'Seventeen questions on one set of values at a time: mean, median, mode, range and standard deviation, read off lists, frequency tables, dot plots and histograms. The first eight ask for one measure directly; the last nine ask what a new value does to each measure, which of two groups is more spread out, and how to combine two groups of different sizes without averaging the averages.',
    minutes: 22,
    questions: [

      /* ======= Warm-up: one measure, read or computed directly (OVR-01 to OVR-08) ======= */
      {
        id:'OVR-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Mean of a list of values',
        stem:'A coach recorded the times, in seconds, of the 6 runners in a school race: 57, 58, 62, 64, 74 and 75. What is the mean of these 6 times, in seconds?',
        choices:{A:'63', B:'65', C:'66', D:'78'},
        correct:'B',
        expCorrect:'Add the six times, then divide by how many there are. 57 + 58 + 62 + 64 + 74 + 75 = 390, and 390 ÷ 6 = 65. (Check: 6 × 65 = 390 ✓.)',
        expWrong:{
          A:'63 is the MEDIAN, the midpoint of the 3rd and 4th times: (62 + 64) ÷ 2 = 63. The two slowest runners pull the mean above it.',
          C:'66 is the midpoint of the fastest and slowest times only: (57 + 75) ÷ 2 = 66. That throws away the four times in between, and the mean uses all six.',
          D:'78 is 390 ÷ 5. There are 6 times in the list, so the total gets divided by 6.'
        },
        tip:'Mean = total ÷ how many values. Count the values before you divide: the fastest way to get a mean wrong is to divide by a number one off from the real count.',
        desmos:'Type (57+58+62+64+74+75)/6 and Desmos returns 65. Typing mean([57,58,62,64,74,75]) returns the same thing.',
        desmosLatex:['\\frac{57+58+62+64+74+75}{6}']
      },
      {
        id:'OVR-02', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Median of a list with an even number of values',
        stem:'A librarian recorded how many books each of 8 students borrowed in one month: 3, 5, 5, 6, 8, 9, 12 and 14. What is the median of these 8 values?',
        answer:'7',
        expCorrect:'The values are already in order from least to greatest. With an even count of 8, there is no single middle value: the median is the midpoint of the 4th and the 5th. Those are 6 and 8, so the median is (6 + 8) ÷ 2 = 7. (Check: four values sit at or below 7 and four sit above it ✓.) Answer: 7.',
        tip:'Put the values in order first, always. With n values, an odd n gives you the single value in position (n + 1)/2; an even n gives you the midpoint of positions n/2 and n/2 + 1. With 8 values that is the 4th and the 5th, not the 4th alone.',
        desmos:'Type median([3,5,5,6,8,9,12,14]) in Desmos: 7. Typing (6+8)/2 shows where that 7 comes from.',
        desmosLatex:['\\operatorname{median}\\left(\\left[3,5,5,6,8,9,12,14\\right]\\right)']
      },
      {
        id:'OVR-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Mode from a frequency table',
        stem:'On Friday night a restaurant seated 40 parties. A party of 2 was seated 9 times, a party of 3 was seated 11 times, a party of 4 was seated 14 times, a party of 5 was seated 4 times, and a party of 6 was seated 2 times. What is the mode of the 40 party sizes?',
        choices:{A:'3.475', B:'3.5', C:'4', D:'14'},
        correct:'C',
        expCorrect:'The mode is the value that comes up most often. Compare how many times each party size was seated: 9, 11, 14, 4 and 2. The largest of those is 14, and it belongs to the party size 4, so the mode is 4. (Check: no other size was seated more than 11 times ✓.)',
        expWrong:{
          A:'3.475 is the MEAN: (2·9 + 3·11 + 4·14 + 5·4 + 6·2) ÷ 40 = 139 ÷ 40. The mean uses every party; the mode only asks which size repeats most.',
          B:'3.5 is the MEDIAN. Lined up in order, the 20th party is a 3 and the 21st is a 4, so the median is 3.5. That is the middle of the list, not the most common value.',
          D:'14 is the frequency itself: how many TIMES the winning size was seated. The mode is the party size that got seated 14 times, which is 4.'
        },
        tip:'In a frequency table the values are one row and the counts are another, and the mode is a VALUE. Find the biggest count, then step over and read the value it sits next to.',
        desmos:'Type 9+11+14+4+2 to confirm the 40 parties, then (2*9+3*11+4*14+5*4+6*2)/40 to see the mean, 3.475, which is a different measure.',
        desmosLatex:['9+11+14+4+2','\\frac{2\\cdot9+3\\cdot11+4\\cdot14+5\\cdot4+6\\cdot2}{40}']
      },
      {
        id:'OVR-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Range as a measure of spread',
        stem:'A small farm recorded the number of eggs laid by each of 7 hens in one week: 4, 6, 6, 7, 9, 11 and 13. What is the range of these 7 values?',
        choices:{A:'6', B:'7', C:'8', D:'9'},
        correct:'D',
        expCorrect:'The range is the largest value minus the smallest: 13 − 4 = 9. (Check: every one of the seven counts lands inside a window 9 eggs wide, from 4 up to 13 ✓.)',
        expWrong:{
          A:'6 is the MODE, the only count that appears twice. The mode says which value repeats; the range says how far apart the extremes are.',
          B:'7 is the MEDIAN, the 4th of the seven values in order. It marks the center of the list, not its width.',
          C:'8 is the MEAN: (4 + 6 + 6 + 7 + 9 + 11 + 13) ÷ 7 = 56 ÷ 7. Like the median, it is a measure of center, not of spread.'
        },
        tip:'Sort the four basic measures by what they answer. Mean, median and mode all answer "where is the center"; range and standard deviation answer "how far apart are the values". Read which of the two questions is being asked before you compute anything.',
        desmos:'Type 13-4 for the range, then mean([4,6,6,7,9,11,13]) and median([4,6,6,7,9,11,13]) to see that 8 and 7 are the center measures, not the spread.',
        desmosLatex:['13-4','\\operatorname{mean}\\left(\\left[4,6,6,7,9,11,13\\right]\\right)']
      },
      {
        id:'OVR-05', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Mean from a frequency table',
        stem:'In a youth league, a team played 20 games. It scored 0 goals in 3 games, 1 goal in 5 games, 2 goals in 6 games, 3 goals in 4 games and 5 goals in 2 games. What is the mean number of goals the team scored per game?',
        answer:'1.95',
        expCorrect:'Each goal total has to be counted once for every game it happened in. Total goals = 0·3 + 1·5 + 2·6 + 3·4 + 5·2 = 0 + 5 + 12 + 12 + 10 = 39. Games = 3 + 5 + 6 + 4 + 2 = 20. Mean = 39 ÷ 20 = 1.95. (Check: 20 × 1.95 = 39 ✓.) Answer: 1.95.',
        tip:'A frequency table is a long list folded up. Multiply each value by its frequency, add those products for the total, and divide by the sum of the frequencies — never by how many different values appear. Here (0 + 1 + 2 + 3 + 5) ÷ 5 = 2.2 is the trap, and it is wrong because the 5-goal game happened twice while the 2-goal game happened six times.',
        desmos:'Type (0*3+1*5+2*6+3*4+5*2)/20 and Desmos returns 1.95. Typing (0+1+2+3+5)/5 returns 2.2, the answer you get by ignoring the frequencies.',
        desmosLatex:['\\frac{0\\cdot3+1\\cdot5+2\\cdot6+3\\cdot4+5\\cdot2}{20}','\\frac{0+1+2+3+5}{5}']
      },
      {
        id:'OVR-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Reading a dot plot to find the median',
        stem:'A dot plot records how many times each of 21 students visited the school gym last month. The plot has 2 dots above 1, 5 dots above 2, 7 dots above 3, 4 dots above 4 and 3 dots above 5. What is the median number of visits?',
        choices:{A:'3', B:'3.05', C:'7', D:'11'},
        correct:'A',
        expCorrect:'The dots add to 2 + 5 + 7 + 4 + 3 = 21 students. With 21 values in order, the median is the one in position (21 + 1) ÷ 2 = 11. Run a cumulative total across the plot: 2 students through 1 visit, 7 students through 2 visits, 14 students through 3 visits. The 11th student falls inside that third stack, so the median is 3 visits. (Check: 10 students are at or below 3 before the 11th and 10 are at or above 3 after it ✓.)',
        expWrong:{
          B:'3.05 is the MEAN, 64 ÷ 21, rounded. A dot plot gives you both, but the question asks for the middle student, not the balance point.',
          C:'7 is the HEIGHT of the tallest stack: a number of students, not a number of visits. Heights are frequencies; the answer has to be a value from the horizontal axis.',
          D:'11 is the POSITION of the middle student, which is the halfway step, not the finish. Once you know you want student number 11, you still have to read which stack that student stands in.'
        },
        tip:'Treat a dot plot as a list written vertically. Add the dots to get n, find position (n + 1)/2 for an odd n, then count stacks from the left until your running total reaches that position. The answer is the value under the stack you land in.',
        desmos:'Type 2+5+7+4+3 to get 21 students, then (2*1+5*2+7*3+4*4+3*5)/21 for the mean, about 3.05. The running totals 2, 7, 14 put student 11 over the value 3.',
        desmosLatex:['2+5+7+4+3','\\frac{2\\cdot1+5\\cdot2+7\\cdot3+4\\cdot4+3\\cdot5}{21}']
      },
      {
        id:'OVR-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Choosing the measure of center that resists an outlier',
        stem:'The yearly salaries, in thousands of dollars, of the 7 employees at a design studio are 42, 45, 48, 50, 52, 55 and 240. Which measure best describes a typical salary at this studio?',
        choices:{
          A:'The mean, because it takes every one of the 7 values into account.',
          B:'The range, because it covers the full spread of the salaries.',
          C:'The mean, because a typical value should sit above the median.',
          D:'The median, because the one huge salary barely moves it.'
        },
        correct:'D',
        expCorrect:'The median is the 4th salary in order, 50, and it would still be 50 if the top salary were 240 or 2,400: only its position matters, not its size. The mean is (42 + 45 + 48 + 50 + 52 + 55 + 240) ÷ 7 = 532 ÷ 7 = 76, which is higher than six of the seven salaries. A center that almost nobody is near is not typical, so the median is the better summary here.',
        expWrong:{
          A:'Using every value is exactly what goes wrong. The single 240 adds about 27 to the mean all by itself and lifts it to 76, above six of the seven people it is supposed to describe.',
          B:'The range, 240 − 42 = 198, is a measure of spread. It answers how far apart the salaries are, not what a typical one is.',
          C:'The mean does land above the median here, 76 against 50, but that gap is the symptom of the outlier, not a reason to trust the mean. A mean can also fall below a median when the extreme value is small.'
        },
        tip:'One value far from the rest moves the mean a lot and the median almost not at all, because the mean adds sizes while the median counts positions. When a list has an outlier and the question asks what is typical, the median is the safer measure.',
        desmos:'Type mean([42,45,48,50,52,55,240]) and median([42,45,48,50,52,55,240]): 76 and 50. Change the 240 to 2400 and the median stays at 50 while the mean jumps past 380.',
        desmosLatex:['\\operatorname{mean}\\left(\\left[42,45,48,50,52,55,240\\right]\\right)','\\operatorname{median}\\left(\\left[42,45,48,50,52,55,240\\right]\\right)']
      },
      {
        id:'OVR-08', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Median from a histogram',
        stem:'A histogram shows the number of text messages a teacher received on each of 24 evenings: 0 messages on 3 evenings, 1 message on 5 evenings, 2 messages on 7 evenings, 3 messages on 6 evenings and 4 messages on 3 evenings. What is the median number of messages?',
        answer:'2',
        expCorrect:'The bar heights add to 3 + 5 + 7 + 6 + 3 = 24 evenings. With an even count of 24 the median is the midpoint of the 12th and 13th evenings once they are lined up from fewest messages to most. Build the running total: 3 evenings through 0 messages, 8 through 1 message, 15 through 2 messages. Both the 12th and the 13th evening land inside that third bar, so both are 2 and the median is 2. (Check: the mean is 49 ÷ 24 ≈ 2.04, close but not the same measure ✓.) Answer: 2.',
        tip:'A histogram of whole-number values is a frequency table drawn as bars. Add the heights for n, find the two middle positions when n is even, and read the value on the horizontal axis. If both middle positions land in the same bar, the median is that bar value and there is nothing left to average.',
        desmos:'Type 3+5+7+6+3 for the 24 evenings and (3*0+5*1+7*2+6*3+3*4)/24 for the mean, about 2.04. The running totals 3, 8, 15 put evenings 12 and 13 over the value 2.',
        desmosLatex:['3+5+7+6+3','\\frac{3\\cdot0+5\\cdot1+7\\cdot2+6\\cdot3+3\\cdot4}{24}']
      },

      /* ======= Test level: what a change does, comparing spread, weighted means (OVR-09 to OVR-17) ======= */
      {
        id:'OVR-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Adding one value: what it does to the mean and to the median',
        stem:'The daily high temperatures, in degrees Fahrenheit, for 5 days were 68, 71, 73, 75 and 78. A sixth day with a high of 95 is then added to the list. Which statement is true?',
        choices:{
          A:'The mean and the median both rise by about 3.7.',
          B:'The mean rises by about 3.7 and the median rises by 1.',
          C:'The mean rises by about 3.7 and the median does not change.',
          D:'The median rises by about 3.7 and the mean rises by 1.'
        },
        correct:'B',
        expCorrect:'Before: the five values total 365, so the mean is 365 ÷ 5 = 73, and the median is the 3rd value, 73. After: the six values total 460, so the mean is 460 ÷ 6 ≈ 76.67, a rise of about 3.67. With six values the median becomes the midpoint of the 3rd and 4th, (73 + 75) ÷ 2 = 74, a rise of exactly 1. (Check: 3.67 is much larger than 1, which is what a value far above the rest should do ✓.)',
        expWrong:{
          A:'Only the mean feels the full size of the 95. The median just slides half a position over, from the 3rd value to the midpoint of the 3rd and 4th.',
          C:'The median does move. Going from 5 values to 6 changes it from a single middle value to the midpoint of two, and 73 becomes 74.',
          D:'This swaps the two measures. The mean is the one built by adding sizes, so a value 20 above the old mean is the one that pushes it; the median only shifts by positions.'
        },
        tip:'When a value is added, ask two separate questions. For the mean, compare the new value with the old mean: above it pushes up, below it pulls down, and the size of the gap sets how much. For the median, forget sizes and just watch the middle position slide.',
        desmos:'Type mean([68,71,73,75,78]) and mean([68,71,73,75,78,95]): 73 and about 76.67. Do the same with median: 73 and 74.',
        desmosLatex:['\\operatorname{mean}\\left(\\left[68,71,73,75,78,95\\right]\\right)','\\operatorname{median}\\left(\\left[68,71,73,75,78,95\\right]\\right)']
      },
      {
        id:'OVR-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Removing an outlier: what it does to the mean and to the range',
        stem:'A cafe recorded the number of pastries sold in each of 9 hours: 12, 14, 15, 15, 17, 18, 19, 20 and 70. The value 70 is then removed from the list. Which statement is true?',
        choices:{
          A:'The mean falls by 1, and the range falls by 50.',
          B:'The mean falls by about 6, and the range does not change.',
          C:'The mean falls by about 6, and the range falls by 50.',
          D:'The mean and the range both fall by about 6.'
        },
        correct:'C',
        expCorrect:'With all 9 values the total is 200, so the mean is 200 ÷ 9 ≈ 22.22, and the range is 70 − 12 = 58. Take out the 70 and the total drops to 130 over 8 values: the mean becomes 130 ÷ 8 = 16.25, a fall of about 5.97, call it 6. The largest value left is 20, so the range becomes 20 − 12 = 8, a fall of 50. (Check: 58 − 8 = 50 ✓.)',
        expWrong:{
          A:'1 is how far the MEDIAN falls, from 17 to the midpoint of 15 and 17, which is 16. The mean falls by about 6, not by 1.',
          B:'The range is built entirely out of the largest and smallest values, so removing the largest one is the change it feels most: 58 becomes 8.',
          D:'The range does not shrink by 6. The value that left was the maximum, so the top of the window collapses from 70 all the way down to 20.'
        },
        tip:'Ranked by how hard an outlier hits them: the range moves most, because the outlier IS one of its two endpoints; the mean moves a moderate amount, spread over n values; the median barely moves at all. Expect that order and you can eliminate two options before computing anything.',
        desmos:'Type mean([12,14,15,15,17,18,19,20,70]) and mean([12,14,15,15,17,18,19,20]): about 22.22 and 16.25. For the range, 70-12 and 20-12 give 58 and 8.',
        desmosLatex:['\\operatorname{mean}\\left(\\left[12,14,15,15,17,18,19,20,70\\right]\\right)','\\operatorname{mean}\\left(\\left[12,14,15,15,17,18,19,20\\right]\\right)']
      },
      {
        id:'OVR-11', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Weighted mean of two groups of different sizes',
        stem:'At a swim club, 14 swimmers recorded a mean of 32 laps in one session. A different group of 6 swimmers recorded a mean of 42 laps in the same session. What is the mean number of laps for all 20 swimmers together?',
        answer:'35',
        expCorrect:'Turn each mean back into a total before combining. First group: 14 × 32 = 448 laps. Second group: 6 × 42 = 252 laps. Together: 448 + 252 = 700 laps swum by 20 swimmers, so the mean is 700 ÷ 20 = 35. (Check: 35 sits between 32 and 42, and closer to 32, which is right because the 32 group is more than twice as large ✓.) The plain midpoint of 32 and 42 is 37, and it is wrong here by 2 whole laps because it pretends both groups have the same head count. Answer: 35.',
        tip:'Never average two averages unless the two groups are exactly the same size. Rebuild the totals with sum = mean × count, add the totals, then divide once by the combined count. Quick sanity check: the combined mean always lands between the two group means and leans toward the bigger group.',
        desmos:'Type (14*32+6*42)/20 and Desmos returns 35. Typing (32+42)/2 returns 37, which is what ignoring the group sizes costs you.',
        desmosLatex:['\\frac{14\\cdot32+6\\cdot42}{20}','\\frac{32+42}{2}']
      },
      {
        id:'OVR-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Weighted mean when one group is bigger than the other',
        stem:'In one section of a history course, 25 students wrote a mean of 8 pages for a project. In a second section, 15 students wrote a mean of 12 pages. What is the mean number of pages for all 40 students?',
        choices:{A:'10', B:'10.5', C:'20', D:'9.5'},
        correct:'D',
        expCorrect:'Rebuild the totals first. First section: 25 × 8 = 200 pages. Second section: 15 × 12 = 180 pages. Combined: 200 + 180 = 380 pages written by 40 students, so the mean is 380 ÷ 40 = 9.5. (Check: 40 × 9.5 = 380 ✓, and 9.5 is closer to 8 than to 12 because the 8-page section is the larger one.)',
        expWrong:{
          A:'10 is (8 + 12) ÷ 2, the plain average of the two means. That only equals the real combined mean when the two groups are the same size. Here the correct arithmetic is (25 · 8 + 15 · 12) ÷ 40 = 380 ÷ 40 = 9.5.',
          B:'10.5 attaches each mean to the wrong group: (15 · 8 + 25 · 12) ÷ 40 = 420 ÷ 40. The section of 25 students is the one that wrote 8 pages, so 8 has to carry the weight 25.',
          C:'20 is 8 + 12, the two means added instead of combined. A mean of a merged group is never the sum of the parts; it has to land somewhere between 8 and 12.'
        },
        tip:'Two group means only average directly when the counts match. Otherwise the answer leans toward the bigger group, so before computing you already know it must fall between the two means and on the crowded side. That alone kills any option outside the interval.',
        desmos:'Type (25*8+15*12)/40 for 9.5 and (8+12)/2 for 10 side by side. The gap between them is exactly what the group sizes are worth.',
        desmosLatex:['\\frac{25\\cdot8+15\\cdot12}{40}','\\frac{8+12}{2}']
      },
      {
        id:'OVR-13', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two lists with the same mean and different standard deviation',
        stem:'List X is 18, 19, 20, 21 and 22. List Y is 10, 15, 20, 25 and 30. Which statement correctly compares the two lists?',
        choices:{
          A:'The two lists have the same mean, and List X has the larger standard deviation.',
          B:'The two lists have the same mean, and List Y has the larger standard deviation.',
          C:'List Y has the larger mean and the larger standard deviation.',
          D:'The two lists have the same mean and the same standard deviation.'
        },
        correct:'B',
        expCorrect:'Both lists total 100 over 5 values, so both means are 20. Now measure distance from that shared center. List X sits at distances 2, 1, 0, 1, 2; List Y sits at distances 10, 5, 0, 5, 10. Standard deviation grows with those distances, so List Y has the larger one: about 7.91 against about 1.58. (Check: every value of X is within 2 of 20, while Y reaches 10 and 30 ✓.)',
        expWrong:{
          A:'This picks the tighter list. List X is packed between 18 and 22, and values close to the mean make the standard deviation small, not large.',
          C:'The means are not different. 18 + 19 + 20 + 21 + 22 = 100 and 10 + 15 + 20 + 25 + 30 = 100, and both are divided by 5, so both means are 20.',
          D:'Equal means do not force equal spread. The mean says where the center is; the standard deviation says how far the values wander from it, and here they wander five times as far in List Y.'
        },
        tip:'Mean and standard deviation are independent readings. Shifting every value moves the mean and leaves the spread alone; stretching the values away from the center leaves the mean alone and grows the spread. When two lists share a center, compare the typical distance from that center, not the numbers themselves.',
        desmos:'Type stdev([18,19,20,21,22]) and stdev([10,15,20,25,30]): about 1.58 and 7.91. Typing mean on both lists returns 20 either way.',
        desmosLatex:['\\operatorname{stdev}\\left(\\left[18,19,20,21,22\\right]\\right)','\\operatorname{stdev}\\left(\\left[10,15,20,25,30\\right]\\right)']
      },
      {
        id:'OVR-14', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Comparing spread in two dot plots with equal means',
        stem:'Two dot plots each show 9 values. Plot P has 1 dot at 4, 2 dots at 5, 3 dots at 6, 2 dots at 7 and 1 dot at 8. Plot Q has 3 dots at 4, 1 dot at 5, 1 dot at 6, 1 dot at 7 and 3 dots at 8. Which statement is true?',
        choices:{
          A:'The means are equal, and Plot P has the greater standard deviation.',
          B:'Plot Q has the greater mean and the greater standard deviation.',
          C:'The means are equal, and Plot Q has the greater standard deviation.',
          D:'The means are equal and so are the standard deviations, since the ranges match.'
        },
        correct:'C',
        expCorrect:'Plot P totals 4 + 10 + 18 + 14 + 8 = 54 over 9 values, so its mean is 6. Plot Q totals 12 + 5 + 6 + 7 + 24 = 54 over 9 values, so its mean is 6 as well. Now count how far the dots sit from 6. In P, only 2 of the 9 dots are more than 1 unit away. In Q, 6 of the 9 dots sit a full 2 units away, at 4 or at 8. More distance from the center means more standard deviation: about 1.80 for Q against about 1.22 for P.',
        expWrong:{
          A:'Plot P piles its dots on the center, 6. Values sitting on the mean add nothing to the standard deviation, so P ends up with the smaller one.',
          B:'Both plots hold 9 values that add to 54, so both means are 6. Q looks different because its dots are pushed to the two ends, and that changes spread, not center.',
          D:'Both plots do run from 4 to 8, but the range reads only the two endpoints. Standard deviation weighs every value, and the plot that stacks dots at the ends beats the plot that stacks them in the middle.'
        },
        tip:'Equal range does not mean equal standard deviation. Range asks only how wide the picture is; standard deviation asks where inside that width the values actually sit. A U-shaped plot and a peaked plot can share endpoints and still differ a lot.',
        desmos:'Type stdev([4,5,5,6,6,6,7,7,8]) and stdev([4,4,4,5,6,7,8,8,8]): about 1.22 and 1.80. Both lists return a mean of 6.',
        desmosLatex:['\\operatorname{stdev}\\left(\\left[4,5,5,6,6,6,7,7,8\\right]\\right)','\\operatorname{stdev}\\left(\\left[4,4,4,5,6,7,8,8,8\\right]\\right)']
      },
      {
        id:'OVR-15', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Finding a missing value so that the mean hits a target',
        stem:'A student scored 78, 85, 91 and 82 on the first four quizzes of a unit. What score on a fifth quiz would make the mean of all five quiz scores equal to 85?',
        answer:'89',
        expCorrect:'Work with totals, not with means. For five scores to average 85, they have to add to 5 × 85 = 425. The four scores already recorded add to 78 + 85 + 91 + 82 = 336. The fifth score has to supply the difference: 425 − 336 = 89. (Check: (336 + 89) ÷ 5 = 425 ÷ 5 = 85 ✓.) Answer: 89.',
        tip:'A target mean is really a target sum: sum = mean × count, counting the value you do not have yet. Subtract what you already hold and the missing value falls out. The same move solves "what score keeps my average above 90" questions in one line.',
        desmos:'Type 5*85-(78+85+91+82) and Desmos returns 89. Then type (78+85+91+82+89)/5 to confirm the mean lands on 85.',
        desmosLatex:['5\\cdot85-\\left(78+85+91+82\\right)','\\frac{78+85+91+82+89}{5}']
      },
      {
        id:'OVR-16', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Shape of a distribution: the mean compared with the median',
        stem:'The donation amounts, in dollars, collected at a school fundraiser are mostly between 5 and 25, with a handful of donations near 400. Which statement about the mean and the median of these amounts is true?',
        choices:{
          A:'The mean is greater than the median, because the few very large donations pull the mean up.',
          B:'The median is greater than the mean, because most of the donations are small.',
          C:'The mean and the median are equal, because both of them describe the center of the data.',
          D:'The mean is greater than the median, because a mean is always greater than a median.'
        },
        correct:'A',
        expCorrect:'The donations bunch up at the low end and then trail off with a few very large ones, so the shape has a long tail on the high side. The median only counts positions, so it stays down inside the bunch, somewhere between 5 and 25. The mean adds the actual dollar amounts, and each 400-dollar donation contributes as much as sixteen 25-dollar ones, so it gets dragged above the bunch. That puts the mean above the median.',
        expWrong:{
          B:'Most donations being small is what holds the MEDIAN down; it does not hold the mean down. The few huge amounts outweigh the many small ones inside the sum, so the mean ends up on top.',
          C:'Mean and median coincide when the shape is symmetric. This one has a tail on the high side only, so the two measures separate rather than agree.',
          D:'The conclusion happens to be right and the reason is false, which makes it useless on the next question: when the tail runs to the LOW side instead, the mean drops below the median. The tail decides the direction, not a fixed rule.'
        },
        tip:'The tail pulls the mean. A tail stretching to the high side puts the mean above the median; a tail stretching to the low side puts the mean below it; a symmetric shape puts them together. Locate the tail first and the comparison is decided before you compute anything.',
        desmos:'Type mean([5,8,10,12,15,20,25,400]) and median([5,8,10,12,15,20,25,400]): about 61.9 and 13.5. Drop the 400 and the two collapse back toward each other.',
        desmosLatex:['\\operatorname{mean}\\left(\\left[5,8,10,12,15,20,25,400\\right]\\right)','\\operatorname{median}\\left(\\left[5,8,10,12,15,20,25,400\\right]\\right)']
      },
      {
        id:'OVR-17', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Weighted mean: recovering the mean of the second group',
        stem:'A choir has 30 members. The 18 members who sing soprano practiced a mean of 6 hours last week, and the choir as a whole practiced a mean of 7.2 hours. What is the mean number of hours practiced by the other 12 members?',
        choices:{A:'9', B:'8.4', C:'3.6', D:'12'},
        correct:'A',
        expCorrect:'Go through the totals. The whole choir practiced 30 × 7.2 = 216 hours. The 18 sopranos practiced 18 × 6 = 108 hours. Everything left belongs to the other 12 members: 216 − 108 = 108 hours, so their mean is 108 ÷ 12 = 9. (Check: (18 · 6 + 12 · 9) ÷ 30 = (108 + 108) ÷ 30 = 216 ÷ 30 = 7.2 ✓.)',
        expWrong:{
          B:'8.4 treats 7.2 as the plain midpoint of the two group means and answers 7.2 + 1.2, mirroring the 1.2 that 6 sits below it. That midpoint rule only holds when the groups are the same size. Here 18 sopranos outweigh 12 others, so the smaller group has to sit FARTHER from 7.2, and the real arithmetic gives (30 · 7.2 − 18 · 6) ÷ 12 = 108 ÷ 12 = 9.',
          C:'3.6 divides the leftover 108 hours by 30, the whole choir, instead of by the 12 members those hours belong to. The 108 hours were already stripped of the soprano share, so they get divided by 12 alone.',
          D:'12 is 216 ÷ 18: the choir total divided by the soprano count. Those two numbers do not go together, since the 216 hours were practiced by all 30 members.'
        },
        tip:'Combining groups and splitting them apart are the same equation read in two directions: mean × count = total, and totals add. Write the overall total, subtract the part you know, and divide the remainder by the count it belongs to. The smaller group always sits farther from the overall mean than the larger one does.',
        desmos:'Type 30*7.2-18*6 for the leftover 108 hours, then divide by 12 to get 9. Typing (18*6+12*9)/30 returns 7.2, which confirms it.',
        desmosLatex:['\\frac{30\\cdot7.2-18\\cdot6}{12}','\\frac{18\\cdot6+12\\cdot9}{30}']
      }

    ]
  });
})();
