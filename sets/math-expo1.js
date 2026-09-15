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
        expCorrect:'Same base multiplying → ADD the exponents: 2⁻³ · 2⁵ = 2^(−3+5) = 2² = 4. The negative exponent enters the sum with its sign, and that is that. (Check: (1/8)(32) = 4 ✓.)',
        expWrong:{
          A:'1/4 = 2⁻² applies one reciprocal too many: the negative sign was already spent adding −3 + 5 = 2. The result is 2², not 2⁻².',
          C:'256 = 2⁸ comes from adding 3 + 5 while ignoring the sign of the −3. The exponent is −3, not 3.',
          D:'A negative exponent does NOT make the result negative: it means a reciprocal (2⁻³ = 1/8, which is positive). 2² = 4, positive.'
        },
        tip:'a^m · a^n = a^(m+n): with the same base, add exponents WITH THEIR SIGNS. And remember: a negative exponent means a reciprocal, never a negative result.',
        desmos:'Escribe 2^{-3}*2^5 en Desmos y te da 4 directo. Compara con 2^2: da lo mismo, porque −3 + 5 = 2.',
        desmosLatex:['2^{-3}*2^5', '2^2']
      },
      {
        id:'EXF-02', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Exponentes enteros (potencia de una potencia)',
        stem:'Which of the following is equivalent to (x⁴)³ · x², where x ≠ 0?',
        choices:{A:'x⁹', B:'x¹²', C:'x¹⁴', D:'x²⁴'},
        correct:'C',
        expCorrect:'Power of a power → MULTIPLY: (x⁴)³ = x¹². Then a product with the same base → ADD: x¹² · x² = x¹⁴. (Check with x = 2: 4096 · 4 = 16384 = 2¹⁴ ✓.)',
        expWrong:{
          A:'x⁹ comes from adding 4 + 3 + 2: you mixed the two rules. The parentheses (x⁴)³ multiply the exponents (4·3 = 12), they do not add them.',
          B:'x¹² is only (x⁴)³; you forgot to multiply by the x² outside, which adds 2 to the exponent.',
          D:'x²⁴ multiplies EVERYTHING (4·3·2): the final x² enters as a factor, so its exponent gets ADDED, not multiplied.'
        },
        tip:'Two different rules: (a^m)^n = a^(mn) — multiply; a^m · a^n = a^(m+n) — add. Resolve the parentheses first and the product after.',
        desmos:'Pruébalo con un número: escribe (2^4)^3*2^2 en Desmos y te da 16384. Luego escribe 2^{14}: da igual, así que la expresión es x¹⁴.',
        desmosLatex:['(2^4)^3*2^2', '2^{14}']
      },
      {
        id:'EXF-03', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponentes negativos (cociente)',
        stem:'Which expression is equivalent to 6x⁵y⁻² / (2x²y³), where x > 0 and y > 0?',
        choices:{A:'3x³/y⁵', B:'3x³y⁵', C:'4x³/y⁵', D:'3x⁷/y⁵'},
        correct:'A',
        expCorrect:'Coefficients: 6/2 = 3. For x: x⁵/x² = x³ (subtract 5 − 2). For y: y⁻²/y³ = y^(−2−3) = y⁻⁵, and the negative exponent sends it to the denominator. Result: 3x³/y⁵.',
        expWrong:{
          B:'3x³y⁵ pone la y arriba: y⁻²/y³ = y⁻⁵, y el exponente NEGATIVO significa que y⁵ va en el denominador.',
          C:'4 comes from SUBTRACTING 6 − 2. Coefficients divide like ordinary numbers: 6/2 = 3.',
          D:'x⁷ comes from ADDING 5 + 2. When dividing powers of the same base the exponents are SUBTRACTED: 5 − 2 = 3.'
        },
        tip:'a^m / a^n = a^(m−n): when dividing, SUBTRACT exponents (top minus bottom). If you are left with a negative exponent, move that factor to the other side of the fraction and flip its sign.',
        desmos:'Chequea con x = 2, y = 2: escribe (6*2^5*2^{-2})/(2*2^2*2^3) y te da 0.75. Luego 3*2^3/2^5 también da 0.75: son equivalentes.',
        desmosLatex:['(6*2^5*2^{-2})/(2*2^2*2^3)', '3*2^3/2^5']
      },
      {
        id:'EXF-04', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Exponentes fraccionarios (evaluar)',
        stem:'What is the value of 27^(2/3)?',
        choices:{A:'3', B:'9', C:'18', D:'729'},
        correct:'B',
        expCorrect:'The denominator is the root and the numerator the power: 27^(2/3) = (∛27)² = 3² = 9. Taking the root first keeps the numbers small.',
        expWrong:{
          A:'3 is only ∛27: you took the cube root but forgot to square it (the 2 in the numerator).',
          C:'18 comes from multiplying 27 × 2/3. A fractional exponent does NOT multiply the base: it signals a root and a power.',
          D:'729 is 27²: you squared it but forgot the cube root (the 3 in the denominator).'
        },
        tip:'a^(m/n) = (ⁿ√a)^m: denominator = index of the root, numerator = the power. Trick: root FIRST, power after — 27 → 3 → 9, with no giant numbers.',
        desmos:'Escribe 27^{2/3} en Desmos y te da 9 directo. Compara con 27^{1/3} (da 3): el numerador 2 eleva ese 3 al cuadrado.',
        desmosLatex:['27^{2/3}', '27^{1/3}']
      },
      {
        id:'EXF-05', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponentes fraccionarios (radical ↔ exponente)',
        stem:'Which of the following is equivalent to x^(3/4), where x > 0?',
        choices:{A:'⁴√(x³)', B:'³√(x⁴)', C:'(√x)³', D:'(x³)⁴'},
        correct:'A',
        expCorrect:'x^(3/4) = the FOURTH root (denominator 4) of x CUBED (numerator 3): ⁴√(x³). (⁴√x)³ works too — the root and the power can be done in either order.',
        expWrong:{
          B:'³√(x⁴) = x^(4/3): you flipped the fraction. The DENOMINATOR of the exponent is the index of the root, not the numerator.',
          C:'(√x)³ = x^(3/2): you used a square root, but the denominator 4 calls for a FOURTH root.',
          D:'(x³)⁴ = x¹²: that is power of a power (multiply exponents); it has nothing to do with a fractional exponent.'
        },
        tip:'x^(m/n) = ⁿ√(x^m): the fraction reads “power m, root n”. The BOTTOM one is the root — memorize “the denominator hides in the root”.',
        desmos:'Grafica y=x^{3/4} y encima la raíz cuarta de x³: las dos curvas quedan una sobre la otra para x ≥ 0, o sea que son la misma expresión.',
        desmosLatex:['y=x^{3/4}', 'y=\\sqrt[4]{x^3}']
      },
      {
        id:'EXF-06', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Fractional exponents (solving an equation)',
        stem:'If a^(3/2) = 27, where a > 0, what is the value of a?',
        answer:'9',
        expCorrect:'To solve for a, raise both sides to the RECIPROCAL exponent (2/3): (a^(3/2))^(2/3) = a¹ = a, and 27^(2/3) = (∛27)² = 3² = 9. So a = 9. (Check: 9^(3/2) = (√9)³ = 3³ = 27 ✓.) Answer: 9.',
        expWrong:{},
        tip:'To undo a fractional exponent, raise to the reciprocal: (a^(m/n))^(n/m) = a. Here the reciprocal of 3/2 is 2/3. Always verify by plugging your answer back into the original equation.',
        desmos:'Escribe 27^{2/3} en Desmos y te da 9: esa es a. Verifica con 9^{3/2}, que da 27, exactamente el lado derecho de la ecuación.',
        desmosLatex:['27^{2/3}', '9^{3/2}']
      },
      {
        id:'EXF-07', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Ecuaciones exponenciales (bases iguales)',
        stem:'What is the solution to the equation 4^x = 8^(x − 1)?',
        choices:{A:'1', B:'2', C:'3', D:'−3'},
        correct:'C',
        expCorrect:'Rewrite everything in base 2: 4^x = 2^(2x) and 8^(x−1) = 2^(3(x−1)) = 2^(3x−3). Set the exponents equal: 2x = 3x − 3 → x = 3. (Check: 4³ = 64 and 8² = 64 ✓.)',
        expWrong:{
          A:'1 comes from writing 8^(x−1) as 2^(3x−1): the 3 multiplies the WHOLE exponent, so it is 3(x − 1) = 3x − 3, not 3x − 1.',
          B:'2 comes from setting up 4x = 8x − 8, as if the bases multiplied the exponents. You have to convert to base 2 and set the EXPONENTS equal.',
          D:'−3 is a sign error while distributing: 3(x − 1) = 3x − 3, so 2x = 3x − 3 gives x = 3, not 2x = 3x + 3.'
        },
        tip:'When the bases are not equal but are powers of the same number (4 = 2², 8 = 2³), convert them to that common base and distribute the exponent CAREFULLY. Then set the exponents equal.',
        desmos:'Grafica y=4^x y y=8^{x-1}: se cruzan en (3, 64). La coordenada x del punto de cruce es la solución de la ecuación.',
        desmosLatex:['y=4^x', 'y=8^{x-1}']
      },
      {
        id:'EXF-08', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Ecuaciones exponenciales (bases iguales)',
        stem:'If 2^(3x) = 2^12, what is the value of x?',
        choices:{A:'4', B:'9', C:'12', D:'36'},
        correct:'A',
        expCorrect:'Same base → set the exponents equal: 3x = 12 → x = 4. (Check: 2^(3·4) = 2^12 ✓.)',
        expWrong:{
          B:'9 comes from subtracting 12 − 3. The equation 3x = 12 is solved by DIVIDING by 3, not by subtracting.',
          C:'12 is the exponent on the right-hand side; the last step is still missing: divide by 3.',
          D:'36 comes from multiplying 12 × 3 instead of dividing: if 3x = 12, then x = 12/3 = 4.'
        },
        tip:'a^m = a^n with the same base ⇒ m = n. Set the exponents equal and solve the linear equation left: 3x = 12 → x = 4.',
        desmos:'Resuelve 3x = 12: escribe 12/3 en Desmos y te da 4. Verifica que 2^{3*4} y 2^{12} dan el mismo número (4096).',
        desmosLatex:['12/3', '2^{3*4}']
      },
      {
        id:'EXF-09', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Crecimiento exponencial (modelo)',
        stem:'An investment account has an initial value of $2,000, and the value increases by 5% each year. Which function V gives the value of the account, in dollars, after t years?',
        choices:{A:'V(t) = 2,000(0.05)^t', B:'V(t) = 2,000 + 0.05t', C:'V(t) = 2,000(1.5)^t', D:'V(t) = 2,000(1.05)^t'},
        correct:'D',
        expCorrect:'Growing 5% each year multiplies by (1 + 0.05) = 1.05 every period: V(t) = 2,000(1.05)^t. (Check: at t = 1, V = 2,000 · 1.05 = 2,100, which is 2,000 plus 5% ✓.)',
        expWrong:{
          A:'Multiplying by 0.05 would leave only 5% of the value each year (a brutal drop), not 5% growth. The growth factor is 1 + 0.05.',
          B:'This model is LINEAR: it adds the same fixed amount every year. A percentage applied each year is multiplicative → exponential.',
          C:'1.5 would be 50% growth per year. 5% = 0.05, so the factor is 1.05, not 1.5. Careful converting the percentage to a decimal.'
        },
        tip:'Growth of r% per period → y = initial · (1 + r/100)^t. “Increases by 5%” is ×1.05 each year. Always verify with t = 1: it has to give the initial plus the percentage.',
        desmos:'Grafica y=2000*1.05^x y toca el punto en x = 1: da 2100 (2000 más el 5%). Compara con la lineal y=2000+100x: al principio van parecidas, pero la exponencial despega.',
        desmosLatex:['y=2000*1.05^x', 'y=2000+100x']
      },
      {
        id:'EXF-10', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Decaimiento exponencial (modelo)',
        stem:'A car is purchased for $24,000, and its value decreases by 15% each year. Which function v gives the value of the car, in dollars, t years after it is purchased?',
        choices:{A:'v(t) = 24,000(1.15)^t', B:'v(t) = 24,000(0.15)^t', C:'v(t) = 24,000 − 0.15t', D:'v(t) = 24,000(0.85)^t'},
        correct:'D',
        expCorrect:'Losing 15% each year leaves 85%: the factor is (1 − 0.15) = 0.85, so v(t) = 24,000(0.85)^t. (Check: at t = 1, v = 24,000 · 0.85 = 20,400, which is 24,000 minus 15% ✓.)',
        expWrong:{
          A:'1.15 models 15% GROWTH per year, and the car loses value. For decay you subtract: 1 − 0.15 = 0.85.',
          B:'0.15 would leave only 15% of the value each year (an 85% loss). The correct factor is what is LEFT: 0.85.',
          C:'This model is linear and on top of that it subtracts cents (0.15 dollars per year). A repeated annual percentage is multiplicative → exponential.'
        },
        tip:'Decay of r% → factor (1 − r/100)^t: the base is what is LEFT, not what is lost. Quick rule: growth base > 1, decay base between 0 and 1.',
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
        tip:'Half-life: amount = initial · (1/2)^(t/period). First count how many times it halves (t ÷ period = 12/3 = 4) and then halve that many times.',
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
        expCorrect:'Growing 4% each year means MULTIPLYING by 1.04 every year: change by a constant factor → exponential (P(t) = 50,000(1.04)^t). The other three add or subtract a fixed amount per period → linear.',
        expWrong:{
          A:'Adding a fixed $2,000 every year is change by a constant AMOUNT → linear (40,000 + 2,000t).',
          C:'$2 per mile is a fixed rate per unit → linear (3 + 2m), the classic line with slope 2.',
          D:'Draining 30 gallons every minute subtracts a constant amount per minute → linear decreasing, not exponential.'
        },
        tip:'The key test: does it change by a fixed AMOUNT (adding/subtracting) or by a fixed FACTOR/percentage (multiplying)? Fixed amount → linear. Percentage or factor → exponential. Look for the “%” word.',
        desmos:'Grafica y=50000*1.04^x junto a y=40000+2000x: la recta sube parejo, pero la exponencial se curva y a la larga la deja atrás. Ese "multiplicar cada período" es la firma exponencial.',
        desmosLatex:['y=50000*1.04^x', 'y=40000+2000x']
      }
    ]
  });
})();
