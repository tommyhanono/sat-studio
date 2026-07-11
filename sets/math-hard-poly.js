/* SAT Studio question set — Math: Polynomials & Functions — Hard (HMP-01 a HMP-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-hard-poly',
    title: 'Polynomials & Functions — Hard',
    section: 'math',
    level: 'Difícil',
    description: 'Hard polynomial and rational functions — end behavior, zeros & multiplicity, factoring, remainder, fractional exponents, and function models.',
    minutes: 20,
    questions: [
      {
        id:'HMP-01', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Ceros y multiplicidad (tocar vs. cruzar)',
        stem:'The polynomial p is defined by p(x) = (x − 3)²(x + 1)(x − 5). At how many distinct values of x does the graph of y = p(x) touch the x-axis without crossing it?',
        choices:{A:'1', B:'2', C:'3', D:'0'},
        correct:'A',
        expCorrect:'Un cero con multiplicidad PAR hace que la gráfica toque el eje x y rebote (no lo cruza); uno con multiplicidad IMPAR lo cruza. Los ceros son x = 3 (multiplicidad 2, par → toca), x = −1 (multiplicidad 1, cruza) y x = 5 (multiplicidad 1, cruza). Solo x = 3 toca sin cruzar, así que la respuesta es 1.',
        expWrong:{
          B:'2 contaría dos ceros que rebotan, pero solo (x − 3)² tiene multiplicidad par. Los factores (x + 1) y (x − 5) cruzan el eje.',
          C:'3 es el total de ceros distintos, no cuántos rebotan. Solo el de multiplicidad par toca sin cruzar.',
          D:'0 diría que la gráfica nunca toca el eje, pero (x − 3)² sí lo toca en x = 3.'
        },
        tip:'Multiplicidad PAR → toca y rebota (no cruza). Multiplicidad IMPAR → cruza el eje. Cuenta solo los factores elevados a potencia par.'
      },
      {
        id:'HMP-02', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Comportamiento en los extremos (end behavior)',
        stem:'The function f is defined by f(x) = −2x³ + 5x² − 7. Which statement describes the end behavior of the graph of f?',
        choices:{
          A:'As x → −∞, f(x) → −∞; and as x → +∞, f(x) → +∞',
          B:'As x → −∞, f(x) → +∞; and as x → +∞, f(x) → +∞',
          C:'As x → −∞, f(x) → −∞; and as x → +∞, f(x) → −∞',
          D:'As x → −∞, f(x) → +∞; and as x → +∞, f(x) → −∞'
        },
        correct:'D',
        expCorrect:'El comportamiento en los extremos lo manda el término de mayor grado, −2x³. El grado es impar y el coeficiente principal es negativo, así que los extremos van en sentidos opuestos y con signo invertido: cuando x → −∞, −2x³ → +∞; cuando x → +∞, −2x³ → −∞.',
        expWrong:{
          A:'Esto describe un cúbico con coeficiente principal POSITIVO. El −2 invierte los dos extremos.',
          B:'Los dos extremos hacia +∞ corresponden a un grado PAR (como x²), no a un cúbico. Un grado impar da extremos opuestos.',
          C:'Los dos extremos hacia −∞ también son de grado par (con coeficiente negativo). Un cúbico nunca manda ambos extremos al mismo lado.'
        },
        tip:'Solo importa el término principal. Grado impar → extremos opuestos; grado par → extremos iguales. Coeficiente negativo invierte todo. Aquí −2x³: sube a la izquierda, baja a la derecha.'
      },
      {
        id:'HMP-03', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Teorema del residuo',
        stem:'When the polynomial p(x) = 2x³ − 3x² + kx − 5 is divided by (x − 2), the remainder is 7. What is the value of the constant k?',
        choices:{A:'2', B:'3', C:'4', D:'6'},
        correct:'C',
        expCorrect:'Por el teorema del residuo, el residuo al dividir entre (x − 2) es p(2). Entonces p(2) = 2(8) − 3(4) + 2k − 5 = 16 − 12 + 2k − 5 = 2k − 1. Igualas a 7: 2k − 1 = 7 → 2k = 8 → k = 4. (Comprobación: 16 − 12 + 8 − 5 = 7 ✓.)',
        expWrong:{
          A:'2 es el valor que sustituyes (x = 2), no el resultado de despejar k.',
          B:'3 sale de un error aritmético; al sustituir bien, 2k − 1 = 7 obliga a k = 4.',
          D:'6 probablemente viene de olvidar el −1 (poner 2k = 12). El término independiente deja 2k − 1, no 2k.'
        },
        tip:'Teorema del residuo: el residuo al dividir p(x) entre (x − a) es p(a). Evalúa p(2), iguálalo al residuo dado y despeja. Nada de división larga.'
      },
      {
        id:'HMP-04', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Teorema del factor',
        stem:'The expression (x + 3) is a factor of the polynomial p(x) = x³ + 2x² − 5x + c, where c is a constant. What is the value of c?',
        choices:{A:'6', B:'12', C:'−3', D:'−6'},
        correct:'D',
        expCorrect:'Por el teorema del factor, si (x + 3) es factor entonces p(−3) = 0. Sustituye: (−3)³ + 2(−3)² − 5(−3) + c = −27 + 18 + 15 + c = 6 + c. Igualas a 0: 6 + c = 0 → c = −6. (Comprobación: −27 + 18 + 15 − 6 = 0 ✓.)',
        expWrong:{
          A:'6 es el resultado de la parte numérica (−27 + 18 + 15) antes de despejar; c debe cancelar ese 6, así que c = −6.',
          B:'12 no cumple p(−3) = 0. Al sustituir x = −3 queda 6 + c, y solo c = −6 lo anula.',
          C:'−3 es el valor de x que usas (la raíz), no el valor de c.'
        },
        tip:'Teorema del factor: (x − a) es factor ⇔ p(a) = 0. Aquí el factor es (x + 3), así que a = −3. Evalúa p(−3), iguala a 0 y despeja c.'
      },
      {
        id:'HMP-05', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Expresiones racionales (simplificar)',
        stem:'Which of the following is equivalent to (x² − 9) / (x² − x − 6), where x ≠ 3 and x ≠ −2?',
        choices:{A:'(x − 3)/(x + 2)', B:'(x − 3)/(x − 2)', C:'(x + 3)/(x + 2)', D:'(x + 3)/(x − 2)'},
        correct:'C',
        expCorrect:'Factoriza arriba y abajo: x² − 9 = (x − 3)(x + 3) y x² − x − 6 = (x − 3)(x + 2). El factor común (x − 3) se cancela, quedando (x + 3)/(x + 2). (Comprobación con x = 0: original = −9/−6 = 3/2; simplificado = 3/2 ✓.)',
        expWrong:{
          A:'(x − 3)/(x + 2) cancela el factor equivocado: se cancela (x − 3), no (x + 3). Arriba queda (x + 3).',
          B:'(x − 3)/(x − 2) factoriza mal el denominador; x² − x − 6 = (x − 3)(x + 2), no (x − 2)(algo).',
          D:'(x + 3)/(x − 2) tiene el denominador equivocado: el factor que sobra abajo es (x + 2), no (x − 2).'
        },
        tip:'Factoriza numerador y denominador por separado, cancela SOLO factores idénticos. Diferencia de cuadrados: x² − 9 = (x − 3)(x + 3).'
      },
      {
        id:'HMP-06', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Ecuaciones racionales (soluciones extrañas)',
        stem:'What are all real solutions to the equation  12/(x² − 4) + 1 = 3/(x − 2) ?',
        choices:{A:'x = 1 only', B:'x = 2 only', C:'x = 1 and x = 2', D:'There is no real solution'},
        correct:'A',
        expCorrect:'Como x² − 4 = (x − 2)(x + 2), multiplica todo por (x − 2)(x + 2): 12 + (x² − 4) = 3(x + 2) → x² + 8 = 3x + 6 → x² − 3x + 2 = 0 → (x − 1)(x − 2) = 0 → x = 1 o x = 2. Pero x = 2 anula los denominadores, así que es una solución EXTRAÑA y se descarta. Queda solo x = 1. (Comprobación x = 1: 12/(−3) + 1 = −3, y 3/(−1) = −3 ✓.)',
        expWrong:{
          B:'x = 2 hace cero los denominadores (x − 2 y x² − 4), así que no está en el dominio: es solución extraña, no válida.',
          C:'x = 1 y x = 2 incluye la raíz extraña. Siempre revisa que ninguna solución anule un denominador.',
          D:'Sí hay solución: x = 1 funciona perfectamente. Solo x = 2 se descarta.'
        },
        tip:'En ecuaciones racionales, resuelve normal PERO descarta cualquier valor que anule un denominador. Esas son soluciones extrañas. Aquí x = 2 se cae.'
      },
      {
        id:'HMP-07', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponentes fraccionarios',
        stem:'Which of the following is equivalent to (27x⁶)^(2/3), where x > 0?',
        choices:{A:'729x⁴', B:'18x⁴', C:'9x⁹', D:'9x⁴'},
        correct:'D',
        expCorrect:'Reparte el exponente 2/3 a cada factor: 27^(2/3) · (x⁶)^(2/3). Como 27 = 3³, tenemos 27^(2/3) = (3³)^(2/3) = 3² = 9. Y (x⁶)^(2/3) = x^(6·2/3) = x⁴. El resultado es 9x⁴. (Comprobación con x = 1: (27)^(2/3) = 9 ✓.)',
        expWrong:{
          A:'729x⁴ eleva 27 al cuadrado (27² = 729) sin sacar antes la raíz cúbica. El 2/3 es raíz cúbica y luego cuadrado: 27^(2/3) = 9.',
          B:'18x⁴ multiplica 27 · (2/3) = 18, tratando el exponente como si fuera un factor. Los exponentes no se multiplican con la base así.',
          C:'9x⁹ multiplica los exponentes de x mal: 6 · (2/3) = 4, no 9.'
        },
        tip:'a^(m/n) = raíz n-ésima de a, elevada a m. Reparte el exponente a cada factor. Con potencias de x, multiplica los exponentes: (x⁶)^(2/3) = x⁴.'
      },
      {
        id:'HMP-08', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponentes negativos',
        stem:'Which of the following is equivalent to (x⁻³ y²) / (x⁻⁵ y⁻¹), where x > 0 and y > 0?',
        choices:{A:'x⁸y', B:'x²y³', C:'y³/x⁸', D:'x²y'},
        correct:'B',
        expCorrect:'Al dividir potencias de la misma base se restan los exponentes. Para x: −3 − (−5) = −3 + 5 = 2, así que x². Para y: 2 − (−1) = 3, así que y³. El resultado es x²y³. (Comprobación con x = y = 2: arriba 2⁻³·2² = 2⁻¹ = 1/2; abajo 2⁻⁵·2⁻¹ = 2⁻⁶ = 1/64; cociente = 64/2 = 32 = 2⁵ = x²y³ con 2²·2³ = 2⁵ ✓.)',
        expWrong:{
          A:'x⁸y suma los exponentes de x (−3 + 5 = ... da 2, no 8) y maneja mal la y. Al dividir se RESTAN: −3 − (−5) = 2.',
          C:'y³/x⁸ deja la x en el denominador con exponente 8; pero −3 − (−5) = +2, así que x sube al numerador como x².',
          D:'x²y olvida el signo del exponente de y: 2 − (−1) = 3, así que es y³, no y.'
        },
        tip:'Al dividir bases iguales, RESTA exponentes: base^(arriba − abajo). Cuidado con los dobles negativos: restar un negativo suma.'
      },
      {
        id:'HMP-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Modelo exponencial vs. polinómico',
        stem:'The functions f and g are defined by f(x) = 100x and g(x) = 2^x, for x > 0. Which statement best describes how the values of f and g compare as x increases?',
        choices:{
          A:'f(x) is greater than g(x) for every value of x > 0',
          B:'g(x) eventually exceeds f(x) and stays greater for all larger x',
          C:'f(x) and g(x) are equal for every value of x > 0',
          D:'g(x) is greater than f(x) for every value of x > 0'
        },
        correct:'B',
        expCorrect:'f crece de forma LINEAL (constante 100 por unidad) y g crece de forma EXPONENCIAL (se duplica cada unidad). Al principio la lineal gana: en x = 5, f = 500 pero g = 32. Sin embargo, un modelo exponencial siempre termina superando a uno lineal: en x = 10, g = 1024 > f = 1000, y de ahí en adelante g se queda por encima. Por eso g eventualmente supera y se mantiene mayor.',
        expWrong:{
          A:'Falso: aunque f gana al inicio, g la supera para x grande (por ejemplo en x = 10). La exponencial no se queda atrás para siempre.',
          C:'No son iguales para todo x; sus valores solo se cruzan en un punto, no coinciden en todos lados.',
          D:'Falso al inicio: en x = 1, f = 100 pero g = 2, así que f empieza mucho más grande. g no es mayor "siempre".'
        },
        tip:'Regla clave del SAT: una función exponencial creciente SIEMPRE termina superando a cualquier lineal o polinómica, aunque arranque más abajo. "Eventualmente" es la palabra que delata la respuesta.'
      },
      {
        id:'HMP-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Composición de funciones',
        stem:'The functions f and g are defined by f(x) = 3x − 4 and g(x) = x² + 2. What is the value of g(f(3))?',
        choices:{A:'11', B:'29', C:'27', D:'23'},
        correct:'C',
        expCorrect:'Trabaja de adentro hacia afuera. Primero f(3) = 3(3) − 4 = 5. Luego g(5) = 5² + 2 = 25 + 2 = 27. Entonces g(f(3)) = 27.',
        expWrong:{
          A:'11 es g(3) = 3² + 2, es decir, aplicaste solo g al 3 y olvidaste evaluar f primero.',
          B:'29 es f(g(3)) = 3(11) − 4, o sea invertiste el orden. g(f(3)) aplica f primero, luego g.',
          D:'23 olvida el "+ 2" de g: 5² = 25 y sumas 2 → 27, no 23 (o evaluaste g(3²) mal).'
        },
        tip:'g(f(3)) se lee de adentro hacia afuera: calcula f(3) primero y ese resultado entra a g. El orden importa: g(f(x)) ≠ f(g(x)).'
      },
      {
        id:'HMP-11', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Ceros de un polinomio (forma factorizada)',
        stem:'The polynomial p is defined by p(x) = x³ − 7x² + 10x. What is the greatest value of x for which p(x) = 0?',
        answer:'5',
        expCorrect:'Factoriza sacando x común: p(x) = x(x² − 7x + 10) = x(x − 2)(x − 5). Un producto es cero cuando algún factor es cero, así que los ceros son x = 0, x = 2 y x = 5. El mayor es 5. (Comprobación: p(5) = 125 − 175 + 50 = 0 ✓.) Respuesta: 5.',
        expWrong:{},
        tip:'Primero saca el factor común (aquí x), luego factoriza la cuadrática que sobra. Cada factor da un cero. Piden el MAYOR, así que compara: 0, 2, 5 → 5.'
      },
      {
        id:'HMP-12', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Teorema del factor con parámetro',
        stem:'The polynomial p is defined by p(x) = x³ + ax² − 4x − 12, where a is a constant. If (x − 2) is a factor of p(x), what is the value of a?',
        answer:'3',
        expCorrect:'Por el teorema del factor, si (x − 2) es factor entonces p(2) = 0. Sustituye: (2)³ + a(2)² − 4(2) − 12 = 8 + 4a − 8 − 12 = 4a − 12. Igualas a 0: 4a − 12 = 0 → 4a = 12 → a = 3. (Comprobación: 8 + 3(4) − 8 − 12 = 8 + 12 − 8 − 12 = 0 ✓.) Respuesta: 3.',
        expWrong:{},
        tip:'(x − a) es factor ⇔ p(a) = 0. Aquí evalúa p(2), iguala a 0 y despeja el parámetro. Sustituir es más rápido que dividir.'
      }
    ]
  });
})();
