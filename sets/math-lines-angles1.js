/* SAT Studio question set — Math: Lines, Angles & Triangles (LAT-01 a LAT-12) */
(function(){
  /* Todas las figuras: SVG inline, viewBox propio, role="img" y un aria-label que
     por sí solo alcanza para contestar (es lo único que oye un lector de pantalla).
     Los ángulos dibujados coinciden con los números del enunciado. */

  var FIG_VERTICAL =
    '<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two straight lines crossing at a point P. The angle in the upper region, between the two lines, measures 125 degrees. The angle in the lower region, directly opposite it across P, is labeled open parenthesis 2x plus 15 close parenthesis degrees.">' +
    '<line x1="20" y1="42" x2="240" y2="118" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="40" y1="148" x2="220" y2="13" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="130" cy="80" r="3" fill="#1e1e1e"/>' +
    '<text x="130" y="52" font-size="15" font-family="Georgia,serif" text-anchor="middle">125°</text>' +
    '<text x="130" y="116" font-size="15" font-family="Georgia,serif" text-anchor="middle" fill="#324DC7">(2x + 15)°</text>' +
    '<text x="140" y="99" font-size="13" font-family="Georgia,serif" font-style="italic">P</text>' +
    '<text x="12" y="164" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_COMPLEMENT =
    '<svg viewBox="0 0 270 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right angle AOC with vertex O: ray OA points straight up and ray OC points to the right, and a small square marks the right angle at O. Ray OB lies inside the right angle. Angle AOB, between ray OA and ray OB, is labeled open parenthesis 2x plus 5 close parenthesis degrees. Angle BOC, between ray OB and ray OC, is labeled 3x degrees.">' +
    '<line x1="50" y1="155" x2="240" y2="155" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="50" y1="155" x2="50" y2="25" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="50" y1="155" x2="144" y2="38" stroke="#324DC7" stroke-width="2.5"/>' +
    '<rect x="50" y="145" width="10" height="10" fill="none" stroke="#1e1e1e" stroke-width="1.6"/>' +
    '<text x="88" y="62" font-size="13" font-family="Georgia,serif" text-anchor="middle">(2x + 5)°</text>' +
    '<text x="136" y="118" font-size="13" font-family="Georgia,serif" text-anchor="middle">(3x)°</text>' +
    '<text x="38" y="168" font-size="13" font-family="Georgia,serif" font-style="italic">O</text>' +
    '<text x="44" y="18" font-size="13" font-family="Georgia,serif" font-style="italic">A</text>' +
    '<text x="150" y="32" font-size="13" font-family="Georgia,serif" font-style="italic">B</text>' +
    '<text x="246" y="159" font-size="13" font-family="Georgia,serif" font-style="italic">C</text>' +
    '<text x="12" y="184" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_SAMESIDE =
    '<svg viewBox="0 0 300 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallel lines m and n, both horizontal, with m above n, cut by a slanted transversal. Between the two parallel lines and on the right side of the transversal there are two angles: at the upper intersection, on line m, the angle measures 72 degrees; at the lower intersection, on line n, the angle is labeled y degrees. Both marked angles are interior and both are on the same side of the transversal.">' +
    '<line x1="20" y1="35" x2="280" y2="35" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="20" y1="140" x2="280" y2="140" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="112" y1="10" x2="162" y2="165" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<text x="162" y="64" font-size="15" font-family="Georgia,serif">72°</text>' +
    '<text x="178" y="118" font-size="15" font-family="Georgia,serif" fill="#324DC7" font-style="italic">y°</text>' +
    '<text x="286" y="39" font-size="14" font-family="Georgia,serif" fill="#324DC7">m</text>' +
    '<text x="286" y="144" font-size="14" font-family="Georgia,serif" fill="#324DC7">n</text>' +
    '<text x="12" y="170" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. Lines m and n are parallel.</text>' +
    '</svg>';

  var FIG_TWOSTEP =
    '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallel lines m and n, both horizontal, with m above n, cut by a slanted transversal. At the upper intersection, the angle that sits above line m and to the right of the transversal measures 118 degrees. At the lower intersection, the angle that sits below line n and to the right of the transversal is labeled x degrees.">' +
    '<line x1="20" y1="70" x2="280" y2="70" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="20" y1="150" x2="280" y2="150" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="93" y1="20" x2="183" y2="190" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<text x="147" y="36" font-size="15" font-family="Georgia,serif" text-anchor="middle">118°</text>' +
    '<text x="200" y="174" font-size="15" font-family="Georgia,serif" text-anchor="middle" fill="#324DC7" font-style="italic">x°</text>' +
    '<text x="286" y="74" font-size="14" font-family="Georgia,serif" fill="#324DC7">m</text>' +
    '<text x="286" y="154" font-size="14" font-family="Georgia,serif" fill="#324DC7">n</text>' +
    '<text x="12" y="196" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. Lines m and n are parallel.</text>' +
    '</svg>';

  var FIG_EXTERIOR =
    '<svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A at the lower left, B at the lower right and C at the top. Side AB is extended past B to a point D, so that A, B and D lie on one straight line. Angle A inside the triangle is labeled open parenthesis 2x plus 18 close parenthesis degrees. Angle C at the top vertex is labeled open parenthesis x plus 30 close parenthesis degrees. The exterior angle CBD, between side BC and the extension BD, is labeled 5x degrees.">' +
    '<line x1="40" y1="190" x2="320" y2="190" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="40" y1="190" x2="110" y2="34" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="200" y1="190" x2="110" y2="34" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<g font-family="Georgia,serif" font-size="13">' +
    '<text x="62" y="160">(2x + 18)°</text>' +
    '<text x="114" y="106" text-anchor="middle">(x + 30)°</text>' +
    '<text x="232" y="148" text-anchor="middle" fill="#324DC7">(5x)°</text>' +
    '<g font-style="italic"><text x="28" y="204">A</text><text x="196" y="206">B</text>' +
    '<text x="104" y="24">C</text><text x="324" y="204">D</text></g></g>' +
    '<text x="12" y="214" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_EQUILATERAL =
    '<svg viewBox="0 0 250 208" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A at the lower left, B at the lower right and C at the top. Side AB, along the bottom, is labeled x plus 7. Side BC, on the right, is labeled 3x minus 5. Side AC, on the left, is labeled 2x plus 1.">' +
    '<polygon points="40,165 200,165 120,26" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<text x="120" y="183" font-size="14" font-family="Georgia,serif" text-anchor="middle">x + 7</text>' +
    '<text x="172" y="96" font-size="14" font-family="Georgia,serif">3x − 5</text>' +
    '<text x="68" y="96" font-size="14" font-family="Georgia,serif" text-anchor="end">2x + 1</text>' +
    '<text x="28" y="176" font-size="13" font-family="Georgia,serif" font-style="italic">A</text>' +
    '<text x="206" y="176" font-size="13" font-family="Georgia,serif" font-style="italic">B</text>' +
    '<text x="115" y="18" font-size="13" font-family="Georgia,serif" font-style="italic">C</text>' +
    '<text x="12" y="203" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_SIMILAR =
    '<svg viewBox="0 0 290 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A at the top, B at the lower left and C at the lower right. Point D is on side AB and point E is on side AC, and segment DE is drawn parallel to side BC. On side AB, the piece AD is labeled 6 and the piece DB is labeled 4. Segment DE is labeled 9. Side BC is the unknown length.">' +
    '<polygon points="140,20 40,170 250,170" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="80" y1="110" x2="206" y2="110" stroke="#324DC7" stroke-width="2.5"/>' +
    '<text x="104" y="64" font-size="14" font-family="Georgia,serif" text-anchor="end">6</text>' +
    '<text x="54" y="144" font-size="14" font-family="Georgia,serif" text-anchor="end">4</text>' +
    '<text x="143" y="103" font-size="14" font-family="Georgia,serif" text-anchor="middle" fill="#324DC7">9</text>' +
    '<text x="134" y="14" font-size="13" font-family="Georgia,serif" font-style="italic">A</text>' +
    '<text x="26" y="180" font-size="13" font-family="Georgia,serif" font-style="italic">B</text>' +
    '<text x="256" y="180" font-size="13" font-family="Georgia,serif" font-style="italic">C</text>' +
    '<text x="62" y="112" font-size="13" font-family="Georgia,serif" font-style="italic">D</text>' +
    '<text x="214" y="112" font-size="13" font-family="Georgia,serif" font-style="italic">E</text>' +
    '<text x="12" y="200" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_ZIGZAG =
    '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallel horizontal lines m and n, with m above n. Point A is on line m, point B is on line n, and point P sits between the two lines and to the left of both A and B, so segments AP and BP form a bend at P. At A, the angle between segment AP and the part of line m going left from A measures 34 degrees. At B, the angle between segment BP and the part of line n going left from B measures 52 degrees. The bend angle APB is labeled x degrees.">' +
    '<line x1="20" y1="35" x2="280" y2="35" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="20" y1="165" x2="280" y2="165" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="171" y1="35" x2="60" y2="110" stroke="#324DC7" stroke-width="2.5"/>' +
    '<line x1="60" y1="110" x2="103" y2="165" stroke="#324DC7" stroke-width="2.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="140" y="54" text-anchor="end">34°</text>' +
    '<text x="92" y="156" text-anchor="end">52°</text>' +
    '<text x="84" y="116" fill="#324DC7" font-style="italic">x°</text>' +
    '<text x="286" y="39" fill="#324DC7">m</text><text x="286" y="169" fill="#324DC7">n</text>' +
    '<g font-style="italic"><text x="176" y="29">A</text><text x="106" y="180">B</text>' +
    '<text x="42" y="106">P</text></g></g>' +
    '<text x="12" y="194" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. Lines m and n are parallel.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-lines-angles1',
    title: 'Lines, Angles & Triangles',
    section: 'math',
    level: 'Media',
    description: 'The geometry that is not trig and not circles: parallel lines cut by a transversal, vertical and complementary angles, triangle angle sum and exterior angles, isosceles and equilateral algebra, similarity ratios, congruence and the triangle inequality.',
    minutes: 20,
    questions: [
      {
        id:'LAT-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Vertical angles (solving for a variable)',
        figure: FIG_VERTICAL,
        stem:'In the figure, two straight lines intersect at point P. One of the angles formed measures 125°, and the angle directly opposite it across P is labeled (2x + 15)°. What is the value of x?',
        choices:{A:'20', B:'62.5', C:'70', D:'55'},
        correct:'D',
        expCorrect:'Two angles directly across the intersection from each other are vertical angles, and vertical angles are EQUAL. So 2x + 15 = 125 → 2x = 110 → x = 55. (Check: 2(55) + 15 = 110 + 15 = 125 ✓.)',
        expWrong:{
          A:'20 treats the two marked angles as supplementary: 2x + 15 = 180 − 125 = 55 gives x = 20. That is the rule for the ADJACENT pair; angles across the vertex are equal, not supplementary.',
          B:'62.5 is 125 ÷ 2, which drops the + 15. The constant is part of the expression: subtract 15 first, then divide by 2.',
          C:'70 comes from 2x = 125 + 15 = 140. Moving a + 15 to the other side of an equation makes it − 15, not + 15.'
        },
        tip:'At any crossing of two lines, the angles ACROSS from each other are equal (vertical angles) and the angles NEXT to each other add to 180° (a linear pair). Decide which pair you are looking at BEFORE you write the equation — that choice is the whole question.',
        desmos:'Type 2x+15=125 into Desmos: it draws the vertical line x = 55, which is the solution.',
        desmosLatex:['2x+15=125']
      },
      {
        id:'LAT-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Complementary angles inside a figure',
        figure: FIG_COMPLEMENT,
        stem:'In the figure, angle AOC is a right angle and ray OB lies inside it, splitting it into angle AOB and angle BOC. The measure of angle AOB is (2x + 5)° and the measure of angle BOC is (3x)°. What is the measure, in degrees, of angle BOC?',
        choices:{A:'17', B:'51', C:'39', D:'45'},
        correct:'B',
        expCorrect:'Angle AOC is a right angle, so its two pieces are complementary — they add to 90°, not 180°. (2x + 5) + 3x = 90 → 5x + 5 = 90 → 5x = 85 → x = 17. The question asks for angle BOC = 3x = 3(17) = 51°. (Check: angle AOB = 2(17) + 5 = 39, and 39 + 51 = 90 ✓.)',
        expWrong:{
          A:'17 is the value of x, not an angle measure. Once you have x you still have to substitute it into 3x to get the angle the question named.',
          C:'39 is angle AOB (that is 2x + 5 with x = 17), the OTHER piece of the right angle. The question asks for angle BOC.',
          D:'45 assumes ray OB cuts the right angle exactly in half. Nothing in the figure says OB is a bisector, and the two expressions are different, so the two pieces are not equal.'
        },
        tip:'Complementary = adds to 90° (the two pieces of a right angle). Supplementary = adds to 180° (angles on a straight line). Pick the right total, solve for x, and then re-read which angle was asked for — it is very often not x.',
        desmos:'Solve 5x+5=90 in Desmos: x = 17. Then evaluate 3*17 to get 51.',
        desmosLatex:['5x+5=90','3\\cdot17']
      },
      {
        id:'LAT-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Parallel lines: same-side interior angles',
        figure: FIG_SAMESIDE,
        stem:'In the figure, lines m and n are parallel and are cut by a transversal. The two marked angles are both between lines m and n and both on the right side of the transversal. One of them measures 72° and the other is y°. What is the value of y?',
        choices:{A:'72', B:'18', C:'108', D:'288'},
        correct:'C',
        expCorrect:'Both marked angles are interior (between the parallels) and on the SAME side of the transversal, which makes them same-side interior angles — and those are SUPPLEMENTARY. So y + 72 = 180 → y = 108. (Second route, if you forget the name: the alternate interior angle on the other side equals 72°, and y sits on a straight line with it, so y = 180 − 72 = 108 ✓.)',
        expWrong:{
          A:'72 would be correct for angles on OPPOSITE sides of the transversal (alternate interior) or for corresponding angles. These two are on the same side, so they add to 180 instead of being equal.',
          B:'18 is 90 − 72, the complement. Nothing here is a right angle; the relationship that shows up with parallel lines is 180°, not 90°.',
          D:'288 is 360 − 72. A full turn is 360°, but these two angles are joined by one straight line, and a straight line is 180°.'
        },
        tip:'With two parallel lines and a transversal, every pair of angles is either equal or supplementary — there is no third option. Same side of the transversal and both interior → they add to 180. Opposite sides → they are equal.',
        desmos:'No graph needed: 180-72 gives 108. Use Desmos only to confirm the arithmetic.',
        desmosLatex:['180-72']
      },
      {
        id:'LAT-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Parallel lines: walking two steps to the angle asked for',
        figure: FIG_TWOSTEP,
        stem:'In the figure, lines m and n are parallel and are cut by a transversal. The angle that sits above line m and to the right of the transversal measures 118°. What is the value of x, the measure of the angle that sits below line n and to the right of the transversal?',
        choices:{A:'62', B:'118', C:'28', D:'242'},
        correct:'A',
        expCorrect:'Two hops. Hop 1, corresponding angles: the 118° angle is above m and right of the transversal, so the angle above n and right of the transversal is also 118° — corresponding angles at parallel lines are equal. Hop 2, linear pair: at the lower intersection, that 118° angle and the angle below n on the same side of the transversal sit together on the straight line of the transversal, so x = 180 − 118 = 62. (Check: 118 + 62 = 180 ✓.)',
        expWrong:{
          B:'118 stops after the first hop. That is the angle ABOVE line n; the question asks for the one BELOW it, which is its supplement.',
          C:'28 is 90 − 62, treating the last pair as complementary. Two angles that sit on one straight line add to 180°, not 90°.',
          D:'242 is 360 − 118, using a full turn instead of a straight line. Going all the way around a point is 360°, but the pair here shares a single line: 180°.'
        },
        tip:'Do not hunt for the name of the pair you were handed. Hop instead: corresponding or alternate angles move you to the other intersection with the SAME measure, vertical angles move you across a vertex with the same measure, and a linear pair moves you to the neighbour with 180 minus. Two or three hops reach any angle in the figure.',
        desmos:'No graph needed: 180-118 gives 62.',
        desmosLatex:['180-118']
      },
      {
        id:'LAT-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Exterior angle equals the two remote interior angles',
        figure: FIG_EXTERIOR,
        stem:'In the figure, side AB of triangle ABC is extended past B to point D. The measure of angle A is (2x + 18)°, the measure of angle C is (x + 30)°, and the measure of the exterior angle CBD is (5x)°. What is the measure, in degrees, of angle CBD?',
        choices:{A:'24', B:'66', C:'60', D:'120'},
        correct:'D',
        expCorrect:'An exterior angle of a triangle equals the SUM of the two remote interior angles — the two it is not touching. Here those are angle A and angle C: 5x = (2x + 18) + (x + 30) = 3x + 48 → 2x = 48 → x = 24. Then angle CBD = 5x = 5(24) = 120°. (Check: angle A = 2(24) + 18 = 66°, angle C = 24 + 30 = 54°, and 66 + 54 = 120 ✓. The interior angle at B is 180 − 120 = 60°, and 66 + 54 + 60 = 180 ✓.)',
        expWrong:{
          A:'24 is the value of x, not an angle. Substitute it back: the exterior angle is 5x = 120°.',
          B:'66 is angle A alone (2x + 18 with x = 24). The exterior angle equals the SUM of both remote interior angles, 66 + 54 = 120.',
          C:'60 is the INTERIOR angle at B (180 − 120). The question asks for angle CBD, the one outside the triangle on the extension.'
        },
        tip:'Exterior angle = the two remote interior angles added together. It falls straight out of two rules you already have: the three interior angles add to 180, and the exterior angle is 180 minus the interior angle next to it. Then check whether the question wanted x, the interior angle, or the exterior one.',
        desmos:'Solve 5x=3x+48 in Desmos: x = 24, so 5x = 120.',
        desmosLatex:['5x=3x+48']
      },
      {
        id:'LAT-06', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Equilateral triangle: algebra from setting sides equal',
        figure: FIG_EQUILATERAL,
        stem:'In triangle ABC, AB = x + 7, BC = 3x − 5, and AC = 2x + 1. If triangle ABC is equilateral, what is the perimeter of triangle ABC?',
        choices:{A:'6', B:'39', C:'13', D:'26'},
        correct:'B',
        expCorrect:'Equilateral means all three sides are equal, so set any two expressions equal and solve: x + 7 = 3x − 5 → 12 = 2x → x = 6. Now confirm with the third side: x + 7 = 13, 3x − 5 = 13, and 2x + 1 = 13 — all three agree ✓. Perimeter = 13 + 13 + 13 = 39.',
        expWrong:{
          A:'6 is the value of x, not a length. Substitute it back: each side is 13, and the perimeter is 3 × 13 = 39.',
          C:'13 is the length of ONE side. The perimeter is the total distance around, so it is the sum of all three sides.',
          D:'26 adds only two of the three sides. An equilateral triangle still has three of them: 3 × 13 = 39.'
        },
        tip:'Equal sides → set the expressions equal and solve for the variable. Then do the two steps everyone skips: substitute the value back to get the actual lengths, and re-read whether the question wants x, one side, or the perimeter.',
        desmos:'Graph y=x+7 and y=3x-5 and read the intersection: (6, 13). The x-value is the variable, the y-value is the common side length.',
        desmosLatex:['y=x+7','y=3x-5']
      },
      {
        id:'LAT-07', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Similar triangles from a parallel side (ratio of corresponding sides)',
        figure: FIG_SIMILAR,
        stem:'In the figure, point D lies on side AB of triangle ABC and point E lies on side AC, and segment DE is parallel to side BC. If AD = 6, DB = 4, and DE = 9, what is the length of BC?',
        choices:{A:'13.5', B:'6', C:'22.5', D:'15'},
        correct:'D',
        expCorrect:'Because DE is parallel to BC, triangle ADE has the same three angles as triangle ABC, so the two triangles are similar. The side that corresponds to AD is the WHOLE side AB, and AB = AD + DB = 6 + 4 = 10. So AD/AB = DE/BC → 6/10 = 9/BC → 6 · BC = 90 → BC = 15. (Check: 9/15 = 0.6 and 6/10 = 0.6 ✓.)',
        expWrong:{
          A:'13.5 is 9 × (6/4), using the ratio of the two PIECES of AB. AD and DB are pieces of the same side; the comparison that matters is the small triangle against the whole one, so AD goes with AB = 10.',
          B:'6 is 9 × (4/6), which both flips the ratio and uses the wrong pair of lengths. Triangle ABC contains triangle ADE, so BC has to come out LONGER than DE, never shorter.',
          C:'22.5 is 9 × (10/4), matching AB with DB. Inside the small triangle the side that corresponds to AB is AD, not the leftover piece DB.'
        },
        tip:'A line drawn parallel to one side cuts off a triangle similar to the whole one. Line up whole with whole: the short side AD corresponds to the ENTIRE side AB = AD + DB. Matching AD with the leftover piece DB is the single most common error in these.',
        desmos:'In Desmos solve 6/10=9/b: it gives b = 15. Or just evaluate 9*(10/6).',
        desmosLatex:['9\\cdot(10/6)']
      },
      {
        id:'LAT-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Triangle inequality (which third side is possible)',
        stem:'Two sides of a triangle have lengths 8 and 15. Which of the following could be the length of the third side of the triangle?',
        choices:{A:'7', B:'6', C:'12', D:'23'},
        correct:'C',
        expCorrect:'The triangle inequality says the third side must be longer than the difference of the other two and shorter than their sum. Difference = 15 − 8 = 7 and sum = 15 + 8 = 23, so the third side s must satisfy 7 &lt; s &lt; 23. Of the four choices, only 12 is strictly inside that range. (Check with 12: 8 + 12 = 20 &gt; 15 ✓, 8 + 15 = 23 &gt; 12 ✓, 12 + 15 = 27 &gt; 8 ✓.)',
        expWrong:{
          A:'7 is exactly the difference 15 − 8. At that value the sides collapse onto one straight line (8 + 7 = 15 exactly) and there is no triangle at all. The inequality is strict, so the endpoint is out.',
          B:'6 is smaller than the difference: 8 + 6 = 14, which is shorter than 15, so the two short sides cannot reach across the long one and never meet.',
          D:'23 is exactly the sum 15 + 8. Again the triangle flattens into a straight segment with zero area, so the third side has to be strictly LESS than the sum.'
        },
        tip:'For sides a and b, the third side lives strictly between the difference and the sum: |a − b| &lt; third &lt; a + b. The two endpoints themselves always fail — they give a flat, zero-area triangle — so a choice equal to the sum or to the difference is there to catch you.',
        desmos:'Nothing to graph: compute 15-8 and 15+8 in Desmos to fix the range 7 to 23 in your head.',
        desmosLatex:['15-8','15+8']
      },
      {
        id:'LAT-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Similar triangles: from the ratio of areas back to a side',
        stem:'Triangle ABC is similar to triangle DEF. The area of triangle ABC is 25 and the area of triangle DEF is 64. If side AB has length 10, what is the length of the corresponding side DE?',
        choices:{A:'16', B:'25.6', C:'13', D:'6.25'},
        correct:'A',
        expCorrect:'For similar figures the ratio of AREAS is the SQUARE of the ratio of sides, so going from areas back to lengths means taking a square root. Area ratio ABC : DEF = 25 : 64, so the side ratio is √25 : √64 = 5 : 8. Then AB/DE = 5/8 → 10/DE = 5/8 → 5 · DE = 80 → DE = 16. (Check: (10/16)² = (5/8)² = 25/64 ✓.)',
        expWrong:{
          B:'25.6 applies the area ratio straight to the sides: 10 × 64/25 = 25.6. Areas grow by the SQUARE of the side ratio, so the square root has to come out before the ratio touches a length.',
          C:'13 takes √25 = 5 and √64 = 8, sees a gap of 3 and adds it: 10 + 3 = 13. Similar figures are scaled by MULTIPLYING by the ratio, never by adding a constant to every side.',
          D:'6.25 is 10 × 5/8, the side ratio used upside down. Triangle DEF has the larger area, so DE has to come out longer than AB, not shorter.'
        },
        tip:'Sides → areas: SQUARE the ratio. Areas → sides: square-ROOT the ratio. Write the two areas as a ratio first, take the root, and only then set up the proportion of lengths. (For volumes the exponent is 3 instead of 2.)',
        desmos:'In Desmos, sqrt(25/64) gives 0.625, which is 5/8. Then 10/0.625 gives 16.',
        desmosLatex:['\\sqrt{25/64}','10/0.625']
      },
      {
        id:'LAT-10', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Zig-zag between two parallel lines (auxiliary parallel)',
        figure: FIG_ZIGZAG,
        stem:'In the figure, lines m and n are parallel. Point A is on line m, point B is on line n, and point P lies between the two lines and to the left of both A and B. Segment AP makes an angle of 34° with line m and segment BP makes an angle of 52° with line n, as marked. What is the measure, in degrees, of angle APB?',
        choices:{A:'94', B:'18', C:'86', D:'146'},
        correct:'C',
        expCorrect:'Draw the extra line these questions always want: the line through P parallel to both m and n. It cuts angle APB into an upper piece and a lower piece. The upper piece and the 34° angle at A are alternate interior angles for the parallel pair m and the new line, so the upper piece is 34°. The lower piece and the 52° angle at B are alternate interior angles for the pair n and the new line, so the lower piece is 52°. Therefore angle APB = 34 + 52 = 86°.',
        expWrong:{
          A:'94 comes from 180 − 34 − 52, treating the three marked angles as the angles of one triangle. They are not: A, B and P do not close a triangle with the two parallel lines, and the auxiliary line shows the bend ADDS the two angles instead.',
          B:'18 subtracts them (52 − 34). Subtraction is what happens when the bend point is OUTSIDE the strip between the parallels. With P between the lines, the two alternate interior angles stack on the same side of the auxiliary line and add.',
          D:'146 is 180 − 34, the angle on the other side of A along line m. It is a real angle in the picture, but it never enters the calculation of angle APB.'
        },
        tip:'Whenever a path zig-zags across the strip between two parallel lines, draw the line through the bend parallel to both. The bend splits into two alternate interior angles, so the bend angle equals the SUM of the two angles at the parallel lines.',
        desmos:'Nothing to graph: the whole question is 34+52. Use Desmos only to check the arithmetic.',
        desmosLatex:['34+52']
      },
      {
        id:'LAT-11', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Isosceles triangle: base angles plus the 180° sum',
        stem:'In triangle ABC, AB = AC. The measure of angle A is 30° less than the measure of angle B. What is the measure, in degrees, of angle B?',
        answer:'70',
        expCorrect:'AB = AC, so the angles OPPOSITE those two sides are equal: angle C (opposite AB) equals angle B (opposite AC). Call that shared value b. The problem says angle A = b − 30. The three angles of a triangle add to 180: (b − 30) + b + b = 180 → 3b − 30 = 180 → 3b = 210 → b = 70. (Check: angle A = 70 − 30 = 40, and 40 + 70 + 70 = 180 ✓.)',
        expWrong:{},
        tip:'Equal sides → equal angles, and the equal angles are the ones OPPOSITE those sides — not the ones between them. Give the repeated angle a single letter, write the 180° sum entirely in that letter, and solve one linear equation.',
        desmos:'Solve 3x-30=180 in Desmos: x = 70, the measure of angle B.',
        desmosLatex:['3x-30=180']
      },
      {
        id:'LAT-12', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Congruent triangles: reading the correspondence from the statement',
        stem:'Triangle ABC is congruent to triangle DEF, with vertex A corresponding to vertex D, B to E, and C to F. If AB = 3x − 4, DE = x + 8, BC = 2y + 1, and EF = 15, what is the value of x + y?',
        answer:'13',
        expCorrect:'Congruent triangles have equal corresponding parts, and the order of the letters in the statement tells you which parts match: AB matches DE (first two letters against first two letters) and BC matches EF. So 3x − 4 = x + 8 → 2x = 12 → x = 6, and 2y + 1 = 15 → 2y = 14 → y = 7. Then x + y = 6 + 7 = 13. (Check: AB = 3(6) − 4 = 14 and DE = 6 + 8 = 14 ✓; BC = 2(7) + 1 = 15 = EF ✓.)',
        expWrong:{},
        tip:'In a congruence or similarity statement the ORDER of the letters is the instruction manual: first letter with first, second with second. So AB goes with DE, BC with EF, CA with FD. Match the parts that way before writing any equation, and finish by reading which combination the question asked for.',
        desmos:'Solve 3x-4=x+8 and 2y+1=15 in Desmos: x = 6 and y = 7, so x + y = 13.',
        desmosLatex:['3x-4=x+8','2y+1=15']
      }
    ]
  });
})();
