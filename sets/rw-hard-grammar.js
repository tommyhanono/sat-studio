/* SAT Studio question set — Reading & Writing: Punctuation, Agreement & Coordination — Hard (HVG-01 a HVG-12) */
window.SAT_SETS.push({
  id: 'rw-hard-grammar',
  title: 'Punctuation, Agreement & Coordination — Hard',
  section: 'rw',
  level: 'Difícil',
  description: 'Hard Standard English Conventions: tricky punctuation, subject–verb agreement, and coordination/sentence boundaries.',
  minutes: 15,
  questions: [
    {
      id:'HVG-01', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Puntuación',
      passage:"After weeks of debate, the archaeologists finally agreed on what the fragile burial chamber most urgently %BLANK% a stable temperature, constant humidity, and protection from vibration.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'needed:', B:'needed,', C:'needed', D:'needed;'},
      correct:'A',
      expCorrect:'Antes del blank hay una oración completa (“the archaeologists finally agreed on what the fragile burial chamber most urgently needed”) y lo que sigue es la lista que detalla ese “what”. Introducir una lista tras una oración completa es justo el trabajo del colon.',
      expWrong:{
        B:'La coma sola no puede introducir una lista después de una oración completa.',
        C:'Sin puntuación, la oración choca con la lista y se fusiona (run-on); además “needed” ya tiene su objeto en “what”.',
        D:'El punto y coma exige una oración independiente después, y una lista no lo es.'
      },
      tip:'Colon = solo después de una oración COMPLETA. Tápalo: lo de antes debe poder terminar en punto.'
    },
    {
      id:'HVG-02', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Puntuación',
      passage:"The 1815 eruption of Mount %BLANK% the most powerful volcanic event in recorded history—released so much ash that the following year had almost no summer across the Northern Hemisphere.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'Tambora,', B:'Tambora—', C:'Tambora', D:'Tambora:'},
      correct:'B',
      expCorrect:'El inciso no esencial “the most powerful volcanic event in recorded history” se CIERRA con una raya antes de “released”, así que debe ABRIRSE con otra raya: “Mount Tambora—…history—released…”. La puntuación de un inciso tiene que coincidir a ambos lados.',
      expWrong:{
        A:'Mezcla coma de apertura con raya de cierre; los signos de un inciso deben ser gemelos.',
        C:'Sin nada que abra el inciso, la raya de cierre queda huérfana y desbalanceada.',
        D:'El colon no abre un inciso y partiría el sujeto “The 1815 eruption of Mount Tambora” de su verbo “released”.'
      },
      tip:'Raya “huérfana” cerrando el inciso antes del blank → casi siempre la respuesta es la raya que la empareja.'
    },
    {
      id:'HVG-03', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Puntuación',
      passage:"For months the comet had been predicted to blaze brightly across the winter %BLANK% it fizzled into a faint smudge barely visible through binoculars.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'sky,', B:'sky', C:'sky;', D:'sky:'},
      correct:'C',
      expCorrect:'Hay dos oraciones completas: “…the comet had been predicted to blaze brightly across the winter sky” e “it fizzled into a faint smudge…”. Para unir dos oraciones independientes sin conjunción, el punto y coma es lo correcto.',
      expWrong:{
        A:'Una coma sola entre dos oraciones completas es un comma splice.',
        B:'Sin puntuación, las dos oraciones se fusionan (run-on).',
        D:'El colon une dos independientes solo cuando la segunda EXPLICA o amplía la primera; aquí la segunda CONTRASTA (se predijo brillante, pero se apagó), así que el colon no encaja.'
      },
      tip:'Prueba del punto: si a ambos lados del blank quedan oraciones completas y la 2ª no aclara a la 1ª, el ";" es tu opción.'
    },
    {
      id:'HVG-04', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Puntuación',
      passage:"The long-standing suspicion that the ancient trade routes described in the manuscript had never actually %BLANK% has been steadily undermined by recent archaeological finds.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'existed,', B:'existed;', C:'existed:', D:'existed'},
      correct:'D',
      expCorrect:'El sujeto completo es “The long-standing suspicion that… had never actually existed” y su verbo es “has been undermined”. La cláusula “that…” es esencial (define cuál suspicion), así que no lleva comas, y nunca se separa un sujeto de su verbo con coma, punto y coma o colon.',
      expWrong:{
        A:'Una coma entre el sujeto (por largo que sea) y su verbo “has been” es incorrecta.',
        B:'El punto y coma pide oraciones independientes a ambos lados; “has been undermined…” no lo es.',
        C:'El colon partiría el sujeto de su verbo.'
      },
      tip:'Los sujetos largos “piden” pausa al leer, pero gramática ≠ respiración. Halla sujeto + verbo y NO los separes.'
    },
    {
      id:'HVG-05', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Puntuación',
      passage:"The %BLANK% first isolated from a common soil mold in the 1940s, revolutionized the treatment of bacterial infections within a single generation.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'antibiotic,', B:'antibiotic', C:'antibiotic;', D:'antibiotic:'},
      correct:'A',
      expCorrect:'“first isolated from a common soil mold in the 1940s” es un inciso no esencial que describe “The antibiotic”. Debe ir entre DOS comas; como ya hay coma de cierre antes de “revolutionized”, falta la de apertura.',
      expWrong:{
        B:'Sin la coma de apertura, el inciso cierra pero no abre → queda desbalanceado.',
        C:'El punto y coma no abre un inciso y separaría el sujeto (“The antibiotic”) de su verbo (“revolutionized”).',
        D:'El colon no abre un inciso y también partiría el sujeto de su verbo.'
      },
      tip:'Apertura y cierre GEMELOS: coma–coma. Si ves una coma “huérfana” cerrando el inciso, la respuesta suele ser la coma que lo abre.'
    },
    {
      id:'HVG-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"The committee that oversees the museum’s rare-manuscript collection %BLANK% every acquisition proposal in a single closed-door session each month.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'review', B:'reviews', C:'have reviewed', D:'are reviewing'},
      correct:'B',
      expCorrect:'El sujeto es “The committee”, un sustantivo colectivo tratado aquí como una sola unidad que actúa en conjunto. Un sujeto singular pide un verbo singular: “reviews”. La cláusula “that oversees… collection” solo describe al sujeto y no cambia su número.',
      expWrong:{
        A:'“review” es plural; concuerda con “collection” o “proposals”, no con el sujeto singular “The committee”.',
        C:'“have reviewed” es plural; el singular “committee” pide “has reviewed”.',
        D:'“are reviewing” es plural; el sujeto singular “committee” pide un verbo singular.'
      },
      tip:'Un colectivo que actúa como una sola unidad (“The committee”) es singular. Ignora la cláusula “that…”: el verbo concuerda con “committee”.'
    },
    {
      id:'HVG-07', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"A series of unexpected setbacks—a flooded basement, a broken furnace, and a leaking roof—%BLANK% the renovation nearly four months behind schedule.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'has put', B:'have put', C:'put', D:'are putting'},
      correct:'A',
      expCorrect:'El sujeto real es “A series” (singular). La lista entre rayas (“a flooded basement, a broken furnace, and a leaking roof”) solo detalla los setbacks y no cambia el número del sujeto. Un sujeto singular pide un verbo singular: “has put”.',
      expWrong:{
        B:'“have put” es plural; concuerda con “setbacks”, pero el verdadero sujeto es el singular “A series”.',
        C:'“put” aquí es plural; el sujeto singular “A series” pide la forma singular “has put”.',
        D:'“are putting” es plural; el sujeto singular “A series” pide un verbo singular.'
      },
      tip:'“A series of…”, “a set of…” y “a pair of…” son singulares. Tapa la frase intervenida y concuerda con “A series”.'
    },
    {
      id:'HVG-08', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"Among the artifacts recovered from the sunken merchant ship %BLANK% a gold astrolabe whose delicate engravings have puzzled historians for decades.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'are', B:'were', C:'is', D:'have been'},
      correct:'C',
      expCorrect:'La oración está invertida: el sujeto viene DESPUÉS del verbo. El sujeto es “a gold astrolabe” (singular), no “the artifacts”, así que el verbo es singular y en presente: “is”.',
      expWrong:{
        A:'“are” es plural; concuerda con “artifacts”, pero el sujeto real es el singular “a gold astrolabe”.',
        B:'“were” es plural y pasado; el sujeto es singular y el resto del texto está en presente (“have puzzled… for decades”).',
        D:'“have been” es plural; el sujeto singular “a gold astrolabe” pide “has been”.'
      },
      tip:'Cuando la oración empieza con lugar (“Among the artifacts…”), busca el sujeto DESPUÉS del verbo. Aquí es “a gold astrolabe” (singular).'
    },
    {
      id:'HVG-09', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"Neither the towering ceiling murals nor the elaborate marble fountain %BLANK% able to draw visitors’ eyes away from the cathedral’s soaring stained-glass windows.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'were', B:'have been', C:'are', D:'was'},
      correct:'D',
      expCorrect:'Con “neither… nor…”, el verbo concuerda con el sujeto MÁS CERCANO. El más cercano es “the elaborate marble fountain” (singular), así que el verbo va en singular: “was”.',
      expWrong:{
        A:'“were” es plural; concordaría con “murals”, pero la regla manda concordar con el sujeto más cercano, que es singular.',
        B:'“have been” es plural; el sujeto más cercano “fountain” es singular.',
        C:'“are” es plural y presente; el más cercano es singular y el texto está en pasado.'
      },
      tip:'En “neither X nor Y”, mira SOLO la Y (lo más cercano al verbo). Si Y es singular, el verbo es singular.'
    },
    {
      id:'HVG-10', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Coordination',
      passage:"The startup’s first prototype barely worked in the %BLANK% within eighteen months its refined design was outperforming products from companies ten times its size.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'lab,', B:'lab;', C:'lab, and,', D:'lab and'},
      correct:'B',
      expCorrect:'Son dos oraciones completas (“The startup’s first prototype barely worked in the lab” e “within eighteen months its refined design was outperforming…”). Sin conjunción entre ellas, el punto y coma es lo que las une correctamente.',
      expWrong:{
        A:'Una coma sola entre dos oraciones completas es un comma splice.',
        C:'La coma después de “and” separa la conjunción de su cláusula; además sobra puntuación.',
        D:'Dos oraciones completas unidas por “and” exigen una coma ANTES de la conjunción; “lab and” la omite (run-on).'
      },
      tip:'¿Dos oraciones completas sin conjunción? Punto y coma. Si metes “and”, va con coma ANTES, nunca después.'
    },
    {
      id:'HVG-11', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Coordination',
      passage:"Sea otters must eat close to a quarter of their body weight every %BLANK% they lack the thick layer of blubber that keeps other marine mammals warm in frigid water.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'day', B:'day; and', C:'day, for', D:'day for'},
      correct:'C',
      expCorrect:'Son dos oraciones completas y la segunda da la razón de la primera. El coordinante “for” (que significa “porque”) une dos independientes con coma ANTES: “…every day, for they lack…”.',
      expWrong:{
        A:'Sin puntuación ni conjunción, las dos oraciones se fusionan (run-on).',
        B:'El punto y coma ya une dos independientes; agregarle “and” es redundante (“; and” sobra).',
        D:'“for” aquí une dos oraciones completas, así que necesita una coma antes; “day for” sin coma es un run-on.'
      },
      tip:'El FANBOYS “for” = “porque”. Une dos oraciones completas con coma ANTES: “…, for …”.'
    },
    {
      id:'HVG-12', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Coordination',
      passage:"Volunteers had planted more than a thousand saplings along the eroded %BLANK% but a single scorching summer killed nearly half of them before their roots could take hold.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'riverbank but', B:'riverbank; but,', C:'riverbank, but,', D:'riverbank, but'},
      correct:'D',
      expCorrect:'Son dos oraciones completas unidas por el FANBOYS “but”. La regla pide una coma ANTES de la conjunción y nada después: “…riverbank, but a single scorching summer…”.',
      expWrong:{
        A:'Falta la coma antes de “but”; unir dos oraciones completas sin ella es incorrecto.',
        B:'El punto y coma reemplaza a la conjunción; usarlo junto a “but” es redundante, y la coma tras “but” sobra.',
        C:'La coma después de “but” separa la conjunción de su cláusula; la coma va ANTES, no después.'
      },
      tip:'Regla FANBOYS: dos oraciones completas + and/but/or… → coma justo ANTES de la conjunción y nada después.'
    }
  ]
});
