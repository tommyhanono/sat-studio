/* SAT Studio question set — Reading & Writing: Words in Context — método académico
   y segundos sentidos (WCB-01 a WCB-34).
   La mitad son palabras de método/argumentación en prosa de investigación; la otra
   mitad son palabras comunes en su sentido secundario, donde el distractor tentador
   es SIEMPRE el sentido de todos los días de la misma palabra. */
window.SAT_SETS.push({
  id: 'rw-words-b',
  title: 'Words in Context — Method and Second Meanings',
  section: 'rw',
  level: 'Difícil',
  description: 'Research-register method words, plus everyday words used in their second sense, where the familiar meaning is the trap.',
  minutes: 38,
  questions: [
    {
      id:'WCB-01', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — empirical',
      passage:"Before the committee would fund the new filtration design, it asked the engineers for something %BLANK%: not a projection drawn from a spreadsheet, but readings taken from the pipes themselves across a full rainy season, so that every claim about sediment could be traced back to a measurement someone had actually recorded.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'theoretical', B:'ambitious', C:'empirical', D:'preliminary'},
      correct:'C',
      expCorrect:'The sentence defines the blank by contrast: “not a projection drawn from a spreadsheet, but readings taken from the pipes themselves… traced back to a measurement someone had actually recorded.” That is the definition of “empirical”: based on observation and measurement rather than on theory. With “theoretical” the committee would be demanding the very spreadsheet projection the sentence rejects.',
      expWrong:{
        A:'“Theoretical” names the side of the contrast the committee refuses. The word after the colon is “not a projection”, so the blank has to mean the opposite of theory-based.',
        B:'“Ambitious” judges how much the engineers attempt. The contrast in the text is about where the evidence comes from (measurements, not models), not about scale.',
        D:'“Preliminary” means early and provisional, but the committee asks for a full rainy season of readings — the opposite of a first partial look.'
      },
      tip:'When a sentence sets “projection / model / estimate” against “readings / measurements / observations”, the word for the measured side is “empirical”.'
    },
    {
      id:'WCB-02', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — tentative',
      passage:"The authors chose deliberately %BLANK% language for their finding: the effect “may” persist, the pattern “appears” to hold, the difference is “consistent with” warming. They had watched eleven nests across one season, and they wrote knowing that a single additional summer of data could overturn the whole pattern.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'tentative', B:'decisive', C:'ornate', D:'hostile'},
      correct:'A',
      expCorrect:'The quoted words are all hedges — “may”, “appears”, “consistent with” — and the reason is given at the end: eleven nests, one season, and a result that could be overturned. Language that commits only provisionally is “tentative”. With “decisive” the sentence would describe firm claims, which is exactly what the hedges avoid.',
      expWrong:{
        B:'“Decisive” is the opposite: it would mean the authors settled the question, but they hedge every claim because one more summer could overturn it.',
        C:'“Ornate” describes decorated, elaborate style. The quoted words are plain; what marks them is caution, not ornament.',
        D:'“Hostile” attributes an attitude toward someone. Nothing in the text has the authors attacking anyone; they are being careful about their own result.'
      },
      tip:'Hedging words in quotation marks (“may”, “appears”, “suggests”) are a signal to look for a word meaning “held provisionally”: tentative, provisional, qualified.'
    },
    {
      id:'WCB-03', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — check (second meaning)',
      passage:"On the island the beetle has no natural enemy, and its numbers roughly double every summer until the leaf supply runs out. On the mainland a parasitic wasp lays its eggs in the beetle larvae, and the population there has held level for as long as anyone has counted it. Entomologists describe the wasp as the only real check on the species.",
      stem:'As used in the text, what does the word "check" most nearly mean?',
      choices:{A:'inspection', B:'inquiry', C:'mark', D:'restraint'},
      correct:'D',
      expCorrect:'The two halves of the text are a controlled comparison: no wasp, numbers double; wasp present, “the population there has held level”. The wasp is what keeps the beetle from multiplying, so “check” here is a restraint, a curb on growth. With “inspection” the sentence would say the wasp examines the beetle, which no part of the text supports.',
      expWrong:{
        A:'“Inspection” is the everyday sense of “check” (to look something over). The wasp does not examine anything; it holds the numbers down.',
        B:'“Inquiry” belongs to the same everyday family as inspection — asking or looking into something — and has nothing to do with a population staying level.',
        C:'“Mark” (a tick in a box) is a third common sense of the noun, and it fits nothing in a passage about population growth.'
      },
      tip:'The noun “check” very often means “a curb on growth or force”. If the sentence is about something being held back, kept level, or slowed, take that sense and ignore the “examine” sense.'
    },
    {
      id:'WCB-04', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — arrest (second meaning)',
      passage:"Conservators are careful about what they promise. Nothing, they say, can undo what forty years in seawater did to the bronze: the pitting is permanent. What the resin coating can do is arrest the corrosion, holding the surface in the state the divers found it, so that visitors a century from now see roughly what visitors see today.",
      stem:'As used in the text, what does the word "arrest" most nearly mean?',
      choices:{A:'conceal', B:'halt', C:'detain', D:'reverse'},
      correct:'B',
      expCorrect:'The sentence draws a line between two things: what cannot be done (“nothing… can undo what forty years in seawater did”) and what the coating does do — “holding the surface in the state the divers found it”. Stopping a process where it stands is “halt”. With “reverse” the coating would undo the damage, which the previous sentence rules out explicitly.',
      expWrong:{
        A:'“Conceal” would mean hiding the pitting under the resin, but the text says the surface is held in its found state so visitors can see it.',
        C:'“Detain” is the police sense of “arrest”, applied to people. A chemical process is stopped, not taken into custody.',
        D:'“Reverse” is the trap the text sets up and then denies: “nothing can undo what forty years in seawater did”. Arresting corrosion stops it; it does not repair it.'
      },
      tip:'Outside the courtroom, “arrest” means “stop something already in motion”. Check whether the passage says the damage is stopped (arrested) or undone (reversed) — the SAT loves that difference.'
    },
    {
      id:'WCB-05', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — underpin',
      passage:"Every forecast in the report traces back to one unexamined assumption: that household water use in 1998 was typical of the decade. Remove that assumption and the projections collapse, which is why reviewers spent most of their two days on that single figure rather than on the elaborate modeling it %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'underpins', B:'complicates', C:'contradicts', D:'summarizes'},
      correct:'A',
      expCorrect:'The text gives the structure twice: every forecast “traces back to” the assumption, and “remove that assumption and the projections collapse”. Something a whole structure rests on and falls without is what “underpins” it. With “complicates” the assumption would merely make the modeling messier, not hold it up.',
      expWrong:{
        B:'“Complicates” would make the assumption an inconvenience. The text makes it load-bearing: take it away and the projections collapse.',
        C:'“Contradicts” reverses the relationship — the modeling is built on the assumption, not opposed to it.',
        D:'“Summarizes” points the wrong way: a single figure does not condense the modeling, it supports it.'
      },
      tip:'“Rests on”, “traces back to”, and “collapses without” are all clues for a support word: underpin, buttress, anchor.'
    },
    {
      id:'WCB-06', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — capacity (second meaning)',
      passage:"Dr. Ferrand does sit on the board of the marine institute, and the institute has taken a position on the pier. But the testimony she gave the harbor commission on Tuesday was not offered in that capacity: she spoke as a resident of the street the trucks would use, and she said so before her first sentence.",
      stem:'As used in the text, what does the word "capacity" most nearly mean?',
      choices:{A:'willingness', B:'volume', C:'role', D:'ability'},
      correct:'C',
      expCorrect:'The sentence contrasts two ways of speaking: as a board member, or “as a resident of the street the trucks would use”. What changes between them is the position from which she speaks, so “capacity” here means the role in which someone acts. With “ability” the sentence would say she was unable to testify, yet the text says she testified.',
      expWrong:{
        A:'“Willingness” would be about whether she wanted to speak. The text turns on which hat she was wearing, not on her eagerness.',
        B:'“Volume” is the storage sense of capacity (how much something holds) and fits nothing in a passage about testimony.',
        D:'“Ability” is the everyday sense, and it contradicts the text: she did give testimony, so her ability was never in question.'
      },
      tip:'“In his/her capacity as…” is almost always “in the role of”. When a passage names two positions a person could be speaking from, that is the sense being tested.'
    },
    {
      id:'WCB-07', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — anomalous',
      passage:"Of the four hundred temperature readings the buoy transmitted that winter, three sat far outside the range of all the others, and each of the three was logged within minutes of a tanker passing within a kilometer. The team did not delete them. It marked them as %BLANK% and went looking for the mechanism.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'redundant', B:'anomalous', C:'negligible', D:'fabricated'},
      correct:'B',
      expCorrect:'“Three sat far outside the range of all the others” is the definition of a departure from the expected pattern, which is what “anomalous” names. The team then hunts for the mechanism, the normal response to an anomaly. With “negligible” the readings would be too small to matter, yet the team treats them as worth investigating.',
      expWrong:{
        A:'“Redundant” would mean the three readings repeated information already present. They do the opposite: they disagree with the other 397.',
        C:'“Negligible” means small enough to ignore, but the team ignores nothing — it goes looking for the cause.',
        D:'“Fabricated” accuses someone of inventing the data. The text says the readings were logged by the buoy near passing tankers, which suggests a physical cause, not fraud.'
      },
      tip:'“Outside the range”, “unlike the rest”, “did not fit the pattern” all point to “anomalous” — a word that flags a deviation without deciding whether it is an error.'
    },
    {
      id:'WCB-08', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — preclude',
      passage:"The grant is narrower than its title suggests. Its terms allow the money to be spent only on instruments permanently installed in a building the university itself owns. Those terms %BLANK% the one purchase the geology department had in mind: a portable seismometer light enough to be carried up a ridge and set down on bare rock.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'complicate', B:'justify', C:'postpone', D:'preclude'},
      correct:'D',
      expCorrect:'The rule is absolute — the money may go “only on instruments permanently installed” — and a portable seismometer can never satisfy it. A condition that rules something out in advance “precludes” it. With “postpone” the purchase could still happen later, but nothing in the terms leaves a later.',
      expWrong:{
        A:'“Complicate” would leave the purchase possible but harder. “Only… permanently installed” leaves no version of a portable instrument that qualifies.',
        B:'“Justify” reverses the logic: the terms are what block the purchase, not what support it.',
        C:'“Postpone” implies a delay, but the terms do not push the purchase into the future — they exclude it outright.'
      },
      tip:'“Preclude” = shut out in advance. Reach for it when a rule or fact makes an outcome impossible from the start, not merely difficult or delayed.'
    },
    {
      id:'WCB-09', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — supplant',
      passage:"For eighty years the ferry schedule chalked on the terminal wall governed every crossing of the strait. Then the bridge opened. It did not simply give travelers a second option: within two years the boats were sailing empty, the company sold them for scrap, and there was no longer a schedule to chalk. The bridge had %BLANK% the ferry.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'supplanted', B:'supplemented', C:'outnumbered', D:'resembled'},
      correct:'A',
      expCorrect:'The last three clauses trace a replacement: empty boats, boats sold for scrap, no schedule left. To take the place of something and push it out is to “supplant” it. “Supplemented” is the near twin, and the text denies it in advance: “It did not simply give travelers a second option,” which is precisely what a supplement would be.',
      expWrong:{
        B:'“Supplemented” means added alongside something that continues. The sentence rules that out by saying the bridge did not simply add a second option, and the ferry stopped entirely.',
        C:'“Outnumbered” compares quantities. One bridge against one ferry line is not a question of number; it is a question of which one survives.',
        D:'“Resembled” describes similarity, which the passage never discusses — the point is that one replaced the other.'
      },
      tip:'Watch for a sentence that denies the weaker word before the blank (“did not simply add…”). That is the test writer telling you to choose the stronger relative: supplant, not supplement.'
    },
    {
      id:'WCB-10', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — delineate',
      passage:"The first half of the paper makes no argument at all. Before she defends a single claim, the author spends fifteen pages %BLANK% what she will mean by “literacy”: which practices count, which are deliberately excluded, and where the line falls for a reader who can decode a word on a sign but not a paragraph in a form.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'defending', B:'disputing', C:'delineating', D:'illustrating'},
      correct:'C',
      expCorrect:'The colon lists boundary work: what counts, what is excluded, “where the line falls”. Marking out the limits of a term is what “delineate” means. With “illustrating” the author would be giving examples of literacy, but the fifteen pages draw borders instead of offering instances.',
      expWrong:{
        A:'“Defending” is ruled out by the sentence before it: the first half “makes no argument at all”, and this happens “before she defends a single claim”.',
        B:'“Disputing” would have her arguing against someone else’s definition. The text has her building her own.',
        D:'“Illustrating” means showing by example. Listing what is included and excluded is drawing a boundary, not giving an example.'
      },
      tip:'When a passage lists inclusions, exclusions, and where a line falls, the verb is “delineate” (to mark the limits of), not a verb about examples or argument.'
    },
    {
      id:'WCB-11', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — salient',
      passage:"A determined reader could spend a week inside the ninety pages of appendices, and two of the reviewers did. What the editors asked the author for was different: one opening page carrying only the %BLANK% points — the three findings a legislator would need before a Thursday vote, and not one line more.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'technical', B:'contested', C:'preliminary', D:'salient'},
      correct:'D',
      expCorrect:'The editors want “one opening page” holding “the three findings a legislator would need before a Thursday vote, and not one line more”. Those are the points that stand out as most important, which is what “salient” means. With “technical” the page would carry exactly the appendix detail the editors are trying to leave behind.',
      expWrong:{
        A:'“Technical” describes the ninety pages of appendices the opening page is meant to replace, not the three findings a hurried legislator needs.',
        B:'“Contested” would mean the points are disputed. Nothing in the text says anyone disagrees with the findings.',
        C:'“Preliminary” means early or provisional, but these are the conclusions that drive a vote, not first impressions.'
      },
      tip:'“Salient” = standing out, most noticeable. Look for a passage that strips a long document down to a short list: the survivors of that cut are the salient points.'
    },
    {
      id:'WCB-12', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — corroborate',
      passage:"The lone eyewitness account of the 1782 flood had been read with suspicion for a century. Then a surveyor’s ledger from the neighboring parish surfaced, recording ruined fields in the same three villages in the same week. Its author had never seen the eyewitness account and had nothing to gain by echoing it, so historians now treat the ledger as evidence that %BLANK% it.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'summarizes', B:'corroborates', C:'supersedes', D:'qualifies'},
      correct:'B',
      expCorrect:'Two independent records agree on the same villages in the same week, and the ledger’s author “had never seen the eyewitness account”. Independent evidence that supports an earlier claim “corroborates” it. With “supersedes” the ledger would replace the account as the authority, but the passage’s point is that the two agree and so strengthen each other.',
      expWrong:{
        A:'“Summarizes” would mean the ledger condenses the eyewitness account, yet its author never read it — it is a separate record, not a digest of the first.',
        C:'“Supersedes” means to take the place of. Nothing here retires the eyewitness account; the ledger raises its credibility.',
        D:'“Qualifies” means to narrow or add limits to a claim. The ledger does not restrict the account, it backs it up.'
      },
      tip:'Independence is the tell. When a second source agrees with the first and could not have copied it, the word you want is “corroborate”.'
    },
    {
      id:'WCB-13', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — forestall',
      passage:"The rule reads as bureaucratic fussiness: every field crew files its route before leaving, even for a two-hour walk on a marked trail. It dates from one November afternoon in 1994, when a search ran eleven hours because nobody knew which ridge to start on, and the form exists to %BLANK% that afternoon rather than to manage another one.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'forestall', B:'resolve', C:'document', D:'exaggerate'},
      correct:'A',
      expCorrect:'The sentence ends by naming the alternative it is not: “rather than to manage another one.” Acting in advance so the event never happens is “forestall”. With “resolve” the form would help once a crew is already lost, which is exactly the option the sentence sets aside.',
      expWrong:{
        B:'“Resolve” is the contrast the sentence explicitly rejects — managing the emergency after it begins, not heading it off.',
        C:'“Document” would make the form a record of 1994. The form is filed before each trip, so it is aimed at trips that have not happened yet.',
        D:'“Exaggerate” has nobody overstating anything; the eleven-hour search is reported as fact.'
      },
      tip:'“Forestall” carries the “before” inside it. If the text stresses that an action is taken in advance, prefer it over verbs about responding once trouble arrives.'
    },
    {
      id:'WCB-14', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — economy (second meaning)',
      passage:"Readers who come to the playwright’s late work from her early plays notice first how little is on the page. A character who once explained her whole childhood across two pages now says four words and walks out the door, and the audience somehow knows the rest. Critics who dislike the late plays still praise their economy.",
      stem:'As used in the text, what does the word "economy" most nearly mean?',
      choices:{A:'thrift', B:'wealth', C:'concision', D:'structure'},
      correct:'C',
      expCorrect:'The praise follows the observation that “a character who once explained her whole childhood across two pages now says four words”. Saying much with very little is “concision”. With “thrift” the sentence would praise saving money; what is being saved here is words on a page.',
      expWrong:{
        A:'“Thrift” imports the money sense of “economy”. The playwright is sparing with dialogue, not with spending.',
        B:'“Wealth” comes from “the economy” as a financial system and reverses the point: the late plays are praised for giving less, not more.',
        D:'“Structure” would describe how the scenes are arranged. The critics are praising how little is said, not the shape of the plot.'
      },
      tip:'“Economy” of style = saying the most with the fewest means. When the passage measures what is left OUT, take that sense instead of the money sense.'
    },
    {
      id:'WCB-15', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — reservation (second meaning)',
      passage:"The dean signed the proposal on Friday and told the committee to begin ordering equipment on Monday. She did note one reservation in the margin, in pencil: the timeline assumes two instructors will be hired by January, and as of Friday nobody had been interviewed. She attached no conditions and asked for no revisions.",
      stem:'As used in the text, what does the word "reservation" most nearly mean?',
      choices:{A:'booking', B:'misgiving', C:'requirement', D:'refusal'},
      correct:'B',
      expCorrect:'She signed, told them to start Monday, “attached no conditions and asked for no revisions”, and still wrote something in the margin about an assumption she doubts. A doubt held quietly alongside approval is a “misgiving”. With “requirement” the note would be a condition of approval, and the last sentence says there were none.',
      expWrong:{
        A:'“Booking” is the travel sense of the word and fits nothing in a passage about approving a proposal.',
        C:'“Requirement” is contradicted directly: “She attached no conditions and asked for no revisions.” The note records a worry, not a demand.',
        D:'“Refusal” is the opposite of what happened — she signed the proposal and told the committee to proceed.'
      },
      tip:'A “reservation” is a doubt someone keeps even while agreeing. If the person still says yes, the word cannot mean refusal or condition.'
    },
    {
      id:'WCB-16', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — observe (second meaning)',
      passage:"The treaty sends no inspectors and levies no fines, which is why the survey result surprised the analysts who ran it. In four of the five signatory ports, every commercial fleet observed the six-week closure, even though a captain who sailed straight through it on the first morning would have faced nothing worse than gossip.",
      stem:'As used in the text, what does the word "observed" most nearly mean?',
      choices:{A:'noticed', B:'commented on', C:'celebrated', D:'obeyed'},
      correct:'D',
      expCorrect:'The surprise is that compliance happened without enforcement: no inspectors, no fines, and a captain who ignored the closure “would have faced nothing worse than gossip”. The fleets followed a rule they could have broken, so “observed” means obeyed. With “noticed” the sentence would report that they were aware of the closure, which nothing about enforcement would make surprising.',
      expWrong:{
        A:'“Noticed” is the everyday sense of observe. Being aware of a closure is not what makes the result surprising — acting on it without any penalty is.',
        B:'“Commented on” is a third common sense (“he observed that…”), but the fleets are not speaking; they are staying in port.',
        C:'“Celebrated” fits the sense of observing a holiday. A fishing closure is a restriction that is complied with, not an occasion that is marked.'
      },
      tip:'With rules, laws, customs and closures, “observe” means “comply with”. The giveaway is a sentence about whether the rule could have been broken.'
    },
    {
      id:'WCB-17', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — entertain (second meaning)',
      passage:"For thirty years the standard account held that the blades were carved on the coast and traded inland. When a graduate student argued that the traffic had run the other way, the senior editors would not %BLANK% the proposal long enough to send it out for review. Two seasons of excavation at a second inland site passed before the journal would give the idea a hearing.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'comprehend', B:'entertain', C:'endorse', D:'publicize'},
      correct:'B',
      expCorrect:'The measure of their refusal is given twice: not even “long enough to send it out for review”, and no “hearing” until two seasons of digging. To give an idea consideration, however briefly, is to “entertain” it. With “endorse” the editors would merely be refusing to agree, a far weaker claim than refusing to think about it at all.',
      expWrong:{
        A:'“Comprehend” would say the editors could not understand the proposal. The text describes an unwillingness to weigh it, not a failure to follow it.',
        C:'“Endorse” is too weak for the evidence: refusing to send a paper out for review is refusing to consider it, not merely declining to agree with it.',
        D:'“Publicize” concerns announcing the idea to others; the sentence is about the editors’ own willingness to look at it.'
      },
      tip:'“Entertain an idea” = consider it. The clue is usually a phrase measuring how briefly the idea was given a chance (“not even long enough to…”).'
    },
    {
      id:'WCB-18', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — appreciate (second meaning)',
      passage:"The violin was bought in 1961 for roughly the price of a used car, mainly because nobody could say who had made it. Two attributions and six decades later, it has appreciated so far that the family’s insurer refuses to cover it under the household policy and writes a separate one for the instrument alone.",
      stem:'As used in the text, what does the word "appreciated" most nearly mean?',
      choices:{A:'matured', B:'been admired', C:'risen in value', D:'inflated'},
      correct:'C',
      expCorrect:'The passage brackets the change with two prices: “roughly the price of a used car” in 1961, and, after the attributions, a violin that needs its own insurance policy. That is a rise in value, the financial sense of “appreciate”. With “been admired” the sentence would report changing taste, but an insurer sets premiums from price, not from admiration.',
      expWrong:{
        A:'“Matured” is a financial term for a bond or deposit reaching its due date. A violin has no due date; what changed is what buyers would pay.',
        B:'“Been admired” is the everyday sense of appreciate (to value or enjoy). The evidence is an insurance policy, which tracks money rather than esteem.',
        D:'“Inflated” blames a general rise in prices across the whole economy, but the text ties this rise to two attributions of this one instrument.'
      },
      tip:'When something bought cheaply is now worth a great deal, “appreciate” is the technical verb for that rise. Keep it separate from being admired and from inflation.'
    },
    {
      id:'WCB-19', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — sound (second meaning)',
      passage:"The referee’s report was harsh about the writing and easy about everything else. The prose was tangled, two figures were mislabeled, and the third table repeated the second. The design of the experiment, however, was entirely sound, and so the journal asked for a rewrite rather than for the study to be run again.",
      stem:'As used in the text, what does the word "sound" most nearly mean?',
      choices:{A:'audible', B:'valid', C:'thorough', D:'cautious'},
      correct:'B',
      expCorrect:'The consequence tells you the meaning: because the design is sound, the journal wants “a rewrite rather than for the study to be run again”. Only the writing is broken; the reasoning behind the experiment holds, which is “valid”. With “thorough” the praise would be about coverage, but the report faults the paper for sloppy figures and still spares the design.',
      expWrong:{
        A:'“Audible” comes from the noun “sound” and has nothing to do with an experimental design.',
        C:'“Thorough” means complete in coverage. The report lists several things the paper failed to do carefully, and still calls the design sound: the praise is about correctness, not completeness.',
        D:'“Cautious” would praise the design for taking few risks. The reason given is that the study need not be repeated, which is about the design being correct.'
      },
      tip:'“Sound” applied to an argument, a design, or reasoning means “well-founded, free of error”. Test it by asking whether the passage is praising correctness rather than volume or caution.'
    },
    {
      id:'WCB-20', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — bearing (second meaning)',
      passage:"Counsel spent nearly an hour on the defendant’s childhood, and the judge let him finish without interrupting once. Then she ruled that none of it had any bearing on the only question the jury had been asked to answer: whether the signature at the bottom of the 2019 contract was written by the defendant or by someone copying his hand.",
      stem:'As used in the text, what does the word "bearing" most nearly mean?',
      choices:{A:'posture', B:'endurance', C:'compass heading', D:'relevance'},
      correct:'D',
      expCorrect:'The ruling sets the hour of testimony against “the only question the jury had been asked to answer”, and says the first has no connection to the second. A connection to the matter at hand is “relevance”. With “posture” the judge would be commenting on how the defendant carried himself, which no part of the ruling concerns.',
      expWrong:{
        A:'“Posture” is the everyday sense of bearing (how a person carries himself). The judge is ruling on evidence, not on the defendant’s manner.',
        B:'“Endurance” confuses “bearing” with “bearing up”, enduring something. Nothing here is being withstood.',
        C:'“Compass heading” is a real sense of the noun, but the courtroom has no direction to steer.'
      },
      tip:'“Has no bearing on X” always means “has nothing to do with X”. If the sentence names a question or issue after the word, the relevance sense is the one being tested.'
    },
    {
      id:'WCB-21', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — contingent',
      passage:"The headline figure is not a forecast so much as a conditional. A nine percent drop in emissions by 2040 follows from the model only if a carbon price no legislature has yet passed takes effect on schedule, and only if adoption proceeds at rates measured in a single pilot city. The number is thoroughly %BLANK%: strip away either assumption and it has no standing at all.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'contingent', B:'provisional', C:'arbitrary', D:'incidental'},
      correct:'A',
      expCorrect:'The colon spells out the relationship: the figure “follows from the model only if” two things hold, and “strip away either assumption and it has no standing at all”. A result that stands or falls with stated conditions is “contingent”. With “provisional” the figure would be a placeholder awaiting a better one, but the problem is not that it is temporary; it is that it depends on conditions that may never occur.',
      expWrong:{
        B:'“Provisional” means adopted for now and expected to be replaced. The text never says a better figure is coming; it says this one collapses if either assumption fails.',
        C:'“Arbitrary” would mean the number was chosen for no reason. The passage gives its reasons in detail — a carbon price and a pilot city adoption rate.',
        D:'“Incidental” means minor or beside the point, yet this is the headline figure, the one the whole model is quoted for.'
      },
      tip:'“Contingent” = true only if something else is true. When a sentence lists the “only if” conditions and says the claim dies without them, that is the word, not a word about being temporary.'
    },
    {
      id:'WCB-22', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — spurious',
      passage:"Counties with more bookstores do report higher recycling rates, and the coefficient is large enough to survive the usual tests. Both variables, though, track median household income almost perfectly, and once income is entered into the regression the association vanishes. The relationship is %BLANK%: quite real in the table, and empty as an explanation of anything.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'inverse', B:'causal', C:'spurious', D:'marginal'},
      correct:'C',
      expCorrect:'The colon supplies the definition: “quite real in the table, and empty as an explanation”. An association that looks genuine but is produced by a third variable — here income — is “spurious”. With “marginal” the correlation would be small, but the text says the coefficient is large enough to survive the usual tests.',
      expWrong:{
        A:'“Inverse” would mean the two move in opposite directions, but more bookstores go with HIGHER recycling rates.',
        B:'“Causal” is the claim the passage dismantles: the association disappears once income is controlled for, so bookstores explain nothing.',
        D:'“Marginal” is about size, and the size is not the issue — the text grants that the coefficient is large.'
      },
      tip:'“Spurious” describes a correlation that survives the statistics but dies once a lurking variable is added. Size is not the test; disappearing under a control is.'
    },
    {
      id:'WCB-23', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — attenuate',
      passage:"In the first small trial the drug halved relapse. In the three larger trials that followed, the same dose lowered relapse by nine percent, then six, then four. The benefit never disappeared, and in every trial it stayed on the same side of zero; it simply %BLANK% with each broadening of the sample, which is the pattern statisticians expect when an early result owed something to luck.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'attenuated', B:'persisted', C:'reversed', D:'compounded'},
      correct:'A',
      expCorrect:'The numbers fall in order — fifty percent, then nine, six, four — while the sentence insists the effect “never disappeared”. Growing steadily weaker without vanishing is “attenuate”. With “persisted” the effect would have held steady, but a drop from fifty percent to four is not holding steady.',
      expWrong:{
        B:'“Persisted” is tempting because the benefit never disappeared, but persisting means continuing at strength; these numbers shrink at every step.',
        C:'“Reversed” would mean the drug began causing relapse. Every trial still shows a benefit “on the same side of zero”.',
        D:'“Compounded” means grew larger by accumulation, the opposite of a benefit that falls from half to four percent.'
      },
      tip:'“Attenuate” = weaken without vanishing. If a passage tracks an effect that keeps shrinking but never flips sign, that is the precise verb.'
    },
    {
      id:'WCB-24', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — circumscribe',
      passage:"The court did not strike the agency’s power down; it drew a line around it. After the ruling the agency may still set limits, but only on the three pollutants named in the 1977 statute, and only at facilities built after that year. Everything outside those two boundaries now belongs to the states. Its authority was %BLANK%, not abolished.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'clarified', B:'suspended', C:'delegated', D:'circumscribed'},
      correct:'D',
      expCorrect:'The passage supplies the image and then the contrast: the court “drew a line around it”, and the authority was “___, not abolished”. Confining a power inside stated limits is “circumscribe”. With “clarified” the ruling would only have explained a boundary that already existed, but the text says everything outside the new line now belongs to the states.',
      expWrong:{
        A:'“Clarified” would leave the agency’s reach unchanged and merely better described. Here the reach itself shrinks: powers it had now sit with the states.',
        B:'“Suspended” means halted for a time, which the sentence rules out twice — “not abolished”, and the agency “may still set limits”.',
        C:'“Delegated” would mean the agency handed its power to someone else. The court, not the agency, moved the boundary.'
      },
      tip:'“Circumscribe” = keep within limits. Look for a passage that says a power still exists but only inside a stated fence; that rules out both “abolish” words and “explain” words.'
    },
    {
      id:'WCB-25', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — qualify (second meaning)',
      passage:"The first line of the abstract says flatly that the treatment works. The discussion, eleven pages later, takes most of that back: the effect appeared only in patients under forty, only at the two hospitals using the newer scanner, and only across the first six months of follow-up. Reviewers asked the authors to let the abstract qualify the claim the way the discussion already does.",
      stem:'As used in the text, what does the word "qualify" most nearly mean?',
      choices:{A:'limit', B:'certify', C:'justify', D:'prepare'},
      correct:'A',
      expCorrect:'The discussion is described as taking the claim back in three specific ways — “only in patients under forty, only at the two hospitals…, only across the first six months” — and the reviewers want the abstract to do the same. Adding restrictions that narrow a statement is what “qualify” means here. With “justify” the abstract would defend the claim, but the reviewers are asking it to claim less.',
      expWrong:{
        B:'“Certify” comes from “a qualified physician”, the credential sense. Nobody is being credentialed; a sentence is being narrowed.',
        C:'“Justify” points the wrong way: the reviewers want the abstract to concede limits, not to argue harder for the result.',
        D:'“Prepare” is the sense in “qualify for the final”. An abstract is not being made eligible for anything.'
      },
      tip:'To “qualify” a claim is to weaken it on purpose by attaching limits (only, in some cases, under these conditions). Never read it as strengthening.'
    },
    {
      id:'WCB-26', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — table (second meaning)',
      passage:"Two hours in, it was clear that nobody could say what the renovation would cost until the audit closed in March. Rather than vote on a figure no one trusted, the board agreed to %BLANK% the motion. The secretary struck it from Thursday’s business and placed it, unchanged, at the top of the agenda for the spring session.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'amend', B:'withdraw', C:'table', D:'ratify'},
      correct:'C',
      expCorrect:'The last sentence shows what happened to the motion: struck from Thursday’s business and placed “unchanged, at the top of the agenda for the spring session”. In American parliamentary usage, to “table” a motion is to set it aside for later, which is exactly that. With “withdraw” the motion would be gone for good, yet it reappears in the spring.',
      expWrong:{
        A:'“Amend” means to change the wording. The secretary carries the motion forward “unchanged”, so nothing was rewritten.',
        B:'“Withdraw” removes a motion from consideration altogether. This one keeps its place and returns in the spring.',
        D:'“Ratify” means to approve formally, which is precisely what the board refuses to do without a trustworthy figure.'
      },
      tip:'In US usage, to table a motion is to postpone it, not to propose it. Check whether the passage shows the item coming back later — that confirms the postponement sense.'
    },
    {
      id:'WCB-27', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — compromise (second meaning)',
      passage:"The freezer alarm rang into an empty building over the long weekend, and by Tuesday morning the internal temperature had climbed nine degrees. Not a single vial was thrown out. Even so, the laboratory recorded every sample from that shelf as compromised and repeated four months of assays rather than publish numbers it could not stand behind.",
      stem:'As used in the text, what does the word "compromised" most nearly mean?',
      choices:{A:'surrendered', B:'impaired', C:'discarded', D:'negotiated'},
      correct:'B',
      expCorrect:'The samples still exist — “not a single vial was thrown out” — yet the lab will not trust them and redoes four months of work. The word therefore marks damage to their reliability, which is “impaired”. With “discarded” the sentence would contradict the line immediately before it, which says nothing was thrown out.',
      expWrong:{
        A:'“Surrendered” borrows the sense of compromising one’s principles by giving something up. A vial of reagent gives nothing up; it simply stops being trustworthy.',
        C:'“Discarded” is the trap for a reader skimming past the short sentence in the middle: “Not a single vial was thrown out.” The samples were kept and distrusted, not binned.',
        D:'“Negotiated” is the everyday sense of compromise, settling by mutual concession. A freezer and a shelf of samples do not bargain.'
      },
      tip:'Applied to data, samples, evidence, or security, “compromise” means “damaged in integrity”, not “settled by concession”. Ask what lost its reliability.'
    },
    {
      id:'WCB-28', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — afford (second meaning)',
      passage:"The ridge is a two-hour climb, the last stretch is loose rock, and the summit is crowded by noon. Nothing else in the valley, however, affords the view that those final hundred meters do: three glaciers at once, and the river that drains all of them running south until it thins into haze.",
      stem:'As used in the text, what does the word "affords" most nearly mean?',
      choices:{A:'withstands', B:'purchases', C:'spares', D:'provides'},
      correct:'D',
      expCorrect:'The sentence compares places, not budgets: “nothing else in the valley… affords the view that those final hundred meters do.” The ridge is what gives, or yields, that view, so “affords” means “provides”. With “purchases” the sentence would be about the cost of the climb, and no price is mentioned anywhere.',
      expWrong:{
        A:'“Withstands” confuses “afford” with enduring hardship. The ridge is not resisting the view; it is where the view comes from.',
        B:'“Purchases” is the money sense that dominates the everyday word (“can’t afford it”), but nothing in the passage is being bought.',
        C:'“Spares” belongs to “afford the time”, meaning to give something up. The ridge gives a view rather than giving one up.'
      },
      tip:'“Afford” outside money means “provide, make available”. A subject that is a place, a method, or a document is a strong signal for that sense.'
    },
    {
      id:'WCB-29', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Words in Context — obviate',
      passage:"Under the old protocol each sample was weighed twice, once wet and once after drying, because the water content had to be subtracted by hand. The new sensor reports dry mass directly. It does not make the second weighing quicker, and it does not make it more accurate; it %BLANK% it, and the technicians who once spent every Thursday at the balance now spend Thursdays elsewhere.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'obviates', B:'expedites', C:'refines', D:'duplicates'},
      correct:'A',
      expCorrect:'The clause just before the blank closes two doors at once: the sensor makes the second weighing neither “quicker” nor “more accurate”. What is left is that the step is no longer needed at all, which is confirmed by technicians who now spend Thursdays elsewhere. To remove the need for something is to “obviate” it. With “expedites” the sentence would contradict its own previous clause, which denies that anything got faster.',
      expWrong:{
        B:'“Expedites” means speeds up, and the sentence has just denied exactly that: “It does not make the second weighing quicker.”',
        C:'“Refines” means improves, denied by the second half of the same denial: it does not make the weighing more accurate either.',
        D:'“Duplicates” would mean the sensor repeats the weighing, but the technicians have stopped doing it — the step is gone, not doubled.'
      },
      tip:'When a sentence rules out “faster” and “better” before the blank, the remaining option is usually “unnecessary”: obviate, dispense with, render redundant.'
    },
    {
      id:'WCB-30', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Words in Context — tractable',
      passage:"Stated in full generality, the routing problem is hopeless: the number of possible routes grows faster than any machine could ever enumerate them. Fix the number of depots at three, however, and the same question becomes %BLANK%. An ordinary laptop returns the optimal route in under a second, and the proof that it is optimal fits on a single page.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'negotiable', B:'plausible', C:'tractable', D:'trivial'},
      correct:'C',
      expCorrect:'The two sentences after the blank give the evidence: a laptop “returns the optimal route in under a second”, and the proof “fits on a single page”. A problem that can actually be solved with the means at hand is “tractable”. With “trivial” the problem would need no real work, yet it still takes a computation and a page of proof.',
      expWrong:{
        A:'“Negotiable” applies the everyday sense of tractable — easy to manage or persuade — to people. A routing problem has nothing to bargain with.',
        B:'“Plausible” describes a claim that seems believable. The issue here is not whether the problem is believable but whether it can be solved.',
        D:'“Trivial” overshoots: it means the answer takes no effort at all. The restricted problem still requires a computation and a written proof of optimality.'
      },
      tip:'“Tractable” = solvable or manageable with available tools, and it is a step below “trivial”. If the passage still shows work being done, tractable is the safer word.'
    },
    {
      id:'WCB-31', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Words in Context — canonical',
      passage:"Nobody defends the 1953 edition as the best text of the poem. It rests on two late manuscripts, and its editor quietly repaired lines he found ugly. It remains the %BLANK% one all the same: every study since cites the poem by its page and line numbers, so that even the scholars who spend a chapter attacking it must use its numbering to be understood at all.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'definitive', B:'authoritative', C:'original', D:'canonical'},
      correct:'D',
      expCorrect:'The passage separates two things: quality, which it denies (“nobody defends the 1953 edition as the best”), and status, which it affirms (“even the scholars who spend a chapter attacking it must use its numbering”). A text that everyone must refer to by convention, whether or not they admire it, is the “canonical” one. With “definitive” the sentence would call it the version that settles the question, which the first line rejects outright.',
      expWrong:{
        A:'“Definitive” means it settles the matter for good. The first sentence denies exactly that: nobody defends it as the best text.',
        B:'“Authoritative” claims the edition can be trusted, which the second sentence undercuts — the editor “quietly repaired lines he found ugly”.',
        C:'“Original” would make it the earliest text, but it is built from two LATE manuscripts and dates from 1953.'
      },
      tip:'“Canonical” marks the version everyone refers to by agreement, not the best or the earliest one. The tell is a passage where critics of the text still have to use it.'
    },
    {
      id:'WCB-32', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Words in Context — sanction (second meaning)',
      passage:"Nobody disputes that the trenches were dug; the dispute is over whether digging them was permitted. The ministry’s own file appears to settle it. A letter dated three weeks before the first trench was opened, signed by the deputy minister, sanctions the excavation of the eastern terrace and names the two archaeologists cleared to direct it.",
      stem:'As used in the text, what does the word "sanctions" most nearly mean?',
      choices:{A:'penalizes', B:'authorizes', C:'restricts', D:'finances'},
      correct:'B',
      expCorrect:'The paragraph frames the question as “whether digging them was permitted”, and the letter predates the first trench and “names the two archaeologists cleared to direct it”. A document that grants official permission “authorizes”. With “penalizes” the letter would punish the dig, the sense students know from news about economic sanctions — and the opposite of what settles this dispute.',
      expWrong:{
        A:'“Penalizes” is the familiar news sense of the word and reverses the letter’s effect: a punishment issued three weeks BEFORE the digging would settle nothing about permission.',
        C:'“Restricts” is tempting because the letter does mention limits — one terrace, two directors — but its function is to grant the dig, with those details naming what is allowed.',
        D:'“Finances” would make the letter a funding decision. Nothing in it concerns money; it concerns who was cleared to dig where.'
      },
      tip:'“Sanction” is a contronym: as a verb it usually means “to authorize”, as a plural noun it usually means penalties. Let the sentence, not the headlines, decide.'
    },
    {
      id:'WCB-33', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Words in Context — temper (second meaning)',
      passage:"The curator’s introduction praises the photographer for four pages, then gives its last paragraph to the two summers he spent restaging scenes he had claimed to stumble upon. The wall text repeats that shape in miniature: every caption that calls an image a document tempers the word with one sentence about how the frame was arranged.",
      stem:'As used in the text, what does the word "tempers" most nearly mean?',
      choices:{A:'moderates', B:'hardens', C:'defines', D:'echoes'},
      correct:'A',
      expCorrect:'The captions repeat the shape of the introduction: a claim, then something that pulls back on it. Calling an image a document and then adding how the frame was arranged softens the force of the claim, which is “moderates”. With “hardens” the caption would strengthen the word “document”, yet the added sentence is precisely what casts doubt on it.',
      expWrong:{
        B:'“Hardens” is the metallurgical sense of temper (tempered steel) and reverses the meaning: the caption weakens the claim rather than toughening it.',
        C:'“Defines” would mean the sentence explains what “document” means. It does not explain the word; it undercuts whether the image deserves it.',
        D:'“Echoes” would have the caption repeat the claim, but the added sentence pushes back rather than restating.'
      },
      tip:'“Temper” a claim = soften it. Watch for the structure “strong statement + one sentence pulling back”; that is tempering, and it is a cousin of “qualify”.'
    },
    {
      id:'WCB-34', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Words in Context — command (second meaning)',
      passage:"The workshop’s chairs are plain, and its own catalog admits that four men assembled them in one season from a single lot of ash. At the November auction a pair %BLANK% forty times the price of the carved cabinet standing beside them, for the reason collectors give whenever anyone asks them: almost nothing built in that year survived the fire.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'offered', B:'justified', C:'commanded', D:'demanded'},
      correct:'C',
      expCorrect:'The blank needs a verb for what an object does at auction: the pair of chairs was sold for forty times the cabinet’s price. “Commanded” carries exactly that sense, to be sold for or attract a given price, and the reason given is scarcity, “almost nothing built in that year survived the fire”. With “justified” the sentence would claim the chairs deserved the price on merit, which the first line denies by calling them plain.',
      expWrong:{
        A:'“Offered” reverses who does what: bidders offer money, the chairs do not offer a price.',
        B:'“Justified” makes the sentence an argument that the price was deserved. The passage says the chairs are plain and that what buyers paid for was scarcity.',
        D:'“Demanded” imports the “give an order” sense of command. Furniture makes no demands; the auction reports what it fetched.'
      },
      tip:'“Command a price” means “be sold for”. When the subject is an object or a service rather than a person, take that sense instead of the “give orders” sense.'
    }
  ]
});
