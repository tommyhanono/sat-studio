/* SAT Studio question set — Math: Geometry & Trigonometry (GTB-01 a GTB-34) */
(function(){
  /* Figuras: SVG inline, viewBox propio, role="img" y un aria-label que por sí
     solo alcanza para contestar (es lo único que oye un lector de pantalla).
     Cada medida dibujada coincide con el enunciado y con la explicación.
     OJO con el detector de español: la palabra inglesa "triangular" cae en
     el patron triangul del detector, así que acá se dice "in the shape of a triangle".
     OJO con skillOf(): prueba Circles → Right triangles → Area and volume →
     Lines, angles and triangles sobre skill + los primeros 160 caracteres del
     stem. Por eso las de volumen no dicen "radius" temprano (dicen "across") y
     las de líneas y ángulos no dicen "area", "volume" ni "dimension". */

  var NOTA = '<text x="12" y="YY" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>';

  /* ---------- Circles ---------- */

  var FIG_CENTRAL =
    '<svg viewBox="0 0 260 244" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with center O. Points A and B are on the circle, below the center, and both radii OA and OB are drawn. The central angle AOB, at the center between the two radii, measures 110 degrees. Point C is on the circle at the top, on the major arc AB, and the chords CA and CB are drawn. The inscribed angle ACB, at C between the two chords, is labeled x degrees.">' +
    '<circle cx="130" cy="120" r="90" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="130" y1="120" x2="56.3" y2="171.6" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<line x1="130" y1="120" x2="203.7" y2="171.6" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<line x1="130" y1="30" x2="56.3" y2="171.6" stroke="#324DC7" stroke-width="2.2"/>' +
    '<line x1="130" y1="30" x2="203.7" y2="171.6" stroke="#324DC7" stroke-width="2.2"/>' +
    '<circle cx="130" cy="120" r="3" fill="#1e1e1e"/>' +
    '<g font-family="Georgia,serif" font-size="15">' +
    '<text x="130" y="152" text-anchor="middle">110°</text>' +
    '<text x="130" y="68" text-anchor="middle" font-size="14" fill="#324DC7" font-style="italic">x°</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="42" y="184">A</text><text x="212" y="182">B</text>' +
    '<text x="130" y="22" text-anchor="middle">C</text><text x="138" y="114">O</text></g>' +
    NOTA.replace('YY', '238') + '</svg>';

  var FIG_TANGENT =
    '<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with center O. Point P is on the circle and point Q is outside the circle. The line through P and Q touches the circle only at P, and a small square at P marks the right angle between the radius OP and the line PQ. The radius OP measures 7. The segment OQ, from the center to the outside point, measures 25. The length of the segment PQ is unknown.">' +
    '<circle cx="60" cy="130" r="35" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="31.4" y1="85.2" x2="209" y2="137" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="60" y1="130" x2="69.8" y2="96.4" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<line x1="60" y1="130" x2="185" y2="130" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<polygon points="69.8,96.4 79.4,99.2 76.6,108.8 67,106" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<circle cx="60" cy="130" r="3" fill="#1e1e1e"/><circle cx="185" cy="130" r="3" fill="#1e1e1e"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="76" y="118">7</text><text x="122" y="148" text-anchor="middle">25</text>' +
    '<text x="132" y="104" text-anchor="middle" fill="#324DC7">?</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="50" y="146">O</text><text x="60" y="90">P</text><text x="190" y="124">Q</text></g>' +
    NOTA.replace('YY', '194') + '</svg>';

  var FIG_CHORDS =
    '<svg viewBox="0 0 280 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with two chords that cross inside it at point E. Chord AC runs from A on the left to C on the right. Chord BD runs from B, near the top, down to D on the lower right. On chord AC, the piece AE measures 6 and the piece EC measures 8. On chord BD, the piece BE is labeled x and the piece ED is labeled x plus 13.">' +
    '<circle cx="140" cy="135" r="100" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="77" y1="70.7" x2="203" y2="70.7" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<line x1="116" y1="48.2" x2="210.8" y2="190.6" stroke="#324DC7" stroke-width="2.2"/>' +
    '<circle cx="131" cy="70.7" r="3" fill="#1e1e1e"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="104" y="88" text-anchor="middle">6</text><text x="167" y="88" text-anchor="middle">8</text>' +
    '<text x="137" y="52" fill="#324DC7" font-style="italic">x</text>' +
    '<text x="182" y="130" fill="#324DC7" font-style="italic">x + 13</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="58" y="66">A</text><text x="211" y="66">C</text><text x="98" y="40">B</text>' +
    '<text x="220" y="202">D</text><text x="140" y="64">E</text></g>' +
    NOTA.replace('YY', '244') + '</svg>';

  var FIG_SQUARE_CIRCLE =
    '<svg viewBox="0 0 240 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A square drawn inside a circle so that all four corners of the square touch the circle. The center of the circle, marked O, is also the center of the square. Each side of the square measures 10, and the label 10 is written along the bottom side.">' +
    '<circle cx="120" cy="118" r="63.64" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<polygon points="75,73 165,73 165,163 75,163" fill="none" stroke="#324DC7" stroke-width="2.5"/>' +
    '<circle cx="120" cy="118" r="3" fill="#1e1e1e"/>' +
    '<text x="120" y="157" font-size="15" font-family="Georgia,serif" text-anchor="middle">10</text>' +
    '<text x="127" y="113" font-size="13" font-family="Georgia,serif" font-style="italic">O</text>' +
    NOTA.replace('YY', '199') + '</svg>';

  var FIG_INCIRCLE =
    '<svg viewBox="0 0 250 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A right triangle ABC with the right angle at C, marked by a small square. The vertical side AC measures 10, the horizontal side CB measures 24, and the slanted side AB measures 26. A circle is drawn inside the triangle so that it just touches all three sides, and a segment labeled r runs from the center of that circle straight down to the horizontal side.">' +
    '<polygon points="40,110 40,180 208,180" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="40" y1="110" x2="208" y2="180" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="68" cy="152" r="28" fill="none" stroke="#324DC7" stroke-width="2.2"/>' +
    '<line x1="68" y1="152" x2="68" y2="180" stroke="#324DC7" stroke-width="2"/>' +
    '<circle cx="68" cy="152" r="2.5" fill="#324DC7"/>' +
    '<rect x="40" y="168" width="12" height="12" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="30" y="148" text-anchor="end">10</text><text x="124" y="196" text-anchor="middle">24</text>' +
    '<text x="140" y="130" text-anchor="middle">26</text>' +
    '<text x="75" y="169" fill="#324DC7" font-style="italic">r</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="30" y="104">A</text><text x="214" y="188">B</text><text x="26" y="192">C</text></g>' +
    NOTA.replace('YY', '219') + '</svg>';

  /* ---------- Right triangles and trigonometry ---------- */

  var FIG_POLE =
    '<svg viewBox="0 0 300 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A vertical pole standing on level ground, 30 feet tall, with a small square marking the right angle where it meets the ground. A straight beam runs from the top of the pole down to a point on the ground to the left. At that ground point, the angle between the ground and the beam measures 30 degrees. The length of the beam is unknown.">' +
    '<line x1="20" y1="180" x2="280" y2="180" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="200" y1="180" x2="200" y2="90" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="44.1" y1="180" x2="200" y2="90" stroke="#324DC7" stroke-width="2.5"/>' +
    '<rect x="188" y="168" width="12" height="12" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="208" y="138">30 ft</text><text x="64" y="172" font-size="13">30°</text>' +
    '<text x="112" y="126" fill="#324DC7">?</text></g>' +
    NOTA.replace('YY', '209') + '</svg>';

  var FIG_RAMP =
    '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A ramp shown as a right triangle sitting on level ground. The ramp surface slopes up from a point on the ground on the left to a doorway on the right. At the left end, the angle between the ground and the ramp surface measures 12 degrees. At the right end, a vertical segment labeled 3 ft joins the top of the ramp down to the ground, and a small square marks the right angle there. The length of the ramp surface is unknown.">' +
    '<line x1="20" y1="170" x2="280" y2="170" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="40" y1="170" x2="209.4" y2="108" stroke="#324DC7" stroke-width="2.5"/>' +
    '<line x1="209.4" y1="108" x2="209.4" y2="170" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<path d="M78,170 A38,38 0 0 0 75.7,156.9" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<rect x="197.4" y="158" width="12" height="12" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="218" y="142">3 ft</text><text x="84" y="166" font-size="12">12°</text>' +
    '<text x="116" y="132" fill="#324DC7">?</text></g>' +
    NOTA.replace('YY', '204') + '</svg>';

  var FIG_ALTITUDE =
    '<svg viewBox="0 0 280 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A right triangle PQR with the right angle at Q, marked by a small square. The side PR is horizontal along the bottom. From Q, a vertical segment QS drops straight down to PR, meeting it at S, and a small square marks the right angle at S. On PR, the piece PS measures 4 and the piece SR measures 9. The length of QS is unknown.">' +
    '<polygon points="50,180 232,180 106,96" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="106" y1="96" x2="106" y2="180" stroke="#324DC7" stroke-width="2.2"/>' +
    '<polygon points="106,96 99.3,106 109.3,112.7 116,102.7" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<rect x="106" y="168" width="12" height="12" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="78" y="196" text-anchor="middle">4</text><text x="169" y="196" text-anchor="middle">9</text>' +
    '<text x="114" y="142" fill="#324DC7">?</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="40" y="192">P</text><text x="98" y="90">Q</text><text x="238" y="192">R</text>' +
    '<text x="106" y="196" text-anchor="middle">S</text></g>' +
    NOTA.replace('YY', '211') + '</svg>';

  var FIG_SHADOW =
    '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A flagpole standing straight up on level ground, with a small square marking the right angle at its base. Its shadow stretches 21 feet to the left along the ground. A straight ray of sunlight runs from the top of the pole down to the far tip of the shadow, and at that tip the angle between the ground and the ray measures 53 degrees. The height of the pole is labeled h.">' +
    '<line x1="20" y1="200" x2="270" y2="200" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="200" y1="200" x2="200" y2="32.8" stroke="#1e1e1e" stroke-width="3"/>' +
    '<line x1="74" y1="200" x2="200" y2="32.8" stroke="#324DC7" stroke-width="2.2"/>' +
    '<rect x="188" y="188" width="12" height="12" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="137" y="218" text-anchor="middle">21 ft</text>' +
    '<text x="96" y="191" font-size="13">53°</text>' +
    '<text x="208" y="120" fill="#324DC7" font-style="italic">h</text></g>' +
    NOTA.replace('YY', '232') + '</svg>';

  /* ---------- Area and volume ---------- */

  var FIG_LSHAPE =
    '<svg viewBox="0 0 260 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A flat piece shaped like the letter L, made of a large rectangle with a rectangle cut out of its upper right corner. Going clockwise from the upper left corner, the sides measure 7, then 3 going down, then 5 going right, then 5 going down, then 12 along the bottom, then 8 going up the left side. All angles in the piece are right angles.">' +
    '<polygon points="40,40 145,40 145,85 220,85 220,160 40,160" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="92" y="32" text-anchor="middle">7</text>' +
    '<text x="153" y="64">3</text>' +
    '<text x="182" y="78" text-anchor="middle">5</text>' +
    '<text x="228" y="128">5</text>' +
    '<text x="130" y="178" text-anchor="middle">12</text>' +
    '<text x="32" y="106" text-anchor="end">8</text></g>' +
    NOTA.replace('YY', '198') + '</svg>';

  var FIG_POST =
    '<svg viewBox="0 0 280 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A concrete post in the shape of a cylinder standing upright, with a smaller cylinder hollowed out through it from top to bottom. The outer cylinder measures 12 centimeters across and the hollow opening measures 8 centimeters across. The post is 20 centimeters tall.">' +
    '<line x1="70" y1="30" x2="70" y2="38" stroke="#757575" stroke-width="1.5"/>' +
    '<line x1="190" y1="30" x2="190" y2="38" stroke="#757575" stroke-width="1.5"/>' +
    '<line x1="70" y1="34" x2="190" y2="34" stroke="#757575" stroke-width="1.5"/>' +
    '<ellipse cx="130" cy="55" rx="60" ry="18" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<ellipse cx="130" cy="55" rx="40" ry="12" fill="none" stroke="#324DC7" stroke-width="2.2"/>' +
    '<line x1="70" y1="55" x2="70" y2="185" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="190" y1="55" x2="190" y2="185" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<path d="M70,185 A60,18 0 0 0 190,185" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="210" y1="55" x2="218" y2="55" stroke="#757575" stroke-width="1.5"/>' +
    '<line x1="210" y1="185" x2="218" y2="185" stroke="#757575" stroke-width="1.5"/>' +
    '<line x1="214" y1="55" x2="214" y2="185" stroke="#757575" stroke-width="1.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="130" y="26" text-anchor="middle">12 cm</text>' +
    '<text x="130" y="60" text-anchor="middle" font-size="12" fill="#324DC7">8 cm</text>' +
    '<text x="222" y="124">20 cm</text></g>' +
    NOTA.replace('YY', '222') + '</svg>';

  var FIG_SILO =
    '<svg viewBox="0 0 250 264" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A grain silo made of a cylinder with a cone sitting on top of it, like a pointed roof. The cylinder is 10 meters tall, the cone is 4 meters tall, and the silo measures 6 meters across at its widest.">' +
    '<line x1="120" y1="46" x2="87" y2="90" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="120" y1="46" x2="153" y2="90" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<ellipse cx="120" cy="90" rx="33" ry="11" fill="none" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<line x1="87" y1="90" x2="87" y2="200" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="153" y1="90" x2="153" y2="200" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<path d="M87,200 A33,11 0 0 0 153,200" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="164" y1="46" x2="172" y2="46" stroke="#757575" stroke-width="1.5"/>' +
    '<line x1="164" y1="90" x2="172" y2="90" stroke="#757575" stroke-width="1.5"/>' +
    '<line x1="168" y1="46" x2="168" y2="90" stroke="#757575" stroke-width="1.5"/>' +
    '<line x1="164" y1="200" x2="172" y2="200" stroke="#757575" stroke-width="1.5"/>' +
    '<line x1="168" y1="90" x2="168" y2="200" stroke="#757575" stroke-width="1.5"/>' +
    '<line x1="87" y1="218" x2="87" y2="226" stroke="#757575" stroke-width="1.5"/>' +
    '<line x1="153" y1="218" x2="153" y2="226" stroke="#757575" stroke-width="1.5"/>' +
    '<line x1="87" y1="222" x2="153" y2="222" stroke="#757575" stroke-width="1.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="176" y="72">4 m</text><text x="176" y="150">10 m</text>' +
    '<text x="120" y="240" text-anchor="middle">6 m</text></g>' +
    NOTA.replace('YY', '258') + '</svg>';

  /* ---------- Lines, angles and triangles ---------- */

  var FIG_ALTINT =
    '<svg viewBox="0 0 310 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two parallel horizontal lines, p on top and q below, cut by a slanted transversal that runs down to the right. At the upper crossing, on line p, the angle that lies below p and to the right of the transversal is labeled open parenthesis 3x minus 10 close parenthesis degrees. At the lower crossing, on line q, the angle that lies above q and to the left of the transversal is labeled open parenthesis x plus 40 close parenthesis degrees. The two labeled angles are both between the parallel lines and on opposite sides of the transversal.">' +
    '<line x1="20" y1="45" x2="290" y2="45" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="20" y1="145" x2="290" y2="145" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="95" y1="18" x2="205" y2="172" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="146" y="66">(3x − 10)°</text>' +
    '<text x="154" y="128" text-anchor="end">(x + 40)°</text>' +
    '<text x="296" y="49" fill="#324DC7">p</text><text x="296" y="149" fill="#324DC7">q</text></g>' +
    '<text x="12" y="184" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. Lines p and q are parallel.</text>' +
    '</svg>';

  var FIG_EXTERIOR2 =
    '<svg viewBox="0 0 330 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A triangle RST with R at the lower left, S at the lower right and T at the top. The side RS is extended past S to a point W, so that R, S and W all lie on one straight horizontal line. The angle at R inside the triangle measures 39 degrees and the angle at T measures 84 degrees. The exterior angle TSW, between the side ST and the extension SW, is unknown.">' +
    '<line x1="40" y1="180" x2="300" y2="180" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="40" y1="180" x2="144.85" y2="95.09" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="200" y1="180" x2="144.85" y2="95.09" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="70" y="170">39°</text>' +
    '<text x="140" y="120" text-anchor="middle" font-size="13">84°</text>' +
    '<text x="218" y="162" fill="#324DC7">?</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="30" y="194">R</text><text x="196" y="196">S</text>' +
    '<text x="139" y="86">T</text><text x="304" y="196">W</text></g>' +
    NOTA.replace('YY', '214') + '</svg>';

  var FIG_BISECTOR =
    '<svg viewBox="0 0 280 212" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A triangle JKL with J at the lower left, K at the lower right and L at the top. The angle at J measures 52 degrees and the angle at K measures 68 degrees. A segment LM is drawn from L down to a point M on side JK, and LM cuts the angle at L into two equal pieces. The angle JLM, between side LJ and the segment LM, is unknown.">' +
    '<polygon points="50,180 230,180 168.6,28.2" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="168.6" y1="28.2" x2="147.3" y2="180" stroke="#324DC7" stroke-width="2.2"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="74" y="170">52°</text><text x="212" y="170" text-anchor="end">68°</text>' +
    '<text x="150" y="70" text-anchor="middle" fill="#324DC7">?</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="38" y="194">J</text><text x="236" y="194">K</text>' +
    '<text x="164" y="20">L</text><text x="144" y="196">M</text></g>' +
    NOTA.replace('YY', '206') + '</svg>';

  var FIG_SIMILAR2 =
    '<svg viewBox="0 0 320 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two triangles of the same shape but different sizes, side by side. The smaller one is ABC, with A at the lower left, B at the lower right and C at the top; its bottom side AB measures 15. The larger one is DEF, with D at the lower left, E at the lower right and F at the top; its bottom side DE measures 25. Vertex A corresponds to D, B corresponds to E and C corresponds to F.">' +
    '<polygon points="30,155 105,155 78,119" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<polygon points="160,155 285,155 240,95" fill="none" stroke="#324DC7" stroke-width="2.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="67" y="172" text-anchor="middle">15</text>' +
    '<text x="222" y="172" text-anchor="middle" fill="#324DC7">25</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="22" y="166">A</text><text x="109" y="166">B</text><text x="74" y="111">C</text>' +
    '<text x="150" y="166">D</text><text x="290" y="166">E</text><text x="236" y="87">F</text></g>' +
    NOTA.replace('YY', '198') + '</svg>';

  var FIG_PARTRI =
    '<svg viewBox="0 0 310 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two parallel horizontal lines, m on top and n below. Point P is on line m, and points R and Q are on line n, with R to the left of Q. The segments PR and PQ are drawn, forming a triangle PQR whose base RQ lies along line n. Inside the triangle, the angle at R measures 62 degrees and the angle at P measures 81 degrees. At P, the angle between the part of line m that runs to the right of P and the segment PQ is labeled open parenthesis 4x plus 5 close parenthesis degrees.">' +
    '<line x1="20" y1="70" x2="290" y2="70" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="20" y1="170" x2="290" y2="170" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="113.2" y1="70" x2="60" y2="170" stroke="#324DC7" stroke-width="2.5"/>' +
    '<line x1="113.2" y1="70" x2="245.9" y2="170" stroke="#324DC7" stroke-width="2.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="80" y="162">62°</text>' +
    '<text x="120" y="94" text-anchor="middle" font-size="13">81°</text>' +
    '<text x="150" y="86">(4x + 5)°</text>' +
    '<text x="296" y="74" fill="#324DC7">m</text><text x="296" y="174" fill="#324DC7">n</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="108" y="62">P</text><text x="250" y="186">Q</text><text x="52" y="186">R</text></g>' +
    '<text x="12" y="204" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. Lines m and n are parallel.</text>' +
    '</svg>';

  var FIG_ISOBIS =
    '<svg viewBox="0 0 270 218" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A triangle ABC with A at the top, B at the lower left and C at the lower right. Sides AB and AC are marked with matching tick marks to show they have the same length. The angle at A measures 44 degrees. A segment BD is drawn from B to a point D on side AC, and BD cuts the angle at B into two equal pieces. The angle BDC, at D between the segment DB and the part of side AC that runs down to C, is unknown.">' +
    '<polygon points="135,66.2 85,190 185,190" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="85" y1="190" x2="163.6" y2="136.9" stroke="#324DC7" stroke-width="2.2"/>' +
    '<line x1="111.9" y1="107.3" x2="123.1" y2="111.7" stroke="#1e1e1e" stroke-width="2"/>' +
    '<line x1="146.9" y1="111.7" x2="158.1" y2="107.3" stroke="#1e1e1e" stroke-width="2"/>' +
    '<g font-family="Georgia,serif" font-size="13">' +
    '<text x="135" y="108" text-anchor="middle">44°</text>' +
    '<text x="156" y="164" text-anchor="middle" font-size="14" fill="#324DC7">?</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="130" y="58">A</text><text x="72" y="202">B</text>' +
    '<text x="190" y="202">C</text><text x="172" y="134">D</text></g>' +
    NOTA.replace('YY', '212') + '</svg>';

  window.SAT_SETS.push({
    id: 'math-geo-b',
    title: 'Geometry & Trigonometry — Full Domain',
    section: 'math',
    level: 'Difícil',
    description: 'One pass through the whole geometry domain: circles and their equations, arcs and sectors, right-triangle trigonometry, area and volume with scaling and unit traps, and the angle rules for parallel lines, triangles and polygons.',
    minutes: 45,
    questions: [

      /* ===== Circles ===== */
      {
        id:'GTB-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Equation of a circle: radius against diameter',
        stem:'In the xy-plane, the graph of (x + 4)² + (y − 7)² = 81 is a circle. What is the length of the diameter of the circle?',
        choices:{A:'9', B:'81', C:'18', D:'162'},
        correct:'C',
        expCorrect:'In the form (x − h)² + (y − k)² = r², the number on the right is r², not r. So r² = 81 and r = 9. The question asks for the diameter, which is twice the radius: 2(9) = 18. (Check: a circle centered at (−4, 7) with radius 9 reaches from x = −13 to x = 5, a span of 18 ✓.)',
        expWrong:{
          A:'9 is the radius. The diameter is twice that. Reading which one the question wants is half of these questions.',
          B:'81 is r², the number sitting on the right side of the equation. Take the square root before you do anything else.',
          D:'162 doubles 81 instead of doubling the radius. Square root first, then double: 81 → 9 → 18.'
        },
        tip:'The right side of a circle equation is ALWAYS r², never r and never the diameter. Write r = √(right side) on your paper first, then answer whatever was asked: radius, diameter or circumference.',
        desmos:'Graph (x+4)^2+(y-7)^2=81. Trace the circle: it stretches 18 units wide, and its center sits at (−4, 7).',
        desmosLatex:['(x+4)^2+(y-7)^2=81']
      },
      {
        id:'GTB-02', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Completing the square to find the center and radius of a circle',
        stem:'In the xy-plane, the graph of x² + y² − 10x + 6y − 2 = 0 is a circle. What is the radius of the circle?',
        answer:'6',
        expCorrect:'Group and complete the square in both variables. x² − 10x becomes (x − 5)² − 25, and y² + 6y becomes (y + 3)² + 9. Substituting: (x − 5)² − 25 + (y + 3)² + 9 − 2 = 0, so (x − 5)² + (y + 3)² = 25 + 9 + 2 = 36. The center is (5, −3) and r = √36 = 6. (Check: the point (11, −3) is 6 units right of the center, and 121 + 9 − 110 − 18 − 2 = 0 ✓.)',
        tip:'Half the coefficient, then square it — and add that amount to BOTH sides. The number you add for x and the number you add for y both pile onto the right side, which is why the radius always comes out bigger than the bare constant suggests.',
        desmos:'Graph x^2+y^2-10x+6y-2=0. Desmos draws the circle; check that it is centered at (5, −3) and reaches (11, −3).',
        desmosLatex:['x^2+y^2-10x+6y-2=0','(x-5)^2+(y+3)^2=36']
      },
      {
        id:'GTB-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Arc length from a central angle in degrees',
        stem:'A circle has a radius of 12 centimeters. A central angle of 40° cuts off an arc of that circle. What is the length of that arc, in centimeters?',
        choices:{A:'8π/3', B:'16π/3', C:'4π/3', D:'16π'},
        correct:'A',
        expCorrect:'An arc is the same fraction of the circumference as its central angle is of 360°. The fraction is 40/360 = 1/9, and the circumference is 2πr = 2π(12) = 24π. So the arc is (1/9)(24π) = 24π/9 = 8π/3 centimeters. (Check: 8π/3 is about 8.38 cm, and a ninth of the full 24π ≈ 75.4 cm is about 8.4 ✓.)',
        expWrong:{
          B:'16π/3 is what you get with 24 in place of 12 — using the diameter where the radius belongs. The formula 2πr already doubles it for you.',
          C:'4π/3 uses πr instead of 2πr. Circumference is 2πr; πr is only half of it.',
          D:'16π is the AREA of the sector, (40/360)(π·12²), not the length of the arc. An arc is a length in centimeters; a sector is an area in square centimeters.'
        },
        tip:'Both arc and sector start with the same fraction, angle/360. Then arc multiplies that fraction by 2πr and sector multiplies it by πr². Decide which one the units call for — centimeters or square centimeters — before you pick a formula.',
        desmos:'Evaluate (40/360)*2*pi*12 in Desmos: it returns about 8.378, which is 8π/3.',
        desmosLatex:['\\frac{40}{360}\\cdot2\\pi\\cdot12']
      },
      {
        id:'GTB-04', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Sector area with a central angle in radians',
        stem:'A sector of a circle has a central angle of 3π/4 radians and an area of 54π square centimeters. What is the radius of the circle, in centimeters?',
        answer:'12',
        expCorrect:'In radians the sector area formula has no 360 in it: A = ½r²θ. Substitute: 54π = ½ r² (3π/4) = 3πr²/8. Multiply both sides by 8: 432π = 3πr². Divide by 3π: r² = 144, so r = 12. (Check: ½(144)(3π/4) = 72(3π/4) = 54π ✓.)',
        tip:'Radians exist so the fraction disappears: arc = rθ and sector area = ½r²θ, with no 360 anywhere. If you catch yourself dividing by 360 while the angle is written with a π in it, you are mixing the two systems.',
        desmos:'Solve 0.5*r^2*(3*pi/4)=54*pi for r in Desmos, or graph y=0.5x^2*(3\\pi/4) and y=54\\pi and read the crossing at x = 12.',
        desmosLatex:['0.5x^{2}\\cdot\\frac{3\\pi}{4}=54\\pi']
      },
      {
        id:'GTB-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Central angle and inscribed angle on the same arc',
        figure: FIG_CENTRAL,
        stem:'In the figure, A, B and C are points on a circle with center O. The central angle AOB measures 110°, and the inscribed angle ACB measures x°. What is the value of x?',
        choices:{A:'110', B:'220', C:'70', D:'55'},
        correct:'D',
        expCorrect:'An inscribed angle is HALF the central angle that opens onto the same arc. Both angle AOB and angle ACB open onto arc AB, so x = 110 ÷ 2 = 55. (Check the other way: the central angle is twice the inscribed one, 2(55) = 110 ✓.)',
        expWrong:{
          A:'110 treats the two angles as equal. The vertex position is what matters: at the CENTER the angle is full size, on the CIRCLE it is half.',
          B:'220 doubles instead of halving. Doubling goes from inscribed to central, and here you were handed the central one already.',
          C:'70 is 180 − 110, the supplement. That rule belongs to opposite angles of a quadrilateral inscribed in a circle, not to an inscribed angle and its central angle.'
        },
        tip:'Find the vertex before you do anything. Vertex at the center → the angle equals its arc. Vertex on the circle → the angle is half its arc. Two inscribed angles on the SAME arc are equal to each other.',
        desmos:'No graph needed: 110/2 = 55. Desmos is only worth opening here to confirm the arithmetic.',
        desmosLatex:['110/2']
      },
      {
        id:'GTB-06', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Tangent line perpendicular to the radius',
        figure: FIG_TANGENT,
        stem:'In the figure, the line through P and Q touches the circle with center O only at point P. The radius OP is 7 and the distance OQ is 25. What is the length of PQ?',
        choices:{A:'18', B:'24', C:'32', D:'√674'},
        correct:'B',
        expCorrect:'A tangent line is perpendicular to the radius drawn to the point where it touches, so angle OPQ is a right angle and OQ is the hypotenuse. Then 7² + PQ² = 25² → 49 + PQ² = 625 → PQ² = 576 → PQ = 24. (Check: 7-24-25 is a Pythagorean triple, and 49 + 576 = 625 ✓.)',
        expWrong:{
          A:'18 is 25 − 7, subtracting the lengths instead of the squares. Sides of a right triangle subtract only after they are squared.',
          C:'32 is 25 + 7, adding the two given lengths. In any right triangle the hypotenuse is the longest side, so an answer larger than 25 cannot be a side of this one.',
          D:'√674 is √(25² + 7²), which treats OQ as a leg. OQ reaches from the center all the way out to Q, so it is the hypotenuse: it gets subtracted, not added.'
        },
        tip:'The instant a problem says a line is tangent to a circle, draw the radius to the point of contact and mark a right angle there. That single mark turns almost every tangent question into the Pythagorean theorem, with the segment from the center to the outside point as the hypotenuse.',
        desmos:'Evaluate sqrt(25^2-7^2) in Desmos: 24.',
        desmosLatex:['\\sqrt{25^2-7^2}']
      },
      {
        id:'GTB-07', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Two chords of a circle that intersect inside it',
        figure: FIG_CHORDS,
        stem:'In the figure, chords AC and BD of the circle meet at point E. AE = 6, EC = 8, BE = x and ED = x + 13. What is the length of the whole chord BD?',
        choices:{A:'3', B:'14', C:'19', D:'16'},
        correct:'C',
        expCorrect:'When two chords cross inside a circle, the two pieces of one multiply to the same product as the two pieces of the other: AE · EC = BE · ED. So 6(8) = x(x + 13) → 48 = x² + 13x → x² + 13x − 48 = 0 → (x + 16)(x − 3) = 0. A length cannot be negative, so x = 3. Then BE = 3, ED = 3 + 13 = 16, and BD = 3 + 16 = 19. (Check: 3 × 16 = 48 = 6 × 8 ✓.)',
        expWrong:{
          A:'3 is x, which is only the piece BE. The question asks for the entire chord, so add the second piece: 3 + 16 = 19.',
          B:'14 is 6 + 8, the length of chord AC. The two chords are not the same length; only the PRODUCTS of their pieces match.',
          D:'16 is ED, the longer piece by itself. Once you solve for x you still have to assemble BD out of both pieces.'
        },
        tip:'Crossing chords give you products, not sums: piece times piece equals piece times piece. Solve for the variable, then re-read the question — it usually wants a whole chord or a difference, never the bare x.',
        desmos:'Graph y=x^2+13x-48 in Desmos: the positive zero is at x = 3. Then 3 + (3+13) = 19.',
        desmosLatex:['y=x^2+13x-48']
      },
      {
        id:'GTB-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Circle circumscribed about a square',
        figure: FIG_SQUARE_CIRCLE,
        stem:'A square with sides of length 10 is inscribed in a circle, so that all four corners of the square lie on the circle. What is the area of the circle?',
        choices:{A:'50π', B:'25π', C:'200π', D:'100π'},
        correct:'A',
        expCorrect:'The diagonal of the square is a diameter of the circle, because it joins two opposite corners through the center. For a square of side 10 the diagonal is 10√2, so the radius is half of that: 5√2. Area = πr² = π(5√2)² = π(25 · 2) = 50π. (Check: 5√2 ≈ 7.07, and π(7.07)² ≈ 157 ≈ 50π ✓.)',
        expWrong:{
          B:'25π uses r = 5, half of a SIDE. That is the circle that fits inside the square touching the middle of each side, not the one through the corners.',
          C:'200π uses the diagonal 10√2 as the radius. The diagonal is the diameter; halve it first.',
          D:'100π uses r = 10, the side length itself. The distance from the center to a corner is longer than half a side but shorter than a full side.'
        },
        tip:'Inscribed or circumscribed, the question is always the same: which segment is a radius? Square inside circle → the square diagonal is the DIAMETER. Circle inside square → the square side is the diameter. Draw that segment before reaching for any formula.',
        desmos:'Evaluate pi*(10*sqrt(2)/2)^2 in Desmos: about 157.08, which is 50π.',
        desmosLatex:['\\pi\\left(\\frac{10\\sqrt{2}}{2}\\right)^2','50\\pi']
      },
      {
        id:'GTB-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Circle inscribed in a right triangle',
        figure: FIG_INCIRCLE,
        stem:'A circle is inscribed in a right triangle whose sides measure 10, 24 and 26, so that the circle touches all three sides. What is the radius of that circle?',
        choices:{A:'2', B:'13', C:'5', D:'4'},
        correct:'D',
        expCorrect:'For any triangle, area = r · s, where s is the SEMIperimeter. Here the area is ½(10)(24) = 120 and s = (10 + 24 + 26)/2 = 30, so r = 120/30 = 4. (Shortcut for right triangles only: r = (leg + leg − hypotenuse)/2 = (10 + 24 − 26)/2 = 4 ✓.)',
        expWrong:{
          A:'2 divides the area by the full perimeter, 120/60. The formula uses the semiperimeter, so the answer comes out twice too small.',
          B:'13 is half of 26, which is the radius of the circle through the three VERTICES, not the one touching the three sides. In a right triangle the hypotenuse is a diameter of that outer circle.',
          C:'5 is half of the shorter side. Half a side is the distance to the midpoint of that side, not the distance to all three sides at once.'
        },
        tip:'Two different circles live in every triangle. The one touching all three sides has r = area ÷ semiperimeter. The one through all three corners has, in a right triangle, the hypotenuse as its diameter. Ask which one is described before computing.',
        desmos:'Evaluate 120/30 in Desmos, and check the shortcut (10+24-26)/2. Both give 4.',
        desmosLatex:['\\frac{120}{30}','\\frac{10+24-26}{2}']
      },

      /* ===== Right triangles and trigonometry ===== */
      {
        id:'GTB-10', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Pythagorean theorem and the common triples',
        stem:'A right triangle has two shorter sides of lengths 9 and 40. What is the length of its hypotenuse?',
        choices:{A:'49', B:'41', C:'31', D:'1681'},
        correct:'B',
        expCorrect:'The hypotenuse c satisfies 9² + 40² = c² → 81 + 1600 = 1681 → c = √1681 = 41. (9-40-41 is one of the triples worth memorizing, along with 3-4-5, 5-12-13, 8-15-17 and 7-24-25.) Check: 81 + 1600 = 1681 ✓.',
        expWrong:{
          A:'49 is 9 + 40. Adding the two shorter sides always overshoots: the straight path across is shorter than going around the corner.',
          C:'31 is 40 − 9, which is the smallest the third side could ever be, not its actual length. That subtraction is the triangle inequality, not the Pythagorean theorem.',
          D:'1681 is c², the last stop before the answer. The square root is the final step every time.'
        },
        tip:'Memorize the triples — 3-4-5, 5-12-13, 8-15-17, 7-24-25, 9-40-41 — and their multiples. Recognizing one saves half a minute, and the SAT reuses them constantly. Always finish with the square root.',
        desmos:'Evaluate sqrt(9^2+40^2) in Desmos: 41.',
        desmosLatex:['\\sqrt{9^2+40^2}']
      },
      {
        id:'GTB-11', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'The 45-45-90 right triangle',
        stem:'The hypotenuse of a 45-45-90 right triangle measures 14 centimeters. What is the length, in centimeters, of each of the two equal sides?',
        choices:{A:'14√2', B:'7', C:'7√2', D:'7√3'},
        correct:'C',
        expCorrect:'In a 45-45-90 triangle the sides are in the ratio 1 : 1 : √2, with the √2 on the hypotenuse. So each short side is the hypotenuse divided by √2: 14/√2 = 14√2/2 = 7√2 ≈ 9.9. (Check: (7√2)² + (7√2)² = 98 + 98 = 196 = 14² ✓.)',
        expWrong:{
          A:'14√2 multiplies by √2 instead of dividing. That would make the short sides LONGER than the hypotenuse, which is impossible.',
          B:'7 halves the hypotenuse. Halving works for the short side of a 30-60-90 triangle, not for a 45-45-90.',
          D:'7√3 borrows the √3 from the 30-60-90 ratios. A 45-45-90 triangle has no √3 anywhere in it.'
        },
        tip:'Two special triangles, two ratios: 45-45-90 is 1 : 1 : √2 and 30-60-90 is 1 : √3 : 2. In both, the biggest number sits on the hypotenuse — so going FROM the hypotenuse you divide, and going TO it you multiply.',
        desmos:'Evaluate 14/sqrt(2) in Desmos: about 9.899, which is 7√2.',
        desmosLatex:['\\frac{14}{\\sqrt{2}}','7\\sqrt{2}']
      },
      {
        id:'GTB-12', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'The 30-60-90 right triangle in context',
        figure: FIG_POLE,
        stem:'A straight support beam runs from the top of a vertical 30-foot pole down to level ground, where it makes a 30° angle with the ground. How long is the beam, in feet?',
        choices:{A:'60', B:'15', C:'30√3', D:'20√3'},
        correct:'A',
        expCorrect:'The pole is opposite the 30° angle, so it is the short side of a 30-60-90 triangle, and the beam is the hypotenuse. In that triangle the hypotenuse is exactly twice the short side: 2(30) = 60 feet. (With the ratio written out: sin 30° = 30/beam → 0.5 = 30/beam → beam = 60 ✓.)',
        expWrong:{
          B:'15 halves the pole instead of doubling it. The hypotenuse is the longest side of a right triangle, so it can never come out shorter than the side you started with.',
          C:'30√3 ≈ 52 is the distance along the GROUND from the base of the pole to the foot of the beam — the third side, not the beam.',
          D:'20√3 ≈ 34.6 comes from dividing by sin 60° instead of sin 30°. The 30° angle is the one given, and the side opposite it is the pole.'
        },
        tip:'In a 30-60-90 triangle, the side opposite 30° is the short one and the hypotenuse is exactly double it. Before using the ratio, label which given length sits opposite which angle — that one decision is what separates the doubling from the √3.',
        desmos:'Evaluate 30/sin(30 deg) in Desmos (set the angle mode to degrees): 60.',
        desmosLatex:['\\frac{30}{\\sin\\left(30\\right)}']
      },
      {
        id:'GTB-13', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Sine in a real-world right triangle',
        figure: FIG_RAMP,
        stem:'A loading ramp rises 3 feet from level ground up to a doorway, and the ramp surface makes a 12° angle with the ground. What is the length of the ramp surface, to the nearest tenth of a foot?',
        choices:{A:'0.6', B:'2.9', C:'14.1', D:'14.4'},
        correct:'D',
        expCorrect:'The 3-foot rise is OPPOSITE the 12° angle, and the ramp surface is the HYPOTENUSE, so this is sine: sin 12° = 3/L → L = 3/sin 12° = 3/0.2079 ≈ 14.4 feet. (Check: 14.4 × sin 12° ≈ 2.995 ≈ 3 ✓.)',
        expWrong:{
          A:'0.6 comes from multiplying, 3 × sin 12°, instead of dividing. The unknown is in the denominator of the ratio, so it has to be divided out.',
          B:'2.9 is 3 × cos 12°. Beyond the wrong operation, cosine pairs the ADJACENT side with the hypotenuse, and 3 feet is the opposite side here.',
          C:'14.1 uses tangent: 3/tan 12°. Tangent pairs opposite with ADJACENT, so that number is the horizontal distance along the ground, not the ramp itself.'
        },
        tip:'Label the three sides relative to the angle you are given — opposite, adjacent, hypotenuse — BEFORE choosing a ratio. The hypotenuse appears in sine and cosine but never in tangent, so the moment the slanted side is involved, tangent is out.',
        desmos:'Evaluate 3/sin(12 deg) in Desmos with the angle mode set to degrees: about 14.43.',
        desmosLatex:['\\frac{3}{\\sin\\left(12\\right)}']
      },
      {
        id:'GTB-14', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Sine and cosine of complementary angles',
        stem:'In the equation sin(4k)° = cos(3k + 6)°, k is a constant and both angle measures are between 0 and 90. What is the value of k?',
        answer:'12',
        expCorrect:'The sine of an angle equals the cosine of its complement, so the two angle measures must add to 90: 4k + (3k + 6) = 90 → 7k + 6 = 90 → 7k = 84 → k = 12. (Check: 4k = 48 and 3k + 6 = 42, and 48 + 42 = 90, so sin 48° = cos 42° ✓.)',
        tip:'sin x° = cos(90 − x)° is the whole rule. When a problem sets a sine equal to a cosine, do not hunt for equal angles — set the two angle expressions to add to 90 and solve.',
        desmos:'Solve 4k+(3k+6)=90 in Desmos, or graph y=sin(4x) and y=cos(3x+6) in degree mode and read the crossing at x = 12.',
        desmosLatex:['4x+\\left(3x+6\\right)=90']
      },
      {
        id:'GTB-15', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Altitude to the hypotenuse and similar right triangles',
        figure: FIG_ALTITUDE,
        stem:'In right triangle PQR the right angle is at Q. Segment QS is drawn from Q perpendicular to the hypotenuse PR, meeting it at S. If PS = 4 and SR = 9, what is the length of QS?',
        choices:{A:'6.5', B:'6', C:'13', D:'36'},
        correct:'B',
        expCorrect:'The altitude to the hypotenuse splits the triangle into two smaller ones, each similar to the original and to each other. Matching up the sides gives PS/QS = QS/SR, so QS² = PS · SR = 4(9) = 36 and QS = 6. (Check with the whole triangle: PQ = √(4 · 13) ≈ 7.21, QR = √(9 · 13) ≈ 10.82, and 7.21² + 10.82² ≈ 169 = 13² ✓.)',
        expWrong:{
          A:'6.5 is the average of 4 and 9. The altitude is the GEOMETRIC mean — multiply and take the square root — not the ordinary mean.',
          C:'13 is 4 + 9, the whole hypotenuse PR. That is a side of the big triangle, not the segment drawn down to it.',
          D:'36 is QS², one step short. The square root finishes the job.'
        },
        tip:'When an altitude drops onto the hypotenuse, three similar triangles appear at once, and every length is a geometric mean: the altitude is √(the two hypotenuse pieces multiplied), and each side is √(its own piece times the whole hypotenuse).',
        desmos:'Evaluate sqrt(4*9) in Desmos: 6.',
        desmosLatex:['\\sqrt{4\\cdot9}']
      },
      {
        id:'GTB-16', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Solving a right triangle from a tangent ratio',
        stem:'In right triangle ABC the right angle is at C, tan A = 3/4, and the hypotenuse AB measures 40. What is the perimeter of triangle ABC?',
        choices:{A:'56', B:'120', C:'96', D:'384'},
        correct:'C',
        expCorrect:'tan A = opposite/adjacent = BC/AC = 3/4, so BC = 3k and AC = 4k for some k. Then the hypotenuse is 5k (a 3-4-5 shape), and 5k = 40 gives k = 8. So BC = 24, AC = 32, AB = 40, and the perimeter is 24 + 32 + 40 = 96. (Check: 24² + 32² = 576 + 1024 = 1600 = 40² ✓.)',
        expWrong:{
          A:'56 is 24 + 32, the two shorter sides only. Perimeter means all three sides, hypotenuse included.',
          B:'120 comes from reading 40 as one of the shorter sides and scaling 3-4-5 to 30-40-50. The problem names AB as the hypotenuse, and the hypotenuse is the side matching the 5.',
          D:'384 is ½(24)(32), the area. Area is in square units; perimeter is a distance around the outside.'
        },
        tip:'A tangent given as a fraction hands you the two shorter sides up to a scale factor: write them as 3k and 4k, find the hypotenuse from the Pythagorean theorem, then use the one length you were given to pin down k. Solve for k, never for the side directly.',
        desmos:'Check with Desmos: 5x=40 gives x = 8, then 3*8+4*8+40 = 96.',
        desmosLatex:['5x=40','3\\cdot8+4\\cdot8+40']
      },
      {
        id:'GTB-17', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Acute angles of a right triangle measured in radians',
        stem:'The two acute angles of a right triangle measure x radians and 3x radians. What is the measure, in degrees, of the larger of those two angles?',
        answer:'67.5',
        expCorrect:'The two acute angles of a right triangle add to a right angle, which is π/2 radians. So x + 3x = π/2 → 4x = π/2 → x = π/8. The larger angle is 3x = 3π/8 radians. Converting: multiply by 180/π, giving 3(180)/8 = 540/8 = 67.5 degrees. (Check: the smaller angle is π/8 = 22.5°, and 22.5 + 67.5 = 90 ✓.)',
        tip:'Radians convert with one fraction: multiply by 180/π to reach degrees, multiply by π/180 to go back. And the anchors are worth knowing cold: π/6 = 30°, π/4 = 45°, π/3 = 60°, π/2 = 90°, π = 180°.',
        desmos:'Evaluate (3*pi/8)*(180/pi) in Desmos: 67.5.',
        desmosLatex:['\\frac{3\\pi}{8}\\cdot\\frac{180}{\\pi}']
      },
      {
        id:'GTB-18', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Tangent ratio with a shadow on level ground',
        figure: FIG_SHADOW,
        stem:'A flagpole stands straight up on level ground and casts a shadow 21 feet long. At that moment the angle of elevation of the sun, measured from the tip of the shadow up to the top of the pole, is 53°. What is the height of the pole, to the nearest foot?',
        choices:{A:'28', B:'17', C:'13', D:'16'},
        correct:'A',
        expCorrect:'From the tip of the shadow, the pole is the OPPOSITE side and the shadow is the ADJACENT side, so this is tangent: tan 53° = h/21 → h = 21 tan 53° = 21(1.327) ≈ 27.87, which rounds to 28 feet. (Check: 28/21 = 1.33 ≈ tan 53° ✓.)',
        expWrong:{
          B:'17 is 21 sin 53°. Sine pairs the opposite side with the HYPOTENUSE, and 21 feet is the side along the ground, not the slanted ray.',
          C:'13 is 21 cos 53°. Cosine would give the side adjacent to the angle, which is the shadow you already have.',
          D:'16 is 21/tan 53°, the ratio flipped. Since 53° is bigger than 45°, the opposite side has to come out LONGER than the adjacent one — an answer under 21 cannot be right.'
        },
        tip:'When both sides in play touch the ground and the pole — never the slanted line of sight — the ratio is tangent. A fast sanity check: an angle above 45° makes the opposite side longer than the adjacent one, and below 45° makes it shorter.',
        desmos:'Evaluate 21*tan(53 deg) in Desmos with the angle mode set to degrees: about 27.87.',
        desmosLatex:['21\\tan\\left(53\\right)']
      },

      /* ===== Area and volume ===== */
      {
        id:'GTB-19', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Area of a composite figure made of rectangles',
        figure: FIG_LSHAPE,
        stem:'The figure shows a flat piece cut from sheet metal. Every corner of the piece is a right angle, and the measurements shown are in inches. What is the area of the piece, in square inches?',
        choices:{A:'111', B:'96', C:'60', D:'81'},
        correct:'D',
        expCorrect:'Start from the full 12-by-8 rectangle, which would be 96 square inches, and remove the 5-by-3 rectangle missing from the upper right corner, which is 15: 96 − 15 = 81. (Second route, cutting instead of subtracting: the bottom strip is 12 × 5 = 60 and the upper left block is 7 × 3 = 21, and 60 + 21 = 81 ✓.)',
        expWrong:{
          A:'111 adds the missing 5-by-3 corner instead of removing it. The metal is not there, so it has to come off.',
          B:'96 is the full rectangle before the corner is taken out. It is the first step, not the answer.',
          C:'60 is only the bottom strip, 12 by 5. The upper left block of 7 by 3 is still part of the piece.'
        },
        tip:'Two safe ways to handle a composite figure, and it is worth doing both: surround it with the smallest rectangle you can and subtract what is missing, or slice it into rectangles and add. If the two routes disagree, one of your side lengths is wrong.',
        desmos:'Check both routes in Desmos: 12*8-5*3 and 12*5+7*3 both give 81.',
        desmosLatex:['12\\cdot8-5\\cdot3','12\\cdot5+7\\cdot3']
      },
      {
        id:'GTB-20', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Volume of a solid with a hole bored through it',
        figure: FIG_POST,
        stem:'A concrete post has the shape of a cylinder 20 centimeters tall, with a narrower cylinder hollowed out through it from top to bottom. The post measures 12 centimeters across, and the hollow opening measures 8 centimeters across. What is the volume of the concrete, in cubic centimeters?',
        choices:{A:'80π', B:'400π', C:'720π', D:'1600π'},
        correct:'B',
        expCorrect:'Across means all the way through, so the distances from the center are 6 and 4. Take the whole post and subtract the hole: π(6²)(20) − π(4²)(20) = 720π − 320π = 400π cubic centimeters. (Factoring instead: π(36 − 16)(20) = π(20)(20) = 400π ✓.)',
        expWrong:{
          A:'80π subtracts first and squares afterwards: π(6 − 4)²(20). Squaring does not distribute over subtraction — 6² − 4² = 20, while (6 − 4)² = 4.',
          C:'720π is the whole post with nothing removed. The hollow part is empty, so it is not concrete.',
          D:'1600π uses 12 and 8 as distances from the center. Those are the measurements all the way across, so each one has to be halved first.'
        },
        tip:'For any solid with a hole through it, compute the outside and the inside separately and subtract the volumes — never subtract the lengths first. And treat the word "across" as a warning: it is the full width, so halve it before it enters a formula.',
        desmos:'Evaluate pi*(6^2-4^2)*20 in Desmos: about 1256.6, which is 400π.',
        desmosLatex:['\\pi\\left(6^2-4^2\\right)\\cdot20','400\\pi']
      },
      {
        id:'GTB-21', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Volume with a unit conversion from cubic meters to liters',
        stem:'A rectangular water trough measures 2.5 meters long, 0.6 meters wide and 0.4 meters deep. Filled level with the top, how many liters of water does it hold? (1 cubic meter = 1000 liters.)',
        choices:{A:'0.6', B:'60', C:'600', D:'600,000'},
        correct:'C',
        expCorrect:'Volume = 2.5 × 0.6 × 0.4 = 0.6 cubic meters. Each cubic meter is 1000 liters, so 0.6 × 1000 = 600 liters. (Sanity check: a trough this size is roughly the volume of three bathtubs, and 600 liters is about right ✓.)',
        expWrong:{
          A:'0.6 is the volume in cubic meters, one step short. The question asks for liters, so the conversion still has to happen.',
          B:'60 uses 100 liters per cubic meter. The 100 factor belongs to squares of lengths, not cubes; for volume the factor is 1000.',
          D:'600,000 uses 1,000,000, which is the number of cubic CENTIMETERS in a cubic meter. Cubic centimeters and liters are not the same unit: 1000 cubic centimeters make one liter.'
        },
        tip:'Fix the two conversions in your head and they cover almost every SAT volume question: 1 cubic meter = 1000 liters, and 1 liter = 1000 cubic centimeters. Convert only at the very end, after the multiplication, so you convert one number instead of three.',
        desmos:'Evaluate 2.5*0.6*0.4*1000 in Desmos: 600.',
        desmosLatex:['2.5\\cdot0.6\\cdot0.4\\cdot1000']
      },
      {
        id:'GTB-22', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Scaling: how area changes with the scale factor',
        stem:'A scale model of a stage floor is built so that every length on the model is one third of the matching length on the real floor. The model floor covers 6 square feet. How many square feet does the real floor cover?',
        choices:{A:'54', B:'18', C:'162', D:'2'},
        correct:'A',
        expCorrect:'Lengths scale by 3 going from the model to the real floor, so any area scales by 3² = 9. Real floor = 6 × 9 = 54 square feet. (Check with a concrete case: a 2-by-3 model floor covers 6, and the real one would be 6 by 9, which covers 54 ✓.)',
        expWrong:{
          B:'18 multiplies by 3, the factor for LENGTHS. Covering a floor takes two directions, so the factor gets applied twice.',
          C:'162 multiplies by 27 = 3³, the factor for volumes. A floor is flat; the cube is for solids.',
          D:'2 divides by 3, scaling in the wrong direction. The real floor is the larger one.'
        },
        tip:'Multiply every length by k and you multiply flat measures by k² and solid measures by k³. Perimeters stay at k, because a perimeter is still just a length.',
        desmos:'Evaluate 6*3^2 in Desmos: 54.',
        desmosLatex:['6\\cdot3^2']
      },
      {
        id:'GTB-23', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Scaling backward: from a volume ratio to a length',
        stem:'Two containers have the same shape, one a scaled copy of the other. The larger container holds exactly 64 times as much as the smaller one. The smaller container is 6 inches tall. How tall is the larger container, in inches?',
        choices:{A:'384', B:'48', C:'4', D:'24'},
        correct:'D',
        expCorrect:'Capacity scales by k³, so k³ = 64 and k = ∛64 = 4. Heights scale by k, so the larger container is 6 × 4 = 24 inches tall. (Check forward: 4³ = 64, so scaling every length by 4 multiplies the capacity by exactly 64 ✓.)',
        expWrong:{
          A:'384 is 6 × 64, scaling a height by the full capacity ratio. Only volumes grow by 64; heights grow by the cube root of it.',
          B:'48 uses √64 = 8, the square root. Square roots undo area ratios; capacity is a volume, so it needs the cube root.',
          C:'4 is the scale factor k itself, not a height. Once you have k you still have to multiply it by the height you were given.'
        },
        tip:'Read which direction the question runs. Lengths to volume, cube the factor. Volume back to lengths, take the CUBE root first and only then multiply. The clue is always which quantity carries the given ratio.',
        desmos:'Evaluate 64^(1/3) in Desmos to get 4, then 6*4 = 24.',
        desmosLatex:['64^{\\frac{1}{3}}','6\\cdot4']
      },
      {
        id:'GTB-24', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Working backward from a volume given in liters',
        stem:'A fish tank in the shape of a rectangular box has a flat bottom measuring 50 centimeters by 36 centimeters. It contains 27 liters of water, filled to a level depth of d centimeters. What is the value of d? (1 liter = 1000 cubic centimeters.)',
        answer:'15',
        expCorrect:'Convert first: 27 liters = 27 × 1000 = 27,000 cubic centimeters. For a box, volume = bottom area × depth, so 27,000 = (50 × 36) d = 1800d, giving d = 27,000/1800 = 15 centimeters. (Check: 50 × 36 × 15 = 27,000 cubic centimeters = 27 liters ✓.)',
        tip:'Force the units to agree before you solve, not after. Centimeter measurements want cubic centimeters, so turn the liters into cubic centimeters first; if you solve in mixed units the answer comes out wrong by a factor of 1000 and still looks reasonable.',
        desmos:'Solve 50*36*x=27000 in Desmos: x = 15.',
        desmosLatex:['50\\cdot36x=27000']
      },
      {
        id:'GTB-25', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Volume of a composite solid: a cylinder with a cone on top',
        figure: FIG_SILO,
        stem:'A grain silo is built as a cylinder with a cone sitting on top of it, sharing the same flat circular top. The cylinder part is 10 meters tall, the cone part is 4 meters tall, and the silo measures 6 meters across at its widest. What is the total volume of the silo, in cubic meters?',
        choices:{A:'90π', B:'102π', C:'126π', D:'408π'},
        correct:'B',
        expCorrect:'Across is 6, so the distance from the center is 3. Cylinder: π(3²)(10) = 90π. Cone: ⅓π(3²)(4) = ⅓(36π) = 12π. Total = 90π + 12π = 102π cubic meters. (Check: the cone is only a third as full as a cylinder of the same base and height, and a 4-meter cylinder would be 36π, so 12π is right ✓.)',
        expWrong:{
          A:'90π is the cylinder alone. The cone on top is part of the silo and holds grain too.',
          C:'126π drops the ⅓ on the cone, adding 36π instead of 12π. A cone always holds exactly a third of the cylinder that shares its base and height.',
          D:'408π uses 6 as the distance from the center instead of 3. Since that distance gets squared, doubling it multiplies every piece by four.'
        },
        tip:'Composite solids are addition problems with one trap each: split the solid at the seam, use the right formula on each piece, and check every length before it enters a formula. The ⅓ belongs to cones and pyramids, never to cylinders or prisms.',
        desmos:'Evaluate pi*3^2*10+(1/3)*pi*3^2*4 in Desmos: about 320.4, which is 102π.',
        desmosLatex:['\\pi\\cdot3^2\\cdot10+\\frac{1}{3}\\pi\\cdot3^2\\cdot4','102\\pi']
      },
      {
        id:'GTB-26', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Surface area against volume when a solid is cut up',
        stem:'A solid cube has a volume of 216 cubic inches. It is cut straight through along all three directions into 8 identical smaller cubes. By how many square inches does the total surface area of all the pieces exceed the surface area of the original cube?',
        choices:{A:'54', B:'432', C:'216', D:'1728'},
        correct:'C',
        expCorrect:'The original cube has edge ∛216 = 6, so its surface area is 6(6²) = 216 square inches. Cutting it in half along each direction gives 8 cubes of edge 3, each with surface area 6(3²) = 54, for a total of 8(54) = 432. The increase is 432 − 216 = 216 square inches. (Check the volume is unchanged: 8(3³) = 8(27) = 216 ✓.)',
        expWrong:{
          A:'54 is the surface area of one small cube. There are eight of them, and the question asks for an increase, not a single piece.',
          B:'432 is the new total surface area. The question asks how much it GREW, so the original 216 still has to come off.',
          D:'1728 multiplies the original surface area by 8, treating surface like volume. Cutting into 8 pieces multiplies the volume count by 8 but the surface area only doubles, because each cut creates two new faces.'
        },
        tip:'Cutting a solid never changes its volume, but it always increases surface area — every cut exposes two new faces. When a question mixes the two, compute each one separately and re-read whether it wants the new total or the change.',
        desmos:'Evaluate 8*6*3^2-6*6^2 in Desmos: 216.',
        desmosLatex:['8\\cdot6\\cdot3^2-6\\cdot6^2']
      },

      /* ===== Lines, angles and triangles ===== */
      {
        id:'GTB-27', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Parallel lines: alternate interior angles with a variable',
        figure: FIG_ALTINT,
        stem:'In the figure, lines p and q are parallel and are cut by a transversal. The two marked angles both lie between p and q and on opposite sides of the transversal. One measures (3x − 10)° and the other measures (x + 40)°. What is the measure, in degrees, of the angle marked (x + 40)°?',
        choices:{A:'65', B:'25', C:'115', D:'12.5'},
        correct:'A',
        expCorrect:'Interior and on opposite sides of the transversal makes them alternate interior angles, and with parallel lines those are EQUAL: 3x − 10 = x + 40 → 2x = 50 → x = 25. The angle asked for is x + 40 = 25 + 40 = 65°. (Check the other expression: 3(25) − 10 = 65 ✓.)',
        expWrong:{
          B:'25 is the value of x, not the measure of an angle. Substitute x back into the expression the question names.',
          C:'115 is 180 − 65, the supplement. That total belongs to angles on the SAME side of the transversal, not opposite sides.',
          D:'12.5 is 25 ÷ 2, dividing x once more for no reason. Once x is found, the only step left is substitution.'
        },
        tip:'With parallel lines every pair is either equal or adds to 180, and the deciding fact is which side of the transversal the two angles sit on. Opposite sides → equal. Same side → 180. Then substitute: the answer is almost never the bare variable.',
        desmos:'Solve 3x-10=x+40 in Desmos: x = 25. Then evaluate 25+40 to get 65.',
        desmosLatex:['3x-10=x+40','25+40']
      },
      {
        id:'GTB-28', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Sum of the interior angles of a polygon',
        stem:'A closed figure has 9 straight sides and no two of its sides cross. What is the sum of the measures of its interior angles, in degrees?',
        choices:{A:'1620', B:'140', C:'1440', D:'1260'},
        correct:'D',
        expCorrect:'The interior angles of a figure with n sides add to (n − 2)180°. With n = 9: (9 − 2)(180) = 7(180) = 1260°. (The reason for the minus 2: drawing every diagonal from one corner slices the figure into 7 triangles, and each triangle contributes 180° ✓.)',
        expWrong:{
          A:'1620 is 9 × 180, skipping the minus 2. Nine sides make only seven triangles, not nine.',
          C:'1440 uses (n − 1)180. The count of triangles is always two less than the count of sides.',
          B:'140 is 1260 ÷ 9, which would be the size of ONE angle if the figure happened to be regular. The question asks for the total, and nothing here says the sides are equal.'
        },
        tip:'Two formulas and a trap. Interior angles total (n − 2)180°. Exterior angles total 360° no matter how many sides there are. And a single interior angle is the total divided by n only when the figure is regular — do not assume that unless it is stated.',
        desmos:'Evaluate (9-2)*180 in Desmos: 1260.',
        desmosLatex:['\\left(9-2\\right)\\cdot180']
      },
      {
        id:'GTB-29', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Exterior angle of a triangle',
        figure: FIG_EXTERIOR2,
        stem:'In the figure, side RS of triangle RST is extended past S to point W, so that R, S and W lie on one straight line. The angle at R measures 39° and the angle at T measures 84°. What is the measure, in degrees, of angle TSW?',
        choices:{A:'57', B:'123', C:'45', D:'141'},
        correct:'B',
        expCorrect:'An exterior angle equals the sum of the two remote interior angles — the two it does not touch. Those are the angles at R and at T: 39 + 84 = 123°. (Check the long way: the interior angle at S is 180 − 39 − 84 = 57, and the exterior angle beside it is 180 − 57 = 123 ✓.)',
        expWrong:{
          A:'57 is the INTERIOR angle at S. Angle TSW is on the other side of the line, so the two together make 180.',
          C:'45 is 84 − 39. The exterior angle rule adds the two remote angles; it never subtracts them.',
          D:'141 is 180 − 39, using the wrong angle at the wrong vertex. The 180 rule applies to the pair at S, not to the angle at R.'
        },
        tip:'The exterior angle shortcut saves a step every time: it equals the two angles it does NOT touch, added. If it feels risky, the two-step version always works — find the interior angle from the 180 total, then subtract from 180 again.',
        desmos:'Evaluate 39+84 in Desmos: 123. Cross-check with 180-(180-39-84).',
        desmosLatex:['39+84','180-\\left(180-39-84\\right)']
      },
      {
        id:'GTB-30', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'A ray that bisects an angle of a triangle',
        figure: FIG_BISECTOR,
        stem:'In triangle JKL, the measure of angle J is 52° and the measure of angle K is 68°. Point M lies on side JK, and segment LM cuts angle JLK into two equal angles. What is the measure, in degrees, of angle JLM?',
        answer:'30',
        expCorrect:'First get the angle at L from the triangle total: 180 − 52 − 68 = 60°. The segment LM cuts it into two equal pieces, so each piece is 60 ÷ 2 = 30°. (Check inside triangle JLM: 52 + 30 = 82, so angle JML = 98°, and beside it angle LMK = 82°, which with 68 + 30 = 98 in triangle LMK also totals 180 ✓.)',
        tip:'A bisector question is always two steps: find the whole angle from the 180 total first, then halve it. Halving something you were handed directly is the usual mistake — the whole angle is almost never given.',
        desmos:'Evaluate (180-52-68)/2 in Desmos: 30.',
        desmosLatex:['\\frac{180-52-68}{2}']
      },
      {
        id:'GTB-31', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Triangle inequality',
        stem:'Two sides of a triangle have lengths 7 and 18. Which of the following could be the length of the third side?',
        choices:{A:'9', B:'11', C:'19', D:'25'},
        correct:'C',
        expCorrect:'The third side has to be longer than the difference of the other two and shorter than their sum: 18 − 7 &lt; x &lt; 18 + 7, so 11 &lt; x &lt; 25. Of the four numbers offered, only 19 lands strictly inside that window. (Check: 7 + 18 = 25 &gt; 19 ✓, 7 + 19 = 26 &gt; 18 ✓, and 18 + 19 = 37 &gt; 7 ✓.)',
        expWrong:{
          A:'9 is below 11, so 7 + 9 = 16, which is shorter than 18. Those three lengths cannot close into a triangle at all.',
          B:'11 is exactly the difference 18 − 7. At that value the three lengths lie flat in a straight line, which is not a triangle. The inequality is strict.',
          D:'25 is exactly the sum 7 + 18, the other flat case. It is the boundary, and boundaries are excluded at both ends.'
        },
        tip:'Third side lives strictly between the difference and the sum of the other two. Both endpoints are excluded, because hitting either one flattens the triangle into a segment — which is exactly the value a test writer puts in the choices.',
        desmos:'Check the window in Desmos: 18-7 = 11 and 18+7 = 25, so the third side is strictly between them.',
        desmosLatex:['18-7','18+7']
      },
      {
        id:'GTB-32', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Similar triangles: ratio of sides and perimeters',
        figure: FIG_SIMILAR2,
        stem:'Triangle ABC is similar to triangle DEF, with vertex A corresponding to D, B to E and C to F. Side AB measures 15 and side DE measures 25. The perimeter of triangle ABC is 36. What is the perimeter of triangle DEF?',
        choices:{A:'60', B:'21.6', C:'46', D:'100'},
        correct:'A',
        expCorrect:'The scale factor from ABC to DEF is 25/15 = 5/3. A perimeter is a sum of lengths, so it scales by that same factor, not by its square: 36 × 5/3 = 60. (Check with actual sides: if ABC is 9, 12, 15 then DEF is 15, 20, 25, and 15 + 20 + 25 = 60 ✓.)',
        expWrong:{
          B:'21.6 is 36 × 3/5, the ratio upside down. DEF is the larger triangle, so its perimeter has to come out bigger than 36.',
          C:'46 adds the 10-unit difference between 15 and 25 to the perimeter. Similar figures scale by multiplication; adding a fixed amount changes the shape.',
          D:'100 multiplies by (5/3)², treating the perimeter as a flat measure. The square is for regions; a perimeter is still a length.'
        },
        tip:'Under a scale factor k: lengths, perimeters and matching segments all scale by k; anything flat scales by k²; anything solid by k³. A perimeter looks like a bigger quantity than a side, but it is still a sum of lengths, so it stays at k.',
        desmos:'Evaluate 36*(25/15) in Desmos: 60.',
        desmosLatex:['36\\cdot\\frac{25}{15}']
      },
      {
        id:'GTB-33', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Parallel lines crossed by a triangle',
        figure: FIG_PARTRI,
        stem:'In the figure, lines m and n are parallel. Point P lies on m, and points R and Q lie on n, forming triangle PQR. Inside the triangle, the angle at R measures 62° and the angle at P measures 81°. At P, the angle between the part of line m running to the right of P and segment PQ measures (4x + 5)°. What is the value of x?',
        choices:{A:'14.25', B:'23.5', C:'28.25', D:'8'},
        correct:'D',
        expCorrect:'Two steps. Step 1, triangle total: the angle at Q is 180 − 62 − 81 = 37°. Step 2, alternate interior angles: segment PQ is a transversal cutting the parallel lines m and n, and the marked angle at P sits interior and on the opposite side of PQ from the angle at Q, so it equals 37°. Then 4x + 5 = 37 → 4x = 32 → x = 8. (Check: 4(8) + 5 = 37, and 62 + 81 + 37 = 180 ✓.)',
        expWrong:{
          A:'14.25 sets 4x + 5 = 62, matching the marked angle to the angle at R. R is at the far end of a different transversal, so no parallel-line rule connects those two.',
          B:'23.5 sets 4x + 5 = 99, using 180 − 81 as if the angle at P on line m were the supplement of the angle inside the triangle. The three angles at P on a straight line are 62, 81 and 37, not two.',
          C:'28.25 sets 4x + 5 = 118, from 180 − 62. That subtracts the wrong angle at the wrong vertex, and it produces an angle larger than the straight-line total allows.'
        },
        tip:'When a triangle sits between two parallel lines, the three angles at the vertex on the top line repeat the three angles of the triangle — that is why they add to 180 twice over. Find the missing triangle angle first, then carry it up with alternate interior angles.',
        desmos:'Solve 4x+5=180-62-81 in Desmos: x = 8.',
        desmosLatex:['4x+5=180-62-81']
      },
      {
        id:'GTB-34', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Isosceles triangle where a segment bisects one angle',
        figure: FIG_ISOBIS,
        stem:'In triangle ABC, sides AB and AC have the same length and the measure of angle A is 44°. Point D lies on side AC, and segment BD cuts angle ABC into two equal angles. What is the measure, in degrees, of angle BDC?',
        answer:'78',
        expCorrect:'Because AB and AC are equal, the angles across from them are equal: angle B = angle C = (180 − 44)/2 = 68°. The segment BD halves angle B, so angle DBC = 34°. Now work inside triangle BDC: angle BDC = 180 − 34 − 68 = 78°. (Check with the other piece: angle ABD is also 34°, so in triangle ABD the angle ADB = 180 − 44 − 34 = 102°, and 78 + 102 = 180 as they should, since A, D and C lie on one line ✓.)',
        tip:'Equal sides face equal angles, and that is what unlocks most isosceles problems. Then keep the work inside ONE small triangle at a time: pick the triangle that contains the angle you want and fill in its other two angles before applying the 180 rule.',
        desmos:'Evaluate 180-(180-44)/4-(180-44)/2 in Desmos: 78.',
        desmosLatex:['180-\\frac{180-44}{4}-\\frac{180-44}{2}']
      }
    ]
  });
})();
