/* SAT Studio question set — Reading & Writing: Boundaries, hard cases (BDB-01 to BDB-34)
   Segunda tanda de la destreza oficial "Boundaries" (Standard English Conventions).
   rw-bound-a cubre las reglas generales; este archivo va a los casos que ese no
   toca:
     · punto y coma CONTRA dos puntos resuelto por lo que viene DESPUES
       (lista o frase -> dos puntos; oracion que contrasta -> punto y coma).
       Nunca se ofrecen los dos como defendibles en la misma pregunta.
     · citas: coma antes de la cita, punto y coma DENTRO de las comillas
       (uso americano), y la cita integrada a la sintaxis que no lleva coma.
     · elementos no esenciales ANIDADOS y rayas obligatorias cuando el inciso
       ya tiene comas propias.
     · listas donde un elemento lleva su propia aposicion (punto y coma entre
       elementos, coma dentro del elemento) y el caso inverso.
     · la coma de la subordinada inicial larga que termina en un sustantivo
       que el lector se lleva como sujeto (garden path).
     · "that" esencial contra "which" no esencial con el sentido cambiando.
     · aposiciones al principio de la oracion.
     · la raya que interrumpe y RETOMA la oracion.
   Las cuatro opciones de cada pregunta son el MISMO texto con distinta
   puntuacion (o una palabra distinta cuando el distractor es del tipo
   "comma splice con transicion" o "that/which"), a proposito: el largo no
   delata nada. */
window.SAT_SETS.push({
  id: 'rw-bound-b',
  title: 'Boundaries — The Hard Cases',
  section: 'rw',
  level: 'Difícil',
  description: 'Colon against semicolon when both look defensible, quotation marks, nested asides, lists whose items carry their own appositives, and the essential-clause traps. Same words in every choice; only the punctuation moves.',
  minutes: 34,
  questions: [
    {
      id:'BDB-01', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: comma before a direct quotation',
      passage:'On her first morning at the sign shop, the foreman handed Nkemdi a brush and %BLANK% "Letters are shapes before they are words."',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'said', B:'said,', C:'said.', D:'said;'},
      correct:'B',
      expCorrect:'A quotation announced by a reporting verb (said, asked, replied, wrote) is attached with a comma. The quotation is the direct object of "said," so the two belong to one sentence: "the foreman handed Nkemdi a brush and said, \'Letters are shapes before they are words.\'"',
      expWrong:{
        A:'With no mark the reporting verb runs straight into the speech, and the reader cannot see where the foreman stops and the quotation starts.',
        C:'A period ends the sentence on a verb that never got its object, and it leaves the quotation stranded with nothing to introduce it.',
        D:'A semicolon needs a complete sentence on each side. "the foreman handed Nkemdi a brush and said" is not one, and the quotation is that verb\'s object, not a separate statement.'
      },
      tip:'Reporting verb plus quotation = comma. Nothing that CLOSES a clause — a period or a semicolon — can stand between a verb and its own object.'
    },
    {
      id:'BDB-02', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: the period goes inside the closing quotation mark',
      passage:'The last entry in the caulker\'s notebook, written the week the boatyard closed, reads, "A seam you can see from the dock was already leaking last %BLANK% Nobody has opened the book since.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'winter".', B:'winter,"', C:'winter"', D:'winter."'},
      correct:'D',
      expCorrect:'The quotation ends here and so does the sentence, and the next word ("Nobody") starts a new one. In American usage the period that ends a quoted sentence goes INSIDE the closing quotation mark: ... leaking last winter."',
      expWrong:{
        A:'This is the British convention. On the SAT, periods and commas always sit inside the closing quotation mark; only colons and semicolons go outside.',
        B:'A comma cannot end a sentence, and the capitalized "Nobody" that follows proves a new sentence is starting.',
        C:'The quotation closes but the sentence never does: there is no terminal mark at all before a new capitalized sentence.'
      },
      tip:'Periods and commas: inside the quotation marks, always. Colons and semicolons: outside, always. Decide first whether the sentence ENDS there — that is what chooses between the period and the comma.'
    },
    {
      id:'BDB-03', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: appositive placed before the noun it renames',
      passage:'A retired dairy barn with a floor that still slopes toward a %BLANK% the village archive keeps its oldest deeds in what used to be the milk room.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'drain,', B:'drain;', C:'drain', D:'drain:'},
      correct:'A',
      expCorrect:'"A retired dairy barn with a floor that still slopes toward a drain" renames "the village archive," and it has been moved in front of the noun it renames. It is still a nonessential element, so a comma closes it and the main clause ("the village archive keeps its oldest deeds...") finishes the sentence.',
      expWrong:{
        B:'A semicolon demands a complete sentence on each side. The words before the blank have no main verb of their own — "slopes" belongs to the relative clause "that still slopes toward a drain."',
        C:'With no comma the reader keeps stacking nouns ("a drain the village archive") and never finds where the subject of the sentence begins.',
        D:'A colon also demands a complete sentence in front of it, and a long noun phrase, however long, is not a sentence.'
      },
      tip:'An appositive can come BEFORE its noun. Test it by moving it behind: "The village archive, a retired dairy barn..., keeps..." If it works there with commas, it needs its comma here.'
    },
    {
      id:'BDB-04', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: comma after a long introductory subordinate clause',
      passage:'When the crew that raises the hop poles every spring finishes the last %BLANK% the trellis is left standing until the vines are cut in September.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'row;', B:'row', C:'row,', D:'row:'},
      correct:'C',
      expCorrect:'"When the crew that raises the hop poles every spring finishes the last row" opens with "When," so it cannot stand alone no matter how long it grows. A subordinate clause placed first is closed with a comma, and then the main clause ("the trellis is left standing...") carries the sentence.',
      expWrong:{
        A:'A semicolon needs an independent clause on both sides, and a clause that begins with "When" is dependent by definition.',
        B:'Without the comma "the last row the trellis" fuses into one phrase and the reader has to back up to find the real subject.',
        D:'A colon needs a complete sentence in front of it; a dependent clause has nothing to announce.'
      },
      tip:'Length does not change the rule. Find the main subject and verb, then put the comma immediately before them — that is where the introductory clause stops.'
    },
    {
      id:'BDB-05', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: nonessential clause takes a comma and "which"',
      passage:'The whole archive of the rope makers\' guild fits inside one steel %BLANK% has stood in the same corner of the reading room since 1962.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'cabinet which', B:'cabinet that', C:'cabinet; which', D:'cabinet, which'},
      correct:'D',
      expCorrect:'There is exactly one cabinet — the whole archive fits inside it — so nothing is left to narrow down. The clause only adds a fact, which makes it nonessential: comma plus "which." Delete it and "The whole archive of the rope makers\' guild fits inside one steel cabinet" still stands as a sentence.',
      expWrong:{
        A:'"which" with no comma is punctuated as though the clause narrowed a group of cabinets, but the sentence has already said there is one.',
        B:'"that" marks an essential clause. An essential clause answers "which one?", and here the question has no work to do.',
        C:'A semicolon needs a complete sentence after it, and "which has stood in the same corner of the reading room since 1962" cannot stand alone.'
      },
      tip:'Ask whether deleting the clause would leave the reader wondering WHICH one. If the noun is already unique ("one," "the only," a name), the clause is extra: comma plus "which."'
    },
    {
      id:'BDB-06', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: paired dashes, closing the pair',
      passage:'The pilot boat\'s job—to put one person aboard a moving ship and take another %BLANK% has not changed in two hundred years.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'off—', B:'off,', C:'off', D:'off:'},
      correct:'A',
      expCorrect:'The aside "to put one person aboard a moving ship and take another off" is fenced off from the sentence, and the opening dash is already visible. Fences come in matching pairs, so the blank has to supply the closing dash. Delete what is between them and a sentence survives: "The pilot boat\'s job has not changed in two hundred years."',
      expWrong:{
        B:'Mismatched pair. What a dash opens, a dash closes; a comma cannot answer a dash.',
        C:'With nothing here the aside never closes, so the infinitive phrase runs into the main verb: "take another off has not changed."',
        D:'A colon does not close an aside, and it would cut the subject "job" away from its verb "has."'
      },
      tip:'Dash with dash, comma with comma, parenthesis with parenthesis. When one mark is already on the page, the blank has to match its KIND, not just its pause.'
    },
    {
      id:'BDB-07', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: attribution interrupting a quotation',
      passage:'"Report every plume, even the one that looks like %BLANK% the 1937 handbook told new fire lookouts, "and report it twice when the wind comes from the south."',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'dust",', B:'dust."', C:'dust,"', D:'dust"'},
      correct:'C',
      expCorrect:'The attribution interrupts one quoted sentence: remove it and the halves read as a single instruction ("Report every plume... and report it twice..."). The first half therefore ends in a comma, and in American usage that comma sits INSIDE the closing quotation mark.',
      expWrong:{
        A:'The comma is outside the quotation mark. American usage puts commas and periods inside, without exception.',
        B:'A period would end the quoted sentence, but the quotation is not finished — it picks up after the attribution with a lowercase "and."',
        D:'With no mark the quotation closes and slams into the attribution, and the reader loses the boundary between speech and source.'
      },
      tip:'When "he said" cuts a quotation in half, look at the word that opens the second half. Lowercase means it is the same sentence: the first half closes with a comma inside the quotation marks.'
    },
    {
      id:'BDB-08', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: quotation integrated into the sentence takes no punctuation',
      passage:'The cooper who still raises barrels by hand at the distillery describes his trade %BLANK% "arithmetic you can hear."',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'as,', B:'as', C:'as:', D:'as;'},
      correct:'B',
      expCorrect:'The quotation is not announced here; it is the object of "as" and a grammatical part of the sentence — "describes his trade as arithmetic you can hear." Quotation marks do not change the structure, so nothing goes between the preposition and what it governs.',
      expWrong:{
        A:'A comma would cut "as" from its object. Only a quotation ANNOUNCED by a reporting verb takes a comma.',
        C:'A colon needs a complete sentence in front of it, and "describes his trade as" stops in the middle of a thought.',
        D:'A semicolon needs a complete sentence on both sides; neither side qualifies.'
      },
      tip:'Two kinds of quotation. Announced ("she said, \'...\'") takes a comma. Woven in (after as, that, is, of) takes nothing at all.'
    },
    {
      id:'BDB-09', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: colon because what follows is a list, not a sentence',
      passage:'The avalanche forecaster digs the same pit every morning and writes down the same three %BLANK% the depth of each layer, the size of the grains, and how hard a fist has to push before the layer breaks.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'things;', B:'things,', C:'things', D:'things:'},
      correct:'D',
      expCorrect:'Everything before the blank is already a complete sentence ("The avalanche forecaster digs the same pit every morning and writes down the same three things"), and what follows is the list that spells the three out. A complete sentence in front, a list behind: that is the colon.',
      expWrong:{
        A:'A semicolon needs a complete sentence AFTER it too. Three noun phrases in a row have no main verb, so they cannot stand alone.',
        B:'A comma cannot announce a list; "the depth of each layer" would read as one more thing hanging off "writes down."',
        C:'With no mark the list collides with the clause and "three things the depth of each layer" becomes unreadable.'
      },
      tip:'Before choosing between colon and semicolon, read what comes AFTER. A list or a phrase can only follow a colon; a semicolon demands a full sentence on both sides.'
    },
    {
      id:'BDB-10', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: semicolon, not a period, when the next clause stays lowercase',
      passage:'Every April the club repaints the blazes on the eastern half of the %BLANK% the western half belongs to the county and has not been blazed since 2014.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'trail.', B:'trail;', C:'trail,', D:'trail'},
      correct:'B',
      expCorrect:'Both sides stand alone: "Every April the club repaints the blazes on the eastern half of the trail" and "the western half belongs to the county and has not been blazed since 2014." Two complete sentences with no conjunction take a semicolon — and the semicolon keeps them inside one sentence, which is why the next word stays lowercase.',
      expWrong:{
        A:'A period would end the sentence, but the passage goes on in lowercase ("the western half..."). A new sentence has to open with a capital letter.',
        C:'Comma splice: a lone comma cannot hold two complete sentences together.',
        D:'With no mark at all the two sentences fuse into a run-on.'
      },
      tip:'The word after the blank decides between the two strongest marks. Capitalized and not a name means a period; lowercase with a full sentence on each side means a semicolon.'
    },
    {
      id:'BDB-11', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: essential "that" clause, no comma',
      passage:'The orchard keeps two rows of trees %BLANK% were grafted before 1900, and it replants the rest of the block every fifteen years.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:', which', B:'which', C:'that', D:', that'},
      correct:'C',
      expCorrect:'The clause is doing the identifying: of all the orchard\'s trees, these two rows are the old ones. The rest of the sentence proves it — "it replants the rest of the block" means other trees exist. An essential clause takes "that" and no comma.',
      expWrong:{
        A:'With the comma the clause becomes an extra fact about the orchard\'s trees in general, which collides with "the rest of the block" later in the sentence.',
        B:'"which" with no comma sends two opposite signals at once: the word says extra, the punctuation says essential.',
        D:'A comma never precedes an essential "that" clause. The pair does not exist in Standard English.'
      },
      tip:'Read the whole sentence before choosing. Words like "the rest," "the others," or "the remaining" mean the noun is one of several, so the clause has to narrow: "that," no comma.'
    },
    {
      id:'BDB-12', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: paired dashes, opening the pair',
      passage:'The one tool the sharpener will not lend %BLANK% a fine India stone he bought in 1979—stays in a drawer he keeps locked.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'out—', B:'out,', C:'out', D:'out:'},
      correct:'A',
      expCorrect:'The closing dash is already sitting before "stays," so an aside has to open somewhere — and it opens right where the appositive begins. With the pair in place the sentence reads "The one tool the sharpener will not lend out stays in a drawer he keeps locked."',
      expWrong:{
        B:'Mismatched pair: a comma cannot open what a dash closes.',
        C:'With nothing here the aside never opens, and the closing dash is left dangling with no partner.',
        D:'A colon would announce the appositive rather than fence it, and the dash later in the sentence would have nothing to match.'
      },
      tip:'Read past the blank before you punctuate. A dash further along the sentence tells you exactly which mark the blank must be.'
    },
    {
      id:'BDB-13', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: comma after an introductory clause that ends on a noun',
      passage:'Because the ferry cannot dock until the tide is high enough to lift it over the sill at the harbor %BLANK% the timetable is printed as a list of tides instead of a list of hours.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'mouth', B:'mouth;', C:'mouth:', D:'mouth,'},
      correct:'D',
      expCorrect:'Everything up to the blank hangs on "Because," so it cannot stand alone; "the timetable is printed as a list of tides instead of a list of hours" is the main clause. The comma marks where the setup ends — and it is doing real work, because "mouth" is a noun the reader is ready to take as a subject.',
      expWrong:{
        A:'This is the trap. With no comma the reader carries "the harbor mouth" forward as a subject and has to start over when "the timetable" turns up instead.',
        B:'A semicolon needs a complete sentence on each side, and a clause opening with "Because" is dependent.',
        C:'A colon needs a complete sentence in front of it, and this one never closes its thought.'
      },
      tip:'When a long "Because/When/Although" clause ends on a noun, the comma is what tells the reader that noun is NOT the subject. Locate the main verb first, then set the comma in front of its subject.'
    },
    {
      id:'BDB-14', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: semicolons between list items when one item carries an appositive',
      passage:'The estate sale offered the three things the print shop needed: a linotype machine, a two-ton relic with a line of type still in its %BLANK% eleven cases of wood letters, most of them poplar; and a proof press with its original bed.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'jaws,', B:'jaws', C:'jaws;', D:'jaws:'},
      correct:'C',
      expCorrect:'The first item carries its own appositive ("a two-ton relic with a line of type still in its jaws"), so it already contains a comma. When any item has internal commas, semicolons divide the items — and the sentence shows the pattern later with "most of them poplar; and a proof press."',
      expWrong:{
        A:'A fourth comma is invisible here: "eleven cases of wood letters" would look like one more piece of the first item, and the sentence promises three things, not a blur.',
        B:'With no mark the first item and the second fuse and the list loses a boundary.',
        D:'The colon has already done its job introducing the list; it cannot also separate items inside it.'
      },
      tip:'If any item in a list contains a comma, every item is divided by a semicolon. Count the items the sentence promises and make the marks add up to that number.'
    },
    {
      id:'BDB-15', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: closing an appositive that has another aside nested inside it',
      passage:'Ama Boateng, the surveyor who first mapped the cave system and who, after two floods rearranged it, mapped the whole thing %BLANK% keeps her field notebooks in a bank vault.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'again,', B:'again', C:'again—', D:'again;'},
      correct:'A',
      expCorrect:'Two asides are stacked here. The inner one, "after two floods rearranged it," has already opened and closed with its own commas. The outer one is the appositive that opened with the comma after "Boateng," so it has to close with a comma too — and then the subject finally meets its verb: "Ama Boateng keeps her field notebooks in a bank vault."',
      expWrong:{
        B:'Without the closing comma the appositive never ends, and "mapped the whole thing again keeps" leaves two verbs colliding with no subject between them.',
        C:'Mismatched pair: the outer aside opened with a comma, so a dash cannot close it.',
        D:'A semicolon needs a complete sentence on each side, and everything before the blank is a subject plus an interrupted appositive.'
      },
      tip:'Asides can nest. Close the inner one first, then look back for the mark that opened the OUTER one and match it. Delete both asides: the subject and the verb have to meet.'
    },
    {
      id:'BDB-16', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: dashes because the aside already contains commas',
      passage:'A bowl of iron ore, powdered charcoal, and river clay—the entire recipe for a tatara %BLANK% sits on the bench where the smelter shows visitors what a blade starts as.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'furnace,', B:'furnace—', C:'furnace', D:'furnace;'},
      correct:'B',
      expCorrect:'"the entire recipe for a tatara furnace" renames the subject, and the dash that opened it is already on the page — chosen because the subject itself is a list full of commas. The closing mark has to be the matching dash, after which the sentence finishes: "A bowl of iron ore, powdered charcoal, and river clay sits on the bench..."',
      expWrong:{
        A:'A comma cannot close what a dash opened, and it would be the fourth comma in a row: the reader would have no way to see the aside end.',
        C:'With nothing here the aside swallows the sentence, and "a tatara furnace sits on the bench" takes over as the main statement.',
        D:'A semicolon needs a complete sentence on each side; the words before the blank are one long noun phrase.'
      },
      tip:'When the aside — or the words around it — already carry commas, switch to dashes. The reader needs a different kind of fence to see where the interruption stops.'
    },
    {
      id:'BDB-17', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: quotation followed by its attribution',
      passage:'"The mortar is the weakest thing in any %BLANK% the waller tells every apprentice on the first morning, and the apprentices hear it again all summer.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'wall",', B:'wall."', C:'wall,', D:'wall,"'},
      correct:'D',
      expCorrect:'The quotation comes first and its attribution follows, so the quoted sentence ends in a comma rather than a period — and the comma goes inside the closing quotation mark. The sentence itself keeps going all the way to "all summer."',
      expWrong:{
        A:'The comma is outside the quotation mark; American usage puts commas and periods inside.',
        B:'A period would close the whole sentence, but "the waller tells every apprentice on the first morning" is the attribution this quotation depends on.',
        C:'The quotation never closes, so the reader cannot tell where the waller stops speaking and the narration starts.'
      },
      tip:'Quotation first, attribution after: the quotation ends in a comma, inside the quotation marks. Only the last mark of the whole sentence gets to be a period.'
    },
    {
      id:'BDB-18', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: colon introducing a single appositive phrase',
      passage:'After forty years of racing pigeons, Halloran has come to trust only one %BLANK% the hen that comes home in bad weather and eats before she drinks.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'sign:', B:'sign;', C:'sign,', D:'sign'},
      correct:'A',
      expCorrect:'"After forty years of racing pigeons, Halloran has come to trust only one sign" could end in a period, and the phrase that follows says what that sign is. A colon can introduce a single phrase, not only a list — what precedes must be a sentence; what follows never has to be.',
      expWrong:{
        B:'A semicolon needs a complete sentence after it, and "the hen that comes home in bad weather and eats before she drinks" is a noun phrase with no main verb.',
        C:'A comma makes the phrase an afterthought, as if Halloran trusted a sign and separately trusted a hen.',
        D:'With no mark "one sign the hen that comes home" fuses two pieces that were never meant to touch.'
      },
      tip:'The colon looks BACKWARD first: cover everything after it and what is left must be able to end in a period. What follows can be a list, a phrase, or a whole sentence.'
    },
    {
      id:'BDB-19', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: dashes that interrupt and then resume the sentence',
      passage:'The repair ship\'s crew—thirty-one people, most of them asleep at any given %BLANK% can be splicing a cable four kilometers down within a day of the alarm.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'hour,', B:'hour)', C:'hour—', D:'hour'},
      correct:'C',
      expCorrect:'The sentence interrupts itself between the subject and its verb, and the dash that opened the interruption is visible. The closing dash lets the sentence pick up exactly where it left off: "The repair ship\'s crew can be splicing a cable four kilometers down within a day of the alarm."',
      expWrong:{
        A:'A comma cannot close a dash, and it would disappear among the commas already inside the aside.',
        B:'A parenthesis cannot close what a dash opened; fences must match in kind.',
        D:'Without a closing mark the aside never ends, and "most of them asleep at any given hour can be splicing" becomes the main statement.'
      },
      tip:'Delete everything between the pair of dashes. What is left has to be a complete sentence — that single test catches both a missing fence and a mismatched one.'
    },
    {
      id:'BDB-20', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: nonessential clause after a noun a superlative already identifies',
      passage:'Reed making on the island has always passed from parent to child, and the Muirs\' oldest %BLANK% who took over the bench at nineteen, is the fourth in the line.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'daughter', B:'daughter,', C:'daughter;', D:'daughter:'},
      correct:'B',
      expCorrect:'"the Muirs\' oldest daughter" is already one specific person — a superlative leaves nothing to narrow — so the clause about the bench is extra information. The closing comma is already there before "is," so the blank supplies the matching opening comma.',
      expWrong:{
        A:'Without the opening comma the clause reads as essential, as though the Muirs had several oldest daughters and this one were picked out by the year she took the bench.',
        C:'A semicolon needs a complete sentence on each side, and the words before the blank are a subject with no verb yet.',
        D:'A colon would cut the subject "daughter" away from its verb "is."'
      },
      tip:'Superlatives and "the only" settle identity by themselves, so what follows is usually extra — unless the clause is what MAKES the noun the only one. Check which half is doing the identifying.'
    },
    {
      id:'BDB-21', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries: semicolon, not colon, when the second clause contradicts the first',
      passage:'The divers can pull urchins off the reef faster than the urchins come %BLANK% the kelp itself is in no hurry, and cleared rock can stay bare for three winters.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'back:', B:'back,', C:'back', D:'back;'},
      correct:'D',
      expCorrect:'Cover the blank. Left: "The divers can pull urchins off the reef faster than the urchins come back" — complete. Right: "the kelp itself is in no hurry, and cleared rock can stay bare for three winters" — also complete. Two complete sentences with no conjunction between them take a semicolon.',
      expWrong:{
        A:'A colon promises that the second part will deliver the first — define it, list it, or explain it. Nothing about the kelp explains how fast the divers work; the clause sets a slow process against a fast one, which is contrast, not delivery.',
        B:'Comma splice. Two complete sentences cannot be held together by a comma alone.',
        C:'With no mark the two sentences run on, and "come back the kelp" gives the reader no boundary.'
      },
      tip:'Colon and semicolon are never both right. Decide by what the second half DOES: spells out the first (colon) or stands beside it, often in contrast (semicolon).'
    },
    {
      id:'BDB-22', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries: colon when what follows only looks like a sentence',
      passage:'Of the eleven thousand tagged wings the project has recovered since 1998, exactly one has answered the question the tags were made to %BLANK% a female found in a fir grove in central Mexico eleven weeks after a schoolchild released her in Ontario.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'ask:', B:'ask;', C:'ask,', D:'ask'},
      correct:'A',
      expCorrect:'The words in front of the blank close a thought ("...exactly one has answered the question the tags were made to ask"), and what follows identifies that one. It is a noun phrase, not a sentence: "found" and "released" belong to the modifiers, so the phrase has no main verb. A complete sentence plus a phrase that renames something in it is a colon.',
      expWrong:{
        B:'A semicolon needs a complete sentence after it. Hunt for a main verb in "a female found in a fir grove... eleven weeks after a schoolchild released her" and there is none.',
        C:'A comma buries the identification among the commas the sentence is already carrying, so it reads as one more modifier of "the question."',
        D:'With no mark the phrase fuses onto "ask," and the sentence appears to say that the tags were made to ask a female.'
      },
      tip:'Test what follows the mark for a MAIN verb. Participles — found, built, released, written — are not main verbs, so a string of them is a phrase, and a phrase can only follow a colon.'
    },
    {
      id:'BDB-23', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries: comma splice created by a transition word',
      passage:'Flooding the bog makes the harvest fast and gentle on the %BLANK% it does nothing for the fruit that will be sold fresh, which still has to be picked dry.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'vines, however,', B:'vines; however,', C:'vines however,', D:'vines: however,'},
      correct:'B',
      expCorrect:'"Flooding the bog makes the harvest fast and gentle on the vines" and "it does nothing for the fruit that will be sold fresh" are both complete sentences. "however" is a transition, not a conjunction, so it cannot join them: the semicolon does the joining and the comma after "however" sets the transition off inside the second sentence.',
      expWrong:{
        A:'This is the comma splice the test loves. A comma plus "however" looks like a join, but "however" has no power to hold two sentences together.',
        C:'The two sentences are still fused, and the transition has lost the comma that should follow it.',
        D:'A colon promises that the second half explains the first, and "however" announces the opposite of an explanation.'
      },
      tip:'FANBOYS (for, and, nor, but, or, yet, so) can join sentences with a comma. Transitions (however, therefore, moreover, instead, nevertheless) cannot — they need a semicolon in front and a comma behind.'
    },
    {
      id:'BDB-24', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Boundaries: closing a dashed aside that has a comma aside nested inside it',
      passage:'The clockmaker who rebuilt the cathedral movement—an apprentice in 1971, and, by the time the bells rang again, a grandmother of %BLANK% left a note about the escapement inside the case, and nobody found it for forty years.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'six,', B:'six', C:'six—', D:'six;'},
      correct:'C',
      expCorrect:'The outer aside opened with a dash — and it had to, because it holds two appositives joined by "and" plus a nested aside, "by the time the bells rang again," fenced with its own commas. Only the matching dash can close it. Delete the whole thing and the sentence stands: "The clockmaker who rebuilt the cathedral movement left a note about the escapement inside the case..."',
      expWrong:{
        A:'A comma cannot close what a dash opened, and it would be the fourth comma inside one aside: the reader would have no way to see the interruption end.',
        B:'Without the closing mark the aside never ends, and "a grandmother of six left a note" becomes the main clause of a sentence whose real subject is the clockmaker.',
        D:'A semicolon needs a complete sentence on each side, and everything before the blank is a subject with an interruption still open.'
      },
      tip:'Work from the inside out: close the nested aside, then match the mark that opened the outer one. An aside that contains commas can only be fenced with dashes or parentheses.'
    },
    {
      id:'BDB-25', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries: comma inside a list item whose semicolons mark the boundaries',
      passage:'The crate held the three objects named in the will: the brass sextant; the logbook from the second %BLANK% a slim volume bound in sailcloth; and the watercolors the captain\'s daughter painted in Callao.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'voyage,', B:'voyage;', C:'voyage:', D:'voyage'},
      correct:'A',
      expCorrect:'"a slim volume bound in sailcloth" renames the logbook, so it is an appositive INSIDE the second item, and appositives attach with a comma. The semicolons stay where they are, marking the three boundaries the sentence promises: sextant; logbook; watercolors.',
      expWrong:{
        B:'A semicolon marks a boundary BETWEEN items, so this would make the slim volume a third object and the watercolors a fourth — in a list the sentence says holds three.',
        C:'A colon needs a complete sentence in front of it, and the sentence has already spent its colon introducing the list.',
        D:'With no mark at all "the logbook from the second voyage a slim volume" runs two noun phrases together.'
      },
      tip:'In a semicolon list the semicolons are the boundaries and the commas do the work inside an item. Count the items the sentence promises; the number of semicolons has to agree.'
    },
    {
      id:'BDB-26', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Boundaries: "that" or ", which" when the two readings mean different things',
      passage:'The station destroys every tuber from the greenhouse %BLANK% tested positive for the virus last season, and it ships the rest of the crop as certified seed.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:', which', B:'which', C:', that', D:'that'},
      correct:'D',
      expCorrect:'The clause has to narrow: the station has more than one greenhouse, and this one is picked out by the test result. The proof is the second half — "it ships the rest of the crop as certified seed" only makes sense if the other greenhouses were clean. An essential clause takes "that" with no comma.',
      expWrong:{
        A:'With a comma the clause becomes an aside about the station\'s only greenhouse, and then the crop it ships as certified seed would come from the infected house too.',
        B:'"which" without a comma mixes the two systems: the word signals extra information while the punctuation signals essential.',
        C:'A comma before "that" is never correct. If the clause needs a comma, the word has to become "which."'
      },
      tip:'Meaning decides, not sound. Ask what the sentence would still claim if you deleted the clause; if the claim changes or turns false, the clause is essential and the comma has to go.'
    },
    {
      id:'BDB-27', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries: the comma that stops an introductory clause from swallowing the main clause',
      passage:'Because the pond behind the tide mill fills only on the biggest tides of the %BLANK% the mill grinds on a calendar the miller still draws by hand each year.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'month', B:'month;', C:'month,', D:'month:'},
      correct:'C',
      expCorrect:'"Because the pond behind the tide mill fills only on the biggest tides of the month" is dependent, and "the mill grinds on a calendar the miller still draws by hand each year" is the main clause. The comma marks the seam — and it is the only thing keeping "the month the mill grinds" from being read as one phrase.',
      expWrong:{
        A:'The trap. With no comma, "the month the mill grinds" reads as a relative clause ("the month in which the mill grinds"), and the reader reaches the period before noticing the sentence never had a main clause.',
        B:'A semicolon needs a complete sentence on each side, and "Because..." never closes its thought.',
        D:'A colon needs a complete sentence in front of it, so a dependent clause cannot support one.'
      },
      tip:'A noun at the end of an introductory clause is a magnet: the next words will glue themselves to it unless a comma stops them. Find the main subject and verb, then put the comma right before them.'
    },
    {
      id:'BDB-28', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Boundaries: no comma when "that" introduces the quotation',
      passage:'Asked whether her sheets outlast the mill\'s, the papermaker will say only %BLANK% "they have to be torn twice before they give up."',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'that,', B:'that', C:'that:', D:'that;'},
      correct:'B',
      expCorrect:'"that" ties the quotation into the sentence as the object of "will say," so the quotation is not announced but absorbed — which is also why it opens lowercase. A conjunction is never separated from the clause it introduces, so no mark belongs in the blank.',
      expWrong:{
        A:'"said that," is the classic hybrid: the comma belongs to the announced pattern ("she said, \'...\'"), and "that" belongs to the absorbed one. A sentence gets one or the other, never both.',
        C:'A colon needs a complete sentence in front of it, and "the papermaker will say only that" stops mid-thought.',
        D:'A semicolon needs a complete sentence on both sides, and neither "will say only that" nor a quoted clause serving as its object qualifies.'
      },
      tip:'Two patterns, one choice. "She said, \'X.\'" takes a comma and a capital. "She said that \'x\'" takes nothing and stays lowercase. Seeing "that" in the answer is the signal to drop the comma.'
    },
    {
      id:'BDB-29', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries: plain commas in a list whose items have no internal commas',
      passage:'The ringers write down four things for every bird they take out of the net: mass in %BLANK% wing length in millimeters, fat score, and the number stamped on the ring.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'grams,', B:'grams;', C:'grams', D:'grams:'},
      correct:'A',
      expCorrect:'None of the four items carries a comma of its own, so the list needs nothing heavier than commas — and the rest of the sentence already uses them ("fat score, and the number stamped on the ring"). Matching that pattern keeps the four items readable as four.',
      expWrong:{
        B:'Semicolons in a list are a repair for items that already contain commas. Using one here would also force semicolons between all four items, which the rest of the sentence does not do.',
        C:'With no mark "mass in grams wing length in millimeters" fuses the first two items.',
        D:'The colon has already introduced the list; a second one cannot separate items inside it.'
      },
      tip:'Do not reach for the semicolon list unless an item forces it. Look for a comma INSIDE an item first: no internal commas, plain commas between items.'
    },
    {
      id:'BDB-30', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Boundaries: closing the aside that sits between the subject and its verb',
      passage:'The machine that cut the tunnel—a steel cylinder the length of two soccer fields, with a crew of fourteen living inside %BLANK% was buried where it stopped, because nobody could think of a way to bring it back out.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'it,', B:'it)', C:'it', D:'it—'},
      correct:'D',
      expCorrect:'The aside opened with a dash and it holds a comma of its own, so only a dash can close it. Once the pair is closed the subject reaches its verb: "The machine that cut the tunnel was buried where it stopped."',
      expWrong:{
        A:'A comma cannot close a dash, and here it would leave "with a crew of fourteen living inside it" looking like one more item in a series.',
        B:'A parenthesis cannot answer a dash. Fences have to match in kind, not just in number.',
        C:'This is the dangerous one: with no closing mark the sentence reads as though the crew of fourteen, not the machine, was buried. The aside has to end before "was."'
      },
      tip:'When an aside interrupts between a subject and its verb, close the fence and delete the aside: the two halves you are left with must click together into one sentence.'
    },
    {
      id:'BDB-31', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries: essential clause after "the only"',
      passage:'The only diver on the island %BLANK% still works without a wetsuit is seventy-three, and she takes two apprentices out with her every July.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:', who', B:'who', C:'who,', D:'; who'},
      correct:'B',
      expCorrect:'Here the clause is what MAKES her the only one: she is not the only diver on the island, she is the only one who still works without a wetsuit. Delete the clause and the sentence claims something false. An essential clause is never fenced off, so no comma.',
      expWrong:{
        A:'The comma turns the clause into an aside, which would mean the island has exactly one diver — and then "two apprentices" would have nowhere to come from.',
        C:'A closing comma with no opener cuts the subject away from its verb "is."',
        D:'A semicolon needs a complete sentence on each side, and "who still works without a wetsuit is seventy-three" has no subject of its own.'
      },
      tip:'"The only X who..." is essential; "the oldest X, who...," is usually not. Ask whether the clause is doing the limiting or just adding a fact once the noun is already pinned down.'
    },
    {
      id:'BDB-32', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Boundaries: attribution splitting a quotation between its subject and its verb',
      passage:'"A cup that tastes like the farm and a cup that tastes like the %BLANK% the auctioneer said, "are worth the same money only one week a year."',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'roaster",', B:'roaster."', C:'roaster,"', D:'roaster"'},
      correct:'C',
      expCorrect:'The attribution has cut in between the quoted subject and its quoted verb: put the halves together and they are one sentence, "A cup that tastes like the farm and a cup that tastes like the roaster are worth the same money only one week a year." The first half therefore ends in a comma, inside the closing quotation mark.',
      expWrong:{
        A:'The comma sits outside the quotation mark. American usage keeps commas and periods inside, whatever the sentence is doing.',
        B:'A period would end the quoted sentence, but the quotation has not reached its verb yet — "are worth the same money" is still coming.',
        D:'With no mark the quotation never closes and the attribution is absorbed into the speech.'
      },
      tip:'Read the two quoted halves together with the attribution removed. One sentence means a comma inside the quotation marks and a lowercase restart; two sentences mean a period.'
    },
    {
      id:'BDB-33', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries: essential clause separated from its noun by prepositional phrases',
      passage:'The estate still keeps one stretch of the hedge along the north %BLANK% that has been laid by hand every twelfth winter since 1830.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'lane', B:'lane,', C:'lane;', D:'lane:'},
      correct:'A',
      expCorrect:'The clause identifies which stretch the estate keeps, reaching back over the two phrases in between ("of the hedge," "along the north lane"). Essential clauses take "that" and no punctuation — the clause is part of the noun, not an addition to it.',
      expWrong:{
        B:'A comma before "that" is never correct, and it would also hand the clause to "the north lane," which is not what has been laid by hand.',
        C:'A semicolon needs a complete sentence after it, and "that has been laid by hand every twelfth winter since 1830" cannot stand alone.',
        D:'A colon would announce the clause as though it were a list or an explanation; it belongs to the noun it follows.'
      },
      tip:'Phrases piling up between a noun and its "that" clause change nothing. Find the noun the clause really describes, then apply the rule: essential means no mark at all.'
    },
    {
      id:'BDB-34', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Boundaries: a semicolon list living inside a dashed aside',
      passage:'The three things the fire spared—the bending iron, a cast-iron shoe older than the shop %BLANK% two boxes of purfling strips; and the order book that goes back to 1908—were carried out by the same family that had carried them in.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'itself,', B:'itself', C:'itself:', D:'itself;'},
      correct:'D',
      expCorrect:'Inside the dashes there is a list of three, and its first item already carries a comma because of the appositive "a cast-iron shoe older than the shop itself." An item with an internal comma forces semicolons between all the items — and the sentence shows the pattern at the end with "strips; and the order book."',
      expWrong:{
        A:'A comma would make "two boxes of purfling strips" a fourth thing in a list the sentence says holds three, and it would be indistinguishable from the comma already inside the first item.',
        B:'With no mark the first item and the second fuse, and the appositive appears to describe the boxes as well as the iron.',
        C:'A colon needs a complete sentence in front of it, and it cannot separate items inside a list in any case.'
      },
      tip:'Solve a list on its own terms even when it is buried inside an aside: one internal comma anywhere in the list turns every boundary into a semicolon. The visible "; and" before the last item tells you what the blank must be.'
    }
  ]
});
