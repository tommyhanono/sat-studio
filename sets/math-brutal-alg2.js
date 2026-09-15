/* SAT Studio question set — Math: Algebra — Brutal II (BL2-01 to BL2-12) */
(function(){
  var TBL_ORDERS =
    '<table border="1" cellpadding="6" style="border-collapse:collapse">' +
    '<tr><th>Order</th><th>Chairs</th><th>Tables</th><th>Total cost</th></tr>' +
    '<tr><td>1</td><td>8</td><td>3</td><td>$1,074</td></tr>' +
    '<tr><td>2</td><td>5</td><td>6</td><td>$1,290</td></tr>' +
    '<tr><td>3</td><td>12</td><td>7</td><td>?</td></tr></table>';

  window.SAT_SETS.push({
    id: 'math-brutal-alg2',
    title: 'Algebra — Brutal II',
    section: 'math',
    level: 'Extreme',
    description: 'Brutal Algebra II: systems of linear inequalities (testing a point, and a parameter that empties the region), work and mixture problems that become linear systems, slope and intercept read in context against three plausible misreadings, systems hidden in a table or in words, fractions and decimals that have to be cleared on both sides, and two-stage piecewise pricing.',
    minutes: 20,
    questions: [
      {
        id:'BL2-01', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'System of linear inequalities (testing a point, strict vs. inclusive boundary)',
        stem:'Which of the following points (x, y) is a solution of the system of inequalities shown below?<br><br>5x + 2y &lt; 20<br>−2y ≤ −8x + 16',
        choices:{A:'(0, 10)', B:'(1, −5)', C:'(2, 3)', D:'(3, 4)'},
        correct:'C',
        expCorrect:'Both inequalities have to hold at once, and one of them is strict. Tidy the second one first: −2y ≤ −8x + 16 becomes y ≥ 4x − 8 after dividing by −2, and dividing by a NEGATIVE flips the ≤ into ≥. Now test (2, 3). First inequality: 5(2) + 2(3) = 16, and 16 &lt; 20 ✓. Second: 3 ≥ 4(2) − 8 = 0 ✓. Both hold, so (2, 3) is a solution. (Check the second inequality in its original form as well: −2(3) = −6 and −8(2) + 16 = 0, and −6 ≤ 0 ✓.)',
        expWrong:{
          A:'(0, 10) gives 5(0) + 2(10) = 20 exactly. The first inequality is STRICT, and 20 &lt; 20 is false, so this point sits on the dashed boundary line rather than inside the region. A boundary point counts only when the inequality carries the equals sign.',
          B:'(1, −5) is the point you land on if you divide −2y ≤ −8x + 16 by −2 without flipping the sign, which produces the false rule y ≤ 4x − 8 and accepts −5 ≤ −4. The true rule is y ≥ 4x − 8, and −5 ≥ −4 is false. (In the original form: −2(−5) = 10 and −8(1) + 16 = 8, and 10 ≤ 8 is false.)',
          D:'(3, 4) satisfies the second inequality exactly: −2(4) = −8 and −8(3) + 16 = −8. That inequality is not strict, so sitting on its solid boundary is fine — but the point fails the first one, because 5(3) + 2(4) = 23 and 23 is not less than 20. A solution has to clear EVERY inequality, not just the one you happen to test first.'
        },
        tip:'Testing a point is two checks, and you owe both of them. Two habits pay for themselves: rewrite any inequality whose y-term is negative before testing, flipping the sign as you divide by that negative; and treat &lt; and &gt; as dashed boundaries whose points are NOT solutions, while ≤ and ≥ are solid and include them.',
        desmos:'Graph 5x + 2y &lt; 20 and −2y ≤ −8x + 16 — Desmos shades each region — then plot the four points. Only one lands inside the overlap, and you can see that one boundary is dashed and the other is solid, which is what decides two of the wrong options.',
        desmosLatex:['5x+2y<20','-2y\\le-8x+16','(0,10)','(1,-5)','(2,3)','(3,4)']
      },
      {
        id:'BL2-02', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'System of linear inequalities with a parameter (no solution)',
        stem:'In the system of inequalities below, k is a constant.<br><br>3y ≤ 3kx − 12<br>2y − 6x ≥ 10<br><br>For which value of k does the system have no solution?',
        choices:{A:'1', B:'2', C:'3', D:'6'},
        correct:'C',
        expCorrect:'Put BOTH inequalities in slope-intercept form before comparing anything. Divide the first by 3: y ≤ kx − 4. For the second, add 6x and divide by 2: 2y ≥ 6x + 10 → y ≥ 3x + 5. Two half-planes miss each other completely only when their boundary lines are parallel and the shaded sides face away from each other, so match the slopes: k = 3. Confirm that k = 3 really empties it: the system then asks for y ≤ 3x − 4 and y ≥ 3x + 5 at the same time, which would require 3x + 5 ≤ y ≤ 3x − 4 — impossible, since 3x + 5 is always 9 more than 3x − 4. For every other value of k the boundary lines cross and the two regions overlap in a wedge, so solutions exist.',
        expWrong:{
          A:'1 comes from dividing the second inequality by 2 but leaving the first one alone, then matching 3k to 3. Both sides of an inequality get divided, coefficient and constant alike: 3y ≤ 3kx − 12 is y ≤ kx − 4, so its slope is k, not 3k.',
          B:'2 comes from making both scaling mistakes at once — treating the first slope as 3k and the second as 6 — and solving 3k = 6. Neither inequality was reduced.',
          D:'6 comes from dividing the first inequality by 3 but leaving the second undivided, so k gets matched to the 6 sitting in 6x. Rewrite 2y − 6x ≥ 10 all the way and the slope is 3, not 6.'
        },
        tip:'Two linear inequalities have no common solution only when their boundaries are PARALLEL and the shaded sides point apart, so match the slopes first — after fully dividing every equation, which is where these items are actually won — and then compare the constants to confirm the region is empty. Had the same parallel slopes come with y ≥ 3x − 4 and y ≤ 3x + 5, the answer would be an infinitely wide strip of solutions instead of none.',
        desmos:'Graph 3y ≤ 3kx − 12 and 2y − 6x ≥ 10 with a slider for k and sweep it slowly: the shaded overlap narrows as k approaches 3 and disappears completely at k = 3, then reappears on the other side.',
        desmosLatex:['3y\\le3kx-12','2y-6x\\ge10','k=3']
      },
      {
        id:'BL2-03', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Combined work rates as a linear system (with a time-unit conversion)',
        stem:'A print shop runs two presses, each at its own constant rate. On Monday press A ran for 4 hours and press B ran for 3 hours, and together they printed 4,300 pages. On Tuesday press A ran for 2 hours and press B ran for 5 hours, and together they printed 3,900 pages. Working at these rates, how many pages does press A print in 45 minutes?',
        choices:{A:'375', B:'525', C:'700', D:'900'},
        correct:'B',
        expCorrect:'Let a be press A’s rate and b press B’s rate, both in pages per hour. Monday gives 4a + 3b = 4,300 and Tuesday gives 2a + 5b = 3,900. Double the Tuesday equation: 4a + 10b = 7,800. Subtract Monday’s equation from it: 7b = 3,500 → b = 500. Back-substitute: 4a + 3(500) = 4,300 → 4a = 2,800 → a = 700 pages per hour. The rates are per HOUR and the question asks about 45 minutes, which is 45/60 = 0.75 hour, so press A prints 700 × 0.75 = 525 pages. (Check: 2(700) + 5(500) = 1,400 + 2,500 = 3,900 ✓.)',
        expWrong:{
          A:'375 is 0.75 × 500, which uses press B’s rate. Elimination hands you b first, so 500 is the number already written on your page when you reach the last line — but the question asks about press A.',
          C:'700 is press A’s rate per HOUR, the intermediate result. The system is built in pages per hour and the question asks about 45 minutes, so the ÷ 60 conversion still has to happen.',
          D:'900 is 0.75 × 1,200, the two presses working TOGETHER. The combined rate is a natural thing to compute in a work problem, but this stem asks about press A on its own.'
        },
        tip:'Two jobs done by the same two machines (or the same two workers) form a linear system in the two RATES: hours × rate + hours × rate = output. Solve it like any other system, then convert — a rate given per hour applied to a time given in minutes always needs the minutes turned into a fraction of an hour first.',
        desmos:'Graph 4x + 3y = 4300 and 2x + 5y = 3900, reading x as press A’s rate and y as press B’s rate, and tap the intersection: (700, 500). Then type 700*0.75 on the next line to land on 525.',
        desmosLatex:['4x+3y=4300','2x+5y=3900','700\\cdot0.75']
      },
      {
        id:'BL2-04', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Mixture problem as a linear system (difference of the two amounts)',
        stem:'A juice company mixes a syrup that is 60% sugar by volume with a syrup that is 25% sugar by volume. The company needs 2,100 milliliters of a blend that is 39% sugar by volume. How many more milliliters of the 25% syrup than of the 60% syrup does the blend require?',
        answer:'420',
        expCorrect:'Two equations, one for the total volume and one for the sugar. Let x be the milliliters of 60% syrup and y the milliliters of 25% syrup. Volume: x + y = 2,100. Sugar: 0.60x + 0.25y = 0.39(2,100) = 819. Substitute y = 2,100 − x into the sugar equation: 0.60x + 0.25(2,100 − x) = 819 → 0.60x + 525 − 0.25x = 819 → 0.35x = 294 → x = 840, and so y = 2,100 − 840 = 1,260. The question asks for the difference between the two amounts: 1,260 − 840 = 420. (Check: 0.60(840) + 0.25(1,260) = 504 + 315 = 819, and 819 ÷ 2,100 = 0.39 ✓.) Answer: 420.',
        tip:'A mixture problem is always exactly two equations: one counts the TOTAL amount and one counts the single ingredient being tracked. Turn each percent into an amount of that ingredient (0.60x, never 60x), and take the target percent of the FINAL volume, not of either part. Then reread the last line — 840 and 1,260 are both real numbers from this problem, and neither one is the difference that was asked for.',
        desmos:'Graph x + y = 2100 and 0.6x + 0.25y = 819 and tap the intersection: (840, 1260). The answer is the gap between those two coordinates, so finish with 1260 − 840 on a new line.',
        desmosLatex:['x+y=2100','0.6x+0.25y=819','1260-840']
      },
      {
        id:'BL2-05', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Interpreting the slope of a rewritten two-variable model in context',
        stem:'A delivery van uses 0.06 gallon of fuel for each mile it is driven in the city and 0.04 gallon of fuel for each mile it is driven on the highway. During one week the van used exactly 24 gallons of fuel, a situation represented by the equation 0.06c + 0.04h = 24, where c is the number of city miles and h is the number of highway miles the van was driven that week. If this equation is rewritten in the form h = mc + k, where m and k are constants, which of the following is the best interpretation of m in this context?',
        choices:{
          A:'The van uses 1.5 gallons of fuel for each mile it is driven in the city.',
          B:'For each additional mile the van is driven on the highway that week, it can be driven 1.5 fewer miles in the city.',
          C:'That week the van is driven 1.5 times as many miles in the city as it is driven on the highway.',
          D:'For each additional mile the van is driven in the city that week, it can be driven 1.5 fewer miles on the highway.'
        },
        correct:'D',
        expCorrect:'Rewrite the equation: 0.04h = 24 − 0.06c → h = 600 − 1.5c, so m = −1.5 (and k = 600). In the form h = mc + k, m answers one question only — if c goes up by 1, what happens to h? It drops by 1.5. In context: with the fuel fixed at 24 gallons, every extra city mile costs the van 1.5 highway miles, because a city mile burns 0.06 gallon while a highway mile burns only 0.04, and 0.06 ÷ 0.04 = 1.5. (Check the endpoints: c = 0 gives h = 600, and h = 0 gives c = 400, and 0.04(600) = 0.06(400) = 24 ✓.)',
        expWrong:{
          A:'This reads −1.5 as a rate of fuel use. The van’s fuel use per city mile is stated in the stem and it is 0.06 gallon; 1.5 gallons per mile would drain the whole 24 gallons in 16 miles. A slope in the ch-plane is measured in miles per mile, not in gallons per mile.',
          B:'This swaps the two variables. Solving the same equation the other way gives c = 400 − (2/3)h, so an extra HIGHWAY mile costs only 2/3 of a city mile. The slope of h = mc + k describes what a change in c does to h, and the two trade-off rates are reciprocals of each other, not equal.',
          C:'This reads the slope as a ratio of totals instead of a rate of change. The equation does not fix how the week is split: (400, 0), (0, 600) and (200, 300) all satisfy it, and in none of them are the city miles 1.5 times the highway miles.'
        },
        tip:'For any model written as y = mx + b, say the slope out loud as a full sentence with the context words in it before you read the options: "if x goes up by one, y changes by m." A negative slope in a fixed-budget equation — a fixed number of gallons, dollars or hours — always describes a trade-off, and its size is the ratio of the two costs, so the trade in the other direction is its reciprocal.',
        desmos:'Graph 0.06x + 0.04y = 24 with city miles on the horizontal axis: the line drops 1.5 units for every 1 unit it moves right, and it meets the axes at (400, 0) and (0, 600). Reading those two intercepts is the fastest check that the trade-off is 600 ÷ 400 = 1.5 highway miles per city mile.',
        desmosLatex:['0.06x+0.04y=24','(400,0)','(0,600)','(200,300)']
      },
      {
        id:'BL2-06', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Interpreting the constant term of a composed model in context',
        stem:'A printing company charges a school a one-time setup fee of $2,800 plus $14.75 for each yearbook it prints, so the school’s total cost is C = 14.75n + 2,800 dollars for n yearbooks. The school sells every yearbook it prints, at $32 each, so its profit is P = 32n − C, which simplifies to P = 17.25n − 2,800. Which of the following is the best interpretation of −2,800 in the equation P = 17.25n − 2,800?',
        choices:{
          A:'The school loses $2,800 for each yearbook that it prints and does not sell.',
          B:'The school has to sell 2,800 yearbooks before it begins to earn a profit.',
          C:'For any number of yearbooks, the school’s profit is $2,800 less than the money it collects from sales.',
          D:'If the school sells no yearbooks, its profit is −$2,800, because it still owes the one-time setup fee.'
        },
        correct:'D',
        expCorrect:'The constant term of a linear model is the value of the output when the input is zero: P(0) = 17.25(0) − 2,800 = −2,800. In context n = 0 means the school prints and sells no yearbooks, and the $2,800 setup fee is owed anyway, so the profit is −$2,800 — a loss of exactly that fee. Everything per-yearbook lives in the other coefficient: 17.25 = 32 − 14.75 is what each copy adds to the profit. (Check at n = 100: P = 1,725 − 2,800 = −$1,075, still a loss, and directly, revenue 32(100) = $3,200 minus cost 14.75(100) + 2,800 = $4,275 gives −$1,075 ✓.)',
        expWrong:{
          A:'This turns a constant into a rate. A per-yearbook amount has to be multiplied by n, and the only number multiplied by n here is 17.25. The model also never mentions unsold copies — the stem says the school sells every yearbook it prints.',
          B:'This confuses the setup fee with the break-even point. Break-even is where P = 0: 17.25n = 2,800 → n = 162.3, so the 163rd yearbook is the first one that puts the school in the black. A dollar amount and a number of yearbooks are different quantities, and 2,800 dollars is nothing like 163 copies.',
          C:'Profit is revenue minus TOTAL cost, and the total cost is 14.75n + 2,800, not 2,800. So the gap between the money collected and the profit grows with every copy printed: at n = 100 that gap is $4,275, not $2,800. Only at n = 0 do the two agree, which is precisely what the constant term describes.'
        },
        tip:'Read a constant term with the sentence "if there were none of these, then …". Then place it against the other pieces of the same model, because brutal items put all three on the page: the constant is a one-time amount in dollars, the coefficient is a rate in dollars per item, and the break-even point is a third thing entirely, found by setting the whole expression equal to zero.',
        desmos:'Graph y = 17.25x − 2800: the line starts at −2,800 when x = 0 and crosses the x-axis at about x = 162.3, so the school is still in the red until the 163rd yearbook. Seeing the intercept and the break-even point as two different features of the same line is the whole question.',
        desmosLatex:['y=17.25x-2800','y=0','(0,-2800)','(162.32,0)']
      },
      {
        id:'BL2-07', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Setting up a system from a table, then applying a conditional discount',
        stem:'A furniture store sells only two items, a chair and a table, each at a fixed price. The table below shows three orders.<br><br>' + TBL_ORDERS + '<br>The store takes 15% off the total of any order whose cost before the discount is more than $1,500. What does Order 3 cost after any discount that applies?',
        choices:{A:'$1,688.10', B:'$1,986.00', C:'$1,994.10', D:'$2,283.90'},
        correct:'A',
        expCorrect:'Let c be the price of a chair and t the price of a table. The first two rows are the system: 8c + 3t = 1,074 and 5c + 6t = 1,290. Double the first equation to match the t terms: 16c + 6t = 2,148. Subtract the second: 11c = 858 → c = 78. Back-substitute: 8(78) + 3t = 1,074 → 624 + 3t = 1,074 → 3t = 450 → t = 150. Order 3 before the discount is 12(78) + 7(150) = 936 + 1,050 = $1,986.00. That is more than $1,500, so the discount applies: 1,986.00 × 0.85 = $1,688.10. (Check the second row: 5(78) + 6(150) = 390 + 900 = 1,290 ✓.)',
        expWrong:{
          B:'$1,986.00 is Order 3 BEFORE the discount. The stem sets a $1,500 threshold and 1,986 clears it, so multiplying by 0.85 is not optional — and the intermediate total is always sitting among the options on a brutal item.',
          C:'$1,994.10 swaps the two prices, charging $150 for a chair and $78 for a table: 12(150) + 7(78) = 2,346, and 2,346 × 0.85 = 1,994.10. Elimination gives you c first here, so label the variables on the page before you solve.',
          D:'$2,283.90 adds 15% instead of taking it off: 1,986.00 × 1.15 = 2,283.90. A 15% discount multiplies by 1 − 0.15 = 0.85, never by 1.15.'
        },
        tip:'Each row of a purchase table is one equation and the unit prices are the variables, so two rows are a system — solve it even when the question is about a third row. Then reread the stem for the condition attached to the answer (a threshold, a discount, a minimum order): on a brutal item that condition is the final step, not decoration, and you have to compute the pre-condition total first just to know whether it applies.',
        desmos:'Graph 8x + 3y = 1074 and 5x + 6y = 1290, with x as the chair price and y as the table price, and tap the intersection: (78, 150). Then type 12*78+7*150 on a new line, and multiply that result by 0.85.',
        desmosLatex:['8x+3y=1074','5x+6y=1290','12\\cdot78+7\\cdot150','1986\\cdot0.85']
      },
      {
        id:'BL2-08', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Setting up a system from words (comparison + total), then pricing the result',
        stem:'A bakery packs cookies into small boxes that hold 8 cookies each and large boxes that hold 20 cookies each. On Saturday the bakery packed 488 cookies with none left over, and it used 5 more small boxes than large boxes. A small box sells for $6 and a large box sells for $13. What was the bakery’s total revenue, in dollars, from the boxes it packed on Saturday?',
        answer:'334',
        expCorrect:'Translate one sentence at a time. Let s be the number of small boxes and L the number of large boxes. "5 more small boxes than large boxes" is s = L + 5. "488 cookies with none left over" is 8s + 20L = 488. Substitute the first into the second: 8(L + 5) + 20L = 488 → 8L + 40 + 20L = 488 → 28L = 448 → L = 16, and s = 16 + 5 = 21. Those are boxes, not dollars, so one step remains: revenue = 21($6) + 16($13) = $126 + $208 = $334. (Check: 21(8) + 16(20) = 168 + 320 = 488 cookies ✓, and 21 − 16 = 5 ✓.) Answer: 334.',
        tip:'Turn each sentence into exactly one equation before touching the algebra: a comparison ("5 more … than") becomes s = L + 5, and a total ("488 cookies") becomes 8s + 20L = 488. Write down what every letter MEASURES, then check the last line against those units — here 21, 16 and 5 are all genuine numbers from the problem and all of them are boxes, while the question is asked in dollars.',
        desmos:'Graph x = y + 5 and 8x + 20y = 488, reading x as small boxes and y as large boxes, and tap the intersection: (21, 16). Then type 21*6+16*13 on a new line to finish the last step.',
        desmosLatex:['x=y+5','8x+20y=488','21\\cdot6+16\\cdot13']
      },
      {
        id:'BL2-09', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear equation with fractions on both sides (clearing with the LCD)',
        stem:'What is the solution to the equation below?<br><br>(3x − 5)/4 + 3/2 = (x + 9)/2',
        choices:{A:'4', B:'17', C:'20', D:'23'},
        correct:'B',
        expCorrect:'Clear every denominator in one move by multiplying EVERY term by the least common denominator, which is 4: 4 · (3x − 5)/4 + 4 · (3/2) = 4 · (x + 9)/2 → (3x − 5) + 6 = 2(x + 9). From there it is an ordinary linear equation: 3x − 5 + 6 = 2x + 18 → 3x + 1 = 2x + 18 → x = 17. (Check in the original: (3(17) − 5)/4 + 3/2 = 46/4 + 1.5 = 11.5 + 1.5 = 13, and (17 + 9)/2 = 26/2 = 13 ✓.)',
        expWrong:{
          A:'4 is what comes out if you multiply the left side by 4 but strip the denominator on the right without multiplying its numerator by 2: (3x − 5) + 6 = x + 9 → 2x = 8 → x = 4. Multiplying by 4 turns (x + 9)/2 into 2(x + 9), not into (x + 9).',
          C:'20 comes from multiplying the 3/2 by 2 instead of by 4: (3x − 5) + 3 = 2(x + 9) → 3x − 2 = 2x + 18 → x = 20. Every term takes the same multiplier, and 4 · (3/2) = 6, not 3.',
          D:'23 comes from ignoring the 3/2 and cross-multiplying the two remaining fractions as if the equation were a proportion: 2(3x − 5) = 4(x + 9) → 6x − 10 = 4x + 36 → x = 23. Cross-multiplication is a shortcut for one fraction equal to one fraction, and there is a third term here.'
        },
        tip:'Multiply through by the LCD and hold two rules in front of you: EVERY term gets multiplied, including the terms that are not fractions, and all of them get the SAME multiplier. Cross-multiplying is legal only for a/b = c/d — the moment a third term appears on either side, that shortcut is simply wrong.',
        desmos:'Graph y = (3x − 5)/4 + 3/2 and y = (x + 9)/2 and tap the crossing: it sits at x = 17. Graphing both sides separately is the fastest way to catch a clearing error, because 4, 20 and 23 are all far from that intersection.',
        desmosLatex:['y=\\frac{3x-5}{4}+\\frac{3}{2}','y=\\frac{x+9}{2}','x=17']
      },
      {
        id:'BL2-10', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear equation with decimals on both sides (distributing before clearing)',
        stem:'What is the solution to the equation below?<br><br>0.4(x + 3) − 0.25x = 0.1(x − 6) + 2.7',
        choices:{A:'18', B:'66', C:'−18', D:'−90'},
        correct:'A',
        expCorrect:'Distribute on both sides first, keeping each decimal attached to the WHOLE parenthesis. Left: 0.4x + 1.2 − 0.25x = 0.15x + 1.2. Right: 0.1x − 0.6 + 2.7 = 0.1x + 2.1. The equation is now 0.15x + 1.2 = 0.1x + 2.1 → 0.05x = 0.9 → x = 18. (If the decimals make you nervous, multiply everything by 100 at the start instead: 40(x + 3) − 25x = 10(x − 6) + 270 → 15x + 120 = 10x + 210 → 5x = 90 → x = 18.) (Check in the original: 0.4(21) − 0.25(18) = 8.4 − 4.5 = 3.9, and 0.1(12) + 2.7 = 1.2 + 2.7 = 3.9 ✓.)',
        expWrong:{
          B:'66 comes from moving the +1.2 across the equals sign without changing its sign: 0.15x = 0.1x + 2.1 + 1.2 → 0.05x = 3.3 → x = 66. A term that crosses the equals sign flips sign, so the 1.2 arrives as −1.2 and 2.1 − 1.2 = 0.9.',
          C:'−18 comes from not distributing the 0.4 to the 3: writing 0.4(x + 3) as 0.4x + 3 makes the left side 0.15x + 3, and 0.15x + 3 = 0.1x + 2.1 gives x = −18. The factor outside multiplies BOTH terms inside, and 0.4(3) = 1.2.',
          D:'−90 is the same slip on the other parenthesis: writing 0.1(x − 6) as 0.1x − 6 makes the right side 0.1x − 3.3, and 0.15x + 1.2 = 0.1x − 3.3 gives x = −90. The 0.1 has to reach the −6 as well, and 0.1(−6) = −0.6, not −6.'
        },
        tip:'Decimals hide distribution errors, because 0.4x + 3 looks every bit as plausible on the page as 0.4x + 1.2. Two defenses: multiply the whole equation by a power of 10 (here 100) before doing anything, so you distribute whole numbers; and once you have an answer, substitute it into the ORIGINAL equation, because a distribution slip always breaks that check.',
        desmos:'Graph y = 0.4(x + 3) − 0.25x and y = 0.1(x − 6) + 2.7. The two lines are shallow and nearly parallel, which is exactly why the arithmetic is delicate, and they cross at x = 18.',
        desmosLatex:['y=0.4(x+3)-0.25x','y=0.1(x-6)+2.7','x=18']
      },
      {
        id:'BL2-11', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Two-stage pricing model (flat fee up to a threshold, rate after it)',
        stem:'A courier charges a flat fee of $15.00 for any package weighing 3 kilograms or less, plus $2.50 for each whole kilogram above 3. How much less does it cost to ship one 20-kilogram package than to ship two 10-kilogram packages?',
        choices:{A:'$0.00', B:'$7.50', C:'$15.00', D:'$25.00'},
        correct:'B',
        expCorrect:'Price each shipment with the two-stage rule, remembering that the flat fee already covers the first 3 kilograms. One 20-kilogram package: 20 − 3 = 17 kilograms are charged at $2.50, so the cost is 15.00 + 2.50(17) = 15.00 + 42.50 = $57.50. Two 10-kilogram packages: each is 10 − 3 = 7 chargeable kilograms, so each costs 15.00 + 2.50(7) = 15.00 + 17.50 = $32.50, and two of them cost $65.00. The single package is cheaper by 65.00 − 57.50 = $7.50.',
        expWrong:{
          A:'$0.00 assumes the charge is proportional to weight, so 20 kilograms would cost the same however it is boxed. It is not proportional: the flat fee is charged once per PACKAGE, and the first 3 kilograms of each package ride inside that fee, so how a shipment is split changes the price.',
          C:'$15.00 counts only the second flat fee — splitting the shipment does mean paying $15.00 twice instead of once. That is true but incomplete: splitting also drops the chargeable weight from 17 kilograms to 2 × 7 = 14 kilograms, which gives $7.50 back. The net difference is 15.00 − 7.50 = $7.50.',
          D:'$25.00 compares the 20-kilogram package with ONE 10-kilogram package: 57.50 − 32.50 = 25.00. The other side of the comparison in this question is two such packages, so that total has to be doubled to $65.00 first.'
        },
        tip:'In a two-stage price — a flat amount that covers a threshold, then a rate above it — the amount charged at the rate is the weight MINUS the threshold, never the full weight. And whenever a problem splits one shipment into several, remember that both parts of the fee change: the fixed fee is paid once per piece (which costs more) and the threshold is subtracted once per piece (which costs less), so you have to compute both effects instead of guessing which one wins.',
        desmos:'Type 15+2.5*17 on one line and 2*(15+2.5*7) on the next: Desmos returns 57.5 and 65, and the answer is the gap between them. Graphing y = 15 + 2.5(x − 3) also makes the structure visible — the line starts at $15 when x = 3, not at the origin.',
        desmosLatex:['15+2.5\\cdot17','2\\left(15+2.5\\cdot7\\right)','65-57.5','y=15+2.5\\left(x-3\\right)']
      },
      {
        id:'BL2-12', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Comparing a two-stage model with a flat model (least whole number, strict)',
        stem:'A phone plan charges $0.12 per minute for the first 300 minutes used in a month and $0.06 for each minute after the first 300. A second plan charges a flat $45.00 per month for any number of minutes. What is the least whole number of minutes used in a month for which the second plan costs less than the first plan?',
        answer:'451',
        expCorrect:'Price the first plan in two stages. The first 300 minutes cost 0.12(300) = $36.00, which is still under $45.00, so the crossover has to happen after minute 300 and the second stage is where the comparison lives. For m > 300 the first plan costs 36.00 + 0.06(m − 300). The second plan wins when 36.00 + 0.06(m − 300) > 45.00 → 0.06(m − 300) > 9.00 → m − 300 > 150 → m > 450. The inequality is strict and m is a whole number, so the least value that works is m = 451. (Check: at m = 450 the first plan costs 36.00 + 0.06(150) = $45.00 exactly — a tie, not "less than"; at m = 451 it costs $45.06, so the flat plan finally wins ✓.) Answer: 451.',
        tip:'A two-stage rate is never a single multiplication. Charge the first block at its own price, then apply the second rate only to the units ABOVE the threshold — answering 375 means you priced every minute at $0.12 (45 ÷ 0.12), which this plan never does. And when the comparison is strict ("costs less than"), the crossover itself does not count: 450 is the last minute where the two plans are equal, so the answer is the next whole number up.',
        desmos:'Graph y = 36 + 0.06(x − 300) restricted to x > 300, together with y = 45: they meet at (450, 45), so the first whole minute past the crossing is 451. Adding y = 0.12x shows the first stage and makes it clear why the crossover cannot happen before minute 300.',
        desmosLatex:['y=36+0.06\\left(x-300\\right)\\left\\{x>300\\right\\}','y=0.12x\\left\\{0<x<300\\right\\}','y=45','(450,45)']
      }
    ]
  });
})();
