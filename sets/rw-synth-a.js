/* SAT Studio question set — Reading & Writing: Rhetorical Synthesis (SYA-01 to SYA-34)
   Ocho metas retoricas distintas, cada una repetida 4-5 veces con contextos frescos.
   La regla del set: los TRES distractores son verdaderos segun las notas. Se descartan
   por no cumplir la meta, no por falsos — uno la cumple a medias, otro trae datos
   correctos pero contesta otra pregunta, y el tercero mezcla dos vinetas y pierde el punto. */
(function(){
  window.SAT_SETS.push({
    id: 'rw-synth-a',
    title: 'Rhetorical Synthesis — Goal Lab',
    section: 'rw',
    level: 'Difícil',
    description: 'Thirty-four notes questions across eight rhetorical goals: compare, explain a method, stress a difference, stress a likeness, report a finding, introduce a researcher, flag a limitation, and show what a result is good for. Every wrong choice is true — it just misses the goal.',
    minutes: 40,
    questions: [
      {
        id:'SYA-01', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — compare two things',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A small mill makes writing paper from banana stems left over after the harvest.</li><li>One ton of its banana-fiber paper takes about 5,000 liters of water to produce.</li><li>One ton of standard wood-pulp paper takes about 26,000 liters.</li><li>Both papers pass the same strength test for writing paper.</li><li>The mill sells its paper to schools in the same province.</li></ul>',
        stem:'The student wants to compare the water use of the two papers. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The mill turns banana stems left over after the harvest into writing paper that passes the same strength test as wood-pulp paper.',
          B:'A ton of the mill’s banana-fiber paper takes about 5,000 liters of water; a ton of standard wood-pulp paper takes about 26,000.',
          C:'Producing one ton of standard wood-pulp paper takes about 26,000 liters of water, and that paper passes the strength test for writing paper.',
          D:'The mill’s banana-fiber paper takes about 5,000 liters of water per ton and passes the same strength test the wood-pulp paper does.'
        },
        correct:'B',
        expCorrect:'The goal has two halves: both papers, and the same measure (water). B names both and puts the two figures side by side, 5,000 against 26,000. A never mentions water, C gives only one side, and D drops the second figure for a fact about strength.',
        expWrong:{
          A:'True, and both papers are in it — but they are matched on strength. Water, the measure the goal names, never appears in the sentence.',
          C:'True, and 26,000 liters is one of the two figures the comparison needs. Without the 5,000 beside it, the reader has nothing to weigh it against.',
          D:'True on both counts, but it pairs one water figure with the strength test. Strength is where the papers match; water is where they differ.'
        },
        tip:'Underline the goal before you read the options. "Compare" means two sides and one shared measure — rule out anything that names one side, or that switches to a different measure.'
      },
      {
        id:'SYA-02', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — explain a method to an unfamiliar audience',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Nixtamalization is a way of preparing dried corn before it is ground.</li><li>Cooks simmer the kernels in water mixed with slaked lime and let them soak overnight.</li><li>The soak loosens the tough skin on each kernel, which is then rinsed away.</li><li>The softened kernels grind into a smooth dough.</li><li>The process also makes some of the niacin in corn available to the body.</li><li>Tortillas and tamales are made from the dough.</li></ul>',
        stem:'The student wants to explain how nixtamalization works to an audience unfamiliar with the process. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Tortillas and tamales are both made from the smooth dough that the softened kernels turn into once the loosened skins have been rinsed away.',
          B:'Nixtamalization makes some of the niacin in corn available to the body, a change that takes place while the kernels soak overnight in lime water.',
          C:'In nixtamalization, dried corn is simmered in lime water and soaked overnight; the loosened skins rinse away and the kernels grind into a smooth dough.',
          D:'Dried corn that has been simmered and left to soak overnight grinds into a smooth dough, and tortillas and tamales are both made from that dough.'
        },
        correct:'C',
        expCorrect:'A reader who has never heard the word needs the steps in order. C walks through them: simmer in lime water, soak overnight, rinse the loosened skins, grind. A gives the end product, B gives an effect, and D jumps from the soak to the tortilla with the middle of the process missing.',
        expWrong:{
          A:'True, and it names both the dough and the dishes — but it starts where the process ends. A reader still does not know what was done to the corn.',
          B:'True, and the overnight soak is when it happens. Even so, it reports what nixtamalization achieves in the body, not how the corn is prepared.',
          D:'True at both ends, the soak and the dough, but between them it skips the slaked lime, the loosened skin and the rinse — the part that does the work.'
        },
        tip:'Underline the goal first. "Explain how it works to someone unfamiliar" calls for the steps in order — not the product, not the benefit, and not a summary that jumps over the middle.'
      },
      {
        id:'SYA-03', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — emphasize a difference',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A farm rebuilt part of a field boundary as a dry stone wall, laid without mortar.</li><li>A neighboring farm built its wall from stones set in cement mortar.</li><li>Rain drains straight through the gaps in the dry stone wall.</li><li>The mortared wall holds water behind it after a heavy rain.</li><li>Both walls stand about a meter high.</li><li>Both were built from stone cut at the same quarry.</li></ul>',
        stem:'The student wants to emphasize a difference in how the two walls handle rain. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Rain drains straight through the gaps in the dry stone wall, while the mortared wall holds water behind it.',
          B:'Both walls stand about a meter high, and both farms built them from stone cut at the same quarry.',
          C:'After a heavy rain, the wall whose stones are set in cement mortar holds the water back behind it.',
          D:'Both farms used stone from the same quarry, but one laid its wall dry and the other set the stones in mortar.'
        },
        correct:'A',
        expCorrect:'The goal names the axis: rain. A puts the two behaviors against each other on exactly that axis — water through the dry wall, water held behind the mortared one. B reports what the walls share, C covers only one wall, and D contrasts the building material instead of the drainage.',
        expWrong:{
          B:'True, and both walls are in it — but height and quarry are what they have in common. A similarity cannot emphasize a difference.',
          C:'True, and it is half of the contrast, the mortared half. With nothing on the dry stone side, there is no difference on the page.',
          D:'True, and it is a real difference: mortar against no mortar. That is a difference in how the walls were built, not in how they handle rain.'
        },
        tip:'Underline the goal, and note the axis it names. "A difference in how they handle rain" rules out shared traits and rules out differences of any other kind.'
      },
      {
        id:'SYA-04', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — emphasize a similarity',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A survey compared a mangrove stand and a seagrass bed on the same coast.</li><li>Mangrove trees trap mud with their arching roots.</li><li>Seagrass slows the water with its leaves, so mud settles among them.</li><li>Each hectare of mangrove held about 180 tons of trapped sediment.</li><li>Each hectare of seagrass held about 160 tons.</li><li>Mangroves grow above the waterline; seagrass stays fully underwater.</li></ul>',
        stem:'The student wants to emphasize a similarity between the two habitats. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Mangroves grow above the waterline, while the seagrass surveyed on the same coast stays fully underwater.',
          B:'Each hectare of the mangrove stand held about 180 tons of sediment, trapped by the trees’ arching roots.',
          C:'Mangrove roots arch up above the mud, and the seagrass on the same coast keeps its leaves underwater.',
          D:'Both habitats trap sediment: about 180 tons per hectare under the mangroves and about 160 under the seagrass.'
        },
        correct:'D',
        expCorrect:'A similarity needs a trait stated as shared. D does it in the first two words — both trap sediment — and then backs it with comparable figures. A states a difference, B covers one habitat, and C mentions both but only to describe them separately.',
        expWrong:{
          A:'True, and both habitats are in it — but above the waterline against fully underwater is a contrast, the opposite of what the goal asks for.',
          B:'True, and 180 tons with the roots that trapped it is solid detail. One habitat on its own cannot show what the two have in common.',
          C:'True of each habitat, yet it sets two descriptions side by side without naming anything they share. The reader is left to supply the similarity.'
        },
        tip:'Underline the goal. For "similarity," look for a sentence built on a shared claim — both, alike, each — and reject the ones that merely mention the two subjects in the same breath.'
      },
      {
        id:'SYA-05', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — introduce a researcher’s work',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Nadia Okonkwo is a linguist who studies whistled forms of speech.</li><li>In a whistled language, speakers turn the sounds of ordinary words into whistles.</li><li>The whistles carry across a valley much farther than a shout.</li><li>Okonkwo has recorded whistled conversations in four mountain villages.</li><li>She is building an online archive so the villages can teach the practice to children.</li><li>She learned to whistle the local language herself before she began recording.</li></ul>',
        stem:'The student wants to introduce Okonkwo’s work to an audience unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Before she began recording in the mountain villages, Okonkwo learned to whistle the local language herself.',
          B:'Okonkwo, a linguist, studies whistled speech: the practice of turning the sounds of ordinary words into whistles.',
          C:'Turned into whistles, the sounds of ordinary words carry across a valley much farther than a shout does.',
          D:'Okonkwo is building an online archive so the four villages she recorded can teach whistling to their children.'
        },
        correct:'B',
        expCorrect:'An introduction has to say who she is and what she studies, in terms a newcomer can follow. B does both, and defines whistled speech in the same sentence. A gives a biographical detail, C describes the subject with no researcher in it, and D names one project without saying what whistled speech is.',
        expWrong:{
          A:'True, and it is a striking detail — but a detail, and one that presumes the reader already knows what her work is about.',
          C:'True, and it defines the practice, yet Okonkwo is nowhere in it. An introduction to her work needs her in the sentence.',
          D:'True, and it is the most concrete thing she is doing now. Dropped on a reader who has never heard of whistled speech, an archive of it means nothing yet.'
        },
        tip:'Underline the goal. "Introduce to an unfamiliar audience" wants the general picture — who, and what the work is — never the specialized detail, however vivid.'
      },
      {
        id:'SYA-06', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — show the practical usefulness of a result',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Growers in a farming town lose part of their mango harvest to spoilage before it is sold.</li><li>A workshop showed them how to build a solar dryer from wood, plastic sheeting and a mesh tray.</li><li>Inside the dryer, warm air draws the moisture out of sliced fruit.</li><li>Dried mango keeps for months without refrigeration.</li><li>A dryer costs about the price of one crate of fresh fruit.</li><li>Twenty families have built one so far.</li></ul>',
        stem:'The student wants to emphasize how the solar dryer is useful to the growers. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Because dried mango keeps for months without refrigeration, growers can sell fruit that would otherwise spoil before reaching a buyer.',
          B:'At the workshop growers learned to build the dryer, in which warm air draws the moisture out of the sliced fruit on a mesh tray.',
          C:'Built from wood, plastic sheeting and a mesh tray, a dryer costs about the price of one crate of fruit, and twenty families have built one.',
          D:'Growers in the farming town lose part of their mango harvest to spoilage every year, before any of the fruit reaches a buyer.'
        },
        correct:'A',
        expCorrect:'Usefulness means naming the people and what the result lets them do. A does both: growers keep fruit that used to be lost, because the dried fruit needs no refrigeration. B explains the mechanism, C describes the object, its price and its uptake, and D states only the problem.',
        expWrong:{
          B:'True, and the workshop and the warm air are both in the notes. How the dryer works is not the same as what owning one is good for.',
          C:'True three times over — materials, price and uptake — but none of the three says what a grower gains by drying fruit.',
          D:'True, and it is the problem the dryer answers. On its own it is the loss restated, with no benefit attached to it.'
        },
        tip:'Underline the goal. "Useful to X" asks for a consequence with a beneficiary: who can now do what. Mechanisms, materials and problem statements all fail that test.'
      },
      {
        id:'SYA-07', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — present a finding to an informed audience',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>In March a harbor ferry line replaced its diesel boat with a battery-powered one.</li><li>The line runs the same route on the same schedule as before.</li><li>Engineers measured energy costs for the six months before and the six months after.</li><li>The diesel boat cost about $41 per crossing in fuel.</li><li>The battery boat costs about $12 per crossing in electricity.</li><li>Passengers report that the new boat is quieter.</li></ul>',
        stem:'The student wants to present the measured result to an audience already familiar with the ferry line and its new boat. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'In March the ferry line replaced its diesel boat with a battery-powered one, on the same route and schedule.',
          B:'Engineers compared the line’s energy costs over the six months before and the six months after the switch.',
          C:'Passengers on the same route report that the new battery-powered boat is quieter than the diesel one.',
          D:'Fuel for the diesel boat cost about $41 per crossing; electricity for the battery boat costs about $12.'
        },
        correct:'D',
        expCorrect:'This audience already knows the boat was replaced, so the sentence should spend its words on the number that came out: $41 against $12. D does. A repeats the background they have, B describes the procedure, and C reports a different result — one that was not measured.',
        expWrong:{
          A:'True, and it would be the right opening for a reader new to the story. For this audience it is old news and buys nothing.',
          B:'True, and it tells the reader how the figures were obtained — but the figures themselves never arrive.',
          C:'True, and it is a result of sorts. It is the passengers’ impression, not the energy cost the study set out to measure.'
        },
        tip:'Underline who the audience is. When they already know the setup, background sentences are wasted — go straight to the number that answers the question.'
      },
      {
        id:'SYA-08', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — flag a limitation of a study',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A city wildlife team fitted radio collars on urban foxes to map their night routes.</li><li>Twelve foxes were collared, all in one neighborhood.</li><li>The collars recorded positions for three months in winter.</li><li>The collared foxes crossed an average of nine streets a night.</li><li>Foxes in other parts of the city were not collared.</li><li>The team plans a larger study covering four neighborhoods.</li></ul>',
        stem:'The student wants to acknowledge a limitation of the study. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The collars recorded the foxes’ positions for three months in winter, which is how the team mapped their night routes.',
          B:'Over the three months the collars were recording, the twelve collared foxes crossed an average of nine streets a night.',
          C:'Because only twelve foxes in a single neighborhood were collared, the results may not hold for foxes elsewhere in the city.',
          D:'The team collared twelve foxes in a single neighborhood and now plans a larger study covering four neighborhoods.'
        },
        correct:'C',
        expCorrect:'A limitation names the narrow part of the design and says what it prevents. C does both: twelve animals in one neighborhood, so the result may not extend to the rest of the city. A states a design detail flatly, B states the finding, and D pairs the sample size with a future plan instead of a consequence.',
        expWrong:{
          A:'True, and the three-month winter window is in fact part of what limits the study. As written it is a neutral fact: nothing is said to be uncertain.',
          B:'True — it is the study’s result, measured across the whole recording period. A result is what a limitation qualifies, not the limitation itself.',
          D:'True on both halves, and the first names the narrow sample. The second then points forward to a bigger study instead of saying what this one cannot show.'
        },
        tip:'Underline the goal. A limitation sentence has two parts: the narrow feature (small sample, one site, one season) and the words that name the cost — "may not," "cannot show," "only for."'
      },
      {
        id:'SYA-09', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — explain a method to an unfamiliar audience',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Fisheries biologists often need to know how old a fish was when it was caught.</li><li>Every fish carries small stony ear pieces called otoliths.</li><li>An otolith adds a new layer each year, thicker in summer and thinner in winter.</li><li>Cut across and viewed under a microscope, the layers look like the rings of a tree stump.</li><li>Counting the rings gives the age of the fish in years.</li><li>One survey aged 400 cod this way.</li></ul>',
        stem:'The student wants to explain to an audience unfamiliar with the technique how biologists determine a fish’s age. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'A fish’s stony ear pieces add one layer a year, so cutting an otolith and counting its rings under a microscope gives the fish’s age.',
          B:'One survey used the technique on 400 cod, reading the age of each fish from the stony ear pieces it carried when it was caught.',
          C:'The layers an otolith adds are thicker in summer and thinner in winter, and cut across they look like the rings of a tree stump.',
          D:'Fisheries biologists who need to know how old a fish was when it was caught can read its age from its stony ear pieces.'
        },
        correct:'A',
        expCorrect:'The explanation has to connect the structure to the procedure: one layer a year, cut, count under a microscope, read the age. A does all of it. B reports an application, C gives a fact about the layers without the counting, and D says where the age is stored but never how it is read.',
        expWrong:{
          B:'True, and it shows the method working at scale on 400 fish. The reader still has no idea what was done to any of them.',
          C:'True, and the seasonal layers are what make the rings countable — but a fact about the layers is not yet a method.',
          D:'True, and it points to the right structure. It stops one step short: nothing in it says the otolith is cut and its rings counted.'
        },
        tip:'Underline the goal. "How do they do it" wants the procedure — the verbs. An option that names the tool but no action, or the outcome but no action, is not an explanation.'
      },
      {
        id:'SYA-10', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
        skill:'Rhetorical Synthesis — compare two things',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A town replaced one signalized junction on a highway with a roundabout.</li><li>A second junction on the same highway kept its traffic signals.</li><li>Both junctions carry about the same number of vehicles per day.</li><li>At the roundabout, drivers wait an average of 9 seconds.</li><li>At the signalized junction, drivers wait an average of 34 seconds.</li><li>Both junctions were surveyed on the same weekdays.</li></ul>',
        stem:'The student wants to compare how long drivers wait at the two junctions. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Both junctions carry about the same number of vehicles a day and were surveyed on the same weekdays.',
          B:'At the signalized junction that the town left unchanged, drivers wait an average of 34 seconds.',
          C:'The town replaced one signalized junction with a roundabout, where drivers now wait 9 seconds on average.',
          D:'Drivers wait an average of 9 seconds at the roundabout and 34 seconds at the signalized junction.'
        },
        correct:'D',
        expCorrect:'Two junctions, one measure, both numbers: D gives 9 seconds against 34. A compares traffic volume and survey days instead of waiting time, B supplies one of the two numbers, and C attaches the roundabout figure to the story of the rebuild.',
        expWrong:{
          A:'True, and those matched conditions are what make the comparison fair. They are not the comparison, which the goal says must be about waiting time.',
          B:'True, and it is one of the two figures needed. Alone, 34 seconds could be fast or slow — the reader cannot tell.',
          C:'True, but half the sentence is spent on the rebuild. Only the roundabout gets a number, so nothing is set against anything.'
        },
        tip:'Underline the goal, then count the numbers in each option. A comparison of a quantity needs two of them, one per side, on the measure the goal named.'
      },
      {
        id:'SYA-11', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — emphasize a difference',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>An entomologist recorded fireflies of two species in the same field.</li><li>Males of both species flash to attract a mate.</li><li>Males of the species known locally as the lantern beetle flash once every 6 seconds.</li><li>Males of the dusk blinker flash in bursts of three, once every 2 seconds.</li><li>Both species were active between 8 and 10 in the evening.</li><li>Females of both species answer with a single flash.</li></ul>',
        stem:'The student wants to emphasize a difference in the way the males of the two species flash. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Males of both firefly species flash to attract a mate, and the entomologist recorded both species in the same field.',
          B:'Males of the dusk blinker flash in bursts of three, once every 2 seconds, between 8 and 10 in the evening.',
          C:'Lantern beetle males flash once every 6 seconds, while dusk blinker males flash in bursts of three every 2 seconds.',
          D:'Both species were active between 8 and 10 in the evening, and the females of each answer with a single flash.'
        },
        correct:'C',
        expCorrect:'The axis is the males’ flashing, and a difference needs both patterns in view. C sets one flash every 6 seconds against bursts of three every 2. A names what the two species share, B gives one pattern with nothing opposite it, and D swaps in two other shared traits.',
        expWrong:{
          A:'True, and it is about the males’ flashing — but the purpose, like the field, is the same for both. Shared traits cannot show a difference.',
          B:'True, and it is precisely half of the contrast, hours included. Without the 6-second pattern beside it, a burst of three is just a description.',
          D:'True on both counts, and both counts are similarities: same hours, same female reply. Mentioning both species is not the same as contrasting them.'
        },
        tip:'Underline the goal. Fixing the axis ("how the males flash") first lets you throw out shared traits and details about the wrong actor before you weigh any wording.'
      },
      {
        id:'SYA-12', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — emphasize a similarity',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Two dry regions store water underground instead of in open reservoirs.</li><li>In the first, villages build low concrete sand dams across seasonal riverbeds.</li><li>Sand piles up behind the dam and water fills the spaces between the grains.</li><li>In the second, crews dig qanats: gently sloping tunnels that carry groundwater to the surface.</li><li>Water behind a sand dam sits under the sand, where the sun cannot reach it.</li><li>Water in a qanat runs underground from the hillside to the village.</li><li>A sand dam is built by hand in a few weeks; a qanat can take years to dig.</li></ul>',
        stem:'The student wants to emphasize a similarity between the two systems. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'A sand dam of low concrete is built by hand in a few weeks, while digging a qanat, a sloping tunnel, can take years.',
          B:'Both systems keep the water out of the sun — behind sand in one case, in a tunnel in the other — so little of it evaporates.',
          C:'Behind a low concrete dam across a seasonal riverbed, sand piles up and water fills the spaces between the grains.',
          D:'In one region villages build concrete dams across seasonal riverbeds; in the other, crews dig tunnels from the hillside.'
        },
        correct:'B',
        expCorrect:'The two systems look nothing alike, so the similarity has to be named outright: both shelter the water from the sun. B states it and then shows how each one does it. A contrasts the build times, C describes one system, and D lines the two up as opposites.',
        expWrong:{
          A:'True, and it is a sharp contrast — weeks against years, by hand against years of digging. A contrast is the opposite of the goal.',
          C:'True, and it explains the sand dam well, dam and grains alike. One system on its own cannot carry a similarity.',
          D:'True of each region, but the sentence is built as “one does this, the other does that.” It puts the systems side by side to separate them.'
        },
        tip:'Underline the goal. When two things are physically unlike, the similarity is almost always a shared function — ask what both achieve, not what both look like.'
      },
      {
        id:'SYA-13', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — explain a method to an unfamiliar audience',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A timber from a sunken ship was raised from a harbor floor.</li><li>A tree adds one growth ring a year, wide in wet years and narrow in dry ones.</li><li>Trees growing in the same region at the same time share the same pattern of wide and narrow rings.</li><li>Laboratories keep master charts of these patterns reaching back centuries.</li><li>Matching the rings in a timber to a master chart gives the year the tree was felled.</li><li>This timber matched a chart for oaks felled in 1544.</li></ul>',
        stem:'The student wants to explain to an audience unfamiliar with the technique how the timber was dated. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'A tree adds one growth ring every year, wide in the wet years and narrow in the dry ones, throughout its life in the forest.',
          B:'The timber raised from the harbor floor was matched against a laboratory chart and proved to come from an oak felled in 1544.',
          C:'Laboratories keep master charts of these wide-and-narrow ring patterns, built region by region and reaching back centuries.',
          D:'Because trees of one region share a ring pattern, matching a timber’s rings to a master chart gives the year its tree was felled.'
        },
        correct:'D',
        expCorrect:'The reader needs the principle and the step that uses it. D supplies both: shared regional patterns, then the match against a chart that yields a year. A gives the principle with no procedure, B gives the answer the procedure produced, and C names the reference tool without the matching.',
        expWrong:{
          A:'True, and it is the foundation the method rests on — but the sentence stops at a fact about trees. Nothing is dated in it.',
          B:'True, and it is the result for this timber, chart and all. A reader told only the result learns nothing about how anyone arrived at 1544.',
          C:'True, and those charts are the reference the technique depends on. Naming the tool leaves out the act of matching a timber against it.'
        },
        tip:'Underline the goal. A method explanation needs the "because" and the "so": the principle that makes it work plus the action taken. One without the other always leaves a hole.'
      },
      {
        id:'SYA-14', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — present a finding to an informed audience',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A salt marsh builds its surface upward as each tide leaves a little silt behind.</li><li>Researchers have monitored one marsh with fixed elevation markers since 1998.</li><li>The markers are read twice a year.</li><li>Local sea level has risen an average of 3.4 millimeters a year.</li><li>The marsh surface has risen an average of 4.1 millimeters a year.</li><li>A marsh that rises more slowly than the sea eventually drowns.</li></ul>',
        stem:'The student wants to present the study’s finding to an audience that already knows how a salt marsh builds its surface. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The marsh surface has gained 4.1 millimeters a year against a local sea-level rise of 3.4.',
          B:'A salt marsh builds its surface upward as every incoming tide leaves a little silt behind.',
          C:'Researchers have read the marsh’s fixed elevation markers twice a year ever since 1998.',
          D:'A marsh whose surface rises more slowly than the sea around it will eventually drown.'
        },
        correct:'A',
        expCorrect:'The finding is the pair of rates, and this audience does not need the mechanism explained. A delivers 4.1 against 3.4 and nothing else. B is the background they already have, C is the monitoring routine, and D is the general rule the numbers are measured against.',
        expWrong:{
          B:'True, and it is a fine first sentence for a general reader. For an audience that already knows it, it spends the sentence on nothing new.',
          C:'True, and it establishes that the record is long and regular. Method, not finding: no rate appears.',
          D:'True, and it explains why the rates matter. It is a principle that holds for any marsh, so it reports nothing about this one.'
        },
        tip:'Underline the audience along with the goal. "Already familiar with X" is an instruction to cut X — what is left should be the measurement.'
      },
      {
        id:'SYA-15', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — show the practical usefulness of a result',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A water utility loses about a fifth of the water it pumps to leaks in buried pipes.</li><li>A leak makes a faint hiss that travels along the metal of the pipe.</li><li>Sensors clamped to hydrants listen for that hiss overnight, when the streets are quiet.</li><li>Software compares the sound at two hydrants and places the leak within a few meters.</li><li>Crews used to dig several exploratory holes before finding a leak.</li><li>Last year the utility repaired 61 leaks located this way.</li></ul>',
        stem:'The student wants to emphasize the practical value of the sensors for the utility’s repair crews. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'A leak in a buried pipe makes a faint hiss that travels along the metal, and sensors listen for it overnight.',
          B:'Last year the utility repaired 61 leaks that the software had located by comparing the sound at two hydrants.',
          C:'Because the sensors place a leak within a few meters, crews can dig once instead of opening several exploratory holes.',
          D:'The utility, which loses about a fifth of the water it pumps to leaks, now clamps listening sensors to its hydrants overnight.'
        },
        correct:'C',
        expCorrect:'Practical value for the crews means the change in what the crews do. C names it: one hole instead of several, because the leak is placed within a few meters. A is the physics, B counts repairs without saying the digging changed, and D joins the loss figure to the installation.',
        expWrong:{
          A:'True, and the overnight listening is part of the system. The goal asks about the crews, and no crew appears in the sentence.',
          B:'True, and 61 repairs located by sound is a real outcome — but it is a tally. It never says that the digging changed.',
          D:'True on both halves, yet it stops at the moment the sensors are clamped on. The benefit to the people holding the shovels is left out.'
        },
        tip:'Underline who the goal names. If it says "for the crews," the winning sentence contains the crews and a before-and-after in their work.'
      },
      {
        id:'SYA-16', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — introduce a researcher’s work',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Marit Lindqvist is an archaeologist who studies where ancient pottery was made.</li><li>She cuts a sliver from a broken pot and grinds it thin enough for light to pass through.</li><li>Under a polarizing microscope, the sand grains in the clay appear as a distinct mix.</li><li>Clay from each river valley carries its own mix of grains.</li><li>Matching the grains to a valley shows where a pot was made, not merely where it was found.</li><li>Lindqvist has built a reference collection of clays from 30 valleys.</li></ul>',
        stem:'The student wants to introduce Lindqvist’s work to readers who have not heard of it. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Lindqvist has assembled a reference collection of clays from 30 river valleys, each with its own mix of grains.',
          B:'Lindqvist is an archaeologist who works out where an ancient pot was made by studying the grains of sand in its clay.',
          C:'Clay taken from each river valley carries its own mix of sand grains, visible under a polarizing microscope.',
          D:'To prepare a sample, Lindqvist cuts a sliver from a broken pot and grinds it thin enough for light to pass through.'
        },
        correct:'B',
        expCorrect:'An introduction pairs the person with the question her work answers. B does exactly that: an archaeologist who determines where a pot was made, from the sand in its clay. A gives a resource she built, C gives a fact with no person in it, and D gives one bench step out of context.',
        expWrong:{
          A:'True, and the collection is impressive. A reader who does not yet know what she is looking for cannot tell why 30 valleys matters.',
          C:'True, and it is the principle her method rests on, microscope included. The goal is to introduce her work, and she is absent from it.',
          D:'True, and it is vivid. Cutting and grinding a sliver thin is a step; on its own it does not say what the grinding is for.'
        },
        tip:'Underline the goal. "Introduce someone’s work" needs two slots filled: the person, and the question their work answers. An option missing either slot is out.'
      },
      {
        id:'SYA-17', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — flag a limitation of a study',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A regional seed bank freezes the seeds of wild plants for long-term storage.</li><li>Staff run germination tests to check that stored seeds are still alive.</li><li>This year they tested seeds of 3 species out of the 240 species stored.</li><li>Of the seeds tested, 91 percent sprouted.</li><li>The 3 species chosen were the ones with the largest stocks of seed.</li><li>Testing every species would use up seed the bank wants to keep.</li></ul>',
        stem:'The student wants to acknowledge a limitation of this year’s test. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Testing all 240 stored species would use up the very seed the bank is freezing in order to keep it for the long term.',
          B:'In this year’s germination tests, 91 percent of the seeds sprouted, across the 3 species that staff chose to test.',
          C:'The seed bank freezes the seeds of wild plants for long-term storage and runs germination tests to check that they are alive.',
          D:'Only 3 of the 240 stored species were tested, the best-stocked ones, so the 91 percent may not hold for the rest of the collection.'
        },
        correct:'D',
        expCorrect:'D names the narrow part (3 species out of 240, and the best-stocked ones) and states the cost: the 91 percent may not carry over to the other 237. A explains why the test was small, B reports the result, and C is background about what the bank does.',
        expWrong:{
          A:'True, and it is the reason the test was kept small. A reason for a limit is not the limit: nothing here says what the result fails to cover.',
          B:'True, and it now names the 3 species behind the figure. Reported as the outcome of the tests, it still reads as a clean success.',
          C:'True of the bank and of its testing routine, but both halves are background. No part of it casts doubt on anything the tests found.'
        },
        tip:'Underline the goal, then look for the option that contains a scope word ("only," "just," "of the") and a hedge ("may not," "cannot"). A limitation needs both halves.'
      },
      {
        id:'SYA-18', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — compare two things',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Two methods measure the thickness of Arctic sea ice.</li><li>Drifting buoys frozen into the ice measure thickness directly, to within 5 centimeters.</li><li>Each buoy reports from a single point.</li><li>A satellite estimates thickness from how high the ice floats above the water, to within 30 centimeters.</li><li>The satellite covers the whole ocean every 30 days.</li><li>Both methods found a thinner winter ice pack than a decade ago.</li></ul>',
        stem:'The student wants to compare the accuracy of the two methods. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Buoys measure ice thickness to within 5 centimeters, while the satellite estimate is good to within 30.',
          B:'Both methods found the winter ice pack thinner than it was a decade ago, buoys and satellite alike.',
          C:'A satellite estimates the thickness of the ice from how high it floats above the surface of the water.',
          D:'Each drifting buoy reports from a single point, while the satellite covers the whole ocean every 30 days.'
        },
        correct:'A',
        expCorrect:'Accuracy is the named measure, and both methods have a figure for it: 5 centimeters against 30. A puts them together. B reports where the methods agree, C describes one method’s principle, and D compares the two on coverage instead of accuracy.',
        expWrong:{
          B:'True, and it is the study’s headline. Agreement on a conclusion says nothing about how precise either method is.',
          C:'True, and it explains how the satellite works — one method, no figure, no comparison.',
          D:'True, and it is a genuine two-sided comparison. The axis is wrong: one point against the whole ocean is coverage, not accuracy.'
        },
        tip:'Underline the measure the goal names. Options that compare the two subjects on a different measure are the hardest to reject — they look like comparisons because they are, just not the one you were asked for.'
      },
      {
        id:'SYA-19', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — emphasize a difference',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A community garden runs two systems for kitchen scraps.</li><li>In the hot compost pile, microbes drive the temperature to about 60 degrees Celsius.</li><li>The hot pile is turned every few days and finishes in about 10 weeks.</li><li>The bokashi buckets ferment scraps in a sealed container at room temperature.</li><li>Bokashi takes 2 weeks, but the fermented scraps must then be buried before plants can use them.</li><li>Both systems accept the same kitchen scraps.</li></ul>',
        stem:'The student wants to emphasize a difference in the conditions under which each system breaks the scraps down. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'In the hot pile microbes drive the temperature to about 60 degrees Celsius, and the pile is turned every few days.',
          B:'The hot pile heats the scraps to about 60 degrees Celsius; the bokashi buckets ferment them sealed at room temperature.',
          C:'Both systems accept the same kitchen scraps from the community garden, which runs the two of them side by side.',
          D:'The hot pile finishes in about 10 weeks, while bokashi takes 2 weeks plus the burying that has to follow it.'
        },
        correct:'B',
        expCorrect:'The axis is the conditions inside each system: hot and open against sealed and cool. B sets those two against each other. A describes one system, C states what the two share, and D contrasts them on time rather than conditions.',
        expWrong:{
          A:'True, and heat is the right axis — but only the hot pile appears, turning and all. A difference needs the other side of it.',
          C:'True, and the shared input is why the two systems can be compared at all. It is a similarity, not a difference.',
          D:'True, and it is a clean contrast: 10 weeks against 2 plus the burying. It answers “how long,” while the goal asked “under what conditions.”'
        },
        tip:'Underline the goal and keep its noun in mind while you read: conditions, time, cost. Two options can both be real contrasts, and only the one on the named axis counts.'
      },
      {
        id:'SYA-20', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — show the practical usefulness of a result',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Delivery vans cannot fit down the narrow lanes of a city’s old quarter.</li><li>A courier company now moves parcels there on electric cargo bikes.</li><li>A van parks at the edge of the quarter and the bikes carry parcels the last kilometer.</li><li>One cargo bike carries up to 180 kilograms.</li><li>Couriers used to walk parcels in by hand, making about 12 stops an hour.</li><li>With the bikes they make about 28 stops an hour.</li></ul>',
        stem:'The student wants to emphasize the practical benefit of the cargo bikes for the couriers. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'A van parks at the edge of the old quarter, and the bikes carry the parcels the last kilometer.',
          B:'A single electric cargo bike carries as much as 180 kilograms of parcels into the old quarter.',
          C:'Couriers who used to walk parcels in at about 12 stops an hour now make about 28 with the bikes.',
          D:'Delivery vans cannot fit down the quarter’s narrow lanes, so parcels used to be walked in by hand.'
        },
        correct:'C',
        expCorrect:'Benefit to the couriers means their own work, before and after: 12 stops an hour against 28. C gives both halves. A describes the arrangement, B gives a capacity with no consequence attached, and D states the problem that existed before the bikes.',
        expWrong:{
          A:'True, and it explains how the system is organized. An arrangement is not yet a gain for anyone.',
          B:'True, and 180 kilograms sounds impressive — but nothing says what that capacity lets a courier accomplish.',
          D:'True, and it is why the bikes were brought in. It ends at the old difficulty and never reaches the improvement.'
        },
        tip:'Underline the goal. "Practical benefit" is nearly always a before-and-after: find the option that holds both states, not the one that holds only the new equipment.'
      },
      {
        id:'SYA-21', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — explain a method to an unfamiliar audience',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Bottles labeled with one region sometimes hold olive oil pressed somewhere else.</li><li>Rainwater in each region carries a slightly different mix of oxygen atoms.</li><li>Olive trees take up that water, and the mix ends up stored in the oil.</li><li>A laboratory burns a drop of the oil and weighs the atoms in the vapor.</li><li>The mix in the sample is matched against reference oils of known origin.</li><li>A survey of 60 bottles turned up 9 whose mix did not match the label.</li></ul>',
        stem:'The student wants to explain to readers unfamiliar with the technique how a laboratory checks where an oil came from. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Because each region’s rain leaves its own mix of oxygen atoms in the oil, a laboratory weighs a sample’s atoms and matches them to reference oils.',
          B:'In a survey of 60 bottles, the laboratory found 9 whose mix of oxygen atoms did not match the region printed on that bottle’s own label.',
          C:'Olive trees take up the rainwater that falls on their own region, and its particular mix of oxygen atoms ends up stored in the oil.',
          D:'To test a bottle, a laboratory burns a single drop of the oil and weighs the oxygen atoms in the vapor that the drop gives off.'
        },
        correct:'A',
        expCorrect:'The reader needs the signal and what is done with it. A gives both: regional rainwater leaves a distinct mix, and the laboratory weighs it and matches it to known oils. B reports what the technique found, C stops at how the signal gets into the oil, and D describes the measurement without the matching that identifies the region.',
        expWrong:{
          B:'True, and it shows the technique catching mislabeled bottles. The reader learns the outcome and none of the procedure.',
          C:'True, and it is the first link in the chain. The sentence ends before any laboratory does anything.',
          D:'True, and it is the most technical-sounding step. Weighing atoms proves nothing until the result is compared with reference oils, which this omits.'
        },
        tip:'Underline the goal. In a "how do they know" explanation the last step is the one that does the work — the comparison. An option that ends at the measurement is unfinished.'
      },
      {
        id:'SYA-22', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — emphasize a similarity',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Two mountain villages far apart supply their houses with spring water.</li><li>Neither village uses a pump.</li><li>In the first, a buried pipe runs from a spring above the village down to a storage tank.</li><li>In the second, an open stone channel carries spring water down the slope to a cistern.</li><li>In both villages the spring sits higher than the houses.</li><li>The first village laid its pipe in 2011; the stone channel is more than 200 years old.</li></ul>',
        stem:'The student wants to emphasize a similarity between the two water systems. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'One village laid its pipe in 2011, while the other has used its stone channel for more than 200 years.',
          B:'In the first village a buried pipe carries spring water down from above the village to a storage tank.',
          C:'One village moves its spring water down through a buried pipe, the other through an open stone channel.',
          D:'Neither village needs a pump: in both, the spring sits above the houses, so the water arrives on its own.'
        },
        correct:'D',
        expCorrect:'The shared feature is the one worth naming: no pump, because the source is uphill in both places. D states it as shared and gives the reason. A contrasts the ages, B covers one village, and C names the two systems only to distinguish them.',
        expWrong:{
          A:'True, and 2011 against two centuries is a striking gap. A gap is a difference.',
          B:'True, and it is an accurate description of the first system. One village on its own cannot show what the two have in common.',
          C:'True of each, and both villages are named — but the sentence is built to separate buried pipe from open channel. What they share goes unsaid.'
        },
        tip:'Underline the goal. Naming both subjects is not enough for a similarity: the sentence has to assert something of both at once ("neither," "in both," "each").'
      },
      {
        id:'SYA-23', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — present a finding to an informed audience',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Coffee leaf rust is a fungus that strips the leaves from coffee bushes.</li><li>In 2021 a growers’ cooperative planted a rust-resistant variety on half of its plots.</li><li>The other half kept the traditional variety.</li><li>Both halves were pruned, fertilized and picked the same way.</li><li>After the 2024 outbreak, the traditional plots yielded 480 kilograms per hectare.</li><li>The resistant plots yielded 1,150 kilograms per hectare.</li></ul>',
        stem:'The student wants to present the result to an audience of growers who already know what coffee leaf rust is and what the cooperative planted. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Coffee leaf rust is a fungus that strips the leaves from coffee bushes, as it did in the outbreak of 2024.',
          B:'After the 2024 outbreak the resistant plots yielded 1,150 kilograms per hectare, against 480 in the traditional plots.',
          C:'In 2021 the cooperative planted a rust-resistant variety on half its plots and kept the traditional variety on the rest.',
          D:'Both halves of the cooperative’s plots were pruned, fertilized and picked in exactly the same way throughout.'
        },
        correct:'B',
        expCorrect:'These growers know the disease and the planting, so the sentence should carry the yields: 1,150 against 480 after the outbreak. B does. A defines a term they know, C repeats the setup they know, and D reports a control that keeps the comparison fair without stating its outcome.',
        expWrong:{
          A:'True, and necessary for a general reader. For growers it defines a word they use daily, outbreak and all.',
          C:'True, and it is the design of the trial — which the goal says this audience already has.',
          D:'True, and matching the care of both halves is what makes the yields comparable. It is a condition of the study, not its result.'
        },
        tip:'Underline what the audience already knows and cross out every option that repeats it. Usually only one option is left, and it is the one with the numbers.'
      },
      {
        id:'SYA-24', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
        skill:'Rhetorical Synthesis — introduce a researcher’s work',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Hanna Vuorinen, who is Deaf, leads a project to record her country’s sign language.</li><li>Signs vary from one city to another, and older signs are falling out of use.</li><li>The team films each sign from three angles and stores the clips in a searchable database.</li><li>Deaf elders decide which signs the team records.</li><li>Teachers of Deaf children use the database to check regional signs.</li><li>The project has filmed 4,000 signs since 2019.</li></ul>',
        stem:'The student wants to introduce Vuorinen’s project to readers unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Teachers of Deaf children consult the searchable database whenever they need to check a sign used in another part of the country.',
          B:'Signs vary from one city to another, and older signs are falling out of use across the country the project records.',
          C:'Vuorinen, who is Deaf, leads a team that films the signs of her country’s sign language and stores them in a searchable database.',
          D:'Since 2019 the team has filmed 4,000 signs from three angles each, all of them chosen by the project’s Deaf elders.'
        },
        correct:'C',
        expCorrect:'C fills both slots an introduction needs: who leads the project and what it produces — a filmed, searchable record of the country’s signs. A describes a use of the database, B describes the situation with no project in it, and D piles up numbers for a project the reader has not yet been told about.',
        expWrong:{
          A:'True, and it shows the project mattering to someone. It assumes the reader already knows what the database is.',
          B:'True, and it is the situation that makes the project urgent. The project itself never appears in the sentence.',
          D:'True, and the figures are the sort an introduction might end with. Opening with 4,000 signs tells a newcomer the scale of something still unnamed.'
        },
        tip:'Underline the goal. When the audience is new, ask of each option: could someone who knows nothing follow this sentence? Scale and applications only make sense after the thing has been named.'
      },
      {
        id:'SYA-25', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — flag a limitation of a study',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Ecologists left microphones in a grassland to record bush crickets by their song.</li><li>Software identified species from the recordings for six weeks in August and September.</li><li>Only male bush crickets sing; the females are silent.</li><li>The microphones captured 14 species.</li><li>A hand search of the same grassland in June found 3 species that never appeared in the recordings.</li><li>The team reports the recordings as a list of species present, not a count of individuals.</li></ul>',
        stem:'The student wants to acknowledge a limitation of the recordings as a record of which species live in the grassland. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The team reports the recordings as a list of the species present, not as a count of how many crickets there were.',
          B:'From six weeks of microphone recordings in August and September, the software identified the songs of 14 species.',
          C:'Only male bush crickets sing, so the females of every species in the grassland stayed inaudible to the microphones.',
          D:'Running only in late summer and recording only singing males, the microphones missed species: a June hand search found 3 more.'
        },
        correct:'D',
        expCorrect:'The goal fixes what the limitation must be about — the list of species. D names the two gaps (late summer only, singing males only) and proves the cost with the 3 species the June search turned up. A is a limitation about abundance, C names a cause but stops before the consequence, and B is the finding itself.',
        expWrong:{
          A:'True, and it is the team’s own framing — a limitation about counting. The goal asks about the species list, which is what the recordings do give.',
          B:'True, and it is the result a limitation would qualify. With its six weeks and its 14 species, it still reads as the full inventory.',
          C:'True, and silent females are half the reason species go unheard. The sentence never says that any species was missed, so nothing is acknowledged as a limit.'
        },
        tip:'Underline what the limitation is supposed to be about. Several options can be genuine limitations; only the one aimed at the claim in the goal counts, and it has to state the consequence, not just the cause.'
      },
      {
        id:'SYA-26', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — compare two things',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Hydrologists measure how much water is stored in a mountain snowpack.</li><li>Digging a snow pit gives the water content of that spot to within 2 percent.</li><li>A crew can dig about 4 pits in a day.</li><li>A radar sled towed behind a snowmobile reads water content to within 9 percent.</li><li>The sled covers about 40 kilometers of terrain in a day.</li><li>Crews often dig a few pits to calibrate the sled.</li></ul>',
        stem:'The student wants to compare the two methods in terms of both accuracy and how much ground each covers. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Digging a snow pit gives the water content of that spot to within 2 percent, while the radar sled reads it to within 9 percent.',
          B:'Snow pits are accurate to within 2 percent but reach only about 4 spots a day, while the sled, accurate to 9 percent, covers 40 kilometers.',
          C:'A crew digging snow pits gets through about 4 in a day, while a radar sled towed behind a snowmobile covers about 40 kilometers.',
          D:'Crews often dig a few pits, accurate to within 2 percent, to calibrate a radar sled that covers about 40 kilometers of terrain in a day.'
        },
        correct:'B',
        expCorrect:'The goal names two axes, so the sentence needs four facts: accuracy and coverage for each method. B has all four and sets them against each other. A compares accuracy only, C compares coverage only, and D uses figures from both axes to describe the methods working together instead of comparing them.',
        expWrong:{
          A:'True, and it is a correct comparison — of accuracy. It satisfies half the goal and drops the ground each method covers.',
          C:'True, and it is the other half: coverage for both methods, with no accuracy figure. Half a goal is not the goal.',
          D:'True, and it mixes figures from both axes, which makes it look complete. It frames pits and sled as partners, so neither is weighed against the other.'
        },
        tip:'Underline every part of a two-part goal and count facts. With two subjects and two axes the answer carries four pieces of information; anything with two is answering half the question.'
      },
      {
        id:'SYA-27', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — show the practical usefulness of a result',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A vineyard installed probes that read soil moisture at three depths.</li><li>The probes send a reading to the manager’s phone every hour.</li><li>Vine roots draw most of their water from the middle depth.</li><li>Before the probes, the vineyard watered on a fixed weekly schedule.</li><li>It now waters only when the middle probe falls below a set level.</li><li>Water use dropped 32 percent and the harvest was unchanged.</li></ul>',
        stem:'The student wants to emphasize the practical value of the probes for running the vineyard. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Watering only when the middle probe reads dry, instead of on a weekly schedule, cut water use by 32 percent with no loss of harvest.',
          B:'The probes read soil moisture at three depths and send a fresh reading to the vineyard manager’s phone every hour of the day.',
          C:'After the probes went in, the vineyard’s water use fell 32 percent and the harvest that year was unchanged.',
          D:'Of the three depths the probes read every hour, the middle one is where the vines draw most of their water.'
        },
        correct:'A',
        expCorrect:'Practical value is a decision that changed plus what it bought. A has the change (schedule to on-demand), the saving (32 percent) and the safeguard (harvest unchanged). B describes the hardware, C gives the saving, and even the unchanged harvest, without the decision behind them, and D explains why the middle probe is the one that matters.',
        expWrong:{
          B:'True, and it is what the probes do, depth by depth and hour by hour. Reporting is a capability; the goal asks what the vineyard gained.',
          C:'True, and 32 percent with the harvest intact is the headline. Standing alone it never says what the manager does differently, which is where the value lives.',
          D:'True, and it justifies watching that depth. It is a fact about roots, with no practice and no benefit attached.'
        },
        tip:'Underline the goal. For "practical value," look for the option that names a decision made differently — a number alone is a result, and a result is not yet a use.'
      },
      {
        id:'SYA-28', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — present a finding to an informed audience',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Patches of dark earth in the Amazon were made by people who lived there centuries ago.</li><li>The dark earth holds charcoal, pottery fragments and food waste worked into the soil.</li><li>A team compared 12 dark-earth patches with the pale soil lying beside each one.</li><li>The dark earth held on average 3.1 times as much carbon per cubic meter as the neighboring soil.</li><li>It also held more phosphorus.</li><li>Farmers still plant on these patches today.</li></ul>',
        stem:'The student wants to present the team’s measured result to an audience already familiar with Amazonian dark earth. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Patches of dark earth in the Amazon were created by people who lived there centuries ago.',
          B:'The team compared 12 patches of dark earth with the pale soil lying beside each one.',
          C:'The dark earth held on average 3.1 times as much carbon per cubic meter as the soil beside it.',
          D:'Dark earth contains charcoal, pottery fragments and food waste, and farmers still plant on it today.'
        },
        correct:'C',
        expCorrect:'For readers who know what dark earth is, the new information is the measurement: 3.1 times the carbon of the soil next to it. C gives it. A tells them its origin, B tells them how the study was set up, and D pairs its composition with its present-day use.',
        expWrong:{
          A:'True, and it is the standard opening line about dark earth. This audience could have written it.',
          B:'True, and the paired design is what makes the result credible. The design is not the finding, and no measurement appears.',
          D:'True twice, and it sounds substantial — but both halves are things a familiar audience already knows, and neither is a number the team measured.'
        },
        tip:'Underline the goal and ask what is new for this reader. Composition, history and method are all background to someone who knows the subject; the measurement is the only sentence that earns its place.'
      },
      {
        id:'SYA-29', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — explain a method to an unfamiliar audience',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A stalagmite grows upward as drip water leaves a thin film of calcite on its tip.</li><li>In wet years the drips are frequent and the yearly layer is thick; in dry years it is thin.</li><li>Uranium in the calcite decays at a known rate, which dates each layer.</li><li>A cave team sliced one stalagmite lengthwise and measured 900 layers.</li><li>The record shows two droughts that each lasted more than 20 years.</li><li>The cave sits above a farming valley.</li></ul>',
        stem:'The student wants to explain to readers unfamiliar with the technique how a stalagmite can record past rainfall. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The stalagmite the cave team sliced lengthwise held 900 layers, and the record in them showed two droughts of more than 20 years each.',
          B:'Each drip leaves a film of calcite, thick in wet years and thin in dry ones, and uranium in it dates every layer: a dated rainfall record.',
          C:'Uranium in the calcite decays at a known rate, so every one of the 900 layers the team measured can be given its own date.',
          D:'A cave team sliced one stalagmite lengthwise, in a cave above a farming valley, and measured the 900 layers of calcite inside it.'
        },
        correct:'B',
        expCorrect:'A rainfall record needs two things: a signal that tracks rain and a way to put a year on it. B has both — layer thickness for the rain, uranium decay for the date — and says what they add up to. A reports what was found, C supplies dating with no rain signal, and D describes the cutting without either.',
        expWrong:{
          A:'True, and it is what the technique produced, layers and droughts alike. The reader is handed the conclusion and none of the reasoning.',
          C:'True, and dating is half the method. Dates alone say when a layer formed, never how wet that year was.',
          D:'True, and it is the physical work involved. Counting layers means nothing until the reader is told what a layer records.'
        },
        tip:'Underline the goal and break it into the pieces the claim needs. "Records past rainfall" needs a rain signal AND a clock — an option that supplies one of the two is the likeliest trap.'
      },
      {
        id:'SYA-30', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
        skill:'Rhetorical Synthesis — introduce a researcher’s work',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Anneke Boers builds violins and studies the wood they are made from.</li><li>She weighs each spruce top and measures how fast sound travels through it.</li><li>Wood that is light but stiff carries sound the fastest.</li><li>Boers has logged these measurements for 300 tops over 20 years.</li><li>She uses the log to decide which boards become instruments.</li><li>Her workshop stands in a town known for its timber market.</li></ul>',
        stem:'The student wants to introduce Boers’s work to readers unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Boers has logged her measurements for 300 spruce tops over the past 20 years, in a workshop in a timber town.',
          B:'Of the spruce a violin maker might use, the wood that is light but stiff is the wood that carries sound the fastest.',
          C:'The workshop where Boers builds her violins stands in a town that has long been known for its timber market.',
          D:'Boers is a violin maker who weighs each spruce top and times the sound through it to decide which boards become instruments.'
        },
        correct:'D',
        expCorrect:'D names her trade, what she measures and what she does with the measurements — the whole of the work in one sentence. A gives its scale, B gives the principle behind it with no mention of her, and C places her workshop without saying what happens in it.',
        expWrong:{
          A:'True, and 300 tops over 20 years is the kind of figure that impresses. It never says what she measured or why.',
          B:'True, and it is the fact her whole method rests on. The goal is to introduce her work, and the sentence is about wood.',
          C:'True, and the timber market is a nice touch of setting. Where she works is not what she does.'
        },
        tip:'Underline the goal. An introduction should survive the "so what" test: name the person, the work, and the point of it. Scale, setting and background facts are what you add afterward.'
      },
      {
        id:'SYA-31', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
        skill:'Rhetorical Synthesis — emphasize a difference',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A textile workshop dyes wool with two traditional red dyes.</li><li>Cochineal red comes from an insect that feeds on cactus pads.</li><li>Madder red comes from the root of a plant.</li><li>Both dyes need a mineral mordant so that the color binds to the wool.</li><li>Dyed swatches were left in a sunny window for 12 weeks.</li><li>The madder swatch faded slightly; the cochineal swatch faded to a pale pink.</li><li>Both dyes cost about the same per kilogram of wool.</li></ul>',
        stem:'The student wants to emphasize the difference that the sunlight test revealed. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Twelve weeks in a sunny window left the madder swatch only slightly faded and the cochineal swatch a pale pink.',
          B:'Cochineal red is taken from an insect that feeds on cactus pads, while madder red comes from the root of a plant.',
          C:'After 12 weeks in the sunny window, the swatch dyed with cochineal red had faded all the way to a pale pink.',
          D:'The two dyes cost about the same per kilogram of wool, and both need a mineral mordant to bind to the fiber.'
        },
        correct:'A',
        expCorrect:'The goal is narrow: not any difference, the one the test revealed. A reports both swatches after the same 12 weeks, which is the test result. B is a difference of origin that no test was needed to find, C gives one swatch only, and D lists what the dyes share.',
        expWrong:{
          B:'True, and it is a genuine, clearly worded difference — insect against root. It comes from the first two notes, not from the window test the goal points to.',
          C:'True, and it is the more dramatic half of the result. With no madder swatch beside it, “faded to a pale pink” has nothing to be worse than.',
          D:'True on both counts, and both counts are ways the dyes match. Cost and mordant are where the test found no difference at all.'
        },
        tip:'Underline the qualifier, not just the word "difference." When the goal ties the difference to a particular test or moment, a true difference from anywhere else in the notes is the trap the question is built around.'
      },
      {
        id:'SYA-32', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
        skill:'Rhetorical Synthesis — emphasize a similarity',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>A museum exhibit places two repair traditions side by side.</li><li>In kintsugi, a broken bowl is rejoined with lacquer dusted with gold, so the seams shine against the glaze.</li><li>Shipwrights patch a damaged plank with a graving piece: a shaped block whose grain runs against the plank’s.</li><li>Either repair could have been disguised with paint or filler.</li><li>Kintsugi is practiced on ceramics; graving pieces are cut for wooden hulls.</li><li>The mended bowl in the exhibit dates from 1890, the patched hull section from 1962.</li></ul>',
        stem:'The student wants to emphasize a similarity between the two repair traditions. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Kintsugi is practiced on ceramics, while a graving piece is a shaped block cut to patch the plank of a wooden hull.',
          B:'In kintsugi a broken bowl is rejoined with lacquer dusted with gold, so that the seams of the mend shine against the glaze.',
          C:'Both leave the repair in plain view — gold along the seams, a patch whose grain runs crosswise — though either could have been hidden.',
          D:'In the museum exhibit the mended bowl dates from 1890 and the patched hull section from 1962, the two set side by side.'
        },
        correct:'C',
        expCorrect:'No note states the similarity outright, so the answer has to draw it: both crafts show the repair instead of hiding it, and the notes say hiding it was possible. C says that and supports it from both sides. A contrasts the materials, B describes one craft, and D gives dates for both without any shared trait.',
        expWrong:{
          A:'True, and it uses both traditions — to separate them. Ceramics against wooden hulls is a difference.',
          B:'True, and it is the most memorable detail in the notes. One tradition cannot demonstrate what two have in common.',
          D:'True, and it does mention both objects in the exhibit. A pair of dates is not a shared quality: the reader is told when, not what they share.'
        },
        tip:'Underline the goal. When no single note hands you the similarity, the answer is the one that states a shared purpose and cites a detail from each side — not the one that merely names both subjects.'
      },
      {
        id:'SYA-33', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
        skill:'Rhetorical Synthesis — flag a limitation of a study',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Cameras watched 40 puffin burrows on one island through a breeding season.</li><li>A chick that leaves its burrow is recorded as fledged.</li><li>The cameras see only the burrow entrance, not the inside.</li><li>In 2 burrows the camera failed for several days in July.</li><li>Of the 40 burrows, 31 produced a fledged chick.</li><li>Puffins nest on many islands along the same coast.</li><li>Fledging says nothing about whether a chick survives its first winter at sea.</li></ul>',
        stem:'The student wants to acknowledge the main limitation of using this study to describe the puffin population of the whole coast. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'The cameras record only the entrance of a burrow, so whatever happens to a chick inside it goes unseen.',
          B:'All 40 burrows watched were on a single island, so the fledging rate may not hold for puffins elsewhere on the coast.',
          C:'A fledged chick is not yet a surviving one: nothing in the study follows a chick into its first winter at sea.',
          D:'In 2 of the 40 burrows watched through the breeding season, the camera stopped working for several days in July.'
        },
        correct:'B',
        expCorrect:'Three options are real limitations; the goal picks which one. It asks about describing the whole coast, and only B addresses coverage: one island, so the rate may not extend to the others. A limits what the cameras see inside a burrow, C limits what fledging means later, and D reports a gap without saying what it costs.',
        expWrong:{
          A:'True, and it is a limitation — of the cameras’ view. It says nothing about whether this island stands for the coast.',
          C:'True, and it is an important caution about the word “fledged.” The goal is about geographic reach, not about what happens after fledging.',
          D:'True, and a few lost days is a flaw in the data. The sentence stops at the failure and never says the results are uncertain because of it.'
        },
        tip:'Underline the claim the limitation must qualify. Studies have several limits at once, and the question is always which one undercuts the specific claim in the goal — usually sample coverage when the goal says "the whole" anything.'
      },
      {
        id:'SYA-34', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
        skill:'Rhetorical Synthesis — show the practical usefulness of a result',
        passage:'While researching a topic, a student has taken the following notes:<ul><li>Volunteers read a rain gauge in their yard each morning and type the number into a shared map.</li><li>The national service runs 22 official stations in the region; volunteers add 610 gauges.</li><li>A thunderstorm can drop 40 millimeters on one street and 4 millimeters two streets away.</li><li>During a storm in May the map showed within the hour where the heaviest rain had fallen.</li><li>Flood crews sent sandbags to the two neighborhoods the map singled out.</li><li>Volunteer readings do not enter the official rainfall record.</li></ul>',
        stem:'The student wants to emphasize how the volunteer network is useful to flood crews. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
        choices:{
          A:'Volunteers add 610 rain gauges to the 22 official stations the national service runs in the region.',
          B:'A single thunderstorm can drop 40 millimeters of rain on one street and only 4 millimeters on a street two blocks away.',
          C:'The readings that volunteers type into the shared map each morning never enter the national service’s official rainfall record.',
          D:'In May the map showed within the hour where the heaviest rain had fallen, and crews sent sandbags to those two neighborhoods.'
        },
        correct:'D',
        expCorrect:'Useful to the crews means the crews acting on what the map showed. D has the information (where the heaviest rain fell, within the hour) and the action it enabled (sandbags to two neighborhoods). A sizes the network, B explains why density is needed, and C notes a restriction on the data.',
        expWrong:{
          A:'True, and 610 against 22 is the reason the map is detailed enough to be useful. Size is a property of the network, not a use of it.',
          B:'True, and it is the strongest argument for dense gauges. It explains why the network might help without showing anyone helped.',
          C:'True, and it is worth knowing — but it is a caveat about the data’s status, the opposite of a demonstration of value.'
        },
        tip:'Underline the beneficiary in the goal. The answer should contain them doing something they could not do before; sentences about how big, how sensitive, or how official the data is are all one step short.'
      }
    ]
  });
})();
