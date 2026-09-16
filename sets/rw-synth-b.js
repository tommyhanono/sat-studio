/* SAT Studio question set — Reading & Writing: Rhetorical Synthesis (SYB-01 to SYB-34)
   Set hermano de rw-synth-a. Aqui las metas son las INCOMODAS, las que el estudiante
   no reconoce de memoria: senalar una limitacion del metodo, decir por que el resultado
   importa fuera del laboratorio, hablarle a alguien del campo sin explicarle lo basico,
   contrastar dos mediciones del mismo fenomeno, situar el trabajo en una linea previa,
   subrayar lo que queda abierto y describir el procedimiento sin interpretarlo.
   La regla del set: los TRES distractores son VERDADEROS segun las vinetas. Se caen
   porque hacen otro trabajo retorico — reportan el resultado cuando se pide el metodo,
   explican lo basico a quien ya lo sabe, dan un solo lado de una comparacion, o dicen
   el dato crudo sin decir lo que significa para la conclusion.
   Los distractores llevan cifras y dos vinetas a proposito: si solo la correcta cargara
   contenido, el set se contestaria midiendo el largo con la vista. */
(function(){
  window.SAT_SETS.push({
    id: 'rw-synth-b',
    title: 'Rhetorical Synthesis — Hard Goals',
    section: 'rw',
    level: 'Difícil',
    description: 'Thirty-four notes questions built on the goals students misread most: flag a limitation of the method, say why a result matters off the bench, brief a specialist without the basics, set two measurements of one thing side by side, place a study in the line before it, name what is still open, and report a procedure without reading anything into it.',
    minutes: 40,
    questions: [
      {
        id:'SYB-01', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — point out a limitation of the method',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A team estimated how many agoutis live in a lowland forest reserve.</li><li>The team set 40 camera traps along the walking trails cut through the reserve.</li><li>The cameras ran for 90 nights and recorded 612 agouti passes.</li><li>From those passes the team estimated about 9 agoutis per square kilometer.</li><li>Agoutis also feed in dense thickets far from any trail.</li><li>The cameras were not moved during the 90 nights.</li></ul>',
        stem:'The student wants to point out a limitation of the team’s counting method. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The team set 40 camera traps along the walking trails of the reserve, and over 90 nights those cameras recorded 612 separate agouti passes.',
          B:'Agoutis feed in dense thickets far from any trail as well as along the walking trails where the team placed its 40 camera traps.',
          C:'Because the 40 cameras stayed on the trails for all 90 nights, agoutis feeding in dense thickets could pass the whole study unrecorded.',
          D:'The 612 agouti passes the cameras recorded over 90 nights gave the team an estimate of about 9 agoutis per square kilometer of reserve.'
        },
        correct:'C',
        expCorrect:'A limitation names something the method cannot see and says so. C does both: the cameras never left the trails, and the animals in the thickets are therefore missing from the count. A and D describe the method and the result, and B states the awkward fact without ever saying what it costs the estimate.',
        expWrong:{
          A:'True, and it is an accurate account of what the team did. Describing a method is not the same as naming a weakness in it; nothing here tells the reader what the cameras could miss.',
          B:'True, and it is the fact the limitation rests on. On its own it reads as a note about agouti habits — the sentence never connects the thickets to the number the team reported.',
          D:'True, and the arithmetic is the team’s own. This is the finding, which is what a limitation is meant to qualify, not the qualification itself.'
        },
        tip:'A limitation has two halves: the gap in the method, and what that gap does to the conclusion. A choice that supplies only the raw fact, or only the result, is doing a different job.'
      },
      {
        id:'SYB-02', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — point out a limitation of the method',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A survey looked for an endangered loach by testing river water for traces of its DNA.</li><li>Crews filtered water at 22 points along 60 kilometers of river.</li><li>The filters picked up loach DNA at 14 of the 22 points.</li><li>DNA drifts far downstream before it breaks down.</li><li>A single shed scale, or a dead fish upstream, leaves the same trace a living fish leaves.</li><li>Netting at three of the 14 points brought up live loaches.</li></ul>',
        stem:'The student wants to point out a limitation of the DNA survey as evidence that loaches live where the traces were found. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Crews filtered river water at 22 points spread along 60 kilometers, and 14 of those points returned traces of the endangered loach’s DNA.',
          B:'Since DNA drifts far downstream and a shed scale leaves the trace a living fish leaves, a positive filter need not mean loaches live at that point.',
          C:'Netting at three of the 14 points where the filters had found loach DNA brought up live fish, confirming that loaches were there.',
          D:'The survey covered 60 kilometers of river, and eight of the 22 points the crews sampled returned no trace of loach DNA at all.'
        },
        correct:'B',
        expCorrect:'The goal asks what weakens the inference from trace to resident fish. B names the two facts that do it — drift and dead-or-shed material — and then says the consequence: a hit is not proof of a population there. A reports the method, C reports a confirmation, and D counts the empty points, which is a result rather than a caveat.',
        expWrong:{
          A:'True, 22 points and 14 hits. It is the survey’s design and score, and neither one tells the reader why a hit might overstate where the fish actually live.',
          C:'True, and the nets are real evidence — but they are evidence that strengthens the claim at three points. A limitation runs the other way.',
          D:'True: 22 minus 14 leaves eight silent points. A point with no DNA raises no question about what a positive point means, which is the doubt the goal asks for.'
        },
        tip:'When the goal questions an inference, look for the choice that names the flaw and then finishes the thought — "so the result may not mean what it seems to." Facts and findings on their own do not qualify anything.'
      },
      {
        id:'SYB-03', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — point out a limitation of the method',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A city put 30 low-cost particle sensors on lampposts to map street dust.</li><li>Each sensor costs about a fortieth of a reference-grade monitor.</li><li>The sensors count particles by the light the particles scatter.</li><li>Water droplets scatter light the way dust does.</li><li>On humid mornings the sensors read about 35 percent above a reference monitor two meters away.</li><li>The network reports a reading every minute.</li></ul>',
        stem:'The student wants to point out a limitation of the low-cost sensors as a measure of street dust. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Each of the 30 sensors on the city’s lampposts costs about a fortieth of a reference-grade monitor, and the network reports a reading every minute.',
          B:'Water droplets scatter light the way dust particles do, and scattered light is what the 30 lamppost sensors use to count particles.',
          C:'A reference-grade monitor stands two meters from one of the lampposts, and the city compared its readings with the sensor’s on humid mornings.',
          D:'Because the sensors count by scattered light and droplets scatter light like dust, their readings run about 35 percent high on humid mornings.'
        },
        correct:'D',
        expCorrect:'D carries the mechanism and the damage: light scattering cannot tell a droplet from a dust grain, so on humid mornings the network overstates the dust by roughly 35 percent. A lists the sensors’ advantages, B stops at the mechanism, and C describes the comparison rather than its outcome.',
        expWrong:{
          A:'True, and both facts are attractive ones — cheap and fast. Strengths cannot serve as a limitation, however many of them a sentence collects.',
          B:'True, and this is the physics the limitation depends on. The sentence never reaches the consequence: a reader learns how the sensors count but not that the count comes out wrong.',
          C:'True, and it is how the city found the problem. Describing the check is not the same as reporting what the check revealed.'
        },
        tip:'Sort the notes into strengths, mechanism, and consequence before you look at the options. A limitation needs the mechanism plus the consequence; strengths are there to tempt you.'
      },
      {
        id:'SYB-04', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — point out a limitation of the method',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Geologists date rockfalls by measuring the largest lichen growing on the fallen blocks.</li><li>The method uses a growth curve built from lichens on gravestones of known date.</li><li>The gravestones behind that curve all stand in one coastal valley.</li><li>The rockfalls being dated lie 40 kilometers inland, where summers are drier.</li><li>Lichen grows more slowly where there is less moisture.</li><li>On one block the largest lichen measured 92 millimeters across.</li><li>Read off the coastal curve, 92 millimeters comes out at about 140 years.</li></ul>',
        stem:'The student wants to point out a limitation of the dating method as it was applied to the inland rockfalls. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The largest lichen on one fallen block measured 92 millimeters across, which the coastal growth curve puts at an age of about 140 years.',
          B:'The geologists built their growth curve by measuring lichens on gravestones in a coastal valley, where every stone carries a known date.',
          C:'Since the curve comes from a wetter coastal valley and lichen grows slowly in dry air, the inland blocks are likely older than 140 years.',
          D:'The rockfalls the geologists dated lie 40 kilometers inland of the coastal valley that supplied the curve, and their summers are drier.'
        },
        correct:'C',
        expCorrect:'Slower growth inland means a 92-millimeter lichen took longer to get there, so a curve calibrated in wet air reads the blocks as younger than they are. C names the mismatch and states its direction. A gives the reading, B praises the calibration, and D leaves the fact standing with nothing drawn from it.',
        expWrong:{
          A:'True, and it is the number the limitation is about. Reporting the age the curve gives does not tell the reader that the curve may not apply here.',
          B:'True, and known dates are what make a calibration curve possible. The sentence presents the calibration as a strength and never mentions where the blocks are.',
          D:'True, and the difference in climate is exactly the problem. Left as a geographic note, it never says that the 140-year figure is therefore too low.'
        },
        tip:'When a method is calibrated somewhere else, the limitation is always the mismatch plus its direction. Work out which way the error runs and look for the choice that says so.'
      },
      {
        id:'SYB-05', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
        skill:'Rhetorical Synthesis — point out a limitation of the method',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A laboratory tracked an antibiotic in the wastewater of a town of 18,000 people.</li><li>A machine drew one sample every Wednesday at noon for 30 weeks.</li><li>The town’s two clinics hand out most of their prescriptions on Mondays.</li><li>The antibiotic breaks down in the sewer in about 24 hours.</li><li>The 30 Wednesday samples averaged 42 nanograms per liter.</li><li>A separate two-week test that sampled every day averaged 61 nanograms per liter.</li></ul>',
        stem:'The student wants to point out a limitation of the weekly sampling schedule. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Across 30 weeks the machine’s Wednesday samples averaged 42 nanograms of the antibiotic per liter of the town’s wastewater.',
          B:'The town’s two clinics hand out most of their antibiotic prescriptions on Mondays, two days before each of the machine’s samples was drawn.',
          C:'With prescriptions falling on Mondays and the drug gone in about a day, Wednesday sampling misses the peak: daily sampling averaged 61, not 42.',
          D:'A second test that drew a sample every day for two weeks averaged 61 nanograms per liter, well above the 42 of the 30-week Wednesday series.'
        },
        correct:'C',
        expCorrect:'C ties the timing to the chemistry to the number: Monday prescriptions, a 24-hour half-life in the sewer, and a Wednesday-only machine, which is why the daily series came out at 61 against the Wednesday 42. A reports the headline figure, B leaves the timing unconnected, and D reports the gap without blaming the schedule for it.',
        expWrong:{
          A:'True, and it is the study’s own average. A finding is what a limitation qualifies; stated alone it gives the reader no reason to distrust it.',
          B:'True, and Mondays are the heart of the problem. Without the 24-hour breakdown and the two averages, the sentence is a fact about clinic hours.',
          D:'True, and the two figures do sit far apart. The sentence lets the reader guess which series is wrong — it never says the Wednesday schedule is what produced the lower number.'
        },
        tip:'Two numbers that disagree are evidence, not an argument. A limitation has to name the feature of the method that caused the disagreement.'
      },
      {
        id:'SYB-06', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — explain why a result matters outside the laboratory',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Chemists built an enzyme that cuts a common bottle plastic into its building blocks.</li><li>In the laboratory the enzyme broke down 88 percent of a ground sample in 10 hours.</li><li>The reaction runs at 55 degrees Celsius.</li><li>Bottle-sorting plants already heat their wash water to about 60 degrees.</li><li>The building blocks can be used to make new bottles.</li><li>The laboratory test used plastic ground into flakes about 2 millimeters wide.</li></ul>',
        stem:'The student wants to explain why the enzyme’s result matters outside the laboratory. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'In the laboratory the enzyme broke down 88 percent of a ground plastic sample in 10 hours at a temperature of 55 degrees Celsius.',
          B:'Sorting plants already heat wash water to about 60 degrees, so they could run the 55-degree reaction with the heat they have and recover material for new bottles.',
          C:'The chemists ran their test on bottle plastic that had been ground into flakes about 2 millimeters wide before the enzyme was added.',
          D:'The enzyme cuts a common bottle plastic into its building blocks, and those building blocks can be used to make new bottles.'
        },
        correct:'B',
        expCorrect:'Outside the laboratory means a real setting doing real work. B supplies one: sorting plants that already run at 60 degrees could host a 55-degree reaction without new heating, and the output feeds back into bottles. A and C stay on the bench, and D describes the chemistry without ever leaving it.',
        expWrong:{
          A:'True, and 88 percent in 10 hours is the result worth exporting. The sentence keeps it indoors: nothing here names a place outside the laboratory where it would be used.',
          C:'True, and flake size matters to the test. It is a detail of the procedure, which is the least exportable part of the notes.',
          D:'True, and a closed loop from bottle to bottle is genuinely promising. Still, it describes what the enzyme does, not what any existing plant could do with it.'
        },
        tip:'"Why it matters outside the lab" wants a bridge: the laboratory number on one side, an existing real-world setting on the other. Choices that never name that setting are doing chemistry, not advocacy.'
      },
      {
        id:'SYB-07', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — explain why a result matters outside the laboratory',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Moth wings are covered in scales that absorb the ultrasonic calls bats hunt with.</li><li>A 2-millimeter layer of the scales absorbed up to 87 percent of the sound striking it.</li><li>Standard foam panels need about 40 millimeters to absorb as much.</li><li>Thin panels matter in aircraft cabins, where every kilogram counts.</li><li>Engineers printed the pattern of the scales into a plastic sheet.</li><li>The printed sheet absorbed 62 percent of the sound.</li></ul>',
        stem:'The student wants to explain why the moth-scale measurements matter beyond the laboratory bench. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'A 2-millimeter layer of moth scales absorbed up to 87 percent of the ultrasonic sound that struck it in the engineers’ tests.',
          B:'The scales on a moth’s wing absorb the ultrasonic calls bats hunt with, and standard foam needs about 40 millimeters to absorb as much.',
          C:'A printed copy of the scale pattern does in a thin sheet what foam needs 40 millimeters to do, which counts in aircraft cabins where weight is charged by the kilogram.',
          D:'Engineers printed the pattern of the moth scales into a plastic sheet, and that printed sheet absorbed 62 percent of the sound striking it.'
        },
        correct:'C',
        expCorrect:'C moves the finding off the bench: a printed sheet, a thickness far under foam’s 40 millimeters, and a place where thin and light is worth paying for. A and D report the two laboratory numbers, and B pairs the biology with the foam comparison but never names anywhere the difference would be felt.',
        expWrong:{
          A:'True, and 87 percent is the headline. It is a bench measurement of the scales themselves, which is exactly what the goal asks the student to move past.',
          B:'True on both halves, and the foam comparison is the useful one. Without a cabin, a wall, or any other place that needs a thin panel, the comparison stays theoretical.',
          D:'True, and the printed sheet is the step toward manufacture. The sentence reports what the sheet scored, not why anyone outside the laboratory would want it.'
        },
        tip:'Check whether the choice names a setting with a constraint — weight, cost, temperature, space. A result "matters outside the lab" when it meets a constraint someone already has.'
      },
      {
        id:'SYB-08', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — explain why a result matters outside the laboratory',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Making ordinary cement releases about 0.9 tons of carbon dioxide per ton of cement.</li><li>A mix that replaces 30 percent of the cement with clay fired at 800 degrees brings that to about 0.6.</li><li>Clay fired at 800 degrees needs far less heat than the 1,450 degrees cement clinker needs.</li><li>Blocks made with the mix reached 31 megapascals at 28 days.</li><li>The local building code sets 25 megapascals.</li><li>Suitable clay is dug within 20 kilometers of the plant, and the plant’s kiln already reaches 900 degrees.</li></ul>',
        stem:'The student wants to explain why the mix matters for builders in the region rather than only in the test laboratory. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Ordinary cement releases about 0.9 tons of carbon dioxide for every ton made, and the clay mix brings that figure down to roughly 0.6.',
          B:'The blocks clear the code’s 25 megapascals, the clay comes from within 20 kilometers, and the plant’s kiln already reaches 900 degrees.',
          C:'Clay fired at 800 degrees takes far less heat than the 1,450 degrees that cement clinker needs, which is where most of the saving comes from.',
          D:'Blocks made with the mix reached 31 megapascals after 28 days, above the 25 megapascals that the local building code sets for the material.'
        },
        correct:'B',
        expCorrect:'For the region to use the mix, three things have to be true at once, and B has all three: the block is legal to build with, the raw material is next door, and the kiln that fires it is already on site. A gives the environmental headline, C explains the chemistry, and D shows only that the block is strong enough.',
        expWrong:{
          A:'True, and 0.9 down to 0.6 is the reason anyone cares. It is a fact about cement everywhere, with nothing in it about this plant, this clay, or this code.',
          C:'True, and it is why the mix saves what it saves. An explanation of the mechanism is not an argument that this region can act on it.',
          D:'True, and passing the code is one of the three conditions. On its own it shows the block works; it says nothing about whether the plant can make it here.'
        },
        tip:'When the goal says "for builders here" rather than "in general," count the local conditions in the notes. The best choice usually gathers them; a choice with only one is a half-argument.'
      },
      {
        id:'SYB-09', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — explain why a result matters outside the laboratory',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A team tested car battery packs retired from vehicles at 74 percent of their original capacity.</li><li>The packs had spent about eight years in cars.</li><li>Wired into one stack, 60 retired packs stored 1.4 megawatt-hours.</li><li>Over a year of daily charging the stack lost 3 percent of that capacity.</li><li>A clinic in the same district loses power about 40 times a year, for 3 hours on average.</li><li>The stack holds enough to run the clinic for 9 hours.</li></ul>',
        stem:'The student wants to explain why the stack matters to the district rather than only as a test result. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Sixty car battery packs retired at 74 percent of their original capacity, wired together into a single stack, stored 1.4 megawatt-hours.',
          B:'Over a year of daily charging, the stack built from retired packs gave up only 3 percent of the capacity it had started the year with.',
          C:'The stack holds enough for 9 hours, and the district clinic loses power about 40 times a year for roughly 3 hours at a time.',
          D:'The packs in the stack had spent about eight years in cars and were retired once they fell to 74 percent of the capacity they were built with.'
        },
        correct:'C',
        expCorrect:'The district cares about one thing: whether the clinic stays on. C puts the stack’s 9 hours against an outage that lasts about 3 and happens roughly 40 times a year, so the reserve covers the problem three times over. A, B, and D report capacity, durability, and history — all true, all about the batteries rather than the clinic.',
        expWrong:{
          A:'True, and 1.4 megawatt-hours is the stack’s whole point. A capacity with nothing to compare it to tells the district nothing about what it would buy.',
          B:'True, and losing 3 percent in a year is a strong showing. Durability answers "will it last," not "what does it do for anyone here."',
          D:'True, and it explains where the packs came from. The history of the hardware is background; the goal asks what the hardware is worth to the district.'
        },
        tip:'Match the number to the need. When the notes give both a capacity and a demand, the choice that puts them side by side is almost always the one that shows the result matters.'
      },
      {
        id:'SYB-10', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
        skill:'Rhetorical Synthesis — explain why a result matters outside the laboratory',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A breeding program crossed a farmed rice with a wild rice from brackish water.</li><li>In tanks at 6 grams of salt per liter, the cross yielded 4.1 tons per hectare and the farmed parent 1.2.</li><li>In fresh water the cross yields 5.9 tons per hectare and the farmed parent 6.4.</li><li>Seawater has pushed into about 120,000 hectares of delta paddies, which now test near 6 grams per liter.</li><li>Farmers there have been leaving the worst fields unplanted.</li><li>The cross takes 118 days to mature and the farmed parent 112.</li></ul>',
        stem:'The student wants to explain why the cross matters to delta farmers rather than only in the breeding tanks. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'At the 6 grams per liter now measured across 120,000 hectares of delta paddies, the cross yields 4.1 tons per hectare where the farmed parent yields 1.2.',
          B:'In tanks held at 6 grams of salt per liter, the cross yielded 4.1 tons per hectare while the farmed parent it came from yielded only 1.2.',
          C:'In fresh water the cross yields 5.9 tons per hectare, a little under the 6.4 tons per hectare of the farmed parent it was bred from.',
          D:'Seawater has pushed into about 120,000 hectares of delta paddies, and farmers there have been leaving their worst fields unplanted.'
        },
        correct:'A',
        expCorrect:'A carries the tank result out to the fields: the salinity the cross was tested at is the salinity 120,000 hectares now have, and at that level the gap is 4.1 against 1.2. B reports the same numbers without leaving the tanks, C reports the trade-off in the wrong setting, and D describes the problem without connecting the cross to it.',
        expWrong:{
          B:'True, and these are the numbers that matter. Kept inside the tanks, they show the cross is more salt-tolerant without showing that any real field is that salty.',
          C:'True, and the 5.9 against 6.4 is an honest cost. Fresh water is the one condition the delta paddies no longer have, so the comparison lands in the wrong setting.',
          D:'True, and it is why the delta needs a new rice. Naming the problem is not the same as showing that this rice answers it; the yields never appear.'
        },
        tip:'The strongest "why it matters" choices reuse the test condition as a real-world condition. If the notes say the tank was 6 grams per liter and the fields are 6 grams per liter, that repetition is the point.'
      },
      {
        id:'SYB-11', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — report a finding to specialists without explaining the basics',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Bakers keep a sourdough starter alive by feeding it flour and water.</li><li>A laboratory sequenced the microbes in 41 starters kept in home kitchens.</li><li>Every starter held lactic acid bacteria.</li><li>Thirty-eight also held a yeast of the genus Kazachstania.</li><li>Starters fed rye held on average 2.3 times more of that yeast than starters fed wheat.</li><li>The laboratory sampled each starter twice, four months apart.</li></ul>',
        stem:'The student wants to present the study’s finding about flour to an audience of bakers who already keep starters. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'A sourdough starter is flour and water that bakers keep alive by feeding it, and a laboratory sequenced the microbes in 41 of them.',
          B:'Across 41 home starters, the ones fed rye carried on average 2.3 times more Kazachstania yeast than the ones fed wheat did.',
          C:'The laboratory sampled each of the 41 home starters twice, four months apart, and sequenced the microbes living in every sample.',
          D:'Every one of the 41 starters held lactic acid bacteria, and 38 of them also held a yeast of the genus Kazachstania.'
        },
        correct:'B',
        expCorrect:'Bakers who keep starters do not need to be told what a starter is; they need the result about flour. B gives it: rye against wheat, 2.3 times more yeast, across 41 starters. A spends its length on the definition, C describes the sampling, and D reports the census rather than the flour comparison.',
        expWrong:{
          A:'True, and it would be a fair opening for a general reader. For bakers it wastes the sentence on something they already know and never reaches the flour result.',
          C:'True, and sampling twice is good practice. The goal asks for the finding, and a description of how the samples were taken is not one.',
          D:'True, and it is a finding — just not the one named. Which microbes were present is the background against which the rye-versus-wheat difference stands out.'
        },
        tip:'When the audience already knows the subject, the definition sentence is the trap. Cross out any choice whose first clause explains what the thing is.'
      },
      {
        id:'SYB-12', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — report a finding to specialists without explaining the basics',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A lake in a glaciated valley lays down one pale-and-dark sediment couplet a year.</li><li>Thicker couplets form in years with more meltwater.</li><li>A 6.2-meter core from the lake bed holds 4,180 couplets.</li><li>The team counted the couplets under a microscope and photographed every meter.</li><li>Couplets from 1780 to 1830 are on average 0.4 millimeters thicker than those above and below.</li><li>Two counters working independently differed by 11 couplets over the whole core.</li></ul>',
        stem:'The student wants to present the finding to an audience of lake-sediment researchers who already know how these couplets form and are counted. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'A lake in a glaciated valley lays down one pale-and-dark couplet each year, and couplets come out thicker in years with more meltwater.',
          B:'In a 4,180-couplet core, the layers laid down between 1780 and 1830 run 0.4 millimeters thicker than those above and below them.',
          C:'The team counted the couplets in the 6.2-meter core under a microscope and photographed every meter of the core as it was counted.',
          D:'Two counters who worked through the whole core independently of each other came out 11 couplets apart at the end of it.'
        },
        correct:'B',
        expCorrect:'Researchers who read these cores want the anomaly and its size. B gives the interval, the thickness difference and the length of the record in one line. A explains how couplets form, which this audience teaches; C describes routine method; and D reports a quality check rather than the result.',
        expWrong:{
          A:'True, and it is the standard opening for a general reader. Everyone in this audience already knows both facts, so the sentence spends itself on nothing new.',
          C:'True, and counting under a microscope is how it is done. The method is not the finding, and for specialists it is the least surprising part of the notes.',
          D:'True, and an 11-couplet disagreement over 4,180 is reassuring. It speaks to how good the count is, not to what the count showed.'
        },
        tip:'For an expert audience, rank the notes by what they would not already know. The finding is whatever is specific to this study: the interval, the number, the anomaly.'
      },
      {
        id:'SYB-13', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — report a finding to specialists without explaining the basics',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Tooth enamel takes on the strontium ratio of the water an animal drank while the tooth formed.</li><li>A team measured enamel from 30 sheep buried at a hilltop settlement.</li><li>Water on the local bedrock carries a ratio near 0.7091.</li><li>Twenty-three of the sheep fell in the local range; seven sat near 0.7135.</li><li>A ratio of 0.7135 matches the granite uplands 60 kilometers north.</li><li>All seven of those sheep came from one pit.</li></ul>',
        stem:'The student wants to present the result to an audience of archaeologists who already work with strontium isotopes. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Tooth enamel takes on the strontium ratio of the water an animal was drinking during the time when that tooth was forming.',
          B:'The team measured enamel from 30 sheep buried at the hilltop settlement and compared each ratio against the local bedrock.',
          C:'Twenty-three of the 30 sheep measured at the hilltop settlement fell inside the range that the local bedrock gives the water.',
          D:'Seven of the 30 sheep, all from one pit, sat near 0.7135 — the granite uplands 60 kilometers north — rather than the local 0.7091.'
        },
        correct:'D',
        expCorrect:'The result is the seven outliers: their value, where that value points, and the fact that they share a pit. D carries all three. A explains how enamel records water, which this audience uses daily; B describes the measurement; and C reports the 23 sheep who did nothing surprising.',
        expWrong:{
          A:'True, and it is the principle the whole study rests on. Archaeologists who work with strontium already have it, so the sentence tells them nothing about these sheep.',
          B:'True, and it is a clear account of the procedure. The goal asks for what was found, and the number of sheep measured is not a finding.',
          C:'True: 30 minus seven leaves 23 local animals. They are the expected background, and the result the audience needs is the group that broke from it.'
        },
        tip:'In a set of results, the reportable finding is the part that departs from the baseline. The majority that behaved as expected belongs in the background, not the headline.'
      },
      {
        id:'SYB-14', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — report a finding to specialists without explaining the basics',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Peat bogs preserve pollen grains because they are acid and waterlogged.</li><li>A peat core from a blanket bog covers the last 3,000 years.</li><li>Pollen was counted every 2 centimeters down the core.</li><li>Below 78 centimeters, grass pollen holds near 20 percent of the count.</li><li>Above 78 centimeters, grass pollen climbs to 54 percent and tree pollen falls from 61 to 19.</li><li>Charcoal fragments appear at the 78-centimeter level, which radiocarbon puts at about 1,150 years ago.</li></ul>',
        stem:'The student wants to present the finding to an audience of palynologists who already read pollen diagrams. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Peat bogs hold on to pollen grains because they are acid and waterlogged, which is what makes a core like this one countable at all.',
          B:'At the level radiocarbon dates to about 1,150 years ago, tree pollen falls from 61 percent to 19, grass climbs to 54, and charcoal appears.',
          C:'Radiocarbon dating places the 78-centimeter level of the blanket-bog core at roughly 1,150 years before the present day.',
          D:'Below 78 centimeters, grass pollen holds near 20 percent of the total count through the lower part of the peat core.'
        },
        correct:'B',
        expCorrect:'B reports the horizon itself: the date, both pollen curves crossing, and the charcoal that arrives with them. A explains preservation, which this audience takes for granted; C gives the date with nothing happening at it; and D gives the quiet baseline below the change.',
        expWrong:{
          A:'True, and it is why blanket bogs are cored in the first place. Palynologists know it, so the sentence buys nothing and never reaches the horizon.',
          C:'True, and the date is part of the finding. By itself it is a depth with an age attached — the reader is not told what the pollen does there.',
          D:'True, and the 20 percent baseline is what makes the climb to 54 striking. Reported alone it describes the centuries in which nothing changed.'
        },
        tip:'A finding aimed at specialists should carry the change and the moment it happens. Dates without events, and baselines without the departure from them, are both half a sentence.'
      },
      {
        id:'SYB-15', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — report a finding to specialists without explaining the basics',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A mussel lays down one growth band a day, and the bands narrow while the water is cold.</li><li>Shells collected from a harbor wall in 2019 and shells from a 1954 museum lot were sectioned.</li><li>Both lots came from the same harbor wall.</li><li>In the 2019 shells the run of narrow winter bands lasts 71 days on average.</li><li>In the 1954 shells it lasts 103 days.</li><li>At the same band count the 1954 shells are 4 millimeters longer.</li></ul>',
        stem:'The student wants to present the finding to an audience of shellfish biologists who already know how growth bands are read. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'A mussel lays down one growth band every day, and those bands come out narrow during the months when the water is cold.',
          B:'Shells taken from the harbor wall in 2019 and shells from a 1954 museum lot were sectioned so that their growth bands could be read.',
          C:'In shells from one harbor wall, the run of narrow winter bands fell from 103 days in the 1954 lot to 71 days in the 2019 lot.',
          D:'At the same band count, shells from the 1954 museum lot measure about 4 millimeters longer than the shells collected in 2019.'
        },
        correct:'C',
        expCorrect:'C is the finding the goal names: same wall, two lots, and a winter that shortened from 103 banded days to 71. A explains what a band is, which this audience reads professionally; B describes the sectioning; and D reports a separate result about shell length.',
        expWrong:{
          A:'True, and it is the rule that makes band counting possible. Shellfish biologists already have it, so the sentence never gets to what the two lots showed.',
          B:'True, and it establishes that the comparison is fair. Where the shells came from is setup; the goal asks what came out of the comparison.',
          D:'True, and 4 millimeters is a real difference. It answers a question about growth rate rather than about the length of the cold season.'
        },
        tip:'When several true results sit in the notes, pick the one the goal points at. A finding about duration and a finding about size are not interchangeable.'
      },
      {
        id:'SYB-16', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — contrast two measurements of the same quantity',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Two methods measured how much ice a valley glacier lost in one year.</li><li>A field crew read 18 stakes drilled into the ice and calculated a loss of 0.94 meters of water equivalent.</li><li>A satellite pair weighed the same glacier from orbit and calculated 1.21 meters.</li><li>The stakes sit only on the lower half of the glacier.</li><li>The satellite averages over an area larger than the glacier itself.</li><li>Both figures cover the year from October to October.</li></ul>',
        stem:'The student wants to contrast what the two methods measured for the same year. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'A field crew read 18 stakes drilled into the lower half of the valley glacier and calculated a loss of 0.94 meters of water equivalent.',
          B:'The 18 stakes sit only on the glacier’s lower half, while the satellite pair averages over an area larger than the glacier itself.',
          C:'For the same October-to-October year, the stakes gave a loss of 0.94 meters of water equivalent and the satellite pair gave 1.21.',
          D:'A satellite pair weighed the glacier from orbit over the year from October to October and put its loss at 1.21 meters of water equivalent.'
        },
        correct:'C',
        expCorrect:'A contrast of measurements needs both numbers and a shared frame. C has all three: the same year, 0.94 from the stakes, 1.21 from orbit. A and D each give one side, and B contrasts how much ground each method covers rather than what each one measured.',
        expWrong:{
          A:'True, and 0.94 is one of the two figures. With nothing beside it, the reader has no second measurement to weigh it against.',
          B:'True, and it is a real difference between the methods. The difference is in their footprints, not in the losses they reported.',
          D:'True, and 1.21 is the other figure the contrast needs. Alone it is a single result, and the goal asks for two set against each other.'
        },
        tip:'A contrast of measurements is two numbers, one quantity, one period. Rule out anything that gives one number, and anything that contrasts the methods instead of the results.'
      },
      {
        id:'SYB-17', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — contrast two measurements of the same quantity',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>One storm was measured by a tipping-bucket gauge in a schoolyard and by weather radar overhead.</li><li>The gauge recorded 47 millimeters over the storm.</li><li>The radar estimate for the same square kilometer was 68 millimeters.</li><li>Radar reads the water held in the air, not the water that reaches the ground.</li><li>A gauge under-catches in strong wind.</li><li>Wind gusted to 60 kilometers an hour that night, and both figures cover 8 p.m. to 2 a.m.</li></ul>',
        stem:'The student wants to contrast the two measurements of the same storm. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Radar reads the water held in the air rather than the water that reaches the ground, and a rain gauge under-catches in strong wind.',
          B:'The tipping-bucket gauge standing in the schoolyard recorded 47 millimeters of rain between 8 p.m. and 2 a.m. that night.',
          C:'Wind gusted to 60 kilometers an hour on the night of the storm, and a tipping-bucket gauge under-catches rain in strong wind.',
          D:'For the same six hours, the schoolyard gauge recorded 47 millimeters of rain while the radar put the same square kilometer at 68.'
        },
        correct:'D',
        expCorrect:'D sets the two readings of one storm side by side over the same six hours: 47 on the ground, 68 from the radar. A explains why instruments of this kind disagree, C gives one of those reasons with a wind speed attached, and B reports a single figure.',
        expWrong:{
          A:'True of both instruments, and it is the reason behind the gap. Explaining a difference assumes the reader has already been shown it, and here the numbers never appear.',
          B:'True, and 47 millimeters is the ground truth half of the pair. A contrast cannot be built from one measurement.',
          C:'True, and 60-kilometer gusts are why the gauge may read low. This accounts for one instrument’s error without ever reporting what either instrument said.'
        },
        tip:'Explaining why two measurements differ and showing that they differ are separate jobs. If the goal says "contrast," the choice has to contain both numbers.'
      },
      {
        id:'SYB-18', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — contrast two measurements of the same quantity',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A forestry class measured the same 24 trees twice in one afternoon.</li><li>With a handheld laser the mean height came out at 26.8 meters.</li><li>With a clinometer and tape the mean came out at 24.3 meters.</li><li>The laser needs a clear line to the treetop.</li><li>On 9 of the 24 trees the crown was hidden by neighboring branches.</li><li>The class measured every tree with both instruments.</li></ul>',
        stem:'The student wants to contrast the two sets of measurements of the same trees. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The handheld laser gave the 24 trees a mean height of 26.8 meters when the forestry class measured them that afternoon.',
          B:'Measuring the same 24 trees in one afternoon, the class got a mean of 26.8 meters with the laser and 24.3 with the clinometer.',
          C:'The laser needs a clear line to the treetop, and on 9 of the 24 trees the crown was hidden behind neighboring branches.',
          D:'The forestry class measured all 24 trees twice in a single afternoon, once with a handheld laser and once with a clinometer and tape.'
        },
        correct:'B',
        expCorrect:'B gives one set of trees, one afternoon, and both means: 26.8 and 24.3. A reports the laser alone, C names a limitation that may explain the gap, and D describes the design of the comparison without ever saying how it came out.',
        expWrong:{
          A:'True, and 26.8 meters is one of the two means. One instrument’s answer cannot be contrasted with anything.',
          C:'True, and nine blocked crowns is a plausible reason the two instruments disagreed. A reason is not the disagreement itself.',
          D:'True, and it is a fair summary of the procedure. The reader learns that the trees were measured twice but not what the two rounds produced.'
        },
        tip:'Watch for the choice that describes the design instead of the outcome. "They measured it both ways" sounds complete and contains no measurement at all.'
      },
      {
        id:'SYB-19', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — contrast two measurements of the same quantity',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Two laboratory methods estimated the organic carbon in the same 40 soil samples.</li><li>Loss-on-ignition burns the whole sample at 550 degrees and weighs what has gone.</li><li>An elemental analyzer burns a small sub-sample and measures the carbon dioxide released.</li><li>Loss-on-ignition returned a mean of 4.7 percent carbon.</li><li>The elemental analyzer returned 3.9 percent for the same samples.</li><li>Clay minerals give up bound water at 550 degrees, and these soils are clay-rich.</li></ul>',
        stem:'The student wants to contrast the two estimates of carbon in the same samples. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Clay minerals give up their bound water at 550 degrees, and the 40 soils in the study are all clay-rich ones.',
          B:'Loss-on-ignition burns the whole sample at 550 degrees and weighs the loss, while the analyzer burns a sub-sample and measures carbon dioxide.',
          C:'Across the 40 soil samples the elemental analyzer put the mean organic carbon content at 3.9 percent.',
          D:'On the same 40 samples, loss-on-ignition returned a mean of 4.7 percent organic carbon and the elemental analyzer returned 3.9.'
        },
        correct:'D',
        expCorrect:'D names the shared samples and both means, 4.7 and 3.9, which is the whole of a measurement contrast. A explains why the burning method may read high, B contrasts the two procedures rather than their answers, and C gives one mean on its own.',
        expWrong:{
          A:'True, and clay water is very likely why the two means differ. The sentence supplies a cause for a difference that it never states.',
          B:'True, and the procedures really are different. A contrast of methods answers "how do they work," not "what did each one find."',
          C:'True, and 3.9 percent is one of the two figures. Without the 4.7 beside it there is nothing for the reader to compare.'
        },
        tip:'Three kinds of choice cluster around a comparison: one number, a description of the methods, and a cause of the gap. Only the pair of numbers is the contrast.'
      },
      {
        id:'SYB-20', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
        skill:'Rhetorical Synthesis — contrast two measurements of the same quantity',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A basin’s groundwater loss for 2012 to 2022 was estimated two ways.</li><li>Pressure probes in 46 wells gave a drop equal to 11.3 cubic kilometers of water.</li><li>A satellite gravity mission gave 17.9 cubic kilometers for the same basin and decade.</li><li>The satellite cannot separate groundwater from soil moisture, snow, and surface water.</li><li>Reservoir records show surface storage in the basin fell by 5.8 cubic kilometers over the decade.</li><li>The 46 wells are clustered in the irrigated south of the basin.</li></ul>',
        stem:'The student wants to contrast the two estimates of the basin’s loss. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'For 2012 to 2022 the 46 well probes give a loss of 11.3 cubic kilometers and the satellite gravity mission gives 17.9 for the same basin.',
          B:'The satellite cannot separate groundwater from soil moisture, snow, and surface water, and the basin’s surface storage fell by 5.8 cubic kilometers.',
          C:'Pressure probes in 46 wells, all of them clustered in the irrigated south of the basin, showed a drop equal to 11.3 cubic kilometers of water.',
          D:'Over the same decade the basin’s reservoirs lost 5.8 cubic kilometers of surface storage, according to the reservoir records.'
        },
        correct:'A',
        expCorrect:'A holds the decade, the basin and both totals: 11.3 from the wells and 17.9 from orbit. B assembles the reconciliation — what the satellite includes, and how much of it the reservoirs account for — which explains the gap instead of showing it. C gives one estimate with a caveat, and D gives a third quantity altogether.',
        expWrong:{
          B:'True on both counts, and together they go a long way toward closing the 6.6-cubic-kilometer gap. Closing a gap presumes the reader has been shown it, and neither estimate is quoted here.',
          C:'True, and the clustering is worth knowing. The sentence reports one of the two figures and then qualifies it, which leaves the contrast with only one side.',
          D:'True, and 5.8 cubic kilometers is a real measurement. It measures surface storage, not the groundwater loss the two estimates disagree about.'
        },
        tip:'Beware the choice that reconciles two figures it never names. Reconciling is the next paragraph; the contrast has to put the two numbers on the page first.'
      },
      {
        id:'SYB-21', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — place the work in an earlier line of research',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>In 1974 the ecologist Inga Halvorsen proposed that mayfly larvae drift downstream mainly at night.</li><li>She counted larvae in nets set in one stream for six nights.</li><li>A 2021 team set nets in 30 streams across four countries for a full year.</li><li>The 2021 counts ran 6.8 times higher between dusk and dawn than in daylight.</li><li>The 2021 team found the pattern disappears in streams that hold no fish.</li><li>Halvorsen’s stream held brown trout.</li></ul>',
        stem:'The student wants to place the 2021 study in the line of research that began with Halvorsen. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Across 30 streams in four countries, the 2021 counts ran 6.8 times higher between dusk and dawn than they did in daylight.',
          B:'In 1974 Inga Halvorsen counted mayfly larvae in nets set for six nights in a single stream, one that held brown trout.',
          C:'Halvorsen proposed in 1974, from six nights on one stream, that mayfly larvae drift at night; the 2021 team tested that across 30 streams for a year.',
          D:'The 2021 team reported that the night-time drift of mayfly larvae disappears altogether in streams that hold no fish.'
        },
        correct:'C',
        expCorrect:'Placing a study in a line of research means naming the earlier claim and showing what the new work does with it. C has Halvorsen’s 1974 proposal, the thin evidence behind it, and the 2021 test at far greater scale. A and D report the new results, and B reports the old study with nothing after it.',
        expWrong:{
          A:'True, and 6.8 times is the number that settles the question. A result stands on its own; nothing in the sentence says anyone had proposed it before.',
          B:'True, and it is the origin of the line. Stopping in 1974 leaves the reader with a proposal and no sign that it was ever followed up.',
          D:'True, and the fish result is the genuinely new part. It extends the line rather than locating the study within it — Halvorsen never appears.'
        },
        tip:'"Place it in a line of research" needs two dates and a relationship. A choice with only the old work, or only the new, cannot show the relationship.'
      },
      {
        id:'SYB-22', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — place the work in an earlier line of research',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A 1998 paper by the botanist Paul Okeke argued that a heath shrub flowers earlier in warm springs.</li><li>Okeke worked from 40 years of records kept at one botanical garden.</li><li>A new study photographed 3,400 herbarium sheets of the same shrub collected between 1890 and 2020.</li><li>Every sheet carries the date and the place of collection.</li><li>Sheets from the warmest springs carry flowers open 9 days earlier on average.</li><li>The new study finds the shift is twice as large above 600 meters.</li></ul>',
        stem:'The student wants to place the new study in the line of work Okeke began. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Sheets collected in the warmest springs carry flowers that had opened 9 days earlier on average than those from cooler springs.',
          B:'Okeke argued in 1998 from one garden’s 40 years of records that the shrub flowers earlier in warm springs; the new study tests that on 3,400 sheets spanning 130 years.',
          C:'A 1998 paper by the botanist Paul Okeke used 40 years of records from a single botanical garden to study the flowering of a heath shrub.',
          D:'The new study photographed 3,400 herbarium sheets of the shrub, each of them carrying the date and the place where it was collected.'
        },
        correct:'B',
        expCorrect:'B names the 1998 claim, the narrow base it rested on, and the far wider evidence the new study brings to the same question. A gives the new result, C stops at Okeke, and D describes the new method without saying what question it was aimed at.',
        expWrong:{
          A:'True, and nine days is the new study’s answer. An answer with no question behind it does not show that anyone had asked before.',
          C:'True, and it is a fair summary of the earlier paper. The line of research has to reach the present, and this sentence never leaves 1998.',
          D:'True, and 3,400 sheets is a serious archive. Describing the material shows the scale of the new work but not its debt to the old.'
        },
        tip:'The giveaway in this goal is the word "tests," "extends," or "revisits." Look for the choice where the new work does something to the old claim.'
      },
      {
        id:'SYB-23', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — place the work in an earlier line of research',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Ships’ logbooks record the force of the wind in port and at sea.</li><li>Historians of climate have used them for decades.</li><li>A 1988 project transcribed 2,000 Dutch logbooks from the 1700s by hand.</li><li>A new project used trained software to read 46,000 logbooks from seven navies.</li><li>The software agrees with a human transcriber on 94 percent of wind entries.</li><li>The new set shows westerly winds in the 1690s were weaker than in any decade since.</li></ul>',
        stem:'The student wants to place the new project in the line of research the 1988 transcription began. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The new set of logbook readings shows that westerly winds in the 1690s were weaker than in any decade that has followed.',
          B:'Trained software read 46,000 logbooks from seven navies and agreed with a human transcriber on 94 percent of the wind entries.',
          C:'The 1988 project transcribed 2,000 Dutch logbooks by hand; the new one reads 46,000 from seven navies with software that matches a transcriber 94 percent of the time.',
          D:'Ships’ logbooks record the force of the wind in port and at sea, which is why historians of climate have used them for decades.'
        },
        correct:'C',
        expCorrect:'C sets the two projects against each other on the same axis: 2,000 by hand in 1988, 46,000 by software now, with a figure for how far the software can be trusted. A reports the new finding, B describes the new method alone, and D explains why logbooks are used at all.',
        expWrong:{
          A:'True, and the 1690s result is what the archive was built to produce. A finding by itself carries no history; the 1988 project is nowhere in the sentence.',
          B:'True, and 94 percent agreement is what makes the scale-up credible. The sentence describes the new tool without the earlier effort it improves on.',
          D:'True, and it explains the appeal of the source. This is background about logbooks in general, not about either project.'
        },
        tip:'When both projects use the same source, contrast them on scale or technique. The sentence that shows the jump from 2,000 by hand to 46,000 by machine is the one that builds a line.'
      },
      {
        id:'SYB-24', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — place the work in an earlier line of research',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A thin section of pottery shows the mineral grains in the clay, which point to where the clay was dug.</li><li>In 1969 the archaeologist Ruth Abbas sectioned 60 cooking pots from one hillfort.</li><li>Abbas sorted them into three clay groups but matched none of the groups to a source.</li><li>A new survey sectioned 480 pots from nine sites in the same valley.</li><li>The new survey matched Abbas’s group two to a clay bed 14 kilometers upriver.</li><li>The new survey also found a fourth group, absent at the hillfort.</li></ul>',
        stem:'The student wants to place the new survey in the line of work Abbas began. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Sectioning 480 pots from nine sites across the valley, the new survey turned up a fourth clay group that the hillfort itself lacks.',
          B:'A thin section of pottery shows the mineral grains in the clay, and those grains point back to the ground the clay was dug from.',
          C:'In 1969 Ruth Abbas sectioned 60 cooking pots from a single hillfort and sorted them into three groups according to their clay.',
          D:'Abbas sorted 60 hillfort pots into three clay groups in 1969 without matching any to a source; the new survey traced her group two to a bed 14 kilometers upriver.'
        },
        correct:'D',
        expCorrect:'D shows the new survey finishing a job Abbas could not: her three groups, her failure to source them, and the bed that now accounts for one of them. A reports a new group, C stops in 1969, and B explains the technique both surveys used.',
        expWrong:{
          A:'True, and a fourth group is a genuine addition. It reports what the new survey found on its own, with no sign that it was answering an older question.',
          B:'True, and it is the principle behind every thin section. Both surveys rest on it equally, so it cannot show how one follows from the other.',
          C:'True, and it is the starting point of the line. The sentence ends where Abbas ended, and the reader never learns that anyone returned to her groups.'
        },
        tip:'The clearest way to join two studies is to name what the first could not do and the second could. Look for that unfinished business in the notes.'
      },
      {
        id:'SYB-25', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
        skill:'Rhetorical Synthesis — place the work in an earlier line of research',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Muons from cosmic rays pass through rock, and denser rock stops more of them.</li><li>A 1995 experiment left one detector on a volcano’s flank for four months.</li><li>It produced a single shadow image of the summit cone.</li><li>The 1995 image could not distinguish a dense plug from a narrow one.</li><li>A new campaign ran nine detectors around the same cone for two years.</li><li>Combining nine angles, it resolved a dense plug 40 meters wide, 180 meters below the crater floor.</li></ul>',
        stem:'The student wants to place the new campaign in the line of work the 1995 experiment began. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Nine detectors run around the cone for two years resolved a dense plug 40 meters wide, sitting 180 meters below the crater floor.',
          B:'One detector in 1995 gave a single shadow of the cone that could not tell a dense plug from a narrow one; nine detectors have now resolved one 40 meters wide.',
          C:'Muons from cosmic rays pass straight through rock, and rock that is denser stops more of them than rock that is less dense.',
          D:'A 1995 experiment left a single detector on the volcano’s flank for four months and produced one shadow image of the summit cone.'
        },
        correct:'B',
        expCorrect:'B names the 1995 limit and the new campaign that removes it: one angle could not separate a wide plug from a narrow one, and nine angles put a number on it. A gives the new result alone, D gives the old experiment alone, and C explains the physics shared by both.',
        expWrong:{
          A:'True, and a 40-meter plug at 180 meters depth is the payoff. Standing alone, it reads as a first look at the cone rather than as the end of a 30-year problem.',
          C:'True, and every muon image depends on it. Because the 1995 experiment and the new campaign rest on the same principle, it cannot distinguish them.',
          D:'True, and four months on a flank was serious work in 1995. The sentence closes without the new campaign, so there is no line for the reader to follow.'
        },
        tip:'In a line of research the strongest connector is a limitation that the later work lifts. Find what the earlier study could not do, and the right choice will say so.'
      },
      {
        id:'SYB-26', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — emphasize what the study leaves unresolved',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A whale carcass on the deep seabed feeds a community of animals for years.</li><li>A remote vehicle filmed one carcass six times over 11 years.</li><li>Fifty-one animal species were counted on it.</li><li>Nine of the 51 have never been recorded anywhere else.</li><li>Nobody knows how the larvae of those nine reach a new carcass.</li><li>Carcasses can lie hundreds of kilometers apart.</li></ul>',
        stem:'The student wants to emphasize what the study leaves unanswered. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'A remote vehicle filmed the same deep-sea carcass six times over 11 years and counted 51 animal species living on it.',
          B:'Nine of the 51 species counted on the carcass have never been recorded anywhere else in the ocean.',
          C:'Nine of the 51 species live nowhere else, and how their larvae cross the hundreds of kilometers between carcasses is unknown.',
          D:'A whale carcass lying on the deep seabed goes on feeding a community of animals for years after it arrives there.'
        },
        correct:'C',
        expCorrect:'An open question needs the puzzle and the admission. C supplies both: nine species found nowhere else, and no account of how their larvae cross the distance between carcasses. A reports the survey, B stops at the striking fact, and D gives background.',
        expWrong:{
          A:'True, and six visits over 11 years is the work behind the count. The sentence reports what was learned, not what is still missing.',
          B:'True, and these nine species are the heart of the mystery. Without the unanswered question about their larvae, it reads as a finding rather than a gap.',
          D:'True, and it explains why the carcass is worth filming. Background about whale falls in general cannot point to a question this study left open.'
        },
        tip:'An unresolved question almost always needs an explicit "no one knows," "was not measured," or "remains unclear." A choice of pure facts, however striking, is not one.'
      },
      {
        id:'SYB-27', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — emphasize what the study leaves unresolved',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A blind cave fish and a river fish of the same genus were compared.</li><li>The cave fish grows eye buds as an embryo, and then the eyes stop developing.</li><li>Twelve genes switched on in the river fish’s eye sit silent in the cave fish’s.</li><li>Raising cave-fish embryos in light does not restart the eyes.</li><li>Whether losing the eyes saves the fish any energy has never been measured.</li><li>The cave population has been isolated for about 20,000 years.</li></ul>',
        stem:'The student wants to emphasize the question this comparison leaves open. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Twelve genes that are switched on in the river fish’s eye sit silent in the eye of the blind cave fish.',
          B:'Twelve eye genes fall silent in the cave fish, but whether losing the eyes actually saves it any energy has never been measured.',
          C:'Raising cave-fish embryos in the light does not restart the development of the eyes that stopped growing.',
          D:'The cave fish grows eye buds while it is still an embryo, and the eyes then stop developing before they are finished.'
        },
        correct:'B',
        expCorrect:'B pairs what the comparison established, twelve silent genes, with what it never tested, whether blindness pays for itself. A, C and D are all true results, and each one closes a question rather than opening one.',
        expWrong:{
          A:'True, and the twelve genes are the clearest result in the notes. A result is what an open question hangs from; alone it leaves nothing hanging.',
          C:'True, and a negative result is still a result. This one settles that light cannot reverse the loss, which is the opposite of leaving something unsettled.',
          D:'True, and the stalled eye buds are a striking detail of development. The sentence describes what happens, not what nobody has worked out yet.'
        },
        tip:'Negative results are settled, not open. "The treatment did not work" answers a question; "no one has measured it" leaves one.'
      },
      {
        id:'SYB-28', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — emphasize what the study leaves unresolved',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Satellite images put the advance of a crescent dune field at 11 meters a year on average.</li><li>Between 2016 and 2019 the advance slowed to about 4 meters a year.</li><li>Wind records show no change in wind speed over those years.</li><li>The weather station is 90 kilometers from the dune field.</li><li>Rainfall over the dune field rose in the same years.</li><li>Damp sand is harder for wind to move, but nobody measured the moisture in the sand.</li></ul>',
        stem:'The student wants to emphasize what remains unexplained about the slowdown. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Wind records from the station 90 kilometers away show no change in wind speed across the years when the dunes slowed down.',
          B:'Rain rose over the field while the advance fell to about 4 meters a year, but with no moisture ever measured in the sand the link stays unproven.',
          C:'Satellite images put the long-term advance of the crescent dune field at an average of 11 meters a year.',
          D:'Between 2016 and 2019 the advance of the dune field slowed from its long-term average to about 4 meters a year.'
        },
        correct:'B',
        expCorrect:'B names the candidate explanation, rain, and then the reason it cannot be confirmed: the sand’s moisture was never measured. A rules out a rival cause, C gives the baseline, and D gives the observation that needs explaining in the first place.',
        expWrong:{
          A:'True, and steady wind does narrow the field of suspects. Ruling something out is progress toward an answer, not a statement of what is still missing.',
          C:'True, and 11 meters a year is the figure the slowdown departs from. A baseline describes the normal state and raises no question by itself.',
          D:'True, and this is the event in need of explanation. Reporting it leaves the reader with the puzzle but with no sense that it is unsolved.'
        },
        tip:'Sort the notes into observation, candidate cause, and missing evidence. The strongest "still unexplained" choice holds a cause and the measurement that was never taken.'
      },
      {
        id:'SYB-29', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — emphasize what the study leaves unresolved',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Recorders in eight ponds logged the evening chorus of a tree frog for three summers.</li><li>Choruses in the two ponds beside a highway start about 40 minutes later than in the quiet ponds.</li><li>Highway traffic is heaviest until about an hour after sunset.</li><li>Once they begin, the late choruses last as long as the others.</li><li>Whether the late start costs the frogs any eggs was not measured.</li><li>The eight ponds hold similar numbers of frogs.</li></ul>',
        stem:'The student wants to emphasize what the recordings leave unresolved. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Choruses in the two ponds beside the highway begin about 40 minutes later than the choruses in the six quiet ponds.',
          B:'Once they have begun, the late-starting choruses beside the highway go on for as long as the choruses at the quiet ponds do.',
          C:'The highway choruses start 40 minutes late, but whether that delay costs the frogs any eggs was never measured over the three summers.',
          D:'Traffic on the highway stays heaviest until about an hour after sunset, which is when the frogs’ evening chorus would otherwise start.'
        },
        correct:'C',
        expCorrect:'C states the effect the recorders captured and the consequence they could not: a 40-minute delay, and no measurement of whether it costs the frogs anything. A reports the delay, B reports a result that suggests no cost, and D supplies the likely cause.',
        expWrong:{
          A:'True, and the 40-minute delay is the study’s finding. Stated on its own it settles the timing question rather than opening a new one.',
          B:'True, and equal duration is reassuring. It is evidence about consequences, which makes it an answer of sorts, not an acknowledged gap.',
          D:'True, and traffic noise is the obvious explanation for the delay. Explaining why the chorus is late does not say what the study still cannot tell us.'
        },
        tip:'Distinguish the effect measured from the consequence not measured. Studies routinely show that something changed and leave open whether the change matters.'
      },
      {
        id:'SYB-30', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
        skill:'Rhetorical Synthesis — emphasize what the study leaves unresolved',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Soil from a drained fen was spread in greenhouse trays to see which buried seeds would sprout.</li><li>Over 18 months, 44 species sprouted from the trays.</li><li>Nineteen of the 44 no longer grow anywhere in the fen.</li><li>Seven species on the fen’s 1930s plant list did not sprout at all.</li><li>A seed that fails to sprout in a greenhouse may still be alive in the ground.</li><li>The trays were held at a steady 18 degrees; the fen itself swings from 2 to 26.</li></ul>',
        stem:'The student wants to emphasize what the trays leave unresolved about the seven missing species. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Nineteen of the 44 species that sprouted from the greenhouse trays no longer grow anywhere in the drained fen today.',
          B:'Seven species recorded on the fen’s plant list in the 1930s did not sprout from the trays at any point in the 18 months.',
          C:'The greenhouse trays were held at a steady 18 degrees, while the fen itself swings between 2 degrees and 26.',
          D:'The seven species from the 1930s list never sprouted, yet a seed can be alive underground and still refuse a tray kept at a steady 18 degrees.'
        },
        correct:'D',
        expCorrect:'D refuses to read absence as extinction: the seven never appeared, and a tray at constant temperature is not a fair test of a seed used to a range from 2 to 26. A reports a different result, B reports the absence as though it settled the matter, and C gives the temperature fact without applying it.',
        expWrong:{
          A:'True, and 19 species surviving only as buried seed is the study’s best news. It concerns the species that did sprout, not the seven that did not.',
          B:'True, and it is the observation in question. Left there, it invites the reader to conclude the seven are gone — which is exactly what the notes say cannot be concluded.',
          C:'True, and the mismatch in temperature is the key to the doubt. As a bare comparison of conditions it never reaches the seven species or their fate.'
        },
        tip:'Absence of evidence is the classic unresolved case. When the notes say a negative result may be an artifact of the method, the goal wants both halves in one sentence.'
      },
      {
        id:'SYB-31', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — describe the procedure without interpreting the result',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A team tested a white roof coating on a school building.</li><li>They painted one half of the flat roof and left the other half bare.</li><li>The two halves are the same size.</li><li>Sensors under both halves logged the ceiling temperature every 10 minutes for one summer.</li><li>Ceilings under the painted half ran 3.4 degrees cooler at 3 p.m.</li><li>Cooler ceilings mean less work for the building’s fans.</li></ul>',
        stem:'The student wants to describe what the team did, without interpreting the result. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Ceilings under the painted half of the roof ran 3.4 degrees cooler at three in the afternoon than the ceilings under the bare half.',
          B:'The team painted one half of the school’s flat roof, left the other half bare, and logged ceiling temperatures under both every 10 minutes for a summer.',
          C:'Because cooler ceilings mean less work for the fans, the team painted half of a school’s flat roof white and left the other half bare.',
          D:'Sensors logged the ceiling temperature under both halves every 10 minutes through one summer, and the painted half came out 3.4 degrees cooler.'
        },
        correct:'B',
        expCorrect:'B is procedure and nothing else: what was painted, what was left alone, what was measured and how often. A reports the outcome, D reports the procedure and then the outcome, and C attaches a reason for the experiment that the measurements were supposed to test.',
        expWrong:{
          A:'True, and 3.4 degrees is the result the procedure produced. The goal asks for the steps, and a temperature difference is not one of them.',
          C:'True, and less fan work is a fair thing to expect. Leading with why the team expected it turns a description into an argument.',
          D:'True, and the first half of the sentence is exactly right. The second half adds the finding, which is what "without interpreting" rules out.'
        },
        tip:'Read to the end of each choice. A description that starts clean often smuggles the result into its final clause.'
      },
      {
        id:'SYB-32', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — describe the procedure without interpreting the result',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A health department compared two mosquito traps in one neighborhood.</li><li>Twelve blocks were chosen, and each block got both traps.</li><li>A coin toss decided which trap stood in the front garden and which in the back.</li><li>The two traps swapped positions every week for eight weeks.</li><li>The catch was counted and identified every Monday.</li><li>The light trap caught 2.4 times as many mosquitoes as the sticky trap.</li></ul>',
        stem:'The student wants to describe the procedure the department followed, without reporting what it found. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Over eight weeks in the neighborhood, the light trap caught 2.4 times as many mosquitoes as the sticky trap did.',
          B:'Each of the 12 blocks got both traps, a coin toss set which went in front and which in back, the two swapped weekly for eight weeks, and the catch was counted each Monday.',
          C:'The two traps swapped positions every week for eight weeks, and by the end the light trap had caught 2.4 times as many mosquitoes.',
          D:'A coin toss decided which of the two traps stood in each block’s front garden and which one stood in the back.'
        },
        correct:'B',
        expCorrect:'B walks the reader through the design without a single result: both traps on every block, positions assigned by coin toss, a weekly swap for eight weeks, and a Monday count. A gives the finding, C mixes a step with the finding, and D gives one step of four.',
        expWrong:{
          A:'True, and 2.4 times is what the department set out to learn. The goal explicitly excludes the finding, and this choice is nothing but the finding.',
          C:'True, and the weekly swap is a real part of the design. The clause after it delivers the result, which is what the goal rules out.',
          D:'True, and randomizing position is the cleverest part of the setup. One step is not the procedure; the blocks, the swap and the count are all missing.'
        },
        tip:'A procedure description should be reconstructable: a reader ought to be able to repeat the study from it. One step alone fails that test as surely as a result does.'
      },
      {
        id:'SYB-33', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — describe the procedure without interpreting the result',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A wind farm fitted microphones inside the root of every blade on six turbines.</li><li>The microphones recorded continuously for 14 months.</li><li>Software flagged any sound above a set threshold and saved the 30 seconds around it.</li><li>Engineers inspected every blade by rope at the end of the 14 months.</li><li>Four blades had cracks, and the software had flagged all four.</li><li>The software also flagged nine blades that turned out to be sound.</li></ul>',
        stem:'The student wants to describe the procedure the wind farm followed, without reporting how well it worked. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The software flagged all four of the blades that turned out to be cracked, along with nine more blades that were sound.',
          B:'Microphones in the blade roots of six turbines recorded for 14 months, software saved 30 seconds around every sound above a threshold, and crews then inspected each blade by rope.',
          C:'Over 14 months the microphones in the blade roots recorded continuously, and by the end the software had flagged four cracked blades.',
          D:'Engineers went down every blade by rope at the end of the 14 months and found cracks in four of the blades they checked.'
        },
        correct:'B',
        expCorrect:'B lays out the three steps in order — record, flag and save, then inspect — and stops there. A reports how the flags compared with the cracks, C ends on the four cracked blades, and D reports the inspection together with what it turned up.',
        expWrong:{
          A:'True, and four hits with nine false alarms is the performance figure. Performance is precisely what the goal asks the student to leave out.',
          C:'True, and the recording clause belongs in a procedure. The sentence then names the four cracked blades, which is the result.',
          D:'True, and the rope inspection is the last step of the method. Attaching what the engineers found turns the step into a finding.'
        },
        tip:'When a study checks a detector against the truth, the procedure is the checking; the hits and false alarms are the result. Keep them apart.'
      },
      {
        id:'SYB-34', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — describe the procedure without interpreting the result',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A highway agency bolted 24 strain gauges under one span of a concrete bridge.</li><li>The gauges sample 100 times a second whenever a vehicle crosses.</li><li>A weighbridge 3 kilometers ahead recorded the true axle loads of 1,900 trucks.</li><li>Each truck’s weighbridge record was matched to its strain trace by time stamp.</li><li>The traces placed 96 percent of the trucks within 8 percent of the weighed load.</li><li>The traces missed by most on trucks that crossed beside another vehicle.</li></ul>',
        stem:'The student wants to describe how the agency tested the gauges, without saying how well they performed. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Strain traces from the 24 gauges placed 96 percent of the 1,900 trucks within 8 percent of the load the weighbridge had measured.',
          B:'A weighbridge 3 kilometers ahead of the bridge recorded the true axle loads of 1,900 trucks, each one matched to its strain trace by time stamp.',
          C:'The agency bolted 24 gauges under one span, sampled every crossing 100 times a second, and matched each trace to the weighbridge record of 1,900 trucks.',
          D:'The gauges sample 100 times a second as a vehicle crosses, and the traces they produced missed by most on trucks that crossed beside another vehicle.'
        },
        correct:'C',
        expCorrect:'C runs the whole method and stops before the verdict: gauges bolted under the span, sampling rate, and the time-stamp match to 1,900 weighed trucks. A gives the accuracy figures, D ends on where the traces failed, and B describes only the weighbridge half, leaving the gauges out.',
        expWrong:{
          A:'True, and 96 percent within 8 percent is the number the agency wanted. It is the performance result the goal explicitly sets aside.',
          B:'True, and the time-stamp match is the hinge of the whole test. The sentence never mentions the 24 gauges or the sampling, so the method is half told.',
          D:'True, and the sampling rate is a genuine procedural detail. The second clause reports where the method broke down, which is a judgment of performance.'
        },
        tip:'"Without saying how well it worked" bans accuracy figures and failure cases alike. Both are verdicts, and a procedure description carries neither.'
      }
    ]
  });
})();
