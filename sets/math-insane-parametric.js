/* SAT Studio question set — Math: Parametric & Modular Reasoning (INSANE tier) */
(function(){
  window.SAT_SETS.push({
    id: 'math-insane-parametric',
    title: 'Math — Parametric & Modular Reasoning (INSANE)',
    section: 'math',
    level: 'Difícil',
    description: 'Ultra-hard: modular arithmetic reasoning, nested function composition, parametric systems, and constraint optimization.',
    minutes: 20,
    questions: [
      {
        id:'INS-PM-02', type:'mc', domain:'Advanced Math + Algebra', difficulty:'Difícil',
        skill:'Modular arithmetic reasoning (remainder logic)',
        stem:'If n ≡ 3 (mod 5) and n ≡ 2 (mod 7), which of the following is a possible value of n?',
        choices:{A:'17', B:'23', C:'43', D:'52'},
        correct:'B',
        expCorrect:'n ≡ 3 (mod 5) significa que n deja resto 3 al dividir entre 5 (candidatos: 3, 8, 13, 18, 23, …). n ≡ 2 (mod 7) significa resto 2 al dividir entre 7. Prueba 23: 23 = 4·5 + 3 ✓ y 23 = 3·7 + 2 ✓. Cumple las dos condiciones. (Método general: por el teorema chino del resto, las soluciones son n = 35j + 23; la menor positiva es 23.)',
        expWrong:{
          A:'17 deja resto 2 al dividir entre 5 (17 = 3·5 + 2), no resto 3. Falla la primera condición.',
          C:'43 sí deja resto 3 entre 5 (43 = 8·5 + 3), pero 43 = 6·7 + 1 deja resto 1 entre 7, no 2.',
          D:'52 deja resto 2 al dividir entre 5 (52 = 10·5 + 2), no resto 3. Falla la primera condición.'
        },
        tip:'Sistemas de congruencias: lista los números que cumplen una condición (3, 8, 13, 18, 23, …) y filtra con la otra. Con opciones dadas, lo más rápido es verificar cada opción con ambos restos.'
      },
      {
        id:'INS-PM-03', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Nested function composition and inverse logic',
        stem:'Let f(x) = 2x + 1 and g(x) = x² − 3, and let h(x) = f(g(x)) be defined for x ≥ 0. What is the value of h⁻¹(13)?',
        choices:{A:'1', B:'2', C:'3', D:'4'},
        correct:'C',
        expCorrect:'Primero construye la compuesta: h(x) = f(g(x)) = 2(x² − 3) + 1 = 2x² − 5. Hallar h⁻¹(13) es resolver h(x) = 13: 2x² − 5 = 13 → 2x² = 18 → x² = 9 → x = 3 (se toma la raíz positiva por el dominio x ≥ 0). Comprobación: h(3) = 2(9) − 5 = 13 ✓.',
        expWrong:{
          A:'h(1) = 2(1) − 5 = −3, no 13.',
          B:'h(2) = 2(4) − 5 = 3, no 13. Ojo: h(2) = 3 no es lo mismo que h⁻¹(13) = 3.',
          D:'h(4) = 2(16) − 5 = 27, no 13. Revisa el despeje: 2x² = 18, no 32.'
        },
        tip:'Para h⁻¹(y) no necesitas la fórmula de la inversa: resuelve la ecuación h(x) = y. Y para la compuesta, trabaja de adentro hacia afuera: primero g, luego f.'
      },
      {
        id:'INS-PM-04', type:'spr', domain:'Advanced Math + Algebra', difficulty:'Difícil',
        skill:'Constraint-based algebraic solving',
        stem:'A rectangle has integer dimensions. Its perimeter is 34, and its area is 60. What is the length of the longer side? (Grid in your answer.)',
        answer:'12',
        expCorrect:'Sean a y b los lados. Perímetro: 2(a + b) = 34 → a + b = 17. Área: ab = 60. Entonces a y b son las raíces de t² − 17t + 60 = 0 → (t − 5)(t − 12) = 0 → los lados son 5 y 12. Comprobación: 2(5 + 12) = 34 ✓ y 5 × 12 = 60 ✓. El lado mayor mide 12. Respuesta: 12.',
        expWrong:{},
        tip:'Con perímetro y área tienes la SUMA (a + b) y el PRODUCTO (ab): los lados son las raíces de t² − (suma)t + (producto) = 0. También sirve tantear factores de 60 que sumen 17: 5 y 12.'
      },
      {
        id:'INS-PM-05', type:'mc', domain:'Advanced Math + Data', difficulty:'Difícil',
        skill:'Exponential decay with asymptotic reasoning',
        stem:'A radioactive substance decays according to N(t) = N₀ · (0.5)^(t/T), where T is the half-life. If a sample starts with 1000 atoms and after 20 years has 125 atoms, what is the half-life T (in years)?',
        choices:{A:'10', B:'6.67', C:'5', D:'3.33'},
        correct:'B',
        expCorrect:'Plantea 125 = 1000 · (0.5)^(20/T) → 0.125 = (0.5)^(20/T). Como 0.125 = 1/8 = (1/2)³, se necesita 20/T = 3 → T = 20/3 ≈ 6.67 años. Comprobación: en 20 años caben 3 semividas: 1000 → 500 → 250 → 125 ✓.',
        expWrong:{
          A:'Con T = 10, (0.5)^(20/10) = (0.5)² = 1/4 y quedarían 250 átomos, no 125.',
          C:'Con T = 5, (0.5)^(20/5) = (0.5)⁴ = 1/16 y quedarían 62.5 átomos, no 125.',
          D:'Con T = 3.33, (0.5)^(20/3.33) ≈ (0.5)⁶ = 1/64 y quedarían ≈ 15.6 átomos, no 125.'
        },
        tip:'Decaimiento exponencial: escribe la razón N/N₀ como potencia de 1/2 (aquí 1/8 = (1/2)³) e iguala exponentes: el número de semividas es t/T.'
      },
      {
        id:'INS-PM-06', type:'mc', domain:'Algebra + Problem-Solving', difficulty:'Difícil',
        skill:'Rational functions and asymptotic behavior',
        stem:'A rational function f(x) = (ax + 2)/(x − 3) has a vertical asymptote at x = 3 and a horizontal asymptote at y = 2. What is the value of a?',
        choices:{A:'1', B:'2', C:'3', D:'6'},
        correct:'B',
        expCorrect:'Vertical asymptote at x = 3 is confirmed (denominator = 0). Horizontal asymptote: as x → ∞, f(x) → a/1 = a. So a = 2.',
        expWrong:{
          A:'If a = 1, the horizontal asymptote is y = 1, not 2.',
          C:'If a = 3, the horizontal asymptote is y = 3, not 2.',
          D:'If a = 6, the horizontal asymptote is y = 6, not 2.'
        },
        tip:'Rational function f(x) = P(x)/Q(x): vertical asymptotes are zeros of Q; when degrees are equal, the horizontal asymptote is the ratio of leading coefficients.'
      },
      {
        id:'INS-PM-07', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Trigonometric identity and angle reasoning',
        stem:'If sin(θ) = 3/5 and θ is in the second quadrant, what is the value of cos(2θ)?',
        choices:{A:'-7/25', B:'-24/25', C:'-1/5', D:'7/25'},
        correct:'D',
        expCorrect:'Usa cos(2θ) = 1 − 2sin²(θ), que solo depende de sin²(θ): cos(2θ) = 1 − 2(9/25) = 1 − 18/25 = 7/25. Verificación por otra vía: en Q2, cos(θ) = −4/5, y cos²θ − sin²θ = 16/25 − 9/25 = 7/25 ✓. Aunque θ esté en el segundo cuadrante, cos(2θ) sale positivo.',
        expWrong:{
          A:'−7/25 sale de forzar el signo negativo "porque θ está en Q2", pero cos(2θ) = 1 − 2sin²θ usa sin² y el resultado aquí es positivo.',
          B:'−24/25 es sin(2θ) = 2·sin(θ)·cos(θ) = 2(3/5)(−4/5), no cos(2θ).',
          C:'−1/5 no sale de ninguna identidad correcta del ángulo doble; revisa cos(2θ) = 1 − 2sin²θ.'
        },
        tip:'Ángulo doble: cos(2θ) = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ. Elige la forma que use el dato disponible (aquí solo sin θ) y cuida el signo de cos θ según el cuadrante si lo necesitas.'
      },
      {
        id:'INS-PM-08', type:'spr', domain:'Advanced Math + Algebra', difficulty:'Difícil',
        skill:'Solving a cubic with constraint',
        stem:'If x³ − 6x² + 11x − 6 = 0, what is the sum of all real solutions? (Grid in your answer.)',
        answer:'6',
        expCorrect:'Por las fórmulas de Vieta, en ax³ + bx² + cx + d = 0 la suma de las raíces es −b/a = −(−6)/1 = 6. (También puedes factorizar: x = 1 es raíz porque 1 − 6 + 11 − 6 = 0; dividiendo queda (x − 1)(x − 2)(x − 3) = 0, con raíces 1, 2 y 3, y 1 + 2 + 3 = 6.) Respuesta: 6.',
        expWrong:{},
        tip:'Fórmulas de Vieta en cúbicas: suma de raíces = −b/a, suma de productos por pares = c/a, producto = −d/a. Aquí ni siquiera hace falta factorizar.'
      },
      {
        id:'INS-PM-09', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Systems with parameter variation',
        stem:'For which value of k does the system of equations x + ky = 5 and 2x + 4y = 10 have infinitely many solutions?',
        choices:{A:'1', B:'2', C:'3', D:'4'},
        correct:'B',
        expCorrect:'For infinitely many solutions, the two equations must represent the same line. 2x + 4y = 10 simplifies (dividing by 2) to x + 2y = 5. Comparing x + ky = 5 with x + 2y = 5 gives k = 2.',
        expWrong:{
          A:'If k = 1, the equations are x + y = 5 and x + 2y = 5: different lines that intersect at one point.',
          C:'If k = 3, the equations are x + 3y = 5 and x + 2y = 5: different lines, exactly one solution.',
          D:'If k = 4, the equations are x + 4y = 5 and x + 2y = 5: different lines, exactly one solution.'
        },
        tip:'Infinitely many solutions: same line (all coefficients proportional). No solution: parallel lines (x, y proportional but constants not). One solution: non-proportional coefficients.'
      },
      {
        id:'INS-PM-10', type:'mc', domain:'Advanced Math + Problem-Solving', difficulty:'Difícil',
        skill:'Logarithmic reasoning and constraint',
        stem:'If log₃(x) + log₃(x − 2) = 1, what is the value of x?',
        choices:{A:'2', B:'3', C:'4', D:'6'},
        correct:'B',
        expCorrect:'log₃(x(x − 2)) = 1 → x(x − 2) = 3¹ = 3 → x² − 2x − 3 = 0 → (x − 3)(x + 1) = 0 → x = 3 or x = −1. Since the logs require x > 0 and x − 2 > 0 (that is, x > 2), the only valid solution is x = 3.',
        expWrong:{
          A:'With x = 2, the second term is log₃(0), which is undefined.',
          C:'With x = 4: log₃(4) + log₃(2) = log₃(8) ≠ 1, because 3¹ = 3, not 8.',
          D:'With x = 6: log₃(6) + log₃(4) = log₃(24) ≠ 1.'
        },
        tip:'Logarithmic equations: combine with log(a) + log(b) = log(ab), convert to exponential form, and ALWAYS check domain restrictions (every argument must be > 0).'
      },
      {
        id:'INS-PM-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Piecewise function reasoning with composition',
        stem:'A piecewise function is defined as f(x) = { x² + 1 if x ≤ 0; 2x if x > 0 }. What is f(f(−1))?',
        choices:{A:'2', B:'4', C:'5', D:'8'},
        correct:'B',
        expCorrect:'Evalúa de adentro hacia afuera. f(−1): como −1 ≤ 0, usa x² + 1 → f(−1) = (−1)² + 1 = 2. Luego f(2): como 2 > 0, usa 2x → f(2) = 4. Por lo tanto f(f(−1)) = 4.',
        expWrong:{
          A:'2 es solo f(−1), el paso interno; falta aplicar f una segunda vez.',
          C:'5 sale de usar la pieza equivocada en el segundo paso: 2² + 1 = 5. Como 2 > 0, corresponde la pieza 2x, no x² + 1.',
          D:'8 sale de aplicar f una vez de más: f(4) = 8. Solo se compone dos veces: f(f(−1)) = f(2) = 4.'
        },
        tip:'En funciones a trozos revisa la condición (≤ o >) para CADA evaluación: primero la interna, luego la externa con el resultado obtenido. No arrastres la misma pieza.'
      },
      {
        id:'INS-PM-12', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Constraint optimization with multiple variables',
        stem:'If a + b = 10 and ab = 24, what is the value of a² + b²? (Grid in your answer.)',
        answer:'52',
        expCorrect:'Usa la identidad a² + b² = (a + b)² − 2ab = 10² − 2(24) = 100 − 48 = 52. (Comprobación directa: a y b son 4 y 6, pues 4 + 6 = 10 y 4·6 = 24; entonces 16 + 36 = 52 ✓.) Respuesta: 52.',
        expWrong:{},
        tip:'Identidad clave: a² + b² = (a + b)² − 2ab. Te ahorra hallar a y b por separado cuando conoces la suma y el producto.'
      }
    ]
  });
})();
