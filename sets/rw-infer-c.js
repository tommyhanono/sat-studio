/* SAT Studio question set — Reading & Writing: Inferences III (IFC-01 to IFC-34) */
/* Tercera tanda de la destreza oficial "Inferences" (Information and Ideas).
   Misma forma que rw-infer-a y rw-infer-b: pasaje corto que termina en blanco +
   "Which choice most logically completes the text?".
   ESTE set es la RAMPA DE ENTRADA: el paso logico es de un solo eslabon y esta a
   la vista (14 Facil / 16 Media / 4 Dificil, ninguna extreme).
   Campos NUEVOS, que ni A ni B tocaron: agricultura, navegacion, meteorologia,
   geologia, veterinaria, urbanismo, educacion, nutricion, optica y acustica.
   Los tres distractores de cada pregunta son razonables en el mundo real pero el
   texto no los sostiene: uno va demasiado lejos ("todos", "nunca", "jamas"),
   otro invierte la direccion de la relacion, y el tercero es verdadero segun el
   texto pero no cierra la logica de la ultima oracion. En las preguntas con
   numeros, el lugar del "demasiado lejos" lo ocupa un error de cuenta con nombre
   (usar el total bruto en vez del neto, contar un solo duplicado, etc.).
   OJO con el clasificador de destrezas: el campo `skill` y los primeros 160
   caracteres del `stem` no pueden decir evidence / detail / central / main idea
   / summar / graph / table / chart / figure, o la pregunta se va a otra
   destreza. Aca todas tienen que caer en "Inferences". */
(function(){
  window.SAT_SETS.push({
    id: 'rw-infer-c',
    title: 'Inferences — Logical Completion III',
    section: 'rw',
    level: 'Fácil',
    description: 'The on-ramp for Information and Ideas inferences: thirty-four passages that end in a blank, each turning on a single visible step, across farming, sailing, weather, rocks, animal care, cities, schools, food, light, and sound.',
    minutes: 40,
    questions: [

      /* ====== RAMPA: una regla y un caso que la cumple o no (IFC-01 a IFC-14) ====== */
      {
        id:'IFC-01', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a threshold the record never reaches)',
        passage:"The cover crop sunn hemp germinates only where soil at planting depth holds at least twelve degrees Celsius for five days running. At the Redwater research farm, probes buried at planting depth logged the soil temperature every hour through April. The warmest reading of the whole month was nine degrees, on the last afternoon. Agronomist Petra Vogel concludes that seed sown at Redwater during April ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'was watched by probes buried at the depth where the seed is sown.',
          B:'germinates faster the colder the soil around the seed stays.',
          C:'could not have germinated: the soil never reached twelve degrees.',
          D:'shows that no cover crop can be established anywhere before May.'
        },
        correct:'C',
        expCorrect:'The text states a requirement — twelve degrees for five days running — and then reports every hour of April. The highest reading all month was nine. Nine is under twelve, so the requirement was not met on a single day, let alone five in a row. Seed sown in April therefore had no chance to germinate.',
        expWrong:{
          A:'True according to the text, and it is how the reading was obtained. Describing the instrument is not a conclusion about the seed, which is what the last sentence is reaching for.',
          B:'This runs the relation backward. The passage sets a minimum temperature for germination, so colder soil works against the seed rather than for it.',
          D:'One farm in one April cannot settle what happens on other farms with other crops. The text is about sunn hemp at Redwater and says nothing about cover crops in general.'
        },
        tip:'When a text gives a numeric requirement and then gives the record, put the two side by side before reading the options. The guaranteed inference is about the case in front of you, never about every case of that kind.'
      },
      {
        id:'IFC-02', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a correction the navigator never applies)',
        passage:"A magnetic compass points to magnetic north, not to true north, and the gap between the two — the variation — differs from place to place and is printed on every chart. Off Cape Wilmot the chart gives a variation of fourteen degrees west. Navigator Joel Arkwright steers a compass course of ninety degrees there and applies no correction at all. The track he makes over the ground will therefore ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'lie fourteen degrees away from the true course he meant to steer.',
          B:'cross a stretch of water whose charted variation is fourteen west.',
          C:'close the gap between magnetic north and true north as he sails.',
          D:'show that a compass is useless wherever a chart prints a variation.'
        },
        correct:'A',
        expCorrect:'The passage says magnetic north and true north differ by the charted variation, fourteen degrees off Cape Wilmot. Arkwright steers by the compass and never applies that correction, so the difference the chart warns about passes straight into his track: he ends up fourteen degrees off the true course he intended.',
        expWrong:{
          B:'True according to the text — it is the fact the chart supplies — but repeating where he is sailing does not say what his uncorrected steering produces.',
          C:'Nothing a helmsman does changes where magnetic north sits. Steering without the correction carries the gap into the track instead of closing it.',
          D:'Variation is printed precisely so that it can be applied. A tool that needs a correction and does not get one has been used wrongly; that is not the same as being useless.'
        },
        tip:'When a passage names a known offset and then says nobody applied it, the offset does not disappear — it shows up in the result at full size. Look for the option that carries the same number into the outcome.'
      },
      {
        id:'IFC-03', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (two conditions the night rules out)',
        passage:"Radiation frost forms when the ground gives up its heat to a clear sky and the air near the surface sits still long enough to chill. Cloud blocks that loss of heat, and wind above roughly ten kilometers per hour keeps mixing warmer air back down to the ground. On the night of the fifth, the station at Innes Ridge recorded unbroken cloud and a steady wind of twenty-six kilometers per hour. Whatever else happened that night, ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'the station recorded a steady wind of twenty-six kilometers per hour.',
          B:'cloud and wind together made radiation frost likelier, not rarer.',
          C:'no frost of any kind can form under a sky that stays cloudy over.',
          D:'conditions ruled out radiation frost forming at the Innes Ridge station.'
        },
        correct:'D',
        expCorrect:'Radiation frost needs two things: a clear sky and still air. The station reported the opposite of both, unbroken cloud and a wind well above the ten kilometers per hour that keeps the surface mixed. With neither condition met, that kind of frost could not form there that night.',
        expWrong:{
          A:'True according to the text, and half of the reason the answer works. On its own it is a reading from a log, not the conclusion the two readings force together.',
          B:'The passage lists cloud and wind as the two things that prevent radiation frost. Naming them as causes of it reverses what the first two sentences set up.',
          C:'The text rules out one named mechanism, radiation frost, under these conditions. Frost can arrive other ways, and the passage never claims a cloudy sky stops all of them.'
        },
        tip:'When a passage says a process needs condition one and condition two, knocking out either one is enough. Do not stretch that into a claim about every related process the text never mentioned.'
      },
      {
        id:'IFC-04', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a value bracketed by two scratch tests)',
        passage:"On the Mohs scale a mineral can scratch another only when it is the harder of the two. Testing an unlabeled specimen from an old teaching collection, geologist Nuru Abebe found that it left a scratch on quartz, which stands at seven, and that topaz, at eight, left a scratch on it. Nothing else about the specimen was written down. From the two scratch tests alone, the specimen ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'is softer than quartz, the mineral that defines seven on the scale.',
          B:'falls above quartz and below topaz in hardness on the Mohs scale.',
          C:'came out of a teaching collection whose labels had been lost.',
          D:'must be the hardest mineral anywhere in the collection it came from.'
        },
        correct:'B',
        expCorrect:'Scratching means harder. The specimen scratched quartz, so it is harder than seven. Topaz scratched the specimen, so eight is harder than the specimen. Put the two results together and the hardness is pinned between the two standards: above quartz, below topaz.',
        expWrong:{
          A:'This reads the first test backward. The specimen scratched the quartz, and only the harder mineral leaves the scratch, so it sits above quartz rather than below it.',
          C:'True according to the text, and it explains why the tests were run at all. Where the specimen came from says nothing about how hard it turned out to be.',
          D:'Two tests against two standards cannot rank a specimen against minerals nobody tested. The collection may hold something harder that was never brought near it.'
        },
        tip:'Two tests that point opposite ways do not cancel — they bracket. When one result puts a value above a mark and another puts it below a second mark, the answer is the range between them, not either mark.'
      },
      {
        id:'IFC-05', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a license limit and the patient in front of it)',
        passage:"The antiparasitic tablet sold as Vermalux is licensed only for dogs over twenty kilograms, because the smallest tablet made cannot be split finely enough to dose a lighter animal safely. A clinic in Coldbrook is treating a terrier that weighs six kilograms and carries the very parasite Vermalux is meant to clear. Whatever the clinic decides to do for the terrier, the licensing rule means that ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'Vermalux is not a licensed option for a dog of that weight.',
          B:'a lighter dog can be dosed more precisely than a heavier one.',
          C:'no treatment at all exists for parasites in small terriers.',
          D:'the terrier is carrying the parasite Vermalux was made to clear.'
        },
        correct:'A',
        expCorrect:'The license draws a line at twenty kilograms and gives the reason: below that weight the tablet cannot be divided accurately. The terrier weighs six. Six is under twenty, so this patient sits on the wrong side of the line and the drug is not a licensed choice for her.',
        expWrong:{
          B:'The passage says the opposite. A small dog is the hard one to dose, since the tablet cannot be cut finely enough to match a light animal.',
          C:'The text limits one named product, not the whole shelf. Other drugs, other formulations, and a compounding pharmacy are all untouched by what it says.',
          D:'True according to the text, and it is why the drug came up in the first place. Having the parasite does not answer whether this particular tablet may be used.'
        },
        tip:'A rule with a stated cutoff answers exactly one question: which side of the cutoff is this case on? Anything about what else might be done is outside what the rule licenses you to conclude.'
      },
      {
        id:'IFC-06', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a rule measured along the route, not the straight line)',
        passage:"The city counts a household as transit served when a bus stop lies within four hundred meters along a walkable route, measured on sidewalks and crossings rather than in a straight line. Houses on the north side of Fern Hollow sit two hundred meters from a stop as the crow flies, but the freight line between them has no crossing for nine hundred meters in either direction. Under the city definition, those houses ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'sit two hundred meters from the nearest stop in a straight line.',
          B:'are not transit served, since the walkable route is far longer.',
          C:'count as transit served, the stop being within four hundred meters.',
          D:'can never be reached by transit while the freight line stands there.'
        },
        correct:'B',
        expCorrect:'The definition measures along sidewalks and crossings, not across the ground. The nearest crossing is nine hundred meters away, so a walker has to go out and back around it: the route is well over four hundred meters even though the stop is two hundred meters off in a straight line. By the rule as written, these houses fall outside.',
        expWrong:{
          A:'True according to the text, and it is the number that makes the question interesting. The city rule explicitly refuses to use the straight-line distance, so quoting it cannot settle the classification.',
          C:'This applies the four hundred meters to the wrong measurement. The two hundred meters is the crow-flies distance, which the definition sets aside.',
          D:'The text describes today’s crossings, not a permanent condition. A new footbridge or level crossing would change the walkable route without moving the freight line.'
        },
        tip:'When a definition says which measurement counts, use that one and ignore the other number the passage offers. The second number is almost always there to be picked by mistake.'
      },
      {
        id:'IFC-07', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a share that lands under a stated minimum)',
        passage:"At Harbourview Academy a student may sit the end-of-term examination in a subject only after attending at least eighty percent of that subject’s sessions. The chemistry course ran sixty sessions this term. The register shows that Dario Lund was present for forty of them, and the registrar has confirmed that the register is complete for the term. On the rule as written, Lund ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'was present for forty of the sixty chemistry sessions this term.',
          B:'falls short of the attendance the chemistry examination requires.',
          C:'has to miss more sessions still to reach the eighty percent mark.',
          D:'is barred from sitting every examination the academy offers.'
        },
        correct:'B',
        expCorrect:'Eighty percent of sixty sessions is forty-eight. Lund attended forty, and the registrar says the register is complete, so forty is the final figure. Forty is below forty-eight, so he has not met the condition the rule sets for sitting the chemistry examination. Check: 0.80 × 60 = 48, and 40 &lt; 48 ✓.',
        expWrong:{
          A:'True according to the text — it is the raw count from the register — but a raw count is not yet a comparison with the eighty percent the rule demands.',
          C:'Missing more sessions moves him further from the requirement, not toward it. Attendance rises by being present, so the arrow in this option points the wrong way.',
          D:'The rule is applied subject by subject: it is that subject’s sessions that count. His chemistry attendance says nothing about the courses where he may have been present throughout.'
        },
        tip:'Turn the percentage into a count of the same thing the passage counts before you compare. Eighty percent of sixty is a number of sessions, and a number of sessions is what the register gives you.'
      },
      {
        id:'IFC-08', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (heat applied to something that heat destroys)',
        passage:"Ascorbic acid, the form of vitamin C in most vegetables, breaks down steadily once food is held above seventy degrees Celsius, and the longer the heating runs the less of it survives. A cannery prepares its vegetable soup by holding the mixture at ninety-five degrees for forty minutes before sealing the cans. Dietitian Moira Stavros points out that, whatever the fresh vegetables contained, the canned soup ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'is held at ninety-five degrees for forty minutes before sealing.',
          B:'picks up vitamin C over a long stretch of time above seventy.',
          C:'carries less vitamin C than the vegetables held before heating.',
          D:'has lost every trace of the vitamin C the vegetables started with.'
        },
        correct:'C',
        expCorrect:'The rule is that ascorbic acid breaks down above seventy degrees and that longer heating destroys more of it. The cannery holds the soup at ninety-five for forty minutes, well above the line and for a long time, so some of the vitamin C is gone by the time the can is sealed. Less than the vegetables held is exactly what follows.',
        expWrong:{
          A:'True according to the text, and it is the process the conclusion rests on. Restating the method does not say what the method does to the vitamin.',
          B:'Heat is described as destroying ascorbic acid. Time spent above seventy degrees subtracts from what is there rather than adding to it.',
          D:'"Steadily" is not "completely". The passage describes a loss that grows with time, which leaves some of the vitamin behind; wiping it out entirely goes past what the text supports.'
        },
        tip:'Watch the difference between a process that reduces something and one that removes it. A text that says a quantity falls licenses "less", never "none", unless it names a point where nothing is left.'
      },
      {
        id:'IFC-09', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a defect that one design removes and the other keeps)',
        passage:"A simple lens bends blue light a little more sharply than red, so the two colors come to a focus at slightly different distances and every bright edge in the image picks up a colored fringe. An achromatic doublet, two glasses cemented together, brings blue and red to the same focus and leaves no fringe at all. Every photograph taken through the telescope at Marlow Observatory shows colored fringes on bright stars. That telescope’s objective is therefore ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'an achromatic doublet, since the fringes are what a doublet leaves.',
          B:'used for all the photographs the observatory takes of bright stars.',
          C:'proof that no telescope lens can bring every color to one focus.',
          D:'a simple lens rather than the cemented doublet that kills fringes.'
        },
        correct:'D',
        expCorrect:'The passage sorts the two designs by one visible mark: a simple lens leaves colored fringes, a doublet leaves none. The Marlow photographs show fringes on every bright star. Fringes are the signature of the simple lens, so that is what the objective must be.',
        expWrong:{
          A:'This swaps the two signatures. The text says a doublet leaves no fringe, so fringes are evidence against a doublet rather than for one.',
          B:'True according to the text, and it is why the fringes count as a pattern rather than a fluke. It still describes the pictures instead of identifying the lens.',
          C:'The passage names a lens that does bring blue and red together. It describes a defect one design has and another does not, not a limit on all optics.'
        },
        tip:'When two designs are told apart by one observable mark, the observation points to exactly one of them. Read the marks carefully so you do not attach the signature to the wrong design.'
      },
      {
        id:'IFC-10', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a room with nothing in it to absorb sound)',
        passage:"Sound in a room keeps bouncing until the surfaces absorb it, and the time it takes to fade away is the reverberation time. Carpet, curtains, and upholstered seats absorb a great deal; bare concrete and glass absorb almost none, so the reverberation runs long and each syllable of speech overlaps the one behind it. The new community hall at Pelham has concrete walls, a concrete floor, and a glass end wall, with nothing soft anywhere inside. Speech in that hall will therefore ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'be hard to follow, since each syllable smears into the next one.',
          B:'fade sooner than it would in a room lined with carpet and curtains.',
          C:'come back off concrete walls, a concrete floor, and a glass wall.',
          D:'be impossible to make out for anyone seated anywhere in the hall.'
        },
        correct:'A',
        expCorrect:'The text ties the hard surfaces to a long reverberation, and the long reverberation to syllables overlapping. Pelham has hard surfaces on every side and nothing soft to absorb anything, so it sits at the far end of that chain: long reverberation, overlapping syllables, speech that is hard to follow.',
        expWrong:{
          B:'This runs the chain backward. Carpet and curtains are the absorbers, so a room lined with them is where sound fades sooner, not where it lingers.',
          C:'True according to the text, and it is the reason the reverberation is long. Naming the surfaces stops one link short of what those surfaces do to speech.',
          D:'Difficult is not impossible, and the passage never says a seat exists where nothing can be understood. A listener close to the speaker hears mostly direct sound.'
        },
        tip:'A passage that builds a chain — hard surfaces, long reverberation, overlapping syllables — is asking you to walk to the end of it. Stopping at the first link, or overshooting past the last one, are the two ways to miss.'
      },
      {
        id:'IFC-11', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a foraging range shorter than the distance)',
        passage:"The mason bee Osmia fulva forages within about two kilometers of its nest and, unlike a honeybee, will not travel farther even when the flowers nearer home run out. A fruit grower in the Larkin valley keeps all of her mason bee nests along the eastern boundary of the farm. The orchard block she planted last winter lies five kilometers west of that boundary, and no other nests exist on the property. Her mason bees ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'are kept in nests placed along the eastern boundary of the farm.',
          B:'will fly on westward once the flowers near their nests run out.',
          C:'cannot be the ones pollinating the block she planted last winter.',
          D:'leave every orchard in the valley without an insect to pollinate it.'
        },
        correct:'C',
        expCorrect:'The bees work within two kilometers and, the text stresses, will not go farther even under pressure. Every nest is on the eastern boundary and the new block is five kilometers west of it. Five is more than two, so the block sits outside the range of the only mason bees on the property.',
        expWrong:{
          A:'True according to the text, and it is where the distance is measured from. Locating the nests is one of the two facts, not the conclusion they produce together.',
          B:'The passage rules this out in the first sentence: unlike a honeybee, this species does not extend its range when the nearby flowers are gone.',
          D:'The text covers one farm and one species. Other orchards have their own bees, and other pollinators work the valley regardless of where these nests sit.'
        },
        tip:'When a text names a limit and then says the limit holds even under pressure, treat it as hard. The inference is about what falls outside it — not about everything else in the neighborhood.'
      },
      {
        id:'IFC-12', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a depth smaller than what the vessel needs)',
        passage:"Charted depth over the Slaney bar is given for the lowest tide expected, and the real depth at any moment is that figure plus the height of tide. At low water the charted depth over the bar is two point eight meters. The coaster Ardent draws three point four meters, and her master, Ines Quiroga, wants half a meter of water under the keel before she will cross. Until the tide rises, the Ardent ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'draws three point four meters and wants half a meter of clearance.',
          B:'finds deeper water over the bar the lower the tide happens to fall.',
          C:'is shut out of the Slaney whatever the tide happens to do later.',
          D:'has less water over the bar than her own draft alone requires.'
        },
        correct:'D',
        expCorrect:'At low water the depth is the charted two point eight meters, since the height of tide adds nothing then. The Ardent draws three point four. Three point four is more than two point eight, so the hull needs more water than the bar holds — before anyone even counts the half meter of clearance her master wants. Check: 3.4 &gt; 2.8 ✓.',
        expWrong:{
          A:'True according to the text, and it supplies the number that loses the comparison. On its own it states the ship’s requirement without setting it against the depth available.',
          B:'The passage says the real depth is the charted figure plus the height of tide, so a lower tide means less water over the bar, not more.',
          C:'The first sentence says the opposite: depth rises with the tide. "Until the tide rises" is the whole point, and a rising tide is exactly what would let her in.'
        },
        tip:'When a passage says a total is a base plus a variable part, work out the base case first. At the low point the variable contributes nothing, so the comparison reduces to the two fixed numbers.'
      },
      {
        id:'IFC-13', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a count that stops before the bottom)',
        passage:"In a lake fed by glacial meltwater, coarse pale sediment settles through the summer and fine dark sediment settles under the winter ice, so one pale band plus one dark band records a single year. A core lifted from Tarn Kettle preserves four thousand two hundred such pairs, unbroken from top to bottom. The core reaches the depth the drill was set for, but not the rock beneath the sediment. The core therefore records ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'at least four thousand two hundred years of sediment in that lake.',
          B:'four thousand two hundred pairs of pale and dark sediment bands.',
          C:'half a year for each pale and dark pair of bands it preserves.',
          D:'the whole history of the lake from its very first winter onward.'
        },
        correct:'A',
        expCorrect:'One pale band plus one dark band equals one year, and the core holds four thousand two hundred unbroken pairs, so the core spans four thousand two hundred years. Because the drill stopped in sediment rather than on rock, older layers may still lie below, which is why the count is a floor rather than a total.',
        expWrong:{
          B:'True according to the text — it is the raw count of couplets — but the passage asks what the core records in time, and the conversion from pairs to years is the step being skipped.',
          C:'This halves the rule instead of applying it. Each pair is one year; it is the single band, pale or dark, that stands for half of one.',
          D:'The core never reached rock, so sediment older than the deepest pair may still be sitting underneath. The earliest winters of the lake are exactly what the core cannot show.'
        },
        tip:'Notice where a record stops. A count taken from a sample that was cut off before the end gives a minimum, and "at least" is the word that keeps the inference honest.'
      },
      {
        id:'IFC-14', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
        skill:'Inferences (a condition that cancels an automatic renewal)',
        passage:"The lending system at Ostrander College renews a borrowed book automatically on its due date unless another reader has placed a hold on that title, in which case the renewal is refused and the book falls due. A student has kept a copy of an anatomy atlas since September, and the catalogue shows three holds placed on the title during October. When the due date arrives, the atlas ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'has been out on loan to one student since the start of September.',
          B:'will not renew, because holds now stand against that title.',
          C:'renews itself the more readily the more holds readers place.',
          D:'has to be returned late by everyone who borrows it in October.'
        },
        correct:'B',
        expCorrect:'Renewal happens automatically except in one case: a hold on the title. The catalogue shows three holds placed in October, so the exception applies squarely. When the due date comes, the renewal is refused and the atlas falls due.',
        expWrong:{
          A:'True according to the text, and it explains why a renewal is coming up at all. The length of the loan is not what the system checks; the holds are.',
          C:'The passage makes a hold the thing that blocks a renewal, so more holds make renewal less likely, not more. This option inverts the rule it claims to apply.',
          D:'The rule refuses a renewal; it does not make anyone late. A borrower who returns the atlas on its due date has followed the rule exactly.'
        },
        tip:'An "unless" clause names the one condition that overrides the default. Check whether the passage says that condition is present; if it is, the default never gets to apply.'
      },

      /* ====== UN ESLABON Y MEDIO: dos hechos que hay que juntar (IFC-15 a IFC-30) ====== */
      {
        id:'IFC-15', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a beam that passes above what it is meant to see)',
        passage:"A weather radar sends its beam out almost level, but the earth curves away beneath it, so the farther the beam travels the higher above the ground it rides. At the radar on Kell Point the beam passes two and a half kilometers above ground level once it is two hundred kilometers out. Shallow rain showers in that region rarely build higher than one and a half kilometers. Forecaster Nils Ardren notes that showers of that kind, two hundred kilometers out, ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'rarely build higher than one and a half kilometers off the ground.',
          B:'stand out more strongly on the radar the farther out they occur.',
          C:'pass beneath the beam and leave no return on the Kell Point radar.',
          D:'are missed by every radar in service, at any range whatsoever.'
        },
        correct:'C',
        expCorrect:'Two facts have to be put together. At two hundred kilometers the beam is two and a half kilometers up, and these showers top out at one and a half. The shower ceiling is a full kilometer below the beam, so the beam sweeps over empty air and the radar sees nothing where a shower is falling.',
        expWrong:{
          A:'True according to the text, and it is one of the two numbers the answer needs. Alone it says how tall the showers are without comparing that to where the beam is.',
          B:'The passage has the beam climbing with range, which moves it away from low showers. Distance makes shallow rain harder to detect here, not easier.',
          D:'The blind spot described belongs to one radar at one range. Closer to Kell Point the beam is lower, and another radar sited elsewhere would see these showers from nearby.'
        },
        tip:'When a passage gives you two heights, subtract before you look at the options. The answer usually lives in the comparison, not in either number on its own.'
      },
      {
        id:'IFC-16', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a waiting period and the next scheduled pickup)',
        passage:"Milk from a cow treated with the antibiotic Curalin has to be kept out of the bulk tank for ninety-six hours after her last dose, because traces stay in the milk until then. A dairy in Whitmoor gives a cow her last dose at six in the morning on a Monday. The tanker calls at the farm every day at four in the afternoon. The first collection that may legally carry this cow’s milk is the one on ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'Monday, since the tanker calls after the last dose was given.',
          B:'Thursday, the fourth afternoon after the morning she was dosed.',
          C:'Saturday, because milk is never shipped on the day it clears.',
          D:'Friday, the first collection later than the ninety-six hours.'
        },
        correct:'D',
        expCorrect:'Ninety-six hours is four days. Counting from Monday at six in the morning, the milk clears on Friday at six in the morning. The tanker calls at four in the afternoon, so Thursday’s call comes at eighty-two hours, still inside the period, and Friday’s call at one hundred six hours is the first one past it. Check: Mon 06:00 + 96 h = Fri 06:00, and Fri 16:00 &gt; Fri 06:00 ✓.',
        expWrong:{
          A:'Monday’s tanker calls ten hours after the dose, nowhere near ninety-six. That the collection comes after the dose is not the same as coming after the waiting period.',
          B:'Thursday at four in the afternoon is eighty-two hours from Monday at six in the morning, fourteen hours short. Counting four afternoons ignores that the clock started in the morning.',
          C:'The passage sets one condition, that ninety-six hours have passed. It never says a clearing day is skipped, so pushing the answer to Saturday adds a rule that is not there.'
        },
        tip:'Convert a waiting period into a clock time first, then find the first scheduled event after it. Counting days on a calendar drops the hours, and the hours are usually where the trap is.'
      },
      {
        id:'IFC-17', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a requirement that turns area into a cap)',
        passage:"The zoning code of Averly requires two off-street parking spaces for every dwelling built, and a surface space with its share of the aisle takes thirty square meters. A developer holds a lot of three thousand square meters and has to leave twelve hundred square meters for the building footprint and yards, which leaves eighteen hundred for parking. Under the code as written, the number of dwellings this lot can hold is ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'capped at thirty, the number the parking requirement leaves room for.',
          B:'capped at sixty, one dwelling for every space that fits on the lot.',
          C:'larger than it would be if the code asked for no parking at all.',
          D:'fixed at the twelve hundred square meters of footprint and yards.'
        },
        correct:'A',
        expCorrect:'Eighteen hundred square meters of parking at thirty square meters per space gives sixty spaces. The code demands two spaces per dwelling, so sixty spaces support thirty dwellings. Check: 1,800 ÷ 30 = 60 spaces, and 60 ÷ 2 = 30 dwellings ✓.',
        expWrong:{
          B:'Sixty is the number of parking spaces, not of dwellings. Stopping there skips the last step, which is dividing by the two spaces each dwelling has to have.',
          C:'A requirement to build parking consumes land that could have held dwellings, so dropping it would raise the cap. This option has the effect pointing the wrong way.',
          D:'Twelve hundred square meters is the land set aside for footprint and yards, which is true according to the text but is an area, not a count of dwellings.'
        },
        tip:'When a rule ties one thing to another by a fixed ratio, finish the conversion. An answer that stops at the intermediate quantity is the single most common way to miss a question like this.'
      },
      {
        id:'IFC-18', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (two opposite effects, only one of them present)',
        passage:"Iron from plants crosses the gut wall far less readily than iron from meat, and two things at the table change how much gets through: vitamin C eaten in the same meal raises the share absorbed, while the polyphenols in tea lower it. A cafeteria serves a lentil stew that is high in iron on paper, alongside strong tea, with no fruit or vegetable carrying vitamin C anywhere on the tray. The iron the diners actually take up from that meal ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'comes from a lentil stew the menu lists as high in iron.',
          B:'climbs above that figure because of the tea served alongside.',
          C:'is nothing at all, since no vitamin C is served with the stew.',
          D:'falls below what the iron content on paper would suggest.'
        },
        correct:'D',
        expCorrect:'The passage names one helper and one blocker. The helper, vitamin C, is absent from the tray; the blocker, tea, is present and strong. With nothing pushing absorption up and something pushing it down, the iron that actually crosses the gut wall comes out under the figure printed for the stew.',
        expWrong:{
          A:'True according to the text, and it is the number the comparison starts from. The question is what happens to that number at the table, which this option never reaches.',
          B:'Tea is listed as the thing that lowers absorption. Treating it as the reason the figure climbs reverses the role the passage gives it.',
          C:'Vitamin C is described as raising the share absorbed, not as a requirement for absorbing anything. Plant iron is absorbed poorly without it, not zero.'
        },
        tip:'When a text names one factor that helps and one that hurts, check which of them the situation actually contains. With only the blocker present, the direction is settled even though the size of the effect is not.'
      },
      {
        id:'IFC-19', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a filter matched to the wrong kind of reflection)',
        passage:"Light reflected off a horizontal surface such as water or wet asphalt comes back mostly polarized in the horizontal direction, and a filter that passes only vertical vibrations cuts most of it away. Light reflected off bare metal keeps no preferred direction at all, so the same filter removes only about half of it, the same share it takes from any ordinary light. A driver complains of glare from the chromed trim of the car ahead. A polarizing filter in that case ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'cuts most of the glare that bounces off water or wet asphalt.',
          B:'wipes the glare off metal more completely than off wet asphalt.',
          C:'will dim that trim no more than it dims the rest of the view.',
          D:'is of no use to a driver under any conditions on any road.'
        },
        correct:'C',
        expCorrect:'The filter works by rejecting one direction of vibration, which only helps when the glare is polarized in that direction. Chrome returns light with no preferred direction, so the filter takes about half of it — the same half it takes from everything else in the scene. Relative to the rest of the view, the trim gets no darker.',
        expWrong:{
          A:'True according to the text, and it is the case where the filter shines. The driver is looking at chromed metal, not at water, so this describes the wrong reflection.',
          B:'The passage says metal is the hard case and a horizontal wet surface is the easy one. This option swaps the two.',
          D:'The first sentence gives the conditions where the filter works very well. It fails for this one reflection, which is a limit rather than a verdict on the tool.'
        },
        tip:'A tool that works by exploiting a property is useless when the property is absent. Ask what the passage says the tool keys on, then check whether the case in front of you has it.'
      },
      {
        id:'IFC-20', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a level that drops a fixed amount per doubling)',
        passage:"In the open, with no surface nearby to reflect sound back, the level from a small source falls six decibels every time the distance from it doubles. A pump on an open site measures eighty-five decibels at ten meters. The nearest house stands eighty meters away across flat, open ground, and the night limit at the property line is seventy decibels. Measured at that house, the pump ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'reads eighty-five decibels, the figure recorded at ten meters.',
          B:'reads sixty-seven decibels, three decibels under the night limit.',
          C:'reads seventy-nine decibels, six below the ten-meter reading.',
          D:'sits above the limit, eighty meters being a short distance.'
        },
        correct:'B',
        expCorrect:'From ten meters to eighty is three doublings: ten to twenty, twenty to forty, forty to eighty. Each one costs six decibels, so the drop is eighteen. Eighty-five minus eighteen is sixty-seven, which is three under the seventy-decibel limit. Check: 10 × 2 × 2 × 2 = 80, and 85 − 18 = 67 ✓.',
        expWrong:{
          A:'Eighty-five is the reading at ten meters, which is true according to the text but is the value before any distance has been covered.',
          C:'Seventy-nine counts one doubling instead of three. Ten to eighty is eight times the distance, and eight is two doubled three times, not once.',
          D:'This skips the arithmetic and guesses from the size of the number. Run the three doublings and the level lands under the limit rather than over it.'
        },
        tip:'For a quantity that changes per doubling, count how many doublings separate the two distances instead of comparing the distances directly. Eight times the distance is three doublings, sixteen times is four.'
      },
      {
        id:'IFC-21', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a delivery rate applied to an allowance)',
        passage:"A crop of paprika needs three hundred fifty millimeters of water delivered to its root zone over the season. Under the sprinklers at Kessler Farm, seventy percent of the water pumped reaches the root zone and the rest evaporates or drifts off on the wind. The farm’s water right allows it to pump four hundred millimeters over the season and not a drop more. Without a change of method, the paprika at Kessler Farm ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'cannot get its full requirement out of the water the right allows.',
          B:'receives the seventy percent that the sprinklers manage to deliver.',
          C:'would need less pumped than a crop watered drop by drop does.',
          D:'is certain to fail unless the farm is granted a larger water right.'
        },
        correct:'A',
        expCorrect:'Only seventy percent of what is pumped arrives, so reaching three hundred fifty millimeters at the root zone takes three hundred fifty divided by zero point seven, which is five hundred millimeters pumped. The water right caps pumping at four hundred. Five hundred is more than four hundred, so the requirement cannot be met this way. Check: 350 ÷ 0.70 = 500, and 500 &gt; 400 ✓.',
        expWrong:{
          B:'True according to the text — seventy percent is what the sprinklers deliver — but the sentence is building toward whether the crop gets what it needs, not toward the efficiency figure itself.',
          C:'Sprinklers lose thirty percent to the air while drip irrigation puts water at the root. The wasteful method needs more pumped, not less.',
          D:'A shortfall of water is not the same as a failed crop, and the passage never says a larger right is the only remedy. Drip lines, mulch, or a smaller planting all change the arithmetic.'
        },
        tip:'When only part of an input arrives, divide the target by that share rather than multiplying it. Seventy percent efficiency means you must start with more, and dividing by 0.7 is what "more" looks like.'
      },
      {
        id:'IFC-22', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a solution with one unknown too many)',
        passage:"A satellite receiver needs signals from four satellites to solve for latitude, longitude, and height all at once. With only three in view it can still return a latitude and a longitude, but only by assuming a height instead of measuring one. A survey team working at the bottom of a steep gorge finds that the rock walls leave just three satellites visible at any moment. The positions the team records down in the gorge ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'carry a height the receiver assumed rather than one it measured.',
          B:'come from the three satellites the gorge walls leave in view.',
          C:'would need fewer satellites if the team also wanted a height.',
          D:'are worthless for any survey until a fourth comes into view.'
        },
        correct:'A',
        expCorrect:'Four satellites buy three measured quantities; three satellites buy two, and the third has to be assumed. The gorge leaves three in view, so the receiver still prints a latitude and longitude but the height attached to them was put in by assumption rather than read off the sky.',
        expWrong:{
          B:'True according to the text, and it is the constraint that drives everything. Counting the satellites does not say what the shortage costs the recorded position.',
          C:'The passage has it the other way: solving for height as well is what raises the requirement from three satellites to four.',
          D:'The text says a latitude and longitude still come out. A position with an assumed height is limited, not useless, and plenty of survey work needs only the horizontal pair.'
        },
        tip:'Count unknowns against independent measurements. When the passage says one more measurement buys one more unknown, a shortage of one means exactly one quantity is being supplied some other way.'
      },
      {
        id:'IFC-23', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a range that pins the age and a date that does not)',
        passage:"The brachiopod Ravenia scuta is found in rocks from four hundred twenty million years ago down to four hundred fifteen million, and never outside that window. A shale bed at Cairn Fell is packed with the species. A sheet of lava cuts across the shale, and so must be younger than it, and that lava has been dated at four hundred five million years. From these facts the shale at Cairn Fell ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'is cut across by a lava sheet dated at four hundred five million.',
          B:'dates to four hundred five million years, the age the lava returned.',
          C:'formed between four hundred twenty and four hundred fifteen million.',
          D:'is younger than the lava sheet that cuts across it at Cairn Fell.'
        },
        correct:'C',
        expCorrect:'The brachiopod exists only between four hundred twenty and four hundred fifteen million years ago, and the shale is packed with it, so the shale formed inside that window. The lava adds a second constraint — the shale is older than four hundred five million — but that is already satisfied by the window and does not narrow it.',
        expWrong:{
          A:'True according to the text, and it is the relationship that makes the lava date usable at all. The relationship is not itself an age for the shale.',
          B:'Four hundred five million is the age of the lava, which formed after the shale. Reading the intruding rock’s date as the host rock’s date confuses the two.',
          D:'A sheet that cuts across a bed has to be younger than the bed, which the passage states outright. This option flips the order the text gives.'
        },
        tip:'When two facts constrain the same unknown, apply both and keep the narrower result. A constraint that is already satisfied by the other one adds nothing, and its number is there to be grabbed by mistake.'
      },
      {
        id:'IFC-24', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a difference that predates the program)',
        passage:"An after-school reading program at Duncombe was open to any student who signed up, and ninety students did. On the year-end tests those ninety had gained more reading months than the students who never signed up. The school also keeps records showing that students who sign up for optional activities were already reading above their year group before the program began. Taken together, the two records mean the year-end gap ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'separates the ninety who signed up from the students who did not.',
          B:'cannot be credited to the program rather than to who signed up.',
          C:'proves the program lifted the reading of every student who joined.',
          D:'came from the program, which then drew the stronger readers in.'
        },
        correct:'B',
        expCorrect:'Two things differ between the groups: one had the program, and one was already reading ahead before it started. Either could produce the year-end gap, and nothing in the records separates them. So the gap is consistent with the program working, with the head start alone, or with both — which is exactly why it cannot be credited to the program.',
        expWrong:{
          A:'True according to the text, and it is the observation being interpreted. Restating who the gap lies between skips the question of what produced it.',
          C:'The records cannot even establish that the program helped on average, so a claim about every single student who joined goes far past them.',
          D:'The order in the passage runs the other way: the stronger readers were already stronger before the program existed, so the program could not have drawn them in first.'
        },
        tip:'When people choose whether to join, the joiners usually differ from the others before anything happens. A later difference between self-selected groups cannot separate the treatment from the reason people chose it.'
      },
      {
        id:'IFC-25', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (an instrument that reads low by design)',
        passage:"A rain gauge catches less than the rain that actually falls when wind blows across its mouth, because the moving air carries drops past the opening instead of into it, and the stronger the wind the larger the shortfall. The gauge at Brant Tor stands on an unsheltered ridge where the wind blows hard in every month of the year. Last year it recorded six hundred twenty millimeters. The rain that fell at Brant Tor last year ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'came to more than the six hundred twenty millimeters recorded.',
          B:'was caught by a gauge standing on an unsheltered, windy ridge.',
          C:'came to less than the figure the exposed gauge managed to catch.',
          D:'can be recovered exactly by adding a fixed amount to the total.'
        },
        correct:'A',
        expCorrect:'The passage says a windy site makes a gauge undercatch, and Brant Tor is windy in every month of the year. So the gauge missed some rain in every month, and the true total has to sit above the six hundred twenty millimeters the instrument managed to collect.',
        expWrong:{
          B:'True according to the text, and it is the reason the reading is low. Describing where the gauge stands is not a statement about how much rain fell.',
          C:'Undercatch means the gauge collects less than fell, so the recorded figure is the floor. This option puts the true total on the wrong side of it.',
          D:'The shortfall is said to grow with wind speed, which varies from storm to storm. That rules out a single fixed correction and leaves only the direction of the error known.'
        },
        tip:'When an instrument is described as biased in a known direction, the reading becomes a bound rather than a value. You learn which way the truth lies, and usually nothing about how far.'
      },
      {
        id:'IFC-26', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a reader tuned to the wrong frequency)',
        passage:"Pet microchips are read by radio, and a scanner detects a chip only if the chip works on the frequency the scanner listens on. Chips sold across Europe work at one hundred thirty-four point two kilohertz; an older generation, still common in a few countries, works at one hundred twenty-five. The shelter at Oakhurst owns one scanner, and it listens only at one hundred twenty-five. A dog carrying a European chip, brought into that shelter, would ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'be carrying a chip that works at one hundred thirty-four point two.',
          B:'show up more readily on that scanner than an older chip would.',
          C:'prove that microchips cannot be relied on to reunite lost pets.',
          D:'be written down as carrying no chip the scanner was able to find.'
        },
        correct:'D',
        expCorrect:'A scanner finds a chip only at its own frequency. Oakhurst listens at one hundred twenty-five and the dog carries a chip working at one hundred thirty-four point two, so the scanner passes over a chipped dog without a signal — and what gets recorded is the absence the instrument reported, not the chip that is really there.',
        expWrong:{
          A:'True according to the text, and it is the fact that creates the mismatch. Naming the chip’s frequency stops short of saying what happens when it meets this scanner.',
          B:'The shelter’s scanner is tuned to the older frequency, so the older chip is the one it can read. This reverses which chip the scanner is matched to.',
          C:'The failure described belongs to one out-of-date scanner, not to microchips. A shelter with a dual-frequency reader would find this dog immediately.'
        },
        tip:'Keep "the instrument found nothing" apart from "there is nothing there". When a passage gives a reason the instrument could miss, the honest inference is about the record, not about the world.'
      },
      {
        id:'IFC-27', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a carrier the target group does not eat)',
        passage:"A national program adds folic acid to wheat flour at the country’s large mills, so the nutrient reaches anyone eating bread or pasta made from that flour. In the eastern districts, surveys of what people eat show that the staple starch is cassava, that wheat bread is eaten a few times a year at most, and that the little flour used there is ground at home. The program as designed ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'adds folic acid to the wheat flour milled at the country’s large mills.',
          B:'leaves the eastern districts largely outside the reach of the folic acid.',
          C:'delivers the most folic acid exactly where wheat is eaten the least.',
          D:'shows that fortifying a staple food cannot work in any country.'
        },
        correct:'B',
        expCorrect:'The folic acid travels in one vehicle: wheat flour from the large mills. In the eastern districts people eat cassava, buy wheat bread a few times a year, and grind at home what little flour they use. Almost nothing on their plates passes through the fortified stream, so the program as built barely reaches them.',
        expWrong:{
          A:'True according to the text — it is the mechanism the whole program rests on — but describing the mechanism is not the same as saying whom it misses.',
          C:'The nutrient rides in the wheat flour, so districts eating little wheat receive little of it. This option sends the folic acid to the place the passage says it cannot get.',
          D:'The program works wherever the fortified staple is actually eaten. The eastern districts show that the vehicle has to match local diets, not that fortification fails everywhere.'
        },
        tip:'A program that works through a carrier reaches only people who use the carrier. Check what the target population actually consumes before concluding anything about coverage.'
      },
      {
        id:'IFC-28', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a limit set by the air, not by the mirror)',
        passage:"The finest detail a telescope can show is set by the width of its mirror, but moving air above the site smears every image to about one arcsecond at the observatory on Corvo Hill, and no mirror can beat the blur the air imposes. The mirror already installed there resolves far finer than one arcsecond on paper. A proposal would replace it with a mirror twice as wide. Sited on Corvo Hill, that new mirror ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'would be smeared less by the moving air than the narrower one is.',
          B:'would gather its light through a mirror twice as wide as the old.',
          C:'would show no finer detail than the mirror already standing there.',
          D:'would be useless for every kind of observing done at the site.'
        },
        correct:'C',
        expCorrect:'The air sets a floor of about one arcsecond that no mirror can beat, and the existing mirror is already finer than that floor on paper. Detail on Corvo Hill is therefore limited by the atmosphere, not by the glass. Doubling the width improves the paper figure and leaves the binding limit exactly where it was.',
        expWrong:{
          A:'The blur comes from air the light passes through on its way in, and the passage says no mirror can beat it. Width does not buy a calmer sky.',
          B:'True according to the text, and it is what the proposal actually changes. A wider mirror is the input to the question, not the answer about what it would show.',
          D:'Only resolution is capped. A wider mirror still collects more light, which matters for faint objects, so "useless for every kind of observing" overshoots the text.'
        },
        tip:'When two limits act at once, the looser one is invisible and the tighter one decides everything. Improving the limit that was never binding changes the specification and not the result.'
      },
      {
        id:'IFC-29', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (a tone above one hearing range and inside another)',
        passage:"Hearing ranges differ sharply from species to species: most adults stop hearing tones above roughly sixteen kilohertz, dogs hear up to about forty-five, and rats to about seventy. A shop installs a deterrent that emits a loud continuous tone at twenty-two kilohertz to drive rats out of its storeroom. A customer arrives at the counter with a guide dog and is invited into the storeroom. Inside that room the tone ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'is plainly audible to the dog although the people hear nothing.',
          B:'runs continuously at twenty-two kilohertz to drive the rats out.',
          C:'reaches the people in the room but passes the dog unnoticed.',
          D:'damages the hearing of every animal that comes near the shop.'
        },
        correct:'A',
        expCorrect:'Twenty-two kilohertz sits above the sixteen where adult hearing stops, so the people notice nothing. It sits below the forty-five a dog can hear, so it lands inside the dog’s range. One tone, two species, two opposite outcomes — and the loud tone the shop chose for the rats is audible to the guide dog as well.',
        expWrong:{
          B:'True according to the text, and it is the specification of the device. Repeating what the deterrent emits does not say who in the room can hear it.',
          C:'The numbers go the other way. Twenty-two is above the adult limit of sixteen and below the dog limit of forty-five, so it is the people who hear nothing.',
          D:'Audible is not harmful, and the passage gives no threshold for damage. It also covers three species, not every animal that might walk past a shop.'
        },
        tip:'When a passage lists ranges for several species, place the single value inside each range separately. The same stimulus routinely lands inside one and outside another, and the answer is the contrast.'
      },
      {
        id:'IFC-30', type:'mc', domain:'Information and Ideas', difficulty:'Media',
        skill:'Inferences (two capacities compared lane for lane)',
        passage:"A single traffic lane in Corran can move at most eighteen hundred cars an hour past a given point, and the city’s counts put an average of one point two people in each car. The same lane given over to buses could take one bus every ninety seconds, and the buses the city runs seat sixty. Comparing the two uses of one lane at its busiest, the bus lane ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'would take one bus every ninety seconds past a given point.',
          B:'moves more people in an hour than the lane full of cars does.',
          C:'moves fewer people in an hour, carrying far fewer vehicles.',
          D:'would put an end to congestion on every street in Corran.'
        },
        correct:'B',
        expCorrect:'Cars: eighteen hundred an hour at one point two people each is two thousand one hundred sixty people. Buses: one every ninety seconds is forty an hour, at sixty seats each, which is two thousand four hundred people. Two thousand four hundred beats two thousand one hundred sixty. Check: 1,800 × 1.2 = 2,160 and 3,600 ÷ 90 = 40, 40 × 60 = 2,400 ✓.',
        expWrong:{
          A:'True according to the text, and it is one of the two numbers the comparison needs. A bus frequency on its own is not a count of people.',
          C:'This counts vehicles instead of people. Forty buses really are fewer than eighteen hundred cars, but each one carries fifty times as many riders, which is what the comparison is about.',
          D:'The arithmetic covers one lane at its busiest. What happens on the rest of the network, and at other hours, is nowhere in the passage.'
        },
        tip:'When two options are compared, convert both to the same unit before judging. Vehicles per hour and people per hour can rank in opposite orders, and the passage tells you which unit the comparison is in.'
      },

      /* ====== DOS PASOS CORTOS (IFC-31 a IFC-34) ====== */
      {
        id:'IFC-31', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (a requirement above even the record maximum)',
        passage:"A maize variety reaches maturity only after a season has delivered fourteen hundred growing degree days above a base of ten degrees Celsius; days whose mean temperature sits at or below ten add nothing at all to the total. Thirty years of records at Bellamy Flats give an average season total of eleven hundred fifty degree days, and the warmest season in the whole record reached twelve hundred forty. A grower at Bellamy Flats planting this variety ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'gains nothing from days whose mean sits at or below ten degrees.',
          B:'would have failed to mature it even in the warmest season recorded.',
          C:'needs a cooler season than the average one to reach fourteen hundred.',
          D:'could mature it by planting earlier in a season of average warmth.'
        },
        correct:'B',
        expCorrect:'The average of eleven hundred fifty is the easy comparison, but the record maximum is the one that settles it: even the best of thirty seasons delivered twelve hundred forty, and the variety needs fourteen hundred. The best case falls one hundred sixty degree days short, so no season in the record would have matured this maize. Check: 1,400 − 1,240 = 160 short ✓.',
        expWrong:{
          A:'True according to the text, and it is how the total is built. The rule for counting a day is not a verdict on whether the season total ever clears the requirement.',
          C:'Degree days accumulate above a base temperature, so a cooler season delivers fewer of them. Wanting a bigger total means wanting a warmer season, not a cooler one.',
          D:'Planting earlier lets a crop use more of the season, but the passage gives a total for the whole season and that total is still under fourteen hundred. A different start date cannot add degree days the year never had.'
        },
        tip:'When a passage gives you both an average and a record extreme, test the requirement against the extreme. If the best case in the record still falls short, the conclusion holds for every case in it.'
      },
      {
        id:'IFC-32', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (accumulated clock drift turned into distance)',
        passage:"Longitude at sea is found by comparing local noon against the time at the reference meridian, and four seconds of error in that reference clock shifts the result by one minute of arc, which on the equator is one nautical mile. The chronometer aboard the barque Solveig loses two seconds a day and was last set forty days ago. Sailing on the equator today, the position her master works out ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'rests on a chronometer last set a full forty days before today.',
          B:'grows more trustworthy the longer the chronometer runs unset.',
          C:'sits about twenty nautical miles from where the ship really is.',
          D:'sits about eighty miles off, a mile for every second it has lost.'
        },
        correct:'C',
        expCorrect:'Two steps. First the drift: two seconds a day for forty days is eighty seconds of accumulated error. Then the conversion: four seconds of clock error is worth one nautical mile on the equator, so eighty seconds is eighty divided by four, or twenty nautical miles. Check: 2 × 40 = 80 s, and 80 ÷ 4 = 20 nautical miles ✓.',
        expWrong:{
          A:'True according to the text, and it is the number the drift is multiplied by. On its own it gives the elapsed time without turning it into an error on the chart.',
          B:'A clock that loses two seconds every day falls further behind with each day that passes, so the longer it runs unset the worse the position gets.',
          D:'Eighty is the error in seconds, not in miles. The passage prices a mile at four seconds, so the eighty has to be divided by four before it becomes a distance.'
        },
        tip:'Accumulate the error first, then convert it once. Skipping the conversion or applying it to the daily rate instead of the running total are the two slips these questions are built to catch.'
      },
      {
        id:'IFC-33', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (a net loss measured against a stock)',
        passage:"Water leaves the Dowsett aquifer only through wells and returns to it only as rain soaking down through the sand above. Rain replaces twelve million cubic meters a year. The permits the district has issued allow fifteen million to be pumped, and every permit holder pumps the full amount allowed. The aquifer holds three hundred million cubic meters in storage today. If none of this changes, the stored water at Dowsett ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'falls by three million a year and lasts about a century.',
          B:'falls by fifteen million a year and is gone in twenty years.',
          C:'rises, since rain replaces water the wells cannot reach.',
          D:'amounts to three hundred million cubic meters in storage today.'
        },
        correct:'A',
        expCorrect:'Storage changes by what comes in minus what goes out: twelve million in, fifteen million out, so three million a year leaves the aquifer. Three hundred million divided by three million a year is one hundred years. Check: 15 − 12 = 3, and 300 ÷ 3 = 100 years ✓.',
        expWrong:{
          B:'Fifteen million is the gross pumping, not the net loss. Ignoring the twelve million of recharge shortens the life of the aquifer fivefold, to the twenty years this option names.',
          C:'Pumping takes more than rain puts back, so the balance is negative. Storage falls under these numbers rather than rising.',
          D:'True according to the text, and it is the stock the loss eats into. The sentence is asking what happens to that stock over time, not what it measures today.'
        },
        tip:'For anything with an inflow and an outflow, work with the net before dividing into the stock. The gross outflow is always the more dramatic number and always the wrong one.'
      },
      {
        id:'IFC-34', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferences (a gap the groups brought with them)',
        passage:"A district offered a free breakfast to any school that applied, and thirty-one schools took it up. On the district’s year-end tests those thirty-one scored below the schools that did not apply. The district also publishes the share of families in each catchment receiving income support: among the thirty-one it averages fifty-eight percent, against nineteen percent elsewhere, and that share has tracked test scores across the district for a decade. The year-end comparison therefore ______",
        stem:'Which choice most logically completes the text?',
        choices:{
          A:'puts the thirty-one applicant schools below the schools that did not.',
          B:'proves the breakfast cost those schools the points that separate them.',
          C:'shows that taking the breakfast raised the share of families on support.',
          D:'cannot show that the breakfast lowered the scores of those schools.'
        },
        correct:'D',
        expCorrect:'The schools that applied differ from the others in two ways at once: they got the breakfast, and their catchments are three times as likely to receive income support — a measure the district says has tracked scores for a decade. The lower scores are what that second difference alone would predict, so the comparison cannot pin them on the breakfast.',
        expWrong:{
          A:'True according to the text, and it is the observation under discussion. Restating which group scored lower is not a judgment about what the comparison can show.',
          B:'This takes the gap as proof of harm when a long-standing difference between the catchments predicts the same gap. A confounded comparison proves nothing in either direction.',
          C:'Income support in a catchment reflects the families living there, and the district has tracked it for ten years, long before the breakfast existed. The arrow cannot run from the program to the catchment.'
        },
        tip:'Before reading a difference as an effect, ask what else separates the groups. When a pre-existing difference predicts the same result, the honest conclusion is that the comparison settles nothing.'
      }

    ]
  });
})();
