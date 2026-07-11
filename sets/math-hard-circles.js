/* SAT Studio question set — Math: Circles & Coordinate Geometry — Hard (HMC-01 a HMC-12) */
(function(){
  var FIG_TANGENT_PT =
    '<svg viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle of radius 5 centered at O with a line tangent at the point (3, 4)">' +
    '<circle cx="90" cy="150" r="60" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="62" y1="54" x2="190" y2="150" stroke="#324DC7" stroke-width="2.5"/>' +
    '<line x1="90" y1="150" x2="126" y2="102" stroke="#1e1e1e" stroke-width="2"/>' +
    '<rect x="112" y="98" width="13" height="13" fill="none" stroke="#1e1e1e" stroke-width="1.5" transform="rotate(37 118 104)"/>' +
    '<circle cx="90" cy="150" r="3" fill="#1e1e1e"/>' +
    '<circle cx="126" cy="102" r="3" fill="#1e1e1e"/>' +
    '<text x="96" y="120" font-size="15" font-family="Georgia,serif" font-style="italic">5</text>' +
    '<text x="132" y="98" font-size="13" font-family="Georgia,serif">(3, 4)</text>' +
    '<text x="74" y="166" font-size="14" font-family="Georgia,serif">O</text>' +
    '<text x="12" y="202" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_EXT_TANGENT =
    '<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle of radius 9 centered at O with a segment from external point P tangent to the circle at point T">' +
    '<circle cx="70" cy="110" r="45" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="70" y1="110" x2="210" y2="110" stroke="#bdbdbd" stroke-width="1.5" stroke-dasharray="4 4"/>' +
    '<line x1="70" y1="110" x2="85" y2="67" stroke="#1e1e1e" stroke-width="2"/>' +
    '<line x1="85" y1="67" x2="210" y2="110" stroke="#324DC7" stroke-width="2.5"/>' +
    '<rect x="80" y="62" width="12" height="12" fill="none" stroke="#1e1e1e" stroke-width="1.5" transform="rotate(70 86 68)"/>' +
    '<circle cx="70" cy="110" r="3" fill="#1e1e1e"/>' +
    '<circle cx="85" cy="67" r="3" fill="#1e1e1e"/>' +
    '<circle cx="210" cy="110" r="3" fill="#1e1e1e"/>' +
    '<text x="58" y="126" font-size="14" font-family="Georgia,serif">O</text>' +
    '<text x="70" y="60" font-size="14" font-family="Georgia,serif">T</text>' +
    '<text x="216" y="114" font-size="14" font-family="Georgia,serif">P</text>' +
    '<text x="60" y="86" font-size="14" font-family="Georgia,serif" font-style="italic">9</text>' +
    '<text x="12" y="182" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-hard-circles',
    title: 'Circles & Coordinate Geometry — Hard',
    section: 'math',
    level: 'Difícil',
    description: 'Hard circle problems — equation of a circle (completing the square), arcs & sectors, tangents, and lines in the coordinate plane.',
    minutes: 20,
    questions: [
      {
        id:'HMC-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Ecuación de la circunferencia (completar cuadrados)',
        stem:'In the xy-plane, the equation x² + y² + 10x − 4y − 7 = 0 represents a circle. What are the coordinates of the center of the circle?',
        choices:{
          A:'(−5, 2)',
          B:'(5, −2)',
          C:'(−10, 4)',
          D:'(10, −4)'
        },
        correct:'A',
        expCorrect:'Completa cuadrados. En x: x² + 10x = (x + 5)² − 25. En y: y² − 4y = (y − 2)² − 4. Sustituyendo: (x + 5)² − 25 + (y − 2)² − 4 − 7 = 0 → (x + 5)² + (y − 2)² = 36. El centro es (h, k) = (−5, 2) y el radio es 6.',
        expWrong:{
          B:'(5, −2) invierte los signos. Ojo: (x + 5)² viene de h = −5, y (y − 2)² viene de k = +2. El signo del centro es opuesto al que ves dentro del paréntesis.',
          C:'(−10, 4) usa los coeficientes lineales completos (10 y −4) sin dividirlos entre 2. Al completar cuadrados tomas la MITAD de cada coeficiente.',
          D:'(10, −4) usa los coeficientes lineales tal cual y además con el signo equivocado. Debes tomar la mitad Y cambiar el signo.'
        },
        tip:'Para pasar de la forma general a la estándar, toma la mitad del coeficiente lineal en x y en y. El centro es (−mitad_x, −mitad_y). Aquí: mitad de 10 es 5 → h = −5; mitad de −4 es −2 → k = +2.'
      },
      {
        id:'HMC-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Área de sector (radianes)',
        stem:'A sector of a circle has a radius of 6 and a central angle measuring 2π/3 radians. What is the area of the sector?',
        choices:{A:'2π', B:'4π', C:'12π', D:'24π'},
        correct:'C',
        expCorrect:'El área de un sector en radianes es (1/2)r²θ. Con r = 6 y θ = 2π/3: área = (1/2)(6²)(2π/3) = (1/2)(36)(2π/3) = 18 · (2π/3) = 12π.',
        expWrong:{
          A:'2π sale de usar r en vez de r²: (1/2)(6)(2π/3) = 2π. La fórmula pide el radio AL CUADRADO.',
          B:'4π es la LONGITUD DEL ARCO (s = rθ = 6 · 2π/3 = 4π), no el área del sector. Son cosas distintas.',
          D:'24π olvida el factor 1/2: r²θ = 36 · 2π/3 = 24π. El área de un sector siempre lleva (1/2).'
        },
        tip:'En radianes: longitud de arco = rθ (un solo r), área de sector = (1/2)r²θ (r al cuadrado y el 1/2). Confundir arco con sector, u olvidar el cuadrado o el 1/2, son las trampas típicas.'
      },
      {
        id:'HMC-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Longitud de arco (radianes)',
        stem:'In a circle with a radius of 10, an arc is intercepted by a central angle measuring 3π/5 radians. What is the length of the arc?',
        choices:{A:'3π', B:'6π', C:'30π', D:'12π'},
        correct:'B',
        expCorrect:'La longitud de arco en radianes es s = rθ. Con r = 10 y θ = 3π/5: s = 10 · (3π/5) = 30π/5 = 6π.',
        expWrong:{
          A:'3π sale de multiplicar por 1/2 sin razón: (1/2)(10)(3π/5) = 3π. La longitud de arco NO lleva el factor 1/2 (ese es del área del sector).',
          C:'30π es el ÁREA del sector, (1/2)r²θ = (1/2)(100)(3π/5) = 30π, no la longitud del arco.',
          D:'12π usa el diámetro (20) en vez del radio: 20 · 3π/5 = 12π. En s = rθ va el radio, no el diámetro.'
        },
        tip:'Arco = rθ con el ángulo en RADIANES. Si el ángulo viniera en grados, tendrías que convertir (×π/180) o usar la fracción del círculo. Aquí ya está en radianes, así que multiplicas directo.'
      },
      {
        id:'HMC-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Recta tangente a una circunferencia',
        figure: FIG_TANGENT_PT,
        stem:'A circle in the xy-plane is centered at the origin with a radius of 5. A line is tangent to the circle at the point (3, 4), as shown. What is the slope of the tangent line?',
        choices:{A:'4/3', B:'3/4', C:'−4/3', D:'−3/4'},
        correct:'D',
        expCorrect:'El radio que llega al punto de tangencia va del origen (0, 0) a (3, 4), con pendiente 4/3. La tangente es PERPENDICULAR al radio en ese punto, así que su pendiente es el recíproco negativo: −3/4.',
        expWrong:{
          A:'4/3 es la pendiente del RADIO, no de la tangente. La tangente es perpendicular al radio, no paralela.',
          B:'3/4 es el recíproco pero le falta el signo negativo. Perpendicular = recíproco NEGATIVO.',
          C:'−4/3 solo le cambió el signo a la pendiente del radio, sin invertir la fracción. Para perpendicular tienes que hacer las dos cosas: invertir Y cambiar el signo.'
        },
        tip:'Regla clave de tangentes: el radio al punto de tangencia es perpendicular a la recta tangente. Saca la pendiente del radio y aplícale el recíproco negativo (invierte la fracción y cámbiale el signo).'
      },
      {
        id:'HMC-05', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Intersección recta-circunferencia (tangencia)',
        stem:'In the xy-plane, the line y = x + c is tangent to the circle x² + y² = 8. What is the positive value of c?',
        choices:{A:'4', B:'2√2', C:'8', D:'2'},
        correct:'A',
        expCorrect:'La recta es tangente cuando su distancia al centro (el origen) es igual al radio. Escribe la recta como x − y + c = 0. La distancia del origen es |c|/√(1² + (−1)²) = |c|/√2. El radio es √8 = 2√2. Igualando: |c|/√2 = 2√2 → |c| = 2√2 · √2 = 4. El valor positivo es c = 4.',
        expWrong:{
          B:'2√2 es el RADIO del círculo, no c. Confundiste la respuesta a mitad de camino: igualaste |c| directo al radio sin multiplicar por √2.',
          C:'8 es r² (el lado derecho de la ecuación del círculo), no el radio ni c. El radio es √8, no 8.',
          D:'2 sale de dividir entre √2 en vez de multiplicar: 2√2/√2 = 2. Al despejar |c| de |c|/√2 = 2√2 debes MULTIPLICAR por √2.'
        },
        tip:'Recta tangente ⇔ distancia del centro a la recta = radio. Usa la fórmula distancia = |Ax₀ + By₀ + C|/√(A² + B²). Es más rápido que sustituir y forzar discriminante = 0, aunque ambos métodos funcionan.'
      },
      {
        id:'HMC-06', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Rectas perpendiculares (pendiente)',
        stem:'Line ℓ passes through the points (2, −1) and (6, 5). Line k is perpendicular to line ℓ. What is the slope of line k?',
        choices:{A:'3/2', B:'2/3', C:'−2/3', D:'−3/2'},
        correct:'C',
        expCorrect:'La pendiente de ℓ es (5 − (−1))/(6 − 2) = 6/4 = 3/2. Como k es perpendicular a ℓ, su pendiente es el recíproco negativo de 3/2, que es −2/3.',
        expWrong:{
          A:'3/2 es la pendiente de ℓ, no de k. Perpendicular significa recíproco negativo, no la misma pendiente.',
          B:'2/3 invirtió bien la fracción pero le falta el signo negativo. Perpendicular = recíproco NEGATIVO.',
          D:'−3/2 le cambió el signo a la pendiente de ℓ sin invertir la fracción. Para perpendicular tienes que invertir Y cambiar el signo.'
        },
        tip:'Dos pasos para perpendiculares: (1) calcula la pendiente con (y₂ − y₁)/(x₂ − x₁); (2) invierte la fracción y cámbiale el signo. Verifica: el producto de dos pendientes perpendiculares debe dar −1 (3/2 · −2/3 = −1 ✓).'
      },
      {
        id:'HMC-07', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Rectas paralelas (ecuación)',
        stem:'In the xy-plane, line ℓ is parallel to the line 4x − 2y = 10 and passes through the point (1, 3). Which of the following is an equation of line ℓ?',
        choices:{
          A:'y = −(1/2)x + 7/2',
          B:'y = 2x + 1',
          C:'y = 2x − 5',
          D:'y = −2x + 5'
        },
        correct:'B',
        expCorrect:'Despeja la recta dada: 4x − 2y = 10 → −2y = −4x + 10 → y = 2x − 5, con pendiente 2. Una recta paralela tiene la misma pendiente, 2. Usando el punto (1, 3): y − 3 = 2(x − 1) → y = 2x + 1. Verifica: 2(1) + 1 = 3 ✓.',
        expWrong:{
          A:'y = −(1/2)x + 7/2 usa la pendiente PERPENDICULAR (−1/2). Paralela significa MISMA pendiente (2), no perpendicular.',
          C:'y = 2x − 5 es la recta original tal cual: tiene la pendiente correcta (2) pero no pasa por (1, 3): 2(1) − 5 = −3, no 3.',
          D:'y = −2x + 5 le cambió el signo a la pendiente. Paralela conserva la pendiente exacta, incluido el signo.'
        },
        tip:'Paralelas = misma pendiente; perpendiculares = recíproco negativo. Para armar la ecuación por un punto, usa la forma punto-pendiente y = y₁ + m(x − x₁), y comprueba metiendo el punto al final.'
      },
      {
        id:'HMC-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Fórmula de distancia',
        stem:'In the xy-plane, what is the distance between the points (−2, 3) and (4, −5)?',
        choices:{A:'√14', B:'2√17', C:'14', D:'10'},
        correct:'D',
        expCorrect:'Distancia = √((x₂ − x₁)² + (y₂ − y₁)²) = √((4 − (−2))² + (−5 − 3)²) = √(6² + (−8)²) = √(36 + 64) = √100 = 10.',
        expWrong:{
          A:'√14 suma las diferencias (6 + 8 = 14) y luego saca raíz, sin elevar al cuadrado primero. Debes elevar CADA diferencia al cuadrado antes de sumar.',
          B:'2√17 = √68 viene de un error de signo en x: usar (4 − 2) = 2 en vez de (4 − (−2)) = 6, dando √(4 + 64). Cuidado al restar un número negativo.',
          C:'14 es 6 + 8, la suma de las distancias horizontal y vertical. Esa no es la distancia recta: hay que usar Pitágoras (la hipotenusa), no sumar los catetos.'
        },
        tip:'La fórmula de distancia es Pitágoras disfrazado. Restar un negativo suma: 4 − (−2) = 6. Eleva al cuadrado ANTES de sumar. Aquí sale la terna 6-8-10, así que la distancia es 10.'
      },
      {
        id:'HMC-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Punto medio (hallar el extremo)',
        stem:'In the xy-plane, M is the midpoint of segment AB. Point A has coordinates (1, −4) and M has coordinates (5, 2). What are the coordinates of point B?',
        choices:{
          A:'(9, 8)',
          B:'(−3, −10)',
          C:'(3, −1)',
          D:'(4, 6)'
        },
        correct:'A',
        expCorrect:'El punto medio cumple M = (A + B)/2, así que B = 2M − A. En x: 2(5) − 1 = 9. En y: 2(2) − (−4) = 4 + 4 = 8. Entonces B = (9, 8). Verifica el punto medio: ((1 + 9)/2, (−4 + 8)/2) = (5, 2) ✓.',
        expWrong:{
          B:'(−3, −10) usa la fórmula al revés (2A − M en vez de 2M − A). El que conoces completo es M; despejas el extremo que falta como 2M − A.',
          C:'(3, −1) es el promedio de A y M, como si M fuera el otro extremo. Pero M es el punto MEDIO, no un extremo: tienes que extrapolar, no promediar.',
          D:'(4, 6) es el desplazamiento M − A (lo que avanzas de A a M). A eso todavía le falta sumárselo a M otra vez para llegar a B.'
        },
        tip:'Si M es el punto medio y conoces un extremo, el otro es B = 2M − A. Piénsalo como un reflejo: B está tan lejos de M como A, pero del lado opuesto. Siempre verifica volviendo a calcular el punto medio.'
      },
      {
        id:'HMC-10', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Ecuación de circunferencia a partir del diámetro',
        stem:'In the xy-plane, the points (−1, 2) and (5, 10) are the endpoints of a diameter of a circle. Which of the following is an equation of the circle?',
        choices:{
          A:'(x + 2)² + (y + 6)² = 25',
          B:'(x − 2)² + (y − 6)² = 100',
          C:'(x − 2)² + (y − 6)² = 25',
          D:'(x − 2)² + (y − 6)² = 5'
        },
        correct:'C',
        expCorrect:'El centro es el punto medio del diámetro: ((−1 + 5)/2, (2 + 10)/2) = (2, 6). El diámetro mide √((5 − (−1))² + (10 − 2)²) = √(36 + 64) = √100 = 10, así que el radio es 5 y r² = 25. Ecuación: (x − 2)² + (y − 6)² = 25.',
        expWrong:{
          A:'(x + 2)² + (y + 6)² invierte los signos del centro: eso daría centro (−2, −6), no (2, 6). El signo dentro del paréntesis es opuesto al del centro.',
          B:'100 usa el DIÁMETRO (10) como radio y lo eleva al cuadrado. El radio es la MITAD del diámetro: 5, y r² = 25.',
          D:'5 es el radio sin elevar al cuadrado. El lado derecho de la ecuación es r², no r. Radio 5 → 25.'
        },
        tip:'Con un diámetro dado: el centro es el punto medio de los extremos, y el radio es la MITAD de la distancia entre ellos. No olvides que el lado derecho de la ecuación es r² (radio al cuadrado).'
      },
      {
        id:'HMC-11', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Ecuación general → radio (completar cuadrados)',
        stem:'The equation x² + y² − 8x + 6y + 21 = 0 represents a circle in the xy-plane. What is the radius of the circle?',
        answer:'2',
        expCorrect:'Completa cuadrados. En x: x² − 8x = (x − 4)² − 16. En y: y² + 6y = (y + 3)² − 9. Sustituyendo: (x − 4)² − 16 + (y + 3)² − 9 + 21 = 0 → (x − 4)² + (y + 3)² = 16 − 9 − ... reordena las constantes: −16 − 9 + 21 = −4, entonces (x − 4)² + (y + 3)² = 4. Como r² = 4, el radio es r = 2.',
        expWrong:{},
        tip:'Al completar cuadrados, mueve TODAS las constantes al lado derecho: −16 − 9 + 21 = −4, y ese −4 pasa como +4. El radio es √(lado derecho), no el lado derecho. Aquí √4 = 2.'
      },
      {
        id:'HMC-12', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Longitud de tangente desde un punto externo',
        figure: FIG_EXT_TANGENT,
        stem:'A circle in the xy-plane is centered at the origin O with a radius of 9. Point P has coordinates (9, 12). A segment is drawn from P tangent to the circle, touching it at point T, as shown. What is the length of segment PT?',
        answer:'12',
        expCorrect:'La distancia de P al centro es OP = √(9² + 12²) = √(81 + 144) = √225 = 15. El radio OT es perpendicular a la tangente PT, así que el triángulo OTP es rectángulo con la hipotenusa OP. Por Pitágoras: PT = √(OP² − OT²) = √(15² − 9²) = √(225 − 81) = √144 = 12.',
        expWrong:{},
        tip:'La tangente es perpendicular al radio en el punto de contacto, así que se forma un triángulo rectángulo con hipotenusa = distancia del punto externo al centro. Longitud de tangente = √(distancia² − radio²). Aquí sale la terna 9-12-15, y luego 9-12-15 otra vez para el 12.'
      }
    ]
  });
})();
