/* SAT Studio question set — Reading & Writing: Command of Evidence: Quantitative — Hard & Brutal (CQD-01 to CQD-15) */
/* Destreza oficial "Command of Evidence: Quantitative" del dominio Information and Ideas.
   Este set es el TECHO de la destreza: 8 preguntas Difícil y 7 del tier brutal
   (difficulty:'Difícil' + extreme:true, nunca 'Extreme', que manda la pregunta al
   módulo fácil del simulacro adaptativo).

   La forma de la dificultad, en orden de cuánto se falla:
   · las CUATRO opciones son ciertas según la tabla; tres leen bien el número y
     no contestan lo que se pide;
   · una compara las dos columnas equivocadas, o dos filas en vez de dos columnas;
   · una invierte la dirección; una se sale del rango de la tabla;
   · una es correcta en el dato pero apoya la hipótesis contraria;
   · en el tier brutal hay DOS hipótesis rivales en el mismo texto y hay que
     elegir la que apoya una y no la otra, o la que DEBILITA en vez de apoyar.

   OJO con el clasificador: corre contra `skill` + los primeros 160 caracteres del
   `stem`, y dentro de Information and Ideas se prueba Central Ideas and Details
   ANTES que esta destreza. Ninguna de estas cadenas puede aparecer en `skill` ni
   en el arranque del `stem`: "central", "main idea", "detail(s)", "summar",
   "gist", "overall point", "topic sentence". En cambio TIENE que aparecer una de
   "quantitative", "graph", "table", "chart", "figure", "bar", "scatter" — acá
   siempre es "Quantitative" en el `skill`.

   Personas, sitios y cifras: todas inventadas. */
(function(){

  /* ── Constructores ──────────────────────────────────────────────────────────
     Mismos dos builders que rw-quant-a: DIBUJAN y DESCRIBEN desde el mismo
     arreglo de datos, así que el aria-label nunca se desincroniza de las barras
     y un estudiante con lector de pantalla escucha cada valor con palabras. */

  var SANS = 'Arial,Helvetica,sans-serif';

  function fmt(v){
    var r = Math.round(v * 100) / 100;
    var p = String(r).split('.');
    p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return p.join('.');
  }

  /* Gráfica de barras vertical (3 o 4 barras).
     o = { what, axis, unitWord, vmax, steps, rows:[{label,value}] } */
  function barChart(o){
    var rows = o.rows, vmax = o.vmax, steps = o.steps || 5, n = rows.length;
    var W = 420, H = 238, top = 24, baseY = 180, baseX = 62, rightX = 404;
    var plotW = rightX - baseX, plotH = baseY - top, i;
    var say = [];
    for(i = 0; i < n; i++) say.push(rows[i].label + ' ' + fmt(rows[i].value) + ' ' + o.unitWord);
    var aria = o.what + ': ' + say.join('; ') + '.';
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + aria + '">';
    s += '<title>' + o.what + '</title>';
    for(var k = 0; k <= steps; k++){
      var gv = vmax * k / steps, y = baseY - (gv / vmax) * plotH;
      s += '<line x1="' + baseX + '" y1="' + y + '" x2="' + rightX + '" y2="' + y + '" stroke="' + (k ? '#dcdcdc' : '#1e1e1e') + '" stroke-width="' + (k ? 1 : 2) + '"/>';
      s += '<text x="' + (baseX - 8) + '" y="' + (y + 4) + '" font-size="11" text-anchor="end" font-family="' + SANS + '" fill="#1e1e1e">' + fmt(gv) + '</text>';
    }
    s += '<line x1="' + baseX + '" y1="' + baseY + '" x2="' + baseX + '" y2="' + top + '" stroke="#1e1e1e" stroke-width="2"/>';
    var slot = plotW / n, bw = Math.min(48, slot * 0.54);
    for(i = 0; i < n; i++){
      var h = (rows[i].value / vmax) * plotH, cx = baseX + slot * (i + 0.5);
      s += '<rect x="' + (cx - bw / 2) + '" y="' + (baseY - h) + '" width="' + bw + '" height="' + h + '" fill="#324DC7"/>';
      s += '<text x="' + cx + '" y="' + (baseY - h - 6) + '" font-size="12" text-anchor="middle" font-family="' + SANS + '" fill="#1e1e1e">' + fmt(rows[i].value) + '</text>';
      s += '<text x="' + cx + '" y="' + (baseY + 17) + '" font-size="11.5" text-anchor="middle" font-family="' + SANS + '" fill="#1e1e1e">' + rows[i].label + '</text>';
    }
    var midY = (top + baseY) / 2;
    s += '<text x="16" y="' + midY + '" font-size="11.5" text-anchor="middle" font-family="' + SANS + '" fill="#1e1e1e" transform="rotate(-90 16 ' + midY + ')">' + o.axis + '</text>';
    s += '<text x="' + ((baseX + rightX) / 2) + '" y="' + (H - 4) + '" font-size="11.5" text-anchor="middle" font-family="' + SANS + '" fill="#444">' + o.what + '</text>';
    s += '</svg>';
    return s;
  }

  /* Tabla HTML. o = { caption, cols:[...], align:[...], rows:[[...]] } */
  function dataTable(o){
    var bd = 'border:1px solid #b9b9b9;padding:5px 11px';
    var h = '<table style="border-collapse:collapse;margin:2px 0 4px;font-size:0.95em">';
    if(o.caption) h += '<caption style="caption-side:top;text-align:left;font-weight:600;padding:0 0 6px">' + o.caption + '</caption>';
    h += '<thead><tr>';
    for(var c = 0; c < o.cols.length; c++) h += '<th style="' + bd + ';text-align:' + (o.align[c] || 'left') + '">' + o.cols[c] + '</th>';
    h += '</tr></thead><tbody>';
    for(var r = 0; r < o.rows.length; r++){
      h += '<tr>';
      for(var d = 0; d < o.rows[r].length; d++) h += '<td style="' + bd + ';text-align:' + (o.align[d] || 'left') + '">' + o.rows[r][d] + '</td>';
      h += '</tr>';
    }
    return h + '</tbody></table>';
  }

  window.SAT_SETS.push({
    id: 'rw-coe-quant-deep',
    title: 'Command of Evidence: Quantitative — Hard & Brutal',
    section: 'rw',
    level: 'Extreme',
    description: 'Fifteen studies where all four choices read the figure correctly and only one answers the question asked. The last seven put two rival explanations in the same passage.',
    minutes: 20,
    questions: [

      /* ─────────────── Difícil (CQD-01 … CQD-08) ─────────────── */

      {
        id:'CQD-01', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Quantitative — two columns where the gains taper off',
        figure: dataTable({
          caption:'Live coral and reef fish at four sites on the Ilvet coast, 2025',
          cols:['Site','Live coral cover (%)','Reef fish per 100 square metres'], align:['left','center','center'],
          rows:[['Alcedo Bank','8','61'],['Marrow Flat','21','74'],['Quillon Shoal','44','79'],['Tamber Rise','63','81']]
        }),
        passage:'Biologist Nadia Farkas surveyed four reef flats that differ in how much live coral they still carry. She argues that reef fish do respond to coral, but with sharply diminishing returns: the first stretch of recovered coral buys a great many fish, and every stretch after that buys fewer.',
        stem:'Which choice most effectively uses data from the table to support Farkas’s argument?',
        choices:{
          A:'Moving from 8 to 21 percent coral cover adds 13 fish per 100 square metres; moving from 44 to 63 percent adds 2.',
          B:'Tamber Rise carries 63 percent coral cover and 81 fish per 100 square metres, the highest figure in each column.',
          C:'Alcedo Bank carries the least coral, 8 percent, and the fewest fish, 61 per 100 square metres.',
          D:'Quillon Shoal carries 44 percent coral and 79 fish, more of both than Marrow Flat at 21 percent and 74 fish.'
        },
        correct:'A',
        expCorrect:'Diminishing returns is a claim about the size of each step, so the evidence has to set one step against another. The first step in the table, 8 to 21 percent cover, lifts the fish count from 61 to 74: thirteen more fish for thirteen points of coral. The last step, 44 to 63 percent, is a wider stretch of coral — nineteen points — and lifts the count only from 79 to 81. Same table, two steps, and the later one buys a sixth as many fish.',
        expWrong:{
          B:'Both figures are read correctly and Tamber Rise does top both columns, but topping a column only shows that the richest reef holds the most fish. A steady, undiminished rise would produce this same pair of numbers.',
          C:'Accurate, and it anchors the bottom of both columns the way the choice above anchors the top. Two endpoints establish that fish rise with coral; the argument is about how the rise slows in between, and that lives in the middle rows.',
          D:'Every number is right and the comparison points the correct way. It compares two rows against each other instead of two steps against each other, so it shows that more coral means more fish and says nothing about the size of the gain.'
        },
        tip:'When a claim is about returns tapering off, stop comparing rows and start comparing the gaps between rows. Work out what each step in the first column buys in the second, then check whether the later steps buy less.'
      },

      {
        id:'CQD-02', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Quantitative — a price column read against a wage column',
        figure: dataTable({
          caption:'Wheat price and a mason’s day-wage in Vairen, in grams of silver',
          cols:['Decade','Wheat, per bushel','Mason’s day-wage'], align:['left','center','center'],
          rows:[['1560s','4.2','9.0'],['1580s','6.1','9.8'],['1600s','9.4','10.6'],['1620s','13.7','11.2']]
        }),
        passage:'Historian Piet Vandersen works from the wage books and grain registers of the town of Vairen. He argues that the masons there grew steadily poorer across these four decades even though the silver in their pay packets kept increasing, because the price of bread grain climbed faster than their wages did.',
        stem:'Which choice most effectively uses data from the table to support Vandersen’s argument?',
        choices:{
          A:'The mason’s day-wage climbed in every decade, from 9.0 grams of silver in the 1560s to 11.2 grams in the 1620s.',
          B:'Wheat rose from 4.2 to 13.7 grams a bushel, the largest increase of any column in the table.',
          C:'A day’s pay bought just over two bushels of wheat in the 1560s and under one bushel in the 1620s.',
          D:'In the 1600s a mason earned 10.6 grams of silver a day, still more than the 9.4 grams a bushel of wheat cost.'
        },
        correct:'C',
        expCorrect:'Poorer means the pay buys less, so the two columns have to be divided, not read side by side. In the 1560s, 9.0 grams of wage against 4.2 grams a bushel buys 2.1 bushels. In the 1620s, 11.2 against 13.7 buys 0.8 of a bushel. The pay packet grew by about a quarter while what it could carry home fell by more than half.',
        expWrong:{
          A:'Read correctly, and it is the half of the sentence Vandersen already concedes: the pay did keep rising. Taken alone it says the masons were better off, which is the opposite of his argument.',
          B:'The figures are right and wheat did move further than anything else in the table. A price on its own cannot make anyone poorer; it has to be set against what people were paid, and the wage column never appears here.',
          D:'Both numbers are accurate and the comparison is even the right kind, wage against price. It freezes one decade instead of comparing two, and the decade it picks is one where the wage still covers a bushel, so it reads as evidence that the masons were coping.'
        },
        tip:'Money claims almost always need a division rather than a comparison. When a passage says people grew richer or poorer, divide the pay column by the price column for the first row and for the last row, and compare those two results.'
      },

      {
        id:'CQD-03', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Quantitative — proportion of loss against raw counts in a table',
        figure: dataTable({
          caption:'Speakers of Tenuk counted in four censuses',
          cols:['Census','Speakers over 60','Speakers under 20'], align:['left','center','center'],
          rows:[['1995','4,120','1,980'],['2005','3,640','1,150'],['2015','2,910','640'],['2025','2,050','310']]
        }),
        passage:'Tenuk is still spoken in six villages along the upper Velsk. Linguist Ovidio Marek argues that the language is not simply shrinking as its oldest speakers die but failing to reach the next generation, and that the failure is the sharper of the two trends.',
        stem:'Which choice most effectively uses data from the table to support Marek’s argument?',
        choices:{
          A:'Speakers over 60 fell by 2,070 between 1995 and 2025, a larger loss than the 1,670 speakers lost under 20.',
          B:'Speakers under 20 fell to roughly a sixth of their 1995 number, while speakers over 60 fell by about half.',
          C:'Every census counts more speakers over 60 than under 20, and the gap between them never closes.',
          D:'The under-20 count fell by 330 between 2015 and 2025, the smallest drop from one census to the next.'
        },
        correct:'B',
        expCorrect:'Marek is comparing two rates of loss, so the columns have to be read as proportions rather than headcounts. The under-20 column runs 1,980 to 310, leaving about 16 percent of what it started with. The over-60 column runs 4,120 to 2,050, leaving about 50 percent. Both are falling, but the under-20 column has lost 84 percent of its speakers and the over-60 column only 50, which is what "the sharper of the two" claims.',
        expWrong:{
          A:'Both subtractions are right, and this is the most tempting wrong answer because it reads exactly the two rows the argument needs. It compares raw losses, and the older column started more than twice as large, so it posts the bigger number even while shrinking more slowly.',
          C:'True in all four censuses, and it describes a language whose speakers skew old. A comparison of levels cannot show a trend: a stable language with a long-lived population would give these same four rows.',
          D:'The arithmetic checks out and 330 really is the smallest step in that column. A shrinking drop in a column that is running out of people reads as the fall slowing down, which points away from Marek rather than toward him.'
        },
        tip:'When two groups start at very different sizes, a claim about which is falling faster is a claim about percentages. Divide the last count by the first for each group before you compare anything.'
      },

      {
        id:'CQD-04', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Quantitative — a bar graph read against a stated threshold',
        figure: barChart({
          what:'Cycles survived by four hinge alloys before the first crack',
          axis:'Cycles (thousands)', unitWord:'thousand cycles', vmax:120, steps:6,
          rows:[{label:'K-3',value:42},{label:'M-7',value:118},{label:'R-2',value:61},{label:'T-9',value:96}]
        }),
        passage:'Ravel Instruments needs a door hinge that will still be sound after 100 thousand open-and-close cycles. Engineer Hana Brill ran four alloys on the same rig until each one cracked. She reported that exactly one alloy clears the requirement, and that the alloy in second place misses it by a margin narrow enough to be easy to overlook.',
        stem:'Which choice most effectively uses data from the graph to support the report Brill made?',
        choices:{
          A:'Alloy M-7 survived 118 thousand cycles, more than any other alloy on the test rig.',
          B:'Alloy R-2 survived 61 thousand cycles, more than K-3 at 42 but fewer than T-9 at 96.',
          C:'Alloy K-3 survived 42 thousand cycles, the fewest of the four and under half the requirement.',
          D:'Alloy M-7 survived 118 thousand cycles, above the requirement, and next best T-9 stopped at 96.'
        },
        correct:'D',
        expCorrect:'The report has two halves. The first needs one alloy above 100 thousand cycles and the rest below it: M-7 at 118 clears the line while K-3 at 42, R-2 at 61 and T-9 at 96 do not. The second needs the runner-up to be close, and T-9 falls 4 thousand cycles short, a gap of about four percent that a glance at the bars will not show.',
        expWrong:{
          A:'The reading is right and M-7 is the tallest bar, but being the best of four is not the same as clearing a fixed line. The requirement is a number, 100 thousand, and it never appears in this choice.',
          B:'All three values are accurate and R-2 does sit third. The middle of the ranking is the one place the report says nothing about: neither the alloy that passes nor the one that narrowly fails is R-2.',
          C:'Correct, and it does test a bar against the requirement — just the bar at the wrong end. Showing that the weakest alloy fails badly leaves both halves of the report, the one that passes and the near miss, unsupported.'
        },
        tip:'When a passage names a threshold, draw it across the graph before you read the options. Every bar then belongs on one side of it or the other, and a choice that only ranks the bars against each other has not used the threshold at all.'
      },

      {
        id:'CQD-05', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Quantitative — a count column and a rate column that disagree',
        figure: dataTable({
          caption:'Childhood vaccination in four wards of the Serran district, 2025',
          cols:['Ward','Children vaccinated','Children in the ward','Coverage (%)'], align:['left','center','center','center'],
          rows:[['Marrowgate','3,600','4,500','80'],['Alden','300','600','50'],['Bell Quarter','1,700','2,000','85'],['Cray Hill','540','900','60']]
        }),
        passage:'The Serran district health board has funding for one more outreach team and has to decide where to put it. Coordinator Imani Duarte argues that the team belongs in Marrowgate, because the ward holding the largest number of unprotected children is not the ward with the weakest coverage.',
        stem:'Which choice most effectively uses data from the table to support Duarte’s argument?',
        choices:{
          A:'Marrowgate leaves 900 children unvaccinated and Alden 300, though Alden’s coverage is lower.',
          B:'Alden reaches only 50 percent coverage, the weakest of the four wards in the district.',
          C:'Marrowgate has 4,500 children, more than the other three wards put together.',
          D:'Cray Hill reaches 60 percent coverage and Bell Quarter 85, so Bell Quarter protects the larger share.'
        },
        correct:'A',
        expCorrect:'Coverage is a percentage and an outreach team treats children, so the argument turns on a count the table never prints: subtract the vaccinated from the total. Marrowgate leaves 4,500 − 3,600 = 900 children unprotected; Alden, the weakest ward by coverage, leaves 600 − 300 = 300. Alden is the worse percentage and Marrowgate is the larger job, which is exactly the split Duarte describes.',
        expWrong:{
          B:'Accurate: Alden does sit at the bottom of the coverage column. That is the ward Duarte is arguing against, and naming it does nothing to show that a bigger ward can hide a larger number of unprotected children.',
          C:'The addition is right, since 600, 2,000 and 900 come to 3,500. Size alone does not settle anything: a very large ward at 99 percent coverage would leave almost nobody unprotected, so the vaccinated column has to be subtracted before the number means much.',
          D:'Both percentages are read correctly and Bell Quarter does protect the larger share. Neither ward is part of the argument, which is about the ward with the most unprotected children and the ward with the weakest coverage.'
        },
        tip:'A percentage and a headcount answer different questions. Whenever a passage talks about how many people are affected, work your way to the count first; the ward with the worst rate is often not the ward with the biggest number.'
      },

      {
        id:'CQD-06', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Quantitative — applying the rule the passage sets to a bar graph',
        figure: barChart({
          what:'How far each stone row at Cairn Vellis points from the midwinter sunrise',
          axis:'Error (degrees)', unitWord:'degrees', vmax:40, steps:4,
          rows:[{label:'Row A',value:0.4},{label:'Row B',value:11.4},{label:'Row C',value:33.4},{label:'Row D',value:1.6}]
        }),
        passage:'Cairn Vellis is a hillside of four long stone rows. Archaeologist Rhea Colbourne holds that its builders set some of the rows by the midwinter sunrise and laid the others out for reasons that had nothing to do with the sky. She counts a row as deliberately aimed at the sunrise only when it points within two degrees of the bearing where the midwinter sun comes up. On her rule, the rows the builders aimed at the sunrise are',
        stem:'Which choice most effectively uses data from the graph to complete the statement?',
        choices:{
          A:'Rows B and C, which miss the sunrise bearing by 11.4 and 33.4 degrees.',
          B:'Rows A and D, which miss the sunrise bearing by 0.4 and 1.6 degrees.',
          C:'Rows A, B and D, the three rows that miss the bearing by under fifteen degrees.',
          D:'Row A alone, the only row that points within a single degree of the bearing.'
        },
        correct:'B',
        expCorrect:'Colbourne sets the test herself: under two degrees counts, anything else does not. Row A misses by 0.4 and Row D by 1.6, so both sit inside the limit. Row B misses by 11.4 and Row C by 33.4, more than five and more than sixteen times the limit. Two rows in, two rows out, which is what "some of the rows" needs.',
        expWrong:{
          A:'Both readings are correct, and these are genuinely the two rows furthest from the sunrise. They are the rows her rule excludes, so this answers the opposite of what the sentence is building toward.',
          C:'The three bars named do all fall under fifteen degrees, so the reading is accurate. Fifteen degrees is a line this choice invents: Row B at 11.4 degrees is more than five times the limit Colbourne set and cannot count as deliberate under her rule.',
          D:'Row A really is the closest row and really is inside one degree. The limit in the passage is two degrees, not one, and tightening it drops Row D at 1.6 degrees, a row that passes the test she stated.'
        },
        tip:'When a passage hands you a numerical cut-off, treat it as the whole question. Sort every bar into pass or fail against that exact number, and be suspicious of any option that quietly loosens or tightens it.'
      },

      {
        id:'CQD-07', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Quantitative — two table columns that move at different speeds',
        figure: dataTable({
          caption:'Pied flycatcher arrival and oak caterpillar peak at Ardmoor, by day of the year',
          cols:['Decade','Flycatchers arrive','Caterpillars peak'], align:['left','center','center'],
          rows:[['1985–94','121','138'],['1995–2004','118','131'],['2005–14','116','124'],['2015–24','115','118']]
        }),
        passage:'Pied flycatchers at Ardmoor feed their chicks on oak caterpillars, and the chicks do best when they hatch as the caterpillars peak. Ecologist Teodor Vasska accepts that the birds have shifted their arrival earlier along with the warming spring. His worry is that they have not shifted nearly enough, and that the window between their arrival and the food they depend on is closing.',
        stem:'Which choice most effectively uses data from the table to support Vasska’s worry?',
        choices:{
          A:'Flycatchers now arrive on day 115, six days earlier than they did in the late 1980s.',
          B:'In the earliest decade the birds arrived on day 121 and the caterpillars peaked on day 138.',
          C:'Caterpillars now peak on day 118, only three days after the flycatchers arrive on day 115.',
          D:'The caterpillar peak moved forward twenty days, from 138 to 118, while arrival moved six.'
        },
        correct:'D',
        expCorrect:'The window is the gap between the two columns, so the claim is about how far each column moved. Caterpillars ran from day 138 to day 118, a shift of twenty days. Flycatchers ran from day 121 to day 115, a shift of six. Both moved earlier, and because the food moved fourteen days further, the gap closes from seventeen days to three.',
        expWrong:{
          A:'The reading is right, and this is the part Vasska already grants: the birds did respond. A six-day shift on its own reads as a species keeping up, which is the reassuring version of the story rather than his.',
          B:'Correct for that decade, and it is one half of the comparison the answer needs. Stopping in the 1980s leaves the recent rows unused, so nothing here shows that the gap changed at all.',
          C:'Both figures are accurate and three days is indeed the gap today. One decade cannot show a closing window: the gap has to be measured twice, and a gap that had always been three days would produce this same sentence.'
        },
        tip:'When a passage is about a gap widening or closing, compute the gap for the first row and for the last row and compare those two numbers. A choice that reports one row, or one of the two columns, cannot describe a gap.'
      },

      {
        id:'CQD-08', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Quantitative — a share computed from two count columns',
        figure: dataTable({
          caption:'Animal bone counted in four phases at Durn Hollow',
          cols:['Phase','Cattle bone','Pig bone'], align:['left','center','center'],
          rows:[['Early','1,840','410'],['Middle','2,260','980'],['Late','2,410','2,300'],['Final','1,150','3,120']]
        }),
        passage:'Durn Hollow was farmed for about six centuries. Zooarchaeologist Maren Otwell argues that its people moved from cattle on open pasture to pigs in regrown woodland, and that they did it by degrees rather than all at once: pigs gained ground in every phase, long before they finally outnumbered cattle.',
        stem:'Which choice most effectively uses data from the table to support Otwell’s argument?',
        choices:{
          A:'Pig bone outnumbers cattle bone in the final phase, 3,120 pieces against 1,150.',
          B:'Cattle bone rises across the first three phases, 1,840 to 2,260 to 2,410, before falling to 1,150.',
          C:'Pigs account for 18 percent of the bone in the early phase, then 30, then 49, then 73.',
          D:'The two kinds come closest to level in the late phase, 2,410 cattle against 2,300 pigs.'
        },
        correct:'C',
        expCorrect:'Gaining ground is a share, not a count, so each row has to be turned into a percentage. Early: 410 of 2,250 pieces is 18 percent. Middle: 980 of 3,240 is 30. Late: 2,300 of 4,710 is 49. Final: 3,120 of 4,270 is 73. The share climbs at all three steps, so pigs are already taking over three phases before they pass cattle in the last one.',
        expWrong:{
          A:'The counts are right and pigs do end in front. That is the endpoint Otwell is arguing about, and an endpoint fits the sudden switch she is arguing against just as comfortably.',
          B:'Every figure is accurate, and this is the strongest wrong answer because it does read all four rows. It reads them in the cattle column, where the numbers rise for three phases; on its own that looks like cattle farming holding steady rather than pigs gaining.',
          D:'Both numbers are correct and the late phase is where the two columns nearly meet. A crossing point is a single moment, and showing when pigs caught up says nothing about whether they climbed steadily or jumped.'
        },
        tip:'When two counts sit side by side and the claim is that one is gaining, add the pair in each row and take the percentage. Both counts can rise at once, and only the share shows which one is winning.'
      },

      /* ─────────────── Brutal (CQD-09 … CQD-15) ─────────────── */

      {
        id:'CQD-09', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Quantitative — a table that separates two rival explanations',
        figure: dataTable({
          caption:'Otters, urchins, water temperature and kelp at four sites on the Tarn coast',
          cols:['Site','Otters per square kilometre','Urchins per square metre','Summer water (°C)','Kelp cover (%)'],
          align:['left','center','center','center','center'],
          rows:[['Kessock Point','2.4','3','14.8','61'],['Brae Sound','1.9','5','16.9','54'],['Tarn Head','0.2','44','14.6','9'],['Ober Cove','0.1','51','16.7','6']]
        }),
        passage:'Kelp has disappeared from stretches of the Tarn coast and two ecologists disagree about why. Jovan Brisc points to the collapse of the sea otter population, since otters eat the urchins that graze kelp down to bare rock. Farida Lunt points to warmer summer water, which she says weakens the kelp directly, with urchins moving into ground the kelp has already lost.',
        stem:'Which choice most effectively uses data from the table to support Brisc’s account rather than Lunt’s?',
        choices:{
          A:'Kessock Point and Tarn Head sit at 14.8 and 14.6 °C, yet hold 61 and 9 percent kelp and 2.4 and 0.2 otters.',
          B:'Ober Cove has 51 urchins per square metre and 6 percent kelp cover, the worst readings in both columns.',
          C:'The two sites with the fewest otters, Tarn Head and Ober Cove, also hold the least kelp, 9 and 6 percent.',
          D:'Kessock Point has the most otters, 2.4 per square kilometre, and the fewest urchins, 3 per square metre.'
        },
        correct:'A',
        expCorrect:'Separating two explanations means holding one of them still. Kessock Point and Tarn Head sit within 0.2 °C of each other, so warm water cannot account for any difference between them — and their kelp differs by 52 points, 61 percent against 9. What does differ is otters, 2.4 per square kilometre against 0.2. With temperature matched, the otter column still predicts the kelp column, which is what Brisc needs and what Lunt has no room to explain.',
        expWrong:{
          B:'Both readings are right and Ober Cove is the worst site in the table. Lunt predicts exactly this pairing, since on her account urchins arrive after the kelp has gone, so the row fits either ecologist and separates neither.',
          C:'Accurate for both rows, and it is the strongest wrong answer because otters and kelp really do line up. Temperature never appears, so Lunt can reply that those two sites lost kelp to the water and the otters left afterwards. Evidence that fits both accounts cannot choose between them.',
          D:'Both figures are correct and this is the first link in Brisc’s mechanism, otters holding urchins down. It stops one step short: kelp, the thing being explained, is not in the sentence, and neither is the temperature that would rule Lunt out.'
        },
        tip:'To back one explanation against a rival, look for rows where the rival’s variable is nearly identical and the outcome still differs. Matching the rival’s cause and watching the outcome move anyway is the only kind of row that can separate them.'
      },

      {
        id:'CQD-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Quantitative — the rows of a table that break an assumed pattern',
        figure: dataTable({
          caption:'Lead pipe, water lead and blood lead in four zones of Rensel, 2025',
          cols:['Zone','Homes with lead pipe (%)','Water lead (micrograms per litre)','Blood lead (micrograms per decilitre)'],
          align:['left','center','center','center'],
          rows:[['Ash Row','71','14.2','3.8'],['Delving','68','13.6','1.2'],['Poole End','12','2.1','3.6'],['Hatcher','9','1.8','1.1']]
        }),
        passage:'The Rensel health board has worked for years on the assumption that the lead showing up in its children comes from the old pipes still feeding many homes. Officer Camille Ngbo was asked to test that assumption before the board spends what is left of its budget on replacing pipe.',
        stem:'Which choice most effectively uses data from the table to undermine the assumption the board has worked from?',
        choices:{
          A:'Ash Row has the most lead pipe, 71 percent of homes, and the highest blood lead in the district at 3.8.',
          B:'Hatcher has the least lead pipe, 9 percent of homes, and the lowest blood lead in the district at 1.1.',
          C:'Water lead tracks lead pipe closely, running 14.2 and 13.6 in the two piped zones and 2.1 and 1.8 in the others.',
          D:'Delving has 13.6 micrograms of water lead and 1.2 in blood; Poole End has 2.1 in water and 3.6 in blood.'
        },
        correct:'D',
        expCorrect:'The assumption predicts that blood lead rises and falls with water lead, so what undermines it is a pair of zones where those two columns disagree. Delving has almost the worst water in the district, 13.6 micrograms per litre, and almost the lowest blood lead, 1.2. Poole End has nearly the cleanest water, 2.1, and nearly the highest blood lead, 3.6. Two of the four zones run backwards, which means something other than the pipes is putting lead into these children.',
        expWrong:{
          A:'Every figure is right, and this is the zone that fits the assumption best: worst pipes, worst blood. A row that confirms a pattern cannot undermine it.',
          B:'Accurate, and it is the same confirming pattern read from the clean end of the district instead of the dirty end. Set beside the choice above it makes the board’s case, which is the opposite of the task.',
          C:'The reading is correct and the relationship really is tight. It links pipe to water, which nobody disputes; the disputed link is water to blood, and this choice stops just before it.'
        },
        tip:'To undermine a claimed cause, hunt for the rows that break the pattern, not the rows that show it. Scan the two columns for a high-low pair and a low-high pair; one reversed row is worth more than three rows that agree.'
      },

      {
        id:'CQD-11', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Quantitative — dating a rise against two rival causes in a table',
        figure: dataTable({
          caption:'The port of Almsted: trade, rail and harbour depth',
          cols:['Decade','Tonnage shipped (thousands)','Rail freight to the port (thousands of tonnes)','Harbour depth (metres)'],
          align:['left','center','center','center'],
          rows:[['1840s','210','0','5.2'],['1860s','340','95','5.3'],['1880s','890','610','5.4'],['1900s','1,460','1,180','8.9']]
        }),
        passage:'Almsted was a minor harbour in 1840 and one of the busiest on its coast by 1910, and two historians credit different things. Wren Adalbert credits the railway, which reached the town in the 1850s and put a whole inland region within reach of its quays. Solano Petrakis credits the dredging finished in 1894, which deepened the harbour enough for the large steamers of the day.',
        stem:'Which choice most effectively uses data from the table to support Adalbert’s account rather than Petrakis’s?',
        choices:{
          A:'Tonnage reached 1,460 thousand in the 1900s, the busiest decade, after the harbour was deepened to 8.9 metres.',
          B:'Tonnage had already more than quadrupled by the 1880s, with rail freight at 610 thousand and the harbour at 5.4 metres.',
          C:'Rail freight climbed in every decade after the 1850s, from none to 95, then 610, then 1,180 thousand tonnes.',
          D:'The harbour held between 5.2 and 5.4 metres for half a century before it jumped to 8.9 metres.'
        },
        correct:'B',
        expCorrect:'The dredging was finished in 1894, so any growth recorded before the 1900s row happened in a harbour still 5.4 metres deep. Tonnage went from 210 thousand in the 1840s to 890 thousand by the 1880s, a rise of more than four times, while rail freight went from nothing to 610 thousand tonnes. The boom was well under way before Petrakis’s cause existed, and it tracks the cause Adalbert names.',
        expWrong:{
          A:'Both readings are right and the 1900s were the busiest decade on record. This is the row Petrakis would cite, since it is the one decade where the deep harbour is in place, so it supports the rival account rather than Adalbert’s.',
          C:'All four figures are accurate and the rail column really does climb throughout. A column that rises on its own says nothing about the port, and its largest jump, 610 to 1,180, lands in the decade after the dredging, where the two accounts cannot be told apart.',
          D:'The depth column is read correctly and the jump is real. It describes when Petrakis’s cause arrived and never mentions tonnage, so it cannot show whether trade responded to the dredging, to the railway, or to neither.'
        },
        tip:'When two causes arrive at different dates, find the growth that happened before the later cause existed. Any change recorded while one cause was still absent belongs to the other one by default.'
      },

      {
        id:'CQD-12', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Quantitative — holding one table variable still to test the other',
        figure: dataTable({
          caption:'Speakers using the new vowel in Kelder, by age and by daily travel to the city',
          cols:['Age group','Commutes to the city (%)','Does not commute (%)'], align:['left','center','center'],
          rows:[['Under 25','88','81'],['25 to 44','74','40'],['45 to 64','52','12'],['65 and over','30','4']]
        }),
        passage:'A new vowel is spreading through the town of Kelder and two linguists explain it differently. Odile Fanshaw holds that it travels by contact, carried home by the people who work in the city forty minutes away. Bertram Ng holds that it is a generational change inside the town itself, passed from older children to younger ones, and that contact with the city adds nothing.',
        stem:'Which choice most effectively uses data from the table to support Fanshaw’s account rather than Ng’s?',
        choices:{
          A:'Among commuters, use falls with every step up in age, from 88 percent under 25 to 30 percent over 65.',
          B:'Non-commuters over 65 use the new vowel least of any group in the town, just 4 percent.',
          C:'Among people aged 45 to 64, 52 percent of commuters use the new vowel and 12 percent of non-commuters do.',
          D:'Under-25s are close on both sides, 88 percent of commuters against 81 percent of non-commuters.'
        },
        correct:'C',
        expCorrect:'Both explanations predict that the young use the vowel more, so age cannot separate them; travel can. Reading across a single age band holds age still and leaves commuting as the only difference, and in the 45 to 64 band the two figures are 52 percent and 12 percent. More than four times the usage among people of the same age, differing only in whether they go to the city, is what Fanshaw predicts and what Ng says should not happen.',
        expWrong:{
          A:'Every figure is read correctly and the fall with age is real. Age is the variable both linguists agree about, and Ng predicts this column just as confidently as Fanshaw does, so it cannot choose between them.',
          B:'Accurate: 4 percent is the smallest number in the table. That group is the oldest and the least travelled at once, so the two explanations point at the same cell for opposite reasons and the row settles nothing.',
          D:'Both readings are right, and this is the strongest wrong answer because it does compare the two columns. The gap it picks, seven points, is the smallest in the table: it is the one age band where travel barely matters, which is evidence for Ng.'
        },
        tip:'When two accounts share a variable, that variable is useless for telling them apart. Read across a single row so the shared variable is held still, and let the column only one account cares about do the work.'
      },

      {
        id:'CQD-13', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Quantitative — a table where the return on one variable depends on the other',
        figure: dataTable({
          caption:'Four coatings on bridge steel: thickness and hours of salt spray before rust',
          cols:['Coating','Thickness (micrometres)','Hours to first rust','Cost index'], align:['left','center','center','center'],
          rows:[['Zinc-rich A','60','1,900','100'],['Zinc-rich B','120','2,050','190'],['Epoxy C','60','1,150','130'],['Epoxy D','120','2,400','240']]
        }),
        passage:'The Halven bridge authority buys by a standing rule: within the budget, take the thickest coating, whatever its chemistry. Engineer Solveig Marr wants the rule rewritten. Her objection is not that thickness fails to help, but that what a second layer buys depends entirely on which chemistry it is layered onto.',
        stem:'Which choice most effectively uses data from the table to support Marr’s objection to the rule?',
        choices:{
          A:'Both 120-micrometre coatings outlasted both 60-micrometre ones, 2,050 and 2,400 hours against 1,900 and 1,150.',
          B:'Epoxy D lasted 2,400 hours, longer than any other coating, and it is both the thickest and the costliest.',
          C:'At 60 micrometres the zinc-rich coating lasted 1,900 hours and the epoxy 1,150, so chemistry matters.',
          D:'Doubling the zinc-rich coating from 60 to 120 micrometres bought 150 extra hours; doubling the epoxy bought 1,250.'
        },
        correct:'D',
        expCorrect:'The objection compares two increases, so both chemistries have to be stepped from 60 to 120 micrometres. Zinc-rich goes 1,900 to 2,050 hours: 150 hours for doubling the metal, about 8 percent. Epoxy goes 1,150 to 2,400: 1,250 hours, more than doubling its life. The same extra thickness is nearly worthless on one chemistry and transformative on the other, which is precisely what a rule that ignores chemistry cannot see.',
        expWrong:{
          A:'Every number is correct and the comparison holds. It is the rule restated: thicker did win both times, so far from undermining the rule, this choice is the evidence for it.',
          B:'All three readings are right and Epoxy D is the best coating in the table. The standing rule would pick Epoxy D too, since it is the thickest, so this row is what the rule gets right rather than a case against it.',
          C:'Both figures are accurate and the conclusion drawn from them is fair: at equal thickness the two chemistries differ. Marr is not objecting to that. Her point is about the return on adding thickness, which needs the 120-micrometre rows this choice leaves out.'
        },
        tip:'When a claim says the effect of one variable depends on another, you need two differences, not one. Hold the second variable fixed and measure the change, then hold it at its other value and measure the change again.'
      },

      {
        id:'CQD-14', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Quantitative — one downturn on a bar graph against the whole record',
        figure: barChart({
          what:'Ospreys counted passing Saltmoor Point in four survey years',
          axis:'Ospreys counted', unitWord:'ospreys', vmax:1200, steps:4,
          rows:[{label:'1995',value:410},{label:'2005',value:690},{label:'2015',value:1180},{label:'2025',value:1090}]
        }),
        passage:'A wind farm was built inland of Saltmoor Point in 2018, and a campaign group says the ospreys that pass the headland each autumn are now in decline, pointing to the fall since the 2015 survey. Ornithologist Halvard Skeen is not defending the wind farm, but he answers that one downward step read against a long climb is not a decline, and that the birds passing today are more numerous than in any year the station recorded before 2015.',
        stem:'Which choice most effectively uses data from the graph to support the reply Skeen makes?',
        choices:{
          A:'The 1,090 ospreys counted in 2025 beat every year before 2015 and more than double the 410 of 1995.',
          B:'The 1,180 ospreys counted in 2015 make that the busiest survey year at the headland.',
          C:'The count nearly tripled between 1995 and 2015, climbing from 410 ospreys to 1,180.',
          D:'The count fell from 1,180 ospreys in 2015 to 1,090 in 2025, the only drop anywhere on the graph.'
        },
        correct:'A',
        expCorrect:'Skeen’s reply has two parts and one bar carries both. The 2025 count of 1,090 sits below 2015, which is the step down the campaigners cite, but it also sits above 1995 at 410 and above 2005 at 690 — more than double the earliest survey. A level that beats every year before the disputed one is a population still far up on where it started, which is what "not a decline" requires.',
        expWrong:{
          B:'Correct, and 2015 is the peak. A peak tells you where the record tops out, not where the birds stand now, and Skeen’s reply is entirely about the size of the current count.',
          C:'The reading and the multiple are both right, and this is the strongest wrong answer because the long climb is half of his reply. The climb stops in 2015, before the years in dispute, so it leaves the 2025 count — the one number the campaigners are citing — unaddressed.',
          D:'Both readings are right and that is the only fall on the graph. It is the campaigners’ evidence, stated accurately; reporting the step down cannot show that the level it stepped down to is still high.'
        },
        tip:'When an argument sets a recent dip against a long trend, the number that settles it is the current level measured against the older years, not the size of the dip. Compare the last bar with the bars from before the disputed period.'
      },

      {
        id:'CQD-15', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Quantitative — two count columns in a table that fall at different rates',
        figure: dataTable({
          caption:'Wheat grains and wild seeds in four levels of the Ashken mound',
          cols:['Level','Years before present','Wheat grains per litre','Wild seeds per litre'],
          align:['left','center','center','center'],
          rows:[['Level 4','9,400','0.2','41'],['Level 3','8,900','1.1','38'],['Level 2','8,300','9.6','22'],['Level 1','7,700','24.0','6']]
        }),
        passage:'The Ashken mound preserves the arrival of farming in its valley, and two archaeologists read it differently. Dag Ferreira reads a slow transition in which gathering carried on alongside the new crop for centuries. Tuva Olmen reads an abrupt switch in which the people dropped wild foods as soon as wheat could feed them.',
        stem:'Which choice most effectively uses data from the table to support Ferreira’s reading rather than Olmen’s?',
        choices:{
          A:'Wheat climbs from 0.2 grains per litre in Level 4 to 24.0 in Level 1, a hundredfold rise.',
          B:'Wheat is up to 9.6 grains per litre in Level 2, yet wild seeds still stand at 22, down only from 38.',
          C:'By Level 1 wild seeds are down to 6 per litre, the lowest in the mound, while wheat stands at 24.0.',
          D:'Level 4 holds 41 wild seeds per litre and almost no wheat, 0.2 grains, the state before wheat arrived.'
        },
        correct:'B',
        expCorrect:'A slow transition needs a level where both foods are substantial at once. Level 2, six hundred years after wheat first appears, has 9.6 grains per litre — nearly nine times Level 3 — while wild seeds still stand at 22 per litre, down only from 38. Wheat multiplies by nine and gathering loses barely two fifths of its trace in the same span. Olmen’s abrupt switch predicts that the wild seeds should have collapsed by then, and they have not.',
        expWrong:{
          A:'The two readings are right and the rise really is about a hundredfold. It measures only how fast wheat arrived, and both archaeologists agree that wheat arrived; the disagreement is about what happened to gathering while it did.',
          C:'Both figures are accurate and 6 per litre is the floor of that column. It is the end of the story, by which point the transition is over on either reading, and it is the row Olmen would cite as proof that wild foods were abandoned.',
          D:'Correct, and Level 4 is the baseline the whole sequence starts from. A level with almost no wheat cannot show whether gathering continued alongside wheat, because there is no wheat there to continue alongside.'
        },
        tip:'When two readings disagree about the speed of a change, ignore the first and last rows and work in the middle. Only a row where the old practice and the new one overlap can tell a gradual shift from a sudden one.'
      }

    ]
  });
})();
