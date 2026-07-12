/* SAT Studio question set — Math: Algebra + Functions Mashup (Hard tier) */
(function(){
  window.SAT_SETS.push({
    id: 'math-mashup-alg-func',
    title: 'Math — Algebra + Functions (Hard Mashup)',
    section: 'math',
    level: 'Difícil',
    description: 'Multi-step algebra and advanced functions: systems with quadratics, piecewise functions, exponential models, parametric solving.',
    minutes: 16,
    questions: [
      {
        id:'MASH-01', type:'mc', domain:'Algebra + Functions', difficulty:'Difícil',
        skill:'Systems with quadratics (substitution)',
        stem:'The system of equations consists of y = x² + 3x and y = 2x + 6. How many real solutions does this system have?',
        choices:{A:'0', B:'1', C:'2', D:'3'},
        correct:'C',
        expCorrect:'Set equations equal: x² + 3x = 2x + 6 → x² + x − 6 = 0 → (x + 3)(x − 2) = 0. So x = −3 or x = 2. Two x-values → two real solutions. (Check: at x = −3, y = 0 in both; at x = 2, y = 10 in both.)',
        expWrong:{
          A:'0 assumes the parabola and line never intersect. They do — the discriminant of x² + x − 6 is 1 + 24 = 25 > 0.',
          B:'1 results from miscounting the factorization (thinking only x = −3 or only x = 2 works). Solve the quadratic completely.',
          D:'3 is a trap if you confuse the coefficient 3 in the equation with the number of solutions; a line meets a parabola at most twice.'
        },
        tip:'For systems with quadratic + linear, substitute the linear into the quadratic, get a quadratic in one variable, and count real solutions with the discriminant (≥ 0).'
      },
      {
        id:'MASH-02', type:'mc', domain:'Algebra + Functions', difficulty:'Difícil',
        skill:'Piecewise functions and domain constraints',
        stem:'A function f is defined as f(x) = 2x + 1 if x ≤ 2, and f(x) = x² − 3 if x > 2. What is the value of f(3) − f(0)?',
        choices:{A:'4', B:'5', C:'6', D:'7'},
        correct:'B',
        expCorrect:'Para f(3): como 3 > 2, usa x² − 3 → f(3) = 9 − 3 = 6. Para f(0): como 0 ≤ 2, usa 2x + 1 → f(0) = 2(0) + 1 = 1. Entonces f(3) − f(0) = 6 − 1 = 5.',
        expWrong:{
          A:'4 sale de tomar f(0) = 2 (calculando 2(0 + 1) en vez de 2(0) + 1 = 1): 6 − 2 = 4.',
          C:'6 es solo f(3); te faltó restar f(0).',
          D:'7 sale de usar la pieza equivocada para f(3): 2(3) + 1 = 7. Como 3 > 2, la pieza correcta es x² − 3.'
        },
        tip:'En funciones a trozos, revisa la condición (≤ o >) para CADA entrada antes de elegir la fórmula. No mezcles las piezas entre dominios.'
      },
      {
        id:'MASH-03', type:'mc', domain:'Algebra + Functions', difficulty:'Difícil',
        skill:'Exponential models with real-world parameters',
        stem:'A bacteria colony grows according to N(t) = 500 · 2^(t/3), where t is time in hours. How many bacteria are present after 6 hours?',
        choices:{A:'1000', B:'1500', C:'2000', D:'4000'},
        correct:'C',
        expCorrect:'Substitute t = 6: N(6) = 500 · 2^(6/3) = 500 · 2² = 500 · 4 = 2000.',
        expWrong:{
          A:'1000 results from computing 500 · 2 = 1000 (forgetting the exponent 6/3 = 2).',
          B:'1500 comes from adding 500 per doubling (linear thinking) instead of multiplying by 2.',
          D:'4000 is 500 · 8, which would be 2^3, not 2^2 — off by one doubling cycle.'
        },
        tip:'For exponential growth with a doubling time (here 3 hours), identify how many "doubling cycles" occur, then compute 2^(cycles).'
      },
      {
        id:'MASH-04', type:'mc', domain:'Algebra + Functions', difficulty:'Difícil',
        skill:'Solving for a parameter in a constraint',
        stem:'If the quadratic f(x) = ax² + 6x + c has a vertex at x = 2, what is the value of a?',
        choices:{A:'−1.5', B:'−2', C:'−3', D:'−4'},
        correct:'A',
        expCorrect:'The x-coordinate of the vertex of ax² + bx + c is −b/(2a). Here, −6/(2a) = 2 → −6 = 4a → a = −1.5.',
        expWrong:{
          B:'−2 comes from solving −6 = 3a (mixing up the 2 in the denominator with the vertex value).',
          C:'−3 results from solving −6 = 2a directly (dropping the factor from the vertex x-value).',
          D:'−4 confuses the structure of the vertex formula; the correct equation is −6 = 4a.'
        },
        tip:'Vertex x-coordinate: −b/(2a). Set it equal to the given x-value and solve for the unknown parameter.'
      },
      {
        id:'MASH-05', type:'mc', domain:'Algebra + Functions', difficulty:'Difícil',
        skill:'Multi-step reasoning: system + evaluation',
        stem:'Two functions are f(x) = 3x − 4 and g(x) = x² − 2. If f(a) = g(a) and a > 1, what is the value of a² − a?',
        choices:{A:'0', B:'2', C:'4', D:'6'},
        correct:'B',
        expCorrect:'Iguala: 3a − 4 = a² − 2 → a² − 3a + 2 = 0 → (a − 1)(a − 2) = 0 → a = 1 o a = 2. Como a > 1, queda a = 2. Entonces a² − a = 4 − 2 = 2.',
        expWrong:{
          A:'0 es a² − a cuando a = 1, pero la condición a > 1 descarta esa raíz.',
          C:'4 es a² con a = 2; te faltó restar a.',
          D:'6 sale de calcular a² + a = 4 + 2 en vez de a² − a.'
        },
        tip:'When two functions are equal at a point, set them equal, solve for the x-value, apply any given condition to pick the right root, then evaluate the requested expression.'
      },
      {
        id:'MASH-06', type:'mc', domain:'Algebra + Functions', difficulty:'Difícil',
        skill:'Inequalities with piecewise reasoning',
        stem:'For which values of x is f(x) > 0, where f(x) = (x − 2)(x + 4)?',
        choices:{A:'x < −4 or x > 2', B:'−4 < x < 2', C:'x > 2', D:'x < −4'},
        correct:'A',
        expCorrect:'The product (x − 2)(x + 4) = 0 when x = 2 or x = −4. Test regions: x < −4 (both factors negative → positive), −4 < x < 2 (one negative, one positive → negative), x > 2 (both positive → positive). So f(x) > 0 when x < −4 or x > 2.',
        expWrong:{
          B:'−4 < x < 2 is where f(x) < 0, not > 0; sign error.',
          C:'x > 2 is only half the solution; missing x < −4.',
          D:'x < −4 is only half the solution; missing x > 2.'
        },
        tip:'For a product of factors, find zeros, then test the sign in each region. Remember: negative × negative = positive; negative × positive = negative.'
      },
      {
        id:'MASH-07', type:'spr', domain:'Algebra + Functions', difficulty:'Difícil',
        skill:'Solving a system for one variable',
        stem:'If 2x + y = 10 and x − y = 4, what is the value of x?',
        answer:'14/3',
        expCorrect:'Add the two equations: (2x + y) + (x − y) = 10 + 4 → 3x = 14 → x = 14/3 ≈ 4.67. (Alternative: from x − y = 4, get y = x − 4. Substitute into 2x + y = 10: 2x + (x − 4) = 10 → 3x = 14 → x = 14/3.) Respuesta: 14/3.',
        expWrong:{},
        tip:'Truco SPR: si la respuesta es una fracción, escríbela tal cual (14/3). Como decimal debes llenar el cuadro completo: 4.666 o 4.667. Un decimal corto como 4.67 no se acepta.'
      },
      {
        id:'MASH-08', type:'mc', domain:'Algebra + Functions', difficulty:'Difícil',
        skill:'Composite functions and evaluation',
        stem:'If f(x) = 2x − 1 and g(x) = x² + 3, what is g(f(2))?',
        choices:{A:'10', B:'12', C:'14', D:'16'},
        correct:'B',
        expCorrect:'First, f(2) = 2(2) − 1 = 3. Then, g(f(2)) = g(3) = 3² + 3 = 9 + 3 = 12.',
        expWrong:{
          A:'10 results from computing f(g(2)) partially or dropping part of the constant; the correct chain is f(2) = 3, then g(3) = 12.',
          C:'14 comes from f(2) = 3, then computing 3² + 5 (wrong constant in g).',
          D:'16 results from computing f(2) = 4 (forgetting the −1), then 4² = 16 without adding correctly.'
        },
        tip:'Composite functions: work inside-out. Evaluate f first, get the result, then apply g to that result. Don\'t confuse the order.'
      },
      {
        id:'MASH-09', type:'mc', domain:'Algebra + Functions', difficulty:'Difícil',
        skill:'Recognizing exponential vs. linear growth',
        stem:'A savings account grows with an interest rate of 5% per year, compounded annually. If $1,000 is deposited, which model best represents the account balance after t years?',
        choices:{A:'A = 1000 + 50t', B:'A = 1000(1.05)^t', C:'A = 1000 + 1.05t', D:'A = 1000t + 50'},
        correct:'B',
        expCorrect:'Compound interest grows exponentially: A = P(1 + r)^t, where P = 1000 and r = 0.05. So A = 1000(1.05)^t. (Linear growth would be adding the same amount each year, not multiplying.)',
        expWrong:{
          A:'A = 1000 + 50t is linear (adding $50 per year); that is simple interest, not compounding.',
          C:'A = 1000 + 1.05t adds only about a dollar per year; it misuses the growth factor as a slope.',
          D:'A = 1000t + 50 is linear and incorrectly structured (it multiplies the deposit by t).'
        },
        tip:'Compound interest: exponential, factor (1 + r)^t. Simple interest: linear, adds the same amount each period. "Compounded" is your keyword for exponential.'
      },
      {
        id:'MASH-10', type:'mc', domain:'Algebra + Functions', difficulty:'Difícil',
        skill:'Inverse functions and solving',
        stem:'If f(x) = 3x − 5, what is f^(−1)(7)?',
        choices:{A:'2', B:'3', C:'4', D:'5'},
        correct:'C',
        expCorrect:'To find f^(−1)(7), solve f(x) = 7: 3x − 5 = 7 → 3x = 12 → x = 4. So f^(−1)(7) = 4. (Check: f(4) = 3(4) − 5 = 7 ✓.)',
        expWrong:{
          A:'2 results from solving 3x + 5 = 7 → 3x = 2 (wrong sign on the 5), then rounding.',
          B:'3 comes from solving 3x = 9 (subtracting 5 from 7 + 5 incorrectly, or computing 7 + 2).',
          D:'5 confuses the constant in the formula with the answer; solving 3x = 12 gives 4, not 5.'
        },
        tip:'Inverse function notation: f^(−1)(a) is the x-value such that f(x) = a. Don\'t confuse it with 1/f(x).'
      },
      {
        id:'MASH-11', type:'spr', domain:'Algebra + Functions', difficulty:'Difícil',
        skill:'Solving for a parameter in a quadratic',
        stem:'The quadratic y = x² + bx + 8 passes through the point (2, 4). What is the value of b?',
        answer:'-4',
        expCorrect:'Sustituye el punto (2, 4): 4 = 2² + b(2) + 8 → 4 = 4 + 2b + 8 → 4 = 12 + 2b → 2b = −8 → b = −4. (Comprobación: y = x² − 4x + 8 en x = 2 da 4 − 8 + 8 = 4 ✓.) Respuesta: -4.',
        expWrong:{},
        tip:'Para hallar un parámetro, sustituye el punto conocido (x, y) en la ecuación y despeja. En el SPR sí puedes escribir respuestas negativas: -4.'
      },
      {
        id:'MASH-12', type:'mc', domain:'Algebra + Functions', difficulty:'Difícil',
        skill:'Domain and range reasoning',
        stem:'The function f(x) = √(x − 3) has which domain?',
        choices:{A:'x ≥ 0', B:'x > 3', C:'x ≥ 3', D:'all real numbers'},
        correct:'C',
        expCorrect:'For a square root to be defined (in real numbers), the radicand must be ≥ 0. So x − 3 ≥ 0 → x ≥ 3.',
        expWrong:{
          A:'x ≥ 0 restricts the input, not the radicand; the expression under the root (x − 3) is what must be ≥ 0.',
          B:'x > 3 is almost correct but misses x = 3 (at x = 3, f(3) = √0 = 0, which is defined).',
          D:'"All real numbers" ignores the restriction from the square root: the radicand x − 3 must be ≥ 0.'
        },
        tip:'Square roots require the radicand ≥ 0. Fractions require the denominator ≠ 0. Always identify these restrictions first.'
      }
    ]
  });
})();
