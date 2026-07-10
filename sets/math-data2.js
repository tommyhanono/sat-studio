/* SAT Studio question set — Math: Problem-Solving & Data Analysis 2 (DT2-01 a DT2-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-data2',
    title: 'Math — Problem-Solving & Data 2',
    section: 'math',
    level: 'Media',
    description: 'More Problem-Solving & Data: percentages, ratios/rates, statistics (mean/median/spread), and probability.',
    minutes: 16,
    questions: [
      {
        id:'DT2-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Porcentajes (porcentaje de un total)',
        stem:'A store received a shipment of 250 shirts. If 36% of the shirts were size medium, how many of the shirts were size medium?',
        choices:{A:'36', B:'72', C:'90', D:'160'},
        correct:'C',
        expCorrect:'36% de 250 = 0.36 × 250 = 90 camisas medianas.',
        expWrong:{
          A:'36 es el porcentaje mismo, no la cantidad. Hay que multiplicarlo por el total de 250.',
          B:'72 sería 36% de 200, pero el total es 250, no 200.',
          D:'160 es el 64% (las que NO son medianas). Piden el 36%.'
        },
        tip:'"Porcentaje de un total" = decimal × total en un solo paso. 36% → 0.36 × 250. Si tu respuesta es el mismo número del porcentaje, olvidaste multiplicar.'
      },
      {
        id:'DT2-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Porcentajes (porcentaje de cambio)',
        stem:'A monthly gym membership cost $45 last year. This year it costs $54. What was the percent increase in the cost of the membership?',
        choices:{A:'9%', B:'16.7%', C:'20%', D:'54%'},
        correct:'C',
        expCorrect:'Aumento porcentual = (cambio / valor original) × 100 = (54 − 45)/45 × 100 = 9/45 × 100 = 20%.',
        expWrong:{
          A:'9% confunde el cambio absoluto ($9) con el porcentaje. Hay que dividir entre el valor original.',
          B:'16.7% sale de dividir el cambio entre el valor NUEVO (9/54). El porcentaje de cambio se calcula sobre el valor original.',
          D:'54% es el precio nuevo en dólares, no un porcentaje de cambio.'
        },
        tip:'Porcentaje de cambio = (nuevo − viejo) / VIEJO. El denominador siempre es el valor de partida (45), no el nuevo.'
      },
      {
        id:'DT2-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Porcentajes (porcentaje inverso / hallar el original)',
        stem:'During a sale, a jacket was sold for $51 after a 15% discount off its original price. What was the original price of the jacket, in dollars?',
        choices:{A:'$58.65', B:'$60', C:'$66', D:'$68'},
        correct:'B',
        expCorrect:'Con 15% de descuento pagas el 85% del original: 0.85 × original = 51. Original = 51 / 0.85 = $60.',
        expWrong:{
          A:'$58.65 le suma 15% a $51 (51 × 1.15), pero el descuento se calcula sobre el precio ORIGINAL, no sobre el rebajado.',
          C:'$66 usa una base equivocada; 51/0.85 da 60, no 66.',
          D:'$68 divide 51 entre 0.75 (como si fuera 25% de descuento). El descuento es 15%, así que se divide entre 0.85.'
        },
        tip:'Porcentaje inverso: si te descontaron 15%, el precio pagado es el 85% del original. Divide el precio final entre 0.85 (no le sumes el 15% al precio rebajado).'
      },
      {
        id:'DT2-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Porcentajes (porcentaje de, base correcta)',
        stem:'At a conference, 80 people attended. Of the attendees, 25% were speakers and the rest were guests. If 15% of the guests were first-time attendees, how many guests were first-time attendees?',
        choices:{A:'12', B:'20', C:'60', D:'9'},
        correct:'D',
        expCorrect:'Speakers = 25% de 80 = 20, así que guests = 80 − 20 = 60. First-time = 15% de los guests = 0.15 × 60 = 9.',
        expWrong:{
          A:'12 es el 15% de 80 (el total), pero el 15% se aplica solo a los GUESTS (60), no a todos los asistentes.',
          B:'20 es el número de speakers (25% de 80), no los guests primerizos.',
          C:'60 es el número total de guests, no los que asistían por primera vez.'
        },
        tip:'Cuidado con la BASE del porcentaje. "15% de los guests" usa 60, no 80. Primero halla el subgrupo correcto, luego aplica el porcentaje sobre él.'
      },
      {
        id:'DT2-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Razones (repartir un total en tres partes)',
        stem:'A recipe mixes flour, sugar, and butter in a ratio of 5 to 2 to 1 by weight. If a baker makes 480 grams of this mixture, how many grams of sugar are used?',
        choices:{A:'60', B:'96', C:'120', D:'300'},
        correct:'C',
        expCorrect:'La razón 5:2:1 tiene 5 + 2 + 1 = 8 partes. Cada parte = 480 / 8 = 60 gramos. El azúcar son 2 partes: 2 × 60 = 120 gramos.',
        expWrong:{
          A:'60 es el valor de UNA parte (la mantequilla, 1 parte). El azúcar son 2 partes, así que son 120.',
          B:'96 sale de repartir mal; con 8 partes iguales cada una vale 60, no 48.',
          D:'300 es la harina (5 partes × 60). Piden el azúcar.'
        },
        tip:'Razón de tres términos → suma TODAS las partes (5+2+1=8), divide el total entre esa suma, y multiplica por las partes del ingrediente que piden.'
      },
      {
        id:'DT2-06', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Tasas y unidades (tasa unitaria)',
        stem:'A printer produces pages at a constant rate. It printed 210 pages in 6 minutes. At this rate, how many pages does the printer produce in 10 minutes?',
        answer:'350',
        expCorrect:'Tasa = 210 / 6 = 35 páginas por minuto. En 10 minutos: 35 × 10 = 350 páginas. Respuesta: 350.',
        expWrong:{},
        tip:'Primero saca la tasa por unidad (páginas por MINUTO = 210/6 = 35), luego multiplica por el tiempo nuevo. Divide antes de multiplicar.'
      },
      {
        id:'DT2-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Estadística de una variable (mediana y rango)',
        stem:'A basketball player scored the following points in 7 games: 8, 11, 14, 14, 17, 20, and 30. What is the median number of points scored?',
        choices:{A:'14', B:'16', C:'17', D:'22'},
        correct:'A',
        expCorrect:'Los 7 valores ya están ordenados. La mediana es el valor central: el 4º de 7, que es 14.',
        expWrong:{
          B:'16 es la media aproximada (114/7 ≈ 16.3), no la mediana. La mediana es el valor del medio, no el promedio.',
          C:'17 es el 5º valor, pero con 7 datos el centro es el 4º valor (14), no el 5º.',
          D:'22 es el punto medio entre el menor (8) y el mayor (30); eso no es la mediana.'
        },
        tip:'Mediana = valor central de la lista ORDENADA. Con n impar es el término del medio (posición (n+1)/2). Con 7 datos, es el 4º. No la confundas con la media.'
      },
      {
        id:'DT2-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Estadística de una variable (efecto de agregar un valor a la media)',
        stem:'The mean of a data set of 5 numbers is 8. A sixth number, 20, is added to the data set. What is the mean of the new data set of 6 numbers?',
        choices:{A:'8', B:'12', C:'14', D:'10'},
        correct:'D',
        expCorrect:'La suma de los 5 números originales = media × cantidad = 8 × 5 = 40. Al agregar 20, la nueva suma = 40 + 20 = 60. Nueva media = 60 / 6 = 10.',
        expWrong:{
          A:'8 asume que la media no cambia, pero agregar un valor (20) mayor que la media sí la sube.',
          B:'12 promedia solo 8 y 20 ((8+20)/2), ignorando que hay 5 números en el grupo original.',
          C:'14 no corresponde; recupera la suma original (40), súmale 20 y divide entre 6 para obtener 10.'
        },
        tip:'Para trabajar con medias, recupera la SUMA: suma = media × cantidad. Ajusta la suma, ajusta la cantidad, y vuelve a dividir. Aquí 40 → 60, entre 6 = 10.'
      },
      {
        id:'DT2-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Estadística de una variable (comparar dispersión)',
        stem:'Data set P consists of the values 20, 40, 60, 80, and 100. Data set Q consists of the values 58, 59, 60, 61, and 62. Both data sets have a mean of 60. Which of the following correctly compares the standard deviations of the two data sets?',
        choices:{
          A:'The standard deviation of P is greater than the standard deviation of Q.',
          B:'The standard deviation of Q is greater than the standard deviation of P.',
          C:'The standard deviations of P and Q are equal.',
          D:'There is not enough information to compare the standard deviations.'
        },
        correct:'A',
        expCorrect:'La desviación estándar mide qué tan dispersos están los datos alrededor de la media. Los valores de P están muy separados (20 a 100), mientras que los de Q están muy juntos (58 a 62). Como P está más disperso, su desviación estándar es mayor.',
        expWrong:{
          B:'Al revés: Q es el conjunto MÁS agrupado (58 a 62), así que tiene la desviación estándar MENOR, no la mayor.',
          C:'No son iguales: tener la misma media no implica la misma dispersión. P está mucho más esparcido que Q.',
          D:'Sí hay información suficiente: conocemos todos los valores, así que podemos comparar la dispersión directamente.'
        },
        tip:'Desviación estándar = qué tan "esparcidos" están los datos alrededor de la media. Más juntos → menor. Más separados → mayor. Compara los rangos de un vistazo; no hace falta calcular.'
      },
      {
        id:'DT2-10', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Probabilidad (evento simple)',
        stem:'A jar contains 40 buttons: 16 are white, 15 are black, and 9 are red. If one button is selected at random, what is the probability that it is NOT white?',
        answer:'3/5',
        expCorrect:'Los que no son blancos = 15 + 9 = 24 (o 40 − 16 = 24). Probabilidad = 24 / 40 = 3/5. Formas válidas para el box: 3/5 o .6 o 0.6. Respuesta: 3/5.',
        expWrong:{},
        tip:'"NO blanco" = todos menos los blancos: 40 − 16 = 24 favorables. Probabilidad = 24/40 = 3/5. También vale .6 en el box.'
      },
      {
        id:'DT2-11', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Probabilidad (subgrupo dentro de un total, en palabras)',
        stem:'A class has 30 students. There are 18 girls, and 12 of the girls play a sport. There are 12 boys, and 9 of the boys play a sport. If one student who plays a sport is chosen at random, what is the probability that the student is a boy?',
        choices:{A:'3/10', B:'9/30', C:'9/21', D:'3/4'},
        correct:'C',
        expCorrect:'Total de estudiantes que juegan un deporte = 12 (niñas) + 9 (niños) = 21. De esos, 9 son niños. Probabilidad = 9 / 21 = 3/7.',
        expWrong:{
          A:'3/10 = 9/30 usa el total de 30 estudiantes, pero se elige solo entre los que juegan un deporte (21), no entre todos.',
          B:'9/30 comete el mismo error: el denominador debe ser 21 (los deportistas), no 30.',
          D:'3/4 = 9/12 usa solo los 12 niños como base, pero se elige entre TODOS los deportistas (21), no solo los niños.'
        },
        tip:'Cuando eligen "entre los que juegan un deporte", el denominador es ese subgrupo (21), no el total (30) ni un solo grupo (12). Favorables/subgrupo correcto.'
      },
      {
        id:'DT2-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Porcentajes (dos cambios porcentuales sucesivos)',
        stem:'A stock lost 20% of its value on Monday. On Tuesday, its value increased by 25% from its Monday value. After these two days, the stock\'s value is what percent of its value before Monday?',
        choices:{A:'100%', B:'105%', C:'95%', D:'45%'},
        correct:'A',
        expCorrect:'Los cambios sucesivos se MULTIPLICAN. Bajar 20% = ×0.80; subir 25% = ×1.25. Factor total = 0.80 × 1.25 = 1.00. El valor final es 100% del original (vuelve exactamente al inicio).',
        expWrong:{
          B:'105% suma los porcentajes (−20 + 25 = +5%). Los cambios porcentuales sucesivos no se suman.',
          C:'95% también suma mal los porcentajes o los aplica sobre la misma base; hay que multiplicar los factores.',
          D:'45% suma 20% + 25% como si fueran descuentos; no tiene relación con la cuenta correcta.'
        },
        tip:'Cambios sucesivos = multiplica los factores (1 ± p/100), nunca los sumes. 0.80 × 1.25 = 1.00: aquí sí se cancelan, pero por multiplicación, no por sumar −20 + 25.'
      }
    ]
  });
})();
