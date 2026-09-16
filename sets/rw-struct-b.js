/* SAT Studio question set — Reading & Writing: Text Structure and Purpose (TSB-01 a TSB-34) */
/* Hermano de entrada de rw-struct-a: mismos tres formatos oficiales (estructura global,
   proposito principal y funcion de la oracion subrayada), pero con textos donde los
   movimientos son NOMBRABLES sin ambiguedad. Es la rampa que al banco le faltaba.
   Los distractores siguen el mismo patron fijo: uno invierte el orden de los movimientos,
   otro le atribuye al texto una conclusion que no saca, y otro describe bien solo la
   primera mitad. En las de funcion, la trampa de siempre es la opcion que dice QUE DICE
   la oracion subrayada en vez de QUE HACE. */
window.SAT_SETS.push({
  id: 'rw-struct-b',
  title: 'Text Structure and Purpose — On-Ramp',
  section: 'rw',
  level: 'Media',
  description: 'Thirty-four entry and mid-level passages in the three official formats: overall structure, main purpose, and the function of an underlined sentence. Science, history, art criticism, social science, and literature.',
  minutes: 40,
  questions: [
    {
      id:'TSB-01', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Text Structure and Purpose — overall structure',
      passage:"A leafcutter colony does not eat the leaves it carries. The fragments are chewed into a paste and fed to a fungus the ants farm in dark chambers under the nest, and the fungus is what feeds the colony. When a batch of leaves sickens the garden, foragers stop visiting that tree within a day, though the leaves never harmed the ants themselves. Biologists now describe colony and fungus as one system, in which the crop has as much say as the farmer in what gets cut.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It reports that foragers abandon a tree within a day when a batch of its leaves sickens the fungus garden.',
        B:'It describes a farming arrangement and then argues that the ants would do better to eat the leaves themselves.',
        C:'It corrects a likely assumption, explains the arrangement that replaces it, and gives the framing biologists use now.',
        D:'It presents the framing biologists use today and then explains why the fungus garden went unnoticed for so long.'
      },
      correct:'C',
      expCorrect:'Three movements, in this order: the opening correction (the colony does not eat what it carries), the arrangement that replaces it (the ants farm a fungus, the fungus feeds them, and a tree that sickens the garden is dropped within a day), and the framing biologists use now, in which colony and fungus are one system. Option C names all three in that order.',
      expWrong:{
        A:'It says what the text SAYS instead of what it DOES. The one-day abandonment is reported accurately, but it is a single step inside the arrangement: the opening correction and the closing framing are both missing.',
        B:'It describes the first half and then supplies a conclusion the text never draws. Nothing here weighs a diet of leaves against a diet of fungus, and the ants are never said to be losing out.',
        D:'It runs the text backwards. The framing biologists use is where the passage arrives, not where it begins, and the garden is treated as well understood rather than overlooked.'
      },
      tip:'For STRUCTURE, follow the whole arc, not the most concrete detail. A text that opens by denying what the reader assumed will spend the rest of its length replacing that assumption.'
    },
    {
      id:'TSB-02', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Text Structure and Purpose — overall structure',
      passage:"Before clocks were common, the bell of a market town did the work of one. In Lauterbek the tower rang at dawn, at the opening of the stalls, and at the close of trade, and the town paid a man to keep it honest against a sundial. Complaints survive in the council minutes: bakers wanted the first bell earlier, carters wanted the last one later. A schedule that looks in the archive like a matter of piety was argued over by everyone whose working day it shaped.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It describes a civic practice, presents records of disputes over it, and reinterprets what the practice was about.',
        B:'It reports that the bell of Lauterbek rang at dawn, at the opening of the stalls, and at the close of trade.',
        C:'It argues that market towns adopted mechanical clocks because the bell schedule had become impossible to settle.',
        D:'It presents a dispute between bakers and carters and then explains how a sundial was used to settle it.'
      },
      correct:'A',
      expCorrect:'Three movements: the practice (a bell that set the working day), the evidence of conflict over it (bakers wanting the first bell earlier, carters the last one later), and the reinterpretation in the final line, where a schedule that reads as piety turns out to be a negotiation. Option A tracks all three in order.',
      expWrong:{
        B:'It says what the text SAYS instead of what it DOES. Those three ringings are one detail inside the first movement; the complaints and the reinterpretation are both left out.',
        C:'It supplies a conclusion the text never draws. Mechanical clocks are mentioned only as what the town did not have, and the passage never claims the disputes drove anyone to buy one.',
        D:'It reverses the order and invents a resolution. The dispute comes second, not first, and the sundial appears earlier, as the standard the bellringer was checked against, not as a settlement.'
      },
      tip:'Watch the last sentence in a structure question. When it recasts what an earlier thing really was, the reinterpretation is a movement and belongs in the answer.'
    },
    {
      id:'TSB-03', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Text Structure and Purpose — overall structure',
      passage:"Jun Aparicio has mixed the same celadon glaze for twenty-two years. Visitors expect the monotony to show, and at first it does: shelf after shelf of pale green bowls. Then the differences arrive. A bowl fired near the door of the kiln comes out almost white; one from the back carries a green so deep it reads as gray. Aparicio does not choose those results so much as arrange the conditions for them, and the sameness of the glaze is what makes the variation visible at all.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It reports that a bowl fired near the door of the kiln comes out paler than one fired at the back.',
        B:'It sets up an expectation, overturns it, and explains why the sameness matters.',
        C:"It describes an artist's single glaze and then argues that such restriction limits what a potter can achieve.",
        D:'It explains why variation is prized in celadon and then presents a potter who has resisted it for many years.'
      },
      correct:'B',
      expCorrect:'Three movements in eight lines: the expectation (visitors expect monotony, and at first they get it), the turn (then the differences arrive, white at the door and near-gray at the back), and the explanation of why one glaze is the condition for seeing them. Option B names the three moves without naming the subject, which is exactly what a structure answer does.',
      expWrong:{
        A:'It says what the text SAYS instead of what it DOES. That contrast is the evidence inside the turn; the expectation it overturns and the closing explanation are both missing.',
        C:'It describes the first half and then reverses the point. The passage treats the single glaze as what makes variation legible, so calling it a limit is the opposite of the last sentence.',
        D:'It runs the text backwards and changes the subject. Celadon tradition is never discussed, and Aparicio is shown producing variation, not resisting it.'
      },
      tip:'A short answer is not a wrong answer. If it names every movement in order, it wins over a longer option that names the subject in more detail but gets a move wrong.'
    },
    {
      id:'TSB-04', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Text Structure and Purpose — overall structure',
      passage:"When the county library stopped charging late fees, the board expected books to come back more slowly. The opposite happened. Items overdue by months arrived in the first weeks, many from cardholders who had stopped using the library rather than face a balance they could not pay. Circulation rose by a fifth over the year, and the branch that had collected the most in fines gained the most readers. The fee had been keeping borrowers away, not keeping books moving.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It reports that circulation rose by a fifth in the year after the county library stopped charging late fees.',
        B:'It describes a change in library policy and then recommends that other counties adopt the same rule.',
        C:"It explains why late fees keep borrowers away and then describes the board's decision to introduce them.",
        D:'It states an expectation, reports the result that contradicted it, and names what the fee had really been doing.'
      },
      correct:'D',
      expCorrect:'The text opens with what the board expected (slower returns), reports the opposite result (long-overdue items coming back, circulation up a fifth, the biggest fine collector gaining the most readers), and closes by renaming the fee as a barrier to borrowers rather than a spur to returns. Option D follows that order exactly.',
      expWrong:{
        A:'It says what the text SAYS instead of what it DOES. That figure is one piece of the second movement; the expectation and the closing reinterpretation are both missing.',
        B:'It stops at the policy and then adds a recommendation the text never makes. The passage reports one county and explains a result; it never tells other counties what to do.',
        C:'It runs the text backwards. The fee was already in place and then removed, so there is no decision to introduce it, and the explanation of why fees drive borrowers away is the conclusion, not the opening.'
      },
      tip:'Expectation, then result, then what the result means. When a text says "the opposite happened" in line two, that three-part shape is almost always the structure.'
    },
    {
      id:'TSB-05', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Text Structure and Purpose — main purpose',
      passage:"Every March my father repainted the skiff, though the hull was sound and no one but us ever saw it. He mixed the blue himself from two cans that never quite matched, so each spring the boat came out a slightly different color than the year before. I used to think this was vanity. Now that the skiff sits in my own yard and I have bought my own two cans, I understand that the painting was never about the paint. It was about opening the season.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:"To show how the narrator's understanding of a family ritual changed once she took it up herself.",
        B:'To explain how a wooden skiff has to be maintained if it is to stay sound from one season to the next.',
        C:'To argue that the small habits of a household matter more to a family than its larger decisions do.',
        D:'To describe the trouble the narrator had as a child in telling the two cans of blue paint apart.'
      },
      correct:'A',
      expCorrect:'The essay moves from "I used to think this was vanity" to "Now that the skiff sits in my own yard... I understand". The paint is the occasion; the change in the narrator is the point, and the last line names what the ritual was really for.',
      expWrong:{
        B:'It mistakes the object for the subject. The text says the hull was already sound, so maintenance is precisely what the repainting was not about.',
        C:'It inflates a private discovery into a general rule. The narrator reports what one habit came to mean to her; she never compares household habits with larger family decisions.',
        D:'It turns a passing detail into the topic. The mismatched cans explain why the color shifted each spring; the narrator never describes struggling to tell them apart.'
      },
      tip:'For PURPOSE in a personal essay, find the sentence where the narrator says what she used to think and what she thinks now. The purpose lives in that gap.'
    },
    {
      id:'TSB-06', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Text Structure and Purpose — main purpose',
      passage:"A honeybee colony does not heat its hive; it heats itself. Through the winter the workers form a dense ball around the queen and shiver their flight muscles without moving their wings, and bees on the chilled outer layer rotate inward as those at the center warm through. The temperature at the core holds near thirty-five degrees Celsius even when the air outside is far below freezing. What looks from outside like a single organism keeping warm is thousands of small engines taking turns.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To report the temperature that the core of a hive holds when the air outside is below freezing.',
        B:'To argue that a bee colony ought to be classified as a single organism rather than as many.',
        C:'To describe the damage a long freeze can do to a colony that has too few workers to cluster.',
        D:'To explain how a colony keeps its center warm through a freezing winter.'
      },
      correct:'D',
      expCorrect:'Every sentence after the first serves the mechanism: the ball around the queen, the shivering flight muscles, the rotation of chilled bees inward, and the core temperature that results. The text exists to explain how the warmth is produced and maintained.',
      expWrong:{
        A:'It takes one measurement as the goal. The thirty-five degrees is the result the mechanism produces; a purpose answer has to cover why the mechanism is being described at all.',
        B:'It turns a closing figure of speech into a claim. The last line says the colony only looks like one organism and is in fact thousands of bees taking turns, which is the reverse of this option.',
        C:'It describes a text that was never written. Weak colonies and freeze damage do not appear; the passage is about a cluster that works, not one that fails.'
      },
      tip:'When a passage is one mechanism from start to finish, the purpose is to explain that mechanism. Do not trade it for the single number the mechanism happens to produce.'
    },
    {
      id:'TSB-07', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Text Structure and Purpose — main purpose',
      passage:"Fire insurance surveyors of the 1890s walked whole cities block by block, coloring each building by what it was made of and noting where a stable stood next to a lumber yard. They were pricing risk, not writing history. Yet their sheets are now the closest thing many neighborhoods have to a portrait of themselves before demolition: the corner bakery, the width of an alley, the shed behind the church. What was drawn to set a premium is read today for everything the premium ignored.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To describe the method surveyors used to price the risk of fire on a city block.',
        B:'To argue that the surveyors of the 1890s should have recorded more than construction materials.',
        C:'To show that records made for a commercial purpose are valuable now for an entirely different one.',
        D:'To explain why so many of the neighborhoods drawn on the sheets were later demolished.'
      },
      correct:'C',
      expCorrect:'The passage sets up the contrast in its second line ("pricing risk, not writing history") and spends the rest of its length on the second life of the same sheets. The closing sentence states the purpose outright: what was drawn to set a premium is now read for what the premium ignored.',
      expWrong:{
        A:'It stops at the setup. The method is described in the first two sentences so that the reversal can land; a purpose answer that ends there misses the half the text was written for.',
        B:'It supplies a criticism the text never makes. The passage is grateful for what the sheets happen to preserve, not disappointed by what the surveyors chose to leave out.',
        D:'It borrows a word from the passage and builds a different text around it. Demolition is mentioned to explain why the sheets matter now; why it happened is never taken up.'
      },
      tip:'A purpose answer has to cover the turn. If the text contains a "yet" or a "but" in the middle, the answer that describes only what came before it is incomplete.'
    },
    {
      id:'TSB-08', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Text Structure and Purpose — main purpose',
      passage:"Riders asked to name what would get them on the bus more often rarely mention price first. In a survey of four suburban routes, the answer that came back again and again was frequency: not a cheaper fare but a bus that comes often enough that no one has to plan around it. On the one route where service was doubled during the study, ridership grew fastest among people who had previously driven every day. Waiting, it turns out, costs more than the fare does.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To report that ridership on one suburban route grew fastest among people who had driven daily.',
        B:'To present evidence that frequency of service drives ridership more than the price of a fare does.',
        C:'To recommend that suburban transit agencies double the service on every route they operate.',
        D:'To explain why the riders surveyed on the four suburban routes refused to pay a higher fare.'
      },
      correct:'B',
      expCorrect:'Two pieces of evidence, one claim. The survey says frequency rather than price, the doubled route shows former drivers arriving, and the last line states the point: waiting costs more than the fare. The text exists to support that comparison.',
      expWrong:{
        A:'It takes one result as the whole errand. That finding is the second piece of evidence; on its own it does not say what the evidence is for.',
        C:'It converts a finding into a policy the text never proposes. One route was doubled as part of a study, and the passage never tells agencies what to do everywhere else.',
        D:'It invents a refusal. Riders were asked what would get them riding more often, not whether they would pay more, and the text says only that price is rarely their first answer.'
      },
      tip:'Distinguish a finding from a recommendation. Unless the text tells someone to act, "to recommend" is the wrong verb for its purpose.'
    },
    {
      id:'TSB-09', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Text Structure and Purpose — function of a sentence',
      passage:"A plasmodial slime mold has no brain and no nerves, and it still finds the shortest path through a maze to a flake of oatmeal. <u>The trick is that it does not find the path so much as forget the others.</u> The organism first spreads into every corridor at once; where a branch leads nowhere the strand thins and is reabsorbed, and where a branch reaches food the strand thickens. What remains after a few hours is the solution, and nothing was ever chosen.",
      stem:'Which choice best describes the function of the underlined sentence in the text as a whole?',
      choices:{
        A:'It reframes what the organism does, setting up the mechanism the rest of the text describes.',
        B:'It states that the mold forgets the corridors leading nowhere instead of finding the one that leads to food.',
        C:'It raises an objection to the maze experiment that the following sentences go on to answer.',
        D:'It closes the text by naming what the experiment proved about organisms that have no nerves.'
      },
      correct:'A',
      expCorrect:'The first sentence poses a puzzle: no brain, yet the shortest path. The underlined line answers it by changing the verb from finding to forgetting, and the three sentences after it spell out exactly that process (spread everywhere, thin where there is nothing, thicken where there is food). Its job is to reframe and set up.',
      expWrong:{
        B:'It says what the sentence SAYS, in other words. A function answer has to name the work the sentence does for the passage, and this one does the work of turning the puzzle into a claim the rest of the text can unpack.',
        C:'No objection is raised. The sentence does not question the maze result; it accepts the result and proposes a different way of describing how it comes about.',
        D:'It puts the sentence in the wrong place. This is the second line of five, and the closing sentence is a different one, which draws the conclusion that nothing was ever chosen.'
      },
      tip:'On FUNCTION, ask what the passage would lose if the sentence were deleted. If the sentences after it suddenly explain something nobody introduced, the sentence was a setup.'
    },
    {
      id:'TSB-10', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Text Structure and Purpose — function of a sentence',
      passage:"The Vances moved out in October and the house sat empty all winter. In April, Mr. Okafor began mowing their lawn along with his own, in the same direction, so that the two yards read as one long stripe from the road. <u>No one asked him to, and he never mentioned it.</u> By June the grass at the Vance house was the only thing on the block that looked cared for, and the rest of us had stopped noticing where one property ended and the other began.",
      stem:'Which choice best describes the function of the underlined sentence in the text as a whole?',
      choices:{
        A:'It reports that Mr. Okafor received no request to mow the lawn and never spoke about doing it.',
        B:'It explains why the neighbors on the block eventually stopped noticing the two properties.',
        C:'It marks the act as unasked for and unannounced, which is what gives the gesture its character.',
        D:'It hints that Mr. Okafor hoped the Vances would come back and find the yard in good order.'
      },
      correct:'C',
      expCorrect:'Strip the sentence out and the mowing becomes a chore someone might have been asked to do. With it, the act is unrequested and unspoken, and that is what the closing image depends on: a stripe nobody claimed credit for, until the two yards stopped looking like two.',
      expWrong:{
        A:"That is the sentence restated, not its function. The question is what the line does to the reader's sense of the act, and the answer is that it removes every motive of obligation or display.",
        B:'It assigns the wrong cause. The neighbors stop noticing because both lawns are cut the same way for months, not because no one asked Mr. Okafor to start.',
        D:'It invents a motive the text refuses to give. The passage says only that he never mentioned it; what he hoped for is exactly what is withheld.'
      },
      tip:'A short sentence dropped into a narrative usually rules something out. Ask what reading it eliminates, and you have its function.'
    },
    {
      id:'TSB-11', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Text Structure and Purpose — function of a sentence',
      passage:"Roman milestones are usually read for their distances, but most of the stone is taken up by the name of the emperor who paid for the repair. <u>A milestone was a bill as much as a marker.</u> Along one stretch of road in Hispania, four stones set within thirty years carry four different names, each claiming the same twenty miles of gravel. The distances on them barely change. What changes, every time, is whose generosity the traveler is asked to notice.",
      stem:'Which choice best describes the function of the underlined sentence in the text as a whole?',
      choices:{
        A:'It notes that a milestone records both a distance and the name of the emperor who paid for repairs.',
        B:'It concedes a limitation of milestones before the text goes on to defend their accuracy.',
        C:'It introduces a disagreement among historians that the stones in Hispania were used to settle.',
        D:'It states in compact form the point that the examples following it are chosen to support.'
      },
      correct:'D',
      expCorrect:'The sentence is the claim; the four stones in Hispania are the proof. Four names in thirty years, distances barely moving, credit changing every time. Everything after the underlined line exists to make that one-line claim stick.',
      expWrong:{
        A:'That is a summary of the sentence before it, and of this one, rather than a job. Both halves of the observation are already on the page; the underlined line turns them into a claim worth proving.',
        B:'Nothing is conceded and nothing is defended. The accuracy of the distances is never in doubt in this passage, and the point is that the distances are the least interesting part of the stone.',
        C:'No historians appear, and no dispute is settled. The Hispania stones are evidence for the claim, not a case that scholars had been arguing over.'
      },
      tip:'A short declarative sentence sitting before a run of specifics is a thesis. Its function is to be proved, not to be the proof.'
    },
    {
      id:'TSB-12', type:'mc', domain:'Craft and Structure', difficulty:'Fácil',
      skill:'Text Structure and Purpose — function of a sentence',
      passage:"People who miss a court date are often assumed to be avoiding it. A city that began mailing plain postcards with the date, the room number, and a line about what happens if you do not appear cut its no-show rate by almost a third. <u>The postcards contained no threat that the summons had not already made.</u> What they added was clarity, delivered close enough to the date to be useful, and that was apparently the part that had been missing.",
      stem:'Which choice best describes the function of the underlined sentence in the text as a whole?',
      choices:{
        A:'It states that nothing on the postcard threatened anything the summons had not threatened first.',
        B:'It rules out one explanation for the drop so that the text can name the one it prefers.',
        C:'It suggests that the summons itself ought to be rewritten in the plain style of the postcard.',
        D:'It offers an example of the kind of avoidance described in the opening sentence.'
      },
      correct:'B',
      expCorrect:'Two explanations are available for a no-show rate that fell by a third: fear, or clarity. The underlined sentence removes fear from the table, and the sentence right after it names what is left. Without that line, the final claim about clarity would be an assertion rather than a conclusion.',
      expWrong:{
        A:'That is the sentence in different words. The question asks what it accomplishes, and what it accomplishes is the elimination of the rival explanation the reader is most likely to reach for.',
        C:'No such suggestion is made. The text is interested in why the postcards worked, not in redrafting the summons, and it never says the summons was written badly.',
        D:'It has the sentence pointing backwards at avoidance. The line is about what the postcard contained, and the whole paragraph is built to show that avoidance was the wrong diagnosis.'
      },
      tip:'When a passage offers a result and then a because, look for the sentence that closes the other doors. Ruling out a rival explanation is one of the most common jobs a sentence has.'
    },
    {
      id:'TSB-13', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — overall structure',
      passage:"A cuttlefish matching a checkerboard on the floor of a tank is doing something stranger than it appears. Its skin holds no blue pigment, and the animal is very likely colorblind. The match is assembled instead from layers: sacs of yellow, red, and brown that muscles pull open, a layer that scatters short wavelengths, and a mirror beneath. Recent work suggests the eye is not the only sensor involved, since receptors in the skin itself respond to light. What looks like copying may be closer to touch.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It explains how three layers of pigment and reflective tissue combine to produce a match to the floor of a tank.',
        B:'It reports recent evidence that receptors in the skin of a cuttlefish respond directly to light.',
        C:'It presents a familiar feat, notes two facts that make it puzzling, and then lays out what is known about the mechanism behind it.',
        D:'It argues that cuttlefish must be able to see color after all, since the matches they produce are so precise.'
      },
      correct:'C',
      expCorrect:'Three movements. The feat (an animal matching a checkerboard), the two facts that make it strange (no blue pigment, probably colorblind), and then the mechanism as currently understood, including the skin receptors and the closing reframing of copying as something nearer to touch. Option C is the only one that reaches all three.',
      expWrong:{
        A:'It describes the middle and calls it the whole. The layers are real, but an answer that starts there skips the puzzle that made the layers worth explaining and stops before the recent work.',
        B:'It says what the text SAYS instead of what it DOES. The skin receptors are one late detail, and on their own they do not account for the opening feat or the mechanism described before them.',
        D:'It supplies a conclusion the text refuses. The passage keeps the colorblindness and offers skin receptors as a way around it; it never restores color vision to the animal.'
      },
      tip:'Count the movements before reading the options. Three moves in the text and a choice that names one of them is a losing trade, however accurate that one move is.'
    },
    {
      id:'TSB-14', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — overall structure',
      passage:"The bandleader Cecile Mbarga was criticized for arrangements that sounded half-finished: a horn line stated once, a rhythm section left to hold a bar alone, whole choruses with nothing written at all. Her players describe those gaps differently. Rehearsal tapes catch her cutting material she had already scored, and cutting it only after hearing what the band did with the silence. The thinness critics heard was the result of a decision made twice, once to write the part and once to take it out.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It reports a criticism, presents evidence from the players, and recasts the trait the critics named.',
        B:'It notes that rehearsal tapes show Mbarga cutting material she had already scored for the band.',
        C:'It defends an arrangement style and then concedes that the critics were right about its thinness.',
        D:'It describes the silences in the arrangements and then traces the players who later imitated them.'
      },
      correct:'A',
      expCorrect:'The criticism comes first (arrangements that sounded half-finished), then the counter-evidence from inside the band (rehearsal tapes showing deliberate cuts made after listening), then the recasting: thinness is renamed as a decision made twice. Option A names those three moves in order.',
      expWrong:{
        B:'It says what the text SAYS instead of what it DOES. The tapes are the evidence in the middle movement; by themselves they neither state the criticism nor draw the conclusion.',
        C:"It gets the ending backwards. The final sentence takes the critics' word and redefines it as a choice, which is the opposite of conceding that they were right.",
        D:"It invents the second half. No later musicians appear in the passage, and the silences are traced back to Mbarga's rehearsals, not forward to anyone who copied them."
      },
      tip:'A structure that starts with a criticism usually ends with a verdict on that criticism. Check whether the text rejects it, accepts it, or redefines the word the critics used.'
    },
    {
      id:'TSB-15', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — overall structure',
      passage:"Company histories of the telegraph tend to move from invention to network to profit, with operators appearing only as a cost. The pay books tell a narrower but more useful story. In one district office the share of women at the keys rose from a tenth to more than half in eleven years, and the wage listed beside each name fell as that share rose. The equipment in the room never changed during those years. What changed was who was holding the key, and what the company paid to have it held.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It reports that the share of women at the keys in one district office rose over eleven years.',
        B:'It argues that the telegraph network grew profitable because companies invested in better equipment.',
        C:'It explains why company histories of the telegraph were written before the pay books were found.',
        D:'It contrasts the usual narrative with a narrower record and states what that record shows.'
      },
      correct:'D',
      expCorrect:'Two movements and a conclusion: the standard company history (invention, network, profit, operators as a cost), the pay books offered as a narrower source, and the finding drawn from them, that the wage fell as the workforce changed while the equipment stayed the same. Option D covers the contrast and the payoff.',
      expWrong:{
        A:'It says what the text SAYS instead of what it DOES. That statistic is half of the finding; the standard account it is meant to correct never appears in this option.',
        B:'It states a claim the passage sets aside. Equipment is mentioned precisely because it did not change, which is what isolates the wage drop as a matter of who was hired.',
        C:'It invents a question about publication order. The text uses the pay books to correct the usual history; when either was written is never discussed.'
      },
      tip:'"The usual account says X; this source says Y" is one of the most common structures on the test. The answer has to include both the usual account and what the new source shows.'
    },
    {
      id:'TSB-16', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — overall structure',
      passage:"Firms that knock down interior walls usually say they are buying collaboration. Two companies that tracked badge data before and after the change found the opposite: face-to-face conversation fell by about seventy percent, while messages sent electronically rose. One reading is that removing walls removes any control over who overhears you, and that people who cannot step out of a conversation avoid starting one. The finding does not settle what an office should look like, but it does unsettle the reason usually given for the change.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It reports that electronic messaging rose sharply in two companies after interior walls were removed.',
        B:'It names the reason usually given for a change, reports evidence against it, offers an explanation, and then limits what that evidence settles.',
        C:'It proposes an explanation for a workplace finding and then presents the badge data that first suggested it.',
        D:'It argues from badge data that companies ought to rebuild the interior walls they have removed.'
      },
      correct:'B',
      expCorrect:'Four movements, all present: the stated reason (collaboration), the evidence against it (talk down seventy percent, messaging up), a proposed explanation (no control over who overhears), and the closing limit (the finding unsettles the reason without settling the design question). Option B is the only one that keeps the last movement.',
      expWrong:{
        A:'It says what the text SAYS instead of what it DOES. The rise in messaging is one half of one movement, and it carries none of the framing the passage builds around it.',
        C:'It reverses the order. The badge data come before the explanation, and the passage offers its reading as one possible account of the data rather than as the idea the data confirmed.',
        D:'It converts a careful limit into a recommendation. The final sentence goes out of its way to say the finding does not settle what an office should look like.'
      },
      tip:'When a text ends with "does not settle X, but does unsettle Y", that hedge is a movement. An option that drops it is describing a bolder passage than the one you read.'
    },
    {
      id:'TSB-17', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — overall structure',
      passage:"For eleven years the piano stood in our mother's front room and no one played it. Marisol practiced on it until she was sixteen and then stopped in a single week, without explaining, and I was too young to ask. When the house was sold I expected her to want it. She did not. She asked instead for the metronome, which she keeps on her desk and winds, she says, when she needs to hear something that does not want anything from her.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It introduces an object with a history behind it, sets up an expectation about where it will go, and closes on the object chosen instead.',
        B:'It reports that Marisol stopped practicing at sixteen and never explained her reason.',
        C:'It describes a piano left unplayed and then explains why the mother refused to part with it.',
        D:"It recounts the sale of a family house and then traces the narrator's own attempt to learn the instrument."
      },
      correct:'A',
      expCorrect:'The piano and its eleven silent years come first, the expectation is stated outright ("I expected her to want it"), it is refused in three words, and the passage ends on the metronome and what Marisol says she uses it for. Option A tracks that arc without guessing at motives the text withholds.',
      expWrong:{
        B:'It says what the text SAYS instead of what it DOES. The abrupt stop at sixteen is background for the expectation; the expectation, the refusal, and the metronome are all missing here.',
        C:'It invents a second half. The house is sold and the piano is not kept, so there is no refusal to part with it, and the mother is never given a view of her own.',
        D:'It rebuilds the text around the wrong person. The sale is one clause, and it is Marisol, not the narrator, whose choice the passage follows to the end.'
      },
      tip:'In narrative structure questions, an object that appears in the last line is rarely decoration. Check whether the text set up an expectation that the object answers.'
    },
    {
      id:'TSB-18', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — overall structure',
      passage:"A salt marsh looks like the most fragile thing on a coast, and for a century engineers treated it that way. Marshes do not simply sit and wait for the sea, though. Each tide leaves a film of sediment, and the grasses grow up through it, so the surface rises at roughly the rate the water does. The limit is supply: where rivers are dammed and sediment no longer reaches the coast, the marsh falls behind and drowns. Protecting a marsh means protecting the mud that feeds it.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It reports that each tide leaves a film of sediment through which the marsh grasses then grow.',
        B:'It describes how marshes keep pace with the sea and then concludes that dams pose no threat to them.',
        C:'It challenges a long-held view, explains the process behind it, and names when that process fails.',
        D:'It explains why sediment no longer reaches the coast and then calls for the removal of river dams.'
      },
      correct:'C',
      expCorrect:'Three movements: a century of treating marshes as passive, the process that shows they are not (sediment plus grass growth keeping pace with the water), and the condition under which the process breaks down, namely a dammed river that starves the coast of mud. Option C names all three.',
      expWrong:{
        A:'It says what the text SAYS instead of what it DOES. That is one step inside the process; the view being challenged and the failure condition are both outside it.',
        B:'It reverses the ending. Dams are the whole reason a marsh falls behind and drowns, so the passage treats them as the threat rather than dismissing them.',
        D:'It makes the limitation into the topic and adds a demand the text never issues. Why rivers are dammed is not discussed, and no removal is called for; the closing line asks for the sediment to be protected.'
      },
      tip:'Many science passages run challenge, mechanism, limit. When you see a colon introducing a constraint near the end, that limit is usually the third movement.'
    },
    {
      id:'TSB-19', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — main purpose',
      passage:"Paved roads in many countries are credited to the automobile, but the petitions came earlier and from a different machine. Cycling clubs in the 1890s counted potholes, published maps of which routes were passable, and lobbied county boards that had never received organized pressure about road surfaces before. By the time cars were common, the argument for smooth roads had already been made and largely won. The driver inherited a campaign that a much lighter vehicle had fought.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To describe the methods cycling clubs of the 1890s used to record the condition of rural roads.',
        B:'To correct the usual attribution of a campaign for better roads by showing who actually waged it.',
        C:'To argue that automobiles would not have spread so quickly without the cycling clubs of the 1890s.',
        D:'To explain why county boards had received no organized pressure about road surfaces before then.'
      },
      correct:'B',
      expCorrect:'The first sentence names the usual credit and immediately disputes it, the middle supplies what the cyclists actually did, and the last line delivers the correction in a single image: the driver inherited a campaign someone lighter had already fought. Correcting the attribution is the errand.',
      expWrong:{
        A:'It stops at the evidence. Counting potholes and publishing maps are how the clubs made their case; the reason the text describes them is to reassign credit for the result.',
        C:'It states a stronger claim than the text supports. The passage says the argument was won before cars were common, not that cars depended on the clubs to spread.',
        D:'It turns a subordinate clause into the topic. That the boards had faced no such pressure before is a measure of how novel the lobbying was, not a question the passage sets out to answer.'
      },
      tip:'When a text opens with "is usually credited to" and then says "but", expect the purpose to be a correction. Ask what belief is being adjusted, and by how much.'
    },
    {
      id:'TSB-20', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — main purpose',
      passage:"The manuscripts of Hosanna Byrd are a record of subtraction. Her early drafts carry the kind of ornament her first reviewers praised: inverted syntax, a simile in nearly every line. What the published poems keep is the plainest version of each image, and the pages show her arriving at it late, after four or five more elaborate attempts. Readers who call her style effortless are describing the last stage of a process that the drafts themselves show was anything but.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:"To describe the kind of ornament that Byrd's first reviewers singled out for praise.",
        B:'To argue that a poet ought to keep the plainest version of every image she drafts.',
        C:"To explain why Byrd's manuscripts were preserved rather than discarded after her death.",
        D:'To show that an effortless-seeming plainness was hard-won.'
      },
      correct:'D',
      expCorrect:'The drafts are evidence, and the last sentence says what they are evidence for: the plainness readers call effortless is the final stage of four or five elaborate attempts. The text exists to set that labor against the impression of ease.',
      expWrong:{
        A:'It mistakes the setup for the point. The ornament of the early drafts is what gets subtracted, and the passage mentions it so that the subtraction can be seen.',
        B:'It turns a description of one poet into advice for all of them. Byrd is shown reaching plainness through revision; no rule for other writers is offered.',
        C:'It answers a question the text never raises. Why the manuscripts survived is never discussed, only what reading them reveals.'
      },
      tip:'A brief option can be the right one. If it names the claim the evidence was assembled to support, added length in the others is detail, not accuracy.'
    },
    {
      id:'TSB-21', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — main purpose',
      passage:"Districts that push the first bell later usually defend the change with test scores, and the scores move only a little. The clearer effect shows up elsewhere. In counties that shifted high school start times by an hour, crash rates for drivers aged sixteen to eighteen fell in the following year while rates for older drivers held steady. Attendance rose as well. Judged by the measure districts advertise, the policy looks modest; judged by the measures they do not, it does not.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To suggest that the real effects of a policy show up in measures other than the advertised one.',
        B:'To report that crash rates for young drivers fell in counties that shifted school start times.',
        C:'To argue that test scores are a poor way of judging any decision a school district makes.',
        D:'To explain why attendance rose in the counties that moved the first bell an hour later.'
      },
      correct:'A',
      expCorrect:'The text sets the advertised measure (test scores, barely moving) against two unadvertised ones (teen crash rates falling while older drivers hold steady, attendance up), and the closing sentence states the contrast directly. The purpose is to relocate where the effect can be seen.',
      expWrong:{
        B:'It takes the strongest piece of evidence as the errand. The crash figures matter here because they are not the measure districts advertise, and that framing is the point.',
        C:'It generalizes past the text. Test scores are called a poor guide to this policy, not to every decision a district makes, and the passage still reports what they showed.',
        D:'It promises an explanation the passage does not give. Attendance is listed as a second unadvertised gain; the mechanism behind it is never taken up.'
      },
      tip:'Beware of options that widen a specific claim into a universal one. "This measure misses this effect" is not the same as "this measure is always wrong".'
    },
    {
      id:'TSB-22', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — main purpose',
      passage:"My uncle taped everything: dinners, arguments about parking, a neighbor explaining how to graft a lemon tree. For years the boxes were a joke in the family. After he died we played one at random and heard my grandmother laugh, a sound none of us had thought to miss until it was in the room. We have not listened to the rest. Knowing they exist has turned out to be enough, and I suspect the taping was never meant for listening either.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To report that the family played one of the tapes and heard the grandmother laugh.',
        B:'To argue that recordings of ordinary family life ought to be preserved by anyone who can make them.',
        C:'To convey how the narrator came to understand the point of a habit that the family had spent years treating as a joke.',
        D:"To describe the range of subjects the narrator's uncle chose to record over the years."
      },
      correct:'C',
      expCorrect:'The arc runs from "the boxes were a joke" to "knowing they exist has turned out to be enough". One tape changes what the collection means, and the closing line reinterprets the uncle as well. The purpose is that shift in understanding.',
      expWrong:{
        A:'It says what the text SAYS instead of what it is FOR. The single tape is the hinge of the essay, not its subject, and the option leaves out both the joke and what the family concluded.',
        B:'It converts a private discovery into general advice. The narrator reports what the boxes came to mean to one family; nobody else is told what to do.',
        D:'It takes the opening list as the topic. Dinners, parking arguments, and lemon trees establish how indiscriminate the taping was, which is the setup for the joke.'
      },
      tip:'In a memoir, the purpose is usually the change in the narrator, not the event that caused it. Ask what she understands at the end that she did not at the start.'
    },
    {
      id:'TSB-23', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — main purpose',
      passage:"An ice core is not a thermometer, and the people who drill them say so first. What the ice holds is air: bubbles sealed when snow packed into crystal, each one a sample of the atmosphere on the day it closed. Temperature has to be inferred from the ratio of oxygen isotopes in the ice around the bubble, and that inference rests on a relationship measured in the present. The record is powerful and indirect at once, and the second half of that sentence is the part most often dropped.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To describe how air becomes sealed into bubbles as snow packs down into ice.',
        B:'To argue that ice cores are too indirect to be relied on for reconstructing past climates.',
        C:'To report that temperature is estimated from oxygen isotopes in the surrounding ice.',
        D:'To stress that the record in an ice core is inferred, not measured.'
      },
      correct:'D',
      expCorrect:'The passage opens by denying that a core is a thermometer and closes by saying which half of "powerful and indirect" gets dropped. Everything in between shows why temperature has to be inferred rather than read. The purpose is to keep the indirectness in view.',
      expWrong:{
        A:'It describes one step in the chain. How the bubbles form matters because it explains what the ice actually holds, but the text is built around what has to be inferred from it.',
        B:'It overshoots. The passage calls the record powerful as well as indirect and never says it cannot be relied on; it objects to forgetting the second adjective, not to using cores.',
        C:'It states the mechanism of the inference without saying why the passage insists on it. The final sentence, not the isotope ratio, is where the errand is announced.'
      },
      tip:'When the last line singles out one half of an earlier phrase, that half is the purpose. The rest of the text was preparation for it.'
    },
    {
      id:'TSB-24', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — function of a sentence',
      passage:"An orb weaver rebuilds its web most mornings, eating the old silk as it goes. The cost looks enormous for an animal that measures its meals in milligrams. <u>Silk, however, is expensive to make and cheap to recover.</u> Protein taken back from swallowed threads reappears in the new web within hours, so the spider is paying mainly for labor rather than for material. Webs that are abandoned instead of eaten turn up almost only where prey is unusually abundant.",
      stem:'Which choice best describes the function of the underlined sentence in the text as a whole?',
      choices:{
        A:'It answers the objection raised just before it, turning an apparent cost into a manageable one.',
        B:'It states that silk is costly for a spider to produce but inexpensive for it to recover and reuse.',
        C:'It introduces the comparison with abundant-prey populations that closes the text.',
        D:'It concedes a weakness in the explanation that the rest of the paragraph defends.'
      },
      correct:'A',
      expCorrect:'Sentence two raises the problem: rebuilding daily looks ruinous for an animal that eats milligrams. The underlined line is the pivot that dissolves it, and the sentence after it does the arithmetic, with protein back in the web within hours and only labor left to pay for.',
      expWrong:{
        B:'That is the sentence restated. A function answer names the job, and this line is doing the work of answering the cost objection that the reader was just handed.',
        C:'It points at the wrong target. The abandoned-web populations arrive in the last sentence as a separate observation; the underlined line sets up the protein recovery instead.',
        D:"Nothing is conceded. The word however signals a reversal that works in the spider's favor, not an admission that the explanation is weak."
      },
      tip:'A sentence beginning with however or yet almost always turns the paragraph. Look at the sentence before it: that is what is being turned.'
    },
    {
      id:'TSB-25', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — function of a sentence',
      passage:"When Fairmount opened its municipal pool in 1927, the city council advertised it as a health measure and set admission at five cents. <u>The ledger from the first summer says something the council never did.</u> Receipts cluster on Tuesdays and Fridays, the only days the pool was open to residents of the mill district, and on those days the attendant recorded three times the usual attendance. A pool the council described as open to all was, in practice, scheduled.",
      stem:'Which choice best describes the function of the underlined sentence in the text as a whole?',
      choices:{
        A:"It reports that the ledger from the pool's first summer has survived and can still be read.",
        B:"It announces that the record about to be presented says something the council's own advertising left out.",
        C:'It closes the text by naming what the council had chosen to leave out of its advertising.',
        D:"It questions whether the attendant's counts from that first summer can be trusted."
      },
      correct:'B',
      expCorrect:'The sentence stands between the council version and the ledger version and tells the reader that the two will not match. Everything after it is the mismatch: clustered receipts, mill-district days, triple attendance, and a pool that turns out to have been scheduled rather than open.',
      expWrong:{
        A:'That is close to what the sentence says, minus its point. Survival of the ledger is assumed by the whole paragraph; what the line adds is the promise of a contradiction.',
        C:'It has the sentence in the wrong position. This is the second line of the passage, and the closing sentence is the one that delivers the verdict the underlined line only promised.',
        D:'No doubt is raised about the counts. The text relies on the attendant figures as evidence, and the underlined line sets them up rather than questioning them.'
      },
      tip:'A sentence that says one source contradicts another is an announcement, not a conclusion. Check where it sits: an announcement comes before the evidence.'
    },
    {
      id:'TSB-26', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — function of a sentence',
      passage:"Interviewers who ask every candidate the same questions in the same order rate candidates more consistently than interviewers who let the conversation wander. Consistency is not the same thing as accuracy, though. <u>A structured interview can be reliably wrong.</u> If the questions themselves favor candidates who rehearse, the ratings will agree with one another and still miss the person who would do the job best. Structure fixes the disagreement between interviewers without touching what the interview measures.",
      stem:'Which choice best describes the function of the underlined sentence in the text as a whole?',
      choices:{
        A:'It states that a structured interview can give consistent ratings that are still mistaken.',
        B:'It offers evidence that structured interviews rate candidates more consistently than open ones.',
        C:'It states the distinction the paragraph turns on in one blunt line.',
        D:'It softens the criticism of structured interviews that the last sentence goes on to make.'
      },
      correct:'C',
      expCorrect:'The line before it draws the abstract distinction between consistency and accuracy; the underlined sentence lands that distinction as a single claim, and the rehearsed-candidate example is built to illustrate it. It is the hinge the paragraph turns on.',
      expWrong:{
        A:'That is the sentence paraphrased rather than a job it performs. What it DOES is convert the preceding abstraction into a claim concrete enough to be illustrated.',
        B:'It assigns the sentence to the wrong side. The consistency of structured interviews is stated in the opening line and is exactly what the underlined sentence complicates.',
        D:'It reverses the direction. The sentence sharpens the criticism rather than softening it, and the closing line presses the same point about what structure leaves untouched.'
      },
      tip:'The short blunt sentence in the middle of an argument is usually the thesis. Look at what comes right after it: an example there confirms the sentence was the claim.'
    },
    {
      id:'TSB-27', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — function of a sentence',
      passage:"Mr. Salaverry repaired clocks in a shop the width of a hallway, and he refused to work on anything digital. Customers who came in with a quartz wall clock were sent two blocks over, politely, every time. <u>He was not being sentimental; he simply had nothing to offer them.</u> What he could do was listen to a mainspring and say what year it had been wound too tightly, and there is no version of that skill that applies to a battery. The hallway shop closed in 2014.",
      stem:'Which choice best describes the function of the underlined sentence in the text as a whole?',
      choices:{
        A:"It states that Mr. Salaverry felt no attachment to old clocks and had nothing to offer such customers.",
        B:'It supplies the reason the narrow shop finally closed its doors in 2014.',
        C:'It introduces a complaint from customers that the rest of the paragraph then answers.',
        D:'It heads off a likely misreading of the refusal and points to the reason given next.'
      },
      correct:'D',
      expCorrect:'A reader meeting a repairman who turns away quartz clocks will reach for nostalgia. The underlined sentence blocks that reading and hands the explanation to the next sentence, which supplies it: his skill lives in mainsprings and has no equivalent in a battery.',
      expWrong:{
        A:'It restates the sentence and distorts it. The line denies sentimentality about the refusal, not attachment to old clocks, and restating a sentence never answers what it does.',
        B:'It reaches for the wrong sentence. The closing line reports the shop closing without giving a cause, and the underlined sentence is about which customers he turned away.',
        C:'No complaint appears anywhere in the passage. The customers are described as politely redirected, and nothing they said is reported.'
      },
      tip:'When a narrator says what a character is NOT doing, the sentence is closing off an interpretation. The real explanation is usually in the clause or sentence that follows.'
    },
    {
      id:'TSB-28', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Text Structure and Purpose — function of a sentence',
      passage:"Critics writing about the director Imelda Ravn reach for the word patience, and the shot lengths bear them out: her average take runs four times the industry norm. <u>What a stopwatch cannot show is where she puts the length.</u> Ravn holds on rooms after the people have left them and cuts away from faces in the middle of speech, so the long takes fall on exactly the material another director would trim. The patience is a matter of placement.",
      stem:'Which choice best describes the function of the underlined sentence in the text as a whole?',
      choices:{
        A:'It turns the discussion from a measurable trait to the choice behind it.',
        B:'It states that a stopwatch cannot reveal where Ravn places her unusually long takes.',
        C:'It challenges the accuracy of the shot-length figures given in the sentence before it.',
        D:"It closes the text by naming what sets Ravn's patience apart from every other director's."
      },
      correct:'A',
      expCorrect:'The first sentence settles the measurable part: the takes really are four times longer. The underlined line says the measurement is not where the interest lies, and the rest of the passage is about placement, ending on the claim that patience here is a matter of where the length falls.',
      expWrong:{
        B:'That is the sentence in other words. A function answer has to say what the redirection accomplishes, which is to move the discussion from duration to choice.',
        C:'The figures are never disputed. The passage accepts that the takes run four times the norm and argues that the number is not the interesting fact about them.',
        D:'It puts the sentence at the end. This is the second line of the passage, and the last sentence is the one that states the conclusion about placement.'
      },
      tip:'Watch for sentences built on what something cannot show. They rarely deny the data; they redirect attention to what the data leave out.'
    },
    {
      id:'TSB-29', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Text Structure and Purpose — overall structure',
      passage:"Hospitals that ask staff to report near-misses collect more reports after a year than before, and administrators often read the increase as a sign that errors are rising. The units with the highest reporting rates in one four-year study also had the lowest rates of harm reaching patients. That pattern is easy to read backwards. Reporting does not measure how often things go wrong; it measures how safe it is to say so, and a unit where it is safe to say so catches the problem before it lands.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It reports that the units with the most near-miss reports also had the least harm reaching patients.',
        B:'It gives the common reading of a trend, presents a finding that inverts that reading, and then redefines what the trend measures.',
        C:'It defines what near-miss reporting measures and then explains how administrators came to adopt it.',
        D:'It presents a finding about hospital safety and then concludes that such reports should not be collected.'
      },
      correct:'B',
      expCorrect:'Three movements: the reading administrators reach for (more reports means more errors), the study finding that turns it around (most reports, least harm), and the redefinition in the final sentence, where reporting is recast as a measure of how safe it is to speak. Option B keeps all three, in order.',
      expWrong:{
        A:'It says what the text SAYS instead of what it DOES. That correlation is the middle movement; without the common reading it corrects and the redefinition it leads to, it is a loose fact.',
        C:'It runs the text backwards. The definition of what reporting measures is where the passage arrives, and how hospitals came to adopt these systems is never discussed at all.',
        D:'It attaches a recommendation the passage contradicts. High reporting is presented as a sign of a unit working well, which is an argument for collecting reports, not against it.'
      },
      tip:'When a passage warns that a pattern is easy to read backwards, the structure has three parts: the wrong reading, the evidence, and the corrected reading. All three belong in the answer.'
    },
    {
      id:'TSB-30', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Text Structure and Purpose — overall structure',
      passage:"Ileana had translated the village into three languages before she went back to it. Her dissertation called the place a site of managed forgetting; her articles used the word austere. Standing at the bus stop in the actual rain, she found that the word that came to her was crowded. Nothing she had written was wrong, exactly. The terms had been chosen to travel, and a word that travels has to leave behind whatever will not fit in the suitcase, which was most of what she was now standing in.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It contrasts two of the published descriptions of the village and then chooses between them.',
        B:'It reports that the word that came to Ileana at the bus stop differed from the ones she had published.',
        C:"It sets a character's written accounts against her arrival, then generalizes about what such accounts leave out.",
        D:'It shows a character discovering that her published descriptions were mistaken and explains the error.'
      },
      correct:'C',
      expCorrect:'Three movements. First the written record (managed forgetting, austere), then the arrival that produces a different word (crowded), then the generalization about portable language: terms chosen to travel leave behind what will not fit. Option C keeps the qualified concession intact by saying the accounts leave things out rather than that they are false.',
      expWrong:{
        A:'It pairs the wrong things. Managed forgetting and austere are not set against each other; both belong to the written side, and the contrast the passage builds is between all of that writing and the rain.',
        B:'It says what the text SAYS instead of what it DOES. The single word crowded is the turn, but the option stops there: the published accounts are reduced to background and the closing generalization disappears.',
        D:'It ignores the sentence written to block it. "Nothing she had written was wrong, exactly" rules out error, and the final line locates the problem in what portable words omit, not in what they get wrong.'
      },
      tip:'A hedged concession in the middle of a passage is usually load-bearing. When a text says nothing was wrong, exactly, any option built on the writer being mistaken is already dead.'
    },
    {
      id:'TSB-31', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Text Structure and Purpose — main purpose',
      passage:"Bowhead whales sing all winter under the ice, and unlike humpbacks, which converge on one song a season, individual bowheads sing dozens of distinct types and abandon them within weeks. The obvious explanation is that the songs are advertisements and that novelty is the point. But the recordings behind that idea come from one shelf and one population, and hydrophones elsewhere run for far shorter stretches. Whether bowheads everywhere behave this way, or whether one well-studied group has been asked to speak for all of them, is still open.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To contrast the singing of bowhead whales with the seasonal convergence of humpback song.',
        B:'To argue that the songs of bowhead whales are advertisements in which novelty is the point.',
        C:'To explain why hydrophones outside that one shelf are typically run for shorter periods.',
        D:'To question whether a striking finding can be generalized, given where the recordings came from.'
      },
      correct:'D',
      expCorrect:'The first half sets up the finding and the explanation it invites; the word But turns the passage toward where the data come from, and the last sentence names the open question: whether one well-studied group is speaking for the species. Raising that doubt is the errand.',
      expWrong:{
        A:'It takes the setup for the errand. The humpback comparison establishes what makes bowhead song unusual, and the passage spends its second half on sampling rather than on the contrast.',
        B:'It states the idea the text puts under review. The novelty explanation is called obvious and is then hedged by the sentence that follows, so a purpose answer cannot simply endorse it.',
        C:'It answers a question the passage does not raise. That other hydrophones run for shorter stretches is evidence of thin coverage; why they run that way is never explored.'
      },
      tip:'When a passage tells you where its data came from, the purpose is usually about the reach of the conclusion, not the conclusion itself.'
    },
    {
      id:'TSB-32', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Text Structure and Purpose — main purpose',
      passage:"It has become standard to say that the irregularities in Tekla Ozanne's late tapestries are deliberate, and curators cite a letter in which she calls a dropped warp thread the only honest thing on the loom. The letter is from 1961; the tapestries in question are from 1948. A reader can still argue that the later statement names something she had been doing all along. What cannot be argued, on this evidence, is that she was doing it on purpose at the time.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To mark the limit of what this evidence can show about intent.',
        B:'To establish that the irregularities in the late tapestries were deliberate from the start.',
        C:'To describe the 1961 letter in which Ozanne calls a dropped warp thread honest.',
        D:'To argue that curators ought to stop citing letters written long after the work.'
      },
      correct:'A',
      expCorrect:'The dates do the work: a letter from 1961 cannot establish intent in 1948. The passage concedes that the reading may still be true, then draws the line in the last sentence at what this particular evidence can prove. Its purpose is to mark that limit.',
      expWrong:{
        B:'It asserts what the text declines to assert. The passage allows the reading as arguable and denies only that the letter settles it, so establishing deliberateness is the opposite of the errand.',
        C:'It stops at the exhibit. The letter is described so that its date can be compared with the date of the tapestries, and the comparison is where the point lives.',
        D:'It converts a narrow limit into a blanket rule for curators. The text objects to what this citation is asked to prove, not to citing late letters at all.'
      },
      tip:'Some passages exist to say how far the evidence reaches. Those answers use words like limit, cannot show, or does not establish, and they are not the same as denying the claim.'
    },
    {
      id:'TSB-33', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Text Structure and Purpose — function of a sentence',
      passage:"Printed pilot books for the western Indian Ocean were compiled in distant ports from logs and interviews, and they present the monsoon as a calendar: sail by this date, return by that one. <u>Dhow captains kept a calendar too, and theirs had more days in it.</u> Their seasons were bounded not by fixed dates but by signs a printed book could not carry, which is why a voyage that looked reckless on paper was often the safe one. The books recorded the rule; the crews sailed the exceptions.",
      stem:'Which choice best describes the function of the underlined sentence in the text as a whole?',
      choices:{
        A:'It states that the calendars kept by dhow captains contained a greater number of sailing days.',
        B:'It grants a similarity in order to set up the difference the paragraph then develops.',
        C:'It corrects a factual error in the printed pilot books that the next sentence identifies.',
        D:'It closes the comparison between books and crews that the first sentence had opened.'
      },
      correct:'B',
      expCorrect:'The word too concedes that both sides kept calendars; the second half opens the gap the rest of the paragraph fills, with seasons bounded by signs no book could carry and voyages that looked reckless on paper. The sentence is a concession that clears the way for a contrast.',
      expWrong:{
        A:'That is the sentence restated, and stating it does not say what it is for. Its work is to align the two practices for a moment so the difference between them can be measured.',
        C:'Nothing is called an error. The books are described as accurate about the rule, and the passage faults them only for what a printed page cannot carry.',
        D:'It has the sentence in the wrong position. The comparison opens here and closes in the final line, where the rule is set against the exceptions.'
      },
      tip:'The word too inside a contrast is a concession marker. Grant, then diverge: the sentence that grants is doing setup, not delivering the point.'
    },
    {
      id:'TSB-34', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
      skill:'Text Structure and Purpose — function of a sentence',
      passage:"Neighborhoods that gained a supermarket saw almost no change in what residents ate, a result that has been used to argue that access was never the problem. <u>The stores arrived; the household budgets did not change with them.</u> Purchases shifted toward the new store without shifting much in composition, and the families who did buy differently were the ones whose income had risen for unrelated reasons. Access may still matter; what the studies show is that it does not act alone.",
      stem:'Which choice best describes the function of the underlined sentence in the text as a whole?',
      choices:{
        A:'It states that new supermarkets opened while the budgets of nearby households stayed the same.',
        B:'It supports the claim, made just before it, that access to a store was never the real problem.',
        C:'It names the thing that did not change alongside the stores, which is what the rest of the text builds its reinterpretation on.',
        D:'It introduces the families whose income rose for unrelated reasons as an exception.'
      },
      correct:'C',
      expCorrect:'Holding budgets fixed is what makes the null result readable. The two sentences after it depend on that: purchases moved between stores but not in composition, and the only families who changed were the ones whose income rose. That is how the passage gets from no change to access does not act alone.',
      expWrong:{
        A:'It says what the sentence SAYS instead of what it DOES. Both halves are on the page already; the function is to isolate income as the variable that stayed still so the rest of the paragraph can move.',
        B:'It puts the sentence on the wrong side of the argument. The preceding claim is the one the passage goes on to qualify, and this line supplies the reason the null result cannot settle the question.',
        D:'It points to the wrong sentence. Those families appear two sentences later, and they are evidence that income matters rather than an exception the underlined line introduces.'
      },
      tip:'When a study finds nothing, look for the sentence naming what was held constant. That is usually the hinge that decides whether the null result means the cause is dead or merely insufficient.'
    },
  ]
});
