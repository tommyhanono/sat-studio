/* SAT Studio question set — Math: Problem-Solving & Data Analysis (PSB-01 to PSB-34) */
(function(){

  /* ---- Histograma de PSB-15: 30 días, frecuencias 4,7,9,5,3,2 para 0..5 llamadas.
     Escala: cada unidad de frecuencia son 17 px; la base está en y = 205. ---- */
  var FIG_CALLS =
    '<svg viewBox="0 0 340 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram of the number of service calls logged on each of 30 days. The horizontal axis shows the number of service calls in a day, from 0 to 5, and the vertical axis shows the number of days, from 0 to 10. The bars are: 0 calls on 4 days, 1 call on 7 days, 2 calls on 9 days, 3 calls on 5 days, 4 calls on 3 days and 5 calls on 2 days.">' +
    '<g fill="none" stroke="#e4e4e4"><path d="M50 171H320M50 137H320M50 103H320M50 69H320M50 35H320"/></g>' +
    '<g fill="#324DC7">' +
    '<rect x="56" y="137" width="36" height="68"/><rect x="98" y="86" width="36" height="119"/>' +
    '<rect x="140" y="52" width="36" height="153"/><rect x="182" y="120" width="36" height="85"/>' +
    '<rect x="224" y="154" width="36" height="51"/><rect x="266" y="171" width="36" height="34"/>' +
    '</g>' +
    '<path d="M50 30V205H320" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<g font-size="12" font-family="Georgia,serif" fill="#1e1e1e">' +
    '<g text-anchor="middle"><text x="74" y="221">0</text><text x="116" y="221">1</text>' +
    '<text x="158" y="221">2</text><text x="200" y="221">3</text><text x="242" y="221">4</text>' +
    '<text x="284" y="221">5</text>' +
    '<text x="179" y="243" font-size="13">service calls in a day</text>' +
    '<text x="14" y="118" font-size="13" transform="rotate(-90 14 118)">number of days</text></g>' +
    '<g text-anchor="end"><text x="43" y="209">0</text><text x="43" y="175">2</text>' +
    '<text x="43" y="141">4</text><text x="43" y="107">6</text><text x="43" y="73">8</text>' +
    '<text x="43" y="39">10</text></g></g></svg>';

  /* ---- Box plots de PSB-18. Escala: valor v → x = 70 + 8.5v.
     Kestrels 4 · 10 · 14 · 18 · 30   ·   Herons 8 · 12 · 14 · 16 · 22 ---- */
  var FIG_BOXES =
    '<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two box plots drawn on the same horizontal scale, which runs from 0 to 30 points. The top plot, for the Kestrels, has minimum 4, first quartile 10, median 14, third quartile 18 and maximum 30. The bottom plot, for the Herons, has minimum 8, first quartile 12, median 14, third quartile 16 and maximum 22.">' +
    '<g fill="none" stroke="#e4e4e4"><path d="M70 25V160M155 25V160M240 25V160M325 25V160"/></g>' +
    '<g stroke="#1e1e1e" stroke-width="1.5" fill="none">' +
    '<path d="M104 57.5H155M223 57.5H325M104 45V70M325 45V70"/>' +
    '<path d="M138 122.5H172M206 122.5H257M138 110V135M257 110V135"/></g>' +
    '<g fill="#dbe2f7" stroke="#1e1e1e" stroke-width="1.5">' +
    '<rect x="155" y="40" width="68" height="35"/><rect x="172" y="105" width="34" height="35"/></g>' +
    '<g stroke="#B8860B" stroke-width="3"><path d="M189 40V75M189 105V140"/></g>' +
    '<path d="M70 175H342" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<g stroke="#1e1e1e"><path d="M70 175V181M112.5 175V181M155 175V181M197.5 175V181M240 175V181M282.5 175V181M325 175V181"/></g>' +
    '<g font-size="12" font-family="Georgia,serif" fill="#1e1e1e">' +
    '<g text-anchor="middle"><text x="70" y="195">0</text><text x="112.5" y="195">5</text>' +
    '<text x="155" y="195">10</text><text x="197.5" y="195">15</text><text x="240" y="195">20</text>' +
    '<text x="282.5" y="195">25</text><text x="325" y="195">30</text>' +
    '<text x="206" y="214" font-size="13">points scored in a game</text></g>' +
    '<g text-anchor="end" font-size="12"><text x="62" y="62">Kestrels</text>' +
    '<text x="62" y="127">Herons</text></g></g></svg>';

  /* ---- Nube de PSB-21: 8 puntos claramente descendentes, y = errores.
     Escala: x → 55 + 28x, y → 205 − 8y. ---- */
  var GYM_PTS = [[1,18],[2,17],[3,15],[4,14],[5,12],[6,11],[7,9],[8,8]];
  var FIG_GYM =
    '<svg viewBox="0 0 340 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scatterplot of the number of errors in a routine (y) against the number of practice hours in a week (x) for 8 gymnasts. The points are (1, 18), (2, 17), (3, 15), (4, 14), (5, 12), (6, 11), (7, 9) and (8, 8). They fall in a tight line that goes down from left to right. No line of best fit is drawn.">' +
    '<g fill="none" stroke="#e4e4e4"><path d="M111 40V205M167 40V205M223 40V205M279 40V205M55 165H320M55 125H320M55 85H320M55 45H320"/></g>' +
    '<path d="M55 35V205H320" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<g fill="#324DC7">' +
    GYM_PTS.map(function(p){
      return '<circle cx="' + (55 + p[0] * 28) + '" cy="' + (205 - p[1] * 8) + '" r="3.6"/>';
    }).join('') +
    '</g>' +
    '<g font-size="12" font-family="Georgia,serif" fill="#1e1e1e">' +
    '<g text-anchor="middle"><text x="111" y="221">2</text><text x="167" y="221">4</text>' +
    '<text x="223" y="221">6</text><text x="279" y="221">8</text>' +
    '<text x="187" y="243" font-size="13">x (practice hours in a week)</text>' +
    '<text x="14" y="120" font-size="13" transform="rotate(-90 14 120)">y (errors)</text></g>' +
    '<g text-anchor="end"><text x="48" y="209">0</text><text x="48" y="169">5</text>' +
    '<text x="48" y="129">10</text><text x="48" y="89">15</text><text x="48" y="49">20</text>' +
    '</g></g></svg>';

  /* ---- Tabla de doble entrada de PSB-24 a PSB-28. 400 hogares.
     El truco vive en la columna de cable: 84/140 = 0.6 = 240/400. ---- */
  var TBL_INTERNET =
    '<table><thead><tr><th></th><th>Fiber</th><th>Cable</th><th>Satellite</th><th>Total</th></tr></thead>' +
    '<tbody>' +
    '<tr><th>Streams video daily</th><td>126</td><td>84</td><td>30</td><td>240</td></tr>' +
    '<tr><th>Does not stream video daily</th><td>54</td><td>56</td><td>50</td><td>160</td></tr>' +
    '<tr><th>Total</th><td>180</td><td>140</td><td>80</td><td>400</td></tr>' +
    '</tbody></table>';

  window.SAT_SETS.push({
    id: 'math-psda-b',
    title: 'Data Analysis — Full Sweep',
    section: 'math',
    level: 'Media',
    description: 'All seven Problem-Solving and Data Analysis skills in one pass: rates and unit chains, successive percents and percentage points, center and spread, scatterplots and residuals, two-way tables and conditional probability, margin of error, and what a study design does and does not let you claim.',
    minutes: 55,
    questions: [

      /* ============ Ratios, rates and units (PSB-01 a PSB-06) ============ */
      {
        id:'PSB-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Chained unit conversion: millimeters per second into meters',
        stem:'A 3D printer pushes filament out at a constant rate of 42 millimeters per second. At that rate, how many meters of filament does the printer push out in 5 minutes?',
        choices:{A:'12.6', B:'126', C:'1,260', D:'0.21'},
        correct:'A',
        expCorrect:'Convert the time first, then the length. 5 minutes = 5 × 60 = 300 seconds, so the printer puts out 42 × 300 = 12,600 millimeters. A meter holds 1,000 millimeters, so 12,600 ÷ 1,000 = 12.6 meters. (Check backwards: 12.6 m = 12,600 mm, and 12,600 ÷ 42 = 300 s = 5 min ✓.)',
        expWrong:{
          B:'126 divides by 100 instead of 1,000. One hundred is the number of CENTIMETERS in a meter; millimeters come 1,000 to the meter.',
          C:'1,260 divides by 10, the step from millimeters to centimeters only. Two more steps of 10 are still missing.',
          D:'0.21 uses 5 SECONDS where the question says 5 minutes: 42 × 5 = 210 mm = 0.21 m. A rate given per second needs the time in seconds, so 5 minutes has to become 300 first.'
        },
        tip:'Write each conversion as a fraction that cancels the unit you want to lose: (42 mm/1 s) × (60 s/1 min) × (5 min) × (1 m/1,000 mm). If the units cancel down to the one the question asks for, the arithmetic is the easy part.',
        desmos:'Type 42*300/1000 and Desmos returns 12.6. Typing 42*5/1000 returns 0.21, which is what forgetting the minutes costs you.',
        desmosLatex:['42*300/1000','42*5/1000']
      },
      {
        id:'PSB-02', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Density: mass from volume, with a change of unit at the end',
        stem:'A solid bar of a copper alloy has a density of 8.4 grams per cubic centimeter. The bar is a rectangular block that measures 12 centimeters by 5 centimeters by 2.5 centimeters. What is the mass of the bar, in kilograms?',
        answer:'1.26',
        expCorrect:'Density is mass per unit of volume, so mass = density × volume. The volume is 12 × 5 × 2.5 = 150 cubic centimeters, and the mass is 8.4 × 150 = 1,260 grams. The question asks for kilograms, and a kilogram holds 1,000 grams, so 1,260 ÷ 1,000 = 1.26 kilograms. (Check: 1.26 kg = 1,260 g, and 1,260 ÷ 150 = 8.4 g per cubic centimeter ✓.) Answer: 1.26.',
        expWrong:{},
        tip:'Density is a rate, so it behaves like one: multiply it by volume to get mass, divide mass by it to get volume. Do the unit change LAST, after the number is right, and check which unit the question wants before you write the answer down.',
        desmos:'Type 12*5*2.5 for the volume (150), then 8.4*150 for the mass in grams (1260), then 1260/1000 for kilograms.',
        desmosLatex:['12*5*2.5','8.4*150','1260/1000']
      },
      {
        id:'PSB-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Speed for a whole trip: total distance over total time',
        stem:'A cyclist rides the 36 kilometers of a coastal road at a steady 18 kilometers per hour, then rides the same 36 kilometers back at a steady 12 kilometers per hour. What is her speed for the entire 72-kilometer ride, in kilometers per hour?',
        choices:{A:'15', B:'14.4', C:'7.2', D:'30'},
        correct:'B',
        expCorrect:'Speed for a whole trip is total distance ÷ total time, never the center of the two speeds. Going out: 36 ÷ 18 = 2 hours. Coming back: 36 ÷ 12 = 3 hours. Total time = 5 hours and total distance = 72 km, so the speed is 72 ÷ 5 = 14.4 km per hour. (Check: 14.4 × 5 = 72 ✓. It lands below 15 because she spends MORE time on the slow leg.)',
        expWrong:{
          A:'15 is the center of 18 and 12. That would be right only if she spent the same TIME at each speed; here the slow leg takes 3 hours against 2, so the slow speed carries more weight and the result has to fall below 15.',
          C:'7.2 uses the full 72 kilometers on each leg: 72/18 + 72/12 = 10 hours, then 72 ÷ 10. Each leg is only 36 kilometers long.',
          D:'30 adds the two speeds. Speeds add only when two things move at once in the same direction, not when one trip follows another.'
        },
        tip:'For any average-speed question, build two totals and divide: total distance ÷ total time. The center of the two speeds is correct only when the two TIMES are equal; when the two DISTANCES are equal, the answer always lands below it.',
        desmos:'Type 36/18+36/12 to get the total time, 5. Then type 72/5 for 14.4. Compare it with (18+12)/2, which returns 15.',
        desmosLatex:['36/18+36/12','72/5','(18+12)/2']
      },
      {
        id:'PSB-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Scale on a floor plan: from plan lengths to a real area',
        stem:'On a floor plan drawn to scale, 2.5 centimeters represents 4 meters. A rectangular hall measures 7.5 centimeters by 5 centimeters on the plan. What is the actual area of the hall, in square meters?',
        choices:{A:'37.5', B:'60', C:'96', D:'600'},
        correct:'C',
        expCorrect:'Scale each LENGTH first, then multiply. The scale is 4 ÷ 2.5 = 1.6 meters for every centimeter on the plan, so 7.5 cm is 7.5 × 1.6 = 12 meters and 5 cm is 5 × 1.6 = 8 meters. The area is 12 × 8 = 96 square meters. (Check with the area factor: the plan area is 7.5 × 5 = 37.5 cm², and 37.5 × 1.6² = 37.5 × 2.56 = 96 ✓.)',
        expWrong:{
          A:'37.5 is the area on the PAPER, in square centimeters. It is the right first step but it is still at plan size; it has to be scaled up.',
          B:'60 multiplies the plan area by 1.6 once. A length factor of 1.6 becomes an AREA factor of 1.6² = 2.56, because both sides of the rectangle stretch.',
          D:'600 reads the scale as 1 centimeter for 4 meters, which ignores the 2.5. That would make the hall 30 m by 20 m; the real factor is 1.6 meters per centimeter.'
        },
        tip:'A scale factor k for lengths is k² for areas and k³ for volumes. The safe route is always to convert each length separately and then multiply, which never needs that rule at all.',
        desmos:'Type 4/2.5 for the factor 1.6, then (7.5*1.6)*(5*1.6) for 96. Typing 7.5*5*1.6 gives 60, the trap of scaling the area only once.',
        desmosLatex:['4/2.5','(7.5*1.6)*(5*1.6)','7.5*5*1.6']
      },
      {
        id:'PSB-05', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Inverse proportion: pump-minutes, and the EXTRA pumps the question asks for',
        stem:'Six identical pumps, all working at the same constant rate, drain a reservoir in 40 minutes. The reservoir now has to be drained in 15 minutes instead. How many ADDITIONAL pumps of the same kind are needed?',
        answer:'10',
        expCorrect:'Pumps and time are inversely proportional: the product pumps × minutes is the fixed amount of work. Here that product is 6 × 40 = 240 pump-minutes. To finish in 15 minutes the crew needs 240 ÷ 15 = 16 pumps. The question asks for the ADDITIONAL pumps, so the answer is 16 − 6 = 10. (Check: 16 × 15 = 240 ✓.) Answer: 10.',
        expWrong:{},
        tip:'In an inverse relationship the PRODUCT stays constant, so find that product once and reuse it. Then read the final line again: "how many more" is a different number from "how many", and stopping at 16 is the most common way to lose this question.',
        desmos:'Type 6*40 for the 240 pump-minutes, then 240/15 for the 16 pumps needed, then 240/15-6 for the 10 extra.',
        desmosLatex:['6*40','240/15','240/15-6']
      },
      {
        id:'PSB-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Chained rates: kilograms per hour from a cycle, then whole shifts',
        stem:'A delivery drone carries 4 kilograms of cargo per trip and completes 3 trips every 20 minutes. A warehouse runs 5 of these drones at the same time, for one 8-hour shift each day, to move 9 metric tons of cargo (1 metric ton = 1,000 kilograms). What is the smallest number of full days the move can take?',
        choices:{A:'6', B:'19', C:'50', D:'7'},
        correct:'D',
        expCorrect:'Build one drone-hour first. In 20 minutes a drone moves 4 × 3 = 12 kilograms, and an hour holds three 20-minute blocks, so one drone moves 12 × 3 = 36 kilograms per hour. Five drones move 36 × 5 = 180 kilograms per hour. The load is 9 × 1,000 = 9,000 kilograms, so the work takes 9,000 ÷ 180 = 50 hours. At 8 hours a day that is 50 ÷ 8 = 6.25 days, and a quarter of a day still needs a day of its own, so the answer is 7. (Check: 6 days × 8 h × 180 kg = 8,640 kg, which is short of 9,000 ✓.)',
        expWrong:{
          A:'6 comes from dropping the 0.25 in 6.25. Six days move only 8,640 kilograms, so 360 kilograms are still sitting there; when a question asks for the smallest number of FULL periods, a leftover always rounds up.',
          B:'19 forgets the 3 trips in each cycle and treats a drone as 4 kilograms per 20 minutes, that is 12 kilograms per hour. That gives 60 kilograms per hour for the fleet, 150 hours and 18.75 days.',
          C:'50 is the number of HOURS, the step just before the last one. The question counts days of 8 hours, so the 50 still has to be divided by 8 and rounded up.'
        },
        tip:'Chain the rate up one unit at a time and write the unit next to every number: kilograms per trip → per 20 minutes → per hour → per fleet-hour. Then read the last line for two traps at once: the unit it wants, and whether a leftover has to round UP.',
        desmos:'Type 4*3*3 for the 36 kilograms per drone-hour, then 9000/(36*5) for the 50 hours, then 50/8 for 6.25 days. Rounding up gives 7.',
        desmosLatex:['4*3*3','9000/(36*5)','50/8']
      },

      /* ============ Percentages (PSB-07 a PSB-12) ============ */
      {
        id:'PSB-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'A percent of a percent: the second one applies to the smaller group',
        stem:'At a school with 400 students, 45% of the students are enrolled in an art elective, and 35% of those art students chose ceramics. How many students chose ceramics?',
        choices:{A:'63', B:'140', C:'180', D:'320'},
        correct:'A',
        expCorrect:'Take the percents one after the other, each on the group it belongs to. Art students: 0.45 × 400 = 180. Of those, ceramics: 0.35 × 180 = 63. (Check in one line: 0.45 × 0.35 = 0.1575, and 0.1575 × 400 = 63 ✓, so ceramics students are 15.75% of the school.)',
        expWrong:{
          B:'140 is 35% of the whole school. The 35% is measured inside the art elective, which holds only 180 students, not 400.',
          C:'180 is the number of art students, the step before the last one. It still has to be cut down to the 35% who chose ceramics.',
          D:'320 adds the percents: 45 + 35 = 80, then 80% of 400. Percents that apply to different groups never add.'
        },
        tip:'Ask what each percent is a percent OF. A second percent applied to a subgroup multiplies: 45% then 35% is 0.45 × 0.35 = 15.75% of the whole, which is always smaller than either one alone.',
        desmos:'Type 0.45*400 for the 180 art students, then 0.35*180 for 63. Typing 0.45*0.35*400 gets there in one step.',
        desmosLatex:['0.45*400','0.35*180','0.45*0.35*400']
      },
      {
        id:'PSB-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Simple interest: the same percent of the original principal each year',
        stem:'A savings account pays 4.5% simple interest each year on a deposit of $1,200, and no money is added or taken out. How much interest does the deposit earn in 3 years?',
        choices:{A:'$54.00', B:'$162.00', C:'$169.40', D:'$1,362.00'},
        correct:'B',
        expCorrect:'Simple interest is charged on the ORIGINAL principal every year: I = P × r × t = 1,200 × 0.045 × 3. One year earns 1,200 × 0.045 = $54, so three years earn 54 × 3 = $162. (Check: 162 ÷ 1,200 = 0.135, which is 4.5% three times ✓.)',
        expWrong:{
          A:'$54.00 is one year of interest. The question covers 3 years, so it has to be multiplied by 3.',
          C:'$169.40 is what COMPOUND interest would earn: 1,200 × 1.045³ − 1,200. Compounding pays interest on the interest, and the word "simple" is there to rule that out.',
          D:'$1,362.00 is the balance at the end, principal included. The question asks only for the interest, which is 1,362 − 1,200.'
        },
        tip:'Simple interest grows by the same amount every year, so it is linear: I = Prt. Compound interest multiplies, so it is exponential: A = P(1 + r)^t. Find the word that tells you which one before touching the numbers.',
        desmos:'Type 1200*0.045*3 for 162. Then type 1200*1.045^3-1200 and Desmos returns about 169.40, which is the compound version.',
        desmosLatex:['1200*0.045*3','1200*1.045^3-1200']
      },
      {
        id:'PSB-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two successive discounts do not add',
        stem:'A jacket is marked down 30% off its original price. At the register, a coupon takes another 20% off the marked-down price. The amount the customer pays is what percent below the original price?',
        choices:{A:'14%', B:'50%', C:'44%', D:'56%'},
        correct:'C',
        expCorrect:'Work with what is LEFT after each cut. The markdown leaves 70%, and the coupon leaves 80% of that: 0.70 × 0.80 = 0.56, so the customer pays 56% of the original price. Being 56% below is the same as being 44% off. (Check on $100: 30% off leaves $70, then 20% off leaves $56, and $100 − $56 = $44 ✓.)',
        expWrong:{
          A:'14% is only the second discount measured against the original price: 20% of the $70 that was left is $14. The first $30 still has to be added, which is how 14 becomes 44.',
          B:'50% adds the two discounts. The second one is taken on the already reduced price, so it removes less than 20% of the original and the total always lands below 50.',
          D:'56% is the percent of the original the customer PAYS, not the percent off. The question asks how far below the original the payment is: 100 − 56.'
        },
        tip:'Turn every discount into what remains (30% off → ×0.70) and multiply the survivors. Then check the last line: "percent off" and "percent of" are complements, and they always add to 100.',
        desmos:'Type 0.7*0.8 and Desmos returns 0.56, the fraction still paid. Then 1-0.7*0.8 returns 0.44, the fraction taken off.',
        desmosLatex:['0.7*0.8','1-0.7*0.8']
      },
      {
        id:'PSB-10', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Working backwards from the final price through a discount and a tax',
        stem:'A chair is sold at a discount of 15% off its original price, and then a 7% tax is added to the discounted price. The customer pays $181.90. What was the original price of the chair, in dollars?',
        answer:'200',
        expCorrect:'Call the original price p and write the two steps as multipliers: the discount leaves 0.85p and the tax turns that into 1.07 × 0.85p = 0.9095p. So 0.9095p = 181.90 and p = 181.90 ÷ 0.9095 = 200. (Check forwards: 15% off $200 is $170, and 7% tax on $170 adds $11.90, for $181.90 ✓.) Answer: 200.',
        expWrong:{},
        tip:'Never undo a percent by adding the same percent back: taking 15% off $200 gives $170, but adding 15% to $170 gives $195.50. Build the chain of multipliers forwards, then DIVIDE by the whole chain once.',
        desmos:'Type 181.90/(0.85*1.07) and Desmos returns 200. Then check with 200*0.85*1.07, which returns 181.9.',
        desmosLatex:['181.90/(0.85*1.07)','200*0.85*1.07']
      },
      {
        id:'PSB-11', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Percentage points against percent change, when the group size also moves',
        stem:'In 2023, 24% of the 900 employees of a firm worked remotely. In 2025, 30% of its 1,200 employees worked remotely. Which of the following correctly compares the two years?',
        choices:{
          A:'The share working remotely rose by 6%, and the number working remotely rose by 6% as well.',
          B:'The share working remotely rose by 25 percentage points, and the number of them rose by 25%.',
          C:'The share working remotely rose by 6 percentage points, and the number of them rose by 25%.',
          D:'The share working remotely rose by 6 percentage points, and the number of them rose by about 67%.'
        },
        correct:'D',
        expCorrect:'Two different quantities move here. The SHARE goes from 24% to 30%, a gap of 6 percentage points (and, as a relative change, 6 ÷ 24 = 25%). The NUMBER goes from 0.24 × 900 = 216 people to 0.30 × 1,200 = 360 people, an increase of 144, which is 144 ÷ 216 = 0.667, about 67%. The workforce itself grew from 900 to 1,200, so the count climbs much faster than the share does.',
        expWrong:{
          A:'"Rose by 6%" describes the share wrongly: a move from 24% to 30% is 6 percentage POINTS, and as a percent change it is 25%. The count does not follow the share either, because the firm hired 300 more people.',
          B:'25 is the relative change of the share, not a count of points. Percentage points are the plain subtraction, 30 − 24 = 6; calling that 25 points would mean the share reached 49%.',
          C:'The first half is right, but 25% belongs to the share, not to the people. Applying it to the count ignores that the workforce grew by a third at the same time.'
        },
        tip:'From 24% to 30% there are two true statements: "up 6 percentage points" (subtract) and "up 25%" (divide by the starting share). And when the base group changes size too, the COUNT has its own percent change, which you get from the two counts, never from the two percents.',
        desmos:'Type 0.24*900 and 0.3*1200 for the two counts, 216 and 360. Then (360-216)/216 returns about 0.667, and (30-24)/24 returns 0.25.',
        desmosLatex:['0.24*900','0.3*1200','(360-216)/216','(30-24)/24']
      },
      {
        id:'PSB-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Three successive percent changes, and why they never add',
        stem:'The number of riders on a bus route fell 20% from March to April, rose 35% from April to May, and then fell 10% from May to June. The number of riders in June was what percent of the number in March?',
        choices:{A:'105%', B:'97.2%', C:'98%', D:'102.8%'},
        correct:'B',
        expCorrect:'Turn each change into a multiplier and multiply them in order: 0.80 × 1.35 × 0.90. The first two give 1.08, so May stood 8% above March; the third cuts that by a tenth: 1.08 × 0.90 = 0.972. June is 97.2% of March, that is, 2.8% BELOW it. (Check on 1,000 riders: 800, then 1,080, then 972 ✓.)',
        expWrong:{
          A:'105% adds the changes: −20 + 35 − 10 = +5. Each percent is taken on a different starting number, so they never add; here the sum even gets the direction wrong.',
          C:'98% takes 10 percentage POINTS off the 108 instead of 10% of it. Ten percent of 108 is 10.8, which leaves 97.2.',
          D:'102.8% has the right size of change, 2.8, but the wrong direction. The chain lands at 0.972, which is BELOW 1, so June has to come out under 100%.'
        },
        tip:'Convert every change to a multiplier (−20% → 0.80, +35% → 1.35) and multiply. A product below 1 means a net fall, above 1 a net rise, and the distance from 1 is the net percent change. The order does not matter; the adding does.',
        desmos:'Type 0.8*1.35*0.9 and Desmos returns 0.972. Typing 1000*0.8*1.35*0.9 follows 1,000 riders down to 972.',
        desmosLatex:['0.8*1.35*0.9','1000*0.8*1.35*0.9']
      },

      /* ============ One-variable data (PSB-13 a PSB-18) ============ */
      {
        id:'PSB-13', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Mean, median, mode and range read off a short list',
        stem:'A weather station recorded the number of rainy days in each of 7 months: 3, 3, 6, 7, 10, 12 and 15. By how much does the mean of these 7 values exceed their median?',
        choices:{A:'5', B:'1', C:'4', D:'12'},
        correct:'B',
        expCorrect:'The list is already in order. The mean is (3 + 3 + 6 + 7 + 10 + 12 + 15) ÷ 7 = 56 ÷ 7 = 8. With 7 values the median is the 4th one, which is 7. So the mean exceeds the median by 8 − 7 = 1. (The mean sits higher because 15 pulls the total up while the middle value does not feel it.)',
        expWrong:{
          A:'5 is the mean minus the MODE: 8 − 3. The mode is the value that repeats, 3; the median is the one in the middle, 7.',
          C:'4 is the median minus the mode: 7 − 3. Both of those are the wrong pair for this question.',
          D:'12 is the range, 15 − 3. The range measures how far apart the extremes are; it says nothing about the gap between mean and median.'
        },
        tip:'Sort first, then read the four measures off the same list: mean = total ÷ count, median = the middle one, mode = the repeat, range = largest minus smallest. When a list leans to the right, the mean sits ABOVE the median.',
        desmos:'Type (3+3+6+7+10+12+15)/7 and Desmos returns 8. The 4th value of the sorted list is 7, so the gap is 1.',
        desmosLatex:['(3+3+6+7+10+12+15)/7','8-7']
      },
      {
        id:'PSB-14', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Weighted mean of two groups of different sizes',
        stem:'At a swim club, the 15 swimmers of the morning squad had a mean lap time of 82 seconds, and the 9 swimmers of the evening squad had a mean lap time of 90 seconds. What is the mean lap time, in seconds, of all 24 swimmers together?',
        answer:'85',
        expCorrect:'A mean is a total divided by a count, so rebuild both totals. Morning: 15 × 82 = 1,230 seconds. Evening: 9 × 90 = 810 seconds. Together: (1,230 + 810) ÷ 24 = 2,040 ÷ 24 = 85 seconds. (Check that it is sensible: 85 falls between 82 and 90, and closer to 82, because the morning squad is the larger of the two ✓.) Answer: 85.',
        expWrong:{},
        tip:'Never average two means directly unless the groups are the same size. Turn each mean back into a TOTAL, add the totals, divide by the combined count. A quick sanity check: the answer always lands between the two means, nearer the bigger group.',
        desmos:'Type (15*82+9*90)/24 and Desmos returns 85. Compare it with (82+90)/2, which returns 86 and ignores the group sizes.',
        desmosLatex:['(15*82+9*90)/24','(82+90)/2']
      },
      {
        id:'PSB-15', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Reading a histogram: finding the median of 30 values',
        figure:FIG_CALLS,
        stem:'The histogram shows the number of service calls a technician logged on each of 30 days. What is the median number of service calls for these 30 days?',
        choices:{A:'2.5', B:'9', C:'2', D:'15'},
        correct:'C',
        expCorrect:'The bars give 4 + 7 + 9 + 5 + 3 + 2 = 30 days. With 30 values the median is the middle of the 15th and 16th, once the days are lined up from fewest calls to most. Counting up: 4 days at 0 calls, 11 days through 1 call, 20 days through 2 calls. The 15th and 16th days both fall in that third bar, so both are 2 and the median is 2. (For contrast, the mean is 62 ÷ 30 ≈ 2.07.)',
        expWrong:{
          A:'2.5 is the center of the horizontal axis, halfway between 0 and 5. The median depends on where the DAYS pile up, not on where the axis happens to end.',
          B:'9 is the height of the tallest bar: the number of days, not the number of calls. The median is a value on the horizontal axis.',
          D:'15 is the POSITION of the middle day, not its value. After finding that you want the 15th and 16th days, you still have to read which bar they land in.'
        },
        tip:'A histogram is a list in disguise: the bar heights tell you how many times each value repeats. Add the heights to get n, find where the middle item falls, then read the VALUE under that bar, never the height of it.',
        desmos:'Type 4+7+9+5+3+2 for the 30 days and (4+7+9+5+3+2)/2 for the middle position, 15. The running total 4, 11, 20 shows that the 15th day sits in the bar over 2.',
        desmosLatex:['4+7+9+5+3+2','(0*4+1*7+2*9+3*5+4*3+5*2)/30']
      },
      {
        id:'PSB-16', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'An outlier removed: what it does to the mean and what it does to the median',
        stem:'The waiting times, in minutes, of 9 patients at a clinic were 2, 4, 5, 7, 8, 9, 11, 12 and 68. The value 68 is then removed from the list. Which of the following describes what happens?',
        choices:{
          A:'The mean falls by 6.75 minutes, while the median falls by only 0.5 minutes.',
          B:'The median falls by 6.75 minutes, while the mean falls by only 0.5 minutes.',
          C:'The mean falls by 6.75 minutes, and the median does not change at all.',
          D:'The mean and the median both fall by about 6.75 minutes.'
        },
        correct:'A',
        expCorrect:'With all 9 values the total is 126, so the mean is 126 ÷ 9 = 14, and the median is the 5th value, 8. Take out the 68 and the total drops to 58 over 8 values: the mean becomes 58 ÷ 8 = 7.25, a fall of 6.75. The median of the 8 that are left is the center of the 4th and 5th, (7 + 8) ÷ 2 = 7.5, a fall of only 0.5. The outlier was holding the mean up almost single-handedly.',
        expWrong:{
          B:'This swaps the two. The median only shifts by one position when a value leaves, so it moves a little; the mean feels the full size of the value that left.',
          C:'The median does move, just barely: from 8 to 7.5. Removing a value changes the count from 9 to 8, so the middle stops being one value and becomes the center of two.',
          D:'Only the mean falls that far. If the median tracked the mean this closely there would be no reason to report both of them.'
        },
        tip:'An outlier drags the mean toward itself and leaves the median nearly alone, because the median only cares about POSITION. That is the whole reason a skewed set is usually reported with its median.',
        desmos:'Type (2+4+5+7+8+9+11+12+68)/9 for 14, then (2+4+5+7+8+9+11+12)/8 for 7.25. The medians, 8 and 7.5, you read straight off the sorted list.',
        desmosLatex:['(2+4+5+7+8+9+11+12+68)/9','(2+4+5+7+8+9+11+12)/8']
      },
      {
        id:'PSB-17', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Recovering a dropped value from the mean before and the mean after',
        stem:'The mean of 5 test scores is 84. When the lowest of the 5 scores is dropped, the mean of the 4 scores that remain is 88. What was the lowest score?',
        answer:'68',
        expCorrect:'Turn both means into totals. All five scores add to 5 × 84 = 420. The four that remain add to 4 × 88 = 352. The score that left is the difference: 420 − 352 = 68. (Check: 352 + 68 = 420, and 420 ÷ 5 = 84 ✓. It makes sense that 68 sits below the old mean, since dropping it pulled the mean up.)',
        expWrong:{},
        tip:'Any "mean before and after" question is really about totals: mean × count = total, and the value added or removed is the difference between the two totals. Sanity check at the end: a value that drags the mean DOWN has to be below the original mean.',
        desmos:'Type 5*84 for 420 and 4*88 for 352, then 5*84-4*88 for 68.',
        desmosLatex:['5*84','4*88','5*84-4*88']
      },
      {
        id:'PSB-18', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Comparing two box plots: same median, different spread, and what a box plot hides',
        figure:FIG_BOXES,
        stem:'The box plots summarize the number of points the Kestrels and the Herons scored in each game of one season. Which of the following is supported by the plots?',
        choices:{
          A:'The mean of the Kestrels is greater than the mean of the Herons, since the box reaches further right.',
          B:'More than half of the games of the Kestrels are above the median of the Herons.',
          C:'The Herons played fewer games than the Kestrels, since their plot is narrower.',
          D:'The two teams have the same median, and the middle half of the Kestrels values is wider.'
        },
        correct:'D',
        expCorrect:'Read the five numbers off each plot. Kestrels: 4, 10, 14, 18, 30. Herons: 8, 12, 14, 16, 22. The medians match at 14, so neither team is centered higher. The middle half of the data is the box, which is the interquartile range: 18 − 10 = 8 for the Kestrels against 16 − 12 = 4 for the Herons. The Kestrels box is twice as wide, so their scores are the more spread out, and the whiskers (a range of 26 against 14) say the same thing.',
        expWrong:{
          A:'A box plot shows five ORDER statistics and no mean at all. Two data sets with these very quartiles can have means in either order, so nothing here settles it.',
          B:'The median of the Herons is 14, and 14 is the median of the Kestrels too. At most half of the Kestrels games sit above their own median, so "more than half" is exactly what cannot be true.',
          C:'Width on a box plot measures spread in POINTS, not how many games were played. A plot of 5 games and a plot of 50 games can look identical.'
        },
        tip:'A box plot gives you five numbers and nothing else: minimum, Q1, median, Q3, maximum. Spread comes from the box width (IQR) and the whisker span; the mean, the sample size and the shape inside each quarter are all invisible. And no more than half the data can beat its own median.',
        desmos:'Type 18-10 and 16-12 for the two interquartile ranges, 8 and 4, then 30-4 and 22-8 for the two ranges, 26 and 14. Both comparisons point the same way.',
        desmosLatex:['18-10','16-12','30-4','22-8']
      },

      /* ============ Two-variable data and scatterplots (PSB-19 a PSB-23) ============ */
      {
        id:'PSB-19', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Line of best fit: reading the slope in context',
        stem:'A scatterplot relates x, the number of days since a pond was treated, and y, the number of algae colonies per milliliter of water. The line of best fit is y = 480 − 26x. Which of the following is the best interpretation of the number −26 in this model?',
        choices:{
          A:'For each additional day, the model predicts 26 fewer colonies per milliliter.',
          B:'On the day of the treatment, the model predicts 26 colonies per milliliter.',
          C:'The model predicts that the colonies are gone 26 days after the treatment.',
          D:'For each additional colony per milliliter, the model predicts 26 fewer days.'
        },
        correct:'A',
        expCorrect:'In y = mx + b the slope m is the change in y produced by a one-unit change in x. Here x is days and y is colonies per milliliter, so the slope carries the units "colonies per milliliter per day", and the minus sign makes it a drop. (Check: at x = 3, y = 480 − 78 = 402; at x = 4, y = 480 − 104 = 376, and 402 − 376 = 26 ✓.)',
        expWrong:{
          B:'That is the y-intercept, 480, which is what the model predicts on day 0. The 26 is the amount taken away for each day after that.',
          C:'The model reaches 0 at 480 ÷ 26 ≈ 18.5 days, not at 26. The slope is a rate of change, never a finish line.',
          D:'This reads the slope upside down. It measures colonies per DAY, not days per colony; the reciprocal, about 0.038 days per colony, is what this sentence describes.'
        },
        tip:'Say the slope out loud with its units before reading the choices: "26 fewer colonies per milliliter for each extra day". That sentence kills the two classic traps at once, swapping the slope with the intercept and flipping the units upside down.',
        desmos:'Graph y=480-26x and open the table at x = 3 and x = 4: 402 and 376, a drop of exactly 26. The graph crosses zero near x = 18.5, not at 26.',
        desmosLatex:['y=480-26x','480/26']
      },
      {
        id:'PSB-20', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Residual: actual minus predicted, and the sign it carries',
        stem:'For a batch of avocados, a scatterplot relates x, the number of days since picking, and y, a firmness score. The line of best fit is y = 96 − 3.5x. One avocado picked 14 days earlier has a firmness score of 54. What is the residual for that avocado?',
        choices:{A:'−7', B:'49', C:'7', D:'47'},
        correct:'C',
        expCorrect:'First the prediction: y = 96 − 3.5(14) = 96 − 49 = 47. The residual is actual − predicted = 54 − 47 = 7. It is positive, which says the point sits ABOVE the line and the model underestimated this avocado by 7 points.',
        expWrong:{
          A:'−7 subtracts in the wrong order, predicted − actual. The order is fixed: actual first. Getting it backwards reverses the meaning, turning an underestimate into an overestimate.',
          B:'49 is the product 3.5 × 14, so the intercept 96 was never used. That number is how much the model takes away over 14 days, not the prediction itself.',
          D:'47 is the PREDICTED score, the step just before the last one. The residual is the gap between it and the actual 54.'
        },
        tip:'Residual = actual − predicted, always in that order. Positive means the point is above the line and the model underestimated; negative means below and overestimated. Compute the prediction first and label it, so it does not get handed in as the answer.',
        desmos:'Type 96-3.5*14 for the prediction, 47, then 54-47 for the residual, 7. Graphing y=96-3.5x with (14,54) shows the point sitting 7 above the line.',
        desmosLatex:['96-3.5*14','54-47','y=96-3.5x','(14,54)']
      },
      {
        id:'PSB-21', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Scatterplot shape: the direction and the strength of an association',
        figure:FIG_GYM,
        stem:'The scatterplot shows, for each of 8 gymnasts, the number of hours of practice in one week (x) and the number of errors in the routine at the end of that week (y). Which of the following best describes what the plot shows?',
        choices:{
          A:'A strong negative association: more practice hours go with fewer errors.',
          B:'A strong positive association: more practice hours go with more errors.',
          C:'A weak association: the points sit in a wide cloud with no clear direction.',
          D:'No association at all: the number of errors is the same at every value of x.'
        },
        correct:'A',
        expCorrect:'Read two things off the plot. DIRECTION: as x grows from 1 to 8 hours, y falls steadily from 18 errors to 8, so the association is negative. STRENGTH: the points lie almost on a single straight path, with no point far off it, so it is strong. A negative, strong association is what A describes.',
        expWrong:{
          B:'Positive would mean the cloud rises from left to right. This one falls: the gymnast with the most practice has the fewest errors, not the most.',
          C:'A weak association looks like a shapeless cloud with points far above and below any line drawn through it. These eight points sit in a tight, clearly tilted path.',
          D:'"No association" is a flat picture, where y stays about the same whatever x does. Here y drops from 18 to 8, a change of more than half.'
        },
        tip:'Direction and strength are two separate readings: direction is whether the cloud rises or falls, strength is how tightly the points hug a line. And a scatterplot on its own reports an association, never a reason for it.',
        desmos:'Plot (1,18), (2,17), (3,15), (4,14), (5,12), (6,11), (7,9), (8,8) and add y=-1.48x+19.64. Every point lands within half a unit of that falling line.',
        desmosLatex:['(1,18)','(4,14)','(8,8)','y=-1.48x+19.64']
      },
      {
        id:'PSB-22', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'An influential point removed, and the line of best fit that is left',
        stem:'A scatterplot shows 6 points: (1, 5), (2, 7), (3, 9), (4, 11), (5, 13) and (12, 8). The point (12, 8) is removed, and a new line of best fit is drawn through the 5 points that remain; that line passes through every one of them. What value does the new line predict when x = 10?',
        answer:'23',
        expCorrect:'If a line passes through all 5 remaining points, it is the line those points already lie on. From (1, 5) to (2, 7) the value of y climbs 2 while x climbs 1, so the slope is 2, and y = 2x + 3 fits the first point: 2(1) + 3 = 5 ✓. Check one more: 2(5) + 3 = 13 ✓. At x = 10 the prediction is 2(10) + 3 = 23. (For contrast, the fit for all six points is nearly flat, about y = 0.16x + 8.11, and would have predicted only 9.7 there.) Answer: 23.',
        expWrong:{},
        tip:'A point far from the others HORIZONTALLY has leverage: it tilts the whole line toward itself. When a question hands you a line that passes through every remaining point, stop fitting and just read the pattern off two of them.',
        desmos:'Plot the five points and graph y=2x+3: the line hits all of them. Add (12,8) and compare with y=0.161x+8.107, the flat fit that the sixth point produces.',
        desmosLatex:['y=2x+3','(1,5)','(5,13)','(12,8)','y=0.161x+8.107']
      },
      {
        id:'PSB-23', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Residuals compared: which point the line of best fit underestimates most',
        stem:'For a set of four data points, the line of best fit is y = 3x + 8. The four points are (2, 15), (9, 40), (12, 38) and (15, 50). For which of these points does the line of best fit UNDERESTIMATE the actual y-value by the greatest amount?',
        choices:{A:'(2, 15)', B:'(9, 40)', C:'(12, 38)', D:'(15, 50)'},
        correct:'B',
        expCorrect:'Underestimating means the actual value sits above the prediction, so the residual, actual − predicted, is positive, and the question wants the LARGEST positive one. Point by point: (2, 15) → 3(2) + 8 = 14, residual +1. (9, 40) → 35, residual +5. (12, 38) → 44, residual −6. (15, 50) → 53, residual −3. Only two residuals are positive, and +5 is the bigger of them, so the model falls furthest short at (9, 40).',
        expWrong:{
          A:'(2, 15) is underestimated, but by 1, not by the most. Its residual is the smallest positive one of the four.',
          C:'(12, 38) has the largest gap in size, 6, but the residual is −6: the actual 38 sits BELOW the predicted 44, so the model overestimates there. Ignoring the sign is exactly the trap.',
          D:'(15, 50) is also overestimated, by 3. A large x and a large y do not put a point above the line; only actual − predicted decides that.'
        },
        tip:'When residuals are compared, do all of them and keep the signs on a small table. "Underestimate" means positive, "overestimate" means negative, and "by the most" refers to size WITHIN the sign the question asked for.',
        desmos:'Graph y=3x+8 with (2,15), (9,40), (12,38) and (15,50). Two points sit above the line and two below; the tall gap at x = 12 is below it.',
        desmosLatex:['y=3x+8','(2,15)','(9,40)','(12,38)','(15,50)']
      },

      /* ============ Probability and conditional probability (PSB-24 a PSB-28) ============ */
      {
        id:'PSB-24', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Two-way table: a simple probability from the totals',
        figure:TBL_INTERNET,
        stem:'The table shows the internet plan of each of 400 households and whether the household streams video daily. One of the 400 households is chosen at random. What is the probability that it has a cable plan?',
        choices:{A:'0.21', B:'0.58', C:'0.35', D:'0.60'},
        correct:'C',
        expCorrect:'The household is chosen from all 400, so 400 is the denominator. The cable column totals 84 + 56 = 140. The probability is 140 ÷ 400 = 0.35. (Check that the three plan probabilities add to 1: 180/400 + 140/400 + 80/400 = 0.45 + 0.35 + 0.20 = 1 ✓.)',
        expWrong:{
          A:'0.21 is 84 ÷ 400, which uses only the households that both have cable AND stream daily. The question asks about cable overall, so the whole column counts.',
          B:'0.58 is 140 ÷ 240, which divides by the number that stream daily. Nothing in the question restricts the choice to those households.',
          D:'0.60 is 84 ÷ 140, the probability of streaming daily GIVEN cable. That is a conditional, and this question has no condition in it.'
        },
        tip:'Fix the denominator before anything else: it is the group the question draws from. "One of the 400" means 400; "one of those with cable" means 140. Getting that group right settles most two-way table questions on its own.',
        desmos:'Type (84+56)/400 and Desmos returns 0.35. Compare with 84/400 = 0.21 and 84/140 = 0.6, which answer two different questions.',
        desmosLatex:['(84+56)/400','84/400','84/140']
      },
      {
        id:'PSB-25', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Two-way table: the complement of an event',
        figure:TBL_INTERNET,
        stem:'One of the 400 households in the table is chosen at random. What is the probability that the household does NOT have a satellite plan?',
        answer:'0.8',
        expCorrect:'The satellite column totals 30 + 50 = 80, so P(satellite) = 80 ÷ 400 = 0.2. "Not satellite" is everything else: 1 − 0.2 = 0.8. (Check the long way: fiber and cable together are 180 + 140 = 320 households, and 320 ÷ 400 = 0.8 ✓.) Answer: 0.8.',
        expWrong:{},
        tip:'P(not A) = 1 − P(A). When an event is described with a NOT, counting the small side and subtracting from 1 is almost always faster than adding up every other cell, and the two routes check each other.',
        desmos:'Type 1-(30+50)/400 and Desmos returns 0.8. Typing (180+140)/400 returns the same thing the long way.',
        desmosLatex:['1-(30+50)/400','(180+140)/400']
      },
      {
        id:'PSB-26', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two-way table: a conditional probability inside one column',
        figure:TBL_INTERNET,
        stem:'One household is chosen at random from among the households in the table that have a fiber plan. What is the probability that this household streams video daily?',
        choices:{A:'0.315', B:'0.45', C:'0.525', D:'0.70'},
        correct:'D',
        expCorrect:'The words "from among the households that have a fiber plan" shrink the pool to the fiber column, which holds 180 households. Of those, 126 stream video daily, so the probability is 126 ÷ 180 = 0.7.',
        expWrong:{
          A:'0.315 is 126 ÷ 400, the probability that a household drawn from ALL 400 both has fiber and streams daily. That is a joint probability, not a conditional one.',
          B:'0.45 is 180 ÷ 400, the probability of having fiber at all. It answers a question about the plan, not about streaming.',
          C:'0.525 is 126 ÷ 240, which conditions on streaming instead of on fiber. It answers the reversed question, and 0.525 is not equal to 0.7.'
        },
        tip:'A conditional probability replaces the denominator with the group named after "given" or "from among". Circle that column or row in the table first, then look only inside it.',
        desmos:'Type 126/180 and Desmos returns 0.7. Typing 126/240 returns 0.525, the reversed condition, and 126/400 returns 0.315, the joint one.',
        desmosLatex:['126/180','126/240','126/400']
      },
      {
        id:'PSB-27', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Two-way table: a conditional probability and its reverse are different numbers',
        figure:TBL_INTERNET,
        stem:'One household is chosen at random from among the households in the table that stream video daily. What is the probability that this household has a fiber plan?',
        choices:{A:'0.70', B:'0.525', C:'0.45', D:'0.315'},
        correct:'B',
        expCorrect:'Now the condition is streaming, so the pool is the streaming ROW: 126 + 84 + 30 = 240 households. Of those, 126 have fiber, so the probability is 126 ÷ 240 = 0.525. Notice how it differs from the reverse: among fiber households, 126 ÷ 180 = 0.7 stream daily. Same 126 in the numerator, different group underneath.',
        expWrong:{
          A:'0.70 is the REVERSED conditional, 126 ÷ 180: the probability of streaming given fiber. The two swap the group being conditioned on and are equal only by coincidence, which is not the case here.',
          C:'0.45 is 180 ÷ 400, the share of all 400 households that have fiber, with no condition applied at all. The condition should have cut the pool to 240.',
          D:'0.315 is 126 ÷ 400, the joint probability of fiber AND streaming, drawn from everybody. Conditioning means dividing by the condition group, not by the grand total.'
        },
        tip:'P(A given B) and P(B given A) share a numerator and differ in the denominator, so they are almost never equal. Read which group the sentence draws from: it is the one that follows "given", "of those", or "from among".',
        desmos:'Type 126/240 for 0.525 and 126/180 for 0.7. Both use the same 126, which is exactly why the reversal is so easy to miss.',
        desmosLatex:['126/240','126/180','126/400']
      },
      {
        id:'PSB-28', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Two-way table: testing whether two events are independent',
        figure:TBL_INTERNET,
        stem:'For the 400 households in the table, streaming video daily turns out to be independent of exactly one of the three plan types. Which of the following is correct?',
        choices:{
          A:'Streaming daily is independent of a cable plan: 60% of cable households stream daily, and 60% of all 400 do.',
          B:'Streaming daily is independent of a fiber plan: more fiber households stream daily than households of any other type.',
          C:'Streaming daily is independent of a satellite plan: the satellite column holds the fewest households of the three.',
          D:'Streaming daily is not independent of any plan type: the three plan types have three different column totals.'
        },
        correct:'A',
        expCorrect:'Two events are independent when conditioning on one leaves the other unchanged. Overall, 240 ÷ 400 = 0.60 of households stream daily. Column by column: fiber 126 ÷ 180 = 0.70, cable 84 ÷ 140 = 0.60, satellite 30 ÷ 80 = 0.375. Only cable matches the overall 0.60, so only cable is independent of streaming. (The multiplication check agrees: 140 × 240 ÷ 400 = 84, exactly the count in that cell ✓.)',
        expWrong:{
          B:'Fiber has the most streaming households in raw count, but independence is about RATES: 126 ÷ 180 = 0.70 against the overall 0.60. Knowing a household has fiber does change the odds, so the two are dependent.',
          C:'Column size has nothing to do with independence. Satellite is in fact the furthest from it: 30 ÷ 80 = 0.375, far below the overall 0.60.',
          D:'Different column totals are exactly what you would expect even under independence; the three plans do not have to be equally popular. What matters is whether the streaming RATE holds steady, and for cable it does.'
        },
        tip:'Independence test on a two-way table: compare the conditional rate with the overall rate. P(A given B) = P(A) means independent. The equivalent check is P(A and B) = P(A) × P(B), which on counts reads (row total × column total) ÷ grand total = cell.',
        desmos:'Type 240/400 for the overall 0.6, then 126/180, 84/140 and 30/80. Only the cable column returns 0.6. Confirm with 140*240/400, which returns 84.',
        desmosLatex:['240/400','126/180','84/140','30/80','140*240/400']
      },

      /* ============ Inference from samples and margin of error (PSB-29 a PSB-31) ============ */
      {
        id:'PSB-29', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Estimating a population total from a sample proportion',
        stem:'A forestry team examined a random sample of 150 of the 4,500 trees in a reserve and found that 18 of the trees examined carried a fungus. Based on this sample, what is the best estimate of how many trees in the whole reserve carry the fungus?',
        answer:'540',
        expCorrect:'The sample proportion is 18 ÷ 150 = 0.12. Applying it to the whole reserve gives 0.12 × 4,500 = 540 trees. (The proportion route is the same as the scaling route: the reserve is 4,500 ÷ 150 = 30 times the sample, and 18 × 30 = 540 ✓.) Answer: 540.',
        expWrong:{},
        tip:'To scale a sample up to a population, find the proportion in the sample and multiply it by the population size. Check that the answer keeps the same ratio as the sample: 540 out of 4,500 is 12%, exactly as 18 out of 150 is.',
        desmos:'Type 18/150 for 0.12, then 0.12*4500 for 540. Typing 18*(4500/150) gets to the same place by scaling instead.',
        desmosLatex:['18/150','0.12*4500','18*(4500/150)']
      },
      {
        id:'PSB-30', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Margin of error: the plausible interval it describes, and what it does not say',
        stem:'A random sample of 60 of the 2,000 bags of coffee in a warehouse had a mean net weight of 454 grams, with a margin of error of 3 grams at a 95% confidence level. Which of the following is the most appropriate conclusion?',
        choices:{
          A:'Every one of the 2,000 bags in the warehouse weighs between 451 and 457 grams.',
          B:'It is plausible that the mean weight of all 2,000 bags is between 451 and 457 grams.',
          C:'Exactly 95% of the 2,000 bags in the warehouse weigh between 451 and 457 grams.',
          D:'The mean weight of all 2,000 bags in the warehouse has to be exactly 454 grams.'
        },
        correct:'B',
        expCorrect:'A margin of error builds an interval around the sample statistic: 454 − 3 = 451 and 454 + 3 = 457. The interval is a statement about the population MEAN, and it is a statement of plausibility, not of certainty. So the reasonable conclusion is that the mean weight of all 2,000 bags plausibly lies between 451 and 457 grams.',
        expWrong:{
          A:'The interval is about the mean of the bags, not about each bag. Individual bags scatter far more widely than their own mean does.',
          C:'The 95% is the confidence level, which describes how often this METHOD captures the true mean, not what share of bags land inside the interval.',
          D:'454 is only the sample mean, and a different sample of 60 would give a different one. The margin of error exists precisely because the true mean is not pinned down exactly.'
        },
        tip:'A confidence interval is statistic ± margin of error, and it always talks about a population PARAMETER, never about individual members and never about certainty. The words to look for in the right answer are "plausible" and "the mean of all".',
        desmos:'Type 454-3 and 454+3 for the endpoints, 451 and 457.',
        desmosLatex:['454-3','454+3']
      },
      {
        id:'PSB-31', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'What a larger sample size does to the margin of error',
        stem:'A polling group asked a random sample of 400 residents of a town about a new bus lane and reported that 46% favor it, with a margin of error of 4.9 percentage points. The group will run the study again and wants to report a smaller margin of error. Which change is most likely to do that?',
        choices:{
          A:'Ask the same 400 residents a second time and report the two sets of answers together.',
          B:'Ask 100 residents drawn in the same way, so that each of them can be reached twice.',
          C:'Report the result from the same 400 residents at a higher confidence level instead.',
          D:'Ask 1,600 residents drawn in the same way as the first 400 residents were drawn.'
        },
        correct:'D',
        expCorrect:'The margin of error shrinks as the sample grows, and it shrinks with the SQUARE ROOT of the sample size: four times the people cuts the margin in half. Going from 400 to 1,600 would take a margin of about 4.9 points down to about 2.45. Nothing else on the list adds new people drawn the same way.',
        expWrong:{
          A:'Asking the same 400 twice collects more answers but no new information about the other residents. The sample is still 400 people, so the margin stays where it was.',
          B:'Cutting to 100 moves the wrong way. Dividing the sample by 4 DOUBLES the margin, to roughly 9.8 points.',
          C:'A higher confidence level makes the interval wider, not narrower. More confidence and a smaller margin pull against each other; only more data buys both.'
        },
        tip:'Margin of error falls like 1 over the square root of n, so to halve it you need four times the sample. Two things make it grow: a smaller sample and a higher confidence level. Repeating the same people adds neither size nor variety.',
        desmos:'Type 4.9/sqrt(4) and Desmos returns 2.45, the margin after quadrupling the sample. Typing 4.9*sqrt(4) returns 9.8, what cutting to 100 would cost.',
        desmosLatex:['4.9/sqrt(4)','4.9*sqrt(4)']
      },

      /* ============ Evaluating statistical claims (PSB-32 a PSB-34) ============ */
      {
        id:'PSB-32', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Random selection: the population a result can generalize to',
        stem:'A school has 900 students. The administration randomly selected 60 of them and asked whether they favor moving the start of classes to 9 a.m. Of the 60 asked, 45% said yes. Which of the following is best supported by this survey?',
        choices:{
          A:'About 45% of the students in the city favor moving the start of classes to 9 a.m.',
          B:'The survey shows that a later start makes the students at the school more alert.',
          C:'About 45% of the 900 students at the school favor moving the start to 9 a.m.',
          D:'Nothing can be concluded, because only 60 of the 900 students were asked.'
        },
        correct:'C',
        expCorrect:'The 60 students were selected at random from the 900 students at this school, so the sample represents that group and no other. A result from a random sample generalizes to the population the sample was drawn FROM, which makes the estimate about the 900 students at the school.',
        expWrong:{
          A:'Students in the city were never in the pool being sampled from. The sampling frame was this one school, so the result cannot be stretched to schools that had no chance of being chosen.',
          B:'The survey asked about an opinion and changed nothing, so it cannot say what a later start would DO. That claim would need a study in which the start time was actually varied.',
          D:'A sample of 60 is small but perfectly usable; random selection is what licenses the estimate. Its size affects the margin of error, not whether a conclusion is allowed at all.'
        },
        tip:'Random SELECTION is the permit for generalizing, and it reaches exactly as far as the list the sample was drawn from. To go further, the wider group would have had to be in the pool from the start.',
        desmos:'Type 0.45*60 and Desmos returns 27, the students who said yes, then 0.45*900 returns 405, the estimate for the whole school.',
        desmosLatex:['0.45*60','0.45*900']
      },
      {
        id:'PSB-33', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Random assignment: when a cause-and-effect conclusion is allowed',
        stem:'Ninety volunteers who get frequent headaches were randomly assigned to two groups. One group used a posture app for six weeks and the other group did not. The app group reported significantly fewer headaches. Which conclusion is most appropriate?',
        choices:{
          A:'The app reduces the number of headaches for every adult who gets them frequently.',
          B:'No cause-and-effect claim is possible here, because the volunteers were not selected at random.',
          C:'The app and the headaches are related, but random assignment can never support a causal claim.',
          D:'The app likely caused the drop for these volunteers, but may not do so for all adults.'
        },
        correct:'D',
        expCorrect:'Random assignment is what licenses a causal claim: it spreads other differences between people evenly across the two groups, so a large gap in the outcome points back to the treatment. But these were VOLUNTEERS, not a random sample of adults, so the finding belongs to the people in this study and may not carry over to everyone. Cause yes, generalization no.',
        expWrong:{
          A:'This takes the causal conclusion and stretches it to all adults. Volunteers are self-selected, and nothing guarantees they resemble the wider group.',
          B:'This confuses the two randomizations. Random SELECTION controls how far a result generalizes; random ASSIGNMENT is what makes a cause-and-effect claim legitimate, and that part was done.',
          C:'Random assignment is exactly the tool that does support a causal claim. Without it a difference could come from the kind of people in each group; with it that door is closed.'
        },
        tip:'Two randomizations, two permits. Random ASSIGNMENT to treatment groups buys you cause. Random SELECTION from a population buys you generalization. A study can have one, both, or neither, and you claim only what it paid for.',
        desmos:'Split the 90 volunteers with 90/2 and Desmos returns 45 per group. Desmos cannot judge a design, so this one is decided by reading, not by computing.',
        desmosLatex:['90/2']
      },
      {
        id:'PSB-34', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'An observational study: a correlation is not causation',
        stem:'A city compared 1,200 residents who own a bicycle with 1,200 residents who do not. Nobody was given anything to do; the residents were simply grouped by what they already owned. The bicycle owners reported fewer sick days last year. Which conclusion is most appropriate?',
        choices:{
          A:'Owning a bicycle lowers the number of sick days a city resident takes in a year.',
          B:'The two are associated, but this study cannot show that one of them causes the other.',
          C:'Taking fewer sick days is what leads city residents to buy a bicycle of their own.',
          D:'Because the two groups are the same size, the comparison proves that the effect is real.'
        },
        correct:'B',
        expCorrect:'Nothing was assigned here: people sorted themselves into the two groups by owning a bicycle or not, which makes this an observational study. The two groups may differ in income, age, neighborhood or general health, and any of those could produce the gap in sick days on its own. An association is real and worth reporting; a cause is not available from this design.',
        expWrong:{
          A:'This asserts a cause that the design cannot deliver. To claim it, the city would have to assign bicycles at random and then compare the groups.',
          C:'Reversing the direction is no better supported. Both the reversal and the original are guesses that this study has no way to tell apart.',
          D:'Equal group sizes make the comparison tidy but do not make it fair: the two groups can still differ in every other way. Only random assignment balances the differences nobody thought to measure.'
        },
        tip:'Ask one question first: did the researchers ASSIGN the treatment, or only record what people already did? If they only recorded it, the honest conclusion stops at "associated", and any lurking variable stays in play.',
        desmos:'Nothing to compute here, so use Desmos on the number that is given: type 1200+1200 for the 2,400 residents in the comparison.',
        desmosLatex:['1200+1200']
      }
    ]
  });
})();
