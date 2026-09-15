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
        A:'A thick layer of ash over part of the settlement shows a large fire swept through it shortly before the site emptied.',
        B:'The dwellings farthest from the settlement’s center were the first to be built, centuries before the site was abandoned.',
        C:'Across the site, doorways were deliberately bricked shut from the outside and heavy grinding stones were carried off, tasks that would have taken days of work.',
        D:'Pottery styles at the settlement match those of a distant region with which its residents traded for generations.'
      },
      correct:'C',
      expCorrect:'Her argument is that people left GRADUALLY and by choice, not fleeing a disaster. C supports it directly: they boarded up doors from the outside and carried away heavy grinding stones, jobs that take days. That slow, orderly work is exactly the planned departure she describes.',
      expWrong:{
        A:'A fire immediately before the site emptied points to a sudden DISASTER — exactly the flight the archaeologist argues against. It would weaken her claim rather than support it.',
        B:'The order in which the houses went up describes how the settlement GREW, centuries earlier. How it emptied at the end is left untouched.',
        D:'Long-standing trade tells you whom these people dealt with, not how they left. A calm departure and a panicked one are equally compatible with it.'
      },
      tip:'Go back to the exact CLAIM (a slow, deliberate departure, not flight). Look for the option that STAGES a departure with time and preparation (boarding up, hauling heavy things), not the one suggesting a sudden disaster.'
    },
    {
      id:'HVE-02', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Command of Evidence (textual)',
      passage:"A linguist proposes that two languages spoken on opposite sides of a mountain range descend from a single ancestor language, despite sounding quite different today. A rival scholar counters that the similarities the linguist points to are merely the result of the two peoples borrowing words from each other through centuries of trade.",
      stem:'Which finding, if true, would most directly support the linguist’s proposal over the rival’s explanation?',
      choices:{
        A:'The shared words are concentrated among terms for trade goods, weights, and market activities.',
        B:'The two languages share not only vocabulary but also the same irregular patterns for forming plurals, patterns rarely passed between languages through trade.',
        C:'Merchants have crossed the mountain range to trade between the two regions for at least a thousand years.',
        D:'Speakers of each language today find the other almost impossible to follow without an interpreter.'
      },
      correct:'B',
      expCorrect:'The linguist says they come from a SHARED ancestor; the rival says they only borrowed words through trade. B favors the linguist: they share irregular plural patterns, something languages almost never borrow. If they share that deep grammar, it points to a common origin, not to borrowing.',
      expWrong:{
        A:'Shared vocabulary confined to commerce is exactly what BORROWING through trade predicts. This is evidence for the rival scholar, not for a common ancestor.',
        C:'A thousand years of contact supplies the rival with his mechanism. It makes borrowing easier to believe, which pushes against the linguist rather than for her.',
        D:'Both hypotheses predict this: languages drift apart over centuries whether they are related or merely neighbors. A finding compatible with both cannot decide between them.'
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
        B:'Males display their most vivid coloring during the breeding season, when females are choosing among the males gathered along the reef.',
        C:'Both male and female fish of the species are equally capable of producing the vivid coloring.',
        D:'The fish tends to be more brightly colored during the warm season, when food on the reef is most plentiful.'
      },
      correct:'A',
      expCorrect:'Her claim is that the color signals AGGRESSION while defending territory, NOT courtship. A proves exactly that: the fish flares its strongest color while driving rivals out of its patch and stays dull while courting. That ties the color to territorial defense and rules out courtship, just as she says.',
      expWrong:{
        B:'Tying the color to the breeding season and to female choice is evidence for the COURTSHIP explanation — the very idea the biologist is arguing against. It pushes against her claim.',
        C:'Which fish CAN produce the color says nothing about what they use it for. Both explanations survive this finding, so it cannot separate aggression from courtship.',
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
        A:'The town’s trade fair drew merchants from across the region throughout the 1300s, and its busiest years fell in the same decades as the town’s new prosperity.',
        B:'Records show the town’s cloth output and wealth surged only after the mill was built, while rival towns with fairs but no such mill saw no similar rise.',
        C:'The town’s population grew steadily over the two centuries before the mill was built, well before its cloth trade expanded.',
        D:'Several rival towns eventually built water-powered mills of their own during the century that followed.'
      },
      correct:'B',
      expCorrect:'His thesis is that the prosperity came from the unique MILL, not from the fair (which others had too). B supports it directly: the wealth rose only AFTER the mill, and rival towns with a fair but no mill did not grow the same way. That isolates the mill as the cause that sets it apart.',
      expWrong:{
        A:'The timing is tempting, but it lines the prosperity up with the FAIR — the cause the historian rejects. It also cannot explain why this town pulled ahead when rival towns held fairs too.',
        C:'Growth that happened BEFORE the mill existed cannot have been caused by it, and two centuries of steady expansion is the opposite of the sudden surge he is trying to explain.',
        D:'Whatever rivals built a century later came after the fact. The argument is about a head start in the 1300s, and events from the next century cannot account for it.'
      },
      tip:'When the claim says "because of A (unique), not B (shared)", look for the option pairing the jump WITH A and showing that without A it did not happen. "Only after the mill, and rivals without a mill did not rise" is what isolates the cause.'
    },
    {
      id:'HVE-05', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Quotation',
      passage:"In an essay on craft, a novelist argues that revision, not first inspiration, is where a book truly takes shape. A critic examining the novelist’s working papers wants to quote a line that captures this conviction.",
      stem:'Which quotation from the novelist’s papers would most effectively illustrate the claim?',
      choices:{
        A:'“No story is worth telling unless it moves the reader to feel something true about their own life.”',
        B:'“The finest sentences arrive all at once, whole and unbidden, at the very moment I have stopped hunting for them.”',
        C:'“I write best in the early hours, before the noise of the household has begun to reach my desk.”',
        D:'“A first draft is only wet clay; the book itself does not appear until I have reshaped it a hundred times.”'
      },
      correct:'D',
      expCorrect:'The claim is that the book takes shape in REVISION, not in the initial inspiration. D illustrates it perfectly: the first draft is "wet clay" and the book only appears after remaking it "a hundred times". It puts revision above the first impulse, exactly as the critic says.',
      expWrong:{
        A:'This sets a standard for what a story should achieve, not a claim about how one gets made. Neither drafting nor rewriting appears, so it cannot show where the book takes shape.',
        B:'A finished sentence arriving whole is the INSPIRATION side of the contrast. The quotation illustrates the position the novelist argues against, which is the reverse of what the critic needs.',
        C:'The hour at which he works is a fact about routine. The claim concerns which STAGE of the work matters most, and a preferred time of day speaks to neither draft nor revision.'
      },
      tip:'On quotation questions, look for the one that STAGES the claim. Here, "revision over inspiration": pick the one about the draft that has to be remade many times. The one exalting the sudden spark is the trap running the other way.'
    },
    {
      id:'HVE-06', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Quotation',
      passage:"A historian writes that a nineteenth-century reformer publicly preached patience and gradual change but privately doubted that slow methods would ever work. To show this hidden impatience, the historian searches the reformer’s private letters.",
      stem:'Which quotation from the private letters would most effectively illustrate the historian’s point?',
      choices:{
        A:'“In my speeches I urge the crowds, as always, to trust that steady and lawful steps will carry the day.”',
        B:'“The public admires my calm; I have learned that a measured voice wins far more listeners for me than an angry one ever could.”',
        C:'“I have devoted my whole life to this cause and would not trade it for any comfort the world could offer me.”',
        D:'“Between us, I no longer believe these cautious half-measures will free anyone; my patience is a mask I can barely hold.”'
      },
      correct:'D',
      expCorrect:'The point is that in public he preached patience but in private he DOUBTED the slow methods. D illustrates it exactly: "between us", he no longer believes in cautious measures and confesses his patience "is a mask". It shows the hidden impatience behind the calm speech.',
      expWrong:{
        A:'This repeats the PUBLIC message the historian already has from the speeches. A private letter that restates the façade shows nothing hidden behind it.',
        B:'This explains how he manages his image, and it takes the calm at face value as a technique that works. The hidden DOUBT about slow methods is nowhere in it.',
        C:'Commitment to the cause is not doubt about the method. He could believe in gradual change just as fervently, so his private impatience is left untouched.'
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
        B:'A pair of young lovers trade playful insults through three whole acts before agreeing, at last, to marry in the final scene of the play.',
        C:'A drunken cook stumbles about the kitchen, dropping pots and mistaking the household cat for a rabbit.',
        D:'A narrator steps forward to wish the audience a merry evening and to thank them warmly for attending tonight.'
      },
      correct:'A',
      expCorrect:'The argument is that beneath the comedy the author slipped in POLITICAL CRITICISM without the censors noticing. A illustrates it perfectly: the servant pretends to praise the king while actually mocking his crushing taxes. It is humor on the outside, criticism of power on the inside, exactly what the scholar says.',
      expWrong:{
        B:'A courtship quarrel that ends in marriage is the ordinary business of romantic comedy. It is funny without pointing at anyone in power, so there is nothing here a censor could have missed.',
        C:'Physical comedy of this kind is harmless by design. It earns its laugh from the cook’s clumsiness, not from the king, the court, or any policy, so no criticism is being slipped past anyone.',
        D:'A greeting to the audience is theatrical courtesy standing outside the story. It flatters the spectators rather than concealing a barb aimed at those in power.'
      },
      tip:'For "criticism slipped in under the humor", look for the double-edged quote: it sounds like a joke but aims at power (the king’s taxes). Scenes of pure romantic or physical comedy do not carry the political message the claim calls for.'
    },
    {
      id:'HVE-08', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>Two bridges of similar length cross the same river.</li><li>The Old Bridge, built in 1890, rests on stone piers set in the riverbed.</li><li>The New Bridge, built in 1970, hangs from steel cables anchored on each bank.</li><li>The Old Bridge must close for repairs about once every two years.</li><li>The New Bridge has not closed for repairs since it opened.</li></ul>The student wants to emphasize a difference in how reliable the two bridges have been. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'The Old Bridge rests on stone piers set directly in the riverbed, while the New Bridge hangs from steel cables anchored on each bank.',
        B:'The Old Bridge was built in 1890, whereas the New Bridge was not completed until 1970, eighty years later.',
        C:'The Old Bridge must close for repairs about once every two years, while the New Bridge has not closed for repairs since it opened.',
        D:'The two bridges are of similar length and cross the same river at nearly the same point.'
      },
      correct:'C',
      expCorrect:'The goal calls for a difference in the RELIABILITY of the two bridges. C compares exactly that: the Old one closes for repairs every two years and the New one has never closed. That measures how reliable each one is, with accurate notes.',
      expWrong:{
        A:'The contrast is accurate, and the design difference may well be WHY one bridge needs more work — but a construction method is a possible cause, not a record of how each bridge has performed.',
        B:'The dates make one bridge plainly older, which is tempting, but age is not reliability. The notes count closures for each bridge, and neither count appears in this option.',
        D:'This reports what the two bridges have in COMMON. Those similarities are what make the comparison fair, yet the goal asks for the difference between them.'
      },
      tip:'"Difference in reliability" calls for the option about failures or closures (every two years vs. never), not the one about materials or dates or what they have in common.'
    },
    {
      id:'HVE-09', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>A chemist tested a new catalyst meant to speed up a slow reaction.</li><li>Without the catalyst, the reaction took 120 minutes to finish.</li><li>With the catalyst added, the same reaction finished in 12 minutes.</li><li>The catalyst was not used up and could be recovered afterward.</li><li>The chemist repeated the test five times with the same result.</li></ul>The student wants to emphasize how dramatically the catalyst sped up the reaction. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'The catalyst was not consumed during the reaction and could be recovered afterward and used again in later tests.',
        B:'With the catalyst, the reaction finished in just 12 minutes, one-tenth of the 120 minutes it took without it.',
        C:'The chemist repeated the test five times and obtained the same result on every one of those runs.',
        D:'The chemist tested a new catalyst that had been designed to speed up a reaction that was otherwise slow.'
      },
      correct:'B',
      expCorrect:'The goal calls for emphasizing how DRASTIC the speed-up was. B shows it with the numbers: with the catalyst it took 12 minutes, a tenth of the 120 without it. That 120→12 contrast conveys the size of the change at a glance, with accurate notes.',
      expWrong:{
        A:'Recoverability is a genuine advantage and it is in the notes, but it speaks to cost and reuse. How DRAMATICALLY the reaction sped up needs the two times, and neither appears.',
        C:'Five identical runs establish that the finding is RELIABLE, not that it is large. Consistency and magnitude are different goals, and only the second one is asked for here.',
        D:'This states the PURPOSE of the experiment rather than its outcome. It says what was hoped for and leaves out the 120 and 12 minutes that show what actually happened.'
      },
      tip:'"How drastic" calls for the comparison of MAGNITUDE with figures (120 vs. 12 min). Consistency (five times) or reusability answer a different goal, not how striking the change was.'
    },
    {
      id:'HVE-10', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>A conservator cleaned a centuries-old painting darkened by layers of old varnish.</li><li>Under the yellowed varnish, the sky had looked a dull brown.</li><li>After cleaning, the sky was revealed to be a bright blue.</li><li>Some critics feared the cleaning might strip away original paint.</li><li>Tests showed the original paint layer was left untouched.</li></ul>The student wants to reassure readers who worried that the cleaning would damage the original artwork. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'Under the yellowed varnish, the painting’s sky had looked a dull brown for centuries.',
        B:'After the cleaning, the painting’s sky was revealed to be a bright and luminous blue.',
        C:'Some critics had feared that cleaning the painting would strip away the artist’s original layer of paint along with the varnish.',
        D:'Although some feared the cleaning would harm the artwork, tests confirmed the original paint layer was left untouched.'
      },
      correct:'D',
      expCorrect:'The goal is to REASSURE those who feared damage to the original. D does it: it acknowledges the fear and then settles it with the proof that the original paint layer was left intact. It answers exactly that worry, with accurate notes.',
      expWrong:{
        A:'This describes the painting’s condition BEFORE any work began. Whether the cleaning harmed the original is the worry, and the state of the old varnish has no bearing on it.',
        B:'A striking result is not the same as a safe one. A critic who feared the paint was stripped could read a transformed sky as evidence of exactly that; only the paint-layer tests answer the fear.',
        C:'This states the worry accurately and then stops. Repeating a fear without the test that settles it leaves the reader more alarmed than before, which is the reverse of reassurance.'
      },
      tip:'"Reassure someone who feared X" calls for the option giving the proof that X did not happen (the original paint left intact). Repeating the fear or describing the color does not settle that worry.'
    },
    {
      id:'HVE-11', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>Two neighboring towns each built a public library in the same year.</li><li>Town A placed its library beside the busy central market.</li><li>Town B placed its library on a quiet hill at the edge of town.</li><li>The libraries are the same size and hold similar collections.</li><li>Town A’s library records four times as many visits per week as Town B’s.</li></ul>The student wants to make a claim about how a library’s location can affect how often it is used, supported by the towns’ experience. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'Placing a library where people already gather appears to boost its use: Town A’s market-side library draws four times as many weekly visits as Town B’s hilltop one, though the two are alike in size and collection.',
        B:'Town A and Town B each opened a public library in the same year, and the two hold collections of similar size.',
        C:'Town A placed its library beside the busy central market, while Town B chose a quiet hill at the edge of town, away from daily foot traffic.',
        D:'Town B’s library sits on a quiet hill at the edge of town, well away from the bustle of daily activity.'
      },
      correct:'A',
      expCorrect:'The goal calls for a CLAIM about how location affects use, supported by the case. A does both: it states the idea (placing it where people already gather raises use) and backs it with the data (four times as many visits, with the same size and collection). It is claim plus evidence, with accurate notes.',
      expWrong:{
        B:'This records what the two libraries have in COMMON. Those similarities are what make the comparison fair, but the goal asks for a claim about location, which never appears here.',
        C:'The contrast in location is accurate and is half of what the goal needs, but it stops there. Without the visit figures, nothing connects where a library sits to how often it gets used.',
        D:'This describes one library’s setting. It states neither the general claim about location nor the four-to-one gap in weekly visits that would support it.'
      },
      tip:'"A claim supported by the case" calls for the option that JOINS a general idea with the data backing it (four times as many visits). Ones that merely describe locations or coincidences do not state the claim.'
    },
    {
      id:'HVE-12', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>A biologist studied three unrelated desert animals.</li><li>The kangaroo rat gets nearly all its water from the dry seeds it eats.</li><li>The thorny devil lizard channels dew along grooves in its skin to its mouth.</li><li>The camel can tolerate large swings in its body temperature to avoid sweating.</li><li>None of the three needs to drink standing water regularly.</li></ul>The student wants to present a generalization about desert animals that is supported by the examples in the notes. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'The kangaroo rat gets nearly all of the water it needs from the dry seeds that it eats.',
        B:'The thorny devil lizard channels dew along the grooves in its skin and down toward its mouth.',
        C:'Desert animals have evolved a variety of strategies that let them survive with little or no standing water to drink.',
        D:'The biologist studied three unrelated animals — a rodent, a lizard, and a camel — that all make their home in the desert.'
      },
      correct:'C',
      expCorrect:'The goal calls for a GENERALIZATION supported by the examples. C sums up the pattern across the three cases: different desert animals evolved varied strategies for living with little or no drinking water. It covers the rat, the lizard and the camel in a single idea, with accurate notes.',
      expWrong:{
        A:'This is one of the three cases, reported accurately. A single animal’s strategy is an EXAMPLE of the pattern, not the generalization that has to cover the lizard and the camel as well.',
        B:'Another accurate single case. It shows one route to water in a dry place, but a generalization has to name what all three animals share, not what one of them happens to do.',
        D:'This describes the SETUP of the study — who was examined — rather than what the examples show. A generalization states the pattern, and listing the subjects stops just short of it.'
      },
      tip:'"A generalization supported by examples" calls for the option that SUMS UP what all the cases share (varied strategies, little water), not a single animal or a description of the study.'
    }
  ]
});
