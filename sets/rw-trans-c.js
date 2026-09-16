/* SAT Studio question set — Reading & Writing: Transitions — Set C (TRC-01 to TRC-34) */
/* 34 preguntas de la destreza oficial "Transitions" (Expression of Ideas).
   Este es el escalon de ENTRADA de la familia: rw-trans-a ya trae una sola
   opcion por familia con pasajes mas densos, y rw-trans-b enfrenta dos opciones
   de la misma familia. Aca la relacion entre las dos oraciones es nitida, hay
   UNA sola opcion de la familia correcta, y las otras tres vienen de familias
   claramente distintas: la respuesta nunca depende de matices entre sinonimos
   (nunca se enfrenta therefore contra thus, ni in other words contra that is).
   El reparto es 16 Facil / 16 Media / 2 Dificil, ninguna con extreme.
   Las siete relaciones quedan parejas: contraste 5, causa-efecto 5, suma 5,
   ejemplo 5, concesion 5, secuencia 5, reformulacion 4.
   Los dos errores que se castigan en cada pregunta son los de siempre: elegir
   contraste cuando la relacion es causa, y elegir suma cuando es ejemplo. */
window.SAT_SETS.push({
  id: 'rw-trans-c',
  title: 'Transitions — Set C',
  section: 'rw',
  level: 'Fácil',
  description: 'Thirty-four short passages in which one clear relationship between two sentences decides the answer: contrast, cause, addition, example, concession, sequence, or restatement.',
  minutes: 28,
  questions: [
    {
      id:'TRC-01', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — cause and effect',
      passage:"Rain falls on Tamar Ridge maybe twice a year, but a thick fog rolls in off the cold current for nine months out of twelve. %BLANK% the households on the ridge strung forty panels of fine mesh across the slope, where the fog condenses on the threads and drips into a trough that can fill a two-thousand-liter tank before breakfast.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'As a result,', B:'Nevertheless,', C:'For example,', D:'Meanwhile,'},
      correct:'A',
      expCorrect:"The first sentence gives the condition the ridge lives with — almost no rain, but fog for most of the year — and the second gives what the households did about it. An action taken because of the situation just described is cause and effect.",
      expWrong:{
        B:"‘Nevertheless’ would mean the mesh went up in spite of the fog, but the fog is the whole reason the mesh works.",
        C:"‘For example’ would make the mesh panels an instance of rain or fog, and they are neither: they are a response to both.",
        D:"‘Meanwhile’ only parks the two sentences side by side in time, as if the mesh happened to go up while the fog rolled in. The fog is the cause, not the backdrop."
      },
      tip:'Cover the blank and say the relationship out loud before you read the options. If the second sentence reports what the first sentence caused, the relation is cause and effect: As a result, Therefore, Consequently.'
    },
    {
      id:'TRC-02', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — contrast',
      passage:"When the town of Harkness traded its orange sodium streetlights for white LEDs, the bill for street lighting fell by roughly half in the first full year. %BLANK% the moths and beetles that had swarmed the old lamps began piling up under the new ones in far larger numbers, and the bats that feed on them shifted their nightly routes to follow.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Therefore,', B:'However,', C:'In other words,', D:'For instance,'},
      correct:'B',
      expCorrect:"The first sentence reports a clear win from the switch: half the lighting bill. The second reports something that cuts the other way, a heavier pile of insects under the lamps. Two results of the same change that point in opposite directions call for contrast.",
      expWrong:{
        A:"‘Therefore’ marks a consequence, but a smaller electric bill does not produce more moths; the two are separate effects of the same swap, and they disagree.",
        C:"‘In other words’ restates the first idea in new words, and insects and bats are new information, not the bill sentence rephrased.",
        D:"‘For instance’ would make the insect swarm an example of a lower bill, and a swarm of moths is not a kind of savings."
      },
      tip:'Cover the blank and ask which way each sentence points. When one sentence is good news and the next is bad news about the same thing, the relation is contrast: However, By contrast, On the other hand.'
    },
    {
      id:'TRC-03', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — addition',
      passage:"The braille press in the basement of the Weller School turns out about nine hundred pages a week, enough to keep every student in the reading program supplied with a fresh volume each month. %BLANK% the same machine prints tactile maps of the building and of the six blocks around it, which students trace with a finger to plan a route before they ever walk it.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In addition,', B:'By contrast,', C:'As a result,', D:'In other words,'},
      correct:'A',
      expCorrect:"The first sentence names one thing the press does, print books for the reading program. The second names a second, different thing it does, print tactile maps. A second item of the same kind stacked onto the first is addition.",
      expWrong:{
        B:"‘By contrast’ announces a difference, but nothing here is opposed: both sentences describe useful output from the same press.",
        C:"‘As a result’ would make the maps a consequence of the books, and printing nine hundred pages of reading does not produce a map of the neighborhood.",
        D:"‘In other words’ rephrases the idea just given, and a tactile map of six city blocks is new information, not the book sentence said differently."
      },
      tip:'Cover the blank and ask whether the second sentence adds a new item of the same kind. If it does, the relation is addition: In addition, Moreover, Furthermore.'
    },
    {
      id:'TRC-04', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — example',
      passage:"The few square miles around the Ferrand radio telescope are governed by rules that would sound absurd anywhere else, every one of them written to keep stray signals off the dish. %BLANK% a family living inside the zone may not run a microwave oven with a worn door seal, and the diner on the county road still takes orders on paper.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'For example,', B:'However,', C:'Earlier,', D:'In other words,'},
      correct:'A',
      expCorrect:"The first sentence makes a general claim, that the rules near the dish sound absurd. The second drops down to two specific rules, the microwave and the paper order pad. Moving from a general claim to particular cases of it is exemplification.",
      expWrong:{
        B:"‘However’ sets the second sentence against the first, but the microwave rule does not contradict the claim about odd rules; it proves it.",
        C:"‘Earlier’ places the second sentence before the first in time, and nothing here is a sequence of events: both sentences describe the same rules today.",
        D:"‘In other words’ would mean the second sentence says the first over again. It does not rephrase the claim; it supplies the cases the claim was summarizing."
      },
      tip:'Cover the blank and ask: is the second sentence a case of the first, or the first said again? A case means example (For example, For instance), not restatement.'
    },
    {
      id:'TRC-05', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — sequence',
      passage:"A glassblower shapes a bowl standing in front of the furnace, where the glass stays soft enough to move and the whole piece is worked in one unbroken stretch of ten or fifteen minutes. %BLANK% the bowl goes into an annealing oven that drops its temperature by ten degrees an hour, because glass left to cool on its own will crack from the strain inside a day.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'For example,', B:'By contrast,', C:'In other words,', D:'Afterward,'},
      correct:'D',
      expCorrect:"The first sentence describes the shaping at the furnace; the second describes what the bowl goes into once the shaping is over. Two stages of one process in the order they happen is sequence.",
      expWrong:{
        A:"‘For example’ would make the annealing oven an instance of shaping at the furnace, but it is the step that follows the shaping, not a kind of it.",
        B:"‘By contrast’ sets the two apart as opposites, and the oven does not contradict the furnace: both belong to the same job, one after the other.",
        C:"‘In other words’ says the second sentence repeats the first, and cooling a finished bowl by ten degrees an hour is not the shaping sentence rephrased."
      },
      tip:'Cover the blank and ask whether the second sentence happens after the first. Steps of one process in order take a time word: Afterward, Then, Next, Finally.'
    },
    {
      id:'TRC-06', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — concession',
      passage:"The single turbine the Brightwell co-op raised on the hill behind the grain sheds will never pay for itself: the loan runs twenty years and the blades are rated for eighteen. %BLANK% the ninety families who put money into it voted last spring to keep it turning, and four of them have already asked what a second one would cost.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Consequently,', B:'Even so,', C:'For instance,', D:'In addition,'},
      correct:'B',
      expCorrect:"The first sentence grants a real drawback, that the turbine will not pay for itself. The second reports that the members are keeping it anyway. Admitting a point and then holding the opposite position despite it is concession.",
      expWrong:{
        A:"‘Consequently’ makes the vote follow from the losses, but a machine that loses money is a reason to shut it down, not a reason to keep it running.",
        C:"‘For instance’ would make the vote an example of the turbine failing to pay for itself, and a vote is not a kind of financial loss.",
        D:"‘In addition’ piles a second like item onto the first, but the vote is not a second drawback: it pushes against the drawback just named."
      },
      tip:'Cover the blank and ask whether the writer just admitted something that should have stopped the second sentence from happening. If it happened anyway, the relation is concession: Even so, Nevertheless, All the same.'
    },
    {
      id:'TRC-07', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — restatement',
      passage:"The dock master at Roan Island posts the ferry times as a tidal timetable rather than a clock timetable. %BLANK% the boat leaves whenever there is water enough under the hull to leave, which pushes the departure forward by roughly fifty minutes a day and means that no two weeks of the year share a printed sheet.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In other words,', B:'By contrast,', C:'For example,', D:'Meanwhile,'},
      correct:'A',
      expCorrect:"The first sentence uses a term most readers will not know, a tidal timetable. The second says what that term means in plain language. Putting the same idea again in words the reader can use is restatement.",
      expWrong:{
        B:"‘By contrast’ would set the second sentence against the first, but the second is not a rival idea: it is the first one unpacked.",
        C:"‘For example’ would make the second sentence one case out of several, and the passage gives no other cases: this is what a tidal timetable is, every time.",
        D:"‘Meanwhile’ marks two things going on at once, and there are no two events here — only one term and its definition."
      },
      tip:'Cover the blank and ask whether the second sentence teaches you a new fact or explains a word you just met. If it only explains, the relation is restatement: In other words, That is, Put another way.'
    },
    {
      id:'TRC-08', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — cause and effect',
      passage:"For three years every tray in the Lyle Avenue cafeteria was scraped into one bin, and the hauler billed the district by the ton for whatever that bin held. %BLANK% the kitchen staff spent a morning building a three-station sorting rack by the tray return, and the tonnage the district now pays to haul has dropped by a little more than a third.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Nevertheless,', B:'For example,', C:'Consequently,', D:'Likewise,'},
      correct:'C',
      expCorrect:"The first sentence names the problem, one bin billed by the ton. The second names what the staff built to fix it and what the fix produced. A step taken because of the problem just stated is cause and effect.",
      expWrong:{
        A:"‘Nevertheless’ would mean the rack was built in spite of the hauling bill, but the bill is exactly what the rack was built to shrink.",
        B:"‘For example’ would make the sorting rack an instance of scraping trays into one bin, and it is the opposite of that practice.",
        D:"‘Likewise’ claims the two sentences are two versions of the same thing. One is the problem and the other is the response, which is not the same relation at all."
      },
      tip:'Cover the blank and ask whether the second sentence answers the first. Problem in sentence one plus fix in sentence two is cause and effect: Consequently, Therefore, As a result.'
    },
    {
      id:'TRC-09', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — contrast',
      passage:"The glass wall on the north face of the Halloran building copies the marsh behind it so faithfully that people crossing the parking lot stop and stare at the reflection. %BLANK% the birds that fly into that same picture break their necks on it, and the groundskeepers gathered more than four hundred of them during one migration season.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'However,', B:'In addition,', C:'Afterward,', D:'To illustrate,'},
      correct:'A',
      expCorrect:"The first sentence praises the glass wall for how well it mirrors the marsh; the second reports what that mirror does to birds. The same feature is an attraction in one sentence and a hazard in the next, and that reversal is contrast.",
      expWrong:{
        B:"‘In addition’ would make the dead birds a second point in favor of the wall, and four hundred casualties is not another selling point.",
        C:"‘Afterward’ puts the bird strikes after the staring in time, but nothing here is a sequence: both sentences describe the wall as it is every day.",
        D:"‘To illustrate’ would make the dead birds an example of people admiring the reflection, and the birds are not a case of admiration."
      },
      tip:'Cover the blank and compare the valence of the two sentences. Praise followed by damage is contrast: However, By contrast, On the other hand.'
    },
    {
      id:'TRC-10', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — addition',
      passage:"A lichen has no roots and no waxy skin, so whatever drifts out of the air lands on it and stays there. %BLANK% a lichen can hold one patch of bark for decades, which is why the species growing along a row of city maples record what the air has been like for years rather than for one still afternoon.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'For instance,', B:'Moreover,', C:'By contrast,', D:'As a result,'},
      correct:'B',
      expCorrect:"The first sentence gives one property that makes lichens useful air monitors, that they absorb everything. The second gives a second property of the same kind, that they stay put for decades. A second supporting trait laid on top of the first is addition.",
      expWrong:{
        A:"‘For instance’ would make longevity an example of having no roots, and living for decades is a separate trait, not a case of rootlessness.",
        C:"‘By contrast’ announces a difference, but both traits push the same way: each one makes the lichen a better record of the air.",
        D:"‘As a result’ would mean the lichen lives for decades because it has no waxy skin, and the passage never claims that absorbing pollution keeps it alive longer."
      },
      tip:'Cover the blank and ask whether the two sentences are two reasons for the same conclusion. Two supporting traits in a row means addition: Moreover, In addition, Furthermore.'
    },
    {
      id:'TRC-11', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — example',
      passage:"The orchard at Pell Hollow keeps forty-one apple varieties that no commercial packer will handle, and most of them were dropped for how they ship rather than for how they taste. %BLANK% the Ashmead russet bruises if you set it down too hard and ripens to a shade the wholesalers call dirty, and it is the fruit the orchard sells out of first every October.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Nevertheless,', B:'Therefore,', C:'Meanwhile,', D:'For instance,'},
      correct:'D',
      expCorrect:"The first sentence makes a claim about forty-one varieties at once: packers rejected them for shipping, not for flavor. The second walks through one of those varieties in detail. One member standing in for the whole group is exemplification.",
      expWrong:{
        A:"‘Nevertheless’ would set the russet against the claim, but the russet is the claim in miniature: bruises easily, tastes good, sells out.",
        B:"‘Therefore’ makes the russet a consequence of the forty-one varieties, and one apple in a list is not something the list produced.",
        C:"‘Meanwhile’ marks two things happening at the same time, and there is only one situation here, described first in general and then in close-up."
      },
      tip:'Cover the blank and ask whether the second sentence names one member of a group the first sentence described. If it does, the relation is example: For instance, For example, To illustrate.'
    },
    {
      id:'TRC-12', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — sequence',
      passage:"The band director hands out the drill charts in the first week of August, one page for every eight counts, with a numbered dot showing where each player has to stand. %BLANK% the students walk the whole show at half tempo on the practice field, counting out loud and carrying nothing, so that their feet learn the sets before the horns ever come up.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In short,', B:'For example,', C:'Nevertheless,', D:'Then,'},
      correct:'D',
      expCorrect:"The first sentence is the first stage of the rehearsal plan, handing out the charts in August. The second is the stage that comes after it, walking the show at half tempo. Two steps named in the order they are taken is sequence.",
      expWrong:{
        A:"‘In short’ promises a summary of what came before, and walking the field at half tempo is a new step, not a condensed version of the charts.",
        B:"‘For example’ would make the half-tempo walk an instance of handing out charts, and one is paper while the other is rehearsal.",
        C:"‘Nevertheless’ would mean the students walk the show in spite of the charts, but the charts are what they are walking."
      },
      tip:'Cover the blank and ask what order the two sentences happen in. If the second comes later in the same plan, use a time word: Then, Next, Afterward, Finally.'
    },
    {
      id:'TRC-13', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — cause and effect',
      passage:"One greasy pizza box can spoil the bale of paper it rides with, and the mill that buys the bale sends back the entire load once it opens one like that. %BLANK% the county now runs its curbside paper across a picking belt before anything is pressed, and two workers stand along that belt pulling out whatever does not belong.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Even so,', B:'Likewise,', C:'For this reason,', D:'For example,'},
      correct:'C',
      expCorrect:"The first sentence states the risk, one bad box costs the county a whole load. The second describes the picking belt the county installed to keep that from happening. A measure adopted because of the risk just named is cause and effect.",
      expWrong:{
        A:"‘Even so’ would mean the picking belt went in despite the rejected loads, but rejected loads are precisely why it went in.",
        B:"‘Likewise’ claims the two sentences are alike, and a contaminated bale and a sorting line are not two versions of one thing.",
        D:"‘For example’ would make the picking belt a case of a greasy pizza box ruining paper, and it is the county's answer to that problem, not an instance of it."
      },
      tip:'Cover the blank and ask why the second sentence is happening. If the first sentence is the reason, the relation is cause and effect: For this reason, Therefore, As a result.'
    },
    {
      id:'TRC-14', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — contrast',
      passage:"The city opened the Callow Street pool in 1968 for a neighborhood where nearly every child could walk to it, and the lesson roster that first summer filled in two days. %BLANK% the pool sat half empty through last July, and the recreation office counted more cars parked along the fence than swimmers in the water.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Therefore,', B:'Furthermore,', C:'For example,', D:'By contrast,'},
      correct:'D',
      expCorrect:"The first sentence shows the pool in 1968, full and oversubscribed. The second shows the same pool last July, half empty. Setting a past picture against a present one that reverses it is contrast.",
      expWrong:{
        A:"‘Therefore’ would make the empty pool a consequence of the crowded one, and a roster filling in two days does not cause a pool to stand empty fifty years later.",
        B:"‘Furthermore’ adds a like item, but the second sentence is not more evidence that the pool was popular: it is evidence of the opposite.",
        C:"‘For example’ would make last July a case of the pool filling up, and last July is when it did not fill up."
      },
      tip:'Cover the blank and put the two pictures side by side. Then versus now, where the second reverses the first, is contrast: By contrast, However, On the other hand.'
    },
    {
      id:'TRC-15', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — restatement',
      passage:"The bakery on Nagel Street describes its delivery fleet as human powered, a phrase the owner has printed on the side of every box that leaves the shop. %BLANK% four teenagers on cargo bikes carry the bread to the twenty-two restaurants that buy it, and the place has not owned a van since the spring of 2021.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'However,', B:'That is,', C:'As a result,', D:'Later,'},
      correct:'B',
      expCorrect:"The first sentence quotes a slogan, human powered, without saying what it amounts to. The second cashes the slogan out: four teenagers, cargo bikes, no van. Naming the plain fact behind a phrase just used is restatement.",
      expWrong:{
        A:"‘However’ needs a conflict, and the teenagers on bikes do not contradict the slogan; they are the slogan.",
        C:"‘As a result’ would make the bikes a consequence of the printed phrase, and printing words on a box does not put teenagers on bicycles.",
        D:"‘Later’ marks a shift forward in time, but the bikes are not something that happened after the slogan: they are what the slogan describes."
      },
      tip:'Cover the blank and ask whether the second sentence defines a phrase from the first. A slogan followed by the literal facts behind it is restatement: That is, In other words, Put another way.'
    },
    {
      id:'TRC-16', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — concession',
      passage:"The rubber surfacing the district laid under the Dorsey playground equipment costs about nine times what wood chips cost per square foot, and it has to be resealed every fourth summer. %BLANK% the district has ordered the same surfacing for the eleven playgrounds still running wood chips, and the purchase passed the board without a single vote against it.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Likewise,', B:'For example,', C:'Nonetheless,', D:'Consequently,'},
      correct:'C',
      expCorrect:"The first sentence concedes what the surfacing costs, nine times the price plus resealing. The second reports that the district bought more of it anyway, unanimously. Granting an objection and then acting against it is concession.",
      expWrong:{
        A:"‘Likewise’ says the second sentence matches the first, but a high price and an eager purchase are not two versions of the same fact.",
        B:"‘For example’ would make the new order an instance of high cost, and a board vote is not a kind of expense.",
        D:"‘Consequently’ makes the purchase follow from the price, and nine times the cost of wood chips is a reason to buy less of something, not more."
      },
      tip:'Cover the blank and ask whether sentence one is an objection that sentence two ignores. If so, the relation is concession: Nonetheless, Even so, All the same.'
    },
    {
      id:'TRC-17', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — addition',
      passage:"Every summer the hydrophones moored off Dunlin Bank send the shipping consortium that paid for them a running measure of hull noise at ten miles, a figure the consortium now uses when it argues for quieter propellers. %BLANK% the same recordings have handed a graduate student the first year-round record of humpback song in these waters, including three February nights when the singing never stopped.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'However,', B:'Furthermore,', C:'For instance,', D:'Meanwhile,'},
      correct:'B',
      expCorrect:"The first sentence names one thing the recordings are good for, measuring hull noise for the shipping consortium. The second names another thing the same recordings are good for, a year of humpback song. A second use added to the first is addition.",
      expWrong:{
        A:"‘However’ requires the second sentence to cut against the first, but nothing here is in tension: both sentences are payoffs from one set of microphones.",
        C:"‘For instance’ would make the humpback record an example of measuring hull noise, and whale song is not a kind of noise measurement.",
        D:"‘Meanwhile’ would say the two happened at the same time and leave it there, which loses the point: the two uses come from the same recordings, not from parallel projects."
      },
      tip:'Cover the blank and ask whether the second sentence opposes the first or piles onto it. Two payoffs from one source is addition: Furthermore, In addition, What is more.'
    },
    {
      id:'TRC-18', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — example',
      passage:"The archive will accept any reel a family carries in, but the condition of the film, not its length, decides what the transfer costs and how long the family waits. %BLANK% a reel from 1962 that spent forty years in a hot attic arrives with the emulsion stuck to itself, and a technician has to rehumidify it for two weeks before a single frame will run through the scanner.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In short,', B:'Therefore,', C:'For example,', D:'Nevertheless,'},
      correct:'C',
      expCorrect:"The first sentence states a rule the archive works by: condition, not length, sets the price and the wait. The second gives one reel that shows the rule working. A single case brought in to support a general rule is exemplification.",
      expWrong:{
        A:"‘In short’ promises to compress what came before, and a two-week rehumidification is a new detail, not a shorter version of the rule.",
        B:"‘Therefore’ makes the attic reel a consequence of the rule, and a rule about pricing does not cause emulsion to stick.",
        D:"‘Nevertheless’ would set the reel against the rule, but the reel obeys the rule: bad condition, long wait, high cost."
      },
      tip:'Cover the blank and ask whether the second sentence is proof of the first or a result of it. A case that shows the rule is example (For example, For instance), never cause and effect.'
    },
    {
      id:'TRC-19', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — concession',
      passage:"The runners who tested the new marathon route in April came back complaining about the two miles of crushed stone along the canal, and a few of them said the surface cost close to a minute a mile. %BLANK% the city approved the route in June, since it keeps runners off the highway shoulder and cuts the number of streets the police have to close from fifty-one to nineteen.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Accordingly,', B:'Nevertheless,', C:'Likewise,', D:'For instance,'},
      correct:'B',
      expCorrect:"The first sentence records the complaint against the route, two slow miles of crushed stone. The second reports that the city adopted the route regardless, for reasons of its own. Approving something over a stated objection is concession.",
      expWrong:{
        A:"‘Accordingly’ turns the complaints into the reason for approval, which reverses the logic: runners losing a minute a mile is an argument against the route, not for it.",
        C:"‘Likewise’ claims the two sentences say similar things, and a complaint and an approval pull in opposite directions.",
        D:"‘For instance’ would make the approval an example of runners complaining, and a council vote is not a kind of complaint."
      },
      tip:'Cover the blank and ask whether the decision in sentence two happened because of sentence one or in spite of it. In spite of means concession: Nevertheless, Even so, All the same.'
    },
    {
      id:'TRC-20', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — sequence',
      passage:"A dyer who wants onion skin to hold on wool does not begin with the dye. The wool goes first into a warm bath of alum and cream of tartar for an hour, which opens the fiber and gives the color something to grip. %BLANK% the skins go into a pot of their own, and the two are brought together only once the wool has cooled enough to handle.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'After that,', B:'As a result,', C:'By contrast,', D:'In other words,'},
      correct:'A',
      expCorrect:"The first sentences set the order: the wool is treated first, and the passage insists the dye does not come first. The blank introduces the step that is allowed to follow. Marking the next stage of a fixed order is sequence.",
      expWrong:{
        B:"‘As a result’ makes the onion pot a consequence of the alum bath, but soaking wool in alum does not produce a pot of onion skins; it just has to come earlier.",
        C:"‘By contrast’ would set the two baths against each other, and they are not rivals: they are stages the dyer runs in a set order.",
        D:"‘In other words’ says the second sentence repeats the first, and starting a second pot is new action, not the alum sentence rephrased."
      },
      tip:'Cover the blank and look for words that fix an order, like first, before, or not until. When the passage reads like a recipe, the blank almost always wants sequence: After that, Next, Afterward.'
    },
    {
      id:'TRC-21', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — contrast',
      passage:"The concrete bowl the city poured at Ilford Park in 2011 is skated from seven in the morning until the lights shut off, and the regulars there have organized a fund of their own to keep the coping repaired. %BLANK% the steel ramps trucked into Marden Park that same year stood unused by the second winter, and the parks department hauled away the last of them in June.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Likewise,', B:'Therefore,', C:'Conversely,', D:'For example,'},
      correct:'C',
      expCorrect:"The first sentence shows one park where the skaters never leave and pay for repairs themselves; the second shows a park from the same year where nobody came. Two comparable cases with opposite outcomes is contrast.",
      expWrong:{
        A:"‘Likewise’ is the trap here: the two parks are parallel in date and purpose, so the sentence looks like a match, but the outcomes are opposite and ‘Likewise’ claims they agree.",
        B:"‘Therefore’ makes the empty ramps a consequence of the busy bowl, and the passage gives no link of that kind between two parks across town.",
        D:"‘For example’ would make Marden Park a case of Ilford Park being popular, and Marden Park is the case of the opposite."
      },
      tip:'Cover the blank and compare the outcomes, not the setups. Two parallel cases that ended differently take contrast (Conversely, By contrast), not Likewise.'
    },
    {
      id:'TRC-22', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — cause and effect',
      passage:"The inspector told Devora that a fermented sauce packed below pH 4.0 could go straight onto a shelf, and that anything above that line would need a process authority to sign off before a single bottle moved. %BLANK% her recipe now ends with a measured pour of vinegar and a meter reading copied onto the batch sheet, which she files in a binder by the door.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Even so,', B:'Similarly,', C:'For instance,', D:'Accordingly,'},
      correct:'D',
      expCorrect:"The first sentence gives the rule Devora was handed, one number that decides whether she needs outside approval. The second gives what she changed in her recipe to stay under that number. A practice adopted to satisfy the rule just stated is cause and effect.",
      expWrong:{
        A:"‘Even so’ would mean she added the vinegar in spite of the inspector, but the vinegar is how she complies with him.",
        B:"‘Similarly’ says the two sentences are alike, and a regulation and a recipe change are not two versions of the same thing.",
        C:"‘For instance’ would make the vinegar pour an example of the pH rule, and a step in her kitchen is not a kind of regulation."
      },
      tip:'Cover the blank and ask whether the second sentence is what someone did about the first. A rule followed by the behavior it forces is cause and effect: Accordingly, Therefore, As a result.'
    },
    {
      id:'TRC-23', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — restatement',
      passage:"The soil report on the Rowe lot came back with one line the buyer had to ask about: the ground there has a high shrink-swell potential. %BLANK% the clay under the topsoil drinks water like a sponge in April and gives it all up by August, so a slab poured on that lot will lift and settle by as much as an inch and a half in a single year.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Even so,', B:'Since then,', C:'In other words,', D:'In addition,'},
      correct:'C',
      expCorrect:"The first sentence quotes a technical phrase from the report, high shrink-swell potential. The second says what that phrase means for this lot, in words the buyer can picture. Translating a term just used is restatement.",
      expWrong:{
        A:"‘Even so’ needs an objection to push past, and nothing in the first sentence is being overruled: the second sentence agrees with it completely.",
        B:"‘Since then’ marks time passing after an event, and the clay behaving this way is not something that started after the report was written.",
        D:"‘In addition’ would make the sponge description a second, separate problem, but it is the same problem stated twice, once in the engineer's words and once in plain ones."
      },
      tip:'Cover the blank and ask whether the second sentence is a new fact or the same fact in plainer words. Same fact means restatement: In other words, That is, Put another way.'
    },
    {
      id:'TRC-24', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — addition',
      passage:"The Ordway began scheduling one interpreted performance in every run three seasons ago, and tickets for those nights now sell out faster than any other date on its calendar. %BLANK% the company has started printing the name of the interpreter in the program beside the cast, a change the deaf theatergoers on its advisory board had asked for twice before it happened.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'What is more,', B:'By contrast,', C:'As a result,', D:'For example,'},
      correct:'A',
      expCorrect:"The first sentence reports one step the theater took and how well it worked; the second reports a further step in the same direction. A second move stacked onto the first, both pointing the same way, is addition.",
      expWrong:{
        B:"‘By contrast’ needs the second sentence to cut against the first, and printing the interpreter in the program is more of the same commitment, not a reversal of it.",
        C:"‘As a result’ makes the program change follow from strong ticket sales, but the passage says the advisory board asked for it twice, which is a different cause.",
        D:"‘For example’ would make the program credit an instance of selling out, and a line of type in a program is not a kind of ticket sale."
      },
      tip:'Cover the blank and check whether the passage names a cause for the second sentence. Here it does, and it is not the first sentence, so the link is addition: What is more, In addition, Moreover.'
    },
    {
      id:'TRC-25', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — example',
      passage:"A camera trap set on a game trail records far more than the animal it was aimed at, and the outtakes are often what the study ends up publishing. %BLANK% the cameras the Verrill survey left on the north ridge returned eleven thousand frames of deer, two frames of the lynx the grant had been written for, and four minutes of a bear trying to eat one of the cameras.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Consequently,', B:'In other words,', C:'Nevertheless,', D:'For instance,'},
      correct:'D',
      expCorrect:"The first sentence makes a general claim about camera traps: they catch more than the target species. The second reports one survey whose numbers show exactly that. One study offered in support of a general claim is exemplification.",
      expWrong:{
        A:"‘Consequently’ makes the Verrill numbers a consequence of the general claim, and a claim about camera traps does not cause eleven thousand deer to walk past one.",
        B:"‘In other words’ says the second sentence rephrases the first, but counted frames from a named ridge are evidence, not a paraphrase.",
        C:"‘Nevertheless’ would set the survey against the claim, and the survey is the claim proved: two lynx, eleven thousand of everything else."
      },
      tip:'Cover the blank and ask whether the numbers that follow prove the claim or follow from it. Numbers that prove it are an example: For instance, For example, To illustrate.'
    },
    {
      id:'TRC-26', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — concession',
      passage:"The rebate the water district pays for tearing out a lawn covers barely a third of what the replacement planting costs, and the homeowner waits about fourteen months for the check to arrive. %BLANK% the program has run through its money before August in each of the last four years, and the board raised the budget again in January.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Therefore,', B:'For example,', C:'Meanwhile,', D:'All the same,'},
      correct:'D',
      expCorrect:"The first sentence lists the reasons the rebate should be unpopular, a third of the cost and a fourteen-month wait. The second says homeowners exhaust it every year anyway. Naming the discouragement and then reporting that it did not discourage anyone is concession.",
      expWrong:{
        A:"‘Therefore’ makes the rush of applicants follow from the small, slow rebate, and a stingy program is a reason to expect fewer applicants, not more.",
        B:"‘For example’ would make the exhausted budget an instance of a small rebate, and running out of money is not a kind of payment size.",
        C:"‘Meanwhile’ merely sets the two facts side by side in time and drops the tension between them, which is the only thing the passage is about."
      },
      tip:'Cover the blank and ask whether sentence two is surprising given sentence one. Surprising in spite of a stated drawback is concession: All the same, Even so, Nonetheless.'
    },
    {
      id:'TRC-27', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — sequence',
      passage:"A wood kiln is not lit and left alone. Two people feed it in shifts for thirty hours, pushing the heat past twenty-three hundred degrees while the ash drifts onto the pots and melts into a glaze that nobody can plan exactly. %BLANK% the door is bricked shut and the whole kiln is left to sit for three full days, since opening it warm would crack every piece inside.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In other words,', B:'Likewise,', C:'Finally,', D:'By contrast,'},
      correct:'C',
      expCorrect:"The first sentences describe thirty hours of feeding the fire; the blank introduces what closes the firing out, bricking the door and waiting three days. Marking the last stage of a process already under way is sequence.",
      expWrong:{
        A:"‘In other words’ would make the three-day wait a restatement of the thirty-hour stoking, and resting a sealed kiln is not another way of saying that people fed it.",
        B:"‘Likewise’ claims the two stages are alike, and one is constant work while the other is deliberate inaction.",
        D:"‘By contrast’ turns the stages into opposites, but they are not in competition: the wait only makes sense as the step that follows the firing."
      },
      tip:'Cover the blank and count the stages. When the passage has walked through a process and the blank opens the last step, use a closing time word: Finally, At last, Afterward.'
    },
    {
      id:'TRC-28', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — cause and effect',
      passage:"The Kerrow line has exactly one siding in its fifty-two miles, and two trains can pass each other only at that spot. %BLANK% the whole timetable is built backward from the siding: every northbound departure is set so the southbound freight reaches the passing point at the same hour, and eight minutes of delay anywhere on the line costs the freight closer to forty.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Thus,', B:'However,', C:'For example,', D:'In the meantime,'},
      correct:'A',
      expCorrect:"The first sentence gives the physical constraint, one passing point in fifty-two miles. The second gives what the schedulers had to do because of it. A design forced by the limitation just described is cause and effect.",
      expWrong:{
        B:"‘However’ needs the timetable to work against the siding, and the timetable is organized entirely around the siding.",
        C:"‘For example’ would make the timetable an instance of having one siding, and a schedule is not a kind of track.",
        D:"‘In the meantime’ suggests the timetable was built while something else was pending, and nothing in the passage is pending: the siding is permanent."
      },
      tip:'Cover the blank and ask whether the first sentence forced the second. A physical limit followed by the workaround it forces is cause and effect: Thus, Therefore, Consequently.'
    },
    {
      id:'TRC-29', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — contrast',
      passage:"When the Brennan library dropped its overdue fines, the board braced for empty shelves and return carts that would sit idle for weeks at a stretch. %BLANK% the share of books coming back within a week of the due date rose by nine percent that year, and the number of cardholders blocked from borrowing fell from one in six to almost none.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Accordingly,', B:'Instead,', C:'Likewise,', D:'For instance,'},
      correct:'B',
      expCorrect:"The first sentence says what the board expected, empty shelves and idle carts. The second says what actually happened, faster returns and fewer blocked borrowers. When reality replaces the prediction with its opposite, the relation is contrast.",
      expWrong:{
        A:"‘Accordingly’ makes the outcome follow from the expectation, but the outcome is the expectation overturned, not fulfilled.",
        C:"‘Likewise’ claims the result matched the forecast, and a nine percent rise in on-time returns is the reverse of idle carts.",
        D:"‘For instance’ would make the return numbers an example of empty shelves, and full carts cannot illustrate empty ones."
      },
      tip:'Cover the blank and watch for a prediction. Expected in sentence one, what really happened in sentence two, is contrast, and Instead is the word that marks a replacement.'
    },
    {
      id:'TRC-30', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — addition',
      passage:"The wildlife overpass the state built across Route 9 at Tolliver Gap was justified on a single number, the ninety-odd collisions a year between cars and elk on that stretch, and that number fell to eleven in the first two winters the crossing was open. %BLANK% the biologists watching the camera feed have logged bear, bobcat, and one wolverine using the same span.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'On the other hand,', B:'For this reason,', C:'In addition,', D:'In other words,'},
      correct:'C',
      expCorrect:"The first sentence reports the benefit the overpass was built for, far fewer elk collisions. The second reports a further benefit nobody budgeted for, three more species using the crossing. A second gain laid on top of the first is addition.",
      expWrong:{
        A:"‘On the other hand’ needs the second sentence to weigh against the first, and bears and bobcats using the span is more good news, not a cost.",
        B:"‘For this reason’ makes the bears a consequence of fewer elk collisions, and elk staying off the road does not send a wolverine over a bridge.",
        D:"‘In other words’ says the second sentence rephrases the first, and a species list from the camera feed is new information, not the collision count restated."
      },
      tip:'Cover the blank and ask whether the second benefit argues against the first or adds to it. Two gains from one project is addition: In addition, Moreover, What is more.'
    },
    {
      id:'TRC-31', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — example',
      passage:"A printer who sets type by hand learns the cabinet before the alphabet, because the drawer says as much about a typeface as the letters do. %BLANK% the drawer for a newspaper face holds nine copies of the letter e for every one of the letter w, a ratio worked out a century ago by counting a column of type rather than by any theory of English.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Nevertheless,', B:'Therefore,', C:'Since then,', D:'For example,'},
      correct:'D',
      expCorrect:"The first sentence claims that a type drawer tells you about the face it holds. The second gives one drawer and one ratio that demonstrate the claim. A concrete case supporting a general statement is exemplification.",
      expWrong:{
        A:"‘Nevertheless’ would set the ratio against the claim, and nine copies of e to one w is the claim in action, not an exception to it.",
        B:"‘Therefore’ makes the ratio a consequence of the claim, and a printer learning the cabinet does not cause the drawer to be stocked that way.",
        C:"‘Since then’ needs an earlier event to date from, and the first sentence describes an ongoing practice rather than a moment on a calendar."
      },
      tip:'Cover the blank and ask whether the detail that follows is evidence for the claim or a result of it. Evidence means example: For example, For instance, To illustrate.'
    },
    {
      id:'TRC-32', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — restatement',
      passage:"The engineer who wrote the report on the Weddell culvert used one phrase the council asked her to explain: the structure is functionally obsolete. %BLANK% the culvert is sound enough to carry what crosses it today, but it was sized for a watershed with half the pavement this one has now, and it backs up over the road in any storm the county would call ordinary.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Put another way,', B:'By contrast,', C:'Consequently,', D:'For instance,'},
      correct:'A',
      expCorrect:"The first sentence quotes a term of art, functionally obsolete, and says the council did not understand it. The second unpacks the term: solid enough, wrongly sized, floods in ordinary storms. Saying the same judgment again in plain language is restatement.",
      expWrong:{
        B:"‘By contrast’ would set the second sentence against the phrase, and the second sentence agrees with it: it is what the phrase means.",
        C:"‘Consequently’ makes the flooding a consequence of the phrase, and words in a report do not cause water to back up over a road.",
        D:"‘For instance’ would make this one culvert an example of some larger group, but the passage is about this culvert both times, once labeled and once explained."
      },
      tip:'Cover the blank and ask who the second sentence is written for. When it exists to define a phrase the reader just met, the relation is restatement: Put another way, In other words, That is.'
    },
    {
      id:'TRC-33', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — concession',
      passage:"Two teams have now dated the timbers in the Aldsworth granary, and their tree-ring counts disagree by eleven years, which is wider than the method is supposed to allow. The older count rests on a single beam that may well have been reused from an earlier building. %BLANK% both teams place the granary inside the same decade of the 1730s, and that decade is the only thing the argument over the roof trusses actually turns on.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'As a result,', B:'In addition,', C:'Regardless,', D:'For example,'},
      correct:'C',
      expCorrect:"The first two sentences build a case for doubt: the counts disagree by more than they should, and one of them may rest on a recycled beam. The blank then reports that the disagreement does not matter for the question at hand. Setting aside an objection you have just granted is concession.",
      expWrong:{
        A:"‘As a result’ makes the agreement on the 1730s follow from the eleven-year gap, but a disagreement cannot produce an agreement; the passage is pushing past it, not deriving anything from it.",
        B:"‘In addition’ would make the shared decade one more piece of doubt, and it is the opposite: it is the reason the doubt can be set down.",
        D:"‘For example’ would make the 1730s an instance of the two counts disagreeing, and a decade both teams accept is where they agree."
      },
      tip:'Cover the blank and ask what the writer does with the doubt just raised. If the next sentence steps over it rather than answering it, the relation is concession: Regardless, Even so, Nevertheless.'
    },
    {
      id:'TRC-34', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — sequence',
      passage:"The rebuild of the Renner carousel ran in an order the shop refuses to change. Every horse was photographed on its own pole before a single bolt came out, because the carver numbered only the outer row and the rest can be returned to their places by photograph alone. %BLANK% the poles and gears went out to the machine shop in crates, and the platform was releveled while they were gone; the repainting came last, once the mechanism had run a week under load.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'As a result,', B:'Subsequently,', C:'In other words,', D:'By contrast,'},
      correct:'B',
      expCorrect:"The passage lays out a fixed order: photographs before anything comes apart, repainting last. The blank has to introduce the middle stage, the poles and gears leaving for the machine shop. A step slotted between a stated first and a stated last is sequence.",
      expWrong:{
        A:"‘As a result’ makes the trip to the machine shop a consequence of the photographs, but photographing the horses records where they stood; it does not send gears anywhere. The order is a shop rule, not a chain of causes.",
        C:"‘In other words’ says the second half restates the first, and crating the gears and releveling the platform is new work, not the photography sentence rephrased.",
        D:"‘By contrast’ turns the stages into opposites, and photographing, machining, and repainting are not rivals: they are one job taken in a set order."
      },
      tip:'Cover the blank and map the order the passage already states. If one stage is fixed as first and another as last, the blank belongs to the stage in between, and it wants a sequence word: Subsequently, Next, Then.'
    }
  ]
});
