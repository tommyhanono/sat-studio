/* SAT Studio question set — Math EXTREME: Data & Probability (XD-01 a XD-12) */
(function(){
  var TBL_TRANSPORT =
    '<table><thead><tr><th></th><th>Bus</th><th>Car</th><th>Walk</th><th>Total</th></tr></thead>' +
    '<tbody>' +
    '<tr><th>Junior</th><td>24</td><td>18</td><td>18</td><td>60</td></tr>' +
    '<tr><th>Senior</th><td>16</td><td>&nbsp;</td><td>14</td><td>60</td></tr>' +
    '<tr><th>Total</th><td>40</td><td>48</td><td>32</td><td>120</td></tr>' +
    '</tbody></table>';

  var TBL_PETS =
    '<table><thead><tr><th></th><th>Owns a cat</th><th>Does not own a cat</th><th>Total</th></tr></thead>' +
    '<tbody>' +
    '<tr><th>Owns a dog</th><td>&nbsp;</td><td>&nbsp;</td><td>90</td></tr>' +
    '<tr><th>Does not own a dog</th><td>&nbsp;</td><td>60</td><td>&nbsp;</td></tr>' +
    '<tr><th>Total</th><td>80</td><td>&nbsp;</td><td>200</td></tr>' +
    '</tbody></table>';

  var TBL_MACHINES =
    '<table><thead><tr><th>Machine</th><th>Defective</th><th>Not defective</th><th>Total</th></tr></thead>' +
    '<tbody>' +
    '<tr><th>A</th><td>15</td><td>485</td><td>500</td></tr>' +
    '<tr><th>B</th><td>12</td><td>288</td><td>300</td></tr>' +
    '<tr><th>C</th><td>&nbsp;</td><td>187</td><td>200</td></tr>' +
    '<tr><th>Total</th><td>40</td><td>960</td><td>1,000</td></tr>' +
    '</tbody></table>';

  var TBL_CUSTOMERS =
    '<table><thead><tr><th></th><th>Satisfied</th><th>Not satisfied</th><th>Total</th></tr></thead>' +
    '<tbody>' +
    '<tr><th>Under 40 years old</th><td>45</td><td>25</td><td>70</td></tr>' +
    '<tr><th>40 years old or older</th><td>&nbsp;</td><td>20</td><td>80</td></tr>' +
    '<tr><th>Total</th><td>&nbsp;</td><td>45</td><td>150</td></tr>' +
    '</tbody></table>';

  window.SAT_SETS.push({
    id: 'math-x-data',
    title: 'Extreme — Data & Probability',
    section: 'math',
    level: 'Extreme',
    description: 'Hard-Module-2 level: layered conditional probability, weighted means with unknowns, and inference limits.',
    minutes: 20,
    questions: [
      {
        id:'XD-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Probabilidad condicional en tabla de doble entrada (condición compuesta)',
        stem:'The incomplete table below summarizes how the 120 students in a school’s junior and senior classes travel to school. Each student uses exactly one mode of transportation.' + TBL_TRANSPORT + 'If a student is selected at random from those who travel by bus or walk, what is the probability that the student is a senior?',
        choices:{A:'1/4', B:'5/12', C:'1/2', D:'3/5'},
        correct:'B',
        expCorrect:'Primero completa la tabla: Senior Car = 60 − 16 − 14 = 30 (o 48 − 18 = 30 por la columna). La condición “bus or walk” reduce el universo a 40 + 32 = 72 estudiantes. De esos, los seniors son 16 + 14 = 30. Probabilidad = 30/72 = 5/12.',
        expWrong:{
          A:'1/4 = 30/120 usa el GRAN TOTAL como denominador. La frase “selected from those who travel by bus or walk” cambia el denominador a 72, no 120.',
          C:'1/2 = 30/60 divide entre el total de seniors. Eso responde otra pregunta (P(bus o walk | senior)), no la que te hicieron.',
          D:'3/5 = 72/120 es la probabilidad de que un estudiante cualquiera use bus o camine. No es lo que piden.'
        },
        tip:'En probabilidad condicional, la frase “from those who…” define el DENOMINADOR. Completa siempre la tabla antes de calcular: la celda que falta casi siempre entra en la respuesta o en un distractor.',
        desmos:'Completa la celda: 60-16-14 da 30. Luego la probabilidad: (16+14)/(40+32) = 30/72 ≈ 0.4167, que es 5/12. Compara con la trampa 30/120 = 0.25.',
        desmosLatex:['60-16-14', '(16+14)/(40+32)', '5/12']
      },
      {
        id:'XD-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Tabla de doble entrada: llenar celdas desde totales',
        stem:'A survey asked 200 adults whether they own a dog and whether they own a cat. The results are partially shown in the table below.' + TBL_PETS + 'If one of the surveyed adults who owns a dog is selected at random, what is the probability that the adult also owns a cat?',
        choices:{A:'3/20', B:'3/8', C:'1/3', D:'2/5'},
        correct:'C',
        expCorrect:'Llena la tabla desde los totales: los que NO tienen gato suman 200 − 80 = 120, y de ellos 60 no tienen perro, así que 120 − 60 = 60 tienen perro pero no gato. Entonces perro Y gato = 90 − 60 = 30. La condición es “owns a dog” (90 adultos): P = 30/90 = 1/3.',
        expWrong:{
          A:'3/20 = 30/200 usa el gran total de 200 como denominador. Como te condicionan a los dueños de perro, el denominador es 90.',
          B:'3/8 = 30/80 condiciona al revés: eso sería P(perro | gato). Lee con cuidado cuál grupo es el dado.',
          D:'2/5 = 80/200 es simplemente la proporción de dueños de gato en toda la muestra, sin condición alguna.'
        },
        tip:'Cuando la tabla viene incompleta, empieza por la fila o columna donde solo falta UNA celda y ve encadenando. Aquí la ruta es: columna “does not own a cat” → celda perro-sin-gato → celda perro-y-gato.',
        desmos:'Encadena en Desmos: 200-80 = 120 (sin gato); 120-60 = 60 (perro sin gato); 90-60 = 30 (perro y gato). Probabilidad: 30/90 ≈ 0.333, o sea 1/3. La trampa 30/200 da 0.15.',
        desmosLatex:['200-80', '120-60', '90-60', '30/90']
      },
      {
        id:'XD-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Probabilidad condicional P(X | Y o Z) con celda faltante',
        stem:'A factory uses three machines, A, B, and C, to produce 1,000 parts in one day. The incomplete table below classifies the parts by machine and by whether they were found to be defective.' + TBL_MACHINES + 'If one part is selected at random from the parts produced by machine B or machine C, what is the probability that the part is defective?',
        choices:{A:'1/20', B:'1/40', C:'1/25', D:'5/8'},
        correct:'A',
        expCorrect:'La celda que falta: defectuosas de C = 40 − 15 − 12 = 13 (verifica: 13 + 187 = 200 ✓). El universo condicionado es B o C: 300 + 200 = 500 piezas. Defectuosas ahí: 12 + 13 = 25. P = 25/500 = 1/20.',
        expWrong:{
          B:'1/40 = 25/1,000 divide entre el GRAN TOTAL. La selección es solo entre las piezas de B o C, así que el denominador es 500.',
          C:'1/25 = 40/1,000 es la tasa de defectos de TODA la fábrica, ignorando la condición “B or C”.',
          D:'5/8 = 25/40 condiciona al revés: es P(vino de B o C | defectuosa), no P(defectuosa | B o C).'
        },
        tip:'“From the parts produced by B or C” → suma esas dos filas completas y úsalas como denominador. Antes de eso, rellena la celda faltante con el total de la columna; sin ella no puedes armar el numerador.',
        desmos:'Celda faltante: 40-15-12 = 13. Probabilidad: (12+13)/(300+200) = 25/500 = 0.05 = 1/20. La trampa del gran total, 25/1000, da 0.025.',
        desmosLatex:['40-15-12', '(12+13)/(300+200)', '1/20']
      },
      {
        id:'XD-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Condicional inversa: condicionar sobre la columna',
        stem:'The incomplete table below shows the results of a satisfaction survey given to 150 customers of a store.' + TBL_CUSTOMERS + 'If one of the customers who reported being satisfied is selected at random, what is the probability that the customer is under 40 years old?',
        choices:{A:'3/10', B:'9/14', C:'7/10', D:'3/7'},
        correct:'D',
        expCorrect:'Completa la tabla: satisfechos de 40+ = 80 − 20 = 60, así que el total de satisfechos = 45 + 60 = 105 (verifica: 105 + 45 = 150 ✓). La condición es “satisfied” (105 clientes) y de ellos 45 son menores de 40. P = 45/105 = 3/7.',
        expWrong:{
          A:'3/10 = 45/150 usa el gran total de 150 como denominador. Te condicionaron a los satisfechos: el denominador es 105.',
          B:'9/14 = 45/70 condiciona al revés: eso es P(satisfecho | menor de 40). La pregunta invierte la condición.',
          C:'7/10 = 105/150 es la proporción de satisfechos en toda la muestra, no la probabilidad pedida.'
        },
        tip:'El SAT ama invertir la condicional: te dan filas por edad, pero condicionan sobre la COLUMNA (satisfied). El denominador correcto es el total de esa columna, que aquí tienes que calcular tú.',
        desmos:'Satisfechos de 40+: 80-20 = 60. Total satisfechos: 45+60 = 105. Probabilidad: 45/105 ≈ 0.4286 = 3/7. Compara con la trampa 45/150 = 0.3 y con la inversa 45/70 ≈ 0.643.',
        desmosLatex:['80-20', '45/(45+60)', '3/7']
      },
      {
        id:'XD-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Media ponderada: hallar cuántos valores se agregan',
        stem:'The mean of a list of 20 test scores is 82. After n additional scores of 94 each are added to the list, the mean of all the scores in the list is 86. What is the value of n?',
        choices:{A:'4', B:'5', C:'10', D:'20'},
        correct:'C',
        expCorrect:'Trabaja con SUMAS, no con promedios sueltos. Suma original: 20 × 82 = 1640. Ecuación: (1640 + 94n)/(20 + n) = 86 → 1640 + 94n = 1720 + 86n → 8n = 80 → n = 10. Verifica: (1640 + 940)/30 = 2580/30 = 86 ✓.',
        expWrong:{
          A:'4 es solo la diferencia 86 − 82. La diferencia de medias no es n; hay que plantear la ecuación con las sumas.',
          B:'5 sale de dividir mal los restos (por ejemplo 80 entre 16). El coeficiente correcto de n es 94 − 86 = 8, y el lado derecho es 86 − 82 veces 20, o sea 80.',
          D:'20 asume que se agregó la misma cantidad de puntajes que había. Con 20 y 20, la media sería el punto medio (82 + 94)/2 = 88, no 86.'
        },
        tip:'Método bala: cada 94 queda 8 puntos ARRIBA de la media final (94 − 86) y cada puntaje viejo quedó 4 abajo (86 − 82). Balance: 8n = 4(20) → n = 10. Las desviaciones respecto a la media final siempre suman cero.',
        desmos:'Resuelve gráficamente (20*82+94n)/(20+n)=86: escribe y=(1640+94x)/(20+x) junto con y=86 y se cruzan en x = 10. Verifica: (1640+94*10)/30 = 86.',
        desmosLatex:['y=(20*82+94x)/(20+x)', 'y=86', '(20*82+94*10)/(20+10)']
      },
      {
        id:'XD-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Media ponderada de dos grupos: hallar la proporción',
        stem:'In a class, the mean quiz score of the boys is 74, and the mean quiz score of the girls is 89. The mean quiz score of the entire class is 83. What fraction of the students in the class are girls?',
        choices:{A:'2/5', B:'3/5', C:'1/2', D:'2/3'},
        correct:'B',
        expCorrect:'Sea b el número de niños y g el de niñas: 74b + 89g = 83(b + g) → 6g = 9b → g/b = 3/2. Entonces las niñas son 3 partes de cada 5: g/(b + g) = 3/5. Verifica con 2 niños y 3 niñas: (74·2 + 89·3)/5 = (148 + 267)/5 = 415/5 = 83 ✓.',
        expWrong:{
          A:'2/5 invierte la proporción: esa es la fracción de NIÑOS. La media 83 está más cerca de 89, así que el grupo de las niñas pesa más, no menos.',
          C:'1/2 solo serviría si la media combinada fuera el punto medio (74 + 89)/2 = 81.5. Como es 83, los grupos no son iguales.',
          D:'2/3 confunde la razón g:b = 3:2 con la fracción del total. La fracción de niñas es 3/(3+2) = 3/5, no 2/3.'
        },
        tip:'Regla de la balanza (alligation): las cantidades son INVERSAMENTE proporcionales a las distancias a la media combinada. Niños distan 83 − 74 = 9; niñas distan 89 − 83 = 6 → b:g = 6:9 = 2:3. Chequeo: la media combinada queda más cerca del grupo más grande.',
        desmos:'Si x es la fracción de niñas, grafica y=74(1-x)+89x junto con y=83: se cruzan en x = 0.6 = 3/5. Verifica: 74*0.4+89*0.6 = 83.',
        desmosLatex:['y=74(1-x)+89x', 'y=83', '74*0.4+89*0.6']
      },
      {
        id:'XD-07', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Media: quitar un valor de la lista',
        stem:'The mean of a list of 15 numbers is 62. When one number is removed from the list, the mean of the remaining 14 numbers is 59. What is the value of the number that was removed?',
        answer:'104',
        expCorrect:'Suma total original: 15 × 62 = 930. Suma después de quitar el valor: 14 × 59 = 826. El número removido es la diferencia de sumas: 930 − 826 = 104. Tiene sentido: quitar un valor muy por ENCIMA de la media hace que la media baje.',
        expWrong:{},
        tip:'Con medias, convierte todo a SUMAS: suma = media × cantidad. Valor removido = (suma vieja) − (suma nueva). Chequeo de cordura: si la media bajó, el valor quitado era mayor que la media original.',
        desmos:'Escribe 15*62-14*59 en Desmos y te da 104 directo. Para verificar, resuelve gráficamente (930-x)/14 = 59: grafica y=(930-x)/14 y y=59; se cruzan en x = 104.',
        desmosLatex:['15*62-14*59', 'y=(930-x)/14', 'y=59']
      },
      {
        id:'XD-08', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Media ponderada: hallar el valor desconocido agregado',
        stem:'A student’s first 8 quiz scores have a mean of 76. The student then takes 2 more quizzes and earns the same score, x, on each. If the mean of all 10 quiz scores is 79, what is the value of x?',
        answer:'91',
        expCorrect:'Suma de los primeros 8: 8 × 76 = 608. Ecuación con la suma total: (608 + 2x)/10 = 79 → 608 + 2x = 790 → 2x = 182 → x = 91. Verifica: (608 + 182)/10 = 790/10 = 79 ✓.',
        expWrong:{},
        tip:'La media final “exige” un total de 10 × 79 = 790 puntos. Los 8 primeros aportan 608, así que los 2 nuevos deben aportar 790 − 608 = 182 entre los dos → 91 cada uno. Piensa siempre en el TOTAL que pide la media objetivo.',
        desmos:'Resuelve gráficamente (8*76+2x)/10 = 79: grafica y=(608+2x)/10 junto con y=79 y se cruzan en x = 91. O directo: (10*79-8*76)/2 = 91.',
        desmosLatex:['y=(8*76+2x)/10', 'y=79', '(10*79-8*76)/2']
      },
      {
        id:'XD-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Margen de error: conclusión justificada',
        stem:'A researcher selected a random sample of 400 students from Riverside High School and asked whether they support a later school start time. Of the students sampled, 62% said they support it, with an associated margin of error of 4.8%. Which of the following conclusions is best supported by these results?',
        choices:{
          A:'It is guaranteed that more than 57% of the students at Riverside High School support a later start time.',
          B:'The percentage of all high school students in the city who support a later start time is between 57.2% and 66.8%.',
          C:'Exactly 62% of all students in the school district support a later start time.',
          D:'It is plausible that the percentage of students at Riverside High School who support a later start time is between 57.2% and 66.8%.'
        },
        correct:'D',
        expCorrect:'El margen de error da un intervalo de PLAUSIBILIDAD para la población muestreada: 62% ± 4.8% → entre 57.2% y 66.8%, y solo para los estudiantes de Riverside High School (de ahí salió la muestra aleatoria). “Plausible” es la palabra correcta: no es garantía ni certeza.',
        expWrong:{
          A:'“Guaranteed” mata la opción: el margen de error NUNCA garantiza nada; describe incertidumbre, no certeza. El valor real podría quedar fuera del intervalo.',
          B:'Extiende la conclusión a “all high school students in the city”, pero la muestra salió SOLO de Riverside. No puedes generalizar más allá de la población muestreada.',
          C:'“Exactly 62%” confunde el estadístico muestral con el parámetro poblacional, y encima cambia la población al distrito entero. Doble error.'
        },
        tip:'Checklist: (1) ¿la conclusión se queda DENTRO de la población muestreada?, (2) ¿usa lenguaje de plausibilidad (“plausible”, “likely”) y no de certeza (“exactly”, “guaranteed”, “will”)? Si falla cualquiera de las dos, descártala.',
        desmos:'Calcula el intervalo en Desmos: 62-4.8 = 57.2 y 62+4.8 = 66.8. El rango plausible es [57.2, 66.8], y solo aplica a Riverside High School.',
        desmosLatex:['62-4.8', '62+4.8']
      },
      {
        id:'XD-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Margen de error: intervalo para la media, no para individuos',
        stem:'A quality engineer selected a random sample of 100 batteries from a shipment of 10,000 batteries and measured how long each battery lasted. The sample mean was 14.2 hours, with an associated margin of error of 0.6 hours. Which of the following is the most appropriate conclusion?',
        choices:{
          A:'Every battery in the shipment lasts between 13.6 and 14.8 hours.',
          B:'It is plausible that the mean life of all the batteries in the shipment is between 13.6 and 14.8 hours.',
          C:'It is plausible that the mean life of all batteries produced by the manufacturer is between 13.6 and 14.8 hours.',
          D:'The mean life of the batteries in the shipment is exactly 14.2 hours.'
        },
        correct:'B',
        expCorrect:'El intervalo 14.2 ± 0.6 → [13.6, 14.8] es un rango PLAUSIBLE para la MEDIA de la población muestreada: las 10,000 baterías del envío. Habla de la media, no de baterías individuales, y solo del envío del que salió la muestra.',
        expWrong:{
          A:'El margen de error describe la incertidumbre sobre la MEDIA, no un rango que cada batería individual deba cumplir. Una batería suelta puede durar 12 o 16 horas sin contradecir nada.',
          C:'Extiende la conclusión a “all batteries produced by the manufacturer”, pero la muestra salió solo de ESTE envío de 10,000. Fuera del marco muestral no se puede afirmar nada.',
          D:'“Exactly 14.2” es el valor de la MUESTRA. El margen de error existe precisamente porque la media poblacional casi nunca coincide exactamente con la muestral.'
        },
        tip:'Tres trampas clásicas de MOE: (1) aplicarlo a individuos en vez de a la media, (2) salirse de la población muestreada, (3) tratar el estadístico muestral como valor exacto. La correcta siempre combina “plausible” + “mean” + la población correcta.',
        desmos:'Intervalo en Desmos: 14.2-0.6 = 13.6 y 14.2+0.6 = 14.8. Ese rango es para la media del envío, no para cada batería individual.',
        desmosLatex:['14.2-0.6', '14.2+0.6']
      },
      {
        id:'XD-11', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Cadena de porcentajes: revertir cambios sucesivos',
        stem:'The price of a jacket was first increased by 20%. The new price was then decreased by 25%, resulting in a final price of $270. What was the original price of the jacket?',
        choices:{A:'$300', B:'$283.50', C:'$337.50', D:'$225'},
        correct:'A',
        expCorrect:'Encadena multiplicadores: +20% → ×1.20; luego −25% → ×0.75. Efecto neto: 1.20 × 0.75 = 0.90. Si p es el precio original, 0.90p = 270 → p = 270/0.90 = 300. Verifica hacia adelante: 300 × 1.2 = 360; 360 × 0.75 = 270 ✓.',
        expWrong:{
          B:'$283.50 sale de sumarle 5% a 270 (270 × 1.05), como si el cambio neto fuera −5% y se revirtiera sumando 5%. Los porcentajes sucesivos NO se suman, y un −5% no se revierte sumando 5%: se revierte DIVIDIENDO entre el multiplicador neto 0.90.',
          C:'$337.50 = 270/0.80 deshace un descuento de 20% que nadie aplicó (el descuento fue de 25% y antes hubo un aumento). Hay que revertir la cadena COMPLETA.',
          D:'$225 = 270/1.2 solo deshace el aumento del 20% e ignora el descuento del 25%. Revertiste la mitad de la historia.'
        },
        tip:'Convierte cada cambio porcentual en un multiplicador y MULTIPLÍCALOS: +20% → 1.2, −25% → 0.75. Para ir hacia atrás, divide el valor final entre el producto de los multiplicadores. Jamás sumes o restes porcentajes sucesivos.',
        desmos:'Multiplicador neto: 1.2*0.75 = 0.9. Precio original: 270/0.9 = 300. O resuelve gráficamente: y=1.2*0.75x con y=270 se cruzan en x = 300.',
        desmosLatex:['1.2*0.75', '270/(1.2*0.75)', 'y=1.2*0.75x', 'y=270']
      },
      {
        id:'XD-12', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil', extreme:true,
        skill:'Cadena de tres porcentajes: hallar el valor original',
        stem:'The population of a town increased by 25% during its first decade, decreased by 20% during its second decade, and then increased by 10% during its third decade. If the population at the end of the third decade was 3,300, what was the population at the beginning of the first decade?',
        answer:'3000',
        expCorrect:'Multiplicadores: +25% → 1.25; −20% → 0.80; +10% → 1.10. Producto: 1.25 × 0.80 × 1.10 = 1.10. Si p es la población inicial: 1.10p = 3300 → p = 3300/1.10 = 3000. Verifica hacia adelante: 3000 → 3750 → 3000 → 3300 ✓. Fíjate que +25% y −20% se cancelan exacto (1.25 × 0.8 = 1).',
        expWrong:{},
        tip:'Dato de oro: +25% seguido de −20% se cancelan (1.25 × 0.8 = 1). Si detectas la cancelación, el problema se reduce a deshacer solo el +10%: 3300/1.1 = 3000. Y ojo: sumar 25 − 20 + 10 = 15% da un resultado incorrecto.',
        desmos:'Producto de multiplicadores: 1.25*0.8*1.1 = 1.1. Población inicial: 3300/1.1 = 3000. Verifica la cadena completa: 3000*1.25*0.8*1.1 = 3300.',
        desmosLatex:['1.25*0.8*1.1', '3300/(1.25*0.8*1.1)', '3000*1.25*0.8*1.1']
      }
    ]
  });
})();
