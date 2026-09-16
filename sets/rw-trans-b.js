/* SAT Studio question set — Reading & Writing: Transitions — Set B (TRB-01 to TRB-34) */
/* 34 preguntas de la destreza oficial "Transitions" (Expression of Ideas).
   Reparto: 6 Fácil · 14 Media · 14 Difícil, y 6 de las Difícil van con
   extreme:true.

   La diferencia con rw-trans-a: allá cada pregunta traía UNA sola opción de la
   familia correcta. Acá, en 21 de las 34 (las seis Fácil se dejaron a propósito
   con una sola, de rampa), hay DOS o TRES opciones de la familia del acierto y
   hay que decidir cuál encaja — y la casi-correcta siempre falla por una razón
   con nombre, no por sonar peor:
     · By contrast / Nevertheless — comparar dos sujetos contra persistir a pesar de un obstáculo.
     · As a result / In turn — el efecto directo contra el siguiente eslabón de una cadena.
     · Specifically / For instance — identificar la única cosa contra elegir un caso entre varios.
     · Namely / For example — nombrar el conjunto entero contra nombrar un miembro.
     · Moreover / Similarly — un segundo beneficio del MISMO sujeto contra un caso paralelo de otro.
     · In fact / Moreover — la misma afirmación más fuerte contra una afirmación distinta.
     · In other words / In short — reformular (acá más largo) contra resumir.
     · Meanwhile / Subsequently / Previously — simultáneo, posterior y anterior.
     · Instead / By contrast — sustituir lo rechazado contra comparar dos partes.
     · As a result / Accordingly — un número medido contra una decisión deliberada.

   A propósito NO se enfrentan sinónimos exactos (however/nevertheless en un caso
   concesivo, therefore/thus, admittedly/granted, in other words/that is): ahí las
   dos son defendibles y la pregunta estaría rota, no difícil. Por eso las
   preguntas de concesión llevan distractores de otras familias.

   Además, seis preguntas son del caso que más se falla: dos oraciones que hablan
   de lo mismo y que por eso PARECEN sumarse, cuando en realidad se oponen
   (TRB-14, TRB-21, TRB-26, TRB-29) o cuando la segunda es el efecto de la
   primera aunque el pasaje traiga un "while" o un "pero" adentro (TRB-22,
   TRB-34). */
window.SAT_SETS.push({
  id: 'rw-trans-b',
  title: 'Transitions — Set B',
  section: 'rw',
  level: 'Difícil',
  description: 'Thirty-four passages in which two of the four transitions come from the same family, so the answer turns on which shade of the relationship the text actually calls for.',
  minutes: 34,
  questions: [
    {
      id:'TRB-01', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — addition',
      passage:"The volunteers who stock the community fridge on Wilkes Avenue check it twice a day and write down everything that goes in, so the block knows what is likely to be there by dinnertime. %BLANK% they have talked four restaurants on the corner into donating the trays of prepared food that used to go into the dumpster at closing time.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Nevertheless,', B:'For example,', C:'In addition,', D:'In summary,'},
      correct:'C',
      expCorrect:"The first sentence names one thing the volunteers do — stock the fridge and keep a public record of it. The second names a second, different thing they do: bring in restaurant donations. A new item of the same kind piled on the first one is addition.",
      expWrong:{
        A:"‘Nevertheless’ says the second sentence holds in spite of the first, but both describe the same volunteers making the fridge work; there is no obstacle for anything to survive.",
        B:"‘For example’ would make the restaurant donations a case of checking and logging the fridge, and talking a kitchen into giving away its trays is a separate job, not an instance of record-keeping.",
        D:"‘In summary’ promises a wrap-up of what came before, and the second sentence brings in four restaurants that were never mentioned."
      },
      tip:'Cover the blank and say the relationship out loud before you look at the options. A second, different thing of the same kind is addition: In addition, Moreover, Furthermore.'
    },
    {
      id:'TRB-02', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — contrast',
      passage:"Most of the fire lookout towers the state built in the 1930s were shut down once aircraft and satellites took over the job of spotting smoke, and dozens of them were dismantled for scrap. %BLANK% the tower on Kettle Ridge has been staffed every summer since it opened, because the ridge sits in a pocket where radio signals die and a person with binoculars still sees what nothing else does.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'By contrast,', B:'Therefore,', C:'Likewise,', D:'For instance,'},
      correct:'A',
      expCorrect:"The first sentence says the towers were shut down and scrapped; the second says one tower has been staffed every summer since it opened. Two groups of towers behaving in opposite ways is contrast.",
      expWrong:{
        B:"‘Therefore’ marks a consequence, but Kettle Ridge staying open is not something the closures produced; it is the case that runs the other way.",
        C:"‘Likewise’ claims the second sentence matches the first, and one tower still working is the opposite of dozens dismantled for scrap.",
        D:"‘For instance’ would make Kettle Ridge an example of the towers that were abandoned, and it is precisely the tower that was not."
      },
      tip:'Cover the blank and ask which way the second sentence points. Two cases going opposite ways is contrast: By contrast, However, On the other hand.'
    },
    {
      id:'TRB-03', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — cause and effect',
      passage:"A cheese cave has to hold within two degrees of fifty-four Fahrenheit: warmer and the rind cracks, cooler and the paste never ripens. The cave under the Thibault farm is cut forty feet into a hillside, where the rock keeps last winter's temperature all year. %BLANK% the cheesemakers have never run a compressor, and their electric bill in August is the same as their bill in February.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Even so,', B:'Similarly,', C:'For instance,', D:'As a result,'},
      correct:'D',
      expCorrect:"The sentence before the blank explains why the cave holds its temperature on its own: forty feet of rock. The sentence after gives what follows from that — no compressor, and a flat electric bill. Cause first, outcome second.",
      expWrong:{
        A:"‘Even so’ would mean they skip the compressor in spite of the hillside, and the hillside is exactly why they can skip it.",
        B:"‘Similarly’ pairs two cases of the same kind, and an electric bill is not a second version of a cave cut into rock: it is what that cave makes possible.",
        C:"‘For instance’ would make the flat bill an example of digging into a hillside, and a bill is not a kind of excavation."
      },
      tip:'Cover the blank and ask whether the first sentence explains WHY the second is true. If it does, the relation is cause and effect: As a result, Therefore, Consequently.'
    },
    {
      id:'TRB-04', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — example',
      passage:"A hand-lettered shop sign records information its painter never meant to preserve. %BLANK% the gold-leaf lettering on a pharmacy window in Bellaire still gives a five-digit telephone number, a style the local exchange abandoned in 1957, which dates the glass more precisely than any receipt in the store's own files.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Instead,', B:'For example,', C:'Consequently,', D:'Nonetheless,'},
      correct:'B',
      expCorrect:"The first sentence makes a general claim about hand-lettered signs; the second hands you one window in Bellaire as a case of it. A general statement followed by a single case is exemplification.",
      expWrong:{
        A:"‘Instead’ swaps one thing for another, and the pharmacy window does not replace the general claim: it supports it.",
        C:"‘Consequently’ marks an effect, and a five-digit number painted in the 1950s was not caused by the general habit of signs recording more than they mean to.",
        D:"‘Nonetheless’ signals something true in spite of what came before, and the window agrees with the first sentence instead of resisting it."
      },
      tip:'Cover the blank: if the second sentence is one concrete case of the claim just made, the relation is example: For example, For instance, To illustrate.'
    },
    {
      id:'TRB-05', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — sequence',
      passage:"To marble a sheet of paper, you begin by floating drops of oil paint on a tray of thickened water and combing them into the pattern you want. %BLANK% you lower the paper flat onto the surface, hold it there for a count of three, lift it from one corner, and rinse the loose color off under a tap.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In contrast,', B:'For instance,', C:'In short,', D:'Next,'},
      correct:'D',
      expCorrect:"The first sentence gives the opening step of a process — float the paint, comb the pattern. The second gives the step that comes right after it. Steps in order call for a sequence transition.",
      expWrong:{
        A:"‘In contrast’ sets two things against each other, but laying the paper down does not oppose combing the paint: it follows it.",
        B:"‘For instance’ makes the second sentence a case of the first, and lowering the sheet is not a kind of combing.",
        C:"‘In short’ announces a summary, and the second sentence adds four new actions instead of compressing the first."
      },
      tip:'Cover the blank and ask whether the two sentences are steps in a process. If they are, you need sequence: Next, Then, After that, Finally.'
    },
    {
      id:'TRB-06', type:'mc', domain:'Expression of Ideas', difficulty:'Fácil',
      skill:'Transitions — restatement',
      passage:"Forecasters call the balloon they send up twice a day a sounding, and the word tells a newcomer almost nothing about what is happening. %BLANK% a small instrument package rides a hydrogen balloon up through the atmosphere and radios back the temperature, the humidity, and the wind at every height it passes on its way to twenty miles up.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In other words,', B:'Meanwhile,', C:'As a result,', D:'However,'},
      correct:'A',
      expCorrect:"The first sentence drops a technical word, ‘sounding’, and admits it explains nothing. The second says what the word means in plain language. One idea delivered twice, the second time more simply, is restatement.",
      expWrong:{
        B:"‘Meanwhile’ points to something happening at the same time somewhere else, and there is no second scene here: one thing is being described again.",
        C:"‘As a result’ would make the plain-language version an effect of the word being unhelpful, and a definition is not caused by confusion; it clears it up.",
        D:"‘However’ promises a contradiction, and the second sentence agrees with the first completely — it only unpacks the term."
      },
      tip:'Cover the blank: if the second sentence says the same thing in easier words and adds no new facts, the relation is restatement: In other words, That is, Put simply.'
    },
    {
      id:'TRB-07', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — contrast (comparison, not persistence)',
      passage:"The fireflies that gather along the Nolichuck each June flash in unison, a whole hillside going dark and bright together for hours at a stretch. %BLANK% the closely related species that lives two valleys east flashes at no fixed interval at all, and a photographer who waits there for a pattern will wait until the season ends.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Nevertheless,', B:'Consequently,', C:'By contrast,', D:'Specifically,'},
      correct:'C',
      expCorrect:"The first sentence describes one species flashing in unison; the second describes a related species flashing at random. Two parallel subjects measured on the same scale — timing — and coming out opposite is comparison, which is what ‘By contrast’ marks.",
      expWrong:{
        A:"‘Nevertheless’ is the near miss. It means the second fact holds IN SPITE OF the first, and that needs an obstacle: nothing about the synchrony on the Nolichuck stands in the way of the eastern fireflies, and their randomness is not surviving anything. The two are simply being set side by side.",
        B:"‘Consequently’ marks an effect, and one hillside's flashing did not produce another species' timing two valleys away.",
        D:"‘Specifically’ narrows to a detail of the claim just made, but the eastern species contradicts that claim rather than sharpening it."
      },
      tip:'Two contrast words are not interchangeable. Nevertheless needs something to be overcome; By contrast only needs two things compared. No obstacle, no “nevertheless”.'
    },
    {
      id:'TRB-08', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — cause and effect (direct effect, not a chain link)',
      passage:"Cold water holds far more dissolved oxygen than warm water: a stream at forty degrees carries nearly twice what the same stream carries at eighty. %BLANK% the trout in the upper Wissahickon spend August crowded into the two hundred yards below the spring, where the water never climbs out of the fifties even in a heat wave.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In turn,', B:'Meanwhile,', C:'Admittedly,', D:'As a result,'},
      correct:'D',
      expCorrect:"The first sentence states a physical rule — cold water carries more oxygen. The second gives what that rule forces the trout to do every August. Rule first, consequence second, is cause and effect.",
      expWrong:{
        A:"‘In turn’ is the near miss. It marks the NEXT link in a chain: A affects B, and B in turn affects C, so it needs an earlier effect for this one to follow. The first sentence is a property of water that nothing in the passage caused; there is no previous link, so there is no “in turn”.",
        B:"‘Meanwhile’ marks a separate event running at the same time, and the crowding is not happening beside the oxygen rule: it is produced by it.",
        C:"‘Admittedly’ concedes a point that cuts against the writer, and nothing is being argued here — a fact about water is being applied."
      },
      tip:'Before you write “in turn”, find the earlier effect it is supposed to follow. If the sentence before the blank is where the causation starts, you want As a result or Therefore.'
    },
    {
      id:'TRB-09', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — precision (identifying the one thing)',
      passage:"The 1911 charter that created the Wren Valley water district runs to eleven pages, and for a century exactly one sentence in it has mattered. %BLANK% the charter forbids the district to sell a drop outside the two townships that paid for the first reservoir, a line three developers have tried and failed to have struck since 1998.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Specifically,', B:'For instance,', C:'Even so,', D:'Meanwhile,'},
      correct:'A',
      expCorrect:"The first sentence says exactly one sentence of the charter has mattered; the second tells you which one it is. Naming the single thing the previous sentence pointed at is precision.",
      expWrong:{
        B:"‘For instance’ is the near miss. It offers one case drawn from several possible ones, and the first sentence has already closed that door: there is exactly one sentence that matters, so the clause about the two townships is not one example among many — it is the thing itself.",
        C:"‘Even so’ signals a contradiction, and the second sentence delivers exactly what the first promised.",
        D:"‘Meanwhile’ points to something happening at the same time elsewhere, and nothing else is going on: one document is being read."
      },
      tip:'Count first. If the previous sentence says “one”, the blank identifies it (Specifically, Namely). If it says “several”, the blank can illustrate it (For instance).'
    },
    {
      id:'TRB-10', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — addition (same subject, not a parallel case)',
      passage:"The floor the roller rink laid down in 2022 is maple over a sprung subframe, and the skaters who complained for years about their knees stopped complaining by the third session on it. %BLANK% the surface takes a polish the old composite would never hold, so the rink now books weddings on the two nights a week it used to sit dark.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Similarly,', B:'Moreover,', C:'Therefore,', D:'In other words,'},
      correct:'B',
      expCorrect:"The first sentence gives one payoff of the new floor — easier on the knees. The second gives a second, different payoff of that same floor — it shines, so the rink rents out dark nights. Two separate advantages of one thing stack up, which is addition.",
      expWrong:{
        A:"‘Similarly’ is the near miss. It claims the second sentence is a parallel case — a different subject behaving the way the first one does — and there is only one floor here. A polish is not a second version of a sprung subframe; it is another thing the same floor does.",
        C:"‘Therefore’ would make the wedding bookings an effect of the skaters' knees, and what makes the floor shine is the maple, not anyone's comfort.",
        D:"‘In other words’ restates the first sentence, and the polish and the weddings are new facts, not the knees reworded."
      },
      tip:'Similarly needs TWO subjects. If the second sentence is still about the same thing, the relation is addition: Moreover, Furthermore, In addition.'
    },
    {
      id:'TRB-11', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — restatement (not summary)',
      passage:"Hydrologists describe the gravel bar below the Kemmer dam as sediment-starved, a phrase the fishing guides on that stretch have learned to dread. %BLANK% the dam catches every grain of sand and cobble the river used to carry downstream, so the water that leaves it arrives hungry and takes what it needs from the banks and the bed until the bar is gone.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In short,', B:'Consequently,', C:'Granted,', D:'In other words,'},
      correct:'D',
      expCorrect:"The first sentence gives a two-word technical term, ‘sediment-starved’. The second gives that same term in plain language, at length. No new fact and no new step appear, only the same idea reworded, which is restatement.",
      expWrong:{
        A:"‘In short’ is the near miss. It promises a briefer version of what came before, and what follows the blank is three times longer than the phrase it explains. The move here is unpacking, not compressing.",
        B:"‘Consequently’ would make the second sentence something derived from the first, and nothing is derived: the term is defined, not applied.",
        C:"‘Granted’ concedes a point that works against the writer, and the explanation supports the phrase instead of qualifying it."
      },
      tip:'In short goes from long to short. In other words goes from opaque to clear, and can easily run longer. Check which direction the sentence actually moves.'
    },
    {
      id:'TRB-12', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — sequence (simultaneity, not sequence)',
      passage:"For eight weeks last spring the organ in the Brayton chapel stood in pieces, its two thousand pipes laid out on padded tables in the parish hall while a technician cleaned and revoiced them one at a time. %BLANK% the carpenters were rebuilding the wind chest those pipes would sit on, a job that had to be finished by the same Friday or the reassembly would slip past Easter.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Subsequently,', B:'For instance,', C:'Meanwhile,', D:'Even so,'},
      correct:'C',
      expCorrect:"Two crews are working on the same organ: a technician cleaning pipes in the parish hall, carpenters rebuilding the wind chest. Both jobs had to be done by the same Friday, so they were running at once, and things happening at the same time in different places call for a transition of simultaneity.",
      expWrong:{
        A:"‘Subsequently’ is the near miss. It puts the carpentry AFTER the eight weeks of cleaning, and the deadline sentence rules that out: both jobs had to land on the same Friday, which is only possible if they overlapped.",
        B:"‘For instance’ makes the carpentry a case of cleaning pipes, and rebuilding a wind chest is a different trade.",
        D:"‘Even so’ signals that the second fact holds in spite of the first, and nothing about cleaning pipes stood in the carpenters' way."
      },
      tip:'Look for a shared deadline or a shared stretch of time. Overlapping work is Meanwhile or At the same time; Subsequently means the second thing started after the first one ended.'
    },
    {
      id:'TRB-13', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — concession',
      passage:"The oyster reef the trust rebuilt at the mouth of the Sawyer has done what the grant promised: water clarity at the channel marker has doubled, and three fish species that had not been netted there since the 1980s turned up in last fall's survey. %BLANK% the reef sits where the crabbers used to set their pots, and nobody has offered those eight boats anywhere else to work.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'To be sure,', B:'After all,', C:'Consequently,', D:'Namely,'},
      correct:'A',
      expCorrect:"The first sentence lists what the reef achieved; the second admits a real cost the achievement does not cover. Granting a point that works against the case you are making is concession.",
      expWrong:{
        B:"‘After all’ is the near miss. It introduces a REASON that backs up the claim just made — “of course it worked, after all the site was ideal”. Eight crab boats with nowhere to go is not a reason the reef succeeded; it is the price of that success, and it pulls the other way.",
        C:"‘Consequently’ would make the lost crabbing grounds an effect of the clearer water and the returning fish, and no survey of fish ever moved a boat off its ground.",
        D:"‘Namely’ identifies the specific members of something just mentioned, and the crabbers are not among the three fish species or the clarity readings."
      },
      tip:'After all supports what you just said; To be sure, Admittedly and Granted undercut it. Ask which direction the new sentence pushes before you pick.'
    },
    {
      id:'TRB-14', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — contrast (defeated assumption)',
      passage:"Everyone assumed the two stairwell murals came from the same hand: they hang forty feet apart in one building, they were commissioned in the same year, and both are signed with the initials R. M. %BLANK% the pigment analysis published in March puts one of them thirty years later than the other, and the initials turn out to belong to a father and a son.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Conversely,', B:'However,', C:'Likewise,', D:'As a result,'},
      correct:'B',
      expCorrect:"The first sentence stacks up three reasons to believe one painter made both murals; the second reports a lab result that breaks the belief apart. When the second sentence defeats the expectation the first one built, the relation is contrast.",
      expWrong:{
        A:"‘Conversely’ is the near miss. It promises the same relation running backwards — the inverse case, the mirror image. A pigment date is not the inverse of an assumption about authorship; it is evidence that the assumption was wrong, which is plain contradiction, not inversion.",
        C:"‘Likewise’ claims the second sentence runs the same way as the first, and the first builds the case for one painter while the second takes it apart.",
        D:"‘As a result’ would make the lab finding an effect of what everyone assumed, and nothing anyone believed changed what is in the paint."
      },
      tip:'Three facts pointing one way do not make the fourth one agree. Read the second sentence for its direction, not for its topic.'
    },
    {
      id:'TRB-15', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — cause and effect (measured outcome, not a decision)',
      passage:"Snowplow drivers in Ashfield used to guess at which hydrants they had buried, and the fire company lost minutes digging on the worst nights of the year. Last winter the town bolted a reflective mast to each of its four hundred hydrants and gave every plow crew a map of them. %BLANK% the average time from arrival to water on the ground fell from four minutes to under two.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Accordingly,', B:'Meanwhile,', C:'In other words,', D:'As a result,'},
      correct:'D',
      expCorrect:"The sentence before the blank reports the change — masts on every hydrant, maps for every crew. The sentence after reports what that change produced: response times cut in half. An outcome produced by the action just described is cause and effect.",
      expWrong:{
        A:"‘Accordingly’ is the near miss. It marks a deliberate action taken to fit the situation just described — a rule followed, a plan adjusted, an order given. What follows the blank is a stopwatch reading, and a measured drop in response time is not a decision anyone made in accordance with the map.",
        B:"‘Meanwhile’ marks a second event running alongside the first, and the faster times are the product of the masts, not something happening beside them.",
        C:"‘In other words’ restates the previous sentence, and the timing figures are new information rather than the masts described again."
      },
      tip:'Accordingly needs somebody who decided something. If the sentence after the blank is a number that moved, use As a result or Consequently.'
    },
    {
      id:'TRB-16', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — intensification of the same claim',
      passage:"The seed library that opened in the basement of the Prentiss branch in 2016 — a shelf of paper envelopes, a card box, and a hand-lettered sign asking borrowers to return twice what they took — is busy. %BLANK% it circulates more packets every spring than the branch's entire film collection circulates in a year, and the staff have moved it upstairs twice for shelf space.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Moreover,', B:'Nevertheless,', C:'In fact,', D:'Meanwhile,'},
      correct:'C',
      expCorrect:"The first sentence ends on a modest word: the seed library ‘is busy’. The second says how busy, in a figure strong enough to surprise. The same claim restated at full strength is intensification, and ‘In fact’ is the transition that does it.",
      expWrong:{
        A:"‘Moreover’ is the near miss. It adds a SECOND, independent point, and the circulation figure is not a new claim about the seed library: it is the one claim already made — that it is busy — sharpened into a number.",
        B:"‘Nevertheless’ announces something true in spite of the first sentence, and the figure confirms the first sentence rather than resisting it.",
        D:"‘Meanwhile’ points to something else going on at the same time, and there is no second scene: one collection is being described twice."
      },
      tip:'Ask whether the second sentence is a different point or the same point turned up. Same point, more force, is In fact or Indeed — not Moreover.'
    },
    {
      id:'TRB-17', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — example (one member of a list)',
      passage:"The lease the artists signed on the old grain elevator bars them from six kinds of work inside the silos, and the list reads like a history of everything that has ever gone wrong in the building. %BLANK% welding is forbidden, a rule that dates to a fire in 1994 that took out the conveyor and two floors of the head house.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'For example,', B:'Namely,', C:'Therefore,', D:'Even so,'},
      correct:'A',
      expCorrect:"The first sentence says the lease bans six kinds of work; the second names one of them and explains where that ban came from. One member pulled out of a group just counted is exemplification.",
      expWrong:{
        B:"‘Namely’ is the near miss. It promises to identify everything the previous sentence referred to, so after ‘six kinds of work’ it would have to list all six. Welding is one of them, which makes it an example of the list, not the list itself.",
        C:"‘Therefore’ marks a consequence, and the welding ban is not caused by the lease having six prohibitions: it is one of them.",
        D:"‘Even so’ signals something true in spite of what came before, and the welding rule fits the description of the list perfectly."
      },
      tip:'Namely is exhaustive: it has to account for everything the sentence before it counted. Name one out of six and you need For example.'
    },
    {
      id:'TRB-18', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — contrast (substitution)',
      passage:"The restorers did not strip the courthouse clock's dial and repaint it, though three of the five bids they received proposed exactly that. %BLANK% they washed a century of coal soot off the original paint with cotton swabs and left the two chips above the numeral four exactly where they were.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'By contrast,', B:'Instead,', C:'Furthermore,', D:'That is,'},
      correct:'B',
      expCorrect:"The first sentence says what the restorers did NOT do — strip and repaint. The second says what they did in its place. When the second sentence names the option taken in place of the rejected one, the relation is substitution.",
      expWrong:{
        A:"‘By contrast’ is the near miss. It sets two different subjects side by side to be compared, and there is only one crew here. The second sentence is not a second party doing something different; it is the same crew's replacement for the option it turned down.",
        C:"‘Furthermore’ stacks a second point on the first, and washing the dial is not an additional action alongside stripping it: it is the alternative to it.",
        D:"‘That is’ restates the previous sentence, and a description of what the restorers actually did is new information, not the refusal reworded."
      },
      tip:'Instead needs a rejected option in the sentence before it. Look for a “did not”, a “rather than”, or a plan that fell through; without one, you want a comparison word.'
    },
    {
      id:'TRB-19', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — similarity (parallel case)',
      passage:"When the Kestrel Street school moved its start time from 7:25 to 8:20, the nurse's log recorded a third fewer students sent to her office before noon with headaches and stomachaches. %BLANK% a district in the next county that pushed its middle-school bell back by fifty minutes watched first-period absences drop by a quarter within one semester.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Consequently,', B:'For this reason,', C:'In other words,', D:'Likewise,'},
      correct:'D',
      expCorrect:"Two different schools pushed their start times later and both saw a measure of student trouble fall. The second sentence is a parallel case of the principle in the first, which is similarity.",
      expWrong:{
        A:"‘Consequently’ would make the neighboring district's absences an effect of the Kestrel Street nurse's log, and one school's records do not act on another county's attendance.",
        B:"‘For this reason’ has the same problem and states it more strongly: it says the second district's results happened BECAUSE of the first school's, and the two are independent.",
        C:"‘In other words’ restates the first sentence, and a different district, a different measure and a different number are new information."
      },
      tip:'Two organizations that never touched each other cannot be cause and effect. A second case that works the same way is Likewise or Similarly.'
    },
    {
      id:'TRB-20', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions — sequence (earlier in time)',
      passage:"The stone bridge at Coldwater has carried two lanes of traffic since the county widened its deck in 1959. %BLANK% it carried a single track of the interurban line, and the trolley rails are still down there under the asphalt, which is why the crew resurfacing the bridge in June hit steel where the plans showed gravel.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Meanwhile,', B:'Subsequently,', C:'Previously,', D:'Similarly,'},
      correct:'C',
      expCorrect:"The first sentence covers the bridge from 1959 to today; the second covers what the bridge carried before the county widened it. The blank points backward in time, so it needs a transition that marks an earlier period.",
      expWrong:{
        A:"‘Meanwhile’ would put the trolley track on the bridge at the same time as the two lanes of traffic, and the passage has the rails buried under the asphalt the widening laid down.",
        B:"‘Subsequently’ runs the clock the wrong way: it would place the single trolley track after 1959, when the deck was already carrying two lanes of cars.",
        D:"‘Similarly’ claims the two sentences are parallel cases, and one bridge in two different eras is a sequence, not a comparison of two bridges."
      },
      tip:'Time transitions have a direction. Previously and Earlier point back; Subsequently and Later point forward; Meanwhile stands still. Fix the dates before you choose.'
    },
    {
      id:'TRB-21', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — contrast (comparison, not persistence)',
      passage:"Enrollment in the credit union's savings-match program tripled at the Ridgely branch within four months, and the tellers there now offer it to every new member at the counter. %BLANK% the Falls Road branch, four miles away and with a membership the auditors call statistically indistinguishable, has signed up eleven people in a year and a half.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'By contrast,', B:'Even so,', C:'Accordingly,', D:'Specifically,'},
      correct:'A',
      expCorrect:"One branch tripled its enrollment; a nearly identical branch four miles away has signed up eleven people. Two comparable subjects running the same program and coming out opposite is a comparison, and ‘By contrast’ is the transition that asks the reader to weigh one against the other.",
      expWrong:{
        B:"‘Even so’ is the near miss, and it is tempting because the two branches really do clash. But ‘even so’ means the second fact holds in spite of the first, as if Ridgely's success were an obstacle Falls Road had to survive. One branch's sign-ups do not stand in the other's way; nothing is being overcome, so there is nothing for ‘even so’ to concede.",
        C:"‘Accordingly’ would make Falls Road's eleven members a response to Ridgely's boom, and a branch does not sign up fewer people because another branch signed up more.",
        D:"‘Specifically’ narrows to a detail of the claim just made, and Falls Road is not a detail of Ridgely's enrollment: it is the other half of the comparison."
      },
      tip:'Ask whether anything in the first sentence obstructs the second. Two results sitting side by side is By contrast; a result that survives an obstacle is Even so.'
    },
    {
      id:'TRB-22', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — cause and effect',
      passage:"A cedar shingle splits along the grain as it dries, and a roofer who drives two nails near its butt end gives the wood two fixed points to pull against. The shingles on the Harkness barn were hung with a single nail set high, where the next course covers the head. %BLANK% a roof laid in 1948 and never coated with anything has lost eleven shingles in seventy-eight years, while the asphalt lean-to added in 1994 has been stripped bare twice.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'However,', B:'As a result,', C:'In turn,', D:'Similarly,'},
      correct:'B',
      expCorrect:"The sentence before the blank says the Harkness shingles were hung with one nail, which by the rule in the first sentence leaves the wood free to move instead of splitting. The sentence after gives what that nailing produced: seventy-eight years and eleven lost shingles. Method first, result second, is cause and effect.",
      expWrong:{
        A:"‘However’ is the trap the second sentence sets. It carries a contrast inside it — the old cedar roof against the newer asphalt one — and that contrast belongs to the two roofs, not to the two sentences. Between the sentences there is no opposition at all: the single nail is exactly why the cedar has lasted.",
        C:"‘In turn’ marks the next link in a chain of effects, so it needs the sentence before it to be an effect of something already described. A roofer's choice of one nail is where this chain starts, not a step passed along from somewhere earlier.",
        D:"‘Similarly’ pairs two cases of the same kind, and a survival record is not a second version of a nailing pattern: it is what that pattern produced."
      },
      tip:'A contrast INSIDE the second sentence does not set the relation between the sentences. Cover everything after the comma and ask again what the blank has to join.'
    },
    {
      id:'TRB-23', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — contrast (weighing a second option)',
      passage:"Restorers of the Pell Street mosaic have to decide what to do with the twenty square feet where the tesserae are simply gone. Filling the holes with matched glass makes the floor whole again and makes the modern repair invisible to anyone standing on it. %BLANK% leaving the gaps as bare mortar tells a visitor exactly how much of what they are looking at is Roman, at the price of a floor nobody would call beautiful.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Instead,', B:'Moreover,', C:'For instance,', D:'On the other hand,'},
      correct:'D',
      expCorrect:"The passage sets up a decision and then presents the two options in turn: fill the gaps with glass, or leave them as mortar. The blank has to introduce the second option as a rival to the first, which is what ‘On the other hand’ does.",
      expWrong:{
        A:"‘Instead’ is the near miss. It requires the first option to be off the table — rejected, abandoned, replaced. The restorers have not chosen anything yet; both approaches are still live, and the blank weighs the second against the first rather than substituting for it.",
        B:"‘Moreover’ stacks a second point that agrees with the first, and bare mortar is the rival of matched glass, not a further argument for it.",
        C:"‘For instance’ would make bare mortar a case of filling the holes with matched glass, and it is the opposite choice."
      },
      tip:'Instead reports a decision already made. On the other hand presents an alternative still being considered. Check whether anyone has chosen yet.'
    },
    {
      id:'TRB-24', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — restatement',
      passage:"Epidemiologists tracking a slow outbreak talk about the serial interval, the average gap between the day one person's symptoms begin and the day the person that patient infected shows theirs. %BLANK% it is not how long the illness lasts, and not how long the illness takes to appear; it is how far apart two linked cases sit on a calendar.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In practice,', B:'For instance,', C:'In other words,', D:'Consequently,'},
      correct:'C',
      expCorrect:"The first sentence defines the serial interval; the second says the same definition again, this time by ruling out the two things people confuse it with. Nothing is added and nothing is derived — the same idea is delivered twice — so the relation is restatement.",
      expWrong:{
        A:"‘In practice’ is the near miss. It promises a gap between the definition and what actually happens on the ground: how the interval is estimated in a real outbreak, where the estimate goes wrong, what field workers do about it. The sentence after the blank never leaves the definition.",
        B:"‘For instance’ promises a concrete case — a named pathogen, a pair of dated cases, one household — and the second sentence gives none of that.",
        D:"‘Consequently’ would make the second sentence something derived from the first, and no step is taken between them. A restatement can feel like a conclusion because it comes second, so check whether any new move was made."
      },
      tip:'Check for new information before you pick a conclusion word. A definition stated twice, once positively and once by exclusion, is still one idea: In other words, That is.'
    },
    {
      id:'TRB-25', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — cause and effect (not mere sequence)',
      passage:"The fish ladder that opened at the Cowen dam in 2016 put river herring back above it for the first time since 1912, and by 2018 the shallows behind the dam were thick with them every May. Osprey will take herring in preference to nearly anything else they can carry. %BLANK% the six nests on the reservoir, which had fledged an average of two chicks apiece through the 2000s, fledged four in 2019 and four again in 2020.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Consequently,', B:'Subsequently,', C:'Meanwhile,', D:'Granted,'},
      correct:'A',
      expCorrect:"The sentence before the blank supplies the mechanism — osprey prefer herring — and the reservoir had just filled with herring. The sentence after reports what that combination produced: four chicks a nest instead of two. Mechanism first, measured result second, is cause and effect.",
      expWrong:{
        B:"‘Subsequently’ is the near miss. It says only that the second thing came later, and it cannot even do that here: the sentence before the blank is a standing fact about what osprey eat, not a dated event, and nothing can be “subsequent” to a timeless habit.",
        C:"‘Meanwhile’ would set the fledging counts beside the osprey's diet as two things going on at once, and a preference for herring is not an event running alongside anything: it is the reason the counts moved.",
        D:"‘Granted’ concedes a point that cuts against the writer, and doubled broods support the account of the fish ladder rather than weakening it."
      },
      tip:'If the sentence before the blank is a general truth rather than an event, no time word can attach to it. What it can do is explain, so the blank is causal.'
    },
    {
      id:'TRB-26', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — contrast (comparison, not persistence)',
      passage:"The Dunmore and Villiers bird collections were assembled in the same decade by two amateurs who wrote to each other for years, and the university that holds both keeps them in one corridor, in the same style of glass-fronted case. Every skin Dunmore prepared carries a label giving the date, the county, and the elevation where the bird was taken. %BLANK% four hundred of the Villiers labels read only ‘Africa’, and two hundred more say nothing at all.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Likewise,', B:'Nevertheless,', C:'In turn,', D:'By contrast,'},
      correct:'D',
      expCorrect:"The sentence before the blank describes Dunmore's labels, which record date, county and elevation. The sentence after describes Villiers's labels, which record almost nothing. Two collectors compared on the same measure and coming out opposite is contrast.",
      expWrong:{
        A:"‘Likewise’ is the trap the opening builds: one decade, two friends, one corridor, identical cases. But the blank does not join the collections' shared history — it joins Dunmore's full labels to Villiers's empty ones, and those are opposites. A shared background is not a shared practice.",
        B:"‘Nevertheless’ would mean the Villiers labels are blank in spite of Dunmore's being complete, as if one man's care were an obstacle the other's carelessness had to survive. Nothing is being overcome here; two practices are being set side by side.",
        C:"‘In turn’ marks the next link in a chain of effects, and Villiers's empty labels are not caused by Dunmore's careful ones: the two men worked separately."
      },
      tip:'Sentences can share every detail of their setting and still oppose each other. Match the transition to what the two sentences CLAIM, never to how similar their subjects look.'
    },
    {
      id:'TRB-27', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — sequence (simultaneity)',
      passage:"The Marchesa went down in ninety feet of water in 1893 carrying a cargo her manifest describes only as bar stock and sundries, and a team from the maritime museum spent the summers of 2021 and 2022 photographing every square metre of the hull. %BLANK% an archivist in Genoa was working through the shipping agent's letter book and found a list of everything that went into the hold — a document the divers heard about only when they surfaced that September.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Subsequently,', B:'Meanwhile,', C:'Previously,', D:'Consequently,'},
      correct:'B',
      expCorrect:"Divers were photographing a hull off the coast while an archivist was reading a letter book in Genoa, and the last clause pins the overlap: the divers heard about the list when they surfaced in September, so it was found while they were still in the water. Two efforts running at once in different places call for simultaneity.",
      expWrong:{
        A:"‘Subsequently’ is the near miss, and it is the natural reading of a story told in order. But it would put the archive find after the diving, and the passage says the divers learned of the document when they came up that September — during the second season, not after it.",
        C:"‘Previously’ pushes the discovery before the two summers, and the same clause rules it out: the list reached the divers mid-season, not before they started.",
        D:"‘Consequently’ makes the discovery an effect of the photography, and a letter book sitting in a Genoa warehouse was not produced by anything a diver did."
      },
      tip:'Hunt for the sentence that dates one event against the other. One clause about who learned what and when usually decides between Meanwhile and Subsequently.'
    },
    {
      id:'TRB-28', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — concession',
      passage:"Anyone arguing that the county should keep paying for the volunteer ambulance corps can point at the response times: the corps reaches a call in the northern townships in eleven minutes on average, and the nearest paid service, dispatched from the city, takes twenty-six. %BLANK% the corps has lost nine of its thirty-one volunteers since 2022, and the four who cover the overnight shift are all past sixty.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Accordingly,', B:'In particular,', C:'Admittedly,', D:'By comparison,'},
      correct:'C',
      expCorrect:"The first sentence gives the strongest argument for keeping the corps; the second admits the weakness that argument does not answer. A writer who states a case and then grants what it leaves unsolved needs a concession transition.",
      expWrong:{
        A:"‘Accordingly’ marks an action taken to fit what was just described, and losing nine volunteers is not something the county did in response to good response times.",
        B:"‘In particular’ narrows to a specific part of the claim just made, and an aging roster is not a detail of the eleven-minute average: it is the reason to doubt that the average will hold.",
        D:"‘By comparison’ asks the reader to measure the second sentence against the first on a shared scale, and volunteers lost and minutes elapsed are not the same measure."
      },
      tip:'A concession is the writer arguing against their own case on purpose. When the second sentence hands ammunition to the other side, you want Admittedly, Granted or To be sure.'
    },
    {
      id:'TRB-29', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — contrast (same cause, opposite effect)',
      passage:"The peat in the Roddy bog holds so little oxygen that a leather shoe dropped into it in 1400 comes out in 1980 with its stitching whole and its lace still knotted. %BLANK% the same acid that saves the leather dissolves calcium, so the bodies recovered from bogs across the north arrive with skin, hair and fingernails and almost no skeleton at all.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'However,', B:'Instead,', C:'In the same way,', D:'For this reason,'},
      correct:'A',
      expCorrect:"The first sentence says the bog preserves a leather shoe for six centuries; the second says the same chemistry destroys bone. One cause producing opposite results is still an opposition between the two sentences, and contrast is what marks it.",
      expWrong:{
        B:"‘Instead’ would withdraw the first sentence and put the second in its place, as if the bog did not preserve leather after all. It does — the shoe is real. The second sentence does not replace the first; it sets a limit on it.",
        C:"‘In the same way’ is the trap that the phrase ‘the same acid’ builds. The chemistry is shared, but what it does to bone is the reverse of what it does to leather, and the transition has to match the relation between the two RESULTS, not the fact that they have one cause.",
        D:"‘For this reason’ would make the missing skeletons a consequence of the shoe's survival, and one artifact's condition does not dissolve another body's bones. Both follow from the acid; neither follows from the other."
      },
      tip:'Shared cause does not mean shared direction. When one mechanism preserves one thing and destroys another, the sentences oppose: However, Yet, On the other hand.'
    },
    {
      id:'TRB-30', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — identification of a complete set',
      passage:"The covenant the Hartwell family attached to the land in 1938 bars the owner from exactly two things, and the second of them has kept a gas station off that corner for three generations. %BLANK% no part of the parcel may be subdivided, and nothing may be built on it that sells fuel. The rest of the document is boilerplate.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'For example,', B:'In turn,', C:'Even so,', D:'Namely,'},
      correct:'D',
      expCorrect:"The first sentence counts the prohibitions: exactly two. The second lists both of them — no subdivision, no fuel sales. Naming the whole of a set the previous sentence counted is identification.",
      expWrong:{
        A:"‘For example’ is the near miss. It offers one case out of several and leaves the rest unnamed, and the sentence after the blank leaves nothing unnamed: it accounts for both prohibitions, which is the entire set.",
        B:"‘In turn’ marks the next link in a chain of effects, and the two clauses are not caused by anything. They are the content of the sentence before the blank.",
        C:"‘Even so’ announces a contradiction, and the list delivers exactly what the first sentence promised."
      },
      tip:'Namely and For example differ by coverage, not by formality. If the second sentence accounts for every item counted, it is Namely; if it leaves some out, it is For example.'
    },
    {
      id:'TRB-31', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — contrast (inversion)',
      passage:"A wide tire rolls more easily than a narrow one over a rough road, because it deforms less at each bump and loses less of the rider's work to the frame. %BLANK% on smooth pavement that same wide tire is the slower of the two, since the extra rubber flexing under load costs more than the bumps ever gave back.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Likewise,', B:'Conversely,', C:'Instead,', D:'Therefore,'},
      correct:'B',
      expCorrect:"The first sentence says the wide tire beats the narrow one on rough road; the second says the narrow one beats the wide one on smooth pavement. Reverse the surface and the result reverses with it, which is exactly the inversion ‘Conversely’ marks.",
      expWrong:{
        C:"‘Instead’ is the near miss. It replaces a rejected option with the one actually taken, and nothing has been rejected: the wide tire is still faster on the rough road. The second sentence does not substitute for the first; it states the mirror case.",
        A:"‘Likewise’ claims the two sentences run the same way, and one has the wide tire winning while the other has it losing.",
        D:"‘Therefore’ would make the smooth-pavement penalty a consequence of the rough-road advantage. Both follow from how much the tire flexes; neither produces the other."
      },
      tip:'Conversely is for a true mirror: swap the condition and the outcome swaps too. If only one fact changed, a plain contrast word is the safer read.'
    },
    {
      id:'TRB-32', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — sequence (later, not caused)',
      passage:"When the mill on the Chandos closed in 1978, the town's water rate fell overnight: the mill had been paying for two thirds of the treatment plant, and the plant's costs dropped with its biggest customer. For eleven years the rate stayed exactly where it landed. %BLANK% the state ordered every plant of that size to add filtration for cryptosporidium, and the rate has gone up in twenty-four of the thirty-six years since.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Subsequently,', B:'Meanwhile,', C:'Consequently,', D:'In other words,'},
      correct:'A',
      expCorrect:"The passage runs on a clock: the mill closes in 1978, the rate holds for eleven years, and then the state order arrives and ends the flat stretch. The blank marks what came next in time, which is sequence.",
      expWrong:{
        C:"‘Consequently’ is the near miss, and the passage baits it by opening with a real cause-and-effect chain — mill closes, costs fall, rate falls. But a state health rule about cryptosporidium was not produced by one town's mill closing; the order applied to every plant of that size, and this town simply came under it.",
        B:"‘Meanwhile’ would put the state order inside the eleven flat years, and the order is what ended them: the rate held until it arrived.",
        D:"‘In other words’ restates what came before, and a new regulation and thirty-six years of increases are new events, not the flat stretch reworded."
      },
      tip:'A passage full of causes does not make every blank causal. Ask whether the first thing could actually have produced the second; if a rule came from outside, it is only later.'
    },
    {
      id:'TRB-33', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions — concession',
      passage:"The case for moving the Saturday market off the courthouse lawn and into the closed block of Rowan Street is about the grass: eleven years of stalls and delivery trucks have packed the soil so hard that the maples along the south edge are dying, and the arborist gives them four seasons. %BLANK% the Rowan Street block has no shade at all, and the vendors who sell cheese and cut flowers say a July on that asphalt would finish them.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In turn,', B:'By the same token,', C:'Granted,', D:'Specifically,'},
      correct:'C',
      expCorrect:"The first sentence builds the case for the move — packed soil, dying maples, four seasons left. The second admits the cost of making it. Conceding a real objection to your own proposal is concession.",
      expWrong:{
        A:"‘In turn’ marks the next link in a chain of effects, and a bare asphalt block is not something the dying maples caused: it is the condition of the place the market would move to.",
        B:"‘By the same token’ says the second sentence follows the same logic as the first, and the first argues for moving the market while the second argues against it.",
        D:"‘Specifically’ narrows to a detail of the claim just made, and the lack of shade on Rowan Street is not a detail of the damage to the courthouse lawn: it is a problem on the other site."
      },
      tip:"When the writer's own proposal takes a hit in the next sentence, the blank is a concession: Granted, Admittedly, To be sure."
    },
    {
      id:'TRB-34', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions — cause and effect',
      passage:"Botanists used to explain the bare ring of ground around a creosote bush as chemical warfare: the shrub was thought to poison the soil so that nothing could sprout near it. Rodents, it turns out, do most of the clearing, and they work outward from the shelter of the canopy because that is as far from cover as they will go. %BLANK% the ring is widest where the shrub is largest — which is exactly what the poison story predicted, and exactly what convinced three generations of field guides.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Even so,', B:'Consequently,', C:'Namely,', D:'However,'},
      correct:'B',
      expCorrect:"The sentence before the blank gives the mechanism: rodents clear only as far from the canopy as they dare to go. The sentence after gives what that mechanism produces: a ring that grows with the shrub. Mechanism first, observation second, is cause and effect.",
      expWrong:{
        D:"‘However’ announces that the sentence after the blank contradicts the one before it, and it does not. Rodents that forage only as far as the canopy protects them will clear a wider ring around a wider shrub. What the observation sits awkwardly with is the OLD theory, mentioned two sentences earlier, not the explanation right before the blank.",
        A:"‘Even so’ claims the ring widens with the shrub in spite of the rodent account, when it widens with the shrub because of it. The pull comes from the last clause, which says the pattern also fit the poison story; one fact can support two explanations without opposing either sentence.",
        C:"‘Namely’ identifies the specific members of something just mentioned, and a measurement of ring width is not a list of the rodents or of the cover they use."
      },
      tip:'A blank joins the sentence right before it to the sentence right after it. An older claim that the passage already discarded is not what your transition has to answer.'
    }
  ]
});
