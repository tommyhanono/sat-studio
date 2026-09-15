/* SAT Studio question set — Math: Solid Geometry & Volume (SOL-01 a SOL-12) */
(function(){
  var FIG_SILO =
    '<svg viewBox="0 0 250 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A silo formed by a right circular cylinder with radius 3 meters and height 8 meters, topped by a hemisphere with the same radius">' +
    '<path d="M70,70 A50,50 0 0 1 170,70" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="70" y1="70" x2="70" y2="165" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="170" y1="70" x2="170" y2="165" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<ellipse cx="120" cy="165" rx="50" ry="12" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="70" y1="70" x2="170" y2="70" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<circle cx="120" cy="70" r="2.5" fill="#1e1e1e"/>' +
    '<text x="134" y="63" font-size="14" font-family="Georgia,serif" font-style="italic">3 m</text>' +
    '<line x1="186" y1="70" x2="186" y2="165" stroke="#757575" stroke-width="1"/>' +
    '<line x1="181" y1="70" x2="191" y2="70" stroke="#757575" stroke-width="1"/>' +
    '<line x1="181" y1="165" x2="191" y2="165" stroke="#757575" stroke-width="1"/>' +
    '<text x="194" y="122" font-size="14" font-family="Georgia,serif" font-style="italic">8 m</text>' +
    '<text x="10" y="198" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_PIPE =
    '<svg viewBox="0 0 260 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross section of a cylindrical pipe shown as two concentric circles: the outer radius is 5 centimeters, the inner radius is 3 centimeters, and the pipe is 10 centimeters long">' +
    '<circle cx="105" cy="90" r="70" fill="#ececec" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="105" cy="90" r="42" fill="#ffffff" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="105" cy="90" r="2.5" fill="#1e1e1e"/>' +
    '<line x1="105" y1="90" x2="175" y2="90" stroke="#324DC7" stroke-width="2"/>' +
    '<line x1="105" y1="90" x2="105" y2="48" stroke="#324DC7" stroke-width="2"/>' +
    '<text x="181" y="94" font-size="13" font-family="Georgia,serif">5 cm</text>' +
    '<text x="110" y="66" font-size="13" font-family="Georgia,serif">3 cm</text>' +
    '<text x="10" y="184" font-size="11" fill="#757575" font-family="Arial,sans-serif">Cross section. The pipe is 10 cm long.</text>' +
    '<text x="10" y="199" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-solids1',
    title: 'Solid Geometry & Volume — Focus',
    section: 'math',
    level: 'Media',
    description: 'Volumes and surface areas of solids, composite solids, density, and the effect of scaling dimensions.',
    minutes: 16,
    questions: [
      {
        id:'SOL-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Volumen (prisma rectangular)',
        stem:'A rectangular storage box has a length of 8 inches, a width of 5 inches, and a height of 4 inches. What is the volume, in cubic inches, of the box?',
        choices:{A:'40', B:'160', C:'184', D:'17'},
        correct:'B',
        expCorrect:'Volume of a rectangular prism = length × width × height = 8 × 5 × 4 = 160 cubic inches.',
        expWrong:{
          A:'40 is only 8 × 5, the area of the base. You forgot to multiply by the height 4.',
          C:'184 is the total SURFACE AREA: 2(8·5 + 8·4 + 5·4) = 2(92) = 184. They asked for volume, not area.',
          D:'17 is the sum 8 + 5 + 4. Volume comes from MULTIPLYING the three dimensions, not adding them.'
        },
        tip:'Rectangular prism: V = l·w·h, straight from the Reference Sheet. Check the units: volume always comes in CUBIC units (in³), a sign that you multiplied three lengths.',
        desmos:'Usa Desmos como calculadora: escribe 8*5*4 y te da 160. El volumen de una caja es largo × ancho × alto, sin nada raro.',
        desmosLatex:['8*5*4']
      },
      {
        id:'SOL-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Volumen (cilindro)',
        stem:'A cylindrical water tank has a base radius of 4 feet and a height of 9 feet. What is the volume, in cubic feet, of the tank?',
        choices:{A:'36π', B:'72π', C:'144π', D:'576π'},
        correct:'C',
        expCorrect:'Volume of the cylinder = πr²h = π(4)²(9) = π(16)(9) = 144π cubic feet.',
        expWrong:{
          A:'36π comes from π(4)(9): you used the radius WITHOUT squaring it. The formula calls for r².',
          B:'72π is the LATERAL area of the cylinder, 2πrh = 2π(4)(9). That measures surface, not volume.',
          D:'576π uses the diameter (8) instead of the radius: π(8)²(9). The formula takes the RADIUS.'
        },
        tip:'V = πr²h. The two classic errors: forgetting to square the radius and plugging in the diameter where the radius goes. Write r² first (4² = 16) and then multiply by h.',
        desmos:'Escribe pi*4^2*9 en Desmos y te da ≈452.4, que es 144π. Si te da 113.1 (36π), es porque no elevaste el radio al cuadrado.',
        desmosLatex:['pi*4^2*9', '144*pi']
      },
      {
        id:'SOL-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Volumen (esfera)',
        stem:'A spherical balloon has a radius of 6 centimeters. What is the volume, in cubic centimeters, of the balloon?',
        choices:{A:'288π', B:'144π', C:'216π', D:'48π'},
        correct:'A',
        expCorrect:'Volume of the sphere = (4/3)πr³ = (4/3)π(6)³ = (4/3)π(216) = 288π cubic centimeters.',
        expWrong:{
          B:'144π is the SURFACE AREA of the sphere, 4πr² = 4π(36). They want volume, which uses r³ and the 4/3 factor.',
          C:'216π is πr³ without the 4/3 factor. The full formula is (4/3)πr³.',
          D:'48π sale de (4/3)π(6)²: elevaste al CUADRADO en vez de al cubo. El volumen de la esfera lleva r³.'
        },
        tip:'Sphere: V = (4/3)πr³ — it is on the Reference Sheet. Check two things: that you used r CUBED and that the 4/3 did not fall out. Quick trick: (4/3)(216) = 4(72) = 288.',
        desmos:'Escribe (4/3)*pi*6^3 en Desmos y te da ≈904.8, que es 288π. Compara: 4*pi*6^2 da 144π, pero esa es el área superficial, no el volumen.',
        desmosLatex:['(4/3)*pi*6^3', '288*pi']
      },
      {
        id:'SOL-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Volumen (cono)',
        stem:'A right circular cone has a base radius of 5 inches and a height of 12 inches. What is the volume, in cubic inches, of the cone?',
        choices:{A:'300π', B:'20π', C:'150π', D:'100π'},
        correct:'D',
        expCorrect:'Volume of the cone = (1/3)πr²h = (1/3)π(5)²(12) = (1/3)π(25)(12) = (1/3)(300π) = 100π cubic inches.',
        expWrong:{
          A:'300π is the volume of the CYLINDER with the same base and height (πr²h). The cone is missing the 1/3 factor.',
          B:'20π sale de (1/3)π(5)(12): olvidaste elevar el radio al cuadrado.',
          C:'150π uses 1/2 instead of 1/3. A cone is exactly ONE THIRD of the cylinder, not half.'
        },
        tip:'A cone is one third of the cylinder with the same base and height: V = (1/3)πr²h. Compute the full πr²h (300π) and divide by 3 at the end: 100π.',
        desmos:'Escribe (1/3)*pi*5^2*12 en Desmos y te da ≈314.2, que es 100π. Si te sale el triple (300π), se te olvidó el 1/3 del cono.',
        desmosLatex:['(1/3)*pi*5^2*12', '100*pi']
      },
      {
        id:'SOL-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Volumen → despejar la altura',
        stem:'The volume of a right circular cylinder is 250π cubic centimeters. If the radius of the base is 5 centimeters, what is the height, in centimeters, of the cylinder?',
        choices:{A:'50', B:'10', C:'25', D:'2'},
        correct:'B',
        expCorrect:'From V = πr²h you solve h = V/(πr²) = 250π/(π·5²) = 250π/(25π) = 10 centimeters. (Check: π(25)(10) = 250π ✓.)',
        expWrong:{
          A:'50 comes from dividing 250 by 5: you used r instead of r². The correct denominator is πr² = 25π.',
          C:'25 comes from dividing by 2πr = 10π (that belongs to the lateral-area formula). For volume you divide by πr².',
          D:'2 comes from dividing 250 by 125 (r³). There is no cube here: a cylinder uses r².'
        },
        tip:'Working backwards: write the formula, substitute what you are given and solve. The π almost always cancels on its own: 250π/(25π) = 10. At the end verify by plugging your answer into the formula.',
        desmos:'Despeja h = 250π/(π·5²): los π se cancelan, así que escribe 250/5^2 en Desmos y te da 10. Verifica con pi*5^2*10, que da ≈785.4 = 250π.',
        desmosLatex:['250/5^2', 'pi*5^2*10']
      },
      {
        id:'SOL-06', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Densidad (masa = densidad × volumen)',
        stem:'A solid rectangular block of metal measures 10 centimeters by 4 centimeters by 5 centimeters. The density of the metal is 8 grams per cubic centimeter. What is the mass, in grams, of the block? (Mass is equal to density times volume.)',
        answer:'1600',
        expCorrect:'First the volume of the block: 10 × 4 × 5 = 200 cm³. Then, mass = density × volume = 8 g/cm³ × 200 cm³ = 1600 grams. Answer: 1600.',
        expWrong:{},
        tip:'Density = mass/volume, so mass = density × volume. Step 1: compute the volume of the solid. Step 2: multiply by the density. The units guide you: (g/cm³)·(cm³) = g.',
        desmos:'Escribe 10*4*5 en Desmos: el volumen es 200 cm³. Luego la masa: 8*200 = 1600 gramos. Todo en una sola línea: 8*(10*4*5).',
        desmosLatex:['8*(10*4*5)', '10*4*5']
      },
      {
        id:'SOL-07', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Composite solids (cylinder + hemisphere)',
        figure: FIG_SILO,
        stem:'The grain silo shown is formed by a right circular cylinder with a radius of 3 meters and a height of 8 meters, topped by a hemisphere with the same radius. What is the total volume, in cubic meters, of the silo?',
        choices:{A:'72π', B:'81π', C:'90π', D:'108π'},
        correct:'C',
        expCorrect:'Add the two pieces. Cylinder: πr²h = π(3)²(8) = 72π. Hemisphere: half a sphere = (1/2)(4/3)π(3)³ = (2/3)π(27) = 18π. Total: 72π + 18π = 90π cubic meters.',
        expWrong:{
          A:'72π is only the cylinder. You forgot to add the hemisphere on top, which contributes 18π.',
          B:'81π comes from treating the dome as a CONE of height 3: (1/3)π(9)(3) = 9π. But it is a hemisphere: (2/3)πr³ = 18π.',
          D:'108π suma la esfera COMPLETA (36π) en vez de la mitad. El domo es media esfera: 18π.'
        },
        tip:'Composite solid = the sum of simple pieces. Hemisphere = (1/2)·(4/3)πr³ = (2/3)πr³. Compute each piece separately and add at the end.',
        desmos:'Escribe pi*3^2*8+(2/3)*pi*3^3 en Desmos y te da ≈282.7, que es 90π. El primer término es el cilindro (72π) y el segundo la semiesfera (18π).',
        desmosLatex:['pi*3^2*8+(2/3)*pi*3^3', '90*pi']
      },
      {
        id:'SOL-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Escala y volumen (factor k³)',
        stem:'The radius of sphere B is 3 times the radius of sphere A. The volume of sphere B is how many times the volume of sphere A?',
        choices:{A:'27', B:'9', C:'3', D:'81'},
        correct:'A',
        expCorrect:'If the radius is multiplied by k, the volume is multiplied by k³. With k = 3: V_B = (4/3)π(3r)³ = (4/3)π(27r³) = 27·V_A. The volume ends up multiplied by 27.',
        expWrong:{
          B:'9 = 3² is how AREA scales (surface area, for instance), not volume. Volume is three-dimensional: it scales with k³.',
          C:'3 is how LENGTHS scale. Volume multiplies that factor three times: 3·3·3 = 27.',
          D:'81 = 3⁴ corresponds to nothing here: lengths ×3, areas ×9, volumes ×27.'
        },
        tip:'Scale k on the lengths → areas ×k², volumes ×k³. It comes from (3r)³ = 27r³: the factor gets cubed. It applies to ANY solid, not just spheres.',
        desmos:'El factor de volumen es k³: escribe 3^3 en Desmos y te da 27. Compruébalo con esferas de radio 2 y 6: ((4/3)*pi*6^3)/((4/3)*pi*2^3) también da 27.',
        desmosLatex:['3^3', '((4/3)*pi*6^3)/((4/3)*pi*2^3)']
      },
      {
        id:'SOL-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Volume → surface area (cube)',
        stem:'A cube has a volume of 64 cubic inches. What is the total surface area, in square inches, of the cube?',
        choices:{A:'16', B:'384', C:'24', D:'96'},
        correct:'D',
        expCorrect:'From the volume you get the edge: s³ = 64 → s = 4. Each face is a square of area s² = 16, and a cube has 6 faces: 6 × 16 = 96 square inches.',
        expWrong:{
          A:'16 is the area of ONE face (4²). A cube has 6 identical faces.',
          B:'384 comes from 6 × 64: you multiplied by the VOLUME instead of the area of one face (s² = 16).',
          C:'24 comes from 6 × 4: you used the edge without squaring it. Each face measures s² = 16.'
        },
        tip:'The chain: volume → edge (cube root) → area of one face (edge²) → ×6 faces. Do not mix them up: the 64 is a volume and is not used directly in the area.',
        desmos:'Primero la arista: escribe 64^(1/3) en Desmos y te da 4. Luego el área superficial: 6*4^2 te da 96.',
        desmosLatex:['64^(1/3)', '6*4^2']
      },
      {
        id:'SOL-10', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volumen → despejar el radio (cono)',
        stem:'A right circular cone has a volume of 96π cubic inches and a height of 8 inches. What is the radius, in inches, of the base of the cone?',
        choices:{A:'36', B:'12', C:'2√3', D:'6'},
        correct:'D',
        expCorrect:'De V = (1/3)πr²h: 96π = (1/3)πr²(8). Multiplica ambos lados por 3: 288π = 8πr² → r² = 288/8 = 36 → r = 6 pulgadas. (Verifica: (1/3)π(36)(8) = 96π ✓.)',
        expWrong:{
          A:'36 is r², not r. The last step is missing: take the square root.',
          B:'12 comes from 96/8 without multiplying by 3 (that would be a CYLINDER), and besides it would be r², not r.',
          C:'2√3 is √12: you forgot the cone’s factor of 3 BEFORE taking the root. First multiply 96 by 3.'
        },
        tip:'To solve within a cone, clear the 1/3 in one go by multiplying everything by 3. Then divide by πh and take the square root LAST. The typical error is stopping at r² = 36 and answering 36.',
        desmos:'Despeja r² = 3·96/8: escribe 3*96/8 en Desmos y te da 36, así que r = 6. Verifica con (1/3)*pi*6^2*8, que da ≈301.6 = 96π.',
        desmosLatex:['3*96/8', '(1/3)*pi*6^2*8']
      },
      {
        id:'SOL-11', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Escala combinada (radio y altura)',
        stem:'Cylinder B is obtained from cylinder A by doubling the radius and halving the height. The volume of cylinder B is how many times the volume of cylinder A?',
        answer:'2',
        expCorrect:'V = πr²h. The radius is SQUARED: doubling it multiplies the volume by 2² = 4. The height is linear: halving it multiplies by 1/2. Total effect: 4 × (1/2) = 2. The volume of B is 2 times that of A. Answer: 2.',
        expWrong:{},
        tip:'Combined changes: give each dimension its exponent from the formula. In πr²h the radius counts double (r²) and the height once (h). Multiply the factors: (2)²·(1/2) = 2.',
        desmos:'Escribe 2^2*(1/2) en Desmos: da 2. Pruébalo con números: cilindro A con r=4, h=10 vs cilindro B con r=8, h=5 → (pi*8^2*5)/(pi*4^2*10) también da 2.',
        desmosLatex:['2^2*(1/2)', '(pi*8^2*5)/(pi*4^2*10)']
      },
      {
        id:'SOL-12', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Composite solids (subtracting volumes)',
        figure: FIG_PIPE,
        stem:'The figure shows the cross section of a cylindrical pipe that is 10 centimeters long. The outer radius of the pipe is 5 centimeters and the inner radius is 3 centimeters. What is the volume, in cubic centimeters, of the material that forms the pipe?',
        choices:{A:'160π', B:'40π', C:'250π', D:'90π'},
        correct:'A',
        expCorrect:'Material = outer cylinder − inner cylinder (the hollow). Outer: π(5)²(10) = 250π. Inner: π(3)²(10) = 90π. Material: 250π − 90π = 160π cubic centimeters. (Equivalently π(5² − 3²)(10) = π(16)(10).)',
        expWrong:{
          B:'40π comes from π(5 − 3)²(10): you subtracted the radii BEFORE squaring them. Careful: 5² − 3² = 16, but (5 − 3)² = 4. Not the same.',
          C:'250π is the full outer cylinder, as if the tube were solid. You still have to subtract the hollow.',
          D:'90π is the volume of the inner HOLLOW, that is, exactly what has to be removed, not the material.'
        },
        tip:'A solid with a hollow = the big volume − the volume of the hollow. And watch the classic trap: a² − b² ≠ (a − b)². Square each radius BEFORE subtracting.',
        desmos:'Escribe pi*(5^2-3^2)*10 en Desmos y te da ≈502.7, que es 160π. Compara con pi*(5-3)^2*10 (≈125.7 = 40π): restar antes de elevar al cuadrado NO es lo mismo.',
        desmosLatex:['pi*(5^2-3^2)*10', '160*pi']
      }
    ]
  });
})();
