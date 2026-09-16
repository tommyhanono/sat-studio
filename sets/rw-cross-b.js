/* SAT Studio question set — Reading & Writing: Cross-Text Connections (CTB-01 a CTB-34) */
/* Segunda tanda de pares. El eje sigue siendo el ACUERDO PARCIAL, que es lo que
   mas cae en el examen real: Text 2 concede el dato y rechaza la explicacion,
   acepta el hallazgo y limita su alcance, apoya desde otro campo, replantea la
   pregunta, llega a la misma conclusion por un camino incompatible, o acepta el
   numero y duda del metodo. Ocho pares llevan un texto de epoca (carta, log,
   panfleto, cronica, prefacio) con su comentario moderno.
   Distractores por diseno: uno le atribuye a Text 2 una postura mas fuerte de la
   que tiene, otro invierte quien sostiene que, y el tercero describe la relacion
   que existiria si Text 2 dijera algo que no dice. */
(function(){
  window.SAT_SETS.push({
    id: 'rw-cross-b',
    title: 'Cross-Text Connections — Partial Agreement',
    section: 'rw',
    level: 'Media',
    description: 'Thirty-four paired-text items built around the relationship the SAT tests most often: partial agreement. Text 2 usually grants Text 1 its evidence and then refuses the explanation, the reach, the measure, or the question itself. Eight pairs set a period document against a modern reading of it.',
    minutes: 45,
    questions: [
      {
        id:'CTB-01', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — a limit on how far the finding reaches',
        passage:'<b>Text 1</b><br>Adapted from a report by Sabine Korhonen.<br>Fourteen beaver families were released on the Wraythe headwaters in 2019. Peak flow at the Eddisbury gauge, eight kilometers downstream, now arrives ninety minutes later and about a quarter lower than in the rainfall-matched storms we recorded before the release. The dams cost the trust nothing to build and nothing to maintain. A catchment that wants flood protection should stop pouring concrete and start moving beavers.<br><br><b>Text 2</b><br>Adapted from a response by Gideon Oparaugo.<br>Korhonen’s gauge readings are sound, and I helped survey two of her ponds. The ninety minutes, though, comes entirely from storms of thirty millimeters or less. In the two events above sixty millimeters, our pressure sensors show the ponds full within an hour and passing water as if the dams were not there. Beavers hold back the rain that was never going to flood anyone.',
        stem:'Based on the texts, how would Oparaugo (Text 2) most likely respond to Korhonen’s recommendation in Text 1?',
        choices:{
          A:'By accepting the measured delay while arguing that it vanishes in the storms flood defenses are built for.',
          B:'By questioning whether the Eddisbury gauge recorded peak flow accurately in the storms that followed 2019.',
          C:'By showing that the beaver ponds raise peak flow downstream once their dams fill during heavy rainfall.',
          D:'By recommending concrete defenses for the headwater reaches where beaver families have been released.'
        },
        correct:'A',
        expCorrect:'Oparaugo opens by conceding the measurement — “Korhonen’s gauge readings are sound” — so the quarrel is about which storms produced it. His sensors show the ponds “full within an hour and passing water as if the dams were not there” above sixty millimeters, which is why he ends with “beavers hold back the rain that was never going to flood anyone.”',
        expWrong:{
          B:'Text 2 endorses the gauge rather than doubting it. His whole argument needs Korhonen’s numbers to be right so that he can say which rainfall they came from.',
          C:'Stronger than anything Text 2 claims. Passing water “as if the dams were not there” is neutrality in a big storm, not an added flood peak.',
          D:'Text 2 never recommends concrete. He limits where the beavers help; he does not return to the option Text 1 rejected.'
        },
        tip:'When Text 2 concedes the measurement in its first sentence, look for the sentence that says which cases the measurement came from. The answer is a limit, not a denial.'
      },
      {
        id:'CTB-02', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — evidence granted, inference denied',
        passage:'<b>Text 1</b><br>Adapted from a memo by Delphine Vauquier.<br>When the Harrowgate branches cancelled overdue fines in September, nineteen thousand items came back within six weeks, four hundred of them written off years ago. The shelves are fuller than they have been since 2014, and the desk staff no longer spend their mornings arguing with borrowers. Fines were never revenue; they were a wall. Every library in the county should take the wall down.<br><br><b>Text 2</b><br>Adapted from a response by Amos Trelawny.<br>The nineteen thousand returns are in our own system and I do not dispute one of them. But six weeks of amnesty measures an amnesty, not a policy. Our branches ran the same offer in 2016: returns spiked, and borrowing by lapsed cardholders was back at its old level by spring. What a library still has when the novelty ends is the number that decides this.',
        stem:'Which choice best describes how Text 2 relates to Text 1?',
        choices:{
          A:'It denies that the written-off items counted in Text 1 were genuinely returned to the branches.',
          B:'It argues that overdue fines bring in revenue Harrowgate cannot replace once the fines are cancelled.',
          C:'It accepts the returns Text 1 reports but doubts that the change outlasts the weeks of the offer.',
          D:'It reports that lapsed cardholders borrowed more after the 2016 amnesty than they had borrowed before.'
        },
        correct:'C',
        expCorrect:'Trelawny grants the count outright — “I do not dispute one of them” — and attacks only what Vauquier reads into it. His 2016 case supplies the reason: returns spiked and lapsed borrowing “was back at its old level by spring,” so “what a library still has when the novelty ends is the number that decides this.”',
        expWrong:{
          A:'Text 2 confirms the returns; they are “in our own system.” Doubting them would remove the evidence his own comparison depends on.',
          B:'Revenue is the one thing Text 2 never argues. Text 1 raises it to dismiss it, and Trelawny leaves that dismissal alone.',
          D:'The reverse of what Text 2 says. Borrowing by lapsed cardholders returned to its old level, which is the point of the example.'
        },
        tip:'“Amnesty effect, not policy effect” is a timing objection. When Text 2 supplies an earlier run of the same program, read what happened after the spike — that is the claim.'
      },
      {
        id:'CTB-03', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — support from a second field',
        passage:'<b>Text 1</b><br>Adapted from a study by Kiri Matawhero.<br>On eight matched pairs of low-rise buildings in Tallon, the ones with planted roofs used eleven percent less electricity for cooling across two summers, and their roof membranes ran twenty degrees cooler at midday. A planted roof is the cheapest cooling a city owns. The building code should require one on every new flat roof in the district.<br><br><b>Text 2</b><br>Adapted from a report by Bastian Ohrdruf.<br>I am an insurer, not a botanist, and I have never measured a kilowatt. What our claims file shows is that flat roofs under planting are replaced after about thirty-two years rather than nineteen, because the membrane beneath is never cooked or frozen. Two membranes avoided across sixty years is the cost of the planting and more. The code change is sound for reasons that have nothing to do with summer bills.',
        stem:'Which choice best describes how the two texts relate?',
        choices:{
          A:'Text 2 disputes Text 1’s cooling figures with membrane temperatures recorded over a longer period.',
          B:'Text 2 reaches Text 1’s conclusion from claims data that does not rest on Text 1’s electricity readings.',
          C:'Text 2 concludes that planted roofs repay their cost only where summer electricity is expensive.',
          D:'Text 2 argues that the code should require planting on roofs already scheduled for replacement.'
        },
        correct:'B',
        expCorrect:'Ohrdruf sets the energy evidence aside in his first line — “I am an insurer, not a botanist, and I have never measured a kilowatt” — and still lands on Matawhero’s recommendation: “the code change is sound for reasons that have nothing to do with summer bills.” Same conclusion, evidence from a separate ledger.',
        expWrong:{
          A:'Text 2 neither uses nor challenges the cooling figures. His thirty-two years against nineteen is a replacement interval from a claims file, not a temperature record.',
          C:'A condition Text 2 explicitly does not impose. His arithmetic works on membranes, so it holds wherever roofs are replaced, whatever electricity costs.',
          D:'Text 2 supports the same rule as Text 1, which applies to every new flat roof. Nothing in his claims data narrows it to roofs due for replacement.'
        },
        tip:'When Text 2 begins by disclaiming the first author’s expertise, expect agreement from a different direction. Compare conclusions first, evidence second.'
      },
      {
        id:'CTB-04', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — same result, rival explanation',
        passage:'<b>Text 1</b><br>Adapted from a memo by Rosalie Nkanga.<br>The four farms that leased camera-guided weeders in 2023 cut herbicide purchases by thirty-eight percent in one season, on the same acreage and the same crops. The machines repay their lease in two years at current chemical prices. Growers who are waiting for the technology to mature are paying for that wait every time they fill a sprayer.<br><br><b>Text 2</b><br>Adapted from a response by Ewan Threadgill.<br>The thirty-eight percent is right; I reconciled the invoices myself. All four farms also moved that spring from continuous maize to a maize-and-clover rotation, and clover smothers exactly the weeds the sprayer used to chase. Two neighboring farms made the rotation change alone, with no machines, and cut purchases by thirty-one percent. The weeders may be billing for work the clover did.',
        stem:'Based on the texts, how would Threadgill (Text 2) most likely respond to the recommendation in Text 1?',
        choices:{
          A:'By disputing the herbicide invoices from which Text 1 calculates the thirty-eight percent cut.',
          B:'By concluding that farms which adopt a clover rotation end up buying more herbicide than farms that do not.',
          C:'By advising growers to lease the weeders only after two full seasons of continuous maize.',
          D:'By granting the size of the reduction while denying that the machines can be shown to have caused it.'
        },
        correct:'D',
        expCorrect:'Threadgill verifies the result himself — “the thirty-eight percent is right; I reconciled the invoices myself” — so the disagreement is about cause. The two rotation-only farms cut purchases thirty-one percent with no machines, leaving the weeders a small remainder: “billing for work the clover did.”',
        expWrong:{
          A:'He audited those invoices and confirms them. If the thirty-eight percent were wrong, his comparison with the thirty-one percent would have nothing to stand on.',
          B:'Backwards. The rotation-only farms cut herbicide purchases by thirty-one percent, which is why he credits the clover.',
          C:'A purchasing schedule Text 2 never proposes. His objection is about what the evidence attributes, not about when to sign a lease.'
        },
        tip:'Two changes in the same season means look for the case that got only one of them. Whatever that case achieves alone is what the other change cannot claim.'
      },
      {
        id:'CTB-05', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — the question reframed',
        passage:'<b>Text 1</b><br>Adapted from a proposal by Marguerite Solano.<br>We fitted raised-letter and braille plates at every junction of the Kelverton transit concourse. In our trials, blind travelers reached their platform with thirty-one percent fewer wrong turns, and the plates cost less than a single ticket machine. Wayfinding is a solved problem. What is missing is the will to bolt the solution to the wall.<br><br><b>Text 2</b><br>Adapted from a response by Piet Vandenbroek.<br>The plate trials replicate, and our runs match Solano’s within a point. But a traveler has to find the plate first, and in our runs that search took more than half the total journey time. A handset speaking each junction aloud as it was reached removed the search entirely. The question is not how to label a junction well but how a traveler learns that a junction is there.',
        stem:'Which choice best describes how Text 2 responds to Text 1?',
        choices:{
          A:'It confirms Text 1’s trial result but moves the problem from labeling junctions to locating them.',
          B:'It reports that travelers using raised-letter plates made more wrong turns than travelers without them.',
          C:'It argues that spoken guidance belongs at the junctions where plates are too costly to mount.',
          D:'It challenges the cost Text 1 gives for fitting plates throughout the Kelverton concourse.'
        },
        correct:'A',
        expCorrect:'Vandenbroek replicates the finding — “our runs match Solano’s within a point” — and then relocates the problem: the search for the plate “took more than half the total journey time,” so “the question is not how to label a junction well but how a traveler learns that a junction is there.”',
        expWrong:{
          B:'Text 2 reproduces Solano’s advantage rather than reversing it. The plates work; the time is spent getting to them.',
          C:'A cost-based compromise Text 2 never offers. His handset replaced the search itself, which is an argument about the task, not about the budget.',
          D:'Cost is Text 1’s point, not Text 2’s. Vandenbroek’s objection would stand even if the plates were free.'
        },
        tip:'A Text 2 that ends with “the question is not X but Y” is reframing. The correct choice names the new question, not a better answer to the old one.'
      },
      {
        id:'CTB-06', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — datum accepted, method doubted',
        passage:'<b>Text 1</b><br>Adapted from a report by Zenobia Ahmadi.<br>Ninety camera stations across the Dzhar valley logged snow leopards on two hundred and six nights last winter, and our analysts counted forty-one individual animals from coat patterns. Forty-one is nearly double the last published figure for this valley. The population is recovering, and the reserve’s grazing agreements are the obvious reason.<br><br><b>Text 2</b><br>Adapted from a response by Cormac Ellerslie.<br>I have no quarrel with two hundred and six detection nights; the images are public and I have looked at most of them. Coat matching, though, was done by eye on flank photographs, and in the trials we ran, two analysts given the same folder returned counts a third apart. Until the same animal photographed twice is reliably recognized as one animal, forty-one is a ceiling, not a count.',
        stem:'Based on the texts, how would Ellerslie (Text 2) most likely respond to the figure of forty-one animals in Text 1?',
        choices:{
          A:'By arguing that the valley holds more leopards than the ninety camera stations managed to detect.',
          B:'By disputing that snow leopards were photographed on two hundred and six separate nights last winter.',
          C:'By accepting the detections and questioning the procedure that turned those images into a count.',
          D:'By crediting the grazing agreements rather than the number of stations for the rise in detections.'
        },
        correct:'C',
        expCorrect:'Ellerslie concedes the raw evidence — “I have no quarrel with two hundred and six detection nights” — and targets the step after it. Two analysts on the same folder “returned counts a third apart,” so the number built from coat matching “is a ceiling, not a count.”',
        expWrong:{
          A:'The opposite of his worry. If one animal can be counted as two, forty-one is too high, not too low.',
          B:'He verifies the detections and says the images are public. The detections are not what he doubts.',
          D:'That attribution is Text 1’s own, and Text 2 never engages it. Ellerslie stops at whether the count is trustworthy.'
        },
        tip:'Separate the observation from the number built on it. When Text 2 grants the first and attacks the second, the answer says method, not data.'
      },
      {
        id:'CTB-07', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — same result, rival explanation',
        passage:'<b>Text 1</b><br>From a circular issued to shareholders in 1866 by the secretary of the Calder and Gore Canal Company.<br>Our tolls were reduced by a third at Michaelmas, and the tonnage carried upon the cut in the twelvemonth since has risen from ninety-one thousand tons to one hundred and forty thousand. Let no proprietor say the reduction was rashly made. Cheapness fills a canal, and the Company will prosper by carrying much at little rather than little at much.<br><br><b>Text 2</b><br>Adapted from a modern account by Ines Carvalho.<br>The Calder and Gore ledgers survive, and the tonnage in the 1866 circular is exactly what the wharf books show. What the circular omits is that the Ardswick colliery opened that spring and sent its whole output down the cut under a fixed contract. Strip out the colliery and the remaining traffic grew by four thousand tons. The toll cut is not what filled the canal.',
        stem:'Based on the texts, how would Carvalho (Text 2) most likely respond to the claim made in the 1866 circular?',
        choices:{
          A:'By showing that the wharf books record less tonnage in 1866 than the circular reported to shareholders.',
          B:'By confirming the tonnage figures while arguing that one new customer accounts for nearly all the rise.',
          C:'By concluding that the reduction in tolls drove traffic away from the canal in the year that followed.',
          D:'By recommending that the company restore the tolls it charged before the Michaelmas reduction.'
        },
        correct:'B',
        expCorrect:'Carvalho checks the circular against the ledgers and finds it honest — the tonnage “is exactly what the wharf books show” — then removes the colliery contract: “strip out the colliery and the remaining traffic grew by four thousand tons,” against a headline rise of forty-nine thousand. Hence “the toll cut is not what filled the canal.”',
        expWrong:{
          A:'She says the opposite: the wharf books match the circular. Her argument is about what caused the rise, not whether it happened.',
          C:'Nothing in Text 2 claims traffic fell. Removing the colliery still leaves growth of four thousand tons, which is small, not negative.',
          D:'Text 2 makes no recommendation about tolls at all. A historian’s attribution is not a pricing proposal.'
        },
        tip:'When a modern text confirms a period document’s numbers, the disagreement has moved to what the numbers were caused by. Find the factor the older text left out.'
      },
      {
        id:'CTB-08', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — a limit on how far the finding reaches',
        passage:'<b>Text 1</b><br>Adapted from a study by Thaddeus Wrenfield.<br>Across the eleven Brayton primaries that began serving breakfast in the classroom, absence fell from eight point one days per pupil to five point nine within a year, and the fall was largest in the schools with the poorest intakes. Two hours of a teaching assistant buys back a fortnight of school for a child. Every district should be serving breakfast.<br><br><b>Text 2</b><br>Adapted from a response by Ila Boronkay.<br>The Brayton numbers hold up, and the intake pattern is exactly what I would have predicted. Notice where the programme was placed: eleven schools, all in districts where a third of pupils arrive having eaten nothing. In the twenty-six schools we studied with well-fed intakes, the same programme moved absence by less than a tenth of a day. Breakfast repairs a particular problem, and only where that problem exists.',
        stem:'Which choice best describes how Text 2 relates to Text 1?',
        choices:{
          A:'It argues that teaching assistants are better used supervising lessons than serving breakfast.',
          B:'It disputes Text 1’s claim that absence fell most in the schools with the poorest intakes.',
          C:'It holds that classroom breakfasts raise absence in schools whose pupils already eat at home.',
          D:'It accepts Text 1’s result and narrows the conditions under which that result should be expected.'
        },
        correct:'D',
        expCorrect:'Boronkay endorses both the size and the shape of the finding — “the Brayton numbers hold up, and the intake pattern is exactly what I would have predicted” — then bounds it with her own twenty-six well-fed schools, where absence moved “less than a tenth of a day”: breakfast works “only where that problem exists.”',
        expWrong:{
          A:'Staffing is never Text 2’s subject. She would keep the programme in the districts where it works, so she is not arguing the assistants are misused.',
          B:'That pattern is what she says she would have predicted. Confirming it is how she builds her limit.',
          C:'Stronger than the evidence given. Less than a tenth of a day is close to no effect, not a harmful one.'
        },
        tip:'Ask where the study was run. When Text 2 supplies cases outside that setting and the effect disappears, the relationship is a boundary on scope.'
      },
      {
        id:'CTB-09', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — same policy, different ledger',
        passage:'<b>Text 1</b><br>Adapted from a paper by Juno Castellane.<br>Blocking the drains on Ardagh Moss stopped a loss of about four tonnes of carbon per hectare each year within two seasons: peat below the water table no longer oxidizes, and the eroding hags have begun to revegetate. A drained bog is a chimney. Every hectare rewetted is a chimney capped, and the arithmetic does not depend on anything happening decades from now.<br><br><b>Text 2</b><br>Adapted from a response by Radek Simonyi.<br>Castellane’s oxidation figures match our flux towers, and I would block the same drains tomorrow. What her arithmetic omits is that our rewetted plots emitted methane at roughly nine times the drained rate for their first eleven years. Across a century the swap is plainly worth making; across the fifteen years a government counts, a rewetted moss can look worse than the chimney it replaced.',
        stem:'Which choice best describes how the two texts relate?',
        choices:{
          A:'Text 2 endorses Text 1’s policy while arguing that its benefit is invisible on the horizon usually measured.',
          B:'Text 2 opposes rewetting on the ground that methane from wet peat outweighs what drainage releases.',
          C:'Text 2 disputes the oxidation losses that Text 1 attributes to peat lying above the water table.',
          D:'Text 2 claims that eroding hags revegetate too slowly to justify the expense of blocking the drains.'
        },
        correct:'A',
        expCorrect:'Simonyi agrees twice over — the flux towers match, and “I would block the same drains tomorrow” — while denying the claim that the arithmetic is immediate. Eleven years of methane at nine times the drained rate means that “across the fifteen years a government counts, a rewetted moss can look worse than the chimney it replaced.”',
        expWrong:{
          B:'He says the opposite over the long run: “across a century the swap is plainly worth making.” The methane is a timing problem, not a verdict against rewetting.',
          C:'Text 2 confirms those losses with its own flux towers. The oxidation number is the part both authors share.',
          D:'Revegetation appears only in Text 1 and Text 2 never contests it. His objection concerns methane, which Text 1 leaves out.'
        },
        tip:'Partial agreement often hides in a time frame. If Text 2 accepts the effect but changes the window over which it is counted, that is the relationship.'
      },
      {
        id:'CTB-10', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — fact granted, judgment reversed',
        passage:'<b>Text 1</b><br>From the preface Arthabel Crenshaw wrote in 1898 for the collected edition of his novel The Ledgerman, first published in twenty monthly parts.<br>I am asked whether I would write it so again. I would not. A monthly part must end where the printer requires and not where the story does, and I contrived twenty endings the book does not want. Let the reader who finds the middle chapters overwrought remember that they were written to a drum.<br><br><b>Text 2</b><br>Adapted from a modern critical study by Noor Zeitoun.<br>Crenshaw’s account of his method is accurate: the surviving proofs show him cutting to length in the last week of every month. But the overwrought middle he apologizes for is where the novel is alive. Deprived of the drum, in the two late books he wrote whole, he wrote three hundred pages of ledger and no ledgerman. The constraint he resented was doing work he never learned to do without it.',
        stem:'Based on the texts, how would Zeitoun (Text 2) most likely respond to Crenshaw’s judgment of his own method?',
        choices:{
          A:'By showing that the surviving proofs contradict Crenshaw’s account of cutting his parts to length.',
          B:'By arguing that the two novels Crenshaw wrote whole are the strongest work of his later career.',
          C:'By accepting his description of how he wrote while denying that the result was the flaw he took it for.',
          D:'By concluding that monthly publication placed no real constraint on the shape of Crenshaw’s chapters.'
        },
        correct:'C',
        expCorrect:'Zeitoun grants the method exactly as the preface describes it — “Crenshaw’s account of his method is accurate: the surviving proofs show him cutting to length” — and reverses the verdict on it: the apologized-for middle “is where the novel is alive,” and without the drum he produced “three hundred pages of ledger and no ledgerman.”',
        expWrong:{
          A:'The proofs are her confirmation, not her contradiction. She uses them to establish that the preface is telling the truth about the method.',
          B:'The reverse of her reading. The whole-written novels are her example of what Crenshaw produced badly once the deadline was gone.',
          D:'She never denies the constraint; she says it did him good. Denying it would remove the cause her argument depends on.'
        },
        tip:'An author judging his own work is still a claim to be tested. Watch for a Text 2 that accepts the description and rejects only the self-criticism attached to it.'
      },
      {
        id:'CTB-11', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — same result, rival explanation',
        passage:'<b>Text 1</b><br>Adapted from a report by Hester Vaandrager.<br>Willow along the Teal Fork has tripled in height since wolves returned to the valley in 2011, and elk no longer linger in the narrow bottoms where a predator can corner them. Nothing else about the drainage changed. Wolves do not merely kill; they move herds, and moving a herd off a streambank is how a river gets its trees back.<br><br><b>Text 2</b><br>Adapted from a response by Malik Osunbor.<br>The willow measurements are as much mine as hers; we share the transects. Two other things happened in 2011: the state raised the antlerless elk harvest sharply, and three wet years in a row lifted the water table under those same bottoms. On the Pilcher drainage, which has no wolves but had the same harvest and the same rain, willow doubled. Wolves are on that bank, and so is the weather.',
        stem:'Based on the texts, how would Osunbor (Text 2) most likely respond to the explanation offered in Text 1?',
        choices:{
          A:'By disputing the transect measurements that record willow height along the Teal Fork.',
          B:'By accepting the willow recovery and arguing that wolves cannot be credited with most of it.',
          C:'By showing that elk on the Pilcher drainage avoid narrow bottoms more than Teal Fork elk do.',
          D:'By concluding that willow cannot recover on drainages where the water table has not risen.'
        },
        correct:'B',
        expCorrect:'Osunbor co-owns the evidence — “the willow measurements are as much mine as hers; we share the transects” — so he cannot be denying the recovery. His wolf-free Pilcher drainage, with the same harvest increase and the same wet years, doubled its willow, which leaves the wolves only the difference between doubling and tripling.',
        expWrong:{
          A:'He shares the transects. Disputing them would destroy the comparison with Pilcher that carries his argument.',
          C:'Elk behavior on Pilcher is never described. The drainage matters to him because of what it lacks, namely wolves.',
          D:'Stronger than his evidence allows. He names the water table as one contributor among several, not as a requirement.'
        },
        tip:'A control site is the heart of a rival-explanation response. Read what the control had and what it lacked, then give the disputed cause only the leftover difference.'
      },
      {
        id:'CTB-12', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — the question reframed',
        passage:'<b>Text 1</b><br>Adapted from a paper by Anneke Ravenscroft.<br>A stacked indoor farm spends about eleven kilowatt-hours to bring a kilogram of leaf to the loading dock; a field spends less than one. Lighting is the whole of that difference and it is not going away. Until electricity is both clean and cheap, the honest verdict on vertical farming is that it moves emissions indoors and calls the move progress.<br><br><b>Text 2</b><br>Adapted from a response by Julius Mbanefo.<br>The eleven kilowatt-hours is right and I use the same figure. It is also the answer to a question no buyer asks. Our supermarket contracts price leaf on shelf life and waste: field lettuce trucked nine hundred kilometers loses thirty-one percent before it is sold, the stacked crop four percent. Count kilograms eaten instead of kilograms grown and the ledger looks like neither of us expected.',
        stem:'Which choice best describes how Text 2 responds to Text 1?',
        choices:{
          A:'It rejects Text 1’s energy figure by measuring electricity use after the crop reaches the supermarket.',
          B:'It concludes that indoor lettuce reaches the shelf with lower emissions than field lettuce everywhere.',
          C:'It argues that field lettuce would waste far less if it were trucked shorter distances to the shelf.',
          D:'It grants Text 1’s energy figure but argues that the comparison should be drawn at a later point.'
        },
        correct:'D',
        expCorrect:'Mbanefo adopts the number — “the eleven kilowatt-hours is right and I use the same figure” — and objects to where the accounting stops: waste of thirty-one percent against four percent means we should “count kilograms eaten instead of kilograms grown.” He deliberately declines a verdict: the ledger “looks like neither of us expected.”',
        expWrong:{
          A:'He accepts the figure rather than rejecting it, and his waste percentages are not electricity measurements.',
          B:'Stronger than he claims. Refusing to say who wins is the point of his last sentence.',
          C:'Shorter routes are never proposed. The transport loss is evidence for changing the unit of comparison, not a logistics recommendation.'
        },
        tip:'Per-unit comparisons hide a choice of unit. When Text 2 keeps the number and changes what it is divided by, the relationship is a reframing.'
      },
      {
        id:'CTB-13', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — datum accepted, method doubted',
        passage:'<b>Text 1</b><br>Adapted from a survey by Clement Fairweather.<br>Telephone interviews with nine hundred speakers along the Marrow coast show the vowels of cot and caught merged in everyone below thirty and distinct in everyone above sixty. Forty years of predicted change has happened in one generation. The old distinction survives only among speakers who learned it before the highway joined the coast to the interior.<br><br><b>Text 2</b><br>Adapted from a response by Ngozi Okereke.<br>Fairweather’s nine hundred interviews are the largest sample anyone has for this coast, and the age gradient is in my data too. But an interview elicits the most careful speech a person produces, and careful speech restores distinctions that ordinary talk has already dropped. In recordings we made at market stalls, speakers over sixty merged the pair about half the time. The merger is older and further along than the telephone shows.',
        stem:'Based on the texts, how would Okereke (Text 2) most likely respond to Text 1’s account of the merger?',
        choices:{
          A:'By accepting the age pattern while arguing that the interview method understates how far the merger has gone.',
          B:'By maintaining that speakers over sixty on the Marrow coast keep the distinction more consistently than Text 1 reports.',
          C:'By disputing whether nine hundred speakers is a large enough sample to describe change along the coast.',
          D:'By concluding that careful speech in interviews is what causes younger speakers to merge the two vowels.'
        },
        correct:'A',
        expCorrect:'Okereke concedes the gradient — “the age gradient is in my data too” — and attacks the instrument: interviews elicit “the most careful speech a person produces,” and at market stalls speakers over sixty “merged the pair about half the time.” Her correction runs in one direction only: “the merger is older and further along than the telephone shows.”',
        expWrong:{
          B:'The exact inversion of her market-stall evidence, where the oldest speakers merge far more than the telephone suggested.',
          C:'She calls the sample “the largest anyone has for this coast.” Her objection is to how the speech was collected, not to how many speakers were reached.',
          D:'Careful speech in her account hides a merger that is already there; it does not create one, least of all among the young.'
        },
        tip:'Ask what situation produced the data. If Text 2 gathers the same behavior in a looser setting and gets a different number, the criticism is about the instrument.'
      },
      {
        id:'CTB-14', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — evidence granted, inference denied',
        passage:'<b>Text 1</b><br>From an anonymous pamphlet printed at Ardswick in 1774, Reasons for the Enclosure of Marram Common.<br>Where the common lies open, every cottager turns out what beasts he pleases, and the herbage is eaten to the root before midsummer. Divide it, hedge it, and the same acres will carry near twice the stock, as the enclosed fields at Gorse Bank already do. The poor man loses a right he cannot use and gains a country able to feed him.<br><br><b>Text 2</b><br>Adapted from a modern study by Solenne Pritchard.<br>The pamphleteer was right about the grass. Stocking records after the 1776 award show the enclosed acres carrying ninety percent more animals, much as Gorse Bank had. They also show who owned them: of forty-one cottagers holding common rights before the award, nine held any allotment after it, the rest having sold to meet the cost of fencing what they were given.',
        stem:'Based on the texts, how would Pritchard (Text 2) most likely respond to the pamphlet’s argument?',
        choices:{
          A:'By showing that the enclosed acres at Ardswick carried fewer animals than the open common had carried.',
          B:'By arguing that cottagers holding common rights had rarely turned out any animals before the award.',
          C:'By confirming the gain in stock while denying the pamphlet’s claim about who would benefit from it.',
          D:'By concluding that the cost of fencing was too small to have altered the cottagers’ holdings.'
        },
        correct:'C',
        expCorrect:'Pritchard opens by conceding the agricultural claim — “the pamphleteer was right about the grass,” with ninety percent more animals — and then reads the second half of the same records: thirty-two of forty-one cottagers sold out to pay for fencing. The pamphlet promised the poor man “a country able to feed him”; the records say who owned the animals.',
        expWrong:{
          A:'She reports the opposite: the enclosed acres carried ninety percent more stock, which is the part of the pamphlet she upholds.',
          B:'The pamphlet, not Pritchard, dismisses the cottagers’ use of the common. Her records show them losing allotments, which assumes the right was worth something.',
          D:'Fencing costs are central to her argument, not negligible: they are why thirty-two cottagers sold.'
        },
        tip:'When a period text makes a technical claim and a welfare claim together, a modern reply often keeps the first and tests the second against the records.'
      },
      {
        id:'CTB-15', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — a limit on how far the finding reaches',
        passage:'<b>Text 1</b><br>Adapted from a paper by Estella Brandvold.<br>Thin sections of mortar from the Torrian harbor mole show millimeter lumps of unslaked lime scattered through the matrix. Crack a sample and soak it and those lumps dissolve, travel, and seal the crack within three weeks; our poured replicas do the same. Modern cement carries no such reservoir. Mixing hot lime back into the batch would give a wall two thousand years instead of eighty.<br><br><b>Text 2</b><br>Adapted from a response by Hamish Quartey.<br>The sealing is real; I have watched the replicas close under the microscope. It also needs water moving through the crack, which is why a harbor mole is where it was found. In the dry piers we tested, cracks left open nine months sealed not at all, and mortar with lime clasts begins thirty percent weaker in compression than the mix it would replace.',
        stem:'Which choice best describes how Text 2 relates to Text 1?',
        choices:{
          A:'It accepts the healing mechanism and specifies the conditions outside which the trade is a bad one.',
          B:'It maintains that the lime lumps in the Torrian mortar never sealed cracks in the original structure.',
          C:'It argues that modern cement holds a reservoir of unslaked lime comparable to the ancient mixes.',
          D:'It concludes that mortar made with lime clasts is stronger in compression than the mixes now in use.'
        },
        correct:'A',
        expCorrect:'Quartey confirms the mechanism first-hand — “the sealing is real; I have watched the replicas close under the microscope” — then fences it in. Healing “needs water moving through the crack,” dry piers “sealed not at all,” and the mix “begins thirty percent weaker in compression,” so a dry, loaded wall takes the penalty without the repair.',
        expWrong:{
          B:'He says the sealing is real and reproduces it. His limit is about where it happens, not whether it happens.',
          C:'Text 1 says modern cement has no such reservoir and Text 2 never contradicts that. His objection is strength and moisture, not chemistry.',
          D:'The reverse of his figure. Thirty percent weaker in compression is the cost he weighs against the repair.'
        },
        tip:'A mechanism plus a condition is a boundary, not a refutation. Note the setting where the original evidence was collected, then check whether Text 2 changes it.'
      },
      {
        id:'CTB-16', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — support from a second field',
        passage:'<b>Text 1</b><br>Adapted from a study by Lucinda Perrault.<br>We stripped mistletoe from forty woodland plots and left forty untouched. Three years on, the stripped plots had lost a quarter of their breeding bird species, among them every insect-eater that nests below the canopy. Mistletoe is not a parasite to be tidied away. Remove it and the wood empties from the middle out.<br><br><b>Text 2</b><br>Adapted from a response by Osip Varkonyi.<br>I study leaf litter and I have not counted a bird. Mistletoe drops its leaves green and drops them year-round, and on our plots that litter held four times the invertebrate mass of litter under the same trees without it, right through the dry months when nothing else falls. Whatever the birds were doing, the food they hunt is on the ground because the mistletoe is overhead.',
        stem:'Which choice best describes how the two texts relate?',
        choices:{
          A:'Text 2 questions whether the stripped plots lost as many breeding species as Text 1 reports.',
          B:'Text 2 argues that mistletoe litter feeds invertebrates only in the months when other leaves fall.',
          C:'Text 2 concludes that removing mistletoe harms the trees in which Text 1’s birds build their nests.',
          D:'Text 2 explains Text 1’s result with evidence from the forest floor rather than from bird surveys.'
        },
        correct:'D',
        expCorrect:'Varkonyi disclaims the bird evidence — “I study leaf litter and I have not counted a bird” — and supplies the mechanism underneath it: mistletoe litter “held four times the invertebrate mass,” so “the food they hunt is on the ground because the mistletoe is overhead.” Different field, same conclusion.',
        expWrong:{
          A:'He never touches the species counts; his sentence about not counting birds says so directly.',
          B:'Inverted. His litter works “right through the dry months when nothing else falls,” which is exactly when other leaves do not.',
          C:'Harm to the host trees is nowhere in Text 2. His plots measure invertebrates in litter, not tree condition.'
        },
        tip:'Support can arrive as a mechanism. If Text 2 explains why Text 1’s effect would happen, it is reinforcing the claim even while measuring something else.'
      },
      {
        id:'CTB-17', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — a limit on how far the finding reaches',
        passage:'<b>Text 1</b><br>Adapted from a report by Barnaby Castleford.<br>Two hundred recorders left in the Ellsmere fens returned nine million call detections last season, and the classifier agreed with human listeners on ninety-four percent of a checked sample. One summer of machine listening produced more occurrence records than the county’s birdwatchers produced in twenty years. Survey work of the old kind is finished.<br><br><b>Text 2</b><br>Adapted from a response by Yuki Brambell.<br>Ninety-four percent is what we get as well, and the fens dataset is a gift. Read the errors, though. That agreement is carried by six common species that make up most of the calls. On the eleven scarce species the county actually monitors, precision fell below a half, and the classifier invented bitterns on nights when no bittern was present.',
        stem:'Based on the texts, how would Brambell (Text 2) most likely respond to Text 1’s claim that old-style survey work is finished?',
        choices:{
          A:'By accepting the overall accuracy while showing it collapses for the species the surveys exist to track.',
          B:'By disputing the number of call detections that the recorders returned from the fens across the season.',
          C:'By arguing that human listeners misidentify scarce species more often than the classifier misidentifies them.',
          D:'By concluding that the classifier performs worst on the six common species that dominate the recordings.'
        },
        correct:'A',
        expCorrect:'Brambell reproduces the headline figure — “ninety-four percent is what we get as well” — and then disaggregates it: the agreement “is carried by six common species,” while on the eleven scarce species “precision fell below a half.” An average that is excellent where nobody is worried is not a replacement for monitoring.',
        expWrong:{
          B:'She calls the dataset a gift and works from the same accuracy figure. The volume of detections is not in dispute.',
          C:'Text 2 never compares human error rates. Her comparison is between common and scarce species within the classifier.',
          D:'Backwards. The common species are where the classifier does well; the scarce ones are where it fails.'
        },
        tip:'An average can hide the cases that matter. When Text 2 splits one accuracy figure into groups, the answer is about where the tool fails, not whether the figure is real.'
      },
      {
        id:'CTB-18', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — datum accepted, method doubted',
        passage:'<b>Text 1</b><br>From the log kept by Tobias Merrow, keeper of the Stannard Point light, entry of January 1861.<br>I have kept this book twelve winters and I set down what the glass and my own eyes agree upon. Gales of the first order, such as strip the turf from the headland, numbered four in my first six winters and eleven in my last six. The sea is not what it was when I came, and any keeper on this coast will tell you the same.<br><br><b>Text 2</b><br>Adapted from a modern analysis by Halina Drozd.<br>Merrow’s log is the best early record this coast has, and his counts are copied faithfully into the Board returns. But in 1855 the Board issued its keepers a printed form with a column for storms and a definition to enter them under, and every light on the coast reports more gales after that year, including three where the barometric record shows no change at all.',
        stem:'Which choice best describes how Text 2 responds to Text 1?',
        choices:{
          A:'It contends that the Board’s printed form led keepers to record fewer gales than they had before.',
          B:'It disputes whether Merrow’s entries were copied accurately into the returns kept by the Board.',
          C:'It treats the log as honest but argues that a change in recording practice could produce the trend.',
          D:'It concludes that the barometric record confirms the rise in first-order gales that Merrow describes.'
        },
        correct:'C',
        expCorrect:'Drozd grants Merrow both accuracy and good faith — his log is “the best early record this coast has” and his counts are “copied faithfully into the Board returns.” The 1855 printed form is her alternative cause: every light reports more gales afterward, “including three where the barometric record shows no change at all.”',
        expWrong:{
          A:'The opposite of her evidence. Lights report more gales after the form arrives, which is why the rise may be bookkeeping.',
          B:'She states that the copying was faithful. Her doubt is about what a keeper counted as a gale, not about transcription.',
          D:'The barometric record is her counterexample: at three lights it shows no change while the reported gales rise.'
        },
        tip:'A trend can be made by a change in how things are recorded. When Text 2 dates an administrative change, check whether the trend starts with the change or with the weather.'
      },
      {
        id:'CTB-19', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — same conclusion, incompatible routes',
        passage:'<b>Text 1</b><br>Adapted from a report by Fiora Venturini.<br>The Larkhall trust has sold one hundred and sixty homes under a resale formula that caps the seller’s gain at a quarter of the market rise. Twenty-two years on, every one of those homes has resold below eighty percent of the neighborhood price, and none has left the portfolio. The formula is the machine. Write it into the deed and affordability outlives the people who signed it.<br><br><b>Text 2</b><br>Adapted from a response by Abel Tarkington.<br>Larkhall’s prices are what Venturini says, and I would put the trust on any list of things that have worked. The formula is not what did it. Four trusts in our sample used the identical clause and lost half their stock, because their homes were scattered through speculative blocks and buyers litigated. Larkhall holds the ground lease on nine contiguous streets.',
        stem:'Which choice best describes how the two texts relate?',
        choices:{
          A:'Text 2 rejects Text 1’s resale prices using evidence from four trusts with the same deed clause.',
          B:'Both credit the Larkhall trust with lasting affordability but disagree about what produced it.',
          C:'Text 2 argues that resale formulas leave housing less affordable than unrestricted ownership does.',
          D:'Both conclude that a resale formula preserves affordability wherever it is written into a deed.'
        },
        correct:'B',
        expCorrect:'Tarkington accepts the outcome — “Larkhall’s prices are what Venturini says, and I would put the trust on any list of things that have worked” — and denies the mechanism: “the formula is not what did it.” Four trusts with “the identical clause” lost half their stock, so he credits the contiguous ground lease instead.',
        expWrong:{
          A:'He confirms the prices in his first sentence. The four trusts are evidence about the clause, not about Larkhall’s resale figures.',
          C:'He calls the trust a success. Nothing in Text 2 prefers unrestricted ownership.',
          D:'That is Text 1’s conclusion alone, and it is precisely what the four failed trusts are cited to refute.'
        },
        tip:'When both authors approve of the same case, the question has moved to why it worked. Look for the sentence in Text 2 that names a different cause.'
      },
      {
        id:'CTB-20', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — evidence granted, inference denied',
        passage:'<b>Text 1</b><br>Adapted from a report by Mercedes Okonjo.<br>Sonar at the Skerry Sound turbine tracked eleven thousand fish through the rotor arc over two seasons. Ninety-nine point four percent came out the far side swimming normally, a survival rate no hydroelectric dam on this coast approaches. Tidal power can be built inside a migration corridor without emptying it.<br><br><b>Text 2</b><br>Adapted from a response by Lars Vinterhalter.<br>Okonjo’s survival figure is solid, and I have watched the same footage. It is a figure about the fish that went in. Our tagged salmon, tracked over those same seasons, turned aside at forty meters and took the long channel around the headland: four days added to a run that carries about nine days of spare energy. Nothing was killed. A corridor can be emptied by being avoided.',
        stem:'Based on the texts, how would Vinterhalter (Text 2) most likely respond to the conclusion in Text 1?',
        choices:{
          A:'By presenting evidence that the rotor kills a larger share of migrating salmon than the sonar recorded.',
          B:'By disputing the sonar count of eleven thousand fish passing the turbine across the two seasons.',
          C:'By concluding that salmon taking the long channel around the headland arrive in better condition.',
          D:'By accepting the survival rate and arguing that it counts only the fish that chose to pass through.'
        },
        correct:'D',
        expCorrect:'Vinterhalter calls the number solid and names its blind spot in one line: “it is a figure about the fish that went in.” His tagged salmon “turned aside at forty meters,” spending four of nine spare days on the detour, so “a corridor can be emptied by being avoided” even when, as he says, “nothing was killed.”',
        expWrong:{
          A:'He states plainly that nothing was killed. Mortality is the one charge he does not bring.',
          B:'The sonar count is evidence he accepts and watches himself. His objection is about which fish it includes.',
          C:'Inverted. The detour costs four days out of a nine-day energy margin, which is a loss, not an improvement.'
        },
        tip:'Survival rates count survivors of the ones who entered. If Text 2 studies the animals that never entered, the response is about a missing population, not a disputed number.'
      },
      {
        id:'CTB-21', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — the question reframed',
        passage:'<b>Text 1</b><br>Adapted from a study by Philippa Crowe.<br>Students who took notes by hand in our lecture trials wrote forty percent fewer words than the laptop group and scored higher a week later on questions asking them to apply the material. Writing slowly forces a choice about what matters, and that choice is where the learning happens. Lecture halls should put the laptops away.<br><br><b>Text 2</b><br>Adapted from a response by Emmanuel Adjei.<br>We reproduced Crowe’s gap on her own test and would defend it. Then we gave both groups their notes back before the exam. The laptop group, studying from something close to a transcript, came out four points ahead; the handwriting group had nothing with which to recover what it had left out. Whether a hall should ban laptops depends on whether notes are a record or a rehearsal.',
        stem:'Which choice best describes how Text 2 responds to Text 1?',
        choices:{
          A:'It reproduces Text 1’s finding and argues that the conclusion turns on a question Text 1 never asks.',
          B:'It shows that handwritten notes contain more words than the laptop group managed to record.',
          C:'It concludes that laptops improve learning in lecture halls however the notes are later used.',
          D:'It disputes the application questions Text 1 used to compare the groups a week after the lecture.'
        },
        correct:'A',
        expCorrect:'Adjei replicates and defends the original result — “we reproduced Crowe’s gap on her own test and would defend it” — then changes the conditions and gets the reverse: with notes returned, the laptop group “came out four points ahead.” His closing line names the unasked question: “whether notes are a record or a rehearsal.”',
        expWrong:{
          B:'Backwards. The handwriting group wrote forty percent fewer words, which is why it had less to study from.',
          C:'Too strong, and it drops his condition. His laptop advantage appears only when students get their notes back before the exam.',
          D:'He defends that test rather than disputing it; it is the instrument on which he reproduces her gap.'
        },
        tip:'When Text 2 repeats the study with one extra step, the new step is the argument. Ask what the original design assumed about how the result would be used.'
      },
      {
        id:'CTB-22', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — a limit on how far the finding reaches',
        passage:'<b>Text 1</b><br>Adapted from a paper by Rowan Dunkerley.<br>The Vallen eruption of 2019 launched a raft of pumice that drifted eight hundred kilometers and grounded on the Tesker reefs. We lifted three hundred stones and found forty-one attached taxa on them, corals among them, all absent from Tesker since the bleaching. A raft is a ferry, and reefs have been riding these ferries for as long as there have been volcanoes.<br><br><b>Text 2</b><br>Adapted from a response by Saskia Thorvald.<br>Dunkerley’s stones carry exactly what she says they carry. Two years of monitoring the grounding sites, though, turned up no coral recruit from the raft still alive, and the settled larvae we could identify were the same broadcast spawners that arrive on the summer current anyway. The ferry brings passengers who were already coming, and they do not survive the landing.',
        stem:'Based on the texts, how would Thorvald (Text 2) most likely respond to Text 1’s account of pumice rafts?',
        choices:{
          A:'By disputing that pumice from the Vallen eruption reached the Tesker reefs in 2019 at all.',
          B:'By arguing that raft-borne corals outcompete the spawners arriving on the summer current.',
          C:'By granting what the stones carried and doubting that any of it establishes on the reef.',
          D:'By concluding that bleaching removed the forty-one taxa Dunkerley identified on the stones.'
        },
        correct:'C',
        expCorrect:'Thorvald concedes the cargo — “Dunkerley’s stones carry exactly what she says they carry” — and denies the destination. Two years of monitoring found “no coral recruit from the raft still alive,” and the survivors were species that “arrive on the summer current anyway.”',
        expWrong:{
          A:'The grounding is the premise of her own monitoring. She studied the sites where the raft landed.',
          B:'The reverse of her finding: the raft species did not persist, and the spawners were arriving without it.',
          D:'Bleaching in Text 1 explains why those taxa were absent from Tesker, not why they appear on the stones.'
        },
        tip:'Arriving and establishing are two different claims. When Text 2 follows the arrivals forward in time, it is testing the second one.'
      },
      {
        id:'CTB-23', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections — result confirmed, conclusion out of reach',
        passage:'<b>Text 1</b><br>From the journal of Elias Warbeck, surgeon of the Providence, 1694.<br>Of the scurvy I have this to say. Four men brought below in the eleventh week, their gums black and their legs spotted, were given the juice of lemons kept in a stopped jar, and in nine days two walked the deck. Yet the same juice, drawn from the great cask we opened at the Cape, did nothing for six others, though given in double measure. The virtue of the fruit is in the keeping of it, and no surgeon I know can say what keeps it.<br><br><b>Text 2</b><br>Adapted from a modern study by Ramona Esteves.<br>Warbeck’s two trials are as clean as any in his century, and the outcome is what we would now predict: the acid that cures scurvy degrades with heat and air, so juice boiled down for a cask is nearly inert while juice in a stopped jar is not. Notice, though, what he could not conclude. Having no notion of a nutrient, he read the failure as a property of the keeping and reported a puzzle where we read a result.',
        stem:'Which choice best describes how Text 2 relates to Text 1?',
        choices:{
          A:'It argues that Warbeck’s cask trial was too poorly controlled to show anything about lemon juice.',
          B:'It confirms the pattern Warbeck recorded and explains why he could not draw the conclusion it supports.',
          C:'It claims that Warbeck identified the nutrient responsible and was disregarded by the surgeons of his day.',
          D:'It maintains that juice kept in a stopped jar loses its virtue faster than juice boiled down for a cask.'
        },
        correct:'B',
        expCorrect:'Esteves calls the trials “as clean as any in his century” and supplies the modern reading: the acid “degrades with heat and air,” so cask juice is inert and jar juice is not. Her second move is about what the period could think: “having no notion of a nutrient, he read the failure as a property of the keeping.”',
        expWrong:{
          A:'She praises the trials rather than faulting them. Her point is about interpretation, not design.',
          C:'The opposite of her account. Warbeck writes that no surgeon he knows can say what preserves the virtue, and she says he reported a puzzle, not a mechanism.',
          D:'Inverted. Both texts have the jar juice working and the cask juice failing, which is the pattern she explains.'
        },
        tip:'A modern text can accept a period observation completely and still deny that the period could have reasoned from it. Watch for the phrase about what the earlier writer could not know.'
      },
      {
        id:'CTB-24', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — claim granted, self-description read as convention',
        passage:'<b>Text 1</b><br>From Cassian Peverell’s dedication to his volume Winter Assizes, 1841.<br>These verses were made between November and March, in a house where I saw no one and read nothing, and I send them out as they came to me. If they are rough, the season is answerable for it. I have taken no man’s measure and no man’s matter, and whatever is wrong in them is my own, which I had rather than be right at another’s expense.<br><br><b>Text 2</b><br>Adapted from a modern study by Bela Marchand.<br>The winter is not in dispute: the notebooks are dated and the sequence falls between the first snow and the thaw. The reading is another matter. Peverell’s stanza is Harrow’s, his opening turn is borrowed twice from the Dunleath ballads, and a library slip in the same notebook lists both. To say so is not to convict him. The dedication is a form, as fixed as the stanza, and what Peverell does with a borrowed measure is the argument for him.',
        stem:'Based on the texts, how would Marchand (Text 2) most likely respond to Peverell’s dedication?',
        choices:{
          A:'By showing from the notebooks that the sequence was composed across several years rather than one winter.',
          B:'By arguing that Peverell’s borrowings from earlier poets leave the volume less original than it appears.',
          C:'By concluding that the dedication was written by someone other than the poet whose name it carries.',
          D:'By accepting its account of when the poems were made and treating its claim of isolation as a convention.'
        },
        correct:'D',
        expCorrect:'Marchand concedes the dating outright — “the winter is not in dispute: the notebooks are dated” — and then treats the claim of having “read nothing” as a genre requirement rather than a lie: “the dedication is a form, as fixed as the stanza.” The library slip shows the reading; the verdict is still favorable.',
        expWrong:{
          A:'She confirms the compressed composition. The notebooks are her evidence for the winter, not against it.',
          B:'She refuses that inference in two sentences: “to say so is not to convict him,” and what he does with a borrowed measure “is the argument for him.”',
          C:'Authorship is never questioned. She reads the dedication as Peverell following a convention, which assumes he wrote it.'
        },
        tip:'A period text can be accurate about facts and conventional about self-presentation. When Text 2 calls a claim “a form,” it is denying the implication, not the authorship.'
      },
      {
        id:'CTB-25', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections — method faulted, conclusion strengthened',
        passage:'<b>Text 1</b><br>Adapted from a paper by Bituin Rosario.<br>Cross-sections from two hundred and forty fire-scarred stumps on the Kaweah benches record a fire somewhere on the slope every six to nine years from 1490 to 1860, and almost none afterward. That interval is too regular for lightning, whose strikes here cluster into a few dry Augusts. People were burning this slope on a schedule, and the century since is the anomaly.<br><br><b>Text 2</b><br>Adapted from a response by Nathaniel Okoro.<br>Rosario’s chronology is the best on the range and I use it myself. I want to press on what a scar is. A tree records a fire only when the fire is hot enough to wound it and cool enough to leave it standing, and our burn plots show that the low, patchy fires set to tend an understory scar fewer than one stump in five. Six to nine years is a ceiling on the interval.',
        stem:'Which choice best describes how Text 2 relates to Text 1?',
        choices:{
          A:'It faults the sensitivity of Text 1’s record in a way that reinforces rather than weakens its conclusion.',
          B:'It argues that the intervals Text 1 reports are too short to have been produced by deliberate burning.',
          C:'It contends that lightning in a few dry Augusts explains the regularity Text 1 attributes to people.',
          D:'It maintains that fire-scarred stumps record low, patchy fires more reliably than intense fires.'
        },
        correct:'A',
        expCorrect:'Okoro adopts the chronology — “the best on the range and I use it myself” — and then shows what it must miss: tending fires “scar fewer than one stump in five,” so “six to nine years is a ceiling on the interval.” A record that undercounts fires makes deliberate, frequent burning more likely, not less.',
        expWrong:{
          B:'He argues the intervals are if anything too long, since the gentlest fires leave no scar to count.',
          C:'Lightning is Text 1’s rejected explanation, and Text 2 never revives it. His subject is what stumps can register.',
          D:'The reverse of his figure. Fewer than one in five low, patchy fires leaves a scar, which is why the record is incomplete.'
        },
        tip:'A criticism of a method is not automatically a criticism of the conclusion. Work out which direction the bias runs before choosing.'
      },
      {
        id:'CTB-26', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — endorsement with a circularity carved out',
        passage:'<b>Text 1</b><br>Adapted from a paper by Sorcha Bellweather.<br>Nine volcanic ash layers in the Fensgard core are chemically matched to dated eruptions, and counting the annual layers between them gives a chronology good to about two years anywhere in the last four millennia. Any other archive containing the same ashes can be pinned to this one. The Fensgard core is now the clock the region should set itself by.<br><br><b>Text 2</b><br>Adapted from a response by Emeka Danladi.<br>The layer counts are excellent and the chemistry is unambiguous; our own laboratory made three of those matches. The trouble begins at the word any. Two of the nine eruptions have no independent date: they were dated by the Fensgard counts themselves. Tie a bog record to the core on those two ashes, then use the bog to check the core, and the agreement you get is the clock listening to itself.',
        stem:'Based on the texts, how would Danladi (Text 2) most likely respond to Text 1’s proposal?',
        choices:{
          A:'By arguing that annual layer counting in the Fensgard core drifts by more than two years per millennium.',
          B:'By rejecting the chemical matches that connect the Fensgard ash layers to known volcanic eruptions.',
          C:'By endorsing the chronology while restricting which ash layers may be used to date another archive.',
          D:'By proposing that bog records should be dated before the ice core rather than afterward.'
        },
        correct:'C',
        expCorrect:'Danladi affirms both halves of the method — “the layer counts are excellent and the chemistry is unambiguous” — and objects to one word: “the trouble begins at the word any.” Two of the nine ashes “were dated by the Fensgard counts themselves,” so tying an archive on those two and checking back produces “the clock listening to itself.”',
        expWrong:{
          A:'He calls the counts excellent. His worry is about which tie points carry outside dates, not about counting error.',
          B:'The chemistry is what he explicitly endorses, and his laboratory produced three of the matches.',
          D:'He never reorders the dating. Seven of the nine ashes remain usable as they are: “tie away,” for those.'
        },
        tip:'Circularity objections leave most of a method standing. Find the subset that lacks independent support and the correct choice will be about that subset.'
      },
      {
        id:'CTB-27', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections — the measure changed, the comparison reversed',
        passage:'<b>Text 1</b><br>Adapted from a study by Gunnhild Torsteinsen.<br>The gift-card offer at the Merrow Bay drives brought in thirty-one percent more donors than the unpaid drives held the same month, and the effect was largest among first-time donors under twenty-five. The old worry that payment drives out the willing is nowhere in our data. A region short of blood should pay for it.<br><br><b>Text 2</b><br>Adapted from a response by Rafael Quintana.<br>Torsteinsen counted donors and got that number right; we counted units released to hospitals. The incentive drives deferred donors at more than twice the unpaid rate, since people came for the card and answered the screening questions accordingly, and our discard rate ran four points higher. Per hundred people through the door the incentive wins. Per hundred units transfused it loses.',
        stem:'Which choice best describes how Text 2 responds to Text 1?',
        choices:{
          A:'It disputes the thirty-one percent rise in donors that Text 1 recorded at the Merrow Bay drives.',
          B:'It accepts Text 1’s count and argues that a different measure reverses the comparison Text 1 draws.',
          C:'It confirms that paying donors drives away the willing donors Text 1 reports as unaffected.',
          D:'It shows that first-time donors under twenty-five are deferred less often than older donors are.'
        },
        correct:'B',
        expCorrect:'Quintana grants the headline — “Torsteinsen counted donors and got that number right” — and swaps the denominator: deferrals at “more than twice the unpaid rate” and a discard rate “four points higher.” His last two sentences state the reversal exactly: the incentive wins per hundred people and loses per hundred units.',
        expWrong:{
          A:'He certifies the figure in his opening clause. The dispute begins after the count.',
          C:'That is a different claim than his. Deferral and discard are screening outcomes, not willing donors driven away.',
          D:'Text 2 gives no age breakdown for deferrals. The under-twenty-five detail belongs to Text 1.'
        },
        tip:'Two authors can measure the same program with different units. Identify each denominator; the answer usually says the measure changed, not that the data are wrong.'
      },
      {
        id:'CTB-28', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections — problem granted, priority disputed',
        passage:'<b>Text 1</b><br>Adapted from a report by Priya Raghunathan.<br>Across eight hundred hours at the Cardell array, one observation in nine now carries a satellite downlink somewhere in its band, and that share has doubled in three years. We can flag the contaminated seconds and discard them, but the flagging costs about four percent of integration time. Unless the constellations move their downlinks, the array will be blind in its most-used band within a decade.<br><br><b>Text 2</b><br>Adapted from a response by Dmitri Zagorin.<br>Raghunathan’s contamination statistics are ours as well; we run the same flagging code. Four percent, though, is small beside what we already lose: thirty-one percent of scheduled hours go to weather aborts and receiver warm-ups, and our queue turns away three proposals in four. Move the downlinks by all means. The array is not going blind, it is oversubscribed.',
        stem:'Which choice best describes how Text 2 relates to Text 1?',
        choices:{
          A:'It denies that satellite downlinks appear in the array’s observations as often as Text 1 reports.',
          B:'It argues that the constellations should be allowed to keep their downlinks in the array’s main band.',
          C:'It concludes that weather aborts and receiver warm-ups are themselves caused by the constellations.',
          D:'It accepts Text 1’s measurements and disputes the conclusion Text 1 draws about the array’s future.'
        },
        correct:'D',
        expCorrect:'Zagorin shares the data and the software — “Raghunathan’s contamination statistics are ours as well; we run the same flagging code” — and even backs the remedy: “move the downlinks by all means.” What he rejects is the forecast, since four percent sits beside a thirty-one percent loss: “the array is not going blind, it is oversubscribed.”',
        expWrong:{
          A:'He runs the same flagging code and quotes the same share. The contamination rate is common ground.',
          B:'He explicitly endorses moving the downlinks. Supporting the fix while denying the catastrophe is not a defense of the constellations.',
          C:'Weather aborts and warm-ups are offered as separate, larger losses, with no causal link to satellites anywhere in the text.'
        },
        tip:'Agreeing about a problem and disagreeing about its size are compatible. When Text 2 puts the number beside a bigger one, the target is the forecast, not the measurement.'
      },
      {
        id:'CTB-29', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — conclusion upheld, evidence corrected',
        passage:'<b>Text 1</b><br>From the chronicle of the Abbey of Saint Ferrant, written about 1320.<br>In the second year of the dearth a quarter of wheat that had been sold for five shillings was sold for twenty, and men who had never begged came to our gate. Let it be written plainly that the fault was not in the ground. The rain of the two summers before had rotted the seed in the furrow, and no husbandry known to us could have answered it.<br><br><b>Text 2</b><br>Adapted from a modern study by Sunniva Lagerlof.<br>The chronicler’s account of the weather is confirmed from the Rhine to the Tees, and the queues at his gate are not in doubt. His prices are another matter. The abbey changed its measure in 1316, and the quarter he prices at twenty shillings holds a fifth more grain than the one he prices at five. The fourfold rise is nearer threefold, which is still the worst dearth in the record.',
        stem:'Based on the texts, how would Lagerlof (Text 2) most likely respond to the chronicle’s report of the dearth?',
        choices:{
          A:'By arguing that the wet summers the chronicler blames had little to do with the failed harvests.',
          B:'By upholding its account of the dearth while correcting the figures it uses to convey the scale.',
          C:'By concluding that wheat prices rose more steeply than the chronicle’s own figures suggest.',
          D:'By showing that the abbey’s measure of a quarter held less grain after 1316 than before it.'
        },
        correct:'B',
        expCorrect:'Lagerlof confirms two of the three claims — the weather is “confirmed from the Rhine to the Tees” and “the queues at his gate are not in doubt” — and corrects the third: a quarter after 1316 “holds a fifth more grain,” so “the fourfold rise is nearer threefold, which is still the worst dearth in the record.”',
        expWrong:{
          A:'She corroborates the weather across half of Europe. The rain is the part of the chronicle she confirms most broadly.',
          C:'Her correction runs the other way: the rise shrinks from fourfold to roughly threefold once the measure is held constant.',
          D:'Inverted. The later quarter holds a fifth more grain, which is exactly why the recorded price per quarter overstates the rise.'
        },
        tip:'A source can be right about the event and wrong about the magnitude. Check which direction Text 2’s correction moves the number before picking.'
      },
      {
        id:'CTB-30', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections — datum accepted, method doubted',
        passage:'<b>Text 1</b><br>Adapted from a paper by Eleonora Sandoval.<br>Cores from six reaches of the Vance show microplastic counts rising from near zero in the 1960s horizon to two thousand particles per kilogram at the surface, with the steepest climb after 2005. The river’s burden is accelerating, and the acceleration follows the arrival of single-use packaging in the catchment.<br><br><b>Text 2</b><br>Adapted from a response by Kwesi Anaman.<br>Sandoval’s counts are careful and our laboratory reproduces them on split samples. A core, though, is not a calendar for particles that move. Fibers under about twenty microns migrate downward through coarse sediment, and in our spiked columns a third of them had left their deposition year within four seasons. The old horizons are being robbed to pay the young ones.',
        stem:'Based on the texts, how would Anaman (Text 2) most likely respond to Text 1’s account of the trend?',
        choices:{
          A:'By denying that microplastic concentrations in the Vance have risen since the 1960s horizon.',
          B:'By showing that fibers under twenty microns migrate upward through the coarse sediment of a core.',
          C:'By attributing the climb after 2005 to the arrival of single-use packaging in the catchment.',
          D:'By accepting the counts and arguing that particle movement exaggerates how steep the rise looks.'
        },
        correct:'D',
        expCorrect:'Anaman validates the counts — his laboratory “reproduces them on split samples” — and questions what a depth profile means for objects that travel: a third of small fibers “had left their deposition year within four seasons,” so “the old horizons are being robbed to pay the young ones,” which steepens the apparent curve.',
        expWrong:{
          A:'He never denies a rise. His claim is about the shape of the curve, not about whether there is one.',
          B:'Backwards. Downward migration is what moves particles from old layers into young ones and inflates the recent counts.',
          C:'That attribution belongs to Text 1. Text 2 is arguing that part of the post-2005 climb is an artifact of the coring.'
        },
        tip:'When a record assumes things stay where they were deposited, ask whether they move. A migration argument attacks the curve, not the existence of the change.'
      },
      {
        id:'CTB-31', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — measurements granted, comparison confounded',
        passage:'<b>Text 1</b><br>Adapted from a paper by Ursula Kettleby.<br>Signers who entered the Ilvara school in its first years use about four grammatical devices for marking who did what to whom; signers who entered a decade later use eleven, and use them with far less variation between individuals. A language is being built in front of us, and each cohort inherits a more regular grammar than the one before it.<br><br><b>Text 2</b><br>Adapted from a response by Ivor Sheringham.<br>Kettleby’s coding is meticulous and I accept her counts of the devices. The two groups she compares, however, were filmed in the same month: the first cohort was then in its forties, the second in its twenties. Our own adults show the same drop in device use between thirty and fifty in a language nobody claims is being built.',
        stem:'Which choice best describes how Text 2 responds to Text 1?',
        choices:{
          A:'It reports that the first Ilvara cohort uses more grammatical devices than Text 1’s coding credits it with.',
          B:'It shows that signers of established languages add grammatical devices steadily as they grow older.',
          C:'It grants Text 1’s measurements and asks whether the comparison isolates the change it claims to show.',
          D:'It concludes that no regular grammar has emerged among signers who entered the Ilvara school.'
        },
        correct:'C',
        expCorrect:'Sheringham accepts the numbers in his first sentence — “I accept her counts of the devices” — and attacks the design: both cohorts “were filmed in the same month,” one in its forties and one in its twenties, and his own adults “show the same drop in device use between thirty and fifty” in a settled language. Age and cohort are tangled.',
        expWrong:{
          A:'He accepts her counts as they stand. His objection is about who was measured, not about miscounting.',
          B:'Inverted. His adults drop device use as they age, which is why an older cohort can look less regular.',
          D:'He never rules emergence out. He says the comparison cannot separate emergence from aging, which leaves the question open.'
        },
        tip:'When two groups differ in age and in cohort at once, a difference between them supports neither explanation alone. The correct choice names the confound, not a verdict.'
      },
      {
        id:'CTB-32', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections — effect confirmed, magnitude reduced',
        passage:'<b>Text 1</b><br>From the annual report of factory inspector Hester Quayle, 1911.<br>In the twenty-two mills that fitted guards to their shafting under the Order, reported accidents fell by rather more than half in the year following, while in the mills that did not fit them the number stood where it was. I have heard it said in this district that the Order is a tax upon the careful. The figures are before me, and they say otherwise.<br><br><b>Text 2</b><br>Adapted from a modern study by Duncan Iwuchukwu.<br>Quayle’s figures are transcribed correctly and her contrast with the unguarded mills is real. It is also the year the Order raised the threshold for a reportable injury from one day lost to three, and a guarded mill keeps its injuries near the small end of that scale. The infirmary books, which no threshold touches, show a fall of about a fifth. A fifth is worth the Order; a half was never there.',
        stem:'Based on the texts, how would Iwuchukwu (Text 2) most likely respond to Quayle’s use of the figures?',
        choices:{
          A:'By disputing the contrast Quayle draws between the guarded mills and the unguarded ones.',
          B:'By agreeing that the guards worked while arguing that her figures overstate by how much.',
          C:'By concluding that the Order was indeed a tax upon the mills that were already careful.',
          D:'By showing that the infirmary books record a larger fall than the reported returns do.'
        },
        correct:'B',
        expCorrect:'Iwuchukwu accepts the transcription and the contrast, then explains part of the gap: the reporting threshold moved “from one day lost to three” in the same year, and guarded mills sit “near the small end of that scale.” The infirmary books, immune to the threshold, give a fifth, and he ends “a fifth is worth the Order.”',
        expWrong:{
          A:'He calls the contrast real. His argument is that the threshold change inflates it, not that it is invented.',
          C:'He endorses the Order in his final sentence, which is the district opinion Quayle was answering.',
          D:'Reversed. The infirmary books show a fall of a fifth against the returns’ half; they record a smaller fall, not a larger one.'
        },
        tip:'When a rule changes how something is counted in the same year it changes behavior, look for the record that the counting rule does not touch.'
      },
      {
        id:'CTB-33', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — calibration accepted, extension refused',
        passage:'<b>Text 1</b><br>Adapted from a paper by Beatriz Olmos.<br>Crater densities on the Serenitatis flows give a surface age of three and a half billion years, and where we have returned samples from such terrain the counts and the radiometric ages agree within ten percent. Applied to the smooth plains of an icy outer moon, the same method returns one point two billion years. Counting craters is a dating method now, not merely a way of putting surfaces in order.<br><br><b>Text 2</b><br>Adapted from a response by Finnian Drummond.<br>The lunar calibration is sound; it rests on the samples Olmos cites and I have used it myself. The anchor is the trouble when it travels. Counts become years only through an assumed impact flux, and every sample we hold comes from one body across a narrow span of its history. On the icy plains the ordering is secure whatever the flux; the one point two billion is secure only if the outer system is struck as the Moon is.',
        stem:'Which choice best describes how the two texts relate?',
        choices:{
          A:'Text 2 argues that crater counts cannot put surfaces in order without an independently assumed flux.',
          B:'Text 2 holds that radiometric ages from returned lunar samples disagree with the counts Olmos reports.',
          C:'Text 2 concludes that the icy plains are older than the three and a half billion years given for Serenitatis.',
          D:'Text 2 accepts the method where it is calibrated and denies that the calibration carries to the outer system.'
        },
        correct:'D',
        expCorrect:'Drummond endorses the lunar half — “the lunar calibration is sound; it rests on the samples Olmos cites and I have used it myself” — and blocks the transfer: counts become years “only through an assumed impact flux,” and every sample comes from one body, so the outer-moon age holds “only if the outer system is struck as the Moon is.”',
        expWrong:{
          A:'He says the opposite about ordering: on the icy plains “the ordering is secure whatever the flux.” Only the conversion to years needs it.',
          B:'Text 1 reports agreement within ten percent and Text 2 calls that calibration sound. Neither text has them disagreeing.',
          C:'No age for the icy plains is proposed. His point is that its number rests on an untested assumption, not that it is too young.'
        },
        tip:'Ask what a method needs in order to work and whether the new setting supplies it. Relative results often survive the move even when absolute ones do not.'
      },
      {
        id:'CTB-34', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections — benefit granted, hidden cost added',
        passage:'<b>Text 1</b><br>Adapted from a report by Adaeze Nwosu.<br>The subsidy put solar pumps on eleven hundred smallholdings across the Ghorpani plain. Diesel purchases fell by ninety percent, the largest line in these households’ budgets, and irrigated area per farm rose by a third with no rise in fuel spending at all. Nothing else on offer moves carbon and income in the same direction.<br><br><b>Text 2</b><br>Adapted from a response by Hilbert Vasseur.<br>Nwosu’s budget figures come from the survey I work with and I would not change a number. Diesel, though, was doing two jobs: it was a cost and it was a meter. Once the marginal hour of pumping is free, a farmer who stops at dusk has no reason to. Water-table loggers under those eleven hundred farms fell two point six meters in four years, against half a meter under the diesel villages.',
        stem:'Based on the texts, how would Vasseur (Text 2) most likely respond to Text 1’s assessment of the subsidy?',
        choices:{
          A:'By disputing the ninety percent fall in diesel purchases that Text 1 reports across the plain.',
          B:'By accepting its economic findings and naming a cost that the removal of fuel prices created.',
          C:'By arguing that solar pumps raise household fuel spending once irrigated area per farm grows.',
          D:'By concluding that the subsidy should be withdrawn from the smallholdings that received pumps.'
        },
        correct:'B',
        expCorrect:'Vasseur works from the same survey and says he “would not change a number,” then names what the budget cannot show: diesel “was a cost and it was a meter,” and once pumping is free the loggers fall “two point six meters in four years, against half a meter under the diesel villages.”',
        expWrong:{
          A:'He endorses the budget figures explicitly. The fuel saving is the premise of his own argument about free pumping.',
          C:'Text 1 reports no rise in fuel spending and Text 2 accepts that. His cost is groundwater, not fuel.',
          D:'Withdrawal is never proposed. He treats the free marginal hour as something to be metered, not as a reason to remove the pumps.'
        },
        tip:'When a policy removes a price, ask what that price was quietly rationing. A Text 2 that accepts every figure may still add a cost the figures never recorded.'
      }
    ]
  });
})();
