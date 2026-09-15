/* SAT Studio question set — Reading & Writing: Command of Evidence — Set 2 (CE2-01 a CE2-12) */
window.SAT_SETS.push({
  id: 'rw-evidence2',
  title: 'Command of Evidence — Set 2',
  section: 'rw',
  level: 'Difícil',
  description: 'Textual and quantitative evidence: which finding or data point best supports/completes the claim.',
  minutes: 15,
  questions: [
    {
      id:'CE2-01', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Command of Evidence (textual)',
      passage:"A folklorist argues that a village's famous lullaby was not composed by a single author but grew slowly out of many singers adding lines over generations. She points out that no written version exists from before the 1900s and that older residents each remember slightly different verses.",
      stem:'Which finding, if true, would most directly support the folklorist’s argument?',
      choices:{
        A:'The lullaby is sung today at nearly every wedding and harvest festival in the village.',
        B:'A neighboring village has a lullaby with a completely different melody and words.',
        C:'Recordings made in different decades preserve noticeably different sets of verses for the same lullaby.',
        D:'The lullaby is considered one of the most beautiful songs in the region.'
      },
      correct:'C',
      expCorrect:'Her argument is that the song has NO single author, but grew as singers kept adding verses. C supports it directly: recordings from different decades preserve different verses → the song kept changing by word of mouth, exactly as she says.',
      expWrong:{
        A:'That it is sung at weddings and harvests says it is popular today, but says nothing about HOW it was composed or whether it had a single author.',
        B:'The song from another village is a different thing; it tells you nothing about the collective origin of THIS song.',
        D:'That it is beautiful is a value judgment; it does not touch whether it was created by many or by one author.'
      },
      tip:'Go back to the exact CLAIM (it grew among many, with no single author) and ask: does this option support it directly? Look for the one showing change over time, not the one saying it is popular or beautiful.'
    },
    {
      id:'CE2-02', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Command of Evidence (textual)',
      passage:"A teacher claims that letting students explain their reasoning out loud to a partner helps them catch their own mistakes better than working silently. To test this, she compared two of her classes: one that worked through problems silently and one that talked through each step with a partner.",
      stem:'Which finding, if true, would most directly support the teacher’s claim?',
      choices:{
        A:'Students in both classes said they preferred solving problems in the way their class was assigned.',
        B:'Students who explained their reasoning aloud to a partner corrected far more of their own errors than students who worked silently.',
        C:'The silent class finished the problem set a few minutes faster than the talking class.',
        D:'Both classes had studied the same material during the previous week.'
      },
      correct:'B',
      expCorrect:'Her claim is that explaining out loud to a partner helps you CATCH your own mistakes more than working in silence. B says exactly that: those who explained aloud corrected far more of their own errors than the silent group. It compares precisely the two variables in the claim.',
      expWrong:{
        A:'Which method students PREFER is a matter of taste, not a measure of whether they catch more errors. It does not support the claim.',
        C:'Finishing faster in silence is about speed, not about correcting errors; it might even work against speaking aloud.',
        D:'That they studied the same material is a fair methodological control, but it does not show that speaking helps you correct more.'
      },
      tip:'Go back to the exact CLAIM (speaking aloud → catching more of your own errors) and ask: does this option support it directly? The right one compares THOSE two variables, not preference or speed.'
    },
    {
      id:'CE2-03', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence (quantitative)',
      passage:"A city tracked how residents commuted before and after opening a protected bike lane on Main Street. In a survey of 1,000 commuters, the share who biked to work rose from 8% before the lane opened to 21% after, while the share who drove alone fell from 62% to 49%. The shares using the bus (about 20%) and walking (about 10%) stayed roughly the same.",
      stem:'Which choice most effectively uses data from the survey to support the idea that the new bike lane drew people away from driving alone?',
      choices:{
        A:'The share of commuters who biked rose from 8% to 21% after the lane opened.',
        B:'As biking rose from 8% to 21%, driving alone fell by a comparable amount, from 62% to 49%, while bus and walking shares barely changed.',
        C:'The share of commuters who took the bus stayed at about 20% both before and after the lane opened.',
        D:'After the lane opened, driving alone was still the most common way to commute, at 49%.'
      },
      correct:'B',
      expCorrect:'The idea is that the bike lane pulled in people who USED to drive alone. B uses the data to show it: biking rose by almost the same amount (13 points) as driving alone fell (13 points), while bus and walking barely moved. That near-match suggests the shift came from the drivers.',
      expWrong:{
        A:'That biking rose is true, but on its own it does not say WHERE those people came from; they could have stopped walking or taking the bus.',
        C:'That the bus stayed at ~20% shows it did NOT change; it does not explain the rise in biking or connect to driving alone.',
        D:'That driving alone is still the most common (49%) is true, but it points to many people still driving; it does not show the shift toward biking.'
      },
      tip:'With data, read the numbers carefully and compare the changes: the right one pairs the RISE in biking with the FALL in driving alone (13 points each) and rules out the other options that barely moved.'
    },
    {
      id:'CE2-04', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence (quantitative)',
      passage:"A researcher measured how quickly four materials cooled a room, recording the drop in temperature (°C) after one hour with each installed. The results were: white paint on the roof, 4.0°C; a reflective metal coating, 6.5°C; green plants covering the roof, 3.0°C; and no treatment (bare roof), 0.5°C. The researcher claimed the reflective metal coating cooled the room most effectively.",
      stem:'Which choice most effectively uses data from the study to support the researcher’s claim?',
      choices:{
        A:'White paint produced a temperature drop of 4.0°C, more than the bare roof’s 0.5°C.',
        B:'Green plants on the roof produced a temperature drop of 3.0°C after one hour.',
        C:'The bare roof produced the smallest temperature drop, at 0.5°C.',
        D:'The reflective metal coating produced a temperature drop of 6.5°C, the largest of the four options tested.'
      },
      correct:'D',
      expCorrect:'The claim is that the reflective metal coating cools MORE. D uses the right figure: 6.5°C, the biggest drop of the four. Being the largest, it backs up that material being the most effective.',
      expWrong:{
        A:'The white paint (4.0°C) cools, but less than the metal; citing it does not support the METAL being the best.',
        B:'The plants (3.0°C) are among the LEAST cooling; that figure does not back the metal winning.',
        C:'The bare roof (0.5°C) shows the SMALLEST drop; it tells you the worst option, not the best one.'
      },
      tip:'Go back to the exact CLAIM (metal cools MORE) and find the LARGEST drop in the table: 6.5°C. The right one cites that figure; the others cite materials that cool less.'
    },
    {
      id:'CE2-05', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence (textual)',
      passage:"A literary scholar contends that a nineteenth-century novelist revised her most famous book to make its heroine less obedient and more outspoken. The scholar bases this on comparing the novel's first handwritten draft with its final published version.",
      stem:'Which finding, if true, would most directly support the scholar’s contention?',
      choices:{
        A:'In the published version, the heroine openly argues with her guardian in scenes where the early draft had her silently obey.',
        B:'The novelist wrote several other books featuring strong-willed female characters.',
        C:'The published novel sold far more copies than the author’s earlier works.',
        D:'The handwritten draft was written in the same year the novel was eventually published.'
      },
      correct:'A',
      expCorrect:'His thesis is that the author REVISED the book to make the heroine less obedient and more outspoken. A proves it directly: in the final version the heroine argues openly where in the draft she only obeyed in silence. That draft→final contrast is exactly the change he claims.',
      expWrong:{
        B:'That the author wrote OTHER books with strong women does not show she changed THIS book between draft and publication.',
        C:'How many copies it sold measures popularity, not whether she revised the heroine to be more outspoken.',
        D:'What year the draft was written is a matter of dates; it does not say whether the character changed from obedient to outspoken.'
      },
      tip:'Go back to the exact CLAIM (she revised draft→final to make her more outspoken) and ask: does this option support it directly? The right one compares the TWO versions and shows the change; the rest are about other books, sales or dates.'
    },
    {
      id:'CE2-06', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Command of Evidence (quantitative)',
      passage:"An agronomist tested whether a new watering schedule increases tomato yield. She grew plants in four groups and recorded the average fruit per plant: watered daily, 18 tomatoes; watered every 3 days, 26 tomatoes; watered weekly, 22 tomatoes; and watered every 2 weeks, 11 tomatoes. She hypothesized that watering every three days produces the highest yield.",
      stem:'Which choice most effectively uses data from the study to support the agronomist’s hypothesis?',
      choices:{
        A:'Plants watered daily produced 18 tomatoes per plant, more than plants watered every 2 weeks.',
        B:'Plants watered weekly produced 22 tomatoes per plant, a moderate yield.',
        C:'Plants watered every 3 days produced 26 tomatoes per plant, more than any other watering schedule tested.',
        D:'Plants watered every 2 weeks produced only 11 tomatoes per plant, the lowest yield.'
      },
      correct:'C',
      expCorrect:'The hypothesis is that watering every 3 days gives the HIGHEST yield. C uses the exact figure: 26 tomatoes per plant, more than any other schedule. Being the highest of the four, it supports her hypothesis directly.',
      expWrong:{
        A:'Daily watering (18) beats every two weeks, but does not reach 26; that figure does not show every 3 days is best.',
        B:'Weekly watering (22) is a middling yield, lower than 26; it does not support every 3 days winning.',
        D:'Every 2 weeks (11) is the WORST; it tells you the lowest, not that every 3 days is the highest.'
      },
      tip:'Go back to the exact CLAIM (every 3 days = MORE tomatoes) and find the largest figure: 26. The right one cites that maximum; the others cite smaller values that do not prove the hypothesis.'
    },
    {
      id:'CE2-07', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence (textual)',
      passage:"A biographer argues that an inventor's success came less from sudden flashes of genius than from stubborn, repeated trial and error. To make this case, the biographer draws on the inventor's personal notebooks.",
      stem:'Which quotation from the notebooks would most effectively support the biographer’s argument?',
      choices:{
        A:'“Attempt no. 214 failed like the rest, but each failure showed me one more path I need not try again.”',
        B:'“Today I woke with the whole design complete in my mind, as if it had arrived overnight.”',
        C:'“The city has finally agreed to fund a proper workshop for my experiments.”',
        D:'“My rival across town claims to have built something similar, though I doubt it works.”'
      },
      correct:'A',
      expCorrect:'His argument is that the success came from stubborn, repeated trial and error, not flashes of genius. A illustrates it perfectly: “attempt no. 214 failed… each failure showed me one less path to try”. It shows the step-by-step persistence he is defending.',
      expWrong:{
        B:'Waking up with the COMPLETE design “overnight” is exactly the flash of genius the biographer RULES OUT. It runs the opposite way.',
        C:'That the city funded a workshop is about resources, not about whether the success came from persistent trial and error.',
        D:'Commenting on a rival says nothing about the inventor’s own method. Irrelevant to the claim.'
      },
      tip:'Watch the “less… than…” (less from genius than from persistence). Go back to the CLAIM and pick the quote that STAGES the persistence (attempt 214, failing and continuing); the sudden-flash one is the trap.'
    },
    {
      id:'CE2-08', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (quantitative)',
      passage:"A public-health team surveyed 2,000 people about a new walking-path network and recorded weekly exercise minutes by distance from the nearest path. Those living within 500 meters averaged 150 minutes per week; those 500–1,500 meters away averaged 110 minutes; and those more than 1,500 meters away averaged 95 minutes. The team concluded that living closer to a path was associated with more weekly exercise.",
      stem:'Which choice most effectively uses data from the survey to support the team’s conclusion?',
      choices:{
        A:'People living more than 1,500 meters from a path still averaged 95 minutes of exercise per week.',
        B:'People living 500–1,500 meters from a path averaged 110 minutes of exercise per week.',
        C:'As distance from the nearest path increased, average weekly exercise fell steadily, from 150 minutes within 500 meters to 95 minutes beyond 1,500 meters.',
        D:'The survey included 2,000 people living at various distances from the path network.'
      },
      correct:'C',
      expCorrect:'The conclusion is that living CLOSER goes with MORE exercise. C uses the three data points in order to show the whole trend: the farther away, the fewer minutes (150 → 110 → 95). That steady decline is exactly the association the team claims.',
      expWrong:{
        A:'Citing only the farthest group (95 min) gives a single loose point; without comparing it to the closer ones it does not show the trend by distance.',
        B:'The middle group (110 min) on its own does not show the relationship either; it needs comparing with the other two.',
        D:'That there were 2,000 people describes the SIZE of the sample, not the relationship between distance and exercise.'
      },
      tip:'With data, the best evidence for a TREND uses the extremes or the whole series in order (150→110→95), not a single point. Read the variable on the axis (distance) and follow how the other number changes.'
    },
    {
      id:'CE2-09', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"A historian claims that a coastal town's decline in the 1800s was driven mainly by the silting-up of its harbor, which left large ships unable to dock, rather than by the epidemics often blamed in popular histories. She argues the two causes can be separated by looking at the timing of events.",
      stem:'Which finding, if true, would most strongly support the historian’s claim?',
      choices:{
        A:'Town trade records show shipping volume collapsed in the years the harbor silted up, well before the first major epidemic struck.',
        B:'Several coastal towns in the region suffered epidemics during the same century.',
        C:'The town’s population had been slowly rising for decades before the 1800s.',
        D:'Written accounts describe the epidemics as frightening events that residents long remembered.'
      },
      correct:'A',
      expCorrect:'Her thesis is that the decline came from the SILTED harbor (not the epidemics), and that they are told apart by TIMING. A gives exactly that: trade collapsed when the harbor silted up, WELL BEFORE the first epidemic. If the damage came before the epidemic, the cause was the harbor, as she says.',
      expWrong:{
        B:'That other cities had epidemics does not separate the causes in THIS city or fix the order in time.',
        C:'That the population rose BEFORE 1800 is earlier context; it does not say what caused the later decline or the harbor/epidemic order.',
        D:'That the epidemics were memorable reinforces the RIVAL explanation (epidemics); it does not support the harbor one.'
      },
      tip:'When the claim is “because of A, not B” and rests on TIMING, look for the option that fixes the order: A happened BEFORE B. Here, trade falls before the epidemic → the cause was the harbor.'
    },
    {
      id:'CE2-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (quantitative)',
      passage:"A study tested whether a reading app improved comprehension, comparing scores before and after eight weeks. Group 1 used the app plus a weekly tutor and rose from 60 to 78 points. Group 2 used the app alone and rose from 61 to 65 points. Group 3 met with the tutor but used no app and rose from 59 to 74 points. A researcher concluded that the app alone did little to improve comprehension.",
      stem:'Which choice most effectively uses data from the study to support the researcher’s conclusion?',
      choices:{
        A:'Group 1, which used the app plus a tutor, achieved the highest final score, 78 points.',
        B:'Group 2, which used the app alone, rose only 4 points (61 to 65), far less than the tutor-only group’s 15-point gain (59 to 74).',
        C:'Group 3, which met with a tutor but used no app, rose from 59 to 74 points.',
        D:'All three groups showed at least some improvement in comprehension over the eight weeks.'
      },
      correct:'B',
      expCorrect:'The conclusion is that the app ALONE did little. B proves it by comparing: the app alone rose barely 4 points, far below the tutor alone, which rose 15. Since the app alone showed the smallest gain, it supports that on its own it adds little.',
      expWrong:{
        A:'Group 1 (app + tutor) had the best final score, but it includes the tutor; it does not isolate the effect of the app ALONE.',
        C:'Group 3 (tutor, no app) rose 15 points; it shows the tutor helps, not that the app alone does little.',
        D:'That all three rose “somewhat” is vague and even works against it: it would suggest the app helped too. It does not isolate its effect.'
      },
      tip:'To isolate the effect of ONE thing (the app alone), compare the group that used only that against the others. Read the gains carefully: 4 points (app alone) vs. 15 (tutor alone) is what supports “the app alone did little”.'
    },
    {
      id:'CE2-11', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"Ecologists reintroduced a native wildflower to a meadow, predicting that its return would bring back a rare butterfly that feeds only on that flower. Skeptics argued the butterfly had vanished for reasons unrelated to the flower and would not return. Two years later, the ecologists surveyed the meadow.",
      stem:'Which finding, if true, would most directly support the ecologists’ prediction?',
      choices:{
        A:'The reintroduced wildflower was the same variety that had once grown throughout the meadow.',
        B:'Visitors to the meadow reported enjoying the return of the colorful wildflowers.',
        C:'Other butterfly species, which feed on many kinds of plants, were seen across the region that year.',
        D:'In the areas where the wildflower re-established itself, the rare butterfly reappeared, while nearby meadows still lacking the flower had none.'
      },
      correct:'D',
      expCorrect:'The prediction is that bringing the flower back would bring back the butterfly that feeds only on it. D links cause to effect and adds a contrast: where the flower returned, the butterfly returned; in neighboring meadows WITHOUT the flower, there was no butterfly. That contrast ties the butterfly back to the flower.',
      expWrong:{
        A:'That it is the same historical variety is context; it does not show the butterfly came back because of the flower.',
        B:'That visitors like the flowers is irrelevant to whether the butterfly returned.',
        C:'OTHER butterflies that feed on many plants say nothing about the rare butterfly that eats only this flower.'
      },
      tip:'The best evidence sets the prediction against a contrast: where the cause happened (the flower returned) vs. where it did not. “With the flower the butterfly came back, without it, no” is what ties cause to effect.'
    },
    {
      id:'CE2-12', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (quantitative)',
      passage:"A nutrition team compared four snacks for how long they kept people feeling full, asking volunteers to record the hours until they felt hungry again. Averages were: potato chips, 1.5 hours; apple slices, 2.5 hours; almonds, 4.0 hours; and white crackers, 1.8 hours. The team wants to recommend the snack that keeps people full longest.",
      stem:'Which choice most effectively uses data from the study to complete the team’s recommendation?',
      choices:{
        A:'The team should recommend apple slices, which kept volunteers full for 2.5 hours.',
        B:'The team should recommend white crackers, which kept volunteers full slightly longer than potato chips.',
        C:'The team should recommend potato chips, which kept volunteers full for the shortest time, 1.5 hours.',
        D:'The team should recommend almonds, which kept volunteers full for 4.0 hours, longer than any other snack tested.'
      },
      correct:'D',
      expCorrect:'The goal is to recommend the snack that keeps you full the LONGEST. D uses the right figure: almonds, at 4.0 hours, beat them all. Being the highest satiety number, it completes the recommendation the way the team wants.',
      expWrong:{
        A:'The apple (2.5 h) fills you up quite a bit, but less than the almonds; it is not the maximum, so it does not complete the recommendation well.',
        B:'The crackers (1.8 h) barely beat the chips; they are among the LEAST filling. A misreading of the goal.',
        C:'The chips (1.5 h) are the ones that fill you for the SHORTEST time; exactly the opposite of what is meant to be recommended.'
      },
      tip:'Go back to the exact CLAIM (fills you up LONGER) and find the LARGEST number of hours: 4.0 (almonds). The right one cites that maximum; the rest confuse the goal with smaller values or the minimum.'
    }
  ]
});
