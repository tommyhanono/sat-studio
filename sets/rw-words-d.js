/* SAT Studio question set — Reading & Writing: Words in Context — Core Vocabulary (WID-01 to WID-34) */
/* La rampa de abajo de Words in Context: las palabras que el examen usa una y otra vez
   (aid/hinder, reveal/obscure, precise/vague, common/rare, essential/optional) mas un
   escalon de vecinas academicas (mitigate, sustain, prompt, foster, refine, discern,
   yield, curb). Formato oficial de "most logical and precise word or phrase": la pista
   siempre esta en el pasaje y expCorrect la cita textual. Sin extreme. */
window.SAT_SETS.push({
  id: 'rw-words-d',
  title: 'Words in Context — Core Vocabulary',
  section: 'rw',
  level: 'Fácil',
  description: 'Thirty-four short passages built on the everyday verbs and adjectives the exam reuses: aid and hinder, reveal and obscure, precise and vague. Cover the options, predict the word from the evidence, then choose.',
  minutes: 36,
  questions: [
    {
      id:'WID-01', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — aid',
      passage:"Surgeons removing a tumor from the pancreas once relied on touch alone to find where the diseased tissue ended. A dye developed at a clinic in Leiden binds only to tumor cells and glows green under a filtered lamp; in trials it cut the time spent searching for that border by half. The dye does not perform the operation. It %BLANK% the hand that does.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'replaces', B:'aids', C:'delays', D:'records'},
      correct:'B',
      expCorrect:'The last two sentences set the limits: "The dye does not perform the operation," and yet in trials it "cut the time spent searching for that border by half." Something that helps without doing the job itself aids the surgeon.',
      expWrong:{
        A:'"Replaces" is ruled out by the sentence right before the blank: the dye "does not perform the operation," so it cannot stand in for the surgeon.',
        C:'"Delays" reverses the evidence. The trials cut the searching time in half rather than adding to it.',
        D:'"Records" would mean the dye keeps a log of the operation, but the passage describes it guiding the search, not documenting it.'
      },
      tip:'Cover the four options and say your own word first. Here the text hands you one: it helps but does not do the job, so predict "helps" and pick the option that means that.'
    },
    {
      id:'WID-02', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — hinder',
      passage:"The plate armor worn by the mounted troops at Anserel in 1418 weighed close to thirty kilograms, which mattered little on dry ground. That autumn the field had been under water for a week. Riders who were thrown sank to the knee and could not stand again without help. Armor meant to shield the men in the saddle instead %BLANK% them.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'sheltered', B:'distinguished', C:'hindered', D:'concealed'},
      correct:'C',
      expCorrect:'The sentence turns on "instead," so the blank has to oppose "meant to shield." The evidence sits just above it: riders who were thrown "sank to the knee and could not stand again without help." Armor that keeps a man from standing hinders him.',
      expWrong:{
        A:'"Sheltered" repeats "meant to shield" instead of opposing it, and the word "instead" demands the opposite.',
        B:'"Distinguished" would mean the armor marked the riders out from other soldiers; the passage is about moving in mud, not about appearance.',
        D:'"Concealed" would mean the armor hid the men, but thirty kilograms of plate is described here as weight, never as a disguise.'
      },
      tip:'The word "instead" is a reversal signal: whatever the sentence says was intended, the blank means the opposite of it. Predict that opposite before you look down.'
    },
    {
      id:'WID-03', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — reveal',
      passage:"The reservoir behind the Calder dam was filled in 1935, and the stone bridge on the valley floor went under with the village it had served. Three dry summers in a row have now dropped the water forty feet. Walkers can cross the bridge again. What the drought has done, in effect, is %BLANK% a structure no one alive had seen.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'reveal', B:'restore', C:'submerge', D:'dismantle'},
      correct:'A',
      expCorrect:'The passage never says the bridge was repaired or moved. It says the water dropped "forty feet" and that "Walkers can cross the bridge again." Lowering the water only brings into view "a structure no one alive had seen," which is what reveal means.',
      expWrong:{
        B:'"Restore" would mean the drought repaired the bridge. Nothing was built or mended here; only the water level changed.',
        C:'"Submerge" is what the reservoir did in 1935, the opposite of what three dry summers did.',
        D:'"Dismantle" means to take apart, but the bridge is solid enough to walk across.'
      },
      tip:'When a passage gives you a before and an after, name the change in your own words first. Here it is "the water went down and now it can be seen," so the blank means bring into view.'
    },
    {
      id:'WID-04', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — expand',
      passage:"When the mobile library began in 1996 it was one van and a route through three towns. The provincial council watched borrowing climb every year and kept adding vehicles. Today forty vans serve two hundred and ten towns, and a second depot opened last spring. The council did not merely keep the program running; it chose to %BLANK% it.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'defend', B:'audit', C:'advertise', D:'expand'},
      correct:'D',
      expCorrect:'The numbers do the work: the service went from "one van and a route through three towns" to "forty vans serve two hundred and ten towns," plus "a second depot." Growth on that scale is expansion, and "did not merely keep the program running" rules out standing still.',
      expWrong:{
        A:'"Defend" would mean the council protected the program from attack, and no opposition appears anywhere in the text.',
        B:'"Audit" means to inspect the accounts. The council watched borrowing climb, but the sentence is about what it did to the service, not about checking books.',
        C:'"Advertise" would explain more readers. It does not explain more vans, more depots, and more towns.'
      },
      tip:'When a text gives two numbers for the same thing, compare them before you read the options. One van against forty vans predicts the answer on its own.'
    },
    {
      id:'WID-05', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — restrict',
      passage:"Carters in Bramwell had always driven through the market square at any hour, and by 1889 the noise at dawn had become a standing complaint. The town board did not ban the carts, which the shops depended on. It ruled that loaded wagons could enter the square only between four and seven in the morning. The measure was designed to %BLANK% traffic, not to end it.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'record', B:'restrict', C:'encourage', D:'subsidize'},
      correct:'B',
      expCorrect:'The text separates two ideas on purpose: the board "did not ban the carts," but it let them in "only between four and seven in the morning." Permission with a limit attached is a restriction, and the closing clause confirms it with "not to end it."',
      expWrong:{
        A:'"Record" would mean counting or logging the wagons. The rule sets hours instead.',
        C:'"Encourage" reverses the sentence. Narrowing the hours to a three-hour window makes driving through the square harder, not easier.',
        D:'"Subsidize" means to pay part of a cost, and no money appears in the passage.'
      },
      tip:'Watch for "not X, but Y" built into the sentence. "Not to end it" tells you the blank is weaker than a ban but points the same way: limit.'
    },
    {
      id:'WID-06', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — adopt',
      passage:"The dwarf wheat line was bred at a research station in Pallenberg, not by the farmers of the valley below. When it was first offered, growers there planted a corner of one field with it and watched. By the fourth season, nine of every ten fields in the valley carried the new line. The farmers did not develop the variety; they %BLANK% it.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'adopted', B:'invented', C:'resisted', D:'exported'},
      correct:'A',
      expCorrect:'Two clues fence the answer in. "Bred at a research station in Pallenberg, not by the farmers" rules out creating it, and "By the fourth season, nine of every ten fields in the valley carried the new line" shows they took it up. To adopt is to take up something someone else made.',
      expWrong:{
        B:'"Invented" is denied twice: the line was bred at the station, and the last sentence says the farmers "did not develop the variety."',
        C:'"Resisted" contradicts nine fields out of ten planted with it.',
        D:'"Exported" would mean sending it elsewhere, and the passage keeps the whole story inside the valley.'
      },
      tip:'A sentence shaped "did not X; they ___" is a gift. The blank is the alternative to X, so build your prediction out of X before you read down.'
    },
    {
      id:'WID-07', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — abandon',
      passage:"The silver vein under Harkness Flat ran out in 1899. For a while the town held on by selling to ranches on the plain, but the school closed in 1906 and the post office in 1911. A survey party that walked in twelve years after the vein failed found doors standing open and no one to ask. The residents had not sold the town; they had %BLANK% it.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'fortified', B:'rebuilt', C:'flooded', D:'abandoned'},
      correct:'D',
      expCorrect:'The survey party "found doors standing open and no one to ask," and the closing sentence removes the alternative: the residents "had not sold the town." Leaving a place empty without handing it to anyone is to abandon it.',
      expWrong:{
        A:'"Fortified" means strengthened against attack, and the doors were standing open.',
        B:'"Rebuilt" contradicts a school and a post office that closed and never reopen anywhere in the text.',
        C:'"Flooded" describes water. The only thing that ran out here was the silver vein.'
      },
      tip:'Let the physical detail decide. "Doors standing open and no one to ask" is a picture of a place people walked away from, so predict "left it empty" first.'
    },
    {
      id:'WID-08', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — common',
      passage:"For decades the grey-throated warbler was listed as scarce, since it is the color of bark and sits very still. Then a recording team learned its two-note call and surveyed two hundred and thirty valleys by sound alone. The bird turned up in two hundred and fourteen of them. It was never scarce, only hard to see, and in the hill country it is in fact %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'endangered', B:'solitary', C:'common', D:'elusive'},
      correct:'C',
      expCorrect:'The count is the definition: the warbler "turned up in two hundred and fourteen" of "two hundred and thirty valleys," which is all but sixteen. A bird present in that many places is common, and the sentence says outright "It was never scarce."',
      expWrong:{
        A:'"Endangered" is the reverse of what the survey found, and it would need numbers falling over time, which the passage never gives.',
        B:'"Solitary" describes how a bird lives rather than how many there are. The survey counted places, not group size.',
        D:'"Elusive" is true of the bird — it "is the color of bark and sits very still" — but it names why people missed it, not what the count proved. After "It was never scarce," the blank has to answer how many.'
      },
      tip:'Ask what the evidence measures. A count of places answers "how many," so the blank must be a word about quantity, not about behavior or appearance.'
    },
    {
      id:'WID-09', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — rare',
      passage:"Kalverite forms only where a particular volcanic glass cools under pressure, a combination documented at two sites on earth. Museums hold four grams of it in total, three of those grams in a single drawer in Oslo. Geologists who study it work from photographs more often than from the mineral itself, because the substance is that %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'rare', B:'fragile', C:'valuable', D:'unstable'},
      correct:'A',
      expCorrect:'The passage counts what exists: "two sites on earth," "four grams of it in total," and researchers who "work from photographs more often than from the mineral itself." Those are all statements about how little of it there is, which is what rare means.',
      expWrong:{
        B:'"Fragile" would mean it breaks easily, and nothing in the text describes the mineral being handled or damaged.',
        C:'"Valuable" is a guess about price, and the passage never says what kalverite costs or sells for.',
        D:'"Unstable" would mean it decays or changes on its own. The text says it is hard to find, not that it falls apart.'
      },
      tip:'Scarce and delicate are different ideas. Check whether the evidence counts how much exists or describes what happens to it, then match the word to the evidence you actually have.'
    },
    {
      id:'WID-10', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — permanent',
      passage:"The steel bridge over the Nevin went up in 1964 while the stone one was being repaired, and the council minutes of that year call it a temporary crossing. The stone bridge was never repaired. The steel span still carries two thousand vehicles a day, sixty-one years later, and the current minutes drop the word temporary altogether. What was built as a stopgap has become %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'seasonal', B:'permanent', C:'decorative', D:'experimental'},
      correct:'B',
      expCorrect:'The passage measures one gap and nothing else: the bridge was called "a temporary crossing" in 1964 and it "still carries two thousand vehicles a day, sixty-one years later." A stopgap that outlasts the thing it replaced, and loses the label, is permanent.',
      expWrong:{
        A:'"Seasonal" would mean it is used part of the year. It carries traffic every day.',
        C:'"Decorative" ignores two thousand vehicles a day, which is a working load rather than an ornament.',
        D:'"Experimental" would mean the bridge is being tested. Nobody is testing it; the council has quietly stopped calling it temporary.'
      },
      tip:'When a passage repeats a label and then withdraws it, the blank is usually the opposite of that label. Predict "no longer temporary" and find the single word for it.'
    },
    {
      id:'WID-11', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — straightforward',
      passage:"Testing river water for lead once meant eleven reagents, a bench of glassware, and two days of waiting for a laboratory to answer. The strip the same inspectors carry today needs one drop of water and twenty minutes, and it is read by eye against a printed scale. The chemistry underneath is no simpler than it was. The procedure, however, is now %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'costly', B:'contested', C:'delicate', D:'straightforward'},
      correct:'D',
      expCorrect:'The contrast is spelled out step by step: "eleven reagents, a bench of glassware, and two days" against "one drop of water and twenty minutes," read "by eye against a printed scale." A procedure stripped of all those steps is straightforward, and the text is careful to say only the procedure changed.',
      expWrong:{
        A:'"Costly" cannot be supported, because the passage never prices either method.',
        B:'"Contested" would mean people argue about the strip, and no disagreement appears in the text.',
        C:'"Delicate" fits the bench of glassware, which belongs to the old method the sentence is moving away from.'
      },
      tip:'Underline the two lists a passage compares, then say what is true of the second one. "One drop and twenty minutes, read by eye" predicts simple before you read a single option.'
    },
    {
      id:'WID-12', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — widespread',
      passage:"Researchers expected the custom of naming a child after a living grandparent to belong to the coastal districts, where it was first described in 1902. A survey of parish registers covering twenty-six provinces found the practice in all but two of them, from the fishing towns to the dry uplands six hundred kilometers inland. The custom is not regional. It is %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'recent', B:'declining', C:'widespread', D:'contested'},
      correct:'C',
      expCorrect:'The survey is the evidence: the practice appears "in all but two" of "twenty-six provinces," reaching "from the fishing towns to the dry uplands six hundred kilometers inland." Something found nearly everywhere across that range is widespread, and the sentence before the blank rules out the alternative with "The custom is not regional."',
      expWrong:{
        A:'"Recent" is a word about time. The passage dates the first description to 1902 and then measures places, not years.',
        B:'"Declining" would need numbers falling over time, and the survey is a single snapshot of where the custom exists.',
        D:'"Contested" would mean people argue about the custom. The researchers were surprised by its reach, not by any dispute.'
      },
      tip:'Match the blank to the kind of evidence you were given. Provinces and kilometers measure spread, so the answer has to be a word about how far something reaches.'
    },
    {
      id:'WID-13', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — essential',
      passage:"In yeast the enzyme the laboratory calls Tavr1 rebuilds the machinery that clears damaged proteins out of the cell. Strains engineered without it grow normally for about an hour. After that the damaged proteins pile up, the cell stops dividing, and by the third hour the culture is dead. Nothing else in the cell takes over the job. For this organism the enzyme is %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'essential', B:'abundant', C:'harmless', D:'unstable'},
      correct:'A',
      expCorrect:'The experiment answers the question directly: without the enzyme "the cell stops dividing, and by the third hour the culture is dead," and "Nothing else in the cell takes over the job." Something an organism cannot live without and cannot substitute for is essential.',
      expWrong:{
        B:'"Abundant" is about how much of the enzyme there is, and the passage never counts it.',
        C:'"Harmless" describes something that does no damage, which says nothing about what happens when it is missing.',
        D:'"Unstable" would mean the enzyme itself falls apart. What falls apart here is the cell that lacks it.'
      },
      tip:'A knock-out experiment defines the word for you: ask what happens when the thing is removed. If everything fails and nothing substitutes, the blank means necessary.'
    },
    {
      id:'WID-14', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Words in Context — hidden',
      passage:"When carpenters opened the north wall of the Ferris house in 2012, they found a tin box holding sixty-one letters written between 1806 and 1809. The panel had been nailed shut and papered over, and no inventory of the house mentions the box. For more than two centuries the correspondence sat a meter from the parlor where it was written, entirely %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'illegible', B:'hidden', C:'published', D:'disputed'},
      correct:'B',
      expCorrect:'Three details point the same way: the panel "had been nailed shut and papered over," "no inventory of the house mentions the box," and the letters sat "a meter from the parlor" without anyone finding them. Out of sight and off every record for two centuries is hidden.',
      expWrong:{
        A:'"Illegible" would mean the letters cannot be read. The passage says nothing about their condition, only about where they sat.',
        C:'"Published" reverses the sentence. Letters in print would not have gone unknown for two centuries.',
        D:'"Disputed" would mean people argue about them, and no argument appears in the text.'
      },
      tip:'Gather every detail that points the same direction before choosing. Nailed shut, papered over, and missing from every inventory all say one thing: nobody could see it.'
    },
    {
      id:'WID-15', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — obscure',
      passage:"The district reports one figure for reading growth, and last year that figure was a gain of two months. Inside the district, one of its forty schools gained eleven months and another lost five. A parent reading the single number would learn that the district moved slightly forward, and would learn nothing about a spread that wide. The average %BLANK% the very differences the report was meant to track.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'confirms', B:'exaggerates', C:'measures', D:'obscures'},
      correct:'D',
      expCorrect:'The passage names what goes missing: a parent reading the single number "would learn nothing about a spread that wide," while one school "gained eleven months and another lost five." To obscure is to hide something from view, which is exactly what one averaged figure does to that spread.',
      expWrong:{
        A:'"Confirms" would mean the average supports the differences, but the complaint is that the differences disappear inside it.',
        B:'"Exaggerates" means to make something look bigger than it is. The average makes an eleven-month gain and a five-month loss look like almost nothing.',
        C:'"Measures" is what the average does for the district as a whole, and the sentence is about what it fails to do for the schools inside it.'
      },
      tip:'Predict from the complaint. If the sentence describes information going missing, the blank is a word for hiding, not for measuring or overstating.'
    },
    {
      id:'WID-16', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — challenge',
      passage:"Every textbook dates the first human presence in the Rilla basin to about eleven thousand years ago, on the strength of a well-studied camp at the river mouth. A hearth found last year in a sealed layer under a rockfall returned three independent dates near fifteen thousand. The excavators are careful: one hearth does not rewrite a region. It does, however, %BLANK% a date that had gone unquestioned for fifty years.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'confirm', B:'illustrate', C:'challenge', D:'explain'},
      correct:'C',
      expCorrect:'The hearth returns dates "near fifteen thousand" where the textbooks say "about eleven thousand," and the sentence is built as a concession: "one hearth does not rewrite a region. It does, however, ___." The blank is weaker than rewriting but pushes against the accepted date, which is what challenge means.',
      expWrong:{
        A:'"Confirm" points the wrong way. A date four thousand years older conflicts with the textbook figure instead of supporting it.',
        B:'"Illustrate" would make the hearth an example of the accepted date, when it is an exception to it.',
        D:'"Explain" would mean the hearth accounts for why the old date was believed, and it gives no reason for the old date at all.'
      },
      tip:'In a sentence shaped "X does not do the big thing. It does, however, ___", the blank is a smaller version of the big thing, pointed the same way: short of rewriting, but against.'
    },
    {
      id:'WID-17', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — precise',
      passage:"Earlier surveys of the Roman wall at Cawden recorded each course of stone to the nearest half meter, which was enough to map the line the wall followed. The laser scan finished in March records the same courses to the nearest millimeter, five hundred times finer, and it shows that the builders corrected their alignment twice in the first hundred meters. The new record is not longer than the old one. It is %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'shorter', B:'more precise', C:'more readable', D:'more cautious'},
      correct:'B',
      expCorrect:'The passage measures the difference for you: "to the nearest half meter" against "to the nearest millimeter, five hundred times finer," which is what lets the scan show corrections "twice in the first hundred meters." Finer units for the same object make a more precise record, and the last sentence rules out length.',
      expWrong:{
        A:'"Shorter" answers the question the passage has just set aside: "The new record is not longer than the old one" is about size, not about quality.',
        C:'"More readable" would be about how easy the record is to use, and the comparison given is about the size of the unit.',
        D:'"More cautious" would describe surveyors hedging their claims. The scan makes a sharper claim, not a safer one.'
      },
      tip:'Precision is about the size of the unit, not the amount of data. When a text swaps half meters for millimeters, predict "finer" and pick the word that means it.'
    },
    {
      id:'WID-18', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — vague',
      passage:"The order the ministry sent the harbor master said that repairs were to begin as soon as conditions allowed. It named no date, no weather, no depth of water, and no person who would decide when that moment had come. The harbor master, who had already asked twice for a schedule, filed the order and waited. Nothing in the instruction was false. It was simply %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'vague', B:'urgent', C:'unlawful', D:'confidential'},
      correct:'A',
      expCorrect:'The middle sentence is a list of everything missing: "no date, no weather, no depth of water, and no person who would decide." An instruction that leaves all of that open is vague, and the text blocks the stronger reading with "Nothing in the instruction was false."',
      expWrong:{
        B:'"Urgent" contradicts an order with no date that the harbor master could file and wait on.',
        C:'"Unlawful" is an accusation the text refuses to make. It says the order was not false, never that it broke a rule.',
        D:'"Confidential" would mean the order was secret. It went openly to the harbor master, who had asked for it twice.'
      },
      tip:'A list of what a text does NOT say is a definition in disguise. No date, no standard, and no decider add up to one word: unspecific.'
    },
    {
      id:'WID-19', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — accidental',
      passage:"A technician at the Trellin works left a tray of copper salts on a windowsill over a holiday weekend. Sun, a spilled solvent, and four days did the rest. The film that had formed across the tray turned out to carry current at temperatures where the laboratory had failed to make anything carry current at all. Nobody had designed the experiment. The discovery was %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'inevitable', B:'deliberate', C:'fraudulent', D:'accidental'},
      correct:'D',
      expCorrect:'The setup denies any plan: the tray was "left on a windowsill over a holiday weekend," and the passage states flatly that "Nobody had designed the experiment." A result nobody intended is accidental.',
      expWrong:{
        A:'"Inevitable" would mean the result had to happen. A holiday weekend and a spilled solvent are the opposite of a guaranteed condition.',
        B:'"Deliberate" is exactly what "Nobody had designed the experiment" rules out.',
        C:'"Fraudulent" accuses someone of faking the result, which the passage never suggests. Unplanned is not the same as dishonest.'
      },
      tip:'Unplanned, unavoidable, and dishonest are three different ideas. Pick the accusation only when the text actually makes it.'
    },
    {
      id:'WID-20', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — complex',
      passage:"The model of the lagoon runs on seven loops that feed back into one another: salinity changes the algae, the algae change the light, the light changes the temperature, and the temperature changes the salinity again. Moving any one input moves all the others, which is why a single run takes a week on the cluster. The system is not disorderly. It is simply %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'unstable', B:'random', C:'complex', D:'theoretical'},
      correct:'C',
      expCorrect:'The passage describes many parts wired to each other: "seven loops that feed back into one another," where "Moving any one input moves all the others." That is complexity, and the sentence before the blank blocks the easy misreading with "The system is not disorderly."',
      expWrong:{
        A:'"Unstable" would mean the system runs away or never settles. The passage describes it as intricate, not as breaking down.',
        B:'"Random" is what "The system is not disorderly" denies. Every link named here is a rule, not chance.',
        D:'"Theoretical" would contrast the model with the real lagoon, but the sentence is describing how the system behaves, not whether it is real.'
      },
      tip:'Many connected parts means complex; no pattern at all means random. A text that names each link is always describing the first one.'
    },
    {
      id:'WID-21', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — optional',
      passage:"The second-year seminar carries no credit, and the registrar does not record whether a student attended. Advisers mention it once in the spring letter and never again. Students who skip it graduate on the same schedule as students who sit through all ten sessions. Whatever the department may wish, taking part in the seminar is in practice %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'optional', B:'unpopular', C:'expensive', D:'compulsory'},
      correct:'A',
      expCorrect:'Every detail removes a consequence: the seminar "carries no credit," attendance is not recorded, and students who skip it "graduate on the same schedule" as those who attend. When nothing follows from saying no, the activity is optional.',
      expWrong:{
        B:'"Unpopular" would need numbers on how many students come, and the passage counts sessions rather than attendance.',
        C:'"Expensive" is unsupported, since no fee or cost appears anywhere in the text.',
        D:'"Compulsory" is the reverse of a seminar a student can skip with no effect on graduating.'
      },
      tip:'Ask what happens to the student who refuses. If the answer is nothing, the blank means voluntary, however much the department wants people there.'
    },
    {
      id:'WID-22', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — abrupt',
      passage:"Counts of the estuary shrimp held between three hundred and four hundred per net from 1998 through 2016, wobbling a little from year to year. In the summer of 2017 the count was twelve. It did not slide toward twelve over several seasons; the figure was three hundred and ninety in one year and twelve in the next. The collapse was %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'steady', B:'abrupt', C:'slight', D:'expected'},
      correct:'B',
      expCorrect:'The passage rules out a slow decline in so many words: "It did not slide toward twelve over several seasons; the figure was three hundred and ninety in one year and twelve in the next." A change that lands between one year and the next is abrupt.',
      expWrong:{
        A:'"Steady" describes the nineteen years before the crash, when counts wobbled between three hundred and four hundred.',
        C:'"Slight" ignores the size of the fall, from three hundred and ninety down to twelve.',
        D:'"Expected" would require someone predicting it, and the passage names no forecast at all.'
      },
      tip:'Separate size from speed. A fall can be huge and slow or small and sudden. Here the text tells you the speed outright, so the blank is about speed.'
    },
    {
      id:'WID-23', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — isolated',
      passage:"Reviewers flagged a single reading in the Carrow ice core, at the depth where the ash layer runs thin. The same team has drilled eleven cores along that ridge over nineteen years and no other core shows it, and repeated sampling of the Carrow core itself has not reproduced it either. Until it turns up somewhere else, the reading is best treated as %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'decisive', B:'typical', C:'deliberate', D:'isolated'},
      correct:'D',
      expCorrect:'The passage counts how often the reading appears: "eleven cores along that ridge over nineteen years and no other core shows it," and resampling the same core "has not reproduced it either." One occurrence with nothing around it is isolated.',
      expWrong:{
        A:'"Decisive" would mean the reading settles a question. The whole point of the passage is that it settles nothing until it repeats.',
        B:'"Typical" is the reverse: a typical reading is one the other cores also show.',
        C:'"Deliberate" would accuse someone of producing the reading on purpose, and no such claim is made.'
      },
      tip:'Count the appearances. One instance that no other measurement repeats is isolated, which is a claim about frequency, not about whether the reading is true.'
    },
    {
      id:'WID-24', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — flexible',
      passage:"The cannery sets a weekly total of thirty-eight hours for each crew and leaves the rest to the crew itself: four long days or six short ones, mornings in July, evenings in the rainy months. Supervisors approve the total, never the pattern. Workers who once called the fixed shift the hardest part of the job now describe the arrangement as %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'temporary', B:'generous', C:'flexible', D:'informal'},
      correct:'C',
      expCorrect:'The arrangement fixes one thing and frees another: a "weekly total of thirty-eight hours" that each crew fills as it likes, "four long days or six short ones." Supervisors "approve the total, never the pattern," and a rule shaped that way is flexible.',
      expWrong:{
        A:'"Temporary" is about how long the arrangement lasts, and the passage gives it no end date.',
        B:'"Generous" would mean the hours were cut or the pay raised. The total is unchanged at thirty-eight.',
        D:'"Informal" would mean the arrangement is unofficial, but supervisors approve it, so it is a rule rather than a habit.'
      },
      tip:'Watch which part stays fixed and which part moves. When the amount is fixed and the shape is free, the word is flexible, not generous.'
    },
    {
      id:'WID-25', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — rigid',
      passage:"The society founded in 1873 required that every specimen be logged within one day of collection, in ink, by the collector who took it. In a hundred and fifty years the council has heard ninety-four requests for an exception, including one from a party stranded by a blizzard, and has granted none. The rule survives unchanged in the current handbook. The standard it sets is %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'rigid', B:'recent', C:'unwritten', D:'contested'},
      correct:'A',
      expCorrect:'The council "has heard ninety-four requests for an exception, including one from a party stranded by a blizzard, and has granted none," and the rule "survives unchanged." A standard that bends for nothing, not even a blizzard, is rigid.',
      expWrong:{
        B:'"Recent" contradicts a rule written in 1873 that still stands in the current handbook.',
        C:'"Unwritten" is denied by the handbook itself, and by a rule that specifies one day, in ink, by the collector.',
        D:'"Contested" would mean members argue about whether the rule should exist. They ask to be excused from it, which is a different thing.'
      },
      tip:'A count of exceptions granted is the cleanest evidence a passage can give you. Zero out of ninety-four predicts the answer before you read a single choice.'
    },
    {
      id:'WID-26', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — mitigate',
      passage:"The clay berms along the Tessen do not stop the river from leaving its channel; in the flood of 2021 it left the channel twice. What the berms did was hold the water to the pasture, where the damage came to a sixth of the figure insurers had projected for an unprotected valley. The engineers who built them promised to %BLANK% flooding, never to end it.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'predict', B:'mitigate', C:'prevent', D:'explain'},
      correct:'B',
      expCorrect:'The passage draws the line itself: the berms "do not stop the river from leaving its channel," and yet the damage "came to a sixth of the figure insurers had projected." Reducing harm that still happens is mitigation, and the closing clause confirms it with "never to end it."',
      expWrong:{
        A:'"Predict" is about forecasting a flood in advance, and a clay berm forecasts nothing. It changes where the water goes.',
        C:'"Prevent" is what the first sentence rules out: the river left its channel twice in 2021.',
        D:'"Explain" would mean the berms account for why floods happen, which is not a job an earthwork can do.'
      },
      tip:'Reduce and prevent are different jobs. If the bad thing still happens but hurts less, the word you want is mitigate.'
    },
    {
      id:'WID-27', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — sustain',
      passage:"The foundation paid for the neighborhood clinic through its first three years and then, as planned, stopped. Most programs it funded closed within a year of the last check. This one is in its twelfth year, carried by a pharmacy fee of one percent and by the four physicians who rotate through it without pay. The money launched the clinic. The neighborhood has %BLANK% it.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'evaluated', B:'launched', C:'relocated', D:'sustained'},
      correct:'D',
      expCorrect:'The last two sentences split the work in two: the grant "launched the clinic," and what the neighborhood did is keep it alive "in its twelfth year" through "a pharmacy fee of one percent" and unpaid physicians. To sustain is to keep something going over time.',
      expWrong:{
        A:'"Evaluated" means to judge how well it works, and nobody in the passage is measuring the clinic.',
        B:'"Launched" is already assigned to the foundation money in the sentence right before the blank, so it cannot also be what the neighborhood did.',
        C:'"Relocated" would mean the clinic moved, and the passage keeps it in the same neighborhood for twelve years.'
      },
      tip:'When a sentence says X did one thing and then asks what Y did, the blank has to be a different job from X. Cross out the word the text already used.'
    },
    {
      id:'WID-28', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — prompt',
      passage:"The inspector report on the Halvern fire was released on a Tuesday and ran to four hundred pages that few people finished. Within nine days three cities had rewritten the clause on stairwell doors, and a fourth had scheduled a vote. None of them cited the report as binding, because it was not. The report did not require the change. It %BLANK% it.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'delayed', B:'reversed', C:'prompted', D:'recorded'},
      correct:'C',
      expCorrect:'The timing is the evidence: "Within nine days three cities had rewritten the clause on stairwell doors," and the closing sentence removes the stronger reading with "The report did not require the change." Something that sets off an action it cannot command has prompted it.',
      expWrong:{
        A:'"Delayed" reverses the passage. The changes arrived nine days after the report, not later than they otherwise would have.',
        B:'"Reversed" would mean the report undid a change, but the cities had not yet written the clause it is about.',
        D:'"Recorded" would mean the report described changes that had already happened. Those changes came after it was released.'
      },
      tip:'Order and timing decide these. Event first, reaction days later means the blank is about causing, and "did not require" tells you how strongly.'
    },
    {
      id:'WID-29', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — foster',
      passage:"The new building put the plant biologists and the soil chemists on the same floor, with one coffee room and no assigned partners. Nobody was told to collaborate. In the six years before the move, four papers carried authors from both groups; in the six years after, sixty-one did. An architect cannot order a partnership. A floor plan can %BLANK% one.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'foster', B:'require', C:'replace', D:'certify'},
      correct:'A',
      expCorrect:'The counts show growth that nobody ordered: "four papers" in the six years before the move against "sixty-one" after, with "no assigned partners" and "Nobody was told to collaborate." Creating the conditions in which something grows is fostering it.',
      expWrong:{
        B:'"Require" is denied twice, by "no assigned partners" and by "An architect cannot order a partnership."',
        C:'"Replace" would mean the floor plan stands in for the partnership rather than encouraging one.',
        D:'"Certify" means to confirm something officially, which is not a thing a coffee room can do.'
      },
      tip:'Encourage and compel sit at different strengths. When a text insists nobody was ordered to do it, the blank has to be the gentler word.'
    },
    {
      id:'WID-30', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context — refine',
      passage:"The idea behind the gauge has not changed since Okon built the first one in 1994: a wire stretches, its resistance rises, the number is read off. What the laboratory changed over thirty years is the tolerance, from two millimeters to a tenth of one, and the drift, which used to need a weekly recalibration and now needs one a year. Each version %BLANK% the last rather than replacing it.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'contradicted', B:'refined', C:'abandoned', D:'publicized'},
      correct:'B',
      expCorrect:'The passage keeps the design and sharpens the numbers: the idea "has not changed since Okon built the first one in 1994," while the tolerance moved "from two millimeters to a tenth of one." Improving something in small steps without changing what it is means to refine it, and "rather than replacing it" confirms it.',
      expWrong:{
        A:'"Contradicted" would mean a later version proved an earlier one wrong. Every version works the same way, only more exactly.',
        C:'"Abandoned" is what the clause "rather than replacing it" rules out.',
        D:'"Publicized" is about making the gauge known, and the passage tracks tolerances and drift, not publicity.'
      },
      tip:'Ask whether the thing itself changed or only its numbers. Same idea plus better numbers is refinement, never replacement.'
    },
    {
      id:'WID-31', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — apparent',
      passage:"For two years the Marne and Kessel groups reported bond lengths for the same crystal that differed by almost four percent, and three review papers treated the gap as a real physical effect awaiting an explanation. In 2023 a student noticed that one group had reported in angstroms and the other in a unit its own software had quietly scaled. Converted, the two sets of numbers agree to the fourth decimal. The disagreement was %BLANK%.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'decisive', B:'longstanding', C:'unresolved', D:'apparent'},
      correct:'D',
      expCorrect:'The final sentence has to report what the conversion showed: "Converted, the two sets of numbers agree to the fourth decimal," so the two groups never actually disagreed. In this sense apparent means seeming rather than real, and it is the only option that says the disagreement was never there.',
      expWrong:{
        A:'"Decisive" would mean the disagreement settled something. It settled nothing, and then it dissolved.',
        B:'"Longstanding" is true of the two years and the three review papers, but it says the disagreement lasted, not that it vanished. The sentence comes after the conversion, so it has to report what the conversion proved.',
        C:'"Unresolved" is the reverse of a gap that closes "to the fourth decimal" the moment the units match.'
      },
      tip:'Apparent has two lives: obvious, and seeming but not real. A passage that explains a difference away is always using the second one, so let the explanation pick the meaning, not the sense you already know.'
    },
    {
      id:'WID-32', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — discern',
      passage:"A single exposure of the Ollan field shows nothing but grain: the ring, if it is there at all, sits below the noise of the detector. The team stacked nine hundred exposures, which builds up real signal and averages the noise away, and a faint arc emerges at the radius the model had predicted. No sharper instrument was used, and the object itself was never brighter. What the stacking let the team do was %BLANK% the ring.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'magnify', B:'fabricate', C:'discern', D:'illuminate'},
      correct:'C',
      expCorrect:'The passage removes every alternative: "No sharper instrument was used, and the object itself was never brighter." All that changed is that "a faint arc emerges" once nine hundred exposures are stacked. To discern is to make out something faint that was there the whole time.',
      expWrong:{
        A:'"Magnify" means to make larger, which takes optics. Stacking changes the noise, not the size of the ring.',
        B:'"Fabricate" accuses the team of inventing the ring, but the arc appears "at the radius the model had predicted," and averaging noise is a standard method rather than an invention.',
        D:'"Illuminate" means to light something up, and the passage says "the object itself was never brighter."'
      },
      tip:'When a text insists that neither the instrument nor the object changed, the blank cannot be about making the thing bigger or brighter. It has to be about the observer finally making it out.'
    },
    {
      id:'WID-33', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — yield',
      passage:"The panel expected the six-month diary study to collapse, since participants usually stop writing by week three. Instead, eighty-one of the ninety-four households stayed in to the end, and the archive now holds fourteen hundred usable records of household water use, more than the three previous surveys combined. A method chosen for how little it cost %BLANK% the richest data set the program has.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'yielded', B:'surrendered', C:'requested', D:'anticipated'},
      correct:'A',
      expCorrect:'The sentence needs a verb for producing a result: the study ended with "fourteen hundred usable records," which is "more than the three previous surveys combined." In this use yield means to produce or give as a result, which is what a method does to a data set.',
      expWrong:{
        B:'"Surrendered" is the other sense of yield, giving way under pressure. Nothing here gives in to anything; the study beat what the panel expected.',
        C:'"Requested" would mean the method asked for the data. The method is what generated the records, not what applied for them.',
        D:'"Anticipated" contradicts the opening sentence: "The panel expected the six-month diary study to collapse."'
      },
      tip:'Yield splits in two: give way, and produce. Look at what sits right after the blank. A crop, a number, or a data set means produce; ground, control, or a right means give way.'
    },
    {
      id:'WID-34', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context — curb',
      passage:"Summer water use in Ardmere had climbed about six percent a year for a decade when the utility added a steep third tier to its rate. Lawns are still watered; the utility never expected otherwise, and total summer use has not fallen. What changed is the slope: growth since the new tier has run under one percent a year. A price step cannot end a habit, but it can %BLANK% its growth.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'disguise', B:'curb', C:'eliminate', D:'measure'},
      correct:'B',
      expCorrect:'The numbers show restraint rather than removal: growth ran "about six percent a year for a decade" and "has run under one percent a year" since the new tier, while "total summer use has not fallen." To curb is to hold something back without stopping it, which is the distinction the last sentence draws with "cannot end a habit, but".',
      expWrong:{
        A:'"Disguise" would mean the habit is hidden instead of slowed, but the utility reports the use openly and those reports are the evidence.',
        C:'"Eliminate" is denied twice: "Lawns are still watered" and "total summer use has not fallen."',
        D:'"Measure" is what the utility does with its meters, and the sentence is about what the price step does to behavior.'
      },
      tip:'Read what the blank acts on. Here it acts on growth, not on the habit itself, so the answer has to mean slow down rather than stop.'
    }
  ]
});
