/* SAT Studio question set — Reading & Writing: Cross-Text Connections (CTA-01 a CTA-30) */
/* Treinta pares de textos. La relacion entre los dos autores rota a proposito:
   desacuerdo frontal, acuerdo con el hallazgo y desacuerdo con la explicacion,
   limite de alcance, apoyo desde otro campo, y replanteo de la pregunta.
   Lo mas frecuente en el examen real es el acuerdo parcial, y ese es el eje. */
(function(){
  window.SAT_SETS.push({
    id: 'rw-cross-a',
    title: 'Cross-Text Connections — Paired Arguments',
    section: 'rw',
    level: 'Media',
    description: 'Thirty paired-text items across science, history, and policy. Each Text 2 is a real argument with its own evidence: some grant the finding and reject the explanation, some narrow how far it reaches, some support it from an unrelated field, and some refuse the question as posed.',
    minutes: 40,
    questions: [
      {
        id:'CTA-01', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — evidence granted, inference denied',
        passage:'<b>Text 1</b><br>Adapted from a report by Marlowe Ashgrove.<br>Bee hotels are the cheapest habitat a city can buy. On the Denholm estate the ninety drilled blocks we mounted filled to eighty-one percent occupancy within two seasons, and the tubes held eleven wild species that the surrounding lawns had never recorded. A wall of reeds costs less than a bench. A borough that wants more pollinators can have them by the end of the month.<br><br><b>Text 2</b><br>Adapted from a response by Prisca Valtorta.<br>Ashgrove’s blocks did fill, and I have opened enough tubes to say her species list is accurate. But a filled tube is a nest built, not a bee gained. Of two hundred tubes we dissected from walls like hers, more than a third had been emptied by parasitic wasps, and the occupants were the same few cavity-nesters already common in the borough. The ground-nesting bees that are actually declining cannot use a reed at all.',
        stem:'Based on the texts, how would Valtorta (Text 2) most likely respond to Ashgrove’s claim that a borough can add pollinators by mounting bee hotels?',
        choices:{
          A:'By granting that the blocks fill quickly while denying that occupancy shows the borough has more bees.',
          B:'By showing that the eleven species recorded in the tubes had never been found on the estate before.',
          C:'By arguing that a wall of drilled blocks costs a borough far more than Ashgrove’s figure suggests.',
          D:'By claiming that mounting the blocks reduces the number of wild bees nesting in the ground nearby.'
        },
        correct:'A',
        expCorrect:'Valtorta concedes the fill rate and the species list — she has “opened enough tubes to say her species list is accurate” — and then refuses what Ashgrove reads into it: “a filled tube is a nest built, not a bee gained.” Her parasitic wasps and her point about cavity-nesters already common both go to that one inference.',
        expWrong:{
          B:'True according to Text 1, and it is Ashgrove’s own evidence. Restating the finding that Text 2 concedes is not a response to the claim built on it.',
          C:'Cost is the one thing Text 2 never raises. Valtorta’s objection would hold even if the blocks were free, because it is about what occupancy measures, not what it costs.',
          D:'Stronger than anything Text 2 says. Valtorta says ground-nesting bees “cannot use a reed at all” — they are outside the benefit, not harmed by it.'
        },
        tip:'When Text 2 opens by conceding Text 1’s numbers, the disagreement is never about the numbers. Look for the sentence that says what those numbers do NOT show, and answer from it.'
      },
      {
        id:'CTA-02', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — support from a second field',
        passage:'<b>Text 1</b><br>Adapted from a survey by Halbert Nkemdi.<br>Coffee grown under a canopy of native trees held two and a half times as many bird species as the open plots on the same three farms, and nine of those species appear on the regional watch list. Growers are being urged to clear their shade for yield. If they do, the last forested corridor on this slope goes with it, and no reserve nearby can replace it.<br><br><b>Text 2</b><br>Adapted from a report by Ondine Rask.<br>I have not counted a bird in my life; I keep ledgers. Across sixty farms on the same slope, shaded plots gave up about nine percent of their cherry yield, but they spent a third less on insecticide and sold into a certified channel at a premium. Over four seasons the margin per hectare was the same either way. Whatever the birds are worth, keeping the canopy is not the sacrifice growers have been told it is.',
        stem:'Which choice best describes how Text 2 relates to Text 1?',
        choices:{
          A:'It disputes Text 1’s species counts by pointing to records kept across a much larger group of farms.',
          B:'It argues that the canopy should be cleared wherever growers can be compensated for the birds lost.',
          C:'It supports Text 1’s recommendation with financial evidence that does not depend on Text 1’s bird counts.',
          D:'It concludes that growers who keep their shade trees earn a higher margin than growers who clear them.'
        },
        correct:'C',
        expCorrect:'Rask opens by putting the bird evidence aside — “I have not counted a bird in my life; I keep ledgers” — and arrives at the same recommendation by a different road: equal margin per hectare over four seasons, so “keeping the canopy is not the sacrifice growers have been told it is.” Same conclusion, independent evidence.',
        expWrong:{
          A:'Text 2 neither uses nor challenges the counts. Rask’s sixty farms are a sample of ledgers, not of birds, and she says so in her first sentence.',
          B:'The reverse of Text 2’s conclusion. Rask’s ledgers are the argument for keeping the canopy, and she never proposes compensating anyone for clearing it.',
          D:'A stronger claim than the ledgers support. Rask reports that the margin “was the same either way” — parity, not an advantage for shade.'
        },
        tip:'A Text 2 that changes the kind of evidence is usually reinforcing, not attacking. Ask what conclusion each author reaches before you ask what data each one used.'
      },
      {
        id:'CTA-03', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — same result, rival explanation',
        passage:'<b>Text 1</b><br>Adapted from a memo by Everard Oyelaran.<br>Eighteen months after the speed cameras went live on the Brackenhill corridor, injury crashes there are down twenty-eight percent against the three years before. That is a hundred and forty fewer people hurt on one road. The equipment paid for itself in the first summer. The case for putting cameras on the remaining eleven arterial corridors is now, in my view, closed.<br><br><b>Text 2</b><br>Adapted from a response by Nadia Ferreol.<br>I pulled the same records and I get the same twenty-eight percent. What the memo leaves out is that Brackenhill was resurfaced that June and its lanes were narrowed by half a meter at the same time. Talbot Road got the resurfacing and the narrowing and no cameras at all; its injury crashes fell twenty-two percent over the same months. The cameras may be collecting credit that the asphalt earned.',
        stem:'Based on the texts, how would Ferreol (Text 2) most likely respond to the recommendation in Text 1?',
        choices:{
          A:'By disputing the number of injury crashes that were recorded on Brackenhill after the cameras went live.',
          B:'By recommending cameras on the eleven remaining corridors once each of them has been resurfaced.',
          C:'By concluding that narrowing lanes raises the injury crash rate on roads that have no cameras.',
          D:'By accepting the size of the drop while arguing that the cameras cannot be shown to have caused most of it.'
        },
        correct:'D',
        expCorrect:'Ferreol confirms the result herself — “I pulled the same records and I get the same twenty-eight percent” — so the quarrel is over the cause. Talbot Road, which got the resurfacing and narrowing but no cameras, fell twenty-two percent, leaving the cameras only a small remainder to explain: “collecting credit that the asphalt earned.”',
        expWrong:{
          A:'Text 2 verifies the count rather than contesting it. Her whole argument depends on the twenty-eight percent being real.',
          B:'A policy compromise Text 2 never offers. Ferreol’s point is that the resurfacing already produced most of the effect, which is an argument about attribution, not a sequencing plan.',
          C:'Backwards. Talbot Road, which was narrowed and resurfaced, saw crashes fall twenty-two percent, not rise.'
        },
        tip:'When two changes land in the same season, a control that got only one of them is the whole argument. Find the comparison case in Text 2 and read what it isolates.'
      },
      {
        id:'CTA-04', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — the question reframed',
        passage:'<b>Text 1</b><br>Adapted from a study by Ingeborg Salcedo.<br>We timed eleven hundred visitors in two galleries hung with the same paintings. Where the wall label ran to ninety words, the average visitor stood for forty-one seconds; where it ran to twenty-five, the average was twenty-two. Attention is the scarce resource in a museum, and a longer label nearly doubles it. Curators who trim their labels to a caption are trimming the visit itself.<br><br><b>Text 2</b><br>Adapted from a response by Terrell Aoyagi.<br>The stopwatch data are not in question; we replicated the gap almost exactly. But at the door we asked visitors what they had just seen. The long-label group could summarize the label and could not tell us the color of the sky in the canvas above it. The short-label group described the painting and forgot the text. Forty-one seconds of reading is not forty-one seconds of looking, and a gallery has to decide which it is buying.',
        stem:'Which choice best describes how Text 2 responds to Text 1?',
        choices:{
          A:'It denies that visitors stood for longer in front of the works that carried the ninety-word labels.',
          B:'It recasts the issue by asking what the extra seconds are spent on rather than whether they occur.',
          C:'It argues that labels should be lengthened further so that visitors will stay longer at each work.',
          D:'It reports that visitors who read the longer labels recalled more about the paintings above them.'
        },
        correct:'B',
        expCorrect:'Aoyagi grants the timing outright — “we replicated the gap almost exactly” — and then changes what is being asked. His exit interviews show the long-label group summarizing text and missing the sky; his closing line, “forty-one seconds of reading is not forty-one seconds of looking,” replaces the question of how long with the question of at what.',
        expWrong:{
          A:'Text 2 replicates the timing rather than denying it. A response that rejected the measurement would have no use for the exit interviews.',
          C:'Text 1’s position, pushed one step further. Aoyagi is the author raising doubts about longer labels, so this hands him the view he is arguing against.',
          D:'The interviews went the other way: the long-label group “could not tell us the color of the sky,” while the short-label group described the painting.'
        },
        tip:'A reframing Text 2 usually accepts every number in Text 1. Its move is to say the measurement answers a question nobody should have been asking.'
      },
      {
        id:'CTA-05', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — a limit on how far the finding reaches',
        passage:'<b>Text 1</b><br>Adapted from a report by Yolanda Brzezinski.<br>Kessenholt abolished bus fares in March, and boardings over the following year ran thirty-seven percent above the year before. No new line was opened and no bus was added. For the price of the fare revenue we gave up, the city has bought itself the ridership that two decades of service planning failed to produce. Cities still arguing about congestion charges should look at what a free bus can do.<br><br><b>Text 2</b><br>Adapted from a response by Idris Vanterpool.<br>The thirty-seven percent is solid. We then asked four thousand of those riders what they would have done if the fare had stayed. Six percent said they would have driven. Fifty-eight percent said they would have walked or cycled, and the rest would not have made the trip at all. Traffic counts on the same corridors are flat. Kessenholt has filled its buses, which is worth something, but the cars are still there.',
        stem:'Based on the texts, how would Vanterpool most likely respond to Brzezinski’s suggestion that other cities look to Kessenholt on congestion?',
        choices:{
          A:'By accepting the rise in boardings while showing that few of the new riders were drivers.',
          B:'By reporting that boardings rose by considerably less than the figure given in Text 1.',
          C:'By arguing that fares should be restored because free buses attract riders who could walk.',
          D:'By noting that traffic counts on the same corridors rose during the year after fares ended.'
        },
        correct:'A',
        expCorrect:'Vanterpool calls the ridership figure “solid” and then narrows what it covers: only six percent of new riders would otherwise have driven, fifty-eight percent would have walked or cycled, and traffic counts are “flat.” He allows the result and denies the congestion conclusion — “the cars are still there.”',
        expWrong:{
          B:'Text 2 confirms the thirty-seven percent in its first sentence; the survey only makes sense if the increase is real.',
          C:'Text 2 says the filled buses are “worth something” and never calls for the fare to come back. This turns a limit on the claim into an attack on the policy.',
          D:'Text 2 says the counts are flat. Rising counts would be a different and much stronger claim than the one Vanterpool makes.'
        },
        tip:'If Text 2 asks what riders, buyers, or patients would have done otherwise, it is testing whether the effect reached the group the policy was aimed at.'
      },
      {
        id:'CTA-06', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — same result, rival explanation',
        passage:'<b>Text 1</b><br>Adapted from a paper by Rosalind Achterberg.<br>The song of the Wenlock humpback population has shifted upward in pitch by nearly a fifth over eleven years, and the change moved through the population the way a tune moves through a choir: the eastern animals sang it first, the western ones within two seasons. Whales are learning from whales. Few behaviors outside our own species show cultural transmission this cleanly.<br><br><b>Text 2</b><br>Adapted from a response by Casimir Teodoro.<br>Achterberg’s recordings are the best in the field and the pitch shift is exactly as she describes it. Container traffic through the strait also rose over those eleven years, and engine noise sits in the low band the old song occupied. Fish and frogs raise their pitch in noise without learning anything from each other. The east-to-west order she treats as teaching is also the order in which the shipping lanes filled.',
        stem:'Which choice best describes a central difference between the two texts?',
        choices:{
          A:'Text 1 reports a rise in the pitch of the song; Text 2 finds no change in pitch over the same period.',
          B:'Text 1 treats the recordings as reliable; Text 2 argues that the population was sampled too narrowly.',
          C:'Text 1 explains the spreading pitch shift as learning; Text 2 offers a cause that requires no learning.',
          D:'Text 1 studies a single population of whales; Text 2 compares that population with fish and with frogs.'
        },
        correct:'C',
        expCorrect:'Teodoro accepts both the shift and its geography — the recordings are “the best in the field” — and supplies a rival cause. Rising engine noise sits “in the low band the old song occupied,” and “fish and frogs raise their pitch in noise without learning anything from each other,” so the east-to-west order tracks the filling shipping lanes rather than teaching.',
        expWrong:{
          A:'Text 2 affirms the pitch shift in its first sentence. Both authors are explaining the same change.',
          B:'Sampling is never raised. Text 2 calls the recordings the best in the field and argues about what caused what they captured.',
          D:'True in outline but not the disagreement. Fish and frogs appear in Text 2 only as an illustration of noise-driven pitch change, and a shared example is not a split.'
        },
        tip:'When Text 2 introduces an unrelated species or an unrelated industry, it is usually supplying a mechanism that explains Text 1’s pattern without Text 1’s cause.'
      },
      {
        id:'CTA-07', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — direct disagreement',
        passage:'<b>Text 1</b><br>Adapted from a paper by Gustav Lindqvist.<br>Where no document survives, lichen will do. The yellow-green crust that colonizes bare rock grows at a steady rate, so the largest thallus on a fallen block dates the fall. Measured against four rockfalls in the Skarven valley whose years are known from parish accounts, our curve returned dates within a decade in every case. Slopes with no written record can now be read directly.<br><br><b>Text 2</b><br>Adapted from a response by Bettina Kovac.<br>We transplanted three hundred thalli of the same species across one valley and came back after nine years. On north-facing rock the largest had grown a third as fast as on south-facing rock a hundred meters away, and those on seepage lines had outgrown both. A curve calibrated on four blocks that happen to face the same way is not a clock. It is a record of those four blocks.',
        stem:'Based on the texts, how would Kovac (Text 2) most likely characterize the dating method described in Text 1?',
        choices:{
          A:'As sound in principle but not yet tested against rockfalls whose dates are known from documents.',
          B:'As unreliable, because growth rate varies enough with exposure to undo the calibration Lindqvist used.',
          C:'As useful for slopes with written records and unnecessary for the slopes that Lindqvist wants to date.',
          D:'As accurate only where the thalli being measured are growing along lines of seepage on the rock.'
        },
        correct:'B',
        expCorrect:'Kovac rejects the method itself. Her transplants show growth on north-facing rock at “a third as fast” as on south-facing rock in the same valley, so the rate Lindqvist treats as steady is not. Her closing sentence draws the conclusion: a curve built on four similar blocks “is not a clock. It is a record of those four blocks.”',
        expWrong:{
          A:'Text 1 reports exactly that test — four Skarven rockfalls dated from parish accounts — and Text 2 does not deny it happened. Kovac’s complaint is that four same-facing blocks cannot calibrate a rule for all slopes.',
          C:'Backwards as a use case. Nobody needs lichen where documents survive, and Text 2 argues the method fails precisely where Lindqvist wants to apply it.',
          D:'Seepage lines appear in Text 2 as a third growth rate, evidence that the rate varies. Nothing suggests those thalli give accurate dates.'
        },
        tip:'A frontal disagreement attacks an assumption the first text never argued for. Here it is the word “steady”: find it in Text 1, then find the data in Text 2 that contradicts it.'
      },
      {
        id:'CTA-08', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections — support from a second field',
        passage:'<b>Text 1</b><br>Adapted from a report by Ottilie Marchetti.<br>Merchants on Fairholm Street predicted ruin when nine parking spaces were replaced by a protected bike lane. Two years of card receipts say otherwise: turnover on the block is up eleven percent against a flat citywide figure, and three vacant units have been let. Shopkeepers count the cars they can see and never count the people who arrive some other way.<br><br><b>Text 2</b><br>Adapted from a response by Devansh Ruthermere.<br>I work in traffic engineering and I have no access to anyone’s receipts. What we do have is the count. Before the lane, eleven hundred people a day passed the Fairholm frontage; after it, nineteen hundred, because a lane moves far more people per meter of street than a parking bay stores. The merchants were not wrong that they lost cars. They lost nine of them and gained eight hundred passers-by.',
        stem:'Which choice best describes the relationship between the two texts?',
        choices:{
          A:'Text 2 casts doubt on the receipts in Text 1 by showing that few of the new passers-by entered the shops.',
          B:'Text 2 accepts the merchants’ prediction in Text 1 and explains why the parking spaces mattered to them.',
          C:'Text 2 applies Text 1’s conclusion to a second street where a protected lane replaced parking spaces.',
          D:'Text 2 reaches Text 1’s conclusion from traffic counts rather than sales, supplying a reason the turnover rose.'
        },
        correct:'D',
        expCorrect:'Ruthermere says plainly that he has “no access to anyone’s receipts” and works from footfall instead: eleven hundred people a day before the lane, nineteen hundred after, “because a lane moves far more people per meter of street than a parking bay stores.” That is Marchetti’s conclusion supported by a mechanism from another discipline.',
        expWrong:{
          A:'Text 2 never questions the receipts and offers no figure for how many passers-by went in. It supplies the flow of people that makes Text 1’s rise in turnover intelligible.',
          B:'Text 2 grants only that the merchants lost nine cars, and immediately sets that against eight hundred added passers-by. Accepting one detail is not accepting the prediction of ruin.',
          C:'There is no second street in Text 2. Both authors are describing the same Fairholm frontage with different instruments.'
        },
        tip:'Two texts on the same case with different instruments are usually corroborating. Check whether Text 2’s evidence could have been collected without Text 1’s, and whether the conclusions match.'
      },
      {
        id:'CTA-09', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — a limit on how far the finding reaches',
        passage:'<b>Text 1</b><br>Adapted from a paper by Marisol Enwright.<br>Coral larvae listen. On six degraded patches of the Kallow shoal we played recordings of a healthy reef through a submerged speaker for six weeks; settlement on those patches ran three and a half times the rate on six silent controls a hundred meters away. A speaker and a battery cost less than a single day of transplanting nursery coral. Restoration has been looking for a cheap lever, and this is one.<br><br><b>Text 2</b><br>Adapted from a response by Hidde Vanroon.<br>Our own counts at six weeks match Enwright’s almost exactly. We then kept counting. By month fourteen the treated patches carried no more living coral than the controls: the settlers had arrived in numbers and then been grazed off rock that is still unstable. Settlement was never the step that was failing on this shoal. A speaker delivers larvae to a place that cannot yet keep them.',
        stem:'Based on the texts, how would Vanroon (Text 2) most likely respond to Enwright’s claim that acoustic playback is a cheap lever for restoration?',
        choices:{
          A:'By granting the settlement result while reporting that the treated patches held no extra coral a year later.',
          B:'By showing that playback drove larvae away from the treated patches and toward the silent controls nearby.',
          C:'By confirming that settlement on the treated patches ran well above the rate measured on the controls.',
          D:'By arguing that recordings of healthy reefs should not be played on any shoal under restoration.'
        },
        correct:'A',
        expCorrect:'Vanroon accepts the six-week result — “our own counts at six weeks match Enwright’s almost exactly” — and extends the clock. By month fourteen the treated patches “carried no more living coral than the controls,” because “settlement was never the step that was failing.” The finding stands; what it licenses does not.',
        expWrong:{
          B:'Nothing in Text 2 reverses the direction of the effect. Vanroon’s settlers arrive in numbers and are then grazed off, which requires the playback to have worked.',
          C:'This is the part of Text 1 that Text 2 concedes. Repeating the conceded finding leaves out the fourteen-month counts that carry the whole response.',
          D:'A blanket prohibition Text 2 never issues. Vanroon’s claim is specific to a shoal whose rock “is still unstable,” which is a statement about where the lever works.'
        },
        tip:'Watch the clock in each text. When Text 2 measures the same thing over a longer period, the answer almost always concedes the short-run result and denies that it lasted.'
      },
      {
        id:'CTA-10', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — the question reframed',
        passage:'<b>Text 1</b><br>Adapted from a study by Aurelia Fenwick.<br>Authorship leaves a fingerprint in the words nobody chooses on purpose. Across the four anonymous Ledger letters, the rates of <i>whilst</i>, <i>unto</i>, <i>therein</i> and eleven other function words fall within the band we measure in the signed work of Thomas Brede and outside the band of every other candidate we tested. The letters are Brede’s, and a two-hundred-year argument can be closed.<br><br><b>Text 2</b><br>Adapted from a response by Nikolaj Oyelowo.<br>Fenwick’s counts are reproducible; I have run them. But nothing in that list reaches the page untouched. Compositors of this decade normalized spelling by house rule and freely added or dropped small words to justify a line of type, and the Ledger letters and Brede’s signed work came off the same two presses. A fingerprint shared by everything a shop printed tells us which shop set the type.',
        stem:'Which choice best describes how the two texts relate?',
        choices:{
          A:'Text 2 argues that Fenwick tested too few candidate authors for her conclusion about Brede to hold.',
          B:'Text 2 accepts Fenwick’s measurements but argues that they identify a printing house rather than an author.',
          C:'Text 2 supports Fenwick’s attribution with evidence drawn from the working practices of the printing trade.',
          D:'Text 2 shows that the rates of the function words differ between the Ledger letters and Brede’s signed work.'
        },
        correct:'B',
        expCorrect:'Oyelowo grants the data — “Fenwick’s counts are reproducible; I have run them” — and then changes what they are a fingerprint of. Compositors “freely added or dropped small words to justify a line of type,” and both bodies of text “came off the same two presses,” so the shared band “tells us which shop set the type.”',
        expWrong:{
          A:'The size of the candidate pool is never at issue. Text 2’s argument would apply even if every writer in the country had been tested, because it concerns what happens between manuscript and page.',
          C:'It uses the printing trade against the attribution, not for it. Text 2’s whole point is that shop practice is a rival source of the very similarity Fenwick measured.',
          D:'The opposite of what both texts report. The rates match; the disagreement is about why they match.'
        },
        tip:'Ask what the measurement is a fingerprint OF. A reframing Text 2 keeps the number and changes the thing it is a number about.'
      },
      {
        id:'CTA-11', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — same result, rival accounting',
        passage:'<b>Text 1</b><br>Adapted from a report by Perpetua Halloran.<br>Twelve cores through the restored marsh at Tarn Bight show organic carbon accumulating at nearly twice the rate of the undisturbed marsh across the channel, which is what a young, fast-building surface should do. A hectare of this costs a fraction of what industrial capture costs per ton. Marsh restoration has been argued for on birds and on flood defense; it can now be argued for on carbon.<br><br><b>Text 2</b><br>Adapted from a response by Emrys Dombrowski.<br>Halloran’s cores are careful and I would not revise a number in them. Carbon buried is only one side of the ledger. The restored surface sits behind a breached bank and drains poorly, and our flux chambers there recorded methane at roughly ten times the rate across the channel. Weighed over twenty years, that methane cancels most of the advantage the cores record. The site may still be worth building. The carbon case is the weakest reason to build it.',
        stem:'Based on the texts, how would Dombrowski (Text 2) most likely respond to Halloran’s argument that restoration can be justified on carbon grounds?',
        choices:{
          A:'By arguing that the restored marsh should not be built, since its emissions exceed those of the natural marsh.',
          B:'By disputing the burial rates in the cores on the ground that a young surface accumulates unevenly.',
          C:'By agreeing that a hectare of restored marsh costs far less than industrial capture of the same carbon.',
          D:'By accepting the burial rates while arguing that methane from the site cancels most of the benefit.'
        },
        correct:'D',
        expCorrect:'Dombrowski says he “would not revise a number” in the cores and then adds the other side of the ledger: flux chambers recorded methane at “roughly ten times the rate across the channel,” which “cancels most of the advantage the cores record.” He accepts the measurement and rejects the net conclusion drawn from it.',
        expWrong:{
          A:'Overshoots. Text 2 explicitly allows that “the site may still be worth building”; its target is the carbon justification, not the project.',
          B:'Text 2 accepts the cores in its first sentence. The words about a young surface are Text 1’s own explanation of why burial is fast.',
          C:'True of Text 1 and never contested, which is exactly why it cannot be the response. Cost per ton is not what Dombrowski is arguing about.'
        },
        tip:'When Text 2 says a measurement is “one side of the ledger,” expect the answer to keep that measurement and add a cost that changes the total.'
      },
      {
        id:'CTA-12', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — a limit on how far the finding reaches',
        passage:'<b>Text 1</b><br>Adapted from a report by Solveig Mbarga.<br>When the Ferrow group made its retirement plan automatic, with a three percent contribution unless the worker opted out, participation went from forty-one percent of staff to eighty-eight in a single quarter. Nobody was compelled and nobody lost an option. Inertia had been working against savers for thirty years; the plan simply put inertia on their side, at no cost to the firm.<br><br><b>Text 2</b><br>Adapted from a response by Teodor Aliyev.<br>Participation rose exactly as Mbarga reports. The same default is also a ceiling. Before the change, the workers who enrolled chose a median of seven percent; after it, the median across all enrolled staff is three, and four fifths of them have never once moved the dial. More people are saving, and the median dollar amount put aside per worker is lower than it was. The number on the default matters more than the default itself.',
        stem:'Which choice best describes how Text 2 responds to Text 1?',
        choices:{
          A:'It denies that the share of staff enrolled in the plan changed after enrollment became automatic.',
          B:'It recommends that the firm return to a plan in which each worker must choose to enroll.',
          C:'It accepts the rise in participation and shows that the default rate held contributions down.',
          D:'It argues that workers who were moved into the plan automatically tend to opt out within a year.'
        },
        correct:'C',
        expCorrect:'Aliyev grants the headline — “participation rose exactly as Mbarga reports” — and then limits it. The chosen median was seven percent before the change and is three after, “four fifths of them have never once moved the dial,” and the median dollar amount saved is lower. More savers, smaller savings.',
        expWrong:{
          A:'Text 2 confirms the participation figure in its first sentence, which is what makes the rest of its argument worth making.',
          B:'No such recommendation appears. Text 2 ends by saying the number on the default matters more than the default itself, which is advice about setting the rate, not abolishing it.',
          D:'Text 2 reports the reverse: four fifths of enrolled workers have never moved the dial, so they are staying in at three percent rather than leaving.'
        },
        tip:'A default, a threshold, or a cutoff in Text 1 is often the thing Text 2 attacks — not whether it worked, but what level it was set at.'
      },
      {
        id:'CTA-13', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — the question reframed',
        passage:'<b>Text 1</b><br>Adapted from a study by Ignatia Brzoska.<br>The Vresden metalworkers’ rolls survive unbroken from 1470 to 1520 and list six hundred and eleven masters, of whom four are women. Buckle-making, spur-making and the finer casting were, on this evidence, effectively closed to women in the city. Where a trade kept records as complete as these, we are entitled to read absence from the record as absence from the trade.<br><br><b>Text 2</b><br>Adapted from a response by Anselm Diaby.<br>Brzoska has counted the rolls correctly. Alongside them sit the toll book and forty-one widows’ inventories from the same decades. The toll book records twenty-nine women paying the entry fee on finished buckles under their own seals, and the inventories list women’s tools, women’s stock and, twice, an apprentice bound to a woman. The rolls record who could hold the rank of master. That is a question about the guild, not about the workshop.',
        stem:'Based on the texts, how would Diaby (Text 2) most likely characterize the guild rolls that Brzoska relies on?',
        choices:{
          A:'As an accurate register of who could hold a rank rather than of who practiced the craft.',
          B:'As a record too damaged by gaps in the years after 1470 to support any count of masters.',
          C:'As proof that women entered the metal trades in Vresden in numbers close to those of men.',
          D:'As evidence that the guild admitted women as masters more often than the toll book suggests.'
        },
        correct:'A',
        expCorrect:'Diaby says outright that “Brzoska has counted the rolls correctly,” so the rolls are not in doubt; what they register is. His toll book shows twenty-nine women paying entry on finished buckles under their own seals, and he closes by separating the two questions: the rolls “record who could hold the rank of master,” which is “a question about the guild, not about the workshop.”',
        expWrong:{
          B:'Text 1 calls the rolls unbroken and Text 2 accepts the count. Neither author claims the series has gaps; the argument is about what a complete series can show.',
          C:'Far stronger than Text 2’s evidence. Twenty-nine tolls and forty-one inventories establish that women worked in metal, not that they did so in numbers near parity.',
          D:'It has the two sources pointing the same way. In Text 2 the toll book shows women working outside the rank of master, not the guild quietly admitting more of them.'
        },
        tip:'When Text 2 brings in a second archive, ask what each archive was created to record. The usual answer separates a title or a license from the activity itself.'
      },
      {
        id:'CTA-14', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — support from a second field',
        passage:'<b>Text 1</b><br>Adapted from a proposal by Xiomara Pelletier.<br>The Alder district moves its water down four hundred kilometers of open canal, and in an average July it loses to the air roughly what nine thousand households use in a year. Roofing the canals with solar panels would recover most of that loss, and the district already owns every meter of the right of way. On the water saved alone, the structures repay their cost in eleven years.<br><br><b>Text 2</b><br>Adapted from a response by Bram Utterson.<br>I cannot audit an evaporation estimate; that is not my field. I can say what the panels would do. A module sitting above moving water runs cooler than one over gravel, and cooler modules give up less of their rated output, in our test arrays about three percent more energy across a summer. The district also skips the land purchase that normally sets the price of a solar farm. The power case stands on its own.',
        stem:'Which choice best describes how Text 2 relates to Text 1?',
        choices:{
          A:'It questions whether the evaporation losses in Text 1 are large enough to justify roofing the canals.',
          B:'It restates Text 1’s eleven-year figure using a different method of accounting for the cost of the panels.',
          C:'It concedes that the panels would generate less power over a canal than the same panels would over land.',
          D:'It reinforces Text 1’s proposal with evidence about power output that does not rest on the water savings.'
        },
        correct:'D',
        expCorrect:'Utterson sets Pelletier’s hydrology aside — “I cannot audit an evaporation estimate; that is not my field” — and argues from his own: modules over moving water run cooler and return “about three percent more energy across a summer,” and the district “skips the land purchase.” His closing line makes the independence explicit: “the power case stands on its own.”',
        expWrong:{
          A:'Text 2 declines to evaluate the evaporation figure at all, which is not the same as doubting it. Declining to judge a number and disputing it are different moves.',
          B:'The eleven-year figure never reappears in Text 2. Utterson offers a second reason to build, not a recalculation of Text 1’s payback.',
          C:'Backwards. Text 2 reports that modules over water run cooler and therefore produce more, not less, than they would elsewhere.'
        },
        tip:'When an author says a topic is outside their field, expect them to add evidence rather than judge Text 1’s. The answer should describe support that stands without Text 1.'
      },
      {
        id:'CTA-15', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — same result, rival explanation',
        passage:'<b>Text 1</b><br>Adapted from a paper by Marit Sundqvist.<br>One and a quarter million records submitted by volunteers place the northern limit of the marsh wren ninety kilometers further north than it stood fifteen years ago. No professional survey could cover that ground, and no professional survey is needed: the wren has moved, the winters have softened, and the two facts sit beside each other in a dataset of a size ornithology has never had before.<br><br><b>Text 2</b><br>Adapted from a response by Calum Ferreira.<br>The records are real and so, I believe, is some movement. The number of volunteers reporting from the northern counties also rose roughly sixfold over those same fifteen years, and a bird is only found where somebody looks. We reran the analysis using only the four hundred sites visited in every year of the series, holding effort flat. The limit still moves north, by about twenty kilometers.',
        stem:'Based on the texts, how would Ferreira (Text 2) most likely respond to the ninety-kilometer figure in Text 1?',
        choices:{
          A:'By rejecting volunteer records as a basis for any claim about where a species is found.',
          B:'By agreeing that the limit moved north while arguing that most of the distance reflects added observers.',
          C:'By noting that the dataset is larger than anything a professional survey has ever assembled.',
          D:'By showing that the wren has retreated southward once the number of observers is held constant.'
        },
        correct:'B',
        expCorrect:'Ferreira concedes movement — “the records are real and so, I believe, is some movement” — and explains most of the distance another way: volunteers in the northern counties rose “roughly sixfold,” and “a bird is only found where somebody looks.” Holding effort flat with the four hundred annually visited sites leaves about twenty kilometers of the ninety.',
        expWrong:{
          A:'Too sweeping. Text 2 reanalyzes the volunteer records rather than discarding them, and its own twenty-kilometer result comes out of the same dataset.',
          C:'True, and stated in Text 1. Praise for the size of the dataset is common ground, not a reply to what the size was taken to prove.',
          D:'Text 2’s constant-effort analysis still moves the limit north, only by less. A retreat would be a different finding altogether.'
        },
        tip:'With volunteer or crowd-sourced data, ask whether the observers changed as fast as the thing observed. The fix is usually a subset measured the same way every year.'
      },
      {
        id:'CTA-16', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — a limit on how far the finding reaches',
        passage:'<b>Text 1</b><br>Adapted from a report by Tamsin Okwuosa.<br>Eighteen months after nine hundred tons of shell were laid on the Bellamy flats, water clarity over the new reef has doubled, measured the same way from the same three stations. An adult oyster filters close to two hundred liters a day, and there are now tens of millions of them where there were none. Shell is the cheapest engineering available to a turbid estuary.<br><br><b>Text 2</b><br>Adapted from a response by Hendrik Abaza.<br>Clarity over the flats doubled; our instruments agree with hers. Four hundred meters out it is unchanged, and even over the reef the gain appears only on the ebb, when a narrow volume of water passes the animals twice. After a week of rain the whole bay turns the color of the river regardless of what the oysters do. Okwuosa has built a clear patch, and a clear patch is not a clear estuary.',
        stem:'Which choice best describes how Text 2 responds to Text 1?',
        choices:{
          A:'It denies that the oysters laid on the flats have survived in the numbers Text 1 describes.',
          B:'It argues that shell should not be laid in estuaries that receive heavy loads from a river.',
          C:'It accepts the improvement over the reef while showing that it does not extend to the estuary.',
          D:'It reports that clarity over the reef improves on the flood tide rather than on the ebb.'
        },
        correct:'C',
        expCorrect:'Abaza verifies the local result — “our instruments agree with hers” — and then draws the boundary: unchanged four hundred meters out, present “only on the ebb,” and erased after a week of rain when “the whole bay turns the color of the river.” His last sentence states the limit: “a clear patch is not a clear estuary.”',
        expWrong:{
          A:'Survival is never questioned. Text 2’s ebb-tide detail assumes the animals are there and filtering.',
          B:'No recommendation against shell appears. Text 2 restricts the scale of the claim rather than opposing the project.',
          D:'Text 2 says the gain appears on the ebb. Reversing the tide reverses the one mechanism Abaza offers for why the effect is narrow.'
        },
        tip:'Scope answers turn on distance, duration, or conditions. Underline every “four hundred meters out,” “only on,” and “after a week” in Text 2 before you read the choices.'
      },
      {
        id:'CTA-17', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — same result, rival explanation',
        passage:'<b>Text 1</b><br>Adapted from a study by Renske Obuya.<br>Ashcombe moved its high schools from a 7:25 start to 8:30 and, two years on, mathematics scores across the district are up by about a sixth of a standard deviation, with the largest gains among students who had reported the least sleep. Adolescents cannot fall asleep at nine; that is biology, not attitude. A district can raise achievement by changing a clock.<br><br><b>Text 2</b><br>Adapted from a response by Lazar Whitcombe.<br>The gain is in the data and I expect sleep explains part of it. The same reform also abolished the zero-period class that met before the old start. Two fifths of students had been carrying an eighth course; they now carry seven, and because those teachers were redeployed, average section size fell from thirty-one to twenty-six. A later clock, a lighter load and smaller classes arrived on one morning, and the study cannot tell them apart.',
        stem:'Based on the texts, how would Whitcombe (Text 2) most likely respond to Obuya’s conclusion?',
        choices:{
          A:'By disputing the size of the improvement in mathematics scores reported across the district.',
          B:'By denying that the students who slept least showed any gain after the schedule changed.',
          C:'By arguing that adolescents can adjust their sleep to an early start if the school year is long enough.',
          D:'By accepting the improvement while arguing that the reform changed more than the start time.'
        },
        correct:'D',
        expCorrect:'Whitcombe grants both the result and part of the explanation — “the gain is in the data and I expect sleep explains part of it” — and then lists what else moved on the same morning: the zero period abolished, two fifths of students dropping to seven courses, and sections falling from thirty-one to twenty-six. “The study cannot tell them apart.”',
        expWrong:{
          A:'Text 2 accepts the improvement in its opening clause; disputing the effect size would make the rest of the paragraph pointless.',
          B:'The pattern among short-sleeping students is never challenged. Text 2 allows that sleep explains part of the gain.',
          C:'Text 1 calls adolescent sleep timing “biology, not attitude,” and Text 2 does not argue with that. This invents a disagreement neither author has.'
        },
        tip:'Ask what else changed on the day the treatment did. If Text 2 names two or three simultaneous changes, the correct answer is about disentangling causes, not about the size of the effect.'
      },
      {
        id:'CTA-18', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — the question reframed',
        passage:'<b>Text 1</b><br>Adapted from a paper by Ilaria Stroud.<br>Twelve thousand stamped amphora handles from the Ostia deposits, sorted by kiln and by decade, give the shape of the oil trade with unusual precision: a long rise through the first century, a peak in the decades after 140, and a fall thereafter that no historian had dated so closely. Pottery is indestructible and it was stamped. Few ancient economies leave a series this good.<br><br><b>Text 2</b><br>Adapted from a response by Ruslan Dacosta.<br>The sorting is meticulous and the dates are sound. Amphorae, though, are packaging. The barrel spread west through exactly these decades, and skins carried oil overland throughout; neither survives in a deposit. What rises and falls in Stroud’s curve is the share of oil that traveled in fired clay. Whether the trade itself rose and fell with it is a question her material is silent about.',
        stem:'Which choice best describes how the two texts differ in their treatment of the amphora series?',
        choices:{
          A:'Text 1 treats the series as a measure of the oil trade; Text 2 treats it as a measure of how oil was packaged.',
          B:'Text 1 dates the series by kiln and decade; Text 2 argues that the stamps cannot be dated that closely.',
          C:'Text 1 draws on deposits at a single port; Text 2 draws on deposits from ports across the western provinces.',
          D:'Text 1 finds a peak in the decades after 140; Text 2 finds that the peak falls considerably later.'
        },
        correct:'A',
        expCorrect:'Dacosta accepts the series as built — “the sorting is meticulous and the dates are sound” — and changes what it is a series of. Because barrels and skins “spread west through exactly these decades” and leave nothing behind, “what rises and falls in Stroud’s curve is the share of oil that traveled in fired clay,” with the trade itself “a question her material is silent about.”',
        expWrong:{
          B:'Text 2 endorses the dating explicitly. Its argument needs the chronology to be right, since the barrel’s spread has to line up with the curve.',
          C:'No second body of deposits appears in Text 2. Dacosta argues from what does not survive anywhere, not from a wider sample.',
          D:'Text 2 never redates the peak. It questions what a peak in stamped handles represents, which is a different kind of objection.'
        },
        tip:'When Text 2 points out what does NOT survive, it is arguing that the surviving series measures a share, not a total. That distinction is usually the answer.'
      },
      {
        id:'CTA-19', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — a limit on how far the finding reaches',
        passage:'<b>Text 1</b><br>Adapted from a report by Aroha Winterbourne.<br>When the Kelmarsh immersion school opened, Tarrow had eleven fluent speakers, all of them over seventy. Three hundred and forty children have now passed through it, and independent assessors rate two thirds of the leavers as conversationally fluent. A language with three hundred speakers under eighteen is not a language that is dying. The classroom has done in twelve years what a century of goodwill did not.<br><br><b>Text 2</b><br>Adapted from a response by Padraig Oyarzun.<br>The assessments are honest and the children can speak. We surveyed sixty households with a leaver in them. In four, Tarrow is the language of the kitchen; in the rest it is used with a teacher and with nobody else, and the leavers speak to one another in the majority language within an hour of the bell. Languages have been carried by households far more often than by schools, and the household has not yet been reached.',
        stem:'Based on the texts, how would Oyarzun (Text 2) most likely respond to Winterbourne’s claim that Tarrow is no longer dying?',
        choices:{
          A:'By disputing the assessors’ finding that most leavers can hold a conversation in Tarrow.',
          B:'By arguing that immersion schooling should be replaced by programs aimed at adult speakers.',
          C:'By granting the children’s fluency while arguing that the language has not reached their households.',
          D:'By showing that the number of fluent speakers over seventy has continued to fall since the school opened.'
        },
        correct:'C',
        expCorrect:'Oyarzun accepts the classroom result — “the assessments are honest and the children can speak” — and then bounds it. In fifty-six of sixty households Tarrow is spoken “with a teacher and with nobody else,” and his closing sentence names the gap: languages are carried by households, and “the household has not yet been reached.”',
        expWrong:{
          A:'Text 2 endorses the assessments in its first sentence, which is what makes the household survey the interesting part of his reply.',
          B:'No alternative program is proposed. Text 2 identifies what the school has not yet achieved rather than arguing it should be shut down or swapped out.',
          D:'The elderly speakers appear only in Text 1, as the starting point. Text 2 offers no count of them and rests its case on the sixty households.'
        },
        tip:'For a claim about survival or spread, check whether Text 2 changes the setting — home instead of school, street instead of lab. A setting change is a scope limit.'
      },
      {
        id:'CTA-20', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — support from a second field',
        passage:'<b>Text 1</b><br>Adapted from a report by Nadira Calloway.<br>The surge of 2019 gave us a comparison no one would design. Villages with two hundred meters of standing mangrove in front of them lost four percent of their houses; villages whose frontage had been cleared for ponds lost thirty-one. The forest is a seawall that repairs itself, costs nothing to maintain, and was cut down because it produced no revenue. No engineered structure on that coast performed as well.<br><br><b>Text 2</b><br>Adapted from a response by Feliks Mwangi.<br>Post-storm comparisons trouble me: the cleared villages were also the poorer ones, with lighter roofs and weaker footings, and that alone could move the figures. So we built the case in a flume instead. Forty meters of model root structure cut wave height by half, and the reduction scaled with stem density just as theory predicts. The mangroves do the work Calloway credits them with. Her villages are simply not how I would prove it.',
        stem:'Which choice best describes how Text 2 relates to Text 1?',
        choices:{
          A:'It rejects Text 1’s conclusion on the ground that the cleared villages differed from the forested ones.',
          B:'It supports Text 1’s conclusion with laboratory evidence while doubting the comparison Text 1 relies on.',
          C:'It confirms Text 1’s finding that no engineered structure on the coast performed as well as the mangroves.',
          D:'It argues that stem density matters less to wave height than the width of the forest in front of a village.'
        },
        correct:'B',
        expCorrect:'Mwangi does two things at once. He distrusts the field comparison — the cleared villages “were also the poorer ones, with lighter roofs and weaker footings” — and he then confirms the conclusion from his flume, where forty meters of root structure “cut wave height by half.” His summary is exact: “the mangroves do the work Calloway credits them with. Her villages are simply not how I would prove it.”',
        expWrong:{
          A:'Half of Text 2 and the wrong half. The confound is raised, but the flume result endorses the conclusion, so “rejects” is precisely what Mwangi avoids.',
          C:'Engineered structures never enter Text 2. Mwangi tests model roots against waves and makes no comparison with built defenses.',
          D:'Text 2 reports that wave reduction “scaled with stem density,” which supports density as a factor rather than downgrading it.'
        },
        tip:'A Text 2 can attack the method and still agree with the conclusion. If the closing sentence endorses the claim, an answer beginning “rejects” or “refutes” is out.'
      },
      {
        id:'CTA-21', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections — direct disagreement',
        passage:'<b>Text 1</b><br>Adapted from a paper by Cosima Arvelo.<br>The nine Vesper books share a ruling pattern down to the millimeter: a double-bounded frame, twenty-six lines, prickings left visible in the outer margin. Scribes did not invent such a pattern twice. The nine came out of one workshop, probably within a decade, and that workshop is the missing link between the cathedral scriptorium and the commercial shops of the next generation.<br><br><b>Text 2</b><br>Adapted from a response by Joakim Bright.<br>The ruling is identical; Arvelo has measured it correctly. Ruling patterns, however, travel with the tool. Frame templates of exactly this size were sold by the gross out of two towns on the river and turn up from the coast to the mountains. Among her nine, three are written on parchment prepared in the northern manner and two carry an azurite that was not traded south of the river. These books were not made in one place.',
        stem:'Which choice best describes the difference between the two texts?',
        choices:{
          A:'Text 1 dates the nine books to a single decade; Text 2 argues they were produced across two centuries.',
          B:'Text 1 relies on the ruling pattern of the books; Text 2 argues that the pattern was measured imprecisely.',
          C:'Text 1 treats the books as commercial products; Text 2 treats them as the output of a cathedral scriptorium.',
          D:'Text 1 infers one workshop from a shared ruling pattern; Text 2 infers several from parchment and pigment.'
        },
        correct:'D',
        expCorrect:'Bright accepts the measurement — “the ruling is identical; Arvelo has measured it correctly” — and denies that it identifies a workshop, since “ruling patterns travel with the tool” and templates of that size “were sold by the gross.” His own evidence is material: parchment “prepared in the northern manner” in three books and an azurite not traded south of the river in two. Hence “these books were not made in one place.”',
        expWrong:{
          A:'Text 2 offers no chronology at all. It argues about place of manufacture, and two centuries is a span neither author mentions.',
          B:'Text 2 explicitly endorses the measurement. Its objection is that an accurately measured pattern can be shared by shops that bought the same template.',
          C:'It scrambles the texts. The scriptorium and the commercial shops are both Text 1’s framing of what the workshop connects; Text 2 does not assign the books to either.'
        },
        tip:'A shared feature proves a shared source only if nothing else could produce it. When Text 2 shows the feature was portable, look for the answer built on the evidence that is not portable.'
      },
      {
        id:'CTA-22', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections — a limit on how far the finding reaches',
        passage:'<b>Text 1</b><br>Adapted from a report by Csilla Amadu.<br>Four years after the county required every new fixture to be shielded so that no light is emitted above the horizontal, the sky brightness meter at the Hesper observatory reads eleven percent darker at the zenith than it did before. Nothing else about the county changed except that more people moved into it. Every jurisdiction on this plateau should adopt the ordinance, and the argument that shielding cannot keep up with growth should be retired.<br><br><b>Text 2</b><br>Adapted from a response by Onyeka Braithwaite.<br>The zenith meter is well maintained and its eleven percent is not in dispute. A shielded fixture does not destroy light; it aims it at the ground, and the ground on this plateau is increasingly new pavement, which throws a good deal of it back at a shallow angle. Our all-sky camera records a nine percent rise between twenty and forty degrees above the horizon — the band that ruins a long exposure. One number taken straight up cannot see where the light went.',
        stem:'Based on the texts, how would Braithwaite (Text 2) most likely respond to the recommendation in Text 1?',
        choices:{
          A:'By accepting the zenith reading while arguing that it misses the part of the sky where the glow moved.',
          B:'By disputing the eleven percent decline that the observatory recorded at the zenith over four years.',
          C:'By concluding that shielded fixtures brighten the sky overall and should be removed from the plateau.',
          D:'By reporting that the all-sky camera found no change at any angle in the years after the ordinance.'
        },
        correct:'A',
        expCorrect:'Braithwaite concedes the instrument and the number — “its eleven percent is not in dispute” — and then explains where the light went: shielding “aims it at the ground,” new pavement “throws a good deal of it back at a shallow angle,” and the all-sky camera finds “a nine percent rise between twenty and forty degrees above the horizon.” His closing sentence is the objection in miniature: “one number taken straight up cannot see where the light went.”',
        expWrong:{
          B:'Text 2 accepts the reading in its first sentence. An argument about which part of the sky was measured requires the measurement itself to be sound.',
          C:'Stronger than Text 2 supports. Braithwaite reports a fall at the zenith and a rise at low angles — a redistribution — and never recommends removing the fixtures.',
          D:'The camera is Text 2’s own evidence and it found a nine percent rise in the band that spoils long exposures. Erasing that reading removes the basis for the reply.'
        },
        tip:'When Text 1 rests on a single instrument, check what that instrument cannot see. A response of this kind keeps the reading and denies that it covers the relevant area.'
      },
      {
        id:'CTA-23', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections — same evidence, disputed association',
        passage:'<b>Text 1</b><br>Adapted from a paper by Halvard Tsenova.<br>Domestic fowl bones have now been recovered from pit deposits at three sites on the Brandt estuary, in layers that charcoal places at about 1200 BCE. That is some seven centuries before the earliest fowl anyone had claimed for the region, and it requires a trade route running north far earlier than the metal finds suggest. The bones are unmistakable: fowl have a tarsometatarsus nothing else in the local fauna resembles.<br><br><b>Text 2</b><br>Adapted from a response by Leocadia Firsov.<br>The identifications are correct and the charcoal dates are correct. Bones, however, are not dated by the layer they sit in; they are dated by themselves. Pits are dug, refilled and dug again, and a small bone travels down easily. We submitted six of Tsenova’s fowl bones for direct dating and got a range centered on 500 BCE. The deposits are of the age she says. The birds are not.',
        stem:'Which choice best describes how Text 2 responds to Text 1?',
        choices:{
          A:'It argues that the charcoal used to date the three deposits was contaminated by later material.',
          B:'It accepts the dating of the deposits and argues that the bones entered them at a later date.',
          C:'It concludes that domestic fowl did not reach the Brandt estuary until the medieval period.',
          D:'It confirms that the bones and the deposits around them returned the same radiocarbon age.'
        },
        correct:'B',
        expCorrect:'Firsov concedes both the identification and the layer chronology in one sentence — “the identifications are correct and the charcoal dates are correct” — and separates the bone from its surroundings: “bones are not dated by the layer they sit in.” Direct dating of six of the bones returns about 500 BCE, so “the deposits are of the age she says. The birds are not.”',
        expWrong:{
          A:'Text 2 endorses the charcoal dates explicitly. Its mechanism is movement of the bones through dug and refilled pits, not a fault in the charcoal.',
          C:'Far later than Text 2 claims. Firsov reports a range centered on 500 BCE, which still precedes the medieval period by many centuries.',
          D:'The reverse of Text 2’s result. The direct dates and the layer dates differ by roughly seven hundred years, and that gap is the whole argument.'
        },
        tip:'In dating disputes, ask what exactly was dated. An answer that grants the date of a deposit while denying that an object belongs to it is a standard and often correct move.'
      },
      {
        id:'CTA-24', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — the question reframed',
        passage:'<b>Text 1</b><br>Adapted from a report by Sable Kwarteng.<br>The disturbance trial on the Ferrant Plain has settled the question of how far a mining plume travels. Sensor moorings placed on eight radials recorded that eighty-five percent of suspended sediment fell out within forty-eight hours and that nothing measurable crossed four kilometers. Opponents have described a haze spreading across a basin. The instruments describe a footprint with an edge, and a footprint with an edge can be sited, bounded and monitored.<br><br><b>Text 2</b><br>Adapted from a response by Wren Halversen.<br>The moorings were well placed and I accept the four kilometers. The trial disturbed one plot for eleven days. What lives on this plain are animals that recruit onto nodule surfaces over decades, and the 1989 test track a hundred kilometers east still carries about half the fauna of the untouched seabed beside it. Whether the ground comes back is the decision in front of us. A two-day plume is not an answer to it; it is a measurement of something else.',
        stem:'Which choice best describes how Text 2 responds to Text 1?',
        choices:{
          A:'It reports that sediment from the trial was carried considerably farther than four kilometers.',
          B:'It argues that the 1989 track shows the seabed recovering fully within a few decades of disturbance.',
          C:'It grants the extent of the plume and argues that extent is not the measure the decision requires.',
          D:'It holds that mining should proceed because the disturbance it causes is bounded and can be monitored.'
        },
        correct:'C',
        expCorrect:'Halversen accepts the finding without reservation — “the moorings were well placed and I accept the four kilometers” — and then refuses the question it was meant to settle. The animals “recruit onto nodule surfaces over decades,” the 1989 track “still carries about half the fauna” of adjacent seabed, and so “whether the ground comes back is the decision in front of us.” The plume study is “a measurement of something else.”',
        expWrong:{
          A:'Text 2 affirms the four-kilometer limit in its opening sentence. Its complaint is about relevance, not about the distance recorded.',
          B:'The 1989 track is cited because it has NOT recovered: after decades it carries about half the fauna of the untouched seabed. Read as recovery, it would support Text 1 instead.',
          D:'This is Text 1’s conclusion handed to the wrong author. Kwarteng argues that a bounded footprint can be sited and monitored; Halversen is the one saying a bounded footprint settles nothing.'
        },
        tip:'When Text 2 says the study measured “something else,” the answer is a reframing: the data are conceded and the question is replaced. Distinguish that from denying the data.'
      },
      {
        id:'CTA-25', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections — same result, rival explanation',
        passage:'<b>Text 1</b><br>Adapted from a study by Bartolomeu Ivers.<br>Sixty thousand digitized quarter-session files let us count what historians have only estimated: prosecutions for theft in the county tripled between 1740 and 1780. The decades match the enclosure awards almost year for year. When common right is withdrawn from a parish, the households that lived on it take what they can no longer gather, and the court files are where that shows up.<br><br><b>Text 2</b><br>Adapted from a response by Signy Achebe.<br>I have the same files and I count what Ivers counts. Those decades are also when the county went from two paid constables to sixteen, and when associations for prosecution spread through the parishes, covering the fees that had made bringing a case ruinous for a small farmer. In parishes that formed an association, prosecutions jump in the year it forms and in no other. A prosecution series records decisions to prosecute.',
        stem:'Based on the texts, how would Achebe (Text 2) most likely respond to Ivers’s explanation of the rise?',
        choices:{
          A:'By showing that the digitized files omit a large share of the sessions held in the county.',
          B:'By concluding that thefts in the county fell over the four decades covered by the records.',
          C:'By agreeing that the withdrawal of common right was the main driver of the rise after 1740.',
          D:'By accepting the rise in prosecutions while arguing that it tracks the cost of bringing a case.'
        },
        correct:'D',
        expCorrect:'Achebe verifies the count first — “I have the same files and I count what Ivers counts” — and then supplies a rival driver: constables from two to sixteen, and associations that covered “the fees that had made bringing a case ruinous.” Her within-parish test is the sharp end: prosecutions jump “in the year it forms and in no other.” Hence “a prosecution series records decisions to prosecute.”',
        expWrong:{
          A:'Text 2 works from the same sixty thousand files and never suggests they are incomplete. Its argument is about what a complete series of prosecutions represents.',
          B:'Text 2 draws no conclusion about how much theft occurred. Saying that prosecutions track the cost of prosecuting leaves the underlying rate unknown, which is the point.',
          C:'The explanation Text 2 is arguing against. Enclosure is Ivers’s cause, and Achebe’s constables and associations are offered in its place.'
        },
        tip:'Records of prosecutions, diagnoses, or reports measure a system’s activity as much as the behavior behind it. Look for the choice that names the change in the recording apparatus.'
      },
      {
        id:'CTA-26', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — a limit on how far the finding reaches',
        passage:'<b>Text 1</b><br>Adapted from a paper by Hyacinth Obadele.<br>We sequenced seventy-eight sourdough starters from bakeries in nine cities. The yeasts and lactic bacteria sorted not by city, not by the age of the starter, and not by how often it was fed, but by the mill that supplied the flour: starters on the same regional flour clustered together whatever the distance between them. The community in a jar of starter is, in the end, an argument about wheat.<br><br><b>Text 2</b><br>Adapted from a response by Ambrose Nakata.<br>Sample any collection on one morning and Obadele’s clustering is what you get; ours looked the same. Then we swapped the flours. Within nine weeks the communities had reorganized, and not toward the new flour: four bakers each kept two starters on two different flours, and in every case the baker’s two jars ended up more alike than either was to a jar on the same flour in another shop. Flour sets the starting community. The room and the hands decide where it lands.',
        stem:'Based on the texts, how would Nakata (Text 2) most likely respond to Obadele’s conclusion?',
        choices:{
          A:'By accepting the clustering and arguing that it captures a starting point rather than a stable outcome.',
          B:'By showing that starters fed the same flour in different cities never resembled one another at all.',
          C:'By arguing that flour has no measurable effect on the organisms present in a sourdough starter.',
          D:'By concluding that two starters kept by one baker diverge once they are fed different flours.'
        },
        correct:'A',
        expCorrect:'Nakata reproduces the pattern — “sample any collection on one morning and Obadele’s clustering is what you get; ours looked the same” — and then dates it. After the swap, “within nine weeks the communities had reorganized,” each baker’s two jars ending “more alike than either was to a jar on the same flour in another shop.” His summary keeps both halves: “flour sets the starting community. The room and the hands decide where it lands.”',
        expWrong:{
          B:'Text 2 says the opposite in its first sentence: its own snapshot reproduced Obadele’s clustering. The swap experiment is only interesting because the initial pattern is real.',
          C:'Too absolute. Nakata grants flour the founding role — it “sets the starting community” — and disputes only that the effect persists.',
          D:'The swap produced convergence, not divergence: the two jars of one baker became more alike despite being on different flours. This reverses the single result the argument rests on.'
        },
        tip:'A pattern measured on one day can be a transient. When Text 2 runs an experiment over weeks, check whether it is denying the pattern or dating it.'
      },
      {
        id:'CTA-27', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections — support from a second field',
        passage:'<b>Text 1</b><br>Adapted from a report by Ozren Falkenrath.<br>Sensors on thirty blocks in Kestrel Ward recorded air temperature every minute through August. Blocks with roughly forty percent tree canopy averaged two point one degrees cooler at three in the afternoon than blocks that had reflective roofs and no trees. The reflective roof is the cheaper intervention and the city has been buying it by default. Two degrees is the difference the canopy buys, and it is worth what it costs.<br><br><b>Text 2</b><br>Adapted from a response by Junie Abarca.<br>I study heat strain in people, not streets, and air temperature is a weak index of it. What loads a body on a sidewalk is radiation, and a reflective roof sends a share of the shortwave it rejects back down onto the street. Under a canopy of the density Falkenrath describes, our sensors read mean radiant temperature twelve to seventeen degrees lower. His two degrees is real. It is also the smallest part of what he is measuring.',
        stem:'Which choice best describes how Text 2 relates to Text 1?',
        choices:{
          A:'It argues that reflective roofs cool people on the sidewalk more effectively than street trees do.',
          B:'It endorses Text 1’s recommendation and argues that Text 1’s measure understates the case for trees.',
          C:'It disputes Text 1’s readings on the ground that air temperature was recorded at the wrong hour.',
          D:'It accepts Text 1’s figures and concludes that the gap between the two treatments is negligible.'
        },
        correct:'B',
        expCorrect:'Abarca agrees with the recommendation and enlarges it. She calls the two degrees “real,” then argues from her own field that “air temperature is a weak index” of heat strain, that a reflective roof sends shortwave “back down onto the street,” and that under canopy her sensors read mean radiant temperature “twelve to seventeen degrees lower.” Her last line makes the relation explicit: the two degrees is “the smallest part of what he is measuring.”',
        expWrong:{
          A:'The reverse of Text 2’s radiant readings, which favor the canopy by twelve to seventeen degrees and describe the reflective roof as adding load at street level.',
          C:'Text 2 never questions when or how the air temperature was recorded; it questions whether air temperature is the right quantity, which leaves the timing irrelevant.',
          D:'Text 2 argues that the true gap is much larger than two degrees once radiation is counted. “Negligible” inverts its conclusion.'
        },
        tip:'Some second texts agree with the recommendation and reject the metric behind it. Ask separately: does Text 2 want the same action, and does it accept the same measure?'
      },
      {
        id:'CTA-28', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — the question reframed',
        passage:'<b>Text 1</b><br>Adapted from a paper by Iolanthe Varga.<br>The Harrow transit survey now lists three thousand nine hundred confirmed planets, and sixty-one percent of them complete an orbit in under fifty days. Systems packed tightly against their star are not exotic; they are the ordinary result of planet formation, and the arrangement we happen to live in, with nothing inside the orbit of Mercury, is the configuration that needs explaining.<br><br><b>Text 2</b><br>Adapted from a response by Kwabena Solheim.<br>Every figure in the catalog is right, and I helped assemble it. A transit is registered only when a planet crosses the disk three times inside a four-year baseline, so nothing beyond roughly five hundred days can enter the sample at all, and the chance of the orbit being edge-on to us falls as the orbit widens. Sixty-one percent is a fact about what this method can detect. Turning it into a fact about planets requires corrections that depend on the model you already believe.',
        stem:'Which choice best describes how Text 2 responds to Text 1?',
        choices:{
          A:'It argues that the survey missed short-period planets that a longer baseline would have detected.',
          B:'It concludes that compact systems are in fact rarer than systems resembling our own.',
          C:'It accepts the catalog as reported and argues that the survey cannot settle the question Text 1 puts to it.',
          D:'It maintains that the geometric chance of observing a transit increases as the orbit grows wider.'
        },
        correct:'C',
        expCorrect:'Solheim endorses the catalog — “every figure in the catalog is right, and I helped assemble it” — and then separates two claims. Because a planet must cross three times in four years and the edge-on chance “falls as the orbit widens,” the sixty-one percent “is a fact about what this method can detect,” and converting it into a fact about planets “requires corrections that depend on the model you already believe.”',
        expWrong:{
          A:'The bias runs the other way. Short periods are the easy case: three crossings fit inside the baseline and the geometry is favorable. What the survey misses is long-period planets.',
          B:'Text 2 declines to say which arrangement is common. Stating that compact systems are rarer would be the same error as Text 1, made in the opposite direction.',
          D:'Text 2 says the chance “falls as the orbit widens.” Reversing it would remove the bias Solheim is pointing to and leave the catalog representative after all.'
        },
        tip:'With any catalog, ask what could never have entered it. If the missing cases are systematic, the share inside the catalog describes the instrument, not the population.'
      },
      {
        id:'CTA-29', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections — a limit on how far the finding reaches',
        passage:'<b>Text 1</b><br>Adapted from a report by Solange Etxeberria.<br>The Vorsen grave holds a young canid laid against the shoulder of an adult human, both interred at once, at a level dated to about fourteen thousand years ago. The animal’s foreleg carries a fracture that healed badly and would have kept it from hunting for months; something fed it through that season. Whatever we call the animals of this period, this one lived inside a household.<br><br><b>Text 2</b><br>Adapted from a response by Emeric Tannhaus.<br>The grave is as Etxeberria describes it and the healed fracture means what she says it means. One grave, though, tells us about one animal and the people who kept it. Domestication is a population becoming reproductively separate from wolves, and that leaves a signature in the skulls and jaws of many individuals. The thirty-one other canid elements from the same levels at Vorsen all fall inside the wolf range. A tamed animal is not yet a domesticated population.',
        stem:'Based on the texts, how would Tannhaus (Text 2) most likely respond to the conclusion in Text 1?',
        choices:{
          A:'By accepting the burial and the care it implies while denying that one animal shows a population change.',
          B:'By questioning whether the fracture on the animal’s foreleg could have healed without human care.',
          C:'By dating the grave considerably later than the fourteen thousand years reported in Text 1.',
          D:'By concluding that the canid buried at Vorsen belonged to a fully domesticated population.'
        },
        correct:'A',
        expCorrect:'Tannhaus concedes the grave and its meaning — “the healed fracture means what she says it means” — and then distinguishes two claims. Domestication is “a population becoming reproductively separate from wolves” and shows up in “the skulls and jaws of many individuals,” whereas the thirty-one other canid elements at Vorsen “all fall inside the wolf range.” Hence: “a tamed animal is not yet a domesticated population.”',
        expWrong:{
          B:'Text 2 accepts the inference from the fracture in its opening sentence; it is the evidence of care that lets him grant a relationship between animal and household.',
          C:'No redating occurs. Text 2 works from the same levels at Vorsen and cites thirty-one other elements found in them.',
          D:'The opposite of Text 2’s argument, which is that a single tamed animal does not demonstrate a domesticated population.'
        },
        tip:'Individual cases and population processes are different claims. If Text 2 counts many specimens against Text 1’s single one, the answer turns on that distinction.'
      },
      {
        id:'CTA-30', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — the question reframed',
        passage:'<b>Text 1</b><br>Adapted from a study by Oriana Petrakis.<br>Otoliths grow a band a day, and the edge of the band records the season a fish died. Of four hundred salmon otoliths from the Cawdor weir deposit, eighty-nine percent end in late summer. The weir was therefore worked on one run a year, and the settlement beside it was a seasonal camp rather than a place where anyone spent the winter.<br><br><b>Text 2</b><br>Adapted from a response by Tobias Nwachukwu.<br>Petrakis reads the edges correctly; I would not change one of her four hundred determinations. The deposit she sampled is the midden beside the drying racks, where the catch that was split and dried was processed in bulk. Fish eaten fresh in other months leave scattered bone that no heap preserves. The midden records which run was worth storing. Beneath it lie two hearths, and both are full of a rush that is cut only in spring.',
        stem:'Which choice best describes how Text 2 responds to Text 1?',
        choices:{
          A:'It argues that the otolith method cannot establish the season in which a fish died.',
          B:'It concludes that the weir at Cawdor was worked continuously through every season.',
          C:'It shows that most of the fish in the deposit died in seasons other than late summer.',
          D:'It accepts the season-of-death readings and argues the deposit records processing, not occupation.'
        },
        correct:'D',
        expCorrect:'Nwachukwu accepts every determination — “I would not change one of her four hundred” — and then identifies what the deposit is. It is “the midden beside the drying racks,” where the bulk-preserved catch was processed, while fish eaten fresh “leave scattered bone that no heap preserves.” So it “records which run was worth storing,” and the hearths beneath it, full of a spring-cut rush, point to use in another season.',
        expWrong:{
          A:'Text 2 endorses the readings in its first sentence. Its argument concerns which fish ended up in that heap, not whether an otolith records a season.',
          B:'More than Text 2 claims. The spring rush in the hearths shows presence outside late summer; it does not establish year-round work at the weir.',
          C:'Text 2 accepts that eighty-nine percent of the sampled otoliths end in late summer. Its point is that the sample is drawn from a deposit that only preserved fish.'
        },
        tip:'Ask how the sample came to exist. When Text 2 shows the deposit preserves only one kind of activity, the finding is about the deposit rather than about the people.'
      }
    ]
  });
})();
