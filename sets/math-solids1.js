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
        expCorrect:'Volumen del prisma rectangular = largo × ancho × alto = 8 × 5 × 4 = 160 pulgadas cúbicas.',
        expWrong:{
          A:'40 es solo 8 × 5, el área de la base. Te faltó multiplicar por la altura 4.',
          C:'184 es el ÁREA SUPERFICIAL total: 2(8·5 + 8·4 + 5·4) = 2(92) = 184. Te pidieron volumen, no área.',
          D:'17 es la suma 8 + 5 + 4. El volumen se obtiene MULTIPLICANDO las tres dimensiones, no sumándolas.'
        },
        tip:'Prisma rectangular: V = l·w·h, directo del Reference Sheet. Chequea las unidades: el volumen siempre va en unidades CÚBICAS (in³), señal de que multiplicaste tres longitudes.',
        desmos:'Usa Desmos como calculadora: escribe 8*5*4 y te da 160. El volumen de una caja es largo × ancho × alto, sin nada raro.',
        desmosLatex:['8*5*4']
      },
      {
        id:'SOL-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Volumen (cilindro)',
        stem:'A cylindrical water tank has a base radius of 4 feet and a height of 9 feet. What is the volume, in cubic feet, of the tank?',
        choices:{A:'36π', B:'72π', C:'144π', D:'576π'},
        correct:'C',
        expCorrect:'Volumen del cilindro = πr²h = π(4)²(9) = π(16)(9) = 144π pies cúbicos.',
        expWrong:{
          A:'36π sale de π(4)(9): usaste el radio SIN elevarlo al cuadrado. La fórmula pide r².',
          B:'72π es el área LATERAL del cilindro, 2πrh = 2π(4)(9). Eso mide superficie, no volumen.',
          D:'576π usa el diámetro (8) en vez del radio: π(8)²(9). En la fórmula va el RADIO.'
        },
        tip:'V = πr²h. Los dos errores clásicos: olvidar el cuadrado del radio y meter el diámetro donde va el radio. Escribe r² primero (4² = 16) y luego multiplica por h.',
        desmos:'Escribe pi*4^2*9 en Desmos y te da ≈452.4, que es 144π. Si te da 113.1 (36π), es porque no elevaste el radio al cuadrado.',
        desmosLatex:['pi*4^2*9', '144*pi']
      },
      {
        id:'SOL-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Volumen (esfera)',
        stem:'A spherical balloon has a radius of 6 centimeters. What is the volume, in cubic centimeters, of the balloon?',
        choices:{A:'288π', B:'144π', C:'216π', D:'48π'},
        correct:'A',
        expCorrect:'Volumen de la esfera = (4/3)πr³ = (4/3)π(6)³ = (4/3)π(216) = 288π centímetros cúbicos.',
        expWrong:{
          B:'144π es el ÁREA SUPERFICIAL de la esfera, 4πr² = 4π(36). Piden volumen, que lleva r³ y el factor 4/3.',
          C:'216π es πr³ sin el factor 4/3. La fórmula completa es (4/3)πr³.',
          D:'48π sale de (4/3)π(6)²: elevaste al CUADRADO en vez de al cubo. El volumen de la esfera lleva r³.'
        },
        tip:'Esfera: V = (4/3)πr³ — está en el Reference Sheet. Chequea dos cosas: que usaste r AL CUBO y que no se te cayó el 4/3. Truco rápido: (4/3)(216) = 4(72) = 288.',
        desmos:'Escribe (4/3)*pi*6^3 en Desmos y te da ≈904.8, que es 288π. Compara: 4*pi*6^2 da 144π, pero esa es el área superficial, no el volumen.',
        desmosLatex:['(4/3)*pi*6^3', '288*pi']
      },
      {
        id:'SOL-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Volumen (cono)',
        stem:'A right circular cone has a base radius of 5 inches and a height of 12 inches. What is the volume, in cubic inches, of the cone?',
        choices:{A:'300π', B:'20π', C:'150π', D:'100π'},
        correct:'D',
        expCorrect:'Volumen del cono = (1/3)πr²h = (1/3)π(5)²(12) = (1/3)π(25)(12) = (1/3)(300π) = 100π pulgadas cúbicas.',
        expWrong:{
          A:'300π es el volumen del CILINDRO con la misma base y altura (πr²h). Al cono le falta el factor 1/3.',
          B:'20π sale de (1/3)π(5)(12): olvidaste elevar el radio al cuadrado.',
          C:'150π usa 1/2 en vez de 1/3. El cono es exactamente UN TERCIO del cilindro, no la mitad.'
        },
        tip:'Cono = un tercio del cilindro con igual base y altura: V = (1/3)πr²h. Calcula πr²h completo (300π) y divide entre 3 al final: 100π.',
        desmos:'Escribe (1/3)*pi*5^2*12 en Desmos y te da ≈314.2, que es 100π. Si te sale el triple (300π), se te olvidó el 1/3 del cono.',
        desmosLatex:['(1/3)*pi*5^2*12', '100*pi']
      },
      {
        id:'SOL-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Volumen → despejar la altura',
        stem:'The volume of a right circular cylinder is 250π cubic centimeters. If the radius of the base is 5 centimeters, what is the height, in centimeters, of the cylinder?',
        choices:{A:'50', B:'10', C:'25', D:'2'},
        correct:'B',
        expCorrect:'De V = πr²h despejas h = V/(πr²) = 250π/(π·5²) = 250π/(25π) = 10 centímetros. (Verifica: π(25)(10) = 250π ✓.)',
        expWrong:{
          A:'50 sale de dividir 250 entre 5: usaste r en vez de r². El denominador correcto es πr² = 25π.',
          C:'25 sale de dividir entre 2πr = 10π (eso es de la fórmula del área lateral). Para volumen divides entre πr².',
          D:'2 sale de dividir 250 entre 125 (r³). Aquí no va ningún cubo: el cilindro usa r².'
        },
        tip:'Trabajar al revés: escribe la fórmula, sustituye lo que te dan y despeja. Los π casi siempre se cancelan solos: 250π/(25π) = 10. Al final verifica metiendo tu respuesta en la fórmula.',
        desmos:'Despeja h = 250π/(π·5²): los π se cancelan, así que escribe 250/5^2 en Desmos y te da 10. Verifica con pi*5^2*10, que da ≈785.4 = 250π.',
        desmosLatex:['250/5^2', 'pi*5^2*10']
      },
      {
        id:'SOL-06', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Densidad (masa = densidad × volumen)',
        stem:'A solid rectangular block of metal measures 10 centimeters by 4 centimeters by 5 centimeters. The density of the metal is 8 grams per cubic centimeter. What is the mass, in grams, of the block? (Mass is equal to density times volume.)',
        answer:'1600',
        expCorrect:'Primero el volumen del bloque: 10 × 4 × 5 = 200 cm³. Después, masa = densidad × volumen = 8 g/cm³ × 200 cm³ = 1600 gramos. Respuesta: 1600.',
        expWrong:{},
        tip:'Densidad = masa/volumen, así que masa = densidad × volumen. Paso 1: calcula el volumen del sólido. Paso 2: multiplica por la densidad. Las unidades te guían: (g/cm³)·(cm³) = g.',
        desmos:'Escribe 10*4*5 en Desmos: el volumen es 200 cm³. Luego la masa: 8*200 = 1600 gramos. Todo en una sola línea: 8*(10*4*5).',
        desmosLatex:['8*(10*4*5)', '10*4*5']
      },
      {
        id:'SOL-07', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Sólidos compuestos (cilindro + semiesfera)',
        figure: FIG_SILO,
        stem:'The grain silo shown is formed by a right circular cylinder with a radius of 3 meters and a height of 8 meters, topped by a hemisphere with the same radius. What is the total volume, in cubic meters, of the silo?',
        choices:{A:'72π', B:'81π', C:'90π', D:'108π'},
        correct:'C',
        expCorrect:'Suma las dos piezas. Cilindro: πr²h = π(3)²(8) = 72π. Semiesfera: la mitad de una esfera = (1/2)(4/3)π(3)³ = (2/3)π(27) = 18π. Total: 72π + 18π = 90π metros cúbicos.',
        expWrong:{
          A:'72π es solo el cilindro. Te faltó sumar la semiesfera de arriba, que aporta 18π.',
          B:'81π sale de tratar el domo como un CONO de altura 3: (1/3)π(9)(3) = 9π. Pero es una semiesfera: (2/3)πr³ = 18π.',
          D:'108π suma la esfera COMPLETA (36π) en vez de la mitad. El domo es media esfera: 18π.'
        },
        tip:'Sólido compuesto = suma de piezas simples. Semiesfera = (1/2)·(4/3)πr³ = (2/3)πr³. Calcula cada pieza por separado y suma al final.',
        desmos:'Escribe pi*3^2*8+(2/3)*pi*3^3 en Desmos y te da ≈282.7, que es 90π. El primer término es el cilindro (72π) y el segundo la semiesfera (18π).',
        desmosLatex:['pi*3^2*8+(2/3)*pi*3^3', '90*pi']
      },
      {
        id:'SOL-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Escala y volumen (factor k³)',
        stem:'The radius of sphere B is 3 times the radius of sphere A. The volume of sphere B is how many times the volume of sphere A?',
        choices:{A:'27', B:'9', C:'3', D:'81'},
        correct:'A',
        expCorrect:'Si el radio se multiplica por k, el volumen se multiplica por k³. Con k = 3: V_B = (4/3)π(3r)³ = (4/3)π(27r³) = 27·V_A. El volumen queda multiplicado por 27.',
        expWrong:{
          B:'9 = 3² es como escala el ÁREA (por ejemplo, la superficial), no el volumen. El volumen es tridimensional: escala con k³.',
          C:'3 es como escalan las LONGITUDES. El volumen multiplica ese factor tres veces: 3·3·3 = 27.',
          D:'81 = 3⁴ no corresponde a nada aquí: longitudes ×3, áreas ×9, volúmenes ×27.'
        },
        tip:'Escala k en las longitudes → áreas ×k², volúmenes ×k³. Viene de que (3r)³ = 27r³: el factor sale al cubo. Aplica para CUALQUIER sólido, no solo esferas.',
        desmos:'El factor de volumen es k³: escribe 3^3 en Desmos y te da 27. Compruébalo con esferas de radio 2 y 6: ((4/3)*pi*6^3)/((4/3)*pi*2^3) también da 27.',
        desmosLatex:['3^3', '((4/3)*pi*6^3)/((4/3)*pi*2^3)']
      },
      {
        id:'SOL-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Volumen → área superficial (cubo)',
        stem:'A cube has a volume of 64 cubic inches. What is the total surface area, in square inches, of the cube?',
        choices:{A:'16', B:'384', C:'24', D:'96'},
        correct:'D',
        expCorrect:'Del volumen sacas la arista: s³ = 64 → s = 4. Cada cara es un cuadrado de área s² = 16, y el cubo tiene 6 caras: 6 × 16 = 96 pulgadas cuadradas.',
        expWrong:{
          A:'16 es el área de UNA sola cara (4²). El cubo tiene 6 caras iguales.',
          B:'384 sale de 6 × 64: multiplicaste por el VOLUMEN en vez del área de una cara (s² = 16).',
          C:'24 sale de 6 × 4: usaste la arista sin elevarla al cuadrado. Cada cara mide s² = 16.'
        },
        tip:'Cadena: volumen → arista (raíz cúbica) → área de una cara (arista²) → ×6 caras. No mezcles: el 64 es volumen y no se usa directo en el área.',
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
          A:'36 es r², no r. Te faltó el último paso: sacar la raíz cuadrada.',
          B:'12 sale de 96/8 sin multiplicar por 3 (eso sería un CILINDRO), y además sería r², no r.',
          C:'2√3 es √12: olvidaste el factor 3 del cono ANTES de sacar la raíz. Primero multiplica 96 por 3.'
        },
        tip:'Para despejar en el cono, quítate el 1/3 de una vez multiplicando todo por 3. Luego divide entre πh y AL FINAL saca la raíz. El error típico es quedarse en r² = 36 y responder 36.',
        desmos:'Despeja r² = 3·96/8: escribe 3*96/8 en Desmos y te da 36, así que r = 6. Verifica con (1/3)*pi*6^2*8, que da ≈301.6 = 96π.',
        desmosLatex:['3*96/8', '(1/3)*pi*6^2*8']
      },
      {
        id:'SOL-11', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Escala combinada (radio y altura)',
        stem:'Cylinder B is obtained from cylinder A by doubling the radius and halving the height. The volume of cylinder B is how many times the volume of cylinder A?',
        answer:'2',
        expCorrect:'V = πr²h. El radio va AL CUADRADO: doblarlo multiplica el volumen por 2² = 4. La altura va lineal: reducirla a la mitad multiplica por 1/2. Efecto total: 4 × (1/2) = 2. El volumen de B es 2 veces el de A. Respuesta: 2.',
        expWrong:{},
        tip:'Cambios combinados: aplícale a cada dimensión su exponente en la fórmula. En πr²h el radio pesa doble (r²) y la altura simple (h). Multiplica los factores: (2)²·(1/2) = 2.',
        desmos:'Escribe 2^2*(1/2) en Desmos: da 2. Pruébalo con números: cilindro A con r=4, h=10 vs cilindro B con r=8, h=5 → (pi*8^2*5)/(pi*4^2*10) también da 2.',
        desmosLatex:['2^2*(1/2)', '(pi*8^2*5)/(pi*4^2*10)']
      },
      {
        id:'SOL-12', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Sólidos compuestos (restar volúmenes)',
        figure: FIG_PIPE,
        stem:'The figure shows the cross section of a cylindrical pipe that is 10 centimeters long. The outer radius of the pipe is 5 centimeters and the inner radius is 3 centimeters. What is the volume, in cubic centimeters, of the material that forms the pipe?',
        choices:{A:'160π', B:'40π', C:'250π', D:'90π'},
        correct:'A',
        expCorrect:'Material = cilindro exterior − cilindro interior (el hueco). Exterior: π(5)²(10) = 250π. Interior: π(3)²(10) = 90π. Material: 250π − 90π = 160π centímetros cúbicos. (Equivale a π(5² − 3²)(10) = π(16)(10).)',
        expWrong:{
          B:'40π sale de π(5 − 3)²(10): restaste los radios ANTES de elevar al cuadrado. Ojo: 5² − 3² = 16, pero (5 − 3)² = 4. No es lo mismo.',
          C:'250π es el cilindro exterior completo, como si el tubo fuera macizo. Hay que restarle el hueco.',
          D:'90π es el volumen del HUECO interior, o sea justo lo que hay que quitar, no el material.'
        },
        tip:'Sólido con hueco = volumen grande − volumen del hueco. Y cuidado con la trampa clásica: a² − b² ≠ (a − b)². Eleva al cuadrado cada radio ANTES de restar.',
        desmos:'Escribe pi*(5^2-3^2)*10 en Desmos y te da ≈502.7, que es 160π. Compara con pi*(5-3)^2*10 (≈125.7 = 40π): restar antes de elevar al cuadrado NO es lo mismo.',
        desmosLatex:['pi*(5^2-3^2)*10', '160*pi']
      }
    ]
  });
})();
