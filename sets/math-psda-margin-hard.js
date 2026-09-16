/* SAT Studio question set — Math: Samples & Margin of Error, Hard & Brutal (SMH-01 to SMH-29) */
/* Solo INFERENCIA desde una muestra: el intervalo, el margen, escalarlo a la
   población y comparar dos estudios. El juicio sobre el DISEÑO del estudio
   (causa contra asociación, selección al azar contra asignación al azar) vive en
   `math-stat-claims.js`. `skillOf()` prueba `pd-claims` ANTES que `pd-margin`,
   así que ni el `skill` ni los primeros 160 caracteres del `stem` pueden llevar
   "randomly selected/assigned", "experiment", "cause", "correlation",
   "generalize" ni "voluntary response" — y tampoco "independent", que se la
   llevaría `pd-prob`. "A random sample of…" sí es seguro. */
(function(){
  window.SAT_SETS.push({
    id: 'math-psda-margin-hard',
    title: 'Samples & Margin of Error — Hard & Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Hard-Module-2 inference from samples: two studies whose plausible ranges overlap, percents scaled up to population counts and back down again, margins that shrink with the square root of the sample size, and interpretations that sound right but describe the wrong thing. The brutal tier chains three steps where neither of the first two is the answer.',
    minutes: 38,
    questions: [
      {
        id:'SMH-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Comparing two reported margin of error intervals',
        stem:'Two polling groups each estimated the percent of Brightwater voters who support a bond for a new library. Group A surveyed a random sample and reported 47% with a margin of error of 4 percentage points. Group B surveyed a different random sample and reported 52% with a margin of error of 3 percentage points. Which statement is best supported by the two reports?',
        choices:{
          A:'Support for the bond is between 49% and 51%, the only percents both reports allow.',
          B:'Group B’s estimate is more accurate than Group A’s, since its margin of error is smaller.',
          C:'One true percent near 50% fits both reports, since 43%–51% and 49%–55% overlap.',
          D:'More than half of Brightwater voters support the bond, since Group B reported 52%.'
        },
        correct:'C',
        expCorrect:'Turn each report into its plausible range before comparing. Group A: 47 − 4 = 43 and 47 + 4 = 51, so 43% to 51%. Group B: 52 − 3 = 49 and 52 + 3 = 55, so 49% to 55%. The two ranges share every percent from 49 to 51, so a single population value such as 50% is plausible under both reports at the same time. (Check: 50 sits inside 43–51 and inside 49–55 ✓.) Overlapping ranges mean the 5-point gap between 47% and 52% is not evidence that the two groups are estimating different things.',
        expWrong:{
          A:'This treats the overlap, 49% to 51%, as a new and tighter plausible range. Each report gives its own range for the population percent; intersecting them is not something the margin of error licenses, and a value like 46% stays plausible under Group A.',
          B:'A smaller margin of error means a more PRECISE estimate, not a more accurate one. Precision is how wide the range is; accuracy is whether the range actually contains the population percent, and neither report can tell you that.',
          D:'This reads 52% as if it were the population percent. Group B’s own range runs from 49% to 55%, and it includes 49% and 50%, so “more than half” is possible but not established.'
        },
        tip:'Never compare two reported percents on their own. Build both ranges (estimate ± margin) first: ranges that share any value are consistent with no difference at all, and only ranges that miss each other completely support a claim that the two populations differ.',
        desmos:'Type 47-4, 47+4, 52-3 and 52+3 to get the two ranges, 43 to 51 and 49 to 55. The values 49, 50 and 51 appear in both, which is the overlap.',
        desmosLatex:['47-4','47+4','52-3','52+3']
      },
      {
        id:'SMH-02', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Greatest plausible count from a reported plausible range',
        stem:'The Redfern Cycling League is made up of 18 clubs, and each club has exactly 250 members. From a random sample of the league’s members, an analyst reported that it is plausible that between 36% and 44% of all league members ride to work at least once a week. Based on that report, what is the greatest number of league members who plausibly ride to work at least once a week?',
        answer:'1980',
        expCorrect:'Two steps, and the first one is not the answer. Population first: 18 clubs × 250 members = 4,500 members in the league. “Greatest” asks for the top of the reported range, 44%, applied to the whole league: 0.44 × 4,500 = 1,980 members. (Check: the bottom end is 0.36 × 4,500 = 1,620, and 1,980 is the larger of the two ✓.) Answer: 1980.',
        tip:'When a plausible range comes as percents, the population total is often hidden one step back. Build the total first, then apply the end of the range the question names: “greatest” takes the high percent, “least” takes the low one.',
        desmos:'Type 18*250 to get 4,500, then 0.44*4500 for the top end, 1,980, and 0.36*4500 for the bottom end, 1,620.',
        desmosLatex:['18*250','0.44*4500','0.36*4500']
      },
      {
        id:'SMH-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'What a margin of error does and does not describe',
        stem:'A research group used a random sample of 1,200 households in Calverton to estimate the mean amount a household spends on groceries in a week. The group reported a sample mean of $142 with a margin of error of $6. Which of the following is the best interpretation of the reported margin of error?',
        choices:{
          A:'About 95% of all Calverton households spend between $136 and $148 on groceries in a week.',
          B:'The mean weekly grocery spending of all Calverton households is plausibly $136 to $148.',
          C:'Every one of the 1,200 sampled households spent between $136 and $148 that week.',
          D:'The mean weekly grocery spending of the 1,200 sampled households is between $136 and $148.'
        },
        correct:'B',
        expCorrect:'The interval is 142 − 6 = 136 up to 142 + 6 = 148 dollars, and it describes exactly one number: the mean weekly grocery spending of ALL Calverton households, which is the quantity the sample was built to estimate. The sample offers $142 as its best guess for that population mean, and the margin of error says how far off that guess could plausibly be. (Check: the margin was reported for the sample MEAN, so the interval is about a mean, not about households one at a time ✓.)',
        expWrong:{
          A:'This hands the interval to individual households. Spending varies far more from household to household than a mean does; the margin of error measures how much a sample MEAN can miss the population mean, not how spread out the households are.',
          C:'The sampled households are data already in hand, and their individual amounts certainly ran wider than $136 to $148. The interval is not a claim about any single household.',
          D:'The mean of the 1,200 sampled households is known exactly: it is $142, the reported sample mean. There is nothing plausible about it, so putting an interval around it would serve no purpose.'
        },
        tip:'A margin of error travels with the statistic it was reported for, and it always points at the POPULATION version of that statistic. Sample mean ± margin estimates the population mean; sample percent ± margin estimates the population percent. It never describes one individual, and never the sample, which is already known.',
        desmos:'Type 142-6 and 142+6 to get the interval, $136 to $148. Notice it is centered on the sample mean, which is exactly what the estimate is built around.',
        desmosLatex:['142-6','142+6']
      },
      {
        id:'SMH-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'How the margin of error changes with sample size',
        stem:'An election office estimated the percent of Northgate residents who hold a library card. Working from a random sample of 400 residents, the office reported a margin of error of 4.2 percentage points. The office now plans to repeat the study with a random sample of 1,600 residents at the same confidence level. Which of the following is the best prediction of the new margin of error?',
        choices:{
          A:'1.05 percentage points',
          B:'4.2 percentage points',
          C:'8.4 percentage points',
          D:'2.1 percentage points'
        },
        correct:'D',
        expCorrect:'A margin of error shrinks with the SQUARE ROOT of the sample size, not with the sample size itself. Going from 400 to 1,600 multiplies the sample by 4, and √4 = 2, so the margin is divided by 2: 4.2 ÷ 2 = 2.1 percentage points. (Check: halving a margin takes four times the data, and 400 × 4 = 1,600 ✓.)',
        expWrong:{
          A:'1.05 divides the margin by 4, the factor the SAMPLE grew by. Only the square root of that factor reaches the margin, so the divisor is 2 and the margin is cut in half, not into quarters.',
          B:'4.2 leaves the margin where it was, as if collecting four times the data changed nothing. At a fixed confidence level, more data always tightens the interval.',
          C:'8.4 doubles the margin. A larger sample makes an estimate more precise, so any answer above 4.2 is moving in the wrong direction.'
        },
        tip:'Margin of error is proportional to 1/√n. Multiply the sample by k and the margin is divided by √k: four times the data halves the margin, nine times the data cuts it to a third.',
        desmos:'Type sqrt(1600/400) to get 2, the factor the margin shrinks by, then 4.2/2 to get 2.1.',
        desmosLatex:['sqrt(1600/400)','4.2/2']
      },
      {
        id:'SMH-05', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Finding the sample size needed for a target margin of error',
        stem:'Working from a random sample of 450 patients, a clinic estimated the percent of its patients who schedule visits online and reported a margin of error of 4.5 percentage points. The clinic wants to repeat the study at the same confidence level and reach a margin of error of 1.5 percentage points. How many patients must the new sample contain?',
        answer:'4050',
        expCorrect:'The margin has to shrink by a factor of 4.5 ÷ 1.5 = 3. Because the margin follows 1/√n, cutting it by 3 takes 3² = 9 times as much data: 9 × 450 = 4,050 patients. (Check: sqrt(4050/450) = √9 = 3, and 4.5 ÷ 3 = 1.5 ✓.) Answer: 4050.',
        tip:'Work the factor, never the difference. If the margin must shrink by a factor of k, the sample grows by a factor of k². Going from 4.5 to 1.5 is a factor of 3, so the sample is multiplied by 9 — not by 3.',
        desmos:'Type 4.5/1.5 to get the factor 3, then 3^2*450 to get 4,050. Confirm with sqrt(4050/450), which returns 3.',
        desmosLatex:['4.5/1.5','3^2*450','sqrt(4050/450)']
      },
      {
        id:'SMH-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Why a small margin of error cannot rescue a poorly drawn sample',
        stem:'The Harlow Transit Authority placed a paper survey in the seat pockets of its 6 a.m. commuter trains and asked riders to drop completed forms in a box by the door. Of the 2,000 forms returned, 88% said the current schedule works well, and the authority reported a margin of error of 1.7 percentage points. Which of the following is the strongest objection to using 88% as an estimate for all Harlow riders?',
        choices:{
          A:'A margin of error of 1.7 points is too small to trust from only 2,000 forms.',
          B:'The riders who returned a form are not a cross section of all riders, and no margin fixes that.',
          C:'The authority should have reported a mean instead of a percent, since schedules are measured in minutes.',
          D:'The margin of error was computed at the wrong confidence level for a sample this large.'
        },
        correct:'B',
        expCorrect:'The 2,000 forms came from people who ride at 6 a.m. AND chose to fill one out — riders who are happy with the current schedule have the most reason to do that, and anyone riding at other hours had no chance of being included at all. A margin of error measures only the luck of the draw INSIDE the group that was sampled; it says nothing about a group drawn from the wrong pool. So 1.7 points is a precise measurement of the wrong quantity: the interval 86.3% to 89.7% describes 6 a.m. form-returners, not all Harlow riders.',
        expWrong:{
          A:'The margin is small precisely BECAUSE 2,000 forms is a lot of data, and that piece of arithmetic is fine. The problem is who those 2,000 people are, not how many of them there were.',
          C:'A percent is the right statistic for a yes-or-no question about the schedule. Switching to a mean would not change which riders filled out the forms.',
          D:'Nothing in the report points to a wrong confidence level, and changing the level only makes the interval wider or narrower. A wider interval built on the wrong pool of riders is still built on the wrong pool.'
        },
        tip:'A margin of error measures sampling luck, never sampling method. When a sample is drawn from a group that is not a cross section of the population — one hour of the day, one location, only the people who chose to answer — the interval is precise about the wrong population, and adding data makes it narrower without making it right.',
        desmos:'Type 88-1.7 and 88+1.7 to see the reported interval, 86.3% to 89.7%. It is a very narrow interval, and it still describes only the riders who returned a form.',
        desmosLatex:['88-1.7','88+1.7']
      },
      {
        id:'SMH-07', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'A claimed value outside the plausible range from a sample proportion',
        stem:'A snack company advertises that 70% of shoppers prefer its cracker to a rival brand. An outside testing group used a random sample of 600 shoppers, found that 64% preferred the company’s cracker, and reported a margin of error of 3.5 percentage points. By how many percentage points does the company’s advertised figure exceed the greatest value in the testing group’s plausible range?',
        answer:'2.5',
        expCorrect:'Build the plausible range first: 64 − 3.5 = 60.5 and 64 + 3.5 = 67.5, so the range runs from 60.5% to 67.5%. The advertised 70% sits above the whole range, and the gap the question asks for is measured from the top end: 70 − 67.5 = 2.5 percentage points. (Check: 67.5 + 2.5 = 70 ✓.) Answer: 2.5.',
        tip:'A claimed value outside the entire plausible range is evidence against the claim; one inside it is consistent with the claim. Either way, measure the gap from the END of the range nearest the claim, never from the sample value in the middle.',
        desmos:'Type 64-3.5 and 64+3.5 for the range, 60.5 to 67.5, then 70-67.5 for the gap, 2.5.',
        desmosLatex:['64-3.5','64+3.5','70-67.5']
      },
      {
        id:'SMH-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Comparing two sample sizes from their margins of error',
        stem:'Two market groups estimated the same percent at the same confidence level. The Ardsley group used a random sample and reported a margin of error of 2 percentage points; the Belmore group used a random sample and reported a margin of error of 6 percentage points. Which of the following best describes how the two sample sizes compare?',
        choices:{
          A:'The Ardsley sample was about 3 times as large as the Belmore sample.',
          B:'The Belmore sample was about 3 times as large as the Ardsley sample.',
          C:'The Belmore sample was about 9 times as large as the Ardsley sample.',
          D:'The Ardsley sample was about 9 times as large as the Belmore sample.'
        },
        correct:'D',
        expCorrect:'A smaller margin comes from a larger sample, so Ardsley, at 2 points against Belmore’s 6, is the bigger study. The margin follows 1/√n, so a margin 6 ÷ 2 = 3 times smaller needs 3² = 9 times the data. (Check: if Belmore surveyed 500 people, Ardsley surveyed 4,500, and sqrt(4500/500) = 3, which divides 6 by 3 to give 2 ✓.)',
        expWrong:{
          A:'This uses the ratio of the margins, 3, as the ratio of the sample sizes. Sample size moves with the SQUARE of that ratio, so the factor is 3² = 9.',
          B:'This has the direction backwards. More data makes an estimate more precise, so the group with the smaller margin, Ardsley, is the one with the larger sample.',
          C:'The factor 9 is right but attached to the wrong group. Belmore reported the LARGER margin, which means Belmore worked with less data, not more.'
        },
        tip:'Margin and sample size move in opposite directions and at different rates: a margin ratio of r means a sample ratio of r². Settle the direction first (smaller margin = bigger sample), then square the ratio.',
        desmos:'Type (6/2)^2 to get 9, the factor between the sample sizes. Test it: sqrt(4500/500) returns 3, and 6/3 = 2.',
        desmosLatex:['(6/2)^2','sqrt(4500/500)']
      },
      {
        id:'SMH-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Using a sample mean and its margin of error with a unit change',
        stem:'A campus study used a random sample of 250 students to estimate the mean time a student spends commuting each day. The study reported a sample mean of 46 minutes with a margin of error of 5 minutes. Based on the study, which of the following is the greatest plausible value, in hours, for the mean daily commuting time of all students on campus?',
        choices:{A:'0.68', B:'0.77', C:'0.85', D:'51'},
        correct:'C',
        expCorrect:'Apply the margin before the unit change. The greatest plausible mean is 46 + 5 = 51 minutes, and converting gives 51 ÷ 60 = 0.85 hours. (Check: 0.85 × 60 = 51 ✓.)',
        expWrong:{
          A:'0.68 is (46 − 5) ÷ 60 = 41 ÷ 60, the LEAST plausible value. The question asks for the top of the range, so the margin is added, not subtracted.',
          B:'0.77 is 46 ÷ 60, the sample mean converted with the margin of error dropped. The greatest plausible value has to sit 5 minutes above the sample mean before any conversion.',
          D:'51 is the greatest plausible value in MINUTES, the next-to-last step. The question asks for hours, so it still has to be divided by 60.'
        },
        tip:'When the data and the question use different units, do the statistics first and convert last. Adding a margin in minutes and then dividing by 60 is safe; converting first invites dividing the margin by the wrong number.',
        desmos:'Type (46+5)/60 to get 0.85 hours, then compare with (46-5)/60 ≈ 0.683 and 46/60 ≈ 0.767.',
        desmosLatex:['(46+5)/60','(46-5)/60','46/60']
      },
      {
        id:'SMH-10', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Using a sample mean to estimate the total for a population',
        stem:'A warehouse holds 7,500 sealed boxes of the same product. A random sample of 60 boxes was weighed, giving a sample mean of 2.4 kilograms with a margin of error of 0.1 kilogram. Based on that sample, what is the least plausible value, in kilograms, for the total weight of all 7,500 boxes?',
        answer:'17250',
        expCorrect:'The margin goes on the MEAN first: the least plausible mean weight is 2.4 − 0.1 = 2.3 kilograms per box. A total is a mean times a count, and the count here is the whole warehouse, not the 60 boxes weighed: 2.3 × 7,500 = 17,250 kilograms. (Check: the greatest plausible total is 2.5 × 7,500 = 18,750, and 17,250 is the lower end ✓.) Answer: 17250.',
        tip:'Population total = population size × population mean. Put the margin on the mean, then multiply by the size of the population the sample stands for. Multiplying by the sample size instead produces a number about the sample, which was never the question.',
        desmos:'Type (2.4-0.1)*7500 to get 17,250 and (2.4+0.1)*7500 to get 18,750. The plausible total runs between those two numbers.',
        desmosLatex:['(2.4-0.1)*7500','(2.4+0.1)*7500']
      },
      {
        id:'SMH-11', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Which change shrinks a margin of error',
        stem:'A county reported that, based on a random sample of 500 households, it is plausible that between 41% and 49% of its households own a pressure washer. The county wants a narrower plausible range for the same population. Which change, made at the same confidence level, would do that?',
        choices:{
          A:'Surveying 2,000 households instead of 500.',
          B:'Reporting the result at a 99% confidence level rather than at 95%.',
          C:'Reporting the range in counts of households rather than in percents.',
          D:'Surveying the same 500 households a second time and averaging the two results.'
        },
        correct:'A',
        expCorrect:'The reported range is 41% to 49%, which is 45% ± 4 points. Only one of the four changes brings in new information about the population: surveying 2,000 households instead of 500 multiplies the sample by 4, and since the margin follows 1/√n it is divided by √4 = 2. The new margin would be about 2 points, giving roughly 43% to 47%. (Check: 45 − 2 = 43 and 45 + 2 = 47, a range half as wide as the original ✓.)',
        expWrong:{
          B:'Raising the confidence level widens the interval instead of narrowing it. Being surer that the range captures the population percent is paid for in width, so the 99% range contains the whole 95% range.',
          C:'Units are not precision. 41% to 49% of the county’s households is exactly as wide as the same range written in households; every number is simply multiplied by the population size.',
          D:'Asking the same 500 households again brings in no new households. The estimate would barely move, and the margin of error, which depends on how many DIFFERENT people were sampled, would not shrink at all.'
        },
        tip:'Only two things move a margin of error: how many different individuals were sampled (more shrinks it, following 1/√n) and the confidence level (higher widens it). Rewriting, rescaling or re-asking the same people moves nothing.',
        desmos:'Type (41+49)/2 to get the estimate, 45, and (49-41)/2 to get the margin, 4. Then sqrt(2000/500) = 2, so the new margin would be about 4/2 = 2.',
        desmosLatex:['(41+49)/2','(49-41)/2','sqrt(2000/500)','4/2']
      },
      {
        id:'SMH-12', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Recovering a sample count from a reported plausible range',
        stem:'A publisher reported that, based on a random sample of 450 of its subscribers, it is plausible that between 26% and 34% of all its subscribers read on a tablet. How many of the 450 sampled subscribers reported that they read on a tablet?',
        answer:'135',
        expCorrect:'A plausible range is the sample value plus or minus the margin, so the sample percent is the midpoint: (26 + 34) ÷ 2 = 30%. That percent came from the 450 people surveyed, so the count is 0.30 × 450 = 135 subscribers. (Check: the margin is (34 − 26) ÷ 2 = 4, and 30 − 4 = 26 while 30 + 4 = 34 ✓.) Answer: 135.',
        tip:'Two different groups live in these problems. The midpoint percent is a fact about the SAMPLE and is applied to the sample size; the range as a whole describes the population. When the question asks about the people surveyed, the population total is a distractor.',
        desmos:'Type (26+34)/2 to get 30, then 0.30*450 to get 135. The margin, (34-26)/2 = 4, is what rebuilds 26 and 34 from 30.',
        desmosLatex:['(26+34)/2','0.30*450','(34-26)/2']
      },
      {
        id:'SMH-13', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'When two plausible ranges support a claim of a difference',
        stem:'Two neighborhoods were studied with separate random samples at the same confidence level. In Fairhaven the estimated percent of homes with a backup generator was 31% with a margin of error of 3 percentage points; in Milbrook it was 42% with a margin of error of 4 percentage points. Which statement is best supported?',
        choices:{
          A:'The two plausible ranges do not share a single percent, so the two neighborhoods plausibly differ in this respect.',
          B:'The two ranges overlap near 36%, so no difference between the neighborhoods is supported.',
          C:'Milbrook has exactly 11 percentage points more generator owners than Fairhaven.',
          D:'The difference is not supported, because Milbrook’s margin of error is the larger one.'
        },
        correct:'A',
        expCorrect:'Build both ranges: Fairhaven runs 31 − 3 = 28 up to 31 + 3 = 34, and Milbrook runs 42 − 4 = 38 up to 42 + 4 = 46. The highest percent plausible for Fairhaven is 34 and the lowest plausible for Milbrook is 38, so no single percent is plausible for both neighborhoods. (Check: 34 &lt; 38, so the ranges are separated by 4 points with nothing in between ✓.) Separated ranges are exactly what supports a claim that two populations really differ.',
        expWrong:{
          B:'Neither range reaches 36%: Fairhaven stops at 34 and Milbrook starts at 38. Reading an overlap that is not there flips the conclusion to its opposite.',
          C:'11 points is the gap between the two sample estimates, 42 − 31, and each of those is only a best guess. Working from the endpoints, the plausible gap runs from 38 − 34 = 4 points up to 46 − 28 = 18 points.',
          D:'A larger margin means a less precise estimate, not a canceled comparison. Even with the wider Milbrook range, the two ranges still fail to touch, and that is the whole test.'
        },
        tip:'Compare the ENDS, not the centers: the top of the lower range against the bottom of the upper one. Ranges that miss each other support a difference; ranges that share any value do not.',
        desmos:'Type 31-3, 31+3, 42-4 and 42+4 to get 28 to 34 and 38 to 46. The empty gap between 34 and 38 is what makes the difference plausible.',
        desmosLatex:['31-3','31+3','42-4','42+4']
      },
      {
        id:'SMH-14', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'What stays fixed when a confidence interval is recomputed',
        stem:'From a random sample of 800 shoppers, an analyst reported that a plausible range for the percent of all shoppers who use a store app is 57% to 65%. The analyst then recomputes the range from the same 800 responses at a higher confidence level. Which of the following must be true of the new range?',
        choices:{
          A:'Centered at 61% and wider than 8 points.',
          B:'Centered at 61% and narrower than the current 8-point range.',
          C:'Centered above 61%, because higher confidence shifts the estimate up.',
          D:'Still 57% to 65%, because the 800 responses did not change.'
        },
        correct:'A',
        expCorrect:'Split the range into center and margin: the center is (57 + 65) ÷ 2 = 61%, and the margin is (65 − 57) ÷ 2 = 4 points. Changing the confidence level does not touch the data, so the sample percent stays at 61% and the new range is still centered there. Higher confidence means casting a wider net around that same center, so the new margin is more than 4 points and the range is wider than 65 − 57 = 8 points. (Check: 61 ± 5 gives 56% to 66%, still centered at 61 and wider than 8 points ✓.)',
        expWrong:{
          B:'Narrower would mean a smaller margin, and a smaller margin comes from MORE data, not from more confidence. With the same 800 responses, extra confidence is paid for with extra width.',
          C:'The center is the sample percent, and the sample percent is a fact about the 800 responses: 61%. The confidence level moves the width of the range, never its center.',
          D:'The interval is built from the data AND the confidence level. Hold the data fixed and raise the level, and the margin changes, so the endpoints have to move outward.'
        },
        tip:'Split every interval into center and margin. The center is the sample statistic and only new data move it; the margin carries both the sample size and the confidence level. Higher confidence with the same data: same center, bigger margin.',
        desmos:'Type (57+65)/2 to get the center, 61, and (65-57)/2 to get the margin, 4. A higher confidence level keeps 61 and replaces 4 with something bigger, for example 61-5 and 61+5.',
        desmosLatex:['(57+65)/2','(65-57)/2','61-5','61+5']
      },
      {
        id:'SMH-15', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Recovering a population size from an estimated number and a sample proportion',
        stem:'A cooperative surveyed a random sample of 240 of its members and found that 60 of them grow herbs indoors. Applying the sample proportion to its whole membership, the cooperative estimated that 3,000 of its members grow herbs indoors. How many members does the cooperative have?',
        choices:{A:'750', B:'4,000', C:'9,000', D:'12,000'},
        correct:'D',
        expCorrect:'The sample proportion is 60 ÷ 240 = 0.25. The cooperative applied that same proportion to its whole membership, so 0.25 × (members) = 3,000, which gives members = 3,000 ÷ 0.25 = 12,000. (Check: 0.25 × 12,000 = 3,000, and 60/240 = 3,000/12,000, both equal to 0.25 ✓.)',
        expWrong:{
          A:'750 is 3,000 × 0.25, multiplying by the proportion instead of dividing by it. The 3,000 is already the part, so multiplying by a proportion again takes a part of a part.',
          B:'4,000 divides by 0.75, the proportion who do NOT grow herbs indoors. The 3,000 estimate belongs to the 25% group, so it has to be divided by 0.25.',
          C:'9,000 is the estimated number of members who do not grow herbs indoors, 12,000 − 3,000. It is a real quantity in this problem, just not the one asked for.'
        },
        tip:'Write the relationship as proportion × population = part, then solve for whatever is missing. Dividing the part by the proportion recovers the population; dividing by the complement answers a different question.',
        desmos:'Type 60/240 to get 0.25, then 3000/0.25 to get 12,000. Compare with 3000/0.75 = 4,000, which uses the wrong group.',
        desmosLatex:['60/240','3000/0.25','3000/0.75']
      },
      {
        id:'SMH-16', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Rebuilding a plausible range from one endpoint and the sample proportion',
        stem:'A district estimated from a random sample that 38% of its teachers use a certain software weekly. The report states that the lowest plausible percent for all teachers in the district is 33.5%. If the range was built as the sample percent plus or minus a margin of error, what is the highest plausible percent?',
        choices:{A:'42.5%', B:'41.5%', C:'47%', D:'4.5%'},
        correct:'A',
        expCorrect:'The range is symmetric about the sample percent, so the margin is the distance from the center to either end: 38 − 33.5 = 4.5 percentage points. The high end sits that same 4.5 points above the center: 38 + 4.5 = 42.5%. (Check: the full width is 42.5 − 33.5 = 9, exactly twice the margin ✓.)',
        expWrong:{
          B:'41.5% uses a margin of 3.5 points. The distance from 38 down to 33.5 is 4.5, not 3.5 — a tenth of a point here moves the endpoint by a whole point.',
          C:'47% adds 9 points, the full WIDTH of the range, instead of the margin. The margin is half the width, so it is added once, not twice.',
          D:'4.5% is the margin of error itself, the intermediate step. The question asks for the highest plausible percent, which is the center plus that margin.'
        },
        tip:'An interval built as estimate ± margin is symmetric: center − low = high − center. Given any two of {low, center, high}, the third follows, and the margin is always half the total width.',
        desmos:'Type 38-33.5 to get the margin, 4.5, then 38+4.5 to get 42.5. Check the width with 42.5-33.5, which gives 9, twice the margin.',
        desmosLatex:['38-33.5','38+4.5','42.5-33.5']
      },
      {
        id:'SMH-17', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Reading a confidence interval without overstating it',
        stem:'A statewide report says that, based on a random sample of 1,500 drivers, a 95% confidence interval for the percent of all drivers in the state who have used a car-sharing service runs from 18% to 24%. Which of the following is the best reading of that report?',
        choices:{
          A:'Exactly 95% of the 1,500 sampled drivers gave an answer between 18% and 24%.',
          B:'The percent of all state drivers who have used such a service is plausibly 18% to 24%.',
          C:'At least 95% of all state drivers have used a car-sharing service between 18 and 24 times.',
          D:'The method produces an interval that misses the state percent 95% of the time.'
        },
        correct:'B',
        expCorrect:'The interval estimates one number: the percent of all drivers in the state who have used a car-sharing service. The sample put that percent at 21%, the midpoint of 18 and 24, and the 3-point margin says how far the estimate could plausibly be from the truth. So the honest reading is that the state percent is plausibly somewhere from 18% to 24%. (Check: (18 + 24)/2 = 21 and (24 − 18)/2 = 3, so the report is 21% ± 3 ✓.)',
        expWrong:{
          A:'The 95% is a confidence level, a property of the METHOD, not a count of respondents. Each of the 1,500 drivers answered yes or no, not with a percent, so no share of them can fall inside 18% to 24%.',
          C:'This reads the percents as a number of trips. The 18 and the 24 are percents of drivers, and the study asked whether a driver has ever used the service, not how many times.',
          D:'The 95% describes how often the method CAPTURES the population percent, not how often it misses it. A higher confidence level means a better capture rate, bought with a wider interval.'
        },
        tip:'A confidence interval says one thing: where the POPULATION value plausibly sits. The confidence level describes the long-run capture rate of the method, never a share of the people surveyed and never a share of the population.',
        desmos:'Type (18+24)/2 to get 21, the sample percent, and (24-18)/2 to get 3, the margin of error. The report is 21% ± 3.',
        desmosLatex:['(18+24)/2','(24-18)/2']
      },
      {
        id:'SMH-18', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Comparing two plausible ranges after scaling each to its own population',
        stem:'Two towns were studied with separate random samples at the same confidence level. Ashford has 8,000 adults, and its estimate for the percent who hold a first-aid certificate was 22% with a margin of error of 2.5 percentage points. Brill has 5,000 adults, with an estimate of 28% and a margin of error of 3 percentage points. Which statement is best supported?',
        choices:{
          A:'Brill plausibly has more certified adults than Ashford, since its percent is higher.',
          B:'The two towns plausibly have the same number of certified adults, since the count ranges overlap.',
          C:'Nothing about counts follows, because the two margins of error are different sizes.',
          D:'Ashford plausibly has more certified adults than Brill, even though its percent is lower.'
        },
        correct:'D',
        expCorrect:'Percents cannot be compared across towns of different sizes, so scale each range to its own population. Ashford: 22 ± 2.5 gives 19.5% to 24.5%, and 0.195 × 8,000 = 1,560 up to 0.245 × 8,000 = 1,960 certified adults. Brill: 28 ± 3 gives 25% to 31%, and 0.25 × 5,000 = 1,250 up to 0.31 × 5,000 = 1,550. The lowest count plausible for Ashford, 1,560, sits above the highest count plausible for Brill, 1,550, so Ashford plausibly has more certified adults. (Check: 1,550 &lt; 1,560, so the two count ranges share no value at all ✓.) Brill has the higher rate; Ashford has the bigger town, and here the town size wins.',
        expWrong:{
          A:'This compares percents and stops there. A higher rate in a smaller town need not mean more people: even 31% of 5,000 is only 1,550, below the lowest count plausible for Ashford.',
          B:'The count ranges are 1,560 to 1,960 and 1,250 to 1,550. They come close, but 1,550 falls just below 1,560, so they share nothing and “the same number” is not plausible.',
          C:'Different margins are normal and do not block a comparison. Each margin was used to build its own range, and once both ranges are in counts they compare directly.'
        },
        tip:'A percent is a rate; a count is a rate times a population. Before comparing two groups of different sizes, convert every endpoint to counts using ITS OWN population total — the group with the higher percent is often not the group with the higher count.',
        desmos:'Type 0.195*8000 and 0.245*8000 for Ashford, 1,560 to 1,960, then 0.25*5000 and 0.31*5000 for Brill, 1,250 to 1,550. The two ranges just barely miss each other.',
        desmosLatex:['0.195*8000','0.245*8000','0.25*5000','0.31*5000']
      },
      {
        id:'SMH-19', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'From a plausible range to a population count and a claimed figure',
        stem:'A union with 16,500 members reported that, from a random sample of its members, it is plausible that between 54% and 62% of all members commute by car. A newsletter then printed the figure 10,500 members commute by car. By how many members does the newsletter’s figure exceed the greatest plausible number of members who commute by car?',
        answer:'270',
        expCorrect:'Three steps, and neither of the first two is the answer. The range is 54% to 62%, so the greatest plausible percent is 62%. Scale that to the union, not to the sample: 0.62 × 16,500 = 10,230 members. The newsletter printed 10,500, so it overshoots the top of the plausible count by 10,500 − 10,230 = 270 members. (Check: 10,230 + 270 = 10,500 ✓, and the plausible count runs from 0.54 × 16,500 = 8,910 up to 10,230, so 10,500 falls outside it.) Answer: 270.',
        tip:'When a printed figure is compared with a sample, put both in the same units first. The figure is in people, so the percent range has to be scaled to people, and the comparison is always against the nearest endpoint, never against the midpoint.',
        desmos:'Type 0.62*16500 to get 10,230 and 0.54*16500 to get 8,910, the plausible count range. Then 10500-10230 gives 270.',
        desmosLatex:['0.62*16500','0.54*16500','10500-10230']
      },
      {
        id:'SMH-20', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'How many more people a target margin of error requires',
        stem:'A regional survey used a random sample of 640 residents and reported a margin of error of 3.6 percentage points. The organizers want to repeat the study at the same confidence level with a margin of error of 1.2 percentage points. How many ADDITIONAL residents must be surveyed, compared with the first study?',
        choices:{A:'1,280', B:'1,920', C:'5,120', D:'5,760'},
        correct:'C',
        expCorrect:'The margin must shrink by a factor of 3.6 ÷ 1.2 = 3, and because the margin follows 1/√n the sample must grow by 3² = 9: 9 × 640 = 5,760 residents in the new study. The question asks for ADDITIONAL residents, so subtract the ones already surveyed: 5,760 − 640 = 5,120. (Check: sqrt(5760/640) = √9 = 3, and 3.6 ÷ 3 = 1.2 ✓.)',
        expWrong:{
          A:'1,280 grows the sample by the factor 3 instead of 3², reaching 1,920, and then subtracts the original 640. Tripling the data only divides the margin by √3 ≈ 1.73, which lands near 2.1 points.',
          B:'1,920 is that same un-squared total, 3 × 640, reported as though it were the answer. It misses twice: the factor should be 9, and the question asks for the extra people rather than the new total.',
          D:'5,760 is the correct SIZE of the new sample, which is the next-to-last step. The 640 residents already surveyed have to come off before answering.'
        },
        tip:'Two traps stack here: square the margin ratio to get the sample ratio, then read whether the question wants the new total or only the extra people. Circle the word “additional” before starting the arithmetic.',
        desmos:'Type (3.6/1.2)^2 to get 9, then 9*640 to get 5,760, and finally 5760-640 to get 5,120.',
        desmosLatex:['(3.6/1.2)^2','9*640','5760-640']
      },
      {
        id:'SMH-21', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Predicting a margin of error for a different sample size',
        stem:'A random sample of 200 club members produced an estimate with a margin of error of 6.0 percentage points. At the same confidence level, a second study will use a random sample of 1,800 club members. Which of the following is closest to the margin of error of the second study?',
        choices:{
          A:'0.67 percentage points',
          B:'2.0 percentage points',
          C:'3.0 percentage points',
          D:'18.0 percentage points'
        },
        correct:'B',
        expCorrect:'The sample grows by 1,800 ÷ 200 = 9, and a margin of error is proportional to 1/√n, so it is divided by √9 = 3: 6.0 ÷ 3 = 2.0 percentage points. (Check: going back from 2.0 to 6.0 would mean dividing the sample by 9, and 1,800 ÷ 9 = 200 ✓.)',
        expWrong:{
          A:'0.67 divides by 9, the factor the SAMPLE grew by. Only the square root of that factor reaches the margin, so the divisor is 3.',
          C:'3.0 halves the margin, which is the reflex answer whenever a sample gets bigger. Halving corresponds to four times the data; here the data went up nine times, so the margin drops further than that.',
          D:'18.0 multiplies by 3 instead of dividing. More data cannot make an estimate less precise, so any answer above 6.0 is out before the arithmetic starts.'
        },
        tip:'Write it as new margin = old margin ÷ sqrt(new n ÷ old n). The direction check is free: a bigger sample must give a smaller margin, so an answer larger than the original is wrong on sight.',
        desmos:'Type sqrt(1800/200) to get 3, then 6/3 to get 2.0. Compare with 6/9 ≈ 0.67, which divides by the sample factor instead of its square root.',
        desmosLatex:['sqrt(1800/200)','6/3','6/9']
      },
      {
        id:'SMH-22', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Whether two plausible ranges of the same population show a change',
        stem:'A library surveyed a random sample of its 24,000 cardholders in 2023 and again in 2026, using the same method both times. The 2023 report said it is plausible that between 41% and 47% of cardholders borrow audiobooks; the 2026 report said between 45% and 53%. Which conclusion is best supported?',
        choices:{
          A:'Audiobook borrowing rose, since the 2026 estimate of 49% is above the 2023 estimate of 44%.',
          B:'Audiobook borrowing rose by exactly 5 percentage points between the two reports.',
          C:'The 2026 report is less reliable, since its range is 8 points wide against the 2023 range of 6.',
          D:'The reports are consistent with no change, since a rate such as 46% is plausible in both years.'
        },
        correct:'D',
        expCorrect:'Read the center of each range: 2023 is (41 + 47)/2 = 44% with a margin of 3, and 2026 is (45 + 53)/2 = 49% with a margin of 4. The two ranges share every rate from 45% to 47%, so one unchanged rate — 46%, say — is plausible under both reports at once. (Check: 46 sits inside 41–47 and inside 45–53 ✓.) With overlapping ranges, the 5-point gap between the two estimates is not enough to establish that anything changed.',
        expWrong:{
          A:'This compares the two centers and ignores the margins attached to them. Each center is a best guess with 3 or 4 points of slack on either side, and that slack is wide enough for the two years to be the same.',
          B:'5 points is the gap between the two best guesses, 49 − 44, not a measured change. From the endpoints, the plausible change runs from 45 − 47 = −2 points up to 53 − 41 = 12 points, a span that even includes a decrease.',
          C:'A wider range means a less precise estimate, not an unreliable one; usually it just means fewer responses that year. Width is also exactly what creates the overlap, so it is part of the answer rather than an objection to it.'
        },
        tip:'Two reports on the same population at different times follow the rule for two different groups: build both ranges and look for shared values. Overlap means no change is still plausible, and the plausible change runs from (new low − old high) to (new high − old low).',
        desmos:'Type (41+47)/2 and (45+53)/2 to get the centers, 44 and 49. Then 45-47 = -2 and 53-41 = 12 bracket the plausible change, and that bracket contains 0.',
        desmosLatex:['(41+47)/2','(45+53)/2','45-47','53-41']
      },
      {
        id:'SMH-23', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'The overlap of two plausible ranges built from margins of error',
        stem:'Two research teams estimated the percent of Gullwing Harbor boat owners who carry a marine radio. Team One used a random sample and reported 61% with a margin of error of 4.5 percentage points. Team Two used a random sample and reported 66% with a margin of error of 2.5 percentage points. What is the width, in percentage points, of the overlap of the two reported ranges?',
        answer:'2',
        expCorrect:'Build both ranges: Team One runs 61 − 4.5 = 56.5 up to 61 + 4.5 = 65.5; Team Two runs 66 − 2.5 = 63.5 up to 66 + 2.5 = 68.5. The overlap starts at the LARGER of the two low ends, 63.5, and stops at the SMALLER of the two high ends, 65.5. Width = 65.5 − 63.5 = 2 percentage points. (Check: 64% lies in both ranges, while 63% lies only in Team One’s and 66% only in Team Two’s ✓.) Answer: 2.',
        tip:'The overlap of two intervals runs from the larger low end to the smaller high end. If that start comes out above that stop, the intervals do not overlap at all — and a negative width is the signal that the two estimates support a real difference.',
        desmos:'Type 61-4.5, 61+4.5, 66-2.5 and 66+2.5 to get 56.5 to 65.5 and 63.5 to 68.5. Then 65.5-63.5 gives the overlap width, 2.',
        desmosLatex:['61-4.5','61+4.5','66-2.5','66+2.5','65.5-63.5']
      },
      {
        id:'SMH-24', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'A sample mean with a margin of error scaled to a population total',
        stem:'A campus has 4,800 students. A random sample of 150 students recorded how many minutes each spent in the dining hall on Monday, giving a sample mean of 52 minutes with a margin of error of 4 minutes. Which of the following is closest to the greatest plausible value, in HOURS, for the total time all 4,800 students spent in the dining hall that day?',
        choices:{A:'3,840 hours', B:'4,160 hours', C:'4,480 hours', D:'268,800 hours'},
        correct:'C',
        expCorrect:'Three steps, in order. (1) Margin on the mean: the greatest plausible mean is 52 + 4 = 56 minutes per student. (2) Scale to the population, not to the sample: 56 × 4,800 = 268,800 minutes. (3) Convert: 268,800 ÷ 60 = 4,480 hours. (Check: 4,480 × 60 = 268,800 minutes, and 268,800 ÷ 4,800 = 56 minutes per student ✓.)',
        expWrong:{
          A:'3,840 hours uses 52 − 4 = 48 minutes, the LEAST plausible mean. “Greatest” takes the top of the range, so the margin is added.',
          B:'4,160 hours is 52 × 4,800 ÷ 60, the estimate with the margin of error thrown away. The greatest plausible total has to sit above the estimated total.',
          D:'268,800 is the total in MINUTES: the right quantity, one conversion too early. Hours need a division by 60.'
        },
        tip:'Order the operations and label every intermediate number with its unit: margin first, then multiply by the population size, then convert. A number that is right in minutes and asked for in hours is the most common way to lose one of these.',
        desmos:'Type (52+4)*4800 to get 268,800 minutes, then (52+4)*4800/60 for 4,480 hours. Compare with 52*4800/60 = 4,160, the version with no margin.',
        desmosLatex:['(52+4)*4800','(52+4)*4800/60','52*4800/60']
      },
      {
        id:'SMH-25', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Sample size needed for a target plausible range',
        stem:'From a random sample of 360 households, a utility reported that a plausible range for the percent of households with a smart thermostat is 33% to 45%. At the same confidence level, the utility now wants a plausible range exactly 4 percentage points wide. How many households must the new sample contain?',
        answer:'3240',
        expCorrect:'Turn both ranges into margins first. The current range is 45 − 33 = 12 points wide, so its margin is 12 ÷ 2 = 6 points; a 4-point range means a margin of 4 ÷ 2 = 2 points. The margin must shrink by a factor of 6 ÷ 2 = 3, so the sample grows by 3² = 9: 9 × 360 = 3,240 households. (Check: sqrt(3240/360) = √9 = 3, and 6 ÷ 3 = 2, which gives a range 2 × 2 = 4 points wide ✓.) Answer: 3240.',
        tip:'Width is twice the margin, so convert both ranges to margins before taking any ratio, and never mix a width with a margin inside the same fraction. Then square the ratio to get the factor for the sample size.',
        desmos:'Type (45-33)/2 to get the current margin, 6, and 4/2 to get the target margin, 2. Then (6/2)^2*360 gives 3,240.',
        desmosLatex:['(45-33)/2','(6/2)^2*360','sqrt(3240/360)']
      },
      {
        id:'SMH-26', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Choosing between a precise margin of error and a sound sample',
        stem:'Two estimates of the percent of Wexford households that own a generator were produced in the same week. Study P asked 5,000 households that had posted on a neighborhood weather forum and reported 38% with a margin of error of 1.3 percentage points. Study Q used a random sample of 400 households from the full municipal address list and reported 26% with a margin of error of 4.9 percentage points. Which estimate gives the better basis for a statement about all Wexford households, and why?',
        choices:{
          A:'Study P, because its margin of error is much smaller and its sample is far larger.',
          B:'Study P, because 5,000 households cannot all have come from the same forum.',
          C:'Study Q, because its households were drawn from a list that covers every household in the municipality.',
          D:'Study Q, because a wider margin of error always signals a more careful study.'
        },
        correct:'C',
        expCorrect:'Study P’s 5,000 households all came from one weather forum, so people most interested in storms and outages are heavily over-represented and everyone not on the forum had no chance of being included. Its interval, 38 ± 1.3 or 36.7% to 39.3%, is a very precise measurement of forum posters rather than of Wexford. Study Q drew from the full address list, so its 400 households stand in for the municipality; its interval, 26 ± 4.9 or 21.1% to 30.9%, is wide but it is about the right group. (Check: adding more forum posters would push P’s margin toward zero without moving it any closer to the Wexford percent ✓.)',
        expWrong:{
          A:'Size and precision are not the same thing as being about the right population. A margin of error measures only the luck of the draw inside the group sampled, so 1.3 points describes forum posters with great precision.',
          B:'Nothing stops 5,000 households from sharing one source — that is exactly what the study describes. How many households answered says nothing about where they came from.',
          D:'A wide margin is not a virtue; it simply means fewer households were surveyed. Study Q is the better basis despite its wider margin, not because of it.'
        },
        tip:'Judge a sample in two separate steps: first WHO could have been chosen (the pool has to cover the population), then HOW MANY were chosen (which sets the margin). A sample from the wrong pool cannot be repaired by adding people — the margin shrinks while the target stays wrong.',
        desmos:'Type 38-1.3 and 38+1.3 for Study P, 36.7 to 39.3, then 26-4.9 and 26+4.9 for Study Q, 21.1 to 30.9. The narrow interval is the one you should not use.',
        desmosLatex:['38-1.3','38+1.3','26-4.9','26+4.9']
      },
      {
        id:'SMH-27', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Using a sample mean to estimate the total spending of a population',
        stem:'A festival expects 18,000 attendees this year. Organizers used a random sample of 240 attendees at last year’s festival and found a sample mean of $27.50 spent on food, with a margin of error of $1.20. Using the least plausible mean, what is the least plausible value, in dollars, of the total spent on food by 18,000 attendees?',
        answer:'473400',
        expCorrect:'Margin on the mean first: 27.50 − 1.20 = $26.30 per attendee is the least plausible mean. A total is that mean times the number of people it applies to, and that number is the 18,000 expected attendees, not the 240 surveyed: 26.30 × 18,000 = $473,400. (Check: 473,400 ÷ 18,000 = 26.30 ✓, and the greatest plausible total is 28.70 × 18,000 = $516,600, so 473,400 is the lower end.) Answer: 473400.',
        tip:'Estimated total = population size × (sample mean ± margin). The sample size is used only to produce the mean and the margin; it never belongs in the multiplication that builds the total.',
        desmos:'Type (27.50-1.20)*18000 to get 473,400 and (27.50+1.20)*18000 to get 516,600. Dividing 473400/18000 returns 26.30, which confirms the mean used.',
        desmosLatex:['(27.50-1.20)*18000','(27.50+1.20)*18000','473400/18000']
      },
      {
        id:'SMH-28', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Which sample size reaches a required margin of error',
        stem:'A quality office reported a margin of error of 2.8 percentage points from a random sample of 500 items. A new contract requires a margin of error of no more than 0.7 percentage points at the same confidence level. What is the smallest sample size that meets the requirement?',
        choices:{A:'1,000', B:'2,000', C:'8,000', D:'125'},
        correct:'C',
        expCorrect:'The margin has to go from 2.8 down to 0.7, a factor of 2.8 ÷ 0.7 = 4. Because the margin follows 1/√n, cutting it by 4 takes 4² = 16 times the data: 16 × 500 = 8,000 items. (Check: sqrt(8000/500) = √16 = 4, and 2.8 ÷ 4 = 0.7 ✓.)',
        expWrong:{
          A:'1,000 multiplies by √4 = 2 instead of by 4² = 16. The square root belongs on the sample side of the relationship, so when you solve for the sample size it shows up as a square.',
          B:'2,000 multiplies by the margin ratio 4 itself. Four times the data divides the margin by √4 = 2, reaching 1.4 points, which still misses the contract.',
          D:'125 divides the sample by 4. A smaller sample makes the margin larger, not smaller: 125 items would push the margin up to about 5.6 points.'
        },
        tip:'Set it up as new margin = old margin ÷ sqrt(new n ÷ old n), then solve: new n = old n × (old margin ÷ new margin)². A requirement phrased as “no more than” always rounds the sample UP.',
        desmos:'Type (2.8/0.7)^2 to get 16, then 16*500 to get 8,000. Test a wrong path: 4*500 = 2,000 leaves 2.8/sqrt(4) = 1.4, still above 0.7.',
        desmosLatex:['(2.8/0.7)^2','16*500','2.8/sqrt(4)']
      },
      {
        id:'SMH-29', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'What follows when a target value lies outside the plausible range',
        stem:'A manufacturer states that at least 90% of its sensors last five years. A testing lab used a random sample of 1,000 sensors from the production line and found that 86% lasted five years, with a margin of error of 1.8 percentage points. Which statement is best supported by the lab’s result?',
        choices:{
          A:'The manufacturer’s figure is not plausible, since the whole range 84.2% to 87.8% falls below 90%.',
          B:'The manufacturer’s figure is plausible, since 90% is within 5 points of the reported 86%.',
          C:'Exactly 86% of all the manufacturer’s sensors last five years, since that is the sample value.',
          D:'The result says nothing about the manufacturer’s figure, since 1,000 sensors is a small sample.'
        },
        correct:'A',
        expCorrect:'The lab’s plausible range is 86 − 1.8 = 84.2% up to 86 + 1.8 = 87.8%. The manufacturer’s 90% lies above the top of that range — more than a full margin past it. (Check: 87.8 &lt; 90, so no percent the data call plausible reaches 90 ✓, and the gap 90 − 87.8 = 2.2 points is larger than the 1.8-point margin itself.) A stated value that falls outside the entire plausible range is exactly the situation that counts as evidence against it.',
        expWrong:{
          B:'Plausibility is decided by the range, not by a loose sense of closeness. The margin is 1.8 points, so the range stops at 87.8%, and the remaining gap to 90% is 2.2 points — more than another whole margin.',
          C:'86% is the sample value, the best guess. The margin of error exists precisely because the population percent is not pinned to that number: anything from 84.2% to 87.8% is plausible.',
          D:'1,000 sensors is what makes the margin as tight as 1.8 points. A larger sample sharpens the comparison rather than canceling it, and this one is sharp enough to exclude 90%.'
        },
        tip:'Test a stated value against the whole plausible range, not against the sample value. Inside the range means the data are consistent with it; outside means the data argue against it — and how far outside is measured in margins.',
        desmos:'Type 86-1.8 and 86+1.8 to get 84.2 to 87.8, then 90-87.8 to see the 2.2-point gap above the range.',
        desmosLatex:['86-1.8','86+1.8','90-87.8']
      }
    ]
  });
})();
