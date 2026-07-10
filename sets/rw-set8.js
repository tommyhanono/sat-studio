/* SAT Studio question set — Reading & Writing: Gramática (Concordancia y Coordinación) Set 8 (GRM-01 a GRM-12) */
window.SAT_SETS.push({
  id: 'rw-set8',
  title: 'Grammar: Agreement & Coordination — Hard',
  section: 'rw',
  level: 'Difícil',
  description: 'Standard English Conventions (Form, Structure & Sense): subject-verb agreement, verb forms, clause coordination, pronouns, and possessives.',
  minutes: 15,
  questions: [
    {
      id:'GRM-01', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Concordancia sujeto-verbo',
      passage:"The collection of rare beetles that the museum acquired from a retired entomologist %BLANK% dozens of species never before recorded in the region.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'include', B:'includes', C:'have included', D:'were including'},
      correct:'B',
      expCorrect:'El sujeto es “The collection” (singular). La frase “of rare beetles that the museum acquired…” solo describe al sujeto y no lo cambia. Un sujeto singular pide un verbo singular: “includes”.',
      expWrong:{
        A:'“include” es plural; concuerda con “beetles”, no con el verdadero sujeto “The collection” (singular).',
        C:'“have included” es plural; el sujeto singular “collection” pide “has”, no “have”.',
        D:'“were including” es plural y pasado; el sujeto singular “collection” pide un verbo singular en presente.'
      },
      tip:'Tapa la frase entre el sujeto y el verbo (“of… entomologist”). Lo que queda es “The collection ___”: singular pide verbo singular.'
    },
    {
      id:'GRM-02', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Concordancia sujeto-verbo',
      passage:"Neither the lead architect nor her three assistants %BLANK% able to explain why the building’s east wing had settled several centimeters in its first year.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'was', B:'has been', C:'is', D:'were'},
      correct:'D',
      expCorrect:'Con “neither… nor…”, el verbo concuerda con el sujeto MÁS CERCANO. El más cercano es “her three assistants” (plural), así que el verbo va en plural: “were”.',
      expWrong:{
        A:'“was” es singular; concordaría con “architect”, pero la regla “neither/nor” manda concordar con el sujeto más cercano, que es plural.',
        B:'“has been” es singular; el sujeto más cercano “assistants” es plural.',
        C:'“is” es singular y presente; el sujeto más cercano es plural y el resto del texto está en pasado.'
      },
      tip:'En “neither X nor Y”, mira SOLO la Y (lo más cercano al verbo). Si Y es plural, el verbo es plural.'
    },
    {
      id:'GRM-03', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Concordancia sujeto-verbo',
      passage:"Hidden beneath the layers of dried paint on the old canvas %BLANK% a faint pencil sketch that the artist had drawn years before beginning the final portrait.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'were', B:'are', C:'was', D:'have been'},
      correct:'C',
      expCorrect:'La oración está invertida: el sujeto real viene después del verbo. El sujeto es “a faint pencil sketch” (singular), así que el verbo es singular y en pasado: “was”.',
      expWrong:{
        A:'“were” es plural; el sujeto “a faint pencil sketch” es singular.',
        B:'“are” es plural y presente; el sujeto es singular y el texto está en pasado.',
        D:'“have been” es plural; el sujeto singular “a sketch” pide un verbo singular.'
      },
      tip:'Cuando la oración empieza con lugar (“Beneath…”), busca el sujeto DESPUÉS del verbo. Aquí es “a sketch” (singular).'
    },
    {
      id:'GRM-04', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Formas y tiempos verbales',
      passage:"By the time the volunteers arrived at the coast to help with the cleanup, the storm %BLANK% most of the fragile nesting sites along the shoreline.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'has already destroyed', B:'already destroys', C:'is already destroying', D:'had already destroyed'},
      correct:'D',
      expCorrect:'“By the time the volunteers arrived” marca un momento pasado; la destrucción ocurrió ANTES de esa llegada. Para una acción anterior a otra acción pasada se usa el pasado perfecto: “had already destroyed”.',
      expWrong:{
        A:'“has destroyed” es presente perfecto; no encaja con el marco claramente pasado “arrived”.',
        B:'“destroys” es presente simple; el hecho ocurrió en el pasado.',
        C:'“is destroying” es presente continuo; choca con el pasado “arrived”.'
      },
      tip:'¿Dos cosas en el pasado y una pasó ANTES que la otra? La más antigua va en pasado perfecto (had + participio).'
    },
    {
      id:'GRM-05', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Formas y tiempos verbales',
      passage:"The committee reviewed the proposal for weeks and, after countless revisions, finally %BLANK% it to the board with a unanimous recommendation.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'submits', B:'has submitted', C:'submitted', D:'submitting'},
      correct:'C',
      expCorrect:'La oración ya está en pasado (“reviewed”). El verbo unido por “and” debe mantener el mismo tiempo: pasado simple “submitted”.',
      expWrong:{
        A:'“submits” es presente; rompe con el pasado “reviewed”.',
        B:'“has submitted” es presente perfecto; no combina con la secuencia en pasado simple.',
        D:'“submitting” no es un verbo conjugado; sin verbo principal la oración queda incompleta.'
      },
      tip:'Si la oración ya arrancó en pasado (“reviewed”), el verbo unido por “and” también va en pasado.'
    },
    {
      id:'GRM-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Coordinación de cláusulas',
      passage:"The river had looked calm from the bridge that %BLANK% the kayakers soon discovered that a strong current ran just beneath its glassy surface.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'morning,', B:'morning, but', C:'morning but', D:'morning;,'},
      correct:'B',
      expCorrect:'Hay dos oraciones completas que CONTRASTAN: “The river had looked calm… that morning” y “the kayakers soon discovered…”. Para unirlas con contraste se usa coma + FANBOYS: “, but”.',
      expWrong:{
        A:'Una coma sola entre dos oraciones completas es un comma splice.',
        C:'“but” sin coma antes une mal dos oraciones completas; falta la coma delante de la conjunción.',
        D:'“;,” no es puntuación válida: no se combinan punto y coma con coma.'
      },
      tip:'Dos oraciones completas que se oponen → coma + but. Recuerda: la coma va ANTES del FANBOYS.'
    },
    {
      id:'GRM-07', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Coordinación de cláusulas',
      passage:"The mural took nearly three years to %BLANK% the artist worked on it only during the summer months, when the plaster was dry enough to hold the pigment.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'complete,', B:'complete', C:'complete;', D:'complete, however'},
      correct:'C',
      expCorrect:'Son dos oraciones independientes (“The mural took nearly three years to complete” y “the artist worked on it only during the summer months…”). El punto y coma une dos oraciones completas sin conjunción y es lo correcto.',
      expWrong:{
        A:'Una coma sola entre dos oraciones completas es un comma splice.',
        B:'Sin puntuación, las dos oraciones se fusionan (run-on).',
        D:'“however” es un adverbio conjuntivo, no una conjunción; con solo una coma antes sigue siendo comma splice (haría falta “; however,”).'
      },
      tip:'Dos oraciones completas sin conjunción → punto y coma. Prueba: ¿puedes poner punto en el blank? Si sí, el “;” sirve.'
    },
    {
      id:'GRM-08', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Coordinación de cláusulas',
      passage:"Early telescopes gathered too little light to reveal distant %BLANK% modern instruments collect photons for hours, uncovering galaxies far too faint for earlier astronomers to detect.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'galaxies,', B:'galaxies however', C:'galaxies, however', D:'galaxies; however,'},
      correct:'D',
      expCorrect:'Son dos oraciones completas en contraste, y la segunda arranca con el adverbio conjuntivo “however”. El patrón correcto es: oración 1 + punto y coma + however + coma + oración 2.',
      expWrong:{
        A:'Una coma sola entre dos oraciones completas es un comma splice.',
        B:'“however” sin puntuación no une oraciones; queda un run-on.',
        C:'“, however” con solo comas no puede unir dos oraciones completas: sigue siendo comma splice.'
      },
      tip:'however NO es conjunción. Entre dos oraciones completas usa el patrón “; however,”.'
    },
    {
      id:'GRM-09', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Concordancia de pronombres',
      passage:"Each of the researchers presenting at the conference was asked to bring a copy of %BLANK% latest findings so the panel could compare the data side by side.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'their', B:'his or her', C:'its', D:'our'},
      correct:'B',
      expCorrect:'El antecedente es “Each”, que es singular (fíjate en “was asked”). Un pronombre singular que se refiere a una persona indefinida es “his or her”.',
      expWrong:{
        A:'“their” es plural; no concuerda con el singular “Each” (que ya pide “was”).',
        C:'“its” es para cosas o animales, no para investigadores (personas).',
        D:'“our” es primera persona; el texto habla de los investigadores en tercera persona, no de nosotros.'
      },
      tip:'“Each” es SINGULAR (por eso “was”). Un pronombre singular para personas es “his or her”.'
    },
    {
      id:'GRM-10', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Concordancia de pronombres',
      passage:"The debate team celebrated after the regional finals, proud that %BLANK% months of preparation had finally paid off in a decisive victory over the defending champions.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'its', B:'their', C:'it’s', D:'they’re'},
      correct:'A',
      expCorrect:'“The debate team” es un sustantivo colectivo tratado como una sola unidad (celebró junta). El pronombre posesivo singular que le corresponde es “its”.',
      expWrong:{
        B:'“their” es plural; el texto trata al equipo como una unidad singular.',
        C:'“it’s” significa “it is”; aquí se necesita el posesivo “its”, sin apóstrofo.',
        D:'“they’re” significa “they are” (plural) y no es posesivo; no puede describir “months of preparation”.'
      },
      tip:'Posesivo de “it” = “its” (sin apóstrofo). “it’s” siempre significa “it is”.'
    },
    {
      id:'GRM-11', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Posesivos',
      passage:"After a long day guiding tourists through the canyon, the two %BLANK% boots were caked with the reddish dust that coated every trail in the park.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'guides’', B:'guide’s', C:'guides', D:'guides’s'},
      correct:'A',
      expCorrect:'Son “the two guides” (plural) y las botas les pertenecen. El posesivo de un plural que ya termina en -s se forma con apóstrofo DESPUÉS de la s: “the guides’ boots”.',
      expWrong:{
        B:'“guide’s” es posesivo SINGULAR (de un solo guía); el texto dice “the two”, o sea dos.',
        C:'“guides” es plural sin posesivo; no marca que las botas les pertenecen.',
        D:'“guides’s” no es correcto: un plural que ya termina en -s solo lleva apóstrofo al final, sin otra s.'
      },
      tip:'Plural terminado en -s + posesión → solo apóstrofo al final: guides’.'
    },
    {
      id:'GRM-12', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Posesivos',
      passage:"The novelist insisted that the success of her latest book belonged to her editors, whose careful attention to %BLANK% pacing had transformed a rough draft into a bestseller.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'its', B:'it’s', C:'their', D:'the storys'},
      correct:'A',
      expCorrect:'El “pacing” pertenece al libro, que es una sola cosa (singular). El posesivo singular para una cosa es “its”, sin apóstrofo.',
      expWrong:{
        B:'“it’s” significa “it is”; aquí se necesita el posesivo “its”.',
        C:'“their” es plural, pero el ritmo pertenece a un solo libro (singular).',
        D:'“storys” no es posesivo ni está bien escrito; el posesivo singular sería “story’s”.'
      },
      tip:'Posesivo de una cosa singular = “its” (sin apóstrofo). Nunca confundas “its” con “it’s” (= it is).'
    }
  ]
});
