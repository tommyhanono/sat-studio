/* SAT Studio — Desmos how-to hints for Math sets (math-set1 + math-alg + math-alg2) */
window.SAT_DESMOS = Object.assign(window.SAT_DESMOS || {}, {
  // ----- math-set1 (M-001 a M-010) -----
  'M-001': {
    note: 'Grafica y=3x-7 y y=14; se cruzan en x=7. Luego escribe 6*7-14 en una línea nueva y Desmos te da 28.',
    latex: ['y=3x-7', 'y=14', '6*7-14']
  },
  'M-002': {
    note: 'Úsalo como calculadora: reducir 35% es pagar el 65%, así que escribe 0.65*80 y Desmos te da el precio final, 52.',
    latex: ['0.65*80']
  },
  'M-003': {
    note: 'Escribe las dos ecuaciones tal cual y toca el punto donde se cruzan: sale (9, 4). La pregunta pide x, así que la respuesta es 9.',
    latex: ['x+2y=17', 'x-y=5']
  },
  'M-004': {
    note: 'Grafica y=(x-3)(x+5) y toca el punto más bajo de la parábola: es (-1, -16). La coordenada x del vértice es -1.',
    latex: ['y=(x-3)(x+5)']
  },
  'M-005': {
    note: 'Úsalo como calculadora: escribe la raíz cuadrada de 15^2+8^2 y Desmos te da 17, la hipotenusa.',
    latex: ['\\sqrt{15^2+8^2}']
  },
  'M-006': {
    note: 'Escribe los 15 valores (según las barras: tres 1, cinco 2, cuatro 3, dos 4, un 5) dentro de median(...) y Desmos te devuelve la mediana: 2.',
    latex: ['median(1,1,1,2,2,2,2,2,3,3,3,3,4,4,5)']
  },
  'M-007': {
    note: 'Grafica y=3/(x+1) y y=12; el punto donde se cruzan tiene x=-0.75, o sea -3/4.',
    latex: ['y=3/(x+1)', 'y=12']
  },
  'M-008': {
    note: 'Úsalo como calculadora: la suma nueva menos la vieja es 6*16-5*14. Escríbelo y Desmos te da 26, el sexto número.',
    latex: ['6*16-5*14']
  },
  'M-009': {
    note: 'Como B=90°, A y C son complementarios, así que cos C = sin A = 3/5. Usa Desmos de calculadora: escribe 3/5 y confirma que vale 0.6.',
    latex: ['3/5']
  },
  'M-010': {
    note: 'Grafica y=2x^2+7x+8 y y=2x^2+8x+8. La de b=7 no toca el eje x (sin soluciones reales) y la de b=8 sí lo toca; por eso el mayor b válido es 7.',
    latex: ['y=2x^2+7x+8', 'y=2x^2+8x+8']
  },

  // ----- math-alg (ALG-01 a ALG-12) -----
  'ALG-01': {
    note: 'Grafica y=5x+8 y y=3x+20; el punto de cruce tiene x=6.',
    latex: ['y=5x+8', 'y=3x+20']
  },
  'ALG-02': {
    note: 'Grafica 4x+3y=24 y la recta vertical x=3; se cruzan en (3, 4), así que y=4.',
    latex: ['4x+3y=24', 'x=3']
  },
  'ALG-03': {
    note: 'Úsalo como calculadora de pendiente: escribe (17-5)/(4-1) y Desmos te da 4.',
    latex: ['(17-5)/(4-1)']
  },
  'ALG-04': {
    note: 'Grafica y=2x+5 y y=13; la recta supera a 13 cuando x>4, así que entre las opciones solo 5 cumple.',
    latex: ['y=2x+5', 'y=13']
  },
  'ALG-05': {
    note: 'Escribe las dos ecuaciones y toca el punto de cruce: sale (3, 2). Piden x, así que 3.',
    latex: ['3x+y=11', 'x-y=1']
  },
  'ALG-06': {
    note: 'Grafica las dos ecuaciones; se cruzan en (3, 1). La pregunta pide y, así que 1.',
    latex: ['y=2x-5', '4x+y=13']
  },
  'ALG-07': {
    note: 'Grafica y=-2x+10 junto con el punto (3,4): la recta pasa justo por el punto, así que es la correcta.',
    latex: ['y=-2x+10', '(3,4)']
  },
  'ALG-08': {
    note: 'Úsalo como calculadora: quita el cargo fijo y divide entre la tarifa. Escribe (190-40)/25 y Desmos te da 6 horas.',
    latex: ['(190-40)/25']
  },
  'ALG-09': {
    note: 'Grafica y=-3x+7 y y=1; la recta está en 1 o por encima cuando x<=2, esa es la solución.',
    latex: ['y=-3x+7', 'y=1']
  },
  'ALG-10': {
    note: 'Sin solución = rectas paralelas. Con c=6 la segunda recta es y=5x+9; grafica y=5x+2 y y=5x+9 y verás que nunca se cruzan. Así c=6.',
    latex: ['y=5x+2', 'y=5x+9']
  },
  'ALG-11': {
    note: 'Grafica las dos ecuaciones; se cruzan en (3, 4). Luego escribe 3+2*4 y Desmos te da 11, que es x+2y.',
    latex: ['2x+3y=18', 'x+y=7', '3+2*4']
  },
  'ALG-12': {
    note: 'Grafica y=7x-4 y y=31; el punto de cruce tiene x=5, así que a=5.',
    latex: ['y=7x-4', 'y=31']
  },

  // ----- math-alg2 (AL2-01 a AL2-12) -----
  'AL2-01': {
    note: 'Grafica y=6x-9 y y=2x+15; el punto de cruce tiene x=6.',
    latex: ['y=6x-9', 'y=2x+15']
  },
  'AL2-02': {
    note: 'Escribe las dos ecuaciones y toca el cruce: sale (7, 3). Piden x, así que 7.',
    latex: ['x+y=10', 'x-y=4']
  },
  'AL2-03': {
    note: 'Grafica y=3x-4 y y=11; la recta está por debajo de 11 cuando x<5, así que entre las opciones solo 4 cumple.',
    latex: ['y=3x-4', 'y=11']
  },
  'AL2-04': {
    note: 'Grafica y=-4x+7 y mira dónde cruza el eje y (donde x=0): es el punto (0, 7).',
    latex: ['y=-4x+7']
  },
  'AL2-05': {
    note: 'Grafica las dos ecuaciones; se cruzan en (4, 8). La pregunta pide x, así que 4.',
    latex: ['y=3x-4', '2x+y=16']
  },
  'AL2-06': {
    note: 'Grafica con x=precio del hot dog y y=precio de la soda; 2x+3y=13 y x+y=5 se cruzan en (2, 3). El hot dog cuesta 2.',
    latex: ['2x+3y=13', 'x+y=5']
  },
  'AL2-07': {
    note: 'Grafica y=3x-5 junto con el punto (2,1): la recta pasa justo por el punto, así que es la correcta.',
    latex: ['y=3x-5', '(2,1)']
  },
  'AL2-08': {
    note: 'Grafica y=4-2x y y=10; la recta está en 10 o por debajo cuando x>=-3, esa es la solución.',
    latex: ['y=4-2x', 'y=10']
  },
  'AL2-09': {
    note: 'Infinitas soluciones = misma recta. Divide la primera entre 2 para obtener 2x+3y=5; grafica 4x+6y=10 y 2x+3y=5 y verás que se dibujan una encima de la otra. Así k=5.',
    latex: ['4x+6y=10', '2x+3y=5']
  },
  'AL2-10': {
    note: 'Grafica y=30+45x y y=55x; se cruzan en x=3 (meses), donde ambos gimnasios cuestan 165.',
    latex: ['y=30+45x', 'y=55x']
  },
  'AL2-11': {
    note: 'Grafica las dos ecuaciones; se cruzan en (6, 1). Luego escribe 6-1 y Desmos te da 5, que es x-y.',
    latex: ['3x+2y=20', 'x+2y=8', '6-1']
  },
  'AL2-12': {
    note: 'Grafica y=-4x+26 y y=6; el punto de cruce tiene x=5, así que a=5.',
    latex: ['y=-4x+26', 'y=6']
  }
});
