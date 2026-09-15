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
        skill:'Systems with a parameter (no solution)',
        stem:'In the system of equations below, k is a constant.<br><br>(k/2)x − 3y = 7<br>5x − (9/4)y = 10<br><br>For what value of k does the system have no solution?',
        choices:{A:'20/3', B:'15/2', C:'40/3', D:'7'},
        correct:'C',
        expCorrect:'A linear system has NO solution when the lines are parallel: proportional coefficients but constants that do not follow the proportion. You set (k/2)/5 = (−3)/(−9/4). The right-hand side is 3 ÷ 9/4 = 12/9 = 4/3. So k/2 = 5 · 4/3 = 20/3, and k = 40/3. Check: with k = 40/3 the first equation is (20/3)x − 3y = 7, and the second multiplied by 4/3 gives (20/3)x − 3y = 40/3. Same left-hand sides, different constants (7 ≠ 40/3): parallel, zero solutions.',
        expWrong:{
          A:'20/3 es el valor de k/2, no de k. Llegaste a k/2 = 20/3 y te faltó el último paso: multiplicar por 2.',
          B:'15/2 sale de cruzar mal: (k/2)(−3) = 5(−9/4). En la proporción de paralelismo se comparan coeficientes de la MISMA variable: (k/2)/5 = (−3)/(−9/4), no x contra y.',
          D:'7 sale de usar la razón de constantes: (k/2)/5 = 7/10. Para "sin solución" las constantes quedan FUERA de la proporción; solo se igualan los coeficientes de x y de y.'
        },
        tip:'“No solution” = proportional coefficients, constants not: a₁/a₂ = b₁/b₂ ≠ c₁/c₂. Watch the signs: (−3)/(−9/4) is POSITIVE 4/3.',
        desmos:'Grafica las dos rectas con un deslizador k: cuando k = 40/3 quedan paralelas (nunca se cruzan). Con cualquier otro valor de k, sí se cortan.',
        desmosLatex:['y=((k/2)x-7)/3','y=(5x-10)/(9/4)','k=40/3']
      },
      {
        id:'XA-02', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Systems with a parameter (no solution)',
        stem:'In the system of equations below, k is a constant.<br><br>6x + (k/3)y = 7<br>9x − 5y = 12<br><br>If the system has no solution, what is the value of k?',
        choices:{A:'−10', B:'10', C:'−10/3', D:'−45/2'},
        correct:'A',
        expCorrect:'No solution ⇒ proportional coefficients: 6/9 = (k/3)/(−5). The left side is 2/3, so k/3 = (2/3)(−5) = −10/3 and k = −10. Check: with k = −10 the first equation is 6x − (10/3)y = 7; multiplying the second by 2/3 gives 6x − (10/3)y = 8. Same coefficients, different constants (7 ≠ 8): parallel, no solution.',
        expWrong:{
          B:'10 es el error de signo clásico: el coeficiente de y en la segunda ecuación es −5, no 5. Al despejar, k/3 = (2/3)(−5) sale negativo.',
          C:'−10/3 es el valor de k/3. Te detuviste un paso antes: falta multiplicar por 3.',
          D:'−45/2 sale de invertir la proporción: usaste 9/6 = 3/2 en vez de 6/9 = 2/3. El orden debe ser consistente en ambas fracciones (primera ecuación arriba en las dos).'
        },
        tip:'ALWAYS build the proportion in the same order: (x coefficient of eq. 1)/(x coefficient of eq. 2) = (y coefficient of eq. 1)/(y coefficient of eq. 2). Mixing the order inverts the ratio and produces distractors like −45/2.',
        desmos:'Con el deslizador k mira cómo gira la primera recta. En k = −10 se pone paralela a la segunda: cero intersecciones. Muévelo un poquito y la intersección reaparece lejísimos.',
        desmosLatex:['y=(7-6x)/(k/3)','y=(9x-12)/5','k=-10']
      },
      {
        id:'XA-03', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Systems with a parameter (infinitely many solutions)',
        stem:'In the system of equations below, k and c are constants.<br><br>(k/4)x + 6y = c<br>3x + 8y = 10<br><br>If the system has infinitely many solutions, what is the value of c/k?',
        choices:{A:'9', B:'15/2', C:'6/5', D:'5/6'},
        correct:'D',
        expCorrect:'Infinitely many solutions ⇒ the two equations are the SAME line: (k/4)/3 = 6/8 = c/10. Since 6/8 = 3/4: k/4 = 9/4 ⇒ k = 9, and c = 10 · 3/4 = 15/2. So c/k = (15/2)/9 = 15/18 = 5/6. Check: multiplying 3x + 8y = 10 by 3/4 gives you (9/4)x + 6y = 15/2, exactly the first equation.',
        expWrong:{
          A:'9 es el valor de k, un valor intermedio. La pregunta pide c/k, no k. En módulo 2 difícil SIEMPRE relee qué expresión piden al final.',
          B:'15/2 es el valor de c, otro valor intermedio. Te faltó dividir: c/k = (15/2)/9 = 5/6.',
          C:'6/5 es c/k invertido: hiciste k/c o dividiste al revés. (15/2) ÷ 9 = 15/18 = 5/6, no 18/15.'
        },
        tip:'“Infinitely many solutions” = the WHOLE equation is proportional, constants included: a₁/a₂ = b₁/b₂ = c₁/c₂. Pull out the factor (here 3/4, from 6/8) and multiply the entire second equation by it. And underline what they want: c/k, not k and not c.',
        desmos:'Grafica ambas rectas con deslizadores k y c. Cuando k = 9 y c = 7.5 las dos rectas se superponen en una sola (infinitos puntos en común).',
        desmosLatex:['y=(c-(k/4)x)/6','y=(10-3x)/8','k=9','c=7.5']
      },
      {
        id:'XA-04', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Systems with a parameter (no solution, SPR)',
        stem:'In the system of equations below, k is a constant.<br><br>kx − (3/2)y = 5<br>(5/6)x + 2y = 9<br><br>If the system has no solution, what is the value of k?',
        answer:'-5/8',
        expCorrect:'No solution ⇒ parallel lines ⇒ same slope. From the first: y = (2/3)kx − 10/3, slope (2/3)k. From the second: y = −(5/12)x + 9/2, slope −5/12. Set them equal: (2/3)k = −5/12 ⇒ k = (−5/12)(3/2) = −15/24 = −5/8. Check by proportion: k/(5/6) = (−3/2)/2 = −3/4 ⇒ k = (5/6)(−3/4) = −5/8 ✓. The constants 5 and 9 do not follow that ratio, so it is genuine parallelism (not infinitely many solutions). Answer: −5/8.',
        tip:'When the fractions pile up, convert each equation to y = mx + b and set the slopes equal: it is mechanical and avoids proportion errors. In the grid-in you can write -5/8 or -.625.',
        desmos:'Escribe ambas rectas con deslizador k. Ajusta k hasta que queden paralelas: pasa exactamente en k = −5/8 = −0.625. Así confirmas tu álgebra en 10 segundos.',
        desmosLatex:['y=(kx-5)/(3/2)','y=(9-(5/6)x)/2','k=-5/8']
      },
      {
        id:'XA-05', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Modelo lineal (trampa de unidades)',
        stem:'The number of liters L of water remaining in an industrial tank t minutes after a pump is turned on is modeled by L = 840 − 0.4t. At this rate, how many liters of water does the pump remove from the tank each hour?',
        choices:{A:'0.4', B:'24', C:'14', D:'840'},
        correct:'B',
        expCorrect:'The slope −0.4 means 0.4 liters PER MINUTE (because t is in minutes). The question asks per HOUR: 0.4 × 60 = 24 liters per hour. The whole trap of the problem sits in the last word of the prompt: “hour”.',
        expWrong:{
          A:'0.4 es la tasa por MINUTO (la pendiente tal cual). El modelo usa t en minutos, pero la pregunta pide litros por hora: falta multiplicar por 60.',
          C:'14 sale de dividir 840 ÷ 60. Eso mezcla el valor inicial con la conversión de tiempo; el ritmo de vaciado vive en la pendiente 0.4, no en el 840.',
          D:'840 es la cantidad inicial de agua (el intercepto), no una tasa. Las tasas siempre salen de la pendiente.'
        },
        tip:'Underline the model’s units (t in minutes) and the question’s units (per hour). If they do not match, a conversion is mandatory: ×60. College Board hides the trap unit in the LAST word of the prompt.',
        desmos:'Grafica L = 840 − 0.4t y evalúa en t = 0 y t = 60: pasa de 840 a 816. La caída en una hora es 840 − 816 = 24, que confirma 0.4 × 60.',
        desmosLatex:['y=840-0.4x','840-(840-0.4\\cdot60)','0.4*60']
      },
      {
        id:'XA-06', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Linear model (“years after”, a disguised intercept)',
        stem:'The population P of a town x years after 2015 is modeled by P(x) = 350(x − 3) + 13,450. According to the model, what was the population of the town in 2015?',
        choices:{A:'12,400', B:'13,450', C:'14,500', D:'13,100'},
        correct:'A',
        expCorrect:'The year 2015 corresponds to x = 0 (x counts years AFTER 2015). Evaluate: P(0) = 350(0 − 3) + 13,450 = −1,050 + 13,450 = 12,400. Careful: 13,450 is NOT the initial value, because the model is shifted with (x − 3); 13,450 is the population at x = 3, that is, in 2018.',
        expWrong:{
          B:'13,450 es la población cuando x = 3 (año 2018), no en 2015. Como el modelo tiene (x − 3), la constante visible no es el intercepto. Trampa clásica de forma punto-pendiente.',
          C:'14,500 sale de sumar en vez de restar: 350(3) + 13,450. Pero P(0) = 350(−3) + 13,450, y 350(−3) es NEGATIVO.',
          D:'13,100 es restar solo un año de 350: 13,450 − 350. El desplazamiento es de 3 años: hay que restar 3 × 350 = 1,050.'
        },
        tip:'“x years after 2015” ⇒ 2015 is x = 0, ALWAYS. If the model comes in shifted form like 350(x − 3) + 13,450, the visible constant is NOT the initial value: evaluate at x = 0 with no shortcuts.',
        desmos:'Grafica y = 350(x − 3) + 13450 y toca el punto con x = 0: verás (0, 12400). También verás que (3, 13450) es el punto "ancla" del modelo, que es 2018, no 2015.',
        desmosLatex:['y=350(x-3)+13450','(0,12400)','(3,13450)']
      },
      {
        id:'XA-07', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Modelo lineal (valor intermedio + unidades)',
        stem:'The total cost C, in dollars, to rent a kayak consists of an $18 fixed fee plus $7.50 per hour, so C = 18 + 7.5h, where h is the number of hours. Marco paid a total of $85.50. For how many minutes did Marco rent the kayak?',
        choices:{A:'9', B:'90', C:'684', D:'540'},
        correct:'D',
        expCorrect:'First solve for the hours: 85.50 − 18 = 67.50, and 67.50 ÷ 7.50 = 9 hours. But the question asks for MINUTES: 9 × 60 = 540. Two chained traps: the intermediate value (9) appears as an option, and the unit conversion comes at the end.',
        expWrong:{
          A:'9 es el número de HORAS, el valor intermedio del problema. La pregunta pide minutos: 9 × 60 = 540. Relee siempre la última línea antes de marcar.',
          B:'90 es 9 × 10, una conversión descuidada. Una hora tiene 60 minutos, no 10.',
          C:'684 sale de olvidar la tarifa fija: 85.50 ÷ 7.50 = 11.4 horas, × 60 = 684. Hay que RESTAR los $18 fijos antes de dividir por la tarifa por hora.'
        },
        tip:'In a hard Module 2, the number you just computed (9) is almost never the answer: it is the bait. Circle the unit the question wants (minutes) BEFORE solving, and leave the conversion as a mandatory last step.',
        desmos:'Grafica y = 18 + 7.5x junto con y = 85.5: se cruzan en x = 9 (horas). Luego calcula 9 × 60 = 540 en la misma pantalla. Desmos te da la intersección exacta sin despejar a mano.',
        desmosLatex:['y=18+7.5x','y=85.5','9*60']
      },
      {
        id:'XA-08', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Rate from two points (converting to hours, SPR)',
        stem:'A tank is drained at a constant rate. The tank contained 96 gallons of water 2 minutes after draining began and 81 gallons of water 7 minutes after draining began. At this rate, how many gallons of water are drained from the tank each hour?',
        answer:'180',
        expCorrect:'The rate is the slope between (2, 96) and (7, 81): (81 − 96)/(7 − 2) = −15/5 = −3 gallons per MINUTE. The question asks per hour: 3 × 60 = 180 gallons per hour. Answer: 180. (Answering 3, the per-minute rate, is the designed error of this question.)',
        tip:'Two points ⇒ slope first, interpretation after. And mark the units: the data come in minutes but they want per hour, so the ×60 is not optional.',
        desmos:'Mete los puntos (2, 96) y (7, 81) y la recta y = −3x + 102: pasa por ambos. La caída por minuto es 3; en la misma pantalla escribe 3*60 = 180 para la tasa por hora.',
        desmosLatex:['(2,96)','(7,81)','y=-3x+102','3*60']
      },
      {
        id:'XA-09', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Absolute value (number of solutions)',
        stem:'In the equation |2x − 5| = c − 3, c is a constant. For what value of c does the equation have exactly one solution?',
        choices:{A:'0', B:'5/2', C:'3', D:'5'},
        correct:'C',
        expCorrect:'|2x − 5| = (something) has: two solutions if that “something” is positive, ONE solution if it is exactly zero, and none if it is negative. Exactly one solution ⇒ c − 3 = 0 ⇒ c = 3. (The single solution would be x = 5/2, but they want c, not x.)',
        expWrong:{
          A:'0 es el valor que debe tener el LADO DERECHO completo (c − 3), no c. Como c − 3 = 0, c vale 3.',
          B:'5/2 es la solución x de la ecuación cuando c = 3 (el vértice de |2x − 5|). Piden el valor de c, no el de x: valor intermedio disfrazado.',
          D:'Con c = 5 el lado derecho vale 2 > 0 y la ecuación tendría DOS soluciones (x = 7/2 y x = 3/2), no exactamente una.'
        },
        tip:'Think graphically: y = |2x − 5| is a V with its vertex at (5/2, 0). The horizontal line y = c − 3 touches it at a single point only when it passes through the vertex, that is, at height 0. “One solution” with absolute value almost always means “right-hand side = 0”.',
        desmos:'Grafica y = |2x − 5| y la horizontal y = c − 3 con deslizador c. Con c > 3 hay dos cortes, con c < 3 ninguno, y justo en c = 3 la recta toca la V en un solo punto (el vértice).',
        desmosLatex:['y=\\left|2x-5\\right|','y=c-3','c=3']
      },
      {
        id:'XA-10', type:'spr', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'Desigualdad con valor absoluto (contar enteros, SPR)',
        stem:'How many integer values of x satisfy the inequality |3x − 7| < 11 ?',
        answer:'7',
        expCorrect:'|3x − 7| < 11 opens up as −11 < 3x − 7 < 11. Add 7 to all three sides: −4 < 3x < 18, and divide by 3: −4/3 < x < 6. The integers strictly between −1.33… and 6 are: −1, 0, 1, 2, 3, 4, 5. That is 7 integers. A double catch: −1 DOES count (−1 > −4/3) and 6 does NOT (the inequality is strict). Answer: 7.',
        tip:'Con |expresión| < a, abre el sándwich −a < expresión < a y opera en los TRES lados a la vez. Al contar enteros, revisa cada borde por separado: el borde fraccionario (−4/3) deja pasar al entero siguiente (−1), y el borde estricto (< 6) excluye al 6. Contar con los dedos vale.',
        desmos:'Grafica y = |3x − 7| y y = 11: los cortes están en x = −4/3 y x = 6. Los valores enteros de x donde la V queda DEBAJO de la recta son exactamente 7 (de x = −1 a x = 5).',
        desmosLatex:['y=\\left|3x-7\\right|','y=11','\\left|3x-7\\right|<11']
      },
      {
        id:'XA-11', type:'mc', domain:'Algebra', difficulty:'Difícil', extreme:true,
        skill:'System: target expression (shortcut vs. brute force)',
        stem:'If 7x + 3y = 41 and 4x + 5y = 34, what is the value of 3x − 2y ?',
        choices:{A:'−7', B:'7', C:'23', D:'75'},
        correct:'B',
        expCorrect:'The shortcut: SUBTRACT the equations as they stand. (7x + 3y) − (4x + 5y) = 3x − 2y, exactly the expression they want! So 3x − 2y = 41 − 34 = 7. Thirty seconds. If you solve the whole system you get x = 103/23, y = 74/23 (hideous), and 3x − 2y = (309 − 148)/23 = 161/23 = 7. Same result, five minutes longer.',
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
        expCorrect:'The shortcut: x² − y² = (x + y)(x − y), so 54 = 9(x − y) and x − y = 6. Now add the two linear equations: (x + y) + (x − y) = 9 + 6 ⇒ 2x = 15 ⇒ x = 15/2. Check: x = 7.5, y = 1.5; x² − y² = 56.25 − 2.25 = 54 ✓. Brute force (substituting y = 9 − x into the quadratic) lands in the same place, but takes three times as long.',
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
