/* SAT Studio question set — Reading & Writing: Punctuation & Boundaries Set 3 (PB2-01 a PB2-12) */
window.SAT_SETS.push({
  id: 'rw-punct2',
  title: 'Punctuation & Boundaries — Set 3',
  section: 'rw',
  level: 'Media',
  description: 'Commas, semicolons, colons, dashes, and sentence boundaries in context.',
  minutes: 14,
  questions: [
    {
      id:'PB2-01', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Límites de oración: comma splice',
      passage:"The potter shaped the clay entirely by %BLANK% she had learned the technique from her grandmother decades earlier.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'hand;', B:'hand,', C:'hand', D:'hand, and,'},
      correct:'A',
      expCorrect:'Hay dos oraciones completas: "The potter shaped the clay entirely by hand" y "she had learned the technique…". Para unir dos oraciones independientes sin conjunción, el punto y coma es lo correcto.',
      expWrong:{
        B:'Una coma sola entre dos oraciones completas es un comma splice.',
        C:'Sin ninguna puntuación, las dos oraciones se fusionan (run-on).',
        D:'Aquí no aparece una segunda oración tras "and", y la coma después de "and" sobra; el patrón "and," está mal.'
      },
      tip:'Prueba del punto: si a ambos lados del blank puedes poner un punto y quedan oraciones completas, el ";" sirve.'
    },
    {
      id:'PB2-02', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Puntuación: dos puntos para introducir una lista',
      passage:"For the week-long hike, Mara packed only what she could carry on her %BLANK% a lightweight tent, a water filter, and three days of food.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'back:', B:'back,', C:'back;', D:'back'},
      correct:'A',
      expCorrect:'Antes del blank hay una oración completa ("Mara packed only what she could carry on her back") y lo que sigue es la lista que la detalla. Ese es exactamente el trabajo de los dos puntos.',
      expWrong:{
        B:'La coma no puede introducir así una lista después de una oración completa.',
        C:'El punto y coma exige una oración independiente después, y una lista no lo es.',
        D:'Sin puntuación, "on her back a lightweight tent…" se fusiona sin sentido.'
      },
      tip:'Colon = solo después de una oración COMPLETA. Tápalo: lo de antes debe poder terminar en punto.'
    },
    {
      id:'PB2-03', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Puntuación: coma antes de conjunción coordinante (FANBOYS)',
      passage:"The museum's new wing was scheduled to open in %BLANK% a delay in the shipment of glass panels pushed the date back by several months.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'spring, but', B:'spring but', C:'spring; but', D:'spring, but,'},
      correct:'A',
      expCorrect:'Son dos oraciones independientes unidas por "but". Cuando un FANBOYS (for, and, nor, but, or, yet, so) une dos independientes, lleva coma ANTES de la conjunción: "…in spring, but a delay…".',
      expWrong:{
        B:'Falta la coma antes de "but"; sin ella, unir dos oraciones completas es incorrecto en el SAT.',
        C:'El punto y coma REEMPLAZA a la conjunción; no se usan juntos ("; but" es redundante).',
        D:'La coma después de "but" sobra: la coma va ANTES de la conjunción, no después.'
      },
      tip:'Regla FANBOYS: dos oraciones completas + and/but/or… → coma justo ANTES de la conjunción.'
    },
    {
      id:'PB2-04', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Elementos no esenciales (comas en pareja)',
      passage:"The %BLANK% a flightless parrot native to New Zealand, is one of the longest-lived birds in the world.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'kakapo', B:'kakapo:', C:'kakapo;', D:'kakapo,'},
      correct:'D',
      expCorrect:'"a flightless parrot native to New Zealand" es un apositivo NO esencial que renombra "The kakapo". Debe ir entre DOS comas; como ya hay coma de cierre antes de "is", falta la de apertura.',
      expWrong:{
        A:'Sin la coma de apertura, el inciso cierra pero no abre → desbalanceado.',
        B:'El colon no abre un inciso, y separaría el sujeto ("The kakapo") de su verbo ("is").',
        C:'El punto y coma no encierra apositivos y no hay oración independiente antes.'
      },
      tip:'Apertura y cierre GEMELOS: coma–coma. Si ves una coma "huérfana" cerrando el inciso, la respuesta suele ser la coma que lo abre.'
    },
    {
      id:'PB2-05', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Rayas en pareja (elemento no esencial)',
      passage:"The first commercial photograph—an image that required an exposure of several %BLANK% was taken from a rooftop in France in 1826.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'hours,', B:'hours;', C:'hours:', D:'hours—'},
      correct:'D',
      expCorrect:'El inciso "an image that required an exposure of several hours" se abrió con una raya, así que debe CERRARSE con otra raya: "photograph—…hours—was taken…".',
      expWrong:{
        A:'Mezcla raya de apertura con coma de cierre; la puntuación de un inciso debe coincidir.',
        B:'El punto y coma no cierra incisos ni hay oración independiente antes.',
        C:'El colon no cierra un inciso abierto con raya.'
      },
      tip:'Raya "huérfana" antes del blank → casi siempre la respuesta es la raya que la empareja.'
    },
    {
      id:'PB2-06', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Coma tras cláusula subordinada introductoria',
      passage:"Because the river changes course so often from year to %BLANK% mapmakers have struggled for centuries to fix its banks on paper.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'year', B:'year;', C:'year,', D:'year:'},
      correct:'C',
      expCorrect:'"Because the river changes course so often from year to year" es una cláusula subordinada introductoria; cuando abre la oración, se separa de la cláusula principal con una coma.',
      expWrong:{
        A:'Falta la coma obligatoria tras la cláusula introductoria.',
        B:'El punto y coma exige una oración independiente antes, y "Because…" es dependiente.',
        D:'El colon necesita una oración completa antes; "Because… year" no lo es.'
      },
      tip:'¿La oración empieza con Because/After/When/While…? Coma donde termina esa parte introductoria.'
    },
    {
      id:'PB2-07', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Puntuación: dos puntos (elaboración entre cláusulas)',
      passage:"The recipe owes its distinctive flavor to a single unexpected %BLANK% a spoonful of dark cocoa stirred into the simmering chili.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'ingredient,', B:'ingredient', C:'ingredient:', D:'ingredient, and'},
      correct:'C',
      expCorrect:'Antes del blank hay una oración completa ("The recipe owes its distinctive flavor to a single unexpected ingredient") y lo que sigue la ELABORA nombrando ese ingrediente. El colon introduce esa aclaración.',
      expWrong:{
        A:'Una coma no puede conectar así la oración completa con la aclaración que la sigue.',
        B:'Sin puntuación, "ingredient a spoonful…" se fusiona.',
        D:'"and" pediría otra cláusula, pero "a spoonful of dark cocoa…" es una frase nominal, no una oración; el patrón queda roto.'
      },
      tip:'El colon no es solo para listas: también presenta una sola cosa que aclara lo dicho antes, siempre que lo previo sea oración completa.'
    },
    {
      id:'PB2-08', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Coma innecesaria (verbo y su complemento)',
      passage:"After months of testing, the biologists concluded %BLANK% the coral colonies were recovering faster than any model had predicted.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'that,', B:'that', C:', that', D:': that'},
      correct:'B',
      expCorrect:'"that the coral colonies were recovering…" es el complemento directo de "concluded". Nada separa un verbo de su cláusula objeto: "concluded that…" va sin puntuación.',
      expWrong:{
        A:'Coma entre "that" y su cláusula → corta el objeto justo después de "that".',
        C:'Coma entre el verbo "concluded" y "that" → separa el verbo de su objeto.',
        D:'El colon requiere una oración completa antes; "the biologists concluded" queda incompleto sin su objeto.'
      },
      tip:'Regla de oro: NADA entre el verbo y su "that". Si dudas, lee sin la coma — si fluye, no la pongas.'
    },
    {
      id:'PB2-09', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punto y coma en listas complejas',
      passage:"The grant will fund three teams: a group in Oslo, which studies Arctic %BLANK% a lab in Nairobi, which tracks migratory birds; and a station in Chile, which monitors ocean acidification.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'ice,', B:'ice:', C:'ice—', D:'ice;'},
      correct:'D',
      expCorrect:'Cuando los elementos de una lista contienen comas internas ("a group in Oslo, which studies…"), los elementos se separan con punto y coma. Los otros dos elementos ya usan ";" — el paralelismo te da la respuesta.',
      expWrong:{
        A:'Con coma, se pierde la separación entre elementos: todo se vuelve una sopa de comas imposible de leer.',
        B:'Ya hay un colon introduciendo la lista; otro colon dentro de la lista no tiene función.',
        C:'La raya no sigue el patrón de la lista (los demás elementos van con ";").'
      },
      tip:'En listas complejas, copia el patrón: mira cómo están separados los OTROS elementos y usa lo mismo.'
    },
    {
      id:'PB2-10', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Punto y coma con adverbio conjuntivo (therefore)',
      passage:"The archive's oldest films are printed on unstable nitrate %BLANK% they must be stored in climate-controlled vaults far from the reading rooms.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'stock, therefore,', B:'stock; therefore,', C:'stock therefore,', D:'stock; therefore'},
      correct:'B',
      expCorrect:'Son dos oraciones independientes y la segunda arranca con el adverbio conjuntivo "therefore". El patrón correcto es: oración 1 + punto y coma + therefore + coma + oración 2 → "…nitrate stock; therefore, they must…".',
      expWrong:{
        A:'", therefore," no puede unir dos oraciones completas: sigue siendo comma splice.',
        C:'Falta el punto y coma antes de "therefore".',
        D:'Falta la coma DESPUÉS de "therefore".'
      },
      tip:'therefore/however/moreover NO son conjunciones: no unen oraciones. Entre dos independientes usa "; therefore,".'
    },
    {
      id:'PB2-11', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Límites de oración: run-on',
      passage:"The comet will not return for another seventy-six %BLANK% most people alive today will see it only once.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'years', B:'years,', C:'years, so', D:'years so'},
      correct:'C',
      expCorrect:'Son dos oraciones independientes ("The comet will not return for another seventy-six years" y "most people… will see it only once"). Unirlas con el FANBOYS "so" precedido de coma es correcto: "…years, so most people…".',
      expWrong:{
        A:'Sin puntuación ni conjunción, las dos oraciones se fusionan (run-on).',
        B:'Una coma sola entre dos oraciones completas es un comma splice.',
        D:'"so" sin la coma antes no basta para unir dos oraciones completas en el SAT.'
      },
      tip:'Dos oraciones completas seguidas necesitan algo: ";", ".", o coma + FANBOYS. Nunca una coma sola ni nada.'
    },
    {
      id:'PB2-12', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Coma innecesaria entre sujeto y verbo',
      passage:"The long-held belief that lightning never strikes the same place %BLANK% has been disproven many times over by observations of tall buildings.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'twice,', B:'twice', C:'twice;', D:'twice:'},
      correct:'B',
      expCorrect:'El sujeto completo es "The long-held belief that lightning never strikes the same place twice" y su verbo es "has been disproven". La cláusula "that…" es esencial (define cuál creencia), así que no lleva comas, y nunca se separa un sujeto de su verbo.',
      expWrong:{
        A:'Una coma entre el sujeto (por largo que sea) y "has been disproven" es incorrecta.',
        C:'El punto y coma pide oraciones independientes a ambos lados; "has been disproven…" no lo es.',
        D:'El colon partiría el sujeto de su verbo, además de exigir oración completa antes.'
      },
      tip:'Los sujetos largos "piden" pausa al leer, pero gramática ≠ respiración. Halla sujeto + verbo y NO los separes.'
    }
  ]
});
