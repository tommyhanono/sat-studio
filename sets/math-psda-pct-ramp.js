/* SAT Studio question set — Math: Problem-Solving & Data Analysis — Percentages (PCR-01 to PCR-19) */
(function(){
  window.SAT_SETS.push({
    id: 'math-psda-pct-ramp',
    title: 'Percentages — Warm-up to Test Level',
    section: 'math',
    level: 'Media',
    description: 'A ramp through percentages: percent of a total and back, successive discounts, discount plus tax, the correct base for a percent change, percentage points against percent, reverse percent, simple interest, commission, tips, and mixing two groups.',
    minutes: 25,
    questions: [
      {
        id:'PCR-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Percent of a total, in one step',
        stem:'A bookstore has 640 titles on its shelves. If 35% of the titles are used books, how many of the titles are used books?',
        choices:{A:'35', B:'224', C:'416', D:'605'},
        correct:'B',
        expCorrect:'Write the percent as a decimal and multiply by the total: 0.35 × 640 = 224 used titles. (Check: the other 65% is 0.65 × 640 = 416, and 224 + 416 = 640 ✓.)',
        expWrong:{
          A:'35 is the percent itself, copied down as if it were a count of books. A percent has to be multiplied by the total before it means anything.',
          C:'416 is 65% of 640, the titles that are NOT used. That is the leftover group, not the one being asked about.',
          D:'605 = 640 − 35, subtracting the percent as if it were 35 books. Thirty-five percent of 640 is 224, not 35.'
        },
        tip:'"P percent of a total" is one multiplication: P/100 times the total. If your answer equals the percent, or equals the total minus the percent, you never multiplied.',
        desmos:'Type 0.35*640 and Desmos returns 224. Type 0.65*640 to see the other part, 416, and confirm the two add to 640.',
        desmosLatex:['0.35*640','0.65*640']
      },
      {
        id:'PCR-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Percent discount: the price left after one markdown',
        stem:'A neighborhood gym sells a day pass for $48. During a promotion, the day pass is 15% off. What is the promotional price of the day pass?',
        choices:{A:'$7.20', B:'$33.00', C:'$40.80', D:'$55.20'},
        correct:'C',
        expCorrect:'A discount of 15% leaves 85% of the price: 48 × 0.85 = $40.80. (Check the long way: 15% of 48 is 0.15 × 48 = 7.20, and 48 − 7.20 = 40.80 ✓.)',
        expWrong:{
          A:'$7.20 is the amount taken OFF, not the price paid. It is the middle step; subtract it from $48 to finish.',
          B:'$33.00 = 48 − 15, subtracting the 15 as if it were dollars. Fifteen percent of $48 is $7.20, not $15.',
          D:'$55.20 = 48 × 1.15, which ADDS 15% instead of taking it off. A discount makes the price smaller than $48.'
        },
        tip:'A discount of p% leaves (100 − p)% of the price, so 15% off is one multiplication by 0.85. Multiplying by 1.15 raises the price, which is the opposite of a markdown.',
        desmos:'Type 48*0.85 and Desmos returns 40.8. Type 48-48*0.15 and it returns the same number the long way.',
        desmosLatex:['48*0.85','48-48*0.15']
      },
      {
        id:'PCR-03', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Percent of a total, worked backwards (finding the whole)',
        stem:'At a school fair, 42 raffle tickets were sold during the first hour. Those 42 tickets were 35% of all the raffle tickets sold that day. How many raffle tickets were sold that day in all?',
        answer:'120',
        expCorrect:'Let t be the tickets sold in all. "42 is 35% of t" becomes 0.35t = 42, so t = 42 ÷ 0.35 = 120. (Check: 0.35 × 120 = 42 ✓.) Answer: 120',
        expWrong:{},
        tip:'When the percent and the PART are given and the whole is missing, divide the part by the decimal. Multiplying instead (42 × 0.35 = 14.7) shrinks a number that was already only a piece of the total, so the whole must come out bigger than the part.',
        desmos:'Type 42/0.35 and Desmos returns 120. Check it with 0.35*120, which returns 42.',
        desmosLatex:['42/0.35','0.35*120']
      },
      {
        id:'PCR-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Percent increase between two amounts: which value is the base',
        stem:'An auto repair shop completed 250 oil changes in April and 290 oil changes in May. By what percent did the number of oil changes increase from April to May?',
        choices:{A:'16%', B:'13.8%', C:'40%', D:'116%'},
        correct:'A',
        expCorrect:'Percent change = (new − old) ÷ OLD. The change is 290 − 250 = 40, and the base is the month you started from, April: 40 ÷ 250 = 0.16 = 16%. (Check: 250 × 1.16 = 290 ✓.)',
        expWrong:{
          B:'13.8% divides by the wrong base: 40 ÷ 290 = 0.138. May is where the count ended up, and a percent increase is always measured against where it started, 250.',
          C:'40% reads the raw change, 40 oil changes, as if it were already a percent. It still has to be divided by the 250 it grew from.',
          D:'116% is the ratio 290 ÷ 250, which says how big May is compared with April. The INCREASE is the part above the whole: 116 − 100 = 16.'
        },
        tip:'Percent change divides by the OLD value, every time. Quick check: 250 × (1 + your percent) has to land exactly on 290, and 250 × 1.138 gives 284.5, so the wrong base shows itself in one line.',
        desmos:'Type (290-250)/250 and Desmos returns 0.16. Type (290-250)/290 and it returns 0.1379, the answer the wrong base produces.',
        desmosLatex:['(290-250)/250','(290-250)/290']
      },
      {
        id:'PCR-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two successive percent discounts do not add',
        stem:'A stationery shop takes 20% off the original price of a backpack. A member coupon then takes another 10% off that reduced price. Altogether, the customer pays a price that is what percent below the original price?',
        choices:{A:'2%', B:'28%', C:'30%', D:'72%'},
        correct:'B',
        expCorrect:'Track what SURVIVES each cut. The markdown leaves 80%, and the coupon leaves 90% of that: 0.80 × 0.90 = 0.72. The customer pays 72% of the original, so the price paid is 100 − 72 = 28% below it. (Check on $50: 20% off leaves $40, then 10% off leaves $36, and 50 − 36 = 14, which is 14 ÷ 50 = 28% ✓.)',
        expWrong:{
          A:'2% multiplies the discounts themselves, 0.20 × 0.10 = 0.02. What gets multiplied is what is LEFT after each cut, 0.80 and 0.90.',
          C:'30% adds the two discounts. The 10% is charged on the already reduced price, so it removes less than 10% of the original and the total lands below 30.',
          D:'72% is the percent of the original still PAID. The question asks how far BELOW the original that payment sits: 100 − 72.'
        },
        tip:'Turn each discount into a survivor (20% off gives ×0.80) and multiply the survivors. Then reread the last line: "percent paid" and "percent off" are complements that add to 100.',
        desmos:'Type 0.8*0.9 and Desmos returns 0.72, the fraction still paid. Type 1-0.8*0.9 and it returns 0.28, the fraction taken off.',
        desmosLatex:['0.8*0.9','1-0.8*0.9']
      },
      {
        id:'PCR-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'A discount and then a tax: each percent has its own base',
        stem:'A hardware store lists a drill at $180. The drill is marked 25% off the list price, and then an 8% tax is added to the marked-down price. How much does the customer pay in all?',
        choices:{A:'$135.00', B:'$149.40', C:'$194.40', D:'$145.80'},
        correct:'D',
        expCorrect:'Two steps, two multipliers, in the order the problem gives them. The markdown leaves 75%: 180 × 0.75 = $135. The tax adds 8% of that $135: 135 × 1.08 = $145.80. (Check: 8% of 135 is 10.80, and 135 + 10.80 = 145.80 ✓.)',
        expWrong:{
          A:'$135.00 is the marked-down price. It stops one step early and never adds the tax the question describes.',
          B:'$149.40 charges the tax on the $180 list price (0.08 × 180 = 14.40) instead of on the $135 the customer actually pays. The tax base is the marked-down price, not the sticker.',
          C:'$194.40 = 180 × 1.08, taxing the list price and forgetting the 25% markdown entirely. The total has to come out below $180.'
        },
        tip:'Write every percent as a multiplier and apply them in the stated order: 180 × 0.75 × 1.08. A tax charged "on the sale price" is charged on what is left after the discount.',
        desmos:'Type 180*0.75*1.08 and Desmos returns 145.8. Type 180*0.75+0.08*180 and it returns 149.4, what taxing the list price would cost.',
        desmosLatex:['180*0.75*1.08','180*0.75+0.08*180']
      },
      {
        id:'PCR-07', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Reverse percent: the price before an increase',
        stem:'A hostel raised its nightly rate by 12%. After the increase, one night costs $67.20. What was the nightly rate, in dollars, before the increase?',
        answer:'60',
        expCorrect:'Call the old rate r. An increase of 12% multiplies it by 1.12, so 1.12r = 67.20 and r = 67.20 ÷ 1.12 = 60. (Check forwards: 12% of 60 is 7.20, and 60 + 7.20 = 67.20 ✓.) Answer: 60',
        expWrong:{},
        tip:'To undo a percent change, DIVIDE by its multiplier; never subtract the same percent back. Taking 12% off $67.20 gives $59.14, not $60, because that 12% was charged on the smaller starting price, not on the final one.',
        desmos:'Type 67.20/1.12 and Desmos returns 60. Type 67.20*0.88 and it returns 59.136, which shows why subtracting 12% does not undo adding 12%.',
        desmosLatex:['67.20/1.12','67.20*0.88']
      },
      {
        id:'PCR-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Percentage points against percent change',
        stem:'Last term, 20% of the members of a dance studio took the evening class. This term, 25% of its members take it. The studio has the same number of members in both terms. Which of the following describes the change in the share of members taking the evening class?',
        choices:{
          A:'It rose by 5 percentage points, which is a 25% increase in that share.',
          B:'It rose by 5%, which is the same thing as 5 percentage points.',
          C:'It rose by 25 percentage points.',
          D:'It rose by 20 percentage points, which is a 5% increase in that share.'
        },
        correct:'A',
        expCorrect:'Two different measurements of the same move. Subtracting the shares gives the gap in percentage POINTS: 25 − 20 = 5 points. Dividing that gap by the starting share gives the percent change: 5 ÷ 20 = 0.25 = 25%. (Check with 200 members: 40 took the class, now 50 do, and 50 is 25% more than 40 ✓.)',
        expWrong:{
          B:'"Rose by 5%" is not the same claim as "rose by 5 percentage points": 5% more than 20% is 21%, not 25%. Only the plain subtraction gives points.',
          C:'25 is the percent CHANGE, not a count of points. A rise of 25 points would carry the share from 20% all the way to 45%.',
          D:'20 is the starting share and 5 is the gap; the two numbers have been swapped into the wrong roles.'
        },
        tip:'Subtract two percents and you get percentage POINTS. Divide that gap by the starting percent and you get the percent change. From 20% to 25% is +5 points and +25%, and a headline that says "up 5%" is claiming something much smaller.',
        desmos:'Type 25-20 and Desmos returns 5, the gap in points. Type (25-20)/20 and it returns 0.25, the percent change.',
        desmosLatex:['25-20','(25-20)/20']
      },
      {
        id:'PCR-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Simple interest: the same percent of the original deposit every year',
        stem:'A credit union account pays 5% simple interest each year on the amount first deposited. Camila deposits $2,400 and neither adds nor withdraws money afterward. How much is in the account at the end of 3 years?',
        choices:{A:'$2,520.00', B:'$2,760.00', C:'$2,778.30', D:'$3,600.00'},
        correct:'B',
        expCorrect:'Simple interest is charged on the original $2,400 every year: 0.05 × 2,400 = $120 a year. Three years pay 3 × 120 = $360, so the balance is 2,400 + 360 = $2,760. (Check: 360 ÷ 2,400 = 0.15, which is exactly 3 × 5% ✓.)',
        expWrong:{
          A:'$2,520.00 adds a single year of interest, 2,400 + 120. The question asks for the balance after three of them.',
          C:'$2,778.30 = 2,400 × 1.05³, which is COMPOUND interest: it pays interest on interest. Simple interest keeps the base frozen at the original deposit.',
          D:'$3,600.00 treats the 5% as though it were 50% a year. Five percent of 2,400 is 120, so three years add 360, not 1,200.'
        },
        tip:'Simple interest is I = P × r × t and the base never moves; compound interest multiplies by (1 + r) once per period. When the problem says "simple", adding each year of interest into the base is the trap.',
        desmos:'Type 2400+2400*0.05*3 and Desmos returns 2760. Type 2400*1.05^3 and it returns 2778.3, what compounding would have given.',
        desmosLatex:['2400+2400*0.05*3','2400*1.05^3']
      },
      {
        id:'PCR-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Commission: the percent applies only to the sales, not to the base pay',
        stem:'A clerk at a bike shop is paid $300 per week plus a commission of 6% of the value of the bikes he sells that week. One week his total pay was $540. What was the value of the bikes he sold that week?',
        choices:{A:'$240', B:'$5,000', C:'$4,000', D:'$9,000'},
        correct:'C',
        expCorrect:'Only part of the paycheck comes from sales. Commission = 540 − 300 = $240, and that $240 is 6% of the sales s: 0.06s = 240, so s = 240 ÷ 0.06 = $4,000. (Check: 6% of 4,000 is 240, and 300 + 240 = 540 ✓.)',
        expWrong:{
          A:'$240 is the commission he earned, not the value of the bikes that produced it. It is the middle step; divide it by 0.06 to finish.',
          B:'$5,000 = 300 ÷ 0.06, dividing the flat base pay by the rate. The $300 is paid no matter what he sells, so it is never a percent of anything.',
          D:'$9,000 = 540 ÷ 0.06, treating the whole paycheck as commission. The $300 has to come out first, which is why the answer is well under $9,000.'
        },
        tip:'With "flat pay plus p% of sales", subtract the flat part first and then divide by the decimal. Dividing the entire paycheck by the rate always overstates the sales.',
        desmos:'Type (540-300)/0.06 and Desmos returns 4000. Type 300+0.06*4000 and it returns 540, which checks the paycheck.',
        desmosLatex:['(540-300)/0.06','300+0.06*4000']
      },
      {
        id:'PCR-11', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'A tax and a tip, both charged on the pre-tax total',
        stem:'At a diner, the food on a bill comes to $64.00 before tax. A tax of 8% is added to the food total, and the customer leaves a tip of 20% of that same pre-tax food total. How much does the customer pay in all, in dollars?',
        answer:'81.92',
        expCorrect:'Both percents are charged on the same $64 base, so they can be added. Tax: 0.08 × 64 = $5.12. Tip: 0.20 × 64 = $12.80. Total = 64 + 5.12 + 12.80 = $81.92, which is also 64 × (1 + 0.08 + 0.20) = 64 × 1.28. (Check: 81.92 − 64 = 17.92, and 17.92 ÷ 64 = 0.28 ✓.) Answer: 81.92',
        expWrong:{},
        tip:'Percents add only when they are charged on the SAME base. Both of these come off the pre-tax food, so 1.28 works in one step. Tip the taxed total instead and the bases differ, so you would have to multiply: 64 × 1.08 × 1.20 = 82.944.',
        desmos:'Type 64*1.28 and Desmos returns 81.92. Type 64*1.08*1.2 and it returns 82.944, what tipping on the taxed total would cost.',
        desmosLatex:['64*1.28','64*1.08*1.2']
      },
      {
        id:'PCR-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two groups with different percents: the overall percent is not the midpoint',
        stem:'A garden center has 200 potted herbs and 300 flowering plants. Of the herbs, 30% are on the clearance table, and of the flowering plants, 20% are on the clearance table. What percent of all 500 plants are on the clearance table?',
        choices:{A:'24%', B:'25%', C:'26%', D:'50%'},
        correct:'A',
        expCorrect:'Turn each percent into a count, then divide once. Herbs: 0.30 × 200 = 60. Flowering plants: 0.20 × 300 = 60. That is 60 + 60 = 120 plants out of 500, and 120 ÷ 500 = 0.24 = 24%. (Check: 24% of 500 is 120 ✓.)',
        expWrong:{
          B:'25% is the plain average of 30 and 20. That midpoint is only correct when the two groups are the same size, and here there are 300 flowering plants against 200 herbs.',
          C:'26% leans the result toward the smaller group, as if the 200 herbs outweighed the 300 flowering plants. The bigger group has to pull harder, so the answer sits below 25, not above it.',
          D:'50% adds the two percents, 30 + 20. Percents of different groups cannot be added; only the counts they produce can.'
        },
        tip:'To mix two groups, convert each percent into a COUNT, add the counts, and divide by the combined total. The overall percent always lands between the two given percents, nearer the one belonging to the bigger group.',
        desmos:'Type (0.3*200+0.2*300)/500 and Desmos returns 0.24. Type (30+20)/2 and it returns 25, the midpoint that ignores the group sizes.',
        desmosLatex:['(0.3*200+0.2*300)/500','(30+20)/2']
      },
      {
        id:'PCR-13', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Does the order of a discount and a tax change the total?',
        stem:'A print shop charges $250 for a banner. A 10% coupon comes off the order and a 7% tax is charged on it. One clerk takes the coupon off first and taxes the reduced amount; another taxes the $250 first and takes the coupon off the taxed amount. Which of the following is true?',
        choices:{
          A:'The second clerk charges more, because the tax is figured on the larger amount.',
          B:'The two totals come out equal: each clerk collects $240.75 in all.',
          C:'The first clerk charges more, because the coupon comes off before the tax.',
          D:'The two totals differ by $1.75, the tax charged on the coupon.'
        },
        correct:'B',
        expCorrect:'Both clerks multiply $250 by the same two factors, only in a different order: 250 × 0.90 × 1.07 = 240.75 and 250 × 1.07 × 0.90 = 240.75. (Check the middle steps: 250 × 0.90 = 225, then 225 × 1.07 = 240.75; and 250 × 1.07 = 267.50, then 267.50 × 0.90 = 240.75 ✓.)',
        expWrong:{
          A:'The second clerk does tax a bigger amount, but the coupon then removes 10% of that bigger, taxed figure. The extra tax and the extra discount cancel exactly, because both routes multiply by 0.90 and by 1.07.',
          C:'Taking the coupon off first lowers the tax, and it also lowers the amount the coupon itself is worth. Those are the same multiplication, so neither clerk ends up cheaper.',
          D:'$1.75 is 7% of the $25 coupon. The second clerk does not collect it either, because the coupon takes 10% off a total that already includes that tax.'
        },
        tip:'Percent changes are multipliers, and multipliers commute: a discount and a tax give the same total in either order. Order only matters when one percent is defined on the other result, such as a tip figured on the post-tax total.',
        desmos:'Type 250*0.9*1.07 and then 250*1.07*0.9. Desmos returns 240.75 both times, which is the whole point.',
        desmosLatex:['250*0.9*1.07','250*1.07*0.9']
      },
      {
        id:'PCR-14', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Percent decrease: the base is the value you started from',
        stem:'A kayak rental shop charged $75 a day last summer. This summer it charges $60 a day. By what percent did the daily charge decrease?',
        choices:{A:'15%', B:'25%', C:'80%', D:'20%'},
        correct:'D',
        expCorrect:'Percent decrease = (old − new) ÷ OLD. The drop is 75 − 60 = $15, and the base is last summer, the value you started from: 15 ÷ 75 = 0.20 = 20%. (Check: 75 × 0.80 = 60 ✓.)',
        expWrong:{
          A:'15% is the size of the drop in dollars, $15, reported as if it were already a percent. It still has to be divided by the $75 it came off of.',
          B:'25% divides by the new charge: 15 ÷ 60 = 0.25. That uses the ending value as the base, so it answers a different question — how far $60 would have to RISE to get back to $75.',
          C:'80% is 60 ÷ 75, the fraction of last summer still being charged. The decrease is the part that disappeared: 100 − 80 = 20.'
        },
        tip:'Up or down, divide by where you STARTED. A charge that falls 20% has to rise 25% to come back, and that mismatched pair is exactly what the wrong base hands you.',
        desmos:'Type (75-60)/75 and Desmos returns 0.2. Type (75-60)/60 and it returns 0.25, the wrong-base answer.',
        desmosLatex:['(75-60)/75','(75-60)/60']
      },
      {
        id:'PCR-15', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Markup: recovering the cost from the list price',
        stem:'A museum gift shop sets the list price of a poster by adding a markup of 60% to what the shop paid for it. The list price of one poster is $72.00. What did the shop pay for that poster, in dollars?',
        answer:'45',
        expCorrect:'A markup of 60% multiplies the cost by 1.60. If c is the cost, 1.60c = 72, so c = 72 ÷ 1.60 = 45. (Check forwards: 60% of 45 is 27, and 45 + 27 = 72 ✓.) Answer: 45',
        expWrong:{},
        tip:'A markup is always figured on the COST, so divide the list price by 1 + markup. Taking 60% off the list price instead (72 × 0.40 = 28.80) measures against the list price, which is the one number the markup was never based on.',
        desmos:'Type 72/1.6 and Desmos returns 45. Type 72*0.4 and it returns 28.8, the number the wrong base would have given.',
        desmosLatex:['72/1.6','72*0.4']
      },
      {
        id:'PCR-16', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two successive percent increases do not add',
        stem:'A community pool raised its monthly membership fee by 10% in January and then by another 10% in June, each increase figured on the fee in force at the time. Compared with the fee before January, the June fee is higher by what percent?',
        choices:{A:'1%', B:'10%', C:'20%', D:'21%'},
        correct:'D',
        expCorrect:'Multiply the factors: 1.10 × 1.10 = 1.21, so the fee ends at 121% of the original, an increase of 21%. (Check on a $50 fee: January makes it $55, and 10% of 55 is 5.50, so June makes it $60.50; 60.50 − 50 = 10.50, and 10.50 ÷ 50 = 0.21 ✓.)',
        expWrong:{
          A:'1% multiplies the increases themselves, 0.10 × 0.10 = 0.01. What gets multiplied is the whole factor 1.10, not the 10% slice by itself.',
          B:'10% reports only one of the two rises. The second one is charged on the already raised fee, so it adds more on top rather than nothing.',
          C:'20% adds the two percents. That would hold only if the second 10% were taken on the ORIGINAL fee; it is taken on the bigger January fee, so the total clears 20.'
        },
        tip:'Successive changes multiply as (1 + a)(1 + b). Two rises of 10% give 21%, not 20%, and the extra point is the second 10% charged on the first rise.',
        desmos:'Type 1.1*1.1 and Desmos returns 1.21. Type 50*1.1*1.1 and it returns 60.5, the same result on a real fee.',
        desmosLatex:['1.1*1.1','50*1.1*1.1']
      },
      {
        id:'PCR-17', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'A markup and then a discount: why the percents do not cancel the way they look',
        stem:'A food truck sets the menu price of a sandwich by adding a markup of 25% to its cost. On a slow afternoon the truck sells the sandwich at 20% off the menu price. How does the afternoon price compare with the cost?',
        choices:{
          A:'It is 5% above the cost.',
          B:'It is 5% below the cost.',
          C:'It is equal to the cost.',
          D:'It is 20% below the cost.'
        },
        correct:'C',
        expCorrect:'Chain the multipliers: 1.25 × 0.80 = 1.00, so the afternoon price is exactly the cost. (Check on a $4 cost: the markup gives a $5 menu price, and 20% off $5 is $1, leaving $4 ✓.) The percents cancel because 20% of the larger number is the same money as 25% of the smaller one.',
        expWrong:{
          A:'5% above comes from 25 − 20, as if both percents were charged on the cost. The 20% is charged on the marked-up price, which is bigger, so it removes more than 20% of the cost.',
          B:'5% below is that same subtraction with the sign flipped. Neither direction holds, because the product 1.25 × 0.80 is exactly 1.',
          D:'20% below applies only the discount and drops the markup that came first. The discount comes off the menu price, not off the cost.'
        },
        tip:'Turn every percent into a multiplier and multiply them: 1.25 × 0.80 = 1. A 25% markup is undone by a 20% discount, not by a 25% one, because the discount is charged on the larger marked-up price.',
        desmos:'Type 1.25*0.8 and Desmos returns 1. Type 4*1.25*0.8 and it returns 4, a cost that comes back to itself.',
        desmosLatex:['1.25*0.8','4*1.25*0.8']
      },
      {
        id:'PCR-18', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Reverse a chain of two percent changes',
        stem:'The number of students at a tutoring center fell 15% from 2024 to 2025 and then rose 20% from 2025 to 2026. In 2026 the center has 408 students. How many students did the center have in 2024?',
        answer:'400',
        expCorrect:'Write the chain forward from 2024 with n students: n × 0.85 × 1.20 = 1.02n. So 1.02n = 408 and n = 408 ÷ 1.02 = 400. (Check forwards: 15% off 400 leaves 340, and 20% more than 340 is 340 + 68 = 408 ✓.) Answer: 400',
        expWrong:{},
        tip:'Build the whole chain of multipliers first, then divide ONCE by the product. A fall of 15% followed by a rise of 20% is a net gain of 2%, not 5%, because the rise is charged on the smaller number left after the fall.',
        desmos:'Type 408/(0.85*1.2) and Desmos returns 400. Type 400*0.85*1.2 and it returns 408, which checks the chain.',
        desmosLatex:['408/(0.85*1.2)','400*0.85*1.2']
      },
      {
        id:'PCR-19', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Percent comparison between two months, worked backwards',
        stem:'A bakery reports that its sales in June were 24% higher than its sales in May. The bakery had $9,300 in sales in June. What were the bakery sales in May?',
        choices:{A:'$7,500', B:'$2,232', C:'$7,068', D:'$11,532'},
        correct:'A',
        expCorrect:'"24% higher than May" means June = May × 1.24, so May = 9,300 ÷ 1.24 = $7,500. (Check: 24% of 7,500 is 1,800, and 7,500 + 1,800 = 9,300 ✓.)',
        expWrong:{
          B:'$2,232 = 0.24 × 9,300, a percentage of the June figure rather than a month of sales. The 24% was measured against May, so it is not 24% of 9,300 either.',
          C:'$7,068 = 9,300 × 0.76, taking 24% off the June figure. That makes June the base, but the comparison was built on May: the gap is 24% of 7,500, which is 1,800, not the 2,232 this subtracts.',
          D:'$11,532 = 9,300 × 1.24, raising the larger month again. May is the smaller of the two, so the answer has to come out under $9,300.'
        },
        tip:'"A is p% higher than B" means A = B × (1 + p/100), with B as the base. Given A, divide by that factor; multiplying by (1 − p/100) instead uses the wrong base and always lands short of the real starting value.',
        desmos:'Type 9300/1.24 and Desmos returns 7500. Type 9300*0.76 and it returns 7068, the wrong-base answer.',
        desmosLatex:['9300/1.24','9300*0.76']
      }
    ]
  });
})();
