/* SAT Studio question set — Math: Geometry & Trigonometry + Problem-Solving & Data Analysis (GPD-01 a GPD-34) */
(function(){
  /* Figuras: SVG inline, viewBox propio, role="img" y aria-label que por sí solo
     alcanza para contestar. Todas las medidas dibujadas se verificaron contra el
     enunciado con un script (ángulos, razones de lados, alturas de barras).
     OJO con el detector de español: la palabra inglesa "triangular" se confunde
     con "triángulo", así que acá se dice "whose base is the top face" y similares. */

  /* GPD-04: ángulo inscrito de 34° y central de 68° sobre el mismo arco AC.
     A y C a 236° y 304° del centro (68° de diferencia), B arriba. */
  var FIG_INSCRIBED =
    '<svg viewBox="0 0 260 228" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with center O. Points A and C are on the lower part of the circle, A on the left and C on the right, and point B is at the top of the circle. Segments BA and BC are drawn, forming inscribed angle ABC at B, which is marked 34 degrees. Segments OA and OC are drawn, forming central angle AOC at the center, which is marked x degrees. Both angles open onto the same arc AC, the short arc between A and C at the bottom.">' +
    '<circle cx="130" cy="115" r="85" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="130" y1="30" x2="83" y2="186" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="130" y1="30" x2="177" y2="186" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="130" y1="115" x2="83" y2="186" stroke="#324DC7" stroke-width="2.5"/>' +
    '<line x1="130" y1="115" x2="177" y2="186" stroke="#324DC7" stroke-width="2.5"/>' +
    '<circle cx="130" cy="115" r="3" fill="#1e1e1e"/>' +
    '<text x="130" y="86" font-size="13" font-family="Georgia,serif" text-anchor="middle">34°</text>' +
    '<text x="130" y="150" font-size="13" font-family="Georgia,serif" text-anchor="middle" fill="#324DC7" font-style="italic">x°</text>' +
    '<text x="139" y="111" font-size="13" font-family="Georgia,serif" font-style="italic">O</text>' +
    '<text x="130" y="20" font-size="13" font-family="Georgia,serif" text-anchor="middle" font-style="italic">B</text>' +
    '<text x="72" y="200" font-size="13" font-family="Georgia,serif" font-style="italic">A</text>' +
    '<text x="184" y="200" font-size="13" font-family="Georgia,serif" font-style="italic">C</text>' +
    '<text x="10" y="222" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  /* GPD-05: dos tangentes desde P. Dibujo A ESCALA: r = 60 px, OP = 100 px,
     así que cos = 0.6 y cada tangente mide 80 px — el 9-12-15 exacto. */
  var FIG_TANGENTS =
    '<svg viewBox="0 0 250 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with center O. Point P is outside the circle, to the right of O. Segment OP is dashed and labeled 15. Two segments are drawn from P to the circle: PT touches the circle at point T above segment OP, and PU touches the circle at point U below segment OP. Radius OT is labeled 9, and radius OU is drawn as well. A small square at T marks the right angle between OT and PT, and a small square at U marks the right angle between OU and PU. The four segments OT, TP, PU and UO form quadrilateral OTPU.">' +
    '<circle cx="95" cy="110" r="60" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="95" y1="110" x2="160" y2="110" stroke="#757575" stroke-width="2" stroke-dasharray="6 4"/>' +
    '<line x1="184" y1="110" x2="195" y2="110" stroke="#757575" stroke-width="2" stroke-dasharray="6 4"/>' +
    '<line x1="95" y1="110" x2="131" y2="62" stroke="#324DC7" stroke-width="2.5"/>' +
    '<line x1="95" y1="110" x2="131" y2="158" stroke="#324DC7" stroke-width="2.5"/>' +
    '<line x1="131" y1="62" x2="195" y2="110" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="131" y1="158" x2="195" y2="110" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<polygon points="131,62 125,70 133,76 139,68" fill="none" stroke="#1e1e1e" stroke-width="1.6"/>' +
    '<polygon points="131,158 125,150 133,144 139,152" fill="none" stroke="#1e1e1e" stroke-width="1.6"/>' +
    '<circle cx="95" cy="110" r="3" fill="#1e1e1e"/><circle cx="195" cy="110" r="3" fill="#1e1e1e"/>' +
    '<text x="99" y="80" font-size="14" font-family="Georgia,serif" text-anchor="middle" fill="#324DC7">9</text>' +
    '<text x="172" y="118" font-size="14" font-family="Georgia,serif" text-anchor="middle">15</text>' +
    '<text x="83" y="108" font-size="13" font-family="Georgia,serif" text-anchor="end" font-style="italic">O</text>' +
    '<text x="203" y="114" font-size="13" font-family="Georgia,serif" font-style="italic">P</text>' +
    '<text x="137" y="52" font-size="13" font-family="Georgia,serif" font-style="italic">T</text>' +
    '<text x="137" y="176" font-size="13" font-family="Georgia,serif" font-style="italic">U</text>' +
    '<text x="8" y="199" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  /* GPD-07: 30-60-90 con el cateto corto EF = 11 dibujado en 120 px y el largo
     DE en 210 px (razón 1.75 contra √3 = 1.732: el ángulo en D sale 29.7°). */
  var FIG_3060 =
    '<svg viewBox="0 0 290 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right triangle DEF. Vertex D is at the lower left, vertex E is at the lower right, and vertex F is directly above E. A small square at E marks the right angle. The angle at D measures 30 degrees. Side EF, the vertical side opposite the 30 degree angle, is labeled 11. Side DE, along the bottom, and side DF, the slanted side from D up to F, are not labeled.">' +
    '<polygon points="40,170 250,170 250,50" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="238" y="158" width="12" height="12" fill="none" stroke="#1e1e1e" stroke-width="1.6"/>' +
    '<path d="M 86 170 A 46 46 0 0 0 79.9 147.2" fill="none" stroke="#324DC7" stroke-width="1.8"/>' +
    '<text x="102" y="162" font-size="13" font-family="Georgia,serif" text-anchor="middle" fill="#324DC7">30°</text>' +
    '<text x="260" y="114" font-size="14" font-family="Georgia,serif">11</text>' +
    '<text x="30" y="180" font-size="13" font-family="Georgia,serif" font-style="italic">D</text>' +
    '<text x="256" y="186" font-size="13" font-family="Georgia,serif" font-style="italic">E</text>' +
    '<text x="256" y="46" font-size="13" font-family="Georgia,serif" font-style="italic">F</text>' +
    '<text x="8" y="200" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  /* GPD-09: rampa 10-24-26 dibujada a escala (100 px de alto, 240 de base,
     260 de hipotenusa). La base NO se etiqueta: hay que sacarla. */
  var FIG_RAMP =
    '<svg viewBox="0 0 320 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A right triangle representing a ramp. The bottom side is the ground, running from a point at the lower left to a point at the lower right. The vertical side rises from the right end of the ground and is labeled 10 ft. The slanted side, the ramp surface, runs from the left end of the ground up to the top of the vertical side and is labeled 26 ft. A small square marks the right angle where the vertical side meets the ground. The angle between the ramp surface and the ground, at the left end, is labeled x degrees. The length of the ground is not given.">' +
    '<polygon points="30,180 270,180 270,80" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="258" y="168" width="12" height="12" fill="none" stroke="#1e1e1e" stroke-width="1.6"/>' +
    '<path d="M 68 180 A 38 38 0 0 0 65.1 165.4" fill="none" stroke="#324DC7" stroke-width="1.8"/>' +
    '<text x="78" y="173" font-size="13" font-family="Georgia,serif" fill="#324DC7" font-style="italic">x°</text>' +
    '<text x="144" y="118" font-size="14" font-family="Georgia,serif" text-anchor="middle">26 ft</text>' +
    '<text x="278" y="134" font-size="14" font-family="Georgia,serif">10 ft</text>' +
    '<text x="150" y="196" font-size="12" fill="#757575" font-family="Arial,sans-serif" text-anchor="middle">ground</text>' +
    '<text x="8" y="210" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  /* GPD-11: L de 18 × 10 con un recorte de 6 × 4 arriba a la derecha.
     12 px por metro; los dos lados del recorte quedan SIN etiquetar a propósito. */
  var FIG_LSHAPE =
    '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A six-sided patio shaped like the letter L, with a right angle at every corner. Starting at the bottom left corner and going clockwise: the left side goes up and is labeled 10 m; the top side goes right and is labeled 12 m; then the outline steps down; then it goes right again; then the right side goes down and is labeled 6 m; and the bottom side goes left and is labeled 18 m. The two sides of the step, at the top right of the patio, are not labeled.">' +
    '<polygon points="40,150 256,150 256,78 184,78 184,30 40,30" fill="#eef1fb" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<text x="148" y="168" font-size="14" font-family="Georgia,serif" text-anchor="middle">18 m</text>' +
    '<text x="32" y="95" font-size="14" font-family="Georgia,serif" text-anchor="end">10 m</text>' +
    '<text x="112" y="22" font-size="14" font-family="Georgia,serif" text-anchor="middle">12 m</text>' +
    '<text x="264" y="118" font-size="14" font-family="Georgia,serif">6 m</text>' +
    '<text x="8" y="193" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  /* GPD-15: dos paralelas y una transversal. Los dos ángulos marcados son
     alternos EXTERNOS: uno arriba de p a la izquierda, otro debajo de q a la derecha. */
  var FIG_TRANSVERSAL =
    '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two parallel horizontal lines, p on top and q below, are cut by a slanted transversal t that goes from upper left to lower right. Two angles are marked. The first sits above line p and on the left side of the transversal, and it is labeled open parenthesis 2x plus 10 close parenthesis degrees. The second sits below line q and on the right side of the transversal, and it measures 100 degrees. The two marked angles are both outside the pair of parallel lines and on opposite sides of the transversal.">' +
    '<line x1="20" y1="50" x2="280" y2="50" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="20" y1="150" x2="280" y2="150" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="100" y1="20" x2="200" y2="180" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<text x="95" y="40" font-size="13" font-family="Georgia,serif" text-anchor="end" fill="#324DC7">(2x + 10)°</text>' +
    '<text x="202" y="172" font-size="14" font-family="Georgia,serif">100°</text>' +
    '<text x="286" y="54" font-size="14" font-family="Georgia,serif" fill="#324DC7">p</text>' +
    '<text x="286" y="154" font-size="14" font-family="Georgia,serif" fill="#324DC7">q</text>' +
    '<text x="108" y="18" font-size="14" font-family="Georgia,serif" fill="#324DC7">t</text>' +
    '<text x="8" y="195" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. Lines p and q are parallel.</text>' +
    '</svg>';

  /* GPD-17: DE paralela a BC con D y E al 40 % de los lados. Dibujo a escala:
     DE mide 88 px y BC 220 px, razón 0.4, igual que 8/20. */
  var FIG_SIMILAR =
    '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with vertex A at the top, vertex B at the lower left and vertex C at the lower right. Point D lies on side AB and point E lies on side AC, and segment DE is drawn across the triangle parallel to side BC. On side AB, the upper piece AD is labeled 8 and the lower piece DB is labeled 12. Side BC, along the bottom, is labeled 30. Segment DE is not labeled.">' +
    '<polygon points="150,25 40,185 260,185" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="106" y1="89" x2="194" y2="89" stroke="#324DC7" stroke-width="2.5"/>' +
    '<text x="118" y="55" font-size="14" font-family="Georgia,serif" text-anchor="end">8</text>' +
    '<text x="64" y="140" font-size="14" font-family="Georgia,serif" text-anchor="end">12</text>' +
    '<text x="150" y="201" font-size="14" font-family="Georgia,serif" text-anchor="middle">30</text>' +
    '<text x="150" y="17" font-size="13" font-family="Georgia,serif" text-anchor="middle" font-style="italic">A</text>' +
    '<text x="30" y="196" font-size="13" font-family="Georgia,serif" font-style="italic">B</text>' +
    '<text x="266" y="196" font-size="13" font-family="Georgia,serif" font-style="italic">C</text>' +
    '<text x="96" y="92" font-size="13" font-family="Georgia,serif" text-anchor="end" font-style="italic">D</text>' +
    '<text x="202" y="92" font-size="13" font-family="Georgia,serif" font-style="italic">E</text>' +
    '<text x="8" y="214" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  /* GPD-18: J = 43°, K interior = 62°, exterior LKM = 118°. Los vértices se
     resolvieron para que los ángulos DIBUJADOS midan eso (43.0, 118.0, 74.9). */
  var FIG_EXTERIOR =
    '<svg viewBox="0 0 335 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle JKL with J at the lower left, K at the lower right and L at the top. Side JK lies along a horizontal line, and that line continues past K to a point M farther right, so J, K and M are on one straight line. The angle at J, inside the triangle, is marked 43 degrees. The angle at K between side KL and the extension KM, outside the triangle, is marked 118 degrees. The angle at L is not marked.">' +
    '<line x1="40" y1="185" x2="310" y2="185" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="40" y1="185" x2="157" y2="76" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="215" y1="185" x2="157" y2="76" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<path d="M 80 185 A 40 40 0 0 0 69.2 157.7" fill="none" stroke="#324DC7" stroke-width="1.8"/>' +
    '<path d="M 251 185 A 36 36 0 0 0 198.1 153.2" fill="none" stroke="#324DC7" stroke-width="1.8"/>' +
    '<text x="92" y="168" font-size="13" font-family="Georgia,serif" text-anchor="middle">43°</text>' +
    '<text x="243" y="142" font-size="13" font-family="Georgia,serif" text-anchor="middle" fill="#324DC7">118°</text>' +
    '<text x="30" y="196" font-size="13" font-family="Georgia,serif" font-style="italic">J</text>' +
    '<text x="211" y="200" font-size="13" font-family="Georgia,serif" font-style="italic">K</text>' +
    '<text x="157" y="66" font-size="13" font-family="Georgia,serif" text-anchor="middle" font-style="italic">L</text>' +
    '<text x="306" y="199" font-size="13" font-family="Georgia,serif" font-style="italic">M</text>' +
    '<text x="8" y="211" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  /* GPD-31: histograma de 25 hogares. 15 px por hogar, base en y = 180.
     Alturas: 5→75, 9→135, 7→105, 3→45, 1→15. */
  var FIG_HISTOGRAM =
    '<svg viewBox="0 0 310 232" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A histogram titled Number of households. The horizontal axis is labeled Number of pets and has five bars, one for each value from 0 to 4. The vertical axis runs from 0 to 10 and is marked every 2 units. The bar for 0 pets reaches 5 households, the bar for 1 pet reaches 9 households, the bar for 2 pets reaches 7 households, the bar for 3 pets reaches 3 households, and the bar for 4 pets reaches 1 household. The five bars account for 25 households in all.">' +
    '<text x="18" y="18" font-size="12" font-family="Arial,sans-serif" fill="#424242">Number of households</text>' +
    '<line x1="60" y1="28" x2="60" y2="180" stroke="#1e1e1e" stroke-width="2"/>' +
    '<line x1="60" y1="180" x2="292" y2="180" stroke="#1e1e1e" stroke-width="2"/>' +
    '<g stroke="#1e1e1e" stroke-width="1.5">' +
    '<line x1="55" y1="180" x2="60" y2="180"/><line x1="55" y1="150" x2="60" y2="150"/>' +
    '<line x1="55" y1="120" x2="60" y2="120"/><line x1="55" y1="90" x2="60" y2="90"/>' +
    '<line x1="55" y1="60" x2="60" y2="60"/><line x1="55" y1="30" x2="60" y2="30"/></g>' +
    '<g font-size="12" font-family="Arial,sans-serif" text-anchor="end">' +
    '<text x="50" y="184">0</text><text x="50" y="154">2</text><text x="50" y="124">4</text>' +
    '<text x="50" y="94">6</text><text x="50" y="64">8</text><text x="50" y="34">10</text></g>' +
    '<g fill="#c9d3f5" stroke="#324DC7" stroke-width="2">' +
    '<rect x="66" y="105" width="36" height="75"/><rect x="110" y="45" width="36" height="135"/>' +
    '<rect x="154" y="75" width="36" height="105"/><rect x="198" y="135" width="36" height="45"/>' +
    '<rect x="242" y="165" width="36" height="15"/></g>' +
    '<g font-size="12" font-family="Arial,sans-serif" text-anchor="middle">' +
    '<text x="84" y="196">0</text><text x="128" y="196">1</text><text x="172" y="196">2</text>' +
    '<text x="216" y="196">3</text><text x="260" y="196">4</text></g>' +
    '<text x="176" y="216" font-size="12" font-family="Arial,sans-serif" text-anchor="middle" fill="#424242">Number of pets</text>' +
    '</svg>';

  /* GPD-32 y GPD-33: la misma tabla de doble entrada, dos preguntas distintas.
     240 personas; 90 caminan, 150 manejan; 114 en la mañana, 126 en la tarde. */
  var TBL_CENTER =
    '<table border="1" cellpadding="6" style="border-collapse:collapse">' +
    '<tr><th></th><th>Walks</th><th>Drives</th><th>Total</th></tr>' +
    '<tr><th>Morning class</th><td>54</td><td>60</td><td>114</td></tr>' +
    '<tr><th>Evening class</th><td>36</td><td>90</td><td>126</td></tr>' +
    '<tr><th>Total</th><td>90</td><td>150</td><td>240</td></tr></table>';

  window.SAT_SETS.push({
    id: 'math-geo-pd-a',
    title: 'Geometry, Trig & Data Analysis',
    section: 'math',
    level: 'Media',
    description: 'The two shorter math domains in one block: circles, right triangles, area and volume and angle chasing, then rates and units, percentages, one-variable data and conditional probability.',
    minutes: 42,
    questions: [
      /* ===================== Geometry & Trigonometry — Circles ===================== */
      {
        id:'GPD-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Circle equation in standard form',
        stem:'In the xy-plane, the graph of (x + 6)² + (y − 2)² = 49 is a circle. What are the coordinates of the center of the circle and the length of its radius?',
        choices:{A:'(6, −2) and r = 7', B:'(−6, 2) and r = 49', C:'(−6, 2) and r = 7', D:'(−6, 2) and r = 3.5'},
        correct:'C',
        expCorrect:'Standard form is (x − h)² + (y − k)² = r², with center (h, k). Rewrite what is given so it matches: (x − (−6))² + (y − 2)² = 7². So h = −6, k = 2 and r = 7. (Check: the point (−6, 9) is 7 units straight up from the center, and (−6 + 6)² + (9 − 2)² = 0 + 49 ✓.)',
        expWrong:{
          A:'(6, −2) reads the numbers straight off the parentheses. The form has MINUS signs built in, so x + 6 means h = −6 and y − 2 means k = +2: both signs flip from what you see.',
          B:'r = 49 skips the square root. The number on the right side is r², not r, so r = √49 = 7.',
          D:'r = 3.5 halves the 7, treating it as a diameter. The standard form gives the RADIUS directly; nothing here needs halving.'
        },
        tip:'(x − h)² + (y − k)² = r². Two habits cover almost every circle question: flip the sign of each number inside the parentheses to get the center, and take the square root of the right side to get the radius.',
        desmos:'Graph (x+6)^2+(y-2)^2=49 in Desmos. The circle is centered at (−6, 2) and reaches from x = −13 to x = 1, which is 14 across, so the radius is 7.',
        desmosLatex:['(x+6)^2+(y-2)^2=49']
      },
      {
        id:'GPD-02', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Completing the square to find the center and the radius',
        stem:'The equation x² + y² + 8x − 6y = 39 defines a circle in the xy-plane. The center of the circle is (h, k) and the length of its radius is r. What is the value of h + k + r?',
        answer:'7',
        expCorrect:'Complete the square in each variable. For x: half of 8 is 4, and 4² = 16, so x² + 8x = (x + 4)² − 16. For y: half of −6 is −3, and (−3)² = 9, so y² − 6y = (y − 3)² − 9. The equation becomes (x + 4)² + (y − 3)² − 25 = 39, that is (x + 4)² + (y − 3)² = 64. So h = −4, k = 3 and r = √64 = 8, and h + k + r = −4 + 3 + 8 = 7. (Check: the point (4, 3) is 8 units right of the center, and 4² + 3² + 8(4) − 6(3) = 16 + 9 + 32 − 18 = 39 ✓.)',
        tip:'To complete the square, take half of the coefficient of the linear term, square it, and add that to BOTH sides. Do it for x and y separately, and remember the right side grows by both amounts before you take the square root.',
        desmos:'Graph x^2+y^2+8x-6y=39 and (x+4)^2+(y-3)^2=64 in Desmos: they draw the same circle, which confirms the completed square.',
        desmosLatex:['x^2+y^2+8x-6y=39','(x+4)^2+(y-3)^2=64']
      },
      {
        id:'GPD-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Area of a sector from a central angle',
        stem:'A circular garden bed has a radius of 12 feet. A sprinkler at the center of the bed waters a sector with a central angle of 150°. What is the area, in square feet, of the sector that is watered?',
        choices:{A:'10π', B:'60π', C:'120π', D:'144π'},
        correct:'B',
        expCorrect:'A sector is a fraction of the whole circle, and the fraction is (central angle)/360. Whole circle: πr² = π(12)² = 144π. Sector: (150/360)(144π) = (5/12)(144π) = 60π square feet. (Check: 150° is a bit under half a turn, and 60π is a bit under half of 144π ✓.)',
        expWrong:{
          A:'10π is the ARC LENGTH of the sector: (150/360)(2π · 12) = 10π feet. That is a distance, not an area — read the units the question asks for.',
          C:'120π uses 150/180 instead of 150/360. A full turn is 360°, not 180°; 180 is the straight angle, which is only half a circle.',
          D:'144π is the area of the WHOLE circle. The sprinkler covers only part of it, so the answer has to be smaller.'
        },
        tip:'Everything about a sector is the same fraction of the whole circle: (angle/360). Multiply that fraction by πr² for the area and by 2πr for the arc length. Decide first which one the question wants.',
        desmos:'Evaluate (150/360)*pi*12^2 in Desmos: about 188.5, and 60*pi is also about 188.5.',
        desmosLatex:['\\frac{150}{360}\\cdot\\pi\\cdot12^2','60\\pi']
      },
      {
        id:'GPD-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Central angle and inscribed angle on the same arc',
        figure: FIG_INSCRIBED,
        stem:'In the circle shown, O is the center and points A, B and C lie on the circle. Inscribed angle ABC and central angle AOC open onto the same arc AC. If the measure of angle ABC is 34°, what is the measure, in degrees, of angle AOC?',
        choices:{A:'34', B:'17', C:'146', D:'68'},
        correct:'D',
        expCorrect:'On the same arc, the central angle is TWICE the inscribed angle: angle AOC = 2(34°) = 68°. (Check the other direction: an inscribed angle is half the central angle, and half of 68 is 34 ✓.)',
        expWrong:{
          A:'34 treats the two angles as equal. They are equal only in the sense that both open onto arc AC; the vertex position changes the measure, and the one at the center is the bigger one.',
          B:'17 halves 34 instead of doubling it. The angle at the CENTER is the larger of the two, so it cannot be smaller than the angle at B.',
          C:'146 is 180 − 34. Supplementary pairs show up with a cyclic quadrilateral (opposite angles add to 180°), not with a central and an inscribed angle on the same arc.'
        },
        tip:'Find the arc first, then ask where the vertex is. Vertex at the center → the angle equals the arc. Vertex on the circle → the angle is half the arc. So central = 2 × inscribed whenever they share an arc.',
        desmos:'No graph needed: 2*34 gives 68. Use Desmos only to confirm the arithmetic.',
        desmosLatex:['2\\cdot34']
      },
      {
        id:'GPD-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Tangent line and radius: the right angle at the point of contact',
        figure: FIG_TANGENTS,
        stem:'In the figure, a circle has center O and radius 9. From an external point P, segment PT touches the circle at T and segment PU touches the circle at U. The distance OP is 15. What is the perimeter of quadrilateral OTPU?',
        choices:{A:'42', B:'24', C:'33', D:'48'},
        correct:'A',
        expCorrect:'A radius drawn to a point of tangency is perpendicular to the tangent, so triangle OTP has a right angle at T with hypotenuse OP = 15 and one side OT = 9. Then PT = √(15² − 9²) = √(225 − 81) = √144 = 12 (the 9-12-15 triple). Triangle OUP is the mirror image, so PU = 12 as well. The perimeter is OT + TP + PU + UO = 9 + 12 + 12 + 9 = 42. (Check: 9² + 12² = 81 + 144 = 225 = 15² ✓.)',
        expWrong:{
          B:'24 is 12 + 12, the two tangent segments only. The quadrilateral also has the two radii as sides; every side counts once.',
          C:'33 is 9 + 12 + 12, which counts only three sides. OTPU has FOUR vertices, so the second radius, UO = 9, is still missing.',
          D:'48 uses OP = 15 as a side: 12 + 12 + 15 + 9. OP is the diagonal of the quadrilateral, not an edge — it is the hypotenuse you used to find the 12.'
        },
        tip:'The moment a problem says tangent, draw the radius to the point of contact and mark a right angle there. From an external point the two tangent segments are equal, so one Pythagorean calculation gives you both.',
        desmos:'Evaluate sqrt(15^2-9^2) in Desmos: 12. Then 2*(9+12) gives the perimeter, 42.',
        desmosLatex:['\\sqrt{15^2-9^2}','2\\left(9+12\\right)']
      },

      /* ============ Geometry & Trigonometry — Right triangles and trigonometry ============ */
      {
        id:'GPD-06', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Pythagorean triples in a right triangle',
        stem:'In a right triangle, the two sides that form the right angle have lengths 21 and 28. What is the length of the hypotenuse?',
        choices:{A:'49', B:'7', C:'35', D:'1,225'},
        correct:'C',
        expCorrect:'By the Pythagorean theorem, c² = 21² + 28² = 441 + 784 = 1,225, so c = √1,225 = 35. Faster: 21, 28, 35 is the 3-4-5 triple multiplied by 7 (3·7, 4·7, 5·7). (Check: 441 + 784 = 1,225 = 35² ✓.)',
        expWrong:{
          A:'49 is 21 + 28. Side lengths do not add: if they did, the triangle would flatten into a straight line. The squares add, not the sides.',
          B:'7 is 28 − 21. Subtracting gives the scale factor of the triple by accident, not a side. The hypotenuse must be LONGER than both other sides.',
          D:'1,225 is 21² + 28², the value of c². The last step is still missing: take the square root to get c.'
        },
        tip:'Learn 3-4-5, 5-12-13, 8-15-17 and 7-24-25 and their multiples. When two sides match a triple, you get the third instantly — and it also tells you whether your Pythagorean arithmetic went wrong.',
        desmos:'Evaluate sqrt(21^2+28^2) in Desmos: 35.',
        desmosLatex:['\\sqrt{21^2+28^2}']
      },
      {
        id:'GPD-07', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'The 30-60-90 triangle',
        figure: FIG_3060,
        stem:'In right triangle DEF shown, the right angle is at E and the angle at D measures 30°. Side EF, which is opposite the 30° angle, has length 11. What is the length of side DE?',
        choices:{A:'22', B:'11√3', C:'11√2', D:'11√3 / 3'},
        correct:'B',
        expCorrect:'In a 30-60-90 triangle the sides are x (opposite 30°), x√3 (opposite 60°) and 2x (the hypotenuse). Here the side opposite 30° is EF = 11, so x = 11. DE sits opposite the 60° angle at F, so DE = 11√3 ≈ 19.05. (Check with Pythagoras: 11² + (11√3)² = 121 + 363 = 484 = 22², and 22 is the hypotenuse DF = 2x ✓.)',
        expWrong:{
          A:'22 is the HYPOTENUSE DF = 2x. It is the longest side of the triangle, opposite the right angle at E — not the side the question named.',
          C:'11√2 is the 45-45-90 ratio. That one applies when the two acute angles are equal; here they are 30° and 60°, so the √3 side is the one to use.',
          D:'11√3 / 3 divides by √3 instead of multiplying. Dividing moves you from the longer side to the shorter one, and DE is longer than EF, not shorter.'
        },
        tip:'Write the 30-60-90 ratio as x : x√3 : 2x and label which angle each side faces BEFORE you substitute. The shortest side always faces the 30°, and the hypotenuse is always exactly double it.',
        desmos:'Evaluate 11*sqrt(3) in Desmos: about 19.05. Compare with 22 and 11*sqrt(2), about 15.56.',
        desmosLatex:['11\\sqrt{3}','11\\sqrt{2}']
      },
      {
        id:'GPD-08', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'The 45-45-90 triangle and the diagonal of a square',
        stem:'A square tile has a diagonal of length 14√2 centimeters. What is the perimeter of the tile, in centimeters?',
        answer:'56',
        expCorrect:'A diagonal cuts the square into two 45-45-90 triangles whose equal sides are the sides of the square. In that triangle the sides are s : s : s√2, so the diagonal is s√2. Setting s√2 = 14√2 gives s = 14. The perimeter is 4s = 4(14) = 56 centimeters. (Check with Pythagoras: 14² + 14² = 196 + 196 = 392, and √392 = 14√2 ≈ 19.80 ✓.)',
        tip:'In a square, diagonal = side × √2. Going from the side to the diagonal you multiply by √2; going from the diagonal back to the side you divide by √2. And read the last line: perimeter and area are two more steps after the side.',
        desmos:'Evaluate 14*sqrt(2) in Desmos: about 19.80. Then sqrt(14^2+14^2) gives the same number, which confirms the side is 14.',
        desmosLatex:['14\\sqrt{2}','\\sqrt{14^2+14^2}']
      },
      {
        id:'GPD-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Cosine of an angle in a right triangle in context',
        figure: FIG_RAMP,
        stem:'A loading ramp rises from level ground to a dock, as shown. The ramp surface is 26 feet long, and the dock is 10 feet above the ground. The ramp surface makes an angle of x° with the ground. What is the value of cos(x°)?',
        choices:{A:'12/13', B:'5/13', C:'5/12', D:'13/12'},
        correct:'A',
        expCorrect:'Cosine is (adjacent side)/(hypotenuse), and the side adjacent to x° is the horizontal distance along the ground, which is not given. Find it first: √(26² − 10²) = √(676 − 100) = √576 = 24 (the 5-12-13 triple doubled). So cos(x°) = 24/26 = 12/13 ≈ 0.923. (Check: 10² + 24² = 100 + 576 = 676 = 26² ✓.)',
        expWrong:{
          B:'5/13 is 10/26, which is SIN of the angle: the side opposite x° over the hypotenuse. The 10-foot dock height is across from the angle, not next to it.',
          C:'5/12 is 10/24, the TANGENT: opposite over adjacent. That ratio never uses the hypotenuse, and cosine always does.',
          D:'13/12 is the reciprocal, 26/24. Cosine puts the hypotenuse on the BOTTOM, so a cosine can never be greater than 1.'
        },
        tip:'When a right-triangle ratio asks for a side you were not given, Pythagoras comes first and the ratio second. And sanity-check the result: sine and cosine of an acute angle are always between 0 and 1, so anything larger than 1 is a flipped fraction.',
        desmos:'Evaluate sqrt(26^2-10^2) in Desmos to get 24, then 24/26, which is about 0.923 — the same as 12/13.',
        desmosLatex:['\\sqrt{26^2-10^2}','\\frac{24}{26}']
      },
      {
        id:'GPD-10', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Complementary angles: sin(x°) = cos(90 − x°)',
        stem:'In a right triangle, one acute angle measures x° and the other measures y°. If sin(x°) = 3/5, what is the value of cos(y°) + sin(y°)?',
        choices:{A:'6/5', B:'1', C:'4/5', D:'7/5'},
        correct:'D',
        expCorrect:'The two acute angles of a right triangle add to 90°, so y = 90 − x. Cofunctions swap across that: cos(y°) = cos(90° − x°) = sin(x°) = 3/5. And sin(y°) = sin(90° − x°) = cos(x°). Since sin(x°) = 3/5, the triangle is a 3-4-5, so cos(x°) = 4/5. Therefore cos(y°) + sin(y°) = 3/5 + 4/5 = 7/5 = 1.4. (Check: 3² + 4² = 5² ✓, and sin²+ cos² = 9/25 + 16/25 = 1 ✓.)',
        expWrong:{
          A:'6/5 is 3/5 + 3/5, which assumes sin(y°) = sin(x°) too. The cofunction rule swaps the FUNCTION: sine of one angle equals cosine of the other, never sine of the other.',
          B:'1 comes from sin² + cos² = 1. That identity is about the SQUARES of one angle; adding sin and cos of the same angle is a different quantity, and here it is bigger than 1.',
          C:'4/5 is cos(x°) alone, which equals sin(y°). That is only one of the two terms the question asks you to add.'
        },
        tip:'In a right triangle the two acute angles are complementary, so sin of either equals cos of the other. Turn everything into one angle first, then use the 3-4-5 or 5-12-13 triple to get the partner ratio.',
        desmos:'In Desmos, set a = arcsin(3/5) in degrees and evaluate cos(90-a)+sin(90-a): 1.4, which is 7/5.',
        desmosLatex:['\\frac{3}{5}+\\frac{4}{5}']
      },

      /* ================= Geometry & Trigonometry — Area and volume ================= */
      {
        id:'GPD-11', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Area of a composite figure with a missing side',
        figure: FIG_LSHAPE,
        stem:'The figure shows a patio shaped like the letter L, where every corner is a square corner. The bottom side is 18 meters, the left side is 10 meters, the top side is 12 meters and the right side is 6 meters. What is the area, in square meters, of the patio?',
        choices:{A:'180', B:'144', C:'156', D:'56'},
        correct:'C',
        expCorrect:'Fill in the step first. Horizontally the top is 12 and the bottom is 18, so the step is 18 − 12 = 6 across. Vertically the left is 10 and the right is 6, so the step is 10 − 6 = 4 tall. Now take the full 18 by 10 rectangle and cut out that 6 by 4 corner: 180 − 24 = 156 square meters. (Check by splitting instead of subtracting: a 12 by 10 piece plus a 6 by 6 piece is 120 + 36 = 156 ✓.)',
        expWrong:{
          A:'180 is the full 18 by 10 rectangle, as if the corner had never been cut out. The patio is missing that corner, so its area has to be less than 180.',
          B:'144 is 12 · 6 + 18 · 4, which pairs up sides that do not belong to the same rectangle. Each piece has to use its own width and its own height.',
          D:'56 is the PERIMETER: 18 + 10 + 12 + 6 + 6 + 4. That is the distance around the patio, measured in meters, not the surface covered, measured in square meters.'
        },
        tip:'With an L shape, the two unlabeled sides are always differences of the labeled ones: opposite sides of the bounding rectangle must add up to the same total. Then either subtract the notch or split into two rectangles — and do it both ways as a free check.',
        desmos:'Evaluate 18*10-6*4 in Desmos: 156. Then check 12*10+6*6, which is also 156.',
        desmosLatex:['18\\cdot10-6\\cdot4','12\\cdot10+6\\cdot6']
      },
      {
        id:'GPD-12', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volume of a composite solid: prism plus pyramid',
        stem:'A monument is built as a single solid in two pieces. The lower piece is a rectangular prism with a square base 6 meters on each side and a height of 10 meters. The upper piece is a pyramid whose base is the top face of the prism and whose height is 9 meters. What is the total volume, in cubic meters, of the monument?',
        answer:'468',
        expCorrect:'Do the pieces separately. Prism: V = (base area)(height) = (6 · 6)(10) = 36 · 10 = 360 cubic meters. Pyramid: V = (1/3)(base area)(height) = (1/3)(36)(9) = (1/3)(324) = 108 cubic meters. Total = 360 + 108 = 468 cubic meters. (Check: the pyramid sits on the same 36 square meter base and is 9 tall, so it must be exactly one third of a 36 by 9 prism, which is 324 ÷ 3 = 108 ✓.)',
        tip:'Every pointed solid — pyramid or cone — carries a 1/3 that its flat-topped twin does not. Forgetting it here turns 108 into 324 and the total into 684, which is the single most common slip on composite solids.',
        desmos:'Evaluate 6*6*10 + (1/3)*6*6*9 in Desmos: 468.',
        desmosLatex:['6\\cdot6\\cdot10+\\frac{1}{3}\\cdot6\\cdot6\\cdot9']
      },
      {
        id:'GPD-13', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Scaling: from a surface area ratio back to a volume ratio',
        stem:'Two cubes are similar solids. The surface area of the larger cube is 9 times the surface area of the smaller cube. If the volume of the smaller cube is 40 cubic inches, what is the volume, in cubic inches, of the larger cube?',
        choices:{A:'120', B:'1,080', C:'360', D:'3,240'},
        correct:'B',
        expCorrect:'Work back to the scale factor k, the ratio of the edges. Surface areas scale by k², so k² = 9 and k = 3. Volumes scale by k³, so the volume ratio is 3³ = 27, and the larger volume is 40 · 27 = 1,080 cubic inches. (Check with real edges: a cube of volume 40 has edge 40^(1/3) ≈ 3.42; tripling it gives ≈ 10.26, and 10.26³ ≈ 1,080 ✓.)',
        expWrong:{
          A:'120 is 40 · 3, using the LINEAR factor on a volume. Multiplying every edge by 3 makes the solid 3 times as long, 3 times as wide and 3 times as tall, so the volume grows 27 times, not 3.',
          C:'360 is 40 · 9, applying the area ratio straight to the volume. The 9 already contains k² — it has to be unwrapped down to k = 3 before it can be re-raised to k³.',
          D:'3,240 is 40 · 81, which squares the 9 instead of taking its square root. That is k⁴, a ratio that no measurement of a solid has.'
        },
        tip:'Everything hangs on one number, k, the ratio of corresponding lengths: lengths scale by k, areas by k², volumes by k³. When the problem hands you an area or volume ratio, take the matching root to get k FIRST, then raise it to the power you actually need.',
        desmos:'In Desmos evaluate sqrt(9) to get k = 3, then 40*3^3: 1080.',
        desmosLatex:['\\sqrt{9}','40\\cdot3^3']
      },
      {
        id:'GPD-14', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Working backward from a volume, with a unit conversion',
        stem:'A fish tank is a rectangular box with a base that measures 60 centimeters by 40 centimeters. Filled to the very top, the tank holds 96 liters of water. Given that 1 liter equals 1,000 cubic centimeters, what is the height of the tank, in centimeters?',
        answer:'40',
        expCorrect:'Convert before dividing: 96 liters = 96 · 1,000 = 96,000 cubic centimeters. The base area is 60 · 40 = 2,400 square centimeters. Since V = (base area)(height), the height is 96,000 ÷ 2,400 = 40 centimeters. (Check forward: 60 · 40 · 40 = 96,000 cubic centimeters = 96 liters ✓.)',
        tip:'Make every measurement share one unit before any arithmetic happens. Here the sides are in centimeters, so the capacity has to become cubic centimeters — dividing 96 by 2,400 first gives 0.04 and no warning that anything went wrong.',
        desmos:'Evaluate 96*1000/(60*40) in Desmos: 40.',
        desmosLatex:['\\frac{96\\cdot1000}{60\\cdot40}']
      },

      /* ============ Geometry & Trigonometry — Lines, angles and triangles ============ */
      {
        id:'GPD-15', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Parallel lines cut by a transversal: alternate exterior angles',
        figure: FIG_TRANSVERSAL,
        stem:'In the figure, parallel lines p and q are cut by transversal t. The marked angle above line p and to the left of t measures (2x + 10)°, and the marked angle below line q and to the right of t measures 100°. What is the value of x?',
        choices:{A:'35', B:'50', C:'55', D:'45'},
        correct:'D',
        expCorrect:'Both marked angles are outside the pair of parallel lines and on opposite sides of the transversal, so they are alternate exterior angles — and those are EQUAL. So 2x + 10 = 100 → 2x = 90 → x = 45. (Check: 2(45) + 10 = 90 + 10 = 100 ✓.)',
        expWrong:{
          A:'35 solves 2x + 10 = 80, treating the pair as supplementary. Supplementary is what happens on the SAME side of the transversal; these two are on opposite sides, so they match.',
          B:'50 is 100 ÷ 2, which drops the + 10. Undo the addition before the multiplication: subtract 10 first, then divide by 2.',
          C:'55 comes from 2x = 110, adding the 10 instead of subtracting it. A + 10 on the left becomes − 10 when it crosses the equals sign.'
        },
        tip:'With parallel lines, every pair of angles is either equal or supplementary, and the side of the transversal decides which. Opposite sides (alternate) → equal. Same side → they add to 180°.',
        desmos:'Type 2x+10=100 into Desmos: it draws the vertical line x = 45.',
        desmosLatex:['2x+10=100']
      },
      {
        id:'GPD-16', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Isosceles triangle and the triangle angle sum',
        stem:'In triangle RST, side RS has the same length as side RT, and the measure of angle R is 44°. What is the measure, in degrees, of angle S?',
        choices:{A:'68', B:'44', C:'136', D:'22'},
        correct:'A',
        expCorrect:'Two sides are equal, so the angles opposite them are equal: angle S and angle T have the same measure, call it b. The three angles add to 180°, so 44 + b + b = 180 → 2b = 136 → b = 68. Angle S = 68°. (Check: 44 + 68 + 68 = 180 ✓.)',
        expWrong:{
          B:'44 copies the apex angle. Angle R is the one BETWEEN the two equal sides, so it is the odd one out; the two base angles are the pair that match each other.',
          C:'136 is 180 − 44, the total left over for the two base angles together. That total still has to be split between angle S and angle T.',
          D:'22 halves 44. The 44 is already a single angle, complete on its own; what gets halved is the 136 that remains after removing it.'
        },
        tip:'In an isosceles triangle, equal SIDES face equal ANGLES. Name the two matching angles b, write 180 = (given) + 2b, and solve — and check that the angle you report is the one the question named.',
        desmos:'Type 44+2b=180 into Desmos with b as the variable, or just evaluate (180-44)/2: 68.',
        desmosLatex:['\\frac{180-44}{2}']
      },
      {
        id:'GPD-17', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Similar triangles created by a parallel segment',
        figure: FIG_SIMILAR,
        stem:'In the figure, D lies on side AB and E lies on side AC of triangle ABC, and segment DE is parallel to side BC. If AD = 8, DB = 12 and BC = 30, what is the length of DE?',
        choices:{A:'15', B:'18', C:'12', D:'20'},
        correct:'C',
        expCorrect:'Because DE is parallel to BC, triangle ADE is similar to triangle ABC, and corresponding sides are in the ratio AD : AB. Watch the denominator: AB is the WHOLE side, AB = AD + DB = 8 + 12 = 20, so the ratio is 8/20 = 2/5. Then DE = (2/5)(30) = 12. (Check: DE and BC face the same angle at A, and 12/30 = 0.4 = 8/20 ✓.)',
        expWrong:{
          A:'15 is half of 30, which assumes D and E are midpoints. That would need AD = DB, but 8 and 12 are not equal.',
          B:'18 uses DB/AB = 12/20 = 3/5. That ratio belongs to the piece BELOW the parallel segment; DE matches the piece that shares vertex A, which is AD.',
          D:'20 uses AD/DB = 8/12 = 2/3. In similar triangles the ratio compares a side of the small triangle to the matching side of the big one, so it is part over WHOLE, not part over part.'
        },
        tip:'A segment parallel to one side cuts off a smaller similar triangle that shares the top vertex. Write the ratio as (small triangle side)/(big triangle side) and make sure the bottom is the entire side, not just the leftover piece.',
        desmos:'Evaluate (8/20)*30 in Desmos: 12. Compare with (12/20)*30, which is 18.',
        desmosLatex:['\\frac{8}{20}\\cdot30']
      },
      {
        id:'GPD-18', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Exterior angle of a triangle',
        figure: FIG_EXTERIOR,
        stem:'In the figure, side JK of triangle JKL is extended past K to point M, so that J, K and M lie on one straight line. The measure of angle J is 43° and the measure of the exterior angle LKM is 118°. What is the measure, in degrees, of angle L?',
        choices:{A:'19', B:'75', C:'62', D:'161'},
        correct:'B',
        expCorrect:'An exterior angle equals the SUM of the two remote interior angles — the two it does not touch, here angle J and angle L. So 118 = 43 + angle L → angle L = 118 − 43 = 75°. (Check the long way: the interior angle at K is 180 − 118 = 62°, and 43 + 62 + 75 = 180 ✓.)',
        expWrong:{
          A:'19 is 180 − 118 − 43, which treats 118 as an angle INSIDE the triangle. The 118° angle sits outside it, past K; the interior angle at K is its supplement, 62°.',
          C:'62 is the interior angle at K, the correct intermediate step. The question asks for angle L, which still needs 180 − 62 − 43.',
          D:'161 is 118 + 43. The exterior angle already equals the sum of the two remote angles, so the remaining one is found by SUBTRACTING, not by adding again.'
        },
        tip:'Exterior angle = the two remote interior angles added. It is just the angle sum rearranged, so either route works — but the shortcut skips a step and skips a chance to make a sign mistake.',
        desmos:'Evaluate 118-43 in Desmos: 75. Then check 43+(180-118)+75, which gives 180.',
        desmosLatex:['118-43']
      },

      /* ============ Problem-Solving & Data Analysis — Ratios, rates and units ============ */
      {
        id:'GPD-19', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Chained unit conversion from a constant rate',
        stem:'A storage tank leaks at a constant rate of 3 milliliters every 4 seconds. At this rate, how many liters leak from the tank in 2 hours? (1 liter = 1,000 milliliters.)',
        choices:{A:'0.09', B:'5,400', C:'9.6', D:'5.4'},
        correct:'D',
        expCorrect:'Chain the conversions in order. Time: 2 hours = 2 · 60 · 60 = 7,200 seconds. Amount: 7,200 ÷ 4 = 1,800 four-second intervals, and 1,800 · 3 = 5,400 milliliters. Volume: 5,400 ÷ 1,000 = 5.4 liters. (Check by rate: 3/4 = 0.75 mL per second, and 0.75 · 7,200 = 5,400 mL ✓.)',
        expWrong:{
          A:'0.09 uses 120 instead of 7,200, that is, minutes where the rate is stated per SECOND. Both quantities in a rate have to be in the same unit before you multiply.',
          B:'5,400 is the correct amount, but in milliliters. The last conversion, dividing by 1,000, is still missing.',
          C:'9.6 flips the rate to 4 milliliters every 3 seconds. Keep the rate as a fraction with its units written out — 3 mL / 4 s — and the flip becomes visible.'
        },
        tip:'Write each conversion as a fraction equal to 1 and line them up so the units you do not want cancel diagonally. Then do one multiplication at the end — one chain instead of three separate calculations, each with its own chance to invert.',
        desmos:'Evaluate 3/4*7200/1000 in Desmos: 5.4.',
        desmosLatex:['\\frac{3}{4}\\cdot\\frac{7200}{1000}']
      },
      {
        id:'GPD-20', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Density as a rate: from volume to mass, with a unit change',
        stem:'A bar of an alloy has a density of 7.8 grams per cubic centimeter. The bar is a rectangular box measuring 12 centimeters by 5 centimeters by 2 centimeters. What is the mass of the bar, in kilograms? (1 kilogram = 1,000 grams.)',
        choices:{A:'0.936', B:'0.468', C:'9.36', D:'936'},
        correct:'A',
        expCorrect:'Density is mass per unit of volume, so mass = density × volume. Volume = 12 · 5 · 2 = 120 cubic centimeters. Mass = 7.8 · 120 = 936 grams. Convert: 936 ÷ 1,000 = 0.936 kilograms. (Check backward: 0.936 kg = 936 g, and 936 ÷ 120 = 7.8 grams per cubic centimeter ✓.)',
        expWrong:{
          B:'0.468 uses 12 · 5 = 60 cubic centimeters, only two of the three measurements. A box has three dimensions, and all three multiply into the volume.',
          C:'9.36 divides by 100 rather than by 1,000. A kilogram is a thousand grams; a hundred would be a hectogram, which is not what the question asks for.',
          D:'936 is the mass in GRAMS, the correct intermediate value. One more step converts it to the kilograms the question asks for.'
        },
        tip:'Read density as the fraction it is — grams per cubic centimeter — and the operation follows: multiply by a volume and the cubic centimeters cancel, leaving grams. Convert units only at the very end, when you know which unit you are holding.',
        desmos:'Evaluate 7.8*12*5*2/1000 in Desmos: 0.936.',
        desmosLatex:['\\frac{7.8\\cdot12\\cdot5\\cdot2}{1000}']
      },
      {
        id:'GPD-21', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Speed as a rate',
        stem:'A cyclist covers 39 kilometers in 1 hour and 30 minutes, riding at a constant speed. What is the speed of the cyclist, in kilometers per hour?',
        choices:{A:'0.43', B:'58.5', C:'26', D:'39'},
        correct:'C',
        expCorrect:'Speed is distance divided by time, with the time in the unit the answer calls for. 1 hour 30 minutes = 1.5 hours, so the speed is 39 ÷ 1.5 = 26 kilometers per hour. (Check: 26 · 1.5 = 39 ✓.)',
        expWrong:{
          A:'0.43 is 39 ÷ 90, which gives kilometers per MINUTE. The question asks per hour, so the time has to be 1.5 hours, not 90 minutes.',
          B:'58.5 is 39 · 1.5, multiplying when the definition calls for dividing. Multiplying makes the speed larger than the distance covered in more than an hour, which cannot happen.',
          D:'39 ignores the extra 30 minutes, as if the whole ride took exactly 1 hour. Since the ride took longer than an hour, the speed must be less than 39.'
        },
        tip:'Convert the time into the unit named in the answer BEFORE dividing, and then check the direction: more time for the same distance means a smaller speed. That single sanity check catches the multiply-instead-of-divide slip.',
        desmos:'Evaluate 39/1.5 in Desmos: 26.',
        desmosLatex:['\\frac{39}{1.5}']
      },
      {
        id:'GPD-22', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Scale drawing to actual measurements',
        stem:'On a scale drawing of a park, 1 centimeter represents 8 meters. A rectangular soccer field appears on the drawing as 12.5 centimeters long and 6 centimeters wide. What is the perimeter, in meters, of the actual field?',
        answer:'296',
        expCorrect:'Scale up each side separately, then add. Length: 12.5 · 8 = 100 meters. Width: 6 · 8 = 48 meters. Perimeter: 2(100 + 48) = 2(148) = 296 meters. (Check by scaling the perimeter instead: on the drawing it is 2(12.5 + 6) = 37 centimeters, and 37 · 8 = 296 ✓ — perimeter is a length, so it scales by the same factor as the sides.)',
        tip:'A scale factor applies to every LENGTH once: sides, diagonals and perimeters all multiply by 8 here. Areas would multiply by 8² = 64 instead, which is the trap when the question switches from perimeter to area.',
        desmos:'Evaluate 2*(12.5*8+6*8) in Desmos: 296.',
        desmosLatex:['2\\left(12.5\\cdot8+6\\cdot8\\right)']
      },

      /* ================= Problem-Solving & Data Analysis — Percentages ================= */
      {
        id:'GPD-23', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Two successive percent changes, worked backward',
        stem:'The price of a desk lamp was increased by 30%. The increased price was later discounted by 15% for a sale, and the sale price is $88.40. What was the price of the lamp before the increase?',
        choices:{A:'$76.87', B:'$80.00', C:'$97.68', D:'$104.00'},
        correct:'B',
        expCorrect:'Write each change as a multiplier and chain them: an increase of 30% multiplies by 1.30, and a discount of 15% multiplies by 0.85. So (original)(1.30)(0.85) = 88.40, that is (original)(1.105) = 88.40, giving original = 88.40 ÷ 1.105 = $80.00. (Check forward: 80 · 1.30 = 104.00, and 104.00 · 0.85 = $88.40 ✓.)',
        expWrong:{
          A:'$76.87 is 88.40 ÷ 1.15, treating the two changes as a single 30 − 15 = 15% increase. Percent changes do not add, because the 15% is taken off a LARGER price than the one the 30% was added to.',
          C:'$97.68 is 88.40 · 1.105, multiplying by the combined factor instead of dividing by it. Going backward from the final price always undoes the multiplication.',
          D:'$104.00 is 88.40 ÷ 0.85, which correctly undoes the discount and then stops. That is the increased price; one more division, by 1.30, returns to the original.'
        },
        tip:'Turn every percent change into a multiplier (+30% → 1.30, −15% → 0.85) and multiply them in order. Finding the final price means multiplying; finding the original price means dividing by the same product — and the two changes never combine by adding.',
        desmos:'Evaluate 88.40/(1.30*0.85) in Desmos: 80. Then 80*1.30*0.85 returns 88.40.',
        desmosLatex:['\\frac{88.40}{1.30\\cdot0.85}','80\\cdot1.30\\cdot0.85']
      },
      {
        id:'GPD-24', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Percent increase between two amounts',
        stem:'A recycling program collected 4,500 kilograms of glass in March and 5,400 kilograms of glass in April. By what percent did the amount of glass collected increase from March to April?',
        choices:{A:'16.7%', B:'83.3%', C:'120%', D:'20%'},
        correct:'D',
        expCorrect:'Percent change = (change)/(original) · 100, and the original is the earlier amount, March. Change = 5,400 − 4,500 = 900. So the increase is 900/4,500 = 0.2 = 20%. (Check: 20% of 4,500 is 900, and 4,500 + 900 = 5,400 ✓.)',
        expWrong:{
          A:'16.7% divides by the NEW amount: 900/5,400. The denominator of a percent change is always the starting value, because that is what the change is being compared to.',
          B:'83.3% is 4,500/5,400, which says March was about 83% of April. That is a comparison of the two totals, not the size of the growth.',
          C:'120% is 5,400/4,500, the new amount as a percent OF the old. April is 120% of March, which means it grew by the extra 20%, not by 120%.'
        },
        tip:'Percent change compares the CHANGE to the starting value, never to the finishing one. If your answer is over 100%, ask whether the quantity really more than doubled — usually you have computed new/old and forgotten to subtract the original 100%.',
        desmos:'Evaluate (5400-4500)/4500*100 in Desmos: 20.',
        desmosLatex:['\\frac{5400-4500}{4500}\\cdot100']
      },
      {
        id:'GPD-25', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'A percent of a percent',
        stem:'At a language school, 60% of the students study French. Of the students who study French, 45% also study Italian. What percent of all the students at the school study both French and Italian?',
        choices:{A:'27%', B:'15%', C:'75%', D:'105%'},
        correct:'A',
        expCorrect:'The 45% is taken out of the French group, not out of the whole school, so multiply the two fractions: 0.60 · 0.45 = 0.27 = 27%. (Check with 200 students: 60% of 200 = 120 study French, and 45% of those 120 = 54 study both. Then 54/200 = 0.27 = 27% ✓.)',
        expWrong:{
          B:'15% subtracts 45 from 60. Subtraction would answer a different question — students who study French but NOT Italian is 55% of the 120, which is 33% of the school, not 15%.',
          C:'75% is 45/60, which divides one percent by the other. That would be the answer if 45% were already a percent of the whole school and you wanted its share of the French group.',
          D:'105% adds the two percentages. Nothing can be more than 100% of the school, so a total above 100 is an immediate signal that the operation is wrong.'
        },
        tip:'Ask what each percent is a percent OF. When the second one is taken from the group the first one describes, you multiply the decimals. Testing it on 100 or 200 imaginary students turns the whole thing into counting.',
        desmos:'Evaluate 0.60*0.45 in Desmos: 0.27, which is 27%.',
        desmosLatex:['0.60\\cdot0.45']
      },
      {
        id:'GPD-26', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Simple interest earned over several years',
        stem:'Diego deposits $2,500 into an account that earns simple interest at an annual rate of 4% of the initial deposit. He makes no other deposits and no withdrawals. How much interest, in dollars, will the account have earned after 3 years?',
        answer:'300',
        expCorrect:'Simple interest is computed on the original deposit every year, so the yearly interest is 2,500 · 0.04 = $100. Over 3 years that is 100 · 3 = $300. (Check with the formula I = Prt: 2,500 · 0.04 · 3 = $300 ✓. The balance is 2,500 + 300 = $2,800, but the question asks for the interest alone.)',
        tip:'Simple interest uses the ORIGINAL principal every period: I = Prt. Compound interest instead multiplies by (1 + r) each period, which here would give $312.16 — read which word the question uses, and check whether it wants the interest or the final balance.',
        desmos:'Evaluate 2500*0.04*3 in Desmos: 300. Compare with 2500*1.04^3-2500, about 312.16, which is what compounding would give.',
        desmosLatex:['2500\\cdot0.04\\cdot3']
      },

      /* ================ Problem-Solving & Data Analysis — One-variable data ================ */
      {
        id:'GPD-27', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Mean, median, mode and range of a list',
        stem:'A team scored the following numbers of goals in its 7 games: 3, 6, 6, 9, 11, 14, 21. Which of the following has the greatest value for this list of 7 numbers?',
        choices:{A:'The mean', B:'The median', C:'The range', D:'The mode'},
        correct:'C',
        expCorrect:'Compute all four. Mean: (3 + 6 + 6 + 9 + 11 + 14 + 21)/7 = 70/7 = 10. Median: the list is already in order and has 7 values, so the middle one is the 4th, which is 9. Mode: 6, the only repeated value. Range: 21 − 3 = 18. The greatest of 10, 9, 18 and 6 is the range, 18. (Check: the range is a spread and the other three are centers, so with one value as far out as 21 the range winning is exactly what you would expect.)',
        expWrong:{
          A:'The mean is 70/7 = 10. The single high value of 21 pulls it above the median, but it is still far below the 18-point spread.',
          B:'The median is 9, the 4th of the 7 ordered values. Half the games are above it and half below, so it lands in the middle of the data, not at an extreme.',
          D:'The mode is 6, the value that appears twice. The mode reports the most FREQUENT value, and here that value happens to be one of the smallest.'
        },
        tip:'Order the list once, then read off all four: mean is the total divided by the count, median is the middle position, mode is the repeat, range is largest minus smallest. Three of them describe the center; the range is the only one describing the spread.',
        desmos:'In Desmos, type L=[3,6,6,9,11,14,21] and then mean(L), median(L) and max(L)-min(L): 10, 9 and 18.',
        desmosLatex:['L=\\left[3,6,6,9,11,14,21\\right]','\\operatorname{mean}(L)','\\operatorname{median}(L)']
      },
      {
        id:'GPD-28', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Comparing standard deviations without computing them',
        stem:'Data set P is 12, 14, 16, 18, 20. Data set Q is 4, 10, 16, 22, 28. Both data sets have 5 values and both have a mean of 16. Which of the following correctly identifies the data set with the greater standard deviation, together with a correct reason?',
        choices:{
          A:'Set P, because its values sit closer together.',
          B:'Set Q, because its values sit farther from 16.',
          C:'They are equal, because both sets have the same mean.',
          D:'They are equal, because both sets are evenly spaced.'
        },
        correct:'B',
        expCorrect:'Standard deviation measures typical distance from the mean, so compare those distances. In P the gaps from 16 are 4, 2, 0, 2, 4. In Q they are 12, 6, 0, 6, 12 — exactly three times as large, one for one. Every value of Q is farther from the mean than the matching value of P, so Q has the greater standard deviation. (Check: the standard deviations really are about 2.83 and 8.49, and 8.49 is three times 2.83 ✓.)',
        expWrong:{
          A:'Set P is the more tightly packed of the two, and tighter packing means a SMALLER standard deviation, not a greater one. The reason given is true about P but points the wrong way.',
          C:'Equal means say nothing about spread. That is the whole point of standard deviation: two sets can share a center and still be shaped completely differently, as these two are.',
          D:'Both sets are evenly spaced, but the spacing is 2 in P and 6 in Q. Even spacing describes the pattern; the SIZE of the step is what decides the spread.'
        },
        tip:'You are never asked to calculate a standard deviation on this test — only to compare them. Look at how far the values sit from the center: wider spread means a bigger standard deviation, and the mean by itself tells you nothing about it.',
        desmos:'In Desmos, type stdev([12,14,16,18,20]) and stdev([4,10,16,22,28]): about 2.83 and 6.32 for the sample version, or use stdevp for about 2.83 and 8.49. Either way Q is larger.',
        desmosLatex:['\\operatorname{stdevp}\\left(\\left[12,14,16,18,20\\right]\\right)','\\operatorname{stdevp}\\left(\\left[4,10,16,22,28\\right]\\right)']
      },
      {
        id:'GPD-29', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'How adding one value moves the mean',
        stem:'A data set of 9 numbers has a mean of 22. A tenth number is added to the data set, and the mean of the 10 numbers is 25. What is the value of the number that was added?',
        choices:{A:'3', B:'25', C:'47', D:'52'},
        correct:'D',
        expCorrect:'Work with totals, not means. The 9 numbers total 9 · 22 = 198. The 10 numbers total 10 · 25 = 250. The new number is the difference: 250 − 198 = 52. (Check: (198 + 52)/10 = 250/10 = 25 ✓.)',
        expWrong:{
          A:'3 is the change in the mean, 25 − 22. That is how far the average moved, but the new value has to both sit at the new level and drag the other nine up with it, so it is much larger than 3.',
          B:'25 is the new mean. Adding a value exactly equal to the new mean would leave the mean unchanged at 22, not raise it.',
          C:'47 is 22 + 25, adding the two means. Means are averages, not totals; adding them together does not correspond to anything in the data.'
        },
        tip:'Whenever a mean changes, convert to sums immediately: sum = mean × count. Almost every question about adding, removing or replacing a value becomes simple subtraction once both totals are written down.',
        desmos:'Evaluate 10*25-9*22 in Desmos: 52.',
        desmosLatex:['10\\cdot25-9\\cdot22']
      },
      {
        id:'GPD-30', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Weighted mean of two groups of different sizes',
        stem:'In one chemistry section, 18 students took a test and their scores had a mean of 74. In a second section, 12 students took the same test and their scores had a mean of 84. What is the mean score of all 30 students?',
        answer:'78',
        expCorrect:'Rebuild the totals, then divide once. First section: 18 · 74 = 1,332 points. Second section: 12 · 84 = 1,008 points. Combined: (1,332 + 1,008)/30 = 2,340/30 = 78. (Check: 78 is closer to 74 than to 84, which is right because the 74 group is the bigger one ✓.)',
        tip:'Averaging two averages only works when the groups are the same size. Here the plain average of 74 and 84 is 79, which is wrong by a full point because the larger group pulls the result toward its own mean. Always go back to sum = mean × count.',
        desmos:'Evaluate (18*74+12*84)/30 in Desmos: 78. Compare with (74+84)/2, which gives 79.',
        desmosLatex:['\\frac{18\\cdot74+12\\cdot84}{30}']
      },
      {
        id:'GPD-31', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Reading a histogram to find the median',
        figure: FIG_HISTOGRAM,
        stem:'The histogram shows the number of pets owned by each of 25 households on one street. What is the median number of pets owned by these 25 households?',
        choices:{A:'1', B:'1.44', C:'2', D:'9'},
        correct:'A',
        expCorrect:'With 25 values, the median is the 13th one once they are in order. Count up through the bars: the 0-pet bar covers households 1 through 5, and the 1-pet bar covers households 6 through 14. The 13th household falls inside that second bar, so the median is 1 pet. (Check: 12 households own 0 or 1 pet below the 13th, and 12 own 1 or more above it, so the 13th value sits exactly in the middle ✓.)',
        expWrong:{
          B:'1.44 is the MEAN: (0·5 + 1·9 + 2·7 + 3·3 + 4·1)/25 = 36/25. The mean is pulled up by the households with 3 and 4 pets; the median is not.',
          C:'2 is the middle CATEGORY on the horizontal axis, the third of the five bars. The median depends on how many households are in each bar, not on which bar sits in the middle of the picture.',
          D:'9 is the height of the tallest bar, which is a count of households, not a number of pets. The bar heights are frequencies; the values being measured are on the horizontal axis.'
        },
        tip:'From a histogram, find the median by running a cumulative count until you pass position (n + 1)/2. The bar you land in gives the answer — and remember the answer is a value from the horizontal axis, never a bar height.',
        desmos:'In Desmos, type L=[0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,4] and then median(L) and mean(L): 1 and 1.44.',
        desmosLatex:['\\operatorname{median}\\left(\\left[0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,4\\right]\\right)']
      },

      /* ======= Problem-Solving & Data Analysis — Probability and conditional probability ======= */
      {
        id:'GPD-32', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Probability from a two-way table',
        figure: TBL_CENTER,
        stem:'The table shows how the 240 people enrolled in a fitness program at a community center are distributed by class time and by how they get to the center. If one of the 240 people is selected at random, what is the probability that the person walks to the center?',
        choices:{A:'0.225', B:'0.47', C:'0.375', D:'0.625'},
        correct:'C',
        expCorrect:'The event is "walks", with no other condition, so the denominator is everybody: 240. The number who walk is the column total, 54 + 36 = 90. So the probability is 90/240 = 0.375. (Check: the other column gives 150/240 = 0.625, and 0.375 + 0.625 = 1 ✓.)',
        expWrong:{
          A:'0.225 is 54/240, only the morning walkers. The event does not mention a class time, so both rows of the walking column count.',
          B:'0.47 is 54/114, the probability that someone walks GIVEN that they are in the morning class. The question puts no condition on the selection, so the denominator stays at 240.',
          D:'0.625 is 150/240, the probability of driving. That is the complement of what was asked.'
        },
        tip:'In a two-way table, every probability is one number over another number that is already printed in the table. Decide the denominator first: no condition means the grand total, a stated condition means that row or column total.',
        desmos:'Evaluate 90/240 in Desmos: 0.375.',
        desmosLatex:['\\frac{90}{240}']
      },
      {
        id:'GPD-33', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Conditional probability read in both directions',
        figure: TBL_CENTER,
        stem:'Using the same table of 240 people, let p be the probability that a person attends the evening class given that the person drives to the center, and let q be the probability that a person drives to the center given that the person attends the evening class. What is the value of p − q, rounded to the nearest hundredth?',
        choices:{A:'0', B:'−0.11', C:'0.11', D:'1.31'},
        correct:'B',
        expCorrect:'Each condition sets its own denominator. For p, the condition is "drives", so the denominator is the drives total, 150, and the numerator is the evening drivers, 90: p = 90/150 = 0.60. For q, the condition is "evening class", so the denominator is the evening total, 126, with the same numerator 90: q = 90/126 ≈ 0.7143. Then p − q ≈ 0.60 − 0.71 = −0.11. (Check: both fractions share the numerator 90, and a smaller denominator gives a bigger fraction, so q must be the larger one and the difference must be negative ✓.)',
        expWrong:{
          A:'0 says the two conditional probabilities are equal. Swapping the condition swaps the denominator — 150 becomes 126 — so the two are equal only in the rare case when the two totals happen to match.',
          C:'0.11 is q − p, the subtraction in the other order. The question names p first, and since p is the smaller of the two the result has to come out negative.',
          D:'1.31 is p + q. Adding two conditional probabilities that live in different denominators produces a number with no meaning; only complements within the SAME condition add to 1.'
        },
        tip:'"The probability of A given B" always puts B total on the bottom. Write the condition down before the numerator, and remember that reversing the two is a genuinely different number — the shared numerator is what makes the reversal tempting.',
        desmos:'Evaluate 90/150-90/126 in Desmos: about −0.114, which rounds to −0.11.',
        desmosLatex:['\\frac{90}{150}-\\frac{90}{126}']
      },
      {
        id:'GPD-34', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Probability of a complement',
        stem:'A bag contains only red, blue and green marbles. If one marble is drawn from the bag at random, the probability that it is red is 0.35 and the probability that it is blue is 0.28. What is the probability that the marble drawn is NOT green?',
        choices:{A:'0.37', B:'0.65', C:'0.72', D:'0.63'},
        correct:'D',
        expCorrect:'Only three colors exist, so "not green" means red or blue. Those two cannot happen at once, so add: 0.35 + 0.28 = 0.63. (Check with the complement: P(green) = 1 − 0.63 = 0.37, and 0.35 + 0.28 + 0.37 = 1 ✓.)',
        expWrong:{
          A:'0.37 is the probability that the marble IS green. It is the complement of the answer, so it is the number you would subtract from 1 rather than report.',
          B:'0.65 is 1 − 0.35, the probability of "not red". Subtracting the wrong single color answers a question about red instead of green.',
          C:'0.72 is 1 − 0.28, the probability of "not blue". Same slip, with the other given value.'
        },
        tip:'With a fixed list of outcomes, all the probabilities add to 1, so "not X" can be found two ways: add every other outcome, or subtract P(X) from 1. Do it both ways when you can — the two answers must agree.',
        desmos:'Evaluate 0.35+0.28 in Desmos: 0.63. Then 1-0.63 gives 0.37, the probability of green.',
        desmosLatex:['0.35+0.28','1-0.63']
      }
    ]
  });
})();
