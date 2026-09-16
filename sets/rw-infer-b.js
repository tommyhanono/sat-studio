/* SAT Studio question set — Reading & Writing: Inferences II (IFB-01 to IFB-34) */
/* Segunda tanda de la destreza oficial "Inferences" (Information and Ideas).
   Misma forma que rw-infer-a: pasaje corto que termina en blanco + "Which choice
   most logically completes the text?". Campos NUEVOS para no pisar el set A:
   psicologia y ciencia cognitiva, epidemiologia y salud publica, astronomia y
   ciencia planetaria, ingenieria y materiales, arqueologia y paleografia,
   ecologia de restauracion, historia de la tecnologia, politica comparada,
   musicologia y ciencia del deporte.
   Los tres distractores de cada pregunta son razonables en el mundo real pero el
   texto no los sostiene: uno va demasiado lejos (dice "todos"/"nunca" donde el
   texto da un caso), otro invierte la direccion de la relacion, y el tercero es
   verdadero segun el texto pero no cierra la logica de la ultima oracion. */
(function(){
  window.SAT_SETS.push({
    id: 'rw-infer-b',
    title: 'Inferences — Logical Completion II',
    section: 'rw',
    level: 'Media',
    description: 'Thirty-four more Information and Ideas inference items across psychology, epidemiology, astronomy, engineering, archaeology, ecology, technology, politics, music, and sport: each passage ends in a blank that only one completion follows from.',
    minutes: 40,
    questions: [

      /* ============ WARM-UP: una regla y un caso (IFB-01 a IFB-10) ============ */
      {
        id:'IFB-01', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a stated cause applied to a case that lacks it)',
        passage:"Psychologist Nadia Brummel studies why recalling material from memory during study beats simply rereading it. The advantage, she argues, comes from the effort of retrieval: a student who strains to produce an answer before checking the page strengthens the memory in the act of straining. Rereading demands no such effort, because the answer is already on the page. One study group in Brummel’s experiment reread a chapter four times and never once tried to recall it. On Brummel’s account, that group ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'read the chapter four times without attempting recall.',
          B:'gained nothing from the effort that strengthens memory.',
          C:'remembered the chapter well, which made retrieval effortful.',
          D:'could not remember anything it had not tried to recall.'
        },
        correct:'B',
        expCorrect:'Brummel locates the benefit in one place: the effort of retrieval. She then says rereading demands no such effort, since the answer is sitting on the page. The group reread four times and never attempted recall, so nothing in their study session supplied the effort that does the strengthening — on her own account, they gained nothing from it.',
        expWrong:{
          A:'True according to the text — it is the description of the group you were just given. Repeating what the group did is not saying what Brummel’s account predicts about it, which is where the sentence is headed.',
          C:'This turns the account around. Brummel has the effort producing the strong memory; this has the strong memory producing the effort.',
          D:'Far past the evidence. Brummel compares two ways of studying; she never claims that memory is impossible without retrieval practice.'
        },
        tip:'A completion has to be forced by lines already on the page. Find the cause the passage names, check whether the case in front of you has it, and say only what follows — not what sounds true about memory in general.'
      },
      {
        id:'IFB-02', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (what an antibody test can and cannot report)',
        passage:"An antibody test does not look for a virus; it looks for the proteins an immune system builds after meeting one, and those proteins take about two weeks to appear. Public health officer Ines Maroto screened four hundred residents of a coastal town in March and found antibodies in ninety of them. None of the ninety had been tested for the virus itself. Maroto’s screening therefore establishes that those ninety residents ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'carried proteins the virus builds after meeting an immune system.',
          B:'were among the four hundred residents screened in March.',
          C:'are now protected from any further infection by the virus.',
          D:'had met the virus at least two weeks before the screening.'
        },
        correct:'D',
        expCorrect:'The test reports antibodies, and the text says antibodies take about two weeks to appear after the immune system meets a virus. Ninety residents had them in March. Working the timing backwards, that meeting had to occur at least two weeks before the March screening — which is precisely what a positive antibody result establishes, and all of it.',
        expWrong:{
          A:'The passage assigns the two roles the other way around: the immune system builds the proteins after meeting the virus. A virus does not manufacture the antibodies raised against it.',
          B:'True according to the text, and it is how the ninety were found. Naming the sample does not say what having antibodies implies, which is what the screening is said to establish.',
          C:'Protection is a fact about immunity that the passage never supplies. The text says what antibodies indicate about the past, not what they guarantee about the future.'
        },
        tip:'Ask what the instrument actually measures. A test that detects the body’s response to something detects that the meeting happened; turning that into a claim about the present, or about the future, needs information the passage has not given you.'
      },
      {
        id:'IFB-03', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a repeating interval longer than the record)',
        passage:"A comet’s orbital period is the time it takes to complete one circuit of the Sun, and a comet can be seen from Earth only when that circuit brings it near. Astronomer Piotr Vandelin calculates the period of comet C/Herrig at three hundred forty years. The observatory that reported the comet in 2019 keeps an unbroken set of sky records, but those records begin only in 1874. It follows that the observatory’s archive ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'cannot contain an earlier sighting of this same comet.',
          B:'began in 1874 and has not been interrupted since then.',
          C:'would show the comet more often the longer its period.',
          D:'holds no comet observed more than once in its history.'
        },
        correct:'A',
        expCorrect:'The comet comes into view once every three hundred forty years, and the archive reaches back only to 1874 — about a century and a half. Two returns cannot both fall inside a window shorter than the period, so the 2019 appearance is the only one this archive could hold, and an earlier sighting of the same comet cannot be in it.',
        expWrong:{
          B:'True according to the text, and it is the fact the conclusion rests on. Restating how far back the record goes is not the same as saying what that span rules out.',
          C:'Backwards. A longer period means longer gaps between appearances, so a comet with a long period shows up in a fixed record less often, not more.',
          D:'Too broad. The reasoning applies to a comet whose period exceeds the archive’s span; a comet returning every few years could appear in it many times.'
        },
        tip:'When a passage gives you a repeating interval and the length of a record, compare the two. If the interval is longer than the record, at most one event of that kind can appear in it — and that is the whole of what you may conclude.'
      },
      {
        id:'IFB-04', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a trigger that the described setting never supplies)',
        passage:"Self-healing concrete carries dormant bacteria and a mineral food source mixed into the cement. When a crack opens and lets water in, the water wakes the bacteria, which feed and deposit calcite until the crack is sealed. Without water reaching them, the bacteria stay dormant and no calcite forms. Engineer Rosalyn Adeyemi is considering the material for a sealed equipment vault that is kept permanently dry, and where cracks are expected. Adeyemi should conclude that in that vault the concrete ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'contains bacteria that lie dormant until water reaches them.',
          B:'seals cracks more reliably the drier the vault is kept.',
          C:'would not seal the cracks that are expected to open.',
          D:'is a poor choice for any structure built underground.'
        },
        correct:'C',
        expCorrect:'Sealing depends on one trigger: water reaching the bacteria. The text says that without it the bacteria stay dormant and no calcite forms. The vault is kept permanently dry, so the trigger never occurs. Cracks will open, as expected, and nothing in the material will be awake to close them.',
        expWrong:{
          A:'True according to the text — it is the mechanism the paragraph opens with. Describing how the concrete works is not saying what it does in a vault where the trigger is absent.',
          B:'Backwards. Water is what activates the healing, so a drier vault makes sealing less likely rather than more.',
          D:'Underground is not the issue, and the passage never raises it. Wet ground would supply exactly the water this concrete needs.'
        },
        tip:'Find the condition the passage names as necessary, then check the described situation for it. If the condition is absent, the outcome it enables is absent too — and a verdict about other situations goes past the text.'
      },
      {
        id:'IFB-05', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (an individual habit found in two places)',
        passage:"Paleographers identify a scribe by the shapes a hand repeats without thinking: the slant of an ascender, the way a final letter curls, the angle at which the pen is cut. These habits are as individual as handwriting is today, and a trained reader can match two pages written by the same person. Examining a psalter in Uppsala and a chronicle in Ghent, paleographer Marek Sedlacek found the same distinctive habits running through both. The finding indicates that the two manuscripts ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'gave the scribe the habits his hand repeats.',
          B:'were written out by one and the same scribe.',
          C:'contain letter forms a trained reader can compare.',
          D:'reveal a habit shared by every scribe of the period.'
        },
        correct:'B',
        expCorrect:'The passage says these habits are individual, like handwriting, and that a trained reader can use them to match pages written by the same person. Sedlacek found the same habits in both books. An individual marker plus a match is exactly the condition the text says identifies one person, so one scribe wrote both.',
        expWrong:{
          A:'The passage runs the other way: the scribe carries the habits and leaves them on whatever he copies. A page does not hand a habit to the person writing it.',
          C:'True according to the text, and it is why the comparison was possible at all. Saying the pages can be compared stops short of the result the comparison produced.',
          D:'One match cannot speak for every scribe of the period. The text reports what Sedlacek found in two manuscripts, not a fact about all the rest.'
        },
        tip:'A completion is only as strong as the rule the passage states. Here the rule is that the habits identify an individual, so the match identifies an individual — not something about everyone in the profession.'
      },
      {
        id:'IFB-06', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (carry across the exact outcome the text attaches)',
        passage:"Oak seedlings draw much of their phosphorus through mycorrhizal fungi that sheathe their roots, and those fungi live in the upper layer of forest soil. A seedling planted in ground where they are absent takes up phosphorus far more slowly and grows accordingly. Restoration ecologist Bram Okonjo is replanting oaks on a former quarry floor, where the topsoil was scraped away decades ago and never returned. Unless the fungi are reintroduced, Okonjo can expect the seedlings to ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'take up phosphorus slowly and grow at that pace.',
          B:'draw their phosphorus through fungi sheathing their roots.',
          C:'supply the quarry floor with the fungi the soil lacks.',
          D:'die wherever a forest soil has ever been disturbed.'
        },
        correct:'A',
        expCorrect:'The text ties phosphorus uptake to fungi that live in the upper soil layer, and says a seedling without them takes up phosphorus far more slowly and grows accordingly. The quarry floor lost its topsoil decades ago, so the fungi are not there, and with no reintroduction the seedlings sit in exactly the case the passage describes.',
        expWrong:{
          B:'True according to the text, and it is the relationship the paragraph opens with. It describes a healthy oak, not what happens to one planted where the fungi are gone.',
          C:'The passage has the fungi feeding the seedling, not the seedling seeding the ground with fungi. Reversing the two makes the problem solve itself, which is why it is tempting.',
          D:'Far past what the text says. Slow growth is not death, and one stripped quarry floor is not every disturbed forest soil.'
        },
        tip:'Notice the exact outcome the passage attaches to the missing condition — slower growth, not failure — and carry it across unchanged. Upgrading it to something more dramatic is the commonest way a completion stops following from the text.'
      },
      {
        id:'IFB-07', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (an absence produced by the instrument)',
        passage:"The earliest photographic plates needed an exposure of several minutes, and anything that moved during those minutes left no trace: only what held still was recorded. Historian of technology Colette Ravensbourne studies a set of 1839 views of a busy market square, all of which show empty pavement in front of the stalls. Ravensbourne argues that the emptiness is a fact about the process rather than about the square, and that the pavement therefore ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'proves that no early photograph ever recorded a person.',
          B:'was recorded by plates needing several minutes of exposure.',
          C:'emptied out because the photographer was working there.',
          D:'may well have been crowded while the plate was exposed.'
        },
        correct:'D',
        expCorrect:'The passage gives the rule — during a multi-minute exposure only what holds still is recorded — and Ravensbourne reads the blank pavement as a product of that rule rather than a report on the square. Shoppers crossing a market do not hold still for minutes, so their absence from the plate is what a crowd would look like, and the pavement may well have been full.',
        expWrong:{
          A:'Much too strong. Anyone who stayed still for the whole exposure would be recorded, as the passage says when it notes that still things register.',
          B:'True according to the text; it is the technical fact the argument starts from. Naming the exposure time is not the conclusion Ravensbourne draws from it about the pavement.',
          C:'This makes the camera empty the square, when the text says the square may have been full and the plate simply missed it. The people are missing from the image, not from the place.'
        },
        tip:'When a passage explains why evidence looks the way it does, the safe completion is about the evidence, not about the world behind it. Absence recorded by an instrument that cannot record a thing is not absence of the thing.'
      },
      {
        id:'IFB-08', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a threshold no party in the case reaches)',
        passage:"In the Republic of Marenta, a party may form a government by itself only if it holds more than half of the three hundred seats in the National Assembly. If no party reaches that mark, a government can be seated only by an agreement among two or more parties. In the most recent election the largest party won one hundred twelve seats and the second largest won ninety-four. Political scientist Ola Fennimore concludes that Marenta’s next government ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'was chosen by an Assembly holding three hundred seats.',
          B:'could be formed alone by the largest of the parties.',
          C:'will have to rest on an agreement among parties.',
          D:'is barred because no party won half the seats.'
        },
        correct:'C',
        expCorrect:'Half of three hundred is one hundred fifty, and a party needs more than that to govern alone. The largest has one hundred twelve and the second ninety-four, so nobody clears the bar. The text then leaves exactly one route open: an agreement among two or more parties. Check: 112 is less than 151 ✓.',
        expWrong:{
          A:'True according to the text — the Assembly does have three hundred seats. The size of the chamber is the figure the threshold is computed from, not the conclusion about how a government gets seated.',
          B:'This inverts the rule. One hundred twelve of three hundred is well under half, which is precisely the case in which a party may not govern by itself.',
          D:'Too far. The rule does not shut the door; it says a government may still be seated, only by agreement rather than by one party alone.'
        },
        tip:'Do the arithmetic the rule asks for before you read the choices. Once you know which side of the threshold the numbers fall on, the passage usually names the consequence itself, and your job is only to carry it across.'
      },
      {
        id:'IFB-09', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a part that asks for notes the instrument lacks)',
        passage:"The Baroque recorder in F cannot sound a note below the F above middle C; the instrument has no hole and no length of tube for anything lower. Musicologist Henrike Dahlberg has been studying an anonymous sonata of 1704 whose title page names no instrument and whose top line repeatedly descends a fourth below that F. Dahlberg observes that a player can take up only what the page allows, and concludes that this sonata’s top line ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'descends a fourth below the F above middle C.',
          B:'was not written for the Baroque recorder in F.',
          C:'lies within what the recorder in F can sound.',
          D:'shows that no 1704 sonata names its instrument.'
        },
        correct:'B',
        expCorrect:'The recorder in F has no way to produce anything under the F above middle C. The sonata’s top line goes a fourth under that note, and does so repeatedly. A part that keeps asking for notes an instrument cannot make is a part that instrument cannot play, so the line was written for something else.',
        expWrong:{
          A:'True according to the text, and it is the measurement the argument uses. Repeating where the line goes does not say what its going there rules out.',
          C:'Backwards. The passage places those notes below the recorder’s floor, which is the opposite of within its range.',
          D:'A missing attribution on one title page says nothing about every sonata of 1704, and the text surveys no others.'
        },
        tip:'A limit stated as absolute — cannot sound, never exceeds, only occurs when — is the hinge of the item. Match the case against the limit and stop at the consequence; the passage rarely supports a claim beyond it.'
      },
      {
        id:'IFB-10', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a timeline shorter than the change requires)',
        passage:"Acclimatizing to heat takes roughly ten to fourteen days of daily training in it. Over that period an athlete’s sweat rate rises and the salt lost in sweat falls, which together let the body shed heat while holding on to fluid; neither change appears in the first few days. Sports scientist Umberto Cardiel is advising a marathon runner who will fly from a cold city to a hot one two days before her race. Cardiel should expect that on race day the runner ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'will not yet have gained either of those changes.',
          B:'will lose less salt in her sweat than a local runner.',
          C:'will arrive in the hot city two days before the race.',
          D:'cannot compete safely in any climate but her own.'
        },
        correct:'A',
        expCorrect:'The text puts acclimatization at ten to fourteen days of daily training in the heat and says neither the higher sweat rate nor the lower salt loss appears in the first few days. The runner will have been in the heat for two days, which falls inside the window where the passage says nothing has changed yet.',
        expWrong:{
          B:'Backwards. Losing less salt is the acclimatized state, and she will have had two days rather than two weeks; an athlete who lives in the heat is the one further along.',
          C:'True according to the text — it is the travel plan you were just given. Restating when she lands does not say what her body will have done by race day.',
          D:'The passage describes a delay, not a prohibition, and says nothing about safety or about every climate.'
        },
        tip:'When a passage gives a timeline for a change and then a case with less time than that, the inference is that the change has not happened yet. Resist turning "not yet" into "never" or into a warning the text never issues.'
      },

      /* ============ TEST LEVEL: dos hechos que hay que juntar (IFB-11 a IFB-24) ============ */
      {
        id:'IFB-11', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a measure with no room left to record a gain)',
        passage:"A test shows an improvement only if there is room on it to improve. Cognitive psychologist Solange Meriwether gave two hundred adults a vocabulary test on which the median score was thirty-nine of forty, then trained half of them for six weeks and gave the same test again. The trained group’s median stayed at thirty-nine. Meriwether points out that forty is the most the test can award, and cautions that the flat result ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'came from two hundred adults tested twice on one test.',
          B:'shows that a high median makes improvement easier to detect.',
          C:'may reflect the test’s ceiling rather than the training.',
          D:'shows the training left every trained adult unchanged.'
        },
        correct:'C',
        expCorrect:'Two facts do the work. The most the test can award is forty, and the median was already thirty-nine before training. That leaves one point of room, so even a real gain would have nowhere to register. A flat median is what a ceiling produces whether or not the training worked, which is why Meriwether says the result may be about the instrument.',
        expWrong:{
          A:'True according to the text, and it is the design of the study. Describing who was tested is not the caution Meriwether is raising about what the flat median can mean.',
          B:'Backwards. A median one point under the maximum leaves almost no room to record a gain, so it makes improvement harder to detect, not easier.',
          D:'The result cannot rule improvement out any more than it can show it. With one point of room, a group that improved and a group that did not would return the same median.'
        },
        tip:'Before reading a null result as "no effect", check whether the measure could have shown an effect at all. A score already at the top of the scale cannot rise, so the flat line is evidence about the ruler as much as about the thing measured.'
      },
      {
        id:'IFB-12', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a count that grew more slowly than the searching)',
        passage:"A reported case is an infection that someone tested for and found. In the province of Kelsar, laboratories ran four thousand tests in January and forty thousand in February, after a new clinic network opened. Reported cases rose from three hundred to nine hundred over those two months, while the share of tests returning a positive result fell from 7.5 percent to 2.25 percent. Epidemiologist Nuria Baptista warns that the rise in reported cases ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'proves infections fell by two thirds across the province.',
          B:'need not mean that infections became more common.',
          C:'followed a tenfold increase in the tests being run.',
          D:'is larger than the increase in testing that produced it.'
        },
        correct:'B',
        expCorrect:'Tests went from four thousand to forty thousand, ten times as many, while reported cases went from three hundred to nine hundred, three times as many. Because a case is counted only when someone tests, finding more cases is exactly what ten times the testing produces even if infections held steady. Check: 300/4,000 = 7.5 % and 900/40,000 = 2.25 % ✓.',
        expWrong:{
          A:'Too far in the other direction. A falling positivity rate is consistent with steady or even rising infections once the net widens; it does not count how many infections there are.',
          C:'True according to the text, and it is the fact that generates the warning. Stating that testing rose tenfold is not yet saying what that does to the meaning of the case count.',
          D:'The arithmetic runs the other way: cases tripled while testing rose tenfold, so the increase in testing is the larger of the two.'
        },
        tip:'Whenever a count depends on how hard someone looked, compare the count with the looking. A number that grows more slowly than the effort behind it is weak evidence that the underlying thing grew at all.'
      },
      {
        id:'IFB-13', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (what a detection method can never include)',
        passage:"The transit method finds a planet by watching a star dim as the planet crosses in front of it, which can happen only if the planet’s orbit is seen nearly edge-on from Earth. Orbits are tilted every which way, and most are not aligned that closely with our line of sight. Astronomer Baltasar Iquique notes that his catalogue of six hundred transiting planets is the largest of its kind, and adds that the catalogue therefore ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'includes planets whose orbits are tilted away from us.',
          B:'contains every planet a telescope will ever detect.',
          C:'was built by watching six hundred stars dim on schedule.',
          D:'omits most of the planets orbiting the stars it covers.'
        },
        correct:'D',
        expCorrect:'A transit is visible only from a nearly edge-on line of sight, and the text says most orbits are not aligned that way. Planets on those tilted orbits never produce a dip, so they cannot enter a catalogue built from dips. The catalogue is the largest of its kind and still misses most of what is there.',
        expWrong:{
          A:'The opposite of what the method allows. A tilted orbit never carries the planet across the star from our vantage point, so it produces no dimming and no entry.',
          B:'Far past the text. The passage limits what this one technique can see, and other techniques are not ruled out by anything said here.',
          C:'True according to the text; it is how the catalogue was assembled. Describing the method is the premise of Iquique’s point rather than the conclusion he draws from it.'
        },
        tip:'When a method can detect only things with a particular property, the catalogue it produces is a catalogue of that property. Its size says how much was found, never how much exists.'
      },
      {
        id:'IFB-14', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a fixed total and the claims already on it)',
        passage:"A footbridge is rated for a total load of twenty tonnes: everything the structure carries counts against that figure, whether it is fixed in place or walking across. Engineer Delphine Oyarzun is redesigning a span whose deck, railings, and lighting already weigh fourteen tonnes, and she has been asked to add a roof that would weigh four tonnes more. Since the rating cannot be raised, the change would leave the bridge ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'with two tonnes of its rating left for pedestrians.',
          B:'carrying a deck, railings, and lighting of fourteen tonnes.',
          C:'able to hold more walkers than it did before the roof.',
          D:'unable to carry any pedestrian load once roofed.'
        },
        correct:'A',
        expCorrect:'Everything the bridge carries counts against twenty tonnes. Fixed weight is fourteen now, and the roof would take it to eighteen. Twenty minus eighteen leaves two tonnes for the people crossing, where six were available before. Check: 14 + 4 = 18 and 20 − 18 = 2 ✓.',
        expWrong:{
          B:'True according to the text and the starting figure of the calculation. The weight already in place is what you subtract from, not the answer to what remains.',
          C:'Backwards. Weight added to the structure comes out of the same fixed total, so it leaves room for fewer walkers, not more.',
          D:'Two tonnes is not zero. The roof cuts the allowance sharply, and the passage gives no reason to round that down to nothing.'
        },
        tip:'When a passage fixes a total and lists what draws on it, the inference is arithmetic: add the claims and subtract. Watch for choices that quietly treat a smaller remainder as no remainder at all.'
      },
      {
        id:'IFB-15', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a contrast the preservation rule already predicts)',
        passage:"Wood survives in the ground only where conditions block decay: permanent waterlogging, deep freezing, extreme dryness. In ordinary damp soil it is gone within a century or two. Archaeologist Ivo Marchetti excavated two settlements of the same culture and date, one beside a peat bog and one on a well-drained hillside. The bog site produced dozens of wooden handles, bowls, and stakes; the hillside site produced none. Marchetti argues that the difference between the two inventories ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'follows from wood surviving best in ordinary damp soil.',
          B:'shows that hillside people worked stone instead of wood.',
          C:'may record conditions of burial rather than of daily life.',
          D:'appears at two settlements of the same culture and date.'
        },
        correct:'C',
        expCorrect:'The text says wood survives only where decay is blocked and disappears from ordinary damp soil within a century or two. One site sat in a bog, the other on well-drained ground. That alone predicts wooden objects at the first and none at the second, whatever the two communities actually owned, so the contrast is evidence about the ground.',
        expWrong:{
          A:'Reversed. Ordinary damp soil is where the passage says wood is lost; the bog is the exception that preserves it.',
          B:'Nothing in the passage reports the stone tools at either site. The hillside’s empty wood inventory is already explained by decay, so it supports no claim about what those people used instead.',
          D:'True according to the text, and it is what makes the comparison worth making. Noting that the sites match in culture and date does not say what their different inventories mean.'
        },
        tip:'When evidence survives only under special conditions, compare the conditions before comparing the evidence. A gap that the preservation rule already predicts cannot also be read as a discovery about behaviour.'
      },
      {
        id:'IFB-16', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (one of two supplies is cut, the other is not)',
        passage:"Algal blooms in Lake Vennig are driven by phosphorus. Farm runoff supplied most of it until new rules cut that inflow to almost nothing in 2019. But phosphorus that settled into the lake bed over forty years dissolves back into the water whenever the deep layers run out of oxygen, as they do each summer, and no rule reaches that store. Limnologist Aurore Bekele therefore expects that in the summers just after 2019 the blooms ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'were driven by runoff from the farms around the lake.',
          B:'will stop now that the inflow from the farms is cut.',
          C:'will release phosphorus into the lake bed each summer.',
          D:'will continue, fed by the phosphorus already in the bed.'
        },
        correct:'D',
        expCorrect:'The passage names two supplies of phosphorus, not one. The rules closed the farm inflow in 2019; the second supply, forty years of phosphorus in the lake bed, returns to the water every summer when the deep layers lose oxygen, and no rule touches it. A driver still operating keeps producing its effect.',
        expWrong:{
          A:'True according to the text about the years before 2019. The question is what happens once the runoff stops, and the old source cannot answer it.',
          B:'This treats runoff as the whole story, but the passage adds a second supply that survives the rule change — which is precisely why Bekele expects what she does.',
          C:'The direction is inverted. The bed releases phosphorus into the water in summer; the blooms are what the phosphorus feeds, not what fills the sediment.'
        },
        tip:'List every cause the passage names before predicting a result. Cutting one of two supplies changes the total, but the outcome keeps occurring as long as any supply the text describes is still running.'
      },
      {
        id:'IFB-17', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a physical limit that already explains the pattern)',
        passage:"The first electric lighting systems used direct current, which loses so much of its voltage over distance that a station could serve customers only within about a mile of itself. Building a station was worth the cost only where enough paying customers sat inside that circle. Historian Priya Vanterpool has mapped the earliest lit districts in eleven cities and finds them all in dense commercial cores. Given how direct current behaves, that pattern ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'shows current travelling farther where customers were denser.',
          B:'is what the reach of a station would by itself produce.',
          C:'appears in eleven cities that Vanterpool has mapped.',
          D:'shows that dense districts demanded light more than others did.'
        },
        correct:'B',
        expCorrect:'Two constraints meet here. A direct-current station reaches about a mile, and a station pays only if enough customers sit inside that circle. The one place where both hold is a district with many customers packed into a small radius — a dense commercial core. The map matches what the technology by itself would predict.',
        expWrong:{
          A:'Backwards. How far current travels is set by the losses in the wire; crowding customers together does not extend the reach, it only fills the circle.',
          C:'True according to the text; it is the evidence being explained. Counting the cities does not say why the lit districts sit where they do.',
          D:'Demand is a motive the passage never measures. The physical reach of the station already accounts for the pattern, so the map cannot show that those districts wanted light more.'
        },
        tip:'When a technology carries a hard physical limit, ask what geography that limit favours before reaching for motives. If the constraint predicts the pattern on its own, the pattern is not evidence for a second explanation.'
      },
      {
        id:'IFB-18', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (where a rule sends the votes it discards)',
        passage:"In Ostrania, seats in the legislature are handed out in proportion to each party’s national vote, but only among parties that clear five percent; a party below that line receives nothing, and its share is redistributed among the parties above it. In the last election three parties cleared the line and four did not, the largest of the four taking 4.6 percent. Political scientist Hedda Kovalenko notes that the three qualifying parties ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'hold more seats than their vote shares alone would give.',
          B:'each drew more than five percent of the national vote.',
          C:'won every vote that was cast in the last election.',
          D:'gave up part of their seats to the smaller parties.'
        },
        correct:'A',
        expCorrect:'The rule sends the votes of parties under five percent to the parties above it. Four parties fell short, one of them with 4.6 percent, so a real block of votes was redistributed to the three that qualified. Each of the three therefore ends with a seat share larger than its own vote share, which is what redistribution means.',
        expWrong:{
          B:'True according to the text — clearing the line is what made them qualifying parties. The definition of the group is not the consequence Kovalenko draws about its seats.',
          C:'Four parties took votes and won nothing, and one of them alone took 4.6 percent. Votes were plainly cast for parties that hold no seats.',
          D:'The transfer runs the other way. Parties under the line lose their share to the parties above it, not the reverse.'
        },
        tip:'Follow where a rule sends the thing being counted. If votes below a cutoff are reassigned rather than discarded, the parties above the cutoff must end up over-represented, and that is the inference the text guarantees.'
      },
      {
        id:'IFB-19', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a record known to omit part of the practice)',
        passage:"In the French harpsichord repertory of the early eighteenth century, players were expected to add trills, slides, and other ornaments that the notation did not spell out; treatises of the period complain about performers who play only what is written. Musicologist Gerhard Ilesanmi has collated fifty printed pieces from those decades and finds ornament signs at fewer than a third of the cadences. Ilesanmi cautions that the printed pages ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'show that written music was ignored in the period.',
          B:'record every ornament a player was expected to add.',
          C:'understate the ornaments a performance would have had.',
          D:'carry ornament signs at fewer than a third of cadences.'
        },
        correct:'C',
        expCorrect:'The passage says ornaments were expected but not spelled out, and that contemporaries complained when players stuck to the page. A page that omits what players were supposed to add is a partial record of the performance, so the sparse ornament signs are a fact about the printing, and the sounding music carried more than they show.',
        expWrong:{
          A:'Far too strong. Performers added to what was written; nothing in the passage suggests they disregarded it.',
          B:'The opposite of the practice described. The whole point of the treatises is that much of what a player added never appeared in the notation.',
          D:'True according to the text, and it is the count Ilesanmi made. The number on the page is the evidence for his caution rather than the caution itself.'
        },
        tip:'When a record is known to omit part of what happened, treat it as a floor rather than a total. The inference the text supports is about the gap between page and practice, in the direction the omission runs.'
      },
      {
        id:'IFB-20', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (compute the measure the passage says counts)',
        passage:"In rowing, the force a boat must overcome grows with the weight it carries, so crews are often compared by power divided by body mass rather than by power alone. Sports scientist Marisol Etxebarria measured two athletes on an ergometer: Kovac produced 420 watts at 105 kilograms, and Dunne produced 352 watts at 80 kilograms. Etxebarria points out that, judged by the measure that matters for moving a boat, Dunne ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'produced sixty-eight fewer watts than Kovac did in the test.',
          B:'falls behind Kovac once body mass is taken into account.',
          C:'would beat any heavier athlete over any racing distance.',
          D:'outperforms Kovac by four tenths of a watt per kilogram.'
        },
        correct:'D',
        expCorrect:'The passage says the comparison that matters is power divided by body mass. Kovac: 420 ÷ 105 = 4.0 watts per kilogram. Dunne: 352 ÷ 80 = 4.4. Dunne leads by 0.4 watts per kilogram on the measure the text singles out, even though Kovac produced more watts. Check: 105 × 4 = 420 ✓ and 80 × 4.4 = 352 ✓.',
        expWrong:{
          A:'True according to the text — Kovac does produce sixty-eight watts more. That is the raw figure the passage has just told you not to compare crews by.',
          B:'Backwards. Dividing by mass helps the lighter athlete here: 352 ÷ 80 = 4.4 beats 420 ÷ 105 = 4.0.',
          C:'A single ergometer test cannot settle races against every heavier athlete at every distance; the passage supports a comparison of two measured numbers.'
        },
        tip:'When a passage names the measure that counts, compute that measure before looking at the choices. A larger raw number and a larger ratio often point to different people, and the text tells you which one the question is about.'
      },
      {
        id:'IFB-21', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a stated reason the facts rule out)',
        passage:"Shoppers in Fabienne Lorrain’s study chose one of four pairs of stockings arranged along a table, and chose the rightmost pair far more often than any other. Asked why, every shopper named a quality of the stockings — the weave, the sheen, the feel. Lorrain notes that the four pairs were in fact indistinguishable, and that position alone varied across the table. The shoppers’ explanations therefore ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'cannot be the reason their choices actually followed.',
          B:'named a weave, a sheen, or a feel of the stockings.',
          C:'show that quality decided where each pair was placed.',
          D:'prove that people never know why they act as they do.'
        },
        correct:'A',
        expCorrect:'The four pairs were indistinguishable, so no difference in weave, sheen, or feel existed to be noticed. Every shopper nonetheless gave one of those as the reason. A reason that points to a difference the passage says is not there cannot be what produced the choice, however sincerely the shopper believes it.',
        expWrong:{
          B:'True according to the text, and it is the report Lorrain collected. Listing the reasons the shoppers gave is not yet the judgement she reaches about them.',
          C:'This swaps cause for effect. Position varied and quality did not, so quality cannot explain the arrangement any more than it explains the choosing.',
          D:'One task with identical items cannot support a claim about people in general or about every decision they make.'
        },
        tip:'Check a stated reason against the facts the passage supplies. If the passage rules out the difference the reason depends on, the reason is eliminated — without licensing a sweeping claim about self-knowledge.'
      },
      {
        id:'IFB-22', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (what a delayed signal can and cannot report)',
        passage:"Light travels at a fixed speed, so an image of a distant object is a picture of the object as it was when the light left it, not as it is now. Astronomer Wilhelmina Boaventura has imaged a galaxy whose light took eight billion years to reach her telescope, and reports that it is busily forming stars. A colleague asks whether the galaxy is still doing so. Boaventura answers that her image ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'shows that every distant galaxy is forming stars.',
          B:'reports the galaxy as it stood eight billion years ago.',
          C:'settles what the galaxy is doing at this very moment.',
          D:'was made from light that took eight billion years to arrive.'
        },
        correct:'B',
        expCorrect:'The text gives the rule: an image shows an object as it was when the light left it. That light left this galaxy eight billion years ago. So the star formation Boaventura sees is a fact about the galaxy eight billion years back, and the image carries no information about any later moment.',
        expWrong:{
          A:'One galaxy is not every galaxy, and the passage surveys no others.',
          C:'This is the belief the opening sentence corrects. No image can show the present state of an object whose light has been in transit for billions of years.',
          D:'True according to the text, and it is the premise the answer rests on. Saying how long the light travelled is not yet saying what the image therefore reports.'
        },
        tip:'When a passage builds in a delay between event and evidence, date the evidence to the event rather than to the day it was read. The safe completion says what was true then and declines to speak about now.'
      },
      {
        id:'IFB-23', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (two possibilities, one of them closed off)',
        passage:"When a scribe copies a manuscript, his slips pass to whatever is later copied from his page. A slip that two manuscripts share is therefore either an accident both scribes happened to make or an inheritance from a common ancestor, and paleographers treat an unusual, meaningless error as far too improbable to have happened twice. In two copies of the same chronicle, Isolde Varanasi finds the same nonsense word standing where a place name belongs. Varanasi concludes that the two copies ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'contain a nonsense word where a place name belongs.',
          B:'passed the slip upward to the manuscript they copied.',
          C:'were copied one directly from the other in sequence.',
          D:'descend from a single page where that slip was made.'
        },
        correct:'D',
        expCorrect:'The passage rules out coincidence for an unusual meaningless error and leaves one alternative: inheritance from a common ancestor. The nonsense word sits in both copies, so both received it from a page that already carried it. That is what the two stated options force once the first is closed off.',
        expWrong:{
          A:'True according to the text — it is what Varanasi found. The observation is the evidence for her conclusion rather than the conclusion itself.',
          B:'Copying runs one way. A slip moves from the page being copied to the new page, never back up into the exemplar.',
          C:'A shared inheritance does not make one copy the parent of the other. Both could descend independently from the same earlier page, and the text gives no way to tell.'
        },
        tip:'When a passage narrows the possibilities to two and then eliminates one, the completion is whatever is left, stated no more precisely than the text allows. "Shares an ancestor" is not "is the ancestor".'
      },
      {
        id:'IFB-24', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a power nobody in the situation can trigger)',
        passage:"In Sarnovia a law can be struck down only after the constitutional court reviews it, and the court may review a law only when at least thirty sitting members of the legislature jointly petition it. The opposition boycotted the last election and holds no seats; the governing bloc, which writes the laws, has never petitioned the court. Comparative politics scholar Idris Falkenrath observes that during this term Sarnovia’s laws ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'are reviewed whenever the governing bloc writes them.',
          B:'cannot be challenged by any means in the country.',
          C:'lie in practice beyond the reach of that court.',
          D:'may be reviewed once thirty members petition the court.'
        },
        correct:'C',
        expCorrect:'The court can act only on a joint petition from thirty sitting members. The only members sitting belong to the governing bloc, and it has never petitioned. With nobody in the chamber both able and willing to bring a law forward, the review that is the sole route to striking a law down never starts.',
        expWrong:{
          A:'Backwards. Writing a law is what puts it in force; review happens only if someone petitions against it, which the passage says has not occurred.',
          B:'Too sweeping. The passage describes one route — constitutional review — and says nothing about elections, courts of other kinds, or the next legislature.',
          D:'True according to the text; it is the rule the situation is measured against. Restating the requirement is not saying what follows when nobody in the chamber will meet it.'
        },
        tip:'Trace who is allowed to start a process and whether anyone in the situation both can and will. A power that exists on paper with nobody to trigger it produces the same outcome as no power, and that is as far as the text goes.'
      },

      /* ============ HARD · real M2 (IFB-25 a IFB-34; las cuatro últimas, brutales) ============ */
      {
        id:'IFB-25', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (a small error rate applied to a large healthy group)',
        passage:"A screening test for a rare condition returns a positive result for 99 percent of the people who have it and for 2 percent of the people who do not. Epidemiologist Lior Mbeki applies it in a town of one hundred thousand where one person in a thousand has the condition. Of the hundred who have it, ninety-nine test positive; of the 99,900 who do not, about 1,998 also test positive. Mbeki’s figures show that a positive result in this town ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'appears for 99 of the hundred people who have the condition.',
          B:'belongs far more often to someone free of the condition.',
          C:'identifies the condition in about 98 percent of those flagged.',
          D:'makes the test useless for any purpose in public health.'
        },
        correct:'B',
        expCorrect:'Count the positives. Ninety-nine come from the hundred people who have the condition; about 1,998 come from the 99,900 who do not. That is 2,097 positive results, of which only 99 are correct — under 5 percent. Because the condition is rare, the 2 percent error rate is applied to a vastly larger group. Check: 99 + 1,998 = 2,097 and 99 ÷ 2,097 ≈ 0.047 ✓.',
        expWrong:{
          A:'True according to the text, and it is one of the two counts you need. It measures how the test treats the sick; the question is what a positive result implies about the person holding it.',
          C:'This reads the accuracy backwards. Ninety-eight percent is how often the test clears a healthy person, not how often a flagged person is ill — and the flagged group here is about 95 percent healthy.',
          D:'Too far. A test that narrows a hundred thousand people to roughly two thousand for follow-up can be valuable; the passage warns about reading a single positive result, not about using the test.'
        },
        tip:'With a rare condition, run both counts before judging a positive result: the true positives from the small group and the false positives from the large one. A small error rate on a large healthy population usually outnumbers every real case.'
      },
      {
        id:'IFB-26', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (a procedure that exercises only one failure mode)',
        passage:"Metals fail in two quite different ways. A static overload breaks a part the first time a force exceeds its strength; fatigue breaks it after many thousands of smaller cycles, at loads the part survives easily once. Engineer Marta Szeliga certifies a suspension link by pulling it steadily to three times its working load and confirming that it holds. The link will spend its service life taking about two million load reversals. Szeliga’s test, on its own, ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'leaves the fatigue behaviour of the link untested.',
          B:'confirms the link holds three times its working load.',
          C:'shows the link is safe for two million reversals.',
          D:'measures fatigue by applying one steady pull.'
        },
        correct:'A',
        expCorrect:'The passage separates the two failure modes: a single overload against many smaller cycles at loads the part survives once. Szeliga applies exactly one steady pull. That probes the first mode and nothing else, so the two million reversals the link will actually see stay outside what the test reports.',
        expWrong:{
          B:'True according to the text; it is the result of the test. Reporting what the pull established is not the gap in it that the sentence is building toward.',
          C:'Precisely what the distinction forbids. The passage says fatigue occurs at loads a part survives easily in a single pull, so holding once says nothing about two million cycles.',
          D:'One steady pull is the static test the passage contrasts with fatigue. Fatigue is measured by repeated cycling, which this procedure never applies.'
        },
        tip:'Match the test to the conditions of use. When a passage names two failure modes and describes a procedure that exercises one, the guaranteed inference is silence about the other — not a verdict that the part will fail.'
      },
      {
        id:'IFB-27', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (a life-cycle step the described site no longer has)',
        passage:"Two-thirds of the tree species in the Marandu lowlands produce fleshy fruit whose seeds germinate only after passing through the gut of a large frugivorous bird, and those birds vanished from the district when the forest was cleared. Ecologist Solenne Aboubakar’s replanted stand, now twenty years old, carries mature trees of those species and fruits heavily, but a seedling survey found none of them coming up. Aboubakar concludes that without the birds the stand ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'will regenerate faster than a stand that keeps its birds.',
          B:'holds mature trees of species with fleshy fruit.',
          C:'will not replace those trees as the planted ones age.',
          D:'is certain to lose every tree species it contains.'
        },
        correct:'C',
        expCorrect:'Seeds of these species germinate only after passing through a bird that is no longer in the district. The stand fruits heavily and has no seedlings of those species, which is what that requirement predicts. As the planted adults age and die, nothing of their kind is coming up to take their place, so the stand cannot renew that two-thirds on its own.',
        expWrong:{
          A:'Backwards. The birds are the step that makes germination possible, so a stand without them regenerates these species more slowly, not faster.',
          B:'True according to the text, and it is why the missing seedlings matter. The presence of adults is the setup for Aboubakar’s worry rather than the worry itself.',
          D:'Overshoots. The passage puts two-thirds of the species in this category and says nothing about the remaining third, which does not depend on the birds.'
        },
        tip:'When a life cycle has a step the text says is required, check whether the described situation still contains it. What follows is the failure of that step and of everything downstream — not the collapse of everything in the picture.'
      },
      {
        id:'IFB-28', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (an instrument finer than the tools that survive)',
        passage:"Parts are interchangeable only if each is made to a tolerance fine enough that any specimen fits any assembly, and a workshop cannot hold a tolerance finer than its measuring gauges can detect. Historian Aurel Wielgosz has inventoried the gauges surviving from the Ferrand armoury of 1815, none of which resolves better than half a millimetre. A company pamphlet of that year advertises locks whose parts fit to a twentieth of a millimetre. Wielgosz notes that the surviving gauges ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'come from the Ferrand armoury and date to 1815.',
          B:'resolve more finely as the tolerance claimed grows.',
          C:'prove that the armoury advertised what it knew was false.',
          D:'could not have verified the fit the pamphlet claims.'
        },
        correct:'D',
        expCorrect:'A workshop cannot hold a tolerance finer than its gauges can detect. The surviving gauges stop at half a millimetre, while the pamphlet claims a fit ten times finer. Checking a twentieth of a millimetre with an instrument that resolves only half a millimetre is impossible, so these gauges could not have verified the advertised fit.',
        expWrong:{
          A:'True according to the text, and it is the provenance of the evidence. Where the gauges came from is not what their resolution implies about the pamphlet.',
          B:'Nothing links a gauge’s resolution to what an advertisement claims. The gauge is a physical instrument, and its precision is fixed whatever the pamphlet says.',
          C:'Too far. The inventory covers surviving gauges, so finer ones may simply be lost, and the passage offers no evidence about what the armoury believed.'
        },
        tip:'Keep track of what the evidence is a sample of. Surviving instruments show what could be verified with them, which is not the same as showing that a claim was false or that better tools never existed.'
      },
      {
        id:'IFB-29', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (a marking produced by the house rule it passed through)',
        passage:"Between 1830 and 1845 the Ludrich firm reset every tempo word it received into one of six terms it kept in stock, a practice its own style book records. Musicologist Anneke Beaumont compares a composer’s autograph score, which asks for a movement to go “gently and without haste,” with the Ludrich print of 1838, which marks it Andante. Beaumont argues that the printed marking, by itself, ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'records the tempo the composer asked for in the autograph.',
          B:'tells us less about the composer than about the firm.',
          C:'shows that no printed marking of the period is reliable.',
          D:'replaced a phrase the composer wrote in his own score.'
        },
        correct:'B',
        expCorrect:'The firm converted every tempo word it received into one of six stock terms, so the word on its page was chosen by the firm rather than by whoever sent the score. The autograph asks for something else entirely. A marking produced by a house rule records the house rule, which makes it evidence about Ludrich before it is evidence about the composer.',
        expWrong:{
          A:'The opposite of the case. The composer asked for a phrase, and the print carries a stock term the firm supplied in its place.',
          C:'Too sweeping. The rule described belongs to one firm across fifteen years, and other printers are not covered by anything the passage says.',
          D:'True according to the text, and it is the comparison Beaumont makes. Saying that a substitution occurred is the observation; what it means for the evidence is the argument.'
        },
        tip:'When a document passes through a process that changes it in a known way, attribute the altered feature to the process. A sound conclusion names whose decision the surviving detail actually records.'
      },
      {
        id:'IFB-30', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (an average moved by who left the group)',
        passage:"Sports scientist Rana Delacroix followed ninety junior swimmers through a demanding twelve-month programme and reported that the group’s average time for two hundred metres improved by four seconds. Thirty-one of the ninety left the programme before it ended, most of them from the bottom third of the opening time trial, and their times are not in the final average. Delacroix cautions that the four-second improvement ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'includes a drop produced by the departures alone.',
          B:'was measured across a twelve-month programme.',
          C:'understates how much the average time fell.',
          D:'means none of the ninety swimmers got faster.'
        },
        correct:'A',
        expCorrect:'Thirty-one swimmers left, most of them from the slowest third at the start, and their times are absent from the final average. Dropping the slowest members of a group lowers its average by itself, with nobody swimming any faster. So part of the four seconds is that subtraction, and the figure cannot be read as pure improvement.',
        expWrong:{
          B:'True according to the text, and it is the length of the study. The duration is not the problem Delacroix is pointing at inside the number.',
          C:'Backwards. Losing the slowest swimmers pushes the final average down, which makes the improvement look larger than it is, not smaller.',
          D:'The caution is that the four seconds is inflated, not that it is zero. Nothing here shows that individual swimmers failed to improve.'
        },
        tip:'When members leave a group between two measurements, ask who left. An average can move simply because the slowest are no longer in it, and that movement belongs to the roster rather than to the people still there.'
      },
      {
        id:'IFB-31', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences (a group picked at the extreme of a noisy measure)',
        passage:"A school’s yearly test average moves for two reasons: what its teaching achieves, and chance — which pupils sat the test, which questions came up. The province of Halden enrolled the fifty schools with the lowest averages of 2021 into a support programme, and those fifty averaged four points higher in 2022. Education researcher Konstantin Ferreira observes that the lowest fifty of any year must include schools whose chance factors ran against them, and adds that such schools ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'gained nothing whatever from the support they received.',
          B:'keep the same chance factors working against them again.',
          C:'were the fifty lowest averages recorded in the province.',
          D:'would average higher the next year with no programme.'
        },
        correct:'D',
        expCorrect:'The passage splits a school’s average into teaching and chance, and notes that the bottom fifty of a year must include schools that had a bad run of chance. Chance that ran against a school in 2021 has no reason to run against it again in 2022, so on the chance component alone those schools move up. The rise is expected before the programme is considered at all.',
        expWrong:{
          A:'The argument shows that part of the four points is expected without the programme, not that the programme did nothing. Both can contribute, and this text cannot separate them.',
          B:'This is what chance does not do. A factor that varies from year to year is not carried forward, which is exactly why the selected schools drift back up.',
          C:'True according to the text; it is how the fifty were selected. Restating the selection rule is the setup for Ferreira’s point rather than the point itself.'
        },
        tip:'When a group is picked because it sat at the extreme of a noisy measure, expect it to move toward the middle next time on its own. An improvement that selection alone predicts is not evidence that the treatment worked.'
      },
      {
        id:'IFB-32', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences (a known source that fills the gap an argument rested on)',
        passage:"A molecule’s spectral fingerprint tells you the molecule is there; deciding how it got there is a separate question. Planetary scientist Wren Achterberg detects a gas in a moon’s thin atmosphere at two parts per billion and notes that no known chemistry on that moon makes it. Her critic Ola Restrepo shows that sunlight striking the moon’s surface ice produces the same gas, and puts the output at roughly two parts per billion. If Restrepo’s calculation holds, Achterberg’s detection ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'rules out sunlight as a source of the gas.',
          B:'measured the gas at about two parts per billion.',
          C:'no longer needs an unknown source to be explained.',
          D:'shows the moon has no chemistry of any kind.'
        },
        correct:'C',
        expCorrect:'Achterberg’s claim rested on a gap: the gas is present and no known chemistry on the moon makes it. Restrepo fills the gap with a known process — sunlight on surface ice — that yields the same gas at the same abundance she measured. Once a known source accounts for the whole amount, the detection stops requiring anything unknown.',
        expWrong:{
          A:'The reverse of Restrepo’s result. His calculation puts sunlight forward as a sufficient source, so the detection is consistent with it rather than evidence against it.',
          B:'True according to the text, and it is the number both scientists are working with. The measurement is what is being reinterpreted, not the conclusion of the reinterpretation.',
          D:'Far past the text. Restrepo describes a chemical process operating on the moon, which is chemistry rather than the absence of it.'
        },
        tip:'A detection plus "nothing known explains it" is an argument that dies the moment something known does. Ask what the evidence rules out, and notice that a proposed alternative removes the need for an exotic source without disproving the measurement.'
      },
      {
        id:'IFB-33', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences (a crude rate moved by composition, not by risk)',
        passage:"The incidence of a bone disorder rises steeply with age: in Vallance, one case per ten thousand among people under fifty and thirty per ten thousand above seventy. Between 1995 and 2025 the crude rate for the country as a whole rose from six to eleven cases per ten thousand, while the rate within each age band stayed where it had been. Over those same thirty years the share of the population above seventy doubled. Epidemiologist Noor Hadjiev concludes that the rise in the crude rate ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'reflects the changed age structure, not a changed risk.',
          B:'took the country from six to eleven per ten thousand.',
          C:'shows the disorder became more dangerous after 1995.',
          D:'would be larger had the population aged more slowly.'
        },
        correct:'A',
        expCorrect:'A crude rate is the average of the age-specific rates, weighted by how many people sit in each band. The text says every age-specific rate held constant while the share of people above seventy — the band running at thirty per ten thousand — doubled. Shifting weight onto the highest rate lifts the average with nobody’s risk changing, which is exactly the pattern in the figures.',
        expWrong:{
          B:'True according to the text, and it is the change being explained. Repeating the size of the rise says nothing about its cause, which is what Hadjiev’s conclusion is about.',
          C:'Nothing in the passage measures severity, and the age-specific rates did not move. An unchanged risk inside every age band is the opposite of a disorder that grew more threatening.',
          D:'Backwards. The ageing is what pushes the crude rate up, so a population that aged more slowly would show a smaller rise, not a larger one.'
        },
        tip:'A crude rate mixes risk with composition. If the passage tells you the age-specific rates held still while the age mix moved, the whole of the change belongs to the mix, and no claim about risk is available.'
      },
      {
        id:'IFB-34', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences (two dates that belong to two different things)',
        passage:"Radiocarbon dating a parchment leaf measures when the animal died, which is when the skin stopped exchanging carbon, not when anyone wrote on it; scribes sometimes scraped an old leaf clean and used it again decades later. Paleographer Emiliano Kastrup dates a leaf’s parchment to about 790 and reads, in the text now standing on it, a form of abbreviation that no scriptorium is known to have used before 850. Kastrup infers that the writing on the leaf ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'sits on parchment radiocarbon-dated to about 790.',
          B:'was put there well after the skin itself was made.',
          C:'cannot be later than the parchment it was written on.',
          D:'was copied at a scriptorium that invented the form.'
        },
        correct:'B',
        expCorrect:'The radiocarbon date belongs to the animal, so the skin existed by about 790. The abbreviation on it appears in no scriptorium before 850, so the writing is no older than that. A leaf prepared around 790 carrying script that is at the earliest 850 was written on decades after the skin was made — the reuse the passage describes.',
        expWrong:{
          A:'True according to the text, and one of the two dates you need. The parchment date fixes the skin; on its own it says nothing about when the ink went on.',
          C:'Reversed. The carbon date is a date for the material, and writing can only be added once the material exists, never before.',
          D:'Too specific. Knowing that the form was in use by 850 does not identify the house that first used it, and the passage names none.'
        },
        tip:'When two dates come from two different things — the material and the text on it — keep them apart and see which one each method fixes. The reliable inference is about the gap between them, in the direction the evidence forces.'
      }

    ]
  });
})();
