/* SAT Studio question set — Math: Evaluating Statistical Claims — Hard & Brutal (SCH-01 to SCH-30) */
(function(){
  window.SAT_SETS.push({
    id: 'math-psda-claims-hard',
    title: 'Statistical Claims — Hard & Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Mixed designs, one-word differences in scope, differential dropout and blocking: exactly which conclusion a study earns, and the smallest change that would earn a bigger one.',
    minutes: 40,
    questions: [

      /* ---------- Hard tier (16) ---------- */

      {
        id:'SCH-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Random assignment inside a convenience sample: cause without generalization',
        stem:'A physical therapist posted a notice in the lobby of one clinic and enrolled the 84 patients who volunteered for a study of two stretching routines. She then used a random number generator to place 42 patients in routine P and 42 in routine Q. After six weeks the routine P group had a significantly larger gain in flexibility. Which conclusion is best supported?',
        choices:{
          A:'Routine P caused a larger gain in flexibility for the patients in this study.',
          B:'Routine P causes a larger gain in flexibility for clinic patients in general.',
          C:'Routine P is associated with a larger gain, but no cause may be claimed here.',
          D:'Patients who volunteer for a study gain flexibility faster than patients who do not.'
        },
        correct:'A',
        expCorrect:'The two groups were built by RANDOM ASSIGNMENT, so they were comparable before the routines started and the routine is the one thing that differed. That licenses a causal statement — but the 84 patients volunteered off a lobby notice, so the causal statement stops at the people who were actually in the study.',
        expWrong:{
          B:'“Clinic patients in general” steps past the 84 volunteers. Random assignment buys cause; only random SELECTION would extend the result to a wider group, and there was none.',
          C:'This under-claims. When the researcher is the one who decides who gets what, and decides it at random, cause is precisely what the design supports.',
          D:'Nobody outside the study was measured, so volunteers cannot be compared with non-volunteers at all.'
        },
        tip:'Split the design in two before reading the options. Where did the people come from (generalization) and who decided which treatment each got (cause)? A convenience sample plus random assignment earns cause for those participants only.'
      },

      {
        id:'SCH-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Random selection from a limited frame: the population an appropriate conclusion may name',
        stem:'To study how often adults in Brayford use the town library, a researcher obtained the list of the 5,800 residents who hold a library card and surveyed 400 of them chosen at random. Of those surveyed, 62% reported visiting at least once a month. Which conclusion is best supported?',
        choices:{
          A:'About 62% of Brayford adults visit the library at least once a month.',
          B:'About 62% of Brayford cardholders visit the library at least once a month.',
          C:'Holding a library card causes an adult to visit the library every month.',
          D:'Exactly 62% of the 5,800 cardholders visit the library each month.'
        },
        correct:'B',
        expCorrect:'The random draw was made from one list: the 5,800 cardholders. A random sample represents the frame it came from, so the estimate covers cardholders, and the hedge “about” keeps it a sample estimate rather than a measured fact.',
        expWrong:{
          A:'Adults without a card were never on the list, so they had no chance of being drawn. They are exactly the residents least likely to visit, which is why the 62% would be too high for all adults.',
          C:'Nobody was assigned a card; residents got one on their own. With no assignment there is no causal claim, only an association.',
          D:'“Exactly” treats a sample percentage as the population value. The sample gives an estimate near 62%, not the true figure to the decimal.'
        },
        tip:'Find the list the sample was drawn from and write the conclusion about that list. The frame, not the town, is the population a random sample represents.'
      },

      {
        id:'SCH-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Voluntary response: the statistical claim the sample cannot carry',
        stem:'A morning radio show asked listeners to call in and say whether the city should build a new bicycle lane. Of the 640 people who called, 71% said yes. The host then announced that most residents of the city support the lane. Which statement best evaluates the host’s announcement?',
        choices:{
          A:'It is sound, because 640 is a large number of responses to work from.',
          B:'It is unsound, because the show never assigned callers to a position.',
          C:'It is unsound, because the callers chose themselves instead of being chosen.',
          D:'It is sound for the listeners of the show, though not for other residents.'
        },
        correct:'C',
        expCorrect:'This is a voluntary response sample: the people in it are the people who felt strongly enough to pick up a phone during one show. That trait is tied to the very opinion being measured, so the 71% is biased in an unknown direction and cannot be pushed out to the city.',
        expWrong:{
          A:'Size does not undo self-selection. A biased sample of 640 is still biased; collecting 6,400 of the same kind of caller would only sharpen the wrong number.',
          B:'Assignment is what a study needs to talk about cause. Nothing causal is being claimed here — the problem is generalizing from a sample that built itself.',
          D:'Even the listeners are not represented. The callers are the slice of listeners motivated to call, which is not the same as the show’s audience.'
        },
        tip:'Ask who decided that this person would be in the sample. If the answer is “the person did”, the result describes the volunteers and no one else, no matter how many of them there are.',
        desmos:'Compute 0.71 · 640 to see how many callers that is, then compare it with a city of hundreds of thousands.',
        desmosLatex:['0.71\\cdot 640']
      },

      {
        id:'SCH-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Lurking variable behind a correlation in an observational study',
        stem:'Across the 90 neighborhoods of one city, a planner found that the number of ice cream stands is positively correlated with the number of reported bicycle thefts. Which statement best explains why the planner should not conclude that ice cream stands cause bicycle thefts?',
        choices:{
          A:'A correlation between two counts is never strong enough to support a conclusion.',
          B:'The correlation would disappear if the planner included more neighborhoods.',
          C:'Bicycle thefts are counted by the police while the stands are counted by the planner.',
          D:'A third factor, such as foot traffic, could push both counts up at once.'
        },
        correct:'D',
        expCorrect:'Busy neighborhoods have more of everything: more pedestrians buying ice cream and more parked bicycles to steal. Foot traffic is a lurking variable that raises both counts without either one acting on the other, which is why the association survives while the causal story does not.',
        expWrong:{
          A:'Correlation is real evidence and can be strong. What blocks the causal claim is the design — nobody assigned stands to neighborhoods — not the strength of the relationship.',
          B:'Nothing suggests the pattern is an artifact of 90 neighborhoods, and adding more observed neighborhoods would still leave the study observational.',
          C:'Who does the counting does not manufacture an association between the two counts. The pattern would look the same if one office collected both.'
        },
        tip:'When two counts rise together, look for a size variable underneath both of them — population, traffic, hours open. That is the standard lurking variable in count data.'
      },

      {
        id:'SCH-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Nonresponse after random selection: the generalization that survives',
        stem:'A district mailed a survey about homework time to 1,000 families chosen at random from its 12,000 families. Only 180 families returned it, and their mean reported homework time was 96 minutes. Which conclusion is best supported?',
        choices:{
          A:'The 96 minutes describes the families who replied and may not reach further.',
          B:'The mean homework time for all 12,000 district families is likely close to 96 minutes.',
          C:'A group of 180 families is too small for any figure to be reported at all.',
          D:'Mailing a survey causes families to overstate how long homework takes.'
        },
        correct:'A',
        expCorrect:'The mailing list was random, but the sample that came back was not: 180 of 1,000 families decided on their own to answer, an 18% response rate. Families with strong feelings about homework are likelier to reply, so the random draw was undone by nonresponse and the figure describes the repliers.',
        expWrong:{
          B:'The randomness of the mailing does not survive an 18% return. The 820 families who stayed silent may differ systematically from the 180 who wrote back.',
          C:'A total of 180 responses is plenty to describe those 180 families precisely. The defect is bias in who answered, and a bigger biased sample is no better.',
          D:'No second survey method was used, so there is nothing to compare the mailed figure against and no basis for calling it overstated.'
        },
        tip:'A random sample only stays random if the people drawn actually respond. Check the response rate before you accept any generalization; low response converts a random sample into a volunteer sample.',
        desmos:'Compute 180/1000 to get the response rate, and 1000 − 180 to see how many drawn families are missing from the number.',
        desmosLatex:['180/1000','1000-180']
      },

      {
        id:'SCH-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Matching in an observational study: one variable controlled, the rest untouched',
        stem:'A researcher compared 120 adults who bike to work with 120 adults who drive, forming the pairs so that the two groups had the same distribution of ages. The bikers had a lower average resting heart rate. Which conclusion is best supported?',
        choices:{
          A:'Biking to work lowers resting heart rate, now that age has been controlled.',
          B:'Biking is associated with a lower resting heart rate among these 240 adults.',
          C:'Age is the only explanation that remains for the gap in heart rates.',
          D:'Matching on age makes this study equivalent to one with random assignment.'
        },
        correct:'B',
        expCorrect:'Matching on age removes age as an explanation and nothing else. The adults still chose their own commute, so diet, sleep, smoking and baseline fitness were never balanced. That leaves an association, and the 240 adults in the study are the group it describes.',
        expWrong:{
          A:'“Lowers” is causal, and matching only handles the variable named. Fitter adults are likelier to choose a bike in the first place, and fitness was never matched.',
          C:'Age is the one explanation that was ruled OUT, not the one left standing. The option inverts what matching accomplished.',
          D:'Matching balances the variables you thought of; random assignment balances the ones you did not. That gap is the whole reason experiments outrank matched comparisons.'
        },
        tip:'Matching and blocking neutralize the listed variable only. Random assignment is the single tool that balances variables nobody measured, which is why it is the one that unlocks cause.'
      },

      {
        id:'SCH-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Random assignment and the size of an effect: what a significant difference in means does not say',
        stem:'In a study of 300 office workers randomly assigned to a standing desk or a seated desk for eight weeks, the standing group reported an average of 1.4 fewer hours of back discomfort per week, a statistically significant difference. Which conclusion is best supported?',
        choices:{
          A:'Every worker at a standing desk had less discomfort than every seated worker.',
          B:'Standing desks eliminate back discomfort for the workers who use them.',
          C:'Standing desks cut average weekly discomfort by about 1.4 hours in this study.',
          D:'Standing desks cut discomfort by at least 1.4 hours for each worker in the study.'
        },
        correct:'C',
        expCorrect:'Random assignment makes the desk the plausible cause, so a causal verb is allowed. The number that goes with it is the one measured: a 1.4-hour drop in the group AVERAGE, for the 300 workers in the study.',
        expWrong:{
          A:'A gap between averages does not order every individual. The two distributions overlap heavily, and plenty of seated workers reported less discomfort than plenty of standing workers.',
          B:'“Eliminate” jumps from a 1.4-hour average reduction to zero discomfort. The study reduced a quantity; it did not remove it.',
          D:'1.4 hours is the mean difference, not a floor each person cleared. Some workers improved far more, some not at all, and some got worse.'
        },
        tip:'Keep the causal verb and the number separate. Random assignment licenses “caused”; the size of the effect is still only the difference between the two group averages.'
      },

      {
        id:'SCH-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Random selection and random assignment together: the strongest appropriate conclusion',
        stem:'A company drew 500 of its 9,000 employees at random and then randomly assigned each of them to one of two training formats. Employees in the video format scored significantly higher on the end-of-training test than those in the workbook format. Which conclusion is best supported?',
        choices:{
          A:'Employees who prefer video learn more than employees who prefer a workbook.',
          B:'The video format is associated with higher scores among the 500 who trained.',
          C:'The video format likely causes higher test scores among office workers everywhere.',
          D:'The video format likely causes higher test scores among the company employees.'
        },
        correct:'D',
        expCorrect:'Both randomizations are present. Random ASSIGNMENT to formats makes the format the plausible cause of the score gap; random SELECTION from the payroll extends that finding to the 9,000 employees. Together they license the strongest claim available: cause, for this company.',
        expWrong:{
          A:'No one chose a format and no preference was ever recorded; the formats were handed out at random.',
          B:'This under-claims twice — it drops the cause that random assignment earned, and it shrinks the population back to the 500 when the draw was random from all 9,000.',
          C:'“Office workers everywhere” leaves the company. The random draw was from one payroll, so that payroll is as far as the result travels.'
        },
        tip:'Two randomizations, two licences, and you may spend both. Assignment gives the verb “caused”; selection gives the group the sentence is about.'
      },

      {
        id:'SCH-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Random selection with a self-chosen treatment: an observational result in disguise',
        stem:'A university drew 600 of its students at random and recorded whether each one had used the free tutoring center during the term. Students who had used it finished the term with a higher mean grade point average. Which conclusion is best supported?',
        choices:{
          A:'Using tutoring is associated with a higher mean grade point average at this university.',
          B:'The tutoring center raises the mean grade point average of the students who use it.',
          C:'Using tutoring is associated with a higher mean grade point average at most universities.',
          D:'Students who avoid tutoring would raise their grades by starting to use it.'
        },
        correct:'A',
        expCorrect:'The random draw is real, so the result covers this university. But nobody was assigned to tutoring — students walked in or did not — so the two groups were built by the students themselves. That makes the study observational, and the honest verb is “is associated with”.',
        expWrong:{
          B:'“Raises” is causal. Students who seek tutoring may already be the more motivated ones, and motivation raises grade point average on its own.',
          C:'“Most universities” leaves the campus that was sampled. Only this university’s students were on the list from which the 600 were drawn.',
          D:'This forecasts the result of an intervention nobody performed. An observational study cannot say what would happen if the non-users changed their behavior.'
        },
        tip:'A random sample tells you WHO the finding covers; it never tells you whether the finding is causal. Check separately whether the researcher, or the participant, decided who got the treatment.'
      },

      {
        id:'SCH-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Experiment without blinding: the flaw that random assignment does not fix',
        stem:'Sixty runners were randomly assigned to wear a new insole or their usual insole for one month, and each runner rated his or her own comfort at the end. Every runner knew which insole he or she had been given. The new-insole group gave higher comfort ratings. Which criticism of the study is strongest?',
        choices:{
          A:'The runners were not selected at random, so the comfort ratings mean nothing.',
          B:'Runners who knew they had the new insole may have rated it higher for that reason.',
          C:'Sixty runners is too few for random assignment to balance the two groups fairly.',
          D:'Comfort cannot be measured at all, so no study of comfort supports a conclusion.'
        },
        correct:'B',
        expCorrect:'Random assignment balanced the runners, but it did not hide the treatment. When the person being treated also scores the outcome and knows which treatment he or she received, expectation can move the rating by itself, so part of the gap may be the knowledge rather than the insole.',
        expWrong:{
          A:'The absence of random selection limits which runners the conclusion covers; it does not make the ratings meaningless for the runners who gave them.',
          C:'Sixty is a workable size, and nothing in the description says the groups came out unbalanced. Random assignment is doing its job here.',
          D:'A self-reported comfort rating is a legitimate outcome and is used routinely. The weakness is that the raters knew their group, not that comfort is unmeasurable.'
        },
        tip:'After you confirm random assignment, ask one more question: did anyone who could influence the outcome know which group a participant was in? That is where a well-randomized experiment still leaks.'
      },

      {
        id:'SCH-11', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Statistical claim when random assignment produces no significant difference',
        stem:'A school randomly assigned 400 students to receive either a printed reading log or no log for one semester. At the end, the mean number of books read differed by 0.2 books, a difference that was not statistically significant. Which conclusion is best supported?',
        choices:{
          A:'The printed log has no effect at all on the number of books students read.',
          B:'The log caused students to read 0.2 more books on average this semester.',
          C:'The study did not detect a difference large enough to attribute to the log.',
          D:'The study failed and should be rerun until a real difference turns up.'
        },
        correct:'C',
        expCorrect:'“Not statistically significant” means a gap this size is the kind of thing chance produces when the log does nothing. That is a failure to detect an effect, which is a weaker statement than showing there is none — a small real effect could easily hide inside this much noise.',
        expWrong:{
          A:'“No effect at all” claims certainty the test cannot deliver. Not finding an effect and demonstrating its absence are different results.',
          B:'The 0.2-book gap was ruled compatible with chance, so attaching the verb “caused” to it reads a real effect into ordinary sampling variation.',
          D:'Rerunning a study until a difference appears is a hunt for a lucky sample. Repeat it enough times and chance alone eventually hands you a significant result.'
        },
        tip:'Significant means “bigger than chance would usually give”. Non-significant therefore means “we could not tell it apart from chance”, never “we proved it is zero”.'
      },

      {
        id:'SCH-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Randomly selected clusters: how far the statistical claim reaches',
        stem:'A district has 48 fourth-grade classrooms. A researcher chose 8 of those classrooms at random and gave a vocabulary test to every student in the 8 rooms. The mean score was 71. Which conclusion is best supported?',
        choices:{
          A:'The mean vocabulary score of fourth graders statewide is likely near 71.',
          B:'Only the 8 chosen rooms can be described, since students were not drawn one by one.',
          C:'Being placed in a particular classroom causes a fourth grader’s vocabulary score.',
          D:'The mean vocabulary score of all fourth graders in the district is likely near 71.'
        },
        correct:'D',
        expCorrect:'The randomness is in which whole classrooms were drawn, and they were drawn from the district’s complete list of 48. Every fourth grader in the district therefore had a chance of being included through his or her room, so the district is the population the estimate covers.',
        expWrong:{
          A:'Only this district’s 48 classrooms were on the list, so classrooms in other districts had no chance of being drawn and are not represented.',
          B:'Drawing intact groups at random still gives every student a known chance of selection. Sampling clusters rather than individuals changes the precision, not the population represented.',
          C:'Nobody assigned students to rooms for this study; the classes already existed. With no assignment there is no causal claim.'
        },
        tip:'Randomly chosen groups still count as random selection. Ask what list the random draw ran over — individuals or clusters — and name that list in the conclusion.',
        desmos:'Compute 8/48 to see what share of the district’s classrooms was tested.',
        desmosLatex:['8/48']
      },

      {
        id:'SCH-13', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'A subgroup split an experiment did not randomize on: correlation inside a causal study',
        stem:'In an experiment, 500 shoppers were randomly assigned to receive a paper coupon or an emailed coupon. Overall redemption rates were nearly identical. When analysts later split the results by age, shoppers over 50 redeemed the paper coupon far more often. Which conclusion is best supported?',
        choices:{
          A:'Among the shoppers over 50 in this study, paper coupons were redeemed more often.',
          B:'Age was randomly assigned too, so the split by age supports a causal claim.',
          C:'Paper coupons and emailed coupons are redeemed at the same rate by everyone.',
          D:'For shoppers over 50, paper coupons cause a higher redemption rate.'
        },
        correct:'A',
        expCorrect:'The coupon format was assigned at random, so the overall comparison is causal. Age was not assigned — shoppers arrived with it — and the split was found by slicing the data after the fact, so the over-50 result is a description of what happened in this study, not an established cause.',
        expWrong:{
          B:'Nobody can assign a shopper an age. Only the coupon format was randomized, and the age split rides along as an observed characteristic.',
          C:'The overall rates were close, yet the age split shows the rates are not identical in every group; an average of near-equal totals can hide opposing subgroups.',
          D:'The causal verb outruns the design. Within the over-50 slice the comparison is still between two randomized arms, but the slice itself was chosen after seeing the data, which is how chance patterns get promoted to findings.'
        },
        tip:'In an experiment, only the variable the researcher handed out is randomized. Any split by a trait the participants brought with them — age, sex, income — is observational, even inside a well-run experiment.'
      },

      {
        id:'SCH-14', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Generalizing a randomly selected sample to a different time period',
        stem:'In March a transit agency surveyed 700 riders chosen at random from the riders who tapped a fare card that month, and 44% said they would pay more for later night service. The agency wants to claim that 44% of its riders in August would say the same. Which statement best evaluates that claim?',
        choices:{
          A:'The claim is supported, because the March riders were chosen at random.',
          B:'The claim is not supported, because August riders were not in the sampled group.',
          C:'The claim is not supported, because a survey cannot estimate a percentage.',
          D:'The claim is supported, because 700 riders is a large enough sample size.'
        },
        correct:'B',
        expCorrect:'The random draw ran over one list: riders who used a card in March. August ridership is a different population — summer schedules, tourists, students away — and nobody in it had a chance of being selected, so the 44% cannot be carried forward to it.',
        expWrong:{
          A:'The random draw is genuine, but it makes the sample represent March riders. Randomness fixes who inside the frame gets picked, not which frame you used.',
          C:'A random sample estimates a percentage well; that is exactly what it is for. The question is which group the percentage belongs to.',
          D:'A bigger sample narrows the margin of error around the March figure. It does nothing about the gap between March riders and August riders.'
        },
        tip:'A population has a WHEN and a WHERE, not only a who. If the conclusion names a different month, city or setting than the frame did, the sample never covered it.'
      },

      {
        id:'SCH-15', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Random assignment and a claim about the average versus a claim about each unit',
        stem:'A gardening club randomly assigned 90 identical seedlings to three fertilizer brands, 30 to each. After ten weeks the mean height in the brand R group was 4 centimeters greater than in the brand S group, a significant difference. Which conclusion is best supported?',
        choices:{
          A:'Brand R produces taller plants than brand S for every species of plant.',
          B:'Each seedling given brand R grew 4 centimeters taller than every brand S seedling.',
          C:'Brand R produced a greater mean height than brand S for these seedlings.',
          D:'Brand R was given to the seedlings that were already growing the fastest.'
        },
        correct:'C',
        expCorrect:'The seedlings were assigned at random, so the fertilizer is the plausible cause of the gap. The gap that was measured is between group MEANS, and the units studied were these 90 seedlings, so the conclusion keeps both limits.',
        expWrong:{
          A:'Only one kind of seedling was planted. Other species were never in the study, so the result cannot be extended to them.',
          B:'4 centimeters is a difference of averages. Individual heights inside each group overlap, so some brand S seedlings certainly outgrew some brand R seedlings.',
          D:'Random assignment is what rules this out: no group could start ahead, because the fast growers were scattered across the three brands by chance.'
        },
        tip:'When the outcome is a mean, the conclusion has to be about a mean. “The average went up by 4” and “each one went up by 4” are different claims, and only the first was tested.'
      },

      {
        id:'SCH-16', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Choosing the design that earns a given statistical claim: cause and population at once',
        stem:'A nutrition class wants to claim that a new cafeteria menu caused students to eat more vegetables, and to apply that claim to all 1,300 students in the school. Which plan would support the full claim?',
        choices:{
          A:'Assign the new menu at random to 200 of the students who subscribe to a school nutrition newsletter.',
          B:'Offer the new menu to whoever wants it and compare their vegetable servings with the servings of students who decline.',
          C:'Draw 200 students at random from the school roster and record which of the two menus each one chooses.',
          D:'Draw 200 students at random from the school roster and assign each at random to the new menu or the old one.'
        },
        correct:'D',
        expCorrect:'The claim has two halves, so the design needs two randomizations. Drawing from the roster at random covers all 1,300 students; assigning the menu at random makes the menu the plausible cause of any difference. Only this plan does both.',
        expWrong:{
          A:'Random assignment earns the causal half, yet newsletter subscribers are a self-selected slice of the school, so the result would not extend to the 1,300.',
          B:'Students sort themselves into the groups, so the eaters who want the new menu may already eat more vegetables. Volunteers also fail to represent the roster, so both halves of the claim are lost.',
          C:'The random draw covers the school, but recording a choice the students made is observational. The population half is earned and the causal half is not.'
        },
        tip:'Read the target claim first and count how many licences it needs. A claim with a causal verb AND a population name requires random assignment and random selection in the same design.'
      },

      /* ---------- Brutal tier (14) ---------- */

      {
        id:'SCH-17', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Smallest change to an observational design that would license a causal claim',
        stem:'A clinic drew 250 of its 4,000 patients at random and recorded, for each one, whether the patient uses the clinic app and how many appointments the patient missed last year. App users missed fewer appointments. The clinic wants to claim that the app reduces missed appointments for its patients. Which single change to the study would be enough to support that claim?',
        choices:{
          A:'Randomly assign the drawn patients to use the app or not, then compare.',
          B:'Enlarge the random draw from 250 patients to 1,000 patients.',
          C:'Ask every app user whether the app helped him or her keep appointments.',
          D:'Match each app user to a non-user of the same age and appointment history.'
        },
        correct:'A',
        expCorrect:'The population half is already paid for: the 250 were drawn at random from the clinic’s own 4,000 patients. What is missing is the causal half, and the only thing that supplies it is the researcher deciding, at random, who gets the app. Then the two groups are comparable at the start and the app is the one difference.',
        expWrong:{
          B:'A larger observational sample estimates the SAME association more precisely. Precision and cause are different problems, and no sample size converts one into the other.',
          C:'Self-reported explanations add opinion from one group only. There is no comparison group formed the same way, so the design does not improve at all.',
          D:'Matching balances age and past attendance and stops there. Patients who install an app may be more organized in ways nobody recorded, and those ways are exactly what random assignment would have balanced.'
        },
        tip:'When a question asks for the smallest change, first work out which licence the design already has. Add only the missing one: assignment for cause, selection for reach.'
      },

      {
        id:'SCH-18', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Smallest change that would let an experiment with random assignment generalize further',
        stem:'A gym recruited 120 members through a flyer at its front desk and randomly assigned 60 to a 20-minute warm-up and 60 to a 5-minute warm-up. Over three months the 20-minute group reported significantly fewer muscle strains. The gym wants to claim that the longer warm-up would reduce strains for all 3,100 of its members. Which single change would support that claim?',
        choices:{
          A:'Raise the number of volunteers from 120 to 600 using the very same flyer.',
          B:'Recruit the 120 participants by drawing them at random from the member list.',
          C:'Let members pick their own warm-up so that the study reflects real behavior.',
          D:'Extend the study from three months to a full year with the same volunteers.'
        },
        correct:'B',
        expCorrect:'The causal half is already earned: the warm-up lengths were handed out at random. What the gym lacks is reach, because the 120 came off a flyer. Drawing the participants at random from the list of 3,100 members gives every member a chance of inclusion, and the causal finding then covers the membership.',
        expWrong:{
          A:'Six hundred self-selected volunteers are still self-selected. The flyer keeps reaching the same kind of member — the one who reads notices and signs up — so the sample stays unrepresentative.',
          C:'Letting members choose destroys the random assignment and with it the causal claim the gym already had. This trades the licence it owns for one it does not need.',
          D:'A longer study says more about how the effect holds up over time. It does not change which members the finding covers.'
        },
        tip:'Never pay twice for a licence you already have. Identify what the design earns, then change only the part that blocks the specific word in the claim you are being asked to support.'
      },

      {
        id:'SCH-19', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Differential dropout after random assignment: the balance the randomization no longer guarantees',
        stem:'A study randomly assigned 400 adults to a 6 a.m. exercise program or a 6 p.m. program, 200 to each. By the end, 62 adults had quit the morning group and 11 had quit the evening group. Among those who finished, the morning group had better average endurance. Which statement best evaluates the claim that the morning program builds more endurance?',
        choices:{
          A:'The claim holds, because all 400 adults were assigned to the groups at random.',
          B:'The claim is weakened, because 400 adults is too few to split into two groups.',
          C:'The claim is weakened: the groups that finished were no longer formed at random.',
          D:'The claim holds, because the same endurance test was given in both groups.'
        },
        correct:'C',
        expCorrect:'Random assignment balanced the 400 who STARTED. The comparison at the end is between the 138 and the 189 who stayed, and staying was not random: a 6 a.m. program is quit by the people least able to sustain it. The survivors of the morning group are therefore a filtered, tougher subgroup, which can produce the endurance gap all by itself.',
        expWrong:{
          A:'The randomization covers the assignment, not the finish line. Once dropout differs sharply between arms, the groups being compared are not the groups that were randomized.',
          B:'Two hundred per arm is an ample size. The damage here comes from WHO left, not from how many adults started.',
          D:'Using one identical measurement on two groups that are no longer comparable gives a clean number for an unfair comparison.'
        },
        tip:'Check attrition arm by arm. Equal dropout mostly costs you precision; lopsided dropout costs you the randomization itself, because leaving was caused by the treatment.',
        desmos:'Compute 62/200 and 11/200 to compare the two dropout rates, and 200 − 62 against 200 − 11 for the groups actually compared.',
        desmosLatex:['62/200','11/200','200-62','200-11']
      },

      {
        id:'SCH-20', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Matching each half of a statistical claim to the randomization that earns it',
        stem:'Design 1: 90 volunteers from one office are randomly assigned to two desk layouts and their focus is measured. Design 2: 90 workers drawn at random from a city payroll are surveyed about the layout they already use. A researcher wants to say both that a layout causes higher focus and that the finding covers city workers. Which statement is accurate?',
        choices:{
          A:'Neither design earns either half, because each one uses only one kind of randomness.',
          B:'Design 1 earns both halves, because random assignment is the stronger tool.',
          C:'Design 2 earns both halves, because the workers came off the city payroll.',
          D:'Design 1 earns the causal half and Design 2 earns the population half.'
        },
        correct:'D',
        expCorrect:'Random assignment in Design 1 makes the layout the plausible cause of the focus difference, but its people came from one office, so it reaches no further. Random selection in Design 2 represents city workers, but the workers chose their own layouts, so it is observational. Each design pays for exactly one half of the claim.',
        expWrong:{
          A:'Each design does earn one half. What neither earns alone is both halves at once, which is why the full claim needs a design with both randomizations.',
          B:'Random assignment is the stronger tool for CAUSE only. It says nothing about who the participants represent, and 90 volunteers from one office represent one office.',
          C:'The payroll draw does cover city workers, but nobody assigned a layout in Design 2, so the causal half is simply not there to be earned.'
        },
        tip:'Treat “causes X for population P” as two separate purchases. Check the price of each one against the design in front of you instead of grading the study as strong or weak overall.'
      },

      {
        id:'SCH-21', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Two conclusions one word apart: which one the random selection supports',
        stem:'Researchers drew 900 households at random from the utility records of Halsted County and randomly assigned half of them to receive a monthly report comparing their electricity use with their neighbors’ use. Over a year the households receiving the report used 3.1% less electricity on average, a significant difference. Conclusion I: the reports caused households in Halsted County to use less electricity. Conclusion II: the reports caused households in the state to use less electricity. Which statement is accurate?',
        choices:{
          A:'Conclusion I is supported and Conclusion II is not supported.',
          B:'Conclusion II is supported and Conclusion I is not supported.',
          C:'Both conclusions are supported by this design.',
          D:'Neither conclusion is supported, because usage was not observed directly.'
        },
        correct:'A',
        expCorrect:'The causal verb is fine in both: half the households were assigned the report at random. The two conclusions differ in one word, the population. The random draw ran over Halsted County utility records, so the county is the group represented and Conclusion I is the one the design pays for.',
        expWrong:{
          B:'This has the scope backwards. Households elsewhere in the state were never on the list, so they had no chance of selection and no claim can reach them.',
          C:'Accepting both means accepting that a county-level random draw represents the state. It does not, no matter how large the sample from that county is.',
          D:'Electricity use came off utility meters, which is about as direct as measurement gets. The design is sound; only the reach of Conclusion II is wrong.'
        },
        tip:'When two options are identical except for the population name, stop reading the verb and go find the sampling frame. The frame settles it in one step.'
      },

      {
        id:'SCH-22', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Random assignment within blocks: what blocking buys and what it leaves unpaid',
        stem:'A tutoring company sorted the 160 students enrolled at its downtown branch into four blocks by starting score, then randomly assigned half of each block to a new practice schedule. The new-schedule group gained 22 points more on average, and the gain showed up in all four blocks. Which conclusion is best supported?',
        choices:{
          A:'The new schedule causes a 22-point gain for any student who follows it.',
          B:'The new schedule caused a larger average gain for these 160 students.',
          C:'Blocking by starting score makes the 160 students a random sample of students.',
          D:'The new schedule caused a larger average gain for students at every branch.'
        },
        correct:'B',
        expCorrect:'Random assignment inside each block makes the two arms comparable, and blocking on starting score removes the biggest nuisance variable, so the causal verb is earned. Nothing about the design changes where the students came from: they enrolled at one branch, so the conclusion stays with those 160.',
        expWrong:{
          A:'22 points is the difference between the group averages, and it came from students who all enrolled at one branch. It is not a figure promised to an arbitrary student.',
          C:'Blocking balances starting score ACROSS the two arms. It does nothing about which students walked into the downtown branch, so it cannot manufacture a random sample.',
          D:'Only downtown students were in the study. Students at other branches were never eligible for selection, so the finding does not travel to them.'
        },
        tip:'Blocking is random assignment with the noise sorted first: it sharpens the causal comparison and never widens it. Reach still depends entirely on how the participants were recruited.'
      },

      {
        id:'SCH-23', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Groups formed by an outside rule rather than by random assignment: cause or correlation',
        stem:'A city installed new shelters at the 30 bus stops with the highest complaint counts and left the other 90 stops unchanged. A year later, ridership had risen more at the 30 stops with shelters than at the other 90. An analyst concludes that shelters cause ridership to rise. Which statement best evaluates that conclusion?',
        choices:{
          A:'It is sound, because the city, rather than the riders, decided where the shelters went.',
          B:'It is sound, because comparing 30 stops with 90 stops is a large enough comparison.',
          C:'It is unsound, because the 30 stops were picked for a reason already tied to ridership.',
          D:'It is unsound, because ridership cannot be counted accurately at an open bus stop.'
        },
        correct:'C',
        expCorrect:'Assignment by an authority is not assignment at random. The 30 stops were the ones drawing the most complaints, which are typically the busiest and fastest-growing stops, so they were already on a different ridership path before a single shelter went up. That difference alone can produce the result.',
        expWrong:{
          A:'What matters is not that riders were kept out of the decision but that the decision used a rule correlated with the outcome. A coin flip over the 120 stops would have fixed this; a complaint ranking does not.',
          B:'Comparing 30 against 90 is a perfectly workable size. The flaw sits in how the 30 were chosen, and no number of stops repairs a biased selection rule.',
          D:'Boardings are counted routinely from fare data. Measurement is not the weak point of this study.'
        },
        tip:'When someone else formed the groups, ask what rule they used. If the rule involves the outcome — worst first, neediest first, highest demand first — the groups differed before the treatment and the comparison is observational.'
      },

      {
        id:'SCH-24', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Random assignment undone by participants who switched groups: the claim that survives',
        stem:'A study randomly assigned 300 commuters to a carpool group or a solo-driving group for two months. During the study, 46 commuters assigned to the carpool switched to driving alone because of schedule conflicts, and the analysts moved those 46 into the solo group before comparing costs. Which statement best evaluates the claim that carpooling lowers commuting costs?',
        choices:{
          A:'The claim is strong, because each commuter was counted in the group he or she actually used.',
          B:'The claim is weaker, because commuting costs should have been recorded every single week.',
          C:'The claim is strong, because 46 out of 300 commuters is a small share of the participants.',
          D:'The claim is weaker, because the final groups were shaped by the commuters instead of by chance.'
        },
        correct:'D',
        expCorrect:'Regrouping people by what they ended up doing replaces the random split with a self-selected one. The 46 switchers are the commuters whose schedules would not fit a carpool — irregular hours, extra trips — and those same schedules drive costs up on their own, so the final solo group is loaded with expensive commuters for reasons that have nothing to do with driving alone.',
        expWrong:{
          A:'Counting people by what they actually did sounds fair and is exactly the move that breaks the design. The whole point of randomizing was to stop participants from choosing their own group.',
          B:'More frequent measurement improves precision. It cannot repair two groups that the participants sorted themselves into.',
          C:'The 46 are not a random 15% of the sample; they share the very trait that affects the outcome. A small but selected group can shift a comparison more than a large random one.'
        },
        tip:'Ask whether the groups being compared at the end are the groups that were randomized at the start. Any regrouping based on participant behavior turns the experiment back into an observational study.'
      },

      {
        id:'SCH-25', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Random selection over a partial list: the subgroup the draw could not reach',
        stem:'A hospital employs 1,200 nurses. To gauge support for a four-day schedule, an administrator drew 350 names at random from the list of nurses who had logged into the scheduling portal during the previous month, and 58% of those surveyed favored the change. Which conclusion is best supported?',
        choices:{
          A:'About 58% of the nurses who used the portal that month favor the schedule.',
          B:'About 58% of the 1,200 nurses at the hospital favor the four-day schedule.',
          C:'Using the scheduling portal causes a nurse to favor a four-day schedule.',
          D:'The random draw makes the 350 nurses representative of nurses everywhere.'
        },
        correct:'A',
        expCorrect:'The draw was random, but only over one list: nurses who opened the portal in a single month. Nurses who never logged in had zero chance of selection, so the estimate belongs to portal users. That subgroup is plausibly the more schedule-engaged half of the staff, which is precisely why it cannot stand in for all 1,200.',
        expWrong:{
          B:'This treats the portal list as if it were the staff roster. The randomness was real inside the list and does nothing about the nurses the list left out.',
          C:'Portal use was a habit the nurses already had; nobody was assigned to log in. An observational overlap between two traits is not a cause.',
          D:'A random draw represents the list it ran over, and this list was one month of portal users at one hospital — not nurses in general.'
        },
        tip:'Separate the sampling FRAME from the population in the claim. Randomness inside a partial frame is still randomness inside a partial frame, and it cannot reach anyone the frame excluded.',
        desmos:'Compute 0.58 · 350 for the number who favored the change, and compare 350 with 1,200 to see the share of staff that was eligible for the draw.',
        desmosLatex:['0.58\\cdot 350','350/1200']
      },

      {
        id:'SCH-26', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Random assignment with a significant but small effect: an appropriate conclusion about size',
        stem:'A publisher drew 2,000 subscribers at random from its list of 250,000 and randomly assigned each of them to see one of two renewal notices. Notice A produced a renewal rate of 41.0% and notice B produced 39.4%, and with this sample the difference is statistically significant. Which conclusion is best supported?',
        choices:{
          A:'Notice A would cause renewals to climb sharply across the subscriber list.',
          B:'Notice A would cause a small increase in renewals across the subscriber list.',
          C:'Notice A is associated with more renewals, but no cause may be claimed here.',
          D:'A 1.6-point gap is too small to be treated as a real difference at all.'
        },
        correct:'B',
        expCorrect:'Both randomizations are present, so a causal claim about the 250,000 subscribers is licensed. The size has to match the data: 41.0% against 39.4% is a gap of 1.6 percentage points, about a 4% relative lift. That is small and real, and “a small increase” says exactly that.',
        expWrong:{
          A:'“Sharply” inflates 1.6 percentage points into a dramatic effect. Statistical significance reports that a gap is unlikely to be chance, never that the gap is large.',
          C:'The subscribers were assigned a notice at random, which is the single condition that licenses causal language. This option throws away the strongest part of the design.',
          D:'The significance test already weighed the gap against the sample size and found chance an unlikely explanation. Small and real are not opposites.'
        },
        tip:'Significance answers “is it there?” and the effect size answers “how big?”. With 2,000 subjects a tiny gap clears significance easily, so read the numbers before you accept any adjective.',
        desmos:'Compute 0.410 − 0.394 for the gap in percentage points, then 0.016/0.394 to see it as a relative change.',
        desmosLatex:['0.410-0.394','0.016/0.394']
      },

      {
        id:'SCH-27', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Two studies and one statistical claim: what random selection and random assignment each contribute',
        stem:'Study 1 randomly assigned 180 volunteers recruited at a single clinic to a new inhaler or the standard one, and the new-inhaler group had significantly fewer flare-ups. Study 2 surveyed 1,500 patients drawn at random from a national registry and found that 12% of them use the new inhaler. Which claim do the two studies together support?',
        choices:{
          A:'The new inhaler reduces flare-ups nationally, since Study 2 covers the country.',
          B:'Twelve percent of registry patients have fewer flare-ups because of the new inhaler.',
          C:'The new inhaler reduced flare-ups for the Study 1 volunteers, and 12% of registry patients use it.',
          D:'The new inhaler is only associated with fewer flare-ups, because Study 1 used volunteers.'
        },
        correct:'C',
        expCorrect:'Study 1 has random assignment but volunteers from one clinic: cause, for those 180. Study 2 has random selection but no assignment and no outcome comparison: it estimates a usage rate for registry patients. Reporting each finding with its own limits is the whole of what the pair supports.',
        expWrong:{
          A:'Study 2 counts who uses the inhaler; it never compares flare-ups between users and non-users. A survey of usage cannot lend its national reach to another study’s causal result.',
          B:'The 12% and the flare-up reduction describe two different sets of people. Stitching them into one sentence attributes an outcome measured in a clinic to patients on a registry.',
          D:'Volunteers limit WHO the causal finding covers, not whether it is causal. The random assignment inside Study 1 still supports cause for those volunteers.'
        },
        tip:'Two studies do not combine their licences. Each finding keeps the limits of the design that produced it, so the supported statement is the pair of sentences, not a merged one.',
        desmos:'Compute 0.12 · 1500 to see how many surveyed registry patients use the new inhaler.',
        desmosLatex:['0.12\\cdot 1500']
      },

      {
        id:'SCH-28', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'A causal claim about a comparison the random assignment never made',
        stem:'A bakery randomly assigned 240 customers to receive either a loyalty card or a one-time discount, and over two months the loyalty-card group returned significantly more often. The owner concludes that a loyalty card brings customers back more often than free samples do. Which statement best evaluates that conclusion?',
        choices:{
          A:'It is supported, because the loyalty card beat the other option that was tested.',
          B:'It is supported, because random assignment covers every comparison of interest.',
          C:'It is not supported, because two months is too short to measure return visits.',
          D:'It is not supported, because free samples were never one of the assigned options.'
        },
        correct:'D',
        expCorrect:'Random assignment makes the comparison between the treatments that were actually handed out trustworthy, and only those. Free samples were never assigned to anyone, so the study contains no information about them and the owner’s sentence compares the card against something that was never in the experiment.',
        expWrong:{
          A:'The card beat a one-time discount. Winning against one rival says nothing about a rival that never entered the study, and the conclusion names the absent one.',
          B:'Random assignment makes the groups comparable on the treatments given. It creates no evidence about treatments that were never assigned.',
          C:'Two months was long enough to produce a significant difference, so duration is not the problem. The flaw is which treatments were compared.'
        },
        tip:'Read the conclusion for a treatment that does not appear in the design. A perfectly randomized experiment supports claims only about the arms it actually ran.'
      },

      {
        id:'SCH-29', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Repairing a voluntary response sample: the change that restores generalization',
        stem:'A city posted an online form asking residents to rate the new recycling pickup, and 2,100 residents filled it out, with 68% rating the service poorly. The sanitation office wants an estimate it can apply to all 140,000 residents. Which single change to the plan would best support that estimate?',
        choices:{
          A:'Draw a random sample of residents and follow up until most of them answer.',
          B:'Leave the form open for another month so that more residents can respond.',
          C:'Post the form on three more city websites so that different residents find it.',
          D:'Weight the 2,100 responses so the age mix matches the age mix of the city.'
        },
        correct:'A',
        expCorrect:'The defect is that residents decide whether they are in the sample, and the residents with a complaint decide yes far more often. The repair has to move that decision to the researcher: draw names at random and then chase the responses, so the people who would never volunteer still end up in the data.',
        expWrong:{
          B:'More time collects more of the same self-selected responses. The extra month reaches the residents who were already inclined to speak up.',
          C:'Three more posting sites widen the net but leave the decision to respond with the resident, which is the flaw itself.',
          D:'Weighting repairs the age mix and nothing else. Residents who chose to answer may be angrier at every age, and no age weight can detect or correct that.'
        },
        tip:'Fixing a voluntary response sample means taking the choice away from the participant. More reach, more time and more weighting all leave self-selection intact.'
      },

      {
        id:'SCH-30', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Counting the designs whose random assignment supports a cause-and-effect conclusion',
        stem:'Four studies are described. Study 1: 80 volunteers are randomly assigned to one of two diets. Study 2: 500 adults drawn at random from a city list are asked which diet they already follow. Study 3: 60 patients at one clinic are randomly assigned to one of two dosages. Study 4: 300 shoppers drawn at random from a store loyalty list are observed and their purchases are recorded. For how many of the four studies is a cause-and-effect conclusion about the participants appropriate?',
        answer:'2',
        expCorrect:'A cause-and-effect conclusion needs RANDOM ASSIGNMENT to the groups being compared. Study 1 hands out the diets at random: yes. Study 3 hands out the dosages at random: yes. Study 2 records a diet each adult picked for himself or herself, and Study 4 records purchases shoppers made on their own, so both are observational and support association only. Count: 1 + 1 = 2. Note that the random SELECTION in Studies 2 and 4 is genuine — it buys reach, not cause — and that the missing selection in Studies 1 and 3 limits who the causal finding covers without cancelling it.',
        tip:'Sort the two words before you count. Random assignment to groups gives cause; random selection from a list gives reach. A study can have one, both or neither, and only the first word is about cause.'
      }

    ]
  });
})();
