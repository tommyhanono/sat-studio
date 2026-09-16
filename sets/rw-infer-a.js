/* SAT Studio question set — Reading & Writing: Inferences (INF-01 to INF-34) */
/* Destreza oficial "Inferences" del dominio Information and Ideas: pasaje corto
   que termina en blanco + "Which choice most logically completes the text?".
   La correcta se sigue NECESARIAMENTE del texto; los tres distractores son
   razonables en el mundo real pero el pasaje no los sostiene (uno va demasiado
   lejos, otro invierte la direccion de la relacion, otro es verdadero segun el
   texto pero no cierra la logica de la ultima oracion). */
(function(){
  window.SAT_SETS.push({
    id: 'rw-infer-a',
    title: 'Inferences — Logical Completion',
    section: 'rw',
    level: 'Media',
    description: 'Thirty-four Information and Ideas inference items: a short passage ends in a blank, and only one completion follows from what the text actually says.',
    minutes: 40,
    questions: [

      /* ============ WARM-UP: una regla y un caso (INF-01 a INF-10) ============ */
      {
        id:'INF-01', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (apply a stated rule to measured cases)',
        passage:"The night-blooming vine Merenia alba holds its nectar at the bottom of a floral tube twenty-eight centimeters long. Nectar that deep can be reached only by an insect whose tongue is at least that long. Filming the flowers over three seasons, botanist Ilse Karnaugh recorded eleven species of moth and butterfly visiting them, and measured the tongue of every one. Only the hawkmoth Xanthia longirostris, at thirty-one centimeters, cleared the mark. Karnaugh’s footage therefore shows that, of the visitors she recorded, ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'eleven species of moth and butterfly were filmed at the flowers.',
          B:'only the hawkmoth could have drawn nectar from the flowers.',
          C:'the flowers lengthened their tubes in response to a moth’s tongue.',
          D:'every plant with a deep floral tube depends on one moth species.'
        },
        correct:'B',
        expCorrect:'The text gives a rule — nectar twenty-eight centimeters down can be reached only by a tongue at least that long — and then a measurement for every recorded visitor. Only the hawkmoth’s thirty-one centimeters clears the bar. Rule plus measurements leaves exactly one visitor able to feed, so among the insects Karnaugh filmed, only the hawkmoth could have reached the nectar.',
        expWrong:{
          A:'True according to the text, and it is where the paragraph starts. Counting the visitors does not say what the tongue measurements imply, which is what the blank is reaching for.',
          C:'The passage measures tongues. It never says which came first or that either the flower or the moth changed in response to the other; that history has to be imported from outside the text.',
          D:'One vine at one site cannot support a claim about every deep-tubed plant. The text describes what Karnaugh filmed, not a rule for the world’s flowers.'
        },
        tip:'A logical-completion blank is filled by what the sentences already on the page force. Before choosing, check that you could point to the two or three lines that make your answer unavoidable; if you need a fact the passage never states, it is the wrong choice.'
      },
      {
        id:'INF-02', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a material that cannot occur locally)',
        passage:"Obsidian, a volcanic glass, forms only where lava of a particular composition has cooled quickly, and each flow leaves a chemical signature a laboratory can match to its source. Excavating a farming village in a river valley, archaeologist Tomas Bellini recovered ninety obsidian blades. Chemical testing traced every one of them to a single volcanic field four hundred kilometers away, across two mountain ranges. No obsidian occurs anywhere nearer the village. It follows that the villagers ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'used blades chipped from a glass that forms only in volcanic flows.',
          B:'supplied the distant volcanic field with blades made in their valley.',
          C:'traded with every community lying between the valley and the field.',
          D:'obtained their obsidian through travel or exchange with distant places.'
        },
        correct:'D',
        expCorrect:'Obsidian cannot form in the valley: the nearest source is four hundred kilometers off. Yet ninety obsidian blades lie in the village. The glass had to cross that distance somehow, and the only ways anything crosses a distance are with people who travel or through exchange along a chain of hands. The text licenses that much and stops there.',
        expWrong:{
          A:'True according to the text — it is the definition the passage opens with — but a definition of obsidian is not a conclusion about the villagers, which is what the sentence is building toward.',
          B:'This sends the goods the wrong way. The obsidian was quarried at the volcanic field and ended up in the village, so the valley is the destination, not the source.',
          C:'“Every community” is more than the evidence carries. The blades show that obsidian arrived; they say nothing about how many hands it passed through or whether one party carried it the whole way.'
        },
        tip:'When a text stresses that a material cannot occur locally and then places it locally, the guaranteed inference is movement — not who moved it, how far each carrier went, or why. Take the conclusion the premises force and refuse the extra detail.'
      },
      {
        id:'INF-03', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (compare a threshold with a measured value)',
        passage:"A thermal barrier coating protects a metal part by holding a layer of ceramic between the metal and the hot gas around it. Engineer Ada Whitcombe reports that a new coating keeps its structure up to 1,200 degrees Celsius; above that the ceramic crystallizes and flakes away, leaving the metal bare. A turbine blade her team is designing will sit in gas that reaches 1,450 degrees Celsius in ordinary operation. Whitcombe concludes that, used on that blade, the new coating ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'would fail in ordinary operation, since the gas exceeds its limit.',
          B:'keeps its structure at temperatures as high as 1,200 degrees Celsius.',
          C:'protects the metal better the hotter the surrounding gas becomes.',
          D:'shows that no ceramic coating can survive a modern turbine blade.'
        },
        correct:'A',
        expCorrect:'Two numbers decide it. The coating holds to 1,200 °C and crystallizes above that; the blade runs in gas at 1,450 °C. Since 1,450 is greater than 1,200, the blade’s normal operating temperature is already past the point where the ceramic flakes off, so the coating would fail in ordinary use rather than under some rare extreme.',
        expWrong:{
          B:'True according to the text, and it is the specification the paragraph handed you. Repeating the limit is not the same as saying what happens when the blade runs 250 degrees above it.',
          C:'Backwards. Heat is what destroys this coating above 1,200 °C, so more heat makes the protection worse rather than better.',
          D:'One coating tested against one blade cannot rule out every ceramic. Whitcombe’s conclusion is about this material at this temperature.'
        },
        tip:'When a passage hands you a threshold and a measured value, compare them and state what the comparison produces. The answer is the consequence of the number crossing the line, never a restatement of the line itself.'
      },
      {
        id:'INF-04', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (one term of a balance holds, the other moves)',
        passage:"A glacier’s size is a running balance: snow added in winter against ice lost to melting in summer. The glacier grows only in years when the snow added outweighs the ice lost. Working on the Tavaresh Glacier, glaciologist Nils Roskam has measured both quantities every year since 1994. Winter snowfall, he finds, has held nearly steady across the whole record, while summer melting has increased in each successive decade. Roskam’s measurements therefore indicate that the Tavaresh Glacier ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'gains ice only in years when snowfall outweighs summer melting.',
          B:'received steadily less winter snow as the decades went by.',
          C:'has tipped further toward loss with each passing decade.',
          D:'will disappear completely before the end of this century.'
        },
        correct:'C',
        expCorrect:'The balance has two terms. One of them, winter snowfall, has not moved; the other, summer melting, has risen decade by decade. Subtracting a growing number from a constant one drives the result downward every decade, so whatever the glacier’s balance was in 1994, it has shifted further toward loss ever since.',
        expWrong:{
          A:'True according to the text — it is the rule stated in the second sentence — but the sentence is building toward what Roskam’s measurements show about this glacier, not toward the definition he used to read them.',
          B:'The text says the opposite: snowfall has held nearly steady. The change in the record sits on the melting side.',
          D:'Nothing in the record fixes a date of disappearance. A balance tipping toward loss gives the direction of the change, not the year the ice runs out.'
        },
        tip:'In a two-term balance, hold the unchanged term still and follow the one that moves. The inference is the direction the total must travel, not a forecast of where it finally lands.'
      },
      {
        id:'INF-05', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a fixed total spread over fewer units)',
        passage:"A bakery’s oven, rent, and insurance cost the same each month no matter how many loaves come out of it, while ingredients and wages rise with every loaf baked. Economist Petra Oyelaran calls the first group fixed costs and the second variable costs, and she points out that the fixed costs are spread over however many loaves get produced. When a new highway diverted traffic away from the Brenner Street bakery, its monthly output fell from 9,000 loaves to 4,500 while its fixed costs stayed exactly where they were. Oyelaran notes that after the drop ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'the fixed cost carried by each loaf stayed exactly where it was.',
          B:'the fixed cost carried by each loaf fell along with the output.',
          C:'every bakery on a diverted road must eventually close its doors.',
          D:'the fixed cost carried by each loaf was twice what it had been.'
        },
        correct:'D',
        expCorrect:'Fixed cost per loaf is the fixed total divided by the number of loaves. The total did not move and the divisor fell from 9,000 to 4,500 — exactly half. Halving the denominator doubles the quotient. Check: a $9,000 fixed total is $1.00 a loaf at 9,000 loaves and $2.00 a loaf at 4,500 ✓.',
        expWrong:{
          A:'True of the total, which is what “fixed” means, and that is the trap. The blank asks about the cost carried by EACH loaf, and a constant total spread over half as many units is not constant per unit.',
          B:'This follows the wrong quantity. Fewer loaves means a smaller variable-cost total, but the fixed share per loaf moves the other way: the same rent is now carried by half as many loaves.',
          C:'One bakery on one street cannot establish what happens to every bakery. The text describes a division, not a universal law about traffic.'
        },
        tip:'Keep “total” and “per unit” apart. A fixed total is fixed only as a total; divided by a changing number of units, the per-unit share moves in the opposite direction from output.'
      },
      {
        id:'INF-06', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a definition that joins two conditions)',
        passage:"The transport board of Halvergate counts a street as “calmed” only when two conditions are met together: average vehicle speed must fall below 30 kilometers per hour, and the yearly count of collisions must fall as well. After Oak Row was rebuilt with narrower lanes, average speed on it dropped from 44 to 27 kilometers per hour. The collision count for the same period held at eighteen, exactly what it had been the year before. Under the board’s own definition, Oak Row ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'does not count as calmed, because only one condition was met.',
          B:'counts as calmed, since its average speed fell below 30 km/h.',
          C:'had an average vehicle speed of 27 kilometers per hour.',
          D:'shows that narrower lanes never reduce collisions anywhere.'
        },
        correct:'A',
        expCorrect:'The definition joins its two conditions with “together”, so both must hold. Speed passed: 27 is below 30. Collisions did not: eighteen in the new year against eighteen in the old is no fall at all. One condition met and one missed leaves the pair unmet, so by the board’s own wording the street is not calmed.',
        expWrong:{
          B:'This takes half of the definition. The board requires the speed drop AND the collision drop; satisfying one of two conditions joined by “together” does not satisfy the rule.',
          C:'True according to the text, and it is one of the two figures you need. Reporting a measurement is not the same as applying the definition the sentence asks you to apply.',
          D:'Far past the evidence. One street where collisions held steady for one year cannot show that narrower lanes never reduce collisions anywhere.'
        },
        tip:'When a passage defines a term with two conditions joined by “both” or “together”, test each condition separately and report the verdict on the pair. A single satisfied condition is not a partial pass — it is a fail.'
      },
      {
        id:'INF-07', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a physical object sets the earliest possible date)',
        passage:"Papermakers press a wire design into each sheet they make, leaving a watermark that identifies the mill and, often, the years it was in use. A volume at the Ellison Library carries a title page dated 1623. Book historian Ruth Calvani examined its leaves under raking light and found the watermark of the Fennimore mill, which records show did not begin operating until 1661. Calvani adds that the title page is a faithful copy of the original setting of type. She concludes that the Ellison volume ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'carries a title page bearing the date 1623 on its first leaf.',
          B:'was printed before the Fennimore mill began operating in 1661.',
          C:'was printed after 1661, whatever date its title page carries.',
          D:'proves that the 1623 edition of the book never actually existed.'
        },
        correct:'C',
        expCorrect:'Paper has to exist before anything can be printed on it. The Fennimore mill’s watermark cannot appear on a sheet made before 1661, so the sheets in this volume were made in 1661 or later and the printing came after that. The 1623 on the title page is a faithful copy of an original setting of type: it records when the text was first set, not when this copy came off the press.',
        expWrong:{
          A:'True according to the text, and it is the fact that made the volume puzzling in the first place. Restating the date does not resolve the conflict between the date and the watermark.',
          B:'The dating runs the other way. The paper could not have been made before the mill existed, so this volume is later than 1661, not earlier.',
          D:'Calvani says the title page copies an original setting of type, which suggests there WAS an earlier edition. Her finding dates this copy; it does not erase the edition the copy reproduces.'
        },
        tip:'When two dates in a passage disagree, ask which one is fixed by a physical object. The object — the paper, the pigment, the wood — sets the earliest possible date for the whole thing, while a printed or written date can be copied forward.'
      },
      {
        id:'INF-08', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a trait shaped by threats the ancestors met)',
        passage:"On Kaireka, an island that has never had land mammals, the ground-nesting takoro bird builds its nest in the open, leaves the eggs uncovered, and does not move when a person walks up to it. Ornithologist Selin Auerbach explains that a bird’s defenses answer the threats its ancestors faced: where nothing hunted nests from the ground for millions of years, concealment and flight brought no advantage and were never selected for. A shipment of rats reached Kaireka in 2019 and the animals have now spread island-wide. Auerbach’s reasoning implies that the takoro ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'builds its nest in the open without covering the eggs it lays.',
          B:'lacks any defense shaped against the ground predator it now faces.',
          C:'left its eggs uncovered in order to watch for approaching rats.',
          D:'will evolve concealment behavior within a single nesting season.'
        },
        correct:'B',
        expCorrect:'Auerbach’s rule is that defenses answer threats the ancestors faced. The takoro’s ancestors faced no ground predator, so no hiding and no fleeing was ever selected for. The rats are a ground predator that arrived in 2019 — far too recent to have shaped anything — so the bird meets this threat with a repertoire built for a world that did not contain it.',
        expWrong:{
          A:'True according to the text — it is the behavior described in the opening sentence — but the blank asks what Auerbach’s reasoning implies about the bird now that a ground predator is present.',
          C:'It reverses the explanation. Auerbach says the absence of ground predators is why no defense was ever built, not that the open nest serves as a lookout for one.',
          D:'Selection needs generations of differential survival, and the text supplies none. A single nesting season is not a mechanism the passage supports.'
        },
        tip:'The absence of a trait usually has a history behind it in these passages: nothing ever selected for it. When a new pressure arrives, the inference is that the animal meets it with whatever the old history left, not that the missing trait appears on demand.'
      },
      {
        id:'INF-09', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a ratio when the numerator moves and the denominator does not)',
        passage:"The municipal bus in Sanquira charges a single flat fare for any trip. In January the fare rose from 60 to 78 cents, while the wage of a full-time worker earning the city minimum stayed at exactly what it had been in December. Economist Gaspar Illing notes that what matters to a rider is not the fare by itself but the fare measured against what the rider earns. For a minimum-wage rider who takes the same number of trips as before, Illing concludes, the January increase means that ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'a larger share of that rider’s earnings now goes to bus fare.',
          B:'bus fare now takes up a smaller share of that rider’s earnings.',
          C:'the flat fare rose from 60 to 78 cents at the start of January.',
          D:'every rider in the city now spends more than they can afford.'
        },
        correct:'A',
        expCorrect:'The share is fare spending divided by earnings. Earnings are unchanged and the trip count is unchanged, so the numerator rises with the fare — 78 cents where 60 used to be, a 30 percent increase — while the denominator holds still. A bigger numerator over the same denominator is a bigger share. Check: 20 trips at 60¢ is $12.00 and 20 at 78¢ is $15.60, out of the same paycheck ✓.',
        expWrong:{
          B:'The direction is inverted. The fare went up and the wage did not move, so fare eats more of the paycheck, not less.',
          C:'True according to the text — it is the change the paragraph reports — but the blank asks what that change MEANS for the rider’s budget.',
          D:'“Every rider” and “more than they can afford” both go beyond the passage. Illing describes a share of earnings; affordability for every rider in the city is a separate claim the text never makes.'
        },
        tip:'For “share of income” claims, watch both numbers. The share rises whenever spending goes up and income holds still, and it also rises when spending holds and income falls: the ratio, not the price tag, is the thing being asked about.'
      },
      {
        id:'INF-10', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a product that forms only under a stated condition)',
        passage:"Clay vitrifies — its particles fuse into a glassy, waterproof body — only when it is held above about 1,000 degrees Celsius. Below that, a fired vessel stays porous and will seep. At the Nkwenti workshop site, excavators recovered hundreds of storage jars whose broken edges show the dense, glassy fabric of vitrified clay, alongside the collapsed remains of several kilns. No written record of the workshop survives. From the jars alone, archaeologists can conclude that the Nkwenti kilns ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'produced jars whose broken edges show a dense, glassy fabric.',
          B:'were kept below the temperature at which clay begins to vitrify.',
          C:'burned a fuel that no other workshop of the period could obtain.',
          D:'reached at least 1,000 degrees Celsius while the jars were fired.'
        },
        correct:'D',
        expCorrect:'Vitrification has one stated requirement: a temperature above roughly 1,000 °C. The jars are vitrified, so that condition was met while they were being fired, and the only heat source on the site is the kilns. The glassy fabric works as a thermometer for the firing, whatever the missing written record might have said.',
        expWrong:{
          A:'True according to the text, and it is the observation the conclusion starts from. Describing the sherds again does not say what they reveal about the kilns.',
          B:'Backwards. Below 1,000 °C the clay would have stayed porous, and these jars are vitrified, so the kilns were above that mark rather than below it.',
          C:'Fuel is never mentioned, and neither is any comparison with other workshops. The jars record a temperature, not a supply of firewood.'
        },
        tip:'A material that forms only under stated conditions is evidence that those conditions occurred. Find the threshold the passage gives, confirm the material is present, and conclude that the threshold was crossed — nothing more.'
      },

      /* ============ CHAINING TWO PREMISES (INF-11 a INF-24) ============ */
      {
        id:'INF-11', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (an outcome produced without a planner)',
        passage:"Foraging ants lay a chemical trail on the way back from food, and the chemical evaporates steadily, so a trail survives only if it is refreshed. Suppose two routes lead from a nest to the same food and one is half the length of the other. Entomologist Wilhelmina Oduya points out that an ant on the short route completes a round trip in half the time, and therefore lays fresh chemical on it twice as often as an ant on the long route lays chemical on hers. Over an afternoon this suggests that the colony ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'uses a chemical trail that evaporates unless it is refreshed.',
          B:'must send scouts ahead to measure both routes before choosing.',
          C:'concentrates on the shorter route without any ant comparing the two.',
          D:'always finds the shortest possible path to any food source.'
        },
        correct:'C',
        expCorrect:'Put the two facts together. The trail fades unless refreshed, and the short route gets refreshed twice as often. The short trail therefore sits at a higher concentration all afternoon, more ants follow the stronger trail, and those ants refresh it further. The colony ends up on the short route as a by-product of round-trip timing, with no individual ant ever holding both routes in mind.',
        expWrong:{
          A:'True according to the text — it is the property of the chemical that makes the whole argument work — but restating a premise does not say what the colony ends up doing.',
          B:'The passage supplies no measuring and no choosing. Oduya’s whole point is that the difference falls out of how often each trail gets refreshed.',
          D:'“Always” and “any food source” overshoot. The mechanism described favors the shorter of the routes ants actually travel; it cannot guarantee the best possible path in every situation.'
        },
        tip:'A “this suggests” blank asks for the outcome the stated mechanism produces, stated no more strongly than the mechanism allows. Be suspicious of options that add a planner — a scout, a decision, a comparison — to a process the passage explains without one.'
      },
      {
        id:'INF-12', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (two records covering different stretches of one life)',
        passage:"Tooth enamel forms in childhood and then never changes, locking in the chemical signature of the water a person drank while growing up. Bone, by contrast, is rebuilt throughout life, so its chemistry reflects roughly the last decade before death. At a cemetery outside Vallmark, bioarchaeologist Dario Penhale tested both tissues from twenty burials. In every case the enamel signature matched a region two hundred kilometers to the south, while the bone signature matched Vallmark itself. Penhale concluded that these twenty people ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'left behind teeth whose enamel had formed during their childhoods.',
          B:'grew up in the south and spent their later years at Vallmark.',
          C:'were born at Vallmark and moved to the south as adults.',
          D:'belonged to a population that migrated north every generation.'
        },
        correct:'B',
        expCorrect:'Each tissue is a clock for a different stretch of life. Enamel is childhood and it reads southern, so childhood was spent in the south. Bone is the last decade and it reads Vallmark, so those years were spent at Vallmark. Two tissues, two periods, one direction of travel: south first, Vallmark later.',
        expWrong:{
          A:'True according to the text — enamel forms in childhood, which is exactly why it is useful here — but the blank asks what the two signatures together say about these people’s lives.',
          C:'It runs the timeline backwards. The childhood tissue carries the southern signature and the adult tissue the local one, so the move went from south to Vallmark.',
          D:'Twenty burials showing one move inside one lifetime cannot establish a migration repeated every generation. The evidence covers these individuals, not a standing pattern.'
        },
        tip:'When a passage pairs two records covering different periods of the same life, line them up in time before answering. The earlier record tells you where the story begins and the later one where it ends; reversing them is the distractor the item is built around.'
      },
      {
        id:'INF-13', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (what differs when everything else is held identical)',
        passage:"Self-healing concrete carries dormant bacteria and a mineral food supply mixed into the wet mix. When a crack opens and water seeps in, the water wakes the bacteria, which consume the food and deposit limestone that seals the gap. Materials scientist Yuki Barenboim cast identical panels and cracked them to identical widths at two sites. On the coast, the cracks closed within three weeks. At an inland site where no rain had fallen in fourteen months, cracks of the same width in the same mix stayed open. Barenboim’s results imply that the healing ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'is carried out by bacteria mixed into the concrete while it is wet.',
          B:'is what lets water seep down into a crack in the first place.',
          C:'makes every repaired panel stronger than it was before cracking.',
          D:'depends on water reaching the crack rather than on its width.'
        },
        correct:'D',
        expCorrect:'Barenboim ran the same mix and the same crack width at both sites, so neither material nor width can explain the difference between them. The one variable left is water: the coastal panels got it and sealed, the panels in a fourteen-month drought did not and stayed open. When everything but one factor is held still, the difference belongs to that factor.',
        expWrong:{
          A:'True according to the text — it is how the material is built — but naming the agent does not say what the two sites’ different results show about what the agent needs.',
          B:'Cause and effect are swapped. In the text the water enters the crack first and the healing follows; the limestone does not open the way for the water.',
          C:'Strength after repair is never measured. The panels are compared on whether their cracks closed, not on how much load they then carried.'
        },
        tip:'In a two-site comparison, list what was held identical and what differed. Everything held identical is disqualified as an explanation, and the inference belongs to whatever was left free to vary.'
      },
      {
        id:'INF-14', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (two linked events drifting at different rates)',
        passage:"Chicks of the marsh warbler must be fed a burst of caterpillars that appears for about ten days each spring, and the parents time their laying so that hatching falls inside that window. Caterpillar emergence is triggered by soil temperature; warbler laying is triggered by day length, which does not change from year to year. Across the last three decades ecologist Hanne Vestergaard finds that the caterpillar peak has moved eleven days earlier while the average laying date has moved forward by two. Her data suggest that marsh warbler chicks are now ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'hatching after the caterpillar peak has largely passed them by.',
          B:'hatching earlier in the spring than their parents once did.',
          C:'fed on caterpillars that emerge in response to the day length.',
          D:'certain to vanish from the marshes within a few more decades.'
        },
        correct:'A',
        expCorrect:'Two dates are moving at different speeds. The food has shifted eleven days earlier; the hatch has shifted two. The gap between them has therefore opened by nine days, and since the caterpillar burst lasts only about ten, a hatch nine days late arrives as the window is closing. Check: 11 − 2 = 9, against a window of 10 ✓.',
        expWrong:{
          B:'True according to the text — laying has moved two days earlier — and that is what makes it tempting. But the blank is about the fit between hatching and the food, and a two-day advance against an eleven-day one is what creates the problem, not what solves it.',
          C:'The triggers are crossed. The caterpillars answer soil temperature; it is the warblers that answer day length, which is precisely why they cannot keep up.',
          D:'Extinction is a far larger claim than a shifted date. The text reports a growing mismatch, not a projection of the species disappearing.'
        },
        tip:'When two linked events drift at different rates, subtract to find the gap and compare it with whatever window the passage gives. Something that is “also moving earlier” can still be falling behind.'
      },
      {
        id:'INF-15', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (solve for the third factor of a product)',
        passage:"A ferry operator’s revenue is the fare multiplied by the number of tickets sold, so a fare increase raises revenue only if the loss in riders is small enough not to cancel the gain per ticket. The Alderbay service raised its fare by 15 percent last autumn and, comparing full quarters, took in 4 percent more revenue than in the same quarter a year earlier. Analyst Corinne Dusoulier notes that nothing else changed in that period: no new route, no schedule change, no promotion. It follows that ridership on the Alderbay service ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'was multiplied by the fare to give the operator’s revenue.',
          B:'rose along with the fare that riders were being charged.',
          C:'fell by less than 15 percent after the fare increase.',
          D:'will keep falling every time the operator raises the fare.'
        },
        correct:'C',
        expCorrect:'Revenue is fare times riders. The fare rose by a factor of 1.15 and revenue by a factor of 1.04, so the rider factor must be 1.04 ÷ 1.15 = 0.904, a drop of about 9.6 percent. That is a fall, so ridership did not rise, and it is a fall smaller than 15 percent, which is why revenue still came out ahead. Check: 1.15 × 0.904 = 1.04 ✓.',
        expWrong:{
          A:'True according to the text — it is the definition of revenue the passage opens with — but the blank asks what that definition, plus the two percentages, forces about the riders.',
          B:'If riders had increased, revenue would have grown by more than the 15 percent fare rise. It grew by 4, so the rider count moved down rather than up.',
          D:'One increase tells you nothing about the next. The passage supports a conclusion about this fare change in this quarter, not a rule for every future one.'
        },
        tip:'When a passage gives you a product and two of its three parts, solve for the third before you look at the options. Revenue up by less than the price increase always means the quantity went down.'
      },
      {
        id:'INF-16', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (the direction a self-selected sample is biased)',
        passage:"A city council mailed a questionnaire about a proposed parking fee to every household and received replies from 9 percent of them. Of those who replied, 71 percent opposed the fee. Political scientist Eun-ji Marquez cautions that a household with strong feelings about a proposal is far likelier to take the trouble to reply than an indifferent one, and that the strongest feelings a new fee provokes are usually objections. Marquez therefore argues that the 71 percent figure ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'came from the 9 percent of households that mailed back a reply.',
          B:'likely overstates the opposition among households as a whole.',
          C:'understates the opposition present among households as a whole.',
          D:'proves that no mailed questionnaire can ever measure opinion.'
        },
        correct:'B',
        expCorrect:'Marquez’s two premises point the same way: strong feeling drives replies, and the strong feeling a new fee provokes is usually objection. The 9 percent who wrote back are therefore weighted toward opponents compared with the 91 percent who did not. A figure drawn from a sample that over-represents opponents reads higher than the number for all households, so 71 percent overstates city-wide opposition.',
        expWrong:{
          A:'True according to the text, and it is the fact that creates the problem. Saying where the number came from is not the same as saying what the number is worth, which is Marquez’s argument.',
          C:'The bias runs the other way. If opponents are the ones most likely to reply, their share inside the replies is inflated, so the figure sits above the truth rather than below it.',
          D:'Far too strong. Marquez identifies a bias in one voluntary-reply sample; she does not throw out mailed surveys as a method.'
        },
        tip:'When only a self-selected slice answers, ask what kind of person bothered to answer. The direction of that bias is the direction the reported number is off, and “the sample is not the population” is the whole inference.'
      },
      {
        id:'INF-17', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a total changes while one factor is stated constant)',
        passage:"The Ashcott Canal Company charged a toll on every ton of cargo carried on its water. Its ledgers show that in 1835, before the railway opened alongside, the canal carried 240,000 tons and collected £48,000 in tolls. In 1845 the ledgers record the same tonnage — 240,000 tons — but only £24,000 collected. Historian Amara Brightwell notes that the ledger clerks were meticulous and that no tonnage went untolled. Brightwell concludes that between 1835 and 1845 the company ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'halved the toll it charged for each ton of cargo carried.',
          B:'collected exactly £24,000 in tolls over the course of 1845.',
          C:'carried only half as much cargo as it had a decade earlier.',
          D:'was driven out of business by the railway beside its water.'
        },
        correct:'A',
        expCorrect:'Toll income is the rate per ton times the tonnage, and the clerks left no ton untolled. The tonnage is identical in the two years — 240,000 both times — so the entire change sits in the rate. 1835: £48,000 ÷ 240,000 = £0.20 a ton. 1845: £24,000 ÷ 240,000 = £0.10 a ton. Check: half of 20 pence is 10 pence ✓.',
        expWrong:{
          B:'True according to the text — it is the 1845 figure the paragraph supplies — but the blank asks what the pair of figures reveals about the company’s charging.',
          C:'The ledgers give the same tonnage in both years. It is the money that halved, not the cargo, which is exactly what leaves the rate as the only thing free to change.',
          D:'Nothing in the ledgers speaks to the company’s survival. A lower rate on the same tonnage is a change in price, not a closure.'
        },
        tip:'If a total changes while one of its two factors is stated to be unchanged, the other factor carries the whole change. Divide each total by the constant and compare the two results.'
      },
      {
        id:'INF-18', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a narrow requirement makes a species a detector)',
        passage:"The bracket fungus Peniophora crescens colonizes only wood that has died within the previous two years; on older dead wood it is outcompeted by other species and cannot establish. Mycologist Tobias Ruszkowski surveys a mixed forest reserve every autumn. In most years he records a handful of Peniophora fruiting bodies scattered across the reserve. In the autumn of 2023 he counted more than four thousand of them, on trunks throughout the forest. The pattern suggests that in this forest ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'a handful of fruiting bodies appear in an ordinary autumn.',
          B:'the trees that died were killed by the fungus that covers them.',
          C:'a great many trees died within the two years before 2023.',
          D:'every tree in the reserve had died during the previous two years.'
        },
        correct:'C',
        expCorrect:'The fungus can establish only on wood that died within the previous two years, so each fruiting body marks a trunk that died inside that window. Four thousand of them in one autumn, where a handful is normal, therefore marks a great many trunks that died in 2021 or 2022. The fungus is counting deaths, and the count jumped.',
        expWrong:{
          A:'True according to the text — that is the baseline Ruszkowski usually records — and it is what makes 2023 remarkable. It does not say what the remarkable year implies.',
          B:'Cause and effect are swapped. The passage describes a fungus that arrives after a tree is already dead; nothing in it makes the fungus the killer.',
          D:'“Every tree” is far more than four thousand fruiting bodies can show. The survey records an unusual number of recent deaths, not the loss of the whole forest.'
        },
        tip:'A species that requires a narrow condition works as a detector for that condition. When its numbers spike, infer that the condition became common — and resist turning the detector into the cause of what it detects.'
      },
      {
        id:'INF-19', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (evidence matching a stated signature)',
        passage:"A shell midden is a refuse heap built up over generations of harvesting. Because a clam grows for years before reaching full size, a bed taken faster than it can replace itself yields steadily smaller animals: the old clams are removed and fewer survive long enough to grow large. Excavating the Maruaki midden layer by layer, archaeologist Thandi Shongwe measured 12,000 shells, all of a single species. The oldest layers average 84 millimeters; each successive layer is smaller, and the topmost averages 51. Shongwe concluded that the people of Maruaki ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'left a midden whose uppermost layer averages 51 millimeters.',
          B:'were taking fewer clams from the bed as the generations passed.',
          C:'took clams from the bed until not a single one was left.',
          D:'were harvesting the bed faster than it could replace itself.'
        },
        correct:'D',
        expCorrect:'The passage states the signature of over-harvesting before it gives the data: a bed taken faster than it can replace itself yields steadily smaller animals. The Maruaki sequence shows exactly that, layer by layer and within a single species, from 84 millimeters at the bottom to 51 at the top. The observed pattern matches the stated cause.',
        expWrong:{
          A:'True according to the text — it is the last number Shongwe measured — but a measurement is the evidence for the conclusion, not the conclusion the sentence is reaching for.',
          B:'It points the wrong way. Shrinking shells are the sign of heavier pressure on the bed, not lighter; taking fewer clams would let more of them reach full size.',
          C:'Nothing here says the bed was emptied. Fifty-one-millimeter clams in the topmost layer show that clams were still being taken, which is the opposite of none remaining.'
        },
        tip:'When a passage first states what a cause looks like in the evidence and then shows evidence of that shape, the inference is that the cause was operating. Match the pattern to the stated signature instead of inventing a new explanation for it.'
      },
      {
        id:'INF-20', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (reading each result back to its own cause)',
        passage:"Cooled slowly, a carbon steel gives its carbon time to gather into coarse bands; plunged into water from red heat, the same steel traps its carbon and sets into a fine needle-like structure that no slow cooling can produce. Conservator Amaia Lorenzetti sectioned a blade from the Doravik hoard and polished the cut face. Under the microscope the entire cutting edge shows the fine needle structure, while the thick spine behind it shows the coarse bands. Lorenzetti’s observation implies that the smith ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'made a blade whose spine shows coarse bands of gathered carbon.',
          B:'cooled the edge quickly in water and let the spine cool slowly.',
          C:'cooled the edge slowly and plunged the thick spine into water.',
          D:'knew that every steel blade must be quenched along its edge.'
        },
        correct:'B',
        expCorrect:'The passage ties each structure to one cooling history: fine needles come only from a fast quench, coarse bands from slow cooling. The edge shows needles, so the edge was quenched; the spine shows bands, so the spine cooled slowly. Two structures in one blade mean two cooling rates in one blade, which is what the smith’s treatment had to produce.',
        expWrong:{
          A:'True according to the text — Lorenzetti reports exactly that — but it is half of the observation, and restating half of the evidence does not say what the smith did.',
          C:'The two halves are swapped. Needles mark the quenched part and bands the slowly cooled part, so it was the edge that went into the water, not the spine.',
          D:'One blade cannot establish what every blade must have. The text supports a claim about how this piece was made, not a universal rule of smithing.'
        },
        tip:'When a passage maps each possible cause onto a distinct visible result, read the results backwards one at a time. Two different results inside one object mean the object went through two different histories.'
      },
      {
        id:'INF-21', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (what an incentive pushes toward)',
        passage:"The port of Vindhamn charges a shipping line a flat fee for each container unloaded, regardless of what the container weighs or how full it is. Economist Rasheed Okonjo observes that a line’s cost at the port therefore depends only on how many boxes it lands, while the freight it is paid for depends on how much cargo those boxes hold. He adds that the lines calling at Vindhamn compete fiercely on price. Okonjo’s reasoning implies that those lines have a strong incentive to ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'pay the port a flat fee for every container they unload.',
          B:'spread the same cargo across as many containers as possible.',
          C:'pack each container as full as the cargo will allow.',
          D:'refuse any cargo that cannot fill a container completely.'
        },
        correct:'C',
        expCorrect:'Cost scales with boxes; income scales with cargo. A line that puts more cargo into each box earns more without paying more, because the fee does not move with weight or fullness. Fierce price competition means whatever lowers cost per ton of cargo gets adopted, so the incentive points straight at filling every container.',
        expWrong:{
          A:'True according to the text — it is the port’s pricing rule — but the rule is the premise here. The blank asks what behavior that rule pushes the lines toward.',
          B:'That maximizes the one thing the port charges for. More boxes carrying the same cargo means more flat fees and no extra freight income.',
          D:'Turning cargo away is more than the incentive supports. A partly filled box still earns freight and still costs one fee, and the passage gives no reason to reject that business outright.'
        },
        tip:'To find an incentive, compare what a decision changes on the cost side with what it changes on the revenue side. The favored behavior is whatever moves revenue without moving cost — and “refuse the business” is almost never it.'
      },
      {
        id:'INF-22', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a necessary condition that is not being met)',
        passage:"A language survives into the next generation only if children acquire it at home; once a generation reaches adulthood without it, no amount of adult study restores it as a household tongue. In the valley of Torrecana, sociolinguist Beata Amankwah interviewed all 1,180 residents. Every resident over seventy speaks Torracano fluently; among residents between forty and seventy, roughly one in five does; below forty she found no fluent speaker at all, and no household where the language is spoken to children. Amankwah concluded that Torracano ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'is no longer being passed on to children in the valley.',
          B:'is spoken fluently by every resident of the valley over seventy.',
          C:'is more widely spoken among young residents than among old ones.',
          D:'can never be recovered by any community that has lost it.'
        },
        correct:'A',
        expCorrect:'Amankwah’s rule is that survival runs through children acquiring the language at home. Her survey finds no household in Torrecana where that is happening and no fluent speaker under forty. The condition the rule names as necessary is therefore not being met, so transmission to the next generation has stopped, whatever the oldest speakers still do among themselves.',
        expWrong:{
          B:'True according to the text — it is the top of her age gradient — and it is what makes the bottom of that gradient alarming. Restating it does not state the conclusion the gradient supports.',
          C:'The survey says the reverse: fluency runs from everyone over seventy, to one in five in middle age, to nobody at all under forty.',
          D:'The rule in the text is narrower than this. It says adult study cannot restore a HOUSEHOLD tongue to a generation that grew up without it, not that recovery of any kind is impossible for any community forever.'
        },
        tip:'When a passage states a necessary condition, check the evidence against that condition and report whether it is met. Necessary-condition claims support a firm negative conclusion and almost never support a sweeping claim about all cases everywhere.'
      },
      {
        id:'INF-23', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (subtracting one measurement from a mixed one)',
        passage:"A tide gauge is bolted to the land and measures the distance from that land to the sea surface, so its record mixes two movements: the ocean rising and the ground beneath the gauge sinking. Satellite altimeters, by contrast, measure the sea surface against the center of the Earth and are unaffected by what the local ground does. At Port Mervale the tide gauge reports a rise of 5.1 millimeters a year, while satellites over the same stretch of water report 3.4. Oceanographer Runa Backlund concludes that the land beneath the gauge ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'holds a tide gauge reporting 5.1 millimeters of rise a year.',
          B:'is sinking by about 1.7 millimeters a year.',
          C:'is rising faster than the sea surface standing above it.',
          D:'is sinking faster than any other coastline on the planet.'
        },
        correct:'B',
        expCorrect:'The gauge measures ocean rise plus land sinking; the satellites measure ocean rise alone. Subtracting one from the other leaves the land term: 5.1 − 3.4 = 1.7 millimeters a year. Check: 3.4 of true ocean rise plus 1.7 of subsidence gives back the 5.1 the gauge sees ✓.',
        expWrong:{
          A:'True according to the text — it is the gauge’s figure — but the blank asks what the difference between the two instruments reveals about the land they sit on.',
          C:'If the ground were rising, the gauge would see less rise than the satellites, not more. The gauge reads high, which is the signature of land going down.',
          D:'One comparison at one port says nothing about the rest of the world’s coasts. The arithmetic yields a rate, not a ranking.'
        },
        tip:'When two instruments measure overlapping quantities, the difference between them isolates whatever only one of them includes. Subtract the cleaner measurement from the mixed one and name what is left over.'
      },
      {
        id:'INF-24', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a practice plus the circumstance that prompts it)',
        passage:"Coins of the kingdom of Aurelia were struck at a fixed face value, and for two centuries each silver denar held about 4.2 grams of silver. Metallurgical testing of dated issues shows the content falling to 3.1 grams under one ruler and to 1.6 under the next, while the face value and the design never changed. Historian Ingrid Vasarhelyi points out that a mint can strike more coins from the same stock of silver only by putting less metal into each one, and that no ruler does this while silver is plentiful. The testing therefore indicates that Aurelia’s later rulers ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'struck coins whose face value and design stayed unchanged.',
          B:'had more silver at their disposal than their predecessors had.',
          C:'destroyed the kingdom’s economy by reducing the silver content.',
          D:'needed more coins than their silver supply could otherwise furnish.'
        },
        correct:'D',
        expCorrect:'Vasarhelyi supplies both the mechanism and the motive. Cutting the silver per coin is how a mint gets more coins out of a fixed stock, and the text says no ruler does it while silver is plentiful. The tested coins show the content cut twice over, so both halves of her point apply: the later rulers were stretching a supply that would not otherwise cover the coins they wanted.',
        expWrong:{
          A:'True according to the text — the unchanged face value is what makes the thinning worth noticing — but it is the setup, not the conclusion the testing points to.',
          B:'It reverses the reasoning the passage supplies. Debasement is what a mint does when silver is scarce; a ruler with more silver has no reason to thin the coin.',
          C:'The passage never traces the consequences of the change. It explains why a mint debases a coin; it does not report what happened to Aurelia afterward.'
        },
        tip:'When a text tells you both what a practice accomplishes and the circumstance in which it is used, the inference is that the circumstance held. Stop there: the motive for an action is not a report of its results.'
      },

      /* ============ HARD: which premise does the work (INF-25 a INF-34) ============ */
      {
        id:'INF-25', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (a systematic offset of known size and direction)',
        passage:"Radiocarbon dating assumes that a living thing takes up carbon whose radioactive fraction matches the atmosphere’s. Sea water, however, carries dissolved carbon that left the atmosphere centuries earlier, so a marine shell begins its decay clock already old and dates several hundred years earlier than a land plant that died the same day. Archaeologist Nnenna Farrier dated a hearth at Carrick Point twice: charcoal from a burnt branch returned 3,200 years, and a mussel shell from the same handful of ash returned 3,600. Farrier argues that the two results ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'come from ash that held charcoal and a mussel shell together.',
          B:'call for raising the charcoal date to meet the shell’s 3,600.',
          C:'are consistent with one hearth once the sea offset is applied.',
          D:'show that no radiocarbon date on any material can be trusted.'
        },
        correct:'C',
        expCorrect:'The passage says a marine shell starts its clock several hundred years old, so a shell and a branch that died on the same day will report dates a few centuries apart, with the shell older. Here the gap is 400 years and it falls in exactly that direction. Subtracting the known sea offset from the shell brings it back onto the charcoal’s 3,200: one hearth, two materials, one date.',
        expWrong:{
          A:'True according to the text — both materials came from the same handful of ash — and that is why the discrepancy demanded an explanation in the first place. It does not supply the explanation.',
          B:'The correction belongs to the shell, not the charcoal. Sea water is what makes a date read too old, and a burnt land branch took its carbon straight from the atmosphere, so it needs no adjustment.',
          D:'The passage describes a known, quantifiable offset in one class of material. A correction that scientists can calculate and apply is the opposite of a reason to abandon the method.'
        },
        tip:'A systematic offset is not a random error: it has a known size and a known direction. When two dates disagree by about that offset and in that direction, the inference is agreement after correction, applied to the material the offset actually affects.'
      },
      {
        id:'INF-26', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (a sample selected by the quality it is used to measure)',
        passage:"Historian Marta Kellenberger studies domestic building in the province of Riel between 1500 and 1700. The houses she can examine are the ones still standing, and she stresses that standing for three centuries is not a random accident: a house survives largely because it was built of stone, on good foundations, by someone who could pay for both. Tax rolls from the period record that most households in Riel lived in timber-and-daub dwellings. Kellenberger warns that a description of Riel housing drawn only from surviving buildings would ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'be drawn from the houses that are still standing in Riel today.',
          B:'describe the sturdiest houses as though they were the usual ones.',
          C:'understate how solidly the province’s houses were generally built.',
          D:'be worthless for any question a historian might ask about Riel.'
        },
        correct:'B',
        expCorrect:'Survival is not random here: the text says stone, good foundations, and money are what carry a house through three centuries. The surviving set is therefore the expensive end of the range, while the tax rolls put most households in timber and daub. Reading the survivors as typical takes an atypical sturdy minority and reports it as the norm.',
        expWrong:{
          A:'True according to the text — that is where Kellenberger’s evidence comes from — but the blank asks what the consequence of relying on it alone would be.',
          C:'It has the bias backwards. The survivors are the sturdiest houses, so a description built from them reads as more solid than the province was, not less.',
          D:'Kellenberger identifies a specific distortion, not a total loss. Surviving stone houses remain direct evidence about stone houses; the warning is against treating them as evidence about everyone.'
        },
        tip:'When what survives was selected by a quality, the sample leans toward that quality. Name the direction first — sturdier, louder, more successful — and the distortion follows: the sample makes that quality look ordinary.'
      },
      {
        id:'INF-27', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (necessary for one condition, not for another)',
        passage:"Termites of the genus Rethocryptus live on wood, which is mostly cellulose, and cellulose cannot be broken down by any enzyme a termite itself makes. The termite gut houses protists that do make such enzymes. Biologist Idris Bhattacharya raised two groups in identical conditions: one with its gut protists intact, one from which the protists had been cleared by heat treatment. On a diet of pure wood the treated group starved within two weeks while the untreated group thrived. On a diet of glucose, both groups thrived for the full two weeks. Bhattacharya’s results indicate that the protists are ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'necessary for living on wood, but not for living on glucose.',
          B:'present in the gut of termites that feed on a diet of wood.',
          C:'the reason a treated termite can still survive on pure glucose.',
          D:'the source of every nutrient the termite takes in from any diet.'
        },
        correct:'A',
        expCorrect:'Compare the pairs one diet at a time. On wood, removing the protists kills the termites, so the protists are required to live on wood. On glucose, removing them changes nothing, so the requirement does not extend to that diet. The role is diet-specific, exactly as the enzyme story predicts: nothing in the termite can break cellulose, and glucose needs no breaking.',
        expWrong:{
          B:'True according to the text — the genus houses these protists — but the blank asks what the experiment establishes about what they DO, not about where they live.',
          C:'The treated group is the one WITHOUT protists, so its survival on glucose cannot be credited to them. That result is evidence that glucose does not need them at all.',
          D:'The glucose result rules this out. Termites without protists lived perfectly well on glucose, so the protists cannot be the source of everything the animal takes in.'
        },
        tip:'A two-diet, two-group design isolates a role: look at what removing the factor changes and where removing it changes nothing. “Necessary for this, not for that” is a stronger and safer reading than “responsible for everything”.'
      },
      {
        id:'INF-28', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (an average moved by its weights, not its prices)',
        passage:"A regional health plan reports that the average cost of a knee operation at its hospitals rose 9 percent last year. Analyst Kofi Lindenbaum breaks the figure down. At each of the plan’s eleven hospitals the price charged for the operation was unchanged or slightly lower than the year before. What did change is where the operations happened: the plan closed two low-cost rural theatres, and the share of operations performed at its two most expensive urban hospitals rose from 18 percent to 44. Lindenbaum concludes that the 9 percent rise ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'followed a year in which two low-cost rural theatres closed.',
          B:'was held down by the closing of the low-cost rural theatres.',
          C:'shows that every hospital in the plan charged more than before.',
          D:'reflects a shift in where operations were done, not higher prices.'
        },
        correct:'D',
        expCorrect:'An average over a mix moves when the mix moves, even with every price frozen. No hospital charged more — prices were unchanged or slightly lower at all eleven — but the expensive hospitals’ share of the operations went from 18 percent to 44, so more of the operations being averaged are now the costly kind. The 9 percent is composition, not price.',
        expWrong:{
          A:'True according to the text, and the closures are part of the story. Naming an event that happened is not the same as explaining the number, which is what Lindenbaum’s conclusion has to do.',
          B:'The closures pushed the average the other way. Removing low-cost theatres raises the share of expensive ones, which lifts the average rather than holding it down.',
          C:'The passage says the opposite hospital by hospital: at each of the eleven, the price was unchanged or slightly lower than the year before.'
        },
        tip:'An average can rise while every single price falls, if the weights shift toward the expensive items. Whenever a passage hands you both prices and shares, check the shares before blaming the prices.'
      },
      {
        id:'INF-29', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (a proxy used outside its working range)',
        passage:"The shell of the foraminifer Globa pallida takes up magnesium in proportion to the temperature of the water it grew in, and paleoceanographers read that magnesium as a thermometer for ancient seas. Geochemist Solveig Eriksdottir reports that the relationship holds from 2 to 24 degrees Celsius, but that above 24 the shell’s magnesium stops rising with temperature and levels off. A colleague plans to use Globa shells to compare two tropical intervals in which sea surface temperatures are independently known to have run between 27 and 31 degrees. Eriksdottir replies that for those intervals the magnesium would ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'track the temperature of the water in which each shell grew.',
          B:'read nearly the same for both, whatever the true difference was.',
          C:'fall as the water grew warmer past the 24-degree mark.',
          D:'be useless for reconstructing sea temperature at any age or depth.'
        },
        correct:'B',
        expCorrect:'The proxy responds to temperature only up to 24 °C; past that it flattens. Both intervals sit entirely above the flat part, at 27 to 31 degrees, so the magnesium in both is pinned at the ceiling and the difference the colleague wants to measure never reaches the shell. The readings would come out alike whether the two intervals differed by one degree or by four.',
        expWrong:{
          A:'True according to the text below 24 degrees, and that is the trap: it states the property the method relies on while dropping the limit that makes the method fail here.',
          C:'“Levels off” is not “falls”. Above 24 degrees the magnesium stops responding; the passage never says it reverses.',
          D:'The limit is a ceiling, not a demolition. Eriksdottir’s own figures say the thermometer works from 2 to 24 degrees, and it is this tropical comparison that lies outside its range.'
        },
        tip:'When a measurement tool comes with a working range, check whether the case in question falls inside it. Outside the range an instrument usually does not lie in a new direction — it stops distinguishing at all, so different inputs come back looking identical.'
      },
      {
        id:'INF-30', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (silence in a record that was destroyed)',
        passage:"The customs house at Bellhaven burned in 1782, destroying every import register kept before that year; registers from 1782 onward survive complete. Economic historian Casimir Ntumba observes that those later registers list cochineal dye arriving from across the Atlantic in every single year, in steady quantities, from the very first surviving volume. A colleague, finding no mention of cochineal in any Bellhaven document before 1782, proposes that the trade began in that year. Ntumba answers that the colleague’s silence ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'is what a fire would produce whether or not the trade was older.',
          B:'comes from documents written before the customs house burned.',
          C:'proves that the cochineal trade began in the year of the fire.',
          D:'shows the trade must have been larger before 1782 than after.'
        },
        correct:'A',
        expCorrect:'The absence has two possible sources: the trade did not exist, or the records that would have shown it burned. The fire destroyed every pre-1782 register, so the second source is guaranteed to be operating and the evidence is missing either way. On top of that, the first surviving volume already shows steady quantities, which is what an established trade looks like rather than a new one.',
        expWrong:{
          B:'The opposite is true, and it is the heart of the problem: no pre-1782 import register survives at all. The silence comes from documents that are gone, not from documents anyone can read.',
          C:'That is the colleague’s inference, and the fire is exactly what undermines it. A beginning in 1782 remains possible; the point is that the silence gives no reason to believe it.',
          D:'Ntumba’s objection is that the earlier volume of trade is simply unknown. Arguing that it must have been larger reads the same missing evidence in a new direction, with no more support than before.'
        },
        tip:'Absence of evidence counts only when the evidence would have survived. Look for anything in the passage — a fire, a flood, a gap in the record — that guarantees the silence, and then treat that silence as uninformative in both directions.'
      },
      {
        id:'INF-31', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences (the prediction only one of two mechanisms makes)',
        passage:"Cleaner shrimp remove parasites from reef fish that queue at their stations. Two biologists agree that a fish visits a cleaner more often when it carries more parasites, and that visits also rise after a fish has been chased by a predator. Nadia Ferreol holds that both effects run through the parasites: the stress of a chase weakens a fish’s skin defenses, its parasite load climbs, and it visits because it is more heavily infested. Marcus Thibodeau holds instead that a chased fish visits because the station is a place where predators do not strike, whatever its parasite load. A reef where predators have been fished out would, on Thibodeau’s account, ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'show fish visiting cleaners more often when they carry more parasites.',
          B:'prove that parasite load has no effect at all on visits to a cleaner.',
          C:'show more visits than a predator-rich reef with the same parasite loads.',
          D:'show fewer visits than a predator-rich reef with the same parasite loads.'
        },
        correct:'D',
        expCorrect:'Thibodeau attaches the extra visiting to the predator rather than the parasite: a chased fish comes for a place where nothing strikes. The comparison holds parasite load equal across the two reefs, which strips Ferreol’s mechanism of anything to work on — equal loads, equal visits on her account. Thibodeau’s motive, safety, is present on the predator-rich reef and absent on the fished-out one, so only his account predicts fewer visits there.',
        expWrong:{
          A:'True according to the text, and both biologists agree on it. A prediction the two of them share cannot be the one that follows specifically from Thibodeau’s account.',
          B:'Thibodeau never denies the parasite effect; he adds a second motive alongside it. Both scientists accept that a heavier infestation brings more visits.',
          C:'The direction is inverted. Removing the predators removes the danger that, on Thibodeau’s account, sends fish to the station in the first place.'
        },
        tip:'To test one of two rival mechanisms, find the comparison that switches that mechanism off while holding the rival’s input fixed. Any prediction both sides would happily sign is a shared premise, not the answer.'
      },
      {
        id:'INF-32', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences (a rate applied to its own base before comparing)',
        passage:"The Dellworth job programme enrolled 3,000 applicants last year and placed 12 percent of them in permanent work; the smaller Ravenna programme enrolled 400 and placed 33 percent. Both figures are correct and neither programme disputes the other’s. The regional board that funds both is not asking which programme is more effective per applicant. It has been asked a narrower question: which programme put more people into permanent work last year. On the figures given, the board should find that ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'Dellworth enrolled 3,000 applicants against Ravenna’s 400.',
          B:'Ravenna placed more people, since a third of its applicants found work.',
          C:'Dellworth placed about 228 more people than Ravenna did.',
          D:'a programme with the lower placement rate always places fewer people.'
        },
        correct:'C',
        expCorrect:'The question is about people, so each rate is applied to its own enrolment. Dellworth: 12 percent of 3,000 = 360. Ravenna: 33 percent of 400 = 132. Difference: 360 − 132 = 228. Check: 0.12 × 3,000 = 360 and 0.33 × 400 = 132 ✓. The lower rate wins on count because it works on a base seven and a half times larger.',
        expWrong:{
          A:'True according to the text, and it is half of what you need, but enrolment is not placement. The 12 percent still has to be applied before the comparison means anything.',
          B:'It compares rates when the board asked for counts. A third of 400 is 132 people, well short of Dellworth’s 360.',
          D:'The numbers here refute the rule: Dellworth’s rate is far lower and its count is far higher. A rate says nothing about a count until you know the size of the base it sits on.'
        },
        tip:'Percentages compare within a group; counts compare across groups. Multiply each rate by its own base before answering, and expect a much larger base to win on counts even when it loses badly on rate.'
      },
      {
        id:'INF-33', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences (a method that reads a variable which does not vary)',
        passage:"Historian Hedda Ferraz dates undocumented Alpine chapels by roof pitch. Where snow is heavy, she argues, a roof must be steep enough to shed the load or it collapses, so builders there worked above 45 degrees; where snow is light, roofs were built shallow to save timber. Ferraz insists that a pitch records the snow load a builder expected and nothing else. A student proposes to apply the method in the Sorval valley, where lake sediments show snowfall has been heavy and essentially unchanged since the year 1200, and to treat the steepest chapels there as the oldest. Ferraz answers that in Sorval a roof’s pitch ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'records the snow load a builder in the valley expected to meet.',
          B:'reflects the valley’s unchanging snow load, not a chapel’s age.',
          C:'grows steeper the older the chapel carrying it turns out to be.',
          D:'makes it impossible to date any Alpine chapel by any method.'
        },
        correct:'B',
        expCorrect:'Ferraz’s rule ties pitch to one input: the snow load a builder expected. In Sorval that input has not moved since 1200, so every builder across those centuries faced the same requirement and every roof answers it the same way. A variable that does not vary cannot separate an early chapel from a late one — the pitch is a reading of the valley’s snow, not of its calendar.',
        expWrong:{
          A:'True according to the text — it is Ferraz’s own rule, stated twice — but restating the rule does not answer what the rule yields in a valley where its single input is constant.',
          C:'This is the student’s assumption, and nothing supports it. Pitch tracks snow, and Sorval’s snow has been the same since 1200, so age and steepness have no reason to line up.',
          D:'Far more than Ferraz says. Her objection is to this method in this valley; documents, timber dating, and other methods are untouched by it.'
        },
        tip:'A method that reads one variable can only distinguish cases that differ in that variable. When a passage tells you the variable is constant across the cases, the method returns the same answer for all of them — which is not evidence, however precisely it is measured.'
      },
      {
        id:'INF-34', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
        skill:'Inferences (which of two joined conditions sets the joint count)',
        passage:"A city’s heat-warning system triggers only when a daytime high above 38 degrees Celsius is followed by a night that stays above 26, since epidemiologist Tarek Vanslembrouck has shown that harm accumulates when the body gets no cool hours in which to recover. Vanslembrouck reports that in this region a July night above 26 degrees has never once occurred except after a day above 38. The number of July days above 38 has roughly doubled since 1990; the number of July nights above 26 has risen more than fivefold. His figures indicate that the yearly count of July warnings should now be ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'more than five times what it was in 1990.',
          B:'about twice what it was in 1990, following the count of hot days.',
          C:'equal to the number of July days whose high passed 38 degrees.',
          D:'no different from 1990, since a warning still requires two conditions.'
        },
        correct:'A',
        expCorrect:'A warning needs a hot day followed by a hot night, and the text says a July night above 26 never occurs except after a day above 38. Every qualifying night therefore already sits on a qualifying day, so the number of warnings equals the number of nights above 26. That count has risen more than fivefold, so the warnings have risen by the same factor. Check: warnings = nights above 26, and nights above 26 are up more than 5× ✓.',
        expWrong:{
          B:'It follows the wrong count. Hot days are the doubling figure, but a hot day with no hot night after it triggers nothing; the binding condition is the night, and nights are up more than fivefold.',
          C:'This drops half of the rule. Days above 38 are far more numerous than warning days, since most of them are not followed by a night above 26.',
          D:'The rule is unchanged; the weather is not. A fixed two-condition test applied to a climate where both conditions occur more often returns more hits, not the same number.'
        },
        tip:'When two conditions must occur together, work out how they are linked before counting. If the passage says one never happens without the other, the rarer condition sets the joint count — so track the rarer one, not the more dramatic one.'
      }

    ]
  });
})();
