/* SAT Studio question set — Math: Problem-Solving & Data Analysis (DAT-01 a DAT-10) */
(function(){
  window.SAT_SETS.push({
    id: 'math-data',
    title: 'Math — Problem-Solving & Data',
    section: 'math',
    level: 'Media',
    description: 'Problem-Solving & Data Analysis: percentages, ratios, statistics, and probability.',
    minutes: 15,
    questions: [
      {
        id:'DAT-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Porcentajes (porcentaje de un total)',
        stem:'A school has 350 students. If 40% of the students are in the band, how many students are in the band?',
        choices:{A:'40', B:'140', C:'210', D:'245'},
        correct:'B',
        expCorrect:'40% de 350 = 0.40 × 350 = 140 estudiantes.',
        expWrong:{
          A:'40 es el porcentaje mismo, no la cantidad de estudiantes. Tienes que multiplicarlo por el total.',
          C:'210 es el 60% (los que NO están en la banda). Piden el 40%.',
          D:'245 es el 70% de 350; no corresponde al 40% que se pide.'
        },
        tip:'"Porcentaje de un total" = decimal × total en un solo paso. 40% → 0.40 × 350. Si el resultado te da el mismo número del porcentaje, olvidaste multiplicar.'
      },
      {
        id:'DAT-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Porcentajes (porcentaje de cambio)',
        stem:'A plant was 60 centimeters tall. Over the summer it grew to 75 centimeters tall. What was the percent increase in the height of the plant?',
        choices:{A:'15%', B:'20%', C:'25%', D:'75%'},
        correct:'C',
        expCorrect:'Aumento porcentual = (cambio / valor original) × 100 = (75 − 60)/60 × 100 = 15/60 × 100 = 25%.',
        expWrong:{
          A:'15% confunde el cambio absoluto (15 cm) con el porcentaje. Hay que dividir entre el valor original.',
          B:'20% sale de dividir el cambio entre el valor NUEVO (15/75), pero el porcentaje de cambio siempre se calcula sobre el valor original.',
          D:'75% es la altura final en cm, no un porcentaje de cambio.'
        },
        tip:'Porcentaje de cambio = (nuevo − viejo) / VIEJO. El denominador siempre es el valor de partida. Divide entre 75 y ya te equivocaste.'
      },
      {
        id:'DAT-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Razones (repartir un total según una razón)',
        stem:'In a club, the ratio of boys to girls is 3 to 5. If there are 240 members in the club, how many of the members are girls?',
        choices:{A:'90', B:'96', C:'144', D:'150'},
        correct:'D',
        expCorrect:'La razón 3:5 tiene 3 + 5 = 8 partes. Cada parte = 240 / 8 = 30 miembros. Las niñas son 5 partes: 5 × 30 = 150.',
        expWrong:{
          A:'90 es el número de NIÑOS (3 partes × 30). Piden las niñas.',
          B:'96 sale de repartir mal las partes; con 8 partes iguales cada una vale 30, no 32.',
          C:'144 sería el 60% de 240 tratando la razón como 3:5 = 2:3; la razón correcta da 8 partes, no 5.'
        },
        tip:'Razón a:b sobre un total → suma las partes (a+b), divide el total entre esa suma, y multiplica por la parte que te piden. Cuidado con contestar el grupo equivocado.'
      },
      {
        id:'DAT-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Tasas y unidades (velocidad constante)',
        stem:'A train travels 150 miles in 2.5 hours at a constant speed. At this rate, how many miles will the train travel in 4 hours?',
        choices:{A:'96', B:'160', C:'240', D:'375'},
        correct:'C',
        expCorrect:'Velocidad = 150 / 2.5 = 60 millas por hora. En 4 horas: 60 × 4 = 240 millas.',
        expWrong:{
          A:'96 invierte la razón (multiplica por 2.5/4 en vez de por la velocidad).',
          B:'160 usa una velocidad mal calculada; 150/2.5 = 60, no 40.',
          D:'375 sale de 150 × 2.5, multiplicando en vez de dividir para hallar la tasa.'
        },
        tip:'Primero saca la tasa por unidad (millas por HORA = distancia/tiempo), luego multiplica por el tiempo nuevo. Divide antes de multiplicar y evitas la trampa.'
      },
      {
        id:'DAT-05', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Estadística de una variable (media/promedio)',
        stem:'A student scored 12, 15, 18, 20, and 25 points in five games. What is the mean (average) number of points the student scored per game?',
        answer:'18',
        expCorrect:'Media = suma / cantidad. Suma = 12 + 15 + 18 + 20 + 25 = 90. Media = 90 / 5 = 18. Respuesta: 18.',
        expWrong:{},
        tip:'Media = suma de todos los valores dividida entre cuántos hay. No la confundas con la mediana (aquí el valor central ordenado también es 18, pero eso es coincidencia).'
      },
      {
        id:'DAT-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Estadística de una variable (desviación estándar / dispersión)',
        stem:'Data set X consists of the values 48, 49, 50, 51, and 52. Data set Y consists of the values 10, 30, 50, 70, and 90. Both data sets have a mean of 50. Which of the following correctly compares the standard deviations of the two data sets?',
        choices:{
          A:'The standard deviation of X is greater than the standard deviation of Y.',
          B:'The standard deviation of Y is greater than the standard deviation of X.',
          C:'The standard deviations of X and Y are equal.',
          D:'There is not enough information to compare the standard deviations.'
        },
        correct:'B',
        expCorrect:'La desviación estándar mide qué tan dispersos están los datos alrededor de la media. Los valores de X están muy juntos (48 a 52), mientras que los de Y están muy separados (10 a 90). Como Y está más disperso, su desviación estándar es mayor.',
        expWrong:{
          A:'Al revés: X es el conjunto MÁS agrupado, así que tiene la desviación estándar MENOR, no la mayor.',
          C:'No son iguales: tener la misma media no implica la misma dispersión. Y está mucho más esparcido.',
          D:'Sí hay información suficiente: conocemos todos los valores, así que podemos comparar la dispersión directamente.'
        },
        tip:'Desviación estándar = qué tan "esparcidos" están los datos alrededor de la media. Más juntos → menor. Más separados → mayor. No necesitas calcularla: compara los rangos de un vistazo.'
      },
      {
        id:'DAT-07', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Probabilidad (evento simple)',
        stem:'A bag contains 30 marbles: 12 are red, 8 are green, and 10 are blue. If one marble is selected at random from the bag, what is the probability that it is red?',
        answer:'2/5',
        expCorrect:'Probabilidad = casos favorables / casos totales = 12 / 30 = 2/5. Formas válidas para el box: 2/5 o .4 o 0.4 (también 12/30, mismo valor). Respuesta: 2/5.',
        expWrong:{},
        tip:'Probabilidad simple = (lo que quieres) / (el total). Aquí 12 rojas de 30. Simplifica o pon el decimal; 2/5 y .4 valen igual en el box.'
      },
      {
        id:'DAT-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Probabilidad condicional (tabla de doble entrada en palabras)',
        stem:'A survey was given to 200 people. Of the 120 adults surveyed, 90 said they prefer tea over coffee. If one of the surveyed adults is selected at random, what is the probability that this person prefers tea over coffee?',
        choices:{A:'0.375', B:'0.45', C:'0.60', D:'0.75'},
        correct:'D',
        expCorrect:'La condición ya restringe el grupo a los adultos, así que el denominador es 120 (no 200). Probabilidad = 90 / 120 = 3/4 = 0.75.',
        expWrong:{
          A:'0.375 divide 90 entre 240; no hay 240 personas y el grupo relevante son los 120 adultos.',
          B:'0.45 usa 90/200, tomando el total completo en vez de solo los adultos. La palabra "de los adultos" fija el denominador en 120.',
          C:'0.60 es la proporción de adultos en la encuesta (120/200), no la probabilidad pedida.'
        },
        tip:'Probabilidad condicional: la frase "de los adultos…" te dice que el denominador es SOLO ese subgrupo (120), no el total. Favorables/subgrupo, no favorables/total.'
      },
      {
        id:'DAT-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Datos de dos variables (línea de mejor ajuste / predicción)',
        stem:'A scatterplot shows the relationship between the number of hours studied, x, and a test score, y. The line of best fit for the data is given by y = 2.5x + 60. Based on this line, what is the predicted test score for a student who studies for 8 hours?',
        choices:{A:'68', B:'80', C:'62.5', D:'140'},
        correct:'B',
        expCorrect:'Sustituye x = 8 en la línea de mejor ajuste: y = 2.5(8) + 60 = 20 + 60 = 80.',
        expWrong:{
          A:'68 sale de sumar 8 + 60, olvidando multiplicar por la pendiente 2.5.',
          C:'62.5 sale de sumar 2.5 + 60 (usando x mal, como si x = 1).',
          D:'140 multiplica todo mal: 2.5 × 8 = 20, no 80. La cuenta correcta da 80.'
        },
        tip:'"Predicción con la línea de mejor ajuste" = sustituye el valor de x en la ecuación y calcula y. Respeta el orden: multiplica la pendiente por x ANTES de sumar la intersección.'
      },
      {
        id:'DAT-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Porcentajes (dos cambios porcentuales sucesivos)',
        stem:'The price of a product was first increased by 20%. Later, the new price was decreased by 10%. The final price is what percent of the original price?',
        choices:{A:'108%', B:'110%', C:'100%', D:'90%'},
        correct:'A',
        expCorrect:'Los cambios sucesivos se MULTIPLICAN, no se suman. Subir 20% = ×1.20; bajar 10% = ×0.90. Factor total = 1.20 × 0.90 = 1.08. El precio final es 108% del original.',
        expWrong:{
          B:'110% suma los porcentajes (+20 − 10 = +10%). Los cambios porcentuales sucesivos no se suman.',
          C:'100% asume que subir 20% y bajar 10% se cancelan, pero el 10% se aplica sobre un precio ya más alto, así que no vuelven al inicio.',
          D:'90% aplica solo la bajada del 10% e ignora la subida del 20%.'
        },
        tip:'Cambios sucesivos = multiplica los factores (1 ± p/100), nunca los sumes. Subir 20% y bajar 10% NO se cancela: 1.20 × 0.90 = 1.08, un 8% de aumento neto.'
      }
    ]
  });
})();
