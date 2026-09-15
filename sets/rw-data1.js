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
        expCorrect:'The claim is that fiberglass was the BEST insulator, and less heat loss = better. D cites the right number (15 W) and adds the key part: it is the LOWEST loss of the four. That proves it was the best.',
        expWrong:{
          A:'The two numbers (15 and 48) are right, but comparing fiberglass only with brick does not show it is the best of the FOUR; there could be another even lower.',
          B:'The foam board (22 W) does lose less than brick, but that says nothing about fiberglass; true but it does not support the claim.',
          C:'The plywood (63 W) is the WORST insulator; that figure tells you which is worst, not that fiberglass is best.'
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
          B:'Kestrel receives 38 cm of rain per year, the least of the three towns.',
          C:'Marlow receives 52 cm of rain per year, more than Kestrel’s 38 cm.',
          D:'Deepwater receives 61 cm of rain per year, and Marlow receives 52 cm.'
        },
        correct:'A',
        expCorrect:'The claim is that Deepwater gets MORE rain than the other two. A cites the right figure (61 cm) and makes clear it beats Kestrel AND Marlow. Being greater than both, it supports the claim directly.',
        expWrong:{
          B:'That Kestrel is the LOWEST (38 cm) is true, but the claim is about Deepwater; true but it does not support the point.',
          C:'That Marlow (52) beats Kestrel (38) is true, but it does not say Deepwater is the highest of the THREE.',
          D:'The numbers (61 and 52) are right, but it only compares Deepwater with Marlow; it still has to rule out Kestrel to prove it is "the most" of the three.'
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
          A:'Attendance in Week 4 reached 50 patrons, the highest of the four weeks.',
          B:'Attendance rose each week, climbing from 24 in Week 1 to 31, then 39, then 50 by Week 4.',
          C:'Week 1 had the lowest attendance of the month, at 24 patrons.',
          D:'Attendance in Week 2 was 31 patrons, higher than Week 1’s 24.'
        },
        correct:'B',
        expCorrect:'The claim is that attendance grew WEEK by WEEK (a trend). B is the only one showing the whole series rising in order: 24 → 31 → 39 → 50. That steady climb is exactly what it claims.',
        expWrong:{
          A:'That Week 4 is the highest (50) is a single point; it does not show it rose EVERY week; it could have dipped in the middle.',
          C:'That Week 1 is the lowest is also a loose point; it does not prove the continuous climb.',
          D:'That Week 2 beats Week 1 is true, but it covers only two weeks; it does not show the trend across the whole month.'
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
          A:'Ridership rose from 420,000 in 2019 to 610,000 in 2021.',
          B:'Ridership reached 880,000 in 2023, the highest of the three years shown.',
          C:'Ridership grew from 420,000 in 2019 to 880,000 in 2023, more than twice the 2019 figure.',
          D:'Ridership rose from 610,000 in 2021 to 880,000 in 2023.'
        },
        correct:'C',
        expCorrect:'The claim is that ridership MORE THAN DOUBLED between 2019 and 2023. C uses the two exact years: 420 thousand → 880 thousand. Double 420 is 840, and 880 clears that, so "more than double" is correct and supports the claim.',
        expWrong:{
          A:'420→610 (2019 to 2021) is only part of the span; it does not reach 2023 or show that the value doubled.',
          B:'That 2023 is the highest year (880) is true, but "the highest" is not the same as "more than double 2019"; it does not compare with the starting point.',
          D:'610→880 (2021 to 2023) uses the wrong starting year; the claim compares with 2019, not with 2021.'
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
          A:'Lake Hollow had a water clarity of 2.1 m, less than Lake Verde’s 5.4 m.',
          B:'Lake Verde supported 17 fish species, nearly twice as many as Lake Hollow.',
          C:'Lake Verde had clearer water (5.4 m versus 2.1 m) and more fish species (17 versus 9) than Lake Hollow.',
          D:'Lake Hollow supported 9 fish species despite its lower water clarity of 2.1 m.'
        },
        correct:'C',
        expCorrect:'The claim connects TWO things: the CLEAREST lake also has MORE species. C is the only one pairing both variables in the same lake: Verde wins on clarity (5.4 vs 2.1) AND on species (17 vs 9). That double comparison supports the relationship.',
        expWrong:{
          A:'It only compares CLARITY (2.1 vs 5.4); it never mentions species, so it does not show the relationship between the two variables.',
          B:'It only talks about Verde’s SPECIES (17); it never mentions clarity, so it does not connect clearer ↔ more fish.',
          D:'It mentions both of Hollow’s variables, but the claim is that HIGH clarity goes with MORE species; Hollow has low clarity and few species, and on its own that does not prove the relationship.'
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
          A:'Paper is recycled at a rate of 88%, the highest of the three materials.',
          B:'Only 41% of collected plastic is recycled, below both glass (74%) and paper (88%).',
          C:'Glass is recycled at a rate of 74%, higher than plastic’s 41%.',
          D:'Plastic is recycled at a rate of 41%, while paper is recycled at 88%.'
        },
        correct:'B',
        expCorrect:'The claim is that plastic is recycled LESS than the OTHER TWO and therefore needs the most improvement. B cites 41% and shows it sits below glass (74) AND paper (88). Falling below both proves it is the furthest behind.',
        expWrong:{
          A:'That paper is the highest (88%) is true, but the claim is about PLASTIC; true but it does not support the point.',
          C:'That glass (74) beats plastic (41) is true, but it compares it with only ONE material; you still have to rule out paper to say "the lowest".',
          D:'It cites plastic (41) and paper (88), but leaves out glass; without all three comparisons it does not prove plastic is the lowest of all.'
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
          A:'The self-quizzing group averaged 34 of 40 on the vocabulary quiz.',
          B:'Both groups contained 30 students, making the comparison fair.',
          C:'The rereading group averaged 27 of 40 on the vocabulary quiz.',
          D:'The self-quizzing group averaged 34 of 40, compared with 27 of 40 for the rereading group.'
        },
        correct:'D',
        expCorrect:'The claim is that self-testing produced HIGHER scores (a comparison). D puts the two averages side by side: 34 vs 27, showing self-testing beat rereading. That direct comparison supports the claim.',
        expWrong:{
          A:'It only gives the self-testing average (34); without comparing it with 27 it does not prove it is HIGHER than the other technique.',
          B:'Both groups having 30 students makes the experiment fair, but that is about SAMPLE SIZE, not about the scores; it does not support "higher".',
          C:'It only gives the rereading group average (27); without the other number it does not show self-testing was HIGHER.'
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
          B:'Seedlings at low light reached only 8 cm, the shortest of the four groups.',
          C:'Height rose steadily from 8 cm to 15 cm to 22 cm as light increased from low to high.',
          D:'Seedlings at very high light reached 22 cm, tied for the tallest of the four groups.'
        },
        correct:'A',
        expCorrect:'The claim has TWO parts: (1) it grows with more light and (2) there comes a point where extra light NO LONGER helps. A covers both: it rises from 8 to 22 (it grows), but from high to very high it stays at 22 (it no longer helps). It is the only one showing the "up to a point".',
        expWrong:{
          B:'It only gives the minimum (8 cm at low); it shows neither the growth nor the point where it plateaus.',
          C:'It shows the growth (8→15→22) but stops at "high"; it leaves out very high, so it does not prove the second part (that extra light no longer helps).',
          D:'It says very high ties for the highest, but on its own that does not show the plateau; without comparing with high you cannot see that the extra light added nothing.'
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
          A:'In loam, Fertilizer B produced 25 cm of growth, more than Fertilizer A’s 20 cm.',
          B:'In sandy soil (18 vs. 12 cm), loam (25 vs. 20 cm), and clay (14 vs. 9 cm), Fertilizer B produced more growth than Fertilizer A.',
          C:'Fertilizer B produced its greatest growth, 25 cm, in loam soil.',
          D:'Fertilizer A produced only 9 cm of growth in clay, its lowest result.'
        },
        correct:'B',
        expCorrect:'The claim is strong: B beats A in EVERY soil. To prove "in every" you have to check all THREE: sandy 18>12, loam 25>20, clay 14>9. B does it in all three, so it is the only one backing the "every soil type".',
        expWrong:{
          A:'It only shows loam (25>20); it proves one case, not the THREE that "in every" demands.',
          C:'That B peaks in loam (25) is an internal fact about B; it does not compare with A or cover the other soils.',
          D:'It is about A’s worst result (9 cm in clay); that is a fact about A alone, not the comparison in each soil.'
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
          A:'Ownership reached 500 households by 2022, the highest total in the survey.',
          B:'Ownership rose by 55 households from 2019 to 2020, then continued climbing.',
          C:'Ownership jumped by 155 households from 2020 to 2021—a larger increase than the 55 (2019–2020) or 80 (2021–2022) gains.',
          D:'Ownership rose every year from 2019 to 2022, from 210 to 500 households.'
        },
        correct:'C',
        expCorrect:'The claim is about the STEEPEST rise in a single year. You have to compute each jump: 2019→20 = 55, 2020→21 = 155, 2021→22 = 80. C shows 155 beats 55 and 80, proving that stretch had the biggest increase.',
        expWrong:{
          A:'The highest total (500 in 2022) is about the LEVEL, not about which year ROSE the most; the claim is about the rate of increase.',
          B:'The 2019→2020 jump was only 55, the smallest; citing it does not support 2020→2021 being the biggest.',
          D:'That it rises every year (210→500) shows general growth, but it does not compare the yearly jumps to single out the largest.'
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
          B:'After the campaign, Riverside used 150 L per person, less than Oakmont’s 155 L.',
          C:'Oakmont’s water use fell from 170 L to 155 L after the campaign.',
          D:'Before the campaign, Riverside used 190 L per person, more than Oakmont’s 170 L.'
        },
        correct:'A',
        expCorrect:'The claim compares the REDUCTION (the change), not the final level. You have to subtract in each neighborhood: Riverside 190−150 = 40, Oakmont 170−155 = 15. A shows 40 > 15, proving Riverside cut MORE. It is the only one comparing the drops.',
        expWrong:{
          B:'It compares the FINAL levels (150 vs 155), not how much each one DROPPED; a small final gap does not equal a bigger reduction.',
          C:'It only gives Oakmont’s drop (15 L); without Riverside’s you cannot tell which one cut more.',
          D:'It compares the BEFORE levels (190 vs 170); the claim is about the reduction, not about who started higher.'
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
          A:'Design Y, at 31 s per order, was the fastest of the four designs.',
          B:'Design X, at 40 s per order, was faster than W, Z, and the baseline while keeping items per order at 2.4, matching the highest-item designs.',
          C:'Design Z had the highest items per order, at 2.5, though its order time was 44 s.',
          D:'Design W was the slowest design, at 52 s per order, with 2.4 items per order.'
        },
        correct:'B',
        expCorrect:'The goal has TWO conditions: faster WITHOUT lowering items per order. Design Y is the fastest (31 s) but its items drop to 1.6, so it is ruled out. Among those keeping items high (2.4–2.5), X is the fastest (40 s) and holds 2.4. B is the only one meeting both conditions.',
        expWrong:{
          A:'Design Y is the fastest (31 s), but its items per order drop to 1.6; it violates the second condition ("without lowering items"). Fast but it does not meet the full claim.',
          C:'Design Z has the highest items (2.5), but it is slower (44 s) than X; the goal prioritizes speed while holding items, and X achieves both better.',
          D:'Design W is the SLOWEST (52 s); it is the opposite of what is meant to be recommended.'
        },
        tip:'Method: 1) the CLAIM has TWO conditions (fast AND without losing items), 2) first rule out the ones failing a condition (Y drops items; W is slow), 3) among the rest, pick the one optimizing the other: X, fast and with items intact.'
      }
    ]
  });
})();
