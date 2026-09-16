/* SAT Studio question set — Math: Geometry & Trigonometry (GTC-01 a GTC-34) */
(function(){
  /* El nivel de ENTRADA y MEDIO del dominio: figuras limpias, uno o dos pasos,
     y las relaciones básicas bien enseñadas. Los otros dos sets del dominio
     (math-geo-b, math-geo-pd-a) cargan la parte alta.

     Figuras: SVG inline, viewBox propio, role="img" y un aria-label que por sí
     solo alcanza para contestar (es lo único que oye un lector de pantalla).
     Cada medida dibujada se verificó con un script contra el enunciado: los
     ángulos salen de las coordenadas reales, no del ojo.

     OJO con el detector de español: la palabra inglesa "triangular" cae en el
     patrón triangul, así que acá se dice "in the shape of a triangle".

     OJO con skillOf(): prueba Circles → Right triangles → Area and volume →
     Lines, angles and triangles sobre skill + los primeros 160 caracteres del
     stem, y gana el PRIMERO que calce. Por eso:
       · las de volumen no dicen "radius" ni "diameter" temprano (dicen "across");
       · las de líneas y ángulos no dicen "area", "volume", "surface", "solid"
         ni "dimension", y nunca "right triangle" ni "complementary angle". */

  var NOTA = function(y){
    return '<text x="12" y="' + y + '" font-size="11" fill="#757575" ' +
           'font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>';
  };
  var TINTA = '#1e1e1e', AZUL = '#324DC7', GRIS = '#757575';

  /* ================= Circles ================= */

  /* GTC-05: AB diámetro (A 45,120 · B 215,120 · O 130,120 · r 85).
     C sobre la circunferencia a 56° → (177.5, 49.5). Verificado: ángulo en
     A = 28°, en B = 62°, en C = 90° (Tales). El recto NO se marca: es lo que
     la pregunta quiere que el estudiante recuerde. */
  var FIG_SEMI =
    '<svg viewBox="0 0 260 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with center O. Points A and B are the two ends of a segment that passes straight through O, so AB is a diameter: A is on the left of the circle and B is on the right. Point C is on the circle above AB, and the chords CA and CB are drawn. The angle at A, between AB and AC, measures 28 degrees. The angle at B, between BA and BC, is labeled x degrees.">' +
    '<circle cx="130" cy="120" r="85" fill="none" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<line x1="45" y1="120" x2="215" y2="120" stroke="' + TINTA + '" stroke-width="2.2"/>' +
    '<line x1="45" y1="120" x2="177.5" y2="49.5" stroke="' + AZUL + '" stroke-width="2.2"/>' +
    '<line x1="177.5" y1="49.5" x2="215" y2="120" stroke="' + AZUL + '" stroke-width="2.2"/>' +
    '<circle cx="130" cy="120" r="3" fill="' + TINTA + '"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="92" y="112" text-anchor="middle">28°</text>' +
    '<text x="181" y="99" text-anchor="middle" fill="' + AZUL + '" font-style="italic">x°</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="34" y="136">A</text><text x="220" y="136">B</text>' +
    '<text x="182" y="42">C</text><text x="133" y="113">O</text></g>' +
    NOTA(230) + '</svg>';

  /* GTC-06: O(130,130) r=85; A y B a 250° y 290° → (100.9,209.9) y (159.1,209.9).
     Verificado: ángulo AOB = 40°, ángulo OAB = 70°. */
  var FIG_RADII =
    '<svg viewBox="0 0 260 262" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with center O. Points A and B are on the lower part of the circle, A on the left and B on the right. The two radii OA and OB are drawn, and the chord AB joins the two points, forming triangle OAB. The angle at the center, angle AOB, measures 40 degrees. The angle at A, angle OAB, is labeled x degrees.">' +
    '<circle cx="130" cy="115" r="105" fill="none" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<line x1="130" y1="115" x2="94.1" y2="213.7" stroke="' + TINTA + '" stroke-width="2.2"/>' +
    '<line x1="130" y1="115" x2="165.9" y2="213.7" stroke="' + TINTA + '" stroke-width="2.2"/>' +
    '<line x1="94.1" y1="213.7" x2="165.9" y2="213.7" stroke="' + AZUL + '" stroke-width="2.2"/>' +
    '<circle cx="130" cy="115" r="3" fill="' + TINTA + '"/>' +
    '<g font-family="Georgia,serif" font-size="13">' +
    '<text x="130" y="175" text-anchor="middle">40°</text>' +
    '<text x="119" y="197" text-anchor="middle" font-size="12" fill="' + AZUL + '" font-style="italic">x°</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="136" y="111">O</text><text x="80" y="230">A</text><text x="172" y="230">B</text></g>' +
    NOTA(254) + '</svg>';

  /* GTC-08: O(130,110) r=90 px = 13 unidades. La cuerda está a 34.6 px = 5 del
     centro y mide 166.2 px = 24. Dibujo A ESCALA (6.923 px por unidad). */
  var FIG_CHORD =
    '<svg viewBox="0 0 260 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with center O. A horizontal chord AB is drawn below the center, with A on the left and B on the right. A dashed segment runs from O straight down to the midpoint of the chord, meeting it at a right angle, and that dashed segment is labeled 5. The radius from O to B is drawn and labeled 13. The length of the chord AB is what the question asks for.">' +
    '<circle cx="130" cy="110" r="90" fill="none" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<line x1="46.9" y1="144.6" x2="213.1" y2="144.6" stroke="' + AZUL + '" stroke-width="2.5"/>' +
    '<line x1="130" y1="110" x2="130" y2="144.6" stroke="' + GRIS + '" stroke-width="2" stroke-dasharray="5 4"/>' +
    '<line x1="130" y1="110" x2="213.1" y2="144.6" stroke="' + TINTA + '" stroke-width="2.2"/>' +
    '<polygon points="130,144.6 138,144.6 138,136.6 130,136.6" fill="none" stroke="' + TINTA + '" stroke-width="1.5"/>' +
    '<circle cx="130" cy="110" r="3" fill="' + TINTA + '"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="137" y="133">5</text><text x="166" y="118">13</text>' +
    '<text x="90" y="163" text-anchor="middle" fill="' + AZUL + '">?</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="34" y="160">A</text><text x="218" y="160">B</text><text x="136" y="106">O</text></g>' +
    NOTA(232) + '</svg>';

  /* ================= Right triangles ================= */

  /* GTC-14: base 100 px = 18 ft, antena 188 px. Verificado: el ángulo en el
     ancla mide 62.0°. Dibujo a escala. */
  var FIG_ANTENNA =
    '<svg viewBox="0 0 260 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A vertical antenna stands on level ground, with a small square at its base marking the right angle. A straight cable runs from the top of the antenna down to an anchor point on the ground. The distance along the ground from the base of the antenna to the anchor is 18 feet. At the anchor, the angle between the ground and the cable measures 62 degrees. The length of the cable is what the question asks for.">' +
    '<line x1="20" y1="200" x2="200" y2="200" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<line x1="40" y1="200" x2="40" y2="12" stroke="' + TINTA + '" stroke-width="2.8"/>' +
    '<line x1="40" y1="12" x2="140" y2="200" stroke="' + AZUL + '" stroke-width="2.5"/>' +
    '<polygon points="40,200 56,200 56,184 40,184" fill="none" stroke="' + TINTA + '" stroke-width="1.5"/>' +
    '<circle cx="140" cy="200" r="3.5" fill="' + TINTA + '"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="90" y="218" text-anchor="middle">18 ft</text>' +
    '<text x="104" y="178" text-anchor="middle">62°</text>' +
    '<text x="78" y="112" text-anchor="middle" fill="' + AZUL + '">?</text></g>' +
    NOTA(232) + '</svg>';

  /* GTC-17: horizontal 170 px = 40 m, línea de vista a 35° exactos (119 px de
     subida). El palito del ojo va exagerado a propósito y por eso la nota. */
  var FIG_CLIFF =
    '<svg viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A surveyor stands on level ground facing a vertical cliff. A short vertical segment shows eye level, 1.6 meters above the ground. From eye level a dashed horizontal line runs across to the cliff; that horizontal distance is 40 meters. From the same eye level a straight line of sight rises to the top of the cliff, and the angle between the dashed horizontal line and the line of sight measures 35 degrees. The total height of the cliff above the ground is what the question asks for.">' +
    '<line x1="20" y1="190" x2="260" y2="190" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<line x1="60" y1="190" x2="60" y2="170" stroke="' + TINTA + '" stroke-width="2.8"/>' +
    '<line x1="60" y1="170" x2="230" y2="170" stroke="' + GRIS + '" stroke-width="2" stroke-dasharray="6 4"/>' +
    '<line x1="60" y1="170" x2="230" y2="51" stroke="' + AZUL + '" stroke-width="2.5"/>' +
    '<line x1="230" y1="190" x2="230" y2="51" stroke="' + TINTA + '" stroke-width="2.8"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="22" y="184">1.6 m</text>' +
    '<text x="145" y="186" text-anchor="middle">40 m</text>' +
    '<text x="106" y="156" text-anchor="middle">35°</text>' +
    '<text x="240" y="120" fill="' + AZUL + '">?</text></g>' +
    NOTA(212) + '</svg>';

  /* GTC-18: A(20,180) · B(160,180) · base(230,180) · cima(230,59).
     Verificado: ángulo en A = 30.0°, en B = 60.0°, y AB = 140 px = 40 m
     con la escala de 3.5 px por metro. */
  var FIG_TWOANGLES =
    '<svg viewBox="0 0 270 224" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A vertical tower stands on level ground. Two points A and B are marked on the ground on the same side of the tower, with B between A and the tower. The distance from A to B is 40 meters. From A the angle of elevation to the top of the tower measures 30 degrees, and from B, which is closer, the angle of elevation to the same top measures 60 degrees. The height of the tower is what the question asks for.">' +
    '<line x1="10" y1="180" x2="260" y2="180" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<line x1="230" y1="180" x2="230" y2="59" stroke="' + TINTA + '" stroke-width="2.8"/>' +
    '<line x1="20" y1="180" x2="230" y2="59" stroke="' + AZUL + '" stroke-width="2.2"/>' +
    '<line x1="160" y1="180" x2="230" y2="59" stroke="' + AZUL + '" stroke-width="2.2"/>' +
    '<circle cx="20" cy="180" r="3.5" fill="' + TINTA + '"/><circle cx="160" cy="180" r="3.5" fill="' + TINTA + '"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="70" y="167" text-anchor="middle">30°</text>' +
    '<text x="199" y="157" text-anchor="middle">60°</text>' +
    '<text x="90" y="196" text-anchor="middle">40 m</text>' +
    '<text x="238" y="120" fill="' + AZUL + '">?</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="14" y="196">A</text><text x="154" y="196">B</text></g>' +
    NOTA(216) + '</svg>';

  /* ================= Area and volume ================= */

  /* GTC-19: base 180 px = 18 ft, altura 70 px = 7 ft, lado izquierdo 120 px
     = 12 ft (verificado con la distancia entre los vértices). A escala. */
  var FIG_TRI =
    '<svg viewBox="0 96 260 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A garden plot in the shape of a triangle. The horizontal bottom side measures 18 feet. The slanted left side measures 12 feet. A dashed segment drops from the top vertex straight down to the bottom side, meeting it at a right angle, and that dashed height measures 7 feet.">' +
    '<polygon points="40,180 220,180 137.5,110" fill="none" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<line x1="137.5" y1="110" x2="137.5" y2="180" stroke="' + GRIS + '" stroke-width="2" stroke-dasharray="5 4"/>' +
    '<polygon points="137.5,180 145.5,180 145.5,172 137.5,172" fill="none" stroke="' + TINTA + '" stroke-width="1.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="130" y="198" text-anchor="middle">18 ft</text>' +
    '<text x="72" y="136" text-anchor="middle">12 ft</text>' +
    '<text x="144" y="150">7 ft</text></g>' +
    NOTA(212) + '</svg>';

  /* GTC-24: base 176 px = 22 ft, lado de arriba 112 px = 14 ft, altura 72 px
     = 9 ft. Escala única de 8 px por pie, verificada. */
  var FIG_TRAP =
    '<svg viewBox="0 62 260 138" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A flower bed in the shape of a trapezoid. The two horizontal sides are parallel: the shorter one on top measures 14 feet and the longer one on the bottom measures 22 feet. A dashed segment runs from the left end of the top side straight down to the bottom side, meeting it at a right angle, and that dashed height measures 9 feet.">' +
    '<polygon points="40,160 216,160 184,88 72,88" fill="none" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<line x1="72" y1="88" x2="72" y2="160" stroke="' + GRIS + '" stroke-width="2" stroke-dasharray="5 4"/>' +
    '<polygon points="72,160 80,160 80,152 72,152" fill="none" stroke="' + TINTA + '" stroke-width="1.5"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="128" y="178" text-anchor="middle">22 ft</text>' +
    '<text x="128" y="80" text-anchor="middle">14 ft</text>' +
    '<text x="80" y="128">9 ft</text></g>' +
    NOTA(192) + '</svg>';

  /* GTC-26: rectángulo 200x125 px = 40x25 cm (5 px por cm) y cuadraditos de
     30 px = 6 cm en las cuatro esquinas. */
  var FIG_BOX =
    '<svg viewBox="0 0 300 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A flat rectangular sheet of cardboard that measures 40 centimeters along the bottom and 25 centimeters along the side. A small dashed square is drawn at each of the four corners, and each of those squares has a side of 6 centimeters. The four corner squares are cut away and the four flaps that remain are folded up to form an open box.">' +
    '<rect x="40" y="30" width="200" height="125" fill="none" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<rect x="40" y="30" width="30" height="30" fill="none" stroke="' + AZUL + '" stroke-width="2" stroke-dasharray="5 4"/>' +
    '<rect x="210" y="30" width="30" height="30" fill="none" stroke="' + AZUL + '" stroke-width="2" stroke-dasharray="5 4"/>' +
    '<rect x="40" y="125" width="30" height="30" fill="none" stroke="' + AZUL + '" stroke-width="2" stroke-dasharray="5 4"/>' +
    '<rect x="210" y="125" width="30" height="30" fill="none" stroke="' + AZUL + '" stroke-width="2" stroke-dasharray="5 4"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="140" y="174" text-anchor="middle">40 cm</text>' +
    '<text x="248" y="96">25 cm</text>' +
    '<text x="55" y="24" text-anchor="middle" fill="' + AZUL + '">6 cm</text></g>' +
    NOTA(188) + '</svg>';

  /* ================= Lines, angles and triangles ================= */

  /* GTC-27: O(130,150) sobre la recta AB; OC a 130° → (72.1,81.1).
     Verificado: ángulo AOC = 50° = 2(20)+10 y COB = 130° = 4(20)+50. */
  var FIG_STRAIGHT =
    '<svg viewBox="0 56 260 144" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Points A, O and B lie on one straight horizontal line, with O between A and B. From O a ray is drawn up and to the left to a point C, above the line. The ray splits the straight line into two angles: angle AOC, on the left, is labeled 2x plus 10 degrees, and angle COB, on the right, is labeled 4x plus 50 degrees.">' +
    '<line x1="30" y1="150" x2="230" y2="150" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<line x1="130" y1="150" x2="72.1" y2="81.1" stroke="' + AZUL + '" stroke-width="2.5"/>' +
    '<circle cx="130" cy="150" r="3.5" fill="' + TINTA + '"/>' +
    '<circle cx="30" cy="150" r="3" fill="' + TINTA + '"/><circle cx="230" cy="150" r="3" fill="' + TINTA + '"/>' +
    '<g font-family="Georgia,serif" font-size="13">' +
    '<text x="74" y="134" text-anchor="middle">(2x + 10)°</text>' +
    '<text x="163" y="100" text-anchor="middle">(4x + 50)°</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="22" y="166">A</text><text x="236" y="156">B</text>' +
    '<text x="126" y="168">O</text><text x="60" y="74">C</text></g>' +
    NOTA(192) + '</svg>';

  /* GTC-30: r en y=70, s en y=170, transversal por P(150,70) y Q(94.6,170).
     Verificado: el ángulo marcado en P mide 119° y el de Q mide 61°. */
  var FIG_PARALLEL =
    '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two horizontal parallel lines, r on top and s below, are crossed by a slanted line t. Line t meets r at point P and meets s at point Q, and Q is to the left of P. Two angles are marked, and both of them lie in the strip between r and s and on the right-hand side of t. The one at P, below line r, is labeled 3x minus 4 degrees. The one at Q, above line s, is labeled x plus 20 degrees.">' +
    '<line x1="20" y1="70" x2="260" y2="70" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<line x1="20" y1="170" x2="260" y2="170" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<line x1="179.1" y1="17.5" x2="65.5" y2="222.5" stroke="' + AZUL + '" stroke-width="2.5"/>' +
    '<circle cx="150" cy="70" r="3.5" fill="' + TINTA + '"/><circle cx="94.6" cy="170" r="3.5" fill="' + TINTA + '"/>' +
    '<g font-family="Georgia,serif" font-size="13">' +
    '<text x="180" y="100" text-anchor="middle">(3x − 4)°</text>' +
    '<text x="144" y="152" text-anchor="middle">(x + 20)°</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="264" y="66">r</text><text x="264" y="166">s</text><text x="184" y="14">t</text>' +
    '<text x="156" y="60">P</text><text x="80" y="186">Q</text></g>' +
    NOTA(232) + '</svg>';

  /* GTC-32: las dos sombras van dibujadas con la MISMA razón 1 : 0.8 (palo
     50/40 px, árbol 130/104 px), así que los dos rayos salen paralelos — que
     es justo lo que hace semejantes a los triángulos. La escala entre un
     objeto y el otro sí está exagerada, y por eso la nota. */
  var FIG_SHADOW =
    '<svg viewBox="0 0 300 206" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two upright objects stand on level ground, each casting a shadow to the right. The first is a meter stick 1 meter tall whose shadow is 0.8 meters long. The second is a tree whose shadow is 14 meters long and whose height is unknown. A straight line from the top of each object to the tip of its own shadow marks the sunlight, and the two lines are parallel, so the two triangles have the same shape.">' +
    '<line x1="20" y1="170" x2="285" y2="170" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<line x1="50" y1="170" x2="50" y2="120" stroke="' + TINTA + '" stroke-width="2.8"/>' +
    '<line x1="50" y1="120" x2="90" y2="170" stroke="' + AZUL + '" stroke-width="2.2"/>' +
    '<line x1="160" y1="170" x2="160" y2="40" stroke="' + TINTA + '" stroke-width="2.8"/>' +
    '<line x1="160" y1="40" x2="264" y2="170" stroke="' + AZUL + '" stroke-width="2.2"/>' +
    '<g font-family="Georgia,serif" font-size="13">' +
    '<text x="20" y="148">1 m</text>' +
    '<text x="70" y="182" text-anchor="middle">0.8 m</text>' +
    '<text x="212" y="182" text-anchor="middle">14 m</text>' +
    '<text x="140" y="106" fill="' + AZUL + '">h</text></g>' +
    NOTA(200) + '</svg>';

  /* GTC-33: Q(80,180) · R(180,180) · P(130,34.8). Verificado: los ángulos de
     la base miden 71.0° y el de arriba 38.0°, y PQ = PR = 153.6 px. */
  var FIG_ISO =
    '<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle PQR with P at the top, Q at the bottom left and R at the bottom right. A single tick mark on side PQ and a matching tick mark on side PR show that those two sides have the same length. The angle at Q measures 71 degrees. The angle at P, at the top, is labeled x degrees.">' +
    '<polygon points="80,180 180,180 130,34.8" fill="none" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<line x1="100.3" y1="105.8" x2="109.7" y2="109" stroke="' + TINTA + '" stroke-width="2"/>' +
    '<line x1="150.3" y1="109" x2="159.7" y2="105.8" stroke="' + TINTA + '" stroke-width="2"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="110" y="166" text-anchor="middle">71°</text>' +
    '<text x="130" y="92" text-anchor="middle" fill="' + AZUL + '" font-style="italic">x°</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="130" y="26" text-anchor="middle">P</text>' +
    '<text x="68" y="196">Q</text><text x="186" y="196">R</text></g>' +
    NOTA(212) + '</svg>';

  /* GTC-34: m en y=50 y n en y=190; A(190,50) · C(70,130.9) · B(123.2,190).
     Verificado: 34° en A, 48° en B y 82° en C. */
  var FIG_BEND =
    '<svg viewBox="0 0 270 228" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two horizontal parallel lines, m on top and n below. Point A is on line m and point B is on line n, and point C is between the two lines and to the left of both A and B, so the path from A to C to B bends at C. At A the angle between segment AC and the part of line m running to the left of A measures 34 degrees. At B the angle between segment BC and the part of line n running to the left of B measures 48 degrees. The angle ACB, at the bend, is labeled x degrees.">' +
    '<line x1="20" y1="50" x2="250" y2="50" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<line x1="20" y1="190" x2="250" y2="190" stroke="' + TINTA + '" stroke-width="2.5"/>' +
    '<line x1="190" y1="50" x2="70" y2="130.9" stroke="' + AZUL + '" stroke-width="2.5"/>' +
    '<line x1="70" y1="130.9" x2="123.2" y2="190" stroke="' + AZUL + '" stroke-width="2.5"/>' +
    '<circle cx="190" cy="50" r="3.5" fill="' + TINTA + '"/><circle cx="123.2" cy="190" r="3.5" fill="' + TINTA + '"/>' +
    '<circle cx="70" cy="130.9" r="3.5" fill="' + TINTA + '"/>' +
    '<g font-family="Georgia,serif" font-size="14">' +
    '<text x="140" y="70" text-anchor="middle">34°</text>' +
    '<text x="79" y="170" text-anchor="middle">48°</text>' +
    '<text x="110" y="136" text-anchor="middle" fill="' + AZUL + '" font-style="italic">x°</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="254" y="46">m</text><text x="254" y="186">n</text>' +
    '<text x="194" y="44">A</text><text x="128" y="204">B</text><text x="56" y="128">C</text></g>' +
    NOTA(220) + '</svg>';

  window.SAT_SETS.push({
    id: 'math-geo-c',
    title: 'Geometry & Trigonometry — Foundations',
    section: 'math',
    level: 'Media',
    description: 'The entry level of the geometry domain, taught relation by relation: circumference, arcs and sectors, the Pythagorean theorem and the three side ratios, area and volume of everyday shapes, and the angle rules for straight lines, parallel lines and triangles.',
    minutes: 40,
    questions: [

      /* ===================== Circles ===================== */
      {
        id:'GTC-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Circumference of a circle from its diameter',
        stem:'A round tabletop has a diameter of 34 inches. What is the circumference of the tabletop, in inches?',
        choices:{A:'17π', B:'34π', C:'68π', D:'289π'},
        correct:'B',
        expCorrect:'Circumference is C = 2πr, and the radius is half the diameter: r = 34/2 = 17. So C = 2π(17) = 34π inches. The shortcut worth keeping is C = πd, which skips the halving: π(34) = 34π. (Check: 34π ≈ 106.8 inches, a little over three diameters, exactly as π predicts ✓.)',
        expWrong:{
          A:'17π is πr, not 2πr. Half the diameter gives the radius, and the radius still has to be doubled inside the formula.',
          C:'68π uses 2π(34) — the diameter dropped straight into 2πr as if it were the radius. Either halve first and double, or just do πd once.',
          D:'289π is the AREA, π(17²). Area is measured in square inches; a circumference is a plain length in inches.'
        },
        tip:'Two formulas, two habits: C = πd (or 2πr) for the distance around, A = πr² for the space inside. Before you start, write down which one the units ask for — inches or square inches.',
        desmos:'Evaluate 2*pi*17 and pi*34 in Desmos: both give about 106.81, so 34π is the circumference.',
        desmosLatex:['2\\pi\\cdot17','\\pi\\cdot34']
      },
      {
        id:'GTC-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Radius of a circle from its circumference',
        stem:'The circumference of a circle is 26π centimeters. What is the radius of the circle, in centimeters?',
        choices:{A:'6.5', B:'13', C:'26', D:'52'},
        correct:'B',
        expCorrect:'Start from C = 2πr and substitute: 2πr = 26π. Divide both sides by π: 2r = 26. Divide by 2: r = 13 centimeters. (Check: 2π(13) = 26π ✓.)',
        expWrong:{
          A:'6.5 halves the answer one time too many. After 2r = 26 the division by 2 is already done; halving 13 again would describe a circle with circumference 13π.',
          C:'26 is the DIAMETER. Dividing 26π by π undoes the π, but the 2 in 2πr is still there and it is what turns diameter into radius.',
          D:'52 doubles instead of halving. 2πr = 26π means r is smaller than 26, not bigger.'
        },
        tip:'When the circumference is given as a multiple of π, cancel the π first and read what is left: 2r. The number in front of π is always the diameter.',
        desmos:'Solve 2*pi*r=26*pi in Desmos: r = 13.',
        desmosLatex:['2\\pi r=26\\pi']
      },
      {
        id:'GTC-03', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Radius of a circle from its area',
        stem:'A circle has an area of 144π square meters. What is the radius of the circle, in meters?',
        answer:'12',
        expCorrect:'Area is A = πr², so πr² = 144π. Divide both sides by π: r² = 144. Take the positive square root: r = 12 meters. (Check: π(12²) = 144π ✓.)',
        tip:'Cancel the π first, then take the square root. The number multiplying π in an area is always r², so the answer is its square root — never the number itself and never half of it.',
        desmos:'Solve pi*r^2=144*pi in Desmos: r = 12 (the negative root is not a length).',
        desmosLatex:['\\pi r^2=144\\pi']
      },
      {
        id:'GTC-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Area of a sector from its central angle',
        stem:'A circle has a radius of 10 inches. A central angle of 72° cuts out a sector of that circle. What is the area of the sector, in square inches?',
        choices:{A:'20π', B:'4π', C:'80π', D:'100π'},
        correct:'A',
        expCorrect:'A sector takes the same fraction of the circle as its central angle takes of 360°. The fraction is 72/360 = 1/5, and the whole area is πr² = π(10²) = 100π. So the sector is (1/5)(100π) = 20π square inches. (Check: five sectors of 72° fill the circle, and 5(20π) = 100π ✓.)',
        expWrong:{
          B:'4π is the ARC LENGTH, (1/5)(2π·10). An arc is a distance in inches; a sector is a region in square inches. The fraction is the same, but the thing being sliced is not.',
          C:'80π uses 20 as the radius, (1/5)π(20²). Twenty is the diameter of this circle, and πr² wants the radius.',
          D:'100π is the area of the WHOLE circle. The 72/360 slice never got applied.'
        },
        tip:'Both arc and sector start with the same fraction, angle/360. Multiply that fraction by 2πr for an arc and by πr² for a sector. The units in the question tell you which one is wanted.',
        desmos:'Evaluate (72/360)*pi*10^2 in Desmos: about 62.83, which is 20π.',
        desmosLatex:['\\frac{72}{360}\\pi\\cdot10^2','20\\pi']
      },
      {
        id:'GTC-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'An angle inscribed in a semicircle',
        figure: FIG_SEMI,
        stem:'In the figure, AB is a diameter of the circle with center O, and point C is on the circle. The angle at A, between AB and AC, measures 28°. What is the measure, in degrees, of the angle at B?',
        choices:{A:'28', B:'90', C:'152', D:'62'},
        correct:'D',
        expCorrect:'An angle inscribed in a semicircle is a right angle, so the angle at C is 90°. Now the three angles of triangle ABC add to 180: 28 + 90 + angle B = 180, so angle B = 180 − 118 = 62°. (Check: 28 + 90 + 62 = 180 ✓.)',
        expWrong:{
          A:'28 assumes the two angles at the ends of the diameter are equal. They would be equal only if C sat exactly at the top, and nothing in the figure says it does.',
          B:'90 is the angle at C, the one the diameter creates. The question asks for the angle at B, which is what is left of 180 after the 90 and the 28.',
          C:'152 is 180 − 28, treating A and B as a straight line at C. They are two angles of a triangle, and the third one, the 90 at C, has to come out first.'
        },
        tip:'A chord through the center is a diameter, and any point on the circle joined to both ends of a diameter forms a RIGHT angle. Spotting that 90° turns most of these into a one-line triangle sum.',
        desmos:'Evaluate 180-90-28 in Desmos: 62.',
        desmosLatex:['180-90-28']
      },
      {
        id:'GTC-06', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Two radii and the chord between them',
        figure: FIG_RADII,
        stem:'In the figure, OA and OB are radii of the circle with center O, and the central angle AOB measures 40°. What is the measure, in degrees, of angle OAB?',
        answer:'70',
        expCorrect:'OA and OB are radii of the same circle, so they have the same length and triangle OAB is isosceles. The two angles across from those equal sides — angle OAB and angle OBA — are therefore equal. Call each one y: 40 + y + y = 180, so 2y = 140 and y = 70°. (Check: 40 + 70 + 70 = 180 ✓.)',
        tip:'Every triangle with two radii as sides is isosceles — that single fact solves a whole family of circle problems. Label the two base angles with the same letter and use the 180° sum.',
        desmos:'Evaluate (180-40)/2 in Desmos: 70.',
        desmosLatex:['\\frac{180-40}{2}']
      },
      {
        id:'GTC-07', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Writing the equation of a circle from its center and radius',
        stem:'In the xy-plane, a circle has its center at (3, −5) and a radius of 4. Which equation represents this circle?',
        choices:{A:'(x + 3)² + (y − 5)² = 16', B:'(x − 3)² + (y + 5)² = 4', C:'(x − 3)² + (y + 5)² = 16', D:'(x − 3)² + (y + 5)² = 8'},
        correct:'C',
        expCorrect:'Standard form is (x − h)² + (y − k)² = r² with center (h, k). Here h = 3 and k = −5, so x − h is x − 3, and y − k is y − (−5) = y + 5. The right side is r² = 4² = 16, giving (x − 3)² + (y + 5)² = 16. (Check: the point (7, −5) is 4 units right of the center, and (7 − 3)² + (−5 + 5)² = 16 + 0 = 16 ✓.)',
        expWrong:{
          A:'The signs are backwards. The form subtracts the coordinates, so a center of (3, −5) produces x − 3 and y + 5, not x + 3 and y − 5.',
          B:'The right side holds r², not r. With 4 there the radius would be 2.',
          D:'8 doubles the radius instead of squaring it. Four squared is 16; 4 times 2 is a different operation entirely.'
        },
        tip:'Build the equation in two independent moves: flip the sign of each coordinate of the center to get what goes inside the parentheses, then SQUARE the radius for the right side.',
        desmos:'Graph (x-3)^2+(y+5)^2=16 in Desmos and plot the point (3,-5): the point sits at the center and the circle reaches 4 units out in every direction.',
        desmosLatex:['(x-3)^2+(y+5)^2=16','(3,-5)']
      },
      {
        id:'GTC-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'A chord, the radius and the distance from the center',
        figure: FIG_CHORD,
        stem:'In the figure, a chord of a circle with radius 13 lies 5 units from the center, measured along the dashed segment that meets the chord at a right angle. What is the length of the chord?',
        choices:{A:'12', B:'24', C:'18', D:'26'},
        correct:'B',
        expCorrect:'The segment drawn from the center perpendicular to a chord bisects that chord, so it creates a right triangle whose hypotenuse is a radius. That triangle has legs 5 and half the chord, with hypotenuse 13: 5² + x² = 13² → 25 + x² = 169 → x² = 144 → x = 12. That 12 is only HALF the chord, so the chord is 2(12) = 24. (Check: 5-12-13 is a Pythagorean triple ✓.)',
        expWrong:{
          A:'12 is half the chord — the leg of the right triangle. The perpendicular from the center splits the chord into two equal pieces, so the answer needs one more step: double it.',
          C:'18 adds 13 + 5. The three lengths here sit in a right triangle, so they combine through squares, not through addition.',
          D:'26 is the diameter, 2(13). That is the longest chord a circle has, and it only applies to a chord that passes through the center; this one is 5 units away from it.'
        },
        tip:'Drop a perpendicular from the center to a chord and you always get a right triangle: radius as hypotenuse, distance as one leg, HALF the chord as the other. The doubling at the end is the step everyone forgets.',
        desmos:'Evaluate 2*sqrt(13^2-5^2) in Desmos: 24.',
        desmosLatex:['2\\sqrt{13^2-5^2}']
      },
      {
        id:'GTC-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'From arc length back to the area of a sector',
        stem:'In a circle, a central angle of 45° cuts off an arc whose length is 3π centimeters. What is the area, in square centimeters, of the sector bounded by that arc and the two radii?',
        choices:{A:'18π', B:'3π', C:'72π', D:'144π'},
        correct:'A',
        expCorrect:'Work backward to the radius first. The arc is 45/360 = 1/8 of the circumference, so (1/8)(2πr) = 3π → πr/4 = 3π → r = 12. Now the sector is the same 1/8 of the area: (1/8)π(12²) = (1/8)(144π) = 18π square centimeters. (Check: eight arcs of 3π give 24π, which is 2π(12) ✓.)',
        expWrong:{
          B:'3π is the arc length that was handed to you. It is a distance in centimeters; the question asks for a region in square centimeters.',
          C:'72π comes from solving (1/8)(πr) = 3π, which gives r = 24. That uses πr for the circumference when the circumference is 2πr, so the radius comes out twice as big as it should.',
          D:'144π is the area of the whole circle, π(12²). The 45/360 fraction was found and then never applied to the area.'
        },
        tip:'Any sector question is two questions: find r, then slice. The fraction angle/360 is the SAME for the arc and for the sector, so use the given piece to back out r, then reuse that fraction on the other formula.',
        desmos:'Solve (45/360)*2*pi*r=3*pi in Desmos to get r = 12, then evaluate (45/360)*pi*12^2: about 56.55, which is 18π.',
        desmosLatex:['\\frac{45}{360}\\cdot2\\pi r=3\\pi','\\frac{45}{360}\\pi\\cdot12^2']
      },

      /* ===================== Right triangles and trigonometry ===================== */
      {
        id:'GTC-10', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Pythagorean theorem: finding the hypotenuse',
        stem:'In a right triangle, the two sides that meet at the right angle have lengths 8 and 15. What is the length of the hypotenuse?',
        choices:{A:'23', B:'289', C:'√161', D:'17'},
        correct:'D',
        expCorrect:'The two sides that form the right angle are the legs, so they are a and b: a² + b² = c² → 8² + 15² = c² → 64 + 225 = 289 → c = √289 = 17. (Check: 8-15-17 is one of the four Pythagorean triples worth memorizing, along with 3-4-5, 5-12-13 and 7-24-25 ✓.)',
        expWrong:{
          A:'23 adds the two legs. In a right triangle the SQUARES add, never the lengths — and 8 + 15 would mean the three sides lie on top of each other.',
          B:'289 is c², the value before the square root. The Pythagorean theorem gives you the square of the side; the last step is undoing it.',
          C:'√161 comes from 15² − 8², which treats 15 as the hypotenuse. The hypotenuse is always the side opposite the right angle, and here that side is the unknown one.'
        },
        tip:'Name the sides before you compute: the hypotenuse is the one across from the right angle and it is always the longest. Add the squares to find it; subtract the squares to find a leg.',
        desmos:'Evaluate sqrt(8^2+15^2) in Desmos: 17.',
        desmosLatex:['\\sqrt{8^2+15^2}']
      },
      {
        id:'GTC-11', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Pythagorean theorem: finding a missing side',
        stem:'A right triangle has a hypotenuse of length 25 and one side of length 7. What is the length of the third side?',
        choices:{A:'24', B:'18', C:'32', D:'√674'},
        correct:'A',
        expCorrect:'Here the 25 is the hypotenuse, so it is the c in a² + b² = c²: 7² + b² = 25² → 49 + b² = 625 → b² = 576 → b = 24. (Check: 7-24-25 is a Pythagorean triple, and 49 + 576 = 625 ✓.)',
        expWrong:{
          B:'18 is 25 − 7. Subtracting the lengths skips the squares; the theorem subtracts 25² − 7², which is 576, not 18².',
          C:'32 adds the two given lengths. A side of a triangle can never be longer than the other two combined, and this one also has to be shorter than the hypotenuse.',
          D:'√674 is 25² + 7², adding when the hypotenuse is already known. Add the squares only when the missing side IS the hypotenuse; here it is a leg, so subtract.'
        },
        tip:'Decide first whether the missing side is the hypotenuse or a leg. Missing hypotenuse: add the squares. Missing leg: subtract the smaller square from the hypotenuse squared. A leg always comes out shorter than the hypotenuse, which is a free sanity check.',
        desmos:'Evaluate sqrt(25^2-7^2) in Desmos: 24.',
        desmosLatex:['\\sqrt{25^2-7^2}']
      },
      {
        id:'GTC-12', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Pythagorean theorem inside a rectangle',
        stem:'A rectangular gate is 9 feet wide and 12 feet tall. A straight brace runs from one bottom corner of the gate to the opposite top corner. What is the length of the brace, in feet?',
        answer:'15',
        expCorrect:'The brace is the diagonal of the rectangle, and the two sides of the rectangle meet at a right angle, so width, height and brace form a right triangle with the brace as the hypotenuse: 9² + 12² = 81 + 144 = 225, so the brace is √225 = 15 feet. (Check: 9-12-15 is the 3-4-5 triple scaled by 3 ✓.)',
        tip:'Every rectangle hides two right triangles, and its diagonal is their shared hypotenuse. The moment a problem says "corner to opposite corner", write a² + b² = c².',
        desmos:'Evaluate sqrt(9^2+12^2) in Desmos: 15.',
        desmosLatex:['\\sqrt{9^2+12^2}']
      },
      {
        id:'GTC-13', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Sine, cosine and tangent as side ratios',
        stem:'In right triangle ABC, the right angle is at B, AB = 24, BC = 7 and AC = 25. What is the value of sin C?',
        choices:{A:'7/25', B:'24/7', C:'24/25', D:'7/24'},
        correct:'C',
        expCorrect:'Sine is opposite over hypotenuse, measured from the angle named. From angle C, the opposite side is AB = 24 (it does not touch C), and the hypotenuse is AC = 25 (it is across from the right angle at B). So sin C = 24/25. (Check: 24² + 7² = 576 + 49 = 625 = 25², so the triangle is valid, and a sine is always less than 1 ✓.)',
        expWrong:{
          A:'7/25 is cos C. BC = 7 touches angle C, so it is the ADJACENT side, and adjacent over hypotenuse is cosine.',
          B:'24/7 is tan C, opposite over adjacent. The hypotenuse never appears in a tangent, so any ratio without the 25 cannot be a sine.',
          D:'7/24 is adjacent over opposite — the tangent upside down. It also uses no hypotenuse, so it cannot be a sine.'
        },
        tip:'SOHCAHTOA only works after you stand at the named angle. Label the three sides from THAT corner — opposite (the one you are not touching), adjacent (the one you touch that is not the hypotenuse), hypotenuse — and then pick the ratio.',
        desmos:'Evaluate 24/25 in Desmos: 0.96. Then check with the angle itself: arcsin(0.96) and the angle whose tangent is 24/7 agree, about 73.7°.',
        desmosLatex:['\\frac{24}{25}','\\arcsin\\left(\\frac{24}{25}\\right)']
      },
      {
        id:'GTC-14', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Cosine to find a missing side in context',
        figure: FIG_ANTENNA,
        stem:'A straight cable runs from the top of a vertical antenna down to an anchor on level ground, making a 62° angle with the ground. The anchor sits 18 feet from the base of the antenna. What is the length of the cable, to the nearest foot?',
        choices:{A:'8', B:'38', C:'20', D:'34'},
        correct:'B',
        expCorrect:'From the 62° angle at the anchor, the 18 feet along the ground is the ADJACENT side and the cable is the hypotenuse, so cosine is the ratio that links them: cos 62° = 18/c. Solving, c = 18/cos 62° = 18/0.4695 ≈ 38.3, so about 38 feet. (Check: the hypotenuse must be longer than the 18-foot leg, and 38 > 18 ✓.)',
        expWrong:{
          A:'8 comes from 18 × cos 62°. When the unknown sits in the denominator you divide, not multiply — and multiplying by a cosine always shrinks the number, giving a hypotenuse shorter than its own leg.',
          C:'20 uses sine: 18/sin 62°. Sine pairs the OPPOSITE side with the hypotenuse, and 18 feet is measured along the ground, which touches the 62° angle.',
          D:'34 is 18 × tan 62°, the height of the antenna. That answers a real question, just not this one: the cable is the slanted side, not the vertical one.'
        },
        tip:'Write the ratio before touching the calculator: name the known side (opposite or adjacent), name the unknown, and pick the function that contains both. If the unknown ends up in the denominator, the last step is a division.',
        desmos:'In degree mode, evaluate 18/cos(62) in Desmos: about 38.34, so 38 feet.',
        desmosLatex:['\\frac{18}{\\cos(62)}']
      },
      {
        id:'GTC-15', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'The 30-60-90 triangle: from the short side to the hypotenuse',
        stem:'In a right triangle, one of the acute angles measures 60° and the side opposite the 30° angle has length 7. What is the length of the hypotenuse?',
        answer:'14',
        expCorrect:'If one acute angle is 60°, the other is 30°, so this is a 30-60-90 triangle, whose sides are always in the ratio 1 : √3 : 2 (short side, longer side, hypotenuse). The side opposite the 30° angle is the SHORT one, the 1 in that ratio, so the hypotenuse is twice it: 2(7) = 14. (Check: sin 30° = 7/14 = 0.5, which is the correct value ✓.)',
        tip:'In a 30-60-90 triangle the hypotenuse is exactly double the side facing the 30° angle — no square roots involved. The √3 only shows up on the side facing the 60° angle.',
        desmos:'Evaluate 7/sin(30) in degree mode in Desmos: 14.',
        desmosLatex:['\\frac{7}{\\sin(30)}']
      },
      {
        id:'GTC-16', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'The 45-45-90 triangle: from a leg to the hypotenuse',
        stem:'The two legs of an isosceles right triangle each have length 9. What is the length of the hypotenuse?',
        choices:{A:'18', B:'9√3', C:'9√2/2', D:'9√2'},
        correct:'D',
        expCorrect:'An isosceles right triangle has angles 45-45-90 and sides in the ratio 1 : 1 : √2, so the hypotenuse is a leg times √2: 9√2 ≈ 12.73. The Pythagorean theorem agrees: 9² + 9² = 162, and √162 = 9√2. (Check: the hypotenuse must be longer than 9 but shorter than 18, and 12.73 sits between them ✓.)',
        expWrong:{
          A:'18 doubles the leg, which is the 30-60-90 rule borrowed into the wrong triangle. Doubling would make the hypotenuse as long as both legs together, and no triangle allows that.',
          B:'9√3 uses √3, the number from the 30-60-90 family. The 45-45-90 triangle runs on √2.',
          C:'9√2/2 divides by √2 instead of multiplying. That is the move for going from the hypotenuse BACK to a leg, and it gives about 6.36 — shorter than the legs it is supposed to span.'
        },
        tip:'Two ratios cover almost every special right triangle: 45-45-90 is 1 : 1 : √2 and 30-60-90 is 1 : √3 : 2. Going from a leg to the hypotenuse you multiply; going back you divide.',
        desmos:'Evaluate sqrt(9^2+9^2) and 9*sqrt(2) in Desmos: both give about 12.728.',
        desmosLatex:['\\sqrt{9^2+9^2}','9\\sqrt{2}']
      },
      {
        id:'GTC-17', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Tangent with an angle of elevation, plus eye height',
        figure: FIG_CLIFF,
        stem:'A surveyor stands on level ground 40 meters from the base of a vertical cliff. From eye level, which is 1.6 meters above the ground, the angle of elevation to the top of the cliff is 35°. What is the height of the cliff above the ground, to the nearest tenth of a meter?',
        choices:{A:'29.6', B:'28.0', C:'24.5', D:'58.7'},
        correct:'A',
        expCorrect:'The right triangle sits ABOVE eye level: its horizontal leg is 40 and its vertical leg is the part of the cliff above the surveyor. Tangent links those two legs: tan 35° = h/40 → h = 40 tan 35° ≈ 28.0. That is the height above EYE level, so add the 1.6 meters the surveyor is standing on: 28.0 + 1.6 = 29.6 meters. (Check: 29.6 − 1.6 = 28.0, and 28.0/40 = 0.700 = tan 35° ✓.)',
        expWrong:{
          B:'28.0 stops at the triangle. The horizontal line of sight starts 1.6 meters off the ground, so the triangle misses the bottom slice of the cliff.',
          C:'24.5 uses sine: 40 sin 35° + 1.6. Sine would be right if the 40 meters were the slanted line of sight, but 40 is measured along the ground, so it is the leg ADJACENT to the angle, and two legs mean tangent.',
          D:'58.7 divides instead of multiplying: 40/tan 35° + 1.6. With the unknown in the numerator of tan 35° = h/40 you multiply both sides by 40.'
        },
        tip:'Angle of elevation problems are two steps whenever the observer has a height: solve the triangle first, then add the eye height. Sketch the horizontal line of sight — it shows instantly which part of the object the triangle actually covers.',
        desmos:'In degree mode, evaluate 40*tan(35)+1.6 in Desmos: about 29.61.',
        desmosLatex:['40\\tan(35)+1.6']
      },
      {
        id:'GTC-18', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Tangent with two angles of elevation from two points',
        figure: FIG_TWOANGLES,
        stem:'A vertical tower stands on level ground. From a point A on the ground the angle of elevation to the top of the tower is 30°. From a point B, on the same side and 40 meters closer to the tower, the angle of elevation to the same top is 60°. What is the height of the tower, to the nearest tenth of a meter?',
        choices:{A:'20.0', B:'23.1', C:'34.6', D:'69.3'},
        correct:'C',
        expCorrect:'Call the height h and write each horizontal distance in terms of it. From A: tan 30° = h/(distance A), so distance A = h/tan 30° = h√3. From B: distance B = h/tan 60° = h/√3. B is 40 meters closer, so h√3 − h/√3 = 40. Put it over √3: (3h − h)/√3 = 40 → 2h = 40√3 → h = 20√3 ≈ 34.6 meters. (Check: the distances come out 60 and 20, which differ by exactly 40, and 34.64/60 = 0.577 = tan 30° ✓.)',
        expWrong:{
          A:'20.0 halves the 40 because 60° is twice 30°. Angles do not scale lengths that way: doubling the angle of elevation does not double or halve anything in the triangle.',
          B:'23.1 is 40 tan 30°, which treats the 40 meters as the full distance from A to the tower. The 40 is only the GAP between the two observation points, not either distance.',
          D:'69.3 is 40 tan 60°, the same mistake made at B: it uses the gap as if it were the distance from B to the base of the tower.'
        },
        tip:'When one height is seen from two points, the height is the shared unknown: write each horizontal distance as h divided by the tangent of its own angle, then set their DIFFERENCE equal to the given gap. One equation, one unknown.',
        desmos:'In degree mode, solve h/tan(30)-h/tan(60)=40 in Desmos: h ≈ 34.641, which is 20√3.',
        desmosLatex:['\\frac{h}{\\tan(30)}-\\frac{h}{\\tan(60)}=40','20\\sqrt{3}']
      },

      /* ===================== Area and volume ===================== */
      {
        id:'GTC-19', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Area of a triangle from its base and height',
        figure: FIG_TRI,
        stem:'The figure shows a garden plot in the shape of a triangle. Its bottom side measures 18 feet, its slanted left side measures 12 feet, and the dashed height drawn down to the bottom side measures 7 feet. What is the area of the plot, in square feet?',
        choices:{A:'25', B:'63', C:'108', D:'126'},
        correct:'B',
        expCorrect:'Area of a triangle is ½ × base × height, where the height is the perpendicular distance to that base. The base is 18 and the perpendicular height is the dashed 7: ½(18)(7) = ½(126) = 63 square feet. (Check: the triangle is exactly half of an 18-by-7 rectangle, and 18 × 7 = 126 ✓.)',
        expWrong:{
          A:'25 adds 18 + 7. Area is a product, not a sum; adding two lengths gives a length, not a number of square feet.',
          C:'108 uses the slanted 12 as the height: ½(18)(12). The 12 is a side of the triangle, not a perpendicular distance — that is exactly why the dashed segment is drawn.',
          D:'126 leaves out the ½. That product is the area of the whole rectangle around the triangle, which is twice too much.'
        },
        tip:'The height in ½bh must be PERPENDICULAR to the base you chose. A slanted side is longer than the height, so using it always inflates the area — when a figure hands you a dashed segment, that is the height it wants you to use.',
        desmos:'Evaluate 0.5*18*7 in Desmos: 63.',
        desmosLatex:['0.5\\cdot18\\cdot7']
      },
      {
        id:'GTC-20', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Volume of a rectangular box',
        stem:'A shipping crate is a rectangular box measuring 1.2 meters long, 0.8 meters wide and 0.5 meters deep. What is the volume of the crate, in cubic meters?',
        choices:{A:'0.96', B:'2.5', C:'3.92', D:'0.48'},
        correct:'D',
        expCorrect:'Volume of a rectangular box is length × width × height: (1.2)(0.8)(0.5) = 0.96 × 0.5 = 0.48 cubic meters. (Check: half of 0.96 is 0.48, since multiplying by 0.5 is halving ✓.)',
        expWrong:{
          A:'0.96 multiplies only the length and the width. That is the area of the floor of the crate, in square meters; the depth still has to come in.',
          B:'2.5 adds the three measurements. Adding gives a length in meters, and a volume can never come out of a sum.',
          C:'3.92 is the SURFACE area, 2(1.2·0.8 + 1.2·0.5 + 0.8·0.5). That counts the cardboard around the crate, in square meters, not the space inside it.'
        },
        tip:'Check the units before you answer: cubic units mean three measurements multiplied, square units mean two. If your arithmetic used only two of the three numbers, you found an area.',
        desmos:'Evaluate 1.2*0.8*0.5 in Desmos: 0.48.',
        desmosLatex:['1.2\\cdot0.8\\cdot0.5']
      },
      {
        id:'GTC-21', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Surface area of a cube',
        stem:'A solid cube has edges of length 5 inches. What is the total surface area of the cube, in square inches?',
        answer:'150',
        expCorrect:'A cube has 6 identical square faces, and each face measures 5 by 5, so each has area 25 square inches. Total: 6(25) = 150 square inches. (Check: the volume would be 5³ = 125, a different number with different units — surface area counts faces, volume counts space ✓.)',
        tip:'Surface area is the sum of the faces: 6s² for a cube. Keep it separate from volume, s³ — the two answers are close in size for small cubes, which is exactly why they get swapped.',
        desmos:'Evaluate 6*5^2 in Desmos: 150.',
        desmosLatex:['6\\cdot5^2']
      },
      {
        id:'GTC-22', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Volume of a cylinder when the width across is given',
        stem:'A cylindrical paint can measures 14 centimeters across the top, and the can stands 20 centimeters tall. What is the volume of the can, in cubic centimeters?',
        choices:{A:'980π', B:'140π', C:'280π', D:'3920π'},
        correct:'A',
        expCorrect:'Volume of a cylinder is πr²h. The 14 centimeters is the full width across, so the radius is half of it: r = 7. Then V = π(7²)(20) = π(49)(20) = 980π cubic centimeters. (Check: 980π ≈ 3079 cubic centimeters, which is about 3.1 liters — a believable paint can ✓.)',
        expWrong:{
          B:'140π is πrh, with the radius never squared. The r² in the formula comes from the circular face, whose area is πr².',
          C:'280π is 2πrh, the area of the curved side of the can. That is a surface in square centimeters, not the space inside.',
          D:'3920π drops 14 straight into πr²h. The distance across a circle is the diameter, so it has to be halved before it enters the formula.'
        },
        tip:'Whenever a problem says "across" or "wide", it is handing you the diameter — halve it before it touches any formula with r in it. Squaring the mistake doubles its damage: using the diameter makes the volume four times too big.',
        desmos:'Evaluate pi*7^2*20 in Desmos: about 3078.76, which is 980π.',
        desmosLatex:['\\pi\\cdot7^2\\cdot20','980\\pi']
      },
      {
        id:'GTC-23', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Volume of a pyramid with a square base',
        stem:'A monument is a solid pyramid with a square base measuring 9 meters on each side and a height of 14 meters. What is the volume of the monument, in cubic meters?',
        answer:'378',
        expCorrect:'Volume of a pyramid is (1/3)(base area)(height). The base is a square, so its area is 9² = 81 square meters. Then V = (1/3)(81)(14) = 27(14) = 378 cubic meters. (Check: the box with the same base and height holds 81 × 14 = 1134, and 1134/3 = 378 ✓.)',
        tip:'Anything that comes to a point — pyramid or cone — holds exactly one third of the prism or cylinder with the same base and height. Compute the full box first, then divide by 3; it is harder to lose the ⅓ that way.',
        desmos:'Evaluate (1/3)*9^2*14 in Desmos: 378.',
        desmosLatex:['\\frac{1}{3}\\cdot9^2\\cdot14']
      },
      {
        id:'GTC-24', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Area of a trapezoid',
        figure: FIG_TRAP,
        stem:'The figure shows a flower bed in the shape of a trapezoid. Its two parallel sides measure 14 feet and 22 feet, and the dashed height between them measures 9 feet. What is the area of the flower bed, in square feet?',
        choices:{A:'45', B:'198', C:'162', D:'324'},
        correct:'C',
        expCorrect:'Area of a trapezoid is the AVERAGE of the two parallel sides times the height: ½(14 + 22)(9) = ½(36)(9) = 18(9) = 162 square feet. (Check: the answer has to land between 14 × 9 = 126 and 22 × 9 = 198, and 162 is right between them ✓.)',
        expWrong:{
          A:'45 adds all three numbers. That gives a length in feet; an area needs the sides multiplied.',
          B:'198 is 22 × 9, treating the bed as a rectangle built on the longer side. That overcounts, because the shape narrows to 14 feet at the top.',
          D:'324 is (14 + 22)(9) with the ½ left out. The formula averages the two parallel sides, so the sum always gets halved.'
        },
        tip:'Read the trapezoid formula as "average the parallel sides, then multiply by the height". Written that way the ½ is impossible to drop, and the answer always lands between the two rectangles you could build on each parallel side.',
        desmos:'Evaluate 0.5*(14+22)*9 in Desmos: 162.',
        desmosLatex:['0.5\\cdot(14+22)\\cdot9']
      },
      {
        id:'GTC-25', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Scaling: what happens to volume when every edge doubles',
        stem:'Two solids have the same shape, and every edge of the larger one is exactly twice the length of the matching edge of the smaller one. The smaller solid has a volume of 45 cubic centimeters. What is the volume of the larger solid, in cubic centimeters?',
        choices:{A:'90', B:'360', C:'180', D:'720'},
        correct:'B',
        expCorrect:'Volume grows with the CUBE of the scale factor. Doubling every edge multiplies the volume by 2³ = 8: 45(8) = 360 cubic centimeters. (Check with a concrete case: a 1-by-1-by-1 cube holds 1, and a 2-by-2-by-2 cube holds 8 — eight times, not two ✓.)',
        expWrong:{
          A:'90 multiplies the volume by 2, the length factor. Only lengths scale by k; volume grows in three directions at once.',
          C:'180 uses 2² = 4, which is the factor for AREA. Surface area scales by k², volume by k³.',
          D:'720 uses 2⁴ = 16. There are only three dimensions to stretch, so the exponent stops at 3.'
        },
        tip:'One scale factor, three exponents: lengths × k, areas × k², volumes × k³. Any similar-figure question is really asking which of the three you need.',
        desmos:'Evaluate 45*2^3 in Desmos: 360.',
        desmosLatex:['45\\cdot2^3']
      },
      {
        id:'GTC-26', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volume of an open box folded from a flat sheet',
        figure: FIG_BOX,
        stem:'A rectangular sheet of cardboard measures 40 centimeters by 25 centimeters. A square of side 6 centimeters is cut from each of the four corners, and the four flaps that are left are folded up to form an open box. What is the volume of the box, in cubic centimeters?',
        choices:{A:'364', B:'3876', C:'6000', D:'2184'},
        correct:'D',
        expCorrect:'Each side of the sheet loses a 6-centimeter square at BOTH of its ends, so each dimension drops by 12: the base measures 40 − 12 = 28 by 25 − 12 = 13. The folded flaps give a height of 6. So V = 28 × 13 × 6 = 364 × 6 = 2184 cubic centimeters. (Check: 28 + 6 + 6 = 40 and 13 + 6 + 6 = 25, so the pieces add back to the original sheet ✓.)',
        expWrong:{
          A:'364 is 28 × 13, the area of the base of the box. Multiplying by the height of 6 is still missing.',
          B:'3876 uses 34 by 19, subtracting 6 from each dimension only once. Every length of the sheet has two ends, and a square is removed at each of them.',
          C:'6000 is 40 × 25 × 6, as if nothing had been cut. The corners are gone, so the floor of the box is smaller than the sheet it came from.'
        },
        tip:'In any cut-the-corners problem, each dimension loses TWICE the cut, and the cut itself becomes the height. Sketch the flat sheet and write 6, (40 − 12), 6 across the top — the pieces adding back to 40 is the check.',
        desmos:'Evaluate (40-2*6)*(25-2*6)*6 in Desmos: 2184.',
        desmosLatex:['(40-2\\cdot6)(25-2\\cdot6)\\cdot6']
      },

      /* ===================== Lines, angles and triangles ===================== */
      {
        id:'GTC-27', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Angles along a straight line are supplementary',
        figure: FIG_STRAIGHT,
        stem:'In the figure, points A, O and B lie on one straight line, and ray OC is drawn from O. The angle AOC measures (2x + 10)° and the angle COB measures (4x + 50)°. What is the value of x?',
        choices:{A:'20', B:'5', C:'−20', D:'50'},
        correct:'A',
        expCorrect:'The two angles sit side by side along a straight line, so together they make 180°: (2x + 10) + (4x + 50) = 180 → 6x + 60 = 180 → 6x = 120 → x = 20. (Check: 2(20) + 10 = 50 and 4(20) + 50 = 130, and 50 + 130 = 180 ✓.)',
        expWrong:{
          B:'5 comes from setting the sum to 90. Ninety is for two angles that form a square corner; a straight line is 180.',
          C:'−20 sets the two expressions equal to each other. They are only equal if the ray splits the line evenly, and the figure shows two clearly different angles.',
          D:'50 sets the sum to 360, the full turn around a point. A straight line is only half of that turn.'
        },
        tip:'Three sums cover nearly every angle chase: a straight line is 180°, a full turn around a point is 360°, and a square corner is 90°. Decide which one the figure shows BEFORE writing the equation.',
        desmos:'Solve (2x+10)+(4x+50)=180 in Desmos: x = 20.',
        desmosLatex:['(2x+10)+(4x+50)=180']
      },
      {
        id:'GTC-28', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'The angles of a triangle add to 180 degrees',
        stem:'In triangle ABC, the measure of angle A is 47° and the measure of angle B is 68°. What is the measure, in degrees, of angle C?',
        choices:{A:'43', B:'115', C:'65', D:'245'},
        correct:'C',
        expCorrect:'The three angles of any triangle add to 180°: 47 + 68 + C = 180. The two given angles come to 115, so C = 180 − 115 = 65°. (Check: 47 + 68 + 65 = 180 ✓.)',
        expWrong:{
          A:'43 is 90 − 47, which assumes the triangle has a right angle. Nothing here says it does, and if it did, the 68° angle would have nowhere to fit.',
          B:'115 is the sum of the two given angles — the halfway step. Subtract it from 180 to get the third one.',
          D:'245 subtracts from 360. A full turn is 360°, but the three angles of a triangle add to 180.'
        },
        tip:'Add the angles you know, then subtract from 180. Writing the subtraction as 180 − (sum) keeps you from stopping at the sum, which is the most common slip on these.',
        desmos:'Evaluate 180-47-68 in Desmos: 65.',
        desmosLatex:['180-47-68']
      },
      {
        id:'GTC-29', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Vertical angles and the angles next to them',
        stem:'Two straight lines cross at a point, forming four angles. One of those four angles measures 118°. What is the measure, in degrees, of an angle next to it, sharing one of its sides?',
        choices:{A:'59', B:'62', C:'118', D:'242'},
        correct:'B',
        expCorrect:'Two angles that sit next to each other at the crossing point together make a straight line, so they add to 180°: 180 − 118 = 62°. (Check: the four angles are 118, 62, 118 and 62, and they add to 360, one full turn ✓.)',
        expWrong:{
          A:'59 halves the 118. Crossing lines do not cut each other in half; they create pairs that are equal and pairs that add to 180.',
          C:'118 is the angle OPPOSITE the given one — the vertical angle. Vertical angles are equal, but they do not share a side; the neighbouring angles are the supplementary ones.',
          D:'242 is 360 − 118, which is the reflex angle going the long way around. A single angle formed by two crossing lines is always less than 180.'
        },
        tip:'Crossing lines give exactly two different sizes: the pair facing each other is equal, and any two side by side add to 180. Find one of the four and you know all four.',
        desmos:'Evaluate 180-118 in Desmos: 62.',
        desmosLatex:['180-118']
      },
      {
        id:'GTC-30', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Parallel lines: same-side interior angles',
        figure: FIG_PARALLEL,
        stem:'In the figure, lines r and s are parallel and are cut by transversal t. Both marked angles lie between r and s and on the same side of t. One measures (3x − 4)° and the other measures (x + 20)°. What is the value of x?',
        choices:{A:'12', B:'18.5', C:'86', D:'41'},
        correct:'D',
        expCorrect:'Two interior angles on the SAME side of the transversal are supplementary when the lines are parallel, so they add to 180°: (3x − 4) + (x + 20) = 180 → 4x + 16 = 180 → 4x = 164 → x = 41. (Check: 3(41) − 4 = 119 and 41 + 20 = 61, and 119 + 61 = 180 ✓.)',
        expWrong:{
          A:'12 sets the two expressions equal. Interior angles on the same side are supplementary, not congruent; the equal pairs are the ones on OPPOSITE sides of the transversal.',
          B:'18.5 makes the sum 90. Nothing in the figure creates a square corner — the two angles together span the strip between the parallel lines, which is a straight-line 180.',
          C:'86 makes the sum 360, the full turn around a point. These two angles sit at two DIFFERENT points, one on r and one on s.'
        },
        tip:'Sort the pairs by position: same side of the transversal means they add to 180, opposite sides means they are equal. Say which pair you have out loud before you write the equation — that one sentence prevents most errors here.',
        desmos:'Solve (3x-4)+(x+20)=180 in Desmos: x = 41.',
        desmosLatex:['(3x-4)+(x+20)=180']
      },
      {
        id:'GTC-31', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Regular polygon: from one interior angle to the number of sides',
        stem:'Each interior angle of a regular polygon measures 156°. How many sides does the polygon have?',
        answer:'15',
        expCorrect:'Work through the exterior angles, which is the short road. At each vertex the interior and exterior angles form a straight line, so each exterior angle is 180 − 156 = 24°. The exterior angles of any polygon add to 360°, and in a regular one they are all equal, so the number of sides is 360/24 = 15. (Check the long way: the interior angles of a 15-sided polygon add to (15 − 2)180 = 2340, and 2340/15 = 156 ✓.)',
        tip:'The exterior angles of ANY polygon add to 360° — that fact does not depend on the number of sides, which is what makes it so useful. For a regular polygon: one exterior angle is 180 minus the interior one, and n = 360 divided by it.',
        desmos:'Evaluate 360/(180-156) in Desmos: 15.',
        desmosLatex:['\\frac{360}{180-156}']
      },
      {
        id:'GTC-32', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Similar triangles from two shadows at the same moment',
        figure: FIG_SHADOW,
        stem:'A meter stick standing upright on level ground casts a shadow 0.8 meters long. At the same moment, a tree standing nearby casts a shadow 14 meters long. How tall is the tree, in meters?',
        choices:{A:'17.5', B:'11.2', C:'14.8', D:'1.75'},
        correct:'A',
        expCorrect:'At the same moment the sunlight hits both objects at the same angle, so the two triangles have the same shape and their sides are in the same ratio: height/shadow is the same for both. For the stick that ratio is 1/0.8 = 1.25, so the tree is 1.25(14) = 17.5 meters tall. (Check: 17.5/14 = 1.25 = 1/0.8 ✓.)',
        expWrong:{
          B:'11.2 multiplies 0.8 by 14, which shrinks the tree instead of stretching it. The stick is TALLER than its shadow, so the tree must also be taller than its 14-meter shadow.',
          C:'14.8 adds 14 + 0.8. Similar figures are related by a multiplier, not by a fixed amount added on.',
          D:'1.75 is the right ratio with the decimal point in the wrong place — 14/8 instead of 14/0.8. A tree shorter than the meter stick would not cast a 14-meter shadow.'
        },
        tip:'Set up shadow problems as one proportion with matching parts on top: height over shadow for the small object equals height over shadow for the big one. Then sanity-check the direction — if the object is taller than its shadow, the answer must be too.',
        desmos:'Solve h/14=1/0.8 in Desmos: h = 17.5.',
        desmosLatex:['\\frac{h}{14}=\\frac{1}{0.8}']
      },
      {
        id:'GTC-33', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Isosceles triangle: equal sides face equal angles',
        figure: FIG_ISO,
        stem:'In the figure, triangle PQR has PQ = PR, as the tick marks show, and the angle at Q measures 71°. What is the measure, in degrees, of the angle at P?',
        choices:{A:'54.5', B:'71', C:'38', D:'109'},
        correct:'C',
        expCorrect:'Equal sides face equal angles. PQ and PR are equal, so the angles across from them — the ones at R and at Q — are equal, making the angle at R also 71°. The three angles add to 180: P = 180 − 71 − 71 = 38°. (Check: 71 + 71 + 38 = 180 ✓.)',
        expWrong:{
          A:'54.5 is (180 − 71)/2, halving what is left after ONE base angle. Both base angles measure 71, so 71 has to come out twice before anything is halved.',
          B:'71 copies the given angle, which would make all three angles equal at 60°. Only an equilateral triangle has three equal angles, and this one has just two equal sides.',
          D:'109 is 180 − 71, the supplement of the given angle. That would be right for two angles on a straight line; inside a triangle there is a third angle to subtract as well.'
        },
        tip:'In an isosceles triangle find the pair FIRST: the equal angles are the ones opposite the equal sides, never the angle between them. Then subtract both from 180.',
        desmos:'Evaluate 180-2*71 in Desmos: 38.',
        desmosLatex:['180-2\\cdot71']
      },
      {
        id:'GTC-34', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'A bend between two parallel lines',
        figure: FIG_BEND,
        stem:'In the figure, lines m and n are parallel. Point A is on m, point B is on n, and point C lies between the two lines, so the path from A to C to B bends at C. At A the angle between AC and the part of m to the left of A measures 34°, and at B the angle between BC and the part of n to the left of B measures 48°. What is the measure, in degrees, of angle ACB?',
        choices:{A:'14', B:'82', C:'98', D:'278'},
        correct:'B',
        expCorrect:'Draw a helper line through C parallel to both m and n. It splits angle ACB into two pieces. The upper piece and the 34° angle at A are alternate interior angles for m and the helper line, so that piece is 34°. The lower piece and the 48° angle at B are alternate interior angles for the helper line and n, so that piece is 48°. Adding them: angle ACB = 34 + 48 = 82°. (Check: pushing C far to the left flattens the bend toward 0°, and pulling it right opens it toward 34 + 48 — the two given angles are the only ones in play ✓.)',
        expWrong:{
          A:'14 subtracts the two angles. Subtraction is what you get when C is on the OTHER side, outside the strip between the lines; here the path bends inward and the pieces add.',
          C:'98 is 180 − 82, the angle on the other side of the bend. The question marks the angle inside the bend, the one between segments CA and CB.',
          D:'278 is 360 − 82, the reflex angle measured the long way around C. The marked angle at a bend is the one under 180.'
        },
        tip:'When a path bends between two parallel lines, draw a third parallel line through the bend. The bend angle then splits into two alternate interior angles, so it equals the SUM of the two outer angles.',
        desmos:'Evaluate 34+48 in Desmos: 82.',
        desmosLatex:['34+48']
      }
    ]
  });
})();
