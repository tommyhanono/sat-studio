/* SAT Studio question set — Math: Solid Geometry & Trigonometry — Hard (HMG-01 a HMG-12) */
(function(){
  var FIG_CONE =
    '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right circular cone with height 8 and base radius 6">' +
    '<ellipse cx="110" cy="155" rx="70" ry="20" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="110" y1="25" x2="40" y2="155" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="110" y1="25" x2="180" y2="155" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="110" y1="25" x2="110" y2="155" stroke="#324DC7" stroke-width="1.5" stroke-dasharray="4 3"/>' +
    '<line x1="110" y1="155" x2="180" y2="155" stroke="#324DC7" stroke-width="1.5"/>' +
    '<text x="116" y="98" font-size="16" font-family="Georgia,serif" fill="#324DC7">8</text>' +
    '<text x="140" y="148" font-size="16" font-family="Georgia,serif" fill="#324DC7">6</text>' +
    '<text x="12" y="192" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_TRI =
    '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right triangle with legs 9 and 12 and hypotenuse 15, with angle theta at the lower-right vertex">' +
    '<polygon points="30,140 210,140 30,30" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="30" y="126" width="14" height="14" fill="none" stroke="#1e1e1e" stroke-width="2"/>' +
    '<text x="120" y="158" font-size="16" font-family="Georgia,serif" text-anchor="middle">12</text>' +
    '<text x="8" y="90" font-size="16" font-family="Georgia,serif">9</text>' +
    '<text x="118" y="80" font-size="16" font-family="Georgia,serif" font-style="italic">15</text>' +
    '<text x="184" y="134" font-size="15" font-family="Georgia,serif">θ</text>' +
    '<text x="12" y="170" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-hard-geo',
    title: 'Solid Geometry & Trigonometry — Hard',
    section: 'math',
    level: 'Difícil',
    description: 'Hard solid geometry (volume/surface area, composite & scaled solids) plus triangle similarity and right-triangle trig.',
    minutes: 20,
    questions: [
      {
        id:'HMG-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volumen y área de superficie (esfera)',
        stem:'A sphere has a volume of 288π cubic centimeters. What is the surface area of the sphere, in square centimeters?',
        choices:{A:'36π', B:'144π', C:'72π', D:'216π'},
        correct:'B',
        expCorrect:'Volumen = (4/3)πr³ = 288π → r³ = 288·(3/4) = 216 → r = 6. Área de superficie = 4πr² = 4π(6²) = 4π(36) = 144π.',
        expWrong:{
          A:'36π es πr² = π(36): solo el área de UN círculo máximo, olvidando el factor 4 de la esfera.',
          C:'72π es 2πr². La superficie de una esfera es 4πr², no 2πr².',
          D:'216π usa r³ = 216 directo como respuesta; ese número es un paso intermedio para hallar r, no el área.'
        },
        tip:'Con esferas siempre saca primero el radio del volumen: de (4/3)πr³ despejas r³ y luego r. Con r ya limpio aplicas 4πr². Ambas fórmulas están en el Reference Sheet.'
      },
      {
        id:'HMG-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Efecto de escalar una dimensión (cuadrado)',
        stem:'The radius of a right circular cylinder is multiplied by 3, while its height stays the same. The volume of the new cylinder is how many times the volume of the original cylinder?',
        choices:{A:'3', B:'6', C:'9', D:'27'},
        correct:'C',
        expCorrect:'Volumen = πr²h. El radio aparece al CUADRADO, así que al multiplicar r por 3 el volumen se multiplica por 3² = 9. (La altura no cambia, así que no aporta factor.)',
        expWrong:{
          A:'3 es el factor con que crece el radio, pero el volumen depende de r², no de r.',
          B:'6 es 2×3; no hay razón para duplicar. El radio está al cuadrado, no multiplicado por 2.',
          D:'27 = 3³ sería el factor si escalaras las TRES dimensiones (como en un cubo). Aquí la altura NO cambia, solo el radio.'
        },
        tip:'Regla de escalado: si multiplicas una dimensión por k, cada r al cuadrado aporta k² y cada dimensión al cubo aporta k³. Fíjate en cuántas dimensiones cambian: aquí solo el radio, y está al cuadrado → 3² = 9.'
      },
      {
        id:'HMG-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volumen de sólidos (cono)',
        figure: FIG_CONE,
        stem:'The right circular cone shown has a base radius of 6 and a height of 8. What is the volume of the cone?',
        choices:{A:'96π', B:'288π', C:'144π', D:'128π'},
        correct:'A',
        expCorrect:'Volumen del cono = (1/3)πr²h = (1/3)π(6²)(8) = (1/3)π(36)(8) = (1/3)(288π) = 96π.',
        expWrong:{
          B:'288π es πr²h, la fórmula del CILINDRO. El cono es un tercio de eso: te faltó multiplicar por 1/3.',
          C:'144π usa (1/2)πr²h. El factor del cono es 1/3, no 1/2.',
          D:'128π = (1/3)π(8²)(6): intercambiaste radio y altura. El que va al cuadrado es el radio (6), no la altura.'
        },
        tip:'El cono es 1/3 del cilindro con la misma base y altura. Los dos errores clásicos: olvidar el 1/3 y elevar la altura en vez del radio. Escribe r² primero (6² = 36) y no lo confundas con h.'
      },
      {
        id:'HMG-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Sólidos compuestos (volumen)',
        stem:'A solid is formed by placing a hemisphere of radius 3 on top of a right circular cylinder that also has radius 3 and a height of 10. What is the total volume of the solid?',
        choices:{A:'90π', B:'126π', C:'99π', D:'108π'},
        correct:'D',
        expCorrect:'Cilindro = πr²h = π(3²)(10) = 90π. Hemisferio = (1/2)(4/3)πr³ = (2/3)π(3³) = (2/3)π(27) = 18π. Total = 90π + 18π = 108π.',
        expWrong:{
          A:'90π es solo el cilindro; te faltó sumar el hemisferio de arriba.',
          B:'126π suma una ESFERA completa ((4/3)π·27 = 36π): 90 + 36 = 126. Arriba solo hay media esfera, así que va 18π.',
          C:'99π usa 9π para el domo, como si fuera (1/3)πr³ (fórmula del cono). Un hemisferio es (2/3)πr³ = 18π.'
        },
        tip:'En sólidos compuestos, calcula cada pieza por separado y suma. Cuidado con el hemisferio: es la MITAD de la esfera, (1/2)(4/3)πr³ = (2/3)πr³, no una esfera entera ni un cono.'
      },
      {
        id:'HMG-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Área de superficie (cilindro cerrado)',
        stem:'A closed right circular cylinder has a radius of 4 and a height of 10. What is the total surface area of the cylinder?',
        choices:{A:'80π', B:'112π', C:'96π', D:'224π'},
        correct:'B',
        expCorrect:'Superficie total = 2 tapas + lateral = 2πr² + 2πrh = 2π(4²) + 2π(4)(10) = 32π + 80π = 112π.',
        expWrong:{
          A:'80π es solo el área lateral (2πrh). Un cilindro CERRADO también tiene dos tapas circulares.',
          C:'96π suma el lateral (80π) y UNA sola tapa (16π). Faltó la segunda tapa: son dos, 2πr² = 32π.',
          D:'224π duplica todo el resultado; contaste las superficies dos veces. El total correcto es 112π.'
        },
        tip:'Superficie total de un cilindro cerrado = 2πr² (las DOS tapas) + 2πrh (el rollo lateral). Pregúntate siempre si el sólido tiene tapas o está abierto antes de sumar.'
      },
      {
        id:'HMG-06', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Triángulos semejantes (razón de áreas)',
        stem:'Triangle ABC is similar to triangle DEF, and the ratio of corresponding sides ABC : DEF is 2 : 5. If the area of triangle ABC is 12, what is the area of triangle DEF?',
        choices:{A:'30', B:'24', C:'75', D:'48'},
        correct:'C',
        expCorrect:'En figuras semejantes, la razón de ÁREAS es el cuadrado de la razón de lados: (2/5)² = 4/25. Entonces área(ABC)/área(DEF) = 4/25 → 12/área(DEF) = 4/25 → área(DEF) = 12·(25/4) = 75.',
        expWrong:{
          A:'30 = 12·(5/2) usa la razón LINEAL. Para áreas hay que elevar la razón al cuadrado.',
          B:'24 = 12·2 solo multiplica por el número 2 de la razón; ignora que es una proporción al cuadrado.',
          D:'48 = 12·4 eleva bien al cuadrado pero en la dirección equivocada (multiplica por 4 en vez de por 25/4). DEF es el grande, así que su área es mayor que 75/... es 75.'
        },
        tip:'Semejanza: la razón de áreas es (razón de lados)² y la de volúmenes es (razón de lados)³. Verifica la dirección: el triángulo con lados más grandes (DEF, escala 5) debe tener el área mayor.'
      },
      {
        id:'HMG-07', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Triángulo especial 30-60-90',
        stem:'In a 30-60-90 right triangle, the side opposite the 30° angle has length 5√3. What is the length of the side opposite the 60° angle?',
        answer:'15',
        expCorrect:'En un 30-60-90 los lados son x (opuesto a 30°), x√3 (opuesto a 60°) y 2x (hipotenusa). El lado opuesto a 30° es el corto: x = 5√3. El opuesto a 60° es x√3 = (5√3)(√3) = 5·3 = 15. Respuesta: 15.',
        expWrong:{},
        tip:'En 30-60-90 el lado opuesto al 30° es el más corto (x) y el opuesto al 60° es x√3. Multiplicar por √3 elimina el radical: √3·√3 = 3. Ubica primero cuál lado es el corto antes de escalar.'
      },
      {
        id:'HMG-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Triángulo especial 45-45-90 (diagonal de cuadrado)',
        stem:'A square has a diagonal of length 10. What is the area of the square?',
        choices:{A:'50', B:'100', C:'25', D:'200'},
        correct:'A',
        expCorrect:'La diagonal de un cuadrado forma un triángulo 45-45-90, así que diagonal = lado·√2 → 10 = s√2 → s = 10/√2 = 5√2. Área = s² = (5√2)² = 25·2 = 50. (Atajo: área = diagonal²/2 = 100/2 = 50.)',
        expWrong:{
          B:'100 = 10² usa la diagonal como si fuera el lado. La diagonal es más larga que el lado (factor √2).',
          C:'25 = (10/2)² parte la diagonal a la mitad y la eleva al cuadrado; ese no es el lado del cuadrado.',
          D:'200 = 10²·2 multiplica por 2 en vez de dividir. La fórmula con la diagonal es d²/2.'
        },
        tip:'Truco útil: para un cuadrado, área = diagonal²/2. Sale de que diagonal = s√2, así que s² = d²/2. Reconocer el 45-45-90 dentro del cuadrado te ahorra despejar.'
      },
      {
        id:'HMG-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Trigonometría del triángulo rectángulo (SOHCAHTOA)',
        figure: FIG_TRI,
        stem:'In the right triangle shown, the leg opposite angle θ has length 9, the leg adjacent to angle θ has length 12, and the hypotenuse has length 15. What is the value of cos θ?',
        choices:{A:'3/5', B:'3/4', C:'5/4', D:'4/5'},
        correct:'D',
        expCorrect:'cos θ = adyacente / hipotenusa. El cateto adyacente a θ mide 12 y la hipotenusa 15, así que cos θ = 12/15 = 4/5.',
        expWrong:{
          A:'3/5 es sin θ = opuesto/hipotenusa = 9/15. Te piden el coseno, que usa el cateto ADYACENTE.',
          B:'3/4 es tan θ = opuesto/adyacente = 9/12. No es el coseno.',
          C:'5/4 es el recíproco de 4/5 (eso sería sec θ). El coseno en un triángulo nunca pasa de 1.'
        },
        tip:'SOHCAHTOA: Coseno = Adyacente / Hipotenusa. Identifica primero quién es opuesto y quién adyacente respecto a θ. La terna 9-12-15 es un 3-4-5 multiplicado por 3.'
      },
      {
        id:'HMG-10', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Trigonometría de ángulos complementarios',
        stem:'In a right triangle, the two acute angles are A and B. If sin A = 0.6, what is the value of cos B?',
        choices:{A:'0.4', B:'0.6', C:'0.8', D:'0.36'},
        correct:'B',
        expCorrect:'A y B son complementarios (suman 90°). Para ángulos complementarios, el seno de uno es igual al coseno del otro: cos B = sin(90° − B) = sin A = 0.6.',
        expWrong:{
          A:'0.4 = 1 − 0.6 trata el seno y el coseno como si sumaran 1. Lo que suma 1 es sin²+cos², no sin+cos.',
          C:'0.8 es cos A (por sin²A + cos²A = 1). Pero te piden cos B, y B es el complemento de A.',
          D:'0.36 = 0.6² eleva el seno al cuadrado sin razón. La relación de complementarios es directa, no cuadrática.'
        },
        tip:'Identidad clave del SAT: sin(x) = cos(90° − x). Si dos ángulos son complementarios (como los dos agudos de un triángulo rectángulo), el seno de uno ES el coseno del otro. Sin cálculos: cos B = sin A.'
      },
      {
        id:'HMG-11', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Efecto de escalar una dimensión (área de superficie)',
        stem:'If every edge of a cube is doubled in length, the surface area of the new cube is how many times the surface area of the original cube?',
        choices:{A:'4', B:'2', C:'6', D:'8'},
        correct:'A',
        expCorrect:'El área de superficie depende del cuadrado de la longitud (SA de un cubo = 6s²). Al multiplicar cada arista por 2, el área se multiplica por 2² = 4.',
        expWrong:{
          B:'2 es el factor con que crecen las aristas, pero el área crece con el cuadrado de ese factor.',
          C:'6 es el número de caras del cubo, que no es el factor de crecimiento del área.',
          D:'8 = 2³ es el factor por el que crece el VOLUMEN, no el área. El área usa el cuadrado, 2² = 4.'
        },
        tip:'Escalado por un factor k: longitudes ×k, áreas ×k², volúmenes ×k³. Doblar (k = 2) hace el área ×4 y el volumen ×8. Pregúntate si te piden área (cuadrado) o volumen (cubo).'
      },
      {
        id:'HMG-12', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volumen de sólidos (cono vs. cilindro)',
        stem:'A cone and a cylinder have the same base radius and the same height. The volume of the cylinder is 60 cubic inches. What is the volume of the cone, in cubic inches?',
        answer:'20',
        expCorrect:'Con la misma base y altura, el cono es exactamente 1/3 del cilindro: volumen del cono = (1/3)(volumen del cilindro) = (1/3)(60) = 20. (Formalmente: cilindro = πr²h = 60, cono = (1/3)πr²h = (1/3)(60) = 20.) Respuesta: 20.',
        expWrong:{},
        tip:'Cuando comparten radio y altura, el cono siempre cabe 3 veces dentro del cilindro: cono = (1/3) × cilindro. No necesitas r ni h por separado; basta con dividir el volumen del cilindro entre 3.'
      }
    ]
  });
})();
