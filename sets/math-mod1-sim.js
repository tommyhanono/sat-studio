/* SAT Studio — Math: Simulacro del MÓDULO 1 (M1-01 a M1-22)
 *
 * El set que faltaba. Auditoría del 26-jul-2026: el banco entero está calibrado
 * para el segundo módulo difícil (59 % de dificultad alta, 11 % fácil) y **no
 * existía nada que se pareciera al primero**.
 *
 * Por qué importa: el Digital SAT es adaptativo POR MÓDULO. El primero trae una
 * mezcla amplia y su resultado decide si el segundo es la versión difícil o la
 * fácil — o sea que **fija el techo de puntaje** al que se puede aspirar en la
 * sección. Entrenar solo en dificultad máxima construye resistencia pero no
 * VELOCIDAD en las preguntas fáciles, que son las que hay que despachar rápido
 * para que sobre tiempo.
 *
 * Composición, calcada de las especificaciones oficiales (Assessment Framework,
 * tabla 19, p. 85) para un módulo de 22 preguntas:
 *
 *   Dominio                            este set   oficial
 *   Algebra                              8 (36%)    ≈35 %
 *   Advanced Math                        8 (36%)    ≈35 %
 *   Problem-Solving and Data Analysis    3 (14%)    ≈15 %
 *   Geometry and Trigonometry            3 (14%)    ≈15 %
 *   SPR (respuesta propia)               5 (23%)    ≈25 %
 *
 * Dificultad 5 Fácil / 13 Media / 4 Difícil: la mezcla amplia de un módulo 1
 * real, no la del segundo.
 *
 * Se usa CON RELOJ. 22 preguntas en 35 minutos son ~95 segundos cada una.
 */
(function(){
  window.SAT_SETS.push({
    id: 'math-mod1-sim',
    title: 'Math — Simulacro Módulo 1 (con reloj)',
    section: 'math',
    level: 'Media',
    description: 'Módulo 1 completo con la mezcla oficial de dominios, formatos y dificultad. 22 preguntas en 35 minutos: el módulo que decide tu techo de puntaje.',
    minutes: 35,
    questions: [
      // ---------------- ALGEBRA (8) ----------------
      {
        id:'M1-01', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Ecuaciones lineales (una variable)',
        stem:'If 6x − 9 = 27, what is the value of x ?',
        choices:{A:'6', B:'3', C:'4.5', D:'36'},
        correct:'A',
        expCorrect:'Suma 9 de los dos lados: 6x = 36. Divide entre 6: x = 6. (Comprueba: 6(6) − 9 = 27 ✓.)',
        expWrong:{
          B:'3 sale de restar el 9 en vez de sumarlo: 27 − 9 = 18 y 18/6 = 3. El −9 pasa del otro lado como +9.',
          C:'4.5 es 27/6: se ignoró el −9 por completo.',
          D:'36 es el valor de 6x, no de x. Falta el último paso, dividir entre 6.'
        },
        tip:'Una de arranque: no la pienses, hacela. En el módulo 1 estas valen lo mismo que las difíciles y tienen que salir en 30 segundos para que sobre tiempo al final.',
        desmos:'y=6x-9 y y=27 se cruzan en x=6.',
        desmosLatex:['y=6x-9','y=27']
      },
      {
        id:'M1-02', type:'mc', domain:'Algebra', difficulty:'Fácil',
        skill:'Notación de funciones (evaluar)',
        stem:'The function g is defined by g(x) = 5x + 2. What is the value of g(4) ?',
        choices:{A:'22', B:'20', C:'30', D:'7'},
        correct:'A',
        expCorrect:'Reemplaza x por 4: g(4) = 5(4) + 2 = 20 + 2 = 22.',
        expWrong:{
          B:'20 es solo 5(4): falta sumar el 2.',
          C:'30 sale de sumar antes de multiplicar, 5(4 + 2). El 2 está fuera del paréntesis.',
          D:'7 es 5 + 2: se ignoró que el 5 multiplica a x.'
        },
        tip:'Evaluar una función es reemplazar y calcular, nada más. Respetá el orden de operaciones: primero la multiplicación, después la suma.',
        desmos:'Grafica y=5x+2 y escribe (4,22): el punto cae sobre la recta.',
        desmosLatex:['y=5x+2','(4,22)']
      },
      {
        id:'M1-03', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Funciones lineales (pendiente entre dos puntos)',
        stem:'What is the slope of the line that passes through the points (1, −2) and (5, 10) ?',
        choices:{A:'3', B:'2', C:'1/3', D:'−3'},
        correct:'A',
        expCorrect:'Pendiente = (10 − (−2))/(5 − 1) = 12/4 = 3. Ojo con el numerador: restar −2 SUMA 2.',
        expWrong:{
          B:'2 sale de calcular 10 − 2 = 8 en el numerador. El punto tiene y = −2, así que es 10 − (−2) = 12.',
          C:'1/3 es la fracción dada vuelta: pusiste el cambio en x arriba. Es Δy sobre Δx.',
          D:'−3 tiene el signo cambiado. Si y sube de −2 a 10 mientras x crece, la pendiente es positiva.'
        },
        tip:'El doble negativo del numerador o del denominador es el único error real de esta pregunta. Escribí la resta con paréntesis y no se pierde.',
        desmos:'Escribe (1,-2) y (5,10), y grafica y=3x-5 para confirmar que pasa por los dos.',
        desmosLatex:['(1,-2)','(5,10)','y=3x-5']
      },
      {
        id:'M1-04', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Sistemas de dos ecuaciones (eliminación directa)',
        stem:'x + y = 12\nx − y = 4\nThe system above has solution (x, y). What is the value of x ?',
        choices:{A:'8', B:'4', C:'16', D:'12'},
        correct:'A',
        expCorrect:'Los términos en y son opuestos: sumá las ecuaciones y desaparece. 2x = 16 ⇒ x = 8. (Entonces y = 4. Comprueba: 8 + 4 = 12 ✓ y 8 − 4 = 4 ✓.)',
        expWrong:{
          B:'4 es el valor de y, no de x. También es el lado derecho de la segunda ecuación — doble trampa.',
          C:'16 es 2x, el paso intermedio. Falta dividir entre 2.',
          D:'12 es el lado derecho de la primera ecuación, no una solución.'
        },
        tip:'Cuando los coeficientes ya son opuestos, sumar resuelve en un renglón. Es de las más rápidas del módulo: no la resuelvas por sustitución.',
        desmos:'x+y=12 y x-y=4 se cruzan en (8,4).',
        desmosLatex:['x+y=12','x-y=4']
      },
      {
        id:'M1-05', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Desigualdades lineales (una variable)',
        stem:'Which of the following is equivalent to 3x + 7 < 22 ?',
        choices:{A:'x < 5', B:'x > 5', C:'x < 15', D:'x < 29/3'},
        correct:'A',
        expCorrect:'Restá 7: 3x < 15. Dividí entre 3, que es POSITIVO, así que el signo NO se invierte: x < 5. (Comprueba con x = 0: 7 < 22 ✓, y 0 < 5 ✓.)',
        expWrong:{
          B:'x > 5 invierte el signo sin motivo. El símbolo solo se da vuelta al multiplicar o dividir por un NEGATIVO, y acá se dividió entre +3.',
          C:'x < 15 se olvidó de dividir entre 3. Es el paso intermedio.',
          D:'x < 29/3 sumó el 7 en vez de restarlo: (22 + 7)/3.'
        },
        tip:'La regla de invertir el signo solo aplica con negativos. Acá no hay ninguno, y esa opción está puesta para el que la aplica de memoria sin mirar.',
        desmos:'Escribe 3x+7<22 y Desmos sombrea todo lo que está a la izquierda de 5.',
        desmosLatex:['3x+7<22']
      },
      {
        id:'M1-06', type:'mc', domain:'Algebra', difficulty:'Media',
        skill:'Modelo lineal en contexto (despejar el tiempo)',
        stem:'A plumber charges $75 for a house visit plus $45 for each hour of work. If a job cost $255 in total, how many hours did the plumber work?',
        choices:{A:'4', B:'5.67', C:'7.33', D:'180'},
        correct:'A',
        expCorrect:'El costo es 75 + 45h. Igualá a 255: 45h = 255 − 75 = 180 ⇒ h = 180/45 = 4 horas. (Comprueba: 75 + 45(4) = 255 ✓.)',
        expWrong:{
          B:'5.67 es 255/45: se dividió el total sin descontar antes la visita de $75.',
          C:'7.33 es (255 + 75)/45: se sumó el cargo de visita en vez de restarlo. La visita es parte del total, no algo aparte.',
          D:'180 son los DÓLARES de mano de obra, no las horas. Es el paso intermedio; falta dividir entre la tarifa.'
        },
        tip:'Cargo fijo + tarifa por hora: restá SIEMPRE el fijo antes de dividir. Y fijate en la unidad que pide la respuesta — dólares y horas están las dos entre las opciones.',
        desmos:'y=75+45x y y=255 se cruzan en x=4.',
        desmosLatex:['y=75+45x','y=255']
      },
      {
        id:'M1-07', type:'spr', domain:'Algebra', difficulty:'Media',
        skill:'Ecuaciones lineales (variable en los dos lados)',
        stem:'If 2(x + 6) = 5x − 3, what is the value of x? (Grid in your answer.)',
        answer:'5',
        expCorrect:'Distribuye: 2x + 12 = 5x − 3. Pasá las x a un lado y los números al otro: 12 + 3 = 5x − 2x ⇒ 15 = 3x ⇒ x = 5. (Comprueba: 2(5 + 6) = 22 y 5(5) − 3 = 22 ✓.)',
        tip:'Mové las x hacia el lado donde queden POSITIVAS (acá, hacia la derecha): te ahorra un signo negativo y un error. En SPR comprobá siempre reemplazando.',
        desmos:'y=2(x+6) y y=5x-3 se cruzan en x=5.',
        desmosLatex:['y=2(x+6)','y=5x-3']
      },
      {
        id:'M1-08', type:'mc', domain:'Algebra', difficulty:'Difícil',
        skill:'Sistemas sin solución (rectas paralelas)',
        stem:'6x + ky = 10\n3x + 4y = 7\nIn the system above, k is a constant. If the system has no solution, what is the value of k ?',
        choices:{A:'8', B:'4', C:'2', D:'14'},
        correct:'A',
        expCorrect:'Sin solución = rectas PARALELAS: mismo lado izquierdo, distinta constante. Multiplicá la segunda ecuación por 2 para igualar los términos en x: 6x + 8y = 14. Comparando con 6x + ky = 10, hace falta k = 8. Y como 10 ≠ 14, no son la misma recta: efectivamente no hay solución ✓.',
        expWrong:{
          B:'4 copia el coeficiente de la segunda ecuación sin escalarla. Los términos en x son 6 y 3, así que la segunda hay que duplicarla entera.',
          C:'2 es el factor de escala (de 3x a 6x), no el coeficiente que buscás.',
          D:'14 es la constante que queda al escalar la segunda ecuación, no el coeficiente de y.'
        },
        tip:'"Sin solución" = paralelas. "Infinitas soluciones" = la misma recta. Es el mismo cálculo; lo único que cambia es si la constante coincide o no. El SAT pregunta las dos versiones por igual.',
        desmos:'Grafica 6x+8y=10 y 3x+4y=7: paralelas, nunca se tocan.',
        desmosLatex:['6x+8y=10','3x+4y=7']
      },

      // ---------------- ADVANCED MATH (8) ----------------
      {
        id:'M1-09', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Evaluar una función cuadrática en un negativo',
        stem:'If f(x) = x² − 3x, what is the value of f(−2) ?',
        choices:{A:'10', B:'−2', C:'2', D:'−10'},
        correct:'A',
        expCorrect:'f(−2) = (−2)² − 3(−2) = 4 − (−6) = 4 + 6 = 10. Los dos signos importan: el cuadrado de un negativo es positivo, y restar −6 suma.',
        expWrong:{
          B:'−2 sale de calcular 4 − 6: se perdió el signo al multiplicar −3 por −2, que da +6.',
          C:'2 sale de escribir (−2)² como −4. El cuadrado de un negativo es POSITIVO.',
          D:'−10 tiene el signo final invertido; el valor absoluto está bien, así que el error fue al cerrar.'
        },
        tip:'Reemplazá con paréntesis: (−2)² − 3(−2). Casi todos los errores de este tipo son un signo que se evapora por no escribirlos.',
        desmos:'Grafica y=x^2-3x y escribe (-2,10).',
        desmosLatex:['y=x^2-3x','(-2,10)']
      },
      {
        id:'M1-10', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Cuadráticas (ceros por factorización)',
        stem:'What are the solutions to the equation x² − 5x − 14 = 0 ?',
        choices:{A:'x = 7 and x = −2', B:'x = −7 and x = 2', C:'x = 7 and x = 2', D:'x = −7 and x = −2'},
        correct:'A',
        expCorrect:'Buscá dos números que multiplicados den −14 y sumados den −5: son −7 y +2. Entonces x² − 5x − 14 = (x − 7)(x + 2), y las soluciones son x = 7 y x = −2. (Comprueba x = 7: 49 − 35 − 14 = 0 ✓.)',
        expWrong:{
          B:'x = −7 y x = 2 son los signos al revés. Con esos valores: (−7)² − 5(−7) − 14 = 49 + 35 − 14 = 70, no 0.',
          C:'x = 7 y x = 2 dan producto +14, pero el término independiente es −14: las soluciones tienen signos OPUESTOS.',
          D:'x = −7 y x = −2 dan producto +14 y suma −9. Ni el producto ni la suma coinciden.'
        },
        tip:'Chequeo de dos segundos: la suma de las soluciones tiene que dar −b (=5) y el producto c (=−14). 7 + (−2) = 5 ✓ y 7(−2) = −14 ✓. Descarta tres opciones sin factorizar.',
        desmos:'Grafica y=x^2-5x-14 y mirá dónde corta el eje x: en -2 y en 7.',
        desmosLatex:['y=x^2-5x-14']
      },
      {
        id:'M1-11', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'Crecimiento exponencial (duplicación)',
        stem:'A population of bacteria doubles every 3 hours. If there are 500 bacteria at time 0, how many bacteria are there after 9 hours? (Grid in your answer.)',
        answer:'4000',
        expCorrect:'En 9 horas hay 9/3 = 3 duplicaciones. Cada una multiplica por 2, así que el total es 500 × 2³ = 500 × 8 = 4000. (Paso a paso: 500 → 1000 → 2000 → 4000.)',
        tip:'Contá DUPLICACIONES, no horas. El error clásico es multiplicar por 2 una vez por hora (que daría 500 × 2⁹) o multiplicar por 9. Con números chicos conviene ir duplicando a mano: es más rápido que la fórmula y no se presta a confusión.',
        desmos:'Grafica y=500*2^(x/3) y evaluá en x=9: da 4000.',
        desmosLatex:['y=500\\cdot 2^{\\frac{x}{3}}','500\\cdot 2^{3}']
      },
      {
        id:'M1-12', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Expresiones equivalentes (cuadrado de un binomio)',
        stem:'Which expression is equivalent to (3x + 2)² ?',
        choices:{A:'9x² + 12x + 4', B:'9x² + 6x + 4', C:'9x² + 4', D:'6x² + 12x + 4'},
        correct:'A',
        expCorrect:'(3x + 2)² = (3x + 2)(3x + 2) = 9x² + 6x + 6x + 4 = 9x² + 12x + 4. El término del medio es 2·(3x)·(2) = 12x. (Comprueba con x = 1: (3 + 2)² = 25, y 9 + 12 + 4 = 25 ✓.)',
        expWrong:{
          B:'9x² + 6x + 4 usa 3·2 = 6 para el término del medio, pero hay que DUPLICARLO: los dos productos cruzados son iguales, 6x + 6x = 12x.',
          C:'9x² + 4 eleva al cuadrado cada término por separado. (a + b)² NO es a² + b²: falta todo el término del medio.',
          D:'6x² + 12x + 4 calcula (3x)² como 6x². Elevar al cuadrado es multiplicar por sí mismo, no por 2: 3² = 9.'
        },
        tip:'Comprobá con x = 1: la suma de los coeficientes tiene que dar el valor del paréntesis al cuadrado. Cinco segundos y caza los cuatro errores posibles.',
        desmos:'Grafica y=(3x+2)^2 y y=9x^2+12x+4: se superponen.',
        desmosLatex:['y=(3x+2)^2','y=9x^2+12x+4']
      },
      {
        id:'M1-13', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Cuadráticas (vértice / valor mínimo)',
        stem:'The function f is defined by f(x) = x² − 8x + 3. What is the x-coordinate of the minimum value of f ?',
        choices:{A:'4', B:'−4', C:'8', D:'3'},
        correct:'A',
        expCorrect:'El vértice de una parábola está en x = −b/(2a). Acá a = 1 y b = −8, así que x = −(−8)/(2·1) = 8/2 = 4. Como a > 0 la parábola abre hacia arriba y ese vértice es el MÍNIMO. (Completando el cuadrado: x² − 8x + 3 = (x − 4)² − 13, mínimo en x = 4.)',
        expWrong:{
          B:'−4 se olvidó del signo menos de la fórmula: b ya vale −8, así que −b es +8.',
          C:'8 es el valor de −b, sin dividir entre 2a.',
          D:'3 es el término independiente, que mueve la parábola verticalmente. No afecta dónde está el vértice.'
        },
        tip:'x = −b/(2a) sale gratis y responde media docena de tipos de pregunta: vértice, eje de simetría, máximo, mínimo. Memorizá que **b entra con su propio signo**.',
        desmos:'Grafica y=x^2-8x+3 y tocá el punto más bajo: (4, -13).',
        desmosLatex:['y=x^2-8x+3','(4,-13)']
      },
      {
        id:'M1-14', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Cuadráticas (resolver con condición)',
        stem:'If x² + 6x = 16 and x > 0, what is the value of x? (Grid in your answer.)',
        answer:'2',
        expCorrect:'Pasá todo a un lado: x² + 6x − 16 = 0. Factorizá buscando dos números que den producto −16 y suma +6: son +8 y −2, así que (x + 8)(x − 2) = 0 y las soluciones son x = −8 y x = 2. La condición x > 0 deja **x = 2**. (Comprueba: 4 + 12 = 16 ✓.)',
        tip:'La condición «x > 0» está ahí porque hay DOS soluciones y la SPR admite una sola. Cuando veas una restricción así, resolvé completo y recién al final descartá — no asumas cuál es antes de tenerlas.',
        desmos:'Grafica y=x^2+6x y y=16: se cruzan en x=-8 y x=2.',
        desmosLatex:['y=x^2+6x','y=16']
      },
      {
        id:'M1-15', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Resolver una ecuación con función cuadrática',
        stem:'The function h is defined by h(x) = 2x² + 1. For what positive value of x does h(x) = 19 ?',
        choices:{A:'3', B:'9', C:'√10', D:'8.5'},
        correct:'A',
        expCorrect:'Igualá y despejá: 2x² + 1 = 19 ⇒ 2x² = 18 ⇒ x² = 9 ⇒ x = 3 (se pide el positivo). Comprueba: 2(9) + 1 = 19 ✓.',
        expWrong:{
          B:'9 es el valor de x², no de x. Falta la raíz cuadrada — el último paso.',
          C:'√10 sale de sumar el 1 en vez de restarlo: (19 + 1)/2 = 10. El +1 pasa del otro lado como −1.',
          D:'8.5 sale de dividir antes de restar: 19/2 − 1. Hay que despejar el término con x² primero.'
        },
        tip:'Despejá en orden inverso a como se construye: primero lo que está sumado, después lo que multiplica, y al final la potencia. La opción "x²" siempre está entre las respuestas.',
        desmos:'Grafica y=2x^2+1 y y=19: se cruzan en x=-3 y x=3.',
        desmosLatex:['y=2x^2+1','y=19']
      },
      {
        id:'M1-16', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Ecuaciones racionales',
        stem:'If 12/(x − 2) = 4, what is the value of x ?',
        choices:{A:'5', B:'3', C:'1', D:'48'},
        correct:'A',
        expCorrect:'Multiplicá los dos lados por (x − 2): 12 = 4(x − 2) ⇒ 12 = 4x − 8 ⇒ 4x = 20 ⇒ x = 5. (Comprueba: 12/(5 − 2) = 12/3 = 4 ✓. Y x = 5 no anula el denominador, así que es válida.)',
        expWrong:{
          B:'3 es el valor de x − 2, no de x. Es correcto que x − 2 = 3, pero falta sumarle 2.',
          C:'1 sale de restar 2 en vez de sumarlo después de hallar x − 2 = 3.',
          D:'48 es 12 × 4: se multiplicó cuando había que dividir. Si 12 dividido algo da 4, ese algo es 3, no 48.'
        },
        tip:'En una ecuación racional, mirá el denominador ANTES de operar: cualquier solución que lo anule (acá x = 2) hay que descartarla. Y comprobá siempre reemplazando, que es lo que delata el error de "un paso antes".',
        desmos:'Grafica y=12/(x-2) y y=4: se cruzan en x=5.',
        desmosLatex:['y=\\frac{12}{x-2}','y=4']
      },

      // ---------------- PROBLEM-SOLVING AND DATA ANALYSIS (3) ----------------
      {
        id:'M1-17', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Porcentajes (descuento)',
        stem:'A jacket originally priced at $80 is on sale for 25% off. What is the sale price of the jacket?',
        choices:{A:'$60', B:'$20', C:'$55', D:'$100'},
        correct:'A',
        expCorrect:'Descontar 25 % es pagar el 75 %: 0.75 × 80 = $60. (O bien: el descuento es 0.25 × 80 = $20, y 80 − 20 = $60.)',
        expWrong:{
          B:'$20 es el DESCUENTO, no el precio final. Falta restárselo a los $80.',
          C:'$55 resta 25 dólares en vez de 25 por ciento. El porcentaje se calcula sobre el precio, no se resta directo.',
          D:'$100 suma el 25 % en vez de restarlo. "Off" significa descuento.'
        },
        tip:'Atajo que ahorra un paso: para descontar 25 %, multiplicá por 0.75 directo. Sirve para cualquier porcentaje — y evita el error de quedarse con el descuento en vez del precio.',
        desmos:'Escribí 0.75*80 y Desmos te da 60 al toque.',
        desmosLatex:['0.75\\cdot 80']
      },
      {
        id:'M1-18', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Proporciones y razones',
        stem:'A recipe requires 3 cups of flour for every 4 cups of milk. If a baker uses 15 cups of flour, how many cups of milk are needed?',
        choices:{A:'20', B:'11.25', C:'16', D:'60'},
        correct:'A',
        expCorrect:'La razón harina:leche es 3:4. Con 15 tazas de harina, el factor es 15/3 = 5, así que la leche es 4 × 5 = **20 tazas**. (Comprueba la proporción: 3/4 = 15/20 ✓.)',
        expWrong:{
          B:'11.25 usa la razón al revés: 15 × (3/4). Con más harina hace falta MÁS leche, no menos — el resultado tenía que ser mayor que 15.',
          C:'16 suma la diferencia (4 − 3 = 1) en vez de multiplicar por el factor de escala. Las proporciones escalan multiplicando.',
          D:'60 es 15 × 4: se multiplicó por la leche sin dividir antes por las 3 tazas de harina de la receta original.'
        },
        tip:'Antes de calcular, decidí si la respuesta tiene que ser mayor o menor que el dato. Acá la leche va por encima de la harina en la receta, así que 20 > 15 tiene sentido y 11.25 se descarta sin cuentas.',
        desmos:'Escribí 15/3*4 y te da 20.',
        desmosLatex:['\\frac{15}{3}\\cdot 4']
      },
      {
        id:'M1-19', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Media (hallar el dato que falta)',
        stem:'The mean of five numbers is 14. Four of the numbers are 10, 12, 16, and 20. What is the fifth number? (Grid in your answer.)',
        answer:'12',
        expCorrect:'Si la media de cinco números es 14, la SUMA de los cinco es 5 × 14 = 70. Los cuatro conocidos suman 10 + 12 + 16 + 20 = 58. El quinto es 70 − 58 = **12**. (Comprueba: 70/5 = 14 ✓.)',
        tip:'La media casi nunca se usa como fórmula acá: se usa al revés, para reconstruir la SUMA. En cuanto leas "el promedio es", escribí suma = promedio × cantidad y el resto es aritmética.',
        desmos:'Escribí 5*14-(10+12+16+20) y da 12.',
        desmosLatex:['5\\cdot 14-(10+12+16+20)']
      },

      // ---------------- GEOMETRY AND TRIGONOMETRY (3) ----------------
      {
        id:'M1-20', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Suma de los ángulos de un triángulo',
        stem:'In triangle ABC, the measure of angle A is 40° and the measure of angle B is 75°. What is the measure of angle C ?',
        choices:{A:'65°', B:'115°', C:'245°', D:'75°'},
        correct:'A',
        expCorrect:'Los ángulos de todo triángulo suman 180°. Entonces C = 180 − 40 − 75 = 180 − 115 = 65°.',
        expWrong:{
          B:'115° es la suma de los otros dos ángulos, no el tercero. Falta restárselo a 180.',
          C:'245° usa 360 en vez de 180. Los 360° son la vuelta completa o los ángulos de un cuadrilátero, no de un triángulo.',
          D:'75° repite el ángulo B, que es un dato del enunciado. Nada indica que el triángulo sea isósceles.'
        },
        tip:'Regla que no cambia nunca: 180° en un triángulo, 360° en un cuadrilátero. Estas preguntas están para resolverse en quince segundos y comprar tiempo para las difíciles.',
        desmos:'No hace falta calculadora: 180-40-75.',
        desmosLatex:['180-40-75']
      },
      {
        id:'M1-21', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Círculos (del área al radio)',
        stem:'A circle has an area of 49π. What is the radius of the circle? (Grid in your answer.)',
        answer:'7',
        expCorrect:'El área de un círculo es πr². Igualá: πr² = 49π ⇒ r² = 49 ⇒ r = **7**. El π se cancela de los dos lados, así que no hay que aproximar nada.',
        tip:'Cuando el área viene "en términos de π", cancelalo y trabajá con el número: el problema se vuelve aritmética. Y no confundas r² con r — el 49 es el cuadrado, la respuesta es su raíz.',
        desmos:'Escribí sqrt(49) o graficá y=pi*x^2 con y=49pi.',
        desmosLatex:['\\sqrt{49}']
      },
      {
        id:'M1-22', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Teorema de Pitágoras',
        stem:'A right triangle has legs of length 9 and 12. What is the length of the hypotenuse?',
        choices:{A:'15', B:'21', C:'225', D:'√21'},
        correct:'A',
        expCorrect:'Pitágoras: c² = 9² + 12² = 81 + 144 = 225, así que c = √225 = 15. (Es el triángulo 3-4-5 multiplicado por 3: 9-12-15.)',
        expWrong:{
          B:'21 suma los catetos, 9 + 12. La hipotenusa no es la suma de los lados: tiene que ser menor que eso y mayor que cada cateto.',
          C:'225 es c², no c. Falta sacar la raíz cuadrada — el último paso.',
          D:'√21 saca la raíz de la suma de los catetos en vez de la suma de sus CUADRADOS. Además daría ≈4.6, menor que los catetos, lo cual es imposible.'
        },
        tip:'Aprendete las ternas 3-4-5, 5-12-13 y 8-15-17 y sus múltiplos: 9-12-15 es 3-4-5 por 3 y se resuelve de memoria. Y un chequeo de sensatez: la hipotenusa siempre está entre el cateto mayor y la suma de los dos.',
        desmos:'Escribí sqrt(9^2+12^2) y da 15.',
        desmosLatex:['\\sqrt{9^2+12^2}']
      }
    ]
  });
})();
