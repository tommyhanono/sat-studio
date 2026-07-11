/* SAT Studio — Desmos how-to hints for Math Hard sets (circles, geo, data) */
/* Cada entrada: { note: consejo en español (Panamá), latex: [expresiones para teclear en Desmos] } */
window.SAT_DESMOS = Object.assign(window.SAT_DESMOS || {}, {

  /* ===== math-hard-circles (HMC) ===== */
  'HMC-01': {
    note:'Escribe la ecuación general tal cual en Desmos y te dibuja la circunferencia; el centro es el punto medio de la figura. Grafica también (-5,2) para confirmar que cae justo en el centro.',
    latex:['x^2+y^2+10x-4y-7=0', '(-5,2)']
  },
  'HMC-02': {
    note:'Desmos como calculadora: teclea la fórmula del área de sector (1/2)r²θ con r=6 y θ=2π/3 y te da 12π ≈ 37.7. Recuerda el 1/2 y el radio al cuadrado.',
    latex:['(1/2)*6^2*(2*pi/3)']
  },
  'HMC-03': {
    note:'Usa Desmos de calculadora: teclea rθ con r=10 y θ=3π/5 y obtienes 6π ≈ 18.85. La longitud de arco NO lleva el 1/2 (ese es del área).',
    latex:['10*(3*pi/5)']
  },
  'HMC-04': {
    note:'Grafica la circunferencia x²+y²=25 y el punto (3,4); agrega la recta y=(-3/4)(x-3)+4 y verás que solo roza el círculo en ese punto (tangente). Con pendiente 4/3 cortaría en dos puntos.',
    latex:['x^2+y^2=25', '(3,4)', 'y=(-3/4)(x-3)+4']
  },
  'HMC-05': {
    note:'Grafica el círculo x²+y²=8 y la recta y=x+c con un deslizador para c; mueve c hasta que la recta toque el círculo en un solo punto (tangente): pasa en c=4.',
    latex:['x^2+y^2=8', 'y=x+c', 'y=x+4']
  },
  'HMC-06': {
    note:'Marca los dos puntos y deja que Desmos calcule la pendiente de ℓ tecleando (5-(-1))/(6-2)=1.5. La perpendicular es el recíproco negativo: -1/1.5 = -2/3.',
    latex:['(2,-1)', '(6,5)', '(5-(-1))/(6-2)', '-1/((5-(-1))/(6-2))']
  },
  'HMC-07': {
    note:'Grafica 4x−2y=10 para ver su pendiente (2) y luego y=2x+1; comprueba que sean paralelas (misma inclinación) y que la nueva pase por (1,3).',
    latex:['4x-2y=10', '(1,3)', 'y=2x+1']
  },
  'HMC-08': {
    note:'Desmos como calculadora: escribe la fórmula de distancia con las coordenadas y te da 10. Ojo con restar el negativo: 4-(-2)=6.',
    latex:['\\sqrt{(4-(-2))^2+(-5-3)^2}']
  },
  'HMC-09': {
    note:'Marca A y M y deja que Desmos calcule B=2M−A tecleando el punto (2*5-1, 2*2-(-4)); cae en (9,8). Grafica los tres y verifica que M queda en medio.',
    latex:['(1,-4)', '(5,2)', '(2*5-1,2*2-(-4))']
  },
  'HMC-10': {
    note:'Grafica los dos extremos del diámetro y la circunferencia (x-2)²+(y-6)²=25; verás que ambos puntos caen sobre ella y que el centro (2,6) queda justo en medio.',
    latex:['(-1,2)', '(5,10)', '(x-2)^2+(y-6)^2=25']
  },
  'HMC-11': {
    note:'Escribe la ecuación general y Desmos dibuja la circunferencia; para leer el radio grafica también (x-4)²+(y+3)²=4, que confirma centro (4,-3) y radio √4=2.',
    latex:['x^2+y^2-8x+6y+21=0', '(x-4)^2+(y+3)^2=4']
  },
  'HMC-12': {
    note:'Desmos como calculadora: primero OP=√(9²+12²)=15, luego la longitud de tangente PT=√(OP²−r²). Teclea √(9²+12²−9²) y obtienes 12.',
    latex:['\\sqrt{9^2+12^2}', '\\sqrt{(9^2+12^2)-9^2}']
  },

  /* ===== math-hard-geo (HMG) ===== */
  'HMG-01': {
    note:'Usa Desmos de calculadora. Primero saca el radio del volumen: (288·3/4)^(1/3)=6. Luego el área 4πr²: teclea 4*pi*6^2 y da 144π ≈ 452.4.',
    latex:['(288*3/4)^(1/3)', '4*pi*6^2']
  },
  'HMG-02': {
    note:'Es conceptual: como V=πr²h y el radio va al cuadrado, multiplicar r por 3 multiplica el volumen por 3². Teclea 3^2 en Desmos y confirma el 9.',
    latex:['3^2']
  },
  'HMG-03': {
    note:'Desmos como calculadora: teclea la fórmula del cono (1/3)πr²h con r=6 y h=8, y obtienes 96π ≈ 301.6. No olvides el 1/3 y que el radio (6) es el que va al cuadrado.',
    latex:['(1/3)*pi*6^2*8']
  },
  'HMG-04': {
    note:'Suma las dos piezas en Desmos: cilindro πr²h más hemisferio (2/3)πr³. Teclea pi*3^2*10+(2/3)*pi*3^3 y da 108π ≈ 339.3.',
    latex:['pi*3^2*10+(2/3)*pi*3^3']
  },
  'HMG-05': {
    note:'Desmos de calculadora: dos tapas más el lateral, 2πr²+2πrh con r=4 y h=10. Teclea 2*pi*4^2+2*pi*4*10 y obtienes 112π ≈ 351.9.',
    latex:['2*pi*4^2+2*pi*4*10']
  },
  'HMG-06': {
    note:'La razón de áreas es el cuadrado de la razón de lados. En Desmos teclea 12*(5/2)^2 y da 75.',
    latex:['12*(5/2)^2']
  },
  'HMG-07': {
    note:'Desmos como calculadora: el lado opuesto a 60° es x√3 con x=5√3, o sea (5√3)(√3). Teclea 5*sqrt(3)*sqrt(3) y da 15 (el √3·√3=3 elimina el radical).',
    latex:['5*\\sqrt{3}*\\sqrt{3}']
  },
  'HMG-08': {
    note:'Atajo en Desmos: área de un cuadrado = diagonal²/2. Teclea 10^2/2 y obtienes 50.',
    latex:['10^2/2']
  },
  'HMG-09': {
    note:'cos θ = adyacente/hipotenusa. En Desmos teclea 12/15 y da 0.8 = 4/5.',
    latex:['12/15']
  },
  'HMG-10': {
    note:'A y B son complementarios, así que cos B = sin A = 0.6. Puedes verificarlo en Desmos (modo radianes) tecleando cos(π/2 − arcsin(0.6)), que da 0.6.',
    latex:['cos(pi/2-arcsin(0.6))']
  },
  'HMG-11': {
    note:'El área crece con el cuadrado del factor de escala. Doblar la arista (×2) multiplica el área por 2²; teclea 2^2 en Desmos y da 4 (el volumen sería 2³=8).',
    latex:['2^2']
  },
  'HMG-12': {
    note:'Con la misma base y altura el cono es 1/3 del cilindro. En Desmos teclea (1/3)*60 y obtienes 20.',
    latex:['(1/3)*60']
  },

  /* ===== math-hard-data (HMD) ===== */
  'HMD-01': {
    note:'Porcentaje inverso en Desmos: bajar 25% es ×0.75, así que el original es 90 dividido entre 0.75. Teclea 90/0.75 y da 120.',
    latex:['90/0.75']
  },
  'HMD-02': {
    note:'Cambios sucesivos se multiplican, no se suman: teclea 1.30*0.80 en Desmos y da 1.04, o sea un aumento neto del 4%.',
    latex:['1.30*0.80']
  },
  'HMD-03': {
    note:'Probabilidad condicional: la frase "prefiere online" fija el denominador en esa columna (112). Teclea 84/112 en Desmos y da 0.75.',
    latex:['84/112']
  },
  'HMD-04': {
    note:'Promedio ponderado en Desmos: multiplica cada grupo por su cantidad, suma y divide entre el total. Teclea (18*80+12*90)/30 y da 84.',
    latex:['(18*80+12*90)/30']
  },
  'HMD-05': {
    note:'Usa listas en Desmos: define A (con el 12) y B (con el 40) y compara mean y median de cada una. La median se queda en 8 y la media sube de ≈7.6 a ≈11.6.',
    latex:['A=[3,5,6,8,9,10,12]', 'B=[3,5,6,8,9,10,40]', 'mean(A)', 'median(A)', 'mean(B)', 'median(B)']
  },
  'HMD-06': {
    note:'Mete cada conjunto como lista en Desmos y compara la dispersión con stdev(R) y stdev(S); la de S sale mucho mayor (≈15.8 vs ≈3.2), así que S tiene más desviación estándar.',
    latex:['R=[46,48,50,52,54]', 'S=[30,40,50,60,70]', 'stdev(R)', 'stdev(S)']
  },
  'HMD-07': {
    note:'Condicional: la frase "no leyó el libro" fija el denominador en esa fila (150). De esos, 60 sí gustaron: teclea 60/150 en Desmos y da 0.40.',
    latex:['60/150']
  },
  'HMD-08': {
    note:'Infinitas soluciones = misma recta. Divide la primera entre 2: teclea 10/2 y da c=5. Puedes graficar 6x+4y=10 y 3x+2y=5 para ver que se superponen.',
    latex:['10/2', '6x+4y=10', '3x+2y=5']
  },
  'HMD-09': {
    note:'Grafica 3x+2y=16 y 2x+4y=16 en Desmos (x=hot dog, y=bebida) y haz clic en el cruce: cae en (4,2), así que el hot dog cuesta $4.',
    latex:['3x+2y=16', '2x+4y=16']
  },
  'HMD-10': {
    note:'Cambios sucesivos se multiplican: teclea 1.40*0.75 en Desmos y da 1.05, o sea el precio final es 105% del original.',
    latex:['1.40*0.75']
  },
  'HMD-11': {
    note:'Porcentaje inverso: subir 15% es ×1.15, así que el original es 460 dividido entre 1.15. Teclea 460/1.15 en Desmos y da 400.',
    latex:['460/1.15']
  },
  'HMD-12': {
    note:'Grafica x+y=40 y 6x+10y=312 en Desmos (x=pequeñas, y=grandes) y haz clic en el cruce: (22,18), así que se vendieron 18 velas grandes.',
    latex:['x+y=40', '6x+10y=312']
  }

});
