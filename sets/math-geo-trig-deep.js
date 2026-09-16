/* SAT Studio question set — Math: Geometry & Trigonometry (RTT-01 a RTT-16) */
(function(){
  /* Tier BRUTAL de "Right triangles and trigonometry": la destreza tiene 55
     preguntas en el banco y solo 6 en el tier alto, así que este set carga ocho
     de golpe. Dos Fácil de rampa, seis Difícil y ocho Difícil + extreme:true.

     OJO con el tier brutal: en la PREGUNTA va difficulty:'Difícil' MÁS
     extreme:true. difficulty:'Extreme' no existe y el mock adaptativo manda esa
     pregunta al módulo FÁCIL. En el SET sí va level:'Extreme'.

     OJO con skillOf(): dentro de Geometry prueba Circles → Right triangles →
     Area and volume → Lines, angles and triangles contra skill + los primeros
     160 caracteres del stem, y gana el PRIMERO que calza. Esta destreza va
     SEGUNDA, así que:
       · en cada `skill` aparece a propósito una de right triangle / pythagorean /
         sine / cosine / tangent / hypotenuse / 30-60-90 / 45-45-90 /
         complementary angle / leg;
       · no se escribe circle, circumference, arc, sector, radius, radii,
         diameter ni central angle en el skill ni al arrancar el enunciado;
       · "tangent" sola es de esta destreza, pero "tangent line" es de Circles y
         se prueba antes: acá siempre se dice "the tangent of angle A" o "tan A".
     "area" sí se puede decir libremente: Area and volume se prueba DESPUÉS.

     OJO con el detector de español: la palabra inglesa "triangular" cae en el
     patrón triangul\w*, así que nunca se usa.

     Figuras: SVG inline con viewBox propio, role="img" y un aria-label que por
     sí solo alcanza para contestar. Las coordenadas están verificadas contra el
     enunciado (el ángulo recto de FIG_ALTHYP se comprobó con el producto punto:
     CA·CB = −52·117 + 78·78 = 0). */

  var NOTA = function(y){
    return '<text x="12" y="' + y + '" font-size="11" fill="#757575" ' +
           'font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>';
  };

  /* RTT-02: Q en (40,160), R en (190,160) [15 unidades · 10 px], P en (40,80)
     [8 unidades · 10 px]. La hipotenusa PR mide 17 por el 8-15-17. */
  var FIG_LEGS =
    '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A right triangle with vertices P, Q and R. The right angle is at Q, which sits at the bottom left. R is on the same horizontal line to the right of Q, and P is directly above Q. Side PQ measures 8, side QR measures 15, and the slanted side PR, opposite the right angle, measures 17.">' +
    '<polygon points="40,80 40,160 190,160" fill="none" stroke="#324DC7" stroke-width="2.2"/>' +
    '<polygon points="40,148 52,148 52,160 40,160" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<g font-family="Georgia,serif" font-size="14" stroke="#ffffff" stroke-width="3.5" paint-order="stroke">' +
    '<text x="34" y="124" text-anchor="end">8</text>' +
    '<text x="115" y="152" text-anchor="middle">15</text>' +
    '<text x="124" y="112">17</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="32" y="74">P</text><text x="28" y="178">Q</text><text x="194" y="178">R</text></g>' +
    NOTA(194) + '</svg>';

  /* RTT-06: A(30,170), D(82,170), B(199,170) → AD = 4 y DB = 9 a 13 px por
     unidad. C(82,92): la altura mide 78 px = 6 unidades = raiz(4·9), y el
     ángulo en C sale recto exacto (producto punto 0). */
  var FIG_ALTHYP =
    '<svg viewBox="0 0 235 212" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A right triangle ABC with the right angle at C, drawn with the hypotenuse AB horizontal along the bottom. A is at the left and B at the right. A segment drops from C straight down to a point D on AB, meeting AB at a right angle. The piece AD measures 4, the piece DB measures 9, and the segment CD is labeled x.">' +
    '<polygon points="30,170 199,170 82,92" fill="none" stroke="#324DC7" stroke-width="2.2"/>' +
    '<line x1="82" y1="92" x2="82" y2="170" stroke="#1e1e1e" stroke-width="2"/>' +
    '<polygon points="82,92 74.8,102.8 85.6,110 92.8,99.2" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<polygon points="82,158 94,158 94,170 82,170" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<g font-family="Georgia,serif" font-size="14" stroke="#ffffff" stroke-width="3.5" paint-order="stroke">' +
    '<text x="56" y="187" text-anchor="middle">4</text>' +
    '<text x="140" y="187" text-anchor="middle">9</text>' +
    '<text x="90" y="136" fill="#324DC7" font-style="italic">x</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="20" y="178">A</text><text x="204" y="178">B</text>' +
    '<text x="74" y="86">C</text><text x="66" y="165">D</text></g>' +
    NOTA(206) + '</svg>';

  /* RTT-15: B(30,170), D(102,170), C(226.7,170), A(102,98). BD = 72 px y
     AD = 72 px → el ángulo en B es de 45°. DC = 124.7 px y 72/124.7 = 0.5774 =
     tan 30°, así que el ángulo en C es de 30°. Escala: 12 px por unidad. */
  var FIG_TWO =
    '<svg viewBox="0 0 262 212" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC drawn with side BC horizontal along the bottom, B at the left and C at the right. A is above the side BC. A segment drops from A straight down to a point D on BC, meeting BC at a right angle. The angle at B measures 45 degrees, the angle at C measures 30 degrees, and the segment AD measures 6.">' +
    '<polygon points="30,170 226.7,170 102,98" fill="none" stroke="#324DC7" stroke-width="2.2"/>' +
    '<line x1="102" y1="98" x2="102" y2="170" stroke="#1e1e1e" stroke-width="2"/>' +
    '<polygon points="102,158 114,158 114,170 102,170" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<g font-family="Georgia,serif" font-size="14" stroke="#ffffff" stroke-width="3.5" paint-order="stroke">' +
    '<text x="52" y="163">45°</text>' +
    '<text x="192" y="163">30°</text>' +
    '<text x="109" y="138">6</text></g>' +
    '<g font-family="Georgia,serif" font-size="13" font-style="italic">' +
    '<text x="98" y="90">A</text><text x="22" y="184">B</text>' +
    '<text x="232" y="184">C</text><text x="96" y="187">D</text></g>' +
    NOTA(206) + '</svg>';

  window.SAT_SETS.push({
    id: 'math-geo-trig-deep',
    title: 'Right Triangles & Trigonometry — Hard & Brutal',
    section: 'math',
    level: 'Extreme',
    description: 'Sixteen right-triangle questions that climb from one Pythagorean step to eight brutal ones: the complementary angle identity, two triangles sharing a height, the altitude to the hypotenuse, a parameter in place of a number, and three-step chains where no value along the way is the answer.',
    minutes: 24,
    questions: [

      /* ===== Rampa: dos Fácil ===== */
      {
        id:'RTT-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Pythagorean theorem to find the hypotenuse',
        stem:'A right triangle has legs of length 9 centimeters and 40 centimeters. What is the length, in centimeters, of the hypotenuse?',
        choices:{A:'49', B:'31', C:'41', D:'1681'},
        correct:'C',
        expCorrect:'The hypotenuse is across from the right angle, so it is the c in a² + b² = c². Step 1: 9² + 40² = 81 + 1600 = 1681. Step 2: c = √1681 = 41. (Check: 41² = 1681 ✓. This is the 9-40-41 triple, worth recognizing on sight.)',
        expWrong:{
          A:'49 adds the two legs, 9 + 40. Sides of a right triangle never add like that — only their SQUARES do, which is exactly what the theorem says.',
          B:'31 subtracts, 40 − 9. Subtraction is the move when you know the hypotenuse and one leg, and even then it is the squares that get subtracted.',
          D:'1681 is c², the value at the end of step 1. The square root is still missing.'
        },
        tip:'Write a² + b² = c² with c always on the hypotenuse, the side facing the right angle. Then ask whether you are solving for c (add the squares) or for a leg (subtract them), and never forget the square root at the end.',
        desmos:'Evaluate sqrt(9^2+40^2) in Desmos: 41.',
        desmosLatex:['\\sqrt{9^2+40^2}']
      },
      {
        id:'RTT-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Reading the sine of an angle off a right triangle',
        figure: FIG_LEGS,
        stem:'In right triangle PQR the right angle is at Q, PQ = 8, QR = 15, and PR = 17. What is the value of sin R?',
        choices:{A:'15/17', B:'8/17', C:'8/15', D:'17/8'},
        correct:'B',
        expCorrect:'Sine is opposite over hypotenuse, and both words are measured from the angle you are asked about. Step 1: stand at R. The side across the triangle from R is PQ = 8. Step 2: the hypotenuse is always the side facing the right angle, so it is PR = 17. So sin R = 8/17. (Check: 8² + 15² = 64 + 225 = 289 = 17² ✓.)',
        expWrong:{
          A:'15/17 is cos R. QR = 15 touches angle R, so it is the adjacent side, and adjacent over hypotenuse is cosine.',
          C:'8/15 is tan R, opposite over adjacent. It never uses the hypotenuse at all, which is the giveaway that it is not sine.',
          D:'17/8 flips the ratio. Sine of an acute angle is always less than 1 because the hypotenuse is the longest side, so a value above 1 is impossible.'
        },
        tip:'Relabel the triangle from the angle in the question before writing anything: opposite, adjacent, hypotenuse. The hypotenuse never moves, but which leg is "opposite" flips depending on which acute angle you are asked about.',
        desmos:'Evaluate 8/17 in Desmos: 0.4706.',
        desmosLatex:['\\frac{8}{17}']
      },

      /* ===== Seis Difícil ===== */
      {
        id:'RTT-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Complementary angle identity: the sine of one acute angle is the cosine of the other',
        stem:'In right triangle ABC the right angle is at C. If sin A = 0.28, what is the value of cos B?',
        choices:{A:'0.72', B:'0.96', C:'0.0784', D:'0.28'},
        correct:'D',
        expCorrect:'The three angles add to 180° and one of them is 90°, so A + B = 90°: the two acute angles are complementary. Step 1: sin A is (side opposite A) / (hypotenuse). Step 2: the side opposite A is the side TOUCHING B, so that same fraction is (side adjacent to B) / (hypotenuse), which is cos B. One fraction, two names: cos B = sin A = 0.28.',
        expWrong:{
          A:'0.72 is 1 − 0.28. Complementary ANGLES add to 90°; their sine and cosine values do not add to 1. What does add to 1 is sin² + cos², not sin + cos.',
          B:'0.96 is cos A, found from √(1 − 0.28²) = √0.9216. That is the cosine of the wrong angle — the question asks about B.',
          C:'0.0784 is 0.28², a step from the Pythagorean identity left half-finished.'
        },
        tip:'Memorize it as one sentence: sin(x) = cos(90 − x). Whenever a right-triangle question hands you a ratio for one acute angle and asks for a ratio of the other, the answer is usually the same number with the other name.',
        desmos:'In degree mode graph y=sin(x) and y=cos(90-x): the two curves land exactly on top of each other.',
        desmosLatex:['y=\\sin(x)','y=\\cos(90-x)']
      },
      {
        id:'RTT-04', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'From one tangent ratio and one leg to the perimeter of a right triangle',
        stem:'In right triangle ABC the right angle is at C, tan A = 7/24, and the side opposite angle A measures 21. What is the perimeter of triangle ABC?',
        answer:'168',
        expCorrect:'tan A is opposite over adjacent, so the triangle is a 7-24-25 scaled by some k: the sides are 7k, 24k and 25k. Step 1: the side opposite A is 7k = 21, so k = 3. Step 2: the legs are 21 and 24(3) = 72, and the hypotenuse is 25(3) = 75. Step 3: perimeter = 21 + 72 + 75 = 168. (Check: 21² + 72² = 441 + 5184 = 5625 = 75² ✓.)',
        tip:'A single trig ratio fixes the SHAPE of a right triangle but not its size, so write the sides as 7k, 24k, 25k and let the one given length pin down k. From there every side, the perimeter and the area come out with no calculator work at all.',
        desmos:'Evaluate 21+72+sqrt(21^2+72^2) in Desmos: 168.',
        desmosLatex:['21+72+\\sqrt{21^2+72^2}']
      },
      {
        id:'RTT-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Two right triangles that share the height of a flagpole',
        stem:'From a point on level ground the angle of elevation to the top of a flagpole is 45°. From a second point 18 meters farther away, on the same straight line from the base, the angle of elevation is 30°. How tall is the flagpole, in meters, to the nearest tenth?',
        choices:{A:'24.6', B:'18.0', C:'10.4', D:'49.2'},
        correct:'A',
        expCorrect:'Call the height h and call the ground distance from the near point d. The pole is the shared vertical side of both triangles. Step 1, near point: tan 45° = h/d = 1, so d = h. Step 2, far point: tan 30° = h/(d + 18), and tan 30° = 1/√3, so h√3 = d + 18. Step 3: substitute d = h to get h√3 = h + 18, so h(√3 − 1) = 18 and h = 18/(√3 − 1) = 24.6 meters. (Check: d = 24.6, and 24.6/(24.6 + 18) = 0.577 = tan 30° ✓.)',
        expWrong:{
          B:'18.0 reads the 45° as making the height equal to 18. The 45° does make the height equal the ground distance, but to the NEAR point; 18 is only the extra walk out to the second point.',
          C:'10.4 is 18·tan 30°, which puts 18 in the adjacent position. The 18 is not a full ground distance from either point — it is the gap between them.',
          D:'49.2 is 18(√3 + 1). That is the rationalized numerator with the denominator 2 dropped: 18/(√3 − 1) = 18(√3 + 1)/2.'
        },
        tip:'Two sightings of the same object give two right triangles that share the height. Name the height h and the nearer ground distance d, write one tangent equation per triangle, and let the given gap appear as d + gap. Two equations, two unknowns, every time.',
        desmos:'Evaluate 18/(sqrt(3)-1) in Desmos: 24.5885.',
        desmosLatex:['\\frac{18}{\\sqrt{3}-1}']
      },
      {
        id:'RTT-06', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'The altitude to the hypotenuse and the two similar right triangles it creates',
        figure: FIG_ALTHYP,
        stem:'In right triangle ABC the right angle is at C. The altitude from C meets the hypotenuse AB at point D, with AD = 4 and DB = 9. What is the length of CD?',
        choices:{A:'6.5', B:'13', C:'6', D:'36'},
        correct:'C',
        expCorrect:'The altitude cuts the triangle into two smaller right triangles, and both are similar to the original and to each other. Matching up triangle ACD with triangle CBD gives AD/CD = CD/DB, so CD² = AD·DB. Step 1: CD² = 4·9 = 36. Step 2: CD = √36 = 6. (Check: AC = √(4·13) = √52, BC = √(9·13) = √117, and 52 + 117 = 169 = 13² ✓.)',
        expWrong:{
          A:'6.5 averages the two pieces, (4 + 9)/2. The altitude is the geometric mean of the pieces, not the arithmetic one — you multiply and take the root, not add and halve.',
          B:'13 is AB, the whole hypotenuse 4 + 9. That is the value the two pieces were cut from, not the height standing on it.',
          D:'36 is CD², the value at the end of step 1, with the square root still missing.'
        },
        tip:'When an altitude drops onto the hypotenuse, three relationships appear at once: the altitude squared equals the product of the two pieces, and each leg squared equals its own piece times the whole hypotenuse. Sketch the two small triangles turned the same way and the matching sides are obvious.',
        desmos:'Evaluate sqrt(4*9) in Desmos: 6.',
        desmosLatex:['\\sqrt{4\\cdot9}']
      },
      {
        id:'RTT-07', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'A 30-60-90 triangle hidden inside an equilateral triangle',
        stem:'An equilateral triangle has sides of length 14. What is the area of the triangle, to the nearest tenth?',
        choices:{A:'98.0', B:'84.9', C:'169.7', D:'42.4'},
        correct:'B',
        expCorrect:'Drop the height from one vertex. In an equilateral triangle it lands on the midpoint of the base and creates two 30-60-90 triangles. Step 1: the short leg is half the base, 7, and the hypotenuse is the full side, 14. Step 2: in a 30-60-90 the long leg is the short leg times √3, so the height is 7√3 ≈ 12.124. Step 3: area = ½(14)(7√3) = 49√3 ≈ 84.9. (Check: 7² + (7√3)² = 49 + 147 = 196 = 14² ✓.)',
        expWrong:{
          A:'98.0 is ½(14)(14), using a SIDE as the height. In a triangle that is not right-angled, no side is the height — the height has to be dropped perpendicular to the base.',
          C:'169.7 is 14·(7√3), base times height with the ½ forgotten. That is the area of the rectangle the triangle sits inside, exactly double.',
          D:'42.4 is ½(7)(7√3), the area of just ONE of the two halves the height created. The question asks for the whole triangle.'
        },
        tip:'Any equilateral triangle splits into two 30-60-90 triangles, so its area is always (√3/4)s². If you forget the formula, rebuild it in ten seconds: half the side is the short leg, the side itself is the hypotenuse, and the height is the short leg times √3.',
        desmos:'Evaluate 49*sqrt(3) in Desmos: 84.87.',
        desmosLatex:['49\\sqrt{3}']
      },
      {
        id:'RTT-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Recognizing a scaled Pythagorean triple instead of grinding the arithmetic',
        stem:'A right triangle has a hypotenuse of length 85 and one leg of length 40. What is the length of the other leg?',
        choices:{A:'45', B:'93.9', C:'125', D:'75'},
        correct:'D',
        expCorrect:'Both given numbers are multiples of 5: 85 = 5(17) and 40 = 5(8). That is the 8-15-17 triple scaled by 5, so the missing leg is 5(15) = 75. Step by step if you prefer: √(85² − 40²) = √(7225 − 1600) = √5625 = 75. (Check: 40² + 75² = 1600 + 5625 = 7225 = 85² ✓.)',
        expWrong:{
          A:'45 is 85 − 40, subtracting the lengths themselves. The theorem subtracts the SQUARES, and then takes a root.',
          B:'93.9 is √(85² + 40²), adding the squares. Adding is only right when you are looking for the hypotenuse, and here 85 already is the hypotenuse — no other side can be longer than it.',
          C:'125 is 85 + 40, which is longer than the hypotenuse and so impossible for a leg.'
        },
        tip:'Before reaching for the calculator, factor out the common multiple. 3-4-5, 5-12-13, 8-15-17 and 7-24-25 cover most SAT right triangles, and spotting the scale turns a four-digit square root into one multiplication.',
        desmos:'Evaluate sqrt(85^2-40^2) in Desmos: 75.',
        desmosLatex:['\\sqrt{85^2-40^2}']
      },

      /* ===== Ocho brutales: difficulty Difícil + extreme:true ===== */
      {
        id:'RTT-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Complementary angle identity inside a sine-equals-cosine equation',
        stem:'In the equation sin(3x + 14)° = cos(x + 20)°, x is a constant and 0 &lt; x &lt; 30. What is the value of x?',
        choices:{A:'14', B:'3', C:'48', D:'56'},
        correct:'A',
        expCorrect:'sin θ = cos φ exactly when the two angles are complementary, θ + φ = 90°. Step 1: (3x + 14) + (x + 20) = 90. Step 2: 4x + 34 = 90, so 4x = 56 and x = 14. Step 3: check it against the restriction, 0 &lt; 14 &lt; 30 ✓. (Check the identity too: the angles become 56° and 34°, which add to 90°, and sin 56° = cos 34° ✓.)',
        expWrong:{
          B:'3 comes from setting the two angle expressions EQUAL, 3x + 14 = x + 20. That is the move for sin = sin or cos = cos. For sin = cos the angles are complementary, not equal.',
          C:'48 comes from subtracting the angles and setting the difference to 90: (3x + 14) − (x + 20) = 90. It is the sum that must be 90, and 48 is also thrown out by the restriction 0 &lt; x &lt; 30.',
          D:'56 is the angle 3x + 14 itself, the value that appears mid-solution. The question asks for x, and 56 breaks the given restriction anyway.'
        },
        tip:'Whenever an SAT equation puts sin on one side and cos on the other, add the two angle expressions and set the sum to 90. Then read the restriction on the variable before choosing — it is there precisely to kill one of the tempting answers.',
        desmos:'In degree mode graph y=sin(3x+14) and y=cos(x+20) and look for the crossing between x=0 and x=30.',
        desmosLatex:['y=\\sin(3x+14)','y=\\cos(x+20)']
      },
      {
        id:'RTT-10', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Two right triangles sharing an altitude, then the area of the whole',
        stem:'In triangle ABC the altitude from B meets side AC at a point D between A and C. BD = 12, the tangent of angle A is 3/4, and the tangent of angle C is 12/5. What is the area of triangle ABC?',
        answer:'126',
        expCorrect:'The altitude BD is a leg of BOTH right triangles, which is what makes the two tangent ratios usable. Step 1, in triangle ABD: tan A = BD/AD = 12/AD = 3/4, so AD = 16. Step 2, in triangle CBD: tan C = BD/DC = 12/DC = 12/5, so DC = 5. Step 3: AC = 16 + 5 = 21, so the area is ½(21)(12) = 126. (Check: AB = √(16² + 12²) = 20, a 3-4-5 scaled by 4, and BC = √(5² + 12²) = 13, a 5-12-13 ✓.)',
        tip:'An altitude inside a non-right triangle is the bridge: it is the opposite leg for the angle on the left and the opposite leg for the angle on the right at the same time. Solve each small triangle for its own piece of the base, add the pieces, and only then use ½·base·height.',
        desmos:'Evaluate 0.5*(12/(3/4)+12/(12/5))*12 in Desmos: 126.',
        desmosLatex:['0.5\\left(\\frac{12}{\\frac{3}{4}}+\\frac{12}{\\frac{12}{5}}\\right)\\cdot12']
      },
      {
        id:'RTT-11', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'A right triangle whose sides are given as expressions in one parameter',
        stem:'In right triangle ABC the right angle is at C, AC = k and BC = k + 7, where k is a positive constant. The hypotenuse AB has length k + 8. What is the value of k?',
        choices:{A:'−3', B:'12', C:'5', D:'13'},
        correct:'C',
        expCorrect:'Put the expressions into a² + b² = c², with the hypotenuse on the right. Step 1: k² + (k + 7)² = (k + 8)². Step 2: expand both squares fully — k² + k² + 14k + 49 = k² + 16k + 64. Step 3: k² − 2k − 15 = 0, which factors as (k − 5)(k + 3) = 0, so k = 5 or k = −3. Step 4: a length cannot be negative, so k = 5. (Check: the sides are 5, 12 and 13 ✓.)',
        expWrong:{
          A:'−3 is the other root of the quadratic. It is algebraically real but geometrically dead: AC = k would be a side of length −3.',
          B:'12 is BC = k + 7, the longer leg. It is the value you get by answering the wrong quantity — the question asks for k itself.',
          D:'13 is AB = k + 8, the hypotenuse. Same slip one step further along.'
        },
        tip:'When the sides come as expressions, the two squares on the left and the one on the right all need the middle term: (k + 7)² is k² + 14k + 49, never k² + 49. Then solve, and throw out any root that makes a length zero or negative before you look at the choices.',
        desmos:'Graph y=x^2-2x-15 in Desmos and read where it crosses the x-axis: −3 and 5.',
        desmosLatex:['y=x^2-2x-15']
      },
      {
        id:'RTT-12', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Two angles of depression and the one right triangle leg they share',
        stem:'A drone hovers 120 meters directly above point P on a flat field. Two trucks sit on the same ray from P, and the angles of depression from the drone are 62° to the near truck and 41° to the far one. How far apart are the two trucks, in meters, to the nearest tenth?',
        choices:{A:'138.0', B:'74.2', C:'63.8', D:'201.8'},
        correct:'B',
        expCorrect:'An angle of depression is measured from the horizontal at the drone, and it equals the angle of elevation back up from the truck. So at each truck the 120 m is the opposite leg and the ground distance is the adjacent leg. Step 1, near truck: tan 62° = 120/d₁, so d₁ = 120/tan 62° = 63.8 m. Step 2, far truck: d₂ = 120/tan 41° = 138.0 m. Step 3: both trucks are on the same side of P, so the gap is 138.0 − 63.8 = 74.2 m. (Check: the smaller angle sits farther away, as it should ✓.)',
        expWrong:{
          A:'138.0 is d₂, the distance from P out to the far truck. It is one of the two values you need, not the difference between them.',
          C:'63.8 is d₁, the distance to the near truck — the other intermediate value.',
          D:'201.8 adds the two distances instead of subtracting them. That would be the answer if the trucks sat on OPPOSITE sides of P, but the question puts both on the same ray.'
        },
        tip:'Angle of depression from above always equals the angle of elevation from below, so redraw it at ground level and the 120 m becomes the opposite leg. Then remember that tan = opposite/adjacent means the ground distance is height DIVIDED by the tangent, not multiplied by it.',
        desmos:'In degree mode evaluate 120/tan(41)-120/tan(62) in Desmos: 74.2.',
        desmosLatex:['\\frac{120}{\\tan(41)}-\\frac{120}{\\tan(62)}']
      },
      {
        id:'RTT-13', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Nested similar right triangles built by the altitude to the hypotenuse',
        stem:'In right triangle PQR the right angle is at Q, PQ = 15 and QR = 20. The altitude from Q meets the hypotenuse PR at point S. What is the area of triangle PQS?',
        answer:'54',
        expCorrect:'Triangle PQS is right-angled at S, so its area is ½(PS)(QS) — and neither of those is given. Step 1, the hypotenuse: PR = √(15² + 20²) = √625 = 25, a 3-4-5 scaled by 5. Step 2: each leg squared equals its own piece of the hypotenuse times the whole hypotenuse, so PS = PQ²/PR = 225/25 = 9. Step 3: the altitude is the product of the legs over the hypotenuse, QS = (15)(20)/25 = 12. Step 4: area = ½(9)(12) = 54. (Check: 9² + 12² = 81 + 144 = 225 = 15² ✓, and the far piece SR = 400/25 = 16 gives 9 + 16 = 25 ✓.)',
        tip:'The altitude to the hypotenuse gives you three ready-made facts: altitude² = (piece)(piece), leg² = (its own piece)(whole hypotenuse), and altitude = (leg·leg)/hypotenuse. Find the full hypotenuse first — every one of the three needs it.',
        desmos:'Evaluate 0.5*(15^2/25)*(15*20/25) in Desmos: 54.',
        desmosLatex:['0.5\\cdot\\frac{15^2}{25}\\cdot\\frac{15\\cdot20}{25}']
      },
      {
        id:'RTT-14', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'One cosine value carried through to a product of two different ratios',
        stem:'In right triangle ABC the right angle is at C. If cos A = 5/13, what is the value of tan A · sin B?',
        choices:{A:'60/169', B:'144/65', C:'5/13', D:'12/13'},
        correct:'D',
        expCorrect:'Build the triangle first. cos A = adjacent/hypotenuse = 5/13, so AC = 5, AB = 13 and BC = √(169 − 25) = 12. Step 1: tan A = opposite/adjacent = BC/AC = 12/5. Step 2: for angle B the opposite side is AC = 5, so sin B = 5/13. Step 3: (12/5)(5/13) = 12/13, since the 5s cancel. (Worth noticing: sin B = cos A by the complementary angle identity, so tan A · sin B = tan A · cos A = sin A = 12/13 ✓.)',
        expWrong:{
          A:'60/169 is sin A · sin B, (12/13)(5/13). Angle A gets its sine instead of its tangent — tangent divides by the adjacent leg, not by the hypotenuse.',
          B:'144/65 is tan A · sin A, (12/5)(12/13). It uses angle A twice: the second factor belongs to B, whose opposite side is the other leg.',
          C:'5/13 is sin B by itself. That is the value from step 2, stopped one multiplication early — and it is also the cos A the question already handed over.'
        },
        tip:'With one ratio given, draw the triangle and label all three sides before you touch the expression. After that, every ratio for either acute angle is a lookup, and you will not slide from one angle to the other by accident.',
        desmos:'Evaluate (12/5)*(5/13) in Desmos: 0.9231, which is 12/13.',
        desmosLatex:['\\frac{12}{5}\\cdot\\frac{5}{13}']
      },
      {
        id:'RTT-15', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'A 45-45-90 and a 30-60-90 triangle sharing one leg',
        figure: FIG_TWO,
        stem:'In triangle ABC the altitude from A meets side BC at a point D between B and C. Angle B measures 45°, angle C measures 30°, and AD = 6. What is the length of BC, to the nearest tenth?',
        choices:{A:'16.4', B:'9.5', C:'18.0', D:'10.4'},
        correct:'A',
        expCorrect:'The altitude splits ABC into two right triangles that share the leg AD = 6. Step 1, triangle ABD: angle B is 45°, so it is a 45-45-90 and the two legs match — BD = AD = 6. Step 2, triangle ADC: angle C is 30°, and tan 30° = AD/DC, so DC = 6/tan 30° = 6√3 ≈ 10.4. Step 3: BC = BD + DC = 6 + 10.392 = 16.4. (Check: in a 30-60-90 the long leg is √3 times the short one, and 10.392/6 = 1.732 = √3 ✓.)',
        expWrong:{
          B:'9.5 is 6 + 6·tan 30°. It puts DC in the numerator: tan 30° is AD/DC, so DC is 6 DIVIDED by tan 30°, and the side across from the smaller angle has to be the longer one here.',
          C:'18.0 is 6 + 12, taking DC = 12 by treating AD as the short leg and DC as the hypotenuse. In this triangle AD is the leg OPPOSITE the 30°, so the hypotenuse is AC, not DC.',
          D:'10.4 is DC alone. It is the harder half of the work, but BD = 6 still has to be added to reach the full side BC.'
        },
        tip:'When a triangle has two nice angles and one height, the height is the shared leg: solve each half separately and add the two base pieces. Check the 30-60-90 by size — the side facing 60° must be the longer leg, the side facing 30° the shorter one.',
        desmos:'In degree mode evaluate 6+6/tan(30) in Desmos: 16.39.',
        desmosLatex:['6+\\frac{6}{\\tan(30)}']
      },
      {
        id:'RTT-16', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'A right triangle whose legs are in a fixed ratio, with a radical hypotenuse',
        stem:'In right triangle ABC the right angle is at C and BC = 3·AC. The hypotenuse AB has length 4√10. What is the area of triangle ABC?',
        answer:'24',
        expCorrect:'Let AC = a, so BC = 3a and the ratio does the work of a second equation. Step 1: a² + (3a)² = (4√10)². Step 2: the left side is a² + 9a² = 10a², and the right side is 16(10) = 160. Step 3: 10a² = 160, so a² = 16 and a = 4 (the negative root is not a length). Step 4: the legs are 4 and 12, so the area is ½(4)(12) = 24. (Check: 4² + 12² = 16 + 144 = 160, and (4√10)² = 160 ✓.)',
        tip:'Square a radical hypotenuse right away — (4√10)² = 16·10 is a whole number, and the radical disappears before it can cause trouble. Naming the smaller leg a and writing the other one in terms of it turns "two unknowns" into one equation.',
        desmos:'Evaluate 0.5*4*(3*4) in Desmos: 24. To find the leg first, graph y=10x^2-160 and read the positive root, 4.',
        desmosLatex:['y=10x^2-160','0.5\\cdot4\\cdot12']
      }
    ]
  });
})();
