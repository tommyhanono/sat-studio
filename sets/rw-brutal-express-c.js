/* SAT Studio question set — Reading & Writing: Expression of Ideas — Brutal (BEX-01 to BEX-34) */
/* 34 preguntas del tier brutal (difficulty:'Difícil' + extreme:true) del dominio que
   frena los simulacros brutales: Expression of Ideas. Reparto 17 Transitions / 17
   Rhetorical Synthesis, intercalado (impares Transitions, pares Rhetorical Synthesis).

   Lo que hace brutales a las 17 de Transitions no son los sinonimos: es el TEXTO.
   Seis mecanismos, y ninguna se contesta leyendo solo la oracion que sigue al blanco:
     · La relacion va al reves del orden de las oraciones: la segunda explica o
       justifica la primera en vez de seguirla (BEX-01, BEX-07, BEX-15).
     · Ejemplo contra generalizacion, con la oracion siguiente haciendo las dos cosas
       a medias (BEX-07, BEX-21, BEX-29).
     · El pasaje YA trae un conector adentro ('although', 'but', 'in principle') y el
       estudiante gasta ahi el contraste que el blanco no pide (BEX-09, BEX-13, BEX-15,
       BEX-33).
     · Contraste DENTRO de una concesion: el autor concede y despues se devuelve, asi
       que 'Granted' y 'Still' caen en oraciones distintas (BEX-05, BEX-11, BEX-19).
     · La trampa academica: 'Moreover'/'Furthermore'/'In particular' cuando la relacion
       es de contraste o de causa, no de suma (BEX-03, BEX-21, BEX-29, BEX-33).
     · Dos opciones de la misma familia separadas por una regla con nombre
       (BEX-17, BEX-23, BEX-25, BEX-27, BEX-31): By contrast contra Even so (dos sujetos
       comparados contra un obstaculo superado), Instead contra Alternatively (lo ya
       descartado contra lo todavia abierto), On the contrary contra However (la
       correccion de una negacion contra el choque de dos afirmaciones), Namely contra
       For example (el unico item prometido contra uno de varios) y Otherwise contra
       As a result (el mundo contrafactual contra el efecto real).
   A proposito NO se enfrentan sinonimos exactos (however/nevertheless en un caso
   concesivo, therefore/thus, in other words/that is): ahi las dos son defendibles y la
   pregunta estaria rota, no dificil.

   Las 17 de Rhetorical Synthesis van con la meta como unico corte, y casi todas las
   opciones son VERDADERAS segun las vinetas. Seis formas de meta:
     · meta compuesta, con un 'and' que son dos requisitos (BEX-02, BEX-12, BEX-14,
       BEX-24, BEX-34)
     · comparacion, donde tres opciones dan un solo lado (BEX-06, BEX-18, BEX-28)
     · enfatizar una DIFERENCIA, con las tentadoras enfatizando la semejanza
       (BEX-08, BEX-20, BEX-30)
     · una vineta que CONTRADICE la corriente principal y una meta que pide meterla
       (BEX-10, BEX-22, BEX-32)
     · lector concreto: para quien no conoce el campo gana la mas explicativa, y para
       especialistas gana la mas precisa (BEX-04, BEX-16, BEX-26) */
window.SAT_SETS.push({
  id: 'rw-brutal-express-c',
  title: 'Expression of Ideas — Brutal',
  section: 'rw',
  level: 'Extreme',
  description: 'Thirty-four brutal Expression of Ideas questions: seventeen transitions in which the logic runs against the order of the sentences, and seventeen notes questions in which every choice is true and only the goal decides.',
  minutes: 38,
  questions: [
    {
      id:'BEX-01', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — the second sentence gives the reason, not the result',
      passage:'Divers working the wreck in Sabre Strait spend more of each season photographing bare seabed than photographing the hull. %BLANK% a ship that breaks up as it sinks scatters its barrels and its ballast over a hundred meters of sand, and the shape of that scatter is the only surviving record of which way the vessel was pointing when it went down. The hull itself, half buried and scoured by the current, says almost nothing about the last minutes of the voyage.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'As a result,', B:'After all,', C:'Even so,', D:'Similarly,'},
      correct:'B',
      expCorrect:'The blank sits between a practice — photographing empty sand — and the fact that makes the practice sensible: the scatter is the record. The second sentence is not what the first produced; it is why the first is done, and ‘After all’ is the transition that offers a justification for what was just said.',
      expWrong:{
        A:'‘As a result’ reads the two sentences in the order they are printed and makes the field of scattered barrels an effect of the divers’ photography. The scatter was on the seabed centuries before any diver arrived: it is the reason for the routine, not its product.',
        C:'‘Even so’ needs the second sentence to hold in spite of the first, so it would have to name something working against the divers’ habit. The sentence names the thing that recommends it.',
        D:'‘Similarly’ pairs two cases of one kind, and a photographic routine and a field of scattered cargo are not two versions of the same thing; one is the reason for the other.'
      },
      tip:'Before you pick a result word, ask which of the two facts came first in the world rather than first on the page. A sentence that would be true with nobody there to observe it is usually the reason, and the blank wants After all, not As a result.'
    },
    {
      id:'BEX-02', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — a compound goal: the result and the reason to doubt it',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>A team fitted 240 river otters in the Verrin catchment with ear transmitters.</li><li>Each transmitter reported the animal’s position every 6 hours for up to 14 months.</li><li>Otters tagged above the Ostry weir moved a median of 31 kilometers over the year.</li><li>Otters tagged below the weir moved a median of 9 kilometers.</li><li>The upper group was tagged in March and the lower group in September.</li><li>Otters in the region disperse mainly between March and May.</li></ul>',
      stem:'The student wants to report the study’s main result and point out a reason the comparison may be unreliable. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'The 240 tagged otters wore transmitters that reported a position every 6 hours for as long as 14 months after tagging.',
        B:'Otters tagged above the Ostry weir moved a median of 31 kilometers over the year, while those tagged below it moved 9.',
        C:'Otters in the region disperse between March and May, and the upper group was tagged in March while the lower waited for September.',
        D:'The upper otters moved a median of 31 kilometers and the lower 9, but only the upper group was tagged in the dispersal season.'
      },
      correct:'D',
      expCorrect:'The goal has two halves joined by ‘and’, and only D carries both: the medians, 31 against 9, and the flaw that makes them hard to trust, which is that March tagging catches the dispersal season and September tagging misses it. B gives the first half, C the second, A neither.',
      expWrong:{
        A:'True, and it is a fair description of the method. A goal that asks for a result and a doubt gets neither from a sentence about how often a transmitter reported.',
        B:'True, and it is exactly the study’s headline. Stated alone it leaves the 31-against-9 gap looking like a settled fact about the two stretches of river, which is the impression the second half of the goal exists to prevent.',
        C:'True, and it is the whole reason for the doubt. With no medians in the sentence, the reader is told that timing matters without ever learning which figures the timing might have bent.'
      },
      tip:'A goal with an ‘and’ in it is two goals. Mark both halves before you read the choices and cross out anything that does only one of them, however well it does that one.'
    },
    {
      id:'BEX-03', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — the additive trap when the relation is contrast',
      passage:'The eighty pocket seismometers buried along the Calder fault in 2019 register tremors a thousand times too faint for the single steel-housed station that served the valley before them, and they log about four hundred such events a month. %BLANK% the array cannot say how deep any of those tremors began: depth is read from the delay between two kinds of wave, and the pocket instruments record only one of them. The valley still sends its depth questions to the old station.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Moreover,', B:'By contrast,', C:'However,', D:'Specifically,'},
      correct:'C',
      expCorrect:'The first sentence is a gain — four hundred tremors a month that the old station would have missed. The second is a loss on the same instruments: no depth at all. A strength followed by the limitation that sits beside it is plain contrast, and ‘However’ is the one option that marks it.',
      expWrong:{
        A:'‘Moreover’ adds a second point that pushes the same way as the first, and it is tempting because the sentence goes on describing the same eighty instruments. Blindness to depth does not add to the array’s sensitivity; it takes something back from it.',
        B:'‘By contrast’ sets two subjects side by side on one measure, the way the paragraph sets the array against the old steel-housed station. Both sentences here describe the same array, so the contrast has no second subject to land on.',
        D:'‘Specifically’ narrows to a detail of the claim just made. A missing capability is not a finer-grained version of four hundred events a month; it is the thing that claim leaves out.'
      },
      tip:'A sentence that keeps describing the same subject is not automatically adding to it. Ask whether the new fact helps or hurts the point just made: if it hurts, the relation is contrast no matter how smoothly Moreover reads.'
    },
    {
      id:'BEX-04', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — writing for a reader who does not know the craft',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>Salt rises through a damp wall and crystallizes just under the painted surface of a fresco.</li><li>The growing crystals push the paint layer away from the plaster behind it.</li><li>Conservators at the Merrow chapel drew the salt out with poultices of cellulose pulp.</li><li>A poultice is left on the wall for 48 hours and then peeled away.</li><li>The chapel wall held 2.6 grams of soluble salts per kilogram before treatment and 0.4 after.</li><li>The wall had been repointed with cement mortar in 1961, which trapped the damp.</li></ul>',
      stem:'The student wants to explain to readers unfamiliar with wall painting how the poultice treatment works. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'The Merrow chapel wall fell from 2.6 grams of soluble salts per kilogram to 0.4 grams after the conservators’ treatment.',
        B:'The chapel had been repointed in 1961 with a cement mortar, which trapped the damp that carries salt through the wall.',
        C:'Salt crystals form under the paint and lift it, so conservators draw the salt out with pulp poultices left on for 48 hours.',
        D:'A poultice of cellulose pulp is left in place for 48 hours and is then peeled away from the surface of the fresco.'
      },
      correct:'C',
      expCorrect:'A reader who has never worked on a wall painting needs the chain: salt crystallizes under the paint, the crystals lift it, the pulp pulls the salt out. C is the only choice that links the damage to the remedy, which is what ‘how the treatment works’ asks for.',
      expWrong:{
        A:'True, and it is the most precise sentence in the set. Precision is not explanation: the numbers prove the salt left without saying what the salt was doing or how the pulp removed it.',
        B:'True, and it explains where the damp came from. That is the history of the problem rather than the working of the cure, which is the half of the story the goal asks for.',
        D:'True, and it is the procedure itself. A reader who does not know that salt crystals are lifting the paint learns only that something is put on a wall and taken off two days later.'
      },
      tip:'When a goal names an audience that lacks background, the winning choice is the one that supplies the mechanism, not the one that supplies the sharpest number. Ask what the named reader would still not understand after reading the sentence.'
    },
    {
      id:'BEX-05', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — returning from a concession already made',
      passage:'Conservators at the Ferrand Gallery agree that the varnish Oberlin brushed over his own canvases in 1911 has yellowed far enough to turn his skies green, and that removing it would give back the color he mixed. %BLANK% the varnish is the painter’s own, laid on by his hand in his lifetime, and a gallery that strips it is quietly editing the object he made in favor of the one he is imagined to have wanted.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Granted,', B:'Still,', C:'Accordingly,', D:'In short,'},
      correct:'B',
      expCorrect:'The first sentence is the concession: the writer hands the case for cleaning to the other side. The blank has to turn back and state the objection the writer actually holds, which is what ‘Still’ does.',
      expWrong:{
        A:'‘Granted’ is the trap, because the paragraph really is built around a concession — but the concession is the sentence before the blank, not the one after it. Marking the objection as the thing conceded leaves the writer conceding twice and arguing nothing.',
        C:'‘Accordingly’ would make the objection follow from the case for cleaning, so the sentence would read as though the color argument were a reason to leave the varnish alone. It is a reason to take it off.',
        D:'‘In short’ promises a compressed version of what came before, and the varnish being the painter’s own hand is new information that was nowhere in the first sentence.'
      },
      tip:'In a concede-then-answer paragraph the two halves take different words: Granted and Admittedly open the concession, Still and Even so close it. Find which half the blank is standing in before you choose.'
    },
    {
      id:'BEX-06', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — a comparison needs both sides on one measure',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>Two arrays recorded the same swarm of small quakes beneath Mount Hara in 2021.</li><li>The valley array of 12 broadband stations sits on sediment 40 kilometers from the summit.</li><li>The summit array of 30 short-period stations sits on lava within 3 kilometers of the vents.</li><li>The valley array located 214 quakes in the swarm.</li><li>The summit array located 1,908 quakes in the same weeks.</li><li>The valley array reads ground motion down to 0.03 hertz; the summit array only to 1 hertz.</li></ul>',
      stem:'The student wants to compare how many quakes the two arrays detected during the swarm. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'The valley array located 214 quakes in the swarm and the summit array located 1,908 of them in the same weeks.',
        B:'The summit array, 30 short-period stations standing on lava within 3 kilometers of the vents, located 1,908 quakes.',
        C:'The valley array’s 12 broadband stations read ground motion down to 0.03 hertz, far below the summit array’s 1 hertz.',
        D:'Both arrays were recording beneath Mount Hara through the same weeks of the 2021 swarm, one on sediment and one on lava.'
      },
      correct:'A',
      expCorrect:'A comparison needs the two subjects measured on the measure the goal names. A gives both counts of located quakes, 214 against 1,908, over the same weeks. B gives one count, C compares the arrays on a different quantity, and D names both arrays without counting anything.',
      expWrong:{
        B:'True, and 1,908 is half of what the comparison needs. With no valley figure beside it the reader cannot tell whether 1,908 is a lot, and the extra detail about the lava fills the sentence without filling that gap.',
        C:'True, and it is a genuine two-sided comparison — of frequency response. The goal asks how many quakes each array detected, and hertz is not a count of quakes.',
        D:'True, and it correctly puts the two arrays in the same weeks. What it never supplies is either number, so nothing is actually compared.'
      },
      tip:'Underline the measure inside the goal — how many, how long, how much — and then count how many choices carry that measure twice. A comparison on the wrong quantity is the most expensive wrong answer in this question type.'
    },
    {
      id:'BEX-07', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — case first, rule second: generalization against example',
      passage:'The sixty ginkgo leaves lifted from the Wray Creek shale carry about a third fewer pores than leaves of the same species from the cooler bed a meter beneath them. %BLANK% a leaf opens fewer pores when the air around it is rich in carbon dioxide, because every open pore costs the plant water and fewer of them will do the same work. Wray Creek is one of nine beds where that rule has now been checked against the rock.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In general,', B:'For example,', C:'As a result,', D:'In other words,'},
      correct:'A',
      expCorrect:'The paragraph runs case first and rule second: sixty leaves from one shale, then the principle about pores and carbon dioxide that holds for leaves everywhere. Moving from one measured bed to what leaves do as a class is a generalization, which is what ‘In general’ marks.',
      expWrong:{
        B:'‘For example’ would make the rule about pores an instance of the Wray Creek leaves, when the leaves are the instance and the rule is what they illustrate. The two sentences are in that order on the page, not in that order in the logic.',
        C:'‘As a result’ makes the rule something the pore count produced. A rule about the water a plant spends held long before anyone split the shale; sixty leaves can demonstrate it, not cause it.',
        D:'‘In other words’ is the near miss, since the second sentence does cover the same ground. But a restatement adds nothing, and this one adds the reason — the water each pore costs — and widens one bed into every leaf. That widening is the move the blank has to name.'
      },
      tip:'When the specific sentence comes first and the broad one second, the blank is a generalization, not an example. Check the direction of travel — one case to many, or many to one — before you reach for For example.'
    },
    {
      id:'BEX-08', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — emphasize a difference, not a likeness',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>Two harpsichord builders, Wend and Larrow, each copied the same 1728 Flemish instrument.</li><li>Both used spruce soundboards 3 millimeters thick and the same string gauges.</li><li>Wend cut the soundboard ribs to the pattern of the original.</li><li>Larrow added two extra ribs under the treble that the original does not have.</li><li>Wend’s instrument sustains a treble note for 3.1 seconds; Larrow’s for 5.4 seconds.</li><li>Both instruments are tuned to a’ = 415 hertz.</li></ul>',
      stem:'The student wants to emphasize a difference between the two instruments. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'Wend and Larrow both worked from the same 1728 Flemish instrument, using spruce soundboards of 3 millimeters and identical string gauges.',
        B:'Both harpsichords are tuned to a’ = 415 hertz, the pitch of the Flemish instrument that the two builders set out to copy.',
        C:'Wend cut his soundboard ribs to the pattern of the 1728 original, and his treble notes sustain for 3.1 seconds.',
        D:'Larrow added two ribs under the treble that the original does not have, and his treble sustains 5.4 seconds to Wend’s 3.1.'
      },
      correct:'D',
      expCorrect:'D names the one thing the builders did differently, the extra ribs, and the measured consequence, 5.4 seconds against 3.1. A and B report what the two instruments share, which is the opposite of the goal, and C reports one builder with nothing to set him against.',
      expWrong:{
        A:'True, and every word of it comes from the notes. It is a list of what the two builders held in common, and a goal that asks to emphasize a difference is answered by the one line the list leaves out.',
        B:'True, and the shared pitch is real. Same wood, same gauges, same pitch — a sentence like this makes the two instruments look interchangeable, which is what the goal exists to correct.',
        C:'True, and it is half of the difference. Faithful ribs and 3.1 seconds mean nothing to a reader who is not told what the other builder did or what his instrument does.'
      },
      tip:'Notes for a difference question are usually stacked with likeness — same material, same source, same size — precisely so the shared facts can tempt you. Find the one line where the two subjects part and the one line that measures the effect of parting.'
    },
    {
      id:'BEX-09', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — the contrast is already spent inside the first sentence',
      passage:'Although the Bellamy Street bus lane was painted for the morning rush alone, drivers kept out of it at every hour of the day, and by the second month the evening buses were running four minutes faster than the cars beside them. %BLANK% the transit board extended the lane to the full day in March and repainted the curb to match. Ridership on the evening run has climbed in every month since.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'However,', B:'For this reason,', C:'Nevertheless,', D:'Meanwhile,'},
      correct:'B',
      expCorrect:'The opposition in this text is used up inside the first sentence: ‘Although’ already pits the lane’s painted hours against the way drivers actually behaved. What the blank has to join is that whole finding to what the board did about it, and a board that extends a lane because the lane is working is acting for a reason.',
      expWrong:{
        A:'‘However’ needs the second sentence to cut against the first, and extending a lane that is saving four minutes cuts with it. The contrast the sentence contains was settled by ‘Although’ before the blank arrived.',
        C:'‘Nevertheless’ would make the first sentence an obstacle the board got past, so the text would be saying the hours were extended in spite of the four-minute gain. That gain is the reason they were extended.',
        D:'‘Meanwhile’ parks the March repainting beside the second month’s measurements as two things going on at once, when one came after the other and because of it.'
      },
      tip:'A connector inside a sentence — although, while, but — sets the relation between its own two halves, not between that sentence and the next. Read the first sentence as one finished idea, then ask what the next sentence does to it.'
    },
    {
      id:'BEX-10', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — a trend reported without hiding the cases that break it',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>Arden counted bicycles at 14 intersections every October from 2016 to 2024.</li><li>Counts rose at 12 of the 14 intersections.</li><li>The two intersections where counts fell are both on Rowe Street.</li><li>Rowe Street was closed to through traffic for a sewer replacement from 2021 to 2023.</li><li>The 2024 Rowe Street counts are 11 percent below the 2016 counts.</li><li>City-wide the 2024 total is 58 percent above the 2016 total.</li></ul>',
      stem:'The student wants to summarize the city-wide trend without leaving out the two intersections that do not fit it. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'Bicycle counts across Arden’s 14 intersections finished 58 percent above their 2016 level by the October of 2024.',
        B:'The two Rowe Street intersections ended 11 percent below their 2016 counts, the only two of the 14 that did not rise.',
        C:'Counts rose at 12 of the 14 intersections, 58 percent city-wide, while the two on Rowe Street, closed for sewer work, fell 11 percent.',
        D:'Rowe Street was closed to through traffic from 2021 to 2023 for a sewer replacement, and its two counting points are the two that fell.'
      },
      correct:'C',
      expCorrect:'The goal asks for the trend and the exception in one sentence. C gives the rise — 12 of 14 intersections, 58 percent city-wide — and then the two Rowe Street counts that fell 11 percent, with the closure that explains them. A reports only the trend, B and D only the exception.',
      expWrong:{
        A:'True, and 58 percent is the number the goal wants first. Stated by itself it folds the two falling intersections into a city-wide average, which is exactly the omission the second half of the goal forbids.',
        B:'True, and it is the exception stated precisely. A reader who sees only this sentence would take Arden for a city where cycling is in retreat, since the 12 intersections that rose never appear.',
        D:'True, and the sewer closure is the best explanation the notes offer for the fall. Explaining the exception is not the same as reporting the trend, and no city-wide figure is anywhere in the sentence.'
      },
      tip:'When a goal says ‘without leaving out’ or ‘while accounting for’, the correct sentence has to hold two numbers that point opposite ways. A choice that is internally consistent is usually the one that dropped half the evidence.'
    },
    {
      id:'BEX-11', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — opening a concession the paragraph later takes back',
      passage:'The census that Aliyah Trent runs on Marrow Island counts every storm-petrel burrow from a boat, in a single pass, on one calm night in June. %BLANK% a burrow whose owners are both at sea that night is scored as empty, and in a cold year the birds stay out longer. The count is still the only figure anyone has for the colony, and it has been taken the same way since 1974.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Admittedly,', B:'For instance,', C:'By contrast,', D:'Even so,'},
      correct:'A',
      expCorrect:'The paragraph describes the method, hands the reader its weakness, and then defends it anyway — the third sentence starts with ‘still’. The blank is where the weakness is conceded, and ‘Admittedly’ is the word that concedes.',
      expWrong:{
        B:'‘For instance’ would make the missed burrow an example of counting from a boat in one pass. It is not an instance of the method; it is the flaw the method carries.',
        C:'‘By contrast’ compares two subjects on one measure, and there is only one census here. Nothing in the paragraph is being set against the June pass.',
        D:'‘Even so’ is the near miss, and it does belong to this paragraph — one sentence later. It marks the return from a concession, and the return is the third sentence, the one that keeps the count despite the flaw. Put it in the blank and the concession it was supposed to answer never gets made.'
      },
      tip:'A concede-and-return paragraph has three parts: the claim, the concession, the recovery. Locate the recovery — it often starts with still, nonetheless or anyway — and the blank before it must be the concession.'
    },
    {
      id:'BEX-12', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — state the conclusion and the evidence it rests on',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>Cones of the extinct conifer Aralopitys are common in the Dunmar beds.</li><li>The beds also hold burrows of a beetle whose living relatives feed only on fallen cones.</li><li>78 of the 90 Aralopitys cones recovered carry beetle tunnels.</li><li>The tunnels enter each cone from the base, the part that rests on the ground.</li><li>No tunnel crosses a seed chamber.</li><li>Losing seeds to insects would have narrowed the tree’s range.</li></ul>',
      stem:'The student wants to state what the tunnels show about the beetles and give the evidence behind it. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'In the Dunmar beds, 78 of 90 cones of Aralopitys carry the tunnels of a beetle whose living relatives feed only on fallen cones.',
        B:'Because no tunnel crosses a seed chamber in any of the 90 Aralopitys cones lifted from the Dunmar beds, the seeds were all left whole.',
        C:'Losing seeds to insects would have narrowed the range of Aralopitys, a conifer whose cones turn up throughout the Dunmar beds.',
        D:'The beetles fed on the fallen cone and not on its seeds: the tunnels enter from the base, where a cone rests, and never cross a seed chamber.'
      },
      correct:'D',
      expCorrect:'D states the finding — the beetles ate the cone, not the seeds — and puts the two observations that force it right behind: entry from the base, no tunnel through a seed chamber. A gives evidence with no conclusion, B stops at a smaller observation, and C leaves the tunnels behind entirely.',
      expWrong:{
        A:'True, and 78 of 90 is the striking number. It establishes that beetles were in the cones and stops there, so the reader is handed the evidence with no claim to attach it to.',
        B:'True, and it names one of the two observations. Seeds left whole is a restatement of that observation rather than a conclusion about what the beetles ate, and the entry point from the base never appears.',
        C:'True as a consequence the notes raise, but it is about the tree rather than the beetles, and it rests on seed loss — which is the very thing the tunnels show did not happen.'
      },
      tip:'Claim-plus-evidence goals are won by the choice whose two halves you can join with ‘because’. If the sentence is all observation, it has no claim; if it is all claim, the grader has nothing to check it against.'
    },
    {
      id:'BEX-13', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — a comparison inside the sentence is not the relation between sentences',
      passage:'Every letter of a metal font was cut at one size only, so a page set in twelve point and a page set in six point came from two different sets of punches. The cutter who made the six-point punches thickened the thin strokes and opened the counters, because ink spreads the same fraction of a millimeter at any size and a small letter has less room to lose. %BLANK% a six-point face blown up on a photocopier looks coarse and blunt beside the twelve-point face it was drawn to match.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'By contrast,', B:'Moreover,', C:'As a result,', D:'Even so,'},
      correct:'C',
      expCorrect:'The sentence before the blank says what the cutter did to the small size and why. The sentence after says what you see when that small size is enlarged: coarse, blunt strokes. The thickening is the cause and the coarse enlargement is its effect.',
      expWrong:{
        A:'‘By contrast’ is the trap the last sentence sets, because a comparison really is sitting inside it — six point against twelve point. That comparison belongs to the two faces, not to the two sentences, and between the sentences there is no opposition at all.',
        B:'‘Moreover’ adds a further point about the cutter’s method, and the enlarged photocopy is not another thing the cutter did. It is what his decisions look like when the size they were made for is thrown away.',
        D:'‘Even so’ would make the coarse enlargement hold in spite of the thickened strokes, when the thickened strokes are the reason it looks coarse.'
      },
      tip:'When the sentence after the blank contains its own comparison, cover everything after the first clause and ask again what the blank has to join. A contrast inside a sentence never sets the relation between sentences.'
    },
    {
      id:'BEX-14', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — report the gain and how long it survived',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>Twenty-four middle-distance runners spent 21 nights in a chamber held at the pressure of 2,500 meters.</li><li>A matched group of 24 slept at the pressure of the coastal town where both groups trained.</li><li>The chamber group’s red cell volume rose 4.8 percent; the control group’s did not change.</li><li>Three days after the study, the chamber group ran 3,000 meters 6 seconds faster than before it.</li><li>By 24 days after the study, that 6-second gain had fallen to 1 second.</li><li>Both groups did all of their training at sea level.</li></ul>',
      stem:'The student wants to report the chamber group’s performance gain and how long it lasted. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'The 6-second gain the chamber group showed at three days had shrunk to a single second by the twenty-fourth day after the study.',
        B:'Three days after the study the chamber group ran 3,000 meters 6 seconds faster at sea level than the same runners had before it.',
        C:'The chamber group’s red cell volume rose 4.8 percent over the 21 nights, while the volume of the matched control group did not move.',
        D:'Both the chamber group and the control group did all of their training at sea level, in the coastal town where the study was run.'
      },
      correct:'A',
      expCorrect:'A holds both halves of the goal in one sentence: the size of the gain, 6 seconds, and its life, down to 1 second three weeks later. B gives the gain with no expiry, C gives a physiological change rather than a performance one, and D gives a condition both groups shared.',
      expWrong:{
        B:'True, and it is the performance gain the goal asks for first. Ending at three days leaves the reader with a 6-second improvement that looks permanent, which is the half the goal was written to prevent.',
        C:'True, and 4.8 percent is the mechanism behind the gain. Red cell volume is not a performance measure, so neither half of the goal — how much faster, for how long — is answered.',
        D:'True, and it is what makes the comparison fair. A shared training condition says nothing about how fast either group ran or when the difference faded.'
      },
      tip:'When a goal asks how long a result lasted, the correct choice almost always carries two time stamps. One date is a snapshot; two dates are a duration.'
    },
    {
      id:'BEX-15', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — the reason arrives after the decision, and the opposition is already spent',
      passage:'Although the hail nets over the Kestrel Valley orchards are rated for stones no larger than 25 millimeters, the growers left every panel in place through the storm of 9 June, when the radar was reading stones half again that size. %BLANK% a net that tears in one panel can be stitched in an afternoon, while a crop stripped in one hour is gone until the following harvest. The torn sections came down the next week and were back up by the end of the month.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'After all,', B:'Accordingly,', C:'By contrast,', D:'In turn,'},
      correct:'A',
      expCorrect:'The blank joins a decision — leaving the nets up in a storm they were never rated for — to the fact that makes the decision sensible: a torn net is repairable and a stripped crop is not. The second sentence is the growers’ reasoning, supplied after the act, which is what ‘After all’ marks. The opposition a reader feels was already spent by ‘Although’ inside the first sentence.',
      expWrong:{
        B:'‘Accordingly’ makes the second sentence a consequence of the first, so the text would be claiming that leaving the nets up is what made torn panels cheap to stitch. The cost of stitching held long before the storm, and it is why the nets stayed up.',
        C:'‘By contrast’ needs two subjects measured on one scale, and the only contrast in the text belongs to ‘Although’: the rating against the size of the stones. The second sentence introduces no second subject to stand against the first.',
        D:'‘In turn’ marks the next link in a chain of effects, so the torn panel would have to follow the storm decision in sequence. The sentence reports no later event; it states the standing fact against which the decision was weighed.'
      },
      tip:'When a sentence opens with although or while, the contrast belongs to its own two halves and is finished when the sentence ends. Read that whole sentence as one claim, then ask whether the next sentence follows from it or justifies it.'
    },
    {
      id:'BEX-16', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — explaining a craft to a reader who has never seen it',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>A bell sounds five notes at once, not one.</li><li>Each of the five is governed by a different band of the bell wall.</li><li>A founder tunes a bell by cutting metal away from the inside of the wall.</li><li>Cutting near the lip lowers one note; cutting at the waist lowers another.</li><li>Marta Lund tuned a 1,400-kilogram bell at the Oreby foundry in 11 hours on a vertical lathe.</li><li>The finished bell hums a D two octaves below middle C.</li></ul>',
      stem:'The student wants to explain to readers who have never seen bell founding how a bell is tuned. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'At the Oreby foundry, Marta Lund spent 11 hours at a vertical lathe tuning a bell that weighs 1,400 kilograms.',
        B:'The finished bell hums a D two octaves below middle C, the lowest of the five notes a listener hears at once.',
        C:'Cutting near the lip of a bell lowers one of its notes, and cutting at the waist lowers a different one entirely.',
        D:'A bell sounds five notes at once, and a founder lowers one of them by cutting metal from the wall band that governs it.'
      },
      correct:'D',
      expCorrect:'A reader new to the craft needs the chain: a bell carries several notes at once, each note answers to its own band of wall, and the founder lowers the note he wants by cutting that band. D is the only choice that says both what tuning does and where it acts.',
      expWrong:{
        A:'True, and it gives the scale of the job in hours and kilograms. Scale is not method: after reading it, someone who has never seen a bell tuned still does not know what Lund was cutting or why.',
        B:'True, and it is the most precise sentence available. A named pitch is the outcome of tuning, and a reader who does not yet know that a bell sounds five notes at once cannot work backward from it to the process.',
        C:'True, and it is half the mechanism — where to cut. Without the fact that a bell holds five notes at once, two cutting places on a wall are a pair of instructions with nothing behind them.'
      },
      tip:'When the goal names an audience with no background, pick the sentence that would let that reader describe the process to somebody else. Outcomes, measurements and partial instructions all quietly assume the process is already understood.'
    },
    {
      id:'BEX-17', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — two subjects compared, or one subject that survived an obstacle',
      passage:'The oak frames of the Tamsyn wreck have lasted four centuries under twelve meters of silt, because silt keeps oxygen and shipworm away from whatever it covers. %BLANK% the ten meters of hull that stood proud of the mud have been reduced to a line of iron bolts and a stain on the seabed. Divers now map the stain as carefully as they map the timber.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Even so,', B:'By contrast,', C:'In fact,', D:'Likewise,'},
      correct:'B',
      expCorrect:'Two parts of one ship are being set against each other on one measure, survival: the buried frames are sound after four hundred years and the exposed hull is gone. Two subjects weighed on the same scale is what ‘By contrast’ marks.',
      expWrong:{
        A:'‘Even so’ needs one subject to hold out against an obstacle named just before it, so the text would be saying the exposed hull rotted in spite of the silt. The silt never reached that hull; it is a different part of the ship, not an obstacle this part got past.',
        C:'‘In fact’ strengthens the claim just made, and a hull reduced to bolts does nothing to strengthen the point that buried oak keeps well. It reports what happens where the burial stops.',
        D:'‘Likewise’ says the second case runs the way the first one did. One part of the ship was preserved and the other destroyed, which is the reverse of running the same way.'
      },
      tip:'By contrast needs two subjects on one scale; even so needs a single subject that got past something. Count the subjects in the two sentences before you choose, because both words feel like opposition.'
    },
    {
      id:'BEX-18', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — a comparison lives on the measure the goal names',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>Two eights from the Halvard club trained through the winter for the same 2,000-meter race.</li><li>Crew A trained four sessions a week on the water and two on ergometers.</li><li>Crew B trained two sessions a week on the water and four on ergometers.</li><li>Crew A’s quickest 2,000 meters on the water was 5 minutes 52 seconds.</li><li>Crew B’s quickest was 6 minutes 4 seconds.</li><li>On the ergometers the two crews finished within one second of each other.</li></ul>',
      stem:'The student wants to compare the two crews’ quickest times on the water. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'Crew B, which rowed twice a week on the water and four times on ergometers, was quickest over 2,000 meters in 6 minutes 4 seconds.',
        B:'The two crews came within a single second of each other over 2,000 meters on the ergometers, whatever they had done on the water.',
        C:'Crew A rowed its quickest 2,000 meters on the water in 5 minutes 52 seconds, and Crew B needed 6 minutes 4 seconds.',
        D:'Crew A took four sessions a week on the water to Crew B’s two, and both crews were entered for the same 2,000-meter race.'
      },
      correct:'C',
      expCorrect:'The goal fixes the measure: quickest time on the water. C carries that measure twice, 5 minutes 52 seconds against 6 minutes 4 seconds. A gives one crew, B compares the crews on the ergometers instead, and D compares their training weeks.',
      expWrong:{
        A:'True, and 6 minutes 4 seconds is one of the two figures the comparison needs. Standing alone it gives the reader no way to tell whether that is quick, and the training detail beside it fills the sentence without filling the gap.',
        B:'True, and it is a genuine two-sided comparison — on the ergometers. The goal asks about the water, and an ergometer time is the one measure on which these crews turned out to be identical.',
        D:'True, and it names both crews. What it compares is how often they trained on the water, not how fast they went on it, so the goal’s measure never appears.'
      },
      tip:'Underline the measure inside the goal and then count how many choices carry it twice. A comparison performed on the wrong quantity is the most expensive wrong answer in this question type, because it looks complete.'
    },
    {
      id:'BEX-19', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — the recovery after a concession that opened the paragraph',
      passage:'To be sure, the stone that Verhoef printed from in 1889 will never give another impression: the surface was reground for a second artist inside a year, and the drawing is gone. %BLANK% the fourteen sheets pulled from it before the regrinding are enough to reconstruct how he worked, because he took a proof after every addition and dated each one in the margin. Printmakers have rebuilt the whole sequence from those dates.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Then again,', B:'For that reason,', C:'Likewise,', D:'Even so,'},
      correct:'D',
      expCorrect:'The paragraph opens with its concession — ‘To be sure’ hands the loss of the stone straight to the reader — and the blank is where the writer comes back: the proofs survive and they carry the whole sequence. ‘Even so’ is the marker for that return.',
      expWrong:{
        A:'‘Then again’ opens a second thought that unsettles what was just said, which faces the wrong way here. The concession has already been made at the top of the paragraph, and the blank has to recover from it rather than add another doubt.',
        B:'‘For that reason’ would make the surviving proofs a consequence of the regrinding. The proofs were pulled while the drawing was still on the stone; the regrinding destroyed the source and produced nothing.',
        C:'‘Likewise’ adds a parallel case, so the fourteen proofs would have to be a second example of something lost. They are what was not lost, and the paragraph turns on exactly that.'
      },
      tip:'A paragraph that opens with To be sure or Admittedly has already spent its concession there. The blank after it takes the recovery word — even so, still, nonetheless — never a second concession and never a cause.'
    },
    {
      id:'BEX-20', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — emphasize a difference when the notes are stacked with likeness',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>Two colonies of long-eared bats roost in the Havel gorge, one in a limestone cave and one in a disused rail tunnel.</li><li>Both colonies hunt over the same stretch of river.</li><li>Both leave the roost within 20 minutes of sunset.</li><li>The cave stays near 8 degrees Celsius in January; the tunnel falls to 1 degree.</li><li>The cave colony stays all winter; the tunnel colony leaves in October.</li><li>The same team counted both roosts across the same three years.</li></ul>',
      stem:'The student wants to emphasize a difference between the two roosts. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'The cave stays near 8 degrees in January and holds its colony all winter; the tunnel falls to 1 degree and empties in October.',
        B:'The same team counted both colonies through the same three years, and both leave their roosts within 20 minutes of sunset.',
        C:'Both colonies hunt over one stretch of the Havel river, and both are made up of bats of the long-eared kind.',
        D:'The tunnel colony leaves the gorge in October, once the disused rail line stops holding the little heat it has.'
      },
      correct:'A',
      expCorrect:'A names the one thing that separates the roosts, winter temperature, and the consequence that follows from it: 8 degrees keeps a colony through the winter and 1 degree empties the tunnel by October. B and C report what the two roosts share, and D describes one roost with nothing set against it.',
      expWrong:{
        B:'True, and it is what makes the two counts comparable in the first place. A shared method and a shared departure time are likenesses, and a goal that asks to emphasize a difference is answered by the line the likenesses leave out.',
        C:'True, and same river, same kind of bat is exactly the impression the goal exists to correct. A sentence like this makes the two roosts look interchangeable.',
        D:'True, and October is half of the difference. A reader who is not told that the other colony stays all winter has no way to hear anything remarkable in a departure date.'
      },
      tip:'Notes written for a difference question are usually loaded with sameness on purpose. Find the one line where the two subjects part company, and the one line that measures what parting cost them.'
    },
    {
      id:'BEX-21', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — rule first, case second: the example marker against the academic addition',
      passage:'A peat core is read from the bottom up, and the tree that takes ground back first after a fire leaves its pollen directly above the charcoal that records the fire. %BLANK% the core lifted from Craw Moss in 2019 carries a band of charcoal at 62 centimeters and the first birch pollen of its whole sequence in the same centimeter of peat. Nine of the eleven cores from that moss repeat the pairing.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In general,', B:'For instance,', C:'Moreover,', D:'By contrast,'},
      correct:'B',
      expCorrect:'The first sentence states how any peat core behaves; the second narrows to one core, from one moss, in one year. Moving from the class to a member of it is exactly what ‘For instance’ marks.',
      expWrong:{
        A:'‘In general’ widens from a case to a rule, and the widening has already happened in the first sentence. The second sentence travels the other way, from every core down to the one lifted at Craw Moss.',
        C:'‘Moreover’ is the addition that sounds scholarly, and it would make Craw Moss a second, independent point about peat. Craw Moss is not a new claim; it is the first claim caught happening in one place.',
        D:'‘By contrast’ would set the Craw Moss core against the rule, so the core would have to break the pattern. Charcoal and the first birch pollen in the same centimeter is the pattern, stated to the letter.'
      },
      tip:'Decide which sentence is the class and which is the member. Class first and member second takes for instance; member first and class second takes in general. The order on the page is not the order of the logic.'
    },
    {
      id:'BEX-22', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — the result that ran the other way belongs in the summary',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>Threlby replaced 4,100 sodium streetlights with LEDs between 2019 and 2022.</li><li>Measured skyglow above the town fell 22 percent across those years.</li><li>Energy used for street lighting fell 61 percent.</li><li>Residents filed 340 complaints of glare in 2021, against 18 in 2018.</li><li>The LEDs throw almost no light above the horizontal.</li><li>The LEDs are four times brighter at the point directly beneath them.</li></ul>',
      stem:'The student wants to report the results of the change without leaving out the one result that ran against it. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'Threlby finished the change in 2022, having put in LEDs that throw almost no light above the horizontal.',
        B:'Skyglow over Threlby fell 22 percent and the energy used for street lighting fell 61 percent after the change.',
        C:'Skyglow fell 22 percent and energy use 61 percent, but complaints of glare climbed from 18 in 2018 to 340 in 2021.',
        D:'Residents filed 340 complaints of glare in 2021 against 18 in 2018, since an LED is four times brighter directly beneath it.'
      },
      correct:'C',
      expCorrect:'The goal asks for the results and forbids dropping the awkward one. C carries both directions in a single sentence: 22 percent and 61 percent down, complaints up from 18 to 340. A reports the method, B keeps only the flattering numbers, and D keeps only the complaint.',
      expWrong:{
        A:'True, and it describes what the town actually did. A description of the fitting is not a result, so neither the gains nor the complaints appear anywhere in it.',
        B:'True, and these are the headline numbers the goal wants first. Printed alone they make the change look like a clean success, which is precisely the omission the second half of the goal forbids.',
        D:'True, and it even supplies the reason behind the glare. It reports the exception with no gain beside it, so a reader would take the whole program for a failure.'
      },
      tip:'When a goal says without leaving out, or while accounting for, the correct sentence holds two numbers that point opposite ways. A choice that reads as perfectly consistent is usually the one that dropped half the evidence.'
    },
    {
      id:'BEX-23', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — the substitute for a course already ruled out',
      passage:'The Verlin tapestry cannot be washed: the wool is sound, but the silk highlights were dyed with a yellow that the first bath would carry straight into the blue beside it. %BLANK% the conservators are lifting the dirt with dry rubber sponges, a hand-width at a sitting, and expect the work to run three years. A wash would have taken four days.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Alternatively,', B:'Even so,', C:'Meanwhile,', D:'Instead,'},
      correct:'D',
      expCorrect:'The opening sentence closes the bath off for good, and the blank introduces what the conservators are doing in its place. A course substituted for one that has been ruled out takes ‘Instead’.',
      expWrong:{
        A:'‘Alternatively’ offers a second course that is still open beside the first, and the first is not open: the text rules the bath out in its opening words. A reader would be left believing the tapestry could still be washed if anyone preferred.',
        B:'‘Even so’ would make the sponge work happen in spite of the risk to the dye, as though the conservators had gone ahead against the warning. They did the reverse — they gave the bath up because of it.',
        C:'‘Meanwhile’ puts the sponge work alongside the bath in time, as if both were under way. Only one of them is happening, and the other was struck out before the work began.'
      },
      tip:'Instead replaces something the text has closed off; alternatively opens a door that is still available. Before you choose, check whether the first course was rejected or merely described.'
    },
    {
      id:'BEX-24', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — a compound goal: the record and what makes it usable',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>The Ravensholt weather station has logged a daily maximum temperature since 1903.</li><li>The station was moved 400 meters in 1978, from a walled garden to an airfield.</li><li>The airfield site runs 0.6 degrees Celsius cooler at night than the garden site.</li><li>Nine years, 1974 to 1982, were recorded at both sites at once.</li><li>Those nine years let the readings from before 1978 be corrected to the airfield.</li><li>The corrected record shows 1.4 degrees Celsius of warming across the century.</li></ul>',
      stem:'The student wants to present the length of the station’s record and explain what makes it usable despite the move. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'Ravensholt has logged a daily maximum since 1903, and nine years recorded at both sites let the earlier readings be corrected to the airfield.',
        B:'The Ravensholt station has logged a daily maximum temperature every day since 1903, a run of more than a century kept in one town.',
        C:'Because the station was recorded at both sites from 1974 to 1982, its earlier readings can be corrected to the airfield that holds it now.',
        D:'The airfield the station moved to in 1978 runs 0.6 degrees cooler at night than the walled garden it left, so the record has a step in it.'
      },
      correct:'A',
      expCorrect:'The goal joins two demands with an ‘and’, and A meets both: the record runs from 1903, and the nine overlapping years are what let the earlier half be put on the same footing as the later half. B does the first, C the second, D neither.',
      expWrong:{
        B:'True, and a century in one town is the first half of the goal, stated well. It says nothing about the 1978 move, so a reader is handed a long record with no reason to trust the part recorded in the garden.',
        C:'True, and the overlap is exactly what rescues the record. With no start date in the sentence, the reader learns that a correction is possible without learning how much record it rescues.',
        D:'True, and the 0.6 degrees is why a correction is needed at all. Naming the problem is not the same as naming the fix, and the length of the record never appears.'
      },
      tip:'A goal with an and in it is two goals. Mark both halves before you look at the choices, then drop anything that satisfies only one of them, however precisely it does that one.'
    },
    {
      id:'BEX-25', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — the corrective that follows a denial, not a contrast',
      passage:'The trails that Sabine Roth’s harvester ants leave across the pan are not a map of where the seeds are. %BLANK% a trail marks where a forager happened to walk back loaded, and a rich patch found by a scout who returned empty gets no trail at all. Roth has watched the colony walk past a hundred grams of seed for a week.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'However,', B:'In addition,', C:'On the contrary,', D:'Nevertheless,'},
      correct:'C',
      expCorrect:'The first sentence says what the trails are not. The second supplies what they are, and in doing so finishes the denial rather than fighting it. A corrective that completes a negative claim takes ‘On the contrary’.',
      expWrong:{
        A:'‘However’ requires the second sentence to push against the first, and it agrees with it: a trail made by whoever happened to walk back loaded is precisely not a map of the seeds. Two sentences on the same side of a claim do not take a contrast word.',
        B:'‘In addition’ piles a separate fact on top of the denial. The sentence is not separate; it pays the debt the denial left open by saying what the trails actually record.',
        D:'‘Nevertheless’ marks something holding true in spite of what came before, so the trails would have to be a seed map anyway. The paragraph spends its remaining sentences showing that they are not.'
      },
      tip:'After a sentence that says what something is not, the blank usually wants the corrective that says what it is. Contrast words need two claims that disagree, and a denial followed by its replacement is one claim in two parts.'
    },
    {
      id:'BEX-26', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — the mechanism, not the number, for a reader outside the field',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>A tsunami gauge on the seabed measures the weight of the water above it as pressure.</li><li>In deep water a tsunami raises the sea surface by only a few centimeters.</li><li>Those few centimeters change the pressure the gauge reads.</li><li>The Kaldera gauge sits 4,300 meters down, 90 kilometers off the coast.</li><li>It reported the 2023 wave 41 minutes before the wave reached the harbor.</li><li>A tsunami in deep water can stand hundreds of kilometers from crest to crest.</li></ul>',
      stem:'The student wants to explain to readers who know nothing about ocean instruments how the gauge detects a tsunami. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'The Kaldera gauge lies 4,300 meters down and 90 kilometers offshore, and it caught the 2023 wave 41 minutes early.',
        B:'The gauge weighs the water above it as pressure, so the few centimeters a tsunami adds to the surface change what it reads.',
        C:'A tsunami raises the deep sea surface by only a few centimeters, though its crests can stand hundreds of kilometers apart.',
        D:'From 4,300 meters down the gauge gave the harbor 41 minutes of warning before the 2023 wave reached the breakwater.'
      },
      correct:'B',
      expCorrect:'Detection here is one idea in two steps: the instrument reads the weight of the column of water over it, and a wave that lifts the surface a little makes that column heavier. B is the only choice that puts the two steps together, which is what a reader outside the field needs.',
      expWrong:{
        A:'True, and it fixes where the instrument sits and what it achieved. Position and warning time say nothing about what the gauge senses, so the reader is left to imagine the detection.',
        C:'True, and it describes the wave with real precision. Describing what passes over the gauge is not describing how the gauge notices it; nothing here mentions pressure at all.',
        D:'True, and 41 minutes is the number that makes the instrument worth building. Worth is not method: the sentence explains why to care, not how it works.'
      },
      tip:'For an audience with no background, the winning choice is the one that supplies the mechanism, not the one with the sharpest figure. Ask what such a reader would still be unable to explain after reading the sentence.'
    },
    {
      id:'BEX-27', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — naming the one thing promised, not offering one of many',
      passage:'A sheet of handmade paper is only as good as the water the mill stands on, and the Aubray mill was put where it is for a single reason. %BLANK% the stream that turns its wheel rises through chalk and carries almost no iron, and iron is what rusts a sheet brown in its second century. Everything else at Aubray had to be carted in over bad roads.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'For example,', B:'Moreover,', C:'Even so,', D:'Namely,'},
      correct:'D',
      expCorrect:'The first sentence promises one reason and withholds it; the second hands it over. When a text announces a single item and then delivers that item, the marker is ‘Namely’.',
      expWrong:{
        A:'‘For example’ presents one member of a set the reader is meant to picture as larger. The first sentence has already fixed the size of that set at one — a single reason — so an example sends the reader hunting for others that do not exist.',
        B:'‘Moreover’ adds a further point to a claim already made about the water, and no such claim has been made yet. The sentence is not an addition; it is the answer the first sentence set up.',
        C:'‘Even so’ would make the chalk stream hold in spite of where the mill was put, when the stream is the entire reason it was put there.'
      },
      tip:'Namely delivers what the sentence before it promised; for example offers one of many. Count what the first sentence promised — one reason, three causes, a single problem — and match the marker to that count.'
    },
    {
      id:'BEX-28', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — both sides of the comparison, on the quantity the goal named',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>Two stands of larch were cored in the Sarn valley, one at 700 meters and one at 1,650 meters.</li><li>Both stands were cored in the same September.</li><li>The lower stand laid down a mean ring of 1.9 millimeters a year from 1950 to 2020.</li><li>The higher stand laid down a mean ring of 0.7 millimeters a year over the same span.</li><li>The higher stand holds the older trees, several of them past 400 years.</li><li>Both stands are of one species.</li></ul>',
      stem:'The student wants to compare the yearly growth of the two stands. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'From 1950 to 2020 the stand at 700 meters laid down 1.9 millimeters of wood a year and the stand at 1,650 meters 0.7.',
        B:'The stand at 1,650 meters holds the older trees of the two, several of them more than 400 years of age.',
        C:'Both larch stands in the Sarn valley were cored in one September, and both are made up of trees of a single species.',
        D:'The stand at 700 meters put on a mean ring of 1.9 millimeters a year across the seventy years from 1950 to 2020.'
      },
      correct:'A',
      expCorrect:'Yearly growth is the measure the goal names, and A reports it for both stands over the same span: 1.9 millimeters against 0.7. B compares the stands on age instead, C lists what they share, and D gives the lower stand alone.',
      expWrong:{
        B:'True, and it does mention both stands. Age is a different quantity from yearly growth, and the older stand turns out to be the slower one, so this sentence points a reader the wrong way.',
        C:'True, and the shared month and species are what make the two figures comparable at all. Shared conditions are the setup for a comparison, never the comparison itself.',
        D:'True, and 1.9 millimeters is one of the two numbers needed. With nothing from the higher stand beside it, a reader cannot tell whether 1.9 is fast for a larch or slow.'
      },
      tip:'A comparison needs the same quantity twice. When a choice offers a second subject but a different quantity — age instead of growth, cost instead of time — it is the closest wrong answer on the page.'
    },
    {
      id:'BEX-29', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — one meeting widened into the rule behind it',
      passage:'In the 2024 national pursuit at Deyne, the rider who led from the first lap was caught inside the final kilometer in eleven of the twelve heats. %BLANK% a rider at the front of a pursuit spends roughly a third more of her effort pushing air aside, and no rider wins back a third of her effort over four kilometers. Coaches have been building their heats around that arithmetic for forty years.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Furthermore,', B:'For instance,', C:'As a rule,', D:'Consequently,'},
      correct:'C',
      expCorrect:'Twelve heats at one meeting are the case; what a rider at the front spends against the air is the rule that holds wherever a pursuit is ridden. Widening from one measured meeting to the whole class is what ‘As a rule’ marks.',
      expWrong:{
        A:'‘Furthermore’ is the addition that sounds like scholarship, and it would make the cost of pushing air a second finding from Deyne. That cost is not a finding from Deyne at all; it is the principle the Deyne heats put on display.',
        B:'‘For instance’ makes the rule an instance of the twelve heats, which turns the logic around. The heats are the instance, and the rule is what they are instances of.',
        D:'‘Consequently’ makes the air a rider pushes a consequence of what happened at Deyne. Physics did not change because eleven riders were caught; it is why they were caught.'
      },
      tip:'Ask which sentence would still be true if the other had never been written. The rule survives the case, so the rule is the generalization, and the blank takes as a rule or in general rather than for instance.'
    },
    {
      id:'BEX-30', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — the difference, and what the difference cost',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>Two bronze doors were cast in one workshop in 1503 and now hang on opposite sides of Rennick cathedral.</li><li>Both were poured from nearly the same mix of copper, tin and lead.</li><li>Both carry the same twelve panels in the same order.</li><li>The north door has stood under an open porch; the south door has been glazed since 1890.</li><li>The north door has lost 0.9 millimeters of surface to corrosion.</li><li>The south door has lost 0.05 millimeters.</li></ul>',
      stem:'The student wants to emphasize a difference between the two doors. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'The two doors left one workshop in 1503, poured from nearly the same mix of copper, tin and lead.',
        B:'The north door has stood under an open porch and lost 0.9 millimeters of surface; the glazed south door has lost 0.05.',
        C:'Both doors carry the same twelve panels in the same order, and both hang today at Rennick cathedral.',
        D:'Since 1890 the south door at Rennick has stood behind glass, out of the weather that beats on the north porch.'
      },
      correct:'B',
      expCorrect:'B sets the two doors apart on the one thing that separated them, shelter, and gives the measured cost of that separation: 0.9 millimeters of lost surface against 0.05. A and C report what the doors have in common, and D describes the sheltered door alone.',
      expWrong:{
        A:'True, and one workshop and one alloy is the reason the pair is worth studying. It is a statement of sameness, and a goal asking for a difference is answered by what the sameness leaves over.',
        C:'True, and same panels in the same order is the strongest likeness in the notes. A sentence built from it makes the doors sound interchangeable, which is what the goal exists to prevent.',
        D:'True, and glazing is the cause of the difference. Without the north door beside it there is nothing to differ from, and neither corrosion figure appears.'
      },
      tip:'For a difference goal, look for two things in one sentence: the condition that split the subjects apart and the number that shows what the split produced. A cause with no measured effect is only half the answer.'
    },
    {
      id:'BEX-31', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — the world that would exist if the stated cause failed',
      passage:'The night wind that slides off the Barrow ridge is what keeps the orchards below it from freezing, since it never stops moving long enough for cold air to settle in the hollows. %BLANK% the hollows would sit five degrees colder than the slopes by four in the morning, and the blossom would be lost in any clear April. Growers on the far side of the ridge, where the air is still, light smudge pots instead.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Even so,', B:'As a result,', C:'In fact,', D:'Otherwise,'},
      correct:'D',
      expCorrect:'The second sentence describes a valley that does not exist: the hollows are not five degrees colder, because the wind keeps the air moving. A sentence reporting what would happen if the stated cause failed is a counterfactual, and ‘Otherwise’ is its marker.',
      expWrong:{
        A:'‘Even so’ would make the five-degree gap hold in spite of the wind, so the orchards would be freezing after all and the first sentence would be false.',
        B:'‘As a result’ makes the cold hollows an effect of the moving wind, which reverses the paragraph. The wind is what prevents the cold, not what produces it.',
        C:'‘In fact’ strengthens a claim just made and keeps it true. Blossom lost in any clear April is not a stronger version of orchards kept safe; it is the opposite outcome.'
      },
      tip:'Read the sentence after the blank and ask whether it describes the world as it is or the world as it would be without the thing just named. A sentence that is false about the real world takes otherwise, never as a result.'
    },
    {
      id:'BEX-32', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — the river-wide result and the one dam that broke it',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>Fish ladders were built at seven dams on the Tessel river between 2014 and 2019.</li><li>Counts of adult salmon passing upstream rose at six of the seven dams.</li><li>At the Brayle dam the count fell 34 percent.</li><li>The Brayle ladder opens into the river 60 meters below the dam, past a deep pool.</li><li>Salmon tagged at Brayle searched a median of 9 days before finding that opening.</li><li>River-wide, the 2019 run was 71 percent larger than the 2014 run.</li></ul>',
      stem:'The student wants to report how the ladders worked along the river while making clear that one of them did not. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'Counts rose at six of the seven dams and the river-wide run grew 71 percent, but the count at Brayle fell 34 percent.',
        B:'The Tessel run was 71 percent larger in 2019 than in 2014, the first full season after all seven ladders were finished.',
        C:'Salmon tagged below the Brayle dam searched a median of 9 days for a ladder that opens 60 meters downstream of it.',
        D:'The count of adult salmon passing the Brayle dam fell 34 percent, the only one of the seven where the ladder failed.'
      },
      correct:'A',
      expCorrect:'A carries the whole picture and the hole in it: six dams up, the run up 71 percent, and Brayle down 34 percent. B gives the river-wide gain alone, C explains the failure without reporting it, and D gives the failure with no river behind it.',
      expWrong:{
        B:'True, and 71 percent is the figure the first half of the goal asks for. On its own it averages the failing dam into the total, which is exactly what the second half of the goal forbids.',
        C:'True, and the 9 days of searching is the best explanation the notes offer for what went wrong at Brayle. Explaining the exception is not reporting it, and no count of salmon appears in the sentence.',
        D:'True, and it states the exception plainly. A reader who sees only this sentence would take the whole ladder program for a failure, since the six dams that rose are missing.'
      },
      tip:'A report that has to hold a trend and its exception needs numbers pointing both ways in one sentence. Sentences that explain why the exception happened are a separate job, and they cost you the trend.'
    },
    {
      id:'BEX-33', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — a loss that is still an effect, with the opposition already used up',
      passage:'While the organ at Saint Wendel has kept every pipe its builder cast in 1742, the wind that reaches those pipes now comes from an electric blower rather than from the four men who once worked the bellows. %BLANK% the chords no longer open with the small waver that a crew of pumpers put into them, and the builder voiced his reeds around that waver. Two organists have asked for a valve that would put the unsteadiness back.',
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'However,', B:'As a result,', C:'Moreover,', D:'Even so,'},
      correct:'B',
      expCorrect:'A blower holds a steadier pressure than men on a bellows, so the waver at the start of each chord disappears. The second sentence is what the new wind supply did to the sound: cause and effect. The loss feels like a contrast, but the only opposition in the text belongs to ‘While’, which already set the surviving pipework against the changed wind.',
      expWrong:{
        A:'‘However’ needs the second sentence to cut against the first, and it follows straight out of it — change what supplies the wind and you change what the wind does. The contrast a reader feels was spent by ‘While’ before the blank arrived.',
        C:'‘Moreover’ treats the vanished waver as one more fact about the organ, stacked on top of the blower. It is not an independent fact: take the blower away and the waver comes back.',
        D:'‘Even so’ would make the flat chord openings survive the blower, as though they persisted in spite of it. The blower is the thing that removed them.'
      },
      tip:'A loss is not automatically a contrast. Ask what produced it: if the sentence before the blank produced it, the relation is cause and effect, however much the paragraph reads like a complaint.'
    },
    {
      id:'BEX-34', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis — a compound goal: how it is dated and what would sharpen the date',
      passage:'While researching a topic, a student has taken the following notes:<ul><li>A wreck off Cape Tirren lies under 38 meters of water and carries about 1,200 amphorae.</li><li>The amphorae are stamped at the handle with the name of a workshop at Ithra.</li><li>Ithra stamps have been dated at other sites to between 140 and 110 BCE.</li><li>Divers raised 14 amphorae in 2022 and left the rest in place.</li><li>Two of the 14 hold pitch linings that would take a radiocarbon date.</li><li>No timber from the hull has been raised.</li></ul>',
      stem:'The student wants to state how the wreck has been dated so far and note what could sharpen that date. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      choices:{
        A:'The 1,200 amphorae under 38 meters of water off Cape Tirren are stamped at the handle with a workshop name from Ithra.',
        B:'Ithra stamps are dated between 140 and 110 BCE at other sites, and that range is where the Cape Tirren wreck sits for now.',
        C:'The wreck is dated by its Ithra handle stamps, 140 to 110 BCE elsewhere, and two of the 14 raised amphorae hold datable pitch.',
        D:'Two of the 14 amphorae raised in 2022 hold pitch linings that would take a radiocarbon date, and no hull timber has come up.'
      },
      correct:'C',
      expCorrect:'The goal wants the present date and the thing that could improve it. C gives both: the wreck rides on stamps dated 140 to 110 BCE elsewhere, and two raised jars hold pitch that a laboratory could date directly. A skips dating entirely, B stops at the current date, and D stops at the future one.',
      expWrong:{
        A:'True, and the stamps it names are the very evidence the date rests on. The sentence never says that a stamp carries a date, so a reader is told what is written on the handles and not what it is worth.',
        B:'True, and it is the current date stated carefully, hedged with for now. Nothing in it points to the pitch, so the reader has no idea what would ever move the range.',
        D:'True, and the pitch is exactly what could sharpen the date. Standing alone it leaves the wreck undated, so a reader cannot tell what the radiocarbon result would be sharpening.'
      },
      tip:'When a goal pairs what is known with what would improve it, the correct sentence carries two pieces of evidence, not one plus a promise. Check that the choice names the current basis and the better one.'
    }
  ]
});
