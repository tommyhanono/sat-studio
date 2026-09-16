/* SAT Studio question set — Math: Geometry — Lines, Angles & Triangles, hard tier (ANG-01 a ANG-24) */
(function(){
  /* Todas las figuras: SVG inline, viewBox propio, role="img" y un aria-label que
     por sí solo alcanza para contestar (es lo único que oye un lector de pantalla).
     Los ángulos dibujados siguen los números del enunciado dentro de lo razonable;
     cada figura repite la nota de que no está a escala. */

  var FIG_LINEARPAIR =
    '<svg viewBox="0 0 300 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A straight line through three points A, Q and B, with Q between A and B. A ray QC leaves Q and goes up and to the right, so it lands above the line. The angle AQC, between the part of the line going left from Q and the ray QC, is labeled open parenthesis 4x minus 10 close parenthesis degrees. The angle CQB, between the ray QC and the part of the line going right from Q, is labeled open parenthesis x plus 40 close parenthesis degrees.">' +
    '<line x1="30" y1="140" x2="270" y2="140" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="150" y1="140" x2="188" y2="37" stroke="#324DC7" stroke-width="2.5"/>' +
    '<circle cx="150" cy="140" r="3" fill="#1e1e1e"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="104" y="114" text-anchor="middle">(4x &#8722; 10)&#176;</text>' +
    '<text x="210" y="124" text-anchor="middle">(x + 40)&#176;</text>' +
    '<g font-style="italic" font-size="13"><text x="22" y="156">A</text>' +
    '<text x="144" y="160">Q</text><text x="276" y="156">B</text>' +
    '<text x="194" y="30">C</text></g></g>' +
    '<text x="12" y="180" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_SAMESIDE2 =
    '<svg viewBox="0 0 320 192" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two horizontal parallel lines, p on top and q below it, cut by a slanted transversal that leans to the right as it goes down. Two angles are marked, both between p and q and both on the right side of the transversal. At the upper crossing, on line p, the angle is labeled open parenthesis 3x plus 14 close parenthesis degrees. At the lower crossing, on line q, the angle is labeled open parenthesis 5x minus 26 close parenthesis degrees.">' +
    '<line x1="20" y1="45" x2="290" y2="45" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="20" y1="150" x2="290" y2="150" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="110" y1="15" x2="172" y2="180" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="142" y="72">(3x + 14)&#176;</text>' +
    '<text x="182" y="134">(5x &#8722; 26)&#176;</text>' +
    '<text x="296" y="49" fill="#324DC7">p</text><text x="296" y="154" fill="#324DC7">q</text></g>' +
    '<text x="12" y="188" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. Lines p and q are parallel.</text>' +
    '</svg>';

  var FIG_DE_PERIM =
    '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with vertex A at the top, B at the lower left and C at the lower right. Point D lies on side AB and point E lies on side AC, and the segment DE is drawn across the triangle parallel to the base BC. On side AB the upper piece AD is labeled 8 and the lower piece DB is labeled 12. No other length is marked.">' +
    '<polygon points="140,22 40,172 255,172" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="100" y1="82" x2="186" y2="82" stroke="#324DC7" stroke-width="2.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="112" y="56" text-anchor="end">8</text>' +
    '<text x="62" y="134" text-anchor="end">12</text>' +
    '<g font-style="italic" font-size="13"><text x="134" y="16">A</text>' +
    '<text x="26" y="186">B</text><text x="261" y="186">C</text>' +
    '<text x="82" y="86">D</text><text x="192" y="86">E</text></g></g>' +
    '<text x="12" y="196" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. DE is parallel to BC.</text>' +
    '</svg>';

  var FIG_BEND =
    '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two horizontal parallel lines, m on top and n below. Point A is on line m and point B is on line n, and point P sits between the two lines and to the left of both A and B, so the path from A to P to B bends at P. At A, the angle between segment AP and the part of line m that runs left from A measures 31 degrees. At B, the angle between segment BP and the part of line n that runs left from B is labeled open parenthesis 2y close parenthesis degrees. The bend angle APB measures 115 degrees.">' +
    '<line x1="20" y1="40" x2="295" y2="40" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="20" y1="170" x2="295" y2="170" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="180" y1="40" x2="60" y2="105" stroke="#324DC7" stroke-width="2.5"/>' +
    '<line x1="60" y1="105" x2="105" y2="170" stroke="#324DC7" stroke-width="2.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="152" y="59" text-anchor="end">31&#176;</text>' +
    '<text x="100" y="161" text-anchor="end">(2y)&#176;</text>' +
    '<text x="74" y="113">115&#176;</text>' +
    '<text x="301" y="44" fill="#324DC7">m</text><text x="301" y="174" fill="#324DC7">n</text>' +
    '<g font-style="italic" font-size="13"><text x="185" y="33">A</text>' +
    '<text x="110" y="186">B</text><text x="42" y="101">P</text></g></g>' +
    '<text x="12" y="196" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. Lines m and n are parallel.</text>' +
    '</svg>';

  var FIG_PGRAM =
    '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A parallelogram ABCD with A at the lower left, B at the lower right, C at the upper right and D at the upper left, so that side AB is parallel to side DC and side AD is parallel to side BC. The angle at vertex A, inside the parallelogram, is labeled open parenthesis 3x plus 20 close parenthesis degrees. The angle at vertex C, the opposite corner, is labeled open parenthesis 5x minus 40 close parenthesis degrees.">' +
    '<polygon points="40,165 205,165 258,55 93,55" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="70" y="150">(3x + 20)&#176;</text>' +
    '<text x="234" y="78" text-anchor="end">(5x &#8722; 40)&#176;</text>' +
    '<g font-style="italic" font-size="13"><text x="28" y="180">A</text>' +
    '<text x="211" y="180">B</text><text x="264" y="50">C</text>' +
    '<text x="80" y="50">D</text></g></g>' +
    '<text x="12" y="196" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_XSECT =
    '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four points: A and B near the top, with A to the left of B, and D and C near the bottom, with D to the left of C. Segment AB at the top is parallel to segment DC at the bottom. Segment AC runs from A down to C and segment BD runs from B down to D, and the two cross at a point P between them. On segment AC, the piece AP is labeled 6 and the piece PC is labeled 15. The whole segment BD is 28 long, and P splits it into BP and PD.">' +
    '<line x1="95" y1="38" x2="195" y2="38" stroke="#324DC7" stroke-width="2.5"/>' +
    '<line x1="42" y1="168" x2="272" y2="168" stroke="#324DC7" stroke-width="2.5"/>' +
    '<line x1="95" y1="38" x2="272" y2="168" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="195" y1="38" x2="42" y2="168" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="149" cy="77" r="3" fill="#1e1e1e"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="116" y="54" text-anchor="end">6</text>' +
    '<text x="218" y="130">15</text>' +
    '<text x="58" y="112">BD = 28</text>' +
    '<g font-style="italic" font-size="13"><text x="86" y="32">A</text>' +
    '<text x="200" y="32">B</text><text x="278" y="180">C</text>' +
    '<text x="32" y="180">D</text><text x="155" y="72">P</text></g></g>' +
    '<text x="12" y="196" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. AB is parallel to DC.</text>' +
    '</svg>';

  var FIG_XSECT2 =
    '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four points: A and B near the top, with A to the left of B, and D and C near the bottom, with D to the left of C. Segment AC runs from A down to C and segment BD runs from B down to D, and the two cross at a point E between them. The segments EA and EB have the same length. The angle AEB, which opens upward at E between EA and EB, is labeled open parenthesis 4x minus 10 close parenthesis degrees. The angle CED, which opens downward at E between EC and ED, is labeled open parenthesis x plus 32 close parenthesis degrees.">' +
    '<line x1="60" y1="40" x2="255" y2="165" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="205" y1="40" x2="48" y2="165" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="140" cy="92" r="3" fill="#1e1e1e"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="140" y="74" text-anchor="middle">(4x &#8722; 10)&#176;</text>' +
    '<text x="140" y="118" text-anchor="middle">(x + 32)&#176;</text>' +
    '<g font-style="italic" font-size="13"><text x="50" y="34">A</text>' +
    '<text x="211" y="34">B</text><text x="261" y="178">C</text>' +
    '<text x="38" y="178">D</text><text x="147" y="88">E</text></g></g>' +
    '<text x="12" y="196" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. AE and BE have the same length.</text>' +
    '</svg>';

  var FIG_DE_DIFF =
    '<svg viewBox="0 0 300 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with vertex A at the top, B at the lower left and C at the lower right. Point D lies on side AB and point E lies on side AC, and the segment DE is drawn across the triangle parallel to the base BC. On side AB the upper piece AD is labeled x and the lower piece DB is labeled 9. On side AC the upper piece AE is labeled x minus 1 and the lower piece EC is labeled 6.">' +
    '<polygon points="140,22 40,178 255,178" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="115" y1="61" x2="169" y2="61" stroke="#324DC7" stroke-width="2.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="124" y="46" text-anchor="end">x</text>' +
    '<text x="70" y="132" text-anchor="end">9</text>' +
    '<text x="180" y="46">x &#8722; 1</text>' +
    '<text x="216" y="132">6</text>' +
    '<g font-style="italic" font-size="13"><text x="134" y="16">A</text>' +
    '<text x="26" y="192">B</text><text x="261" y="192">C</text>' +
    '<text x="99" y="64">D</text><text x="175" y="64">E</text></g></g>' +
    '<text x="12" y="201" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. DE is parallel to BC.</text>' +
    '</svg>';

  var FIG_TWOPARAM =
    '<svg viewBox="0 0 330 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two horizontal parallel lines, m on top and n below it, crossed by a slanted transversal t that leans to the right as it goes down. Three angles are labeled. At the crossing with m, the angle that lies below line m and to the right of t is labeled open parenthesis a plus b close parenthesis degrees. At the crossing with n, the angle that lies above line n and to the right of t is labeled open parenthesis 3a minus b close parenthesis degrees, and the angle that lies below line n and to the left of t is labeled open parenthesis 5b minus a close parenthesis degrees.">' +
    '<line x1="20" y1="45" x2="300" y2="45" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="20" y1="155" x2="300" y2="155" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="100" y1="15" x2="200" y2="195" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="150" y="70">(a + b)&#176;</text>' +
    '<text x="198" y="144">(3a &#8722; b)&#176;</text>' +
    '<text x="154" y="180" text-anchor="end">(5b &#8722; a)&#176;</text>' +
    '<text x="306" y="49" fill="#324DC7">m</text><text x="306" y="159" fill="#324DC7">n</text>' +
    '<text x="206" y="196" fill="#324DC7">t</text></g>' +
    '<text x="12" y="201" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. Lines m and n are parallel.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-geo-lines-deep',
    title: 'Lines, Angles & Triangles — Hard & Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Twenty-four questions on the geometry that is neither trigonometry nor circles: parallel lines and transversals, triangle angle sums, exterior angles, bisectors, isosceles and similar triangles, polygon angle totals and the triangle inequality. Thirteen at the real Module 2 level and ten in the brutal tier, where a parameter stands in for a number, a hidden condition kills a whole configuration, or three chained steps hide the answer.',
    minutes: 32,
    questions: [
      {
        id:'ANG-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Angles on a straight line (linear pair)',
        figure: FIG_LINEARPAIR,
        stem:'In the figure, points A, Q and B lie on one straight line, and ray QC is drawn from Q. The measure of angle AQC is (4x − 10)° and the measure of angle CQB is (x + 40)°. What is the value of x?',
        choices:{A:'12', B:'30', C:'66', D:'110'},
        correct:'B',
        expCorrect:'Angles AQC and CQB sit side by side on the straight line AQB, so together they cover a straight angle and add to 180°. (4x − 10) + (x + 40) = 180 → 5x + 30 = 180 → 5x = 150 → x = 30. (Check: 4(30) − 10 = 110 and 30 + 40 = 70, and 110 + 70 = 180 ✓.)',
        expWrong:{
          A:'12 comes from setting the two angles equal to 90 instead of 180: 5x + 30 = 90 gives x = 12. Two angles add to 90° when together they make a square corner, not when they sit on a straight line.',
          C:'66 comes from using 360: 5x + 30 = 360 gives x = 66. A full turn around a point is 360°, but A, Q and B lie on ONE line, so these two angles cover only half of that turn.',
          D:'110 is the measure of angle AQC, which is 4x − 10 with x = 30. That is the last line of the work, but the question asked for x itself.'
        },
        tip:'Two angles that share a vertex and together fill one straight line always add to 180°. Write that sum before anything else, and then re-read the question to see whether it wants the variable or one of the angles — those are different answers.',
        desmos:'Type 5x+30=180 into Desmos: it draws the vertical line x = 30, the solution.',
        desmosLatex:['5x+30=180']
      },
      {
        id:'ANG-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Parallel lines cut by a transversal: same-side interior angles',
        figure: FIG_SAMESIDE2,
        stem:'In the figure, lines p and q are parallel and are cut by a transversal. Both marked angles lie between p and q, and both are on the right side of the transversal. One measures (3x + 14)° and the other measures (5x − 26)°. What is the positive difference, in degrees, between the two marked angles?',
        choices:{A:'8', B:'0', C:'24', D:'94'},
        correct:'A',
        expCorrect:'Both marked angles are interior (between p and q) and on the same side of the transversal, so they are supplementary: (3x + 14) + (5x − 26) = 180 → 8x − 12 = 180 → 8x = 192 → x = 24. Substitute: 3(24) + 14 = 86 and 5(24) − 26 = 94. (Check: 86 + 94 = 180 ✓.) The positive difference is 94 − 86 = 8.',
        expWrong:{
          B:'0 comes from setting the two expressions EQUAL, which is the move for alternate interior or corresponding angles. These two are both interior and both on the SAME side of the transversal, so they add to 180 instead of matching.',
          C:'24 is the value of x. Substitute it back: the angles are 86° and 94°, and the question asks how far apart they are.',
          D:'94 is the larger angle, 5x − 26 with x = 24. It is the second-to-last step; the answer is 94 − 86.'
        },
        tip:'At a pair of parallel lines every angle pair is either equal or adds to 180 — there is no third case. Same side of the transversal and both interior means 180; opposite sides means equal. Decide which before writing the equation, then check what the question is really asking for.',
        desmos:'Solve 8x-12=180 in Desmos to get x = 24, then evaluate (5*24-26)-(3*24+14) to confirm the gap of 8.',
        desmosLatex:['8x-12=180','(5\\cdot24-26)-(3\\cdot24+14)']
      },
      {
        id:'ANG-03', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Exterior angle of a triangle chained to the angle sum',
        stem:'In triangle ABC, side AB is extended past B to point D, so that A, B and D lie on one straight line. The measure of angle A is (2x + 20)°, the measure of angle C is (3x + 15)°, and the measure of the exterior angle CBD is (7x − 5)°. What is the measure, in degrees, of the smallest angle of triangle ABC?',
        answer:'45',
        expCorrect:'The exterior angle CBD equals the sum of the two remote interior angles, A and C: 7x − 5 = (2x + 20) + (3x + 15) = 5x + 35 → 2x = 40 → x = 20. Substitute: angle A = 2(20) + 20 = 60°, angle C = 3(20) + 15 = 75°, and angle CBD = 7(20) − 5 = 135°. The interior angle at B is the supplement of that exterior angle: 180 − 135 = 45°. The three interior angles are 60°, 75° and 45°, so the smallest is 45. (Check: 60 + 75 + 45 = 180 ✓, and 60 + 75 = 135 ✓.)',
        tip:'An exterior angle equals the two remote interior angles added together, and it is supplementary to the interior angle beside it. Use the first rule to find the variable, then the second to climb back inside the triangle — these questions almost always end with an interior angle.',
        desmos:'Solve 7x-5=5x+35 in Desmos for x = 20, then evaluate 180-(7*20-5) to get the interior angle at B.',
        desmosLatex:['7x-5=5x+35','180-(7\\cdot20-5)']
      },
      {
        id:'ANG-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Similar triangles: perimeter and the similarity ratio',
        figure: FIG_DE_PERIM,
        stem:'In the figure, point D lies on side AB of triangle ABC and point E lies on side AC, and segment DE is parallel to side BC. If AD = 8, DB = 12, and the perimeter of triangle ADE is 30, what is the perimeter of triangle ABC?',
        choices:{A:'12', B:'45', C:'50', D:'75'},
        correct:'D',
        expCorrect:'DE is parallel to BC, so triangle ADE and triangle ABC have the same three angles and are similar. The side of the big triangle that corresponds to AD is the WHOLE side AB = AD + DB = 8 + 12 = 20, so the ratio of the small triangle to the big one is 8/20 = 2/5. Perimeter scales by that same ratio: 30 / P = 2/5 → 2P = 150 → P = 75. (Check: 75 × 2/5 = 30 ✓.)',
        expWrong:{
          A:'12 is 30 × (8/20), the ratio used upside down. Triangle ABC contains triangle ADE, so its perimeter has to come out LARGER than 30, never smaller.',
          B:'45 is 30 × (12/8), built from the two PIECES of side AB. AD and DB are pieces of one side; the comparison that matters is the small triangle against the whole one, so AD pairs with AB = 20.',
          C:'50 is 30 × (20/12), pairing the whole side AB with the leftover piece DB. Inside triangle ADE, the side that corresponds to AB is AD, not DB.'
        },
        tip:'Every length in similar figures — a side, the perimeter, a midsegment, a height — scales by the SAME ratio, so you only ever need to find that one number. Build it whole against whole (AD against AB, not AD against DB) and sanity-check the direction: the bigger triangle must end up with the bigger number.',
        desmos:'Evaluate 30*(20/8) in Desmos: 75.',
        desmosLatex:['30\\cdot(20/8)']
      },
      {
        id:'ANG-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Interior and exterior angles of a polygon with an unknown number of sides',
        stem:'The measures of the interior angles of a convex polygon add to 2,340°. If the polygon is regular, what is the measure, in degrees, of one of its exterior angles?',
        choices:{A:'13', B:'15', C:'24', D:'156'},
        correct:'C',
        expCorrect:'The interior angles of a convex polygon with n sides add to (n − 2)180°. So (n − 2)180 = 2,340 → n − 2 = 2,340 ÷ 180 = 13 → n = 15. The exterior angles of any convex polygon add to 360° no matter how many sides it has, and in a regular polygon they are all equal, so each one is 360 ÷ 15 = 24°. (Check: each interior angle is 180 − 24 = 156°, and 15 × 156 = 2,340 ✓.)',
        expWrong:{
          A:'13 is n − 2, the number that falls straight out of dividing 2,340 by 180. The 2 still has to go back on: n = 15.',
          B:'15 is the number of sides, not an angle measure. With n = 15 in hand, share the 360° of exterior angles among the 15 vertices.',
          D:'156 is one INTERIOR angle: 2,340 ÷ 15. The exterior angle at a vertex is its supplement, 180 − 156 = 24.'
        },
        tip:'Keep the two totals apart: interior angles add to (n − 2)180°, which grows with n, while exterior angles always add to 360°, which does not. Dividing either total by n gives one angle only when the polygon is regular, so check for that word before you divide.',
        desmos:'Type 180(x-2)=2340 in Desmos, reading x as n: it draws the vertical line x = 15. Then evaluate 360/15.',
        desmosLatex:['180(x-2)=2340','360/15']
      },
      {
        id:'ANG-06', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Triangle inequality: counting the possible integer third sides',
        stem:'Two sides of a triangle have lengths 9 and 20. The third side has a length that is a positive integer. How many different values are possible for the length of the third side?',
        answer:'17',
        expCorrect:'The third side s has to be longer than the difference of the other two and shorter than their sum: 20 − 9 = 11 and 20 + 9 = 29, so 11 &lt; s &lt; 29. Both endpoints are excluded, because at s = 11 or s = 29 the three sides collapse onto one straight line. The integers strictly between 11 and 29 run from 12 to 28, and there are 28 − 12 + 1 = 17 of them. (Check the ends: s = 12 gives 9 + 12 = 21 &gt; 20 ✓, and s = 28 gives 9 + 20 = 29 &gt; 28 ✓.)',
        tip:'For sides a and b, the third side lives strictly between |a − b| and a + b, endpoints excluded. When a question counts integers in a range, count with (last − first + 1); subtracting the two ends of the range is the step that loses one.',
        desmos:'Pure arithmetic: 20-9 and 20+9 fix the open range 11 to 29, and 28-12+1 counts the integers inside it.',
        desmosLatex:['20-9','20+9','28-12+1']
      },
      {
        id:'ANG-07', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Angle bisector drawn from a vertex to the opposite side',
        stem:'In triangle ABC, the measure of angle A is 76° and the measure of angle B is 62°. The bisector of angle C meets side AB at point D. What is the measure, in degrees, of angle ADC?',
        choices:{A:'21', B:'42', C:'97', D:'83'},
        correct:'D',
        expCorrect:'First get angle C from the angle sum: 180 − 76 − 62 = 42°. The bisector splits it into two equal halves, so angle ACD = 42 ÷ 2 = 21°. Now work inside triangle ACD, whose three angles are angle A = 76°, angle ACD = 21° and angle ADC: 180 − 76 − 21 = 83°. (Check with the other half: triangle BDC gives 180 − 62 − 21 = 97°, and 83 + 97 = 180 ✓, as it must, since A, D and B lie on one line.)',
        expWrong:{
          A:'21 is half of angle C, the piece of the bisected angle that lands inside triangle ACD. It is an input to the last step, not the output.',
          B:'42 is the whole angle C, before the bisector cuts it. Only 21° of it belongs to triangle ACD.',
          C:'97 is angle BDC, the angle at D on the other side of segment CD: 180 − 62 − 21. The two angles at D are supplementary, so 97 is exactly 180 minus the answer.'
        },
        tip:'A bisector from a vertex splits the triangle into two smaller triangles, and each of them still totals 180°. Find the full angle, halve it, and then decide WHICH of the two small triangles holds the angle you were asked for — picking the other one hands you the supplement.',
        desmos:'Pure arithmetic: 180-76-62 gives angle C = 42, half of that is 21, and 180-76-21 gives 83.',
        desmosLatex:['180-76-62','180-76-21']
      },
      {
        id:'ANG-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Isosceles triangles nested inside one another (angle chasing)',
        stem:'In triangle ABC, AB = AC and the measure of angle A is 36°. Point D lies on side AC, between A and C, and BD = BC. What is the measure, in degrees, of angle ABD?',
        choices:{A:'36', B:'54', C:'72', D:'108'},
        correct:'A',
        expCorrect:'Outer triangle first: AB = AC, so the two angles facing those sides are equal and each is (180 − 36) ÷ 2 = 72°. That gives angle ABC = angle ACB = 72°. Inner triangle next: BD = BC, so the angles facing THOSE two sides are equal, which gives angle BDC = angle BCD = 72° (angle BCD is the same as angle ACB, since D lies on AC). In triangle BDC the third angle is angle DBC = 180 − 72 − 72 = 36°. Finally, D sits inside angle ABC, so angle ABD = angle ABC − angle DBC = 72 − 36 = 36°. (Check triangle ABD: 36 + 36 + 108 = 180, and 108 is the supplement of angle BDC = 72 ✓.)',
        expWrong:{
          B:'54 is (180 − 72)/2, which would be right only if triangle ABD were isosceles with 72° at the top. Its angles are actually 36°, 36° and 108°.',
          C:'72 is angle ABC, the WHOLE angle at B. Point D splits it in two, so 72 overshoots by exactly the 36° of angle DBC.',
          D:'108 is angle ADB, the angle at D inside triangle ABD, and also the supplement of angle BDC = 72°. The question asks for the angle at B, not at D.'
        },
        tip:'Equal sides face equal angles — but always name WHICH two angles a pair of equal sides is pointing at before you use the rule, because in a nested figure the obvious pair is often the wrong one. Solve the outer triangle first and let its angles feed the inner one.',
        desmos:'Pure arithmetic: (180-36)/2 gives the 72° base angles, then 180-72-72 gives 36, and 72-36 gives 36 again.',
        desmosLatex:['(180-36)/2','180-72-72']
      },
      {
        id:'ANG-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Parallel lines with a bend: the auxiliary parallel through the vertex',
        figure: FIG_BEND,
        stem:'In the figure, lines m and n are parallel, with m above n. Point A lies on m, point B lies on n, and point P lies between the two lines and to the left of both A and B. At A, the angle between segment AP and the part of m that runs left from A measures 31°. At B, the angle between segment BP and the part of n that runs left from B is (2y)°. If angle APB measures 115°, what is the measure, in degrees, of the angle marked (2y)°?',
        choices:{A:'42', B:'84', C:'115', D:'149'},
        correct:'B',
        expCorrect:'Draw a third line through P, parallel to m and n. It splits angle APB into two pieces. The upper piece and the 31° angle at A are alternate interior angles for m and the new line, cut by AP, so the upper piece is 31°. The lower piece and the angle at B are alternate interior angles for the new line and n, cut by BP, so the lower piece is 2y. Therefore 115 = 31 + 2y → 2y = 84. (Check: y = 42, and 31 + 84 = 115 ✓.)',
        expWrong:{
          A:'42 is the value of y, not the angle. The angle at B is labeled (2y)°, so after y = 42 there is still one doubling to do.',
          C:'115 is the bend angle APB itself, which was given. The bend is the SUM of the two outer angles, so the one at B is what remains after removing the 31° at A.',
          D:'149 is 180 − 31, which would be the answer if the two outer angles were same-side interior angles of a single transversal. They are not: AP and BP are two different segments that meet at P.'
        },
        tip:'Whenever a path zig-zags between two parallel lines, draw a third parallel through the bend. The bend angle then breaks into two alternate-interior pieces and the whole problem becomes addition: bend = top angle + bottom angle.',
        desmos:'Pure arithmetic: 115-31 gives 84, and half of that gives y = 42.',
        desmosLatex:['115-31','(115-31)/2']
      },
      {
        id:'ANG-10', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Similar triangles: two perimeters and the difference between them',
        stem:'Triangle ABC is similar to triangle PQR, with vertex A corresponding to P, B to Q, and C to R. AB = 15 and PQ = 9. The perimeter of triangle PQR is 24 less than the perimeter of triangle ABC. What is the perimeter of triangle PQR?',
        answer:'36',
        expCorrect:'Corresponding sides give the ratio: PQ/AB = 9/15 = 3/5, so every length in triangle PQR is 3/5 of the matching length in triangle ABC — the perimeter included. Call the perimeter of ABC t. Then the perimeter of PQR is (3/5)t, and the gap between them is t − (3/5)t = (2/5)t = 24 → t = 24 × 5/2 = 60. So the perimeter of PQR is (3/5)(60) = 36. (Check: 60 − 36 = 24 ✓ and 36/60 = 3/5 ✓.)',
        tip:'Reduce a similarity to one number — the ratio — and then apply it to whatever quantity the question is about. When two quantities differ by a stated amount and one is a fixed fraction of the other, name the LARGER one and write the difference as (1 − fraction) times it.',
        desmos:'In Desmos let x be the perimeter of ABC: solve x-(3/5)x=24 for x = 60, then evaluate (3/5)*60 to get 36.',
        desmosLatex:['x-(3/5)x=24','(3/5)\\cdot60']
      },
      {
        id:'ANG-11', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Angles of a parallelogram: opposite equal, consecutive supplementary',
        figure: FIG_PGRAM,
        stem:'In the figure, ABCD is a parallelogram with its vertices labeled in order, so that side AB is parallel to side DC and side AD is parallel to side BC. The measure of angle A is (3x + 20)° and the measure of angle C is (5x − 40)°. What is the measure, in degrees, of angle B?',
        choices:{A:'30', B:'85', C:'70', D:'110'},
        correct:'C',
        expCorrect:'A and C are at opposite corners, and opposite angles of a parallelogram are equal: 3x + 20 = 5x − 40 → 60 = 2x → x = 30, which makes angle A = 3(30) + 20 = 110° (and angle C = 5(30) − 40 = 110° ✓). Angles A and B are at consecutive corners, joined by side AB, which cuts the two parallel sides AD and BC — that makes them same-side interior angles, so they add to 180°: angle B = 180 − 110 = 70°. (Check: 110 + 70 + 110 + 70 = 360 ✓, the total for any four-sided figure.)',
        expWrong:{
          A:'30 is the value of x, not an angle. Substituted back it gives angle A = 110°, and angle B is what is left of 180.',
          B:'85 comes from making angle A and angle C supplementary: 8x − 20 = 180 gives x = 25, angle A = 95 and angle B = 85. A and C are OPPOSITE corners, and opposite angles are equal; it is consecutive corners that add to 180.',
          D:'110 is angle A, and also angle C. The question asks for angle B, which shares side AB with A, so it is the supplement: 180 − 110 = 70.'
        },
        tip:'A parallelogram is nothing but two pairs of parallel lines: opposite angles equal, consecutive angles adding to 180°, all four adding to 360°. Decide whether the two angles named are opposite or consecutive BEFORE writing the equation — that single choice decides the whole problem.',
        desmos:'Solve 3x+20=5x-40 in Desmos for x = 30, then evaluate 180-(3*30+20) to get angle B.',
        desmosLatex:['3x+20=5x-40','180-(3\\cdot30+20)']
      },
      {
        id:'ANG-12', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Parallel lines and a transversal: two angle relationships, two unknowns',
        stem:'Lines m and n are parallel, with m above n, and both are cut by the same transversal. At the intersection with m, the angle below m and to the right of the transversal measures (3x + y)°, and that angle is known to measure 105°. At the intersection with n, the angle above n and to the right of the transversal measures (x + 2y)°. What is the value of x + y?',
        choices:{A:'3', B:'24', C:'27', D:'51'},
        correct:'D',
        expCorrect:'The two marked angles are both interior (between m and n) and both on the right of the transversal, so they are supplementary: (3x + y) + (x + 2y) = 180. Since 3x + y = 105, the other angle is 180 − 105 = 75, so x + 2y = 75. Solve the system 3x + y = 105 and x + 2y = 75: multiply the second by 3 to get 3x + 6y = 225, subtract the first to get 5y = 120 → y = 24, and then 3x = 105 − 24 = 81 → x = 27. So x + y = 27 + 24 = 51. (Check: 3(27) + 24 = 105 ✓, 27 + 2(24) = 75 ✓, and 105 + 75 = 180 ✓.)',
        expWrong:{
          A:'3 is x − y. Both unknowns were found correctly and then combined with the wrong operation; the question asks for their sum.',
          B:'24 is y by itself. Solving the system is only the first half of this question — the answer is built from both values.',
          C:'27 is x by itself, the value that comes out once y is known. Add y to it.'
        },
        tip:'Geometry supplies the equations and algebra finishes the job. At parallel lines every angle pair is either "equal" or "adds to 180", so each marked angle hands you one equation; collect enough of them, solve the system, and then build the exact combination the question named.',
        desmos:'Graph 3x+y=105 and x+2y=75 in Desmos and read the intersection: (27, 24), whose coordinates add to 51.',
        desmosLatex:['3x+y=105','x+2y=75']
      },
      {
        id:'ANG-13', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Midsegment: the segment that bisects two sides of a triangle',
        stem:'In triangle ABC, point M is the midpoint of side AB and point N is the midpoint of side AC. The length of MN is 3k − 4 and the length of BC is 4k + 6. What is the length of BC?',
        answer:'34',
        expCorrect:'The segment joining the midpoints of two sides of a triangle is parallel to the third side and exactly half as long, so MN = BC/2: 3k − 4 = (4k + 6)/2 = 2k + 3 → 3k − 2k = 3 + 4 → k = 7. Then BC = 4(7) + 6 = 34, and MN = 3(7) − 4 = 17. (Check: 17 is half of 34 ✓.)',
        tip:'A midsegment is half the third side — not equal to it, not double it. Write the relationship as (short) = (long)/2 before substituting anything, and finish by confirming that the two numbers you get really sit in a 1-to-2 ratio.',
        desmos:'Graph y=3x-4 and y=2x+3 in Desmos: they meet at (7, 17), so k = 7 and MN = 17, which makes BC = 34.',
        desmosLatex:['y=3x-4','y=2x+3']
      },
      {
        id:'ANG-14', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Triangle angle sum with a condition that one angle is obtuse',
        stem:'In triangle ABC, the measure of angle A is (2x)° and the measure of angle B is (3x + 10)°. If angle C is obtuse, what is the greatest possible integer value of x?',
        choices:{A:'15', B:'16', C:'33', D:'34'},
        correct:'A',
        expCorrect:'The three angles add to 180°, so angle C = 180 − 2x − (3x + 10) = 170 − 5x. "Obtuse" means strictly greater than 90°: 170 − 5x &gt; 90 → −5x &gt; −80 → x &lt; 16, the inequality flipping because both sides were divided by −5. The greatest integer strictly below 16 is 15. (Check: x = 15 gives 30°, 55° and 95°, which add to 180 with C obtuse ✓; x = 16 would give 32°, 58° and 90°, and 90° is not obtuse.)',
        expWrong:{
          B:'16 takes the boundary as allowed. At x = 16, angle C is exactly 170 − 80 = 90°, a square corner rather than an obtuse angle, and "obtuse" means strictly more than 90.',
          C:'33 uses only the condition that angle C be positive: 170 − 5x &gt; 0 gives x &lt; 34, so 33. That ignores the word "obtuse", which raises the floor from 0 to 90.',
          D:'34 is the boundary of that same weaker condition, and at x = 34 angle C would be 0° — not an angle at all.'
        },
        tip:'Write the unnamed angle in terms of the variable first, then translate the describing word into an inequality: obtuse is &gt; 90, acute is &lt; 90, square is = 90. And when you divide an inequality by a negative number, flip the sign — that is where these are usually lost.',
        desmos:'Graph y=170-5x and y=90 in Desmos: they cross at x = 16, and the first is above 90 only to the LEFT of that crossing.',
        desmosLatex:['y=170-5x','y=90']
      },
      {
        id:'ANG-15', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Similar triangles formed where two segments cross between parallel sides',
        figure: FIG_XSECT,
        stem:'In the figure, segments AC and BD intersect at point P, and segment AB is parallel to segment DC. AP = 6, PC = 15, and the whole segment BD has length 28. What is the length of PD?',
        choices:{A:'8', B:'20', C:'11.2', D:'70'},
        correct:'B',
        expCorrect:'AB is parallel to DC, so angle BAP = angle DCP and angle ABP = angle CDP (alternate interior angles), and the angles at P are vertical angles. Triangle APB is therefore similar to triangle CPD, with A matching C and B matching D, which gives BP/PD = AP/CP = 6/15 = 2/5. So BP and PD sit in the ratio 2 : 5, splitting BD into 2 + 5 = 7 equal parts of 28 ÷ 7 = 4 each. PD = 5 × 4 = 20. (Check: BP = 8, PD = 20, 8 + 20 = 28 ✓ and 8/20 = 2/5 = 6/15 ✓.)',
        expWrong:{
          A:'8 is BP, the other piece of BD. The two pieces are 8 and 20, and the question names the one attached to D — the longer one, since PC is longer than AP.',
          C:'11.2 is 28 × (2/5), which applies the ratio to the WHOLE of BD. The ratio 2 : 5 compares BP with PD, not PD with BD; to use it you split BD into 7 parts.',
          D:'70 is 28 × (5/2), the same mistake with the fraction inverted. PD is only a piece of BD, so it can never come out longer than the 28 it sits inside.'
        },
        tip:'Two segments crossing between a pair of parallel sides always create similar triangles, with the matching running diagonally across the crossing point. And once you have a ratio like 2 : 5 for two pieces of one whole, do not multiply the whole by 2/5 — cut the whole into 2 + 5 = 7 parts instead.',
        desmos:'In Desmos let x be BP: solve x/(28-x)=6/15 for x = 8, then 28-8 gives PD = 20. Or split 28 into 7 parts with 28/7.',
        desmosLatex:['x/(28-x)=6/15','28/7']
      },
      {
        id:'ANG-16', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Vertical angles feeding an isosceles triangle',
        figure: FIG_XSECT2,
        stem:'In the figure, segments AC and BD intersect at point E, and AE = BE. The measure of angle AEB is (4x − 10)° and the measure of angle CED is (x + 32)°. What is the measure, in degrees, of angle EAB?',
        choices:{A:'14', B:'46', C:'67', D:'134'},
        correct:'C',
        expCorrect:'Angles AEB and CED sit across the crossing point from each other, so they are vertical angles and therefore equal: 4x − 10 = x + 32 → 3x = 42 → x = 14, which makes angle AEB = 4(14) − 10 = 46° (and angle CED = 14 + 32 = 46° ✓). Now look only at triangle AEB. Its sides EA and EB are equal, so the two angles facing them — angle EAB and angle EBA — are equal, and together they share whatever 180° has left after the 46°: angle EAB = (180 − 46) ÷ 2 = 134 ÷ 2 = 67°. (Check: 67 + 67 + 46 = 180 ✓.)',
        expWrong:{
          A:'14 is the value of x, not an angle measure. Substituted back it only gives angle AEB = 46°, and the real work starts there.',
          B:'46 is angle AEB, the angle at the crossing point. Inside triangle AEB that is the angle BETWEEN the two equal sides, so the angle at A has to be one of the other two.',
          D:'134 is 180 − 46. That is the total left for the two base angles combined, not one of them — it still has to be split in half.'
        },
        tip:'Hard questions stack ordinary facts rather than using hard ones. Here it is three in a row: vertical angles are equal, a triangle totals 180°, and equal sides face equal angles. Name the fact you are using at each step and the stack comes apart on its own.',
        desmos:'Solve 4x-10=x+32 in Desmos for x = 14, then evaluate (180-(4*14-10))/2 to get 67.',
        desmosLatex:['4x-10=x+32','(180-(4\\cdot14-10))/2']
      },
      {
        id:'ANG-17', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Triangle angle sum when the three angles rise by a constant step',
        stem:'In triangle ABC, the measure of angle A is a°, the measure of angle B is (a + d)°, and the measure of angle C is (a + 2d)°, where d is a positive constant. Which of the following gives the measure of angle C, in degrees?',
        choices:{A:'60 − d', B:'60', C:'60 + d', D:'60 + 2d'},
        correct:'C',
        expCorrect:'Add the three measures and set the total to 180: a + (a + d) + (a + 2d) = 3a + 3d = 180. Divide by 3: a + d = 60. That expression is exactly angle B, so angle B = 60° whatever d happens to be. From a + d = 60 we get a = 60 − d, and therefore angle C = a + 2d = (60 − d) + 2d = 60 + d. (Check: (60 − d) + 60 + (60 + d) = 180 for every d ✓, and since d &gt; 0 the three angles come out in increasing order A, B, C, exactly as the labeling promised.)',
        expWrong:{
          A:'60 − d is angle A, the smallest of the three. The angles are 60 − d, 60 and 60 + d, and the question names the largest.',
          B:'60 is angle B, the middle one. It is the single angle that does not depend on d at all, which is precisely why it cannot be the answer here.',
          D:'60 + 2d comes from setting a = 60 and then adding 2d. But a is not 60: the equation gives a + d = 60, so a = 60 − d, and the extra d cancels one of the two.'
        },
        tip:'When three quantities climb by the same fixed step, the middle one is their average. The three angles average 180 ÷ 3 = 60, so the middle angle is 60 and the outer two are 60 minus the step and 60 plus the step — no algebra needed once you see it that way.',
        desmos:'Test it with numbers. In Desmos evaluate (60-10)+60+(60+10) and (60-25)+60+(60+25): both give 180, and the largest angle is 60 plus the step each time.',
        desmosLatex:['(60-10)+60+(60+10)','(60-25)+60+(60+25)']
      },
      {
        id:'ANG-18', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Triangle inequality with the side lengths given as expressions',
        stem:'The three sides of a triangle have lengths 3n − 4, 2n + 5, and n + 12, where n is an integer. For the smallest value of n that makes all three lengths positive and lets such a triangle exist, what is the perimeter of the triangle?',
        answer:'31',
        expCorrect:'Two conditions have to hold. Positivity: 3n − 4 &gt; 0 forces n &gt; 4/3, so n ≥ 2 for an integer. Then each side must be shorter than the sum of the other two, which is three separate inequalities. First: 3n − 4 &lt; (2n + 5) + (n + 12) = 3n + 17, true for every n. Second: 2n + 5 &lt; (3n − 4) + (n + 12) = 4n + 8, which reduces to −3 &lt; 2n, also true here. Third: n + 12 &lt; (3n − 4) + (2n + 5) = 5n + 1, which reduces to 11 &lt; 4n, so n &gt; 2.75 and therefore n ≥ 3. The third one is the binding condition, so the smallest integer is n = 3. The sides are then 3(3) − 4 = 5, 2(3) + 5 = 11 and 3 + 12 = 15, and the perimeter is 5 + 11 + 15 = 31. (Check: 5 + 11 = 16 &gt; 15 ✓, so the triangle does close. At n = 2 the sides would be 2, 9 and 14, and 2 + 9 = 11 &lt; 14 — no triangle at all.)',
        tip:'With sides written as expressions, the triangle inequality is three inequalities, not one, and usually only the one with the LONGEST side on the left actually bites. Solve all three, keep the strictest, and remember that a positive-length requirement can be the strictest of all.',
        desmos:'Graph y=5x+1 and y=x+12 in Desmos: the first rises above the second once x &gt; 2.75, which is the condition 11 &lt; 4n. The smallest integer above 2.75 is 3.',
        desmosLatex:['y=5x+1','y=x+12']
      },
      {
        id:'ANG-19', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Two angle bisectors meeting inside a triangle',
        stem:'In triangle ABC, the bisector of angle B and the bisector of angle C meet at point I. If the measure of angle A is 74°, what is the measure, in degrees, of angle BIC?',
        choices:{A:'53', B:'106', C:'143', D:'127'},
        correct:'D',
        expCorrect:'You are never told angle B and angle C separately, and you never need them — only their sum. The angle sum gives angle B + angle C = 180 − 74 = 106°. Inside triangle BIC the angles at B and C are the halves of those, and half of a sum is the sum of the halves: (angle B)/2 + (angle C)/2 = 106 ÷ 2 = 53°. So angle BIC = 180 − 53 = 127°. (Check with a concrete split, say angle B = 60 and angle C = 46: triangle BIC then has angles 30°, 23° and 180 − 53 = 127° ✓ — the answer does not move. The general rule this proves is angle BIC = 90 + (angle A)/2 = 90 + 37 = 127.)',
        expWrong:{
          A:'53 is the combined size of the two half-angles at B and C, the second-to-last number in the work. The answer is what is left of 180 after removing it.',
          B:'106 is angle B + angle C, which is 180 − 74. That is the total of the two FULL angles, but only half of each one lives inside triangle BIC.',
          C:'143 is 180 − 37, halving angle A instead of the other two. The bisectors were drawn at B and C; angle A is used whole, through the angle sum.'
        },
        tip:'When a problem hands you one angle of a triangle and asks about the other two, look for the step that needs only their SUM — the angle sum gives you that for free, even though the individual values stay unknown. Half of a sum equals the sum of the halves, which is what makes the bisector version work.',
        desmos:'Pure arithmetic: 180-74 gives 106, half of that is 53, and 180-53 gives 127. The shortcut 90+74/2 lands on the same number.',
        desmosLatex:['180-(180-74)/2','90+74/2']
      },
      {
        id:'ANG-20', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Similar triangles from a parallel segment when both pieces are unknown',
        figure: FIG_DE_DIFF,
        stem:'In the figure, D lies on side AB of triangle ABC and E lies on side AC, and segment DE is parallel to side BC. AD = x, DB = 9, AE = x − 1, and EC = 6. What is the positive difference between the lengths of AB and AC?',
        choices:{A:'3', B:'4', C:'8', D:'12'},
        correct:'B',
        expCorrect:'Because DE is parallel to BC, the segment cuts AB and AC in the same ratio: AD/DB = AE/EC, so x/9 = (x − 1)/6 → 6x = 9(x − 1) = 9x − 9 → 3x = 9 → x = 3. Now build the whole sides: AB = AD + DB = 3 + 9 = 12 and AC = AE + EC = 2 + 6 = 8. The positive difference is 12 − 8 = 4. (Check the ratios: 3/9 = 1/3 and 2/6 = 1/3 ✓, and the part-to-whole version agrees too, 3/12 = 2/8 = 1/4 ✓.)',
        expWrong:{
          A:'3 is x, which here is the length AD. Two steps remain after that: assemble the two whole sides, then subtract them.',
          C:'8 is AC = (x − 1) + 6 = 2 + 6. It is one of the two lengths being compared, not the comparison.',
          D:'12 is AB = x + 9 = 3 + 9, the other of the two lengths. The question asks for AB − AC, which is 12 − 8.'
        },
        tip:'A segment parallel to one side cuts the other two sides proportionally, and you may write that as part-to-part (AD/DB = AE/EC) or part-to-whole (AD/AB = AE/AC) — but never mix the two inside one equation. Solve for the variable, then rebuild the lengths the question actually named.',
        desmos:'Graph y=x/9 and y=(x-1)/6 in Desmos and read where they meet: x = 3. That makes AB = 12 and AC = 8.',
        desmosLatex:['y=x/9','y=(x-1)/6']
      },
      {
        id:'ANG-21', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Isosceles triangle: both configurations a given angle can take',
        stem:'One of the angles of an isosceles triangle measures 38°. Taking every triangle for which that is true, what is the sum of all the different possible measures, in degrees, of the largest angle of the triangle?',
        choices:{A:'175', B:'71', C:'104', D:'142'},
        correct:'A',
        expCorrect:'An isosceles triangle has two equal angles, and the given 38° could be the odd one out or one of the matching pair — both have to be checked. Case 1: 38° is the odd angle. The other two are equal and share 180 − 38 = 142°, so each is 71°. The triangle is 38-71-71 and its largest angle is 71°. Case 2: 38° is one of the pair. Then two angles are 38° and the third is 180 − 38 − 38 = 104°. The triangle is 38-38-104 and its largest angle is 104°. Every angle is positive in both triangles, so both are legal and the sum is 71 + 104 = 175.',
        expWrong:{
          B:'71 is the largest angle of only one of the two triangles — the one where 38° sits between the two equal sides. A second, equally legal triangle has angles 38°, 38° and 104°.',
          C:'104 is the largest angle of the other triangle, the one where 38° is a base angle. It is the bigger of the two results, but the question asks for their sum.',
          D:'142 is 104 + 38, adding the given angle instead of the largest angle from the first case. In that case the largest angle is 71, not 38.'
        },
        tip:'When an isosceles triangle hands you one angle without saying which one it is, there are two triangles to test, not one: the angle as the odd one out, and the angle as a member of the pair. Discard only a case that produces a zero or negative angle — which is why an angle of 90° or more can only ever be the odd one.',
        desmos:'Pure arithmetic: (180-38)/2 gives 71 for the first case, 180-2*38 gives 104 for the second, and 71+104 gives 175.',
        desmosLatex:['(180-38)/2','180-2\\cdot38']
      },
      {
        id:'ANG-22', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Polygon: the interior angle sum compared with the exterior angle sum',
        stem:'A convex polygon has n sides, and one exterior angle is drawn at each vertex. The sum of the measures of the interior angles of the polygon is 4 times the sum of the measures of those exterior angles. What is the value of n?',
        answer:'10',
        expCorrect:'The trap is expecting the exterior total to depend on n. It does not: one exterior angle at each vertex of any convex polygon always totals 360°, whether the polygon has 3 sides or 30. So the right-hand side is the fixed number 4 × 360 = 1,440°. The interior total does depend on n: (n − 2)180 = 1,440 → n − 2 = 1,440 ÷ 180 = 8 → n = 10. (Check: a convex polygon with 10 sides has interior angles totalling (10 − 2)180 = 1,440°, and 1,440 = 4 × 360 ✓.)',
        tip:'Interior angle sum is (n − 2)180° and grows with n; exterior angle sum is 360° and never changes. Any question that compares the two is really a one-unknown equation in disguise — write the 360 down as a constant immediately and the problem collapses.',
        desmos:'Type 180(x-2)=1440 in Desmos, reading x as n: it draws the vertical line x = 10.',
        desmosLatex:['180(x-2)=1440']
      },
      {
        id:'ANG-23', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Angle bisector to the opposite side, with the angles given as a ratio',
        stem:'In triangle ABC, the measures of angle A, angle B and angle C are in the ratio 2 : 3 : 4. The bisector of angle C meets side AB at point E. What is the measure, in degrees, of angle AEC?',
        choices:{A:'100', B:'40', C:'80', D:'140'},
        correct:'A',
        expCorrect:'A ratio plus a known total is one unknown in disguise: write the angles as 2t, 3t and 4t. Then 2t + 3t + 4t = 9t = 180 → t = 20, so angle A = 40°, angle B = 60° and angle C = 80°. The bisector cuts angle C into two 40° halves, and the half inside triangle ACE is angle ACE = 40°. Triangle ACE therefore has angles 40°, 40° and angle AEC, so angle AEC = 180 − 40 − 40 = 100°. (Check on the other side: triangle BCE gives 180 − 60 − 40 = 80°, and 100 + 80 = 180 ✓, since A, E and B lie on one line.)',
        expWrong:{
          B:'40 is both angle A and half of angle C — the two angles of triangle ACE that you already had. It is an input to the last step, not the output.',
          C:'80 is angle C, the full angle before the bisector splits it, and it is also angle BEC, the angle at E facing B. That double coincidence makes it tempting, but the angle at E facing A is its supplement, 100°.',
          D:'140 is 180 − 40, which removes only one of the two known angles of triangle ACE. A triangle has three angles, so both 40° pieces have to come off.'
        },
        tip:'Turn a ratio into 2t, 3t, 4t and let the total that must equal 180 pin down t. Then, after any bisector, ask which of the two small triangles contains the angle you were asked for — the other one always hands you the supplement instead.',
        desmos:'Solve 9x=180 in Desmos for x = 20, then evaluate 180-2*40 to get 100.',
        desmosLatex:['9x=180','180-2\\cdot40']
      },
      {
        id:'ANG-24', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Parallel lines and a transversal with two parameters in the angle expressions',
        figure: FIG_TWOPARAM,
        stem:'In the figure, lines m and n are parallel, with m above n, and both are crossed by the transversal t. At the crossing with m, the angle below m and to the right of t measures (a + b)°. At the crossing with n, the angle above n and to the right of t measures (3a − b)°, and the angle below n and to the left of t measures (5b − a)°. What is the value of a − b?',
        choices:{A:'30', B:'45', C:'15', D:'75'},
        correct:'C',
        expCorrect:'Two relationships, two unknowns. The (a + b)° angle sits below m on the right of t and the (3a − b)° angle sits above n on the right of t, so both are interior and on the same side: they are supplementary. (a + b) + (3a − b) = 180 → 4a = 180 → a = 45, with b cancelling on its own. Next, the (5b − a)° angle lies below n on the left of t, which puts it directly across the crossing from the (3a − b)° angle — vertical angles, therefore equal: 5b − a = 3a − b → 6b = 4a = 4(45) = 180 → b = 30. So a − b = 45 − 30 = 15. (Check: the three marked angles are 75°, 105° and 105°, and 75 + 105 = 180 ✓.)',
        expWrong:{
          A:'30 is b. The system was solved correctly and then the wrong value reported; the question asks for the difference a − b.',
          B:'45 is a, the value that drops out of the very first equation. It is the easier half of the work and not the answer.',
          D:'75 is a + b, which is also the measure of the first marked angle. Adding where the question said subtract turns correct work into the wrong final line.'
        },
        tip:'Read the position words — above or below the line, left or right of the transversal — and convert each pair into one of two sentences: "equal" or "adds to 180". Two such sentences give you a system, and it pays to scan for the equation where one unknown cancels by itself: solve that one first.',
        desmos:'In Desmos let x stand for a and y for b: graph x+y+(3x-y)=180 and 5y-x=3x-y. They meet at (45, 30), so a - b = 15.',
        desmosLatex:['x+y+(3x-y)=180','5y-x=3x-y']
      }
    ]
  });
})();
