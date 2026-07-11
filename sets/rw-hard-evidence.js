/* SAT Studio question set — Reading & Writing: Evidence, Quotation & Synthesis — Hard (HVE-01 a HVE-12) */
window.SAT_SETS.push({
  id: 'rw-hard-evidence',
  title: 'Evidence, Quotation & Synthesis — Hard',
  section: 'rw',
  level: 'Difícil',
  description: 'Hard Command of Evidence: which quotation or finding best supports a claim, plus tough Rhetorical Synthesis.',
  minutes: 16,
  questions: [
    {
      id:'HVE-01', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"An archaeologist studying an abandoned settlement argues that its residents left gradually, by choice, rather than fleeing a sudden disaster. She notes that many households carefully sealed their storage pits and removed their most valuable tools before departing, behaviors she reads as signs of an unhurried, planned departure.",
      stem:'Which finding, if true, would most directly support the archaeologist’s argument?',
      choices:{
        A:'A layer of ash covering part of the settlement suggests that at least one large fire once swept through it.',
        B:'The dwellings farthest from the settlement’s center were the first to be built, centuries before it was abandoned.',
        C:'Across the site, doorways were deliberately bricked shut from the outside and heavy grinding stones were carried off, tasks that would have taken days of work.',
        D:'Pottery styles found at the settlement match those of a distant region with which its residents are known to have traded.'
      },
      correct:'C',
      expCorrect:'Su argumento es que la gente se fue POCO A POCO y por decisión propia, no huyendo de un desastre. La C lo apoya directo: tapiaron puertas desde afuera y se llevaron piedras de moler pesadas, tareas de varios días. Ese trabajo lento y ordenado es justo la salida planeada que ella describe.',
      expWrong:{
        A:'Una capa de ceniza y un incendio apuntan a un DESASTRE súbito; eso va en contra de la salida tranquila y planeada, no la apoya.',
        B:'Qué casas se construyeron primero, siglos antes, habla del crecimiento del sitio, no de CÓMO ni por qué se fue la gente al final.',
        D:'Que la cerámica se parezca a la de otra región muestra que comerciaban, pero no dice nada sobre si la salida fue apurada o planeada.'
      },
      tip:'Vuelve al CLAIM exacto (salida lenta y por decisión, no huida). Busca la opción que ESCENIFICA una partida con tiempo y preparación (tapiar, cargar cosas pesadas), no la que sugiere un desastre repentino.'
    },
    {
      id:'HVE-02', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"A linguist proposes that two languages spoken on opposite sides of a mountain range descend from a single ancestor language, despite sounding quite different today. A rival scholar counters that the similarities the linguist points to are merely the result of the two peoples borrowing words from each other through centuries of trade.",
      stem:'Which finding, if true, would most directly support the linguist’s proposal over the rival’s explanation?',
      choices:{
        A:'The shared words between the two languages are concentrated among terms for trade goods and market activities.',
        B:'The two languages share not only vocabulary but also the same irregular patterns for forming plurals, patterns rarely passed between languages through trade.',
        C:'Merchants have crossed the mountain range to trade between the two regions for at least a thousand years.',
        D:'Speakers of each language today find the other language almost impossible to understand.'
      },
      correct:'B',
      expCorrect:'El lingüista dice que vienen de un MISMO ancestro; el rival dice que solo se prestaron palabras por el comercio. La B favorece al lingüista: comparten patrones irregulares de plural, algo que casi nunca se presta entre lenguas. Si comparten esa gramática profunda, apunta a un origen común, no a préstamos.',
      expWrong:{
        A:'Que las palabras compartidas sean justo de comercio APOYA al rival (préstamo por trato), no al lingüista.',
        C:'Que haya siglos de comercio refuerza la explicación RIVAL del préstamo; no distingue a favor del origen común.',
        D:'Que hoy no se entiendan entre sí es cierto en ambas hipótesis; no decide si el parecido viene de ancestro o de préstamo.'
      },
      tip:'Cuando dos explicaciones compiten, busca lo que solo UNA predice. Los préstamos pasan palabras (sobre todo de comercio); la gramática irregular compartida apunta a parentesco. Esa es la evidencia que separa las hipótesis.'
    },
    {
      id:'HVE-03', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"A marine biologist claims that a certain reef fish changes its vivid coloring not to attract mates, as was long assumed, but to signal aggression when defending its territory. She bases the claim on hours of underwater observation of the fish’s behavior.",
      stem:'Which finding, if true, would most strongly support the biologist’s claim?',
      choices:{
        A:'The fish displays its brightest colors most intensely when chasing rivals away from its patch of reef, and stays dull when courting.',
        B:'The fish’s colors appear brighter to human divers than to most other fish species on the reef.',
        C:'Both male and female fish of the species are capable of producing the vivid coloring.',
        D:'The fish tends to be more brightly colored during the warm season, when food on the reef is most plentiful.'
      },
      correct:'A',
      expCorrect:'Su afirmación es que el color señala AGRESIÓN al defender territorio, NO cortejo. La A lo prueba justo: el pez enciende su color más fuerte al ahuyentar rivales de su zona y se queda apagado al cortejar. Eso ata el color a la defensa territorial y descarta el cortejo, tal como ella dice.',
      expWrong:{
        B:'Cómo se ve el color para buzos vs. otros peces habla de percepción, no de si el color señala agresión o cortejo.',
        C:'Que ambos sexos puedan producir el color no dice PARA QUÉ lo usan; no distingue agresión de cortejo.',
        D:'Que el color suba en la temporada cálida con más comida sugiere otra causa (estación/dieta); no apoya que sea señal de agresión territorial.'
      },
      tip:'El claim es “por A, no por B” (agresión, no cortejo). La mejor evidencia liga el rasgo a A y lo APAGA en B: color fuerte al pelear, apagado al cortejar. Descarta lo que mide otra cosa o sugiere una causa distinta.'
    },
    {
      id:'HVE-04', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"An economic historian argues that a medieval town’s sudden prosperity in the 1300s came from a new water-powered mill that let it produce cloth far faster than its neighbors, not from the trade fair it hosted, which several rival towns also held. He contends the mill, unique to the town, best explains why it pulled ahead.",
      stem:'Which finding, if true, would most directly support the historian’s argument?',
      choices:{
        A:'The town’s trade fair attracted merchants from across the region throughout the 1300s.',
        B:'Records show the town’s cloth output and wealth surged only after the mill was built, while rival towns with fairs but no such mill saw no similar rise.',
        C:'The town’s population grew steadily over the two centuries before the mill was built.',
        D:'Several rival towns eventually built water-powered mills of their own in the following century.'
      },
      correct:'B',
      expCorrect:'Su tesis es que la prosperidad vino del MOLINO único, no de la feria (que otros también tenían). La B lo apoya directo: la riqueza subió solo DESPUÉS del molino, y los pueblos rivales con feria pero sin molino no crecieron igual. Eso aísla el molino como la causa que lo distingue.',
      expWrong:{
        A:'Que la feria atrajera mercaderes no separa las causas: como varios pueblos tenían feria, no explica por qué ESTE se adelantó.',
        C:'Que la población creciera ANTES del molino es contexto previo; no muestra que el molino causara el salto de prosperidad.',
        D:'Que los rivales construyeran molinos DESPUÉS ocurre más tarde; no explica el adelanto original de este pueblo.'
      },
      tip:'Cuando el claim dice “por A (único), no por B (compartido)”, busca la opción que empareja el salto CON A y muestra que sin A no pasó. El “solo después del molino, y los rivales sin molino no subieron” es lo que aísla la causa.'
    },
    {
      id:'HVE-05', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Quotation',
      passage:"In an essay on craft, a novelist argues that revision, not first inspiration, is where a book truly takes shape. A critic examining the novelist’s working papers wants to quote a line that captures this conviction.",
      stem:'Which quotation from the novelist’s papers would most effectively illustrate the claim?',
      choices:{
        A:'“No story is worth telling unless it moves the reader to feel something true.”',
        B:'“The finest sentences come to me all at once, whole and unbidden, when I least expect them.”',
        C:'“I write best in the early hours, before the noise of the household begins.”',
        D:'“A first draft is only wet clay; the book itself does not appear until I have reshaped it a hundred times.”'
      },
      correct:'D',
      expCorrect:'La afirmación es que el libro toma forma en la REVISIÓN, no en la inspiración inicial. La D la ilustra perfecto: el primer borrador es “barro húmedo” y el libro solo aparece tras rehacerlo “cien veces”. Pone la revisión por encima del primer impulso, justo como dice el crítico.',
      expWrong:{
        A:'Que una historia deba conmover es una idea sobre el propósito del arte; no toca el papel de la revisión.',
        B:'Que las mejores frases lleguen “de golpe” celebra la INSPIRACIÓN súbita, lo contrario de que el libro nazca en la revisión.',
        C:'A qué hora escribe mejor habla de su rutina, no de si la revisión es donde el libro toma forma.'
      },
      tip:'En cita, busca la que ESCENIFICA el claim. Aquí, “revisión sobre inspiración”: elige la del borrador que hay que rehacer muchas veces. La que exalta la chispa repentina es la trampa que va en dirección contraria.'
    },
    {
      id:'HVE-06', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Quotation',
      passage:"A historian writes that a nineteenth-century reformer publicly preached patience and gradual change but privately doubted that slow methods would ever work. To show this hidden impatience, the historian searches the reformer’s private letters.",
      stem:'Which quotation from the private letters would most effectively illustrate the historian’s point?',
      choices:{
        A:'“In my speeches I urge the crowds, as always, to trust that steady, lawful steps will carry the day.”',
        B:'“The public admires my calm; I have learned that a measured voice wins more listeners than an angry one.”',
        C:'“I have devoted my life to this cause and would not trade it for any comfort the world could offer.”',
        D:'“Between us, I no longer believe these cautious half-measures will free anyone; my patience is a mask I can barely hold.”'
      },
      correct:'D',
      expCorrect:'El punto es que en público predicaba paciencia pero en privado DUDABA de los métodos lentos. La D lo ilustra exacto: “entre nosotros”, ya no cree en las medidas cautelosas y confiesa que su paciencia “es una máscara”. Muestra la impaciencia oculta detrás del discurso calmado.',
      expWrong:{
        A:'Repite lo que dice en PÚBLICO (confiar en pasos legales y firmes); muestra la fachada, no la duda privada.',
        B:'Habla de su estrategia de imagen (una voz calmada convence más), no de que dude de que lo lento funcione.',
        C:'Expresa devoción a la causa, no duda sobre si los métodos graduales servirán. No toca la impaciencia oculta.'
      },
      tip:'El claim contrasta lo PÚBLICO con lo PRIVADO. Busca la cita íntima (“entre nosotros…”) que revela la duda escondida, no la que repite el discurso público ni la que habla de su imagen o su entrega.'
    },
    {
      id:'HVE-07', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"A theater scholar argues that a playwright’s comedies, though they seem lighthearted, were designed to slip sharp political criticism past the censors of his day. To support this, the scholar examines the plays themselves.",
      stem:'Which quotation from the plays would most effectively illustrate the scholar’s argument?',
      choices:{
        A:'A servant, pretending to praise the king, says, “Long may he rule, who taxes us so wisely that soon we shall have nothing left to tax.”',
        B:'A pair of young lovers exchange playful insults before agreeing, at last, to marry in the final act.',
        C:'A drunken cook stumbles about the kitchen, dropping pots and mistaking the cat for a rabbit.',
        D:'A narrator steps forward to wish the audience a merry evening and thank them warmly for attending.'
      },
      correct:'A',
      expCorrect:'El argumento es que bajo la comedia el autor colaba CRÍTICA POLÍTICA sin que los censores lo notaran. La A lo ilustra perfecto: el criado finge alabar al rey mientras en realidad se burla de sus impuestos abusivos. Es humor por fuera, crítica al poder por dentro, justo lo que dice el erudito.',
      expWrong:{
        B:'Insultos juguetones entre enamorados que terminan casándose es comedia romántica pura; no hay crítica política escondida.',
        C:'El cocinero borracho que tropieza es humor físico inofensivo; hace reír, pero no critica al poder.',
        D:'Que el narrador salude y agradezca al público es una cortesía teatral; no lleva ninguna crítica velada.'
      },
      tip:'Para “crítica colada bajo el humor”, busca la cita con doble filo: suena a broma pero apunta al poder (los impuestos del rey). Las escenas de puro chiste romántico o físico no llevan el mensaje político que pide el claim.'
    },
    {
      id:'HVE-08', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>Two bridges of similar length cross the same river.</li><li>The Old Bridge, built in 1890, rests on stone piers set in the riverbed.</li><li>The New Bridge, built in 1970, hangs from steel cables anchored on each bank.</li><li>The Old Bridge must close for repairs about once every two years.</li><li>The New Bridge has not closed for repairs since it opened.</li></ul>The student wants to emphasize a difference in how reliable the two bridges have been. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'The Old Bridge rests on stone piers set in the riverbed, while the New Bridge hangs from steel cables anchored on each bank.',
        B:'The Old Bridge was built in 1890, whereas the New Bridge was built in 1970.',
        C:'The Old Bridge must close for repairs about once every two years, while the New Bridge has not closed for repairs since it opened.',
        D:'The two bridges are of similar length and cross the same river.'
      },
      correct:'C',
      expCorrect:'La meta pide una diferencia en la CONFIABILIDAD de los dos puentes. La C compara justo eso: el Viejo cierra por reparaciones cada dos años y el Nuevo no ha cerrado nunca. Eso mide qué tan confiable es cada uno, con notas exactas.',
      expWrong:{
        A:'Contrasta cómo están CONSTRUIDOS (pilares vs. cables), no qué tan confiables han sido en servicio.',
        B:'Compara las FECHAS de construcción, no la confiabilidad de cada puente.',
        D:'Dice en qué se PARECEN (largo y río), no una diferencia de confiabilidad.'
      },
      tip:'“Diferencia en confiabilidad” pide la opción sobre fallas o cierres (cada dos años vs. nunca), no la de materiales ni fechas ni lo que tienen en común.'
    },
    {
      id:'HVE-09', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>A chemist tested a new catalyst meant to speed up a slow reaction.</li><li>Without the catalyst, the reaction took 120 minutes to finish.</li><li>With the catalyst added, the same reaction finished in 12 minutes.</li><li>The catalyst was not used up and could be recovered afterward.</li><li>The chemist repeated the test five times with the same result.</li></ul>The student wants to emphasize how dramatically the catalyst sped up the reaction. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'The catalyst was not consumed during the reaction and could be recovered afterward for reuse.',
        B:'With the catalyst, the reaction finished in just 12 minutes, one-tenth of the 120 minutes it took without it.',
        C:'The chemist repeated the test five times and obtained the same result each time.',
        D:'The chemist tested a new catalyst designed to speed up a reaction that was otherwise slow.'
      },
      correct:'B',
      expCorrect:'La meta pide enfatizar lo DRÁSTICO de la aceleración. La B lo muestra con los números: con catalizador tardó 12 minutos, la décima parte de los 120 sin él. Ese contraste 120→12 comunica de golpe lo grande del cambio, con notas exactas.',
      expWrong:{
        A:'Que el catalizador se recupere habla de reutilizarlo, no de cuánto aceleró la reacción.',
        C:'Que el test se repitiera cinco veces muestra CONSISTENCIA, no la magnitud de la aceleración.',
        D:'Enuncia qué probaba el químico (el propósito), sin dar el contraste de tiempos que muestra lo drástico.'
      },
      tip:'“Qué tan drástico” pide la comparación de MAGNITUD con cifras (120 vs. 12 min). La consistencia (5 veces) o la reutilización responden a otra meta, no a lo impactante del cambio.'
    },
    {
      id:'HVE-10', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>A conservator cleaned a centuries-old painting darkened by layers of old varnish.</li><li>Under the yellowed varnish, the sky had looked a dull brown.</li><li>After cleaning, the sky was revealed to be a bright blue.</li><li>Some critics feared the cleaning might strip away original paint.</li><li>Tests showed the original paint layer was left untouched.</li></ul>The student wants to reassure readers who worried that the cleaning would damage the original artwork. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'Under the yellowed varnish, the painting’s sky had long looked a dull brown.',
        B:'After the cleaning, the painting’s sky was revealed to be a bright blue.',
        C:'Some critics had feared that cleaning the painting might strip away its original paint.',
        D:'Although some feared the cleaning would harm the artwork, tests confirmed the original paint layer was left untouched.'
      },
      correct:'D',
      expCorrect:'La meta es TRANQUILIZAR a quienes temían daño al original. La D lo hace: reconoce el temor y luego lo calma con la prueba de que la capa de pintura original quedó intacta. Responde justo la preocupación, con notas exactas.',
      expWrong:{
        A:'Describe cómo se veía el cielo antes (café apagado); no dice nada sobre si la limpieza dañó o no la obra.',
        B:'Cuenta el resultado visual (cielo azul), pero no aborda el miedo a que se dañara el original.',
        C:'Solo REPITE el temor de los críticos sin resolverlo; eso inquieta más, no tranquiliza.'
      },
      tip:'“Tranquilizar a quien temía X” pide la opción que da la prueba de que X no pasó (pintura original intacta). Repetir el miedo o describir el color no calma esa preocupación.'
    },
    {
      id:'HVE-11', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>Two neighboring towns each built a public library in the same year.</li><li>Town A placed its library beside the busy central market.</li><li>Town B placed its library on a quiet hill at the edge of town.</li><li>The libraries are the same size and hold similar collections.</li><li>Town A’s library records four times as many visits per week as Town B’s.</li></ul>The student wants to make a claim about how a library’s location can affect how often it is used, supported by the towns’ experience. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'Placing a library where people already gather appears to boost its use: Town A’s market-side library draws four times as many weekly visits as Town B’s hilltop one, though the two are alike in size and collection.',
        B:'Town A and Town B each opened a public library of the same size in the same year.',
        C:'Town A placed its library beside the busy central market, while Town B chose a quiet hill at the edge of town.',
        D:'Town B’s library sits on a quiet hill at the edge of town, away from the bustle of daily activity.'
      },
      correct:'A',
      expCorrect:'La meta pide una AFIRMACIÓN sobre cómo la ubicación afecta el uso, apoyada por el caso. La A hace ambas cosas: plantea la idea (ponerla donde ya se junta la gente sube el uso) y la respalda con el dato (cuatro veces más visitas, siendo iguales en tamaño y colección). Es afirmación + evidencia, con notas exactas.',
      expWrong:{
        B:'Dice que ambas abrieron igual el mismo año; es lo que tienen en común, no una afirmación sobre ubicación y uso.',
        C:'Describe DÓNDE puso cada pueblo su biblioteca, pero no plantea ni apoya ninguna afirmación sobre el uso.',
        D:'Solo describe la ubicación de la biblioteca de Town B; no hace la afirmación general ni la respalda con datos.'
      },
      tip:'“Afirmación apoyada por el caso” pide la opción que UNE una idea general con el dato que la sostiene (4 veces más visitas). Las que solo describen ubicaciones o coincidencias no plantean la afirmación.'
    },
    {
      id:'HVE-12', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>A biologist studied three unrelated desert animals.</li><li>The kangaroo rat gets nearly all its water from the dry seeds it eats.</li><li>The thorny devil lizard channels dew along grooves in its skin to its mouth.</li><li>The camel can tolerate large swings in its body temperature to avoid sweating.</li><li>None of the three needs to drink standing water regularly.</li></ul>The student wants to present a generalization about desert animals that is supported by the examples in the notes. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'The kangaroo rat gets nearly all of the water it needs from the dry seeds it eats.',
        B:'The thorny devil lizard channels dew along grooves in its skin toward its mouth.',
        C:'Desert animals have evolved a variety of strategies that let them survive with little or no standing water to drink.',
        D:'The biologist studied three unrelated animals that all live in the desert.'
      },
      correct:'C',
      expCorrect:'La meta pide una GENERALIZACIÓN apoyada por los ejemplos. La C resume el patrón de los tres casos: distintos animales del desierto desarrollaron estrategias variadas para vivir con poca o ninguna agua para beber. Abarca a la rata, el lagarto y el camello en una sola idea, con notas exactas.',
      expWrong:{
        A:'Da un solo caso (la rata canguro); es un ejemplo, no la generalización que abarca a los tres.',
        B:'Da otro caso suelto (el lagarto); un ejemplo aislado, no el patrón general.',
        D:'Describe el MONTAJE del estudio (tres animales del desierto), no la conclusión general que se sostiene con los ejemplos.'
      },
      tip:'“Generalización apoyada por ejemplos” pide la opción que RESUME lo común a todos los casos (estrategias variadas, poca agua), no un solo animal ni la descripción del estudio.'
    }
  ]
});
