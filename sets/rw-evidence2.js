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
        A:'The lullaby is sung today at nearly every wedding and harvest festival, and nearly the whole village joins in.',
        B:'A neighboring village sings a lullaby whose melody and words are completely different from this one’s.',
        C:'Recordings made in different decades preserve noticeably different sets of verses for the same lullaby.',
        D:'The lullaby is widely considered one of the most beautiful songs anywhere in the region.'
      },
      correct:'C',
      expCorrect:'Her argument is that the song has NO single author, but grew as singers kept adding verses. C supports it directly: recordings from different decades preserve different verses → the song kept changing by word of mouth, exactly as she says.',
      expWrong:{
        A:'A whole village singing along shows how popular the song has become, not how it was made. A song written by one author in one sitting can be sung by everyone too.',
        B:'A different song in a different village is a different object of study. Nothing about it fixes how THIS lullaby came into being.',
        D:'Beauty is a value judgment. A song admired across a whole region could equally well have been written by one person on one evening.'
      },
      tip:'Go back to the exact CLAIM (it grew among many, with no single author) and ask: does this option support it directly? Look for the one showing change over time, not the one saying it is popular or beautiful.'
    },
    {
      id:'CE2-02', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Command of Evidence (textual)',
      passage:"A teacher claims that letting students explain their reasoning out loud to a partner helps them catch their own mistakes better than working silently. To test this, she compared two of her classes: one that worked through problems silently and one that talked through each step with a partner.",
      stem:'Which finding, if true, would most directly support the teacher’s claim?',
      choices:{
        A:'Students in both classes said they preferred solving problems in the way their own class had been assigned, and most wanted to keep doing it that way.',
        B:'Students who explained their reasoning aloud to a partner corrected far more of their own errors than students who worked silently.',
        C:'The silent class finished the problem set several minutes faster than the class that talked each step through with a partner.',
        D:'Both classes had studied the same material the previous week and began the problem set with the same average score.'
      },
      correct:'B',
      expCorrect:'Her claim is that explaining out loud to a partner helps you CATCH your own mistakes more than working in silence. B says exactly that: those who explained aloud corrected far more of their own errors than the silent group. It compares precisely the two variables in the claim.',
      expWrong:{
        A:'Preference is a matter of taste, not a count of errors caught. A method students like can still leave every one of their mistakes standing.',
        C:'Speed is a different outcome from accuracy, and this one runs against her: the silent class did better on it. No error count appears anywhere in the sentence.',
        D:'Equal preparation and equal starting scores make the comparison fair — that is a control, not a result. Nothing here says how many errors either class corrected.'
      },
      tip:'Go back to the exact CLAIM (speaking aloud → catching more of your own errors) and ask: does this option support it directly? The right one compares THOSE two variables, not preference or speed.'
    },
    {
      id:'CE2-03', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence (quantitative)',
      passage:"A city tracked how residents commuted before and after opening a protected bike lane on Main Street. In a survey of 1,000 commuters, the share who biked to work rose from 8% before the lane opened to 21% after, while the share who drove alone fell from 62% to 49%. The shares using the bus (about 20%) and walking (about 10%) stayed roughly the same.",
      stem:'Which choice most effectively uses data from the survey to support the idea that the new bike lane drew people away from driving alone?',
      choices:{
        A:'The share of commuters who biked rose from 8% to 21%, a jump of 13 percentage points, after the lane opened.',
        B:'As biking rose from 8% to 21%, driving alone fell by a comparable amount, from 62% to 49%, while bus and walking shares barely changed.',
        C:'The share of commuters who took the bus held at about 20% both before and after the lane opened, and walking held near 10%.',
        D:'After the lane opened, driving alone was still the most common way to commute, at 49%, ahead of biking at 21%, the bus at 20%, and walking at 10%.'
      },
      correct:'B',
      expCorrect:'The idea is that the bike lane pulled in people who USED to drive alone. B uses the data to show it: biking rose by almost the same amount (13 points) as driving alone fell (13 points), while bus and walking barely moved. That near-match suggests the shift came from the drivers.',
      expWrong:{
        A:'It quotes the right rise and even sizes it at 13 points, but a rise on its own cannot say WHERE the new cyclists came from. Former walkers or bus riders would fit the same number.',
        C:'These are the two shares that did NOT move. They serve as background inside the right answer, but on their own they describe what stayed the same and never link biking to driving alone.',
        D:'It reads the right column of the after survey and then makes the wrong comparison: ranking the modes afterward counts how many still drive, not how many stopped driving.'
      },
      tip:'With data, read the numbers carefully and compare the changes: the right one pairs the RISE in biking with the FALL in driving alone (13 points each) and rules out the other options that barely moved.'
    },
    {
      id:'CE2-04', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence (quantitative)',
      passage:"A researcher measured how quickly four materials cooled a room, recording the drop in temperature (°C) after one hour with each installed. The results were: white paint on the roof, 4.0°C; a reflective metal coating, 6.5°C; green plants covering the roof, 3.0°C; and no treatment (bare roof), 0.5°C. The researcher claimed the reflective metal coating cooled the room most effectively.",
      stem:'Which choice most effectively uses data from the study to support the researcher’s claim?',
      choices:{
        A:'White paint produced a temperature drop of 4.0°C, well above the bare roof’s 0.5°C and the green plants’ 3.0°C.',
        B:'Green plants on the roof produced a temperature drop of 3.0°C after one hour, six times the drop of the untreated roof.',
        C:'The bare roof produced the smallest temperature drop of the four, just 0.5°C after one hour.',
        D:'The reflective metal coating produced a temperature drop of 6.5°C, the largest of the four options tested.'
      },
      correct:'D',
      expCorrect:'The claim is that the reflective metal coating cools MORE. D uses the right figure: 6.5°C, the biggest drop of the four. Being the largest, it backs up that material being the most effective.',
      expWrong:{
        A:'Both comparisons are true and white paint really does beat the bare roof and the plants — but it loses to the metal coating’s 6.5°C. Second place cannot support a claim about the best.',
        B:'The multiple is right and the row is wrong: 3.0°C is the second-SMALLEST drop of the four. A figure that only beats the untreated roof cannot show the metal coating won.',
        C:'It finds an extreme, but at the wrong end of the table. Naming the worst performer leaves the claim about the best one with no support at all.'
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
        B:'The novelist wrote several other books whose heroines were notably strong-willed.',
        C:'The published novel sold far more copies than any of the author’s earlier works.',
        D:'The handwritten draft was completed in the same year the finished novel was published.'
      },
      correct:'A',
      expCorrect:'His thesis is that the author REVISED the book to make the heroine less obedient and more outspoken. A proves it directly: in the final version the heroine argues openly where in the draft she only obeyed in silence. That draft→final contrast is exactly the change he claims.',
      expWrong:{
        B:'Other books show a lifelong taste for outspoken heroines, not a revision made inside THIS one. The contention is about draft versus published text.',
        C:'Sales measure how the finished book was received, not whether the heroine changed between manuscript and print.',
        D:'A date tells you how long the revising took, not what the revising did. The heroine could have been left untouched within that same year.'
      },
      tip:'Go back to the exact CLAIM (she revised draft→final to make her more outspoken) and ask: does this option support it directly? The right one compares the TWO versions and shows the change; the rest are about other books, sales or dates.'
    },
    {
      id:'CE2-06', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Command of Evidence (quantitative)',
      passage:"An agronomist tested whether a new watering schedule increases tomato yield. She grew plants in four groups and recorded the average fruit per plant: watered daily, 18 tomatoes; watered every 3 days, 26 tomatoes; watered weekly, 22 tomatoes; and watered every 2 weeks, 11 tomatoes. She hypothesized that watering every three days produces the highest yield.",
      stem:'Which choice most effectively uses data from the study to support the agronomist’s hypothesis?',
      choices:{
        A:'Plants watered daily produced 18 tomatoes per plant, more than the 11 produced every 2 weeks.',
        B:'Plants watered weekly produced 22 tomatoes per plant, more than the daily and the fortnightly schedules did.',
        C:'Plants watered every 3 days produced 26 tomatoes per plant, more than any other watering schedule tested.',
        D:'Plants watered every 2 weeks produced only 11 tomatoes per plant, the lowest of the four.'
      },
      correct:'C',
      expCorrect:'The hypothesis is that watering every 3 days gives the HIGHEST yield. C uses the exact figure: 26 tomatoes per plant, more than any other schedule. Being the highest of the four, it supports her hypothesis directly.',
      expWrong:{
        A:'The comparison is true, but it is drawn between the two LOWEST rows in the table. Beating the worst schedule says nothing about which schedule is best.',
        B:'Weekly really does beat two of the four schedules, which makes 22 look like a winning number — but it still falls short of the 26 from watering every 3 days.',
        D:'It reads the right table at the wrong end: the minimum. Identifying the worst schedule leaves the hypothesis about the best one untouched.'
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
        B:'“Today I woke with the whole design complete in my mind, arrived from nowhere overnight.”',
        C:'“The city has at last agreed to fund a proper workshop for my experiments.”',
        D:'“My rival across town claims to have built something similar, though I doubt it runs.”'
      },
      correct:'A',
      expCorrect:'His argument is that the success came from stubborn, repeated trial and error, not flashes of genius. A illustrates it perfectly: “attempt no. 214 failed… each failure showed me one less path to try”. It shows the step-by-step persistence he is defending.',
      expWrong:{
        B:'The most quotable line on offer, and it is the inventor’s own — but a design arriving whole overnight IS the flash of genius the biographer sets aside. It argues the rival case.',
        C:'Funding is a resource, not a method. It records what the inventor was given, never how he worked.',
        D:'It records a suspicion about someone else’s machine. Nothing in it describes the inventor’s own trials or his failures.'
      },
      tip:'Watch the “less… than…” (less from genius than from persistence). Go back to the CLAIM and pick the quote that STAGES the persistence (attempt 214, failing and continuing); the sudden-flash one is the trap.'
    },
    {
      id:'CE2-08', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (quantitative)',
      passage:"A public-health team surveyed 2,000 people about a new walking-path network and recorded weekly exercise minutes by distance from the nearest path. Those living within 500 meters averaged 150 minutes per week; those 500–1,500 meters away averaged 110 minutes; and those more than 1,500 meters away averaged 95 minutes. The team concluded that living closer to a path was associated with more weekly exercise.",
      stem:'Which choice most effectively uses data from the survey to support the team’s conclusion?',
      choices:{
        A:'People living more than 1,500 meters from a path still averaged 95 minutes of exercise per week, so even the farthest residents in the survey were far from inactive.',
        B:'People living 500–1,500 meters from a path averaged 110 minutes of exercise per week, the middle of the three figures.',
        C:'As distance from the nearest path increased, average weekly exercise fell steadily, from 150 minutes within 500 meters to 95 minutes beyond 1,500 meters.',
        D:'The survey included 2,000 people drawn from every distance band around the path network.'
      },
      correct:'C',
      expCorrect:'The conclusion is that living CLOSER goes with MORE exercise. C uses the three data points in order to show the whole trend: the farther away, the fewer minutes (150 → 110 → 95). That steady decline is exactly the association the team claims.',
      expWrong:{
        A:'True of the farthest band, and pointed the other way: it argues that distance barely matters. One figure with nothing to compare it against cannot show an association with distance.',
        B:'The middle band has nothing to be in the middle OF here. A single point cannot show a rise or a fall, and this is the point that sits between the two that would.',
        D:'Sample size and coverage describe how the survey was built, not what it found. Not one exercise figure appears in the sentence.'
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
        B:'Several other coastal towns in the region suffered severe epidemics during the same century.',
        C:'The town’s population had been rising slowly for decades before the 1800s began.',
        D:'Written accounts describe the epidemics as frightening events that residents remembered for generations, which is why popular histories still blame them.'
      },
      correct:'A',
      expCorrect:'Her thesis is that the decline came from the SILTED harbor (not the epidemics), and that they are told apart by TIMING. A gives exactly that: trade collapsed when the harbor silted up, WELL BEFORE the first epidemic. If the damage came before the epidemic, the cause was the harbor, as she says.',
      expWrong:{
        B:'Epidemics elsewhere neither date THIS town’s decline nor place it before or after the silting. Her whole argument turns on the order of events here.',
        C:'It describes the town before the decline even began. Growth in the previous century cannot settle which of the two later causes came first.',
        D:'It explains why the RIVAL account took hold and makes the epidemics loom larger, which is the opposite of what she needs. How vividly something was remembered is not a date.'
      },
      tip:'When the claim is “because of A, not B” and rests on TIMING, look for the option that fixes the order: A happened BEFORE B. Here, trade falls before the epidemic → the cause was the harbor.'
    },
    {
      id:'CE2-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (quantitative)',
      passage:"A study tested whether a reading app improved comprehension, comparing scores before and after eight weeks. Group 1 used the app plus a weekly tutor and rose from 60 to 78 points. Group 2 used the app alone and rose from 61 to 65 points. Group 3 met with the tutor but used no app and rose from 59 to 74 points. A researcher concluded that the app alone did little to improve comprehension.",
      stem:'Which choice most effectively uses data from the study to support the researcher’s conclusion?',
      choices:{
        A:'Group 1, which used the app plus a tutor, achieved the highest final score, 78 points, and the largest gain, 18 points.',
        B:'Group 2, which used the app alone, rose only 4 points (61 to 65), far less than the tutor-only group’s 15-point gain (59 to 74).',
        C:'Group 3, which met with a tutor but used no app, rose from 59 to 74 points, a 15-point gain achieved without any help at all from the app.',
        D:'All three groups showed at least some improvement in comprehension over the eight weeks of the study.'
      },
      correct:'B',
      expCorrect:'The conclusion is that the app ALONE did little. B proves it by comparing: the app alone rose barely 4 points, far below the tutor alone, which rose 15. Since the app alone showed the smallest gain, it supports that on its own it adds little.',
      expWrong:{
        A:'Both numbers are right and Group 1 really did best — but it had the tutor as well as the app, so its gain cannot be credited to the app. The conclusion is about the app ALONE.',
        C:'This is the comparison group from the right answer, quoted accurately — but by itself it shows what the TUTOR did. It only bites once you set that 15-point gain beside Group 2’s 4.',
        D:'Improvement everywhere blurs the very difference the conclusion rests on, and it would even suggest the app helped. No group is isolated and no gain is compared.'
      },
      tip:'To isolate the effect of ONE thing (the app alone), compare the group that used only that against the others. Read the gains carefully: 4 points (app alone) vs. 15 (tutor alone) is what supports “the app alone did little”.'
    },
    {
      id:'CE2-11', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"Ecologists reintroduced a native wildflower to a meadow, predicting that its return would bring back a rare butterfly that feeds only on that flower. Skeptics argued the butterfly had vanished for reasons unrelated to the flower and would not return. Two years later, the ecologists surveyed the meadow.",
      stem:'Which finding, if true, would most directly support the ecologists’ prediction?',
      choices:{
        A:'The reintroduced wildflower was the same variety that had once grown across the whole meadow.',
        B:'Visitors to the meadow reported enjoying the return of the colorful wildflowers each spring.',
        C:'Other butterfly species, which feed on many kinds of plants, were seen across the region that season.',
        D:'In the areas where the wildflower re-established itself, the rare butterfly reappeared, while nearby meadows still lacking the flower had none.'
      },
      correct:'D',
      expCorrect:'The prediction is that bringing the flower back would bring back the butterfly that feeds only on it. D links cause to effect and adds a contrast: where the flower returned, the butterfly returned; in neighboring meadows WITHOUT the flower, there was no butterfly. That contrast ties the butterfly back to the flower.',
      expWrong:{
        A:'Matching the historical variety makes the reintroduction sound well planned, but nothing here reports whether the butterfly came back to the meadow.',
        B:'Visitor enjoyment measures how people responded to the flowers, not whether the rare butterfly returned to feed on them.',
        C:'Generalist butterflies thrive on any number of plants, so seeing them says nothing about the one species that eats only this flower — and that species is the one the prediction names.'
      },
      tip:'The best evidence sets the prediction against a contrast: where the cause happened (the flower returned) vs. where it did not. “With the flower the butterfly came back, without it, no” is what ties cause to effect.'
    },
    {
      id:'CE2-12', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (quantitative)',
      passage:"A nutrition team compared four snacks for how long they kept people feeling full, asking volunteers to record the hours until they felt hungry again. Averages were: potato chips, 1.5 hours; apple slices, 2.5 hours; almonds, 4.0 hours; and white crackers, 1.8 hours. The team wants to recommend the snack that keeps people full longest.",
      stem:'Which choice most effectively uses data from the study to complete the team’s recommendation?',
      choices:{
        A:'The team should recommend apple slices, which kept volunteers full for 2.5 hours, a full hour longer than potato chips.',
        B:'The team should recommend white crackers, which kept volunteers full for 1.8 hours, slightly longer than potato chips.',
        C:'The team should recommend potato chips, which kept volunteers full for just 1.5 hours, the shortest time of the four.',
        D:'The team should recommend almonds, which kept volunteers full for 4.0 hours, longer than any other snack tested.'
      },
      correct:'D',
      expCorrect:'The goal is to recommend the snack that keeps you full the LONGEST. D uses the right figure: almonds, at 4.0 hours, beat them all. Being the highest satiety number, it completes the recommendation the way the team wants.',
      expWrong:{
        A:'The comparison with chips is correct and apples really do come second — but 2.5 hours falls well short of the almonds’ 4.0. Recommending the runner-up does not complete a recommendation for the longest.',
        B:'It makes the right kind of comparison against the wrong rival: beating the worst snack by 0.3 hours still leaves crackers second from last.',
        C:'It reads the table correctly and then recommends the minimum. The goal names the snack that lasts longest, and 1.5 hours sits at the opposite end.'
      },
      tip:'Go back to the exact CLAIM (fills you up LONGER) and find the LARGEST number of hours: 4.0 (almonds). The right one cites that maximum; the rest confuse the goal with smaller values or the minimum.'
    }
  ]
});
