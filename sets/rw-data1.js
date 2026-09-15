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
          A:'Fiberglass let through 15 W of heat, far below brick’s 48 W and plywood’s 63 W of heat loss.',
          B:'Foam board let through 22 W of heat, less than both brick’s 48 W and plywood’s 63 W.',
          C:'Plywood let through 63 W of heat, the highest heat loss of the four materials tested.',
          D:'Fiberglass let through only 15 W of heat, the lowest heat loss of the four materials.'
        },
        correct:'D',
        expCorrect:'The claim is that fiberglass was the BEST insulator, and less heat loss = better. D cites the right number (15 W) and adds the key part: it is the LOWEST loss of the four. That proves it was the best.',
        expWrong:{
          A:'Every figure is right and fiberglass does beat brick and plywood, but it skips foam board (22 W), the only material close to it; without ruling that one out you cannot say "the best of the four".',
          B:'Foam board (22 W) really does beat brick and plywood, but the conclusion is about FIBERGLASS; this is evidence for the wrong material.',
          C:'63 W is the WORST result in the table. Naming the weakest insulator tells you which material to avoid, not that fiberglass is the best.'
        },
        tip:'Method: 1) read the exact CLAIM (fiberglass = the best), 2) translate "best insulator" into the number that matters (the LOWEST loss), 3) pick the option saying "the lowest of the four", not a partial comparison.'
      },
      {
        id:'DATA-02', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Interpreting Data in Context',
        figure: FIG_RAINFALL,
        passage:"A geography student compared the average annual rainfall of three towns, shown in the bar graph. The student claimed that Deepwater receives the most rainfall of the three towns.",
        stem:'Which choice most effectively uses data from the graph to support the student’s claim?',
        choices:{
          A:'Deepwater receives 61 cm of rain per year, more than either Kestrel or Marlow.',
          B:'Kestrel receives 38 cm of rain per year, the least of the three towns on the graph.',
          C:'Marlow receives 52 cm of rain per year, more than Kestrel’s 38 cm of annual rainfall.',
          D:'Deepwater receives 61 cm of rain per year, and Marlow receives 52 cm of rain per year.'
        },
        correct:'A',
        expCorrect:'The claim is that Deepwater gets MORE rain than the other two. A cites the right figure (61 cm) and makes clear it beats Kestrel AND Marlow. Being greater than both, it supports the claim directly.',
        expWrong:{
          B:'Kestrel’s 38 cm identifies the DRIEST town of the three. The claim is about the wettest, so this accurate figure answers the opposite question.',
          C:'Marlow really does beat Kestrel, but both are rivals of Deepwater; a comparison between the two losing towns never places Deepwater first.',
          D:'Both figures are correct, but the comparison stops at Marlow. Kestrel’s 38 cm is never ruled out, so the option falls short of "the most" of the THREE.'
        },
        tip:'Method: 1) read the CLAIM (Deepwater = the most), 2) find its bar on the graph (61, the tallest), 3) pick the option comparing it with BOTH rivals, not with only one or the one about another town.'
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
          A:'Attendance in Week 4 reached 50 patrons, more than double the 24 patrons who came in Week 1.',
          B:'Attendance rose each week, climbing from 24 in Week 1 to 31, then 39, then 50 by Week 4.',
          C:'Week 1 drew 24 patrons, the lowest attendance of the four weeks in the month.',
          D:'Attendance climbed from 24 patrons in Week 1 to 31 in Week 2, a gain of seven patrons.'
        },
        correct:'B',
        expCorrect:'The claim is that attendance grew WEEK by WEEK (a trend). B is the only one showing the whole series rising in order: 24 → 31 → 39 → 50. That steady climb is exactly what it claims.',
        expWrong:{
          A:'Comparing the first week with the last shows a net gain, but the argument is that attendance grew from week to WEEK; those same endpoints would look identical if the middle weeks had dipped.',
          C:'Week 1’s 24 patrons is the low end of the series, a single data point. One value cannot show that every week improved on the one before it.',
          D:'The Week 1 to Week 2 gain is real, but it covers one of the three transitions; Weeks 3 and 4 go unexamined, so no month-long trend is established.'
        },
        tip:'Method: 1) the CLAIM is about a TREND ("week by week"), 2) a trend needs the WHOLE series in order, not a single data point, 3) pick the option listing all four values rising.'
      },
      {
        id:'DATA-04', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Interpreting Data in Context',
        figure: FIG_TRAFFIC,
        passage:"A transit planner presented ridership data for a city’s new light-rail line, shown in the bar graph. She argued that ridership more than doubled between 2019 and 2023.",
        stem:'Which choice most effectively uses data from the graph to support the planner’s argument?',
        choices:{
          A:'Ridership rose from 420,000 riders in 2019 to 610,000 riders in 2021, a gain of 190,000.',
          B:'Ridership reached 880,000 riders in 2023, the highest annual total of the three years shown.',
          C:'Ridership grew from 420,000 in 2019 to 880,000 in 2023, more than twice the 2019 figure.',
          D:'Ridership rose from 610,000 riders in 2021 to 880,000 riders in 2023, a gain of 270,000.'
        },
        correct:'C',
        expCorrect:'The claim is that ridership MORE THAN DOUBLED between 2019 and 2023. C uses the two exact years: 420 thousand → 880 thousand. Double 420 is 840, and 880 clears that, so "more than double" is correct and supports the claim.',
        expWrong:{
          A:'This starts at the right year but stops at the wrong one: 610,000 is well under twice 420,000, so the 2019–2021 span shows growth without showing the doubling.',
          B:'880,000 is indeed the peak, but a maximum is not a ratio. With no 2019 figure to divide by, the option never shows the total MORE THAN DOUBLED.',
          D:'The claim measures from 2019, not from 2021. Starting at 610,000 covers a different span, and 880,000 is nowhere near double that figure.'
        },
        tip:'Method: 1) the CLAIM fixes TWO years (2019 and 2023) and a relationship ("more than double"), 2) take those two exact bars (420 and 880) and verify: 2×420 = 840 < 880 ✓, 3) rule out stretches using intermediate years.'
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
          A:'Lake Hollow had a water clarity of 2.1 m, well below the 5.4 m of visibility at Lake Verde.',
          B:'Lake Verde supported 17 fish species, nearly twice as many as the 9 species counted at Lake Hollow.',
          C:'Lake Verde had clearer water (5.4 m versus 2.1 m) and more fish species (17 versus 9) than Lake Hollow.',
          D:'Lake Hollow still supported 9 fish species despite its water clarity of only 2.1 m, far below Lake Verde’s 5.4 m.'
        },
        correct:'C',
        expCorrect:'The claim connects TWO things: the CLEAREST lake also has MORE species. C is the only one pairing both variables in the same lake: Verde wins on clarity (5.4 vs 2.1) AND on species (17 vs 9). That double comparison supports the relationship.',
        expWrong:{
          A:'This compares the CLARITY column and nothing else. With no species counts anywhere in the option, it cannot show that the clearer lake also held more species.',
          B:'This compares the SPECIES column and nothing else. The conclusion links clarity TO species, and clarity never appears here, so half the relationship is missing.',
          D:'"Despite" frames the low clarity as an obstacle Hollow overcame — the reverse of the conclusion, which says clear water goes WITH more species. It also reports one lake instead of comparing the two.'
        },
        tip:'Method: 1) the CLAIM links TWO variables (clearer → more species), 2) the evidence has to show BOTH at once, comparing the lakes, 3) rule out options citing only one variable.'
      },
      {
        id:'DATA-06', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Interpreting Data in Context',
        passage:"A city compared curbside recycling rates for three materials, shown in the bar graph (the percent of each collected material that was actually recycled rather than discarded). An official argued that plastic is recycled at a lower rate than the other two materials and needs the most improvement.",
        figure: FIG_RECYCLE,
        stem:'Which choice most effectively uses data from the graph to support the official’s argument?',
        choices:{
          A:'Paper is recycled at a rate of 88%, the highest rate of the three materials collected.',
          B:'Only 41% of collected plastic is recycled, below both glass (74%) and paper (88%).',
          C:'Glass is recycled at a rate of 74%, considerably higher than plastic’s rate of 41%.',
          D:'Plastic is recycled at a rate of 41%, while paper is recycled at a rate of 88%.'
        },
        correct:'B',
        expCorrect:'The claim is that plastic is recycled LESS than the OTHER TWO and therefore needs the most improvement. B cites 41% and shows it sits below glass (74) AND paper (88). Falling below both proves it is the furthest behind.',
        expWrong:{
          A:'88% identifies the material that performs BEST. The official’s argument is about the material that performs worst, so this figure supports the opposite end of the chart.',
          C:'Glass does beat plastic, but the argument says "lower than the OTHER TWO". One rival compared and one left out is not enough to place plastic last.',
          D:'Both figures are accurate, but glass (74%) never appears. With only one of the two rivals in the comparison, the option cannot show plastic trails both.'
        },
        tip:'Method: 1) the CLAIM says "lower than the OTHER TWO", 2) that claim demands comparing plastic with BOTH materials, 3) pick the option putting it below glass and paper at the same time.'
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
          A:'The self-quizzing group averaged 34 of 40 on the vocabulary quiz, or 85% correct.',
          B:'Both groups contained exactly 30 students, making the comparison between the two methods fair.',
          C:'The rereading group averaged 27 of 40 on the vocabulary quiz, or about 68% correct.',
          D:'The self-quizzing group averaged 34 of 40, compared with 27 of 40 for the rereading group.'
        },
        correct:'D',
        expCorrect:'The claim is that self-testing produced HIGHER scores (a comparison). D puts the two averages side by side: 34 vs 27, showing self-testing beat rereading. That direct comparison supports the claim.',
        expWrong:{
          A:'The right figure for the right group, but a lone average cannot be "higher" than anything. The rereading score of 27 never appears, so there is no comparison.',
          B:'Equal group sizes make the experiment fair, but sample size is a CONTROL, not an outcome. It says nothing about which method produced better scores.',
          C:'This reports the CONTROL group on its own. Without the self-quizzing average of 34 beside it, nothing shows the technique raised anyone’s score.'
        },
        tip:'Method: 1) a comparative CLAIM ("higher than") needs BOTH numbers, 2) rule out the ones citing a single group (true but incomplete), 3) sample size is a control fact, not evidence of the effect.'
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
          B:'Seedlings grown at low light reached only 8 cm, the shortest average height of the four groups.',
          C:'Height rose steadily from 8 cm at low light to 15 cm at medium light and then to 22 cm at high light.',
          D:'Seedlings at very high light reached 22 cm, tied with the high-light group for the tallest.'
        },
        correct:'A',
        expCorrect:'The claim has TWO parts: (1) it grows with more light and (2) there comes a point where extra light NO LONGER helps. A covers both: it rises from 8 to 22 (it grows), but from high to very high it stays at 22 (it no longer helps). It is the only one showing the "up to a point".',
        expWrong:{
          B:'8 cm is a single value at the bottom of the table. One endpoint shows neither the rise with more light nor the point where the rise stops.',
          C:'The series 8→15→22 covers the first half of the claim, but it stops at high light. With the very high group left out, nothing shows that extra light stopped helping.',
          D:'The tie does capture the plateau, but the claim has two parts and this one drops the first: it never shows that seedlings grew taller as light increased from low to high.'
        },
        tip:'Method: 1) underline that the CLAIM has TWO parts (it rises… up to a point), 2) the answer has to cover BOTH, 3) rule out the one showing only the growth and stopping before the plateau.'
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
          A:'In loam, the soil with the most growth overall, Fertilizer B reached 25 cm, more than Fertilizer A’s 20 cm.',
          B:'In sandy soil (18 vs. 12 cm), loam (25 vs. 20 cm), and clay (14 vs. 9 cm), Fertilizer B produced more growth than Fertilizer A.',
          C:'Fertilizer B produced its greatest growth, 25 cm, in loam, and its smallest, 14 cm, in clay.',
          D:'Fertilizer A produced only 9 cm of growth in clay soil, its lowest result of the three soils.'
        },
        correct:'B',
        expCorrect:'The claim is strong: B beats A in EVERY soil. To prove "in every" you have to check all THREE: sandy 18>12, loam 25>20, clay 14>9. B does it in all three, so it is the only one backing the "every soil type".',
        expWrong:{
          A:'Loam is a genuine win for B, and picking the strongest soil makes it look decisive, but "in every soil type" needs all three rows; sandy and clay are never checked.',
          C:'This compares Fertilizer B only with ITSELF across soils. Fertilizer A, the other half of the claim, never appears, so no soil is actually contested.',
          D:'9 cm is A’s worst showing, but a low number for A on its own does not show that B beat it there, and it leaves sandy and loam untouched.'
        },
        tip:'Method: 1) watch absolute CLAIMS ("in ALL", "always"): they demand checking every case, 2) a single example is not enough, 3) pick the option running through all three rows comparing A vs B.'
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
          A:'Ownership reached 500 households by 2022, the highest total recorded in the four-year survey.',
          B:'Ownership rose by 55 households from 2019 to 2020 and by 80 more from 2021 to 2022.',
          C:'Ownership jumped by 155 households from 2020 to 2021—a larger increase than the 55 (2019–2020) or 80 (2021–2022) gains.',
          D:'Ownership rose in every year of the survey, climbing from 210 households in 2019 to 500 in 2022.'
        },
        correct:'C',
        expCorrect:'The claim is about the STEEPEST rise in a single year. You have to compute each jump: 2019→20 = 55, 2020→21 = 155, 2021→22 = 80. C shows 155 beats 55 and 80, proving that stretch had the biggest increase.',
        expWrong:{
          A:'500 is the largest LEVEL, not the largest CHANGE. 2022 tops the table even though the 80 households it added were fewer than the 155 added the year before.',
          B:'These are the two OTHER one-year gains, and both are computed correctly — but the 155-household jump the claim is about is exactly the one left out.',
          D:'Rising every year is real growth, but the claim singles out one span as the sharpest. Totals that are never subtracted cannot rank the yearly increases.'
        },
        tip:'Method: 1) "rose the MOST" = compare the CHANGES, not the totals, 2) subtract year by year (55, 155, 80), 3) pick the option proving the stretch in the claim has the biggest jump.'
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
          B:'After the campaign, Riverside used 150 L per person per day, less than the 155 L still being used in Oakmont.',
          C:'Oakmont’s water use fell from 170 L to 155 L per person after the campaign, a drop of 15 L.',
          D:'Before the campaign, Riverside used 190 L per person, more than the 170 L used in Oakmont.'
        },
        correct:'A',
        expCorrect:'The claim compares the REDUCTION (the change), not the final level. You have to subtract in each neighborhood: Riverside 190−150 = 40, Oakmont 170−155 = 15. A shows 40 > 15, proving Riverside cut MORE. It is the only one comparing the drops.',
        expWrong:{
          B:'This compares where the two neighborhoods ENDED, not how far each one fell. Finishing 5 L lower is a different fact from cutting more, and the "before" column never enters the comparison.',
          C:'The subtraction is done correctly, but for the wrong neighborhood. With no figure for Riverside’s drop beside it, nothing shows which decline was the larger one.',
          D:'Riverside did start higher, but a starting level is not a reduction; a neighborhood can begin well above its neighbor and still cut less than it did.'
        },
        tip:'Method: 1) "cut the MOST" = compare the CHANGES (before − after), not the final value, 2) compute both subtractions (40 and 15), 3) rule out the ones looking only at the "before" or the "after" alone.'
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
          A:'Design Y, at 31 s per order, was the fastest of the four designs, cutting 21 s off Design W’s average.',
          B:'Design X, at 40 s per order, was faster than W, Z, and the baseline while keeping items per order at 2.4, matching the highest-item designs.',
          C:'Design Z had the highest items per order of the four, at 2.5, though its order time of 44 s was slower than X’s 40 s.',
          D:'Design W was the slowest design tested, at 52 s per order, even though its 2.4 items per order matched Design X’s.'
        },
        correct:'B',
        expCorrect:'The goal has TWO conditions: faster WITHOUT lowering items per order. Design Y is the fastest (31 s) but its items drop to 1.6, so it is ruled out. Among those keeping items high (2.4–2.5), X is the fastest (40 s) and holds 2.4. B is the only one meeting both conditions.',
        expWrong:{
          A:'Y wins on speed by a wide margin, which is what makes it tempting, but its items per order fall to 1.6, the lowest in the table. The recommendation requires speed WITHOUT lowering items, and Y fails that half outright.',
          C:'Z does lead on items, but it buys that extra 0.1 item with 4 more seconds per order than X. The goal is the fastest design that holds items steady, and X holds 2.4 while ordering faster.',
          D:'W matches X on items per order but takes 12 s longer for each one, making it the slowest design in the table. Recommending it would work against the goal of ordering faster.'
        },
        tip:'Method: 1) the CLAIM has TWO conditions (fast AND without losing items), 2) first rule out the ones failing a condition (Y drops items; W is slow), 3) among the rest, pick the one optimizing the other: X, fast and with items intact.'
      }
    ]
  });
})();
