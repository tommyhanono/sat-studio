/* SAT Studio question set — Math: Problem-Solving & Data Analysis
   Probability and conditional probability, hard + brutal tier (PBH-01 a PBH-13) */
(function(){

  /* ---- Tabla de doble entrada de PBH-09. 400 entregas, tres mensajeros.
     La celda en blanco es "Courier C · Delayed" = 12, y se llega por dos rutas:
     por la columna (80 − 40 − 28) o por la fila (60 − 48). El truco de la
     pregunta no es la celda: es que el denominador son 200, no 400. ---- */
  var TBL_COURIERS =
    '<table><thead><tr><th>Courier</th><th>On time</th><th>Delayed</th><th>Total</th></tr></thead>' +
    '<tbody>' +
    '<tr><th>A</th><td>160</td><td>40</td><td>200</td></tr>' +
    '<tr><th>B</th><td>112</td><td>28</td><td>140</td></tr>' +
    '<tr><th>C</th><td>48</td><td>&nbsp;</td><td>60</td></tr>' +
    '<tr><th>Total</th><td>320</td><td>80</td><td>400</td></tr>' +
    '</tbody></table>';

  window.SAT_SETS.push({
    id: 'math-psda-prob-hard',
    title: 'Probability — Hard & Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Thirteen questions on probability and conditional probability at Module 2 level: conditionals run backwards, two-way tables rebuilt from a handful of probabilities, independence written as an equation, drawing without replacement, expected value used to choose between two plans, and counting under a restriction.',
    minutes: 20,
    questions: [

      /* ============ Difícil (PBH-01 a PBH-05) ============ */
      {
        id:'PBH-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Conditional probability run backwards: from P(A given B) to P(B given A)',
        stem:'At a language institute, 240 students study French and 160 students study Japanese, and no student studies both. Among the French students, 45% attend the evening section. Among the Japanese students, 70% attend the evening section. One evening-section student is picked at random. What is the probability that this student studies Japanese?',
        choices:{A:'7/10', B:'2/5', C:'28/55', D:'7/25'},
        correct:'C',
        expCorrect:'Build the evening group first. French in the evening: 0.45 × 240 = 108. Japanese in the evening: 0.70 × 160 = 112. The evening section therefore holds 108 + 112 = 220 students, and 112 of them study Japanese. P = 112/220 = 28/55 ≈ 0.509. (Check: 108/220 + 112/220 = 1 ✓.)',
        expWrong:{
          A:'7/10 is the 70% given in the problem, which is P(evening given Japanese). The question asks for P(Japanese given evening): same 112 on top, a different group underneath.',
          B:'2/5 is 160/400, the share of Japanese students in the whole institute. That ignores the condition entirely — the pool is the 220 evening students, not all 400.',
          D:'7/25 is 112/400, the joint probability of being Japanese AND in the evening. Conditioning means dividing by the size of the condition group (220), not by the grand total.'
        },
        tip:'When a percentage is given "among the X students", it is a conditional with X underneath. To flip it, rebuild the other group by counting: numerator stays, denominator becomes the size of the new condition group.',
        desmos:'Type 0.45*240 for 108 and 0.7*160 for 112, then (0.7*160)/(0.45*240+0.7*160) for 0.5091. Type 28/55 underneath and watch the two land on the same number; 112/400 = 0.28 is the trap.',
        desmosLatex:['0.45*240','0.7*160','(0.7*160)/(0.45*240+0.7*160)','28/55']
      },
      {
        id:'PBH-02', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Two-way table: recovering a cell count from a conditional probability',
        stem:'A gym recorded, for each of its 480 members, whether the member takes a morning class and whether the member takes a weekend class. Exactly 300 members take a morning class. Among the members who take a weekend class, the probability of also taking a morning class is 3/4. A total of 340 members take a morning class, a weekend class, or both. How many members take both?',
        answer:'120',
        expCorrect:'Let b be the number who take both and w the number who take a weekend class. The conditional gives b/w = 3/4, so w = 4b/3. The union gives 300 + w − b = 340, so w − b = 40. Substituting: 4b/3 − b = 40, that is b/3 = 40, so b = 120 and w = 160. Check: 300 + 160 − 120 = 340 ✓, and 120/160 = 3/4 ✓. The full table reads morning only 180, weekend only 40, both 120, neither 140, and those add to 480 ✓. Answer: 120.',
        tip:'A conditional probability is one equation and the union count is another. Name the unknown cell, write both equations in terms of it, and solve — do not try to fill the table by eye when two of its numbers are unknown.',
        desmos:'Graph y=(4/3)x-x and y=40; they cross at x=120, which is the number who take both. Then type 300+160-120 and confirm it returns 340.',
        desmosLatex:['y=(4/3)x-x','y=40','300+160-120']
      },
      {
        id:'PBH-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Addition rule when two events are not mutually exclusive',
        stem:'In a shipment of 200 tablets, 74 have a cracked screen, 56 have a failing battery, and 23 have both problems. One tablet from the shipment is chosen at random. What is the probability that the tablet has at least one of the two problems?',
        choices:{A:'0.535', B:'0.65', C:'0.115', D:'0.465'},
        correct:'A',
        expCorrect:'These two events overlap, so P(A or B) = P(A) + P(B) − P(A and B) = (74 + 56 − 23)/200 = 107/200 = 0.535. (Check by parts: cracked only 74 − 23 = 51, battery only 56 − 23 = 33, both 23; 51 + 33 + 23 = 107 ✓.)',
        expWrong:{
          B:'0.65 is (74 + 56)/200 = 130/200. Adding the two counts straight counts the 23 tablets with both problems twice, which is exactly what the subtraction is there to undo.',
          C:'0.115 is 23/200, the probability of having BOTH problems. "At least one" is the union, not the overlap.',
          D:'0.465 is 93/200, the probability of having NEITHER problem. It is the complement of the answer: 1 − 0.535 = 0.465.'
        },
        tip:'Two events are mutually exclusive only when no case belongs to both. The moment the problem hands you a "both" count, use P(A or B) = P(A) + P(B) − P(A and B); plain addition is the special case where that last term is zero.',
        desmos:'Type (74+56-23)/200 for 0.535. Then type (74+56)/200 for 0.65 and 1-0.535 for 0.465: seeing the three side by side names each trap.',
        desmosLatex:['(74+56-23)/200','(74+56)/200','1-0.535']
      },
      {
        id:'PBH-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Probability of at least one success when drawing without replacement',
        stem:'A drawer holds 9 identical-looking keys, 3 of which open the storage room. Three keys are drawn one after another without replacement. What is the probability that at least one of the three keys drawn opens the storage room?',
        choices:{A:'19/27', B:'5/21', C:'1/3', D:'16/21'},
        correct:'D',
        expCorrect:'Go through the complement. P(none of the three opens it) = (6/9)(5/8)(4/7) = 120/504 = 5/21, or with combinations C(6,3)/C(9,3) = 20/84 = 5/21. So P(at least one) = 1 − 5/21 = 16/21 ≈ 0.762. (Check: 5/21 + 16/21 = 1 ✓.)',
        expWrong:{
          A:'19/27 is 1 − (6/9)³, which keeps the denominator at 9 for all three draws. Without replacement the pool shrinks: the second draw is out of 8 and the third out of 7.',
          B:'5/21 is P(no key opens the room) — the complement, computed correctly and then not subtracted from 1. It is the penultimate step, not the answer.',
          C:'1/3 is 3/9, the probability that the FIRST key opens the room. One draw is not three.'
        },
        tip:'"At least one" almost always means: compute P(none) and subtract from 1. Listing the "exactly one, exactly two, exactly three" cases works too but takes three times as long and gives three chances to slip.',
        desmos:'Type (6/9)(5/8)(4/7) for 0.2381, then 1-(6/9)(5/8)(4/7) for 0.7619, which is 16/21. Type 1-(6/9)^3 for 0.7037 to see what forgetting the shrinking pool costs.',
        desmosLatex:['(6/9)(5/8)(4/7)','1-(6/9)(5/8)(4/7)','16/21','1-(6/9)^3']
      },
      {
        id:'PBH-05', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Expected value of a payout, seen from the other side of the counter',
        stem:'A carnival booth charges $5 per play. On each play the player draws one ball at random from a box holding 25 balls: 1 gold, 4 silver, and 20 plain. A gold ball pays the player $50, a silver ball pays the player $10, and a plain ball pays nothing. What is the booth’s expected profit, in dollars, on one play?',
        answer:'1.4',
        expCorrect:'Expected payout to the player: (1/25)(50) + (4/25)(10) + (20/25)(0) = 2 + 1.6 + 0 = 3.60. The booth collects $5 every play, so its expected profit is 5 − 3.60 = 1.40. (Check over 25 plays: the booth takes in 25 × 5 = $125 and pays out 50 + 4 × 10 = $90, leaving $35, and 35/25 = $1.40 per play ✓.) Answer: 1.4.',
        tip:'Expected value is Σ(outcome × probability), and the sign depends on who is asking. Compute the payout once, then subtract it from the price to get the house side — do not try to build the house side directly with negative numbers.',
        desmos:'Type (50*1+10*4+0*20)/25 for 3.6, then 5-3.6 for 1.4. The long check is (25*5-90)/25, which returns the same 1.4.',
        desmosLatex:['(50*1+10*4+0*20)/25','5-3.6','(25*5-90)/25']
      },

      /* ============ Brutal · difficulty Difícil + extreme (PBH-06 a PBH-13) ============ */
      {
        id:'PBH-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Two-way table rebuilt from three probabilities, then a conditional probability',
        stem:'A store recorded its 600 online orders from last month. Of those orders, 3/5 included at least one book, 1/4 included at least one film, and 1/10 included both a book and a film. One order is chosen at random from among the orders that did not include a book. What is the probability that this order included a film?',
        choices:{A:'1/4', B:'3/8', C:'3/20', D:'5/8'},
        correct:'B',
        expCorrect:'Turn the three fractions into counts: book 3/5 × 600 = 360, film 1/4 × 600 = 150, both 1/10 × 600 = 60. Now the table: book and film 60, book only 300, film only 90, neither 150, and 60 + 300 + 90 + 150 = 600 ✓. The condition is "did not include a book", so the pool is 600 − 360 = 240 orders, and of those the ones with a film are 150 − 60 = 90. P = 90/240 = 3/8 = 0.375.',
        expWrong:{
          A:'1/4 is 150/600, the overall share of orders with a film. The condition should have cut the pool from 600 down to the 240 orders without a book.',
          C:'3/20 is 90/600: the right numerator over the grand total. That is the joint probability of film AND no book, not the conditional.',
          D:'5/8 is 150/240 — correct denominator, wrong numerator. It counts all 150 film orders, but 60 of them also included a book and so are not in the pool at all.'
        },
        tip:'When the data arrives as probabilities, multiply everything by the total first and work in counts. Then fill the four inner cells before reading any condition: book-only = book − both, film-only = film − both, neither = total − book − film + both.',
        desmos:'Type 600*3/5 = 360, 600/4 = 150 and 600/10 = 60. Then (150-60)/(600-360) returns 0.375, which is 3/8. Compare with 150/240 = 0.625 and 90/600 = 0.15.',
        desmosLatex:['600*3/5','600/4','600/10','(150-60)/(600-360)','3/8']
      },
      {
        id:'PBH-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Independent events: solving for the overlap that makes independence hold',
        stem:'A club has 180 members. Each member either volunteers or does not, and each member either drives or does not. Exactly 60 members volunteer and exactly 75 members drive. Let x be the number of members who both volunteer and drive. For which value of x are the two events independent for one member picked at random from the club?',
        choices:{A:'25', B:'45', C:'0', D:'144'},
        correct:'A',
        expCorrect:'Independence means P(volunteers and drives) = P(volunteers) × P(drives). In counts: x/180 = (60/180)(75/180), so x = 60 × 75 / 180 = 4500/180 = 25. Check the equivalent rate test: among the 75 drivers, 25 volunteer, and 25/75 = 1/3; in the whole club, 60/180 = 1/3. The rates match, so knowing a member drives tells you nothing about volunteering ✓.',
        expWrong:{
          B:'45 is 0.60 × 75, which reads the 60 as "60 percent". It is a count of members, so the probability is 60/180 = 1/3, and 1/3 × 75 = 25.',
          C:'0 is the mutually exclusive answer, not the independent one. Zero overlap makes the events maximally dependent: learning that a member drives would rule volunteering out completely.',
          D:'144 is 180 × 60 / 75, which divides by the wrong total. It also fails the sanity check: only 60 members volunteer, so no more than 60 can be in the overlap.'
        },
        tip:'Independence is an equation, not a feeling: P(A and B) = P(A) × P(B). On counts it reads cell = (row total × column total) ÷ grand total, which is worth memorizing because it turns every independence question into one multiplication.',
        desmos:'Type 60*75/180 for 25. Then check the rates: 25/75 and 60/180 both return 0.3333. Typing 0.6*75 shows where the 45 trap comes from.',
        desmosLatex:['60*75/180','25/75','60/180','0.6*75']
      },
      {
        id:'PBH-08', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Conditional probability: finding the size of the group the condition names',
        stem:'A lab ran a screening on 900 tissue samples. Every sample was either flagged or cleared by the screen. Of the samples that were flagged, 12% were later confirmed positive; of the samples that were cleared, 1% were later confirmed positive. In all, 42 of the 900 samples were confirmed positive. How many samples did the screen flag?',
        answer:'300',
        expCorrect:'Let f be the number flagged, so 900 − f were cleared. The confirmed positives split into the two groups: 0.12f + 0.01(900 − f) = 42. That is 0.12f + 9 − 0.01f = 42, so 0.11f = 33 and f = 300. Check: 0.12 × 300 = 36 confirmed among the flagged, 0.01 × 600 = 6 confirmed among the cleared, and 36 + 6 = 42 ✓. Answer: 300.',
        tip:'Two conditional rates plus one overall count is a one-variable equation, not a table you can fill by inspection. Name the unknown group size, write each rate times its own group, and set the sum equal to the total given.',
        desmos:'Graph y=0.12x+0.01(900-x) and y=42; they meet at x=300. Then type 0.12*300+0.01*600 and confirm it returns 42.',
        desmosLatex:['y=0.12x+0.01(900-x)','y=42','0.12*300+0.01*600']
      },
      {
        id:'PBH-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Two-way table: a conditional probability over two rows, with a cell missing',
        figure:TBL_COURIERS,
        stem:'The table shows how 400 deliveries made last month were split among three couriers and whether each delivery was on time or delayed. One delivery is chosen at random from among those handled by courier B or courier C. What is the probability that the delivery was delayed?',
        choices:{A:'0.1', B:'0.14', C:'0.5', D:'0.2'},
        correct:'D',
        expCorrect:'Fill the blank first: delayed for courier C = 80 − 40 − 28 = 12 down the column, and 60 − 48 = 12 across the row ✓. The phrase "from among those handled by courier B or courier C" makes the pool 140 + 60 = 200 deliveries. Delayed among them: 28 + 12 = 40. P = 40/200 = 0.2.',
        expWrong:{
          A:'0.1 is 40/400, which uses the grand total. The selection never reaches courier A, so 200 is the denominator, not 400.',
          B:'0.14 is 28/200: the right denominator with courier C left out of the numerator, because the blank cell was never filled in.',
          C:'0.5 is 40/80, which conditions the other way around — the probability that a delayed delivery came from B or C, not the probability that a B-or-C delivery was delayed.'
        },
        tip:'Fill every blank cell before you read the question again. Then let the words pick the denominator: "from among those…" names the pool, and rows joined by "or" are added whole, both cells and totals.',
        desmos:'Type 80-40-28 for the missing 12, then (28+12)/(140+60) for 0.2. The two traps are 40/400 = 0.1 and 40/80 = 0.5.',
        desmosLatex:['80-40-28','(28+12)/(140+60)','40/400','40/80']
      },
      {
        id:'PBH-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Counting permutations under two restrictions at once',
        stem:'Seven students stand in a single row for a photograph. Two of them, Nadia and Omar, refuse to stand next to each other, and a third student, Priya, must stand at one of the two ends of the row. In how many different orders can the seven students stand?',
        choices:{A:'480', B:'1,200', C:'960', D:'1,440'},
        correct:'C',
        expCorrect:'Place Priya first: 2 choices of end. The other six students then fill six consecutive spots, so count the arrangements of six in a row with Nadia and Omar apart: 6! − (arrangements with them together) = 720 − 2 × 5! = 720 − 240 = 480. Multiply by the 2 ends: 2 × 480 = 960. (Check the "together" count: glue Nadia and Omar into one block, arrange 5 objects in 5! = 120 ways, and the block has 2 internal orders, so 240 ✓.)',
        expWrong:{
          A:'480 is the count for one end only. Priya can stand at either end, and the two cases are different photographs, so the answer doubles.',
          B:'1,200 is 2 × (720 − 120): the glued block was arranged in 5! = 120 ways but the factor of 2 for "Nadia–Omar" versus "Omar–Nadia" inside the block was dropped.',
          D:'1,440 is 2 × 6!, which seats Priya at an end and then ignores the Nadia-and-Omar restriction entirely.'
        },
        tip:'Handle restrictions in order of how much they pin down: fix the forced position first, then count what is left. For a "not next to each other" condition, always count the together case by gluing the pair into one block (and remember the block’s 2 internal orders) and subtract.',
        desmos:'Type 2*(6!-2*5!) for 960. Then 2*6! = 1440 shows the cost of ignoring the pair, and 2*(6!-5!) = 1200 shows the cost of forgetting the block has two internal orders.',
        desmosLatex:['2*(6!-2*5!)','2*6!','2*(6!-5!)']
      },
      {
        id:'PBH-11', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Expected value: the cost that makes two plans break even',
        stem:'A repair shop offers two plans on a part that fails within the year with probability 0.15. Under Plan A the customer pays a flat $96 for the year and the shop covers the whole repair. Under Plan B the customer pays nothing up front but pays the full repair cost of c dollars if the part fails. For what value of c do the two plans have the same expected cost for the customer?',
        answer:'640',
        expCorrect:'Plan A has no randomness: its expected cost is 96. Plan B costs c with probability 0.15 and 0 with probability 0.85, so its expected cost is 0.15c + 0.85(0) = 0.15c. Setting them equal: 0.15c = 96, so c = 96/0.15 = 640. Check: 0.15 × 640 = 96 ✓. (Reading it back: below $640 a repair is cheap enough that Plan B wins on average; above it, the flat fee does.) Answer: 640.',
        tip:'To compare two options, write an expected value for each and set them equal — the break-even value is the root of that one equation. A flat, certain cost is its own expected value; only the uncertain side gets multiplied by a probability.',
        desmos:'Graph y=0.15x and y=96 and read the intersection at x=640. Typing 96/0.15 returns the same 640 in one step.',
        desmosLatex:['y=0.15x','y=96','96/0.15']
      },
      {
        id:'PBH-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Conditional probability when the condition group is tiny',
        stem:'At a factory, 4% of the 2,500 items produced in a week come off line 1 and the rest come off line 2. On line 1, 25% of the items need rework; on line 2, only 2% need rework. One item that needs rework is picked at random from that week’s output. What is the probability that it came off line 1?',
        choices:{A:'1/25', B:'25/73', C:'1/4', D:'25/48'},
        correct:'B',
        expCorrect:'Counts first. Line 1: 0.04 × 2,500 = 100 items, of which 0.25 × 100 = 25 need rework. Line 2: 2,400 items, of which 0.02 × 2,400 = 48 need rework. Rework total: 25 + 48 = 73. The condition is "needs rework", so P(line 1 given rework) = 25/73 ≈ 0.342. Notice the point of the question: line 1 has a rework rate twelve times higher, yet fewer than half the rework comes from it, because line 1 makes so few items.',
        expWrong:{
          A:'1/25 is 0.04, the share of output coming off line 1 with no condition applied. Knowing the item needs rework does change that number — from 4% up to about 34%.',
          C:'1/4 is the 25% given in the problem, which is P(rework given line 1). The question runs the conditional the other way.',
          D:'25/48 compares line 1’s rework count with line 2’s rework count. A probability needs the whole condition group underneath, so the denominator is 25 + 48 = 73, not 48.'
        },
        tip:'A high rate on a small group still yields few cases. Always convert percentages into counts before comparing groups of different sizes — the denominator of a reversed conditional is the sum of both branches, never one of them.',
        desmos:'Type 0.04*2500 for 100, then 0.25*100 for 25 and 0.02*2400 for 48. Finally 25/(25+48) returns 0.3425. The trap 25/48 returns 0.5208.',
        desmosLatex:['0.04*2500','0.25*100','0.02*2400','25/(25+48)']
      },
      {
        id:'PBH-13', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Conditional probability running backwards in time, without replacement',
        stem:'A jar holds 5 green marbles and 7 yellow marbles. Two marbles are drawn one at a time without replacement. Given that the second marble drawn is green, what is the probability that the first marble drawn was yellow?',
        choices:{A:'7/11', B:'7/12', C:'35/132', D:'4/11'},
        correct:'A',
        expCorrect:'Two ingredients. Joint: P(first yellow and second green) = (7/12)(5/11) = 35/132. Condition: P(second is green) = (5/12)(4/11) + (7/12)(5/11) = 20/132 + 35/132 = 55/132 (which is 5/12, the same as for the first draw). Divide: (35/132) ÷ (55/132) = 35/55 = 7/11 ≈ 0.636. Check with the other branch: P(first green given second green) = 20/55 = 4/11, and 7/11 + 4/11 = 1 ✓.',
        expWrong:{
          B:'7/12 is P(first is yellow) with no condition at all — the answer before the information about the second marble is used.',
          C:'35/132 is the joint probability P(first yellow AND second green), the numerator on its own. Conditioning still requires dividing it by P(second is green) = 55/132.',
          D:'4/11 answers the other branch: the probability that the first marble was GREEN given that the second one is. It is the complement of the answer, since 7/11 + 4/11 = 1.'
        },
        tip:'Conditional probability does not care about the order events happened in, only about which one is given: P(A given B) = P(A and B) ÷ P(B). To get P(B) when B sits second, add the joint probabilities of every way to reach it.',
        desmos:'Type (7/12)(5/11) for 0.2652 and (5/12)(4/11)+(7/12)(5/11) for 0.4167. Their quotient, ((7/12)(5/11))/((5/12)(4/11)+(7/12)(5/11)), returns 0.6364, which is 7/11.',
        desmosLatex:['(7/12)(5/11)','(5/12)(4/11)+(7/12)(5/11)','((7/12)(5/11))/((5/12)(4/11)+(7/12)(5/11))','7/11']
      }

    ]
  });
})();
