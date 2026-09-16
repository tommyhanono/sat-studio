/* SAT Studio question set — Math: Evaluating Statistical Claims (ESC-01 to ESC-18) */
(function(){
  window.SAT_SETS.push({
    id: 'math-stat-claims',
    title: 'Evaluating Statistical Claims',
    section: 'math',
    level: 'Media',
    description: 'Observational studies versus experiments: what random selection licenses, what random assignment licenses, and which conclusion a given design actually supports.',
    minutes: 24,
    questions: [
      {
        id:'ESC-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Random selection: the population a result extends to',
        stem:'A librarian selected 120 students at random from the 1,500 students enrolled at Calder High School and asked each student how many books they had read over the summer. The mean for the sample was 4.3 books. Which conclusion is best supported by these results?',
        choices:{
          A:'Every student at Calder High School read about 4.3 books over the summer.',
          B:'The mean number of books read over the summer by students at every school in the district is close to 4.3.',
          C:'The mean number of books read over the summer by all 1,500 students at Calder High School is likely close to 4.3.',
          D:'Students at Calder High School read more books over the summer than students at other schools do.'
        },
        correct:'C',
        expCorrect:'The 120 students were chosen AT RANDOM from the 1,500 students at Calder, so the sample represents that population and only that population. A sample mean of 4.3 books is therefore a reasonable estimate of the mean for all 1,500 students, stated with hedged language (“likely close to”) rather than as an exact figure.',
        expWrong:{
          A:'“Every student” turns a statement about the AVERAGE into a statement about each individual. A mean of 4.3 is perfectly compatible with one student reading 0 and another reading 15.',
          B:'The random sample was drawn from Calder High School only. No other school in the district was sampled, so the result cannot be stretched to that larger population.',
          D:'No students from any other school were surveyed, so there is nothing to compare against. One sample mean cannot rank one school above another.'
        },
        tip:'Random SELECTION lets you generalize to the population that was sampled — no further. Ask first: what list were the people drawn from? The conclusion may talk about that list and nothing bigger.'
      },
      {
        id:'ESC-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Random assignment: when a cause may be claimed',
        stem:'A researcher recruited 200 volunteers who report trouble falling asleep and randomly assigned 100 of them to drink chamomile tea one hour before bed for three weeks and the other 100 to drink warm water instead. The tea group fell asleep an average of 11 minutes faster than the water group, and the difference was statistically significant. Which conclusion is best supported?',
        choices:{
          A:'Chamomile tea causes people in general to fall asleep faster than warm water does.',
          B:'Drinking chamomile tea likely caused the volunteers in this study to fall asleep faster.',
          C:'These results show an association only; this design cannot support any claim about cause.',
          D:'Every volunteer who drank chamomile tea fell asleep faster than every volunteer who drank water.'
        },
        correct:'B',
        expCorrect:'The two groups were formed by RANDOM ASSIGNMENT, which is what makes them comparable at the start: any sizeable difference in the outcome is then most plausibly caused by the one thing the researcher changed, the drink. So a causal claim is licensed — but only for the people who were actually in the study, because the 200 volunteers were not randomly selected from any larger population.',
        expWrong:{
          A:'“People in general” steps outside the volunteers. Random assignment buys a causal claim; only random SELECTION would buy a claim about a wider population, and there was none here.',
          C:'This under-claims. When the researcher assigns the treatments at random, cause is exactly what the design is built to support.',
          D:'An 11-minute difference in AVERAGES does not mean every person in one group beat every person in the other. Individual results overlap heavily.'
        },
        tip:'Two different words, two different licences. Random ASSIGNMENT → you may say the treatment caused the difference. Random SELECTION → you may extend the result to the population sampled.'
      },
      {
        id:'ESC-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Observational study: association, not cause',
        stem:'A health clinic reviewed the records of 900 of its adult patients, selected at random from its patient list. Patients who reported eating breakfast every day had a lower average blood pressure than patients who reported skipping breakfast. No patient was told what to eat. Which conclusion is best supported?',
        choices:{
          A:'Eating breakfast every day lowers the blood pressure of the clinic’s adult patients.',
          B:'Skipping breakfast has no effect at all on a person’s blood pressure.',
          C:'Among adults nationwide, eating breakfast daily is associated with lower average blood pressure.',
          D:'Among the clinic’s adult patients, eating breakfast daily is associated with lower average blood pressure.'
        },
        correct:'D',
        expCorrect:'Nobody was assigned to eat or skip breakfast; the clinic only recorded habits patients already had. That makes this an OBSERVATIONAL study, so the honest wording is “is associated with”. The sample was drawn at random from the clinic’s own patient list, so that is the group the conclusion covers.',
        expWrong:{
          A:'“Lowers” is a causal verb. Patients chose their own breakfast habits, so the two groups may also differ in sleep, exercise, age or medication — any of which affects blood pressure.',
          B:'The study can no more rule an effect OUT than rule one in. Failing to establish a cause is not evidence that there is none.',
          C:'The sample came from this clinic’s patient list only. Adults nationwide were never sampled, so the result cannot be stretched to them.'
        },
        tip:'If nobody was assigned to a treatment, the study is observational and the verb has to stay neutral: “is associated with”, never “causes”, “lowers” or “improves”.'
      },
      {
        id:'ESC-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Non-random sample: generalization blocked',
        stem:'To estimate how much sleep the 1,100 students at Deakin High School get on a school night, a reporter for the school paper surveyed the 30 students who came to the 6 a.m. swim practice. The mean reported was 6.1 hours. Which statement about these results is most accurate?',
        choices:{
          A:'The mean sleep time for all 1,100 students at Deakin High School is likely close to 6.1 hours.',
          B:'The sample was not selected at random, so the result should not be generalized to the school.',
          C:'The sample of 30 students is large enough for the result to describe the whole school well.',
          D:'Coming to an early swim practice causes students to sleep less on a school night.'
        },
        correct:'B',
        expCorrect:'The 30 students were not chosen at random from the school: they are exactly the students who get up for a 6 a.m. practice, a group with an unusual schedule. When a sample selects itself in a way tied to the quantity being measured, it is biased, so 6.1 hours describes those swimmers and cannot be pushed out to the school.',
        expWrong:{
          A:'This is precisely the generalization the bias blocks. Early-practice swimmers are not a miniature version of the school, so their mean is not a fair estimate of the school’s mean.',
          C:'Size does not repair bias. A biased sample of 30 and a biased sample of 3,000 miss in the same direction; only random selection fixes the problem.',
          D:'Nothing was assigned and there is no comparison group, so no causal claim is available — and the arrow could just as easily run the other way.'
        },
        tip:'Before generalizing, check HOW the sample was chosen, not how big it is. Volunteers, whoever happens to be present, and whoever answers an open link are not random samples.'
      },
      {
        id:'ESC-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Experiment on a fixed group: cause yes, reach no',
        stem:'A gardener at Lomas Nursery took the 60 tomato seedlings the nursery had on hand and randomly assigned 30 of them to be watered with collected rainwater and the other 30 with tap water. Every other condition was kept the same. After six weeks the rainwater group was on average 4 centimeters taller. Which conclusion is best supported?',
        choices:{
          A:'The rainwater most likely caused the greater average height among these 60 seedlings.',
          B:'Rainwater causes tomato seedlings everywhere to grow taller than tap water does.',
          C:'Taller tomato seedlings are more likely to have been watered with rainwater than tap water.',
          D:'The height difference is an association, so no claim about cause is supported here.'
        },
        correct:'A',
        expCorrect:'Random assignment split the 60 seedlings into two groups that started out comparable, and the gardener held every other condition fixed, so the type of water is the only systematic difference left standing. A causal claim is licensed for the seedlings in this experiment. They were not randomly selected from all tomato seedlings, so the claim stops there.',
        expWrong:{
          B:'“Everywhere” leaves the group studied. These 60 seedlings were simply the ones on hand at one nursery, so the result cannot be extended to seedlings in general.',
          C:'This reverses the arrow. The gardener decided which seedlings got rainwater before they grew, so height cannot be what determined the watering.',
          D:'This under-claims. Random assignment plus controlled conditions is exactly the design that does support a cause-and-effect conclusion.'
        },
        tip:'Random assignment licenses cause for the subjects you actually have. Extending that cause to a bigger population needs a second, separate ingredient: random selection from that population.'
      },
      {
        id:'ESC-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Redesigning a study to support a causal claim',
        stem:'A district found that the 410 students who take part in an after-school tutoring program have a higher average grade than students who do not take part. Students sign up for the program themselves. The district would like to conclude that the tutoring causes the higher grades. Which change to the study would best support that conclusion?',
        choices:{
          A:'Select a random sample of the students who signed up for tutoring and compare their grades.',
          B:'Expand the tutoring program until at least 800 students are taking part in it each week.',
          C:'Randomly assign students to take part in tutoring or not, rather than letting them sign up.',
          D:'Survey the tutors as well, asking how well they think the program is working this year.'
        },
        correct:'C',
        expCorrect:'The flaw is that students CHOOSE tutoring: the ones who sign up may already be more motivated, better supported at home, or stronger to begin with, and that alone could produce the grade gap. Random assignment takes the choice away, so the two groups start out comparable and tutoring becomes the only systematic difference between them. That is what buys a causal conclusion.',
        expWrong:{
          A:'Sampling at random from the students who signed up fixes nothing: those students still chose the program, so exactly the same hidden differences remain in place.',
          B:'A larger program gives a more precise estimate of the same flawed comparison. A bigger self-selected group is still self-selected.',
          D:'Opinions from tutors add description, not comparison. Without comparable groups the grade gap still has several possible explanations.'
        },
        tip:'When a study lets people choose their own group, cause is off the table. The fix is always the same: assign the groups at random.'
      },
      {
        id:'ESC-07', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Using a random sample to estimate a population total',
        stem:'Brantwood Middle School has 3,200 students. A random sample of 160 students was selected, and 45 of the students in the sample reported that they bike to school. Based on this sample, what is the best estimate of the number of students at Brantwood Middle School who bike to school?',
        answer:'900',
        expCorrect:'The sample proportion is 45/160 = 0.28125. Because the sample was random, that proportion is the best available estimate for the whole school, so scale it up to the population: 0.28125 × 3,200 = 900. (Check: 45/160 = 900/3,200 ✓.) Answer: 900.',
        expWrong:{},
        tip:'Estimate a population total by scaling the sample proportion: (part ÷ sample size) × population size. The scaling is legitimate only because the sample was random, and it applies only to the population the sample came from.',
        desmos:'Type 45/160*3200 in Desmos: it returns 900. You can also check the proportion 45/160 = 0.28125 first and then multiply by 3,200.',
        desmosLatex:['45/160*3200','45/160']
      },
      {
        id:'ESC-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Margin of error: a plausible interval for the sampled population',
        stem:'A polling group selected a random sample of 500 registered voters in the town of Halvern and asked whether they plan to vote for a new library tax. In the sample, 46% said yes, with an associated margin of error of 4 percentage points. Which conclusion is most appropriate?',
        choices:{
          A:'Exactly 46% of the registered voters in the town of Halvern plan to vote for the tax.',
          B:'Between 42% and 50% of the registered voters across the entire state plan to vote for a library tax.',
          C:'The tax is certain to fail, because 46% of the sample is less than half of the sample.',
          D:'It is plausible that between 42% and 50% of Halvern’s registered voters plan to vote for the tax.'
        },
        correct:'D',
        expCorrect:'46% − 4% = 42% and 46% + 4% = 50%, so the plausible interval is 42% to 50%. Two limits travel with it: the interval describes the POPULATION THAT WAS SAMPLED (registered voters in Halvern), and it is a statement of plausibility, not of certainty.',
        expWrong:{
          A:'“Exactly” treats the sample percentage as the population percentage. The margin of error exists precisely because those two numbers are not the same.',
          B:'The sample was drawn from Halvern, not from the state. A random sample says nothing about a population it was never drawn from.',
          C:'“Certain” overstates the evidence: the plausible interval reaches all the way up to 50%, and a survey of plans is not the same thing as an election result.'
        },
        tip:'Build the interval as percent ± margin, then run two checks: does the claim stay inside the sampled population, and is it worded as plausible rather than exact or guaranteed?',
        desmos:'In Desmos compute 46-4 and 46+4 to get the endpoints 42 and 50. That interval is a plausible range for Halvern’s registered voters, not for the state.',
        desmosLatex:['46-4','46+4']
      },
      {
        id:'ESC-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Lurking variables behind an association',
        stem:'Over 12 months, a town recorded weekly ice cream sales at its pier and the number of sunburns treated at the town clinic. The weeks with the highest ice cream sales were also the weeks with the most sunburns treated. Nothing was assigned; both counts were simply recorded each week. Which statement best describes what these data can show?',
        choices:{
          A:'The two counts are associated, and a third factor such as hot, sunny weather could drive both.',
          B:'Buying ice cream at the pier causes people in the town to get sunburned more often.',
          C:'Getting sunburned causes people in the town to buy more ice cream at the pier.',
          D:'Because the two counts rise and fall together, one of them has to be causing the other.'
        },
        correct:'A',
        expCorrect:'Both quantities were observed, not assigned, so the data can only report that they move together. A lurking variable — a third factor related to both — is the natural reading here: hot, sunny weeks send people to the pier for ice cream AND leave them in the sun long enough to burn. Neither count has to act on the other at all.',
        expWrong:{
          B:'Ice cream has no plausible path to skin damage. This is the classic mistake of reading a cause into two numbers that happen to rise together.',
          C:'Reversing the arrow does not help: a sunburn is not what puts ice cream in someone’s hand. The weather explains both without either one acting on the other.',
          D:'Moving together does not force a causal link in either direction. A shared cause explains the pattern just as well, and sometimes coincidence does.'
        },
        tip:'When two observed quantities move together, look for a third one that could move both. An association has three readings: A causes B, B causes A, or something else causes both.'
      },
      {
        id:'ESC-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Before-and-after comparison with no control group',
        stem:'A farm manager applied a new fertilizer to all 40 of the farm’s cornfields for one season and recorded a yield 9% higher than the farm’s yield the season before. The manager concluded that the fertilizer caused the increase. How should that conclusion be judged?',
        choices:{
          A:'It is sound, because every one of the cornfields on the farm was included in the study.',
          B:'It is not supported, because no field went without the fertilizer, so the weather could explain the gain.',
          C:'It is not supported, because the 40 fields were not selected at random from all the cornfields in the region.',
          D:'It is not supported, because a rise of only 9% is too small for any conclusion at all to be drawn from it.'
        },
        correct:'B',
        expCorrect:'Every field received the fertilizer, so there is no comparison group that went without it. The only comparison left is this season against last season, and two seasons differ in many ways at once: rainfall, temperature, seed, soil condition. Any of those could produce a 9% gain, so the fertilizer cannot be singled out as the cause.',
        expWrong:{
          A:'Covering every field removes worries about sampling, but not the missing comparison. With no untreated fields there is nothing to measure the fertilizer against.',
          C:'Using all 40 fields is not the flaw — a census of the farm is fine. What is missing is a group of fields that did NOT receive the fertilizer.',
          D:'The size of the change is not the issue. A 30% gain measured this way would be exactly as unattributable as a 9% one.'
        },
        tip:'A treatment given to everyone leaves no control group, and “before versus after” quietly changes everything else too. No comparison group means no causal claim, whatever the size of the change.'
      },
      {
        id:'ESC-11', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Choosing a design that supports a causal claim',
        stem:'A school nurse wants to know whether a 10-minute walk each morning reduces how drowsy students feel in the afternoon. Which study design would allow her to conclude that the morning walk causes a change in afternoon drowsiness?',
        choices:{
          A:'Survey a random sample of students about whether they walk in the morning and how drowsy they feel.',
          B:'Compare afternoon drowsiness of students who already walk to school with that of students who ride the bus.',
          C:'Randomly assign student volunteers either to walk 10 minutes each morning or not to walk, then compare them.',
          D:'Ask the students who already walk each morning to rate their afternoon drowsiness every day for two weeks.'
        },
        correct:'C',
        expCorrect:'Only one of these designs creates the groups itself. Random assignment makes the walkers and the non-walkers comparable at the start, so a difference in afternoon drowsiness can be traced back to the walk. The other three record a habit the students chose for themselves, which leaves every other difference between those students in play.',
        expWrong:{
          A:'A random sample supports generalizing to the school, but the walking habit is still self-chosen, so this design can measure association only.',
          B:'Students who walk to school may live closer, sleep longer, or get more morning daylight. Those differences travel with the habit and are never separated from it.',
          D:'There is no group to compare against, so there is no difference to attribute to anything — in fact no difference is being measured at all.'
        },
        tip:'To get cause, the researcher must control who receives the treatment and decide it at random. If the subjects picked their own group, the study is observational no matter how carefully it is run.'
      },
      {
        id:'ESC-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Identifying the population a sample represents',
        stem:'A transit agency selected a random sample of 200 people who were riding the number 7 bus on a Tuesday morning and asked each one how satisfied they were with the service. In the sample, 68% said they were satisfied. These results are best used to draw a conclusion about which group?',
        choices:{
          A:'People who ride the number 7 bus',
          B:'Every resident of the city, whether or not they ride a bus',
          C:'Everyone in the city who uses public transit',
          D:'The 200 riders who answered the survey'
        },
        correct:'A',
        expCorrect:'A random sample represents the list it was drawn from. Here the riders were drawn at random from the people riding the number 7 bus, so that is the population the 68% can be extended to: no narrower, and no wider.',
        expWrong:{
          B:'Most residents were never on that bus and so had no chance of being surveyed. People with no chance of selection are not represented by the sample.',
          C:'Riders of other routes, of the train and of the ferry were never sampled, and their satisfaction with the service could be quite different.',
          D:'Those 200 riders were measured directly, so no inference is needed about them. The whole point of sampling is to say something about the larger group they came from.'
        },
        tip:'Ask what list the sample was drawn from: that list is the population. Anything wider is an overreach, and the sample itself is too narrow to be the answer.'
      },
      {
        id:'ESC-13', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Random selection and random assignment together',
        stem:'A researcher randomly selected 300 of the 4,000 members of the Ridgeway gym and then randomly assigned each of those 300 to one of two 10-week exercise programs, A or B. At the end, members in program A had lost more weight on average than members in program B, and the difference was statistically significant. What is the strongest conclusion supported by this study?',
        choices:{
          A:'Program A is associated with greater weight loss, but the design supports no claim about cause.',
          B:'Program A likely caused greater average weight loss, but only for the 300 members who took part.',
          C:'Program A causes greater weight loss for every adult in the city, whether or not they belong to the gym.',
          D:'Program A likely caused greater average weight loss among the gym’s 4,000 members.'
        },
        correct:'D',
        expCorrect:'Both words appear, so both licences are available. Random ASSIGNMENT to program A or B makes the two groups comparable, which supports a cause. Random SELECTION from the gym’s 4,000 members makes the 300 representative of that membership, which supports extending the finding to all 4,000. Notice where it stops: the gym’s members, not the city.',
        expWrong:{
          A:'This ignores the random assignment. When the researcher hands out the treatments at random, cause is exactly what the design supports.',
          B:'True but incomplete, and the question asks for the strongest supported conclusion. The 300 were randomly selected from the membership, so the finding does reach all 4,000.',
          C:'Adults who never joined the gym had no chance of being selected, and “every adult” promises a guarantee that no study delivers.'
        },
        tip:'Check for the two words separately. Random assignment → cause. Random selection → generalize, but only to the list the sample was drawn from.'
      },
      {
        id:'ESC-14', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Choosing the appropriately hedged conclusion',
        stem:'Researchers surveyed a random sample of 600 teenagers living in Marlow City about their daily screen time and the number of hours they sleep. Teenagers who reported more screen time reported less sleep on average. No one was asked to change any habit. Which conclusion is best supported?',
        choices:{
          A:'The data prove that more screen time causes teenagers in Marlow City to sleep less.',
          B:'The data suggest that, among teenagers in Marlow City, more screen time is associated with less sleep.',
          C:'The data show that every Marlow City teenager with high screen time sleeps less than average.',
          D:'The data suggest that, among teenagers everywhere, more screen time is associated with less sleep.'
        },
        correct:'B',
        expCorrect:'Three dials have to be set correctly at once: the verb, the reach, and the strength. The study is observational, so the relationship is an association; the random sample came from Marlow City, so the claim stays inside Marlow City; and one survey supports “suggest”, not “prove”. Only one option gets all three right.',
        expWrong:{
          A:'Two faults in one sentence: “prove” is too strong for any single study, and “causes” is unavailable because nobody was assigned an amount of screen time.',
          C:'“Every” converts an average pattern into a rule about each individual. Plenty of heavy users in the sample will have slept more than average.',
          D:'The verb and the hedging are right, but the reach is not: the sample was drawn from Marlow City, so teenagers elsewhere are outside what these data describe.'
        },
        tip:'Read the choices as three separate dials: verb (associated with / causes), population (the group sampled / something wider), and strength (suggests / proves). The answer sets all three correctly.'
      },
      {
        id:'ESC-15', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'What a study needs before a result can be generalized',
        stem:'Researchers randomly assigned 150 volunteers from the Ashfield running club to one of two training plans and found that plan A produced faster average 5-kilometer times than plan B. The researchers now want to conclude that plan A produces faster times for adult runners across the country. What would that broader conclusion require?',
        choices:{
          A:'The participants would have to be a random sample of adult runners nationwide.',
          B:'The volunteers from the club would have to be randomly assigned to one of the two plans.',
          C:'The study would have to run for a greater number of weeks before the times were compared.',
          D:'The researchers would have to add a third training plan, plan C, to the comparison.'
        },
        correct:'A',
        expCorrect:'The design already supports cause, because the two plans were handed out at random. What it does not support is reach: every runner came from one club and volunteered, so nothing connects them to runners nationwide. Only a random sample drawn from that national population would license a conclusion about it.',
        expWrong:{
          B:'That is already in the study, and it is what earns the causal claim in the first place. Repeating it does nothing for the wider population.',
          C:'A longer study gives a cleaner measurement of the same club. Duration never turns one running club into a national sample.',
          D:'A third plan answers a different question. Comparing more treatments does not extend any result beyond the runners studied.'
        },
        tip:'Diagnose which licence is missing. Missing cause → the fix is random assignment. Missing reach → the fix is random selection from the population you want to talk about.'
      },
      {
        id:'ESC-16', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Voluntary response: neither licence',
        stem:'A news site invited its readers to fill out an online form about commuting, and 5,200 readers responded. Among the readers who responded, those who worked from home at least one day a week reported spending less on gasoline than those who never worked from home. Which conclusion is best supported?',
        choices:{
          A:'Working from home causes a household to spend less money on gasoline each month.',
          B:'Among all readers of the news site, working from home is associated with lower gasoline spending.',
          C:'Among the readers who responded, working from home is associated with lower reported gasoline spending.',
          D:'With 5,200 responses, the sample is large enough to describe workers across the whole country.'
        },
        correct:'C',
        expCorrect:'Readers decided for themselves whether to answer, so this is a voluntary response sample: nobody was selected at random and nobody was assigned anything. Neither licence is available, which leaves the weakest and only honest claim — a relationship among the people who actually responded.',
        expWrong:{
          A:'Nobody was assigned a work arrangement. People who work from home may also drive less for other reasons, such as living closer to work or owning a different car.',
          B:'The readers who responded are the ones who felt strongly enough to click. A voluntary sample does not represent even the site’s own readership, let alone anyone else.',
          D:'Size cannot repair self-selection. A larger voluntary sample just measures the same skewed group more precisely.'
        },
        tip:'Neither random selection nor random assignment appearing in a study means neither licence: no cause, and no generalizing past the people who actually took part.'
      },
      {
        id:'ESC-17', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Recovering the margin of error from a plausible interval',
        stem:'A random sample of 250 adults in Kelsor County was asked how many minutes they spend commuting on a typical weekday. Based on the sample, researchers reported that it is plausible that the mean commuting time for all adults in Kelsor County is between 26.4 minutes and 31.8 minutes. What is the margin of error, in minutes, associated with the sample mean?',
        answer:'2.7',
        expCorrect:'The interval is built as sample mean ± margin of error, so the margin is half the width of the interval. The width is 31.8 − 26.4 = 5.4, and half of that is 2.7. (Check: the sample mean sits at the midpoint, 26.4 + 2.7 = 29.1, and 29.1 + 2.7 = 31.8 ✓.) Answer: 2.7.',
        expWrong:{},
        tip:'A plausible interval is symmetric around the sample statistic: the centre is the midpoint and the margin of error is half the width. Reversing it is just (upper − lower) ÷ 2.',
        desmos:'In Desmos compute (31.8-26.4)/2 to get 2.7, then (31.8+26.4)/2 to see the sample mean, 29.1, sitting at the centre of the interval.',
        desmosLatex:['(31.8-26.4)/2','(31.8+26.4)/2']
      },
      {
        id:'ESC-18', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Comparing treatment and control groups in an experiment',
        stem:'In a study of a new stretching routine, 180 volunteer runners were randomly assigned in equal numbers to a stretching group or a control group. After 10 weeks, 63 runners in the stretching group and 45 runners in the control group reported improved flexibility. By how many percentage points was the percentage reporting improved flexibility in the stretching group greater than that percentage in the control group?',
        answer:'20',
        expCorrect:'Equal numbers means 180 ÷ 2 = 90 runners in each group. Stretching group: 63/90 = 0.70, or 70%. Control group: 45/90 = 0.50, or 50%. The gap is 70 − 50 = 20 percentage points. (Random assignment is what makes this comparison meaningful: the two groups of 90 started out comparable, so the routine is the difference between them.) Answer: 20.',
        expWrong:{},
        tip:'Turn each group into a percentage of ITS OWN group total before comparing; never compare the raw counts. The difference between two percentages is reported in percentage points.',
        desmos:'In Desmos compute 63/90*100 and 45/90*100 to get 70 and 50, then subtract: the gap is 20 percentage points.',
        desmosLatex:['63/90*100','45/90*100']
      }
    ]
  });
})();
