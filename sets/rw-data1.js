/* SAT Studio question set — Reading & Writing: Interpreting Data in Context — Set 1 (DATA-01 a DATA-12) */
(function(){

  // Simple self-contained SVG bar chart builder (2–3 items). Values in the SAME unit as the y-axis label.
  function barChart(opts){
    // opts: { labels:[...], values:[...], vmax, unit, aria }
    var labels = opts.labels, values = opts.values, vmax = opts.vmax;
    var W = 300, H = 200, baseY = 150, baseX = 48, top = 20, plotW = 280 - baseX;
    var svg = '<svg viewBox="0 0 '+W+' '+H+'" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+opts.aria+'">';
    // axes
    svg += '<line x1="'+baseX+'" y1="'+baseY+'" x2="280" y2="'+baseY+'" stroke="#1e1e1e" stroke-width="2"/>';
    svg += '<line x1="'+baseX+'" y1="'+baseY+'" x2="'+baseX+'" y2="'+top+'" stroke="#1e1e1e" stroke-width="2"/>';
    // gridlines (5 steps)
    var steps = 5;
    for(var s=1; s<=steps; s++){
      var gv = (vmax/steps)*s;
      var y = baseY - (gv/vmax)*(baseY-top);
      svg += '<line x1="'+(baseX-4)+'" y1="'+y+'" x2="280" y2="'+y+'" stroke="#d9d9d9" stroke-width="1"/>';
      svg += '<text x="'+(baseX-6)+'" y="'+(y+4)+'" font-size="10" text-anchor="end" font-family="Arial,sans-serif">'+(Math.round(gv*10)/10)+'</text>';
    }
    var n = values.length;
    var slot = plotW / n;
    var bw = Math.min(40, slot*0.55);
    for(var i=0; i<n; i++){
      var h = (values[i]/vmax)*(baseY-top);
      var cx = baseX + slot*(i+0.5);
      var x = cx - bw/2;
      svg += '<rect x="'+x+'" y="'+(baseY-h)+'" width="'+bw+'" height="'+h+'" fill="#324DC7"/>';
      svg += '<text x="'+cx+'" y="'+(baseY-h-5)+'" font-size="11" text-anchor="middle" font-family="Arial,sans-serif" fill="#1e1e1e">'+values[i]+'</text>';
      svg += '<text x="'+cx+'" y="'+(baseY+15)+'" font-size="11" text-anchor="middle" font-family="Arial,sans-serif">'+labels[i]+'</text>';
    }
    if(opts.unit){
      svg += '<text x="14" y="90" font-size="11" text-anchor="middle" font-family="Arial,sans-serif" transform="rotate(-90 14 90)">'+opts.unit+'</text>';
    }
    svg += '</svg>';
    return svg;
  }

  var FIG_RAINFALL = barChart({
    labels:['Kestrel','Marlow','Deepwater'],
    values:[38, 52, 61],
    vmax:70, unit:'Rainfall (cm)',
    aria:'Bar graph of average annual rainfall in centimeters for three towns: Kestrel 38, Marlow 52, Deepwater 61.'
  });

  var FIG_TRAFFIC = barChart({
    labels:['2019','2021','2023'],
    values:[420, 610, 880],
    vmax:1000, unit:'Riders (thousands)',
    aria:'Bar graph of annual light-rail ridership in thousands: 2019 is 420, 2021 is 610, 2023 is 880.'
  });

  var FIG_RECYCLE = barChart({
    labels:['Glass','Plastic','Paper'],
    values:[74, 41, 88],
    vmax:100, unit:'Recycled (%)',
    aria:'Bar graph of the percent of collected material recycled: glass 74 percent, plastic 41 percent, paper 88 percent.'
  });

  window.SAT_SETS.push({
    id: 'rw-data1',
    title: 'Interpreting Data in Context — Set 1',
    section: 'rw',
    level: 'Difícil',
    description: 'Read tables and graphs and pick the choice that accurately uses the data to support a claim.',
    minutes: 15,
    questions: [
      {
        id:'DATA-01', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Interpreting Data in Context',
        passage:"A student researching insulation compared four wall materials by measuring how much heat (in watts) each let pass through a test panel in one hour. Lower heat loss means better insulation. The student concluded that fiberglass was the best insulator of the four tested." +
          "<table style='border-collapse:collapse;margin:10px 0;font-size:0.95em'>" +
          "<thead><tr><th style='border:1px solid #bbb;padding:4px 10px;text-align:left'>Material</th><th style='border:1px solid #bbb;padding:4px 10px'>Heat loss (W)</th></tr></thead>" +
          "<tbody>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Brick</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>48</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Foam board</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>22</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Fiberglass</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>15</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Plywood</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>63</td></tr>" +
          "</tbody></table>",
        stem:'Which choice most effectively uses data from the table to support the student’s conclusion?',
        choices:{
          A:'Fiberglass let through 15 W of heat, while brick let through 48 W.',
          B:'Foam board let through 22 W of heat, less than brick’s 48 W.',
          C:'Plywood let through 63 W of heat, the highest of the four materials.',
          D:'Fiberglass let through only 15 W of heat, the lowest heat loss of the four materials.'
        },
        correct:'D',
        expCorrect:'El claim es que la fibra de vidrio fue el MEJOR aislante, y menos pérdida de calor = mejor. D cita el número correcto (15 W) y añade lo clave: es la pérdida MÁS BAJA de las cuatro. Eso prueba que fue la mejor.',
        expWrong:{
          A:'Los dos números (15 y 48) son correctos, pero comparar la fibra solo con el ladrillo no muestra que sea la mejor de las CUATRO; podría haber otra aún más baja.',
          B:'El foam board (22 W) sí pierde menos que el ladrillo, pero eso no dice nada sobre la fibra de vidrio; verdadero pero no apoya el claim.',
          C:'El plywood (63 W) es el PEOR aislante; ese dato dice cuál es el peor, no que la fibra de vidrio sea la mejor.'
        },
        tip:'Método: 1) lee el CLAIM exacto (fibra de vidrio = la mejor), 2) traduce "mejor aislante" al número que importa (la pérdida MÁS BAJA), 3) elige la opción que diga "la más baja de las cuatro", no una comparación parcial.'
      },
      {
        id:'DATA-02', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Interpreting Data in Context',
        figure: FIG_RAINFALL,
        passage:"A geography student compared the average annual rainfall of three towns, shown in the bar graph. The student claimed that Deepwater receives the most rainfall of the three towns.",
        stem:'Which choice most effectively uses data from the graph to support the student’s claim?',
        choices:{
          A:'Deepwater receives 61 cm of rain per year, more than either Kestrel or Marlow.',
          B:'Kestrel receives 38 cm of rain per year, the least of the three towns.',
          C:'Marlow receives 52 cm of rain per year, more than Kestrel’s 38 cm.',
          D:'Deepwater receives 61 cm of rain per year, and Marlow receives 52 cm.'
        },
        correct:'A',
        expCorrect:'El claim es que Deepwater recibe MÁS lluvia que las otras dos. A cita el dato correcto (61 cm) y aclara que supera a Kestrel Y a Marlow. Al ser mayor que ambas, apoya el claim directo.',
        expWrong:{
          B:'Que Kestrel sea la MENOR (38 cm) es cierto, pero el claim es sobre Deepwater; verdadero pero no apoya el punto.',
          C:'Que Marlow (52) supere a Kestrel (38) es cierto, pero no dice que Deepwater sea la mayor de las TRES.',
          D:'Los números (61 y 52) son correctos, pero solo compara Deepwater con Marlow; falta descartar a Kestrel para probar que es "la más" de las tres.'
        },
        tip:'Método: 1) lee el CLAIM (Deepwater = la más), 2) busca su barra en el gráfico (61, la más alta), 3) elige la opción que la compara con AMBAS rivales, no con una sola ni la que habla de otro pueblo.'
      },
      {
        id:'DATA-03', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Interpreting Data in Context',
        passage:"A librarian tracked how many patrons attended the library’s weekly evening events over one month. She argued that attendance grew steadily from week to week during the month." +
          "<table style='border-collapse:collapse;margin:10px 0;font-size:0.95em'>" +
          "<thead><tr><th style='border:1px solid #bbb;padding:4px 10px;text-align:left'>Week</th><th style='border:1px solid #bbb;padding:4px 10px'>Attendance</th></tr></thead>" +
          "<tbody>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Week 1</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>24</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Week 2</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>31</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Week 3</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>39</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Week 4</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>50</td></tr>" +
          "</tbody></table>",
        stem:'Which choice most effectively uses data from the table to support the librarian’s argument?',
        choices:{
          A:'Attendance in Week 4 reached 50 patrons, the highest of the four weeks.',
          B:'Attendance rose each week, climbing from 24 in Week 1 to 31, then 39, then 50 by Week 4.',
          C:'Week 1 had the lowest attendance of the month, at 24 patrons.',
          D:'Attendance in Week 2 was 31 patrons, higher than Week 1’s 24.'
        },
        correct:'B',
        expCorrect:'El claim es que la asistencia creció SEMANA a SEMANA (una tendencia). B es la única que muestra toda la serie subiendo en orden: 24 → 31 → 39 → 50. Esa subida pareja es justo lo que afirma.',
        expWrong:{
          A:'Que la Semana 4 sea la más alta (50) es un solo punto; no muestra que subiera CADA semana; pudo haber bajado en el medio.',
          C:'Que la Semana 1 sea la más baja también es un punto suelto; no prueba la subida continua.',
          D:'Que la Semana 2 supere a la 1 es verdad, pero solo cubre dos semanas; no muestra la tendencia de todo el mes.'
        },
        tip:'Método: 1) el CLAIM habla de una TENDENCIA ("semana a semana"), 2) una tendencia necesita TODA la serie en orden, no un solo dato, 3) elige la opción que enlista los cuatro valores subiendo.'
      },
      {
        id:'DATA-04', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Interpreting Data in Context',
        figure: FIG_TRAFFIC,
        passage:"A transit planner presented ridership data for a city’s new light-rail line, shown in the bar graph. She argued that ridership more than doubled between 2019 and 2023.",
        stem:'Which choice most effectively uses data from the graph to support the planner’s argument?',
        choices:{
          A:'Ridership rose from 420,000 in 2019 to 610,000 in 2021.',
          B:'Ridership reached 880,000 in 2023, the highest of the three years shown.',
          C:'Ridership grew from 420,000 in 2019 to 880,000 in 2023, more than twice the 2019 figure.',
          D:'Ridership rose from 610,000 in 2021 to 880,000 in 2023.'
        },
        correct:'C',
        expCorrect:'El claim es que los pasajeros se MÁS QUE DUPLICARON entre 2019 y 2023. C usa los dos años exactos: 420 mil → 880 mil. El doble de 420 es 840, y 880 pasa de eso, así que "más que el doble" es correcto y apoya el claim.',
        expWrong:{
          A:'420→610 (2019 a 2021) es un tramo parcial; no llega a 2023 ni muestra que se duplicara.',
          B:'Que 2023 sea el año más alto (880) es cierto, pero "el más alto" no es lo mismo que "más del doble que 2019"; no compara con el punto de partida.',
          D:'610→880 (2021 a 2023) usa el año inicial equivocado; el claim compara con 2019, no con 2021.'
        },
        tip:'Método: 1) el CLAIM fija DOS años (2019 y 2023) y una relación ("más del doble"), 2) toma esas dos barras exactas (420 y 880) y verifica: 2×420 = 840 < 880 ✓, 3) descarta tramos que usan años intermedios.'
      },
      {
        id:'DATA-05', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Interpreting Data in Context',
        passage:"A biologist compared two lakes by counting fish species and measuring water clarity (in meters of visibility). She concluded that the clearer lake also supported more fish species." +
          "<table style='border-collapse:collapse;margin:10px 0;font-size:0.95em'>" +
          "<thead><tr><th style='border:1px solid #bbb;padding:4px 10px;text-align:left'>Lake</th><th style='border:1px solid #bbb;padding:4px 10px'>Water clarity (m)</th><th style='border:1px solid #bbb;padding:4px 10px'>Fish species</th></tr></thead>" +
          "<tbody>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Lake Hollow</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>2.1</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>9</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Lake Verde</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>5.4</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>17</td></tr>" +
          "</tbody></table>",
        stem:'Which choice most effectively uses data from the table to support the biologist’s conclusion?',
        choices:{
          A:'Lake Hollow had a water clarity of 2.1 m, less than Lake Verde’s 5.4 m.',
          B:'Lake Verde supported 17 fish species, nearly twice as many as Lake Hollow.',
          C:'Lake Verde had clearer water (5.4 m versus 2.1 m) and more fish species (17 versus 9) than Lake Hollow.',
          D:'Lake Hollow supported 9 fish species despite its lower water clarity of 2.1 m.'
        },
        correct:'C',
        expCorrect:'El claim conecta DOS cosas: el lago más CLARO también tiene MÁS especies. C es la única que junta ambas variables en el mismo lago: Verde gana en claridad (5.4 vs 2.1) Y en especies (17 vs 9). Esa doble comparación apoya la relación.',
        expWrong:{
          A:'Solo compara la CLARIDAD (2.1 vs 5.4); no menciona las especies, así que no muestra la relación entre las dos variables.',
          B:'Solo habla de las ESPECIES de Verde (17); no menciona la claridad, así que no conecta clara↔más peces.',
          D:'Menciona ambas variables de Hollow, pero el claim es que la CLARIDAD alta va con MÁS especies; Hollow tiene baja claridad y pocas especies, y por sí solo no prueba la relación.'
        },
        tip:'Método: 1) el CLAIM une DOS variables (más claro → más especies), 2) la evidencia debe mostrar AMBAS a la vez comparando los lagos, 3) descarta opciones que citan solo una variable.'
      },
      {
        id:'DATA-06', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Interpreting Data in Context',
        passage:"A city compared curbside recycling rates for three materials, shown in the bar graph (the percent of each collected material that was actually recycled rather than discarded). An official argued that plastic is recycled at a lower rate than the other two materials and needs the most improvement.",
        figure: FIG_RECYCLE,
        stem:'Which choice most effectively uses data from the graph to support the official’s argument?',
        choices:{
          A:'Paper is recycled at a rate of 88%, the highest of the three materials.',
          B:'Only 41% of collected plastic is recycled, below both glass (74%) and paper (88%).',
          C:'Glass is recycled at a rate of 74%, higher than plastic’s 41%.',
          D:'Plastic is recycled at a rate of 41%, while paper is recycled at 88%.'
        },
        correct:'B',
        expCorrect:'El claim es que el plástico se recicla MENOS que los OTROS DOS y por eso necesita más mejora. B cita 41% y muestra que está por debajo de glass (74) Y de paper (88). Al quedar bajo ambos, prueba que es el más rezagado.',
        expWrong:{
          A:'Que el papel sea el más alto (88%) es cierto, pero el claim es sobre el PLÁSTICO; verdadero pero no apoya el punto.',
          C:'Que glass (74) supere a plastic (41) es cierto, pero solo lo compara con UN material; falta descartar al papel para decir "el más bajo".',
          D:'Cita plastic (41) y paper (88), pero deja fuera al glass; sin las tres comparaciones no prueba que el plástico sea el más bajo de todos.'
        },
        tip:'Método: 1) el CLAIM dice "más bajo que los OTROS DOS", 2) esa afirmación exige comparar el plástico con AMBOS materiales, 3) elige la opción que lo pone debajo de glass y paper a la vez.'
      },
      {
        id:'DATA-07', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Interpreting Data in Context',
        passage:"A researcher tested a memory technique by comparing two groups of students on a vocabulary quiz. The control group studied by rereading; the experimental group used self-quizzing. She claimed that self-quizzing led to higher scores." +
          "<table style='border-collapse:collapse;margin:10px 0;font-size:0.95em'>" +
          "<thead><tr><th style='border:1px solid #bbb;padding:4px 10px;text-align:left'>Group</th><th style='border:1px solid #bbb;padding:4px 10px'>Avg. score (of 40)</th><th style='border:1px solid #bbb;padding:4px 10px'>Students</th></tr></thead>" +
          "<tbody>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Rereading</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>27</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>30</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Self-quizzing</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>34</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>30</td></tr>" +
          "</tbody></table>",
        stem:'Which choice most effectively uses data from the table to support the researcher’s claim?',
        choices:{
          A:'The self-quizzing group averaged 34 of 40 on the vocabulary quiz.',
          B:'Both groups contained 30 students, making the comparison fair.',
          C:'The rereading group averaged 27 of 40 on the vocabulary quiz.',
          D:'The self-quizzing group averaged 34 of 40, compared with 27 of 40 for the rereading group.'
        },
        correct:'D',
        expCorrect:'El claim es que el autoexamen dio puntajes MÁS ALTOS (una comparación). D pone los dos promedios lado a lado: 34 vs 27, mostrando que el autoexamen superó al relectura. Esa comparación directa apoya el claim.',
        expWrong:{
          A:'Solo da el promedio del autoexamen (34); sin comparar con 27 no prueba que sea MÁS alto que la otra técnica.',
          B:'Que ambos grupos tengan 30 estudiantes hace justo el experimento, pero es sobre el TAMAÑO de muestra, no sobre los puntajes; no apoya "más alto".',
          C:'Solo da el promedio del grupo de relectura (27); sin el otro número no muestra que el autoexamen fuera MÁS alto.'
        },
        tip:'Método: 1) un CLAIM comparativo ("más alto que") necesita AMBOS números, 2) descarta las que citan un solo grupo (verdaderas pero incompletas), 3) el tamaño de muestra es un dato de control, no evidencia del efecto.'
      },
      {
        id:'DATA-08', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Interpreting Data in Context',
        passage:"An ecologist measured the average height of tree seedlings grown under four light levels after 60 days, to complete the claim that seedling growth increased with more light—up to a point, after which extra light no longer helped." +
          "<table style='border-collapse:collapse;margin:10px 0;font-size:0.95em'>" +
          "<thead><tr><th style='border:1px solid #bbb;padding:4px 10px;text-align:left'>Light level</th><th style='border:1px solid #bbb;padding:4px 10px'>Avg. height (cm)</th></tr></thead>" +
          "<tbody>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Low</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>8</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Medium</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>15</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>High</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>22</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Very high</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>22</td></tr>" +
          "</tbody></table>",
        stem:'Which choice most effectively uses data from the table to complete the claim?',
        choices:{
          A:'Height rose from 8 cm at low light to 22 cm at high light, but stayed at 22 cm at very high light.',
          B:'Seedlings at low light reached only 8 cm, the shortest of the four groups.',
          C:'Height rose steadily from 8 cm to 15 cm to 22 cm as light increased from low to high.',
          D:'Seedlings at very high light reached 22 cm, tied for the tallest of the four groups.'
        },
        correct:'A',
        expCorrect:'El claim tiene DOS partes: (1) crece con más luz y (2) llega un punto donde luz extra ya NO ayuda. A cubre las dos: sube de 8 a 22 (crece), pero de high a very high se queda en 22 (ya no ayuda). Es la única que muestra el "hasta cierto punto".',
        expWrong:{
          B:'Solo da el mínimo (8 cm en low); no muestra ni el crecimiento ni el punto donde se estanca.',
          C:'Muestra el crecimiento (8→15→22) pero se detiene en "high"; omite el very high, así que no prueba la segunda parte (que la luz extra ya no ayuda).',
          D:'Dice que very high empata como el más alto, pero por sí solo no muestra el estancamiento; sin comparar con high no se ve que la luz extra no sumó.'
        },
        tip:'Método: 1) subraya que el CLAIM tiene DOS partes (sube… hasta un punto), 2) la respuesta debe cubrir AMBAS, 3) descarta la que solo muestra el crecimiento y corta antes del punto de estancamiento.'
      },
      {
        id:'DATA-09', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Interpreting Data in Context',
        passage:"A study compared how a plant’s growth responded to two fertilizers across three soil types, measuring growth in centimeters. A researcher claimed that Fertilizer B outperformed Fertilizer A in every soil type." +
          "<table style='border-collapse:collapse;margin:10px 0;font-size:0.95em'>" +
          "<thead><tr><th style='border:1px solid #bbb;padding:4px 10px;text-align:left'>Soil type</th><th style='border:1px solid #bbb;padding:4px 10px'>Fertilizer A (cm)</th><th style='border:1px solid #bbb;padding:4px 10px'>Fertilizer B (cm)</th></tr></thead>" +
          "<tbody>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Sandy</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>12</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>18</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Loam</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>20</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>25</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Clay</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>9</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>14</td></tr>" +
          "</tbody></table>",
        stem:'Which choice most effectively uses data from the table to support the researcher’s claim?',
        choices:{
          A:'In loam, Fertilizer B produced 25 cm of growth, more than Fertilizer A’s 20 cm.',
          B:'In sandy soil (18 vs. 12 cm), loam (25 vs. 20 cm), and clay (14 vs. 9 cm), Fertilizer B produced more growth than Fertilizer A.',
          C:'Fertilizer B produced its greatest growth, 25 cm, in loam soil.',
          D:'Fertilizer A produced only 9 cm of growth in clay, its lowest result.'
        },
        correct:'B',
        expCorrect:'El claim es fuerte: B supera a A en TODOS los suelos. Para probar "en todos" hay que revisar los TRES: sandy 18>12, loam 25>20, clay 14>9. B lo hace en los tres, así que es la única que respalda el "every soil type".',
        expWrong:{
          A:'Solo muestra loam (25>20); prueba un caso, no los TRES que exige "en todos".',
          C:'Que B tenga su máximo en loam (25) es un dato interno de B; no compara con A ni cubre los otros suelos.',
          D:'Habla del peor resultado de A (9 cm en clay); es un dato sobre A solo, no la comparación en cada suelo.'
        },
        tip:'Método: 1) ojo con los CLAIM absolutos ("en TODOS", "siempre"): exigen revisar cada caso, 2) un solo ejemplo no basta, 3) elige la opción que recorre las tres filas comparando A vs B.'
      },
      {
        id:'DATA-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Interpreting Data in Context',
        passage:"A survey of 800 households tracked how many owned a home streaming device across four years. A market analyst claimed that ownership rose most sharply between 2020 and 2021, faster than in any other one-year span shown." +
          "<table style='border-collapse:collapse;margin:10px 0;font-size:0.95em'>" +
          "<thead><tr><th style='border:1px solid #bbb;padding:4px 10px;text-align:left'>Year</th><th style='border:1px solid #bbb;padding:4px 10px'>Households owning a device</th></tr></thead>" +
          "<tbody>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>2019</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>210</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>2020</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>265</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>2021</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>420</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>2022</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>500</td></tr>" +
          "</tbody></table>",
        stem:'Which choice most effectively uses data from the table to support the analyst’s claim?',
        choices:{
          A:'Ownership reached 500 households by 2022, the highest total in the survey.',
          B:'Ownership rose by 55 households from 2019 to 2020, then continued climbing.',
          C:'Ownership jumped by 155 households from 2020 to 2021—a larger increase than the 55 (2019–2020) or 80 (2021–2022) gains.',
          D:'Ownership rose every year from 2019 to 2022, from 210 to 500 households.'
        },
        correct:'C',
        expCorrect:'El claim es sobre la SUBIDA MÁS PRONUNCIADA en un solo año. Hay que calcular cada salto: 2019→20 = 55, 2020→21 = 155, 2021→22 = 80. C muestra que 155 es mayor que 55 y que 80, probando que ese tramo fue el de mayor aumento.',
        expWrong:{
          A:'El total más alto (500 en 2022) es sobre el NIVEL, no sobre qué año SUBIÓ más; el claim es sobre el ritmo del aumento.',
          B:'El salto de 2019→2020 fue solo 55, el más pequeño; citarlo no apoya que 2020→2021 fuera el mayor.',
          D:'Que suba cada año (210→500) muestra crecimiento general, pero no compara los saltos anuales para señalar el más grande.'
        },
        tip:'Método: 1) "subió MÁS" = compara los CAMBIOS, no los totales, 2) resta año con año (55, 155, 80), 3) elige la opción que demuestra que el tramo del claim tiene el salto mayor.'
      },
      {
        id:'DATA-11', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Interpreting Data in Context',
        passage:"A study measured the average daily water use (in liters per person) in two neighborhoods before and after a conservation campaign. A city official claimed that the campaign reduced water use more in Riverside than in Oakmont." +
          "<table style='border-collapse:collapse;margin:10px 0;font-size:0.95em'>" +
          "<thead><tr><th style='border:1px solid #bbb;padding:4px 10px;text-align:left'>Neighborhood</th><th style='border:1px solid #bbb;padding:4px 10px'>Before (L)</th><th style='border:1px solid #bbb;padding:4px 10px'>After (L)</th></tr></thead>" +
          "<tbody>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Riverside</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>190</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>150</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Oakmont</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>170</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>155</td></tr>" +
          "</tbody></table>",
        stem:'Which choice most effectively uses data from the table to support the official’s claim?',
        choices:{
          A:'Riverside’s water use fell by 40 L (from 190 to 150), a larger drop than Oakmont’s 15 L (from 170 to 155).',
          B:'After the campaign, Riverside used 150 L per person, less than Oakmont’s 155 L.',
          C:'Oakmont’s water use fell from 170 L to 155 L after the campaign.',
          D:'Before the campaign, Riverside used 190 L per person, more than Oakmont’s 170 L.'
        },
        correct:'A',
        expCorrect:'El claim compara la REDUCCIÓN (el cambio), no el nivel final. Hay que restar en cada barrio: Riverside 190−150 = 40, Oakmont 170−155 = 15. A muestra que 40 > 15, probando que Riverside redujo MÁS. Es la única que compara los descensos.',
        expWrong:{
          B:'Compara los niveles FINALES (150 vs 155), no cuánto BAJÓ cada uno; una diferencia final pequeña no equivale a una reducción mayor.',
          C:'Solo da la caída de Oakmont (15 L); sin la de Riverside no muestra cuál redujo más.',
          D:'Compara los niveles ANTES (190 vs 170); el claim es sobre la reducción, no sobre quién partía más alto.'
        },
        tip:'Método: 1) "redujo MÁS" = compara los CAMBIOS (antes − después), no el valor final, 2) calcula ambas restas (40 y 15), 3) descarta las que solo miran el "antes" o el "después" sueltos.'
      },
      {
        id:'DATA-12', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Interpreting Data in Context',
        passage:"A researcher compared four coffee-shop menu designs, recording each design’s average order time (seconds) and average number of items per order. She wanted to recommend the design that let customers order fastest without lowering the number of items purchased." +
          "<table style='border-collapse:collapse;margin:10px 0;font-size:0.95em'>" +
          "<thead><tr><th style='border:1px solid #bbb;padding:4px 10px;text-align:left'>Design</th><th style='border:1px solid #bbb;padding:4px 10px'>Order time (s)</th><th style='border:1px solid #bbb;padding:4px 10px'>Items per order</th></tr></thead>" +
          "<tbody>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>W</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>52</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>2.4</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>X</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>40</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>2.4</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Y</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>31</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>1.6</td></tr>" +
          "<tr><td style='border:1px solid #bbb;padding:4px 10px'>Z</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>44</td><td style='border:1px solid #bbb;padding:4px 10px;text-align:center'>2.5</td></tr>" +
          "</tbody></table>",
        stem:'Which choice most effectively uses data from the table to complete the researcher’s recommendation?',
        choices:{
          A:'Design Y, at 31 s per order, was the fastest of the four designs.',
          B:'Design X, at 40 s per order, was faster than W, Z, and the baseline while keeping items per order at 2.4, matching the highest-item designs.',
          C:'Design Z had the highest items per order, at 2.5, though its order time was 44 s.',
          D:'Design W was the slowest design, at 52 s per order, with 2.4 items per order.'
        },
        correct:'B',
        expCorrect:'La meta tiene DOS condiciones: más rápido SIN bajar los ítems por orden. Y es la más rápida (31 s) pero sus ítems caen a 1.6, así que se descarta. Entre las que mantienen ítems altos (2.4–2.5), X es la más rápida (40 s) y conserva 2.4. B es la única que cumple ambas condiciones.',
        expWrong:{
          A:'Design Y es la más rápida (31 s), pero sus ítems por orden bajan a 1.6; viola la segunda condición ("sin bajar los ítems"). Rápida pero no cumple el claim completo.',
          C:'Design Z tiene los ítems más altos (2.5), pero es más lenta (44 s) que X; el objetivo prioriza la rapidez manteniendo los ítems, y X logra ambos mejor.',
          D:'Design W es la MÁS LENTA (52 s); es lo contrario de lo que se busca recomendar.'
        },
        tip:'Método: 1) el CLAIM tiene DOS condiciones (rápido Y sin perder ítems), 2) descarta primero las que fallan una condición (Y baja ítems; W es lenta), 3) entre las que quedan, elige la que optimiza la otra: X, rápida y con ítems intactos.'
      }
    ]
  });
})();
