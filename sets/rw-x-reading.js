/* SAT Studio question set — Reading & Writing: Extreme — Reading (XR-01 a XR-12) */
window.SAT_SETS.push({
  id: 'rw-x-reading',
  title: 'Extreme — Reading',
  section: 'rw',
  level: 'Extreme',
  description: 'Hard-Module-2 level: literary irony, hedged-science support/weaken, and cross-text nuance.',
  minutes: 18,
  questions: [
    // ---------- LITERARY (4) ----------
    {
      id:'XR-01', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Text Structure and Purpose',
      passage:"Mrs. Harmsworth had, everyone agreed, the finest charitable instincts in the parish, and she was careful to give them frequent exercise before an audience. When the vicar proposed a subscription for the widowed lace-makers, she was the first to pledge—loudly, and in a sum precisely large enough to be remembered and precisely small enough to be spared. Her generosity, in short, was of that admirable kind which costs the giver nothing but the trouble of being seen.",
      stem:'Which choice best describes the function of the final sentence in the text as a whole?',
      choices:{
        A:'It praises Mrs. Harmsworth for a generosity that asks little of her yet aids the widowed lace-makers.',
        B:'It resolves the narrator’s earlier uncertainty about whether Mrs. Harmsworth would contribute at all.',
        C:'It recasts the preceding account of Mrs. Harmsworth’s giving as vanity dressed in the language of virtue.',
        D:'It shifts the passage’s attention from Mrs. Harmsworth toward the plight of the lace-makers she assists.'
      },
      correct:'C',
      expCorrect:'La frase final usa palabras de elogio (“admirable kind”) pero las vacía: una generosidad que “no le cuesta nada salvo la molestia de ser vista”. Eso reinterpreta con ironía todo lo anterior —la suma calculada, el pledge en voz alta— como vanidad disfrazada de virtud. Esa es su función: cerrar el retrato revelando el verdadero motivo.',
      expWrong:{
        A:'Cae en la trampa literal: lee “admirable” en serio. El texto es irónico —“costs the giver nothing but the trouble of being seen”— así que NO elogia; desenmascara.',
        B:'Inventa un suspenso que no existe: el narrador nunca dudó de si daría. De hecho “was the first to pledge”. No se resuelve ninguna incertidumbre.',
        D:'El foco nunca se mueve hacia las encajeras; ellas son solo el escenario. La frase sigue clavada en el carácter de Mrs. Harmsworth.'
      },
      tip:'Cuando una frase elogia con palabras demasiado perfectas (“admirable”, “finest”) y luego añade una condición que la deshace, sospecha ironía. La función suele ser revelar, no alabar.'
    },
    {
      id:'XR-02', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Inferences',
      passage:"It was understood in the family that Gerald had sacrificed his prospects to remain at home and care for his mother, and Gerald did nothing to disturb the understanding. That the arrangement spared him the exertions of a profession, the hazards of independence, and the humiliation of being measured against abler men—these were considerations he never named to himself, and would have met with genuine astonishment had another named them for him.",
      stem:'The text most strongly suggests that Gerald’s remaining at home was',
      choices:{
        A:'convenient to him in ways he sincerely kept himself from recognizing.',
        B:'motivated by an attachment to his mother that the family failed to appreciate.',
        C:'a deliberate deception by which he knowingly extracted the family’s admiration.',
        D:'a source of private regret over the profession he had given up.'
      },
      correct:'A',
      expCorrect:'El texto dice que las ventajas (evitar el trabajo, los riesgos, la comparación con hombres más capaces) eran cosas que Gerald “never named to himself” y ante las que sentiría “genuine astonishment”. O sea: le convenía, pero de verdad se impedía verlo. A captura ese autoengaño sincero.',
      expWrong:{
        C:'“Deliberate deception… knowingly” contradice el texto: precisamente NO lo sabía; su asombro sería “genuine” (auténtico). No es un farsante consciente.',
        B:'Trampa sentimental: el texto no presenta un cariño real incomprendido; ironiza que el “sacrificio” le convenía. No hay evidencia de apego genuino ignorado.',
        D:'“Regret over the profession” invierte el sentido: el texto dice que se le ahorraron “las exertions of a profession”. No hay arrepentimiento; hay alivio no reconocido.'
      },
      tip:'Ojo con “never named to himself” + “genuine astonishment”: marca autoengaño, no cálculo consciente ni virtud. La inferencia debe respetar que él mismo NO lo ve.'
    },
    {
      id:'XR-03', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Purpose',
      passage:"The new drawing-room was pronounced a triumph. Every object in it had been chosen to declare that its owners knew what was correct, and the effect was so complete that a visitor felt at once the impossibility of ever being comfortable there. The chairs, in particular, had been designed by a man of taste, and it was said that no one had ever sat in one twice.",
      stem:'The narrator mentions the chairs primarily to',
      choices:{
        A:'illustrate the high cost of the furnishings the owners had acquired.',
        B:'give a concrete instance of a room whose correctness defeats its own comfort.',
        C:'suggest that the owners rarely received visitors in the drawing-room.',
        D:'commend the skill of the designer who had been engaged for the work.'
      },
      correct:'B',
      expCorrect:'Antes, el texto dice que la sala es tan “correcta” que uno siente “the impossibility of ever being comfortable there”. Las sillas son el ejemplo concreto: diseñadas por un hombre de gusto, pero “no one had ever sat in one twice” (nadie se sentó dos veces = incómodas). Ilustran esa idea: la corrección vence a la comodidad.',
      expWrong:{
        A:'El costo nunca se menciona; el tema es el gusto y la incomodidad, no el precio. Es un detalle que el texto no toca.',
        C:'Trampa literal de “no one had ever sat in one twice”: no dice que no reciban visitas, sino que quien se sienta no repite —porque son incómodas. Confunde la broma con un dato de frecuencia de visitas.',
        D:'Lee “a man of taste” en serio como elogio. Es irónico: el gran gusto produjo sillas en las que nadie se sienta dos veces. No busca alabar al diseñador.'
      },
      tip:'Un ejemplo casi siempre sirve para probar la afirmación que lo precede. Aquí la afirmación es “correcta pero incómoda”; la silla es su prueba, no un dato sobre visitas o precios.'
    },
    {
      id:'XR-04', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Text Structure and Purpose',
      passage:"Miss Verrall had reached the age at which a woman is complimented on her frankness, frankness being the only charm that improves with keeping. She said exactly what she thought, and her acquaintances forgave her on the ground that she thought so little; for there is a candour that wounds because it is discerning, and another that is pardoned because it is not.",
      stem:'The narrator’s remark that Miss Verrall’s acquaintances “forgave her on the ground that she thought so little” chiefly serves to',
      choices:{
        A:'defend Miss Verrall against neighbors who resented her honest opinions.',
        B:'establish that Miss Verrall was widely admired for the wisdom of her observations.',
        C:'explain that Miss Verrall’s advancing age had made her companions more tolerant of her.',
        D:'qualify the earlier compliment by implying her frankness is harmless because it is shallow.'
      },
      correct:'D',
      expCorrect:'El texto elogia su “frankness”, pero el cierre distingue dos franquezas: una que hiere “because it is discerning” y otra que se perdona “because it is not”. Al decir que la perdonan porque “thought so little”, la coloca en la segunda: inofensiva por superficial. La frase matiza (rebaja) el cumplido anterior.',
      expWrong:{
        A:'No la defiende de nadie; el narrador es quien la punza. “Forgave her… she thought so little” es un desprecio elegante, no una defensa.',
        C:'Trampa con “age”: la edad aparece antes, pero el perdón se atribuye a que piensa poco, no a que los demás se ablandaron con los años. Confunde dos causas.',
        B:'Invierte el sentido: la última cláusula niega que sus juicios sean “discerning”. No la admiran por su sabiduría; la toleran por su falta de ella.'
      },
      tip:'Frases del tipo “X, siendo X lo único que mejora al guardarse” y contrastes gemelos (“wounds… / pardoned…”) son señales de ironía. Busca la opción que rebaja el elogio, no la que lo repite.'
    },
    // ---------- HEDGED-SCIENCE SUPPORT / WEAKEN (5) ----------
    {
      id:'XR-05', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (textual)',
      passage:"Certain desert shrubs release chemicals from their roots that inhibit the germination of seeds nearby. Researchers hypothesize that this suppression is not merely a byproduct of the shrub’s metabolism but an adaptation that reduces competition for scarce water by keeping the soil immediately around each shrub relatively bare. They caution, however, that a bare zone could also arise simply because the shrub’s own roots deplete the local water first.",
      stem:'Which finding, if true, would most directly support the researchers’ hypothesis?',
      choices:{
        A:'The chemicals released by the shrubs break down rapidly once they enter the surrounding soil.',
        B:'In well-watered plots, the shrubs continue to release the germination-inhibiting chemicals at the same rate as in dry plots.',
        C:'Seedlings of species that compete with the shrub for water are suppressed far more strongly than seedlings that draw water from deeper layers the shrub does not use.',
        D:'The bare zone around each shrub is roughly the same width as the spread of the shrub’s own root system.'
      },
      correct:'C',
      expCorrect:'La hipótesis es que la supresión es una ADAPTACIÓN para reducir la competencia por agua, no un simple subproducto. C lo apoya con precisión: el químico golpea mucho más a las plántulas que SÍ compiten por el agua y casi no a las que usan agua profunda que el arbusto no aprovecha. Ese blanco selectivo es justo lo que esperarías de una adaptación contra competidores, no de un efecto ciego.',
      expWrong:{
        A:'Que el químico se degrade rápido es un dato de química del suelo; no dice nada sobre si su función es reducir competencia por agua. Verdadero pero irrelevante.',
        B:'Que se libere igual con o sin agua toca el mecanismo (es constitutivo), pero no distingue “adaptación anticompetencia” de “subproducto metabólico”; de hecho un subproducto también saldría igual. No apoya LA afirmación.',
        D:'Que la zona pelada coincida con el ancho de las raíces apoya la explicación RIVAL del texto (el arbusto seca el agua local primero), no la hipótesis de adaptación química. Apoya la claim vecina equivocada.'
      },
      tip:'La hipótesis distingue “adaptación con propósito” de “subproducto”. Apóyala con evidencia de selectividad dirigida a competidores (C), no con datos que igual valdrían para la explicación rival.'
    },
    {
      id:'XR-06', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (textual)',
      passage:"A team studying a songbird found that males raised in isolation still produce a rough version of the species’ song. They propose that the basic template of the song is innate rather than learned, though they note that the isolated males’ songs remain abnormal in pitch and timing, and that only exposure to adult tutors yields a fully typical song.",
      stem:'Which finding, if true, would most directly weaken the team’s proposal?',
      choices:{
        A:'Isolated males that are later exposed to adult tutors go on to sing fully typical songs.',
        B:'Males raised in isolation but able to hear their own vocalizations develop the rough song, whereas males also deafened early produce no recognizable song at all.',
        C:'The abnormal pitch of isolated males’ songs disappears completely once the birds mature.',
        D:'Different populations of the species sing dialects that differ noticeably in their fine details.'
      },
      correct:'B',
      expCorrect:'La propuesta es que la PLANTILLA básica del canto es innata (no aprendida). B la debilita: si los aislados solo logran el canto rugoso cuando pueden OÍRSE a sí mismos, y los ensordecidos temprano no producen nada reconocible, entonces incluso ese canto “básico” depende de aprender por retroalimentación auditiva —no es puramente innato. Ataca el núcleo de la afirmación.',
      expWrong:{
        A:'Que con tutores canten normal es lo que el texto YA admite y encaja con su propuesta (lo innato es solo la plantilla). No la debilita; es consistente.',
        C:'Que el tono anormal desaparezca al madurar toca la maduración del canto, no si la plantilla es innata o aprendida. Verdadero pero irrelevante a la claim.',
        D:'Los dialectos entre poblaciones afectan los detalles finos —que el texto ya atribuye al aprendizaje del tutor—, no la plantilla básica innata. Debilita una claim vecina, no LA claim.'
      },
      tip:'Para debilitar “X es innato”, busca evidencia de que X en realidad requiere experiencia/aprendizaje (aquí, oírse a sí mismo). Lo que solo afecta los “detalles finos” no toca la plantilla básica.'
    },
    {
      id:'XR-07', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (textual)',
      passage:"Analyzing sediment cores from a lake, geologists found a layer rich in charcoal dating to about 1,200 years ago. They hypothesize that the charcoal records a single large wildfire, rather than the gradual accumulation of soot from many small fires, since such a blaze would explain the abrupt shift in vegetation seen in pollen from the same layer. They acknowledge that wind could carry charcoal from distant fires into the lake.",
      stem:'Which finding, if true, would most directly support the geologists’ hypothesis?',
      choices:{
        A:'Charcoal appears in smaller amounts in several layers both above and below the charcoal-rich layer.',
        B:'The pollen in layers just above the charcoal-rich layer indicates vegetation typical of a cooler, wetter climate.',
        C:'Lakes elsewhere in the region contain charcoal layers dating to a variety of different centuries.',
        D:'The charcoal-rich layer contains large, angular charcoal fragments of a size that wind cannot transport far, concentrated in a single thin band.'
      },
      correct:'D',
      expCorrect:'La hipótesis: el carbón registra UN solo incendio grande y local, no acumulación de muchos fuegos lejanos. D lo apoya directo: fragmentos grandes y angulares que el viento NO puede llevar lejos, concentrados en una banda fina y única → un incendio grande cercano y puntual, descartando la alternativa del viento y de muchos fuegos pequeños.',
      expWrong:{
        A:'Carbón en capas por encima y por debajo sugiere fuegos recurrentes o soot gradual —eso va EN CONTRA de la idea de un evento único. Si acaso, debilita.',
        C:'Que otros lagos tengan capas de siglos variados es contexto regional; no dice nada sobre si ESTA capa es un incendio único. Verdadero pero irrelevante.',
        B:'El polen de un clima más frío/húmedo describe qué pasó DESPUÉS con la vegetación, no si el carbón vino de un solo incendio grande. Apoya una claim vecina (el cambio de vegetación), no la del origen del carbón.'
      },
      tip:'“Un solo evento local” se apoya mostrando que el material no pudo venir de lejos ni acumularse poco a poco (fragmentos grandes, banda única). Datos sobre lo que vino después no tocan el origen.'
    },
    {
      id:'XR-08', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (textual)',
      passage:"In a trial, patients who kept a daily gratitude journal reported better sleep than those who journaled about daily events. The researchers suggest the benefit comes specifically from focusing on positive experiences, not from the act of writing itself. They concede that patients knew which kind of journal they were assigned, which may have shaped their expectations.",
      stem:'Which finding, if true, would most directly weaken the researchers’ suggestion?',
      choices:{
        A:'A third group that wrote about neutral daily events reported the same improvement in sleep as the gratitude group.',
        B:'Patients in the gratitude group wrote entries that were, on average, slightly longer than those in the events group.',
        C:'Patients in both groups reported that they enjoyed the habit of journaling each night.',
        D:'The gratitude group’s sleep improvement was largest among patients who already slept relatively well.'
      },
      correct:'A',
      expCorrect:'La sugerencia: el beneficio viene ESPECÍFICAMENTE de enfocarse en lo positivo, no del acto de escribir. A la debilita de lleno: un tercer grupo que escribió sobre eventos NEUTRALES mejoró igual que el de gratitud → entonces el beneficio no depende del contenido positivo sino del escribir mismo. Ataca justo el “específicamente positivo”.',
      expWrong:{
        B:'Que las entradas de gratitud fueran un poco más largas es un detalle de forma; no muestra que el escribir (y no el contenido positivo) sea la causa. Verdadero pero irrelevante.',
        C:'Que a ambos grupos les gustara escribir no separa “contenido positivo” de “acto de escribir”; ambos escribían. No debilita la afirmación específica.',
        D:'Que la mejora fuera mayor en quienes ya dormían bien habla de en QUIÉN funciona más, no de si la causa es el contenido positivo vs. escribir. No toca la claim.'
      },
      tip:'Para debilitar “el efecto viene del contenido positivo, no del acto de escribir”, busca un grupo que escriba SIN contenido positivo y mejore igual (A). Eso reasigna la causa al acto de escribir.'
    },
    {
      id:'XR-09', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (textual)',
      passage:"Marine biologists observed that a species of cleaner fish removes parasites from larger “client” fish. They hypothesize that the cleaners deliberately provide good service to clients that can easily swim to a rival cleaning station, reserving cheating—biting the client’s healthy mucus—for clients with no nearby alternative. They note that clients also differ in size and temperament.",
      stem:'Which finding, if true, would most directly support the biologists’ hypothesis?',
      choices:{
        A:'Cleaners bite the mucus of large and small clients at roughly equal rates.',
        B:'Clients frequently return to the same cleaning station over many days.',
        C:'When a rival cleaning station is experimentally placed nearby, cleaners noticeably reduce how often they bite the same clients they had been cheating.',
        D:'Cleaners spend more total time servicing large clients than small ones.'
      },
      correct:'C',
      expCorrect:'La hipótesis: los limpiadores dan buen servicio (no hacen trampa) justo cuando el cliente PUEDE irse a una estación rival, y engañan cuando no hay alternativa. C es una prueba directa: al colocar una estación rival cerca, los limpiadores reducen las mordidas a esos mismos clientes → el comportamiento cambia con la disponibilidad de alternativa, tal como predice la hipótesis.',
      expWrong:{
        A:'Morder igual a grandes y pequeños habla de tamaño, que el texto menciona aparte; no dice nada sobre la variable clave: tener o no una estación rival cerca. Verdadero pero irrelevante.',
        B:'Que los clientes vuelvan a la misma estación muestra fidelidad, no que el limpiador ajuste su trampa según la existencia de alternativas. No apoya el mecanismo propuesto.',
        D:'Pasar más tiempo con clientes grandes toca tamaño/temperamento, una claim vecina que el texto separa; no la afirmación sobre la opción de escape del cliente.'
      },
      tip:'La hipótesis liga la conducta a UNA variable (¿hay estación rival cerca?). Apóyala con el experimento que manipula esa variable (C), no con datos sobre tamaño o fidelidad.'
    },
    // ---------- CROSS-TEXT NUANCE (3) ----------
    {
      id:'XR-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Cross-Text Connections',
      passage:"<b>Text 1</b><br>A survey of remote-working employees found that those who worked from home reported higher job satisfaction and fewer intentions to quit than in-office peers. The authors conclude that remote arrangements make workers happier and that firms should expand them broadly to retain talent.<br><br><b>Text 2</b><br>Dr. Ibáñez does not dispute the survey’s numbers: remote workers in it truly were more satisfied. But she notes that employees were not assigned to remote work at random; the firm granted it mainly to its most senior, autonomous staff. Their satisfaction, she argues, may reflect who was chosen for remote work rather than the arrangement itself.",
      stem:'Based on the texts, how would Dr. Ibáñez (Text 2) most likely respond to the conclusion in Text 1?',
      choices:{
        A:'By accepting the survey data but questioning whether remote work itself, rather than the type of employee granted it, caused the higher satisfaction.',
        B:'By disputing the survey’s finding that remote workers reported higher satisfaction than in-office peers.',
        C:'By agreeing that firms should expand remote work broadly in order to retain their most talented employees.',
        D:'By arguing that in-office employees are, in general, more satisfied than the survey was able to detect.'
      },
      correct:'A',
      expCorrect:'Ibáñez “does not dispute the survey’s numbers” (acepta los datos), pero señala que el trabajo remoto se dio sobre todo al personal más senior y autónomo. Por eso duda de la INFERENCIA causal de Text 1: la satisfacción podría reflejar A QUIÉN eligieron, no el arreglo en sí. A dice exactamente eso: acepta los datos, cuestiona la causa.',
      expWrong:{
        B:'Trampa de desacuerdo total: el texto dice explícitamente que NO disputa los números (“truly were more satisfied”). No niega el hallazgo, niega la causa.',
        C:'Trampa de acuerdo total: coincidir en expandir el remoto es la conclusión de Text 1 que ella pone en duda. Ibáñez no la respalda.',
        D:'Inventa una afirmación que ella nunca hace: no sostiene que los de oficina sean más satisfechos “en general”. Solo cuestiona la causa de los datos existentes.'
      },
      tip:'Cuando el Texto 2 “no disputa los números” pero habla de selección/asignación no aleatoria, su objeción es a la CAUSA (correlación ≠ causa), no al dato. Evita las trampas de acuerdo o desacuerdo total.'
    },
    {
      id:'XR-11', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Cross-Text Connections',
      passage:"<b>Text 1</b><br>Reviewing dozens of studies, a psychologist concludes that background music impairs reading comprehension. Across the studies, readers who studied in silence generally scored higher on comprehension tests than those who studied with music playing.<br><br><b>Text 2</b><br>Professor Okafor accepts that, on average, music lowered comprehension in these studies. Yet he stresses that the effect nearly vanished for simple texts and for music without lyrics; the sharp declines came almost entirely from lyric-heavy music paired with demanding texts. To say music impairs comprehension, he contends, is true only within that narrower band of conditions.",
      stem:'Based on the texts, Professor Okafor (Text 2) would most likely characterize the conclusion in Text 1 as',
      choices:{
        A:'mistaken, because in his reading of the studies music generally improved comprehension rather than harming it.',
        B:'broadly correct but incomplete, because the impairment depends heavily on factors Text 1 does not distinguish.',
        C:'well founded, since the studies uniformly show that any background music impairs comprehension.',
        D:'too cautious, because music impairs comprehension even more severely than Text 1 concludes.'
      },
      correct:'B',
      expCorrect:'Okafor “accepts that, on average, music lowered comprehension”, así que no la llama errónea. Pero matiza el ALCANCE: el efecto casi desaparece con textos simples y música sin letra, y se concentra en música con letra + textos difíciles. O sea: la conclusión general es correcta pero incompleta porque no distingue esas condiciones. Eso es B.',
      expWrong:{
        A:'Trampa de desacuerdo total: él NO dice que la música mejore la comprensión; acepta que en promedio la baja. Contradice el texto.',
        C:'Trampa de acuerdo total: “uniformly… any background music” es justo lo que él niega —el efecto “nearly vanished” en varias condiciones. No es uniforme.',
        D:'Invierte su postura: no dice que el daño sea aún peor, sino que es más ESTRECHO de lo que sugiere Text 1. “Too cautious” es lo contrario de su objeción de alcance.'
      },
      tip:'Cuando el Texto 2 acepta el promedio pero dice “solo bajo ciertas condiciones / casi desaparece en otras”, su objeción es de ALCANCE: correcto pero incompleto. No es ni acuerdo total ni rechazo total.'
    },
    {
      id:'XR-12', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Cross-Text Connections',
      passage:"<b>Text 1</b><br>Archaeologists discovered fine imported pottery in the ruins of an ancient inland town far from any coast. They argue this proves the town’s residents were wealthy, since only prosperous people could afford goods carried over such long distances.<br><br><b>Text 2</b><br>Dr. Petrova finds the pottery genuine and agrees imported goods often signal wealth. But she observes that the pieces were all concentrated in a single building beside the town gate—plausibly a waystation where passing traders stored goods, not homes where residents used them. The pottery, she suggests, may reveal the town’s location on a trade route more than the purchasing power of its people.",
      stem:'Which choice best describes the relationship between the two texts?',
      choices:{
        A:'Text 2 rejects Text 1’s evidence as forged and therefore dismisses its conclusion about the town’s wealth.',
        B:'Text 2 and Text 1 disagree about whether the pottery was actually imported from a distant region.',
        C:'Text 2 endorses Text 1’s conclusion while adding that the town also lay on an important trade route.',
        D:'Text 2 accepts Text 1’s evidence but offers an alternative explanation that undercuts the specific inference Text 1 draws from it.'
      },
      correct:'D',
      expCorrect:'Petrova acepta la evidencia (“finds the pottery genuine”) e incluso concede que los bienes importados suelen indicar riqueza. Pero da otra explicación: la cerámica estaba toda en un edificio junto a la puerta, quizá una posta de comerciantes, no casas. Eso mina la INFERENCIA específica de Text 1 (residentes ricos) ofreciendo una alternativa (ubicación en ruta comercial). Eso es D.',
      expWrong:{
        A:'Falso: dice que la cerámica es “genuine”, no forjada. No rechaza la evidencia; rechaza la interpretación.',
        C:'Trampa de acuerdo: NO respalda la conclusión de residentes ricos; la reemplaza por la de ruta comercial. “Endorses… conclusion” es incorrecto.',
        B:'No hay desacuerdo sobre si la cerámica es importada; ambas lo aceptan. El choque es sobre qué INFIERE de ella, no sobre su origen.'
      },
      tip:'Aceptar la evidencia pero reubicar su significado (una posta, no hogares) es “misma data, distinta inferencia”. Descarta las opciones que dicen que niega la evidencia o que respalda la conclusión.'
    }
  ]
});
