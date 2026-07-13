/* SAT Studio question set — Reading & Writing: Extreme Transitions & Synthesis (XT-01 a XT-12) */
window.SAT_SETS.push({
  id: 'rw-x-rhetoric',
  title: 'Extreme — Transitions & Synthesis',
  section: 'rw',
  level: 'Extreme',
  description: 'Hard-Module-2 level: adjacent-category transitions, concession pivots, and dual-constraint synthesis goals.',
  minutes: 16,
  questions: [
    /* ===== TRANSITIONS — adjacent-category traps ===== */
    {
      id:'XT-01', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions',
      passage:"The clinic's redesign was organized around a single priority: cutting the time patients spend waiting. %BLANK% it set the concrete target of moving every arrival from the front desk into an exam room within ten minutes.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Specifically,', B:'For example,', C:'Consequently,', D:'Similarly,'},
      correct:'A',
      expCorrect:'La 2ª oración no agrega un caso nuevo: reformula esa MISMA prioridad (recortar la espera) de manera más precisa y estrecha, poniéndole una cifra exacta (diez minutos). Eso es “Specifically” (dicho con más precisión).',
      expWrong:{
        B:'“For example” anunciaría UN caso entre varios que ilustra la idea, pero aquí no hay ejemplos: la 2ª oración es la misma meta expresada con más detalle, no una instancia.',
        C:'“Consequently” marca causa→efecto, y la meta de diez minutos no es una CONSECUENCIA de tener una prioridad: es esa prioridad definida con más exactitud.',
        D:'“Similarly” compara dos cosas parecidas, pero aquí solo hay una idea que se precisa, no dos elementos comparados.'
      },
      tip:'Cuando la 2ª oración dice lo mismo que la 1ª pero con más precisión (“es decir, en concreto…”), usa “Specifically”, no “For example”. El ejemplo aporta un caso; la precisión reescribe la misma idea.'
    },
    {
      id:'XT-02', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions',
      passage:"The bridge's steel cables expand and contract sharply as the temperature swings between the cold of night and the heat of afternoon. %BLANK% the engineers anchored them to joints that can slide a few centimeters instead of to rigid, fixed mounts.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In addition,', B:'Therefore,', C:'For instance,', D:'However,'},
      correct:'B',
      expCorrect:'El movimiento del acero (causa) es lo que OBLIGA a usar juntas deslizantes (respuesta de los ingenieros). La 2ª oración es la consecuencia de la 1ª, así que “Therefore” (por eso) es lo correcto.',
      expWrong:{
        A:'“In addition” suma un dato del mismo tipo, pero la decisión de las juntas no es “un dato más”: es lo que provoca el problema de la 1ª oración.',
        C:'“For instance” introduce un ejemplo de algo dicho antes, y las juntas no son un ejemplo de la dilatación del acero, sino la respuesta a ella.',
        D:'“However” marca contraste, pero las dos ideas no chocan: la 2ª resuelve lo que plantea la 1ª.'
      },
      tip:'Ojo con el falso gemelo “In addition”: ambas van hacia adelante, pero solo “Therefore” funciona cuando la 2ª oración es lo que la 1ª CAUSA. Pregúntate: ¿es un dato más o es la consecuencia?'
    },
    {
      id:'XT-03', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions',
      passage:"The volunteer crew had only three days and a single truck to haul away the storm debris scattered across the entire park. %BLANK% they managed to clear every last trail before the weekend festival opened.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Furthermore,', B:'Instead,', C:'Nevertheless,', D:'As a result,'},
      correct:'C',
      expCorrect:'La 1ª oración es un obstáculo real (poco tiempo, un solo camión); la 2ª dice que aun así lo lograron. Ese “a pesar del obstáculo, igual sucedió” es exactamente “Nevertheless”.',
      expWrong:{
        A:'“Furthermore” suma una idea en la misma dirección, pero aquí la 2ª oración se opone a lo que el obstáculo hacía esperar (que NO terminaran).',
        B:'“Instead” sustituye un plan A rechazado por un plan B, pero no hay un plan que se descarte y se reemplace: hay una dificultad y un éxito logrado pese a ella.',
        D:'“As a result” marca consecuencia, pero terminar a tiempo no es el EFECTO de tener poco tiempo y un solo camión; ocurre en contra de esa limitación.'
      },
      tip:'“Nevertheless” vs “Instead”: usa “Nevertheless” cuando el resultado se da PESE a un obstáculo; usa “Instead” solo cuando algo reemplaza a otra cosa que se descartó.'
    },
    /* ===== CONCESSION-THEN-RETURN pivots ===== */
    {
      id:'XT-04', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions',
      passage:"Coral reefs generally thrive only in warm, shallow water bathed in bright sunlight. A few hardy species, it is true, build colonies in cold, pitch-dark water thousands of feet below the surface. %BLANK% the overwhelming majority of the world's reefs remain confined to the sunlit shallows their biology evolved for.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In fact,', B:'Likewise,', C:'Furthermore,', D:'Still,'},
      correct:'D',
      expCorrect:'La 2ª oración es un contraejemplo (unas pocas especies en aguas frías y oscuras). La 3ª deja atrás esa excepción y RETOMA la afirmación original (casi todos los arrecifes viven en aguas someras y con sol). Ese regreso al reclamo inicial pese a la excepción es “Still” (aun así).',
      expWrong:{
        A:'“In fact” intensificaría el contraejemplo (las especies de aguas profundas), pero la 3ª oración no refuerza esa excepción: vuelve a la regla general.',
        B:'“Likewise” marcaría que la 3ª oración es semejante a la 2ª (más casos de arrecifes en la oscuridad), y en realidad dice lo contrario.',
        C:'“Furthermore” sumaría otro dato en la línea del contraejemplo, pero la 3ª oración no extiende la excepción: la contrarresta.'
      },
      tip:'En cadenas “regla → pero un caso raro → ___ la regla sigue mandando”, el hueco RETOMA la afirmación inicial: usa “Still”, “Even so” o “Nonetheless”, no transiciones que sumen al contraejemplo.'
    },
    {
      id:'XT-05', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions',
      passage:"Most of the composer's symphonies were greeted warmly at their premieres. One early work, admittedly, was booed so fiercely that the orchestra could barely play it to the end. %BLANK% audiences of his era generally embraced his music the moment they first heard it.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Even so,', B:'Indeed,', C:'What is more,', D:'Likewise,'},
      correct:'A',
      expCorrect:'La 2ª oración concede un fracaso (una obra abucheada). La 3ª deja de lado esa excepción y regresa a la idea inicial: el público en general aceptaba su música enseguida. Volver al reclamo original pese a la concesión es “Even so”.',
      expWrong:{
        B:'“Indeed” confirmaría y reforzaría lo dicho justo antes (el abucheo), pero la 3ª oración no refuerza el fracaso: vuelve a la aceptación general.',
        C:'“What is more” añade otro punto en la misma línea del contraejemplo, y aquí se hace lo opuesto: se retoma la regla favorable.',
        D:'“Likewise” marcaría semejanza con la obra abucheada, cuando la 3ª oración describe la situación contraria.'
      },
      tip:'“Even so” es la señal de que, tras admitir un caso en contra, vuelves a defender la afirmación original. Los distractores aquí empujan a seguir hablando del contraejemplo.'
    },
    {
      id:'XT-06', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions',
      passage:"The park's main trail is usually an easy walk suitable for young children. After a heavy rain, granted, one low stretch turns into ankle-deep mud that can stop a stroller cold. %BLANK% for most of the year families push strollers along its packed-gravel surface without any trouble at all.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In fact,', B:'Nonetheless,', C:'Similarly,', D:'Consequently,'},
      correct:'B',
      expCorrect:'La 2ª oración admite una excepción (el barro tras la lluvia). La 3ª supera esa objeción y RETOMA la afirmación inicial: casi todo el año el sendero es fácil para carriolas. Ese regreso pese a la concesión es “Nonetheless”.',
      expWrong:{
        A:'“In fact” intensificaría el problema del barro, pero la 3ª oración no agrava la excepción: vuelve a lo fácil que es el sendero.',
        C:'“Similarly” marcaría semejanza con el tramo embarrado, y la 3ª oración describe lo contrario (superficie firme, sin problemas).',
        D:'“Consequently” haría del sendero fácil una consecuencia del barro, lo cual no tiene sentido: son ideas opuestas, no causa y efecto.'
      },
      tip:'Detecta el patrón “normalmente sí → una vez no → ___ normalmente sí”. El hueco vuelve al inicio: “Nonetheless”. Descarta lo que continúe describiendo la excepción.'
    },
    /* ===== SYNTHESIS — dual-constraint goals ===== */
    {
      id:'XT-07', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>Letterpress printing presses inked, raised metal type directly onto the paper.</li><li>It leaves a slight indentation you can feel on the page.</li><li>Offset printing transfers ink from a plate to a rubber roller and then to the paper.</li><li>Offset leaves a completely flat, smooth image.</li><li>Offset can print thousands of pages per hour; letterpress is far slower.</li></ul>The student wants to emphasize a difference between the two methods while introducing letterpress printing to an audience unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'Letterpress printing presses inked, raised metal type directly onto the paper.',
        B:'Letterpress leaves a tactile indentation on the page, while offset leaves a perfectly flat image.',
        C:'Letterpress printing, which presses raised metal type directly onto paper, leaves an indentation you can feel—unlike offset printing, whose image is perfectly flat.',
        D:'Offset printing can produce thousands of pages an hour, far more than letterpress can.'
      },
      correct:'C',
      expCorrect:'Cumple LAS DOS metas. Presenta qué es el letterpress para quien no lo conoce (“prensa tipos metálicos en relieve sobre el papel”) Y marca la diferencia con el offset (deja marca vs. imagen totalmente plana).',
      expWrong:{
        A:'Falla la meta de DIFERENCIA: define bien el letterpress para un público nuevo, pero nunca lo contrasta con el offset.',
        B:'Falla la meta de PRESENTAR: sí contrasta letterpress y offset, pero da por sabido qué es el letterpress; nunca lo explica a quien no lo conoce.',
        D:'Falla la meta de PRESENTAR el letterpress: la oración habla del offset y su velocidad, sin decir qué es el letterpress ni definirlo.'
      },
      tip:'Con metas dobles, marca mentalmente las dos casillas: (1) ¿presenta qué es el término a quien no lo conoce? (2) ¿contrasta con lo otro? Solo la opción que marca AMBAS sirve.'
    },
    {
      id:'XT-08', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>A regressive tax takes a larger share of income from people who earn less.</li><li>A progressive tax takes a larger share from people who earn more.</li><li>Sales taxes are usually regressive.</li><li>Income taxes in many countries are progressive.</li></ul>The student wants to emphasize a difference between the two kinds of tax while introducing the term \"regressive tax\" to an audience unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'A regressive tax takes a larger share of income from people who earn less.',
        B:'A regressive tax and a progressive tax pull in opposite directions.',
        C:'Income taxes in many countries are progressive, while sales taxes are usually regressive.',
        D:'A regressive tax, one that takes a bigger share of income from lower earners, works in the opposite direction from a progressive tax, which takes more from higher earners.'
      },
      correct:'D',
      expCorrect:'Cumple LAS DOS metas. Define el término “regressive tax” dentro de la misma oración (“toma una porción mayor del ingreso de quienes ganan menos”) Y lo contrasta con el progressive tax (dirección opuesta). Presenta y diferencia a la vez.',
      expWrong:{
        A:'Falla la meta de DIFERENCIA: define bien qué es un impuesto regresivo, pero no lo compara con el progresivo.',
        B:'Falla la meta de PRESENTAR: afirma que van en direcciones opuestas (diferencia), pero nunca explica qué significa “regressive tax” a quien no conoce el término.',
        C:'Falla la meta de PRESENTAR el término: da ejemplos (impuestos a las ventas vs. a la renta), pero no define qué quiere decir “regresivo” para un público nuevo.'
      },
      tip:'Cuando la meta pide “introducir el término X”, la opción correcta suele definirlo ahí mismo (“X, que es…”). Si solo lo nombra sin explicarlo, no presenta.'
    },
    {
      id:'XT-09', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>The maned wolf lives on the grasslands of central South America.</li><li>It has very long, thin legs and a reddish coat.</li><li>Despite its name, it is not a true wolf.</li><li>True wolves hunt in packs.</li><li>The maned wolf lives and hunts entirely alone.</li></ul>The student wants to introduce the maned wolf to an audience unfamiliar with the animal while emphasizing a difference between it and true wolves. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'The maned wolf, a long-legged, reddish animal of central South America’s grasslands, differs from true wolves in that it lives and hunts entirely alone rather than in a pack.',
        B:'The maned wolf is a long-legged, reddish animal native to the grasslands of central South America.',
        C:'Unlike true wolves, which hunt in packs, the maned wolf lives and hunts entirely alone.',
        D:'Despite its name, the maned wolf is not actually a true wolf.'
      },
      correct:'A',
      expCorrect:'Cumple LAS DOS metas. Presenta al animal para quien no lo conoce (patas largas, pelaje rojizo, pastizales de Sudamérica) Y marca la diferencia con los lobos verdaderos (caza solo, no en manada).',
      expWrong:{
        B:'Falla la meta de DIFERENCIA: describe bien al animal para un público nuevo, pero no lo compara con los lobos verdaderos.',
        C:'Falla la meta de PRESENTAR: sí contrasta (caza solo vs. en manada), pero no dice qué es ni cómo es el lobo de crin para quien no lo conoce.',
        D:'Falla ambas casi por completo: da un dato aislado (que no es un lobo real) sin presentar al animal ni marcar en qué se diferencia su forma de vivir o cazar.'
      },
      tip:'“Presentar a quien no conoce” pide el panorama (qué es, cómo es, de dónde). Súmale el contraste que pide la meta y verás que solo una opción trae las dos cosas.'
    },
    {
      id:'XT-10', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>The theremin is an electronic musical instrument.</li><li>A performer moves both hands near two metal antennas to control pitch and volume.</li><li>The player never actually touches the instrument.</li><li>Most instruments make sound only when a player presses, strikes, or blows into them.</li></ul>The student wants to introduce the theremin to an audience unfamiliar with it while emphasizing a difference between it and most instruments. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'The theremin is an electronic musical instrument that was first demonstrated in the early twentieth century.',
        B:'The theremin is an electronic instrument that, unlike ones a musician strikes or blows into, is played by moving the hands near two metal antennas without any physical contact.',
        C:'Unlike most instruments, the theremin makes its sound without ever being touched.',
        D:'A theremin player moves both hands near two metal antennas to control pitch and volume.'
      },
      correct:'B',
      expCorrect:'Cumple LAS DOS metas. Presenta qué es el theremin (instrumento electrónico que se toca acercando las manos a dos antenas) Y lo diferencia de la mayoría de instrumentos (que se golpean o soplan; este no se toca).',
      expWrong:{
        A:'Falla la meta de DIFERENCIA: presenta el theremin, pero solo aporta su fecha; no lo contrasta con cómo se tocan los demás instrumentos.',
        C:'Falla la meta de PRESENTAR: marca la diferencia (no se toca), pero no explica qué es el theremin ni cómo funciona para un público nuevo.',
        D:'Falla la meta de DIFERENCIA: describe cómo se toca (lo presenta), pero no lo compara con los demás instrumentos.'
      },
      tip:'Revisa que la opción cumpla las DOS casillas. Varias “casi” lo logran presentando o contrastando; solo una hace ambas en la misma oración.'
    },
    {
      id:'XT-11', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>Tidal power plants generate electricity from the ocean's daily rise and fall.</li><li>Their output can be predicted years in advance from tide tables.</li><li>Wind and solar plants depend on weather.</li><li>Weather cannot be forecast far in advance.</li></ul>The student wants to introduce tidal power to an audience unfamiliar with it while emphasizing a difference between it and wind and solar power. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'Tidal power plants generate electricity from the daily rise and fall of the ocean’s tides.',
        B:'Unlike wind and solar, tidal power can be predicted years in advance.',
        C:'Tidal power plants, which draw electricity from the ocean’s daily rise and fall, differ from wind and solar in that their output can be forecast years ahead.',
        D:'Wind and solar plants depend on weather that cannot be forecast far in advance.'
      },
      correct:'C',
      expCorrect:'Cumple LAS DOS metas. Presenta qué es la energía mareomotriz (saca electricidad de la subida y bajada diaria del mar) Y la diferencia de la eólica y la solar (su producción se puede predecir con años de anticipación).',
      expWrong:{
        A:'Falla la meta de DIFERENCIA: presenta bien qué es la energía mareomotriz, pero no la compara con la eólica ni la solar.',
        B:'Falla la meta de PRESENTAR: marca la diferencia (se puede predecir), pero no explica qué es la energía mareomotriz para quien no la conoce.',
        D:'Falla la meta de PRESENTAR la energía mareomotriz: la oración habla de la eólica y la solar, sin decir qué es la mareomotriz.'
      },
      tip:'Si la oración solo habla del OTRO lado de la comparación, no está presentando el tema pedido. La correcta define el tema y además lo contrasta.'
    },
    {
      id:'XT-12', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>Bamboo is a type of grass, not a tree.</li><li>Some species can grow nearly a meter in a single day.</li><li>Most trees add only a few centimeters of height per year.</li><li>Bamboo is found in many parts of the world.</li></ul>The student wants to introduce bamboo to an audience unfamiliar with it while emphasizing a difference between its growth and that of trees. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'Bamboo is a fast-growing plant found in many parts of the world.',
        B:'Bamboo can grow nearly a meter in a single day, while most trees add only a few centimeters a year.',
        C:'Bamboo is a type of grass rather than a tree.',
        D:'Bamboo, a giant grass rather than a tree, can shoot up nearly a meter in a single day—far faster than the few centimeters most trees add in a year.'
      },
      correct:'D',
      expCorrect:'Cumple LAS DOS metas. Presenta qué es el bambú (un pasto gigante, no un árbol) Y marca la diferencia de crecimiento (casi un metro al día frente a los pocos centímetros al año de los árboles).',
      expWrong:{
        A:'Falla la meta de DIFERENCIA: presenta el bambú de forma vaga, pero no lo compara con los árboles ni da las cifras de crecimiento.',
        B:'Falla la meta de PRESENTAR: da la diferencia de crecimiento con números, pero no dice qué es el bambú (que es un pasto, no un árbol) a quien no lo conoce.',
        C:'Falla la meta de DIFERENCIA de CRECIMIENTO: clasifica al bambú (pasto, no árbol), pero no menciona su rapidez frente a los árboles.'
      },
      tip:'Cuando la diferencia pedida es específica (aquí, el CRECIMIENTO), no basta cualquier contraste: la correcta presenta el tema y toca justo esa diferencia con los datos.'
    }
  ]
});
