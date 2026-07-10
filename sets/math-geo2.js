/* SAT Studio question set — Math: Geometry & Trigonometry 2 (GE2-01 a GE2-12) */
(function(){
  var FIG_LADDER =
    '<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right triangle: a ladder of length 13 leaning on a wall, base 5 from the wall, reaching height h">' +
    '<line x1="40" y1="20" x2="40" y2="150" stroke="#1e1e1e" stroke-width="3"/>' +
    '<line x1="40" y1="150" x2="200" y2="150" stroke="#1e1e1e" stroke-width="3"/>' +
    '<line x1="40" y1="40" x2="150" y2="150" stroke="#324DC7" stroke-width="3"/>' +
    '<rect x="40" y="136" width="14" height="14" fill="none" stroke="#1e1e1e" stroke-width="2"/>' +
    '<text x="86" y="86" font-size="16" font-family="Georgia,serif" font-style="italic" fill="#324DC7">13</text>' +
    '<text x="90" y="168" font-size="16" font-family="Georgia,serif">5</text>' +
    '<text x="20" y="98" font-size="16" font-family="Georgia,serif" font-style="italic">h</text>' +
    '<text x="12" y="176" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_CONE =
    '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right circular cone with base radius 3 and height 4">' +
    '<ellipse cx="110" cy="150" rx="60" ry="18" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="50" y1="150" x2="110" y2="30" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="170" y1="150" x2="110" y2="30" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="110" y1="150" x2="110" y2="30" stroke="#757575" stroke-width="1.5" stroke-dasharray="5,4"/>' +
    '<line x1="110" y1="150" x2="170" y2="150" stroke="#324DC7" stroke-width="2"/>' +
    '<text x="135" y="145" font-size="15" font-family="Georgia,serif" fill="#324DC7">3</text>' +
    '<text x="116" y="95" font-size="15" font-family="Georgia,serif" font-style="italic">4</text>' +
    '<text x="12" y="184" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-geo2',
    title: 'Math — Geometry & Trig 2',
    section: 'math',
    level: 'Difícil',
    description: 'More Geometry & Trig: circles (arcs, sectors, equations), triangles & similarity, area/volume, and right-triangle trig.',
    minutes: 16,
    questions: [
      {
        id:'GE2-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Área del sector circular',
        stem:'A circle has a radius of 6. A sector of the circle is bounded by a central angle of 120°. What is the area of the sector?',
        choices:{A:'4π', B:'12π', C:'36π', D:'6π'},
        correct:'B',
        expCorrect:'Área del sector = (ángulo central / 360°) × área del círculo. Área total = πr² = π(6)² = 36π. Sector = (120/360)(36π) = (1/3)(36π) = 12π.',
        expWrong:{
          A:'4π sale de tomar (120/360) del radio o de un cálculo con r sin elevar al cuadrado. Debes usar el área πr² = 36π.',
          C:'36π es el área del círculo COMPLETO (360°), no solo el sector de 120°.',
          D:'6π confunde con longitud de arco (fracción × circunferencia). Aquí piden ÁREA, así que usa πr².'
        },
        tip:'Sector = fracción del área: (ángulo/360) × πr². Arco = fracción de la circunferencia: (ángulo/360) × 2πr. No mezcles área con perímetro.'
      },
      {
        id:'GE2-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Volumen del cono',
        figure: FIG_CONE,
        stem:'A right circular cone has a base radius of 3 and a height of 4. What is the volume of the cone?',
        choices:{A:'12π', B:'36π', C:'48π', D:'16π'},
        correct:'A',
        expCorrect:'Volumen del cono = (1/3)πr²h = (1/3)π(3)²(4) = (1/3)π(9)(4) = (1/3)(36π) = 12π.',
        expWrong:{
          B:'36π es πr²h sin el factor (1/3): eso sería el volumen de un CILINDRO con el mismo radio y altura. El cono es un tercio de eso.',
          C:'48π usa la altura al cuadrado o mezcla los números; la fórmula es (1/3)πr²h con r=3, h=4.',
          D:'16π eleva la altura (4²=16) en vez del radio. Se eleva el RADIO al cuadrado, no la altura.'
        },
        tip:'El cono lleva (1/3) adelante: V = (1/3)πr²h. El olvido del 1/3 es el error clásico — el cono es exactamente un tercio del cilindro que lo contiene.'
      },
      {
        id:'GE2-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Teorema de Pitágoras (problema de palabras)',
        figure: FIG_LADDER,
        stem:'A 13-foot ladder leans against a vertical wall. The base of the ladder is 5 feet from the wall. How many feet up the wall does the top of the ladder reach?',
        choices:{A:'8', B:'12', C:'18', D:'14'},
        correct:'B',
        expCorrect:'La escalera (13) es la hipotenusa, la distancia al muro (5) es un cateto, y la altura h es el otro cateto. Pitágoras: 5² + h² = 13² → 25 + h² = 169 → h² = 144 → h = 12. (Terna 5-12-13.)',
        expWrong:{
          A:'8 sale de restar 13 − 5 = 8. Los lados de un triángulo rectángulo no se restan directamente; hay que usar Pitágoras con los cuadrados.',
          C:'18 sale de sumar 13 + 5 = 18. Eso no tiene sentido: la altura no puede ser mayor que la escalera.',
          D:'14 confunde la terna; con hipotenusa 13 y cateto 5 el otro cateto es 12, no 14.'
        },
        tip:'Con problemas de escaleras/rampas, la escalera es la HIPOTENUSA. Memoriza las ternas: 3-4-5, 5-12-13, 8-15-17. Aquí 5-12-13 sale al instante.'
      },
      {
        id:'GE2-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Ecuación general de la circunferencia (centro)',
        stem:'In the xy-plane, the equation x² + y² − 10x + 4y + 13 = 0 represents a circle. What are the coordinates of the center of the circle?',
        choices:{A:'(−5, 2)', B:'(10, −4)', C:'(−10, 4)', D:'(5, −2)'},
        correct:'D',
        expCorrect:'Completa cuadrados. En x: x² − 10x = (x − 5)² − 25. En y: y² + 4y = (y + 2)² − 4. Queda (x − 5)² + (y + 2)² − 25 − 4 + 13 = 0 → (x − 5)² + (y + 2)² = 16. El centro es (5, −2).',
        expWrong:{
          A:'(−5, 2) invierte los signos: al completar cuadrados obtienes (x − 5) y (y + 2), que dan centro (5, −2), no (−5, 2).',
          B:'(10, −4) usa los coeficientes lineales tal cual. El centro es la MITAD de esos coeficientes (con signo opuesto): −(−10)/2 = 5 y −(4)/2 = −2.',
          C:'(−10, 4) toma los coeficientes lineales directos sin dividir entre 2 ni cambiar el signo correctamente.'
        },
        tip:'Truco rápido: para x²+y²+Dx+Ey+F=0, el centro es (−D/2, −E/2). Aquí (−(−10)/2, −(4)/2) = (5, −2). Completar cuadrados confirma lo mismo.'
      },
      {
        id:'GE2-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Triángulo especial 30-60-90',
        stem:'In right triangle ABC, angle C is the right angle and angle A measures 30°. The side opposite the 30° angle has length 9. What is the length of the hypotenuse?',
        choices:{A:'9√3', B:'4.5', C:'18', D:'9√2'},
        correct:'C',
        expCorrect:'En un 30-60-90 los lados son x (frente a 30°), x√3 (frente a 60°) y 2x (hipotenusa). El lado opuesto al 30° es x = 9, así que la hipotenusa = 2x = 18.',
        expWrong:{
          A:'9√3 es el lado opuesto al ángulo de 60°, no la hipotenusa. La hipotenusa es 2x = 18.',
          B:'4.5 divide 9 entre 2, invirtiendo la relación. El lado corto es x = 9, y la hipotenusa es 2x, así que se MULTIPLICA por 2.',
          D:'9√2 corresponde al triángulo 45-45-90, no al 30-60-90. Aquí no aparece √2.'
        },
        tip:'30-60-90 → lados x : x√3 : 2x (corto, largo, hipotenusa). El lado opuesto al 30° es siempre el más corto (x), y la hipotenusa es el doble de ese.'
      },
      {
        id:'GE2-06', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Trigonometría del triángulo rectángulo (tangente)',
        stem:'In a right triangle, one of the acute angles is θ. The side opposite θ has length 7 and the side adjacent to θ has length 24. What is the value of tan θ?',
        choices:{A:'7/25', B:'24/7', C:'24/25', D:'7/24'},
        correct:'D',
        expCorrect:'SOHCAHTOA: tan θ = opuesto / adyacente = 7/24. (La hipotenusa sería √(7²+24²)=√625=25, pero la tangente no la usa.)',
        expWrong:{
          A:'7/25 es sin θ (opuesto/hipotenusa), usando la hipotenusa 25. La tangente NO usa la hipotenusa.',
          B:'24/7 es el recíproco: adyacente/opuesto. Eso sería 1/tan θ (la cotangente), no tan θ.',
          C:'24/25 es cos θ (adyacente/hipotenusa). Te piden la tangente, que es opuesto/adyacente.'
        },
        tip:'Tangente = Opuesto / Adyacente (la T de TOA). No necesitas la hipotenusa para la tangente. Ojo con el orden: opuesto ARRIBA, adyacente abajo.'
      },
      {
        id:'GE2-07', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Triángulos semejantes (razón de áreas)',
        stem:'Triangle ABC is similar to triangle XYZ. The ratio of a side of triangle ABC to the corresponding side of triangle XYZ is 2 to 3. If the area of triangle ABC is 20, what is the area of triangle XYZ?',
        choices:{A:'30', B:'45', C:'13.5', D:'40'},
        correct:'B',
        expCorrect:'En figuras semejantes, la razón de áreas es el CUADRADO de la razón de lados. Razón de lados = 2/3, así que razón de áreas = (2/3)² = 4/9. Entonces 20 / Área(XYZ) = 4/9 → Área(XYZ) = 20 × (9/4) = 45.',
        expWrong:{
          A:'30 usa la razón de lados 2/3 directo (20 × 3/2 = 30), olvidando ELEVAR AL CUADRADO la razón para áreas.',
          C:'13.5 aplica la razón al revés (20 × 4/9), achicando el área cuando XYZ es el triángulo más grande.',
          D:'40 solo duplica 20; no corresponde a ninguna razón correcta entre los triángulos.'
        },
        tip:'Semejanza: la razón de ÁREAS = (razón de lados)². La de VOLÚMENES = (razón de lados)³. Elevar al cuadrado/cubo es el paso que casi todos olvidan.'
      },
      {
        id:'GE2-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Distancia entre dos puntos (círculo/coordenadas)',
        stem:'In the xy-plane, a circle has its center at the point (1, 2) and passes through the point (5, 5). What is the radius of the circle?',
        choices:{A:'7', B:'25', C:'5', D:'√7'},
        correct:'C',
        expCorrect:'El radio es la distancia del centro (1, 2) al punto (5, 5). Distancia = √((5−1)² + (5−2)²) = √(4² + 3²) = √(16 + 9) = √25 = 5.',
        expWrong:{
          A:'7 suma las diferencias 4 + 3 = 7. La distancia no es la suma; hay que elevar al cuadrado, sumar y sacar raíz.',
          B:'25 es r² (16 + 9), es decir la distancia al cuadrado. Falta sacar la raíz cuadrada para obtener el radio.',
          D:'√7 sale de sumar las diferencias antes de elevar (4+3=7) y luego sacar raíz. El orden correcto es elevar primero, sumar después.'
        },
        tip:'Distancia = √(Δx² + Δy²). El radio de un círculo es la distancia centro→punto del borde. Aquí sale la terna 3-4-5, así que r = 5.'
      },
      {
        id:'GE2-09', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volumen de la esfera',
        stem:'A sphere has a radius of 3. What is the volume of the sphere, in terms of π? (Enter your answer as the coefficient of π. For example, if the volume is 10π, enter 10.)',
        answer:'36',
        expCorrect:'Volumen de la esfera = (4/3)πr³ = (4/3)π(3)³ = (4/3)π(27) = (4 × 27)/3 × π = 108/3 × π = 36π. El coeficiente de π es 36.',
        expWrong:{},
        tip:'Esfera: V = (4/3)πr³ (el radio va al CUBO, no al cuadrado). Está en el Reference Sheet. Con r = 3: 3³ = 27, y (4/3)(27) = 36.'
      },
      {
        id:'GE2-10', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Relación entre sen y cos de ángulos complementarios',
        stem:'In a right triangle, the two acute angles are A and B. If sin A = 0.6, what is the value of cos B?',
        choices:{A:'0.6', B:'0.8', C:'0.4', D:'1.6'},
        correct:'A',
        expCorrect:'En un triángulo rectángulo los dos ángulos agudos son complementarios (A + B = 90°). Para ángulos complementarios, sin A = cos B. Por eso cos B = sin A = 0.6. (El opuesto a A es el adyacente a B, así que ambas razones usan el mismo lado sobre la hipotenusa.)',
        expWrong:{
          B:'0.8 es cos A (usando sin²A + cos²A = 1: cos A = √(1−0.36) = 0.8), pero te piden cos B, no cos A. Y cos B = sin A = 0.6.',
          C:'0.4 sale de restar 1 − 0.6. No hay ninguna identidad que dé eso; la relación es sin A = cos B directamente.',
          D:'1.6 suma 1 + 0.6. Un coseno nunca puede ser mayor que 1, así que descártalo de inmediato.'
        },
        tip:'Identidad clave del SAT: para ángulos complementarios (que suman 90°), sin(x) = cos(90° − x). En un triángulo rectángulo los dos agudos son complementarios, así que sin A = cos B siempre.'
      },
      {
        id:'GE2-11', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Área usando triángulo 45-45-90 / diagonal',
        stem:'A square has a diagonal of length 10√2. What is the area of the square?',
        choices:{A:'100', B:'200', C:'50', D:'100√2'},
        correct:'A',
        expCorrect:'La diagonal de un cuadrado de lado s es s√2 (por el 45-45-90). Aquí s√2 = 10√2, así que s = 10. Área = s² = 10² = 100.',
        expWrong:{
          B:'200 eleva la diagonal al cuadrado: (10√2)² = 200. Pero eso es el doble del área; el área es s², con s = 10, no la diagonal al cuadrado.',
          C:'50 sale de tomar la mitad de la diagonal al cuadrado de forma incorrecta o de usar (1/2)d·d mal aplicado.',
          D:'100√2 mezcla el lado con la diagonal; el área de un cuadrado es un número entero de unidades², sin √2 aquí.'
        },
        tip:'Diagonal del cuadrado = lado × √2. Despeja el lado primero (divide la diagonal entre √2), LUEGO eleva al cuadrado para el área. No eleves la diagonal directamente.'
      },
      {
        id:'GE2-12', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Longitud de arco (despejar el ángulo)',
        stem:'A circle has a radius of 10. An arc of this circle has a length of 4π. What is the measure, in degrees, of the central angle that intercepts this arc?',
        answer:'72',
        expCorrect:'Longitud de arco = (ángulo/360) × 2πr. La circunferencia es 2π(10) = 20π. Entonces 4π = (ángulo/360)(20π) → 4π/20π = ángulo/360 → 1/5 = ángulo/360 → ángulo = 360/5 = 72°.',
        expWrong:{},
        tip:'El arco es una fracción de la circunferencia: arco/circunferencia = ángulo/360. Arma esa proporción (4π/20π = 1/5) y multiplica por 360. Aquí da 72°.'
      }
    ]
  });
})();
