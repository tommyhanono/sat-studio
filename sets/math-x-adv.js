/* SAT Studio question set — EXTREME Math: Advanced Math (XV-01 a XV-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-x-adv',
    title: 'Extreme — Advanced Math',
    section: 'math',
    level: 'Extreme',
    description: 'Hard-Module-2 level: parametric discriminants, fractional-exponent manipulation, composition/transformation combos, exponential models.',
    minutes: 20,
    questions: [
      {
        id:'XV-01', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Discriminante paramétrico (tangencia recta-parábola)',
        stem:'In the xy-plane, the graph of y = x² + 4x + 12 intersects the graph of y = −3x + c, where c is a constant, at exactly one point. What is the value of c?',
        choices:{A:'49/4', B:'−1/4', C:'1/4', D:'−7/2'},
        correct:'B',
        expCorrect:'Iguala las dos ecuaciones: x² + 4x + 12 = −3x + c. Pasa todo a un lado: x² + 7x + (12 − c) = 0. "Exactamente un punto" significa discriminante cero: 7² − 4(1)(12 − c) = 0 → 49 − 48 + 4c = 0 → 4c = −1 → c = −1/4. Verifica: con c = −1/4 la ecuación queda x² + 7x + 49/4 = (x + 7/2)² = 0, una sola solución. ✓',
        expWrong:{
          A:'49/4 es el valor que necesita el término constante 12 − c, no el valor de c. Te faltó el último despeje: 12 − c = 49/4 → c = −1/4.',
          C:'1/4 sale de un error de signo al despejar: 49 − 48 + 4c = 0 da 4c = −1, o sea c = −1/4, negativo.',
          D:'−7/2 es la coordenada x del punto de tangencia (donde (x + 7/2)² = 0), no el valor de c que te pidieron.'
        },
        tip:'Recta toca parábola en UN punto → iguala, ordena en ax² + bx + c = 0 y exige b² − 4ac = 0. Cuidado: el "b" del discriminante es el coeficiente DESPUÉS de pasar la recta al otro lado (aquí 4 + 3 = 7), no el 4 original.',
        desmos:'Grafica y = x^2 + 4x + 12 y y = -3x + c con un slider para c. Mueve c: con c = -1/4 la recta apenas roza la parábola (tangente). Con c mayor la corta en 2 puntos y con c menor en 0.',
        desmosLatex:['y=x^2+4x+12', 'y=-3x+c', 'c=-1/4']
      },
      {
        id:'XV-02', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Discriminante paramétrico (tangencia recta-parábola)',
        stem:'In the xy-plane, the line y = −3x + c is tangent to the parabola y = x² + 2x + 12 (they meet at exactly one point). What is the value of the constant c?',
        choices:{A:'25/4', B:'−23/4', C:'23/4', D:'73/4'},
        correct:'C',
        expCorrect:'Iguala: x² + 2x + 12 = −3x + c → x² + 5x + (12 − c) = 0. Tangencia = discriminante cero: 25 − 4(12 − c) = 0 → 25 = 48 − 4c → 4c = 23 → c = 23/4. Verifica: el término constante queda 12 − 23/4 = 25/4 y x² + 5x + 25/4 = (x + 5/2)² = 0, un solo punto. ✓',
        expWrong:{
          A:'25/4 es lo que debe valer 12 − c (el término constante), no c. Falta despejar: c = 12 − 25/4 = 23/4.',
          B:'−23/4 es un error de signo al pasar términos: de 25 = 48 − 4c sale 4c = +23, positivo.',
          D:'73/4 sale de SUMAR 12 + 25/4 en vez de restar. El discriminante exige 12 − c = 25/4, o sea c = 12 − 25/4.'
        },
        tip:'El flujo siempre es el mismo: igualar → ordenar → b² − 4ac = 0 → despejar el parámetro. El error más común es responder el valor del término constante (12 − c) en vez de c. Lee QUÉ te piden antes de marcar.',
        desmos:'Grafica y = x^2 + 2x + 12 y y = -3x + c con slider para c. Con c = 23/4 = 5.75 la recta toca la parábola en un solo punto (x = -5/2). Prueba c = 25/4: corta en dos puntos.',
        desmosLatex:['y=x^2+2x+12', 'y=-3x+c', 'c=23/4']
      },
      {
        id:'XV-03', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Discriminante paramétrico (respuesta fraccionaria)',
        stem:'In the xy-plane, the graph of y = x² + 6x + 12 and the graph of y = −3x + c, where c is a constant, intersect at exactly one point. What is the value of c?',
        answer:'-33/4',
        expCorrect:'Iguala: x² + 6x + 12 = −3x + c → x² + 9x + (12 − c) = 0. Un solo punto → discriminante cero: 81 − 4(12 − c) = 0 → 81 − 48 + 4c = 0 → 4c = −33 → c = −33/4. Verifica: el constante queda 12 + 33/4 = 81/4 y x² + 9x + 81/4 = (x + 9/2)² = 0. ✓ En la grilla escribe -33/4 (o -8.25).',
        expWrong:{},
        tip:'En SPR la respuesta puede ser fracción negativa: -33/4 cabe perfecto en la grilla. NO redondees a -8.2 si puedes escribir la fracción exacta o -8.25. Y recuerda: el b del discriminante es 6 + 3 = 9, no 6.',
        desmos:'Grafica y = x^2 + 6x + 12 y y = -3x + c con slider para c entre -12 y 0. En c = -33/4 = -8.25 la recta es tangente. También puedes graficar y = 81 - 4(12 - x) y ver dónde cruza cero: en x = -8.25.',
        desmosLatex:['y=x^2+6x+12', 'y=-3x+c', 'c=-33/4']
      },
      {
        id:'XV-04', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Discriminante paramétrico (sin soluciones reales → rango)',
        stem:'The equation x² + 8x + k = −3x + 4, where k is a constant, has no real solutions. Which of the following must be true about k?',
        choices:{A:'k > 137/4', B:'k < 137/4', C:'k > 121/4', D:'k > 105/4'},
        correct:'A',
        expCorrect:'Ordena: x² + 11x + (k − 4) = 0. "No real solutions" = discriminante negativo: 121 − 4(k − 4) < 0 → 121 − 4k + 16 < 0 → 137 < 4k → k > 137/4. Verifica con k = 35 (> 34.25): discriminante = 121 − 4(31) = −3 < 0, sin soluciones reales. ✓ Y con k = 34: 121 − 120 = 1 > 0, sí hay soluciones. ✓',
        expWrong:{
          B:'k < 137/4 voltea la desigualdad. De 137 − 4k < 0 sale 137 < 4k: es k GRANDE lo que hace el discriminante negativo (sube la parábola y la despega del eje x).',
          C:'k > 121/4 ignora el +16 que aporta el término constante: el constante correcto es k − 4 (por el 4 de la recta), y −4(k − 4) = −4k + 16.',
          D:'k > 105/4 sale de RESTAR 16 en vez de sumarlo: −4(k − 4) = −4k + 16; el doble negativo da positivo.'
        },
        tip:'Sin soluciones reales → b² − 4ac < 0. Los dos tropiezos: (1) olvidar mover el −3x + 4 al lado izquierdo antes de leer a, b, c; (2) el signo de −4(k − 4) = −4k + 16. Distribuye con calma.',
        desmos:'Grafica y = x^2 + 11x + (k - 4) con slider para k. Cuando k > 137/4 = 34.25 la parábola queda completamente arriba del eje x (sin raíces). También grafica y = 137 - 4x y mira que cruza cero en x = 34.25.',
        desmosLatex:['y=x^2+11x+(k-4)', 'k=34.25', 'y=137-4x']
      },
      {
        id:'XV-05', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Exponentes fraccionarios (radicales anidados)',
        stem:'For x > 1, the expression x·⁵√(x³·√x) is equivalent to x^(a/b), where a/b is a fraction in lowest terms. What is the value of a + b?',
        answer:'27',
        expCorrect:'De adentro hacia afuera. Dentro de la raíz quinta: x³ · x^(1/2) = x^(7/2). La raíz quinta divide el exponente entre 5: (x^(7/2))^(1/5) = x^(7/10). Multiplica por la x de afuera: x¹ · x^(7/10) = x^(17/10). Ya está en términos mínimos (17 y 10 no comparten factores), así que a = 17, b = 10 y a + b = 27. Verifica con x = 2: 2·(8·√2)^(1/5) ≈ 3.249 y 2^(1.7) ≈ 3.249. ✓',
        expWrong:{},
        tip:'Radicales anidados: convierte TODO a exponentes fraccionarios y trabaja de adentro hacia afuera. Reglas: producto suma exponentes, raíz n-ésima divide entre n. El slip clásico es aplicar la raíz quinta solo al x³ y no al √x: la raíz cubre todo lo que tiene adentro.',
        desmos:'Prueba de equivalencia por superposición: grafica y = x*(x^3*sqrt(x))^(1/5) y encima y = x^(17/10). Si las dos curvas se superponen exactamente para x > 0, son equivalentes. Con x = 2 ambas dan ≈ 3.249.',
        desmosLatex:['y=x(x^3\\sqrt{x})^{1/5}', 'y=x^{17/10}']
      },
      {
        id:'XV-06', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Exponentes fraccionarios y negativos',
        stem:'For x > 0, which of the following is equivalent to (x^(2/3) · x^(−1/2))⁶ / x^(−3)?',
        choices:{A:'x¹⁰', B:'x', C:'x⁻²', D:'x⁴'},
        correct:'D',
        expCorrect:'Dentro del paréntesis suma exponentes: 2/3 + (−1/2) = 4/6 − 3/6 = 1/6. Eleva a la 6: x^(1/6 · 6) = x¹. Dividir entre x^(−3) RESTA el exponente: 1 − (−3) = 4. Resultado: x⁴. Verifica con x = 2: (2^(2/3)·2^(−1/2))⁶/2^(−3) = 2¹ · 2³ = 16 = 2⁴. ✓',
        expWrong:{
          A:'x¹⁰ sale de sumar 2/3 + 1/2 = 7/6 ignorando el signo del −1/2: 7/6 · 6 = 7, y 7 + 3 = 10. El exponente −1/2 resta.',
          B:'x es solo el numerador (x¹): te faltó procesar la división entre x^(−3), que suma 3 al exponente.',
          C:'x⁻² sale de tratar la división entre x^(−3) como multiplicación: 1 + (−3) = −2. Dividir RESTA el exponente: 1 − (−3) = 4.'
        },
        tip:'Tres reglas, en orden: dentro del paréntesis SUMA exponentes; potencia de potencia MULTIPLICA; división RESTA. El doble negativo 1 − (−3) = 4 es donde caen casi todos. Comprueba siempre con x = 2 en la calculadora.',
        desmos:'Prueba de superposición: grafica y = (x^(2/3)*x^(-1/2))^6/x^(-3) y encima y = x^4. Se superponen para x > 0. Prueba también y = x^(-2): esa NO coincide, descartada.',
        desmosLatex:['y=\\frac{\\left(x^{2/3}\\cdot x^{-1/2}\\right)^6}{x^{-3}}', 'y=x^4', 'y=x^{-2}']
      },
      {
        id:'XV-07', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Exponentes fraccionarios (combinar tres factores)',
        stem:'For x > 0, which of the following is equivalent to (⁵√(x²) · ³√x) / x^(1/15)?',
        choices:{A:'x^(2/3)', B:'x^(11/15)', C:'x^(4/5)', D:'x^(2/15)'},
        correct:'A',
        expCorrect:'Convierte todo a exponentes: ⁵√(x²) = x^(2/5) y ³√x = x^(1/3). Común denominador 15: 2/5 = 6/15 y 1/3 = 5/15. Multiplica arriba (suma): 6/15 + 5/15 = 11/15. Divide (resta): 11/15 − 1/15 = 10/15 = 2/3. Resultado: x^(2/3). Verifica con x = 32: 32^(2/5) · 32^(1/3) / 32^(1/15) ≈ 4 · 3.1748 / 1.2599 ≈ 10.08 y 32^(2/3) ≈ 10.08. ✓',
        expWrong:{
          B:'x^(11/15) es solo el numerador (6/15 + 5/15): te faltó restar el 1/15 de la división.',
          C:'x^(4/5) = x^(12/15) sale de SUMAR el 1/15 en vez de restarlo. Dividir resta exponentes.',
          D:'x^(2/15) sale de MULTIPLICAR 2/5 · 1/3 = 2/15 en vez de sumar. Multiplicar potencias de la misma base SUMA exponentes; solo potencia-de-potencia multiplica.'
        },
        tip:'Pasa cada radical a exponente fraccionario y usa denominador común (aquí 15) para no equivocarte sumando. Multiplicar bases iguales suma exponentes, dividir resta. Y simplifica al final: 10/15 = 2/3, porque las opciones vienen reducidas.',
        desmos:'Superposición: grafica y = x^(2/5)*x^(1/3)/x^(1/15) y encima y = x^(2/3). Coinciden exactamente para x > 0. Grafica y = x^(11/15) con otro color: se separa de la curva original, así descartas B.',
        desmosLatex:['y=\\frac{x^{2/5}\\cdot x^{1/3}}{x^{1/15}}', 'y=x^{2/3}', 'y=x^{11/15}']
      },
      {
        id:'XV-08', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Composición y traslación (mínimo de g)',
        stem:'The function f is defined by f(x) = (x − 1)² − 5. The function g is defined by g(x) = f(x − 3) + 2. What is the minimum value of g?',
        choices:{A:'−5', B:'−7', C:'−3', D:'4'},
        correct:'C',
        expCorrect:'Sustituye: g(x) = (x − 3 − 1)² − 5 + 2 = (x − 4)² − 3. En forma de vértice, el mínimo de (x − 4)² − 3 es −3 (ocurre en x = 4). Atajo: el mínimo de f es −5; el corrimiento horizontal (x − 3) NO cambia el valor mínimo, y el +2 lo sube: −5 + 2 = −3. Verifica: g(4) = f(1) + 2 = −5 + 2 = −3. ✓',
        expWrong:{
          A:'−5 es el mínimo de f, sin aplicar el +2 que sube toda la gráfica dos unidades.',
          B:'−7 sale de RESTAR 2 en vez de sumarlo: g(x) = f(x − 3) + 2 sube la gráfica, no la baja.',
          D:'4 es la coordenada x del vértice de g (dónde ocurre el mínimo), no el VALOR mínimo, que es la coordenada y.'
        },
        tip:'g(x) = f(x − h) + k mueve la gráfica h a la derecha y k hacia arriba. El corrimiento horizontal jamás cambia el valor mínimo/máximo; solo el vertical (+k) lo hace. Y distingue: "minimum value" = coordenada y del vértice, no la x.',
        desmos:'Grafica f(x) = (x-1)^2 - 5 y g(x) = f(x-3) + 2 (Desmos entiende la composición directa). Verás la misma parábola corrida 3 a la derecha y 2 arriba: vértice de f en (1, -5), de g en (4, -3).',
        desmosLatex:['f(x)=(x-1)^2-5', 'g(x)=f(x-3)+2']
      },
      {
        id:'XV-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Composición y traslación (evaluar g(k))',
        stem:'The function f is defined by f(x) = 2(x + 1)² + 3. If g(x) = f(x − 3) + 2, what is the value of g(5)?',
        choices:{A:'21', B:'23', C:'77', D:'167'},
        correct:'B',
        expCorrect:'Dos pasos, en orden. Paso 1: g(5) = f(5 − 3) + 2 = f(2) + 2. Paso 2: f(2) = 2(2 + 1)² + 3 = 2(9) + 3 = 21. Entonces g(5) = 21 + 2 = 23. Verifica reescribiendo g completo: g(x) = 2(x − 2)² + 5, y g(5) = 2(3)² + 5 = 23. ✓',
        expWrong:{
          A:'21 es f(2) sin el +2 final: te faltó el último paso de la definición de g.',
          C:'77 sale de evaluar f(5) + 2 = 2(36) + 3 + 2: te saltaste el corrimiento x − 3 y metiste el 5 directo en f.',
          D:'167 sale de f(5 + 3) + 2 = f(8) + 2 = 2(81) + 3 + 2: sumaste el 3 en vez de restarlo. En f(x − 3), al x le RESTAS 3 antes de entrar a f.'
        },
        tip:'Composiciones de dos pasos: evalúa de adentro hacia afuera. Primero calcula el argumento (5 − 3 = 2), luego pasa por f, y AL FINAL aplica lo de afuera (+2). Escribir cada paso en una línea aparte evita saltarte el último.',
        desmos:'Define f(x) = 2(x+1)^2 + 3 y g(x) = f(x-3) + 2 en Desmos. Escribe g(5) en una línea nueva y te da 23 directo. También puedes graficar g y hacer clic en el punto donde x = 5.',
        desmosLatex:['f(x)=2(x+1)^2+3', 'g(x)=f(x-3)+2', 'g(5)']
      },
      {
        id:'XV-10', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Composición y traslación (hallar el parámetro)',
        stem:'The function f is defined by f(x) = (x − 2)² + k, where k is a constant. The function g is defined by g(x) = f(x + 5) − 4. If the minimum value of g is 6, what is the value of k?',
        answer:'10',
        expCorrect:'Trabaja al revés. g(x) = (x + 5 − 2)² + k − 4 = (x + 3)² + (k − 4). El mínimo de g es k − 4 (el corrimiento horizontal x + 5 no afecta el valor mínimo). Igualando: k − 4 = 6 → k = 10. Verifica: con k = 10, g(x) = (x + 3)² + 6 y su mínimo es g(−3) = 6. ✓ Respuesta: 10.',
        expWrong:{},
        tip:'El mínimo de a(x − h)² + c con a > 0 es c, punto. Los corrimientos horizontales (x + 5) mueven DÓNDE ocurre el mínimo pero no CUÁNTO vale. Rastrea solo la constante: k − 4 = 6. El slip típico es responder 2 (de 6 − 4) por restar en vez de sumar el 4.',
        desmos:'Define f(x) = (x-2)^2 + k con slider para k, y g(x) = f(x+5) - 4. Mueve k hasta que el vértice de g quede en y = 6: pasa exactamente en k = 10 (vértice de g en (-3, 6)).',
        desmosLatex:['f(x)=(x-2)^2+k', 'g(x)=f(x+5)-4', 'k=10']
      },
      {
        id:'XV-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Modelo exponencial (decaimiento cada n días)',
        stem:'A patient receives a 400-milligram dose of a medication. The amount of the medication in the bloodstream decreases by 12% every 5 days. Which equation models the amount A(t), in milligrams, remaining t days after the dose?',
        choices:{A:'A(t) = 400(0.88)^(5t)', B:'A(t) = 400(0.12)^(t/5)', C:'A(t) = 400(0.88)^t', D:'A(t) = 400(0.88)^(t/5)'},
        correct:'D',
        expCorrect:'Decrecer 12% deja el 88%: el factor es 1 − 0.12 = 0.88. Ese factor se aplica UNA vez cada 5 días, así que en t días ocurre t/5 veces: A(t) = 400(0.88)^(t/5). Verifica: en t = 5, A = 400(0.88)¹ = 352 (bajó 12% ✓); en t = 10, A = 400(0.88)² = 309.76 (bajó 12% dos veces ✓).',
        expWrong:{
          A:'(0.88)^(5t) aplica el decaimiento 25 veces en 5 días: en t = 5 daría 400(0.88)²⁵ ≈ 16 mg, un desplome absurdo. El exponente debe valer 1 cuando t = 5, o sea t/5.',
          B:'0.12 es lo que se PIERDE, no lo que queda. Con base 0.12, a los 5 días quedaría el 12% (48 mg) en vez de perderse el 12%. El factor de decaimiento es 1 − 0.12 = 0.88.',
          C:'(0.88)^t aplica el 12% de pérdida CADA DÍA: en 5 días quedarían 400(0.88)⁵ ≈ 211 mg, no 352. El periodo es de 5 días, por eso el exponente es t/5.'
        },
        tip:'Modelo exponencial a·b^(t/n): b = 1 ± tasa (aquí 0.88) y n = duración del periodo. Chequeo infalible: sustituye t = un periodo completo (t = 5) y exige que el exponente dé 1. Si da 25 o 5, el exponente está mal armado.',
        desmos:'Grafica A = 400(0.88)^(t/5) y verifica que pasa por (5, 352) y (10, 309.76). Grafica encima 400(0.88)^(5t) y 400(0.88)^t: caen muchísimo más rápido y no pasan por (5, 352).',
        desmosLatex:['y=400(0.88)^{x/5}', 'y=400(0.88)^{5x}', 'y=400(0.88)^x', '(5,352)']
      },
      {
        id:'XV-12', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Modelo exponencial (crecimiento cada n años)',
        stem:'The population of a town was 2,500 in the year 2020 and increases by 8% every 3 years. Which equation models the population P(t), in people, t years after 2020?',
        choices:{A:'P(t) = 2500(1.08)^(t/3)', B:'P(t) = 2500(1.08)^(3t)', C:'P(t) = 2500(0.08)^(t/3)', D:'P(t) = 2500(1.08)^t'},
        correct:'A',
        expCorrect:'Crecer 8% multiplica por 1 + 0.08 = 1.08, y eso pasa una vez cada 3 años: en t años el factor se aplica t/3 veces, o sea P(t) = 2500(1.08)^(t/3). Verifica: en t = 3, P = 2500(1.08)¹ = 2700 (subió 8% ✓); en t = 6, P = 2500(1.08)² = 2916 (8% dos veces ✓).',
        expWrong:{
          B:'(1.08)^(3t) aplica el 8% nueve veces en 3 años: en t = 3 daría 2500(1.08)⁹ ≈ 4997, casi el doble. El exponente debe valer 1 cuando t = 3.',
          C:'0.08 como base hace que la población se DESPLOME (multiplicar por 0.08 deja solo el 8%). Crecer 8% es multiplicar por 1.08, no por 0.08.',
          D:'(1.08)^t aplica el 8% cada AÑO: en 3 años daría 2500(1.08)³ ≈ 3149, no 2700. Como el periodo es de 3 años, el exponente es t/3.'
        },
        tip:'Mismo molde que el decaimiento: P = a(1 + r)^(t/n) con n = años por periodo. Prueba rápida en el examen: mete t = 3 en cada opción y quédate con la que da exactamente 2500 × 1.08 = 2700. Solo una sobrevive.',
        desmos:'Grafica P = 2500(1.08)^(t/3) y marca los puntos (3, 2700) y (6, 2916). Compara con 2500(1.08)^t y 2500(1.08)^(3t): crecen demasiado rápido y no pasan por (3, 2700).',
        desmosLatex:['y=2500(1.08)^{x/3}', 'y=2500(1.08)^x', '(3,2700)']
      }
    ]
  });
})();
