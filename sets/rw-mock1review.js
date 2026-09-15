/* SAT Studio question set — Reading & Writing: Mock 1 Review — Verbal (M1V-01 a M1V-14) */
window.SAT_SETS.push({
  id: 'rw-mock1review',
  title: 'Mock 1 Review — Verbal',
  section: 'rw',
  level: 'Difícil',
  description: 'Targeted review of the Verbal skills you missed on Mock 1: text structure, punctuation, main idea, quotation, and possessives.',
  minutes: 18,
  questions: [
    {
      id:'M1V-01', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose',
      passage:"For years, city planners treated stormwater as a nuisance to be flushed away through concrete pipes as quickly as possible. A newer approach, however, treats rainfall as a resource: rain gardens, permeable pavement, and green roofs now capture water where it falls. Cities that have adopted these designs report cleaner rivers and cooler summer streets.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It ranks several stormwater technologies from least to most expensive.',
        B:'It presents an older practice, introduces a contrasting newer one, and notes the newer one’s results.',
        C:'It argues that concrete pipes should be banned in every city.',
        D:'It defines a single technical term and traces the word’s origins.'
      },
      correct:'B',
      expCorrect:'The text moves in three stages: first the old practice (flushing rainwater away through pipes), then "however" introduces the new, opposing approach (treating rain as a resource), and finally it notes the results (cleaner rivers, cooler streets). Option B captures that movement: old practice → a new one that contrasts → results.',
      expWrong:{
        A:'Not supported: the text mentions technologies (rain gardens, permeable pavement), but never ranks them by cost.',
        C:'It misreads the purpose: the text describes a change of approach, it does not "argue" for banning pipes. The verb matters.',
        D:'It describes a part, not the whole: it does not focus on defining a term or the origin of a word; it narrates the shift from one practice to another.'
      },
      tip:'For STRUCTURE, trace the WHOLE movement of the text. Words like "however" mark the turn between the old part and the new one; check whether results come at the end.'
    },
    {
      id:'M1V-02', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Text Structure and Purpose',
      passage:"Most maps flatten the round Earth onto a rectangle, and in doing so they stretch the regions near the poles. The familiar Mercator projection, for instance, makes Greenland look as large as Africa, even though Africa is in fact roughly fourteen times bigger. Cartographers accept such distortions because the same projection keeps compass directions accurate, a feature that once made ocean navigation far safer.",
      stem:'Which choice best describes the function of the underlined sentence ("Cartographers accept such distortions because the same projection keeps compass directions accurate, a feature that once made ocean navigation far safer.") in the text as a whole?',
      choices:{
        A:'It offers a reason that the distortion described earlier is tolerated despite its drawbacks.',
        B:'It introduces the text’s main subject for the first time.',
        C:'It disputes the claim that maps stretch the regions near the poles.',
        D:'It provides the numerical evidence about Greenland’s size.'
      },
      correct:'A',
      expCorrect:'Just before, it explains that the maps distort the polar regions (Greenland looks enormous). The underlined sentence says why cartographers ACCEPT that distortion: because the same projection keeps compass directions exact. Its function is to give the reason the flaw is tolerated.',
      expWrong:{
        B:'It misreads the function: the topic (map distortion) was already introduced in the first sentence, not in the underlined one.',
        C:'It contradicts the text: the sentence does not deny the distortion; it takes it as given and explains why it is accepted.',
        D:'It misplaces the evidence: the numerical fact ("fourteen times") is in the previous sentence, not in the underlined one.'
      },
      tip:'For FUNCTION, look at what the sentence DOES within the text. The word "because" usually signals that the sentence gives a reason, not that it introduces the topic or adds new data.'
    },
    {
      id:'M1V-03', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Text Structure and Purpose',
      passage:"When the composer Florence Price submitted her first symphony to a major orchestra in the 1930s, she was largely unknown beyond her own city. The conductor programmed the work anyway, and its premiere made her the first African American woman to have a symphony performed by a leading American orchestra. Yet for decades afterward her manuscripts sat forgotten in an abandoned house, rediscovered only when renovators stumbled upon them in 2009.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To argue that Price’s symphony is superior to those of her contemporaries.',
        B:'To explain the technical structure of Price’s symphony movement by movement.',
        C:'To recount both a historic milestone in Price’s career and the long neglect that followed it.',
        D:'To describe the renovation of the abandoned house where the manuscripts were found.'
      },
      correct:'C',
      expCorrect:'The text tells two things joined by "Yet": the historic milestone (the first African American woman with a symphony performed by a major orchestra) and the long neglect that followed (manuscripts abandoned until 2009). The purpose covers both: to recount the achievement and the neglect that came after.',
      expWrong:{
        A:'Not supported: the text does not compare or "argue" that her symphony is superior to anyone else’s. There is no value judgment.',
        B:'Not supported: the technical structure of the symphony is never analyzed movement by movement.',
        D:'It describes a part, not the whole: the abandoned house is a detail of the rediscovery, not the purpose of the text.'
      },
      tip:'For PURPOSE, look for the idea covering the WHOLE text. If there is a turn with "Yet", the right answer usually covers both halves (here: the achievement AND the neglect), not just one.'
    },
    {
      id:'M1V-04', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Punctuation',
      passage:"Marine biologists once believed the deep sea was nearly %BLANK% recent expeditions have revealed thriving communities of animals clustered around volcanic vents.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'lifeless,', B:'lifeless;', C:'lifeless', D:'lifeless:'},
      correct:'B',
      expCorrect:'There are two complete sentences: "Marine biologists once believed the deep sea was nearly lifeless" and "recent expeditions have revealed thriving communities…". To join two independent clauses with no conjunction, the semicolon is what you want.',
      expWrong:{
        A:'A single comma between two complete sentences is a comma splice.',
        C:'With no punctuation, the two sentences fuse (run-on).',
        D:'The colon demands that the second part EXPLAIN or illustrate the first; here the second CONTRASTS (once believed lifeless, now seen teeming with life), so it does not fit.'
      },
      tip:'The period test: if both sides of the blank are complete sentences, ";" works. Reach for the colon only when the 2nd part clarifies the 1st.'
    },
    {
      id:'M1V-05', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Punctuation',
      passage:"The %BLANK% a device that measures atmospheric pressure, gave early forecasters their first reliable way to sense an approaching storm.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'barometer', B:'barometer:', C:'barometer,', D:'barometer;'},
      correct:'C',
      expCorrect:'"a device that measures atmospheric pressure" is a NON-essential appositive renaming "The barometer". It goes between TWO commas; since the closing comma is already there before "gave", the opening one after "barometer" is missing.',
      expWrong:{
        A:'Without the opening comma, the aside closes but never opens → it is left unbalanced.',
        B:'A colon does not open an aside and, on top of that, it would split the subject ("The barometer") from its verb ("gave").',
        D:'A semicolon does not fence off appositives and there is no independent sentence before it.'
      },
      tip:'Opening and closing are TWINS: comma–comma. If you spot an "orphan" comma closing the aside, the answer is usually the comma that opens it.'
    },
    {
      id:'M1V-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punctuation',
      passage:"The expedition’s survival depended on three things the porters could not afford to %BLANK% a dependable compass, a waterproof tent, and enough dried food to last a month.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'lose:', B:'lose,', C:'lose;', D:'lose'},
      correct:'A',
      expCorrect:'Before the blank there is a complete sentence ("The expedition’s survival depended on three things the porters could not afford to lose") and what follows is the list that spells it out. That is exactly the job of the colon.',
      expWrong:{
        B:'A comma cannot introduce a list this way after a complete sentence.',
        C:'A semicolon demands an independent sentence after it, and a list is not one.',
        D:'With no punctuation, "lose a dependable compass…" fuses into the list.'
      },
      tip:'Colon = only after a COMPLETE sentence. Cover it with your hand: what comes before has to be able to end in a period.'
    },
    {
      id:'M1V-07', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Main Idea',
      passage:"The Sahara was not always a desert. Rock paintings scattered across its now-barren plateaus show hippos wallowing in rivers, herds of cattle grazing, and people fishing from canoes. Around six thousand years ago, a slow shift in Earth’s orbit weakened the seasonal rains, and over many centuries the green landscape hardened into the dunes we know today.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Rock paintings are the most reliable form of evidence about ancient climates.',
        B:'A shift in Earth’s orbit is responsible for the formation of every desert on the planet.',
        C:'Ancient peoples generally preferred to settle beside rivers rather than in dry regions.',
        D:'The Sahara, now a desert, was once a green, watery landscape that slowly dried out.'
      },
      correct:'D',
      expCorrect:'The text opens with "it was not always a desert", shows evidence of a green, watered landscape (hippos, cattle, fishing) and explains how it dried out over time. The central idea joins all of that: the Sahara, a desert today, was once green and wet and dried out gradually. Option D covers it.',
      expWrong:{
        A:'An overstated detail: the paintings are evidence in the text, but it never says they are the "most reliable" way of knowing ancient climates. That is outside information.',
        B:'Too extreme: the orbital shift explains the Sahara case, not the formation of "all" the deserts on the planet.',
        C:'Detail, not central idea: fishing from canoes is an example of the ancient landscape, not the main point of the paragraph.'
      },
      tip:'The central idea covers the WHOLE paragraph. Here it joins the before (green and watered) with the after (desert). Watch for "extreme" distractors like "all" or "the most reliable".'
    },
    {
      id:'M1V-08', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Main Idea',
      passage:"Fungi are often mistaken for plants, but they cannot make their own food from sunlight. Instead, a fungus spreads a vast web of thread-like filaments through soil or rotting wood, releasing chemicals that break down dead material and then absorbing the nutrients set loose. In this way, fungi recycle much of a forest’s fallen matter, returning nutrients to the soil that living trees can draw on again.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Fungi are far more closely related to animals than they are to plants.',
        B:'The filaments of a fungus are usually too small to be seen without a microscope.',
        C:'Rather than making food as plants do, fungi feed by breaking down dead matter, recycling a forest’s nutrients.',
        D:'A forest could not survive for even a single season without fungi.'
      },
      correct:'C',
      expCorrect:'The text contrasts fungi with plants (they do not make food from light), explains how they eat (breaking down dead matter and absorbing nutrients) and closes with their role: recycling the forest’s nutrients. Option C joins the three things and covers the whole paragraph.',
      expWrong:{
        A:'Not supported: the text says they are mistaken for plants, but it never compares them with animals. That is outside information.',
        B:'A detail never mentioned: the text says nothing about the size of the filaments or about microscopes.',
        D:'Too extreme: it says they recycle "much" of the fallen matter, not that the forest would die within a single season without them.'
      },
      tip:'The central idea sums up the whole arc: what they do NOT do (eat like plants), what they DO (break things down) and what it is for (recycling). Avoid the extremes ("not a single season").'
    },
    {
      id:'M1V-09', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence (textual)',
      passage:"In the short story 'The Lighthouse Keeper,' the author presents Mara, a keeper who has grown deeply attached to her isolation and prefers the company of the sea to that of other people. A student claims that the story’s descriptions of Mara emphasize her contentment with being alone.",
      stem:'Which quotation from "The Lighthouse Keeper" most effectively illustrates the student’s claim?',
      choices:{
        A:'“Mara marked each supply ship’s arrival on the wall by her bunk, counting down the days until the next one.”',
        B:'“When the last storm passed, Mara stepped onto the gallery and smiled, glad that no boat would reach her rock for weeks.”',
        C:'“The great lamp had to be wound every four hours, a duty Mara had never once neglected.”',
        D:'“Visitors sometimes called the tower a lonely place, and Mara would only nod and say nothing.”'
      },
      correct:'B',
      expCorrect:'The claim is that Mara is at ease with solitude. Quote B shows it directly: she smiles and is "glad no boat had reached her rock in weeks", that is, she enjoys being alone. That is the evidence illustrating the claim.',
      expWrong:{
        A:'It runs the other way: counting the days until the boat arrives suggests she is WAITING for contact, not that she prefers solitude.',
        C:'Off topic: winding the lamp is about her diligence at work, not about being at ease alone.',
        D:'Ambiguous: nodding without speaking does not clearly show contentment; it could even read as sadness. It does not illustrate the claim as well as B.'
      },
      tip:'On "which quotation illustrates the claim", first pin down the claim (here: she is at ease alone) and look for the quote showing it DIRECTLY. Rule out ones about something else (her work) or pointing the other way.'
    },
    {
      id:'M1V-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"In the novel “The Cartographer’s Daughter,” the young mapmaker Inés is portrayed as distrustful of any information she has not confirmed for herself. A student argues that the novel shows Inés relying on her own direct observation rather than on the accounts of other people.",
      stem:'Which quotation from "The Cartographer’s Daughter" most effectively illustrates the student’s claim?',
      choices:{
        A:'“Inés loved the old sailors’ tales of golden coasts and would repeat them to anyone who stopped to listen.”',
        B:'“Inés had inherited her father’s brass instruments, and she polished each of them every evening out of habit.”',
        C:'“The villagers trusted Inés completely, carrying to her every rumor they gathered from passing travelers.”',
        D:'“Though the merchants swore the mountain pass was impassable, Inés resolved to walk its full length before drawing a single line.”'
      },
      correct:'D',
      expCorrect:'The claim is that Inés trusts what she observes herself, not what she is told. Quote D shows it: even though the merchants swore the pass was impassable (other people’s testimony), Inés resolves to walk it herself before drawing a single line. That is the exact evidence.',
      expWrong:{
        A:'It runs the other way: gladly repeating the sailors’ tales shows she DOES accept other people’s accounts, the opposite of the claim.',
        B:'Off topic: inheriting and polishing her father’s instruments says nothing about trusting only her own observation.',
        C:'It points at others, not at her: it describes villagers trusting Inés and bringing her rumors; it does not show Inés verifying things herself.'
      },
      tip:'Match the claim to the quote: "her own observation vs. other people’s accounts" demands a quote where the character IGNORES what others say and checks in person. D contrasts "merchants swore" with walking it herself.'
    },
    {
      id:'M1V-11', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Possessives',
      passage:"Although the hive holds tens of thousands of workers, a single %BLANK% survival through the winter determines whether the whole colony will last until spring.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'queen’s', B:'queens', C:'queens’', D:'queen'},
      correct:'A',
      expCorrect:'"a single" makes clear it is ONE queen (singular), and the survival belongs to her. Singular possessive = noun + ’s: "a single queen’s survival".',
      expWrong:{
        B:'A plural with no possessive: it does not mark the survival as "the queen’s" and it clashes with "a single".',
        C:'A plural possessive ("of the queens"), but the text says "a single", just one.',
        D:'With no apostrophe, "queen survival" does not express the possession the phrase calls for.'
      },
      tip:'Two questions: singular or plural? does it own something? "A single" + ownership → singular + ’s.'
    },
    {
      id:'M1V-12', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Subject-verb agreement',
      passage:"The collection of rare stamps that the two brothers inherited from their grandfather %BLANK% now worth more than the house in which it is stored.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'are', B:'were', C:'have been', D:'is'},
      correct:'D',
      expCorrect:'The subject is "The collection" (singular); everything else ("of rare stamps that the two brothers inherited…") only describes it. A singular subject calls for a singular verb, and with "now" the tense is present: "The collection… is now worth…".',
      expWrong:{
        A:'"are" is plural; it agrees with "stamps" or "brothers", not with the real singular subject "collection".',
        B:'"were" is plural and past tense on top of that; the subject is singular and "now" calls for the present.',
        C:'"have been" is plural (the singular would be "has been"), so it does not agree with "collection".'
      },
      tip:'Cover the intervening phrase ("of rare stamps… grandfather") and keep subject + verb: "The collection … is". The plural nouns in between are traps.'
    },
    {
      id:'M1V-13', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context',
      passage:"Early critics found the painter’s late canvases baffling, even chaotic. Only decades later did art historians realize that the seemingly random splashes of color followed a %BLANK% system of proportion that the artist had quietly worked out, page after page, in his private notebooks.",
      stem:'Which choice completes the text with the most logical and precise word?',
      choices:{A:'careless', B:'imaginary', C:'meticulous', D:'ordinary'},
      correct:'C',
      expCorrect:'The text contrasts what it LOOKS like (random "splashes", chaotic) with what was really there: a system the artist worked out calmly "page after page" in his notebooks. The word has to signal something very careful and precise: "meticulous" fits perfectly.',
      expWrong:{
        A:'“careless” (descuidado) es lo contrario de un sistema trabajado con cuidado en cuadernos.',
        B:'"imaginary" does not work: the system is real, written out in his notebooks.',
        D:'"ordinary" does not capture the contrast; the point is that it was precise and his own, not commonplace, which is why critics missed it.'
      },
      tip:'In Words in Context, let the text itself hand you the clue. Here the contrast "looks random, but…" calls for a word of order and care: precise, not generic.'
    },
    {
      id:'M1V-14', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context',
      passage:"The senator became famous for speeches so %BLANK% that even her rivals took notes: she could compress a tangled budget debate into a single sentence that listeners remembered for years.",
      stem:'Which choice completes the text with the most logical and precise word?',
      choices:{A:'succinct', B:'lengthy', C:'evasive', D:'monotonous'},
      correct:'A',
      expCorrect:'The clue comes after the colon: "compress a tangled budget debate into a single sentence" (boiling something tangled down to ONE memorable line). That describes a speech that is brief and to the point: "succinct" is the precise word.',
      expWrong:{
        B:'"lengthy" is the opposite of compressing everything into a single sentence.',
        C:'"evasive" does not fit: she clarifies the debate, which is why even her rivals took notes; she does not dodge it.',
        D:'"monotonous" clashes with "remembered for years"; nothing suggests a dull or repetitive tone.'
      },
      tip:'The clue usually sits right next to the blank. Here "a single sentence they remembered for years" points to brief and striking: hence "succinct", not "lengthy" or "evasive".'
    }
  ]
});
