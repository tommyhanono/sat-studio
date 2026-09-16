/* SAT Studio question set — Reading & Writing: Rhetorical Synthesis (SYC-01 to SYC-34)
   La rampa de entrada y medio de la destreza: notas cortas (4-6 vinetas), metas nitidas y
   contextos que no se cruzan con rw-synth-a ni rw-synth-b.
   Siete metas: comparar dos cosas · explicar un metodo a quien no conoce el tema ·
   enfatizar una diferencia · enfatizar una semejanza · presentar el trabajo de alguien ·
   subrayar para que sirve un resultado · describir un cambio en el tiempo.
   La regla del set: los TRES distractores son verdaderos segun las notas. Se descartan
   porque no cumplen la meta — uno da medio lado, otro cambia el eje, otro contesta bien
   pero otra pregunta. Nunca se descartan por falsos. */
(function(){
  window.SAT_SETS.push({
    id: 'rw-synth-c',
    title: 'Rhetorical Synthesis — Reading the Goal',
    section: 'rw',
    level: 'Media',
    description: 'Thirty-four notes questions on seven rhetorical goals: compare, explain a method, stress a difference, stress a likeness, introduce a researcher, show what a result is good for, and track a change over time. Short note sets, sharp goals, and three wrong choices that are all true.',
    minutes: 38,
    questions: [
      {
        id:'SYC-01', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — compare two things on one measure',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A construction firm put up scaffolding for two buildings of the same height.</li><li>On the first site the crew lashed bamboo poles together.</li><li>On the second site the crew bolted steel tubes together.</li><li>The bamboo scaffold was ready in 3 days.</li><li>The steel scaffold was ready in 5 days.</li></ul>',
        stem:'The student wants to compare how long the two scaffolds took to put up. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'On the second site, where the crew bolted steel tubes together, the scaffold was ready in 5 days.',
          B:'The scaffold of lashed bamboo was ready in 3 days, and the scaffold of bolted steel in 5 days.',
          C:'The two buildings were the same height, but one scaffold was lashed bamboo and the other bolted steel.',
          D:'On the first site the crew lashed bamboo poles together and had that scaffold ready in 3 days.'
        },
        correct:'B',
        expCorrect:'A comparison needs two sides measured the same way. B names both scaffolds and gives both times, 3 days against 5. A and D each give one side, and C compares the materials rather than the days.',
        expWrong:{
          A:'True, and 5 days is one of the two numbers the comparison needs. With nothing on the bamboo side, there is nothing to weigh it against.',
          C:'True, and both scaffolds are in it — but the sentence contrasts what they were built from. The goal asks about time, and no time appears.',
          D:'True, and it is the bamboo half of the comparison. A reader still cannot tell whether 3 days is fast or slow without the steel figure.'
        },
        tip:'Read the goal before the choices and mark the measure it names. "Compare how long" needs two times in one sentence: drop anything with one side only, and anything that switches to cost, size or material.'
      },
      {
        id:'SYC-02', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — compare two things on one measure',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A baking school tested two flours milled from the same wheat.</li><li>One flour was whole grain; the other was sifted to take out the bran.</li><li>Dough made with the whole grain flour took 78 grams of water per 100 grams of flour.</li><li>Dough made with the sifted flour took 62 grams of water per 100 grams of flour.</li><li>Both doughs were mixed for the same 8 minutes.</li></ul>',
        stem:'The student wants to compare how much water the two flours took up. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The sifted flour, which had the bran taken out, took up 62 grams of water per 100 grams.',
          B:'Both flours were milled from the same wheat, and both doughs were mixed for the same 8 minutes.',
          C:'The whole grain flour took up 78 grams of water per 100 grams and was mixed for 8 minutes.',
          D:'Per 100 grams of flour, the whole grain flour took up 78 grams of water, while the sifted flour took up only 62 grams.'
        },
        correct:'D',
        expCorrect:'D puts the two figures side by side on one measure: 78 grams of water for the whole grain flour against 62 for the sifted one. A and C report a single flour, and B reports what the two flours had in common instead of what the test measured.',
        expWrong:{
          A:'True, and 62 grams is half of the comparison. On its own the number has nothing to be compared with.',
          B:'True on both counts, and both flours are named — but the sentence lists what was held the same. A comparison lives in what differed.',
          C:'True, and it starts with the right number, 78 grams. Then it pairs that number with the mixing time instead of with the other flour.'
        },
        tip:'When the goal says "compare how much," count the numbers in the choice. Two figures of the same quantity means a comparison; one figure plus an unrelated fact does not.'
      },
      {
        id:'SYC-03', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — compare two things on one measure',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A forestry cooperative makes charcoal from pruned branches.</li><li>The old method burns the wood under a mound of earth.</li><li>The new method burns it inside a sealed steel retort.</li><li>The earth mound gives about 15 kilograms of charcoal per 100 kilograms of dry wood.</li><li>The retort gives about 28 kilograms per 100 kilograms of dry wood.</li><li>Both methods use branches from the same plantation.</li></ul>',
        stem:'The student wants to compare the charcoal yield of the two methods. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'From 100 kilograms of dry wood the earth mound gives about 15 kilograms of charcoal and the sealed retort about 28.',
          B:'The cooperative burns pruned branches under a mound of earth in the old method and inside a sealed steel retort in the new one.',
          C:'The sealed steel retort turns 100 kilograms of dry wood from the plantation into about 28 kilograms of charcoal.',
          D:'Both methods start from branches pruned in the same plantation, and one of them gives about 15 kilograms per 100.'
        },
        correct:'A',
        expCorrect:'Yield is kilograms of charcoal per 100 kilograms of wood, and the goal asks for both methods on that scale. A gives 15 for the mound and 28 for the retort. B compares the equipment, C reports one method, and D leaves the 15 kilograms unattached to a named method.',
        expWrong:{
          B:'True, and it names both methods — but it describes how each one burns the wood. Yield is a number, and the sentence has none.',
          C:'True, and 28 kilograms is the stronger of the two yields. Without the 15 beside it, a reader cannot see that the retort roughly doubles the old figure.',
          D:'True, and it does carry a yield figure. It never says which method produced it, so the number cannot be compared with anything.'
        },
        tip:'A yield comparison needs the same denominator on both sides. Check that each figure in the choice is tied to a named method, or the number tells the reader nothing.'
      },
      {
        id:'SYC-04', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — compare two things on one measure',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A marine team maps a shallow reef to track how much of it is live coral.</li><li>In a diver transect, a diver swims along a measured line and records what lies under it.</li><li>In a photomosaic survey, a diver tows a camera and software stitches the frames into one image.</li><li>A diver transect covers about 0.1 hectare of reef in a day.</li><li>A photomosaic survey covers about 1.2 hectares in a day.</li></ul>',
        stem:'The student wants to compare how much reef each method covers in a day. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Swimming along a measured line, a diver running a transect records what lies under it and covers about 0.1 hectare in a day.',
          B:'In a photomosaic survey a diver tows a camera, and software stitches the frames into one image of the reef.',
          C:'A diver transect covers about 0.1 hectare a day; a photomosaic survey covers about 1.2 hectares.',
          D:'A photomosaic survey covers about 1.2 hectares of reef in a day, which the team uses to track live coral.'
        },
        correct:'C',
        expCorrect:'C names both methods and gives both daily areas, 0.1 hectare against 1.2 hectares. A and D each give one method with its area, and B describes how a photomosaic is made without any area at all.',
        expWrong:{
          A:'True, and it carries the transect figure. The photomosaic side is missing, so there is no comparison on the page.',
          B:'True, and it is a fair description of the method — but the goal asks how much reef gets covered, and no area appears.',
          D:'True, and 1.2 hectares is the larger of the two areas. Alone it reads as a plain fact rather than as twelve times the other method.'
        },
        tip:'The shortest choice is not automatically wrong. Judge a comparison by whether both sides and one shared measure are present, not by how much text surrounds them.'
      },
      {
        id:'SYC-05', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — compare two things on one measure',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A frame builder makes steel bicycle frames two ways.</li><li>In a lugged frame, the tubes are brazed into sleeves at about 700 degrees Celsius.</li><li>In a welded frame, the tubes are fused directly at about 1,500 degrees.</li><li>A cracked lugged joint can be heated until the brazing melts, and the tube pulled out and replaced.</li><li>A cracked welded joint has to be cut out, and a new section welded in.</li><li>The two kinds of frame weigh within 40 grams of each other.</li></ul>',
        stem:'The student wants to compare what repairing a cracked joint takes in the two kinds of frame. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The two kinds of frame weigh within 40 grams of each other, though one is brazed at about 700 degrees and the other fused at about 1,500.',
          B:'A cracked lugged joint is heated until the brazing melts and the tube is pulled out, while a cracked welded joint has to be cut out and a new section welded in.',
          C:'Because a welded joint fuses the tubes directly at about 1,500 degrees, a crack in one has to be cut out before a new section is welded in.',
          D:'Tubes brazed into sleeves at about 700 degrees make a lugged frame, and tubes fused directly at about 1,500 degrees make a welded one.'
        },
        correct:'B',
        expCorrect:'The goal names one axis: what the repair takes. B is the only choice with both repairs in it — melt the brazing and pull the tube on one side, cut and weld a new section on the other. A and D compare the two frames on temperature or weight, and C covers the welded repair only.',
        expWrong:{
          A:'True, and it does compare the two frames — on weight and on building temperature. Neither of those is what happens when a joint cracks.',
          C:'True, and it is the welded half of the repair story, with the temperature that explains it. The lugged repair never appears, so nothing is compared.',
          D:'True, and both frames are in it at the same two temperatures. Those are the numbers for building a frame, not for fixing one.'
        },
        tip:'A choice can compare both sides and still miss, if it compares them on the wrong axis. Name the axis in the goal first, then check that the numbers or actions in the choice belong to that axis.'
      },
      {
        id:'SYC-06', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — explain a method to a newcomer',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Tempering is a way of preparing melted chocolate before it is poured into molds.</li><li>The chocolatier first melts the chocolate to 45 degrees Celsius.</li><li>She cools it to 27 degrees while stirring, which forms small stable crystals.</li><li>She warms it back to 31 degrees so that only those crystals are left.</li><li>Tempered chocolate sets with a glossy surface and snaps when it is broken.</li></ul>',
        stem:'The student wants to explain how tempering works to an audience unfamiliar with the process. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Chocolate that has been tempered sets with a glossy surface, and it snaps cleanly when it is broken.',
          B:'Small stable crystals form in melted chocolate that has been cooled to 27 degrees Celsius while it is stirred.',
          C:'Melted chocolate is poured into molds once it has been warmed back to 31 degrees Celsius.',
          D:'In tempering, chocolate is melted to 45 degrees, stirred down to 27 so small stable crystals form, then warmed to 31.'
        },
        correct:'D',
        expCorrect:'A reader who has never heard the word needs the steps in order. D walks through all three: melt to 45, cool to 27 while stirring, warm back to 31. A gives the result, B gives one middle step, and C gives the last step with nothing before it.',
        expWrong:{
          A:'True, and it is what tempering is for — but gloss and snap are how the finished bar behaves. The reader still does not know what was done to the chocolate.',
          B:'True, and it is the step that matters most. One step out of three is not an explanation of how the process works.',
          C:'True, and 31 degrees is the last temperature in the sequence. Starting there leaves out the melt and the stirred cooling that create the crystals.'
        },
        tip:'"Explain how it works to someone unfamiliar" means the steps, in order, in one sentence. Rule out the finished product, a single step, and any version that starts in the middle.'
      },
      {
        id:'SYC-07', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — explain a method to a newcomer',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A calligraphy workshop makes ink from oak galls, the swellings a wasp leaves on oak twigs.</li><li>Crushed galls soak in rainwater for several days, which draws out the tannin.</li><li>Iron sulfate is stirred into the strained liquid, and the mixture turns black.</li><li>Gum arabic goes in last so the ink clings to the pen.</li><li>Letters written in this ink keep darkening for a day after they dry.</li></ul>',
        stem:'The student wants to explain to readers unfamiliar with the craft how the ink is made. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Crushed oak galls soak in rainwater, iron sulfate blackens the strained liquid, and gum arabic goes in last.',
          B:'Oak galls, the swellings a wasp leaves on oak twigs, give up their tannin after several days of soaking in rainwater.',
          C:'Letters written in this ink go on darkening for a full day after they have dried on the page.',
          D:'Gum arabic is stirred in at the end of the process so that the finished ink will cling to the pen.'
        },
        correct:'A',
        expCorrect:'A runs the three steps in order: soak the crushed galls, blacken the strained liquid with iron sulfate, add gum arabic last. B stops after the soak, C describes the dried writing, and D gives only the final ingredient.',
        expWrong:{
          B:'True, and it is the first step plus a useful definition of a gall. The ink is not ink yet: the iron sulfate and the gum arabic are still missing.',
          C:'True, and it is a striking detail — but it is about what the ink does on paper, days after the making is over.',
          D:'True, and it even says why the gum arabic is there. One ingredient at the end does not tell a newcomer how the ink was made.'
        },
        tip:'For a "how it is made" goal, count the steps in the choice. A definition, a last ingredient or a finished-product detail can all be true and still leave the recipe untold.'
      },
      {
        id:'SYC-08', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — explain a method to a newcomer',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A conservator cleaned the yellowed varnish from a 200-year-old oil painting.</li><li>She dissolved agar powder in hot water and let it set into a firm sheet.</li><li>She laid the sheet on the varnish, where it slowly gave up a little solvent.</li><li>The gel held the softened varnish and lifted away without wetting the paint below.</li><li>The colors under the varnish are now several shades brighter.</li></ul>',
        stem:'The student wants to explain the cleaning method to an audience unfamiliar with conservation work. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Under the yellowed varnish of the 200-year-old painting, the colors are now several shades brighter.',
          B:'Agar powder dissolved in hot water sets into a firm sheet, the kind a conservator can lay on a painting.',
          C:'A sheet of set agar laid on the varnish gives up a little solvent, then lifts away holding the softened varnish.',
          D:'The gel lifted the softened varnish away from the painting without wetting any of the paint underneath it.'
        },
        correct:'C',
        expCorrect:'C carries the whole sequence in one line: the set sheet goes on the varnish, releases solvent, then lifts away with the varnish in it. A reports the outcome, B stops at making the gel, and D reports the lift without the solvent step that softened the varnish first.',
        expWrong:{
          A:'True, and it is the point of the whole job. Brighter color is the result, not the method, so a reader learns nothing about how the varnish came off.',
          B:'True, and it is where the method starts. The sheet has not touched the painting yet, so the cleaning itself is still unexplained.',
          D:'True, and it names the part that makes the method safe. Skipping the slow release of solvent leaves out what softened the varnish in the first place.'
        },
        tip:'Test a method choice by asking whether a reader could follow it from start to finish. A choice that keeps only the first step or only the last one fails even though every word in it is true.'
      },
      {
        id:'SYC-09', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — explain a method to a newcomer',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A mapping club photographs archaeological sites from the air using a kite.</li><li>A camera hangs from the kite line in a frame that keeps it level.</li><li>A timer trips the shutter every 10 seconds while the kite is walked across the site.</li><li>Software matches points that overlapping frames share and builds one flat map.</li><li>An afternoon of flying covers a field of about 4 hectares.</li></ul>',
        stem:'The student wants to explain how the club makes its maps to readers who have never seen the technique. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The club can photograph a field of about 4 hectares in a single afternoon of flying its kite.',
          B:'A camera hung from the kite line fires every 10 seconds as the kite is walked across the site, and software stitches the overlapping frames into one flat map.',
          C:'Software takes the points that overlapping frames have in common and builds them into a single flat map of the site.',
          D:'A frame on the kite line keeps the camera level, and a timer trips its shutter once every 10 seconds.'
        },
        correct:'B',
        expCorrect:'B covers both halves of the technique: the camera on the kite line firing every 10 seconds as the kite crosses the site, and the software joining the overlapping frames into one map. A gives the coverage, C gives the software half alone, and D gives the flying half alone.',
        expWrong:{
          A:'True, and 4 hectares shows how much ground the club gets through. It says what the method achieves, not how any of it is done.',
          C:'True, and it is the step that turns photographs into a map. With no kite and no camera, the reader cannot tell where the frames came from.',
          D:'True, and the level frame and the 10-second timer are real parts of the rig. The explanation stops before the frames become a map.'
        },
        tip:'When a method has two halves — gathering and processing — the choice that keeps only one of them is the classic trap. Look for the choice that hands the reader both.'
      },
      {
        id:'SYC-10', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — explain a method to a newcomer',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A sound archive holds wax cylinders recorded in the 1900s, many too fragile to play.</li><li>A microscope camera photographs the groove while the cylinder turns on a spindle.</li><li>Software measures how far the groove wanders from side to side in each photograph.</li><li>That string of measurements is converted into an audio file.</li><li>No needle ever touches the wax.</li><li>The recovered voices are clear enough to transcribe.</li></ul>',
        stem:'The student wants to explain how the archive recovers sound without playing the cylinders, for readers who have never met the technique. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'A microscope camera photographs the turning groove, software measures its side-to-side wander, and the measurements become an audio file.',
          B:'Because no needle ever touches the wax, cylinders too fragile to play can still be read by the archive.',
          C:'The archive holds cylinders recorded in the 1900s, and the voices it has recovered from them are clear enough to transcribe.',
          D:'Software measures how far the groove of a cylinder wanders from side to side, and the recovered voices can be transcribed.'
        },
        correct:'A',
        expCorrect:'A gives the three steps in order: photograph the groove, measure its wander, convert the measurements to audio. B explains why the method is safe, C pairs the collection with the outcome, and D names one step and then jumps to the result, leaving out both the camera and the conversion.',
        expWrong:{
          B:'True, and it is the reason the archive uses this method at all. Saying that nothing touches the wax does not say what does the reading.',
          C:'True at both ends — the fragile collection and the transcribable voices — but everything between them is missing. That middle is the technique.',
          D:'True, and the side-to-side measurement is the heart of the method. Going straight from there to transcribable voices skips how the groove was photographed and how the numbers became sound.'
        },
        tip:'A choice that names one real step and then leaps to the result is the hardest kind to reject, because part of it is exactly right. Ask what a reader would still be unable to picture.'
      },
      {
        id:'SYC-11', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — emphasize a difference',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A fishing village dries its catch in the sun before taking it to market.</li><li>Some families lay the fish out on the open sand.</li><li>Others lay it on raised racks of woven mesh.</li><li>About 12 percent of the fish dried on sand is thrown out as spoiled.</li><li>About 3 percent of the fish dried on racks is thrown out.</li><li>Both groups dry the same species.</li></ul>',
        stem:'The student wants to emphasize a difference in how much fish each drying method loses to spoilage. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Families who lay their catch out on raised racks of woven mesh throw out about 3 percent of it as spoiled.',
          B:'Both groups dry the same species in the sun, some on the open sand and some on raised racks of woven mesh.',
          C:'About 12 percent of the catch that is laid out on the open sand is later thrown out because it has spoiled.',
          D:'Fish dried on sand lose about 12 percent to spoilage; fish dried on racks lose about 3 percent.'
        },
        correct:'D',
        expCorrect:'A difference needs both sides on the same measure. D sets 12 percent against 3 percent, which is the loss figure the goal names. A and C each give one side, and B reports what the two groups share.',
        expWrong:{
          A:'True, and 3 percent is the low side of the contrast. Standing alone it could be read as a large loss or a small one.',
          B:'True, and it names both methods — but the sentence is built around what they have in common, the same species dried in the same sun.',
          C:'True, and 12 percent is the high side. Without the 3 percent beside it, the reader has no difference to see.'
        },
        tip:'"Emphasize a difference" and "compare" both need two sides. What kills a choice here is a sentence built on what the two groups share.'
      },
      {
        id:'SYC-12', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — emphasize a difference',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A beekeeper keeps one hive in a city park and one beside a field of oilseed rape.</li><li>Pollen from the city hive came from more than 30 kinds of plant.</li><li>Pollen from the field hive came from 4 kinds, nearly all of it rape.</li><li>Both hives filled about the same number of frames with honey.</li><li>Both were weighed on the same day in August.</li></ul>',
        stem:'The student wants to emphasize a difference in what the two hives foraged on. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The hive beside the field of oilseed rape brought back pollen from 4 kinds of plant, nearly all of it rape.',
          B:'The two hives filled about the same number of frames with honey and were weighed on the same August day.',
          C:'The city hive brought back pollen from more than 30 kinds of plant; the field hive brought back 4.',
          D:'One hive stands in a city park and the other beside a field of oilseed rape, and both were weighed in August.'
        },
        correct:'C',
        expCorrect:'C puts the two foraging records against each other: more than 30 kinds of plant for the city hive, 4 for the field hive. A covers one hive, B reports a similarity, and D contrasts where the hives stand rather than what the bees brought home.',
        expWrong:{
          A:'True, and it is the narrow half of the contrast. With no figure for the city hive, 4 kinds has nothing to look narrow against.',
          B:'True, and both hives are in it — but honey frames and weighing day are exactly where the two hives matched.',
          D:'True, and it is a real difference: park against rape field. That is a difference in location, and the goal asks about what the bees foraged on.'
        },
        tip:'Check that the difference in the choice sits on the axis the goal names. A difference in place, size or date can be perfectly true and still be the wrong difference.'
      },
      {
        id:'SYC-13', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — emphasize a difference',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A spice cooperative dries chilies before selling them.</li><li>Chilies spread on mats in the open take 6 days to dry.</li><li>Chilies in a glazed solar dryer take 2 days.</li><li>Rain soaked the open mats twice last season, and that batch grew mold.</li><li>The dryer stands on the same rooftop as the mats.</li></ul>',
        stem:'The student wants to emphasize a difference in how long each way of drying takes. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Rain soaked the mats in the open twice last season, and the chilies in that batch grew mold.',
          B:'Chilies spread on mats in the open take 6 days to dry, while chilies in the glazed solar dryer are done in 2 days.',
          C:'Chilies placed in the glazed solar dryer finish drying in only 2 days, on a rooftop the dryer shares with the mats.',
          D:'The cooperative dries its chilies two ways, on open mats and in a glazed dryer, on the same rooftop.'
        },
        correct:'B',
        expCorrect:'The goal names drying time as the axis. B gives both times, 6 days against 2. A contrasts the two methods on spoilage instead, C gives one time, and D names both methods with no time at all.',
        expWrong:{
          A:'True, and it is a strong reason to prefer the dryer. Mold is a difference in what the weather does to the batch, not a difference in drying time.',
          C:'True, and 2 days is half of the contrast. The 6-day figure is what makes 2 days look fast, and it is not here.',
          D:'True, and both methods are named in one line — but the sentence carries no number, so no difference in time is on the page.'
        },
        tip:'When the goal names a measure, the winning choice usually holds two numbers of that measure. A choice that names both things but no numbers is describing, not contrasting.'
      },
      {
        id:'SYC-14', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — emphasize a difference',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Two towns on the same bay rebuilt their seafronts after a storm.</li><li>One town built a vertical concrete wall.</li><li>The other built a sloping wall faced with loose boulders.</li><li>During a storm last winter, spray came over the vertical wall onto the road 14 times.</li><li>Spray came over the sloping wall 2 times.</li><li>Both walls rise 4 meters above the high tide line.</li></ul>',
        stem:'The student wants to emphasize a difference in how much water came over the two walls. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'During one storm last winter, spray came over the vertical concrete wall and onto the road 14 times.',
          B:'Both walls rise 4 meters above the high tide line, and both were built after the same storm damaged the seafront.',
          C:'One town faced its sloping wall with loose boulders, while the other built its wall of vertical concrete.',
          D:'Spray came over the vertical wall 14 times in one storm last winter, and over the sloping wall twice.'
        },
        correct:'D',
        expCorrect:'D reports both counts from the same storm, 14 against 2, which is exactly the water-over-the-wall measure the goal names. A gives one count, B lists what the walls share, and C contrasts how they were built.',
        expWrong:{
          A:'True, and 14 is the striking number. With no figure for the sloping wall, the reader cannot see how unusual 14 is.',
          B:'True, and both walls appear — but height and history are where they match. A similarity cannot carry a contrast.',
          C:'True, and it is a genuine difference between the two seafronts. It is a difference in design, not in how much water came over.'
        },
        tip:'Two counts from the same event are what make a contrast readable. If a choice has one count, ask yourself what it is supposed to be larger or smaller than.'
      },
      {
        id:'SYC-15', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — emphasize a difference',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A pottery studio fires the same clay in two kilns.</li><li>The electric kiln holds a steady temperature and leaves the glaze an even color.</li><li>The wood kiln is stoked by hand, and flying ash settles on the pots.</li><li>The ash melts into streaks that fall differently on every pot.</li><li>A firing takes 9 hours in the electric kiln and 30 hours in the wood kiln.</li></ul>',
        stem:'The student wants to emphasize a difference in how the surfaces of the pots turn out. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The electric kiln leaves an even glaze color, while ash in the wood kiln melts into streaks that differ on every pot.',
          B:'A firing in the electric kiln takes 9 hours, and a firing in the wood kiln takes 30 hours.',
          C:'In the wood kiln, which is stoked by hand, flying ash settles on the pots and melts into streaks.',
          D:'The studio fires the same clay in an electric kiln that holds a steady temperature and in a hand-stoked wood kiln.'
        },
        correct:'A',
        expCorrect:'The axis is the surface of the pots. A sets the even glaze of the electric kiln against the ash streaks of the wood kiln. B contrasts firing time, C describes one kiln, and D contrasts how the two kilns are run.',
        expWrong:{
          B:'True, and 9 hours against 30 is a sharp contrast. It is a contrast in how long a firing takes, and the goal asks about the pots.',
          C:'True, and the ash streaks are the more striking surface. Without the even electric glaze beside them, there is no difference to see.',
          D:'True, and both kilns are named — but steady heat against hand stoking describes the firing, not what the finished surface looks like.'
        },
        tip:'Wrong-axis choices are the most tempting ones in this question type, because they really do contrast the two things. Underline the noun in the goal — here, surfaces — and hold every choice to it.'
      },
      {
        id:'SYC-16', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — emphasize a similarity',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A termite mound has tall chimneys that open near its top.</li><li>Warm air rises through the chimneys and pulls cooler air in at the base of the mound.</li><li>An office building in the same region was built around a tall central shaft.</li><li>Warm air rises up the shaft and draws cooler air in through vents at ground level.</li><li>The mound and the building stand about 2 kilometers apart.</li></ul>',
        stem:'The student wants to emphasize a similarity between the mound and the building. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Warm air rises up the tall central shaft of the office building and draws cooler air in through vents at ground level.',
          B:'A termite mound has chimneys that open near its top, while the office building was built around one central shaft.',
          C:'In both the mound and the building, rising warm air pulls cooler air in at the bottom.',
          D:'The termite mound and the office building stand about 2 kilometers apart in the same dry region.'
        },
        correct:'C',
        expCorrect:'C names both structures and the one mechanism they share: warm air going up pulls cool air in low down. A describes the building alone, B contrasts many chimneys with one shaft, and D reports how close they are, which is not a shared trait.',
        expWrong:{
          A:'True, and it describes exactly the mechanism the goal is about. Only one of the two structures is in the sentence, so nothing is shown to be shared.',
          B:'True, and both structures appear — but the sentence is built on a difference, several chimneys against a single shaft.',
          D:'True, and it puts them in one sentence. Standing 2 kilometers apart is a fact about location, not something the two have in common.'
        },
        tip:'A similarity choice has to do two things at once: name both items and name the trait they share. One item plus the right trait is still a miss.'
      },
      {
        id:'SYC-17', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — emphasize a similarity',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A weaving school teaches on two kinds of loom.</li><li>On a backstrap loom the warp runs from a post to a strap behind the weaver, who leans back to keep it tight.</li><li>On a floor loom the warp is wound on a beam, and a ratchet keeps it tight.</li><li>Neither loom can take the weft through until the warp is under steady tension.</li><li>The backstrap loom rolls up and travels; the floor loom stays where it is built.</li></ul>',
        stem:'The student wants to emphasize a similarity between the two looms. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'On a backstrap loom the weaver leans back against a strap, and on a floor loom a ratchet does the same job.',
          B:'A backstrap loom rolls up and travels with the weaver, while a floor loom stays where it was built.',
          C:'The warp of a floor loom is wound onto a beam, and a ratchet holds that warp under tension.',
          D:'A weaving school teaches on two kinds of loom, the backstrap loom and the floor loom.'
        },
        correct:'A',
        expCorrect:'Both looms need the warp held tight before the weft can pass, and A shows each one doing it, the weaver leaning back and the ratchet holding. B contrasts portability, C covers the floor loom alone, and D only says that both are taught.',
        expWrong:{
          B:'True, and both looms are in the sentence — but travelling against staying put is the clearest difference between them, not a likeness.',
          C:'True, and tension is the right trait to talk about. With the backstrap loom absent, the sentence shows a feature rather than a shared one.',
          D:'True, and it names both looms. Saying that the school teaches on both says nothing about how either one works.'
        },
        tip:'When two things reach the same result by different means, that is a similarity worth writing. Look for the choice that names both means and the one job they both do.'
      },
      {
        id:'SYC-18', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — emphasize a similarity',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A quipu is a set of knotted cords used for keeping records in the Andes.</li><li>Where a knot sits along a cord tells whether it counts ones, tens or hundreds.</li><li>A tally stick is a notched piece of wood used for keeping records in medieval Europe.</li><li>The size of a notch and where it falls on the stick stand for different amounts.</li><li>Neither object carries any writing.</li></ul>',
        stem:'The student wants to emphasize a similarity in how the two objects record a number. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'On a tally stick, the size of a notch and the place it falls stand for different amounts.',
          B:'A quipu records a number by where a knot sits along a cord, and a tally stick records one by where a notch falls on the wood.',
          C:'Quipus were knotted for record keeping in the Andes, and tally sticks were notched for the same purpose in medieval Europe.',
          D:'Neither the knotted cords of a quipu nor the notched wood of a tally stick carries any writing.'
        },
        correct:'B',
        expCorrect:'The goal asks how each object records a number, and both do it by position. B says so for each one, knot along a cord and notch along a stick. A covers one object, C shares only the purpose, and D shares only what is absent.',
        expWrong:{
          A:'True, and position is exactly the right idea. Only the tally stick is described, so the sentence shows one method rather than a shared one.',
          C:'True, and both objects appear with their regions. What they share here is that people kept records with them, not how a number was written down.',
          D:'True, and it is a real thing the two have in common. Saying that neither carries writing tells the reader what the objects lack, not how they store a number.'
        },
        tip:'A shared absence and a shared purpose are both similarities, but rarely the one a goal asks for. Match the shared trait to the verb in the goal: here, how they record.'
      },
      {
        id:'SYC-19', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — emphasize a similarity',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A trial grew millet and sorghum side by side through one dry season.</li><li>Millet rolls its leaves inward when the soil dries, which cuts the water it loses.</li><li>Sorghum coats its leaves in a pale wax, which cuts the water it loses.</li><li>Both crops still carried grain at the end of the season, while the maize beside them failed.</li><li>Millet ripened 3 weeks earlier than sorghum.</li></ul>',
        stem:'The student wants to emphasize a similarity in how the two crops hold on to water. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Millet and sorghum both carried grain at the end of the dry season, while the maize beside them failed.',
          B:'When the soil around it dries out, millet rolls its leaves inward, and that rolling cuts the water the plant loses.',
          C:'Millet rolls its leaves inward and sorghum coats its leaves in pale wax, and each change cuts the water the plant loses.',
          D:'Millet and sorghum were grown side by side in the same trial, and millet ripened 3 weeks before sorghum.'
        },
        correct:'C',
        expCorrect:'Both crops protect the leaf to cut water loss, one by rolling and one by waxing, and C names both. A shares the outcome rather than the mechanism, B describes millet alone, and D ends on the difference in ripening.',
        expWrong:{
          A:'True, and surviving the season is something both crops did. That is the result of holding on to water, not the way they do it.',
          B:'True, and leaf rolling is one of the two mechanisms. With sorghum absent, nothing in the sentence is shared.',
          D:'True, and both crops are named — but ripening 3 weeks apart is where they differ, and the goal asks for a likeness.'
        },
        tip:'Ask whether the goal wants the mechanism or the outcome. Two plants surviving is a shared outcome; two plants cutting water loss at the leaf is a shared mechanism.'
      },
      {
        id:'SYC-20', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — emphasize a similarity',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A glassblower puts each finished piece into an annealing oven at 500 degrees Celsius.</li><li>The oven lets the glass cool over 12 hours so its inside and outside shrink together.</li><li>A blacksmith buries a forged blade in warm ash overnight.</li><li>The ash slows the cooling so the steel does not keep the stresses of the forge.</li><li>Glass left to cool in open air cracks, and steel cooled fast turns brittle.</li><li>The two workshops share a courtyard.</li></ul>',
        stem:'The student wants to emphasize a similarity in why each craftsman slows the cooling. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The glassblower and the blacksmith both slow the cooling to keep stress from setting into the finished piece.',
          B:'An annealing oven brings glass down from 500 degrees over 12 hours, while a blacksmith uses only a bed of warm ash.',
          C:'Glass that is left to cool in the open air cracks, and steel that is cooled quickly turns brittle instead.',
          D:'The two workshops share a courtyard, and in both of them a finished piece is left to cool slowly rather than quickly.'
        },
        correct:'A',
        expCorrect:'The goal asks for the shared reason. A gives it: both slow the cooling so stress does not stay in the piece. B contrasts the two setups, C names the two failures without saying that slow cooling prevents them, and D shares the practice but not the reason.',
        expWrong:{
          B:'True, and both crafts are in it with real detail. A 12-hour oven against a bed of ash is the difference between the two, and the goal asks for a likeness.',
          C:'True, and these are the two problems slow cooling avoids. Written this way the sentence pairs two separate failures and never says why either craftsman waits.',
          D:'True, and it does say both let the piece cool slowly. Sharing a courtyard is incidental, and the sentence stops short of the reason the goal asks for.'
        },
        tip:'When a goal asks why, the correct choice contains a because, a so that, or a to. A choice that only reports what both people do has skipped the half of the sentence the goal wanted.'
      },
      {
        id:'SYC-21', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — introduce the work of a researcher',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Rosa Villalba is a materials engineer at a city university.</li><li>She makes building blocks out of crushed concrete left over from demolition.</li><li>Her blocks reached the strength a garden wall needs after 28 days.</li><li>She has published 6 papers on reusing demolition waste.</li><li>The university keeps a yard where the rubble is sorted by size.</li></ul>',
        stem:'The student wants to introduce Villalba and her work to an audience unfamiliar with her. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The university keeps a yard where the demolition rubble is sorted by size before anything is made from it.',
          B:'Rosa Villalba, a materials engineer, makes building blocks from crushed demolition concrete.',
          C:'Blocks of the kind she makes reached the strength that a garden wall needs after a full 28 days of curing.',
          D:'Six published papers on the reuse of demolition waste have come out of her work at a city university.'
        },
        correct:'B',
        expCorrect:'An introduction gives the name, the field and what the person does. B has all three in one line. A describes the university yard, C reports a result without saying whose it is, and D counts papers without naming her or the work.',
        expWrong:{
          A:'True, and the sorted rubble is where the material comes from. Villalba is not in the sentence, so no one has been introduced.',
          C:'True, and reaching wall strength in 28 days is the finding that makes the work matter. A reader meeting her for the first time still does not know her name or her field.',
          D:'True, and six papers show the work is serious. The sentence never says what the papers are about in practice or who wrote them.'
        },
        tip:'For "introduce the person and the work," check the choice for three things: the name, what they are, and what they actually do. A result or a count of publications is not an introduction.'
      },
      {
        id:'SYC-22', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — introduce the work of a researcher',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Nurit Gavron is an astronomer at a public observatory.</li><li>She runs a project in which volunteers sort telescope images of galaxies by shape.</li><li>More than 40,000 volunteers have sorted images since the project opened in 2019.</li><li>Gavron trained as a physicist before she moved into astronomy.</li><li>The sorted images are used to study how spiral arms form.</li></ul>',
        stem:'The student wants to introduce Gavron and the project to readers who have not heard of either. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Nurit Gavron, an astronomer at a public observatory, runs a project in which volunteers sort telescope images of galaxies by shape.',
          B:'More than 40,000 volunteers have sorted telescope images of galaxies since the project opened in 2019.',
          C:'Gavron trained as a physicist before she moved into astronomy, the field she works in now.',
          D:'Images sorted by volunteers are used by astronomers to study the way the arms of a spiral galaxy form.'
        },
        correct:'A',
        expCorrect:'A introduces the person and the project together: who she is, where she works and what the project asks volunteers to do. B gives the scale, C gives her earlier training, and D gives what the results are for.',
        expWrong:{
          B:'True, and 40,000 volunteers is impressive. The sentence introduces the size of the project rather than Gavron or what she set it up to do.',
          C:'True, and a move from physics to astronomy is a real part of her story. A reader who learns only that still does not know what project she runs.',
          D:'True, and it explains why the sorting is worth doing. Neither Gavron nor the project she runs is named.'
        },
        tip:'Scale, biography and purpose all sound like introductions. Prefer the choice that would let a stranger say, in one line, who the person is and what the work is.'
      },
      {
        id:'SYC-23', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — introduce the work of a researcher',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Ingrid Solheim is a paleobotanist who studies fossil leaves.</li><li>In warm climates a larger share of tree species have smooth-edged leaves.</li><li>Solheim counts smooth and toothed edges in a bed of fossil leaves to estimate the temperature of that time.</li><li>Her count gave 21 degrees Celsius for a bed 50 million years old.</li><li>She keeps her reference collection in 300 labeled drawers.</li></ul>',
        stem:'The student wants to introduce Solheim and explain what her method does. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Solheim keeps the reference collection for her work on fossil leaves in 300 labeled drawers.',
          B:'A bed of fossil leaves 50 million years old gave a temperature of 21 degrees Celsius when the edges were counted.',
          C:'In warm climates a larger share of tree species grow leaves with smooth edges rather than toothed ones.',
          D:'Ingrid Solheim is a paleobotanist who estimates the temperature of ancient climates by counting smooth and toothed edges in beds of fossil leaves.'
        },
        correct:'D',
        expCorrect:'D names her, says what she is, and says what the method does: counting leaf edges to estimate ancient temperature. A describes the collection, B reports one result without her, and C states the rule the method rests on without saying anyone uses it.',
        expWrong:{
          A:'True, and 300 drawers shows how much material the work takes. A filing system is not the method, and the sentence never says what the method is for.',
          B:'True, and 21 degrees is the kind of number her method produces. The sentence hides who did it and how, so it introduces no one.',
          C:'True, and it is the principle that makes the counting meaningful. On its own it is a fact about trees, with no researcher and no method attached.'
        },
        tip:'The background principle behind a method is a favorite distractor here. It is true and it feels explanatory, but a reader cannot tell from it that anyone is doing anything.'
      },
      {
        id:'SYC-24', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — introduce the work of a researcher',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Amara Diallo is a linguist who studies how slang travels across a city.</li><li>Twice a year she collects the words teenagers use in 12 neighborhoods.</li><li>Her maps show new words spreading outward from two central neighborhoods.</li><li>Diallo grew up in one of the neighborhoods she now surveys.</li><li>She has recorded 1,800 words since the survey began.</li></ul>',
        stem:'The student wants to introduce Diallo and her research to an audience unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Maps drawn from the twice-yearly survey show new words spreading outward from two neighborhoods near the center of the city.',
          B:'Since the survey began, 1,800 words have been recorded from teenagers in 12 different neighborhoods.',
          C:'Amara Diallo is a linguist who tracks how slang travels across a city, collecting words from teenagers in 12 neighborhoods.',
          D:'Diallo grew up in one of the 12 neighborhoods where she now collects words from teenagers twice a year.'
        },
        correct:'C',
        expCorrect:'C gives the name, the field and the way the research is carried out. A gives a finding with no researcher, B gives a total with no researcher, and D gives a biographical detail that assumes the reader already knows what the survey is.',
        expWrong:{
          A:'True, and it is the most interesting thing the maps show. A finding presented before the reader knows who Diallo is or what she collects introduces nothing.',
          B:'True, and 1,800 words over 12 neighborhoods shows the scale. The sentence never names Diallo or says what she is trying to learn.',
          D:'True, and growing up in the survey area is a genuine part of her story. It only makes sense to a reader who has already been told what the survey is.'
        },
        tip:'Biography belongs after the introduction, not instead of it. Ask whether the sentence would still make sense to someone who has never heard the name before.'
      },
      {
        id:'SYC-25', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — introduce the work of a researcher',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Yusuf Baraka is an engineer who designs water pumps for village wells.</li><li>Most imported pumps fail at a rubber seal that has to be ordered from abroad.</li><li>Baraka redesigned the pump so that the seal can be cut from an old tire by hand.</li><li>Of 60 of his pumps installed 4 years ago, 57 were still working last year.</li><li>He runs a workshop that trains local mechanics.</li><li>He holds no patent on the design.</li></ul>',
        stem:'The student wants to introduce Baraka and the problem his design solves. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Yusuf Baraka is an engineer whose village well pumps replace the imported rubber seal, a part that fails and has to be ordered from abroad, with one cut by hand from an old tire.',
          B:'Of the 60 of his pumps installed 4 years ago, 57 were still drawing water from village wells last year.',
          C:'Baraka runs a workshop where local mechanics are trained, and he has taken out no patent at all on his pump design.',
          D:'The rubber seal in most imported pumps fails in the field, and a replacement part has to be ordered from outside the country.'
        },
        correct:'A',
        expCorrect:'The goal asks for two things: who Baraka is and what problem the design solves. A carries both, the imported seal that fails and the tire seal cut by hand. B reports how well the pumps held up, C reports what he does besides designing, and D states the problem with nobody solving it.',
        expWrong:{
          B:'True, and 57 of 60 is the evidence that the design works. Evidence of success is not an introduction, and the seal that caused the trouble never appears.',
          C:'True on both counts, and the open design and the training are part of why the pumps stay in service. Neither says what the pump does differently or why that mattered.',
          D:'True, and it is the problem itself, stated cleanly. Baraka is missing, so the reader meets a difficulty and no one working on it.'
        },
        tip:'When a goal names two elements, mark them both and check each choice against both. A choice with only the person, or only the problem, is exactly half right, which is still wrong.'
      },
      {
        id:'SYC-26', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — show what a result is good for',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Seed saved from last harvest does not all sprout.</li><li>A farmer rolls 20 seeds in a damp paper towel and counts how many sprout within a week.</li><li>If 14 sprout, the batch is about 70 percent viable.</li><li>A farmer who knows that rate sows the seed thicker and avoids gaps in the rows.</li><li>The test costs nothing but a sheet of paper.</li></ul>',
        stem:'The student wants to emphasize what the test lets a farmer do. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Twenty seeds are rolled in a damp paper towel and counted a week later to see how many have sprouted.',
          B:'A batch in which 14 of the 20 test seeds sprout within the week is about 70 percent viable seed.',
          C:'The whole test costs a farmer nothing beyond a single sheet of paper taken from the kitchen roll.',
          D:'Knowing the sprouting rate, a farmer can sow thicker and keep gaps out of the rows.'
        },
        correct:'D',
        expCorrect:'The goal asks what the test lets the farmer do, and D says it: sow thicker and avoid gaps. A describes the procedure, B explains how the rate is read, and C reports the cost. All three are true and none of them is a use.',
        expWrong:{
          A:'True, and it is the test itself, step by step. The goal asks about what comes after the count, not about how the count is made.',
          B:'True, and turning 14 out of 20 into 70 percent is how the result is read. Reading a number is still not doing something with it.',
          C:'True, and costing nothing is a good reason to run the test. Cheapness is an advantage of the method, not something the farmer can do with the answer.'
        },
        tip:'"What it lets someone do" points at a decision or an action taken afterward. Procedure, arithmetic and cost are all true and all off target.'
      },
      {
        id:'SYC-27', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — show what a result is good for',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A dry riverbed in the region carries water only a few weeks a year.</li><li>Villages have built low concrete walls across the bed.</li><li>Sand piles up behind each wall, and water is held in the spaces between the grains.</li><li>Water held in sand loses far less to evaporation than water standing in an open pond.</li><li>Wells beside the walls still gave water 5 months into the dry season.</li><li>Before the walls were built, those wells ran dry after 2 months.</li></ul>',
        stem:'The student wants to emphasize what the walls are good for in practice. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Sand piles up behind each low concrete wall, and water collects in the spaces between the grains of sand.',
          B:'Wells beside the walls now give water 5 months into the dry season, where before they ran dry after 2 months.',
          C:'Water held in the sand behind a wall loses far less to evaporation than water standing in an open pond.',
          D:'The riverbed the villages dammed with low concrete walls carries running water only a few weeks a year.'
        },
        correct:'B',
        expCorrect:'The practical payoff is how long the wells keep giving water: 5 months now against 2 months before. A describes how the store forms, C explains why sand holds water well, and D sets the scene.',
        expWrong:{
          A:'True, and it explains where the water goes. Describing the store is not the same as saying what the village gets out of it.',
          C:'True, and low evaporation is the reason the walls work so well. A reason is not a use, and no one in the sentence is better off yet.',
          D:'True, and a few weeks of flow a year is the problem the walls answer. The sentence states the difficulty and stops before the benefit.'
        },
        tip:'Look for the before-and-after in a usefulness goal. The choice that shows what changed for the people involved beats the one that explains the physics.'
      },
      {
        id:'SYC-28', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — show what a result is good for',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A goat dairy collects milk twice a day and sells it to a cheese maker.</li><li>Milk left warm for more than 3 hours is refused at the gate.</li><li>The dairy installed a chiller that runs on rooftop solar panels.</li><li>Refused deliveries fell from about 1 in 5 to about 1 in 40.</li><li>The same panels also light the milking shed.</li></ul>',
        stem:'The student wants to emphasize the practical value of the chiller for the dairy. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The cheese maker refuses any delivery of milk that has been left standing warm for more than 3 hours.',
          B:'A chiller on the dairy runs on solar panels that also light the milking shed where the goats are milked.',
          C:'Refused deliveries fell from about 1 in 5 to about 1 in 40 after the chiller went in.',
          D:'Milk is collected twice a day at the dairy and then sold on to a cheese maker in the same area.'
        },
        correct:'C',
        expCorrect:'The value shows up in what the dairy no longer loses: 1 in 5 deliveries refused before, about 1 in 40 after. A states the rule the dairy was failing, B reports a side benefit of the panels, and D describes the routine.',
        expWrong:{
          A:'True, and the 3-hour rule is the reason the chiller was needed. Stating the rule is stating the problem, not what the dairy gained.',
          B:'True, and lighting the shed is a genuine extra. It is the panels doing a second job, not the chiller saving the milk.',
          D:'True, and it is how the dairy works. A description of the routine could have been written before the chiller arrived.'
        },
        tip:'The usefulness of a fix is usually the number that moved. Scan the choices for the one that names a before and an after.'
      },
      {
        id:'SYC-29', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — show what a result is good for',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A city recorded which of its street trees died during three dry summers.</li><li>Of the plane trees planted since 2000, 31 percent died.</li><li>Of the hackberries planted in the same years, 4 percent died.</li><li>Roots under paving get little rain, whatever the species.</li><li>The parks department now plants hackberry along the hottest streets.</li></ul>',
        stem:'The student wants to emphasize what the city did with the finding. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Among the street trees planted since 2000, 31 percent of the plane trees died during the three dry summers.',
          B:'Street trees of every species have roots under paving, and those roots receive very little rain.',
          C:'Over three dry summers the city recorded how many of its street trees died, species by species.',
          D:'Because only 4 percent of the hackberries died, the parks department now plants hackberry along the hottest streets.'
        },
        correct:'D',
        expCorrect:'The goal asks what the city did about it, and only D reaches the decision: hackberry on the hottest streets, because it survived. A gives the losing side of the finding, B gives the shared difficulty, and C describes the study.',
        expWrong:{
          A:'True, and 31 percent is the number that made the study worth doing. A death rate is a finding, and the goal asks what followed from it.',
          B:'True, and dry roots under paving are the background to the whole problem. Nothing in the sentence is a decision or an action.',
          C:'True, and it says how the evidence was gathered. Method and finding both come before the part the goal is asking for.'
        },
        tip:'Watch for the choice that contains a because or a therefore linking evidence to an action. Findings are easy to mistake for consequences when both are true.'
      },
      {
        id:'SYC-30', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — show what a result is good for',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Rice put into storage above 14 percent moisture grows mold.</li><li>An electronic moisture meter costs more than most small growers can pay.</li><li>A research station printed a card whose color changes against grain of different moisture.</li><li>In trials the card sorted samples into safe and unsafe correctly 9 times out of 10.</li><li>Growers who used the card lost 6 percent of their stored rice; growers without it lost 19 percent.</li><li>The card costs about as much as a loaf of bread.</li></ul>',
        stem:'The student wants to emphasize the practical usefulness of the card for small growers. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'In trials the card sorted rice samples into safe and unsafe correctly 9 times out of 10.',
          B:'Growers who used the card, which costs about as much as a loaf of bread, lost 6 percent of their stored rice, against 19 percent for growers without one.',
          C:'Rice that goes into storage above 14 percent moisture will grow mold, whatever the grower paid for it.',
          D:'An electronic moisture meter costs more than most small growers are able to pay.'
        },
        correct:'B',
        expCorrect:'B joins the price a grower can afford to the loss it prevents, 6 percent against 19 percent. A reports how well the card sorts, C states the danger it guards against, and D states the gap in the market it fills.',
        expWrong:{
          A:'True, and 9 out of 10 is how accurate the card is. Accuracy is a property of the tool, not what a grower keeps because of it.',
          C:'True, and the 14 percent line is the whole reason the card exists. That is the problem, not the payoff.',
          D:'True, and the price of the electronic meter explains why a printed card was worth making. Nothing here says what using the card is worth.'
        },
        tip:'Accuracy, price and the underlying problem are the three standard near misses in a usefulness question. The answer is what the user ends up with.'
      },
      {
        id:'SYC-31', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — describe a change over time',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>An automatic counter set in the deck of a city bridge counts bicycles.</li><li>In 2016 it counted an average of 900 bicycles a day.</li><li>In 2020 it counted an average of 1,600 a day.</li><li>In 2024 it counted an average of 2,700 a day.</li><li>A protected bike lane was added to the bridge in 2019.</li></ul>',
        stem:'The student wants to describe how bicycle traffic on the bridge changed between 2016 and 2024. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'A protected bike lane was added to the bridge in 2019, three years after the first of these daily counts.',
          B:'An automatic counter set into the deck of the city bridge counts every single bicycle that crosses it.',
          C:'In 2024 the counter set in the bridge deck recorded an average of 2,700 bicycles crossing it each day.',
          D:'Daily bicycle counts on the bridge rose from 900 in 2016 to 1,600 in 2020 and 2,700 in 2024.'
        },
        correct:'D',
        expCorrect:'A change over time needs at least two dated readings, and D gives three in order: 900, 1,600, 2,700. A gives an event, B gives the instrument, and C gives the last reading with nothing to compare it against.',
        expWrong:{
          A:'True, and the bike lane may well be part of the reason for the rise. An event in 2019 is not a description of how the counts moved.',
          B:'True, and it says where the numbers come from. The sentence would read the same whether traffic had tripled or halved.',
          C:'True, and 2,700 is the highest figure in the notes. One reading cannot show a change, because there is nothing earlier beside it.'
        },
        tip:'For a change over time, count the dated numbers in the choice. One number is a snapshot; two or more in order are a trend.'
      },
      {
        id:'SYC-32', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — describe a change over time',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A school weighs what is left on the cafeteria trays at the end of each lunch.</li><li>In the first week of term the scale read 41 kilograms a day.</li><li>By the sixth week it read 33 kilograms a day.</li><li>By the twelfth week it read 22 kilograms a day.</li><li>Students began serving themselves from bowls in the second week.</li></ul>',
        stem:'The student wants to describe the change in the weight of food left on the trays across the term. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'From the second week of term onward, students at the school served themselves from bowls at every lunch.',
          B:'The school weighs whatever is left on the cafeteria trays at the end of every lunch.',
          C:'Food left on the trays fell from 41 kilograms a day in the first week to 33 by the sixth and 22 by the twelfth.',
          D:'By the twelfth week of term the trays were carrying 22 kilograms of leftover food away each day.'
        },
        correct:'C',
        expCorrect:'C traces the weight across the term with all three readings in order, 41 down to 33 down to 22. A names the change in serving, B names the routine, and D gives the last figure on its own.',
        expWrong:{
          A:'True, and serving from bowls is the likeliest cause of the drop. A cause is not the change, and no weights appear in the sentence.',
          B:'True, and it explains where the figures come from. Describing the weighing says nothing about which way the numbers went.',
          D:'True, and 22 kilograms is the end of the story. Without the 41 it began at, the reader cannot tell whether that is a lot or a little.'
        },
        tip:'Causes and methods crowd around change-over-time goals. The answer is the sentence that would let a reader draw the line, not the one that explains why the line moved.'
      },
      {
        id:'SYC-33', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — describe a change over time',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A city compared aerial photographs of two districts taken in 1995 and in 2020.</li><li>In the riverside district, canopy cover went from 18 percent to 29 percent.</li><li>In the market district, canopy cover went from 22 percent to 11 percent.</li><li>The riverside district planted trees along a new park path.</li><li>The market district widened two of its streets.</li></ul>',
        stem:'The student wants to describe how the canopy of the two districts changed over the 25 years. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Riverside canopy rose from 18 percent to 29; market district canopy fell from 22 to 11.',
          B:'Along a new park path the riverside district planted trees, and its canopy cover reached 29 percent by 2020.',
          C:'The city compared aerial photographs of the two districts taken 25 years apart, in 1995 and in 2020.',
          D:'In the market district, where two streets were widened, canopy cover had fallen to 11 percent by 2020.'
        },
        correct:'A',
        expCorrect:'Two districts moved in opposite directions, and the goal asks for both. A gives the start and end figures for each, 18 to 29 and 22 to 11. B and D each follow one district, and C describes the comparison without reporting it.',
        expWrong:{
          B:'True, and it names both an end figure and a cause. Only the riverside district is followed, so half of the change is missing.',
          C:'True, and it establishes the 25-year span. A sentence about what was compared never says what the comparison found.',
          D:'True, and 11 percent is the sharpest figure in the notes. It gives the market district alone, and without the 22 percent it started from, even that fall is not on the page.'
        },
        tip:'When a goal says "the two," both halves have to appear. A choice that traces one side well is the most common wrong answer, not a partial credit.'
      },
      {
        id:'SYC-34', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — describe a change over time',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A family beside a mountain lake has written down the day the ice breaks up every spring since 1890.</li><li>In the 1890s the ice held for an average of 121 days a winter.</li><li>In the 1950s it held for an average of 108 days.</li><li>In the 2010s it held for an average of 84 days.</li><li>Four generations have kept the record in the same notebook.</li></ul>',
        stem:'The student wants to describe how the length of the ice season changed across the record. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Four generations of one family have written the spring break-up date in the same notebook since 1890.',
          B:'A family beside the lake notes the day the ice breaks up, which in the 2010s left an average season of 84 days.',
          C:'The record of the day the ice breaks up on the lake reaches all the way back to 1890.',
          D:'The ice held an average of 121 days a winter in the 1890s, 108 days in the 1950s and 84 days in the 2010s.'
        },
        correct:'D',
        expCorrect:'D lays the three averages out in order, 121 to 108 to 84, so the shortening season is visible. A describes who kept the record, B gives only the most recent average, and C reports how far back the record goes.',
        expWrong:{
          A:'True, and four generations of one notebook is what makes the record trustworthy. Who wrote the numbers down is not how the numbers changed.',
          B:'True, and 84 days is the latest figure in the notes. A single decade cannot show a change, because there is nothing earlier to set it against.',
          C:'True, and the 1890 start date matters. The length of the record is not the same thing as the trend inside it.'
        },
        tip:'The value of a long record is a tempting thing to write about, but it is not the trend. Answer a change-over-time goal with the numbers themselves, oldest first.'
      }
    ]
  });
})();
