/* SAT Studio question set — Reading & Writing: Inference & Evidence — Brutal (BIN-01 to BIN-12) */
window.SAT_SETS.push({
  id: 'rw-brutal-inference',
  title: 'Inference & Evidence — Brutal',
  section: 'rw',
  level: 'Extreme',
  description: 'Extreme Information and Ideas: logical completion, support AND weaken evidence, data read in prose, and inference between two rival explanations.',
  minutes: 18,
  questions: [
    /* ===== LOGICAL COMPLETION (BIN-01 to BIN-03) ===== */
    {
      id:'BIN-01', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Inferences (logical completion)',
      passage:"The entomologist Priya Devaraj notes that many night-flying moths steer by holding a fixed angle to a light source. When the source is the moon, whose rays arrive essentially parallel, holding that angle steady carries the insect forward in a straight line. A porch lamp, by contrast, stands only a few meters off, so its rays strike the moth from a direction that shifts with every wingbeat. Devaraj stresses that the moth is not drawn to the lamp and never aims at it; it simply applies the rule it has always applied. It follows that a moth passing a porch lamp ______",
      stem:'Which choice most logically completes the text?',
      choices:{
        A:'will curve inward and circle it, though it never steers toward the lamp.',
        B:'is drawn to artificial light more powerfully than to the light of the moon.',
        C:'will always end by striking the lamp instead of simply passing it by.',
        D:'keeps the angle of its flight path to the light source constant throughout.'
      },
      correct:'A',
      expCorrect:'The rule is: hold a fixed angle to the light. With parallel moonlight that rule yields a straight line. With a lamp a few meters away, the direction of the light shifts with every wingbeat, so holding the same angle forces the moth to keep turning — a path that bends inward and loops around the lamp. The turning is a side effect of an unchanged rule, exactly as Devaraj insists.',
      expWrong:{
        B:'The text says outright that the moth is NOT drawn to the lamp. This option swaps Devaraj’s mechanism for the attraction story she rejects.',
        C:'“Always end by striking” is one step past the premises. A curving path is what follows; a guaranteed collision every time is not, and the text never says the moth reaches the lamp.',
        D:'True according to the text — that is the premise, the rule the moth applies. Restating the rule does not say what the rule PRODUCES near a nearby lamp, which is what the blank asks for.'
      },
      tip:'On “most logically completes” items the blank wants the CONSEQUENCE the premises force, not a restatement of them. An option that repeats a rule the text already gave you is true and useless, and an option carrying “always” or “must” is usually one step past what the premises license.'
    },
    {
      id:'BIN-02', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Inferences (logical completion)',
      passage:"Dendrochronologist Milo Fenwick reconstructs past rainfall from tree rings: in a stand where water is the scarce resource, a wet year lays down a wide ring and a dry year a narrow one. Fenwick cautions that the method reads whatever the tree was short of. At the cold upper edge of a forest, meltwater runs all summer but the growing season is brief, so the scarce resource there is warmth rather than water. A colleague proposes to extend Fenwick’s rainfall record using cores taken from that upper edge. Fenwick replies that the new cores ______",
      stem:'Which choice most logically completes the text?',
      choices:{
        A:'would be too poorly preserved at that elevation to be measured with precision.',
        B:'come from trees whose growing season at the upper edge is unusually brief.',
        C:'would track summer warmth, not the rainfall his colleague hopes to measure.',
        D:'would prove that rainfall has no effect at all on the width of any tree ring.'
      },
      correct:'C',
      expCorrect:'Fenwick’s rule is that a ring records whatever the tree was short of. At the upper edge the scarce resource is warmth, not water, so rings from there are a record of summer temperature. Cores from that site would therefore answer a question about warmth while the colleague is asking one about rain — the record would not extend the rainfall series at all.',
      expWrong:{
        A:'Preservation is invented. The text raises no problem with the condition of high-elevation wood; the problem it sets up is about WHAT the rings record.',
        B:'True according to the text — the growing season up there is brief — but it repeats the setup instead of drawing the consequence. The blank asks what the cores would do for the rainfall record.',
        D:'Far too strong. The rule says water drives ring width where water is scarce; it does not say rainfall never affects any ring anywhere.'
      },
      tip:'When a text states a rule and then hands you a case that changes one input to the rule, the completion is whatever the rule now outputs for that case. Apply the rule; do not deny it, and do not simply repeat the setup back.'
    },
    {
      id:'BIN-03', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Inferences (logical completion)',
      passage:"Two ornithologists agree that seed-storing birds relocate hidden food by memory rather than by smell, and that the brain region supporting spatial memory enlarges in the season when the work is heaviest. They differ only on what should count as heavy work. Ines Bracamonte holds that the burden depends on the number of separate hiding places a bird must keep track of, not on the mass of food stored. Her nutcracker buries thirty thousand seeds in thirty thousand spots; the jay her colleague studies buries a comparable mass in one guarded larder. On Bracamonte’s account, the autumn enlargement should ______",
      stem:'Which choice most logically completes the text?',
      choices:{
        A:'appear in both birds, since each of them stores a comparable mass of seeds.',
        B:'prove that memory alone, and never smell, guides every bird to its stored food.',
        C:'be strongest in whichever season a bird’s storing work is at its heaviest.',
        D:'show up in the nutcracker and not in the jay, despite their equal stores.'
      },
      correct:'D',
      expCorrect:'Bracamonte measures the burden in SITES, not in mass. The nutcracker must hold thirty thousand locations; the jay must hold one. Their stores weigh the same, so on the mass measure they would tie, but on Bracamonte’s measure they are as far apart as two birds can be. Her account therefore predicts the seasonal enlargement in the nutcracker and not in the jay.',
      expWrong:{
        A:'This applies the rival measure, mass, which Bracamonte explicitly sets aside. Equal mass is exactly the fact her account says should not matter.',
        B:'Overreach. Both ornithologists already grant that memory, not smell, does the work; one autumn comparison in two species cannot “prove” it for every bird.',
        C:'True according to the text — it is the point the two scientists agree on — so it cannot be what distinguishes Bracamonte’s account. It also never says WHICH bird shows the enlargement, which is what the blank asks.'
      },
      tip:'When two people agree on everything except which quantity matters, the completion must be a prediction that comes out differently depending on that quantity. Any option both of them would sign is a shared premise, not the inference.'
    },
    /* ===== TEXTUAL EVIDENCE — SUPPORT AND WEAKEN (BIN-04 to BIN-06) ===== */
    {
      id:'BIN-04', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (textual)',
      passage:"Textile historian Hana Kowalczyk studies twelve embroidered panels long credited to a single workshop. She agrees with her critics that more than one hand worked on them; what she disputes is where those hands sat. Her critics hold that one workshop employed many embroiderers across several decades. Kowalczyk argues instead that separate workshops in different towns copied the same circulating pattern book. Both accounts predict that the designs will match closely and that the stitching will vary from panel to panel.",
      stem:'Which finding, if true, would most strongly support Kowalczyk’s account over her critics’ account?',
      choices:{
        A:'The twelve panels repeat the same figures and borders with striking exactness.',
        B:'The dyes used on the panels match recipes documented in four separate towns.',
        C:'Workshop records from one town list a dozen embroiderers hired over forty years.',
        D:'The panels prove that pattern books, not workshops, made all embroidery of the era.'
      },
      correct:'B',
      expCorrect:'The two accounts differ on one thing only: one workshop or several, in different towns. Dye recipes are local and stay with the dyer, so panels carrying four towns’ recipes had to be finished in four places. That is the fact only Kowalczyk’s account predicts; a single workshop hiring many embroiderers would still have dyed in one town.',
      expWrong:{
        A:'True according to the text, and useless here: the passage says BOTH accounts predict closely matching designs. A fact both sides welcome cannot separate them.',
        C:'This is the critics’ picture, not Kowalczyk’s — one workshop, many hands, several decades. It supports the side she is arguing against.',
        D:'The right idea pushed far past the evidence. Twelve panels cannot “prove” anything about all embroidery of the era, and Kowalczyk claims only that these workshops shared a book.'
      },
      tip:'Support questions between two near-identical accounts are decided only by what ONE of them predicts. Cross out every option both sides would happily accept, however striking the fact sounds, and keep the one that could only come out that way if the named account were true.'
    },
    {
      id:'BIN-05', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (textual)',
      passage:"Since 2011 the water of Lake Verrall has been noticeably clearer. Ecologist Freya Lindqvist attributes the change to a filter-feeding mussel that colonized the lake that year and now blankets its shallows. Her colleague Adem Sarikaya does not deny that the mussels filter enormous volumes of water, nor that they arrived exactly when the water began to clear. He doubts only that they are the reason for the change, since several things about the lake shifted in the same season.",
      stem:'Which finding, if true, would most seriously WEAKEN Lindqvist’s explanation?',
      choices:{
        A:'Each mussel can filter roughly a liter of lake water in the course of a day.',
        B:'No mussel of this kind had been recorded in the lake at any time before 2011.',
        C:'Filter-feeding mussels always clear any lake they invade, without exception.',
        D:'An upstream fertilizer ban cut the runoff feeding the lake’s algae in 2011.'
      },
      correct:'D',
      expCorrect:'Sarikaya’s objection is that several things changed at once, so the mussels may be a bystander. A fertilizer ban in the same year supplies a second, independent cause of clear water — less fertilizer means less algae — that matches the timing just as well. Once a rival cause fits the same date, the mussel no longer explains the change, which is what weakening this claim requires.',
      expWrong:{
        A:'It quantifies how much the mussels filter, which makes Lindqvist’s mechanism look BETTER. The task word is WEAKEN, so a fact that strengthens her is wrong no matter how true it is.',
        B:'True according to the text — Sarikaya grants that the mussels arrived exactly when the water began to clear — and it supports her timing rather than damaging it.',
        C:'The right idea pushed too far, and pushed the wrong way: “always… without exception” is stronger than anything the passage supports, and a guaranteed mussel effect would reinforce her claim instead of weakening it.'
      },
      tip:'Read the task word before you read the options. On a WEAKEN item every choice that makes the claim look better — including the ones the passage itself concedes — is wrong; what you want is a rival cause that fits the same timing just as well.'
    },
    {
      id:'BIN-06', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (textual)',
      passage:"A parchment catalogue from the abbey of Saint-Renaud lists 620 titles, far more than any neighboring house is known to have held. Historian Odile Marchetti reads the list as an inventory of the abbey’s own shelves and concludes that Saint-Renaud was a major center of learning. Her colleague Bram Voskuijl agrees that the parchment is genuine, that it was written at Saint-Renaud, and that 620 titles are named on it. He asks only what the list was drawn up to record.",
      stem:'Which finding, if true, would most directly WEAKEN Marchetti’s conclusion?',
      choices:{
        A:'The list was drawn up for the whole diocese, pooling nine houses’ holdings.',
        B:'The parchment has been dated by its script to the abbey’s wealthiest decades.',
        C:'The parchment is genuine and was written at Saint-Renaud by its own scribes.',
        D:'A catalogue can never tell a historian what books a house actually owned.'
      },
      correct:'A',
      expCorrect:'Marchetti’s conclusion rests on one assumption: that the 620 titles sat on Saint-Renaud’s own shelves. If the scribes were cataloguing nine houses at once, the same parchment is consistent with Saint-Renaud owning a very ordinary share of the 620. The document stays genuine and the count stays right; what collapses is the inference from the count to this one abbey’s library.',
      expWrong:{
        B:'Dating the parchment to the abbey’s richest years fits her reading comfortably. It gives no reason to doubt that the books were Saint-Renaud’s.',
        C:'True according to the text — Voskuijl concedes all of it — which is precisely why it cannot weaken anything. A shared premise is never the answer to a weaken question.',
        D:'Far too strong. Catalogues are ordinary evidence for medieval libraries; saying they can NEVER tell a historian anything throws out the method instead of showing what this particular list recorded.'
      },
      tip:'To weaken a claim built on a document, attack what the document IS rather than whether it is real. A list can be perfectly authentic, correctly dated, and still not be a list of the things you were told it lists.'
    },
    /* ===== QUANTITATIVE EVIDENCE (BIN-07 to BIN-09) ===== */
    {
      id:'BIN-07', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (quantitative)',
      passage:"Agronomist Nuria Halvorsen sowed seeds of a wild grass at three soil temperatures in two soil types. In sandy soil, 24 percent of the seeds germinated at 10 °C, 61 percent at 15 °C, and 44 percent at 20 °C. In clay soil the figures at the same three temperatures were 31 percent, 52 percent, and 55 percent. Halvorsen notes that the two soils performed about equally well on average, but argues that only the sandy-soil seeds have already passed the temperature that suits them best, so further warming should cut their germination.",
      stem:'Which choice most effectively uses data from the text to support Halvorsen’s argument?',
      choices:{
        A:'Germination in sandy soil rose from 24 percent at 10 °C to 44 percent at 20 °C.',
        B:'Germination in clay soil rose from 52 percent at 15 °C to 55 percent at 20 °C.',
        C:'Germination in sandy soil fell from 61 percent at 15 °C to 44 percent at 20 °C.',
        D:'Sandy soil always produces weaker germination than clay soil, at any temperature.'
      },
      correct:'C',
      expCorrect:'Her argument is that the sandy-soil seeds are already past their optimum, so more warmth should hurt them. The sandy series runs 24 → 61 → 44: it peaks at 15 °C and then drops 17 points by 20 °C. That downturn on the warm side of the peak is the only figure in the text that shows warming reducing germination, and it belongs to the group she is talking about.',
      expWrong:{
        A:'An accurate reading of the data that answers a different question. It jumps from 10 °C to 20 °C and so reports a RISE, skipping the 61 percent peak in between; her claim is about what happens past that peak.',
        B:'Accurate, but the wrong group. Clay germination is still climbing at 20 °C, which is exactly why she says only the SANDY seeds have passed their best temperature.',
        D:'Overstated, and false in the data: at 15 °C sandy soil reached 61 percent against clay’s 52. “Always… at any temperature” is stronger than a three-point comparison can support.'
      },
      tip:'On data items check three things before choosing: the right GROUP, the right two numbers, and the right DIRECTION. A sentence that reads the numbers correctly but compares the other group, or the other pair of points, is still a wrong answer.'
    },
    {
      id:'BIN-08', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (quantitative)',
      passage:"Over one month the Ferrand Gallery counted 4,000 visitors to its print room and 1,000 to its much smaller photography room. A follow-up survey found that 15 percent of print-room visitors came back within the year, against 40 percent of photography-room visitors. Curator Lev Ostrander concedes that the photography room wins on loyalty. He wants to argue only that the print room still returns the larger number of people to the gallery.",
      stem:'Which choice most effectively uses data from the text to support Ostrander’s argument?',
      choices:{
        A:'A larger share of photography-room visitors came back: 40 percent against 15.',
        B:'About 600 print-room visitors came back, against about 400 from photography.',
        C:'The print room drew 4,000 visitors in the month and the photography room 1,000.',
        D:'A room with the lower return rate always brings back the smaller number of people.'
      },
      correct:'B',
      expCorrect:'His claim is about how MANY people come back, so each rate has to be applied to its own group. Print room: 15 percent of 4,000 = 600. Photography room: 40 percent of 1,000 = 400. Check: 600 > 400 ✓. The print room returns about 200 more people even while losing badly on rate, which is exactly the point he concedes and then works around.',
      expWrong:{
        A:'True according to the text, and Ostrander concedes it in the passage. It answers a question about RATES; his argument is about counts of people.',
        C:'True, but it counts visitors, not returners. A bigger audience does not by itself show that more of them came back — you still have to apply the 15 percent.',
        D:'The intuition pushed into an absolute, and the numbers here refute it: 15 percent of 4,000 beats 40 percent of 1,000. A lower rate on a much larger base can easily win.'
      },
      tip:'A percentage is not a count. When the claim is about how many PEOPLE, multiply each rate by the size of its own group before comparing; the group with the lower rate routinely produces the larger number.'
    },
    {
      id:'BIN-09', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (quantitative)',
      passage:"Sociolinguist Mira Adeyemi recorded how often speakers in two towns used an old local vowel. In Barrow Green, 72 percent of speakers over sixty used it and 18 percent of speakers under thirty. In Cotterhill the two figures were 54 percent and 41 percent. Adeyemi argues that the vowel is being abandoned far faster in Barrow Green than in Cotterhill, even though its older speakers hold on to it more firmly than Cotterhill’s do.",
      stem:'Which choice most effectively uses data from the text to support Adeyemi’s argument?',
      choices:{
        A:'The gap between old and young is 54 points in Barrow Green and 13 in Cotterhill.',
        B:'Older speakers in Barrow Green use the vowel more than older speakers in Cotterhill.',
        C:'Young speakers in Barrow Green use the vowel more often than their elders do.',
        D:'With just 18 percent of its young using it, the vowel has vanished from the town.'
      },
      correct:'A',
      expCorrect:'Speed of abandonment shows up as the drop across generations inside each town. Barrow Green: 72 − 18 = 54 points. Cotterhill: 54 − 41 = 13 points. Check: 54 > 13 ✓. Barrow Green is shedding the vowel roughly four times as steeply, which is the comparison her claim needs — and it holds even though Barrow Green starts higher.',
      expWrong:{
        B:'True according to the text (72 against 54), and she concedes it in the passage. A higher level among the old says who still uses the vowel, not how fast it is being dropped.',
        C:'The direction is backwards. In Barrow Green the young use it far LESS than their elders: 18 percent against 72 percent.',
        D:'Pushed past the data. 18 percent is a shrinking minority, not zero; “vanished” claims more than a number that still describes nearly one young speaker in five.'
      },
      tip:'When a claim is about a RATE of change, the evidence is a gap or a difference, not a single level. Compute the within-group drop for each group and compare those drops; a high starting level tells you nothing about how fast that group is moving.'
    },
    /* ===== INFERENCE BETWEEN TWO COMPETING EXPLANATIONS (BIN-10 to BIN-12) ===== */
    {
      id:'BIN-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Inferences (competing explanations)',
      passage:"Coffee shops along Marrow Street sell more pastries on rainy mornings than on dry ones. Ilse Brandt suggests that rain keeps their coffee customers from walking the three blocks to a cheaper bakery, so they buy the pastry where they already stand. Otto Zaman suggests instead that grey weather puts people in the mood for something sweet, so each customer buys more than usual. Both accounts explain the rainy-morning rise, and neither holds that rain changes how many people come in for coffee.",
      stem:'If Brandt’s explanation is correct, which of the following must also be true?',
      choices:{
        A:'Each rainy-morning customer at the coffee shops buys more pastries than usual.',
        B:'The coffee shops sell more pastries on rainy mornings than on dry mornings.',
        C:'Customers always prefer the cheaper bakery whenever the weather lets them reach it.',
        D:'The cheaper bakery three blocks away sells fewer pastries on those same mornings.'
      },
      correct:'D',
      expCorrect:'Brandt does not create new pastry appetite; she MOVES a purchase. The extra pastries sold on Marrow Street belong to customers who, on a dry morning, would have carried that same purchase three blocks to the bakery. If those walks stop, those purchases stop happening at the bakery, so its rainy-morning sales must fall. That displacement is the fingerprint only her account leaves.',
      expWrong:{
        A:'This is Zaman’s mechanism, not Brandt’s. Brandt keeps each customer’s appetite fixed and changes only where the pastry is bought.',
        B:'True according to the text — it is the finding both explanations were invented to account for — so it follows just as well from Zaman’s account and cannot be what Brandt’s adds.',
        C:'Brandt needs rain to deter SOME walks. “Always… whenever” turns a tendency into a law, and her account survives perfectly well if many customers never make the walk at all.'
      },
      tip:'If both explanations predict the finding, restating the finding can never be what one of them “must also” imply. Ask instead what the chosen mechanism does somewhere ELSE — at another place, in another group, or in a measurement nobody has taken yet.'
    },
    {
      id:'BIN-11', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Inferences (competing explanations)',
      passage:"Over thirty years the trout of Kestrel Brook have grown smaller, and the brook has grown warmer. Wren Ngo and Arto Halloran agree that the warming is the cause and that the food supply has not changed. They part company on the mechanism. Ngo holds that warm water raises a trout’s metabolism, so that at any given age it has less energy left over for growth. Halloran holds instead that warm water hurries a trout into breeding, and a trout that has begun to breed adds almost nothing to its length.",
      stem:'If Halloran’s explanation is correct, which of the following must also be true?',
      choices:{
        A:'A trout that has not yet bred is smaller today, at the same age, than it once was.',
        B:'Trout now begin to breed at a smaller body length than they did thirty years ago.',
        C:'The trout of Kestrel Brook are on average smaller than they were thirty years ago.',
        D:'Warmer water is the only thing that could ever reduce the size of a stream’s fish.'
      },
      correct:'B',
      expCorrect:'Halloran leaves the growth rate alone and moves the finish line. Warm water brings breeding forward in time; growth all but stops at breeding; so a trout today reaches that stopping point after fewer growing months than a trout of the 1990s. Fewer months of the same growth means a smaller body at the moment breeding starts. Length at first breeding must therefore have fallen.',
      expWrong:{
        A:'This is Ngo’s consequence: slower growth at every age, visible even before breeding. Halloran keeps pre-breeding growth unchanged, so an immature trout of a given age should be the size it always was.',
        C:'True according to the text — it is the shrinkage both scientists set out to explain — so it follows from Ngo’s account too and cannot single out Halloran’s.',
        D:'Neither man claims warming is the ONLY possible cause of smaller fish; they claim it is the cause in this brook. “Only… ever” inflates a local explanation into a universal law.'
      },
      tip:'Two mechanisms for the same outcome are told apart by WHERE they act. Pin each one to the stage of the process it touches, then pick the consequence that only the named stage can reach — the other account should predict something different there.'
    },
    {
      id:'BIN-12', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Inferences (competing explanations)',
      passage:"At Fen Hollow, graves dug after about 900 CE hold almost no ornaments or weapons, though earlier graves are crowded with them. Sunniva Ekelund and Paolo Trestini agree the drop is real, that the dating is sound, and that the same community went on burying its dead there. Ekelund argues that the settlement had grown poor: there was simply less metal to give away. Trestini argues that the community was no poorer but had taken up a teaching that held rich burial to be improper.",
      stem:'If Trestini’s explanation is correct, which of the following must also be true?',
      choices:{
        A:'Houses and workshops at Fen Hollow after 900 CE hold less metal than earlier ones.',
        B:'Graves dug at Fen Hollow after 900 CE hold almost no ornaments or weapons.',
        C:'Metal ornaments stayed in use at Fen Hollow after 900 CE, but not in its graves.',
        D:'A community that stops burying its wealth has never actually lost that wealth.'
      },
      correct:'C',
      expCorrect:'Trestini keeps the wealth and changes only where it goes. If the community was no poorer, the ornaments still existed after 900 CE; what changed is that a new teaching kept them out of the ground. Metal that is no longer buried has to stay above it — worn, stored, reworked — so his account requires ornaments present in the settlement and absent from its graves.',
      expWrong:{
        A:'This is Ekelund’s consequence. Poverty would thin the metal everywhere, in houses as well as graves; Trestini’s whole point is that the settlement kept its wealth.',
        B:'True according to the text — it is the finding both scholars are explaining — so Ekelund’s account implies it just as firmly. A shared prediction cannot tell the two apart.',
        D:'An overreach far beyond the claim. Trestini says THIS community was no poorer, not that no community anywhere has ever stopped burying wealth because it lost the wealth.'
      },
      tip:'When one explanation says “same wealth, new behavior” and the other says “less of the thing”, the two diverge outside the evidence you started with. Look for where the missing thing would have gone instead, and check whether it is still there.'
    }
  ]
});
