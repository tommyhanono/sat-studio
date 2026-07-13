/* SAT Studio question set — Reading & Writing EXTREME: Conventions (XC-01 a XC-12) */
window.SAT_SETS.push({
  id: 'rw-x-conventions',
  title: 'Extreme — Conventions',
  section: 'rw',
  level: 'Extreme',
  description: 'Hard-Module-2 level: stacked interrupters, inverted subjects, reduced relatives, and citation punctuation.',
  minutes: 15,
  questions: [
    {
      id:'XC-01', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Interruptores apilados: cierre del inciso con guion largo',
      passage:"The architect Zaha Hadid—whose design for the Vitra Fire Station, completed in 1993, was her first major built %BLANK% that a building could be as dynamic as the motion around it.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'work—insisted', B:'work, insisted', C:'work insisted', D:'work; insisted'},
      correct:'A',
      expCorrect:'El inciso grande se abrió con un guion largo después de “Hadid”, así que TIENE que cerrarse con otro guion largo. Fíjate que adentro de ese inciso vive otro más pequeño entre comas (“, completed in 1993,”); ese par de comas ya está completo, y lo que falta es cerrar la capa exterior: “—whose design… was her first major built work—insisted…”. El esqueleto queda: “The architect Zaha Hadid… insisted that…”.',
      expWrong:{
        B:'Mezcla los delimitadores: abriste el inciso con guion largo y no puedes cerrarlo con coma. Guion abre → guion cierra.',
        C:'Sin puntuación, el inciso nunca se cierra y “work insisted” fusiona la cláusula relativa con el verbo principal.',
        D:'El punto y coma exige una oración independiente después, y “insisted that a building…” sin sujeto no lo es; además deja el guion de apertura sin pareja.'
      },
      tip:'Con incisos apilados, identifica cada capa: la capa de guiones cierra con guion, la capa de comas cierra con coma. Nunca se intercambian.'
    },
    {
      id:'XC-02', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Interruptores apilados: coma interna dentro de un inciso con guiones',
      passage:"The astronomer Vera Rubin—whose measurements of spiral galaxies, made with a spectrograph she had helped %BLANK% some of the first persuasive evidence for dark matter—remained skeptical of easy fame throughout her career.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'design—provided', B:'design, provided', C:'design provided', D:'design; provided'},
      correct:'B',
      expCorrect:'El blank cae DENTRO del inciso grande de guiones. Adentro hay un inciso pequeño entre comas: “, made with a spectrograph she had helped design,”. Esa capa se abrió con coma después de “galaxies”, así que se cierra con coma, y luego sigue el verbo de la cláusula relativa: “whose measurements… provided some of the first… evidence”. El guion largo que cierra la capa exterior ya está después de “dark matter”.',
      expWrong:{
        A:'Un guion aquí cerraría prematuramente el inciso grande y dejaría tres guiones sueltos en la oración; la capa que toca cerrar es la de comas, no la de guiones.',
        C:'La frase “made with a spectrograph…” se abrió con coma; sin la coma de cierre, el par queda desbalanceado.',
        D:'El punto y coma no puede cerrar un paréntesis de comas ni vivir dentro de un inciso; además “provided some of the first…” no es oración independiente.'
      },
      tip:'Dibuja las capas: —guiones— por fuera, ,comas, por dentro. El blank pertenece a la capa que esté abierta en ese punto exacto.'
    },
    {
      id:'XC-03', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Interruptores apilados: apertura que hace pareja con el guion de cierre',
      passage:"The political economist Elinor %BLANK% whose fieldwork on shared resources, conducted in fisheries and irrigation districts on several continents, overturned a long-standing assumption about the “tragedy of the commons”—became the first woman to receive the Nobel Memorial Prize in Economic Sciences.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'Ostrom,', B:'Ostrom', C:'Ostrom—', D:'Ostrom;'},
      correct:'C',
      expCorrect:'Lee hasta el final antes de decidir: después de “commons” hay un guion largo que CIERRA un inciso. Un cierre con guion exige una apertura con guion, así que el blank debe abrirlo: “Elinor Ostrom—whose fieldwork…—became…”. Las comas alrededor de “conducted in fisheries… continents” son la capa interna y ya están completas.',
      expWrong:{
        A:'Coma para abrir y guion para cerrar es un par desparejo; los delimitadores de un mismo inciso deben ser gemelos.',
        B:'Sin puntuación no se abre el inciso, y el guion de cierre después de “commons” queda huérfano.',
        D:'El punto y coma separa oraciones independientes; “whose fieldwork… overturned…” es una cláusula relativa, no una oración completa.'
      },
      tip:'En preguntas de apertura de inciso, salta al final del inciso y mira con qué cierra: ese mismo signo es el que abre.'
    },
    {
      id:'XC-04', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Sujeto invertido: concordancia con el sujeto pospuesto',
      passage:"Among the artifacts recovered from the wreck of a sixteenth-century merchant vessel %BLANK% a bronze astrolabe engraved with its maker's initials, an instrument that has allowed historians to date the sinking with unusual precision.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'were', B:'are', C:'have been', D:'was'},
      correct:'D',
      expCorrect:'La oración está invertida: el sujeto NO es “artifacts” (ese sustantivo vive dentro de la frase preposicional “Among…”), sino lo que viene DESPUÉS del verbo: “a bronze astrolabe”, singular. Reordénala: “A bronze astrolabe… was among the artifacts recovered…”. Singular + pasado narrativo → “was”.',
      expWrong:{
        A:'“Were” concuerda con “artifacts”, pero ese sustantivo es objeto de la preposición y no puede ser el sujeto.',
        B:'“Are” falla dos veces: plural con el sustantivo equivocado y presente donde el relato del hallazgo pide pasado.',
        C:'“Have been” también es plural; el sujeto real (“a bronze astrolabe”) es singular.'
      },
      tip:'Si la oración abre con frase preposicional (“Among…”, “Beneath…”), voltéala: el sujeto suele estar después del verbo.'
    },
    {
      id:'XC-05', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Concordancia a través de relativas reducidas',
      passage:"The set of instructions distributed to the volunteers who staffed the region's forty polling stations %BLANK% revised twice before election day to close loopholes that observers had flagged.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'was', B:'were', C:'have been', D:'are being'},
      correct:'A',
      expCorrect:'Pela las capas: “distributed to the volunteers…” es una relativa reducida (= “that was distributed…”) y “who staffed… stations” describe a los voluntarios, no al sujeto. El núcleo del sujeto es “The set”, singular. “The set… was revised twice” es la única combinación que concuerda y respeta el pasado.',
      expWrong:{
        B:'“Were” concuerda con “instructions”, “volunteers” o “stations”: puros imanes plurales que están dentro de modificadores, no en el núcleo del sujeto.',
        C:'“Have been” es plural, y el marco temporal (“before election day”, “had flagged”) pide pasado simple, no presente perfecto.',
        D:'“Are being” es plural y presente progresivo; la revisión ya ocurrió.'
      },
      tip:'Tacha todo lo que empiece con participio (“distributed…”, “collected…”) o con “who/that”: lo que sobreviva a la izquierda es el sujeto real.'
    },
    {
      id:'XC-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Sujeto pospuesto tras frase participial inicial',
      passage:"Tucked between the pages of the ledgers kept by the expedition's quartermaster %BLANK% letters that were never sent, along with a hand-drawn map of the coastline the crew had charted.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'was', B:'were', C:'is', D:'sits'},
      correct:'B',
      expCorrect:'Otra inversión: “Tucked between the pages…” es una frase participial inicial y el sujeto viene después del verbo: “letters”, plural. Reordenada: “Letters that were never sent were tucked between the pages…”. Plural + pasado → “were”. Ojo: “ledgers” y “quartermaster” son señuelos dentro de la frase inicial.',
      expWrong:{
        A:'“Was” concuerda con “quartermaster” o con “map”, pero el sujeto pospuesto es “letters”, plural.',
        C:'“Is” es singular y presente; el sujeto es plural y el relato está en pasado (“were never sent”, “had charted”).',
        D:'“Sits” es singular; “letters sits” rompe la concordancia sin importar el orden de la oración.'
      },
      tip:'Que el verbo vaya antes del sujeto no cambia la regla: concuerda con lo que viene después, no con la frase decorativa del inicio.'
    },
    {
      id:'XC-07', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Título restrictivo: sin comas cuando identifica a la obra',
      passage:"Many scholars regard the 1929 novel %BLANK% as the most incisive fictional treatment of racial passing in American literature, a judgment that has only strengthened since the book's rediscovery in the 1970s.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'Passing,', B:', Passing,', C:'Passing', D:'Passing—'},
      correct:'C',
      expCorrect:'“The 1929 novel” por sí solo no te dice CUÁL novela: el título “Passing” es información esencial (restrictiva) que identifica la obra, y los elementos esenciales NO llevan comas. Compara: “the 1929 novel Passing” (esencial, sin comas) vs. “Larsen’s second novel, Passing,” (obra ya identificada, con comas).',
      expWrong:{
        A:'La coma de cierre trata el título como prescindible, pero sin él no sabes de qué novela se habla; además interrumpe la estructura “regard X as Y”.',
        B:'Encerrar el título entre comas implica que podrías borrarlo sin perder información: aquí no puedes.',
        D:'El guion también marca información extra; el título es esencial y no admite delimitadores de ningún tipo.'
      },
      tip:'Prueba de la tachadura: si al borrar el título la oración pierde la identidad de la obra, el título es esencial → cero comas.'
    },
    {
      id:'XC-08', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Aposición no restrictiva: título de obra ya identificada',
      passage:"Toni Morrison's final %BLANK% returns to the fierce, compressed style of her earliest fiction, distilling a lifetime of themes into fewer than two hundred pages.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'novel God Help the Child', B:'novel, God Help the Child', C:'novel God Help the Child,', D:'novel, God Help the Child,'},
      correct:'D',
      expCorrect:'“Toni Morrison’s final novel” ya identifica la obra por completo (solo puede haber UNA novela final), así que el título es una aposición no esencial y va encerrada entre DOS comas: “Toni Morrison’s final novel, God Help the Child, returns…”. Si borras el título, la oración sigue funcionando igual.',
      expWrong:{
        A:'Sin comas tratas el título como esencial, pero “final novel” ya es único; el patrón sin comas es para casos como “the 1929 novel Passing”.',
        B:'Abre el inciso pero nunca lo cierra: el título queda pegado al verbo (“Child returns”).',
        C:'Cierra un inciso que nunca abrió; la coma huérfana además separa al sujeto de su verbo.'
      },
      tip:'¿El sustantivo ya identifica la obra por sí solo (final, first, only, posesivo + único)? → título entre dos comas. ¿No la identifica? → sin comas.'
    },
    {
      id:'XC-09', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Puntuación de citas: título restrictivo + participio no esencial',
      passage:"The %BLANK% published just eight months earlier, was quietly retracted after three independent laboratories failed to replicate its key measurement.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'study, “Room-Temperature Superconductivity in Hydrides,”', B:'study “Room-Temperature Superconductivity in Hydrides,”', C:'study “Room-Temperature Superconductivity in Hydrides”', D:'study, “Room-Temperature Superconductivity in Hydrides”'},
      correct:'B',
      expCorrect:'Dos reglas a la vez. (1) El título identifica CUÁL estudio → es esencial → NO lleva coma antes: “The study “Room-Temperature…””. (2) “published just eight months earlier” sí es un inciso no esencial: su coma de cierre ya está en el texto (antes de “was”) y la de apertura va justo después del título. Resultado: sin coma antes del título, con coma después.',
      expWrong:{
        A:'La coma antes del título lo vuelve no esencial, pero “The study” solo no identifica nada: el título es indispensable.',
        C:'Sin la coma después del título, el inciso “published… earlier,” cierra con coma pero nunca abre → par desbalanceado.',
        D:'Invierte todo: pone la coma donde no va (antes del título esencial) y omite la que sí hace falta (para abrir “published…”).'
      },
      tip:'Divide el problema: primero decide si el título es esencial (¿“the study” solo basta?), luego verifica que el inciso participial tenga sus DOS comas.'
    },
    {
      id:'XC-10', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Modificador colgante con antecedente posesivo',
      passage:"Hoping to preserve her grandmother's handwritten recipes before the ink faded further, %BLANK% and stored the images in three separate digital archives.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'Amara photographed each page of the fragile notebook', B:'the fragile notebook was photographed page by page by Amara', C:"the fragile notebook's pages were photographed by Amara", D:'photographs were taken of each page of the fragile notebook'},
      correct:'A',
      expCorrect:'¿Quién esperaba preservar las recetas (“Hoping to preserve…”)? Una persona: Amara. El sujeto que sigue al modificador inicial debe ser quien realiza esa acción, así que “Amara photographed…” es lo único correcto. Verifícalo con el final: solo Amara puede “stored the images”; un cuaderno no guarda archivos digitales.',
      expWrong:{
        B:'“The fragile notebook was photographed” dice que el CUADERNO esperaba preservar las recetas: modificador colgante. Y ojo: mencionar a Amara al final no lo rescata.',
        C:'Mismo problema con “the notebook’s pages”: las páginas no esperan nada, y la segunda parte (“and stored the images”) se queda sin sujeto lógico.',
        D:'“Photographs were taken” deja el modificador colgando (las fotos no esperaban preservar nada) y nadie realiza “stored”.'
      },
      tip:'Modificador inicial + coma → pregúntate “¿quién hace esto?” y exige que ESA persona sea la primera palabra después de la coma.'
    },
    {
      id:'XC-11', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Comparación lógica: “than that of” vs. “than those of”',
      passage:"At more than three meters from tip to tip, the wingspan of the wandering albatross is greater %BLANK% enabling the bird to glide for hours without a single flap.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'than any other seabird,', B:'than those of any other seabird,', C:"than any other seabird's wingspans,", D:'than that of any other seabird,'},
      correct:'D',
      expCorrect:'Se comparan ENVERGADURAS, no aves. “The wingspan” es singular, así que el sustituto también debe serlo: “that of any other seabird” = “the wingspan of any other seabird”. Comparación paralela y en singular: envergadura contra envergadura.',
      expWrong:{
        A:'Compara una envergadura con un AVE completa: comparación ilógica (manzanas contra pájaros, literalmente).',
        B:'“Those” es plural, pero “any other seabird” es singular y tiene UNA sola envergadura; el plural rompe el paralelismo con “the wingspan”.',
        C:'“Any other seabird’s wingspans” le atribuye varias envergaduras a una sola ave; cada ave tiene una.'
      },
      tip:'En comparaciones, iguala categoría Y número: singular “that of”, plural “those of”. Si la izquierda dice “the wingspan”, la derecha necesita otro “wingspan”.'
    },
    {
      id:'XC-12', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Posesivo plural dentro de un inciso',
      passage:"The observatory's archive—a collection that includes several nineteenth-century %BLANK% earliest glass photographic plates—was fully digitized last year after decades of neglect.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:"astronomer's", B:'astronomers', C:"astronomers'", D:"astronomers's"},
      correct:'C',
      expCorrect:'“Several” obliga al plural: varios astrónomos. Y las placas les PERTENECEN, así que necesitas posesivo. Plural terminado en -s → apóstrofo después de la s: “several… astronomers’ earliest glass photographic plates”. Que el blank esté dentro de un inciso con guiones no cambia la regla; no dejes que la puntuación de afuera te distraiga.',
      expWrong:{
        A:'“Astronomer’s” es posesivo SINGULAR, pero “several” exige plural.',
        B:'“Astronomers” es plural sin posesivo: “astronomers earliest plates” deja dos sustantivos chocando sin relación de pertenencia.',
        D:'“Astronomers’s” no existe: los plurales regulares en -s forman el posesivo solo con el apóstrofo final.'
      },
      tip:'Dos preguntas rápidas: ¿cuántos? (several → plural) y ¿poseen algo? (sí → apóstrofo). Plural en -s + posesión = s’.'
    }
  ]
});
