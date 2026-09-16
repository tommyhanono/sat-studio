/* SAT Studio question set — Reading & Writing: Command of Evidence: Textual — Set B (EVB-01 to EVB-34) */
/* Destreza oficial "Command of Evidence: Textual" del dominio Information and Ideas.
   Este set es la RAMPA de entrada y medio de la misma destreza que rw-evid-a:
   hipotesis simples, una sola variable en juego, y el paso logico a la vista.
   Tres tercios: 12 que APOYAN una hipotesis (EVB-01..12), 11 que la DEBILITAN
   (EVB-13..23) y 11 de CITA inventada que ilustra una afirmacion sobre un texto
   (EVB-24..34).
   Los tres distractores siguen siempre el mismo reparto: uno apoya una
   afirmacion parecida pero distinta, otro es compatible con la hipotesis sin ser
   evidencia de ella, y el tercero apunta a la variable equivocada. En las de
   cita, las tres citas malas vienen de la misma obra inventada: una cumple solo
   la mitad del reclamo, otra es ambiente, y la tercera muestra justo lo
   contrario.
   OJO con el clasificador: el matcher de Central Ideas and Details se prueba
   antes y muerde "central", "main idea", "detail", "summar" y "gist"; el de
   Command of Evidence: Quantitative muerde "graph", "table", "chart", "figure",
   "bar" y "scatter". Ninguna de esas cadenas puede aparecer en el campo skill ni
   en los primeros 160 caracteres del stem (por eso la obra no se llama
   "The Sandbar" ni "The Cartographer's Daughter": "bar" y "graph").
   Obras, personas y cifras: todas inventadas. */
(function(){
  window.SAT_SETS.push({
    id: 'rw-evid-b',
    title: 'Command of Evidence: Textual — Set B',
    section: 'rw',
    level: 'Media',
    description: 'The entry ramp for evidence questions: one variable at a time. Which finding supports a hypothesis, which one weakens it, and which quotation illustrates a claim about a text.',
    minutes: 40,
    questions: [
      /* ---------- Tercio 1: la evidencia que APOYA (EVB-01..EVB-12) ---------- */
      {
        id:'EVB-01', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"A librarian moved the poetry collection out of a back corner and onto a low shelf beside the front door. Poetry borrowing rose sharply that month. She believes the new location is what raised it, and not a busier month at the branch overall.",
        stem:"Which finding, if true, would most strongly support the librarian’s belief about the poetry shelf?",
        choices:{
          A:"Nine of every ten borrowers surveyed said they had noticed the poetry shelf on their way in through the door.",
          B:"A branch two towns over put its cookbook display beside the entrance, and cookbook borrowing there rose as well.",
          C:"Poetry borrowing rose 46 percent that month, while every other section of the branch stayed flat.",
          D:"The branch counted 700 more visitors that month than in the same month a year earlier, its highest count yet."
        },
        correct:'C',
        expCorrect:"For her belief to hold, the rise has to belong to poetry and not to the whole building. C splits those apart in one number: poetry up 46 percent, everything else unchanged. A busy month lifts every section at once, so a rise that lands on poetry alone points back to the one thing that changed for poetry — where it sits.",
        expWrong:{
          A:"Noticing the shelf is what you would expect if the move worked, but it is also what you would expect if the move did nothing. No borrowing is measured here at all.",
          B:"Another branch, another kind of book. This supports the general idea that entrance displays help; it cannot tell you why the numbers moved at this branch this month.",
          D:"More visitors is the rival explanation, not the answer to it. If the whole town came through the door, poetry would rise even from the back corner."
        },
        tip:"When a claim says the rise came from one change and not from a general upswing, look for the option that holds the rest of the system still: the target goes up, everything else stays put."
      },
      {
        id:'EVB-02', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"A coastal town fitted shields to the streetlights along one nesting beach so the bulbs now throw light downward only. More hatchling turtles have since crawled straight to the water. A biologist argues that the shields are the reason, not the drop in people walking the beach at night.",
        stem:"Which finding, if true, would most strongly support the biologist’s argument about the shielded streetlights?",
        choices:{
          A:"With the number of nighttime walkers held equal, 82 percent of hatchlings reached the water on shielded stretches and 41 percent on unshielded ones.",
          B:"Hatchlings crawl toward the brightest horizon they can see, a habit that normally carries them out of the nest and down to the open sea.",
          C:"Nighttime walkers on the beach have fallen by roughly half since the town began asking people to keep off the dunes after dark.",
          D:"The shielded fixtures draw about 20 percent less electricity than the open lamps the town pulled off the beach road."
        },
        correct:'A',
        expCorrect:"His argument needs the shields to work even when the crowd does not change. A arranges exactly that comparison: walkers held equal, shielded stretches against unshielded ones, and the gap is still enormous (82 against 41). Only the shielding differs, so only the shielding can be doing it.",
        expWrong:{
          B:"This explains why shielding COULD help: a turtle steers by the brightest horizon. A believable mechanism is not a measurement, and no hatchling is followed here.",
          C:"Fewer walkers is the competing explanation he set aside. Showing that the rival really did change makes his case weaker, not stronger.",
          D:"Electricity is a different payoff altogether. It supports buying the shields; it says nothing about where the hatchlings went."
        },
        tip:"When a claim names a rival cause, the strongest support holds that rival CONSTANT and lets only the claimed cause vary. That is what turns a coincidence into evidence."
      },
      {
        id:'EVB-03', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"A baker changed one step in her sourdough: the dough now rises for 18 hours instead of 4. Her loaves began staying soft into a third day. She credits the long rise, not the new flour she started buying the same week.",
        stem:"Which finding, if true, would most strongly support the baker’s claim about the long rise?",
        choices:{
          A:"Her customers say the long-rise loaves taste deeper and tangier than the bread she was selling before the change.",
          B:"The new flour is milled from a wheat variety that holds noticeably more water than the variety her old supplier used.",
          C:"Bakeries selling long-rise bread charge roughly 30 percent more per loaf than bakeries that sell quick-rise bread.",
          D:"Loaves from the new flour on the old 4-hour rise went stale on day two; her 18-hour loaves did not.",
        },
        correct:'D',
        expCorrect:"Two things changed at once, so her claim only stands if the flour can be ruled out. D runs the test that does it: same new flour, short rise, and the bread goes stale on schedule. With the flour held fixed, the softness follows the rise time and nothing else.",
        expWrong:{
          A:"Taste is a different outcome from shelf life. A tangier loaf is a real result of a long rise, but it leaves the question of the third day untouched.",
          B:"This builds the case for the rival. If the new flour holds more water, the flour could be the reason the loaves stay soft — the very thing she denies.",
          C:"What other bakeries charge is a fact about the market. Price has no bearing on how long any of these loaves stays soft."
        },
        tip:"When two changes land in the same week, support means testing one with the other held still. The option that repeats the experiment minus the claimed cause is usually the answer."
      },
      {
        id:'EVB-04', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"A school built a covered rack where bicycles can be locked out of the rain, and the number of students riding in doubled that autumn. The principal says the shelter itself is the reason, rather than the unusually mild autumn the town happened to get.",
        stem:"Which finding, if true, would most strongly support the principal’s explanation for the rise in riders?",
        choices:{
          A:"Students who ride say they like knowing their seats will still be dry when school lets out on a wet afternoon.",
          B:"A school four kilometers away, under the same mild autumn and with no shelter, counted no change at all in riders.",
          C:"Rainfall in the town this autumn was the lowest in nine years, and the first frost came three weeks later than usual.",
          D:"Reported bicycle thefts at the school have dropped by half since the rack went up and a camera was aimed at it."
        },
        correct:'B',
        expCorrect:"The mild autumn covered both schools, so it cannot explain a difference between them. B uses that: same weather, no shelter, no rise. Once the shared cause is shown to produce nothing on its own, the one thing left that this school has and the other lacks is the shelter.",
        expWrong:{
          A:"Riders liking the shelter is pleasant and unsurprising, and it would be just as true if the mild weather were doing all the work. Nobody new starts riding in this sentence.",
          C:"This is the rival explanation dressed up with numbers. A record-dry autumn is precisely what would raise the count without any shelter at all.",
          D:"Fewer thefts is a second benefit of the rack, not a measure of who rides. Theft and ridership are separate counts."
        },
        tip:"A shared cause (weather, a holiday, a national trend) cannot explain a difference between two places that both had it. Comparison sites are the cheapest way to knock a rival out."
      },
      {
        id:'EVB-05', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"A grain farmer installed speakers that play recorded owl calls in his storage shed at night, and rats have stayed out of the grain since. He maintains that the calls are what keep them out, not the sealed metal bins he bought the same season.",
        stem:"Which finding, if true, would most strongly support the farmer’s position about the recorded owl calls?",
        choices:{
          A:"In a second shed with the same sealed bins but no speakers, rats chewed into the stored grain within three weeks.",
          B:"Rats freeze or bolt when an owl calls overhead, a reaction biologists have filmed many times in penned animals.",
          C:"The sealed bins are lined with a steel skirt that rats have not managed to gnaw through in laboratory trials.",
          D:"Barn owls have moved into the rafters of two sheds on the farm since the speakers were first switched on."
        },
        correct:'A',
        expCorrect:"His position needs the bins to fail on their own. A supplies that shed: identical bins, no speakers, and rats in the grain inside three weeks. The bins alone were not enough, so the protection tracks the one thing the second shed is missing.",
        expWrong:{
          B:"A filmed reaction in a pen shows that owl calls CAN frighten rats. It is the reason to try the speakers, not proof that the speakers are what worked in this shed.",
          C:"This argues for the rival. A skirt rats cannot chew is a good reason to think the bins, not the calls, are keeping the grain safe.",
          D:"Live owls nesting nearby is a charming side effect, and if anything it muddies the case: real owls could be doing the work the recordings claim."
        },
        tip:"To credit one of two protections, find the setting where the other one is present ALONE and fails. A cause that is not sufficient by itself leaves the credit to its partner."
      },
      {
        id:'EVB-06', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"Otters were gone from the Larkin River for forty years and returned within two seasons of a dam being taken out. An ecologist argues the return followed the reopening of the river to migrating fish, rather than the lighter fishing pressure that arrived with new catch limits.",
        stem:"Which finding, if true, would most strongly support the ecologist’s account of the otters’ return?",
        choices:{
          A:"An adult otter eats mainly fish and needs well over a kilogram of them on an ordinary day of hunting.",
          B:"Catch limits set the same year cut the number of anglers working the Larkin by roughly a third.",
          C:"Two rivers in the same watershed that were never dammed hold otter populations that have been steady for decades.",
          D:"Otters reappeared first on the stretch above the old dam, in the very season migrating fish reached it again."
        },
        correct:'D',
        expCorrect:"His account predicts a pattern in space and in time: otters should show up where the fish arrive, when the fish arrive. D matches both. The stretch above the dam is the part the fish could not reach before, and that is where the otters turned up first, in the same season. Fishing rules changed everywhere at once and cannot produce that ordering.",
        expWrong:{
          A:"That otters live on fish is background. It makes the story sensible, but every version of the story — including the fishing one — already assumes it.",
          B:"This shows the rival cause was real and sizable. Evidence that the competing explanation actually happened cuts against his account rather than for it.",
          C:"Undammed rivers with steady otters tell you what an unbroken river looks like. They say nothing about what changed on the Larkin."
        },
        tip:"Look for evidence with a fingerprint: a specific place and a specific moment the claimed cause predicts and the rival does not. A cause that applies everywhere at once cannot explain a difference between stretches."
      },
      {
        id:'EVB-07', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"A museum rewrote the wall labels in one gallery so that every label opens with a question. Visitors now linger longer in front of the paintings there. The curator holds that the questions are the reason, not the brighter lighting the gallery received the same week.",
        stem:"Which finding, if true, would most strongly support the curator’s explanation for the longer visits?",
        choices:{
          A:"Visitors in the rewritten gallery ask the guards roughly twice as many questions as visitors elsewhere in the museum.",
          B:"A second gallery relit the same week but left with its old labels showed no change at all.",
          C:"Under the brighter lamps, the colors in the older paintings are much easier to tell apart from across the room.",
          D:"Museums that use question-style labels report higher visitor satisfaction scores than museums using plain ones."
        },
        correct:'B',
        expCorrect:"Lighting and labels changed together, so the curator needs a room where only the lighting changed. B is that room: new lamps, old labels, and the clock does not move. Brighter light by itself produced nothing, which leaves the labels holding the result in the first gallery.",
        expWrong:{
          A:"More questions to the guards is a nice echo of question-style labels, but it measures talking, not lingering. The claim is about time at the paintings.",
          C:"Easier colors is how the LIGHTING would work. Spelling out the rival's mechanism makes the rival more plausible, which is the opposite of what he needs.",
          D:"Satisfaction scores from other museums support a different claim — that people like these labels — and are measured somewhere else entirely."
        },
        tip:"When two changes arrive together, the winning option isolates one of them. A room with the rival change and nothing else is worth more than any amount of agreeable side evidence."
      },
      {
        id:'EVB-08', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"A dry channel runs four kilometers from a highland spring down to a cluster of ruined houses. An archaeologist argues that it was cut to carry drinking water to the settlement, rather than to drain a marsh that once lay on the slope above it.",
        stem:"Which finding, if true, would most strongly support the archaeologist’s reading of the channel?",
        choices:{
          A:"The ruined houses were built from stone quarried within a kilometer of the settlement, at about the time the channel was cut.",
          B:"Channels of much the same width elsewhere in the highlands carried water to terraced fields of barley rather than to houses.",
          C:"The channel’s floor drops steadily from the spring toward the houses, and mineral crusts line it along its whole length.",
          D:"Soils on the slope above the channel hold pollen from reeds and sedges, plants that grow where the ground stays wet."
        },
        correct:'C',
        expCorrect:"For his reading to hold, water had to flow FROM the spring TO the houses, and it had to do so for a long time. C gives both. A floor that falls steadily toward the houses fixes the direction, and mineral crusts along the whole run show that water actually sat and flowed in it for years.",
        expWrong:{
          A:"Local stone tells you how the houses were built. Building materials place the settlement in time but say nothing about which way water ran in the channel.",
          B:"Similar channels feeding fields supports a different destination — crops, not households. It is close to his claim without being it.",
          D:"Wetland pollen upslope is evidence FOR the marsh, which is the rival purpose. It makes the drainage reading more attractive, not less."
        },
        tip:"For a claim about what something was FOR, look for evidence of direction and of long use. Facts about date, material, or neighbors rarely separate one purpose from another."
      },
      {
        id:'EVB-09', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"Swifts nesting in a cathedral tower now lay their eggs eleven days earlier than they did in the 1970s. A biologist proposes that the birds are tracking an earlier peak in flying insects, rather than responding to the warmer spring air itself.",
        stem:"Which finding, if true, would most strongly support the biologist’s proposal about the swifts?",
        choices:{
          A:"In the occasional year when a warm spring is followed by a late insect peak, the swifts lay late rather than early.",
          B:"Spring air over the city now averages 1.4 °C warmer in March than it did when the tower colony was first counted.",
          C:"A swift feeds its young entirely on insects caught in flight, sometimes hundreds of them on a single trip home.",
          D:"Swifts in a coastal colony 200 kilometers away have moved their laying earlier over the same fifty years."
        },
        correct:'A',
        expCorrect:"Warm springs and early insects normally arrive together, so the only informative year is the one where they come apart. A is that year: warm air, late insects, late eggs. The birds followed the insects and ignored the warmth, which is exactly what his proposal predicts and the rival cannot allow.",
        expWrong:{
          B:"Warmer March air is the rival cause, confirmed. Showing that the alternative really is happening strengthens it, not the insect explanation.",
          C:"A diet of flying insects is why the timing WOULD matter. It is the reason to suspect the link, not a measurement of any year's laying date.",
          D:"A second colony shifting the same way shows the pattern is widespread. Both explanations predict that, so it cannot choose between them."
        },
        tip:"When two candidate causes normally move together, the decisive evidence is the rare case where they split. Hunt for the option that describes that year, that site, that exception."
      },
      {
        id:'EVB-10', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"A farmers market moved from Saturday to Sunday and its takings rose by a fifth. The manager credits the day itself, since Sunday frees up shoppers who work Saturdays, rather than the four new stalls that joined in the same month.",
        stem:"Which finding, if true, would most strongly support the manager’s explanation for the rise in takings?",
        choices:{
          A:"The four newcomers took in about 3 percent of the total, while the returning stalls each sold a fifth more than before.",
          B:"Roughly 30 percent of the town’s workers are scheduled on Saturdays, the highest share recorded anywhere in the county.",
          C:"Two of the four new stalls sell hot prepared food, a kind of stall the market had never offered on any day before.",
          D:"Markets in nearby towns that added a second trading day found their weekly takings climbed by about a fifth too."
        },
        correct:'A',
        expCorrect:"If the new stalls were driving the rise, the extra money would sit in their tills. A shows it does not: they account for about 3 percent, while the stalls that were there all along each sold a fifth more. The rise is spread across the old stalls, which is what a better DAY would do and a few new sellers would not.",
        expWrong:{
          B:"A large Saturday-working share explains why Sunday could help. It makes his reasoning plausible without measuring one coin taken at this market.",
          C:"Novel stalls are the rival explanation made vivid. Food stalls the market never had are exactly the sort of draw that could lift takings by themselves.",
          D:"Other towns adding a day supports a broader claim about second market days. It cannot tell you whether this rise came from the day or from the newcomers."
        },
        tip:"When a rival cause is a small named group, check where the gain landed. A rise concentrated in the group supports the rival; a rise spread across everyone supports the system-wide cause."
      },
      {
        id:'EVB-11', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"In one valley, village names ending in -thwaite cluster along the upper slopes. A historian argues that the names mark where Norse settlers cleared woodland for farms, rather than where a later landlord happened to redraw the parish boundaries.",
        stem:"Which finding, if true, would most strongly support the historian’s account of the -thwaite names?",
        choices:{
          A:"Norse loanwords for sheep, fencing and pasture are still common in the dialect spoken in the valley today.",
          B:"The valley’s parish boundaries were last redrawn in 1743 by the estate that then owned most of the upper slopes.",
          C:"The element thwaite comes from an Old Norse word for a patch of ground cleared out of standing woodland.",
          D:"Under the -thwaite villages, buried pollen shows woodland giving way to pasture in the century the Norse arrived."
        },
        correct:'D',
        expCorrect:"His account makes a claim about the ground, not just the words: clearing happened, at these spots, when the Norse came. D tests it in the soil. Pollen under those villages records woodland turning to pasture in that century, so the names sit on land that really was cleared at the right time.",
        expWrong:{
          A:"Norse farming words in the dialect show Norse influence in the valley. That supports a nearby claim — Norse people were here — without tying any particular name to a clearing.",
          B:"A landlord redrawing boundaries in 1743 is the rival explanation, and this says it really occurred. Confirming a rival never supports the claim it competes with.",
          C:"The etymology explains what the name MEANS. Meaning tells you what the word would be used for; it does not show anyone did the clearing here."
        },
        tip:"A claim that a word records a real event needs evidence from outside the language. Etymology and related vocabulary confirm that the word fits, never that the event happened at that spot."
      },
      {
        id:'EVB-12', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Textual — finding that supports a hypothesis',
        passage:"Coral on one reef bleached badly in a hot summer, but colonies growing beside a cold-water spring bleached far less. A marine biologist argues that the spring protects them by cooling the water around them, and not by way of the extra nutrients the spring also delivers.",
        stem:"Which finding, if true, would most strongly support the marine biologist’s explanation of the spring’s effect?",
        choices:{
          A:"Water within ten meters of the spring ran 1.8 °C cooler than the rest of the reef right through the hot summer.",
          B:"Colonies moved into a cooled tank at the reef’s ordinary nutrient levels bleached as little as those beside the spring.",
          C:"The spring carries nitrogen and phosphorus at roughly four times the concentration of the surrounding reef water.",
          D:"Reefs in the region with no cold spring anywhere on them lost about 60 percent of their coral in the same summer."
        },
        correct:'B',
        expCorrect:"The spring delivers cold water and nutrients together, so nothing measured at the spring can tell the two apart. B separates them: cooling supplied, nutrients held at the reef's normal level, and the protection appears anyway. Cooling alone was enough, which is precisely what his explanation requires.",
        expWrong:{
          A:"This is the tempting one. It proves the spring really does cool the water, but the nutrients are cooling's constant companion out there, so the finding fits both explanations equally.",
          C:"Four times the nutrients is evidence that the rival pathway is strong and real. It builds the case he is arguing against.",
          D:"Springless reefs losing 60 percent shows the summer was brutal without a spring. It says nothing about WHICH part of the spring did the protecting."
        },
        tip:"When two causes always travel together in nature, field measurements cannot separate them. Support has to come from a setting — usually a tank or a controlled plot — where one is supplied and the other is not."
      },

      /* ---------- Tercio 2: la evidencia que DEBILITA (EVB-13..EVB-23) ---------- */
      {
        id:'EVB-13', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A shop owner switched her background music to slower songs and her afternoon sales went up. She concludes that the slow music keeps customers at their tables long enough to order more.",
        stem:"Which finding, if true, would most seriously weaken the owner’s conclusion about the music?",
        choices:{
          A:"Customers she surveyed could not say whether the music in the shop had changed at all since their last visit.",
          B:"In the same week she changed the playlist, she began offering a discounted pastry plate every afternoon.",
          C:"Her morning sales, in the hours when the shop plays no music at all, held steady across the same weeks.",
          D:"The new playlist runs at about 70 beats per minute, well under the 120 of the songs it replaced."
        },
        correct:'B',
        expCorrect:"Her conclusion only stands if the music is the one thing that changed. B names a second change landing in the same week, and a cheap afternoon plate is an obvious reason for afternoon sales to rise. With two causes arriving together, the rise no longer belongs to the music.",
        expWrong:{
          A:"Not consciously noticing the music is a weak objection: background music is meant to work without being noticed, so this is compatible with her conclusion.",
          C:"Steady morning sales actually help her. If the rise were a general upswing it would show up in the morning too, and it does not.",
          D:"The tempo numbers just describe the change she made. A measurement of the cause is neither support for nor damage to the claim about its effect."
        },
        tip:"The fastest way to weaken a before-and-after claim is a second change in the same window. Scan the options for anything else that started at the same moment."
      },
      {
        id:'EVB-14', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A running club added ten minutes of stretching before every session, and reported injuries over the following year fell by half. The coach concludes that the stretching is what brought the injuries down.",
        stem:"Which finding, if true, would most seriously weaken the coach’s conclusion about the stretching?",
        choices:{
          A:"Runners in the club say their legs feel looser in the first kilometer than they used to before the change.",
          B:"Two nearby clubs that also stretch before every session report injury rates close to this club’s own rate.",
          C:"Most injuries the club recorded were to knees and ankles rather than to the large muscles of the thigh.",
          D:"The club also cut its weekly running distance by a third in the same year."
        },
        correct:'D',
        expCorrect:"For the stretching to get the credit, it has to be the only relevant thing that changed. D supplies a rival that is both simultaneous and powerful: a third less running is a third less chance to get hurt. The drop is now explained twice over, and the coach cannot say which explanation did it.",
        expWrong:{
          A:"Looser legs is a sensation the stretching plausibly produces. It is consistent with his conclusion rather than damaging to it, and it never mentions an injury.",
          B:"Two clubs that also stretch, with similar rates, gives no contrast at all. Without a club that does NOT stretch, the comparison cannot cut either way.",
          C:"Where the injuries happened describes the injuries. Knees and ankles are a fact about the list, not a reason to doubt what shortened it."
        },
        tip:"Weakening usually means naming a rival cause that changed at the same time and points the same direction. Ask: is there another reason the number would have moved anyway?"
      },
      {
        id:'EVB-15', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A restaurant owner noticed that diners who order the tasting menu leave higher online ratings than diners who order from the regular menu. He concludes that the tasting menu is what makes people rate the restaurant highly.",
        stem:"Which finding, if true, would most seriously weaken the owner’s conclusion about the tasting menu?",
        choices:{
          A:"Diners who pick the tasting menu are mostly regulars who were already rating the restaurant highly years before it existed.",
          B:"Online ratings for the restaurant as a whole have climbed steadily in every month since the tasting menu appeared.",
          C:"The tasting menu costs about twice what a main course and a dessert come to when ordered separately.",
          D:"On a typical evening only about one table in six orders the tasting menu rather than the regular one."
        },
        correct:'A',
        expCorrect:"His conclusion treats the menu as the cause of the high ratings. A shows the customers arrive already generous: the same people were rating the place highly before the menu existed, so they brought their ratings with them. The menu is sorting enthusiasts, not creating them.",
        expWrong:{
          B:"A steady climb in overall ratings is the pattern he would love to see. It fits his conclusion, so it cannot be the thing that damages it.",
          C:"Price explains who can afford the menu without saying anything about how anyone rates the food afterward.",
          D:"One table in six tells you how popular the menu is. A small share of orders is not a reason to doubt the effect on the people who do order it."
        },
        tip:"Whenever a claim compares people who CHOSE something with people who did not, ask what those choosers were like beforehand. Self-selection is the standard way this reasoning breaks."
      },
      {
        id:'EVB-16', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"Small stone blades from a cave floor carry a bright polish along one edge. An archaeologist concludes that the polish comes from cutting plant stems, which would make these blades the region’s earliest harvesting tools.",
        stem:"Which finding, if true, would most seriously weaken the archaeologist’s conclusion about the blades?",
        choices:{
          A:"Polish of this kind forms on a stone edge only after several hours of steady, repeated work.",
          B:"The cave floor also held seeds from wild grasses that grew on the open slopes just outside it.",
          C:"Blades used to scrape animal hides in modern experiments take on an edge polish that looks the same under a lens.",
          D:"The blades are cut from a fine chert that occurs nowhere within thirty kilometers of the cave mouth."
        },
        correct:'C',
        expCorrect:"His conclusion reads one cause off one signature, which only works if the signature is unique to that cause. C shows it is not: hide-scraping leaves a polish that nobody can tell apart from this one. The same evidence now fits two very different jobs, so it can no longer single out harvesting.",
        expWrong:{
          A:"Hours of steady work tells you the blades were used hard and often. It supports the idea of real tool use without touching what they were used ON.",
          B:"Wild grass seeds on the floor make plant cutting MORE likely, not less. This is evidence in his favor.",
          D:"Distant stone tells you where the raw material came from. Sourcing describes how the blades were obtained, not what the polish means."
        },
        tip:"To weaken an argument from a distinctive trace, show that something else leaves the same trace. If two causes produce identical evidence, the evidence cannot pick one."
      },
      {
        id:'EVB-17', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"In a large survey, adults who keep houseplants report lower stress than adults who keep none. A columnist concludes that tending houseplants is what lowers a person’s stress.",
        stem:"Which finding, if true, would most seriously weaken the columnist’s conclusion about houseplants?",
        choices:{
          A:"Adults who keep houseplants water them about twice a week and repot them roughly once a year.",
          B:"Offices that put potted plants on every desk later reported a small drop in their workers’ stress scores.",
          C:"The survey measured stress with one broad question rather than with the full questionnaire researchers prefer.",
          D:"People living under heavy stress tend to give their plants away, since watering is one more thing to remember."
        },
        correct:'D',
        expCorrect:"The columnist reads the arrow as plants leading to calm. D turns it around: stress comes first and drives the plants out of the house. That produces the very same survey pattern — calm people with plants, stressed people without — while the plants do nothing at all.",
        expWrong:{
          A:"Watering and repotting habits describe what plant owners do. Routine care is not a reason to doubt which way the effect runs.",
          B:"Offices adding plants and seeing stress fall is a test that points his way. It is support, and support cannot be what weakens him.",
          C:"A crude stress measure adds noise in both directions. It makes the whole survey shakier without favoring either explanation of the pattern."
        },
        tip:"With two things that merely go together, always check the reverse arrow. If the outcome could have caused the supposed cause, the correlation is explained with nothing left over."
      },
      {
        id:'EVB-18', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A town replaced the bulbs in its streetlights with much brighter ones, and nighttime burglaries fell 30 percent over the following year. The mayor concludes that the brighter lighting drove the burglaries down.",
        stem:"Which finding, if true, would most seriously weaken the mayor’s conclusion about the brighter lights?",
        choices:{
          A:"Nighttime burglaries fell by about 30 percent that same year in three neighboring towns that changed nothing.",
          B:"Burglars questioned by police say they prefer streets where they are unlikely to be seen from a window.",
          C:"The new bulbs cost the town roughly 40 percent less to run each month than the ones they replaced.",
          D:"Daytime burglaries in the town held roughly steady across the same twelve months of the year."
        },
        correct:'A',
        expCorrect:"His conclusion needs the drop to belong to the lighting. A shows the same 30 percent drop in towns that did nothing at all, so whatever pushed burglaries down that year was regional and reached this town too. The lights arrived in the middle of a decline that was happening anyway.",
        expWrong:{
          B:"Burglars avoiding visible streets is the mechanism behind his conclusion. Stating why brighter light SHOULD help is support, not damage.",
          C:"Running costs concern the town budget. Cheaper bulbs is a separate benefit that has no bearing on the burglary count.",
          D:"Steady daytime burglaries actually strengthen him: the drop is specific to the hours when lighting could matter."
        },
        tip:"Before crediting a local change, check the places that did not make it. A drop that shows up everywhere at once belongs to a wider trend, not to the thing you did."
      },
      {
        id:'EVB-19', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A cosmetics firm claims its new cream smooths wrinkles because it contains an extract of birch bark, and that extract slows the breakdown of collagen in laboratory dishes.",
        stem:"Which finding, if true, would most seriously weaken the firm’s reasoning about the cream?",
        choices:{
          A:"Users in the firm’s own trial said their skin felt softer after four weeks of applying the cream daily.",
          B:"The breakdown of collagen is one of several processes that deepen wrinkles as a person’s skin ages.",
          C:"The extract is taken from a birch that grows on a single mountain range and is costly to harvest.",
          D:"The cream holds the extract at a thousandth of the concentration that slowed collagen breakdown in the dishes."
        },
        correct:'D',
        expCorrect:"The reasoning runs: the extract works in a dish, the cream has the extract, so the cream works. D breaks the middle link on dose. At a thousandth of the concentration that did anything in the dish, the ingredient is present in name only, and the laboratory result no longer transfers to the jar.",
        expWrong:{
          A:"Softer-feeling skin after four weeks is the firm's own good news. It points toward the cream doing something, so it cannot be the finding that undercuts them.",
          B:"Collagen being one process among several trims how much the cream could achieve at best. It is a limit on the size of the effect, not a reason the effect is absent.",
          C:"Rarity and cost describe the supply of the ingredient. Where a plant grows has nothing to do with whether the cream works."
        },
        tip:"When a claim jumps from a laboratory result to a product, check the dose. An active ingredient at a fraction of the tested concentration is the classic broken link."
      },
      {
        id:'EVB-20', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A wildlife agency photographed twice as many individual wolves in a forest this year as last year, and announced that the forest’s wolf population has doubled.",
        stem:"Which finding, if true, would most seriously weaken the agency’s announcement about the wolves?",
        choices:{
          A:"Deer numbers in the same forest have risen sharply in each of the past three years, wardens report.",
          B:"Two wolf packs were photographed this year in a far valley where none had ever been recorded before.",
          C:"The agency tripled the number of camera traps in the forest between the two counts.",
          D:"A wolf in this forest ranges over a territory of roughly 200 square kilometers in the course of a year."
        },
        correct:'C',
        expCorrect:"The announcement treats the two counts as comparable, and they are not. With three times as many cameras out, more wolves would be photographed even if not one extra wolf lived there. The rise measures the agency's effort, so the population number cannot be read off it.",
        expWrong:{
          A:"More deer means more food, which is a reason a wolf population COULD grow. That supports the announcement rather than weakening it.",
          B:"Packs in a valley with no prior record is what genuine growth looks like when it spreads. It fits the announcement.",
          D:"Territory size explains how wolves use the forest. It is background about the species, not a flaw in how they were counted."
        },
        tip:"Before believing a change in a count, ask whether the counting changed. More cameras, more reporters, more screening — any of them can manufacture a rise on their own."
      },
      {
        id:'EVB-21', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A cyclist has cut three minutes from her usual 40-kilometer course since buying deep-rimmed wheels. She credits the wheels, arguing that the deeper rims cut through the air more cleanly than her old ones did.",
        stem:"Which finding, if true, would most seriously weaken the cyclist’s explanation for her faster times?",
        choices:{
          A:"Wind tunnel tests put the deep rims about one second ahead over a course of that length, not three minutes.",
          B:"The deep-rimmed wheels weigh roughly 200 grams more per wheel than the pair she was riding before.",
          C:"She has ridden the course eleven times on the new wheels and only four times on the old ones.",
          D:"Other riders in her club who bought the same deep-rimmed wheels report that their own times have improved."
        },
        correct:'A',
        expCorrect:"Her explanation has to account for three minutes. A prices the wheels at one second over that distance — the effect is real but roughly two hundred times too small. A cause that cannot produce the size of the result on offer is not the cause of it, whatever else is true about it.",
        expWrong:{
          B:"Extra weight is a small cost that mostly shows on climbs. It shaves a little off the wheels' advantage without explaining where three minutes came from.",
          C:"Eleven rides against four is a thin comparison and worth noting, but unequal sample sizes only make the average shakier; they do not identify what made her faster.",
          D:"Clubmates improving on the same wheels points in her favor. It is the pattern she would cite, not a problem for her."
        },
        tip:"Check the size of the claimed cause against the size of the effect. An effect far too large for its proposed cause needs a different explanation, even when the cause is genuine."
      },
      {
        id:'EVB-22', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"A historian argues that a hill village grew rich in the 1500s on its wool trade, pointing to the row of large stone houses its families put up in those decades.",
        stem:"Which finding, if true, would most seriously weaken the historian’s argument about the source of the wealth?",
        choices:{
          A:"Wool prices across the region fell by about a quarter over the second half of the 1500s.",
          B:"Port records show the village shipped no wool at all, and its houses went up as its silver mine opened.",
          C:"The village’s stone houses were built in a style used across the whole county during the same decades.",
          D:"Two villages nearby that did trade heavily in wool also put up large stone houses in those decades."
        },
        correct:'B',
        expCorrect:"His argument links one source of money to one building boom. B cuts the link at both ends: no wool left the village, and the houses rise exactly as a silver mine opens. The wealth is real and the houses are real, but the money came from underground rather than off the backs of sheep.",
        expWrong:{
          A:"Falling regional prices make wool a less impressive earner, which chips at the claim. It still leaves open that this village traded enough to prosper anyway.",
          C:"A county-wide building style tells you who the masons copied. Architecture describes the houses without saying who paid for them.",
          D:"Wool villages building the same kind of houses is the pattern he is relying on. It supports the argument rather than damaging it."
        },
        tip:"An argument from a visible result — grand houses, a new road — is weakest at its source. The strongest objection shows the named source was absent and names a different one arriving on cue."
      },
      {
        id:'EVB-23', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Textual — finding that weakens a hypothesis',
        passage:"Soil under a strip of native prairie holds 40 percent more carbon than soil under the wheat field beside it. A soil scientist concludes that the prairie plants have been pulling carbon out of the air and storing it underground.",
        stem:"Which finding, if true, would most seriously weaken the scientist’s conclusion about the prairie soil?",
        choices:{
          A:"Prairie grasses send roots more than two meters down, far deeper than the roots of a wheat plant reach.",
          B:"Carbon in the top ten centimeters of the wheat field has fallen by about a tenth since it was first plowed.",
          C:"Samples from the two plots were taken in the same week, from the same depth, with the same soil corer.",
          D:"The prairie strip sits on a low terrace where centuries of flooding have laid down carbon-rich river silt."
        },
        correct:'D',
        expCorrect:"His conclusion needs the extra carbon to have come out of the air by way of the plants. D gives it a different origin and a different date: river silt, already rich in carbon, delivered by floods long before this prairie grew. The two plots were never comparable, so the gap measures the terrace rather than the grass.",
        expWrong:{
          B:"This is the close one. Showing the field lost some carbon explains part of the gap, but losses in the wheat field are perfectly compatible with the prairie gaining carbon as well — his mechanism survives.",
          A:"Deep roots are how prairie plants WOULD put carbon underground. Supplying the mechanism supports his conclusion instead of undercutting it.",
          C:"Matched sampling rules out a method artifact, which makes the 40 percent gap more trustworthy. It defends the measurement he is reasoning from."
        },
        tip:"When a claim explains a difference between two plots, check whether the plots differed before the treatment did. A pre-existing difference in the ground beats any argument about what grows on it."
      },

      /* ---------- Tercio 3: la CITA que ilustra una afirmacion (EVB-24..EVB-34) ---------- */
      {
        id:'EVB-24', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — quotation that illustrates a claim',
        passage:"“The Lighthouse Ledger” is narrated by a keeper who tends a light on a rocky point. A student claims that the narrator finds the repetition of the work comforting rather than dull.",
        stem:"Which quotation from “The Lighthouse Ledger” most effectively illustrates the student’s claim?",
        choices:{
          A:"“The stair up to the lamp room is ninety-one steps, and I have counted them since my first week here.”",
          B:"“Some nights the hours drag so badly that I would welcome a storm simply to have something to do.”",
          C:"“I trim the wick at the same hour every night, and the sameness of it settles me the way a hand on the shoulder would.”",
          D:"“Fog comes up the point in the evening and takes the rocks one by one until only the water can be heard.”"
        },
        correct:'C',
        expCorrect:"The claim has two parts: the work repeats, and the repetition COMFORTS him. C carries both in one line — the same task at the same hour, and the effect it has on him, compared to a steadying hand. Neither half is left to the reader to assume.",
        expWrong:{
          A:"Counting the stairs shows a routine he knows by heart, which is only the first half. The line never says how the routine makes him feel.",
          B:"Hours that drag until he would welcome a storm is dullness stated outright. This is the opposite of the claim.",
          D:"The fog closing over the rocks sets a mood. Atmosphere is not a statement about the keeper's feelings toward his work."
        },
        tip:"A claim with two parts needs a quotation with two parts. If the line proves only the habit and not the feeling, it is the standard half-credit trap."
      },
      {
        id:'EVB-25', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — quotation that illustrates a claim',
        passage:"In “Fennel Street,” a boy delivers groceries along one steep road. A reviewer claims that he knows the people on his round by their habits rather than by their names.",
        stem:"Which quotation from “Fennel Street” most effectively illustrates the reviewer’s claim?",
        choices:{
          A:"“I could not have told you what the woman at number nine was called, but I knew she wanted her bread on the sill, never the step.”",
          B:"“The street runs uphill from the tram stop and the numbers climb with it, odd on the left and even on the right.”",
          C:"“Mrs. Ilunga at number four always asked after my mother before she would take the box out of my hands.”",
          D:"“I carried the heaviest orders last, because by then my arms had stopped arguing with me about it.”"
        },
        correct:'A',
        expCorrect:"The claim sets habits against names, so the quotation has to show both sides of that trade. A does it in one sentence: the name is missing, the habit is exact, down to the sill instead of the step.",
        expWrong:{
          B:"House numbers and the slope of the road describe the setting. The line contains no person and therefore no way of knowing one.",
          C:"Here he knows a customer BY NAME, and a habit of hers besides. It is a near miss that lands on the wrong side of the claim.",
          D:"Loading the heaviest orders last is his own habit, not a customer's. The claim is about how he knows other people."
        },
        tip:"When a claim contrasts two ways of knowing, the right quotation shows one present and the other absent. A line that supplies both weakens the contrast instead of illustrating it."
      },
      {
        id:'EVB-26', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — quotation that illustrates a claim',
        passage:"“The Shoal” follows two brothers through one summer at the coast. A scholar claims that the younger brother measures his own progress against his brother rather than against the swim itself.",
        stem:"Which quotation from “The Shoal” most effectively illustrates the scholar’s claim?",
        choices:{
          A:"“The current runs hardest in the hour before the tide turns, which was always when we swam.”",
          B:"“I did not care how far out the shoal lay. I cared that Teo had reached it in June and I had not.”",
          C:"“By August I could hold my breath long enough to touch the bottom twice on a single lungful.”",
          D:"“Teo swam out every morning and was back before the fishermen finished loading their nets.”"
        },
        correct:'B',
        expCorrect:"The claim names a yardstick: the brother, not the distance. B states the swap outright — the distance is dismissed in the first sentence, and what matters is that Teo got there first. The comparison is the whole point of the line.",
        expWrong:{
          A:"The tide and the current describe the conditions they swam in. Nothing here concerns either brother's sense of his own progress.",
          C:"Touching the bottom twice on one breath is progress measured against the task, which is the yardstick the claim rules out.",
          D:"Teo's morning routine is about the older brother alone. A quotation about him cannot show how the younger one measures himself."
        },
        tip:"For a claim about how a character judges himself, the quotation has to contain the comparison. A line showing only the rival, or only the achievement, leaves the judgment unproved."
      },
      {
        id:'EVB-27', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Textual — quotation that illustrates a claim',
        passage:"“A Season of Small Repairs” is narrated by a handyman who works his way through one town. A student claims that he judges a household by the things it has let go unfixed.",
        stem:"Which quotation from “A Season of Small Repairs” most effectively illustrates the student’s claim?",
        choices:{
          A:"“I keep my tools in a canvas roll my father sewed, and I have never yet wanted one that was not in it.”",
          B:"“People will apologize for the state of a kitchen long before they will let you look under the sink.”",
          C:"“The Dorans had three doors that stuck in the frame, and I had all three of them swinging free by noon.”",
          D:"“A loose stair rail tells me more about a house than anything its owner says to me.”"
        },
        correct:'D',
        expCorrect:"The claim is that neglected things are how he reads a home. D says exactly that: one unfixed rail outweighs everything the owner chooses to say. The neglected object is named, and so is the judgment he draws from it.",
        expWrong:{
          A:"His father's tool roll is a fact about him, and a fond one. It contains no household and no judgment of one.",
          B:"This is a sharp observation about how people behave around their own mess, but the reading he draws from it is never given.",
          C:"Three sticking doors fixed by noon is a job done well. The line reports the repair without any verdict on the household."
        },
        tip:"For a claim about how a narrator judges, look for the judgment in the line itself. Quotations that merely show the raw material — the mess, the repair — stop one step short."
      },
      {
        id:'EVB-28', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — quotation that illustrates a claim',
        passage:"“Postcards from Vellmar” collects the notes a traveler sent home during a long stay in a small inland town. A scholar claims that the traveler describes each new place by what it lacks compared with home.",
        stem:"Which quotation from “Postcards from Vellmar” most effectively illustrates the scholar’s claim?",
        choices:{
          A:"“I miss the noise of the harbor more than I expected to, and I think of it whenever the square goes quiet.”",
          B:"“The market opens at six and is finished by nine, and the sellers pack up while the light is still thin.”",
          C:"“Vellmar has three separate bakeries, which for a town of this size strikes me as at least one too many.”",
          D:"“There is no river here, and I walk out to the edge of town to look for one anyway.”"
        },
        correct:'D',
        expCorrect:"The claim is about a method of description: name the absence, and measure it against home. D is built that way — no river, and a habit from home that keeps looking for one. The place is characterized by what is missing from it.",
        expWrong:{
          A:"This is homesickness, which is close but not the claim. He is describing what he misses at home, not describing Vellmar by what Vellmar lacks.",
          B:"An early market that packs up at nine is plain description, and a fond one. No comparison with home appears anywhere in it.",
          C:"Three bakeries is an excess rather than a lack. The line does compare Vellmar with expectation, but in the opposite direction."
        },
        tip:"When a claim describes a HABIT of the writing, test each quotation against the pattern, not the mood. Two lines can both be wistful while only one uses the pattern the claim names."
      },
      {
        id:'EVB-29', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — quotation that illustrates a claim',
        passage:"“The Blue Hour Radio” is narrated by the host of an overnight program. A student claims that he addresses his audience as a single person rather than as a crowd.",
        stem:"Which quotation from “The Blue Hour Radio” most effectively illustrates the student’s claim?",
        choices:{
          A:"“I never say good evening, everyone. I say good evening, you, because at that hour there is only ever one of you.”",
          B:"“The station carries four counties after dark, which is two more than it manages at noon.”",
          C:"“I read the weather twice, once for the fishermen and once for everyone driving home.”",
          D:"“Callers tell me things at two in the morning that they would not tell a friend at two in the afternoon.”"
        },
        correct:'A',
        expCorrect:"The claim is about the form of address itself, and A quotes it directly: the plural greeting rejected, the singular chosen, and the reason given. The line demonstrates the habit and explains it in the same breath.",
        expWrong:{
          B:"The reach of the signal is a fact about transmission. How far the voice travels says nothing about who it speaks to.",
          C:"Reading the weather for the fishermen and then for the drivers is addressing GROUPS. It is the crowd the claim says he avoids.",
          D:"Late callers being unusually frank describes the audience, not his way of speaking to them. It is a related observation, not this one."
        },
        tip:"When the claim is about how a narrator speaks, the best quotation is one where the speaking is on display. A line about listeners or setting can only support the claim indirectly."
      },
      {
        id:'EVB-30', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — quotation that illustrates a claim',
        passage:"“Six Bridges” is a memoir by an engineer who spent a career on river crossings. A reviewer claims that she remembers each project by the failure it taught her rather than by its opening day.",
        stem:"Which quotation from “Six Bridges” most effectively illustrates the reviewer’s claim?",
        choices:{
          A:"“The Aldern crossing opened in May, eleven months late and a good deal over the budget we had promised.”",
          B:"“When I think of the Aldern crossing I do not see the ribbon being cut. I see the hairline crack in the second pier.”",
          C:"“A bridge is a conversation between a river and the people who have to get across it.”",
          D:"“I keep a photograph of every opening in a drawer that I do not very often pull open.”"
        },
        correct:'B',
        expCorrect:"The claim sets memory of failure against memory of ceremony, so the quotation should stage both and pick one. B does: the ribbon cutting is named and set aside, and the crack in the pier is what her mind supplies instead.",
        expWrong:{
          A:"Late and over budget is a record of trouble, but it is the project's public account rather than her memory of it. She is not the one remembering here.",
          C:"The line about a conversation is the book's philosophy, handsome and general. It applies to bridges, not to how she recalls any one of them.",
          D:"A drawer she rarely opens hints that she downplays the ceremonies. It supplies half the contrast and never shows what she remembers instead."
        },
        tip:"When a claim pits one thing against another, prefer the quotation that contains BOTH. A line that only dismisses the losing side leaves the winning side to be guessed."
      },
      {
        id:'EVB-31', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — quotation that illustrates a claim',
        passage:"In “The Locksmith’s Apprentice,” a young worker recalls his training in a small shop. A student claims that he learned the trade by listening rather than by watching.",
        stem:"Which quotation from “The Locksmith’s Apprentice” most effectively illustrates the student’s claim?",
        choices:{
          A:"“The shop smelled of oil and cut brass, and I can bring the whole of it back whenever I want to.”",
          B:"“I copied the way he held the pick, thumb low and wrist loose, until my hand stopped aching at night.”",
          C:"“Master Feld laid a cloth over the lock and told me to shut my eyes. After that I worked by the small clicks alone.”",
          D:"“Within a year I could open the shop’s practice locks faster than anyone trained there before me.”"
        },
        correct:'C',
        expCorrect:"The claim replaces one sense with another, so the quotation has to close off sight and open up hearing. C does both in order: the cloth and the shut eyes remove watching, and the clicks become the whole of his method.",
        expWrong:{
          A:"Oil and cut brass is the shop remembered through smell. Vivid, and about a third sense the claim never mentions.",
          B:"Copying how the master held the pick is learning by watching, which is exactly the route the claim rules out.",
          D:"Opening the practice locks fastest is the result of the training. A result cannot show which method produced it."
        },
        tip:"For a claim of the form \"by X rather than Y,\" the best quotation removes Y and puts X to work. One that shows only the outcome leaves the method open."
      },
      {
        id:'EVB-32', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Textual — quotation that illustrates a claim',
        passage:"“The Apple Loft” is narrated by a woman who stores fruit through the winter months. A reviewer claims that she trusts what she can smell over what she can see.",
        stem:"Which quotation from “The Apple Loft” most effectively illustrates the reviewer’s claim?",
        choices:{
          A:"“I set every apple stem up and an inch apart, so that no two of them ever touch all winter.”",
          B:"“A bruise shows first as a soft place under the skin, and I find them by pressing with the thumb.”",
          C:"“The loft gets cold enough in January that I can see my own breath by the little window.”",
          D:"“The fruit looked perfectly sound in the lamplight, but the loft smelled sweetish and I threw out the whole tray.”"
        },
        correct:'D',
        expCorrect:"The claim is about which sense wins when they disagree, so the quotation needs a disagreement and a verdict. D has both: sight says the fruit is fine, smell says otherwise, and the tray goes out. Smell overrules the eye in the same sentence.",
        expWrong:{
          A:"Stems up and an inch apart is her storing method. It is careful work, but no sense is being trusted over another.",
          B:"Finding bruises by pressing puts touch ahead of sight. The structure is right and the sense is wrong.",
          C:"Breath at the window is the cold of the loft. Atmosphere, with nothing at stake between her senses."
        },
        tip:"A claim that one sense, source, or authority beats another needs a moment of conflict. Quotations showing careful practice with no disagreement cannot settle a ranking."
      },
      {
        id:'EVB-33', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Textual — quotation that illustrates a claim',
        passage:"“The Mapmaker’s Daughter” is narrated by a woman recalling her father’s workshop. A scholar claims that she comes to read his maps as records of what he wished were true rather than of what he had seen.",
        stem:"Which quotation from “The Mapmaker’s Daughter” most effectively illustrates the scholar’s claim?",
        choices:{
          A:"“He drew the lake round, though we had both walked its ragged edge, because a round lake was what the council had been promised.”",
          B:"“He left the northern quarter blank for years and would not letter it until somebody had actually been there.”",
          C:"“My father could put a whole coastline on paper after one afternoon of standing and looking at it.”",
          D:"“He mixed a green ink for marshland himself and would not sell a drop of it to anybody who asked.”"
        },
        correct:'A',
        expCorrect:"The claim needs the map to depart from what he saw, and it needs a wish to explain the departure. A supplies both halves and the daughter's own witness: they walked the ragged shore together, the drawn lake is round, and the reason is the promise he had made.",
        expWrong:{
          B:"A blank quarter he refuses to letter is the careful opposite: it shows a mapmaker who will not put down what has not been seen.",
          C:"A coastline from one afternoon shows speed and skill. It suggests his maps came from looking, which cuts against the claim.",
          D:"Mixing his own green for marshland is a craftsman's habit. Ink is about how he drew, never about whether the drawing was true."
        },
        tip:"For a claim that a document distorts, the quotation must show the gap AND its motive. Lines about skill, materials or scruples describe the maker rather than the distortion."
      },
      {
        id:'EVB-34', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Textual — quotation that illustrates a claim',
        passage:"“Every Tuesday in Halloran Square” follows a fruit seller through one trading year. A student claims that the trader’s generosity toward customers is a calculation rather than an impulse.",
        stem:"Which quotation from “Every Tuesday in Halloran Square” most effectively illustrates the student’s claim?",
        choices:{
          A:"“I price the bruised fruit at four and the sound fruit at seven, and I know to the coin what a day will bring.”",
          B:"“I never let a child leave the stall with nothing in hand, and I could not tell you how the habit started.”",
          C:"“I put an extra pear in the bag for the woman with the two boys. Inside three weeks she had stopped going to Danek.”",
          D:"“By nine the whole square smells of wet cardboard and the pigeons have the run of the empty stalls.”"
        },
        correct:'C',
        expCorrect:"The claim joins two things that usually pull apart: he gives something away, and he is counting on a return. C reports the gift in the first sentence and the payoff in the second, with the rival stallholder named. The generosity is shown, and so is the arithmetic behind it.",
        expWrong:{
          A:"Pricing to the coin proves he calculates, but nothing is given away. It is the calculating half of the claim with the generosity missing.",
          B:"Never letting a child leave empty-handed is generosity he cannot even explain. That is impulse, which is the reading the claim rejects.",
          D:"Wet cardboard and pigeons is the square at closing time. Atmosphere cannot illustrate a claim about a character's motives."
        },
        tip:"For a claim that an action has a hidden motive, the quotation must show the action and the payoff. A line proving only the motive, or only the action, is half the evidence."
      }
    ]
  });
})();
