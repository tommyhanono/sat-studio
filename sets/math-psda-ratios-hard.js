/* SAT Studio question set — Math: Ratios, Rates & Units, Hard & Brutal (RTH-01 to RTH-31) */
/* Toda la destreza oficial "Ratios, rates and units" (pd-ratio), que es el CAJÓN
   de Problem-Solving y por lo tanto la ÚLTIMA que prueba skillOf(). Eso obliga a
   que ni el `skill` ni los primeros 160 caracteres del `stem` lleven ninguna
   palabra de las otras seis destrezas del dominio: nada de "price", "percent",
   "discount", "interest", "sale", "tax"; nada de "average", "mean", "median",
   "range", "spread", "distribution", "outlier", "weighted"; nada de "scatter",
   "predict", "association"; nada de "margin of error", "plausible", "sample
   mean/size", "estimate the total/number"; nada de "probability", "independent",
   "counting", "expected value"; y nada de "random(ly) selected/assigned",
   "experiment", "cause", "correlation", "generalize", "assignment".
   Por eso el trip de ida y vuelta pide "overall speed for the whole trip" y no
   "average speed", y por eso siempre se dice "cost" y nunca "price".
   Lo que sí tiene que aparecer: ratio / rate / unit / proportion / scale /
   convert / speed / density / per + unidad / miles / kilograms / liters. */
(function(){
  window.SAT_SETS.push({
    id: 'math-psda-ratios-hard',
    title: 'Ratios, Rates & Units — Hard & Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Hard-Module-2 work with ratios, rates and units: conversions where one of the jumps is hidden in the wording, part-to-part ratios that ask for what you did not just compute, two rates helping or fighting each other, ratios that shift when something is added or moved, inverse proportion dressed as direct, and scales that square for area and cube for volume. The brutal tier chains three or four steps where no intermediate is the answer, and one question replaces the distance with a parameter.',
    minutes: 42,
    questions: [
      {
        id:'RTH-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Chained unit conversion: grams per minute into kilograms over hours',
        stem:'A filament extruder runs at a constant rate of 18 grams per minute. The extruder runs without stopping for 7.5 hours. How many kilograms of filament does it produce in that time?',
        choices:{A:'135', B:'0.135', C:'81', D:'8.1'},
        correct:'D',
        expCorrect:'Two jumps stand between the rate and the answer: minutes into hours, and grams into kilograms. Per hour: 18 × 60 = 1,080 grams. Over the run: 1,080 × 7.5 = 8,100 grams. Into kilograms: 8,100 ÷ 1,000 = 8.1 kilograms. (Check: 8,100 grams ÷ 18 grams per minute = 450 minutes, and 450 ÷ 60 = 7.5 hours ✓.)',
        expWrong:{
          A:'135 is 18 × 7.5, the rate multiplied straight by the number of hours. The rate is per MINUTE, so the ×60 jump was skipped and this counts only 7.5 minutes of extruding.',
          B:'0.135 makes the same missed ×60 as A and then divides by 1,000. The mass jump was made; the time jump was not.',
          C:'81 divides 8,100 by 100 instead of 1,000. A kilogram is a thousand grams, so this answer is ten times too big.'
        },
        tip:'Write every conversion as a fraction whose unwanted unit cancels: (18 g / 1 min)(60 min / 1 h)(7.5 h)(1 kg / 1000 g). If a unit is still standing when you finish, a jump is missing.',
        desmos:'Type 18*60*7.5/1000 to get 8.1 in one line. Then delete the *60 and watch the 0.135 that a missing time jump produces.',
        desmosLatex:['18*60*7.5/1000','18*7.5/1000']
      },
      {
        id:'RTH-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Part-to-part ratio with a known total, asked for the difference',
        stem:'At the Verrano tile works, the ratio of matte tiles to glossy tiles in each batch is 5 to 3. One batch contains 1,920 tiles in all. How many more matte tiles than glossy tiles are in that batch?',
        choices:{A:'480', B:'1,200', C:'720', D:'240'},
        correct:'A',
        expCorrect:'The ratio 5 to 3 splits the batch into 5 + 3 = 8 equal parts, so one part is 1,920 ÷ 8 = 240 tiles. Matte = 5 × 240 = 1,200 and glossy = 3 × 240 = 720, so the gap is 1,200 − 720 = 480. Faster route: the gap is 5 − 3 = 2 parts, and 2 × 240 = 480. (Check: 1,200 + 720 = 1,920 ✓.)',
        expWrong:{
          B:'1,200 is the number of matte tiles. It is the count most students finish on, but the question asks how many MORE matte than glossy.',
          C:'720 is the number of glossy tiles — the other side of the ratio, not the gap between the two piles.',
          D:'240 is the size of one part. Everything is built from it, but on its own it is one eighth of the batch, and the gap is two parts.'
        },
        tip:'Turn a part-to-part ratio into parts first: total ÷ (sum of the ratio numbers) = one part. Then reread the question — "how many more" is the DIFFERENCE of the ratio numbers times one part, never one of the two counts.',
        desmos:'Type 1920/8 to get 240, then 5*240 and 3*240 for 1,200 and 720, and (5-3)*240 for the 480 the question asks for.',
        desmosLatex:['1920/8','5*240','3*240','(5-3)*240']
      },
      {
        id:'RTH-03', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'A ratio that changes when units are added to one side only',
        stem:'A greenhouse keeps fern seedlings and moss seedlings in the ratio 3 to 4, and it holds 84 moss seedlings. A grower then adds k more fern seedlings and no moss seedlings, after which the ratio of fern seedlings to moss seedlings is 5 to 6. What is the value of k?',
        answer:'7',
        expCorrect:'The moss count is never touched, so it anchors both ratios at 84. Start: fern ÷ moss = 3/4, so fern = (3/4)(84) = 63. End: fern ÷ moss = 5/6 with moss still 84, so fern = (5/6)(84) = 70. The grower added 70 − 63 = 7, so k = 7. (Check: 63/84 = 3/4 ✓ and 70/84 = 5/6 ✓.)',
        tip:'When one side of a ratio is left alone, use it as the anchor: turn both ratios into actual counts of the OTHER side, and the amount added is a single subtraction. Subtracting the ratio numbers themselves (5/6 − 3/4) never gives the amount added.',
        desmos:'Type (3/4)*84 to get 63 and (5/6)*84 to get 70; the difference, 7, is k.',
        desmosLatex:['(3/4)*84','(5/6)*84','70-63']
      },
      {
        id:'RTH-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Inverse proportion: more workers at the same rate, fewer days',
        stem:'A crew of 9 masons lays the stone for a plaza in 20 days, with every mason working at the same constant rate. The next plaza is the same size, but it must be finished in 12 days. How many masons are needed?',
        choices:{A:'5.4', B:'15', C:'6', D:'17'},
        correct:'B',
        expCorrect:'Measure the job in mason-days: 9 masons × 20 days = 180 mason-days, and that total does not change when the crew does. With only 12 days available, 180 ÷ 12 = 15 masons. (Check: 15 × 12 = 180 ✓.) Sanity check the direction: fewer days needs MORE masons, so the answer has to come out above 9.',
        expWrong:{
          A:'5.4 comes from cross-multiplying 9/20 = x/12, a direct proportion. Direct proportion says fewer days needs fewer masons, which would leave the plaza unfinished; workers and time are inversely proportional.',
          C:'6 is how many masons must be ADDED (15 − 9). The question asks for the size of the whole crew, not the hires.',
          D:'17 adds one mason for each day saved (20 − 12 = 8, then 9 + 8 = 17). Days and workers do not trade one for one — only the product mason × days stays fixed.'
        },
        tip:'For a job of fixed size, workers × time is constant. Multiply the two numbers you are given to get the job size, then divide by whichever one is new. If your answer moves the wrong way, you set up a direct proportion by mistake.',
        desmos:'Type 9*20 to get 180 mason-days, then 180/12 for 15. Compare with 9*12/20, the 5.4 that a direct proportion gives.',
        desmosLatex:['9*20','180/12','9*12/20']
      },
      {
        id:'RTH-05', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'A fill rate and a drain rate running at the same time',
        stem:'A tank is filled by a pump at a constant rate of 14 liters per minute while a valve drains it at a constant rate of 9 liters per minute. Both run at the same time, starting at the moment the tank holds 120 liters. How many minutes pass before the tank holds 600 liters?',
        answer:'96',
        expCorrect:'Combine the two rates into one net rate first: 14 − 9 = 5 liters per minute going in. Then find what the tank has to GAIN: 600 − 120 = 480 liters, not 600. Time = 480 ÷ 5 = 96 minutes. (Check: in 96 minutes the pump adds 96 × 14 = 1,344 liters and the valve removes 96 × 9 = 864; 120 + 1,344 − 864 = 600 ✓.)',
        tip:'Rates that oppose each other subtract; rates that help each other add. Then look at what still has to change — the starting amount is almost never zero, and dividing the FINAL amount by the net rate is the standard slip.',
        desmos:'Type (600-120)/(14-9) to get 96 in one line. Then type 600/5 to see the 120 that ignoring the starting amount produces.',
        desmosLatex:['(600-120)/(14-9)','600/5']
      },
      {
        id:'RTH-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'A drawing scale applied to an area: the scale factor squares',
        stem:'On an architect’s site plan, 1 centimeter represents 4 meters. A rectangular courtyard on the plan has an area of 35 square centimeters. What is the actual area of the courtyard, in square meters?',
        choices:{A:'140', B:'8.75', C:'560', D:'2,240'},
        correct:'C',
        expCorrect:'Lengths scale by 4, so AREAS scale by 4² = 16, because both dimensions grow. Actual area = 35 × 16 = 560 square meters. (Check with real sides: a courtyard drawn 5 cm by 7 cm has area 35 cm², and in reality it is 20 m by 28 m, so 20 × 28 = 560 ✓.)',
        expWrong:{
          A:'140 multiplies by the length factor 4 once. That converts a length, not an area — the factor has to act on both dimensions.',
          B:'8.75 divides by 4 instead of multiplying. The real courtyard is far larger than the drawing, so the answer has to be bigger than 35.',
          D:'2,240 applies the factor three times (4³ = 64). Cubing belongs to volume; a flat area uses the square.'
        },
        tip:'A scale factor of k multiplies lengths by k, areas by k² and volumes by k³. Decide which one the question wants before you multiply, and if you are unsure, invent a small rectangle and scale its two sides yourself.',
        desmos:'Type 35*4^2 to get 560, then 20*28 to land on the same 560 from a 5 cm by 7 cm courtyard scaled up side by side. Typing 35*4 shows the 140 that a single factor gives.',
        desmosLatex:['35*4^2','20*28','35*4']
      },
      {
        id:'RTH-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Density in grams per cubic centimeter used on a volume in cubic meters',
        stem:'A cast resin has a density of 1.35 grams per cubic centimeter. A solid block of this resin has a volume of 0.4 cubic meters. What is the mass of the block, in kilograms?',
        choices:{A:'0.54', B:'1,350', C:'540,000', D:'540'},
        correct:'D',
        expCorrect:'The density and the volume live in different unit systems, so one of them has to move. One cubic meter is 100 × 100 × 100 = 1,000,000 cubic centimeters, so 0.4 m³ = 400,000 cm³. Mass = 1.35 × 400,000 = 540,000 grams = 540 kilograms. (Check by the other route: 1.35 g/cm³ = 1,350 kg/m³, and 1,350 × 0.4 = 540 ✓.)',
        expWrong:{
          A:'0.54 is 1.35 × 0.4, as if cubic centimeters and cubic meters were the same unit. The two volumes differ by a factor of a million, which is exactly how far off this is.',
          B:'1,350 is the density rewritten as kilograms per cubic meter. That is an honest and useful step, but it is still a density — it has to be multiplied by the 0.4 m³.',
          C:'540,000 is the mass in GRAMS. The arithmetic is finished; the last jump, ÷1,000, was not made.'
        },
        tip:'Converting a cubed unit uses the length factor three times: 1 m = 100 cm means 1 m³ = 100³ = 1,000,000 cm³. Convert either the volume or the density — never half of each — and read the unit the answer is asked in before you stop.',
        desmos:'Type 1.35*0.4*10^6/1000 to get 540 in one line. Then type 1.35*1000 to see 1,350 kg/m³ and 1350*0.4 to land on the same 540.',
        desmosLatex:['1.35*0.4*10^6/1000','1.35*1000','1350*0.4']
      },
      {
        id:'RTH-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'A cost rate per meter with the amount given in centimeters',
        stem:'A workshop buys cord at a cost of $18 per meter and uses 62.5 centimeters of cord for each bracelet it makes. At that rate, what is the cost of the cord for 40 bracelets?',
        choices:{A:'$45,000', B:'$11.25', C:'$450', D:'$45'},
        correct:'C',
        expCorrect:'Match the units before multiplying. Each bracelet uses 62.5 cm = 0.625 m, so 40 bracelets use 0.625 × 40 = 25 meters. At $18 per meter that is 25 × 18 = $450. (Check: 25 meters is 2,500 centimeters, and 40 × 62.5 = 2,500 ✓.)',
        expWrong:{
          A:'$45,000 reads 62.5 centimeters as 62.5 meters, so the workshop buys a hundred times more cord than it needs.',
          B:'$11.25 is the cord for ONE bracelet (0.625 × 18). The multiplication by 40 never happened.',
          D:'$45 divides by 1,000 instead of 100 when turning centimeters into meters, making each bracelet 0.0625 m of cord.'
        },
        tip:'When a rate is per one unit and the quantity comes in another, convert the QUANTITY first and write the new unit beside it. One hundred centimeters make a meter — dividing by 10 or by 1,000 is the slip that survives all the way to the answer.',
        desmos:'Type 62.5/100*40*18 to get 450, then 62.5*40*18 to see the $45,000 a missed conversion gives.',
        desmosLatex:['62.5/100*40*18','62.5*40*18']
      },
      {
        id:'RTH-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Overall speed for a round trip is not halfway between the two speeds',
        stem:'A courier rides 30 miles from a depot to a client at a constant speed of 20 miles per hour, then returns along the same 30-mile route at a constant speed of 30 miles per hour. What is the overall speed for the whole trip, in miles per hour?',
        choices:{A:'12', B:'25', C:'24', D:'30'},
        correct:'C',
        expCorrect:'Overall speed is total distance ÷ total time, and the two legs do not take the same time. Out: 30 ÷ 20 = 1.5 hours. Back: 30 ÷ 30 = 1 hour. Total distance = 60 miles and total time = 2.5 hours, so 60 ÷ 2.5 = 24 miles per hour. (Check: 24 × 2.5 = 60 ✓.) It lands below 25 because the courier spends more time at the slower speed.',
        expWrong:{
          A:'12 divides the ONE-WAY distance, 30 miles, by the round-trip time of 2.5 hours. Both legs are 30 miles, so the trip covers 60.',
          B:'25 is the halfway point between 20 and 30. Averaging two speeds only works when the two legs take the same TIME, and here the slow leg takes 50% longer.',
          D:'30 is the speed of the faster leg on its own. No single leg can set the overall speed unless the whole trip is ridden at it.'
        },
        tip:'For a round trip at two speeds, never take the halfway point. Compute each leg’s time, add the distances, add the times, divide. The answer always sits closer to the SLOWER speed, which is a two-second sanity check.',
        desmos:'Type 60/(30/20+30/30) to get 24 in one line. Compare it with (20+30)/2, the 25 the naive halfway point gives.',
        desmosLatex:['60/(30/20+30/30)','(20+30)/2']
      },
      {
        id:'RTH-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'A three-part ratio anchored by a difference instead of a total',
        stem:'At the Kendrick cannery, small, medium and large jars are packed in the ratio 4 : 7 : 5. During one shift the cannery packed 126 more medium jars than large jars. How many small jars did it pack that shift?',
        choices:{A:'441', B:'252', C:'315', D:'63'},
        correct:'B',
        expCorrect:'The fact you are given is a DIFFERENCE, so match it to a difference of parts: medium minus large is 7 − 5 = 2 parts, and those 2 parts are 126 jars. One part = 126 ÷ 2 = 63. Small jars = 4 parts = 4 × 63 = 252. (Check: medium = 7 × 63 = 441, large = 5 × 63 = 315, and 441 − 315 = 126 ✓.)',
        expWrong:{
          A:'441 is the number of MEDIUM jars (7 parts) — the count the 126 is easiest to attach to, but not the one the question names.',
          C:'315 is the number of LARGE jars (5 parts), the other end of the 126-jar gap.',
          D:'63 is the size of one part. It is the number everything is built from, and small jars are four of them.'
        },
        tip:'A ratio question hands you either a total or a difference. A total matches the SUM of the ratio numbers; a difference matches their DIFFERENCE. Find one part first, then multiply by the part the question actually asks about.',
        desmos:'Type 126/(7-5) to get 63, the value of one part, then 4*63, 7*63 and 5*63 to lay out all three jar counts.',
        desmosLatex:['126/(7-5)','4*63','7*63','5*63']
      },
      {
        id:'RTH-11', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'A staggered start: one rate alone, then two rates together',
        stem:'Press A prints 240 sheets per minute and Press B prints 160 sheets per minute, each at a constant rate. Press A begins a 30,000-sheet job alone, and Press B joins 25 minutes later. How many minutes after Press A begins is the job finished?',
        answer:'85',
        expCorrect:'Split the job at the moment Press B joins. Phase 1: Press A alone prints 240 × 25 = 6,000 sheets, leaving 30,000 − 6,000 = 24,000. Phase 2: both run, so the combined rate is 240 + 160 = 400 sheets per minute and 24,000 ÷ 400 = 60 minutes. The question reads the clock from Press A, so 25 + 60 = 85 minutes. (Check: A runs 85 min → 20,400 sheets; B runs 60 min → 9,600; 20,400 + 9,600 = 30,000 ✓.)',
        tip:'Treat a head start as its own phase: subtract what it produced, then add the rates for the rest. Finish by asking which clock the question reads from — the total elapsed time is longer than the phase you just solved.',
        desmos:'Type 240*25 for the 6,000-sheet head start, then (30000-6000)/(240+160) for the 60 minutes of joint printing, and add the 25.',
        desmosLatex:['240*25','(30000-6000)/(240+160)','25+60']
      },
      {
        id:'RTH-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Comparing a flat cost with a two-tier rate per page',
        stem:'A shop can buy toner two ways. Plan 1 costs $57.60 for a cartridge that yields 4,800 pages. Plan 2 charges $0.014 per page for the first 3,000 pages and $0.010 per page after that. For a 4,800-page job, how much less does the cheaper plan cost?',
        choices:{A:'$2.40', B:'$9.60', C:'$39.60', D:'$60.00'},
        correct:'A',
        expCorrect:'Plan 2 has two tiers and both of them count. First 3,000 pages: 3,000 × 0.014 = $42.00. The remaining 4,800 − 3,000 = 1,800 pages: 1,800 × 0.010 = $18.00. Plan 2 totals 42 + 18 = $60.00, against Plan 1 at a flat $57.60, so Plan 1 is cheaper by 60.00 − 57.60 = $2.40. (Check: Plan 1 works out to 57.60 ÷ 4,800 = $0.012 per page, which sits between the two tier rates — that is why the plans land so close.)',
        expWrong:{
          B:'$9.60 charges all 4,800 pages at one tier rate (4,800 × 0.010 = $48, then 57.60 − 48). The first 3,000 pages are billed at the higher rate, not the lower one.',
          C:'$39.60 counts only the pages past the threshold (1,800 × 0.010 = $18) and compares that with $57.60. The first tier is not free.',
          D:'$60.00 is the total cost of Plan 2, not the gap between the plans. The question asks how much LESS the cheaper one costs.'
        },
        tip:'A tiered rate never applies one number to everything: cut the quantity at each threshold, charge each block at its own rate, and add. Then reread whether the question wants a total or a difference.',
        desmos:'Type 3000*0.014+1800*0.010 to get 60, then 60-57.60 for the $2.40 gap. Type 57.60/4800 to see Plan 1 as $0.012 per page.',
        desmosLatex:['3000*0.014+1800*0.010','60-57.60','57.60/4800']
      },
      {
        id:'RTH-13', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'A scale model where volume goes with the cube of the length scale',
        stem:'A museum builds a scale model of a grain silo in which every length is 1/24 of the matching length on the real silo. The model holds 1.5 liters of sand when it is full. How many liters of sand does the real silo hold?',
        choices:{A:'36', B:'864', C:'13,824', D:'20,736'},
        correct:'D',
        expCorrect:'Lengths go up by 24, so volumes go up by 24³ = 24 × 24 × 24 = 13,824. Real capacity = 1.5 × 13,824 = 20,736 liters. (Why three times: for a cylinder the volume is πr²h, and multiplying the radius by 24 picks the factor up twice while the height picks it up once ✓.)',
        expWrong:{
          A:'36 applies the factor once (1.5 × 24). That is the rule for a single length, not for a capacity.',
          B:'864 applies it twice (1.5 × 576). Squaring belongs to area; a volume needs the factor three times.',
          C:'13,824 is the volume scale factor 24³ by itself. It is the multiplier, not the result — it still has to act on the 1.5 liters.'
        },
        tip:'Scale factor k: lengths ×k, areas ×k², volumes ×k³. Capacity in liters is a volume, so the exponent is 3. And when a clean number like 24³ appears, check whether it is the multiplier or the answer before you write it down.',
        desmos:'Type 24^3 to get 13,824, then 1.5*24^3 for 20,736. Typing 1.5*24^2 shows the 864 that squaring produces.',
        desmosLatex:['24^3','1.5*24^3','1.5*24^2']
      },
      {
        id:'RTH-14', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'A coverage rate per liter applied over an area, twice',
        stem:'A sealant covers 12 square meters per liter. A rectangular plaza floor measures 18 meters by 26 meters, and the floor must be given two coats. How many liters of sealant are needed?',
        answer:'78',
        expCorrect:'Area first: 18 × 26 = 468 square meters. One coat needs 468 ÷ 12 = 39 liters. Two coats cover the same floor twice, so the sealant doubles: 39 × 2 = 78 liters. (Check: 78 liters × 12 square meters per liter = 936 square meters of coverage, which is exactly 2 × 468 ✓.)',
        tip:'Divide by a coverage rate, never multiply by it — square meters ÷ (square meters per liter) leaves liters standing. Then hunt for the quiet multiplier at the end of the problem: coats, layers and passes repeat the whole area.',
        desmos:'Type 18*26 to get 468, then 468/12 for the 39 liters of one coat, and 39*2 for the two coats.',
        desmosLatex:['18*26','468/12','39*2']
      },
      {
        id:'RTH-15', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'A mixture ratio after one ingredient is added',
        stem:'A vat holds oil and vinegar in the ratio 7 to 2 by volume, and it contains 63 liters of oil. A cook then pours in vinegar only, until the ratio of oil to vinegar is 3 to 2. How many liters of vinegar did the cook pour in?',
        choices:{A:'24', B:'42', C:'18', D:'45'},
        correct:'A',
        expCorrect:'The oil is never touched, so it anchors both ratios at 63 liters. Start: oil ÷ vinegar = 7/2, so vinegar = 63 × 2/7 = 18 liters. End: oil ÷ vinegar = 3/2 with oil still 63, so vinegar = 63 × 2/3 = 42 liters. Poured in = 42 − 18 = 24 liters. (Check: 63/18 = 7/2 ✓ and 63/42 = 3/2 ✓.)',
        expWrong:{
          B:'42 is the vinegar in the vat at the END. It is the second-to-last quantity, and the starting 18 liters still has to come off.',
          C:'18 is the vinegar at the START — the same slip aimed at the other end of the story.',
          D:'45 subtracts the starting vinegar from the OIL (63 − 18). The oil is the anchor for both ratios, not a term in the subtraction.'
        },
        tip:'In a mixture where only one ingredient changes, pin the untouched one to its actual amount and rewrite BOTH ratios as counts of the other ingredient. The amount added is then one subtraction — and it is never the difference of the ratio numbers.',
        desmos:'Type 63*2/7 for the starting 18 liters and 63*2/3 for the ending 42, then 42-18 for the 24 poured in.',
        desmosLatex:['63*2/7','63*2/3','42-18']
      },
      {
        id:'RTH-16', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'A rate per worker per hour scaled to a crew and to whole shifts',
        stem:'At a packing house each worker fills 34 crates per hour, working at a constant rate. A crew of 6 workers works shifts of 7.5 hours. How many whole shifts does the crew need to fill 6,120 crates?',
        choices:{A:'4', B:'24', C:'30', D:'180'},
        correct:'A',
        expCorrect:'Build one full shift, then divide. One worker in one shift: 34 × 7.5 = 255 crates. The crew of 6: 255 × 6 = 1,530 crates per shift. Shifts needed: 6,120 ÷ 1,530 = 4. (Check: 1,530 × 4 = 6,120 exactly ✓.)',
        expWrong:{
          B:'24 divides by one worker’s output per shift (255) and leaves the other five workers out of the crew.',
          C:'30 divides by the crew’s output per HOUR (34 × 6 = 204), so the result counts hours, not shifts.',
          D:'180 divides by the bare rate of 34, which counts worker-hours — neither the crew size nor the length of a shift was used.'
        },
        tip:'A rate with two "per" in it (per worker, per hour) has to be multiplied back up twice before it meets the total. Say the unit out loud at each step — crates per worker-hour, then per worker-shift, then per crew-shift — and only then divide.',
        desmos:'Type 34*7.5*6 to get 1,530 crates per shift, then 6120/1530 for 4. Typing 6120/(34*7.5) shows the 24 that forgetting the crew gives.',
        desmosLatex:['34*7.5*6','6120/1530','6120/(34*7.5)']
      },
      {
        id:'RTH-17', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Two fuel rates written in opposite units (liters per 100 kilometers and kilometers per liter)',
        stem:'One van uses 9.6 liters of fuel per 100 kilometers. A second van travels 12.5 kilometers per liter. On a 750-kilometer route, how many more liters of fuel does the first van use than the second?',
        answer:'12',
        expCorrect:'The two rates are reciprocals of each other, so each one is used in the opposite direction. First van: 750 ÷ 100 = 7.5 blocks of a hundred kilometers, and 7.5 × 9.6 = 72 liters. Second van: liters = kilometers ÷ (kilometers per liter) = 750 ÷ 12.5 = 60 liters. Difference = 72 − 60 = 12 liters. (Check: the first van manages 100 ÷ 9.6 ≈ 10.4 kilometers per liter, worse than 12.5, so it should burn more ✓.)',
        tip:'Liters per kilometer and kilometers per liter are upside down from each other: with the first you MULTIPLY by the distance, with the second you DIVIDE. Decide which unit you are holding before you touch the calculator, and flip one rate if you want to compare them head to head.',
        desmos:'Type 9.6*750/100 for 72 and 750/12.5 for 60; the difference is 12. Type 100/9.6 to see the first van as about 10.4 kilometers per liter.',
        desmosLatex:['9.6*750/100','750/12.5','100/9.6']
      },
      {
        id:'RTH-18', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Chaining two ratios that share a middle quantity',
        stem:'In a workshop the ratio of lathes to drills is 4 to 3, and the ratio of drills to sanders is 5 to 6. The workshop has 45 drills. How many more lathes than sanders does the workshop have?',
        choices:{A:'54', B:'6', C:'60', D:'114'},
        correct:'B',
        expCorrect:'Drills appear in both ratios, so the 45 drills are the bridge. Lathes: lathes ÷ drills = 4/3, so lathes = 45 × 4/3 = 60. Sanders: drills ÷ sanders = 5/6, so sanders = 45 × 6/5 = 54. Difference = 60 − 54 = 6. (Check: 60 : 45 reduces to 4 : 3 ✓ and 45 : 54 reduces to 5 : 6 ✓.)',
        expWrong:{
          A:'54 is the number of sanders — one of the two counts the difference is built from, not the difference itself.',
          C:'60 is the number of lathes, the other count, and the one most students stop at.',
          D:'114 adds the two counts (60 + 54) instead of subtracting them. "How many more" is always a subtraction.'
        },
        tip:'Two ratios that share a quantity are joined through that quantity, never directly to each other. Convert the shared amount separately into each of the other two, watching which side of each ratio it sits on, and only then compare.',
        desmos:'Type 45*4/3 for the 60 lathes and 45*6/5 for the 54 sanders, then 60-54 for the gap of 6.',
        desmosLatex:['45*4/3','45*6/5','60-54']
      },
      {
        id:'RTH-19', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Three chained conversions from a bottling rate to whole drums',
        stem:'A bottling line fills 18 bottles per minute, and each bottle holds 750 milliliters of syrup. The line runs 6.5 hours a day without stopping. Syrup arrives in drums of 200 liters. How many drums must be opened to supply one full day of bottling?',
        choices:{A:'26', B:'36', C:'27', D:'5,265'},
        correct:'C',
        expCorrect:'Three jumps, and neither of the first two is the answer. Syrup per minute: 18 × 750 = 13,500 milliliters = 13.5 liters. Minutes per day: 6.5 × 60 = 390. Syrup per day: 13.5 × 390 = 5,265 liters. Drums: 5,265 ÷ 200 = 26.325, and a drum that is partly used was still opened, so 27. (Check: 26 drums hold 5,200 liters, which leaves the line 65 liters short of finishing the day ✓.)',
        expWrong:{
          A:'26 is 26.325 rounded down. Those 26 drums hold only 5,200 liters, so the line stops 65 liters early — a container count always rounds up.',
          B:'36 treats a 200-liter drum as holding 200 BOTTLES: 18 × 390 = 7,020 bottles, then 7,020 ÷ 200 = 35.1 rounded up. The drum is measured in liters, so the 750 milliliters per bottle has to enter the chain.',
          D:'5,265 is the liters of syrup one day uses. It is the final intermediate step, one division short of the drum count.'
        },
        tip:'When a chain ends in containers, carry the whole chain in one unit and divide only at the end — then round UP, because a partly used container was still opened. Watch for a quantity named in one unit (bottles) and a container measured in another (liters).',
        desmos:'Type 18*0.75*6.5*60 to get 5,265 liters in one line, then 5265/200 for 26.325 and read the next whole number above it.',
        desmosLatex:['18*0.75*6.5*60','5265/200']
      },
      {
        id:'RTH-20', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'A ratio that shifts when the same amount moves from one side to the other',
        stem:'Two bins hold bolts in the ratio 9 to 5. When 48 bolts are moved from the larger bin to the smaller bin, the ratio of the larger bin to the smaller bin becomes 3 to 4. How many bolts were in the larger bin at the start?',
        answer:'144',
        expCorrect:'Give both bins one multiplier: 9x and 5x, which keeps the first ratio true for free. After the move they hold 9x − 48 and 5x + 48, in the ratio 3 to 4, so (9x − 48)/(5x + 48) = 3/4. Cross-multiply: 4(9x − 48) = 3(5x + 48), so 36x − 192 = 15x + 144, then 21x = 336 and x = 16. The larger bin started with 9x = 144 bolts. (Check: bins of 144 and 80 become 96 and 128, and 96/128 = 3/4 ✓. The total, 224, never moves ✓.)',
        tip:'Never turn a ratio into two free unknowns — one multiplier x covers both sides. And when something MOVES between the sides rather than arriving from outside, the total stays fixed, which is the fastest check you have on the answer.',
        desmos:'Graph y=(9x-48)/(5x+48) together with y=3/4 and read the intersection at x = 16, then type 9*16 for the 144.',
        desmosLatex:['y=(9x-48)/(5x+48)','y=3/4','9*16']
      },
      {
        id:'RTH-21', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'A plan scale used on an area, then a change of square units',
        stem:'On a garden plan drawn at a scale of 1 to 40, a rectangular bed has a perimeter of 22 centimeters and an area of 28 square centimeters. What is the actual area of the bed, in square meters?',
        choices:{A:'0.112', B:'4.48', C:'448', D:'44,800'},
        correct:'B',
        expCorrect:'Two different squarings, and both are compulsory. Scale: lengths ×40, so areas ×40² = 1,600, giving 28 × 1,600 = 44,800 square centimeters of real bed. Units: 1 meter = 100 centimeters, so 1 square meter = 100² = 10,000 square centimeters, and 44,800 ÷ 10,000 = 4.48 square meters. (Check from the sides: the bed is 4 cm by 7 cm on the plan, since 4 + 7 = 11 and 2 × 11 = 22 ✓, so in reality it is 1.6 m by 2.8 m and 1.6 × 2.8 = 4.48 ✓.) The perimeter is there to let you recover the sides; the area alone is enough.',
        expWrong:{
          A:'0.112 uses the scale once (28 × 40 = 1,120 cm²) before dividing by 10,000. Both dimensions of the bed grow by 40, so the scale enters squared.',
          C:'448 squares the scale correctly but divides by 100 instead of 10,000. Square meters need the length factor twice, exactly as the scale did.',
          D:'44,800 is the real area in SQUARE CENTIMETERS — the honest second step, one unit change away from the answer.'
        },
        tip:'A scale change and a unit change are two separate squarings, and a question can stack them. Do the scale on the numbers, do the unit on the result, and square each factor on its own — 40² and then 100², never 4,000.',
        desmos:'Type 28*40^2 for the 44,800 square centimeters, then 28*40^2/10^4 for 4.48. Type 1.6*2.8 to confirm it from the real 1.6 m by 2.8 m bed.',
        desmosLatex:['28*40^2','28*40^2/10^4','1.6*2.8']
      },
      {
        id:'RTH-22', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'A fill rate, a second pipe opening late, and a leak',
        stem:'An empty 4,500-liter cistern is filled by pipe X at 30 liters per minute. Pipe Y, which delivers 45 liters per minute, opens 20 minutes after pipe X. A leak lets out 15 liters per minute the entire time. How many minutes after pipe X opens is the cistern full?',
        answer:'90',
        expCorrect:'Cut the timeline where a rate turns on, and give each stretch its own net rate. Phase 1, pipe X against the leak: 30 − 15 = 15 liters per minute for 20 minutes = 300 liters. Phase 2, both pipes against the leak: 30 + 45 − 15 = 60 liters per minute, with 4,500 − 300 = 4,200 liters still to go, so 4,200 ÷ 60 = 70 minutes. Total since pipe X opened: 20 + 70 = 90. (Check by running each opening on its own clock: X for 90 min adds 2,700; Y for 70 min adds 3,150; the leak for 90 min removes 1,350; 2,700 + 3,150 − 1,350 = 4,500 ✓.)',
        tip:'Break the timeline at every moment a rate starts or stops, carry the volume forward, and rebuild the net rate for each stretch. The closing check is to run every pipe over its OWN running time — the pipes and the leak rarely share a clock.',
        desmos:'Type (30-15)*20 for the 300 liters of the first phase, then (4500-300)/(30+45-15) for the 70 minutes of the second, and add the 20.',
        desmosLatex:['(30-15)*20','(4500-300)/(30+45-15)','20+70']
      },
      {
        id:'RTH-23', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Density with a change of unit, then a mass split by a ratio',
        stem:'An alloy is made of copper and zinc in the ratio 5 to 3 by mass. The alloy has a density of 8.4 grams per cubic centimeter. A solid bar of the alloy has a volume of 250 cubic centimeters. What is the mass of the zinc in the bar, in kilograms?',
        choices:{A:'2.1', B:'787.5', C:'1.3125', D:'0.7875'},
        correct:'D',
        expCorrect:'Three steps, and the answer is none of the first two. Mass of the bar: 8.4 × 250 = 2,100 grams. Zinc share: zinc is 3 of the 5 + 3 = 8 parts, so 3/8 × 2,100 = 787.5 grams. Unit: 787.5 ÷ 1,000 = 0.7875 kilograms. (Check: copper is 5/8 × 2,100 = 1,312.5 g, and 787.5 + 1,312.5 = 2,100 ✓.)',
        expWrong:{
          A:'2.1 is the mass of the WHOLE bar in kilograms. The ratio split never happened, so this counts the copper as zinc too.',
          B:'787.5 is the zinc in GRAMS. The arithmetic is finished; the unit the question names is not.',
          C:'1.3125 is the COPPER in kilograms — 5 parts instead of 3. The ratio names copper first, and the question asks for the second metal.'
        },
        tip:'Fix the order and keep it: density × volume gives the total, the ratio splits the total, the unit conversion comes last. Each of the first two hands you a number that looks finished, so close by rereading both the unit and the noun in the question.',
        desmos:'Type 8.4*250 for 2,100 grams, then 2100*3/8 for 787.5 and 2100*3/8/1000 for 0.7875. Typing 2100*5/8 shows the copper, 1,312.5.',
        desmosLatex:['8.4*250','2100*3/8','2100*3/8/1000','2100*5/8']
      },
      {
        id:'RTH-24', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Inverse proportion after part of the job is already finished',
        stem:'A crew of 10 pavers can finish a driveway in 18 days, with every paver working at the same constant rate. The crew works for 6 days, and then 2 pavers leave. Working at that same rate, how many more days does the crew of 8 need to finish the driveway?',
        choices:{A:'12', B:'15', C:'21', D:'22.5'},
        correct:'B',
        expCorrect:'Measure the driveway in paver-days: 10 × 18 = 180 paver-days in all. The first stretch spent 10 × 6 = 60 of them, leaving 180 − 60 = 120. With 8 pavers left, 120 ÷ 8 = 15 more days. (Check: 10 × 6 + 8 × 15 = 60 + 120 = 180 ✓.)',
        expWrong:{
          A:'12 is what the ORIGINAL crew of 10 still had left (18 − 6). It ignores the two pavers who walked off, and fewer pavers always means more days.',
          C:'21 is the total length of the job counted from day one (6 + 15). The question asks how many MORE days from the moment the crew shrinks.',
          D:'22.5 rescales the entire job to the smaller crew (180 ÷ 8) and forgets that six days of work are already in the ground. The 60 paver-days already spent have to come off first.'
        },
        tip:'The moment a crew size changes, convert the job into worker-days: the total is fixed, subtract what is already spent, divide the remainder by the new crew. Then check whether the question counts days from now or from the start.',
        desmos:'Type 10*18 for the 180 paver-days, 10*6 for the 60 already spent, then (180-60)/8 for the 15 days that remain.',
        desmosLatex:['10*18','10*6','(180-60)/8']
      },
      {
        id:'RTH-25', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Overall speed of a round trip written with a parameter for the distance',
        stem:'A ferry crosses a channel of d miles at a constant speed of 12 miles per hour and returns along the same route at a constant speed of 18 miles per hour, where d is a positive number. What is the overall speed for the whole trip, in miles per hour?',
        choices:{A:'14.4', B:'15', C:'30', D:'14.4d'},
        correct:'A',
        expCorrect:'Overall speed is total distance ÷ total time. Distance = 2d miles. Time out = d/12 hours, time back = d/18 hours, so the total time is d/12 + d/18 = 3d/36 + 2d/36 = 5d/36 hours. Speed = 2d ÷ (5d/36) = 2d × 36/(5d) = 72/5 = 14.4 miles per hour, and the d cancels, so the distance never mattered. (Check with d = 36: out takes 3 hours, back takes 2, and 72 miles ÷ 5 hours = 14.4 ✓.)',
        expWrong:{
          B:'15 is the halfway point between 12 and 18. That is the overall speed only when the two legs take the same TIME, and here the slow leg takes 1.5 times longer.',
          C:'30 adds the two speeds. Speeds add when two motions combine at once, not when they happen one after the other.',
          D:'14.4d keeps a d that has already cancelled. A speed cannot grow with the length of the trip when both legs are always run at 12 and 18.'
        },
        tip:'Round trip at two speeds: the distance always cancels, so the overall speed is 2/(1/v1 + 1/v2). If the parameter survives into your answer, you divided distance by distance somewhere — test with a length both speeds divide evenly and the number that comes back is the answer for every distance.',
        desmos:'Type 2/(1/12+1/18) to get 14.4. Then set d = 36 and type 72/(36/12+36/18) to watch the same 14.4 come back, and (12+18)/2 to see the 15 that averaging gives.',
        desmosLatex:['2/(1/12+1/18)','72/(36/12+36/18)','(12+18)/2']
      },
      {
        id:'RTH-26', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Three chained conversions: cubic meters to liters to kilograms to minutes',
        stem:'A conveyor moves gravel at a constant rate of 45 kilograms per minute into a hopper that holds 9 cubic meters. The gravel has a density of 1.6 kilograms per liter. How many minutes does the conveyor take to fill the empty hopper?',
        answer:'320',
        expCorrect:'The hopper is measured in volume and the conveyor in mass, so the density is the only bridge between them. Volume: 1 cubic meter = 1,000 liters, so 9 m³ = 9,000 liters. Mass: 9,000 × 1.6 = 14,400 kilograms. Time: 14,400 ÷ 45 = 320 minutes. (Check backwards: 320 × 45 = 14,400 kg, and 14,400 ÷ 1.6 = 9,000 liters = 9 m³ ✓.)',
        tip:'When the rate and the target are measured in different quantities — mass against volume — density is what connects them, and it has to be used in the direction that cancels. Write kg = L × (kg/L) and confirm the liters disappear before you divide by the rate.',
        desmos:'Type 9*1000 for the 9,000 liters, then 9000*1.6 for 14,400 kilograms, then 14400/45 for the 320 minutes.',
        desmosLatex:['9*1000','9000*1.6','14400/45']
      },
      {
        id:'RTH-27', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'A ratio with the same unknown added to both sides',
        stem:'In a warehouse the ratio of red pallets to blue pallets is 4 to 9. After n more pallets of each color arrive, the ratio of red pallets to blue pallets is 1 to 2 and the warehouse holds 150 pallets in all. What is the value of n?',
        choices:{A:'40', B:'50', C:'20', D:'10'},
        correct:'D',
        expCorrect:'Write the start as 4x and 9x. After the delivery the counts are 4x + n and 9x + n, in the ratio 1 to 2, so 2(4x + n) = 9x + n. That gives 8x + 2n = 9x + n, so n = x. Now use the total: (4x + n) + (9x + n) = 13x + 2n = 13x + 2x = 15x = 150, so x = 10 and therefore n = 10. (Check: 40 red and 90 blue, plus 10 of each, gives 50 and 100 — a ratio of 1 to 2 — and 50 + 100 = 150 ✓.)',
        expWrong:{
          A:'40 is the number of red pallets at the START (4x). It is what x usually gets cashed out into, but the question asks for the size of the delivery.',
          B:'50 is the number of red pallets at the END (4x + n) — one step further along, still not the delivery.',
          C:'20 is the TOTAL number of pallets that arrived, 2n, counting both colors. The question says n pallets of EACH color.'
        },
        tip:'Adding the same amount to both sides of a ratio changes it, so the unknown belongs in both the numerator and the denominator before you cross-multiply. Solve for the relationship between the multiplier and the unknown first, then let the total pin down the actual numbers.',
        desmos:'Once the algebra gives n = x, type 150/15 to get x = 10, then 4*10+10 and 9*10+10 for the final 50 and 100, and 50/100 to confirm the 1 to 2.',
        desmosLatex:['150/15','4*10+10','9*10+10','50/100']
      },
      {
        id:'RTH-28', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'A scale model, a fill rate on the model and a different fill rate on the real tank',
        stem:'Every length on a scale model of a water tank is 1/15 of the matching length on the real tank. A tube fills the model at 2 liters per minute and takes 4 minutes to fill it completely. The real tank is filled at 90 liters per minute. How many minutes does the real tank take to fill?',
        choices:{A:'20', B:'60', C:'300', D:'27,000'},
        correct:'C',
        expCorrect:'Three steps. Model capacity: 2 liters per minute × 4 minutes = 8 liters. Real capacity: lengths scale by 15, so volume scales by 15³ = 3,375, and 8 × 3,375 = 27,000 liters. Time: 27,000 ÷ 90 = 300 minutes. (Check: 300 × 90 = 27,000 ✓, and 27,000 ÷ 8 = 3,375 = 15³ ✓.)',
        expWrong:{
          A:'20 squares the scale instead of cubing it (8 × 225 = 1,800 liters, then ÷ 90). Capacity is a volume, so the factor enters three times.',
          B:'60 scales the TIME by 15 (4 × 15) rather than the volume. The real tank is filled by a different pump, so the model’s 4 minutes cannot be carried over.',
          D:'27,000 is the capacity of the real tank in liters — the second step, still one division by the 90 liters per minute short.'
        },
        tip:'A scale factor touches volume, never time; time reappears only when you divide the scaled volume by the rate that actually fills it. And whenever two rates show up, check which object each one belongs to before using either.',
        desmos:'Type 2*4 for the model’s 8 liters, 8*15^3 for 27,000, and 27000/90 for 300. Typing 8*15^2/90 shows the 20 that squaring gives.',
        desmosLatex:['2*4','8*15^3','27000/90','8*15^2/90']
      },
      {
        id:'RTH-29', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Two tanks changing at a constant rate, compared at one moment',
        stem:'Tank P holds 900 liters and is draining at a constant rate of 24 liters per minute. Tank Q holds 150 liters and is being filled at a constant rate of 36 liters per minute. Both start at the same time. At the moment tank P holds exactly twice as much as tank Q, how many liters does tank P hold?',
        choices:{A:'375', B:'450', C:'6.25', D:'750'},
        correct:'D',
        expCorrect:'Write each tank as a function of the minutes t: P = 900 − 24t and Q = 150 + 36t. The condition P = 2Q gives 900 − 24t = 2(150 + 36t) = 300 + 72t, so 600 = 96t and t = 6.25 minutes. That is a time, not a volume, so push it back in: P = 900 − 24(6.25) = 900 − 150 = 750 liters. (Check: Q = 150 + 36(6.25) = 375, and 2 × 375 = 750 ✓.)',
        expWrong:{
          A:'375 is what tank Q holds at that moment. It satisfies the condition, but the question names tank P.',
          B:'450 is half of the starting 900, as if "twice as much" were something tank P does to itself. The comparison is between the two tanks at the same instant.',
          C:'6.25 is the TIME in minutes when the condition holds. It is the number the equation hands you first, and it still has to be substituted back into the expression for P.'
        },
        tip:'Model each changing quantity as start ± rate × t, set up the comparison exactly as worded, and then look again at what is being asked. Solving for t is almost never the last step: substitute it back and verify the condition on both quantities.',
        desmos:'Graph y=900-24x and y=2(150+36x) and read the intersection at x = 6.25, then type 900-24*6.25 for 750 and 150+36*6.25 for the 375 that confirms it.',
        desmosLatex:['y=900-24x','y=2(150+36x)','900-24*6.25','150+36*6.25']
      },
      {
        id:'RTH-30', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Two part-to-part ratios nested inside a third',
        stem:'A choir has sopranos and altos in the ratio 5 to 4. Among the sopranos, the ratio of first-year singers to returning singers is 2 to 3; among the altos, that ratio is 3 to 5. The choir has 56 first-year singers in all. How many returning altos are in the choir?',
        choices:{A:'24', B:'40', C:'48', D:'64'},
        correct:'B',
        expCorrect:'Choose a multiplier that makes every split come out whole. Sopranos are cut into 5 parts and altos into 8, so let sopranos = 10m and altos = 8m, which still reads 10m : 8m = 5 : 4. First-year sopranos = (2/5)(10m) = 4m; first-year altos = (3/8)(8m) = 3m. Together 4m + 3m = 7m = 56, so m = 8. Altos = 8 × 8 = 64, and returning altos = (5/8)(64) = 40. (Check: sopranos 80, altos 64; first-year 32 + 24 = 56 ✓.)',
        expWrong:{
          A:'24 is the FIRST-YEAR altos (3 of the 8 parts). The question asks for the returning ones, which are the other 5 parts.',
          C:'48 is the returning SOPRANOS (3/5 of 80) — the right role in the wrong voice part.',
          D:'64 is every alto in the choir. The inner ratio still has to split them into first-year and returning.'
        },
        tip:'When a ratio is split again inside each of its parts, pick the multiplier so both inner splits land on whole numbers, then build every count from it. Finish by saying the answer out loud — "returning altos" — because three of the four numbers you produced are honest counts of something else.',
        desmos:'Type 56/7 to get m = 8, then 10*8 and 8*8 for the 80 sopranos and 64 altos, and 64*5/8 for the 40 returning altos.',
        desmosLatex:['56/7','10*8','8*8','64*5/8']
      },
      {
        id:'RTH-31', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'A coverage rate per square meter, a unit change and a leftover in the last bag',
        stem:'A fertilizer is applied at a rate of 36 grams per square meter. A rectangular field measures 140 meters by 250 meters, and the fertilizer is sold in bags of 25 kilograms. The field is covered exactly once, using whole bags one at a time. How many kilograms of fertilizer are left unused in the last bag that is opened?',
        answer:'15',
        expCorrect:'Four steps, and no intermediate is the answer. Area: 140 × 250 = 35,000 square meters. Fertilizer used: 35,000 × 36 = 1,260,000 grams = 1,260 kilograms. Bags opened: 1,260 ÷ 25 = 50.4, so 51 bags get opened. Fertilizer in those bags: 51 × 25 = 1,275 kilograms. Left unused: 1,275 − 1,260 = 15 kilograms. (Check: the first 50 bags supply 1,250 kg, so the 51st gives up only 10 of its 25 kg and keeps 15 ✓.)',
        tip:'A leftover question makes you finish the chain twice: what was USED and what was OPENED. Round the container count up, multiply back by the container size, then subtract. The 0.4 in the quotient is the part of the last bag that gets used, so the leftover is the other 0.6 of it, not the 0.4.',
        desmos:'Type 140*250*36/1000 for the 1,260 kilograms used, then 1260/25 for 50.4, and 51*25-1260 for the 15 kilograms left in the last bag.',
        desmosLatex:['140*250*36/1000','1260/25','51*25-1260']
      }
    ]
  });
})();
