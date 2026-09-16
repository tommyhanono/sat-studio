/* SAT Studio question set — Math: Problem-Solving & Data Analysis
   Ratios, rates and units (RTR-01 to RTR-15) */
(function(){

  window.SAT_SETS.push({
    id: 'math-psda-ratios-ramp',
    title: 'Ratios, Rates & Units — Warm-up to Test Level',
    section: 'math',
    level: 'Media',
    description: 'Ratios, rates and units from warm-up to test level: unit rates run forward and backward, chained unit conversions, map and plan scales in both directions, density, yield, splitting a total in a given ratio, direct and inverse proportion, and two rates working at the same time. The unit trap runs through the whole set.',
    minutes: 20,
    questions: [

      /* ============ Warm-up: one rate, one step (RTR-01 to RTR-08) ============ */
      {
        id:'RTR-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Unit rate: sheets per minute from a total and a time',
        stem:'A print shop folding machine folds 1,260 sheets in 15 minutes at a constant rate. At this rate, how many sheets does the machine fold per minute?',
        choices:{A:'84', B:'21', C:'840', D:'18,900'},
        correct:'A',
        expCorrect:'A unit rate is the total divided by the number of units of time: 1,260 ÷ 15 = 84 sheets per minute. (Check: 84 × 15 = 1,260 ✓.)',
        expWrong:{
          B:'21 divides by 60 instead of 15. Sixty is the number of minutes in an hour, but the machine ran for the 15 minutes the question gives, so the hour never enters this problem.',
          C:'840 reads 15 minutes as 1.5 minutes: 1,260 ÷ 1.5 = 840. One misplaced decimal makes the rate ten times too big.',
          D:'18,900 multiplies, 1,260 × 15. A rate "per minute" is always the total DIVIDED by the minutes; multiplying gives sheet-minutes, which is not a rate at all.'
        },
        tip:'Unit rate = total ÷ number of units. Before dividing, underline the unit the final line asks for ("per minute") and divide by the count of exactly that unit, not by a number you had to invent.',
        desmos:'Type 1260/15 and Desmos returns 84. Typing 1260/60 returns 21, which is what dividing by an hour you were never given costs you.',
        desmosLatex:['1260/15','1260/60']
      },
      {
        id:'RTR-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Running a rate backwards: hours needed for a given number of blocks',
        stem:'An ice plant freezes 14 blocks of ice per hour, working at a constant rate. Working at this rate, how many hours does the plant need to freeze 224 blocks of ice?',
        choices:{A:'3,136', B:'16', C:'960', D:'0.0625'},
        correct:'B',
        expCorrect:'Hours = blocks ÷ blocks per hour: 224 ÷ 14 = 16 hours. (Check: 14 × 16 = 224 blocks ✓.)',
        expWrong:{
          A:'3,136 multiplies 224 × 14. That answers "how many blocks in 224 hours", not how long 224 blocks take.',
          C:'960 is 16 × 60, the right answer converted into minutes. The question asks for hours, and 16 is already in hours, so that last conversion undoes a correct answer.',
          D:'0.0625 is 14 ÷ 224, the division upside down. The total goes on top and the rate underneath, because the hours are what is being counted out.'
        },
        tip:'A rate ties three numbers together: total = rate × time. Cover the one the question wants with your finger and the two left standing tell you whether to multiply or divide.',
        desmos:'Type 224/14 and Desmos returns 16. Typing 14/224 returns 0.0625, the same division run upside down.',
        desmosLatex:['224/14','14/224']
      },
      {
        id:'RTR-03', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Yield as a rate: meters of fabric per dress',
        stem:'A workshop uses 2.4 meters of fabric for each dress it sews, with no fabric left over. At that rate, how many meters of fabric does the workshop need for 35 dresses?',
        answer:'84',
        expCorrect:'The rate is 2.4 meters for one dress, so 35 dresses need 2.4 × 35 = 84 meters. (Check backwards: 84 ÷ 2.4 = 35 dresses ✓.) Answer: 84.',
        expWrong:{},
        tip:'A rate given "per one thing" multiplies when you are asked about many of them, and divides when the total is given and you want how many things. Write the unit beside every number and the operation picks itself.',
        desmos:'Type 2.4*35 and Desmos returns 84. Type 84/2.4 to watch it come back to 35 dresses.',
        desmosLatex:['2.4*35','84/2.4']
      },
      {
        id:'RTR-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'A rate given per minute, asked per hour',
        stem:'A ferry burns 7.5 liters of fuel each minute while it is crossing a bay, at a constant rate. How many liters of fuel does the ferry burn in one hour of crossing?',
        choices:{A:'0.125', B:'45', C:'450', D:'27,000'},
        correct:'C',
        expCorrect:'An hour holds 60 minutes, so the ferry burns 7.5 × 60 = 450 liters in one hour. (Check backwards: 450 ÷ 60 = 7.5 liters each minute ✓.)',
        expWrong:{
          A:'0.125 divides by 60 instead of multiplying: 7.5 ÷ 60. Moving from a rate per minute to a rate per hour, the number of liters has to go UP, because an hour is the longer stretch of time.',
          B:'45 uses 6 minutes in an hour instead of 60, one decimal place short. 7.5 × 6 = 45 is the fuel for six minutes of crossing, not for the hour.',
          D:'27,000 multiplies by 60 twice, once for minutes and once more for seconds. Only one step of 60 separates minutes from hours; the seconds are not part of this problem.'
        },
        tip:'Per a SMALL unit of time up to a BIG one, the number grows: multiply. Per a big unit down to a small one, it shrinks: divide. Deciding that direction before touching the calculator kills the most common error on this skill.',
        desmos:'Type 7.5*60 and Desmos returns 450. Typing 7.5/60 returns 0.125, the same step run backwards.',
        desmosLatex:['7.5*60','7.5/60']
      },
      {
        id:'RTR-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Map scale: from a distance on the map to the real distance',
        stem:'On a hiking map, 1 centimeter represents 250 meters of trail. Two shelters are 6.4 centimeters apart on the map. How far apart are the shelters along the trail, in meters?',
        choices:{A:'160', B:'1.6', C:'39.1', D:'1,600'},
        correct:'D',
        expCorrect:'Each centimeter on the map stands for 250 meters of trail, so 6.4 centimeters stand for 6.4 × 250 = 1,600 meters. (Check backwards: 1,600 ÷ 250 = 6.4 centimeters on the map ✓.)',
        expWrong:{
          A:'160 multiplies by 25 instead of 250, one decimal place short of the scale the map states.',
          B:'1.6 is the same distance left in KILOMETERS. The length is right, but the final line asks for meters, and 1.6 kilometers is 1,600 of them.',
          C:'39.1 divides the other way, 250 ÷ 6.4. Multiplying by the scale turns a map length into a real length; dividing turns a real length back into a map length.'
        },
        tip:'A scale is a rate with two units: meters of trail per centimeter of paper. Map to ground, multiply; ground to map, divide. Then read the final line again, because meters and kilometers are both sitting there waiting.',
        desmos:'Type 6.4*250 and Desmos returns 1600. Then type 1600/1000 to see the same distance written as 1.6 kilometers.',
        desmosLatex:['6.4*250','1600/1000']
      },
      {
        id:'RTR-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Splitting a total in a given ratio',
        stem:'A plant nursery mixes potting soil and compost in the ratio 5 to 3 by mass. The nursery makes 96 kilograms of the blend. How many kilograms of compost does the blend contain?',
        choices:{A:'60', B:'36', C:'32', D:'12'},
        correct:'B',
        expCorrect:'Add the parts first: 5 + 3 = 8 equal parts, so one part is 96 ÷ 8 = 12 kilograms. Compost takes 3 parts: 3 × 12 = 36 kilograms. (Check: the soil is 5 × 12 = 60, and 60 + 36 = 96 ✓.)',
        expWrong:{
          A:'60 is the potting soil, 5 parts of 12. It is the other half of the same split, so it is the right arithmetic answering the wrong quantity.',
          C:'32 divides 96 by 3, the compost number alone. The blend is cut into 5 + 3 = 8 parts, and only after that does the 3 do any work.',
          D:'12 is the size of ONE part, the step before the last one. Compost is worth 3 of those parts.'
        },
        tip:'In a part-to-part ratio, add the numbers to learn how many equal parts the total holds, divide the total ONCE, then multiply by the parts the question names. The last line decides which of the two quantities you report.',
        desmos:'Type 96/8 for one part (12), then 3*12 for the compost (36). Type 5*12 to confirm the soil is 60 and that 60 + 36 comes back to 96.',
        desmosLatex:['96/8','3*12','5*12']
      },
      {
        id:'RTR-07', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Density as a rate: mass from volume',
        stem:'A block of paraffin wax has a density of 0.9 grams per cubic centimeter. The block has a volume of 340 cubic centimeters. What is the mass of the block, in grams?',
        answer:'306',
        expCorrect:'Density is mass per unit of volume, so mass = density × volume: 0.9 × 340 = 306 grams. Both numbers already carry grams and cubic centimeters, so nothing has to be converted. (Check backwards: 306 ÷ 340 = 0.9 grams per cubic centimeter ✓.) Answer: 306.',
        expWrong:{},
        tip:'Read "grams per cubic centimeter" as the fraction grams/cm³. Multiplying it by cm³ cancels the volume and leaves grams; dividing a mass by it leaves cm³. A density below 1 means the mass comes out SMALLER than the volume number, which is not an error.',
        desmos:'Type 0.9*340 and Desmos returns 306. Type 306/340 to watch the density come back as 0.9.',
        desmosLatex:['0.9*340','306/340']
      },
      {
        id:'RTR-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Direct proportion: find the unit rate, then scale it up',
        stem:'The amount of glaze a ceramics studio uses is directly proportional to the number of mugs it coats. The studio uses 51 milliliters of glaze on 12 mugs. How many milliliters of glaze does it need for 28 mugs?',
        choices:{A:'119', B:'67', C:'1,428', D:'6.6'},
        correct:'A',
        expCorrect:'Directly proportional means the glaze per mug never changes. One mug: 51 ÷ 12 = 4.25 milliliters. Twenty-eight mugs: 4.25 × 28 = 119 milliliters. (Check by the cross-product: 51 × 28 = 1,428, and 1,428 ÷ 12 = 119 ✓.)',
        expWrong:{
          B:'67 adds 16 to 51 because the mugs went up by 16. Proportional quantities multiply by the same factor; they do not grow by the same amount.',
          C:'1,428 is 51 × 28, the cross-product before it is divided by 12. It is the numerator of the right calculation, one step short of the answer.',
          D:'6.6 uses the rate upside down, 12 ÷ 51 mugs per milliliter, and then multiplies by 28. The rate this question needs is milliliters per mug, which is 4.25.'
        },
        tip:'Direct proportion means one unit rate stays fixed, so find it once (total ÷ count) and multiply. If the count grows by a factor of 7/3, everything proportional to it grows by 7/3 too — adding the difference instead is the standard trap.',
        desmos:'Type 51/12 for the 4.25 milliliters per mug, then 4.25*28 for 119. Typing 51*28/12 gets there in one line.',
        desmosLatex:['51/12','4.25*28','51*28/12']
      },

      /* ============ Test level: two steps, or the unit trap (RTR-09 to RTR-15) ============ */
      {
        id:'RTR-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Converting a speed: kilometers per hour into meters per second',
        stem:'A conveyor belt at a gravel quarry moves at a constant 5.4 kilometers per hour. What is that speed in meters per second?',
        choices:{A:'0.0015', B:'90', C:'15', D:'1.5'},
        correct:'D',
        expCorrect:'Both units change. Distance: 5.4 kilometers = 5.4 × 1,000 = 5,400 meters. Time: 1 hour = 60 × 60 = 3,600 seconds. So the belt moves 5,400 ÷ 3,600 = 1.5 meters per second. (Check backwards: 1.5 × 3,600 = 5,400 meters in an hour, which is 5.4 kilometers ✓.)',
        expWrong:{
          A:'0.0015 divides by 3,600 but leaves the kilometers alone: 5.4 ÷ 3,600 is kilometers per second, not meters per second. The distance unit is the one still unconverted.',
          B:'90 stops after a single division by 60, so it is meters per MINUTE: 5,400 ÷ 60 = 90. One more division by 60 finishes the trip from minutes down to seconds.',
          C:'15 divides by 360 instead of 3,600 — one zero short. An hour holds 60 × 60 = 3,600 seconds.'
        },
        tip:'Kilometers per hour into meters per second: multiply by 1,000 and divide by 3,600, which is the same as dividing by 3.6. Then sanity-check against something you know: 3.6 km per hour is a slow walk, and that is exactly 1 meter per second.',
        desmos:'Type 5.4*1000/3600 and Desmos returns 1.5. Typing 5.4*1000/60 returns 90, the meters-per-minute stop on the way.',
        desmosLatex:['5.4*1000/3600','5.4*1000/60']
      },
      {
        id:'RTR-10', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Chained unit conversion: gallons per minute into liters per hour',
        stem:'A pump at a juice bottling plant moves 3.5 gallons of concentrate per minute at a constant rate. Using 1 gallon = 3.8 liters, how many liters of concentrate does the pump move in one hour?',
        answer:'798',
        expCorrect:'Two conversions, and either order works. Time first: 3.5 × 60 = 210 gallons in an hour, then 210 × 3.8 = 798 liters. (Check the other order: 3.5 gallons is 3.5 × 3.8 = 13.3 liters each minute, and 13.3 × 60 = 798 ✓.) Answer: 798.',
        expWrong:{},
        tip:'Write every factor of a chain as a fraction that cancels one unit: (3.5 gal/1 min)(60 min/1 h)(3.8 L/1 gal) leaves liters per hour and nothing else. Run the whole chain before rounding, and check the final line for the unit it wants — stopping at 210 leaves the gallons unconverted, stopping at 13.3 leaves the minutes unconverted.',
        desmos:'Type 3.5*60*3.8 and Desmos returns 798. Typing 3.5*3.8*60 returns the same number with the two steps swapped, which is the point of a chain.',
        desmosLatex:['3.5*60*3.8','3.5*3.8*60']
      },
      {
        id:'RTR-11', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'A three-way ratio: from parts to a share of the whole',
        stem:'A bike repair shop sorts its jobs into tune-ups, brake work and wheel work in the ratio 3 to 5 to 8. Last month the shop logged 240 jobs in those three categories. How many more wheel-work jobs than tune-ups did the shop log?',
        choices:{A:'5', B:'120', C:'75', D:'80'},
        correct:'C',
        expCorrect:'The three numbers count equal parts, so the whole is 3 + 5 + 8 = 16 parts and one part is 240 ÷ 16 = 15 jobs. Wheel work: 8 × 15 = 120. Tune-ups: 3 × 15 = 45. The difference is 120 − 45 = 75. (Check the whole split: 45 + 75 + 120 = 240 ✓.)',
        expWrong:{
          A:'5 is the difference between the PARTS, 8 − 3, left in part units instead of jobs. Each part is worth 15 jobs, so that gap is really 5 × 15 = 75.',
          B:'120 is the wheel-work total by itself, the step before the last one. The question asks how many MORE than the tune-ups, so the 45 tune-ups still have to be subtracted.',
          D:'80 comes from adding the parts as 3 + 5 + 8 = 15, which makes one part 16 jobs instead of 15. The three parts add to 16, so the total is cut into sixteenths.'
        },
        tip:'A ratio a : b : c cuts a total into a + b + c equal parts. Find the value of ONE part first and every later question about that split is a multiplication. Then check whether the final line wants one share, the whole, or a difference — a part-to-part ratio answers none of those until you add the parts up.',
        desmos:'Type 240/16 for one part (15), then 8*15-3*15 for the 75-job gap. Typing 240/15 shows the 16 that the wrong sum of parts would give you.',
        desmosLatex:['240/16','8*15-3*15']
      },
      {
        id:'RTR-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two rates working at once: combined liters per minute',
        stem:'A cooling tank at an ice plant is filled by two hoses. Hose A alone fills the tank in 20 minutes and hose B alone fills it in 30 minutes. If both hoses run at the same time, how many minutes does filling the tank take?',
        choices:{A:'12', B:'25', C:'50', D:'600'},
        correct:'A',
        expCorrect:'Add RATES, never times. In one minute hose A fills 1/20 of the tank and hose B fills 1/30, so together they fill 1/20 + 1/30 = 3/60 + 2/60 = 5/60 = 1/12 of the tank each minute. Filling the whole tank therefore takes 12 minutes. (Check: in 12 minutes A delivers 12/20 = 0.6 of the tank and B delivers 12/30 = 0.4, and 0.6 + 0.4 = 1 whole tank ✓.)',
        expWrong:{
          B:'25 is the average of 20 and 30. Two hoses running together are faster than the faster hose alone, so the answer has to land BELOW 20, never between the two times.',
          C:'50 adds the two times. Times add when the hoses run one after the other; when they run at the same time it is the rates that add.',
          D:'600 is 20 × 30, the numerator of the two-worker shortcut. That shortcut is (20 × 30) ÷ (20 + 30) = 600 ÷ 50 = 12, so this stops one division early.'
        },
        tip:'Work problems: turn each time into a rate of 1 job per t minutes, add the rates, then flip the sum back into a time. Before you look at the choices, note that the answer must be smaller than the faster worker alone — that one check kills the average trap every time.',
        desmos:'Type 1/(1/20+1/30) and Desmos returns 12. Type 20*30/(20+30) to see the shortcut land on the same 12.',
        desmosLatex:['1/(1/20+1/30)','20*30/(20+30)']
      },
      {
        id:'RTR-13', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Inverse proportion: machine-hours held constant',
        stem:'Four identical sanders at a bike shop, each working at the same constant rate, strip one batch of frames in 9 hours. The shop puts 6 of these sanders on the next batch, which is the same size. How many hours does that batch take?',
        answer:'6',
        expCorrect:'Sanders and time are inversely proportional, so the product sanders × hours is the fixed amount of work: 4 × 9 = 36 sander-hours. With 6 sanders those same 36 sander-hours take 36 ÷ 6 = 6 hours. (Check: 6 × 6 = 36 ✓, and adding machines to one job has to bring the hours down, which 9 → 6 does.) Answer: 6.',
        expWrong:{},
        tip:'Inverse proportion keeps the PRODUCT fixed; direct proportion keeps the QUOTIENT fixed. Decide which story you are in before writing anything: more machines on the same job is inverse, so the time has to come out smaller, and an answer bigger than 9 would be the tell.',
        desmos:'Type 4*9 for the 36 sander-hours, then 36/6 for the 6 hours. Typing 9*6/4 shows the direct-proportion answer, 13.5, that this problem does NOT want.',
        desmosLatex:['4*9','36/6']
      },
      {
        id:'RTR-14', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Reading a scale backwards: from a real length to the length on the plan',
        stem:'An architect draws a plan of a print shop using a scale in which 4 centimeters on the plan represents 3 meters of the real building. A wall of the shop is 19.5 meters long. How long is that wall on the plan, in centimeters?',
        choices:{A:'14.625', B:'26', C:'58.5', D:'0.26'},
        correct:'B',
        expCorrect:'The scale gives 4 centimeters of paper for every 3 meters of building, so one meter is 4 ÷ 3 centimeters on the plan. The wall: 19.5 × 4/3 = 78/3 = 26 centimeters. (Check forward: 26 centimeters at 3 meters per 4 centimeters gives 26 × 3/4 = 19.5 meters ✓.)',
        expWrong:{
          A:'14.625 is 19.5 × 3/4, the scale used in the wrong direction. That factor turns a plan length into a real length, and this trip runs the other way.',
          C:'58.5 is 19.5 × 3, which reads the scale as 3 centimeters per meter and ignores the 4 entirely. The two numbers only work together, as the fraction 4/3.',
          D:'0.26 is the right answer, 26 centimeters, converted into meters out of habit. The plan is drawn in centimeters and that is the unit the final line asks for.'
        },
        tip:'Write a scale as a fraction with its units, 4 cm / 3 m, and multiply by whichever arrangement cancels the unit you are holding. If the result lands on the wrong side of reasonable — a drawing longer than the building — you used the fraction upside down.',
        desmos:'Type 19.5*4/3 and Desmos returns 26. Typing 19.5*3/4 returns 14.625, the same scale applied upside down.',
        desmosLatex:['19.5*4/3','19.5*3/4']
      },
      {
        id:'RTR-15', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Yield as a rate: pages per cartridge, then cartridges for a job',
        stem:'A cartridge for a print shop copier is rated for 2,400 pages. The shop has a job of 17 books, and each book runs 890 pages. How many full cartridges does the job need if every page is printed?',
        choices:{A:'6', B:'6.3', C:'17', D:'7'},
        correct:'D',
        expCorrect:'Total pages first: 17 × 890 = 15,130. Each cartridge covers 2,400 pages, so the job needs 15,130 ÷ 2,400 = 6.304… cartridges, and part of a cartridge still has to be a whole cartridge. The shop needs 7. (Check: 6 cartridges cover 6 × 2,400 = 14,400 pages and leave 730 pages unprinted; 7 cover 16,800 ✓.)',
        expWrong:{
          A:'6 throws away the 0.304 left over. That fraction is 730 real pages, so a seventh cartridge is unavoidable.',
          B:'6.3 is the raw quotient, the step before the last one. Cartridges come in whole units, so the number has to be rounded UP, not reported as a decimal.',
          C:'17 gives every book its own cartridge. One cartridge covers 2,400 pages and a book runs 890, so a single cartridge serves more than two whole books.'
        },
        tip:'When a rate answers "how many cartridges, containers or trips", divide and then round UP, never to the nearest. Say it out loud: a leftover of any size still needs one more of whatever the question is handing out.',
        desmos:'Type 17*890 for the 15,130 pages, then 15130/2400 for 6.304…, which rounds up to 7. Type 6*2400 to see the 14,400 pages that six cartridges would cover.',
        desmosLatex:['17*890','15130/2400','6*2400']
      }

    ]
  });
})();
