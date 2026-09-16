/* SAT Studio question set — Reading & Writing: Central Ideas and Details — Set C (CDC-01 a CDC-34)
   Destreza oficial: "Central Ideas and Details" del dominio Information and Ideas.
   Mitad idea central ("main idea of the text"), mitad detalle ("According to the text...").
   Set A cubre ciencia/ciencias sociales/historia y Set B arte, deporte, computacion, comida y derecho.
   Este va al terreno que faltaba en todo el banco: LITERATURA Y TEXTOS DE EPOCA.
     · 14 pasajes narrativos originales (autor y titulo inventados): primera y tercera persona,
       narrador cercano y distante, uno epistolar y uno de diario.
     · 8 poemas originales (la pregunta es sobre lo que el poema sostiene o describe, nunca metrica).
     · 6 discursos o documentos de epoca inventados (alegato, peticiones, memorial, prologo, discurso).
     · 6 textos de critica sobre obras inventadas.
   Trampa deliberada en casi todas las de idea central: una opcion dice lo que el personaje SIENTE
   en vez de lo que el texto SOSTIENE. Las otras dos son el detalle verdadero pero secundario y la
   generalizacion mas amplia de lo que el texto afirma. */
window.SAT_SETS.push({
  id: 'rw-central-c',
  title: 'Central Ideas and Details — Set C',
  section: 'rw',
  level: 'Media',
  description: 'Main-idea and stated-detail questions on original literary narratives, poems, period speeches and documents, and criticism of invented works.',
  minutes: 40,
  questions: [
    {
      id:'CDC-01', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — main idea (literary narrative)',
      passage:"The following text is adapted from Corin Marbley’s 1938 novel <i>The Shortest Bridge</i>. Ottoline paints signs for the shops on Hallam Street.<br><br>Ottoline charged the same for a small sign as for a large one, which the shopkeepers found strange until they watched her work. She did not begin with paint. She stood across the street for an hour, sometimes two, and noted where a person walking fast would first be able to see the wall. Only then did she decide how large the letters had to be and where on the wall they belonged. The grocer who had asked for a sign above his door got one beside his window instead, and said afterward that he had never argued with anyone so little and been overruled so completely.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Ottoline charges the same price for a small sign as she does for a large one.',
        B:'Ottoline sets the size and the place of a sign by studying how the street is seen.',
        C:'Ottoline prefers to put signs beside windows rather than above the doors of shops.',
        D:'Shopkeepers get better results when they let a professional overrule their requests.'
      },
      correct:'B',
      expCorrect:'The flat price is the puzzle; the rest of the passage is the answer to it. Ottoline watches “where a person walking fast would first be able to see the wall,” and “only then” decides the size and the position — which is why the grocer’s sign moved.',
      expWrong:{
        A:'True but secondary: the price is what makes the shopkeepers curious enough to watch her, not the point the passage arrives at.',
        C:'This turns one case into a preference. The sign moved because of what that particular street showed her, not because she favors windows.',
        D:'Too broad: the passage follows one sign painter on one street and never claims a general rule about shopkeepers and professionals.'
      },
      tip:'When a passage opens with something odd, ask what the rest of it explains. The explanation, not the oddity, is usually the main idea.'
    },
    {
      id:'CDC-02', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — stated detail (poetry)',
      passage:"The following text is from Neve Ostler’s poem “Quarry Road.” The speaker describes a limestone quarry that has flooded.<br><br>They cut the hill for eighty years<br>and stopped, and let the rain come in.<br>Now the water holds the shape<br>of every ledge they left behind,<br>and children swim above the step<br>where my grandfather set his drill.<br>No one has moved the fence. It leans<br>and keeps out nothing but the road.",
      stem:'According to the text, what does the water in the quarry preserve?',
      choices:{
        A:'The drill that the speaker’s grandfather once used at the quarry.',
        B:'The fence that used to stand around the floor of the quarry.',
        C:'The road that ran along the edge of the hill above the water.',
        D:'The shape of the ledges that the cutting left in the hillside.'
      },
      correct:'D',
      expCorrect:'The poem says it outright: “Now the water holds the shape / of every ledge they left behind.” The flood keeps the outline of eighty years of cutting.',
      expWrong:{
        A:'The drill marks a place — “the step / where my grandfather set his drill” — but the poem never says the drill itself is still there.',
        B:'The fence is above the water, not in it, and the poem says it leans and keeps out nothing.',
        C:'The road is what the leaning fence fails to keep out. Nothing says the water preserves it.'
      },
      tip:'A detail question about a poem works like one about prose. Find the line that answers it, and ignore every image the poem names for some other reason.'
    },
    {
      id:'CDC-03', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — stated detail (literary narrative)',
      passage:"The following text is adapted from Faye Okorodudu’s 1971 novel <i>Depot</i>. Selam is twelve.<br><br>My aunt had written that she would come on the Thursday bus, so I went on Thursday and sat where the drivers could see me. The four o’clock bus brought a man with two crates of hens. The six o’clock brought nobody at all. At eight the ticket clerk turned off half the lights and told me, kindly, that a person who writes Thursday sometimes means the Thursday after. I said I would rather be early than sorry, and he brought me a stool with a cushion on it, which is how I knew he thought I would be there a long time.",
      stem:'According to the text, what does the ticket clerk do after he tells Selam that her aunt may come the following Thursday?',
      choices:{
        A:'He turns off half of the lights that are on in the depot.',
        B:'He offers to write a letter to Selam’s aunt about the wait.',
        C:'He brings Selam a stool with a cushion on it.',
        D:'He walks Selam outside to meet the eight o’clock bus.'
      },
      correct:'C',
      expCorrect:'The order is in the last sentence. The clerk says that “Thursday sometimes means the Thursday after,” Selam answers him, “and he brought me a stool with a cushion on it.”',
      expWrong:{
        A:'The lights go off before the clerk speaks; the passage uses that moment to set up what he says next.',
        B:'Not supported: the only letter in the passage is the one the aunt already wrote, and nobody offers to answer it.',
        D:'Eight o’clock is the hour at which the clerk speaks to her. No bus is met, and nothing says he leaves the desk.'
      },
      tip:'When the question fixes an order with after or before, read the sentence that holds the trigger and the one beside it. Details from earlier are the usual trap.'
    },
    {
      id:'CDC-04', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — main idea (criticism)',
      passage:"The following text is from a 2019 review of Padma Ruel’s novel <i>The Orchard Wall</i>.<br><br>Ruel’s first novel ran to six hundred pages and explained everything. <i>The Orchard Wall</i> runs to two hundred and explains almost nothing, and it is the better book. A daughter returns to a farm; a father does not ask where she has been; the two of them pick fruit for forty pages. Readers who want the missing years will not get them. What they will get is a way of reading a silence, because Ruel has trained them, page by page, to notice which questions the pair are steering around.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'The novel works because it teaches the reader how to read what is left unsaid.',
        B:'Ruel’s first novel ran to six hundred pages and explained everything in them.',
        C:'Novels that withhold information are stronger than novels that explain it.',
        D:'Readers of the novel will learn where the daughter spent the missing years.'
      },
      correct:'A',
      expCorrect:'The review ranks the short, unexplaining book above the long, explaining one, and the last sentence gives the reason: Ruel “has trained them, page by page, to notice which questions the pair are steering around.”',
      expWrong:{
        B:'True but secondary: the first novel is the measuring stick the review sets up, not the verdict it reaches.',
        C:'Too broad: the review praises this book for what it trains the reader to do, not every book that withholds.',
        D:'The review says the opposite in so many words: “Readers who want the missing years will not get them.”'
      },
      tip:'A review’s main idea is its verdict plus its reason. Look for the sentence that says why the work succeeds, not the one that says what it is about.'
    },
    {
      id:'CDC-05', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — main idea (literary narrative, letter)',
      passage:"The following text is adapted from Osric Lannen’s 1955 novel <i>The Level Line</i>. Teodor, who works at a surveying camp, writes home to his sister.<br><br>You ask what I do all day, and the honest answer is that I carry a pole and stand still. Bartos looks through the instrument and I hold the pole where he waves me. It sounds like nothing. But the line he is drawing across this valley will decide where the water goes for a hundred years, and it cannot be one finger out. So I have learned to stand the way a post stands, and to be proud of it, which is not something I expected to write to you.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Teodor spends his days holding a pole while Bartos works the instrument.',
        B:'Teodor hopes to leave the surveying camp before the winter arrives.',
        C:'Surveying matters more than the other trades a young man might learn.',
        D:'Teodor has come to take pride in work that sounds like nothing but must be exact.'
      },
      correct:'D',
      expCorrect:'The letter turns on “But.” Standing still “sounds like nothing,” yet the line “cannot be one finger out,” so Teodor has “learned to stand the way a post stands, and to be proud of it.”',
      expWrong:{
        A:'True but secondary: this is the plain answer Teodor gives first, and the rest of the letter exists to complicate it.',
        B:'Not supported: nothing in the letter mentions leaving, and the closing line is about pride rather than escape.',
        C:'Too broad: Teodor writes about one job on one valley line and never compares surveying with other trades.'
      },
      tip:'In a letter or a diary entry, the main idea is usually the turn. Find the but or the yet and read what follows it.'
    },
    {
      id:'CDC-06', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — stated detail (historical document)',
      passage:"The following text is adapted from an 1846 petition submitted by the weavers of a mill town to their county council. The signers are invented.<br><br>We do not ask the council to raise our wages, which is not in its power, nor to close the mills, which would leave us worse. We ask for one thing: that the footbridge over the mill race be widened and railed. Four hundred of us cross it twice a day in the dark, shoulder to shoulder, and in January a girl of fourteen went into the water and was carried under the wheel before a hand could reach her. The bridge is the council’s to mend. We have brought our request to the body that can grant it.",
      stem:'According to the text, what do the petitioners ask the council to do?',
      choices:{
        A:'Raise the wages that are paid to the workers in the mills.',
        B:'Close the mills until the mill race has been made safe.',
        C:'Widen the footbridge over the mill race and put a rail on it.',
        D:'Find out how a girl of fourteen came to fall into the water.'
      },
      correct:'C',
      expCorrect:'The petition names its request in one sentence: “We ask for one thing: that the footbridge over the mill race be widened and railed.”',
      expWrong:{
        A:'Ruled out at the start: raising wages “is not in its power,” which is why the signers do not ask for it.',
        B:'Also ruled out: closing the mills “would leave us worse,” so the petition sets that aside on purpose.',
        D:'The January death is the reason given for the request, not the request. What the signers want is the bridge mended.'
      },
      tip:'When a document opens by listing what it does not ask for, the real request is the sentence right after the list. Options lifted from the list are built to catch a fast reader.'
    },
    {
      id:'CDC-07', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — main idea (poetry)',
      passage:"The following text is from Idris Wennell’s poem “The Orchard at Kelm.”<br><br>They keep the far row for the wind.<br>No basket goes along that edge,<br>no ladder leans, no picker climbs;<br>the fruit there falls and is not weighed.<br>Those trees stand up against the gale<br>so that the twenty rows behind<br>may hold their blossom in the spring<br>and give the crop the market wants.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'The fruit that falls in the far row of the orchard is never weighed or sold.',
        B:'The far row is left unpicked so that it can shelter the rows planted behind it.',
        C:'The pickers at Kelm refuse to carry their ladders along the windward edge.',
        D:'Orchards yield more fruit when a part of the planting is left unharvested.'
      },
      correct:'B',
      expCorrect:'The last four lines give the purpose: those trees “stand up against the gale / so that the twenty rows behind / may hold their blossom.” The unpicked row is a windbreak.',
      expWrong:{
        A:'True but secondary: the unweighed fruit is the cost of the arrangement, and the poem spends its second half explaining what that cost buys.',
        C:'The poem says no ladder leans there, not that anyone refuses. A fact about the orchard becomes a claim about the pickers.',
        D:'Too broad: the poem describes one row at one orchard and makes no general claim about yields.'
      },
      tip:'The words so that point at a purpose, and a purpose is usually the idea. Ask what the described arrangement is for.'
    },
    {
      id:'CDC-08', type:'mc', domain:'Information and Ideas', difficulty:'Fácil',
      skill:'Central Ideas and Details — stated detail (literary narrative)',
      passage:"The following text is adapted from Raul Kesteven’s 1962 novel <i>Smoke and Frame</i>. Ilse has been apprenticed to a beekeeper for one season.<br><br>Wick had one rule and repeated it every morning: never open a hive on a day you are in a hurry. Ilse thought it was a saying about patience until the afternoon she lifted a frame too fast, felt the comb give, and stood there holding a year of work in two pieces while the air around her changed its sound. Wick did not scold her. He put his hand under the broken frame, took the weight, and said the rule again, the same way, as though she were hearing it for the first time.",
      stem:'According to the text, what does Wick do immediately after Ilse breaks the comb?',
      choices:{
        A:'He takes the weight of the broken frame and repeats his rule.',
        B:'He scolds Ilse for having lifted the frame too quickly.',
        C:'He explains for the first time what the rule about hurry means.',
        D:'He closes the hive and sends Ilse away for the afternoon.'
      },
      correct:'A',
      expCorrect:'The last sentence gives both actions in order: Wick “put his hand under the broken frame, took the weight, and said the rule again, the same way.”',
      expWrong:{
        B:'The passage rules this out directly: “Wick did not scold her.”',
        C:'He repeats the rule “as though she were hearing it for the first time,” which is the opposite of explaining it.',
        D:'Not supported: nothing in the passage closes the hive or sends Ilse anywhere.'
      },
      tip:'Immediately after points at one sentence. An option can describe a sensible next step and still be wrong if the passage put a different action there.'
    },
    {
      id:'CDC-09', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — main idea (literary narrative, diary)',
      passage:"The following text is adapted from Veshti Ambrose’s 1974 novel <i>The Pressed Year</i>, which is written as a diary. Hanna is cataloguing a herbarium left by a botanist.<br><br>April 9. Another box of his specimens, another argument with him in my head. He wrote the county and the date on every sheet and nothing else. Not the slope, not the soil, not what grew beside it. For a man who pressed nine thousand plants he was strangely uninterested in where they had been standing. I can date his walks to the day. I cannot say which of them were made in a wood.<br><br>April 11. I have started a second card for each sheet, for everything he did not write down. Most of the cards will stay empty. I am making them anyway.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Hanna is annoyed by a collector who wrote only the county and the date on his sheets.',
        B:'The botanist pressed nine thousand plants over many years of walking in the county.',
        C:'Hanna is building a record of what the collection fails to say about its own specimens.',
        D:'Specimens are useless to researchers unless the collector notes the habitat around them.'
      },
      correct:'C',
      expCorrect:'The first entry names the gap — county and date and “nothing else” — and the second entry says what Hanna does about it: a second card per sheet “for everything he did not write down,” made even though most will stay empty.',
      expWrong:{
        A:'This is what Hanna feels, not what the entries are about. The argument in her head is the setup; the cards are the point.',
        B:'True but secondary: the nine thousand plants measure the size of the problem rather than state the idea.',
        D:'Too broad, and the passage undercuts it: the sheets still let Hanna date every walk, so they are not useless.'
      },
      tip:'In a first-person passage, separate the mood from the action. The main idea usually lives in what the narrator decides to do about the thing that bothers her.'
    },
    {
      id:'CDC-10', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — stated detail (criticism)',
      passage:"The following text is from a 2016 essay on the stage designer Verity Ohl and her set for the play <i>Boundary Water</i>.<br><br>Ohl is often described as a minimalist, a word she rejects. Her set for <i>Boundary Water</i> holds one object: a long wooden table. What the description leaves out is the floor. Ohl had the stage raked at a grade steep enough that actors crossing upstage must lean, and she has said that the table is there only to make the tilt visible, since an audience cannot see a slope but can see a glass slide. Reviewers praised the table. The table is the instrument, not the subject.",
      stem:'According to the text, why did Ohl put a table on the stage?',
      choices:{
        A:'To give the actors something to lean against as they cross upstage.',
        B:'To satisfy reviewers who expect one object on an otherwise bare set.',
        C:'To show that her work is not as minimalist as the critics claim it is.',
        D:'To make the rake of the stage floor visible to the audience.'
      },
      correct:'D',
      expCorrect:'Ohl’s own reason is quoted: the table “is there only to make the tilt visible, since an audience cannot see a slope but can see a glass slide.”',
      expWrong:{
        A:'Leaning is what the rake does to the actors. The essay never gives the table that job.',
        B:'Reviewers appear at the end, praising the table after the fact; nothing says they shaped the design.',
        C:'The essay reports that Ohl rejects the label, but that is the writer’s framing, not the reason given for the table.'
      },
      tip:'A why question wants the reason the text states, not a reason that would make sense. Hunt for because, since, so that, or a quoted explanation.'
    },
    {
      id:'CDC-11', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — stated detail (poetry)',
      passage:"The following text is from Marit Sunde’s poem “Sail Loft.”<br><br>The needle is bent on purpose, curved<br>the way a finger curves to hold,<br>because a straight one, driven hard,<br>would come out true and split the cloth.<br>My mother learned the arc at nine<br>and could not say it into words;<br>she set my hand upon her hand<br>and let the motion teach the rest.",
      stem:'According to the text, why is the sailmaker’s needle curved?',
      choices:{
        A:'Because a straight needle, driven hard, would split the cloth.',
        B:'Because a curved needle is easier for a child of nine to hold.',
        C:'Because the speaker’s mother could not describe the stitch in words.',
        D:'Because the curve matches the shape of a finger that is holding.'
      },
      correct:'A',
      expCorrect:'The poem gives the reason with because: a straight needle “driven hard, / would come out true and split the cloth.” The bend is what prevents the split.',
      expWrong:{
        B:'The mother’s age tells us when she learned the motion, not why the tool is shaped that way.',
        C:'What she cannot put into words is the arc of the stitch, which is why she teaches by hand. That is a fact about teaching, not about the needle.',
        D:'The finger is a comparison used to describe the curve. A description of a shape is not a reason for it.'
      },
      tip:'Watch for a simile sitting next to a cause. Curved the way a finger curves tells you what it looks like; the word because tells you why.'
    },
    {
      id:'CDC-12', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — main idea (historical document, closing argument)',
      passage:"The following text is adapted from an 1893 closing argument delivered by an attorney in a dispute over a millpond. The parties are invented.<br><br>My friend has spent three days proving that the dam is well built, and I will not contest a plank of it. Grant him the dam. Grant him the mortar and the sluice and the good faith of the men who laid them. The question this court must answer is not whether the dam is sound but whether the water it holds belongs to the man who holds it. A well-built wall across a river is still a wall across a river. If soundness settled ownership, every strong hand in this valley could take what it could keep.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'The dam at the center of the dispute was built carefully and in good faith.',
        B:'The case turns on who owns the water, not on how well the dam was built.',
        C:'The attorney believes that his opponent wasted three days of the court’s time.',
        D:'Strong builders in the valley have often taken property that was not theirs.'
      },
      correct:'B',
      expCorrect:'The speaker concedes the dam — “Grant him the dam” — in order to move the court to the question he says decides the case: “not whether the dam is sound but whether the water it holds belongs to the man who holds it.”',
      expWrong:{
        A:'This is what the speaker gives away on purpose. A concession made in the opening lines sets up the argument; it is not the argument.',
        C:'The text never calls the three days wasted, and what the speaker thinks of his opponent is beside the point he is making.',
        D:'The closing line warns about what would follow if soundness settled ownership. It is a consequence, not a report of what has happened.'
      },
      tip:'When a speaker concedes a point early, the main idea is whatever the concession clears the way for. Read past the grant to the but.'
    },
    {
      id:'CDC-13', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — main idea (literary narrative)',
      passage:"The following text is adapted from Hollis Anwar’s 1959 novel <i>The Slow Channel</i>. Nadia has piloted the river ferry for nine years.<br><br>The flood had moved the sandbar, and Nadia knew it before the survey boat came, because the crossing had begun to take four minutes longer at the same throttle. She did not tell the company. She ran the new line for a month, learned where it shoaled, and only then wrote the letter, with soundings, so that the office would have nothing to answer except yes. Her father had sent his warnings raw and had spent his career being asked for proof. Nadia had watched that happen and had decided early what she would do differently.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'A flood moved the sandbar and lengthened the ferry crossing.',
        B:'Nadia resents how the company once treated her father.',
        C:'Nadia holds back her report until it is in a form the company cannot question.',
        D:'Running a channel teaches a pilot more than a survey does.'
      },
      correct:'C',
      expCorrect:'The passage is built on the delay: she knows about the sandbar first, says nothing, runs the line for a month, “and only then wrote the letter, with soundings, so that the office would have nothing to answer except yes.” The last sentence names it as a decision made in advance.',
      expWrong:{
        A:'True but secondary: the extra four minutes are how she learns the bar has moved, and the passage is about what she does next.',
        B:'This describes a feeling the text never states. What the father’s career supplies is a lesson about proof, not a grievance.',
        D:'Too broad: the passage compares one pilot’s method with her father’s, not running with surveying in general.'
      },
      tip:'When a passage closes on a decision a character made earlier, that decision is almost always the idea the scene was built to show.'
    },
    {
      id:'CDC-14', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — stated detail (literary narrative)',
      passage:"The following text is adapted from Junisa Brandt’s 1980 novel <i>Let Out, Taken In</i>. Wren alters wedding dresses in a shop above a bakery.<br><br>I keep the pins in my mouth and the opinions there with them. A bride tells me the dress is perfect and asks, in the same breath, whether the shoulder sits right. It does not, and she knows it does not, and what she wants is for the shoulder to be my discovery and not hers. So I circle her once, touch the seam, and say the word I have said four thousand times: here. Then she agrees with me, and we are both relieved, and the dress gets fixed. My grandmother called this the second trade. She said the first one was sewing.",
      stem:'According to the text, what does Wren say when she reaches the shoulder seam?',
      choices:{
        A:'She tells the bride that the dress is perfect as it is.',
        B:'She says the single word “here” after circling the bride.',
        C:'She explains that the shoulder was cut wrong at the factory.',
        D:'She repeats the question that the bride has just asked her.'
      },
      correct:'B',
      expCorrect:'The sentence names the word: she circles the bride, touches the seam, “and say the word I have said four thousand times: here.”',
      expWrong:{
        A:'Perfect is the bride’s word, offered in the same breath as her doubt about the shoulder.',
        C:'Not supported: the passage never says where the fault came from, only that Wren names the spot.',
        D:'Wren answers with a word rather than with a question. The bride’s question is what she is responding to.'
      },
      tip:'If a detail question quotes an action, the answer is the words the text places in that moment. Words spoken by another character are the usual decoy.'
    },
    {
      id:'CDC-15', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — main idea (poetry)',
      passage:"The following text is from Callum Iwu’s poem “Almanac.”<br><br>The book says frost will hold till May.<br>My father reads it at the stove<br>and sets it down and goes outside<br>to see what colour the hill has turned.<br>He has been wrong; the book has too.<br>The difference is the book stays wrong<br>until a new one comes in print,<br>and he is wrong for half a day.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'The almanac in the poem predicts that frost will hold until May.',
        B:'Printed forecasts are worthless to people who watch the land.',
        C:'The father resents the almanac and reads it only out of old habit.',
        D:'The father trusts the hill over the book because his error lasts half a day.'
      },
      correct:'D',
      expCorrect:'The last three lines carry the whole comparison: both the father and the book are wrong, but “the book stays wrong / until a new one comes in print, / and he is wrong for half a day.” Speed of correction is the reason he goes outside.',
      expWrong:{
        A:'True but secondary: the prediction is the occasion for the poem, not the claim the last lines make.',
        B:'Too broad, and the poem contradicts it: the father does read the book, at the stove, before he goes out.',
        C:'This supplies a feeling the poem never states. Nothing suggests resentment or mere habit; the poem gives a reason instead.'
      },
      tip:'When a poem sets two things side by side and then names “the difference,” that sentence is the idea.'
    },
    {
      id:'CDC-16', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — main idea (criticism)',
      passage:"The following text is from a 2021 essay about the photographer Anselm Duro and his series <i>Eleven Rooms</i>.<br><br>Every picture in <i>Eleven Rooms</i> was taken from the doorway, at standing height, with the same lens. Critics have read this as modesty, a refusal to compose. It is the reverse. By fixing the camera, Duro made the rooms do the work a photographer usually does: a low bed pulls the eye down, a high window throws it up, and the viewer’s attention is moved by furniture rather than by framing. The restriction is not an absence of choices. It is one choice, made once, and then obeyed.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Duro’s fixed camera is a deliberate device that hands the composing to the rooms.',
        B:'Duro photographed all eleven of the rooms from the doorway with a single lens.',
        C:'Critics have rightly described the series as a modest refusal to compose a picture.',
        D:'Photographers who limit their equipment take more honest pictures of interiors.'
      },
      correct:'A',
      expCorrect:'The essay answers the critics — “It is the reverse” — and explains how: with the camera fixed, “a low bed pulls the eye down, a high window throws it up,” so the composing is done by the rooms. The last line calls the restriction “one choice, made once.”',
      expWrong:{
        B:'True but secondary: the fixed method is the fact the essay interprets, and the interpretation is the idea.',
        C:'The essay rejects this reading in three words: “It is the reverse.”',
        D:'Too broad: the essay explains what one restriction does in one series, and never claims a rule about equipment and honesty.'
      },
      tip:'When a text reports a common reading and then contradicts it, the main idea is on the far side of the contradiction.'
    },
    {
      id:'CDC-17', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — stated detail (historical document, preface)',
      passage:"The following text is adapted from the preface to an 1871 collection of regional songs. The editor is invented.<br><br>I have been asked why the airs in this volume are printed without the piano parts that were written for them in the capital. My answer is that those parts were added for rooms that these songs never entered. A tune made to be carried three miles across a hillside by one voice does not want a chord underneath it; it wants the interval of silence that the hillside puts there. I have kept the silences, and I have counted them, and where a singer breathed I have marked the place.",
      stem:'According to the text, why did the editor leave the piano parts out of the volume?',
      choices:{
        A:'Because the editor could not obtain accurate copies of those parts.',
        B:'Because singers in the capital asked for the songs to be printed plainly.',
        C:'Because the parts were written for settings these songs never came from.',
        D:'Because the piano parts were too difficult for most readers to play.'
      },
      correct:'C',
      expCorrect:'The editor answers the question in the next sentence: “those parts were added for rooms that these songs never entered,” and then explains that a hillside tune wants silence rather than a chord.',
      expWrong:{
        A:'Not supported: nothing suggests the parts were unavailable, and the editor knows them well enough to reject them.',
        B:'The capital is where the piano parts came from, not the source of a request to remove them.',
        D:'Difficulty never comes up. The objection is about where the music belongs, not about who can play it.'
      },
      tip:'When a preface begins with a question put to the author, the answer is the sentence beginning My answer, and everything after it is support.'
    },
    {
      id:'CDC-18', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — stated detail (literary narrative)',
      passage:"The following text is adapted from Tova Lindqvist’s 1966 novel <i>The Hour Before Steam</i>. Mrs. Bihari has kept the bathhouse on Varna Lane for thirty years.<br><br>The bathhouse opened at six, and Mrs. Bihari unlocked the outer door at half past five, though the water was not ready and she told no one why. In that half hour the room filled with men from the night shift at the yard, who sat on the cold benches with their coats on and said almost nothing, and then went home to sleep. They were not there for the steam. Mrs. Bihari had noticed, in her first winter, that a man coming off a night shift will not go straight into a house where everyone is waking up, and she had opened early ever since.",
      stem:'According to the text, what do the night-shift men do during the half hour before the bathhouse opens?',
      choices:{
        A:'They help Mrs. Bihari get the water ready for the first bath.',
        B:'They sit on the cold benches with their coats still on.',
        C:'They wait outside the locked outer door until it opens at six.',
        D:'They talk with one another about the night’s work at the yard.'
      },
      correct:'B',
      expCorrect:'The second sentence says exactly this: the room fills with men from the night shift, “who sat on the cold benches with their coats on and said almost nothing, and then went home to sleep.”',
      expWrong:{
        A:'The water “was not ready,” and the passage gives the men no part in getting it ready.',
        C:'The outer door is unlocked at half past five. The men are inside for that half hour, not outside.',
        D:'The passage rules this out: they “said almost nothing.”'
      },
      tip:'A detail option can be built out of the right scene and the wrong verb. Match the action, not just the place and the people.'
    },
    {
      id:'CDC-19', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — stated detail (poetry)',
      passage:"The following text is from Oyelaran Fitch’s poem “Nightshift Bridge.”<br><br>At four the bridge belongs to three:<br>the woman with the bakery key,<br>the man who counts the river gauge,<br>and one gull working the wet rail.<br>The buses do not start till five.<br>The office windows hold no one.<br>Whatever the bridge is for by day,<br>by four it is a footpath home.",
      stem:'According to the text, who is on the bridge at four in the morning?',
      choices:{
        A:'A baker, a reader of the river gauge, and a gull.',
        B:'Office workers who arrive before the buses begin to run.',
        C:'The drivers of the buses that start their routes at five.',
        D:'A crowd that uses the bridge as a footpath on its way home.'
      },
      correct:'A',
      expCorrect:'The poem counts them in its first four lines: “the woman with the bakery key, / the man who counts the river gauge, / and one gull working the wet rail.”',
      expWrong:{
        B:'The poem rules this out: “The office windows hold no one.”',
        C:'The buses “do not start till five,” so no driver is on the bridge at four.',
        D:'Footpath home is the poem’s image for what the bridge becomes at that hour, not a crowd of people using it.'
      },
      tip:'A list in a poem is still a list. When the question asks who or what, count the items the lines actually name and stop there.'
    },
    {
      id:'CDC-20', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — main idea (literary narrative)',
      passage:"The following text is adapted from Arwen Baskov’s 1948 novel <i>Fog Count</i>. Petru is sixteen.<br><br>In clear weather I count the sheep. In fog I count the sounds, and the number is always lower, and for two winters I believed the fog was taking animals. Then my uncle showed me that in fog the flock draws in, so that four of them standing together make one noise instead of four. The count was never wrong about the sounds. It was wrong about what a sound meant. Since then I have not trusted a number until I know what it was made of.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Petru counts by sound on the days when the fog is too thick to see.',
        B:'Petru was frightened by the thought that the fog was taking animals.',
        C:'Numbers gathered in poor conditions should never be used for decisions.',
        D:'Petru learns that a count can be accurate and still be read wrongly.'
      },
      correct:'D',
      expCorrect:'The two short sentences carry it: “The count was never wrong about the sounds. It was wrong about what a sound meant.” The closing line turns that into the lesson Petru keeps.',
      expWrong:{
        A:'True but secondary: this is the method that produces the puzzle, not the lesson the passage ends on.',
        B:'This names a feeling the text does not state, and the belief itself is what the uncle corrects.',
        C:'Too broad, and it goes further than Petru does: he does not discard the count, he asks what it was made of.'
      },
      tip:'If the narrator states a rule in the last line, check it against the middle of the passage. That pairing is usually the main idea.'
    },
    {
      id:'CDC-21', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — stated detail (criticism)',
      passage:"The following text is from a 2018 review of Gethin Amara’s documentary <i>Low Water</i>, about a reservoir village that reappears in a drought.<br><br>Amara had one editorial rule and states it in the opening titles: no aerial shots. Everything in the film is seen from where a person could stand. The choice costs him the image the story seems to demand, the wide view of a drowned street laid out below, and he gives it up on purpose, arguing that the villagers never saw their own village that way and that the film should not know more than they did. Critics have called the result claustrophobic. That is the word for it, and it is earned.",
      stem:'According to the text, what reason does Amara give for refusing to use aerial shots?',
      choices:{
        A:'Aerial footage of the reservoir would have cost more than he could pay.',
        B:'Critics of his earlier films had objected to their wide aerial views.',
        C:'The villagers themselves never saw their village from above it.',
        D:'A drowned street cannot be photographed from the air during a drought.'
      },
      correct:'C',
      expCorrect:'The reason is given in the third sentence: he gives up the wide view “arguing that the villagers never saw their own village that way and that the film should not know more than they did.”',
      expWrong:{
        A:'Cost never comes up. What the choice costs him is an image, not money.',
        B:'Critics appear only at the end, calling the finished film claustrophobic. Nothing says they shaped the rule.',
        D:'The review calls the aerial view “the image the story seems to demand,” so it was available and refused, not impossible.'
      },
      tip:'When a text reports a maker’s argument, take the clause after arguing that. Reasons that merely sound practical are distractors.'
    },
    {
      id:'CDC-22', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Central Ideas and Details — stated detail (historical document, address)',
      passage:"The following text is adapted from an 1887 address delivered to a teachers’ association by a school inspector. The speaker is invented.<br><br>You will hear it said that our schools fail because the buildings are poor, and some of them are poor. I have sat in a room where the rain came through. But I have visited four hundred schools in nine years, and the classes that read best were not the ones with the sound roofs. They were the ones where the teacher stayed more than two winters. Where a teacher stayed, the reading rose; where teachers changed each year, it did not, whatever the building was worth. Mend the roofs, by all means. Then keep the teacher.",
      stem:'According to the speaker, what did the classes that read best have in common?',
      choices:{
        A:'Roofs that had been repaired shortly before the inspection.',
        B:'A teacher who had stayed at the school more than two winters.',
        C:'Inspectors who visited them regularly over a period of nine years.',
        D:'Fewer pupils than were taught in the schools with poor buildings.'
      },
      correct:'B',
      expCorrect:'The speaker answers it in two sentences: the best classes “were not the ones with the sound roofs. They were the ones where the teacher stayed more than two winters.”',
      expWrong:{
        A:'The address rules this out: the best classes “were not the ones with the sound roofs.”',
        C:'Nine years and four hundred schools describe the speaker’s own experience, not a feature of those classes.',
        D:'Class size is never mentioned. The comparison in the address is between staying teachers and changing ones.'
      },
      tip:'When a speaker sets up a common belief and then knocks it down, the detail you want is in the replacement sentence, not the belief.'
    },
    {
      id:'CDC-23', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Details — main idea (literary narrative)',
      passage:"The following text is adapted from Nilsa Tornquist’s 1983 novel <i>The Cold Room</i>. Emeric has been the sole caretaker of a small museum of glass for eleven years.<br><br>Visitors came for the Venetian goblets, and Emeric let them. He kept the goblets lit and labelled and behind a rope, and he answered the same six questions about them every day without tiring, because the questions bought him the rest of the building. Nobody funds a room of chipped bottles dug out of a canal. But the bottles were the collection; the goblets were the ticket. When the board discussed selling three goblets to pay for a new roof, Emeric argued against it on grounds of provenance, which was true, and did not mention the other reason, which was truer.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Emeric answers six questions about the goblets every day.',
        B:'Emeric is worn down by visitors who ignore the bottles.',
        C:'Museums should never sell objects to pay for repairs.',
        D:'Emeric keeps the goblets on show because they pay for the collection he values.'
      },
      correct:'D',
      expCorrect:'The passage states the arrangement twice. The questions about the goblets “bought him the rest of the building,” and then plainly: “the bottles were the collection; the goblets were the ticket.” The board scene shows him protecting the ticket without saying why.',
      expWrong:{
        A:'True but secondary: the six questions are the price Emeric pays for the arrangement, and the passage explains what the payment buys.',
        B:'The passage says he answers them “without tiring,” so this contradicts the text and substitutes a feeling for a claim.',
        C:'Too broad: Emeric opposes one sale for two particular reasons, and the passage makes no rule for museums.'
      },
      tip:'When a passage gives a character a public reason and a private one, the main idea is the private one the text has just shown you.'
    },
    {
      id:'CDC-24', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Details — main idea (poetry)',
      passage:"The following text is from Hesper Njoku’s poem “The Cartographer’s Apology.”<br><br>I gave you every road and ford,<br>the depth in fathoms, north held true,<br>the year the bridge was made of stone.<br>Forgive the whiteness at the edge.<br>It is not ignorance of land;<br>it is the country I could not<br>reduce to any coloured line —<br>the part that would not hold a scale.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'The blank edge of the map marks what could not be measured, not what was unknown.',
        B:'The mapmaker recorded the roads, the fords, the depths, and a stone bridge’s age.',
        C:'The mapmaker apologizes for having failed to survey the far edges of the country.',
        D:'Maps mislead their readers because they leave out whatever resists measurement.'
      },
      correct:'A',
      expCorrect:'The poem draws the distinction itself: the whiteness “is not ignorance of land; / it is the country I could not / reduce to any coloured line.” The blank is a limit of the method, not of the knowledge.',
      expWrong:{
        B:'True but secondary: the first three lines are the credentials the speaker offers before asking to be forgiven for the blank.',
        C:'The poem denies this directly. The white edge is not ignorance, so it is not a failure to survey.',
        D:'Too broad and too hostile: the speaker defends the map as honest about its own limit rather than charging maps with misleading anyone.'
      },
      tip:'A line that says it is not X; it is Y hands you the idea. Keep Y and reject any option built out of X.'
    },
    {
      id:'CDC-25', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Details — main idea (criticism)',
      passage:"The following text is from a 2020 essay on Bernat Kovach’s novel <i>The Ash Almanac</i>, whose narrator is a weather clerk recording a year of failed forecasts.<br><br>Readers reach for the word unreliable, and the book invites it: the clerk is wrong about the rain in almost every chapter. But unreliability in fiction usually means a narrator who hides something from us. Kovach’s clerk hides nothing. He writes down the forecast, writes down the weather, and leaves the gap on the page for anyone to measure. What unsettles the reader is not that he is concealing an error but that he keeps recording one and will not stop, and the novel’s real subject is that stubbornness rather than the weather.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'The clerk in the novel is wrong about the rain in almost every chapter.',
        B:'Kovach’s clerk hides the size of his errors from the reader.',
        C:'The novel’s subject is a clerk’s refusal to stop recording errors he does not hide.',
        D:'Unreliable narrators are the commonest device in recent literary fiction.'
      },
      correct:'C',
      expCorrect:'The essay separates two things readers blur together. The clerk “hides nothing”; what unsettles the reader “is not that he is concealing an error but that he keeps recording one and will not stop,” and the last clause names that stubbornness as “the novel’s real subject.”',
      expWrong:{
        A:'True but secondary: the failed forecasts are what invite the word unreliable, and the essay spends the rest of its length correcting that word.',
        B:'The essay states the opposite: “Kovach’s clerk hides nothing.”',
        D:'Too broad: the essay defines what unreliability usually means in order to set this book apart, not to count how often the device appears.'
      },
      tip:'When a text grants a label and then redefines it, the idea is the redefinition. Track the sentence that begins But.'
    },
    {
      id:'CDC-26', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Details — stated detail (literary narrative)',
      passage:"The following text is adapted from Oona Delacroix’s 1991 novel <i>The Canal at Eight</i>. Ilya is being taught to swim by his grandmother, Baba.<br><br>Baba did not tell Ilya to kick. She stood in water to her waist, held him level under the ribs, and talked to him about the barge traffic while she slowly took her hands away, an inch at a time, so that the moment of holding and the moment of not holding could not be told apart. Ilya swam eleven strokes before he understood that nobody was under him, and then he stopped swimming and went down, and Baba, who had expected exactly that, was there. Later she told his mother that the lesson was not the swimming. The lesson was the eleven strokes.",
      stem:'According to the text, what does Baba do while she is taking her hands away?',
      choices:{
        A:'She tells Ilya to begin kicking his legs.',
        B:'She talks to Ilya about the traffic on the barges.',
        C:'She counts each of the eleven strokes out loud.',
        D:'She warns Ilya that she is about to let go of him.'
      },
      correct:'B',
      expCorrect:'The action runs alongside the withdrawal in the same sentence: she “talked to him about the barge traffic while she slowly took her hands away, an inch at a time.”',
      expWrong:{
        A:'The passage opens by ruling this out: “Baba did not tell Ilya to kick.”',
        C:'The eleven strokes are counted by the narration afterward. Nothing says Baba counts them aloud.',
        D:'A warning would break the method: she withdraws so gradually that holding and not holding “could not be told apart.”'
      },
      tip:'The word while joins two actions in one sentence. When the question uses while, the answer is the other half of that sentence.'
    },
    {
      id:'CDC-27', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Details — main idea (historical document, memorial)',
      passage:"The following text is adapted from an 1858 memorial addressed by the fishermen of a coastal parish to a harbour commission. The signers are invented.<br><br>We are told that the new breakwater has made the harbour safe, and the register of wrecks agrees: none in four years, where before there were nine. We do not dispute the register. We ask the commission to read it beside the other book. Since the breakwater was built, the sand that the tide once carried out has stayed, and the channel a loaded boat needs has closed from eleven feet to four. A harbour that cannot be left is safe in the way a locked room is safe. We ask that the channel be dredged each spring, and we will bear half the cost.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'The breakwater has prevented every wreck for four years.',
        B:'The commission should take out the breakwater it built.',
        C:'Harbour works always cause problems as bad as the ones they solve.',
        D:'The breakwater’s safety record hides a silting problem the signers want fixed.'
      },
      correct:'D',
      expCorrect:'The signers accept the wreck register — “We do not dispute the register” — and ask that it be read “beside the other book”: the channel has closed from eleven feet to four. The request that follows is spring dredging, with half the cost offered.',
      expWrong:{
        A:'This is the fact the memorial concedes in its first sentence in order to add the one that follows it.',
        B:'No such request is made. What the signers ask for is dredging each spring, not removal of the breakwater.',
        C:'Too broad: the memorial argues about one harbour and one consequence, and offers to pay for the remedy.'
      },
      tip:'A document that concedes a statistic and then says read it beside is telling you where its idea is: in the second measurement, not the first.'
    },
    {
      id:'CDC-28', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Details — stated detail (poetry)',
      passage:"The following text is from Lior Weekes’s poem “Tide Clock.”<br><br>My uncle’s clock has one slow hand<br>and will not tell you when to eat.<br>It rides the moon and not the sun,<br>and loses twelve hours in a month.<br>He never set it right for that.<br>He set it right the year he stopped<br>taking the boat beyond the bar,<br>and left it running out of step.",
      stem:'According to the text, when did the uncle last set the clock right?',
      choices:{
        A:'In the year he stopped taking his boat past the bar.',
        B:'In the month in which the clock had lost twelve hours.',
        C:'On the day he first hung the clock up on his wall.',
        D:'Each time the moon and the sun had fallen out of step.'
      },
      correct:'A',
      expCorrect:'The poem sets the two occasions against each other: he “never set it right” for the monthly drift, and “He set it right the year he stopped / taking the boat beyond the bar.”',
      expWrong:{
        B:'The twelve-hour drift is the one thing he refuses to correct: “He never set it right for that.”',
        C:'The poem never mentions hanging the clock. The only setting it dates is the year he stopped going out.',
        D:'The clock follows the moon rather than the sun, but the poem records no adjustment tied to that.'
      },
      tip:'When a text states one thing in the negative and another in the positive, the positive sentence holds the fact. Never is not an answer to when.'
    },
    {
      id:'CDC-29', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Details — main idea (literary narrative)',
      passage:"The following text is adapted from Aurelia Mbeki’s 1996 novel <i>The Last Stall</i>. Roshan has been photographing a market that is to be demolished.<br><br>For a year I photographed the stalls, and the pictures were good and they were useless. A stall is a wooden frame; a wooden frame photographs as a wooden frame. What I could not get was the arrangement: which trader stood next to which, and why the salt end never moved beside the flowers, and how a woman who arrived in 1962 still held a corner that a newcomer could not buy. So I put the camera down and drew a plan, with names in the squares and arrows for the debts. The plan is not a photograph. It is the only picture of that market I would defend.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Roshan photographed the market stalls for a year before the demolition.',
        B:'Roshan turns from photographs to a drawn plan because the market’s order is its subject.',
        C:'Roshan regrets a year spent on pictures that turned out to be useless.',
        D:'Photographs cannot record anything real about a place that is about to vanish.'
      },
      correct:'B',
      expCorrect:'The passage names what the camera missed — “the arrangement: which trader stood next to which” — and then acts on it: “So I put the camera down and drew a plan, with names in the squares and arrows for the debts,” which is the only picture Roshan would defend.',
      expWrong:{
        A:'True but secondary: the year of photographs is the attempt that fails, and the passage is about what replaces it.',
        C:'Regret is a feeling the passage does not claim. Roshan calls the pictures good as well as useless, and moves on to a different tool.',
        D:'Too broad, and the text undercuts it: the pictures record the frames accurately. What they cannot record is the arrangement.'
      },
      tip:'When a narrator says the work was good and useless in the same breath, the idea is what the uselessness pushes the narrator to do next.'
    },
    {
      id:'CDC-30', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Central Ideas and Details — stated detail (criticism, attributed claims)',
      passage:"The following text is from a 2022 essay on Ilka Prieto’s poetry collection <i>Fieldnotes for a Flood</i>.<br><br>Prieto’s publisher’s note calls the collection a record of the 1997 flood, and reviewers have repeated it. Prieto herself has said something narrower: that the poems record the six weeks after the water went down, and that she was not present for the flood at all. The distinction is not pedantry. A poem written from inside a disaster reaches for scale; a poem written during the cleanup reaches for inventory, and this collection is almost entirely inventory — what was found in a drawer, what was worth drying, whose chair ended up in whose yard. The reviewers’ description flatters the book. Prieto’s is the one the pages support.",
      stem:'According to the text, what has Prieto said that her poems record?',
      choices:{
        A:'The 1997 flood as it was experienced from inside the disaster itself.',
        B:'The objects that reviewers found most memorable in the collection.',
        C:'The six weeks that followed the retreat of the floodwater.',
        D:'The scale of the damage that the flood left behind across the town.'
      },
      correct:'C',
      expCorrect:'The essay reports her own words and marks them as hers: “Prieto herself has said something narrower: that the poems record the six weeks after the water went down, and that she was not present for the flood at all.”',
      expWrong:{
        A:'That is the publisher’s note, repeated by reviewers. The essay ends by saying the pages support Prieto’s account instead.',
        B:'The drawer, the drying, and the chair are the essay writer’s examples of the book’s inventory, not a statement Prieto makes about reviewers.',
        D:'Scale is what the essay assigns to poems written from inside a disaster — the kind this book is said not to be.'
      },
      tip:'When a passage sets two descriptions of the same work side by side, note who said each one. A detail question that names a person is asking for that person’s version, not the true one.'
    },
    {
      id:'CDC-31', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Central Ideas and Details — main idea (poetry)',
      passage:"The following text is from Sabra Whitlock’s poem “The Understudy.”<br><br>Eleven months I learned the part<br>in rooms the audience never sees:<br>the cue, the turn, the counted step,<br>the grief I practised on a chair.<br>They say the work begins at eight<br>on some night when another falls.<br>It does not. What begins at eight<br>is only the least of what I made.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'The speaker spent eleven months learning the part in rooms without any audience.',
        B:'The speaker is bitter about waiting for another performer to fall ill one night.',
        C:'Theatre companies undervalue the understudies that they keep waiting in reserve.',
        D:'The speaker’s real work is the preparation, not a performance that may never come.'
      },
      correct:'D',
      expCorrect:'The poem quotes the common view and refuses it: “They say the work begins at eight … It does not.” What it puts in its place is the eleven months of cues and turns, beside which the night onstage “is only the least of what I made.”',
      expWrong:{
        A:'True but secondary: the eleven months are the evidence, and the last two lines are the claim that evidence supports.',
        B:'The poem states a position about when the work begins. It never says the speaker resents the waiting or wishes anyone ill.',
        C:'Too broad: the speaker argues about what counts as the work, not about how companies treat the people who do it.'
      },
      tip:'When a poem quotes what they say and then answers it, the main idea is the answer. The quotation is there to be contradicted.'
    },
    {
      id:'CDC-32', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Central Ideas and Details — stated detail (literary narrative)',
      passage:"The following text is adapted from Radost Jelen’s 1987 novel <i>The Valley Register</i>. Miss Oruc has taught in a valley that is to be flooded by a new dam.<br><br>The company’s letter said the school would be moved, and it was, stone by numbered stone, to the ridge above the waterline. Miss Oruc did not argue with the move. What she wrote to the company about, twice, was the footpath: eleven families would now send their children four miles around the new shore instead of one mile across the floor of the valley, and the company’s plan showed no path at all along the eastern bank. The second letter enclosed a map she had walked herself, with the distances in her own hand. The company rebuilt the school beautifully and did not build the path.",
      stem:'According to the text, what did Miss Oruc write to the company about?',
      choices:{
        A:'The absence of a path along the eastern bank of the new shore.',
        B:'The company’s decision to move the school stone by stone.',
        C:'The beauty of the rebuilt school on the ridge above the water.',
        D:'The eleven families who would be forced to leave the valley.'
      },
      correct:'A',
      expCorrect:'The passage separates what she accepted from what she contested: “What she wrote to the company about, twice, was the footpath,” because “the company’s plan showed no path at all along the eastern bank.”',
      expWrong:{
        B:'The passage rules this out: “Miss Oruc did not argue with the move.”',
        C:'The rebuilt school is praised by the narration in the last sentence, and only to set up what the company failed to do.',
        D:'The eleven families stay and send their children the long way around. Nothing says they leave the valley.'
      },
      tip:'An option naming something the passage says a character accepted is a distractor by construction. Find the sentence that says what she did contest.'
    },
    {
      id:'CDC-33', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Central Ideas and Details — main idea (historical document, address)',
      passage:"The following text is adapted from an 1874 address to a society of engineers. The speaker is invented.<br><br>I am asked to report on the failure of the Ardley span, and I will disappoint the committee. The iron was sound. The calculations, which I have redone, were sound. The bridge fell because it was inspected in June, in still air, by a man who could only be sent in June, and the load it could not carry arrived with a January wind. Nothing in our practice is wrong except the calendar of it, and the calendar is the one part nobody calls engineering. I ask the society to make the season of an inspection part of its record, and to treat a June report on a winter structure as an incomplete document.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'The Ardley span fell because of faults in its iron and its arithmetic.',
        B:'The committee will be disappointed by the speaker’s report on the span.',
        C:'The speaker asks that the timing of an inspection be treated as engineering.',
        D:'Bridges should not be inspected in months when the weather is calm.'
      },
      correct:'C',
      expCorrect:'The speaker clears away the usual causes — “The iron was sound. The calculations … were sound” — locates the fault in “the calendar,” and turns that into a request: record the season of an inspection and treat a June report on a winter structure as incomplete.',
      expWrong:{
        A:'The address denies both in consecutive sentences, which is exactly why the committee will be disappointed.',
        B:'True but secondary: the disappointment is announced in the first line to prepare the society for a report with no culprit in it.',
        D:'Too strong: the speaker does not want calm-weather inspections banned, only labelled incomplete and paired with the season.'
      },
      tip:'When a speaker rules out the expected causes one by one, the main idea is whatever is left standing plus the change he asks for.'
    },
    {
      id:'CDC-34', type:'mc', domain:'Information and Ideas', difficulty:'Difícil', extreme:true,
      skill:'Central Ideas and Details — stated detail (literary narrative)',
      passage:"The following text is adapted from Csilla Morrow’s 1979 novel <i>The Banked Fire</i>. Marika’s brother owns the bakery; she keeps the oven.<br><br>Her brother believed the oven was hottest at four in the morning, when he lit it, and priced the day’s baking on that belief: the expensive loaves first, the plain ones after. Marika had kept the fire for nine years and knew the brick did not give back an even heat until the second hour. She changed nothing about the schedule. She moved the expensive loaves to the back wall, where the brick had held the night’s heat, and let her brother go on believing what he believed about four in the morning, since the bread came out right either way and he was easier to live with when he was right.",
      stem:'According to the text, what change did Marika make?',
      choices:{
        A:'She began lighting the oven two hours earlier than her brother did.',
        B:'She moved the expensive loaves to the back wall of the oven.',
        C:'She put the plain loaves first in the schedule for the day’s baking.',
        D:'She told her brother that the brick heats unevenly in the first hour.'
      },
      correct:'B',
      expCorrect:'The passage pairs the two sentences on purpose: “She changed nothing about the schedule. She moved the expensive loaves to the back wall, where the brick had held the night’s heat.” The position of the loaves is the only change.',
      expWrong:{
        A:'Not supported: her brother lights the oven at four, and nothing says Marika moved that hour.',
        C:'The text is explicit that “She changed nothing about the schedule,” and the expensive loaves still go first.',
        D:'She deliberately lets him “go on believing what he believed,” so she does not tell him what she knows.'
      },
      tip:'When a passage says a character changed nothing about one thing, the next sentence usually names the one thing she did change. That pair answers the question.'
    }
  ]
});
