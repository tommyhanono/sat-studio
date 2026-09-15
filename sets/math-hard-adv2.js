/* SAT Studio question set — Math: Functions & Graphs — Hard (HV2-01 to HV2-12) */
(function(){
  var TBL_F =
    '<table><thead><tr><th>x</th><th>−4</th><th>−1</th><th>0</th><th>2</th><th>5</th></tr></thead>' +
    '<tbody><tr><th>f(x)</th><td>6</td><td>−3</td><td>1</td><td>8</td><td>−5</td></tr></tbody></table>';

  var TBL_ACCT =
    '<table><thead><tr><th>t (years)</th><th>0</th><th>1</th><th>2</th><th>3</th></tr></thead>' +
    '<tbody><tr><th>V (dollars)</th><td>500</td><td>600</td><td>720</td><td>864</td></tr></tbody></table>';

  var FIG_DOWN =
    '<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parabola opening downward in the xy-plane, crossing the x-axis at (−1, 0) and (5, 0), with its highest point at (2, 9)">' +
    '<line x1="10" y1="145" x2="290" y2="145" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<line x1="94" y1="14" x2="94" y2="250" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<g stroke="#1e1e1e" stroke-width="1">' +
    '<line x1="38" y1="142" x2="38" y2="148"/><line x1="66" y1="142" x2="66" y2="148"/>' +
    '<line x1="122" y1="142" x2="122" y2="148"/><line x1="150" y1="142" x2="150" y2="148"/>' +
    '<line x1="178" y1="142" x2="178" y2="148"/><line x1="206" y1="142" x2="206" y2="148"/>' +
    '<line x1="234" y1="142" x2="234" y2="148"/><line x1="262" y1="142" x2="262" y2="148"/>' +
    '<line x1="91" y1="20" x2="97" y2="20"/><line x1="91" y1="45" x2="97" y2="45"/>' +
    '<line x1="91" y1="70" x2="97" y2="70"/><line x1="91" y1="95" x2="97" y2="95"/>' +
    '<line x1="91" y1="120" x2="97" y2="120"/><line x1="91" y1="170" x2="97" y2="170"/>' +
    '<line x1="91" y1="195" x2="97" y2="195"/><line x1="91" y1="220" x2="97" y2="220"/>' +
    '<line x1="91" y1="245" x2="97" y2="245"/>' +
    '</g>' +
    '<path d="M 38 232.5 Q 150 -167.5 262 232.5" fill="none" stroke="#324DC7" stroke-width="2.5"/>' +
    '<circle cx="66" cy="145" r="4" fill="#1e1e1e"/>' +
    '<circle cx="234" cy="145" r="4" fill="#1e1e1e"/>' +
    '<circle cx="150" cy="32.5" r="4" fill="#1e1e1e"/>' +
    '<text x="50" y="168" font-size="14" font-family="Georgia,serif" text-anchor="end">(−1, 0)</text>' +
    '<text x="250" y="168" font-size="14" font-family="Georgia,serif" text-anchor="start">(5, 0)</text>' +
    '<text x="150" y="26" font-size="14" font-family="Georgia,serif" text-anchor="middle">(2, 9)</text>' +
    '<text x="282" y="138" font-size="14" font-family="Georgia,serif" font-style="italic">x</text>' +
    '<text x="102" y="26" font-size="14" font-family="Georgia,serif" font-style="italic">y</text>' +
    '</svg>';

  var FIG_UP =
    '<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parabola opening upward in the xy-plane, with its lowest point at (2, −3) and crossing the y-axis at (0, 1)">' +
    '<line x1="10" y1="160" x2="290" y2="160" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<line x1="80" y1="16" x2="80" y2="250" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<g stroke="#1e1e1e" stroke-width="1">' +
    '<line x1="10" y1="157" x2="10" y2="163"/><line x1="45" y1="157" x2="45" y2="163"/>' +
    '<line x1="115" y1="157" x2="115" y2="163"/><line x1="150" y1="157" x2="150" y2="163"/>' +
    '<line x1="185" y1="157" x2="185" y2="163"/><line x1="220" y1="157" x2="220" y2="163"/>' +
    '<line x1="255" y1="157" x2="255" y2="163"/><line x1="290" y1="157" x2="290" y2="163"/>' +
    '<line x1="77" y1="20" x2="83" y2="20"/><line x1="77" y1="55" x2="83" y2="55"/>' +
    '<line x1="77" y1="90" x2="83" y2="90"/><line x1="77" y1="125" x2="83" y2="125"/>' +
    '<line x1="77" y1="195" x2="83" y2="195"/><line x1="77" y1="230" x2="83" y2="230"/>' +
    '</g>' +
    '<path d="M 45 55 Q 150 370 255 55" fill="none" stroke="#324DC7" stroke-width="2.5"/>' +
    '<circle cx="80" cy="142.5" r="4" fill="#1e1e1e"/>' +
    '<circle cx="150" cy="212.5" r="4" fill="#1e1e1e"/>' +
    '<text x="94" y="136" font-size="14" font-family="Georgia,serif">(0, 1)</text>' +
    '<text x="150" y="233" font-size="14" font-family="Georgia,serif" text-anchor="middle">(2, −3)</text>' +
    '<text x="282" y="179" font-size="14" font-family="Georgia,serif" font-style="italic">x</text>' +
    '<text x="88" y="28" font-size="14" font-family="Georgia,serif" font-style="italic">y</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-hard-adv2',
    title: 'Functions & Graphs — Hard',
    section: 'math',
    level: 'Difícil',
    description: 'Hard function work: graph transformations, reading a quadratic off its picture, piecewise rules at the boundary, inverses, exponential vs. linear growth, and a parabola meeting a line.',
    minutes: 20,
    questions: [
      {
        id:'HV2-01', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Transformations from a table (inside vs. outside the function)',
        stem:'The table gives five values of x and the corresponding values of f(x) for the function f.' + TBL_F + 'The function g is defined by g(x) = f(x − 3) + 4. What is the value of g(2)?',
        choices:{A:'12', B:'1', C:'−1', D:'−7'},
        correct:'B',
        expCorrect:'g(x) = f(x − 3) + 4 says: take the input, subtract 3, look THAT number up in f, then add 4 to whatever comes out. So g(2) = f(2 − 3) + 4 = f(−1) + 4. The table gives f(−1) = −3, so g(2) = −3 + 4 = 1. (In graph language, g is f moved 3 units right and 4 units up, so the point of f sitting above x = −1 ends up above x = 2 ✓.)',
        expWrong:{
          A:'12 = f(2) + 4 ignores the inner shift completely. The − 3 changes WHICH value of f you read: you look up x = −1, not x = 2.',
          C:'−1 = f(5) + 4 shifts the input the wrong way. f(x − 3) evaluated at x = 2 needs 2 − 3 = −1; adding 3 instead of subtracting is what lands you on 5.',
          D:'−7 = f(−1) − 4 treats the outer constant as a subtraction. The + 4 sits outside f, so it is ADDED to the output.'
        },
        tip:'Inside the parentheses does the opposite of what it looks like: f(x − 3) moves the graph 3 units RIGHT, so to evaluate it you subtract 3 from the input before looking it up. Outside the parentheses behaves normally: + 4 moves the output up 4.',
        desmos:'Plot the five table points, then plot the same points moved 3 right and 4 up. The shifted copy of (−1, −3) is (2, 1), and that is exactly g(2).',
        desmosLatex:['(-4,6)','(-1,-3)','(0,1)','(2,8)','(5,-5)','(2,1)']
      },
      {
        id:'HV2-02', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Transformations: a·f(x) and what it leaves fixed',
        stem:'In the xy-plane, the graph of y = f(x) passes through the point (−3, 4), and x = 6 is the only x-intercept of that graph. The function g is defined by g(x) = −2f(x). Which of the following must be true?',
        choices:{
          A:'The graph of g passes through (−3, 8), and its only x-intercept is at x = 6.',
          B:'The graph of g passes through (−3, −8), and its only x-intercept is at x = −6.',
          C:'The graph of g passes through (−3, −8), and its only x-intercept is at x = −12.',
          D:'The graph of g passes through (−3, −8), and its only x-intercept is at x = 6.'
        },
        correct:'D',
        expCorrect:'g(x) = −2f(x) changes OUTPUTS only: every y-value gets multiplied by −2. At x = −3 that gives g(−3) = −2 · f(−3) = −2(4) = −8, so g passes through (−3, −8). The x-intercepts cannot move: g(x) = 0 exactly when −2f(x) = 0, which happens exactly when f(x) = 0, and that is still only x = 6. So the only x-intercept of g is x = 6.',
        expWrong:{
          A:'This drops the minus sign: −2 times 4 is −8, not 8. A negative multiplier flips the point to the other side of the x-axis.',
          B:'Sending x = 6 to x = −6 is a reflection across the y-axis, which is what f(−x) does. A multiplier OUTSIDE f flips the graph vertically and leaves every x-coordinate alone.',
          C:'This multiplies the x-intercept by −2 as well. A vertical stretch never changes an x-value; it scales heights, and a height of 0 scales to 0.'
        },
        tip:'A constant OUTSIDE the function, a·f(x), touches only the y-values: it stretches, and if it is negative it flips the graph vertically — and it always leaves the x-intercepts exactly where they were. A constant INSIDE, like f(x − h) or f(−x), is what moves things left and right.',
        desmos:'Take any f whose only x-intercept is x = 6 — say f(x) = x − 6 — and graph y = f(x) and y = −2f(x) together. Both cross the x-axis at the same place; only the steepness and the side change.',
        desmosLatex:['f(x)=x-6','y=f(x)','y=-2f(x)']
      },
      {
        id:'HV2-03', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Matching a factored quadratic to its graph',
        figure: FIG_DOWN,
        stem:'The graph of the quadratic function f is shown in the xy-plane. Which equation defines f?',
        choices:{
          A:'f(x) = −(x + 1)(x − 5)',
          B:'f(x) = (x + 1)(x − 5)',
          C:'f(x) = −(x − 1)(x + 5)',
          D:'f(x) = −(x − 2)² − 9'
        },
        correct:'A',
        expCorrect:'Read two things off the picture. (1) The x-intercepts are −1 and 5, so the factors are (x + 1) and (x − 5) — a zero at x = −1 comes from (x + 1), not (x − 1). (2) The parabola opens DOWNWARD, so the leading coefficient is negative. That leaves f(x) = a(x + 1)(x − 5) with a < 0, and a = −1 matches the marked vertex: −(2 + 1)(2 − 5) = −(3)(−3) = 9, which is the 9 in (2, 9) ✓.',
        expWrong:{
          B:'The zeros are right but the sign is not. (x + 1)(x − 5) opens upward, so its vertex would sit at (2, −9), below the x-axis, not at (2, 9).',
          C:'This flips the sign inside each factor. A zero at x = −1 needs the factor (x + 1); (x − 1) puts the zero at x = +1. This function has zeros at 1 and −5, which is not what the graph shows.',
          D:'This is vertex form with the wrong sign on the vertical shift. −(x − 2)² − 9 has its vertex at (2, −9) and never reaches the x-axis at all, so it has no x-intercepts — but the graph clearly crosses at −1 and 5.'
        },
        tip:'From a parabola picture: each x-intercept r contributes a factor (x − r), and mind the sign — r = −1 gives (x + 1). Then the direction of opening fixes the sign of a, and one extra marked point (the vertex is ideal) pins down the size of a.',
        desmos:'Graph all four options at once. Only one of them opens downward AND crosses the x-axis at x = −1 and x = 5.',
        desmosLatex:['y=-(x+1)(x-5)','y=(x+1)(x-5)','y=-(x-1)(x+5)','y=-(x-2)^{2}-9']
      },
      {
        id:'HV2-04', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Signs of a, b and c read from a parabola',
        figure: FIG_UP,
        stem:'The graph of y = ax² + bx + c is shown in the xy-plane, where a, b, and c are constants. Which of the following must be true?',
        choices:{
          A:'a > 0, b > 0, and c > 0',
          B:'a > 0, b < 0, and c < 0',
          C:'a > 0, b < 0, and c > 0',
          D:'a < 0, b < 0, and c > 0'
        },
        correct:'C',
        expCorrect:'Three separate reads. For a: the parabola opens upward, so a > 0. For c: in y = ax² + bx + c the constant c is the value at x = 0, that is, the y-intercept — the graph is marked at (0, 1), so c = 1 > 0. For b: the vertex sits at x = −b/(2a), and the picture puts it at x = 2, so −b/(2a) = 2 → −b = 4a → b = −4a. With a > 0 that forces b < 0. (A function matching every feature shown: y = x² − 4x + 1, where a = 1, b = −4, c = 1, vertex (2, −3), y-intercept 1 ✓.)',
        expWrong:{
          A:'b > 0 comes from forgetting the minus sign in x = −b/(2a). With a > 0, a vertex to the RIGHT of the y-axis needs b NEGATIVE; a positive b would push the vertex to the left.',
          B:'c < 0 reads the vertex height (−3) as the constant term. c is the y-intercept, the value at x = 0, and the graph crosses the y-axis ABOVE the origin, at (0, 1).',
          D:'a < 0 would mean the parabola opens downward. This one opens upward — the vertex is its lowest point — even though that vertex happens to sit below the x-axis.'
        },
        tip:'For y = ax² + bx + c read the picture in three moves: direction of opening → sign of a; y-intercept → sign of c; vertex position x = −b/(2a) → sign of b. A vertex below the x-axis says nothing about a, and its height is not c.',
        desmos:'Graph y = x² − 4x + 1, then change one constant at a time (y = x² + 4x + 1, then y = −x² − 4x + 1) and watch which feature of the picture each constant controls.',
        desmosLatex:['y=x^{2}-4x+1','y=x^{2}+4x+1','y=-x^{2}-4x+1']
      },
      {
        id:'HV2-05', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Piecewise functions: who owns the boundary point',
        stem:'The function f is defined by f(x) = 3x + 7 for x < 2 and by f(x) = x² − 5 for x ≥ 2. What is the value of f(2) − f(−2)?',
        choices:{A:'12', B:'−2', C:'0', D:'2'},
        correct:'B',
        expCorrect:'The boundary belongs to the second rule, because that rule is written for x ≥ 2. So f(2) uses x² − 5: f(2) = 4 − 5 = −1. And −2 < 2, so f(−2) uses 3x + 7: f(−2) = −6 + 7 = 1. Therefore f(2) − f(−2) = −1 − 1 = −2.',
        expWrong:{
          A:'12 = 13 − 1 uses the first rule at x = 2, since 3(2) + 7 = 13. That rule carries the strict condition x < 2, so it does not include 2 itself.',
          C:'0 comes from using the second rule at x = −2 too, since (−2)² − 5 = −1. The second rule only applies for x ≥ 2, and −2 is not.',
          D:'2 is f(−2) − f(2), the subtraction in the wrong order. The question asks for f(2) − f(−2) = −1 − 1 = −2.'
        },
        tip:'In a piecewise function, check the inequality signs before you compute: x ≥ 2 owns the boundary point, x < 2 does not. Choose the rule from the CONDITION, never from whichever formula looks friendlier.',
        desmos:'Enter f as a piecewise function in Desmos. At x = 2 you will see a closed dot on the parabola piece at y = −1 and an open dot where the line piece would have reached y = 13 — the closed dot is the real value.',
        desmosLatex:['f\\left(x\\right)=\\left\\{x<2:3x+7,x\\ge 2:x^{2}-5\\right\\}']
      },
      {
        id:'HV2-06', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Piecewise functions: finding the input for a given output',
        stem:'The function f is defined by f(x) = 4x + 3 for x < 1 and by f(x) = x² + 6 for x ≥ 1. There is exactly one value of x for which f(x) = 31. What is that value of x?',
        answer:'5',
        expCorrect:'Work one branch at a time, then test each candidate against the condition on the branch it came from. Top branch: 4x + 3 = 31 → 4x = 28 → x = 7. But that branch is only in force for x < 1, and 7 is not less than 1, so x = 7 is thrown out. Bottom branch: x² + 6 = 31 → x² = 25 → x = 5 or x = −5. That branch is only in force for x ≥ 1, so −5 is thrown out and 5 survives. (Check: 5 ≥ 1, so f(5) = 25 + 6 = 31 ✓.) Answer: 5.',
        expWrong:{},
        tip:'Solving the formula is only half the job in a piecewise function: every candidate must satisfy the condition attached to its own branch. A root that breaks that condition is discarded — that is exactly where the two fake answers, 7 and −5, come from.',
        desmos:'Enter f as a piecewise function and graph y = 31 on top of it. The horizontal line meets the graph at exactly one place, x = 5; the top branch stops before it ever reaches 31.',
        desmosLatex:['f\\left(x\\right)=\\left\\{x<1:4x+3,x\\ge 1:x^{2}+6\\right\\}','y=31']
      },
      {
        id:'HV2-07', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Why an inverse needs a one-to-one function',
        stem:'The function f is defined by f(x) = x² − 6x for all real numbers x. A student claims that f has an inverse function f⁻¹ satisfying f⁻¹(f(x)) = x for every real number x. Which of the following best explains why that claim is false?',
        choices:{
          A:'Two different inputs produce the same output — f(1) = −5 and f(5) = −5 — so no rule could send −5 back to a single input.',
          B:'Some outputs of f are negative, and an inverse function cannot accept negative inputs.',
          C:'The graph of f is a parabola, and a parabola can never have an inverse on any domain.',
          D:'The equation f(x) = 0 has two solutions, x = 0 and x = 6, so f is not a function.'
        },
        correct:'A',
        expCorrect:'An inverse has to send each output back to the one input it came from, so the original function must be one-to-one. Here f(1) = 1 − 6 = −5 and f(5) = 25 − 30 = −5: the single output −5 comes from two different inputs. An f⁻¹ would have to return both 1 and 5 for the input −5, which no function can do. That is the whole failure — the horizontal line y = −5 cuts the parabola twice.',
        expWrong:{
          B:'An inverse function can perfectly well accept negative inputs; f⁻¹ only has to undo f. The obstacle has nothing to do with the sign of the outputs.',
          C:'A parabola CAN have an inverse once the domain is restricted: on x ≥ 3 the function f(x) = x² − 6x is one-to-one and its inverse exists. What fails in the claim is the phrase "for every real number x".',
          D:'f is a function: every input has exactly one output, which is what the vertical line test checks. Two x-intercepts break the HORIZONTAL line test, not the definition of a function.'
        },
        tip:'A function has an inverse only if it is one-to-one: every output comes from exactly ONE input (horizontal line test). To knock down an inverse claim you only need one counterexample — two inputs sharing an output.',
        desmos:'Graph y = x² − 6x and add the horizontal line y = −5. It hits the curve twice, at x = 1 and x = 5, and that double hit is precisely what stops f from having an inverse.',
        desmosLatex:['y=x^{2}-6x','y=-5']
      },
      {
        id:'HV2-08', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Inverse of a two-step rule (evaluated twice)',
        stem:'The function f is defined by f(x) = (x − 5)/3 + 8. What is the value of f⁻¹(12) + f⁻¹(8)?',
        answer:'22',
        expCorrect:'Build the inverse once and use it twice. Set y = (x − 5)/3 + 8 and solve for x: y − 8 = (x − 5)/3 → 3(y − 8) = x − 5 → x = 3y − 24 + 5 = 3y − 19. So f⁻¹(x) = 3x − 19. Then f⁻¹(12) = 36 − 19 = 17 and f⁻¹(8) = 24 − 19 = 5, and the sum is 17 + 5 = 22. (Check: f(17) = 12/3 + 8 = 4 + 8 = 12 ✓ and f(5) = 0/3 + 8 = 8 ✓.) Answer: 22.',
        expWrong:{},
        tip:'f⁻¹(k) means "which input gives the output k": set f(x) = k and solve. Undo the steps in REVERSE order — f adds 8 last, so f⁻¹ subtracts 8 first. And read the final line: this one asks for a SUM, not for one inverse value.',
        desmos:'Graph y = (x − 5)/3 + 8 together with the lines y = 12 and y = 8. The crossings sit at x = 17 and x = 5, and those two x-values are what you add.',
        desmosLatex:['y=\\frac{x-5}{3}+8','y=12','y=8']
      },
      {
        id:'HV2-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Choosing between a linear and an exponential model (table)',
        stem:'The table gives the value V, in dollars, of an investment account at the end of year t.' + TBL_ACCT + 'Which of the following best models the relationship between t and V?',
        choices:{
          A:'Linear, because V increases by the same amount each year: V(t) = 500 + 100t',
          B:'Exponential, because V is multiplied by the same factor each year: V(t) = 500(0.2)^t',
          C:'Exponential, because V is multiplied by the same factor each year: V(t) = 1.2(500)^t',
          D:'Exponential, because V is multiplied by the same factor each year: V(t) = 500(1.2)^t'
        },
        correct:'D',
        expCorrect:'Test for a constant DIFFERENCE first: 600 − 500 = 100, 720 − 600 = 120, 864 − 720 = 144. Those are not equal, so the model is not linear. Now test for a constant RATIO: 600/500 = 1.2, 720/600 = 1.2, 864/720 = 1.2. Equal, so the model is exponential with base 1.2, and the starting value is V(0) = 500. That gives V(t) = 500(1.2)^t. (Check t = 3: 500(1.2)³ = 500(1.728) = 864 ✓.)',
        expWrong:{
          A:'The first jump really is 100, which is what makes this tempting — but the next jumps are 120 and 144. Equal differences would mean linear; differences that keep growing are the signature of an exponential.',
          B:'0.2 is the growth RATE, not the base. The base is 1 + r = 1.2. With a base of 0.2 the account would fall to 500(0.2) = 100 dollars after one year instead of rising to 600.',
          C:'This swaps the two numbers: the starting value belongs in front and the multiplier belongs in the exponent. It happens to give 600 at t = 1, but at t = 2 it gives 300,000 instead of 720.'
        },
        tip:'Constant difference → linear. Constant ratio → exponential. Get the ratio first, then write a(b)^t with a = the value at t = 0 and b = that ratio. Growth of "20% per year" makes b = 1.2, never 0.2.',
        desmos:'Put the four pairs into a Desmos table, then graph y = 500(1.2)^x and y = 500 + 100x over them. The exponential passes through all four points; the line only matches the first two.',
        desmosLatex:['y=500\\left(1.2\\right)^{x}','y=500+100x']
      },
      {
        id:'HV2-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Interpreting the base of an exponential model (with a time-step trap)',
        stem:'The number of active users of an app is modeled by U(t) = 8,000(0.94)^(t/3), where t is the number of months since the app was released. Which of the following is the best interpretation of the number 0.94 in this model?',
        choices:{
          A:'Every month, the number of active users is 6% lower than it was the month before.',
          B:'Every 3 months, the number of active users falls by 94%.',
          C:'Every 3 months, the number of active users is 6% lower than it was 3 months earlier.',
          D:'Every month, the number of active users falls by 0.94 users.'
        },
        correct:'C',
        expCorrect:'In a(b)^(t/n) the base b multiplies the amount each time the exponent climbs by 1 — and here the exponent climbs by 1 when t climbs by 3. So U(t + 3) = 8,000(0.94)^((t + 3)/3) = 0.94 · U(t): every 3 months the count is multiplied by 0.94, which is 6% less, since 1 − 0.94 = 0.06. (Check: U(0) = 8,000 and U(3) = 8,000(0.94) = 7,520, a drop of 480, and 480/8,000 = 0.06 ✓.)',
        expWrong:{
          A:'This forgets the /3 in the exponent. The 6% drop takes 3 months, not 1; the actual monthly factor is 0.94^(1/3) ≈ 0.9796, close to 2% per month.',
          B:'Falling BY 94% would leave only 6% of the users, which would be a base of 0.06. A base of 0.94 means 94% REMAINS, so the loss is 6%.',
          D:'A base is a multiplier, not a subtraction. Losing a fixed 0.94 users per month would be a linear model, U(t) = 8,000 − 0.94t, not an exponential one.'
        },
        tip:'In y = a(b)^(t/n): a is the starting amount, n is how long one step lasts, and b is the multiplier per step. Percent change per step = b − 1, so 0.94 → −6%. The /n is the unit trap: always ask how long one step actually is.',
        desmos:'Graph y = 8000(0.94)^(x/3) and read off x = 0, 3 and 6: you get 8000, 7520 and 7068.8, each one 0.94 times the previous. Graph y = 8000(0.94)^x next to it to see how much faster the drop would be without the /3.',
        desmosLatex:['y=8000\\left(0.94\\right)^{\\frac{x}{3}}','y=8000\\left(0.94\\right)^{x}']
      },
      {
        id:'HV2-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Parabola and line: counting intersections with the discriminant',
        stem:'The system of equations below is graphed in the xy-plane.<br><br>y = 2x² + 3x − 1<br>y = x − 4<br><br>How many points do the two graphs have in common?',
        choices:{A:'Zero', B:'Exactly one', C:'Exactly two', D:'More than two'},
        correct:'A',
        expCorrect:'Set the two expressions equal and count real roots: 2x² + 3x − 1 = x − 4 → 2x² + 2x + 3 = 0 (note −1 − (−4) = +3). The discriminant is b² − 4ac = 2² − 4(2)(3) = 4 − 24 = −20. A negative discriminant means no real roots, so the line and the parabola never meet: zero points in common. (Sanity check: the parabola bottoms out at x = −3/4, where y = −2.125, while the line there is at y = −4.75 — the line is below, and the discriminant says it never catches up.)',
        expWrong:{
          B:'Exactly one would require a discriminant of 0, that is, a tangent line. Here the discriminant is −20, not 0, so there is no point of contact at all.',
          C:'Exactly two needs a POSITIVE discriminant, and that is what you get if you slip a sign while moving x − 4 across: the constant is −1 − (−4) = +3, not −5. With +3 the discriminant is 4 − 24 = −20 and there are no real roots.',
          D:'More than two is impossible for a line and a parabola. Setting them equal always produces a quadratic, and a quadratic has at most two real roots.'
        },
        tip:'Line vs. parabola: substitute, collect into one quadratic, then read the discriminant b² − 4ac. Negative → they miss entirely; zero → tangent, one point; positive → two points. You never have to draw the picture.',
        desmos:'Graph y = 2x² + 3x − 1 and y = x − 4 together and zoom out. The line stays under the parabola everywhere, which is what a negative discriminant looks like.',
        desmosLatex:['y=2x^{2}+3x-1','y=x-4']
      },
      {
        id:'HV2-12', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'The constant that switches the number of intersections',
        stem:'In the xy-plane, the graph of y = x² + 4x + 10 and the graph of the line y = 2x + c, where c is a constant, intersect at exactly two points when c is greater than a certain value, and do not intersect at all when c is less than that value. What is that value of c?',
        answer:'9',
        expCorrect:'Set them equal: x² + 4x + 10 = 2x + c → x² + 2x + (10 − c) = 0. The number of intersection points is the number of real roots, and the discriminant decides it: D = 2² − 4(1)(10 − c) = 4 − 40 + 4c = 4c − 36. Two points need D > 0 → 4c > 36 → c > 9; no points need D < 0 → c < 9. The switch sits at c = 9, where D = 0 and the line is tangent. (Check c = 9: x² + 2x + 1 = (x + 1)² = 0, a single root at x = −1 ✓.) Answer: 9.',
        expWrong:{},
        tip:'Raising c slides the line straight up without tilting it, and the whole count of intersections is controlled by the sign of the discriminant of the combined quadratic: D < 0 none, D = 0 tangent, D > 0 two. Find the c that makes D = 0 and you have found the border.',
        desmos:'Graph y = x² + 4x + 10 and y = 2x + c and let Desmos build a slider for c. Drag it: below 9 the line misses the parabola, at exactly 9 it just touches, above 9 it cuts through twice.',
        desmosLatex:['y=x^{2}+4x+10','y=2x+c','c=9']
      }
    ]
  });
})();
