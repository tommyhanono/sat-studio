/* SAT Studio question set — Reading & Writing: Punctuation Check-Up (PCU-01 a PCU-10)
   Una pregunta por regla de puntuación; cada pregunta trae su clave `cheat`
   para el cheat sheet adaptativo (CHEAT_RULES en index.html). */
window.SAT_SETS.push({
  id: 'rw-punct-checkup',
  title: 'Punctuation Check-Up',
  section: 'rw',
  level: 'Media',
  description: '10 questions, one per punctuation rule — with an adaptive cheat sheet you can open on any question.',
  minutes: 12,
  questions: [
    {
      id:'PCU-01', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Puntuación: coma introductoria', cheat:'comma-intro',
      passage:"To keep the mural’s colors from fading in direct %BLANK% the restorers coated the wall with a transparent mineral glaze.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'sunlight', B:'sunlight,', C:'sunlight;', D:'sunlight:'},
      correct:'B',
      expCorrect:'“To keep the mural’s colors from fading in direct sunlight” es una frase introductoria (indica el propósito). Cuando una frase así abre la oración, se separa de la cláusula principal (“the restorers coated…”) con una coma.',
      expWrong:{
        A:'Sin coma, la frase introductoria se estrella contra el sujeto “the restorers”; la coma después del elemento introductorio es obligatoria.',
        C:'El punto y coma exige una oración independiente a CADA lado, y “To keep… sunlight” no es una oración completa.',
        D:'Los dos puntos solo van después de una oración COMPLETA; una frase introductoria no puede sostenerlos.'
      },
      tip:'¿La oración abre con To/After/When/Because/Although…? Marca dónde termina esa parte introductoria y pon la coma justo ahí.'
    },
    {
      id:'PCU-02', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Puntuación: elemento no esencial', cheat:'comma-nonessential',
      passage:"Katherine Johnson, whose orbital calculations helped guide the first American crewed %BLANK% worked at NASA and its predecessor for more than three decades.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'spaceflights', B:'spaceflights;', C:'spaceflights—', D:'spaceflights,'},
      correct:'D',
      expCorrect:'“whose orbital calculations… spaceflights” es un inciso NO esencial que se abrió con una coma después de “Johnson”. Los incisos van entre signos gemelos: debe cerrarse con OTRA coma antes del verbo principal “worked”.',
      expWrong:{
        A:'Sin puntuación, el inciso nunca se cierra y el sujeto “Katherine Johnson” choca de frente con su verbo “worked”.',
        B:'El punto y coma pide oraciones independientes a ambos lados; no puede cerrar un inciso abierto con coma.',
        C:'La raya no puede cerrar un inciso que se abrió con coma: apertura y cierre deben coincidir (coma–coma o raya–raya).'
      },
      tip:'Inciso = signos GEMELOS. Si abrió con coma, cierra con coma; si abrió con raya, cierra con raya. Nunca los mezcles.'
    },
    {
      id:'PCU-03', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Puntuación: coma + FANBOYS', cheat:'comma-fanboys',
      passage:"Hand-pulled noodles call for nothing more than flour, water, and %BLANK% the pulling technique itself can take a cook years to master.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'salt, but', B:'salt but', C:'salt, but,', D:'salt; but'},
      correct:'A',
      expCorrect:'Hay dos oraciones independientes (“Hand-pulled noodles call for…” y “the pulling technique… can take…”) unidas por el FANBOYS “but”. El patrón correcto es coma + conjunción: “…salt, but the pulling technique…”.',
      expWrong:{
        B:'Falta la coma antes de “but”: cuando un FANBOYS une dos oraciones completas, esa coma es obligatoria en el SAT.',
        C:'La coma después de “but” sobra: la coma va ANTES de la conjunción, nunca después.',
        D:'El punto y coma REEMPLAZA a la conjunción, no la acompaña: “; but” es redundante.'
      },
      tip:'FANBOYS = for, and, nor, but, or, yet, so. Dos oraciones completas + FANBOYS → coma justo antes de la conjunción.'
    },
    {
      id:'PCU-04', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Puntuación: coma innecesaria', cheat:'comma-unnecessary',
      passage:"A network of irrigation canals dug across the desert more than a thousand years ago by Hohokam %BLANK% still determines the routes of several waterways in modern Phoenix.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'farmers,', B:'farmers—', C:'farmers', D:'farmers;'},
      correct:'C',
      expCorrect:'El sujeto completo es “A network of irrigation canals… by Hohokam farmers” y su verbo es “still determines”. Por largo que sea el sujeto, entre él y su verbo NO va ninguna puntuación.',
      expWrong:{
        A:'La coma separa ilegalmente el sujeto de su verbo; la pausa que “sientes” al leer no justifica una coma.',
        B:'Una raya suelta aquí también corta el sujeto de su verbo; las rayas de inciso van en pareja.',
        D:'El punto y coma exige una oración independiente a cada lado, y “still determines…” no lo es.'
      },
      tip:'Sujeto largo ≠ coma. Encuentra el núcleo y el verbo (network… determines) y verifica que nada los separe.'
    },
    {
      id:'PCU-05', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Puntuación: punto y coma', cheat:'semicolon',
      passage:"High-wheel bicycles of the 1880s look almost comical to modern %BLANK% in their own day, riding one at full speed was considered a daring athletic feat.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'eyes,', B:'eyes;', C:'eyes', D:'eyes:'},
      correct:'B',
      expCorrect:'Hay dos oraciones completas: “High-wheel bicycles… look almost comical to modern eyes” y “in their own day, riding one… was considered a daring athletic feat”. Para unirlas sin conjunción, el punto y coma es la opción correcta.',
      expWrong:{
        A:'Una coma sola entre dos oraciones completas crea un comma splice.',
        C:'Sin puntuación, las dos oraciones se fusionan en un run-on.',
        D:'Los dos puntos unen dos independientes solo cuando la segunda EXPLICA la primera; aquí la segunda CONTRASTA (cómicas hoy, serias en su época).'
      },
      tip:'Prueba del punto: si en el blank podrías poner un punto y quedan dos oraciones completas, el “;” funciona.'
    },
    {
      id:'PCU-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Puntuación: punto y coma + adverbio', cheat:'semicolon-adverb',
      passage:"City planners braced for fierce resistance to the new bike %BLANK% the proposal cleared the council without a single dissenting vote.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'lanes, however,', B:'lanes; however', C:'lanes however,', D:'lanes; however,'},
      correct:'D',
      expCorrect:'Son dos oraciones independientes y la segunda arranca con el adverbio conjuntivo “however”. El patrón es: oración 1 + punto y coma + however + coma + oración 2 → “…bike lanes; however, the proposal…”.',
      expWrong:{
        A:'“, however,” entre dos oraciones completas sigue siendo un comma splice: however no es conjunción.',
        B:'Falta la coma DESPUÉS de “however”.',
        C:'Falta el punto y coma antes de “however”; sin él, las dos oraciones se fusionan.'
      },
      tip:'however/therefore/moreover NO son FANBOYS: no unen oraciones con una simple coma. Entre dos independientes: “; however,”.'
    },
    {
      id:'PCU-07', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Puntuación: dos puntos', cheat:'colon',
      passage:"Before dawn, the balloon crew ran through a final inspection of three critical %BLANK% the burner, the envelope fabric, and the fuel lines.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'systems:', B:'systems,', C:'systems;', D:'systems'},
      correct:'A',
      expCorrect:'Antes del blank hay una oración completa (“Before dawn, the balloon crew ran through a final inspection of three critical systems”) y lo que sigue es la lista que la detalla. Ese es exactamente el trabajo de los dos puntos.',
      expWrong:{
        B:'Después de una oración completa, la coma no puede presentar así la lista.',
        C:'El punto y coma exigiría una oración independiente después, y una lista no lo es.',
        D:'Sin puntuación, “systems the burner…” se amontona sin sentido.'
      },
      tip:'Dos puntos = solo después de una oración COMPLETA. Tapa lo que sigue: lo de antes debe poder terminar en punto.'
    },
    {
      id:'PCU-08', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Puntuación: rayas', cheat:'dash',
      passage:"The tuatara—a reptile whose lineage split from snakes and lizards more than 200 million years %BLANK% now survives mainly on small islands off the coast of New Zealand.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'ago,', B:'ago;', C:'ago—', D:'ago:'},
      correct:'C',
      expCorrect:'El inciso “a reptile whose lineage… years ago” se abrió con una raya después de “tuatara”, así que debe CERRARSE con otra raya antes de “now survives”. Raya abre → raya cierra.',
      expWrong:{
        A:'Mezcla raya de apertura con coma de cierre; los signos que encierran un inciso deben coincidir.',
        B:'El punto y coma no cierra incisos y no hay oración independiente antes del blank.',
        D:'Los dos puntos no cierran un inciso abierto con raya.'
      },
      tip:'Raya “huérfana” antes del blank → busca la opción que la empareja con otra raya.'
    },
    {
      id:'PCU-09', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Límites de oración', cheat:'boundaries',
      passage:"Wind farms now generate a third of the region’s %BLANK% plants supplied nearly all of it just fifteen years ago.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'electricity, coal', B:'electricity. Coal', C:'electricity coal', D:'electricity: coal'},
      correct:'B',
      expCorrect:'“Wind farms now generate…” y “coal plants supplied…” son dos oraciones completas. Sin conjunción que las una, la reparación correcta entre las opciones es cerrar con punto y arrancar oración nueva: “…electricity. Coal plants…”.',
      expWrong:{
        A:'Una coma sola entre dos oraciones completas es un comma splice.',
        C:'Sin puntuación queda un run-on: dos oraciones fusionadas.',
        D:'Los dos puntos pedirían que la segunda oración explique o desarrolle la primera; aquí solo contrasta el pasado con el presente.'
      },
      tip:'Un comma splice se repara con punto, con “;”, o con coma + FANBOYS. Revisa cuál de esas reparaciones aparece entre las opciones.'
    },
    {
      id:'PCU-10', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Posesivos', cheat:'possessive',
      passage:"The researchers followed forty families for a decade, documenting how the %BLANK% grocery budgets shifted as their children became teenagers.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'families’', B:'family’s', C:'families', D:'familys’'},
      correct:'A',
      expCorrect:'Son cuarenta familias (plural: families) y los presupuestos les pertenecen. Para un plural terminado en -s, el posesivo se forma con el apóstrofo DESPUÉS de la s: “the families’ grocery budgets”.',
      expWrong:{
        B:'“family’s” es el posesivo SINGULAR (de una sola familia), pero el texto habla de cuarenta.',
        C:'Sin apóstrofo no se marca posesión: “the families grocery budgets” queda mal formado.',
        D:'El plural de family es families (con -ies); la forma “familys” no existe.'
      },
      tip:'Dos pasos: (1) forma bien el plural (family → families); (2) plural en -s → apóstrofo después de la s. Y recuerda: its = posesivo, it’s = “it is”.'
    }
  ]
});
