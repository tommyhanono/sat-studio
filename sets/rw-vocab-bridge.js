/* SAT Studio question set — Reading & Writing: Vocabulary Medium-Hard Bridge */
(function(){
  window.SAT_SETS.push({
    id: 'rw-vocab-bridge',
    title: 'R&W — Vocabulary: Medium-Hard Bridge',
    section: 'rw',
    level: 'Difícil',
    description: 'Vocabulary in context: multiple-meaning words, nuanced synonyms, academic context clues. Bridge from Media to Hard.',
    minutes: 14,
    questions: [
      {
        id:'VOCAB-01', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Multiple-meaning word with context clues',
        stem:'Which choice completes the text with the most logical and precise word or phrase?\n\n"The engineer\'s proposal was deliberately %BLANK%: she avoided technical jargon and presented ideas in everyday language to ensure the stakeholders could follow her reasoning."\n',
        choices:{A:'meticulous', B:'vague', C:'accessible', D:'complex'},
        correct:'C',
        expCorrect:'"Avoided technical jargon" and "everyday language" → the proposal is understandable to a general audience. "Accessible" = easy to understand.',
        expWrong:{
          A:'Meticulous = detailed/careful, but doesn\'t fit "avoided jargon."',
          B:'Vague = unclear, contradicting "everyday language" clarity.',
          D:'Complex contradicts the effort to simplify.'
        },
        tip:'Look for context clues like "avoided," "simple," "explained clearly" → accessibility. "Technical," "precise," "detailed" → complexity or meticulousness.'
      },
      {
        id:'VOCAB-02', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Synonym selection (closely related words)',
        stem:'Which choice completes the text with the most logical and precise word or phrase?\n\n"The diplomat\'s remarks were %BLANK%—she spoke at length without revealing her true position on the contentious issue."\n',
        choices:{A:'evasive', B:'forthright', C:'concise', D:'provocative'},
        correct:'A',
        expCorrect:'"Without revealing her true position" → she dodged the question = evasive.',
        expWrong:{
          B:'Forthright = honest/direct; opposite of evasive.',
          C:'Concise = brief; no connection to hiding position.',
          D:'Provocative = deliberately upsetting; no fit here.'
        },
        tip:'Evasive = dodging, avoiding commitment. Forthright = honest and direct. These are opposites on the honesty scale.'
      },
      {
        id:'VOCAB-03', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Nuanced synonym distinction',
        stem:'Which choice completes the text with the most logical and precise word or phrase?\n\n"Though the critic praised the musician\'s technical skill, her review was noticeably %BLANK%—she seemed to resent the popularity of the performance."\n',
        choices:{A:'reluctant', B:'dismissive', C:'grudging', D:'indifferent'},
        correct:'C',
        expCorrect:'"Praised...but" → mixed feelings. "Seemed to resent" → she acknowledged merit while withholding enthusiasm = grudging (unwilling, resentful acknowledgment).',
        expWrong:{
          A:'Reluctant = hesitant, but doesn\'t capture the "resentment" aspect.',
          B:'Dismissive = rejecting entirely; contradicts "praised."',
          D:'Indifferent = not caring; contradicts "resent."'
        },
        tip:'Grudging vs. Dismissive: Grudging admits merit while expressing resentment. Dismissive rejects outright. "Praised...but" = grudging tone.'
      },
      {
        id:'VOCAB-04', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Word choice reflecting attitude (positive vs. negative frame)',
        stem:'Which choice completes the text with the most logical and precise word or phrase?\n\n"The committee\'s decision to fund alternative research was %BLANK%, reflecting a willingness to explore unconventional approaches even if success was uncertain."\n',
        choices:{A:'reckless', B:'visionary', C:'impulsive', D:'arbitrary'},
        correct:'B',
        expCorrect:'"Willingness to explore" + "unconventional" + context of funding = visionary (forward-thinking, pioneering). Positive frame.',
        expWrong:{
          A:'Reckless = dangerously careless; too negative for "willingness to explore."',
          C:'Impulsive = acting without thought; doesn\'t fit "decision."',
          D:'Arbitrary = random choice; contradicts deliberate exploration.'
        },
        tip:'Positive frame words: "forward-thinking," "visionary," "pioneering." Negative frame: "reckless," "impulsive," "arbitrary." Match the tone.'
      },
      {
        id:'VOCAB-05', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Context clue: contrast (opposite)',
        stem:'Which choice completes the text with the most logical and precise word or phrase?\n\n"Unlike other insects, the monarch butterfly is surprisingly %BLANK%, capable of surviving harsh winters in climates where other species perish."\n',
        choices:{A:'fragile', B:'resilient', C:'migratory', D:'solitary'},
        correct:'B',
        expCorrect:'"Unlike other insects" (implied weakness) but "surviving harsh winters" (strength) → resilient (able to bounce back).',
        expWrong:{
          A:'Fragile = delicate; contradicts surviving harsh conditions.',
          C:'Migratory = travels; not the contrast here.',
          D:'Solitary = alone; irrelevant.'
        },
        tip:'Contrast clues: "Unlike," "However," "Despite" signal that the word should contrast with the contrast-clause. If implied weakness, pick strength (resilient).'
      },
      {
        id:'VOCAB-06', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Multiple-meaning word (different contexts)',
        stem:'Which choice completes the text with the most logical and precise word or phrase?\n\n"The activist\'s rhetoric was deliberately %BLANK%, designed to provoke emotional reactions rather than encourage rational debate."\n',
        choices:{A:'inflammatory', B:'analytical', C:'measured', D:'obscure'},
        correct:'A',
        expCorrect:'"Provoke emotional reactions" → deliberately shocking/inciting = inflammatory.',
        expWrong:{
          B:'Analytical = logical; contradicts avoiding rational debate.',
          C:'Measured = calm and careful; contradicts provoking reactions.',
          D:'Obscure = unclear; doesn\'t fit provoking reactions.'
        },
        tip:'Inflammatory = inciting strong emotion, often anger. Used to describe heated speech, not calm analysis.'
      },
      {
        id:'VOCAB-07', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Nuanced meaning (similar-sounding words)',
        stem:'Which choice completes the text with the most logical and precise word or phrase?\n\n"The museum\'s new exhibition was thoughtfully %BLANK%: each work was chosen from thousands of pieces in storage so that the objects on display would together tell a coherent story."\n',
        choices:{A:'sparse', B:'limited', C:'curated', D:'austere'},
        correct:'C',
        expCorrect:'La clave es "each work was chosen... to tell a coherent story": hubo una selección intencional y cuidadosa de las piezas. Eso es exactamente "curated" (seleccionado con criterio).',
        expWrong:{
          A:'Sparse = escaso, con pocos elementos. El texto no dice que haya pocas obras, sino que fueron ELEGIDAS con intención.',
          B:'Limited = restringido en cantidad. Igual que A, habla de número, no de la selección cuidadosa que describe el texto.',
          D:'Austere = sobrio, desnudo, severo. No captura la idea de escoger piezas para contar una historia.'
        },
        tip:'Curated = thoughtfully selected. Sparse/Limited = just fewer items. Austere = coldly bare. Curated emphasizes the intentionality.'
      },
      {
        id:'VOCAB-08', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Context clue: restatement or apposition',
        stem:'Which choice completes the text with the most logical and precise word or phrase?\n\n"The author\'s style is inherently %BLANK%—she uses vivid imagery, rhythmic phrasing, and emotional depth to engage readers."\n',
        choices:{A:'tedious', B:'poetic', C:'technical', D:'minimal'},
        correct:'B',
        expCorrect:'"Vivid imagery," "rhythmic phrasing," "emotional depth" = poetic qualities.',
        expWrong:{
          A:'Tedious = boring; contradicts the rich descriptors.',
          C:'Technical = scientific/formal; no fit.',
          D:'Minimal = sparse; contradicts the richness described.'
        },
        tip:'Restatement clues: the examples after the blank define the word. "Vivid, rhythmic, emotional" = poetic (not technical or minimal).'
      },
      {
        id:'VOCAB-09', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Distinguishing between similar negative words',
        stem:'Which choice completes the text with the most logical and precise word or phrase?\n\n"Critics found the novel\'s central character %BLANK%: while intended to be complex, she instead came across as internally inconsistent, her motives shifting from chapter to chapter without any logic connecting them."\n',
        choices:{A:'unconvincing', B:'unlikeable', C:'incoherent', D:'underdeveloped'},
        correct:'C',
        expCorrect:'"Internally inconsistent" y "without any logic connecting them" → al personaje le falta unidad lógica interna = incoherent.',
        expWrong:{
          A:'Unconvincing = poco creíble en general; no captura el defecto específico que describe el texto: la falta de lógica interna.',
          B:'Unlikeable = not sympathetic; irrelevant to inconsistency.',
          D:'Underdeveloped = lacking depth; inconsistent ≠ shallow.'
        },
        tip:'Incoherent = lacking logical unity. Unconvincing = not believable. Underdeveloped = lacking detail. Match the specific critique.'
      },
      {
        id:'VOCAB-10', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Academic vocabulary with negative context clue',
        stem:'Which choice completes the text with the most logical and precise word or phrase?\n\n"Though the proposal promised innovation, the committee judged it %BLANK%, merely rehashing old ideas without meaningful advancement."\n',
        choices:{A:'derivative', B:'superficial', C:'preliminary', D:'ambitious'},
        correct:'A',
        expCorrect:'"Rehashing old ideas" → derived from existing work, not original = derivative.',
        expWrong:{
          B:'Superficial = shallow; doesn\'t capture the sense of copying.',
          C:'Preliminary = early stage; not the issue here.',
          D:'Ambitious = large in scope; contradicts the lack of advancement.'
        },
        tip:'Derivative = unoriginal, derived from other sources. Often used to critique lack of novelty.'
      },
      {
        id:'VOCAB-11', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Multiple meanings of a word (context determines meaning)',
        stem:'Which choice completes the text with the most logical and precise word or phrase?\n\n"The engineer\'s solution was %BLANK%—it addressed the core problem directly, wasting no effort on unnecessary complications."\n',
        choices:{A:'elegant', B:'ruthless', C:'pragmatic', D:'severe'},
        correct:'A',
        expCorrect:'"Direct," "no wasted effort," "avoiding unnecessary complications" = elegant (simple, graceful, and effective).',
        expWrong:{
          B:'Ruthless = harsh and unforgiving; doesn\'t fit engineering excellence.',
          C:'Pragmatic = practical; correct sense but less precise than "elegant" for this elegant simplicity.',
          D:'Severe = strict/harsh; contradicts the positive frame.'
        },
        tip:'Elegant = simple, beautiful, and effective. Often used to describe elegant solutions in math, science, engineering.'
      },
      {
        id:'VOCAB-12', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Synonym nuance (similar words, subtle difference)',
        stem:'Which choice completes the text with the most logical and precise word or phrase?\n\n"The politician\'s career was marked by %BLANK%: she adapted her positions frequently, shifting alliances based on political convenience rather than principle."\n',
        choices:{A:'consistency', B:'expediency', C:'conviction', D:'transparency'},
        correct:'B',
        expCorrect:'"Adapted frequently," "based on convenience" → prioritizing immediate advantage over principle = expediency.',
        expWrong:{
          A:'Consistency = staying the same; opposite of shifting positions.',
          C:'Conviction = strong belief; contradicts shifting for convenience.',
          D:'Transparency = openness; irrelevant to the political maneuvering described.'
        },
        tip:'Expediency = prioritizing short-term advantage. Conviction = holding firm beliefs. These are opposites in this context.'
      }
    ]
  });
})();
