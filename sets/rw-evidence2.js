/* SAT Studio question set — Reading & Writing: Command of Evidence — Set 2 (CE2-01 a CE2-12) */
window.SAT_SETS.push({
  id: 'rw-evidence2',
  title: 'Command of Evidence — Set 2',
  section: 'rw',
  level: 'Difícil',
  description: 'Textual and quantitative evidence: which finding or data point best supports/completes the claim.',
  minutes: 15,
  questions: [
    {
      id:'CE2-01', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Command of Evidence (textual)',
      passage:"A folklorist argues that a village's famous lullaby was not composed by a single author but grew slowly out of many singers adding lines over generations. She points out that no written version exists from before the 1900s and that older residents each remember slightly different verses.",
      stem:'Which finding, if true, would most directly support the folklorist’s argument?',
      choices:{
        A:'The lullaby is sung today at nearly every wedding and harvest festival in the village.',
        B:'A neighboring village has a lullaby with a completely different melody and words.',
        C:'Recordings made in different decades preserve noticeably different sets of verses for the same lullaby.',
        D:'The lullaby is considered one of the most beautiful songs in the region.'
      },
      correct:'C',
      expCorrect:'Su argumento es que la canción NO tiene un solo autor, sino que fue creciendo con versos que muchos cantantes fueron sumando. C lo apoya directo: grabaciones de distintas décadas guardan versos distintos → la canción fue cambiando de boca en boca, tal como ella dice.',
      expWrong:{
        A:'Que se cante en bodas y cosechas dice que es popular hoy, pero no dice nada sobre CÓMO se compuso ni si tuvo un solo autor.',
        B:'La canción de otro pueblo es otra cosa distinta; no informa sobre el origen colectivo de ESTA canción.',
        D:'Que sea bella es una opinión de valor; no toca si se creó entre muchos o un solo autor.'
      },
      tip:'Vuelve al CLAIM exacto (creció entre muchos, sin un solo autor) y pregunta: ¿esta opción lo apoya directamente? Busca la que muestra el cambio con el tiempo, no la que solo dice que es popular o linda.'
    },
    {
      id:'CE2-02', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Command of Evidence (textual)',
      passage:"A teacher claims that letting students explain their reasoning out loud to a partner helps them catch their own mistakes better than working silently. To test this, she compared two of her classes: one that worked through problems silently and one that talked through each step with a partner.",
      stem:'Which finding, if true, would most directly support the teacher’s claim?',
      choices:{
        A:'Students in both classes said they preferred solving problems in the way their class was assigned.',
        B:'Students who explained their reasoning aloud to a partner corrected far more of their own errors than students who worked silently.',
        C:'The silent class finished the problem set a few minutes faster than the talking class.',
        D:'Both classes had studied the same material during the previous week.'
      },
      correct:'B',
      expCorrect:'Su afirmación es que explicar en voz alta a un compañero ayuda a ATRAPAR los propios errores más que trabajar en silencio. B lo dice exacto: los que explicaron en voz alta corrigieron muchos más errores propios que los del silencio. Compara justo las dos variables de la afirmación.',
      expWrong:{
        A:'Qué método PREFIEREN los estudiantes es un gusto, no mide si atrapan más errores. No apoya la afirmación.',
        C:'Terminar más rápido en silencio habla de velocidad, no de corregir errores; incluso podría ir en contra de hablar.',
        D:'Que estudiaran el mismo material es un control de método justo, pero no muestra que hablar ayude a corregir más.'
      },
      tip:'Vuelve al CLAIM exacto (hablar en voz alta → atrapar más errores propios) y pregunta: ¿esta opción lo apoya directamente? La correcta compara ESAS dos variables, no la preferencia ni la velocidad.'
    },
    {
      id:'CE2-03', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence (quantitative)',
      passage:"A city tracked how residents commuted before and after opening a protected bike lane on Main Street. In a survey of 1,000 commuters, the share who biked to work rose from 8% before the lane opened to 21% after, while the share who drove alone fell from 62% to 49%. The shares using the bus (about 20%) and walking (about 10%) stayed roughly the same.",
      stem:'Which choice most effectively uses data from the survey to support the idea that the new bike lane drew people away from driving alone?',
      choices:{
        A:'The share of commuters who biked rose from 8% to 21% after the lane opened.',
        B:'As biking rose from 8% to 21%, driving alone fell by a comparable amount, from 62% to 49%, while bus and walking shares barely changed.',
        C:'The share of commuters who took the bus stayed at about 20% both before and after the lane opened.',
        D:'After the lane opened, driving alone was still the most common way to commute, at 49%.'
      },
      correct:'B',
      expCorrect:'La idea es que el carril de bici jaló gente que ANTES manejaba sola. B usa los datos para mostrarlo: bici subió casi lo mismo (13 puntos) que lo que bajó manejar solo (13 puntos), mientras bus y caminar casi no cambiaron. Ese casi-empate sugiere que el traspaso vino de los que manejaban.',
      expWrong:{
        A:'Que la bici subiera es cierto, pero por sí solo no dice DE DÓNDE vino esa gente; podrían haber dejado de caminar o de tomar bus.',
        C:'Que el bus quedara en ~20% muestra que NO cambió; no explica el aumento de la bici ni conecta con manejar solo.',
        D:'Que manejar solo siga siendo lo más común (49%) es verdad, pero apunta a que muchos siguen manejando; no muestra el traspaso hacia la bici.'
      },
      tip:'Para datos, lee bien los números y compara los cambios: la correcta empareja la SUBIDA de bici con la BAJADA de manejar solo (13 puntos ambos) y descarta las otras opciones que casi no se movieron.'
    },
    {
      id:'CE2-04', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence (quantitative)',
      passage:"A researcher measured how quickly four materials cooled a room, recording the drop in temperature (°C) after one hour with each installed. The results were: white paint on the roof, 4.0°C; a reflective metal coating, 6.5°C; green plants covering the roof, 3.0°C; and no treatment (bare roof), 0.5°C. The researcher claimed the reflective metal coating cooled the room most effectively.",
      stem:'Which choice most effectively uses data from the study to support the researcher’s claim?',
      choices:{
        A:'White paint produced a temperature drop of 4.0°C, more than the bare roof’s 0.5°C.',
        B:'Green plants on the roof produced a temperature drop of 3.0°C after one hour.',
        C:'The bare roof produced the smallest temperature drop, at 0.5°C.',
        D:'The reflective metal coating produced a temperature drop of 6.5°C, the largest of the four options tested.'
      },
      correct:'D',
      expCorrect:'La afirmación es que el recubrimiento metálico reflectante enfría MÁS. D usa el dato correcto: 6.5°C, la mayor caída de las cuatro. Al ser la más grande, respalda que ese material fue el más efectivo.',
      expWrong:{
        A:'La pintura blanca (4.0°C) enfría, pero menos que el metal; citarla no apoya que el METAL sea el mejor.',
        B:'Las plantas (3.0°C) son de las que MENOS enfrían; ese dato no respalda que el metal gane.',
        C:'El techo pelado (0.5°C) muestra la caída MÁS pequeña; no dice cuál es la mejor opción, solo la peor.'
      },
      tip:'Vuelve al CLAIM exacto (el metal enfría MÁS) y busca en la tabla el número MAYOR de caída: 6.5°C. La correcta cita ese dato; las otras citan materiales que enfrían menos.'
    },
    {
      id:'CE2-05', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence (textual)',
      passage:"A literary scholar contends that a nineteenth-century novelist revised her most famous book to make its heroine less obedient and more outspoken. The scholar bases this on comparing the novel's first handwritten draft with its final published version.",
      stem:'Which finding, if true, would most directly support the scholar’s contention?',
      choices:{
        A:'In the published version, the heroine openly argues with her guardian in scenes where the early draft had her silently obey.',
        B:'The novelist wrote several other books featuring strong-willed female characters.',
        C:'The published novel sold far more copies than the author’s earlier works.',
        D:'The handwritten draft was written in the same year the novel was eventually published.'
      },
      correct:'A',
      expCorrect:'Su tesis es que la autora REVISÓ el libro para volver a la heroína menos obediente y más habladora. A lo prueba directo: en la versión final la heroína discute abiertamente donde en el borrador solo obedecía en silencio. Ese contraste borrador→final es justo el cambio que él afirma.',
      expWrong:{
        B:'Que la autora escribiera OTROS libros con mujeres fuertes no muestra que cambiara ESTE libro entre borrador y publicación.',
        C:'Cuántas copias vendió mide popularidad, no si revisó a la heroína para hacerla más franca.',
        D:'En qué año se escribió el borrador es un dato de fechas; no dice si el personaje cambió de obediente a franca.'
      },
      tip:'Vuelve al CLAIM exacto (revisó borrador→final para hacerla más franca) y pregunta: ¿esta opción lo apoya directamente? La correcta compara las DOS versiones y muestra el cambio; las demás hablan de otros libros, ventas o fechas.'
    },
    {
      id:'CE2-06', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Command of Evidence (quantitative)',
      passage:"An agronomist tested whether a new watering schedule increases tomato yield. She grew plants in four groups and recorded the average fruit per plant: watered daily, 18 tomatoes; watered every 3 days, 26 tomatoes; watered weekly, 22 tomatoes; and watered every 2 weeks, 11 tomatoes. She hypothesized that watering every three days produces the highest yield.",
      stem:'Which choice most effectively uses data from the study to support the agronomist’s hypothesis?',
      choices:{
        A:'Plants watered daily produced 18 tomatoes per plant, more than plants watered every 2 weeks.',
        B:'Plants watered weekly produced 22 tomatoes per plant, a moderate yield.',
        C:'Plants watered every 3 days produced 26 tomatoes per plant, more than any other watering schedule tested.',
        D:'Plants watered every 2 weeks produced only 11 tomatoes per plant, the lowest yield.'
      },
      correct:'C',
      expCorrect:'La hipótesis es que regar cada 3 días da el MAYOR rendimiento. C usa el dato exacto: 26 tomates por planta, más que cualquier otro horario. Al ser el número más alto de los cuatro, respalda su hipótesis directamente.',
      expWrong:{
        A:'El riego diario (18) supera al de cada 2 semanas, pero no llega a 26; ese dato no muestra que cada 3 días sea el mejor.',
        B:'El riego semanal (22) es un rendimiento medio, menor que 26; no apoya que cada 3 días gane.',
        D:'Cada 2 semanas (11) es el PEOR; dice cuál es el más bajo, no que cada 3 días sea el más alto.'
      },
      tip:'Vuelve al CLAIM exacto (cada 3 días = MÁS tomates) y busca el número mayor: 26. La correcta cita ese máximo; las otras citan valores menores que no prueban la hipótesis.'
    },
    {
      id:'CE2-07', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Command of Evidence (textual)',
      passage:"A biographer argues that an inventor's success came less from sudden flashes of genius than from stubborn, repeated trial and error. To make this case, the biographer draws on the inventor's personal notebooks.",
      stem:'Which quotation from the notebooks would most effectively support the biographer’s argument?',
      choices:{
        A:'“Attempt no. 214 failed like the rest, but each failure showed me one more path I need not try again.”',
        B:'“Today I woke with the whole design complete in my mind, as if it had arrived overnight.”',
        C:'“The city has finally agreed to fund a proper workshop for my experiments.”',
        D:'“My rival across town claims to have built something similar, though I doubt it works.”'
      },
      correct:'A',
      expCorrect:'Su argumento es que el éxito vino de ensayo y error TERCO y repetido, no de chispazos de genio. A lo ilustra perfecto: “intento no. 214 falló… cada fracaso me mostró un camino menos que probar”. Muestra la insistencia paso a paso que él defiende.',
      expWrong:{
        B:'Despertar con el diseño COMPLETO “de la noche a la mañana” es justo el chispazo de genio que el biógrafo DESCARTA. Va en dirección contraria.',
        C:'Que la ciudad financie un taller habla de recursos, no de si el éxito vino de insistir con prueba y error.',
        D:'Comentar sobre un rival no dice nada sobre el propio método del inventor. Irrelevante a la afirmación.'
      },
      tip:'Ojo con el “less… than…” (menos por genio que por insistir). Vuelve al CLAIM y elige la cita que ESCENIFICA la insistencia (intento 214, fallar y seguir); la del chispazo repentino es la trampa.'
    },
    {
      id:'CE2-08', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (quantitative)',
      passage:"A public-health team surveyed 2,000 people about a new walking-path network and recorded weekly exercise minutes by distance from the nearest path. Those living within 500 meters averaged 150 minutes per week; those 500–1,500 meters away averaged 110 minutes; and those more than 1,500 meters away averaged 95 minutes. The team concluded that living closer to a path was associated with more weekly exercise.",
      stem:'Which choice most effectively uses data from the survey to support the team’s conclusion?',
      choices:{
        A:'People living more than 1,500 meters from a path still averaged 95 minutes of exercise per week.',
        B:'People living 500–1,500 meters from a path averaged 110 minutes of exercise per week.',
        C:'As distance from the nearest path increased, average weekly exercise fell steadily, from 150 minutes within 500 meters to 95 minutes beyond 1,500 meters.',
        D:'The survey included 2,000 people living at various distances from the path network.'
      },
      correct:'C',
      expCorrect:'La conclusión es que vivir MÁS CERCA se asocia con MÁS ejercicio. C usa los tres datos en orden para mostrar la tendencia completa: a más distancia, menos minutos (150 → 110 → 95). Ese descenso parejo es exactamente la asociación que el equipo afirma.',
      expWrong:{
        A:'Citar solo el grupo lejano (95 min) da un punto suelto; sin comparar con los cercanos no muestra la tendencia por distancia.',
        B:'El grupo intermedio (110 min) por sí solo tampoco muestra la relación; falta compararlo con los otros dos.',
        D:'Que fueran 2,000 personas describe el TAMAÑO de la muestra, no la relación entre distancia y ejercicio.'
      },
      tip:'Para datos, la mejor evidencia de una TENDENCIA usa los extremos o toda la serie en orden (150→110→95), no un solo punto. Lee la variable del eje (distancia) y sigue cómo cambia el otro número.'
    },
    {
      id:'CE2-09', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"A historian claims that a coastal town's decline in the 1800s was driven mainly by the silting-up of its harbor, which left large ships unable to dock, rather than by the epidemics often blamed in popular histories. She argues the two causes can be separated by looking at the timing of events.",
      stem:'Which finding, if true, would most strongly support the historian’s claim?',
      choices:{
        A:'Town trade records show shipping volume collapsed in the years the harbor silted up, well before the first major epidemic struck.',
        B:'Several coastal towns in the region suffered epidemics during the same century.',
        C:'The town’s population had been slowly rising for decades before the 1800s.',
        D:'Written accounts describe the epidemics as frightening events that residents long remembered.'
      },
      correct:'A',
      expCorrect:'Su tesis es que el declive vino del PUERTO azolvado (no de las epidemias), y que se distinguen por el TIEMPO. A da justo eso: el comercio se desplomó cuando se azolvó el puerto, BIEN ANTES de la primera epidemia. Si el daño ocurrió antes de la epidemia, la causa fue el puerto, como ella dice.',
      expWrong:{
        B:'Que otras ciudades tuvieran epidemias no separa las causas en ESTA ciudad ni fija el orden temporal.',
        C:'Que la población subiera ANTES de 1800 es contexto previo; no dice qué causó el declive posterior ni el orden puerto/epidemia.',
        D:'Que las epidemias fueran memorables refuerza la explicación RIVAL (epidemias); no apoya la del puerto.'
      },
      tip:'Cuando el claim es “por A, no por B” y se apoya en el TIEMPO, busca la opción que fija el orden: A ocurrió ANTES que B. Aquí, el comercio cae antes de la epidemia → la causa fue el puerto.'
    },
    {
      id:'CE2-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (quantitative)',
      passage:"A study tested whether a reading app improved comprehension, comparing scores before and after eight weeks. Group 1 used the app plus a weekly tutor and rose from 60 to 78 points. Group 2 used the app alone and rose from 61 to 65 points. Group 3 met with the tutor but used no app and rose from 59 to 74 points. A researcher concluded that the app alone did little to improve comprehension.",
      stem:'Which choice most effectively uses data from the study to support the researcher’s conclusion?',
      choices:{
        A:'Group 1, which used the app plus a tutor, achieved the highest final score, 78 points.',
        B:'Group 2, which used the app alone, rose only 4 points (61 to 65), far less than the tutor-only group’s 15-point gain (59 to 74).',
        C:'Group 3, which met with a tutor but used no app, rose from 59 to 74 points.',
        D:'All three groups showed at least some improvement in comprehension over the eight weeks.'
      },
      correct:'B',
      expCorrect:'La conclusión es que la app SOLA sirvió de poco. B lo prueba comparando: la app sola subió apenas 4 puntos, muy por debajo del tutor solo, que subió 15. Al ser la app sola la de menor mejora, respalda que por sí misma aporta poco.',
      expWrong:{
        A:'El Grupo 1 (app + tutor) tuvo el mejor puntaje final, pero incluye al tutor; no aísla el efecto de la app SOLA.',
        C:'El Grupo 3 (tutor sin app) subió 15 puntos; muestra que el tutor ayuda, no que la app sola sirva poco.',
        D:'Que las tres subieran “algo” es vago y hasta va en contra: sugeriría que la app también ayudó. No aísla su efecto.'
      },
      tip:'Para aislar el efecto de UNA cosa (la app sola), compara el grupo que solo usó eso contra los demás. Lee bien las subidas: 4 puntos (app sola) vs. 15 (tutor solo) es lo que apoya “la app sola sirvió poco”.'
    },
    {
      id:'CE2-11', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"Ecologists reintroduced a native wildflower to a meadow, predicting that its return would bring back a rare butterfly that feeds only on that flower. Skeptics argued the butterfly had vanished for reasons unrelated to the flower and would not return. Two years later, the ecologists surveyed the meadow.",
      stem:'Which finding, if true, would most directly support the ecologists’ prediction?',
      choices:{
        A:'The reintroduced wildflower was the same variety that had once grown throughout the meadow.',
        B:'Visitors to the meadow reported enjoying the return of the colorful wildflowers.',
        C:'Other butterfly species, which feed on many kinds of plants, were seen across the region that year.',
        D:'In the areas where the wildflower re-established itself, the rare butterfly reappeared, while nearby meadows still lacking the flower had none.'
      },
      correct:'D',
      expCorrect:'La predicción es que devolver la flor traería de vuelta a la mariposa que solo come de esa flor. D une la causa con el efecto y agrega contraste: donde volvió la flor, volvió la mariposa; en prados vecinos SIN la flor, no había mariposa. Ese contraste ata el regreso de la mariposa a la flor.',
      expWrong:{
        A:'Que sea la misma variedad histórica es contexto; no muestra que la mariposa haya vuelto por la flor.',
        B:'Que a los visitantes les gusten las flores es irrelevante para si la mariposa regresó.',
        C:'OTRAS mariposas que comen muchas plantas no dicen nada sobre la mariposa rara que solo come esta flor.'
      },
      tip:'La mejor evidencia enfrenta lo predicho con un contraste: donde ocurrió la causa (volvió la flor) vs. donde no. “Con flor volvió la mariposa, sin flor no” es lo que ata causa y efecto.'
    },
    {
      id:'CE2-12', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (quantitative)',
      passage:"A nutrition team compared four snacks for how long they kept people feeling full, asking volunteers to record the hours until they felt hungry again. Averages were: potato chips, 1.5 hours; apple slices, 2.5 hours; almonds, 4.0 hours; and white crackers, 1.8 hours. The team wants to recommend the snack that keeps people full longest.",
      stem:'Which choice most effectively uses data from the study to complete the team’s recommendation?',
      choices:{
        A:'The team should recommend apple slices, which kept volunteers full for 2.5 hours.',
        B:'The team should recommend white crackers, which kept volunteers full slightly longer than potato chips.',
        C:'The team should recommend potato chips, which kept volunteers full for the shortest time, 1.5 hours.',
        D:'The team should recommend almonds, which kept volunteers full for 4.0 hours, longer than any other snack tested.'
      },
      correct:'D',
      expCorrect:'La meta es recomendar el snack que mantiene lleno MÁS tiempo. D usa el dato correcto: las almendras, con 4.0 horas, superan a todos. Al ser el número más alto de saciedad, completa la recomendación como el equipo quiere.',
      expWrong:{
        A:'La manzana (2.5 h) llena bastante, pero menos que las almendras; no es el máximo, así que no completa bien la recomendación.',
        B:'Las galletas (1.8 h) apenas superan a las papas; están entre las que MENOS llenan. Mala lectura del objetivo.',
        C:'Las papas (1.5 h) son las que llenan por MENOS tiempo; es justo lo contrario de lo que se busca recomendar.'
      },
      tip:'Vuelve al CLAIM exacto (llenar por MÁS tiempo) y busca el número MAYOR de horas: 4.0 (almendras). La correcta cita ese máximo; las demás confunden el objetivo con valores menores o el mínimo.'
    }
  ]
});
