/* SAT Studio question set — Math: Algebra — Brutal III (BL3-01 to BL3-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-brutal-alg3',
    title: 'Algebra — Brutal III',
    section: 'math',
    level: 'Extreme',
    description: 'Brutal Algebra III: three unknowns answered with a combination instead of a solve, systems where an integer or positivity condition throws the algebraic answer away, absolute values buried inside another operation, models whose rate changes partway and then cross, inequalities whose coefficient has an unknown sign, and two "must be true" items where the other three statements are true only sometimes.',
    minutes: 20,
    questions: [
      {
        id:'BL3-01', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Three equations in three unknowns (combination, without solving for x, y, z)',
        stem:'In the system of equations below, x, y and z are real numbers.<br><br>x + 2y + 3z = 20<br>2x + 3y + z = 22<br>3x + y + 2z = 18<br><br>What is the value of 4x + 5y + 6z?',
        choices:{A:'10', B:'30', C:'50', D:'200'},
        correct:'C',
        expCorrect:'Nothing here asks for x, y or z on their own, so do not solve for them — build the target out of the equations you were given. Add all three: the x terms give 1 + 2 + 3 = 6, and the same happens with y and with z, so the sum is 6x + 6y + 6z = 20 + 22 + 18 = 60, which means x + y + z = 10. Now compare the target with the first equation: 4x + 5y + 6z minus (x + 2y + 3z) leaves 3x + 3y + 3z, exactly 3 copies of x + y + z. So 4x + 5y + 6z = (x + 2y + 3z) + 3(x + y + z) = 20 + 3(10) = 50. (Check the long way: the actual solution is x = 8/3, y = 14/3, z = 8/3, and 4(8/3) + 5(14/3) + 6(8/3) = (32 + 70 + 48)/3 = 150/3 = 50 ✓ — ugly values, which is precisely why the combination is the intended route.)',
        expWrong:{
          A:'10 is x + y + z, the intermediate result. It is the key that unlocks the problem, not the answer: the target weights the three variables 4, 5 and 6, so it cannot equal their plain sum.',
          B:'30 is 3(x + y + z), the leftover piece only. You still owe the equation it was peeled off from: the target is that leftover PLUS the first equation, 30 + 20 = 50.',
          D:'200 is 20 + 3(60), which runs the right method on the wrong number: 60 is the sum of the three right-hand sides, and that sum is 6x + 6y + 6z, not x + y + z. The division by 6 is the step that turns it into 10.'
        },
        tip:'Three unknowns with a single combined expression asked for is a signal, not an accident: adding all three equations usually collapses to a multiple of x + y + z. Get that value first, then subtract it (in whole copies) from the target and see which single equation is left over. If you catch yourself doing elimination twice to isolate one variable, you have left the intended path.',
        desmos:'Desmos is a bookkeeper here, not a grapher — three planes do not fit on the xy-plane. Type (20+22+18)/6 to land on x + y + z = 10 in one keystroke, then 20 + 3·10 for the answer. If you want proof the combination is legal, the exact solution is x = 8/3, y = 14/3, z = 8/3: evaluate the target there and 50 comes back.',
        desmosLatex:['\\frac{20+22+18}{6}','20+3\\cdot10','4\\cdot\\frac{8}{3}+5\\cdot\\frac{14}{3}+6\\cdot\\frac{8}{3}']
      },
      {
        id:'BL3-02', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Three unknowns from pairwise totals (halving the sum, then one variable)',
        stem:'A shipping clerk has three crates, X, Y and Z, and a scale that is reliable only with two crates on it at a time, so the crates are weighed in pairs. Crates X and Y together weigh 27 kilograms, crates Y and Z together weigh 35 kilograms, and crates X and Z together weigh 32 kilograms. A pallet is then loaded with 2 crates identical to X, 3 identical to Y and 2 identical to Z. What is the total weight, in kilograms, of the crates on that pallet?',
        choices:{A:'94', B:'106', C:'109', D:'114'},
        correct:'C',
        expCorrect:'Write the three readings as x + y = 27, y + z = 35 and x + z = 32, and add them. Every crate appears in exactly two of the three weighings, so the total is 2x + 2y + 2z = 27 + 35 + 32 = 94, and therefore x + y + z = 47. The pallet holds 2x + 3y + 2z, which is 2(x + y + z) plus one extra y, so all that is missing is y — and y is the crate left out of the X-and-Z weighing: y = 47 − 32 = 15. The pallet weighs 2(47) + 15 = 94 + 15 = 109 kilograms. (Check by finding all three: x = 47 − 35 = 12, y = 15, z = 47 − 27 = 20; the pairs give 12 + 15 = 27 ✓, 15 + 20 = 35 ✓, 12 + 20 = 32 ✓, and 2(12) + 3(15) + 2(20) = 24 + 45 + 40 = 109 ✓.)',
        expWrong:{
          A:'94 is the sum of the three scale readings. That sum is exactly 2x + 2y + 2z, which is the pallet MINUS one crate Y — one step short, and the trap is that 94 looks like a finished total instead of a doubled one.',
          B:'106 is 2(47) + 12, which adds crate X where the extra crate should be a Y. The leftover crate in 2x + 3y + 2z is the one whose count is odd, and here that is Y.',
          D:'114 is 2(47) + 20, the same slip with crate Z. Each single crate comes from subtracting the reading that leaves it out: y = 47 − (x + z) = 47 − 32, not 47 − 27.'
        },
        tip:'When three quantities are given in PAIRS, add all three readings and divide by 2 — not by 3 — because each item was counted twice. From that total, any single item is the total minus the reading that excludes it. Then match the target: an expression like 2x + 3y + 2z is 2(x + y + z) plus the variable whose coefficient is out of step, so you only ever have to isolate one of the three.',
        desmos:'Use Desmos as a calculator and keep the three steps visible: (27+35+32)/2 gives 47, then 47−32 gives y = 15, then 2·47+15 gives 109. Seeing the divide-by-2 on its own line is the point — writing 27+35+32 and stopping is the mistake this question is built around.',
        desmosLatex:['\\frac{27+35+32}{2}','47-32','2\\cdot47+15']
      },
      {
        id:'BL3-03', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'One equation, two unknowns, solved by an integer condition (two candidates, one survives)',
        stem:'A club sells raffle entries in exactly two ways: a single entry for $6 and a booklet of entries for $25. Last month the club collected exactly $293 from selling entries in these two ways, and it sold more single entries than booklets. How many booklets did the club sell?',
        choices:{A:'3', B:'5', C:'11', D:'28'},
        correct:'B',
        expCorrect:'Let s be the number of single entries and b the number of booklets, so 6s + 25b = 293 with s and b whole numbers. One equation and two unknowns is not enough on its own — being whole numbers is the second condition. Split 25b into 24b + b: since 6s and 24b are both multiples of 6, the leftover 293 − b has to be a multiple of 6 as well. Now 293 = 6(48) + 5, so b must leave remainder 5 when divided by 6: b = 5, 11, 17, … And 25b ≤ 293 caps it at b ≤ 11, so only two candidates survive: b = 5 (then 6s = 293 − 125 = 168, s = 28) and b = 11 (then 6s = 293 − 275 = 18, s = 3). The last sentence decides between them: "more single entries than booklets" is true for 28 singles and 5 booklets, and false for 3 singles and 11 booklets. So the club sold 5 booklets. (Check: 6(28) + 25(5) = 168 + 125 = 293 ✓, and 28 &gt; 5 ✓.)',
        expWrong:{
          A:'3 is the number of single entries in the REJECTED scenario — the wrong variable of the wrong pair, which is where you land by taking the first whole-number pair you stumble on and never rereading the last line.',
          C:'11 is the other whole-number solution, and it does satisfy the money equation ($275 + $18 = $293). What it fails is the last sentence: it comes with only 3 single entries, so the singles are not the larger count. When two candidates both fit the arithmetic, the condition in the stem is there to kill one.',
          D:'28 is the number of SINGLE entries in the scenario that works. It is the count the condition talks about, so it is the number your eye is resting on when you reach the end — but the question asks for booklets.'
        },
        tip:'One equation with two unknowns is solvable when the unknowns are forced to be whole numbers. Do not guess: take the equation modulo the smaller coefficient (here, split 25b as 24b + b so everything but b is a multiple of 6), which tells you the remainder b must leave, and the largest coefficient caps how far the list can run. Expect the short list to have MORE than one entry, then hunt the stem for the comparison that discards the rest.',
        desmos:'Graph y = (293 − 25x)/6, reading x as booklets and y as single entries: the line only counts where BOTH coordinates are whole numbers, and between x = 0 and x = 11 that happens just twice, at (5, 28) and (11, 3). Add the line y = x and the condition becomes visible — "more singles than booklets" means the point has to sit ABOVE that line, and only (5, 28) does.',
        desmosLatex:['y=\\frac{293-25x}{6}','y=x','(5,28)','(11,3)']
      },
      {
        id:'BL3-04', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Parametric system with a sign condition on the solution (quadrant, strict boundaries)',
        stem:'In the system of equations below, k is a constant.<br><br>x + 2y = k<br>3x − y = 12<br><br>For which of the following values of k is the solution (x, y) of this system a point in Quadrant IV of the xy-plane, where x is positive and y is negative?',
        choices:{A:'−24', B:'−3', C:'4', D:'6'},
        correct:'B',
        expCorrect:'Solve the system once, in terms of k, and let the condition do the rest. From the second equation, y = 3x − 12. Substitute: x + 2(3x − 12) = k → 7x − 24 = k → x = (k + 24)/7, and then y = 3(k + 24)/7 − 12 = (3k + 72 − 84)/7 = (3k − 12)/7. Quadrant IV needs x &gt; 0 and y &lt; 0 at the same time: (k + 24)/7 &gt; 0 gives k &gt; −24, and (3k − 12)/7 &lt; 0 gives k &lt; 4. So the solution sits in Quadrant IV exactly when −24 &lt; k &lt; 4, and the only listed value inside that window is −3. (Check k = −3: x = 21/7 = 3 and y = −21/7 = −3, and the point (3, −3) satisfies both equations — 3 + 2(−3) = −3 ✓ and 3(3) − (−3) = 12 ✓ — and lies in Quadrant IV ✓.)',
        expWrong:{
          A:'−24 is the boundary, not a value inside it. There x = 0 and y = −12, so the solution lands ON the y-axis, and a point on an axis is in no quadrant at all. "Positive" is strict: x = 0 does not qualify.',
          C:'4 is the boundary at the other end. There y = 0 and x = 4, so the point (4, 0) sits on the x-axis — again on the border rather than inside Quadrant IV.',
          D:'6 pushes past that boundary: x = 30/7 and y = 6/7 are both positive, so the solution is in Quadrant I. Checking only x &gt; 0 and forgetting to check y &lt; 0 is what makes this one look right.'
        },
        tip:'When a system carries a parameter and the question asks about the LOCATION of the solution, solve for x and y in terms of the parameter first and turn the location into two inequalities. Quadrant conditions are strict on both coordinates, so the endpoints that make x or y exactly zero are always wrong answers — and they will always be on the list.',
        desmos:'Graph x + 2y = k and 3x − y = 12 with a slider for k, then watch the intersection point slide along the fixed second line as you drag: it crosses the y-axis when k = −24, travels through Quadrant IV, and crosses the x-axis when k = 4. Anywhere strictly between those two moments the point is in Quadrant IV, and at k = −3 it sits exactly on (3, −3).',
        desmosLatex:['x+2y=k','3x-y=12','k=-3','(3,-3)']
      },
      {
        id:'BL3-05', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Sum of two absolute values (three regions, one of which is empty)',
        stem:'What is the sum of all values of x that satisfy the equation |x + 2| + |x − 4| = 10 ?',
        answer:'2',
        expCorrect:'Two absolute values means two places where something changes sign — at x = −2 and at x = 4 — so the number line splits into three regions and each one gets its own equation. Region x ≥ 4 (both insides are positive or zero): (x + 2) + (x − 4) = 10 → 2x − 2 = 10 → x = 6, and 6 ≥ 4 ✓ keep it. Region −2 ≤ x &lt; 4 (the first inside is positive, the second negative): (x + 2) + (4 − x) = 10 → 6 = 10, which is false for every x, so this region contributes NOTHING. Region x &lt; −2 (both insides negative): −(x + 2) + (4 − x) = 10 → 2 − 2x = 10 → x = −4, and −4 &lt; −2 ✓ keep it. The solutions are 6 and −4, so the sum is 6 + (−4) = 2. (Check: |6 + 2| + |6 − 4| = 8 + 2 = 10 ✓ and |−4 + 2| + |−4 − 4| = 2 + 8 = 10 ✓.) Answer: 2.',
        tip:'Read |x + 2| + |x − 4| as the total distance from x to −2 and from x to 4. Between those two points that total is always exactly 6 — the distance between them — which is why the middle region can never reach 10 and why an equation like this has either two solutions or none, never one. Outside, each step away adds 2 to the total, so you need (10 − 6)/2 = 2 units past each end: x = −2 − 2 = −4 and x = 4 + 2 = 6. Finding only x = 6 means you solved the first region and never set up the other two.',
        desmos:'Graph y = |x+2| + |x−4| and y = 10. The graph is not a V but a bathtub: a flat bottom at height 6 for every x from −2 to 4 — the visual proof that the middle case has no solution — and then straight sides of slope 2 that meet y = 10 at exactly x = −4 and x = 6.',
        desmosLatex:['y=\\left|x+2\\right|+\\left|x-4\\right|','y=10','(-4,10)','(6,10)']
      },
      {
        id:'BL3-06', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Absolute value on both sides with a constant added (testing every branch)',
        stem:'What is the sum of all real values of x that satisfy the equation |x − 5| + 2 = |2x + 1| ?',
        choices:{A:'−10', B:'−6', C:'−4', D:'2'},
        correct:'B',
        expCorrect:'The sign changes happen at x = 5 and at x = −1/2, so there are three regions and every candidate has to be checked against the region it came from. Region x ≥ 5: (x − 5) + 2 = 2x + 1 → x − 3 = 2x + 1 → x = −4, which is NOT ≥ 5, so it is discarded. Region −1/2 ≤ x &lt; 5: (5 − x) + 2 = 2x + 1 → 7 − x = 2x + 1 → 3x = 6 → x = 2 ✓ in range. Region x &lt; −1/2: (5 − x) + 2 = −(2x + 1) → 7 − x = −2x − 1 → x = −8 ✓ in range. The solution set is {−8, 2}, so the sum is −8 + 2 = −6. (Check: |−8 − 5| + 2 = 13 + 2 = 15 and |2(−8) + 1| = |−15| = 15 ✓; and |2 − 5| + 2 = 3 + 2 = 5 with |2(2) + 1| = 5 ✓.)',
        expWrong:{
          A:'−10 keeps all three candidates: −8 + 2 + (−4) = −10. The −4 came out of the region x ≥ 5 and does not live there, and substituting proves it fails: |−4 − 5| + 2 = 11 while |2(−4) + 1| = 7. A branch produces a CANDIDATE, never a solution, so the check against its own region is mandatory.',
          C:'−4 is that discarded candidate on its own. It is the most tempting number on the page because it is the first one the algebra hands you — the case where both expressions are assumed positive is the one everybody writes first.',
          D:'2 is a genuine solution, the one from the middle region, but it is only half of the sum. Stopping there means the third region, everything to the left of x = −1/2, was never set up.'
        },
        tip:'With an absolute value on each side, mark both sign-change points on a number line, solve one equation per region, and then throw out every candidate that does not live in the region that produced it. Never move a constant that sits outside the bars inside them. And once the solution set is complete, reread the last line: "least", "greatest" and "sum" are three different answers from the same set.',
        desmos:'Graph y = |x−5| + 2 and y = |2x+1| and count crossings: exactly two, at x = −8 and x = 2. Then look at x = −4, the rejected candidate: the first graph is at 11 there and the second at 7, so the graphs are nowhere near each other — a two-second way to confirm that a branch answer really is extraneous.',
        desmosLatex:['y=\\left|x-5\\right|+2','y=\\left|2x+1\\right|','(-8,15)','(2,5)']
      },
      {
        id:'BL3-07', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Model whose rate changes partway (crossover point after the change)',
        stem:'A tank holding 900 gallons of water begins to drain at a constant rate of 25 gallons per minute. Exactly 12 minutes later a second valve is opened, and from that moment on the water leaves that tank at a constant rate of 40 gallons per minute. At the same moment the first tank begins to drain, a second tank, which starts empty, begins to fill at a constant rate of 20 gallons per minute. How many minutes after the draining begins do the two tanks hold the same amount of water?',
        choices:{A:'12', B:'15', C:'18', D:'20'},
        correct:'C',
        expCorrect:'Handle the two stages separately. Stage 1 (0 to 12 minutes): the draining tank holds 900 − 25t, and at t = 12 that is 900 − 300 = 600 gallons, while the filling tank holds 20(12) = 240. The draining tank is still far ahead, so the amounts have not met yet and the answer lies in stage 2. Stage 2 (after minute 12): the draining tank holds 600 − 40(t − 12) and the filling tank still holds 20t. Set them equal: 600 − 40(t − 12) = 20t → 600 − 40t + 480 = 20t → 1,080 = 60t → t = 18. (Check: at t = 18 the draining tank holds 600 − 40(6) = 360 gallons and the filling tank holds 20(18) = 360 ✓, and 18 is indeed past the valve change at minute 12 ✓.)',
        expWrong:{
          A:'12 is when the RATE changes, not when the amounts match. At that instant the tanks hold 600 and 240 gallons — the moment the problem pivots on, and the one it wants you to mistake for the answer.',
          B:'15 applies the faster rate 40 from the very beginning: 900 − 40t = 20t → 60t = 900 → t = 15. But the tank spends its first 12 minutes at 25 gallons per minute, so it still has 600 gallons when the new rate starts, not 900.',
          D:'20 applies the original rate 25 for the whole time: 900 − 25t = 20t → 45t = 900 → t = 20. That is the answer to the problem WITHOUT the valve, and it is wrong in the right direction: by minute 20 the draining tank is already down to 600 − 40(8) = 280 gallons while the other holds 400, so they crossed earlier.'
        },
        tip:'When a rate changes partway, never write one equation for the whole story. Compute the value at the moment of the change first — that tells you which stage the crossover lives in — and then rebuild the model from that moment, using the NEW starting amount, not the original one. The form is always "value at the change ± new rate × (t − change time)", and the two wrong rates, applied to the whole timeline, are always sitting among the options.',
        desmos:'Graph y = 20x for the filling tank and the piecewise \\{x&lt;12: 900−25x, 1080−40x\\} for the draining one: the graphs meet at x = 18, where both read 360 gallons. Then graph y = 900 − 25x on its own and notice it meets y = 20x at x = 20 — the wrong answer you get by ignoring the bend in the piecewise graph.',
        desmosLatex:['y=20x','y=\\left\\{x<12:900-25x,1080-40x\\right\\}','y=900-25x','(18,360)']
      },
      {
        id:'BL3-08', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Rate change partway (catching up, and which clock the question uses)',
        stem:'Two drones leave the same point at the same time and travel in the same direction along a straight course. Drone A travels at a constant speed of 12 meters per second for its whole flight. Drone B travels at 21 meters per second for the first 8 seconds and then at 6 meters per second for the rest of its flight. How many seconds after the start does drone A first pull even with drone B?',
        answer:'20',
        expCorrect:'First find the gap at the moment B slows down. After 8 seconds, B has flown 21(8) = 168 meters and A has flown 12(8) = 96 meters, so B leads by 72 meters. From that moment on, A gains 12 − 6 = 6 meters every second, so closing a 72-meter gap takes 72 ÷ 6 = 12 more seconds. That is 12 seconds after the change, and the question counts from the START: 8 + 12 = 20 seconds. (Same thing with one equation: A is at 12t and, for t &gt; 8, B is at 168 + 6(t − 8) = 120 + 6t; setting 12t = 120 + 6t gives 6t = 120 → t = 20. Check: A is at 12(20) = 240 meters and B is at 168 + 6(12) = 240 meters ✓.) Answer: 20.',
        tip:'A catch-up question is always distance gap ÷ difference of the speeds — but only over the stretch where those speeds actually apply, so freeze the picture at the moment the rate changes and compute the gap there first. Then check which clock the last line uses: the 12 you solve for is measured from the CHANGE, and the question asks from the START, so the 8 seconds before the change still have to be added back.',
        desmos:'Graph y = 12x for drone A and the piecewise \\{x&lt;8: 21x, 120+6x\\} for drone B. B shoots ahead, bends at x = 8, and A catches it where the graphs meet, at x = 20 with both at 240 meters. The horizontal distance from the bend to the meeting point is 12 — the number you solve for, and the number the question does not want.',
        desmosLatex:['y=12x','y=\\left\\{x<8:21x,120+6x\\right\\}','(20,240)','(8,168)']
      },
      {
        id:'BL3-09', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Inequality with a variable coefficient (the sign of the coefficient decides the direction)',
        stem:'In the inequality (k − 3)x ≤ 5(k − 3), k is a constant and k ≠ 3. Which of the following describes the solution set of this inequality?',
        choices:{
          A:'x ≤ 5 for every value of k',
          B:'x ≥ 5 for every value of k',
          C:'x ≤ 5 when k &lt; 3, and x ≥ 5 when k &gt; 3',
          D:'x ≤ 5 when k &gt; 3, and x ≥ 5 when k &lt; 3'
        },
        correct:'D',
        expCorrect:'It is tempting to cancel (k − 3) from both sides and declare x ≤ 5, but canceling is dividing, and dividing an inequality by a negative number REVERSES it. The sign of k − 3 is unknown, so the problem splits into two cases. Case k &gt; 3: k − 3 is positive, the direction survives, and x ≤ 5. Case k &lt; 3: k − 3 is negative, the direction flips, and x ≥ 5. (Check one of each: k = 5 gives 2x ≤ 10 → x ≤ 5 ✓; k = 1 gives −2x ≤ −10, and dividing by −2 gives x ≥ 5 ✓ — test x = 6 in the original with k = 1: −2(6) = −12 ≤ −10 ✓, while x = 4 gives −8 ≤ −10 ✗.) The case k = 3 is excluded because it would turn the inequality into 0 ≤ 0, true for every x.',
        expWrong:{
          A:'x ≤ 5 for every k treats k − 3 as if it were always positive. It is negative for every k below 3, and there the inequality turns around — which is exactly the half of the problem the "just cancel it" move hides.',
          B:'x ≥ 5 for every k makes the mirror assumption, that k − 3 is always negative. Both directions really do occur; neither one covers every value of k.',
          C:'This has the two cases backwards. Dividing by a POSITIVE number keeps the direction, and dividing by a NEGATIVE one flips it, so k &gt; 3 (positive factor) must be the case that keeps ≤.'
        },
        tip:'Never cancel a factor whose sign you do not know. When the coefficient of x contains a parameter, split into cases — coefficient positive, coefficient negative — and remember that the BOUNDARY does not move: dividing 5(k − 3) by (k − 3) gives 5 either way. Only the direction of the inequality depends on the sign.',
        desmos:'Graph y = (k−3)x and y = 5(k−3) with a slider for k, and read the solution as "where the slanted line is at or below the horizontal one". Push k above 3 and that region is to the LEFT of x = 5; pull k below 3 and the slant reverses so the region jumps to the RIGHT of x = 5. The crossing itself never leaves x = 5.',
        desmosLatex:['y=(k-3)x','y=5(k-3)','k=5','x=5']
      },
      {
        id:'BL3-10', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Inequality with a negative parameter (dividing by it flips the sign, the bound does not)',
        stem:'The constant a is negative. Which of the following inequalities has the same solution set as  (ax − 4a)/2 ≥ 3a ?',
        choices:{A:'x ≤ 10', B:'x ≥ 10', C:'x ≤ −2', D:'x ≥ −2'},
        correct:'A',
        expCorrect:'Clear the fraction first: multiply both sides by 2 (positive, so nothing flips) to get ax − 4a ≥ 6a. Factor the left side: a(x − 4) ≥ 6a. Now divide both sides by a, which the stem guarantees is NEGATIVE, so the inequality reverses: x − 4 ≤ 6, and therefore x ≤ 10. Note that 6a ÷ a = 6, positive, no matter how negative a is — the sign of a controls the DIRECTION of the inequality, not the value of the bound. (Check with a = −1: the original reads (−x + 4)/2 ≥ −3 → −x + 4 ≥ −6 → −x ≥ −10 → x ≤ 10 ✓. Check again with a = −4: (−4x + 16)/2 ≥ −12 → −2x + 8 ≥ −12 → −2x ≥ −20 → x ≤ 10 ✓, the same bound.)',
        expWrong:{
          B:'x ≥ 10 does everything right except the one step the question is about: dividing by the negative a reverses the inequality. Keeping ≥ is what you would do if a were positive.',
          C:'x ≤ −2 flips correctly but then computes 6a ÷ a as −6, as if dividing two negatives left a negative. It does not: 6a/a = 6 for every nonzero a, so the bound is x − 4 ≤ 6, not x − 4 ≤ −6.',
          D:'x ≥ −2 makes both mistakes at once — no flip AND 6a ÷ a read as −6. Two errors in opposite directions do not cancel here; they land on an option that is wrong in both the direction and the endpoint.'
        },
        tip:'Factor the parameter out before you divide by it, so you divide exactly once and know precisely which step flips the sign. Then separate the two things the sign affects: multiplying or dividing an inequality by a negative reverses the DIRECTION, while a quotient like 6a/a is still 6. If you are unsure, substitute a concrete negative value for the parameter and redo the three lines — the bound has to come out the same.',
        desmos:'Pick a concrete negative a — say a = −1 — and graph y = (−x + 4)/2 together with y = −3: the first graph is at or above the second exactly for x ≤ 10. Now try a = −4, graphing y = (−4x + 16)/2 and y = −12: the crossing is STILL at x = 10. Seeing the boundary refuse to move while the picture changes is the whole idea of the question.',
        desmosLatex:['y=\\frac{-x+4}{2}','y=-3','y=\\frac{-4x+16}{2}','y=-12','x=10']
      },
      {
        id:'BL3-11', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Must be true: what a system with no solution forces on its constants',
        stem:'In the system of equations below, a and b are constants.<br><br>ax + by = 12<br>2x + 3y = 5<br><br>If the system has no solution, which of the following must be true?',
        choices:{A:'a = 4 and b = 6', B:'a + b = 5', C:'ab = 24', D:'3a = 2b'},
        correct:'D',
        expCorrect:'No solution means the two lines are parallel and distinct, so the coefficients are proportional while the constants are not: a/2 = b/3, with the common ratio different from 12/5. Cross-multiplying a/2 = b/3 gives 3a = 2b, and that is forced in every case. The other three statements are only true for particular pairs, and one counterexample each is enough: (a, b) = (4, 6) gives 4x + 6y = 12, which reduces to 2x + 3y = 6 — parallel to 2x + 3y = 5 ✓ no solution; and (a, b) = (2, 3) gives 2x + 3y = 12, also parallel to 2x + 3y = 5 ✓ no solution. Both are legal, and 3a = 2b holds in both (12 = 12 and 6 = 6 ✓), while every other statement holds in at most one of them.',
        expWrong:{
          A:'a = 4 and b = 6 is ONE pair that produces no solution, not the only one — (2, 3) works just as well, and so does (−4, −6). A "must be true" question is not asking which case is possible; a single working example is exactly what it is testing you against.',
          B:'a + b = 5 is true for the pair (2, 3) and false for (4, 6), which also gives no solution. Parallelism does not control the SUM of the two coefficients — it controls their ratio, and a ratio survives scaling while a sum does not.',
          C:'ab = 24 is true for (4, 6) and false for (2, 3). Same trap as B with a product instead of a sum: doubling a valid pair keeps the lines parallel but multiplies the product by 4.'
        },
        tip:'On a "must be true" item, stop hunting for a case that makes an option true and hunt for one that makes it FALSE — a single counterexample kills it. Build two legal cases early (here, scale one valid pair by 2) and run every option past both. For parallel lines the invariant is always the RATIO of the coefficients, so write a/2 = b/3 and cross-multiply: sums and products of the coefficients change when you scale the pair, and therefore can never be forced.',
        desmos:'Graph 2x + 3y = 5 together with 4x + 6y = 12 and 2x + 3y = 12. Both of the others are parallel to the first, so BOTH (a, b) = (4, 6) and (a, b) = (2, 3) give a system with no solution — which is the visual proof that no option naming specific values, or a specific sum or product, can be the one that must be true.',
        desmosLatex:['2x+3y=5','4x+6y=12','2x+3y=12']
      },
      {
        id:'BL3-12', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Must be true: bounding a difference from two intervals',
        stem:'The numbers x and y satisfy −2 &lt; x &lt; 5 and 1 &lt; y &lt; 4. Which of the following must be true?',
        choices:{A:'x − y &lt; 4', B:'y − x &lt; 4', C:'x + y &gt; 0', D:'x &gt; y'},
        correct:'A',
        expCorrect:'To bound a difference, pair the extremes that push it as far as it can go. The largest x − y can get uses the largest x and the smallest y: x is under 5 and y is over 1, so x − y stays under 5 − 1 = 4, and that holds for every legal pair — x − y &lt; 4 must be true. (At the other end, x − y stays above −2 − 4 = −6, so the full range is −6 &lt; x − y &lt; 4.) Each of the other three statements breaks on a legal pair: y − x reaches nearly 4 − (−2) = 6, for instance x = −1 and y = 3.5 give y − x = 4.5; x + y can be negative, as with x = −1.5 and y = 1.2 giving −0.3; and x &gt; y fails whenever x = 0 and y = 2.',
        expWrong:{
          B:'y − x &lt; 4 looks like the mirror image of the correct option, but the two variables do not have mirror ranges. Subtraction is not symmetric: x − y is capped by (largest x) − (smallest y) = 5 − 1 = 4, while y − x is capped by (largest y) − (smallest x) = 4 − (−2) = 6. One bound is 4 and the other is 6, so only one of the two statements is forced.',
          C:'x + y &gt; 0 holds whenever x is positive, and x usually is — but it is allowed to be negative. The smallest the sum can get is just above −2 + 1 = −1, so a pair like x = −1.5 with y = 1.2 gives x + y = −0.3 and kills the statement.',
          D:'x &gt; y is true for plenty of pairs, such as x = 4 with y = 2, and that is exactly why it is tempting. But the two intervals OVERLAP between 1 and 4, so x = 0 with y = 2 is equally legal and makes it false. An option that is often true is still not one that must be true.'
        },
        tip:'Combine intervals by pairing endpoints, not by eyeballing: for a sum, add the two lows and the two highs; for a difference, subtract the other variable’s low from this variable’s high to get the top and its high from this one’s low to get the bottom. And a difference taken in the other order does NOT have the mirror bound unless the intervals are mirror images. To kill a "must be true" option you need one legal counterexample — look for it at the ends of the intervals, and check whether a negative value is allowed.',
        desmos:'Graph the two constraints as inequalities, −2 &lt; x &lt; 5 and 1 &lt; y &lt; 4: Desmos shades the rectangle of legal points. Now add y = x − 4 (that is the line x − y = 4) and y = x + 4 (the line y − x = 4). The first line misses the rectangle entirely, so x − y never reaches 4; the second slices off its top-left corner, and every point in that corner is a counterexample to the mirror statement.',
        desmosLatex:['-2<x<5','1<y<4','y=x-4','y=x+4']
      }
    ]
  });
})();
