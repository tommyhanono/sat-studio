/* SAT Studio question set — Reading & Writing: Transitions — Set A (TRA-01 to TRA-34) */
/* 34 preguntas de la destreza oficial "Transitions" (Expression of Ideas).
   El reparto es 10 Fácil · 14 Media · 10 Difícil, y 4 de las Difícil van con
   extreme:true. La respuesta depende SOLO de la relación lógica entre las dos
   oraciones: contraste, causa-efecto, suma, ejemplo, concesión, secuencia y
   reformulación. Los distractores son transiciones reales que señalan la
   relación equivocada; los dos errores que más se castigan son elegir contraste
   cuando es causa, y elegir suma cuando es ejemplo. En cada pregunta hay una
   sola opción de la familia correcta: las otras tres vienen de familias
   distintas, así que la respuesta nunca depende de matices entre sinónimos. */
window.SAT_SETS.push({
  id: 'rw-trans-a',
  title: 'Transitions — Set A',
  section: 'rw',
  level: 'Media',
  description: 'Thirty-four short passages in which only the logical relationship between the two sentences decides the answer.',
  minutes: 30,
  questions: [
    {
      id:'TRA-01', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — addition',
      passage:"The rooftop hives above the library produce about forty pounds of honey each summer, enough for the whole staff to take a jar home in September. %BLANK% the bees pollinate the community garden plots two blocks east, where volunteers report heavier tomato harvests in every bed since the first hive arrived three years ago.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In addition,', B:'However,', C:'For example,', D:'In other words,'},
      correct:'A',
      expCorrect:"The first sentence names one benefit of the hives (honey for the staff); the second names a second benefit of the same kind (pollination for the gardens next door). A new advantage stacked on top of the first one is addition, and ‘In addition’ is the only choice that marks it.",
      expWrong:{
        B:"‘However’ announces a contradiction, but both sentences point the same way — they are two good things the hives do — so there is nothing to oppose.",
        C:"‘For example’ would make pollination a case of honey production, and it is not a kind of honey production: it is a separate benefit.",
        D:"‘In other words’ restates the first idea in new words, but tomato harvests are new information, not the honey sentence rephrased."
      },
      tip:'Cover the blank and say the relationship out loud before you read the options. If the second sentence means "and here is another thing of the same kind", the relation is addition: In addition, Moreover, Furthermore.'
    },
    {
      id:'TRA-02', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — contrast',
      passage:"For its first twelve seasons the Alder Street theater staged only plays written before 1900, and its subscribers came to expect powdered wigs, painted backdrops, and a curtain speech about the author's difficult childhood. %BLANK% this spring the company opens with a brand-new work about a night-shift nurse, written by a playwright who turned twenty-four in August.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Therefore,', B:'Likewise,', C:'By contrast,', D:'For instance,'},
      correct:'C',
      expCorrect:"The first sentence sets up twelve seasons of pre-1900 plays; the second announces a brand-new play by a twenty-four-year-old. The second breaks the pattern the first established, and a break with an established pattern is contrast.",
      expWrong:{
        A:"‘Therefore’ marks a consequence, but the new play is not something the old repertoire produced; it is a turn away from it.",
        B:"‘Likewise’ says the second idea matches the first, and a new play about a night nurse is the opposite of powdered wigs.",
        D:"‘For instance’ would make the new play an example of the pre-1900 repertoire, and it falls outside that repertoire entirely."
      },
      tip:'Cover the blank and ask what the second sentence does to the first. If it breaks a pattern the first sentence just set up, the relation is contrast: By contrast, However, On the other hand.'
    },
    {
      id:'TRA-03', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — cause and effect',
      passage:"Snow fell on the valley for nine straight days, burying the switchback road under drifts taller than a delivery van and closing the pass in both directions. %BLANK% the mountain school canceled classes for a full week, and teachers mailed packets of work to the families who could still walk down to the post office.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Nevertheless,', B:'Similarly,', C:'In fact,', D:'As a result,'},
      correct:'D',
      expCorrect:"The first sentence gives the cause — nine days of snow and a closed road — and the second gives what followed from it: a week of canceled classes. An outcome produced by the situation just described is cause and effect.",
      expWrong:{
        A:"‘Nevertheless’ would mean the school stayed open in spite of the snow, but the school closed because of the snow, not against it.",
        B:"‘Similarly’ pairs two like cases, and a snowfall and a school closing are not two versions of the same thing: one produced the other.",
        C:"‘In fact’ sharpens or corrects the claim just made, and nothing in the first sentence needs correcting; the second simply reports what happened next because of it."
      },
      tip:'Cover the blank and ask whether the first sentence CAUSED the second. If it did, you need cause and effect: As a result, Therefore, Consequently.'
    },
    {
      id:'TRA-04', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — example',
      passage:"Lighthouse keepers on the northern coast kept logbooks that recorded far more than wind and weather. %BLANK% the keeper at Hollow Point filled his pages with the name of every ship that passed the shoal, the price he paid for kerosene, and the night in 1911 when a flock of migrating geese struck the lantern room and broke two panes.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Instead,', B:'For instance,', C:'Therefore,', D:'Nonetheless,'},
      correct:'B',
      expCorrect:"The first sentence makes a general claim about what the logbooks contained; the second hands you one keeper's book as a case of it. A general statement followed by a single case of it is exemplification.",
      expWrong:{
        A:"‘Instead’ swaps one thing for another, but the Hollow Point log does not replace the general claim: it supports it.",
        C:"‘Therefore’ marks a consequence, and one keeper's detailed entries are not caused by the general habit — they are an instance of it.",
        D:"‘Nonetheless’ signals that something holds in spite of what came before, and the second sentence agrees with the first rather than resisting it."
      },
      tip:'Cover the blank: if the second sentence is one concrete case of the general claim just made, the relation is example: For instance, For example, Specifically.'
    },
    {
      id:'TRA-05', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — sequence',
      passage:"To develop a photograph by hand, you slide the exposed paper into a tray of developer and rock the tray gently until shapes begin to rise out of the white. %BLANK% you lift the print with tongs and slip it into the stop bath, which halts the chemistry before the image goes darker than you want it.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In contrast,', B:'In short,', C:'For example,', D:'Next,'},
      correct:'D',
      expCorrect:"The first sentence describes one step of the process (rocking the paper in the developer); the second describes the step that comes right after it (moving the print to the stop bath). Steps in order call for a sequence transition.",
      expWrong:{
        A:"‘In contrast’ sets two things against each other, but the stop bath does not oppose the developer: it follows it.",
        B:"‘In short’ announces a summary, and the second sentence adds a new step instead of boiling down the first.",
        C:"‘For example’ makes the second sentence a case of the first, yet moving the print is not an example of rocking it — it is what you do afterward."
      },
      tip:'Cover the blank and ask whether the two sentences are steps in a process. If they are, you need sequence: Next, Then, Subsequently, Finally.'
    },
    {
      id:'TRA-06', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — restatement',
      passage:"The museum calls its newest acquisition, a tobacco barn moved board by board from a farm upriver, a work of vernacular architecture. The phrase sends most visitors straight to the wall label, and the label is not much help. %BLANK% the barn was built by the people who used it, without an architect, out of whatever timber and fieldstone the valley had to give.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In other words,', B:'However,', C:'Meanwhile,', D:'As a result,'},
      correct:'A',
      expCorrect:"The first sentences drop a technical phrase, ‘vernacular architecture’, and leave visitors stranded; the last says the same thing in plain words — built by its users, without an architect. One idea said twice, the second time more simply, is restatement.",
      expWrong:{
        B:"‘However’ promises a contradiction, but the plain-language version agrees with the technical phrase: it only translates it.",
        C:"‘Meanwhile’ points to something happening at the same time somewhere else, and there is no second scene here, just one idea said twice.",
        D:"‘As a result’ would make the definition an effect of the unhelpful label, but a definition is not caused by confusion; it clears it up."
      },
      tip:'Cover the blank: if the second sentence says the same thing as the first in easier words and adds no new facts, the relation is restatement: In other words, That is, Put simply.'
    },
    {
      id:'TRA-07', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — contrast',
      passage:"Most of the volunteers who sort donations at the food bank arrive in the late afternoon, once school and work have let out and the day's deliveries are stacked by the door. %BLANK% the two retired bus drivers who run the freezer inventory come in at dawn, when the loading dock is quiet and the refrigerated trucks have not yet pulled in.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Consequently,', B:'In much the same way,', C:'On the other hand,', D:'Namely,'},
      correct:'C',
      expCorrect:"The first sentence says most volunteers come in the late afternoon; the second says two of them come at dawn instead. One group is set against the other, and that opposition is contrast.",
      expWrong:{
        A:"‘Consequently’ marks an effect, but the drivers' early shift is not produced by everyone else arriving late; it simply differs from it.",
        B:"‘In much the same way’ claims the two habits match, and dawn is the opposite end of the day from late afternoon.",
        D:"‘Namely’ names the specific members of a group just mentioned, but the drivers are not among the late-afternoon volunteers: they are the exception to them."
      },
      tip:'Cover the blank and ask which way the second sentence points. Two groups doing opposite things is contrast: On the other hand, By contrast, However.'
    },
    {
      id:'TRA-08', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — cause and effect',
      passage:"Paper made before the 1850s was pressed from cotton and linen rags, and rag paper carries almost no acid, the substance that slowly turns a page brown and brittle from the inside out. %BLANK% archives that hold letters from the 1820s spend far less on repair than archives whose shelves are filled with newspapers printed in the 1970s.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Even so,', B:'Therefore,', C:'For example,', D:'Earlier,'},
      correct:'B',
      expCorrect:"The first sentence gives a property of old paper — almost no acid — and the second gives what follows from that property: smaller repair bills for the archives that hold it. Property first, consequence second, is cause and effect.",
      expWrong:{
        A:"‘Even so’ would mean the old letters survive in spite of being acid-free, which reverses the logic: they survive because of it.",
        C:"‘For example’ would make the repair budgets a case of the first sentence, but a budget is not an instance of paper chemistry: it is what that chemistry leads to.",
        D:"‘Earlier’ marks a jump back in time, and the second sentence is not an earlier event; it is today's consequence of an old manufacturing method."
      },
      tip:'Cover the blank and ask whether the first sentence explains WHY the second is true. If it does, the relation is cause and effect: Therefore, As a result, Consequently.'
    },
    {
      id:'TRA-09', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — similarity',
      passage:"Turning on the subtitles helps many language students catch words they would otherwise miss, because the ear and the eye check each other line by line. %BLANK% reading a chapter aloud while following the printed text helps struggling readers hold on to more of what they read, since the two channels arrive together and reinforce one another.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Similarly,', B:'Nevertheless,', C:'In contrast,', D:'Thus,'},
      correct:'A',
      expCorrect:"The first sentence describes one trick that pairs ear and eye (subtitles); the second describes a different trick that works the same way (reading aloud while following the text). Two parallel cases of the same principle call for a similarity transition.",
      expWrong:{
        B:"‘Nevertheless’ announces something true in spite of the first idea, but the second idea supports it rather than resisting it.",
        C:"‘In contrast’ sets the two methods against each other, and they are not opposites: both pair listening with reading.",
        D:"‘Thus’ makes the second sentence a consequence, yet reading aloud is not caused by subtitles; it is a second case of the same idea."
      },
      tip:'Cover the blank: if the second sentence is a parallel case that works the same way as the first, the relation is similarity: Similarly, Likewise, In the same way.'
    },
    {
      id:'TRA-10', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — concession',
      passage:"The bike lane along Ridge Street has cut collisions at the Ridge and Ninth intersection by nearly half in two years, and the neighborhood association has asked the city to extend it another six blocks. %BLANK% the lane took away eleven parking spaces, and the owner of the corner hardware store says his Saturday sales have not recovered.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Consequently,', B:'For instance,', C:'Overall,', D:'Admittedly,'},
      correct:'D',
      expCorrect:"The first sentence praises the bike lane; the second grants a real cost of it — lost parking and slower Saturdays. Admitting a point that cuts against the claim you just made is concession.",
      expWrong:{
        A:"‘Consequently’ makes the lost parking an effect of the drop in collisions, and the two are unrelated: safety did not cause the store's slow Saturdays.",
        B:"‘For instance’ would make the lost parking an example of the lane's success, and it is the opposite: a drawback.",
        C:"‘Overall’ announces a final verdict that weighs everything, but the second sentence adds a new objection instead of summing up."
      },
      tip:'Cover the blank: if the second sentence admits a point that weakens what you just said, the relation is concession: Admittedly, Granted, To be sure.'
    },
    {
      id:'TRA-11', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — cause and effect',
      passage:"The loggerhead hatchlings that emerge on Bayard Beach each August find the ocean by crawling toward the brightest line on the horizon, a rule that worked perfectly until a parking lot began burning white behind the dunes. The town replaced those lamps with low amber fixtures in 2021. %BLANK% the number of hatchlings found wandering inland at dawn fell from roughly three hundred a season to fewer than forty.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Even so,', B:'Meanwhile,', C:'Consequently,', D:'For example,'},
      correct:'C',
      expCorrect:"The sentence before the blank reports a change (amber lamps replacing white ones); the sentence after reports what that change produced (far fewer lost hatchlings). A number that moves because of an action just described is cause and effect.",
      expWrong:{
        A:"‘Even so’ would mean the hatchlings stopped wandering in spite of the new lamps, but the new lamps are precisely what stopped them.",
        B:"‘Meanwhile’ points to a separate event running at the same time, and the falling count is not a parallel event: it is the effect of the swap.",
        D:"‘For example’ would make the count an instance of replacing lamps, and a season of hatchling surveys is not a kind of lamp replacement: it is its result."
      },
      tip:'Cover the blank and ask whether the sentence before it explains WHY the sentence after it is true. If it does, the relation is cause and effect: Consequently, Therefore, As a result.'
    },
    {
      id:'TRA-12', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — example',
      passage:"Volcanic ash does more than darken a sky. Because it is ground rock, it carries phosphorus and potassium that crops can rarely get anywhere else, and farmers working old ash fields often harvest more per acre than their neighbors one valley away. %BLANK% the terraced rice fields on the lower slopes of Mount Banua have been worked for four centuries without a single season of commercial fertilizer.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Nonetheless,', B:'Specifically,', C:'In turn,', D:'By contrast,'},
      correct:'B',
      expCorrect:"The sentence before the blank makes a general claim about ash fields and yields; the sentence after narrows to one place, Mount Banua, that proves it. A general claim followed by the single case that shows it calls for exemplification.",
      expWrong:{
        A:"‘Nonetheless’ resists the claim just made, but the Banua terraces confirm it instead of qualifying it.",
        C:"‘In turn’ marks the next link in a chain of effects, and the terraces are not something the general claim caused: they are one instance of it.",
        D:"‘By contrast’ would set the terraces against the claim about ash fields, and those terraces are its best illustration."
      },
      tip:'Cover the blank: if the second sentence zooms in on one named case of the claim just made, the relation is example: Specifically, For instance, For example.'
    },
    {
      id:'TRA-13', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — concession',
      passage:"The plan to convert the abandoned Delancy rail spur into a walking path has the support of every neighborhood council along its route, and the county has already surveyed the first mile and priced the fencing. %BLANK% the corridor runs within thirty feet of a working scrapyard for two blocks, and no one has yet explained how walkers and forklifts are supposed to share that stretch.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'As a result,', B:'Likewise,', C:'In summary,', D:'Granted,'},
      correct:'D',
      expCorrect:"The first sentence lines up everything going for the path; the second admits a real problem with it. Conceding a weak point in the case you are making is concession, and ‘Granted’ is the only choice that does that.",
      expWrong:{
        A:"‘As a result’ would make the scrapyard hazard an effect of the councils' support, and unanimous backing did not put a scrapyard beside the tracks.",
        B:"‘Likewise’ claims the second sentence runs the same way as the first, but unanimous support and an unsolved hazard pull in opposite directions.",
        C:"‘In summary’ promises a wrap-up of what came before, and the second sentence raises a problem that was never mentioned."
      },
      tip:'Cover the blank: if the second sentence admits a weakness in the case the first sentence is building, the relation is concession: Granted, Admittedly, To be sure.'
    },
    {
      id:'TRA-14', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — sequence (simultaneity)',
      passage:"For six months the conservation crew worked from a scaffold inside the chapel, lifting four centuries of candle soot off the ceiling fresco one hand-sized square at a time. %BLANK% a second team was digging a trench along the north wall, rerouting the roof runoff that had been soaking the masonry and feeding the damp that loosened the plaster in the first place.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Meanwhile,', B:'Therefore,', C:'In other words,', D:'Admittedly,'},
      correct:'A',
      expCorrect:"Two crews are at work on the same building over the same six months: one cleaning inside, one digging outside. Two things going on at once, in different places, call for a transition of simultaneity.",
      expWrong:{
        B:"‘Therefore’ would make the trench an effect of the cleaning, but nobody dug a drainage trench because the fresco was being washed; the two jobs simply overlap.",
        C:"‘In other words’ restates the first idea, and digging a trench outside is a different job, not the cleaning described again.",
        D:"‘Admittedly’ concedes a point that cuts against the writer, and there is no claim here to concede: two teams are working at the same time."
      },
      tip:'Cover the blank: if the two sentences describe things happening at the same time rather than one after the other, you want Meanwhile or At the same time, not a cause or a contrast.'
    },
    {
      id:'TRA-15', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — contrast',
      passage:"Every model the utility ran predicted that the new time-of-use rates would flatten the evening demand spike, since customers charged extra for electricity between five and nine would surely move laundry and dishwashing into the cheap overnight hours. %BLANK% the spike in the first summer was only four percent lower than the summer before, and in two neighborhoods it was slightly higher.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'For this reason,', B:'Nevertheless,', C:'In particular,', D:'That is,'},
      correct:'B',
      expCorrect:"The first sentence sets up a confident prediction; the second reports results that defeat it. When the second sentence tells you the expectation did not hold, the relation is contrast.",
      expWrong:{
        A:"‘For this reason’ marks the expected consequence, but a spike that refused to flatten is not what the models predicted would follow; it is what undid them.",
        C:"‘In particular’ narrows to a specific case of the previous claim, and the summer results are not an instance of the prediction: they are evidence against it.",
        D:"‘That is’ restates the first sentence more plainly, and the second sentence reports a different, opposing fact."
      },
      tip:'Cover the blank and ask whether the second sentence confirms or defeats the expectation the first one set up. Defeated expectation is contrast: Nevertheless, However, Even so.'
    },
    {
      id:'TRA-16', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — addition',
      passage:"Reviewers of the county's redesigned ballot praised the way it prints each contest in a single column, which keeps a voter from missing a race that used to continue on the back of the page. %BLANK% the design sets candidate names two points larger than the old ballot did, a change the elections office credits with cutting the number of ballots spoiled by stray marks.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'For example,', B:'However,', C:'Consequently,', D:'Furthermore,'},
      correct:'D',
      expCorrect:"The first sentence praises one feature of the ballot (one column per contest); the second praises a different feature (larger type). Two separate design choices, both good, stack up: that is addition.",
      expWrong:{
        A:"‘For example’ would make the larger type a case of the single-column layout, and type size is a different feature altogether, not an instance of column layout.",
        B:"‘However’ promises opposition, and both sentences praise the same ballot for two reasons that agree.",
        C:"‘Consequently’ would make the bigger type an effect of the single column, but neither choice produced the other: the designers made both."
      },
      tip:'Cover the blank and ask whether the second sentence is a NEW item of the same kind (addition) or a case of the first (example). Two separate features means addition: Furthermore, Moreover, In addition.'
    },
    {
      id:'TRA-17', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — restatement',
      passage:"Economists who study the corner store call it a time market: the shopper handing over four dollars for a quart of milk is not paying that price because the milk is better than the milk at the supermarket across the highway. %BLANK% the extra dollar buys the twenty minutes the longer trip would have cost, and for a parent with a sleeping child in the car those twenty minutes are the whole purchase.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Even so,', B:'Afterward,', C:'Put simply,', D:'In addition,'},
      correct:'C',
      expCorrect:"The first sentence names a concept, the time market, and says what the shopper is not paying for; the second says the same thing in everyday words — the dollar buys twenty minutes. One idea delivered twice, the second time more plainly, is restatement.",
      expWrong:{
        A:"‘Even so’ signals something true in spite of the first idea, but the second sentence agrees with it and spells it out.",
        B:"‘Afterward’ places the second sentence later in time, and nothing happens later here: the same transaction is being described again.",
        D:"‘In addition’ would stack a second, separate point on the first, yet the second sentence introduces no new fact; it translates the one already given."
      },
      tip:'Cover the blank and ask whether the second sentence adds a FACT or just the same fact in easier words. No new fact means restatement: Put simply, In other words, That is.'
    },
    {
      id:'TRA-18', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — cause and effect',
      passage:"Sound travels almost five times faster in seawater than in air, and in the cold layer known as the deep sound channel a low call can hold together for hundreds of miles before it thins into noise. %BLANK% a single hydrophone anchored off the Oregon shelf can register a blue whale that no research vessel in that half of the ocean has ever come close enough to photograph.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Instead,', B:'Thus,', C:'Similarly,', D:'Granted,'},
      correct:'B',
      expCorrect:"The first sentence gives the physics: sound carries for hundreds of miles in the deep sound channel. The second gives what that physics makes possible: one hydrophone hearing a whale nobody has seen. Mechanism first, outcome second, is cause and effect.",
      expWrong:{
        A:"‘Instead’ replaces one thing with another, but the hydrophone recording does not take the place of the physics: it follows from it.",
        C:"‘Similarly’ pairs two cases of the same kind, and the second sentence is not a second example of how sound behaves; it is a consequence of how sound behaves.",
        D:"‘Granted’ concedes a point that works against the writer, and the recording supports the first sentence rather than qualifying it."
      },
      tip:'Cover the blank: if the first sentence is the mechanism and the second is what the mechanism makes possible, the relation is cause and effect: Thus, Therefore, Consequently.'
    },
    {
      id:'TRA-19', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — example',
      passage:"Not every instrument in the collection was built for a concert hall. A good number came from parlors and sickrooms, where an audience meant two people and a candle, and the curators have grouped them in the east gallery under a sign reading Music for One Room. %BLANK% the 1798 clavichord in the second case produces a tone so faint that a listener standing behind the bench can barely hear it.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Nevertheless,', B:'As a result,', C:'To summarize,', D:'Notably,'},
      correct:'D',
      expCorrect:"The first sentences describe a group of instruments built for tiny rooms; the second picks one of them, the 1798 clavichord, and shows how faint it is. Pulling one striking member out of a group just described is exemplification.",
      expWrong:{
        A:"‘Nevertheless’ announces something true in spite of what came before, and a nearly inaudible clavichord fits the group perfectly instead of resisting it.",
        B:"‘As a result’ would make the faint tone an effect of how the curators arranged the gallery, which reverses the order: the instrument was quiet long before anyone grouped it.",
        C:"‘To summarize’ signals a wrap-up of several points, but one instrument's tone is a single example, not a summary."
      },
      tip:'Cover the blank: if the second sentence singles out one member of a group the first sentence described, the relation is example: Notably, For instance, Specifically.'
    },
    {
      id:'TRA-20', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — sequence (final step)',
      passage:"The committee spent eleven months on the question of what to do with the flooded lower level: two engineering studies, a public hearing that ran past midnight, and a straw poll that split almost evenly between filling the space and waterproofing it. %BLANK% the members voted to fill it, citing a cost estimate that had nearly doubled while they deliberated.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Ultimately,', B:'For instance,', C:'In contrast,', D:'Likewise,'},
      correct:'A',
      expCorrect:"The first sentence lists eleven months of steps; the second reports the decision those steps ended in. A transition that marks the last stage of a process just narrated is what the blank needs.",
      expWrong:{
        B:"‘For instance’ would make the vote an example of the months of study, and a final decision is not an instance of deliberating: it is where the deliberating stopped.",
        C:"‘In contrast’ sets the vote against the process that produced it, but the vote is the last step of that process, not its opposite.",
        D:"‘Likewise’ claims the second sentence matches the first, and a single binding decision is a different kind of event from studies and straw polls."
      },
      tip:'Cover the blank: if the second sentence is where a long process ended, you want a closing sequence word — Ultimately, Finally, In the end — not a contrast.'
    },
    {
      id:'TRA-21', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — contrast',
      passage:"Sourdough starters kept in home kitchens drift toward whatever wild yeasts live in that house, which is why a loaf baked in one town rarely tastes like a loaf baked from the same recipe two hundred miles away. %BLANK% the commercial yeast sold in foil packets is a single strain grown under conditions so controlled that a bakery in Lisbon and a bakery in Lima can count on the identical rise.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Accordingly,', B:'In fact,', C:'Conversely,', D:'For example,'},
      correct:'C',
      expCorrect:"The first sentence says home starters vary from house to house; the second says packaged yeast is identical everywhere. The two sentences describe opposite behaviors of the same ingredient, and that opposition is contrast.",
      expWrong:{
        A:"‘Accordingly’ marks a consequence, but uniform packaged yeast is not something drifting home starters produced: it is the other side of the comparison.",
        B:"‘In fact’ sharpens or corrects the statement just made, and the second sentence does not intensify the first; it describes the opposite case.",
        D:"‘For example’ would make packaged yeast an instance of a drifting starter, and packaged yeast is precisely the thing that does not drift."
      },
      tip:'Cover the blank: two things behaving in opposite ways is contrast, even when no one is arguing — Conversely, By contrast, On the other hand.'
    },
    {
      id:'TRA-22', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — concession',
      passage:"The city's fourteen-day rainfall forecast is now accurate often enough that the water utility schedules reservoir releases around it, a practice that would have been unthinkable in 1995. %BLANK% the same model still misses the small, violent storms that build over the bay in August, and it was three days late on the flood that closed the river road last summer.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Therefore,', B:'To be sure,', C:'In the same way,', D:'Finally,'},
      correct:'B',
      expCorrect:"The first sentence credits the forecast; the second admits what it still gets wrong. Granting a limitation of the thing you just praised is concession.",
      expWrong:{
        A:"‘Therefore’ makes the missed storms an effect of the utility's trust in the model, and trusting a forecast does not cause it to fail.",
        C:"‘In the same way’ says the second sentence works like the first, but one reports the model succeeding and the other reports it failing.",
        D:"‘Finally’ marks the last item in a sequence, and the missed storms are not a later step: they are a limit on what came before."
      },
      tip:'Cover the blank: praise followed by an honest admission of a flaw is concession — To be sure, Admittedly, Granted.'
    },
    {
      id:'TRA-23', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — similarity',
      passage:"When a hospital in Ontario moved its hand-sanitizer dispensers off the wall beside each door and onto a stand in the path between the hallway and the bed, staff use nearly doubled without a single new poster or training session. %BLANK% a grocery chain that shifted its produce section from the back wall to the entrance found that shoppers bought more vegetables, though nothing about the vegetables had changed.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Even so,', B:'Because of this,', C:'Put differently,', D:'Likewise,'},
      correct:'D',
      expCorrect:"Two unrelated organizations moved an object into people's path and got more of the behavior they wanted. The second sentence is a parallel case of the principle in the first, so the relation is similarity.",
      expWrong:{
        A:"‘Even so’ signals that the second idea holds in spite of the first, but the grocery result agrees with the hospital result rather than resisting it.",
        B:"‘Because of this’ makes the grocery result an effect of the hospital's dispensers, and a hospital in Ontario did not cause a grocery chain's produce sales: the two are parallel, not linked.",
        C:"‘Put differently’ would mean the second sentence restates the first, yet it reports a new result in a different industry."
      },
      tip:'Cover the blank: a second, unrelated case that works the same way is similarity — Likewise, Similarly, In the same way — not cause and effect.'
    },
    {
      id:'TRA-24', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — sequence',
      passage:"The manuscript left Alexandria in 1798 in the baggage of a French officer who could not read a word of it, and for thirty years it sat in a private library outside Lyon, catalogued only as Eastern, bound in red. %BLANK% it was sold at auction to a collector in Manchester, who lent it to a philologist, who recognized on the third page a passage quoted in a letter written sixteen centuries earlier.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Similarly,', B:'In other words,', C:'Subsequently,', D:'Consequently,'},
      correct:'C',
      expCorrect:"The first sentence covers 1798 and the thirty quiet years that followed; the second covers what happened after that — the auction, the loan, the identification. Events in chronological order call for a sequence transition.",
      expWrong:{
        A:"‘Similarly’ pairs two cases of the same kind, and an auction in Manchester is not a second version of thirty years on a shelf: it is what came next.",
        B:"‘In other words’ restates the first sentence, but the sale, the loan, and the identification are all new events, not a rewording.",
        D:"‘Consequently’ would make the sale an effect of the mislabeled catalogue entry, and nothing in the first sentence caused the manuscript to be sold; it simply came later."
      },
      tip:'Cover the blank and ask whether the second sentence follows in TIME or follows as a RESULT. Merely later in time is sequence: Subsequently, Then, Later.'
    },
    {
      id:'TRA-25', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — contrast (defeated projection)',
      passage:"Every projection the state published in the 1990s had Corbin's population dropping below two thousand by 2010: the mill had closed in 1979, the rail depot a decade later, and the county's last two employers of any size were both hiring fewer people every year. %BLANK% the town has gained residents in fourteen of the last twenty years, and its school district opened two new classrooms in March.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Accordingly,', B:'Likewise,', C:'Nonetheless,', D:'For example,'},
      correct:'C',
      expCorrect:"The first sentence stacks up reasons to expect decline and a forecast of it; the second reports twenty years of growth. The second sentence contradicts what the first led you to expect, and contradicted expectation is contrast.",
      expWrong:{
        A:"‘Accordingly’ marks the expected consequence, and growth is the opposite of what a closed mill and a closed depot were supposed to produce. This is the trap: the first sentence is full of causes, so a causal word feels right until you check which way the numbers went.",
        B:"‘Likewise’ claims the second sentence runs the same way as the first, but the forecasts predicted loss and the town gained.",
        D:"‘For example’ would make fourteen years of growth an instance of those grim projections, and it is the evidence that undid them."
      },
      tip:'Cover the blank and compare DIRECTION, not vocabulary. A sentence packed with causes still needs a contrast word if the outcome went the other way: Nonetheless, Even so, However.'
    },
    {
      id:'TRA-26', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — cause and effect',
      passage:"Ice that forms on a lake over a single still night is nearly transparent, and a skater can look down through eight inches of it at the weeds on the bottom. Snow falling on that ice before it thickens changes the picture: the flakes trap air, and trapped air scatters light instead of letting it pass. %BLANK% the lake that looked like window glass on Tuesday is an opaque gray sheet by Friday, though not one degree of the cold has let up.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Consequently,', B:'However,', C:'Meanwhile,', D:'Granted,'},
      correct:'A',
      expCorrect:"The sentence before the blank explains the mechanism — trapped air scatters light — and the sentence after reports what that mechanism does to the lake by Friday. Mechanism first, observed result second, is cause and effect.",
      expWrong:{
        B:"‘However’ promises that the gray ice contradicts the sentence before it, but scattered light is exactly why the ice turns gray. The clause about the cold not letting up is what makes this tempting: it contrasts with the WEATHER, not with the explanation.",
        C:"‘Meanwhile’ marks a second event running alongside the first, and the gray sheet is not happening beside the scattering: it is what the scattering produces.",
        D:"‘Granted’ concedes a point that cuts against the writer, and the cloudy ice supports the explanation instead of weakening it."
      },
      tip:'Cover the blank and ignore any contrast buried inside the second sentence. What matters is the relation BETWEEN the two sentences: explanation then result is cause and effect.'
    },
    {
      id:'TRA-27', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — example (not addition)',
      passage:"Conservators at the archive have learned to distrust the word blue in a nineteenth-century shipping ledger, because the clerks writing those entries were naming whatever the dyer had sold them that month rather than a fixed color. %BLANK% the six bolts of Prussian blue listed on a single page of the 1846 book range, under a microscope, from a gray that reads almost green to a violet dark enough to pass for black.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Furthermore,', B:'For instance,', C:'As a result,', D:'Even so,'},
      correct:'B',
      expCorrect:"The first sentence claims the word blue is unreliable in these ledgers; the second gives one page of one ledger where six entries labeled blue turn out to be six different colors. That page is not a second claim, it is the evidence for the first, which makes the relation exemplification.",
      expWrong:{
        A:"‘Furthermore’ adds a second, independent point, and microscope readings of six bolts are not a new claim about the ledgers: they are the one page that shows the claim is true. This is the classic addition-for-example slip.",
        C:"‘As a result’ makes the range of shades an effect of the conservators' distrust, and those bolts were whatever colors they were in 1846, long before anyone distrusted the word.",
        D:"‘Even so’ signals something true in spite of the first sentence, and the six bolts are the strongest support the first sentence has."
      },
      tip:'Cover the blank and ask: is the second sentence a NEW point (addition) or the PROOF of the point just made (example)? Evidence for the same claim is always example: For instance, Specifically, Notably.'
    },
    {
      id:'TRA-28', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — restatement',
      passage:"The engineer who redesigned the Fenwick intersection describes her goal as legibility: a driver arriving at forty miles an hour should be able to tell, without stopping to think about it, which lane is hers and where the crossing pedestrians will be standing. %BLANK% the intersection has to be understood in the second and a half before anyone has time to read a sign.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'For example,', B:'In addition,', C:'Put another way,', D:'Subsequently,'},
      correct:'C',
      expCorrect:"The first sentence defines legibility as knowing your lane without thinking; the second says the same requirement in a different image — a second and a half, no time to read. No new fact appears, only the same idea reworded, so the relation is restatement.",
      expWrong:{
        A:"‘For example’ promises a concrete case — a named driver, a specific turn, a particular morning — and the second sentence gives none: it defines the term again in plainer language.",
        B:"‘In addition’ would stack a second requirement on the first, but there is only one requirement here, stated twice.",
        D:"‘Subsequently’ places the second sentence later in time, and nothing happens later: the same standard is being described again."
      },
      tip:'Cover the blank and check for NEW information. If the second sentence has none, it is restatement — Put another way, In other words, That is — no matter how vivid the rewording is.'
    },
    {
      id:'TRA-29', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — sequence (simultaneity)',
      passage:"The team boring the tunnel from the north side hit water at the four-hundred-meter mark and spent eleven weeks pumping and grouting before the face was dry enough to work again. %BLANK% the southern crew, cutting through shale that stayed dry the whole way, covered nine hundred meters and reached the halfway marker their schedule had promised them for the end of the year.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Consequently,', B:'For instance,', C:'Admittedly,', D:'Meanwhile,'},
      correct:'D',
      expCorrect:"Two crews are digging the same tunnel from opposite ends during the same months: one stalled by water, one moving fast through dry shale. Two efforts running at the same time in different places call for a transition of simultaneity.",
      expWrong:{
        A:"‘Consequently’ would make the southern crew's speed an effect of the northern flooding, but what let them move fast was dry shale, not someone else's delay. Two events in the same project are not automatically cause and effect.",
        B:"‘For instance’ makes the southern crew an example of the northern crew's trouble, and the southern crew had no trouble at all.",
        C:"‘Admittedly’ concedes a point against the writer's claim, and no claim is being made here: two teams are simply working at once."
      },
      tip:'Cover the blank: same time frame, different place, no causal link between them means Meanwhile or At the same time. Do not upgrade a coincidence into a cause.'
    },
    {
      id:'TRA-30', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — concession',
      passage:"The case for moving the bus depot to the edge of downtown rests on a number no one disputes: the sixty diesel buses idling on Third Street each morning put more particulate matter into the neighborhood's air than every other source there combined. %BLANK% the riders who would trade a five-minute walk for a transfer are the same riders least able to absorb an extra twenty minutes, and that objection is the one the plan has never answered.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Admittedly,', B:'Therefore,', C:'Similarly,', D:'Namely,'},
      correct:'A',
      expCorrect:"The first sentence gives the strongest argument for moving the depot; the second grants the cost that argument does not cover. A writer who states a case and then concedes what it leaves unanswered needs a concession transition.",
      expWrong:{
        B:"‘Therefore’ would make the riders' longer commute a consequence of the particulate reading, and a measurement does not cause a transfer: the transfer is the price of acting on the measurement, not its effect.",
        C:"‘Similarly’ pairs two things that run the same way, but the first sentence argues for the move and the second counts against it.",
        D:"‘Namely’ introduces the specific members of a group just mentioned, and the riders are not a subset of the buses or of the particulate sources."
      },
      tip:'Cover the blank: when a writer builds a case and then admits the cost of it, the relation is concession — Admittedly, Granted, To be sure — even when no contrast word appears anywhere in the sentence.'
    },
    {
      id:'TRA-31', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — addition',
      passage:"A landlord who replaces a building's windows can usually point straight to the heating bill, which in a Chicago three-flat falls by about a quarter the first winter and stays down after that. %BLANK% the new frames cut street noise enough that the units facing the avenue, historically the last to rent every spring, now go first — a change the owner never advertised and did not expect.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'For example,', B:'Moreover,', C:'Thus,', D:'In short,'},
      correct:'B',
      expCorrect:"The first sentence gives one payoff of new windows (a smaller heating bill); the second gives a second, unrelated payoff (quieter units that rent faster). Two different benefits of the same change stack up, which is addition.",
      expWrong:{
        A:"‘For example’ would make the quieter units a case of the lower heating bill, and heat and noise are two separate benefits of the same glass, not one inside the other.",
        C:"‘Thus’ makes the renting order an effect of the heating savings, but what quieted those units is the window, not the gas bill. Both effects share a cause; neither causes the other.",
        D:"‘In short’ announces a summary of what came before, and the second sentence introduces a benefit that was never mentioned."
      },
      tip:'Cover the blank: when two results share one cause but do not produce each other, the relation between them is addition — Moreover, Furthermore — not cause and effect.'
    },
    {
      id:'TRA-32', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — sequence (final step)',
      passage:"For two years the cooperative tried to keep both stores open. It trimmed the smaller store's hours, then its staff, then the produce case that had never paid for its own refrigeration, and each cut bought a quarter or two of survival without changing the arithmetic underneath. %BLANK% the members voted to close it and move everything salvageable, down to the shelving, into the store that had been carrying it all along.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In short,', B:'Ultimately,', C:'By comparison,', D:'For instance,'},
      correct:'B',
      expCorrect:"The first sentences narrate two years of partial measures; the second reports the decision that ended them. The blank needs the word that marks the last step of a sequence, not a word that repackages the steps already given.",
      expWrong:{
        A:"‘In short’ promises a compressed version of what was just said, and a vote to close the store is a new event, not the trimming summarized. This is the trap: a long list before the blank makes a summary word feel natural.",
        C:"‘By comparison’ sets two things side by side to be measured, and the vote is not being measured against the two years: it ends them.",
        D:"‘For instance’ makes the closing one more example of trimming, and shutting the store is where the trimming stopped, not an instance of it."
      },
      tip:'Cover the blank and ask whether the last sentence RETELLS the earlier ones (summary) or is the next and final thing that happened (sequence). A new event is always sequence: Ultimately, Finally, In the end.'
    },
    {
      id:'TRA-33', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — restatement',
      passage:"Insurers call a flood a hundred-year event when its chance of striking in any single year is one percent, a definition with almost nothing to do with the century sitting in the name. %BLANK% the phrase describes the odds on one roll of the dice rather than a spot on a calendar, and the dice are rolled again every January.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Consequently,', B:'For example,', C:'In other words,', D:'Nevertheless,'},
      correct:'C',
      expCorrect:"The first sentence defines the term as a one-percent annual chance; the second states that same definition as a metaphor — one roll of the dice per year. Nothing is added and nothing is derived, so the relation is restatement.",
      expWrong:{
        A:"‘Consequently’ would make the dice sentence something derived from the definition, but it is the definition itself in other words; there is no inference between them. A restatement can feel like a conclusion because it comes second, so check whether any new step was taken.",
        B:"‘For example’ promises a concrete case — a named river, a particular year, a town that flooded twice — and the second sentence gives none of that: it is the rule reworded.",
        D:"‘Nevertheless’ announces a contradiction, and the dice sentence agrees with the definition completely."
      },
      tip:'Cover the blank and ask whether the second sentence DERIVES anything. A vivid metaphor that adds no step is restatement: In other words, That is, Put simply.'
    },
    {
      id:'TRA-34', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — cause and effect',
      passage:"Paper birch seeds weigh about a tenth of a milligram and travel best over open ground, which is why birch is usually the first tree to appear on a burned hillside. Its seedlings, however, need more light than the shade of their own parents allows. %BLANK% a birch stand that colonized a fire scar in 1990 is already full of spruce saplings coming up underneath it, and in fifty years the hillside will be a spruce forest with a few tall birches left standing in it.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Accordingly,', B:'Even so,', C:'Meanwhile,', D:'Namely,'},
      correct:'A',
      expCorrect:"The sentence before the blank gives the limitation — birch seedlings cannot grow in birch shade — and the sentence after gives what that limitation produces: spruce taking over underneath. Limitation first, consequence second, is cause and effect.",
      expWrong:{
        B:"‘Even so’ would mean the spruce takes over in spite of the birch seedlings' need for light, and that need is precisely why the spruce can take over. The word however earlier in the passage is what makes this feel right; that contrast is already spent.",
        C:"‘Meanwhile’ marks a separate event running alongside the first, but the spruce understory is not happening beside the shade problem: it is the result of it.",
        D:"‘Namely’ introduces the specific members of a group just named, and spruce saplings are not examples of birch seedlings: they are the trees replacing them."
      },
      tip:'Cover the blank and note that a contrast word earlier in the passage does not decide your blank. Ask only what the sentence before the blank does to the sentence after it.'
    }
  ]
});
