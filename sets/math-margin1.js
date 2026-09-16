/* SAT Studio question set — Math: Inference from Samples & Margin of Error (MOE-01 to MOE-06) */
/* Solo el CÁLCULO de la estimación y su intervalo. El juicio sobre el diseño del
   estudio (causa contra asociación, selección al azar contra asignación al azar)
   vive en `math-stat-claims.js` y no se toca acá: `skillOf()` prueba `pd-claims`
   ANTES que `pd-margin`, así que una palabra de diseño en el skill o en los
   primeros 160 caracteres del stem manda la pregunta al cajón equivocado. */
(function(){
  window.SAT_SETS.push({
    id: 'math-margin1',
    title: 'Inference from Samples & Margin of Error',
    section: 'math',
    level: 'Media',
    description: 'Estimating a population value from a random sample: scaling a sample proportion up to a total, building the plausible interval from an estimate and its margin of error, reading the estimate or the margin back out of a reported interval, and what makes a margin grow or shrink.',
    minutes: 10,
    questions: [
      {
        id:'MOE-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Estimating a population total from a sample proportion',
        stem:'Verano Bay has 9,000 households. A random sample of 250 households was surveyed, and 90 of the households in the sample reported that they compost food waste. Based on this sample, which of the following is the best estimate of the number of households in Verano Bay that compost food waste?',
        choices:{A:'90', B:'5,760', C:'3,240', D:'25,000'},
        correct:'C',
        expCorrect:'The sample proportion is 90/250 = 0.36. A random sample stands in for the whole list it came from, so the same proportion is applied to all 9,000 households: 0.36 × 9,000 = 3,240 households. (Check: 90/250 = 3,240/9,000, since both equal 0.36 ✓.)',
        expWrong:{
          A:'90 is the count INSIDE the sample. It answers how many of the 250 surveyed households compost, not how many of the 9,000 do; the proportion still has to be scaled up to the population.',
          B:'5,760 scales the other group: 250 − 90 = 160 households did not report composting, and 160/250 × 9,000 = 5,760 estimates the households that do not compost.',
          D:'25,000 divides the population by the proportion, 9,000 ÷ 0.36, instead of multiplying by it. A part of a group can never be larger than the group, so any answer above 9,000 is out on sight.'
        },
        tip:'Population estimate = (part ÷ sample size) × population size. Two habits keep it clean: get the proportion first, and before answering, ask whether the number should be bigger or smaller than the population it describes.',
        desmos:'Type 90/250 to get 0.36, then 90/250*9000 to get 3,240. Typing 160/250*9000 gives 5,760, which is the estimate for the households that do NOT compost.',
        desmosLatex:['90/250','90/250*9000','160/250*9000']
      },
      {
        id:'MOE-02', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Recovering the sample percent from a plausible interval',
        stem:'A grocery chain surveyed a random sample of 350 of its shoppers and asked each one whether they bring reusable bags. Based on the sample, the chain reported that it is plausible that between 51% and 63% of all its shoppers bring reusable bags. What percent of the shoppers in the sample reported that they bring reusable bags?',
        answer:'57',
        expCorrect:'A plausible interval is built as the sample value plus or minus the margin of error, so the sample value sits exactly at the midpoint of the interval. Midpoint = (51 + 63)/2 = 114/2 = 57. (Check: the margin is (63 − 51)/2 = 6, and 57 − 6 = 51 while 57 + 6 = 63 ✓.) Answer: 57.',
        expWrong:{},
        tip:'Read an interval backwards with two moves: the centre, (low + high) ÷ 2, is the sample value, and half the width, (high − low) ÷ 2, is the margin of error. The interval is symmetric, so those two numbers rebuild it completely.',
        desmos:'Type (51+63)/2 to get 57, the sample percent, and (63-51)/2 to get 6, the margin of error. Then 57-6 and 57+6 rebuild the reported interval.',
        desmosLatex:['(51+63)/2','(63-51)/2']
      },
      {
        id:'MOE-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'What a higher confidence level does to the margin of error',
        stem:'A transit analyst used a random sample of 500 riders to estimate the mean number of trips a rider takes per week, reporting a sample mean of 6.8 trips with a margin of error of 0.4 trips at a 95% confidence level. Using the same 500 responses, the analyst then recomputes the margin of error at a 99% confidence level. Which of the following best describes the new margin of error?',
        choices:{
          A:'Larger than 0.4 trips, because a higher confidence level always widens the interval.',
          B:'Smaller than 0.4 trips, because being more confident means the estimate is more precise.',
          C:'Still 0.4 trips, because the margin of error is set by the sample size alone.',
          D:'Larger than 0.4 trips, but only if the analyst also collects a larger sample.'
        },
        correct:'A',
        expCorrect:'Confidence and precision pull against each other. Asking to be MORE confident that the interval captures the population mean means casting a wider net, and with the same 500 responses the only way to widen the net is a bigger margin of error. The 95% interval runs 6.8 − 0.4 = 6.4 to 6.8 + 0.4 = 7.2 trips; the 99% interval contains all of that and stretches past it on both sides, so its margin is larger than 0.4.',
        expWrong:{
          B:'This trades the two ideas. Being more confident is not being more precise: the extra confidence is bought by widening the interval, so the margin grows while the estimate, 6.8 trips, stays exactly where it was.',
          C:'Sample size is one input to a margin of error, not the only one. Here the 500 responses never changed; the confidence level did, and that by itself moves the margin.',
          D:'A larger sample is the way to SHRINK a margin, not a requirement for growing one. The same 500 responses already produce a wider margin at 99% than at 95%, with no new data collected at all.'
        },
        tip:'Two levers move a margin of error, in opposite directions: a larger random sample shrinks it, and a higher confidence level (90% to 95% to 99%) widens it. Find which lever moved before you pick a direction.',
        desmos:'Type 6.8-0.4 and 6.8+0.4 to see the 95% interval, 6.4 to 7.2 trips. The 99% interval comes from the same data, so it has to contain that one and run wider on both sides.',
        desmosLatex:['6.8-0.4','6.8+0.4']
      },
      {
        id:'MOE-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Least plausible population count from a percent and its margin of error',
        stem:'The Larkfield Athletic Club has 12,000 members. A random sample of 400 members was surveyed, and 58% of them said they plan to renew their membership, with an associated margin of error of 3.5 percentage points. Based on this sample, what is the least number of club members who plausibly plan to renew?',
        choices:{A:'218', B:'6,960', C:'7,380', D:'6,540'},
        correct:'D',
        expCorrect:'Apply the margin to the percent first: 58% − 3.5% = 54.5% and 58% + 3.5% = 61.5%, so the plausible share runs from 54.5% to 61.5%. “Least” asks for the bottom end, and the percent is applied to the whole club rather than to the 400 surveyed: 0.545 × 12,000 = 6,540 members. (Check: the top end gives 0.615 × 12,000 = 7,380, and 6,540 is the smaller of the two ✓.)',
        expWrong:{
          A:'218 applies 54.5% to the 400 people in the sample: 0.545 × 400 = 218. The percent comes FROM the sample and is applied TO the population the sample represents.',
          B:'6,960 is 0.58 × 12,000, the estimate with the margin of error thrown away. The question asks for the bottom of the plausible range, so the 3.5 points have to come off before scaling.',
          C:'7,380 adds the margin instead of subtracting it: 0.615 × 12,000 is the GREATEST plausible number, the far end of the same interval.'
        },
        tip:'Order matters: apply the margin to the percent, then scale the percent to the population. “Least” means estimate − margin and “greatest” means estimate + margin, and both get scaled to the population, never back to the sample.',
        desmos:'Type (58-3.5)/100*12000 to get 6,540 and (58+3.5)/100*12000 to get 7,380. The plausible count runs between those two numbers, and this question asks for the lower one.',
        desmosLatex:['(58-3.5)/100*12000','(58+3.5)/100*12000']
      },
      {
        id:'MOE-05', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Recovering the margin of error from a plausible range of counts',
        stem:'To estimate how many of the 60,000 residents of Talbert City volunteer at least once a month, a nonprofit surveyed a random sample of 500 residents. From the sample, the nonprofit reported that it is plausible that the number of Talbert City residents who volunteer at least once a month is between 13,800 and 16,200. What is the margin of error, in residents, associated with this estimate?',
        answer:'1200',
        expCorrect:'The reported range is the estimate plus or minus the margin of error, so the margin is half the width of the range, whatever the units are. Width = 16,200 − 13,800 = 2,400 residents, and half of 2,400 is 1,200. (Check: the estimate sits at the midpoint, (13,800 + 16,200)/2 = 15,000, and 15,000 − 1,200 = 13,800 while 15,000 + 1,200 = 16,200 ✓.) Answer: 1200.',
        expWrong:{},
        tip:'Margin of error = (high − low) ÷ 2, and the estimate = (high + low) ÷ 2. This works on a range of counts exactly as it works on percents or means: the full width is TWO margins, never one.',
        desmos:'Type (16200-13800)/2 to get 1,200, the margin of error, and (16200+13800)/2 to get 15,000, the estimate sitting at the centre of the reported range.',
        desmosLatex:['(16200-13800)/2','(16200+13800)/2']
      },
      {
        id:'MOE-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Spread of the plausible population count from a margin of error',
        stem:'Kestrel Manufacturing has 8,000 employees. A random sample of 300 employees was surveyed, and 42% of them reported that they use the company shuttle, with an associated margin of error of 5.5 percentage points. Based on this sample, how much greater is the greatest plausible number of Kestrel employees who use the shuttle than the least plausible number?',
        choices:{A:'33', B:'880', C:'440', D:'3,360'},
        correct:'B',
        expCorrect:'Turn the percent interval into a count interval, then subtract. The share runs from 42% − 5.5% = 36.5% up to 42% + 5.5% = 47.5%, so the count runs from 0.365 × 8,000 = 2,920 employees up to 0.475 × 8,000 = 3,800 employees. The gap is 3,800 − 2,920 = 880 employees. (Shortcut: the full width of an interval is TWO margins, here 11 percentage points, and 0.11 × 8,000 = 880 ✓.)',
        expWrong:{
          A:'33 applies the 11-point width to the 300 people surveyed: 0.11 × 300 = 33. The sample supplies the percent; the population of 8,000 employees is what that percent gets applied to.',
          C:'440 counts the margin once, 0.055 × 8,000, which is the distance from the estimate out to ONE end. From the bottom end to the top end is two of those, so the spread is 880.',
          D:'3,360 is 0.42 × 8,000, the estimated number of shuttle users itself. That is the centre of the interval, not the distance between its two ends.'
        },
        tip:'The distance from the least to the greatest plausible value is TWO margins of error, because the margin is measured from the centre outward. Convert to counts once, at the end: (2 × margin as a decimal) × population size.',
        desmos:'Type 0.365*8000 and 0.475*8000 to get 2,920 and 3,800, then subtract for 880. The one-line version is 2*0.055*8000, which returns 880 as well.',
        desmosLatex:['0.365*8000','0.475*8000','2*0.055*8000']
      }
    ]
  });
})();
