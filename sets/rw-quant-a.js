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
          B:'its 71 mm average wingspan is the widest of the three.',
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
          D:'North Basin posted a median of 2 days and let only 8 percent of orders run late, the best in each column.'
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

      {
        id:'QNT-11', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Quantitative — picking the top value in a table column',
        figure: dataTable({
          caption:'Honey harvested in 2025, four rooftop hives',
          cols:['Hive','Honey harvested (kg)'], align:['left','center'],
          rows:[['Lantern Court','18'],['Gasworks','31'],['Rivet Hall','12'],['Stonepier','24']]
        }),
        passage:'A beekeeping collective in Dunmore keeps one hive on each of four rooftops and weighs the honey it takes from every hive at the end of the season. The collective has money for one more hive and wants to put it on the roof that produced the most honey, so it voted to add a second hive at Gasworks.',
        stem:'Which choice most effectively uses data from the table to support the collective’s decision?',
        choices:{
          A:'The Gasworks hive produced 31 kg, the most of the four hives.',
          B:'The Rivet Hall hive produced 12 kg of honey, the least of the four hives.',
          C:'The Stonepier hive produced 24 kg of honey, more than Lantern Court’s 18 kg.',
          D:'The Gasworks hive produced 31 kg of honey, more than Rivet Hall’s 12 kg.'
        },
        correct:'A',
        expCorrect:'The vote rests on one roof beating the other three, so the evidence has to be the top of the column. Gasworks reads 31 kg, above Stonepier (24), Lantern Court (18) and Rivet Hall (12): one number, three rivals cleared.',
        expWrong:{
          B:'The reading is right, and 12 kg really is the bottom of the column, but that identifies the roof to give up on. The vote was about which roof earns a second hive.',
          C:'Both weights are accurate, yet neither hive is the one the collective chose. Stonepier is in fact the runner-up, which is exactly why it cannot stand in as evidence for Gasworks.',
          D:'Right hive, but the comparison is with the weakest rival. Stonepier at 24 kg is the hive that comes closest to Gasworks, and until it is cleared "the most" is unproven.'
        },
        tip:'A "the most" or "the best" claim needs the whole column, not one comparison. Find the largest number first, then check that the choice names the row the passage is defending.'
      },

      {
        id:'QNT-12', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Quantitative — completing a statement from a bar graph',
        figure: barChart({
          what:'Ochre sea stars counted per 100 square meters',
          axis:'Sea stars per 100 m²', unitWord:'sea stars per 100 square meters', vmax:50, steps:5,
          rows:[{label:'Gull Point',value:14},{label:'Basalt Cove',value:39},{label:'Weir Beach',value:26}]
        }),
        passage:'Ochre sea stars along this coast were nearly wiped out by a wasting disease a decade ago. Marine ecologist Hollis Nakagawa counted the survivors at three shorelines to find out where the population is bouncing back fastest. Of the three shorelines she surveyed, the recovery has gone furthest at Basalt Cove, because',
        stem:'Which choice most effectively uses data from the graph to complete the statement?',
        choices:{
          A:'it holds 39 sea stars per 100 square meters, more than Gull Point’s 14.',
          B:'it holds 39 sea stars per 100 square meters, the highest count of the three shorelines.',
          C:'it holds 26 sea stars per 100 square meters, the highest count of the three shorelines.',
          D:'Weir Beach holds 26 sea stars per 100 square meters, more than Gull Point’s 14.'
        },
        correct:'B',
        expCorrect:'The sentence needs the shoreline where recovery has gone furthest, which means the largest count on the graph. The Basalt Cove bar reaches 39 sea stars per 100 square meters, above Weir Beach at 26 and Gull Point at 14.',
        expWrong:{
          A:'Both numbers come straight off the graph, but clearing the lowest bar is the easiest test there is. Weir Beach at 26 sits between them and is never accounted for.',
          C:'26 is the Weir Beach bar, not the Basalt Cove bar. The ranking in the sentence is right; the value attached to it belongs to a different shoreline.',
          D:'Accurate, and it even ranks two shorelines correctly, but the sentence is about Basalt Cove. Evidence about the runner-up cannot finish a sentence about the leader.'
        },
        tip:'Before you compare anything, put your finger on the bar the sentence names. Half of the wrong answers in graph questions are true statements about a neighboring bar.'
      },

      {
        id:'QNT-13', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Quantitative — a table where the winning value is the smallest',
        figure: dataTable({
          caption:'Water used to make one tonne of recycled paper',
          cols:['Mill','Water used (liters per tonne)'], align:['left','center'],
          rows:[['Ashgrove','26,000'],['Bellweir','9,500'],['Carrow','17,200'],['Dunlin','31,400']]
        }),
        passage:'Four mills in the Lower Ainsley valley all make paper from recycled fiber, and all four report how much water they draw for every tonne they produce. A regional trade group gives an annual efficiency award to the mill that uses the least water per tonne, and this year it named Bellweir.',
        stem:'Which choice most effectively uses data from the table to support the trade group’s choice?',
        choices:{
          A:'Dunlin used 31,400 liters per tonne, the most of the four mills.',
          B:'Bellweir used 9,500 liters per tonne, far below Dunlin’s 31,400.',
          C:'Carrow used 17,200 liters per tonne, less than Ashgrove’s 26,000.',
          D:'Bellweir used 9,500 liters per tonne, the least of the four mills.'
        },
        correct:'D',
        expCorrect:'The award goes to the smallest number in the water column, so that is what the evidence has to establish. Bellweir reads 9,500 liters per tonne, under Carrow (17,200), Ashgrove (26,000) and Dunlin (31,400).',
        expWrong:{
          A:'31,400 is read correctly and Dunlin really is the heaviest water user, but an award for efficiency is decided at the other end of the column.',
          B:'The right mill, and the gap is real, yet Dunlin is the easiest mill to beat. Carrow at 17,200 is the nearest competitor and is left untouched.',
          C:'Both figures are accurate, and Carrow does use less water than Ashgrove, but neither mill won. Ranking two also-rans settles nothing about the winner.'
        },
        tip:'When lower is better, the claim still needs a full-column check, only upside down. Read the whole column, find the minimum, and make sure that row is the one the passage names.'
      },

      {
        id:'QNT-14', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Command of Evidence: Quantitative — checking an overstated ratio against the bars',
        figure: barChart({
          what:'Average listeners per weekday show, school radio',
          axis:'Listeners', unitWord:'listeners', vmax:500, steps:5,
          rows:[{label:'Morning Drive',value:210},{label:'Lunch Mix',value:465},{label:'After Bell',value:330}]
        }),
        passage:'The student radio station at Aurora Valley High runs three weekday shows and logs how many people are tuned in to each one. The principal asked where the daily announcements should go so that they reach as many students as possible, and station adviser Bev Quintero recommended Lunch Mix.',
        stem:'Which choice most effectively uses data from the graph to support Quintero’s recommendation?',
        choices:{
          A:'Lunch Mix averages 465 listeners, above After Bell’s 330 and Morning Drive’s 210.',
          B:'After Bell averages 330 listeners, more than Morning Drive’s 210 listeners.',
          C:'Morning Drive averages 210 listeners, the fewest of the three weekday shows.',
          D:'Lunch Mix averages 465 listeners, more than twice what After Bell averages.'
        },
        correct:'A',
        expCorrect:'The recommendation is that Lunch Mix reaches the most students, so the evidence has to put its bar above both of the others. Lunch Mix reads 465 listeners, After Bell 330 and Morning Drive 210: all three bars, in the order the recommendation needs.',
        expWrong:{
          B:'Accurate, but it ranks the two shows that were not recommended. Nothing here touches Lunch Mix, so the announcements have no reason to move.',
          C:'210 is the shortest bar, so this names the show with the smallest audience. The principal asked where to put the announcements, not where to avoid putting them.',
          D:'Right show, wrong arithmetic: twice After Bell’s 330 listeners would be 660, and the Lunch Mix bar stops at 465. Overstating a bar is not reading it.'
        },
        tip:'Check any "twice", "half" or "three times" claim by doing the multiplication on the spot. A ratio the bars do not actually reach turns a true-sounding choice into a false one.'
      },

      {
        id:'QNT-15', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Quantitative — largest rise versus largest total in a table',
        figure: dataTable({
          caption:'Downloads of four episodes of the Low Tide podcast',
          cols:['Episode','Downloads, first week','Downloads, eighth week'], align:['left','center','center'],
          rows:[['Salt Kilns','4,100','4,600'],['Ferry Bells','1,200','5,400'],['The Long Pier','6,800','7,300'],['Night Herons','2,500','3,900']]
        }),
        passage:'Most podcast episodes are downloaded heavily in their first week and then forgotten. Producer Odile Sarrazin went looking for the exception: an episode that kept finding new listeners long after it was posted. She compared first-week downloads with eighth-week downloads for four episodes and singled out Ferry Bells.',
        stem:'Which choice most effectively uses data from the table to support Sarrazin’s choice?',
        choices:{
          A:'The Long Pier drew 7,300 downloads in its eighth week, more than any other episode did.',
          B:'Ferry Bells went from 1,200 downloads in its first week to 5,400 in its eighth, a bigger climb than any other episode made.',
          C:'Night Herons went from 2,500 downloads in its first week to 3,900 in its eighth, a bigger climb than The Long Pier made.',
          D:'Ferry Bells drew 5,400 downloads in its eighth week, fewer than The Long Pier’s 7,300.'
        },
        correct:'B',
        expCorrect:'Sarrazin is looking at the distance between the two columns, not at either column by itself. Ferry Bells goes 1,200 to 5,400, a climb of 4,200. The other three climb 500 (Salt Kilns), 500 (The Long Pier) and 1,400 (Night Herons), so nothing comes close.',
        expWrong:{
          A:'7,300 is the largest number in the eighth-week column, which makes The Long Pier the most downloaded episode, not the one that grew. It gained 500 downloads between the two weeks, the smallest climb in the table.',
          C:'The arithmetic is right: Night Herons climbed 1,400 and The Long Pier only 500. But the episode Sarrazin singled out was Ferry Bells, and its climb of 4,200 dwarfs both of them.',
          D:'True, and that is the point of the trap. An episode can finish behind the leaders and still have traveled the farthest, which is exactly the claim being made.'
        },
        tip:'Two columns of the same quantity are almost always an invitation to subtract. Do the subtraction for every row before you read the options, and the level-versus-change trap disappears.'
      },

      {
        id:'QNT-16', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Quantitative — a floor claim settled by the shortest bar',
        figure: barChart({
          what:'Lowest reservoir storage reached, summer 2025',
          axis:'Storage (% of capacity)', unitWord:'percent of capacity', vmax:80, steps:4,
          rows:[{label:'Beck Hollow',value:58},{label:'Marrow Dam',value:44},{label:'Tinsley',value:71},{label:'Glebe Pond',value:49}]
        }),
        passage:'The Wexhill water authority imposes restrictions on any reservoir whose storage drops below 30 percent of capacity. After an unusually dry summer, residents assumed restrictions were coming, but authority engineer Dara Molyneux told them that not one of the four reservoirs had come anywhere near the limit, even at its lowest point.',
        stem:'Which choice most effectively uses data from the graph to support Molyneux’s statement?',
        choices:{
          A:'Marrow Dam bottomed out at 44 percent of capacity, the lowest of the four and still well above the limit.',
          B:'Tinsley bottomed out at 71 percent of capacity, the highest of the four reservoirs.',
          C:'Marrow Dam bottomed out at 44 percent of capacity, below Glebe Pond’s 49 percent.',
          D:'Beck Hollow bottomed out at 58 percent, above Glebe Pond’s 49 and Marrow Dam’s 44.'
        },
        correct:'A',
        expCorrect:'A claim that nobody crossed a floor is settled by the worst case. Marrow Dam is the shortest bar at 44 percent, and 44 is comfortably above the 30 percent limit. If the lowest reservoir cleared the line, all four did.',
        expWrong:{
          B:'71 percent is the tallest bar, and the fullest reservoir is the one least at risk. Restrictions depend on the emptiest reservoir, which this choice never names.',
          C:'Both readings are correct, but ranking Marrow Dam against Glebe Pond only shows which of the two fell further. Neither is measured against the 30 percent limit the statement is about.',
          D:'Accurate, and it clears two bars at once, yet Beck Hollow is not the reservoir in danger. Showing that a middling reservoir beat two others leaves the worst case unexamined.'
        },
        tip:'For "none fell below" claims look only at the minimum; for "none rose above" claims, only at the maximum. One extreme bar decides the whole set, and every choice about a different bar is noise.'
      },

      {
        id:'QNT-17', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Quantitative — weighing two table columns at once',
        figure: dataTable({
          caption:'Field trial of four rice varieties, 2025 season',
          cols:['Variety','Grain yield (t per hectare)','Irrigation water used (mm)'], align:['left','center','center'],
          rows:[['Mirador','6.2','980'],['Sarrow','7.1','1,340'],['Pelan','6.9','870'],['Kitu','5.4','1,120']]
        }),
        passage:'Irrigation water in the Anselm district is rationed, so the research station is not simply looking for the biggest harvest: it wants a variety that yields near the top of the field while drawing less water than the alternatives. After a season of side-by-side plots, the station recommended Pelan to local growers.',
        stem:'Which choice most effectively uses data from the table to support the station’s recommendation?',
        choices:{
          A:'Sarrow yielded 7.1 tonnes per hectare and used 1,340 mm of water, the highest figure in each column.',
          B:'Pelan yielded 6.9 tonnes per hectare, behind only Sarrow’s 7.1, and used 870 mm of water, the least of the four.',
          C:'Kitu used 1,120 mm of water and yielded 5.4 tonnes per hectare, the lowest yield of the four varieties.',
          D:'Mirador used 980 mm of water, less than Sarrow’s 1,340 mm and Kitu’s 1,120 mm.'
        },
        correct:'B',
        expCorrect:'The recommendation has two halves, so the evidence needs both columns. Pelan is second on yield at 6.9, a tenth behind Sarrow’s 7.1 and ahead of Mirador (6.2) and Kitu (5.4), and it is first on water at 870 mm, under Mirador (980), Kitu (1,120) and Sarrow (1,340). Near the top on yield, lowest on water.',
        expWrong:{
          A:'Every reading is right, and that is what makes it tempting: Sarrow does top the yield column. It also tops the water column, which in a rationed district is the worst place to be, and it is not the variety recommended.',
          C:'Accurate on both counts, but 5.4 is the bottom of the yield column. A variety that saves water by producing less grain fails the first half of the recommendation.',
          D:'True, and water is the right column to be reading, but Pelan at 870 mm uses less than Mirador does. The choice makes the case for the runner-up.'
        },
        tip:'Underline every requirement in the recommendation before reading the options. With two requirements, a choice covering one column is at best half an answer, no matter how accurate it is.'
      },

      {
        id:'QNT-18', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Quantitative — where growth stalled in a bar graph',
        figure: barChart({
          what:'New rooftop solar capacity installed, Calder co-op',
          axis:'Capacity added (kW)', unitWord:'kilowatts', vmax:300, steps:3,
          rows:[{label:'2021',value:120},{label:'2022',value:185},{label:'2023',value:240},{label:'2024',value:248}]
        }),
        passage:'The Calder co-op installs rooftop solar for its members and had been adding more capacity every year. Then two of its three installation crews left for a commercial contractor at the start of 2024. Coordinator Wes Ferreiro argues that the co-op never ran out of customers; it ran out of crews, and the graph shows growth flattening exactly when the crews went.',
        stem:'Which choice most effectively uses data from the graph to support Ferreiro’s argument?',
        choices:{
          A:'The co-op added 248 kW in 2024, more capacity than in any other year shown.',
          B:'The co-op added 120 kW in 2021, then 185 kW and 240 kW, but only 248 kW in 2024.',
          C:'The co-op added 120 kW in 2021 and 185 kW in 2022, its first two years on the graph.',
          D:'The co-op added more capacity in each of the four years shown, from 120 kW to 248 kW.'
        },
        correct:'B',
        expCorrect:'Ferreiro’s claim is about the shape of the series, not its height. The first three bars step up by 65 and then 55 kilowatts; the last step, in the year the crews left, runs 240 to 248, a move of 8. Laying all four bars side by side is what makes the flattening visible.',
        expWrong:{
          A:'248 kW is the tallest bar, and in a series that never falls the last year is always the tallest. Being the highest total says nothing about how much the total grew.',
          C:'Both readings are right, and the 120-to-185 step is real growth, but it stops before the year the argument is about. The crews left at the start of 2024.',
          D:'True: every year added more than the year before. That is the version of the story Ferreiro is arguing against, since uninterrupted growth would mean the crews made no difference.'
        },
        tip:'"Growth stalled" is a statement about the gaps between bars, not the bars. Write the step sizes in the margin and the year that breaks the pattern usually names itself.'
      },

      {
        id:'QNT-19', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Quantitative — units sold versus money earned in a table',
        figure: dataTable({
          caption:'Museum shop sales, spring quarter',
          cols:['Item','Units sold','Revenue (dollars)'], align:['left','center','center'],
          rows:[['Postcard set','2,840','4,260'],['Enamel pin','1,150','9,200'],['Tote bag','620','11,160'],['Bookmark','3,900','2,730']]
        }),
        passage:'Shelf space in the Havelock Museum shop is tight enough that one of its four best-known items has to go. Manager Peggy Oduya decided the shop should keep whichever item brings in the most money, not whichever one moves the most pieces, and on that basis she kept the tote bag.',
        stem:'Which choice most effectively uses data from the table to support Oduya’s decision?',
        choices:{
          A:'The bookmark sold 3,900 units, more than any other item in the shop.',
          B:'The enamel pin brought in 9,200 dollars on only 1,150 units sold.',
          C:'The tote bag brought in 11,160 dollars, the most of the four.',
          D:'The bookmark brought in 2,730 dollars, the least of the four items.'
        },
        correct:'C',
        expCorrect:'Oduya said money, not pieces, so the evidence belongs in the revenue column. The tote bag reads 11,160 dollars, above the enamel pin (9,200), the postcard set (4,260) and the bookmark (2,730). It does this on 620 units, the fewest in the table, which is precisely why the units column would have pointed the wrong way.',
        expWrong:{
          A:'3,900 is the largest number in the units column, and the bookmark is the item Oduya was explicitly not choosing by. It earned 2,730 dollars, the least of the four.',
          B:'Both figures are accurate and the reasoning is the right kind, since the pin earns a lot on few units. But the pin is the runner-up at 9,200 dollars, and the decision was about the tote bag.',
          D:'True, and it correctly identifies the weakest earner. Naming what to drop is not the same as showing which item to keep, and the tote bag is never mentioned.'
        },
        tip:'When a table offers two ways to rank the same rows, the passage will say which one counts. Rank by that column alone; the other column is there to make a wrong answer look reasonable.'
      },

      {
        id:'QNT-20', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Quantitative — one bar against the sum of the others',
        figure: barChart({
          what:'Emergency calls answered in 2025, by station',
          axis:'Calls answered', unitWord:'calls', vmax:1200, steps:4,
          rows:[{label:'Quarry Rd',value:410},{label:'Mill Bend',value:1180},{label:'Oak Tier',value:265},{label:'Pennywell',value:305}]
        }),
        passage:'The Havenport fire department runs four stations, and after last year’s budget cut one of them is down to a single engine. Chief Malia Terrell is asking the council for a replacement engine at Mill Bend, arguing that the station handles more calls on its own than the department’s other three stations handle put together.',
        stem:'Which choice most effectively uses data from the graph to support Terrell’s argument?',
        choices:{
          A:'Mill Bend answered 1,180 calls, more than any other station in the department by a wide margin.',
          B:'Mill Bend answered 1,180 calls, nearly three times as many as Quarry Road’s 410 calls.',
          C:'Oak Tier answered 265 calls, the fewest of the four stations in the department.',
          D:'Mill Bend’s 1,180 calls exceed Quarry Road’s 410, Oak Tier’s 265 and Pennywell’s 305 combined.'
        },
        correct:'D',
        expCorrect:'The argument is not that Mill Bend is busiest but that it outworks the rest of the department combined, so the evidence has to add the other three. Quarry Road 410, Oak Tier 265 and Pennywell 305 come to 980, and Mill Bend alone answered 1,180. The sum is the only version of the comparison that matches the claim.',
        expWrong:{
          A:'Every reading is right and Mill Bend is indeed the busiest station, but "busiest" is a weaker claim than the one Terrell made. The tallest bar can still be smaller than the other three added together.',
          B:'Three times 410 is 1,230, so "nearly three times" fairly describes the 1,180 bar. It is still a comparison with one station, and Oak Tier and Pennywell add another 570 calls between them.',
          C:'265 is the shortest bar, so this names the quietest station. Terrell is asking for an engine at the busiest one, and this choice never mentions it.'
        },
        tip:'"More than the others combined" means you have to add. It is a stronger claim than "the most", and a choice that only proves "the most" leaves the harder half of the sentence unsupported.'
      },

      {
        id:'QNT-21', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Quantitative — relative growth versus added amount in a table',
        figure: dataTable({
          caption:'Households connected to the village water main',
          cols:['Village','Connected in 2015','Connected in 2025'], align:['left','center','center'],
          rows:[['Tamsden','40','160'],['Orrey','600','900'],['Fiskby','210','380'],['Culvane','95','230']]
        }),
        passage:'A rural water program measures its progress by how far a village has come relative to where it started, not by how many households it added, since a large village will always add more than a small one. Program engineer Hasna Berglund reported that on that measure the program went furthest in Tamsden over the past decade.',
        stem:'Which choice most effectively uses data from the table to support Berglund’s report?',
        choices:{
          A:'Tamsden went from 40 connected households to 160, four times as many, while Orrey went from 600 to 900.',
          B:'Orrey added the most households of any village, going from 600 connected in 2015 to 900 in 2025.',
          C:'Tamsden had 160 connected households in 2025, the fewest of the four villages.',
          D:'Culvane went from 95 connected households to 230, more than doubling over the decade.'
        },
        correct:'A',
        expCorrect:'Relative growth means dividing, not subtracting. Tamsden multiplied its connections by four, 40 to 160; Orrey by 1.5, 600 to 900; Fiskby by about 1.8; Culvane by about 2.4. Four is the largest multiple in the table, and pairing Tamsden with Orrey shows exactly why the added-households ranking says the opposite.',
        expWrong:{
          B:'The reading is right, and Orrey did add 300 households, more than any other village. Berglund said in so many words that she was not counting added households, because the biggest village wins that comparison automatically.',
          C:'True: 160 is the smallest number in the 2025 column. Where a village finishes is not the measure in question, and Tamsden manages to be both the smallest village and the fastest-growing one.',
          D:'Culvane really did more than double, 95 to 230, and doubling is the right kind of evidence. It is simply the wrong village, since Tamsden quadrupled.'
        },
        tip:'"Relative to where it started" means divide the new number by the old one. Absolute gains and multiples routinely rank the rows in opposite orders, and the passage tells you which order it wants.'
      },

      {
        id:'QNT-22', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Command of Evidence: Quantitative — matching a stated ratio to the right pair of bars',
        figure: barChart({
          what:'Cordless drill run time on one full charge',
          axis:'Run time (minutes)', unitWord:'minutes', vmax:120, steps:4,
          rows:[{label:'2009',value:48},{label:'2014',value:63},{label:'2019',value:88},{label:'2024',value:96}]
        }),
        passage:'The Wrexbury repair cafe tests every donated drill on a full charge before reselling it. Volunteers routinely steer buyers away from the oldest model, and some tell them it will not last a quarter as long as a new one. Coordinator Niall Osgood thinks that is unfair: refurbished, the 2009 drill runs half as long as the brand-new 2024 model, which is plenty for occasional jobs.',
        stem:'Which choice most effectively uses data from the graph to support Osgood’s position?',
        choices:{
          A:'The 2009 model ran 48 minutes on a charge, the shortest run time of the four.',
          B:'The 2009 model ran 48 minutes, exactly half of the 2024 model’s 96.',
          C:'The 2014 model ran 63 minutes on a charge, about two thirds of the 2024 model’s 96.',
          D:'The 2019 model ran 88 minutes on a charge, close to the 2024 model’s 96 minutes.'
        },
        correct:'B',
        expCorrect:'Osgood put a number on the comparison: half. Half of the 2024 model’s 96 minutes is 48, and the 2009 bar sits at exactly 48. The pair of bars named in the claim is the pair the evidence has to cite.',
        expWrong:{
          A:'True, and it is the volunteers’ complaint restated. Osgood is not denying that the 2009 drill is the weakest; he is disputing how weak, and "shortest" carries no ratio at all.',
          C:'The arithmetic checks out, since two thirds of 96 is 64 and the 2014 bar reads 63. The claim, though, was about the 2009 model, and the 2014 model is a different drill.',
          D:'Accurate: 88 and 96 are close. But showing that the second-newest drill nearly matches the newest says nothing about the oldest one, which is the drill buyers are being steered away from.'
        },
        tip:'When a claim contains a ratio, test the ratio on the two bars the claim names. A choice that gets a ratio right on the wrong pair of bars is the most convincing wrong answer there is.'
      },

      {
        id:'QNT-23', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Quantitative — every member of one group above every member of another',
        figure: dataTable({
          caption:'Oyster density at six reefs in the Marrow Estuary, 2025',
          cols:['Reef','Reef type','Oysters per square meter'], align:['left','left','center'],
          rows:[['Bell Shoal','Seeded','212'],['Cradle Bar','Seeded','178'],['Dover Flats','Seeded','195'],['Eel Point','Natural','141'],['Fanning Hole','Natural','166'],['Gorse Bank','Natural','158']]
        }),
        passage:'Four years ago the Marrow Estuary trust seeded three bare reefs with hatchery oysters and left three naturally occurring reefs alone for comparison. Biologist Tomas Wrenfield now claims something stronger than an average difference: every seeded reef, he says, is denser than every one of the natural reefs in the estuary.',
        stem:'Which choice most effectively uses data from the table to support Wrenfield’s claim?',
        choices:{
          A:'Bell Shoal, a seeded reef, holds 212 oysters per square meter, the highest density in the table.',
          B:'Eel Point, a natural reef, holds 141 oysters per square meter, the lowest density in the table.',
          C:'The thinnest seeded reef, Cradle Bar at 178, still holds more oysters than the densest natural reef, Fanning Hole at 166.',
          D:'Dover Flats, a seeded reef, holds 195 oysters per square meter, more than Gorse Bank’s 158 and Eel Point’s 141.'
        },
        correct:'C',
        expCorrect:'"Every one above every one" is settled by the two reefs closest to each other across the divide: the weakest seeded reef and the strongest natural one. Cradle Bar at 178 is the lowest of the seeded three, Fanning Hole at 166 the highest of the natural three, and 178 beats 166. Once that pair falls the right way, all nine pairings do.',
        expWrong:{
          A:'212 is the largest number in the table and it does belong to a seeded reef. The strongest seeded reef beating everyone leaves Cradle Bar at 178 untested, and Cradle Bar is where the claim could have failed.',
          B:'141 is the smallest number in the table, so the weakest natural reef loses to everything. That is the easy end of the comparison; the hard end is Fanning Hole at 166.',
          D:'All three readings are accurate, and Dover Flats does beat two of the natural reefs. It is compared with the two weakest ones, and Fanning Hole at 166 never appears.'
        },
        tip:'For a claim that every member of one group beats every member of another, exactly one comparison matters: the worst of the winning group against the best of the losing group. Find those two rows and ignore the rest.'
      },

      {
        id:'QNT-24', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Quantitative — locating the one-year window a claim names',
        figure: barChart({
          what:'Share of ferry crossings that arrived on time',
          axis:'On-time arrivals (%)', unitWord:'percent', vmax:100, steps:5,
          rows:[{label:'2022',value:62},{label:'2023',value:68},{label:'2024',value:79},{label:'2025',value:84}]
        }),
        passage:'The Kilmore ferry operator switched to new scheduling software partway through 2023, so 2024 was the first full year it was in use. The operator’s annual report credits the software with the largest single-year jump in punctuality the route has seen, and insists the jump arrived in that first full year rather than spreading itself out.',
        stem:'Which choice most effectively uses data from the graph to support the report’s claim?',
        choices:{
          A:'Punctuality rose from 68 percent in 2023 to 79 in 2024, a bigger one-year jump than either other step.',
          B:'Punctuality reached 84 percent in 2025, the highest share anywhere on the graph.',
          C:'Punctuality rose from 62 percent in 2022 to 84 percent in 2025, a gain across every year shown.',
          D:'Punctuality rose from 62 percent in 2022 to 68 percent in 2023, the year the software was installed.'
        },
        correct:'A',
        expCorrect:'The claim names a specific year and a specific kind of number: the biggest one-year jump, landing in 2024. The three steps are 62 to 68, 68 to 79, and 79 to 84 — six points, then eleven, then five. The middle step, the first full year of the software, is the largest of the three.',
        expWrong:{
          B:'84 percent is the tallest bar, and in a series that rises every year the last one always is. The report is about a jump, and 2025 delivered the smallest of the three.',
          C:'The reading is right and punctuality really did improve over the period. Spreading the gain across all three steps is the gradual story the report is arguing against.',
          D:'The software arrived partway through 2023, which is why the report speaks of 2024 as the first full year. This cites the partial year, and its six-point step is not the biggest anyway.'
        },
        tip:'Circle the exact window the claim names before comparing anything. "Installed during 2023" and "first full year" point at different bars, and the trap answer is the one that takes the earlier date literally.'
      },

      {
        id:'QNT-25', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Quantitative — a two-column pattern across four rows',
        figure: dataTable({
          caption:'Average morning commute, minutes, before and after the bus lane',
          cols:['Corridor','Before (min)','After (min)'], align:['left','center','center'],
          rows:[['Vellum Road','34','27'],['Sparrow Hill','41','39'],['Tanner Cross','28','19'],['Ironbridge','52','51']]
        }),
        passage:'The Brackwater transport board expected its new bus lane to do the most good on the corridors that were already the worst. Analyst Dov Halperin reported the opposite pattern: the two corridors that were quickest to begin with gained several minutes each, while the two slowest barely moved at all.',
        stem:'Which choice most effectively uses data from the table to support Halperin’s report?',
        choices:{
          A:'Ironbridge fell from 52 minutes to 51, leaving it the longest commute in the table both before and after the lane.',
          B:'Tanner Cross fell from 28 minutes to 19, leaving it the shortest commute in the table both before and after.',
          C:'Tanner Cross fell 28 to 19 and Vellum Road 34 to 27, while Sparrow Hill fell 41 to 39 and Ironbridge 52 to 51.',
          D:'Vellum Road fell from 34 minutes to 27, a bigger saving than Sparrow Hill managed in dropping from 41 to 39.'
        },
        correct:'C',
        expCorrect:'The report is a pattern across all four rows, so the evidence has to show all four. The quick pair saves 9 minutes (28 to 19) and 7 minutes (34 to 27); the slow pair saves 2 minutes (41 to 39) and 1 minute (52 to 51). Ranked by starting time, the savings run 9, 7, 2, 1 — the reverse of what the board expected.',
        expWrong:{
          A:'Both numbers are right, and Ironbridge is indeed the corridor that barely moved. One row cannot establish a pattern, and nothing here shows that the quick corridors did any better.',
          B:'Accurate, and Tanner Cross is the corridor that gained the most. This is the other single row, and on its own it fits the board’s expectation just as comfortably as Halperin’s.',
          D:'A real comparison pointing the right way, and the closest of the three wrong answers. It covers one corridor from each pair and leaves out Tanner Cross, the biggest gain, and Ironbridge, the smallest.'
        },
        tip:'A claim about a pattern needs every row, not the two rows that show it best. If the passage sorts the rows into groups, check that the choice reports both groups in full.'
      },

      {
        id:'QNT-26', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Command of Evidence: Quantitative — dating a turning point on a bar graph',
        figure: barChart({
          what:'Seabird pairs counted at the Stennis Head colony',
          axis:'Breeding pairs', unitWord:'breeding pairs', vmax:1200, steps:4,
          rows:[{label:'1995',value:820},{label:'2005',value:1140},{label:'2015',value:1060},{label:'2025',value:640}]
        }),
        passage:'The offshore wind farm at Stennis Head began turning in 2018, and campaigners blame it for the collapse of the seabird colony on the headland. Warden Bram Okonkwo is not defending the turbines, but he insists the colony was already shrinking before they arrived, so any account that starts in 2018 is incomplete.',
        stem:'Which choice most effectively uses data from the graph to support Okonkwo’s position?',
        choices:{
          A:'The colony held 640 pairs in 2025, the smallest count on the graph.',
          B:'The colony grew from 820 pairs in 1995 to 1,140 pairs in 2005.',
          C:'The colony fell from 1,060 pairs in 2015 to 640 in 2025, the steepest fall on the graph.',
          D:'The colony held 1,140 pairs in 2005 but 1,060 in 2015, three years before the turbines started.'
        },
        correct:'D',
        expCorrect:'Okonkwo needs a decline that predates 2018, and only one pair of bars can give him one. The colony peaked at 1,140 pairs in 2005 and was already down to 1,060 by 2015, three years before the turbines turned. The drop is small, but it sits on the wrong side of 2018 for the campaigners’ account.',
        expWrong:{
          A:'True, and it measures the damage, but the newest count is the one furthest inside the wind farm era. It can say nothing about what was happening before 2018.',
          B:'Accurate, and it covers the years before the turbines, which is the right stretch of time. It shows the colony growing, which is the opposite of the trend Okonkwo says was already under way.',
          C:'The largest change on the graph, and the temptation is to reach for it. That window runs from 2015 to 2025 and contains 2018, so it is the very period the campaigners already claim; it cannot show the decline started earlier.'
        },
        tip:'When an argument is about whether a trend started before a date, sort the intervals by when they happened and ignore how big they are. The biggest change is usually in the wrong window, which is why it is offered.'
      },

      {
        id:'QNT-27', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Quantitative — a treatment that works for one group and not the other',
        figure: dataTable({
          caption:'Germination after five years of storage',
          cols:['Species','Seed type','Frozen at −18 °C (%)','Chilled at 4 °C (%)'], align:['left','left','center','center'],
          rows:[['Hazel vetch','Oily','86','54'],['Marsh flax','Oily','79','41'],['Pale millet','Starchy','62','64'],['Rock barley','Starchy','58','57']]
        }),
        passage:'Running a seed bank at freezer temperature costs far more than chilling it, so curator Ottoline Reyes wanted to know which seeds actually need the freezer. She stored four species at both temperatures for five years. Two of them, Hazel vetch and Marsh flax, have oily seeds; the other two are starchy. Reyes concluded that the freezer earns its electricity for the oily species and makes almost no difference for the starchy ones.',
        stem:'Which choice most effectively uses data from the table to support the conclusion Reyes reached?',
        choices:{
          A:'Hazel vetch germinated at 86 percent when frozen, the highest figure anywhere in the table.',
          B:'Pale millet germinated at 64 percent when chilled and 62 percent when frozen, a difference of two points.',
          C:'Hazel vetch fell from 86 percent frozen to 54 percent chilled, and Marsh flax fell from 79 percent to 41 percent.',
          D:'The oily pair fell from 86 and 79 percent frozen to 54 and 41 chilled; the starchy pair moved only 62 to 64 and 58 to 57.'
        },
        correct:'D',
        expCorrect:'The conclusion has two halves and four rows, and only this choice reports all of them. Freezing gains the oily species 32 points (86 against 54) and 38 points (79 against 41). For the starchy pair it gains nothing: Pale millet is 2 points worse frozen and Rock barley 1 point better. Large for the oily seeds, negligible for the starchy ones.',
        expWrong:{
          A:'The reading is right and 86 percent is the best result in the table, but a single cell cannot compare two temperatures, let alone two seed types. Nothing here says what Hazel vetch did in the chiller.',
          B:'Accurate, and it makes the starchy half of the case: for Pale millet the freezer is not worth paying for. The oily half is untouched, and that is where the expensive decision actually lies.',
          C:'Both rows are read correctly, and this is the strongest of the wrong answers, since it proves the freezer helps the oily species. It never mentions the starchy species, so the half of the conclusion that saves money has no support at all.'
        },
        tip:'When a conclusion says a treatment works for one group but not another, it is two claims wearing one sentence. The answer has to show the effect in one group and its absence in the other; either half alone is half an answer.'
      },

      {
        id:'QNT-28', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Quantitative — comparing a sum of bars with a single bar',
        figure: barChart({
          what:'Campus emissions by source, 2025',
          axis:'Emissions (tonnes)', unitWord:'tonnes', vmax:5000, steps:5,
          rows:[{label:'Heating',value:4180},{label:'Electricity',value:2640},{label:'Commuting',value:1950},{label:'Waste',value:410}]
        }),
        passage:'The sustainability office at Corvan University keeps being asked to run campaigns about carpooling and recycling. Director Yusra Almeida says the arithmetic does not work: even if the campus eliminated its commuting and waste emissions entirely, it would still cut less than it would by replacing the heating plant alone.',
        stem:'Which choice most effectively uses data from the graph to support the statement Almeida made?',
        choices:{
          A:'Commuting and waste account for 1,950 and 410 tonnes, while heating alone accounts for 4,180 tonnes.',
          B:'Heating accounts for 4,180 tonnes, more of the campus total than any other source on the graph.',
          C:'Waste accounts for 410 tonnes, the smallest source of emissions on the graph.',
          D:'Electricity accounts for 2,640 tonnes, more than commuting’s 1,950 and waste’s 410 taken together.'
        },
        correct:'A',
        expCorrect:'The statement compares a sum with a single bar, so the evidence has to name all three sources. Commuting and waste come to 2,360 tonnes together, and the heating bar alone is 4,180. Wiping out both of the targeted sources would cut barely half of what the heating plant emits.',
        expWrong:{
          B:'Accurate, and heating is the largest source, but the largest source is not automatically larger than two others combined. The comparison Almeida made requires the addition, and this choice never does it.',
          C:'410 tonnes is the shortest bar, so this shows that waste is small. Commuting at 1,950 tonnes is nearly five times as large, and it is the other half of what the campaigns target.',
          D:'The arithmetic is right: 1,950 and 410 come to 2,360, under electricity’s 2,640. It compares the two small sources with the wrong bar, since the statement was about the heating plant at 4,180.'
        },
        tip:'A claim shaped like "even all of X and Y together is less than Z" is an addition problem. Add the small bars first, then compare the total with the bar the claim actually names.'
      },

      {
        id:'QNT-29', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Quantitative — raw counts versus the rate in the next column',
        figure: dataTable({
          caption:'Applications and offers at four conservatory programs, 2025',
          cols:['Program','Applications','Offers made','Offer rate (%)'], align:['left','center','center','center'],
          rows:[['Cello','480','72','15'],['Percussion','150','45','30'],['Voice','920','92','10'],['Harp','60','27','45']]
        }),
        passage:'Applicants to the Bellhurst Conservatory often assume that a program handing out plenty of offers must be easier to get into. Admissions officer Tarek Djebbar tells them the reverse can be true, and points at his own numbers: the program that made the most offers last year was the hardest to enter, and the one that made the fewest was the easiest.',
        stem:'Which choice most effectively uses data from the table to support the point Djebbar makes?',
        choices:{
          A:'Voice received 920 applications, more than any other program at the conservatory.',
          B:'Harp made 27 offers at a rate of 45 percent, the highest offer rate of the four programs.',
          C:'Voice made the most offers, 92, at a rate of 10 percent; Harp made the fewest, 27, at a rate of 45 percent.',
          D:'Percussion made 45 offers at a rate of 30 percent, while Cello made 72 offers at a rate of 15 percent.'
        },
        correct:'C',
        expCorrect:'The point pairs the two extremes of the offers column with the two extremes of the rate column, and only this choice reports both ends. Voice tops the offers column with 92 and sits at the bottom of the rate column with 10 percent; Harp is last in offers with 27 and first in rate with 45 percent. Count and rate rank the programs in opposite orders, which is the whole argument.',
        expWrong:{
          A:'920 is the largest number in the applications column, and it does explain how Voice can make many offers and stay selective. Applications by themselves say nothing about how hard a program is to enter, and the argument is about offers.',
          B:'Both figures are accurate and Harp is genuinely the easiest program to enter. That is one end of the argument; the program making the most offers is never mentioned, and without it the reversal is not shown.',
          D:'Every number is correct, and the two programs do line up as described: more offers, lower rate. Djebbar named the extremes, the most offers and the fewest, and neither Percussion nor Cello is either one.'
        },
        tip:'When a claim names "the most" and "the fewest" of something, the answer has to cite those exact rows. A middle pair that happens to show the same pattern is the classic near-miss.'
      },

      {
        id:'QNT-30', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Command of Evidence: Quantitative — adding every bar to test an annual cap',
        figure: barChart({
          what:'Overnight permit requests at Sablewood Park, 2025',
          axis:'Permit requests', unitWord:'requests', vmax:5000, steps:5,
          rows:[{label:'Q1',value:980},{label:'Q2',value:2640},{label:'Q3',value:4510},{label:'Q4',value:1320}]
        }),
        passage:'Sablewood National Park issues 9,000 overnight permits a year and has always handed them out first-come, first-served. Ranger Imogen Baptiste is proposing a lottery instead, on the grounds that requests in 2025 finally passed the annual ceiling, so the old system now turns hikers away with no fair way of choosing among them.',
        stem:'Which choice most effectively uses data from the graph to support the proposal Baptiste makes?',
        choices:{
          A:'Requests peaked at 4,510 in the third quarter, more than in any other quarter of the year.',
          B:'Requests ran 980, 2,640, 4,510 and 1,320, more than 9,000 in all.',
          C:'Requests in the second and third quarters, 2,640 and 4,510, came to more than 7,000 on their own.',
          D:'Requests fell from 4,510 in the third quarter to 1,320 in the fourth, the sharpest move of the year.'
        },
        correct:'B',
        expCorrect:'The proposal rests on the year’s total crossing 9,000, so every quarter has to be counted. 980 plus 2,640 plus 4,510 plus 1,320 is 9,450, which is 450 above the ceiling. No single quarter and no pair of quarters can show this; only the full year does.',
        expWrong:{
          A:'4,510 is the tallest bar and the busiest quarter, but one quarter reaches only half the ceiling. A peak says when demand arrives, not whether the year as a whole ran out of permits.',
          C:'The addition is right: 2,640 and 4,510 come to 7,150. That is still 1,850 short of the 9,000 ceiling, so the two busiest quarters together do not make the case.',
          D:'Both readings are accurate and that drop of 3,190 is the largest change on the graph. A seasonal swing has no bearing on an annual ceiling, which is about the sum and not the shape.'
        },
        tip:'A claim measured against an annual limit needs the annual total. Add every bar before you compare, and treat "the biggest quarter" or "the two biggest quarters" as an invitation to stop counting too early.'
      }

    ]
  });
})();
