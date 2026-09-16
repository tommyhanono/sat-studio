/* SAT Studio question set — Reading & Writing: Standard English Conventions — Core (SEC-01 a SEC-34)
   El nivel MEDIO del dominio: las reglas centrales con las que se falla el examen
   real, en su forma mas comun. 17 de "Boundaries" (SEC-01 a SEC-17) y 17 de
   "Form, Structure, and Sense" (SEC-18 a SEC-34).
   34 MC · 12 Facil · 16 Media · 6 Dificil (2 de las dificiles con extreme:true).

   OJO con el clasificador (SAT_SKILLS en index.html): el matcher de Boundaries se
   prueba ANTES que el de Form y muerde comma / clause / punctuat / colon / dash /
   parenthes / appositive / title. Por eso ninguna pregunta de Form usa esas
   palabras en su "skill"; usan verb, agreement, pronoun, plural, singular,
   possessive, modifier, parallel, antecedent, subject. Si alguna se reescribe,
   revisar que `validar-set.js` siga imprimiendo 17 y 17. */
(function(){
  window.SAT_SETS.push({
    id: 'rw-conv-c',
    title: 'Standard English Conventions — Core Rules',
    section: 'rw',
    level: 'Media',
    description: 'Seventeen Boundaries questions and seventeen on Form, Structure, and Sense: where one sentence ends, which fence an interrupter needs, and which word the verb, the pronoun, or the apostrophe belongs to.',
    minutes: 28,
    questions: [

      /* ══ BOUNDARIES (01-17) ══════════════════════════════════════════════ */

      /* ── Dos oraciones completas: las cuatro puntuaciones posibles (01-04) ── */
      {
        id:'SEC-01', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Boundaries: the period, because the next word is capitalized',
        passage:'The robotics team meets in the metal shop behind the gym on Wednesday %BLANK% Nobody is allowed near the band saw without a second person in the room.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'nights,', B:'nights', C:'nights.', D:'nights;'},
        correct:'C',
        expCorrect:'Both halves are complete sentences, and the word right after the blank, “Nobody”, is capitalized without being a name. A capital letter means a new sentence has already begun, so the first one has to be closed — and the period is the only mark that both ends one sentence and opens another.',
        expWrong:{
          A:'A lone comma between two complete sentences is the comma splice. On top of that, nothing in the middle of a sentence is followed by a capital letter.',
          B:'With no mark at all the two statements fuse into a run-on, and the capital “Nobody” is left standing in the middle of a sentence.',
          D:'A semicolon does join two complete sentences, but it keeps them inside ONE sentence, so the word after it stays lowercase. Here it is capitalized.'
        },
        tip:'The capital letter after the blank is evidence, not decoration. Commas and semicolons keep you inside a single sentence, so whatever follows them stays lowercase; a capital that is not a name proves the sentence before it is already over.'
      },
      {
        id:'SEC-02', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Boundaries: semicolon between two independent clauses',
        passage:'The depot keeps three spare buses fueled and idling at all %BLANK% a breakdown on the airport route can strand forty riders for an hour.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'times;', B:'times,', C:'times', D:'times; and'},
        correct:'A',
        expCorrect:'Cover the blank and read each side alone. Left: “The depot keeps three spare buses fueled and idling at all times” — complete. Right: “a breakdown on the airport route can strand forty riders for an hour” — complete. Two complete sentences with no conjunction between them are joined by a semicolon.',
        expWrong:{
          B:'A bare comma cannot hold two complete sentences together. This is the comma splice, the single most repeated boundary error on the test.',
          C:'With nothing in the blank the sentences run on, and the reader takes “at all times a breakdown” as one phrase before having to back up.',
          D:'The semicolon and the conjunction do the same job, so writing both doubles the mark. It is either “times; a breakdown” or “times, and a breakdown”.'
        },
        tip:'Two complete sentences can be joined in exactly four ways: a period, a semicolon, a comma plus one of the FANBOYS, or a colon when the second sentence delivers what the first announced. A bare comma is not on the list, and neither is nothing.'
      },
      {
        id:'SEC-03', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Boundaries: comma before a coordinating conjunction joining two clauses',
        passage:'The community radio station runs on fourteen volunteers and one donated %BLANK% it has not missed a Saturday broadcast since 2011.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'transmitter yet', B:'transmitter; yet', C:'transmitter: yet', D:'transmitter, yet'},
        correct:'D',
        expCorrect:'Each side stands alone as a sentence, and “yet” is one of the seven FANBOYS (for, and, nor, but, or, yet, so). A FANBOYS joining two complete sentences takes a comma directly in front of it: “…one donated transmitter, yet it has not missed…”.',
        expWrong:{
          A:'Without the comma the two sentences are fused. A conjunction on its own is not enough once there is a full sentence on each side of it.',
          B:'The semicolon replaces the conjunction; the two never work as a team. Either “transmitter; it has not missed” or “transmitter, yet it has not missed”.',
          C:'A colon promises a list or an explanation, and a conjunction can start neither. The second half here contrasts with the first rather than explaining it.'
        },
        tip:'FANBOYS: for, and, nor, but, or, yet, so. When one of them joins two complete sentences it needs a comma before it — never a semicolon or a colon instead, and never nothing.'
      },
      {
        id:'SEC-04', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries: colon when the second clause delivers what the first promised',
        passage:'After three seasons the coach finally worked out why her forwards faded in the last ten %BLANK% not one player on the roster had ever been taught to breathe through a sprint.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'minutes,', B:'minutes:', C:'minutes', D:'minutes; because'},
        correct:'B',
        expCorrect:'“After three seasons the coach finally worked out why her forwards faded in the last ten minutes” is a complete sentence, and it promises something: the reason. What follows the blank is that reason. The colon is the mark that says “here is the thing I just announced”.',
        expWrong:{
          A:'A comma cannot hold two complete sentences together, and the promise the first half makes is left dangling as if it were an afterthought.',
          C:'With no mark the two halves fuse: “the last ten minutes not one player” has to be read twice before it comes apart.',
          D:'Adding “because” turns the second half into a dependent clause, and a semicolon needs a clause that could stand alone on BOTH sides. It also says out loud what the colon was already saying.'
        },
        tip:'Two tests for a colon: the words in FRONT of it must stand alone as a sentence, and the words after it must deliver something the first half announced — a reason, a list, a name.'
      },

      /* ── Comma splice (05-06) ─────────────────────────────────────────── */
      {
        id:'SEC-05', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries: comma splice created by a transition word',
        passage:'The swim team lost its lane space when the city pool closed for %BLANK% the season is going ahead anyway, with practices at six in the morning in a hotel pool across town.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'repairs, however,', B:'repairs; however', C:'repairs; however,', D:'repairs however,'},
        correct:'C',
        expCorrect:'“However” is a transition word, not a conjunction: it cannot hold two sentences together the way “but” can. The boundary still has to be made, so the semicolon goes before it, and the comma after it sets the transition off from the sentence it opens.',
        expWrong:{
          A:'A comma on each side leaves two complete sentences held together by nothing but a comma. “However” causes this splice more often than any other word in English.',
          B:'The semicolon is right, but a transition word at the head of a new clause is followed by a comma: “; however, the season…”.',
          D:'With no mark at all before it, the two sentences are fused, and “however” does not repair a run-on any more than it would create one.'
        },
        tip:'However, therefore, moreover, nevertheless, and in fact are transitions, not conjunctions. The pattern is fixed: complete sentence + semicolon + transition + comma + complete sentence.'
      },
      {
        id:'SEC-06', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Boundaries: the comma splice that “then” leaves behind',
        passage:'The library makerspace lost two of its three printers to a power surge in %BLANK% the club that meets there prints one project per session now.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'March, and', B:'March, then', C:'March; and', D:'March,'},
        correct:'A',
        expCorrect:'Both sides are complete sentences, so they need a real joint. “And” is a coordinating conjunction and takes a comma in front of it: “…in March, and the club…”.',
        expWrong:{
          B:'“Then” is an adverb of time, not a conjunction, so “March, then the club prints…” is still two sentences held together by a comma: a splice.',
          C:'The semicolon already does the joining; adding “and” on top of it doubles the mark. Pick one.',
          D:'A comma by itself between two complete sentences is the splice in its plainest form.'
        },
        tip:'Test a joining word by trying to move it. “Then” slides happily inside its own sentence (“the club then prints one project”), which proves it is an adverb. The seven FANBOYS cannot move, and they are the only words that can join two sentences with a comma.'
      },

      /* ── Clausula subordinada: al principio y al final (07-08) ─────────── */
      {
        id:'SEC-07', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Boundaries: comma after a dependent clause that opens the sentence',
        passage:'Because the drone has to be back on the launch pad before the wind picks up around %BLANK% the mapping crew flies the northern half of the quarry first.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'noon', B:'noon;', C:'noon:', D:'noon,'},
        correct:'D',
        expCorrect:'“Because the drone has to be back on the launch pad before the wind picks up around noon” cannot stand alone — the word “Because” makes it dependent. A dependent clause that comes FIRST is followed by a comma that marks where the main sentence begins.',
        expWrong:{
          A:'Without the comma the reader runs “around noon the mapping crew” together and has to back up to find where the setup ended.',
          B:'A semicolon needs a clause that could stand alone on each side of it, and a “Because…” opener is not one.',
          C:'A colon also needs a complete sentence in front of it, and what follows a colon is something the first half promised, not the main clause finally arriving.'
        },
        tip:'If the sentence opens with because, although, when, if, since, while, after, or unless, you are inside a dependent clause, and a comma has to mark where it ends.'
      },
      {
        id:'SEC-08', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries: no comma before an essential dependent clause at the end',
        passage:'The night crew at the animal hospital wakes the on-duty surgeon at %BLANK% whenever a dog comes in with a wound that will not close.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'home,', B:'home', C:'home;', D:'home:'},
        correct:'B',
        expCorrect:'“Whenever a dog comes in with a wound that will not close” names the condition under which the crew makes that call: it narrows the main sentence instead of commenting on it. A dependent clause that FOLLOWS the main clause and is essential to it takes no punctuation at all.',
        expWrong:{
          A:'That comma belongs to the other word order. “Whenever a dog comes in…, the night crew wakes…” needs one; the same clause parked at the end does not.',
          C:'A semicolon needs a complete sentence after it, and “whenever a dog comes in with a wound that will not close” is dependent.',
          D:'A colon promises a list or an explanation. What follows is a condition attached to the verb, not a delivery of something announced.'
        },
        tip:'One clause, two positions, two rules: dependent clause first → comma; dependent clause last → nothing. Position decides, not length.'
      },

      /* ── No esenciales entre comas (09-11) ────────────────────────────── */
      {
        id:'SEC-09', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Boundaries: opening comma of a nonessential appositive',
        passage:'The oldest ride at the county %BLANK% a wooden coaster built the year the fairground opened, is repainted by hand every winter.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'fair,', B:'fair', C:'fair;', D:'fair:'},
        correct:'A',
        expCorrect:'“A wooden coaster built the year the fairground opened” renames the ride and can be lifted straight out: “The oldest ride at the county fair is repainted by hand every winter.” A nonessential renaming is fenced in on BOTH sides, and the closing comma is already sitting there after “opened”, so the blank has to hold the opening one.',
        expWrong:{
          B:'Leaving the blank empty gives the sentence a closing fence it never opened, and the reader cannot tell where the interruption started.',
          C:'A semicolon joins two complete sentences; “a wooden coaster built the year the fairground opened” is a noun phrase with no verb of its own.',
          D:'A colon can introduce a renaming, but only when the renaming finishes the sentence. This one is buried in the middle, with the main verb still to come.'
        },
        tip:'Interrupters travel in pairs. Look at the far side of the aside first: if it closes with a comma, it has to open with one — and a pair never mixes a comma with a dash.'
      },
      {
        id:'SEC-10', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries: closing comma of an aside that interrupts mid-sentence',
        passage:'The counselor gave the transfer students, all six of them new to the district that %BLANK% the same speech she has given every September since 2004.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'fall', B:'fall;', C:'fall,', D:'fall:'},
        correct:'C',
        expCorrect:'The aside opened with a comma after “students”, so it closes with one. Lift it out and the sentence is intact: “The counselor gave the transfer students the same speech she has given every September since 2004.” The closing comma is what tells the reader the interruption is over and the sentence is resuming.',
        expWrong:{
          A:'With nothing in the blank the aside never closes, and “new to the district that fall the same speech” jams the interruption into the sentence it interrupted.',
          B:'A semicolon promises a complete sentence after it, and “the same speech she has given every September since 2004” is a noun phrase — it is what the counselor gave.',
          D:'A colon needs a complete sentence in front of it. Everything before the blank is a sentence still waiting for its object.'
        },
        tip:'Delete the aside as a test. If what is left is a whole sentence, the aside needs a mark on both sides — and the second one matches the first.'
      },
      {
        id:'SEC-11', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries: comma before a nonessential “which” clause',
        passage:'Volunteers spent two weekends in June rebuilding the school %BLANK% which had been shut since a hailstorm cracked half of its panels.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'greenhouse', B:'greenhouse;', C:'greenhouse:', D:'greenhouse,'},
        correct:'D',
        expCorrect:'The greenhouse is already identified — the school has one — so “which had been shut since a hailstorm cracked half of its panels” adds information rather than picking one greenhouse out of several. That is a nonessential clause, and a nonessential clause introduced by “which” is set off with a comma.',
        expWrong:{
          A:'With no comma the clause reads as essential, as though the school had several greenhouses and this one had to be singled out. Standard written English uses “that” with no comma for that job, not “which”.',
          B:'A semicolon needs a clause that could stand alone on each side, and one that opens with “which” cannot: it leans on the noun in front of it.',
          C:'A colon delivers something the first half announced — a list, a name, an explanation — and a relative clause is none of those.'
        },
        tip:'“Which” takes a comma; “that” takes none. Ask whether the clause is telling the reader WHICH thing you mean. If it is, it is essential (that, no comma). If the reader already knows, it is an aside (comma + which).'
      },

      /* ── Dos puntos que introducen, y el que no va (12-14) ─────────────── */
      {
        id:'SEC-12', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries: colon introducing a list after a complete sentence',
        passage:'The taco truck parked outside the hardware store on Fridays sells exactly three %BLANK% beans, chicken cooked that morning, and a mushroom filling the owner invented for her daughter.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'fillings,', B:'fillings:', C:'fillings;', D:'fillings'},
        correct:'B',
        expCorrect:'Everything before the blank is already a complete sentence — “The taco truck … sells exactly three fillings” — and the three items spell out what those fillings are. Announcing a list after a complete sentence is the colon’s whole job.',
        expWrong:{
          A:'A comma cannot announce a list. It makes “beans” one more thing hanging off the sentence, as if the truck sold three fillings and also beans.',
          C:'A semicolon needs a complete sentence on both sides, and a run of noun phrases is not a sentence.',
          D:'With no mark the list crashes into the clause: “three fillings beans” cannot be read.'
        },
        tip:'A list does not earn a colon — a complete sentence in front of it does. “The truck sells exactly three fillings” could end in a period, so the colon is legal.'
      },
      {
        id:'SEC-13', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries: colon introducing a single phrase, not a list',
        passage:'Everything the astronomy club had practiced for two months depended on one thing its members could not %BLANK% a cloudless sky over the desert on the night of the eclipse.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'arrange:', B:'arrange,', C:'arrange;', D:'arrange'},
        correct:'A',
        expCorrect:'“Everything the astronomy club had practiced for two months depended on one thing its members could not arrange” is a complete sentence, and what follows names that one thing. A colon can introduce a single phrase exactly as easily as a list: what it demands is a complete sentence in front of it, not a list behind it.',
        expWrong:{
          B:'A comma hangs the phrase on as an afterthought and throws away the announcement the sentence spent a whole clause building.',
          C:'A semicolon needs a complete sentence after it, and “a cloudless sky over the desert on the night of the eclipse” has no verb.',
          D:'With nothing in the blank the words run together: “one thing its members could not arrange a cloudless sky” hands “arrange” two objects at once.'
        },
        tip:'What comes AFTER a colon can be a list, one noun, or a whole sentence. The colon is fussy only about what comes before it.'
      },
      {
        id:'SEC-14', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Boundaries: no colon between a verb and the list that is its object',
        passage:'A route setter’s kit at the climbing gym %BLANK% a bucket of bolts, a torque wrench, and a brush cut down from an old broom.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'holds:', B:'holds,', C:'holds', D:'holds—'},
        correct:'C',
        expCorrect:'The three items are the OBJECT of “holds”, and nothing goes between a verb and its object. Read the words in front of the blank alone: “A route setter’s kit at the climbing gym holds” is not a sentence, it is a sentence cut off mid-thought, so no introducing mark is available.',
        expWrong:{
          A:'This is the most common colon error on the test: a list appears, so a colon gets written. The colon needs a complete sentence in front of it, and “…the climbing gym holds” is unfinished.',
          B:'A single comma between a verb and its object separates the two words that most need to touch. “Holds, a bucket of bolts” reads as if something had been left out.',
          D:'A dash introduces on the same terms as a colon — complete sentence first — so it fails here for exactly the same reason.'
        },
        tip:'Cover the list and read what is left. If it ends on a verb or on a phrase like “such as”, “including”, or “are”, write nothing at all: the list is finishing the sentence, not being announced by it.'
      },

      /* ── Punto y coma en lista con comas internas (15) ─────────────────── */
      {
        id:'SEC-15', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries: semicolons between list items that carry commas inside them',
        passage:'The exchange program sends four students every spring: two to Lisbon, where the host school runs its own bakery; one to Osaka, where classes start at seven %BLANK% and one to a farm school with no internet at all.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'thirty,', B:'thirty', C:'thirty:', D:'thirty;'},
        correct:'D',
        expCorrect:'This list already runs on semicolons, because two of its items carry commas inside them (“Lisbon, where the host school runs its own bakery”). Once a list has been promoted to semicolons, EVERY boundary between its items is a semicolon, including the last one, in front of “and”.',
        expWrong:{
          A:'A comma here is the same mark the items use inside themselves, so the reader cannot tell whether “and one to a farm school” starts a new item or continues the Osaka one.',
          B:'With nothing in the blank the third destination runs straight into the second.',
          C:'The colon introduces the list once, at the top (“sends four students every spring:”), and is never repeated between the items.'
        },
        tip:'If any single item in a list contains a comma, raise every divider in that list to a semicolon — all of them, not only the crowded one.'
      },

      /* ── La coma que no va entre sujeto y verbo, y la que sí (16-17) ───── */
      {
        id:'SEC-16', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Boundaries: no comma between a subject and its verb',
        passage:'The three coaches who rebuilt the wheelchair basketball league after the gym flooded in %BLANK% still drive the van to every away game themselves.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'2019,', B:'2019', C:'2019;', D:'2019:'},
        correct:'B',
        expCorrect:'The subject is the whole of “The three coaches who rebuilt the wheelchair basketball league after the gym flooded in 2019”, and the verb is “drive”. Nothing may stand between a subject and its verb, however long the subject has grown. The clause is also essential — it tells you which coaches — so it takes no fence of its own.',
        expWrong:{
          A:'This is the comma writers reach for when a subject gets long enough to feel like it needs a rest. A single comma between subject and verb is never legal, at any length.',
          C:'A semicolon needs a complete sentence on each side, and “still drive the van to every away game themselves” has no subject of its own.',
          D:'A colon needs a complete sentence in front of it. A subject with no verb yet is not one.'
        },
        tip:'Length is never a reason for a comma. Strip the sentence to its bones — “The coaches drive” — and if the mark you want falls between those two words, it does not belong. One comma there is always wrong; two commas around an aside are a different matter.'
      },
      {
        id:'SEC-17', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: closing an appositive whose comma lands right in front of the verb',
        passage:'The night custodian at the ice plant, a man who has not missed a shift since the year the freezers were %BLANK% locks the loading bay himself at eleven.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'replaced,', B:'replaced', C:'replaced;', D:'replaced—'},
        correct:'A',
        expCorrect:'The sentence underneath is “The night custodian at the ice plant locks the loading bay himself at eleven”, and everything between the commas renames the custodian. The aside opened with a comma after “ice plant”, so it closes with one — even though that closing comma lands immediately before the verb “locks”. It is not separating the subject from its verb; it is the second half of a pair, and the pair is what makes the aside liftable.',
        expWrong:{
          B:'This is the trap. A writer who has memorized “never put a comma between the subject and its verb” deletes exactly the mark the pair needs, and the aside is left with no end: the reader never learns where the interruption stopped.',
          C:'A semicolon promises a complete sentence after it, and “locks the loading bay himself at eleven” has no subject of its own — the subject is still back at “The night custodian”.',
          D:'Dashes are legal fences, but a pair cannot be mixed: an aside that opens with a comma has to close with a comma.'
        },
        tip:'When two rules seem to collide, the pair wins. Delete the aside: if the sentence still works, it needs a mark on both sides, and it makes no difference that the closing one happens to sit in front of the verb. A LONE comma between subject and verb is wrong; a pair around an interrupter is required.'
      },

      /* ══ FORM, STRUCTURE, AND SENSE (18-34) ══════════════════════════════
         Ninguna palabra del matcher de Boundaries en el "skill". */

      /* ── Concordancia con material intermedio (18-20) ──────────────────── */
      {
        id:'SEC-18', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — subject-verb agreement across a phrase that separates them',
        passage:'The supply of paper cups behind the concession counter %BLANK% down to two sleeves by the third quarter of every home game.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'run', B:'have run', C:'were running', D:'runs'},
        correct:'D',
        expCorrect:'The subject is “The supply”, which is singular. Everything from “of paper cups” to “counter” only describes the supply, and a noun inside a prepositional phrase can never be the subject. A singular subject takes the singular verb “runs”.',
        expWrong:{
          A:'“Run” is plural. It agrees with “cups”, the nearest noun, but that noun is the object of “of”.',
          B:'“Have run” is plural as well; the singular “supply” would take “has run”.',
          C:'“Were running” is plural and past, and “every home game” describes something that happens over and over, not once.'
        },
        tip:'Cross out every “of …” and “behind …” phrase between the subject and the verb, then read what is left: “The supply ___ down to two sleeves.” The noun closest to the verb is almost never the one that decides.'
      },
      {
        id:'SEC-19', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — plural subject held apart from its verb',
        passage:'The murals along the back wall of the bus terminal %BLANK% painted over every few years, always by students who have never held a roller before.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'is', B:'was', C:'are', D:'has been'},
        correct:'C',
        expCorrect:'The subject is “The murals”, which is plural. “Along the back wall of the bus terminal” says where they are and cannot change how many there are. Plural subject → “are”.',
        expWrong:{
          A:'“Is” is singular. It agrees with “terminal”, the noun nearest the blank, which sits two prepositions deep inside a phrase.',
          B:'“Was” is singular and past, while “every few years” describes something that still happens.',
          D:'“Has been” is singular; the plural “murals” would take “have been”.'
        },
        tip:'The verb answers to the subject, not to the last noun before it. Find the verb, ask “who or what does this?”, and throw out anything that follows of, along, with, including, or as well as.'
      },
      {
        id:'SEC-20', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — subject-verb agreement when the subject is buried under two modifiers',
        passage:'The stack of permission slips that the two teachers who organize the tide-pool trip collect from every family in the week before the buses leave %BLANK% kept in a locked drawer until the morning of the trip.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'is', B:'are', C:'have been', D:'were'},
        correct:'A',
        expCorrect:'The subject is “The stack”, which is singular. Three separate things stand between it and the verb: a prepositional phrase (“of permission slips”), a modifier with its own subject and verb (“that the two teachers … collect”), and another one nested inside that (“who organize the tide-pool trip”). None of them can be the subject. “The stack … is kept in a locked drawer.”',
        expWrong:{
          B:'“Are” is plural and agrees with “slips”, which is the object of “of” and therefore disqualified.',
          C:'“Have been” is plural and agrees with “teachers”, the subject of the inner modifier rather than of the sentence.',
          D:'“Were” is plural and past; the sentence describes a standing practice (“until the morning of the trip”), not a finished event.'
        },
        tip:'When the subject is buried, find the main verb first and then ask which noun performs it. Any noun sitting inside “of …”, inside a “that …” modifier, or inside a “who …” modifier is out of the running before you begin.'
      },

      /* ── Tiempos verbales consistentes (21-22) ─────────────────────────── */
      {
        id:'SEC-21', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — holding one verb tense across a series',
        passage:'The bakery on the corner mixes its dough at four in the morning, shapes it by hand on a marble slab, and %BLANK% it into the oven before the first customers reach the door.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'slid', B:'slides', C:'was sliding', D:'had slid'},
        correct:'B',
        expCorrect:'The two verbs already on the page, “mixes” and “shapes”, are present tense and describe what happens every morning. The third verb in the series has to match them: “slides”.',
        expWrong:{
          A:'“Slid” is past, and it drops the reader out of the daily routine into one particular morning halfway through the sentence.',
          C:'“Was sliding” is past as well, and the progressive turns a step in a routine into an action caught in the middle.',
          D:'“Had slid” is past perfect, which marks something finished before another past event. There is no past event here for it to come before.'
        },
        tip:'Three verbs strung on one subject sit in the same tense. Look left before you choose: the tense was already set by the verbs the sentence started with.'
      },
      {
        id:'SEC-22', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — past perfect for the earlier of two past verbs',
        passage:'By the time the inspectors reached the sorting plant in March, the crew %BLANK% the broken conveyor with parts cut from a second machine two months earlier.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'has repaired', B:'repaired', C:'was repairing', D:'had repaired'},
        correct:'D',
        expCorrect:'There are two past events: the repair, “two months earlier”, and the inspection, in March. The one that happened first goes into the past perfect — “had repaired” — and the opener “By the time … reached” is the signal that the sentence is stacking one past event inside another.',
        expWrong:{
          A:'“Has repaired” is the present perfect, which ties a past action to NOW. The reference point in this sentence is March, not today.',
          B:'“Repaired” is simple past, which puts both events on the same footing and throws away the order the sentence takes trouble to establish.',
          C:'“Was repairing” says the work was still going on when the inspectors walked in, which contradicts “two months earlier”.'
        },
        tip:'Two finished past events in one sentence: the earlier one takes “had” plus the past participle, the later one stays simple past. “By the time”, “before”, and “after” are the usual signals.'
      },

      /* ── Pronombre y antecedente (23-24) ───────────────────────────────── */
      {
        id:'SEC-23', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — a pronoun matches its antecedent in number',
        passage:'The two custodians who cover the night shift at the middle school keep %BLANK% keys on a single ring, which is why one lost ring shuts the whole building.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'his', B:'its', C:'their', D:"they're"},
        correct:'C',
        expCorrect:'The antecedent is “The two custodians”, which is plural, so the possessive pronoun that points back at it has to be plural too: “their keys”.',
        expWrong:{
          A:'“His” is singular, and it also guesses at something the sentence never says. Two people are named.',
          B:'“Its” is singular and points at a thing rather than at people.',
          D:'“They’re” is the contraction of “they are”. Spell it out and the sentence reads “keep they are keys on a single ring”.'
        },
        tip:'Draw an arrow from the pronoun back to the noun it replaces. If that noun is plural, the pronoun is plural — and a contraction with an apostrophe is never a possessive.'
      },
      {
        id:'SEC-24', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — singular pronoun after “each of the …”',
        passage:'Each of the eleven teams in the robotics league builds %BLANK% own scoring arm out of the same box of parts, and no two arms have ever looked alike.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'its', B:'their', C:"it's", D:'theirs'},
        correct:'A',
        expCorrect:'The subject is “Each”, not “teams”: “of the eleven teams” only names the group that “each” is picking from, one at a time. “Each” is singular, so both the verb (“builds”) and the pronoun (“its”) are singular.',
        expWrong:{
          B:'“Their” is plural. It agrees with “teams”, the noun closest to it, but that noun sits inside “of the eleven teams” and is not the subject. Notice that the verb “builds” is already singular.',
          C:'“It’s” means “it is”. Put the two words back and the sentence reads “builds it is own scoring arm”.',
          D:'“Theirs” is a standalone possessive that replaces a whole noun phrase (“the arm is theirs”); it cannot sit in front of a noun.'
        },
        tip:'Each, every, either, neither, and one stay singular even when a plural noun follows them. The verb and the pronoun both answer to the word BEFORE “of”, never to the word after it.'
      },

      /* ── Posesivo singular y plural (25-26) ────────────────────────────── */
      {
        id:'SEC-25', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — singular possessive with apostrophe plus s',
        passage:'The %BLANK% only rule for the Saturday open session is that nobody spars without a partner who has also signed the waiver.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'gyms', B:"gym's", C:"gyms'", D:"gyms's"},
        correct:'B',
        expCorrect:'One gym owns the rule, and a singular noun becomes possessive by adding an apostrophe plus s: “the gym’s only rule”.',
        expWrong:{
          A:'“Gyms” with no apostrophe is a plain plural. It shows no ownership, and “The gyms only rule” jams two nouns together.',
          C:'“Gyms’” is the possessive of the plural — several gyms sharing one rule. The sentence describes the policy of a single gym.',
          D:'“Gyms’s” marks the noun twice: either add ’s to the singular or an apostrophe after a plural s, never both.'
        },
        tip:'Settle the number of OWNERS before you place the apostrophe, and put it right after the owner: one gym → gym’s; several gyms → gyms’. The thing owned never gets an apostrophe.'
      },
      {
        id:'SEC-26', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — plural possessive: the apostrophe goes after the s',
        passage:'The %BLANK% locker room, which all fourteen of them helped tile one weekend in August, was rebuilt with money the alumni raised in two days.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:"player's", B:'players', C:"players's", D:"players'"},
        correct:'D',
        expCorrect:'Fourteen players share one room, so the owner is plural. “Players” already ends in s, and a plural that ends in s takes the apostrophe AFTER it: “the players’ locker room”.',
        expWrong:{
          A:'“Player’s” is one player. The sentence counts fourteen of them.',
          B:'“Players” with no apostrophe is only the plural noun; nothing in it shows ownership.',
          C:'“Players’s” adds a second ending to a plural that already ends in s. The apostrophe alone does the whole job.'
        },
        tip:'Write the owner first, exactly as it is spelled, and only then add the apostrophe: player + ’s = player’s; players + ’ = players’. That order keeps you from inventing forms like “players’s”.'
      },

      /* ── Modificador mal colocado (27-28) ──────────────────────────────── */
      {
        id:'SEC-27', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — an opening modifier has to describe the subject that follows it',
        passage:'Left in the sun on the roof of the van for two days, %BLANK%',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{
          A:'the sound engineer found that the tape had warped past saving.',
          B:'the warping of the tape turned out to be impossible to reverse.',
          C:'the tape warped past saving before anyone could copy it.',
          D:'it was clear that the tape had warped past saving.'
        },
        correct:'C',
        expCorrect:'An opening description attaches to whatever noun comes first in the main sentence. The thing left in the sun was the tape, so “the tape” has to be the first thing after the comma.',
        expWrong:{
          A:'This says the sound engineer spent two days in the sun on the roof of the van.',
          B:'Here it is “the warping” that sat in the sun for two days — an event cannot be left on a roof, and the tape has been demoted to the end of the sentence.',
          D:'“It” names nothing at all, so the opening phrase is left with no noun to describe.'
        },
        tip:'The opening phrase grabs the first noun after the comma, whatever you meant it to describe. Read the two together as a test: “Left in the sun … the tape” works; “Left in the sun … the sound engineer” does not.'
      },
      {
        id:'SEC-28', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — putting the modifier “only” next to the words it limits',
        passage:'%BLANK% on Thursdays, so a family that misses it waits a full week for the next one.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{
          A:'The clinic van stops in the village only',
          B:'The clinic van only stops in the village',
          C:'Only the clinic van stops in the village',
          D:'The clinic van stops only in the village'
        },
        correct:'A',
        expCorrect:'The second half of the sentence tells you what is being limited: the DAY. A family that misses the van waits a week, which means Thursday is the only day it comes. “Only” therefore has to sit immediately in front of “on Thursdays”.',
        expWrong:{
          B:'Placed in front of “stops”, “only” limits the verb: the van does nothing in the village except stop — it never picks anyone up, never unloads.',
          C:'Placed in front of the subject, “only” limits the van: no other vehicle stops in the village, which the sentence never claims.',
          D:'Placed in front of “in the village”, “only” limits the place: the van stops nowhere else on its route, which again is not what the second half is about.'
        },
        tip:'“Only”, “almost”, “nearly”, and “just” attach to whatever comes directly after them. Decide what you are limiting — the actor, the action, the place, or the time — and park the word right in front of it.'
      },

      /* ── Paralelismo (29) y comparativo contra superlativo (30) ────────── */
      {
        id:'SEC-29', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — parallel verb forms in a list',
        passage:'The junior judging badge at the county fair asks each entrant to weigh the animal, record its feed for a month, and %BLANK% in front of three judges.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'answering questions', B:'answer questions', C:'to answer questions', D:'answers questions'},
        correct:'B',
        expCorrect:'All three tasks hang from one “to”: “to weigh the animal, record its feed …, and answer questions”. The first item set the pattern with a base-form verb, so the other two match it — weigh, record, answer.',
        expWrong:{
          A:'“Answering” is an -ing form, and the first two items are not. The sentence changes gear on its last item.',
          C:'Repeating “to” in the third item only gives the list a third pattern. The opening “to” already covers all three; a repeated “to” has to appear in every item or in none.',
          D:'“Answers” carries a third-person -s ending, which cannot follow “to” at all.'
        },
        tip:'Stack the items of a list in a column in your head. If one of them starts with a different kind of word than the rest, that is the one to change — and the first item is the one that sets the pattern.'
      },
      {
        id:'SEC-30', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — the modifier form for three or more is the superlative',
        passage:'Of the three greenhouses the school runs, the one on the roof is %BLANK% to heat, and it is the only one that pays for itself in winter.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'cheaper', B:'more cheap', C:'the more cheap', D:'the cheapest'},
        correct:'D',
        expCorrect:'The opening phrase sets the size of the group: three greenhouses. Singling one out of three or more calls for the superlative, and short adjectives build it with -est: “the cheapest to heat”.',
        expWrong:{
          A:'“Cheaper” is the comparative, which weighs exactly two things and needs a “than”. With three in the group the reader is left asking “cheaper than which one?”',
          B:'“More cheap” stacks “more” on an adjective that already has a one-word comparative. Short adjectives take -er and -est, not “more” and “most”.',
          C:'“The more cheap” commits both errors at once: the comparative degree for a group of three, and a “more” that “cheap” does not take.'
        },
        tip:'Count the group before you choose the ending. Exactly two → comparative (-er or “more”, with “than”). Three or more → superlative (-est or “most”, usually with “the”).'
      },

      /* ── Las que se confunden (31-34) ──────────────────────────────────── */
      {
        id:'SEC-31', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — affect or effect: the verb or the noun',
        passage:'Two weeks of construction noise outside the testing room had one %BLANK% nobody could ignore: the scores dropped in every section.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'affect', B:'affects', C:'effect', D:'effects'},
        correct:'C',
        expCorrect:'The blank follows the number word “one” and is described by “nobody could ignore”, so it is a noun, and the noun that means a result is “effect”. The colon then delivers what that one effect was.',
        expWrong:{
          A:'“Affect” is the verb — to have an influence on something. A verb cannot follow “one”.',
          B:'“Affects” is that same verb with a third-person ending; “had one affects” puts two verbs in a row with nothing to join them.',
          D:'“Effects” is the right word in the wrong number. “One” is singular, and the sentence goes on to name a single result.'
        },
        tip:'Try putting “an” or “the” in front of the word. If it fits, you want the noun, “effect”. If the word is doing something TO something else, you want the verb, “affect”.'
      },
      {
        id:'SEC-32', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — fewer with a plural noun, less with an amount',
        passage:'Because the new nozzle wastes %BLANK% water, the rooftop garden now fills its tanks on one rainy night instead of two.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'less', B:'fewer', C:'fewest', D:'lesser'},
        correct:'A',
        expCorrect:'Water is measured rather than counted — there is no way to line up “three waters” here — and a quantity that is measured takes “less”. Notice the contrast inside the same sentence: the tanks and the nights CAN be counted, and those would take “fewer”.',
        expWrong:{
          B:'“Fewer” is for things counted one at a time: fewer tanks, fewer nozzles, fewer nights. Water is not one of them.',
          C:'“Fewest” is a superlative, which singles one item out of three or more. The sentence compares the new nozzle with the old one.',
          D:'“Lesser” means inferior in rank or quality (“a lesser grade of hose”), not smaller in amount.'
        },
        tip:'Ask which question the noun answers. “How many?” → fewer. “How much?” → less. Nouns with no plural form at all — water, traffic, time, money — always take less.'
      },
      {
        id:'SEC-33', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — than, not then, after a comparative modifier',
        passage:'The second batch of clay came out of the kiln with a harder glaze %BLANK% the first, even though both trays sat on the same shelf.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'then', B:'than', C:'as', D:'from'},
        correct:'B',
        expCorrect:'“Harder” is a comparative, and a comparative is finished with “than”. What follows is the second half of the comparison: the first batch.',
        expWrong:{
          A:'“Then” is an adverb of time — first this, then that. It cannot close a comparison, and here it would claim the glaze happened after the first batch.',
          C:'“As” belongs to the frame “as hard as”, which measures two things as equal. Once “harder” is on the page, only “than” can finish it.',
          D:'“From” finishes “different from”, not a comparative. “Harder from the first” is not English.'
        },
        tip:'Say the pair out loud: thAn has an A, like compAre; thEn has an E, like whEn. If the word can be swapped for “next” or “after that”, it is then; otherwise it is than.'
      },
      {
        id:'SEC-34', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — its is the possessive pronoun, it’s is the contraction',
        passage:'The ferry keeps a spare propeller bolted to %BLANK% deck, because the nearest yard that can machine a new one is two days away.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:"its'", B:'their', C:"it's", D:'its'},
        correct:'D',
        expCorrect:'The word in front of “deck” shows ownership — the deck belongs to the ferry — and the possessive of “it” is “its”, with no apostrophe anywhere. Possessive pronouns (his, hers, ours, theirs, its) never take one.',
        expWrong:{
          A:'“Its’” is not a word in English. There is no plural “it” for an apostrophe to follow.',
          B:'“Their” is plural, and the owner here is one ferry.',
          C:'“It’s” is the contraction of “it is”. Read it back: “bolted to it is deck”.'
        },
        tip:'Expand the apostrophe before you write it. If “it is” fits, write it’s; if it does not, write its. An apostrophe in English marks either a missing letter or an owner, and “its” already shows ownership without one.'
      }

    ]
  });
})();
