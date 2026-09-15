/* SAT Studio — Reading and Writing: MODULE 1 simulation (RWM1-01 to RWM1-27)
 *
 * The counterpart of math-mod1-sim for the other half of the exam. It was the last
 * structural gap in the bank: there was a simulation of the math module and
 * none for Reading, when Reading is half the score.
 *
 * Everything below comes from College Board's Assessment Framework for the
 * Digital SAT Suite (official PDF, 227 pp.), not from an approximation:
 *
 *   · 27 questions in 32 minutes (25 operational + 2 pretest). p. 51
 *   · Average of 1.19 minutes per question. p. 50
 *   · Passages of 25 to 150 words, one per question. p. 50
 *   · Subject areas: literature, history and social studies, humanities, science. p. 50
 *   · DOMAIN ORDER (table 9, p. 50), the same in both modules:
 *       Craft and Structure → Information and Ideas →
 *       Standard English Conventions → Expression of Ideas
 *   · Within a domain, questions are ordered first by skill and then from
 *     EASIEST TO HARDEST. The exception is Standard English Conventions,
 *     which runs easy to hard without grouping by skill. p. 51
 *   · The first module carries "a broad mix of easy, medium and
 *     hard questions" and its result sets the difficulty of the second. p. 50
 *
 * Composition of this set:
 *
 *   Domain                         questions   this set   official
 *   Craft and Structure                8         29.6%      ≈28%
 *   Information and Ideas              7         25.9%      ≈26%
 *   Standard English Conventions       7         25.9%      ≈26%
 *   Expression of Ideas                5         18.5%      ≈20%
 *
 *   Difficulty: 8 Easy / 13 Medium / 6 Hard.
 *
 * That difficulty split is deliberate and corrects a measured bias: the rest
 * of the Reading bank has barely 9.8% easy questions and 59% hard ones,
 * because the previous expansion aimed at the second module. The first module is NOT
 * the hard one — it is the one that sets the score ceiling, and speed matters there.
 *
 * Use it WITH A CLOCK. Moving freely between questions and flagging them to come back
 * is part of the real exam (p. 51): worth practicing, not just answering in order.
 */
(function(){

  // Paired passage for Cross-Text Connections (the only question that needs one).
  var PAREADO =
    '<b>Text 1</b><br>The naturalist Mary Kingsley argued that a species should be studied only in the place where it lives. ' +
    'Specimens shipped to European museums arrived stripped of everything that gave them meaning: the water they swam in, ' +
    'the animals they fled, the season in which they were caught. A label in a drawer, she wrote, records a death, not a life.' +
    '<br><br><b>Text 2</b><br>Museum curators of the period defended their collections on practical grounds. Field observation ' +
    'was limited to whatever one person could witness in one place in one season, and it could not be checked by anyone else. ' +
    'A preserved specimen, by contrast, could be examined by a hundred researchers over a century, and each could verify what ' +
    'the previous one claimed to have seen.';

  // Table for the quantitative Command of Evidence question. The real exam
  // uses tables and bar or line graphs; a plain table does the job here because
  // what is tested is reading the right value, not interpreting a pretty chart.
  var TABLA_ANFIBIOS =
    '<div style="overflow-x:auto"><table style="border-collapse:collapse;font-size:.92em;margin:6px 0">' +
    '<caption style="text-align:left;font-weight:600;padding-bottom:6px">' +
    'Frogs found per hour of searching in four stretches of Verde Creek (2024)</caption>' +
    '<tr><th style="border:1px solid #ccc;padding:5px 10px;text-align:left">Stretch</th>' +
    '<th style="border:1px solid #ccc;padding:5px 10px">Tree cover</th>' +
    '<th style="border:1px solid #ccc;padding:5px 10px">Frogs per hour</th></tr>' +
    '<tr><td style="border:1px solid #ccc;padding:5px 10px">North</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">85%</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">14.2</td></tr>' +
    '<tr><td style="border:1px solid #ccc;padding:5px 10px">Central</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">60%</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">9.8</td></tr>' +
    '<tr><td style="border:1px solid #ccc;padding:5px 10px">South</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">35%</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">5.1</td></tr>' +
    '<tr><td style="border:1px solid #ccc;padding:5px 10px">East</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">12%</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">2.4</td></tr>' +
    '</table></div>';

  window.SAT_SETS.push({
    id: 'rw-mod1-sim',
    title: 'R&W — Module 1 Simulation (timed)',
    section: 'rw',
    level: 'Media',
    description: '27 questions in 32 minutes with the OFFICIAL order, domain mix and difficulty spread of the first module. It is the module that sets your score ceiling.',
    minutes: 32,
    questions: [

      /* ═══════════ CRAFT AND STRUCTURE (8) ═══════════
         Words in Context → Text Structure and Purpose → Cross-Text Connections,
         and within each skill, from easiest to hardest. */

      {
        id:'RWM1-01', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Words in Context',
        passage:"The archaeologist spent eleven years excavating a single hillside. Progress was measured in centimeters: a layer of ash one week, a fragment of pottery the next. Colleagues who preferred faster, broader surveys sometimes questioned the value of such ______ work, but the site eventually produced the most complete record of the settlement ever assembled.",
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{A:'painstaking', B:'careless', C:'spontaneous', D:'theoretical'},
        correct:'A',
        expCorrect:'The text describes eleven years of work measured in centimeters, layer by layer. "Painstaking" means done with extreme care and great effort: that is exactly it. And it fits the contrast the sentence sets up — colleagues who preferred "faster and broader" methods — and the end result, the most complete record of the settlement.',
        expWrong:{
          B:'"Careless" contradicts the whole passage: someone careless does not spend eleven years measuring in centimeters or produce the most complete record of the site.',
          C:'"Spontaneous" clashes with work planned over eleven years. On top of that, nothing in the text suggests improvisation.',
          D:'"Theoretical" is the opposite: the passage describes physical excavation, ash layers and pottery fragments. It is field work, not desk work.'
        },
        tip:'Before you look at the options, cover them and write your own word that fits. Here the text practically dictates it: "careful and slow". Then find which of the four resembles it. Choosing among the options first is what makes you fall for the one that "sounds right".'
      },
      {
        id:'RWM1-02', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Words in Context',
        passage:"When the composer Florence Price died in 1953, boxes of her manuscripts were left in an abandoned house outside Chicago. For decades her orchestral works were effectively ______: they existed, but no one could perform them because no one knew where the scores were. Their rediscovery in 2009 returned dozens of pieces to the concert repertoire.",
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{A:'celebrated', B:'lost', C:'unfinished', D:'controversial'},
        correct:'B',
        expCorrect:'The colon introduces the explanation of the missing word: "they existed, but nobody could play them because nobody knew where the scores were". That is the definition of lost. The last sentence confirms it, speaking of their "rediscovery".',
        expWrong:{
          A:'"Celebrated" contradicts the explanation after the colon: nobody could perform them. Besides, if they had been celebrated they would not have needed rediscovering.',
          C:'"Unfinished" does not fit: the text says the works existed and returned to the repertoire, that is, they were complete. What was missing was knowing where.',
          D:'"Controversial" appears nowhere. Nothing in the text suggests dispute, only the physical disappearance of the manuscripts.'
        },
        tip:'When the sentence carries a colon, a semicolon or a dash, what comes after usually DEFINES the missing word. Read that part first: here it hands you the answer.'
      },
      {
        id:'RWM1-03', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Words in Context',
        passage:"Reviewers of the novel praised its restraint. The narrator never announces what she feels; grief appears only in what she notices — an unwashed cup, a chair moved slightly from the table. Some readers found this ______ frustrating and wanted the emotion stated outright, but most agreed that the withholding was precisely what gave the book its force.",
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{A:'verbosity', B:'obscurity', C:'reticence', D:'hostility'},
        correct:'C',
        expCorrect:'"Reticence" is the quality of not saying what could be said. The text describes it without naming it: the narrator "never announces what she feels" and the grief shows only in details. The word has to sum up that restraint, and the last sentence confirms it by calling it "the withholding".',
        expWrong:{
          A:'"Verbosity" is the exact opposite: the text praises restraint, not an excess of words. The first sentence already says "praised its restraint".',
          B:'"Obscurity" is close but imprecise: obscurity means it cannot be understood, and the text says readers DO perceive the grief, only through details. It is not confusing, it is quiet.',
          D:'"Hostility" has no support: the frustration belongs to some readers reacting to the style; there is no hostility in the book or toward anyone.'
        },
        tip:'On medium-level ones, two options are usually "almost". Here obscurity and reticence point the same way, but only one is precise: obscure = it cannot be understood; reticent = it is not said. The text makes clear that it IS understood. Precision is the criterion, not approximation.'
      },
      {
        id:'RWM1-04', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Words in Context',
        passage:"Early accounts of the eruption were written by officials who had not been present and who relied on the reports of others. Later historians treated these documents with caution, noting that details grew more dramatic with each retelling. The narratives were not fabrications, exactly, but they were sufficiently ______ that any figure drawn from them had to be corroborated elsewhere before it could be used.",
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{A:'unreliable', B:'fraudulent', C:'inaccessible', D:'concise'},
        correct:'A',
        expCorrect:'The sentence has a hedging structure: "they were not fabrications, exactly, BUT they were ______ enough that…". You need a word softer than "lie" but strong enough to justify having to corroborate every fact in another source. "Unreliable" is exactly that middle ground, and it is supported by the details growing more dramatic with each retelling.',
        expWrong:{
          B:'"Fraudulent" is exactly what the sentence rules out: it says explicitly "not fabrications, exactly". Fraudulent implies intent to deceive, and the text denies it.',
          C:'"Inaccessible" contradicts the passage: the documents were available, historians read them and weighed them. The problem was their content, not access.',
          D:'"Concise" explains nothing: a text being brief does not force you to corroborate its figures. Besides, the text says the details GREW, not that they shrank.'
        },
        tip:'"It was not X, exactly, but…" is a signal that you are after something IN BETWEEN. The trap is the option that says X outright (here, fraudulent), which the sentence itself just ruled out. Read the logical structure before the vocabulary.'
      },
      {
        id:'RWM1-05', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Text Structure and Purpose',
        passage:"The axolotl, a salamander native to a few lakes near Mexico City, can regrow a lost limb — bone, muscle, nerve and skin — in a matter of weeks, and can do it repeatedly without scarring. Researchers studying tissue repair have therefore taken a strong interest in the species, hoping that the mechanism behind this ability might one day inform treatments for human injuries.",
        stem:'Which choice best describes the main purpose of the text?',
        choices:{
          A:'To explain why an unusual animal ability has attracted scientific attention',
          B:'To argue that the axolotl should be protected from extinction',
          C:'To compare the healing of salamanders with that of humans',
          D:'To describe the lakes near Mexico City where the axolotl lives'},
        correct:'A',
        expCorrect:'The text has two movements: first it describes the axolotl’s ability to regrow limbs, and then it says that FOR THAT REASON ("therefore") researchers took an interest in the species. The purpose is to explain why that ability caught the attention of science.',
        expWrong:{
          B:'The text argues nothing about conservation and never mentions extinction. Describing where it lives is not calling for it to be protected.',
          C:'There is no comparison: humans are mentioned once, as a possible future application, and how they heal is never described.',
          D:'The lakes appear in a subordinate clause of the first sentence. That is a detail of context, not the purpose of the text.'
        },
        tip:'The purpose is almost never the flashiest detail, it is what the text does AS A WHOLE. Watch the connectors: a "therefore" in the middle usually marks where the paragraph hinges.'
      },
      {
        id:'RWM1-06', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Text Structure and Purpose',
        passage:"It is often said that the Industrial Revolution began with a single invention. The claim is convenient but misleading. The steam engine of 1712 was inefficient and used almost exclusively to pump water out of mines; it changed little outside that trade. Only after seventy years of modification by dozens of workshops — better cylinders, better seals, a separate condenser — did the engine become general-purpose enough to reorganize manufacturing.",
        stem:'Which choice best describes the overall structure of the text?',
        choices:{
          A:'It presents a common claim, rejects it, and then supplies evidence of a slower and more distributed process',
          B:'It describes an invention, explains the single trade that used it, and then lists the workshops that improved it',
          C:'It compares two competing explanations of the same event and endorses the older one',
          D:'It traces the career of an inventor from a failed engine in 1712 to later success'},
        correct:'A',
        expCorrect:'The structure is in plain sight: sentence 1 presents the common claim ("it began with a single invention"), sentence 2 rejects it ("convenient but misleading"), and the rest supplies the evidence — seventy years, dozens of workshops, accumulated improvements. It is claim → rejection → evidence of a distributed process.',
        expWrong:{
          B:'Every piece is drawn from the text and the order is even right, which is what makes it tempting — but the workshops are never listed, only counted ("dozens"), and the option drops the move the paragraph is built on: the common claim and its rejection.',
          C:'There are not two explanations competing: there is a claim and its refutation. And far from endorsing the older one, the text calls it misleading in its second sentence.',
          D:'No inventor appears anywhere in the text, and the 1712 engine is not called a failure — it worked, just only for pumping mines. The text counts workshops in the plural precisely to deny that one person is the story.'
        },
        tip:'For structure, sum up each sentence in two words and read the sequence: "claim / I deny it / evidence". Almost always one option traces that sequence and the others describe a different text.'
      },
      {
        id:'RWM1-07', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Text Structure and Purpose',
        passage:"In her second collection, the poet returns to the image of the unlit lamp that appeared throughout her first. Critics initially read the repetition as a limitation — a writer circling the same material. But the lamp does different work in each book. In the first it stands for a waiting that might still end; in the second, for a waiting that the speaker has stopped expecting to end. The image is constant; what changes is what the speaker has come to believe about it.",
        stem:'Which choice best describes the function of the underlined sentence in the text as a whole? (“Critics initially read the repetition as a limitation — a writer circling the same material.”)',
        choices:{
          A:'It introduces an interpretation that the rest of the text goes on to revise',
          B:'It provides the evidence on which the text\'s central claim rests',
          C:'It concedes a weakness in the poet\'s work that the text does not dispute',
          D:'It explains why the poet chose to reuse the image in her second collection'},
        correct:'A',
        expCorrect:'The sentence presents the critics’ reading ("repetition = limitation") and the "But" opening the next sentence signals that the text is about to correct it. Everything that follows — the same object carrying two different meanings — serves to show it is not circular but evolving. Its function is to lay out the interpretation the text revises.',
        expWrong:{
          B:'It is not evidence: it is the position the text is disputing. The real evidence is the contrast between the two senses of the lamp, which comes later.',
          C:'There is no concession: the text does dispute that reading, and immediately. The word "But" at the start of the next sentence is the signal.',
          D:'The text never explains the poet’s decision or her motives. It describes the effect of the image, not the intent of whoever wrote it.'
        },
        tip:'On function questions, look at the NEXT sentence. A "But", "However" or "Yet" right after means the underlined sentence is what is about to be contradicted, not what the text maintains. It is the trick that solves half of these.'
      },
      {
        id:'RWM1-08', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections',
        passage:PAREADO,
        stem:'Based on the texts, how would the curators in Text 2 most likely respond to Kingsley\'s claim in Text 1 that a museum label “records a death, not a life”?',
        choices:{
          A:'By agreeing that specimens lose context but arguing that they gain something field observation cannot offer: verifiability by others',
          B:'By denying that a label records a death, since the specimen itself survives in the drawer',
          C:'By arguing that field observation is the only method that can be checked by other researchers',
          D:'By proposing that naturalists record the season and the water alongside each specimen so that the drawer would preserve both the death and the life'},
        correct:'A',
        expCorrect:'The curators do not deny the loss of context: they sidestep it by changing the criterion. Their defense is that field observation "could not be verified by anyone else", while a preserved specimen "could be examined by a hundred researchers over a century". That is: they concede Kingsley’s point and answer with a different advantage, verifiability.',
        expWrong:{
          B:'It picks a fight the curators never pick. They do not dispute what the label fails to record; they change the subject to what the specimen makes possible afterward — checking.',
          C:'It reverses Text 2 exactly. The curators say it is FIELD observation that "could not be checked by anyone else", and the preserved specimen that can.',
          D:'It is the sensible compromise nobody in the texts proposes. Text 2 defends the collections as they already are, on the single ground of verifiability; it recommends no change in how specimens are recorded.'
        },
        tip:'In paired passages, the answer is almost never "denies everything" or "agrees completely". It is usually "grants part of it and answers with a different criterion". Look for what each author concedes, not only where they differ.'
      },

      /* ═══════════ INFORMATION AND IDEAS (7) ═══════════
         Central Ideas and Details → Command of Evidence → Inferences. */

      {
        id:'RWM1-09', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Central Ideas and Details',
        passage:"Sourdough bread rises without commercial yeast. Instead, the baker maintains a starter: a mixture of flour and water that houses wild yeasts and bacteria drawn from the air and the grain itself. Because those organisms differ from place to place and are fed on different schedules, two bakers following the same recipe can produce loaves with noticeably different flavors.",
        stem:'Which choice best states the main idea of the text?',
        choices:{
          A:'Sourdough is more difficult to bake than bread made with commercial yeast',
          B:'The living starter used in sourdough explains why identical recipes yield different loaves',
          C:'Wild yeasts are more nutritious than the yeasts sold in stores',
          D:'Bakers should feed their starters on a consistent schedule'},
        correct:'B',
        expCorrect:'The text explains what a starter is (a living mix of wild yeasts and bacteria) and closes with the consequence: since those organisms vary by place and by what they are fed, the same recipe yields different breads. Option B joins the two halves.',
        expWrong:{
          A:'Difficulty is never mentioned. The text describes how it works, not whether it is easy or hard.',
          C:'Nutrition does not come up. The contrast with commercial yeast is about behavior, not nutritional value.',
          D:'It is advice the text does not give. It mentions that feeding schedules differ as a CAUSE of the variation, not as something to be corrected.'
        },
        tip:'The central idea has to cover the whole text. If an option only describes the first sentence or only the last, it is a detail. Here the right one covers both: what a starter is AND what effect it has.'
      },
      {
        id:'RWM1-10', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Central Ideas and Details',
        passage:"For most of the twentieth century, the Sahara was assumed to have been arid for millions of years. Sediment cores drilled from the seabed off West Africa have revised that picture. The cores contain layers of pollen from grasses and freshwater algae, deposited as recently as six thousand years ago, when rivers and lakes covered much of what is now sand. The desert is real, but it is young.",
        stem:'Which choice best states the main idea of the text?',
        choices:{
          A:'Sediment cores are the most reliable method available for studying ancient climates',
          B:'The Sahara has always contained scattered lakes and rivers beneath its sand',
          C:'Evidence from seabed cores shows that the Sahara became a desert far more recently than was believed',
          D:'Pollen preserves better in seabed sediment than in desert sand'},
        correct:'C',
        expCorrect:'The text sets a belief ("arid for millions of years") against evidence that corrects it (grass pollen and freshwater algae from a mere six thousand years ago). The last sentence sums it up: "The desert is real, but it is young". Option C says exactly that.',
        expWrong:{
          A:'The text uses the sediment cores as a source of evidence, but never compares them with other methods or claims they are the most reliable.',
          B:'It reverses the timing: rivers and lakes COVERED the area six thousand years ago; it does not say they still exist beneath the sand today.',
          D:'Pollen preservation is not discussed. The pollen is the evidence, not the topic.'
        },
        tip:'When a text opens with "it was believed that…" or "it was assumed that…", the central idea is almost always the CORRECTION, not the old belief. Look for what evidence shows up and what changes.'
      },
      {
        id:'RWM1-11', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Central Ideas and Details',
        passage:"In 1900 the physician Ronald Ross published a set of equations describing how malaria spreads through a population of mosquitoes and people. The equations implied something counterintuitive: it was not necessary to eliminate every mosquito. Below a certain density, each infection would on average produce fewer than one new infection, and the disease would die out on its own. Control programs since have been built on that threshold rather than on eradication.",
        stem:'Which choice best states the main idea of the text?',
        choices:{
          A:'Ross showed that malaria could be controlled by reducing mosquitoes below a threshold rather than eliminating them',
          B:'Ross was the first to prove that mosquitoes carry malaria from one person to another',
          C:'Ross’s equations have done more to reduce malaria than any mosquito-control program',
          D:'Control programs since 1900 have failed whenever they settled for a threshold instead of eliminating every single mosquito'},
        correct:'A',
        expCorrect:'The text presents the counterintuitive implication of the equations — you do not need to wipe out every mosquito, just drop below a certain density — and closes by saying control programs were built on that threshold. That is the complete idea.',
        expWrong:{
          B:'The text credits Ross with the equations, not with the discovery of the carrier — which it treats as already known when he wrote them. Plausible outside the passage, absent inside it.',
          C:'The text never weighs the equations against anything. It says programs were BUILT on the threshold the equations described, which makes the two work together rather than compete.',
          D:'It reverses the passage twice: the programs were built on the threshold, not against it, and the text reports no failure of any kind. The absolute "every single mosquito" is exactly what the equations showed to be unnecessary.'
        },
        tip:'Watch out for options that are true in the real world but are not in the text. The question is what THIS passage says. If you have to bring in outside information to justify it, it is wrong.'
      },
      {
        id:'RWM1-12', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence (Textual)',
        passage:"A team of linguists proposed that children do not learn grammar by imitation alone. If imitation were the whole story, they argued, children should produce only forms they have actually heard from adults. The team therefore looked for utterances that a child could not have copied.",
        stem:'Which finding, if true, would most directly support the linguists\' proposal?',
        choices:{
          A:'Children in the study regularly produced forms such as “goed” and “breaked,” which no adult around them used',
          B:'Children in the study repeated their parents\' sentences accurately after hearing them twice',
          C:'Children raised in larger families were found to begin speaking at a slightly earlier age',
          D:'Adults in the study simplified their vocabulary when speaking to young children'},
        correct:'A',
        expCorrect:'The proposal is that children do NOT learn by imitation alone, and the text itself says what the proof would be: finding expressions the child could not have copied. "Goed" and "breaked" are exactly that — regularizations no adult says. They prove the child is applying a rule of their own.',
        expWrong:{
          B:'It supports the OPPOSITE position: repeating precisely what was heard is exactly imitation.',
          C:'Family size and the age of onset say nothing about whether the mechanism is imitation or rule. It is a fact irrelevant to the hypothesis.',
          D:'Adults simplifying describes the input, not how the child processes it. It does not distinguish between the two explanations.'
        },
        tip:'The text almost always tells you what evidence it is after: here, "utterances that a child could not have copied". Underline that phrase and pick the option that satisfies it literally. Do not judge which sounds more scientific.'
      },
      {
        id:'RWM1-13', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence (Quantitative)',
        figure:TABLA_ANFIBIOS,
        passage:"A biologist claims that frog density in Verde Creek depends on shade: the more tree cover a stretch has, the more frogs are found per hour of searching.",
        stem:'Which choice most effectively uses data from the table to support the biologist\'s claim?',
        choices:{
          A:'The North stretch, with 85% cover, recorded 14.2 frogs per hour, while the East stretch, with 12%, recorded 2.4',
          B:'The South stretch recorded 5.1 frogs per hour, more than the East stretch’s 2.4',
          C:'The East stretch, with 12% cover, recorded 2.4 frogs per hour, more than any other stretch',
          D:'All four stretches were searched for the same number of hours during 2024, so the counts can be compared directly'},
        correct:'A',
        expCorrect:'The claim is about a RELATIONSHIP between two variables: more shade, more frogs. To support it you have to cite both variables in at least two stretches, and it is best if they are the extremes. Option A does exactly that: 85% → 14.2 against 12% → 2.4.',
        expWrong:{
          B:'Both figures are read correctly off the table, and the comparison even runs the right way — but neither tree-cover percentage appears. A comparison of frog counts alone cannot support a claim about shade.',
          C:'It names both variables, which is the filter most students apply, and then misreads the column: 2.4 is the LOWEST count of the four stretches, not the highest. Grabbing the extreme row without checking the number lands you here.',
          D:'It is a fact about the design of the study, not about the relationship. And the table reports a RATE, frogs per hour, which already controls for effort: equal search time would still say nothing about shade.'
        },
        tip:'Fixed rule for table or graph questions: if the claim relates TWO variables, the right answer has to name BOTH. It is the fastest filter there is — it usually rules out three options without thinking.'
      },
      {
        id:'RWM1-14', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences',
        passage:"The bar-tailed godwit flies from Alaska to New Zealand without landing, a journey of some eleven thousand kilometers completed in about nine days. Before departing, the bird nearly doubles its body weight in fat and its digestive organs shrink, since they will not be needed in flight. A bird that is delayed on the Alaskan coast and begins to burn through that reserve before leaving ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'may lack the fuel required to complete the crossing without stopping',
          B:'will regrow its digestive organs before attempting the flight again',
          C:'is likely to choose a shorter route across the Pacific the following year',
          D:'tends to arrive in New Zealand earlier than birds that departed on time'},
        correct:'A',
        expCorrect:'The text establishes two things: the journey is nonstop and the stored fat is the fuel. If the bird starts burning that reserve BEFORE it leaves, the conclusion that follows directly is that it may not have enough to cross without stopping. No outside information is needed.',
        expWrong:{
          B:'The text says the digestive organs shrink because they go unused in flight, but never mentions them regrowing before a second attempt. It is a plausible invention.',
          C:'There is nothing about choosing routes or about what the bird does the following year. It is a leap the text does not license.',
          D:'It is the opposite of what you would expect: less fuel does not produce an earlier arrival. And the text says nothing about arrival times.'
        },
        tip:'An SAT inference is a short step, not a theory. Ask yourself: does this follow ONLY from what the text says? If you have to assume a new fact (that the organs regrow, that it picks routes), that option is wrong.'
      },
      {
        id:'RWM1-15', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences',
        passage:"A study of restaurant menus found that dishes described with their region of origin — “Tuscan white beans,” “Oaxacan mole” — were ordered more often than the same dishes listed by ingredients alone. The effect held even when diners were told, before ordering, that the descriptions had been assigned at random and did not reflect where the recipes came from. This suggests that ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'the appeal of the regional labels does not depend on diners believing them to be accurate',
          B:'diners are generally unable to distinguish between regional cuisines by taste',
          C:'restaurants that use regional labels earn more revenue than those that do not',
          D:'the diners in the study did not read the descriptions before placing their orders'},
        correct:'A',
        expCorrect:'The key is the second fact: the effect persisted EVEN when they were told the labels were random and false. If the effect survives knowing the label is not true, then it does not depend on believing it. That is exactly what A says, and it is all the evidence licenses.',
        expWrong:{
          B:'The study measured what they ordered, not whether they could tell flavors apart. Their palate was never tested.',
          C:'It jumps from "more were ordered" to "they make more money", which involves prices and costs the text says nothing about.',
          D:'It contradicts the study: if they had not read the descriptions, the labels would have had no effect at all — and they did.'
        },
        tip:'On the hard ones, the decisive fact is usually the sentence starting with "even when" or "although". That is the experimental control, and the right conclusion is almost always the one that explains it. If an option ignores that sentence, it is not the answer.'
      },

      /* ═══════════ STANDARD ENGLISH CONVENTIONS (7) ═══════════
         From easiest to hardest, WITHOUT grouping by skill — that is what the
         official framework (p. 51) specifies for this domain and only for this one. */

      {
        id:'RWM1-16', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Boundaries',
        passage:"The eruption of Mount Tambora threw enough ash into the upper atmosphere to dim sunlight across the Northern Hemisphere for months. After the volcano fell silent in 1815 ______ farmers across Europe recorded a summer that never arrived: frost in June, failed harvests, and bread riots by autumn.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'1815, farmers', B:'1815 farmers', C:'1815; farmers', D:'1815: farmers'},
        correct:'A',
        expCorrect:'"After the volcano fell silent in 1815" is an introductory element: it is not a complete sentence, it sets up the main clause. An introductory element is separated with a COMMA from the sentence that follows.',
        expWrong:{
          B:'With no punctuation the introductory element and the subject run together, and for a moment "1815 farmers" reads like a group of farmers. The comma exists precisely to prevent that.',
          C:'A semicolon joins two INDEPENDENT sentences. "After the volcano fell silent in 1815" cannot stand on its own, so it does not qualify.',
          D:'A colon announces an explanation, a list or a definition of what came before. There is nothing to announce here: it is simply a temporal introduction.'
        },
        tip:'One-second test: cover everything before the blank. If what is left on the left CANNOT stand as a sentence on its own, the answer is a comma — never a semicolon.'
      },
      {
        id:'RWM1-17', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense',
        passage:"When the composer Florence Price died in 1953, boxes of her papers were left behind in a house outside Chicago and forgotten for more than fifty years. The collection of manuscripts recovered from the abandoned house ______ dozens of orchestral scores that had been considered lost.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'includes', B:'include', C:'are including', D:'have included'},
        correct:'A',
        expCorrect:'The subject is "The collection", which is singular. Everything between the subject and the verb — "of manuscripts recovered from the abandoned house" — is a prepositional phrase that does not change the number. A singular collection calls for a singular verb: "includes".',
        expWrong:{
          B:'"Include" is plural and agrees with "manuscripts", which sits inside a prepositional phrase. The head of the subject is never inside an "of…".',
          C:'"Are including" is plural and on top of that puts into progressive something that is a permanent state, not an action in progress.',
          D:'"Have included" is also plural, and the present perfect suggests a change over time that the context does not raise.'
        },
        tip:'Cross out with your finger everything between "of" and the verb. What is left is the real subject. It is the most common agreement error on the test and covering it up solves it.'
      },
      {
        id:'RWM1-18', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Boundaries',
        passage:"The chemists repeated the reaction twice, changing only one variable between attempts so that any difference could be attributed to that variable alone. The first trial produced no measurable effect ______ the second, run at a higher temperature, produced a clear one.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'effect;', B:'effect,', C:'effect', D:'effect:'},
        correct:'A',
        expCorrect:'On both sides there are complete, independent sentences: "The first trial produced no measurable effect" and "the second… produced a clear one". Two related independent sentences, with no conjunction in between, are joined with a SEMICOLON.',
        expWrong:{
          B:'A single comma between two complete sentences is a comma splice, one of the errors the SAT tests most often. You need a semicolon, or a comma PLUS a conjunction.',
          C:'With nothing there you get two sentences run together (run-on). The problem is the same as with the lone comma, only worse.',
          D:'A colon announces that what follows explains or specifies what came before. Here the second sentence does not explain the first: it contrasts with it.'
        },
        tip:'Mechanical rule: complete sentence + complete sentence = semicolon, or period, or comma + FANBOYS (for, and, nor, but, or, yet, so). Never a comma alone. Verify that both sides can live on their own.'
      },
      {
        id:'RWM1-19', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense',
        passage:"The journal had invited four laboratories to test the same hypothesis independently, without sharing results until every analysis was complete. Each of the four research teams submitted ______ findings to the journal before the deadline.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'its', B:'their', C:'it\'s', D:'they\'re'},
        correct:'A',
        expCorrect:'The subject is "Each", which is ALWAYS singular no matter that "of the four research teams" follows it. A singular antecedent calls for a singular possessive: "its".',
        expWrong:{
          B:'"Their" is plural and agrees with "teams", which sits inside the prepositional phrase. "Each" is the head and it is singular.',
          C:'"It\'s" is the contraction of "it is", not a possessive. Substitute it in your head: "Each team submitted it is findings" makes no sense.',
          D:'"They\'re" is "they are", also a contraction and plural on top of that. Two errors in one.'
        },
        tip:'Memorize the ones that are singular even though they look plural: each, every, either, neither, one, anyone, everyone, nobody. The SAT puts an "of the…" after them precisely to tempt you with the plural.'
      },
      {
        id:'RWM1-20', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries',
        passage:"Few animals recover from injury the way this one does: a lost leg returns complete with bone, muscle, nerve, and skin, and it can happen more than once in the same individual. The axolotl ______ can regrow entire limbs without scarring, has become a standard subject in tissue-repair research.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'a salamander native to central Mexico,', B:'a salamander native to central Mexico', C:'a salamander native to central Mexico;', D:'a salamander, native to central Mexico'},
        correct:'A',
        expCorrect:'"a salamander native to central Mexico, which can regrow entire limbs without scarring" is a non-essential appositive: you can remove it and the sentence still stands. A non-essential element goes between TWO commas, and the second is already in the text after "scarring". The opening one is missing.',
        expWrong:{
          B:'It leaves the appositive with a closing comma but no opening one. The commas around a non-essential element come in PAIRS: one alone is always wrong.',
          C:'A semicolon demands independent sentences on both sides, and "a salamander native to central Mexico" is not a sentence.',
          D:'It puts the comma in the wrong place, separating “a salamander” from its own modifier and still leaving the appositive unclosed.'
        },
        tip:'The commas around a non-essential element are like parentheses: if you see one, look for the other. When the text already has a closing comma, the question is almost always where the opening one goes.'
      },
      {
        id:'RWM1-21', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense',
        passage:"For most of the twentieth century the Sahara was assumed to have been arid for millions of years. That assumption rested on the absence of contrary evidence rather than on direct measurement, and the evidence, when it came, arrived from the ocean floor. Drilled from the seabed off the coast of West Africa, ______",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{
          A:'the cores revealed pollen from grasses that no longer grow in the region.',
          B:'researchers found pollen in the cores from grasses that no longer grow in the region.',
          C:'there was pollen in the cores from grasses that no longer grow in the region.',
          D:'it was the pollen in the cores that showed grasses no longer grow in the region.'},
        correct:'A',
        expCorrect:'The opening phrase "Drilled from the seabed" is a participial modifier, and it has to describe the subject that comes immediately after. What was drilled from the seabed are the cores, so the subject of the main clause has to be "the cores".',
        expWrong:{
          B:'It leaves the modifier dangling on "researchers": it literally says the researchers were drilled from the seabed. It is the classic misplaced-modifier error.',
          C:'"There" is not a real subject that can be drilled. The modifier is left with nothing to attach to.',
          D:'The subject becomes "it", which points to the pollen, and the pollen was not drilled from the sea floor either: it was extracted inside the cores.'
        },
        tip:'When the sentence opens with "-ing" or "-ed" followed by a comma, read ONLY the first word after the comma and ask: is this what performed, or what received, the action of the modifier? If not, the option is wrong no matter how good it sounds.'
      },
      {
        id:'RWM1-22', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Boundaries',
        passage:"Before 1900, campaigns against malaria assumed that the only path to control was the total removal of the insect that carried it — an aim that no program had ever achieved. Ross's equations pointed to a conclusion that reshaped public health policy ______ malaria could be defeated without killing every mosquito.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'policy:', B:'policy,', C:'policy, and', D:'policy; and'},
        correct:'A',
        expCorrect:'What comes before is a complete sentence that ANNOUNCES something — "a conclusion that…" — and what follows is that conclusion. That is exactly what a colon is for: introducing the explanation, specification or content of what was just announced. On top of that, the word "conclusion" demands its content.',
        expWrong:{
          B:'A single comma between two complete sentences is a comma splice. And even if it were not, the comma does not mark the relationship of "this is the conclusion".',
          C:'", and" is grammatically valid but it loses the meaning: it presents the two parts as parallel facts, when the second IS the conclusion the first is talking about.',
          D:'"; and" mixes two ways of joining that do not combine: the semicolon already joins, and so does the conjunction. Together they are redundant.'
        },
        tip:'When the first part contains a word that promises content — conclusion, reason, question, problem, discovery, following — and the second delivers it, the answer is a COLON. It is the most reliable signal in the whole domain.'
      },

      /* ═══════════ EXPRESSION OF IDEAS (5) ═══════════
         Rhetorical Synthesis → Transitions, following the skill order in the
         official framework (table 10). */

      {
        id:'RWM1-23', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis',
        passage:"While researching a topic, a student has taken the following notes:<br>• The axolotl is a salamander native to a few lakes near Mexico City.<br>• It can regrow an entire limb — bone, muscle, nerve and skin — in weeks.<br>• It does so repeatedly and without scarring.<br>• In the wild it is critically endangered.<br>• It is one of the most widely bred laboratory species in the world.",
        stem:'The student wants to emphasize a contrast between the axolotl\'s situation in the wild and in laboratories. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Although the axolotl is critically endangered in its natural habitat, it is one of the most widely bred laboratory species in the world.',
          B:'The axolotl, a salamander native to a few lakes near Mexico City, can regrow an entire limb — bone, muscle, nerve and skin — in a matter of weeks.',
          C:'The axolotl can regrow bone, muscle, nerve and skin repeatedly, and it can do so without scarring.',
          D:'The axolotl is critically endangered in the wild, and it is one of the most widely bred laboratory species in the world.'},
        correct:'A',
        expCorrect:'The goal calls for EMPHASIZING A CONTRAST between two situations. Option A uses the two relevant notes (endangered in the wild / abundant in laboratories) and joins them with "Although", which is what marks the contrast explicitly.',
        expWrong:{
          B:'Four of the five notes are in here and every one of them is accurate, which is what makes it the longest and the most tempting. They are simply the wrong notes: origin and regeneration, not the wild and the laboratory.',
          C:'It describes the regeneration ability, accurately and in the notes’ own words. It still names neither of the two situations the prompt asked to set against each other.',
          D:'It now carries exactly the same two facts as the right answer, in the same order. The only difference is the connector: "and" stacks them as two things that are both true, while "Although" is what turns them into a contrast. That single word is the whole question.'
        },
        tip:'These are solved in two steps, in this order: (1) what does THE PROMPT ask for?, (2) which option delivers it? There is almost always an option with true information that does not meet the goal — that is the main trap. Here D is correct as a fact and fails as a contrast.'
      },
      {
        id:'RWM1-24', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis',
        passage:"While researching a topic, a student has taken the following notes:<br>• Sediment cores are drilled from the sea floor off West Africa.<br>• They contain layers of grass pollen and freshwater algae.<br>• Those layers were deposited only six thousand years ago.<br>• Throughout the twentieth century the Sahara was assumed to have been arid for millions of years.<br>• Today the Sahara is the largest hot desert in the world.",
        stem:'The student wants to present the sediment cores as evidence that overturned an earlier assumption. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Although the Sahara was assumed throughout the twentieth century to have been arid for millions of years, the sediment cores contain freshwater pollen deposited only six thousand years ago.',
          B:'The sediment cores, drilled from the sea floor off West Africa, contain layers of grass pollen and freshwater algae deposited only six thousand years ago.',
          C:'The Sahara, today the largest hot desert in the world, was assumed throughout the twentieth century to have been arid for millions of years, long before anyone drilled the sea floor off West Africa.',
          D:'Because the pollen layers in the cores were deposited only six thousand years ago, the Sahara is today the largest hot desert in the world.'},
        correct:'A',
        expCorrect:'The goal is to present the cores as evidence THAT OVERTURNED an earlier assumption. That takes three things and A has them all: the old assumption, the new evidence, and the contrast between them ("Although… the cores contain…").',
        expWrong:{
          B:'It is now the complete evidence, dating included, and it is still only half the job: the assumption it overturned never appears, so nothing is being overturned. A finding with nothing to contradict is just a finding.',
          C:'It states the old assumption and even gestures at the drilling, but the cores never function as evidence here — the sentence never says what they contained or that the assumption was wrong. The refutation is mentioned as a date, not made.',
          D:'It joins two true notes with "Because", inventing a causal link the notes never support: recent pollen does not make the Sahara large today. And the assumption the cores overturned is still missing.'
        },
        tip:'When the prompt asks you to show that something "refuted", "changed" or "overturned" an earlier idea, the answer has to contain BOTH: the old idea and the new evidence. An option with only the evidence is always incomplete.'
      },
      {
        id:'RWM1-25', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis',
        passage:"While researching a topic, a student has taken the following notes:<br>• Mary Kingsley argued that a species had to be studied where it lives.<br>• Specimens shipped to European museums arrived stripped of their context.<br>• Curators answered that field observation could not be verified by anyone else.<br>• A preserved specimen could be examined by a hundred researchers over a century.<br>• The debate occupied naturalists for much of the nineteenth century.",
        stem:'The student wants to explain why the curators\' position was difficult to dismiss, without endorsing it. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The curators acknowledged the loss of context, but pointed out something field observation did not offer: a preserved specimen could be verified by a hundred researchers over a century.',
          B:'The curators were right that field observation could not be verified by anyone else, whereas a preserved specimen could be examined and re-examined by a hundred researchers over a century.',
          C:'Mary Kingsley argued that a species had to be studied where it lives, since specimens shipped to museums arrived stripped of their context.',
          D:'The debate between naturalists and curators occupied scholars for much of the nineteenth century.'},
        correct:'A',
        expCorrect:'The prompt asks for two things at once: explain the STRENGTH of the curators’ argument and NOT endorse it. Option A gives the reason it was hard to dismiss (verifiability, which field work did not offer) using reporting verbs — "acknowledged", "pointed out" — that attribute the position to them without the student adopting it.',
        expWrong:{
          B:'The explanation is complete, accurate and uses both of the relevant notes — which is exactly what makes it the longest option and the hardest to let go of. It fails on its fourth word: "were right" endorses the position, and the prompt asked the student to explain its strength WITHOUT endorsing it.',
          C:'It presents Kingsley’s position, that is, the opposing one. It explains nothing about the curators.',
          D:'It is about how long the debate lasted. That is information from the notes but it explains neither position.'
        },
        tip:'When the prompt has TWO conditions ("explain X without doing Y"), check both separately in each option. The SAT favorite trap is an option that meets the first brilliantly and violates the second in its very first word.'
      },
      {
        id:'RWM1-26', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Transitions',
        passage:"The steam engine of 1712 was used almost exclusively to pump water out of mines, and it changed little outside that trade. ______ decades of modification by dozens of workshops eventually made the machine general-purpose enough to reorganize manufacturing.",
        stem:'Which choice completes the text with the most logical transition?',
        choices:{A:'However,', B:'Therefore,', C:'For example,', D:'Similarly,'},
        correct:'A',
        expCorrect:'The first sentence says the machine changed little; the second, that it ended up reorganizing manufacturing. These are opposing ideas, and a CONTRAST transition is what fits: "However".',
        expWrong:{
          B:'"Therefore" marks consequence. The machine changing little does not CAUSE it to later change everything: it contradicts it.',
          C:'"For example" announces an example of what came before. The second sentence does not exemplify the limited use in mines, it reverses it.',
          D:'“Similarly” signals likeness, but the two sentences say opposite things.'
        },
        tip:'Ignore the transition the text carries and sum up the two sentences in one word each. Then ask: are they alike, do they clash, or does one cause the other? Only then look at the options. Choosing by "which sounds right" is the error that sinks these.'
      },
      {
        id:'RWM1-27', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Transitions',
        passage:"The bar-tailed godwit nearly doubles its body weight in fat before departing, and its digestive organs shrink because they will not be needed aloft. The bird therefore carries the maximum fuel at the minimum weight. ______ a delay of even a few days on the Alaskan coast can consume enough of that reserve to put the crossing at risk.",
        stem:'Which choice completes the text with the most logical transition?',
        choices:{A:'Because of this precision,', B:'In addition,', C:'By contrast,', D:'Regardless,'},
        correct:'A',
        expCorrect:'The previous sentence establishes that the bird carries the maximum fuel at the minimum weight, that is, the margin is razor thin. The sentence that follows explains the CONSEQUENCE of that precision: any delay breaks the calculation. "Because of this precision" names the cause and connects it to its effect.',
        expWrong:{
          B:'"In addition" adds an independent fact, and here the third sentence is not one more fact: it follows directly from the second.',
          C:'"By contrast" marks opposition, but the fragility in the face of a delay does not oppose the precision of the system — it is its consequence.',
          D:'"Regardless" dismisses what came before as irrelevant, and it is exactly the other way around: the precision in the previous sentence is what EXPLAINS the risk.'
        },
        tip:'Watch the difference between "adds on" and "follows from". If the next sentence follows logically from the previous one, the transition is consequence, not addition. "In addition" is the most frequent trap at the medium level.'
      }
    ]
  });
})();
