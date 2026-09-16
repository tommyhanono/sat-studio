/* SAT Studio question set — Reading & Writing: Information and Ideas — Brutal (BID-01 a BID-34)
   Las tres destrezas del dominio que NO piden leer un grafico:
     · BID-01..BID-11  Central Ideas and Details (11)
     · BID-12..BID-23  Command of Evidence: Textual (12)
     · BID-24..BID-34  Inferences (11)
   El regex de la taxonomia corre contra `skill` + los primeros 160 caracteres del
   `stem`, y dentro de este dominio se prueba en orden central → quant → textual →
   infer. Por eso:
     · las de textual no dicen "central", "main idea", "detail", "summar", "gist",
       "overall point", "topic sentence" ni ninguna palabra de cuantitativo
       (graph/table/chart/figure/bar/scatter/quantitative/data in context);
     · las de inferencia ademas evitan "evidence", "quotation", "quote",
       "support(s)", "weaken(s)", "undermine", "illustrat", "hypothesis" y
       "finding" — de ahi que ninguna diga "which choice best supports".
   Todo el tier brutal: difficulty:'Dificil' + extreme:true en la PREGUNTA
   (difficulty:'Extreme' no existe y mandaria la pregunta al modulo facil) y
   level:'Extreme' en el SET.
   Sin tablas ni graficos. Pasajes originales de 60 a 130 palabras; obras,
   personas y lugares inventados. */
(function(){
  window.SAT_SETS.push({
    id: 'rw-brutal-ideas-d',
    title: 'Information and Ideas — Brutal',
    section: 'rw',
    level: 'Extreme',
    description: 'Central ideas that are a tension rather than a thesis, evidence that has to separate two rival accounts, and completions that only one option necessarily licenses.',
    minutes: 38,
    questions: [

      /* ===================== CENTRAL IDEAS AND DETAILS (BID-01 a BID-11) ===================== */

      {
        id:'BID-01', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Central Ideas and Details — central idea (literary criticism)',
        passage:"For decades, readers of Thorsten Vellacott’s 1911 novel <i>The Quarry Gate</i> praised its long descriptions of the moorland as the book’s real achievement and treated the plot as a thin frame around them. Critic Adaeze Morrow-Kell does not dispute that those descriptions are the finest writing in the book. She argues, however, that they were never built to be read on their own: each one is delivered by a character who is at that moment refusing to say something, and the moor grows most detailed exactly where the speaker is least honest. On Morrow-Kell’s reading, the landscape is not a backdrop the plot interrupts. It is the plot, conducted by other means.",
        stem:'Which choice best states the main idea of the text?',
        choices:{
          A:'Vellacott’s moorland descriptions are the finest writing in The Quarry Gate.',
          B:'Morrow-Kell reads the moor passages as the novel’s evasions at work, not as scenery.',
          C:'Readers have long treated the plot of The Quarry Gate as a frame around its descriptions.',
          D:'The characters in The Quarry Gate are dishonest with one another for the whole novel.'
        },
        correct:'B',
        expCorrect:'The first two sentences lay out the received view and Morrow-Kell’s concession to it. The pivot is “She argues, however”: the descriptions sit where a character is refusing to speak, and they thicken as the speaker grows less honest. The last line states the claim outright — the landscape “is the plot, conducted by other means.”',
        expWrong:{
          A:'True, and agreed on by both sides: Morrow-Kell explicitly does not dispute it. A point nobody is arguing about cannot be the point the text is arguing.',
          C:'This is the received reading the passage sets out in order to correct. It belongs to the opening frame, not to the claim the text arrives at.',
          D:'Cited but stretched too far. The text ties thicker description to a speaker’s evasion at particular moments; it never claims the characters are dishonest throughout the book.'
        },
        tip:'When a text opens on a view someone else holds, that view is the setup, not the point. Find the pivot — however, instead, in fact — and read the main idea off the far side of it.'
      },

      {
        id:'BID-02', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Central Ideas and Details — central idea (art history)',
        passage:"The murals of the Brissenden Chapel were painted in 1490 and cleaned in 1908, and the cleaning is now the problem. Conservator Halvard Nyquist has shown that the 1908 team stripped away a layer of dark varnish the painter had applied himself, together with the soot that had settled on top of it. Putting the varnish back would return the tone the painter intended but would once again hide the drawing underneath. Leaving the walls as they stand keeps the drawing visible while presenting as original a brightness the painter never approved. Nyquist writes that the chapel offers no version of itself that is both intact and honest.",
        stem:'Which choice best states the central idea of the text?',
        choices:{
          A:'Nyquist argues that the 1908 cleaning team worked carelessly and damaged the plaster.',
          B:'The dark varnish should be restored so the murals show the tone the painter intended.',
          C:'The murals have looked brighter since 1908 than at any earlier point in their history.',
          D:'No way of displaying the Brissenden murals can be faithful to the painter and to the drawing at the same time.'
        },
        correct:'D',
        expCorrect:'The passage builds a fork and then refuses to take either branch: varnish back means the painter’s tone but a hidden drawing; varnish off means a visible drawing but a false brightness. Nyquist’s closing sentence names the fork itself as the finding — “no version of itself that is both intact and honest.” The central idea is the conflict, not a way out of it.',
        expWrong:{
          A:'Not what the text says. The 1908 team removed a layer nobody then recognized as the painter’s own; the passage never calls the work careless and never mentions damaged plaster.',
          B:'This picks one branch of the fork the text deliberately leaves open, and the passage says outright that restoring the varnish would hide the drawing again.',
          C:'True but far too narrow: it follows from stripping a dark varnish, and it is one consequence inside the argument rather than the point Nyquist draws from it.'
        },
        tip:'When the closing sentence says no option is fully satisfactory, the central idea is the tension. Any choice that settles it in one direction has taken a side the author refused to take.'
      },

      {
        id:'BID-03', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Central Ideas and Details — stated detail (anthropology)',
        passage:"Ethnographer Wren Okonjo-Sayles spent four seasons with the salt caravans of the Ait Zerrad, who carry blocks of rock salt from an inland pan to the river markets. She found that a caravan’s pace is set not by the animals but by the youngest driver, who is handed the lead rope on the first morning and keeps it. Older drivers say the arrangement wastes time, and Okonjo-Sayles measured that it does. The practice survives, she argues, because a caravan that arrives late with everyone still speaking to one another is worth more to the group than one that arrives early without that.",
        stem:'According to the text, what did Okonjo-Sayles measure about caravans led by the youngest driver?',
        choices:{
          A:'They reach the river markets about a day and a half later than other caravans.',
          B:'They travel more slowly because it is the pack animals that set the pace on the inland route.',
          C:'They keep everyone in the group on better terms than caravans led by an experienced driver.',
          D:'They follow the arrangement that the older drivers of the caravan most strongly prefer.'
        },
        correct:'A',
        expCorrect:'The text reports the measurement directly: the older drivers say the arrangement wastes time, and Okonjo-Sayles “measured that it does,” with a caravan under an experienced driver reaching market roughly a day and a half sooner. That gap is the measured quantity.',
        expWrong:{
          B:'Reversed. The passage says the pace is set “not by the animals but by the youngest driver,” so the animals are exactly what it rules out.',
          C:'This is her explanation for why the practice survives, not something she measured. The question asks for the measurement, and social cohesion is the argument she builds on top of it.',
          D:'Reversed. The older drivers are the ones who say the arrangement wastes time; nothing marks it as their preference.'
        },
        tip:'On a detail question, separate what a researcher measured from what she concluded. The conclusion is usually the most quotable sentence in the passage and the most tempting wrong answer.'
      },

      {
        id:'BID-04', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Central Ideas and Details — central idea (botany)',
        passage:"Gardeners have long reported that a tomato plant pinched back early yields more fruit, and the usual explanation is that the plant, deprived of a growing tip, pushes sugar into the fruit it already carries. Plant physiologist Odalys Renner-Tapp finds that redistribution real but small. In her trials the larger effect came from timing: a pinched plant flowers about nine days later, which in her valley slides the whole fruiting window past the week of heaviest spider-mite pressure. Plants pinched in a greenhouse with no mites gained almost nothing. The technique works, Renner-Tapp concludes, but not for the reason the gardeners give.",
        stem:'Which choice best states the main idea of the text?',
        choices:{
          A:'Pinching a tomato plant moves sugar from the growing tip into the fruit it already carries.',
          B:'Renner-Tapp found that pinched plants flower about nine days later than unpinched ones.',
          C:'Pinching helps in Renner-Tapp’s valley by delaying fruiting past the worst mite week, not by moving sugar.',
          D:'Tomato plants raised in a greenhouse are less productive than those grown outdoors.'
        },
        correct:'C',
        expCorrect:'The passage grants the sugar story and then shrinks it — “real but small” — before naming the larger effect: a nine-day delay in flowering that carries the fruit past peak mite pressure. The greenhouse trial is the control that seals it, and the last sentence says it plainly: the technique works, but not for the reason gardeners give.',
        expWrong:{
          A:'This is the explanation the text sets up in order to demote. Renner-Tapp does not deny it; she measures it and finds it small, which makes it the setup rather than the point.',
          B:'A true detail, and the mechanism behind the answer — but on its own it says nothing about mites or about why pinching helps, which is what the passage is explaining.',
          D:'Not claimed. The greenhouse plants gained almost nothing from pinching; the text never compares greenhouse and outdoor yields.'
        },
        tip:'A passage that reports a small effect and a large one is telling you which is the main idea. The concession gets measured; the point gets the last sentence.'
      },

      {
        id:'BID-05', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Central Ideas and Details — central idea (economic history)',
        passage:"The port of Vansgard kept two sets of books between 1640 and 1690: a ledger of duties owed and a ledger of duties collected. Historian Baruch Enfield-Marsh notes that the gap between them widens in every decade, and that a modern reader is tempted to read the gap as a record of corruption. Enfield-Marsh grants that some of it is. But he shows that the council itself printed the shortfall each year in its public accounts, and that merchants used the printed number to argue for lower rates. A figure a government hides is a sign of theft; a figure it publishes is an instrument of policy. Vansgard’s was both at once.",
        stem:'Which choice best states the central idea of the text?',
        choices:{
          A:'The council of Vansgard hid the size of its uncollected duties from the port’s merchants.',
          B:'The gap in the Vansgard ledgers was at once a record of theft and a tool of public policy.',
          C:'Uncollected duties at Vansgard grew larger in every decade between 1640 and 1690.',
          D:'Enfield-Marsh shows the Vansgard shortfall was policy rather than corruption at all.'
        },
        correct:'B',
        expCorrect:'Enfield-Marsh does not replace one reading with the other. He grants the corruption reading, then adds the printing and the merchants’ use of the number, and closes by naming both at once: hidden, it is theft; published, it is policy — and “Vansgard’s was both.” The central idea is that double character.',
        expWrong:{
          A:'Contradicted. The council “printed the shortfall each year in its public accounts,” which is the fact the whole argument turns on.',
          C:'True and narrow. The widening gap is the observation that starts the passage, not the claim it builds; the text is about what the gap meant.',
          D:'Takes one side. Enfield-Marsh explicitly “grants that some of it is” corruption, so a reading that erases corruption is not his.'
        },
        tip:'Watch for “grants… but.” A writer who concedes a reading and then adds a second one usually ends with both in force, so the right answer holds both rather than choosing.'
      },

      {
        id:'BID-06', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Central Ideas and Details — stated detail (music)',
        passage:"The composer Ilse Vantongeren wrote her string quartets for a single ensemble, the Marbury Four, and revised them after every performance for nine years. The published scores therefore carry two kinds of marking. Some are instructions to any player: a tempo, a dynamic, a bowing. Others are reminders addressed to one person — a fingering that suits only the cellist’s hand, a breath mark where the second violinist habitually rushed. Vantongeren’s editor, working after her death, printed both kinds without distinction. Performers since have treated the private reminders as requirements, which is why the quartets are thought unusually hard to play correctly.",
        stem:'According to the text, why are Vantongeren’s quartets now thought unusually hard to play correctly?',
        choices:{
          A:'She revised the quartets after every performance the Marbury Four gave for nine years.',
          B:'Her tempo and dynamic markings are harder than those of other composers of her time.',
          C:'The Marbury Four refused to play the quartets in the form in which they were printed.',
          D:'Her editor printed private reminders to individual players as if they bound everyone.'
        },
        correct:'D',
        expCorrect:'The last two sentences give the causal chain: the editor “printed both kinds without distinction,” so performers since have read reminders meant for one cellist’s hand as binding instructions. The difficulty comes from the undifferentiated printing, not from the music itself.',
        expWrong:{
          A:'True, and the reason the two kinds of marking exist at all — but the revising is the origin of the markings, not the reason the quartets are hard to play now.',
          B:'Not claimed. The text never compares her markings with any other composer’s, and the general instructions are the ordinary kind.',
          C:'Invented. Nothing in the passage says the Marbury Four responded to the printed edition; the editor worked after Vantongeren’s death.'
        },
        tip:'When a “why” question follows a chain of events, the answer is the link the passage names as the cause, not the earliest fact in the story.'
      },

      {
        id:'BID-07', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Central Ideas and Details — central idea (architecture)',
        passage:"The Halvorsen Library opened in 1962 with a glass south wall, and its architect, Petra Lindqvist-Obi, is usually credited with a building that fails at its one job: by noon in June the reading room is unusable. The historian Casimir Adeyemi-Nolt has read the commission file. It shows Lindqvist-Obi asking twice for exterior louvers and being refused twice on cost, and drawing the wall as she did on the understanding that the louvers would follow within five years. They never did. Adeyemi-Nolt argues that the reading room as built is not the building Lindqvist-Obi designed, and that judging her by it is like judging a sentence by its first half.",
        stem:'Which choice best states the main idea of the text?',
        choices:{
          A:'The reading room of the Halvorsen Library becomes unusable by noon on a day in June.',
          B:'The commission file shows Lindqvist-Obi asked twice for louvers and was refused twice.',
          C:'The room Lindqvist-Obi is blamed for is an unfinished version of the one she designed.',
          D:'South-facing glass walls were a mistake common among architects of the early 1960s.'
        },
        correct:'C',
        expCorrect:'The passage opens with the verdict against Lindqvist-Obi and then supplies what the verdict leaves out: two refused requests and a wall drawn on the understanding that louvers would follow. Adeyemi-Nolt’s closing image — judging a sentence by its first half — makes the claim explicit: the built room is an incomplete design, so it is the wrong thing to judge her by.',
        expWrong:{
          A:'The complaint the text sets out to answer, not the answer. It is true, and it is the first sentence, which is exactly where a main idea usually is not.',
          B:'True, and it is the support for the claim rather than the claim. The file matters because of what Adeyemi-Nolt concludes from it.',
          D:'Too broad. The passage follows one architect, one file, and one refusal on cost, and never generalizes about architects of the decade.'
        },
        tip:'Facts pulled from an archive are usually evidence, not the point. Ask what the writer concluded from the archive, and pick that.'
      },

      {
        id:'BID-08', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Central Ideas and Details — central idea (ecology)',
        passage:"A stretch of the Muir Fork was fenced in 1998 to keep cattle off the bank, and within a decade willows returned, the water cooled, and trout counts tripled. The recovery is usually told as a story about willows shading the stream. Hydrologist Nkechi Baumgartner-Oyelaran measured the shade and found it accounts for part of the cooling but not most of it. What the willows chiefly did, she reports, was hold the bank in place: the channel narrowed, deepened, and began drawing more of its water from cold springs in the bed rather than from warm surface runoff. Shade cooled the stream a little. Shape cooled it a great deal.",
        stem:'Which choice best states the central idea of the text?',
        choices:{
          A:'The Muir Fork cooled mainly because the willows reshaped its channel, not because they shaded the water.',
          B:'Willows returned to the Muir Fork within ten years of the bank being fenced.',
          C:'Shade from streamside willows has no measurable effect on the temperature of a stream.',
          D:'Trout counts are a reliable way to measure how much a stretch of stream has cooled.'
        },
        correct:'A',
        expCorrect:'The passage names the usual story, measures it, and demotes it: shade explains “part of the cooling but not most of it.” The mechanism that does the work is geometry — a narrower, deeper channel fed by cold bed springs instead of warm runoff — and the last two sentences put the two side by side: a little from shade, a great deal from shape.',
        expWrong:{
          B:'True, and the opening timeline rather than the point. The passage uses the recovery as the thing to be explained, and the explanation is what it argues for.',
          C:'Too strong in the right direction. The text says shade accounts for part of the cooling, which is the opposite of no measurable effect.',
          D:'Not claimed. Trout counts appear once, as one sign that the stream recovered; the passage never proposes them as a thermometer.'
        },
        tip:'“Part but not most” is a demotion, not a denial. An option that pushes the demoted factor all the way to zero is wrong for overshooting, even though it points the right way.'
      },

      {
        id:'BID-09', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Central Ideas and Details — stated detail (linguistics)',
        passage:"In the Tavrin valley, two villages four kilometers apart use the same word, kesht, for the evening meal, but they inflect it differently: upper-valley speakers treat it as a mass noun, lower-valley speakers as a count noun. Linguist Amara Volkonsky-Teare traced both forms to a single older word and found that the split is not old. It shows up in recordings from the 1970s and in none from the 1940s. What changed in between was the road: after 1958, lower-valley families took work in a town where the count form was ordinary, and brought it home. The upper valley, which the road never reached, kept the older pattern.",
        stem:'According to the text, what accounts for the difference between the two villages?',
        choices:{
          A:'The two villages took their forms from two different older words in the valley.',
          B:'Recordings made in the 1940s already show the split between the two inflections.',
          C:'The upper valley lies four kilometers farther from the town than the lower valley.',
          D:'Lower-valley speakers brought the count form back from a town reached by the new road.'
        },
        correct:'D',
        expCorrect:'The passage names the cause outright: after 1958 the road let lower-valley families work in a town where the count form was ordinary, and they “brought it home,” while the upper valley, which the road never reached, kept the older pattern.',
        expWrong:{
          A:'Contradicted. Volkonsky-Teare “traced both forms to a single older word,” which is what makes the split recent rather than inherited.',
          B:'Contradicted. The split appears in recordings from the 1970s “and in none from the 1940s” — that absence is how she dates it.',
          C:'Misread number. The four kilometers is the distance between the two villages; the text never gives either village’s distance from the town.'
        },
        tip:'When a passage gives one number, check what it measures before reusing it. A distractor that recycles a real figure against the wrong pair of places is the commonest detail trap there is.'
      },

      {
        id:'BID-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Central Ideas and Details — central idea (astronomy)',
        passage:"Amateur observers in the nineteenth century reported a faint glow along the ecliptic after sunset and argued for years about whether it lay inside or outside the atmosphere. Astronomer Sunniva Ekelund-Marr points out that the dispute was settled less by better telescopes than by better bookkeeping. Observers in Chile and in Norway kept logs for the same eighteen months; the glow appeared on the same dates in both places, tilted the same way against the stars, and ignored the weather entirely. No atmospheric phenomenon behaves like that. Ekelund-Marr’s interest is in the method: the question was answered by two ordinary notebooks compared, not by an instrument either observer lacked.",
        stem:'Which choice best states the main idea of the text?',
        choices:{
          A:'The faint glow along the ecliptic was eventually shown to lie outside the atmosphere.',
          B:'Ekelund-Marr holds that two ordinary logs compared, not a better instrument, settled it.',
          C:'Nineteenth-century telescopes were too weak to resolve any question about the glow.',
          D:'Observers in Chile and in Norway disagreed about the dates on which the glow appeared.'
        },
        correct:'B',
        expCorrect:'The second sentence states the claim — settled “less by better telescopes than by better bookkeeping” — and the closing sentence names it as Ekelund-Marr’s real interest: two ordinary notebooks compared, not an instrument anyone lacked. The Chile and Norway logs are the demonstration of that method.',
        expWrong:{
          A:'True, and the outcome the method delivered rather than the point. Ekelund-Marr’s subject is how the question got answered, not which answer won.',
          C:'Overshoots. The text says better telescopes were not what settled it, which is not the same as saying telescopes were too weak to settle anything.',
          D:'Contradicted. The glow “appeared on the same dates in both,” and that agreement is precisely what ruled out an atmospheric cause.'
        },
        tip:'When a passage says a question was answered by X rather than Y, the main idea is about X. An answer that merely reports which side of the original dispute won has stopped one level too low.'
      },

      {
        id:'BID-11', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Central Ideas and Details — central idea (literary narrative)',
        passage:"The following text is from Rosalind Achterberg’s 1954 novel <i>The Long Inventory</i>. Sedge manages a hardware store his father founded.<br><br>Sedge kept the ledger in his father’s hand as long as he could, copying the old man’s loops so exactly that customers never noticed the change. He told himself this was respect. It was also, he knew by the second winter, a way of not deciding: as long as the book looked the same, nobody could ask him what he meant to do with the store, least of all himself. The morning he finally wrote a column in his own square print, he sold nothing all day, and went home lighter than he had in a year.",
        stem:'Which choice best states the main idea of the text?',
        choices:{
          A:'Sedge feels a grief at his father’s death that the passing years have done nothing to lessen.',
          B:'Sedge copies his father’s handwriting so exactly that the store’s customers never notice.',
          C:'Copying his father’s hand let Sedge put off deciding what to do with the store.',
          D:'Sedge resolves to sell the hardware store his father founded and to leave the town for good.'
        },
        correct:'C',
        expCorrect:'The passage names the function of the imitation in its middle sentence: “a way of not deciding,” because as long as the book looked unchanged, nobody could ask what he meant to do with the store — “least of all himself.” The last line confirms it: what lifts once he writes in his own hand is the postponement, not the business.',
        expWrong:{
          A:'A feeling the text never states. Sedge calls the copying respect, but the passage immediately reframes it as avoidance; grief is what a reader supplies, not what the narrative asserts.',
          B:'True but secondary. The exactness of the copy is the setup that makes the concealment work; the passage is about what the concealment was for.',
          D:'Not stated. He writes one column in his own hand and sells nothing that day; nothing in the text says he decides to sell the store or leave.'
        },
        tip:'In a narrative, the central idea is what the text asserts, not what the character feels. If a sentence explains what a habit was for, that explanation is almost always the answer.'
      },

      /* ================= COMMAND OF EVIDENCE: TEXTUAL (BID-12 a BID-23) ================= */

      {
        id:'BID-12', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Textual — the finding that separates two rival readings',
        passage:"A hoard of bronze mirrors was found beneath the floor of a workshop at Calder Rise. Archaeologist Imelda Strachan-Oyibo and her critics agree that the mirrors were buried deliberately and in a single act. Her critics read the burial as a hiding place: a workshop full of valuables, concealed against a raid the owner expected and meant to survive. Strachan-Oyibo reads it as an offering made when the workshop was closed for good. Both readings predict a tidy arrangement, one moment of deposit, and mirrors in sound condition.",
        stem:'Which finding, if true, would most strongly support Strachan-Oyibo’s reading rather than her critics’ reading?',
        choices:{
          A:'The workshop doorway was sealed shut with stone and clay in the same season as the burial.',
          B:'Raiders burned two neighboring workshops at Calder Rise within the same decade.',
          C:'The mirrors lay in one tidy layer and were placed there on a single occasion.',
          D:'The hoard proves that every workshop closed at Calder Rise received an offering.'
        },
        correct:'A',
        expCorrect:'The two readings differ on one thing: whether the owner meant to come back. A hider seals nothing permanently, because the whole point is retrieval; a doorway shut with stone and clay in the same season as the burial is a workshop closed for good, which is exactly and only what Strachan-Oyibo claims.',
        expWrong:{
          B:'This is the critics’ case, not hers. Raids in the neighborhood make an expected raid plausible, which strengthens the side she is arguing against.',
          C:'The passage says both readings predict a tidy arrangement and a single deposit. A fact that each side welcomes cannot separate them, however concrete it sounds.',
          D:'The right direction pushed past what one hoard can carry. Strachan-Oyibo claims a reading of this burial, not a rule covering every workshop at the site.'
        },
        tip:'When two accounts agree on most of the record, cross out every choice the passage already says both predict. What remains is the only place a finding can do any work.'
      },

      {
        id:'BID-13', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Textual — finding that weakens a proposed mechanism',
        passage:"Fireweed seedlings come up in dense stands on ground that burned the previous summer, and botanist Tobias Ngarambe-Lund has proposed that the heat of the fire itself cracks the seed coat and triggers germination. He notes that unburned ground beside the same fires carries almost no seedlings, and that seed sown on cold bare soil in the laboratory germinates poorly.",
        stem:'Which finding, if true, would most strongly weaken Ngarambe-Lund’s proposal about fireweed germination?',
        choices:{
          A:'Fireweed seedlings grow in even denser stands after fires that burn unusually hot and long.',
          B:'Fireweed seed can stay viable in the soil for more than forty years before it germinates.',
          C:'Fireweed sown on unburned ground stripped of its moss germinates just as thickly.',
          D:'Several plants other than fireweed fail to germinate on ground that has only just burned.'
        },
        correct:'C',
        expCorrect:'His proposal says heat is what does the work. Stripping the moss removes the seedbed competition without applying any heat at all, so if germination is just as thick there, the thing fire was supplying was bare ground, not a cracked seed coat. His two supporting observations survive — unburned ground has moss, and cold laboratory soil is not a burned seedbed — which is why this finding bites.',
        expWrong:{
          A:'Strengthens rather than weakens. More heat producing more seedlings is exactly the dose-response a heat mechanism predicts.',
          B:'Long viability explains where the seed was waiting, not what woke it. It is compatible with his proposal and with every rival to it.',
          D:'Sounds damaging and is about other species. Whether some other plant avoids burned ground says nothing about what triggers fireweed.'
        },
        tip:'To weaken a causal claim, find the choice that delivers the same effect with the proposed cause removed. A fact that merely sounds unfavorable, or that concerns some other case, leaves the mechanism untouched.'
      },

      {
        id:'BID-14', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Textual — finding that supports a proposed explanation',
        passage:"Between 1780 and 1820 the town of Oster Vige doubled in population while its recorded grain purchases barely rose. Economic historian Wilhelmina Aldiss-Muyanga rejects the obvious reading, that the townspeople simply ate less. She proposes instead that a growing share of the town’s bread was baked from grain that never passed through the market: the mills along the river increasingly paid their workers in kind, and grain moving from a mill to its own workers left no purchase record. A rival account holds that the town’s grain was bought by a handful of large bakers whose books have not survived.",
        stem:'Which finding, if true, would most strongly support Aldiss-Muyanga’s explanation of the Oster Vige records?',
        choices:{
          A:'The account books of three large bakeries in the town burned in a fire in 1834.',
          B:'Bread eaten per person in nearby towns held steady across the same forty years.',
          C:'The population of Oster Vige doubled again in the forty years after 1820.',
          D:'Mill wage books from the period list rye and barley among the goods paid out to workers.'
        },
        correct:'D',
        expCorrect:'Her explanation has a specific mechanism: mills paying workers in grain, so the grain moves without generating a purchase record. A wage book listing rye and barley as wages is that mechanism written down, and it is the one fact the rival account about missing bakers’ books does not predict.',
        expWrong:{
          A:'This supplies exactly what the rival account needs — large bakers whose books are gone — so it strengthens the explanation she is arguing against.',
          B:'It supports her rejection of the eating-less reading, which is the route the passage has already set aside. It does nothing to choose between her account and the rival, since both assume people kept eating.',
          C:'Growth after 1820 is outside the window in question and bears on neither account of the 1780–1820 records.'
        },
        tip:'When a passage names a rival account, the useful finding is the one the rival does not predict. A choice that only knocks down the reading the author already rejected buys you nothing.'
      },

      {
        id:'BID-15', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Textual — the quotation that illustrates a claim about a novel',
        passage:"In her study of Bertrand Ockwell’s novel <i>A Narrow Season</i>, critic Yusra Falkenrath argues that the narrator is unreliable in one specific way: he reports other people’s speech accurately, but he consistently misstates his own past promises, and always in the direction that makes his present conduct look consistent.",
        stem:'Which quotation from A Narrow Season would best illustrate Falkenrath’s claim about the narrator?',
        choices:{
          A:'“She said, exactly: ‘You gave me your word in October.’ I have not forgotten the words.”',
          B:'“What I promised her, if I promised anything, was to see to the orchard — not to keep it.”',
          C:'“The house, as I recall it, stood three miles from the station; my sister says it was one.”',
          D:'“I am not a man to be trusted with an evening, let alone a lifetime, and I have said so.”'
        },
        correct:'B',
        expCorrect:'Falkenrath’s claim has a shape: the narrator revises his own promise, and the revision conveniently licenses what he has since done. “If I promised anything” shrinks the promise, and “see to the orchard — not to keep it” rewrites it into something an owner who sold the orchard could still claim to have honored. Both halves of her claim are in one sentence.',
        expWrong:{
          A:'This shows the half of the claim Falkenrath grants — that he reports other people’s speech accurately. There is no misstatement of his own promise here at all.',
          C:'A slip about a fact, not about a promise, and nothing in it makes his present conduct look consistent. Falkenrath named a narrower failure than general inaccuracy.',
          D:'A general confession of unreliability. Her claim is about a pattern the narrator does not notice; a narrator who announces he cannot be trusted is illustrating the opposite.'
        },
        tip:'A claim with two conditions needs a quotation that meets both. Half-matches are written to be tempting, so read the claim as a checklist before you read the choices.'
      },

      {
        id:'BID-16', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Textual — finding that weakens a conclusion drawn from a timeline',
        passage:"On Kirrin Island the population of ground-nesting petrels collapsed after rats reached the island in the 1960s, and it recovered within eight years of the rats being removed in 1994. Ecologist Solveig Brandt-Iwu takes the recovery to show that rat predation on eggs, rather than any change in the birds’ food at sea, caused the collapse.",
        stem:'Which finding, if true, would most strongly weaken Brandt-Iwu’s conclusion about the petrels of Kirrin Island?',
        choices:{
          A:'The sardine stocks the petrels eat collapsed in the 1960s and returned by 1993.',
          B:'Rats on Kirrin Island were seen taking eggs from petrel nests on several occasions before 1994.',
          C:'Clearing rats from two other islands cost far more than the Kirrin Island program had cost.',
          D:'Rats swim poorly and could not have reached Kirrin Island without being carried there.'
        },
        correct:'A',
        expCorrect:'Her whole argument is that the timing matches: rats arrive, birds fall; rats go, birds return. A food supply that collapsed in the same decade and recovered a year before the rats were cleared matches that timeline just as well, and it is the exact alternative — a change in food at sea — that she set aside. Once two causes fit the same dates, the dates stop deciding.',
        expWrong:{
          B:'Strengthens her. Rats observed eating eggs is direct confirmation of the mechanism she proposes.',
          C:'A fact about the cost of eradication programs. Nothing in it bears on what caused the petrels to decline or recover.',
          D:'How the rats got to the island is a question about their arrival, not about their effect once there. Her conclusion is untouched either way.'
        },
        tip:'An argument built on matching dates falls to a rival cause that matches the same dates. Look for the choice that puts a second explanation on the same timeline, not the one that sounds most negative.'
      },

      {
        id:'BID-17', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Textual — the finding that tells two accounts apart',
        passage:"Cooking pots at the settlement of Hadd Miren change shape abruptly around 1200: wide bowls give way to tall narrow jars. Anthropologist Ceri Ndlovu-Haugen and her colleague agree the change is sudden and complete. Her colleague attributes it to newcomers arriving with a potting tradition of their own. Ndlovu-Haugen attributes it to a change in what was cooked — a shift from roasted grain to long-simmered legumes, which a tall jar suits and a wide bowl does not. Both accounts predict the abruptness and the totality of the change.",
        stem:'Which finding, if true, would most strongly support Ndlovu-Haugen’s account of the change at Hadd Miren rather than her colleague’s?',
        choices:{
          A:'Burial customs at Hadd Miren also change abruptly in the decades around 1200.',
          B:'The change from wide bowls to tall jars was complete within a single generation.',
          C:'The jars show that cooking vessels everywhere follow diet rather than migration.',
          D:'Residues inside the tall jars are rich in legumes, while residues in the old bowls are not.'
        },
        correct:'D',
        expCorrect:'Her account names a cause that leaves a chemical trace: a switch to long-simmered legumes. Residues that are rich in legumes in the new jars and absent from the old bowls put the food change and the shape change in the same pots at the same moment. Newcomers with their own potting tradition predict new shapes, but they do not predict a new menu inside them.',
        expWrong:{
          A:'A second abrupt change in customs is what a wave of newcomers would produce, so this pulls toward her colleague’s account, not hers.',
          B:'The passage says both accounts predict abruptness and totality. A fact both sides already claim cannot decide between them.',
          C:'Correct in direction and far too strong. One settlement cannot establish a rule about cooking vessels everywhere, and she claims nothing that wide.'
        },
        tip:'The best support is the prediction only one account makes. Ask what each side would expect to find, and keep the choice that appears on exactly one of those two lists.'
      },

      {
        id:'BID-18', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Textual — finding that weakens an argument about a cause',
        passage:"Music historian Delphine Okwuosa-Reilly argues that the sudden vogue for the six-string lute in the 1590s was driven by printing: the first tablature books appeared in 1588, and a player could now learn without a teacher. She points out that lute sales in the cities where those books were printed rose sharply in the years that followed.",
        stem:'Which finding, if true, would most strongly weaken Okwuosa-Reilly’s argument about the lute?',
        choices:{
          A:'The 1588 tablature books were printed in larger editions than any earlier music book.',
          B:'Lute sales rose just as sharply in cities where no tablature books were sold at all.',
          C:'Six-string lutes cost more in the 1590s than four-string lutes had cost before them.',
          D:'Okwuosa-Reilly has never located a complete surviving copy of the 1588 tablature books.'
        },
        correct:'B',
        expCorrect:'Her only support is a correlation between printing cities and rising sales. If sales rose just as sharply where the books never reached, then the rise was happening for some other reason and the printing cities were simply along for the ride. The comparison removes the link her argument depends on.',
        expWrong:{
          A:'Strengthens her. Larger editions mean the books reached more players, which is the mechanism she proposes.',
          C:'Price is a fact about the instrument, not about what drove the vogue. It sounds unfavorable without touching the claim.',
          D:'This casts doubt on the historian rather than on the argument. A missing complete copy does not change whether printing drove lute sales.'
        },
        tip:'Correlation arguments are broken by a control group, not by a complaint about the researcher. Look for the choice where the proposed cause is absent and the effect shows up anyway.'
      },

      {
        id:'BID-19', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Textual — the finding that tells two hypotheses apart',
        passage:"A star in the Wren’s Foot cluster dims by two percent every nineteen days. Astronomer Halldor Vasquez-Imrie holds that a planet passes in front of it; his colleague holds that a cool spot on the star’s own surface rotates into view. A planet blocks every color of light equally, while a cool spot is dimmer in blue light than in red. Both accounts fit the strict timing and the depth of the dimming.",
        stem:'Which finding, if true, would most strongly support Vasquez-Imrie’s account of the dimming rather than his colleague’s?',
        choices:{
          A:'The star’s visible surface is known to complete one full turn every nineteen days.',
          B:'The dimming repeats on a strict nineteen-day schedule, with no drift from cycle to cycle.',
          C:'The star dims by the same fraction in blue light as it does in red light.',
          D:'The dimming proves that every star with a steady, repeating dip is orbited by a planet.'
        },
        correct:'C',
        expCorrect:'The passage hands you the discriminator: a planet blocks all colors equally, a cool spot is dimmer in blue than in red. Equal fractions in blue and in red is what only the planet predicts. It is the one measurement the two accounts answer differently.',
        expWrong:{
          A:'A nineteen-day rotation is exactly what the starspot account needs to explain a nineteen-day cycle, so this supports the colleague.',
          B:'The passage says both accounts fit the strict timing. A prediction they share cannot separate them, however precise it sounds.',
          D:'Right direction, impossible strength. One star cannot establish that every steady dip anywhere is a planet, and Vasquez-Imrie claims nothing of the kind.'
        },
        tip:'When a passage states how two explanations differ physically, that sentence is the answer key. Find the measurement on which they disagree and take the choice that reports it.'
      },

      {
        id:'BID-20', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Textual — the quotation that illustrates a described pattern',
        passage:"Critic Ansel Marchetti-Duru describes a move that recurs throughout Ottavia Krenshaw’s stories: a character states a general rule about other people, and the sentence immediately following shows that same character breaking the rule without noticing.",
        stem:'Which quotation from Krenshaw’s stories would best illustrate the pattern Marchetti-Duru describes?',
        choices:{
          A:'“Nobody in this family can ever let a thing go, she said, and then started in again about the coat.”',
          B:'“He said people always exaggerate the cold, and his brother said it had been forty below.”',
          C:'“She had promised not to mention the money, and she mentioned it before the soup.”',
          D:'“I have never been able to leave a room quietly, she said, and she never once has.”'
        },
        correct:'A',
        expCorrect:'The pattern needs three things: a general rule about other people, the same speaker violating it, and no sign that she notices. “Nobody in this family can ever let a thing go” is the rule; “started in again on the coat” is her doing precisely that, reported flatly, with no flicker of recognition.',
        expWrong:{
          B:'Here the rule is stated by one character and broken by a different one. The pattern requires the speaker to be the one who breaks it.',
          C:'A promise to herself, not a general rule about other people, and the passage describes a rule stated aloud about others. The self-violation is the only half that matches.',
          D:'The rule is about the speaker rather than about other people, and it is confirmed rather than broken. Nothing contradicts what she just said.'
        },
        tip:'Write out the described pattern as parts before looking at the choices. Distractors in quotation questions are built by keeping most of the parts and swapping exactly one.'
      },

      {
        id:'BID-21', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Textual — finding that weakens a causal conclusion',
        passage:"The town of Bellhaven repaved its main street in brick in 2011, and shop revenues on that street rose eleven percent over the two years that followed. Planner Ingrid Achebe-Solberg concludes that the paving itself drew the shoppers, by making the street pleasant to walk along.",
        stem:'Which finding, if true, would most strongly weaken Achebe-Solberg’s conclusion about the brick paving?',
        choices:{
          A:'The brick paving cost the town roughly three times what an asphalt surface would have cost.',
          B:'Shoppers in 2013 called the main street more pleasant than shoppers had called it in 2010.',
          C:'Two of the shops on the main street closed during the months the paving work was under way.',
          D:'Revenues rose by about as much on two nearby streets that were not repaved at all.'
        },
        correct:'D',
        expCorrect:'Her conclusion rests on a before-and-after with no comparison. Two nearby streets that gained the same eleven percent without any brick supply the missing control: whatever lifted revenues was working across the town, and the paving is left with nothing to explain.',
        expWrong:{
          A:'Cost speaks to whether the project was worth the money, not to whether it drew shoppers. Unfavorable and irrelevant.',
          B:'Strengthens her. A street shoppers now find more pleasant is the mechanism she proposed, confirmed.',
          C:'Closures during the construction months sound bad and are about the wrong window; her claim concerns the two years after the work, when revenues rose.'
        },
        tip:'A before-and-after claim is weakened by a comparison group that changed the same way without the treatment. Cost overruns and short-term disruption feel damaging but leave the causal claim standing.'
      },

      {
        id:'BID-22', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Textual — finding that supports the proposal an author prefers',
        passage:"Alpine cushion plants grow in tight low mounds, and the usual explanation is that the mound traps heat. Botanist Margit Sowande-Larkin measured mound temperatures across a full season and found them no warmer than the surrounding rock, so she sets that explanation aside. She proposes instead that the mound’s value is water: its dense surface slows evaporation from the soil beneath it, and cushion plants are commonest exactly where summer rain is least reliable.",
        stem:'Which finding, if true, would most strongly support Sowande-Larkin’s proposal about cushion plants?',
        choices:{
          A:'Air inside the mounds is several degrees warmer than the air above the nearby rock.',
          B:'Soil under the mounds stays moist about nine days longer after rain than open soil.',
          C:'Cushion plants grow on six continents and in nearly every major mountain range.',
          D:'The mounds prove that no alpine plant depends on trapped heat to survive a season.'
        },
        correct:'B',
        expCorrect:'Her proposal names a mechanism — a dense surface that slows evaporation — and an outcome, survival where rain is unreliable. Soil holding moisture nine days longer under a mound than in the open is that mechanism measured, in the one variable she says matters.',
        expWrong:{
          A:'This supports the heat explanation, which the passage says she set aside after measuring it. It would back a conclusion she has already rejected, by the route she rejected.',
          C:'A fact about the range of the plants. It shows they are widespread without touching the question of what the mound shape does for them.',
          D:'Overreach in the right direction. Her measurements concern these mounds in one season; they cannot establish that no alpine plant anywhere relies on trapped heat.'
        },
        tip:'When an author explicitly discards one explanation, a choice that revives it is wrong even though it points at the same conclusion. Support has to arrive by the route the author actually proposed.'
      },

      {
        id:'BID-23', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Textual — the finding that separates a phonetic from a grammatical account',
        passage:"Speakers of Tarvend lengthen the vowel in a noun when the noun is the last word of a phrase. Linguist Osei Halvarsson-Mbeki holds that the lengthening is phonetic — a byproduct of slowing down before a pause. A colleague holds that it is grammatical: a mark that the phrase has ended, learned as part of the word. The two accounts agree on every case anyone has recorded in ordinary speech.",
        stem:'Which finding, if true, would most strongly support Halvarsson-Mbeki’s account of the lengthening rather than his colleague’s?',
        choices:{
          A:'Speakers lengthen the vowel even when they rush through a phrase end without pausing.',
          B:'Every phrase-final noun recorded in ordinary Tarvend speech shows the lengthening.',
          C:'Nouns in the middle of a phrase are lengthened too whenever a speaker pauses to think.',
          D:'Tarvend speakers lengthen their vowels more than speakers of the neighboring language.'
        },
        correct:'C',
        expCorrect:'On his account the cause is slowing, so lengthening should follow the slowing wherever it happens — including mid-phrase, where no phrase has ended. On the colleague’s account the lengthening marks a phrase boundary and has no business appearing in the middle of one. Mid-phrase lengthening tied to a pause is the case only the phonetic account predicts.',
        expWrong:{
          A:'This is the colleague’s prediction. Lengthening that survives when the pause is removed points to a learned grammatical mark, not to a byproduct of slowing.',
          B:'The passage says the two accounts agree on every ordinary recorded case. Confirming those cases confirms both at once and separates nothing.',
          D:'A comparison with another language. Neither account says anything about how Tarvend measures against its neighbors.'
        },
        tip:'To separate a byproduct account from a rule account, look for the case where the two inputs come apart — the cause present without the rule, or the rule without the cause. Everyday cases where they travel together are useless by construction.'
      },

      /* ============================ INFERENCES (BID-24 a BID-34) ============================ */

      {
        id:'BID-24', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences — logical completion',
        passage:"The cones of the Mirrow pine are sealed with a resin that melts only above 50 degrees Celsius, so the tree releases its seed after a fire and almost never otherwise. Forester Idris Vantablack-Nuru notes that this works only where fires are frequent enough that a stand does not die of old age between them, and rare enough that a stand can reach cone-bearing age in between. In the Sarn uplands, a century of suppression has pushed the interval between fires past 140 years, while Mirrow pines rarely live beyond 120. It follows that in the Sarn uplands the Mirrow pine ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'has adapted to the longer interval by opening its cones at a lower temperature.',
          B:'holds its seed in cones sealed with a resin that melts only at high temperature.',
          C:'will be replaced by species that can germinate without any exposure to fire.',
          D:'cannot reseed itself, since its stands die before the next fire opens their cones.'
        },
        correct:'D',
        expCorrect:'Two numbers do the work. Fires now come more than 140 years apart; the trees rarely reach 120. So a stand reaches the end of its life before the event that would open its cones ever arrives, and the seed stays sealed. That is the arithmetic the last sentence is pointing at.',
        expWrong:{
          A:'Requires an assumption the text never gives. Nothing here says the resin can change, and a century is not offered as time enough for the melting point to shift.',
          B:'A restatement of the premise. The blank asks what the premises produce in the Sarn uplands, and repeating the cone rule answers nothing.',
          C:'Plausible and unlicensed. The passage never says which other species are present or whether any of them can take the ground.'
        },
        tip:'On a completion item the blank wants the consequence the premises force. If a choice would be true before you read the last two sentences, it is the setup, not the inference.'
      },

      {
        id:'BID-25', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences — what may reasonably be inferred about a group',
        passage:"In the market at Ozun, a buyer who names a price first is understood to have made a concession, and so sellers there open by asking the buyer what the goods are worth. Ethnographer Perpetua Nakamura-Ilori observed that visiting traders from the coast, where the seller always names the first price, consistently pay more at Ozun than local buyers pay for the same goods. The visitors are not cheated on weight and not given poorer stock; Nakamura-Ilori checked both. They simply answer the question they are asked.",
        stem:'Based on the text, what can most reasonably be inferred about the visiting traders at Ozun?',
        choices:{
          A:'They receive goods of lower quality than local buyers get for the same money.',
          B:'They give up an advantage by keeping a custom that does not hold in the Ozun market.',
          C:'They would pay exactly what local buyers pay if they refused to speak first.',
          D:'They know the local custom and accept the higher price as a cost of trading far away.'
        },
        correct:'B',
        expCorrect:'Three facts combine. At Ozun, naming a price first is a concession; on the coast the seller always speaks first, so a visitor has no habit of refusing; and the visitors pay more without being shortchanged on weight or stock. The extra money therefore comes from the habit they brought with them, which costs them nothing at home and costs them here.',
        expWrong:{
          A:'Contradicted outright. Nakamura-Ilori checked both weight and stock and found neither wanting.',
          C:'Correct in direction, too strong in force. Not speaking first would remove the concession, but the text gives no ground for saying the price would land exactly where a local buyer lands.',
          D:'Requires an assumption the passage does not supply. It says they answer the question they are asked, which reads as habit rather than as a priced decision they understand.'
        },
        tip:'Check the strength word before the content. “Exactly,” “always,” and “only” turn a reasonable inference into one the passage cannot carry.'
      },

      {
        id:'BID-26', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences — logical completion (applying a stated measure)',
        passage:"Historian Casimira Oyelowo-Brandt studies guild records to gauge how open a trade was. She warns against counting masters: a town may have a great many masters and still be closed if each one takes apprentices only from his own family. What matters, she holds, is the share of new masters who entered without a relative already in the guild. The weavers of Hulme list forty masters in 1610 and nine in 1690, but the nine of 1690 include six men with no guild relative, against one of the forty in 1610. On Oyelowo-Brandt’s measure, the weavers of Hulme ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'had declined by 1690, since the count of masters had fallen from forty to nine.',
          B:'took apprentices only from the families of masters already admitted to the guild.',
          C:'were markedly more open in 1690 than in 1610, despite having far fewer masters.',
          D:'list forty masters in 1610 and nine in 1690 in the records she has studied.'
        },
        correct:'C',
        expCorrect:'Her measure is the share of new masters with no relative in the guild. In 1610 that is one in forty; in 1690 it is six in nine. The guild shrank on the measure she explicitly rejects and opened wide on the one she uses, and the blank asks for the verdict on hers.',
        expWrong:{
          A:'This applies the head count she warns against in the third sentence — the measure the passage exists to set aside.',
          B:'Contradicted. Six of the nine new masters in 1690 had no relative in the guild at all.',
          D:'A restatement of the figures already given. The blank asks what those figures mean on her measure, not what they are.'
        },
        tip:'When a passage rejects one yardstick and adopts another, a distractor will quietly measure with the rejected one. Reread the sentence beginning “what matters” before you choose.'
      },

      {
        id:'BID-27', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences — what most reasonably follows about a situation',
        passage:"A concert hall’s reverberation time is the number of seconds a sound takes to fade to inaudibility, and the ideal depends on the music: long reverberation blurs fast passages and enriches slow ones. The Kerrow Hall was built in 1884 for choral works and measures 2.3 seconds when empty. An audience absorbs sound, and a full house at Kerrow brings the measurement down to 1.6. The chamber orchestra that now rents the hall rehearses in the empty room on Thursday and performs to a sold-out room on Friday.",
        stem:'Based on the text, what can most reasonably be inferred about the orchestra’s Thursday rehearsals?',
        choices:{
          A:'The room they rehearse in on Thursday blurs their fast passages more than Friday’s room does.',
          B:'They will sound better to any listener on Friday than they do on Thursday evening.',
          C:'The hall was built in 1884 for choral works rather than for a chamber orchestra.',
          D:'They ought to cover the hall’s seats with absorbent cloth during every rehearsal.'
        },
        correct:'A',
        expCorrect:'Longer reverberation blurs fast passages. Thursday is the empty room at 2.3 seconds; Friday is the full room at 1.6. So the rehearsal room blurs fast passages more than the performance room does, which follows from the two numbers and the rule in the first sentence.',
        expWrong:{
          B:'“Better” is a judgment the passage never makes, and “any listener” makes it absolute. The text gives a difference in reverberation, not a verdict on quality.',
          C:'True, and a premise rather than an inference. It is stated in the passage, so it cannot be what the passage lets you newly conclude.',
          D:'A recommendation the text does not license. Nothing here says the orchestra should match the rehearsal room to the performance room, or that cloth would do it.'
        },
        tip:'An inference is what the stated facts force, not what a reasonable person might advise. Choices that give advice or grade quality are almost always adding a premise of their own.'
      },

      {
        id:'BID-28', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences — logical completion (applying a rule to a new case)',
        passage:"A ventilation tower works by drawing warm air upward and out, and it draws harder the greater the difference between the temperature inside the building and the temperature at the top of the tower. The merchants’ hall at Ferrand was fitted with such a tower in 1730, and travelers praised the coolness of its summer interior. Engineer Lorcan Diabate-Whitlow observes that on the hottest days of a Ferrand summer the outside air around the tower’s crown is warmer than the air in the hall below. On those days, the tower ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'draws hardest of all, because the air above its crown is then at its warmest.',
          B:'was praised by travelers for the coolness of the hall lying beneath it.',
          C:'proves that ventilation towers are useless in any climate with hot summers.',
          D:'does the least of its work, and may push air down into the hall instead of out.'
        },
        correct:'D',
        expCorrect:'The rule is that the tower draws on the difference between inside and crown, with warm air rising out. On the hottest days the crown is the warmer end, so the difference has shrunk to nothing or reversed. The draw weakens, and with the warmer air now on top the flow can run the other way, down into the hall.',
        expWrong:{
          A:'Reverses the rule. What drives the tower is the hall being warmer than the crown; the crown being warmest kills the draw rather than maximizing it.',
          B:'A restatement of the premise from the second sentence, and it says nothing about the hottest days, which is what the blank asks about.',
          C:'Far too strong. A tower that fails on the hottest days still works on every other summer day, which is why the travelers praised it.'
        },
        tip:'When a rule depends on a difference, ask what happens as that difference goes to zero and past it. The completion is usually the reversal, not the maximum.'
      },

      {
        id:'BID-29', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences — what follows if one account is correct',
        passage:"Two biologists agree that the Kessel warbler now arrives in its breeding woods eleven days earlier than it did in 1970, and that caterpillars there emerge fourteen days earlier than they did. They differ on where the eleven days come from. Nuala Okafor-Brandt holds that the bird fixes its departure by day length on the wintering grounds, which has not changed, so the whole gain must be made in transit, on warmer air. Her colleague holds that the bird leaves earlier because the wintering grounds themselves have warmed.",
        stem:'Based on the text, what can most reasonably be inferred about the warbler if Okafor-Brandt is correct?',
        choices:{
          A:'It will eventually arrive early enough to meet the caterpillars it feeds its young.',
          B:'It leaves the wintering grounds at about the same date it did in 1970.',
          C:'It arrives in its breeding woods eleven days earlier than it did back in 1970.',
          D:'It cannot detect temperature at all, either in transit or on the wintering grounds.'
        },
        correct:'B',
        expCorrect:'On her account departure is set by day length, and day length has not changed since 1970. So the departure date has not moved, and the eleven days are made up entirely on the journey. That is the one thing her account says and her colleague’s denies.',
        expWrong:{
          A:'Requires assumptions the text does not give — that the gap keeps closing, and that the bird has any way to close it. The passage offers no trend, only two fixed numbers.',
          C:'A premise both biologists share, stated in the first sentence. It is true whichever of them is right, so it follows from nothing in particular.',
          D:'Overshoots badly. Her account says day length sets the departure date; it says nothing about whether the bird can sense temperature at all, and she relies on warmer air speeding the journey.'
        },
        tip:'On “if X is correct” items, look for the claim that comes out differently under X than under the rival. Anything both parties already accept is a shared premise and cannot be the answer.'
      },

      {
        id:'BID-30', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences — logical completion (consequence of a stated principle)',
        passage:"A writing system is called a syllabary when each sign stands for a syllable and an alphabet when each stands for a single sound. Linguist Bedelia Nwachukwu-Sorensen points out that the number of signs follows from that difference: a language with many possible syllables needs a large syllabary, while its alphabet stays small no matter how the syllables combine. Old Karran allowed only about sixty syllables; its neighbor Vess allowed several thousand. A scribe adapting the Karran syllabary to write Vess would therefore ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'have to invent a great many new signs, or give up the syllabary for an alphabet.',
          B:'find the sixty Karran signs enough, since both languages use the very same sounds.',
          C:'be working in a system where each single sign stands for a whole syllable.',
          D:'prove that alphabets suit every spoken language better than syllabaries do.'
        },
        correct:'A',
        expCorrect:'A syllabary needs one sign per syllable. Karran has about sixty and Vess has several thousand, so sixty signs cannot cover Vess. Either thousands of new signs get invented, or the scribe switches to the system the passage says stays small regardless of how syllables combine — an alphabet.',
        expWrong:{
          B:'Requires an assumption the text never makes. Sharing a stock of sounds is not sharing a stock of syllables, and the syllable counts are what the passage gives you.',
          C:'A restatement of the definition in the first sentence. It is true of any syllabary and so tells you nothing about this adaptation.',
          D:'Too strong and off the question. The passage compares two languages on one point; it never ranks the two systems for every language.'
        },
        tip:'When a passage defines two systems and then hands you numbers, the completion is the arithmetic. Apply the definition to the numbers instead of restating it.'
      },

      {
        id:'BID-31', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences — what may be inferred about a character',
        passage:"The following text is from Ivo Serrano-Blackwood’s 1967 novel <i>The Tenant Above</i>.<br><br>Mrs. Aldwych had let the upstairs room to students for thirty years and had never once raised the rent during a tenancy, though she raised it between them without apology. When Palmer asked her why, she said the arithmetic came out the same either way. Palmer did the arithmetic that night and found that it did not: across thirty years she had taken in noticeably less than she might have. He did not raise the point with her. He understood, by then, that she had given him the account of herself she preferred to the one the ledger held.",
        stem:'Based on the text, what can most reasonably be inferred about Mrs. Aldwych?',
        choices:{
          A:'She has been losing money on the upstairs room across the whole thirty years.',
          B:'She raises the rent between tenancies without any apology to the incoming tenant.',
          C:'Her account of her own practice excuses it more than it describes it.',
          D:'She misled Palmer on purpose so that he would agree to take the upstairs room.'
        },
        correct:'C',
        expCorrect:'Her explanation — the arithmetic comes out the same — is false, and Palmer proves it the same night. What the explanation does accomplish is to make a costly generosity sound like indifference. The closing sentence names that exactly: the account of herself she preferred to the one in the ledger.',
        expWrong:{
          A:'Too strong. Taking in less than she might have is forgone income, not a loss, and the passage gives no figure that would put her in the red.',
          B:'A premise, restated from the first sentence. Something the text tells you outright is not something you infer from it.',
          D:'Requires an assumption the text does not offer. The passage supplies no motive of that kind, and Palmer is already a tenant when he asks.'
        },
        tip:'Distinguish “less than she might have” from “at a loss.” Inference questions in literary passages are usually decided by how much force a choice adds to a phrase the text kept mild.'
      },

      {
        id:'BID-32', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences — logical completion (what a situation implies for a method)',
        passage:"A painting’s ground — the layer spread over the canvas before any image is begun — was, in the workshops of seventeenth-century Antwerp, mixed by an apprentice from whichever pigment was cheapest that month, and it differs from workshop to workshop and from year to year. The image above it, by contrast, was painted in colors chosen for the picture and shared by every workshop in the city. A conservator who wants to know where and when an unsigned panel was made will therefore learn most by ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'matching the picture’s colors against those used by the workshops of the city.',
          B:'sampling the ground under the image rather than the pigments of the image itself.',
          C:'noting that the ground was mixed by an apprentice from the cheapest pigment.',
          D:'concluding that unsigned Antwerp panels can never be assigned to any workshop.'
        },
        correct:'B',
        expCorrect:'What identifies a panel is a layer that varies between workshops and between years — and the passage says that is the ground, mixed from whatever was cheapest that month. The image colors were shared by every workshop, so they cannot distinguish one from another. The ground is the only layer carrying the information the conservator wants.',
        expWrong:{
          A:'Points at the uninformative layer. Colors shared by every workshop in the city are the same everywhere, so matching them narrows nothing.',
          C:'A restatement of the premise. The blank asks what the conservator should do, not what the passage has already told you about the ground.',
          D:'Reverses the conclusion the premises build toward. The passage has just described a layer that varies by workshop and by year, which is an opening rather than a dead end.'
        },
        tip:'When a text contrasts something variable with something uniform, the variable one carries the information. Ask which layer differs between the cases you are trying to tell apart.'
      },

      {
        id:'BID-33', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences — what necessarily follows about a second party',
        passage:"A dairy cooperative divides a fixed monthly pool between its two member herds in proportion to the butterfat each delivers. Hollis Ekwueme-Tarr reports that the Marden herd was switched to a feed that raises butterfat while lowering total milk yield, and that the Sable herd stayed on its old feed and delivered exactly what it had delivered the year before. Over the year that followed, Marden’s share of the pool rose by a fifth.",
        stem:'Based on the text, what can most reasonably be inferred about the Sable herd over that year?',
        choices:{
          A:'The butterfat it delivered fell, which is why its share of the fixed pool declined.',
          B:'Its total milk yield rose in order to make up for the fall in yield at the Marden herd.',
          C:'It would earn more by moving over to the same feed that the Marden herd was given.',
          D:'Its payments fell, even though the butterfat it delivered did not change.'
        },
        correct:'D',
        expCorrect:'The pool is fixed and split between two herds, so the shares add to the whole: if Marden’s rose by a fifth, Sable’s fell by the same amount of money. And Sable delivered exactly what it had the year before, so its own butterfat held steady. Both halves are forced — the payment dropped while the output did not.',
        expWrong:{
          A:'Contradicted. The passage says Sable delivered exactly what it had the year before, so its butterfat is the one quantity that did not move.',
          B:'Contradicted by the same sentence, and it invents a compensating change the text rules out.',
          C:'Compatible with the passage without following from it. If both herds switched, their shares of a fixed pool could end up right where they started.'
        },
        tip:'With a fixed pool split by share, one member gaining means another losing — that part is arithmetic. Then check what actually changed for the loser, because “paid less” and “produced less” are different claims.'
      },

      {
        id:'BID-34', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences — logical completion (what follows for one researcher’s own work)',
        passage:"A telescope’s resolving power rises with the width of its mirror; the light it gathers rises with the mirror’s area, and so with the square of that width. Astronomer Perrin Vasudevan-Holt studies faint galaxies already far broader on the sky than the finest separation his instrument can distinguish, so what limits his work is the number of photons he collects in a night, not the sharpness of the image. He is offered two upgrades of equal cost: a mirror forty percent wider, or a detector that records twice as many of the photons reaching it. Since a forty percent gain in width roughly doubles the mirror’s area, Vasudevan-Holt ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'gains the same amount of light from either upgrade, so neither one answers his problem better.',
          B:'should take the wider mirror, since it improves the light and the sharpness at once.',
          C:'should take the detector, since a wider mirror would not raise the light he collects.',
          D:'studies galaxies already broader on the sky than his instrument can distinguish.'
        },
        correct:'A',
        expCorrect:'Forty percent wider roughly doubles the area, and light scales with area, so the mirror doubles his photons. The detector records twice as many of the photons arriving, which also doubles them. On the quantity that limits him, the two upgrades are a tie, and the costs are equal by stipulation.',
        expWrong:{
          B:'True about the mirror and beside the point for him. The passage says sharpness is not what limits his work, so extra resolution is a benefit he has no use for.',
          C:'Contradicts the rule in the first sentence. A wider mirror has more area and therefore gathers more light; that is precisely why the two upgrades tie.',
          D:'A restatement of the premise. The blank asks what the comparison implies for his choice, not what he studies.'
        },
        tip:'When a passage tells you which quantity limits someone, score every option against that quantity alone. An upgrade that improves something the text called irrelevant is a tempting benefit with no value in the problem.'
      }

    ]
  });
})();
