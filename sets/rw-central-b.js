/* SAT Studio question set — Reading & Writing: Central Ideas and Details — Set B (CDB-01 a CDB-34)
   Destreza oficial: "Central Ideas and Details" del dominio Information and Ideas.
   Mitad idea central ("main idea of the text"), mitad detalle ("According to the text...").
   Set A cubre ciencia, ciencias sociales e historia; este va a OTROS lugares a propósito:
   arte y arquitectura, música, deporte y su ciencia, tecnología y computación, lingüística,
   gastronomía e historia de la comida, derecho y ciudadanía, medio ambiente urbano,
   más 9 pasajes literarios originales (autor y título inventados). */
window.SAT_SETS.push({
  id: 'rw-central-b',
  title: 'Central Ideas and Details — Set B',
  section: 'rw',
  level: 'Media',
  description: 'Main-idea and stated-detail questions on short passages about art, music, sport science, computing, language, food, law, cities, and nine literary excerpts.',
  minutes: 40,
  questions: [
    {
      id:'CDB-01', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — main idea',
      passage:"When the city of Rowan commissioned a new municipal library, the architect, Ines Bardal, spent her first month not drawing but counting. She recorded where people already sat on the block: on planters, on the low wall by the bus stop, on the steps of the old post office. Her final design put a wide, shallow staircase across the entire front of the building. Visitors use it as a doorway; residents use it as furniture. Bardal has said that the staircase, not the reading room, is the part of the library she most wanted to get right.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Bardal spent the first month of the project counting where people sat on the block.',
        B:'Bardal designed the library around where people in Rowan already sat.',
        C:'Public buildings succeed only when their architects study the neighborhoods around them.',
        D:'The reading room was the space in the library that Bardal worked hardest to perfect.'
      },
      correct:'B',
      expCorrect:'The counting comes first and the staircase follows from it: Bardal recorded “where people already sat on the block” and then “put a wide, shallow staircase across the entire front,” which residents “use as furniture.”',
      expWrong:{
        A:'True but secondary: the month of counting is the method that produced the design, not the point the last sentence builds toward.',
        C:'Too broad: the text describes one architect and one library, and never claims this is the only way a public building can succeed.',
        D:'The text says the opposite. Bardal names the staircase, “not the reading room,” as the part she most wanted to get right.'
      },
      tip:'The main idea is the claim the whole passage supports, not the first step in the story. Ask which sentence the others exist to set up.'
    },
    {
      id:'CDB-02', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — stated detail',
      passage:"At the start of a sprint, the official timing system does not simply record who leaves the blocks first. Each block is fitted with a pressure sensor, and any athlete who pushes against it less than a tenth of a second after the gun is charged with a false start. The rule is not about honesty. Laboratory work on reaction time indicates that the fastest a trained person can hear a sound and answer with a full-body push is roughly that interval, so a quicker response is read as an athlete who guessed rather than one who heard.",
      stem:'According to the text, why is a push made less than a tenth of a second after the gun treated as a false start?',
      choices:{
        A:'Because timing officials cannot measure any interval shorter than a tenth of a second.',
        B:'Because that interval is about the fastest a trained person can react to a sound.',
        C:'Because sprinters who move that quickly have usually been dishonest in earlier races.',
        D:'Because the pressure sensors in the blocks are known to misread very fast starts.'
      },
      correct:'B',
      expCorrect:'The last sentence gives the reason directly: “the fastest a trained person can hear a sound and answer with a full-body push is roughly that interval,” so anything faster is read as a guess.',
      expWrong:{
        A:'Not supported: the text describes what the interval means about human reaction, never a limit on what the equipment can measure.',
        C:'The text rules this out in so many words: “The rule is not about honesty.” It is about what a body can physically do.',
        D:'Not supported: the sensors are described as doing their job, and the text never suggests that they misread anything.'
      },
      tip:'A detail question is answered by one sentence. Find it, then reject any option the passage explicitly sets aside — here, the sentence beginning “The rule is not.”'
    },
    {
      id:'CDB-03', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — main idea',
      passage:"The following text is adapted from Arun Sethi’s 1954 novel <i>The Lamplighters’ Street</i>. Bimla has taken over her uncle’s watch-repair counter.<br><br>The customers did not trust her at first, and Bimla let them not trust her. She took each watch, wrote the complaint on a paper tag, and named a day. When a man came back on the named day and found his watch running, he said nothing about the repair; he said something about the weather, which Bimla understood to be an apology. By the third month she had stopped counting the men who arrived asking for her uncle and stayed to speak to her.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Bimla’s customers talk about the weather to her instead of thanking her for the work.',
        B:'Bimla is waiting for her uncle to come back so that he can take the counter over again.',
        C:'Bimla wins her customers over by doing the work rather than by arguing for herself.',
        D:'Skilled workers earn respect faster when they let their results speak before they do.'
      },
      correct:'C',
      expCorrect:'Bimla “let them not trust her” and simply did the job — tag, named day, working watch — and by the third month the men who came asking for her uncle “stayed to speak to her.” The work, not any argument, changed their minds.',
      expWrong:{
        A:'True but secondary: the weather remark is one small piece of evidence that the customers have come around, not the point of the passage.',
        B:'Not supported: the uncle appears only as the name customers arrive asking for, and nothing says Bimla expects or wants him back.',
        D:'Too broad: the passage follows one woman at one counter and makes no claim about skilled workers in general.'
      },
      tip:'In a narrative, the main idea is usually the change that has happened by the last line. Track what is different at the end and say why.'
    },
    {
      id:'CDB-04', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — stated detail',
      passage:"Every retail barcode ends in a digit that carries no information about the product. It is a check digit, and a scanner computes it from the twelve digits before it: the scanner multiplies the digits in the odd positions by three, adds them to the rest, and finds the number that brings the total to a multiple of ten. If the digit the scanner computes does not match the digit printed on the package, the scanner refuses the read. A smudged label therefore fails loudly instead of ringing up the wrong item.",
      stem:'According to the text, what happens when the computed check digit does not match the printed one?',
      choices:{
        A:'The scanner refuses the read instead of ringing up an item.',
        B:'The scanner registers the product whose code is closest to the one it read.',
        C:'The scanner computes the check digit again using a multiple of three.',
        D:'The scanner records the item but marks the sale for later review.'
      },
      correct:'A',
      expCorrect:'The text is explicit: “If the digit the scanner computes does not match the digit printed on the package, the scanner refuses the read.” The last sentence calls this failing loudly.',
      expWrong:{
        B:'This is what the check digit exists to prevent. The closing line says a bad label “fails loudly instead of ringing up the wrong item.”',
        C:'It borrows a real number from the wrong step: the three multiplies the odd-position digits during the first computation, and the text describes no second attempt.',
        D:'Not supported: nothing in the text describes a sale being recorded, flagged, or reviewed after a failed read.'
      },
      tip:'When three options describe things the passage never mentions, the fourth is usually a plain restatement of one sentence. Check that sentence and move on.'
    },
    {
      id:'CDB-05', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — main idea',
      passage:"Before a symphony orchestra plays, the oboist sounds a single A and the rest of the players tune to it. The custom is often explained as a courtesy to the oldest instrument in the group, which the oboe is not. The practical reason is narrower: an oboe’s pitch is set by a stiff double reed and a short fixed column of air, so it cannot be nudged up or down the way a violin’s string or a trumpet’s slide can. An ensemble tunes to the instrument least able to move.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'The oboe is the oldest instrument found in a modern symphony orchestra.',
        B:'An oboist sounds a single A before the rest of the orchestra begins to play.',
        C:'Every musical tradition settles on one instrument that fixes the pitch for all others.',
        D:'Orchestras tune to the oboe because its pitch is the hardest one to adjust.'
      },
      correct:'D',
      expCorrect:'The text gives “the practical reason” outright: the oboe’s reed and fixed air column mean “it cannot be nudged up or down,” and “an ensemble tunes to the instrument least able to move.”',
      expWrong:{
        A:'The text raises this explanation only to deny it: the custom is often explained as a courtesy to the oldest instrument, “which the oboe is not.”',
        B:'True but secondary: this is the practice the passage sets out to explain, not the explanation itself.',
        C:'Too broad: the passage describes the symphony orchestra and makes no claim about musical traditions in general.'
      },
      tip:'When a passage says a common explanation is wrong and then offers “the practical reason,” the main idea is the replacement, not the explanation being corrected.'
    },
    {
      id:'CDB-06', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — stated detail',
      passage:"Maize arrived in Europe in the sixteenth century without the technique that had always accompanied it in Mesoamerica. Cooks there soaked the dried kernels in water mixed with wood ash or lime before grinding them, a step now called nixtamalization. The soak softens the hulls, but it also frees niacin, a vitamin the kernel otherwise holds in a form the body cannot use. European regions that adopted maize as a staple and skipped the soak saw outbreaks of pellagra, a disease of niacin deficiency, for the next three centuries.",
      stem:'According to the text, what does the alkaline soak do besides softening the hulls of the kernels?',
      choices:{
        A:'It adds niacin to kernels that would otherwise contain none of the vitamin.',
        B:'It frees niacin the kernel otherwise holds in an unusable form.',
        C:'It removes the compound that lets pellagra spread from one person to another.',
        D:'It grinds the kernels finely enough that they can be used without a stone mill.'
      },
      correct:'B',
      expCorrect:'The text states it directly: the soak “also frees niacin, a vitamin the kernel otherwise holds in a form the body cannot use.”',
      expWrong:{
        A:'It swaps one verb for another that changes everything: the niacin is already in the kernel, and the soak frees it rather than adding it.',
        C:'It misreads the disease: the text calls pellagra “a disease of niacin deficiency,” not something that passes between people.',
        D:'It confuses two steps: grinding is what the cooks do after the soak, and the text never says the soak replaces the mill.'
      },
      tip:'Watch the verb in each option. “Frees,” “adds,” and “removes” describe different events, and a detail question often turns on which one the passage used.'
    },
    {
      id:'CDB-07', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — main idea',
      passage:"The following text is adapted from Odile Ferran’s 1968 story “The Green Ticket.” Yusuf works the night desk of a small hotel.<br><br>Yusuf had been told that the night desk was the easy shift, and by the arithmetic of arrivals it was: four keys handed out between ten and six. What the arithmetic left out was that each of the four arrived convinced the hotel had been waiting up for them alone, and that Yusuf had to be, for three or four minutes each time, the person who had been waiting. He got very good at it. He also stopped being able to sleep in a quiet room.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'The night shift is light in tasks but costs Yusuf far more than the key count suggests.',
        B:'Yusuf hands out four room keys in a typical night between ten and six.',
        C:'Hotels staff their night desks with too few workers to greet guests properly.',
        D:'Yusuf finds that the night desk is exactly the easy shift he was promised.'
      },
      correct:'A',
      expCorrect:'The passage sets the count against what it leaves out: four keys is easy “by the arithmetic of arrivals,” but Yusuf must perform welcome four times a night, and by the last line he “stopped being able to sleep in a quiet room.”',
      expWrong:{
        B:'True but secondary: the four keys are the arithmetic the passage introduces in order to show what it misses.',
        C:'Not supported: the text never counts the staff or claims the hotel is understaffed; the cost it describes is emotional, not a matter of headcount.',
        D:'The text raises this claim to overturn it. Yusuf “had been told” the shift was easy, and the passage spends its length on what that telling left out.'
      },
      tip:'When a passage sets up a measure and then says what the measure misses, the main idea lives in the gap between them.'
    },
    {
      id:'CDB-08', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — stated detail',
      passage:"A city block paved end to end behaves like a funnel during a storm: rain that would have soaked into soil runs across asphalt and reaches the drain in minutes. Engineers in the city of Halvorsen replaced a strip of curb on one block with a shallow planted trench, then measured what arrived at the drain. The trench did not absorb every gallon. What it did was stretch the arrival: the same volume of water reached the sewer over forty minutes instead of eight, and the pipe, which fails when it is overwhelmed at once, did not.",
      stem:'According to the text, what did the planted trench change?',
      choices:{
        A:'The total volume of rainwater that eventually reached the sewer pipe.',
        B:'The number of storms each year that the block’s drain was able to handle.',
        C:'The time over which the water reached the sewer pipe.',
        D:'The speed at which rain soaked into the soil beneath the asphalt.'
      },
      correct:'C',
      expCorrect:'The text separates the two things cleanly: “the same volume of water reached the sewer over forty minutes instead of eight.” The volume held; the timing changed.',
      expWrong:{
        A:'The text says the opposite: the trench “did not absorb every gallon,” and the same volume still arrived at the pipe.',
        B:'Not supported: the measurement described is of one block during storms, and the text never counts storms per year.',
        D:'It attaches the finding to the wrong surface: under the asphalt nothing soaks in, which is why the block behaves like a funnel to begin with.'
      },
      tip:'When a passage insists on what did NOT change, that sentence is usually there to kill a distractor. Read it as a warning label.'
    },
    {
      id:'CDB-09', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — main idea',
      passage:"English verbs once formed the past tense in many ways, and the survivors of that variety are the ones we call irregular. Linguists who track which irregulars last find that the explanation is not age or usefulness. Frequency protects a verb. A form heard thousands of times a week is learned whole, while a rare verb is rebuilt each time from the rule, and the rule adds <i>-ed</i>. This is why <i>thrive</i> has quietly acquired <i>thrived</i> while <i>keep</i> shows no sign of becoming <i>keeped</i>.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'The irregular verbs that have survived in English are also the oldest ones in it.',
        B:'A verb keeps its irregular past tense when it is heard often enough to be learned as a whole.',
        C:'Languages grow simpler over time as their irregular forms are gradually worn away.',
        D:'English once formed the past tense of its verbs in a much wider range of ways.'
      },
      correct:'B',
      expCorrect:'The passage names the mechanism in three words — “Frequency protects a verb” — and then explains it: a form heard constantly “is learned whole,” while a rare verb is rebuilt from the rule that adds <i>-ed</i>.',
      expWrong:{
        A:'The text raises age only to dismiss it: “the explanation is not age or usefulness.”',
        C:'Too broad: the passage explains which verbs resist the rule, and makes no claim about whole languages simplifying over time.',
        D:'True but secondary: this is the background that gives the word “irregular” its meaning, not the finding the passage is built around.'
      },
      tip:'A three-word sentence dropped into a longer passage is almost always the thesis. Let the short one carry the answer.'
    },
    {
      id:'CDB-10', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — stated detail',
      passage:"Before the 1880s, an American voter usually arrived at the polls holding a ballot printed by a political party, often on colored paper that announced from across the room which party he had chosen. Reformers pressed for what was then called the Australian ballot: a single sheet printed by the government, listing every candidate, handed out at the polling place, and marked in private. The change was not aimed at fraud in the counting. It was aimed at the man standing outside who could see how each neighbor had voted and act on it.",
      stem:'According to the text, what problem was the Australian ballot meant to address?',
      choices:{
        A:'Errors that officials made while counting the ballots after the polls closed.',
        B:'The cost that political parties paid to print their ballots on colored paper.',
        C:'The difficulty voters had in learning which candidates were on the ballot.',
        D:'The ability of an observer to see and act on how a neighbor voted.'
      },
      correct:'D',
      expCorrect:'The last sentence names the target: “the man standing outside who could see how each neighbor had voted and act on it.” The colored party ballot is what made that visible.',
      expWrong:{
        A:'The text explicitly sets this aside: “The change was not aimed at fraud in the counting.”',
        B:'Not supported: the colored paper matters in the passage because of what it revealed, and printing costs are never mentioned.',
        C:'It turns a feature into the problem: the government sheet listed every candidate, but the text never says voters had trouble learning who was running.'
      },
      tip:'“Not aimed at X. It was aimed at Y” hands you the answer and one distractor at the same time. Take both.'
    },
    {
      id:'CDB-11', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — main idea',
      passage:"When a panel painting arrives with a loss — a patch where the paint has flaked away to the wood — the conservator faces a question that is not technical. Filling the gap so well that no visitor can find it produces a painting that lies about its own history. Leaving the gap raw makes the picture unreadable. A method developed in Italian workshops resolves the two demands by scale: the loss is filled with fine vertical hatching that merges into the image from across the room and separates into visible strokes when the viewer steps close.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Conservators fill losses in panel paintings with fine vertical strokes of color.',
        B:'A painting with a raw, unfilled loss cannot be read properly by the people who see it.',
        C:'The Italian method settles a conflict between honesty and legibility by using distance.',
        D:'Every repair made to a historical object should be obvious to anyone who looks at it.'
      },
      correct:'C',
      expCorrect:'The passage frames two demands that pull against each other — a seamless fill “lies about its own history,” a raw gap “makes the picture unreadable” — and says the method “resolves the two demands by scale”: whole from across the room, visible up close.',
      expWrong:{
        A:'True but secondary: the hatching is the technique, and the passage exists to explain what problem that technique solves.',
        B:'True but partial: this is only one of the two demands, and an answer that takes one horn of a dilemma misses the resolution.',
        D:'Too broad: the method described is legible only up close, which is precisely not the same as being obvious to anyone who looks.'
      },
      tip:'When a passage lays out two opposed requirements and then a solution, the main idea is the solution — and each requirement alone is a ready-made distractor.'
    },
    {
      id:'CDB-12', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — stated detail',
      passage:"The following text is adapted from Mireille Okonkwo’s 1977 novel <i>The Borrowed Coat</i>. Halim keeps the accounts for a family cannery.<br><br>The ledger was not where Halim kept the truth. The truth was a second book, unruled, in which he wrote what the cannery had actually paid for the sardines and what it had actually been paid for them, and the two columns did not behave like the ones downstairs. He had begun the second book to catch an error. He kept it, four years later, because the error had turned out to be a policy, and because he had not yet decided what a person does with that.",
      stem:'According to the text, why did Halim first begin keeping the second book?',
      choices:{
        A:'To track down an error he believed had crept into the accounts.',
        B:'To record a policy that the cannery’s owners had adopted deliberately.',
        C:'To protect himself if the family ever questioned the ledger downstairs.',
        D:'To compare the cannery’s prices with the prices paid by its competitors.'
      },
      correct:'A',
      expCorrect:'The text separates beginning from keeping: “He had begun the second book to catch an error. He kept it, four years later, because the error had turned out to be a policy.”',
      expWrong:{
        B:'It answers the wrong half of the sentence. The policy is why Halim kept the book after four years, not why he started it.',
        C:'Not supported: the passage never says the family has questioned the ledger or that Halim is guarding himself against them.',
        D:'It borrows the idea of two columns and invents a comparison the text does not make: the columns hold what the cannery paid and was paid, not what competitors paid.'
      },
      tip:'When a passage uses two verbs for the same object — began it, kept it — a detail question will ask about one. Match the verb, not just the noun.'
    },
    {
      id:'CDB-13', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — main idea',
      passage:"Home teams win more often than visiting ones in nearly every league that keeps records, and the usual explanations — familiar surfaces, shorter travel, the encouragement of the crowd — have been tested and found to account for only part of the gap. One study asked qualified officials to judge recorded fouls, half of them with crowd noise playing and half in silence. The same incidents drew fewer calls against the home side when the noise was on. The crowd, on this account, does not lift the home team so much as it tilts the person holding the whistle.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Officials shown recorded fouls made fewer calls against home sides when noise played.',
        B:'Familiar surfaces and shorter travel do not affect how often home teams win games.',
        C:'Crowds at sporting events have more influence on outcomes than the players do.',
        D:'Much of home advantage may come from how the crowd affects officials, not players.'
      },
      correct:'D',
      expCorrect:'The closing sentence states the claim the study is offered to support: the crowd “does not lift the home team so much as it tilts the person holding the whistle.”',
      expWrong:{
        A:'True but secondary: this is the evidence, and the passage uses it to reach a claim about where home advantage comes from.',
        B:'It overstates a hedge. The text says those explanations account “for only part of the gap,” which is not the same as no effect.',
        C:'Too broad: the passage compares one channel of crowd influence with another, and never weighs crowds against players in general.'
      },
      tip:'Evidence is not the main idea. If an option only reports what a study measured, look for the sentence that says what the measurement means.'
    },
    {
      id:'CDB-14', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — stated detail',
      passage:"A version-control system does not save a new copy of a project each time a developer commits. It stores every file under a name computed from the file’s own contents, so two files that are byte-for-byte identical land in the same slot and are stored once. A commit is then a short list of those names plus a pointer to the commit before it. The consequence the developers noticed first was not speed. It was that changing any past file changes its computed name, which breaks every pointer downstream of it, so history cannot be edited quietly.",
      stem:'According to the text, why can a project’s history not be altered without notice?',
      choices:{
        A:'Because the system saves a full copy of every file each time a commit is made.',
        B:'Because changing a past file changes its computed name and breaks every pointer after it.',
        C:'Because identical files are stored twice so that one copy can verify the other.',
        D:'Because each commit records the developer who wrote it and the time it was made.'
      },
      correct:'B',
      expCorrect:'The final sentence spells out the chain: “changing any past file changes its computed name, which breaks every pointer downstream of it, so history cannot be edited quietly.”',
      expWrong:{
        A:'The first sentence denies exactly this: the system “does not save a new copy of a project each time a developer commits.”',
        C:'It flips the number that matters. Identical files “land in the same slot and are stored once,” not twice.',
        D:'Not supported: the passage describes commits as a list of names plus a pointer, and never mentions authors or timestamps.'
      },
      tip:'A distractor often keeps the passage’s nouns and changes one number or one negation. Re-read the sentence with the option in it and see whether it still matches.'
    },
    {
      id:'CDB-15', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — main idea',
      passage:"Singers who worked before electrical amplification were selected for carrying power: an unaided voice had to reach the back of a hall over an orchestra, and the training that produced such a voice also narrowed what it could do quietly. The condenser microphone of the 1920s removed that requirement. What followed was not simply that softer singers could now be heard. Whole devices became available that had never been usable onstage — a breath left audible, a consonant half-swallowed, a phrase ended below speaking volume — and popular singing reorganized itself around them.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Amplification did not just make soft voices audible; it opened up new expressive devices.',
        B:'The condenser microphone came into use in popular music during the 1920s.',
        C:'Amplification mattered chiefly because quieter singers could at last be heard.',
        D:'Every large change in musical style follows from a change in technology.'
      },
      correct:'A',
      expCorrect:'The passage names and rejects the smaller reading — “not simply that softer singers could now be heard” — and then lists the devices that became usable, concluding that “popular singing reorganized itself around them.”',
      expWrong:{
        B:'True but secondary: the date and the device are background, and the passage is about what their arrival made possible.',
        C:'The text raises this reading only to go past it, with the sentence beginning “What followed was not simply.”',
        D:'Too broad: the passage explains one change in one kind of singing and makes no claim about musical style in general.'
      },
      tip:'“Not simply X” is a signal that X is a distractor and the answer is whatever comes after it.'
    },
    {
      id:'CDB-16', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — stated detail',
      passage:"The following text is adapted from Hanne Vogt’s 1949 novel <i>Salt Quarter</i>. Rikke has returned to the fishing town where she grew up.<br><br>The harbor had been dredged, and Rikke found she minded that more than the new houses. The houses were somebody’s decision; the depth of the water was the thing the town had always argued with. As a child she had learned the tide by which stones showed. Now the stones were gone, and the boats her father would have called too big for the place sat in it comfortably, and nobody on the quay looked at the water at all.",
      stem:'According to the text, what does Rikke mind more than the new houses?',
      choices:{
        A:'The size of the boats that her father would have thought unsuitable.',
        B:'The absence of anyone on the quay who still watches the water.',
        C:'The dredging that has changed the depth of the water in the harbor.',
        D:'The decisions the town made without consulting the people who left.'
      },
      correct:'C',
      expCorrect:'The first sentence answers it: “The harbor had been dredged, and Rikke found she minded that more than the new houses.” Everything after is what the dredging cost.',
      expWrong:{
        A:'It picks a consequence instead of the cause: the oversized boats can sit there comfortably because the harbor was dredged.',
        B:'Same problem one step later: nobody watching the water is another effect of the dredging, listed in the final clause.',
        D:'It borrows the word “decision” from the wrong side of the contrast. The houses are called somebody’s decision; the depth of the water is not.'
      },
      tip:'When a passage names a cause and then lists what it changed, a detail question about what someone minds usually wants the cause. The effects are the distractors.'
    },
    {
      id:'CDB-17', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — main idea',
      passage:"Tinned food reached ships and armies almost fifty years before anything convenient existed to open it. Early cans were heavy iron vessels sealed by hand, and the printed instruction on some of them told the buyer to cut around the top with a chisel and a hammer. The lag is often told as a joke about invention. It is better read as a lesson about markets: nobody builds a tool for a container that only navies and polar expeditions own, and the opener arrived once cans were thin enough, cheap enough, and common enough in kitchens to be worth the trouble.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Early tinned food came in heavy iron cans that had to be opened with a chisel.',
        B:'The can opener waited not on invention but on cans becoming common in homes.',
        C:'The gap between the can and the can opener is a joke about how invention works.',
        D:'Useful tools are always invented long after the problems they solve first appear.'
      },
      correct:'B',
      expCorrect:'The passage rejects one reading and supplies another: the lag “is better read as a lesson about markets,” because “nobody builds a tool for a container that only navies and polar expeditions own.”',
      expWrong:{
        A:'True but secondary: the chisel is the detail that makes the lag vivid, not the explanation the passage argues for.',
        C:'The text names this reading in order to replace it, with the sentence “It is better read as a lesson about markets.”',
        D:'Too broad: the passage gives a market-specific reason for one delay, not a rule covering every useful tool.'
      },
      tip:'“It is better read as” is the same move as “not X but Y.” The answer is on the far side of the comparison.'
    },
    {
      id:'CDB-18', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — stated detail',
      passage:"A dark roof absorbs sunlight all afternoon and releases it as heat for hours after sunset, which is why the temperature gap between a city and the countryside around it is widest at night, not at noon. A pilot program in one district coated forty roofs with a reflective white film and left forty nearby roofs untouched. Daytime surface temperatures on the treated roofs ran markedly cooler. The measurement that mattered more to the health department, though, was taken at three in the morning, when indoor temperatures under the coated roofs were about two degrees lower.",
      stem:'According to the text, which measurement mattered more to the health department?',
      choices:{
        A:'The surface temperature of the treated roofs during the afternoon hours.',
        B:'The gap between the district and the countryside around it at midday.',
        C:'The number of roofs in the district that received the reflective film.',
        D:'The indoor temperature recorded under the coated roofs in the middle of the night.'
      },
      correct:'D',
      expCorrect:'The last sentence says so outright: the measurement that mattered more “was taken at three in the morning, when indoor temperatures under the coated roofs were about two degrees lower.”',
      expWrong:{
        A:'True but explicitly ranked lower: the daytime surface reading is the one the word “though” pushes aside in favor of the night measurement.',
        B:'It reverses the passage. The city-countryside gap is described as widest at night, “not at noon.”',
        C:'Not supported: forty roofs is the size of the trial, not a measurement the health department weighed.'
      },
      tip:'Words like “though,” “but,” and “more” rank the facts for you. The detail question usually asks for the one on the winning side.'
    },
    {
      id:'CDB-19', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — main idea',
      passage:"In English a speaker may say how she knows something, but she is never required to. A number of languages take the opposite position. In them the verb carries an obligatory ending marking the source of the claim: seen directly, heard from someone, or inferred from evidence. A speaker who reports a neighbor’s departure must choose, in the same breath, whether she watched him go or was told. Fieldworkers report that learners raised on English find the grammar harder than its rules suggest, because the difficulty is not the endings but the habit of always having tracked the answer.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Learners find these endings hard because the forms themselves are unusually complex.',
        B:'Languages that require these endings are more precise than English can ever be.',
        C:'Such grammar is demanding because it forces speakers to track how they know things.',
        D:'A speaker of such a language marks whether she saw an event or was told about it.'
      },
      correct:'C',
      expCorrect:'The final clause carries the claim: “the difficulty is not the endings but the habit of always having tracked the answer.” The grammar demands a running record of how you know.',
      expWrong:{
        A:'The text denies this in the same sentence that states the answer: “the difficulty is not the endings.”',
        B:'Not supported: the passage contrasts what the two kinds of language require, and never ranks one as more precise.',
        D:'True but secondary: this is the example that illustrates the requirement, not the point the passage closes on.'
      },
      tip:'Read the last clause of a passage like this one. “Not A but B” inside it tells you the answer and hands you a distractor.'
    },
    {
      id:'CDB-20', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — stated detail',
      passage:"Athletes who move to altitude for a training camp gain something and lose something. Thin air prompts the body to make more of the cells that carry oxygen, which is the gain. But the same thin air makes every hard session slower, so the quality of the training itself falls, and that is the loss. The compromise coaches settled on is to separate the two: athletes sleep and spend their idle hours high, then descend for the sessions that need real speed. The protocol is known in the literature as live high, train low.",
      stem:'According to the text, what is lost when athletes train at altitude?',
      choices:{
        A:'The quality of the hard training sessions, which thin air makes slower.',
        B:'The body’s ability to produce the cells that carry oxygen.',
        C:'The number of idle hours athletes can spend at elevation.',
        D:'The speed at which athletes descend to lower ground.'
      },
      correct:'A',
      expCorrect:'The text labels it: “the same thin air makes every hard session slower, so the quality of the training itself falls, and that is the loss.”',
      expWrong:{
        B:'It names the gain as though it were the loss. Thin air “prompts the body to make more of the cells that carry oxygen.”',
        C:'Not supported: idle hours are where athletes stay high on purpose, and the text never says there are fewer of them.',
        D:'It attaches “speed” to the wrong thing. The speed at stake belongs to the training sessions, not to the trip downhill.'
      },
      tip:'When a passage explicitly labels a gain and a loss, do not reason about which is which. Take the label.'
    },
    {
      id:'CDB-21', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — main idea',
      passage:"The following text is adapted from Peter Ashgrove’s 1963 story “Cold Frame.” Ivy has inherited a garden from a neighbor.<br><br>Ivy had not asked for the garden and did not want it, and she went out the first morning intending to establish which parts of it could be allowed to die. The list was easy to begin. It became complicated at the cold frame, where somebody had written, on a strip of tape along the glass, the dates on which each row had first come up, going back eleven years. Ivy read the dates twice. Then she went in for water, telling herself it was only for the seedlings under the glass.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Ivy sets out to decide which parts of the garden can be allowed to die.',
        B:'Ivy is glad to have been left the garden and begins tending it at once.',
        C:'A gardener’s written records will persuade anyone to keep a garden alive.',
        D:'The neighbor’s recorded years of attention quietly undo Ivy’s resolve.'
      },
      correct:'D',
      expCorrect:'Ivy begins intending “to establish which parts of it could be allowed to die,” then reads eleven years of dates on the tape, reads them twice, and goes in for water — with an excuse. The record changes what she does.',
      expWrong:{
        A:'True but secondary: this is the intention the passage sets up in order to show it coming apart.',
        B:'The text says the reverse. Ivy “had not asked for the garden and did not want it,” and her first watering comes with an excuse attached.',
        C:'Too broad: one person is moved by one strip of tape, and the passage makes no claim about what would persuade anyone.'
      },
      tip:'In a short narrative, the main idea is usually the reversal. Find where the character does something she did not set out to do.'
    },
    {
      id:'CDB-22', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — stated detail',
      passage:"Deleting a file on most systems does not overwrite anything. The operating system removes the file’s entry from the index that tells it where the data begins, and marks those blocks as available. The bytes themselves stay on the disk until some later write happens to land on top of them. This is why recovery tools can often rebuild a document hours after it vanished, and also why an old drive sold secondhand may still hold what its owner believed was gone.",
      stem:'According to the text, what does a system do when a file is deleted?',
      choices:{
        A:'It writes zeros over every block the file had been using.',
        B:'It removes the file’s entry from the index and marks its blocks as available.',
        C:'It moves the file’s bytes into an area reserved for recovery tools.',
        D:'It waits until the drive is sold before it clears the old blocks.'
      },
      correct:'B',
      expCorrect:'The second sentence is the answer: the system “removes the file’s entry from the index that tells it where the data begins, and marks those blocks as available.”',
      expWrong:{
        A:'The first sentence denies it: deleting “does not overwrite anything,” which is why the bytes survive.',
        C:'Not supported: the bytes do not move at all; they “stay on the disk” until something else writes over them.',
        D:'It turns a consequence into a procedure. A sold drive may still hold old data precisely because nothing waits to clear it.'
      },
      tip:'If a passage opens by saying what does NOT happen, the next sentence almost always says what does. That is your detail.'
    },
    {
      id:'CDB-23', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — main idea',
      passage:"Nineteenth-century exhibition halls hung pictures from the dado to the cornice, four and five rows deep, and a painter’s standing was read from his row. The single line at eye level that galleries now use arrived with a claim about attention: a viewer meets one work at a time and is not asked to compare it with the twelve around it. The change is usually described as a courtesy to the viewer. It is also a decision about authority, because a museum that hangs one line has taken on the job of saying, before anyone enters, which paintings deserve the wall.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'The single-line hang is not only kinder to viewers; it also shifts judgment to the museum.',
        B:'Nineteenth-century halls hung paintings in four or five rows up to the cornice.',
        C:'The single line at eye level exists to let a viewer attend to one work at a time.',
        D:'Museums ought to display far fewer paintings than they currently keep in storage.'
      },
      correct:'A',
      expCorrect:'The passage grants the usual account and then adds the one it cares about: the change “is also a decision about authority,” since a museum hanging one line decides “which paintings deserve the wall.”',
      expWrong:{
        B:'True but secondary: the crowded hang is the background the passage measures the modern one against.',
        C:'This is the reading the passage calls the usual one and then goes beyond with the word “also.”',
        D:'Not supported: the text describes what hanging one line commits a museum to, and never recommends showing more or fewer works.'
      },
      tip:'When a passage says “it is also,” the main idea is the second thing. The first is there so the second can be added to it.'
    },
    {
      id:'CDB-24', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — stated detail',
      passage:"When a federal agency writes a rule, the statute does not let it simply publish and enforce. The agency must first print the proposal, open a window during which anyone may file a written objection, and then respond in print to the significant ones before the final rule takes effect. The comments are not votes; an agency that receives ten thousand identical form letters is not obliged to change a line. What the record does is create a paper trail, because a court reviewing the rule later can ask what the agency was told and what it did about it.",
      stem:'According to the text, what do the written comments accomplish?',
      choices:{
        A:'They act as votes that an agency must count before it issues a rule.',
        B:'They let the agency enforce a rule before it has been published.',
        C:'They build a record that a reviewing court can examine afterward.',
        D:'They require the agency to answer every letter that it receives.'
      },
      correct:'C',
      expCorrect:'The last sentence answers it: “What the record does is create a paper trail, because a court reviewing the rule later can ask what the agency was told and what it did about it.”',
      expWrong:{
        A:'The text denies it in four words: “The comments are not votes.” Ten thousand identical letters oblige nothing.',
        B:'It reverses the sequence. The statute “does not let it simply publish and enforce”; comments come before the final rule takes effect.',
        D:'It swaps “significant” for “every.” The agency must respond in print only to the significant objections.'
      },
      tip:'An option that upgrades “some” or “significant” to “every” has changed the rule. Check quantifiers word by word.'
    },
    {
      id:'CDB-25', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Details — main idea',
      passage:"The following text is adapted from Selma Iriarte’s 1959 novel <i>The Instrument Case</i>. Dr. Fenn has agreed to take on a student pianist, Aurelio, for one term.<br><br>Dr. Fenn’s method was to praise nothing for six weeks. Aurelio, who had been the best player in a town of eleven thousand, understood the silence as a verdict and worked to overturn it; and it was in that work, Dr. Fenn thought, that the boy first heard what he was actually doing at the keyboard, rather than what he had been told for years he was doing. In the seventh week she said that a phrase in the slow movement was nearly right. Aurelio did not sleep. He had never before been given something so exact to lose.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Dr. Fenn withholds all praise from Aurelio for the first six weeks of the term.',
        B:'Fenn’s withheld praise makes Aurelio hear his playing instead of his reputation.',
        C:'Aurelio had been the strongest pianist in the town where he grew up.',
        D:'A teacher who praises a student too early will keep that student from improving.'
      },
      correct:'B',
      expCorrect:'The middle sentence carries the claim: in the work of trying to overturn the silence, “the boy first heard what he was actually doing at the keyboard, rather than what he had been told for years he was doing.”',
      expWrong:{
        A:'True but secondary: the six weeks of silence are the method, and the passage is about what the method produced in Aurelio.',
        C:'True but background: the town of eleven thousand explains why Aurelio arrived with a reputation to unlearn.',
        D:'Too broad: one teacher and one student are described, and the passage never makes a rule about teaching in general.'
      },
      tip:'Beware the option that is simply the story’s setup. The main idea names the effect the setup was arranged to produce.'
    },
    {
      id:'CDB-26', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Details — stated detail',
      passage:"A string divided exactly in half sounds an octave above the whole, and the simple ratios above that produce intervals the ear hears as clean. The difficulty appears when one keyboard has to supply all of them at once: the fifths, stacked twelve times, overshoot seven octaves by a small amount that cannot be distributed without spoiling something. Equal temperament spoils everything a little. Each fifth is narrowed by about two cents, which almost nobody notices, and the thirds are left noticeably wide, which is the price paid so that a player may begin in any key and never retune.",
      stem:'According to the text, what does equal temperament do to the fifths?',
      choices:{
        A:'It leaves them exactly where the simple ratios would place them.',
        B:'It widens each of them noticeably, as it does with the thirds.',
        C:'It removes them from the keyboard in favor of the octaves.',
        D:'It narrows each of them by an amount few listeners notice.'
      },
      correct:'D',
      expCorrect:'The last sentence separates the two intervals: “Each fifth is narrowed by about two cents, which almost nobody notices, and the thirds are left noticeably wide.”',
      expWrong:{
        A:'It contradicts the whole point: equal temperament exists because the pure fifths overshoot, and it “spoils everything a little.”',
        B:'It trades the two intervals for each other. The thirds are left noticeably wide; the fifths are narrowed slightly.',
        C:'Not supported: nothing is removed from the keyboard, and the octaves are the total the stacked fifths overshoot.'
      },
      tip:'When a sentence assigns one treatment to each of two things, expect a distractor that swaps them. Read the sentence twice, one interval at a time.'
    },
    {
      id:'CDB-27', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Details — main idea',
      passage:"The maintenance office of a university once tracked the worn diagonal lines that students cut across its lawns and repaved the walkways to follow them, a case now cited whenever anyone argues that designers should watch behavior instead of prescribing it. The record is less tidy than the citation. Three of the diagonals were paved and held. Two were paved and immediately replaced by new diagonals across the newly reshaped grass, because the shortest route had moved once the path did. What the case actually shows is that a worn line records where people were going under the layout that existed, which the paving then alters.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Paving a worn path can move the path, because the line recorded the older layout.',
        B:'Students at the university cut diagonal lines across the lawns between the buildings.',
        C:'The case proves that designers should always follow behavior rather than prescribe it.',
        D:'University maintenance offices repave their walkways more often than is necessary.'
      },
      correct:'A',
      expCorrect:'The final sentence states it: “a worn line records where people were going under the layout that existed, which the paving then alters.” Two of the five diagonals moved for exactly that reason.',
      expWrong:{
        B:'True but secondary: the diagonals are the phenomenon, and the passage is about what happens when they are paved.',
        C:'The text raises this as the reason the case is cited and then complicates it: “The record is less tidy than the citation.”',
        D:'Not supported: the passage counts five diagonals at one university and never comments on how often walkways are repaved.'
      },
      tip:'When a passage says a famous case is messier than its reputation, the main idea is the mess, not the reputation.'
    },
    {
      id:'CDB-28', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Details — stated detail',
      passage:"To find out whether a child has learned a rule or only memorized forms, a researcher can hand him a word he has never heard. Shown a drawing of an invented creature and told <i>this is a wug</i>, a four-year-old shown a second one will usually say <i>two wugs</i>, voicing the ending as a /z/, which no one taught him and which the spelling does not show. The result does not prove that the child can state the rule. It proves the narrower and more useful thing: that whatever he has, it applies to words that were not in the input.",
      stem:'According to the text, what does the child’s answer prove?',
      choices:{
        A:'That the child is able to state the rule for forming English plurals.',
        B:'That the child had heard the invented word somewhere before the study.',
        C:'That what the child has learned extends to words he has never heard.',
        D:'That the spelling of the plural ending shows the child which sound to use.'
      },
      correct:'C',
      expCorrect:'The last sentence says exactly what is proved: “the narrower and more useful thing: that whatever he has, it applies to words that were not in the input.”',
      expWrong:{
        A:'The text denies this one sentence earlier: “The result does not prove that the child can state the rule.”',
        B:'It undoes the design of the study. The point is that the word is invented and the child “has never heard” it.',
        D:'It reverses a clause: the /z/ is remarkable because it is something “the spelling does not show.”'
      },
      tip:'When a passage says what a result does NOT prove and then what it does, both sentences matter: one is the answer and one is a distractor.'
    },
    {
      id:'CDB-29', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Details — stated detail',
      passage:"The following text is adapted from Iris Vandermeer’s 1971 novel <i>The Long Shift</i>. Osei, a machinist, has been asked to train his replacement before he retires.<br><br>Osei taught the machine in the order he had learned it, which was the order in which it had hurt him. He began with the guard that had been missing in 1954, then the feed rate that had cost a man two fingers, then, last, how to cut a clean thread. The replacement took notes in the reverse order and asked twice when they would start on the actual work. Osei did not explain. He had decided years ago that this particular argument was won by outliving it.",
      stem:'According to the text, in what order does Osei teach the machine?',
      choices:{
        A:'In the order that the manufacturer’s manual for the machine sets out.',
        B:'In the order his replacement asked for on the first day of training.',
        C:'In the order that moves from the simplest cuts to the hardest ones.',
        D:'In the order in which the machine had injured him over the years.'
      },
      correct:'D',
      expCorrect:'The first sentence states it: Osei “taught the machine in the order he had learned it, which was the order in which it had hurt him” — missing guard, then the feed rate, then the clean thread.',
      expWrong:{
        A:'Not supported: no manual appears in the passage, and the order Osei uses comes from his own injuries.',
        B:'It reverses the situation. The replacement “took notes in the reverse order,” and Osei “did not explain.”',
        C:'It supplies a sensible order the passage does not use. Cutting a clean thread comes last, after the two dangers.'
      },
      tip:'When a passage gives a rule and then an example of it, check the example. Here the three items listed confirm which ordering is meant.'
    },
    {
      id:'CDB-30', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Details — main idea',
      passage:"The tomato reached Italian gardens in the sixteenth century and did not reach Italian kitchens in any serious way for nearly two hundred years. The delay is usually explained by fear: the plant belongs to the nightshade family, and wealthy diners who ate acidic food off pewter did sometimes sicken from the lead the acid drew out. That story is not wrong, but it accounts for the upper table only. The tomato entered cooking from below, in households too poor for pewter, and the written record follows it late simply because the people who wrote cookbooks were not the people eating it first.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Wealthy diners who ate acidic food from pewter plates were poisoned by the lead.',
        B:'The tomato’s late arrival in cookbooks reflects who wrote them, not fear alone.',
        C:'Fear of the nightshade family kept the tomato out of Italian cooking for two centuries.',
        D:'New foods are always taken up by poor households before wealthy ones accept them.'
      },
      correct:'B',
      expCorrect:'The passage accepts the fear story in part and then limits it: it “accounts for the upper table only,” and the record is late “because the people who wrote cookbooks were not the people eating it first.”',
      expWrong:{
        A:'True but secondary: the pewter is the mechanism inside the fear explanation, which the passage goes on to qualify.',
        C:'This is the usual explanation the passage names and then narrows; the text says it covers only the wealthy table.',
        D:'Too broad: the passage explains one food in one place and never claims this pattern holds for new foods in general.'
      },
      tip:'“That story is not wrong, but” means the answer keeps part of the story and adds a limit. An option that keeps the whole story is the trap.'
    },
    {
      id:'CDB-31', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Central Ideas and Details — main idea',
      passage:"Two review teams examined the same forty trials on static stretching before exercise and published within a year of each other. Bergquist’s group concluded that stretching does not reduce injury rates and should be dropped from warm-ups. Ndiaye’s group agreed that the injury finding itself was solid, then noted that thirty-one of the forty trials measured only muscle strains in running and jumping, while the sports with the highest stretching compliance are the ones whose injuries are ligament tears. Their disagreement is not about what the trials found. It is about how far the finding travels.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Bergquist’s group found that static stretching fails to reduce rates of injury.',
        B:'Static stretching ought to be removed from the warm-ups used in every sport.',
        C:'The two teams accept the same result and differ over how widely it applies.',
        D:'Ndiaye’s group rejects the injury finding that Bergquist’s group reported.'
      },
      correct:'C',
      expCorrect:'The last two sentences draw the line: “Their disagreement is not about what the trials found. It is about how far the finding travels.” Ndiaye’s group calls the finding solid and questions only its reach.',
      expWrong:{
        A:'True but one-sided: this is what one team concluded, and the passage is about the relationship between the two conclusions.',
        B:'It adopts one team’s recommendation and stretches it further than either team goes; Ndiaye’s group raises exactly this limit.',
        D:'The text says the reverse: Ndiaye’s group “agreed that the injury finding itself was solid.”'
      },
      tip:'With two near-agreeing voices, locate the one thing they actually dispute. The main idea names that, not either position by itself.'
    },
    {
      id:'CDB-32', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Central Ideas and Details — stated detail',
      passage:"An agency that publishes counts from a census faces a problem that suppressing names does not solve: a determined analyst can combine several published tables and narrow a cell down to one household. One answer is to add a small, deliberately random amount of noise to every published number before release, calibrated so that the presence or absence of any single person changes what is published by an amount indistinguishable from chance. The published totals are then slightly wrong on purpose. Officials accept that cost because the alternative is not a perfectly accurate table; it is an accurate table that can be reversed.",
      stem:'According to the text, why do officials accept published numbers that are slightly wrong?',
      choices:{
        A:'Because an accurate table could be worked backward to a single household.',
        B:'Because removing the names from the tables already prevents any household from being found.',
        C:'Because the random noise added to each number also makes the published totals easier to compute.',
        D:'Because analysts are not permitted to combine more than one published table at a time.'
      },
      correct:'A',
      expCorrect:'The closing sentence names the alternative being rejected: “it is an accurate table that can be reversed,” which the first sentence explains as narrowing a cell “down to one household.”',
      expWrong:{
        B:'The first sentence denies it: this is “a problem that suppressing names does not solve.”',
        C:'It invents a benefit. The noise is described as a cost accepted for privacy, and nothing says it simplifies any computation.',
        D:'Not supported: combining several tables is presented as something a determined analyst can do, not something a rule forbids.'
      },
      tip:'When a passage ends by naming the real alternative, that sentence is the answer to “why accept the cost.” The first sentence usually tells you what the alternative means.'
    },
    {
      id:'CDB-33', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Central Ideas and Details — main idea',
      passage:"The following text is adapted from Nour Haddad’s 1966 novel <i>The Second Letter</i>. Mrs. Aliyev has been asked by her grown son why she left a teaching post thirty years earlier.<br><br>She gave him the version she had given everyone: the salary, the distance, the winter buses. Each item was true, and she had checked them against one another so often over thirty years that they now fitted together like a made thing, which was how she knew they were not the reason. The reason had been a single afternoon and a sentence she could still hear. She watched her son write down the buses. She thought: he will be able to repeat this, and he will never have to ask me again, and that was the point of it.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Mrs. Aliyev left the teaching post because of the salary, the distance, and the buses.',
        B:'Her polished account is true in its parts and built to close the question.',
        C:'Mrs. Aliyev can no longer remember why she gave up the teaching post she once held.',
        D:'Adult children rarely learn the real reasons behind the choices their parents made.'
      },
      correct:'B',
      expCorrect:'Every item is “true,” yet their smooth fit “was how she knew they were not the reason,” and she watches her son write them down thinking “he will never have to ask me again, and that was the point of it.”',
      expWrong:{
        A:'These are the items she offers, and the passage says of them that they “were not the reason.” The answer cannot be the cover story.',
        C:'The text says she remembers precisely: the reason “had been a single afternoon and a sentence she could still hear.”',
        D:'Too broad: the passage turns on one mother’s deliberate choice and makes no claim about adult children in general.'
      },
      tip:'A passage can call something true and still deny that it is the reason. Do not let “true” alone make an option the main idea.'
    },
    {
      id:'CDB-34', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Central Ideas and Details — stated detail',
      passage:"The following text is adapted from Lucien Abara’s 1982 novel <i>Kettle of Hawks</i>. Teodora runs a small press that prints poetry.<br><br>Teodora had one rule and it was not about quality. She would print a manuscript she disliked if the poet had read it aloud to someone and could say what had happened in the room. She would refuse a manuscript she admired if the poet had shown it to no one, and she refused two that year, both of which were later taken by houses in the capital and praised. Asked about the losses, she said that a press is a room and she would not put a stranger in it who had never been in one.",
      stem:'According to the text, on what condition will Teodora print a manuscript?',
      choices:{
        A:'That the manuscript reaches a standard of quality she has set in advance.',
        B:'That a house in the capital has already praised the poet’s earlier work.',
        C:'That the poet has shown the manuscript to no one before submitting it.',
        D:'That the poet has read it aloud and can describe how the room responded.'
      },
      correct:'D',
      expCorrect:'The rule is stated in full: she will print a manuscript she dislikes “if the poet had read it aloud to someone and could say what had happened in the room.”',
      expWrong:{
        A:'The first sentence rules it out: her one rule “was not about quality,” which is why she refuses manuscripts she admires.',
        B:'It reads the wrong direction in time. The capital houses took two manuscripts after Teodora refused them; their praise is not her condition.',
        C:'It states the condition for refusal as though it were the condition for printing. Showing it to no one is what gets a manuscript turned down.'
      },
      tip:'When a passage states a rule in two halves — print if, refuse if — a distractor will hand you the wrong half. Check which verb the question asked about.'
    }
  ]
});
