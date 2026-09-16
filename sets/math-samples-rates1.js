/* SAT Studio question set — Math: Samples, Margin of Error & Units (SMR-01 to SMR-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-samples-rates1',
    title: 'Samples, Margin of Error & Units',
    section: 'math',
    level: 'Media',
    description: 'Inference from a random sample and margin of error, plus ratios, rates, proportional relationships, unit conversions, density and combined rates.',
    minutes: 20,
    questions: [
      {
        id:'SMR-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Margin of error: reading the plausible range',
        stem:'A market research firm selected a random sample of 300 households in Dalport and estimated that the mean amount a household spends on groceries in one week is $148, with an associated margin of error of $9. Which of the following is a plausible value for the mean weekly grocery spending of all households in Dalport?',
        choices:{A:'$130', B:'$152', C:'$161', D:'$166'},
        correct:'B',
        expCorrect:'The plausible range is the estimate plus or minus the margin of error: 148 − 9 = 139 and 148 + 9 = 157, so the range runs from $139 to $157. Of the four options, only $152 falls inside that window. (Check: 152 is 4 above the estimate, and 4 is smaller than the margin of 9 ✓.)',
        expWrong:{
          A:'$130 is 148 − 18, which doubles the margin before subtracting. The margin is $9, not $18, so the bottom of the range is $139 and $130 sits below it.',
          C:'$161 reads the $9 as 9 percent: 9 percent of 148 is about $13.32, which would stretch the top to about $161. The margin is given in dollars, so it is added as dollars.',
          D:'$166 is 148 + 18, the same doubling on the other side. The top of the range is 148 + 9 = $157, and $166 is above it.'
        },
        tip:'Plausible range = estimate ± margin of error, once in each direction. Compute both endpoints first, then test each option against that window. Any option outside it is out, however close it looks.',
        desmos:'Type 148-9 and 148+9 to get the two endpoints, 139 and 157. Then check each option against that window: only 152 lands inside it.',
        desmosLatex:['148-9','148+9']
      },
      {
        id:'SMR-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'What a margin of error does NOT mean (bias and certainty)',
        stem:'A researcher posted a survey on the website of a city newspaper, and 1,500 readers chose to respond. Of the readers who responded, 71% said the city should build a new arena, and the researcher computed an associated margin of error of 2.3%. Which of the following is the best reason the researcher should NOT report that between 68.7% and 73.3% of all city residents support the arena?',
        choices:{
          A:'A sample of 1,500 readers is too small to support a conclusion about a city this size, so the margin of error should have come out far wider than 2.3%.',
          B:'The margin of error is so narrow that the result should be reported as 71%, with no range at all.',
          C:'The margin of error should be subtracted from the estimate but not added to it.',
          D:'The readers chose themselves into the survey, so they are not a random sample of city residents, and a margin of error does not correct for that.'
        },
        correct:'D',
        expCorrect:'A margin of error measures only the wobble that comes from sampling at random. It assumes the sample WAS drawn at random from the population in question. Here nobody drew a sample: readers of one newspaper website opted in on their own, so people who care about the arena are far likelier to be in the 71%. That is bias, and bias is not something a margin of error shrinks, reports, or repairs — a bigger opt-in survey would just be a bigger biased survey.',
        expWrong:{
          A:'Size is not the problem, and the margin is not too narrow for the sample: 1,500 responses are exactly why it came out as small as 2.3%. A random sample of 1,500 city residents would support the kind of statement the researcher wants. How the people were chosen is what ruins it.',
          B:'A small margin of error is not certainty. The margin exists precisely because the sample value almost never lands on the population value, so replacing the range with an exact 71% throws away the one honest part of the report.',
          C:'A margin of error is symmetric: it is applied once below the estimate and once above it, which is what produced 68.7% and 73.3%. The arithmetic in the report is not what is wrong.'
        },
        tip:'A margin of error answers one question only: how much would this estimate bounce around if the SAME random process were repeated? It never guarantees a value, and it is blind to bias. Before you trust any interval, check that the sample was chosen at random from the population the conclusion is about.',
        desmos:'Type 71-2.3 and 71+2.3 and you do get 68.7 and 73.3, so the arithmetic is fine. The flaw is upstream of the calculator: the 1,500 readers were not a random sample, and no computation fixes that.',
        desmosLatex:['71-2.3','71+2.3']
      },
      {
        id:'SMR-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'What makes the margin of error narrower',
        stem:'A biologist estimated the mean wingspan of the butterflies in a nature preserve using a random sample of 40 butterflies and reported a margin of error of 1.6 millimeters. The biologist wants to repeat the study and obtain a smaller margin of error. Which change is most likely to accomplish that?',
        choices:{
          A:'Use a random sample of 160 butterflies instead of 40.',
          B:'Measure the same 40 butterflies again with a more precise instrument, to cut down on reading error.',
          C:'Draw the 40 butterflies from a preserve that holds a much larger butterfly population.',
          D:'Use a random sample of 25 butterflies instead of 40.'
        },
        correct:'A',
        expCorrect:'The margin of error shrinks as the SAMPLE gets bigger, and it shrinks with the square root of the sample size. Going from 40 to 160 multiplies the sample by 4, so the margin drops by a factor of the square root of 4, which is 2: roughly 1.6 mm becomes roughly 0.8 mm. That is the only lever in the list that touches the sample size.',
        expWrong:{
          B:'A finer instrument reduces measurement error, which is a different thing. The margin of error describes how much the estimate would move if a DIFFERENT random sample of 40 were drawn, and with 40 butterflies it moves just as much no matter how carefully each one is measured.',
          C:'The size of the population barely matters. A random sample of 40 gives about the same margin of error whether the preserve holds 4,000 butterflies or 400,000; what has to grow is the sample, not the population it came from.',
          D:'Going down to 25 moves the wrong way. A smaller sample carries more uncertainty, so the margin of error would grow, not shrink.'
        },
        tip:'Only one thing in these questions reliably narrows a margin of error: a larger random sample. Care, precision of the instrument, and the size of the population do not. And because the shrink follows a square root, you need 4 times the sample to halve the margin.',
        desmos:'Type sqrt(160/40) and you get 2: quadrupling the sample roughly halves the margin. Then 1.6/2 gives about 0.8 millimeters as the new margin.',
        desmosLatex:['\\sqrt{160/40}','1.6/2']
      },
      {
        id:'SMR-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Comparing two estimates whose intervals overlap',
        stem:'At Northgate College, a random sample of 150 students reported a mean of 14.2 hours of studying per week, with an associated margin of error of 1.1 hours. One year later, a random sample of 220 students reported a mean of 15.0 hours per week, with an associated margin of error of 0.9 hours. Which statement is best supported by these two results?',
        choices:{
          A:'The mean study time for all students at the college rose by exactly 0.8 hours.',
          B:'Because 15.0 is greater than 14.2, the mean study time for all students at the college rose.',
          C:'The two plausible ranges overlap, so these results do not establish that the mean changed.',
          D:'The second estimate has the smaller margin of error, so the mean study time for all students is 15.0 hours.'
        },
        correct:'C',
        expCorrect:'Build both ranges. First year: 14.2 ± 1.1 gives 13.1 to 15.3 hours. Second year: 15.0 ± 0.9 gives 14.1 to 15.9 hours. Those windows share everything from 14.1 to 15.3, so a single value — 14.8, say — is plausible for the population mean in BOTH years. When one number can sit inside both ranges, the data are consistent with no change at all, and the gap between 14.2 and 15.0 cannot be claimed as a real increase.',
        expWrong:{
          A:'0.8 is the gap between the two SAMPLE means, not a measured change in the population. Each sample mean already carries about a full hour of uncertainty, so a difference of 0.8 is smaller than the wobble in the numbers being subtracted.',
          B:'This compares the two point estimates and throws the margins away. Sample means almost always differ a little; the ranges are there to tell you whether that difference is big enough to mean anything, and here they overlap.',
          D:'The smaller margin is real — 220 students beat 150 — but a smaller margin is still a range, not an exact value. The second result says the mean is plausibly between 14.1 and 15.9, not that it is 15.0.'
        },
        tip:'To compare two estimates, always build both intervals first. If they OVERLAP, the same population value fits both and you cannot claim a difference. If they are completely separate, the difference is the one you can defend. Never compare the two centers alone.',
        desmos:'Type 14.2-1.1, 14.2+1.1, 15-0.9 and 15+0.9. You get 13.1 to 15.3 and 14.1 to 15.9: the two windows share the stretch from 14.1 to 15.3.',
        desmosLatex:['14.2-1.1','14.2+1.1','15-0.9','15+0.9']
      },
      {
        id:'SMR-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Which population an estimate extends to',
        stem:'A librarian took the list of every person who borrowed a book from the Fairmount branch library last month, selected 120 of them at random, and asked each one how many minutes per day they read. The mean was 37 minutes, with an associated margin of error of 4 minutes. The results of this survey are most appropriately generalized to which population?',
        choices:{
          A:'All people who borrowed a book from the Fairmount branch last month',
          B:'The 120 people who answered the librarian’s question',
          C:'All people who borrowed a book from any branch of the city library last month',
          D:'All residents of the city served by the Fairmount branch'
        },
        correct:'A',
        expCorrect:'An estimate reaches exactly as far as the list the sample was drawn from — the sampling frame. Here the librarian drew the 120 names at random out of the people who borrowed from the Fairmount branch last month, so 37 ± 4 minutes describes that group and stops there.',
        expWrong:{
          B:'The 120 people in the sample were measured, not estimated: for them the librarian already has the actual answers and no margin of error is needed. The whole point of the interval is to reach past the sample to the group it came from.',
          C:'Other branches were never in the drawing. Borrowers at a downtown branch or a campus branch could read very differently, and nothing in this sample gives any information about them.',
          D:'Residents of the city include everyone who never borrows a book. Borrowers are a self-selected slice of the city and almost certainly read more, so extending the estimate to all residents overshoots the frame.'
        },
        tip:'Ask one question: what list were the names drawn from? The conclusion may cover that list and nothing wider — not the whole city, not every branch, not the entire country. Widening the population is the most common wrong answer in these items.',
        desmos:'Type 37-4 and 37+4 for the range, 33 to 41 minutes. The arithmetic is the easy half; the question is WHO that range describes, and it is the Fairmount borrowers the sample came from.',
        desmosLatex:['37-4','37+4']
      },
      {
        id:'SMR-06', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Computing an interval from an estimate and a margin of error',
        stem:'A researcher selected a random sample of 500 adults in Weston County and estimated that the mean number of minutes an adult spends outdoors on a weekday is 82 minutes, with an associated margin of error of 6 minutes. Based on this estimate, what is the greatest number of minutes in the plausible range for the mean time all adults in Weston County spend outdoors on a weekday?',
        answer:'88',
        expCorrect:'The plausible range runs from the estimate minus the margin to the estimate plus the margin: 82 − 6 = 76 at the bottom and 82 + 6 = 88 at the top. The question asks for the greatest value in that range, which is the top endpoint: 88. (Check: 88 − 82 = 6, exactly the margin ✓.) Answer: 88.',
        expWrong:{},
        tip:'Estimate ± margin gives two endpoints. "Greatest" or "maximum" means estimate + margin; "least" or "minimum" means estimate − margin. Read which end the question wants before you grid anything, because both numbers are sitting right there.',
        desmos:'Type 82+6 for the top of the range and 82-6 for the bottom: 88 and 76. The question asks for the greatest value, so it is 88.',
        desmosLatex:['82+6','82-6']
      },
      {
        id:'SMR-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Multi-step unit conversion (milliliters per minute to liters per hour)',
        stem:'A laboratory pump moves a solution at a constant rate of 45 milliliters per minute. At this rate, how many liters of solution does the pump move in 1 hour? (1 liter = 1,000 milliliters.)',
        choices:{A:'0.045', B:'0.75', C:'2.7', D:'2,700'},
        correct:'C',
        expCorrect:'There are two conversions, one on time and one on volume, and both have to happen. Carry the units: (45 mL/min) × (60 min/1 h) = 2,700 mL per hour — the "min" cancels. Then (2,700 mL) × (1 L / 1,000 mL) = 2.7 L per hour — the "mL" cancels and liters is what is left, which is what the question asked for. (Check backwards: 2.7 L/h ÷ 60 = 0.045 L/min = 45 mL/min ✓.)',
        expWrong:{
          A:'0.045 is 45 ÷ 1,000: the volume step was done and the TIME step was dropped. That is 0.045 liters per minute, not per hour; multiply it by 60 and you reach 2.7.',
          B:'0.75 is 45 ÷ 60, the time step inverted. Dividing by 60 turns minutes into seconds, so 0.75 is milliliters per second — the wrong direction and still the wrong unit.',
          D:'2,700 is 45 × 60 with the volume step dropped. It is correct as milliliters per hour, but the question asked for liters, so it still needs to be divided by 1,000.'
        },
        tip:'Write every conversion as a fraction and cancel the units as you multiply: mL/min × min/h × L/mL leaves L/h. If the units that survive the cancelling are not the units the question asked for, you dropped a step — the answer’s units are the check.',
        desmos:'Type 45*60/1000 and Desmos returns 2.7. Compare it with 45/1000 = 0.045 (the time step missing) and 45*60 = 2700 (still in milliliters).',
        desmosLatex:['45*60/1000','45/1000','45*60']
      },
      {
        id:'SMR-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'A rate given per one unit, asked per another (per camper per day to a week for a group)',
        stem:'A summer camp plans on 2.5 liters of drinking water per camper per day. The camp will host 84 campers for one week, which is 7 days. According to this plan, how many liters of drinking water does the camp need in total for the week?',
        choices:{A:'17.5', B:'30', C:'210', D:'1,470'},
        correct:'D',
        expCorrect:'The rate is 2.5 liters per camper per day, so it has to be multiplied by BOTH the number of campers and the number of days. Carry the units: (2.5 L / camper·day) × (84 campers) × (7 days) = 1,470 L — "camper" cancels against the 84 and "day" cancels against the 7, leaving liters. (Check the other order: 84 campers use 2.5 × 84 = 210 L in one day, and 210 × 7 = 1,470 L in a week ✓.)',
        expWrong:{
          A:'17.5 is 2.5 × 7: the days were applied but the campers were dropped. That is the water for ONE camper for the week; it still has to be multiplied by the 84 campers.',
          B:'30 is 210 ÷ 7, the days step inverted. Dividing turns a daily total into a fraction of a day; a week needs MORE water than a day, so the 7 multiplies.',
          C:'210 is 2.5 × 84: the campers were applied but the days were dropped. That is the water for all 84 campers for ONE day; multiply by 7 for the week.'
        },
        tip:'A rate written "per A per B" has two denominators, so it needs two multiplications — one by the count of A, one by the count of B. Cancel as you go: L/(camper·day) × campers × days leaves plain liters, and if a unit is still hanging in the denominator you skipped a factor.',
        desmos:'Type 2.5*84*7 for 1470. Typing 2.5*84 gives 210, which is only one day, and 2.5*7 gives 17.5, which is only one camper.',
        desmosLatex:['2.5*84*7','2.5*84','2.5*7']
      },
      {
        id:'SMR-09', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Proportional relationship (find the constant first)',
        stem:'The amount of fertilizer a nursery uses is directly proportional to the area of the plot being treated. The nursery uses 91 grams of fertilizer on a plot with an area of 14 square meters. How many grams of fertilizer will the nursery use on a plot with an area of 22 square meters?',
        answer:'143',
        expCorrect:'Directly proportional means amount = k × area for one fixed constant k, so the first move is to find k. From the plot that is known: k = 91 grams ÷ 14 square meters = 6.5 grams per square meter. Now use that constant on the new plot: 6.5 × 22 = 143 grams. (Check: 143 ÷ 22 = 6.5, the same constant as 91 ÷ 14 ✓.) Answer: 143.',
        expWrong:{},
        tip:'In a directly proportional relationship the RATIO is what stays fixed, never the difference. Divide the pair you are given to get the constant, then multiply it by the new input. Adding 8 square meters and adding 8 grams is the classic wrong move — proportional means multiply.',
        desmos:'Type 91/14 for the constant, 6.5 grams per square meter, then 6.5*22 for 143. You can also graph y=6.5x and read the point (22, 143) right off the line.',
        desmosLatex:['91/14','6.5*22','y=6.5x']
      },
      {
        id:'SMR-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Scale drawing with a unit conversion after it',
        stem:'A scale drawing of a parking lot uses a scale in which 1 inch represents 12 feet. On the drawing, the parking lot is 7.5 inches long. What is the actual length of the parking lot, in yards? (1 yard = 3 feet.)',
        choices:{A:'2.5', B:'30', C:'90', D:'270'},
        correct:'B',
        expCorrect:'Two steps, and the units say which is which. First the scale: (7.5 in) × (12 ft / 1 in) = 90 feet — "in" cancels and feet is left. Then the unit the question actually wants: (90 ft) × (1 yd / 3 ft) = 30 yards — "ft" cancels and yards is left. (Check forward: 30 yards is 90 feet, and 90 feet ÷ 12 feet per inch = 7.5 inches on the drawing ✓.)',
        expWrong:{
          A:'2.5 is 7.5 ÷ 3: the feet-to-yards step was applied straight to the drawing measurement and the SCALE was dropped. 7.5 is inches on paper, not feet, so it cannot be converted to yards until the scale has turned it into a real length.',
          C:'90 is 7.5 × 12, the correct first step with the second one dropped. That is the length in FEET; the question asked for yards, so it still has to be divided by 3.',
          D:'270 is 90 × 3, the last step inverted. A yard is bigger than a foot, so the count of yards has to be SMALLER than the count of feet — multiplying by 3 sends it the wrong way.'
        },
        tip:'Treat a scale as a fraction like any other conversion: 12 ft / 1 in. Chain it with the rest and cancel — in × (ft/in) × (yd/ft) leaves yards. When the new unit is BIGGER than the old one, the number has to get smaller, which tells you at a glance whether to multiply or divide.',
        desmos:'Type 7.5*12 for 90 feet, then 7.5*12/3 for 30 yards. Typing 7.5*12*3 gives 270, which is the same work with the last step inverted.',
        desmosLatex:['7.5*12','7.5*12/3','7.5*12*3']
      },
      {
        id:'SMR-11', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Density with a unit change (mass over volume)',
        stem:'A sample of a metal alloy has a volume of 120 cubic centimeters and a mass of 0.96 kilograms. What is the density of the alloy, in grams per cubic centimeter? (1 kilogram = 1,000 grams.)',
        choices:{A:'0.008', B:'0.125', C:'8', D:'115.2'},
        correct:'C',
        expCorrect:'Density is mass divided by volume, and the mass has to be in the unit the question asks for first. Convert: 0.96 kg × 1,000 g/kg = 960 grams. Then divide: 960 g ÷ 120 cm³ = 8 grams per cubic centimeter — the units of the answer, g/cm³, match what was requested. (Check: 8 g/cm³ × 120 cm³ = 960 g = 0.96 kg ✓.)',
        expWrong:{
          A:'0.008 is 0.96 ÷ 120: the division is right but the kilogram step was dropped. That number is kilograms per cubic centimeter; multiply it by 1,000 and you get 8.',
          B:'0.125 is 120 ÷ 960, the ratio flipped. That is cubic centimeters per gram, the reciprocal of density. Density is always mass on TOP.',
          D:'115.2 is 0.96 × 120, multiplying where the definition divides (and leaving the mass in kilograms). Density answers "how much mass per 1 cm³", which is a division.'
        },
        tip:'Density = mass ÷ volume, and you convert BEFORE you divide. Write the target unit first — g/cm³ means grams on top, cubic centimeters on the bottom — and build the fraction to match it. If the units you end up with are inverted or in kilograms, the setup is what to fix, not the arithmetic.',
        desmos:'Type 0.96*1000/120 and Desmos returns 8. Compare with 0.96/120 = 0.008 (still in kilograms) and 120/960 = 0.125 (the ratio upside down).',
        desmosLatex:['0.96*1000/120','0.96/120','120/960']
      },
      {
        id:'SMR-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Combined rate (average speed over two legs)',
        stem:'A driver travels 60 miles from a warehouse to a job site at an average speed of 30 miles per hour. The driver then returns along the same 60-mile route at an average speed of 60 miles per hour. What is the driver’s average speed, in miles per hour, for the entire round trip?',
        choices:{A:'20', B:'40', C:'45', D:'60'},
        correct:'B',
        expCorrect:'Average speed is always TOTAL distance divided by TOTAL time, so build both totals. Going out: 60 miles ÷ 30 mph = 2 hours. Coming back: 60 miles ÷ 60 mph = 1 hour. Total distance = 60 + 60 = 120 miles; total time = 2 + 1 = 3 hours. Average speed = 120 ÷ 3 = 40 miles per hour. It lands below the halfway point of 30 and 60 because the driver spent twice as long on the slow leg. (Check: 40 mph × 3 h = 120 miles ✓.)',
        expWrong:{
          A:'20 is 60 ÷ 3: the total time is right but only ONE leg of the distance went on top. The round trip covers 120 miles, not 60.',
          C:'45 is (30 + 60) ÷ 2, averaging the two speeds. That shortcut only works when the two legs take the same amount of TIME; here the legs cover the same distance, and the slow one eats twice as many hours, so the true average is pulled down below 45.',
          D:'60 is 120 ÷ 2, the total distance divided by the outbound 2 hours alone. The return hour belongs in the denominator too, which makes it 3 hours.'
        },
        tip:'Average speed is never the average of the speeds. Compute each leg’s time separately (time = distance ÷ speed), add the distances, add the times, and divide once at the end. Equal distances at different speeds always give an average below the midpoint of the two speeds.',
        desmos:'Type 60/30 and 60/60 for the two leg times, 2 and 1 hour, then 120/3 for 40. Typing (30+60)/2 gives 45, the shortcut that only works when the times are equal.',
        desmosLatex:['60/30','60/60','120/3']
      }
    ]
  });
})();
