/* SAT Studio question set — Reading & Writing: B-1 Weak Skills Mixed Exam (B1X-01 a B1X-15) */
window.SAT_SETS.push({
  id: 'rw-b1exam',
  title: 'B-1 Weak Skills — Mixed Exam',
  section: 'rw',
  level: 'Difícil',
  description: 'A mixed Verbal exam targeting the skills you missed on B-1: data, grammar agreement, structure & purpose, punctuation, transitions, and words in context.',
  minutes: 20,
  questions: [
    {
      id:'B1X-01', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Interpreting Data in Context',
      passage:"A biologist compared how quickly four species of frog reached the far side of a 10-meter test channel. She recorded the average crossing time for each species during trials held at the same water temperature.<br><br><table border=\"1\" cellpadding=\"6\" style=\"border-collapse:collapse\"><tr><th>Species</th><th>Avg. crossing time (seconds)</th></tr><tr><td>Green tree frog</td><td>42</td></tr><tr><td>Marsh frog</td><td>31</td></tr><tr><td>Clawed frog</td><td>19</td></tr><tr><td>Painted frog</td><td>55</td></tr></table><br>The biologist noted that the clawed frog, whose webbed feet are unusually large, crossed the channel faster than any other species tested. To support her observation with the data, she might point out that the clawed frog completed the crossing ______",
      stem:'Which choice most effectively uses data from the table to complete the example?',
      choices:{
        A:'in 55 seconds, the longest time of any species.',
        B:'in 19 seconds, less time than each of the other three species.',
        C:'in 31 seconds, faster than the green tree frog.',
        D:'in 42 seconds, slightly faster than the painted frog.'
      },
      correct:'B',
      expCorrect:'The biologist says the clawed frog was the FASTEST. In the table its time is 19 s, the lowest of the four, so it took less than each of the other three species. Option B uses the right figure and backs up her observation.',
      expWrong:{
        A:'55 s is the painted frog’s time (the slowest), not the clawed frog’s, and "the longest" contradicts it having been the fastest.',
        C:'31 s is the marsh frog’s time, not the clawed frog’s; the figure is assigned to the wrong species.',
        D:'42 s es el tiempo de la green tree frog; además la clawed frog no fue “ligeramente” más rápida que la painted frog, sino mucho más rápida.'
      },
      tip:'First pin down the claim ("the fastest"), then find in the table the number belonging to THAT species. Watch out for options citing the time from another row.'
    },
    {
      id:'B1X-02', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Interpreting Data in Context',
      passage:"Researchers surveyed how many hours per week residents of three neighborhoods spent in local parks before and after new walking trails were installed. The results are shown below.<br><br><table border=\"1\" cellpadding=\"6\" style=\"border-collapse:collapse\"><tr><th>Neighborhood</th><th>Before trails (hrs/week)</th><th>After trails (hrs/week)</th></tr><tr><td>Riverside</td><td>3.0</td><td>5.4</td></tr><tr><td>Oakhill</td><td>2.5</td><td>2.8</td></tr><tr><td>Bellview</td><td>4.0</td><td>7.2</td></tr></table><br>The team concluded that the new trails were followed by a large increase in park use in some neighborhoods but only a small change in others. This conclusion is best supported by the fact that ______",
      stem:'Which choice most effectively uses data from the table to support the researchers’ conclusion?',
      choices:{
        A:'Bellview’s park use rose from 4.0 to 7.2 hours, while Oakhill’s rose only from 2.5 to 2.8 hours.',
        B:'all three neighborhoods reported exactly the same park use after the trails were installed.',
        C:'Riverside’s park use fell from 5.4 to 3.0 hours after the trails were added.',
        D:'Oakhill showed the largest increase in park use of the three neighborhoods.'
      },
      correct:'A',
      expCorrect:'The conclusion contrasts a big increase in some neighborhoods with a small change in others. Bellview rose from 4.0 to 7.2 (a big jump) and Oakhill only from 2.5 to 2.8 (a minimal change). Option A cites both extremes and backs up exactly that conclusion.',
      expWrong:{
        B:'Falso según la tabla: los tres barrios reportan valores DISTINTOS después de los senderos (5.4, 2.8, 7.2).',
        C:'Invierte los datos: Riverside SUBIÓ de 3.0 a 5.4, no bajó de 5.4 a 3.0.',
        D:'Oakhill tuvo el aumento MÁS PEQUEÑO (0.3 h), no el más grande; el mayor fue Bellview (+3.2 h).'
      },
      tip:'When the conclusion says "large in some, small in others", the best option shows BOTH cases. Verify that the direction (rose/fell) matches the table.'
    },
    {
      id:'B1X-03', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context',
      passage:"Although early critics found her novels difficult, later readers came to admire their ______ structure: every subplot, however minor it first appeared, eventually locked into place to serve the larger story.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'chaotic', B:'intricate', C:'careless', D:'plain'},
      correct:'B',
      expCorrect:'The text explains that every subplot, however minor it seemed, ended up fitting in service of the larger story. That describes an "intricate" structure (complex but well articulated), exactly what readers admired.',
      expWrong:{
        A:'“Chaotic” (caótica) choca con la idea de que todo encaja en su lugar; no habría orden que admirar.',
        C:'“Careless” (descuidada) es negativa y contradice que los lectores la ADMIRARAN.',
        D:'“Plain” (simple) contradice que los primeros críticos la hallaran difícil y que cada subtrama aportara al conjunto.'
      },
      tip:'Look for the clue after the colon: if everything "fits in service of the story", the word has to mean complex and well woven, not messy or simple.'
    },
    {
      id:'B1X-04', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context',
      passage:"The committee’s report did not openly criticize the mayor’s plan; instead, its praise was so heavily qualified that its disapproval was merely ______, evident only to readers who looked past the polite surface.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'implicit', B:'explicit', C:'exaggerated', D:'accidental'},
      correct:'A',
      expCorrect:'The report does not criticize openly and is evident only to someone looking past the polite surface. That disapproval is suggested without being stated = "implicit".',
      expWrong:{
        B:'“Explicit” es lo opuesto: significa dicho abiertamente, pero el texto dice que NO critica de forma abierta.',
        C:'“Exaggerated” no encaja: el problema es que la desaprobación está oculta, no inflada.',
        D:'“Accidental” contradice el tono: la desaprobación se disfraza a propósito con elogios “muy matizados”, no por accidente.'
      },
      tip:'"Did not openly… evident only to readers who looked past the surface" points to something hinted at. Implicit = implied; explicit = stated outright. Pick the opposite of "open".'
    },
    {
      id:'B1X-05', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Punctuation',
      passage:"The museum’s newest wing houses a single, breathtaking ______ a 12-meter skeleton of a whale suspended from the ceiling as if mid-dive.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'exhibit,', B:'exhibit', C:'exhibit:', D:'exhibit;'},
      correct:'C',
      expCorrect:'Before the blank there is a complete sentence ("The museum’s newest wing houses a single, breathtaking exhibit") and what follows describes and names that exhibit. The colon introduces that clarification after a complete sentence.',
      expWrong:{
        A:'Una coma sola no puede introducir así la aclaración; deja la frase suelta “a 12-meter skeleton…” mal conectada.',
        B:'Sin puntuación, “exhibit a 12-meter skeleton…” se fusiona y se lee mal.',
        D:'El punto y coma exige una oración independiente después, y “a 12-meter skeleton… suspended…” no es una oración completa.'
      },
      tip:'Colon = after a COMPLETE sentence that announces what follows. Here what comes before can end in a period, so the colon fits.'
    },
    {
      id:'B1X-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punctuation',
      passage:"Dr. Alvarez had spent a decade studying volcanic ______ that background made her the first to recognize that the mountain’s recent tremors signaled an imminent eruption.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'soil,', B:'soil', C:'soil:', D:'soil;'},
      correct:'D',
      expCorrect:'On both sides of the blank there are complete sentences: "Dr. Alvarez had spent a decade studying volcanic soil" and "that background made her the first to recognize…". To join two independent clauses with no conjunction, the semicolon is what you want.',
      expWrong:{
        A:'Una coma sola entre dos oraciones completas es un comma splice.',
        B:'Sin puntuación, las dos oraciones se fusionan (run-on).',
        C:'El colon uniría dos independientes solo si la segunda EXPLICA o ejemplifica la primera; aquí la segunda añade una consecuencia narrativa, así que no encaja mejor que el punto y coma.'
      },
      tip:'The period test: if both sides of the blank are complete sentences and there is no conjunction, the semicolon is the safe join.'
    },
    {
      id:'B1X-07', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Pronoun Agreement',
      passage:"Each of the volunteers who signed up for the coastal cleanup was asked to bring ______ own reusable gloves and a refillable water bottle.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'their', B:'they’re', C:'his or her', D:'its'},
      correct:'C',
      expCorrect:'El sujeto es “Each of the volunteers”, y “each” es singular. El pronombre posesivo singular que concuerda es “his or her”: “bring his or her own gloves”.',
      expWrong:{
        A:'“Their” es plural; no concuerda con el sujeto singular “each”.',
        B:'“They’re” = “they are”, una contracción, no un posesivo; no puede modificar “gloves”.',
        D:'“Its” se usa para cosas o animales, no para personas voluntarias.'
      },
      tip:'"Each / every / one of…" are SINGULAR even with a plural after them. For people, the singular possessive is "his or her".'
    },
    {
      id:'B1X-08', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"The collection of rare butterfly specimens gathered during the 1890s expeditions ______ now displayed in a climate-controlled room to prevent fading.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'are', B:'is', C:'were', D:'have been'},
      correct:'B',
      expCorrect:'El sujeto es “The collection” (singular); “of rare butterfly specimens… expeditions” es solo un modificador. El verbo singular en presente que concuerda es “is”: “The collection… is now displayed”.',
      expWrong:{
        A:'“Are” es plural y concuerda con “specimens”, pero ese no es el sujeto; el sujeto es “collection”, singular.',
        C:'“Were” es plural y además pasado; el marcador “now” pide presente singular.',
        D:'“Have been” es plural; no concuerda con el sujeto singular “collection”.'
      },
      tip:'Ignore the phrase between the subject and the verb ("of… specimens…"). Ask: what is displayed? The COLLECTION → singular → "is".'
    },
    {
      id:'B1X-09', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Text Structure and Purpose',
      passage:"Historians once assumed that the ancient city had been abandoned suddenly after a single catastrophe. Recent excavations tell a more gradual story. Layer by layer, the ruins reveal shrinking households, patched-up walls, and dwindling trade goods—signs of a community that declined slowly over generations rather than vanishing overnight.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It presents an earlier belief and then offers evidence that revises it.',
        B:'It lists several unrelated theories without favoring any of them.',
        C:'It describes a catastrophe and then predicts a similar future event.',
        D:'It compares two ancient cities that declined for the same reason.'
      },
      correct:'A',
      expCorrect:'The text opens with what historians "once assumed" (a sudden abandonment) and then presents recent excavations whose layers show a gradual decline. It is the structure of old belief → evidence that corrects it.',
      expWrong:{
        B:'No es una lista de teorías neutrales: el texto SÍ toma partido por la versión gradual apoyada en la nueva evidencia.',
        C:'No predice ningún evento futuro; contrasta pasado súbito vs. declive gradual, sin proyectar nada.',
        D:'Solo se habla de UNA ciudad; no hay comparación entre dos ciudades.'
      },
      tip:'Spot the turn: "once assumed… Recent excavations tell a more gradual story". That "it used to be believed / now the evidence shows" is the revision structure.'
    },
    {
      id:'B1X-10', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Purpose',
      passage:"In the opening chapter, the author does not describe the storm directly. Instead, she lingers on small details: a shutter banging, a candle guttering, a dog refusing to leave the doorway. Only through these uneasy images does the reader sense the danger gathering outside.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To explain how the author builds a sense of danger through indirect, telling details.',
        B:'To argue that the novel’s opening chapter is too slow and should be cut.',
        C:'To summarize the entire plot of the novel for new readers.',
        D:'To describe the scientific causes of severe storms.'
      },
      correct:'A',
      expCorrect:'The text points out that the author does NOT describe the storm directly, but uses small unsettling details so the reader senses the danger. The purpose is to explain how she builds that sense of danger indirectly.',
      expWrong:{
        B:'No opina que el capítulo sea lento ni que deba recortarse; describe una técnica, no la critica.',
        C:'No resume la trama de la novela; se centra solo en el efecto del capítulo inicial.',
        D:'No explica causas científicas de tormentas; la tormenta es un recurso narrativo, no un tema físico.'
      },
      tip:'"Main purpose" = why this was written. Here everything points to one thing: how the author suggests danger with details instead of describing it.'
    },
    {
      id:'B1X-11', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Conclusions',
      passage:"A student is writing about a community garden. She wants to conclude her paragraph by emphasizing the garden’s broad benefit to the neighborhood. She has noted the following: the garden supplies fresh vegetables to nearby families; it hosts weekend classes for children; and it has become a gathering spot where longtime and new residents meet.",
      stem:'Which choice most effectively uses the notes to accomplish this goal?',
      choices:{
        A:'The garden grows several kinds of tomatoes that ripen in late summer.',
        B:'More than anything, the garden needs additional volunteers to weed its beds.',
        C:'By feeding families, teaching children, and bringing neighbors together, the garden has become a resource the whole community relies on.',
        D:'The weekend classes for children are held on Saturday mornings.'
      },
      correct:'C',
      expCorrect:'The goal is to close by highlighting the BROAD benefit to the neighborhood. Option C gathers the three notes (it feeds families, it teaches children, it brings neighbors together) and presents them as a resource the whole community depends on. Exactly what was asked.',
      expWrong:{
        A:'Es un detalle sobre tomates; no transmite el beneficio amplio para el barrio.',
        B:'Habla de una necesidad (voluntarios), no del beneficio que el jardín aporta; cambia el enfoque.',
        D:'Da un dato menor (el horario de las clases) en lugar de resumir el impacto general.'
      },
      tip:'When they ask for a conclusion that "emphasizes the broad benefit", pick the option that pulls SEVERAL notes into one general idea, not the one giving a single detail.'
    },
    {
      id:'B1X-12', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions',
      passage:"Solar panels are often praised for producing electricity without burning fuel. Manufacturing them, ______ requires mining and processing materials that carry their own environmental costs.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'therefore,', B:'however,', C:'for example,', D:'likewise,'},
      correct:'B',
      expCorrect:'The first sentence praises the panels (electricity without burning fuel); the second presents a downside (their manufacture has environmental costs). That contrast calls for "however".',
      expWrong:{
        A:'“Therefore” marca consecuencia, pero la segunda idea no es un resultado de la primera; es un contrapunto.',
        C:'“For example” anuncia un ejemplo de lo anterior, y el costo de fabricación no ejemplifica lo bueno del panel: lo contradice.',
        D:'“Likewise” suma algo similar, pero aquí las ideas se OPONEN, no se parecen.'
      },
      tip:'Praise first, then a problem → a contrast signal. "However" marks that "yes, but on the other hand".'
    },
    {
      id:'B1X-13', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions',
      passage:"The trail was far steeper than the map had suggested, and a cold rain began to fall an hour into the hike. ______ the group decided to turn back and try again on a clearer day.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Nevertheless,', B:'For instance,', C:'In contrast,', D:'As a result,'},
      correct:'D',
      expCorrect:'The first sentence gives the causes (a very steep trail and cold rain); the second is the consequence (they decided to turn back). That cause→effect relationship calls for "as a result".',
      expWrong:{
        A:'“Nevertheless” marca contraste, pero devolverse es la reacción ESPERADA ante esas condiciones, no algo a pesar de ellas.',
        B:'“For instance” introduce un ejemplo; la segunda oración no ejemplifica la primera, es su resultado.',
        C:'“In contrast” opone ideas, pero aquí la segunda oración SIGUE lógicamente de la primera, no la contradice.'
      },
      tip:'If the first thing is the reason and the second is what happened because of it, the connection is result-based: "as a result" / "therefore".'
    },
    {
      id:'B1X-14', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Inferences',
      passage:"When a species of fig tree is introduced to a new region without the specific wasp that pollinates it, the tree may grow tall and healthy yet never produce viable seeds. Gardeners admiring its glossy leaves often have no idea that, biologically speaking, the transplanted tree has reached a dead end.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Fig trees cannot survive at all outside their native region.',
        B:'A fig tree can appear thriving while being unable to reproduce without its pollinating wasp.',
        C:'Gardeners generally prefer fig trees to any other ornamental plant.',
        D:'The pollinating wasp is more important to gardeners than the fig tree itself.'
      },
      correct:'B',
      expCorrect:'The text says that without its pollinating wasp the tree grows tall and healthy but never produces viable seeds: a biological "dead end". The central idea is that it can LOOK thriving and at the same time be unable to reproduce.',
      expWrong:{
        A:'Contradice el texto: el árbol SÍ sobrevive y crece sano; lo que no puede es reproducirse.',
        C:'No está apoyado: el texto no compara la preferencia de los jardineros por unas plantas u otras.',
        D:'Distorsiona: el texto habla del papel biológico de la avispa, no de qué le importa más al jardinero.'
      },
      tip:'The central idea reconciles the two halves of the text: it looks healthy BUT produces no seeds. Rule out options that take only half ("it does not survive").'
    },
    {
      id:'B1X-15', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Inferences',
      passage:"A conservation team reintroduced beavers to a stretch of river that had been straightened and channelized decades earlier. Within a few years, the beavers’ dams slowed the current, spread water across the floodplain, and created ponds where fish and insects returned in growing numbers. The team had expected to restore the river’s wildlife only through direct human effort.",
      stem:'Based on the text, which statement is the most reasonable inference?',
      choices:{
        A:'Beavers can drive ecological recovery that people had assumed would require direct human intervention.',
        B:'Straightened rivers can never support any fish or insect life.',
        C:'The conservation team regretted reintroducing the beavers to the river.',
        D:'Beavers build dams mainly to provide habitats for human researchers.'
      },
      correct:'A',
      expCorrect:'The team expected to restore the wildlife through direct human effort alone, but it was the beavers who, with their dams, brought fish and insects back. You infer that beavers can drive the recovery that was thought to require direct human intervention.',
      expWrong:{
        B:'Demasiado extremo: el río estaba canalizado, pero el texto no dice que NUNCA pueda haber peces o insectos; de hecho regresaron.',
        C:'Contradice el texto: la reintroducción funcionó, no hay señal de arrepentimiento.',
        D:'Ilógico: los castores construyen represas por su propio comportamiento; el beneficio a los investigadores no es su “propósito”.'
      },
      tip:'Notice the clash between what the team EXPECTED (human effort alone) and what HAPPENED (the beavers pulled it off). The inference captures that surprise.'
    }
  ]
});
