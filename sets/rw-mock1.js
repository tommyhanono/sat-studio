/* SAT Studio question set — Reading & Writing MODULE mock (flagship "Difícil"): MK1-01 a MK1-27, real Digital SAT domain order */
window.SAT_SETS.push({
  id: 'rw-mock1',
  title: 'R&W Module Mock — Hard',
  section: 'rw',
  level: 'Difícil',
  description: 'Full Bluebook-style module (27 questions) in the real domain order. Hard level.',
  minutes: 32,
  questions: [
    /* ===== Q1–7 — CRAFT AND STRUCTURE ===== */
    /* Words in Context ×3 (fill-in-blank) */
    {
      id:'MK1-01', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context',
      passage:"Although the committee praised the architect's model as visually striking, several engineers found its central premise %BLANK%: the cantilevered roof it proposed could not, by their calculations, bear the loads the design assumed.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'untenable', B:'ornate', C:'provisional', D:'conventional'},
      correct:'A',
      expCorrect:'The second part, after the colon, explains that the roof could not carry the loads: the central idea does not hold up. The word untenable means precisely unsustainable or indefensible, which is what the calculations show.',
      expWrong:{
        B:'Ornate describes appearance, not a logical or structural failure; the problem here is that the premise does not work.',
        C:'Provisional implies something is temporary, but the text says the premise is impossible, not temporary.',
        D:'Conventional would suggest something common or unoriginal, the opposite of a roof called visually striking.'
      },
      tip:'Use the clue after the colon as the definition of the blank. If that part says something cannot work, look for a word meaning untenable.'
    },
    {
      id:'MK1-02', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context',
      passage:"The novelist rarely stated her themes outright; instead she let them surface %BLANK%, embedded in a character's offhand remark or a seemingly trivial description that a careless reader might skip.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'obtrusively', B:'obliquely', C:'reluctantly', D:'exhaustively'},
      correct:'B',
      expCorrect:'The text contrasts with stated her themes outright: she lets them surface indirectly, tucked into asides and details. Obliquely means in an indirect or slanted way, exactly that contrast.',
      expWrong:{
        A:'Obtrusively is the opposite: the themes are tucked away, they do not jump out at you.',
        C:'Reluctantly attributes an emotion to the author that the text never describes; the point is how the themes surface, not her mood.',
        D:'Exhaustively implies covering everything in detail, but here the themes are barely hinted at.'
      },
      tip:'The semicolon sets two ideas against each other: outright versus the blank. You need a word meaning the opposite of direct.'
    },
    {
      id:'MK1-03', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context',
      passage:"Far from being a fixed record, the historian argued, the archive is continually %BLANK% by each generation, which decides anew what to preserve, what to discard, and how the surviving documents should be read.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'authenticated', B:'catalogued', C:'reconstituted', D:'digitized'},
      correct:'C',
      expCorrect:'The argument is that the archive is not fixed: each generation decides anew what to keep, what to discard and how to read it. Reconstituted captures that continuous remaking.',
      expWrong:{
        A:'Authenticated refers to verifying that something is genuine, not to remaking the whole archive in each era.',
        B:'Catalogued is only organizing or listing; it does not cover deciding what to discard or how to reinterpret the documents.',
        D:'Digitized is a specific technical detail the text never mentions; the point is conceptual, not about format.'
      },
      tip:'Look for the word that sums up the whole list that follows (keeping, discarding, reinterpreting). One that covers only part of it falls short.'
    },
    /* Text Structure and Purpose ×2 (reading) */
    {
      id:'MK1-04', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Text Structure and Purpose',
      passage:"For decades, textbooks credited a single inventor with the sewing machine. Yet patent records tell a messier story. Between 1830 and 1850, at least four practitioners on two continents filed overlapping claims, each solving a different piece of the same mechanical puzzle. Only when a court later forced the rival patent-holders to pool their designs did a fully workable machine emerge—assembled, in effect, from parts no one of them had invented alone.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It presents a widely held belief and then complicates it with evidence that points to a more collaborative account.',
        B:'It traces a single inventor\'s career from an early failure to an eventual, celebrated breakthrough.',
        C:'It compares two competing machines in order to argue that one was clearly superior to the other.',
        D:'It lists the technical specifications of an invention and then evaluates whether they were practical.'
      },
      correct:'A',
      expCorrect:'The text opens with the common belief (a single inventor) and then complicates it: the records show several inventors whose patents had to be combined. It is an established belief followed by evidence pointing to a collective origin.',
      expWrong:{
        B:'It does not follow the career of a single inventor; in fact, the point is that there was no single inventor.',
        C:'It does not compare two rival machines to pick the better one; it is about patents that had to be combined, not about superiority.',
        D:'It does not list technical specifications or weigh their practicality; the thread is historical and about authorship, not technical.'
      },
      tip:'On structure questions, watch the turn. The Yet after the first sentence warns that the opening belief is about to be complicated: belief, then complication.'
    },
    {
      id:'MK1-05', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Text Structure and Purpose',
      passage:"Some conservationists dismiss urban rooftops as too small and scattered to matter for pollinators. A recent survey of thirty city roofs suggests otherwise. Even isolated green roofs drew a surprising variety of wild bees, and roofs within a few hundred meters of one another shared many of the same species—hinting that, taken together, they may function less like isolated islands than like stepping-stones across the concrete.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To warn that city bees face threats not encountered by their rural counterparts.',
        B:'To offer evidence that a dismissed habitat may be more valuable to pollinators than assumed.',
        C:'To recommend specific plant species for gardeners hoping to attract wild bees.',
        D:'To explain the method a survey used to identify individual species of bees.'
      },
      correct:'B',
      expCorrect:'The text takes a dismissive stance (too small and scattered to matter) and refutes it with data: even isolated roofs draw bees, and nearby ones share species, working as stepping-stones. The purpose is to show that dismissed habitat does count.',
      expWrong:{
        A:'It does not compare urban threats against rural ones; the focus is the value of the roofs, not a danger exclusive to the city.',
        C:'No recomienda plantas ni se dirige a jardineros; presenta hallazgos de un estudio.',
        D:'It mentions a study, but does not explain its method for identifying species; it uses the result, not the procedure.'
      },
      tip:'Main purpose is why the author wrote the whole text. If it opens by pushing back on an idea (suggests otherwise), the purpose is usually to present evidence against that idea.'
    },
    /* Cross-Text Connections ×2 (reading, two short passages) */
    {
      id:'MK1-06', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Cross-Text Connections',
      passage:"Text 1\nEconomist Dalia Prieto argues that remote work will hollow out big-city downtowns. If knowledge workers can log in from anywhere, she writes, they will choose cheaper towns, and the expensive urban core—built around the daily commute—will lose the foot traffic that its shops and restaurants depend on.\n\nText 2\nUrban planner Marcus Vale is less certain. Surveys of remote workers, he notes, show that most still want to live near dense amenities—theaters, restaurants, parks—and that many miss the incidental social contact of a shared workplace. Cities that convert emptied offices into housing, he predicts, may draw these workers back downtown rather than lose them.",
      stem:'Based on the texts, how would Vale (Text 2) most likely respond to Prieto\'s prediction in Text 1?',
      choices:{
        A:'By agreeing that downtowns will decline but insisting the process will take far longer than she expects.',
        B:'By conceding that remote work is a passing trend that will soon reverse on its own.',
        C:'By arguing that her analysis applies only to towns, not to large cities.',
        D:'By contending that her prediction overlooks remote workers\' continued desire to live near urban amenities.'
      },
      correct:'D',
      expCorrect:'Prieto predicts that remote workers will abandon downtown for cheap towns. Vale objects with surveys: most still want to live near theaters, restaurants and parks, and they miss the social contact. She would answer that he ignores that desire to be close to urban amenities.',
      expWrong:{
        A:'Vale does not accept that downtown will fall; she doubts that prediction and suggests cities can pull those workers back.',
        B:'Vale never says remote work is a passing phase; she is arguing about what people want, not whether the trend reverses on its own.',
        C:'Vale does not limit Prieto’s analysis to small towns; her point is about what draws people to big cities.'
      },
      tip:'First pin down each author’s thesis. Vale contradicts Prieto with a fact (people want amenities), so her answer will be that counterargument, not simple agreement.'
    },
    {
      id:'MK1-07', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Cross-Text Connections',
      passage:"Text 1\nThe standard view holds that the Bronze Age city of Tel Arun collapsed suddenly, sacked by invaders. Its excavators point to a thick layer of ash and toppled walls as proof of a single catastrophic attack that ended the settlement in a matter of days.\n\nText 2\nRe-examining the same site, archaeologist Ivy Chen notes that the ash layer is not uniform: it accumulated in distinct bands separated by ordinary floor surfaces on which people continued to live. To Chen, this points not to one violent night but to a slow decline punctuated by several smaller fires over many years.",
      stem:'Based on the texts, how would Chen (Text 2) most likely respond to the standard view described in Text 1?',
      choices:{
        A:'By accepting that invaders sacked the city but denying that any fire was involved.',
        B:'By arguing that the layered ash indicates a gradual decline rather than a single sudden attack.',
        C:'By concluding that the site was never permanently inhabited in the first place.',
        D:'By insisting that the toppled walls prove the city was abandoned peacefully.'
      },
      correct:'B',
      expCorrect:'The standard view reads the ash layer as a single night of destruction. Chen observes that the ash sits in separate bands divided by normally used floors, a sign of several smaller fires over years. She would answer that the data point to a gradual decline, not a single attack.',
      expWrong:{
        A:'Chen does not accept the sack by invaders; her rereading replaces the single attack with repeated fires over time.',
        C:'Chen says the opposite: people went on living between the ash layers, so the site was indeed inhabited.',
        D:'Chen does not argue for a peaceful abandonment or use the fallen walls to prove it; her evidence is the banded ash.'
      },
      tip:'When two authors read the same evidence, the answer describes the alternative reading. Chen reinterprets the ash: from one night to many years.'
    },
    /* ===== Q8–14 — INFORMATION AND IDEAS ===== */
    /* Central Ideas and Details ×2 (reading) */
    {
      id:'MK1-08', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details',
      passage:"When biologists describe a species as an ecosystem engineer, they mean an organism that reshapes its physical surroundings in ways that affect many other species. Beavers are the textbook case: by damming streams, they create ponds and wetlands that dozens of other animals and plants come to depend on. The label matters because it shifts attention from what a species eats to what it builds, and thus to how removing it might quietly unravel a whole community.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Beavers are the only animals capable of significantly altering their environment.',
        B:'Biologists disagree about whether the term ecosystem engineer is scientifically useful.',
        C:'Studying what a species eats reveals more about an ecosystem than studying what it builds.',
        D:'The idea of an ecosystem engineer highlights how some species shape habitats that many others rely on.'
      },
      correct:'D',
      expCorrect:'The central idea defines ecosystem engineer as an organism that reshapes its surroundings in ways many other species depend on, with the beaver as the example. The text stresses why the term matters: it reveals how losing that species unravels the community.',
      expWrong:{
        A:'The beaver is the textbook case, an example, not the only species capable of it; the text is about a general category.',
        B:'There is no disagreement among biologists in the text; the term is presented as useful, not disputed.',
        C:'The text says the opposite: the value of the term is shifting the focus from what it eats to what it builds.'
      },
      tip:'The main idea covers the whole paragraph, not one sentence. An example (the beaver) illustrates the idea; it does not replace it.'
    },
    {
      id:'MK1-09', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Details',
      passage:"The composer Florence Price often folded the melodies and rhythms of spirituals into the forms of the European symphony. Critics of her era sometimes treated this as a compromise, as if borrowing a classical structure diluted the folk material. Price saw it differently. For her, placing a spiritual inside a symphony was not a concession but an assertion—a claim that this music belonged in the concert hall on its own terms, and that the two traditions could enrich rather than cancel each other.",
      stem:'According to the text, Price regarded combining spirituals with symphonic form as',
      choices:{
        A:'a reluctant compromise forced on her by the tastes of concert audiences.',
        B:'an experiment she ultimately judged to be unsuccessful.',
        C:'a deliberate assertion that the two musical traditions could strengthen each other.',
        D:'a way to preserve spirituals unchanged by keeping them separate from classical music.'
      },
      correct:'C',
      expCorrect:'The text contrasts the critics (who saw it as a concession) with Price’s own view: for her it was an assertion that this music belonged in the concert hall and that both traditions were enriched. It is a deliberate joining that strengthens both.',
      expWrong:{
        A:'Reluctant compromise is the critics’ reading, which the text attributes to Critics of her era, not to Price (Price saw it differently).',
        B:'The text does not say Price judged the experiment a failure; it defends it as a positive assertion.',
        D:'She did not keep the spirituals separate or untouched: she was precisely embedding them inside the symphony.'
      },
      tip:'Watch for traps that repeat the other side’s opinion. The question asks for Price’s view; Price saw it differently marks where her position starts.'
    },
    /* Command of Evidence ×3 (reading; ONE quantitative described in words) */
    {
      id:'MK1-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (Textual)',
      passage:"A team studying birdsong hypothesized that young sparrows need to hear adult song during a specific early window in order to develop a normal song themselves. To test this, they raised one group of chicks in acoustic isolation and exposed a second group to recorded adult song only during that early window, then compared the songs both groups produced as adults.",
      stem:'Which finding, if true, would most directly support the team\'s hypothesis?',
      choices:{
        A:'Both groups produced songs that were indistinguishable from those of wild adult sparrows.',
        B:'Both groups failed to produce any song at all once they reached adulthood.',
        C:'The isolated birds sang normally, while the birds exposed to recordings produced abnormal songs.',
        D:'The isolated birds produced abnormal songs, while the birds exposed during the early window sang normally.'
      },
      correct:'D',
      expCorrect:'The hypothesis says hearing adult song in that early window is necessary for normal song. The result that supports it is: the isolated birds (never hearing song) sing poorly and those exposed during the window sing well. That ties exposure to normal development.',
      expWrong:{
        A:'If both groups sing normally, then hearing the song did not matter, which contradicts the hypothesis.',
        B:'If neither sings, the effect of the window cannot be told apart; it does not support exposure producing normal song.',
        C:'It is the reverse pattern: it would support the opposite, that exposure hurts rather than helps.'
      },
      tip:'Match the result to the hypothesis: variable present gives the expected effect; variable absent gives the effect absent. Here heard song leads to sings well, and did not hear leads to sings poorly.'
    },
    {
      id:'MK1-11', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (Quantitative)',
      passage:"To gauge whether a new after-school tutoring program improved reading, a school compared four groups of students by how many sessions they attended. Students who attended no sessions gained, on average, 2 points on a year-end reading test. Those attending 1–5 sessions gained 5 points; those attending 6–10 sessions gained 9 points; and those attending more than 10 sessions gained 14 points.",
      stem:'Which choice best describes data from the study that support the conclusion that attending more sessions was associated with larger reading gains?',
      choices:{
        A:'Students attending no sessions still gained 2 points on the year-end test.',
        B:'The group attending 1–5 sessions gained fewer points than the group attending 6–10 sessions.',
        C:'Every group of students showed some positive gain on the year-end reading test.',
        D:'As the number of sessions attended rose across the four groups, the average points gained rose as well.'
      },
      correct:'D',
      expCorrect:'The conclusion is that more sessions go with bigger gains. The data point that best supports it is the whole trend: as sessions rise (0, then 1–5, then 6–10, then 10+), the scores rise (2, 5, 9, 14). It is the increasing relationship across all four groups.',
      expWrong:{
        A:'The zero-session group on its own says nothing about more sessions meaning more improvement; it is a single point with nothing to compare.',
        B:'It is true, but it compares only two of the four groups; the conclusion needs the overall trend, which option D does capture.',
        C:'Everyone improving somewhat does not show that more sessions give more improvement; even the no-session group went up.'
      },
      tip:'For a conclusion about a trend, pick the data point that runs across all groups, not one comparing a single pair. The answer has to reflect more X, more Y.'
    },
    {
      id:'MK1-12', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence (Textual)',
      passage:"A student claims that a local lake's water quality has improved since a nearby factory installed new filters two years ago. She wants to support this claim with evidence about the lake itself rather than about the factory's equipment.",
      stem:'Which finding, if true, would most effectively support the student\'s claim?',
      choices:{
        A:'The factory spent a large sum of money on the new filtration equipment.',
        B:'Measurements of pollutants in the lake are markedly lower now than they were before the filters were installed.',
        C:'The factory\'s managers say they are confident the filters are working as intended.',
        D:'A different lake in a neighboring region has also seen its water quality improve recently.'
      },
      correct:'B',
      expCorrect:'The student wants evidence about the lake, not about the equipment. Measuring that contaminants in the lake dropped sharply after the filters went in speaks directly to the water quality of the lake, which is exactly her claim.',
      expWrong:{
        A:'How much the equipment cost is information about the plant, not about the water quality of the lake, which is what she is asking for.',
        C:'The managers’ confidence is an opinion about the equipment, not a measurement of the lake itself.',
        D:'Another lake in another region says nothing about this lake or about the effect of these filters.'
      },
      tip:'Notice the constraint in the prompt: about the lake itself. Rule out anything about the plant, the cost, or another lake.'
    },
    /* Inferences ×2 (reading, inference-completion) */
    {
      id:'MK1-13', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Inferences',
      passage:"Deep-sea anglerfish live where sunlight never reaches and prey is scarce. A female may drift for a long time without encountering a single mate. In some species, a male that does find a female fuses permanently to her body, drawing nutrients from her bloodstream and living out his life attached. This arrangement, though strange, ensures that once a pair meets, they need never risk losing each other in the vast dark. It suggests that, for these fish, the greatest obstacle to reproduction is not competition but simply ______",
      stem:'Which choice most logically completes the text?',
      choices:{
        A:'the difficulty of finding a partner at all in such an empty environment.',
        B:'the intense rivalry among males competing for a single female.',
        C:'the abundance of predators that target attached males.',
        D:'the challenge of gathering enough sunlight to survive at depth.'
      },
      correct:'A',
      expCorrect:'The text stresses that females wander a long way without finding a mate and that fusing guarantees not being lost in the dark. The logical inference is that the biggest obstacle is not competition, but how hard it is to find a mate in such an empty environment.',
      expWrong:{
        B:'The text explicitly sets the obstacle against competition (not competition but simply), so rivalry cannot be the answer.',
        C:'No predators attacking the attached males are mentioned; that is invented from outside the text.',
        D:'These fish do not depend on sunlight to reproduce; they live where sunlight never reaches and the topic is finding a mate.'
      },
      tip:'When the text says not X but simply ___, the answer has to contrast with X. Here X is competition, so look for the option about scarcity or the difficulty of meeting.'
    },
    {
      id:'MK1-14', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Inferences',
      passage:"An economist examined why some open-source software projects thrive while others stall. She found that the healthiest projects were not necessarily those with the most contributors, but those in which a small, stable core of maintainers reviewed and integrated others' work. Projects that grew rapidly but lacked such a core often accumulated unmerged contributions and eventually fragmented. Her findings imply that, for an open-source project, sheer growth in contributors can be counterproductive unless ______",
      stem:'Which choice most logically completes the text?',
      choices:{
        A:'the project also has a dedicated core able to review and integrate the incoming work.',
        B:'the project attracts even more contributors to keep its momentum going.',
        C:'the project restricts contributions to a single programming language.',
        D:'the project abandons the practice of reviewing contributions altogether.'
      },
      correct:'A',
      expCorrect:'The economist found that the key is a stable core that reviews and integrates the work; without it, fast-growing projects pile up unmerged contributions and fragment. The inference is that growth hurts unless that integrating core exists.',
      expWrong:{
        B:'More contributors is exactly what causes the problem when the core is missing; adding people does not fix the lack of integration.',
        C:'The text never ties project health to sticking to a single language; that is outside the argument.',
        D:'Dropping review is the opposite of what helps; healthy projects do review and integrate contributions.'
      },
      tip:'The word unless calls for the condition that prevents the problem. The text already named it: a stable core that reviews. Pick the option that restores it.'
    },
    /* ===== Q15–21 — STANDARD ENGLISH CONVENTIONS ===== */
    /* Boundaries ×4 (fill-in-blank punctuation) */
    {
      id:'MK1-15', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries — colon introducing an explanation',
      passage:"After months of testing, the engineers finally understood why the prototype kept %BLANK% a single faulty sensor feeding the system inaccurate temperature readings.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'overheating,', B:'overheating;', C:'overheating:', D:'overheating'},
      correct:'C',
      expCorrect:'Before the blank there is a complete sentence (the engineers finally understood why the prototype kept overheating) and what follows is a PHRASE that explains it ("a single faulty sensor feeding…" has no finite verb, so it is not a sentence). That is exactly the job of the colon: to present the explanation. Since the 2nd part is not independent, the colon is the only valid option.',
      expWrong:{
        A:'A comma cannot introduce an explanation this way after a complete sentence; it leaves a loose, incorrect join.',
        B:'A semicolon demands an INDEPENDENT sentence after it, but "a single faulty sensor feeding…" is a noun phrase (no finite verb), not a sentence; that is why the semicolon does not fit here.',
        D:'With no punctuation, overheating a single faulty sensor fuses into a run-on and muddles the meaning.'
      },
      tip:'Colon = a complete sentence plus something that explains or illustrates it. Test it: if what comes before ends in a period and what comes after answers why, use a colon.'
    },
    {
      id:'MK1-16', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries — semicolon between independent clauses',
      passage:"The city's oldest bakery closed its doors last %BLANK% within weeks, a cooperative of former employees had reopened it under a new name.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'spring,', B:'spring;', C:'spring:', D:'spring and'},
      correct:'B',
      expCorrect:'There are two complete sentences: The city\'s oldest bakery closed its doors last spring and within weeks, a cooperative had reopened it. To join two independent clauses with no conjunction, the semicolon is what you want.',
      expWrong:{
        A:'A single comma between two complete sentences is a comma splice.',
        C:'The colon demands that the 2nd part explain or spell out the 1st; here the 2nd narrates a new fact (they reopened it), it does not explain the closing.',
        D:'The conjunction and with no comma before it joins two complete sentences badly; it would need spring, and to be correct.'
      },
      tip:'If you can put a period on both sides of the blank and still have complete sentences, and there is no conjunction, the semicolon is your safe pick.'
    },
    {
      id:'MK1-17', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries — paired dashes around a nonessential element',
      passage:"The manuscript's marginal %BLANK% some in ink, others in faded %BLANK% reveal how several generations of readers argued with the text.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{
        A:'notes,/pencil;',
        B:'notes—/pencil,',
        C:'notes—/pencil—',
        D:'notes,/pencil—'
      },
      correct:'C',
      expCorrect:'The non-essential aside some in ink, others in faded pencil describes the notes and has to be fenced off. Since the first blank opens with a dash, the second has to close with a dash: notes—…pencil—reveal. The punctuation of an aside must match at both ends.',
      expWrong:{
        A:'A comma to open and a semicolon to close do not match, and the semicolon would demand an independent sentence after it, which there is not.',
        B:'It opens with a dash but closes with a comma; the punctuation around an aside has to be the same kind at both ends.',
        D:'It opens with a comma but closes with a dash; again, mismatched opening and closing.'
      },
      tip:'An aside opens and closes with the same mark: dash and dash, or comma and comma. If one end uses a dash, so does the other.'
    },
    {
      id:'MK1-18', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries — comma with a nonessential appositive',
      passage:"The keynote was delivered by Ada %BLANK% a marine geologist whose maps redrew our picture of the sea %BLANK% and the audience listened in rapt silence.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{
        A:'Rourke,/floor,',
        B:'Rourke/floor,',
        C:'Rourke,/floor',
        D:'Rourke;/floor;'
      },
      correct:'A',
      expCorrect:'The phrase a marine geologist whose maps redrew our picture of the sea floor is a non-essential appositive renaming Ada Rourke; it sits between two commas. On top of that, and the audience listened is another sentence, so the closing comma after floor also sets up the join with and.',
      expWrong:{
        B:'The opening comma after Rourke is missing; the aside would be left open without its first comma.',
        C:'The closing comma after floor is missing; the appositive opens but never closes, and it runs straight into and.',
        D:'A semicolon does not fence off appositives, and there is no independent sentence between Rourke and the rest of the subject.'
      },
      tip:'A non-essential appositive takes an opening comma and a closing comma (twin commas). Check that both are there.'
    },
    /* Form, Structure, and Sense ×3 (fill-in-blank grammar) */
    {
      id:'MK1-19', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Form, Structure, and Sense — subject-verb agreement',
      passage:"The array of sensors mounted along the bridge's underside %BLANK% engineers to detect the faint vibrations that precede structural fatigue.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'allow', B:'have allowed', C:'are allowing', D:'allows'},
      correct:'D',
      expCorrect:'The subject is The array (singular); of sensors mounted along the bridge\'s underside is only a prepositional phrase describing the head noun. A singular subject takes a singular present-tense verb: The array allows.',
      expWrong:{
        A:'The form allow is plural and would agree with sensors, but the head of the subject is array (singular), not sensors.',
        B:'The form have allowed is plural; it agrees with sensors, not with array, so it breaks agreement.',
        C:'The form are allowing is plural and also shifts the meaning to something in progress; the singular head array calls for allows.'
      },
      tip:'Cover the of phrase and its object to find the real subject. The array allows: singular head, singular verb.'
    },
    {
      id:'MK1-20', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Form, Structure, and Sense — pronoun-antecedent agreement',
      passage:"Neither the lead violinist nor the other musicians could hide %BLANK% relief when the demanding final movement was over and the audience rose to applaud.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'its', B:'their', C:'his or her', D:"one's"},
      correct:'B',
      expCorrect:'In neither… nor…, the pronoun agrees with the subject closest to the verb, which here is the other musicians (plural). The correct plural possessive is their: could hide their relief.',
      expWrong:{
        A:'The form its is singular and is used for things, not for musicians (people) or for the nearest plural subject.',
        C:'The form his or her is singular, but the nearest subject (the other musicians) is plural, so it calls for a plural possessive.',
        D:'La forma one\'s es impersonal y singular; no concuerda con the other musicians.'
      },
      tip:'With neither…nor…, the verb and the pronoun follow the nearest subject. If that one is plural, use their.'
    },
    {
      id:'MK1-21', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Form, Structure, and Sense — dangling/misplaced modifier',
      passage:"Circling high above the canyon for nearly an hour, %BLANK% finally spotted the thermal updraft it had been searching for.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{
        A:'the thermal updraft appeared to the hawk',
        B:'the canyon revealed a hawk',
        C:'the hawk',
        D:'there was a hawk that'
      },
      correct:'C',
      expCorrect:'The opening modifier Circling high above the canyon for nearly an hour describes whoever is flying: the hawk. Right after the comma has to come that subject, the hawk, so that it had been searching for lines up too: the hawk finally spotted.',
      expWrong:{
        A:'It puts the thermal updraft right after the comma, suggesting the updraft was flying in circles; the one flying is the hawk.',
        B:'It leaves the canyon as the one flying, but a canyon cannot circle above itself; the modifier does not fit.',
        D:'The construction there was a hawk that does not place the hawk as the immediate subject of the modifier and reads clumsily, with no agreement with it.'
      },
      tip:'After an opening -ing modifier, the subject of the main clause has to be whoever performs that action. Ask yourself: who is circling? That goes right after the comma.'
    },
    /* ===== Q22–27 — EXPRESSION OF IDEAS ===== */
    /* Transitions ×3 (fill-in-blank) */
    {
      id:'MK1-22', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions',
      passage:"Solar panels are often praised as a maintenance-free source of power. In dusty or arid regions, %BLANK% their output can fall sharply within weeks unless the panels are cleaned regularly, since accumulated grime blocks the light they depend on.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'however,', B:'therefore,', C:'likewise,', D:'for example,'},
      correct:'A',
      expCorrect:'The first sentence praises the panels as maintenance-free; the second shows the opposite: in dusty regions their output drops unless they are cleaned. That contrast calls for however.',
      expWrong:{
        B:'The transition therefore marks a logical consequence, but the 2nd sentence does not follow from the 1st: it contradicts it.',
        C:'The transition likewise signals similarity, and here the ideas oppose each other (maintenance-free versus requires cleaning).',
        D:'The transition for example would introduce an example of maintenance-free, but the text gives a case where maintenance is in fact needed.'
      },
      tip:'Ask whether the 2nd idea confirms or contradicts the 1st. Here it contradicts it (free versus must be cleaned), so you need a contrast transition.'
    },
    {
      id:'MK1-23', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions',
      passage:"The first trial showed that the drug lowered blood pressure in most participants. The second and third trials, conducted with larger and more diverse groups, reached the same conclusion. %BLANK% researchers now regard the drug's effect as well established.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Nevertheless,', B:'In contrast,', C:'Consequently,', D:'Meanwhile,'},
      correct:'C',
      expCorrect:'Three trials converged on the same result; that is why researchers now consider the effect well established. The 3rd sentence is the consequence of the previous ones, so Consequently fits.',
      expWrong:{
        A:'The transition Nevertheless signals contrast, but there is no opposition: the results reinforce each other.',
        B:'The transition In contrast marks difference, and here the trials agree rather than differ.',
        D:'The transition Meanwhile marks simultaneity in time, not the cause-and-effect link between the evidence and the conclusion.'
      },
      tip:'If several sentences pile up evidence and the last one draws the conclusion, the transition is result-based: consequently, therefore, as a result.'
    },
    {
      id:'MK1-24', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions',
      passage:"Critics initially dismissed the painter's late works as careless, even unfinished. Recent scholarship, %BLANK% has come to see their loose brushwork as a deliberate late style, one that anticipated techniques painters would not fully embrace for another century.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'in addition,', B:'in short,', C:'as a result,', D:'by contrast,'},
      correct:'D',
      expCorrect:'Critics first dismissed the works as careless; recent scholarship does the opposite: it sees them as a deliberate late style. That opposition between then and now calls for by contrast.',
      expWrong:{
        A:'The transition in addition would add an idea of the same kind, but the 2nd sentence opposes the 1st instead of reinforcing it.',
        B:'The transition in short sums up what was already said, but here a new and opposite position is introduced, not a summary.',
        C:'The transition as a result marks consequence, and the new view is not an effect of the initial dismissal, it is its opposite.'
      },
      tip:'Notice the change of subject and of era: Critics initially versus Recent scholarship. That swing of opinion usually calls for a contrast transition.'
    },
    /* Rhetorical Synthesis ×3 (stem with bulleted notes + goal; full-sentence choices) */
    {
      id:'MK1-25', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      passage:"",
      stem:'While researching a project, a student has taken the following notes:<br><br>• The kakapo is a large, flightless parrot native to New Zealand.<br>• It is nocturnal and can live for several decades.<br>• By the 1990s, fewer than 50 kakapo remained.<br>• An intensive recovery program has since raised the population to over 200 birds.<br><br>The student wants to emphasize the change in the kakapo\'s population. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
      choices:{
        A:'The kakapo, a large flightless parrot from New Zealand, is both nocturnal and long-lived.',
        B:'Although the kakapo is a nocturnal parrot, it is also flightless and native to New Zealand.',
        C:'Once down to fewer than 50 birds by the 1990s, the kakapo population has since recovered to more than 200.',
        D:'The kakapo, a parrot that can live for several decades, is native to New Zealand.'
      },
      correct:'C',
      expCorrect:'The goal is to highlight the change in population. Only option C uses the two key figures (fewer than 50 in the 90s and more than 200 now) and sets them against each other, which is exactly highlighting how the population changed.',
      expWrong:{
        A:'It describes general traits (large, nocturnal, long-lived) but mentions no numbers or change in population.',
        B:'It mixes physical and habitat traits; nothing about the population increase.',
        D:'It gives habitat and lifespan, but leaves out entirely the figures that show the change.'
      },
      tip:'Anchor every option to the goal. If the goal is the change in the population, the answer has to include the before and the after (both numbers).'
    },
    {
      id:'MK1-26', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      passage:"",
      stem:'While researching a topic, a student has taken the following notes:<br><br>• Traditional incandescent bulbs convert only about 5% of their energy into visible light.<br>• The rest is lost as heat.<br>• LED bulbs convert roughly 40% of their energy into visible light.<br>• LEDs also last far longer before burning out.<br><br>The student wants to emphasize a contrast between the two types of bulbs. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
      choices:{
        A:'LED bulbs, like incandescent bulbs, eventually burn out and must be replaced.',
        B:'Whereas incandescent bulbs turn only about 5% of their energy into light, LEDs convert roughly 40%.',
        C:'Incandescent bulbs lose most of their energy as heat rather than light.',
        D:'Both incandescent and LED bulbs are widely used to light homes and workplaces.'
      },
      correct:'B',
      expCorrect:'The goal is to highlight a contrast between the two types. Option B puts the figures head to head (5% for the incandescent against 40% for the LED) using whereas, which marks the opposition precisely.',
      expWrong:{
        A:'It underlines a similarity (both burn), not the contrast the goal calls for.',
        C:'It is only about the incandescent bulb; with no comparison to the LED there is no contrast.',
        D:'It points to something both share (they are widely used), the opposite of highlighting a difference.'
      },
      tip:'Emphasize a contrast demands naming both elements and setting them against each other. Words like whereas, while or in contrast usually give the right option away.'
    },
    {
      id:'MK1-27', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Rhetorical Synthesis',
      passage:"",
      stem:'While researching a topic, a student has taken the following notes:<br><br>• Lidar is a sensing method that measures distance using pulses of laser light.<br>• Archaeologists mount lidar on aircraft to scan the ground below.<br>• The lasers can penetrate gaps in dense forest canopy.<br>• This has revealed ancient structures hidden beneath the trees.<br><br>The student wants to explain to an audience unfamiliar with lidar how it has aided archaeologists. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
      choices:{
        A:'Lidar, a laser-based sensing method flown over forests, can see through gaps in the canopy, helping archaeologists uncover ancient structures hidden beneath the trees.',
        B:'Lidar measures distance using pulses of laser light, a technique with many possible applications.',
        C:'Archaeologists have long searched for ancient structures, sometimes in dense and remote forests.',
        D:'Mounted on aircraft, lidar sends laser pulses toward the ground far below.'
      },
      correct:'A',
      expCorrect:'The goal is to explain to a new audience how lidar helps archaeology. Option A pulls together the essentials: what it is (a laser method), how it is used (flown over forests, piercing the canopy) and its result (revealing hidden ancient structures). It meets the whole goal.',
      expWrong:{
        B:'It defines lidar in general but does not say how it helps archaeologists; it misses the stated purpose.',
        C:'It is about the search for structures, but does not explain what lidar is or how it works for a new audience.',
        D:'It describes one detail of the method (pulses toward the ground) without connecting it to the benefit for archaeology.'
      },
      tip:'When the goal is to explain how something helped, the best option usually chains what it is, how it works and what it achieved. Rule out the ones covering only one piece.'
    }
  ]
});
