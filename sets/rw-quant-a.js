/* SAT Studio question set — Reading & Writing: Command of Evidence: Quantitative — Set A (QNT-01 a QNT-30) */
(function(){

  /* ── Constructores ──────────────────────────────────────────────────────────
     Los dos builders DIBUJAN y DESCRIBEN desde el mismo arreglo de datos: el
     aria-label de la gráfica se arma con los mismos valores que pintan las
     barras, así que no se pueden desincronizar. Un estudiante con lector de
     pantalla escucha cada valor con palabras y puede contestar igual. */

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
    id: 'rw-quant-a',
    title: 'Command of Evidence: Quantitative — Set A',
    section: 'rw',
    level: 'Media',
    description: 'Thirty short studies, each with a table or a bar graph. Pick the choice that uses the data correctly; every wrong answer is a real misreading of the same figure.',
    minutes: 35,
    questions: [

      {
        id:'QNT-01', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Quantitative — reading one table column to back a best-of-four claim',
        figure: dataTable({
          caption:'Soil moisture retained after seven days without rain',
          cols:['Mulch','Moisture retained (%)'], align:['left','center'],
          rows:[['Pine bark','41'],['Straw','58'],['Gravel','29'],['Cocoa hull','47']]
        }),
        passage:'The horticulture club at the Rivas Community Garden tested four mulches by spreading each one over an identical plot and then measuring how much of the soil moisture the plot still held after seven days without rain. The club concluded that straw was the most effective of the four mulches at holding moisture in the soil.',
        stem:'Which choice most effectively uses data from the table to support the club’s conclusion?',
        choices:{
          A:'Straw retained 58 percent of soil moisture, more than the 41 percent retained by pine bark.',
          B:'Cocoa hull retained 47 percent of soil moisture, more than pine bark and gravel retained.',
          C:'Straw retained 58 percent of soil moisture, the highest figure in the table.',
          D:'Gravel retained 29 percent of soil moisture, the lowest figure in the table.'
        },
        correct:'C',
        expCorrect:'The claim is that straw beat all three rivals, so the evidence has to be a ranking, not one head-to-head win. The straw row reads 58, and 58 is the largest number in the moisture column: above cocoa hull (47), pine bark (41) and gravel (29). That is exactly what "most effective of the four" requires.',
        expWrong:{
          A:'Both figures are read correctly, but beating pine bark is a single head-to-head win. A best-of-four claim still has to clear cocoa hull at 47 percent, the mulch that comes closest to straw.',
          B:'Cocoa hull really does beat pine bark and gravel, but the conclusion is about straw. Accurate evidence about a different mulch cannot support a claim about this one.',
          D:'29 is the smallest number in the column, so this names the weakest mulch. Knowing which one to avoid is not the same as showing straw was the strongest.'
        },
        tip:'Turn the claim into a test before you read the options. "Best of four" means one number has to beat three, so a choice that cites a single rival, or cites the wrong row, fails the test even when every figure in it is accurate.'
      },

      {
        id:'QNT-02', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Quantitative — reading a bar graph to complete a prediction',
        figure: barChart({
          what:'Average wingspan of three moth species',
          axis:'Wingspan (mm)', unitWord:'millimeters', vmax:80, steps:4,
          rows:[{label:'Ashwing',value:54},{label:'Emberling',value:38},{label:'Duskmoth',value:71}]
        }),
        passage:'Entomologist Nadia Corbeau surveyed three moth species that share a stretch of forest in northern Quebec. Larger moths carry more pollen on their bodies, so Corbeau predicted that the species with the widest average wingspan would move the most pollen on a given night. Of the three species she measured, the one her prediction points to is the Duskmoth, because',
        stem:'Which choice most effectively uses data from the graph to complete the statement?',
        choices:{
          A:'its average wingspan of 71 mm is wider than the Emberling’s 38 mm.',
          B:'its average wingspan of 71 mm is the widest of the three species.',
          C:'its average wingspan of 38 mm is the narrowest of the three species.',
          D:'the Ashwing’s average wingspan of 54 mm falls between the other two.'
        },
        correct:'B',
        expCorrect:'The prediction singles out the widest wingspan of the three, so the sentence needs the ranking. The Duskmoth bar tops out at 71 mm, above the Ashwing (54) and the Emberling (38): widest of the three, which is what the prediction asks for.',
        expWrong:{
          A:'71 and 38 are both read off the graph correctly, but beating one species does not make the Duskmoth the widest. The Ashwing bar at 54 mm is still unaccounted for.',
          C:'38 mm is the Emberling bar, not the Duskmoth bar. The value has been attached to the wrong species, and it also points the wrong way: the prediction is about the widest, not the narrowest.',
          D:'The Ashwing reading is accurate, but the sentence is about the Duskmoth. A fact about the middle bar leaves the Duskmoth claim unsupported.'
        },
        tip:'When a sentence names the subject before the blank, check that the choice reports the bar for that same subject. A value lifted from a neighboring bar is the most common trap in graph questions.'
      },

      {
        id:'QNT-03', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Quantitative — reading a table to support a lowest-value claim',
        figure: dataTable({
          caption:'Caffeine in a 240-milliliter serving, by brewing method',
          cols:['Brewing method','Caffeine (mg)'], align:['left','center'],
          rows:[['Cold brew','205'],['Drip','165'],['French press','143'],['Instant','62']]
        }),
        passage:'A campus cafe measured the caffeine in a standard 240-milliliter serving of each of the four coffees it sells, then posted the results so that customers who are cutting back on caffeine can order accordingly. A sign at the counter advises that anyone who wants the least caffeine per serving should order instant coffee.',
        stem:'Which choice most effectively uses data from the table to support the advice on the sign?',
        choices:{
          A:'Cold brew contains 205 mg of caffeine per serving, the most of the four methods.',
          B:'French press contains 143 mg of caffeine per serving, less than drip and cold brew.',
          C:'Instant coffee contains 62 mg of caffeine per serving, well below the 205 mg in cold brew.',
          D:'Instant coffee contains 62 mg of caffeine per serving, the least of the four methods.'
        },
        correct:'D',
        expCorrect:'The sign claims instant is the lowest-caffeine option on the menu, so the evidence has to place it at the bottom of the column. 62 mg is the smallest number in the table, under French press (143), drip (165) and cold brew (205). That is the claim, stated with the number that proves it.',
        expWrong:{
          A:'205 mg is correct and cold brew really is the strongest, but the sign is advice about the weakest cup. Naming the highest value answers the opposite question.',
          B:'French press does beat drip and cold brew, but the sign recommends instant. This is accurate evidence for a method nobody is claiming anything about.',
          C:'Both numbers are right, and beating cold brew is beating the worst case, but the comparison stops there. Drip at 165 and French press at 143 are still unchecked, so "the least" has not been shown.'
        },
        tip:'Lowest-value claims need the same treatment as highest-value claims: one number has to sit below every other number in the column. Beating the single most extreme rival is not enough on its own.'
      },

      {
        id:'QNT-04', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Quantitative — ranking three bars against one another',
        figure: barChart({
          what:'Average number of seeds per pod, three bean varieties',
          axis:'Seeds per pod', unitWord:'seeds per pod', vmax:16, steps:4,
          rows:[{label:'Rattlepod',value:9},{label:'Solera',value:14},{label:'Tocumen',value:6}]
        }),
        passage:'A seed-saving cooperative in western Panama has one small plot and wants it to yield as many seeds as possible. Agronomist Iris Delvalle grew three bean varieties side by side and counted the seeds inside the pods of each. She recommended that the cooperative plant Solera.',
        stem:'Which choice most effectively uses data from the graph to support Delvalle’s recommendation?',
        choices:{
          A:'Solera pods held an average of 14 seeds, more than Rattlepod’s 9 and Tocumen’s 6.',
          B:'Tocumen pods held an average of 6 seeds, the fewest of the three varieties.',
          C:'Rattlepod pods held an average of 9 seeds, more than the 6 seeds in Tocumen pods.',
          D:'Solera pods held more than twice as many seeds as Rattlepod pods did.'
        },
        correct:'A',
        expCorrect:'The recommendation is that Solera yields the most seeds, so the evidence has to put its bar above both of the others. Solera reads 14, Rattlepod 9 and Tocumen 6: all three values, in the order the recommendation needs.',
        expWrong:{
          B:'6 is the shortest bar on the graph. Identifying the weakest variety tells the cooperative what not to plant; it does not show Solera is the strongest.',
          C:'Rattlepod does beat Tocumen, but Delvalle recommended Solera. This compares the two varieties she did not recommend and leaves her choice unsupported.',
          D:'The right variety, but the graph does not show this: twice Rattlepod’s 9 seeds would be 18, and the Solera bar stops at 14. Overstating what a bar shows is not using the data.'
        },
        tip:'A choice that says "twice as many" or "half as much" is a claim you can check in one second. Double the smaller value and see whether the larger bar actually reaches it.'
      },

      {
        id:'QNT-05', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Quantitative — reading two table columns for change, not level',
        figure: dataTable({
          caption:'Annual attendance at four galleries of the Bellamy Museum',
          cols:['Gallery','Visitors, 2022','Visitors, 2024'], align:['left','center','center'],
          rows:[['Textile Hall','12,400','15,600'],['Clockwork Gallery','4,800','11,200'],['Coin Room','9,100','9,700'],['Maritime Wing','18,300','20,100']]
        }),
        passage:'The Bellamy Museum rewrote and redesigned the labels in a single gallery, the Clockwork Gallery, during its 2023 closure. Director Ilse Brenner wanted to know whether the new labels had drawn people in, so she compared attendance in the year before the closure with attendance in the year after it. She reported that the redesigned gallery showed by far the largest increase of the four.',
        stem:'Which choice most effectively uses data from the table to support Brenner’s report?',
        choices:{
          A:'The Coin Room rose from 9,100 visitors in 2022 to 9,700 in 2024, the smallest gain in the table.',
          B:'The Clockwork Gallery rose from 4,800 visitors in 2022 to 11,200 in 2024, a larger gain than any other gallery.',
          C:'The Maritime Wing drew 20,100 visitors in 2024, more than any other gallery that year.',
          D:'The Clockwork Gallery drew 11,200 visitors in 2024, fewer than the Textile Hall’s 15,600.'
        },
        correct:'B',
        expCorrect:'"Largest increase" is about the gap between the two columns, not about either column on its own. Clockwork went 4,800 to 11,200, a gain of 6,400. The others gained 3,200 (Textile Hall), 600 (Coin Room) and 1,800 (Maritime Wing), so 6,400 really is the biggest jump of the four.',
        expWrong:{
          A:'Every figure is accurate and 600 really is the smallest gain, but the Coin Room is not the gallery that was redesigned. The report is about Clockwork.',
          C:'20,100 is the highest attendance in the table, which is a claim about level, not about change. The Maritime Wing was the busiest gallery in both years and gained only 1,800.',
          D:'True, and that is the point of the trap: Clockwork is still not the best-attended gallery. The report claims the biggest rise, and a gallery can rise the most while remaining below others.'
        },
        tip:'Highlight whether the claim is about a level (biggest, highest, most) or about a change (rose most, grew fastest, biggest gain). For a change claim, subtract the two columns for every row before you look at the options.'
      },

      {
        id:'QNT-06', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Quantitative — reading a bar graph for when a change happened',
        figure: barChart({
          what:'E-book checkouts at the Amberly Public Library',
          axis:'Checkouts (thousands)', unitWord:'thousand checkouts', vmax:60, steps:5,
          rows:[{label:'2019',value:26},{label:'2021',value:44},{label:'2023',value:51},{label:'2025',value:58}]
        }),
        passage:'In 2020 the Amberly Public Library removed the cap on how many e-books a cardholder could borrow at one time. Librarian Teodoro Vance has argued that the cap was the real obstacle: once it was gone, borrowing jumped immediately, and the slower growth since then is ordinary drift rather than a continuing effect of the change.',
        stem:'Which choice most effectively uses data from the graph to support Vance’s argument?',
        choices:{
          A:'Checkouts rose in every period shown, from 26 thousand in 2019 to 58 thousand in 2025.',
          B:'Checkouts reached 58 thousand in 2025, the highest total on the graph.',
          C:'Checkouts climbed from 44 thousand in 2021 to 51 thousand in 2023, the period right after the cap was lifted.',
          D:'Checkouts climbed from 26 thousand in 2019 to 44 thousand in 2021, a bigger rise than either later period.'
        },
        correct:'D',
        expCorrect:'Vance’s claim is about timing: the jump came first and then flattened. The 2019-to-2021 bars rise 26 to 44, a gain of 18 thousand. The next two stretches gain 7 thousand each (44 to 51, then 51 to 58). The first interval is more than twice either of the later ones, which is the shape Vance describes.',
        expWrong:{
          A:'Steady growth in every period is accurate but is the opposite of the argument. If the rise were spread evenly across the years, the cap would not stand out as the cause.',
          B:'58 thousand is the tallest bar, and the newest total is always going to be the highest in a rising series. Being the highest says nothing about when the growth happened.',
          C:'The cap was lifted in 2020, so the period right after it is 2019 to 2021, not 2021 to 2023. This cites the wrong window, and the gain in it, 7 thousand, is one of the smaller ones.'
        },
        tip:'For "the effect was immediate" claims, compute the gain for every consecutive pair of bars and compare the gains, not the heights. The tallest bar and the biggest jump are almost never the same one in a rising series.'
      },

      {
        id:'QNT-07', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Quantitative — telling a rate column from a count column',
        figure: dataTable({
          caption:'Kestrel nests monitored at four sites, 2025 breeding season',
          cols:['Site','Nests monitored','Chicks fledged','Fledging rate (%)'], align:['left','center','center','center'],
          rows:[['Hollow Creek','120','54','45'],['Pinnacle Ridge','40','28','70'],['Salt Flats','96','48','50'],['Windy Gap','25','16','64']]
        }),
        passage:'Ornithologist Selma Achterberg monitored kestrel nests at four sites to find out where the birds raise young most successfully. Because the sites differ enormously in how many nests they hold, she measured success as the share of monitored nests that produced a fledged chick rather than as a raw total. She concluded that Pinnacle Ridge is the most successful of the four sites.',
        stem:'Which choice most effectively uses data from the table to support Achterberg’s conclusion?',
        choices:{
          A:'At Windy Gap, only 25 nests were monitored, the fewest of the four sites.',
          B:'At Hollow Creek, 54 chicks fledged, more than at any other site in the study.',
          C:'At Pinnacle Ridge, 70 percent of monitored nests fledged a chick, the highest rate of the four.',
          D:'At Pinnacle Ridge, 28 chicks fledged, fewer than at Hollow Creek or Salt Flats.'
        },
        correct:'C',
        expCorrect:'Achterberg defined success as a rate, so the evidence belongs in the rate column: 70 percent at Pinnacle Ridge, above Windy Gap (64), Salt Flats (50) and Hollow Creek (45). The rate column is also the only fair one here, since Pinnacle Ridge monitored 40 nests while Hollow Creek monitored 120.',
        expWrong:{
          A:'The reading is correct, but the number of nests monitored is the study’s workload, not its result. A small sample neither helps nor hurts the claim about success.',
          B:'54 really is the largest count of fledged chicks, and that is the trap: Hollow Creek got there by monitoring 120 nests, three times Pinnacle Ridge’s 40. Its rate is 45 percent, the worst of the four.',
          D:'The site is right and 28 is its true count, but the count works against the conclusion. Achterberg chose the rate column precisely because raw totals punish the smaller sites.'
        },
        tip:'When a table gives you both a count and a percentage, read the sentence that defines success. If the researcher says "share" or "rate", a choice built on raw totals is answering a question nobody asked.'
      },

      {
        id:'QNT-08', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Quantitative — checking every bar against a stated threshold',
        figure: barChart({
          what:'Synthetic fiber captured per wash load, three filters',
          axis:'Fiber captured (mg)', unitWord:'milligrams', vmax:80, steps:4,
          rows:[{label:'Mesh bag',value:42},{label:'Inline filter',value:78},{label:'Ball filter',value:25}]
        }),
        passage:'A laundromat owner in Trelew tested three devices that are supposed to trap synthetic fibers before they reach the drain, running identical loads through each and weighing what it caught. The regional water authority certifies any device that captures at least 50 milligrams per load. The owner told her customers that only one of the three devices she tested would earn certification.',
        stem:'Which choice most effectively uses data from the graph to support the owner’s statement?',
        choices:{
          A:'The inline filter captured 78 milligrams per load, while the mesh bag captured 42 and the ball filter 25.',
          B:'The inline filter captured 78 milligrams per load, the most of the three devices tested.',
          C:'The mesh bag captured 42 milligrams per load, more than the ball filter’s 25 milligrams.',
          D:'The ball filter captured 25 milligrams per load, the least of the three devices tested.'
        },
        correct:'A',
        expCorrect:'"Only one would be certified" is two claims at once: one device clears 50 and the other two do not. This choice gives all three bars, so you can check each against the cutoff: 78 is above 50, while 42 and 25 are both below it. Exactly one device qualifies.',
        expWrong:{
          B:'Accurate, and it does establish that the inline filter qualifies. But being the tallest bar says nothing about where the other two fall relative to 50, and that is the half of the statement still unproven.',
          C:'Both readings are correct, and both devices are below the 50-milligram cutoff, so neither would be certified. Ranking two failures against each other has no bearing on the statement.',
          D:'25 is the shortest bar, so this shows one device fails. The statement is about how many pass, and one failure out of three leaves the mesh bag untested.'
        },
        tip:'A threshold claim ("only one qualifies", "all but one fall short") is never settled by the single highest or lowest bar. Count how many values the claim puts on each side of the line, and make sure the choice accounts for all of them.'
      },

      {
        id:'QNT-09', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Quantitative — supporting a claim that spans two table columns',
        figure: dataTable({
          caption:'Mail-order pharmacy delivery performance, four regions',
          cols:['Region','Median delivery time (days)','Orders over 7 days (%)'], align:['left','center','center'],
          rows:[['North Basin','2','8'],['East Shore','4','22'],['South Ridge','3','19'],['West Gate','5','9']]
        }),
        passage:'A mail-order pharmacy promises two things about its deliveries: that they arrive quickly and that they arrive predictably, meaning very few orders take far longer than a typical one. Operations analyst Renata Ilves reviewed the four regions the pharmacy serves and reported that North Basin is the strongest region on both promises at once.',
        stem:'Which choice most effectively uses data from the table to support Ilves’s report?',
        choices:{
          A:'East Shore let 22 percent of orders run past 7 days, the highest share in the table.',
          B:'West Gate let only 9 percent of orders run past 7 days, close to North Basin’s 8 percent.',
          C:'North Basin’s median delivery time of 2 days is the fastest in the table.',
          D:'North Basin posted a median of 2 days and let only 8 percent of orders run past 7 days, the best figure in each column.'
        },
        correct:'D',
        expCorrect:'The report makes a claim about two measures at once, so the evidence has to cover both columns. North Basin is lowest on median time (2 days, against 3, 4 and 5) and lowest on late orders (8 percent, against 9, 19 and 22). Best in both columns is precisely "strongest on both promises".',
        expWrong:{
          A:'22 percent is correctly read and East Shore really is the least predictable region, but naming the worst region is a different claim. It leaves North Basin’s speed untouched.',
          B:'Accurate, and it even brings in the right column, but it makes West Gate look like a near-tie. West Gate’s 5-day median is the slowest in the table, which is why it does not rival North Basin overall.',
          C:'True and relevant, yet it covers only the speed promise. Predictability is the second half of the report, and a fast median can hide a long tail of late orders.'
        },
        tip:'Count the claims in the sentence before you read the options. Two promises, two measures, so a choice that cites only one column can be perfectly accurate and still support only half of what was said.'
      },

      {
        id:'QNT-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Quantitative — comparing two groups of bars, not two bars',
        figure: barChart({
          what:'Carbon stored in the top meter of marsh soil',
          axis:'Carbon (t per hectare)', unitWord:'tonnes per hectare', vmax:400, steps:5,
          rows:[{label:'Quillan',value:212},{label:'Mirebeau',value:348},{label:'Saltbeck',value:287},{label:'Vendrell',value:155}]
        }),
        passage:'Restoring a drained salt marsh is expensive, so coastal manager Aurelio Panza needs to know how much carbon a restored marsh actually stores. His team sampled four marshes in the same estuary. Mirebeau and Saltbeck have never been drained; Quillan and Vendrell were drained a century ago and restored in the 1990s. Panza concluded that thirty years of restoration has not yet brought the restored marshes up to the level of the marshes that were never drained.',
        stem:'Which choice most effectively uses data from the graph to support Panza’s conclusion?',
        choices:{
          A:'Mirebeau stores 348 tonnes per hectare, the most of the four marshes sampled.',
          B:'Quillan stores 212 tonnes per hectare and Vendrell 155, both below Saltbeck’s 287 and Mirebeau’s 348.',
          C:'Quillan stores 212 tonnes per hectare, considerably more than Vendrell’s 155 tonnes per hectare.',
          D:'Vendrell stores 155 tonnes per hectare, less than half of what Mirebeau stores.'
        },
        correct:'B',
        expCorrect:'The conclusion compares two groups, so the evidence has to line up both restored marshes against both undrained ones. The restored pair reads 212 and 155; the undrained pair reads 287 and 348. Every restored value sits below every undrained value, which is what "has not yet caught up" means.',
        expWrong:{
          A:'348 is the tallest bar, and it is an undrained marsh, so the reading is accurate and points the right way. But one bar cannot show that both restored marshes fall short of both undrained ones.',
          C:'Both figures are right, yet this compares the two restored marshes with each other. Ranking members of the same group says nothing about how that group compares with the other one.',
          D:'True, since half of 348 is 174 and Vendrell stores 155. Still, it is one restored marsh against one undrained marsh. Quillan at 212 is the restored marsh that comes closest to Saltbeck, and it is untested here.'
        },
        tip:'When a passage sorts the cases into two groups, the answer almost always names every member of both groups. A choice that cites one bar, or two bars from the same group, is doing less work than the claim requires.'
      },
