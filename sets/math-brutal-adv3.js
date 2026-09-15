/* SAT Studio question set — Math: Advanced Math — Brutal III (BV3-01 to BV3-12) */
(function(){
  var TBL_F =
    '<table border="1" cellpadding="6" style="border-collapse:collapse">' +
    '<tr><th>x</th><td>−1</td><td>1</td><td>2</td><td>3</td><td>5</td></tr>' +
    '<tr><th>f(x)</th><td>7</td><td>4</td><td>−3</td><td>2</td><td>0</td></tr></table>';

  var TBL_G =
    '<table border="1" cellpadding="6" style="border-collapse:collapse">' +
    '<tr><th>x</th><td>−4</td><td>−1</td><td>2</td><td>3</td><td>6</td></tr>' +
    '<tr><th>g(x)</th><td>6</td><td>−2</td><td>6</td><td>1</td><td>−5</td></tr></table>';

  window.SAT_SETS.push({
    id: 'math-brutal-adv3',
    title: 'Functions — Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Twelve Extreme items on functions themselves: a table composed with a formula in both orders, stacked transformations where the stretch happens before the shift, two curves meeting at once, models whose constants come from two data points, domains and ranges buried under a radical, and parameters recovered from a graph described in words.',
    minutes: 20,
    questions: [
      {
        id:'BV3-01', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Composition of a table function with an algebraic one (both orders)',
        stem:'The function f is defined only for the five values of x in the table shown, and the function g is defined by g(x) = x² − 4x + 2. What is the value of f(g(3)) − g(f(3))?',
        figure: TBL_F,
        choices:{A:'5', B:'9', C:'−9', D:'0'},
        correct:'B',
        expCorrect:'Build the two compositions separately, each one from the inside out. First term: g(3) = 3² − 4(3) + 2 = 9 − 12 + 2 = −1, and the table gives f(−1) = 7, so f(g(3)) = 7. Second term: the table gives f(3) = 2, and g(2) = 2² − 4(2) + 2 = 4 − 8 + 2 = −2, so g(f(3)) = −2. Now subtract, and mind the double negative: 7 − (−2) = 7 + 2 = 9.',
        expWrong:{
          A:'5 is 7 + (−2): the two values were added instead of subtracted. Subtracting a negative ADDS, so the last step is 7 + 2, not 7 − 2.',
          C:'−9 is the same two values in the opposite order, g(f(3)) − f(g(3)) = −2 − 7. The expression asks for f(g(3)) first, and switching the order of a subtraction flips its sign.',
          D:'0 assumes f(g(3)) and g(f(3)) are the same number, so that the difference vanishes. Composition is not commutative: here one order gives 7 and the other gives −2.'
        },
        tip:'When a table and a formula are composed, the table is a lookup for the values it actually lists and nothing more — every other evaluation goes through the algebraic rule, which is defined everywhere. Work inside out, write each composition on its own line, and expect the two orders to disagree.',
        desmos:'Type g(x) = x^2 - 4x + 2 in Desmos, then g(3) and g(2) on their own lines: they read -1 and -2. The table supplies f(-1) = 7 and f(3) = 2, so the expression is 7 - (-2) = 9.',
        desmosLatex:['g(x)=x^2-4x+2','g(3)','g(2)']
      },
      {
        id:'BV3-02', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Composition solved backwards through a table (two candidates, one condition)',
        stem:'The function g is defined only for the five values of x in the table shown, and the function f is defined by f(x) = x² − 3x. If f(g(a)) = 18 and a &gt; 0, what is the value of f(a)?',
        figure: TBL_G,
        choices:{A:'2', B:'6', C:'28', D:'−2'},
        correct:'D',
        expCorrect:'Treat g(a) as a single unknown. f(g(a)) = 18 means (g(a))² − 3g(a) = 18 → (g(a))² − 3g(a) − 18 = 0 → (g(a) − 6)(g(a) + 3) = 0, so g(a) = 6 or g(a) = −3. Now look for those outputs in the table: −3 never appears, so that branch dies; 6 appears twice, at x = −4 and at x = 2. The condition a &gt; 0 keeps only a = 2. Finally answer what was asked: f(a) = f(2) = 2² − 3(2) = 4 − 6 = −2. Check the whole chain: g(2) = 6 and f(6) = 36 − 18 = 18 ✓.',
        expWrong:{
          A:'2 is a itself, the value pinned down in the middle of the problem. The question asks for f(a), so that 2 still has to go through the rule for f.',
          B:'6 is g(a), the output of the inner function. It is the number you look up in the table, not the answer.',
          C:'28 is f(−4), built from the other input that also gives g(a) = 6. The stem says a &gt; 0, and −4 fails that condition.'
        },
        tip:'To undo a composition, solve for the INNER output first, as if it were one variable. Then check each candidate against what the table can actually produce — an output the table never shows is not a solution — and only then apply the condition in the stem. Two survivors plus a one-line condition is the standard shape of this trap.',
        desmos:'Graph y = x^2 - 3x and y = 18 and click both crossings: x = -3 and x = 6. Those are the only inputs that make f equal 18, and the table shows that g reaches 6 but never -3.',
        desmosLatex:['y=x^2-3x','y=18']
      },
      {
        id:'BV3-03', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Combined transformations (vertical stretch applied before the vertical shift)',
        stem:'The function f is defined by f(x) = (x + 1)² − 7, and the function g is defined by g(x) = 2f(x − 3) + 5. What is the minimum value of g?',
        choices:{A:'−9', B:'−4', C:'2', D:'−2'},
        correct:'A',
        expCorrect:'Substitute and simplify: g(x) = 2[(x − 3 + 1)² − 7] + 5 = 2[(x − 2)² − 7] + 5 = 2(x − 2)² − 14 + 5 = 2(x − 2)² − 9. In vertex form the minimum value is the constant, −9, reached at x = 2. Shortcut with the same result: the minimum of f is −7; the horizontal shift x − 3 moves WHERE the minimum happens but not how much it is; the factor 2 then multiplies that output, 2(−7) = −14; and the +5 lifts it last, −14 + 5 = −9. Check: g(2) = 2f(−1) + 5 = 2(−7) + 5 = −9 ✓.',
        expWrong:{
          B:'−4 adds the 5 before doubling: 2(−7 + 5) = −4. In g(x) = 2f(x − 3) + 5 the output of f is stretched FIRST and the 5 is added to the stretched value, so it is 2(−7) + 5, not 2(−7 + 5).',
          C:'2 is the x-coordinate where the minimum happens, not the minimum value. The minimum VALUE is the output there.',
          D:'−2 is −7 + 5, which forgets the vertical stretch entirely. The 2 in front of f doubles every output, including the lowest one.'
        },
        tip:'Read g(x) = a·f(x − h) + k as a pipeline with a fixed order: the input is shifted, the output is multiplied by a, and k is added last. That order is why a(f + k) and a·f + k are different numbers. A horizontal shift never changes a maximum or minimum VALUE; only the outside operations do.',
        desmos:'Define f(x) = (x+1)^2 - 7 and g(x) = 2f(x-3) + 5 in Desmos and click the lowest point of each: f bottoms out at (-1, -7) and g at (2, -9). Graph y = 2(f(x-3) + 5) too and watch its vertex sit at -4 instead.',
        desmosLatex:['f(x)=(x+1)^2-7','g(x)=2f(x-3)+5']
      },
      {
        id:'BV3-04', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Mapping a point through a combined transformation (shift inside, stretch and shift outside)',
        stem:'The point (4, −5) lies on the graph of y = f(x) in the xy-plane. The function g is defined by g(x) = −3f(x + 2) + 1. Which of the following points must lie on the graph of y = g(x)?',
        choices:{A:'(6, 16)', B:'(2, 12)', C:'(2, 16)', D:'(2, −14)'},
        correct:'C',
        expCorrect:'Find the input that makes g reach the one value of f you know. The rule reaches into f at x + 2, so set x + 2 = 4 → x = 2. Then run the known output through the outside operations, in order: g(2) = −3·f(4) + 1 = −3(−5) + 1 = 15 + 1 = 16. The point is (2, 16). Same answer read as a sequence of moves: f(x + 2) slides the graph 2 units LEFT, so x = 4 becomes x = 2; the −3 reflects and stretches, so −5 becomes +15; the +1 lifts it to 16 ✓.',
        expWrong:{
          A:'(6, 16) shifts the graph the wrong way. Inside the function everything moves opposite to the sign you see: f(x + 2) goes LEFT, so the new x solves x + 2 = 4, giving 2, not 4 + 2 = 6.',
          B:'(2, 12) adds the 1 before multiplying: −3(−5 + 1) = 12. Outside the function the multiplication comes first and the +1 is applied to the result.',
          D:'(2, −14) keeps a minus sign that should have cancelled: (−3)(−5) = +15, not −15. Two negatives multiplied give a positive, so the height is 15 + 1 = 16.'
        },
        tip:'To move a point through y = a·f(x − h) + k, solve for the new x by setting the inside expression equal to the OLD x, then push the old y through the outside operations in order (multiply by a, then add k). Inside moves are backwards; outside moves are exactly what they look like.',
        desmos:'Pick any curve through (4, -5), for instance f(x) = (x-4)^2 - 5, then graph y = -3f(x+2) + 1 and add the point (2, 16): it lands on the curve. Graph y = -3(f(x+2) + 1) as well and see it pass through (2, 12) instead.',
        desmosLatex:['f(x)=(x-4)^2-5','y=-3f(x+2)+1','(2,16)']
      },
      {
        id:'BV3-05', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'System of two parabolas (sum of the x-coordinates without finding them)',
        stem:'In the xy-plane, the graph of y = x² − 4x + 7 and the graph of y = −x² + 6x − 3 intersect at two points. What is the sum of the x-coordinates of those two points?',
        choices:{A:'5', B:'10', C:'−5', D:'5/2'},
        correct:'A',
        expCorrect:'Set the two right sides equal and collect everything on one side: x² − 4x + 7 = −x² + 6x − 3 → 2x² − 10x + 10 = 0. Divide by 2 before using Vieta: x² − 5x + 5 = 0. The two x-coordinates are the roots of that quadratic, so their sum is −b/a = −(−5)/1 = 5. The discriminant 25 − 20 = 5 is positive, which confirms the two points exist. Check numerically: the roots are (5 ± √5)/2 ≈ 3.618 and ≈ 1.382, irrational numbers you never want to handle, and they add to 5 ✓.',
        expWrong:{
          B:'10 reads the sum off 2x² − 10x + 10 = 0 as −b alone. The sum of the roots is −b/a, so the leading coefficient 2 still has to be divided out: 10/2 = 5.',
          C:'−5 copies the sign of b instead of flipping it. With x² − 5x + 5 = 0 the sum is −(−5) = +5, and both roots are positive anyway.',
          D:'5/2 is −b/(2a), the axis of symmetry. That is the AVERAGE of the two roots; their sum is twice it.'
        },
        tip:'Two curves meet where their outputs agree, so subtract one equation from the other. With two parabolas the x² terms do not cancel — they combine — and you are left with one quadratic whose roots are the x-coordinates of every intersection. Divide by the leading coefficient before applying sum = −b/a.',
        desmos:'Graph y = x^2 - 4x + 7 and y = -x^2 + 6x - 3 and click both crossings: x ≈ 1.382 and x ≈ 3.618, which add to 5. Graph y = 2x^2 - 10x + 10 as well and see its x-intercepts land on the same two numbers.',
        desmosLatex:['y=x^2-4x+7','y=-x^2+6x-3','y=2x^2-10x+10']
      },
      {
        id:'BV3-06', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'System of a circle and a parabola (counting the real solutions)',
        stem:'How many distinct ordered pairs (x, y) satisfy both x² + y² = 25 and y = x² − 5 ?',
        choices:{A:'2', B:'3', C:'4', D:'1'},
        correct:'B',
        expCorrect:'Substitute the piece that appears in BOTH equations. The second equation says x² = y + 5, and putting that into the first gives (y + 5) + y² = 25 → y² + y − 20 = 0 → (y + 5)(y − 4) = 0, so y = −5 or y = 4. Now convert each y back into x-values. For y = −5: x² = −5 + 5 = 0 → x = 0, a single point, (0, −5). For y = 4: x² = 4 + 5 = 9 → x = ±3, two points, (−3, 4) and (3, 4). That is 3 distinct ordered pairs. Check all three on the circle: 0² + (−5)² = 25 ✓, (±3)² + 4² = 9 + 16 = 25 ✓.',
        expWrong:{
          A:'2 counts the two y-values as if each were a solution. A solution is an ordered pair, so every y still has to be turned back into its x-values — and one of these y-values produces two of them.',
          C:'4 assumes each y gives two x-values. That is true for y = 4, where x² = 9, but y = −5 gives x² = 0, whose only solution is x = 0. The parabola touches the bottom of the circle there instead of cutting through it.',
          D:'1 keeps only the touching point (0, −5), the one that is easy to see. The parabola also rises and crosses the circle at height y = 4, on both sides of the y-axis.'
        },
        tip:'In a circle-and-parabola system, substitute the expression the two equations share — here x², not y — so that nothing gets raised to a higher power and the result stays quadratic. Then count at the very end: x² = 0 gives ONE x, x² = positive gives two, x² = negative gives none. The number of solutions is almost never the number of values you solved for first.',
        desmos:'Graph x^2 + y^2 = 25 and y = x^2 - 5 on the same screen: the parabola grazes the bottom of the circle at (0, -5) and cuts it at (-3, 4) and (3, 4) — three points in all.',
        desmosLatex:['x^2+y^2=25','y=x^2-5']
      },
      {
        id:'BV3-07', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Exponential model whose constants come from two data points',
        stem:'The number of subscribers of a streaming service is modeled by S(x) = a·b^x, where a and b are positive constants and x is the number of years after 2020. The model gives 12 thousand subscribers in 2022 and 96 thousand subscribers in 2025. According to this model, how many thousand subscribers will there be in 2027?',
        choices:{A:'152', B:'6,144', C:'192', D:'384'},
        correct:'D',
        expCorrect:'Turn the years into values of x first: 2022 is x = 2 and 2025 is x = 5, so ab² = 12 and ab⁵ = 96. Divide the second equation by the first and a disappears: b³ = 96/12 = 8 → b = 2. Back-substitute: a(2²) = 12 → 4a = 12 → a = 3, so S(x) = 3(2)^x. The year 2027 is 2027 − 2020 = 7 years after 2020, so S(7) = 3(2⁷) = 3(128) = 384 thousand. Check both data points: S(2) = 3(4) = 12 ✓ and S(5) = 3(32) = 96 ✓.',
        expWrong:{
          A:'152 treats the growth as linear: (96 − 12)/3 = 28 per year, then 96 + 2(28) = 152. An exponential model multiplies by a constant factor each year instead of adding a constant amount.',
          B:'6,144 uses 8 as the YEARLY factor: 96 × 8² = 6,144. The 8 is the factor over three years, so the yearly factor is its cube root, 2.',
          C:'192 is S(6). The year 2027 is seven years after 2020, not six — counting the gap between 2020 and 2027 is the last place to lose a doubling.'
        },
        tip:'Two points on an exponential model are solved by DIVIDING the two equations, not by substituting: the starting value cancels and you are left with b raised to the difference of the exponents. Take the right root of that ratio, then find a, and convert the year in the question into the model’s x before you evaluate.',
        desmos:'Graph y = 3*2^x and check that it passes through (2, 12) and (5, 96), then read the height at x = 7: 384.',
        desmosLatex:['y=3\\cdot2^{x}','(2,12)','(5,96)','(7,384)']
      },
      {
        id:'BV3-08', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Quadratic model with two unknown constants recovered from two data points',
        stem:'The height of a ball thrown upward from a platform is modeled by h(t) = −16t² + vt + c, where h(t) is the height in feet t seconds after the ball is thrown and v and c are constants. The ball is 92 feet above the ground 1 second after it is thrown and 140 feet above the ground 4 seconds after it is thrown. What is the maximum height, in feet, that the ball reaches?',
        answer:'156',
        expCorrect:'Substitute each data point to build a system. At t = 1: −16(1) + v + c = 92 → v + c = 108. At t = 4: −16(16) + 4v + c = 140 → −256 + 4v + c = 140 → 4v + c = 396. Subtract the first from the second and c is gone: 3v = 288 → v = 96, and then c = 108 − 96 = 12. The model is h(t) = −16t² + 96t + 12. The maximum is at the vertex, t = −b/(2a) = −96/(2·(−16)) = 3 seconds, and the maximum HEIGHT is the output there: h(3) = −16(9) + 96(3) + 12 = −144 + 288 + 12 = 156 feet. Check both given points: h(1) = −16 + 96 + 12 = 92 ✓ and h(4) = −256 + 384 + 12 = 140 ✓. Answer: 156.',
        expWrong:{},
        tip:'Two data points and two unknown constants always mean a linear system: substitute each point, then subtract the equations to eliminate the constant term. Three traps sit at the end — the answer is the vertex OUTPUT, not the time t = 3; it is not the larger of the two heights you were given; and c = 12 is only the launch height, which on an upward throw is never the maximum.',
        desmos:'Graph y = -16x^2 + 96x + 12 and click the top of the arc: Desmos labels the maximum (3, 156). The curve should also pass through (1, 92) and (4, 140).',
        desmosLatex:['y=-16x^2+96x+12','(1,92)','(4,140)','(3,156)']
      },
      {
        id:'BV3-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Domain of a radical in a denominator (quadratic inequality)',
        stem:'The function h is defined by h(x) = 3/√(x² − 6x + 8). What is the domain of h?',
        choices:{A:'2 &lt; x &lt; 4', B:'x ≥ 4', C:'x &lt; 2 or x &gt; 4', D:'All real numbers except x = 2 and x = 4'},
        correct:'C',
        expCorrect:'Two restrictions live in this expression and the stricter one wins. A square root needs a radicand that is not negative, and a denominator cannot be zero, so the radicand has to be strictly POSITIVE: x² − 6x + 8 &gt; 0. Factor it: (x − 2)(x − 4) &gt; 0. A product of two factors is positive when both are positive (x &gt; 4) or both are negative (x &lt; 2); between 2 and 4 one factor is positive and the other is negative, so the product is negative there. Test one number per region: x = 0 → (−2)(−4) = 8 &gt; 0 ✓; x = 3 → (1)(−1) = −1 &lt; 0 ✗; x = 5 → (3)(1) = 3 &gt; 0 ✓. The domain is x &lt; 2 or x &gt; 4.',
        expWrong:{
          A:'2 &lt; x &lt; 4 is exactly the interval where the quadratic is NEGATIVE, for instance −1 at x = 3. A negative radicand gives no real value at all, so this is the one stretch that has to be thrown out.',
          B:'x ≥ 4 keeps only one of the two good regions and then includes its endpoint. Both factors negative also makes the product positive, so everything below 2 works; and at x = 4 the radicand is 0, which would divide by zero.',
          D:'This treats the expression as an ordinary rational function, excluding only where the bottom is zero. Under a square root the bottom must be positive, not merely nonzero, so the whole interval from 2 to 4 disappears, not just its two endpoints.'
        },
        tip:'A radical in a denominator raises the bar from ≥ 0 to &gt; 0, because 0 under the root would divide by zero. For the quadratic inequality itself, factor, mark the roots on a number line and test one value in each of the three regions: an upward parabola is positive OUTSIDE its roots and negative between them.',
        desmos:'Graph y = 3/sqrt(x^2 - 6x + 8): the curve simply does not exist between x = 2 and x = 4, and it shoots upward as x approaches 2 from the left and 4 from the right. Graph y = x^2 - 6x + 8 underneath to see exactly where it sits above the axis.',
        desmosLatex:['y=3/\\sqrt{x^2-6x+8}','y=x^2-6x+8']
      },
      {
        id:'BV3-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Least value of a radical function (complete the square inside the root)',
        stem:'The function f is defined by f(x) = √(x² − 4x + 13). What is the least possible value of f(x)?',
        choices:{A:'3', B:'9', C:'0', D:'2'},
        correct:'A',
        expCorrect:'A square root grows whenever its radicand grows, so f is smallest exactly where the expression under the root is smallest. Complete the square inside: x² − 4x + 13 = (x² − 4x + 4) + 9 = (x − 2)² + 9. Since (x − 2)² is never negative, the radicand is at least 9, and it equals 9 only at x = 2. Take the root once, at the end: the least value of f is √9 = 3. Check: f(2) = √(4 − 8 + 13) = √9 = 3, and a neighbour such as f(0) = √13 ≈ 3.606 is indeed larger ✓. (Every real x is allowed here, since the radicand never drops below 9.)',
        expWrong:{
          B:'9 is the least value of the RADICAND, the number found on the way. It still has to pass through the square root: √9 = 3.',
          C:'0 assumes a square root always bottoms out at zero. That happens only when the radicand can actually reach 0, and (x − 2)² + 9 never gets below 9.',
          D:'2 is the x-value where the minimum occurs, not the minimum output. It is the h in (x − 2)², the location of the low point.'
        },
        tip:'For √(quadratic), do all the work inside first: complete the square to find the least value of the radicand, then apply the root once at the end. The same move settles the domain for free — if the completed square shows the radicand is always positive, no x is excluded.',
        desmos:'Graph y = sqrt(x^2 - 4x + 13) and click the lowest point: (2, 3). Graph y = x^2 - 4x + 13 on the same screen and its low point reads (2, 9) — the 9 becomes a 3 after the root.',
        desmosLatex:['y=\\sqrt{x^2-4x+13}','y=x^2-4x+13','(2,3)']
      },
      {
        id:'BV3-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Recovering a, h and k from a parabola described in words',
        stem:'In the xy-plane, the graph of y = a(x − h)² + k, where a, h and k are constants, is a parabola that opens downward, has its vertex at (−3, 8) and passes through the point (−1, 0). What is the value of a + h + k?',
        choices:{A:'1', B:'3', C:'7', D:'9'},
        correct:'B',
        expCorrect:'Read the vertex with the signs flipped. In y = a(x − h)² + k the vertex is (h, k), so a vertex at (−3, 8) means h = −3 and k = 8, and the equation reads y = a(x + 3)² + 8. Now use the second point to pin down a: substituting (−1, 0) gives 0 = a(−1 + 3)² + 8 = a(2)² + 8 = 4a + 8 → 4a = −8 → a = −2. The negative a matches “opens downward”, a free check ✓. So a + h + k = −2 + (−3) + 8 = 3. Check the finished equation at the given point: y = −2(−1 + 3)² + 8 = −2(4) + 8 = 0 ✓.',
        expWrong:{
          A:'1 comes from 0 = a(2) + 8 → a = −4, which forgets to square the 2 inside the parentheses. The squaring is what turns the 2 into a 4: 4a + 8 = 0 gives a = −2.',
          C:'7 uses a = +2, dropping the minus sign. A positive a would open the parabola upward, contradicting the description, so the sign is worth one second of checking.',
          D:'9 reads h straight off the vertex as +3. The vertex form subtracts h, so a vertex at x = −3 means h = −3 and the written factor is (x + 3).'
        },
        tip:'From a described graph, collect the parameters in the order the description gives them: the vertex hands you h and k (with h’s sign flipped from what you see in the parentheses), any second point then determines a, and the direction of opening is a check on the sign of a rather than new information. Then re-read what combination is being asked for.',
        desmos:'Graph y = a(x + 3)^2 + 8 with a slider for a and add the point (-1, 0). Drag a until the curve passes through that point: it happens exactly at a = -2, and the parabola is opening downward there.',
        desmosLatex:['y=a(x+3)^2+8','a=-2','(-1,0)']
      },
      {
        id:'BV3-12', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Recovering the parameters of an exponential graph from its asymptote and a point',
        stem:'The function g is defined by g(x) = a(2)^x + k, where a and k are constants. In the xy-plane, the graph of y = g(x) has a horizontal asymptote at the line y = −6 and passes through the point (3, 18). What is the value of g(0)?',
        answer:'-3',
        expCorrect:'Read the asymptote first. As x decreases, the term a(2)^x shrinks toward 0, so the graph flattens out toward y = k; a horizontal asymptote at y = −6 therefore says k = −6, and g(x) = a(2)^x − 6. Only now use the point: g(3) = a(2³) − 6 = 8a − 6, and that equals 18 → 8a = 24 → a = 3. The function is g(x) = 3(2)^x − 6, so g(0) = 3(2⁰) − 6 = 3(1) − 6 = −3. Check the given point: g(3) = 3(8) − 6 = 24 − 6 = 18 ✓. Grid in -3.',
        expWrong:{},
        tip:'For y = a·b^x + k with b > 1, the +k IS the horizontal asymptote — the curve approaches it and never arrives — so the asymptote hands you k before you touch the point. Substitute the point only afterwards, to get a. And remember b⁰ = 1: that makes g(0) = a + k, so the y-intercept of a shifted exponential is not the coefficient a.',
        desmos:'Graph y = a*2^x + k with sliders for a and k. Set k = -6 so the curve levels off at y = -6, then move a until it passes through (3, 18): that happens at a = 3. Read the y-intercept: -3.',
        desmosLatex:['y=a\\cdot2^{x}+k','a=3','k=-6','(3,18)','(0,-3)']
      }
    ]
  });
})();
