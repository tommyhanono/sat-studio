/* SAT Studio question set — Reading & Writing: Extreme — Reading (XR-01 to XR-12) */
window.SAT_SETS.push({
  id: 'rw-x-reading',
  title: 'Extreme — Reading',
  section: 'rw',
  level: 'Extreme',
  description: 'Hard-Module-2 level: literary irony, hedged-science support/weaken, and cross-text nuance.',
  minutes: 18,
  questions: [
    // ---------- LITERARY (4) ----------
    {
      id:'XR-01', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Text Structure and Purpose',
      passage:"Mrs. Harmsworth had, everyone agreed, the finest charitable instincts in the parish, and she was careful to give them frequent exercise before an audience. When the vicar proposed a subscription for the widowed lace-makers, she was the first to pledge—loudly, and in a sum precisely large enough to be remembered and precisely small enough to be spared. Her generosity, in short, was of that admirable kind which costs the giver nothing but the trouble of being seen.",
      stem:'Which choice best describes the function of the final sentence in the text as a whole?',
      choices:{
        A:'It praises Mrs. Harmsworth for a generosity that asks little of her yet aids the widowed lace-makers.',
        B:'It resolves the narrator’s earlier uncertainty about whether Mrs. Harmsworth would contribute at all.',
        C:'It recasts the preceding account of Mrs. Harmsworth’s giving as vanity dressed in the language of virtue.',
        D:'It shifts the passage’s attention from Mrs. Harmsworth toward the plight of the lace-makers she assists.'
      },
      correct:'C',
      expCorrect:'The closing phrase uses words of praise (“admirable kind”) but hollows them out: a generosity that “costs the giver nothing but the trouble of being seen”. That ironically reinterprets everything before it — the calculated sum, the pledge said aloud — as vanity dressed up as virtue. That is its function: to close the portrait by revealing the true motive.',
      expWrong:{
        A:'It falls into the literal trap: it reads “admirable” straight. The text is ironic — “costs the giver nothing but the trouble of being seen” — so it does NOT praise; it unmasks.',
        B:'It invents a suspense that does not exist: the narrator never doubted whether she would give. In fact she “was the first to pledge”. No uncertainty is resolved.',
        D:'The focus never shifts to the lacemakers; they are only the setting. The phrase stays fixed on Mrs. Harmsworth’s character.'
      },
      tip:'When a phrase praises with words that are too perfect (“admirable”, “finest”) and then adds a condition that undoes them, suspect irony. The function is usually to reveal, not to praise.'
    },
    {
      id:'XR-02', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Inferences',
      passage:"It was understood in the family that Gerald had sacrificed his prospects to remain at home and care for his mother, and Gerald did nothing to disturb the understanding. That the arrangement spared him the exertions of a profession, the hazards of independence, and the humiliation of being measured against abler men—these were considerations he never named to himself, and would have met with genuine astonishment had another named them for him.",
      stem:'The text most strongly suggests that Gerald’s remaining at home was',
      choices:{
        A:'convenient to him in ways he sincerely kept himself from recognizing.',
        B:'motivated by an attachment to his mother that the family failed to appreciate.',
        C:'a deliberate deception by which he knowingly extracted the family’s admiration.',
        D:'a source of private regret over the profession he had given up.'
      },
      correct:'A',
      expCorrect:'The text says the advantages (avoiding the work, the risks, the comparison with abler men) were things Gerald “never named to himself” and would meet with “genuine astonishment”. That is: it suited him, but he genuinely kept himself from seeing it. A captures that sincere self-deception.',
      expWrong:{
        C:'“Deliberate deception… knowingly” contradicts the text: he precisely did NOT know; his astonishment would be “genuine”. He is not a conscious fraud.',
        B:'A sentimental trap: the text does not present a real affection being misunderstood; it ironizes that the “sacrifice” suited him. There is no evidence of genuine attachment being overlooked.',
        D:'“Regret over the profession” inverts the meaning: the text says he was spared “the exertions of a profession”. There is no regret; there is unacknowledged relief.'
      },
      tip:'Watch for “never named to himself” + “genuine astonishment”: it marks self-deception, not conscious calculation and not virtue. The inference has to respect that he himself does NOT see it.'
    },
    {
      id:'XR-03', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Purpose',
      passage:"The new drawing-room was pronounced a triumph. Every object in it had been chosen to declare that its owners knew what was correct, and the effect was so complete that a visitor felt at once the impossibility of ever being comfortable there. The chairs, in particular, had been designed by a man of taste, and it was said that no one had ever sat in one twice.",
      stem:'The narrator mentions the chairs primarily to',
      choices:{
        A:'illustrate the high cost of the furnishings the owners had acquired.',
        B:'give a concrete instance of a room whose correctness defeats its own comfort.',
        C:'suggest that the owners rarely received visitors in the drawing-room.',
        D:'commend the skill of the designer who had been engaged for the work.'
      },
      correct:'B',
      expCorrect:'Just before, the text says the room is so “correct” that you feel “the impossibility of ever being comfortable there”. The chairs are the concrete example: designed by a man of taste, but “no one had ever sat in one twice” (nobody sat twice = uncomfortable). They illustrate that idea: correctness beats comfort.',
      expWrong:{
        A:'Cost is never mentioned; the topic is taste and discomfort, not price. It is a detail the text does not touch.',
        C:'A literal trap with “no one had ever sat in one twice”: it does not say they get no visitors, but that whoever sits does not repeat — because the chairs are uncomfortable. It mistakes the joke for a fact about visitor frequency.',
        D:'It reads “a man of taste” straight as praise. It is ironic: great taste produced chairs no one sits in twice. It is not out to praise the designer.'
      },
      tip:'An example almost always serves to prove the claim just before it. Here the claim is “correct but uncomfortable”; the chair is its proof, not a fact about visitors or prices.'
    },
    {
      id:'XR-04', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Text Structure and Purpose',
      passage:"Miss Verrall had reached the age at which a woman is complimented on her frankness, frankness being the only charm that improves with keeping. She said exactly what she thought, and her acquaintances forgave her on the ground that she thought so little; for there is a candour that wounds because it is discerning, and another that is pardoned because it is not.",
      stem:'The narrator’s remark that Miss Verrall’s acquaintances “forgave her on the ground that she thought so little” chiefly serves to',
      choices:{
        A:'defend Miss Verrall against neighbors who resented her honest opinions.',
        B:'establish that Miss Verrall was widely admired for the wisdom of her observations.',
        C:'explain that Miss Verrall’s advancing age had made her companions more tolerant of her.',
        D:'qualify the earlier compliment by implying her frankness is harmless because it is shallow.'
      },
      correct:'D',
      expCorrect:'The text praises her “frankness”, but the close distinguishes two kinds: one that wounds “because it is discerning” and one that is pardoned “because it is not”. By saying she is forgiven because she “thought so little”, it places her in the second: harmless because shallow. The phrase qualifies (deflates) the earlier compliment.',
      expWrong:{
        A:'It does not defend her from anyone; the narrator is the one needling her. “Forgave her… she thought so little” is an elegant put-down, not a defense.',
        C:'An “age” trap: age appears earlier, but the pardon is attributed to her thinking so little, not to others mellowing over the years. It confuses two causes.',
        B:'It inverts the meaning: the last clause denies that her judgments are “discerning”. She is not admired for wisdom; she is tolerated for the lack of it.'
      },
      tip:'Phrases like “X, X being the one thing that improves with keeping” and twin contrasts (“wounds… / pardoned…”) are irony signals. Look for the option that deflates the praise, not the one that repeats it.'
    },
    // ---------- HEDGED-SCIENCE SUPPORT / WEAKEN (5) ----------
    {
      id:'XR-05', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (textual)',
      passage:"Certain desert shrubs release chemicals from their roots that inhibit the germination of seeds nearby. Researchers hypothesize that this suppression is not merely a byproduct of the shrub’s metabolism but an adaptation that reduces competition for scarce water by keeping the soil immediately around each shrub relatively bare. They caution, however, that a bare zone could also arise simply because the shrub’s own roots deplete the local water first.",
      stem:'Which finding, if true, would most directly support the researchers’ hypothesis?',
      choices:{
        A:'The chemicals released by the shrubs break down rapidly once they enter the surrounding soil.',
        B:'In well-watered plots, the shrubs continue to release the germination-inhibiting chemicals at the same rate as in dry plots.',
        C:'Seedlings of species that compete with the shrub for water are suppressed far more strongly than seedlings that draw water from deeper layers the shrub does not use.',
        D:'The bare zone around each shrub is roughly the same width as the spread of the shrub’s own root system.'
      },
      correct:'C',
      expCorrect:'The hypothesis is that the suppression is an ADAPTATION for reducing competition for water, not a mere byproduct. C supports it precisely: the chemical hits far harder the seedlings that DO compete for water and barely touches those using deep water the shrub cannot reach. That selective targeting is exactly what you would expect from an anti-competitor adaptation, not from a blind effect.',
      expWrong:{
        A:'The chemical degrading quickly is a fact about soil chemistry; it says nothing about whether its function is reducing competition for water. True but irrelevant.',
        B:'Being released the same with or without water touches the mechanism (it is constitutive), but it does not distinguish “anti-competition adaptation” from “metabolic byproduct”; in fact a byproduct would also come out the same. It does not support THE claim.',
        D:'The bare patch matching the width of the roots supports the text’s RIVAL explanation (the shrub dries the local water first), not the chemical-adaptation hypothesis. It supports the wrong neighboring claim.'
      },
      tip:'The hypothesis distinguishes “purposeful adaptation” from “byproduct”. Support it with evidence of selectivity aimed at competitors (C), not with data that would equally fit the rival explanation.'
    },
    {
      id:'XR-06', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (textual)',
      passage:"A team studying a songbird found that males raised in isolation still produce a rough version of the species’ song. They propose that the basic template of the song is innate rather than learned, though they note that the isolated males’ songs remain abnormal in pitch and timing, and that only exposure to adult tutors yields a fully typical song.",
      stem:'Which finding, if true, would most directly weaken the team’s proposal?',
      choices:{
        A:'Isolated males that are later exposed to adult tutors go on to sing fully typical songs.',
        B:'Males raised in isolation but able to hear their own vocalizations develop the rough song, whereas males also deafened early produce no recognizable song at all.',
        C:'The abnormal pitch of isolated males’ songs disappears completely once the birds mature.',
        D:'Different populations of the species sing dialects that differ noticeably in their fine details.'
      },
      correct:'B',
      expCorrect:'The proposal is that the basic TEMPLATE of the song is innate (not learned). B weakens it: if isolated birds only manage the rough song when they can HEAR themselves, and birds deafened early produce nothing recognizable, then even that “basic” song depends on learning through auditory feedback — it is not purely innate. It attacks the core of the claim.',
      expWrong:{
        A:'Singing normally with tutors is what the text ALREADY grants and fits its proposal (only the template is innate). It does not weaken it; it is consistent.',
        C:'The abnormal tone fading with maturity touches the maturation of the song, not whether the template is innate or learned. True but irrelevant to the claim.',
        D:'Dialects between populations affect the fine details — which the text already attributes to learning from a tutor — not the innate basic template. It weakens a neighboring claim, not THE claim.'
      },
      tip:'To weaken “X is innate”, look for evidence that X actually requires experience or learning (here, hearing oneself). Anything affecting only the “fine details” does not touch the basic template.'
    },
    {
      id:'XR-07', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (textual)',
      passage:"Analyzing sediment cores from a lake, geologists found a layer rich in charcoal dating to about 1,200 years ago. They hypothesize that the charcoal records a single large wildfire, rather than the gradual accumulation of soot from many small fires, since such a blaze would explain the abrupt shift in vegetation seen in pollen from the same layer. They acknowledge that wind could carry charcoal from distant fires into the lake.",
      stem:'Which finding, if true, would most directly support the geologists’ hypothesis?',
      choices:{
        A:'Charcoal appears in smaller amounts in several layers both above and below the charcoal-rich layer.',
        B:'The pollen in layers just above the charcoal-rich layer indicates vegetation typical of a cooler, wetter climate.',
        C:'Lakes elsewhere in the region contain charcoal layers dating to a variety of different centuries.',
        D:'The charcoal-rich layer contains large, angular charcoal fragments of a size that wind cannot transport far, concentrated in a single thin band.'
      },
      correct:'D',
      expCorrect:'The hypothesis: the charcoal records ONE large, local fire, not the buildup of many distant ones. D supports it directly: large, angular fragments that wind CANNOT carry far, concentrated in a single thin band → one big nearby fire at a single moment, ruling out the wind alternative and the many-small-fires one.',
      expWrong:{
        A:'Charcoal in layers above and below suggests recurring fires or gradual soot — that runs AGAINST the idea of a single event. If anything, it weakens it.',
        C:'Other lakes having layers from varied centuries is regional context; it says nothing about whether THIS layer is a single fire. True but irrelevant.',
        B:'Pollen from a colder, wetter climate describes what happened to the vegetation AFTERWARD, not whether the charcoal came from one big fire. It supports a neighboring claim (the vegetation change), not the one about the charcoal’s origin.'
      },
      tip:'“A single local event” is supported by showing the material could not have come from far away or piled up slowly (large fragments, one single band). Data about what came afterward do not touch the origin.'
    },
    {
      id:'XR-08', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (textual)',
      passage:"In a trial, patients who kept a daily gratitude journal reported better sleep than those who journaled about daily events. The researchers suggest the benefit comes specifically from focusing on positive experiences, not from the act of writing itself. They concede that patients knew which kind of journal they were assigned, which may have shaped their expectations.",
      stem:'Which finding, if true, would most directly weaken the researchers’ suggestion?',
      choices:{
        A:'A third group that wrote about neutral daily events reported the same improvement in sleep as the gratitude group.',
        B:'Patients in the gratitude group wrote entries that were, on average, slightly longer than those in the events group.',
        C:'Patients in both groups reported that they enjoyed the habit of journaling each night.',
        D:'The gratitude group’s sleep improvement was largest among patients who already slept relatively well.'
      },
      correct:'A',
      expCorrect:'The suggestion: the benefit comes SPECIFICALLY from focusing on the positive, not from the act of writing. A weakens it head on: a third group that wrote about NEUTRAL events improved just as much as the gratitude group → so the benefit does not depend on positive content but on the writing itself. It attacks exactly the “specifically positive” part.',
      expWrong:{
        B:'The gratitude entries being slightly longer is a detail of form; it does not show that the writing (rather than the positive content) is the cause. True but irrelevant.',
        C:'Both groups enjoying the writing does not separate “positive content” from “the act of writing”; both were writing. It does not weaken the specific claim.',
        D:'The improvement being larger among those who already slept well is about WHO benefits more, not about whether the cause is positive content vs. writing. It does not touch the claim.'
      },
      tip:'To weaken “the effect comes from the positive content, not the act of writing”, look for a group that writes WITHOUT positive content and improves just as much (A). That reassigns the cause to the writing itself.'
    },
    {
      id:'XR-09', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Command of Evidence (textual)',
      passage:"Marine biologists observed that a species of cleaner fish removes parasites from larger “client” fish. They hypothesize that the cleaners deliberately provide good service to clients that can easily swim to a rival cleaning station, reserving cheating—biting the client’s healthy mucus—for clients with no nearby alternative. They note that clients also differ in size and temperament.",
      stem:'Which finding, if true, would most directly support the biologists’ hypothesis?',
      choices:{
        A:'Cleaners bite the mucus of large and small clients at roughly equal rates.',
        B:'Clients frequently return to the same cleaning station over many days.',
        C:'When a rival cleaning station is experimentally placed nearby, cleaners noticeably reduce how often they bite the same clients they had been cheating.',
        D:'Cleaners spend more total time servicing large clients than small ones.'
      },
      correct:'C',
      expCorrect:'The hypothesis: the cleaners give good service (no cheating) precisely when the client CAN leave for a rival station, and cheat when there is no alternative. C is a direct test: placing a rival station nearby makes the cleaners bite those same clients less → the behavior changes with the availability of an alternative, exactly as the hypothesis predicts.',
      expWrong:{
        A:'Biting large and small clients equally is about size, which the text mentions separately; it says nothing about the key variable: whether a rival station is nearby. True but irrelevant.',
        B:'Clients returning to the same station shows loyalty, not that the cleaner adjusts its cheating according to whether alternatives exist. It does not support the proposed mechanism.',
        D:'Spending more time with large clients touches size and temperament, a neighboring claim the text sets aside; it is not the claim about the client’s escape option.'
      },
      tip:'The hypothesis ties the behavior to ONE variable (is there a rival station nearby?). Support it with the experiment that manipulates that variable (C), not with data about size or loyalty.'
    },
    // ---------- CROSS-TEXT NUANCE (3) ----------
    {
      id:'XR-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Cross-Text Connections',
      passage:"<b>Text 1</b><br>A survey of remote-working employees found that those who worked from home reported higher job satisfaction and fewer intentions to quit than in-office peers. The authors conclude that remote arrangements make workers happier and that firms should expand them broadly to retain talent.<br><br><b>Text 2</b><br>Dr. Ibáñez does not dispute the survey’s numbers: remote workers in it truly were more satisfied. But she notes that employees were not assigned to remote work at random; the firm granted it mainly to its most senior, autonomous staff. Their satisfaction, she argues, may reflect who was chosen for remote work rather than the arrangement itself.",
      stem:'Based on the texts, how would Dr. Ibáñez (Text 2) most likely respond to the conclusion in Text 1?',
      choices:{
        A:'By accepting the survey data but questioning whether remote work itself, rather than the type of employee granted it, caused the higher satisfaction.',
        B:'By disputing the survey’s finding that remote workers reported higher satisfaction than in-office peers.',
        C:'By agreeing that firms should expand remote work broadly in order to retain their most talented employees.',
        D:'By arguing that in-office employees are, in general, more satisfied than the survey was able to detect.'
      },
      correct:'A',
      expCorrect:'Ibáñez “does not dispute the survey’s numbers” (she accepts the data), but points out that remote work went mainly to the most senior, autonomous staff. That is why she doubts Text 1’s causal INFERENCE: the satisfaction could reflect WHO was chosen, not the arrangement itself. A says exactly that: accept the data, question the cause.',
      expWrong:{
        B:'A total-disagreement trap: the text says explicitly that it does NOT dispute the numbers (“truly were more satisfied”). She does not deny the finding, she denies the cause.',
        C:'A total-agreement trap: agreeing to expand remote work is Text 1’s conclusion, the one she calls into question. Ibáñez does not endorse it.',
        D:'It invents a claim she never makes: she does not hold that in-office workers are more satisfied “in general”. She only questions the cause behind the existing data.'
      },
      tip:'When Text 2 “does not dispute the numbers” but talks about non-random selection or assignment, its objection is to the CAUSE (correlation ≠ causation), not to the data. Avoid the traps of total agreement or total disagreement.'
    },
    {
      id:'XR-11', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Cross-Text Connections',
      passage:"<b>Text 1</b><br>Reviewing dozens of studies, a psychologist concludes that background music impairs reading comprehension. Across the studies, readers who studied in silence generally scored higher on comprehension tests than those who studied with music playing.<br><br><b>Text 2</b><br>Professor Okafor accepts that, on average, music lowered comprehension in these studies. Yet he stresses that the effect nearly vanished for simple texts and for music without lyrics; the sharp declines came almost entirely from lyric-heavy music paired with demanding texts. To say music impairs comprehension, he contends, is true only within that narrower band of conditions.",
      stem:'Based on the texts, Professor Okafor (Text 2) would most likely characterize the conclusion in Text 1 as',
      choices:{
        A:'mistaken, because in his reading of the studies music generally improved comprehension rather than harming it.',
        B:'broadly correct but incomplete, because the impairment depends heavily on factors Text 1 does not distinguish.',
        C:'well founded, since the studies uniformly show that any background music impairs comprehension.',
        D:'too cautious, because music impairs comprehension even more severely than Text 1 concludes.'
      },
      correct:'B',
      expCorrect:'Okafor “accepts that, on average, music lowered comprehension”, so he does not call it wrong. But he narrows the SCOPE: the effect nearly vanishes with simple texts and instrumental music, and concentrates in music with lyrics + difficult texts. That is: the general conclusion is right but incomplete because it does not distinguish those conditions. That is B.',
      expWrong:{
        A:'A total-disagreement trap: he does NOT say music improves comprehension; he accepts that on average it lowers it. It contradicts the text.',
        C:'A total-agreement trap: “uniformly… any background music” is exactly what he denies — the effect “nearly vanished” under several conditions. It is not uniform.',
        D:'It inverts his position: he does not say the harm is even worse, but that it is NARROWER than Text 1 suggests. “Too cautious” is the opposite of his scope objection.'
      },
      tip:'When Text 2 accepts the average but says “only under certain conditions / it nearly vanishes in others”, its objection is about SCOPE: correct but incomplete. It is neither full agreement nor full rejection.'
    },
    {
      id:'XR-12', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Cross-Text Connections',
      passage:"<b>Text 1</b><br>Archaeologists discovered fine imported pottery in the ruins of an ancient inland town far from any coast. They argue this proves the town’s residents were wealthy, since only prosperous people could afford goods carried over such long distances.<br><br><b>Text 2</b><br>Dr. Petrova finds the pottery genuine and agrees imported goods often signal wealth. But she observes that the pieces were all concentrated in a single building beside the town gate—plausibly a waystation where passing traders stored goods, not homes where residents used them. The pottery, she suggests, may reveal the town’s location on a trade route more than the purchasing power of its people.",
      stem:'Which choice best describes the relationship between the two texts?',
      choices:{
        A:'Text 2 rejects Text 1’s evidence as forged and therefore dismisses its conclusion about the town’s wealth.',
        B:'Text 2 and Text 1 disagree about whether the pottery was actually imported from a distant region.',
        C:'Text 2 endorses Text 1’s conclusion while adding that the town also lay on an important trade route.',
        D:'Text 2 accepts Text 1’s evidence but offers an alternative explanation that undercuts the specific inference Text 1 draws from it.'
      },
      correct:'D',
      expCorrect:'Petrova accepts the evidence (“finds the pottery genuine”) and even grants that imported goods usually indicate wealth. But she offers a different explanation: the pottery was all in one building by the gate, perhaps a traders’ way station, not homes. That undercuts Text 1’s specific INFERENCE (wealthy residents) by offering an alternative (a location on a trade route). That is D.',
      expWrong:{
        A:'False: she says the pottery is “genuine”, not forged. She does not reject the evidence; she rejects the interpretation.',
        C:'An agreement trap: she does NOT endorse the wealthy-residents conclusion; she replaces it with the trade-route one. “Endorses… conclusion” is incorrect.',
        B:'There is no disagreement about whether the pottery is imported; both accept that. The clash is about what she INFERS from it, not about its origin.'
      },
      tip:'Accepting the evidence but relocating its meaning (a way station, not homes) is “same data, different inference”. Rule out options saying she denies the evidence or endorses the conclusion.'
    }
  ]
});
