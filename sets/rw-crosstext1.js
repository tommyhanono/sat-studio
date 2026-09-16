/* SAT Studio question set — Reading & Writing: Cross-Text Connections (CXT-01 a CXT-12) */
(function(){
  window.SAT_SETS.push({
    id: 'rw-crosstext1',
    title: 'Cross-Text Connections',
    section: 'rw',
    level: 'Media',
    description: 'Twelve paired-text items in which the second author accepts the first author’s finding and disputes what it licenses: the scope of the claim, the mechanism behind it, the direction of the cause, and what counts as evidence.',
    minutes: 18,
    questions: [
      {
        id:'CXT-01', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections',
        passage:'<b>Text 1</b><br>Adapted from a report by Ilona Wrenfield.<br>Streetlights that emit amber light draw far fewer night-flying insects than the white fixtures now replacing the old sodium lamps. Across a two-year swap on eleven blocks of the Harlow grid, amber posts drew about a third as many moths as white posts one street away. Every lamp in the country will be replaced at some point in the next fifteen years, and choosing amber at that moment costs a city nothing. It is the rarest thing in conservation: a large gain that asks no one to give anything up.<br><br><b>Text 2</b><br>Adapted from a response by Aurelio Banfi.<br>Wrenfield’s counts at the post are sound, and on cost grounds I would make her recommendation myself. But the number of moths at a lamp and the number of moths harmed by it are not the same quantity. In our plots the insects that kept away from the amber posts did not simply go on with the night; their paths still bent toward the lit street, and captures in the hedgerows twenty meters back rose by close to what the posts had lost. Amber may be spreading the disturbance rather than shrinking it.',
        stem:'Based on the texts, how would Banfi (Text 2) most likely respond to Wrenfield’s recommendation that cities install amber fixtures?',
        choices:{
          A:'By accepting the switch to amber while denying that counts taken at the lamp show insects being spared.',
          B:'By agreeing that amber fixtures drew roughly a third as many moths to the post as the white fixtures they replaced.',
          C:'By noting that the choice between the two fixtures costs a city nothing at the moment a lamp is replaced.',
          D:'By opposing the switch on the ground that amber lamps leave night-flying insects worse off than white ones do.'
        },
        correct:'A',
        expCorrect:'Banfi agrees twice over: the counts are “sound”, and he would make the same recommendation “on cost grounds”. What he refuses is the inference drawn from the counts — “the number of moths at a lamp and the number of moths harmed by it are not the same quantity” — and his hedgerow captures rose by about what the posts lost. He keeps the policy and rejects the reading of the evidence.',
        expWrong:{
          B:'True according to Text 1, and stated in Text 1’s own words. Banfi does grant the count, but granting a finding is not responding to what the finding is used for, and this choice leaves his entire objection out.',
          C:'True of both texts — Wrenfield says the choice “costs a city nothing” and Banfi endorses the switch “on cost grounds”. Shared ground is not a response, and cost is the one thing the two authors are not arguing about.',
          D:'The right idea pushed to an absolute. Banfi says he would make the same recommendation himself; his claim is that the lamp counts do not show insects being spared, not that amber makes matters worse.'
        },
        tip:'When Text 2 opens by granting Text 1’s numbers, the disagreement is never about the numbers. Find the sentence where Text 2 says what the numbers do NOT show, and build the answer from that sentence.'
      },
      {
        id:'CXT-02', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections',
        passage:'<b>Text 1</b><br>Adapted from a paper by Pieter Vansteen.<br>Bit wear on horse teeth is the one trace of riding that cannot be mistaken for anything else. A bit worn between the premolars bevels the enamel in a way that chewing, age and disease do not, and the bevel appears on nine of the eleven jaws recovered from the Bratsk layers. Those layers are dated to about 3500 BCE by three independent radiocarbon runs. Riding, then, is a full millennium older on the steppe than the wagon burials alone would suggest.<br><br><b>Text 2</b><br>Adapted from a response by Asha Ndlela.<br>I have handled the same jaws, and Vansteen’s bevels are exactly where he says they are. The inference is what I would slow down. A bit bevels enamel because a line runs through the mouth and is pulled; so does a tether, and a tethered animal is a penned animal rather than a ridden one. What the Bratsk jaws establish is that people at 3500 BCE were controlling horses by the head. Which horses carried riders, and whether any did, is not written on a tooth.',
        stem:'Which choice best describes a difference in how the two texts present the bevels found on the Bratsk jaws?',
        choices:{
          A:'Text 1 calls the bevels unmistakable, while Text 2 finds them too faint to identify with any confidence.',
          B:'Text 1 presents them as a mark only a bit can leave; Text 2 presents them as a mark more than one kind of restraint can leave.',
          C:'Both texts treat them as physical traces preserved on the same eleven jaws recovered at Bratsk.',
          D:'Text 1 concludes from them that horses were ridden at Bratsk; Text 2 concludes that they were only ever penned.'
        },
        correct:'B',
        expCorrect:'Ndlela concedes the bevels — they are “exactly where he says they are”. The split is over what can leave one. Text 1 opens by calling bit wear “the one trace of riding that cannot be mistaken for anything else”, a mark with a single possible cause; Text 2 supplies a second cause with the same mechanics, a tether that “runs through the mouth and is pulled”. Same mark, one cause or several.',
        expWrong:{
          A:'It borrows Text 1’s word for the bevels and then invents a complaint Text 2 never makes. Ndlela says she handled the jaws and found the bevels where Vansteen reported them; nothing in Text 2 says they are hard to see.',
          C:'True of both texts, which is exactly why it cannot be the difference between them. Both authors work from the same eleven jaws, and that shared starting point is what makes the quarrel one about interpretation.',
          D:'A real disagreement pushed into a total one. Ndlela’s last sentence leaves the question open — “whether any did, is not written on a tooth” — which is a refusal to conclude, not a conclusion that nobody rode.'
        },
        tip:'In a “difference” question, first find what the two texts share. Authors looking at the same object usually differ over what it can be evidence FOR, so a choice that denies the shared object is almost always wrong.'
      },
      {
        id:'CXT-03', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections',
        passage:'<b>Text 1</b><br>Adapted from a report by Corinne Baptiste.<br>Forty-one firms that moved to a four-day week without touching pay reported output within two percent of their previous level after six months, and voluntary departures across the group fell by a third. That combination is not a perk; it is a management technology, and like any technology it will be adopted first by the firms that understand it. Within a decade, a company still asking for five days will be bidding for the same engineers against a company asking for four, and losing.<br><br><b>Text 2</b><br>Adapted from a response by Emeka Vaughn-Adu.<br>Baptiste’s figures are the figures I would have reported. Output held, and people stayed. What no study yet tells us is whom the schedule holds for. Every firm in her sample chose the experiment, and the firms that can choose it are the ones already able to spare a day: professional services, software, design. A ward with a fixed patient load cannot compress, and neither can a kitchen at dinner. I am not doubting the result. I am saying that a result drawn from forty-one volunteers has an unknown reach.',
        stem:'Both authors would most likely agree with which statement?',
        choices:{
          A:'A four-day week is better understood as a management technology than as a benefit offered to employees.',
          B:'Most workplaces would see output fall if they compressed a five-day week into four days of work.',
          C:'The firms that adopted the shorter week held output nearly steady and lost fewer employees to resignation.',
          D:'The evidence gathered so far cannot show whether the schedule travels beyond the firms that volunteered for it.'
        },
        correct:'C',
        expCorrect:'The shared ground is the finding and nothing built on top of it. Baptiste reports output within two percent and departures down a third; Vaughn-Adu opens with “the figures I would have reported” and repeats them in his own words — “Output held, and people stayed.” Everything else in the two texts is contested, so the result itself is the only safe answer.',
        expWrong:{
          A:'Text 1’s claim in Text 1’s own vocabulary. “It is a management technology” is Baptiste’s phrase, and Vaughn-Adu never adopts it; what he questions is precisely whether the schedule is portable or a privilege of certain industries.',
          B:'Neither author says this. Vaughn-Adu argues that the evidence cannot reach past the volunteers, which is a statement about what is unknown, not a prediction that output would fall. He closes by refusing to doubt the result.',
          D:'True of Text 2 alone, and the question asks for common ground. Baptiste treats her sample as a preview of the whole labor market — “within a decade” — so she cannot be credited with a limit her forecast ignores.'
        },
        tip:'Shared ground is narrower than it looks: two authors who quarrel about what a result MEANS still agree about the result. Start from the plainest statement of the finding and reject anything that adds a consequence to it.'
      },
      {
        id:'CXT-04', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections',
        passage:'<b>Text 1</b><br>Adapted from a study by Wilhelmina Krogh.<br>Parish marriage registers are the best surviving index of literacy in the northern counties. From 1754 the law required both parties to sign the register or mark it, and the proportion signing climbs from thirty-eight percent in the 1750s to sixty-one percent by 1830. The registers have a virtue no school record can match: they cover everyone who married, in every parish, rich and poor alike, and they go on covering them year after year without a gap.<br><br><b>Text 2</b><br>Adapted from a response by Dov Kirchner.<br>Krogh’s series is valuable and I use it in my own work. But a signature is a performance that can be drilled in an afternoon. In three villages where probate inventories survive alongside the registers, households that owned no book at all produced signing brides at nearly the rate of households that owned five or more. If signing tracked reading, that gap should have been wide. What the registers count is whether a person had been taught to write one word, which is not the same as being able to read a page.',
        stem:'What would Krogh (Text 1) most likely say about the evidence Kirchner relies on in Text 2?',
        choices:{
          A:'That a signature records the ability to write a name rather than the ability to read a page.',
          B:'That the inventories confirm her series, since households that owned no books at all still produced signing brides.',
          C:'That ownership of books is worthless as an index of who could read in the northern counties.',
          D:'That three villages cannot unsettle a series whose value is its coverage.'
        },
        correct:'D',
        expCorrect:'Text 1 names its own standard in the last sentence: the registers matter because they cover “everyone who married, in every parish… without a gap”. Kirchner’s counter-evidence comes from probate inventories that happen to survive in three villages. Judged by the standard Krogh has already written down, that is a trade of coverage for a handful of cases, and it is the objection she would make.',
        expWrong:{
          A:'This is Kirchner’s conclusion, handed to the author it was aimed at. A choice that restates Text 2 cannot be Text 1’s response to Text 2, and this one gives away the whole argument Text 1 spends its last sentence building.',
          B:'It reads his result backwards. Book-owning and bookless households signing at the same rate is what breaks the link between signing and reading; Kirchner offers it as a problem for the series, not as support for it.',
          C:'The right idea pushed to an absolute. Krogh would question how far three villages reach, not deny that an inventory says anything; nothing in Text 1 argues that books in a house are irrelevant to reading.'
        },
        tip:'When a question asks what one author would say about the other’s EVIDENCE, find the sentence where that author says why her OWN evidence is good. The standard she states there is the one she will apply to everything else.'
      },
      {
        id:'CXT-05', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections',
        passage:'<b>Text 1</b><br>Adapted from a paper by Sunniva Roald.<br>Marked cleaner wrasse scraped their throats on the tank floor only when a mirror was present, and only when the mark sat where the fish could not see it directly. The order of behavior matched the order a chimpanzee runs through: aggression toward the reflection, then long stretches of unusual posturing in front of it, then contingency checks, then the scraping. If that sequence licenses a conclusion of self-recognition in an ape, consistency requires that it license the same conclusion in a fish.<br><br><b>Text 2</b><br>Adapted from a response by Genadij Hulse.<br>Roald’s fish do what she reports; I have gone through the footage frame by frame. My question is what passing the mark test demands. In an ape the inference runs from the mark to a represented self, because nothing simpler is on offer. A cleaner wrasse, though, earns its living reading blemishes on the bodies of other fish and removing them. For that animal a blemish in a reflection is not a philosophical puzzle but the stimulus its entire trade is built around. Same behavior, shorter route.',
        stem:'Based on the texts, how would Hulse (Text 2) most likely respond to Roald’s argument that consistency requires accepting the mark test for wrasse?',
        choices:{
          A:'By arguing that a shorter route to the same behavior is open to a fish that reads blemishes for a living.',
          B:'By denying that the marked fish scraped more often when a mirror was present in the tank.',
          C:'By accepting that a fish reacting to a mark it cannot see must represent its own body somehow.',
          D:'By concluding that the mark test should be given up for apes as well as for fish, since neither case is secure.'
        },
        correct:'A',
        expCorrect:'Hulse grants the behavior outright — “Roald’s fish do what she reports”. His answer is that a consistency argument holds only if both species face the same explanatory options, and they do not: an ape gets the represented self because “nothing simpler is on offer”, while a cleaner wrasse has spent its life responding to blemishes on bodies. “Same behavior, shorter route” is the whole response in four words.',
        expWrong:{
          B:'He says the opposite in his first sentence. Denying the behavior would make the rest of Text 2 pointless; his argument needs the observation to be solid and only the inference to be loose.',
          C:'The reverse of his position. A represented self is exactly the conclusion he withholds, and his passage hands the fish a cheaper way of reaching the mark than representing its own body.',
          D:'The right idea pushed to an absolute. Hulse leaves the ape case standing — for an ape “nothing simpler is on offer” — and objects only to exporting the test to an animal that has a simpler route available.'
        },
        tip:'A parity argument (“if you accept it there, accept it here”) is answered by breaking the parity, not by denying the finding. Look for the sentence where Text 2 says why the two cases are not alike.'
      },
      {
        id:'CXT-06', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections',
        passage:'<b>Text 1</b><br>Adapted from a report by Ilse Trenkamp.<br>Ninety years of suppression left the Carrow Range carrying four times the stem density it carried in 1900, and the fires it now produces are the kind that kill mature pine outright rather than clearing the floor beneath it. Prescribed burning restores the older structure. On the twelve parcels we treated between 2019 and 2022, the crown-fire risk index fell by more than half within three seasons, and the fall was steepest on the parcels that had gone longest without fire.<br><br><b>Text 2</b><br>Adapted from a response by Ramiro Duquesne.<br>I have no quarrel with Trenkamp’s index. On treated parcels it falls, and it falls for the reason she gives. My hesitation is with the word restores. The structure of 1900 was held in place by fires set every few years by people who lived in the range and who were removed from it in 1908. A crew arriving on a ten-year rotation in spring is not that regime, and the shrub layer that returns between visits is not the layer that returned under it. Lower risk, different forest.',
        stem:'Which choice best describes a difference in how the two texts present prescribed burning on the Carrow Range?',
        choices:{
          A:'Text 1 presents it as lowering the crown-fire risk index, while Text 2 presents it as leaving that index untouched.',
          B:'Text 1 presents it as putting the range’s earlier structure back; Text 2 presents it as a different regime that lowers the same risk.',
          C:'Both texts present it as a response to ninety years of fire suppression in the range.',
          D:'Text 1 presents it as a practice with a long history in the range; Text 2 presents it as an invention of recent years.'
        },
        correct:'B',
        expCorrect:'Duquesne accepts the measurement in his first two sentences and then names the single word he will not accept: restores. Text 1 treats the burns as putting the 1900 structure back; Text 2 argues that the 1900 structure depended on a regime — residents burning every few years — that a ten-year crew rotation does not reproduce. “Lower risk, different forest” states the difference in four words.',
        expWrong:{
          A:'It denies what Text 2 concedes in its opening line: “On treated parcels it falls, and it falls for the reason she gives.” The index is the one thing the two authors are not arguing about.',
          C:'True of both texts, and therefore not a difference between them. Each author begins from the same ninety years of suppression; they part over what the burning now accomplishes, not over what created the problem.',
          D:'It swaps the two texts. The long history of burning in the range is supplied by Text 2 — fires set every few years until 1908 — while Text 1 is the text that speaks only of parcels treated in the last few seasons.'
        },
        tip:'When one author quotes a single word from the other (“restores”, “proves”, “cause”), the disagreement lives inside that word. Answer from what the word claims, not from the data both authors accept.'
      },
      {
        id:'CXT-07', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections',
        passage:'<b>Text 1</b><br>Adapted from a study by Harriet Ostlund.<br>Families issued a housing voucher along with two hours of search counseling moved to neighborhoods whose poverty rates were nine points lower than the neighborhoods chosen by families issued the voucher alone. The counseling is inexpensive and the effect on where a family lands is large. Per dollar spent, attaching counseling to every voucher would do more for the later earnings of the children in these households than any affordable enlargement of the voucher itself.<br><br><b>Text 2</b><br>Adapted from a response by Nkechi Aldarone.<br>The nine-point gap is in my data as well, and I do not think it is noise. But the counseled families in that first year moved into a fixed stock of units. When the same counseling was offered across the borough the following year, the gap narrowed to three points and asking rents on the receiving blocks rose. A hundred families searching with better information are not competing with one another; ten thousand are. The effect is real at the scale it was measured, and unknown at any other.',
        stem:'Both authors would most likely agree with which statement?',
        choices:{
          A:'Attaching counseling to every voucher would raise children’s later earnings more per dollar than a larger voucher would.',
          B:'The advantage that counseling produces shrinks as the number of families using it grows.',
          C:'Counseled families moved to lower-poverty neighborhoods than families given a voucher and nothing else.',
          D:'Search counseling makes little difference to where a family holding a voucher finally settles.'
        },
        correct:'C',
        expCorrect:'The agreement is the measured gap and nothing past it. Ostlund reports nine points; Aldarone answers that “the nine-point gap is in my data as well, and I do not think it is noise”. Every other sentence in Text 2 is about what happens when the program grows — which is exactly where Text 1’s recommendation lives.',
        expWrong:{
          A:'Text 1’s recommendation, quoted almost word for word. It is the sentence Aldarone spends all of Text 2 suspending: his borough-wide year is an argument that the per-dollar case does not survive scale.',
          B:'Text 2 alone. Ostlund reports one year at one scale and draws a policy conclusion from it; she has no view on what the gap does as more families use the counseling, and nothing in Text 1 anticipates a narrowing.',
          D:'The right idea pushed to an absolute. Aldarone opens by calling the gap real and not noise; his claim is that its size at a larger scale is unknown, not that counseling barely matters.'
        },
        tip:'For “both would agree”, ask what each author would still assert with the other standing in the room. The finding survives that test; the recommendation built on the finding almost never does.'
      },
      {
        id:'CXT-08', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections',
        passage:'<b>Text 1</b><br>Adapted from a paper by Ingrid Chalfont.<br>Across nine switching tasks, lifelong bilinguals in our sample moved between rule sets faster than monolinguals matched for age, schooling and nonverbal reasoning, and the gap was widest among participants over sixty-five. A laboratory switch cost is the cleanest window we have onto the control system, and it is clean for a specific reason: the task is stripped of the content a person happens to know. Nobody brings expertise to an arbitrary rule about colored shapes.<br><br><b>Text 2</b><br>Adapted from a response by Teodor Vask.<br>The switch-cost advantage is in the published record, Chalfont’s study included, and I am not contesting it. Also in the record, and cited far less often, is that the advantage does not surface when the same people are followed through ordinary days. Over two weeks of experience sampling, our bilingual and monolingual participants reported interruptions, lost threads and recovered tasks at indistinguishable rates. A control system that appears on a laptop and nowhere else is a control system worth doubting.',
        stem:'What would Chalfont (Text 1) most likely say about the evidence Vask relies on in Text 2?',
        choices:{
          A:'That a control system that shows itself only in the laboratory is not a control system worth positing.',
          B:'That his participants were not matched to hers for age, schooling and nonverbal reasoning.',
          C:'That experience sampling cannot measure anything at all about a person’s attention.',
          D:'That day-to-day reports restore the personal content her task strips out.'
        },
        correct:'D',
        expCorrect:'Text 1 states its own criterion in the middle: the switch task is clean “for a specific reason”, namely that it is “stripped of the content a person happens to know”. Experience sampling is the opposite instrument — it records whatever a person’s day happened to contain. Applying the standard she has already declared, Chalfont would call those reports noisier rather than contrary.',
        expWrong:{
          A:'This is Vask’s closing line, reassigned to the author he wrote it against. A choice that repeats Text 2 cannot be Text 1’s answer to Text 2, and this one concedes the very point Text 1’s middle sentences exist to block.',
          B:'It borrows Text 1’s vocabulary — matching for age, schooling and reasoning — and turns it into an objection the texts do not support. Vask followed “the same people”, so matching is not what his design lacks.',
          C:'The right idea pushed to an absolute. Chalfont argues that her task isolates control by removing personal content; that is a claim about which instrument is cleaner, not a claim that lived days carry no information about attention.'
        },
        tip:'Each author usually explains in one sentence why his or her own evidence deserves trust. That sentence doubles as a prediction: whatever it praises, the author demands elsewhere, and whatever it rules out, the author calls a weakness.'
      },
      {
        id:'CXT-09', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
        skill:'Cross-Text Connections',
        passage:'<b>Text 1</b><br>Adapted from a paper by Marguerite Osei.<br>Students who took notes by hand during an unfamiliar recorded lecture answered more conceptual questions correctly a week later than students who typed, although the two groups performed alike on questions of plain fact. The typists wrote far more words, and a larger share of those words matched the lecturer verbatim. Writing by hand is slower than typing, and being unable to keep up forces a student to decide, sentence by sentence, what is worth keeping.<br><br><b>Text 2</b><br>Adapted from a response by Lev Okonkwo.<br>Osei’s result replicates in my own classes, and her account of it may well be the right one. It is not the only account the data allow. Handwriting also produced notes that were much shorter, and a short set of notes is a set a student will actually reread. When we held review time equal and required the typists to cut their notes to two hundred words before the test, the difference between the groups closed. The bottleneck may sit at review rather than at the moment of writing.',
        stem:'Based on the texts, how would Okonkwo (Text 2) most likely respond to Osei’s explanation that slowness forces students to choose what matters?',
        choices:{
          A:'By granting that it may be right while offering review behavior as an explanation that fits the same result.',
          B:'By pointing out that the students who typed produced far more words, and more verbatim ones, than the students who wrote.',
          C:'By denying that handwritten notes led to better conceptual answers a week after the lecture.',
          D:'By arguing that the speed at which a student writes has no bearing on what that student learns.'
        },
        correct:'A',
        expCorrect:'Okonkwo agrees twice and competes once. He grants the result (“replicates in my own classes”) and grants that her explanation “may well be the right one”, then supplies a rival that fits the same data: shorter notes get reread, and when he forced the typists to cut theirs, “the difference between the groups closed”. That is a competing mechanism, not a refutation.',
        expWrong:{
          B:'True according to Text 1, and stated in Text 1’s own terms. Okonkwo does not dispute the word counts, but repeating a finding both authors accept is not a response to the explanation Osei builds on it.',
          C:'He reports the opposite in his first sentence: the result replicates in his classes. Text 2 is an argument about why the effect happens, and it needs the effect to be real.',
          D:'The right idea pushed to an absolute. “Her account of it may well be the right one” concedes that slowness might matter; his claim is that the data do not yet single out that cause.'
        },
        tip:'A rival explanation is not a denial. When Text 2 says the first author “may be right” and then describes a second mechanism, the answer keeps the finding and adds a competing cause.'
      },
      {
        id:'CXT-10', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Cross-Text Connections',
        passage:'<b>Text 1</b><br>Adapted from a study by Cordelia Mbaye.<br>Towns that acquired a press before 1520 adopted the new confession at roughly twice the rate of towns that did not, and the gap survives controls for population, university presence, trade volume and distance from Wittenberg. A press did more than copy an argument faster. It made an argument raised in one town audible in a hundred others within a season, and a movement that can be heard at that distance is a different object from one that cannot.<br><br><b>Text 2</b><br>Adapted from a response by Jonas Feldkirch.<br>Mbaye’s correlation survives every control I would have thought to ask for, and I accept it as a fact about the record. Where we part is the direction of the arrow. A press in 1515 was a business with a payroll, and printers put their presses where cheap religious print already sold: towns with devotional guilds, a preaching order, a literate artisan class. The appetite may have drawn the press rather than the press created the appetite. Her table is equally consistent with both stories and contains nothing that separates them.',
        stem:'Which choice best describes a difference in how the two texts present the relationship between presses and religious change?',
        choices:{
          A:'Text 1 presents the correlation as surviving its controls; Text 2 presents it as an artifact of those controls.',
          B:'Text 1 presents the press as a cause of the change; Text 2 presents the same figures as equally consistent with the reverse.',
          C:'Both texts present the town, rather than the individual reader, as the unit being compared.',
          D:'Text 1 presents the press as driving the change; Text 2 presents it as having had no effect on the change at all.'
        },
        correct:'B',
        expCorrect:'Feldkirch accepts the correlation and the controls — “I accept it as a fact about the record” — and objects only to the direction. Text 1 reads the gap as the press producing the change; Text 2 argues that printers followed a market that already existed, so the same table fits an arrow pointing the other way. The difference is causal direction, not data.',
        expWrong:{
          A:'It borrows Text 1’s list of controls and then invents a complaint Text 2 disclaims in its opening clause. The correlation “survives every control I would have thought to ask for”: the controls are the part Feldkirch is not fighting.',
          C:'True of both texts, so it cannot be a difference between them. Both authors reason about towns — which had a press, what sold in them — and that shared unit is exactly why one table can be read two ways.',
          D:'A real disagreement pushed into a total one. “Equally consistent with both stories” leaves the press standing as a possible cause; Feldkirch says the table cannot tell which way the arrow runs, not that it runs nowhere.'
        },
        tip:'When Text 2 accepts the numbers and questions the arrow, the difference is the direction of cause. Reject any choice that turns “we cannot tell which caused which” into “it caused nothing”.'
      },
      {
        id:'CXT-11', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections',
        passage:'<b>Text 1</b><br>Adapted from a report by Aneta Kirilow.<br>In the four years since beavers returned to the Wend catchment, peak flows at the lowest gauge have fallen by eighteen percent and the late-summer minimum has risen for the first time since records began there in 1961. The mechanism is not mysterious: dams hold water in the headwaters through the storm and let it go slowly afterward. Where a council is contemplating forty million pounds of concrete, the cheapest engineer available is the one that maintains itself.<br><br><b>Text 2</b><br>Adapted from a response by Hugo Brannel.<br>Kirilow’s gauge readings are right, and the mechanism she describes is the mechanism. What a single gauge cannot do is separate the beavers from the weather they arrived in. Those four years brought the four wettest springs and the mildest summers in the local record, and two neighboring catchments with no beavers in them moved in the same direction over the same period, by a smaller but real amount. My guess is that the beavers are doing most of this work. I would want a decade before putting a number on it.',
        stem:'Both authors would most likely agree with which statement?',
        choices:{
          A:'The eighteen-percent fall in peak flows at the lowest gauge is the work of the beavers.',
          B:'Catchments upstream without beavers showed no movement in peak flows over the same four years.',
          C:'Dams in the headwaters hold water back and release it more slowly.',
          D:'Four years of gauge readings can establish nothing at all about how a catchment behaves.'
        },
        correct:'C',
        expCorrect:'The mechanism is the common ground, and Brannel says so outright: “the mechanism she describes is the mechanism.” What he withholds is the size of the effect, not the physics of it, so a statement about how the dams behave is the one thing both authors will sign.',
        expWrong:{
          A:'Text 1’s claim, and the one Text 2 exists to suspend. Brannel grants the reading and questions the attribution — four unusually wet springs, and beaverless catchments moving the same way — so he will not assign all eighteen points to the animals.',
          B:'It reverses what Text 2 actually reports. The neighboring catchments moved “in the same direction over the same period, by a smaller but real amount”, and that movement is the evidence Brannel builds his caution on.',
          D:'The right idea pushed to an absolute. Brannel calls the readings right and guesses that beavers are doing most of the work; asking for a decade is a limit on precision, not a dismissal of the data.'
        },
        tip:'Split each text into three parts — the finding, the mechanism, and the size of the effect. Authors who fight over how much of an effect is real very often agree completely about how it works.'
      },
      {
        id:'CXT-12', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Cross-Text Connections',
        passage:'<b>Text 1</b><br>Adapted from a paper by Sigrun Delacroix.<br>In a cohort of forty-one thousand adults followed for nineteen years, those in the highest fifth of whole-grain intake developed diabetes at about three-quarters the rate of those in the lowest fifth, after adjustment for body mass, activity and total energy. Diet acts across decades, and a cohort is the only design that watches a habit for that long. Whatever a short experiment records, it is not watching the process that produces the disease.<br><br><b>Text 2</b><br>Adapted from a response by Marek Ohara.<br>I do not doubt Delacroix’s association; it turns up in every large cohort, on several continents. Association is where the question begins. In a twelve-week randomized trial we replaced refined grain with whole grain at matched total energy in three hundred and twenty adults, and saw no movement in fasting glucose or in insulin sensitivity. Either the benefit takes longer than twelve weeks to show itself, or the people who choose whole grains differ from the people who do not in ways no questionnaire captures.',
        stem:'What would Delacroix (Text 1) most likely say about the evidence Ohara relies on in Text 2?',
        choices:{
          A:'That the people who eat whole grains may differ from those who do not in ways a questionnaire never records.',
          B:'That a randomized trial can establish nothing about the link between diet and disease.',
          C:'That his sample of three hundred and twenty adults is too small to show a change in incident diabetes.',
          D:'That twelve weeks is far too short a window to register a process she describes as unfolding over decades.'
        },
        correct:'D',
        expCorrect:'Text 1 closes by declaring its standard: “Diet acts across decades… Whatever a short experiment records, it is not watching the process that produces the disease.” Ohara’s trial ran twelve weeks. Applying the standard she has already written down, Delacroix would say the trial watched the wrong stretch of time — and Ohara himself lists that possibility first.',
        expWrong:{
          A:'This is Ohara’s second alternative, handed to the author it was aimed at. It is the branch that would undercut Text 1, so it is the last thing Delacroix would offer, and a choice that repeats Text 2 is never Text 1’s reply to it.',
          B:'The right idea pushed to an absolute. Delacroix objects to what a SHORT experiment can see, not to randomization; her sentence attacks the length, and a twenty-year randomized trial would satisfy the standard she states.',
          C:'It sounds like a sample-size objection but aims at the wrong outcome. Ohara’s trial measured fasting glucose and insulin sensitivity, not incident diabetes, and nothing in Text 1 gives Delacroix grounds to call his sample too small for those measures.'
        },
        tip:'An author’s defense of her own method is her objection to everyone else’s. Read the sentence where Text 1 says what makes its design right, then turn that sentence onto Text 2 — that is almost always the answer.'
      }
    ]
  });
})();
