/* SAT Studio question set — Math: Area & Volume (AVL-01 a AVL-12) */
(function(){
  var FIG_SHED =
    '<svg viewBox="0 0 250 196" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A five-sided figure: a rectangle 10 feet wide and 6 feet tall with a triangle sitting on top of it. The base of the triangle is the whole top side of the rectangle and the height of the triangle is 4 feet.">' +
    '<polygon points="55,150 55,66 125,10 195,66 195,150" fill="#ececec" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="55" y1="66" x2="195" y2="66" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<line x1="125" y1="10" x2="125" y2="66" stroke="#324DC7" stroke-width="2" stroke-dasharray="5,4"/>' +
    '<text x="132" y="46" font-size="14" font-family="Georgia,serif" fill="#324DC7">4 ft</text>' +
    '<text x="106" y="170" font-size="14" font-family="Georgia,serif">10 ft</text>' +
    '<line x1="46" y1="66" x2="46" y2="150" stroke="#757575" stroke-width="1"/>' +
    '<text x="14" y="114" font-size="14" font-family="Georgia,serif">6 ft</text>' +
    '<text x="10" y="191" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_ELL =
    '<svg viewBox="0 0 260 196" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An L-shaped garden: a rectangle 12 meters wide and 9 meters tall with a rectangle 5 meters wide and 4 meters tall removed from its top right corner.">' +
    '<polygon points="50,40 134,40 134,88 194,88 194,148 50,148" fill="#ececec" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<path d="M134,40 L194,40 L194,88" fill="none" stroke="#757575" stroke-width="1.5" stroke-dasharray="5,4"/>' +
    '<text x="150" y="34" font-size="13" font-family="Georgia,serif">5 m</text>' +
    '<text x="200" y="68" font-size="13" font-family="Georgia,serif">4 m</text>' +
    '<text x="108" y="166" font-size="13" font-family="Georgia,serif">12 m</text>' +
    '<line x1="42" y1="40" x2="42" y2="148" stroke="#757575" stroke-width="1"/>' +
    '<text x="12" y="98" font-size="13" font-family="Georgia,serif">9 m</text>' +
    '<text x="10" y="191" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_BARN =
    '<svg viewBox="0 0 265 216" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross section of a building: a rectangle 6 meters wide and 4 meters tall with a semicircular roof of radius 3 meters resting on the top side. The building is 10 meters long.">' +
    '<path d="M70,90 A60,60 0 0 1 190,90" fill="#ececec" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="70" y="90" width="120" height="80" fill="#ececec" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="130" cy="90" r="2.5" fill="#1e1e1e"/>' +
    '<line x1="130" y1="90" x2="190" y2="90" stroke="#324DC7" stroke-width="2"/>' +
    '<text x="144" y="84" font-size="13" font-family="Georgia,serif" fill="#324DC7">3 m</text>' +
    '<text x="116" y="186" font-size="13" font-family="Georgia,serif">6 m</text>' +
    '<line x1="200" y1="90" x2="200" y2="170" stroke="#757575" stroke-width="1"/>' +
    '<text x="206" y="136" font-size="13" font-family="Georgia,serif">4 m</text>' +
    '<text x="10" y="199" font-size="11" fill="#757575" font-family="Arial,sans-serif">Cross section. The building is 10 m long.</text>' +
    '<text x="10" y="212" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_BLOCK =
    '<svg viewBox="0 0 265 206" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top view of a square wooden block 10 centimeters by 10 centimeters with a circular hole of radius 3 centimeters drilled through its center. The block is 4 centimeters thick.">' +
    '<rect x="60" y="30" width="120" height="120" fill="#ececec" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="120" cy="90" r="36" fill="#ffffff" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="120" cy="90" r="2.5" fill="#1e1e1e"/>' +
    '<line x1="120" y1="90" x2="156" y2="90" stroke="#324DC7" stroke-width="2"/>' +
    '<text x="124" y="84" font-size="13" font-family="Georgia,serif" fill="#324DC7">3 cm</text>' +
    '<text x="96" y="168" font-size="13" font-family="Georgia,serif">10 cm</text>' +
    '<line x1="190" y1="30" x2="190" y2="150" stroke="#757575" stroke-width="1"/>' +
    '<text x="196" y="94" font-size="13" font-family="Georgia,serif">10 cm</text>' +
    '<text x="10" y="189" font-size="11" fill="#757575" font-family="Arial,sans-serif">Top view. The block is 4 cm thick.</text>' +
    '<text x="10" y="202" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_OPENBOX =
    '<svg viewBox="0 0 250 206" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An open box with no top: the square base measures 6 inches on each side and the height is 5 inches.">' +
    '<polygon points="60,70 160,70 200,45 100,45" fill="#ffffff" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<polygon points="66,69 157,69 194,46 103,46" fill="#f5f5f5" stroke="#757575" stroke-width="1.5"/>' +
    '<polygon points="160,70 200,45 200,125 160,150" fill="#e0e0e0" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<polygon points="60,70 160,70 160,150 60,150" fill="#ececec" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<text x="96" y="172" font-size="13" font-family="Georgia,serif">6 in</text>' +
    '<text x="176" y="156" font-size="13" font-family="Georgia,serif">6 in</text>' +
    '<line x1="50" y1="70" x2="50" y2="150" stroke="#757575" stroke-width="1"/>' +
    '<text x="16" y="116" font-size="13" font-family="Georgia,serif">5 in</text>' +
    '<text x="10" y="189" font-size="11" fill="#757575" font-family="Arial,sans-serif">The box has no top.</text>' +
    '<text x="10" y="202" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_TRAP =
    '<svg viewBox="0 0 250 192" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A trapezoid with a horizontal bottom side of 14 meters and a horizontal top side of 8 meters parallel to it. The left side is vertical and meets the bottom side at a right angle, and the slanted right side measures 10 meters.">' +
    '<polygon points="45,150 45,54 141,54 213,150" fill="#ececec" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="45" y="136" width="14" height="14" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<text x="84" y="46" font-size="14" font-family="Georgia,serif">8 m</text>' +
    '<text x="118" y="170" font-size="14" font-family="Georgia,serif">14 m</text>' +
    '<text x="184" y="98" font-size="14" font-family="Georgia,serif" fill="#324DC7">10 m</text>' +
    '<text x="10" y="187" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_CUBEPYR =
    '<svg viewBox="0 0 250 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A solid made of a cube with edges of 6 inches and a pyramid on top whose square base is the top face of the cube and whose height is labeled h.">' +
    '<polygon points="70,90 170,90 205,65 105,65" fill="#f5f5f5" stroke="#1e1e1e" stroke-width="2"/>' +
    '<polygon points="170,90 205,65 205,165 170,190" fill="#e0e0e0" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="70" y="90" width="100" height="100" fill="#ececec" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<polygon points="137,15 70,90 170,90" fill="#f5f5f5" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<polygon points="137,15 170,90 205,65" fill="#e0e0e0" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="137" y1="15" x2="105" y2="65" stroke="#757575" stroke-width="1.5" stroke-dasharray="4,4"/>' +
    '<line x1="137" y1="15" x2="137" y2="78" stroke="#324DC7" stroke-width="2" stroke-dasharray="5,4"/>' +
    '<text x="147" y="50" font-size="15" font-family="Georgia,serif" font-style="italic" fill="#324DC7">h</text>' +
    '<text x="104" y="210" font-size="14" font-family="Georgia,serif">6 in</text>' +
    '<text x="10" y="225" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-area-volume1',
    title: 'Area & Volume',
    section: 'math',
    level: 'Media',
    description: 'Composite areas and composite solids, drilled and hollow solids, scaling by k² and k³ in both directions, working backwards from a volume, surface area against volume, and cubic units converted to liters.',
    minutes: 20,
    questions: [
      {
        id:'AVL-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Composite area (rectangle + triangle)',
        figure: FIG_SHED,
        stem:'The figure shows the cross section of a shed: a rectangle 10 feet wide and 6 feet tall with a roof in the shape of a triangle whose base is the top side of the rectangle and whose height is 4 feet. What is the area, in square feet, of the cross section?',
        choices:{A:'60', B:'80', C:'70', D:'100'},
        correct:'B',
        expCorrect:'Cut the figure into the two shapes you already have formulas for. Rectangle: 10 × 6 = 60 square feet. Triangle: (1/2)(base)(height) = (1/2)(10)(4) = 20 square feet. Total: 60 + 20 = 80 square feet.',
        expWrong:{
          A:'60 is only the rectangle. The roof triangle still has to be added, and it contributes 20 square feet.',
          C:'70 uses 5 — half of the width — as the base of the triangle. The base of the triangle is the whole top side of the rectangle, 10 feet.',
          D:'100 drops the (1/2) in the area of the triangle: 10 × 4 = 40 is the area of a RECTANGLE 10 by 4, not of the triangle sitting on top.'
        },
        tip:'A composite area is the SUM of simple pieces: cut along a line you can see, apply one formula to each piece, and add at the end. The triangle always keeps its (1/2).',
        desmos:'Type 10*6+(1/2)*10*4 in Desmos and it gives 80. If you get 100, the (1/2) of the triangle fell out along the way.',
        desmosLatex:['10*6+(1/2)*10*4','(1/2)*10*4']
      },
      {
        id:'AVL-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Volume in cubic centimeters converted to liters',
        stem:'A juice carton is a rectangular box that measures 10 centimeters by 6 centimeters by 25 centimeters. Renata empties 4 full cartons into a cooler. How many liters of juice are in the cooler? (1 liter = 1,000 cubic centimeters.)',
        choices:{A:'1.5', B:'60', C:'6,000', D:'6'},
        correct:'D',
        expCorrect:'One carton holds 10 × 6 × 25 = 1,500 cubic centimeters. Four cartons hold 4 × 1,500 = 6,000 cubic centimeters. Now convert to liters: 6,000 ÷ 1,000 = 6 liters. (Check: 6 liters × 1,000 = 6,000 cm³ ✓.)',
        expWrong:{
          A:'1.5 is what ONE carton holds in liters. Renata emptied 4 of them.',
          B:'60 divides 6,000 by 100 instead of by 1,000. One liter is 1,000 cubic centimeters, not 100.',
          C:'6,000 is the volume in cubic CENTIMETERS, the number you have before converting. The question asks for liters.'
        },
        tip:'Two moves, in order: multiply the three dimensions to get cubic centimeters, then divide by 1,000 to get liters. Finish by rereading which unit was asked for, not the one you happened to compute first.',
        desmos:'Type 4*10*6*25/1000 in Desmos and it gives 6. Drop the /1000 and you get 6000, which is the volume in cubic centimeters.',
        desmosLatex:['4*10*6*25/1000','10*6*25']
      },
      {
        id:'AVL-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Composite area (piece removed)',
        figure: FIG_ELL,
        stem:'The figure shows an L-shaped garden: a rectangle 12 meters wide and 9 meters tall with a rectangular patio 5 meters by 4 meters removed from one corner. What is the area, in square meters, of the garden?',
        choices:{A:'88', B:'92', C:'108', D:'128'},
        correct:'A',
        expCorrect:'Take the full rectangle and subtract the piece that was cut out. Full rectangle: 12 × 9 = 108 square meters. Patio removed: 5 × 4 = 20 square meters. Garden: 108 − 20 = 88 square meters. (Cutting the L into two rectangles gives the same thing: 7 × 4 = 28 across the top and 12 × 5 = 60 below, and 28 + 60 = 88 ✓.)',
        expWrong:{
          B:'92 removes 4 × 4 = 16. The patio is 5 by 4, so the area that comes out is 20, not 16.',
          C:'108 is the area of the whole rectangle, as if nothing had been removed.',
          D:'128 ADDS the patio instead of subtracting it. The patio is the part that is not garden.'
        },
        tip:'When a piece is cut out: area = big shape − removed piece. Subtract the AREA of the piece (5 × 4 = 20), never one of its sides. Decomposing into two rectangles is a good way to double-check.',
        desmos:'Type 12*9-5*4 in Desmos and it gives 88. Check it the other way with 7*4+12*5, which also gives 88.',
        desmosLatex:['12*9-5*4','7*4+12*5']
      },
      {
        id:'AVL-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Volume of a composite solid (prism + half-cylinder)',
        figure: FIG_BARN,
        stem:'A storage building is 10 meters long. The figure shows its cross section: a rectangle 6 meters wide and 4 meters tall topped by a semicircular roof with a radius of 3 meters. What is the volume, in cubic meters, of the building?',
        choices:{A:'240 + 90π', B:'45π', C:'240 + 45π', D:'240 + 180π'},
        correct:'C',
        expCorrect:'The solid is a rectangular prism with half of a cylinder lying on top, and both pieces are 10 meters long. Prism: 6 × 4 × 10 = 240. Half-cylinder: (1/2)πr²(length) = (1/2)π(3)²(10) = (1/2)(90π) = 45π. Total: 240 + 45π cubic meters (about 381.4).',
        expWrong:{
          A:'240 + 90π uses a WHOLE cylinder for the roof. The roof is only the top half, so that 90π has to be cut in half.',
          B:'45π is the roof by itself. The rectangular part underneath adds another 240 cubic meters.',
          D:'240 + 180π uses 6 — the width of the building, which is the DIAMETER — as the radius. The radius is 3.'
        },
        tip:'A composite solid is the sum of its pieces, and any prism-shaped piece is (area of the cross section) × (length). Half a cylinder means half of πr²h, and its radius is half the width it spans.',
        desmos:'Type 6*4*10+(1/2)*pi*3^2*10 in Desmos and it gives about 381.4, which is 240 + 45π. Leave out the (1/2) and you get about 522.7 = 240 + 90π.',
        desmosLatex:['6*4*10+(1/2)*pi*3^2*10','240+45*pi']
      },
      {
        id:'AVL-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Volume of a solid with a cylindrical hole',
        figure: FIG_BLOCK,
        stem:'A rectangular block of wood is 10 centimeters long, 10 centimeters wide, and 4 centimeters thick. A cylindrical hole with a radius of 3 centimeters is drilled straight through the block, from the top face to the bottom face. What is the volume, in cubic centimeters, of the wood that remains?',
        choices:{A:'36π', B:'400 − 36π', C:'400 − 12π', D:'400 − 144π'},
        correct:'B',
        expCorrect:'Wood left = whole block − the hole. Block: 10 × 10 × 4 = 400. The hole is a cylinder whose height is the thickness the drill went through, 4: πr²h = π(3)²(4) = 36π. So the wood that remains is 400 − 36π cubic centimeters (about 286.9).',
        expWrong:{
          A:'36π is the volume of the HOLE — exactly the part that was taken away, not the part that is left.',
          C:'400 − 12π forgets to square the radius: π(3)(4) = 12π. The formula is πr²h, so what multiplies is 3² = 9.',
          D:'400 − 144π uses the diameter 6 as the radius: π(6)²(4) = 144π. That is bigger than the whole block (144π ≈ 452), so the volume would come out negative — a signal that the radius is wrong.'
        },
        tip:'A drilled solid = whole solid − the cylinder removed, and the height of that cylinder is the thickness it passes through. Always check whether the number you were handed is the radius or the diameter.',
        desmos:'Type 10*10*4-pi*3^2*4 in Desmos and it gives about 286.9, which is 400 − 36π. Type pi*3^2*4 by itself (about 113.1) and that is only the hole.',
        desmosLatex:['10*10*4-pi*3^2*4','pi*3^2*4']
      },
      {
        id:'AVL-06', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Scaling backwards (volume ratio → length ratio)',
        stem:'The volume of cube B is 27 times the volume of cube A. The edge length of cube B is how many times the edge length of cube A?',
        choices:{A:'3', B:'9', C:'27', D:'√27'},
        correct:'A',
        expCorrect:'If every length is multiplied by k, the volume is multiplied by k³. Here k³ = 27, so k is the cube root of 27, which is 3. (Check with numbers: a cube of edge 2 has volume 8, a cube of edge 6 has volume 216, and 216 = 27 × 8 ✓ — while the edges, 6 and 2, differ by a factor of 3.)',
        expWrong:{
          B:'9 comes from dividing 27 by 3. A cube is undone with a cube ROOT, not by dividing by 3. (9 would be the ratio of the surface areas, since 3² = 9.)',
          C:'27 is the ratio of the VOLUMES, which the question already gave you. Lengths grow by the cube root of that number.',
          D:'√27 ≈ 5.20 takes the square root. The square root is what connects AREA to length; a volume ratio needs the cube root.'
        },
        tip:'Scaling every length by k scales area by k² and volume by k³. When the question gives you the ratio of VOLUMES, take the cube root to get back to the lengths; from a ratio of AREAS, take the square root.',
        desmos:'Type 27^(1/3) in Desmos and it gives 3. Confirm with real cubes: 6^3/2^3 gives 27, and the edges 6 and 2 are a factor of 3 apart.',
        desmosLatex:['27^(1/3)','6^3/2^3']
      },
      {
        id:'AVL-07', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Surface area vs. volume (open-top box)',
        figure: FIG_OPENBOX,
        stem:'The figure shows a box with no top. Its base is a square 6 inches on each side, and its height is 5 inches. What is the total area, in square inches, of the material used to make the box?',
        choices:{A:'120', B:'180', C:'192', D:'156'},
        correct:'D',
        expCorrect:'Count only the faces this box actually has: one square base and four rectangular sides. Base: 6 × 6 = 36. Each side: 6 × 5 = 30, and there are four of them, so 4 × 30 = 120. Total material: 36 + 120 = 156 square inches.',
        expWrong:{
          A:'120 is the four sides only. The box also has a base, which adds 36 square inches of material.',
          B:'180 is the VOLUME, 6 × 6 × 5. That answers a different question, and it would come in cubic inches, not square inches.',
          C:'192 is the surface area of a CLOSED box, 2(36) + 120. This one has no lid, so the 36 is counted once, not twice.'
        },
        tip:'Surface area adds up FACES and comes in square units; volume multiplies three dimensions and comes in cubic units. With an open container, count the faces that exist: an open-top box has 5, not 6.',
        desmos:'Type 6*6+4*6*5 in Desmos and it gives 156. Compare with 6*6*5 = 180: that is the volume in cubic inches, not the material.',
        desmosLatex:['6*6+4*6*5','6*6*5']
      },
      {
        id:'AVL-08', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Volume backwards (prism whose base is a triangle)',
        stem:'A prism has a volume of 360 cubic centimeters. Its two parallel bases are right triangles with legs of 6 centimeters and 8 centimeters. What is the length, in centimeters, of the prism?',
        answer:'15',
        expCorrect:'For any prism, V = (area of the base) × (length). The base is a right triangle, so its area is (1/2)(6)(8) = 24 square centimeters. Then 360 = 24 × length → length = 360/24 = 15 centimeters. (Check: 24 × 15 = 360 ✓.) Answer: 15.',
        expWrong:{},
        tip:'Prism volume = area of the cross section × length. Find the area of the base FIRST, and keep the triangle’s (1/2): using 6 × 8 = 48 instead of 24 cuts the answer in half.',
        desmos:'Type 360/((1/2)*6*8) in Desmos and it gives 15. The denominator (1/2)*6*8 is 24, which is the area of the base triangle.',
        desmosLatex:['360/((1/2)*6*8)','(1/2)*6*8']
      },
      {
        id:'AVL-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Scaling (area ratio → volume ratio)',
        stem:'Two right circular cylinders are similar: every dimension of the larger one is k times the corresponding dimension of the smaller one. The total surface area of the larger cylinder is 25/9 times the total surface area of the smaller one. The volume of the larger cylinder is how many times the volume of the smaller one?',
        choices:{A:'25/9', B:'5/3', C:'125/27', D:'625/81'},
        correct:'C',
        expCorrect:'Areas scale by k², so k² = 25/9 and k = 5/3. Volumes scale by k³, so the volume factor is (5/3)³ = 125/27, about 4.63. (Check with numbers: r = 3, h = 3 gives volume 27π; scaling by 5/3 gives r = 5, h = 5 and volume 125π, and 125π/27π = 125/27 ✓.)',
        expWrong:{
          A:'25/9 is the ratio of the AREAS, which the question already handed you. Volume grows faster than area, so the factor cannot be the same.',
          B:'5/3 is k, the ratio of the LENGTHS. That is the middle step of the problem, not the end of it: volumes need k³.',
          D:'625/81 is (25/9)², squaring the area ratio. The chain runs area → length (square root) → volume (cube), not area → volume (square).'
        },
        tip:'Always route through the lengths. From an AREA ratio take the square root to get k, then cube it for the VOLUME ratio. Skipping that middle step is what produces every wrong answer here.',
        desmos:'Type sqrt(25/9) in Desmos: k = 5/3 ≈ 1.667. Then (5/3)^3 gives about 4.63, which is 125/27.',
        desmosLatex:['sqrt(25/9)','(5/3)^3']
      },
      {
        id:'AVL-10', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Composite area with a missing height',
        figure: FIG_TRAP,
        stem:'The figure shows a trapezoid-shaped lot. The two horizontal sides measure 14 meters and 8 meters, the left side meets the bottom side at a right angle, and the slanted right side is 10 meters long. What is the area, in square meters, of the lot?',
        choices:{A:'94', B:'88', C:'110', D:'112'},
        correct:'B',
        expCorrect:'The height is not given, so build it first. Drop a vertical from the right end of the short side: it cuts off a right triangle whose horizontal leg is 14 − 8 = 6 and whose hypotenuse is the slanted side, 10. Pythagoras: 6² + h² = 10² → h² = 100 − 36 = 64 → h = 8 (the 6-8-10 triple). Now cut the lot into a rectangle 8 by 8 = 64 and that triangle, (1/2)(6)(8) = 24. Total: 64 + 24 = 88 square meters.',
        expWrong:{
          A:'94 splits the figure correctly (rectangle 8 × 8 = 64) but uses the slanted side 10 as the height of the triangle: (1/2)(6)(10) = 30. The triangle’s height is the vertical 8.',
          C:'110 is (1/2)(14 + 8)(10), using the slanted side as the height of the whole figure. The height is the PERPENDICULAR distance between the parallel sides, which is 8.',
          D:'112 is 14 × 8, treating the lot as a rectangle. The top side is shorter than the bottom, so a triangle has to come off.'
        },
        tip:'The height of a trapezoid is the PERPENDICULAR distance between the parallel sides, never the slanted side. If it is missing, get it with Pythagoras from the slant and the horizontal run (long base − short base), then split the figure into a rectangle plus a triangle.',
        desmos:'First the height: type sqrt(10^2-6^2) in Desmos and it gives 8. Then the area: 8*8+(1/2)*6*8 gives 88.',
        desmosLatex:['sqrt(10^2-6^2)','8*8+(1/2)*6*8']
      },
      {
        id:'AVL-11', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volume, unit conversion and rate of filling',
        stem:'An empty rectangular tank is 8 meters long and 4 meters wide. Water flows into the tank at a constant rate of 25 liters per second until the water is 1.5 meters deep. For how many minutes does the water flow? (1 cubic meter = 1,000 liters.)',
        answer:'32',
        expCorrect:'Volume of water needed: 8 × 4 × 1.5 = 48 cubic meters. Convert to liters: 48 × 1,000 = 48,000 liters. At 25 liters per second: 48,000/25 = 1,920 seconds. The question asks for MINUTES: 1,920/60 = 32 minutes. (Check: 32 × 60 × 25 = 48,000 liters ✓.) Answer: 32.',
        expWrong:{},
        tip:'Chain the units in order — dimensions → cubic meters → liters → seconds → minutes — and convert one step at a time. Then reread the question: stopping at 1,920 (that is seconds) is exactly the mistake this kind of item is built to catch.',
        desmos:'Type 8*4*1.5*1000/25/60 in Desmos and it gives 32. Without the /60 you get 1920, which is the time in seconds.',
        desmosLatex:['8*4*1.5*1000/25/60','8*4*1.5*1000']
      },
      {
        id:'AVL-12', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Composite volume backwards (missing height)',
        figure: FIG_CUBEPYR,
        stem:'The figure shows a solid formed by a cube with edges of 6 inches and a pyramid whose square base is the top face of the cube. The total volume of the solid is 288 cubic inches. What is the height, in inches, of the pyramid?',
        choices:{A:'6', B:'2', C:'4', D:'24'},
        correct:'A',
        expCorrect:'Work backwards from the total. The cube contributes 6³ = 216 cubic inches, so the pyramid accounts for 288 − 216 = 72. For a pyramid, V = (1/3)(base area)(height), and the base is the 6 by 6 top face of the cube: 72 = (1/3)(36)h = 12h → h = 6 inches. (Check: 216 + (1/3)(36)(6) = 216 + 72 = 288 ✓.)',
        expWrong:{
          B:'2 comes from solving 72 = 36h, dropping the pyramid’s (1/3). A pyramid is one third of the prism with the same base and height.',
          C:'4 uses (1/2) instead of (1/3): 72 = 18h. The 1/2 belongs to triangles; a pyramid and a cone both carry 1/3.',
          D:'24 treats the TOTAL 288 as the volume of the pyramid. The cube already accounts for 216 of it, so the pyramid is only 72.'
        },
        tip:'With a composite solid, subtract the piece you can compute to isolate the piece you cannot, then put that piece into its own formula. For a pyramid or a cone, multiply by 3 before dividing, so the (1/3) never gets lost.',
        desmos:'Type (288-6^3)*3/6^2 in Desmos and it gives 6. Check the whole thing with 6^3+(1/3)*6^2*6, which gives 288.',
        desmosLatex:['(288-6^3)*3/6^2','6^3+(1/3)*6^2*6']
      }
    ]
  });
})();
