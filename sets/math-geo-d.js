/* SAT Studio question set — Math: Geometry & Trigonometry (GTD-01 a GTD-34) */
(function(){
  /* Tier MEDIO-ALTO: cada pregunta encadena DOS relaciones. Nunca se pide el
     primer valor que sale de la cuenta — ese valor es siempre uno de los
     distractores ("se quedó en el penúltimo paso").

     Figuras: SVG inline con viewBox propio, role="img" y un aria-label que por
     sí solo alcanza para contestar. Cada medida dibujada coincide con el
     enunciado y con la explicación.

     OJO con el detector de español: la palabra inglesa "triangular" cae en el
     patrón triangul, así que acá se dice "in the shape of a triangle".

     OJO con skillOf(): prueba Circles → Right triangles → Area and volume →
     Lines, angles and triangles sobre skill + los primeros 160 caracteres del
     stem, y gana el PRIMERO que calza. Por eso:
       · las de volumen no dicen "radius" ni "diameter" (dicen "across"), ni
         "pythagorean"/"hypotenuse" antes del carácter 160;
       · las de líneas y ángulos no dicen "area", "volume", "surface",
         "scaling" ni "dimension" en el skill ni al arrancar el enunciado;
       · "tangent" solo cae en Circles si va seguido de "line", así que las
         razones trigonométricas se escriben "tangent ratio" / "tan A". */

  var NOTA = '<text x="12" y="YY" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>';

  /* ---------- Circles ---------- */

  var FIG_INSCR =
    '<svg viewBox="0 0 260 198" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with center O. Points A and B are on the circle and the segment AB passes straight through O, so AB is a diameter. Point C is on the circle above AB, and the segments CA and CB are drawn. A small square at C marks the right angle between CA and CB. Side CA measures 9 centimeters and side CB measures 12 centimeters.">' +
    '<circle cx="130" cy="112" r="60" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<polygon points="70,112 190,112 113.2,54.4" fill="none" stroke="#324DC7" stroke-width="2.2"/>' +
    '<polygon points="107.2,62.4 115.2,68.4 121.2,60.4 113.2,54.4" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<circle cx="130" cy="112" r="3" fill="#1e1e1e"/>' +
    '<g font-family="Georgia,serif" font-size="14" stroke="#ffffff" stroke-width="3.5" paint-order="stroke">' +
    '<text x="84" y="86">9</text><text x="150" y="84">12</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="56" y="118">A</text><text x="196" y="118">B</text>' +
    '<text x="110" y="46">C</text><text x="134" y="106">O</text></g>' +
    NOTA.replace('YY', '192') + '</svg>';

  var FIG_TANG2 =
    '<svg viewBox="0 0 265 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with center O and a point P outside it, to the right. Two segments run from P and touch the circle, one at point A above and one at point B below. The radii OA and OB are drawn, and a small square at each touching point marks a right angle between the radius and the segment from P. The angle at P, between PA and PB, measures 52 degrees. The angle at the center, between OA and OB, is labeled x degrees.">' +
    '<circle cx="95" cy="112" r="45" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="95" y1="112" x2="114.7" y2="71.6" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<line x1="95" y1="112" x2="114.7" y2="152.4" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<line x1="114.7" y1="71.6" x2="197.7" y2="112" stroke="#324DC7" stroke-width="2.2"/>' +
    '<line x1="114.7" y1="152.4" x2="197.7" y2="112" stroke="#324DC7" stroke-width="2.2"/>' +
    '<polygon points="109.9,81.4 119.8,86.3 124.6,76.4 114.7,71.6" fill="none" stroke="#1e1e1e" stroke-width="1.4"/>' +
    '<polygon points="109.9,142.6 119.8,137.7 124.6,147.6 114.7,152.4" fill="none" stroke="#1e1e1e" stroke-width="1.4"/>' +
    '<circle cx="95" cy="112" r="3" fill="#1e1e1e"/><circle cx="197.7" cy="112" r="3" fill="#1e1e1e"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="170" y="117">52°</text>' +
    '<text x="103" y="117" fill="#324DC7" font-style="italic">x°</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="82" y="106">O</text><text x="118" y="64">A</text>' +
    '<text x="118" y="166">B</text><text x="204" y="108">P</text></g>' +
    NOTA.replace('YY', '194') + '</svg>';

  var FIG_ARCS =
    '<svg viewBox="0 0 290 244" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with three points on it: A at the top, B on the right and C at the lower left. The chords AB, BC and CA are drawn, forming a triangle inside the circle. The arc from A to B that does not pass through C is marked 86 degrees. The arc from A to C that does not pass through B is marked 130 degrees. The angle of the triangle at vertex A, between the chords AB and AC, is labeled x degrees.">' +
    '<circle cx="145" cy="125" r="85" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<polygon points="145,40 229.8,119.1 79.9,179.6" fill="none" stroke="#324DC7" stroke-width="2.2"/>' +
    '<g font-family="Georgia,serif" font-size="14" stroke="#ffffff" stroke-width="3.5" paint-order="stroke">' +
    '<text x="216" y="52" text-anchor="middle">86°</text>' +
    '<text x="85" y="97" text-anchor="middle">130°</text>' +
    '<text x="145" y="72" text-anchor="middle" fill="#324DC7" font-style="italic">x°</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="145" y="32" text-anchor="middle">A</text><text x="238" y="116">B</text>' +
    '<text x="64" y="192">C</text></g>' +
    NOTA.replace('YY', '238') + '</svg>';

  var FIG_RING =
    '<svg viewBox="0 0 245 212" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two circles that share the same center, drawn one inside the other. The shaded ring between them is the walking path. A segment from the center to the inner circle is labeled 9 meters, and a short segment from the inner circle out to the outer circle is labeled 2 meters.">' +
    '<circle cx="120" cy="105" r="88" fill="#EDEAE3" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="120" cy="105" r="72" fill="#ffffff" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="120" y1="105" x2="48" y2="105" stroke="#324DC7" stroke-width="2"/>' +
    '<line x1="192" y1="105" x2="208" y2="105" stroke="#324DC7" stroke-width="2"/>' +
    '<circle cx="120" cy="105" r="3" fill="#1e1e1e"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="80" y="99" text-anchor="middle">9</text>' +
    '<text x="200" y="97" text-anchor="middle">2</text></g>' +
    NOTA.replace('YY', '206') + '</svg>';

  var FIG_CHORDS2 =
    '<svg viewBox="0 0 290 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle of radius 13 with center O. Two horizontal chords are drawn, one above the center and one below it, so the center lies between them. The upper chord PQ measures 24 and the lower chord RS measures 10. A dashed segment runs straight down from the upper chord to the lower chord, through the center, and its length is the unknown asked for.">' +
    '<circle cx="140" cy="132" r="91" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="56" y1="97" x2="224" y2="97" stroke="#324DC7" stroke-width="2.5"/>' +
    '<line x1="105" y1="216" x2="175" y2="216" stroke="#324DC7" stroke-width="2.5"/>' +
    '<line x1="140" y1="97" x2="140" y2="216" stroke="#757575" stroke-width="1.8" stroke-dasharray="5 4"/>' +
    '<line x1="140" y1="132" x2="231" y2="132" stroke="#1e1e1e" stroke-width="1.8"/>' +
    '<circle cx="140" cy="132" r="3" fill="#1e1e1e"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="140" y="90" text-anchor="middle">24</text>' +
    '<text x="140" y="233" text-anchor="middle">10</text>' +
    '<text x="190" y="126" text-anchor="middle">13</text>' +
    '<text x="149" y="170" fill="#324DC7">?</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="42" y="93">P</text><text x="228" y="93">Q</text>' +
    '<text x="92" y="222">R</text><text x="180" y="222">S</text>' +
    '<text x="126" y="128">O</text></g>' +
    NOTA.replace('YY', '258') + '</svg>';

  /* ---------- Right triangles and trigonometry ---------- */

  var FIG_MEDIAN =
    '<svg viewBox="0 0 250 186" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle DEF with a small square at F marking the right angle. Side DF is vertical and measures 9, side FE is horizontal and measures 12, and DE is the slanted side joining them. Point M is the midpoint of DE, and the segment FM is drawn from the right angle to that midpoint. The length of FM is the unknown asked for.">' +
    '<polygon points="55,45 55,144 187,144" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="55" y1="45" x2="187" y2="144" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="55" y1="144" x2="121" y2="94.5" stroke="#324DC7" stroke-width="2.2"/>' +
    '<rect x="55" y="132" width="12" height="12" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<circle cx="121" cy="94.5" r="3" fill="#324DC7"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="42" y="98" text-anchor="middle">9</text>' +
    '<text x="121" y="162" text-anchor="middle">12</text>' +
    '<text x="80" y="112" fill="#324DC7">?</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="46" y="40">D</text><text x="42" y="160">F</text>' +
    '<text x="193" y="152">E</text><text x="128" y="88">M</text></g>' +
    NOTA.replace('YY', '180') + '</svg>';

  var FIG_ISO =
    '<svg viewBox="0 0 250 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A at the top. Sides AB and AC each measure 13 and the horizontal base BC measures 10. A dashed segment drops from A straight down to the middle of BC, meeting it at a right angle marked with a small square. The angle of the triangle at B is labeled x.">' +
    '<polygon points="140,24 95,132 185,132" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="140" y1="24" x2="140" y2="132" stroke="#324DC7" stroke-width="2" stroke-dasharray="5 4"/>' +
    '<rect x="140" y="120" width="12" height="12" fill="none" stroke="#1e1e1e" stroke-width="1.4"/>' +
    '<path d="M 115 132 A 20 20 0 0 0 102.7 113.5" fill="none" stroke="#324DC7" stroke-width="1.6"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="102" y="80" text-anchor="middle">13</text>' +
    '<text x="178" y="80" text-anchor="middle">13</text>' +
    '<text x="140" y="150" text-anchor="middle">10</text>' +
    '<text x="116" y="124" fill="#324DC7" font-style="italic">x</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="140" y="16" text-anchor="middle">A</text>' +
    '<text x="84" y="140">B</text><text x="190" y="140">C</text></g>' +
    NOTA.replace('YY', '169') + '</svg>';

  /* ---------- Area and volume ---------- */

  var FIG_TRAP =
    '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A trapezoid with two horizontal parallel sides. The shorter top side measures 14 meters and the longer bottom side measures 22 meters. A dashed segment runs from the top side straight down to the bottom side, meeting it at a right angle marked with a small square, and its length is labeled h. The whole shape covers 216 square meters.">' +
    '<polygon points="72,44 184,44 216,140 40,140" fill="#EDEAE3" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="120" y1="44" x2="120" y2="140" stroke="#324DC7" stroke-width="2" stroke-dasharray="5 4"/>' +
    '<rect x="120" y="130" width="10" height="10" fill="none" stroke="#1e1e1e" stroke-width="1.4"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="128" y="38" text-anchor="middle">14 m</text>' +
    '<text x="128" y="157" text-anchor="middle">22 m</text>' +
    '<text x="130" y="96" fill="#324DC7" font-style="italic">h</text>' +
    '<text x="176" y="100" text-anchor="middle" font-size="13">216 m²</text></g>' +
    NOTA.replace('YY', '174') + '</svg>';

  var FIG_CONE =
    '<svg viewBox="0 0 220 196" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A paper cup in the shape of a cone, point down. The open top is a circle drawn as a flat oval, and the distance straight across that top from one side to the other is 12 centimeters. A dashed segment runs from the middle of the top straight down to the point at the bottom; that depth is the unknown asked for. The cup holds 96 pi cubic centimeters.">' +
    '<line x1="55" y1="50" x2="110" y2="170" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="165" y1="50" x2="110" y2="170" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<ellipse cx="110" cy="50" rx="55" ry="16" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="55" y1="50" x2="165" y2="50" stroke="#324DC7" stroke-width="2"/>' +
    '<line x1="110" y1="50" x2="110" y2="170" stroke="#324DC7" stroke-width="2" stroke-dasharray="5 4"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="110" y="28" text-anchor="middle">12 cm</text>' +
    '<text x="120" y="118" fill="#324DC7">?</text>' +
    '<text x="10" y="122" font-size="13">96π cm³</text></g>' +
    NOTA.replace('YY', '190') + '</svg>';

  var FIG_SHEET =
    '<svg viewBox="0 0 300 258" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A flat rectangular sheet of cardboard, 30 centimeters along the bottom and 24 centimeters along the side. A shaded square 6 centimeters on each side is marked at each of the four corners; those four squares are cut away and the four flaps that are left are folded straight up to make an open box.">' +
    '<rect x="30" y="25" width="240" height="192" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<g fill="#EDEAE3" stroke="#324DC7" stroke-width="2" stroke-dasharray="5 4">' +
    '<rect x="30" y="25" width="48" height="48"/><rect x="222" y="25" width="48" height="48"/>' +
    '<rect x="30" y="169" width="48" height="48"/><rect x="222" y="169" width="48" height="48"/></g>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="150" y="238" text-anchor="middle">30 cm</text>' +
    '<text x="0" y="0" transform="translate(18,121) rotate(-90)" text-anchor="middle">24 cm</text>' +
    '<text x="54" y="54" text-anchor="middle" font-size="12">6</text>' +
    '<text x="246" y="54" text-anchor="middle" font-size="12">6</text></g>' +
    NOTA.replace('YY', '252') + '</svg>';

  var FIG_PATH =
    '<svg viewBox="0 0 300 196" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rectangular lot 18 meters by 10 meters. Inside it, a smaller rectangle of grass is drawn, leaving a shaded border of the same width all the way around. That border is the path, and it is 1.5 meters wide everywhere.">' +
    '<rect x="33" y="25" width="234" height="130" fill="#EDEAE3" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="52.5" y="44.5" width="195" height="91" fill="#ffffff" stroke="#324DC7" stroke-width="2"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="150" y="176" text-anchor="middle">18 m</text>' +
    '<text x="0" y="0" transform="translate(18,90) rotate(-90)" text-anchor="middle">10 m</text>' +
    '<text x="150" y="39" text-anchor="middle" font-size="12">1.5 m</text></g>' +
    NOTA.replace('YY', '190') + '</svg>';

  var FIG_PYR =
    '<svg viewBox="0 0 260 206" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A monument shaped like a pyramid on a square base. Each edge of the base measures 24 meters. A segment drawn on the front face, from the middle of the front base edge straight up the face to the top point, measures 15 meters. A dashed segment runs from the top point straight down to the middle of the base and is labeled h.">' +
    '<polygon points="50,160 190,160 225,125 85,125" fill="none" stroke="#1e1e1e" stroke-width="2" stroke-dasharray="5 4"/>' +
    '<polygon points="50,160 190,160 137.5,30" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="190" y1="160" x2="137.5" y2="30" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="225" y1="125" x2="137.5" y2="30" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="137.5" y1="30" x2="120" y2="160" stroke="#324DC7" stroke-width="2.2"/>' +
    '<line x1="137.5" y1="30" x2="137.5" y2="142.5" stroke="#757575" stroke-width="1.8" stroke-dasharray="4 4"/>' +
    '<line x1="137.5" y1="142.5" x2="120" y2="160" stroke="#757575" stroke-width="1.6" stroke-dasharray="4 4"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="120" y="178" text-anchor="middle">24 m</text>' +
    '<text x="103" y="118" text-anchor="middle" font-size="13" fill="#324DC7">15 m</text>' +
    '<text x="147" y="112" font-style="italic">h</text></g>' +
    NOTA.replace('YY', '200') + '</svg>';

  /* ---------- Lines, angles and triangles ---------- */

  var FIG_EXT =
    '<svg viewBox="0 0 270 176" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A at the lower left, B at the lower right and C at the top. The angle at A is marked 2x degrees, the angle at B is marked 3x degrees and the angle at C is marked 5x degrees. The side BA is extended past A to the left, and the angle between that extension and the side AC is labeled y degrees.">' +
    '<line x1="20" y1="130" x2="200" y2="130" stroke="#757575" stroke-width="2" stroke-dasharray="6 4"/>' +
    '<polygon points="60,130 200,130 150,45" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="76" y="123">2x°</text><text x="190" y="123" text-anchor="end">3x°</text>' +
    '<text x="146" y="80" text-anchor="middle">5x°</text>' +
    '<text x="40" y="120" fill="#324DC7" font-style="italic">y°</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="54" y="146">A</text><text x="200" y="146">B</text>' +
    '<text x="150" y="36" text-anchor="middle">C</text></g>' +
    NOTA.replace('YY', '170') + '</svg>';

  var FIG_MIRROR =
    '<svg viewBox="0 0 320 186" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Level ground drawn as a horizontal line. A person stands at the left; the height of her eyes above the ground is 1.6 meters. A small mirror lies flat on the ground 1.2 meters in front of her. A flagpole stands 9 meters beyond the mirror. Two straight sight lines are drawn: one from her eyes down to the mirror, and one from the mirror up to the top of the pole, whose height is the unknown asked for.">' +
    '<line x1="20" y1="150" x2="305" y2="150" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="60" y1="150" x2="60" y2="86" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="60" cy="79" r="7" fill="none" stroke="#1e1e1e" stroke-width="2"/>' +
    '<line x1="280" y1="150" x2="280" y2="35" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="92" y="145" width="18" height="5" fill="#324DC7"/>' +
    '<line x1="60" y1="86" x2="101" y2="145" stroke="#324DC7" stroke-width="1.8" stroke-dasharray="5 4"/>' +
    '<line x1="101" y1="145" x2="280" y2="35" stroke="#324DC7" stroke-width="1.8" stroke-dasharray="5 4"/>' +
    '<g font-family="Georgia,serif" font-size="13">' +
    '<text x="0" y="0" transform="translate(44,118) rotate(-90)" text-anchor="middle">1.6 m</text>' +
    '<text x="80" y="167" text-anchor="middle">1.2 m</text>' +
    '<text x="190" y="167" text-anchor="middle">9 m</text>' +
    '<text x="292" y="92" fill="#324DC7" font-style="italic">h</text>' +
    '<text x="132" y="141" font-size="11" fill="#324DC7">mirror</text></g>' +
    NOTA.replace('YY', '180') + '</svg>';

  var FIG_MIDSEG =
    '<svg viewBox="0 0 260 172" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A at the top, B at the lower left and C at the lower right. Point D is on side AB and point E is on side AC. Tick marks show that D is the midpoint of AB and E is the midpoint of AC. The segment DE is drawn and measures 7.5.">' +
    '<polygon points="130,30 45,145 215,145" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="87.5" y1="87.5" x2="172.5" y2="87.5" stroke="#324DC7" stroke-width="2.4"/>' +
    '<g stroke="#1e1e1e" stroke-width="1.6">' +
    '<line x1="104.7" y1="55.8" x2="112.8" y2="61.7"/><line x1="62.2" y1="113.3" x2="70.3" y2="119.2"/>' +
    '<line x1="147.2" y1="61.7" x2="155.3" y2="55.8"/><line x1="189.7" y1="119.2" x2="197.8" y2="113.3"/></g>' +
    '<text x="130" y="81" text-anchor="middle" font-family="Georgia,serif" font-size="14" fill="#324DC7">7.5</text>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="130" y="22" text-anchor="middle">A</text><text x="34" y="153">B</text>' +
    '<text x="220" y="153">C</text><text x="76" y="84">D</text><text x="178" y="84">E</text></g>' +
    NOTA.replace('YY', '166') + '</svg>';

  var FIG_INC =
    '<svg viewBox="0 0 260 196" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A at the top, B at the lower left and C at the lower right. The angle at A measures 68 degrees. A segment from B and a segment from C are drawn to a point I inside the triangle; each of those segments cuts its own angle into two equal parts. The angle at I, between IB and IC, is the unknown asked for.">' +
    '<polygon points="130,30 40,160 215,160" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="40" y1="160" x2="128.9" y2="113.4" stroke="#324DC7" stroke-width="2.2"/>' +
    '<line x1="215" y1="160" x2="128.9" y2="113.4" stroke="#324DC7" stroke-width="2.2"/>' +
    '<circle cx="128.9" cy="113.4" r="3" fill="#324DC7"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="130" y="56" text-anchor="middle">68°</text>' +
    '<text x="126" y="136" text-anchor="middle" fill="#324DC7">?</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="130" y="22" text-anchor="middle">A</text><text x="28" y="168">B</text>' +
    '<text x="221" y="168">C</text><text x="136" y="110">I</text></g>' +
    NOTA.replace('YY', '190') + '</svg>';

  var FIG_PARA =
    '<svg viewBox="0 0 300 176" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallelogram PQRS. P is at the lower left, Q at the upper left, R at the upper right and S at the lower right, and PS is the horizontal bottom side. The angle at P measures 118 degrees. A segment from Q cuts the angle at Q into two equal parts and meets the bottom side PS at a point T. The angle PTQ, at T inside triangle PQT, is the unknown asked for.">' +
    '<polygon points="90,140 40,45 200,45 250,140" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="40" y1="45" x2="197.4" y2="140" stroke="#324DC7" stroke-width="2.2"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="104" y="131">118°</text>' +
    '<text x="174" y="133" text-anchor="middle" fill="#324DC7">?</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="82" y="156">P</text><text x="28" y="40">Q</text>' +
    '<text x="204" y="40">R</text><text x="256" y="152">S</text>' +
    '<text x="196" y="156">T</text></g>' +
    NOTA.replace('YY', '170') + '</svg>';

  var FIG_TRANS =
    '<svg viewBox="0 0 300 186" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two horizontal parallel lines, m on top and n below, are crossed by a slanted line t. At the point where t crosses line m, the angle that opens downward and to the left, between line m and t, measures 4x plus 15 degrees. At the point where t crosses line n, the angle that opens upward and to the left, between line n and t, measures 6x plus 5 degrees. Both marked angles lie between the two parallel lines and on the same side of t.">' +
    '<line x1="25" y1="55" x2="275" y2="55" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="25" y1="135" x2="275" y2="135" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="70" y1="160" x2="210" y2="30" stroke="#324DC7" stroke-width="2.2"/>' +
    '<circle cx="183.1" cy="55" r="3" fill="#1e1e1e"/><circle cx="96.9" cy="135" r="3" fill="#1e1e1e"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="118" y="75" text-anchor="middle">(4x + 15)°</text>' +
    '<text x="68" y="122" text-anchor="middle">(6x + 5)°</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="32" y="48">m</text><text x="32" y="150">n</text><text x="216" y="28">t</text></g>' +
    NOTA.replace('YY', '180') + '</svg>';

  var FIG_XSIM =
    '<svg viewBox="0 0 280 196" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Segment AB on top is parallel to segment DC below it. A is at the upper left, B at the upper right, D at the lower left and C at the lower right. The segments AC and BD are drawn and cross at point E, forming an X between the two parallel segments. AB measures 9, DC measures 15 and AE measures 6. The length of EC is the unknown asked for.">' +
    '<line x1="60" y1="45" x2="150" y2="45" stroke="#1e1e1e" stroke-width="2.8"/>' +
    '<line x1="50" y1="160" x2="200" y2="160" stroke="#1e1e1e" stroke-width="2.8"/>' +
    '<line x1="60" y1="45" x2="200" y2="160" stroke="#324DC7" stroke-width="2.2"/>' +
    '<line x1="150" y1="45" x2="50" y2="160" stroke="#324DC7" stroke-width="2.2"/>' +
    '<circle cx="112.5" cy="88.1" r="3" fill="#324DC7"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="105" y="36" text-anchor="middle">9</text>' +
    '<text x="125" y="178" text-anchor="middle">15</text>' +
    '<text x="76" y="72">6</text>' +
    '<text x="172" y="134" fill="#324DC7">?</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="48" y="40">A</text><text x="156" y="40">B</text>' +
    '<text x="38" y="172">D</text><text x="206" y="172">C</text>' +
    '<text x="118" y="82">E</text></g>' +
    NOTA.replace('YY', '190') + '</svg>';

  window.SAT_SETS.push({
    id: 'math-geo-d',
    title: 'Geometry & Trigonometry — Two Steps Deep',
    section: 'math',
    level: 'Difícil',
    description: 'Thirty-four geometry questions that each chain two relationships: a triangle inscribed in a circle, a solid whose missing length has to be found before the volume, similarity read off a mirror lying on the ground, an angle that only appears once two parallel-line rules are put together.',
    minutes: 45,
    questions: [

      /* ===== Circles (9) ===== */
      {
        id:'GTD-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'A triangle inscribed in a circle with a diameter as one side',
        figure: FIG_INSCR,
        stem:'In the figure, points A, B and C lie on a circle with center O, and AB passes through O. Side CA measures 9 cm and side CB measures 12 cm. What is the area of the circle, in square centimeters?',
        choices:{A:'225π', B:'15π', C:'56.25π', D:'110.25π'},
        correct:'C',
        expCorrect:'Two steps. Step 1: AB goes through the center, so AB is a diameter, and an angle inscribed in a semicircle is always a right angle — the right angle of triangle ACB sits at C. That makes AB = √(9² + 12²) = √225 = 15 cm (the 3-4-5 triple tripled). Step 2: that 15 is the DIAMETER, so r = 7.5 and the area is π(7.5)² = 56.25π cm². (Check: 7.5² = 56.25 ✓.)',
        expWrong:{
          A:'225π uses the 15 as the radius. It is the diameter, so it has to be halved before it is squared.',
          B:'15π is the circumference, πd. The circumference carries one power of r and the area carries two.',
          D:'110.25π averages the two given sides, (9 + 12)/2 = 10.5, and uses that as the radius. The radius comes from the side facing the right angle, not from an average.'
        },
        tip:'A chord through the center is a diameter, and the angle facing it from anywhere on the circle is 90°. That is the bridge between the two topics: the right triangle hands you the hypotenuse, and the hypotenuse IS the diameter — so halve it before it goes into πr².',
        desmos:'Evaluate pi*(sqrt(9^2+12^2)/2)^2 in Desmos: 176.71, which is the same as 56.25π.',
        desmosLatex:['\\pi\\left(\\frac{\\sqrt{9^2+12^2}}{2}\\right)^2']
      },
      {
        id:'GTD-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Two tangent segments drawn to a circle from the same outside point',
        figure: FIG_TANG2,
        stem:'In the figure, PA and PB are tangent to the circle with center O, touching it at A and at B. Angle APB measures 52°. What is the value of x, the measure of angle AOB in degrees?',
        choices:{A:'52', B:'128', C:'26', D:'38'},
        correct:'B',
        expCorrect:'Two facts, one after the other. First: a tangent meets the radius drawn to the point of contact at 90°, so angle OAP = angle OBP = 90°. Second: OAPB is a four-sided figure and its angles add to 360°. So x = 360 − 90 − 90 − 52 = 128. (Check: 128 + 90 + 90 + 52 = 360 ✓.)',
        expWrong:{
          A:'52 copies the angle at P. These two angles add to 180°, they are not equal — equal would need the other two corners to add to 180 as well, and they add to 180 only because each is 90.',
          C:'26 halves the angle at P. Halving is the right move for angle APO, an angle inside one of the two small triangles, but that is not what is being asked.',
          D:'38 is 90 − 52, treating the answer as complementary to the angle at P. The right angles are at A and at B, not at P.'
        },
        tip:'Whenever a tangent shows up, draw the radius to the point of contact and mark the 90°. With two tangents from one outside point you get a four-sided figure with two square corners, so the angle at the center and the angle at the point always add to 180°.',
        desmos:'Evaluate 360-90-90-52 in Desmos: 128.',
        desmosLatex:['360-90-90-52']
      },
      {
        id:'GTD-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'From two arcs of a circle to an inscribed angle',
        figure: FIG_ARCS,
        stem:'Points A, B and C lie on a circle. The arc from A to B that does not contain C measures 86°, and the arc from A to C that does not contain B measures 130°. What is the value of x, the measure of angle BAC in degrees?',
        choices:{A:'72', B:'144', C:'65', D:'43'},
        correct:'A',
        expCorrect:'Step 1: the three arcs go all the way around, so the arc from B to C that does not contain A measures 360 − 86 − 130 = 144°. Step 2: the vertex A sits ON the circle, so angle BAC is an inscribed angle and measures half of the arc it faces: 144/2 = 72°. (Check: the three angles of the inscribed triangle would be 43, 65 and 72, and they add to 180 ✓.)',
        expWrong:{
          B:'144 is the arc itself. An inscribed angle is half its arc; only an angle with its vertex at the CENTER equals the arc.',
          C:'65 halves the 130° arc. That is the inscribed angle at B, because B is the vertex facing that arc.',
          D:'43 halves the 86° arc, which is the inscribed angle at C. Match the vertex to the arc it FACES, not to an arc that touches it.'
        },
        tip:'An inscribed angle faces the arc on the far side of the circle — the one its two sides cut off, never the arcs that start at its own vertex. Find that arc first, then halve it.',
        desmos:'Evaluate (360-86-130)/2 in Desmos: 72.',
        desmosLatex:['\\frac{360-86-130}{2}']
      },
      {
        id:'GTD-04', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'A circle through the origin and the chord it cuts on the y-axis',
        stem:'In the xy-plane, a circle has its center at (6, −8) and passes through the origin. The circle crosses the y-axis at two points. What is the distance between those two points?',
        answer:'16',
        expCorrect:'Step 1, the radius: the distance from (6, −8) to (0, 0) is √(6² + 8²) = √100 = 10, so the circle is (x − 6)² + (y + 8)² = 100. Step 2, the y-axis means x = 0: (0 − 6)² + (y + 8)² = 100 → 36 + (y + 8)² = 100 → (y + 8)² = 64 → y + 8 = ±8, so y = 0 or y = −16. The two points are (0, 0) and (0, −16), which are 16 apart. (Check: the origin is one of them, exactly as the question promised ✓.)',
        tip:'"Crosses the y-axis" means x = 0 and "crosses the x-axis" means y = 0. Put that zero into the equation and solve the square that is left — the ± is what gives you the two points, and dropping it is what loses the chord.',
        desmos:'Graph (x-6)^2+(y+8)^2=100 in Desmos and read where it meets the y-axis: (0, 0) and (0, −16).',
        desmosLatex:['(x-6)^2+(y+8)^2=100','x=0']
      },
      {
        id:'GTD-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'From the general form of a circle to its highest point',
        stem:'In the xy-plane, the graph of x² + y² − 10x + 6y = 2 is a circle. What is the greatest y-coordinate of any point on that circle?',
        choices:{A:'6', B:'−9', C:'9', D:'3'},
        correct:'D',
        expCorrect:'Step 1, complete the square twice: x² − 10x becomes (x − 5)² − 25, and y² + 6y becomes (y + 3)² + 9. So (x − 5)² + (y + 3)² = 2 + 25 + 9 = 36 — center (5, −3), radius 6. Step 2: the highest point sits straight above the center, one radius up, so y = −3 + 6 = 3. (Check: (5, 3) gives 25 + 9 − 50 + 18 = 2 ✓.)',
        expWrong:{
          A:'6 is the radius, the value found on the way. The radius is how far up to go, not where you land — start counting from the center.',
          B:'−9 is the LOWEST point, −3 − 6. Subtracting a radius moves down.',
          C:'9 reads the center as (5, 3). The sign inside flips: (y + 3)² means the center sits at y = −3.'
        },
        tip:'The numbers inside the squares are the opposite of the center coordinates, and the number on the right is r², not r. Then: top = center y + r, bottom = center y − r, and the same idea sideways with x.',
        desmos:'Graph x^2+y^2-10x+6y=2 in Desmos and look at the top of the circle: y = 3.',
        desmosLatex:['x^2+y^2-10x+6y=2']
      },
      {
        id:'GTD-06', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'From the area of a circle and an arc length to the central angle',
        stem:'A circle has an area of 144π square inches. One of its arcs has a length of 6π inches. What is the measure, in degrees, of the central angle that cuts off that arc?',
        choices:{A:'15', B:'90', C:'180', D:'60'},
        correct:'B',
        expCorrect:'Step 1, get r from the area: πr² = 144π → r = 12, so the whole circumference is 2π(12) = 24π. Step 2: an arc is the same fraction of the circumference that its angle is of 360°. Here 6π/24π = 1/4, so the angle is (1/4)(360) = 90°. (Check: a quarter of 24π is 6π ✓.)',
        expWrong:{
          A:'15 divides the arc by the AREA, 6π/144π = 1/24. An arc is a length, so it can only be compared with another length: the circumference.',
          C:'180 uses πr = 12π as the circumference. The circumference is 2πr, or πd; πr² is the area.',
          D:'60 reads "6π" as "one sixth of the circle" and computes 360/6. The 6 is a length in inches, not a count of slices.'
        },
        tip:'Arc over circumference = angle over 360. Everything in a circle runs through r, so when you are handed the area, take the square root and get back to r before doing anything else.',
        desmos:'Evaluate 6/(2*12)*360 in Desmos: 90.',
        desmosLatex:['\\frac{6}{2\\cdot12}\\cdot360']
      },
      {
        id:'GTD-07', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'The ring between two circles that share a center',
        figure: FIG_RING,
        stem:'A round pond has a radius of 9 meters. A stone path 2 meters wide is laid all the way around the edge of the pond. What is the area of the path, in square meters?',
        choices:{A:'40π', B:'4π', C:'121π', D:'202π'},
        correct:'A',
        expCorrect:'Two circles and a subtraction. The outer circle has radius 9 + 2 = 11, so its area is 121π; the pond itself covers 81π. What is left is the path: 121π − 81π = 40π square meters. (Check: 11² − 9² = 121 − 81 = 40 ✓.)',
        expWrong:{
          B:'4π subtracts the radii first and then squares, (11 − 9)². Squaring does not pass through a subtraction: 11² − 9² is not (11 − 9)².',
          C:'121π is the whole outer circle, pond included. The path is only the ring on the outside of it.',
          D:'202π adds the two areas, 121 + 81, instead of subtracting.'
        },
        tip:'For a ring, widen the radius first and subtract the AREAS, never the radii. The width of the path is added to r once, not to the area.',
        desmos:'Evaluate 11^2-9^2 in Desmos: 40, so the path is 40π.',
        desmosLatex:['11^2-9^2']
      },
      {
        id:'GTD-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Two parallel chords in the same circle',
        figure: FIG_CHORDS2,
        stem:'A circle has a radius of 13. Two parallel chords are drawn, one of length 24 and one of length 10, and the center of the circle lies between them. How far apart are the two chords?',
        choices:{A:'7', B:'12', C:'34', D:'17'},
        correct:'D',
        expCorrect:'A perpendicular dropped from the center cuts a chord in half, and half-chord, distance and radius make a right triangle. For the 24-chord: half is 12, so the distance is √(13² − 12²) = √25 = 5. For the 10-chord: half is 5, so the distance is √(13² − 5²) = √144 = 12. The center lies BETWEEN them, so the two distances add: 5 + 12 = 17.',
        expWrong:{
          A:'7 is 12 − 5, the answer when both chords are on the SAME side of the center. The question puts the center between them, so the pieces add.',
          B:'12 is the distance from the center to the 10-chord alone — one of the two pieces, not the whole gap.',
          C:'34 doubles 17, counting each distance on both sides of the center. Each chord is one distance away, and there are two chords.'
        },
        tip:'Half-chord, distance from the center and radius are always a right triangle, so a chord question is a Pythagoras question in disguise. Then reread the sentence: same side means subtract, opposite sides means add. That single word is the whole problem.',
        desmos:'Evaluate sqrt(13^2-12^2)+sqrt(13^2-5^2) in Desmos: 17.',
        desmosLatex:['\\sqrt{13^2-12^2}+\\sqrt{13^2-5^2}']
      },
      {
        id:'GTD-09', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Circumference of a wheel and the number of turns it makes',
        stem:'A wheel has a diameter of 70 centimeters. Rolling without slipping, it travels 100 meters in a straight line. What is the greatest number of complete turns the wheel makes?',
        answer:'45',
        expCorrect:'One turn carries the wheel forward by exactly one circumference. Step 1: C = πd = 70π cm, and 100 m = 10,000 cm. Step 2: 10,000/(70π) = 10,000/219.91 = 45.47 turns. The question asks for COMPLETE turns, so the answer is 45 — after 46 turns the wheel would have covered 10,116 cm, more than it actually travelled.',
        tip:'Distance rolled = turns × circumference, and the circumference is πd — feeding a diameter into 2πr doubles every answer. When the word "complete" appears, round DOWN no matter what the decimal says.',
        desmos:'Evaluate 10000/(70*pi) in Desmos: 45.47, so 45 complete turns.',
        desmosLatex:['\\frac{10000}{70\\pi}']
      },

      /* ===== Right triangles and trigonometry (9) ===== */
      {
        id:'GTD-10', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Pythagorean theorem inside a rectangle, then its perimeter',
        stem:'A rectangular tabletop is 7 inches wide, and its diagonal measures 25 inches. What is the perimeter of the tabletop, in inches?',
        choices:{A:'64', B:'31', C:'62', D:'168'},
        correct:'C',
        expCorrect:'The diagonal splits the rectangle into two right triangles whose legs are the two sides. Step 1: the other side is √(25² − 7²) = √(625 − 49) = √576 = 24 — the 7-24-25 triple. Step 2: perimeter = 2(7 + 24) = 62 inches.',
        expWrong:{
          A:'64 is 2(25 + 7), using the diagonal as if it were a side. The diagonal is inside the rectangle and never touches the perimeter.',
          B:'31 is 7 + 24, one width plus one length — half the perimeter. A rectangle has two of each.',
          D:'168 is 7 × 24, the area. Perimeter adds sides, area multiplies them.'
        },
        tip:'Learn 3-4-5, 5-12-13, 8-15-17 and 7-24-25 cold: on the SAT an ugly square root is usually one of them. Then check what was actually asked — the side you just found is rarely the final answer.',
        desmos:'Evaluate 2*(7+sqrt(25^2-7^2)) in Desmos: 62.',
        desmosLatex:['2\\left(7+\\sqrt{25^2-7^2}\\right)']
      },
      {
        id:'GTD-11', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'From one tangent ratio to the sine and the cosine',
        stem:'In right triangle ABC, the right angle is at C, and tan A = 7/24. What is the value of sin A + cos A?',
        answer:'1.24',
        expCorrect:'tan A is opposite over adjacent, so build the triangle: the side across from A is 7k and the side beside it is 24k. Step 1, the hypotenuse: √(7² + 24²) = √625 = 25, so the three sides are 7k, 24k and 25k. Step 2: sin A = 7/25 and cos A = 24/25, so the sum is 31/25 = 1.24. The k cancels, which is why a single ratio is enough. (Check: (7/25)² + (24/25)² = 625/625 = 1 ✓.)',
        tip:'One trig ratio fixes the SHAPE of a right triangle, so you may as well let the two legs be exactly those numbers and find the third side. Every other ratio then reads straight off the picture.',
        desmos:'Evaluate 7/25+24/25 in Desmos: 1.24.',
        desmosLatex:['\\frac{7}{25}+\\frac{24}{25}']
      },
      {
        id:'GTD-12', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Pythagorean theorem used twice inside a box',
        stem:'A shipping crate is a rectangular box measuring 8 feet by 6 feet by 5 feet on the inside. What is the length, in feet, of the longest straight rod that fits inside the crate? (Round to the nearest hundredth.)',
        choices:{A:'11.18', B:'10.00', C:'19.00', D:'7.81'},
        correct:'A',
        expCorrect:'The rod runs from one corner to the opposite one. Step 1, the diagonal of the 8-by-6 floor: √(8² + 6²) = 10. Step 2: that 10 is one leg and the 5-foot height is the other, so the rod measures √(10² + 5²) = √125 = 11.18 feet. Both steps at once are √(8² + 6² + 5²).',
        expWrong:{
          B:'10.00 stops at the floor diagonal. A rod that long lies flat; the longest one climbs to the far top corner, so the height still has to enter.',
          C:'19.00 adds the three edges, 8 + 6 + 5. That is the trip along the edges, and a straight line is always shorter.',
          D:'7.81 is √(6² + 5²), the diagonal of one side wall. It leaves the longest edge out entirely.'
        },
        tip:'Corner to corner inside a box is √(l² + w² + h²) — Pythagoras twice, with the first answer becoming a leg of the second. It always beats every face diagonal and always falls short of the edges added up.',
        desmos:'Evaluate sqrt(8^2+6^2+5^2) in Desmos: 11.18.',
        desmosLatex:['\\sqrt{8^2+6^2+5^2}']
      },
      {
        id:'GTD-13', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'The segment from the right angle to the midpoint of the hypotenuse',
        figure: FIG_MEDIAN,
        stem:'In triangle DEF the right angle is at F, DF = 9 and FE = 12. Point M is the midpoint of DE. What is the length of FM?',
        choices:{A:'15', B:'7.5', C:'10.5', D:'6'},
        correct:'B',
        expCorrect:'Step 1: DE = √(9² + 12²) = √225 = 15. Step 2: drop the triangle on the axes with F at (0, 0), D at (0, 9) and E at (12, 0). Then M, the midpoint of DE, is at (6, 4.5), so FM = √(6² + 4.5²) = √56.25 = 7.5 — exactly half of DE. That is the general fact: M is the same distance from all three vertices, so FM is half the hypotenuse.',
        expWrong:{
          A:'15 is DE itself, the value found on the way. FM lives inside the triangle, so it has to be shorter than the longest side.',
          C:'10.5 averages the two legs, (9 + 12)/2. A midpoint is not an average of the sides beside it.',
          D:'6 halves the 12. Halving is the right instinct, but it is the HYPOTENUSE that gets halved, not a leg.'
        },
        tip:'In any right triangle, the segment from the right angle to the midpoint of the hypotenuse is exactly half the hypotenuse. If you ever doubt it, drop the triangle on the axes with the right angle at the origin and use the midpoint formula — twenty seconds, and nothing to misremember.',
        desmos:'Evaluate sqrt(9^2+12^2)/2 in Desmos: 7.5.',
        desmosLatex:['\\frac{\\sqrt{9^2+12^2}}{2}']
      },
      {
        id:'GTD-14', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Splitting an isosceles triangle into two right triangles',
        figure: FIG_ISO,
        stem:'In triangle ABC, AB = AC = 13 and BC = 10. The angle at vertex B has measure x. What is the value of tan x?',
        answer:'2.4',
        expCorrect:'Drop the height from A onto BC. Because the triangle is isosceles it lands on the midpoint, cutting BC into 5 and 5 and creating two right triangles. Step 1, the height: √(13² − 5²) = √144 = 12. Step 2: in the right triangle on the left, the side across from angle B is that height, 12, and the side beside it is 5, so tan x = 12/5 = 2.4.',
        tip:'The height of an isosceles triangle always lands on the MIDDLE of the odd side out, and that is what turns one awkward triangle into two right ones. After that every ratio is just opposite over adjacent in the small triangle.',
        desmos:'Evaluate sqrt(13^2-5^2)/5 in Desmos: 2.4.',
        desmosLatex:['\\frac{\\sqrt{13^2-5^2}}{5}']
      },
      {
        id:'GTD-15', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Cosine first, then the Pythagorean theorem',
        stem:'A straight cable runs from the top of a radio tower to an anchor on level ground. The cable is 75 meters long, and the cosine of the angle it makes with the ground is 0.28. How tall is the tower, in meters?',
        choices:{A:'21', B:'54', C:'267.86', D:'72'},
        correct:'D',
        expCorrect:'The cable is the hypotenuse, the ground distance sits beside the angle and the tower stands across from it. Step 1: cosine is adjacent over hypotenuse, so the anchor is 75(0.28) = 21 m from the base. Step 2: the tower is √(75² − 21²) = √(5625 − 441) = √5184 = 72 m. (Check: 21² + 72² = 5625 = 75² ✓.)',
        expWrong:{
          A:'21 is the ground distance — needed along the way, but not what was asked. The question wants the height.',
          B:'54 is 75 − 21. Sides of a right triangle never subtract like that; only their SQUARES do.',
          C:'267.86 divides, 75/0.28. Cosine times the hypotenuse gives the adjacent side, and a piece longer than the cable itself is impossible.'
        },
        tip:'Label the sketch before touching the calculator: hypotenuse, adjacent, opposite. Once a ratio gives you the second side, a² + b² = c² gives the third — and any side that comes out longer than the hypotenuse means you divided where you should have multiplied.',
        desmos:'Evaluate sqrt(75^2-(75*0.28)^2) in Desmos: 72.',
        desmosLatex:['\\sqrt{75^2-(75\\cdot0.28)^2}']
      },
      {
        id:'GTD-16', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Working backward through a 30-60-90 triangle to a side',
        stem:'A road sign is shaped like an equilateral triangle. Its height, measured from the middle of one side straight across to the opposite corner, is 9 inches. How long is each side of the sign, in inches? (Round to the nearest hundredth.)',
        choices:{A:'18', B:'15.59', C:'10.39', D:'4.50'},
        correct:'C',
        expCorrect:'The height cuts an equilateral triangle into two 30-60-90 triangles, whose sides are always in the ratio 1 : √3 : 2. Calling a side s, the half-side s/2 is the short leg and the height is the long leg, so height = (s/2)√3. Step 1: 9 = s√3/2. Step 2: s = 18/√3 = 6√3 = 10.39 inches. (Check: 10.39/2 = 5.196 and 5.196 × √3 = 9 ✓.)',
        expWrong:{
          A:'18 doubles the height, treating it as the short leg. The height is the LONG leg, so there is a √3 left to undo.',
          B:'15.59 is 9√3 — multiplying by √3 instead of dividing. Going backward from the long leg means dividing by it.',
          D:'4.50 halves the height, which would give the short leg only if the height were a full side of the triangle.'
        },
        tip:'In a 30-60-90 the sides run short, short×√3, short×2 — in that order. Name which one you were handed BEFORE multiplying: forward means multiply by √3, backward means divide by it.',
        desmos:'Evaluate 2*9/sqrt(3) in Desmos: 10.39.',
        desmosLatex:['\\frac{2\\cdot9}{\\sqrt{3}}']
      },
      {
        id:'GTD-17', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Legs in a given ratio and the perimeter of a right triangle',
        stem:'The two legs of a right triangle are in the ratio 3 : 4, and the perimeter of the triangle is 72 cm. What is the length, in centimeters, of the shortest side?',
        choices:{A:'18', B:'24', C:'30', D:'6'},
        correct:'A',
        expCorrect:'Write the legs as 3k and 4k. Step 1, the hypotenuse: √((3k)² + (4k)²) = √(25k²) = 5k, so the sides are 3k, 4k and 5k — the 3-4-5 triple. Step 2: 3k + 4k + 5k = 12k = 72 → k = 6, so the sides are 18, 24 and 30 and the shortest is 18. (Check: 18 + 24 + 30 = 72 ✓.)',
        expWrong:{
          B:'24 is the other leg, 4k. The shortest side faces the smallest angle, and here that side is 3k.',
          C:'30 is the hypotenuse — always the LONGEST side of a right triangle, so never the answer to "shortest".',
          D:'6 is k, the scale factor. It unlocks the sides but is not a side itself.'
        },
        tip:'When sides arrive as a ratio, give them a shared letter (3k, 4k) and let the second condition pin down k. Then write all three sides out before answering: half of these questions are lost by handing back the wrong one.',
        desmos:'Evaluate 3*(72/12) in Desmos: 18.',
        desmosLatex:['3\\cdot\\frac{72}{12}']
      },
      {
        id:'GTD-18', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'From a cosine value to the hypotenuse',
        stem:'In right triangle ABC, the right angle is at C and cos A = 0.6. Side BC, the side across from angle A, measures 16. What is the length of AB?',
        choices:{A:'12', B:'20', C:'26.67', D:'9.6'},
        correct:'B',
        expCorrect:'AB is the hypotenuse. Step 1: cos A = 0.6 says nothing about BC directly, so switch ratios — sin²A + cos²A = 1 gives sin A = √(1 − 0.36) = 0.8 (the 3-4-5 shape once more). Step 2: sin A = opposite/hypotenuse, so 16/AB = 0.8 and AB = 20. (Check: AC = 0.6 × 20 = 12, and 12² + 16² = 400 = 20² ✓.)',
        expWrong:{
          A:'12 is AC, the other leg, which is 0.6 × 20. That is the side the cosine describes, not the one asked for.',
          C:'26.67 is 16/0.6, matching the given side to the cosine. The 16 sits ACROSS from angle A, so it belongs to the sine.',
          D:'9.6 is 16 × 0.6. Multiplying by a ratio below 1 makes a side shorter, and the hypotenuse can never come out below 16.'
        },
        tip:'Before using a ratio, name the given side: opposite the angle, next to it, or the hypotenuse. If the ratio you were handed does not mention that side, change ratios first — sin² + cos² = 1 or the triangle itself will take you across.',
        desmos:'Evaluate 16/sqrt(1-0.6^2) in Desmos: 20.',
        desmosLatex:['\\frac{16}{\\sqrt{1-0.6^2}}']
      },

      /* ===== Area and volume (8) ===== */
      {
        id:'GTD-19', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Area of a trapezoid, solved backward for the height',
        figure: FIG_TRAP,
        stem:'A garden plot in the shape of a trapezoid has two parallel sides measuring 14 m and 22 m, and it covers 216 square meters. What is the height of the plot, in meters?',
        choices:{A:'6', B:'54', C:'24', D:'12'},
        correct:'D',
        expCorrect:'A trapezoid is the AVERAGE of the two parallel sides times the height: A = ½(b₁ + b₂)h. Step 1: ½(14 + 22) = 18. Step 2: 216 = 18h → h = 12 m. (Check: ½(36)(12) = 216 ✓.)',
        expWrong:{
          A:'6 drops the ½ and solves 216 = 36h. Without it the formula measures a rectangle as wide as both sides put end to end.',
          B:'54 uses 22 − 14 = 8 in place of the sum, solving ½(8)h = 216. A trapezoid averages its parallel sides; their difference never enters.',
          C:'24 halves twice: ½ of 18 is 9, then 216/9 = 24. The ½ applies to the SUM, once.'
        },
        tip:'½(b₁ + b₂) is simply the average width of the shape, so a trapezoid is a rectangle of that width. When the area is given and a length is missing, the same formula runs backward.',
        desmos:'Evaluate 216/(0.5*(14+22)) in Desmos: 12.',
        desmosLatex:['\\frac{216}{0.5(14+22)}']
      },
      {
        id:'GTD-20', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Volume of a cone, solved backward for the height',
        figure: FIG_CONE,
        stem:'A paper cup in the shape of a cone measures 12 cm straight across the open top, and it holds 96π cubic centimeters when full. How deep is the cup, in centimeters?',
        choices:{A:'2.67', B:'2', C:'8', D:'0.67'},
        correct:'C',
        expCorrect:'Step 1: 12 cm is the distance all the way across the top, so half of it, 6 cm, is what the formula wants. Step 2: V = (1/3)π(6²)h = 12πh, so 12πh = 96π and h = 8 cm. (Check: (1/3)π(36)(8) = 96π ✓.)',
        expWrong:{
          A:'2.67 drops the 1/3 and solves 36h = 96. A cone holds one third of the cylinder around it, so leaving the 1/3 out makes the cup three times too shallow.',
          B:'2 uses the 12 as the distance from the middle to the rim instead of all the way across, giving (1/3)(144)h = 96. Doubling a length quadruples anything squared.',
          D:'0.67 makes both mistakes at once: 96/144.'
        },
        tip:'"Across" is the full width — halve it before it goes anywhere near r². And the 1/3 belongs to every solid that comes to a point, cones and pyramids alike, never to a cylinder or a prism.',
        desmos:'Evaluate 96/((1/3)*6^2) in Desmos: 8.',
        desmosLatex:['\\frac{96}{\\frac{1}{3}\\cdot6^2}']
      },
      {
        id:'GTD-21', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Scaling an area down and changing the units',
        stem:'An architect builds a model of a stadium at a scale of 1 : 250. The real playing field covers 7,500 square meters. What is the area of the playing field on the model, in square centimeters?',
        choices:{A:'1200', B:'300000', C:'0.12', D:'12'},
        correct:'A',
        expCorrect:'Two traps back to back. Step 1: areas shrink by the SQUARE of the scale factor, so the model field is 7,500/250² = 7,500/62,500 = 0.12 square meters. Step 2: 1 m = 100 cm, so 1 m² = 100² = 10,000 cm², and 0.12 × 10,000 = 1,200 square centimeters.',
        expWrong:{
          B:'300000 divides by 250 instead of 250². Lengths shrink by k and areas by k², so dividing once leaves a model field larger than the room it sits in.',
          C:'0.12 is the answer in square METERS. The question asks for square centimeters, so the second step is still pending.',
          D:'12 converts with 100 instead of 10,000. A square meter is 100 cm by 100 cm, which is 10,000 square centimeters.'
        },
        tip:'Scale factor k: lengths ×k, areas ×k², volumes ×k³ — and the very same squaring runs the unit change, which is why a square meter is 10,000 square centimeters and not 100. Two squarings in one question is the classic hard-module build.',
        desmos:'Evaluate 7500/250^2*10000 in Desmos: 1200.',
        desmosLatex:['\\frac{7500}{250^2}\\cdot10000']
      },
      {
        id:'GTD-22', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Volume of an open box folded up from a flat sheet',
        figure: FIG_SHEET,
        stem:'A flat sheet of cardboard measures 30 cm by 24 cm. A square 6 cm on each side is cut from each of the four corners, and the four flaps left over are folded straight up to form an open box. What is the volume of the box, in cubic centimeters?',
        choices:{A:'2592', B:'1296', C:'4320', D:'2160'},
        correct:'B',
        expCorrect:'The flaps stand 6 cm tall, so the height is 6. Every side of the base loses 6 cm at BOTH ends: 30 − 6 − 6 = 18 and 24 − 6 − 6 = 12. Volume = 18 × 12 × 6 = 1,296 cm³. (Check: 18 + 6 + 6 = 30 ✓ and 12 + 6 + 6 = 24 ✓.)',
        expWrong:{
          A:'2592 takes one 6 off each side, 24 × 18 × 6. There is a corner square at each END of every side, so every side loses 6 twice.',
          C:'4320 uses the whole sheet as the base, 30 × 24 × 6, as if nothing had been cut away.',
          D:'2160 cuts both ends of the 24 cm side but leaves the 30 cm side untouched, 30 × 12 × 6.'
        },
        tip:'Cutting corner squares of side c takes 2c off BOTH measurements of the sheet, and c becomes the height. Write the base as (L − 2c)(W − 2c) every single time and the trap stops existing.',
        desmos:'Evaluate (30-12)*(24-12)*6 in Desmos: 1296.',
        desmosLatex:['(30-12)(24-12)\\cdot6']
      },
      {
        id:'GTD-23', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'From a volume to a missing height, then the surface it covers',
        stem:'An open-top box is a rectangular prism whose base measures 15 cm by 12 cm, and the box holds 1,440 cubic centimeters. Glass covers the base and all four walls. How many square centimeters of glass does the box need?',
        choices:{A:'792', B:'432', C:'180', D:'612'},
        correct:'D',
        expCorrect:'Step 1, the missing height: volume = (base)(height), so 1,440 = (15 × 12)h = 180h and h = 8 cm. Step 2, count the faces: base 15 × 12 = 180; two walls of 15 × 8 = 120 each, so 240; two walls of 12 × 8 = 96 each, so 192. Total = 180 + 240 + 192 = 612 cm².',
        expWrong:{
          A:'792 adds a top as well, 612 + 180. The box is open, so no glass goes up there.',
          B:'432 counts the four walls and forgets the base, which the question asks for by name.',
          C:'180 is the base area — the number found on the way to the height, not the answer.'
        },
        tip:'When a solid hands you a volume and hides a length, find the length first: volume is one equation with one unknown. Then count the faces out loud — one base, two of these, two of those — and check the word "open" before including a top.',
        desmos:'Evaluate 15*12+2*15*8+2*12*8 in Desmos: 612.',
        desmosLatex:['15\\cdot12+2\\cdot15\\cdot8+2\\cdot12\\cdot8']
      },
      {
        id:'GTD-24', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volume of a prism, a unit change and a rate',
        stem:'A swimming pool is a rectangular prism 12 m long and 5 m wide, filled with water to a depth of 1.4 m. A pump removes 250 liters of water per minute. How many minutes does it take to empty the pool? (1 cubic meter = 1,000 liters.)',
        answer:'336',
        expCorrect:'Step 1, the size: 12 × 5 × 1.4 = 84 cubic meters. Step 2, the units: 84 × 1,000 = 84,000 liters. Step 3, the rate: 84,000/250 = 336 minutes. (Check: 250 × 336 = 84,000 ✓.)',
        tip:'Three-step questions like this always break the same way: size, then units, then rate. Convert BEFORE dividing — cubic meters over liters per minute is a number that means nothing, and it usually looks reasonable enough to bubble in.',
        desmos:'Evaluate 12*5*1.4*1000/250 in Desmos: 336.',
        desmosLatex:['\\frac{12\\cdot5\\cdot1.4\\cdot1000}{250}']
      },
      {
        id:'GTD-25', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Area of a border path inside a rectangle',
        figure: FIG_PATH,
        stem:'A rectangular lot measures 18 m by 10 m. A path 1.5 m wide runs all the way around the inside edge of the lot, and the rest of the lot is grass. What is the area of the path, in square meters?',
        choices:{A:'39.75', B:'84', C:'75', D:'105'},
        correct:'C',
        expCorrect:'Step 1, the grass: the path eats 1.5 m off EACH end of both measurements, so the grass is (18 − 3) by (10 − 3) = 15 × 7 = 105 m². Step 2: the path is the rest, 18 × 10 − 105 = 180 − 105 = 75 m².',
        expWrong:{
          A:'39.75 takes 1.5 m off one end only, 16.5 × 8.5 = 140.25. The path runs all the way around, so it bites into both ends.',
          B:'84 multiplies the perimeter by the width, 2(18 + 10)(1.5). That counts each corner square twice, because a corner belongs to two sides at once.',
          D:'105 is the grass, the value found on the way. The path is everything else.'
        },
        tip:'A border of width w inside a rectangle leaves an inner rectangle of (L − 2w) by (W − 2w) — the 2 is the entire trick. Then subtract; perimeter × width always double-counts the corners.',
        desmos:'Evaluate 18*10-(18-3)*(10-3) in Desmos: 75.',
        desmosLatex:['18\\cdot10-(18-3)(10-3)']
      },
      {
        id:'GTD-26', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Volume of a pyramid when the height has to be found first',
        figure: FIG_PYR,
        stem:'A monument is a solid pyramid standing on a square base 24 m on each side. On one of its faces, the segment from the middle of a base edge straight up to the top point measures 15 m. What is the volume of the monument, in cubic meters?',
        choices:{A:'1728', B:'5184', C:'2880', D:'2304'},
        correct:'A',
        expCorrect:'Step 1, the vertical height. That 15 m segment, the vertical height, and the 12 m from the middle of the base out to the middle of an edge (half of 24) form a right triangle with the 15 as its longest side, so h = √(15² − 12²) = √81 = 9 m. Step 2: V = (1/3)(base)(height) = (1/3)(24²)(9) = (1/3)(576)(9) = 1,728 m³.',
        expWrong:{
          B:'5184 leaves out the 1/3, giving 576 × 9. A pyramid fills one third of the box around it.',
          C:'2880 uses the 15 as the vertical height. The 15 slopes up a face; the true height stands straight up and is always shorter.',
          D:'2304 uses the 12 as the height. The 12 is the horizontal leg of that right triangle, not the vertical one.'
        },
        tip:'A measurement taken along a face is never the height. Build the right triangle first — face segment, height, and half a base edge — and only then reach for (1/3)(base)(height).',
        desmos:'Evaluate (1/3)*24^2*sqrt(15^2-12^2) in Desmos: 1728.',
        desmosLatex:['\\frac{1}{3}\\cdot24^2\\cdot\\sqrt{15^2-12^2}']
      },

      /* ===== Lines, angles and triangles (8) ===== */
      {
        id:'GTD-27', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Angles of a triangle in a given ratio, then an exterior angle',
        figure: FIG_EXT,
        stem:'In the figure, the three angles of triangle ABC are in the ratio 2 : 3 : 5, with the smallest one at vertex A. Side BA is extended past A. What is the value of y, the measure in degrees of the angle between that extension and side AC?',
        choices:{A:'36', B:'144', C:'126', D:'90'},
        correct:'B',
        expCorrect:'Step 1: 2x + 3x + 5x = 10x = 180, so x = 18 and the three angles are 36°, 54° and 90°. Step 2: the angle at A and the angle y sit together on a straight line, so they add to 180 and y = 180 − 36 = 144°. (Check the other way: an exterior angle equals the two far angles added, 54 + 90 = 144 ✓.)',
        expWrong:{
          A:'36 is the angle INSIDE the triangle at A. The exterior angle is its partner on the straight line.',
          C:'126 subtracts the wrong angle, 180 − 54. An exterior angle pairs with the interior angle at ITS OWN vertex.',
          D:'90 is the largest angle of the triangle, 5x, which sits at C and has nothing to do with the extension at A.'
        },
        tip:'An exterior angle has two identities: 180 minus its own interior angle, and the sum of the two remote interior ones. Compute both when there is time — if they disagree, one of your angles is wrong.',
        desmos:'Evaluate 180-2*(180/10) in Desmos: 144.',
        desmosLatex:['180-2\\cdot\\frac{180}{10}']
      },
      {
        id:'GTD-28', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Isosceles triangle where the given angle cannot be a base angle',
        stem:'One angle of an isosceles triangle measures 116°. What is the measure, in degrees, of each of the two equal angles?',
        answer:'32',
        expCorrect:'Step 1, decide which angle the 116° is. It cannot be one of the equal pair: two of them would already add to 232°, more than a whole triangle. So the 116° is the odd angle out. Step 2: the other two share what is left, (180 − 116)/2 = 64/2 = 32°. (Check: 116 + 32 + 32 = 180 ✓.)',
        tip:'In an isosceles triangle, an angle of 90° or more can only be the odd one out — two of them would blow past 180 on their own. Settle that first, because an acute given angle is genuinely ambiguous and the problem has to tell you which one it is.',
        desmos:'Evaluate (180-116)/2 in Desmos: 32.',
        desmosLatex:['\\frac{180-116}{2}']
      },
      {
        id:'GTD-29', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Similar triangles set up by a mirror on level ground',
        figure: FIG_MIRROR,
        stem:'Nadia sets a small mirror flat on level ground and steps back until she can see the top of a flagpole in it. Her eyes are 1.6 m above the ground, she stands 1.2 m from the mirror, and the mirror is 9 m from the base of the pole. How tall is the pole, in meters?',
        choices:{A:'6.75', B:'10.8', C:'13.6', D:'12'},
        correct:'D',
        expCorrect:'Light leaves a mirror at the same angle it arrives, so the two triangles — eyes to mirror, and mirror to the top of the pole — have equal angles and are similar. Matching sides pair up height with height and ground distance with ground distance: 1.6/1.2 = h/9. Step 2: h = 9(1.6)/1.2 = 12 m. (Check: 1.6/1.2 = 1.333 and 12/9 = 1.333 ✓.)',
        expWrong:{
          A:'6.75 flips the ratio, 9(1.2)/1.6. Sanity-check the shape: the pole sits far from the mirror, so it has to be TALLER than Nadia, not shorter.',
          B:'10.8 is 9 × 1.2, multiplying the two ground distances and never using her height at all. Similar triangles compare quantities of the same kind.',
          C:'13.6 measures the far distance from Nadia rather than from the mirror, using 9 + 1.2 = 10.2. Both triangles start AT the mirror.'
        },
        tip:'Write the proportion as (height/base) = (height/base), one triangle on each side of the equals sign. Then check the direction before you bubble: the bigger triangle has to come out bigger.',
        desmos:'Evaluate 9*1.6/1.2 in Desmos: 12.',
        desmosLatex:['\\frac{9\\cdot1.6}{1.2}']
      },
      {
        id:'GTD-30', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Midsegment of a triangle and the perimeter that follows',
        figure: FIG_MIDSEG,
        stem:'In triangle ABC, D is the midpoint of AB and E is the midpoint of AC. Segment DE measures 7.5, and the perimeter of triangle ADE is 19. What is the perimeter of triangle ABC?',
        answer:'38',
        expCorrect:'Each side of triangle ADE is exactly half of the side it matches in ABC: AD is half of AB, AE is half of AC, and DE is half of BC (that last one is the midsegment rule). Halving all three sides halves the perimeter, so ABC has perimeter 2 × 19 = 38. (Check with the numbers: DE = 7.5 makes BC = 15, so AD + AE = 19 − 7.5 = 11.5 and AB + AC = 23; then 23 + 15 = 38 ✓.)',
        tip:'The segment joining two midpoints is parallel to the third side and half as long, which makes the small triangle a scale copy at k = ½. Perimeters scale by k, so double and stop — there is no need to hunt down the individual sides.',
        desmos:'Evaluate 2*19 in Desmos: 38.',
        desmosLatex:['2\\cdot19']
      },
      {
        id:'GTD-31', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Where two angle bisectors of a triangle meet',
        figure: FIG_INC,
        stem:'In triangle ABC, the angle at A measures 68°. A segment from B and a segment from C each cut their own angle into two equal parts, and the two segments meet at point I inside the triangle. What is the measure, in degrees, of angle BIC?',
        choices:{A:'112', B:'56', C:'124', D:'158'},
        correct:'C',
        expCorrect:'Step 1: the three angles of ABC add to 180, so angle B + angle C = 180 − 68 = 112°. Step 2: inside triangle BIC the angles at B and at C are the HALVES, and those halves add to 112/2 = 56°. So angle BIC = 180 − 56 = 124°. (That is the general result: angle BIC = 90 + A/2 = 90 + 34 = 124 ✓.)',
        expWrong:{
          A:'112 is angle B + angle C, the value found on the way. It is a sum of two angles of the big triangle, not an angle of the small one.',
          B:'56 is the sum of the two halves inside triangle BIC. One subtraction from 180 is still missing.',
          D:'158 uses 90 + A instead of 90 + A/2. Only half of each of the other two angles ever enters triangle BIC, and that halving is the whole point.'
        },
        tip:'When bisectors meet, move into the SMALL triangle: fill in its two known angles (the halves) and subtract from 180. Worth knowing cold: the angle where two bisectors meet is 90 + (third angle)/2.',
        desmos:'Evaluate 180-(180-68)/2 in Desmos: 124.',
        desmosLatex:['180-\\frac{180-68}{2}']
      },
      {
        id:'GTD-32', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'A bisector inside a parallelogram',
        figure: FIG_PARA,
        stem:'In parallelogram PQRS, the angle at P measures 118°. The segment from Q that cuts angle PQR into two equal parts meets side PS at point T. What is the measure, in degrees, of angle PTQ?',
        choices:{A:'31', B:'62', C:'59', D:'149'},
        correct:'A',
        expCorrect:'Step 1: in a parallelogram, two angles next to each other add to 180, so angle PQR = 180 − 118 = 62°, and the bisector makes angle PQT = 31°. Step 2: triangle PQT has 118° at P and 31° at Q, so angle PTQ = 180 − 118 − 31 = 31°. (The two equal angles mean PT = PQ, which is why this construction always produces an isosceles triangle ✓.)',
        expWrong:{
          B:'62 is the whole angle at Q, before the bisector halves it. Stopping there skips the word "bisects".',
          C:'59 halves the 118 rather than its supplement. The bisector cuts the angle at Q, and P and Q are different angles here.',
          D:'149 is 180 − 31, as if angle PTQ and the 31° sat on a straight line. They are two angles of the SAME triangle, so all three add to 180.'
        },
        tip:'In a parallelogram, neighbouring angles add to 180 and opposite ones are equal. After that, find one triangle that contains the angle you want and fill in its other two — never leap to the answer straight from the big figure.',
        desmos:'Evaluate 180-118-(180-118)/2 in Desmos: 31.',
        desmosLatex:['180-118-\\frac{180-118}{2}']
      },
      {
        id:'GTD-33', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Same-side interior angles written as expressions',
        figure: FIG_TRANS,
        stem:'In the figure, lines m and n are parallel and line t crosses both of them. The two marked angles lie between m and n and on the same side of t; one measures (4x + 15)° and the other measures (6x + 5)°. What is the measure, in degrees, of the LARGER of the two marked angles?',
        choices:{A:'16', B:'79', C:'35', D:'101'},
        correct:'D',
        expCorrect:'Step 1: two angles between the parallel lines and on the same side of the transversal add to 180, so (4x + 15) + (6x + 5) = 180 → 10x + 20 = 180 → x = 16. Step 2: substitute back — 4(16) + 15 = 79 and 6(16) + 5 = 101, so the larger one is 101. (Check: 79 + 101 = 180 ✓.)',
        expWrong:{
          A:'16 is the value of x. The question asks for an angle; x is only the tool that gets there.',
          B:'79 is the smaller of the two. Both expressions have to be evaluated before one can be chosen.',
          C:'35 sets the two expressions equal, which gives x = 5. Same-side interior angles are supplementary; it is the ALTERNATE interior pair, on opposite sides of the transversal, that is equal.'
        },
        tip:'Same side of the transversal, add to 180. Opposite sides, equal. Decide which pair you have before writing the equation, and once x is found, read the question again — it almost always wants an angle instead.',
        desmos:'Solve 4x+15+6x+5=180 in Desmos: x = 16, so 6x+5 = 101.',
        desmosLatex:['4x+15+6x+5=180']
      },
      {
        id:'GTD-34', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Triangles that cross between two parallel segments',
        figure: FIG_XSIM,
        stem:'In the figure, segment AB is parallel to segment DC, and segments AC and BD cross at point E. AB = 9, DC = 15 and AE = 6. What is the length of EC?',
        choices:{A:'3.6', B:'10', C:'12', D:'6'},
        correct:'B',
        expCorrect:'Because AB and DC are parallel, the alternate interior angles make triangle AEB similar to triangle CED, with A matching C and B matching D. Step 1, the ratio: AB/DC = 9/15 = 3/5. Step 2: AE and EC are matching sides, so AE/EC = 3/5 → 6/EC = 3/5 → EC = 30/3 = 10. (Check: 6/10 = 0.6 and 9/15 = 0.6 ✓.)',
        expWrong:{
          A:'3.6 flips the ratio, 6(9/15). The longer parallel side belongs to the bigger triangle, so EC has to come out longer than 6, not shorter.',
          C:'12 adds the 6-unit gap between the two parallel sides onto AE. Similar figures scale by multiplying, never by adding a fixed amount.',
          D:'6 assumes E is the midpoint of AC. The crossing point is a midpoint only when the two parallel segments are the SAME length.'
        },
        tip:'Two parallel segments with crossing diagonals always make an X of similar triangles, and the ratio of the parallel sides is the ratio of every matching pair. Build that fraction from the two known lengths first, then set the unknown pair equal to it.',
        desmos:'Evaluate 6*15/9 in Desmos: 10.',
        desmosLatex:['\\frac{6\\cdot15}{9}']
      }
    ]
  });
})();
