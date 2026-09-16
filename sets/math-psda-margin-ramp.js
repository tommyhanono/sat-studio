/* SAT Studio question set — Math: Samples & Margin of Error (SMG-01 to SMG-23) */
/* Rampa completa de la destreza oficial "Inference from samples and margin of
   error": Fácil construye y lee el intervalo; Media escala a la población,
   compara dos intervalos y separa dos interpretaciones que se parecen.

   OJO con la taxonomía: dentro de Problem-Solving, `skillOf()` prueba `pd-claims`
   (pri:10) y `pd-prob` ANTES que `pd-margin`, mirando `skill` + los primeros 160
   caracteres del `stem`. Por eso acá no aparece nunca "randomly selected",
   "randomly assigned", "assignment", "cause", "correlation", "experiment",
   "generalize", "observational", "probability" ni "two-way" en ese arranque.
   La forma segura de nombrar la muestra es "a random sample of N …": lo que
   muerde es "randomly select…"/"random assign…", no "random sample".
   El prefijo es SMG- y no SMR- porque SMR-01…SMR-12 ya viven en
   `sets/math-samples-rates1.js`, que está enchufado en index.html. */
(function(){
  window.SAT_SETS.push({
    id: 'math-psda-margin-ramp',
    title: 'Samples & Margin of Error — Warm-up to Test Level',
    section: 'math',
    level: 'Media',
    description: 'A full ramp through inference from samples: building the plausible interval from an estimate and its margin of error, reading an estimate or a margin back out of a reported range, scaling a sample share up to a population total, deciding what really shrinks a margin, and judging when two intervals do — and do not — establish a difference.',
    minutes: 30,
    questions: [

      /* ---------------- Fácil: construir y leer el intervalo ---------------- */

      {
        id:'SMG-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Building the plausible interval from an estimate and its margin of error',
        stem:'Hollis Bakery asked a random sample of 220 of its customers whether they buy bread at least twice a week. In the sample, 38% said yes, with an associated margin of error of 3 percentage points. Which of the following is the plausible interval for the percent of all Hollis Bakery customers who buy bread at least twice a week?',
        choices:{A:'32% to 44%', B:'35% to 38%', C:'35% to 41%', D:'38% to 41%'},
        correct:'C',
        expCorrect:'An estimate with a margin of error becomes an interval that reaches the same distance on both sides: 38 − 3 = 35 and 38 + 3 = 41, so the interval is 35% to 41%. (Check: the centre is (35 + 41)/2 = 38, the reported estimate, and each end sits exactly 3 points away ✓.)',
        expWrong:{
          A:'32% to 44% applies the margin twice on each side, 38 ± 6. The reported margin of error is the whole distance from the estimate out to each endpoint, not half of it.',
          B:'35% to 38% subtracts the margin and stops there. That is only the lower half of the interval; the stretch from 38% up to 41% is just as plausible.',
          D:'38% to 41% only adds the margin. A margin of error works in both directions, so the interval has to open below 38% as well as above it.'
        },
        tip:'An estimate with a margin of error always becomes estimate − margin to estimate + margin. Subtract once, add once, and the estimate lands exactly in the middle of what you wrote.',
        desmos:'Type 38-3 and 38+3 to get the two endpoints, 35 and 41. Typing (35+41)/2 returns 38, which confirms the estimate is the centre.',
        desmosLatex:['38-3','38+3','(35+41)/2']
      },

      {
        id:'SMG-02', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Recovering the margin of error from a reported plausible range',
        stem:'Ridgeline Gym reported that, based on a random sample of its members, it is plausible that between 44% and 52% of all its members use the pool at least once a week. What margin of error, in percentage points, was used to build this range?',
        answer:'4',
        expCorrect:'The range is the sample percent plus or minus the margin, so the margin is half the width of the range. Width = 52 − 44 = 8 percentage points, and half of 8 is 4. (Check: the centre is (44 + 52)/2 = 48, and 48 − 4 = 44 while 48 + 4 = 52 ✓.) Answer: 4.',
        tip:'Read a reported range backwards with two moves: half the width, (high − low) ÷ 2, is the margin of error, and the centre, (low + high) ÷ 2, is the sample value. Those two numbers rebuild the range exactly.',
        desmos:'Type (52-44)/2 to get the margin, 4, and (44+52)/2 to get the sample percent, 48.',
        desmosLatex:['(52-44)/2','(44+52)/2']
      },

      {
        id:'SMG-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Deciding which values fall inside the plausible range',
        stem:'A librarian used a random sample of 180 card holders to estimate the mean number of books a card holder borrows in a year. The sample mean was 6.4 books, with an associated margin of error of 0.5 books. Which of the following is NOT a plausible value for the mean number of books borrowed in a year by all card holders?',
        choices:{A:'5.9 books', B:'6.4 books', C:'6.9 books', D:'7.1 books'},
        correct:'D',
        expCorrect:'The plausible values run from 6.4 − 0.5 = 5.9 books to 6.4 + 0.5 = 6.9 books. Everything from 5.9 to 6.9 is inside, and 7.1 is past the top end, so 7.1 is the value that is ruled out. (Check: 7.1 − 6.4 = 0.7, which is more than the margin of 0.5 ✓.)',
        expWrong:{
          A:'5.9 books is the bottom endpoint, 6.4 − 0.5. Endpoints belong to the range, so 5.9 is plausible.',
          B:'6.4 books is the sample mean itself, the centre of the range. It is the single most plausible value, so it cannot be the one that is excluded.',
          C:'6.9 books is the top endpoint, 6.4 + 0.5. It is the largest plausible value, but it is still plausible.'
        },
        tip:'Write both endpoints before judging any value. A value is plausible when its distance from the estimate is no larger than the margin of error.',
        desmos:'Type 6.4-0.5 and 6.4+0.5 to get 5.9 and 6.9, then type 7.1-6.4 to see the gap of 0.7, which is bigger than the margin.',
        desmosLatex:['6.4-0.5','6.4+0.5','7.1-6.4']
      },

      {
        id:'SMG-04', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Upper endpoint of an interval built from a sample mean and its margin of error',
        stem:'Marlowe Nursery used a random sample of 120 of its seedlings to estimate the mean height of all the seedlings on its lot. The sample mean was 24.6 centimeters, with an associated margin of error of 1.3 centimeters. What is the greatest plausible value, in centimeters, for the mean height of all the seedlings on the lot?',
        answer:'25.9',
        expCorrect:'The greatest plausible value is the top endpoint, which is the estimate plus the margin: 24.6 + 1.3 = 25.9 centimeters. (Check: the bottom endpoint is 24.6 − 1.3 = 23.3, and 25.9 − 23.3 = 2.6, exactly two margins wide ✓.) Answer: 25.9.',
        tip:'The word in the question picks the endpoint: “greatest plausible” means add the margin, “least plausible” means subtract it. The full width of the range is always twice the margin.',
        desmos:'Type 24.6+1.3 to get 25.9 and 24.6-1.3 to get 23.3, the two ends of the plausible range.',
        desmosLatex:['24.6+1.3','24.6-1.3']
      },

      {
        id:'SMG-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'What makes a margin of error smaller',
        stem:'A neighborhood association estimated the percent of its residents who favor a new bike lane using a random sample of 100 residents. The association wants a smaller margin of error for the same estimate. Which of the following changes would best accomplish that?',
        choices:{
          A:'Use a random sample of 900 residents rather than a sample of 100.',
          B:'Wait until the neighborhood has more residents, then use the same 100.',
          C:'Report the same 100 answers a second time, a month later.',
          D:'Ask the same 100 residents a shorter, clearer version of the question.'
        },
        correct:'A',
        expCorrect:'How many people answered is the lever that controls the margin. A larger random sample carries more information about the same population, so the estimate moves around less from one sample to the next and the interval narrows. Going from 100 to 900 responses multiplies the sample size by 9, which cuts the margin to about a third of what it was.',
        expWrong:{
          B:'A bigger population does not help. The margin depends on how many people answered, not on how many there were to choose from: 100 answers out of 20,000 residents carry about the same weight as 100 out of 2,000.',
          C:'Printing the same answers twice adds no new information. The margin is computed from the 100 responses that exist, and copying them does not turn them into 200 responses.',
          D:'A clearer question removes confusion, which is worth doing, but it does not touch the margin of error. The margin measures how much the estimate would bounce from sample to sample, and that depends on the sample size.'
        },
        tip:'Only one ordinary change shrinks a margin of error: collect a larger random sample. Population size, better wording, and repeating the report all leave the margin where it was.',
        desmos:'Plot y=1/sqrt(x) for x from 1 to 1000 and compare the height at x=100 with the height at x=900: the second is about one third of the first, which is the shape of how sample size drives the margin.',
        desmosLatex:['y=1/\\sqrt{x}','x=100','x=900']
      },

      {
        id:'SMG-06', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Recovering the sample mean from a reported plausible range',
        stem:'A call center reported that, based on a random sample of the calls it handled last month, it is plausible that the mean length of all its calls is between 11.2 minutes and 12.8 minutes. What was the mean length, in minutes, of the calls in the sample?',
        answer:'12',
        expCorrect:'The sample value sits at the centre of the range it generated: (11.2 + 12.8)/2 = 24/2 = 12 minutes. (Check: the margin of error is (12.8 − 11.2)/2 = 0.8, and 12 − 0.8 = 11.2 while 12 + 0.8 = 12.8 ✓.) Answer: 12.',
        tip:'The midpoint of a plausible range hands back the sample value, and half the width hands back the margin of error. Every reported range can be taken apart this way.',
        desmos:'Type (11.2+12.8)/2 to get 12, the sample mean, and (12.8-11.2)/2 to get 0.8, the margin of error.',
        desmosLatex:['(11.2+12.8)/2','(12.8-11.2)/2']
      },

      {
        id:'SMG-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'What a margin of error is about: the whole population, not just the people asked',
        stem:'A cafe asked a random sample of 250 of its customers how satisfied they were with its service. The report says 64% of the sample were satisfied, with an associated margin of error of 4 percentage points. The interval from 60% to 68% is an estimate of what?',
        choices:{
          A:'The percent of all of the cafe’s customers who are satisfied.',
          B:'The percent of the 250 customers in the sample who are satisfied.',
          C:'The percent of days on which the cafe’s service is satisfactory.',
          D:'The percent of satisfied customers who would answer a second survey.'
        },
        correct:'A',
        expCorrect:'A margin of error is attached to an estimate of a population value. The interval runs 64 − 4 = 60% to 64 + 4 = 68%, and it holds the plausible values for the percent of ALL of the cafe’s customers who are satisfied — the number the survey was run to learn.',
        expWrong:{
          B:'The percent inside the sample is 64%, and it is not in doubt: those 250 people already answered. Nothing about them needs estimating, so no interval belongs to them.',
          C:'The survey asked customers, not days. Nothing in the report measures days, so no interval about days can come out of it.',
          D:'A margin of error does not predict the result of a future round of asking. It describes plausible values for the population percent right now.'
        },
        tip:'Ask “what number here is unknown?” The sample value is already measured, so the interval always belongs to the population value the sample was meant to estimate.',
        desmos:'Type 64-4 and 64+4 to get 60 and 68. That interval is the set of plausible values for the percent among ALL customers, not among the 250 who answered.',
        desmosLatex:['64-4','64+4']
      },

      {
        id:'SMG-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Least plausible value from a sample proportion and its margin of error',
        stem:'A park district used a random sample of 300 visitors to estimate the proportion of all its visitors who arrive by bicycle. The sample proportion was 0.28, with an associated margin of error of 0.05. What is the least plausible value for the proportion of all visitors who arrive by bicycle?',
        choices:{A:'0.05', B:'0.23', C:'0.28', D:'0.33'},
        correct:'B',
        expCorrect:'“Least plausible” asks for the bottom endpoint, which is the estimate minus the margin: 0.28 − 0.05 = 0.23. (Check: the top endpoint is 0.28 + 0.05 = 0.33, and the range 0.23 to 0.33 is centred on 0.28 ✓.)',
        expWrong:{
          A:'0.05 is the margin of error itself. A margin is a distance, not a proportion; it means something only after it is subtracted from or added to 0.28.',
          C:'0.28 is the sample proportion, the centre of the range. It is the most plausible value, not the least.',
          D:'0.33 is the top endpoint, 0.28 + 0.05, so it is the GREATEST plausible value. The question asks for the least, which means subtracting the margin instead.'
        },
        tip:'Write both endpoints first, estimate − margin and estimate + margin, and only then let the wording (least, greatest, most plausible) choose which one to report.',
        desmos:'Type 0.28-0.05 to get 0.23 and 0.28+0.05 to get 0.33; the answer is the smaller endpoint.',
        desmosLatex:['0.28-0.05','0.28+0.05']
      },

      /* -------- Media: escalar, comparar intervalos, separar lecturas -------- */

      {
        id:'SMG-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Estimate the number in a population from a sample percent',
        stem:'The Vantage Club has 7,500 members. A random sample of 300 members was asked whether they attend the monthly meeting, and 42% of the sample said yes. Based on this sample, which of the following is the best estimate of the number of all club members who attend the monthly meeting?',
        choices:{A:'126', B:'3,150', C:'4,350', D:'17,857'},
        correct:'B',
        expCorrect:'A random sample stands in for the whole list it came from, so the sample share is applied to every member: 42% of 7,500 = 0.42 × 7,500 = 3,150 members. (Check: 126/300 = 0.42 and 3,150/7,500 = 0.42, the same share on both sides ✓.)',
        expWrong:{
          A:'126 is 42% of the 300 people in the sample. That is the count INSIDE the sample, not the estimate for the 7,500 members.',
          C:'4,350 is 58% of 7,500, the estimate for the members who do NOT attend. It answers the opposite question.',
          D:'17,857 divides by the share, 7,500 ÷ 0.42, instead of multiplying by it. A part of the club can never outnumber the club, so any answer above 7,500 is out on sight.'
        },
        tip:'Population estimate = sample share × population size. Before answering, ask whether the number should be smaller than the population it describes; that one check kills the divide-instead-of-multiply slip.',
        desmos:'Type 0.42*7500 to get 3,150. Typing 0.58*7500 gives 4,350, the estimate for the members who do not attend, and 0.42*300 gives 126, the count inside the sample.',
        desmosLatex:['0.42*7500','0.58*7500','0.42*300']
      },

      {
        id:'SMG-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Greatest plausible population count from a percent and its margin of error',
        stem:'Ashgrove has 5,000 registered voters. A random sample of 400 of them was asked about a proposed park, and 36% of the sample said they support it, with an associated margin of error of 2.4 percentage points. What is the greatest number of registered voters who plausibly support the park?',
        choices:{A:'154', B:'1,680', C:'1,800', D:'1,920'},
        correct:'D',
        expCorrect:'Apply the margin to the percent first: 36 + 2.4 = 38.4%, the largest plausible share. Then apply that share to all 5,000 voters: 0.384 × 5,000 = 1,920 voters. (Check: the bottom end is 0.336 × 5,000 = 1,680, and 1,920 is the larger of the two ends ✓.)',
        expWrong:{
          A:'154 applies 38.4% to the 400 people in the sample instead of to the 5,000 voters. The sample supplies the percent; the population is what that percent gets applied to.',
          B:'1,680 uses 36 − 2.4 = 33.6%, the bottom of the range. That is the LEAST number who plausibly support the park, not the greatest.',
          C:'1,800 is 36% of 5,000 and ignores the margin of error entirely. It is the centre of the plausible range, not its top end.'
        },
        tip:'Margin first, population second: adjust the percent by the margin, then multiply by the population size. Reversing the order mixes a percentage-point margin with a count and the units stop meaning anything.',
        desmos:'Type (0.36+0.024)*5000 to get 1,920 and (0.36-0.024)*5000 to get 1,680, the two ends of the plausible count. Typing 0.36*5000 gives 1,800, the centre.',
        desmosLatex:['(0.36+0.024)*5000','(0.36-0.024)*5000','0.36*5000']
      },

      {
        id:'SMG-11', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Comparing two plausible intervals that overlap',
        stem:'Two branches of Thorn Pharmacy each used a random sample of their own customers to estimate the mean wait time at the counter. Branch A reported 5.6 minutes with a margin of error of 0.9 minutes, and Branch B reported 6.2 minutes with a margin of error of 0.8 minutes. Which statement is best supported by these results?',
        choices:{
          A:'The mean wait time at Branch B is longer than at Branch A.',
          B:'The mean wait time at the two branches is exactly the same.',
          C:'The results do not show a difference between the branches.',
          D:'Branch A serves more customers each hour than Branch B.'
        },
        correct:'C',
        expCorrect:'Build both intervals. Branch A: 5.6 − 0.9 = 4.7 to 5.6 + 0.9 = 6.5 minutes. Branch B: 6.2 − 0.8 = 5.4 to 6.2 + 0.8 = 7.0 minutes. Every value from 5.4 to 6.5 is plausible for both branches at once, so a single mean such as 6.0 minutes would fit them both. Overlapping intervals mean the data do not establish that one mean is larger.',
        expWrong:{
          A:'This compares the two centres, 5.6 against 6.2, and drops the margins. Each estimate carries a margin of about 0.9 minutes, which is larger than the 0.6-minute gap between them, so the gap could come from sampling alone.',
          B:'Overlap does not prove sameness either. Plenty of different pairs of values are plausible inside the shared stretch, and failing to show a difference is not the same as showing there is none.',
          D:'Nothing here measures customers per hour. Wait time at a counter and the number of customers served are different quantities, and only the first one was estimated.'
        },
        tip:'Compare intervals, never centres. Overlapping intervals mean “no difference established”; only completely separate intervals support the claim that one population value is larger.',
        desmos:'Type 5.6-0.9, 5.6+0.9, 6.2-0.8 and 6.2+0.8 to get 4.7 to 6.5 and 5.4 to 7.0. The shared stretch from 5.4 to 6.5 is exactly why no difference is established.',
        desmosLatex:['5.6-0.9','5.6+0.9','6.2-0.8','6.2+0.8']
      },

      {
        id:'SMG-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Comparing two plausible intervals that do not overlap',
        stem:'A fitness chain estimated the percent of members who use the sauna at two of its gyms, each from a random sample of that gym’s members. The Oak Street gym reported 31% with a margin of error of 2 percentage points, and the Pine Hill gym reported 44% with a margin of error of 3 percentage points. Which statement is best supported?',
        choices:{
          A:'The percent is higher at Pine Hill than at Oak Street.',
          B:'The percent is the same at both gyms, within the margins.',
          C:'No comparison can be made from samples of different gyms.',
          D:'Exactly 13 percentage points separate the two real percents.'
        },
        correct:'A',
        expCorrect:'Oak Street: 31 − 2 = 29% to 31 + 2 = 33%. Pine Hill: 44 − 3 = 41% to 44 + 3 = 47%. The largest plausible value at Oak Street, 33%, is still below the smallest plausible value at Pine Hill, 41%. The two intervals share no value at all, so the data do support the claim that the percent really is higher at Pine Hill.',
        expWrong:{
          B:'The margins are 2 and 3 points while the estimates sit 13 points apart. Pushing both intervals toward each other as far as the margins allow still leaves an 8-point gap between 33% and 41%, so “the same” is not plausible here.',
          C:'Two separate random samples estimate two separate population percents, and those can be compared — by comparing their intervals, which is what makes this case clear-cut.',
          D:'13 points is the gap between the two sample estimates, not a fact about the populations. Each estimate carries a margin, so the real gap is plausibly anywhere from about 8 to about 18 points.'
        },
        tip:'Separate intervals support a real difference; overlapping intervals do not. Test it by checking whether the top of the lower interval reaches the bottom of the higher one.',
        desmos:'Type 31+2 and 44-3 to get 33 and 41. The top of one interval never reaches the bottom of the other, so the intervals are completely separate.',
        desmosLatex:['31+2','44-3']
      },

      {
        id:'SMG-13', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Why a small margin of error cannot rescue a poorly drawn sample',
        stem:'A cycling magazine printed a questionnaire in one issue and 1,600 readers mailed in answers. Of those readers, 78% said the city should add more bike lanes, and the magazine reported a margin of error of 2 percentage points. Why might that 2-point margin still give a misleading picture of what all city residents think?',
        choices:{
          A:'A sample of 1,600 is too small to say anything about a city.',
          B:'A margin of 2 points is too small to be believable at all.',
          C:'Percents above 75% always carry a hidden extra margin of error.',
          D:'The people who mailed in answers are not like all city residents.'
        },
        correct:'D',
        expCorrect:'A margin of error measures only how much an estimate would bounce around from one draw to the next of the SAME kind of sample. It says nothing about who ended up in the sample. Readers of a cycling magazine who cared enough to mail in a reply are far more likely to favor bike lanes than residents in general, so 78% is centred on the wrong group, and a tight 2-point margin around a number aimed at the wrong target is still aimed at the wrong target.',
        expWrong:{
          A:'1,600 answers is a large sample, and that size is exactly what makes the margin small. Size is not the flaw here; who those 1,600 people are is.',
          B:'A 2-point margin is perfectly ordinary for 1,600 responses. The number is believable as a measure of sampling variability — it simply does not measure the flaw this survey has.',
          C:'No extra margin appears at high percents. The margin is computed the same way whether the estimate is 78% or 38%, and the trouble lies in which people answered.'
        },
        tip:'A margin of error measures noise, not bias. If the people in the sample are not like the population, no margin repairs the estimate — and a bigger sample only makes the wrong number more precise.',
        desmos:'Type 78-2 and 78+2 to get 76 to 80. That interval is honest about the magazine readers who replied, and it says nothing at all about the city.',
        desmosLatex:['78-2','78+2']
      },

      {
        id:'SMG-14', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'A margin of error describes a population value, not one individual',
        stem:'Brackenfield Greenhouse used a random sample of 150 tomato plants to estimate the mean height of all its tomato plants, reporting a sample mean of 32 centimeters with a margin of error of 1.5 centimeters. What does the interval from 30.5 to 33.5 centimeters describe?',
        choices:{
          A:'The plausible values for the mean height of all the plants.',
          B:'The heights of about 95% of the plants in the greenhouse.',
          C:'The range from the shortest to the tallest plant in the sample.',
          D:'The heights of the 150 plants that were measured in the sample.'
        },
        correct:'A',
        expCorrect:'The interval was built around a sample MEAN, so everything in it is a candidate for the matching population number: the mean height over every plant in the greenhouse. It runs 32 − 1.5 = 30.5 to 32 + 1.5 = 33.5 centimeters, and it says the greenhouse-wide average is plausibly somewhere in there.',
        expWrong:{
          B:'This turns an interval about an average into an interval about individual plants. Single plants vary much more than their average does: many plants are shorter than 30.5 or taller than 33.5 while the average still sits inside the interval.',
          C:'Shortest to tallest describes the spread of the data, which is far wider than 3 centimeters. A margin of error is not a measure of how spread out the individual plants are.',
          D:'The 150 measured heights are already known one by one, and they are certainly not all between 30.5 and 33.5. The interval estimates a number nobody measured directly.'
        },
        tip:'The interval always describes the same quantity the estimate did, but for the whole population. An interval around a sample mean is about the population mean — never about a single member of it.',
        desmos:'Type 32-1.5 and 32+1.5 to get 30.5 and 33.5. Those are plausible values for the AVERAGE height, not for the height of any one plant.',
        desmosLatex:['32-1.5','32+1.5']
      },

      {
        id:'SMG-15', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Margin of error expressed as a number of people rather than a percent',
        stem:'To estimate the number of its 6,000 members who renewed online, a cooperative surveyed a random sample of 400 members and reported that it is plausible that between 2,040 and 2,460 of all 6,000 members renewed online. What margin of error, in members, was used to build that range?',
        answer:'210',
        expCorrect:'The reported range is centred on the estimate, so the margin is half its width: (2,460 − 2,040)/2 = 420/2 = 210 members. (Check: the centre is (2,040 + 2,460)/2 = 2,250, and 2,250 − 210 = 2,040 while 2,250 + 210 = 2,460 ✓. In percent terms, 2,250/6,000 = 37.5% and 210/6,000 = 3.5 percentage points.) Answer: 210.',
        tip:'A margin of error can be reported in percentage points or in people, and either way it is half the width of the range. Divide by the population size to move from people to percentage points, multiply to go back.',
        desmos:'Type (2460-2040)/2 to get 210 and (2040+2460)/2 to get 2,250. Then 210/6000 shows the same margin as 0.035, which is 3.5 percentage points.',
        desmosLatex:['(2460-2040)/2','(2040+2460)/2','210/6000']
      },

      {
        id:'SMG-16', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Which changes leave the margin of error where it is',
        stem:'An analyst estimated the mean number of minutes a shopper spends in a store using a random sample of 250 shoppers, and reported a margin of error of 1.4 minutes. Which of the following changes would leave the margin of error essentially unchanged?',
        choices:{
          A:'Collecting a random sample of 1,000 shoppers instead of 250.',
          B:'Reporting the estimate at a 99% confidence level, not at 95%.',
          C:'Opening a second store, doubling the number of shoppers served.',
          D:'Using a random sample of only 60 shoppers instead of 250.'
        },
        correct:'C',
        expCorrect:'A margin of error is driven by how many people answered and by the confidence level, not by how large the population behind them is. Doubling the number of shoppers the chain serves changes the population but leaves the 250 responses and the confidence level exactly as they were, so the margin stays about 1.4 minutes.',
        expWrong:{
          A:'Going from 250 to 1,000 responses is four times the sample size, and a larger random sample always narrows the interval. This is the standard way to make 1.4 minutes smaller, not to keep it.',
          B:'Raising the confidence level from 95% to 99% widens the interval. The extra confidence is bought with a bigger margin, using the very same 250 responses.',
          D:'Dropping from 250 responses to 60 is far less information, so the margin grows. Fewer responses always mean a wider interval.'
        },
        tip:'Two things move a margin of error: sample size (bigger shrinks it) and confidence level (higher widens it). The size of the population is not one of them.',
        desmos:'Plot y=1/sqrt(x) and compare the heights at x=250, x=1000 and x=60. The population size never appears anywhere in that picture, which is the point.',
        desmosLatex:['y=1/\\sqrt{x}','x=250','x=1000','x=60']
      },

      {
        id:'SMG-17', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Working back from a plausible range of counts to the sample percent',
        stem:'Vista Cooperative has 5,000 members. Using a random sample of its members, the cooperative reported that it is plausible that between 2,150 and 2,650 of all its members shop there weekly. What percent of the members in the sample reported that they shop there weekly?',
        answer:'48',
        expCorrect:'The estimate is the centre of the range: (2,150 + 2,650)/2 = 4,800/2 = 2,400 members. That count came from scaling the sample percent up to 5,000 members, so divide to undo it: 2,400/5,000 = 0.48, or 48%. (Check: 48% of 5,000 is 2,400, and the margin is (2,650 − 2,150)/2 = 250 members, which is 250/5,000 = 5 percentage points ✓.) Answer: 48.',
        tip:'Counts and percents carry the same information. Centre the range first to get the estimate, then divide by the population size to land back on the percent the sample reported.',
        desmos:'Type (2150+2650)/2 to get 2,400, then 2400/5000 to get 0.48. The margin, (2650-2150)/2 = 250 members, is 250/5000 = 5 percentage points.',
        desmosLatex:['(2150+2650)/2','2400/5000','(2650-2150)/2']
      },

      {
        id:'SMG-18', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'How sample size and margin of error move together',
        stem:'Two researchers each estimated the mean number of hours per week a resident of Calder Heights spends on public transit. Researcher 1 used a random sample of 200 residents and Researcher 2 used a random sample of 800 residents, and both reported at a 95% confidence level. Which statement is correct?',
        choices:{
          A:'Researcher 1 should report the smaller margin of error.',
          B:'Both should report the same margin, since the confidence level matches.',
          C:'Researcher 2 should report a sample mean four times as large.',
          D:'Researcher 2 should report the smaller margin of error.'
        },
        correct:'D',
        expCorrect:'A larger random sample pins the population mean down more tightly. With the confidence level held at 95% for both, the researcher with 800 responses has four times the information of the one with 200, so that interval is narrower. Roughly, four times the sample halves the margin of error.',
        expWrong:{
          A:'This has the relationship backwards. The smaller sample, 200 responses, carries less information, so it produces the wider interval and the LARGER margin.',
          B:'Matching the confidence level only means both intervals were built to the same standard. With that standard fixed, sample size decides the width, and 800 beats 200.',
          C:'Sample size changes the margin, not the estimate. Both sample means should land near the same population value; a bigger sample does not make the mean itself bigger.'
        },
        tip:'Sample size and margin of error move in opposite directions: more responses, narrower interval. Quadrupling the sample roughly halves the margin, and it leaves the estimate itself alone.',
        desmos:'Plot y=1/sqrt(x) and compare the heights at x=200 and x=800: the second is half the first, which is why four times the sample roughly halves the margin.',
        desmosLatex:['y=1/\\sqrt{x}','x=200','x=800']
      },

      {
        id:'SMG-19', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Reading a confidence interval for a population mean correctly',
        stem:'A city agency used a random sample of 500 households to estimate the mean amount a household in the city recycles in a week, and reported an interval of 4.8 to 5.6 kilograms. Which of the following is the best reading of that interval?',
        choices:{
          A:'Plausible values for the mean weekly amount per household citywide.',
          B:'The weekly amounts recycled by 95% of the households in the city.',
          C:'Plausible values for the mean among the 500 households in the sample.',
          D:'The smallest and largest weekly amounts found in the sample of 500.'
        },
        correct:'A',
        expCorrect:'The agency set out to estimate one number: the mean weekly amount per household across the whole city. The interval 4.8 to 5.6 kilograms is the set of values that are plausible for THAT number, given what the 500 households reported. Its centre, (4.8 + 5.6)/2 = 5.2 kilograms, is the sample mean, and its half-width, (5.6 − 4.8)/2 = 0.4 kilograms, is the margin of error.',
        expWrong:{
          B:'This reads an interval about an average as an interval about individual households. Households vary far more than their average does: many recycle less than 4.8 or more than 5.6 kilograms while the citywide mean still sits inside the interval.',
          C:'The 500 sampled households already reported their amounts, so the mean of the sample is known exactly and needs no interval. The unknown number is the citywide mean.',
          D:'Smallest and largest describe the spread of the data, which is far wider than 0.8 kilograms. A confidence interval is built around an average, not from the extremes of the data.'
        },
        tip:'A confidence interval always estimates ONE population number. Name that number before reading the options, and every choice that talks about individuals drops out at once.',
        desmos:'Type (4.8+5.6)/2 to get 5.2, the sample mean, and (5.6-4.8)/2 to get 0.4, the margin of error. Both belong to the citywide average, not to any one household.',
        desmosLatex:['(4.8+5.6)/2','(5.6-4.8)/2']
      },

      {
        id:'SMG-20', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Estimate the total in a population from a count in a sample',
        stem:'Fenwick Hardware has 4,200 people in its loyalty program. A random sample of 250 of them was asked whether they used a coupon last month, and 95 said yes. Based on this sample, what is the best estimate of the total number of loyalty members who used a coupon last month?',
        choices:{A:'95', B:'1,596', C:'2,604', D:'3,990'},
        correct:'B',
        expCorrect:'Get the share first: 95/250 = 0.38. Then apply it to all 4,200 members: 0.38 × 4,200 = 1,596 members. (Check: 95/250 = 1,596/4,200, since both equal 0.38 ✓.)',
        expWrong:{
          A:'95 is the count inside the sample. It answers how many of the 250 people asked used a coupon, not how many of the 4,200 did.',
          C:'2,604 scales the other group: 250 − 95 = 155 said no, and 155/250 × 4,200 = 2,604 estimates the members who did NOT use a coupon.',
          D:'3,990 reads “95 of 250” as 95% and takes 95% of 4,200. The share is 95 ÷ 250 = 38%, not 95%.'
        },
        tip:'Estimate = (count in the sample ÷ sample size) × population size. Turn the count into a decimal share first: that share is the only number that travels from the sample to the population.',
        desmos:'Type 95/250 to get 0.38, then 95/250*4200 to get 1,596. Typing 155/250*4200 gives 2,604, the estimate for those who did not use a coupon.',
        desmosLatex:['95/250','95/250*4200','155/250*4200']
      },

      {
        id:'SMG-21', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Testing a claimed value against a plausible range',
        stem:'A theater company estimated the percent of its ticket buyers who are students from a random sample of 350 buyers, reporting 44% with a margin of error of 3 percentage points. A board member says that half of all ticket buyers are students. What do the results say about that statement?',
        choices:{
          A:'It is plausible, since 50% is close to the reported 44%.',
          B:'It is not plausible, since 50% is above the top of the range.',
          C:'It is plausible, since the margin of error could be larger.',
          D:'It cannot be judged without knowing the number of buyers.'
        },
        correct:'B',
        expCorrect:'The plausible range is 44 − 3 = 41% to 44 + 3 = 47%. The board member names 50%, which sits 6 percentage points above the estimate — twice the margin — and therefore outside the range. Based on this sample, half is not a plausible value for the population percent.',
        expWrong:{
          A:'“Close” is not the test. The margin of error sets exactly how far a plausible value may sit from 44%, and that distance is 3 points, not 6.',
          C:'The margin of error is not free to stretch. It was computed from these 350 responses at the stated confidence level, and swapping in a bigger one invents data the sample does not have.',
          D:'The number of buyers is not needed. The question is about a percent, and the range 41% to 47% settles it; a population total would matter only if the question asked for a count.'
        },
        tip:'To test a claimed value, build the interval and check whether the claim lands inside it. Nearness to the estimate proves nothing — the margin of error draws the line.',
        desmos:'Type 44-3 and 44+3 to get 41 and 47, then see where 50 falls: outside the range, by 3 more points.',
        desmosLatex:['44-3','44+3']
      },

      {
        id:'SMG-22', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Turning a margin of error in percentage points into a number of people',
        stem:'Brightwater Swim Club has 9,000 members. From a random sample of 450 members, the club estimates that 61% plan to renew, with a margin of error of 3 percentage points. Stated as a number of members, what does that margin of error come to?',
        choices:{A:'3 members', B:'13.5 members', C:'270 members', D:'5,490 members'},
        correct:'C',
        expCorrect:'The margin describes a share of the whole club, so turn it into people by applying it to the 9,000 members: 0.03 × 9,000 = 270 members. (Check: the estimate is 0.61 × 9,000 = 5,490, the range runs 0.58 × 9,000 = 5,220 to 0.64 × 9,000 = 5,760, and each end is exactly 270 away from 5,490 ✓.)',
        expWrong:{
          A:'3 members reads “3 percentage points” as a count of people. Percentage points measure a share, and a share becomes a count only after it is applied to a group.',
          B:'13.5 members applies 3% to the 450 people in the sample. The estimate describes the whole club, so its margin has to be scaled to the whole club too.',
          D:'5,490 members is 61% of 9,000 — the estimate itself, not its margin. That number is the centre of the plausible range, not the distance out to its ends.'
        },
        tip:'Percentage points become people only after being multiplied by the population size. Apply the margin to the same group the estimate describes, never to the sample that produced it.',
        desmos:'Type 0.03*9000 to get 270, then 0.58*9000 and 0.64*9000 to get 5,220 and 5,760, each one 270 away from 0.61*9000 = 5,490.',
        desmosLatex:['0.03*9000','0.61*9000','0.58*9000','0.64*9000']
      },

      {
        id:'SMG-23', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Choosing a sample size to reach a target margin of error',
        stem:'For surveys of this kind, multiplying the sample size by 4 cuts the margin of error in half. A random sample of 150 club members produced a margin of error of 5.6 percentage points. How many members should be in the sample for the margin of error to come down to 2.8 percentage points?',
        answer:'600',
        expCorrect:'Going from 5.6 to 2.8 percentage points is exactly one halving, since 2.8 × 2 = 5.6. One halving costs one factor of 4 in the sample size, so the sample needs 4 × 150 = 600 members. (Check: 600/150 = 4, one factor of 4, which buys one halving ✓.) Answer: 600.',
        tip:'A margin of error falls with the square root of the sample size: 4 times the sample halves it, 9 times the sample cuts it to a third. Count the halvings the target needs before touching the sample size.',
        desmos:'Type 5.6/2 to confirm the target of 2.8, then 150*4 to get 600. Plotting y=5.6*sqrt(150/x) and tracing it down to y=2.8 also lands at x=600.',
        desmosLatex:['5.6/2','150*4','y=5.6\\sqrt{150/x}']
      }

    ]
  });
})();
