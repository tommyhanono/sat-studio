/* SAT Studio question set — Reading & Writing: Punctuation Drill Set 2 (RW-011 a RW-020) */
window.SAT_SETS.push({
  id: 'rw-set2',
  title: 'Punctuation Drill — Set 2',
  section: 'rw',
  description: 'Más Standard English Conventions (Boundaries): punto y coma, dos puntos, comas de inciso, FANBOYS, cláusulas esenciales, apóstrofos y adverbios conjuntivos.',
  minutes: 15,
  questions: [
    {
      id:'RW-011', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Punto y coma entre dos oraciones independientes',
      passage:"Marie Tharp’s hand-drawn maps of the ocean floor were at first dismissed by many %BLANK% within a decade, her detailed rendering of the Mid-Atlantic Ridge had become central to the theory of plate tectonics.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'geologists,', B:'geologists', C:'geologists;', D:'geologists:'},
      correct:'C',
      expCorrect:'Hay dos oraciones completas: “Marie Tharp’s maps… were at first dismissed by many geologists” y “within a decade, her… rendering… had become central…”. Para unir dos oraciones independientes sin conjunción, el punto y coma es lo correcto.',
      expWrong:{
        A:'Una coma sola entre dos oraciones completas es un comma splice.',
        B:'Sin puntuación, las dos oraciones se fusionan (run-on).',
        D:'El colon une dos independientes solo cuando la segunda EXPLICA o ejemplifica la primera; aquí la segunda CONTRASTA (primero la rechazaron, luego triunfó), así que el colon no encaja.'
      },
      tip:'Prueba del punto: si a ambos lados del blank puedes poner un punto y quedan oraciones completas, el ";" sirve. El colon pídelo solo cuando la 2ª parte aclara la 1ª.'
    },
    {
      id:'RW-012', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Dos puntos para introducir una lista',
      passage:"To restore the old wooden sailboat, the two brothers spent a year tracking down the materials they %BLANK% marine-grade plywood, bronze fittings, and yards of waxed sailcloth.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'needed:', B:'needed,', C:'needed;', D:'needed'},
      correct:'A',
      expCorrect:'Antes del blank hay una oración completa (“the two brothers spent a year tracking down the materials they needed”) y lo que sigue es la lista que la detalla. Ese es justo el trabajo del colon.',
      expWrong:{
        B:'La coma no puede introducir así una lista después de una oración completa.',
        C:'El punto y coma exige una oración independiente después, y una lista no lo es.',
        D:'Sin puntuación, “needed marine-grade plywood…” se fusiona.'
      },
      tip:'Colon = solo después de una oración COMPLETA. Tápalo: lo de antes debe poder terminar en punto.'
    },
    {
      id:'RW-013', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Elemento no esencial (comas en pareja)',
      passage:"The %BLANK% a salamander that never fully leaves its larval stage, can regrow not only lost limbs but also portions of its heart and brain.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'axolotl', B:'axolotl:', C:'axolotl;', D:'axolotl,'},
      correct:'D',
      expCorrect:'“a salamander that never fully leaves its larval stage” es un apositivo NO esencial que renombra “The axolotl”. Debe ir entre DOS comas; como ya hay coma de cierre antes de “can”, falta la de apertura.',
      expWrong:{
        A:'Sin la coma de apertura, el inciso cierra pero no abre → desbalanceado.',
        B:'El colon no abre un inciso, y separaría el sujeto (“The axolotl”) de su verbo (“can regrow”).',
        C:'El punto y coma no encierra apositivos y no hay oración independiente antes.'
      },
      tip:'Apertura y cierre GEMELOS: coma–coma. Si ves una coma “huérfana” cerrando el inciso, la respuesta suele ser la coma que lo abre.'
    },
    {
      id:'RW-014', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Coma antes de conjunción coordinante (FANBOYS)',
      passage:"The new space telescope can detect faint infrared light invisible to earlier %BLANK% it must be chilled to nearly −270°C so that its own warmth does not drown out the signals it gathers.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'instruments but', B:'instruments, but', C:'instruments, but,', D:'instruments; but'},
      correct:'B',
      expCorrect:'Son dos oraciones independientes unidas por “but”. Cuando un FANBOYS (for, and, nor, but, or, yet, so) une dos independientes, lleva coma ANTES de la conjunción: “…instruments, but it must…”.',
      expWrong:{
        A:'Falta la coma antes de “but”; sin ella, unir dos oraciones completas es incorrecto en el SAT.',
        C:'La coma después de “but” sobra: la coma va ANTES de la conjunción, no después.',
        D:'El punto y coma REEMPLAZA a la conjunción; no se usan juntos (“; but” es redundante).'
      },
      tip:'Regla FANBOYS: dos oraciones completas + and/but/or… → coma justo ANTES de la conjunción.'
    },
    {
      id:'RW-015', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Coma tras frase introductoria',
      passage:"After tracking the wolf pack across the tundra for nearly two %BLANK% the researchers finally located the den where the pups had been born.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'months', B:'months:', C:'months,', D:'months;'},
      correct:'C',
      expCorrect:'“After tracking the wolf pack… for nearly two months” es una frase introductoria; cuando abre la oración, se separa de la cláusula principal con una coma.',
      expWrong:{
        A:'Falta la coma obligatoria tras la frase introductoria.',
        B:'El colon necesita una oración completa antes; esta frase no lo es.',
        D:'El punto y coma exige una oración independiente antes, y “After tracking…” no lo es.'
      },
      tip:'¿La oración empieza con After/When/Because/Having…? Coma donde termina esa parte introductoria.'
    },
    {
      id:'RW-016', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'No separar sujeto y verbo',
      passage:"The claim that regular exposure to natural daylight improves both sleep quality and daytime %BLANK% is now supported by dozens of independent studies.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'focus', B:'focus,', C:'focus;', D:'focus:'},
      correct:'A',
      expCorrect:'El sujeto completo es “The claim that… daytime focus” y su verbo es “is”. La cláusula “that…” es esencial (define cuál claim), así que no lleva comas, y nunca se separa un sujeto de su verbo con una sola coma, punto y coma o colon.',
      expWrong:{
        B:'Una coma entre el sujeto (por largo que sea) y “is” es incorrecta.',
        C:'El punto y coma pide oraciones independientes a ambos lados; “is supported…” no lo es.',
        D:'El colon partiría el sujeto de su verbo.'
      },
      tip:'Los sujetos largos “piden” pausa al leer, pero gramática ≠ respiración. Halla sujeto + verbo y NO los separes.'
    },
    {
      id:'RW-017', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Rayas en pareja (elemento no esencial)',
      passage:"Bessie Coleman—the first African American woman to earn a pilot’s %BLANK% trained in France because no U.S. flight school of the era would admit her.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'license,', B:'license;', C:'license:', D:'license—'},
      correct:'D',
      expCorrect:'El inciso “the first African American woman to earn a pilot’s license” se abrió con una raya, así que debe CERRARSE con otra raya: “Coleman—…license—trained…”.',
      expWrong:{
        A:'Mezcla raya de apertura con coma de cierre; la puntuación de un inciso debe coincidir.',
        B:'El punto y coma no cierra incisos ni hay oración independiente antes.',
        C:'El colon no cierra un inciso abierto con raya.'
      },
      tip:'Raya “huérfana” antes del blank → casi siempre la respuesta es la raya que la empareja.'
    },
    {
      id:'RW-018', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Apóstrofo posesivo (singular)',
      passage:"Because it can glide for hours without a single %BLANK% wingspan—close to 3.5 meters—is the largest of any bird alive today.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'flap, the albatross', B:'flap, the albatrosses', C:'flap, the albatross’s', D:'flap, the albatrosses’'},
      correct:'C',
      expCorrect:'“it” y “the largest of any bird alive today” indican UNA ave (singular). El wingspan le pertenece → posesivo singular = nombre + ’s: “the albatross’s wingspan”.',
      expWrong:{
        A:'Sin apóstrofo, “the albatross wingspan” no marca la posesión.',
        B:'Plural sin posesivo, y contradice el singular “it”.',
        D:'Posesivo plural (“de los albatros”), pero el texto habla de uno solo.'
      },
      tip:'Dos preguntas: ¿singular o plural? ¿posee algo? Singular + posesión → ’s.'
    },
    {
      id:'RW-019', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Cláusula esencial (sin comas)',
      passage:"Of the dozens of composers working in Vienna at the time, the one %BLANK% most shaped the young Beethoven was not Mozart but Haydn.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:', who', B:'who', C:', who,', D:'who,'},
      correct:'B',
      expCorrect:'“who most shaped the young Beethoven” es esencial: distingue a ESE compositor entre las docenas mencionadas. La información esencial no se encierra entre comas.',
      expWrong:{
        A:'Una coma de apertura sin cierre desbalancea, y vuelve “no esencial” algo que sí lo es.',
        C:'Las comas la vuelven NO esencial, pero el texto necesita esa cláusula para identificar de quién habla.',
        D:'La coma entre “who… Beethoven” y su verbo “was” separa el sujeto de su verbo.'
      },
      tip:'¿Puedes borrar la cláusula sin perder de quién/qué se habla? Si NO → es esencial → sin comas.'
    },
    {
      id:'RW-020', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punto y coma con adverbio conjuntivo (however)',
      passage:"The footbridge was engineered to flex slightly under heavy foot %BLANK% the designers had not accounted for the way hundreds of people unconsciously fall into step, amplifying its sway.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'traffic, however,', B:'traffic however,', C:'traffic; however', D:'traffic; however,'},
      correct:'D',
      expCorrect:'Son dos oraciones independientes y la segunda arranca con el adverbio conjuntivo “however”. El patrón correcto es: oración 1 + punto y coma + however + coma + oración 2 → “…foot traffic; however, the designers…”.',
      expWrong:{
        A:'“, however,” no puede unir dos oraciones completas: sigue siendo comma splice.',
        B:'Falta el punto y coma antes de “however”.',
        C:'Falta la coma DESPUÉS de “however”.'
      },
      tip:'however/therefore/moreover NO son conjunciones: no unen oraciones. Entre dos independientes usa “; however,”.'
    }
  ]
});
