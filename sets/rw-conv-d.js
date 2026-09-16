/* SAT Studio question set — Reading & Writing: Standard English Conventions — Set D (SPN-01 a SPN-34)
   El formato que el banco casi no tenia: el blanco cae en MEDIO de una oracion larga y la respuesta
   solo aparece si se reconstruye la oracion entera — el sujeto que quedo veinte palabras atras, la
   marca que abrio un inciso hace media linea, el elemento con el que arranco la serie.
   17 Boundaries (SPN-01 a SPN-17) + 17 Form, Structure, and Sense (SPN-18 a SPN-34).
   34 MC · 6 Facil · 14 Media · 14 Dificil (6 de las dificiles con extreme:true).
   OJO al escribir mas: el matcher de Boundaries de index.html se prueba ANTES que el de Form y muerde
   comma/clause/colon/dash/parenthes/punctuat/appositive/title. En los `skill` de Form no aparece
   ninguna de esas palabras, solo verb/agreement/pronoun/plural/possessive/modifier/parallel. */
(function(){
  window.SAT_SETS.push({
    id: 'rw-conv-d',
    title: 'Conventions — The Whole Sentence',
    section: 'rw',
    level: 'Difícil',
    description: 'Long passages where the blank sits in the middle of the sentence. The answer depends on the subject twenty words back, on the mark that opened an aside, or on the item the series started with.',
    minutes: 32,
    questions: [

      /* ══ BOUNDARIES (SPN-01 a SPN-17) ═══════════════════════════════════ */

      {
        id:'SPN-01', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Boundaries: one comma closes a long dependent opener',
        passage:"The freight elevator in the Hollis Building still runs on a hand rope, and the manager insists on showing it to every new tenant. Although the cab has been inspected twice a year since the 1970s, has carried pianos and filing cabinets and once a small horse, and has never failed an %BLANK% she will not let anyone ride it alone until they have worked the rope themselves from the basement to the roof.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'inspection;', B:'inspection', C:'inspection,', D:'inspection:'},
        correct:'C',
        expCorrect:"Cover the blank and read the left side: \"Although the cab has been inspected twice a year ... and has never failed an inspection\" cannot stand alone, because \"Although\" makes the whole stretch dependent no matter how long it grows. A dependent opener is closed with one comma, and then the main statement finishes the sentence: \"she will not let anyone ride it alone.\"",
        expWrong:{
          A:'A semicolon needs a complete sentence on each side. The three verbs in the opener ("has been inspected", "has carried", "has never failed") all belong to the dependent part, so the left side is not a sentence.',
          B:'With no mark the reader runs "never failed an inspection she will not let anyone ride it" together and has to back up to find the turn. The length of the opener is exactly why the mark is needed.',
          D:'A colon also demands a complete sentence in front of it, and a dependent opener has nothing to announce.'
        },
        tip:'Length does not change the rule. Find the word that opens the sentence — because, although, when, if, while, since, after — and put one comma where that whole stretch ends, however many verbs it picked up along the way.'
      },

      {
        id:'SPN-02', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Boundaries: colon after a long opener that is still a complete sentence',
        passage:"The wreck off Tallow Point had been picked over for a century before the county finally paid for a proper survey. When the divers came up in October and the shop had finished cleaning everything they brought with them, the list of what was worth keeping from the whole season came to three %BLANK% two brass buckles, a comb with three teeth left, and a coil of rope no longer than a forearm.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'items:', B:'items;', C:'items,', D:'items'},
        correct:'A',
        expCorrect:"Cover everything after the blank. What is left — \"When the divers came up in October and the shop had finished cleaning everything they brought with them, the list of what was worth keeping from the whole season came to three items\" — ends in a period comfortably. A complete sentence in front and a list behind is exactly what a colon is for.",
        expWrong:{
          B:'A semicolon wants a complete sentence on BOTH sides, and "two brass buckles, a comb with three teeth left, and a coil of rope" is a string of noun phrases.',
          C:'A comma cannot announce a list. It would hang "two brass buckles" onto "came to three items" as one more scrap of the same phrase.',
          D:'With no mark at all, "came to three items two brass buckles" has to be read twice before it means anything.'
        },
        tip:'A colon looks backward before it looks forward. The test is never what comes after it — anything may — but whether what comes BEFORE it could end in a period on its own.'
      },

      {
        id:'SPN-03', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Boundaries: the closing comma of an aside that opened many words earlier',
        passage:"The light at Mundy Point was automated in 1989 and has not needed a keeper since. The keeper's daughter, a self-taught mechanic who kept the rotation gear turning through thirty winters and who rebuilt the clockwork twice with parts she cut %BLANK% never wrote down a word of what she did, and the manuals that survive were written by men who never saw the machine run.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'herself;', B:'herself,', C:'herself', D:'herself:'},
        correct:'B',
        expCorrect:"The aside opens with the comma after \"daughter\" and has to close with a matching comma before the sentence goes on. Everything between them only describes her; strip it out and what is left is \"The keeper's daughter never wrote down a word of what she did.\"",
        expWrong:{
          A:'A semicolon needs a complete sentence on each side, and "The keeper\'s daughter, a self-taught mechanic who kept the rotation gear turning ..." is a subject with a description hanging off it.',
          C:'With nothing there the aside never closes. The reader is still inside the description when the main verb "never wrote" arrives, and the subject is cut off from it.',
          D:'A colon demands a complete sentence in front of it, and what stands in front here is still only a subject.'
        },
        tip:'An aside that opens with a comma closes with a comma, however far apart the two end up. Strip the aside out: if what is left is a clean sentence, the pair was right.'
      },

      {
        id:'SPN-04', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries: semicolons separating list items that carry commas of their own',
        passage:"The touring exhibit moves with four objects and four guards, and the manifest lists them in the order they will be unpacked: a ceremonial drum from Kumasi, %BLANK% a set of iron tuning forks that a Birmingham foundry cast in 1851; a ship's bell recovered from a wreck off Anglesey; and the glass case that costs more to insure than the other three together.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'Ghana,', B:'Ghana', C:'Ghana:', D:'Ghana;'},
        correct:'D',
        expCorrect:"The items in this list already contain commas of their own (\"Kumasi, Ghana\"), so every separator between items goes up a level to a semicolon — and the rest of the list already shows it: \"... cast in 1851; a ship's bell ...; and the glass case ...\" The blank is one of those separators.",
        expWrong:{
          A:'A comma here is the same mark that already sits inside the first item, so the reader cannot tell whether "Ghana" starts a new item or finishes the old one. That is the exact problem semicolons exist to fix.',
          B:'With no mark the first two items fuse into "Ghana a set of iron tuning forks."',
          C:'A colon already did its job earlier in the sentence, announcing the list. Inside a list it has no function left.'
        },
        tip:'When any item in a list carries a comma of its own, every separator in that list becomes a semicolon. Look at the separators the sentence has already used before you choose the blank.'
      },

      {
        id:'SPN-05', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries: no comma between a long subject and its verb',
        passage:"Every spring the county sends a crew to walk the levee and mark the places where the clay has slumped over the winter. The engineer who has led that crew since the flood of 2011 and who knows the ten-mile stretch better than the survey maps %BLANK% has finally started training the person who will take it over from her.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'do,', B:'do', C:'do;', D:'do:'},
        correct:'B',
        expCorrect:"The subject is \"The engineer\", and everything from \"who has led\" to \"the survey maps do\" describes her. The verb of the sentence is \"has started\". Nothing may stand between a subject and its verb, so the blank takes no mark at all.",
        expWrong:{
          A:'This is the commonest error in a long sentence: after a subject that ran on for twenty words, a comma feels like a rest. It is still not allowed — one comma never separates a subject from its verb.',
          C:'A semicolon needs a complete sentence on each side, and "The engineer who has led that crew ... better than the survey maps do" has no main verb yet.',
          D:'A colon has the same requirement on its left, and it fails here for the same reason.'
        },
        tip:'Strip every "who" and "that" description out of a long subject and read what is left: "The engineer has started training ..." If no mark survives that stripped sentence, no mark belongs in the blank.'
      },

      {
        id:'SPN-06', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries: semicolon before a sentence that opens with however',
        passage:"The museum bought a crate of glass negatives at an estate sale for ninety dollars. The archivist who catalogued them, working four hours a week for two years and stopping only when the grant ran out, found portraits of nearly every family that farmed the valley before the %BLANK% however, not one of the plates carries a name, a date, or any mark at all on its sleeve.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'dam;', B:'dam,', C:'dam', D:'dam and'},
        correct:'A',
        expCorrect:"Both sides are complete sentences: \"The archivist ... found portraits of nearly every family that farmed the valley before the dam\" and \"however, not one of the plates carries a name, a date, or any mark at all on its sleeve.\" \"However\" is an adverb, not a conjunction, so it cannot do the joining; the mark itself has to, and that mark is a semicolon.",
        expWrong:{
          B:'A comma between two complete sentences is a splice, and putting "however" after it does not repair it. "However" can move around inside its own sentence but it cannot hold two of them together.',
          C:'With nothing in the blank the two sentences fuse, and the reader has to guess where the first one ended — nearly thirty words back.',
          D:'"and however" is not an available combination: the conjunction and the adverb want the same job. It is either "dam, and not one of the plates ..." or "dam; however, not one of the plates ..."'
        },
        tip:'However, therefore, moreover, instead and nevertheless do NOT join sentences. When one of them opens the second half, the mark in front of it is a semicolon or a period, never a lone comma.'
      },

      {
        id:'SPN-07', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries: matching the mark that opened an aside many words earlier',
        passage:"Tidal mills are six centuries older than the steam engine, and a few of them still work. The mill at Eling, a pond-and-sluice arrangement that has ground flour on almost every tide since the fourteenth century and that stopped only for the years of the %BLANK% is still licensed to sell what it grinds, and the bags it fills carry a stamp with the tide time on them.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'war —', B:'war', C:'war,', D:'war;'},
        correct:'C',
        expCorrect:"The aside opens with the comma right after \"Eling\", and a pair has to match: comma in, comma out. Take the aside away and the sentence is \"The mill at Eling is still licensed to sell what it grinds\", so the blank closes the description and hands the sentence back to its verb.",
        expWrong:{
          A:'The marks that set off an aside must match each other. This one opened with a comma, so it cannot close with a dash; mixed marks leave the reader with no pair to see.',
          B:'With nothing there the aside never closes, and the subject "The mill at Eling" is stranded from its verb "is".',
          D:'A semicolon needs a complete sentence in front of it, and "The mill at Eling, a pond-and-sluice arrangement that ..." is still only a subject with a description.'
        },
        tip:'Asides come in matched pairs: comma-comma, dash-dash, or the two parentheses. Find the mark that OPENED the aside before you choose the one that closes it.'
      },

      {
        id:'SPN-08', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries: comma after a long participial opener',
        passage:"Vertical farms sell themselves on square footage, not on soil. Stacked eleven trays high under lamps that cost more to run than the heating system of the building they sit in, and tended by two people who never touch a %BLANK% the operation on Bergen Street grows more lettuce in a week than the four-acre farm it replaced grew in a month.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'shovel;', B:'shovel', C:'shovel:', D:'shovel,'},
        correct:'D',
        expCorrect:"Everything from \"Stacked\" to \"never touch a shovel\" describes the operation and has no subject of its own. A long descriptive opener is closed with a comma, and then the main statement begins: \"the operation on Bergen Street grows more lettuce in a week ...\"",
        expWrong:{
          A:'A semicolon needs a complete sentence on its left, and the opener offers participles ("Stacked", "tended") instead of a main verb.',
          B:'Without the comma the opener runs straight into "the operation", and the reader cannot see where the description stops.',
          C:'A colon has the same left-hand requirement as the semicolon, so a descriptive opener cannot support one either.'
        },
        tip:'An opener that starts with a participle — Stacked, Tended, Having finished, Written in 1890 — is never a sentence. One comma closes it, however long it runs.'
      },

      {
        id:'SPN-09', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries: no comma before the and of a two-verb predicate',
        passage:"A few long-distance sailors still navigate by sextant, mostly to keep the skill from disappearing. The woman who won last year's solo crossing of the Atlantic took sights at the same hour on every one of the forty-one mornings she was at %BLANK% and worked out her position on paper before she allowed herself to look at the instrument on the bulkhead.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'sea,', B:'sea', C:'sea;', D:'sea:'},
        correct:'B',
        expCorrect:"What follows \"and\" is \"worked out her position on paper\" — a second verb for the same subject, not a second sentence. \"The woman ... took sights ... and worked out her position\" is one statement with two verbs, and a pair of verbs joined by \"and\" takes no mark between them.",
        expWrong:{
          A:'The comma before "and" is for joining two complete sentences. Look for a subject after "and": there is none here, only the verb "worked".',
          C:'A semicolon needs a complete sentence on the right, and "and worked out her position on paper" has no subject of its own.',
          D:'A colon never introduces a conjunction, and what follows "and" is neither a list nor an explanation.'
        },
        tip:'Before you put a comma in front of "and", check what comes after it. A new subject plus a verb means a comma; a bare verb means the "and" is joining two predicates, and no mark belongs there.'
      },

      {
        id:'SPN-10', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Boundaries: the mark the sentence needs goes outside the closing parenthesis',
        passage:"The new ferry terminal was designed to move four hundred passengers an hour, and the parish council spent two years arguing about whether that number was too generous. On the first Monday of service the terminal moved nine hundred and sixty (its own turnstile counters logged every one of them, and the parish has since published the %BLANK% both escalators failed before noon, and neither was repaired until the following weekend.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'tape);', B:'tape;)', C:'tape)', D:'tape),'},
        correct:'A',
        expCorrect:"Delete the parentheses and everything inside them, and what is left is two complete sentences: \"On the first Monday of service the terminal moved nine hundred and sixty\" and \"both escalators failed before noon, and neither was repaired until the following weekend.\" Two sentences with no conjunction between them need a semicolon, and it belongs outside the closing parenthesis.",
        expWrong:{
          B:'The semicolon is trapped inside the aside. A mark the outer sentence needs always goes after the closing parenthesis, never before it.',
          C:'The aside closes correctly and then the two sentences fuse. Parentheses never do the joining work for you.',
          D:'The mark is in the right place but it is the wrong mark: a comma between two complete sentences is a splice.'
        },
        tip:'Parentheses do not change what a sentence needs — they only move it sideways. Delete the aside, punctuate the sentence that remains, then put the mark back immediately after the closing parenthesis.'
      },

      {
        id:'SPN-11', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Boundaries: no colon when the left side is only a subject',
        passage:"Naturalists have argued for a century about why the bowerbird decorates. The explanation most of them now prefer, which a decade of patient fieldwork has slowly strengthened without ever quite proving, is that the arrangement of blue objects the male sets out in front of the %BLANK% works as a kind of resume that a visiting female can read in a few seconds.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'bower:', B:'bower,', C:'bower', D:'bower;'},
        correct:'C',
        expCorrect:"The blank sits between the subject of the \"that\" statement — \"the arrangement of blue objects the male sets out in front of the bower\" — and its verb, \"works\". That subject has not made a sentence yet, and a subject is never separated from its verb, so nothing goes in the blank.",
        expWrong:{
          A:'A colon needs a complete sentence in front of it. Read the left side from "is that": it is a subject still waiting for its verb.',
          B:'The comma looks like the closing half of the pair that opened after "prefer", but that pair already closed before "is". Here a comma would only cut the subject off from "works".',
          D:'A semicolon needs a complete sentence on BOTH sides, and neither side qualifies: the left is a subject, and the right begins with the verb "works".'
        },
        tip:'When a sentence is long enough that you have lost the thread, find the first verb after the blank and ask what its subject is. If the blank sits between them, the answer is no mark.'
      },

      {
        id:'SPN-12', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Boundaries: the last separator in a semicolon list',
        passage:"The search-and-rescue log for a single month reads like a geography lesson, and the dogs are on a plane more often than their handlers would like. In October the team worked a canyon above Ouray, Colorado; a ski area outside Sandpoint, %BLANK% and a stretch of collapsed dune on the Oregon coast that took nine hours and two shifts to clear.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'Idaho,', B:'Idaho', C:'Idaho:', D:'Idaho;'},
        correct:'D',
        expCorrect:"The items carry commas inside them (\"Ouray, Colorado\" and \"Sandpoint, Idaho\"), so the separators are semicolons — and the list has already used one after \"Colorado\". The separator before the final \"and\" is one of the same separators, so it is a semicolon too.",
        expWrong:{
          A:'A comma here is the same mark that already sits inside "Sandpoint, Idaho", so the list would suddenly read as five parts instead of three.',
          B:'Dropping the mark before "and" glues "Idaho and a stretch of collapsed dune" together as one item, which leaves the list two items long.',
          C:'A colon announces; it does not separate. Inside a list that has already begun it has no work to do.'
        },
        tip:'The separator before the final "and" in a list is the SAME mark as the separators before it. If the list runs on semicolons, the one in front of "and" is a semicolon.'
      },

      {
        id:'SPN-13', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Boundaries: colon after a sentence whose verb is far from its subject',
        passage:"Anyone who redraws a city bus map has to decide first what a map is for, and most agencies never write their answer down. The rule that the transit agency in Halifax settled on after two years of workshops with drivers, riders, and the people who answer the complaint line downtown is deceptively %BLANK% one trip, one map, no route numbers.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'plain:', B:'plain,', C:'plain;', D:'plain'},
        correct:'A',
        expCorrect:"The subject is \"The rule\", and its verb, \"is\", arrives twenty-two words later. \"The rule ... is deceptively plain\" is a complete sentence, which is all a colon asks for on its left. What follows is the rule itself, stated in three fragments, and a colon is the only mark that may introduce fragments.",
        expWrong:{
          B:'A comma cannot announce. It would leave "one trip, one map, no route numbers" hanging off "deceptively plain" as if it were more of the same phrase.',
          C:'A semicolon needs a complete sentence on BOTH sides, and "one trip, one map, no route numbers" is a list of noun phrases.',
          D:'With no mark the sentence ends in "deceptively plain one trip", which cannot be read.'
        },
        tip:'Distance makes a complete sentence look incomplete. Find the subject, find its verb, and ignore everything in between: if that pair is there, a colon is legal.'
      },

      {
        id:'SPN-14', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: dashes around an aside that already contains commas',
        passage:"The estate sale ran three days and emptied a house that had not changed hands since 1902. The catalogue described the piece everyone had come for — a walnut secretary with eleven drawers, two of them false, and a writing surface that folds out on brass %BLANK% in a single line, and it did not mention that the false drawers still held sixty years of the family's letters.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'arms,', B:'arms —', C:'arms', D:'arms;'},
        correct:'B',
        expCorrect:"The aside opened with a dash after \"come for\", and a pair has to match. It had to be a dash pair for a second reason as well: the aside itself contains commas (\"eleven drawers, two of them false, and a writing surface\"), so commas could not mark its edges without vanishing into it. Strip the aside and the sentence is \"The catalogue described the piece everyone had come for in a single line.\"",
        expWrong:{
          A:'A comma cannot close what a dash opened, and here it would be the third comma in a row — the reader has no way to tell which one ends the aside.',
          C:'With nothing there the aside never closes, and "in a single line" attaches to "brass arms" instead of to "described".',
          D:'A semicolon needs a complete sentence on each side. The left side has not finished, and "in a single line, and it did not mention ..." does not start one.'
        },
        tip:'Use dashes for an aside that already contains commas: they are the only pair that stays visible inside the noise. And always close with the same mark that opened.'
      },

      {
        id:'SPN-15', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: the splice hidden inside a very long sentence',
        passage:"Rooftop beekeeping was illegal in the city until 2011, and in all that time the ban was enforced exactly once. The inspector who wrote that single citation, a man who kept four hives of his own on a garage roof one borough over, was not enforcing anything he believed %BLANK% he testified in favor of repeal four years later and now teaches the beginners class the city runs every March.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'in,', B:'in and', C:'in;', D:'in'},
        correct:'C',
        expCorrect:"Cover the blank. Left: \"The inspector who wrote that single citation, a man who kept four hives of his own on a garage roof one borough over, was not enforcing anything he believed in\" — complete. Right: \"he testified in favor of repeal four years later and now teaches the beginners class the city runs every March\" — complete. Two complete sentences with no conjunction take a semicolon.",
        expWrong:{
          A:'A lone comma between two complete sentences is a splice. The aside earlier in this sentence already used two commas, which is why a third one here reads as more of the same and hides the break.',
          B:'A conjunction may join two sentences only with a comma in front of it ("in, and he testified ..."). A bare "and" leaves them fused.',
          D:'With no mark the two sentences run together, and the reader has to hunt back past a thirty-word subject to find where the first one ended.'
        },
        tip:'Length hides splices. Cover the blank, read only the words to the left, then only the words to the right, and ask of each one: could this stand alone with a period?'
      },

      {
        id:'SPN-16', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: semicolon when the second sentence opens with a long phrase',
        passage:"The dispatch room at the station keeps two clocks, and nobody can remember which shift started the practice. One of them runs on the grid and one on a battery that the crew swaps out every February whether it needs it or %BLANK% during the eleven days without power that followed the ice storm, the battery clock was the only instrument in the building that anyone trusted.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'not,', B:'not', C:'not but', D:'not;'},
        correct:'D',
        expCorrect:"The right side opens with a long phrase (\"during the eleven days without power that followed the ice storm\") before its subject and verb arrive, which makes it look like a fragment. It is not: \"the battery clock was the only instrument in the building that anyone trusted\" is the sentence, and the phrase is only its opener. Two complete sentences with no conjunction take a semicolon.",
        expWrong:{
          A:'A comma between two complete sentences is a splice, whichever of them happens to start with a long introductory phrase.',
          B:'With nothing in the blank, "whether it needs it or not during the eleven days without power" reads as one phrase and the second sentence disappears into the first.',
          C:'"but" can join two sentences, but only with a comma in front of it. A bare conjunction fuses them, and the contrast it promises never gets a mark to sit on.'
        },
        tip:'Do not judge the right-hand side by its first five words. Keep reading until a subject and a verb show up: a sentence may open with a dozen words of scene-setting and still be a sentence.'
      },

      {
        id:'SPN-17', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Boundaries: the opening comma of an aside whose closing comma is already there',
        passage:"The four volunteer fire departments in the county share one ladder truck and argue about it at every budget meeting. The truck %BLANK% bought used from a city three states away and repainted over two winters in a member's garage, spends most of the year parked in Ridgeview, where the only building taller than three stories happens to be.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'itself,', B:'itself', C:'itself;', D:'itself:'},
        correct:'A',
        expCorrect:"The aside closes with the comma before \"spends\", so it has to open with one too. Between them, \"bought used from a city three states away and repainted over two winters in a member's garage\" describes the truck; strip it out and the sentence is \"The truck itself spends most of the year parked in Ridgeview.\"",
        expWrong:{
          B:'Half a pair is not a pair. With the closing comma already printed and the opening one missing, the description runs into the subject and the reader cannot tell where it starts.',
          C:'A semicolon needs a complete sentence in front of it, and "The truck itself" is a subject with no verb.',
          D:'A colon has the same requirement on its left, so a bare subject cannot support one.'
        },
        tip:'When the closing comma of an aside is already printed, the blank in front of the aside is almost always its opening comma. Look at both edges before you choose.'
      },

      /* ══ FORM, STRUCTURE, AND SENSE (SPN-18 a SPN-34) ═══════════════════ */

      {
        id:'SPN-18', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — subject-verb agreement across four stacked modifiers',
        passage:"Every October the harbor office publishes a list of the boats that did not come back for the season, and the list is shorter than it used to be. The stack of unclaimed registration cards in the drawer under the counter at the far end of the hallway %BLANK% thicker every year anyway, because nobody who works there has ever been willing to throw one away.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'grow', B:'grows', C:'have grown', D:'were growing'},
        correct:'B',
        expCorrect:"The subject is \"The stack\" — singular. Everything between it and the blank is four prepositional phrases stacked one inside the next (\"of unclaimed registration cards\", \"in the drawer\", \"under the counter\", \"at the far end of the hallway\"), and a noun inside a prepositional phrase is never the subject. \"The stack ... grows thicker every year.\"",
        expWrong:{
          A:'"grow" is plural. It agrees with "cards", which is the object of "of" and cannot be the subject.',
          C:'"have grown" is plural; the singular would be "has grown". It also reports a change already finished, while the sentence describes what happens every year.',
          D:'"were growing" is plural and past. The subject is singular, and the rest of the sentence ("nobody ... has ever been willing") is present.'
        },
        tip:'Cross out every phrase that begins with of, in, under, at or on. Whatever noun survives is the subject, and it is the only word the verb has to match.'
      },

      {
        id:'SPN-19', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — pronoun agreement with a singular antecedent two sentences back',
        passage:"The Aldridge Library owns exactly one incunable, a book of tide tables printed in Antwerp in 1494. The volume arrived in a crate of duplicates from a school that was closing, and it sat unexamined on a low shelf for six years. The library now keeps a locked case built for %BLANK% alone, and the case cost more than the appraisal it was built to protect.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'them', B:'they', C:'those', D:'it'},
        correct:'D',
        expCorrect:"The pronoun points back to \"one incunable\", called \"The volume\" in the next sentence: one book, singular. After the preposition \"for\", the singular object pronoun is \"it\".",
        expWrong:{
          A:'"them" is plural. The crate of duplicates is plural, but the case was built for the single book, not for the crate.',
          B:'"they" is plural, and it is a subject pronoun besides; after "for" the sentence needs an object pronoun.',
          C:'"those" is plural as well, and standing alone here it points at nothing the passage has made plural.'
        },
        tip:'When a pronoun is far from the noun it replaces, walk back sentence by sentence until you find the noun itself, then match number before you think about anything else.'
      },

      {
        id:'SPN-20', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — parallel form across three long items in a series',
        passage:"The apprenticeship at the Kerrigan boatyard lasts four years, and nobody touches a boat in the first one. A first-year apprentice spends the mornings sharpening chisels, the afternoons steaming oak into frames that the second-years will fasten, and the last half hour of every %BLANK% the floor with a push broom taller than most of them are.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'day sweeping', B:'day sweeps', C:'day to sweep', D:'day and sweeping'},
        correct:'A',
        expCorrect:"The three things the apprentice spends are built the same way: \"the mornings sharpening\", \"the afternoons steaming\", and so the third must be \"the last half hour of every day sweeping\". Noun plus -ing verb, three times.",
        expWrong:{
          B:'"sweeps" is a finite verb, which turns the third item into a second statement about the apprentice and breaks the run of three.',
          C:'"to sweep" is an infinitive; the first two items use -ing forms, and a series has to keep one form throughout.',
          D:'Adding "and" makes "sweeping the floor" hang off "every day" instead of standing as the third item, so the series loses its third member.'
        },
        tip:'Read the items of a series out loud one after another with nothing in between. If they do not have the same shape, the odd one out is what you are being asked to fix.'
      },

      {
        id:'SPN-21', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — plural subject separated from its verb by a long modifier',
        passage:"Seed banks are not museums; they are farms that happen to run on a very slow schedule. The accessions that the vault on the island accepts from every country with a national collection %BLANK% tested for germination on a fixed rotation, and any sample that falls under a set threshold is grown out in a field and replaced with fresh seed.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'is', B:'was', C:'are', D:'has been'},
        correct:'C',
        expCorrect:"The subject is \"The accessions\" — plural. \"that the vault on the island accepts from every country with a national collection\" only describes them, and it already carries its own subject and verb (\"the vault accepts\"), so it cannot supply the verb of the sentence. \"The accessions ... are tested.\"",
        expWrong:{
          A:'"is" is singular; it agrees with "collection", the noun nearest the blank, which sits inside a prepositional phrase inside a description.',
          B:'"was" is singular and past. The paragraph describes standing practice, not one finished event.',
          D:'"has been" is singular; the plural would be "have been". The sentence also describes a repeating rotation rather than a single completed action.'
        },
        tip:'A description that begins with "that" or "who" already owns a subject and a verb. Skip the whole thing and match the main verb to the noun standing in front of it.'
      },

      {
        id:'SPN-22', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — verb tense set by the time frame the paragraph has already fixed',
        passage:"Until 1974 the mill ran its own fire brigade, and that brigade answered calls for the whole township, not only for the mill yard. When the state took coverage over that spring, the mill sold its pumper truck to a collector in Ohio and %BLANK% the alarm bell to the elementary school, where it still hangs above the playground door.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'gives', B:'gave', C:'has given', D:'had given'},
        correct:'B',
        expCorrect:"\"sold\" and the blank share one subject (\"the mill\") and one moment (the spring of 1974): \"the mill sold its pumper truck ... and gave the alarm bell to the elementary school.\" Two verbs for one subject in one past moment take the same simple past form.",
        expWrong:{
          A:'"gives" is present. The whole paragraph is fixed in 1974 by "Until 1974" and "When the state took coverage over that spring".',
          C:'"has given" pulls the action up to the present moment, which contradicts the date the paragraph has already set and breaks the pair with "sold".',
          D:'"had given" would place the gift BEFORE the sale. Nothing in the paragraph puts one ahead of the other; they are two halves of the same handover.'
        },
        tip:'When two verbs share a subject and an "and", they share a tense. Find the verb that is already printed and match it before you reach for anything fancier.'
      },

      {
        id:'SPN-23', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — possessive pronoun matching a singular antecedent named earlier',
        passage:"The council commissioned a study of the night bus network in the spring and then waited. Nine months later the consultants delivered a document of four hundred and twelve pages, and the council voted to accept it without discussion at a meeting that lasted eleven minutes. Not one member has admitted to reading the study in full, though several have quoted %BLANK% executive summary in campaign literature.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'their', B:"it's", C:'theirs', D:'its'},
        correct:'D',
        expCorrect:"The summary belongs to \"the study\" — one document, singular — so the possessive is \"its\". The plural nouns nearby (\"consultants\", \"pages\", \"several\") are not what the summary belongs to.",
        expWrong:{
          A:'"their" is plural. It reaches for "consultants" or the members, but the executive summary belongs to the study.',
          B:'"it\'s" is the contraction of "it is". The possessive of "it" carries no apostrophe at all, which is the one exception worth memorizing.',
          C:'"theirs" is plural, and it is a stand-alone form besides: it can never sit in front of a noun the way "its" does.'
        },
        tip:'Say the two words out loud: if "it is" fits, write "it\'s"; if it does not, write "its". The possessive is the one without the apostrophe.'
      },

      {
        id:'SPN-24', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — the opening modifier lands on the first noun after it',
        passage:"Anyone who has tried to photograph a lunar eclipse from inside a city already knows what the problem is going to be. Set up on the roof of the physics building an hour before totality and aimed through a gap between two air handlers, %BLANK% caught the red disk cleanly enough, but the sodium glare washed out everything within two degrees of it.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'the borrowed camera', B:'the students', C:'the night sky', D:'the physics department'},
        correct:'A',
        expCorrect:"The opener describes one thing that was set up on the roof and aimed through a gap, and whatever noun comes first after the opener is the thing it describes. Only the camera was set up and aimed, so the camera has to be the noun that follows.",
        expWrong:{
          B:'The students may well have been on the roof, but they were not "aimed through a gap between two air handlers". An opening description lands on whatever noun comes first after it.',
          C:'The night sky was not set up on the roof by anyone; it is what the camera was aimed at.',
          D:'A department cannot be aimed through a gap. The opener describes a piece of equipment, so a piece of equipment has to follow it.'
        },
        tip:'An opening description attaches to the very next noun, not to the one you had in mind. Read the opener, read the first noun after it, and ask whether that noun really did what the opener says.'
      },

      {
        id:'SPN-25', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — parallel verb forms in a three-part series',
        passage:"The grant application asks three questions and allows half a page for each, which is less room than it sounds like. Reviewers say the proposals that survive the first round explain what the applicant intends to build, name the single number that would prove the thing worked, and %BLANK% who will keep it running once the money is gone.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'saying', B:'to say', C:'say', D:'they say'},
        correct:'C',
        expCorrect:"The three things the surviving proposals do are \"explain\", \"name\", and the blank. All three hang on the same subject (\"the proposals that survive the first round\"), so all three take the same plain present form: explain ... name ... and say.",
        expWrong:{
          A:'"saying" is a participle. The first two items are finite verbs, and a series cannot change form halfway through.',
          B:'"to say" is an infinitive and matches neither "explain" nor "name".',
          D:'Adding "they" gives the third item its own subject, which turns it into a separate statement stranded at the end of the series.'
        },
        tip:'Find every item in the series and line up their first words: explain / name / ___. The blank copies their form exactly.'
      },

      {
        id:'SPN-26', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — plural possessive with the apostrophe after the s',
        passage:"The county keeps two sets of maps for the same twelve townships, and the two do not agree. Three surveyors walked the line in the summer of 1956 with chains and a borrowed transit, and the %BLANK% boundaries, copied without comment into every deed written since, run as much as ninety feet from the ones the assessor uses in the river bottoms.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:"surveyor's", B:"surveyors'", C:'surveyors', D:"surveyors's"},
        correct:'B',
        expCorrect:"Three surveyors drew the boundaries, so the owner is plural. Write the plural first (\"surveyors\") and then put the apostrophe after the s that is already there: surveyors'.",
        expWrong:{
          A:'"surveyor\'s" marks one owner, and the passage says three walked the line.',
          C:'"surveyors" is the plain plural. It names the men but never says the boundaries are theirs.',
          D:'A plural that already ends in s never takes another s after the apostrophe.'
        },
        tip:'Two steps, always in this order: write the plural, then put the apostrophe at the end of it. Never place the apostrophe first and decide about the s afterward.'
      },

      {
        id:'SPN-27', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — subject-verb agreement when the subject is the number of something',
        passage:"Ferries on the lake ran on a printed timetable for ninety years and on an app for the last three, and the crews will tell you the app changed nothing about the water. The number of crossings the company cancels for weather in an ordinary winter %BLANK% still under twenty, though the cancellations now reach the passengers in the time it takes to send a notification.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'are', B:'were', C:'have been', D:'is'},
        correct:'D',
        expCorrect:"\"The number of ...\" is always singular: the thing being talked about is one number. Everything after it (\"of crossings the company cancels for weather in an ordinary winter\") only says which number. \"The number ... is still under twenty.\"",
        expWrong:{
          A:'"are" is plural and agrees with "crossings", which sits inside the phrase describing the number rather than naming the subject.',
          B:'"were" is plural and past, and the sentence describes what an ordinary winter still looks like.',
          C:'"have been" is plural; the singular is "has been". The present tense of the rest of the sentence also asks for a plain "is".'
        },
        tip:'"The number of" takes a singular verb; "a number of" means "several" and takes a plural one. The article decides it, not the noun after "of".'
      },

      {
        id:'SPN-28', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — two subjects linked by and take a plural verb',
        passage:"Two machines keep the observatory alive through the winter, and neither of them is glamorous. The diesel generator in the shed behind the dome and the propane heater that the crew rebuilt out of salvaged parts the year the road washed out %BLANK% serviced every October by the same technician, who flies in from the coast and stays four days.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'are', B:'is', C:'was', D:'has been'},
        correct:'A',
        expCorrect:"Two things are being serviced: \"The diesel generator ... and the propane heater ...\". Two subjects linked by \"and\" make a plural subject, whatever the words trailing after the second one look like, so the verb is \"are serviced\".",
        expWrong:{
          B:'"is" is singular. It follows the nearest noun, "the road", which belongs to a description buried inside another description.',
          C:'"was" is singular and past; the servicing happens every October, and there are two machines.',
          D:'"has been" is singular, and it reports one finished visit instead of the yearly routine the sentence describes.'
        },
        tip:'X and Y equals plural. Find the "and" that links the two subjects, not the ones buried in the descriptions hanging off them.'
      },

      {
        id:'SPN-29', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — past perfect verb form for the earlier of two past events',
        passage:"The ledger of the Dunwoody mercantile stops in the middle of a page in March of 1893, and for a century historians assumed the store simply closed that spring. A second ledger, found in a barn in 2009 and given to the county museum, shows that by the time the first one stopped, the family %BLANK% the business to a cousin and moved to Texas, where they opened a store under the same name.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'sold', B:'has sold', C:'had sold', D:'would sell'},
        correct:'C',
        expCorrect:"\"by the time the first one stopped\" fixes a past moment, and the sale happened before it. The earlier of two past events takes the past perfect: \"by the time the first one stopped, the family had sold the business to a cousin.\"",
        expWrong:{
          A:'"sold" is simple past, which puts the sale at the same moment as the stopping. The sentence says the sale was already done by then.',
          B:'"has sold" ties the sale to right now, and the family sold the business in the 1890s.',
          D:'"would sell" places the sale after the ledger stopped, which is the opposite of what "by the time" sets up.'
        },
        tip:'Two past events in one sentence: the earlier one takes "had". The phrases that give it away are "by the time", "before", and "by 1893".'
      },

      {
        id:'SPN-30', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — possessive pronoun with a plural antecedent three sentences back',
        passage:"Two rival almanacs were printed in the same Boston shop for thirty years. Each claimed to predict the weather a full year ahead, and each accused the other of copying. Neither has survived as a complete run: libraries hold odd years, and the gaps do not overlap. A scholar who wants to compare %BLANK% predictions for a single season has to visit at least three collections.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'its', B:'their', C:"it's", D:'them'},
        correct:'B',
        expCorrect:"What is being compared is the two almanacs, so the possessive is plural: \"compare their predictions\". \"Neither has survived\" is singular because \"neither\" means \"not one of the two\", but that does not change what the scholar is holding up against what.",
        expWrong:{
          A:'"its" is singular. It is pulled in by "Neither has survived" in the sentence before, but a comparison needs both almanacs.',
          C:'"it\'s" means "it is" and can never show possession.',
          D:'"them" is an object pronoun and cannot sit in front of a noun: "compare them predictions" is not English.'
        },
        tip:'A pronoun matches the noun it stands for, not the nearest verb. Ask what is actually being compared, counted or owned before you settle on a number.'
      },

      {
        id:'SPN-31', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — parallel verb forms when the blank is the middle of three',
        passage:"A field guide does three things that a photograph, however good, cannot manage. It shows the bird in the posture the species actually holds rather than the one it happened to be caught in, %BLANK% the two or three marks that separate it from the bird it is most often mistaken for, and leaves out everything else on purpose.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'pointing out', B:'it points out', C:'to point out', D:'points out'},
        correct:'D',
        expCorrect:"The three things are \"shows ... , ___ ... , and leaves out ...\". The first and the third are plain present verbs sharing the subject \"It\", so the middle one is too: \"points out\".",
        expWrong:{
          A:'"pointing out" is a participle and breaks the run of finite verbs on either side of it.',
          B:'Adding "it" turns the middle item into a sentence of its own, wedged between two verbs that still belong to the first subject.',
          C:'"to point out" is an infinitive, and neither neighbor uses that form.'
        },
        tip:'When the blank is the middle of three, look at BOTH neighbors. Matching only the item in front of it is how a series ends up with two different forms.'
      },

      {
        id:'SPN-32', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — the opening modifier has to describe the noun placed right after it',
        passage:"People who restore player pianos spend most of their time on the pneumatics and almost none on the strings. Rebuilt with new leather, tested for a week against a roll whose holes the shop had measured under a microscope, and regulated twice afterward, %BLANK% finally played the Joplin piece at the tempo the composer marked, which the owner said he had never once heard it do.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'the mechanism', B:'the restorers', C:'the roll', D:'the shop'},
        correct:'A',
        expCorrect:"The opener lists three things done to one object: it was rebuilt with leather, tested against a roll, and regulated twice. Only the mechanism can be all three, and the noun that follows an opening description is the noun the description lands on.",
        expWrong:{
          B:'The restorers did the rebuilding; they were not rebuilt with new leather. Putting them first makes the opener describe them.',
          C:'The roll is what the mechanism was tested against, and the opener says the roll was measured, not rebuilt.',
          D:'The shop measured the holes under a microscope. Nothing in the opener was done to the shop itself.'
        },
        tip:'An opening description with three parts still lands on ONE noun. Test the noun you want against every part of the description, not just the first part.'
      },

      {
        id:'SPN-33', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — singular subject buried behind three long modifiers',
        passage:"Grain elevators along the branch line were put up by cooperatives that no longer exist, and most of their paperwork went into a landfill. The set of loading records that the last manager boxed up the week the co-op dissolved and that a neighbor then kept dry in a hayloft for nineteen winters %BLANK% the only account anyone has of what the line actually carried after the war.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'are', B:'were', C:'is', D:'have been'},
        correct:'C',
        expCorrect:"The subject is \"The set\" — one set — and the blank is its verb. Three things stand in between: a prepositional phrase (\"of loading records\"), a description with its own subject and verb (\"that the last manager boxed up\") and a second one (\"that a neighbor then kept dry\"). None of them can be the subject, so the verb is singular: \"The set ... is the only account.\"",
        expWrong:{
          A:'"are" is plural and agrees with "records", which is the object of "of".',
          B:'"were" is plural and past. The records still exist, and the sentence says what they are now.',
          D:'"have been" is plural; the singular would be "has been". The rest of the sentence also asks for a plain present verb.'
        },
        tip:'Find the main verb first, then ask who or what is doing it. Any noun inside an "of" phrase or a "that" description is disqualified before you start.'
      },

      {
        id:'SPN-34', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — parallel verb forms after not only and but also',
        passage:"The snow plan the city adopted after the storm of 2019 contains one rule that no neighboring town copies. Crews are told not only to clear the hills before the flats, a choice that costs them roughly forty minutes on an average storm and generates most of the complaints, but also %BLANK% the bus routes twice, once before the morning peak and once after, even when the second pass looks like a waste of salt.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'running', B:'to run', C:'run', D:'they run'},
        correct:'B',
        expCorrect:"\"not only\" is followed by \"to clear\". Whatever follows \"but also\" has to match it exactly, and the long aside in between (\"a choice that costs them roughly forty minutes ... and generates most of the complaints\") changes nothing: not only to clear ... but also to run ...",
        expWrong:{
          A:'"running" is a participle, and the half in front of it uses an infinitive. The pair has to be built from the same form.',
          C:'"run" is a bare verb with no "to". Read the two halves back to back: "not only to clear ... but also run" does not line up.',
          D:'Adding a subject turns the second half into a statement of its own, and "not only" is left waiting for its partner.'
        },
        tip:'not only X but also Y: whatever grammatical shape X has, Y copies. Cover everything between the two halves and read them back to back.'
      }

    ]
  });
})();
