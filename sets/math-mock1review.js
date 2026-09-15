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
        skill:'Equation of a circle (completing the square)',
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
          A:'(−3, 4) flips the signs. Careful: (x − 3)² comes from h = +3, and (y + 4)² comes from k = −4. The sign of the center is the opposite of what you see inside the parentheses.',
          C:'(6, −8) uses the full linear coefficients (−6 and 8) without halving them. When you complete the square you take HALF of each coefficient.',
          D:'(−6, 8) uses the coefficients as they are and with the wrong sign on top of that. You have to halve them AND flip the sign.'
        },
        tip:'From general to standard form: take HALF of each linear coefficient and flip its sign. Half of −6 is −3 → h = 3; half of 8 is 4 → k = −4. Center (3, −4).',
        desmos:'Grafica la ecuación tal cual: escribe x^2+y^2-6x+8y-11=0 y Desmos dibuja la circunferencia. Su centro está en (3, -4). Si prefieres, escribe la forma estándar (x-3)^2+(y+4)^2=36 y verás el mismo círculo.',
        desmosLatex:['x^2+y^2-6x+8y-11=0', '(x-3)^2+(y+4)^2=36']
      },
      {
        id:'M1M-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Sector area (degrees)',
        stem:'A sector of a circle has a radius of 8 and a central angle measuring 135°. What is the area of the sector?',
        choices:{A:'24π', B:'6π', C:'3π', D:'64π'},
        correct:'A',
        expCorrect:'A 135° angle covers 135/360 = 3/8 of the circle. Sector area = (3/8) · area of the circle = (3/8) · π · 8² = (3/8) · 64π = 24π. (Check: (135/360) · π · 64 ≈ 75.4 = 24π ✓.)',
        expWrong:{
          B:'6π is the ARC LENGTH, (3/8) · 2π · 8 = 6π, not the area. Area uses π·r², not 2π·r.',
          C:'3π forgets to square the radius: (3/8) · π · 8 = 3π. The formula calls for r SQUARED.',
          D:'64π is the area of the WHOLE circle (π·8²). You only want the 3/8 fraction of that area.'
        },
        tip:'With the angle in degrees, the sector is (θ/360) of the circle. Area = (θ/360) · π · r². Do not forget to square the radius (π·r²), and do not confuse it with the arc (2·π·r).',
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
        expCorrect:'The radius reaching the point of tangency runs from the origin (0, 0) to (5, 12), with slope 12/5. The tangent is PERPENDICULAR to the radius at that point, so its slope is the negative reciprocal: −5/12.',
        expWrong:{
          A:'12/5 es la pendiente del RADIO, no de la tangente. La tangente es perpendicular al radio, no paralela.',
          B:'5/12 is the reciprocal but it is missing the negative sign. Perpendicular = NEGATIVE reciprocal.',
          C:'−12/5 only flipped the sign of the radius slope, without inverting the fraction. For perpendicular you have to do both.'
        },
        tip:'The tangent is perpendicular to the radius at the point of contact. Get the slope of the radius (Δy/Δx) and take its negative reciprocal: flip the fraction and change the sign.',
        desmos:'Grafica x^2+y^2=169 y marca el punto (5,12). El radio a ese punto tiene pendiente 12/5, así que la tangente (perpendicular) tiene pendiente -5/12. Grafica y=-5(x-5)/12+12 y verás que roza el círculo justo en (5,12).',
        desmosLatex:['x^2+y^2=169', '(5,12)', 'y=-5(x-5)/12+12']
      },
      {
        id:'M1M-04', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Ceros y multiplicidad (cruzar vs. tocar)',
        stem:'The polynomial p is defined by p(x) = (x + 2)³(x − 1)²(x − 4). At how many distinct values of x does the graph of y = p(x) cross the x-axis?',
        choices:{A:'1', B:'3', C:'2', D:'6'},
        correct:'C',
        expCorrect:'A zero of ODD multiplicity crosses the axis; one of EVEN multiplicity only touches it and bounces. The zeros are x = −2 (mult. 3, odd → crosses), x = 1 (mult. 2, even → touches) and x = 4 (mult. 1, odd → crosses). It crosses at 2 values: x = −2 and x = 4.',
        expWrong:{
          A:'1 cuenta un solo cruce, pero hay dos factores de multiplicidad impar: (x + 2)³ y (x − 4). Ambos cruzan.',
          B:'3 is the total number of DISTINCT zeros, not how many cross. At x = 1 the graph only touches (even multiplicity).',
          D:'6 is the degree of the polynomial (3 + 2 + 1), not the number of crossings.'
        },
        tip:'ODD multiplicity → crosses the axis; EVEN multiplicity → touches and bounces. Count only the factors with odd exponents to know how many times it crosses.',
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
        expCorrect:'End behavior is governed by the leading term, −3x⁴. The degree is EVEN (4) and the leading coefficient is negative, so both ends head to −∞: as x → −∞, f(x) → −∞; and as x → +∞, f(x) → −∞.',
        expWrong:{
          A:'Both ends heading to +∞ would be an EVEN degree with a POSITIVE coefficient. The −3 flips both ends downward.',
          C:'Opposite ends (one down, one up) belong to an ODD degree, not a quartic. An even degree sends both ends the same way.',
          D:'These are also opposite ends, typical of an odd degree. A quartic never sends its ends in opposite directions.'
        },
        tip:'Only the highest-degree term matters. EVEN degree → both ends go the same way; negative coefficient → both downward. Here −3x⁴: down and down.',
        desmos:'Grafica y=-3x^4+2x^3-x+5 y haz zoom out. Las dos ramas se van hacia abajo (hacia -∞): grado par + coeficiente principal negativo = ambos extremos hacia abajo.',
        desmosLatex:['y=-3x^4+2x^3-x+5']
      },
      {
        id:'M1M-06', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Rational equations (extraneous solutions)',
        stem:'What are all real solutions to the equation  24/(x² − 9) + 1 = 4/(x − 3) ?',
        choices:{A:'x = 1 only', B:'x = 3 only', C:'x = 1 and x = 3', D:'There is no real solution'},
        correct:'A',
        expCorrect:'Since x² − 9 = (x − 3)(x + 3), multiply everything by (x − 3)(x + 3): 24 + (x² − 9) = 4(x + 3) → x² + 15 = 4x + 12 → x² − 4x + 3 = 0 → (x − 1)(x − 3) = 0 → x = 1 or x = 3. But x = 3 zeroes the denominators, so it is an EXTRANEOUS solution and gets discarded. Only x = 1 is left. (Check x = 1: 24/(−8) + 1 = −2, and 4/(−2) = −2 ✓.)',
        expWrong:{
          B:'x = 3 zeroes the denominators (x − 3 and x² − 9), so it is not in the domain: it is extraneous, not valid.',
          C:'x = 1 and x = 3 includes the extraneous root. Always check that no solution zeroes a denominator.',
          D:'There is a solution: x = 1 works perfectly. Only x = 3 gets discarded.'
        },
        tip:'Solve the rational equation as usual, but DISCARD any value that makes a denominator zero. Those are extraneous solutions. Here x = 3 falls out.',
        desmos:'Grafica y=24/(x^2-9)+1 y y=4/(x-3); se cruzan en x=1. En x=3 los denominadores se hacen 0, así que esa raíz es extraña y se descarta. Queda solo x=1.',
        desmosLatex:['y=24/(x^2-9)+1', 'y=4/(x-3)']
      },
      {
        id:'M1M-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Probabilidad condicional (tabla de doble entrada)',
        stem:'A group of 100 people at a conference were asked whether they prefer coffee or tea. The results are shown in the two-way table below, organized by role.<br><br>Students — Coffee: 48, Tea: 27, Total: 75<br>Teachers — Coffee: 12, Tea: 13, Total: 25<br>Total — Coffee: 60, Tea: 40, Total: 100<br><br>If one of the 100 people is selected at random and that person prefers coffee, what is the probability that the person is a teacher?',
        choices:{A:'12/25', B:'3/25', C:'1/4', D:'1/5'},
        correct:'D',
        expCorrect:'This is P(teacher | coffee). You are told the person drinks coffee, so the universe is the 60 coffee drinkers. Of those, 12 are teachers. P = 12/60 = 1/5.',
        expWrong:{
          A:'12/25 flips the condition: that is P(coffee | teacher), dividing by the 25 teachers. Here the given group is "coffee", not "teacher".',
          B:'3/25 is 12/100, the JOINT probability (teacher and coffee). The denominator has to be the coffee column (60), not the total.',
          C:'1/4 is 25/100, the MARGINAL probability of being a teacher, ignoring the coffee condition.'
        },
        tip:'Conditional "given that A": the denominator is the total for A, not the grand total. "Given that they drink coffee" → divide by the 60 coffee drinkers, not by 100.',
        desmos:'Probabilidad condicional: "dado que toma café". El denominador es solo la columna de café (60), no el total. Escribe 12/60 en Desmos y te da 0.2, o sea 1/5.',
        desmosLatex:['12/60']
      },
      {
        id:'M1M-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Probabilidad condicional (tabla de doble entrada)',
        stem:'At a clinic, 80 patients were given an allergy test. The two-way table below shows the results, organized by age group.<br><br>Under 30 — Positive: 18, Negative: 22, Total: 40<br>30 or older — Positive: 12, Negative: 28, Total: 40<br>Total — Positive: 30, Negative: 50, Total: 80<br><br>If one of the patients who tested negative is selected at random, what is the probability that the patient is under 30?',
        choices:{A:'11/20', B:'11/40', C:'11/25', D:'1/2'},
        correct:'C',
        expCorrect:'This is P(under 30 | negative). The given group is the 50 who tested negative. Of those, 22 are under 30. P = 22/50 = 11/25.',
        expWrong:{
          A:'11/20 es 22/40: condicionaste sobre la fila "menor de 30" en vez de la columna "negativo". El grupo dado es negativo (50).',
          B:'11/40 is 22/80, the JOINT probability. The denominator has to be the 50 who tested negative, not the total.',
          D:'1/2 is 40/80, the MARGINAL probability of being under 30, ignoring the "negative" condition.'
        },
        tip:'The key words are "given that": they fix the group (the negative column = 50) and that is your denominator. Then you count how many of that group meet the other condition.',
        desmos:'Te dicen "dado que salió negativo", así que el denominador es la columna de negativos (50). Escribe 22/50 en Desmos y te da 0.44, que es 11/25.',
        desmosLatex:['22/50']
      },
      {
        id:'M1M-09', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Mediana a partir de una tabla de frecuencias',
        stem:'The frequency table below shows the number of siblings reported by each of 20 students.<br><br>0 siblings: 4 students<br>1 sibling: 6 students<br>2 siblings: 5 students<br>3 siblings: 3 students<br>4 siblings: 2 students<br><br>What is the median number of siblings for these 20 students?',
        answer:'1.5',
        expCorrect:'With 20 data points, the median is the average of the 10th and 11th ordered values. Cumulative frequencies: four 0s (positions 1–4), six 1s (positions 5–10), five 2s (positions 11–15). The 10th value is 1 and the 11th is 2, so the median is (1 + 2)/2 = 1.5.',
        expWrong:{},
        tip:'With n even, the median is the average of the two middle values (positions n/2 and n/2 + 1). With 20 data points: the average of the 10th and 11th. Use cumulative frequencies to locate them.',
        desmos:'Con 20 datos, la mediana es el promedio del 10.º y 11.º valores ordenados. Escribe median(0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,3,3,3,4,4) y Desmos te da 1.5. También sale de (1+2)/2.',
        desmosLatex:['median(0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,3,3,3,4,4)', '(1+2)/2']
      },
      {
        id:'M1M-10', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponentes fraccionarios',
        stem:'Which of the following is equivalent to (16x⁸)^(3/4), where x > 0?',
        choices:{A:'8x⁶', B:'12x⁶', C:'64x⁶', D:'2x⁶'},
        correct:'A',
        expCorrect:'Distribute the exponent 3/4 to each factor: 16^(3/4) · (x⁸)^(3/4). Since 16 = 2⁴, we get 16^(3/4) = (2⁴)^(3/4) = 2³ = 8. And (x⁸)^(3/4) = x^(8·3/4) = x⁶. The result is 8x⁶. (Check with x = 1: 16^(3/4) = 8 ✓.)',
        expWrong:{
          B:'12x⁶ multiplies 16 · (3/4) = 12, treating the exponent as a factor. The 3/4 is a fourth root and then a cube, not a multiplication.',
          C:'64x⁶ takes the SQUARE root of 16 (=4) and cubes it (=64). The denominator 4 calls for the FOURTH root: 2³ = 8.',
          D:'2x⁶ takes the fourth root of 16 correctly (=2) but forgets to cube it. The numerator 3 of the exponent is missing.'
        },
        tip:'a^(m/n) = (nth root of a)^m. Distribute the exponent to each factor and, with powers of x, multiply exponents: (x⁸)^(3/4) = x⁶.',
        desmos:'El exponente 3/4 es raíz cuarta y luego al cubo. Escribe 16^(3/4) en Desmos y te da 8; con la x, (x^8)^(3/4)=x^6. Resultado 8x^6.',
        desmosLatex:['16^(3/4)']
      },
      {
        id:'M1M-11', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponentes fraccionarios (evaluar)',
        stem:'What is the value of 81^(3/4) − 16^(1/2) ?',
        answer:'23',
        expCorrect:'81^(3/4) is the fourth root of 81 raised to the cube: (81^(1/4))³ = 3³ = 27. And 16^(1/2) = √16 = 4. So 27 − 4 = 23. (Check in Desmos: 81^(3/4) − 16^(1/2) = 23 ✓.) Answer: 23.',
        expWrong:{},
        tip:'Denominator of the exponent = the root; numerator = the power. 81^(3/4): fourth root (3) cubed (27). An exponent of 1/2 is just a square root.',
        desmos:'Desmos como calculadora: escribe 81^(3/4)-16^(1/2) y te da 23. Recuerda: 81^(3/4) es la raíz cuarta de 81 (=3) al cubo (=27), y 16^(1/2)=4.',
        desmosLatex:['81^(3/4)-16^(1/2)']
      },
      {
        id:'M1M-12', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Right-triangle trigonometry (SOH-CAH-TOA)',
        figure: FIG_RIGHT,
        stem:'In right triangle ABC, the right angle is at B. The side lengths are AB = 15, BC = 8, and AC = 17, as shown. What is the value of cos A?',
        choices:{A:'8/17', B:'8/15', C:'15/8', D:'15/17'},
        correct:'D',
        expCorrect:'Relative to angle A, the adjacent side is AB = 15 and the hypotenuse is AC = 17. Cosine = adjacent/hypotenuse = 15/17. (Note: BC = 8 is the side opposite A; 8-15-17 is a Pythagorean triple.)',
        expWrong:{
          A:'8/17 es sin A (opuesto/hipotenusa), no el coseno. El opuesto a A es BC = 8.',
          B:'8/15 es tan A (opuesto/adyacente). El coseno usa la hipotenusa, no el cateto opuesto.',
          C:'15/8 is the reciprocal of tan A (adjacent/opposite), that is, the cotangent, not the cosine.'
        },
        tip:'SOH-CAH-TOA. Work out, relative to the given angle, which side is opposite, adjacent and hypotenuse. Cosine = adjacent/hypotenuse.',
        desmos:'SOH-CAH-TOA: cos A = adyacente/hipotenusa = 15/17. Escribe 15/17 en Desmos y te da ≈0.882. (Si usas \\cos en Desmos trabaja en radianes, pero aquí solo necesitas la razón de los lados.)',
        desmosLatex:['15/17']
      },
      {
        id:'M1M-13', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Special triangles (30-60-90)',
        figure: FIG_306090,
        stem:'In the right triangle shown, the hypotenuse has length 12 and the acute angles measure 30° and 60°. What is the value of x, the length of the side opposite the 60° angle?',
        choices:{A:'6', B:'6√3', C:'12√3', D:'4√3'},
        correct:'B',
        expCorrect:'In a 30-60-90 triangle the sides are in the ratio 1 : √3 : 2 (opposite 30°, 60° and 90°). The hypotenuse (opposite 90°) is 12, so the base ratio is 6. The side opposite 60° = 6 · √3 = 6√3. (Check: 6² + (6√3)² = 36 + 108 = 144 = 12² ✓.)',
        expWrong:{
          A:'6 es el lado opuesto a 30° (el cateto corto = hipotenusa/2), no el opuesto a 60°.',
          C:'12√3 multiplies the hypotenuse by √3 but forgets to divide by 2. The side opposite 60° is hypotenuse · (√3/2).',
          D:'4√3 comes from dividing 12 by √3 (12/√3 = 4√3) instead of multiplying by √3/2.'
        },
        tip:'Memoriza 30-60-90 → 1 : √3 : 2 (opuestos a 30°, 60°, 90°). El lado frente a 60° es el mediano: hipotenusa · (√3/2).',
        desmos:'En un 30-60-90 los lados van en razón 1 : √3 : 2. El lado opuesto a 60° = hipotenusa·(√3/2) = 12*√3/2. Escribe 12*\\sqrt{3}/2 en Desmos y te da ≈10.39, que es 6√3.',
        desmosLatex:['12*\\sqrt{3}/2', '6*\\sqrt{3}']
      },
      {
        id:'M1M-14', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Similar triangles',
        figure: FIG_SIMILAR,
        stem:'Triangle ABC is similar to triangle DEF, with vertex A corresponding to D, B to E, and C to F. If AB = 6, BC = 9, and DE = 10, what is the length of EF?',
        choices:{A:'5.4', B:'10', C:'15', D:'13'},
        correct:'C',
        expCorrect:'Since △ABC ~ △DEF, corresponding sides are proportional: AB/DE = BC/EF. Substitute: 6/10 = 9/EF → EF = 9 · 10/6 = 15. (Check: the ratio is 6/10 = 0.6 and 9/15 = 0.6 ✓.)',
        expWrong:{
          A:'5.4 flips the ratio (9 · 6/10 instead of 9 · 10/6). Triangle DEF is the bigger one, so EF has to be GREATER than BC.',
          B:'10 is the length of DE (a given figure), not EF. EF corresponds to BC, so it scales from 9; you do not copy DE.',
          D:'13 suma la diferencia (DE − AB = 4) a BC: 9 + 4 = 13. La semejanza MULTIPLICA por un factor de escala, no suma.'
        },
        tip:'In similar figures, set up a proportion with CORRESPONDING sides: the same ratio for all of them. Match A↔D, B↔E, C↔F correctly before solving.',
        desmos:'Semejantes: lados correspondientes en la misma razón. AB va con DE y BC va con EF, así que 6/10 = 9/EF. Despeja: escribe 9*10/6 en Desmos y te da 15.',
        desmosLatex:['9*10/6']
      }
    ]
  });
})();
