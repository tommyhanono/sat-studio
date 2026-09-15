/* SAT Studio question set — Reading & Writing: Command of Evidence — Hard (COE-01 to COE-10) */
window.SAT_SETS.push({
  id: 'rw-set7',
  title: 'Command of Evidence — Hard',
  section: 'rw',
  level: 'Difícil',
  description: 'Information and Ideas: choose the fact or quotation that BEST supports (or weakens) the claim.',
  minutes: 16,
  questions: [
    {
      id:'COE-01', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"Marine biologist Dr. Okafor studies why some coral reefs recover after a heat wave while neighboring reefs die. She hypothesizes that reefs hosting a wider variety of algae species inside their coral tissue bounce back faster, because different algae tolerate different temperatures. To test this, she catalogued the algae living in twelve reefs before a marine heat wave and then measured how much living coral remained one year afterward.",
      stem:'Which finding, if true, would most directly support Dr. Okafor’s hypothesis?',
      choices:{
        A:'The reef that attracted the greatest number of visiting fish species also retained the largest share of living coral one year after the heat wave.',
        B:'Reefs that hosted more distinct algae species before the heat wave retained a larger share of living coral one year afterward.',
        C:'Every one of the twelve reefs she catalogued lost at least some of its living coral during the year following the heat wave.',
        D:'Reefs in deeper, cooler water hosted fewer algae species before the heat wave than the shallow reefs she catalogued did.'
      },
      correct:'B',
      expCorrect:'The hypothesis says MORE algae variety → FASTER recovery (more live coral afterward). B connects exactly those two variables: more algae species before → more live coral a year later. That is precisely what she measured.',
      expWrong:{
        A:'Fish species are a different kind of variety from the algae living inside the coral tissue, which is the variable she catalogued. A reef can draw fish for reasons that have nothing to do with heat tolerance.',
        C:'True of all twelve reefs — and that is the problem. A loss shared by every reef cannot separate the ones with many algae species from the ones with few, which is the comparison the hypothesis needs.',
        D:'It links depth to algae variety, but it never mentions how much coral survived, so the recovery half of the hypothesis is left untested.'
      },
      tip:'Underline the two variables in the hypothesis (here: algae variety ↔ coral that survives). The right answer links THOSE two, not other similar-sounding ones.'
    },
    {
      id:'COE-02', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"A team of archaeologists excavating a coastal ruin uncovered a 3,000-year-old workshop and concluded that its occupants produced purple dye for export rather than for local use. They based this claim mainly on the enormous quantity of dyeing vats found at the site—far more than a small village of that period could ever have needed for coloring its own cloth.",
      stem:'Which finding, if true, would most strongly support the archaeologists’ conclusion?',
      choices:{
        A:'Fragments of the same distinctive dyed cloth were later found in trading settlements hundreds of kilometers away.',
        B:'The dyeing vats were built from a distinctive clay that outcrops only in the hills immediately behind the workshop.',
        C:'The workshop stood beside a river whose flow could have supplied the enormous quantities of fresh water that large-scale dyeing demands.',
        D:'Vats of the same unusual design have been excavated at several other coastal sites across the region.'
      },
      correct:'A',
      expCorrect:'The claim is that they produced dye for EXPORT (selling it far away), not for local use. A shows the same distinctive dyed cloth turning up hundreds of kilometers away → direct evidence that the product traveled. That is export.',
      expWrong:{
        B:'It locates where the equipment was made, not where the dye ended up. Local clay fits a village dyeing its own cloth exactly as well as it fits a workshop selling abroad.',
        C:'A river explains how the site could dye on that scale — which is the capacity the archaeologists had already inferred from the vats. Being able to make a lot is not evidence that the product was sold far away.',
        D:'Shared technology across the region shows the method was widespread. If anything it suggests each settlement dyed for itself, which is the local-use explanation the conclusion rejects.'
      },
      tip:'“For export” = the product ends up FAR AWAY. Look for the option that traces the product off-site, not the one that only explains how it was made.'
    },
    {
      id:'COE-03', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"In a survey of 600 office workers, researchers asked how many took a short outdoor walk during lunch and then measured self-reported focus during the afternoon. The researchers concluded that walking outdoors at midday causes sharper afternoon focus. A skeptic, however, argues that the direction of cause might be reversed or that a third factor explains the pattern.",
      stem:'Which finding, if true, would most directly weaken the researchers’ conclusion?',
      choices:{
        A:'A separate study found that stretching indoors at midday produced no measurable change in afternoon focus.',
        B:'Workers who walked outdoors at lunch reported feeling calmer and less irritable than those who stayed at their desks.',
        C:'Workers who reported sharper afternoon focus tended to have more flexible schedules that let them step outside whenever they wished.',
        D:'Most of the 600 workers surveyed said they enjoyed their midday walks and intended to keep taking them.'
      },
      correct:'C',
      expCorrect:'The skeptic says a THIRD factor may explain the pattern. C offers exactly that: the flexible-schedule workers already had better focus AND could also step out for a walk. So the walking and the focus could both come from the flexible schedule rather than one causing the other. That weakens “walking CAUSES focus”.',
      expWrong:{
        A:'Indoor stretching is a different activity, and ruling out one substitute leaves the walking–focus link exactly where it was: no reversed cause, no third factor.',
        B:'Feeling calmer runs in the SAME direction as the researchers’ claim, so it strengthens the link instead of weakening it — the opposite of what the question asks for.',
        D:'How much the walkers liked the habit says nothing about what the habit did. A pleasant activity can still have no effect on afternoon focus.'
      },
      tip:'To weaken a cause-and-effect claim, look for a THIRD factor that explains both things at once, or a reversed cause. Careful: an option that SUPPORTS the claim is the opposite of what “weaken” asks for.'
    },
    {
      id:'COE-04', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"An economist claims that offering free public transit does not, by itself, reduce the number of cars on city roads; instead, she argues, most new transit riders are people who previously walked or biked, not people who previously drove. To evaluate this, a city made its buses free for one year and surveyed the new riders about how they used to travel.",
      stem:'Which finding, if true, would most directly support the economist’s claim?',
      choices:{
        A:'During the free-transit year, total bus ridership across the city roughly doubled, and the increase held steady in every month of the trial.',
        B:'Among the new bus riders, the large majority reported that before the change they had usually walked or cycled to their destinations.',
        C:'Several nearby cities that kept charging bus fares recorded no change in their traffic levels over the same year.',
        D:'City officials reported that the free-bus program cost considerably more to run than the budget had set aside for it.'
      },
      correct:'B',
      expCorrect:'Her specific claim is that the new riders used to walk or bike (not drive), which is why car counts do not fall. B says exactly that: most new users used to walk or bike. It supports the claim on its own terms.',
      expWrong:{
        A:'A doubling counts how many new riders there are, never where they came from. If those extra riders had previously driven, the very same number would refute her claim instead of supporting it.',
        C:'Those cities never made transit free, so they produced no new riders to survey. Her claim is about who the new riders used to be, and that stays untested here.',
        D:'The price of the program bears on whether the city can keep it, not on whether the new riders had previously driven, walked, or cycled.'
      },
      tip:'When the claim has a precise detail (“they used to walk or bike”), the right evidence mentions THAT detail. A big but generic number (ridership rose) is usually the vague distractor.'
    },
    {
      id:'COE-05', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence',
      passage:"A botanist proposes that a certain desert shrub survives long droughts mainly by storing water in its unusually thick roots, rather than by reducing water loss through its leaves. In a controlled test, she grew forty shrubs, deprived them of water for two months, and recorded both root water content and leaf water loss throughout.",
      stem:'Which finding, if true, would most directly support the botanist’s proposal?',
      choices:{
        A:'Related shrub species that lack thickened roots endure short dry spells just as reliably as this one does.',
        B:'The shrubs’ leaves were coated in a thick waxy layer that cut water loss through the leaf surface by more than half during the two-month dry period.',
        C:'The shrub grows naturally only in basins that receive fewer than 100 millimeters of rain in an average year.',
        D:'The shrubs with the thickest, most water-filled roots survived the two-month drought at far higher rates than those with thinner roots.'
      },
      correct:'D',
      expCorrect:'Her proposal is that it survives thanks to water stored in the thick ROOTS, not the leaves. D ties exactly that together: thicker, water-filled roots → far higher survival. It supports the mechanism she points to.',
      expWrong:{
        A:'A short dry spell is not the two-month drought she tested, and relatives with thin roots doing just as well would undercut the importance of the roots rather than support it.',
        B:'The waxy layer is a concrete, measured mechanism — but it is loss through the LEAVES, the explanation she explicitly set aside. Evidence for the rejected half of a “rather than” claim argues against her, not for her.',
        C:'A rainfall figure shows the plant must cope with drought somehow; it does not choose between the roots and the leaves as the way it copes.'
      },
      tip:'Watch the “rather than…” part. An option supporting the REJECTED mechanism (here, the leaves) is a trap: it looks like evidence, but it points the wrong way.'
    },
    {
      id:'COE-06', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"A historian argues that a medieval town’s sudden prosperity in the 1300s came from its role as a hub for the wool trade, not from the silver mine often credited in local legend. She notes that the town’s wealth rose sharply in exactly the decades when European demand for wool was booming.",
      stem:'Which finding, if true, would most strongly support the historian’s argument?',
      choices:{
        A:'The town’s recorded population grew steadily in every decade of the 1300s, nearly tripling by 1400.',
        B:'The nearby silver mine is documented as having produced unusually pure ore during the 1100s and 1200s.',
        C:'Town records from the prosperous decades list large numbers of wool merchants and warehouses but almost no income from the mine.',
        D:'Several other towns in the same region also grew markedly wealthier during those same decades.'
      },
      correct:'C',
      expCorrect:'She argues the wealth came from WOOL, not the mine. C gives direct evidence on both sides: many merchants and wool warehouses AND almost no income from the mine. It confirms the source she defends and rules out the one she denies.',
      expWrong:{
        A:'Population growth is the effect she is trying to explain, not evidence of its cause: a silver boom would have pulled people in exactly as a wool boom would.',
        B:'Pure ore in the 1100s and 1200s props up the legend she is arguing against, and it falls outside the 1300s, the decades her argument is about.',
        D:'A region-wide rise is equally consistent with wool, with silver, or with neither, so it cannot single out the source of THIS town’s money.'
      },
      tip:'When the claim is “A, not B”, the best evidence touches both sides: it confirms A and/or rules out B. An option reinforcing B works against you.'
    },
    {
      id:'COE-07', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"Sleep scientists tested whether learning a new skill right before sleep improves memory of it. Two hundred volunteers practiced the same finger-tapping sequence; half then slept for eight hours while the other half stayed awake for the same period. The next day, everyone was retested. The researchers concluded that sleep, not merely the passage of time, strengthens newly learned motor skills.",
      stem:'Which finding, if true, would most directly support the researchers’ conclusion?',
      choices:{
        A:'The finger-tapping sequence was closely modeled on the ones used in earlier studies of motor memory.',
        B:'Volunteers in both groups rated the finger-tapping task as equally easy to understand and equally enjoyable to practice.',
        C:'Volunteers who slept reported feeling markedly more rested and alert at the second test session than the volunteers who had stayed awake.',
        D:'Volunteers who slept performed the finger-tapping sequence markedly faster and more accurately the next day than those who stayed awake.'
      },
      correct:'D',
      expCorrect:'The conclusion is that SLEEP (not just the passing of time) strengthens motor memory. Since both groups let the same 8 hours pass, the only difference is sleeping or not. D shows the sleepers improved far more → the gain is due to sleep, not time. Direct support.',
      expWrong:{
        A:'Reusing a task from earlier studies makes the results easier to compare with them, but it reports nothing about how either group performed the next day.',
        B:'Equal ratings confirm the two groups started out alike, which is a fair-design detail. The conclusion needs a difference in what they could DO at the retest, not in how they felt about the task.',
        C:'This is a self-report about alertness, not a measure of the skill — and it opens a rival reading: the sleepers may simply have been less tired at the retest, not better trained.'
      },
      tip:'In two-group experiments, strong evidence COMPARES the results between them. Here the time is the same for both, so the difference in performance can only come from sleep.'
    },
    {
      id:'COE-08', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence',
      passage:"In her essay on urban design, the author claims that narrow, tree-lined streets make pedestrians feel safer and more willing to linger than wide, open avenues. To develop this argument, she draws on months of interviews she conducted with residents of several neighborhoods, asking each of them to compare how a quiet, shaded street and a broad, busy avenue nearby made them feel as they walked.",
      stem:'Which quotation from the text most effectively illustrates the author’s claim?',
      choices:{
        A:'“One resident said the narrow, shaded street outside her door felt ‘calm enough to stop and chat,’ while the broad avenue nearby left her hurrying to get across.”',
        B:'“The city’s widest avenues were laid out in the nineteenth century to move carriages quickly through the center, and several residents still praised them as the fastest way to cross town.”',
        C:'“Several residents remarked that the trees newly planted along their own block were still too young to cast any real shade.”',
        D:'“The author notes that narrow streets cost the city more per block to sweep, repave, and clear after a storm.”'
      },
      correct:'A',
      expCorrect:'The claim is that narrow, tree-lined streets make people feel SAFER and willing to linger, compared with wide avenues. A shows a resident saying the narrow shaded street invited her to stop, while the wide avenue made her hurry. It illustrates exactly the contrast she defends.',
      expWrong:{
        B:'It is a resident quotation about the wide avenues, which makes it look right — but what the residents praise is SPEED, not feeling safe or wanting to linger, and praise for the avenues cuts against the claim rather than illustrating it.',
        C:'The quotation describes trees that are not yet doing the work, so it records the ABSENCE of the feature the claim credits; it cannot show that a shaded street changes how people walk.',
        D:'Maintenance cost is an argument about the city’s budget, not about what a pedestrian feels on the street; it neither illustrates the claim nor contradicts it.'
      },
      tip:'“Illustrates the claim” = show exactly what it says. Look for the quote in which someone actually EXPERIENCES the described effect (here: lingering on the narrow street, hurrying on the wide one), not history or cost data.'
    },
    {
      id:'COE-09', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"Ecologists reintroduced beavers to a dried-out valley, predicting that the dams the beavers build would raise the water table and allow wetland plants to return. Critics countered that the valley had grown too arid for the animals to make any lasting difference. Three years later, the ecologists surveyed the valley.",
      stem:'Which finding, if true, would most directly support the ecologists’ prediction?',
      choices:{
        A:'Beaver populations in three wetter valleys nearby had remained stable over the same three-year period.',
        B:'The reintroduced beavers belonged to the same species that had lived throughout the valley before it dried out.',
        C:'Local residents reported that they enjoyed watching the beavers work along the stream at dusk.',
        D:'In the stretches of the valley where beavers built dams, the water table rose and wetland plants spread widely, while undammed stretches stayed dry.'
      },
      correct:'D',
      expCorrect:'The prediction is that beaver dams would raise the water level and bring wetland plants back. D shows exactly that chain where dams EXIST (water rises + plants return) and compares it with stretches WITHOUT dams that stay dry. It links the cause (dams) to the predicted effect.',
      expWrong:{
        A:'Stable populations show the animals thrive where water was never scarce. The critics’ objection is about THIS arid valley, and nothing here reports its water table or its plants.',
        B:'Matching the historically native species makes the reintroduction sound well designed, but the prediction was about water levels and wetland plants, and neither is mentioned.',
        C:'Public enthusiasm measures how people feel about the project, not whether the dams raised the water table or brought the wetland plants back.'
      },
      tip:'The best evidence sets the prediction against a contrast: where the cause happened vs. where it did not. Seeing “with dams it changed, without dams it did not” is what ties cause to effect.'
    },
    {
      id:'COE-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"A nutrition researcher studied a group of 400 adults, half of them home gardeners, and reported that those who grew their own vegetables ate more servings of vegetables per week than the non-gardeners did. From this difference she concluded that the act of gardening itself leads people to eat more vegetables. A colleague, however, suspects that the conclusion overlooks a simpler explanation for the pattern.",
      stem:'Which finding, if true, would most directly weaken the researcher’s conclusion?',
      choices:{
        A:'The gardeners in the study had already eaten more vegetables than non-gardeners for years before they ever took up gardening.',
        B:'Gardeners in the study reported spending an average of four hours a week weeding, watering, and harvesting their plots.',
        C:'Non-gardeners in the study said they would consider starting a plot of their own if they had more yard space.',
        D:'The vegetables the gardeners grew most often were tomatoes, peppers, and lettuce, the same three the non-gardeners bought most often.'
      },
      correct:'A',
      expCorrect:'The conclusion is that gardening ITSELF makes people eat more vegetables. A knocks it down: if the gardeners already ate more vegetables YEARS BEFORE they started growing, then gardening is not what changed them; they were already like that. The proposed cause collapses.',
      expWrong:{
        B:'Hours in the plot measure how much they garden, not whether gardening changed their diet. The colleague’s simpler explanation survives untouched.',
        C:'What the non-gardeners might do in a different situation is hypothetical; it cannot explain the gap in servings the researcher actually measured.',
        D:'Overlapping produce lists describe WHAT each group eats, not HOW MUCH. The conclusion rests on the gap in servings per week, and that gap is left exactly where it was.'
      },
      tip:'To weaken “X causes Y”, the strongest move is showing that Y already existed BEFORE X. If they ate more vegetables before having a garden, gardening cannot have been the cause.'
    }
  ]
});
