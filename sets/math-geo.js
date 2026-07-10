/* SAT Studio question set — Math: Geometry & Trigonometry (GEO-01 a GEO-10) */
(function(){
  var FIG_RIGHT_TRI =
    '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right triangle with hypotenuse 10, one leg 6 opposite angle theta">' +
    '<polygon points="30,140 210,140 30,30" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="30" y="126" width="14" height="14" fill="none" stroke="#1e1e1e" stroke-width="2"/>' +
    '<text x="120" y="158" font-size="16" font-family="Georgia,serif" text-anchor="middle">8</text>' +
    '<text x="8" y="90" font-size="16" font-family="Georgia,serif">6</text>' +
    '<text x="118" y="80" font-size="16" font-family="Georgia,serif" font-style="italic">10</text>' +
    '<text x="188" y="134" font-size="15" font-family="Georgia,serif">θ</text>' +
    '<text x="12" y="166" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_PARALLEL =
    '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two parallel lines cut by a transversal, one angle labeled 5x plus 12 and another 3x plus 48">' +
    '<line x1="20" y1="45" x2="280" y2="45" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="20" y1="110" x2="280" y2="110" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="70" y1="20" x2="230" y2="135" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<text x="150" y="38" font-size="14" font-family="Georgia,serif" text-anchor="end">(5x + 12)°</text>' +
    '<text x="158" y="128" font-size="14" font-family="Georgia,serif">(3x + 48)°</text>' +
    '<text x="286" y="49" font-size="14" font-family="Georgia,serif" fill="#324DC7">m</text>' +
    '<text x="286" y="114" font-size="14" font-family="Georgia,serif" fill="#324DC7">n</text>' +
    '<text x="12" y="146" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale. Lines m and n are parallel.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-geo',
    title: 'Math — Geometry & Trig',
    section: 'math',
    level: 'Difícil',
    description: 'Geometry & Trigonometry: area and volume, triangles, circles, and trigonometry.',
    minutes: 16,
    questions: [
      {
        id:'GEO-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Círculos (área y circunferencia)',
        stem:'A circle in the xy-plane has an area of 36π square units. What is the circumference of the circle?',
        choices:{A:'6π', B:'18π', C:'12π', D:'72π'},
        correct:'C',
        expCorrect:'Área = πr² = 36π → r² = 36 → r = 6. Circunferencia = 2πr = 2π(6) = 12π.',
        expWrong:{
          A:'6π usa el radio (6) como si fuera la circunferencia, olvidando el 2πr. 6 es solo el radio.',
          B:'18π sale de dividir el área entre 2 (36π / 2), que no es una fórmula válida.',
          D:'72π es 2 × 36π, es decir el doble del área, no la circunferencia.'
        },
        tip:'Siempre saca primero el radio. De πr² despejas r, y con r calculas lo que pidan (2πr para circunferencia). El área y la circunferencia NO son proporcionales entre sí.'
      },
      {
        id:'GEO-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Triángulo especial 45-45-90',
        stem:'In a right isosceles triangle, each of the two legs has a length of 7. What is the length of the hypotenuse?',
        choices:{A:'7', B:'7√2', C:'7√3', D:'14'},
        correct:'B',
        expCorrect:'En un triángulo 45-45-90, la hipotenusa = cateto × √2. Con cateto 7: hipotenusa = 7√2. (Comprobación con Pitágoras: 7² + 7² = 49 + 49 = 98, y √98 = 7√2.)',
        expWrong:{
          A:'7 es la longitud de un cateto, no de la hipotenusa. La hipotenusa siempre es el lado más largo.',
          C:'7√3 corresponde al triángulo 30-60-90, no al 45-45-90. Aquí el factor es √2.',
          D:'14 sería sumar los dos catetos (7 + 7). La hipotenusa nunca es la suma de los catetos.'
        },
        tip:'Memoriza los dos triángulos especiales: 45-45-90 → lados x, x, x√2. 30-60-90 → lados x, x√3, 2x. Están en el Reference Sheet, pero reconocerlos de memoria te ahorra segundos.'
      },
      {
        id:'GEO-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Fácil',
        skill:'Volumen (cilindro)',
        stem:'A right circular cylinder has a radius of 3 and a height of 10. What is the volume of the cylinder?',
        choices:{A:'90π', B:'60π', C:'30π', D:'300π'},
        correct:'A',
        expCorrect:'Volumen del cilindro = πr²h = π(3)²(10) = π(9)(10) = 90π.',
        expWrong:{
          B:'60π sale de π(2)(3)(10), confundiendo la fórmula del volumen con algo tipo “2rh” (área lateral / r).',
          C:'30π sale de π(3)(10): usaste el radio SIN elevarlo al cuadrado. La fórmula pide r².',
          D:'300π usa r = 10 y h = 3 mal, o eleva el 10 en vez del 3. Aquí r = 3, así que r² = 9.'
        },
        tip:'El error #1 en volúmenes es olvidar elevar el radio al cuadrado. Escribe siempre r² primero: 3² = 9, LUEGO multiplica por h. La fórmula está en el Reference Sheet.'
      },
      {
        id:'GEO-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Ecuación de la circunferencia',
        stem:'In the xy-plane, a circle has its center at (2, −3) and a radius of 5. Which of the following is an equation of the circle?',
        choices:{
          A:'(x − 2)² + (y + 3)² = 25',
          B:'(x + 2)² + (y − 3)² = 25',
          C:'(x − 2)² + (y + 3)² = 5',
          D:'(x + 2)² + (y − 3)² = 5'
        },
        correct:'A',
        expCorrect:'La forma estándar es (x − h)² + (y − k)² = r², con centro (h, k). Centro (2, −3) → (x − 2)² + (y − (−3))² = (x − 2)² + (y + 3)². Y r² = 5² = 25.',
        expWrong:{
          B:'(x + 2)² + (y − 3)² invierte los signos del centro: eso daría centro (−2, 3), no (2, −3).',
          C:'El centro está bien, pero el lado derecho debe ser r² = 25, no r = 5. Falta elevar el radio al cuadrado.',
          D:'Combina dos errores: signos del centro invertidos Y usa 5 en vez de 25.'
        },
        tip:'Dos trampas fijas: (1) los signos se INVIERTEN respecto al centro — centro (2, −3) da (x − 2) y (y + 3). (2) el lado derecho es r², no r. Radio 5 → 25.'
      },
      {
        id:'GEO-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Trigonometría del triángulo rectángulo (SOHCAHTOA)',
        figure: FIG_RIGHT_TRI,
        stem:'In the right triangle shown, the hypotenuse has length 10 and the leg opposite angle θ has length 6. What is the value of cos θ?',
        choices:{A:'3/5', B:'5/4', C:'3/4', D:'4/5'},
        correct:'D',
        expCorrect:'El cateto opuesto a θ mide 6 y la hipotenusa mide 10, así que el cateto adyacente = √(10² − 6²) = √(100 − 36) = √64 = 8. cos θ = adyacente / hipotenusa = 8/10 = 4/5.',
        expWrong:{
          A:'3/5 es sin θ (opuesto/hipotenusa = 6/10). Te pidieron el coseno, que usa el cateto ADYACENTE.',
          B:'5/4 es el recíproco de 4/5 (sería 1/cos, o sea sec θ). Un coseno en un triángulo nunca pasa de 1.',
          C:'3/4 es tan θ (opuesto/adyacente = 6/8). No es lo que piden.'
        },
        tip:'SOHCAHTOA: Coseno = Adyacente / Hipotenusa. Primero identifica quién es opuesto y quién adyacente respecto al ángulo. Aquí faltaba el adyacente: sácalo con Pitágoras (terna 6-8-10).'
      },
      {
        id:'GEO-06', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Triángulos semejantes',
        stem:'Triangle ABC is similar to triangle DEF, where vertices A, B, and C correspond to vertices D, E, and F, respectively. The length of side AB is 6 and the length of the corresponding side DE is 15. If the length of side BC is 8, what is the length of side EF?',
        answer:'20',
        expCorrect:'En triángulos semejantes, los lados correspondientes son proporcionales. La razón es DE/AB = 15/6 = 2.5. Entonces EF = BC × 2.5 = 8 × 2.5 = 20. (O por proporción: 6/15 = 8/EF → EF = 8·15/6 = 20.) Respuesta: 20.',
        expWrong:{},
        tip:'Semejanza = multiplicar por una RAZÓN (escala), nunca sumar. Arma la proporción lado/lado correspondiente = lado/lado y haz multiplicación en cruz. Confirma que la escala tenga sentido: aquí el triángulo grande es 2.5×.'
      },
      {
        id:'GEO-07', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Media',
        skill:'Círculos (longitud de arco)',
        stem:'A circle has a radius of 9. An arc of the circle is intercepted by a central angle of 40°. What is the length of the arc?',
        choices:{A:'π', B:'4π', C:'2π', D:'18π'},
        correct:'C',
        expCorrect:'Longitud de arco = (ángulo central / 360°) × circunferencia. Circunferencia = 2π(9) = 18π. Arco = (40/360)(18π) = (1/9)(18π) = 2π.',
        expWrong:{
          A:'π sale de tomar (40/360) del radio (9) en vez de la circunferencia (18π): (1/9)(9) = 1, y con π daría π. Debes usar la circunferencia.',
          B:'4π duplica el resultado, como si el radio fuera 18 o el ángulo 80°. La fracción correcta es 40/360 = 1/9.',
          D:'18π es la circunferencia COMPLETA (todo el círculo, 360°), no solo el arco de 40°.'
        },
        tip:'Arco y sector siempre son una FRACCIÓN del total: (ángulo/360). Arco → fracción × circunferencia (2πr). Sector → fracción × área (πr²). No mezcles radio con circunferencia.'
      },
      {
        id:'GEO-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Rectas paralelas y ángulos',
        figure: FIG_PARALLEL,
        stem:'In the figure, lines m and n are parallel and are cut by a transversal. The two marked angles have measures (5x + 12)° and (3x + 48)°. What is the value of x?',
        choices:{A:'12', B:'18', C:'22', D:'30'},
        correct:'B',
        expCorrect:'Los ángulos marcados son alternos internos, así que son iguales: 5x + 12 = 3x + 48. Restando 3x: 2x + 12 = 48 → 2x = 36 → x = 18. (Verifica: 5(18)+12 = 102 y 3(18)+48 = 102 ✓.)',
        expWrong:{
          A:'12 es solo el término constante del primer ángulo, no la solución de la ecuación. Debes igualar las dos expresiones y despejar x.',
          C:'22 sale de resolver mal la ecuación (por ejemplo 5x + 12 = 3x + 48 dando 2x = 44). El paso correcto es 2x = 36.',
          D:'30 sale de tratarlos como suplementarios (5x + 12 + 3x + 48 = 180 → 8x = 120 → x = 15) mal calculado, o de otro error de planteo. Estos ángulos son iguales, no suman 180.'
        },
        tip:'Con rectas paralelas: alternos internos y correspondientes son IGUALES; los que forman una línea recta (co-interiores del mismo lado y lineales) SUMAN 180. Identifica cuál caso es ANTES de plantear la ecuación.'
      },
      {
        id:'GEO-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Triángulo 30-60-90 (área)',
        stem:'In right triangle PQR, angle Q is 90°, angle R is 30°, and the hypotenuse PR has length 12. What is the area of triangle PQR?',
        choices:{A:'18', B:'36', C:'36√3', D:'18√3'},
        correct:'D',
        expCorrect:'Es un triángulo 30-60-90 con hipotenusa PR = 12 = 2x, así que x = 6. El lado opuesto a 30° (PQ) mide x = 6, y el opuesto a 60° (QR) mide x√3 = 6√3. Los catetos son PQ y QR (el ángulo recto está en Q). Área = (1/2)(6)(6√3) = 18√3.',
        expWrong:{
          A:'18 usa (1/2)(6)(6) = 18, olvidando que uno de los catetos es 6√3, no 6.',
          B:'36 sale de (1/2)(12)(6) usando la hipotenusa como cateto. La hipotenusa NO es un cateto; los catetos son 6 y 6√3.',
          C:'36√3 usa (1/2)(12)(6√3), otra vez tomando la hipotenusa (12) como base. Debes usar los dos catetos: 6 y 6√3.'
        },
        tip:'En 30-60-90 con hipotenusa 2x: el cateto corto (frente al 30°) es x y el largo (frente al 60°) es x√3. El área usa los dos CATETOS, nunca la hipotenusa. Ubica el ángulo recto para saber cuáles son los catetos.'
      },
      {
        id:'GEO-10', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Círculos (ecuación general → radio)',
        stem:'The equation x² + y² − 6x + 8y + 9 = 0 represents a circle in the xy-plane. What is the radius of the circle?',
        answer:'4',
        expCorrect:'Completa cuadrados. Para x: x² − 6x = (x − 3)² − 9. Para y: y² + 8y = (y + 4)² − 16. Sustituyendo: (x − 3)² − 9 + (y + 4)² − 16 + 9 = 0 → (x − 3)² + (y + 4)² = 16. Entonces r² = 16 → r = 4.',
        expWrong:{},
        tip:'Para pasar de la forma general a la estándar, completa cuadrados en x y en y por separado: toma la mitad del coeficiente lineal y elévala al cuadrado. Recuerda mover TODAS las constantes al lado derecho. El radio es √(lado derecho), no el lado derecho.'
      }
    ]
  });
})();
