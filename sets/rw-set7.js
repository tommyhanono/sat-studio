/* SAT Studio question set — Reading & Writing: Command of Evidence — Difícil (COE-01 a COE-10) */
window.SAT_SETS.push({
  id: 'rw-set7',
  title: 'Command of Evidence — Difícil',
  section: 'rw',
  level: 'Difícil',
  description: 'Information and Ideas: elige el dato o la cita que MEJOR apoya (o debilita) la afirmación.',
  minutes: 16,
  questions: [
    {
      id:'COE-01', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"Marine biologist Dr. Okafor studies why some coral reefs recover after a heat wave while neighboring reefs die. She hypothesizes that reefs hosting a wider variety of algae species inside their coral tissue bounce back faster, because different algae tolerate different temperatures. To test this, she catalogued the algae living in twelve reefs before a marine heat wave and then measured how much living coral remained one year afterward.",
      stem:'Which finding, if true, would most directly support Dr. Okafor’s hypothesis?',
      choices:{
        A:'The reef with the greatest number of visiting fish species also had the highest coral survival after the heat wave.',
        B:'Reefs that hosted more distinct algae species before the heat wave retained a larger share of living coral one year afterward.',
        C:'Every reef in the study lost at least some living coral during the year following the heat wave.',
        D:'Reefs located in deeper, cooler water tended to contain fewer algae species than shallow reefs.'
      },
      correct:'B',
      expCorrect:'La hipótesis dice que MÁS variedad de algas → recuperación MÁS rápida (más coral vivo después). B conecta exactamente esas dos variables: más especies de algas antes → más coral vivo un año después. Es justo lo que ella midió.',
      expWrong:{
        A:'Habla de especies de PECES, no de la variedad de algas dentro del coral. Es otra variable distinta a la de la hipótesis.',
        C:'Que todos perdieran algo de coral no dice nada sobre si la VARIEDAD de algas ayudó a recuperarse; no compara arrecifes con más vs. menos algas.',
        D:'Relaciona profundidad con número de algas, pero no dice nada sobre la RECUPERACIÓN del coral. No toca la afirmación.'
      },
      tip:'Subraya las dos variables de la hipótesis (aquí: variedad de algas ↔ coral que sobrevive). La respuesta correcta une ESAS dos, no otras parecidas.'
    },
    {
      id:'COE-02', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"A team of archaeologists excavating a coastal ruin uncovered a 3,000-year-old workshop and concluded that its occupants produced purple dye for export rather than for local use. They based this claim mainly on the enormous quantity of dyeing vats found at the site—far more than a small village of that period could ever have needed for coloring its own cloth.",
      stem:'Which finding, if true, would most strongly support the archaeologists’ conclusion?',
      choices:{
        A:'Fragments of the same distinctive dyed cloth were later found in trading settlements hundreds of kilometers away.',
        B:'The dyeing vats were built from a type of clay available in the hills surrounding the workshop.',
        C:'The workshop stood beside a river that would have supplied the large amounts of water dyeing requires.',
        D:'Similar dyeing vats have been discovered at several other ancient sites across the region.'
      },
      correct:'A',
      expCorrect:'La afirmación es que producían tinte para EXPORTAR (venderlo lejos), no para uso local. A muestra la misma tela teñida distintiva apareciendo a cientos de kilómetros → evidencia directa de que el producto viajaba fuera. Eso es exportación.',
      expWrong:{
        B:'De dónde sacaron la arcilla de las tinajas no dice a dónde iba el tinte. Es irrelevante para “exportar vs. local”.',
        C:'Tener un río cerca explica cómo podían teñir en cantidad, pero no muestra que el producto se vendiera lejos.',
        D:'Que existan tinajas parecidas en otros sitios no dice que ESTE taller exportara; incluso podría sugerir que era algo común y local.'
      },
      tip:'“Para exportar” = el producto termina LEJOS. Busca la opción que rastrea el producto fuera del sitio, no la que solo explica cómo se fabricaba.'
    },
    {
      id:'COE-03', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"In a survey of 600 office workers, researchers asked how many took a short outdoor walk during lunch and then measured self-reported focus during the afternoon. The researchers concluded that walking outdoors at midday causes sharper afternoon focus. A skeptic, however, argues that the direction of cause might be reversed or that a third factor explains the pattern.",
      stem:'Which finding, if true, would most directly weaken the researchers’ conclusion?',
      choices:{
        A:'A separate study found that indoor stretching at lunch had no measurable effect on afternoon focus.',
        B:'Workers who walked outdoors at lunch reported feeling more relaxed than those who stayed inside.',
        C:'Workers who reported sharper afternoon focus tended to have more flexible schedules that let them step outside whenever they wished.',
        D:'Most workers in the survey said they enjoyed their midday walks and hoped to continue them.'
      },
      correct:'C',
      expCorrect:'El escéptico dice que quizá un TERCER factor explica el patrón. C ofrece justo eso: los de horario flexible ya tenían mejor foco Y además podían salir a caminar. Así, la caminata y el foco podrían venir ambos del horario flexible, no ser causa uno del otro. Eso debilita el “caminar CAUSA foco”.',
      expWrong:{
        A:'El estiramiento bajo techo es otra actividad distinta; que no funcione no dice nada sobre si caminar afuera causa o no el foco.',
        B:'Sentirse más relajado va en la MISMA dirección que la conclusión (hasta la apoyaría); no la debilita.',
        D:'Que disfruten las caminatas es irrelevante para si esas caminatas CAUSAN el mejor foco.'
      },
      tip:'Para debilitar una relación causa–efecto, busca un TERCER factor que explique ambas cosas a la vez, o una causa al revés. Cuidado: una opción que apoya va en dirección contraria a “debilitar”.'
    },
    {
      id:'COE-04', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"An economist claims that offering free public transit does not, by itself, reduce the number of cars on city roads; instead, she argues, most new transit riders are people who previously walked or biked, not people who previously drove. To evaluate this, a city made its buses free for one year and surveyed the new riders about how they used to travel.",
      stem:'Which finding, if true, would most directly support the economist’s claim?',
      choices:{
        A:'During the free-transit year, total bus ridership in the city roughly doubled compared with the previous year.',
        B:'Among the new bus riders, the large majority reported that before the change they had usually walked or cycled to their destinations.',
        C:'Several nearby cities that kept charging bus fares saw no change in their traffic levels that year.',
        D:'City officials reported that making the buses free was more expensive than they had originally expected.'
      },
      correct:'B',
      expCorrect:'Su afirmación específica es que los nuevos pasajeros ANTES caminaban o iban en bici (no manejaban), por eso los autos no bajan. B dice exactamente eso: la mayoría de los nuevos usuarios antes caminaba o pedaleaba. Apoya la afirmación en su propio detalle.',
      expWrong:{
        A:'Que suba el total de pasajeros no dice DE DÓNDE vienen; podrían ser exconductores, lo cual iría en contra de ella. Es demasiado vago.',
        C:'Habla de otras ciudades que SÍ cobran; no informa sobre quiénes son los nuevos pasajeros de la ciudad del estudio.',
        D:'El costo del programa no tiene relación con si los pasajeros antes manejaban o caminaban. Irrelevante.'
      },
      tip:'Cuando la afirmación tiene un detalle preciso (“antes caminaban/pedaleaban”), la evidencia correcta menciona ESE detalle. Un número grande pero genérico (ridership subió) suele ser el distractor vago.'
    },
    {
      id:'COE-05', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence',
      passage:"A botanist proposes that a certain desert shrub survives long droughts mainly by storing water in its unusually thick roots, rather than by reducing water loss through its leaves. In a controlled test, she grew forty shrubs, deprived them of water for two months, and recorded both root water content and leaf water loss throughout.",
      stem:'Which finding, if true, would most directly support the botanist’s proposal?',
      choices:{
        A:'Related shrub species that lack thick roots are also able to endure short dry spells.',
        B:'The shrubs’ leaves were coated in a waxy layer that noticeably slowed water loss during the dry period.',
        C:'The shrub grows naturally only in regions that receive fewer than 100 millimeters of rain each year.',
        D:'The shrubs with the thickest, most water-filled roots survived the two-month drought at far higher rates than those with thinner roots.'
      },
      correct:'D',
      expCorrect:'Su propuesta es que sobrevive gracias al agua guardada en las RAÍCES gruesas, no por las hojas. D une justo eso: raíces más gruesas y llenas de agua → mucha mayor supervivencia. Apoya el mecanismo que ella señala.',
      expWrong:{
        A:'Que parientes sin raíces gruesas aguanten sequías cortas más bien debilitaría la importancia de las raíces; no la apoya.',
        B:'La capa cerosa reduce la pérdida por las HOJAS, que es justo la explicación que ella DESCARTÓ. Apoya la idea contraria, no la suya.',
        C:'Dónde crece la planta describe su hábitat seco, pero no muestra que sean las raíces (y no las hojas) las que la salvan.'
      },
      tip:'Ojo con la parte “rather than…” (en vez de…). Una opción que apoya el mecanismo RECHAZADO (aquí, las hojas) es trampa: parece evidencia, pero va al lado equivocado.'
    },
    {
      id:'COE-06', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"A historian argues that a medieval town’s sudden prosperity in the 1300s came from its role as a hub for the wool trade, not from the silver mine often credited in local legend. She notes that the town’s wealth rose sharply in exactly the decades when European demand for wool was booming.",
      stem:'Which finding, if true, would most strongly support the historian’s argument?',
      choices:{
        A:'The town’s population grew steadily throughout the 1300s.',
        B:'The nearby silver mine was known to have produced high-quality ore in earlier centuries.',
        C:'Town records from the prosperous decades list large numbers of wool merchants and warehouses but almost no income from the mine.',
        D:'Several other towns in the region also grew wealthier during the 1300s.'
      },
      correct:'C',
      expCorrect:'Ella sostiene que la riqueza vino de la LANA, no de la mina. C da evidencia directa de ambos lados: muchos mercaderes y bodegas de lana Y casi cero ingreso de la mina. Confirma la fuente que ella defiende y descarta la que niega.',
      expWrong:{
        A:'Que crezca la población no dice si el dinero vino de la lana o de la mina; puede pasar con cualquier fuente. Muy vago.',
        B:'Que la mina diera buen mineral en siglos ANTERIORES apoyaría la leyenda de la mina, no el argumento de la lana. Dirección equivocada.',
        D:'Que otros pueblos prosperaran no identifica la causa en ESTE pueblo; podría deberse a muchas cosas.'
      },
      tip:'Cuando la afirmación es “A, no B”, la mejor evidencia toca los dos lados: confirma A y/o descarta B. Una opción que refuerza B está en tu contra.'
    },
    {
      id:'COE-07', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"Sleep scientists tested whether learning a new skill right before sleep improves memory of it. Two hundred volunteers practiced the same finger-tapping sequence; half then slept for eight hours while the other half stayed awake for the same period. The next day, everyone was retested. The researchers concluded that sleep, not merely the passage of time, strengthens newly learned motor skills.",
      stem:'Which finding, if true, would most directly support the researchers’ conclusion?',
      choices:{
        A:'The finger-tapping sequence used in the study was similar to ones used in earlier memory research.',
        B:'Volunteers in both groups reported that they found the finger-tapping task enjoyable and easy to understand.',
        C:'Volunteers who slept said they felt more rested and alert during the second test session.',
        D:'Volunteers who slept performed the finger-tapping sequence markedly faster and more accurately the next day than those who stayed awake.'
      },
      correct:'D',
      expCorrect:'La conclusión es que el SUEÑO (y no solo que pase el tiempo) fortalece la memoria motora. Como ambos grupos dejaron pasar las mismas 8 horas, la única diferencia es dormir o no. D muestra que los que durmieron mejoraron mucho más → la mejora se debe al sueño, no al tiempo. Apoyo directo.',
      expWrong:{
        A:'Que la secuencia se parezca a otras de estudios previos es un detalle de método, irrelevante para la conclusión sobre el sueño.',
        B:'Que la tarea fuera agradable en ambos grupos no compara el DESEMPEÑO; no dice si dormir ayudó.',
        C:'Sentirse más descansado explica un estado de ánimo, pero no demuestra que la HABILIDAD (rapidez/precisión) mejorara por dormir.'
      },
      tip:'En experimentos con dos grupos, la evidencia fuerte COMPARA resultados entre ellos. Aquí el tiempo es igual para ambos, así que la diferencia de desempeño solo puede venir del sueño.'
    },
    {
      id:'COE-08', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence',
      passage:"In her essay on urban design, the author claims that narrow, tree-lined streets make pedestrians feel safer and more willing to linger than wide, open avenues. To develop this argument, she draws on months of interviews she conducted with residents of several neighborhoods, asking each of them to compare how a quiet, shaded street and a broad, busy avenue nearby made them feel as they walked.",
      stem:'Which quotation from the text most effectively illustrates the author’s claim?',
      choices:{
        A:'“One resident said the narrow, shaded street outside her door felt ‘calm enough to stop and chat,’ while the broad avenue nearby left her hurrying to get across.”',
        B:'“The city’s widest avenues were originally designed in the nineteenth century to move carriages quickly through the center.”',
        C:'“Several residents remarked that the newly planted trees were still too young to provide much shade.”',
        D:'“The author notes that narrow streets can be more expensive for the city to clean and maintain.”'
      },
      correct:'A',
      expCorrect:'La afirmación es que las calles angostas y arboladas hacen que la gente se sienta MÁS segura y con ganas de quedarse, frente a las avenidas anchas. A muestra a una residente diciendo que la calle angosta y con sombra la invitaba a detenerse, y la avenida ancha la hacía apurarse. Ilustra exactamente el contraste que ella defiende.',
      expWrong:{
        B:'Cuenta la HISTORIA de por qué se diseñaron las avenidas anchas; no dice nada sobre cómo se sienten hoy los peatones. Irrelevante a la afirmación.',
        C:'Que los árboles sean muy jóvenes para dar sombra más bien va en contra del beneficio de las calles arboladas; no ilustra la afirmación.',
        D:'El costo de limpieza y mantenimiento es otro tema; no dice si los peatones se sienten seguros o si quieren quedarse.'
      },
      tip:'“Ilustra la afirmación” = pon en escena justo lo que dice. Busca la cita donde alguien VIVE el efecto descrito (aquí: quedarse en la calle angosta, apurarse en la ancha), no datos de historia o costos.'
    },
    {
      id:'COE-09', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"Ecologists reintroduced beavers to a dried-out valley, predicting that the dams the beavers build would raise the water table and allow wetland plants to return. Critics countered that the valley had grown too arid for the animals to make any lasting difference. Three years later, the ecologists surveyed the valley.",
      stem:'Which finding, if true, would most directly support the ecologists’ prediction?',
      choices:{
        A:'Beaver populations in other, wetter valleys had remained stable over the same three years.',
        B:'The reintroduced beavers were the same species that had historically lived throughout the valley.',
        C:'Local residents reported enjoying the sight of the beavers along the stream.',
        D:'In the stretches of the valley where beavers built dams, the water table rose and wetland plants spread widely, while undammed stretches stayed dry.'
      },
      correct:'D',
      expCorrect:'La predicción es que las represas de los castores subirían el nivel del agua y traerían de vuelta las plantas de humedal. D muestra justo esa cadena donde HAY represas (agua sube + plantas vuelven) y lo compara con tramos SIN represas que siguen secos. Une la causa (represas) con el efecto predicho.',
      expWrong:{
        A:'Los castores de otros valles más húmedos no dicen nada sobre lo que pasó en ESTE valle seco. No toca la predicción.',
        B:'Que sean la misma especie histórica es un dato de contexto; no muestra que las represas subieran el agua ni que volvieran las plantas.',
        C:'Que a los vecinos les guste ver castores es irrelevante para el nivel del agua o la vegetación.'
      },
      tip:'La mejor evidencia enfrenta lo predicho con un contraste: donde ocurrió la causa vs. donde no. Ver “con represas cambió, sin represas no” es lo que ata la causa al efecto.'
    },
    {
      id:'COE-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence',
      passage:"A nutrition researcher studied a group of 400 adults, half of them home gardeners, and reported that those who grew their own vegetables ate more servings of vegetables per week than the non-gardeners did. From this difference she concluded that the act of gardening itself leads people to eat more vegetables. A colleague, however, suspects that the conclusion overlooks a simpler explanation for the pattern.",
      stem:'Which finding, if true, would most directly weaken the researcher’s conclusion?',
      choices:{
        A:'The gardeners in the study had already eaten more vegetables than non-gardeners for years before they ever took up gardening.',
        B:'Gardeners in the study reported spending an average of four hours per week tending their plots.',
        C:'Non-gardeners in the study said they would consider starting a garden if they had more space.',
        D:'The vegetables most commonly grown by the gardeners were tomatoes, peppers, and lettuce.'
      },
      correct:'A',
      expCorrect:'La conclusión es que la jardinería EN SÍ hace que la gente coma más verduras. A la derriba: si los jardineros ya comían más verduras AÑOS ANTES de empezar a cultivar, entonces no fue la jardinería la que los cambió; ya eran así. La causa propuesta se cae.',
      expWrong:{
        B:'Cuántas horas dedican al jardín describe el hábito, pero no dice si comer más verduras viene de cultivar o de otra cosa. No debilita.',
        C:'Lo que harían los NO jardineros con más espacio es hipotético e irrelevante para la causa del consumo de verduras.',
        D:'Qué verduras cultivan es un detalle del tipo de cosecha; no toca si la jardinería causa comer más. Demasiado al margen.'
      },
      tip:'Para debilitar “X causa Y”, la jugada más fuerte es mostrar que Y ya existía ANTES de X. Si comían más verduras antes de tener jardín, la jardinería no pudo ser la causa.'
    }
  ]
});
