/* SAT Studio question set — Math: Mock 1 Review (targeted) — Hard (M1M-01 a M1M-14) */
(function(){
  var FIG_TANGENT =
    '<svg viewBox="0 0 240 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centered at O with radius 13; a line is tangent to the circle at the point (5, 12)">' +
    '<circle cx="85" cy="125" r="60" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="56" y1="48" x2="160" y2="92" stroke="#324DC7" stroke-width="2.5"/>' +
    '<line x1="85" y1="125" x2="108" y2="70" stroke="#1e1e1e" stroke-width="2"/>' +
    '<path d="M108,70 L119,75 L114,86 L103,81 Z" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<circle cx="85" cy="125" r="3" fill="#1e1e1e"/>' +
    '<circle cx="108" cy="70" r="3" fill="#1e1e1e"/>' +
    '<text x="99" y="96" font-size="15" font-family="Georgia,serif" font-style="italic">13</text>' +
    '<text x="113" y="64" font-size="13" font-family="Georgia,serif">(5, 12)</text>' +
    '<text x="66" y="140" font-size="14" font-family="Georgia,serif">O</text>' +
    '<text x="10" y="198" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_RIGHT =
    '<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right triangle ABC with the right angle at B, where AB = 15, BC = 8, and AC = 17">' +
    '<polygon points="30,140 200,140 200,40" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="188" y="128" width="12" height="12" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<path d="M52,140 A22,22 0 0,0 48,126" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<text x="108" y="158" font-size="15" font-family="Georgia,serif" font-style="italic">15</text>' +
    '<text x="207" y="96" font-size="15" font-family="Georgia,serif" font-style="italic">8</text>' +
    '<text x="96" y="84" font-size="15" font-family="Georgia,serif" font-style="italic">17</text>' +
    '<text x="20" y="153" font-size="14" font-family="Georgia,serif">A</text>' +
    '<text x="203" y="154" font-size="14" font-family="Georgia,serif">B</text>' +
    '<text x="203" y="44" font-size="14" font-family="Georgia,serif">C</text>' +
    '<text x="10" y="173" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_306090 =
    '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A 30-60-90 right triangle with hypotenuse 12; the acute angles measure 30 degrees and 60 degrees, and x is the length of the side opposite the 60-degree angle">' +
    '<polygon points="40,140 190,140 40,53" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="40" y="128" width="12" height="12" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<text x="120" y="88" font-size="15" font-family="Georgia,serif" font-style="italic">12</text>' +
    '<text x="108" y="158" font-size="15" font-family="Georgia,serif" font-style="italic">x</text>' +
    '<text x="158" y="134" font-size="13" font-family="Georgia,serif">30°</text>' +
    '<text x="48" y="72" font-size="13" font-family="Georgia,serif">60°</text>' +
    '<text x="10" y="164" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_SIMILAR =
    '<svg viewBox="0 0 340 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two similar triangles. Triangle ABC has AB = 6 and BC = 9. The larger similar triangle DEF has DE = 10 and side EF labeled x. Vertex A corresponds to D, B to E, and C to F">' +
    '<polygon points="20,125 60,45 115,125" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<polygon points="165,140 230,25 320,140" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<text x="22" y="86" font-size="14" font-family="Georgia,serif" font-style="italic">6</text>' +
    '<text x="92" y="82" font-size="14" font-family="Georgia,serif" font-style="italic">9</text>' +
    '<text x="172" y="84" font-size="14" font-family="Georgia,serif" font-style="italic">10</text>' +
    '<text x="282" y="84" font-size="14" font-family="Georgia,serif" font-style="italic">x</text>' +
    '<text x="10" y="133" font-size="13" font-family="Georgia,serif">A</text>' +
    '<text x="55" y="40" font-size="13" font-family="Georgia,serif">B</text>' +
    '<text x="117" y="136" font-size="13" font-family="Georgia,serif">C</text>' +
    '<text x="153" y="149" font-size="13" font-family="Georgia,serif">D</text>' +
    '<text x="226" y="20" font-size="13" font-family="Georgia,serif">E</text>' +
    '<text x="323" y="149" font-size="13" font-family="Georgia,serif">F</text>' +
    '<text x="10" y="168" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-mock1review',
    title: 'Mock 1 Review — Math',
    section: 'math',
    level: 'Difícil',
    description: 'Targeted review of the Math topics you missed on Mock 1: circles, polynomial functions, probability, fractional exponents, and right-triangle trig.',
    minutes: 20,
    questions: [
      {
        id:'M1M-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Ecuación de la circunferencia (completar cuadrados)',
        stem:'In the xy-plane, the equation x² + y² − 6x + 8y − 11 = 0 represents a circle. What are the coordinates of the center of the circle?',
        choices:{
          A:'(−3, 4)',
          B:'(3, −4)',
          C:'(6, −8)',
          D:'(−6, 8)'
        },
        correct:'B',
        expCorrect:'Completa cuadrados. En x: x² − 6x = (x − 3)² − 9. En y: y² + 8y = (y + 4)² − 16. Sustituyendo: (x − 3)² − 9 + (y + 4)² − 16 − 11 = 0 → (x − 3)² + (y + 4)² = 36. El centro es (h, k) = (3, −4) y el radio es 6.',
        expWrong:{
          A:'(−3, 4) invierte los signos. Ojo: (x − 3)² viene de h = +3, y (y + 4)² viene de k = −4. El signo del centro es opuesto al que ves dentro del paréntesis.',
          C:'(6, −8) usa los coeficientes lineales completos (−6 y 8) sin dividirlos entre 2. Al completar cuadrados tomas la MITAD de cada coeficiente.',
          D:'(−6, 8) usa los coeficientes tal cual y además con el signo equivocado. Debes tomar la mitad Y cambiar el signo.'
        },
        tip:'De la forma general a la estándar: toma la MITAD de cada coeficiente lineal y cámbiale el signo. Mitad de −6 es −3 → h = 3; mitad de 8 es 4 → k = −4. Centro (3, −4).',
        desmos:'Grafica la ecuación tal cual: escribe x^2+y^2-6x+8y-11=0 y Desmos dibuja la circunferencia. Su centro está en (3, -4). Si prefieres, escribe la forma estándar (x-3)^2+(y+4)^2=36 y verás el mismo círculo.',
        desmosLatex:['x^2+y^2-6x+8y-11=0', '(x-3)^2+(y+4)^2=36']
      },
      {
        id:'M1M-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Área de sector (grados)',
        stem:'A sector of a circle has a radius of 8 and a central angle measuring 135°. What is the area of the sector?',
        choices:{A:'24π', B:'6π', C:'3π', D:'64π'},
        correct:'A',
        expCorrect:'Un ángulo de 135° cubre 135/360 = 3/8 del círculo. Área del sector = (3/8) · área del círculo = (3/8) · π · 8² = (3/8) · 64π = 24π. (Comprobación: (135/360) · π · 64 ≈ 75.4 = 24π ✓.)',
        expWrong:{
          B:'6π es la LONGITUD DEL ARCO, (3/8) · 2π · 8 = 6π, no el área. El área usa π·r², no 2π·r.',
          C:'3π olvida elevar el radio al cuadrado: (3/8) · π · 8 = 3π. La fórmula pide r AL CUADRADO.',
          D:'64π es el área del círculo COMPLETO (π·8²). Solo quieres la fracción 3/8 de esa área.'
        },
        tip:'Con el ángulo en grados, el sector es (θ/360) del círculo. Área = (θ/360) · π · r². No olvides elevar el radio al cuadrado (π·r²), y no lo confundas con el arco (2·π·r).',
        desmos:'Un sector de 135° es 135/360 del círculo. Usa Desmos como calculadora: escribe (135/360)*pi*8^2 y te da ≈75.4, que es 24π. Ojo: va π·r² (radio al cuadrado), no π·r.',
        desmosLatex:['(135/360)*pi*8^2', '24*pi']
      },
      {
        id:'M1M-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Recta tangente a una circunferencia',
        figure: FIG_TANGENT,
        stem:'A circle in the xy-plane is centered at the origin with a radius of 13. A line is tangent to the circle at the point (5, 12), as shown. What is the slope of the tangent line?',
        choices:{A:'12/5', B:'5/12', C:'−12/5', D:'−5/12'},
        correct:'D',
        expCorrect:'El radio que llega al punto de tangencia va del origen (0, 0) a (5, 12), con pendiente 12/5. La tangente es PERPENDICULAR al radio en ese punto, así que su pendiente es el recíproco negativo: −5/12.',
        expWrong:{
          A:'12/5 es la pendiente del RADIO, no de la tangente. La tangente es perpendicular al radio, no paralela.',
          B:'5/12 es el recíproco pero le falta el signo negativo. Perpendicular = recíproco NEGATIVO.',
          C:'−12/5 solo le cambió el signo a la pendiente del radio, sin invertir la fracción. Para perpendicular tienes que hacer las dos cosas.'
        },
        tip:'La tangente es perpendicular al radio en el punto de contacto. Saca la pendiente del radio (Δy/Δx) y aplícale el recíproco negativo: invierte la fracción y cámbiale el signo.',
        desmos:'Grafica x^2+y^2=169 y marca el punto (5,12). El radio a ese punto tiene pendiente 12/5, así que la tangente (perpendicular) tiene pendiente -5/12. Grafica y=-5(x-5)/12+12 y verás que roza el círculo justo en (5,12).',
        desmosLatex:['x^2+y^2=169', '(5,12)', 'y=-5(x-5)/12+12']
      },
      {
        id:'M1M-04', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Ceros y multiplicidad (cruzar vs. tocar)',
        stem:'The polynomial p is defined by p(x) = (x + 2)³(x − 1)²(x − 4). At how many distinct values of x does the graph of y = p(x) cross the x-axis?',
        choices:{A:'1', B:'3', C:'2', D:'6'},
        correct:'C',
        expCorrect:'Un cero de multiplicidad IMPAR cruza el eje; uno de multiplicidad PAR solo lo toca y rebota. Los ceros son x = −2 (mult. 3, impar → cruza), x = 1 (mult. 2, par → toca) y x = 4 (mult. 1, impar → cruza). Cruza en 2 valores: x = −2 y x = 4.',
        expWrong:{
          A:'1 cuenta un solo cruce, pero hay dos factores de multiplicidad impar: (x + 2)³ y (x − 4). Ambos cruzan.',
          B:'3 es el total de ceros DISTINTOS, no cuántos cruzan. En x = 1 la gráfica solo toca (multiplicidad par).',
          D:'6 es el grado del polinomio (3 + 2 + 1), no el número de cruces.'
        },
        tip:'Multiplicidad IMPAR → cruza el eje; multiplicidad PAR → toca y rebota. Cuenta solo los factores con exponente impar para saber cuántas veces cruza.',
        desmos:'Grafica y=(x+2)^3(x-1)^2(x-4). Fíjate: en x=-2 y en x=4 la curva CRUZA el eje (multiplicidad impar), y en x=1 solo lo toca y rebota (multiplicidad par). Cruza en 2 valores.',
        desmosLatex:['y=(x+2)^3(x-1)^2(x-4)']
      },
      {
        id:'M1M-05', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Comportamiento en los extremos (end behavior)',
        stem:'The function f is defined by f(x) = −3x⁴ + 2x³ − x + 5. Which statement describes the end behavior of the graph of f?',
        choices:{
          A:'As x → −∞, f(x) → +∞; and as x → +∞, f(x) → +∞',
          B:'As x → −∞, f(x) → −∞; and as x → +∞, f(x) → −∞',
          C:'As x → −∞, f(x) → −∞; and as x → +∞, f(x) → +∞',
          D:'As x → −∞, f(x) → +∞; and as x → +∞, f(x) → −∞'
        },
        correct:'B',
        expCorrect:'El comportamiento en los extremos lo manda el término principal, −3x⁴. El grado es PAR (4) y el coeficiente principal es negativo, así que ambos extremos van hacia −∞: cuando x → −∞, f(x) → −∞; y cuando x → +∞, f(x) → −∞.',
        expWrong:{
          A:'Ambos extremos hacia +∞ sería un grado PAR con coeficiente POSITIVO. El −3 invierte los dos extremos hacia abajo.',
          C:'Extremos opuestos (uno baja, otro sube) corresponden a un grado IMPAR, no a un cuártico. Un grado par manda ambos extremos al mismo lado.',
          D:'También son extremos opuestos, propios de un grado impar. Un cuártico nunca manda los extremos en sentidos contrarios.'
        },
        tip:'Solo manda el término de mayor grado. Grado PAR → los dos extremos van al mismo lado; coeficiente negativo → ambos hacia abajo. Aquí −3x⁴: abajo y abajo.',
        desmos:'Grafica y=-3x^4+2x^3-x+5 y haz zoom out. Las dos ramas se van hacia abajo (hacia -∞): grado par + coeficiente principal negativo = ambos extremos hacia abajo.',
        desmosLatex:['y=-3x^4+2x^3-x+5']
      },
      {
        id:'M1M-06', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Ecuaciones racionales (soluciones extrañas)',
        stem:'What are all real solutions to the equation  24/(x² − 9) + 1 = 4/(x − 3) ?',
        choices:{A:'x = 1 only', B:'x = 3 only', C:'x = 1 and x = 3', D:'There is no real solution'},
        correct:'A',
        expCorrect:'Como x² − 9 = (x − 3)(x + 3), multiplica todo por (x − 3)(x + 3): 24 + (x² − 9) = 4(x + 3) → x² + 15 = 4x + 12 → x² − 4x + 3 = 0 → (x − 1)(x − 3) = 0 → x = 1 o x = 3. Pero x = 3 anula los denominadores, así que es una solución EXTRAÑA y se descarta. Queda solo x = 1. (Comprobación x = 1: 24/(−8) + 1 = −2, y 4/(−2) = −2 ✓.)',
        expWrong:{
          B:'x = 3 hace cero los denominadores (x − 3 y x² − 9), así que no está en el dominio: es extraña, no válida.',
          C:'x = 1 y x = 3 incluye la raíz extraña. Siempre revisa que ninguna solución anule un denominador.',
          D:'Sí hay solución: x = 1 funciona perfectamente. Solo x = 3 se descarta.'
        },
        tip:'Resuelve la ecuación racional normal, pero DESCARTA cualquier valor que haga cero un denominador. Esas son soluciones extrañas. Aquí x = 3 se cae.',
        desmos:'Grafica y=24/(x^2-9)+1 y y=4/(x-3); se cruzan en x=1. En x=3 los denominadores se hacen 0, así que esa raíz es extraña y se descarta. Queda solo x=1.',
        desmosLatex:['y=24/(x^2-9)+1', 'y=4/(x-3)']
      },
      {
        id:'M1M-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Probabilidad condicional (tabla de doble entrada)',
        stem:'A group of 100 people at a conference were asked whether they prefer coffee or tea. The results are shown in the two-way table below, organized by role.<br><br>Students — Coffee: 48, Tea: 27, Total: 75<br>Teachers — Coffee: 12, Tea: 13, Total: 25<br>Total — Coffee: 60, Tea: 40, Total: 100<br><br>If one of the 100 people is selected at random and that person prefers coffee, what is the probability that the person is a teacher?',
        choices:{A:'12/25', B:'3/25', C:'1/4', D:'1/5'},
        correct:'D',
        expCorrect:'Es P(profesor | café). Te dan que la persona toma café, así que el universo son los 60 que toman café. De esos, 12 son profesores. P = 12/60 = 1/5.',
        expWrong:{
          A:'12/25 invierte la condición: eso es P(café | profesor), dividir entre los 25 profesores. Aquí el grupo dado es "café", no "profesor".',
          B:'3/25 es 12/100, la probabilidad CONJUNTA (profesor y café). El denominador debe ser la columna de café (60), no el total.',
          C:'1/4 es 25/100, la probabilidad MARGINAL de ser profesor, ignorando la condición de café.'
        },
        tip:'Condicional "dado que A": el denominador es el total de A, no el gran total. "Dado que toma café" → divides entre los 60 de café, no entre 100.',
        desmos:'Probabilidad condicional: "dado que toma café". El denominador es solo la columna de café (60), no el total. Escribe 12/60 en Desmos y te da 0.2, o sea 1/5.',
        desmosLatex:['12/60']
      },
      {
        id:'M1M-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Probabilidad condicional (tabla de doble entrada)',
        stem:'At a clinic, 80 patients were given an allergy test. The two-way table below shows the results, organized by age group.<br><br>Under 30 — Positive: 18, Negative: 22, Total: 40<br>30 or older — Positive: 12, Negative: 28, Total: 40<br>Total — Positive: 30, Negative: 50, Total: 80<br><br>If one of the patients who tested negative is selected at random, what is the probability that the patient is under 30?',
        choices:{A:'11/20', B:'11/40', C:'11/25', D:'1/2'},
        correct:'C',
        expCorrect:'Es P(menor de 30 | negativo). El grupo dado son los 50 que salieron negativos. De esos, 22 son menores de 30. P = 22/50 = 11/25.',
        expWrong:{
          A:'11/20 es 22/40: condicionaste sobre la fila "menor de 30" en vez de la columna "negativo". El grupo dado es negativo (50).',
          B:'11/40 es 22/80, la probabilidad CONJUNTA. El denominador debe ser los 50 que dieron negativo, no el total.',
          D:'1/2 es 40/80, la probabilidad MARGINAL de ser menor de 30, ignorando la condición de "negativo".'
        },
        tip:'La palabra clave es "dado que": fija el grupo (columna de negativos = 50) y ese es tu denominador. Luego cuentas cuántos de ese grupo cumplen la otra condición.',
        desmos:'Te dicen "dado que salió negativo", así que el denominador es la columna de negativos (50). Escribe 22/50 en Desmos y te da 0.44, que es 11/25.',
        desmosLatex:['22/50']
      },
      {
        id:'M1M-09', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Mediana a partir de una tabla de frecuencias',
        stem:'The frequency table below shows the number of siblings reported by each of 20 students.<br><br>0 siblings: 4 students<br>1 sibling: 6 students<br>2 siblings: 5 students<br>3 siblings: 3 students<br>4 siblings: 2 students<br><br>What is the median number of siblings for these 20 students?',
        answer:'1.5',
        expCorrect:'Con 20 datos, la mediana es el promedio del 10.º y 11.º valores ordenados. Frecuencias acumuladas: cuatro 0 (posiciones 1–4), seis 1 (posiciones 5–10), cinco 2 (posiciones 11–15). El 10.º valor es 1 y el 11.º es 2, así que la mediana es (1 + 2)/2 = 1.5.',
        expWrong:{},
        tip:'Con n par, la mediana es el promedio de los dos valores centrales (posiciones n/2 y n/2 + 1). Con 20 datos: promedio del 10.º y 11.º. Usa las frecuencias acumuladas para ubicarlos.',
        desmos:'Con 20 datos, la mediana es el promedio del 10.º y 11.º valores ordenados. Escribe median(0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,3,3,3,4,4) y Desmos te da 1.5. También sale de (1+2)/2.',
        desmosLatex:['median(0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,3,3,3,4,4)', '(1+2)/2']
      },
      {
        id:'M1M-10', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponentes fraccionarios',
        stem:'Which of the following is equivalent to (16x⁸)^(3/4), where x > 0?',
        choices:{A:'8x⁶', B:'12x⁶', C:'64x⁶', D:'2x⁶'},
        correct:'A',
        expCorrect:'Reparte el exponente 3/4 a cada factor: 16^(3/4) · (x⁸)^(3/4). Como 16 = 2⁴, tenemos 16^(3/4) = (2⁴)^(3/4) = 2³ = 8. Y (x⁸)^(3/4) = x^(8·3/4) = x⁶. El resultado es 8x⁶. (Comprobación con x = 1: 16^(3/4) = 8 ✓.)',
        expWrong:{
          B:'12x⁶ multiplica 16 · (3/4) = 12, tratando el exponente como un factor. El 3/4 es raíz cuarta y luego cubo, no una multiplicación.',
          C:'64x⁶ saca la raíz CUADRADA de 16 (=4) y la eleva al cubo (=64). El denominador 4 pide raíz CUARTA: 2³ = 8.',
          D:'2x⁶ saca bien la raíz cuarta de 16 (=2) pero olvida elevarla al cubo. Falta el numerador 3 del exponente.'
        },
        tip:'a^(m/n) = (raíz n de a)^m. Reparte el exponente a cada factor y, con potencias de x, multiplica exponentes: (x⁸)^(3/4) = x⁶.',
        desmos:'El exponente 3/4 es raíz cuarta y luego al cubo. Escribe 16^(3/4) en Desmos y te da 8; con la x, (x^8)^(3/4)=x^6. Resultado 8x^6.',
        desmosLatex:['16^(3/4)']
      },
      {
        id:'M1M-11', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponentes fraccionarios (evaluar)',
        stem:'What is the value of 81^(3/4) − 16^(1/2) ?',
        answer:'23',
        expCorrect:'81^(3/4) es la raíz cuarta de 81 elevada al cubo: (81^(1/4))³ = 3³ = 27. Y 16^(1/2) = √16 = 4. Entonces 27 − 4 = 23. (Comprobación en Desmos: 81^(3/4) − 16^(1/2) = 23 ✓.) Respuesta: 23.',
        expWrong:{},
        tip:'Denominador del exponente = raíz; numerador = potencia. 81^(3/4): raíz cuarta (3) al cubo (27). Un exponente 1/2 es solo raíz cuadrada.',
        desmos:'Desmos como calculadora: escribe 81^(3/4)-16^(1/2) y te da 23. Recuerda: 81^(3/4) es la raíz cuarta de 81 (=3) al cubo (=27), y 16^(1/2)=4.',
        desmosLatex:['81^(3/4)-16^(1/2)']
      },
      {
        id:'M1M-12', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Trigonometría del triángulo rectángulo (SOH-CAH-TOA)',
        figure: FIG_RIGHT,
        stem:'In right triangle ABC, the right angle is at B. The side lengths are AB = 15, BC = 8, and AC = 17, as shown. What is the value of cos A?',
        choices:{A:'8/17', B:'8/15', C:'15/8', D:'15/17'},
        correct:'D',
        expCorrect:'Respecto al ángulo A, el lado adyacente es AB = 15 y la hipotenusa es AC = 17. Coseno = adyacente/hipotenusa = 15/17. (Nota: BC = 8 es el lado opuesto a A; 8-15-17 es una terna pitagórica.)',
        expWrong:{
          A:'8/17 es sin A (opuesto/hipotenusa), no el coseno. El opuesto a A es BC = 8.',
          B:'8/15 es tan A (opuesto/adyacente). El coseno usa la hipotenusa, no el cateto opuesto.',
          C:'15/8 es el recíproco de tan A (adyacente/opuesto), es decir la cotangente, no el coseno.'
        },
        tip:'SOH-CAH-TOA. Identifica, respecto al ángulo dado, cuál lado es opuesto, adyacente e hipotenusa. Coseno = adyacente/hipotenusa.',
        desmos:'SOH-CAH-TOA: cos A = adyacente/hipotenusa = 15/17. Escribe 15/17 en Desmos y te da ≈0.882. (Si usas \\cos en Desmos trabaja en radianes, pero aquí solo necesitas la razón de los lados.)',
        desmosLatex:['15/17']
      },
      {
        id:'M1M-13', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Triángulos especiales (30-60-90)',
        figure: FIG_306090,
        stem:'In the right triangle shown, the hypotenuse has length 12 and the acute angles measure 30° and 60°. What is the value of x, the length of the side opposite the 60° angle?',
        choices:{A:'6', B:'6√3', C:'12√3', D:'4√3'},
        correct:'B',
        expCorrect:'En un triángulo 30-60-90 los lados están en razón 1 : √3 : 2 (opuestos a 30°, 60° y 90°). La hipotenusa (frente a 90°) es 12, así que la razón base es 6. El lado opuesto a 60° = 6 · √3 = 6√3. (Comprobación: 6² + (6√3)² = 36 + 108 = 144 = 12² ✓.)',
        expWrong:{
          A:'6 es el lado opuesto a 30° (el cateto corto = hipotenusa/2), no el opuesto a 60°.',
          C:'12√3 multiplica la hipotenusa por √3 pero olvida dividir entre 2. El lado opuesto a 60° es hipotenusa · (√3/2).',
          D:'4√3 sale de dividir 12 entre √3 (12/√3 = 4√3) en vez de multiplicar por √3/2.'
        },
        tip:'Memoriza 30-60-90 → 1 : √3 : 2 (opuestos a 30°, 60°, 90°). El lado frente a 60° es el mediano: hipotenusa · (√3/2).',
        desmos:'En un 30-60-90 los lados van en razón 1 : √3 : 2. El lado opuesto a 60° = hipotenusa·(√3/2) = 12*√3/2. Escribe 12*\\sqrt{3}/2 en Desmos y te da ≈10.39, que es 6√3.',
        desmosLatex:['12*\\sqrt{3}/2', '6*\\sqrt{3}']
      },
      {
        id:'M1M-14', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Triángulos semejantes',
        figure: FIG_SIMILAR,
        stem:'Triangle ABC is similar to triangle DEF, with vertex A corresponding to D, B to E, and C to F. If AB = 6, BC = 9, and DE = 10, what is the length of EF?',
        choices:{A:'5.4', B:'10', C:'15', D:'13'},
        correct:'C',
        expCorrect:'Como △ABC ~ △DEF, los lados correspondientes son proporcionales: AB/DE = BC/EF. Sustituye: 6/10 = 9/EF → EF = 9 · 10/6 = 15. (Comprobación: la razón es 6/10 = 0.6 y 9/15 = 0.6 ✓.)',
        expWrong:{
          A:'5.4 invierte la razón (9 · 6/10 en vez de 9 · 10/6). El triángulo DEF es más grande, así que EF debe ser MAYOR que BC.',
          B:'10 es la longitud de DE (un dato dado), no EF. EF corresponde a BC, así que se escala con 9, no se copia DE.',
          D:'13 suma la diferencia (DE − AB = 4) a BC: 9 + 4 = 13. La semejanza MULTIPLICA por un factor de escala, no suma.'
        },
        tip:'En figuras semejantes, arma una proporción con lados CORRESPONDIENTES: la misma razón para todos. Empareja bien A↔D, B↔E, C↔F antes de despejar.',
        desmos:'Semejantes: lados correspondientes en la misma razón. AB va con DE y BC va con EF, así que 6/10 = 9/EF. Despeja: escribe 9*10/6 en Desmos y te da 15.',
        desmosLatex:['9*10/6']
      }
    ]
  });
})();
