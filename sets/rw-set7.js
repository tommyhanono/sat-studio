/* SAT Studio question set — Reading & Writing: Command of Evidence — Hard (COE-01 a COE-10) */
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
        A:'The reef with the greatest number of visiting fish species also had the highest coral survival after the heat wave.',
        B:'Reefs that hosted more distinct algae species before the heat wave retained a larger share of living coral one year afterward.',
        C:'Every reef in the study lost at least some living coral during the year following the heat wave.',
        D:'Reefs located in deeper, cooler water tended to contain fewer algae species than shallow reefs.'
      },
      correct:'B',
      expCorrect:'The hypothesis says MORE algae variety → FASTER recovery (more live coral afterward). B connects exactly those two variables: more algae species before → more live coral a year later. That is precisely what she measured.',
      expWrong:{
        A:'It talks about FISH species, not the variety of algae inside the coral. That is a different variable from the one in the hypothesis.',
        C:'That every reef lost some coral says nothing about whether algae VARIETY helped recovery; it does not compare reefs with more vs. fewer algae.',
        D:'It links depth to the number of algae, but says nothing about coral RECOVERY. It does not touch the claim.'
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
        B:'The dyeing vats were built from a type of clay available in the hills surrounding the workshop.',
        C:'The workshop stood beside a river that would have supplied the large amounts of water dyeing requires.',
        D:'Similar dyeing vats have been discovered at several other ancient sites across the region.'
      },
      correct:'A',
      expCorrect:'The claim is that they produced dye for EXPORT (selling it far away), not for local use. A shows the same distinctive dyed cloth turning up hundreds of kilometers away → direct evidence that the product traveled. That is export.',
      expWrong:{
        B:'Where the clay for the vats came from does not say where the dye went. Irrelevant to “export vs. local”.',
        C:'Having a river nearby explains how they could dye in quantity, but does not show the product was sold far away.',
        D:'Similar vats existing at other sites does not show THIS workshop exported; it might even suggest the practice was common and local.'
      },
      tip:'“For export” = the product ends up FAR AWAY. Look for the option that traces the product off-site, not the one that only explains how it was made.'
    },
    {
      id:'COE-03', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"In a survey of 600 office workers, researchers asked how many took a short outdoor walk during lunch and then measured self-reported focus during the afternoon. The researchers concluded that walking outdoors at midday causes sharper afternoon focus. A skeptic, however, argues that the direction of cause might be reversed or that a third factor explains the pattern.",
      stem:'Which finding, if true, would most directly weaken the researchers’ conclusion?',
      choices:{
        A:'A separate study found that indoor stretching at lunch had no measurable effect on afternoon focus.',
        B:'Workers who walked outdoors at lunch reported feeling more relaxed than those who stayed inside.',
        C:'Workers who reported sharper afternoon focus tended to have more flexible schedules that let them step outside whenever they wished.',
        D:'Most workers in the survey said they enjoyed their midday walks and hoped to continue them.'
      },
      correct:'C',
      expCorrect:'The skeptic says a THIRD factor may explain the pattern. C offers exactly that: the flexible-schedule workers already had better focus AND could also step out for a walk. So the walking and the focus could both come from the flexible schedule rather than one causing the other. That weakens “walking CAUSES focus”.',
      expWrong:{
        A:'Indoor stretching is a different activity; that it does not work says nothing about whether walking outdoors causes the focus.',
        B:'Feeling more relaxed runs in the SAME direction as the conclusion (it would even support it); it does not weaken it.',
        D:'Whether they enjoy the walks is irrelevant to whether those walks CAUSE the better focus.'
      },
      tip:'To weaken a cause-and-effect claim, look for a THIRD factor that explains both things at once, or a reversed cause. Careful: an option that supports runs opposite to “weaken”.'
    },
    {
      id:'COE-04', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"An economist claims that offering free public transit does not, by itself, reduce the number of cars on city roads; instead, she argues, most new transit riders are people who previously walked or biked, not people who previously drove. To evaluate this, a city made its buses free for one year and surveyed the new riders about how they used to travel.",
      stem:'Which finding, if true, would most directly support the economist’s claim?',
      choices:{
        A:'During the free-transit year, total bus ridership in the city roughly doubled compared with the previous year.',
        B:'Among the new bus riders, the large majority reported that before the change they had usually walked or cycled to their destinations.',
        C:'Several nearby cities that kept charging bus fares saw no change in their traffic levels that year.',
        D:'City officials reported that making the buses free was more expensive than they had originally expected.'
      },
      correct:'B',
      expCorrect:'Her specific claim is that the new riders used to walk or bike (not drive), which is why car counts do not fall. B says exactly that: most new users used to walk or bike. It supports the claim on its own terms.',
      expWrong:{
        A:'A rise in total ridership does not say WHERE those riders come from; they could be former drivers, which would work against her. Too vague.',
        C:'It is about other cities that DO charge; it tells you nothing about who the new riders are in the studied city.',
        D:'The cost of the program has nothing to do with whether the riders used to drive or walk. Irrelevant.'
      },
      tip:'When the claim has a precise detail (“they used to walk or bike”), the right evidence mentions THAT detail. A big but generic number (ridership rose) is usually the vague distractor.'
    },
    {
      id:'COE-05', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence',
      passage:"A botanist proposes that a certain desert shrub survives long droughts mainly by storing water in its unusually thick roots, rather than by reducing water loss through its leaves. In a controlled test, she grew forty shrubs, deprived them of water for two months, and recorded both root water content and leaf water loss throughout.",
      stem:'Which finding, if true, would most directly support the botanist’s proposal?',
      choices:{
        A:'Related shrub species that lack thick roots are also able to endure short dry spells.',
        B:'The shrubs’ leaves were coated in a waxy layer that noticeably slowed water loss during the dry period.',
        C:'The shrub grows naturally only in regions that receive fewer than 100 millimeters of rain each year.',
        D:'The shrubs with the thickest, most water-filled roots survived the two-month drought at far higher rates than those with thinner roots.'
      },
      correct:'D',
      expCorrect:'Her proposal is that it survives thanks to water stored in the thick ROOTS, not the leaves. D ties exactly that together: thicker, water-filled roots → far higher survival. It supports the mechanism she points to.',
      expWrong:{
        A:'Relatives without thick roots surviving short droughts would rather weaken the importance of the roots; it does not support it.',
        B:'The waxy layer cuts loss through the LEAVES, which is exactly the explanation she RULED OUT. It supports the opposite idea, not hers.',
        C:'Where the plant grows describes its dry habitat, but does not show that the roots (and not the leaves) are what save it.'
      },
      tip:'Watch the “rather than…” part. An option supporting the REJECTED mechanism (here, the leaves) is a trap: it looks like evidence, but it points the wrong way.'
    },
    {
      id:'COE-06', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"A historian argues that a medieval town’s sudden prosperity in the 1300s came from its role as a hub for the wool trade, not from the silver mine often credited in local legend. She notes that the town’s wealth rose sharply in exactly the decades when European demand for wool was booming.",
      stem:'Which finding, if true, would most strongly support the historian’s argument?',
      choices:{
        A:'The town’s population grew steadily throughout the 1300s.',
        B:'The nearby silver mine was known to have produced high-quality ore in earlier centuries.',
        C:'Town records from the prosperous decades list large numbers of wool merchants and warehouses but almost no income from the mine.',
        D:'Several other towns in the region also grew wealthier during the 1300s.'
      },
      correct:'C',
      expCorrect:'She argues the wealth came from WOOL, not the mine. C gives direct evidence on both sides: many merchants and wool warehouses AND almost no income from the mine. It confirms the source she defends and rules out the one she denies.',
      expWrong:{
        A:'Population growth does not say whether the money came from wool or from the mine; it can happen with either source. Far too vague.',
        B:'The mine yielding good ore in EARLIER centuries would support the mine legend, not the wool argument. Wrong direction.',
        D:'Other towns prospering does not identify the cause in THIS town; it could be down to many things.'
      },
      tip:'When the claim is “A, not B”, the best evidence touches both sides: it confirms A and/or rules out B. An option reinforcing B works against you.'
    },
    {
      id:'COE-07', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"Sleep scientists tested whether learning a new skill right before sleep improves memory of it. Two hundred volunteers practiced the same finger-tapping sequence; half then slept for eight hours while the other half stayed awake for the same period. The next day, everyone was retested. The researchers concluded that sleep, not merely the passage of time, strengthens newly learned motor skills.",
      stem:'Which finding, if true, would most directly support the researchers’ conclusion?',
      choices:{
        A:'The finger-tapping sequence used in the study was similar to ones used in earlier memory research.',
        B:'Volunteers in both groups reported that they found the finger-tapping task enjoyable and easy to understand.',
        C:'Volunteers who slept said they felt more rested and alert during the second test session.',
        D:'Volunteers who slept performed the finger-tapping sequence markedly faster and more accurately the next day than those who stayed awake.'
      },
      correct:'D',
      expCorrect:'The conclusion is that SLEEP (not just the passing of time) strengthens motor memory. Since both groups let the same 8 hours pass, the only difference is sleeping or not. D shows the sleepers improved far more → the gain is due to sleep, not time. Direct support.',
      expWrong:{
        A:'The sequence resembling ones from earlier studies is a methodological detail, irrelevant to the conclusion about sleep.',
        B:'That the task was enjoyable for both groups does not compare PERFORMANCE; it does not say whether sleeping helped.',
        C:'Feeling more rested explains a mood, but does not show that the SKILL (speed and accuracy) improved because of sleep.'
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
        B:'“The city’s widest avenues were originally designed in the nineteenth century to move carriages quickly through the center.”',
        C:'“Several residents remarked that the newly planted trees were still too young to provide much shade.”',
        D:'“The author notes that narrow streets can be more expensive for the city to clean and maintain.”'
      },
      correct:'A',
      expCorrect:'The claim is that narrow, tree-lined streets make people feel SAFER and willing to linger, compared with wide avenues. A shows a resident saying the narrow shaded street invited her to stop, while the wide avenue made her hurry. It illustrates exactly the contrast she defends.',
      expWrong:{
        B:'It tells the HISTORY of why the wide avenues were designed; it says nothing about how pedestrians feel today. Irrelevant to the claim.',
        C:'Trees being too young to give shade rather works against the benefit of tree-lined streets; it does not illustrate the claim.',
        D:'Cleaning and maintenance costs are a different topic; they do not say whether pedestrians feel safe or want to linger.'
      },
      tip:'“Illustrates the claim” = stage exactly what it says. Look for the quote where someone LIVES the described effect (here: lingering on the narrow street, hurrying on the wide one), not history or cost data.'
    },
    {
      id:'COE-09', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"Ecologists reintroduced beavers to a dried-out valley, predicting that the dams the beavers build would raise the water table and allow wetland plants to return. Critics countered that the valley had grown too arid for the animals to make any lasting difference. Three years later, the ecologists surveyed the valley.",
      stem:'Which finding, if true, would most directly support the ecologists’ prediction?',
      choices:{
        A:'Beaver populations in other, wetter valleys had remained stable over the same three years.',
        B:'The reintroduced beavers were the same species that had historically lived throughout the valley.',
        C:'Local residents reported enjoying the sight of the beavers along the stream.',
        D:'In the stretches of the valley where beavers built dams, the water table rose and wetland plants spread widely, while undammed stretches stayed dry.'
      },
      correct:'D',
      expCorrect:'The prediction is that beaver dams would raise the water level and bring wetland plants back. D shows exactly that chain where dams EXIST (water rises + plants return) and compares it with stretches WITHOUT dams that stay dry. It links the cause (dams) to the predicted effect.',
      expWrong:{
        A:'Beavers in other, wetter valleys say nothing about what happened in THIS dry one. It does not touch the prediction.',
        B:'Them being the same historical species is background; it does not show the dams raised the water or that the plants returned.',
        C:'Neighbors enjoying the sight of beavers is irrelevant to water level or vegetation.'
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
        B:'Gardeners in the study reported spending an average of four hours per week tending their plots.',
        C:'Non-gardeners in the study said they would consider starting a garden if they had more space.',
        D:'The vegetables most commonly grown by the gardeners were tomatoes, peppers, and lettuce.'
      },
      correct:'A',
      expCorrect:'The conclusion is that gardening ITSELF makes people eat more vegetables. A knocks it down: if the gardeners already ate more vegetables YEARS BEFORE they started growing, then gardening is not what changed them; they were already like that. The proposed cause collapses.',
      expWrong:{
        B:'How many hours they spend gardening describes the habit, but does not say whether eating more vegetables comes from growing them or from something else. It does not weaken.',
        C:'What NON-gardeners would do with more space is hypothetical and irrelevant to the cause of vegetable consumption.',
        D:'Which vegetables they grow is a detail about the harvest; it does not touch whether gardening causes eating more. Too far off to the side.'
      },
      tip:'To weaken “X causes Y”, the strongest move is showing that Y already existed BEFORE X. If they ate more vegetables before having a garden, gardening cannot have been the cause.'
    }
  ]
});
