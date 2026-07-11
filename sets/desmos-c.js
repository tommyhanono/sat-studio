/* SAT Studio — Desmos how-to hints for Math sets: math-data (DAT-01..10) + math-data2 (DT2-01..12) */
window.SAT_DESMOS = Object.assign(window.SAT_DESMOS || {}, {
  'DAT-01': {
    note: 'Esto es aritmética pura: escribe 0.40*350 en Desmos y te da 140 al toque. Convierte el porcentaje a decimal antes de multiplicar.',
    latex: ['0.40*350']
  },
  'DAT-02': {
    note: 'Para el porcentaje de cambio, teclea (75-60)/60*100 y Desmos te da 25. El denominador siempre es el valor viejo (60).',
    latex: ['(75-60)/60*100']
  },
  'DAT-03': {
    note: 'Reparte la razón con Desmos: escribe 240/8*5 (8 son las partes totales, 5 las de las niñas) y te da 150.',
    latex: ['240/8*5']
  },
  'DAT-04': {
    note: 'Saca la velocidad y multiplica en un solo renglón: escribe 150/2.5*4 y Desmos te da 240 millas. Divide antes de multiplicar.',
    latex: ['150/2.5*4']
  },
  'DAT-05': {
    note: 'Usa Desmos como calculadora de media: escribe A=[12,15,18,20,25] y luego mean(A); te da 18. También sirve (12+15+18+20+25)/5.',
    latex: ['A=[12,15,18,20,25]', 'mean(A)']
  },
  'DAT-06': {
    note: 'No hace falta calcular, pero si quieres comprobar: define X=[48,49,50,51,52] y Y=[10,30,50,70,90], luego stdev(X) y stdev(Y). Verás que la de Y es mucho mayor.',
    latex: ['X=[48,49,50,51,52]', 'Y=[10,30,50,70,90]', 'stdev(X)', 'stdev(Y)']
  },
  'DAT-07': {
    note: 'Probabilidad simple en Desmos: escribe 12/30 y te muestra 0.4, que es 2/5. Desmos también lo puede mostrar como fracción.',
    latex: ['12/30']
  },
  'DAT-08': {
    note: 'La condición fija el denominador en los 120 adultos: escribe 90/120 y Desmos te da 0.75.',
    latex: ['90/120']
  },
  'DAT-09': {
    note: 'Evalúa la recta de mejor ajuste: escribe 2.5*8+60 y te da 80. Multiplica la pendiente por x antes de sumar la intersección.',
    latex: ['2.5*8+60']
  },
  'DAT-10': {
    note: 'Los cambios sucesivos se multiplican: escribe 1.20*0.90 y te da 1.08 (o 1.20*0.90*100 para ver 108). El precio final es 108% del original.',
    latex: ['1.20*0.90', '1.20*0.90*100']
  },
  'DT2-01': {
    note: 'Aritmética directa: escribe 0.36*250 y Desmos te da 90. Convierte 36% a 0.36 antes de multiplicar.',
    latex: ['0.36*250']
  },
  'DT2-02': {
    note: 'Porcentaje de cambio: teclea (54-45)/45*100 y te da 20. Divide siempre entre el valor viejo (45), no entre el nuevo.',
    latex: ['(54-45)/45*100']
  },
  'DT2-03': {
    note: 'Porcentaje inverso: si pagaste el 85% del original, escribe 51/0.85 y Desmos te da 60, el precio original.',
    latex: ['51/0.85']
  },
  'DT2-04': {
    note: 'Cuida la base del porcentaje: escribe 0.15*(80-0.25*80) y Desmos te da 9 (el 15% de los 60 guests). También sirve 0.15*60.',
    latex: ['0.15*(80-0.25*80)', '0.15*60']
  },
  'DT2-05': {
    note: 'Razón de tres partes: escribe 480/8*2 (8 partes totales, 2 son de azúcar) y te da 120 gramos.',
    latex: ['480/8*2']
  },
  'DT2-06': {
    note: 'Tasa unitaria y multiplica: escribe 210/6*10 y Desmos te da 350 páginas.',
    latex: ['210/6*10']
  },
  'DT2-07': {
    note: 'Para la mediana, usa la lista ya ordenada: escribe median([8,11,14,14,17,20,30]) y Desmos te da 14.',
    latex: ['median([8,11,14,14,17,20,30])']
  },
  'DT2-08': {
    note: 'Recupera la suma con Desmos: escribe (8*5+20)/6 y te da 10 (suma original 40, más 20, entre 6).',
    latex: ['(8*5+20)/6']
  },
  'DT2-09': {
    note: 'Para comprobar la dispersión: define P=[20,40,60,80,100] y Q=[58,59,60,61,62], luego stdev(P) y stdev(Q). La de P sale mucho mayor.',
    latex: ['P=[20,40,60,80,100]', 'Q=[58,59,60,61,62]', 'stdev(P)', 'stdev(Q)']
  },
  'DT2-10': {
    note: 'Lo que NO es blanco son 40-16=24: escribe (40-16)/40 y Desmos te da 0.6, que es 3/5.',
    latex: ['(40-16)/40']
  },
  'DT2-11': {
    note: 'El denominador son los 21 que juegan deporte: escribe 9/21 y Desmos te muestra 0.4286 (3/7).',
    latex: ['9/21']
  },
  'DT2-12': {
    note: 'Los cambios sucesivos se multiplican: escribe 0.80*1.25 y te da 1.00 (o 0.80*1.25*100 para ver 100). El valor vuelve exactamente al inicio.',
    latex: ['0.80*1.25', '0.80*1.25*100']
  }
});
