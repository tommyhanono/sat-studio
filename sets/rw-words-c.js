/* SAT Studio question set — Reading & Writing: Words in Context — el tercer formato
   de la destreza (WCC-01 a WCC-34).
   La mitad son palabras SUELTAS ya presentes en el pasaje, subrayadas con <u>, en el
   formato "As used in the text…": ahí el distractor tentador es SIEMPRE el sentido de
   diccionario más frecuente de esa misma palabra, el que acierta quien no lee el
   contexto. La otra mitad son FRASES completas (account for, bear out, hold up, turn
   on…), donde las cuatro opciones son paráfrasis de la frase y la trampa es leer uno
   de los verbos por separado. Ningún %BLANK% en todo el set: los sets a y b ya cubren
   el formato de completar. */
window.SAT_SETS.push({
  id: 'rw-words-c',
  title: 'Words in Context — In-Text Meaning and Phrases',
  section: 'rw',
  level: 'Difícil',
  description: 'The "as used in the text" format: single words already in the passage, where the common dictionary meaning is the trap, plus multi-word phrases whose four options are all paraphrases.',
  minutes: 38,
  questions: [
    {
      id:'WCC-01', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — weather (as used in the text)',
      passage:"The Okonkwo family has run the same two-boat ferry across the estuary since 1961. A bridge opened in 1994 and took most of the traffic; a fuel crisis in 2008 took most of the rest. Neither closed the service. Tour operators now cite the ferry as the one business on the north bank to <u>weather</u> both shocks, and its timetable has not changed in thirty years.",
      stem:'As used in the text, what does the word "weather" most nearly mean?',
      choices:{A:'wear away', B:'predict', C:'postpone', D:'come through'},
      correct:'D',
      expCorrect:'The text names two blows — the bridge in 1994 and the fuel crisis in 2008 — and then says “Neither closed the service.” The ferry is the thing that came out the other side intact, which is what this verb means when a hardship is its object. With “wear away” the ferry would be the thing worn down, and that contradicts “its timetable has not changed in thirty years”.',
      expWrong:{
        A:'“Wear away” is the literal sense of weathering, what rain and salt do to stone. Here the ferry survives the shocks; it is not the surface being eroded by them.',
        B:'“Predict” borrows from the weather forecast. The sentence credits the ferry with getting through two events that had already happened, not with seeing them coming.',
        C:'“Postpone” would mean the ferry delayed the bridge and the fuel crisis. No business can do that, and the text says only that neither one closed it.'
      },
      tip:'When “weather” takes a hardship as its object — weather a storm, weather a recession — it means “get through it intact”. The erosion sense needs a physical surface as the thing being acted on.'
    },
    {
      id:'WCC-02', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — discipline (as used in the text)',
      passage:"When Priya Raghunathan left acoustics for archaeology in 2011, she expected the move to be mostly a change of subject. What surprised her was everything else: what counts as a finished argument, how long a junior researcher waits before publishing, even what a footnote is for. Each <u>discipline</u>, she wrote later, teaches its newcomers a set of habits long before it teaches them any facts.",
      stem:'As used in the text, what does the word "discipline" most nearly mean?',
      choices:{A:'field of study', B:'punishment', C:'self-control', D:'training method'},
      correct:'A',
      expCorrect:'The word arrives right after a list of things that differ between acoustics and archaeology — “what counts as a finished argument, how long a junior researcher waits before publishing, even what a footnote is for”. Those are the conventions of a branch of research, so the word names the branch itself. With “punishment” the sentence would have archaeology penalizing newcomers, which nothing in the text describes.',
      expWrong:{
        B:'“Punishment” is the everyday sense of the noun. Nobody is being penalized here; two areas of research are being compared with each other.',
        C:'“Self-control” is the other everyday sense. The habits described belong to a whole field — its publishing norms, its footnotes — not to one researcher steadying herself.',
        D:'“Training method” names something a field does, but the word has to stand for what Raghunathan moved between, and acoustics and archaeology are subjects, not methods.'
      },
      tip:'In writing about research, “discipline” almost always means “branch of study”. Check what sits on either side of the word: two named subjects means field, not punishment.'
    },
    {
      id:'WCC-03', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — secure (as used in the text)',
      passage:"Everything about the 1937 expedition was improvised except the money. Halvorsen spent two years writing to shipping companies before a single one agreed, and the drafts show him revising the same paragraph forty times. He would later say the ice was the easy part: the hard part was the eleven months he spent trying to <u>secure</u> the three thousand kroner that made the voyage possible.",
      stem:'As used in the text, what does the word "secure" most nearly mean?',
      choices:{A:'protect', B:'obtain', C:'fasten', D:'guarantee'},
      correct:'B',
      expCorrect:'The sentence describes months of writing to shipping companies “before a single one agreed”. That is the work of getting money he did not yet have, so the verb means to succeed in acquiring it. With “protect” the kroner would already be his and the letters would be about keeping them safe, but the text says the companies had to say yes first.',
      expWrong:{
        A:'“Protect” assumes the money is already in hand. The letters exist precisely because it is not: no company had agreed to give it.',
        C:'“Fasten” is the physical sense, securing a rope or a hatch. It tempts because the passage is about a voyage, but nobody fastens three thousand kroner.',
        D:'“Guarantee” would mean promising the money to somebody else. Halvorsen is the one asking for it, not the one promising it.'
      },
      tip:'“Secure” plus a resource — funding, a permit, a seat — means “manage to get it”. The “make safe” sense only works for something you already possess.'
    },
    {
      id:'WCC-04', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — marked (as used in the text)',
      passage:"The two greenhouses on the Latimer farm are identical except for the glass. Between June and August the older house, glazed in 1958, ran an average of four degrees warmer than the new one and lost nearly a third more water through its vents. The gap was slight in spring and vanished altogether in winter, but across the summer months it was <u>marked</u>.",
      stem:'As used in the text, what does the word "marked" most nearly mean?',
      choices:{A:'labeled', B:'graded', C:'pronounced', D:'damaged'},
      correct:'C',
      expCorrect:'The last sentence is a three-way scale: “slight in spring”, “vanished altogether in winter”, “but across the summer months it was ___”. The word has to name the large end of that scale, and the figures supply it — four degrees warmer and a third more water lost. With “labeled” the sentence would say somebody wrote on the gap, which is not a size and breaks the list.',
      expWrong:{
        A:'“Labeled” is the most common sense of the word (a marked envelope). The sentence is measuring a difference, not tagging one.',
        B:'“Graded” comes from the schoolwork sense of marking. Nothing here is being scored; two greenhouses are being compared.',
        D:'“Damaged” reads the word as a scratch on a surface. The old glass is never called harmed — the house it covers is simply hotter and drier.'
      },
      tip:'When “marked” sits where a size word belongs — after “slight”, “small”, or “vanished” — it means “large enough to notice”. The tag sense needs an object that can carry writing.'
    },
    {
      id:'WCC-05', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — train (as used in the text)',
      passage:"For the first three nights of the survey the team watched everywhere at once and recorded nothing usable. On the fourth, Oyelaran shut down two of the three cameras and <u>trained</u> the remaining one on a single fig tree that the bats had visited every evening since they arrived. Footage from that one tree accounted for every identification in the final report.",
      stem:'As used in the text, what does the word "trained" most nearly mean?',
      choices:{A:'instructed', B:'repaired', C:'calibrated', D:'aimed'},
      correct:'D',
      expCorrect:'The contrast is between watching “everywhere at once” and putting one camera on “a single fig tree”. The verb has to name the act of directing an instrument at one spot, and the payoff confirms it: footage from that tree produced every identification. With “instructed” the camera would be taking lessons, and the narrowing of the view — the whole point — would disappear.',
      expWrong:{
        A:'“Instructed” is the everyday sense of the verb, and it needs a learner. A camera takes no instruction; it gets pointed somewhere.',
        B:'“Repaired” assumes the camera was broken. The text says two were switched off and the third was put to work, not that any was fixed.',
        C:'“Calibrated” would mean adjusting the camera’s settings for accuracy. What changes here is where the camera looks, not how it is tuned.'
      },
      tip:'With an instrument as the object and “on” or “at” after it — trained the telescope on, trained the lens at — “train” means “point”. Keep the teaching sense for objects that can learn.'
    },
    {
      id:'WCC-06', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — charge (as used in the text)',
      passage:"The last keeper of the Brennan Point light was also its only gardener. In the logbooks she kept from 1948 to 1971 the hedge and the gulls appear far more often than the lamp, and visitors were startled to find her weeding while the lens turned untended above. Yet the light never failed on her watch. The tower, the lens, and the fog bell were her <u>charge</u>, and she never left the point overnight.",
      stem:'As used in the text, what does the word "charge" most nearly mean?',
      choices:{A:'responsibility', B:'accusation', C:'expense', D:'attack'},
      correct:'A',
      expCorrect:'The list in front of the word names three pieces of equipment — “the tower, the lens, and the fog bell” — and the clause after it says “she never left the point overnight”. Together they describe things placed in somebody’s keeping. With “accusation” the sentence would have someone bringing a complaint about a fog bell, which nothing in the text sets up.',
      expWrong:{
        B:'“Accusation” is the courtroom sense and the most common one for this noun. Nobody is accused here; a keeper is looking after equipment.',
        C:'“Expense” is the billing sense, a charge on an account. The tower and the fog bell are things she tends, not things she pays for.',
        D:'“Attack” is the cavalry sense, and it needs an enemy. The passage offers a hedge, some gulls, and a lamp that never failed.'
      },
      tip:'“Charge” as a noun often means “the thing or person in your keeping”. When a list of things somebody looks after comes just before it, take that sense ahead of the legal or the billing one.'
    },
    {
      id:'WCC-07', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — harbor (as used in the text)',
      passage:"Publicly the review board endorsed the dam every year from 1979 to 1986, and the minutes record no dissent at all. But the chief engineer’s private notebooks, opened by his family in 2014, show that he <u>harbored</u> the same objection through all eight votes: the survey had never tested the clay under the west abutment, and he did not believe anyone intended to.",
      stem:'As used in the text, what does the word "harbored" most nearly mean?',
      choices:{A:'sheltered', B:'held', C:'voiced', D:'resolved'},
      correct:'B',
      expCorrect:'The passage sets public silence against private paper: the minutes “record no dissent at all”, while the notebooks show the objection was there “through all eight votes”. A doubt kept year after year and never said out loud is one that is held. With “voiced” the sentence would contradict the minutes, which are the text’s evidence that he never said it.',
      expWrong:{
        A:'“Sheltered” is the port sense of the verb, where the object is a ship or a person needing refuge. An objection is not given refuge; it is kept in mind.',
        C:'“Voiced” is the opposite of what the passage shows. The notebooks matter only because they contain what the minutes do not.',
        D:'“Resolved” would mean he settled the doubt. He carried it unchanged through eight votes, and the clay was never tested.'
      },
      tip:'“Harbor” plus a feeling or a belief — harbor doubts, harbor a grudge — means “keep it without showing it”. The refuge sense needs a person or a ship as the object.'
    },
    {
      id:'WCC-08', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — ground (as used in the text)',
      passage:"Reviewers liked the theory and disliked the paper. The mechanism was elegant, they agreed, but every figure in it came out of a simulation, and the two field seasons the authors promised in the introduction never appeared. Until the argument is <u>grounded</u> in something measured at the site itself, the lead reviewer wrote, it remains a very good story about a river nobody has visited.",
      stem:'As used in the text, what does the word "grounded" most nearly mean?',
      choices:{A:'based', B:'buried', C:'earthed', D:'halted'},
      correct:'A',
      expCorrect:'The complaint comes first — “every figure in it came out of a simulation” and no field data appeared — and the cure named after the word is “something measured at the site itself”. To ground the argument is to rest it on that evidence. With “halted” the reviewer would be asking for the work to stop, but he calls the mechanism elegant and asks for support instead.',
      expWrong:{
        B:'“Buried” takes the word back to soil. The reviewer wants the argument attached to measurements, not put underground.',
        C:'“Earthed” is the electrical sense of grounding a circuit. It is the most literal reading available and the least relevant: nothing here carries current.',
        D:'“Halted” is the airport sense, as in a grounded flight. The request is for evidence, not for the project to be stopped.'
      },
      tip:'“Grounded in” is followed by the evidence or principle that holds a claim up. When “in” comes after the word, take the “based on” sense and not the “kept from flying” one.'
    },
    {
      id:'WCC-09', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — produce (as used in the text)',
      passage:"The auction house had described the violin’s 1742 label as beyond dispute. Asked in court where the label had come from, the dealer named a workshop in Cremona, a warehouse fire, and a collector who had died in 1996. Asked to <u>produce</u> a single document from any of the three, he said he would look. The sale was suspended that afternoon.",
      stem:'As used in the text, what does the word "produce" most nearly mean?',
      choices:{A:'manufacture', B:'cultivate', C:'present', D:'generate'},
      correct:'C',
      expCorrect:'The two questions are built the same way — “Asked… where the label had come from” and “Asked to ___ a single document” — and both demand that the dealer supply something to the court. His answer, “he said he would look”, is the answer of a man who cannot hand it over. With “manufacture” the court would be asking him to forge a document, which is the opposite of what it wants.',
      expWrong:{
        A:'“Manufacture” is the factory sense, the most common one for this verb. A court asking for a manufactured document would be asking for a fake.',
        B:'“Cultivate” is the farming sense, the one behind produce as a word for vegetables. Documents are not grown.',
        D:'“Generate” also means to create rather than to hand over. What the court wants either exists already or does not; the dealer is asked to bring it, not to make it.'
      },
      tip:'In a courtroom or an audit, “produce” means “bring forward what you already have”. If the object is a document, a receipt, or a witness, that is the sense.'
    },
    {
      id:'WCC-10', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — stock (as used in the text)',
      passage:"Ask nine gallery guides at the Certaldo why the fresco’s left panel is unfinished and you get the same three sentences about a plague year, delivered at the same speed. Ask the tenth, a restorer who has spent four winters on the scaffolding, and she talks about the plaster instead. The <u>stock</u> explanation is not wrong, she says; it is simply the only one most visitors have ever been given.",
      stem:'As used in the text, what does the word "stock" most nearly mean?',
      choices:{A:'stored', B:'financial', C:'plentiful', D:'standard'},
      correct:'D',
      expCorrect:'The setup measures repetition: nine guides give “the same three sentences… at the same speed”, and only the restorer, who knows the plaster, says anything else. An explanation that comes out identical every time is the routine one, which the last clause confirms — it is “the only one most visitors have ever been given”. With “stored” the sentence would say the explanation is kept somewhere, which misses the repetition entirely.',
      expWrong:{
        A:'“Stored” is the warehouse sense of stock, goods sitting on a shelf. The explanation is repeated aloud, not kept in a storeroom.',
        B:'“Financial” is the shares sense, the most common meaning of the noun. It has nothing to do with what nine guides say about a fresco.',
        C:'“Plentiful” describes quantity, as in a well-stocked shelf. The text insists there is only one such explanation, not that there are many.'
      },
      tip:'As an adjective in front of answer, phrase, character, or excuse, “stock” means “used over and over without thought”. The inventory and the shares senses belong to the noun.'
    },
    {
      id:'WCC-11', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — register (as used in the text)',
      passage:"The sensors under the bridge deck are sensitive enough to count pedestrians. In their first month they logged every bus, every delivery truck, and the whole Thursday market crowd. What never <u>registered</u> was the slow settling of the south pier that the annual survey found in November: three millimeters over a year, spread so evenly that no single hour of data looked any different from the last.",
      stem:'As used in the text, what does the word "registered" most nearly mean?',
      choices:{A:'enrolled', B:'appeared', C:'complained', D:'mattered'},
      correct:'B',
      expCorrect:'The sentence contrasts what the sensors logged — buses, trucks, the market crowd — with the settling that only “the annual survey found in November”. The reason follows the colon: the movement was “spread so evenly that no single hour of data looked any different from the last”, so it never turned up in the readings. With “enrolled” the pier would be signing up for something, which nothing in the text supports.',
      expWrong:{
        A:'“Enrolled” is the sign-up sense of the verb and its most common one. Piers do not enroll; a movement either shows in the data or it does not.',
        C:'“Complained” is the sense in “register a protest”, which needs somebody with a grievance. The subject here is a three-millimeter shift.',
        D:'“Mattered” judges importance. The settling mattered enough for the survey to report it — the point is that the sensors never caught it.'
      },
      tip:'When the subject is a change, a reading, or a signal, “register” means “show up in the record”. Let the subject decide: a person registers for a class, a movement registers on an instrument.'
    },
    {
      id:'WCC-12', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — couch (as used in the text)',
      passage:"Nothing in the 1911 memorandum is stated outright. The director wanted the eastern wing demolished, and everyone on the committee understood as much, but the paragraph that says so runs to eighty words about circulation, daylight, and the price of lead. Reading it now, the historian Aliyah Senft notes how carefully the demand is <u>couched</u> in the language of maintenance.",
      stem:'As used in the text, what does the word "couched" most nearly mean?',
      choices:{A:'phrased', B:'hidden', C:'padded', D:'softened'},
      correct:'A',
      expCorrect:'The word is followed by “in the language of maintenance”, and the sentence before it shows what that language is: “eighty words about circulation, daylight, and the price of lead”. To couch something is to put it into words of a chosen kind. With “hidden” the demand would be absent, but Senft’s whole point is that it is right there, in those eighty words, wearing maintenance vocabulary.',
      expWrong:{
        B:'“Hidden” is close to the effect and wrong about the act. The demand is still made; only its vocabulary changes, and a hidden demand would not “run to eighty words”.',
        C:'“Padded” means adding filler to reach a length. Those eighty words are doing the disguising, not stretching a short text.',
        D:'“Softened” judges tone, and the passage gives no blunter version to compare against. “Couched in” names the wording chosen, whatever its force.'
      },
      tip:'“Couched in” is always followed by a kind of language — couched in legal terms, couched in praise. It describes how something was worded, not whether it was concealed.'
    },
    {
      id:'WCC-13', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — pedestrian (as used in the text)',
      passage:"Critics who came to the 1968 retrospective for the late canvases stayed for the drawings. Forsyth’s paintings from those years are enormous and strange; his working sketches, done on hotel stationery, are <u>pedestrian</u> beside them — a chair, a coat on a hook, the same window nine times. That is exactly why the curator hung forty of them: they show a painter checking his eye against ordinary things.",
      stem:'As used in the text, what does the word "pedestrian" most nearly mean?',
      choices:{A:'on foot', B:'unfinished', C:'unremarkable', D:'careless'},
      correct:'C',
      expCorrect:'The sentence is a comparison with the paintings, which are “enormous and strange”, and the examples of the other side are “a chair, a coat on a hook, the same window nine times”. Plain subjects plainly handled is what the word names here, and the closing line calls them “ordinary things”. With “unfinished” the sentence would be about completeness, but the curator hangs the sketches for what they show, not for what they lack.',
      expWrong:{
        A:'“On foot” is the word’s other life, as a noun for somebody walking. Drawings on hotel stationery do not walk anywhere.',
        B:'“Unfinished” is about completion. Nine studies of the same window are finished drawings of dull subjects, which is precisely the curator’s point.',
        D:'“Careless” attacks the craft, and the last sentence says the reverse: the sketches show “a painter checking his eye”, which is careful work.'
      },
      tip:'“Pedestrian” as an adjective means “ordinary, without flair”. Look for the thing it is compared against — if the other side is called strange or dazzling, this side is plain, not sloppy.'
    },
    {
      id:'WCC-14', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — partial (as used in the text)',
      passage:"At the Kelbourne trials the judges hear every entry on tape, unnamed and unnumbered, three days before anyone plays live. The rule dates from 1954, when a chairman who had taught half the entrants was asked to step down and refused. He insisted he could hear a flute without hearing a student; the board replied that a judge who knows whose flute it is cannot help being <u>partial</u>, however honestly he tries.",
      stem:'As used in the text, what does the word "partial" most nearly mean?',
      choices:{A:'incomplete', B:'fond', C:'divided', D:'biased'},
      correct:'D',
      expCorrect:'The board is answering a claim about fairness. The chairman “had taught half the entrants” and says he “could hear a flute without hearing a student”; the reply is that knowing whose flute it is tilts the judgment one way. With “incomplete” the board would be calling his judgment unfinished, which answers nothing about the students he taught.',
      expWrong:{
        A:'“Incomplete” is the most common sense of the word — a partial refund, a partial view — and it fits nothing in a dispute about a judge who knows the entrants.',
        B:'“Fond” is the sense in “partial to”, as in partial to marzipan. That construction needs “to” plus the thing liked; here the word stands alone as a charge against a judge.',
        C:'“Divided” would describe a judge torn between options. The worry is the opposite: that he leans reliably toward his own former students.'
      },
      tip:'A partial judge is a biased one; a partial report is an incomplete one. Let the noun decide — people are partial in the fairness sense, things in the incomplete sense.'
    },
    {
      id:'WCC-15', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Words in Context — plastic (as used in the text)',
      passage:"Textbooks once drew the adult brain as finished work. The maps made at Lund since 2009 argue the opposite from the clearest case available: in violinists who took up the instrument after thirty, the cortical area serving the left hand keeps enlarging into the fourth decade of practice. Whatever else the adult cortex is, the authors conclude, it is <u>plastic</u>, and any account that treats it as settled starts in the wrong place.",
      stem:'As used in the text, what does the word "plastic" most nearly mean?',
      choices:{A:'synthetic', B:'changeable', C:'fragile', D:'disposable'},
      correct:'B',
      expCorrect:'The passage runs on one contradiction: textbooks called the adult brain “finished work”, and the Lund maps show an area that “keeps enlarging into the fourth decade of practice”. Something still being reshaped after forty years is changeable, and the closing clause repeats it — the wrong view is the one that treats the cortex “as settled”. With “synthetic” the sentence would claim the cortex is man-made, which no part of the argument touches.',
      expWrong:{
        A:'“Synthetic” is the everyday sense, the one attached to bottles and bags, and it is the trap for anyone reading the word instead of the sentence. Nobody is calling the cortex artificial.',
        C:'“Fragile” would say the cortex is easily damaged. The evidence offered is growth in late-starting violinists, not injury.',
        D:'“Disposable” belongs to the same packaging family as synthetic, and it contradicts a passage about a structure that keeps developing for decades.'
      },
      tip:'In science writing “plastic” means “able to be reshaped” — plasticity, not polymers. If the sentence is about something changing form over time, take that sense.'
    },
    {
      id:'WCC-16', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Words in Context — relief (as used in the text)',
      passage:"Read on its own, the 1923 ordinance on market stalls is unreadable: nine pages of widths and opening hours. Read beside the register of fines from the same decade, it changes. The clauses nobody ever enforced fall away, and the three that produced almost every penalty stand out in sharp <u>relief</u>. The city, it turns out, cared about ice, awnings, and where the carts turned around.",
      stem:'As used in the text, what does the word "relief" most nearly mean?',
      choices:{A:'prominence', B:'assistance', C:'reassurance', D:'replacement'},
      correct:'A',
      expCorrect:'The second document creates a contrast, and the sentence spells it out: unenforced clauses “fall away” while three clauses “produced almost every penalty”. What is left stands out against the rest, and the next sentence names them — ice, awnings, and where the carts turned. With “assistance” the clauses would be receiving help, and the clauses falling away would have no part in the sentence at all.',
      expWrong:{
        B:'“Assistance” is the most common sense of the noun, as in disaster relief. Nothing is being aided here; a pattern is being made visible.',
        C:'“Reassurance” is the emotional sense, the relief you feel when a worry lifts. The subject of the sentence is three clauses of an ordinance, not a reader’s nerves.',
        D:'“Replacement” is the shift-work sense, the night relief. The three clauses take over nobody’s post; they simply become conspicuous.'
      },
      tip:'“In sharp relief” comes from carving, where raised figures stand out from a flat ground. Whenever the phrase follows a contrast, it means “clearly visible against everything around it”.'
    },
    {
      id:'WCC-17', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Words in Context — fast (as used in the text)',
      passage:"The Ndlovu workshop sells two indigo cloths that look identical on the shelf. After six washes the cheaper one has gone the color of a rain cloud; the other has lost almost nothing, because its dye was set with an alum mordant over three days. The label on the second says only that the color is <u>fast</u>, and regular customers pay four times as much for that one word.",
      stem:'As used in the text, what does the word "fast" most nearly mean?',
      choices:{A:'rapid', B:'brilliant', C:'lasting', D:'delicate'},
      correct:'C',
      expCorrect:'One measured outcome separates the two cloths: after six washes the cheap one “has gone the color of a rain cloud” and the other “has lost almost nothing”. A color that survives washing is one that stays put, which is also why the three-day alum mordant is mentioned. With “rapid” the label would be advertising speed, and a bolt of cloth on a shelf has nowhere to go.',
      expWrong:{
        A:'“Rapid” is the everyday sense and the entire trap: it is the first meaning of the word and the only one that ignores every fact in the passage.',
        B:'“Brilliant” praises the shade. The comparison is not about how strong the blue looks at the start but about how much of it survives six washes.',
        D:'“Delicate” reverses the evidence. A delicate color is one that washes out, and that is the cheaper cloth, not the expensive one.'
      },
      tip:'“Fast” once meant “firmly fixed”, and that sense survives in colorfast, hold fast, and stuck fast. When the sentence is about something staying put rather than moving, take it.'
    },
    {
      id:'WCC-18', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — phrase "account for"',
      passage:"The Ferreira reef has bleached twice since 2015, and both times the water was warm. Warmth alone leaves a puzzle, though: the northern half bleached in 2019 and the southern half did not, although the two are four kilometers apart and sat in the same water all summer. Temperature cannot <u>account for</u> the split, so the team began measuring the current instead.",
      stem:'As used in the text, what does the phrase "account for" most nearly mean?',
      choices:{A:'pay for', B:'make up', C:'allow for', D:'explain'},
      correct:'D',
      expCorrect:'The puzzle is set out first: the two halves “sat in the same water all summer” and only one bleached. What temperature cannot do is say why they differ, which is why the team “began measuring the current instead”. With “pay for” the sentence would be about money, and no cost appears anywhere in the passage.',
      expWrong:{
        A:'“Pay for” is the banking sense of “account”. The passage is about why one half of a reef bleached, not about who covers a bill.',
        B:'“Make up” is a real sense of the phrase — coral accounts for a share of the reef — but it needs a quantity after it. Here the object is “the split”, a difference rather than a portion.',
        C:'“Allow for” means leaving room for something in a plan. Temperature is not planning anything; it is failing to explain a result.'
      },
      tip:'When “account for” takes a result, a gap, or a difference as its object, it means “explain it”. When it takes a percentage or a share, it means “make up that much of it”.'
    },
    {
      id:'WCC-19', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — phrase "rule out"',
      passage:"Three things could have cracked the Tanaka bell: the 1948 tremor, the move to the new tower, or the winter it stood uncovered in the yard. The tremor was the obvious suspect until a photograph surfaced, taken eleven days afterward, in which the bell is plainly whole. That single image <u>ruled out</u> the earthquake and left the curators with two candidates and no photographs at all.",
      stem:'As used in the text, what does the phrase "ruled out" most nearly mean?',
      choices:{A:'governed', B:'delayed', C:'eliminated', D:'outlawed'},
      correct:'C',
      expCorrect:'The photograph shows the bell “plainly whole” eleven days after the tremor, so the tremor cannot be the cause — and the sentence confirms the effect by leaving the curators “with two candidates”. The phrase removes one item from a list of possibilities. With “outlawed” the image would be forbidding an earthquake, which no photograph can do.',
      expWrong:{
        A:'“Governed” reads the “rule” in the phrase as authority. A photograph does not command an earthquake; it shows that the bell was still intact after one.',
        B:'“Delayed” would move the tremor later in time. Its date is fixed; what the photograph changes is whether it can be the cause.',
        D:'“Outlawed” is the legal reading of “rule”. Nothing is being forbidden here — one explanation is simply shown to be impossible.'
      },
      tip:'“Rule out” always removes a possibility from a list. If the sentence names several candidates and then narrows them, that is the sense you want.'
    },
    {
      id:'WCC-20', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — phrase "point to"',
      passage:"Nobody has seen the Aldergrove cat since 1974, and no photograph of one exists. Still, the evidence keeps arriving: fur caught on the low wire of a sheep fence, a track in river silt too wide for a fox, and two sets of remains with bite marks no local predator makes. Taken together, these findings <u>point to</u> an animal that the official list says is gone.",
      stem:'As used in the text, what does the phrase "point to" most nearly mean?',
      choices:{A:'gesture at', B:'suggest', C:'accuse', D:'describe'},
      correct:'B',
      expCorrect:'The passage stacks three pieces of indirect evidence — fur, a track, bite marks — and puts “taken together” in front of the phrase. That is how a writer signals evidence implying something it cannot prove, since the text also says nobody has seen or photographed the animal. With “gesture at” the findings would be making a physical motion, which fur on a wire cannot do.',
      expWrong:{
        A:'“Gesture at” is the literal sense of pointing, done with a hand or a signpost. Fur, tracks, and bite marks have neither.',
        C:'“Accuse” adds blame. The animal is not charged with anything; its existence is what the evidence implies.',
        D:'“Describe” would mean the findings tell us what the animal looks like. They indicate only that something is out there.'
      },
      tip:'When evidence is the subject, “point to” means “indicate” or “suggest”. The literal pointing sense needs a person or a sign doing the pointing.'
    },
    {
      id:'WCC-21', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — phrase "bring about"',
      passage:"The Halvard mill did not close because the river ran low; it closed because of a road. When the bypass opened in 1982 the trucks stopped passing the gate, and the four small orders that had kept the machines warm between big contracts went to a mill nearer the highway. A change meant to ease traffic in one town <u>brought about</u> the end of an industry in another.",
      stem:'As used in the text, what does the phrase "brought about" most nearly mean?',
      choices:{A:'caused', B:'delivered', C:'predicted', D:'survived'},
      correct:'A',
      expCorrect:'The passage traces a chain: the bypass opens, the trucks stop passing the gate, the small orders move elsewhere, the mill closes. The phrase names the link between the first event and the last, and the sentence marks the link as unintended — “a change meant to ease traffic”. With “predicted” the bypass would only have foreseen the closure, but the text has it producing one.',
      expWrong:{
        B:'“Delivered” reads “brought” literally, as carrying something somewhere. A road does not carry an ending into a town; it sets off the events that end the mill.',
        C:'“Predicted” turns the bypass into a forecast. In the text it does the work: the trucks stopped and the orders left.',
        D:'“Survived” reverses the roles. The mill did not outlast the change; it closed because of it.'
      },
      tip:'“Bring about” means “cause to happen”, and it is used most often for an effect nobody planned. The carrying sense belongs to “bring” alone, not to the two-word phrase.'
    },
    {
      id:'WCC-22', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — phrase "call into question"',
      passage:"For sixty years the standard date for the Uruk seal rested on a single potsherd found beside it in 1949. The excavation notes for that season, published at last in 2021, record that the sherd came out of a spoil heap rather than off the trench floor. That one line <u>calls into question</u> every chronology built on the seal, though it does not by itself move the date a single year.",
      stem:'As used in the text, what does the phrase "calls into question" most nearly mean?',
      choices:{A:'asks about', B:'disproves', C:'defends', D:'casts doubt on'},
      correct:'D',
      expCorrect:'The clause after the comma fixes how far the line reaches: it “does not by itself move the date a single year”. So the note weakens every chronology without settling anything, which is exactly what this phrase does to a claim. With “disproves” the sentence would contradict its own ending, since nothing has been shown to be false.',
      expWrong:{
        A:'“Asks about” is the literal reading of “question”. An excavation note does not inquire; it undermines the evidence the chronologies stand on.',
        B:'“Disproves” is the trap of degree, and the passage denies it in the same sentence: the date has not moved, so the old one has not been proved wrong.',
        C:'“Defends” is the opposite. The note reports that the dating sherd came from a spoil heap, which is bad news for the chronology, not support for it.'
      },
      tip:'“Call into question” weakens a claim without refuting it. When a sentence adds “though it does not prove” or “by itself”, the verb you need is doubt, not disproof.'
    },
    {
      id:'WCC-23', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — phrase "take for granted"',
      passage:"Every model of the lagoon since 1988 starts from one figure: that the sandbar moves forty meters a year. The number comes from two surveys taken eleven years apart, and nobody has measured it since. Four generations of modelers have <u>taken for granted</u> a rate that was only ever an average of two mornings, which is why the 2024 survey — forty meters in nine months — was checked three times before anyone believed it.",
      stem:'As used in the text, what does the phrase "taken for granted" most nearly mean?',
      choices:{A:'assumed without checking', B:'received as a gift', C:'been grateful for', D:'accepted reluctantly'},
      correct:'A',
      expCorrect:'The passage names what was never done: “nobody has measured it since”, and the rate “was only ever an average of two mornings”. The modelers kept using the figure without ever testing it. With “been grateful for” the passage would be about thanks, and the shock of the 2024 survey would have no cause at all.',
      expWrong:{
        B:'“Received as a gift” reads “granted” as a grant of something. Nobody handed the modelers the rate; they inherited an unexamined number.',
        C:'“Been grateful for” is the everyday feeling the phrase gets confused with. Gratitude plays no part in a chain of models built on one unchecked figure.',
        D:'“Accepted reluctantly” adds a hesitation the text denies: the figure went unquestioned through thirty-six years and four generations of modelers.'
      },
      tip:'“Take for granted” means treating something as true or permanent without examining it. Look for a nearby sentence saying the thing was never tested, never measured, or never questioned.'
    },
    {
      id:'WCC-24', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — phrase "bear out"',
      passage:"Hollins predicted in 1996 that warming would push the alpine chough’s nesting line about ten meters uphill per decade, and few ornithologists expected the figure to hold. Three decades of ringing records from four Pyrenean valleys now <u>bear out</u> the prediction almost exactly: thirty-one meters in the first valley, twenty-eight in the second, thirty-three and thirty in the others.",
      stem:'As used in the text, what does the phrase "bear out" most nearly mean?',
      choices:{A:'endure', B:'carry off', C:'postpone', D:'confirm'},
      correct:'D',
      expCorrect:'The numbers after the colon are the whole argument: about ten meters a decade predicted, and thirty-one, twenty-eight, thirty-three, and thirty meters measured over three decades. Records that match a forecast that closely support it. With “endure” the records would be putting up with the prediction, and the four measurements would be doing no work in the sentence.',
      expWrong:{
        A:'“Endure” is the “bear” of bearing pain. Ringing records do not suffer a prediction; they either match it or they do not.',
        B:'“Carry off” reads “bear” as carrying. The records do not remove the prediction from anywhere — they agree with it.',
        C:'“Postpone” would delay the prediction. It was made in 1996, and the data are the test of it, not a reason to wait.'
      },
      tip:'“Bear out” means “turn out to support”. If evidence is the subject and a claim, a fear, or a forecast is the object, that is the sense.'
    },
    {
      id:'WCC-25', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — phrase "stand in for"',
      passage:"No tide gauge existed at Port Amory before 1902, so the harbor board’s argument about the 1880s cannot be settled directly. What the historians use instead is the insurance ledger: every flooded warehouse was entered with a date and a street. The ledger <u>stands in for</u> the missing gauge, and its only gaps are the months when the clerk was ill.",
      stem:'As used in the text, what does the phrase "stands in for" most nearly mean?',
      choices:{A:'testifies about', B:'agrees with', C:'substitutes for', D:'waits for'},
      correct:'C',
      expCorrect:'The sentence before names the problem — “no tide gauge existed at Port Amory before 1902” — and calls the ledger what “the historians use instead”. A record used in place of a missing instrument takes that instrument’s place. With “agrees with” the ledger would be matching the gauge, but for those years no gauge exists for it to agree with.',
      expWrong:{
        A:'“Testifies about” makes the ledger a witness to the gauge. It replaces the gauge; it says nothing whatever about it.',
        B:'“Agrees with” needs two sources to compare. The entire difficulty is that before 1902 only one source exists.',
        D:'“Waits for” is the literal “stand in” of standing in a line. A ledger written in the 1880s is not waiting for an instrument installed in 1902.'
      },
      tip:'“Stand in for” means “take the place of”. In research writing it usually marks a proxy: the thing you can measure, used because the thing you want cannot be measured.'
    },
    {
      id:'WCC-26', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — phrase "draw on"',
      passage:"The grammar Oyelaran published in 1974 lists forty-one speakers by name, and every example in it came from a recording she made herself. Her second book has no such list. For the chapters on the eastern dialect she <u>draws on</u> mission wordlists from the 1890s, a police interpreter’s notes, and one letter — sources she had spent the first book warning other linguists about.",
      stem:'As used in the text, what does the phrase "draws on" most nearly mean?',
      choices:{A:'sketches', B:'relies on', C:'attracts', D:'comments on'},
      correct:'B',
      expCorrect:'The contrast is between two books: the first used recordings she made herself, the second uses “mission wordlists from the 1890s, a police interpreter’s notes, and one letter”. The phrase introduces the materials a chapter is built out of. With “sketches” she would be drawing pictures of wordlists, which is the bare verb and not the phrase.',
      expWrong:{
        A:'“Sketches” is the pencil sense of “draw”. The phrase “draw on” with a source after it always means using that source, never depicting it.',
        C:'“Attracts” reads “draw” as pulling something toward her. Ninety-year-old wordlists are not drawn to a linguist; they are consulted.',
        D:'“Comments on” would make the chapter a discussion of those sources. The final clause says she used them, despite having warned others against them.'
      },
      tip:'“Draw on” plus a source — archives, memory, savings — means “make use of it”. The pencil sense of “draw” never takes “on” before the thing drawn.'
    },
    {
      id:'WCC-27', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — phrase "give way to"',
      passage:"The first two kilometers of the Sarno trail are laid with cut stone, and the guidebooks say it was built for carts. Above the old quarry the stone <u>gives way to</u> packed earth, and above the spring the earth becomes a line of cairns and nothing more. The road, in other words, stops where the reason for building it stopped.",
      stem:'As used in the text, what does the phrase "gives way to" most nearly mean?',
      choices:{A:'is replaced by', B:'gives in to', C:'collapses under', D:'opens onto'},
      correct:'A',
      expCorrect:'The passage walks a sequence of surfaces: cut stone, then “packed earth”, then “a line of cairns and nothing more”. Each one ends where the next begins, and the parallel clause about earth becoming cairns confirms the pattern. With “collapses under” the stone would be failing beneath a load, but nothing in the passage breaks.',
      expWrong:{
        B:'“Gives in to” is the surrender sense, which needs two sides in a contest. Stone and earth are not arguing; one simply follows the other up the hill.',
        C:'“Collapses under” is the literal sense of ground giving way. The paving does not break above the quarry — it changes material.',
        D:'“Opens onto” would make the earth a space or a view the stone arrives at. The matching clause about cairns shows the pattern is succession, not arrival.'
      },
      tip:'“Give way to” marks one thing being succeeded by another — forest gives way to scrub, applause gives way to silence. Only the literal “the floor gave way” sense involves something breaking.'
    },
    {
      id:'WCC-28', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — phrase "fall short of"',
      passage:"The Institute set two thresholds before the trial began: a twelve-point gain on the reading measure would count as success, and anything under eight would end the program. The classes that finished in June averaged a gain of ten. Results that <u>fall short of</u> the stated bar but clear the floor are the hardest kind to report, and the Institute took four months to decide what to say.",
      stem:'As used in the text, what does the phrase "fall short of" most nearly mean?',
      choices:{A:'run out of', B:'fail to reach', C:'drop below', D:'stop before'},
      correct:'B',
      expCorrect:'The numbers settle it: success required twelve points and the classes averaged ten, while the same sentence says the results “clear the floor” of eight. To fall short of a target is to end below it without ever getting there. With “run out of” the program would be exhausting a supply, and nothing in the trial is used up.',
      expWrong:{
        A:'“Run out of” needs a resource — money, time, patience. What the results lack is two points against a threshold, not a stock of something.',
        C:'“Drop below” implies the gain was once above twelve and sank. The trial produced a single average, ten, which was never higher.',
        D:'“Stop before” describes an action halted along a route. The classes finished in June; it is the size of the gain that misses the bar, not the timing.'
      },
      tip:'“Fall short of” is always measured against a stated target. Find the number or the standard that follows “of”, then check the result against it.'
    },
    {
      id:'WCC-29', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — phrase "set aside"',
      passage:"Readers of the 1908 diary have argued for a century about whether Calloway ever reached the summit, and the argument has swallowed everything else in the book. Marchetti’s new edition opens by asking us to <u>set aside</u> the summit question for two hundred pages — not to answer it, she says, but to notice that the diary is also the only account of how eleven porters were paid, fed, and sent home.",
      stem:'As used in the text, what does the phrase "set aside" most nearly mean?',
      choices:{A:'settle once and for all', B:'store for safekeeping', C:'overturn on appeal', D:'leave out of consideration'},
      correct:'D',
      expCorrect:'Marchetti’s own words draw the line: “not to answer it”. She asks readers to hold the summit question out of view “for two hundred pages” so that something else in the diary becomes visible. With “settle once and for all” the sentence would contradict that clause, since answering the question is exactly what she says she is not doing.',
      expWrong:{
        A:'“Settle once and for all” is what a century of argument has failed to do, and the sentence rules it out explicitly with “not to answer it”.',
        B:'“Store for safekeeping” is the literal sense of setting an object aside. A question does not go into a drawer; it goes out of the discussion.',
        C:'“Overturn on appeal” is the legal sense, as in setting aside a verdict. There is no ruling here, only an editor asking for two hundred pages of attention.'
      },
      tip:'“Set aside” with an argument or an objection as its object means “ignore it for now”. The legal sense needs a verdict, and the storage sense needs a physical thing.'
    },
    {
      id:'WCC-30', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — phrase "square with"',
      passage:"The ship’s manifest lists eleven tons of copper loaded at Cadiz in March 1731. The wreck excavated off Sines in 2018 yielded just under four, scattered in a pattern that rules out a second salvage. Nothing about the cargo <u>squares with</u> the paperwork, and the simplest reading — that seven tons never came aboard — is the one the insurance file quietly supports.",
      stem:'As used in the text, what does the phrase "squares with" most nearly mean?',
      choices:{A:'agrees with', B:'settles up with', C:'confronts', D:'multiplies'},
      correct:'A',
      expCorrect:'Two figures sit side by side: eleven tons on the manifest, “just under four” on the seabed, with a second salvage ruled out. To say nothing squares with the paperwork is to say the cargo and the document do not match, which is why the next clause proposes seven missing tons. With “settles up with” the sentence would be about paying a debt, and the two tonnages would have nothing to do.',
      expWrong:{
        B:'“Settles up with” is the “square a debt” sense. Money enters only at the end, and it is the insurance file, not the cargo, that deals with it.',
        C:'“Confronts” makes the cargo an opponent of the manifest. Documents and cargo agree or disagree; they do not face each other down.',
        D:'“Multiplies” takes “square” as the arithmetic operation. Eleven and four are being compared, not raised to a power.'
      },
      tip:'“Square with” means “fit consistently with”. It shows up most often in the negative — does not square with the evidence — to announce a contradiction.'
    },
    {
      id:'WCC-31', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — phrase "gloss over"',
      passage:"Whitfield’s biography is generous to its subject in a particular way. The four decades of committee work get two hundred pages; the 1953 dismissal, which every colleague interviewed raised unprompted, gets a sentence and a footnote pointing to a file the author admits she never read. Reviewers who liked the book still said she <u>glossed over</u> the one year readers would open it for.",
      stem:'As used in the text, what does the phrase "glossed over" most nearly mean?',
      choices:{A:'explained in detail', B:'praised excessively', C:'passed lightly over', D:'polished the surface of'},
      correct:'C',
      expCorrect:'The proportions carry the argument: two hundred pages for committee work, “a sentence and a footnote” for the dismissal, and a file the author “admits she never read”. To gloss over something is to touch it and move on. With “explained in detail” the sentence would be praising the very coverage the reviewers are complaining about.',
      expWrong:{
        A:'“Explained in detail” is the opposite of a sentence and a footnote, and it would leave the reviewers with nothing to object to.',
        B:'“Praised excessively” is a different complaint altogether. The passage does not say the dismissal is flattered; it says the book barely mentions it.',
        D:'“Polished the surface of” reads “gloss” as shine. The word in this phrase comes from the brief marginal note, not from varnish.'
      },
      tip:'“Gloss over” means “deal with too quickly to be honest”. Look for a comparison of space or time — pages against a sentence, decades against a paragraph.'
    },
    {
      id:'WCC-32', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — phrase "take issue with"',
      passage:"Nobody at the 1966 symposium disputed Vandermeer’s measurements; three laboratories had already repeated them. What Okorie <u>took issue with</u> was the final paragraph, where the numbers turned into a claim about the whole basin. Her four-page reply grants every figure in the paper and then asks how eleven cores from one valley can speak for an area the size of Portugal.",
      stem:'As used in the text, what does the phrase "took issue with" most nearly mean?',
      choices:{A:'grew curious about', B:'disagreed with', C:'asked about', D:'drew attention to'},
      correct:'B',
      expCorrect:'The first sentence rules out one target: “Nobody… disputed Vandermeer’s measurements.” What Okorie attacks is “the final paragraph, where the numbers turned into a claim about the whole basin”, and her reply “grants every figure” before asking how eleven cores can speak for a whole region. That is opposition to a conclusion. With “grew curious about” the four-page reply would be an inquiry rather than the challenge the passage describes.',
      expWrong:{
        A:'“Grew curious about” turns a rebuttal into interest. Her reply accepts the figures and then attacks the inference drawn from them.',
        C:'“Asked about” reads “issue” as a printed number of a journal. The object here is a paragraph’s claim, not a copy of anything.',
        D:'“Drew attention to” would make her a publicist for the final paragraph. She is arguing against what it concludes.'
      },
      tip:'“Take issue with” means “disagree with”, and it is usually aimed at a claim or an interpretation rather than at the data. The “issue” in it is a point in dispute, not a magazine.'
    },
    {
      id:'WCC-33', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Words in Context — phrase "hold up"',
      passage:"Fifty years of teaching manuals repeat Beaumont’s rule that a violin’s top plate should be tuned to a particular pitch before assembly. When Larsen finally tested it in 2019 across ninety instruments, the rule <u>held up</u> for the twenty-eight built on a Cremonese pattern and failed completely for the rest — roughly what one would expect of a rule drawn, as Beaumont’s was, from a single workshop.",
      stem:'As used in the text, what does the phrase "held up" most nearly mean?',
      choices:{A:'caused a delay', B:'supported a load', C:'stood upright', D:'remained valid'},
      correct:'D',
      expCorrect:'The sentence is a test result in two halves: the rule “___ for the twenty-eight built on a Cremonese pattern and failed completely for the rest”. Whatever the phrase means, it has to be the opposite of “failed”, so it means the rule proved true for those instruments. With “caused a delay” the sentence would pair a scheduling problem with a failed prediction, and the twenty-eight instruments would mean nothing.',
      expWrong:{
        A:'“Caused a delay” is the traffic sense of holding up. Nothing in the test runs late; a rule is being checked against ninety instruments.',
        B:'“Supported a load” is the literal sense, and it tempts because a violin’s top plate really does carry string tension. But the subject of the verb is the rule, not the plate.',
        C:'“Stood upright” is another physical reading. A rule has no posture; it either survives testing or it does not.'
      },
      tip:'“Hold up” with a claim, a theory, or an alibi as its subject means “survive scrutiny”. Check the verb it is paired with — here it is “failed”, so it has to mean the reverse.'
    },
    {
      id:'WCC-34', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Words in Context — phrase "turn on"',
      passage:"Strip away the rhetoric and the case for moving the hatchery is short. Both sides accept the counts, the costs, and the map. The whole dispute <u>turns on</u> one quantity nobody has measured: how far upstream the fry drift in their first week. At two kilometers the proposed site is plainly better; at six it is worse than the one it would replace.",
      stem:'As used in the text, what does the phrase "turns on" most nearly mean?',
      choices:{A:'switches on', B:'rotates about', C:'depends on', D:'attacks'},
      correct:'C',
      expCorrect:'The last sentence is the proof: “At two kilometers the proposed site is plainly better; at six it is worse.” The answer to the whole dispute flips with that one unmeasured quantity, so the dispute rests on it — and the sentence before says everything else is already agreed. With “switches on” the sentence would describe an electrical action, and the two drift distances at the end would explain nothing.',
      expWrong:{
        A:'“Switches on” is the appliance sense, the most common use of the phrase. A dispute has no power supply.',
        B:'“Rotates about” takes “turn” literally, as motion around an axis. The passage is about which site wins, and that hangs on the drift distance.',
        D:'“Attacks” is the sense in “the dogs turned on their handler”, which needs a victim. The object here is a quantity, and quantities are not assaulted.'
      },
      tip:'“Turn on” with a question, a case, or an argument as its subject means “depend on”. The giveaway is a nearby sentence naming the one fact that would decide the matter.'
    }
  ]
});
