/* SAT Studio question set — Reading & Writing: Craft and Structure — Brutal (CSB-01 a CSB-34) */
/* El prefijo BCR ya estaba tomado por sets/rw-brutal-craft.js, asi que este set usa CSB.
   Reparto: 12 Words in Context · 11 Text Structure and Purpose · 11 Cross-Text Connections.
   La clasificacion la decide un regex sobre `skill` + los primeros 160 caracteres del `stem`,
   y dentro de Craft and Structure el orden de prueba es words → cross → structure. Por eso
   ninguna de cross ni de structure dice "meaning", "word choice" ni "most logical and precise",
   y ninguna de structure dice "text 1", "both texts", "paired" ni "disagree". */
(function(){
  window.SAT_SETS.push({
    id: 'rw-brutal-craft-c',
    title: 'Craft and Structure — Brutal',
    section: 'rw',
    level: 'Extreme',
    description: 'Thirty-four Craft and Structure items at the hardest tier: near-synonyms split by connotation, technical senses of ordinary words, verbs ruled out by the preposition they take, underlined sentences that do two jobs at once, structures that look like two examples and are really an objection answered, and paired texts whose authors share the finding and split on what it shows.',
    minutes: 38,
    questions: [

      /* ─────────────── Words in Context (12) ─────────────── */

      {
        id:'CSB-01', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — connotation and the preposition the word takes',
        passage:'Rusnak never concealed where her sea paintings came from. The long horizontal bands, the horizon set high and slightly off level, the refusal of any focal point — all of it is Brayfield’s, and Rusnak said so in print more than once, at a time when saying so cost her buyers. Her canvases are %BLANK% a painter she outlived by forty years, and the acknowledgment is part of what they are about.',
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{
          A:'derivative of',
          B:'indebted to',
          C:'beholden to',
          D:'parasitic on'
        },
        correct:'B',
        expCorrect:'The sentence needs a word that names a debt the painter herself announced and that the passage treats as honorable — “the acknowledgment is part of what they are about.” “Indebted to” names the debt and nothing more: no verdict on the work, no obligation still outstanding.',
        expWrong:{
          A:'“Derivative” is the critic’s verdict that the borrowing produced nothing of its own. The passage never says the canvases fail; it says Rusnak paid for admitting where they came from.',
          C:'“Beholden” names an obligation that constrains you, owed to someone with a hold over you. Brayfield had been dead forty years; there is nothing left to discharge, only a source named.',
          D:'“Parasitic” says the borrower takes without giving and conceals it. The passage records the opposite: she announced the source in print when it cost her sales.'
        },
        tip:'When several near-synonyms name the same relation, sort them twice: by the attitude the word carries (praise, neutrality, contempt) and by the preposition it takes. A word whose grammar will not fit the slot is out before you compare meanings at all.'
      },
      {
        id:'CSB-02', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — the word that contradicts a sentence already written',
        passage:'Halvard spent eleven years measuring refraction before he let the table out of his hands, and he never doubted the arithmetic in it. What he doubted was the brass. His quadrant could not be trusted below two degrees of altitude, and he wrote that whoever inherited a better one should redo the lowest rows and throw his own away. He offered the table as %BLANK%, and the last page of the preface is almost an instruction to replace it.',
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{
          A:'tentative',
          B:'speculative',
          C:'conditional',
          D:'provisional'
        },
        correct:'D',
        expCorrect:'“Provisional” means serving for now and meant to be replaced when something better arrives. That is exactly the instruction in the preface: redo the lowest rows with a better quadrant and throw this one away. The table is finished; its term of service is not.',
        expWrong:{
          A:'“Tentative” puts the doubt in his confidence in the result, and the passage cancels that two sentences earlier: “he never doubted the arithmetic in it.”',
          B:'“Speculative” means reached by conjecture rather than measurement. Eleven years of readings is the opposite of conjecture.',
          C:'“Conditional” requires a stated condition the table depends on — true if such-and-such holds. Halvard states no condition; he states an expiry date, which is a different thing.'
        },
        tip:'Before you choose, reread the two sentences before the blank and ask which options they have already ruled out. A word can fit the blank’s sentence perfectly and still contradict something the author committed to a moment earlier.'
      },
      {
        id:'CSB-03', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — the technical sense of an ordinary word',
        passage:'In a folded sequence the sandstones and the shales do not behave alike. Squeezed between the same two limbs, the shale flows: its layers thicken in the hinge and thin on the flanks without ever parting. The sandstone above it does not flow at all. It snaps into a ladder of clean fractures and keeps the same thickness everywhere. Field geologists call a bed that answers stress in this second way %BLANK%, and mapping a fold means sorting the beds into the two kinds before anything else is attempted.',
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{
          A:'competent',
          B:'resistant',
          C:'capable',
          D:'durable'
        },
        correct:'A',
        expCorrect:'Inside structural geology “competent” is the standing term for a bed stiff enough to hold its thickness and fracture rather than flow — which is the sandstone’s behaviour, spelled out in the two sentences before the blank. The passage supplies the definition and asks you to name it.',
        expWrong:{
          B:'“Resistant” says the bed withstands the stress, and this one does not. It fails; it simply fails by breaking instead of by flowing, which is the distinction the paragraph is drawing.',
          C:'“Capable” is the everyday twin of “competent,” but it describes someone or something able to do a specified thing, and no ability is named in the sentence.',
          D:'“Durable” is about lasting through time — weathering, burial, erosion. The sentence is about how a bed answers one episode of stress, not how long it endures.'
        },
        tip:'When the passage is written from inside a field, expect an ordinary word to be carrying that field’s technical sense. Let the sentences around the blank act as the definition and pick the term they define.'
      },
      {
        id:'CSB-04', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — a verb ruled out by the preposition in the sentence',
        passage:'The Tarnbeck weavers had lost the eight-hour day twice, and their committee had learned what happens to the demand that is traded first. In 1911 they put the shorter week at the head of the list and left it there. They took a smaller rise than the mill offered them in exchange for moving it, refused arbitration twice, and let the strike run three weeks past the day the fund was empty. Whatever else they gave up, they %BLANK% on the forty-eight hours.',
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{
          A:'demanded',
          B:'urged',
          C:'insisted',
          D:'pressured'
        },
        correct:'C',
        expCorrect:'“Insisted on” is the one option that takes the preposition already in the sentence and means refusing to let a point be traded away. Three weeks past an empty fund, with a raise turned down to keep the item in place, is insistence and not merely wanting.',
        expWrong:{
          A:'“Demanded” has the right force and the wrong grammar: you demand a thing, not “demand on” a thing. The preposition standing in the sentence rules it out before meaning is considered.',
          B:'“Urged” is pressing someone else to act, the mildest word in the group — a recommendation, not a refusal — and it takes a person or an action rather than “on.”',
          D:'“Pressured” takes the party being squeezed as its object, as in pressured the mill, and it names applying force rather than holding a position that is under pressure.'
        },
        tip:'When the blank is a verb followed by a preposition, test the preposition first and throw out everything that will not take it. A perfect meaning attached to the wrong preposition is a distractor, never the answer.'
      },
      {
        id:'CSB-05', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — the true word that answers a different question',
        passage:'What the Hollenmark gallery shows is the Nkora funeral dance, and it is danced correctly: the steps are right, the drums are right, the dancers are Nkora. What is gone is everything the dance is for. The debts that are settled in its third hour go unmentioned. The quarrel between the two families who must dance facing each other goes unmentioned. So does the mourning. Visitors leave having seen a %BLANK% version of an hour that in Nkora is unbearable.',
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{
          A:'staged',
          B:'sanitized',
          C:'abridged',
          D:'rehearsed'
        },
        correct:'B',
        expCorrect:'“Sanitized” means cleaned of what is uncomfortable, and the paragraph is a list of exactly what was cleaned out: the debts, the quarrel, the mourning. The steps and the drums survive untouched; only the painful content is missing.',
        expWrong:{
          A:'“Staged” is true of the gallery — visitors are watching a performance — but it names the setting, not the removal the whole paragraph is built on. A word that is accurate and answers a different question is the standard trap here.',
          C:'“Abridged” means shortened, and nothing in the passage says the dance is shorter. What has been taken out is not minutes but difficulty.',
          D:'“Rehearsed” would claim the dancers practised, which the passage neither says nor objects to; it insists the dancing itself is correct.'
        },
        tip:'Check every choice against the sentence AND against the job the paragraph gave that sentence. A choice the passage supports is not automatically the choice the blank is asking for.'
      },
      {
        id:'CSB-06', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — a common word carrying its scientific sense',
        passage:'Every Corrin’s warbler raised in silence still produces the same two-note frame, so the frame is not learned. Everything hung on it is. A male that moves into a new valley at four years old will have taken up the local ending within a season, and a male recorded at nine has dropped phrases he sang at three. Song in this species is %BLANK%: fixed at the base and open to experience for as long as the bird lives.',
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{
          A:'variable',
          B:'flexible',
          C:'adaptable',
          D:'plastic'
        },
        correct:'D',
        expCorrect:'In behavioural biology “plastic” names a trait that experience can reshape, and the colon after the blank states that sense outright: fixed at the base, open to experience for life. The four-year-old learning a new ending and the nine-year-old dropping old phrases are both cases of experience rewriting the song.',
        expWrong:{
          A:'“Variable” would say the song differs from bird to bird, and the passage says the opposite about the part that is inborn: every male raised in silence produces the same two-note frame.',
          B:'“Flexible” names the capacity to bend without breaking and says nothing about learning. A song could be flexible in performance and never change across a life.',
          C:'“Adaptable” claims the changes suit the new conditions. The passage records that the song changes with exposure; whether the new ending serves the bird better is never tested.'
        },
        tip:'A colon or dash right after the blank is usually the definition of the missing word. Read what follows it as the dictionary entry and find the option it defines.'
      },
      {
        id:'CSB-07', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — the word that names how an argument is built',
        passage:'Mensing grants at the outset that not one of her seven considerations settles the question, and her reviewers have agreed with her: every chapter has been answered somewhere. She expected that. Her claim is that the seven fail in different directions, and that an objection strong enough to dispose of all of them at once has never been produced. The case she builds for the thesis is %BLANK%, and readers who take the chapters one at a time will miss it entirely.',
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{
          A:'persuasive',
          B:'conclusive',
          C:'cumulative',
          D:'suggestive'
        },
        correct:'C',
        expCorrect:'The clause after the blank tells you what word is needed: the case is missed by readers who take the chapters one at a time, so its force lives in the seven considerations added together. “Cumulative” is the word for strength that comes from accumulation rather than from any single piece.',
        expWrong:{
          A:'“Persuasive” is about the effect on readers, and the passage reports that effect two sentences earlier: every chapter has been answered. Her reviewers were not persuaded.',
          B:'“Conclusive” contradicts her own opening concession, that not one of the seven settles the question.',
          D:'“Suggestive” matches her modesty but describes a case that points toward a conclusion without arguing for it. Mensing does argue; her claim is about how the arguments combine.'
        },
        tip:'When the blank describes an argument rather than a person, ask what the sentence after it says a careless reader would miss. That clause usually names the property the blank has to supply.'
      },
      {
        id:'CSB-08', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — near-synonyms split by the verdict they carry',
        passage:'Nothing in the Ferrand chapel is applied. The oak carries load, the plaster covers nothing, and the one window sits where it does because the roof needed the wall short there. Visitors expect a cold room and do not find one: the wood holds the afternoon light, and the congregation stays on after the service the way people stay in a kitchen. The room is %BLANK% without being severe, and that distinction is the whole of Ferrand’s argument.',
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{
          A:'spare',
          B:'austere',
          C:'bare',
          D:'ascetic'
        },
        correct:'A',
        expCorrect:'“Spare” means having nothing beyond what is needed, with no verdict attached — the definition of a room in which every element carries load. The sentence then disposes of the harsher options itself with the phrase “without being severe.”',
        expWrong:{
          B:'“Austere” carries severity in its own definition, so “austere without being severe” would make the sentence contradict itself in six words.',
          C:'“Bare” implies that something which ought to be there is missing. The passage argues the reverse: nothing is missing, because nothing was ever applied.',
          D:'“Ascetic” attributes a discipline of self-denial, and to people rather than to rooms. This congregation lingers as if in a kitchen, which is comfort, not renunciation.'
        },
        tip:'Watch for a qualifier attached to the blank — “without being severe,” “though never unkind.” It exists to eliminate the near-synonym that already contains the quality being denied.'
      },
      {
        id:'CSB-09', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — the verb whose idiom will not fit the slot',
        passage:'Ostrander did not drift away from the ballad meter she was raised on. She wrote an essay about leaving it, printed it in a magazine her old teachers read, and set out her reasons: the four-beat line, she said, had begun to think for her. In the same essay she went on recommending the form to younger poets. What she %BLANK% was a habit of her own, publicly and with an argument attached.',
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{
          A:'dispensed',
          B:'discarded',
          C:'abandoned',
          D:'renounced'
        },
        correct:'D',
        expCorrect:'“Renounced” is giving something up formally and in public, with the announcement forming part of the act — an essay, in a magazine her teachers read, with reasons attached. The final phrase, “publicly and with an argument attached,” is the test, and only this word passes it.',
        expWrong:{
          A:'“Dispensed” carries the right sense only inside the phrase “dispense with,” and the sentence hands it a direct object instead. The idiom fails before the meaning is weighed.',
          B:'“Discarded” throws a thing away as worthless, and she kept recommending the form to younger poets in the very same essay.',
          C:'“Abandoned” is leaving something behind with no announcement implied, and the passage opens by refusing the quiet version: she “did not drift away.”'
        },
        tip:'If a word only means what you want inside a fixed phrase, it needs that phrase to be in the sentence. Read the blank with the words on both sides before you accept a definition.'
      },
      {
        id:'CSB-10', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — the neutral report against the word that judges',
        passage:'Bettinger photographed the crystals in 1894, and after that no working chemist defended the fluid model in a laboratory. The textbooks took thirty-one years to catch up. Through the 1900s and the 1910s the fluid diagrams %BLANK% in chapter four of the standard course, redrawn each edition by printers who had no reason to ask, while the students copying them were examined on a picture their own instructors no longer believed.',
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{
          A:'endured',
          B:'lingered',
          C:'survived',
          D:'persisted'
        },
        correct:'B',
        expCorrect:'“Lingered” is the only word here that carries the author’s judgement: staying on past the time when one should have gone. The sentence supplies that judgement — thirty-one years after no chemist would defend the model, students were still examined on it.',
        expWrong:{
          A:'“Endured” credits the diagrams with withstanding something, which is the reverse of what happened: after 1894 nobody tested them again, they were only reprinted.',
          C:'“Survived” implies a threat faced and outlasted. These diagrams faced none — printers redrew them because no one asked.',
          D:'“Persisted” is the neutral report that they continued, and it would leave the sentence saying only that they were still there, dropping the disapproval the rest of the paragraph has spent four clauses building.'
        },
        tip:'When three options are neutral and one is loaded, decide first whether the author is reporting or judging. A paragraph that piles up the cost of something is judging, and it wants the loaded word.'
      },
      {
        id:'CSB-11', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — the technical term the conclusion requires',
        passage:'Two hundred clerks in Bruges wrote the same Gothic cursive, taught the same way and legible to the same readers, and on a poor photograph they cannot be told apart. Rooij does not work from the photograph. She works from where the pen lifts inside a double l, from a g whose lower loop never closes, from the width of the gap after a capital. Three receipts in Antwerp carry that same %BLANK%, so one man wrote them.',
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{
          A:'script',
          B:'style',
          C:'hand',
          D:'character'
        },
        correct:'C',
        expCorrect:'In paleography a “hand” is the writing of one individual, which is precisely what the conclusion needs: “so one man wrote them.” Rooij’s evidence — a pen-lift, an unclosed loop, a habitual gap — are marks of a person, not of a system.',
        expWrong:{
          A:'“Script” is the system itself, the Gothic cursive, and the passage opens by saying two hundred clerks shared it. Three receipts in the same script would prove nothing about who held the pen.',
          B:'“Style” is looser than either and belongs to a period or a workshop as readily as to a person, so it could not carry the inference to a single man.',
          D:'“Character” in writing means an individual letter-form, so three receipts in the same character would be a claim about one letter rather than about a document.'
        },
        tip:'Read the clause the blank has to support before you choose. Here the conclusion is “one man wrote them,” and only a word that already means one person can license it.'
      },
      {
        id:'CSB-12', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — a word about feeling where the sentence is about procedure',
        passage:'Vanthuys loved the salt flats and never pretended otherwise; the letters are full of it, and she wept at the auction when the last prints left her. None of that reaches the negatives. The same lens, the same hour, the same three hundred meters from the edge, for eleven years, and she threw out any frame in which the light had turned interesting. Her procedure was %BLANK% to the point of monotony, and the pictures are colder than the woman who made them.',
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{
          A:'clinical',
          B:'perfunctory',
          C:'dispassionate',
          D:'methodical'
        },
        correct:'D',
        expCorrect:'The list before the blank is a list of rules followed without variation for eleven years — same lens, same hour, same distance — so the blank has to describe procedure. “Methodical” means done by a fixed method, and “to the point of monotony” confirms it: monotony is what unvaried repetition produces.',
        expWrong:{
          A:'“Clinical” says the manner is cold and unfeeling, which the end of the same sentence already covers, and it would leave “to the point of monotony” with nothing to attach to.',
          B:'“Perfunctory” means done with the least possible care, and the paragraph contradicts it: discarding every frame with interesting light for eleven years is care, not indifference.',
          C:'“Dispassionate” describes judgement made free of feeling, and the blank falls on her procedure — the lens, the hour, the distance — not on any verdict she reached.'
        },
        tip:'Identify the noun the blank modifies before you weigh the options. Words about temperament and words about method are easy to confuse until you notice that the sentence is describing one and not the other.'
      },

      /* ─────────────── Text Structure and Purpose (11) ─────────────── */

      {
        id:'CSB-13', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Text Structure and Purpose — function of the underlined sentence',
        passage:'The Kellsworth conglomerate was mapped for a century as a beach deposit, and its cobbles are certainly rounded. Ackroyd’s re-survey turned up something the earlier maps had no reason to record: the cobbles grow larger upward through each of the nine beds rather than downward, and every bed rests on a surface that was cut rather than buried. <u>A beach sorts what the waves bring it; a debris flow carries whatever the slope gives it and drops the heaviest last.</u> Ackroyd’s beds are the second thing, and the coastline the old maps drew across this valley has to be moved.',
        stem:'Which choice best describes the function of the underlined sentence (“A beach sorts what the waves bring it; a debris flow carries whatever the slope gives it and drops the heaviest last.”) in the text as a whole?',
        choices:{
          A:'It supplies the rule that turns Ackroyd’s upward-coarsening beds into an argument against the beach reading.',
          B:'It states a general contrast between two of the ways in which loose sediment can come to be deposited.',
          C:'It concedes that the rounded cobbles are consistent with the beach deposit that the older maps recorded.',
          D:'It explains why the earlier surveyors had no reason to record the size of the cobbles in each of the beds.'
        },
        correct:'A',
        expCorrect:'The sentence does two things, and only one of them is its function here. It states a contrast, yes — but the contrast is placed between Ackroyd’s observation and the conclusion drawn from it, and it is what lets the observation decide. Without the rule, “larger upward” is a curiosity; with it, it is a disproof.',
        expWrong:{
          B:'This is what the sentence SAYS, which is why it is the most tempting option in the set. The question asks what the sentence DOES, and a general contrast sitting on its own would be doing nothing in this paragraph.',
          C:'No concession is made there. The rounded cobbles are granted in the first sentence, before Ackroyd appears, and the underlined sentence never mentions them.',
          D:'The reason earlier surveyors recorded nothing is given in the sentence before, where the new observation is introduced. The underlined sentence says nothing about surveyors at all.'
        },
        tip:'When an underlined sentence states a general principle, ask what the sentences on either side of it need. A principle placed between an observation and a conclusion is functioning as the criterion that joins them, not as a stray remark.'
      },
      {
        id:'CSB-14', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Text Structure and Purpose — overall structure of the passage',
        passage:'The Varnhold boot shops paid by the piece until 1926, and the move to an hourly wage is usually told as a victory won at the bench. It was in fact drafted inside the owners’ association. Anyone who knows the trade will object that owners do not hand out hourly wages, and the objection is fair: the association had just watched three shops lose a season to rework, and a hand who is not racing ruins less leather. The men got the wage they had asked for twice. They got it in the year it stopped costing anything to give.',
        stem:'Which choice best describes the overall structure of the text?',
        choices:{
          A:'It presents two explanations of one change and then declines to choose between them.',
          B:'It corrects the usual account of a change, raises the obvious objection to the correction, and answers it.',
          C:'It gives two examples of owners acting against their own interest and draws a general lesson from them.',
          D:'It argues that the hourly wage was a victory won at the bench and explains how the men managed to win it.'
        },
        correct:'B',
        expCorrect:'Four moves in order: the standard story (a victory at the bench), the correction (it was drafted in the owners’ association), the objection that correction invites (owners do not give wages away), and the answer to it (rework was costing them a season). The closing two sentences are the answer restated.',
        expWrong:{
          A:'Nothing is left open. The passage states flatly that the wage was drafted in the association and then explains why, which is choosing.',
          C:'This reads the rework sentence as a second example rather than as the reply to an objection. There is only one change in the passage, and the rework is the reason behind it, not a parallel case.',
          D:'This is the account the first sentence reports and the second sentence overturns. Handing the passage the view it exists to correct is the standard misreading of a text that opens with “is usually told as.”'
        },
        tip:'“Anyone will object that…” followed by “and that is fair” is one movement, not two. Count objection-and-answer as a single step or you will read every rebuttal as a second example.'
      },
      {
        id:'CSB-15', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Text Structure and Purpose — main purpose of the passage',
        passage:'Ilva Sandoyan bands swifts to find out where they winter, and she has now put geolocators on ninety birds from a single tower. Her reports are about routes. But the tower comes down in March, and the only reason anyone knows that ninety swifts use it is that Sandoyan was standing there for an entirely different purpose. Migration work is slow and expensive, and it is producing, as a by-product, the only continuous record we have of which buildings still hold colonies. That record, not the routes, is what the demolition office should be reading.',
        stem:'Which choice best states the main purpose of the text?',
        choices:{
          A:'To report the wintering grounds that Sandoyan’s geolocators identified for the swifts of one tower.',
          B:'To explain why attaching geolocators to swifts remains a slow and expensive way to study migration.',
          C:'To fault Sandoyan for studying migration routes at a time when the tower itself was already at risk.',
          D:'To argue that a by-product of migration research is the evidence that building decisions now need.'
        },
        correct:'D',
        expCorrect:'The researcher’s purpose and the author’s purpose are different people’s purposes. Sandoyan is after routes; the author is after the last sentence, which says the colony record — not the routes — is what the demolition office should read. Everything before it sets up that recommendation.',
        expWrong:{
          A:'This is Sandoyan’s purpose, taken over as the author’s. The passage never reports where the swifts winter, and the routes are named twice only to be set aside.',
          B:'The cost and slowness appear in one subordinate clause, as the reason the by-product is scarce and valuable. A detail that explains the argument is not the argument.',
          C:'No fault is found. The passage treats her other purpose as the lucky accident that produced the record, which is praise for the by-product rather than criticism of the researcher.'
        },
        tip:'In a passage built around one researcher, ask whose purpose the question wants. The author’s purpose is usually visible in the sentence that recommends, warns, or reframes — normally the last one.'
      },
      {
        id:'CSB-16', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Text Structure and Purpose — function of the underlined sentence',
        passage:'Every account of promising has to explain why a promise still binds after the reason for making it is gone. Tolbert’s answer is that the promise creates the reason, and for two centuries that has satisfied most readers. Hume’s pupils object that nothing can create the reason for its own authority. Tolbert’s defenders reply that neither can a signature, and we honour those. <u>What no one on either side has said is what happens when the person promised to is the one who has changed.</u>',
        stem:'Which choice best describes the function of the underlined sentence (“What no one on either side has said is what happens when the person promised to is the one who has changed.”) in the text as a whole?',
        choices:{
          A:'It settles the dispute by showing that the objection to Tolbert applies equally to signatures.',
          B:'It restates the answer Tolbert gives, in the terms that his later defenders came to prefer.',
          C:'It names a case that neither side has addressed, leaving the debate open rather than closing it.',
          D:'It concedes that Tolbert’s account of promising has satisfied most readers for two centuries.'
        },
        correct:'C',
        expCorrect:'The sentence sits in the closing position and takes the grammatical shape of a verdict, but its content is a gap: “what no one on either side has said.” It does not judge between Tolbert and the objectors. It points at a case both of them left alone, which reopens the question the paragraph appeared to be finishing.',
        expWrong:{
          A:'That is the defenders’ reply, given in the sentence before the underlined one. Handing their argument to the closing sentence also turns an unresolved debate into a settled one.',
          B:'Tolbert’s answer is about the promise creating the reason. The underlined sentence changes the subject to the promisee, which is a person neither Tolbert nor his defenders has discussed.',
          D:'The two centuries of satisfied readers are reported earlier, as background. A sentence that begins “what no one has said” is withholding agreement, not granting it.'
        },
        tip:'Last position is not the same as conclusion. Read what the final sentence actually asserts: if it names something unexamined, its function is to open the question, however final it sounds.'
      },
      {
        id:'CSB-17', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Text Structure and Purpose — overall structure of the passage',
        passage:'The complaint against Adeyemi’s late portraits is that the hands are wrong, and the complaint is correct. The knuckles sit too high, the thumb is short, and no amount of squinting repairs it. What the complaint has never explained is why the hands are wrong in the same way on every canvas after 1971, and why in the four unfinished panels the hands were laid in first. A painter losing his skill does not lose it in one direction only, and does not begin with the part he can no longer do.',
        stem:'Which choice best describes the overall structure of the text?',
        choices:{
          A:'It states a criticism, grants that it is accurate, and then sets out two facts the criticism cannot account for.',
          B:'It states a criticism and refutes it by establishing that the hands in the late portraits are drawn correctly.',
          C:'It compares the late portraits with the four unfinished panels and judges the unfinished panels the better work.',
          D:'It traces the decline of a painter’s skill after 1971 and identifies where in the figure that decline first showed.'
        },
        correct:'A',
        expCorrect:'Three movements: the criticism, the concession that it is right about the drawing, and the two facts it leaves unexplained — the identical error on every canvas after 1971 and the hands painted first in the unfinished panels. The closing sentence draws the consequence rather than adding a movement.',
        expWrong:{
          B:'The passage grants the hands are wrong in its first sentence and repeats the fault in the second. It attacks the explanation of the error, never the error itself.',
          C:'The unfinished panels appear as evidence about method — which part was laid in first — and their quality is never assessed or compared with anything.',
          D:'This adopts the very reading the last sentence rejects. The passage argues that a consistent, deliberately begun error is not what a decline in skill looks like.'
        },
        tip:'A passage that concedes a criticism in sentence one is not going to refute it. Look instead for what the criticism fails to explain — that is where the structure turns.'
      },
      {
        id:'CSB-18', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Text Structure and Purpose — function of the underlined sentence',
        passage:'The Ravensmoor cartulary is a fair copy: one scribe, one sitting, not a correction on any leaf. That is why the datings taken from it have always been treated as firm. Bruhn noticed that four of its charters carry a witness who had been eleven years dead by the date the copy assigns him. <u>A fair copy conceals every mistake it inherits and adds a few of its own.</u> The cleanness of the Ravensmoor hand is not evidence of accuracy; it is the reason the errors in it went unread for six centuries.',
        stem:'Which choice best describes the function of the underlined sentence (“A fair copy conceals every mistake it inherits and adds a few of its own.”) in the text as a whole?',
        choices:{
          A:'It states that copies made in a single sitting carry fewer corrections than copies made over many years.',
          B:'It gives the general fact that converts the cartulary’s tidiness from a reason for trust into a reason for suspicion.',
          C:'It introduces the four charters whose witness is shown to have been eleven years dead at the assigned date.',
          D:'It concedes that Bruhn’s own reading of the witness lists may contain mistakes inherited from other scholars.'
        },
        correct:'B',
        expCorrect:'The sentence delivers a general fact about fair copies, and that is what it says. What it does is reverse the paragraph: cleanness was the reason for trusting the datings in sentence two, and after this sentence the same cleanness becomes the reason the errors survived unread. It is the hinge, not a footnote.',
        expWrong:{
          A:'This is a near-restatement of the first sentence, dressed as a generalization. It leaves the paragraph exactly where it was and explains nothing about Bruhn’s dead witness.',
          C:'The four charters are introduced in the sentence before. An underlined sentence that follows an example is rarely introducing it.',
          D:'Bruhn’s reliability is never questioned anywhere in the passage; his finding is what the closing sentence is built on.'
        },
        tip:'For a sentence that states a general truth, compare the paragraph before it with the paragraph after. If the same fact has switched sides, the sentence’s function is to reverse it.'
      },
      {
        id:'CSB-19', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Text Structure and Purpose — main purpose of the passage',
        passage:'Gerbrandt built the Willow Street houses to be cheap, and he said so: the thin walls and the shared stair were how the price came down to what a foreman could pay in 1931. Preservationists now defend them as an experiment in communal living. They were nothing of the kind, and the defence is doing the houses no favours. It invites a rebuttal on the merits of communal living, an argument these houses will lose, when the case that would actually save them is that a foreman could buy one.',
        stem:'Which choice best states the main purpose of the text?',
        choices:{
          A:'To describe the construction methods that allowed the Willow Street houses to be built so cheaply.',
          B:'To establish that Gerbrandt intended the shared stair as a deliberate experiment in communal living.',
          C:'To assess whether communal living arrangements have succeeded in houses built before the war.',
          D:'To warn that a mistaken defence of the houses weakens the strongest case for preserving them.'
        },
        correct:'D',
        expCorrect:'The purpose is in the last two sentences: the preservationists’ defence “is doing the houses no favours,” because it moves the argument onto ground the houses lose and abandons the ground they win. The thin walls and the shared stair are evidence for that warning, not the topic.',
        expWrong:{
          A:'The construction details occupy one clause and exist to show what Gerbrandt was actually after. A passage whose last sentence recommends a strategy is not a description of walls.',
          B:'This is the claim the passage calls “nothing of the kind.” It reverses the author’s position into the position being criticized.',
          C:'Communal living is never evaluated. It is named only as the argument the author wants preservationists to stop having.'
        },
        tip:'When a passage says a defence or an argument backfires, its purpose is almost always the warning itself. Test each option by asking whether the last sentence would follow from it.'
      },
      {
        id:'CSB-20', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Text Structure and Purpose — overall structure of the passage',
        passage:'Nobody at the Institute believed Pellerin’s plates in 1908, and the usual explanation is that her exposures ran too short. The notebooks say otherwise: three of the four referees never asked about exposure at all. What they asked about was the darkroom, which she shared with a photographer who printed for the newspapers. It is tempting to call that snobbery and stop, and the temptation is worth resisting: contamination from commercial chemistry was a real problem that season, and two published plates had already been withdrawn because of it. The referees were wrong about Pellerin. They were not being unreasonable.',
        stem:'Which choice best describes the overall structure of the text?',
        choices:{
          A:'It replaces a standard explanation with a documented one, raises a harsh reading of it, and gives the reason for declining that reading.',
          B:'It offers two reasons the referees rejected the plates and ranks the second of the two as the more important of them.',
          C:'It argues that the referees were right to reject Pellerin’s plates, because her shared darkroom was in fact contaminated.',
          D:'It describes a dispute about exposure times and explains how the taking of longer exposures eventually settled it.'
        },
        correct:'A',
        expCorrect:'Four moves: the usual explanation (short exposures), the documented one (they asked about the darkroom), the harsh reading available at that point (snobbery), and the reason to decline it (contamination was a live problem, two plates withdrawn). The last two sentences hold both halves together: wrong, but not unreasonable.',
        expWrong:{
          B:'The exposure explanation is not one of two reasons; it is the account the notebooks refute. Reading a correction as an addition is what makes this option tempting and wrong.',
          C:'The passage says outright, “The referees were wrong about Pellerin.” It defends the reasonableness of their worry, not the verdict they reached.',
          D:'Exposure times appear only as the explanation being discarded, and nobody in the passage takes a longer exposure or settles anything by doing so.'
        },
        tip:'Distinguish “A, and also B” from “A is wrong, in fact B.” Words like “the usual explanation is” and “the notebooks say otherwise” mark a replacement, and a replacement is one movement rather than two reasons.'
      },
      {
        id:'CSB-21', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Text Structure and Purpose — function of the underlined sentence',
        passage:'Halvorsen’s translators have all had to decide what to do about the third line of each stanza, which in the original runs a syllable short. Kerrigan lengthens it and loses the stumble. Ojeda keeps the short line and pads elsewhere to pay for it. <u>The stumble is not a defect Halvorsen tolerated; it is where the breath goes in the song these poems were written to be sung to.</u> A translator who repairs it has translated a poem that was never written.',
        stem:'Which choice best describes the function of the underlined sentence (“The stumble is not a defect Halvorsen tolerated; it is where the breath goes in the song these poems were written to be sung to.”) in the text as a whole?',
        choices:{
          A:'It reports that the third line of every stanza in Halvorsen’s originals is one syllable short.',
          B:'It concedes that padding the remaining lines of a stanza is a cost worth paying in translation.',
          C:'It explains where a feature the translators treat as a problem came from, and so rules out one of their two solutions.',
          D:'It compares the solution Kerrigan adopted with the one Ojeda adopted and judges Ojeda’s the more faithful of them.'
        },
        correct:'C',
        expCorrect:'Two jobs, one function. The sentence explains the origin of the short line — it is where the singer breathes — and that explanation is what makes Kerrigan’s repair a mistake rather than a preference. The final sentence draws the consequence, which the underlined sentence has already made available.',
        expWrong:{
          A:'The short third line is reported in the opening sentence. The underlined sentence adds why it is there, which is the part the paragraph needed.',
          B:'Padding is Ojeda’s cost, mentioned before the underline. Nothing in the underlined sentence weighs it or approves it.',
          D:'The sentence names neither translator. It rules out one kind of solution by explaining the feature, and the ranking of the two translators is left to the reader.'
        },
        tip:'When an underlined sentence explains where something came from, look at what that origin makes impossible. Explaining a feature and eliminating an option are frequently the same act.'
      },
      {
        id:'CSB-22', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Text Structure and Purpose — main purpose of the passage',
        passage:'For eleven months Ntsikelelo kept a ledger of who lent what to whom in a settlement of four hundred households, and that ledger is now the standard citation for reciprocity in the region. He kept it to settle an argument with his uncle about whether the family was owed more than it owed. The argument was never settled, and the uncle refused to read the book. Fieldwork in this tradition is full of records made for private reasons, and treating them as neutral instruments is what makes them unreliable.',
        stem:'Which choice best states the main purpose of the text?',
        choices:{
          A:'To settle the question of whether Ntsikelelo’s family was owed more than it owed to others.',
          B:'To warn that a widely cited record was made for a private reason its users know nothing about.',
          C:'To describe the system of lending that operates among four hundred households in the settlement.',
          D:'To praise Ntsikelelo for keeping a ledger for eleven months without once missing an entry in it.'
        },
        correct:'B',
        expCorrect:'The subject’s purpose was to win a family argument; the author’s purpose is the last sentence, which generalizes from that mismatch to a warning about the whole tradition. The eleven months and the four hundred households are there to make the warning bite: this is the standard citation.',
        expWrong:{
          A:'That is Ntsikelelo’s purpose, and the passage reports that it failed. An author does not adopt the aim of the person he is using as a cautionary case.',
          C:'The lending system is never described. We are told a ledger of it exists and who kept it, and the passage moves immediately to why it was kept.',
          D:'No praise is offered for the ledger-keeping, and the passage never says whether entries were missed. The point is the motive behind the record, not the diligence of it.'
        },
        tip:'Separate the subject’s purpose from the author’s every time a passage names both. The author’s is the one the final sentence generalizes; the subject’s is usually the thing the final sentence is warning you about.'
      },
      {
        id:'CSB-23', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Text Structure and Purpose — overall structure of the passage',
        passage:'The Brindl Pass boulders were dated by the lichen growing on them, and the method is sound wherever it has been calibrated: a colony spreads at a known rate, so its diameter gives a minimum age for the surface beneath it. On the pass the largest colonies give 1780. Three of the boulders, though, sit on a soil that radiocarbon puts at 1350, and a soil cannot be younger than the rock lying on top of it. Either the lichen clock runs slower here than where it was calibrated, or these three boulders were moved. Nobody has yet found a way to tell the two apart.',
        stem:'Which choice best describes the overall structure of the text?',
        choices:{
          A:'It sets out a dating method, presents a result that conflicts with it, and closes with two explanations no one can yet choose between.',
          B:'It sets out a dating method and demonstrates that radiocarbon dating is the more reliable of the two methods available.',
          C:'It presents a conflict between two dates and concludes that the three boulders must have been moved after 1350.',
          D:'It explains how lichen colonies spread and why their rate of spread differs from one mountain pass to the next.'
        },
        correct:'A',
        expCorrect:'Three movements and no fourth: the method and why it works, the radiocarbon result that cannot be reconciled with it, and the closing pair of explanations with the flat statement that nobody can separate them. The last sentence looks like a conclusion and is a declaration that there is not one.',
        expWrong:{
          B:'No comparison of reliability is made. The radiocarbon date creates the problem; the passage never says which of the two dates is to be trusted.',
          C:'This picks one of the two explanations the last sentence refuses to choose between, which is exactly the move the passage declines to make.',
          D:'A slower local growth rate is offered as one possible explanation, not as an established fact, and how lichens spread is given in a single clause of the opening sentence.'
        },
        tip:'Read the final sentence before you pick a structure. “Nobody has yet found a way to tell them apart” means the passage ends unresolved, and any option that names a winner is describing a different text.'
      },

      /* ─────────────── Cross-Text Connections (11) ─────────────── */

      {
        id:'CSB-24', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — one measurement, two causes',
        passage:'<b>Text 1</b><br>Adapted from a report by Mette Ravnsborg.<br>The nine terraces above the Kerrow are cut into the same gravel and separated by the same eleven meters. Nine identical steps do not happen by accident. The river was lowered nine times by the same amount, and the only mechanism that lowers a river in equal increments is tectonic: the block beneath the valley rose in nine pulses of roughly eleven meters each.<br><br><b>Text 2</b><br>Adapted from a response by Ivo Tregarth.<br>Ravnsborg’s survey is careful and I get her eleven meters on all nine terraces. But a river does not have to be pushed to cut a terrace; it has to be starved of sediment, and glacial cycles starve rivers on a schedule. Nine equal steps are what a climate that repeats itself produces, and the block need not have moved at all. The regularity Ravnsborg reads as pulses of uplift is the regularity of the ice.',
        stem:'Which choice best describes how Text 2 relates to Text 1?',
        choices:{
          A:'It disputes the eleven-meter spacing that Ravnsborg measured on each of the nine Kerrow terraces.',
          B:'It maintains that terraces cut by a river can never be used to date the movement of the crust beneath.',
          C:'It accepts the terraces exactly as Ravnsborg measured them and offers a different cause for their regularity.',
          D:'It argues that the block beneath the Kerrow valley rose in nine separate pulses of about eleven meters.'
        },
        correct:'C',
        expCorrect:'Tregarth opens by confirming the measurement — “I get her eleven meters on all nine terraces” — so the quarrel is entirely about what produced it. He substitutes repeating glacial cycles for repeating uplift and says so in his last sentence: the regularity is the regularity of the ice.',
        expWrong:{
          A:'Text 2 reproduces the spacing rather than contesting it. His argument needs the nine equal steps to be real, since equal steps are what the glacial cycles are supposed to explain.',
          B:'A much wider claim than Text 2 makes. Tregarth argues that these terraces have another available cause, not that terrace evidence is worthless for dating uplift anywhere.',
          D:'That is Ravnsborg’s conclusion in Text 1, handed to the author who spends his paragraph replacing it.'
        },
        tip:'When the second author repeats the first author’s numbers in the opening line, the fight is never about the numbers. Read on to find the cause being swapped out.'
      },
      {
        id:'CSB-25', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — a condition attached, not a contradiction',
        passage:'<b>Text 1</b><br>Adapted from a study by Cordell Weyms.<br>Where a trade kept its own benefit fund, its members struck longer. Across forty-one disputes in the textile towns, unions with a fund that paid out in week three lasted a median of nineteen days; unions without one lasted six. A strike is a waiting contest, and the side that can eat wins it. Any union that wants leverage should build a fund before it builds a demand.<br><br><b>Text 2</b><br>Adapted from a response by Adaeze Ilori.<br>Weyms’s nineteen days against six is the strongest number in this literature and I do not doubt it. It holds where the employer is a single firm. In the eleven disputes on his own list where the mills bargained as an association, the fund bought a union four extra days and nothing else: an association can outwait any fund a textile town is able to raise. A fund is leverage against one owner and a delay against a cartel.',
        stem:'Based on the texts, how would Ilori (Text 2) most likely respond to Weyms’s advice that a union should build a fund before it builds a demand?',
        choices:{
          A:'By agreeing that the fund comes first and adding that the demand matters far less than its timing.',
          B:'By denying that the unions with a benefit fund struck any longer than the unions without one did.',
          C:'By concluding that benefit funds gave the unions no leverage in any of the forty-one disputes listed.',
          D:'By accepting the advice where a union faces one firm and limiting it where the employers bargain together.'
        },
        correct:'D',
        expCorrect:'Ilori calls the nineteen-against-six “the strongest number in this literature” and then attaches a condition: it holds against a single firm. Where the mills bargained as an association, the same fund bought four days. Her closing sentence states both halves at once — leverage against one owner, delay against a cartel.',
        expWrong:{
          A:'Timing of the demand is never her subject. She distinguishes kinds of employer, not moments in a campaign, and she does not endorse the advice without qualification.',
          B:'She endorses the comparison in her first sentence. The eleven association disputes are drawn from Weyms’s own list precisely because she accepts the list.',
          C:'Too strong, and contradicted by her own figure: against a single firm the fund is worth thirteen extra days, and even against an association it buys four.'
        },
        tip:'A second text that says “this holds where…” is narrowing a claim, not refuting it. The right answer keeps the first author’s result standing inside the boundary the second author draws.'
      },
      {
        id:'CSB-26', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — a general position that does not reach this claim',
        passage:'<b>Text 1</b><br>Adapted from a paper by Lucienne Abrioux.<br>Nest boxes work. On the Hadden estate the boxes we put up in 2011 now fledge more pied flycatchers each June than the estate’s natural cavities do, and the breeding population has tripled. Boxes are cheap, they are easy to monitor, and any woodland short of old trees can have a breeding population within three years.<br><br><b>Text 2</b><br>Adapted from a response by Tor Hjelmeland.<br>Abrioux’s flycatchers are real and her tripling is real. What a box does is remove a shortage of holes; where holes are not the shortage, it removes nothing. On our own plots the boxes filled and the population did not move, because the birds here are held down by the timing of the caterpillars rather than by cavities. Before a box goes up, somebody has to show that a hole is what is missing.',
        stem:'Based on the texts, how would Hjelmeland (Text 2) most likely respond to Abrioux’s claim that her boxes tripled the flycatcher population on the Hadden estate?',
        choices:{
          A:'By accepting the tripling and explaining it as the removal of a shortage that was genuine on that estate.',
          B:'By arguing that nest boxes do not raise flycatcher numbers, since on his own plots the boxes changed nothing.',
          C:'By questioning whether the boxes on the Hadden estate were monitored closely enough to count the fledglings.',
          D:'By proposing that caterpillar timing rather than a shortage of cavities was holding the Hadden flycatchers down.'
        },
        correct:'A',
        expCorrect:'He grants the tripling in his first line and then supplies the mechanism: a box removes a shortage of holes. On Hadden the holes evidently were the shortage, since the population tripled. His quarrel is with the leap in Abrioux’s last sentence — “any woodland” — not with her estate.',
        expWrong:{
          B:'This is his general position, and it is the strongest wrong answer here because he does hold it. He does not hold it about Hadden: he opens by calling her tripling real, which is the one claim the question asks about.',
          C:'Monitoring is never questioned; he calls her numbers real, and his own argument depends on box occupancy being countable.',
          D:'He says caterpillar timing limits the birds on HIS plots. Applying it to Hadden would contradict the tripling he has just accepted.'
        },
        tip:'When the question names one specific claim, do not answer with the author’s overall position. Find the sentence in Text 2 that touches that claim, and check whether it grants it before it limits anything.'
      },
      {
        id:'CSB-27', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — a quarrel about how far the argument reaches',
        passage:'<b>Text 1</b><br>Adapted from an essay by Perrin Oduya.<br>A rule that admits an exception is not a rule; it is a habit with good press. Once you allow that a promise may be broken to prevent a catastrophe, you have conceded that promises bind only when nothing important is at stake, which is not binding at all. The force of an obligation is that it does not consult the consequences.<br><br><b>Text 2</b><br>Adapted from a response by Halle Shand.<br>Oduya has described the promise to meet for dinner, and about that promise he is right: a small obligation that bends whenever something better turns up has no content left. But his argument is doing service as a claim about obligations in general, and a catastrophe is not something better turning up. Between a rule that never yields and a habit with good press there is a third thing — a rule with a stated limit — which is what most people take a promise to be.',
        stem:'Which choice best describes how Text 2 responds to Text 1?',
        choices:{
          A:'It denies that a promise to meet someone for dinner creates any obligation on the promiser at all.',
          B:'It grants Oduya’s reasoning for ordinary obligations and denies that the reasoning carries to every case.',
          C:'It agrees that a rule admitting an exception is only a habit and then applies that point more widely still.',
          D:'It argues that a promise ought to be broken whenever the consequences of keeping it would be bad ones.'
        },
        correct:'B',
        expCorrect:'Shand concedes the small case explicitly — “about that promise he is right” — and then objects to the reach: the argument “is doing service as a claim about obligations in general.” Her third option, a rule with a stated limit, is what she thinks survives outside the dinner case.',
        expWrong:{
          A:'She says the reverse. Her concession is that a dinner promise which bends for anything better has no content, which is an argument for its binding force, not against it.',
          C:'She restricts the point rather than extending it. Agreeing and applying it more widely would leave her with no disagreement to state.',
          D:'Far broader than her position. She allows a limit stated in advance for catastrophes, not a licence to break promises whenever the consequences look bad.'
        },
        tip:'Some disagreements are about scope alone: both authors accept the same reasoning, and one of them denies it travels. Ask what size of case each author has in view before you decide they disagree about the principle.'
      },
      {
        id:'CSB-28', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — the same evidence, a different question',
        passage:'<b>Text 1</b><br>Adapted from a catalogue essay by Ileana Bragg.<br>The underdrawing beneath the Marchmont Altarpiece is by one hand and the paint is by three, and the X-rays leave no room to argue about it. The master drew every panel and then let the shop finish them. That is not a compromise; it is the method the period called invention. What hangs on the wall is a designed object, and the design is entirely his.<br><br><b>Text 2</b><br>Adapted from a response by Joachim Petteril.<br>The X-rays show what Bragg says they show, and one hand made the drawing. What the drawing does not fix is the thing we go to this altarpiece for. The blue of the third panel is a decision taken at the easel by somebody who was not the master, and so is the light on the Magdalene’s arm. A design is a set of instructions; an altarpiece is what happens when three people carry them out.',
        stem:'Which choice best describes how Text 2 relates to Text 1?',
        choices:{
          A:'It disputes Bragg’s reading of the X-rays, arguing that more than one hand made the underdrawing.',
          B:'It argues that the painters of the shop were more skilful than the master who drew the panels.',
          C:'It grants that one hand made the underdrawing and denies that the design settles who made the work.',
          D:'It concludes that the Marchmont Altarpiece ought to be attributed to three painters instead of one.'
        },
        correct:'C',
        expCorrect:'Petteril’s first sentence concedes the physical evidence and the single drawing hand. His disagreement is about what that evidence settles: the blue and the light were decided at the easel, so the design is instructions and the altarpiece is the execution. Same X-rays, different question.',
        expWrong:{
          A:'The X-rays are conceded in the opening clause. Nothing in Text 2 proposes a second hand in the underdrawing.',
          B:'Skill is never compared. He argues that decisions were made by the painters, which is a claim about authorship rather than about ability.',
          D:'He stops short of a new attribution. His point is that the design does not settle the question, not that the shop should get the credit line.'
        },
        tip:'Agreement about the evidence plus disagreement about what it establishes is the commonest paired-text relation on this test. The right answer usually contains both a concession and a denial.'
      },
      {
        id:'CSB-29', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — the condition the first author left unstated',
        passage:'<b>Text 1</b><br>Adapted from a report by Wynn Dalgarno.<br>The courtyard blocks on the Fairlop scheme cost eleven percent more per unit than the slabs built the same year, and thirty years on their maintenance bill is half. Residents stay four times as long. Anyone comparing the two forms on the day the keys are handed over is comparing the wrong number: on any horizon past a decade, the courtyard is the cheap option.<br><br><b>Text 2</b><br>Adapted from a response by Sabine Ilford.<br>Dalgarno’s figures are the best we have and I have used them myself. They describe a scheme whose courtyards were maintained by a single landlord who owned every unit around them. On the four schemes since where the units were sold off individually, the courtyard has nobody to bill and nobody to sweep it, and its maintenance line is now the highest of any form we build. The courtyard is the cheap option where somebody owns the middle.',
        stem:'Based on the texts, how would Ilford (Text 2) most likely respond to Dalgarno’s conclusion that the courtyard is the cheap option on any horizon past a decade?',
        choices:{
          A:'By showing that courtyard blocks cost eleven percent more per unit than the slabs raised in the same year.',
          B:'By arguing that the courtyard form is dearer than the slab over every horizon that anyone has yet measured.',
          C:'By concluding that residents of courtyard blocks stay longer only where a single landlord maintains them.',
          D:'By accepting the conclusion for schemes under one owner and withdrawing it where the units were sold off.'
        },
        correct:'D',
        expCorrect:'Ilford calls the figures “the best we have,” then identifies the unstated condition behind them: one landlord owned every unit around the courtyard. On the four later schemes with individual owners the maintenance line is the highest of any form. Her last sentence keeps Dalgarno’s conclusion and bolts the condition onto it.',
        expWrong:{
          A:'The eleven percent is Dalgarno’s own figure and it is the cost he tells readers to ignore. Repeating it is not a response to the conclusion he draws.',
          B:'She does not generalize that far. Under a single owner she accepts his numbers, so the courtyard is dearer only on the schemes that were sold off.',
          C:'Length of tenancy is Dalgarno’s evidence and Ilford never revisits it. Her subject throughout is who pays for the middle, not how long people stay.'
        },
        tip:'Look for the sentence in Text 2 that describes the conditions of the first study. When the second author says “they describe a scheme where…”, the answer is a limit, and the limit is whatever that sentence names.'
      },
      {
        id:'CSB-30', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — a result that stops at the workshop door',
        passage:'<b>Text 1</b><br>Adapted from a study by Rhiannon Oakes.<br>The scribes of the Ledgemoor workshop cannot be told apart by their letter-forms, which they were trained to share, but they can be told apart by their ruling. Each of the six ruled his page with a habitual gap above the first line, and that gap is stable across twenty years and forty books. Ruling, not lettering, is where a medieval scribe leaves his signature.<br><br><b>Text 2</b><br>Adapted from a response by Emmerich Slade.<br>Oakes’s six scribes do rule differently, and I have measured her forty books myself. The claim that grows out of it is too large. Ledgemoor produced books for one house and ruled with a board the workshop owned; a scribe who moved to a second house carried his letter-forms with him and left the board behind. In the eleven cases where we can follow a scribe across two houses, the ruling changes and the lettering does not.',
        stem:'Which choice best describes how Text 2 responds to Text 1?',
        choices:{
          A:'It accepts the Ledgemoor result and denies that it holds once a scribe has left that workshop.',
          B:'It rejects Oakes’s measurements of the gap above the first line in the forty Ledgemoor books.',
          C:'It maintains that letter-forms are the only reliable means of identifying a medieval scribe.',
          D:'It reports that each of the six Ledgemoor scribes ruled with a habitual gap above the first line.'
        },
        correct:'A',
        expCorrect:'Slade says he measured the forty books himself and that the six do rule differently; what he rejects is the sentence Oakes builds on top — ruling is where a scribe leaves his signature. His eleven cross-house cases show the ruling changing and the lettering holding, so the result stops where the workshop’s board does.',
        expWrong:{
          B:'He confirms the measurements in his opening line. His whole objection depends on the six scribes really ruling differently inside Ledgemoor.',
          C:'Wider than anything he claims. His cases show lettering staying constant across two houses, which is not the same as showing it can identify an individual — and Text 1’s point that the six share their letter-forms goes unchallenged.',
          D:'This is Oakes’s finding restated. A response that only repeats what Text 1 established has not responded to it.'
        },
        tip:'Separate the finding from the slogan the first author draws from it. A second text often accepts the finding whole and attacks only the sentence that generalizes it.'
      },
      {
        id:'CSB-31', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — the same pattern, the cause moved one step back',
        passage:'<b>Text 1</b><br>Adapted from a lecture by Ferdinand Oyelade.<br>The Institute rejected eleven of the fourteen papers women submitted in 1902 and three of the nineteen submitted by men. The referees’ reports survive and they are polite. They are also, in nine of the eleven, objections to the length of the run of observations — a standard the accepted papers by men did not meet either. The reports show the bar moving.<br><br><b>Text 2</b><br>Adapted from a response by Solveig Ranke.<br>Oyelade’s counts are right and the reports say what he says they say. Nine of those eleven women worked at the college observatory, which had one telescope and a two-hour nightly allocation. Short runs were the only runs they could produce. The referees applied a real standard to work the college had made it impossible to do well, and the injustice sits one step earlier than Oyelade puts it.',
        stem:'Based on the texts, how would Ranke (Text 2) most likely respond to Oyelade’s claim that the referees’ reports show the bar moving?',
        choices:{
          A:'By disputing his count of how many of the papers submitted in 1902 the Institute went on to reject.',
          B:'By granting the pattern and placing its cause in the observing time the college allowed rather than in the referees.',
          C:'By arguing that the referees were right to reject papers that rested on short runs of observations.',
          D:'By showing that the papers accepted from men rested on runs of observations as short as the women’s.'
        },
        correct:'B',
        expCorrect:'Ranke accepts the counts and the reports in her first sentence, then relocates the cause: nine of the eleven women shared one telescope and two hours a night, so short runs were all they could make. Her closing line says it outright — the injustice “sits one step earlier” than the referees’ desk.',
        expWrong:{
          A:'She opens with “Oyelade’s counts are right.” The rejection figures are common ground between the two texts.',
          C:'She says the standard was real, not that applying it was right. Her sentence calls the outcome an injustice and moves its source; it does not defend the rejections.',
          D:'That is Oyelade’s own evidence in Text 1, the observation on which his moving bar rests. Text 2 neither repeats it nor needs it.'
        },
        tip:'“The injustice sits one step earlier” is a relocation, not a denial. When Text 2 accepts the pattern and changes where it starts, the answer must contain the concession as well as the new cause.'
      },
      {
        id:'CSB-32', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — a prediction that works for the wrong reason',
        passage:'<b>Text 1</b><br>Adapted from a monograph by Tamsin Oduor.<br>Households in Kessel that hosted the harvest meal in one year received help with their roofing in the next, in fifty-two of the sixty cases I recorded. The meal is not hospitality; it is a claim filed. Anyone who wants to know what a Kessel household is owed should count the meals it has given.<br><br><b>Text 2</b><br>Adapted from a response by Bram Nuttall.<br>Oduor’s fifty-two of sixty is solid and it matches what I recorded in two neighbouring villages. But in Kessel the meal is given by the household that has had the best year, and the household that has had the best year is also the one with a roof worth repairing and with neighbours who expect to be asked. Counting meals will predict the roofing correctly and will still be counting the wrong thing.',
        stem:'Based on the texts, how would Nuttall (Text 2) most likely respond to Oduor’s advice that counting a household’s meals will tell you what that household is owed?',
        choices:{
          A:'By rejecting the figure of fifty-two of sixty as too small a sample to carry a claim of that size.',
          B:'By arguing that counting meals fails to predict which households will receive help with their roofing.',
          C:'By agreeing that meals predict the help a household receives while denying that the meals are what earn it.',
          D:'By recommending that the count be extended to cover the two neighbouring villages he recorded himself.'
        },
        correct:'C',
        expCorrect:'His last sentence states both halves: counting meals “will predict the roofing correctly” and “will still be counting the wrong thing.” The prediction holds because a good year produces both the meal and the roof worth repairing, so the meal tracks the debt without creating it.',
        expWrong:{
          A:'He calls the figure solid and reports the same pattern in two other villages. Sample size is not his objection anywhere.',
          B:'The opposite of his sentence. He concedes the prediction works and attacks the explanation attached to it.',
          D:'The neighbouring villages appear as corroboration of Oduor’s number, not as a proposal for more fieldwork.'
        },
        tip:'A second author who says a rule predicts correctly and still gets things wrong is attacking the mechanism, not the correlation. The answer will concede the prediction in the same breath that it denies the explanation.'
      },
      {
        id:'CSB-33', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — same proposal, different reason for it',
        passage:'<b>Text 1</b><br>Adapted from an introduction by Nell Vantriggen.<br>Bassey wrote the Harbour Poems in six weeks in 1948 and never revised them, and it shows in the best possible way: the line breaks fall where a speaking voice would stop. Editors who have since regularized her punctuation have made the poems tidier and quieter. The manuscripts should be printed as she left them, commas and all.<br><br><b>Text 2</b><br>Adapted from a response by Idris Calloway.<br>I would print the manuscripts too, and for Vantriggen’s reason. But the claim that Bassey never revised is a claim about paper we do not have. The six-week story comes from a letter she wrote twenty years afterwards to a publisher who wanted a legend, and two of the eleven surviving drafts are third versions in her own hand. The poems may well sound unrevised; that is a fact about the poems and not about her desk.',
        stem:'Based on the texts, how would Calloway (Text 2) most likely respond to Vantriggen’s proposal that Bassey’s manuscripts be printed exactly as she left them?',
        choices:{
          A:'By rejecting it, on the ground that the eleven surviving drafts show that Bassey did revise the poems.',
          B:'By arguing that the editors who regularized Bassey’s punctuation improved the Harbour Poems as printed.',
          C:'By proposing that the third versions in Bassey’s own hand be printed in place of the later manuscripts.',
          D:'By supporting it while rejecting the account of how the poems were composed that is offered in support.'
        },
        correct:'D',
        expCorrect:'His opening line endorses the proposal and even the reason for it: “I would print the manuscripts too, and for Vantriggen’s reason.” What he refuses is the six-week, never-revised story, which rests on a late letter and is contradicted by two third-version drafts. Agreement on the recommendation, disagreement on the history.',
        expWrong:{
          A:'He accepts the proposal in his first sentence. The drafts are evidence against the composition story, not against printing the manuscripts.',
          B:'Nothing in Text 2 defends the editors. He shares Vantriggen’s preference for the punctuation as Bassey left it, which is what “for Vantriggen’s reason” refers to.',
          C:'He mentions the third versions to show that revision happened, never to propose printing them. His recommendation is the one Text 1 already made.'
        },
        tip:'Agreeing with a conclusion and rejecting the argument for it is a real and common relation. Do not assume that an author who attacks the evidence is against the proposal it was offered to support.'
      },
      {
        id:'CSB-34', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Cross-Text Connections — a correction that fixes half of an object',
        passage:'<b>Text 1</b><br>Adapted from a paper by Hesper Lund.<br>Every coastline on the 1602 Draeven chart is displaced eastward by about four degrees, and the displacement is constant. A constant error is an instrument error. Draeven’s compass was corrected for a declination measured forty years earlier that had since changed; correct the chart by four degrees and the harbours land where they belong.<br><br><b>Text 2</b><br>Adapted from a response by Octave Marn.<br>Lund’s four degrees are right, and her correction does put the harbours in place. It also drives three of the four sounding lines into water two hundred fathoms too deep. Draeven did not survey the whole coast: he copied the southern half from a Portuguese chart and surveyed the northern half himself. One number will not fix two sources, and the fact that it very nearly does is what has kept this chart misread for so long.',
        stem:'Which choice best describes how Text 2 relates to Text 1?',
        choices:{
          A:'It accepts Lund’s correction for the coastlines and shows that it cannot be right for the chart as a whole.',
          B:'It denies that the coastlines on the Draeven chart are displaced eastward by a constant four degrees.',
          C:'It maintains that Draeven surveyed the entire coast himself rather than copying any part of it.',
          D:'It concludes that the Portuguese chart Draeven copied carried the same declination error as his own.'
        },
        correct:'A',
        expCorrect:'Marn grants the four degrees and grants that the harbours land correctly, then produces what the same correction does to the soundings: three of four end up two hundred fathoms too deep. His explanation is two sources, one copied and one surveyed, and his conclusion is that a single number cannot serve both.',
        expWrong:{
          B:'He affirms the four degrees in his first clause. His objection needs Lund’s figure to be right, because it is her own correction that wrecks the soundings.',
          C:'He says the reverse: Draeven copied the southern half from a Portuguese chart and surveyed only the northern half himself.',
          D:'A shared declination error is never claimed, and it would undo his argument — if both sources carried the same error, one number would fix them both.'
        },
        tip:'When Text 2 accepts a correction and then applies it to something the first author did not check, the answer is partial agreement plus a demonstrated limit. Ask what else the fix touches.'
      }

    ]
  });
})();
