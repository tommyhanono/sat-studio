/* SAT Studio question set — Reading & Writing: Verbal Pre-Mock Warmup (VW1-01 a VW1-12) */
window.SAT_SETS.push({
  id: 'rw-warmup1',
  title: 'Verbal Pre-Mock Warmup',
  section: 'rw',
  level: 'Difícil',
  description: 'A focused warm-up across your weakest Verbal skills — do this right before a full mock.',
  minutes: 16,
  questions: [
    {
      id:'VW1-01', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Text Structure and Purpose',
      passage:"Most guides to public speaking advise beginners to eliminate every pause, treating silence as a sign of nervousness. A growing number of communication researchers challenge this advice. They find that well-placed pauses give listeners time to absorb a point and can make a speaker seem more, not less, confident.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It traces how guides to public speaking have changed over several centuries.',
        B:'It presents a widely given piece of advice and then introduces research that contradicts it.',
        C:'It recounts a personal experience and draws a single general lesson from it.',
        D:'It defines a technical term and then illustrates it with a series of examples.'
      },
      correct:'B',
      expCorrect:'The text first gives a common piece of advice ("cut out every pause") and then brings in researchers who contradict it (well-placed pauses help and convey confidence). That is the movement: accepted advice → evidence that refutes it. Option B describes it.',
      expWrong:{
        A:'Not supported: the text does not walk through centuries of history; it sets a piece of advice against current evidence.',
        C:'It misreads the structure: there is no personal experience or anecdote; it is about advice and researchers’ findings.',
        D:'It describes a part, not the whole: it does not merely define a term with examples; it raises a piece of advice and calls it into question.'
      },
      tip:'For STRUCTURE, trace the MOVEMENT of the text. When "challenge this advice / find that…" shows up, it is almost always accepted idea first and counter-evidence after.'
    },
    {
      id:'VW1-02', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Purpose',
      passage:"When the composer Florence Price died in 1953, boxes of her unpublished manuscripts sat forgotten in an abandoned house for decades. Their rediscovery in 2009 allowed orchestras to perform symphonies that had never been heard in full. Musicologists now cite the find as a reminder of how much of a period's music can survive only by chance.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:"To use the recovery of one composer's manuscripts to show how the survival of past music can depend on chance.",
        B:'To argue that Florence Price was the most important composer of her entire generation.',
        C:'To describe the specific process orchestras follow when preparing an unfamiliar symphony.',
        D:'To criticize the relatives who left the manuscripts in an abandoned house for so long.'
      },
      correct:'A',
      expCorrect:'The text tells us Price’s manuscripts were lost for decades, that when they resurfaced they could finally be performed, and closes by saying musicologists see it as a reminder of how much music survives only by chance. The purpose is to use THAT case to show how the survival of past music depends on luck.',
      expWrong:{
        B:'Not supported: it never says Price was "the most important" of her generation; it uses her case as an example, not as a ranking.',
        C:'It describes a part, not the whole: it mentions that orchestras could perform it, but does not explain the process of preparing a symphony.',
        D:'It misreads the tone: the text does not blame the relatives; it uses the discovery to talk about chance in the survival of music.'
      },
      tip:'For PURPOSE, sum up the idea holding the WHOLE text together. The last sentence ("a reminder of how much… survive only by chance") usually hands you the purpose on a plate.'
    },
    {
      id:'VW1-03', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence (textual)',
      passage:"Ecologist Dr. Reyes proposed that returning beavers to a drought-prone valley would raise the local water table. She reasoned that if the beavers' dams were slowing the flow of streams, then wells located just downstream of the dams should show rising water levels within a few years of the beavers' arrival.",
      stem:'Which finding, if true, would most directly support Dr. Reyes’s hypothesis?',
      choices:{
        A:'The beavers built more dams across the valley than researchers had initially expected.',
        B:'Several plant species unrelated to water levels became more common in the valley.',
        C:'Wells located just downstream of the new beaver dams rose measurably within three years.',
        D:'Wells far from any beaver dam showed no change at all over the same period.'
      },
      correct:'C',
      expCorrect:'The prediction is specific: if the dams slow the flow, the wells JUST downstream of the dams should rise within a few years. Option C reports exactly that (downstream wells rise within three years), so it supports the hypothesis directly.',
      expWrong:{
        A:'It does not support the water rising: how many dams the beavers built says nothing about whether the water level rose.',
        B:'It wanders off topic: plants "unrelated to the water level" give no evidence about the water table.',
        D:'It is only a control, not direct support: wells FAR from the dams not changing is consistent, but it does not confirm the dams MAKE the water rise near them, which is what she predicted.'
      },
      tip:'In COMMAND OF EVIDENCE, the best option traces the prediction. Here the hypothesis names "wells downstream of the dams": look for the option measuring exactly that, not a side fact.'
    },
    {
      id:'VW1-04', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"In her novel, the narrator Amara repeatedly insists that she feels no attachment to the small town where she grew up. A student reading the novel claims that the text quietly undercuts Amara's stated indifference, hinting that she cares far more than she admits.",
      stem:"Which quotation from the novel would best support the student's claim?",
      choices:{
        A:'“I left the town at eighteen,” Amara said flatly, “and I rarely thought of going back.”',
        B:'“The train station was unusually crowded that gray morning,” Amara noted.',
        C:'“I never understood why anyone would choose to stay there,” Amara admitted.',
        D:'Even now, Amara could name every crooked fence and recall the exact shade of the evening light on her old street.'
      },
      correct:'D',
      expCorrect:'The student’s claim is that the text quietly belies Amara’s indifference. Option D shows exactly that: despite saying she does not care, she recalls with tenderness every crooked fence and the exact evening light of her street. That fond detail contradicts her stated indifference.',
      expWrong:{
        A:'It reinforces the indifference rather than contradicting it: "she left and rarely thought of returning" confirms exactly what she claims to feel.',
        B:'It is neutral: describing a busy station reveals nothing about Amara’s attachment to the town.',
        C:'It runs along the same line of indifference: "I never understood why anyone would stay" sounds like rejection, not hidden attachment.'
      },
      tip:'For "which quote best supports", first pin down WHAT is to be proved (here: that she does care). Rule out quotes saying the opposite or that are neutral; the good one shows the hidden feeling.'
    },
    {
      id:'VW1-05', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Punctuation (colon introducing a list)',
      passage:"To reproduce the medieval recipe faithfully, the food historian had to track down three nearly forgotten %BLANK% verjuice, grains of paradise, and long pepper.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'ingredients', B:'ingredients,', C:'ingredients:', D:'ingredients;'},
      correct:'C',
      expCorrect:'Before the blank there is a complete sentence ("the food historian had to track down three nearly forgotten ingredients") and what follows is the list that spells it out. Introducing a list after a complete sentence is exactly the job of the colon.',
      expWrong:{
        A:'With no punctuation, "ingredients verjuice, grains…" fuses: the list runs straight into the noun.',
        B:'The comma would make "ingredients" look like the first item in the series, not the thing the list describes; it does not introduce the list correctly.',
        D:'A semicolon demands an independent sentence after it, and a list of names is not one.'
      },
      tip:'Colon = only after a COMPLETE sentence announcing a list or explanation. Cover it up: what comes before has to be able to close with a period.'
    },
    {
      id:'VW1-06', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Punctuation (elemento no esencial, comas en pareja)',
      passage:"The Voyager 1 probe, launched in %BLANK% is now the most distant human-made object from Earth.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'1977', B:'1977,', C:'1977;', D:'1977:'},
      correct:'B',
      expCorrect:'"launched in 1977" is a NON-essential aside describing the subject "The Voyager 1 probe". It has to sit between TWO commas; since the opening comma is already there before "launched", the closing comma before "is" is missing.',
      expWrong:{
        A:'Without the closing comma, the aside opens but never closes → it is left unbalanced.',
        C:'A semicolon does not close an aside and it demands an independent sentence after it; "is now the most distant…" is not one.',
        D:'A colon does not close an aside and it would split the subject from its verb ("is").'
      },
      tip:'Opening and closing are TWINS: comma–comma. If you spot an "orphan" comma opening the aside, the answer is usually the comma that closes it.'
    },
    {
      id:'VW1-07', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"The collection of rare stamps that the library acquired last spring %BLANK% now available for students to examine.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'is', B:'are', C:'were', D:'have been'},
      correct:'A',
      expCorrect:'The subject is "The collection" (singular); "of rare stamps" is only a prepositional phrase that does not change the number. A singular subject calls for a singular verb: "The collection… is now available".',
      expWrong:{
        B:'"are" is plural and agrees with "stamps", but "stamps" sits inside the prepositional phrase, it is not the subject.',
        C:'"were" is plural and past tense on top of that; the singular subject "collection" and the present sense call for "is".',
        D:'“have been” is plural; it does not agree with the singular subject “collection”.'
      },
      tip:'Cover the phrase between the subject and the verb ("of rare stamps that… last spring"). What is left is "The collection ___ now available" → singular "is".'
    },
    {
      id:'VW1-08', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Coordination',
      passage:"The startup's first prototype failed every stress %BLANK% the engineers refused to abandon the design they believed in.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'test,', B:'test', C:'test; yet,', D:'test, yet'},
      correct:'D',
      expCorrect:'There are two independent sentences: "The startup’s first prototype failed every stress test" and "the engineers refused to abandon the design…". To join them with contrast you use a comma + the coordinating conjunction "yet": "…stress test, yet the engineers refused…".',
      expWrong:{
        A:'A single comma between two complete sentences is a comma splice.',
        B:'With nothing there, the two sentences fuse into a run-on (“…stress test the engineers refused…”).',
        C:'The semicolon already joins the two sentences, so adding "yet" is redundant, and the comma after "yet" is wrong too.'
      },
      tip:'Two complete sentences + contrast → a comma right BEFORE and/but/or/yet/so. Do not mix ";" with the conjunction: one or the other, not both.'
    },
    {
      id:'VW1-09', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Rhetorical Synthesis',
      stem:'While researching an unusual plant, a student has taken the following notes:<ul><li>Rafflesia arnoldii is a plant native to the rainforests of Sumatra.</li><li>It produces the largest individual flower of any plant on Earth.</li><li>A single bloom can measure up to 1 meter across.</li><li>It has no leaves, stems, or roots of its own.</li><li>It gives off a strong odor of rotting meat.</li></ul>The student wants to emphasize the unusual size of the plant’s flower. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'Rafflesia arnoldii, which is native to the rainforests of Sumatra, has no leaves, stems, or roots of its own.',
        B:'Rafflesia arnoldii produces the largest individual flower of any plant on Earth, with a single bloom measuring up to 1 meter across.',
        C:'Rafflesia arnoldii, a plant of the Sumatran rainforest, gives off a strong odor of rotting meat.',
        D:'Native to Sumatra, Rafflesia arnoldii is a plant that many curious travelers hope one day to see.'
      },
      correct:'B',
      expCorrect:'The goal is to HIGHLIGHT the flower’s unusual size. Option B uses exactly the two size facts from the notes: "the largest individual flower on Earth" and "a single bloom up to 1 meter across". It meets the goal and is supported by the notes.',
      expWrong:{
        A:'It uses facts from the notes, but it is about having no leaves, stems or roots: it says nothing about size.',
        C:'It focuses on the smell of rotting meat, not on the size of the flower.',
        D:'It is about travelers’ interest, a fact that is not even in the notes and that does not touch the size.'
      },
      tip:'In SYNTHESIS, underline the GOAL first (here: the size). The answer has to meet it AND come from the notes: pick the option with the size facts, ignore the rest even if they are true.'
    },
    {
      id:'VW1-10', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Rhetorical Synthesis',
      stem:'A student writing about an ancient device has taken the following notes:<ul><li>The Antikythera mechanism is an ancient Greek device.</li><li>It was recovered from a shipwreck off the Greek coast in 1901.</li><li>It is built from interlocking bronze gears.</li><li>It could predict the positions of the sun and the moon.</li><li>Researchers date it to around 100 BCE.</li></ul>The student wants to explain what the mechanism was able to do. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'The Antikythera mechanism could predict the positions of the sun and the moon.',
        B:'The Antikythera mechanism was recovered from a shipwreck off the Greek coast in 1901.',
        C:'Built from interlocking bronze gears, the Antikythera mechanism is an ancient Greek device.',
        D:'Researchers date the Antikythera mechanism to around 100 BCE.'
      },
      correct:'A',
      expCorrect:'The goal is to explain WHAT the mechanism could DO. Option A delivers exactly that function according to the notes: predicting the positions of the sun and the moon. It meets the goal and is supported.',
      expWrong:{
        B:'It tells where and when it was found, not what the device could do.',
        C:'It describes what it is made of (bronze gears) and what it is, not its function.',
        D:'It gives the approximate date, not a capability of the mechanism.'
      },
      tip:'The goal rules. If it asks what the object "could do", look for the verb of action or capability in the notes ("could predict…"), not facts about origin, material or date.'
    },
    {
      id:'VW1-11', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context',
      passage:"Although the committee had braced for a bitter clash, the two longtime rivals negotiated with surprising %BLANK% shaking hands and even sharing a laugh before the meeting ended.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'acrimony', B:'reluctance', C:'bewilderment', D:'cordiality'},
      correct:'D',
      expCorrect:'The context contrasts what was expected (a bitter clash) with what happened: they shook hands and even shared a laugh. That describes warmth and good treatment, so "cordiality" is the precise word.',
      expWrong:{
        A:'"acrimony" is the OPPOSITE of shaking hands and laughing together.',
        B:'"reluctance" does not fit: they negotiated gladly, not grudgingly.',
        C:'"bewilderment" does not match a warm, friendly exchange; nothing suggests confusion.'
      },
      tip:'In WORDS IN CONTEXT let the clues rule. "Shaking hands and even sharing a laugh" points to warmth → cordiality, not bitterness or confusion.'
    },
    {
      id:'VW1-12', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context',
      passage:"Critics praised the documentary for its %BLANK% portrayal of factory life: nothing was exaggerated or softened, and every detail seemed drawn directly from reality.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'whimsical', B:'nostalgic', C:'faithful', D:'ambiguous'},
      correct:'C',
      expCorrect:'The clue after the colon defines the word: "nothing exaggerated or softened, every detail drawn from reality". That is a portrayal true to life, so "faithful" is the precise word.',
      expWrong:{
        A:'“whimsical” (caprichoso, fantasioso) choca con “sacado directamente de la realidad”.',
        B:'"nostalgic" adds an emotion the text never mentions; the focus is accuracy, not longing.',
        D:'“ambiguous” (ambiguo) contradice la pista: si nada se exagera ni suaviza y todo viene de la realidad, no hay ambigüedad.'
      },
      tip:'When there is a colon, what follows almost always DEFINES the blank. Here "nothing exaggerated… drawn from reality" = true to life → "faithful".'
    }
  ]
});
