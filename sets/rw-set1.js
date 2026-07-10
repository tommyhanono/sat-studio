/* SAT Studio question set — Reading & Writing: Punctuation Drill Set 1 (RW-001 a RW-010) */
window.SAT_SETS.push({
  id: 'rw-set1',
  title: 'Punctuation Drill — Set 1',
  section: 'rw',
  description: 'Standard English Conventions: commas, semicolons, colons, dashes, apostrophes, and sentence boundaries.',
  minutes: 15,
  questions: [
    {
      id:'RW-001', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Elementos no esenciales (comas en pareja)',
      passage:"In 2021, engineer Ada Reyes founded Solaria, a startup that converts food waste into biodegradable packaging. The company's first %BLANK% a compostable takeout container, sold out within weeks of its launch.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'product', B:'product,', C:'product:', D:'product\u2014'},
      correct:'B',
      expCorrect:'"a compostable takeout container" es un apositivo NO esencial que interrumpe la oración ("The company\u2019s first product \u2026 sold out"). Un inciso no esencial debe ir encerrado entre DOS comas. Como el texto ya cierra con coma después de "container,", necesitas la coma de apertura: "product, a compostable takeout container, sold out."',
      expWrong:{
        A:'Sin coma, el inciso abre sin puntuación pero cierra con coma → desbalanceado.',
        C:'Los dos puntos no pueden "abrir" un inciso que luego se cierra con coma; además la oración continúa después ("sold out"), así que el colon rompería la estructura.',
        D:'Una raya de apertura exige una raya de cierre. Aquí el cierre es una coma → puntuación mezclada, incorrecta.'
      },
      tip:'Tapa el inciso con el dedo: la oración debe seguir funcionando. Y la puntuación de apertura y cierre debe ser GEMELA (coma–coma o raya–raya).'
    },
    {
      id:'RW-002', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Límites de oración: punto y coma vs. comma splice',
      passage:"Some deep-sea fish produce their own light through chemical reactions in specialized %BLANK% others rely on colonies of glowing bacteria housed in organs near their eyes.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'cells; while', B:'cells,', C:'cells;', D:'cells, however,'},
      correct:'C',
      expCorrect:'Hay dos cláusulas independientes: "Some deep-sea fish produce…" y "others rely…". El punto y coma es la forma correcta de unirlas sin conjunción.',
      expWrong:{
        A:'El ";" debe ir entre dos cláusulas independientes, pero "while others rely…" es subordinada → crea un fragmento.',
        B:'Coma sola entre dos oraciones completas = comma splice.',
        D:'"however" entre comas NO puede unir dos independientes; necesitarías "; however," → tal como está, sigue siendo comma splice.'
      },
      tip:'Prueba del punto: si puedes poner un punto y ambas partes son oraciones completas, el ";" es válido ahí.'
    },
    {
      id:'RW-003', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Dos puntos para introducir una lista',
      passage:"Before departing for the 1907 expedition, the crew packed everything its members would need for six months on the %BLANK% dried provisions, fur-lined sleeping bags, spare sled runners, and a portable stove.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'ice;', B:'ice:', C:'ice,', D:'ice'},
      correct:'B',
      expCorrect:'Antes del colon hay una cláusula independiente completa ("the crew packed everything… on the ice"), y lo que sigue es la lista que la explica. Ese es exactamente el trabajo de los dos puntos.',
      expWrong:{
        A:'El punto y coma requiere una cláusula independiente después; una lista no lo es.',
        C:'La coma no puede conectar una oración completa con una lista suelta de esta forma.',
        D:'Sin puntuación se fusiona: "on the ice dried provisions…" no tiene sentido.'
      },
      tip:'Colon = solo después de una oración COMPLETA. Si lo que va antes no puede terminar con punto, el colon está mal.'
    },
    {
      id:'RW-004', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Sin puntuación entre sujeto y verbo',
      passage:"The theory that modern birds evolved from small feathered %BLANK% supported by a series of remarkable fossil discoveries in northeastern China.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'dinosaurs, is', B:'dinosaurs; is', C:'dinosaurs is', D:'dinosaurs\u2014is'},
      correct:'C',
      expCorrect:'El sujeto completo es "The theory that modern birds evolved from small feathered dinosaurs" y su verbo es "is". La cláusula "that…" es ESENCIAL (define cuál teoría), así que no lleva comas — y nunca se separa un sujeto de su verbo con una sola coma, raya o punto y coma.',
      expWrong:{
        A:'Una sola coma entre sujeto y verbo es incorrecta, por muy largo que sea el sujeto.',
        B:'El ";" exige cláusulas independientes a ambos lados; "is supported…" no lo es.',
        D:'Una raya sola aquí corta el sujeto de su verbo — mismo error que la coma.'
      },
      tip:'Truco anti-trampa: los sujetos largos "piden" una pausa al leer, pero gramática ≠ respiración. Encuentra sujeto y verbo y NO los separes.'
    },
    {
      id:'RW-005', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Rayas en pareja (elemento no esencial)',
      passage:"The city's oldest bridge\u2014built in 1883 and still carrying pedestrian %BLANK% was closed last month after inspectors found cracks in two of its support cables.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'traffic,', B:'traffic;', C:'traffic\u2014', D:'traffic:'},
      correct:'C',
      expCorrect:'El inciso "built in 1883 and still carrying pedestrian traffic" se abrió con una raya, así que debe CERRARSE con otra raya: "bridge—…traffic—was closed."',
      expWrong:{
        A:'Mezcla raya de apertura con coma de cierre → la puntuación de un inciso debe coincidir.',
        B:'El ";" no cierra incisos y además no hay cláusula independiente antes.',
        D:'Los dos puntos no cierran un inciso abierto con raya.'
      },
      tip:'Cuando veas una raya "huérfana" antes del blank, casi siempre la respuesta es la raya que la empareja. Busca la apertura primero.'
    },
    {
      id:'RW-006', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Apóstrofos posesivos (plural)',
      passage:"Many %BLANK% nests are woven from spider silk and camouflaged with flakes of lichen, making them nearly invisible among the branches.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:"hummingbird's", B:'hummingbirds', C:"hummingbirds's", D:"hummingbirds'"},
      correct:'D',
      expCorrect:'"Many" indica plural → hummingbirds. Los nidos les pertenecen → posesivo. Posesivo de un plural terminado en -s = apóstrofo después de la s: hummingbirds\u2019.',
      expWrong:{
        A:'Posesivo singular — contradice "Many".',
        B:'Plural sin apóstrofo → no marca posesión de "nests".',
        C:'Forma inexistente para plurales regulares terminados en -s.'
      },
      tip:'Dos preguntas rápidas: ¿es plural? ¿posee algo? Plural + posesión → s\u2019 (apóstrofo al final).'
    },
    {
      id:'RW-007', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punto y coma en listas complejas',
      passage:"The documentary features interviews with three pioneers of electronic music: Wendy Carlos, who popularized the %BLANK% Delia Derbyshire, who composed haunting scores for early television; and Halim El-Dabh, who experimented with tape recorders in the 1940s.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'synthesizer,', B:'synthesizer:', C:'synthesizer;', D:'synthesizer\u2014'},
      correct:'C',
      expCorrect:'Cuando los elementos de una lista contienen comas internas ("Wendy Carlos, who popularized…"), los elementos se separan con punto y coma. Los otros dos elementos ya usan ";" — el paralelismo te da la respuesta.',
      expWrong:{
        A:'Con coma, se pierde la separación entre elementos: todo se vuelve una sopa de comas imposible de leer.',
        B:'Ya hay un colon introduciendo la lista; otro colon dentro de la lista no tiene función.',
        D:'La raya no sigue el patrón de la lista (los demás elementos van con ";").'
      },
      tip:'En listas complejas, copia el patrón: mira cómo están separados los OTROS elementos y usa lo mismo.'
    },
    {
      id:'RW-008', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Sin coma entre verbo y su complemento',
      passage:"While mapping the forest floor, researchers %BLANK% the fungal network beneath the soil can transmit electrical signals between trees located dozens of meters apart.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'discovered, that', B:'discovered that', C:'discovered that,', D:'discovered: that'},
      correct:'B',
      expCorrect:'"that the fungal network… apart" es el complemento directo de "discovered". Nada separa a un verbo de su cláusula objeto: "researchers discovered that…" va sin puntuación.',
      expWrong:{
        A:'Coma entre el verbo y "that" → corta el verbo de su objeto.',
        C:'Coma entre "that" y su cláusula → mismo error, un lugar después.',
        D:'El colon requiere una cláusula independiente completa antes; "researchers discovered" queda incompleto sin su objeto.'
      },
      tip:'Regla de oro: NADA entre el verbo y su "that". Si dudas, lee sin la coma — si fluye, no la pongas.'
    },
    {
      id:'RW-009', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Dos puntos (elaboración entre cláusulas)',
      passage:"Octopuses have a remarkably decentralized nervous %BLANK% of their neurons are located in their arms rather than in their central brain.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'system, two-thirds', B:'system two-thirds', C:'system and two-thirds', D:'system: two-thirds'},
      correct:'D',
      expCorrect:'Hay dos cláusulas independientes y la segunda EXPLICA la primera (por qué el sistema es "decentralized"). El colon puede unir dos independientes cuando la segunda elabora o ejemplifica la primera.',
      expWrong:{
        A:'Coma sola entre dos independientes = comma splice.',
        B:'Sin puntuación = oración fusionada (run-on).',
        C:'"and" uniendo dos cláusulas independientes necesita coma ANTES: ", and". Sin la coma, es incorrecto en el SAT.'
      },
      tip:'El colon no es solo para listas: también une dos oraciones cuando la segunda responde "¿cómo así?" de la primera.'
    },
    {
      id:'RW-010', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Coma tras cláusula subordinada introductoria',
      passage:"Although the medieval manuscript was badly damaged in the 1966 %BLANK% conservators managed to recover nearly all of its original text using ultraviolet imaging.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'flood;', B:'flood.', C:'flood,', D:'flood'},
      correct:'C',
      expCorrect:'"Although… flood" es una cláusula subordinada introductoria; cuando va al inicio, se separa de la cláusula principal con una coma.',
      expWrong:{
        A:'El ";" exige independiente + independiente; "Although… flood" es dependiente.',
        B:'El punto convierte "Although… flood." en un fragmento sin verbo principal.',
        D:'Falta la coma obligatoria tras una cláusula introductoria de este tipo.'
      },
      tip:'Si la oración empieza con Although / Because / When / While… → coma al terminar esa cláusula, punto. Nada de ";" ni ".".'
    }
  ]
});
