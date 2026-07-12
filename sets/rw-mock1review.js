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
      expCorrect:'El texto se mueve en tres tiempos: primero la práctica vieja (botar el agua de lluvia por tuberías), luego “however” introduce el enfoque nuevo y contrario (tratar la lluvia como recurso), y al final anota sus resultados (ríos más limpios, calles más frescas). La opción B captura ese movimiento: práctica vieja → nueva que contrasta → resultados.',
      expWrong:{
        A:'No está apoyado: el texto menciona tecnologías (jardines de lluvia, pavimento permeable), pero nunca las ordena por costo.',
        C:'Malinterpreta el propósito: el texto describe un cambio de enfoque, no “argumenta” que se prohíban las tuberías. El verbo importa.',
        D:'Describe una parte, no el todo: no se centra en definir un término ni en el origen de una palabra; narra el paso de una práctica a otra.'
      },
      tip:'Para STRUCTURE traza el MOVIMIENTO completo del texto. Palabras como “however” marcan el giro entre la parte vieja y la nueva; fíjate si al final hay resultados.'
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
      expCorrect:'Antes se explica que los mapas distorsionan las zonas polares (Groenlandia se ve enorme). La oración subrayada dice por qué los cartógrafos ACEPTAN esa distorsión: porque la misma proyección mantiene exactas las direcciones de la brújula. Su función es dar la razón por la que se tolera el defecto.',
      expWrong:{
        B:'Malinterpreta la función: el tema (la distorsión de los mapas) ya se presentó en la primera oración, no en la subrayada.',
        C:'Contradice el texto: la oración no niega la distorsión; la da por cierta y explica por qué se acepta.',
        D:'Ubica mal la evidencia: el dato numérico (“catorce veces”) está en la oración anterior, no en la subrayada.'
      },
      tip:'Para FUNCTION mira qué HACE la oración dentro del texto. La palabra “because” suele señalar que la oración da una razón, no que presenta el tema ni aporta datos nuevos.'
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
      expCorrect:'El texto cuenta dos cosas unidas por “Yet”: el hito histórico (primera mujer afroamericana con una sinfonía tocada por una gran orquesta) y el largo olvido que vino después (manuscritos abandonados hasta 2009). El propósito recoge ambas: narrar el logro y la negligencia posterior.',
      expWrong:{
        A:'No está apoyado: el texto no compara ni “argumenta” que su sinfonía sea superior a la de otros. No hay juicio de valor.',
        B:'No está apoyado: nunca se analiza la estructura técnica de la sinfonía movimiento por movimiento.',
        D:'Describe una parte, no el todo: la casa abandonada es un detalle del redescubrimiento, no el propósito del texto.'
      },
      tip:'Para PURPOSE busca la idea que cubra TODO el texto. Si hay un giro con “Yet”, la respuesta correcta suele abarcar las dos partes (aquí: el logro Y el olvido), no solo una.'
    },
    {
      id:'M1V-04', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Puntuación',
      passage:"Marine biologists once believed the deep sea was nearly %BLANK% recent expeditions have revealed thriving communities of animals clustered around volcanic vents.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'lifeless,', B:'lifeless;', C:'lifeless', D:'lifeless:'},
      correct:'B',
      expCorrect:'Hay dos oraciones completas: “Marine biologists once believed the deep sea was nearly lifeless” y “recent expeditions have revealed thriving communities…”. Para unir dos oraciones independientes sin conjunción, el punto y coma es lo correcto.',
      expWrong:{
        A:'Una coma sola entre dos oraciones completas es un comma splice.',
        C:'Sin puntuación, las dos oraciones se fusionan (run-on).',
        D:'El colon pide que la segunda parte EXPLIQUE o ejemplifique la primera; aquí la segunda CONTRASTA (antes se creía sin vida, ahora se ve llena de vida), así que no encaja.'
      },
      tip:'Prueba del punto: si a ambos lados del blank quedan oraciones completas, el “;” sirve. Pide el colon solo cuando la 2ª parte aclara la 1ª.'
    },
    {
      id:'M1V-05', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Puntuación',
      passage:"The %BLANK% a device that measures atmospheric pressure, gave early forecasters their first reliable way to sense an approaching storm.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'barometer', B:'barometer:', C:'barometer,', D:'barometer;'},
      correct:'C',
      expCorrect:'“a device that measures atmospheric pressure” es un apositivo NO esencial que renombra “The barometer”. Va entre DOS comas; como ya está la coma de cierre antes de “gave”, falta la de apertura después de “barometer”.',
      expWrong:{
        A:'Sin la coma de apertura, el inciso cierra pero no abre → queda desbalanceado.',
        B:'El colon no abre un inciso y, además, separaría el sujeto (“The barometer”) de su verbo (“gave”).',
        D:'El punto y coma no encierra apositivos y no hay una oración independiente antes de él.'
      },
      tip:'Apertura y cierre GEMELOS: coma–coma. Si ves una coma “huérfana” cerrando el inciso, la respuesta suele ser la coma que lo abre.'
    },
    {
      id:'M1V-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Puntuación',
      passage:"The expedition’s survival depended on three things the porters could not afford to %BLANK% a dependable compass, a waterproof tent, and enough dried food to last a month.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'lose:', B:'lose,', C:'lose;', D:'lose'},
      correct:'A',
      expCorrect:'Antes del blank hay una oración completa (“The expedition’s survival depended on three things the porters could not afford to lose”) y lo que sigue es la lista que la detalla. Ese es justo el trabajo del colon.',
      expWrong:{
        B:'La coma no puede introducir así una lista después de una oración completa.',
        C:'El punto y coma exige una oración independiente después, y una lista no lo es.',
        D:'Sin puntuación, “lose a dependable compass…” se fusiona con la lista.'
      },
      tip:'Colon = solo después de una oración COMPLETA. Tápalo con la mano: lo de antes debe poder terminar en punto.'
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
      expCorrect:'El texto abre con “no siempre fue un desierto”, muestra pruebas de un paisaje verde y con agua (hipopótamos, ganado, pesca) y explica cómo se secó con el tiempo. La idea central junta todo eso: el Sahara, hoy desierto, antes fue verde y húmedo y se secó poco a poco. La opción D lo cubre.',
      expWrong:{
        A:'Detalle exagerado: las pinturas son evidencia en el texto, pero nunca se dice que sean la forma “más confiable” de conocer climas antiguos. Es información de afuera.',
        B:'Demasiado extremo: el cambio de órbita explica el caso del Sahara, no la formación de “todos” los desiertos del planeta.',
        C:'Detalle, no idea central: la pesca en canoas es un ejemplo del paisaje antiguo, no el punto principal del párrafo.'
      },
      tip:'La idea central cubre TODO el párrafo. Aquí une el antes (verde y con agua) con el después (desierto). Cuidado con distractores “extremos” como “todos” o “el más confiable”.'
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
      expCorrect:'El texto contrasta a los hongos con las plantas (no fabrican comida con luz), explica cómo comen (descomponen materia muerta y absorben nutrientes) y cierra con su papel: reciclan los nutrientes del bosque. La opción C junta las tres cosas y cubre todo el párrafo.',
      expWrong:{
        A:'No está apoyado: el texto dice que se confunden con plantas, pero nunca los compara con los animales. Es información de afuera.',
        B:'Detalle no mencionado: el texto no habla del tamaño de los filamentos ni de microscopios.',
        D:'Demasiado extremo: dice que reciclan “gran parte” de la materia caída, no que el bosque moriría en una sola temporada sin ellos.'
      },
      tip:'La idea central resume el arco completo: qué NO hacen (comer como plantas), qué SÍ hacen (descomponer) y para qué sirve (reciclar). Evita los extremos (“ni una sola temporada”).'
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
      expCorrect:'La afirmación es que Mara está a gusto con la soledad. La cita B lo muestra directo: sonríe y está “contenta de que ningún bote llegara a su roca por semanas”, es decir, disfruta estar sola. Esa es la evidencia que ilustra el reclamo.',
      expWrong:{
        A:'Va en contra: contar los días para la llegada del barco sugiere que ESPERA el contacto, no que prefiera la soledad.',
        C:'Fuera de tema: dar cuerda a la lámpara habla de su responsabilidad en el trabajo, no de que esté a gusto sola.',
        D:'Ambigua: asentir sin hablar no muestra claramente contento; hasta podría leerse como tristeza. No ilustra la afirmación tan bien como B.'
      },
      tip:'En “which quotation illustrates the claim”, primero fija el reclamo (aquí: está a gusto sola) y busca la cita que lo muestre DIRECTO. Descarta las que hablan de otra cosa (el trabajo) o que apuntan al lado contrario.'
    },
    {
      id:'M1V-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"In the novel 'The Cartographer’s Daughter,' the young mapmaker Inés is portrayed as distrustful of any information she has not confirmed for herself. A student argues that the novel shows Inés relying on her own direct observation rather than on the accounts of other people.",
      stem:'Which quotation from "The Cartographer’s Daughter" most effectively illustrates the student’s claim?',
      choices:{
        A:'“Inés loved the old sailors’ tales of golden coasts and would repeat them to anyone who stopped to listen.”',
        B:'“Inés had inherited her father’s brass instruments, and she polished each of them every evening out of habit.”',
        C:'“The villagers trusted Inés completely, carrying to her every rumor they gathered from passing travelers.”',
        D:'“Though the merchants swore the mountain pass was impassable, Inés resolved to walk its full length before drawing a single line.”'
      },
      correct:'D',
      expCorrect:'El reclamo es que Inés confía en lo que observa ella misma, no en lo que le cuentan. La cita D lo muestra: aunque los mercaderes juraban que el paso era intransitable (el testimonio de otros), Inés decide recorrerlo ella misma antes de trazar una sola línea. Esa es la evidencia exacta.',
      expWrong:{
        A:'Va en contra: repetir con gusto los cuentos de los marineros muestra que SÍ acepta los relatos ajenos, lo opuesto al reclamo.',
        B:'Fuera de tema: heredar y pulir los instrumentos de su padre no dice nada sobre confiar solo en su propia observación.',
        C:'Apunta a otros, no a ella: describe que los aldeanos confían en Inés y le traen rumores; no muestra a Inés verificando las cosas por sí misma.'
      },
      tip:'Empareja el reclamo con la cita: “observación propia vs. relatos ajenos” exige una cita donde el personaje IGNORA lo que dicen otros y lo comprueba en persona. La D contrasta “merchants swore” con recorrerlo ella misma.'
    },
    {
      id:'M1V-11', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Posesivos',
      passage:"Although the hive holds tens of thousands of workers, a single %BLANK% survival through the winter determines whether the whole colony will last until spring.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'queen’s', B:'queens', C:'queens’', D:'queen'},
      correct:'A',
      expCorrect:'“a single” deja claro que es UNA reina (singular), y la supervivencia le pertenece a ella. Posesivo singular = nombre + ’s: “a single queen’s survival”.',
      expWrong:{
        B:'Plural sin posesivo: no marca que la supervivencia sea “de la reina” y choca con “a single”.',
        C:'Posesivo plural (“de las reinas”), pero el texto dice “a single”, una sola.',
        D:'Sin apóstrofo, “queen survival” no expresa la posesión que pide la frase.'
      },
      tip:'Dos preguntas: ¿singular o plural? ¿posee algo? “A single” + posesión → singular + ’s.'
    },
    {
      id:'M1V-12', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Concordancia sujeto-verbo',
      passage:"The collection of rare stamps that the two brothers inherited from their grandfather %BLANK% now worth more than the house in which it is stored.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'are', B:'were', C:'have been', D:'is'},
      correct:'D',
      expCorrect:'El sujeto es “The collection” (singular); todo lo demás (“of rare stamps that the two brothers inherited…”) solo lo describe. Un sujeto singular pide un verbo singular, y con “now” el tiempo es presente: “The collection… is now worth…”.',
      expWrong:{
        A:'“are” es plural; concuerda con “stamps” o “brothers”, no con el verdadero sujeto singular “collection”.',
        B:'“were” es plural y además pasado; el sujeto es singular y “now” pide presente.',
        C:'“have been” es plural (el singular sería “has been”), así que no concuerda con “collection”.'
      },
      tip:'Tapa la frase intermedia (“of rare stamps… grandfather”) y quédate con sujeto + verbo: “The collection … is”. Los sustantivos plurales de en medio son trampas.'
    },
    {
      id:'M1V-13', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context',
      passage:"Early critics found the painter’s late canvases baffling, even chaotic. Only decades later did art historians realize that the seemingly random splashes of color followed a %BLANK% system of proportion that the artist had quietly worked out, page after page, in his private notebooks.",
      stem:'Which choice completes the text with the most logical and precise word?',
      choices:{A:'careless', B:'imaginary', C:'meticulous', D:'ordinary'},
      correct:'C',
      expCorrect:'El texto contrasta lo que PARECE (“splashes” al azar, caótico) con lo que realmente había: un sistema que el artista trabajó con calma “página tras página” en sus cuadernos. La palabra debe indicar algo muy cuidadoso y preciso: “meticulous” encaja perfecto.',
      expWrong:{
        A:'“careless” (descuidado) es lo contrario de un sistema trabajado con cuidado en cuadernos.',
        B:'“imaginary” no sirve: el sistema es real, está escrito en sus cuadernos.',
        D:'“ordinary” (común) no recoge el contraste; el punto es que era preciso y propio, no corriente, y por eso los críticos no lo vieron.'
      },
      tip:'En Words in Context, deja que el propio texto te dé la pista. Aquí el contraste “parece al azar, pero…” pide una palabra de orden y cuidado: precisa, no genérica.'
    },
    {
      id:'M1V-14', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context',
      passage:"The senator became famous for speeches so %BLANK% that even her rivals took notes: she could compress a tangled budget debate into a single sentence that listeners remembered for years.",
      stem:'Which choice completes the text with the most logical and precise word?',
      choices:{A:'succinct', B:'lengthy', C:'evasive', D:'monotonous'},
      correct:'A',
      expCorrect:'La pista está después de los dos puntos: “compress a tangled budget debate into a single sentence” (resumir algo enredado en UNA sola frase memorable). Eso describe un discurso breve y al grano: “succinct” es la palabra precisa.',
      expWrong:{
        B:'“lengthy” (largo) es lo opuesto a comprimir todo en una sola oración.',
        C:'“evasive” (evasivo) no cuadra: ella aclara el debate, por eso hasta sus rivales toman nota; no lo esquiva.',
        D:'“monotonous” (monótono) choca con “remembered for years”; nada indica un tono aburrido o repetitivo.'
      },
      tip:'La pista suele venir junto al blank. Aquí “una sola frase que recordaban por años” apunta a breve y con impacto: por eso “succinct”, no “largo” ni “evasivo”.'
    }
  ]
});
