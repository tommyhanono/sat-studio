/* SAT Studio question set — Math: Exponential Growth & Decay (EGD-01 to EGD-11) */
(function(){
  /* Tablas: se inyectan con innerHTML dentro del stem, igual que el resto del banco. */
  var TBL_ENTRIES =
    '<table><thead><tr><th>Week</th><th>0</th><th>1</th><th>2</th><th>3</th></tr></thead>' +
    '<tbody><tr><th>Entries received</th><td>16</td><td>24</td><td>36</td><td>54</td></tr></tbody></table>';

  var TBL_G =
    '<table><thead><tr><th>x</th><th>1</th><th>2</th><th>3</th></tr></thead>' +
    '<tbody><tr><th>g(x)</th><td>28</td><td>98</td><td>343</td></tr></tbody></table>';

  window.SAT_SETS.push({
    id: 'math-exp-growth1',
    title: 'Exponential Growth & Decay',
    section: 'math',
    level: 'Media',
    description: 'Telling linear from exponential, building a model from a percent, reading a and b in a·b^t, changing the time period, and compound interest.',
    minutes: 16,
    questions: [
      {
        id:'EGD-01', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Linear or exponential, from a table (constant difference vs constant ratio)',
        stem:'The table gives the number of entries an online art contest received in each of weeks 0 through 3.' + TBL_ENTRIES + 'Which of the following best describes the relationship between the week number and the number of entries received?',
        choices:{
          A:'Linear, because the number of entries increases by 8 entries each week.',
          B:'Exponential, because the number is multiplied by 1.5 each week.',
          C:'Exponential, because the number is multiplied by 8 each week.',
          D:'Linear, because the number of entries increases by 18 entries each week.'
        },
        correct:'B',
        expCorrect:'Test the differences first: 24 − 16 = 8, 36 − 24 = 12, 54 − 36 = 18. Not equal, so it is not linear. Now test the ratios: 24/16 = 1.5, 36/24 = 1.5, 54/36 = 1.5. Equal ratios mean each week the count is multiplied by the same factor, and that is exactly what an exponential function does. (Check: 16 · 1.5³ = 54 ✓.)',
        expWrong:{
          A:'The first jump really is 8, which is what makes this tempting, but the next jumps are 12 and 18. Linear means the SAME amount is added every week, and here the amount added keeps growing.',
          C:'The type is right and the factor is wrong: 8 is the first difference, the amount added, not the number the count is multiplied by. Multiplying by 8 would take 16 to 128, not to 24.',
          D:'18 is the LAST difference, 54 − 36. Naming one difference as the rate ignores that the three differences (8, 12, 18) are not equal, which is exactly what rules linear out.'
        },
        tip:'Two tests, in this order. Subtract consecutive values: all differences equal → linear. Divide consecutive values: all ratios equal → exponential, and that common ratio is the growth factor.',
        desmos:'Type 24/16, 36/24 and 54/36: all three give 1.5, so the factor is 1.5. Then graph y=16(1.5)^x and check that it passes through (3, 54).',
        desmosLatex:['24/16','36/24','54/36','y=16(1.5)^x']
      },
      {
        id:'EGD-02', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Building a growth model from a percent increase',
        stem:'At the start of 2019, a school library had 4,500 e-book titles in its collection, and the number of titles increases by 8% each year. Which function E gives the number of e-book titles in the collection t years after the start of 2019?',
        choices:{
          A:'E(t) = 4,500(0.08)^t',
          B:'E(t) = 4,500 + 360t',
          C:'E(t) = 4,500(1.08)^t',
          D:'E(t) = 4,500(8)^t'
        },
        correct:'C',
        expCorrect:'An increase of 8% keeps the original 100% and adds 8% more, so each year the collection is multiplied by 1 + 0.08 = 1.08. Starting from 4,500 titles: E(t) = 4,500(1.08)^t. (Check t = 1: 4,500(1.08) = 4,860, which is 4,500 + 360 ✓.)',
        expWrong:{
          A:'0.08 is only the part that is ADDED. Used as the factor it throws away the original 100%: after one year it gives 4,500(0.08) = 360 titles, a 92% loss instead of an 8% gain.',
          B:'360 is 8% of 4,500, and the library really does add 360 titles in the first year. But the second year takes 8% of 4,860, not of 4,500. A fixed AMOUNT added every year is linear; a fixed PERCENT is exponential.',
          D:'The 8 in "8%" means 8 per hundred, not a factor of 8. Multiplying by 8 each year would take the collection to 36,000 titles in twelve months.'
        },
        tip:'Percent growth → multiply by (1 + r); percent decay → multiply by (1 − r), with r written as a decimal. That leading 1 is the part you already had, and dropping it is the most common miss on these.',
        desmos:'Type 4500*1.08 and you get 4860, the first year. Then graph y=4500(1.08)^x next to y=4500+360x and watch the curve pull away from the line after x = 1.',
        desmosLatex:['4500*1.08','y=4500(1.08)^x','y=4500+360x']
      },
      {
        id:'EGD-03', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Building a decay model from a percent decrease',
        stem:'In 2015 the surface area of the Kalvik Glacier was 32 square kilometers, and the area decreases by 3% each year. Which function A gives the surface area of the glacier, in square kilometers, t years after 2015?',
        choices:{
          A:'A(t) = 32(0.97)^t',
          B:'A(t) = 32(0.03)^t',
          C:'A(t) = 32(1.03)^t',
          D:'A(t) = 32 − 0.96t'
        },
        correct:'A',
        expCorrect:'Losing 3% leaves 97% behind, so each year the area is multiplied by 1 − 0.03 = 0.97: A(t) = 32(0.97)^t. (Check t = 1: 32(0.97) = 31.04, which is 32 − 0.96 ✓, and t = 2 gives 30.1088, a smaller loss than the first year.)',
        expWrong:{
          B:'0.03 is the part that DISAPPEARS, not the part that stays. Used as the factor it leaves 0.96 square kilometers after one year: a 97% loss in twelve months.',
          C:'1.03 is the factor for an increase of 3%. The glacier is shrinking, so the factor has to sit below 1: 1 − 0.03 = 0.97.',
          D:'0.96 is 3% of 32, and the glacier really does lose 0.96 square kilometers in the first year. But the second year loses 3% of 31.04, so the yearly loss shrinks. This line instead hits zero area near t = 33.'
        },
        tip:'Decay factor = 1 − r, never r by itself. Quick check: a shrinking quantity has a factor between 0 and 1, and it sits CLOSE to 1 when the percent is small.',
        desmos:'Type 32*0.97 → 31.04. Then graph y=32(0.97)^x and y=32-0.96x together: both leave (0, 32), but the line reaches zero near x = 33 while the curve never does.',
        desmosLatex:['32*0.97','y=32(0.97)^x','y=32-0.96x']
      },
      {
        id:'EGD-04', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Interpreting the initial value a in a·b^x',
        stem:'The function n defined by n(x) = 860(1.15)^x gives the number of downloads of a mobile game x months after it was released. Which of the following is the best interpretation of 860 in this context?',
        choices:{
          A:'The number of downloads added each month.',
          B:'The percent by which the number of downloads increases each month.',
          C:'The total number of downloads one month after release.',
          D:'The number of downloads in the month the game was released.'
        },
        correct:'D',
        expCorrect:'At release no time has passed, so x = 0: n(0) = 860(1.15)⁰ = 860(1) = 860. In a · b^x the number a is always the output when x = 0, the starting amount, so 860 is the number of downloads in the month of release.',
        expWrong:{
          A:'That amount is not constant here. From month 0 to month 1 the game adds 989 − 860 = 129 downloads, and the next month it adds more, because the 15% is taken on a bigger number every time.',
          B:'The percent lives in the base, not in front: 1.15 says downloads grow by 15% a month. 860 is measured in downloads, not in percent.',
          C:'One month after release is x = 1, and that gives 860(1.15) = 989 downloads. 860 is the value at x = 0.'
        },
        tip:'In a · b^x, a is the output at x = 0 (the starting amount, in the units of the problem) and b is the factor for one step of x. Plug in x = 0 in your head and the meaning of a settles itself.',
        desmos:'Type 860*1.15^0 → 860, then 860*1.15^1 → 989. The first is the starting value, the second is one month later.',
        desmosLatex:['860*1.15^0','860*1.15^1']
      },
      {
        id:'EGD-05', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Interpreting the decay factor b as a percent change',
        stem:'The function w defined by w(t) = 18,000(0.88)^t models the estimated number of wild salmon in the Torbay River t years after 2010. Which of the following is the best interpretation of 0.88 in this model?',
        choices:{
          A:'The salmon count decreases by 88% every year.',
          B:'Each year the salmon count is 88% of the previous count.',
          C:'The salmon count drops by 0.88 salmon each year, on average.',
          D:'The salmon count increases by 88% every year.'
        },
        correct:'B',
        expCorrect:'Each step in t multiplies the estimate by 0.88, so one year later the model keeps 88% of the count: 18,000(0.88) = 15,840. That is a loss of 2,160, and 2,160/18,000 = 0.12, so a factor of 0.88 is an annual DECREASE of 12%.',
        expWrong:{
          A:'A drop of 88% would leave only 12%: 18,000(0.12) = 2,160 salmon after one year. The factor is what REMAINS; the percent lost is 1 − 0.88 = 12%.',
          C:'0.88 is a multiplier, not a count. The first year alone loses 2,160 salmon, and each later year loses fewer, because the 12% is taken on a smaller number every time.',
          D:'A factor below 1 shrinks the quantity. Growth of 88% would be a factor of 1.88, and the count would nearly double every year instead of falling.'
        },
        tip:'Read b in a · b^t as "how much of the previous value is left". If b &lt; 1 the decay is (1 − b)·100%; if b &gt; 1 the growth is (b − 1)·100%.',
        desmos:'Type 18000*0.88 → 15840, then 18000-15840 → 2160, then 2160/18000 → 0.12. The yearly loss is 12%, not 88%.',
        desmosLatex:['18000*0.88','18000-15840','2160/18000']
      },
      {
        id:'EGD-06', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Changing the period: doubling every k years',
        stem:'A reforestation project began with 150 saplings in a test plot, and the number of trees in the plot doubles every 4 years. Which function T gives the number of trees in the plot t years after the project began?',
        choices:{
          A:'T(t) = 150(2)^(t/4)',
          B:'T(t) = 150(2)^(4t)',
          C:'T(t) = 150(4)^t',
          D:'T(t) = 150(2)^t'
        },
        correct:'A',
        expCorrect:'The factor 2 belongs to a 4-year period, so the exponent has to count PERIODS, not years: t years is t/4 periods, which gives T(t) = 150(2)^(t/4). (Check t = 4: 150(2)¹ = 300, one doubling ✓. Check t = 8: 150(2)² = 600, two doublings ✓.)',
        expWrong:{
          B:'Multiplying the exponent by 4 doubles the plot four times a YEAR: at t = 4 it gives 150(2)¹⁶ = 9,830,400 trees. The period goes in the denominator, because 4 years have to produce exactly one doubling.',
          C:'The 4 is how long one doubling takes, not the factor. A base of 4 quadruples the plot every year: 38,400 trees by t = 4.',
          D:'Dropping the /4 makes the plot double every year instead of every 4 years: 2,400 trees at t = 4 instead of 300.'
        },
        tip:'For "multiplied by b every k units of time", write a · b^(t/k). Test it by setting t = k: the exponent has to come out to exactly 1.',
        desmos:'Graph y=150*2^{x/4} and check the point (4, 300): one doubling after 4 years. Compare with y=150*2^x, which is already at 2,400 by x = 4.',
        desmosLatex:['y=150*2^{x/4}','y=150*2^x']
      },
      {
        id:'EGD-07', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Compound interest: reading the rate and the period from the model',
        stem:'The value of a certificate of deposit, in dollars, is modeled by V(t) = 9,500(1.011)^(4t), where t is the number of years after the certificate was opened and no money is added or withdrawn. Which of the following best describes the certificate?',
        choices:{
          A:'It was opened with $9,500 and earns an annual interest rate of 1.1%, compounded quarterly.',
          B:'It was opened with $9,500 and earns an annual interest rate of 11%, compounded quarterly.',
          C:'It was opened with $9,500 and earns an annual interest rate of 4.4%, compounded quarterly.',
          D:'It was opened with $9,500 and earns an annual interest rate of 4.4%, compounded annually.'
        },
        correct:'C',
        expCorrect:'The exponent 4t counts 4 compounding steps per year, so interest is added quarterly and 0.011 is the rate PER QUARTER, that is 1.1%. An annual rate r split into 4 quarters gives r/4 = 0.011, so r = 0.044 = 4.4%. (Check one year: 9,500(1.011)⁴ = $9,924.95, a gain of about 4.47%, which is what quarterly compounding of 4.4% produces.)',
        expWrong:{
          A:'1.1% is the rate for ONE QUARTER, which is what the 0.011 shows. The annual rate is the one that gets split four ways, so it is 4 × 1.1% = 4.4%.',
          B:'0.011 is 1.1%, not 11%: a decimal becomes a percent by multiplying by 100. An 11% annual rate compounded quarterly would give a base of 1.0275.',
          D:'Compounded annually there would be one step per year, so the exponent would be just t and the base would be 1.044. The 4t is exactly what says the compounding happens four times a year.'
        },
        tip:'In P(1 + r/n)^(nt) the n in the exponent and the n under the rate are the SAME number: read the steps per year off the exponent, then multiply the quarterly (or monthly) rate by that n to recover the annual rate.',
        desmos:'Type 0.044/4 → 0.011, which is the base minus 1. Then 9500*1.011^4 → 9924.95, the value after one year.',
        desmosLatex:['0.044/4','9500*1.011^4']
      },
      {
        id:'EGD-08', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Linear or exponential, from a context (fixed amount vs fixed percent)',
        stem:'Two tanks at a water treatment plant each contain 640 liters. Each week, the amount of water in tank H increases by 32 liters, and the amount of water in tank R increases by 5%. Which of the following statements is true?',
        choices:{
          A:'Both tanks gain the same amount each week, because both gain 32 liters in week 1.',
          B:'Both tanks grow exponentially, because the amount in each one keeps increasing.',
          C:'Tank H grows exponentially and tank R grows linearly.',
          D:'Tank H grows linearly and tank R grows exponentially.'
        },
        correct:'D',
        expCorrect:'Tank H adds a fixed AMOUNT, 32 liters, every week: 640, 672, 704, 736 — equal differences, so it is linear. Tank R is multiplied by a fixed FACTOR, 1.05, every week: 640, 672, 705.6, 740.88 — equal ratios, so it is exponential. They agree in week 1 only because 5% of 640 happens to be exactly 32.',
        expWrong:{
          A:'They match in week 1 and then split: in week 2 tank R takes 5% of 672, which is 33.6 liters, while tank H still adds exactly 32. A percent is taken on the NEW amount every time, so the amount added keeps growing.',
          B:'Growing is not the same as growing exponentially. Exponential means multiplied by the same factor each step, and tank H is added to by the same amount each step, which is the definition of linear.',
          C:'Reversed. "Increases by 32 liters" names an amount, which is linear; "increases by 5%" names a multiplier, 1.05, which is exponential.'
        },
        tip:'Read the phrase, not the size of the numbers: "increases by (a number of units)" is linear, and "increases by (a percent)" or "is multiplied by" is exponential. A matching first step proves nothing.',
        desmos:'Graph y=640+32x and y=640(1.05)^x. They meet at x = 0 and again at x = 1 (both 672), and from there the curve stays above the line for good.',
        desmosLatex:['y=640+32x','y=640(1.05)^x']
      },
      {
        id:'EGD-09', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Growth factor from a table, stepping back to the initial value',
        stem:'The table gives three values of x and the corresponding values of g(x) for the exponential function g.' + TBL_G + 'What is the value of g(0)?',
        answer:'8',
        expCorrect:'In an exponential function consecutive outputs have a constant ratio: 98/28 = 3.5 and 343/98 = 3.5, so every step forward in x multiplies g by 3.5. Going one step BACKWARD, from x = 1 to x = 0, divides instead: g(0) = 28/3.5 = 8. (Check: 8, 28, 98, 343 — each is 3.5 times the one before ✓.)',
        tip:'Divide consecutive outputs to get the factor b, then step backward by DIVIDING by b, never by subtracting. In general g(x) = g(0)·b^x, so g(0) = g(1)/b.',
        desmos:'Type 98/28 and 343/98: both give 3.5, so b = 3.5. Then type 28/3.5 to step back to x = 0, and you get 8.',
        desmosLatex:['98/28','343/98','28/3.5']
      },
      {
        id:'EGD-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Interpreting b in a·b^(t/k) with the period and the units',
        stem:'The function u defined by u(t) = 36(1.4)^(t/3) models the number of active users, in thousands, of an app t months after it launched. Which of the following is the best interpretation of 1.4 in this model?',
        choices:{
          A:'The number of users is 1.4 times as great every month.',
          B:'The number of users is 1.4 times as great every 3 months.',
          C:'The number of users increases by 1.4 thousand every 3 months.',
          D:'The number of users increases by 140% every 3 months.'
        },
        correct:'B',
        expCorrect:'The base is spent once for each whole unit of the exponent, and the exponent is t/3, so it takes t = 3 months for the exponent to reach 1. Every 3 months the count is multiplied by 1.4: u(0) = 36 thousand and u(3) = 36(1.4) = 50.4 thousand. (Check u(6) = 36(1.4)² = 70.56 thousand ✓.)',
        expWrong:{
          A:'That is the reading of u(t) = 36(1.4)^t. Dividing the exponent by 3 spreads each multiplication over 3 months, so the monthly factor is 1.4^(1/3) ≈ 1.119, about 11.9% a month.',
          C:'A factor is not an amount. The first 3 months add 50.4 − 36 = 14.4 thousand users, and the next 3 months add more than that, because 1.4 multiplies a bigger number each time.',
          D:'"1.4 times as great" and "140% greater" are different claims: multiplying by 1.4 is an increase of 40%, since 1.4 − 1 = 0.4. A 140% increase means a factor of 2.4, which would take 36 thousand to 86.4 thousand in 3 months.'
        },
        tip:'Two separate reads in a · b^(t/k): the base b says WHAT it is multiplied by, and k says HOW OFTEN. And b is a multiplier, so the percent change is (b − 1)·100%, never b·100%.',
        desmos:'Type 36*1.4 → 50.4, the value at t = 3. Then graph y=36*1.4^{x/3} and confirm the points (3, 50.4) and (6, 70.56).',
        desmosLatex:['36*1.4','y=36*1.4^{x/3}']
      },
      {
        id:'EGD-11', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Percent change over a shorter period than the doubling time',
        stem:'The number of electric buses in the fleet of a city is growing exponentially and doubles every 6 years. According to this model, the number of buses increases by p% over any 2-year period. What is the value of p, to the nearest whole number?',
        answer:'26',
        expCorrect:'Write the model as N(t) = N₀ · 2^(t/6). Over 2 years the factor is 2^(2/6) = 2^(1/3) ≈ 1.2599, which is an increase of about 25.99%, so p = 26. It is not 100/3 ≈ 33, because the three 2-year jumps MULTIPLY rather than add: (1.2599)³ = 2, exactly one doubling ✓, while (1.3333)³ = 2.37, well past double.',
        tip:'To split an exponential change into equal shorter stretches, take a ROOT of the factor, not a fraction of the percent. Cutting one whole period into n equal pieces gives a factor of b^(1/n) per piece.',
        desmos:'Type 2^{1/3} → 1.259921, so each 2-year stretch multiplies the fleet by about 1.26, a 26% increase. Then type 1.259921^3 and it comes back to 2, one full doubling.',
        desmosLatex:['2^{1/3}','1.259921^3']
      }
    ]
  });
})();
