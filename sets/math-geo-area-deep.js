/* SAT Studio question set — Math: Geometry & Trigonometry · Area and volume (AVX-01 a AVX-22) */
(function(){
  /* El prefijo pedido en el encargo era AVD-, pero ya lo usa sets/math-adv-d.js.
     Se usa AVX-, que estaba libre en todo el banco.

     OJO con skillOf(): dentro de Geometry prueba Circles → Right triangles →
     Area and volume → Lines, angles and triangles sobre `skill` + los primeros
     160 caracteres del `stem`, y gana el PRIMERO que calza. "Area and volume"
     va TERCERA, así que en esos 160 caracteres no puede aparecer ni una palabra
     de las dos destrezas que se le adelantan:
       · Circles: circle, circumference, arc, sector, radius, radii, diameter,
         central angle, tangent line. Por eso ningún sólido redondo dice su
         radio ahí: dice cuánto mide "across".
       · Right triangles: right triangle, pythagor, sohcahtoa, sine, cosine,
         tangent, hypotenuse, 30-60-90, 45-45-90, complementary angle, leg.
         La diagonal de la base (AVX-12) y la altura inclinada se resuelven con
         Pitágoras, pero eso se nombra en la explicación, no en el arranque.
     El `figure` NO entra en skillOf (solo skill + stem), así que en los
     aria-label se puede decir "circle" sin problema.

     OJO con el detector de español: "triangular" cae en el patrón triangul\w*.
     Acá se dice "in the shape of a triangle". */

  var NOTA = '<text x="12" y="YY" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>';

  var FIG_TRAP =
    '<svg viewBox="0 0 250 186" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A shaded trapezoid. Its bottom side is horizontal and measures 9 feet. Its top side is horizontal and parallel to the bottom, and measures 5 feet. A dashed segment runs straight up from the bottom side to the top side and is labeled 4 feet; a small square shows that this segment meets the bottom side at a right angle.">' +
    '<polygon points="40,138 210,138 180,58 85,58" fill="#EDEAE3" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="120" y1="58" x2="120" y2="138" stroke="#324DC7" stroke-width="2" stroke-dasharray="6 4"/>' +
    '<polygon points="120,130 128,130 128,138 120,138" fill="none" stroke="#1e1e1e" stroke-width="1.4"/>' +
    '<g font-family="Georgia,serif" font-size="14" stroke="#ffffff" stroke-width="3.5" paint-order="stroke">' +
    '<text x="125" y="156" text-anchor="middle">9</text>' +
    '<text x="132" y="50" text-anchor="middle">5</text>' +
    '<text x="129" y="103" fill="#324DC7">4</text></g>' +
    NOTA.replace('YY', '180') + '</svg>';

  var FIG_PIPE =
    '<svg viewBox="0 0 310 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="On the left, the flat end of a pipe seen straight on: two circles that share the same center, with the ring between them shaded to show the metal. A dimension line above shows that the outer circle measures 10 centimeters across, and a segment through the middle shows that the hollow channel measures 6 centimeters across. On the right, the same pipe seen from the side as a long rectangle with the hollow channel drawn dashed through the middle, and a dimension line below showing that the pipe is 50 centimeters long.">' +
    '<circle cx="75" cy="102" r="52" fill="#EDEAE3" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="75" cy="102" r="31" fill="#ffffff" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="23" y1="38" x2="127" y2="38" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="23" y1="32" x2="23" y2="44" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="127" y1="32" x2="127" y2="44" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="44" y1="102" x2="106" y2="102" stroke="#324DC7" stroke-width="1.8"/>' +
    '<rect x="175" y="62" width="115" height="80" fill="#EDEAE3" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="175" y1="88" x2="290" y2="88" stroke="#1e1e1e" stroke-width="1.6" stroke-dasharray="6 4"/>' +
    '<line x1="175" y1="116" x2="290" y2="116" stroke="#1e1e1e" stroke-width="1.6" stroke-dasharray="6 4"/>' +
    '<line x1="175" y1="162" x2="290" y2="162" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="175" y1="156" x2="175" y2="168" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="290" y1="156" x2="290" y2="168" stroke="#324DC7" stroke-width="1.8"/>' +
    '<g font-family="Georgia,serif" font-size="14" stroke="#ffffff" stroke-width="3.5" paint-order="stroke">' +
    '<text x="75" y="30" text-anchor="middle">10</text>' +
    '<text x="75" y="120" text-anchor="middle">6</text>' +
    '<text x="232" y="182" text-anchor="middle">50</text></g>' +
    NOTA.replace('YY', '194') + '</svg>';

  var FIG_CUBES =
    '<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two cubes of the same size drawn in three dimensions, pushed together side by side so that one whole face of each cube is pressed flat against the other. Every edge measures 5 inches. The face where the two cubes meet is drawn with a dashed line, because it is now inside the solid and cannot be seen.">' +
    '<polygon points="40,70 110,70 140,40 70,40" fill="#EDEAE3" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<polygon points="110,70 180,70 210,40 140,40" fill="#EDEAE3" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<polygon points="180,70 210,40 210,110 180,140" fill="#EDEAE3" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<rect x="40" y="70" width="70" height="70" fill="#ffffff" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<rect x="110" y="70" width="70" height="70" fill="#ffffff" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<polygon points="110,70 140,40 140,110 110,140" fill="none" stroke="#324DC7" stroke-width="2.2" stroke-dasharray="6 4"/>' +
    '<g font-family="Georgia,serif" font-size="14" stroke="#ffffff" stroke-width="3.5" paint-order="stroke">' +
    '<text x="75" y="158" text-anchor="middle">5</text>' +
    '<text x="145" y="158" text-anchor="middle">5</text>' +
    '<text x="30" y="110" text-anchor="middle">5</text>' +
    '<text x="200" y="130" text-anchor="middle">5</text></g>' +
    NOTA.replace('YY', '174') + '</svg>';

  var FIG_CUT =
    '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A box drawn in three dimensions. The front bottom edge measures 8 inches, the box is 6 inches deep from front to back, and it is 5 inches tall. A straight vertical cut runs from the front left bottom corner to the back right bottom corner and rises all the way to the top of the box. The flat face that this cut exposes is shaded.">' +
    '<polygon points="55,150 215,150 270,110 110,110" fill="none" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<polygon points="55,75 215,75 270,35 110,35" fill="none" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<line x1="55" y1="150" x2="55" y2="75" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<line x1="215" y1="150" x2="215" y2="75" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<line x1="270" y1="110" x2="270" y2="35" stroke="#1e1e1e" stroke-width="2.2"/>' +
    '<line x1="110" y1="110" x2="110" y2="35" stroke="#1e1e1e" stroke-width="1.6" stroke-dasharray="6 4"/>' +
    '<polygon points="55,150 270,110 270,35 55,75" fill="#EDEAE3" fill-opacity="0.85" stroke="#324DC7" stroke-width="2.4"/>' +
    '<g font-family="Georgia,serif" font-size="14" stroke="#ffffff" stroke-width="3.5" paint-order="stroke">' +
    '<text x="135" y="170" text-anchor="middle">8</text>' +
    '<text x="250" y="142" text-anchor="middle">6</text>' +
    '<text x="42" y="118" text-anchor="middle">5</text></g>' +
    NOTA.replace('YY', '194') + '</svg>';

  var FIG_CONECUT =
    '<svg viewBox="0 0 250 212" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cone standing with its point up. Its base measures 12 inches across and the whole cone is 12 inches tall. A dashed horizontal cut is drawn halfway up, 6 inches above the base, and the small cone above that cut is the piece that is taken away. A dimension line on the right is split into two pieces of 6 inches each, one above the cut and one below it.">' +
    '<path d="M115,30 L45,160 A70,16 0 0 0 185,160 Z" fill="#EDEAE3" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<path d="M45,160 A70,16 0 0 1 185,160" fill="none" stroke="#1e1e1e" stroke-width="1.6" stroke-dasharray="5 4"/>' +
    '<ellipse cx="115" cy="95" rx="35" ry="8" fill="none" stroke="#324DC7" stroke-width="2.2" stroke-dasharray="6 4"/>' +
    '<line x1="205" y1="30" x2="205" y2="160" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="199" y1="30" x2="211" y2="30" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="199" y1="95" x2="211" y2="95" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="199" y1="160" x2="211" y2="160" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="45" y1="182" x2="185" y2="182" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="45" y1="176" x2="45" y2="188" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="185" y1="176" x2="185" y2="188" stroke="#324DC7" stroke-width="1.8"/>' +
    '<g font-family="Georgia,serif" font-size="14" stroke="#ffffff" stroke-width="3.5" paint-order="stroke">' +
    '<text x="222" y="67">6</text><text x="222" y="132">6</text>' +
    '<text x="115" y="176" text-anchor="middle">12</text></g>' +
    NOTA.replace('YY', '206') + '</svg>';

  var FIG_SILO =
    '<svg viewBox="0 0 240 214" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A grain silo standing on the ground. The body is a cylinder 8 meters across and 15 meters tall. On top of it sits a dome shaped like half of a sphere. The flat face of the dome rests exactly on the open top of the cylinder and is drawn as a dashed line, because it is inside the silo. The bottom of the cylinder sits flat on the ground line.">' +
    '<path d="M70,70 A50,50 0 0 1 170,70 Z" fill="#EDEAE3" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="70" y="70" width="100" height="110" fill="#EDEAE3" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="70" y1="70" x2="170" y2="70" stroke="#324DC7" stroke-width="2.2" stroke-dasharray="6 4"/>' +
    '<line x1="35" y1="180" x2="205" y2="180" stroke="#1e1e1e" stroke-width="3.5"/>' +
    '<line x1="70" y1="164" x2="170" y2="164" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="70" y1="158" x2="70" y2="170" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="170" y1="158" x2="170" y2="170" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="186" y1="70" x2="186" y2="180" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="180" y1="70" x2="192" y2="70" stroke="#324DC7" stroke-width="1.8"/>' +
    '<line x1="180" y1="180" x2="192" y2="180" stroke="#324DC7" stroke-width="1.8"/>' +
    '<g font-family="Georgia,serif" font-size="14" stroke="#ffffff" stroke-width="3.5" paint-order="stroke">' +
    '<text x="120" y="158" text-anchor="middle">8</text>' +
    '<text x="199" y="130">15</text></g>' +
    NOTA.replace('YY', '208') + '</svg>';

  window.SAT_SETS.push({
    id: 'math-geo-area-deep',
    title: 'Area & Volume — Warm-up to Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'One ramp through the whole skill: a single formula at the start, then the scaling laws, solids that are melted and recast, hollow and composite bodies, flat slices, a cone with its top cut off, and conversions that get raised to a power.',
    minutes: 30,
    questions: [

      /* ================= Warm-up ================= */
      {
        id:'AVX-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Area of a trapezoid-shaped countertop',
        figure: FIG_TRAP,
        stem:'A countertop is in the shape of a trapezoid. Its two parallel edges measure 9 feet and 5 feet, and the distance between those two parallel edges is 4 feet. What is the area of the countertop, in square feet?',
        choices:{A:'28', B:'56', C:'20', D:'36'},
        correct:'A',
        expCorrect:'Average the two parallel edges and multiply by the distance between them: (9 + 5)/2 = 7, and 7 × 4 = 28 square feet. (Check: the trapezoid is a 5-by-4 rectangle, 20, plus a piece in the shape of a triangle with base 9 − 5 = 4 and height 4, which is 8. 20 + 8 = 28 ✓.)',
        expWrong:{
          B:'56 is (9 + 5) × 4 with the division by 2 left out. The formula averages the two parallel edges; it does not add them.',
          C:'20 is 5 × 4, treating the shape as a rectangle built on the short edge alone. The long edge is part of the shape too.',
          D:'36 is 9 × 4, the same mistake built on the long edge. The true area lands between 20 and 36, which is exactly what averaging gives.'
        },
        tip:'Area of a trapezoid = (the two parallel sides averaged) × (the distance between them). The slanted sides never enter the formula, and the height is the perpendicular distance, not the length of a slanted side.',
        desmos:'Evaluate (9+5)/2*4 in Desmos: 28.',
        desmosLatex:['\\frac{9+5}{2}\\cdot4']
      },
      {
        id:'AVX-02', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Surface area of a rectangular box',
        stem:'A gift box is a rectangular solid measuring 8 inches long, 5 inches wide, and 3 inches tall. What is the total surface area of the box, in square inches?',
        answer:'158',
        expCorrect:'The box has three pairs of matching faces: 8 × 5 = 40, 8 × 3 = 24, and 5 × 3 = 15. Add one of each and double: 40 + 24 + 15 = 79, and 2 × 79 = 158 square inches. (Check by listing all six: 40 + 40 + 24 + 24 + 15 + 15 = 158 ✓.)',
        tip:'Surface area of a box = 2(lw + lh + wh). Every face has a twin on the opposite side, so find three faces and double. Volume multiplies all three numbers; surface area multiplies them two at a time.',
        desmos:'Evaluate 2*(8*5+8*3+5*3) in Desmos: 158.',
        desmosLatex:['2\\left(8\\cdot5+8\\cdot3+5\\cdot3\\right)']
      },
      {
        id:'AVX-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Volume of a cone from its height and base width',
        stem:'A paper cup is in the shape of a cone. It measures 6 centimeters across the top and stands 10 centimeters tall. What is the volume of the cup, in cubic centimeters?',
        choices:{A:'90π', B:'30π', C:'120π', D:'10π'},
        correct:'B',
        expCorrect:'Half of 6 is 3, so the base measures 3 from the middle out. Volume of a cone is one third of (base × height): (1/3)π(3²)(10) = (1/3)π(9)(10) = 30π cubic centimeters. (Check: the full cylinder 6 across and 10 tall holds 90π, and a cone is a third of it: 90π/3 = 30π ✓.)',
        expWrong:{
          A:'90π is the cylinder with the same base and the same height. A cone fills exactly one third of it, so this answer is three times too big.',
          C:'120π squares the full 6 instead of halving it first: (1/3)π(6²)(10). "Across" is the whole width, so it has to be halved before it enters the formula.',
          D:'10π uses 3 instead of 3² — (1/3)π(3)(10). Both the cone and the cylinder square the half-width; only the height stays to the first power.'
        },
        tip:'A cone is one third of the cylinder that shares its base and height. Halve every measurement given as "across" before it goes into a formula, and square that half-width.',
        desmos:'Evaluate (1/3)*pi*3^2*10 in Desmos: about 94.2, which is 30π.',
        desmosLatex:['\\frac{1}{3}\\pi\\cdot3^2\\cdot10']
      },

      /* ================= Test level ================= */
      {
        id:'AVX-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'One dimension changed: what happens to the volume',
        stem:'A storage tank is a rectangular solid. A new tank is built with double the length, triple the width, and half the height of the original. The volume of the new tank is how many times the volume of the original?',
        choices:{A:'6', B:'11/2', C:'3', D:'12'},
        correct:'C',
        expCorrect:'Volume is length × width × height, so each change multiplies straight in: 2 × 3 × (1/2) = 3. The new tank holds 3 times as much. (Check with a 2-by-2-by-2 original: volume 8. The new one is 4 by 6 by 1, which is 24, and 24/8 = 3 ✓.)',
        expWrong:{
          A:'6 multiplies 2 × 3 and stops, leaving the halved height out. Every dimension that changes has to appear in the product, including the one that shrinks.',
          B:'11/2 is 2 + 3 + 1/2, adding the three factors. Volume is a product of the three dimensions, so the factors multiply, never add.',
          D:'12 is 2 × 3 × 2, reading "half the height" as "double the height". Halving multiplies by 1/2.'
        },
        tip:'When dimensions change one at a time, multiply the factors together: volume scales by (factor for length)(factor for width)(factor for height). Shrinking counts as a fraction, not as a subtraction.',
        desmos:'Evaluate 2*3*(1/2) in Desmos: 3.',
        desmosLatex:['2\\cdot3\\cdot\\frac{1}{2}']
      },
      {
        id:'AVX-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Scaling a flat shape: every dimension multiplied by the same factor',
        stem:'Every dimension of a rectangle is multiplied by 5 to make a larger rectangle. The area of the smaller rectangle is 12 square inches. What is the area of the larger rectangle, in square inches?',
        choices:{A:'60', B:'1500', C:'144', D:'300'},
        correct:'D',
        expCorrect:'Both the length and the width are multiplied by 5, and area is length × width, so the area is multiplied by 5 × 5 = 25. Then 12 × 25 = 300 square inches. (Check with a 3-by-4 rectangle, area 12: it becomes 15 by 20, area 300 ✓.)',
        expWrong:{
          A:'60 is 12 × 5, scaling the area by the length factor. Area has two dimensions in it, so the factor gets used twice.',
          B:'1500 is 12 × 5³, the rule for volume. A rectangle is flat, so the exponent is 2, not 3.',
          C:'144 is 12², squaring the area instead of the scale factor. The factor 5 is what gets squared, not the 12.'
        },
        tip:'Multiply every length by k and area goes by k², volume by k³. The exponent is simply how many dimensions the quantity has: 1 for a length, 2 for an area, 3 for a volume.',
        desmos:'Evaluate 12*5^2 in Desmos: 300.',
        desmosLatex:['12\\cdot5^2']
      },

      /* ================= Hard · real M2 ================= */
      {
        id:'AVX-06', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volume kept the same when a solid is melted and recast',
        stem:'A solid metal cube with edges of 6 centimeters is melted down and recast, with no metal lost, into a rectangular solid whose base is a square 4 centimeters on each side. What is the height of the new solid, in centimeters?',
        choices:{A:'13.5', B:'54', C:'6', D:'1.5'},
        correct:'A',
        expCorrect:'Melting changes the shape, not the amount of metal, so the two volumes are equal. The cube holds 6³ = 216 cubic centimeters. The new base covers 4 × 4 = 16 square centimeters, so the height is 216/16 = 13.5 centimeters. (Check: 4 × 4 × 13.5 = 216 ✓.)',
        expWrong:{
          B:'54 is 216/4, dividing by one edge of the base instead of by the whole base area. The base is a square, so it takes 4 × 4 out of the volume.',
          C:'6 is 216/36, dividing by the area of a face of the ORIGINAL cube. The new solid is what has to be divided, and its base is 16, not 36.',
          D:'1.5 is 6/4, comparing the two edges directly. Edges do not transfer between solids of different shapes; only the volume does.'
        },
        tip:'Melted, recast, poured, reshaped: the volume is the one thing that does not change. Write volume of the old = volume of the new, and solve for the missing length.',
        desmos:'Evaluate 6^3/4^2 in Desmos: 13.5.',
        desmosLatex:['\\frac{6^3}{4^2}']
      },
      {
        id:'AVX-07', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volume poured into a container of a different shape',
        stem:'A container is a rectangular solid with a base 20 centimeters by 15 centimeters. It is filled with water to a height of 8 centimeters. All of that water is poured into a second rectangular container whose base is 25 centimeters by 16 centimeters. To what height, in centimeters, does the water rise in the second container?',
        answer:'6',
        expCorrect:'The water keeps its volume and only changes shape. In the first container it is 20 × 15 × 8 = 2400 cubic centimeters. The second base covers 25 × 16 = 400 square centimeters, so the height is 2400/400 = 6 centimeters. (Check: 400 × 6 = 2400 ✓.)',
        tip:'When liquid moves between containers, set the two volumes equal. A wider base means a lower level and a narrower base a higher one — the height is volume divided by base area, never the old height carried over.',
        desmos:'Evaluate 20*15*8/(25*16) in Desmos: 6.',
        desmosLatex:['\\frac{20\\cdot15\\cdot8}{25\\cdot16}']
      },
      {
        id:'AVX-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volume of a hollow cylinder',
        figure: FIG_PIPE,
        stem:'A metal pipe is 50 centimeters long. Its outer surface measures 10 centimeters across and the hollow channel through the middle measures 6 centimeters across. What volume of metal, in cubic centimeters, does the pipe contain?',
        choices:{A:'1250π', B:'800π', C:'200π', D:'3200π'},
        correct:'B',
        expCorrect:'Halve each width first: 10 across gives 5, and 6 across gives 3. The full outer body would hold π(5²)(50) = 1250π, and the hollow channel takes away π(3²)(50) = 450π. The metal is 1250π − 450π = 800π cubic centimeters. (Check: (25 − 9) × 50 = 16 × 50 = 800 ✓.)',
        expWrong:{
          A:'1250π is the whole outer body with nothing removed. The pipe is hollow, so the channel has to come out.',
          C:'200π subtracts the widths first and squares afterwards: (10 − 6)/2 = 2, then π(2²)(50). Squaring does not pass through a subtraction — 5² − 3² is not (5 − 3)².',
          D:'3200π uses 10 and 6 as the measurements from the middle out instead of halving them: π(10² − 6²)(50). "Across" is the full width.'
        },
        tip:'For anything shaped like a tube, square each half-width separately, subtract, and only then multiply by the length. Halving comes first, squaring second, subtracting third.',
        desmos:'Evaluate (5^2-3^2)*50 in Desmos: 800, so the metal is 800π cubic centimeters.',
        desmosLatex:['\\left(5^2-3^2\\right)\\cdot50']
      },
      {
        id:'AVX-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Surface area of two solids glued face to face',
        figure: FIG_CUBES,
        stem:'Two identical cubes, each with edges of 5 inches, are glued together face to face to form a single solid. What is the surface area of that solid, in square inches?',
        choices:{A:'300', B:'275', C:'250', D:'200'},
        correct:'C',
        expCorrect:'Each cube has 6 faces of 5 × 5 = 25, so 150 square inches each and 300 for the pair. Gluing hides one face on each cube, so 2 × 25 = 50 square inches disappear: 300 − 50 = 250. (Check by reading the result as a 5-by-5-by-10 box: 2(5×5) + 4(5×10) = 50 + 200 = 250 ✓.)',
        expWrong:{
          A:'300 adds the two surface areas and stops. The faces that are pressed together are inside the new solid and are no longer part of its surface.',
          B:'275 removes only one face of 25. Two faces vanish, one from each cube, because each cube gives up a face at the joint.',
          D:'200 removes four faces, 100 square inches. Only the single pair that actually touches disappears.'
        },
        tip:'For solids stuck together, add the surface areas and subtract the contact area TWICE — once for each solid that loses it. Volumes simply add; surfaces never do.',
        desmos:'Evaluate 2*6*25-2*25 in Desmos: 250.',
        desmosLatex:['2\\cdot6\\cdot25-2\\cdot25']
      },
      {
        id:'AVX-10', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Area with a unit change from square meters to square centimeters',
        stem:'A rectangular panel measures 1.5 meters by 0.8 meters. What is the area of the panel, in square centimeters?',
        choices:{A:'1.2', B:'120', C:'120000', D:'12000'},
        correct:'D',
        expCorrect:'Convert the sides first: 1.5 m = 150 cm and 0.8 m = 80 cm, so the area is 150 × 80 = 12 000 square centimeters. (Check the other way: 1.5 × 0.8 = 1.2 square meters, and 1 m² = 100² = 10 000 cm², so 1.2 × 10 000 = 12 000 ✓.)',
        expWrong:{
          A:'1.2 is the area in square METERS. The question asks for square centimeters, so the conversion still has to happen.',
          B:'120 multiplies 1.2 by 100, the conversion for a LENGTH. An area carries two dimensions, so the 100 gets used twice.',
          C:'120000 multiplies 1.2 by 100³, the conversion for a volume. A flat panel needs the exponent 2, not 3.'
        },
        tip:'The unit conversion is raised to the same power as the unit. 1 m = 100 cm gives 1 m² = 10 000 cm² and 1 m³ = 1 000 000 cm³. Safest habit: convert each length first, then multiply.',
        desmos:'Evaluate 150*80 in Desmos: 12000.',
        desmosLatex:['150\\cdot80']
      },
      {
        id:'AVX-11', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Solving for a dimension when the volume and a ratio are given',
        stem:'A rectangular solid has a volume of 960 cubic centimeters. Its length is three times its width, and its height is 5 centimeters. What is the width of the solid, in centimeters?',
        choices:{A:'8', B:'24', C:'64', D:'192'},
        correct:'A',
        expCorrect:'Call the width w. Then the length is 3w and the height is 5, so the volume is (3w)(w)(5) = 15w². Setting 15w² = 960 gives w² = 64, so w = 8 centimeters. (Check: 8 × 24 × 5 = 960 ✓.)',
        expWrong:{
          B:'24 is the LENGTH, 3w. The question asks for the width, so the last move is to answer w itself.',
          C:'64 is w², the value one step before the end. The square root still has to be taken.',
          D:'192 is 960/5, the area of the base. That is a real intermediate value, but it still has to be split into 3w × w before w appears.'
        },
        tip:'Name the smallest quantity w, write every other length in terms of it, multiply them into the volume, and solve. Then reread the last line of the question: the variable you solved for is often not the one being asked about.',
        desmos:'Graph y=15x^2 and y=960 in Desmos; they cross at x=8.',
        desmosLatex:['y=15x^2','y=960']
      },
      {
        id:'AVX-12', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Area of a flat slice cut through a solid',
        figure: FIG_CUT,
        stem:'A rectangular solid measures 8 inches long, 6 inches wide and 5 inches tall. A flat cut is made straight down through the solid along a diagonal of its 8-by-6 base. What is the area of the flat face this cut exposes, in square inches?',
        choices:{A:'40', B:'50', C:'30', D:'70'},
        correct:'B',
        expCorrect:'The exposed face is a rectangle. One side is the height, 5. The other side is the diagonal of the 8-by-6 base, which the Pythagorean relationship gives as √(8² + 6²) = √100 = 10. The area is 10 × 5 = 50 square inches. (Check: 8-6-10 is a familiar set, and 10 × 5 = 50 ✓.)',
        expWrong:{
          A:'40 is 8 × 5, using the front edge of the base instead of its diagonal. The cut runs corner to corner, so it is longer than either edge.',
          C:'30 is 6 × 5, the same mistake using the shorter edge of the base.',
          D:'70 is (8 + 6) × 5, adding the two edges to get the diagonal. The diagonal comes from a² + b² under a square root, and 10 is comfortably less than 14.'
        },
        tip:'A straight vertical cut through a box exposes a rectangle: one side is the height, the other is the length of the cut line drawn on the base. Find that base line first — usually with a² + b² — and multiply last.',
        desmos:'Evaluate sqrt(8^2+6^2)*5 in Desmos: 50.',
        desmosLatex:['\\sqrt{8^2+6^2}\\cdot5']
      },
      {
        id:'AVX-13', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volume of a solid made of a cylinder and a hemisphere',
        stem:'A tank is a cylinder 6 feet across and 10 feet tall, with a hemisphere resting on top as a lid; the flat face of the hemisphere matches the top of the cylinder exactly. The total volume of the tank is kπ cubic feet. What is the value of k?',
        answer:'108',
        expCorrect:'Half of 6 is 3. The cylinder holds π(3²)(10) = 90π. A hemisphere is half of (4/3)πr³, which is (2/3)π(3³) = (2/3)π(27) = 18π. The pieces add: 90π + 18π = 108π, so k = 108. (Check: 90 + 18 = 108 ✓.)',
        tip:'A hemisphere is (2/3)πr³ — half of (4/3)πr³, not half of πr³. When a composite solid is built from pieces the VOLUMES add cleanly; the surfaces are the ones that need faces removed.',
        desmos:'Evaluate 9*10+(2/3)*3^3 in Desmos: 108, so the volume is 108π cubic feet.',
        desmosLatex:['3^2\\cdot10+\\frac{2}{3}\\cdot3^3']
      },

      /* ================= Brutal ================= */
      {
        id:'AVX-14', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Scaling: from a surface area ratio to a volume',
        stem:'Two solids are similar. The surface area of the larger one is 2.25 times the surface area of the smaller one, and the volume of the smaller one is 64 cubic centimeters. What is the volume of the larger one, in cubic centimeters?',
        choices:{A:'144', B:'96', C:'216', D:'324'},
        correct:'C',
        expCorrect:'Similar solids share one scale factor k: lengths go by k, areas by k², volumes by k³. Here k² = 2.25, so k = 1.5. Then volumes go by k³ = 1.5³ = 3.375, and 64 × 3.375 = 216 cubic centimeters. (Check with cubes: 64 = 4³ and 216 = 6³, and 6/4 = 1.5 ✓. Their surfaces are 6(16) = 96 and 6(36) = 216, and 216/96 = 2.25 ✓.)',
        expWrong:{
          A:'144 is 64 × 2.25, reusing the AREA ratio on a volume. The two ratios are different powers of the same k and never swap.',
          B:'96 is 64 × 1.5, scaling the volume by k itself. k is the ratio of lengths; volumes take k³.',
          D:'324 is 144 × 2.25, applying the area ratio twice. Two applications of k² give k⁴, and a volume needs k³.'
        },
        tip:'Land on k first, every time. Area ratio → square root → k. Volume ratio → cube root → k. Then raise k to whatever power the question wants. Jumping straight from an area ratio to a volume ratio is the single most common miss in this skill.',
        desmos:'Evaluate 64*(sqrt(2.25))^3 in Desmos: 216.',
        desmosLatex:['64\\cdot\\left(\\sqrt{2.25}\\right)^3']
      },
      {
        id:'AVX-15', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Volume of a cone with its top cut off, by the similarity ratio',
        figure: FIG_CONECUT,
        stem:'A solid cone stands 12 inches tall and measures 12 inches across its base. A cut parallel to the base is made 6 inches above the base, and the piece above the cut is removed. The volume of the piece that remains is kπ cubic inches. What is the value of k?',
        answer:'126',
        expCorrect:'Half of 12 across is 6, so the whole cone holds (1/3)π(6²)(12) = 144π. The piece removed is a smaller cone similar to the whole one: its height is 12 − 6 = 6, so every length in it is 6/12 = 1/2 of the original and its volume is (1/2)³ = 1/8 of 144π, which is 18π. What remains is 144π − 18π = 126π, so k = 126. (Check: 18 × 8 = 144 ✓, and 144 − 18 = 126 ✓.)',
        tip:'The piece sliced off the top of a cone is a smaller cone similar to the whole one. Get the height ratio, CUBE it for the volume, and subtract. Never treat the bottom piece as a cone of its own — it does not come to a point.',
        desmos:'Evaluate (1/3)*6^2*12 and then (1/3)*6^2*12/8 in Desmos: 144 and 18, so k = 126.',
        desmosLatex:['\\frac{1}{3}\\cdot6^2\\cdot12','\\frac{1}{3}\\cdot6^2\\cdot12\\cdot\\frac{1}{8}']
      },
      {
        id:'AVX-16', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Volume kept the same: spheres recast into a cylinder',
        stem:'Nine identical solid metal spheres, each 4 centimeters across, are melted down and recast without any loss into a single cylinder that measures 8 centimeters across. What is the height of that cylinder, in centimeters?',
        choices:{A:'3', B:'2/3', C:'12', D:'6'},
        correct:'D',
        expCorrect:'Half of 4 is 2, so each sphere holds (4/3)π(2³) = 32π/3 cubic centimeters. Nine of them come to 9 × 32π/3 = 96π. The cylinder is 8 across, so its half-width is 4 and its base covers π(4²) = 16π. Height = 96π/16π = 6 centimeters. (Check: 16π × 6 = 96π ✓.)',
        expWrong:{
          A:'3 uses (4/3)πr² for a sphere instead of (4/3)πr³: nine spheres would be 48π and the height would come out 3. A sphere is a solid, so the half-width is cubed.',
          B:'2/3 melts only one sphere, (32π/3)/(16π). All nine go into the cylinder, so the total has to be multiplied by 9 before dividing.',
          C:'12 skips the halving on both bodies, treating 4 and 8 as the measurements from the middle out. Every "across" is a full width.'
        },
        tip:'Recasting keeps the volume, so count every piece before setting the two volumes equal. Halve every "across" first, then apply the right power: r³ for a sphere, r² for the base of a cylinder.',
        desmos:'Evaluate 9*(4/3)*2^3/4^2 in Desmos: 6.',
        desmosLatex:['\\frac{9\\cdot\\frac{4}{3}\\cdot2^3}{4^2}']
      },
      {
        id:'AVX-17', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'A solid whose volume and surface area are numerically equal',
        stem:'A rectangular solid has a square base with edges of length s and a height of h, and its volume is numerically equal to its total surface area. Which expression gives h in terms of s?',
        choices:{A:'2s/(s − 4)', B:'2s/(s + 4)', C:'s/(s − 4)', D:'2s²/(s − 4)'},
        correct:'A',
        expCorrect:'The volume is s²h. The surface is two square faces plus four rectangles s by h: 2s² + 4sh. Setting them equal gives s²h = 2s² + 4sh. Move every h term to one side: s²h − 4sh = 2s², so sh(s − 4) = 2s². Divide both sides by s(s − 4): h = 2s/(s − 4). (Check with s = 6: h = 12/2 = 6, so the solid is a cube of edge 6. Its volume is 216 and its surface is 6 × 36 = 216 ✓.)',
        expWrong:{
          B:'2s/(s + 4) comes from moving 4sh across without changing its sign. Subtracting 4sh from both sides leaves s − 4 in the factor, not s + 4.',
          C:'s/(s − 4) counts only ONE square face, using s² + 4sh for the surface. A closed box has a top as well as a bottom, so the square face appears twice.',
          D:'2s²/(s − 4) cancels the s from the numerator but not from the denominator. The true fraction 2s²/(s² − 4s) has an s in both parts, and cancelling it has to happen on both.'
        },
        tip:'"Numerically equal" means set the two expressions equal even though one counts cubic units and the other square units. Then gather every term containing the unknown on one side and FACTOR it out before dividing — dividing too early loses a solution.',
        desmos:'Test s = 6 in Desmos: 2*6/(6-4) = 6, and a 6 by 6 by 6 solid gives 6^3 = 216 and 6*6^2 = 216.',
        desmosLatex:['\\frac{2\\cdot6}{6-4}','6^3','6\\cdot6^2']
      },
      {
        id:'AVX-18', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Volume in liters against a rate per minute',
        stem:'A tank in the shape of a rectangular solid measures 1.2 meters by 0.5 meters by 0.8 meters tall, and water fills it to three quarters of its height. A pump removes water at 40 liters per minute. How many minutes does it take to empty the tank? (1 cubic meter = 1000 liters.)',
        answer:'9',
        expCorrect:'Three quarters of 0.8 is 0.6, so the water itself is a solid 1.2 by 0.5 by 0.6 = 0.36 cubic meters. One cubic meter is 1000 liters, so that is 360 liters. At 40 liters per minute: 360/40 = 9 minutes. (Check: 40 × 9 = 360 ✓.)',
        tip:'Three traps stacked: use the water height, not the tank height; convert to the unit the RATE is written in before dividing; and remember the conversion is cubed, so 1 m³ = 1000 L rather than 100 L. Convert first, divide last.',
        desmos:'Evaluate 1.2*0.5*0.6*1000/40 in Desmos: 9.',
        desmosLatex:['\\frac{1.2\\cdot0.5\\cdot0.6\\cdot1000}{40}']
      },
      {
        id:'AVX-19', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Volume left after a pyramid is carved out of a block',
        stem:'A solid wooden block is a cube with edges of 9 centimeters. A pyramid is carved out of the block: its base is a square 6 centimeters on each side lying on the bottom face of the cube, and its apex touches the center of the top face. How many cubic centimeters of wood remain?',
        choices:{A:'108', B:'621', C:'405', D:'513'},
        correct:'B',
        expCorrect:'The block holds 9³ = 729 cubic centimeters. The pyramid has a base of 6 × 6 = 36 and a height of the full 9, so its volume is (1/3)(36)(9) = 108. What remains is 729 − 108 = 621 cubic centimeters. (Check: 621 + 108 = 729 ✓.)',
        expWrong:{
          A:'108 is the pyramid itself, the wood that was taken AWAY. The question asks for what is left behind.',
          C:'405 is 729 − 324, leaving the 1/3 off the pyramid. A pyramid is one third of base × height; 324 would be a solid of constant 6-by-6 cross section.',
          D:'513 is 729 − 216, removing a 6-by-6-by-6 cube instead of a pyramid. The carved piece narrows to a point, so it holds far less than a cube on the same base.'
        },
        tip:'A pyramid or a cone is one third of base × height — that 1/3 is the most-forgotten factor in this skill. Compute the whole, compute the piece removed, subtract, and check which of the two the question actually wants.',
        desmos:'Evaluate 9^3-(1/3)*36*9 in Desmos: 621.',
        desmosLatex:['9^3-\\frac{1}{3}\\cdot36\\cdot9']
      },
      {
        id:'AVX-20', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Volume displaced when an object is submerged',
        stem:'A cylinder 20 centimeters across holds water 15 centimeters deep. A solid object is lowered in and sinks completely, and the water rises to a depth of 15.6 centimeters without spilling. What is the volume of the object, in cubic centimeters? Use 3.14 for π.',
        answer:'188.4',
        expCorrect:'A submerged object pushes aside exactly its own volume, and that extra water sits as a slab as wide as the container and as tall as the RISE. Half of 20 is 10, so the base covers π(10²) = 100π = 314 square centimeters. The rise is 15.6 − 15 = 0.6 centimeters. Volume = 314 × 0.6 = 188.4 cubic centimeters. (Check: 314 × 15.6 = 4898.4 and 314 × 15 = 4710; the difference is 188.4 ✓.)',
        tip:'Displaced volume = base area × RISE. Subtract the two depths before multiplying, never after, and halve the "across" measurement before squaring it. The shape of the sunken object is irrelevant — only how much water it moves.',
        desmos:'Evaluate 3.14*10^2*(15.6-15) in Desmos: 188.4.',
        desmosLatex:['3.14\\cdot10^2\\cdot\\left(15.6-15\\right)']
      },
      {
        id:'AVX-21', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Surface area of a cylinder capped with a hemisphere',
        figure: FIG_SILO,
        stem:'A grain silo is a cylinder 8 meters across and 15 meters tall, capped by a hemisphere whose flat face exactly covers the open top of the cylinder. The silo rests on the ground, so its bottom is not painted. What is the total painted surface, in square meters?',
        choices:{A:'168π', B:'184π', C:'152π', D:'136π'},
        correct:'C',
        expCorrect:'Half of 8 is 4. Only two surfaces can be reached: the side of the cylinder and the dome. The side is 2π(4)(15) = 120π. The dome is half of a sphere, so its curved part is half of 4π(4²), which is 2π(16) = 32π. The flat face where the two meet is inside the silo and the base sits on the ground, so neither counts: 120π + 32π = 152π square meters. (Check: 120 + 32 = 152 ✓.)',
        expWrong:{
          A:'168π adds the flat top of the cylinder, 16π. The dome covers that face exactly, so it is inside the silo and cannot be painted.',
          B:'184π adds both the flat top and the base, 16π twice. The silo stands on the ground, which the question says outright.',
          D:'136π treats the dome as a flat lid of area π(4²) = 16π instead of a curved 2π(4²) = 32π. A dome has twice the surface of the opening it covers.'
        },
        tip:'For the surface of a composite solid, list only the faces a hand could touch: every face where two pieces meet disappears from both. The curved surface of a hemisphere is 2πr², exactly double the flat opening underneath it.',
        desmos:'Evaluate 2*4*15+2*4^2 in Desmos: 152, so the painted surface is 152π square meters.',
        desmosLatex:['2\\cdot4\\cdot15+2\\cdot4^2']
      },
      {
        id:'AVX-22', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Two solids of equal volume: solving for a missing dimension',
        stem:'A cone and a cylinder have the same volume. The cone measures 12 centimeters across its base and stands h centimeters tall. The cylinder measures 6 centimeters across its base and stands 8 centimeters tall. What is the value of h?',
        choices:{A:'2', B:'12', C:'2/3', D:'6'},
        correct:'D',
        expCorrect:'Halve each "across" first: the cone measures 6 from the middle out, the cylinder 3. The cone holds (1/3)π(6²)h = 12πh and the cylinder holds π(3²)(8) = 72π. Equal volumes means 12πh = 72π, so h = 6 centimeters. (Check: (1/3)π(36)(6) = 72π ✓.)',
        expWrong:{
          A:'2 drops the 1/3 from the cone and solves 36πh = 72π. A cone is a third of the cylinder that shares its base and height, and that factor never comes off.',
          B:'12 uses the half-width to the first power in the cone, (1/3)π(6)h = π(3)(8). Both formulas square the half-width; only the height stays linear.',
          C:'2/3 puts the 1/3 on the cylinder instead of the cone. Only cones and pyramids carry it — a cylinder is base × height with nothing in front.'
        },
        tip:'Equal volumes means one equation: write the volume of each solid, set the two equal, solve. Halve every "across" before anything else, and keep the 1/3 attached to the body that comes to a point.',
        desmos:'Graph y=(1/3)*pi*6^2*x and y=pi*3^2*8 in Desmos; they cross at x=6.',
        desmosLatex:['y=\\frac{1}{3}\\pi\\cdot6^2x','y=\\pi\\cdot3^2\\cdot8']
      }

    ]
  });
})();
