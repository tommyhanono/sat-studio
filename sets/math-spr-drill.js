/* SAT Studio question set — Math: Student-Produced Response (SPR) Grid-In Drill */
(function(){
  window.SAT_SETS.push({
    id: 'math-spr-drill',
    title: 'Math — Grid-In SPR Drill',
    section: 'math',
    level: 'Difícil',
    description: 'All grid-in (SPR) questions: practice numeric entry mechanics, fractions, decimals, and reasoning under timed conditions.',
    minutes: 18,
    questions: [
      {
        id:'SPR-01', type:'spr', domain:'Algebra', difficulty:'Fácil',
        skill:'Ecuación lineal de un paso',
        stem:'If 3x = 21, what is the value of x? (Grid in your answer.)',
        answer:'7',
        expCorrect:'Divide ambos lados entre 3: x = 21/3 = 7. Respuesta: 7.',
        tip:'Regla del grid-in: escribe solo el número final. Nada de variables, comas, unidades ni ecuaciones.'
      },
      {
        id:'SPR-02', type:'spr', domain:'Algebra', difficulty:'Fácil',
        skill:'Ecuación lineal de dos pasos',
        stem:'If 2x + 5 = 17, what is the value of x? (Grid in your answer.)',
        answer:'6',
        expCorrect:'Resta 5 a ambos lados: 2x = 12. Divide entre 2: x = 6. (Verifica: 2(6) + 5 = 17 ✓.)',
        tip:'No escribas el paso intermedio (12): termina de despejar hasta el final antes de llenar el box.'
      },
      {
        id:'SPR-03', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Ecuación lineal (respuesta exacta)',
        stem:'If 4x − 3 = 5, what is the value of x? (Grid in your answer as a fraction or decimal.)',
        answer:'2',
        expCorrect:'Suma 3: 4x = 8. Divide entre 4: x = 2. (Verifica: 4(2) − 3 = 5 ✓.) Aunque la pregunta permite fracción o decimal, aquí sale un entero exacto.',
        tip:'Da siempre el valor exacto. Si al despejar te queda un entero, escríbelo tal cual: no lo conviertas ni redondees nada.'
      },
      {
        id:'SPR-04', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Respuesta como fracción o decimal',
        stem:'If 5x + 2 = 4, what is the value of x? (Grid in your answer as a fraction or decimal.)',
        answer:'2/5',
        expCorrect:'Resta 2: 5x = 2. Divide entre 5: x = 2/5 = 0.4. (Verifica: 5(2/5) + 2 = 2 + 2 = 4 ✓.) En el box valen 2/5, .4 o 0.4.',
        tip:'Puedes omitir el cero inicial (.4 en vez de 0.4) para ahorrar espacio. Una fracción y su decimal equivalente valen igual.'
      },
      {
        id:'SPR-05', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Tasas (velocidad promedio)',
        stem:'A car travels 240 miles in 4 hours. What is the car\'s average speed in miles per hour? (Grid in your answer.)',
        answer:'60',
        expCorrect:'Velocidad promedio = distancia / tiempo = 240 / 4 = 60 millas por hora. Respuesta: 60.',
        tip:'Identifica la operación pedida (velocidad = distancia ÷ tiempo) y escribe el resultado, no los datos del enunciado (240 o 4).'
      },
      {
        id:'SPR-06', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Porcentajes (hallar el total)',
        stem:'If 25% of a number is 15, what is the number? (Grid in your answer.)',
        answer:'60',
        expCorrect:'Sea n el número: 0.25n = 15 → n = 15 / 0.25 = 60. (O más rápido: si el 25% es 15, el 100% es 4 × 15 = 60.)',
        tip:'Aquí te dan la PARTE (15) y piden el TODO. 25% = 1/4, así que el total es 4 veces la parte. No escribas 15 ni 25.'
      },
      {
        id:'SPR-07', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Cuadrática (solución con restricción)',
        stem:'If x² − 6x + 8 = 0, what is the smaller positive solution? (Grid in your answer.)',
        answer:'2',
        expCorrect:'Factoriza: (x − 2)(x − 4) = 0 → x = 2 o x = 4. Ambas son positivas; la MENOR es 2. (Verifica: 4 − 12 + 8 = 0 ✓.)',
        tip:'Después de resolver una cuadrática, relee la pregunta: palabras como "positiva", "menor" o "mayor" deciden cuál de las dos soluciones escribes.'
      },
      {
        id:'SPR-08', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Media (despejar un valor faltante)',
        stem:'The mean of the numbers 5, 8, 12, and x is 10. What is the value of x? (Grid in your answer.)',
        answer:'15',
        expCorrect:'Media = (5 + 8 + 12 + x) / 4 = 10. Multiplica por 4: 25 + x = 40 → x = 15. (Verifica: (5+8+12+15)/4 = 40/4 = 10 ✓.)',
        tip:'Suma total = media × cantidad. Aquí 10 × 4 = 40; réstale lo que ya tienes (25) y sale el valor que falta.'
      },
      {
        id:'SPR-09', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Área de un rectángulo',
        stem:'A rectangle has a length of 12 and a width of 5. What is the area? (Grid in your answer.)',
        answer:'60',
        expCorrect:'Área = largo × ancho = 12 × 5 = 60. Respuesta: 60.',
        tip:'No confundas área (l × w = 60) con perímetro (2(l + w) = 34). Piden área: multiplica.'
      },
      {
        id:'SPR-10', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistema de ecuaciones (despejar una variable)',
        stem:'If 3x + y = 18 and x − y = 2, what is the value of x? (Grid in your answer.)',
        answer:'5',
        expCorrect:'Suma las dos ecuaciones para eliminar y: (3x + y) + (x − y) = 18 + 2 → 4x = 20 → x = 5. (Verifica: y = 3; 3(5) + 3 = 18 ✓ y 5 − 3 = 2 ✓.)',
        tip:'En sistemas, despeja la variable que la pregunta pide (aquí x, no y). Sumar las ecuaciones elimina y de una sola vez.'
      },
      {
        id:'SPR-11', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Exponentes (potencias de 2)',
        stem:'If 2^a = 64, what is the value of a? (Grid in your answer.)',
        answer:'6',
        expCorrect:'64 = 2 × 2 × 2 × 2 × 2 × 2 = 2⁶, así que a = 6.',
        tip:'Apréndete las potencias de 2: 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2⁹=512, 2¹⁰=1024.'
      },
      {
        id:'SPR-12', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Problema multipaso con porcentaje',
        stem:'A store sells books at $12 each. If a customer buys 5 books and receives a 20% discount on the total, how much does the customer pay? (Grid in your answer.)',
        answer:'48',
        expCorrect:'Total original: 5 × 12 = $60. Descuento del 20%: 0.20 × 60 = $12. Paga: 60 − 12 = $48. (Atajo: paga el 80% → 0.80 × 60 = 48.) En el box: 48, sin signo de dólar.',
        tip:'Descuentos: calcula el total, aplica el porcentaje y resta (o multiplica directo por 0.80). Nunca escribas $ ni unidades en el grid.'
      }
    ]
  });
})();
