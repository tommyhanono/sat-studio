/* SAT Studio — Reading and Writing: Simulacro del MÓDULO 1 (RWM1-01 a RWM1-27)
 *
 * El equivalente de math-mod1-sim para la otra mitad del examen. Era el último
 * hueco estructural del banco: había un simulacro de módulo de matemática y
 * ninguno de Reading, cuando Reading es la mitad del puntaje.
 *
 * Todo lo de abajo sale del Assessment Framework for the Digital SAT Suite de
 * College Board (PDF oficial, 227 pp.), no de una aproximación:
 *
 *   · 27 preguntas en 32 minutos (25 operativas + 2 de prueba). p. 51
 *   · Promedio 1,19 minutos por pregunta. p. 50
 *   · Pasajes de 25 a 150 palabras, uno por pregunta. p. 50
 *   · Áreas: literatura, historia y ciencias sociales, humanidades, ciencia. p. 50
 *   · ORDEN DE DOMINIOS (tabla 9, p. 50), el mismo en los dos módulos:
 *       Craft and Structure → Information and Ideas →
 *       Standard English Conventions → Expression of Ideas
 *   · Dentro de cada dominio se ordena primero por habilidad y después de
 *     MÁS FÁCIL A MÁS DIFÍCIL. La excepción es Standard English Conventions,
 *     que va de fácil a difícil sin agrupar por habilidad. p. 51
 *   · El primer módulo trae "una mezcla amplia de preguntas fáciles, medias y
 *     difíciles" y su resultado determina la dificultad del segundo. p. 50
 *
 * Composición de este set:
 *
 *   Dominio                        preguntas   este set   oficial
 *   Craft and Structure                8         29,6 %     ≈28 %
 *   Information and Ideas              7         25,9 %     ≈26 %
 *   Standard English Conventions       7         25,9 %     ≈26 %
 *   Expression of Ideas                5         18,5 %     ≈20 %
 *
 *   Dificultad: 8 Fácil / 13 Media / 6 Difícil.
 *
 * Ese reparto de dificultad es deliberado y corrige un sesgo medido: el resto
 * del banco de Reading tiene apenas 9,8 % de preguntas fáciles y 59 % difíciles,
 * porque la expansión anterior apuntó al segundo módulo. El primer módulo NO es
 * el difícil — es el que fija el techo de puntaje, y hace falta velocidad ahí.
 *
 * Se usa CON RELOJ. Navegar libremente entre preguntas y marcar para volver es
 * parte del examen real (p. 51): conviene practicarlo, no solo responder en orden.
 */
(function(){

  // Pasaje pareado para Cross-Text Connections (la única pregunta que lo necesita).
  var PAREADO =
    '<b>Text 1</b><br>The naturalist Mary Kingsley argued that a species should be studied only in the place where it lives. ' +
    'Specimens shipped to European museums arrived stripped of everything that gave them meaning: the water they swam in, ' +
    'the animals they fled, the season in which they were caught. A label in a drawer, she wrote, records a death, not a life.' +
    '<br><br><b>Text 2</b><br>Museum curators of the period defended their collections on practical grounds. Field observation ' +
    'was limited to whatever one person could witness in one place in one season, and it could not be checked by anyone else. ' +
    'A preserved specimen, by contrast, could be examined by a hundred researchers over a century, and each could verify what ' +
    'the previous one claimed to have seen.';

  // Tabla para la pregunta cuantitativa de Command of Evidence. El examen real
  // usa tablas y gráficos de barras o de líneas; acá va una tabla simple porque
  // lo que se evalúa es leer el dato correcto, no interpretar un gráfico bonito.
  var TABLA_ANFIBIOS =
    '<div style="overflow-x:auto"><table style="border-collapse:collapse;font-size:.92em;margin:6px 0">' +
    '<caption style="text-align:left;font-weight:600;padding-bottom:6px">' +
    'Ranas encontradas por hora de búsqueda en cuatro tramos del arroyo Verde (2024)</caption>' +
    '<tr><th style="border:1px solid #ccc;padding:5px 10px;text-align:left">Tramo</th>' +
    '<th style="border:1px solid #ccc;padding:5px 10px">Cobertura de árboles</th>' +
    '<th style="border:1px solid #ccc;padding:5px 10px">Ranas por hora</th></tr>' +
    '<tr><td style="border:1px solid #ccc;padding:5px 10px">Norte</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">85 %</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">14,2</td></tr>' +
    '<tr><td style="border:1px solid #ccc;padding:5px 10px">Centro</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">60 %</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">9,8</td></tr>' +
    '<tr><td style="border:1px solid #ccc;padding:5px 10px">Sur</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">35 %</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">5,1</td></tr>' +
    '<tr><td style="border:1px solid #ccc;padding:5px 10px">Este</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">12 %</td>' +
    '<td style="border:1px solid #ccc;padding:5px 10px;text-align:center">2,4</td></tr>' +
    '</table></div>';

  window.SAT_SETS.push({
    id: 'rw-mod1-sim',
    title: 'R&W — Simulacro Módulo 1 (con reloj)',
    section: 'rw',
    level: 'Media',
    description: '27 preguntas en 32 minutos con el orden, la mezcla de dominios y el reparto de dificultad OFICIALES del primer módulo. Es el módulo que fija tu techo de puntaje.',
    minutes: 32,
    questions: [

      /* ═══════════ CRAFT AND STRUCTURE (8) ═══════════
         Words in Context → Text Structure and Purpose → Cross-Text Connections,
         y dentro de cada habilidad, de más fácil a más difícil. */

      {
        id:'RWM1-01', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Words in Context',
        passage:"The archaeologist spent eleven years excavating a single hillside. Progress was measured in centimeters: a layer of ash one week, a fragment of pottery the next. Colleagues who preferred faster, broader surveys sometimes questioned the value of such ______ work, but the site eventually produced the most complete record of the settlement ever assembled.",
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{A:'painstaking', B:'careless', C:'spontaneous', D:'theoretical'},
        correct:'A',
        expCorrect:'El texto describe once años de trabajo medido en centímetros, capa por capa. «Painstaking» significa hecho con cuidado extremo y mucho esfuerzo: es exactamente eso. Y encaja con el contraste que plantea la oración —colegas que preferían métodos «más rápidos y amplios»— y con el resultado final, el registro más completo del asentamiento.',
        expWrong:{
          B:'«Careless» (descuidado) contradice todo el pasaje: alguien descuidado no dedica once años a medir en centímetros ni produce el registro más completo del sitio.',
          C:'«Spontaneous» (espontáneo) choca con un trabajo planificado a lo largo de once años. Además nada en el texto sugiere improvisación.',
          D:'«Theoretical» (teórico) es lo contrario: el pasaje describe excavación física, capas de ceniza y fragmentos de cerámica. Es trabajo de campo, no de escritorio.'
        },
        tip:'Antes de mirar las opciones, tapalas y escribí vos una palabra que encaje. Acá el texto casi la dicta: «cuidadoso y lento». Después buscá cuál de las cuatro se le parece. Elegir primero entre las opciones es lo que te hace caer en la que «suena bien».'
      },
      {
        id:'RWM1-02', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Words in Context',
        passage:"When the composer Florence Price died in 1953, boxes of her manuscripts were left in an abandoned house outside Chicago. For decades her orchestral works were effectively ______: they existed, but no one could perform them because no one knew where the scores were. Their rediscovery in 2009 returned dozens of pieces to the concert repertoire.",
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{A:'celebrated', B:'lost', C:'unfinished', D:'controversial'},
        correct:'B',
        expCorrect:'Los dos puntos introducen la explicación de la palabra que falta: «existían, pero nadie podía tocarlas porque nadie sabía dónde estaban las partituras». Eso es la definición de perdidas. Lo confirma la última oración, que habla de su «redescubrimiento».',
        expWrong:{
          A:'«Celebrated» contradice la explicación que sigue a los dos puntos: nadie podía interpretarlas. Además, si hubieran sido celebradas no haría falta redescubrirlas.',
          C:'«Unfinished» (inconclusas) no encaja: el texto dice que las obras existían y que volvieron al repertorio, o sea que estaban terminadas. Lo que faltaba era saber dónde.',
          D:'«Controversial» no aparece por ningún lado. Nada en el texto sugiere polémica, solo desaparición física de los manuscritos.'
        },
        tip:'Cuando la oración trae dos puntos, punto y coma o guion largo, lo que viene después suele DEFINIR la palabra que falta. Leé esa parte primero: acá te regala la respuesta.'
      },
      {
        id:'RWM1-03', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Words in Context',
        passage:"Reviewers of the novel praised its restraint. The narrator never announces what she feels; grief appears only in what she notices — an unwashed cup, a chair moved slightly from the table. Some readers found this ______ frustrating and wanted the emotion stated outright, but most agreed that the withholding was precisely what gave the book its force.",
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{A:'verbosity', B:'obscurity', C:'reticence', D:'hostility'},
        correct:'C',
        expCorrect:'«Reticence» es la cualidad de no decir lo que se podría decir. El texto la describe sin nombrarla: la narradora «nunca anuncia lo que siente» y el duelo aparece solo en detalles. La palabra tiene que resumir esa contención, y la última oración lo confirma llamándolo «the withholding».',
        expWrong:{
          A:'«Verbosity» (verborrea) es lo opuesto exacto: el texto elogia la contención, no el exceso de palabras. La primera oración ya dice «praised its restraint».',
          B:'«Obscurity» está cerca pero es impreciso: obscuridad significa que no se entiende, y el texto dice que los lectores SÍ perciben el duelo, solo que a través de detalles. No es confuso, es callado.',
          D:'«Hostility» no tiene apoyo: la frustración es de algunos lectores con el estilo, no hay hostilidad en el libro ni hacia nadie.'
        },
        tip:'En las de nivel medio, dos opciones suelen ser «casi». Acá obscurity y reticence apuntan a lo mismo, pero solo una es precisa: obscuro = no se entiende; reticente = no lo dice. El texto aclara que sí se entiende. La precisión es el criterio, no la aproximación.'
      },
      {
        id:'RWM1-04', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Words in Context',
        passage:"Early accounts of the eruption were written by officials who had not been present and who relied on the reports of others. Later historians treated these documents with caution, noting that details grew more dramatic with each retelling. The narratives were not fabrications, exactly, but they were sufficiently ______ that any figure drawn from them had to be corroborated elsewhere before it could be used.",
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{A:'unreliable', B:'fraudulent', C:'inaccessible', D:'concise'},
        correct:'A',
        expCorrect:'La oración tiene una estructura de matiz: «no eran fabricaciones, exactamente, PERO eran suficientemente ______ que…». Hace falta una palabra más suave que «mentira» pero que justifique tener que corroborar cada dato en otra fuente. «Unreliable» (poco confiables) es exactamente ese punto intermedio, y lo apoya que los detalles se volvían más dramáticos en cada repetición.',
        expWrong:{
          B:'«Fraudulent» es justo lo que la oración descarta: dice explícitamente «not fabrications, exactly». Fraudulento implica intención de engañar, y el texto la niega.',
          C:'«Inaccessible» contradice el pasaje: los documentos estaban disponibles, los historiadores los leyeron y los evaluaron. El problema era su contenido, no el acceso.',
          D:'«Concise» (concisos) no explica nada: que un texto sea breve no obliga a corroborar sus cifras. Además el texto dice que los detalles CRECÍAN, no que se redujeran.'
        },
        tip:'«No era X, exactamente, pero…» es una señal de que buscás algo INTERMEDIO. La trampa es la opción que dice X con todas las letras (acá, fraudulent), que la propia oración acaba de descartar. Leé la estructura lógica antes que el vocabulario.'
      },
      {
        id:'RWM1-05', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Text Structure and Purpose',
        passage:"The axolotl, a salamander native to a few lakes near Mexico City, can regrow a lost limb — bone, muscle, nerve and skin — in a matter of weeks, and can do it repeatedly without scarring. Researchers studying tissue repair have therefore taken a strong interest in the species, hoping that the mechanism behind this ability might one day inform treatments for human injuries.",
        stem:'Which choice best describes the main purpose of the text?',
        choices:{
          A:'To explain why an unusual animal ability has attracted scientific attention',
          B:'To argue that the axolotl should be protected from extinction',
          C:'To compare the healing of salamanders with that of humans',
          D:'To describe the lakes near Mexico City where the axolotl lives'},
        correct:'A',
        expCorrect:'El texto tiene dos movimientos: primero describe la capacidad del ajolote de regenerar miembros, y después dice que POR ESO («therefore») los investigadores se interesaron en la especie. El propósito es explicar por qué esa habilidad llamó la atención de la ciencia.',
        expWrong:{
          B:'El texto no argumenta nada sobre conservación ni menciona extinción. Describir dónde vive no es pedir que se lo proteja.',
          C:'No hay comparación: se menciona a los humanos una sola vez, como aplicación futura posible, y nunca se describe cómo cicatrizan.',
          D:'Los lagos aparecen en una cláusula subordinada de la primera oración. Es un detalle de contexto, no el propósito del texto.'
        },
        tip:'El propósito casi nunca es el detalle más llamativo, es lo que hace el texto COMO CONJUNTO. Fijate en los conectores: un «therefore» en el medio suele marcar dónde está la bisagra del párrafo.'
      },
      {
        id:'RWM1-06', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Text Structure and Purpose',
        passage:"It is often said that the Industrial Revolution began with a single invention. The claim is convenient but misleading. The steam engine of 1712 was inefficient and used almost exclusively to pump water out of mines; it changed little outside that trade. Only after seventy years of modification by dozens of workshops — better cylinders, better seals, a separate condenser — did the engine become general-purpose enough to reorganize manufacturing.",
        stem:'Which choice best describes the overall structure of the text?',
        choices:{
          A:'It presents a common claim, rejects it, and then supplies evidence of a slower and more distributed process',
          B:'It describes an invention and then lists the industries that adopted it',
          C:'It compares two competing explanations and concludes that both are partly correct',
          D:'It traces the biography of an inventor from an early failure to eventual success'},
        correct:'A',
        expCorrect:'La estructura está a la vista: oración 1 presenta la afirmación común («empezó con un solo invento»), oración 2 la rechaza («conveniente pero engañosa»), y el resto aporta la evidencia — setenta años, decenas de talleres, mejoras acumuladas. Es afirmación → rechazo → evidencia de un proceso distribuido.',
        expWrong:{
          B:'Solo se menciona una industria (la minería) y como limitación, no como lista de adopción. El texto no enumera industrias.',
          C:'No hay dos explicaciones compitiendo: hay una afirmación y su refutación. Y el texto no concluye que la primera sea parcialmente correcta, dice que es engañosa.',
          D:'No aparece ningún inventor. El texto habla de talleres en plural precisamente para negar la idea del genio individual.'
        },
        tip:'Para estructura, resumí cada oración en dos palabras y leé la secuencia: «afirmación / la niego / pruebas». Casi siempre una de las opciones calca esa secuencia y las otras describen un texto distinto.'
      },
      {
        id:'RWM1-07', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Text Structure and Purpose',
        passage:"In her second collection, the poet returns to the image of the unlit lamp that appeared throughout her first. Critics initially read the repetition as a limitation — a writer circling the same material. But the lamp does different work in each book. In the first it stands for a waiting that might still end; in the second, for a waiting that the speaker has stopped expecting to end. The image is constant; what changes is what the speaker has come to believe about it.",
        stem:'Which choice best describes the function of the underlined sentence in the text as a whole? (“Critics initially read the repetition as a limitation — a writer circling the same material.”)',
        choices:{
          A:'It introduces an interpretation that the rest of the text goes on to revise',
          B:'It provides the evidence on which the text\'s central claim rests',
          C:'It concedes a weakness in the poet\'s work that the text does not dispute',
          D:'It explains why the poet chose to reuse the image in her second collection'},
        correct:'A',
        expCorrect:'La oración presenta la lectura de los críticos («repetición = limitación») y el «But» que abre la oración siguiente marca que el texto va a corregirla. Todo lo que viene después —el mismo objeto con dos significados distintos— sirve para mostrar que no es circular sino evolutivo. Su función es plantear la interpretación que el texto revisa.',
        expWrong:{
          B:'No es evidencia: es la postura que el texto discute. La evidencia real es el contraste entre los dos sentidos de la lámpara, que aparece después.',
          C:'No hay concesión: el texto sí disputa esa lectura, y de inmediato. La palabra «But» al principio de la oración siguiente es la señal.',
          D:'El texto nunca explica la decisión de la poeta ni sus motivos. Describe el efecto de la imagen, no la intención de quien la escribió.'
        },
        tip:'En las preguntas de función, mirá la oración SIGUIENTE. Un «But», «However» o «Yet» justo después significa que la oración subrayada es lo que se va a contradecir, no lo que el texto sostiene. Es el truco que resuelve la mitad de estas preguntas.'
      },
      {
        id:'RWM1-08', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections',
        passage:PAREADO,
        stem:'Based on the texts, how would the curators in Text 2 most likely respond to Kingsley\'s claim in Text 1 that a museum label “records a death, not a life”?',
        choices:{
          A:'By agreeing that specimens lose context but arguing that they gain something field observation cannot offer: verifiability by others',
          B:'By denying that any information is lost when a specimen is removed from its habitat',
          C:'By claiming that field observation is more expensive than maintaining a museum collection',
          D:'By proposing that naturalists and curators should both abandon their methods in favor of a third approach'},
        correct:'A',
        expCorrect:'Los curadores no niegan la pérdida de contexto: la esquivan cambiando el criterio. Su defensa es que la observación de campo «no podía ser verificada por nadie más», mientras que un espécimen preservado «podía ser examinado por cien investigadores a lo largo de un siglo». O sea: conceden el punto de Kingsley y responden con una ventaja distinta, la verificabilidad.',
        expWrong:{
          B:'El Texto 2 nunca niega la pérdida. Su argumento es «en términos prácticos», lo cual concede implícitamente que en otros términos Kingsley puede tener razón.',
          C:'El costo no se menciona en ninguno de los dos textos. Es una preocupación razonable pero inventada por la opción.',
          D:'Ninguno de los textos propone abandonar los dos métodos. El Texto 2 defiende el suyo; el Texto 1 defiende el otro.'
        },
        tip:'En pasajes pareados, la respuesta casi nunca es «lo niega todo» ni «está totalmente de acuerdo». Suele ser «acepta una parte y responde con un criterio distinto». Buscá qué concede cada autor, no solo en qué difieren.'
      },

      /* ═══════════ INFORMATION AND IDEAS (7) ═══════════
         Central Ideas and Details → Command of Evidence → Inferences. */

      {
        id:'RWM1-09', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Central Ideas and Details',
        passage:"Sourdough bread rises without commercial yeast. Instead, the baker maintains a starter: a mixture of flour and water that houses wild yeasts and bacteria drawn from the air and the grain itself. Because those organisms differ from place to place and are fed on different schedules, two bakers following the same recipe can produce loaves with noticeably different flavors.",
        stem:'Which choice best states the main idea of the text?',
        choices:{
          A:'Sourdough is more difficult to bake than bread made with commercial yeast',
          B:'The living starter used in sourdough explains why identical recipes yield different loaves',
          C:'Wild yeasts are more nutritious than the yeasts sold in stores',
          D:'Bakers should feed their starters on a consistent schedule'},
        correct:'B',
        expCorrect:'El texto explica qué es el fermento (una mezcla viva de levaduras y bacterias silvestres) y cierra con la consecuencia: como esos organismos varían según el lugar y la alimentación, la misma receta da panes distintos. La opción B junta las dos mitades.',
        expWrong:{
          A:'La dificultad nunca se menciona. El texto describe cómo funciona, no si es fácil o difícil.',
          C:'La nutrición no aparece. El contraste con la levadura comercial es de comportamiento, no de valor nutricional.',
          D:'Es un consejo que el texto no da. Menciona que los horarios de alimentación difieren como una CAUSA de la variación, no como algo que haya que corregir.'
        },
        tip:'La idea central tiene que cubrir el texto entero. Si una opción solo describe la primera oración o solo la última, es un detalle. Acá la correcta abarca las dos: qué es el fermento Y qué efecto tiene.'
      },
      {
        id:'RWM1-10', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Central Ideas and Details',
        passage:"For most of the twentieth century, the Sahara was assumed to have been arid for millions of years. Sediment cores drilled from the seabed off West Africa have revised that picture. The cores contain layers of pollen from grasses and freshwater algae, deposited as recently as six thousand years ago, when rivers and lakes covered much of what is now sand. The desert is real, but it is young.",
        stem:'Which choice best states the main idea of the text?',
        choices:{
          A:'Sediment cores are the most reliable method available for studying ancient climates',
          B:'The Sahara has always contained scattered lakes and rivers beneath its sand',
          C:'Evidence from seabed cores shows that the Sahara became a desert far more recently than was believed',
          D:'Pollen preserves better in seabed sediment than in desert sand'},
        correct:'C',
        expCorrect:'El texto contrapone una creencia («árido por millones de años») con evidencia que la corrige (polen de pastos y algas de agua dulce de hace apenas seis mil años). La última oración lo resume: «El desierto es real, pero es joven». La opción C dice exactamente eso.',
        expWrong:{
          A:'El texto usa los núcleos de sedimento como fuente de evidencia, pero nunca los compara con otros métodos ni afirma que sean los más confiables.',
          B:'Dice lo contrario en el tiempo: los ríos y lagos CUBRÍAN la zona hace seis mil años, no que sigan existiendo bajo la arena hoy.',
          D:'La conservación del polen no se discute. El polen es la evidencia, no el tema.'
        },
        tip:'Cuando un texto empieza con «se creía que…» o «se asumía que…», la idea central casi siempre es la CORRECCIÓN, no la creencia vieja. Buscá qué evidencia aparece y qué cambia.'
      },
      {
        id:'RWM1-11', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Central Ideas and Details',
        passage:"In 1900 the physician Ronald Ross published a set of equations describing how malaria spreads through a population of mosquitoes and people. The equations implied something counterintuitive: it was not necessary to eliminate every mosquito. Below a certain density, each infection would on average produce fewer than one new infection, and the disease would die out on its own. Control programs since have been built on that threshold rather than on eradication.",
        stem:'Which choice best states the main idea of the text?',
        choices:{
          A:'Ross showed that malaria could be controlled by reducing mosquitoes below a threshold rather than eliminating them',
          B:'Ross was the first scientist to identify the mosquito as the carrier of malaria',
          C:'Mathematical equations have proven more useful than field work in fighting malaria',
          D:'Malaria control programs have failed because they aimed at eradication'},
        correct:'A',
        expCorrect:'El texto presenta la implicación contraintuitiva de las ecuaciones —no hace falta eliminar todos los mosquitos, basta bajar de cierta densidad— y cierra diciendo que los programas de control se construyeron sobre ese umbral. Esa es la idea completa.',
        expWrong:{
          B:'El texto nunca dice que Ross descubriera el papel del mosquito; describe sus ecuaciones sobre la propagación. Es un hecho verosímil pero no está en el texto.',
          C:'No hay comparación con el trabajo de campo. El texto no jerarquiza métodos.',
          D:'Es lo contrario: dice que los programas se basaron en el umbral «rather than on eradication», y no menciona ningún fracaso.'
        },
        tip:'Ojo con las opciones que son verdaderas en el mundo real pero no están en el texto. La pregunta es qué dice ESTE pasaje. Si tenés que traer información de afuera para justificarla, está mal.'
      },
      {
        id:'RWM1-12', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence (Textual)',
        passage:"A team of linguists proposed that children do not learn grammar by imitation alone. If imitation were the whole story, they argued, children should produce only forms they have actually heard from adults. The team therefore looked for utterances that a child could not have copied.",
        stem:'Which finding, if true, would most directly support the linguists\' proposal?',
        choices:{
          A:'Children in the study regularly produced forms such as “goed” and “breaked,” which no adult around them used',
          B:'Children in the study repeated their parents\' sentences accurately after hearing them twice',
          C:'Children raised in larger families were found to begin speaking at a slightly earlier age',
          D:'Adults in the study simplified their vocabulary when speaking to young children'},
        correct:'A',
        expCorrect:'La propuesta es que los chicos NO aprenden solo por imitación, y el propio texto dice cuál sería la prueba: encontrar expresiones que el chico no pudo haber copiado. «Goed» y «breaked» son exactamente eso — regularizaciones que ningún adulto dice. Prueban que el chico está aplicando una regla propia.',
        expWrong:{
          B:'Apoya la posición CONTRARIA: repetir con precisión lo que se oyó es justamente imitación.',
          C:'El tamaño de la familia y la edad de inicio no dicen nada sobre si el mecanismo es imitación o regla. Es un dato irrelevante para la hipótesis.',
          D:'Que los adultos simplifiquen describe el input, no cómo lo procesa el chico. No distingue entre las dos explicaciones.'
        },
        tip:'El texto casi siempre te dice qué evidencia busca: acá, «utterances that a child could not have copied». Subrayá esa frase y elegí la opción que la cumple literalmente. No evalúes cuál suena más científica.'
      },
      {
        id:'RWM1-13', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence (Quantitative)',
        figure:TABLA_ANFIBIOS,
        passage:"Una bióloga sostiene que la densidad de ranas en el arroyo Verde depende de la sombra: cuanta más cobertura de árboles tiene un tramo, más ranas se encuentran por hora de búsqueda.",
        stem:'Which choice most effectively uses data from the table to support the biologist\'s claim?',
        choices:{
          A:'El tramo Norte, con 85 % de cobertura, registró 14,2 ranas por hora, mientras que el tramo Este, con 12 %, registró 2,4',
          B:'El tramo Este registró 2,4 ranas por hora, el valor más bajo de los cuatro tramos',
          C:'El tramo Centro registró 9,8 ranas por hora, más que el tramo Sur',
          D:'Los cuatro tramos del arroyo fueron muestreados durante el mismo año, 2024'},
        correct:'A',
        expCorrect:'La afirmación es sobre una RELACIÓN entre dos variables: más sombra, más ranas. Para apoyarla hace falta citar las dos variables en al menos dos tramos, y conviene que sean los extremos. La opción A hace exactamente eso: 85 % → 14,2 contra 12 % → 2,4.',
        expWrong:{
          B:'Menciona solo las ranas y no dice nada de la cobertura de árboles. Sin las dos variables no se puede apoyar una afirmación sobre la relación entre ellas.',
          C:'Compara dos tramos pero otra vez omite la cobertura. Además elige dos valores intermedios, que muestran menos contraste que los extremos.',
          D:'Es un dato del diseño del estudio, no de la relación. Que todos se midieran en 2024 no dice nada sobre sombra ni ranas.'
        },
        tip:'Regla fija para las de tabla o gráfico: si la afirmación relaciona DOS variables, la respuesta correcta tiene que nombrar LAS DOS. Es el filtro más rápido que existe — normalmente descarta tres opciones sin pensar.'
      },
      {
        id:'RWM1-14', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences',
        passage:"The bar-tailed godwit flies from Alaska to New Zealand without landing, a journey of some eleven thousand kilometers completed in about nine days. Before departing, the bird nearly doubles its body weight in fat and its digestive organs shrink, since they will not be needed in flight. A bird that is delayed on the Alaskan coast and begins to burn through that reserve before leaving ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'may lack the fuel required to complete the crossing without stopping',
          B:'will regrow its digestive organs before attempting the flight again',
          C:'is likely to choose a shorter route across the Pacific the following year',
          D:'tends to arrive in New Zealand earlier than birds that departed on time'},
        correct:'A',
        expCorrect:'El texto establece dos cosas: el viaje se hace sin escalas y la grasa acumulada es el combustible. Si el ave empieza a gastar esa reserva ANTES de partir, la conclusión que se sigue directamente es que puede no alcanzarle para cruzar sin parar. No hace falta información de afuera.',
        expWrong:{
          B:'El texto dice que los órganos digestivos se encogen porque no se usan en vuelo, pero nunca menciona que se regeneren antes de un segundo intento. Es una invención plausible.',
          C:'No hay nada sobre elección de rutas ni sobre lo que hace el ave al año siguiente. Es un salto que el texto no autoriza.',
          D:'Es lo contrario de lo esperable: menos combustible no produce una llegada más temprana. Y el texto no habla de tiempos de llegada.'
        },
        tip:'Una inferencia del SAT es un paso corto, no una teoría. Preguntate: ¿esto se sigue SOLO con lo que dice el texto? Si tenés que suponer un dato nuevo (que los órganos se regeneran, que elige rutas), esa opción está mal.'
      },
      {
        id:'RWM1-15', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences',
        passage:"A study of restaurant menus found that dishes described with their region of origin — “Tuscan white beans,” “Oaxacan mole” — were ordered more often than the same dishes listed by ingredients alone. The effect held even when diners were told, before ordering, that the descriptions had been assigned at random and did not reflect where the recipes came from. This suggests that ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'the appeal of the regional labels does not depend on diners believing them to be accurate',
          B:'diners are generally unable to distinguish between regional cuisines by taste',
          C:'restaurants that use regional labels earn more revenue than those that do not',
          D:'the diners in the study did not read the descriptions before placing their orders'},
        correct:'A',
        expCorrect:'La clave está en el segundo dato: el efecto persistió AUNQUE se les dijera que las etiquetas eran aleatorias y falsas. Si el efecto sobrevive a saber que la etiqueta no es cierta, entonces no depende de creerla. Eso es exactamente lo que dice A, y es lo único que la evidencia autoriza.',
        expWrong:{
          B:'El estudio midió qué pedían, no si podían distinguir sabores. Nunca se probó su paladar.',
          C:'Salta de «se pidieron más» a «ganan más dinero», que involucra precios y costos de los que el texto no dice nada.',
          D:'Contradice el estudio: si no hubieran leído las descripciones, las etiquetas no habrían tenido ningún efecto — y lo tuvieron.'
        },
        tip:'En las difíciles, el dato decisivo suele ser la oración que empieza con «even when» o «aunque». Ahí está el control experimental, y la conclusión correcta es casi siempre la que lo explica. Si una opción ignora esa oración, no es la respuesta.'
      },

      /* ═══════════ STANDARD ENGLISH CONVENTIONS (7) ═══════════
         De más fácil a más difícil, SIN agrupar por habilidad — así lo especifica
         el marco oficial (p. 51) para este dominio y solo para este. */

      {
        id:'RWM1-16', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Boundaries',
        passage:"The eruption of Mount Tambora threw enough ash into the upper atmosphere to dim sunlight across the Northern Hemisphere for months. After the volcano fell silent in 1815 ______ farmers across Europe recorded a summer that never arrived: frost in June, failed harvests, and bread riots by autumn.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'1815, farmers', B:'1815 farmers', C:'1815; farmers', D:'1815: farmers'},
        correct:'A',
        expCorrect:'«After the volcano fell silent in 1815» es un elemento introductorio: no es una oración completa, prepara el terreno para la principal. Un elemento introductorio se separa con COMA de la oración que sigue.',
        expWrong:{
          B:'Sin puntuación se pegan el elemento introductorio y el sujeto, y por un instante se lee «1815 farmers» como si fuera un grupo de agricultores. La coma existe justamente para evitar eso.',
          C:'El punto y coma une dos oraciones INDEPENDIENTES. «After the volcano fell silent in 1815» no puede sostenerse sola, así que no califica.',
          D:'Los dos puntos anuncian una explicación, una lista o una definición de lo que viene antes. Acá no hay nada que anunciar: es simplemente una introducción temporal.'
        },
        tip:'Prueba de un segundo: tapá lo que está antes del espacio. Si lo que queda a la izquierda NO puede ser una oración sola, la respuesta es coma — nunca punto y coma.'
      },
      {
        id:'RWM1-17', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense',
        passage:"When the composer Florence Price died in 1953, boxes of her papers were left behind in a house outside Chicago and forgotten for more than fifty years. The collection of manuscripts recovered from the abandoned house ______ dozens of orchestral scores that had been considered lost.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'includes', B:'include', C:'are including', D:'have included'},
        correct:'A',
        expCorrect:'El sujeto es «The collection», que es singular. Todo lo que va entre el sujeto y el verbo —«of manuscripts recovered from the abandoned house»— es una frase preposicional que no cambia el número. Colección singular pide verbo singular: «includes».',
        expWrong:{
          B:'«Include» es plural y concuerda con «manuscripts», que está dentro de una frase preposicional. El núcleo del sujeto nunca está dentro de un «of…».',
          C:'«Are including» es plural y además pone en progresivo algo que es un estado permanente, no una acción en curso.',
          D:'«Have included» también es plural, y el presente perfecto sugiere un cambio en el tiempo que el contexto no plantea.'
        },
        tip:'Tachá con el dedo todo lo que va entre «of» y el verbo. Lo que queda es el sujeto real. Es el error de concordancia más común del examen y se resuelve tapando.'
      },
      {
        id:'RWM1-18', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Boundaries',
        passage:"The chemists repeated the reaction twice, changing only one variable between attempts so that any difference could be attributed to that variable alone. The first trial produced no measurable effect ______ the second, run at a higher temperature, produced a clear one.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'effect;', B:'effect,', C:'effect', D:'effect:'},
        correct:'A',
        expCorrect:'A los dos lados hay oraciones completas e independientes: «The first trial produced no measurable effect» y «the second… produced a clear one». Dos oraciones independientes relacionadas, sin conjunción en el medio, se unen con PUNTO Y COMA.',
        expWrong:{
          B:'Una sola coma entre dos oraciones completas es un empalme de comas (comma splice), uno de los errores que el SAT evalúa con más frecuencia. Hace falta punto y coma, o coma MÁS conjunción.',
          C:'Sin nada quedan dos oraciones pegadas (run-on). El problema es el mismo que con la coma sola, agravado.',
          D:'Los dos puntos anuncian que lo que sigue explica o especifica lo anterior. Acá la segunda oración no explica la primera: la contrasta.'
        },
        tip:'Regla mecánica: oración completa + oración completa = punto y coma, o punto, o coma + FANBOYS (for, and, nor, but, or, yet, so). Coma sola nunca. Verificá que los dos lados puedan vivir solos.'
      },
      {
        id:'RWM1-19', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense',
        passage:"The journal had invited four laboratories to test the same hypothesis independently, without sharing results until every analysis was complete. Each of the four research teams submitted ______ findings to the journal before the deadline.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'its', B:'their', C:'it\'s', D:'they\'re'},
        correct:'A',
        expCorrect:'El sujeto es «Each», que es SIEMPRE singular por más que le siga «of the four research teams». Un antecedente singular pide un posesivo singular: «its».',
        expWrong:{
          B:'«Their» es plural y concuerda con «teams», que está dentro de la frase preposicional. «Each» es el núcleo y es singular.',
          C:'«It\'s» es la contracción de «it is», no un posesivo. Reemplazalo mentalmente: «Each team submitted it is findings» no tiene sentido.',
          D:'«They\'re» es «they are», también una contracción y además plural. Dos errores en uno.'
        },
        tip:'Memorizá los que son singulares aunque parezcan plurales: each, every, either, neither, one, anyone, everyone, nobody. El SAT los usa con un «of the…» detrás justo para tentarte con el plural.'
      },
      {
        id:'RWM1-20', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries',
        passage:"Few animals recover from injury the way this one does: a lost leg returns complete with bone, muscle, nerve, and skin, and it can happen more than once in the same individual. The axolotl ______ can regrow entire limbs without scarring, has become a standard subject in tissue-repair research.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'a salamander native to central Mexico,', B:'a salamander native to central Mexico', C:'a salamander native to central Mexico;', D:'a salamander, native to central Mexico'},
        correct:'A',
        expCorrect:'«a salamander native to central Mexico, which can regrow entire limbs without scarring» es un aposito no esencial: se puede quitar y la oración sigue completa. Un elemento no esencial va entre DOS comas, y la segunda ya está en el texto después de «scarring». Falta la de apertura.',
        expWrong:{
          B:'Deja el aposito con coma de cierre pero sin coma de apertura. Las comas de un elemento no esencial van en PAREJA: una sola es siempre un error.',
          C:'El punto y coma exige oraciones independientes a los dos lados, y «a salamander native to central Mexico» no es una oración.',
          D:'Pone la coma en el lugar equivocado, separando «a salamander» de su propio modificador y dejando igual sin cerrar el aposito.'
        },
        tip:'Las comas de un elemento no esencial son como paréntesis: si ves una, buscá la otra. Cuando el texto ya trae una coma de cierre, la pregunta casi siempre es dónde va la de apertura.'
      },
      {
        id:'RWM1-21', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense',
        passage:"For most of the twentieth century the Sahara was assumed to have been arid for millions of years. That assumption rested on the absence of contrary evidence rather than on direct measurement, and the evidence, when it came, arrived from the ocean floor. Drilled from the seabed off the coast of West Africa, ______",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{
          A:'the cores revealed pollen from grasses that no longer grow in the region.',
          B:'researchers found pollen in the cores from grasses that no longer grow in the region.',
          C:'there was pollen in the cores from grasses that no longer grow in the region.',
          D:'it was the pollen in the cores that showed grasses no longer grow in the region.'},
        correct:'A',
        expCorrect:'La frase inicial «Drilled from the seabed» es un modificador participial, y tiene que describir al sujeto que viene inmediatamente después. Lo que se perforó del lecho marino son los núcleos (cores), así que el sujeto de la oración principal debe ser «the cores».',
        expWrong:{
          B:'Deja el modificador colgando sobre «researchers»: dice literalmente que los investigadores fueron perforados del lecho marino. Es el error clásico de modificador mal colocado.',
          C:'«There» no es un sujeto real que pueda ser perforado. El modificador queda sin nada a qué referirse.',
          D:'El sujeto pasa a ser «it», que apunta al polen, y el polen tampoco fue perforado del fondo del mar: fue extraído dentro de los núcleos.'
        },
        tip:'Cuando la oración abre con «-ing» o «-ed» seguido de coma, leé SOLO la primera palabra que viene después de la coma y preguntate: ¿esto es lo que hizo, o lo que recibió, la acción del modificador? Si no, la opción está mal por más bien que suene.'
      },
      {
        id:'RWM1-22', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Boundaries',
        passage:"Before 1900, campaigns against malaria assumed that the only path to control was the total removal of the insect that carried it — an aim that no program had ever achieved. Ross's equations pointed to a conclusion that reshaped public health policy ______ malaria could be defeated without killing every mosquito.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'policy:', B:'policy,', C:'policy, and', D:'policy; and'},
        correct:'A',
        expCorrect:'Lo que va antes es una oración completa que ANUNCIA algo —«una conclusión que…»— y lo que sigue es esa conclusión. Ese es exactamente el uso de los dos puntos: introducir la explicación, especificación o contenido de lo que se acaba de anunciar. Además la palabra «conclusion» pide su contenido.',
        expWrong:{
          B:'Una coma sola entre dos oraciones completas es empalme de comas. Y aunque no lo fuera, la coma no marca la relación de «esto es la conclusión».',
          C:'«, and» es gramaticalmente válido pero pierde el sentido: presenta las dos partes como hechos paralelos, cuando la segunda ES la conclusión de la que habla la primera.',
          D:'«; and» mezcla dos formas de unir que no se combinan: el punto y coma ya une, la conjunción también. Juntas sobran.'
        },
        tip:'Cuando la primera parte contiene una palabra que promete contenido —conclusion, reason, question, problem, discovery, following— y la segunda lo entrega, la respuesta son DOS PUNTOS. Es la señal más confiable de todo el dominio.'
      },

      /* ═══════════ EXPRESSION OF IDEAS (5) ═══════════
         Rhetorical Synthesis → Transitions, según el orden de habilidades del
         marco oficial (tabla 10). */

      {
        id:'RWM1-23', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis',
        passage:"While researching a topic, a student has taken the following notes:<br>• El ajolote es una salamandra originaria de unos pocos lagos cerca de la Ciudad de México.<br>• Puede regenerar un miembro completo —hueso, músculo, nervio y piel— en semanas.<br>• Lo hace repetidamente y sin dejar cicatriz.<br>• En estado salvaje está en peligro crítico de extinción.<br>• Es una de las especies más criadas en laboratorios del mundo.",
        stem:'The student wants to emphasize a contrast between the axolotl\'s situation in the wild and in laboratories. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Aunque el ajolote está en peligro crítico en su hábitat natural, es una de las especies más criadas en laboratorios del mundo.',
          B:'El ajolote, una salamandra originaria de unos pocos lagos cerca de la Ciudad de México, puede regenerar un miembro completo en semanas.',
          C:'El ajolote puede regenerar hueso, músculo, nervio y piel repetidamente y sin dejar cicatriz.',
          D:'El ajolote está en peligro crítico de extinción y es criado en laboratorios de todo el mundo.'},
        correct:'A',
        expCorrect:'El objetivo pide ENFATIZAR UN CONTRASTE entre dos situaciones. La opción A usa las dos notas relevantes (en peligro en la naturaleza / abundante en laboratorios) y las une con «Aunque», que es lo que marca el contraste explícitamente.',
        expWrong:{
          B:'Usa notas correctas pero sobre otro tema: origen y regeneración. No menciona ninguna de las dos situaciones que había que contrastar.',
          C:'Describe la capacidad de regeneración. Es información verdadera de las notas pero no cumple el objetivo pedido.',
          D:'Menciona las dos situaciones correctas, pero unidas con «y», que las presenta como hechos que se suman. Sin una palabra de contraste, el contraste no se enfatiza — que es justo lo que pedía la consigna.'
        },
        tip:'Estas se resuelven en dos pasos, en este orden: (1) ¿qué pide LA CONSIGNA?, (2) ¿qué opción lo cumple? Casi siempre hay una opción con información verdadera que no cumple el objetivo — es la trampa principal. Acá D es correcta como dato y falla como contraste.'
      },
      {
        id:'RWM1-24', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis',
        passage:"While researching a topic, a student has taken the following notes:<br>• Los núcleos de sedimento se perforan del fondo marino frente a África Occidental.<br>• Contienen capas de polen de pastos y de algas de agua dulce.<br>• Esas capas se depositaron hace apenas seis mil años.<br>• Durante el siglo XX se asumía que el Sáhara era árido desde hacía millones de años.<br>• Hoy el Sáhara es el desierto cálido más grande del mundo.",
        stem:'The student wants to present the sediment cores as evidence that overturned an earlier assumption. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Aunque durante el siglo XX se asumía que el Sáhara era árido desde hacía millones de años, los núcleos de sedimento contienen polen de agua dulce depositado hace apenas seis mil años.',
          B:'Los núcleos de sedimento, perforados del fondo marino frente a África Occidental, contienen capas de polen de pastos y de algas de agua dulce.',
          C:'El Sáhara, hoy el desierto cálido más grande del mundo, era árido desde hacía millones de años según se asumía en el siglo XX.',
          D:'Las capas de polen de los núcleos se depositaron hace apenas seis mil años, y hoy el Sáhara es el desierto cálido más grande del mundo.'},
        correct:'A',
        expCorrect:'El objetivo es presentar los núcleos como evidencia QUE DERRIBÓ una suposición previa. Eso exige tres cosas y A las tiene todas: la suposición vieja, la evidencia nueva, y la relación de contraste entre ambas («Aunque… los núcleos contienen…»).',
        expWrong:{
          B:'Describe la evidencia pero nunca menciona la suposición que derribó. Sin las dos partes no hay refutación, solo un dato.',
          C:'Presenta la suposición vieja como si fuera el punto, y no menciona los núcleos ni la evidencia. Hace lo contrario de lo pedido.',
          D:'Junta dos datos que no se oponen entre sí. Que el polen sea reciente y que hoy sea un desierto no derriba nada por sí solo: falta decir qué se creía antes.'
        },
        tip:'Cuando la consigna pide mostrar que algo «refutó», «cambió» o «derribó» una idea previa, la respuesta tiene que contener LAS DOS: la idea vieja y la evidencia nueva. Una opción que solo trae la evidencia siempre está incompleta.'
      },
      {
        id:'RWM1-25', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis',
        passage:"While researching a topic, a student has taken the following notes:<br>• Mary Kingsley sostenía que una especie debía estudiarse en el lugar donde vive.<br>• Los especímenes enviados a museos europeos llegaban sin su contexto.<br>• Los curadores respondían que la observación de campo no podía ser verificada por otros.<br>• Un espécimen preservado podía ser examinado por cien investigadores a lo largo de un siglo.<br>• El debate ocupó a los naturalistas durante buena parte del siglo XIX.",
        stem:'The student wants to explain why the curators\' position was difficult to dismiss, without endorsing it. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Los curadores admitían la pérdida de contexto, pero señalaban algo que la observación de campo no ofrecía: un espécimen preservado podía ser verificado por cien investigadores a lo largo de un siglo.',
          B:'Los curadores tenían razón: la observación de campo no podía ser verificada por otros, mientras que un espécimen preservado sí.',
          C:'Mary Kingsley sostenía que una especie debía estudiarse en el lugar donde vive, ya que los especímenes enviados a los museos llegaban sin su contexto.',
          D:'El debate entre naturalistas y curadores ocupó a los estudiosos durante buena parte del siglo XIX.'},
        correct:'A',
        expCorrect:'La consigna pide dos cosas a la vez: explicar la FUERZA del argumento de los curadores y NO respaldarlo. La opción A da la razón por la que era difícil descartarlo (la verificabilidad, que el campo no ofrecía) usando verbos de reporte —«admitían», «señalaban»— que atribuyen la postura a ellos sin que el estudiante la haga suya.',
        expWrong:{
          B:'Explica la fuerza del argumento pero abre con «Los curadores tenían razón», que es exactamente respaldarlo. Falla la mitad de la consigna, y es la trampa central de esta pregunta.',
          C:'Presenta la posición de Kingsley, es decir la contraria. No explica nada sobre los curadores.',
          D:'Habla de la duración del debate. Es información de las notas pero no explica ninguna posición.'
        },
        tip:'Cuando la consigna tiene DOS condiciones («explicar X sin hacer Y»), verificá las dos por separado en cada opción. La trampa favorita del SAT es una opción que cumple la primera de manera brillante y viola la segunda en la primera palabra.'
      },
      {
        id:'RWM1-26', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Transitions',
        passage:"The steam engine of 1712 was used almost exclusively to pump water out of mines, and it changed little outside that trade. ______ decades of modification by dozens of workshops eventually made the machine general-purpose enough to reorganize manufacturing.",
        stem:'Which choice completes the text with the most logical transition?',
        choices:{A:'However,', B:'Therefore,', C:'For example,', D:'Similarly,'},
        correct:'A',
        expCorrect:'La primera oración dice que la máquina cambió poco; la segunda, que terminó reorganizando la manufactura. Son ideas opuestas, y una transición de CONTRASTE es lo que corresponde: «However».',
        expWrong:{
          B:'«Therefore» marca consecuencia. Que la máquina cambiara poco no CAUSA que después lo cambiara todo: lo contradice.',
          C:'«For example» anuncia un ejemplo de lo anterior. La segunda oración no ejemplifica el uso limitado en minas, lo revierte.',
          D:'«Similarly» marca semejanza, y las dos oraciones dicen cosas contrarias.'
        },
        tip:'Ignorá la transición que trae el texto y resumí las dos oraciones en una palabra cada una. Después preguntate: ¿se parecen, se oponen, o una causa la otra? Recién ahí mirá las opciones. Elegir por «cuál suena bien» es el error que hace fallar estas.'
      },
      {
        id:'RWM1-27', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Transitions',
        passage:"The bar-tailed godwit nearly doubles its body weight in fat before departing, and its digestive organs shrink because they will not be needed aloft. The bird therefore carries the maximum fuel at the minimum weight. ______ a delay of even a few days on the Alaskan coast can consume enough of that reserve to put the crossing at risk.",
        stem:'Which choice completes the text with the most logical transition?',
        choices:{A:'Because of this precision,', B:'In addition,', C:'By contrast,', D:'Regardless,'},
        correct:'A',
        expCorrect:'La oración anterior establece que el ave lleva el máximo combustible con el mínimo peso, o sea que el margen es ajustadísimo. La oración que sigue explica la CONSECUENCIA de esa precisión: cualquier demora rompe el cálculo. «Because of this precision» nombra la causa y la conecta con su efecto.',
        expWrong:{
          B:'«In addition» suma un dato independiente, y acá la tercera oración no es un dato más: se deduce directamente de la segunda.',
          C:'«By contrast» marca oposición, pero la fragilidad ante una demora no se opone a la precisión del sistema — es su consecuencia.',
          D:'«Regardless» descarta lo anterior por irrelevante, y es justo al revés: la precisión de la oración previa es lo que EXPLICA el riesgo.'
        },
        tip:'Ojo con la diferencia entre «suma» y «se deduce». Si la oración siguiente se sigue lógicamente de la anterior, la transición es de consecuencia, no de adición. «In addition» es la trampa más frecuente en las de nivel medio.'
      }
    ]
  });
})();
