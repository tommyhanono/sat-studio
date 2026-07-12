/* SAT Studio question set — Math: Exponents & Exponentials (EXF-01 a EXF-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-expo1',
    title: 'Exponents & Exponentials — Focus',
    section: 'math',
    level: 'Media',
    description: 'Exponent rules (integer, negative, fractional), exponential equations, and growth/decay models.',
    minutes: 16,
    questions: [
      {
        id:'EXF-01', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Exponentes enteros (producto de potencias)',
        stem:'Which of the following is the value of 2⁻³ · 2⁵?',
        choices:{A:'1/4', B:'4', C:'256', D:'−4'},
        correct:'B',
        expCorrect:'Misma base multiplicando → SUMA los exponentes: 2⁻³ · 2⁵ = 2^(−3+5) = 2² = 4. El exponente negativo entra a la suma con su signo, y ya. (Comprobación: (1/8)(32) = 4 ✓.)',
        expWrong:{
          A:'1/4 = 2⁻² aplica un recíproco de más: el signo negativo ya se gastó al sumar −3 + 5 = 2. El resultado es 2², no 2⁻².',
          C:'256 = 2⁸ sale de sumar 3 + 5 ignorando el signo del −3. El exponente es −3, no 3.',
          D:'Un exponente negativo NO hace negativo el resultado: significa recíproco (2⁻³ = 1/8, que es positivo). 2² = 4, positivo.'
        },
        tip:'a^m · a^n = a^(m+n): con la misma base, suma exponentes CON SUS SIGNOS. Y recuerda: exponente negativo = recíproco, nunca un resultado negativo.',
        desmos:'Escribe 2^{-3}*2^5 en Desmos y te da 4 directo. Compara con 2^2: da lo mismo, porque −3 + 5 = 2.',
        desmosLatex:['2^{-3}*2^5', '2^2']
      },
      {
        id:'EXF-02', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Exponentes enteros (potencia de una potencia)',
        stem:'Which of the following is equivalent to (x⁴)³ · x², where x ≠ 0?',
        choices:{A:'x⁹', B:'x¹²', C:'x¹⁴', D:'x²⁴'},
        correct:'C',
        expCorrect:'Potencia de potencia → MULTIPLICA: (x⁴)³ = x¹². Luego producto con la misma base → SUMA: x¹² · x² = x¹⁴. (Comprobación con x = 2: 4096 · 4 = 16384 = 2¹⁴ ✓.)',
        expWrong:{
          A:'x⁹ sale de sumar 4 + 3 + 2: mezclaste las dos reglas. El paréntesis (x⁴)³ multiplica los exponentes (4·3 = 12), no los suma.',
          B:'x¹² es solo (x⁴)³; te faltó multiplicar por el x² de afuera, que suma 2 al exponente.',
          D:'x²⁴ multiplica TODO (4·3·2): el x² final entra como factor, así que su exponente se SUMA, no se multiplica.'
        },
        tip:'Dos reglas distintas: (a^m)^n = a^(mn) — multiplica; a^m · a^n = a^(m+n) — suma. Resuelve el paréntesis primero y después el producto.',
        desmos:'Pruébalo con un número: escribe (2^4)^3*2^2 en Desmos y te da 16384. Luego escribe 2^{14}: da igual, así que la expresión es x¹⁴.',
        desmosLatex:['(2^4)^3*2^2', '2^{14}']
      },
      {
        id:'EXF-03', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponentes negativos (cociente)',
        stem:'Which expression is equivalent to 6x⁵y⁻² / (2x²y³), where x > 0 and y > 0?',
        choices:{A:'3x³/y⁵', B:'3x³y⁵', C:'4x³/y⁵', D:'3x⁷/y⁵'},
        correct:'A',
        expCorrect:'Coeficientes: 6/2 = 3. Con x: x⁵/x² = x³ (resta 5 − 2). Con y: y⁻²/y³ = y^(−2−3) = y⁻⁵, y el exponente negativo lo manda al denominador. Resultado: 3x³/y⁵.',
        expWrong:{
          B:'3x³y⁵ pone la y arriba: y⁻²/y³ = y⁻⁵, y el exponente NEGATIVO significa que y⁵ va en el denominador.',
          C:'4 sale de RESTAR 6 − 2. Los coeficientes se dividen como números normales: 6/2 = 3.',
          D:'x⁷ sale de SUMAR 5 + 2. Al dividir potencias de la misma base los exponentes se RESTAN: 5 − 2 = 3.'
        },
        tip:'a^m / a^n = a^(m−n): al dividir, RESTA exponentes (arriba menos abajo). Si te queda un exponente negativo, cruza ese factor al otro lado de la fracción y cámbiale el signo.',
        desmos:'Chequea con x = 2, y = 2: escribe (6*2^5*2^{-2})/(2*2^2*2^3) y te da 0.75. Luego 3*2^3/2^5 también da 0.75: son equivalentes.',
        desmosLatex:['(6*2^5*2^{-2})/(2*2^2*2^3)', '3*2^3/2^5']
      },
      {
        id:'EXF-04', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Exponentes fraccionarios (evaluar)',
        stem:'What is the value of 27^(2/3)?',
        choices:{A:'3', B:'9', C:'18', D:'729'},
        correct:'B',
        expCorrect:'El denominador es la raíz y el numerador la potencia: 27^(2/3) = (∛27)² = 3² = 9. Sacar la raíz primero mantiene los números pequeños.',
        expWrong:{
          A:'3 es solo ∛27: hiciste la raíz cúbica pero te faltó elevar al cuadrado (el 2 del numerador).',
          C:'18 sale de multiplicar 27 × 2/3. El exponente fraccionario NO multiplica la base: indica raíz y potencia.',
          D:'729 es 27²: elevaste al cuadrado pero se te olvidó la raíz cúbica (el 3 del denominador).'
        },
        tip:'a^(m/n) = (ⁿ√a)^m: denominador = índice de la raíz, numerador = potencia. Truco: raíz PRIMERO, potencia después — 27 → 3 → 9, sin números gigantes.',
        desmos:'Escribe 27^{2/3} en Desmos y te da 9 directo. Compara con 27^{1/3} (da 3): el numerador 2 eleva ese 3 al cuadrado.',
        desmosLatex:['27^{2/3}', '27^{1/3}']
      },
      {
        id:'EXF-05', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponentes fraccionarios (radical ↔ exponente)',
        stem:'Which of the following is equivalent to x^(3/4), where x > 0?',
        choices:{A:'⁴√(x³)', B:'³√(x⁴)', C:'(√x)³', D:'(x³)⁴'},
        correct:'A',
        expCorrect:'x^(3/4) = raíz CUARTA (denominador 4) de x AL CUBO (numerador 3): ⁴√(x³). También vale (⁴√x)³ — la raíz y la potencia se pueden hacer en cualquier orden.',
        expWrong:{
          B:'³√(x⁴) = x^(4/3): invertiste la fracción. El DENOMINADOR del exponente es el índice de la raíz, no el numerador.',
          C:'(√x)³ = x^(3/2): usaste raíz cuadrada, pero el denominador 4 pide raíz CUARTA.',
          D:'(x³)⁴ = x¹²: eso es potencia de potencia (multiplica exponentes), no tiene nada que ver con un exponente fraccionario.'
        },
        tip:'x^(m/n) = ⁿ√(x^m): la fracción se lee "potencia m, raíz n". El de ABAJO es la raíz — memoriza "el denominador se esconde en la raíz".',
        desmos:'Grafica y=x^{3/4} y encima la raíz cuarta de x³: las dos curvas quedan una sobre la otra para x ≥ 0, o sea que son la misma expresión.',
        desmosLatex:['y=x^{3/4}', 'y=\\sqrt[4]{x^3}']
      },
      {
        id:'EXF-06', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponentes fraccionarios (resolver ecuación)',
        stem:'If a^(3/2) = 27, where a > 0, what is the value of a?',
        answer:'9',
        expCorrect:'Para despejar a, eleva ambos lados al exponente RECÍPROCO (2/3): (a^(3/2))^(2/3) = a¹ = a, y 27^(2/3) = (∛27)² = 3² = 9. Así que a = 9. (Comprobación: 9^(3/2) = (√9)³ = 3³ = 27 ✓.) Respuesta: 9.',
        expWrong:{},
        tip:'Para deshacer un exponente fraccionario, eleva al recíproco: (a^(m/n))^(n/m) = a. Aquí el recíproco de 3/2 es 2/3. Siempre verifica metiendo tu respuesta en la ecuación original.',
        desmos:'Escribe 27^{2/3} en Desmos y te da 9: esa es a. Verifica con 9^{3/2}, que da 27, exactamente el lado derecho de la ecuación.',
        desmosLatex:['27^{2/3}', '9^{3/2}']
      },
      {
        id:'EXF-07', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Ecuaciones exponenciales (bases iguales)',
        stem:'What is the solution to the equation 4^x = 8^(x − 1)?',
        choices:{A:'1', B:'2', C:'3', D:'−3'},
        correct:'C',
        expCorrect:'Reescribe todo en base 2: 4^x = 2^(2x) y 8^(x−1) = 2^(3(x−1)) = 2^(3x−3). Iguala exponentes: 2x = 3x − 3 → x = 3. (Comprobación: 4³ = 64 y 8² = 64 ✓.)',
        expWrong:{
          A:'1 sale de escribir 8^(x−1) como 2^(3x−1): el 3 multiplica TODO el exponente, así que es 3(x − 1) = 3x − 3, no 3x − 1.',
          B:'2 sale de plantear 4x = 8x − 8, como si las bases multiplicaran a los exponentes. Hay que pasar a base 2 e igualar los EXPONENTES.',
          D:'−3 es un error de signo al distribuir: 3(x − 1) = 3x − 3, así que 2x = 3x − 3 da x = 3, no 2x = 3x + 3.'
        },
        tip:'Cuando las bases no son iguales pero son potencias del mismo número (4 = 2², 8 = 2³), pásalas a esa base común y distribuye BIEN el exponente. Luego iguala exponentes.',
        desmos:'Grafica y=4^x y y=8^{x-1}: se cruzan en (3, 64). La coordenada x del punto de cruce es la solución de la ecuación.',
        desmosLatex:['y=4^x', 'y=8^{x-1}']
      },
      {
        id:'EXF-08', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Ecuaciones exponenciales (bases iguales)',
        stem:'If 2^(3x) = 2^12, what is the value of x?',
        choices:{A:'4', B:'9', C:'12', D:'36'},
        correct:'A',
        expCorrect:'Misma base → iguala exponentes: 3x = 12 → x = 4. (Comprobación: 2^(3·4) = 2^12 ✓.)',
        expWrong:{
          B:'9 sale de restar 12 − 3. La ecuación 3x = 12 se resuelve DIVIDIENDO entre 3, no restando.',
          C:'12 es el exponente del lado derecho; todavía falta el último paso: dividir entre 3.',
          D:'36 sale de multiplicar 12 × 3 en vez de dividir: si 3x = 12, entonces x = 12/3 = 4.'
        },
        tip:'a^m = a^n con la misma base ⇒ m = n. Iguala los exponentes y resuelve la lineal que quede: 3x = 12 → x = 4.',
        desmos:'Resuelve 3x = 12: escribe 12/3 en Desmos y te da 4. Verifica que 2^{3*4} y 2^{12} dan el mismo número (4096).',
        desmosLatex:['12/3', '2^{3*4}']
      },
      {
        id:'EXF-09', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Crecimiento exponencial (modelo)',
        stem:'An investment account has an initial value of $2,000, and the value increases by 5% each year. Which function V gives the value of the account, in dollars, after t years?',
        choices:{A:'V(t) = 2,000(0.05)^t', B:'V(t) = 2,000 + 0.05t', C:'V(t) = 2,000(1.5)^t', D:'V(t) = 2,000(1.05)^t'},
        correct:'D',
        expCorrect:'Crecer 5% cada año multiplica por (1 + 0.05) = 1.05 en cada período: V(t) = 2,000(1.05)^t. (Comprobación: en t = 1, V = 2,000 · 1.05 = 2,100, que es 2,000 más el 5% ✓.)',
        expWrong:{
          A:'Multiplicar por 0.05 dejaría solo el 5% del valor cada año (una caída brutal), no un crecimiento del 5%. El factor de crecimiento es 1 + 0.05.',
          B:'Este modelo es LINEAL: suma la misma cantidad fija cada año. Un porcentaje que se aplica cada año es multiplicativo → exponencial.',
          C:'1.5 sería crecer 50% por año. 5% = 0.05, así que el factor es 1.05, no 1.5. Cuidado al convertir el porcentaje a decimal.'
        },
        tip:'Crecimiento de r% por período → y = inicial · (1 + r/100)^t. "Increases by 5%" es ×1.05 cada año. Verifica siempre con t = 1: debe dar el inicial más el porcentaje.',
        desmos:'Grafica y=2000*1.05^x y toca el punto en x = 1: da 2100 (2000 más el 5%). Compara con la lineal y=2000+100x: al principio van parecidas, pero la exponencial despega.',
        desmosLatex:['y=2000*1.05^x', 'y=2000+100x']
      },
      {
        id:'EXF-10', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Decaimiento exponencial (modelo)',
        stem:'A car is purchased for $24,000, and its value decreases by 15% each year. Which function v gives the value of the car, in dollars, t years after it is purchased?',
        choices:{A:'v(t) = 24,000(1.15)^t', B:'v(t) = 24,000(0.15)^t', C:'v(t) = 24,000 − 0.15t', D:'v(t) = 24,000(0.85)^t'},
        correct:'D',
        expCorrect:'Perder 15% cada año deja el 85%: el factor es (1 − 0.15) = 0.85, así que v(t) = 24,000(0.85)^t. (Comprobación: en t = 1, v = 24,000 · 0.85 = 20,400, que es 24,000 menos el 15% ✓.)',
        expWrong:{
          A:'1.15 modela un CRECIMIENTO del 15% por año, y el carro pierde valor. Para decaimiento restas: 1 − 0.15 = 0.85.',
          B:'0.15 dejaría solo el 15% del valor cada año (perdería el 85%). El factor correcto es lo que QUEDA: 0.85.',
          C:'Este modelo es lineal y además resta centavos (0.15 dólares por año). Un porcentaje anual repetido es multiplicativo → exponencial.'
        },
        tip:'Decaimiento de r% → factor (1 − r/100)^t: la base es lo que QUEDA, no lo que se pierde. Regla rápida: crecimiento base > 1, decaimiento base entre 0 y 1.',
        desmos:'Grafica y=24000*0.85^x: en x = 1 da 20400 (perdió el 15%) y la curva baja cada vez más lento, la firma clásica del decaimiento exponencial.',
        desmosLatex:['y=24000*0.85^x']
      },
      {
        id:'EXF-11', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Semivida (evaluar el modelo)',
        stem:'A scientist has a 400-milligram sample of a substance. The mass of the sample is halved every 3 hours. How many milligrams of the sample remain after 12 hours?',
        answer:'25',
        expCorrect:'Modelo de semivida: m(t) = 400 · (1/2)^(t/3). En t = 12 horas hay 12/3 = 4 semividas: m = 400 · (1/2)⁴ = 400/16 = 25 miligramos. (Paso a paso: 400 → 200 → 100 → 50 → 25 ✓.) Respuesta: 25.',
        expWrong:{},
        tip:'Semivida: cantidad = inicial · (1/2)^(t/período). Primero cuenta cuántas veces se reduce a la mitad (t ÷ período = 12/3 = 4) y luego divide entre 2 esa cantidad de veces.',
        desmos:'Escribe 400*(1/2)^{12/3} en Desmos y te da 25. También puedes graficar y=400*(1/2)^{x/3} y tocar el punto en x = 12.',
        desmosLatex:['400*(1/2)^{12/3}', 'y=400*(1/2)^{x/3}']
      },
      {
        id:'EXF-12', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Exponencial vs lineal',
        stem:'Which of the following situations is best modeled by an exponential function?',
        choices:{
          A:'A worker’s salary starts at $40,000 and increases by $2,000 each year.',
          B:'A city’s population starts at 50,000 and increases by 4% each year.',
          C:'A ride service charges $3 plus $2 for each mile traveled.',
          D:'A tank drains at a constant rate of 30 gallons per minute.'
        },
        correct:'B',
        expCorrect:'Crecer 4% cada año significa MULTIPLICAR por 1.04 cada año: cambio por un factor constante → exponencial (P(t) = 50,000(1.04)^t). Las otras tres suman o restan una cantidad fija por período → lineales.',
        expWrong:{
          A:'Sumar $2,000 fijos cada año es cambio por una CANTIDAD constante → lineal (40,000 + 2,000t).',
          C:'$2 por cada milla es una tarifa fija por unidad → lineal (3 + 2m), la clásica recta con pendiente 2.',
          D:'Vaciar 30 galones cada minuto resta una cantidad constante por minuto → lineal decreciente, no exponencial.'
        },
        tip:'La prueba clave: ¿cambia por una CANTIDAD fija (suma/resta) o por un FACTOR/porcentaje fijo (multiplica)? Cantidad fija → lineal. Porcentaje o factor → exponencial. Busca la palabra "%".',
        desmos:'Grafica y=50000*1.04^x junto a y=40000+2000x: la recta sube parejo, pero la exponencial se curva y a la larga la deja atrás. Ese "multiplicar cada período" es la firma exponencial.',
        desmosLatex:['y=50000*1.04^x', 'y=40000+2000x']
      }
    ]
  });
})();
