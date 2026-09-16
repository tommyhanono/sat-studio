/* SAT Studio question set — Math: Evaluating Statistical Claims, ramp (SCR-01 to SCR-23) */
(function(){
  window.SAT_SETS.push({
    id: 'math-psda-claims-ramp',
    title: 'Statistical Claims — Warm-up to Test Level',
    section: 'math',
    level: 'Media',
    description: 'A ramp through study design: what random selection buys, what random assignment buys, and how to tell two conclusions apart when only one of them respects the design.',
    minutes: 30,
    questions: [
      {
        id:'SCR-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Randomly selected sample: the population a result generalizes to',
        stem:'Ferro Brothers Bakery has 2,400 customers enrolled in its loyalty program. The owner selected 150 of those customers at random and asked each one whether they had bought a sourdough loaf in the past month. Ninety-three said yes. Which conclusion is best supported by this result?',
        choices:{
          A:'About 62% of the 2,400 customers in the loyalty program bought a sourdough loaf recently.',
          B:'About 62% of everyone who shops at Ferro Brothers bought a sourdough loaf recently.',
          C:'Exactly 93 of the 2,400 loyalty customers bought a sourdough loaf in the past month.',
          D:'Sourdough is the loaf that loyalty customers buy more often than any other loaf.'
        },
        correct:'A',
        expCorrect:'The 150 customers were drawn at random from the list of 2,400 loyalty customers, so the sample stands in for that list and for nothing wider. The sample proportion is 93/150 = 0.62, so 62% is the estimate that carries over, stated as an approximation rather than an exact count. Check: 0.62 × 2,400 is about 1,488 customers.',
        expWrong:{
          B:'The random draw was made from the loyalty list only. Walk-in customers who never enrolled had no chance of being picked, so the estimate cannot be stretched to everyone who shops there.',
          C:'The 93 is the count inside the sample of 150, not inside the population of 2,400. Scaled up it becomes an estimate near 1,488, and even that figure is an estimate.',
          D:'No other loaf was asked about, so there is nothing to rank sourdough against. One proportion cannot establish which product sells most.'
        },
        tip:'Random selection lets a sample proportion travel to the population it was drawn from, and no further. Before checking any option, name the list the sample came from.',
        desmos:'In Desmos type 93/150 to get 0.62, then 0.62*2400 to see the estimated number of loyalty customers, about 1,488.',
        desmosLatex:['93/150','0.62*2400']
      },
      {
        id:'SCR-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Random assignment: when a cause-and-effect claim is licensed',
        stem:'At Willowbrook Veterinary Clinic, 80 dogs whose owners agreed to take part were randomly assigned to two groups of 40. One group received a daily dental chew for eight weeks and the other received no chew. At the end, the chew group had significantly less plaque on average. Which conclusion is best supported?',
        choices:{
          A:'Dental chews reduce plaque in dogs everywhere.',
          B:'Every dog given the chew finished with less plaque than every dog that got none.',
          C:'The dental chew reduced plaque in the dogs that took part in this study.',
          D:'Less plaque is associated with the chew, but this design cannot support cause.'
        },
        correct:'C',
        expCorrect:'The two groups of 40 were formed by random assignment, so the dogs in them were comparable before the eight weeks began. The chew is then the only thing that differed between the groups, which leaves it as the explanation for a significant plaque gap. The claim stops at the dogs in the study, because those 80 were volunteers from one clinic rather than a random draw from dogs in general.',
        expWrong:{
          A:'Dogs everywhere reaches far past 80 dogs at one clinic. Random assignment buys a causal claim; only random selection from a wider population would buy a wider claim, and there was none.',
          B:'The significant difference is between two group averages. Averages can differ while individual dogs overlap, so some chew dogs certainly finished with more plaque than some dogs in the other group.',
          D:'This under-claims. Random assignment is exactly the feature that turns an association into evidence of cause, so refusing to say cause throws away what the design earned.'
        },
        tip:'Random assignment answers the question did it cause this. Random selection answers the question who else does this apply to. A study can earn one licence without the other.'
      },
      {
        id:'SCR-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Observational records: association rather than cause',
        stem:'A ride-hailing company reviewed the records of 6,000 of its drivers. Drivers who keep a phone mount on the dashboard had a mean passenger rating of 4.81, while drivers without one had a mean rating of 4.62. Every driver decided independently whether to use a mount. Which conclusion is best supported by these data?',
        choices:{
          A:'Installing a phone mount raises a driver rating by about 0.19 points.',
          B:'Phone mounts have no real effect on the ratings these drivers receive.',
          C:'Among drivers at every ride-hailing company in the country, mounts are linked to higher ratings.',
          D:'Among these 6,000 drivers, using a phone mount is associated with a higher mean rating.'
        },
        correct:'D',
        expCorrect:'Nobody was assigned a mount; drivers decided on their own, so this is an observational study and the honest verb stays neutral. The gap itself is real in the data: 4.81 − 4.62 = 0.19. The records covered these 6,000 drivers, so they are the group the sentence describes.',
        expWrong:{
          A:'Raises is a causal verb. Drivers who bother to install a mount may also drive newer cars or work better hours, and either of those could lift a rating on its own.',
          B:'An observational study cannot rule an effect out any more than it can rule one in. A 0.19 gap is evidence of something, just not evidence of what produced it.',
          C:'Only drivers of this one company were reviewed. Drivers elsewhere were never in the records, so the pattern cannot be extended to them.'
        },
        tip:'If no one was assigned to a treatment, the study is observational: keep the verb neutral and keep the population equal to the records actually read.',
        desmos:'In Desmos compute 4.81-4.62 to confirm the 0.19 gap between the two group means.',
        desmosLatex:['4.81-4.62']
      },
      {
        id:'SCR-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Voluntary response sample: why it generalizes to no one',
        stem:'The Calder Street Museum posted a poll on its home page asking people to rate the new dinosaur hall. Anyone who wished to could answer, and 1,840 people did; 88% of them rated the hall excellent. Which statement about this result is most accurate?',
        choices:{
          A:'With 1,840 answers, the sample is large enough to describe all museum visitors well.',
          B:'Because people chose themselves whether to answer, the 88% should not be generalized.',
          C:'About 88% of everyone who has walked through the dinosaur hall would call it excellent.',
          D:'The new dinosaur hall caused an increase in how highly visitors rate the museum overall.'
        },
        correct:'B',
        expCorrect:'This is a voluntary response sample: the people in it selected themselves by choosing to answer. Visitors who loved the hall have far more reason to click than visitors who shrugged, so the 88% leans high and describes only the 1,840 who replied. A bigger self-selected sample would lean the same way.',
        expWrong:{
          A:'Size reduces random error, not bias. A large self-selected sample is just a large biased sample, and 1,840 enthusiastic responders tilt exactly as 184 would.',
          C:'Visitors who walked through the hall but never opened the website, or opened it and skipped the poll, are missing from the count, so the 88% cannot speak for them.',
          D:'Nothing was compared before and after, and no group was assigned anything, so there is no basis for saying the hall changed any rating.'
        },
        tip:'When answering is optional, the sample selects itself and the result travels nowhere. Watch for phrases such as invited readers, asked anyone who, or posted a poll.',
        desmos:'In Desmos type 0.88*1840 to see that about 1,619 people chose excellent — a count of responders, not of visitors.',
        desmosLatex:['0.88*1840']
      },
      {
        id:'SCR-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Random selection: the sampling frame caps the conclusion',
        stem:'To find out how many students at Harlow High School take part in at least one after-school club, the principal randomly selected 90 of the school’s 1,250 students and asked each of them. Fifty-four said yes. Which conclusion is best supported?',
        choices:{
          A:'About 60% of the 1,250 students at Harlow High take part in at least one club.',
          B:'About 60% of high school students in the district take part in at least one club.',
          C:'Exactly 54 students at Harlow High take part in at least one club this year.',
          D:'Clubs at Harlow High are more popular than clubs at the other district schools.'
        },
        correct:'A',
        expCorrect:'First turn the count into a proportion: 54/90 = 0.60, so 60% of the sample belongs to a club. The 90 students were a random draw from the 1,250 enrolled at Harlow, so the estimate carries to those 1,250 and is phrased as an approximation. Check: 0.60 × 1,250 = 750 students, the estimated club total.',
        expWrong:{
          B:'Only Harlow students were in the pool. Students at the other district schools had no chance of being selected, so the estimate does not reach them.',
          C:'The 54 is the count within the sample of 90. For the full school the matching figure is an estimate near 750, and it is never an exact number.',
          D:'No other school was surveyed, so there is no second figure to compare with. A single sample cannot rank one school above another.'
        },
        tip:'Convert the sample count to a proportion, then name the list the sample was drawn from. That list, and only that list, is what the conclusion may talk about.',
        desmos:'In Desmos type 54/90 to get 0.6, then 0.6*1250 to estimate about 750 club members schoolwide.',
        desmosLatex:['54/90','0.6*1250']
      },
      {
        id:'SCR-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Random assignment among volunteers: a cause with a short reach',
        stem:'Sixty-four members of the Ashgrove Community Choir volunteered for a study on vocal warm-ups. The director randomly assigned 32 of them to a five-minute humming warm-up and 32 to a five-minute scales warm-up, then scored everyone on pitch accuracy. The humming group scored significantly higher. Which conclusion is best supported?',
        choices:{
          A:'Humming warm-ups improve pitch accuracy for singers in general.',
          B:'Humming is associated with better pitch here, but cause cannot be claimed.',
          C:'These 64 volunteers are not representative, so the study shows nothing at all.',
          D:'For these 64 volunteers, the humming warm-up improved pitch accuracy.'
        },
        correct:'D',
        expCorrect:'The 64 volunteers were split by random assignment, so the two halves started out comparable and the warm-up is the one thing that differed. A significant gap in pitch accuracy is therefore attributable to the warm-up — for these 64 people, since they volunteered from one choir instead of being randomly selected from any larger group.',
        expWrong:{
          A:'Singers in general goes past volunteers from one choir. Random assignment licenses cause; reaching a wider population would require random selection from that population.',
          B:'This gives away what the design earned. Splitting by chance is precisely what rules out prior differences between the groups, so cause is on the table here.',
          C:'A group that is not representative still supports a causal claim about itself. What volunteering costs the study is reach, not the comparison.'
        },
        tip:'Volunteers plus random assignment is the most common setup on the test: say cause, but keep the sentence about the people who were actually in the room.'
      },
      {
        id:'SCR-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Lurking variable behind a correlation',
        stem:'A hardware store in Brenton noticed that the months with the highest umbrella sales are also the months with the highest rain-boot sales, month after month for three years. The manager wants to know why the two rise and fall together. Which explanation is most reasonable?',
        choices:{
          A:'Buying an umbrella causes a customer to buy rain boots as well.',
          B:'Rainfall rises in the same months and drives both kinds of sales up.',
          C:'Selling more rain boots causes the store to sell more umbrellas.',
          D:'The pattern is a coincidence, since sales of two products never move together.'
        },
        correct:'B',
        expCorrect:'Both sales figures respond to a third quantity the store never recorded: how much it rained that month. A wet month pushes umbrella sales and boot sales up at the same time, which makes the two series rise and fall together without either one acting on the other. That third quantity is the lurking variable.',
        expWrong:{
          A:'Owning an umbrella does not create a need for boots. Reading the association as one purchase causing the other skips over the weather that produced both.',
          C:'Reversing the direction runs into the same objection. Boots do not create a need for umbrellas either; both are downstream of the rain, not of each other.',
          D:'The pattern repeated for three years, which is far too steady for chance, and products with a common cause move together all the time.'
        },
        tip:'When two quantities rise and fall together, hunt for a third that moves them both. A lurking variable explains the association with neither side causing the other.'
      },
      {
        id:'SCR-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Choosing the design that supports a causal conclusion',
        stem:'Managers at Brightleaf Cafeteria believe that putting fruit at the front of the serving line increases how much fruit students take. They want evidence strong enough to support a causal conclusion. Which plan would give them that evidence?',
        choices:{
          A:'Ask students who already eat fruit whether the layout of the line affects them.',
          B:'Record the fruit taken this term and compare it with the totals from last term.',
          C:'Randomly assign each of the 20 lunch periods to the new layout or the old one.',
          D:'Move the fruit to the front for every lunch period and watch the totals rise.'
        },
        correct:'C',
        expCorrect:'Only random assignment makes the groups being compared alike in everything except the layout. Assigning the 20 lunch periods at random spreads the day of the week, the menu and the size of the crowd evenly across both layouts, so a difference in fruit taken has the layout left as its explanation.',
        expWrong:{
          A:'Asking students to explain their own behavior collects opinions, not a comparison, and it samples only the students who already take fruit — the ones least able to reveal an effect.',
          B:'Two different terms differ in more than layout: season, menu and even the students themselves change, and any of those could move the totals.',
          D:'With the new layout everywhere, nothing is left to compare it against, so a rise could just as easily come from the weather or a menu change.'
        },
        tip:'A causal question needs two groups that differ only by the treatment, and random assignment is what produces them. A plan with no comparison group cannot support cause.'
      },
      {
        id:'SCR-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Observational comparison: which conclusion the design allows',
        stem:'Verdant Path Nursery keeps its ferns on two benches: a shaded bench at the back and a sunny bench by the entrance. Staff put each fern wherever there is room when it arrives, never at random. After ten weeks the shaded ferns averaged 26.1 cm tall and the sunny ferns averaged 22.7 cm. Which conclusion is best supported?',
        choices:{
          A:'Shade caused the ferns at the back bench to grow 3.4 cm taller over ten weeks.',
          B:'Growing ferns in shade produces taller plants than growing them in sun does.',
          C:'The benches differ only because of where customers tend to stand and browse.',
          D:'At this nursery, ferns kept on the shaded bench grew taller on average than the ferns kept in sun.'
        },
        correct:'D',
        expCorrect:'The ferns were never assigned to a bench at random — they landed wherever there was room — so this is an observational comparison and the wording has to stay descriptive. The gap is real: 26.1 − 22.7 = 3.4 cm, at this nursery, for these plants. The sentence reports that and claims nothing about why.',
        expWrong:{
          A:'Caused needs groups that were alike to begin with. Ferns that arrived when the shaded bench had room may have been a different age, species or starting size, and that difference travels with them.',
          B:'This states a general rule about growing ferns, which is a causal claim and a claim about ferns everywhere at once. The design supports neither half.',
          C:'Where customers stand was never measured. Swapping in a second unmeasured explanation is no better than accepting the first; the honest move is to describe the gap.'
        },
        tip:'Two options can differ by a single verb. Grew taller on average reports what happened; caused claims why. With no random assignment, only the first is available.',
        desmos:'In Desmos compute 26.1-22.7 to confirm the 3.4 cm difference between the two bench averages.',
        desmosLatex:['26.1-22.7']
      },
      {
        id:'SCR-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Random selection without random assignment: generalize, do not claim cause',
        stem:'A school district randomly selected 400 of its 5,200 high school students and asked each one where they usually eat lunch and how stressed they feel on a 1-to-10 scale. Students who eat outdoors reported a mean stress score 1.2 points lower than students who eat in the cafeteria. Students pick their own lunch spot. Which conclusion is best supported?',
        choices:{
          A:'Eating lunch outdoors lowers the stress scores of students in the district.',
          B:'Across the district, eating lunch outdoors is associated with lower reported stress.',
          C:'Nothing can be concluded, because students were not assigned a lunch spot.',
          D:'Outdoor lunch areas would lower reported stress at high schools anywhere in the country.'
        },
        correct:'B',
        expCorrect:'Read the two design features separately. The 400 students were randomly selected from the district’s 5,200, so whatever pattern appears may be stated for the district. Nobody was assigned a lunch spot, so the pattern stays an association. Putting the two together gives exactly this sentence: district-wide reach, associated with as the verb.',
        expWrong:{
          A:'Lowers is causal, and nothing was assigned. Students who pick the courtyard may already be the ones with lighter schedules or more friends outside, and either would pull stress down on its own.',
          C:'This throws away the random selection. Missing assignment blocks a claim about cause; it does not block a description of what the district looks like.',
          D:'The random draw came from this district’s 5,200 students. Schools elsewhere were never in the pool, and would lower stacks a causal claim on top of that.'
        },
        tip:'Check the two features one at a time: random selection sets how far the sentence may reach, random assignment sets which verb it may use.',
        desmos:'In Desmos type 400/5200 to see that about 7.7% of the district’s students were sampled — a small share, but a randomly drawn one.',
        desmosLatex:['400/5200']
      },
      {
        id:'SCR-11', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Random assignment without random selection: cause for the participants',
        stem:'A physical therapist put up flyers around Dunmore asking for people with mild knee pain. Of the 140 residents who answered, she randomly assigned 70 to a daily ten-minute stretching routine and 70 to no routine. After six weeks the stretching group reported significantly less pain. Which conclusion is best supported?',
        choices:{
          A:'The stretching routine reduced knee pain for the 140 residents who took part.',
          B:'The stretching routine reduces knee pain for adults with mild knee pain in Dunmore.',
          C:'Stretching and lower pain are linked here, though cause remains out of reach.',
          D:'Any resident of Dunmore who starts stretching daily will report less knee pain.'
        },
        correct:'A',
        expCorrect:'Random assignment is present, so the causal verb is allowed: the two groups of 70 were comparable at the start and the routine is what separated them. Random selection is absent — the 140 answered a flyer — so the sentence has to stop at the people who took part.',
        expWrong:{
          B:'Adults in Dunmore who ignored the flyer were never in the study. People who volunteer for a stretching trial tend to differ from those who do not, so the result cannot be handed to the town.',
          C:'Assignment by chance is what converts this comparison into evidence of cause. Refusing to say cause gives up the one thing the design was built to deliver.',
          D:'This predicts an outcome for each individual and reaches past the participants at the same time. The finding was a difference between group averages, not a guarantee for one person.'
        },
        tip:'Answering a flyer is self-selection, and self-selection costs reach rather than causal standing. Keep the causal verb; shrink the population to the participants.'
      },
      {
        id:'SCR-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Random selection and random assignment together: both licenses',
        stem:'A ride-hailing company has 12,000 active drivers. It randomly selected 300 of them, then randomly assigned 150 to a redesigned trip screen and 150 to the current screen for one month. Drivers using the redesigned screen completed significantly more trips. Which conclusion is best supported?',
        choices:{
          A:'Among the 300 drivers studied, the redesigned screen is linked to more trips.',
          B:'Drivers at every ride-hailing company complete more trips with a redesigned screen.',
          C:'The redesigned screen would increase trips completed across the 12,000 drivers.',
          D:'Each of the 150 drivers using the redesign completed more trips than before.'
        },
        correct:'C',
        expCorrect:'This design earns both licences at once. The 300 were randomly selected from the 12,000 drivers, so a finding generalizes to those 12,000; inside the sample the two screens were randomly assigned, so the difference may be called an effect of the screen. Together they support a causal claim about the whole driver pool.',
        expWrong:{
          A:'True, but it stops at the sample and wastes the random selection. The 300 were drawn at random precisely so the finding could be stated for the 12,000.',
          B:'Drivers at other companies were never in the pool. The random draw reached the 12,000 drivers of this company, and that is where the sentence has to stop.',
          D:'The result is a difference between group averages over one month, not a per-driver guarantee, and no driver’s own earlier month was used as a comparison.'
        },
        tip:'Random selection and random assignment stack. When a question hands you both, the best supported option is causal and population-wide; anything narrower discards half the design.',
        desmos:'In Desmos type 300/12000 to see that the sample is 2.5% of the driver pool — small, but randomly drawn, which is what reach depends on.',
        desmosLatex:['300/12000']
      },
      {
        id:'SCR-13', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Generalizing past the sampling frame',
        stem:'A survey team stood outside Ferro Brothers Bakery on a Saturday morning and interviewed 200 people as they left with a purchase. Sixty-eight percent said they would pay more for bread baked with local flour. A newspaper then reported that most residents of the town would pay more for local flour. Why is that report unsupported?',
        choices:{
          A:'The sample of 200 people is far too small to say anything about a town.',
          B:'Only people already buying bread there could be interviewed, not town residents.',
          C:'The 68% figure was reported without a margin of error attached to it.',
          D:'Saturday shoppers answer survey questions more honestly than weekday shoppers.'
        },
        correct:'B',
        expCorrect:'The people interviewed were customers leaving a bakery with a purchase, and that is the group the 68% describes. Residents who never shop there — everyone who buys supermarket bread, or none at all — had no chance of being interviewed, so the sample cannot represent the town.',
        expWrong:{
          A:'Two hundred is a workable sample size; the trouble is who was in it, not how many. A biased sample of 2,000 would be just as unusable here.',
          C:'A margin of error would sharpen an estimate for bakery customers. It cannot move that estimate onto a population the sample never touched.',
          D:'Nothing suggests one day of the week produces more honest answers, and honesty is not the issue. The wrong population was sampled.'
        },
        tip:'Name the list a sample could have come from — the sampling frame. A conclusion about anyone outside that list is unsupported no matter how large the sample is.',
        desmos:'In Desmos type 0.68*200 to see that 136 of the 200 said yes — a count about bakery customers, not about the town.',
        desmosLatex:['0.68*200']
      },
      {
        id:'SCR-14', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Before and after with no control group',
        stem:'Willowbrook Veterinary Clinic replaced the bedding in all of its boarding kennels in March. Owner complaints about kennel odor fell from 24 in February to 9 in April, and the clinic concluded that the new bedding cut complaints by more than half. What is the main weakness in that reasoning?',
        choices:{
          A:'The drop from 24 to 9 is smaller than half, so the arithmetic behind it is wrong.',
          B:'Complaint counts are opinions, so they cannot be treated as data at all here.',
          C:'Two months is far too short a span for new bedding to affect kennel odor.',
          D:'No kennels kept the old bedding, so nothing separates the bedding from the season.'
        },
        correct:'D',
        expCorrect:'Every kennel got the new bedding, so there is no control group and nothing to compare April against except February — a month that also differed in weather, in how full the kennels were and in which animals stayed. Any of those could move complaints on its own, which leaves the bedding as one candidate among several.',
        expWrong:{
          A:'The arithmetic holds: half of 24 is 12, and 9 is below 12, so complaints did fall by more than half. The flaw is in the design, not in the subtraction.',
          B:'Counts of complaints are perfectly usable data. The trouble is that the study gives those counts nothing to be compared against.',
          C:'Bedding changes odor immediately rather than gradually, so the length of the window is not what undermines the claim.'
        },
        tip:'Before-and-after with no control group leaves the treatment tangled with everything else that changed. Ask what stayed on the old version for comparison.',
        desmos:'In Desmos compute 24/2 to see that half of 24 is 12, and 24-9 to see the drop of 15 complaints.',
        desmosLatex:['24/2','24-9']
      },
      {
        id:'SCR-15', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Turning an observational finding into an experiment',
        stem:'A ride-hailing company noticed that drivers who opted into a weekend bonus program completed 14% more trips than drivers who did not opt in. The company would like to conclude that the bonus causes drivers to complete more trips. Which change to the study would most support that conclusion?',
        choices:{
          A:'Randomly assign drivers to the bonus program instead of letting them opt in.',
          B:'Expand the study to include every driver who has opted into the bonus so far.',
          C:'Survey the drivers in the bonus program about why they complete more trips.',
          D:'Repeat the comparison next weekend to see whether the 14% gap appears again.'
        },
        correct:'A',
        expCorrect:'Opting in is a choice, and drivers who choose a bonus program are already the drivers who want more trips. Assigning the program at random breaks that link: the two groups then differ only in whether they got the bonus, which is what allows a gap in trips to be charged to the bonus.',
        expWrong:{
          B:'Adding more drivers who opted in makes the self-selected group larger without making it comparable. The same tangle survives, measured more precisely.',
          C:'Drivers explaining their own motives produces reports, not a comparison between groups. It cannot separate the bonus from the kind of driver who signs up for one.',
          D:'Repeating a flawed comparison reproduces the same 14% and the same ambiguity. Consistency is not the missing ingredient; comparability is.'
        },
        tip:'To upgrade an observational finding to a causal one, take the choice away from the participants: the researcher has to assign the treatment at random.'
      },
      {
        id:'SCR-16', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two conclusions, one design: verb against assignment, population against selection',
        stem:'A researcher randomly selected 220 of the 1,900 students at Redpath High School and measured how many hours of sleep each student got on a school night along with each student’s reaction time on a tablet test. Students who slept more had faster reaction times on average. Which conclusion is best supported?',
        choices:{
          A:'Getting more sleep speeds up the reaction times of students at Redpath High.',
          B:'More sleep is linked to faster reaction times among teenagers in the region.',
          C:'At Redpath High, more sleep is associated with faster reaction times.',
          D:'Nothing follows here, since the researcher never assigned students a bedtime.'
        },
        correct:'C',
        expCorrect:'Random selection from Redpath’s 1,900 students lets the finding be stated for Redpath. No one was assigned a bedtime, so the finding stays an association. Exactly one option respects both limits: the school as the population, associated with as the verb.',
        expWrong:{
          A:'Speeds up is causal, and sleep was measured rather than assigned. Students who sleep more may also carry lighter workloads or work fewer late shifts, and those affect reaction time too.',
          B:'Only Redpath students could have been drawn. Teenagers at other schools in the region were never in the pool, so the result does not extend to them.',
          D:'The missing assignment blocks cause, not description. The random draw still supports a statement about what Redpath students look like.'
        },
        tip:'When two options differ only in the verb and two differ only in the population, test the verb against assignment and the population against selection. One option survives both tests.',
        desmos:'In Desmos type 220/1900 to see the share of the school that was sampled, about 0.116.',
        desmosLatex:['220/1900']
      },
      {
        id:'SCR-17', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'A low response rate turns a random sample into a voluntary response group',
        stem:'A middle school emailed a survey about homework time to a random sample of 1,200 families. Only 174 families answered, and the school reported that the mean homework time for all of its families is close to the mean among those 174. Which criticism of that report is strongest?',
        choices:{
          A:'A sample of 174 families is too small to estimate a mean with any accuracy.',
          B:'Homework time reported by a family is an estimate, so the mean is not exact.',
          C:'The school should have surveyed every family instead of taking a sample.',
          D:'The families who answered chose to, so the 174 are a voluntary response group.'
        },
        correct:'D',
        expCorrect:'The sample started out random, but only the families who decided to reply ended up in it, and that decision is not random. Families with strong feelings about homework load are likelier to write back, so what the school actually holds is a voluntary response group of 174, carrying the bias of whoever chose to answer.',
        expWrong:{
          A:'One hundred seventy-four is a usable size for estimating a mean. The damage comes from who dropped out, and no sample size repairs that.',
          B:'Rounding and recall do add noise, but noise scatters in both directions. A low response rate tilts the estimate consistently one way, which is a different and worse problem.',
          C:'Surveying everyone is not required, and everyone would not have answered either. A random sample was a sound plan; the plan failed at the response stage.'
        },
        tip:'A random sample stays random only if the people drawn actually respond. When most of them do not, treat what is left as a voluntary response sample.',
        desmos:'In Desmos type 174/1200 to see the response rate, about 0.145: fewer than 15% of the families drawn actually answered.',
        desmosLatex:['174/1200']
      },
      {
        id:'SCR-18', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Random assignment in a narrow group: how far the cause travels',
        stem:'A veterinary researcher recruited 96 greyhounds from racing kennels in one county and randomly assigned them to two joint supplements for four months. Dogs on Supplement A showed significantly better range of motion than dogs on Supplement B. Which conclusion is best supported?',
        choices:{
          A:'Supplement A improves range of motion in dogs of every breed and age.',
          B:'Supplement A improved range of motion in the greyhounds in this study.',
          C:'Supplement A is linked to better motion here, but cause cannot be claimed.',
          D:'Greyhounds in this county have better range of motion than dogs elsewhere.'
        },
        correct:'B',
        expCorrect:'Random assignment put comparable dogs on each supplement, so a significant difference in range of motion may be charged to the supplement. The dogs, though, were all racing greyhounds from one county — a group gathered for convenience, not drawn at random from dogs generally — so the causal statement stays inside that group.',
        expWrong:{
          A:'Every breed and age reaches far past 96 racing greyhounds. A breed bred for running is a poor stand-in for dogs whose joints are built and used differently.',
          C:'The supplements were assigned at random, which is exactly what licenses the causal reading. Declining to use it discards the study’s main strength.',
          D:'No dogs outside the county were measured, so no comparison could rank counties. The study compared two supplements, not two places.'
        },
        tip:'A narrow participant pool limits how far a causal claim travels, not whether it may be made at all. Name the participants in the sentence and the claim stays honest.'
      },
      {
        id:'SCR-19', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'A strong correlation is still not causation',
        stem:'Across 45 neighborhoods in Brenton, a planner found a correlation of 0.89 between the number of coffee shops and the number of bicycle thefts reported. No neighborhood was assigned coffee shops; the planner worked from existing records. What does the strength of this correlation establish?',
        choices:{
          A:'That opening coffee shops in a neighborhood raises bicycle theft there.',
          B:'That bicycle thefts in a neighborhood attract new coffee shops to it.',
          C:'That the two counts move together closely, and nothing about why.',
          D:'That some third feature of a neighborhood must be causing both counts.'
        },
        correct:'C',
        expCorrect:'A correlation coefficient measures how tightly two counts track each other, and 0.89 says they track closely. It reports nothing about direction or mechanism, and the records were observational, so the number establishes the pattern and stops. Foot traffic, population density and policing could each sit behind it.',
        expWrong:{
          A:'This reads the number as a cause with a direction. Correlation is symmetric — the coefficient is 0.89 whichever count is listed first — so it cannot pick out which side acts on the other.',
          B:'Reversing the arrow meets the same objection. The same 0.89 describes both stories, so the coefficient cannot support either one.',
          D:'A third factor is a plausible explanation, but must be overstates it. The data fit several stories, and a correlation cannot certify any of them.'
        },
        tip:'A coefficient near 1 tells you how tight the pattern is, never what produced it. Strength and cause are separate questions, and only a design answers the second.',
        desmos:'In Desmos enter the table (1,2), (2,3.2), (3,4.1), (4,5.4), (5,6.2): the points hug a rising line, yet nothing about the picture says which variable acts on the other.',
        desmosLatex:['(1,2)','(2,3.2)','(3,4.1)','(4,5.4)','(5,6.2)']
      },
      {
        id:'SCR-20', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'A self-selected treatment group and the confounding it hides',
        stem:'At a chain of 18 bakeries, employees could sign up for an optional knife-skills workshop. Over the next quarter, the 40 employees who attended prepared trays 12% faster on average than the 95 who did not attend, and management credited the workshop for the gap. Why is that conclusion unsupported?',
        choices:{
          A:'Employees chose whether to attend, so the two groups may have differed already.',
          B:'A 12% difference is too small to be meaningful in a group of this size.',
          C:'Tray preparation speed is the wrong outcome to measure after a workshop of this kind.',
          D:'One quarter is far too short a window to measure any change in skill.'
        },
        correct:'A',
        expCorrect:'The workshop was optional, so the treatment group selected itself. Employees who sign up for extra training tend to be the faster or more motivated ones to begin with, which means part or all of the 12% gap may have existed before the workshop ever ran. Nothing in the study separates the two explanations.',
        expWrong:{
          B:'A 12% gap in preparation speed across 135 employees is a substantial difference. Size is not what makes the causal reading fail.',
          C:'Knife work feeds directly into tray preparation, so speed is a reasonable outcome to track. The design is the problem, not the measurement.',
          D:'A quarter is ample time for a skill to show up in output. Lengthening the window would still leave the two groups non-comparable.'
        },
        tip:'When participants pick their own group, expect the groups to differ in more than the treatment. An optional program compares volunteers with non-volunteers, not treatment with control.',
        desmos:'In Desmos type 40/135 to see that under a third of the 135 employees attended — the self-selected group being compared.',
        desmosLatex:['40/135']
      },
      {
        id:'SCR-21', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Appropriate conclusion: matching the sample to the population claimed',
        stem:'A city transit office wants to report the mean number of weekly trips taken by all 46,000 holders of its transit card. Staff handed a questionnaire to riders boarding at the downtown terminal one Tuesday and collected 500 completed forms. What would most improve the report?',
        choices:{
          A:'Collecting 2,000 completed forms at the downtown terminal instead of 500.',
          B:'Handing the questionnaire out at the downtown terminal every day for a week.',
          C:'Asking riders to estimate their trips for the year rather than for the week.',
          D:'Drawing the 500 card holders at random from the list of all 46,000 holders.'
        },
        correct:'D',
        expCorrect:'The report is about all 46,000 card holders, so the sample has to come from that list. Boarding at one terminal on one day oversamples frequent downtown riders, exactly the people whose trip counts run high. A random draw from the full card-holder list gives every holder a chance to appear, which is what makes the sample mean an estimate for the whole group.',
        expWrong:{
          A:'Four times as many forms from the same terminal gives a sharper estimate of the wrong quantity: downtown Tuesday riders rather than card holders in general.',
          B:'A full week of downtown collection still misses every holder who boards somewhere else. Spreading the days does not widen the pool beyond one station.',
          C:'Switching to a yearly count makes recall harder and leaves the same people being asked. The population problem survives the rewording.'
        },
        tip:'Match the sampling frame to the population the claim names. If the report says all card holders, the draw has to come from the card-holder list.',
        desmos:'In Desmos type 500/46000 to see that the forms cover about 1.1% of card holders, every one of them from a single terminal.',
        desmosLatex:['500/46000']
      },
      {
        id:'SCR-22', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'A clean experiment, an overreaching statistical claim',
        stem:'Marlow Street Coffee Bar has 900 customers enrolled in its app. It randomly selected 240 of them and randomly assigned 120 to receive a weekly half-price pastry coupon and 120 to receive none. Over the next month the coupon group visited significantly more often, and the shop announced that half-price pastries bring coffee drinkers across the city in more often. Which statement about that announcement is most accurate?',
        choices:{
          A:'It is supported, because the coupon was assigned at random within the sample.',
          B:'It overreaches: the draw came from app customers, not coffee drinkers in the city.',
          C:'It overreaches: no design at all can support a cause-and-effect claim like this.',
          D:'It is supported, because 240 customers is a large enough group for the claim.'
        },
        correct:'B',
        expCorrect:'The design is strong: random assignment inside the sample licenses a causal statement, and random selection from the 900 enrolled customers licenses extending it to those 900. Neither feature reaches coffee drinkers across the city who never enrolled in this shop’s app, and that is precisely the population the announcement names.',
        expWrong:{
          A:'Random assignment settles the verb, not the population. It makes the causal wording fair for the people studied and says nothing about who else is covered.',
          C:'Cause is the one thing this design does support. The coupon was assigned at random, so the difference between the groups is attributable to the coupon.',
          D:'Sample size affects precision, not reach. A sample of 2,400 drawn from the same app list would still describe app customers only.'
        },
        tip:'Compare the population the claim names with the list the sample was drawn from. A flawless experiment still fails when the sentence names people who could never have been sampled.',
        desmos:'In Desmos type 240/900 to see that about 27% of the enrolled customers were sampled — enrolled customers being the population this study can reach.',
        desmosLatex:['240/900']
      },
      {
        id:'SCR-23', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Evaluating a statistical claim from an observational study',
        stem:'A gardening magazine ran the headline “Households that compost have healthier lawns — composting is the single best thing you can do for your grass.” Behind it was a study that recorded lawn health scores and composting habits for 1,500 households drawn at random from a county register. No household was told whether to compost. Which statement best evaluates the magazine’s claim?',
        choices:{
          A:'The data support an association across the county, but not the causal advice.',
          B:'The data support neither an association nor the advice, since lawns vary widely.',
          C:'The data support the advice, because 1,500 households were drawn at random.',
          D:'The data support the advice only for the households that already compost.'
        },
        correct:'A',
        expCorrect:'Random selection from the county register means the pattern may be stated for households in the county. Composting was recorded rather than assigned, so the pattern is an association: households that compost may also water more, lay newer sod or hire a lawn service. The second half of the headline is causal advice, and the design does not reach it.',
        expWrong:{
          B:'Variation between lawns is exactly what averaging 1,500 households handles. The random draw supports a county-wide statement about the association; only the causal half fails.',
          C:'Random selection fixes reach, not cause. It tells you whom the pattern describes; it cannot tell you what produced the pattern.',
          D:'Narrowing the advice to current composters is not a smaller version of the same claim. It is advice aimed at people already doing the thing, which the study cannot evaluate either.'
        },
        tip:'Split a headline in two: whom it talks about, and what it says happens. Random selection settles the first; only random assignment settles the second.'
      }
    ]
  });
})();
