/* SAT Studio — Desmos how-to hints for Math sets: math-warmup1 (MW1-*) + math-hard-poly (HMP-*) */
window.SAT_DESMOS = Object.assign(window.SAT_DESMOS || {}, {
  'MW1-01': {
    note: 'Grafica y=x^2+2x-15 y fíjate dónde la parábola cruza el eje x (las raíces). Vas a ver cruces en x=−5 y x=3; la solución positiva es 3.',
    latex: ['y=x^2+2x-15']
  },
  'MW1-02': {
    note: 'Grafica y=x^2+8x+10 y haz clic en el punto más bajo (el vértice). La coordenada y de ese vértice es el valor mínimo: −6.',
    latex: ['y=x^2+8x+10']
  },
  'MW1-03': {
    note: 'Grafica y=3x^2-12x+12 y cuenta cuántas veces toca o cruza el eje x. Solo lo toca en x=2 (el vértice queda justo sobre el eje), así que hay exactamente una solución.',
    latex: ['y=3x^2-12x+12']
  },
  'MW1-04': {
    note: 'Grafica las dos rectas 2x+y=11 y x−y=1 y haz clic en el punto donde se cruzan. La coordenada x de esa intersección es 4.',
    latex: ['2x+y=11', 'x-y=1']
  },
  'MW1-05': {
    note: 'Grafica y=3x−4 y 6x−2y=8. Vas a ver una sola recta porque quedan encimadas (son la misma): eso significa infinitas soluciones.',
    latex: ['y=3x-4', '6x-2y=8']
  },
  'MW1-06': {
    note: 'El sector es una fracción del área total. En Desmos escribe (60/360)*pi*6^2 y compáralo con 6*pi: ambos dan ≈18.85, así que el área es 6π.',
    latex: ['(60/360)*pi*6^2', '6*pi']
  },
  'MW1-07': {
    note: 'Es una proporción de semejanza (razón de escala 25/10=2.5). En Desmos escribe 14*25/10 y te da 35, la longitud de XZ.',
    latex: ['14*25/10']
  },
  'MW1-08': {
    note: 'Es SOHCAHTOA: tan θ = opuesto/adyacente = 5/12. En Desmos escribe 5/12 (≈0.417) para ver el valor; recuerda que la tangente NO usa la hipotenusa (13).',
    latex: ['5/12']
  },
  'MW1-09': {
    note: 'El precio final es el 80% del original, o sea 0.8·original=60. En Desmos escribe 60/0.8 y obtienes 75.',
    latex: ['60/0.8']
  },
  'MW1-10': {
    note: 'La suma total debe ser media×cantidad = 12·5 = 60. En Desmos escribe 12*5-(4+9+12+20) y te da 15, el valor de x.',
    latex: ['12*5-(4+9+12+20)']
  },
  'MW1-11': {
    note: 'Perder 15% cada año multiplica por 0.85. Grafica y=24000*0.85^x (baja con el tiempo) y compárala con 24000*1.15^x (subiría); evalúa 24000*0.85=20400 para t=1.',
    latex: ['y=24000*0.85^x', '24000*0.85']
  },
  'MW1-12': {
    note: 'La recta pasa por (0,3) y (4,15): pendiente 3, así que grafica y=3x+3 y verifica que pase por esos puntos. Luego escribe 3*10+3 y da 33.',
    latex: ['y=3x+3', '3*10+3']
  },
  'HMP-01': {
    note: 'Grafica y=(x-3)^2(x+1)(x-5). Donde la curva rebota sin cruzar el eje (x=3, potencia par) cuenta; donde lo atraviesa (x=−1 y x=5) no. Solo hay 1 rebote.',
    latex: ['y=(x-3)^2(x+1)(x-5)']
  },
  'HMP-02': {
    note: 'Grafica y=-2x^3+5x^2-7 y aleja el zoom. Mira los extremos: a la izquierda la curva sube (→+∞) y a la derecha baja (→−∞).',
    latex: ['y=-2x^3+5x^2-7']
  },
  'HMP-03': {
    note: 'Deja que x haga el papel de k. Grafica y=2*2^3-3*2^2+2x-5 (que es p(2)) junto con y=7; se cruzan en x=4, así que k=4.',
    latex: ['y=2*2^3-3*2^2+2x-5', 'y=7']
  },
  'HMP-04': {
    note: 'Deja que x haga el papel de c. Grafica y=(-3)^3+2*(-3)^2-5*(-3)+x (que es p(−3)) y busca dónde cruza el eje x: en x=−6, así que c=−6.',
    latex: ['y=(-3)^3+2*(-3)^2-5*(-3)+x']
  },
  'HMP-05': {
    note: 'Grafica y=(x^2-9)/(x^2-x-6) y y=(x+3)/(x+2). Las curvas quedan encimadas (idénticas), así que son equivalentes; prueba las otras opciones y verás que no coinciden.',
    latex: ['y=(x^2-9)/(x^2-x-6)', 'y=(x+3)/(x+2)']
  },
  'HMP-06': {
    note: 'Grafica y=12/(x^2-4)+1 y y=3/(x-2). Se cruzan solo en x=1 (esa es la solución). En x=2 ambas tienen asíntota, por eso x=2 es solución extraña y no cuenta.',
    latex: ['y=12/(x^2-4)+1', 'y=3/(x-2)']
  },
  'HMP-07': {
    note: 'Grafica y=(27x^6)^{2/3} y y=9x^4; para x>0 las curvas quedan encimadas, confirmando que son equivalentes.',
    latex: ['y=(27x^6)^{2/3}', 'y=9x^4']
  },
  'HMP-08': {
    note: 'Con dos variables, comprueba con números: usa x=2, y=3. Escribe (2^{-3}*3^2)/(2^{-5}*3^{-1}) → 108, y compáralo con x²y³ = 2^2*3^3 = 108. Coinciden.',
    latex: ['(2^{-3}*3^2)/(2^{-5}*3^{-1})', '2^2*3^3']
  },
  'HMP-09': {
    note: 'Grafica y=100x y y=2^x y aleja el zoom. Al inicio 100x va adelante, pero 2^x la cruza cerca de x≈10 y de ahí se queda por encima para siempre.',
    latex: ['y=100x', 'y=2^x']
  },
  'HMP-10': {
    note: 'Define f(x)=3x-4 y g(x)=x^2+2, luego escribe g(f(3)); Desmos te devuelve 27 (primero f(3)=5, después g(5)=27).',
    latex: ['f(x)=3x-4', 'g(x)=x^2+2', 'g(f(3))']
  },
  'HMP-11': {
    note: 'Grafica y=x^3-7x^2+10x y busca dónde cruza el eje x (los ceros): x=0, 2 y 5. El mayor es 5.',
    latex: ['y=x^3-7x^2+10x']
  },
  'HMP-12': {
    note: 'Deja que x haga el papel de a. Grafica y=2^3+x*2^2-4*2-12 (que es p(2)) y mira dónde cruza el eje x: en x=3, así que a=3.',
    latex: ['y=2^3+x*2^2-4*2-12']
  }
});
