/* SAT Studio question set — Math: Algebra 4, sistemas y rectas (AL4-01 a AL4-12)
 *
 * Segundo de los dos sets que pedía la auditoría del 26-jul-2026 para llevar el
 * dominio Algebra de 0,68× a ~1,0× de su peso oficial (35 % del examen).
 * math-alg3 cubrió el núcleo de una variable, funciones y desigualdades; este
 * cubre lo que quedaba fino:
 *   · Sistemas por sustitución y por eliminación con multiplicación
 *   · Sistemas sin solución e infinitas soluciones
 *   · Desigualdades en dos variables
 *   · Rectas paralelas y perpendiculares
 *   · Modelos lineales con dos condiciones
 *   · Valor absoluto lineal
 *
 * Mezcla 8 Media / 4 Difícil: el banco ya tiene 59 % de dificultad alta y hay
 * que dejar de empujar ese sesgo.
 */
(function(){
  window.SAT_SETS.push({
    id: 'math-alg4',
    title: 'Math — Algebra 4 (sistemas y rectas)',
    section: 'math',
    level: 'Media',
    description: 'Sistemas por sustitución y eliminación, sin solución e infinitas, desigualdades en dos variables, paralelas y perpendiculares, modelos con dos condiciones y valor absoluto.',
    minutes: 20,
    questions: [
      {
        id:'AL4-01', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas de dos ecuaciones (sustitución)',
        stem:'y = 2x − 3\n4x + y = 21\nThe system of equations above has solution (x, y). What is the value of y ?',
        choices:{A:'5', B:'4', C:'21', D:'−3'},
        correct:'A',
        expCorrect:'La primera ecuación ya tiene la y despejada, así que sustituye directo en la segunda: 4x + (2x − 3) = 21 ⇒ 6x − 3 = 21 ⇒ 6x = 24 ⇒ x = 4. Ahora volvé a la primera: y = 2(4) − 3 = 5. (Comprueba en la segunda: 4(4) + 5 = 21 ✓.)',
        expWrong:{
          B:'4 es el valor de x, no de y. Resolviste bien y contestaste la otra variable: es el error más caro del tema porque no se siente como error.',
          C:'21 es el lado derecho de la segunda ecuación, no una solución. Ninguna variable vale 21.',
          D:'−3 es el intercepto de la primera ecuación, el número suelto. Es y solo cuando x = 0, y acá x = 4.'
        },
        tip:'Si una ecuación ya tiene una variable despejada, sustituir gana siempre: no hay que preparar nada. Y antes de marcar, releé qué variable pide — x e y suelen estar las dos entre las opciones.',
        desmos:'Grafica y=2x-3 y 4x+y=21 y toca la intersección: (4, 5).',
        desmosLatex:['y=2x-3','4x+y=21']
      },
      {
        id:'AL4-02', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas con infinitas soluciones',
        stem:'3x − 6y = 12\nax − 2y = 4\nIn the system above, a is a constant. If the system has infinitely many solutions, what is the value of a ?',
        choices:{A:'1', B:'3', C:'2', D:'1/3'},
        correct:'A',
        expCorrect:'Infinitas soluciones significa que las dos ecuaciones son **la misma recta**: una es múltiplo exacto de la otra, coeficientes Y constante. Divide la primera entre 3: x − 2y = 4. Comparala con ax − 2y = 4: los términos en y y las constantes ya coinciden, así que a = 1. (Con a = 1 las dos ecuaciones son idénticas, o sea infinitas soluciones ✓.)',
        expWrong:{
          B:'3 copia el coeficiente de la primera ecuación sin ajustar la escala. La segunda ecuación está a un tercio de la primera: el 3 también se divide.',
          C:'2 es el coeficiente de y, no el de x. Son posiciones distintas de la ecuación.',
          D:'1/3 divide una vez de más. Al pasar de 3x − 6y = 12 a x − 2y = 4 ya dividiste todo entre 3; el coeficiente de x quedó en 1, no en 1/3.'
        },
        tip:'Infinitas soluciones = MISMA recta (coeficientes y constante proporcionales). Sin solución = rectas PARALELAS (coeficientes proporcionales, constante NO). Es el mismo cálculo y el SAT pregunta las dos versiones con la misma frecuencia; lo único que cambia es qué hacés con la constante.',
        desmos:'Grafica 3x-6y=12 y x-2y=4: se dibujan una encima de la otra. Cambiá el 4 por un 5 y verás dos rectas paralelas — ese sería el caso "sin solución".',
        desmosLatex:['3x-6y=12','x-2y=4']
      },
      {
        id:'AL4-03', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Desigualdades en dos variables (verificar un punto)',
        stem:'Which of the following ordered pairs (x, y) is a solution to the inequality y > 3x − 5 ?',
        choices:{A:'(0, 0)', B:'(2, 1)', C:'(1, −3)', D:'(3, 4)'},
        correct:'A',
        expCorrect:'Reemplaza cada punto y verificá. Con (0, 0): 3(0) − 5 = −5, y la desigualdad pide y > −5. Como 0 > −5, el punto cumple ✓.',
        expWrong:{
          B:'(2, 1): 3(2) − 5 = 1, así que hace falta y > 1. Pero y vale exactamente 1, y la desigualdad es ESTRICTA (>, no ≥). El punto está sobre la recta, no arriba.',
          C:'(1, −3): 3(1) − 5 = −2, hace falta y > −2. Pero −3 < −2, así que el punto está debajo de la recta.',
          D:'(3, 4): 3(3) − 5 = 4, hace falta y > 4. y vale exactamente 4: otra vez sobre la recta, no dentro de la región.'
        },
        tip:'Dos opciones de este tipo suelen caer JUSTO sobre la recta. Con > o < no cuentan; con ≥ o ≤ sí. Mirá el símbolo antes de calcular nada — te ahorra descartar mal.',
        desmos:'Escribe y>3x-5 y Desmos sombrea la región. Agregá (0,0), (2,1), (1,-3) y (3,4) y verás cuál cae adentro y cuáles justo en el borde.',
        desmosLatex:['y>3x-5','(0,0)','(2,1)','(3,4)']
      },
      {
        id:'AL4-04', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Rectas paralelas (misma pendiente)',
        stem:'Line k is parallel to the line y = −4x + 7 and passes through the point (2, 1). Which equation represents line k ?',
        choices:{A:'y = −4x + 9', B:'y = −4x + 7', C:'y = (1/4)x + 1/2', D:'y = −4x − 7'},
        correct:'A',
        expCorrect:'Paralelas = misma pendiente, así que m = −4. Usá el punto para hallar b: 1 = −4(2) + b ⇒ 1 = −8 + b ⇒ b = 9. La recta es y = −4x + 9. (Comprueba: −4(2) + 9 = 1 ✓.)',
        expWrong:{
          B:'y = −4x + 7 es la recta ORIGINAL, no una paralela a ella. Y además no pasa por (2, 1): −4(2) + 7 = −1.',
          C:'y = (1/4)x + 1/2 es la PERPENDICULAR por ese punto: usa el recíproco cambiado de signo. Pasa por (2, 1), pero la pregunta pide paralela.',
          D:'y = −4x − 7 tiene la pendiente correcta pero le cambió el signo al intercepto original en vez de calcularlo con el punto. Comprobá: −4(2) − 7 = −15, no 1.'
        },
        tip:'Paralela: misma m. Perpendicular: recíproco Y signo cambiado (−4 → 1/4). El SAT siempre pone la perpendicular entre las opciones, así que subrayá cuál te piden antes de resolver.',
        desmos:'Grafica y=-4x+7, y=-4x+9 y el punto (2,1): las dos rectas nunca se cruzan y la segunda pasa por el punto.',
        desmosLatex:['y=-4x+7','y=-4x+9','(2,1)']
      },
      {
        id:'AL4-05', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Rectas perpendiculares (pendiente recíproca opuesta)',
        stem:'Line m is perpendicular to the line 2x + 3y = 12 in the xy-plane. What is the slope of line m ?',
        choices:{A:'3/2', B:'−2/3', C:'−3/2', D:'2/3'},
        correct:'A',
        expCorrect:'Primero sacá la pendiente de la recta dada despejando y: 3y = −2x + 12 ⇒ y = −(2/3)x + 4, así que su pendiente es −2/3. La perpendicular es el recíproco con el signo cambiado: dar vuelta −2/3 da −3/2, y cambiar el signo da 3/2. (Chequeo: (−2/3)(3/2) = −1 ✓, que es la condición de perpendicularidad.)',
        expWrong:{
          B:'−2/3 es la pendiente de la recta ORIGINAL, no de la perpendicular. Es el paso intermedio.',
          C:'−3/2 dio vuelta la fracción pero se olvidó de cambiar el signo. Comprobalo: (−2/3)(−3/2) = +1, y tendría que dar −1.',
          D:'2/3 cambió el signo pero no dio vuelta la fracción. (−2/3)(2/3) = −4/9, que no es −1.'
        },
        tip:'La condición es que el producto de las pendientes dé **−1**. Es un chequeo de un segundo: multiplicá tu respuesta por la pendiente original y si no da −1, está mal. Y ojo: la ecuación viene en forma general, hay que despejar y antes de leer la pendiente.',
        desmos:'Grafica 2x+3y=12 y y=1.5x: se cruzan en ángulo recto.',
        desmosLatex:['2x+3y=12','y=1.5x']
      },
      {
        id:'AL4-06', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Modelo lineal a partir de dos condiciones',
        stem:'A taxi service charges a flat fee plus a constant rate per mile. A 4-mile ride costs $13.00 and a 9-mile ride costs $25.50. What is the flat fee, in dollars?',
        choices:{A:'$3.00', B:'$2.50', C:'$10.50', D:'$13.00'},
        correct:'A',
        expCorrect:'Dos puntos, (4, 13.00) y (9, 25.50), definen la recta. La tarifa por milla es la pendiente: (25.50 − 13.00)/(9 − 4) = 12.50/5 = $2.50 por milla. El cargo fijo es el intercepto: en el viaje de 4 millas se pagaron 4 × 2.50 = $10.00 de millaje, así que el fijo es 13.00 − 10.00 = **$3.00**. (Comprueba con el otro viaje: 3.00 + 9(2.50) = $25.50 ✓.)',
        expWrong:{
          B:'$2.50 es la tarifa POR MILLA, no el cargo fijo. Es el paso intermedio; falta usarla para despejar el fijo.',
          C:'$10.50 sale de restarle la tarifa por milla una sola vez (13.00 − 2.50). Hay que restarla las 4 veces que se cobró.',
          D:'$13.00 es el costo total del viaje de 4 millas, no el cargo fijo. Incluye el millaje.'
        },
        tip:'"Cargo fijo más tarifa por unidad" es siempre y = mx + b con dos puntos dados. Calculá la pendiente primero, y recién después despejá b con CUALQUIERA de los dos puntos. Comprobá con el otro punto: si los dos dan lo mismo, está bien.',
        desmos:'Escribe (4,13) y (9,25.5), grafica y=2.5x+3 y mirá que pase por los dos puntos. El intercepto en y es el cargo fijo.',
        desmosLatex:['(4,13)','(9,25.5)','y=2.5x+3']
      },
      {
        id:'AL4-07', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Valor absoluto lineal (dos soluciones)',
        stem:'If |2x − 7| = 11, what is the sum of all possible values of x ?',
        choices:{A:'7', B:'9', C:'11', D:'3.5'},
        correct:'A',
        expCorrect:'El valor absoluto abre en DOS casos. Caso 1: 2x − 7 = 11 ⇒ 2x = 18 ⇒ x = 9. Caso 2: 2x − 7 = −11 ⇒ 2x = −4 ⇒ x = −2. La suma es 9 + (−2) = **7**. (Comprueba: |2(9) − 7| = |11| = 11 ✓ y |2(−2) − 7| = |−11| = 11 ✓.)',
        expWrong:{
          B:'9 es solo la primera solución. La ecuación tiene dos y la pregunta pide la SUMA. Olvidar el caso negativo es el error clásico del tema.',
          C:'11 sale de sumar 9 + 2 en vez de 9 + (−2). La segunda solución es negativa: x = −2, no 2.',
          D:'3.5 es el punto medio entre las dos soluciones (el centro de simetría, x = 7/2). Es la mitad de la respuesta: la suma es el doble del centro.'
        },
        tip:'Atajo que sirve siempre: las dos soluciones de |ax + b| = c son simétricas respecto de x = −b/a, así que su suma es 2(−b/a) sin resolver nada. Acá: 2(7/2) = 7. Pero si la usás, comprobá al menos una solución a mano.',
        desmos:'Grafica y=abs(2x-7) y y=11: la V corta a la horizontal en x=-2 y x=9.',
        desmosLatex:['y=\\left|2x-7\\right|','y=11']
      },
      {
        id:'AL4-08', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Ecuaciones lineales con fracciones',
        stem:'If x/3 + x/4 = 14, what is the value of x ?',
        choices:{A:'24', B:'98', C:'2', D:'168'},
        correct:'A',
        expCorrect:'Multiplica TODA la ecuación por 12, el mínimo común denominador: 12(x/3) + 12(x/4) = 12(14) ⇒ 4x + 3x = 168 ⇒ 7x = 168 ⇒ x = 24. (Comprueba: 24/3 + 24/4 = 8 + 6 = 14 ✓.)',
        expWrong:{
          B:'98 sale de sumar los denominadores: x/3 + x/4 NO es x/7. Las fracciones se suman con denominador común, no sumando los de abajo.',
          C:'2 sale de tratar la ecuación como 7x = 14. El 7 aparece recién después de multiplicar por 12, y del otro lado también queda multiplicado.',
          D:'168 es 12 × 14, el paso intermedio. Falta dividir entre 7.'
        },
        tip:'Fracciones en una ecuación: multiplicá todo por el MCD y desaparecen en un paso. El error de sumar denominadores aparece cuando se intenta combinar las fracciones antes de despejar — no hace falta.',
        desmos:'Grafica y=x/3+x/4 y y=14: se cruzan en x=24.',
        desmosLatex:['y=\\frac{x}{3}+\\frac{x}{4}','y=14']
      },
      {
        id:'AL4-09', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Funciones lineales (interpretar la pendiente en contexto)',
        stem:'The equation C = 0.18m + 45 gives the monthly cost C, in dollars, of a phone plan that includes m minutes of international calling. What does 0.18 represent in this model?',
        choices:{
          A:'The cost, in dollars, of each minute of international calling',
          B:'The monthly cost, in dollars, when no international calls are made',
          C:'The number of minutes of international calling included in the plan',
          D:'The total monthly cost, in dollars, of the plan'},
        correct:'A',
        expCorrect:'El 0.18 multiplica a m, o sea que es lo que se suma al costo por CADA minuto: $0.18 por minuto. Es la pendiente, y una pendiente siempre se lee como "cuánto cambia C por cada unidad de m".',
        expWrong:{
          B:'Eso es el 45: el costo cuando m = 0, o sea el cargo fijo del plan. El 0.18 no es un valor inicial, está multiplicando.',
          C:'El 0.18 está en dólares por minuto, no en minutos. Además el modelo cobra por cada minuto: no hay minutos incluidos gratis.',
          D:'El costo total es C, que depende de cuántos minutos se usen. El 0.18 es solo una parte de la fórmula.'
        },
        tip:'En y = mx + b: **m** responde "¿cuánto cambia por cada unidad?" y **b** responde "¿cuánto había al empezar?". Fijate qué número está multiplicando a la variable y la interpretación sale sola.',
        desmos:'Grafica y=0.18x+45 y comparalo con y=0.18x+60: la inclinación es la misma y solo cambia dónde arranca.',
        desmosLatex:['y=0.18x+45','y=0.18x+60']
      },
      {
        id:'AL4-10', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas por eliminación (multiplicando una ecuación)',
        stem:'3x + 4y = 10\n5x + 2y = 12\nThe system of equations above has solution (x, y). What is the value of x ?',
        choices:{A:'2', B:'1', C:'14', D:'7'},
        correct:'A',
        expCorrect:'Los coeficientes de y son 4 y 2: multiplicá la SEGUNDA ecuación por 2 para igualarlos. Queda 10x + 4y = 24. Restá la primera: (10x − 3x) + (4y − 4y) = 24 − 10 ⇒ 7x = 14 ⇒ x = 2. (Comprueba: 3(2) + 4y = 10 ⇒ y = 1, y en la segunda 5(2) + 2(1) = 12 ✓.)',
        expWrong:{
          B:'1 es el valor de y, no de x. El sistema está bien resuelto pero se contestó la otra variable.',
          C:'14 es 7x, el resultado de la resta antes de despejar. Falta dividir entre 7.',
          D:'7 es el coeficiente que quedó al eliminar (el 7 de 7x), no el valor de x.'
        },
        tip:'Elegí eliminar la variable cuyos coeficientes se igualen con la multiplicación más chica: acá 4 y 2 se igualan multiplicando por 2, mientras que 3 y 5 pedirían 15. Y cuidado con restar: los signos de TODOS los términos cambian.',
        desmos:'Grafica 3x+4y=10 y 5x+2y=12 y toca la intersección: (2, 1).',
        desmosLatex:['3x+4y=10','5x+2y=12']
      },
      {
        id:'AL4-11', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Ecuaciones lineales (paréntesis en los dos lados)',
        stem:'If 4(x − 3) = 2(x + 5), what is the value of x? (Grid in your answer.)',
        answer:'11',
        expCorrect:'Distribuye de los dos lados: 4x − 12 = 2x + 10. Junta las x a la izquierda y los números a la derecha: 4x − 2x = 10 + 12 ⇒ 2x = 22 ⇒ x = 11. (Comprueba: 4(11 − 3) = 32 y 2(11 + 5) = 32 ✓.)',
        tip:'Con paréntesis de los dos lados, distribuí ambos ANTES de mover nada. En una SPR no hay opciones que delaten el error, así que reemplazá tu respuesta en la ecuación original: si los dos lados dan el mismo número, terminaste.',
        desmos:'Grafica y=4(x-3) y y=2(x+5): se cruzan en x=11.',
        desmosLatex:['y=4(x-3)','y=2(x+5)']
      },
      {
        id:'AL4-12', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas a partir de un enunciado',
        stem:'At a bakery, 2 muffins and 3 scones cost $16, and 4 muffins and 1 scone cost $22. What is the cost, in dollars, of one muffin?',
        choices:{A:'$5', B:'$2', C:'$8', D:'$5.50'},
        correct:'A',
        expCorrect:'Llamá m al muffin y s al scone: 2m + 3s = 16 y 4m + s = 22. De la segunda, s = 22 − 4m. Sustituí en la primera: 2m + 3(22 − 4m) = 16 ⇒ 2m + 66 − 12m = 16 ⇒ −10m = −50 ⇒ m = **5**. (Entonces s = 22 − 20 = 2. Comprueba: 2(5) + 3(2) = 16 ✓ y 4(5) + 2 = 22 ✓.)',
        expWrong:{
          B:'$2 es el precio del SCONE. El sistema está resuelto bien pero se contestó el otro producto — releé qué pide la pregunta.',
          C:'$8 sale de dividir $16 entre los 2 muffins, ignorando que en ese total también hay 3 scones.',
          D:'$5.50 sale de dividir $22 entre los 4 muffins de la segunda compra, ignorando el scone que también se pagó.'
        },
        tip:'Nombrá las variables antes de escribir nada y armá una ecuación por cada compra. Los dos distractores más tentadores siempre son "dividí un total entre una sola cantidad" — pero cada total incluye los dos productos.',
        desmos:'Grafica 2x+3y=16 y 4x+y=22 (x = muffin, y = scone): se cruzan en (5, 2).',
        desmosLatex:['2x+3y=16','4x+y=22']
      }
    ]
  });
})();
