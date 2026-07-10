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
      expCorrect:'La bióloga dice que la clawed frog fue la MÁS rápida. En la tabla su tiempo es 19 s, el menor de los cuatro, así que tardó menos que cada una de las otras tres especies. La opción B usa el dato correcto y respalda su observación.',
      expWrong:{
        A:'55 s es el tiempo de la painted frog (la más lenta), no de la clawed frog, y “el más largo” contradice que haya sido la más rápida.',
        C:'31 s es el tiempo de la marsh frog, no de la clawed frog; el dato está mal asignado.',
        D:'42 s es el tiempo de la green tree frog; además la clawed frog no fue “ligeramente” más rápida que la painted frog, sino mucho más rápida.'
      },
      tip:'Primero fija la afirmación (“la más rápida”), luego busca en la tabla el número que le corresponde a ESA especie. Cuidado con opciones que citan el tiempo de otra fila.'
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
      expCorrect:'La conclusión contrasta un aumento grande en unos barrios con un cambio pequeño en otros. Bellview subió de 4.0 a 7.2 (gran salto) y Oakhill solo de 2.5 a 2.8 (cambio mínimo). La opción A cita ambos extremos y respalda justo esa conclusión.',
      expWrong:{
        B:'Falso según la tabla: los tres barrios reportan valores DISTINTOS después de los senderos (5.4, 2.8, 7.2).',
        C:'Invierte los datos: Riverside SUBIÓ de 3.0 a 5.4, no bajó de 5.4 a 3.0.',
        D:'Oakhill tuvo el aumento MÁS PEQUEÑO (0.3 h), no el más grande; el mayor fue Bellview (+3.2 h).'
      },
      tip:'Cuando la conclusión dice “grande en unos, pequeño en otros”, la mejor opción muestra los DOS casos. Verifica que la dirección (subió/bajó) coincida con la tabla.'
    },
    {
      id:'B1X-03', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context',
      passage:"Although early critics found her novels difficult, later readers came to admire their ______ structure: every subplot, however minor it first appeared, eventually locked into place to serve the larger story.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'chaotic', B:'intricate', C:'careless', D:'plain'},
      correct:'B',
      expCorrect:'El texto explica que cada subtrama, por menor que pareciera, terminaba encajando al servicio de la historia mayor. Eso describe una estructura “intricate” (compleja pero bien articulada), justo lo que los lectores admiraron.',
      expWrong:{
        A:'“Chaotic” (caótica) choca con la idea de que todo encaja en su lugar; no habría orden que admirar.',
        C:'“Careless” (descuidada) es negativa y contradice que los lectores la ADMIRARAN.',
        D:'“Plain” (simple) contradice que los primeros críticos la hallaran difícil y que cada subtrama aportara al conjunto.'
      },
      tip:'Busca la pista después de los dos puntos: si todo “encaja para servir a la historia”, la palabra debe significar compleja y bien tejida, no desordenada ni simple.'
    },
    {
      id:'B1X-04', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context',
      passage:"The committee’s report did not openly criticize the mayor’s plan; instead, its praise was so heavily qualified that its disapproval was merely ______, evident only to readers who looked past the polite surface.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'implicit', B:'explicit', C:'exaggerated', D:'accidental'},
      correct:'A',
      expCorrect:'El informe no critica abiertamente y solo es evidente para quien mira más allá de la superficie cortés. Esa desaprobación está sugerida sin decirse directamente = “implicit”.',
      expWrong:{
        B:'“Explicit” es lo opuesto: significa dicho abiertamente, pero el texto dice que NO critica de forma abierta.',
        C:'“Exaggerated” no encaja: el problema es que la desaprobación está oculta, no inflada.',
        D:'“Accidental” contradice el tono: la desaprobación se disfraza a propósito con elogios “muy matizados”, no por accidente.'
      },
      tip:'“Did not openly… evident only to readers who looked past the surface” apunta a algo insinuado. Implicit = implícito; explicit = explícito. Elige el opuesto de “abierto”.'
    },
    {
      id:'B1X-05', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Punctuation',
      passage:"The museum’s newest wing houses a single, breathtaking ______ a 12-meter skeleton of a whale suspended from the ceiling as if mid-dive.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'exhibit,', B:'exhibit', C:'exhibit:', D:'exhibit;'},
      correct:'C',
      expCorrect:'Antes del blank hay una oración completa (“The museum’s newest wing houses a single, breathtaking exhibit”) y lo que sigue describe y nombra ese exhibit. El colon introduce esa aclaración después de una oración completa.',
      expWrong:{
        A:'Una coma sola no puede introducir así la aclaración; deja la frase suelta “a 12-meter skeleton…” mal conectada.',
        B:'Sin puntuación, “exhibit a 12-meter skeleton…” se fusiona y se lee mal.',
        D:'El punto y coma exige una oración independiente después, y “a 12-meter skeleton… suspended…” no es una oración completa.'
      },
      tip:'Colon = después de una oración COMPLETA que anuncia lo que sigue. Aquí lo de antes puede terminar en punto, así que el colon encaja.'
    },
    {
      id:'B1X-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punctuation',
      passage:"Dr. Alvarez had spent a decade studying volcanic ______ that background made her the first to recognize that the mountain’s recent tremors signaled an imminent eruption.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'soil,', B:'soil', C:'soil:', D:'soil;'},
      correct:'D',
      expCorrect:'A ambos lados del blank hay oraciones completas: “Dr. Alvarez had spent a decade studying volcanic soil” y “that background made her the first to recognize…”. Para unir dos independientes sin conjunción, el punto y coma es lo correcto.',
      expWrong:{
        A:'Una coma sola entre dos oraciones completas es un comma splice.',
        B:'Sin puntuación, las dos oraciones se fusionan (run-on).',
        C:'El colon uniría dos independientes solo si la segunda EXPLICA o ejemplifica la primera; aquí la segunda añade una consecuencia narrativa, así que no encaja mejor que el punto y coma.'
      },
      tip:'Prueba del punto: si a ambos lados del blank quedan oraciones completas y no hay conjunción, el punto y coma es la unión segura.'
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
      tip:'“Each / every / one of…” son SINGULARES aunque venga un plural detrás. Para personas, el posesivo singular es “his or her”.'
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
      tip:'Ignora la frase entre el sujeto y el verbo (“of… specimens…”). Pregunta: ¿qué está displayed? La COLLECTION → singular → “is”.'
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
      expCorrect:'El texto empieza con lo que los historiadores “once assumed” (abandono súbito) y luego presenta excavaciones recientes cuyas capas muestran un declive gradual. Es la estructura de creencia antigua → evidencia que la corrige.',
      expWrong:{
        B:'No es una lista de teorías neutrales: el texto SÍ toma partido por la versión gradual apoyada en la nueva evidencia.',
        C:'No predice ningún evento futuro; contrasta pasado súbito vs. declive gradual, sin proyectar nada.',
        D:'Solo se habla de UNA ciudad; no hay comparación entre dos ciudades.'
      },
      tip:'Marca el giro: “once assumed… Recent excavations tell a more gradual story”. Ese “antes se creía / ahora la evidencia muestra” es la estructura de revisión.'
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
      expCorrect:'El texto señala que la autora NO describe la tormenta directamente, sino que usa pequeños detalles inquietantes para que el lector perciba el peligro. El propósito es explicar cómo construye esa sensación de peligro de forma indirecta.',
      expWrong:{
        B:'No opina que el capítulo sea lento ni que deba recortarse; describe una técnica, no la critica.',
        C:'No resume la trama de la novela; se centra solo en el efecto del capítulo inicial.',
        D:'No explica causas científicas de tormentas; la tormenta es un recurso narrativo, no un tema físico.'
      },
      tip:'“Main purpose” = por qué se escribió esto. Aquí todo apunta a un solo punto: cómo la autora sugiere el peligro con detalles en vez de describirlo.'
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
      expCorrect:'La meta es cerrar destacando el beneficio AMPLIO para el barrio. La opción C recoge las tres notas (alimenta familias, enseña a los niños, une vecinos) y las presenta como un recurso del que depende toda la comunidad. Justo lo pedido.',
      expWrong:{
        A:'Es un detalle sobre tomates; no transmite el beneficio amplio para el barrio.',
        B:'Habla de una necesidad (voluntarios), no del beneficio que el jardín aporta; cambia el enfoque.',
        D:'Da un dato menor (el horario de las clases) en lugar de resumir el impacto general.'
      },
      tip:'Cuando piden una conclusión que “enfatiza el beneficio amplio”, elige la opción que junta VARIAS notas en una idea general, no la que da un solo detalle.'
    },
    {
      id:'B1X-12', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions',
      passage:"Solar panels are often praised for producing electricity without burning fuel. Manufacturing them, ______ requires mining and processing materials that carry their own environmental costs.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'therefore,', B:'however,', C:'for example,', D:'likewise,'},
      correct:'B',
      expCorrect:'La primera oración elogia los paneles (electricidad sin quemar combustible); la segunda presenta un lado negativo (su fabricación tiene costos ambientales). Ese contraste pide “however”.',
      expWrong:{
        A:'“Therefore” marca consecuencia, pero la segunda idea no es un resultado de la primera; es un contrapunto.',
        C:'“For example” anuncia un ejemplo de lo anterior, y el costo de fabricación no ejemplifica lo bueno del panel: lo contradice.',
        D:'“Likewise” suma algo similar, pero aquí las ideas se OPONEN, no se parecen.'
      },
      tip:'Elogio primero, pero luego un problema → señal de contraste. “However” marca ese “sí, pero por otro lado”.'
    },
    {
      id:'B1X-13', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions',
      passage:"The trail was far steeper than the map had suggested, and a cold rain began to fall an hour into the hike. ______ the group decided to turn back and try again on a clearer day.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Nevertheless,', B:'For instance,', C:'In contrast,', D:'As a result,'},
      correct:'D',
      expCorrect:'La primera oración da las causas (sendero muy empinado y lluvia fría); la segunda es la consecuencia (decidieron devolverse). Esa relación causa→efecto pide “as a result”.',
      expWrong:{
        A:'“Nevertheless” marca contraste, pero devolverse es la reacción ESPERADA ante esas condiciones, no algo a pesar de ellas.',
        B:'“For instance” introduce un ejemplo; la segunda oración no ejemplifica la primera, es su resultado.',
        C:'“In contrast” opone ideas, pero aquí la segunda oración SIGUE lógicamente de la primera, no la contradice.'
      },
      tip:'Si lo primero es la razón y lo segundo es lo que pasó por eso, la conexión es de resultado: “as a result” / “therefore”.'
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
      expCorrect:'El texto dice que sin su avispa polinizadora el árbol crece alto y sano pero nunca da semillas viables: “un callejón sin salida” biológico. La idea central es que puede VERSE próspero y a la vez ser incapaz de reproducirse.',
      expWrong:{
        A:'Contradice el texto: el árbol SÍ sobrevive y crece sano; lo que no puede es reproducirse.',
        C:'No está apoyado: el texto no compara la preferencia de los jardineros por unas plantas u otras.',
        D:'Distorsiona: el texto habla del papel biológico de la avispa, no de qué le importa más al jardinero.'
      },
      tip:'La idea central concilia las dos partes del texto: se ve sano PERO no da semillas. Descarta opciones que solo toman la mitad (“no sobrevive”).'
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
      expCorrect:'El equipo esperaba restaurar la fauna solo con esfuerzo humano directo, pero fueron los castores los que, con sus represas, hicieron volver a peces e insectos. Se infiere que los castores pueden impulsar la recuperación que se creía que exigía intervención humana directa.',
      expWrong:{
        B:'Demasiado extremo: el río estaba canalizado, pero el texto no dice que NUNCA pueda haber peces o insectos; de hecho regresaron.',
        C:'Contradice el texto: la reintroducción funcionó, no hay señal de arrepentimiento.',
        D:'Ilógico: los castores construyen represas por su propio comportamiento; el beneficio a los investigadores no es su “propósito”.'
      },
      tip:'Fíjate en el choque entre lo que el equipo ESPERABA (solo esfuerzo humano) y lo que PASÓ (los castores lo lograron). La inferencia capta esa sorpresa.'
    }
  ]
});
