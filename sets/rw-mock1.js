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
      expCorrect:'La segunda parte, tras los dos puntos, explica que el techo no podría soportar las cargas: la idea central no se sostiene. La palabra untenable significa justamente insostenible o indefendible, que es lo que muestran los cálculos.',
      expWrong:{
        B:'Ornate (recargado, ornamental) describe apariencia, no un fallo lógico o estructural; el problema aquí es que la premisa no funciona.',
        C:'Provisional (provisional, temporal) implica que algo es transitorio, pero el texto dice que la premisa es imposible, no temporal.',
        D:'Conventional (convencional) sugeriría algo común o poco original, lo contrario del techo llamado visually striking.'
      },
      tip:'Usa la pista después de los dos puntos como definición del blank. Si esa parte dice que algo no puede funcionar, busca una palabra que signifique insostenible.'
    },
    {
      id:'MK1-02', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context',
      passage:"The novelist rarely stated her themes outright; instead she let them surface %BLANK%, embedded in a character's offhand remark or a seemingly trivial description that a careless reader might skip.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'obtrusively', B:'obliquely', C:'reluctantly', D:'exhaustively'},
      correct:'B',
      expCorrect:'El texto contrasta con stated her themes outright (decirlos directamente): ella los deja aparecer de forma indirecta, escondidos en comentarios y detalles. Obliquely significa de manera indirecta o sesgada, justo ese contraste.',
      expWrong:{
        A:'Obtrusively (de forma llamativa, entrometida) es lo opuesto: los temas están escondidos, no saltan a la vista.',
        C:'Reluctantly (a regañadientes) atribuye una emoción a la autora que el texto no describe; el punto es cómo aparecen los temas, no su ánimo.',
        D:'Exhaustively (exhaustivamente) implica cubrirlo todo en detalle, pero aquí los temas apenas se insinúan.'
      },
      tip:'El punto y coma opone dos ideas: outright (directo) frente al blank. Necesitas una palabra que signifique lo contrario de directo.'
    },
    {
      id:'MK1-03', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context',
      passage:"Far from being a fixed record, the historian argued, the archive is continually %BLANK% by each generation, which decides anew what to preserve, what to discard, and how the surviving documents should be read.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'authenticated', B:'catalogued', C:'reconstituted', D:'digitized'},
      correct:'C',
      expCorrect:'El argumento es que el archivo no es fijo: cada generación decide de nuevo qué guardar, qué descartar y cómo leerlo. Reconstituted (reconstituido, rehecho) capta esa transformación continua.',
      expWrong:{
        A:'Authenticated (autenticado) se refiere a verificar que algo es genuino, no a rehacer el archivo entero según cada época.',
        B:'Catalogued (catalogado) es solo organizar o listar; no abarca decidir qué descartar ni cómo reinterpretar los documentos.',
        D:'Digitized (digitalizado) es un detalle técnico específico que el texto no menciona; el punto es conceptual, no de formato.'
      },
      tip:'Busca la palabra que resuma toda la lista que sigue (guardar, descartar, reinterpretar). Una que solo cubra una parte se queda corta.'
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
      expCorrect:'El texto arranca con la creencia común (un solo inventor) y luego la complica: los registros muestran varios inventores cuyas patentes hubo que combinar. Es creencia establecida seguida de evidencia que apunta a un origen colectivo.',
      expWrong:{
        B:'No sigue la carrera de un solo inventor; de hecho, el punto es que no hubo un único inventor.',
        C:'No compara dos máquinas rivales para elegir la mejor; habla de patentes que debieron unirse, no de una superioridad.',
        D:'No enumera especificaciones técnicas ni evalúa su practicidad; el eje es histórico y de autoría, no técnico.'
      },
      tip:'En preguntas de estructura, fíjate en el giro. El Yet tras la primera oración avisa que van a matizar la creencia inicial: creencia luego complicación.'
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
      expCorrect:'El texto toma una postura desdeñosa (too small and scattered to matter) y la refuta con datos: incluso techos aislados atraen abejas y los cercanos comparten especies, funcionando como stepping-stones. El propósito es mostrar que ese hábitat descartado sí vale.',
      expWrong:{
        A:'No compara amenazas urbanas contra rurales; el foco es el valor de los techos, no un peligro exclusivo de la ciudad.',
        C:'No recomienda plantas ni se dirige a jardineros; presenta hallazgos de un estudio.',
        D:'Menciona un estudio, pero no explica su método para identificar especies; usa el resultado, no el procedimiento.'
      },
      tip:'Main purpose es por qué el autor escribió todo el texto. Si empieza rebatiendo una idea (suggests otherwise), el propósito suele ser presentar evidencia contra esa idea.'
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
      expCorrect:'Prieto predice que los trabajadores remotos abandonarán el centro por pueblos baratos. Vale objeta con encuestas: la mayoría igual quiere vivir cerca de teatros, restaurantes y parques, y extrañan el contacto social. Respondería que ella ignora ese deseo de estar cerca de las amenidades urbanas.',
      expWrong:{
        A:'Vale no acepta que el centro caerá; duda de esa predicción y sugiere que las ciudades pueden atraer de vuelta a esos trabajadores.',
        B:'Vale nunca dice que el trabajo remoto sea pasajero; discute lo que la gente quiere, no si la tendencia se revierte sola.',
        C:'Vale no limita el análisis de Prieto a pueblos; su punto es sobre lo que atrae a la gente a las ciudades grandes.'
      },
      tip:'Primero fija la tesis de cada autor. Vale contradice a Prieto con un dato (la gente quiere amenidades), así que su respuesta será ese contraargumento, no un simple acuerdo.'
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
      expCorrect:'La visión estándar lee la capa de ceniza como una sola noche de destrucción. Chen observa que la ceniza está en bandas separadas por pisos usados normalmente, señal de varios incendios menores a lo largo de años. Respondería que los datos apuntan a un declive gradual, no a un ataque único.',
      expWrong:{
        A:'Chen no acepta el saqueo por invasores; su relectura sustituye el ataque único por incendios repetidos en el tiempo.',
        C:'Chen dice lo contrario: la gente siguió viviendo entre las capas de ceniza, así que el sitio sí estuvo habitado.',
        D:'Chen no habla de un abandono pacífico ni usa los muros caídos para probarlo; su evidencia es la ceniza en bandas.'
      },
      tip:'Cuando dos autores interpretan la misma evidencia, la respuesta describe la lectura alternativa. Chen reinterpreta la ceniza: de una noche a muchos años.'
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
      expCorrect:'La idea central define ecosystem engineer como un organismo que remodela su entorno de forma que muchas otras especies dependen de él, con el castor como ejemplo. El texto subraya por qué importa el término: revela cómo perder a esa especie desarma la comunidad.',
      expWrong:{
        A:'El castor es el textbook case, un ejemplo, no la única especie capaz; el texto habla de una categoría general.',
        B:'No hay desacuerdo entre biólogos en el texto; el término se presenta como útil, no en disputa.',
        C:'El texto dice lo opuesto: el valor del término es correr el foco de lo que come a lo que construye.'
      },
      tip:'La idea principal cubre todo el párrafo, no una sola oración. Un ejemplo (el castor) ilustra la idea; no la reemplaza.'
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
      expCorrect:'El texto contrasta a los críticos (que lo veían como concesión) con la visión de Price: para ella era una afirmación de que esa música pertenecía a la sala de conciertos y que ambas tradiciones se enriquecían. Es una unión deliberada que fortalece a las dos.',
      expWrong:{
        A:'Reluctant compromise es la lectura de los críticos, que el texto atribuye a Critics of her era, no a Price (Price saw it differently).',
        B:'El texto no dice que Price juzgara el experimento como fallido; lo defiende como una afirmación positiva.',
        D:'Ella no mantenía los espirituales separados ni intactos: precisamente los insertaba dentro de la sinfonía.'
      },
      tip:'Ojo con las trampas que repiten la opinión del otro bando. La pregunta pide la visión de Price; Price saw it differently marca dónde empieza su postura.'
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
      expCorrect:'La hipótesis dice que oír canto adulto en esa ventana temprana es necesario para un canto normal. El resultado que la apoya es: los aislados (sin oír canto) cantan mal y los expuestos en la ventana cantan bien. Eso liga la exposición con el desarrollo normal.',
      expWrong:{
        A:'Si ambos grupos cantan normal, entonces oír el canto no importó, lo que contradice la hipótesis.',
        B:'Si ninguno canta, no se puede distinguir el efecto de la ventana; no apoya que la exposición produzca canto normal.',
        C:'Es el patrón inverso: apoyaría lo contrario, que la exposición perjudica en vez de ayudar.'
      },
      tip:'Empareja el resultado con la hipótesis: variable presente da el efecto esperado; variable ausente da el efecto ausente. Aquí oyó canto lleva a canta bien, y no oyó lleva a canta mal.'
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
      expCorrect:'La conclusión es que más sesiones se asocian con mayores mejoras. El dato que mejor la sustenta es la tendencia completa: al subir las sesiones (0, luego 1–5, luego 6–10, luego +10), suben los puntos (2, 5, 9, 14). Es la relación creciente en los cuatro grupos.',
      expWrong:{
        A:'El grupo de cero sesiones por sí solo no dice nada sobre más sesiones igual a más mejora; es un único punto sin comparación.',
        B:'Es cierto, pero solo compara dos de los cuatro grupos; la conclusión requiere la tendencia general, que la opción D sí captura.',
        C:'Que todos mejoren algo no muestra que más sesiones den más mejora; hasta el grupo sin sesiones subió.'
      },
      tip:'Para una conclusión sobre una tendencia, elige el dato que recorre todos los grupos, no uno que compare solo un par. La respuesta debe reflejar a más X, más Y.'
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
      expCorrect:'La estudiante quiere evidencia sobre el lago, no sobre el equipo. Medir que los contaminantes en el lago bajaron notablemente tras instalar los filtros habla directamente de la calidad del agua del lago, que es justo su afirmación.',
      expWrong:{
        A:'Cuánto costó el equipo es información sobre la fábrica, no sobre la calidad del agua del lago, que es lo que ella pide.',
        C:'La confianza de los gerentes es opinión sobre el equipo, no una medición del propio lago.',
        D:'Otro lago en otra región no dice nada sobre este lago ni sobre el efecto de estos filtros.'
      },
      tip:'Fíjate en la restricción del enunciado: about the lake itself. Descarta todo lo que hable de la fábrica, el costo u otro lago.'
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
      expCorrect:'El texto subraya que las hembras vagan mucho sin hallar pareja y que fusionarse asegura no perderse en la oscuridad. La inferencia lógica es que el mayor obstáculo no es competir, sino lo difícil que es encontrar pareja en un ambiente tan vacío.',
      expWrong:{
        B:'El texto opone explícitamente el obstáculo a la competencia (not competition but simply), así que la rivalidad no puede ser la respuesta.',
        C:'No se mencionan depredadores que ataquen a los machos adheridos; eso se inventa fuera del texto.',
        D:'Estos peces no dependen de la luz solar para reproducirse; viven donde sunlight never reaches y el tema es hallar pareja.'
      },
      tip:'Cuando el texto dice not X but simply ___, la respuesta debe contrastar con X. Aquí X es la competencia, así que busca la opción sobre la escasez o dificultad de encontrarse.'
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
      expCorrect:'La economista halló que lo clave es un núcleo estable que revise e integre el trabajo; sin él, los proyectos que crecen rápido acumulan aportes sin fusionar y se fragmentan. La inferencia es que el crecimiento perjudica salvo que exista ese núcleo que integre el trabajo.',
      expWrong:{
        B:'Más colaboradores es justo lo que causa el problema si falta el núcleo; añadir gente no resuelve la falta de integración.',
        C:'El texto nunca vincula la salud del proyecto con limitarse a un solo lenguaje; eso está fuera del argumento.',
        D:'Abandonar la revisión es lo contrario de lo que ayuda; los proyectos sanos sí revisan e integran los aportes.'
      },
      tip:'La palabra unless pide la condición que evita el problema. El texto ya nombró esa condición: un núcleo estable que revise. Elige la opción que la reponga.'
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
      expCorrect:'Antes del blank hay una oración completa (the engineers finally understood why the prototype kept overheating) y lo que sigue es una FRASE que la explica ("a single faulty sensor feeding…" no tiene verbo conjugado, así que no es una oración). Ese es justo el trabajo de los dos puntos: presentar la explicación. Como la 2a parte no es independiente, el colon es la única opción válida.',
      expWrong:{
        A:'Una coma no puede introducir así una explicación tras una oración completa; queda una unión suelta e incorrecta.',
        B:'El punto y coma exige una oración INDEPENDIENTE después, pero "a single faulty sensor feeding…" es una frase nominal (sin verbo conjugado), no una oración; por eso aquí el punto y coma no encaja.',
        D:'Sin puntuación, overheating a single faulty sensor se fusiona (run-on) y confunde el sentido.'
      },
      tip:'Colon es oración completa más algo que la explica o ejemplifica. Prueba: si lo de antes termina en punto y lo de después responde por qué, van dos puntos.'
    },
    {
      id:'MK1-16', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries — semicolon between independent clauses',
      passage:"The city's oldest bakery closed its doors last %BLANK% within weeks, a cooperative of former employees had reopened it under a new name.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'spring,', B:'spring;', C:'spring:', D:'spring and'},
      correct:'B',
      expCorrect:'Hay dos oraciones completas: The city\'s oldest bakery closed its doors last spring y within weeks, a cooperative had reopened it. Para unir dos independientes sin conjunción, el punto y coma es lo correcto.',
      expWrong:{
        A:'Una coma sola entre dos oraciones completas es comma splice.',
        C:'El colon pide que la 2a parte explique o detalle a la 1a; aquí la 2a narra un hecho nuevo (la reabrieron), no explica el cierre.',
        D:'La conjunción and sin coma antes une mal dos oraciones completas; necesitaría spring, and para ser correcto.'
      },
      tip:'Si a ambos lados del blank puedes poner un punto y quedan oraciones completas, y no hay conjunción, el punto y coma es tu opción segura.'
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
      expCorrect:'El inciso no esencial some in ink, others in faded pencil describe las notas y va encerrado. Como el primer blank abre con raya, el segundo debe cerrar con raya: notes—…pencil—reveal. La puntuación del inciso debe coincidir en ambos extremos.',
      expWrong:{
        A:'Coma para abrir y punto y coma para cerrar no coinciden, y el punto y coma exigiría una oración independiente después, que no la hay.',
        B:'Abre con raya pero cierra con coma; la puntuación de un inciso debe ser del mismo tipo en ambos extremos.',
        D:'Abre con coma pero cierra con raya; de nuevo, apertura y cierre desiguales.'
      },
      tip:'Un inciso se abre y se cierra con el mismo signo: raya y raya, o coma y coma. Si un extremo usa raya, el otro también.'
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
      expCorrect:'La frase a marine geologist whose maps redrew our picture of the sea floor es un apositivo no esencial que renombra a Ada Rourke; va entre dos comas. Además, and the audience listened es otra oración, así que la coma de cierre tras floor también prepara la unión con and.',
      expWrong:{
        B:'Falta la coma de apertura tras Rourke; el inciso quedaría abierto sin su primera coma.',
        C:'Falta la coma de cierre tras floor; el apositivo se abre pero no se cierra, y se pega a and.',
        D:'El punto y coma no encierra apositivos y no hay oración independiente entre Rourke y el resto del sujeto.'
      },
      tip:'Un apositivo no esencial lleva coma de apertura y coma de cierre (comas gemelas). Revisa que ambas estén presentes.'
    },
    /* Form, Structure, and Sense ×3 (fill-in-blank grammar) */
    {
      id:'MK1-19', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Form, Structure, and Sense — subject-verb agreement',
      passage:"The array of sensors mounted along the bridge's underside %BLANK% engineers to detect the faint vibrations that precede structural fatigue.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'allow', B:'have allowed', C:'are allowing', D:'allows'},
      correct:'D',
      expCorrect:'El sujeto es The array (singular); of sensors mounted along the bridge\'s underside es solo una frase preposicional que describe al núcleo. Un sujeto singular pide verbo singular en presente: The array allows.',
      expWrong:{
        A:'La forma allow es plural y concordaría con sensors, pero el núcleo del sujeto es array (singular), no sensors.',
        B:'La forma have allowed es plural; concuerda con sensors, no con array, así que rompe la concordancia.',
        C:'La forma are allowing es plural y además cambia el sentido a algo en progreso; el núcleo singular array pide allows.'
      },
      tip:'Tapa la frase of más el complemento para hallar el verdadero sujeto. The array allows: núcleo singular, verbo singular.'
    },
    {
      id:'MK1-20', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Form, Structure, and Sense — pronoun-antecedent agreement',
      passage:"Neither the lead violinist nor the other musicians could hide %BLANK% relief when the demanding final movement was over and the audience rose to applaud.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'its', B:'their', C:'his or her', D:"one's"},
      correct:'B',
      expCorrect:'En neither… nor…, el pronombre concuerda con el sujeto más cercano al verbo, que aquí es the other musicians (plural). El posesivo plural correcto es their: could hide their relief.',
      expWrong:{
        A:'La forma its es singular y se usa para cosas, no para músicos (personas) ni para el sujeto plural más cercano.',
        C:'La forma his or her es singular, pero el sujeto más cercano (the other musicians) es plural, así que pide un posesivo plural.',
        D:'La forma one\'s es impersonal y singular; no concuerda con the other musicians.'
      },
      tip:'Con neither…nor…, el verbo y el pronombre siguen al sujeto más cercano. Si ese es plural, usa their.'
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
      expCorrect:'El modificador inicial Circling high above the canyon for nearly an hour describe a quien vuela: el halcón. Justo después de la coma debe ir ese sujeto, the hawk, para que it had been searching for también cuadre: the hawk finally spotted.',
      expWrong:{
        A:'Pone the thermal updraft justo tras la coma, sugiriendo que la corriente volaba en círculos; el que vuela es el halcón.',
        B:'Deja the canyon como quien vuela, pero un cañón no puede circular sobre sí mismo; el modificador no encaja.',
        D:'La construcción there was a hawk that no coloca al halcón como sujeto inmediato del modificador y resulta torpe y sin concordancia con it.'
      },
      tip:'Tras un modificador inicial con -ing, el sujeto de la oración principal debe ser quien realiza esa acción. Pregúntate: ¿quién está circling? Ese va justo después de la coma.'
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
      expCorrect:'La primera oración elogia los paneles como maintenance-free; la segunda muestra lo contrario: en zonas polvorientas su rendimiento cae si no se limpian. Ese contraste pide however (sin embargo).',
      expWrong:{
        B:'La transición therefore marca consecuencia lógica, pero la 2a oración no se deduce de la 1a: la contradice.',
        C:'La transición likewise indica semejanza, y aquí las ideas se oponen (libre de mantenimiento frente a requiere limpieza).',
        D:'La transición for example introduciría un ejemplo de maintenance-free, pero el texto da un caso donde sí hace falta mantenimiento.'
      },
      tip:'Pregunta si la 2a idea confirma o contradice la 1a. Aquí la contradice (free frente a must be cleaned), así que necesitas una transición de contraste.'
    },
    {
      id:'MK1-23', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions',
      passage:"The first trial showed that the drug lowered blood pressure in most participants. The second and third trials, conducted with larger and more diverse groups, reached the same conclusion. %BLANK% researchers now regard the drug's effect as well established.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Nevertheless,', B:'In contrast,', C:'Consequently,', D:'Meanwhile,'},
      correct:'C',
      expCorrect:'Tres ensayos coincidieron en el mismo resultado; por eso los investigadores ya consideran el efecto bien establecido. La 3a oración es la consecuencia de las anteriores, así que Consequently (por consiguiente) encaja.',
      expWrong:{
        A:'La transición Nevertheless señala contraste, pero no hay oposición: los resultados se refuerzan entre sí.',
        B:'La transición In contrast marca diferencia, y aquí los ensayos concuerdan, no difieren.',
        D:'La transición Meanwhile indica simultaneidad temporal, no la relación de causa-efecto entre la evidencia y la conclusión.'
      },
      tip:'Si varias oraciones acumulan evidencia y la última saca la conclusión, la transición es de resultado: consequently, therefore, as a result.'
    },
    {
      id:'MK1-24', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions',
      passage:"Critics initially dismissed the painter's late works as careless, even unfinished. Recent scholarship, %BLANK% has come to see their loose brushwork as a deliberate late style, one that anticipated techniques painters would not fully embrace for another century.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'in addition,', B:'in short,', C:'as a result,', D:'by contrast,'},
      correct:'D',
      expCorrect:'Los críticos primero desecharon las obras como descuidadas; la investigación reciente hace lo opuesto: las ve como un estilo tardío deliberado. Esa oposición entre el antes y el ahora pide by contrast.',
      expWrong:{
        A:'La transición in addition sumaría una idea del mismo tipo, pero la 2a oración se opone a la 1a en vez de reforzarla.',
        B:'La transición in short resume lo ya dicho, pero aquí se introduce una postura nueva y opuesta, no un resumen.',
        C:'La transición as a result marca consecuencia, y la nueva visión no es efecto del desprecio inicial, sino su contrario.'
      },
      tip:'Fíjate en el cambio de sujeto y de época: Critics initially frente a Recent scholarship. Ese giro de opinión suele pedir una transición de contraste.'
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
      expCorrect:'La meta es resaltar el cambio de población. Solo la opción C usa las dos cifras clave (menos de 50 en los 90 y más de 200 ahora) y las contrasta, que es exactamente destacar cómo cambió la población.',
      expWrong:{
        A:'Describe rasgos generales (grande, nocturno, longevo) pero no menciona números ni cambio poblacional.',
        B:'Combina rasgos físicos y de hábitat; nada sobre el aumento de la población.',
        D:'Da hábitat y longevidad, pero omite por completo las cifras que muestran el cambio.'
      },
      tip:'Ancla cada opción a la meta. Si el objetivo es el cambio en la población, la respuesta debe incluir el antes y el después (los dos números).'
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
      expCorrect:'La meta es resaltar un contraste entre los dos tipos. La opción B enfrenta directamente las cifras (5% del incandescente frente al 40% del LED) usando whereas, que marca la oposición con precisión.',
      expWrong:{
        A:'Subraya un parecido (ambos se queman), no el contraste que pide la meta.',
        C:'Habla solo del bombillo incandescente; sin comparar con el LED no hay contraste.',
        D:'Señala algo común a ambos (se usan mucho), lo opuesto a resaltar una diferencia.'
      },
      tip:'Emphasize a contrast exige mencionar los dos elementos y oponerlos. Palabras como whereas, while o in contrast suelen delatar la opción correcta.'
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
      expCorrect:'La meta es explicar a un público nuevo cómo el lidar ayuda a la arqueología. La opción A reúne lo esencial: qué es (método láser), cómo se usa (sobrevuela bosques y atraviesa el follaje) y su resultado (revela estructuras antiguas ocultas). Cumple todo el objetivo.',
      expWrong:{
        B:'Define el lidar en general pero no dice cómo ayuda a los arqueólogos; se queda sin el propósito pedido.',
        C:'Habla de la búsqueda de estructuras, pero no explica qué es el lidar ni cómo funciona para un público nuevo.',
        D:'Describe un detalle del método (pulsos hacia el suelo) sin conectar con el beneficio para la arqueología.'
      },
      tip:'Cuando la meta es explicar cómo algo ayudó, la mejor opción suele encadenar qué es, cómo funciona y qué logró. Descarta las que solo cubren una pieza.'
    }
  ]
});
