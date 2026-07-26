/* SAT Studio question set — Math: Algebra 3, núcleo de dificultad media (AL3-01 a AL3-12)
 *
 * Por qué existe: la auditoría del 26-jul-2026 midió las 733 preguntas del banco
 * contra la distribución oficial de College Board (Assessment Framework, tabla 19).
 * Algebra pesa 35 % del examen —el dominio más grande junto con Advanced Math— y
 * en el banco estaba al 0,68× de ese peso. Además doce habilidades tenían UNA sola
 * pregunta, y casi todas eran de acá.
 *
 * Este set cubre las cinco habilidades oficiales del dominio Algebra:
 *   · Linear equations in one variable
 *   · Linear equations in two variables
 *   · Linear functions
 *   · Systems of two linear equations in two variables
 *   · Linear inequalities in one or two variables
 *
 * Nivel Media a propósito: el banco ya tiene 61 % de dificultad alta y solo 13 %
 * de fácil. El primer módulo del SAT es mixto y es el que fija el techo de puntaje,
 * así que hace falta velocidad acá, no solo resistencia en lo difícil.
 */
(function(){
  window.SAT_SETS.push({
    id: 'math-alg3',
    title: 'Math — Algebra 3 (núcleo)',
    section: 'math',
    level: 'Media',
    description: 'Las cinco habilidades del dominio Algebra a dificultad de primer módulo: despeje, pendiente, notación de funciones, sistemas, desigualdades y traducción de enunciados.',
    minutes: 18,
    questions: [
      {
        id:'AL3-01', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Ecuaciones lineales (una variable, con distribución)',
        stem:'If 3(x − 4) = 2x + 7, what is the value of x ?',
        choices:{A:'19', B:'11', C:'−5', D:'19/5'},
        correct:'A',
        expCorrect:'Distribuye primero: 3(x − 4) = 3x − 12. Queda 3x − 12 = 2x + 7. Pasa las x a un lado y los números al otro: 3x − 2x = 7 + 12 ⇒ x = 19. (Comprueba: 3(19 − 4) = 3(15) = 45 y 2(19) + 7 = 45 ✓.)',
        expWrong:{
          B:'11 sale de distribuir mal: 3(x − 4) NO es 3x − 4. El 3 multiplica a los DOS términos del paréntesis, así que el −4 se convierte en −12.',
          C:'−5 es un error de signo al mover el −12: cambia de lado como +12, no como −12. Si te da negativo en una ecuación con todo positivo del otro lado, sospechá.',
          D:'19/5 sale de sumar las x en vez de restarlas: 3x + 2x = 5x. El 2x está del otro lado del igual, así que se resta.'
        },
        tip:'Distribuir SIEMPRE antes de mover términos. El error de multiplicar solo el primer término del paréntesis es el más común de todo el dominio, y siempre hay una opción esperándolo.',
        desmos:'Grafica y=3(x-4) y y=2x+7 y toca donde se cruzan: x = 19.',
        desmosLatex:['y=3(x-4)','y=2x+7']
      },
      {
        id:'AL3-02', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Ecuaciones lineales (dos variables, despeje)',
        stem:'The equation 5x − 2y = 20 relates the quantities x and y. Which of the following expresses y in terms of x ?',
        choices:{A:'y = (5/2)x − 10', B:'y = (5/2)x + 10', C:'y = 10 − (5/2)x', D:'y = (2/5)x − 10'},
        correct:'A',
        expCorrect:'Aísla el término con y: 5x − 2y = 20 ⇒ −2y = 20 − 5x. Ahora divide TODO entre −2: y = 20/(−2) − 5x/(−2) = −10 + (5/2)x, o sea y = (5/2)x − 10. (Comprueba con x = 4: y = 10 − 10 = 0, y en la original 5(4) − 2(0) = 20 ✓.)',
        expWrong:{
          B:'y = (5/2)x + 10 divide entre −2 solo el término con x y deja el 20 con su signo. Al dividir entre un negativo cambian de signo los DOS términos.',
          C:'y = 10 − (5/2)x sale de dividir entre 2 en lugar de entre −2. Los dos signos quedan al revés.',
          D:'y = (2/5)x − 10 invierte el coeficiente. Dividir 5x entre 2 da (5/2)x, no (2/5)x — es una división, no una fracción dada vuelta.'
        },
        tip:'Al despejar, el error caro no es el álgebra: es dividir entre un negativo y aplicarlo a un solo término. Dividí la ecuación entera de una vez y revisá los dos signos.',
        desmos:'Grafica 5x-2y=20 y encima y=2.5x-10: se superponen exactamente. Si graficas una opción incorrecta, verás dos rectas distintas.',
        desmosLatex:['5x-2y=20','y=2.5x-10']
      },
      {
        id:'AL3-03', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Funciones lineales (pendiente entre dos puntos)',
        stem:'Line ℓ in the xy-plane passes through the points (−3, 8) and (5, −4). What is the slope of line ℓ ?',
        choices:{A:'−3/2', B:'3/2', C:'−6', D:'−2/3'},
        correct:'A',
        expCorrect:'Pendiente = (cambio en y)/(cambio en x) = (−4 − 8)/(5 − (−3)) = −12/8 = −3/2. Ojo con el denominador: 5 − (−3) = 5 + 3 = 8. (Tiene sentido: la recta baja de y = 8 a y = −4 mientras x crece, así que la pendiente es negativa.)',
        expWrong:{
          B:'3/2 tiene el signo cambiado. Si y BAJA cuando x sube, la pendiente es negativa. Un vistazo a los puntos te lo dice antes de calcular.',
          C:'−6 sale de restar mal el denominador: 5 − 3 = 2 en vez de 5 − (−3) = 8. Restar un negativo suma.',
          D:'−2/3 es la pendiente dada vuelta: pusiste el cambio en x arriba. La fórmula es Δy sobre Δx, en ese orden.'
        },
        tip:'Antes de calcular, mirá si la recta sube o baja y quedate con el signo. Después, la única trampa real es el doble negativo del denominador.',
        desmos:'Escribe (-3,8) y (5,-4) para ver los puntos, y y=-1.5x+3.5 para confirmar que la recta pasa por ambos.',
        desmosLatex:['(-3,8)','(5,-4)','y=-1.5x+3.5']
      },
      {
        id:'AL3-04', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Notación de funciones (evaluar en un negativo)',
        stem:'The function f is defined by f(x) = 4 − 3x. What is the value of f(−2) ?',
        choices:{A:'10', B:'−2', C:'2', D:'−10'},
        correct:'A',
        expCorrect:'Reemplaza x por −2 con paréntesis: f(−2) = 4 − 3(−2) = 4 − (−6) = 4 + 6 = 10. El −3 por el −2 da +6, y ese positivo se SUMA al 4.',
        expWrong:{
          B:'−2 sale de calcular 4 − 6: se perdió el signo del −2 al multiplicar. −3 × (−2) = +6, no −6.',
          C:'2 sale de manejar mal los dos negativos: da 4 − 6 y después se le cambia el signo al resultado. Hacé una operación por vez.',
          D:'−10 tiene el signo final invertido. El valor absoluto está bien, así que el error fue al final; reemplazá con paréntesis y no se pierde.'
        },
        tip:'Escribí SIEMPRE el paréntesis al reemplazar: f(−2) = 4 − 3(−2). La mitad de los errores de notación de funciones son un signo que se evapora por no ponerlo.',
        desmos:'Grafica y=4-3x y escribe (-2,10): el punto cae justo sobre la recta.',
        desmosLatex:['y=4-3x','(-2,10)']
      },
      {
        id:'AL3-05', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas de dos ecuaciones lineales (eliminación)',
        stem:'2x + 3y = 16\nx − 3y = 2\nThe system of equations above has solution (x, y). What is the value of x ?',
        choices:{A:'6', B:'4/3', C:'18', D:'2'},
        correct:'A',
        expCorrect:'Los términos en y ya son opuestos (+3y y −3y), así que SUMA las ecuaciones: (2x + x) + (3y − 3y) = 16 + 2 ⇒ 3x = 18 ⇒ x = 6. (Comprueba: si x = 6, de la segunda 6 − 3y = 2 ⇒ y = 4/3, y en la primera 12 + 4 = 16 ✓.)',
        expWrong:{
          B:'4/3 es el valor de y, no de x. Resolviste bien y contestaste la otra variable — leé qué pide la pregunta antes de marcar.',
          C:'18 es 3x, el paso intermedio. Falta dividir entre 3. Esta opción está puesta exactamente para el que se detiene un paso antes.',
          D:'2 es el lado derecho de la segunda ecuación, no el valor de x. x − 3y = 2 no significa x = 2.'
        },
        tip:'Antes de despejar nada, mirá si los coeficientes de una variable ya son opuestos. Si lo son, sumar las ecuaciones resuelve el sistema en un renglón.',
        desmos:'Grafica 2x+3y=16 y x-3y=2 y toca la intersección: (6, 1.333).',
        desmosLatex:['2x+3y=16','x-3y=2']
      },
      {
        id:'AL3-06', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Ecuaciones lineales (traducción de palabras)',
        stem:'A gym charges a one-time registration fee of $40 plus $25 for each month of membership. Which equation gives the total cost C, in dollars, for m months of membership?',
        choices:{A:'C = 25m + 40', B:'C = 40m + 25', C:'C = 65m', D:'C = 25(m + 40)'},
        correct:'A',
        expCorrect:'Lo que se repite cada mes multiplica a m: son $25 por mes, así que 25m. Lo que se paga una sola vez es constante: +40. Total: C = 25m + 40. (Comprueba con 3 meses: 25(3) + 40 = $115.)',
        expWrong:{
          B:'C = 40m + 25 intercambia los papeles: cobraría $40 cada mes y $25 una sola vez. Es al revés de lo que dice el enunciado.',
          C:'C = 65m suma las dos cifras y las cobra todos los meses. La inscripción es de una sola vez; no se puede meter en la tasa mensual.',
          D:'C = 25(m + 40) multiplica la inscripción por la tasa mensual. Con 3 meses daría $1 075 — un absurdo que se detecta probando un número.'
        },
        tip:'Regla fija: lo que dice "por mes", "por hora" o "cada" va multiplicando a la variable; lo que dice "una sola vez", "inicial" o "de inscripción" va sumando aparte. Probá un valor chico y descartá los absurdos.',
        desmos:'Grafica y=25x+40 y las tres opciones incorrectas: se ve de inmediato cuál arranca en 40 y sube de a 25.',
        desmosLatex:['y=25x+40','y=40x+25','y=65x']
      },
      {
        id:'AL3-07', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Ecuaciones lineales (modelo decreciente en contexto)',
        stem:'A tank contains 500 liters of water and is being drained at a constant rate of 10 liters per minute. After how many minutes will the tank contain 260 liters?',
        choices:{A:'24', B:'240', C:'50', D:'76'},
        correct:'A',
        expCorrect:'La cantidad que queda es 500 − 10t, donde t son los minutos. Plantea 500 − 10t = 260 ⇒ 10t = 240 ⇒ t = 24 minutos. (Comprueba: en 24 minutos salen 240 litros y quedan 260 ✓.)',
        expWrong:{
          B:'240 son los LITROS que se vaciaron, no los minutos. Es el paso intermedio; falta dividir entre la tasa de 10 L/min.',
          C:'50 es cuánto tarda en vaciarse el tanque ENTERO (500/10). La pregunta no pide vaciarlo, pide llegar a 260 litros.',
          D:'76 sale de sumar en vez de restar: (500 + 260)/10. Si el tanque se está vaciando, la cantidad restante disminuye.'
        },
        tip:'En modelos que bajan, escribí primero la expresión de lo que QUEDA (inicial − tasa × tiempo) y recién después igualá. Y revisá qué unidad pide la respuesta: litros y minutos están los dos entre las opciones.',
        desmos:'Grafica y=500-10x y y=260, y toca la intersección: x = 24.',
        desmosLatex:['y=500-10x','y=260']
      },
      {
        id:'AL3-08', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Desigualdades lineales (invertir el signo)',
        stem:'Which of the following is the solution to the inequality −4x + 9 ≥ 25 ?',
        choices:{A:'x ≤ −4', B:'x ≥ −4', C:'x ≤ 4', D:'x ≥ 4'},
        correct:'A',
        expCorrect:'−4x + 9 ≥ 25 ⇒ −4x ≥ 16. Al dividir entre −4, que es negativo, la desigualdad se INVIERTE: x ≤ −4. (Comprueba con x = −5: −4(−5) + 9 = 29 ≥ 25 ✓. Y con x = 0: 9 ≥ 25 es falso, así que el 0 queda afuera, como debe ser.)',
        expWrong:{
          B:'x ≥ −4 olvida invertir el signo al dividir entre −4. Probá x = 0: cumple x ≥ −4 pero da 9 ≥ 25, que es falso.',
          C:'x ≤ 4 pierde el signo del −4 al dividir. Probá x = 0: cumple x ≤ 4 y no satisface la desigualdad.',
          D:'x ≥ 4 tiene los dos errores juntos: ni el signo del número ni la inversión del símbolo.'
        },
        tip:'Multiplicar o dividir por un negativo DA VUELTA el símbolo. Y siempre hay un chequeo gratis: probá x = 0 en la desigualdad original y descartá toda opción que lo incluya o lo excluya al revés.',
        desmos:'Escribe -4x+9>=25 y Desmos te sombrea la región: todo lo que está a la izquierda de -4.',
        desmosLatex:['-4x+9\\ge 25']
      },
      {
        id:'AL3-09', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Expresiones equivalentes (producto de binomios)',
        stem:'Which expression is equivalent to (2x − 5)(3x + 4) ?',
        choices:{A:'6x² − 7x − 20', B:'6x² + 7x − 20', C:'6x² − 7x + 20', D:'6x² − 20'},
        correct:'A',
        expCorrect:'Multiplica cada término por cada término: (2x)(3x) = 6x², (2x)(4) = 8x, (−5)(3x) = −15x, (−5)(4) = −20. Los del medio se juntan: 8x − 15x = −7x. Queda 6x² − 7x − 20. (Comprueba con x = 1: (2−5)(3+4) = −21, y 6 − 7 − 20 = −21 ✓.)',
        expWrong:{
          B:'6x² + 7x − 20 suma mal los términos del medio: 8x − 15x = −7x, no +7x. El −15x pesa más que el +8x.',
          C:'6x² − 7x + 20 se equivoca en el último producto: (−5)(4) = −20, no +20. Solo dos negativos dan positivo.',
          D:'6x² − 20 multiplica únicamente el primero por el primero y el último por el último. Faltan los dos productos cruzados, que son los que generan el término en x.'
        },
        tip:'Después de expandir, comprobá con x = 1: la suma de los coeficientes del resultado tiene que dar lo mismo que el producto de los paréntesis evaluados en 1. Cuesta cinco segundos y caza cualquier error de signo.',
        desmos:'Grafica y=(2x-5)(3x+4) y y=6x^2-7x-20: se superponen. Con una opción incorrecta verás dos curvas.',
        desmosLatex:['y=(2x-5)(3x+4)','y=6x^2-7x-20']
      },
      {
        id:'AL3-10', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Funciones lineales (interpretar el intercepto en contexto)',
        stem:'The equation y = 3.5x + 18 models the height y, in centimeters, of a plant x weeks after it was planted. What does 18 represent in this model?',
        choices:{
          A:'The height of the plant, in centimeters, at the time it was planted',
          B:'The number of centimeters the plant grows each week',
          C:'The height of the plant, in centimeters, after 18 weeks',
          D:'The number of weeks it takes the plant to reach its full height'},
        correct:'A',
        expCorrect:'El 18 es el término constante, o sea el valor de y cuando x = 0: y = 3.5(0) + 18 = 18. Como x son las semanas desde que se plantó, x = 0 es el momento de plantarla. Así que la planta medía 18 cm al plantarse.',
        expWrong:{
          B:'Ese es el 3.5, no el 18: el número que multiplica a x es la tasa de crecimiento semanal. El 18 no está multiplicando a nada.',
          C:'Después de 18 semanas la altura sería 3.5(18) + 18 = 81 cm. El 18 aparece en el modelo, pero no como una altura futura.',
          D:'El modelo es una recta que crece para siempre; no tiene altura máxima ni un momento en que se detenga. Nada en la ecuación representa eso.'
        },
        tip:'En y = mx + b: b es "cuánto había al empezar" y m es "cuánto cambia por unidad". Poné x = 0 mentalmente y el intercepto se interpreta solo.',
        desmos:'Grafica y=3.5x+18 y mirá dónde corta el eje y: en 18, justo en x=0.',
        desmosLatex:['y=3.5x+18','(0,18)']
      },
      {
        id:'AL3-11', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Ecuaciones lineales (una variable, con paréntesis)',
        stem:'If 7(x + 2) − 3x = 46, what is the value of x? (Grid in your answer.)',
        answer:'8',
        expCorrect:'Distribuye: 7x + 14 − 3x = 46. Junta las x: 4x + 14 = 46 ⇒ 4x = 32 ⇒ x = 8. (Comprueba: 7(8 + 2) − 3(8) = 70 − 24 = 46 ✓.)',
        tip:'En las SPR no hay opciones donde detectar el error, así que la comprobación no es opcional: reemplazá tu respuesta en la ecuación original antes de escribirla. Son una de cada cuatro preguntas de la sección.',
        desmos:'Grafica y=7(x+2)-3x y y=46, y toca la intersección: x = 8.',
        desmosLatex:['y=7(x+2)-3x','y=46']
      },
      {
        id:'AL3-12', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas sin solución (rectas paralelas)',
        stem:'4x + 6y = 12\n2x + ky = 5\nIn the system of equations above, k is a constant. If the system has no solution, what is the value of k ?',
        choices:{A:'3', B:'6', C:'2', D:'12'},
        correct:'A',
        expCorrect:'Sin solución significa rectas PARALELAS: mismos coeficientes proporcionales, pero constante que no encaja. Divide la primera entre 2: 2x + 3y = 6. Para que la segunda sea paralela necesita el mismo lado izquierdo, así que k = 3. Queda 2x + 3y = 6 contra 2x + 3y = 5: dos rectas paralelas que nunca se cruzan ✓ (y como 6 ≠ 5, no son la misma recta, que daría infinitas soluciones).',
        expWrong:{
          B:'6 copia el coeficiente de la primera ecuación sin ajustar la escala. Los coeficientes de x son 4 y 2, o sea que la segunda ecuación está a la mitad: el 6 también tiene que dividirse.',
          C:'2 copia el coeficiente de x en vez de calcular el de y. Son posiciones distintas de la ecuación.',
          D:'12 multiplica por 2 en vez de dividir. El factor va de la primera a la segunda, y la segunda es la más chica.'
        },
        tip:'"Sin solución" = paralelas = misma pendiente y distinto intercepto. Llevá las dos ecuaciones a la misma escala en x y leé qué debe valer la otra letra. Si además las constantes coincidieran, serían la MISMA recta e infinitas soluciones — es la otra mitad de esta pregunta y el SAT la usa igual de seguido.',
        desmos:'Grafica 4x+6y=12 y 2x+3y=5: son paralelas y nunca se tocan. Cambiá el 3 por otro número y verás que se cruzan.',
        desmosLatex:['4x+6y=12','2x+3y=5']
      }
    ]
  });
})();
