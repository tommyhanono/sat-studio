/* SAT Studio question set — EXTREME Math: Geometry & Trig (XG-01 a XG-12) */
(function(){
  var FIG_ALTITUDE =
    '<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right triangle ABC with the right angle at C. The altitude from C meets hypotenuse AB at D, with AD equal to 4 and DB equal to 9.">' +
    '<polygon points="30,150 270,150 104,40" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="104" y1="40" x2="104" y2="150" stroke="#1e1e1e" stroke-width="2" stroke-dasharray="5,4"/>' +
    '<rect x="104" y="136" width="13" height="14" fill="none" stroke="#1e1e1e" stroke-width="1.5"/>' +
    '<text x="22" y="166" font-size="15" font-family="Georgia,serif" font-style="italic">A</text>' +
    '<text x="268" y="166" font-size="15" font-family="Georgia,serif" font-style="italic">B</text>' +
    '<text x="98" y="32" font-size="15" font-family="Georgia,serif" font-style="italic">C</text>' +
    '<text x="100" y="168" font-size="15" font-family="Georgia,serif" font-style="italic">D</text>' +
    '<text x="62" y="145" font-size="14" font-family="Georgia,serif">4</text>' +
    '<text x="184" y="145" font-size="14" font-family="Georgia,serif">9</text>' +
    '<text x="12" y="184" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_TANGENT =
    '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle with center O and radius 5. Point P is outside the circle with OP equal to 13. Segment PT is tangent to the circle at point T.">' +
    '<circle cx="95" cy="95" r="60" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="95" cy="95" r="2.5" fill="#1e1e1e"/>' +
    '<line x1="95" y1="95" x2="295" y2="140" stroke="#1e1e1e" stroke-width="2"/>' +
    '<line x1="95" y1="95" x2="122" y2="41" stroke="#324DC7" stroke-width="2"/>' +
    '<line x1="122" y1="41" x2="295" y2="140" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<circle cx="122" cy="41" r="2.5" fill="#1e1e1e"/>' +
    '<circle cx="295" cy="140" r="2.5" fill="#1e1e1e"/>' +
    '<text x="80" y="112" font-size="15" font-family="Georgia,serif" font-style="italic">O</text>' +
    '<text x="116" y="30" font-size="15" font-family="Georgia,serif" font-style="italic">T</text>' +
    '<text x="302" y="146" font-size="15" font-family="Georgia,serif" font-style="italic">P</text>' +
    '<text x="94" y="62" font-size="13" font-family="Georgia,serif" fill="#324DC7">5</text>' +
    '<text x="185" y="132" font-size="13" font-family="Georgia,serif">13</text>' +
    '<text x="12" y="184" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. PT is tangent to the circle at T.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-x-geo',
    title: 'Extreme — Geometry & Trig',
    section: 'math',
    level: 'Extreme',
    description: 'Hard-Module-2 level: circle systems with tangency, similar-triangle chains, cofunction trig, and volume-rate problems.',
    minutes: 20,
    questions: [
      {
        id:'XG-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Circunferencia (coeficiente ≠ 1, tangencia)',
        stem:'In the xy-plane, the graph of 2x² + 2y² − 12x + 4y = k, where k is a constant, is a circle that is tangent to the x-axis. What is the value of k?',
        choices:{A:'−36', B:'−18', C:'−20', D:'−2'},
        correct:'B',
        expCorrect:'Primero divide TODO entre 2: x² + y² − 6x + 2y = k/2. Completa cuadrados: (x − 3)² − 9 + (y + 1)² − 1 = k/2 → (x − 3)² + (y + 1)² = k/2 + 10. El centro es (3, −1). Para ser tangente al eje x, el radio debe ser la distancia vertical del centro al eje: r = |−1| = 1, así que r² = 1. Entonces k/2 + 10 = 1 → k/2 = −9 → k = −18. (Verifica: (x − 3)² + (y + 1)² = 1 toca el eje x solo en (3, 0) ✓.)',
        expWrong:{
          A:'−36 sale de completar cuadrados SIN dividir entre 2 primero: (x − 6)² + (y + 2)² = k + 40 con "radio" 2 da k = −36. Con coeficiente 2 tienes que dividir toda la ecuación antes de completar cuadrados.',
          C:'−20 hace k/2 + 10 = 0, que da un solo punto (radio cero), no una circunferencia tangente al eje x. Tangencia con el eje x exige r = 1, no r = 0.',
          D:'−2 usa la distancia al eje y (|3| = 3, r² = 9): eso sería tangente al eje Y. Te pidieron tangente al eje x, que depende de la coordenada y del centro.'
        },
        tip:'Con coeficiente principal ≠ 1, el PRIMER paso siempre es dividir toda la ecuación. Tangente al eje x → radio = |coordenada y del centro|. Tangente al eje y → radio = |h|. Y recuerda: el lado derecho de la forma estándar es r², no r.',
        desmos:'Grafica 2x^2+2y^2-12x+4y=-18 en Desmos y vas a ver la circunferencia tocando el eje x en un solo punto, (3, 0). Cambia el −18 por −36 y verás que la tangencia se pierde.',
        desmosLatex:['2x^2+2y^2-12x+4y=-18', '(x-3)^2+(y+1)^2=1']
      },
      {
        id:'XG-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Circunferencia (coeficiente ≠ 1 → diámetro)',
        stem:'The graph of 2x² + 2y² + 16x − 8y = −22 in the xy-plane is a circle. What is the length of the diameter of the circle?',
        choices:{A:'3', B:'9', C:'6', D:'18'},
        correct:'C',
        expCorrect:'Divide entre 2: x² + y² + 8x − 4y = −11. Completa cuadrados: (x + 4)² − 16 + (y − 2)² − 4 = −11 → (x + 4)² + (y − 2)² = 9. Entonces r² = 9 → r = 3, y el DIÁMETRO = 2r = 6. (Verifica: −11 + 16 + 4 = 9 ✓.)',
        expWrong:{
          A:'3 es el RADIO. La pregunta pide el diámetro, que es el doble: 6. Esta es la trampa clásica de quedarse en el valor intermedio.',
          B:'9 es r², el lado derecho de la ecuación estándar. Ni siquiera es el radio: falta sacar raíz (r = 3) y luego duplicar (d = 6).',
          D:'18 duplica r² (2 × 9) en vez de duplicar el radio (2 × 3). Primero la raíz, después el doble.'
        },
        tip:'Cadena completa: dividir entre el coeficiente → completar cuadrados → r² → raíz → r → ¿te pidieron radio o diámetro? Subraya la palabra "diameter" en el stem: el examen SIEMPRE pone el radio como distractor.',
        desmos:'Grafica 2x^2+2y^2+16x-8y=-22 en Desmos: círculo con centro (−4, 2). De x=−7 a x=−1 pasando por el centro hay 6 unidades: ese es el diámetro.',
        desmosLatex:['2x^2+2y^2+16x-8y=-22', '(x+4)^2+(y-2)^2=9']
      },
      {
        id:'XG-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Sistema circunferencia + recta (número de soluciones)',
        stem:'In the xy-plane, how many points of intersection do the graphs of 3x² + 3y² = 48 and y = x + 6 have?',
        choices:{A:'Zero', B:'Exactly one', C:'Exactly two', D:'Infinitely many'},
        correct:'A',
        expCorrect:'Divide entre 3: x² + y² = 16, circunferencia con centro (0, 0) y radio 4. Sustituye y = x + 6: x² + (x + 6)² = 16 → 2x² + 12x + 36 = 16 → 2x² + 12x + 20 = 0 → x² + 6x + 10 = 0. Discriminante: 6² − 4(1)(10) = 36 − 40 = −4 < 0, así que NO hay soluciones reales: cero intersecciones. (Comprobación geométrica: la distancia del centro a la recta x − y + 6 = 0 es 6/√2 = 3√2 ≈ 4.24 > 4 = radio; la recta pasa por fuera ✓.)',
        expWrong:{
          B:'Exactamente una intersección requeriría discriminante = 0 (recta tangente), es decir, distancia del centro a la recta IGUAL al radio. Aquí 3√2 ≈ 4.24 ≠ 4.',
          C:'Dos intersecciones pedirían discriminante positivo (recta secante). Si no divides entre 3 y tratas √48 ≈ 6.9 como radio, concluyes mal que la recta corta — el radio real es 4.',
          D:'Infinitas soluciones solo pasa cuando las dos ecuaciones describen la MISMA curva. Una recta y una circunferencia nunca coinciden.'
        },
        tip:'Sistema circunferencia + recta: sustituye, arma la cuadrática y mira el DISCRIMINANTE: positivo → 2 soluciones, cero → 1 (tangente), negativo → 0. Atajo geométrico: compara la distancia del centro a la recta contra el radio. No olvides dividir 3x² + 3y² = 48 primero: el radio es 4, no √48.',
        desmos:'Grafica x^2+y^2=16 y y=x+6 en Desmos: la recta pasa completa por fuera del círculo sin tocarlo. Cero intersecciones a la vista.',
        desmosLatex:['x^2+y^2=16', 'y=x+6']
      },
      {
        id:'XG-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Circunferencia (coeficiente ≠ 1, condición sobre k)',
        stem:'In the xy-plane, the graph of 2x² + 2y² − 20x + 12y = k, where k is a constant, is a circle with radius 6. What is the value of k?',
        choices:{A:'−100', B:'−56', C:'2', D:'4'},
        correct:'D',
        expCorrect:'Divide entre 2: x² + y² − 10x + 6y = k/2. Completa cuadrados: (x − 5)² − 25 + (y + 3)² − 9 = k/2 → (x − 5)² + (y + 3)² = k/2 + 34. Radio 6 significa r² = 36, entonces k/2 + 34 = 36 → k/2 = 2 → k = 4. (Verifica: con k = 4 el lado derecho es 2/2 + 34 = 36 = 6² ✓.)',
        expWrong:{
          A:'−100 sale de completar cuadrados sin dividir entre 2: (x − 10)² + (y + 6)² = k + 136 = 36 → k = −100. El coeficiente 2 obliga a dividir toda la ecuación primero.',
          B:'−56 iguala k/2 + 34 a 6 (el radio) en vez de a 36 (el radio al cuadrado). El lado derecho de la forma estándar es r², no r.',
          C:'2 es el valor de k/2, no de k. Resolviste bien hasta k/2 = 2 pero olvidaste el último paso: multiplicar por 2.'
        },
        tip:'Tres trampas apiladas en un solo problema: (1) dividir entre el coeficiente ANTES de completar cuadrados, (2) igualar a r² = 36 y no a r = 6, (3) despejar k completo, no quedarte en k/2. Escribe cada paso.',
        desmos:'Grafica 2x^2+2y^2-20x+12y=4 en Desmos y encima (x-5)^2+(y+3)^2=36: coinciden exactamente. Círculo con centro (5, −3) y radio 6.',
        desmosLatex:['2x^2+2y^2-20x+12y=4', '(x-5)^2+(y+3)^2=36']
      },
      {
        id:'XG-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Altura a la hipotenusa (media geométrica)',
        figure: FIG_ALTITUDE,
        stem:'In right triangle ABC shown, the right angle is at C, and the altitude from C meets hypotenuse AB at point D. If AD = 4 and DB = 9, what is the length of altitude CD?',
        choices:{A:'2√13', B:'6.5', C:'36', D:'6'},
        correct:'D',
        expCorrect:'La altura a la hipotenusa crea TRES triángulos semejantes (ACD ~ CBD ~ ABC). De la semejanza ACD ~ CBD sale la relación de media geométrica: CD/AD = DB/CD → CD² = AD · DB = 4 · 9 = 36 → CD = 6. (Verifica en la otra dirección: 6/4 = 9/6 = 1.5 ✓.)',
        expWrong:{
          A:'2√13 = √(4 · 13) es la longitud del CATETO AC (media geométrica del segmento adyacente AD con TODA la hipotenusa AB = 13). Confundiste la relación del cateto con la de la altura.',
          B:'6.5 es la mitad de la hipotenusa (13/2), que sería la MEDIANA desde C hasta AB, no la altura. Mediana y altura desde C solo coinciden si el triángulo es isósceles.',
          C:'36 es CD², el producto 4 × 9. Te faltó sacar la raíz cuadrada: CD = √36 = 6.'
        },
        tip:'Memoriza las relaciones de la altura a la hipotenusa: altura² = (segmento)(segmento); cateto² = (segmento adyacente)(hipotenusa completa). La altura usa los DOS pedazos; cada cateto usa su pedazo y el total.',
        desmos:'En Desmos como calculadora: sqrt(4*9) da 6. Compara con sqrt(4*13) ≈ 7.21 — eso es el cateto AC, no la altura. Son dos relaciones distintas.',
        desmosLatex:['sqrt(4*9)', 'sqrt(4*13)']
      },
      {
        id:'XG-06', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Altura a la hipotenusa (con expresiones)',
        stem:'In a right triangle, the altitude to the hypotenuse has length 6 and divides the hypotenuse into two segments of lengths x and x + 5. What is the length of the hypotenuse?',
        choices:{A:'4', B:'9', C:'13', D:'36'},
        correct:'C',
        expCorrect:'Por los triángulos semejantes que crea la altura: altura² = producto de los segmentos → 6² = x(x + 5) → x² + 5x − 36 = 0 → (x + 9)(x − 4) = 0 → x = 4 (la longitud debe ser positiva; descarta −9). Los segmentos miden 4 y 4 + 5 = 9, así que la hipotenusa = 4 + 9 = 13. (Verifica: √(4 · 9) = 6 ✓.)',
        expWrong:{
          A:'4 es el valor de x (el segmento corto), no la hipotenusa. Después de resolver la cuadrática todavía falta SUMAR los dos segmentos: 4 + 9 = 13.',
          B:'9 es el segmento largo (x + 5). La hipotenusa es la suma de ambos segmentos, no uno solo.',
          D:'36 es 6², el cuadrado de la altura (y el producto de los segmentos). No es ninguna longitud del triángulo.'
        },
        tip:'Cuando te dan los segmentos con expresiones: arma altura² = (seg1)(seg2), resuelve la cuadrática, DESCARTA la raíz negativa y relee qué pidieron. Casi nunca es x: suele ser una suma o un lado completo.',
        desmos:'Grafica y=x^2+5x-36 en Desmos: cruza el eje x en x=4 y x=−9. Solo x=4 sirve (longitud positiva). Luego 4+(4+5) da 13.',
        desmosLatex:['y=x^2+5x-36', '4+(4+5)']
      },
      {
        id:'XG-07', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Tangente desde punto externo',
        figure: FIG_TANGENT,
        stem:'In the figure, the circle has center O and radius 5. Point P lies outside the circle with OP = 13, and segment PT is tangent to the circle at point T. What is the length of PT?',
        answer:'12',
        expCorrect:'Una tangente es PERPENDICULAR al radio en el punto de tangencia, así que el triángulo OTP es rectángulo en T, con hipotenusa OP = 13 y cateto OT = 5. Por Pitágoras: PT = √(13² − 5²) = √(169 − 25) = √144 = 12. (Es la terna pitagórica 5-12-13 ✓.) Respuesta: 12.',
        expWrong:{},
        tip:'Radio + tangente = ángulo recto EN el punto de tangencia, siempre. Eso convierte casi todo problema de tangentes en un Pitágoras escondido con OP de hipotenusa. Bonus: las DOS tangentes trazadas desde un mismo punto externo miden lo mismo.',
        desmos:'En Desmos: sqrt(13^2-5^2) da 12. Si quieres verlo, grafica x^2+y^2=25 y marca el punto (13, 0): la tangente desde ahí forma un triángulo 5-12-13 con el radio.',
        desmosLatex:['sqrt(13^2-5^2)', 'x^2+y^2=25']
      },
      {
        id:'XG-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Identidad cofunción (sin = cos)',
        stem:'In the equation sin(3x − 17)° = cos(2x + 42)°, the measures (3x − 17)° and (2x + 42)° are those of acute angles. What is the value of x?',
        choices:{A:'13', B:'31', C:'59', D:'65'},
        correct:'A',
        expCorrect:'Cofunciones: sin θ = cos(90° − θ). El seno de un ángulo agudo es igual al coseno de otro cuando los dos ángulos SUMAN 90°. Entonces (3x − 17) + (2x + 42) = 90 → 5x + 25 = 90 → 5x = 65 → x = 13. (Verifica: 3(13) − 17 = 22° y 2(13) + 42 = 68°; 22 + 68 = 90 ✓ y sin 22° = cos 68° ≈ 0.3746 ✓.)',
        expWrong:{
          B:'31 sale de igualar la suma a 180 en vez de 90: 5x + 25 = 180 → x = 31. La relación de cofunción usa ángulos COMPLEMENTARIOS (suman 90°), no suplementarios.',
          C:'59 sale de igualar los ángulos entre sí: 3x − 17 = 2x + 42 → x = 59. Pero sin θ = cos θ solo cuando θ = 45°; la igualdad seno-coseno exige que los ángulos sumen 90°, no que sean iguales.',
          D:'65 es el valor de 5x, no de x. Te faltó el último paso: dividir entre 5.'
        },
        tip:'Regla de oro del Digital SAT: sin A = cos B (con A y B agudos) ⟺ A + B = 90°. Nunca iguales los ángulos entre sí. Plantea la suma, resuelve y VERIFICA que ambos ángulos salgan agudos y complementarios.',
        desmos:'En Desmos (modo grados): sin(22) y cos(68) dan exactamente lo mismo, ≈0.3746. Prueba con x=59 (sin(160) vs cos(160)) y verás que no coinciden.',
        desmosLatex:['sin(22)', 'cos(68)']
      },
      {
        id:'XG-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Tangente del otro ángulo agudo',
        stem:'In right triangle JKL, the right angle is at K, and tan J = 8/15. What is the value of tan L?',
        choices:{A:'8/15', B:'8/17', C:'15/17', D:'15/8'},
        correct:'D',
        expCorrect:'J y L son los dos ángulos agudos, así que son complementarios. El cateto OPUESTO a J (8) es el ADYACENTE a L, y viceversa: la razón se INVIERTE. tan L = 15/8. (Formalmente: tan L = tan(90° − J) = 1/tan J = 15/8. Verifica: (8/15)(15/8) = 1 ✓.)',
        expWrong:{
          A:'8/15 es tan J, la trampa de repetir la razón sin voltearla. Los ángulos agudos de un triángulo rectángulo intercambian opuesto y adyacente: la tangente del otro ángulo es el RECÍPROCO.',
          B:'8/17 es sin J (o cos L), metiendo la hipotenusa 17 de la terna 8-15-17. Te pidieron tangente, que es cateto/cateto: la hipotenusa no entra.',
          C:'15/17 es cos J (o sin L). Otra vez aparece la hipotenusa, que la tangente no usa.'
        },
        tip:'Ángulos complementarios en el triángulo rectángulo: sin J = cos L, y tan J y tan L son RECÍPROCOS (su producto es 1). Si te dan tan de uno y piden tan del otro, solo voltea la fracción. Dibuja el triángulo si dudas.',
        desmos:'En Desmos: (8/15)*(15/8) da 1, confirmando que son recíprocos. Y en modo grados, arctan(8/15)+arctan(15/8) da 90: los dos ángulos son complementarios.',
        desmosLatex:['(8/15)*(15/8)', '15/8']
      },
      {
        id:'XG-10', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Radianes por proporción de arco',
        stem:'An arc on a circle has a length equal to 3/8 of the circumference of the circle. The measure of the central angle that intercepts the arc is kπ radians. What is the value of k?',
        answer:'3/4',
        expCorrect:'El ángulo central es la misma FRACCIÓN de la vuelta completa que el arco es de la circunferencia. Vuelta completa = 2π radianes, así que el ángulo = (3/8)(2π) = 6π/8 = 3π/4 radianes. Como el ángulo es kπ, k = 3/4 (o 0.75). (Verifica: (3π/4)/(2π) = 3/8 ✓.)',
        expWrong:{},
        tip:'Radianes por proporción: fracción del círculo × 2π. Errores típicos: multiplicar por π en vez de 2π (te daría 3/8) o por 360 (eso son grados). Si el SPR pide el k de "kπ radianes", tu respuesta NO lleva π: escribe solo el número. Acepta 3/4 o .75.',
        desmos:'En Desmos: (3/8)*2 da 3/4, que es el k de kπ. Si quieres el ángulo completo, (3/8)*2*pi da ≈2.356 = 3π/4 radianes.',
        desmosLatex:['(3/8)*2', '(3/8)*2*pi']
      },
      {
        id:'XG-11', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Volumen + tasa (conversión cm³ → litros)',
        stem:'A cylindrical tank has a base radius of 30 centimeters and a height of 100 centimeters. Water is pumped into the empty tank at a constant rate of 12 liters per minute. (1 liter = 1,000 cubic centimeters.) Which of the following is closest to the number of minutes required to fill the tank completely?',
        choices:{A:'8', B:'24', C:'94', D:'23,562'},
        correct:'B',
        expCorrect:'Volumen = πr²h = π(30)²(100) = 90,000π cm³ ≈ 282,743 cm³. Conversión escondida: 282,743 ÷ 1,000 ≈ 282.74 litros. Tiempo = 282.74 ÷ 12 ≈ 23.56 ≈ 24 minutos. (Camino limpio: 90,000π cm³ = 90π L; 90π/12 = 7.5π ≈ 23.56 ✓.)',
        expWrong:{
          A:'8 sale de olvidar el π: 90,000 cm³ "= 90 L" y 90/12 = 7.5 ≈ 8. El volumen del cilindro lleva π: son 90π ≈ 283 litros, no 90.',
          C:'94 sale de usar el diámetro 60 como si fuera el radio: π(60)²(100) = 360,000π cm³ = 360π L, y 360π/12 ≈ 94. En πr²h va el RADIO.',
          D:'23,562 es 90,000π/12 SIN convertir cm³ a litros: estás dividiendo centímetros cúbicos entre litros por minuto. Las unidades tienen que coincidir antes de dividir.'
        },
        tip:'Problemas de llenado: (1) volumen en cm³, (2) CONVIERTE a litros (÷1,000) — esta es la trampa enterrada, (3) divide entre la tasa. Chequeo de cordura: un tanque de ~283 L a 12 L/min debe tardar veintipico de minutos, no miles.',
        desmos:'En Desmos: pi*30^2*100/1000 da ≈282.7 litros. Luego 282.7/12 da ≈23.6 → 24 minutos. Todo en una línea: pi*30^2*100/1000/12.',
        desmosLatex:['pi*30^2*100/1000/12', 'pi*30^2*100/1000']
      },
      {
        id:'XG-12', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil', extreme:true,
        skill:'Volumen parcial + tasa (conversión de unidades)',
        stem:'A rectangular tank has a base that is 50 centimeters long and 40 centimeters wide, and the tank is 30 centimeters tall. The empty tank is filled with water at a constant rate of 2.4 liters per minute until the water reaches a depth of 27 centimeters. (1 liter = 1,000 cubic centimeters.) For how many minutes does the water flow?',
        answer:'22.5',
        expCorrect:'Ojo: el agua llega a 27 cm de profundidad, NO a los 30 cm del tanque. Volumen de agua = 50 × 40 × 27 = 54,000 cm³. Conversión: 54,000 ÷ 1,000 = 54 litros. Tiempo = 54 ÷ 2.4 = 22.5 minutos. (Verifica: 2.4 × 22.5 = 54 L = 54,000 cm³ ✓. Con la altura completa 30 saldría 60 L ÷ 2.4 = 25: esa es la respuesta trampa.) Respuesta: 22.5 (o 45/2).',
        expWrong:{},
        tip:'Dos trampas enterradas: (1) usa la PROFUNDIDAD del agua (27), no la altura del tanque (30) — el volumen que importa es el del agua; (2) convierte cm³ a litros antes de dividir entre la tasa. En el grid-in puedes escribir 22.5 o 45/2.',
        desmos:'En Desmos: 50*40*27/1000 da 54 litros de agua. Luego 54/2.4 da 22.5 minutos. Todo junto: 50*40*27/1000/2.4.',
        desmosLatex:['50*40*27/1000/2.4', '50*40*27/1000']
      }
    ]
  });
})();
