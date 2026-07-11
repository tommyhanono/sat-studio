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
      expCorrect:'El texto primero da un consejo común (“elimina todas las pausas”) y luego trae investigadores que lo contradicen (las pausas bien puestas ayudan y dan seguridad). Ese es el movimiento: consejo aceptado → evidencia que lo refuta. La opción B lo describe.',
      expWrong:{
        A:'No está apoyado: el texto no hace un recorrido histórico por siglos; contrasta un consejo con evidencia actual.',
        C:'Malinterpreta la estructura: no hay una experiencia personal ni una anécdota; se habla de consejos y hallazgos de investigadores.',
        D:'Describe una parte, no el todo: no se limita a definir un término con ejemplos; plantea un consejo y lo pone en duda.'
      },
      tip:'Para STRUCTURE traza el MOVIMIENTO del texto. Cuando aparece “challenge this advice / find that…”, casi siempre es idea aceptada primero y evidencia en contra después.'
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
      expCorrect:'El texto cuenta que los manuscritos de Price estuvieron perdidos por décadas, que al reaparecer se pudieron tocar por fin, y cierra diciendo que los musicólogos lo ven como recordatorio de cuánta música sobrevive solo por casualidad. El propósito es usar ESE caso para mostrar cómo la supervivencia de la música pasada depende del azar.',
      expWrong:{
        B:'No está apoyado: nunca dice que Price fuera “la más importante” de su generación; usa su caso como ejemplo, no como ranking.',
        C:'Describe una parte, no el todo: menciona que las orquestas pudieron tocarla, pero no explica el proceso de preparar una sinfonía.',
        D:'Malinterpreta el tono: el texto no reprocha a los familiares; usa el hallazgo para hablar del azar en la supervivencia de la música.'
      },
      tip:'Para PURPOSE resume la idea que sostiene TODO el texto. La última oración (“a reminder of how much… survive only by chance”) suele entregar el propósito en bandeja.'
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
      expCorrect:'La predicción es específica: si las represas frenan el flujo, los pozos JUSTO río abajo de las represas deberían subir en pocos años. La opción C reporta exactamente eso (pozos río abajo suben en tres años), así que apoya la hipótesis de forma directa.',
      expWrong:{
        A:'No apoya la subida del agua: cuántas represas hicieron los castores no dice nada sobre si el nivel del agua subió.',
        B:'Se sale del tema: plantas “no relacionadas con el nivel del agua” no dan evidencia sobre la napa freática.',
        D:'Solo es un control, no apoyo directo: que pozos LEJOS de las represas no cambien es consistente, pero no confirma que las represas HAGAN SUBIR el agua cerca de ellas, que es lo que ella predijo.'
      },
      tip:'En COMMAND OF EVIDENCE, la mejor opción calca la predicción. Aquí la hipótesis nombra “pozos río abajo de las represas”: busca la opción que mide justo eso, no un dato lateral.'
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
      expCorrect:'La afirmación del estudiante es que el texto DESMIENTE en voz baja la indiferencia de Amara. La opción D muestra justo eso: pese a decir que no le importa, recuerda con ternura cada cerca torcida y la luz exacta del atardecer de su calle. Ese detalle cariñoso contradice su indiferencia declarada.',
      expWrong:{
        A:'Refuerza la indiferencia, no la contradice: “se fue y rara vez pensó en volver” confirma justo lo que ella dice sentir.',
        B:'Es neutral: describir una estación concurrida no revela nada sobre el apego de Amara al pueblo.',
        C:'Va en la misma línea de la indiferencia: “nunca entendí por qué alguien se quedaría” suena a rechazo, no a apego oculto.'
      },
      tip:'Para “which quote best supports”, primero fija QUÉ se quiere probar (aquí: que sí le importa). Descarta las citas que dicen lo contrario o que son neutras; la buena muestra el sentimiento escondido.'
    },
    {
      id:'VW1-05', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Punctuation (dos puntos para introducir una lista)',
      passage:"To reproduce the medieval recipe faithfully, the food historian had to track down three nearly forgotten %BLANK% verjuice, grains of paradise, and long pepper.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'ingredients', B:'ingredients,', C:'ingredients:', D:'ingredients;'},
      correct:'C',
      expCorrect:'Antes del blank hay una oración completa (“the food historian had to track down three nearly forgotten ingredients”) y lo que sigue es la lista que la detalla. Introducir una lista después de una oración completa es justo el trabajo de los dos puntos.',
      expWrong:{
        A:'Sin puntuación, “ingredients verjuice, grains…” se fusiona: la lista queda pegada al sustantivo.',
        B:'La coma haría que “ingredients” parezca el primer elemento de la serie, no lo que la lista describe; no introduce la lista correctamente.',
        D:'El punto y coma exige una oración independiente después, y una lista de nombres no lo es.'
      },
      tip:'Colon = solo después de una oración COMPLETA que anuncia una lista o explicación. Tápalo: lo de antes debe poder cerrar con punto.'
    },
    {
      id:'VW1-06', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Punctuation (elemento no esencial, comas en pareja)',
      passage:"The Voyager 1 probe, launched in %BLANK% is now the most distant human-made object from Earth.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'1977', B:'1977,', C:'1977;', D:'1977:'},
      correct:'B',
      expCorrect:'“launched in 1977” es un inciso NO esencial que describe al sujeto “The Voyager 1 probe”. Debe ir entre DOS comas; como ya hay coma de apertura antes de “launched”, falta la coma de cierre antes de “is”.',
      expWrong:{
        A:'Sin la coma de cierre, el inciso abre pero no cierra → queda desbalanceado.',
        C:'El punto y coma no cierra un inciso y exige una oración independiente después; “is now the most distant…” no lo es.',
        D:'El colon no cierra un inciso y separaría al sujeto de su verbo (“is”).'
      },
      tip:'Apertura y cierre GEMELOS: coma–coma. Si ves una coma “huérfana” abriendo el inciso, la respuesta suele ser la coma que lo cierra.'
    },
    {
      id:'VW1-07', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"The collection of rare stamps that the library acquired last spring %BLANK% now available for students to examine.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'is', B:'are', C:'were', D:'have been'},
      correct:'A',
      expCorrect:'El sujeto es “The collection” (singular); “of rare stamps” es solo una frase preposicional que no cambia el número. Un sujeto singular pide un verbo singular: “The collection… is now available”.',
      expWrong:{
        B:'“are” es plural y concuerda con “stamps”, pero “stamps” está dentro de la frase preposicional, no es el sujeto.',
        C:'“were” es plural y además pasado; el sujeto singular “collection” y el sentido presente piden “is”.',
        D:'“have been” es plural; no concuerda con el sujeto singular “collection”.'
      },
      tip:'Tapa la frase entre el sujeto y el verbo (“of rare stamps that…last spring”). Queda “The collection ___ now available” → singular “is”.'
    },
    {
      id:'VW1-08', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Coordination',
      passage:"The startup's first prototype failed every stress %BLANK% the engineers refused to abandon the design they believed in.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'test,', B:'test', C:'test; yet,', D:'test, yet'},
      correct:'D',
      expCorrect:'Hay dos oraciones independientes: “The startup’s first prototype failed every stress test” y “the engineers refused to abandon the design…”. Para unirlas con contraste se usa una coma + la conjunción coordinante “yet”: “…stress test, yet the engineers refused…”.',
      expWrong:{
        A:'Solo una coma entre dos oraciones completas es un comma splice.',
        B:'Sin nada, las dos oraciones se fusionan en un run-on (“…stress test the engineers refused…”).',
        C:'El punto y coma ya une las dos oraciones, así que sumarle “yet” es redundante, y la coma después de “yet” sobra.'
      },
      tip:'Dos oraciones completas + contraste → coma justo ANTES de and/but/or/yet/so. No mezcles “;” con la conjunción: uno u otro, no los dos.'
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
      expCorrect:'La meta es RESALTAR el tamaño inusual de la flor. La opción B usa justo los dos datos de tamaño de las notas: “la flor individual más grande de la Tierra” y “una sola flor de hasta 1 metro de ancho”. Cumple la meta y está apoyada por las notas.',
      expWrong:{
        A:'Usa datos de las notas, pero habla de que no tiene hojas, tallos ni raíces: no dice nada del tamaño.',
        C:'Se enfoca en el olor a carne podrida, no en el tamaño de la flor.',
        D:'Habla del interés de los viajeros, un dato que ni siquiera está en las notas y que no toca el tamaño.'
      },
      tip:'En SYNTHESIS, primero subraya la META (aquí: el tamaño). La respuesta debe cumplirla Y salir de las notas: elige la opción con los datos de tamaño, ignora las demás aunque sean ciertas.'
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
      expCorrect:'La meta es explicar QUÉ podía HACER el mecanismo. La opción A entrega exactamente esa función según las notas: predecir las posiciones del sol y la luna. Cumple la meta y está apoyada.',
      expWrong:{
        B:'Cuenta dónde y cuándo lo encontraron, no lo que el aparato podía hacer.',
        C:'Describe de qué está hecho (engranajes de bronce) y qué es, no su función.',
        D:'Da la fecha aproximada, no una capacidad del mecanismo.'
      },
      tip:'La meta manda. Si pide lo que el objeto “podía hacer”, busca el verbo de acción/capacidad en las notas (“could predict…”), no datos de origen, material o fecha.'
    },
    {
      id:'VW1-11', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context',
      passage:"Although the committee had braced for a bitter clash, the two longtime rivals negotiated with surprising %BLANK% shaking hands and even sharing a laugh before the meeting ended.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'acrimony', B:'reluctance', C:'bewilderment', D:'cordiality'},
      correct:'D',
      expCorrect:'El contexto contrasta lo esperado (un choque amargo) con lo que pasó: se dieron la mano y hasta rieron. Eso describe calidez y buen trato, así que “cordiality” (cordialidad) es la palabra precisa.',
      expWrong:{
        A:'“acrimony” (amargura, aspereza) es lo OPUESTO a darse la mano y reír juntos.',
        B:'“reluctance” (desgana) no encaja: negociaron con gusto, no a regañadientes.',
        C:'“bewilderment” (desconcierto) no calza con un trato cálido y amistoso; nada indica confusión.'
      },
      tip:'En WORDS IN CONTEXT deja que las pistas manden. “Shaking hands and even sharing a laugh” apunta a calidez → cordialidad, no a amargura ni confusión.'
    },
    {
      id:'VW1-12', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context',
      passage:"Critics praised the documentary for its %BLANK% portrayal of factory life: nothing was exaggerated or softened, and every detail seemed drawn directly from reality.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'whimsical', B:'nostalgic', C:'faithful', D:'ambiguous'},
      correct:'C',
      expCorrect:'La pista tras los dos puntos define la palabra: “nada exagerado ni suavizado, cada detalle sacado de la realidad”. Eso es una representación fiel a lo real, así que “faithful” (fiel) es la palabra precisa.',
      expWrong:{
        A:'“whimsical” (caprichoso, fantasioso) choca con “sacado directamente de la realidad”.',
        B:'“nostalgic” (nostálgico) añade una emoción que el texto no menciona; el foco es la exactitud, no la añoranza.',
        D:'“ambiguous” (ambiguo) contradice la pista: si nada se exagera ni suaviza y todo viene de la realidad, no hay ambigüedad.'
      },
      tip:'Cuando hay dos puntos, lo que sigue casi siempre DEFINE el blank. Aquí “nothing exaggerated… drawn from reality” = fiel a lo real → “faithful”.'
    }
  ]
});
