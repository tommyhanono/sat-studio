/* SAT Studio question set — Reading & Writing: Command of Evidence: Textual — Set A (EVA-01 to EVA-34) */
/* Destreza oficial "Command of Evidence: Textual" del dominio Information and Ideas.
   Tres tercios: 12 que APOYAN una hipotesis cientifica (EVA-01..12), 11 que la
   DEBILITAN (EVA-13..23) y 11 de CITA literaria que ilustra una afirmacion sobre
   un texto (EVA-24..34).
   Los distractores siguen siempre el mismo reparto: uno apoya una afirmacion
   parecida pero distinta, otro es compatible con la hipotesis sin ser evidencia
   de ella, y el tercero apunta a la variable equivocada. En las de cita, las
   tres citas malas son de la misma obra inventada y suenan bien pero ilustran
   otra cosa (una mitad del reclamo, ambiente, o el metodo contrario).
   Obras y personas: todas inventadas. */
(function(){
  window.SAT_SETS.push({
    id: 'rw-evid-a',
    title: 'Command of Evidence: Textual — Set A',
    section: 'rw',
    level: 'Media',
    description: 'Which finding would support or weaken a hypothesis, and which quotation illustrates a claim about a text: 34 questions in three thirds.',
    minutes: 42,
    questions: [
      {
        id:'EVA-01', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"An agricultural entomologist planted a strip of wildflowers along one edge of a squash field. She hypothesizes that the strip raises the field’s own harvest by drawing in wild bees that then pollinate the squash flowers, not merely by giving bees a place to live.",
        stem:'Which finding, if true, would most strongly support the entomologist’s hypothesis?',
        choices:{
          A:"Squash rows within 20 meters of the wildflower strip set 31 percent more fruit than rows at the far end of the same field.",
          B:"The wildflower strip drew 14 species of wild bees, 5 more than were counted along the untouched edge of the field.",
          C:"Squash plants given twice the usual fertilizer produced 28 percent more fruit each than plants given the standard amount.",
          D:"Beekeepers who rent hives to squash growers in the area charge about 40 percent more per hive than they did a decade ago."
        },
        correct:'A',
        expCorrect:"Her hypothesis names a specific outcome — more squash on the plants — and a specific cause: bees pulled in by the strip. A links the two, and does it inside one field, where soil and weather are held still: the closer a row sits to the strip, the more fruit it sets. That is the harvest rising with nearness to the flowers.",
        expWrong:{
          B:"More bee species along the strip shows the strip houses bees, which is the half she explicitly set aside. Bees can be present in numbers and still never visit a squash flower.",
          C:"Fertilizer is a different variable altogether. It shows that something else raises fruit set, which leaves the wildflowers exactly where they were.",
          D:"The rental price of hives measures what pollination costs growers. It says nothing about whether this strip pollinated this field."
        },
        tip:'Support means matching the exact outcome in the claim to the exact cause in the claim. A finding about the cause alone (bees are here) or about a rival cause (fertilizer) cannot do it.'
      },
      {
        id:'EVA-02', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"A materials scientist studying a 2,000-year-old harbor wall argues that its concrete has grown stronger with age: seawater seeping through the blocks reacts with volcanic ash in the mix to grow interlocking crystals that knit the small cracks shut.",
        stem:'Which finding, if true, would most strongly support the scientist’s argument?',
        choices:{
          A:"Modern cement piers built in the same bay lose roughly 15 percent of their strength within 50 years of exposure to the same seawater.",
          B:"Chemical tracing shows the volcanic ash in the wall was quarried about 200 kilometers up the coast and carried to the site by ship.",
          C:"Blocks that have sat in seawater longest hold the most interlocking crystals, and they withstand about 20 percent more crushing force.",
          D:"Divers report that fish and coral now shelter in the pitted outer surface of the wall, which is rougher than it was when first built."
        },
        correct:'C',
        expCorrect:"The argument has two halves: seawater plus ash grows crystals, and the concrete therefore gains strength over time. C carries both. Time in seawater tracks the crystals (the mechanism) and tracks crushing strength (the outcome) in the same blocks, so the longer the reaction has run, the stronger the concrete is.",
        expWrong:{
          A:"This says modern concrete decays. It makes the ancient wall look good by comparison, but the claim is that this wall GAINED strength, and nothing here measures that.",
          B:"Where the ash was quarried tells you how the wall was supplied. Sourcing is a fact about construction, not about what happened to the concrete over 2,000 years.",
          D:"A rough, pitted surface describes what the sea did to the outside of the wall. It touches neither the crystals in the mix nor the strength of the blocks."
        },
        tip:'A claim of "it gets stronger over time" needs a measurement that varies WITH time. Prefer the option that compares old with new in the same material, not one that compares this material with a different one.'
      },
      {
        id:'EVA-03', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"When a district moved its high school start time from 7:25 a.m. to 8:30 a.m., morning alertness scores rose. A sleep researcher argues that the gain comes from students sleeping longer at night, rather than from students catching up with naps after school.",
        stem:'Which finding, if true, would most strongly support the researcher’s explanation?',
        choices:{
          A:"Students reported feeling less rushed in the morning, and tardy arrivals at first period fell by about a third after the change.",
          B:"Wrist monitors worn by 300 students recorded 38 more minutes of nightly sleep after the change, while their afternoon nap time held steady.",
          C:"Ninth graders in the district go to bed an average of 40 minutes earlier than twelfth graders do on a typical school night.",
          D:"Afternoon practices for school teams were pushed back by an hour, and coaches report that attendance at them has improved."
        },
        correct:'B',
        expCorrect:"His explanation names two things at once: night sleep went UP and napping did NOT. B measures both, in the same students, before and after: 38 extra minutes at night with nap time unchanged. The rival route is closed off by the same data that opens his.",
        expWrong:{
          A:"Fewer tardies and a calmer morning are real improvements, but they describe the routine of getting to school. No one’s sleep is measured, so naps remain just as live an explanation.",
          C:"This compares two grades with each other at one moment. The claim is about a change in the same students before and after the new start time.",
          D:"Later practices are a consequence of the new schedule, not a measure of sleep. Attendance at practice cannot tell night sleep from an afternoon nap."
        },
        tip:'When a claim says "because of X, not Y," the evidence has to measure BOTH: the route that supposedly rose and the route that supposedly did not.'
      },
      {
        id:'EVA-04', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"A city planner had the roofs of a public housing block painted white. She claims the paint cools the apartments beneath the roof, not just the roof surface itself, and wants the program extended to the rest of the district.",
        stem:'Which finding, if true, would most strongly support the planner’s claim?',
        choices:{
          A:"A thermal camera recorded the painted roof surface reaching 21 °C cooler at midday than the dark roof on the building next door.",
          B:"The white paint reflects about 80 percent of the sunlight that lands on it, while the older dark coating reflected roughly 10 percent.",
          C:"Streets lined with young shade trees in the same neighborhood measured 1.5 °C cooler at noon than nearby streets with no trees at all.",
          D:"Apartments under the newly painted half of the roof averaged 2.8 °C cooler at 3 p.m. than the apartments under the untouched half."
        },
        correct:'D',
        expCorrect:"Her claim is about the air INSIDE the apartments, and D is the only option that goes indoors. Better still, it compares apartments in the same building under painted and unpainted halves of one roof, so the tenants, the windows and the weather are the same and only the paint differs.",
        expWrong:{
          A:"A cooler roof surface is exactly the half of the result she set aside. A roof can shed heat at the top and still pass plenty of it into the rooms below.",
          B:"Reflectance explains WHY white paint could work. A mechanism makes the claim plausible, but no temperature inside any apartment is measured here.",
          C:"Shade trees are a different cooling method on a different surface. The finding supports planting trees, not painting roofs."
        },
        tip:'Check where the claim is located — indoors, downstream, in the crop — and pick the option measured in that same place. Mechanism and surface-level effects are the standard near misses.'
      },
      {
        id:'EVA-05', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"In a noisy port city, house sparrows sing at a higher pitch than sparrows of the same species in nearby farmland. An ornithologist proposes that the birds raise their pitch in response to low-frequency traffic noise, which would otherwise bury their songs, rather than city birds simply being born with higher voices.",
        stem:'Which finding, if true, would most strongly support the ornithologist’s proposal?',
        choices:{
          A:"City sparrows weigh about 8 percent less than the farmland birds, and across songbirds a smaller body generally means a higher pitch.",
          B:"The same tagged city sparrows sing about 300 hertz higher during rush hour than they do on the same corner at 4 a.m., when traffic is light.",
          C:"Traffic noise in the port district is concentrated below 2,000 hertz, the range that overlaps most closely with the song of a house sparrow.",
          D:"Sparrows are one of 11 songbird species that have spread into the port district since the harbor was expanded in the 1990s."
        },
        correct:'B',
        expCorrect:"A response is something an individual does when conditions change, so the test has to watch the same birds under both conditions. B does: the same tagged sparrows, on the same corner, sing 300 hertz higher when traffic is loud and drop back when it is not. Only the noise changed, so the pitch is a response and not a trait they were hatched with.",
        expWrong:{
          A:"This is evidence for the rival explanation. If city birds are smaller and small birds sing higher, pitch would be something they were born with, which is what the ornithologist denies.",
          C:"Overlapping frequencies explain why raising the pitch WOULD help. The mechanism becomes believable, but not one sparrow is measured, so the birds may not be doing it.",
          D:"A count of species that moved into the district describes who lives there now. It never touches how any individual bird’s song changes with the noise around it."
        },
        tip:'For "X responds to Y," the strongest evidence is a within-individual comparison: the same subjects measured when Y is high and when Y is low. A difference between two groups can always be a trait instead.'
      },
      {
        id:'EVA-06', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"A duck-billed dinosaur carried a hollow, curved crest on its skull. One paleontologist argues that the crest worked as a resonating chamber for producing low calls, rather than as a visual signal for attracting mates.",
        stem:'Which finding, if true, would most strongly support the paleontologist’s argument?',
        choices:{
          A:"CT scans show the crest’s tubes link the nostrils to the windpipe, and a printed model resonates at 30 hertz when air is pushed through.",
          B:"Males and females carried crests of noticeably different size and curve, a contrast that stayed visible from a distance across open ground.",
          C:"Crests grew steadily larger as an animal aged, reaching their full size only in the largest adults recovered from the bone bed.",
          D:"Fossils of the species turn up at 14 sites across the region, always in sediments laid down by slow, meandering rivers."
        },
        correct:'A',
        expCorrect:"For the crest to be an instrument, two things have to be true: air must pass through it, and its shape must make sound. A supplies both — the tubes are plumbed into the airway, and a model of that geometry actually resonates at a low frequency when air moves through it.",
        expWrong:{
          B:"A crest that differs between males and females and reads from a distance is the display explanation, spelled out. That is the rival the paleontologist is arguing against.",
          C:"Growth with age fits either job equally: a signal grows more impressive with size, and so does a horn or a resonator. A fact both sides predict settles nothing.",
          D:"Where the fossils were buried describes the animal’s habitat. River sediments say nothing about what the structure on its head was for."
        },
        tip:'For "this body part did job X," look for functional evidence: the anatomy permits X and a test shows X actually happens. Facts that fit both candidate jobs (size, age, habitat) cannot separate them.'
      },
      {
        id:'EVA-07', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"Students who take lecture notes by hand often recall the material better than students who type. A cognitive scientist argues that the advantage comes from what writing forces students to do — condense ideas into their own words — rather than from the physical act of handwriting.",
        stem:'Which finding, if true, would most strongly support the scientist’s explanation?',
        choices:{
          A:"Handwritten notes in the study contained about 40 percent fewer words per minute of lecture than the typed notes did.",
          B:"Students who typed their notes checked messages on their laptops during roughly a quarter of the lecture time.",
          C:"Students who reread their notes within a day of the lecture scored higher on the recall test than students who never reread them.",
          D:"Typists told to summarize each point in their own words matched the handwriters’ recall scores; typists copying word for word did not."
        },
        correct:'D',
        expCorrect:"The claim is that condensing does the work, not the pen. D separates the two: the keyboard is held constant while the instruction changes, and the advantage follows the condensing. Summarizing typists reach the handwriters’ scores; verbatim typists do not. The pen turns out to be optional and the condensing does not.",
        expWrong:{
          A:"Fewer words per minute shows that handwriting is slower, which is consistent with the story but measures no one’s recall. Slowness might help for reasons that have nothing to do with condensing.",
          B:"Laptop distraction is a rival explanation for the typists’ weaker recall. It blames the company the keyboard keeps rather than testing the claim about condensing.",
          C:"Rereading helps everyone, handwriters and typists alike. The comparison here is reviewers against non-reviewers, which is not the contrast in the claim."
        },
        tip:'When a claim isolates a mechanism inside a familiar result, look for the study that varies the mechanism while holding the surface feature fixed — same keyboard, different instructions.'
      },
      {
        id:'EVA-08', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"A mountain glacier slides downhill faster each summer than it did a decade ago. One glaciologist attributes the speedup to meltwater draining through shafts to the glacier’s bed, where it lubricates the contact between ice and bedrock, rather than to warmer air thinning the ice from above.",
        stem:'Which finding, if true, would most strongly support the glaciologist’s explanation?',
        choices:{
          A:"Average summer air temperature at the glacier has risen about 1.4 °C since the first instruments were installed there in 1986.",
          B:"The glacier has lost roughly 18 meters of thickness at its midpoint across three decades of repeat survey flights over the valley.",
          C:"GPS stakes show the ice accelerating within hours of meltwater reaching the bed, and slowing again once the drainage channels open and empty.",
          D:"Meltwater streams leaving the glacier’s snout carry about three times more sediment in August than the same streams carry in June."
        },
        correct:'C',
        expCorrect:"Lubrication is a fast mechanism, so it predicts a fast, tightly timed response: water reaches the bed, the ice speeds up within hours, and it slows when the water drains away. C records exactly that pattern. Thinning from warm air could not switch on and off in a matter of hours.",
        expWrong:{
          A:"Warmer summers are where the rival explanation starts, and they are equally compatible with more meltwater. A fact both sides predict cannot choose between them.",
          B:"Thinning measures how much ice has been lost, which is the rival’s variable. Losing thickness is not the same as sliding faster, and nothing here links the two.",
          D:"Sediment at the snout shows water is moving under the ice, so it fits the picture. But it is measured at the outlet, months at a time, and never lines up with when the ice sped up."
        },
        tip:'Match the TIME SCALE of the option to the time scale of the proposed mechanism. A cause that acts in hours should leave a signature in hours, not a seasonal average.'
      },
      {
        id:'EVA-09', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"After a transit agency cut bus fares by half, weekday ridership rose 22 percent. An economist argues that the increase came from people who had not been riding the bus at all, rather than from regular riders simply taking more trips than before.",
        stem:'Which finding, if true, would most strongly support the economist’s argument?',
        choices:{
          A:"First-time fare cards accounted for 19 of the 22 percentage points of new weekday ridership in the months after the cut.",
          B:"Weekday ridership rose most sharply on the four routes serving the neighborhoods where car ownership is lowest in the city.",
          C:"Riders surveyed at three downtown stops said the lower fare saves a typical daily commuter about 24 dollars every month.",
          D:"Trips taken on weekends, when the fare had already been discounted for years, grew by only 3 percent over the same period."
        },
        correct:'A',
        expCorrect:"His argument is about WHO produced the increase: new riders, not old riders riding more. A counts them directly. Cards issued for the first time carry 19 of the 22 points, so almost the whole increase belongs to people who were not riding before.",
        expWrong:{
          B:"Where the growth happened tells you which neighborhoods rode more, not whether the riders are new. A low-car neighborhood can be full of longtime riders adding trips.",
          C:"Dollars saved measure the size of the discount. Regular riders pocket that money too, so the figure cannot tell the two groups apart.",
          D:"Flat weekend numbers fit his story — a discount already in place changes nothing — but the finding counts trips, not riders, so it cannot separate new riders from frequent ones."
        },
        tip:'When the claim is about WHICH PEOPLE produced a change, pick the option that counts people: new accounts, first-time users, unique visitors. Options that count trips, dollars or places leave the question open.'
      },
      {
        id:'EVA-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"Charred grains of a cereal turn up at a highland village occupied between 4,300 and 3,600 years ago. One archaeobotanist argues that the villagers cultivated the cereal themselves, selecting it gradually over generations, rather than obtaining it in trade from the lowland farms where the crop is first known.",
        stem:'Which finding, if true, would most strongly support the archaeobotanist’s argument?',
        choices:{
          A:"Lowland farming villages of the same period grew the cereal in quantity and regularly sent salt and painted pottery up into the highlands.",
          B:"The cereal appears in every occupation layer at the village, from the earliest packed floors to the latest ones excavated.",
          C:"Grinding stones at the village carry starch residues from the cereal, showing that the villagers milled it into flour on site.",
          D:"Grain size at the village climbs steadily across the seven centuries of occupation, and the weed seeds mixed in grow only on highland soils."
        },
        correct:'D',
        expCorrect:"Local cultivation predicts two things trade cannot produce. First, gradual change in the grain itself, because selection works generation after generation on the same fields — the steady climb in grain size. Second, the field has to be up there, and the weeds harvested alongside the crop are highland weeds. Imported grain would arrive already large and would bring lowland weeds with it.",
        expWrong:{
          A:"A lowland surplus plus an established route into the highlands is the rival explanation, laid out in full. It makes imported grain easier to believe, not harder.",
          B:"Grain in every layer shows how long the village had the cereal, not where it came from. Seven centuries of steady trade would leave exactly the same pattern.",
          C:"Starch on grinding stones shows the villagers ate it. Flour can be milled from grain that arrived on somebody else’s back."
        },
        tip:'To show something was produced LOCALLY rather than imported, look for evidence tied to the local ground (local weeds, local isotopes) or for gradual change on site. Evidence of mere presence or use fits importing just as well.'
      },
      {
        id:'EVA-11', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"A shallow lake’s plankton collapsed over one decade, and its perch fishery collapsed with it. Fertilizer use on the surrounding farms climbed during those same years, and an invasive filter-feeding mussel spread across the lake bottom during those same years as well. One limnologist argues that the mussels, not the fertilizer, drove the plankton down.",
        stem:'Which finding, if true, would most strongly support the limnologist’s argument?',
        choices:{
          A:"Water clarity in the lake improved sharply over the decade, so that the bottom is now visible at 4 meters instead of at 1 meter.",
          B:"Across 30 lakes in the region, plankton fell only where mussels arrived, with no relation to how much fertilizer each lake’s farms applied.",
          C:"Perch feed on plankton through their first two summers, and hatchery surveys find that few perch in the lake now survive their first year.",
          D:"Mussel shells now cover roughly 60 percent of the lake bottom, up from none at all before the first shells were recorded there in 2009."
        },
        correct:'B',
        expCorrect:"Two suspects rose together in one lake, so no measurement taken inside that lake can pull them apart. B gets the two to vary independently by going to 30 lakes: plankton fell wherever mussels arrived, and tracked fertilizer not at all. That is precisely the comparison the single-lake record cannot supply.",
        expWrong:{
          A:"Clearer water is mostly the plankton loss seen from above — the thing to be explained, restated. Whatever removed the plankton, mussels or fertilizer, the water gets clearer.",
          C:"This traces the damage forward, from missing plankton to missing perch. It explains why the fishery failed, not which suspect emptied the water in the first place.",
          D:"A lake floor 60 percent covered in shells shows the suspect is present and abundant. So is the fertilizer: both rose together, which is exactly why abundance alone decides nothing."
        },
        tip:'When two causes rise together in one place, the decisive evidence comes from cases where they come apart — many sites where one is present and the other is not. Amount, timing and downstream damage in the single case cannot separate them.'
      },
      {
        id:'EVA-12', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"A printing shop’s yearly output of books tripled between 1817 and 1824. A historian of technology argues that the jump came from a new typesetting method the shop adopted in those years, rather than from the shop simply hiring more workers.",
        stem:'Which finding, if true, would most strongly support the historian’s argument?',
        choices:{
          A:"The shop’s ledgers record the purchase of a second press and a new set of drying racks in the spring of 1819.",
          B:"Books printed by the shop after 1820 sold for about a third less than the books it had printed a decade earlier.",
          C:"Pages set per worker-hour doubled in the same quarter the new method first appears in the ledgers, while the payroll stayed at 11 names.",
          D:"Two rival shops in the city closed between 1818 and 1823, and their regular customers’ orders begin appearing in this shop’s books."
        },
        correct:'C',
        expCorrect:"The claim pits method against headcount, so the evidence has to hold headcount still. C does both jobs at once: output per worker-hour doubles exactly when the method shows up, and the payroll is frozen at 11 names. More books out of the same hands is what a better method looks like; more hands would have moved the payroll.",
        expWrong:{
          A:"A second press and new racks are extra equipment — a third explanation for more books, and not the one the historian is defending.",
          B:"A lower price tells you what buyers paid. Cheaper books may follow from cheaper production, but this measures the market rather than the shop floor.",
          D:"Rivals closing explains where the ORDERS came from. Demand tells you why the shop had work, not how it managed to print three times as much of it."
        },
        tip:'"The cause was X, not more labor" is settled by a RATE: output per worker or per hour. A raw total rises for either reason; the rate rises only if the work itself got more efficient.'
      },
      {
        id:'EVA-13', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A café owner introduced a punch card offering a free drink after ten purchases. Sales over the three months that followed ran 18 percent above the three months before, and she concludes that the punch card is bringing customers back more often.",
        stem:'Which finding, if true, would most seriously weaken the owner’s conclusion?',
        choices:{
          A:"A coworking space with 200 desks opened next door the week the card launched, and most of the new sales are to its members.",
          B:"About 40 percent of the punch cards handed out in the first month were never brought back to the counter to be stamped again.",
          C:"Each free drink handed out on a completed card costs the café about 90 cents in milk, coffee beans and the paper cup.",
          D:"Two other cafés within a kilometer began offering punch cards of their own after seeing hers on the counter by the register."
        },
        correct:'A',
        expCorrect:"Her conclusion is that the CARD produced the rise. A supplies a rival cause that starts in the very same week and is big enough to account for the increase: 200 people now working next door, and most of the new sales are theirs. With the timing identical and the size sufficient, the 18 percent no longer points at the card.",
        expWrong:{
          B:"Unreturned cards show the program does not grip everyone, but the other 60 percent came back with them. A partly used program can still lift sales; this dents the card without explaining the rise.",
          C:"Ninety cents a drink is a fact about cost. It bears on whether the program is profitable, not on whether it changed anyone’s habits.",
          D:"Rival owners copying the idea shows the card looks attractive to other businesses. It says nothing about what caused her own increase."
        },
        tip:'To weaken "X caused Y," the strongest move is a rival cause that starts at the same time and is large enough to produce Y on its own. Facts about the cost, the popularity or the imperfections of X leave the causal story standing.'
      },
      {
        id:'EVA-14', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A survey of 900 middle schoolers found that students who eat breakfast on school days score higher on morning math quizzes than students who skip it. A nutrition writer concludes that eating breakfast improves quiz performance.",
        stem:'Which finding, if true, would most seriously weaken the writer’s conclusion?',
        choices:{
          A:"Breakfast eaters in the survey also reported feeling less hungry during third period than the students who had come to school without eating.",
          B:"The quizzes were given at 9:15 a.m., roughly two hours after most students in the survey had finished eating at home.",
          C:"Students who eat breakfast sleep an hour longer on average, and rested students outscored tired ones whether or not they had eaten.",
          D:"Roughly a third of the students in the survey said they eat the same brand of cereal nearly every school morning of the year."
        },
        correct:'C',
        expCorrect:"The two groups differ in more than breakfast, and C names the difference that does the work. Breakfast eaters are also better rested, and sleep predicts the scores even among students who ate nothing. The quiz gap can be sleep wearing a breakfast costume, which is what a confounding variable means.",
        expWrong:{
          A:"Less hunger by third period is what eating does, and it runs alongside the writer’s story rather than against it. It also measures appetite, never a quiz score.",
          B:"A two-hour gap between the meal and the quiz does not undo the meal. Food eaten at seven is still doing its work at 9:15, so the link survives.",
          D:"Cereal brand is a detail about what the breakfast eaters eat. Unless the brand changes scores, it leaves the comparison exactly where it was."
        },
        tip:'A correlation between two groups is weakened by naming a THIRD thing the groups differ in that produces the outcome on its own. Details about the size, timing or flavor of the behavior do not.'
      },
      {
        id:'EVA-15', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A company reports that people who install its step-tracking app walk 2,400 more steps a day in the month after installing it than in the month before, which the app reads from the step counts already stored on the phone. The company concludes that the app gets people walking.",
        stem:'Which finding, if true, would most seriously weaken the company’s conclusion?',
        choices:{
          A:"The app sends a reminder each evening at seven o’clock to users who are still short of the daily step goal they chose.",
          B:"Users who set a daily step goal inside the app walked about 600 more steps per day than users who never set one at all.",
          C:"The average user opened the app 14 times during the first week and only 4 times during the fourth week of use.",
          D:"Most installs happen the week someone joins a gym or in early January, when a person’s walking climbs anyway."
        },
        correct:'D',
        expCorrect:"A before-and-after comparison inside the same people looks strong until you ask WHEN people enter it. D answers: they install the app at the exact moment their walking was already about to rise — a new gym membership, a new year. The 2,400 steps would have arrived with no app on the phone at all.",
        expWrong:{
          A:"Reminders describe how the app is built. A feature existing is not evidence that the feature changed anyone’s behavior.",
          B:"Goal-setters out-walking everyone else points the same way the company does. It is a finding in favor, not a problem for the claim.",
          C:"Opens falling from 14 to 4 shows fading interest in the app. Fading attention can still leave a walking habit behind, so the measured steps stand."
        },
        tip:'Any before-and-after claim is weakened by showing that people ENTER the "after" period at a special moment, when the outcome was already rising. That is selection by timing, and no feature of the product answers it.'
      },
      {
        id:'EVA-16', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"At an upland site, a ring of standing stones has a gap through which the midsummer sun rises when the ring is viewed from its center. An archaeologist concludes that the builders, working around 2,500 BCE, laid the ring out deliberately to mark the solstice.",
        stem:'Which finding, if true, would most seriously weaken the archaeologist’s conclusion?',
        choices:{
          A:"Charcoal from a hearth at the circle’s center returns dates between 2,600 and 2,400 BCE, matching the proposed building period.",
          B:"Photographs show the two stones framing the gap lay flat on the ground until a landowner had them re-erected, by guesswork, in 1887.",
          C:"Sixteen other stone rings stand within 40 kilometers, and the largest of them is nearly twice this circle’s diameter across.",
          D:"The site sits on a ridge from which the surrounding valleys are hidden by low cloud through much of the winter."
        },
        correct:'B',
        expCorrect:"The whole argument rests on the gap pointing where it points. B pulls that foundation out: the two stones that make the gap were lying down until a Victorian landowner stood them up again, guessing at their positions. The alignment being measured is his, not the builders’, so it can say nothing about 2,500 BCE.",
        expWrong:{
          A:"Dates that match the building period strengthen the case that the circle is as old as claimed. That is the opposite of weakening it.",
          C:"A larger ring nearby is a fact about the neighbors. Size has no bearing on whether this particular gap was aimed at the solstice.",
          D:"Winter cloud hides the valleys below, but the claim concerns the MIDSUMMER sunrise on the horizon. Wrong season, and the wrong direction to look."
        },
        tip:'An argument from alignment depends on the alignment being original. Ask whether the thing measured still stands where the builders left it — a restoration, a move or a rebuild destroys the inference.'
      },
      {
        id:'EVA-17', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A slender pedestrian bridge over a river sways noticeably from side to side on some days. The engineer who inspected it concludes that gusting crosswinds funneled along the river channel are shaking the deck.",
        stem:'Which finding, if true, would most seriously weaken the engineer’s conclusion?',
        choices:{
          A:"The largest sway on record, 9 centimeters, occurred on a still evening with a crowd of 400 people crossing after a concert.",
          B:"Wind speeds in the river channel reach 60 kilometers per hour during autumn storms, the windiest season anywhere on the river.",
          C:"The bridge’s deck is made of a lightweight aluminum alloy, about a third the weight of the concrete deck that it replaced.",
          D:"Two similar bridges built by the same firm elsewhere in the country have needed dampers installed underneath their decks."
        },
        correct:'A',
        expCorrect:"Weakening a causal claim means finding the effect where the proposed cause is absent. A does it in the strongest form available: the worst sway ever recorded happened with no wind at all and 400 people walking across. Something other than wind can shake this deck, and it shook it harder than the wind ever has.",
        expWrong:{
          B:"Strong seasonal winds show the proposed cause exists in the area. That backs the engineer rather than undermining him.",
          C:"A light deck explains why the bridge is easy to shake — by wind or by footsteps alike. It tells you the deck is susceptible, not what is doing the shaking.",
          D:"Dampers on sister bridges show that this family of designs sways. The cause of the swaying is exactly what remains open."
        },
        tip:'The cleanest weakener for "X causes Y" is a case with Y at full strength and X absent. Evidence that X exists in the area, or that Y is easy to produce, does not touch the claim.'
      },
      {
        id:'EVA-18', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A food historian argues that a bitter yellow spice entered the region’s cooking through the coastal port of Ardhem, which opened to long-distance shipping in 1508, and spread inland from there over the following century.",
        stem:'Which finding, if true, would most seriously weaken the historian’s argument?',
        choices:{
          A:"Customs registers kept at Ardhem list the spice among the port’s imported goods in every year from 1511 onward.",
          B:"The spice grows only in a climate warmer than any part of the region, so every gram of it must have arrived through trade.",
          C:"Household recipe books from three inland towns call for the spice by name in the 1460s, four decades before the port opened.",
          D:"Cooks in the region today use about four times as much of the spice as cooks in the neighboring region to the north do."
        },
        correct:'C',
        expCorrect:"The argument carries a route and a date: in through Ardhem after 1508, then inland. C reverses both at once. Inland households were already cooking with the spice in the 1460s, forty years before the port existed, so the spice cannot have come in through that door and traveled inland from it.",
        expWrong:{
          A:"Registers from 1511 confirm the spice passed through the port. That is the historian’s own evidence, extended rather than challenged.",
          B:"Knowing it had to be imported establishes that trade brought it, which both sides accept. The question is WHICH route, and this option does not address it.",
          D:"Modern quantities describe today’s taste. How much is used now says nothing about where the spice first entered five centuries ago."
        },
        tip:'A route-and-date claim dies on chronology. Look for the option that places the thing at the destination BEFORE the proposed route existed.'
      },
      {
        id:'EVA-19', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A curator attributes an unsigned portrait to the painter Halvard Nesse, noting that its background uses a rare blue pigment that Nesse is known to have bought in quantity during the 1740s.",
        stem:'Which finding, if true, would most seriously weaken the curator’s attribution?',
        choices:{
          A:"A letter from the painter’s dealer records delivering nine jars of the rare blue pigment to his studio in the spring of 1742.",
          B:"The portrait’s sitter wears a style of lace collar that went out of fashion within a decade of the painting’s likely date.",
          C:"The painter’s signed works show a clear preference for the three-quarter pose used in the unsigned portrait as well.",
          D:"Account books show that nine other studios in the city bought the same blue from the single supplier who stocked it."
        },
        correct:'D',
        expCorrect:"The attribution treats the pigment as a fingerprint — a material only Nesse had. D removes the exclusivity: nine other studios bought the identical blue from the same supplier. The pigment now narrows the painter down to the city, which is no attribution at all.",
        expWrong:{
          A:"A delivery of nine jars to Nesse’s studio confirms that he owned the pigment. That is the curator’s premise restated, not a problem for it.",
          B:"A dated collar helps place the portrait in TIME. A date that sits inside Nesse’s working years points toward him rather than away.",
          C:"A shared preference for the three-quarter pose is a second point of resemblance. It pushes the attribution along instead of back."
        },
        tip:'An attribution built on a distinctive trait collapses if the trait turns out to be common. Attack the word "rare": show how many others had access to the same material or habit.'
      },
      {
        id:'EVA-20', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"Volunteers who played a fast-paced matching game for six weeks improved at the game and also improved on a computerized attention test given afterward. The developers conclude that the game strengthens attention in general, including at work and at school.",
        stem:'Which finding, if true, would most seriously weaken the developers’ conclusion?',
        choices:{
          A:"Volunteers’ scores on the game itself climbed steeply for about three weeks and then flattened out for the rest of the study.",
          B:"The attention test uses the same matching-by-color rule as the game, and volunteers gained nothing on three unrelated attention tasks.",
          C:"Volunteers who played the game for six weeks reported enjoying it and said that they felt sharper by the end of the study.",
          D:"A control group that played a word puzzle for six weeks improved on the word puzzle but not on the matching game."
        },
        correct:'B',
        expCorrect:"\"Attention in general\" means gains that show up away from the trained task. B reports the opposite: the only test that moved shares the game’s own rule, and three unrelated attention tasks did not budge. What improved is the game and its twin, which is practice, not a broader ability.",
        expWrong:{
          A:"A learning curve that flattens describes how fast players got good at the game. Plateau or no plateau, the question is whether anything transferred beyond it.",
          C:"Feeling sharper is the self-report that objective testing is supposed to check. It runs with the developers’ story rather than against it.",
          D:"A control group failing to improve at an activity it never practiced is the expected pattern. It says nothing about whether the game’s gains reach past the game."
        },
        tip:'"General improvement" claims live or die on TRANSFER. Ask how closely the outcome measure resembles the training: if they share a rule, the result is practice at the test.'
      },
      {
        id:'EVA-21', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A valley town flooded in September, after loggers had cleared much of the forest on the slopes above it during the preceding two years. A hydrologist concludes that the clearing caused the flood by letting rain run off the bare hillsides instead of soaking into the ground.",
        stem:'Which finding, if true, would most seriously weaken the hydrologist’s conclusion?',
        choices:{
          A:"The neighboring valley, still fully forested, flooded to the same depth that week under the heaviest rainfall recorded since 1901.",
          B:"Bare slopes in the cleared area shed about 30 percent more water per hour than forested slopes did in side-by-side test plots.",
          C:"Logging in the region runs under a permit system that requires companies to replant within three years of any clearance.",
          D:"Soil washed off the cleared slopes has raised the riverbed downstream by about 40 centimeters since the logging began."
        },
        correct:'A',
        expCorrect:"One town, one flood and one suspect cannot be separated without a comparison case, and A supplies it: same storm, forest intact, same flood depth. If forest cover made the difference the hydrologist claims, the forested valley should have been spared. Record rainfall explains both floods with no logging required.",
        expWrong:{
          B:"Test plots showing bare ground shedding more water back the hydrologist’s mechanism. This is evidence FOR the conclusion, not against it.",
          C:"Permit rules describe what loggers are supposed to do afterward. Replanting policy has no bearing on what happened in the valley in September.",
          D:"A rising riverbed shows the clearing did move soil, which fits the picture of damaged slopes. It still does not show that the clearing, rather than the rain, produced the flood."
        },
        tip:'A single event with a single suspect is weakened by a comparison case: same trigger, no suspect, same outcome. Look for the option that supplies the missing control.'
      },
      {
        id:'EVA-22', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A mountain district reports an unusual number of residents past the age of 100, and a dietitian credits their daily diet of barley, greens and fermented milk. She points out that the same three staples appear in every household she visited.",
        stem:'Which finding, if true, would most seriously weaken the dietitian’s explanation?',
        choices:{
          A:"Laboratory tests rank the district’s fermented milk among the richest in live cultures of 40 samples taken across the province.",
          B:"Households in the district have eaten the same three staples since at least the 1880s, according to surviving parish records.",
          C:"The district lies 2,000 meters above sea level, where the growing season for barley lasts only about four months.",
          D:"Birth records in the district were destroyed in a fire in 1931, and ages since then rest on residents’ own recollections."
        },
        correct:'D',
        expCorrect:"Before a cause can be found, the effect has to be real. D attacks the effect: with the birth records burned and ages resting on memory, the district may simply have more overstated ages rather than more centenarians. If the striking statistic is an artifact of missing paperwork, there is nothing left for barley to explain.",
        expWrong:{
          A:"Rich live cultures argue that the food is nutritious, which is a reason to expect the diet to help. This leans toward the dietitian instead of against her.",
          B:"A diet unchanged since the 1880s is exactly what her explanation assumes. A fact the hypothesis predicts cannot count as evidence against it.",
          C:"Altitude and a short growing season describe the farming. They explain why barley is the crop up there, not why anybody reaches 100."
        },
        tip:'Before hunting for a cause, ask whether the effect is real. A claim built on a striking statistic is weakened hardest by showing the statistic itself is unreliable: lost records, self-reported numbers, no verification.'
      },
      {
        id:'EVA-23', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A software firm cut its week from five days to four with no cut in pay. Over the following six months it shipped 12 percent more completed features than in the six months before, and its director concludes that the shorter week made the staff more productive.",
        stem:'Which finding, if true, would most seriously weaken the director’s conclusion?',
        choices:{
          A:"Employees report sleeping about 20 minutes longer on workday nights than they did under the old five-day schedule.",
          B:"The firm’s competitors, all of them still on five-day schedules, shipped 4 percent more features over the same six months.",
          C:"The firm hired 9 engineers just before the change, lifting the team from 40 to 49, and features per engineer slipped slightly.",
          D:"Two of the firm’s six teams kept a fifth workday for client support and reported no change at all in their own output."
        },
        correct:'C',
        expCorrect:"Twelve percent more features is a TOTAL, and totals move when the staff grows. C shows the team went from 40 to 49 right before the change, while output per engineer actually fell. The firm shipped more because more people were shipping, which is the opposite of the productivity gain being claimed.",
        expWrong:{
          A:"More sleep is a link in the director’s own chain: rested staff, better work. It supports the story rather than denting it.",
          B:"Competitors gained 4 percent against this firm’s 12, so the firm still outpaced the industry. A smaller rise elsewhere does not erase the gap.",
          D:"Teams that kept the fifth day and saw no change are the control group behaving exactly as the director would predict: no schedule change, no output change."
        },
        tip:'Whenever a claim rests on a total — sales, output, cases — check whether the denominator moved. A per-person or per-hour figure is what separates real productivity from extra headcount.'
      }
    ]
  });
})();
