/* SAT Studio question set — Reading & Writing: Evidence, Quotation & Synthesis — Hard (HVE-01 a HVE-12) */
window.SAT_SETS.push({
  id: 'rw-hard-evidence',
  title: 'Evidence, Quotation & Synthesis — Hard',
  section: 'rw',
  level: 'Difícil',
  description: 'Hard Command of Evidence: which quotation or finding best supports a claim, plus tough Rhetorical Synthesis.',
  minutes: 16,
  questions: [
    {
      id:'HVE-01', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"An archaeologist studying an abandoned settlement argues that its residents left gradually, by choice, rather than fleeing a sudden disaster. She notes that many households carefully sealed their storage pits and removed their most valuable tools before departing, behaviors she reads as signs of an unhurried, planned departure.",
      stem:'Which finding, if true, would most directly support the archaeologist’s argument?',
      choices:{
        A:'A layer of ash covering part of the settlement suggests that at least one large fire once swept through it.',
        B:'The dwellings farthest from the settlement’s center were the first to be built, centuries before it was abandoned.',
        C:'Across the site, doorways were deliberately bricked shut from the outside and heavy grinding stones were carried off, tasks that would have taken days of work.',
        D:'Pottery styles found at the settlement match those of a distant region with which its residents are known to have traded.'
      },
      correct:'C',
      expCorrect:'Her argument is that people left GRADUALLY and by choice, not fleeing a disaster. C supports it directly: they boarded up doors from the outside and carried away heavy grinding stones, jobs that take days. That slow, orderly work is exactly the planned departure she describes.',
      expWrong:{
        A:'An ash layer and a fire point to a sudden DISASTER; that runs against a calm, planned departure rather than supporting it.',
        B:'Which houses were built first, centuries earlier, is about the growth of the site, not about HOW or why people left at the end.',
        D:'Pottery resembling another region’s shows they traded, but says nothing about whether the departure was hurried or planned.'
      },
      tip:'Go back to the exact CLAIM (a slow, deliberate departure, not flight). Look for the option that STAGES a departure with time and preparation (boarding up, hauling heavy things), not the one suggesting a sudden disaster.'
    },
    {
      id:'HVE-02', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"A linguist proposes that two languages spoken on opposite sides of a mountain range descend from a single ancestor language, despite sounding quite different today. A rival scholar counters that the similarities the linguist points to are merely the result of the two peoples borrowing words from each other through centuries of trade.",
      stem:'Which finding, if true, would most directly support the linguist’s proposal over the rival’s explanation?',
      choices:{
        A:'The shared words between the two languages are concentrated among terms for trade goods and market activities.',
        B:'The two languages share not only vocabulary but also the same irregular patterns for forming plurals, patterns rarely passed between languages through trade.',
        C:'Merchants have crossed the mountain range to trade between the two regions for at least a thousand years.',
        D:'Speakers of each language today find the other language almost impossible to understand.'
      },
      correct:'B',
      expCorrect:'The linguist says they come from a SHARED ancestor; the rival says they only borrowed words through trade. B favors the linguist: they share irregular plural patterns, something languages almost never borrow. If they share that deep grammar, it points to a common origin, not to borrowing.',
      expWrong:{
        A:'That the shared words are precisely trade words SUPPORTS the rival (borrowing through trade), not the linguist.',
        C:'Centuries of trade reinforce the RIVAL borrowing explanation; it does not tell in favor of a common origin.',
        D:'That they cannot understand each other today is true under both hypotheses; it does not decide whether the resemblance comes from ancestry or borrowing.'
      },
      tip:'When two explanations compete, look for what only ONE of them predicts. Borrowing moves words (especially trade words); shared irregular grammar points to kinship. That is the evidence that separates the hypotheses.'
    },
    {
      id:'HVE-03', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"A marine biologist claims that a certain reef fish changes its vivid coloring not to attract mates, as was long assumed, but to signal aggression when defending its territory. She bases the claim on hours of underwater observation of the fish’s behavior.",
      stem:'Which finding, if true, would most strongly support the biologist’s claim?',
      choices:{
        A:'The fish displays its brightest colors most intensely when chasing rivals away from its patch of reef, and stays dull when courting.',
        B:'The fish’s colors appear brighter to human divers than to most other fish species on the reef.',
        C:'Both male and female fish of the species are capable of producing the vivid coloring.',
        D:'The fish tends to be more brightly colored during the warm season, when food on the reef is most plentiful.'
      },
      correct:'A',
      expCorrect:'Her claim is that the color signals AGGRESSION while defending territory, NOT courtship. A proves exactly that: the fish flares its strongest color while driving rivals out of its patch and stays dull while courting. That ties the color to territorial defense and rules out courtship, just as she says.',
      expWrong:{
        B:'How the color looks to divers vs. other fish is about perception, not about whether the color signals aggression or courtship.',
        C:'That both sexes can produce the color does not say WHAT they use it for; it does not separate aggression from courtship.',
        D:'The color rising in the warm season with more food suggests another cause (season/diet); it does not support it being a territorial aggression signal.'
      },
      tip:'The claim is "because of A, not B" (aggression, not courtship). The best evidence ties the trait to A and SWITCHES IT OFF in B: strong color while fighting, dull while courting. Rule out anything measuring something else or suggesting a different cause.'
    },
    {
      id:'HVE-04', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"An economic historian argues that a medieval town’s sudden prosperity in the 1300s came from a new water-powered mill that let it produce cloth far faster than its neighbors, not from the trade fair it hosted, which several rival towns also held. He contends the mill, unique to the town, best explains why it pulled ahead.",
      stem:'Which finding, if true, would most directly support the historian’s argument?',
      choices:{
        A:'The town’s trade fair attracted merchants from across the region throughout the 1300s.',
        B:'Records show the town’s cloth output and wealth surged only after the mill was built, while rival towns with fairs but no such mill saw no similar rise.',
        C:'The town’s population grew steadily over the two centuries before the mill was built.',
        D:'Several rival towns eventually built water-powered mills of their own in the following century.'
      },
      correct:'B',
      expCorrect:'Her thesis is that the prosperity came from the unique MILL, not from the fair (which others had too). B supports it directly: the wealth rose only AFTER the mill, and rival towns with a fair but no mill did not grow the same way. That isolates the mill as the cause that sets it apart.',
      expWrong:{
        A:'That the fair drew merchants does not separate the causes: since several towns had a fair, it does not explain why THIS one pulled ahead.',
        C:'That the population grew BEFORE the mill is earlier context; it does not show the mill caused the jump in prosperity.',
        D:'That rivals built mills LATER happens afterward; it does not explain this town’s original head start.'
      },
      tip:'When the claim says "because of A (unique), not B (shared)", look for the option pairing the jump WITH A and showing that without A it did not happen. "Only after the mill, and rivals without a mill did not rise" is what isolates the cause.'
    },
    {
      id:'HVE-05', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Quotation',
      passage:"In an essay on craft, a novelist argues that revision, not first inspiration, is where a book truly takes shape. A critic examining the novelist’s working papers wants to quote a line that captures this conviction.",
      stem:'Which quotation from the novelist’s papers would most effectively illustrate the claim?',
      choices:{
        A:'“No story is worth telling unless it moves the reader to feel something true.”',
        B:'“The finest sentences come to me all at once, whole and unbidden, when I least expect them.”',
        C:'“I write best in the early hours, before the noise of the household begins.”',
        D:'“A first draft is only wet clay; the book itself does not appear until I have reshaped it a hundred times.”'
      },
      correct:'D',
      expCorrect:'The claim is that the book takes shape in REVISION, not in the initial inspiration. D illustrates it perfectly: the first draft is "wet clay" and the book only appears after remaking it "a hundred times". It puts revision above the first impulse, exactly as the critic says.',
      expWrong:{
        A:'That a story should move you is an idea about the purpose of art; it does not touch the role of revision.',
        B:'That the best sentences arrive "all at once" celebrates sudden INSPIRATION, the opposite of the book being born in revision.',
        C:'What time of day he writes best is about his routine, not about whether revision is where the book takes shape.'
      },
      tip:'On quotation questions, look for the one that STAGES the claim. Here, "revision over inspiration": pick the one about the draft that has to be remade many times. The one exalting the sudden spark is the trap running the other way.'
    },
    {
      id:'HVE-06', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Quotation',
      passage:"A historian writes that a nineteenth-century reformer publicly preached patience and gradual change but privately doubted that slow methods would ever work. To show this hidden impatience, the historian searches the reformer’s private letters.",
      stem:'Which quotation from the private letters would most effectively illustrate the historian’s point?',
      choices:{
        A:'“In my speeches I urge the crowds, as always, to trust that steady, lawful steps will carry the day.”',
        B:'“The public admires my calm; I have learned that a measured voice wins more listeners than an angry one.”',
        C:'“I have devoted my life to this cause and would not trade it for any comfort the world could offer.”',
        D:'“Between us, I no longer believe these cautious half-measures will free anyone; my patience is a mask I can barely hold.”'
      },
      correct:'D',
      expCorrect:'The point is that in public he preached patience but in private he DOUBTED the slow methods. D illustrates it exactly: "between us", he no longer believes in cautious measures and confesses his patience "is a mask". It shows the hidden impatience behind the calm speech.',
      expWrong:{
        A:'It repeats what he says in PUBLIC (trusting steady legal steps); it shows the façade, not the private doubt.',
        B:'It is about his image strategy (a calm voice persuades more), not about doubting that the slow way works.',
        C:'It expresses devotion to the cause, not doubt about whether gradual methods will serve. It does not touch the hidden impatience.'
      },
      tip:'The claim contrasts the PUBLIC with the PRIVATE. Look for the intimate quote ("between us…") revealing the hidden doubt, not the one repeating the public speech or the one about his image or his devotion.'
    },
    {
      id:'HVE-07', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"A theater scholar argues that a playwright’s comedies, though they seem lighthearted, were designed to slip sharp political criticism past the censors of his day. To support this, the scholar examines the plays themselves.",
      stem:'Which quotation from the plays would most effectively illustrate the scholar’s argument?',
      choices:{
        A:'A servant, pretending to praise the king, says, “Long may he rule, who taxes us so wisely that soon we shall have nothing left to tax.”',
        B:'A pair of young lovers exchange playful insults before agreeing, at last, to marry in the final act.',
        C:'A drunken cook stumbles about the kitchen, dropping pots and mistaking the cat for a rabbit.',
        D:'A narrator steps forward to wish the audience a merry evening and thank them warmly for attending.'
      },
      correct:'A',
      expCorrect:'The argument is that beneath the comedy the author slipped in POLITICAL CRITICISM without the censors noticing. A illustrates it perfectly: the servant pretends to praise the king while actually mocking his crushing taxes. It is humor on the outside, criticism of power on the inside, exactly what the scholar says.',
      expWrong:{
        B:'Playful insults between lovers who end up married is pure romantic comedy; there is no hidden political criticism.',
        C:'The drunken cook tripping over himself is harmless physical humor; it gets a laugh, but it does not criticize power.',
        D:'The narrator greeting and thanking the audience is theatrical courtesy; it carries no veiled criticism.'
      },
      tip:'For "criticism slipped in under the humor", look for the double-edged quote: it sounds like a joke but aims at power (the king’s taxes). Scenes of pure romantic or physical comedy do not carry the political message the claim calls for.'
    },
    {
      id:'HVE-08', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>Two bridges of similar length cross the same river.</li><li>The Old Bridge, built in 1890, rests on stone piers set in the riverbed.</li><li>The New Bridge, built in 1970, hangs from steel cables anchored on each bank.</li><li>The Old Bridge must close for repairs about once every two years.</li><li>The New Bridge has not closed for repairs since it opened.</li></ul>The student wants to emphasize a difference in how reliable the two bridges have been. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'The Old Bridge rests on stone piers set in the riverbed, while the New Bridge hangs from steel cables anchored on each bank.',
        B:'The Old Bridge was built in 1890, whereas the New Bridge was built in 1970.',
        C:'The Old Bridge must close for repairs about once every two years, while the New Bridge has not closed for repairs since it opened.',
        D:'The two bridges are of similar length and cross the same river.'
      },
      correct:'C',
      expCorrect:'The goal calls for a difference in the RELIABILITY of the two bridges. C compares exactly that: the Old one closes for repairs every two years and the New one has never closed. That measures how reliable each one is, with accurate notes.',
      expWrong:{
        A:'It contrasts how they are BUILT (piers vs. cables), not how reliable they have been in service.',
        B:'It compares the construction DATES, not the reliability of each bridge.',
        D:'It says what they have in COMMON (length and river), not a difference in reliability.'
      },
      tip:'"Difference in reliability" calls for the option about failures or closures (every two years vs. never), not the one about materials or dates or what they have in common.'
    },
    {
      id:'HVE-09', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>A chemist tested a new catalyst meant to speed up a slow reaction.</li><li>Without the catalyst, the reaction took 120 minutes to finish.</li><li>With the catalyst added, the same reaction finished in 12 minutes.</li><li>The catalyst was not used up and could be recovered afterward.</li><li>The chemist repeated the test five times with the same result.</li></ul>The student wants to emphasize how dramatically the catalyst sped up the reaction. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'The catalyst was not consumed during the reaction and could be recovered afterward for reuse.',
        B:'With the catalyst, the reaction finished in just 12 minutes, one-tenth of the 120 minutes it took without it.',
        C:'The chemist repeated the test five times and obtained the same result each time.',
        D:'The chemist tested a new catalyst designed to speed up a reaction that was otherwise slow.'
      },
      correct:'B',
      expCorrect:'The goal calls for emphasizing how DRASTIC the speed-up was. B shows it with the numbers: with the catalyst it took 12 minutes, a tenth of the 120 without it. That 120→12 contrast conveys the size of the change at a glance, with accurate notes.',
      expWrong:{
        A:'That the catalyst is recovered is about reusing it, not about how much it sped the reaction up.',
        C:'That the test was repeated five times shows CONSISTENCY, not the magnitude of the speed-up.',
        D:'It states what the chemist was testing (the purpose), without giving the time contrast that shows how drastic it was.'
      },
      tip:'"How drastic" calls for the comparison of MAGNITUDE with figures (120 vs. 12 min). Consistency (five times) or reusability answer a different goal, not how striking the change was.'
    },
    {
      id:'HVE-10', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>A conservator cleaned a centuries-old painting darkened by layers of old varnish.</li><li>Under the yellowed varnish, the sky had looked a dull brown.</li><li>After cleaning, the sky was revealed to be a bright blue.</li><li>Some critics feared the cleaning might strip away original paint.</li><li>Tests showed the original paint layer was left untouched.</li></ul>The student wants to reassure readers who worried that the cleaning would damage the original artwork. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'Under the yellowed varnish, the painting’s sky had long looked a dull brown.',
        B:'After the cleaning, the painting’s sky was revealed to be a bright blue.',
        C:'Some critics had feared that cleaning the painting might strip away its original paint.',
        D:'Although some feared the cleaning would harm the artwork, tests confirmed the original paint layer was left untouched.'
      },
      correct:'D',
      expCorrect:'The goal is to REASSURE those who feared damage to the original. D does it: it acknowledges the fear and then settles it with the proof that the original paint layer was left intact. It answers exactly that worry, with accurate notes.',
      expWrong:{
        A:'It describes how the sky looked before (a dull brown); it says nothing about whether the cleaning harmed the work.',
        B:'It reports the visual result (a blue sky), but does not address the fear of damaging the original.',
        C:'It only REPEATS the critics’ fear without settling it; that unsettles people further, it does not reassure them.'
      },
      tip:'"Reassure someone who feared X" calls for the option giving the proof that X did not happen (the original paint left intact). Repeating the fear or describing the color does not settle that worry.'
    },
    {
      id:'HVE-11', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>Two neighboring towns each built a public library in the same year.</li><li>Town A placed its library beside the busy central market.</li><li>Town B placed its library on a quiet hill at the edge of town.</li><li>The libraries are the same size and hold similar collections.</li><li>Town A’s library records four times as many visits per week as Town B’s.</li></ul>The student wants to make a claim about how a library’s location can affect how often it is used, supported by the towns’ experience. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'Placing a library where people already gather appears to boost its use: Town A’s market-side library draws four times as many weekly visits as Town B’s hilltop one, though the two are alike in size and collection.',
        B:'Town A and Town B each opened a public library of the same size in the same year.',
        C:'Town A placed its library beside the busy central market, while Town B chose a quiet hill at the edge of town.',
        D:'Town B’s library sits on a quiet hill at the edge of town, away from the bustle of daily activity.'
      },
      correct:'A',
      expCorrect:'The goal calls for a CLAIM about how location affects use, supported by the case. A does both: it states the idea (placing it where people already gather raises use) and backs it with the data (four times as many visits, with the same size and collection). It is claim plus evidence, with accurate notes.',
      expWrong:{
        B:'It says both opened the same year at the same size; that is what they have in common, not a claim about location and use.',
        C:'It describes WHERE each town put its library, but it neither states nor supports any claim about use.',
        D:'It only describes the location of Town B’s library; it does not make the general claim or back it with data.'
      },
      tip:'"A claim supported by the case" calls for the option that JOINS a general idea with the data backing it (four times as many visits). Ones that merely describe locations or coincidences do not state the claim.'
    },
    {
      id:'HVE-12', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>A biologist studied three unrelated desert animals.</li><li>The kangaroo rat gets nearly all its water from the dry seeds it eats.</li><li>The thorny devil lizard channels dew along grooves in its skin to its mouth.</li><li>The camel can tolerate large swings in its body temperature to avoid sweating.</li><li>None of the three needs to drink standing water regularly.</li></ul>The student wants to present a generalization about desert animals that is supported by the examples in the notes. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'The kangaroo rat gets nearly all of the water it needs from the dry seeds it eats.',
        B:'The thorny devil lizard channels dew along grooves in its skin toward its mouth.',
        C:'Desert animals have evolved a variety of strategies that let them survive with little or no standing water to drink.',
        D:'The biologist studied three unrelated animals that all live in the desert.'
      },
      correct:'C',
      expCorrect:'The goal calls for a GENERALIZATION supported by the examples. C sums up the pattern across the three cases: different desert animals evolved varied strategies for living with little or no drinking water. It covers the rat, the lizard and the camel in a single idea, with accurate notes.',
      expWrong:{
        A:'It gives a single case (the kangaroo rat); that is an example, not the generalization covering all three.',
        B:'It gives another loose case (the lizard); an isolated example, not the general pattern.',
        D:'It describes the SETUP of the study (three desert animals), not the general conclusion the examples support.'
      },
      tip:'"A generalization supported by examples" calls for the option that SUMS UP what all the cases share (varied strategies, little water), not a single animal or a description of the study.'
    }
  ]
});
