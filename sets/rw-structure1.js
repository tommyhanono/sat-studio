/* SAT Studio question set — Reading & Writing: Text Structure & Purpose + Conclusions (STR-01 a STR-12) */
window.SAT_SETS.push({
  id: 'rw-structure1',
  title: 'Text Structure & Purpose — Set 1',
  section: 'rw',
  level: 'Difícil',
  description: 'Overall structure, the function of a sentence, the author’s main purpose, and best concluding sentence.',
  minutes: 15,
  questions: [
    {
      id:'STR-01', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Purpose',
      passage:"Many people assume that all deserts are hot, but this is not the case. Antarctica is classified as a desert because it receives almost no precipitation, yet it is the coldest place on Earth. Scientists define a desert by how little rain or snow falls there, not by its temperature. A region qualifies as a desert whenever it stays extremely dry.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To correct a common misunderstanding about what makes a region a desert.',
        B:'To argue that Antarctica is the most surprising place on the planet.',
        C:'To describe the daily weather conditions found across Antarctica.',
        D:'To compare the size of hot deserts with the size of cold deserts.'
      },
      correct:'A',
      expCorrect:'El texto arranca con una suposición equivocada (“todos los desiertos son calientes”) y luego la corrige: un desierto se define por la falta de lluvia, no por la temperatura. El propósito es corregir ese malentendido común.',
      expWrong:{
        B:'Malinterpreta el propósito: el texto no “argumenta” que Antártida sea el lugar más sorprendente; usa Antártida como ejemplo para corregir una idea sobre los desiertos.',
        C:'Describe una parte, no el todo: el clima diario de Antártida no es el tema; el texto habla de cómo se DEFINE un desierto.',
        D:'No está apoyado: nunca compara el tamaño de los desiertos calientes y fríos. Es información de afuera.'
      },
      tip:'Para PURPOSE pregúntate: ¿por qué escribió esto el autor? Cuando el texto empieza con “muchos creen X, pero…”, casi siempre el propósito es corregir esa idea.'
    },
    {
      id:'STR-02', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Conclusions',
      passage:"A community garden was started on an empty city lot three years ago. At first only a few neighbors joined, planting a handful of vegetables. Today, dozens of families tend their own plots, children help with the harvest, and neighbors who once never spoke now share seeds and recipes.",
      stem:'Which choice most effectively concludes the text?',
      choices:{
        A:'Empty city lots can be found in almost every large urban area.',
        B:'Vegetables generally grow best when they receive plenty of sunlight.',
        C:'The neighbors had never tried gardening before the lot was cleared.',
        D:'The garden has grown into a space that brings the whole neighborhood together.'
      },
      correct:'D',
      expCorrect:'El texto va de un inicio pequeño (pocos vecinos, pocas verduras) a un presente amplio (decenas de familias, niños, vecinos que ahora comparten). La conclusión debe cerrar ese crecimiento: el jardín se volvió un espacio que une a todo el barrio. La opción D recoge esa idea.',
      expWrong:{
        A:'Se sale del tema: los lotes vacíos en otras ciudades no cierran ESTA historia sobre cómo creció este jardín en particular.',
        B:'Detalle general sin conexión: un consejo sobre el sol no concluye una historia sobre comunidad y crecimiento.',
        C:'Mira hacia atrás, no cierra: repite un detalle del inicio en vez de recoger el punto principal (el jardín ahora une al barrio).'
      },
      tip:'Para CONCLUSIONS, la mejor oración recoge la idea principal de TODO el párrafo. Sigue el movimiento del texto: aquí va de pequeño a grande, así que la conclusión debe cerrar ese crecimiento.'
    },
    {
      id:'STR-03', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Text Structure and Purpose',
      passage:"The bombardier beetle has an unusual way of defending itself. When a predator approaches, the beetle mixes two chemicals stored in separate chambers of its body. The reaction produces a hot, irritating spray that the beetle aims directly at the attacker, giving it a chance to escape.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It lists several unrelated beetles and ranks them by how dangerous they are.',
        B:'It introduces a defensive behavior and then explains the steps by which it works.',
        C:'It presents an argument and then offers evidence against that argument.',
        D:'It describes a problem and then proposes a solution for scientists to test.'
      },
      correct:'B',
      expCorrect:'El texto primero presenta un comportamiento de defensa (“una forma inusual de defenderse”) y luego explica los pasos: mezcla dos químicos, se produce un spray caliente, lo apunta al atacante y escapa. Es introducir algo y luego explicar cómo funciona.',
      expWrong:{
        A:'No está apoyado: el texto habla de UN solo escarabajo y no ordena varios por peligrosidad.',
        C:'Malinterpreta la estructura: no hay un argumento ni evidencia en contra; es una explicación, no un debate.',
        D:'No está apoyado: no se plantea un problema para que los científicos lo resuelvan; se describe cómo funciona una defensa.'
      },
      tip:'Para STRUCTURE describe el MOVIMIENTO del texto (de X a Y). Aquí va de “presenta un comportamiento” a “explica sus pasos”. Fíjate en el verbo: explica, no argumenta.'
    },
    {
      id:'STR-04', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Main Idea',
      passage:"Coral reefs cover less than one percent of the ocean floor, yet they support roughly a quarter of all marine species. Fish, crabs, sponges, and countless other organisms depend on reefs for food and shelter. Because so much ocean life is concentrated in these small areas, damage to a single reef can ripple outward through an entire marine community.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Coral reefs support a large share of ocean life, so harming them affects far more than the reef itself.',
        B:'Coral reefs are smaller than most people realize when they picture the ocean floor.',
        C:'Crabs and sponges are the marine animals most dependent on coral reefs for shelter.',
        D:'Marine communities can easily recover after a nearby coral reef is damaged.'
      },
      correct:'A',
      expCorrect:'El texto dice que los arrecifes son diminutos pero sostienen un cuarto de las especies marinas, y que por eso el daño a un arrecife se propaga a toda una comunidad marina. La idea central junta las dos: sostienen mucha vida, así que dañarlos afecta mucho más que al arrecife. Eso cubre todo el texto.',
      expWrong:{
        B:'Describe una parte, no el todo: el tamaño pequeño es solo el punto de partida; el foco es cuánta vida sostienen y qué pasa si se dañan.',
        C:'Detalle, no idea central: cangrejos y esponjas son ejemplos en una lista, no el punto principal del párrafo.',
        D:'Contradice el texto: dice que el daño se “propaga” por toda la comunidad, no que se recupere fácilmente.'
      },
      tip:'La idea central cubre TODO el párrafo, no una frase. Aquí la palabra “Because” conecta las dos partes: mucha vida + daño que se propaga. La respuesta debe unir ambas.'
    },
    {
      id:'STR-05', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose',
      passage:"The novelist spent her mornings writing in complete silence, refusing even to hear music. Some readers assume this habit made her work cold or mechanical. In fact, the quiet allowed her to notice the smallest rhythms of her own sentences, and critics praise her prose precisely for its musical, flowing quality.",
      stem:'Which choice best describes the function of the underlined sentence ("In fact, the quiet allowed her to notice the smallest rhythms of her own sentences, and critics praise her prose precisely for its musical, flowing quality.") in the text as a whole?',
      choices:{
        A:'It introduces the main topic of the passage for the first time.',
        B:'It provides a specific example of the silence the writer preferred.',
        C:'It overturns the assumption stated just before it by explaining the real effect of the writer’s habit.',
        D:'It raises a question that the rest of the passage leaves unanswered.'
      },
      correct:'C',
      expCorrect:'Justo antes se dice que algunos lectores SUPONEN que el silencio volvía su obra fría. La oración subrayada empieza con “In fact” y da vuelta esa suposición: el silencio en realidad le daba ritmo musical a su prosa. Su función es refutar la suposición previa explicando el efecto real.',
      expWrong:{
        A:'Malinterpreta la función: el tema (su hábito de escribir en silencio) ya se presentó en la primera oración, no en la subrayada.',
        B:'No está apoyado: la oración no da un ejemplo del silencio; corrige lo que otros suponían sobre ese silencio.',
        D:'Contradice el texto: no deja una pregunta abierta; da una respuesta (el efecto positivo real del silencio).'
      },
      tip:'Para FUNCTION mira qué hace la oración DENTRO del texto. Señales como “In fact” o “yet” suelen marcar un giro: la oración contradice o corrige lo que se dijo antes.'
    },
    {
      id:'STR-06', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Conclusions',
      passage:"Researchers wanted to know whether background noise affects concentration. They asked one group to solve puzzles in a silent room and another to solve the same puzzles with café chatter playing. The silent group finished faster and made fewer errors. These results suggest that",
      stem:'Which choice most logically states the main conclusion of the text?',
      choices:{
        A:'puzzles are the best way to measure a person’s overall intelligence.',
        B:'a quieter environment can help people concentrate more effectively on a task.',
        C:'café chatter is more pleasant to listen to than complete silence.',
        D:'the two groups of participants were equally skilled at solving puzzles.'
      },
      correct:'B',
      expCorrect:'El estudio compara silencio vs. ruido de café: el grupo en silencio terminó más rápido y con menos errores. La conclusión lógica es que un ambiente más silencioso ayuda a concentrarse mejor. La opción B generaliza justo lo que mostró el experimento.',
      expWrong:{
        A:'Se sale del tema: el estudio mide el efecto del ruido, no si los rompecabezas miden la inteligencia general.',
        C:'No está apoyado: el texto no dice nada sobre qué sonido es más “agradable”; mide rendimiento, no gusto.',
        D:'Contradice el resultado: si fueran igual de hábiles rindiendo igual, no habría diferencia; el grupo en silencio rindió mejor.'
      },
      tip:'Para CONCLUSIONS de un estudio, la respuesta generaliza el RESULTADO. Aquí el dato (silencio = más rápido y menos errores) apunta directo a “el silencio ayuda a concentrarse”.'
    },
    {
      id:'STR-07', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Purpose',
      passage:"In the early days of film, movies had no synchronized sound, so actors relied entirely on gestures and facial expressions. When sound arrived in the late 1920s, some silent-film stars struggled, since their exaggerated style no longer suited the new medium. Others adapted quickly, learning to speak lines in a natural, understated way.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To argue that silent films were more artistic than films with sound.',
        B:'To celebrate one particular actor’s success in the era of sound.',
        C:'To describe the technology that made synchronized sound possible.',
        D:'To explain how the arrival of sound changed the demands placed on film actors.'
      },
      correct:'D',
      expCorrect:'El texto contrasta la época muda (solo gestos) con la llegada del sonido, y muestra que algunas estrellas batallaron y otras se adaptaron. El propósito es explicar cómo el sonido cambió lo que se les exigía a los actores.',
      expWrong:{
        A:'Malinterpreta el propósito: el texto describe un cambio, no “argumenta” que el cine mudo fuera más artístico. No hay juicio de valor.',
        B:'Describe una parte, no el todo: no hay un actor específico celebrado; habla de estrellas en general (unas batallaron, otras se adaptaron).',
        C:'No está apoyado: no explica la tecnología del sonido; explica su EFECTO sobre los actores.'
      },
      tip:'Para PURPOSE fíjate en el verbo correcto: aquí el autor “explica” un cambio, no “argumenta” ni “celebra”. Elegir bien el verbo suele decidir la respuesta.'
    },
    {
      id:'STR-08', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Main Idea',
      passage:"For decades, sourdough bread was made using wild yeast captured from the air and flour, a slow process that could take days. Modern commercial baking often replaces this with fast-acting packaged yeast, cutting the time to a few hours. Yet many bakers still choose the older method, arguing that the long fermentation gives the bread a deeper, more complex flavor.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Packaged yeast has completely replaced wild yeast in nearly all modern bakeries.',
        B:'Sourdough bread is the healthiest type of bread a person can eat.',
        C:'Although faster yeast exists, many bakers keep the slow traditional method for the flavor it produces.',
        D:'Capturing wild yeast from the air is the most difficult step in baking bread.'
      },
      correct:'C',
      expCorrect:'El texto contrasta el método lento y tradicional con la levadura rápida moderna, y termina con “Yet”: muchos panaderos siguen prefiriendo lo lento por el sabor más complejo. La idea central junta el contraste y esa preferencia por el sabor.',
      expWrong:{
        A:'Contradice el texto: dice que MUCHOS panaderos siguen usando el método viejo, así que la levadura de paquete no lo “reemplazó por completo”.',
        B:'No está apoyado: el texto habla de sabor y tiempo, nunca de que sea el pan “más saludable”. Es información de afuera.',
        D:'Describe una parte, no el todo: capturar levadura salvaje es un detalle del proceso, no el punto principal del párrafo.'
      },
      tip:'La palabra “Yet” marca el giro clave: pese a existir algo más rápido, se prefiere lo lento. La idea central casi siempre vive en ese contraste, no en un detalle suelto.'
    },
    {
      id:'STR-09', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Text Structure and Purpose',
      passage:"Economists once treated human decisions as almost perfectly rational, assuming people always weigh costs and benefits with cool logic. Then a series of experiments revealed something different: people routinely overvalue what they already own, fear losses more than they enjoy equivalent gains, and are swayed by how choices are worded. Out of these findings grew behavioral economics, a field devoted to studying how real people actually decide.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It defines a single economic term and then lists examples of that term in daily life.',
        B:'It presents an older view, introduces evidence that challenges it, and describes the new field that resulted.',
        C:'It argues that traditional economists were dishonest about their assumptions.',
        D:'It compares two present-day fields of economics that remain equally popular.'
      },
      correct:'B',
      expCorrect:'El texto se mueve en tres tiempos: primero la visión vieja (la gente es racional), luego “Then” aparece evidencia que la desafía (sobrevaloramos lo nuestro, tememos las pérdidas), y por último surge un campo nuevo (economía del comportamiento). La opción B captura ese movimiento de vieja idea → evidencia → campo nuevo.',
      expWrong:{
        A:'Describe una parte, no el todo: hay ejemplos, pero el texto no se limita a definir un término; narra un cambio de visión a lo largo del tiempo.',
        C:'Malinterpreta el propósito: el texto dice que los economistas se EQUIVOCABAN en un supuesto, no que fueran “deshonestos”. El verbo importa.',
        D:'No está apoyado: no compara dos campos actuales igual de populares; muestra cómo uno viejo dio paso a uno nuevo.'
      },
      tip:'Para STRUCTURE traza el MOVIMIENTO completo. Palabras como “once… Then… Out of these findings grew” marcan tres etapas: idea vieja, evidencia en contra y resultado nuevo.'
    },
    {
      id:'STR-10', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Text Structure and Purpose',
      passage:"The essay opens by praising the convenience of instant global communication, listing the ways messages now cross the planet in seconds. Halfway through, however, the author pauses to ask what is lost when every reply is expected immediately. The remaining paragraphs explore how constant availability can erode the slow, reflective thinking that longer letters once encouraged.",
      stem:'Which choice best describes the function of the underlined sentence ("Halfway through, however, the author pauses to ask what is lost when every reply is expected immediately.") in the text as a whole?',
      choices:{
        A:'It restates the essay’s opening praise using slightly different wording.',
        B:'It provides statistical evidence about how fast messages travel today.',
        C:'It concludes the passage by resolving the author’s earlier doubts.',
        D:'It marks a turning point where the text shifts from praising a trend to questioning its costs.'
      },
      correct:'D',
      expCorrect:'La primera parte elogia la comunicación instantánea; la oración subrayada, con “however”, es el punto donde el autor se detiene a preguntar qué se pierde. A partir de ahí el texto explora los costos. Su función es marcar el giro de elogiar a cuestionar.',
      expWrong:{
        A:'Contradice el texto: no repite el elogio; lo pone en duda. “However” señala un cambio de rumbo, no una repetición.',
        B:'No está apoyado: la oración no da estadísticas; plantea una pregunta sobre lo que se pierde.',
        C:'Malinterpreta la posición: está a la MITAD y abre la duda; no concluye ni resuelve nada. Las dudas se exploran después.'
      },
      tip:'Para FUNCTION ubica la oración dentro del arco del texto. Si va a la mitad y trae “however”, casi siempre es el pivote: separa la primera parte de la segunda.'
    },
    {
      id:'STR-11', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Conclusions',
      passage:"A team restoring an old wetland removed a concrete channel and let the river spread naturally across the land again. Within two years, native plants returned, migrating birds began stopping there once more, and the water ran clearer than it had in decades. The project cost less than the engineers had feared, and neighboring towns reported fewer floods downstream.",
      stem:'Which choice most effectively concludes the text by stating its main conclusion?',
      choices:{
        A:'Concrete channels are still necessary in most rivers to prevent serious flooding.',
        B:'The migrating birds that returned were the same species seen in the region long ago.',
        C:'Letting the wetland function naturally produced ecological and practical benefits that exceeded expectations.',
        D:'The engineers who planned the project had studied wetlands for many years.'
      },
      correct:'C',
      expCorrect:'El texto acumula beneficios: volvieron las plantas y las aves, el agua quedó más limpia, costó menos de lo temido y hubo menos inundaciones. La conclusión debe recoger todo eso: dejar que el humedal funcione solo trajo beneficios ecológicos y prácticos que superaron lo esperado. La opción C cubre el conjunto.',
      expWrong:{
        A:'Contradice el texto: quitaron el canal de concreto y salió BIEN (menos inundaciones), así que decir que el concreto “sigue siendo necesario” va en contra de la evidencia.',
        B:'Detalle sin base, no conclusión: el texto no dice que sean las MISMAS especies de antaño, y aunque lo fueran, es un detalle, no el punto principal.',
        D:'Se sale del foco: la experiencia de los ingenieros no cierra la historia; la conclusión es sobre los resultados de la restauración.'
      },
      tip:'Para CONCLUSIONS, cuando el texto apila varios resultados, la mejor oración los RESUME todos, no rescata uno solo. Fíjate si los datos son ecológicos y prácticos: la respuesta debe abarcar ambos.'
    },
    {
      id:'STR-12', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Purpose',
      passage:"A historian studying an ancient city could rely only on written records left by its rulers, which naturally emphasized victories and grand building projects. By adding evidence from garbage pits, worn tools, and the layout of ordinary homes, she reconstructed the daily lives of workers and traders the official texts ignored. Her book argues that such physical remains can reveal a fuller, more honest picture of the past than documents alone.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To show how physical evidence can reveal aspects of the past that written records leave out.',
        B:'To describe the specific tools and garbage pits found at one ancient city.',
        C:'To argue that written records left by rulers are entirely worthless to historians.',
        D:'To recount the biography of a single historian and her academic career.'
      },
      correct:'A',
      expCorrect:'El texto muestra que los textos oficiales solo contaban victorias y grandes obras, y que al sumar restos físicos (basureros, herramientas, casas) la historiadora reconstruyó la vida diaria que los documentos ignoraban. El propósito es mostrar cómo la evidencia física revela lo que los registros escritos dejan fuera.',
      expWrong:{
        B:'Describe una parte, no el todo: las herramientas y basureros son ejemplos; el punto es qué revelan, no un inventario de lo hallado.',
        C:'Exagera y malinterpreta: el texto dice que los restos dan un cuadro MÁS completo, no que los registros escritos sean “totalmente inútiles”. Es demasiado extremo.',
        D:'Confunde el foco: no es la biografía de la historiadora; ella es el vehículo para mostrar el valor de la evidencia física.'
      },
      tip:'Para PURPOSE resume la idea que sostiene TODO el texto, no un ejemplo. Cuidado con distractores “extremos” (como “totalmente inútiles”): el texto suma evidencia, no descarta la otra por completo.'
    }
  ]
});
