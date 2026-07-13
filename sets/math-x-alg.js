/* SAT Studio question set — Math EXTREME: Algebra (XA-01 a XA-12) */
(function(){
  window.SAT_SETS.push({
    id: 'math-x-alg',
    title: 'Extreme — Algebra',
    section: 'math',
    level: 'Extreme',
    description: 'Hard-Module-2 level: parameter systems, unit-trap linear models, and absolute-value hybrids.',
    minutes: 20,
    questions: [
      {
        id:'XA-01', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Sistemas con parámetro (sin solución)',
        stem:'In the system of equations below, k is a constant.<br><br>(k/2)x − 3y = 7<br>5x − (9/4)y = 10<br><br>For what value of k does the system have no solution?',
        choices:{A:'20/3', B:'15/2', C:'40/3', D:'7'},
        correct:'C',
        expCorrect:'Un sistema lineal NO tiene solución cuando las rectas son paralelas: coeficientes proporcionales pero constantes que no siguen la proporción. Igualas (k/2)/5 = (−3)/(−9/4). El lado derecho es 3 ÷ 9/4 = 12/9 = 4/3. Entonces k/2 = 5 · 4/3 = 20/3, y k = 40/3. Verificación: con k = 40/3 la primera ecuación es (20/3)x − 3y = 7, y la segunda multiplicada por 4/3 da (20/3)x − 3y = 40/3. Mismos lados izquierdos, constantes distintas (7 ≠ 40/3): paralelas, cero soluciones.',
        expWrong:{
          A:'20/3 es el valor de k/2, no de k. Llegaste a k/2 = 20/3 y te faltó el último paso: multiplicar por 2.',
          B:'15/2 sale de cruzar mal: (k/2)(−3) = 5(−9/4). En la proporción de paralelismo se comparan coeficientes de la MISMA variable: (k/2)/5 = (−3)/(−9/4), no x contra y.',
          D:'7 sale de usar la razón de constantes: (k/2)/5 = 7/10. Para "sin solución" las constantes quedan FUERA de la proporción; solo se igualan los coeficientes de x y de y.'
        },
        tip:'"Sin solución" = coeficientes proporcionales, constantes no: a₁/a₂ = b₁/b₂ ≠ c₁/c₂. Cuidado con los signos: (−3)/(−9/4) es POSITIVO 4/3.',
        desmos:'Grafica las dos rectas con un deslizador k: cuando k = 40/3 quedan paralelas (nunca se cruzan). Con cualquier otro valor de k, sí se cortan.',
        desmosLatex:['y=((k/2)x-7)/3','y=(5x-10)/(9/4)','k=40/3']
      },
      {
        id:'XA-02', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Sistemas con parámetro (sin solución)',
        stem:'In the system of equations below, k is a constant.<br><br>6x + (k/3)y = 7<br>9x − 5y = 12<br><br>If the system has no solution, what is the value of k?',
        choices:{A:'−10', B:'10', C:'−10/3', D:'−45/2'},
        correct:'A',
        expCorrect:'Sin solución ⇒ coeficientes proporcionales: 6/9 = (k/3)/(−5). El lado izquierdo es 2/3, así que k/3 = (2/3)(−5) = −10/3 y k = −10. Verificación: con k = −10 la primera ecuación es 6x − (10/3)y = 7; multiplicando la segunda por 2/3 da 6x − (10/3)y = 8. Mismos coeficientes, constantes distintas (7 ≠ 8): paralelas, sin solución.',
        expWrong:{
          B:'10 es el error de signo clásico: el coeficiente de y en la segunda ecuación es −5, no 5. Al despejar, k/3 = (2/3)(−5) sale negativo.',
          C:'−10/3 es el valor de k/3. Te detuviste un paso antes: falta multiplicar por 3.',
          D:'−45/2 sale de invertir la proporción: usaste 9/6 = 3/2 en vez de 6/9 = 2/3. El orden debe ser consistente en ambas fracciones (primera ecuación arriba en las dos).'
        },
        tip:'Arma la proporción SIEMPRE en el mismo orden: (coef. x de la ec. 1)/(coef. x de la ec. 2) = (coef. y de la ec. 1)/(coef. y de la ec. 2). Mezclar el orden invierte la razón y produce distractores como −45/2.',
        desmos:'Con el deslizador k mira cómo gira la primera recta. En k = −10 se pone paralela a la segunda: cero intersecciones. Muévelo un poquito y la intersección reaparece lejísimos.',
        desmosLatex:['y=(7-6x)/(k/3)','y=(9x-12)/5','k=-10']
      },
      {
        id:'XA-03', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Sistemas con parámetro (infinitas soluciones)',
        stem:'In the system of equations below, k and c are constants.<br><br>(k/4)x + 6y = c<br>3x + 8y = 10<br><br>If the system has infinitely many solutions, what is the value of c/k?',
        choices:{A:'9', B:'15/2', C:'6/5', D:'5/6'},
        correct:'D',
        expCorrect:'Infinitas soluciones ⇒ las dos ecuaciones son la MISMA recta: (k/4)/3 = 6/8 = c/10. Como 6/8 = 3/4: k/4 = 9/4 ⇒ k = 9, y c = 10 · 3/4 = 15/2. Entonces c/k = (15/2)/9 = 15/18 = 5/6. Verificación: multiplicando 3x + 8y = 10 por 3/4 obtienes (9/4)x + 6y = 15/2, exactamente la primera ecuación.',
        expWrong:{
          A:'9 es el valor de k, un valor intermedio. La pregunta pide c/k, no k. En módulo 2 difícil SIEMPRE relee qué expresión piden al final.',
          B:'15/2 es el valor de c, otro valor intermedio. Te faltó dividir: c/k = (15/2)/9 = 5/6.',
          C:'6/5 es c/k invertido: hiciste k/c o dividiste al revés. (15/2) ÷ 9 = 15/18 = 5/6, no 18/15.'
        },
        tip:'"Infinitas soluciones" = TODA la ecuación es proporcional, incluidas las constantes: a₁/a₂ = b₁/b₂ = c₁/c₂. Saca el factor (aquí 3/4, desde 6/8) y multiplica la segunda ecuación completa por él. Y subraya qué piden: c/k, no k ni c.',
        desmos:'Grafica ambas rectas con deslizadores k y c. Cuando k = 9 y c = 7.5 las dos rectas se superponen en una sola (infinitos puntos en común).',
        desmosLatex:['y=(c-(k/4)x)/6','y=(10-3x)/8','k=9','c=7.5']
      },
      {
        id:'XA-04', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Sistemas con parámetro (sin solución, SPR)',
        stem:'In the system of equations below, k is a constant.<br><br>kx − (3/2)y = 5<br>(5/6)x + 2y = 9<br><br>If the system has no solution, what is the value of k?',
        answer:'-5/8',
        expCorrect:'Sin solución ⇒ rectas paralelas ⇒ misma pendiente. De la primera: y = (2/3)kx − 10/3, pendiente (2/3)k. De la segunda: y = −(5/12)x + 9/2, pendiente −5/12. Igualas: (2/3)k = −5/12 ⇒ k = (−5/12)(3/2) = −15/24 = −5/8. Verificación por proporción: k/(5/6) = (−3/2)/2 = −3/4 ⇒ k = (5/6)(−3/4) = −5/8 ✓. Las constantes 5 y 9 no siguen esa razón, así que es paralelismo genuino (no infinitas soluciones). Respuesta: −5/8.',
        tip:'Cuando las fracciones se amontonan, pasa cada ecuación a y = mx + b e iguala pendientes: es mecánico y evita errores de proporción. En el grid-in puedes escribir -5/8 o -.625.',
        desmos:'Escribe ambas rectas con deslizador k. Ajusta k hasta que queden paralelas: pasa exactamente en k = −5/8 = −0.625. Así confirmas tu álgebra en 10 segundos.',
        desmosLatex:['y=(kx-5)/(3/2)','y=(9-(5/6)x)/2','k=-5/8']
      },
      {
        id:'XA-05', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Modelo lineal (trampa de unidades)',
        stem:'The number of liters L of water remaining in an industrial tank t minutes after a pump is turned on is modeled by L = 840 − 0.4t. At this rate, how many liters of water does the pump remove from the tank each hour?',
        choices:{A:'0.4', B:'24', C:'14', D:'840'},
        correct:'B',
        expCorrect:'La pendiente −0.4 significa 0.4 litros POR MINUTO (porque t está en minutos). La pregunta pide por HORA: 0.4 × 60 = 24 litros por hora. Toda la trampa del problema está en la palabra final del enunciado: "hour".',
        expWrong:{
          A:'0.4 es la tasa por MINUTO (la pendiente tal cual). El modelo usa t en minutos, pero la pregunta pide litros por hora: falta multiplicar por 60.',
          C:'14 sale de dividir 840 ÷ 60. Eso mezcla el valor inicial con la conversión de tiempo; el ritmo de vaciado vive en la pendiente 0.4, no en el 840.',
          D:'840 es la cantidad inicial de agua (el intercepto), no una tasa. Las tasas siempre salen de la pendiente.'
        },
        tip:'Subraya las unidades del modelo (t en minutos) y las de la pregunta (por hora). Si no coinciden, hay conversión sí o sí: ×60. El College Board esconde la unidad trampa en la ÚLTIMA palabra del enunciado.',
        desmos:'Grafica L = 840 − 0.4t y evalúa en t = 0 y t = 60: pasa de 840 a 816. La caída en una hora es 840 − 816 = 24, que confirma 0.4 × 60.',
        desmosLatex:['y=840-0.4x','840-(840-0.4\\cdot60)','0.4*60']
      },
      {
        id:'XA-06', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Modelo lineal ("años después de", intercepto disfrazado)',
        stem:'The population P of a town x years after 2015 is modeled by P(x) = 350(x − 3) + 13,450. According to the model, what was the population of the town in 2015?',
        choices:{A:'12,400', B:'13,450', C:'14,500', D:'13,100'},
        correct:'A',
        expCorrect:'El año 2015 corresponde a x = 0 (x cuenta años DESPUÉS de 2015). Evalúas: P(0) = 350(0 − 3) + 13,450 = −1,050 + 13,450 = 12,400. Ojo: 13,450 NO es el valor inicial, porque el modelo está desplazado con (x − 3); 13,450 es la población en x = 3, o sea en 2018.',
        expWrong:{
          B:'13,450 es la población cuando x = 3 (año 2018), no en 2015. Como el modelo tiene (x − 3), la constante visible no es el intercepto. Trampa clásica de forma punto-pendiente.',
          C:'14,500 sale de sumar en vez de restar: 350(3) + 13,450. Pero P(0) = 350(−3) + 13,450, y 350(−3) es NEGATIVO.',
          D:'13,100 es restar solo un año de 350: 13,450 − 350. El desplazamiento es de 3 años: hay que restar 3 × 350 = 1,050.'
        },
        tip:'"x años después de 2015" ⇒ 2015 es x = 0, SIEMPRE. Si el modelo viene en forma desplazada como 350(x − 3) + 13,450, la constante visible NO es el valor inicial: evalúa en x = 0 sin atajos.',
        desmos:'Grafica y = 350(x − 3) + 13450 y toca el punto con x = 0: verás (0, 12400). También verás que (3, 13450) es el punto "ancla" del modelo, que es 2018, no 2015.',
        desmosLatex:['y=350(x-3)+13450','(0,12400)','(3,13450)']
      },
      {
        id:'XA-07', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Modelo lineal (valor intermedio + unidades)',
        stem:'The total cost C, in dollars, to rent a kayak consists of an $18 fixed fee plus $7.50 per hour, so C = 18 + 7.5h, where h is the number of hours. Marco paid a total of $85.50. For how many minutes did Marco rent the kayak?',
        choices:{A:'9', B:'90', C:'684', D:'540'},
        correct:'D',
        expCorrect:'Primero despejas las horas: 85.50 − 18 = 67.50, y 67.50 ÷ 7.50 = 9 horas. Pero la pregunta pide MINUTOS: 9 × 60 = 540. Dos trampas encadenadas: el valor intermedio (9) aparece como opción, y la conversión de unidades al final.',
        expWrong:{
          A:'9 es el número de HORAS, el valor intermedio del problema. La pregunta pide minutos: 9 × 60 = 540. Relee siempre la última línea antes de marcar.',
          B:'90 es 9 × 10, una conversión descuidada. Una hora tiene 60 minutos, no 10.',
          C:'684 sale de olvidar la tarifa fija: 85.50 ÷ 7.50 = 11.4 horas, × 60 = 684. Hay que RESTAR los $18 fijos antes de dividir por la tarifa por hora.'
        },
        tip:'En módulo 2 difícil, el número que acabas de calcular (9) casi nunca es la respuesta: es el cebo. Encierra en un círculo la unidad que pide la pregunta (minutos) ANTES de resolver, y deja la conversión como último paso obligatorio.',
        desmos:'Grafica y = 18 + 7.5x junto con y = 85.5: se cruzan en x = 9 (horas). Luego calcula 9 × 60 = 540 en la misma pantalla. Desmos te da la intersección exacta sin despejar a mano.',
        desmosLatex:['y=18+7.5x','y=85.5','9*60']
      },
      {
        id:'XA-08', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Tasa desde dos puntos (conversión a hora, SPR)',
        stem:'A tank is drained at a constant rate. The tank contained 96 gallons of water 2 minutes after draining began and 81 gallons of water 7 minutes after draining began. At this rate, how many gallons of water are drained from the tank each hour?',
        answer:'180',
        expCorrect:'La tasa es la pendiente entre (2, 96) y (7, 81): (81 − 96)/(7 − 2) = −15/5 = −3 galones por MINUTO. La pregunta pide por hora: 3 × 60 = 180 galones por hora. Respuesta: 180. (Responder 3, la tasa por minuto, es el error diseñado de esta pregunta.)',
        tip:'Dos puntos ⇒ pendiente primero, interpretación después. Y marca las unidades: los datos vienen en minutos pero piden por hora, así que el ×60 no es opcional.',
        desmos:'Mete los puntos (2, 96) y (7, 81) y la recta y = −3x + 102: pasa por ambos. La caída por minuto es 3; en la misma pantalla escribe 3*60 = 180 para la tasa por hora.',
        desmosLatex:['(2,96)','(7,81)','y=-3x+102','3*60']
      },
      {
        id:'XA-09', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Valor absoluto (número de soluciones)',
        stem:'In the equation |2x − 5| = c − 3, c is a constant. For what value of c does the equation have exactly one solution?',
        choices:{A:'0', B:'5/2', C:'3', D:'5'},
        correct:'C',
        expCorrect:'|2x − 5| = (algo) tiene: dos soluciones si ese "algo" es positivo, UNA solución si es exactamente cero, y ninguna si es negativo. Exactamente una solución ⇒ c − 3 = 0 ⇒ c = 3. (La solución única sería x = 5/2, pero piden c, no x.)',
        expWrong:{
          A:'0 es el valor que debe tener el LADO DERECHO completo (c − 3), no c. Como c − 3 = 0, c vale 3.',
          B:'5/2 es la solución x de la ecuación cuando c = 3 (el vértice de |2x − 5|). Piden el valor de c, no el de x: valor intermedio disfrazado.',
          D:'Con c = 5 el lado derecho vale 2 > 0 y la ecuación tendría DOS soluciones (x = 7/2 y x = 3/2), no exactamente una.'
        },
        tip:'Piensa gráficamente: y = |2x − 5| es una V con vértice en (5/2, 0). La horizontal y = c − 3 la toca en un solo punto únicamente cuando pasa por el vértice, o sea a altura 0. "Una solución" con valor absoluto casi siempre significa "lado derecho = 0".',
        desmos:'Grafica y = |2x − 5| y la horizontal y = c − 3 con deslizador c. Con c > 3 hay dos cortes, con c < 3 ninguno, y justo en c = 3 la recta toca la V en un solo punto (el vértice).',
        desmosLatex:['y=\\left|2x-5\\right|','y=c-3','c=3']
      },
      {
        id:'XA-10', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Desigualdad con valor absoluto (contar enteros, SPR)',
        stem:'How many integer values of x satisfy the inequality |3x − 7| < 11 ?',
        answer:'7',
        expCorrect:'|3x − 7| < 11 se abre como −11 < 3x − 7 < 11. Sumas 7 en los tres lados: −4 < 3x < 18, y divides entre 3: −4/3 < x < 6. Los enteros estrictamente entre −1.33… y 6 son: −1, 0, 1, 2, 3, 4, 5. Son 7 enteros. Ojo doble: −1 SÍ entra (−1 > −4/3) y 6 NO entra (la desigualdad es estricta). Respuesta: 7.',
        tip:'Con |expresión| < a, abre el sándwich −a < expresión < a y opera en los TRES lados a la vez. Al contar enteros, revisa cada borde por separado: el borde fraccionario (−4/3) deja pasar al entero siguiente (−1), y el borde estricto (< 6) excluye al 6. Contar con los dedos vale.',
        desmos:'Grafica y = |3x − 7| y y = 11: los cortes están en x = −4/3 y x = 6. Los valores enteros de x donde la V queda DEBAJO de la recta son exactamente 7 (de x = −1 a x = 5).',
        desmosLatex:['y=\\left|3x-7\\right|','y=11','\\left|3x-7\\right|<11']
      },
      {
        id:'XA-11', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Sistema: expresión objetivo (atajo vs. fuerza bruta)',
        stem:'If 7x + 3y = 41 and 4x + 5y = 34, what is the value of 3x − 2y ?',
        choices:{A:'−7', B:'7', C:'23', D:'75'},
        correct:'B',
        expCorrect:'El atajo: RESTA las ecuaciones tal cual. (7x + 3y) − (4x + 5y) = 3x − 2y, ¡exactamente la expresión que piden! Entonces 3x − 2y = 41 − 34 = 7. Treinta segundos. Si resuelves el sistema completo obtienes x = 103/23, y = 74/23 (feísimos), y 3x − 2y = (309 − 148)/23 = 161/23 = 7. Mismo resultado, cinco minutos más.',
        expWrong:{
          A:'−7 es restar al revés: 34 − 41. La expresión 3x − 2y sale de (primera) − (segunda), así que las constantes van en ese mismo orden: 41 − 34.',
          C:'23 es el coeficiente que aparece al eliminar y por fuerza bruta (23x = 103): un número intermedio del camino largo, no la respuesta.',
          D:'75 es SUMAR las ecuaciones (41 + 34), que da 11x + 8y, una expresión que no sirve. Antes de operar, verifica qué combinación produce la expresión objetivo.'
        },
        tip:'Cuando piden una EXPRESIÓN (3x − 2y) y no las variables, prueba primero sumar o restar las ecuaciones sin despejar nada: en el SAT casi siempre la combinación directa produce justo lo que piden. Que las soluciones individuales salgan feas (103/23) es la señal de que el examen esperaba el atajo.',
        desmos:'Comprobación: grafica 7x + 3y = 41 y 4x + 5y = 34, toca la intersección (≈4.478, ≈3.217) y evalúa 3x − 2y con esos valores: da 7 clavado. Pero el atajo de restar ecuaciones es más rápido que abrir la calculadora.',
        desmosLatex:['7x+3y=41','4x+5y=34','3\\cdot\\frac{103}{23}-2\\cdot\\frac{74}{23}']
      },
      {
        id:'XA-12', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Diferencia de cuadrados (atajo estructural)',
        stem:'If x + y = 9 and x² − y² = 54, what is the value of x ?',
        choices:{A:'3/2', B:'6', C:'9', D:'15/2'},
        correct:'D',
        expCorrect:'El atajo: x² − y² = (x + y)(x − y), así que 54 = 9(x − y) y x − y = 6. Ahora sumas las dos ecuaciones lineales: (x + y) + (x − y) = 9 + 6 ⇒ 2x = 15 ⇒ x = 15/2. Verificación: x = 7.5, y = 1.5; x² − y² = 56.25 − 2.25 = 54 ✓. La fuerza bruta (sustituir y = 9 − x en la cuadrática) llega al mismo lugar, pero tarda el triple.',
        expWrong:{
          A:'3/2 es el valor de y, no de x. Después de obtener x − y = 6, restar las ecuaciones en vez de sumarlas da 2y = 3. Piden x.',
          B:'6 es el valor de x − y, un resultado intermedio del atajo. Todavía falta combinar con x + y = 9 para aislar x.',
          C:'9 es x + y, el dato del enunciado. Ninguna de las dos variables vale 9 por sí sola.'
        },
        tip:'Ver x² − y² junto a x + y (o x − y) es un timbre de alarma: factoriza como (x + y)(x − y) ANTES de pensar en sustituir. Divide, consigue la segunda ecuación lineal, y suma o resta. Los valores intermedios (6 y 9) siempre están entre las opciones para cazarte.',
        desmos:'Grafica la recta x + y = 9 y la curva x² − y² = 54: se cortan en (7.5, 1.5). Ahí ves de una que x = 15/2, y que el 6 y el 3/2 de las opciones son otras cosas (x − y y el valor de y).',
        desmosLatex:['x+y=9','x^2-y^2=54','(7.5,1.5)']
      }
    ]
  });
})();
