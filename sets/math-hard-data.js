/* SAT Studio question set — Math: Percents, Data & Systems — Hard (HMD-01 a HMD-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-hard-data',
    title: 'Percents, Data & Systems — Hard',
    section: 'math',
    level: 'Difícil',
    description: 'Hard percentages (successive & reverse percent), probability (conditional & two-way tables), statistics (mean/median/spread), and systems of equations.',
    minutes: 20,
    questions: [
      {
        id:'HMD-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Porcentajes (porcentaje inverso / hallar el original)',
        stem:'After a 25% discount, the sale price of a bicycle is $90. What was the original price of the bicycle, before the discount?',
        choices:{A:'$67.50', B:'$120.00', C:'$112.50', D:'$115.00'},
        correct:'B',
        expCorrect:'Bajar 25% es multiplicar por 0.75. Si el precio original es P, entonces P × 0.75 = 90, así que P = 90 / 0.75 = 120. (Comprueba: 120 × 0.75 = 90 ✓.)',
        expWrong:{
          A:'$67.50 = 90 × 0.75, o sea aplicaste el descuento OTRA vez. El 90 ya es el precio rebajado; hay que deshacer el descuento, no repetirlo.',
          C:'$112.50 = 90 × 1.25. Le sumaste 25% al precio ya rebajado, pero el 25% original se calculaba sobre el precio ORIGINAL, no sobre el de oferta. Base equivocada.',
          D:'$115.00 = 90 + 25, sumando el 25 como si fueran dólares. El 25 es un porcentaje, no una cantidad fija.'
        },
        tip:'Porcentaje inverso: si te dan el valor DESPUÉS del cambio, DIVIDE por el factor. Bajar 25% → dividir entre 0.75. Multiplicar por 1.25 no deshace un descuento del 25%.'
      },
      {
        id:'HMD-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Porcentajes (dos cambios porcentuales sucesivos)',
        stem:'The number of subscribers to a channel increased by 30% during one year and then decreased by 20% the following year. Over these two years, the number of subscribers changed by what percent, compared with the original number?',
        choices:{
          A:'It increased by 4%.',
          B:'It increased by 10%.',
          C:'It stayed the same.',
          D:'It decreased by 4%.'
        },
        correct:'A',
        expCorrect:'Los cambios sucesivos se MULTIPLICAN. Subir 30% = ×1.30; bajar 20% = ×0.80. Factor total = 1.30 × 0.80 = 1.04, o sea un aumento neto del 4%.',
        expWrong:{
          B:'10% suma los porcentajes (+30 − 20 = +10). Los cambios porcentuales sucesivos nunca se suman.',
          C:'No se cancela: el 20% de bajada se aplica sobre una base ya más grande (después del +30%), así que no regresas al inicio. Queda un +4% neto.',
          D:'La magnitud 4% está bien, pero el signo no: 1.04 es MAYOR que 1, así que el neto es un aumento, no una disminución.'
        },
        tip:'Cambios sucesivos = multiplica los factores (1 ± p/100), nunca los sumes. 1.30 × 0.80 = 1.04 → +4%, no +10% ni "se cancela".'
      },
      {
        id:'HMD-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Probabilidad condicional (tabla de doble entrada)',
        stem:'A group of 200 people were asked whether they prefer shopping online or in-store. The results are shown in the two-way table below, organized by age group.<br><br>Under 40 — Online: 84, In-store: 36, Total: 120<br>40 or older — Online: 28, In-store: 52, Total: 80<br>Total — Online: 112, In-store: 88, Total: 200<br><br>If one of the 200 people is selected at random and that person prefers shopping online, what is the probability that the person is under 40 years old?',
        choices:{A:'0.42', B:'0.56', C:'0.75', D:'0.70'},
        correct:'C',
        expCorrect:'La condición "prefiere online" fija el denominador en la columna de online: 112 personas. De esas, 84 son menores de 40. Probabilidad = 84 / 112 = 0.75.',
        expWrong:{
          A:'0.42 = 84 / 200. Ese es la probabilidad CONJUNTA (online Y menor de 40 sobre el total). La condición ya te reduce el universo a los 112 de online.',
          B:'0.56 = 112 / 200, que es solo la proporción marginal de gente que prefiere online, no lo que se pregunta.',
          D:'0.70 = 84 / 120. Ahí invertiste la condición: eso es P(online | menor de 40), pero piden P(menor de 40 | online), o sea 84/112.'
        },
        tip:'Probabilidad condicional en tablas: la frase "dado que prefiere online" te dice que el denominador es SOLO esa columna (112), no el total. Favorables/subgrupo, no favorables/total.'
      },
      {
        id:'HMD-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Estadística de una variable (promedio ponderado)',
        stem:'In a class of 30 students, the 18 students who studied Spanish averaged 80 points on an exam, and the 12 students who studied French averaged 90 points on the same exam. What was the average score of all 30 students on the exam?',
        choices:{A:'85', B:'86', C:'88', D:'84'},
        correct:'D',
        expCorrect:'Promedio ponderado = (suma total de puntos) / (total de estudiantes). Suma = 18 × 80 + 12 × 90 = 1440 + 1080 = 2520. Promedio = 2520 / 30 = 84. Como hay más estudiantes en el grupo de 80, el promedio se acerca más a 80 que a 90.',
        expWrong:{
          A:'85 = (80 + 90) / 2, el promedio SIMPLE. Eso solo vale si los dos grupos tuvieran el mismo número de estudiantes, pero hay 18 vs 12.',
          B:'86 = (18 × 90 + 12 × 80) / 30. Intercambiaste los pesos: el grupo de 18 sacó 80, no 90.',
          C:'88 inclina el promedio demasiado hacia el 90. Como el grupo grande (18) sacó 80, el promedio real queda por DEBAJO de 85, no arriba.'
        },
        tip:'Promedio ponderado: multiplica cada promedio por su cantidad de datos, suma, y divide entre el total de datos. El resultado se pega al grupo más numeroso (aquí, al 80).'
      },
      {
        id:'HMD-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Estadística de una variable (efecto de un valor atípico en media y mediana)',
        stem:'The data set below lists the number of overtime hours worked by 7 employees last month.<br><br>3, 5, 6, 8, 9, 10, 12<br><br>It is later found that the employee recorded as 12 hours actually worked 40 hours, so the value 12 should be replaced by 40. Compared with the original data set, how do the mean and the median of the corrected data set change?',
        choices:{
          A:'The mean increases, but the median stays the same.',
          B:'Both the mean and the median increase.',
          C:'The mean stays the same, but the median increases.',
          D:'The mean increases, and the median decreases.'
        },
        correct:'A',
        expCorrect:'La mediana es el valor central de los 7 datos ordenados: el 4.º valor, que es 8, tanto antes (3,5,6,8,9,10,12) como después (3,5,6,8,9,10,40). No cambia. La media sí sube porque la suma pasa de 53 a 81 (53 − 12 + 40), así que la media sube de ≈7.6 a ≈11.6.',
        expWrong:{
          B:'La mediana NO sube: cambiar el valor MÁS grande (12→40) no mueve el dato del centro, que sigue siendo 8. Solo la media reacciona a valores extremos.',
          C:'La media no se queda igual: subiste un dato de 12 a 40, así que la suma crece y la media también. Es la MEDIANA la que se queda igual, no la media.',
          D:'La mediana no baja: sigue siendo 8. Aumentar el valor mayor jamás baja la mediana.'
        },
        tip:'La media reacciona a valores atípicos; la mediana casi no. Cambiar el dato más alto (o más bajo) mueve la media pero deja quieto el valor central.'
      },
      {
        id:'HMD-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Estadística de una variable (desviación estándar / dispersión)',
        stem:'Two data sets each contain five values and each has a mean of 50.<br><br>Data set R: 46, 48, 50, 52, 54<br>Data set S: 30, 40, 50, 60, 70<br><br>Which of the following correctly compares the standard deviations of the two data sets?',
        choices:{
          A:'The standard deviation of R is greater than the standard deviation of S.',
          B:'The standard deviation of S is greater than the standard deviation of R.',
          C:'The standard deviations of R and S are equal.',
          D:'There is not enough information to compare the standard deviations.'
        },
        correct:'B',
        expCorrect:'La desviación estándar mide qué tan dispersos están los datos alrededor de la media (aquí 50 en ambos). R va de 46 a 54 (muy agrupado); S va de 30 a 70 (muy esparcido). Como S está mucho más disperso, su desviación estándar es mayor.',
        expWrong:{
          A:'Al revés: R es el conjunto MÁS agrupado, así que tiene la desviación estándar MENOR, no la mayor.',
          C:'No son iguales: compartir la media no implica compartir la dispersión. S está mucho más esparcido que R.',
          D:'Sí hay información suficiente: conoces todos los valores, así que puedes comparar la dispersión de un vistazo.'
        },
        tip:'Desviación estándar = qué tan "esparcidos" están los datos alrededor de la media. Datos más juntos → menor; más separados → mayor. Compara los rangos sin calcular nada.'
      },
      {
        id:'HMD-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Probabilidad condicional (tabla de doble entrada)',
        stem:'A total of 300 people who watched a movie were asked whether they liked it, categorized by whether they had read the book first. The two-way table below shows the results.<br><br>Read the book — Liked: 120, Did not like: 30, Total: 150<br>Did not read the book — Liked: 60, Did not like: 90, Total: 150<br>Total — Liked: 180, Did not like: 120, Total: 300<br><br>If one of these 300 people who did NOT read the book is selected at random, what is the probability that the person liked the movie?',
        choices:{A:'0.20', B:'0.33', C:'0.40', D:'0.60'},
        correct:'C',
        expCorrect:'La condición "no leyó el libro" fija el denominador en esa fila: 150 personas. De ellas, 60 sí gustaron de la película. Probabilidad = 60 / 150 = 0.40.',
        expWrong:{
          A:'0.20 = 60 / 300, la probabilidad CONJUNTA sobre el total. La condición reduce el universo a los 150 que no leyeron el libro.',
          B:'0.33 = 60 / 180. Eso invierte la condición: sería P(no leyó | le gustó), usando la columna de "Liked" (180). Piden lo contrario.',
          D:'0.60 = 90 / 150, que es la probabilidad de que NO le gustara entre los que no leyeron. Es el complemento; piden que SÍ le gustó.'
        },
        tip:'"Dado que no leyó el libro" → denominador = solo esa fila (150). Ojo con dos trampas: invertir la condición (usar la columna) y calcular el complemento (los que no gustaron).'
      },
      {
        id:'HMD-08', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas de ecuaciones lineales (infinitas soluciones)',
        stem:'The system of equations below has infinitely many solutions.<br><br>6x + 4y = 10<br>3x + 2y = c<br><br>What is the value of the constant c?',
        choices:{A:'2', B:'2.5', C:'10', D:'5'},
        correct:'D',
        expCorrect:'"Infinitas soluciones" significa que las dos ecuaciones son la MISMA recta, o sea una es múltiplo de la otra. Divide la primera entre 2: 6x + 4y = 10 → 3x + 2y = 5. Para que coincida con 3x + 2y = c, debe ser c = 5.',
        expWrong:{
          A:'2 es la razón de los coeficientes (6/3 = 2), pero c no es la razón: es el término independiente de la segunda ecuación una vez reducida.',
          B:'2.5 = 10 / 4, mezclando el 10 con el coeficiente equivocado. Hay que dividir el 10 entre 2 (el mismo factor que reduce 6x→3x), no entre 4.',
          C:'10 copia el término independiente de la primera ecuación sin escalarlo. Como dividiste los coeficientes entre 2, el 10 también se divide entre 2 → 5.'
        },
        tip:'Infinitas soluciones = misma recta = una ecuación es múltiplo exacta de la otra. Escala TODO por el mismo factor (coeficientes Y el término independiente). "Sin solución" sería el mismo lado izquierdo pero distinto término independiente.'
      },
      {
        id:'HMD-09', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas de ecuaciones lineales (problema en palabras)',
        stem:'At a concession stand, 3 hot dogs and 2 drinks cost $16, and 2 hot dogs and 4 drinks cost $16. What is the price, in dollars, of one hot dog?',
        choices:{A:'$4', B:'$2', C:'$3', D:'$5'},
        correct:'A',
        expCorrect:'Sea h el precio de un hot dog y d el de una bebida: 3h + 2d = 16 y 2h + 4d = 16. Multiplica la primera por 2: 6h + 4d = 32. Réstale la segunda: (6h + 4d) − (2h + 4d) = 32 − 16 → 4h = 16 → h = 4. (Comprueba: d = 2, y 3(4)+2(2)=16 ✓, 2(4)+4(2)=16 ✓.)',
        expWrong:{
          B:'$2 es el precio de la BEBIDA (d = 2), no del hot dog. La pregunta pide h.',
          C:'$3 sale de un error al eliminar; al restar las ecuaciones queda 4h = 16, o sea h = 4, no 3.',
          D:'$5 no cumple: 3(5) + 2d = 16 daría 2d = 1, que no encaja con la segunda ecuación. Resuelve el sistema completo.'
        },
        tip:'Arma dos ecuaciones con las dos condiciones. Iguala los coeficientes de una variable (aquí las bebidas: multiplica la primera por 2) y resta para eliminarla. Luego revisa si piden el hot dog o la bebida.'
      },
      {
        id:'HMD-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Porcentajes (aumento y descuento sucesivos)',
        stem:'A store first increases the price of an item by 40%. It then offers a coupon that takes 25% off the increased price. The final price is what percent of the original price?',
        choices:{A:'115%', B:'105%', C:'100%', D:'75%'},
        correct:'B',
        expCorrect:'Multiplica los factores: subir 40% = ×1.40; bajar 25% = ×0.75. Factor total = 1.40 × 0.75 = 1.05. El precio final es 105% del original.',
        expWrong:{
          A:'115% suma los porcentajes (+40 − 25 = +15). Los cambios sucesivos no se suman, se multiplican.',
          C:'100% supone que el aumento y el descuento se cancelan, pero el 25% se aplica sobre una base ya más alta (después del +40%), así que no vuelves al precio original.',
          D:'75% aplica solo el descuento (×0.75) e ignora por completo el aumento del 40%.'
        },
        tip:'Aumento y descuento seguidos = multiplica 1.40 × 0.75 = 1.05. Subir 40% y bajar 25% NO se cancela ni se resta; queda un 5% neto por encima del original.'
      },
      {
        id:'HMD-11', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Porcentajes (porcentaje inverso / hallar el original)',
        stem:'After a 15% increase, a gym now has 460 members. How many members did the gym have before the increase?',
        answer:'400',
        expCorrect:'Subir 15% es multiplicar por 1.15. Si M es la cantidad original, M × 1.15 = 460, así que M = 460 / 1.15 = 400. (Comprueba: 400 × 1.15 = 460 ✓.) Respuesta: 400.',
        expWrong:{},
        tip:'Porcentaje inverso: cuando te dan el valor DESPUÉS del cambio, DIVIDE por el factor. Subir 15% → dividir entre 1.15, no multiplicar. Restarle 15% a 460 da un valor equivocado porque el 15% se calculó sobre el original.'
      },
      {
        id:'HMD-12', type:'spr', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas de ecuaciones lineales (problema en palabras)',
        stem:'A vendor sells small candles for $6 each and large candles for $10 each. One day the vendor sold 40 candles for a total of $312. How many large candles were sold that day?',
        answer:'18',
        expCorrect:'Sea s la cantidad de velas pequeñas y g la de grandes: s + g = 40 y 6s + 10g = 312. De la primera, s = 40 − g. Sustituye: 6(40 − g) + 10g = 312 → 240 − 6g + 10g = 312 → 240 + 4g = 312 → 4g = 72 → g = 18. (Comprueba: pequeñas = 22, y 22 × 6 + 18 × 10 = 132 + 180 = 312 ✓.) Respuesta: 18.',
        expWrong:{},
        tip:'Arma dos ecuaciones: una para la cantidad total (s + g = 40) y otra para el dinero total (6s + 10g = 312). Sustituye y despeja. Lee bien: piden las GRANDES (g), no las pequeñas.'
      }
    ]
  });
})();
