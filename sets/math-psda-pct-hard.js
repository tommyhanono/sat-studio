/* SAT Studio question set — Math: Percentages, Hard & Brutal (PCH-01 to PCH-22) */
/* Solo PORCENTAJES: cadenas de cambios sucesivos, deshacerlas, el parámetro p,
   puntos porcentuales contra cambio relativo, mezclas de dos grupos de distinto
   tamaño, porcentaje de un porcentaje, interés compuesto contra simple y la
   comparación de dos ofertas.
   `pd-percent` se prueba SEXTA de siete dentro de Problem-Solving, así que ni el
   `skill` ni los primeros 160 caracteres del `stem` pueden llevar "average",
   "mean", "median", "distribution", "range", "weighted" ni "outlier" (se los
   lleva `pd-1var`), "predict", "scatter" ni "association" (`pd-2var`),
   "probability", "independent", "conditional" ni "counting" —ojo con
   "discounting" y "accounting"— (`pd-prob`), "margin of error", "sample size"
   ni "estimate the number" (`pd-margin`), y "randomly selected/assigned",
   "assignment", "cause", "correlation", "experiment" ni "generalize"
   (`pd-claims`, que además corre con `pri:10` y se prueba antes que todas).
   La palabra que SÍ tiene que aparecer en `skill` es "percent", "discount",
   "markup", "interest", "price", "sale", "tax" o "tip". */
(function(){
  window.SAT_SETS.push({
    id: 'math-psda-pct-hard',
    title: 'Percentages — Hard & Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Hard-Module-2 percent work: chains of successive changes where the percents refuse to add, final amounts run backward to the original, percentage points set next to relative change so the tempting number is on the page, two groups of different sizes blended into one percent, and compound interest measured against simple. The brutal tier solves for the percent itself, compares two whole pricing chains, and asks what happens to a quotient when both of its parts move.',
    minutes: 30,
    questions: [
      {
        id:'PCH-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Two successive percent changes that cancel exactly',
        stem:'The Halverson Playhouse raised the price of a balcony seat by 25% for its spring season. For the fall season, the playhouse lowered the spring price by 20%. The fall price is what percent of the price charged before the spring increase?',
        choices:{A:'105%', B:'100%', C:'125%', D:'80%'},
        correct:'B',
        expCorrect:'Work with factors, not with the percents themselves. A 25% increase multiplies by 1.25, and a 20% decrease taken off that new price multiplies by 0.80. Together: 1.25 × 0.80 = 1.00, so the fall price is 100% of the original — exactly where it started. (Check with $40: 40 × 1.25 = $50, and 50 × 0.80 = $40 ✓.) The 20% comes off a bigger number than the 25% was added to, and that is why the two undo each other.',
        expWrong:{
          A:'105% adds the two percents, +25 and −20, to get +5%. Percents can be added only when both are taken of the same base, and here the 20% is taken of the raised price, not of the original.',
          C:'125% stops after the spring increase. That is the price the fall reduction is applied to, not the price the question asks about.',
          D:'80% uses only the fall factor and drops the 25% increase that came first.'
        },
        tip:'Turn every percent change into a multiplier (up p% is 1 + p/100, down p% is 1 − p/100) and multiply them. A rise of p% and a later fall of the same p% never cancel, but a rise of 25% and a fall of 20% do, because 1.25 × 0.80 = 1.',
        desmos:'Type 1.25*0.80 and read 1. Then try 40*1.25 and 50*0.8 to watch the same starting price come back.',
        desmosLatex:['1.25*0.80','40*1.25','50*0.8']
      },
      {
        id:'PCH-02', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Reversing a percent increase followed by a discount',
        stem:'Wexford Outfitters raised the weekend price of a kayak rental by 15% in May. In September the store took 8% off the May price, and the September price is $158.70. What was the weekend price of the kayak rental, in dollars, before the May increase?',
        answer:'150',
        expCorrect:'Build one multiplier for the whole trip, then divide it out. Up 15% is × 1.15, and 8% off that is × 0.92, so the September price is 1.15 × 0.92 = 1.058 times the original. Divide, do not multiply: 158.70 ÷ 1.058 = 150. (Check forward: 150 × 1.15 = 172.50, and 172.50 × 0.92 = 158.70 ✓.) Answer: 150.',
        tip:'To undo a chain of percent changes, multiply all the factors into one number and DIVIDE the final amount by it. Taking 15% off the final price and adding 8% back gives a different number, because each percent is measured against a different base.',
        desmos:'Type 1.15*0.92 to get 1.058, then 158.70/1.058 for the original price, 150.',
        desmosLatex:['1.15*0.92','158.70/1.058']
      },
      {
        id:'PCH-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Percentage points against percent change when the total also moves',
        stem:'In 2021, Harlow Community College enrolled 2,500 students, and 36% of them lived on campus. In 2024 the college enrolled 2,000 students, and 45% of them lived on campus. Which of the following correctly describes what happened between 2021 and 2024?',
        choices:{
          A:'Up 9 percentage points, and the number living on campus was unchanged.',
          B:'Up 9 percent, and the number living on campus also went up 9 percent.',
          C:'Up 25 percentage points, and the number living on campus went up 25%.',
          D:'Up 9 percentage points, and the number living on campus went down 20%.'
        },
        correct:'A',
        expCorrect:'Handle the percent and the head count separately. The percent went from 36% to 45%, a rise of 45 − 36 = 9 PERCENTAGE POINTS (which is a 9/36 = 25% relative rise, a different statement). Now the head count: 0.36 × 2,500 = 900 students in 2021, and 0.45 × 2,000 = 900 students in 2024. Identical. (Check: the share rose by just enough to offset the 500 students the college lost ✓.) A rising percent of a shrinking total can leave the actual number flat.',
        expWrong:{
          B:'This calls the 9-point gap "9 percent" and then assumes the head count follows the percent. Neither holds: 9 points on a base of 36 is a 25% relative rise, and the head count did not move at all.',
          C:'25 is the RELATIVE change, 9/36 = 25%, reported as if it were points. Points are the plain subtraction, 45 − 36 = 9; the relative change is that difference divided by the starting percent.',
          D:'The 20% drop belongs to total enrollment, 2,500 down to 2,000. Applying it to the on-campus count ignores the fact that the on-campus share rose over the same years.'
        },
        tip:'Percentage points are a subtraction of two percents; percent change is that difference divided by the starting percent. And when the total moves too, neither number tells you what the actual count did — build both counts.',
        desmos:'Type 0.36*2500 and 0.45*2000: both give 900. Then 45-36 for the points and (45-36)/36 for the relative change, 0.25.',
        desmosLatex:['0.36*2500','0.45*2000','(45-36)/36']
      },
      {
        id:'PCH-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Percent of a percent in two groups, then the percent of the whole',
        stem:'At the Ravenhill Athletic Club, 30% of the members are juniors and the rest are adults. This season 40% of the juniors and 15% of the adults signed up for the swim program. What percent of all the members of the club signed up for the swim program?',
        choices:{A:'27.5%', B:'12%', C:'22.5%', D:'55%'},
        correct:'C',
        expCorrect:'Give the club 100 members so every percent becomes a count: 30 juniors and 70 adults. Juniors who signed up: 0.40 × 30 = 12. Adults who signed up: 0.15 × 70 = 10.5. Together 12 + 10.5 = 22.5 out of 100, which is 22.5%. (Check: 22.5% lands between 15% and 40%, and much closer to 15% because the adults outnumber the juniors more than two to one ✓.)',
        expWrong:{
          A:'27.5% is the halfway point between 40% and 15%. Splitting the difference is right only when the two groups are the same size, and here the adults are more than twice as many.',
          B:'12% counts only the juniors who signed up, 0.40 × 30. The 10.5 adults who signed up have not been added yet.',
          D:'55% adds the two percents, 40 + 15. They are percents of different groups, so they cannot be added; each has to be multiplied by the share of the club its group makes up.'
        },
        tip:'When two groups of different sizes have different percents, the percent for the whole is 0.30 × 40% + 0.70 × 15%: each group percent multiplied by that group share. The result always lands between the two group percents, nearer the bigger group.',
        desmos:'Type 0.30*40+0.70*15 to get 22.5 in one line. Notice it sits between 15 and 40, much nearer the adults.',
        desmosLatex:['0.30*40+0.70*15','0.40*30','0.15*70']
      },
      {
        id:'PCH-05', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Recovering one group percent from the percent for both groups combined',
        stem:'Fenwick Publishing has 180 employees in its Dover office and 120 employees in its Ashby office. Across the two offices together, 62% of the employees commute by train. In the Dover office, 70% of the employees commute by train. What percent of the Ashby employees commute by train?',
        answer:'50',
        expCorrect:'Turn every percent into a head count before comparing anything. Both offices: 180 + 120 = 300 employees, and 62% of 300 = 186 train commuters. Dover alone: 0.70 × 180 = 126. So Ashby supplies 186 − 126 = 60 of them, out of 120 Ashby employees: 60/120 = 0.50 = 50%. (Check: 0.70 × 180 + 0.50 × 120 = 126 + 60 = 186, which is 62% of 300 ✓.) Answer: 50.',
        tip:'Percents from groups of different sizes cannot be added or subtracted directly. Convert each one to a count, do the arithmetic on the counts, then divide by that group total to get back to a percent.',
        desmos:'Type 0.62*300 to get 186 and 0.7*180 to get 126, then (186-126)/120 for the Ashby percent, 0.5.',
        desmosLatex:['0.62*300','0.7*180','(186-126)/120']
      },
      {
        id:'PCH-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Compound interest against simple interest on the same deposit',
        stem:'Two accounts each start with a deposit of $5,000 and pay 8% per year for 3 years. The first account pays 8% simple interest on the original deposit each year. The second account pays 8% compounded once a year. After 3 years, how much more money is in the second account than in the first?',
        choices:{A:'$1,298.56', B:'$1,200.00', C:'$6,298.56', D:'$98.56'},
        correct:'D',
        expCorrect:'Build both balances, then subtract. Simple: 5,000 × 0.08 × 3 = $1,200 of interest, so the balance is 5,000 + 1,200 = $6,200. Compound: 5,000 × 1.08^3 = 5,000 × 1.259712 = $6,298.56. The second account holds 6,298.56 − 6,200 = $98.56 more. (Check: that $98.56 is only the interest earned ON interest, which after just 3 years is still a small slice ✓.)',
        expWrong:{
          A:'$1,298.56 is all the interest the compounded account earned, 6,298.56 − 5,000. The question asks how much MORE it holds than the other account, so the $1,200 of simple interest still has to come off.',
          B:'$1,200.00 is the simple interest by itself, 5,000 × 0.08 × 3 — one of the two amounts being compared, not the gap between them.',
          C:'$6,298.56 is the whole compounded balance, deposit included. A difference between two accounts can never be larger than either balance.'
        },
        tip:'Simple interest is P·r·t, the same dollar amount every year; compound interest is P(1 + r)^t, because each year the rate applies to a new balance. The gap between them starts small and grows fast with t, so a "how much more" question is never answered by either balance.',
        desmos:'Type 5000*1.08^3 for the compounded balance, 6298.56, and 5000+5000*0.08*3 for the simple balance, 6200. The difference is 98.56.',
        desmosLatex:['5000*1.08^3','5000+5000*0.08*3','5000*1.08^3-6200']
      },
      {
        id:'PCH-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Comparing a single discount with a dollar cut followed by a discount',
        stem:'A coat is listed at $150 at Brindley Supply. Offer 1 takes 35% off the listed price. Offer 2 takes $30 off the listed price and then takes 20% off the reduced amount. Which offer costs the customer less, and by how much?',
        choices:{A:'Offer 2, by $1.50', B:'Offer 1, by $1.50', C:'Offer 2, by $7.50', D:'Offer 1, by $22.50'},
        correct:'A',
        expCorrect:'Price out both offers end to end. Offer 1: 35% off leaves 65%, so 150 × 0.65 = $97.50. Offer 2: 150 − 30 = $120, and 20% off leaves 80%, so 120 × 0.80 = $96.00. Offer 2 costs 97.50 − 96.00 = $1.50 less. (Check: Offer 2 removes 30 + 24 = $54 in all, while Offer 1 removes 0.35 × 150 = $52.50 ✓.)',
        expWrong:{
          B:'The two prices, $97.50 and $96.00, are right but labeled backward. The SMALLER amount, $96.00, is what Offer 2 charges, so Offer 2 is the cheaper one.',
          C:'$7.50 comes from taking the 20% off first and the $30 afterward: 150 × 0.80 − 30 = $90. Order matters, because under the offer as written the 20% applies to $120, not to $150.',
          D:'$22.50 compares $97.50 with $120, the price after only the $30 has come off. The 20% part of Offer 2 has not been applied yet, and it is what pulls Offer 2 below Offer 1.'
        },
        tip:'A percent and a flat dollar amount never merge into one number. Run each offer through in the order given, then compare the two final prices — and watch the order, because a percent taken before a dollar cut is worth more than the same percent taken after it.',
        desmos:'Type 150*0.65 for Offer 1, 97.50, and (150-30)*0.80 for Offer 2, 96. Then 97.5-96 gives the gap, 1.50.',
        desmosLatex:['150*0.65','(150-30)*0.80','97.5-96']
      },
      {
        id:'PCH-08', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'A discount followed by a sales tax',
        stem:'A laptop listed at $1,250 at Marchetti Electronics is sold at 18% off the listed price. A sales tax of 8% is then charged on the discounted amount. How much does the customer pay in total, in dollars?',
        answer:'1107',
        expCorrect:'Two multipliers, one after the other, each applied to the amount right before it. Discount: 18% off leaves 82%, so 1,250 × 0.82 = $1,025. Tax: adding 8% multiplies by 1.08, so 1,025 × 1.08 = $1,107. (Check: the tax is 0.08 × 1,025 = $82, and 1,025 + 82 = 1,107 ✓.) Answer: 1107.',
        tip:'A discount and a tax neither cancel nor add: 18% off and then 8% on is 0.82 × 1.08 = 0.8856, so the customer pays 88.56% of the listed price. Multiply the factors in the order the problem applies them, and remember the tax is charged on the discounted amount, never on the listed price.',
        desmos:'Type 1250*0.82*1.08 to get 1107 in one line, or 1250*0.82 first to see the discounted price, 1025.',
        desmosLatex:['1250*0.82','1250*0.82*1.08']
      },
      {
        id:'PCH-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Markup then discount: the net percent above cost',
        stem:'Sandford Cycles pays a supplier $240 for a bicycle and sets its listed price at a markup of 60% above what it paid. During a sale the shop takes 30% off the listed price. The sale price is what percent above what the shop paid the supplier?',
        choices:{A:'30%', B:'112%', C:'12%', D:'42%'},
        correct:'C',
        expCorrect:'Multiply the factors. A 60% markup multiplies by 1.60, and taking 30% off multiplies by 0.70: 1.60 × 0.70 = 1.12. A factor of 1.12 is 12% above what the shop paid. (Check in dollars: 240 × 1.60 = $384 listed, 384 × 0.70 = $268.80 on sale, and 268.80 − 240 = $28.80, which is 28.80/240 = 12% of 240 ✓.)',
        expWrong:{
          A:'30% subtracts the two percents, 60 − 30. The 30% is taken off the marked-up price of $384, not off the $240 the shop paid, so the two percents are not measured on the same base.',
          B:'112% is the factor 1.12 written as a percent: it is the sale price as a percent OF the cost. The question asks how far ABOVE the cost it lands, which is 112 − 100 = 12%.',
          D:'42% takes 30% off the markup percentage itself, 60 − 0.30 × 60. The sale applies to the price in dollars, not to the number 60.'
        },
        tip:'Cost × (1 + markup) × (1 − discount) gives one net factor. If that factor is 1.12, then "what percent of cost" is 112% and "what percent above cost" is 12% — read which one the question is asking for.',
        desmos:'Type 1.6*0.7 to get 1.12, then 240*1.6*0.7 for the sale price, 268.80, and 268.8/240 to confirm the 1.12.',
        desmosLatex:['1.6*0.7','240*1.6*0.7','268.8/240']
      },
      {
        id:'PCH-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Working backward from a percent of the whole to a percent of a subgroup',
        stem:'At the Willowmere Bakery, 60% of the customers on Saturday ordered coffee. Of all the customers that Saturday, 27% ordered both coffee and a pastry. What percent of the customers who ordered coffee also ordered a pastry?',
        choices:{A:'16.2%', B:'45%', C:'27%', D:'33%'},
        correct:'B',
        expCorrect:'Take 100 customers so the percents become counts: 60 ordered coffee, and 27 ordered both. The question swaps the base from all customers to coffee customers only, so divide by 60, not by 100: 27/60 = 0.45 = 45%. (Check: 45% of the 60 coffee orders is 0.45 × 60 = 27 ✓.)',
        expWrong:{
          A:'16.2% multiplies, 0.27 × 0.60. Multiplying would be right if 27% were already a percent OF the coffee customers; it is a percent of everyone, so the operation runs the other way.',
          C:'27% repeats the number given without changing its base. It is 27% of all customers, and the question asks for a percent of the 60% who ordered coffee — a smaller group, so the answer has to come out larger than 27%.',
          D:'33% subtracts, 60 − 27. Percents on different bases cannot be subtracted, and their difference is not a percent of either one.'
        },
        tip:'A percent means nothing without its base. To move from "x% of everyone" to "what percent of the subgroup", divide by the subgroup share: 27% of all ÷ 60% in the subgroup = 45% of the subgroup. Going the other way you multiply.',
        desmos:'Type 27/60 to get 0.45, then 0.45*60 to check that it hands back 27.',
        desmosLatex:['27/60','0.45*60']
      },
      {
        id:'PCH-11', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Three successive percent changes, which never add',
        stem:'The town of Ashgrove collected 900 tons of glass for recycling in 2021. The amount collected rose 20% in 2022, fell 25% in 2023, and rose 40% in 2024. How many tons of glass did Ashgrove collect in 2024?',
        choices:{A:'1,215 tons', B:'1,080 tons', C:'810 tons', D:'1,134 tons'},
        correct:'D',
        expCorrect:'Apply one factor at a time, each to the amount just before it. 900 × 1.20 = 1,080 tons in 2022. 1,080 × 0.75 = 810 tons in 2023. 810 × 1.40 = 1,134 tons in 2024. (Check in one line: 900 × 1.20 × 0.75 × 1.40 = 900 × 1.26 = 1,134 ✓.) The net effect is a factor of 1.26, a 26% rise, not the 35% the percents appear to add up to.',
        expWrong:{
          A:'1,215 tons adds the three percents, +20 − 25 + 40 = +35%, and computes 900 × 1.35. Percents add only when each is taken of the same base, and here every change is taken of the previous year amount.',
          B:'1,080 tons stops after 2022. That is the number the 25% drop is applied to next, not the 2024 total.',
          C:'810 tons stops after 2023, one year short. The 40% rise still has to be applied.'
        },
        tip:'Chain percent changes by multiplying factors: 1.20 × 0.75 × 1.40 = 1.26. The order of the factors does not matter, adding the percents never works, and the intermediate years are not the answer unless the question asks for one.',
        desmos:'Type 900*1.2*0.75*1.4 to get 1134, and 1.2*0.75*1.4 alone to see the net factor, 1.26.',
        desmosLatex:['900*1.2*0.75*1.4','1.2*0.75*1.4']
      },
      {
        id:'PCH-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Percent share when the part and the whole grow at different rates',
        stem:'In June, the money the Fernlea Cafe took in from pastries was 25% of everything the cafe took in that month. In July, pastry income rose 32% while the cafe total income rose 10%. In July, pastry income was what percent of the cafe total income?',
        choices:{A:'30%', B:'33%', C:'25%', D:'20.8%'},
        correct:'A',
        expCorrect:'Set the June total at $100 so the percent turns into a dollar amount: pastries brought in $25. July pastries: 25 × 1.32 = $33. July total: 100 × 1.10 = $110. The share is 33/110 = 0.30 = 30%. (Check: 30% of 110 is 33 ✓.) The share rose because the part grew faster than the whole, but it went from 25% to 30%, nothing like the 32% the part itself grew.',
        expWrong:{
          B:'33% is the July pastry income in dollars once the June total is set at $100 — the numerator of the fraction, not the share. It still has to be divided by the July total, $110.',
          C:'25% assumes the share held still. A share stays put only when the part and the whole grow by the same percent, and 32% and 10% are not the same.',
          D:'20.8% divides by the wrong factor, 25 × 1.10 ÷ 1.32. The 32% belongs to the part, which sits on top, and the 10% belongs to the whole, which sits underneath.'
        },
        tip:'A share is a fraction: multiply the numerator by its own growth factor and the denominator by its own, then divide. The share rises whenever the part grows faster than the whole, but by far less than the part grew.',
        desmos:'Type 25*1.32 to get 33 and 100*1.1 to get 110, then 33/110 for the share, 0.30.',
        desmosLatex:['25*1.32','100*1.1','33/110']
      },
      {
        id:'PCH-13', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'A percent increase and an equal percent discount, solved for the parameter',
        stem:'A jeweler raised the price of a bracelet by p percent and later took p percent off the raised price. The price after both changes is 9% less than the price before either change. What is the value of p?',
        choices:{A:'3', B:'4.5', C:'30', D:'9'},
        correct:'C',
        expCorrect:'Write both changes as factors in the same unknown and multiply: (1 + p/100)(1 − p/100) = 1 − (p/100)^2. The final price is 9% below the original, so that product equals 0.91. Then (p/100)^2 = 1 − 0.91 = 0.09, so p/100 = √0.09 = 0.3 and p = 30. (Check: 1.30 × 0.70 = 0.91, which is 9% below the original ✓.)',
        expWrong:{
          A:'3 takes the square root of 9 instead of the square root of 0.09. The 9% has to become the decimal 0.09 before the root is taken, and √0.09 = 0.3, which reads as p = 30 percent.',
          B:'4.5 splits the 9% evenly between the two changes. The loss does not divide between them at all — it is the SQUARE of the single percent, which is why p comes out far above 9.',
          D:'9 reads the 9% straight off as the answer. A rise and a fall of 9% leave 1.09 × 0.91 = 0.9919, a loss of less than 1%, nowhere near 9%.'
        },
        tip:'Up p% and then down p% always lands on 1 − (p/100)^2, a net LOSS for every p. Set that expression equal to the final factor and solve. The percent lost is the square of the percent used, so a 9% loss needs p = 30, and a 1% loss needs p = 10.',
        desmos:'Graph y = 1-(x/100)^2 together with y = 0.91 and read the intersection at x = 30. Or just type sqrt(0.09)*100.',
        desmosLatex:['y=1-(x/100)^2','y=0.91','sqrt(0.09)*100']
      },
      {
        id:'PCH-14', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Net percent change after two changes in opposite directions',
        stem:'The Ardenmoor Gallery sold 500 framed prints in 2022. The number it sold rose 35% in 2023 and then fell 40% in 2024. The number sold in 2024 was what percent less than the number sold in 2022?',
        choices:{A:'5%', B:'81%', C:'40%', D:'19%'},
        correct:'D',
        expCorrect:'Net factor first: 1.35 × 0.60 = 0.81, so 2024 came in at 81% of 2022 and the drop is 100 − 81 = 19%. (Check with the counts: 500 × 1.35 = 675 prints in 2023, 675 × 0.60 = 405 in 2024, and 500 − 405 = 95, which is 95/500 = 19% of 500 ✓.)',
        expWrong:{
          A:'5% adds the two percents, +35 − 40. The 40% is taken off 675 prints, a bigger number than the 500 the 35% was taken of, so the loss outweighs the gain by much more than 5 points.',
          B:'81% is the net FACTOR written as a percent: 2024 was 81% OF 2022. "What percent less" asks for the part that disappeared, 100 − 81 = 19%.',
          C:'40% repeats the 2024 decrease, which is measured against 2023. Only the net factor compares 2024 with 2022.'
        },
        tip:'Multiply the factors into one, then read the question carefully: a net factor of 0.81 means 81% OF the original and 19% LESS than the original. Those two numbers always add to 100, and grabbing the wrong one is the most common way to lose a question like this.',
        desmos:'Type 1.35*0.6 to get 0.81, then 1-0.81 for the drop, 0.19. Check with 500*1.35*0.6 = 405.',
        desmosLatex:['1.35*0.6','1-0.81','500*1.35*0.6']
      },
      {
        id:'PCH-15', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Percent change in a per-person figure when both parts change',
        stem:'From 2022 to 2025 the number of students at Copperfield Academy rose 15%, and over the same three years the number of teachers there rose 25%. The number of students per teacher in 2025 was what percent of the number of students per teacher in 2022?',
        choices:{A:'90%', B:'92%', C:'100%', D:'108.7%'},
        correct:'B',
        expCorrect:'Students per teacher is a fraction, so each part carries its own factor: (1.15·S)/(1.25·T) = (1.15/1.25) × (S/T) = 0.92 × (S/T). The 2025 figure is 92% of the 2022 figure, an 8% drop. (Check with numbers: 500 students and 20 teachers gives 25 per teacher; 575 students and 25 teachers gives 23 per teacher; and 23/25 = 0.92 ✓.)',
        expWrong:{
          A:'90% subtracts the percents, as if 15% up on top and 25% up underneath left 100 − 10. A quotient is handled by dividing the factors: 1.15/1.25 = 0.92, not 0.90.',
          C:'100% assumes the figure held steady. That happens only when both counts grow by the SAME percent; here the teachers grew faster, so students per teacher had to fall.',
          D:'108.7% divides the factors the wrong way round, 1.25/1.15. The teacher count is the denominator of students per teacher, so its factor belongs in the denominator.'
        },
        tip:'For a quotient whose top and bottom both change, the new value is (factor on top)/(factor on bottom) times the old one. Faster growth underneath always pushes the quotient down, and the answer is never the difference of the two percents.',
        desmos:'Type 1.15/1.25 to get 0.92. Check it with 575/25 and 500/20, which give 23 and 25, and 23/25 = 0.92.',
        desmosLatex:['1.15/1.25','575/25','500/20']
      },
      {
        id:'PCH-16', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Finding a group total from the percent for the two groups combined',
        stem:'The Aldergrove Tennis Center runs a morning league and an evening league. The morning league has 200 players, and 25% of them entered the fall tournament. In the evening league, 40% of the players entered the fall tournament. Across both leagues together, 34% of the players entered. How many players are in the evening league?',
        answer:'300',
        expCorrect:'Let e be the number of evening players. Entries: 0.25 × 200 = 50 from the morning league, plus 0.40e from the evening league. The combined percent puts those entries over the combined total: (50 + 0.40e)/(200 + e) = 0.34. Multiply out: 50 + 0.40e = 68 + 0.34e, so 0.06e = 18 and e = 300. (Check: 0.40 × 300 = 120 entries, 50 + 120 = 170 entries out of 200 + 300 = 500 players, and 170/500 = 0.34 ✓.) Answer: 300.',
        tip:'A combined percent always lands between the two group percents, and how close it sits to each one is decided by the group totals. Write entries over total as an equation with the unknown appearing in BOTH the numerator and the denominator — that is the whole difficulty, and cross-multiplying clears it in one step.',
        desmos:'Graph y = (50+0.4x)/(200+x) together with y = 0.34 and read the intersection at x = 300. Notice the curve climbs toward 0.40 as x grows.',
        desmosLatex:['y=(50+0.4x)/(200+x)','y=0.34']
      },
      {
        id:'PCH-17', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Compound interest twice a year against simple interest',
        stem:'Two banks each take a deposit of $10,000 for 2 years. Cardwell Bank pays 6% per year compounded twice a year. Tarnbrook Bank pays 6.1% per year in simple interest. After the 2 years, which deposit is worth more, and by about how much?',
        choices:{A:'Cardwell, by about $35', B:'Tarnbrook, by about $35', C:'Cardwell, by about $16', D:'Cardwell, by about $1,405'},
        correct:'A',
        expCorrect:'Compounded twice a year means half the annual rate applied twice as often: 6% ÷ 2 = 3% per period, and 2 years is 4 periods. Cardwell: 10,000 × 1.03^4 = 10,000 × 1.12551 = $11,255.09. Tarnbrook: simple interest is flat, 10,000 × 0.061 × 2 = $1,220, for a balance of $11,220. Cardwell holds 11,255.09 − 11,220 = $35.09 more, about $35. (Check: Cardwell effectively pays 1.03^2 − 1 = 6.09% a year, just under Tarnbrook 6.1%, but it earns on its own interest and that is what puts it ahead ✓.)',
        expWrong:{
          B:'The two balances land within $40 of each other, and this one reverses them. Cardwell ends at $11,255.09 and Tarnbrook at $11,220, so the compounded deposit is the larger of the two.',
          C:'About $16 is the gap when Cardwell is compounded once a year: 10,000 × 1.06^2 = $11,236. Compounding twice a year halves the rate but applies it four times, which earns more, not less.',
          D:'About $1,405 treats the 6% as the rate for each half-year, giving 10,000 × 1.06^4. The stated 6% is a rate PER YEAR, so each half-year period carries 3%.'
        },
        tip:'Compounding n times a year uses rate r/n per period over n·t periods: P(1 + r/n)^(nt). Halving the rate and doubling the periods is not a wash — it beats annual compounding slightly, and these questions are built on exactly that sliver.',
        desmos:'Type 10000*(1+0.06/2)^(2*2) for Cardwell, 11255.09, and 10000*(1+0.061*2) for Tarnbrook, 11220. Subtract to get the 35.09 gap.',
        desmosLatex:['10000*(1+0.06/2)^(2*2)','10000*(1+0.061*2)','10000*(1+0.06/2)^(2*2)-11220']
      },
      {
        id:'PCH-18', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'A falling percent with a growing total: the percent change in the number',
        stem:'In 2021, the Marlowe Library had 8,000 cardholders, and 42% of them borrowed an e-book that year. In 2025 the library had 12,500 cardholders, and 36% of them borrowed an e-book. The number of cardholders who borrowed an e-book in 2025 was what percent greater than the number in 2021?',
        choices:{A:'About 6% greater', B:'About 133.9% greater', C:'About 33.9% greater', D:'About 14.3% less'},
        correct:'C',
        expCorrect:'The percent fell while the total grew, so go straight to the counts. 2021: 0.42 × 8,000 = 3,360 borrowers. 2025: 0.36 × 12,500 = 4,500 borrowers. Percent increase = (4,500 − 3,360)/3,360 = 1,140/3,360 = 0.3393, about 33.9% greater. (Check: 3,360 × 1.339 = 4,499, which rounds to 4,500 ✓.)',
        expWrong:{
          A:'About 6% greater uses 42 − 36 = 6, the gap in percentage POINTS, and even that gap runs the other way: the share fell while the number of borrowers rose.',
          B:'About 133.9% greater is the quotient 4,500/3,360 = 1.339 read straight off. That is the 2025 count as a percent OF the 2021 count; "percent greater" needs the 1 subtracted first.',
          D:'About 14.3% less is the relative drop in the SHARE, 6/42 = 0.143. The share did fall by that much, but the question asks about the number of borrowers, and a library 56% larger more than made up for it.'
        },
        tip:'A percent of a total and the total itself tell different stories. Multiply percent by total to build the count for each year first, then compare, and use (new − old)/old for "percent greater".',
        desmos:'Type 0.42*8000 and 0.36*12500 to get 3360 and 4500, then (4500-3360)/3360 for 0.339.',
        desmosLatex:['0.42*8000','0.36*12500','(4500-3360)/3360']
      },
      {
        id:'PCH-19', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Undoing three successive percent changes',
        stem:'Enrollment at Brightwood Academy rose 10% in its first year under a new head, fell 15% in the second year, and rose 25% in the third year, ending at 935 students. How many students were enrolled before those three years of changes?',
        answer:'800',
        expCorrect:'Collapse the three changes into one factor: 1.10 × 0.85 × 1.25 = 1.16875. That factor turns the original enrollment into 935, so divide: 935 ÷ 1.16875 = 800. (Check forward: 800 × 1.10 = 880, 880 × 0.85 = 748, and 748 × 1.25 = 935 ✓.) Answer: 800.',
        tip:'Going backward through percent changes is division by the product of all the factors, and they may be multiplied in any order. Never undo a 10% rise by taking 10% off the final number — that removes 10% of the wrong base.',
        desmos:'Type 1.1*0.85*1.25 to get 1.16875, then 935/1.16875 for the original enrollment, 800.',
        desmosLatex:['1.1*0.85*1.25','935/1.16875']
      },
      {
        id:'PCH-20', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'The price at which two discount offers cost the same',
        stem:'At Halloway Furnishings, Offer A takes 30% off the listed price of a desk. Offer B takes $60 off the listed price and then takes 15% off that reduced amount. For what listed price do the two offers charge a customer the same amount?',
        choices:{A:'$200', B:'$238', C:'$400', D:'$340'},
        correct:'D',
        expCorrect:'Write each offer as an expression in the listed price L. Offer A: 0.70L. Offer B: 0.85(L − 60) = 0.85L − 51. Set them equal: 0.70L = 0.85L − 51, so 51 = 0.15L and L = 340. (Check: Offer A charges 0.70 × 340 = $238, and Offer B charges 0.85 × (340 − 60) = 0.85 × 280 = $238 ✓.)',
        expWrong:{
          A:'$200 comes from 60 ÷ 0.30, as if the $60 alone had to match a 30% discount. Offer B also takes 15% off, so the $60 is not carrying the comparison by itself.',
          B:'$238 is what each offer CHARGES at the break-even point, not the listed price that produces it. The question asks for the listed price.',
          C:'$400 comes from 0.70L = 0.85L − 60, which forgets to distribute the 15% across the $60. Taking 15% off (L − 60) removes 0.85 × 60 = $51 of list value, not $60.'
        },
        tip:'Turn each offer into an expression in the listed price before comparing, and distribute carefully: a percent applied after a dollar cut shrinks that cut too. Then check which quantity the question wants — the listed price or the amount paid.',
        desmos:'Graph y = 0.70x together with y = 0.85(x-60) and read the intersection at x = 340, y = 238.',
        desmosLatex:['y=0.70x','y=0.85(x-60)']
      },
      {
        id:'PCH-21', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Three nested percents, with a total that is not needed',
        stem:'At Northgate Technical School, 45% of the 1,600 students take a lab science. Of the students who take a lab science, 60% take chemistry, and 25% of those chemistry students are seniors. Seniors taking chemistry make up what percent of all the students at the school?',
        answer:'6.75',
        expCorrect:'Each percent is taken of the group named just before it, so the shares multiply: 0.45 × 0.60 × 0.25 = 0.0675 = 6.75%. The 1,600 is not needed, though it checks the work: 0.45 × 1,600 = 720 in a lab science, 0.60 × 720 = 432 in chemistry, 0.25 × 432 = 108 seniors, and 108/1,600 = 0.0675 ✓. Answer: 6.75.',
        tip:'Nested percents multiply, and each one narrows the group further, so the final share always comes out smaller than the smallest percent in the chain. A total handed to you is often there only as a check: when the question asks for a percent of the whole, the total cancels.',
        desmos:'Type 0.45*0.6*0.25 to get 0.0675, then 0.45*1600, 0.6*720 and 0.25*432 to follow the counts down to 108.',
        desmosLatex:['0.45*0.6*0.25','0.45*1600','0.25*432/1600']
      },
      {
        id:'PCH-22', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'A discount on one part of a bill, then a tax on the new total',
        stem:'A catering bill at Sorrel House comes in two parts: food, which is 70% of the bill, and service, which is the rest. Before any reduction the bill is $600. A coupon takes 25% off the food part only, and an 8% tax is then charged on the new total. How much does the customer pay?',
        choices:{A:'$495.00', B:'$534.60', C:'$486.00', D:'$599.40'},
        correct:'B',
        expCorrect:'Split the bill before touching it: food is 0.70 × 600 = $420, and service is the other $180. The coupon reaches the food only: 420 × 0.75 = $315. New total: 315 + 180 = $495. Tax on that total: 495 × 1.08 = $534.60. (Check: the coupon saved 0.25 × 420 = $105, and 600 − 105 = $495 before tax ✓.)',
        expWrong:{
          A:'$495.00 is the total after the coupon but before the 8% tax — the second-to-last step. The tax is still owed on that amount.',
          C:'$486.00 applies the 25% to the whole $600. The coupon covers the food part only, so the $180 of service keeps its full value.',
          D:'$599.40 takes the 25% off the service part instead of the food part. Reducing the smaller part saves only $45 rather than $105, which is why the total lands higher.'
        },
        tip:'When a percent applies to part of an amount, split the amount first, change only the part named, then put it back together before applying anything that hits the whole, such as a tax. A discount on 70% of a bill is never the same as that discount on the bill.',
        desmos:'Type 0.7*600 and 0.3*600 for the two parts, 420 and 180, then (420*0.75+180)*1.08 for the final amount, 534.60.',
        desmosLatex:['0.7*600','(420*0.75+180)','(420*0.75+180)*1.08']
      }
    ]
  });
})();
