/* SAT Studio question set — Reading & Writing: Boundaries (BND-01 to BND-34)
   Destreza oficial "Boundaries" del dominio Standard English Conventions:
   puntuacion ENTRE oraciones (punto, punto y coma, coma+FANBOYS, dos puntos,
   comma splice, run-on) y DENTRO de la oracion (subordinadas al principio y al
   final, elementos no esenciales entre comas / rayas / parentesis, dos puntos
   que exigen oracion completa, punto y coma en listas con comas internas, y las
   comas que nunca van: sujeto-verbo, verbo-objeto, antes de clausula esencial).
   Las cuatro opciones de cada pregunta son el MISMO texto con distinta
   puntuacion, a proposito: el largo no puede delatar nada. */
window.SAT_SETS.push({
  id: 'rw-bound-a',
  title: 'Boundaries — Where One Sentence Ends',
  section: 'rw',
  level: 'Media',
  description: 'Periods, semicolons, colons, dashes, parentheses, and the commas that must not be there. Every choice is the same words with different punctuation.',
  minutes: 30,
  questions: [
    {
      id:'BND-01', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: two independent clauses joined with a semicolon',
      passage:'The eight ringers who keep the parish bells in tune practice every Tuesday %BLANK% the full peal they are working toward takes more than three hours to ring.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'evening,', B:'evening;', C:'evening and', D:'evening'},
      correct:'B',
      expCorrect:'Cover the blank and read each side alone. Left: "The eight ringers who keep the parish bells in tune practice every Tuesday evening" — complete. Right: "the full peal they are working toward takes more than three hours to ring" — also complete. Two independent clauses with no conjunction between them are joined by a semicolon.',
      expWrong:{
        A:'A lone comma between two complete sentences is the comma splice, the boundary error the test repeats most often.',
        C:'"and" can join two independent clauses, but only with a comma in front of it ("evening, and the full peal..."). A bare conjunction leaves the two sentences fused.',
        D:'With no mark at all the sentences run on: the reader reaches "the full peal" and has to go back to find where the first statement ended.'
      },
      tip:'The period test: cover the blank, read the left side, then the right side. If both are complete sentences, your only legal marks are ";" or "." or a comma plus and/but/or — never a bare comma and never nothing.'
    },
    {
      id:'BND-02', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: colon introducing a list after a complete sentence',
      passage:'The tool library on Fourth Street lends out the machines almost nobody needs twice in a %BLANK% a tile saw, a pasta roller, and a telescope.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'lifetime;', B:'lifetime', C:'lifetime,', D:'lifetime:'},
      correct:'D',
      expCorrect:'Everything before the blank already forms a complete sentence ("The tool library on Fourth Street lends out the machines almost nobody needs twice in a lifetime"), and what follows is the list that spells those machines out. Announcing a list after a complete sentence is the colon\'s whole job.',
      expWrong:{
        A:'A semicolon needs a complete sentence on BOTH sides. "a tile saw, a pasta roller, and a telescope" is a list of noun phrases, not a sentence.',
        B:'With no punctuation the list crashes into the clause: "twice in a lifetime a tile saw" cannot be read.',
        C:'A comma cannot announce a list. It would make "a tile saw" look like one more scrap hanging off "in a lifetime."'
      },
      tip:'A colon looks BACKWARD before it looks forward. Cover everything after it: what is left has to be able to end in a period. What comes after is free — a list, a phrase, or another sentence.'
    },
    {
      id:'BND-03', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: comma before a coordinating conjunction (FANBOYS)',
      passage:'The mesh panels strung across the ridge pull drinking water out of the passing %BLANK% the village no longer trucks in barrels during the dry months.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'fog, so', B:'fog; so', C:'fog so', D:'fog: so'},
      correct:'A',
      expCorrect:'"The mesh panels strung across the ridge pull drinking water out of the passing fog" and "the village no longer trucks in barrels during the dry months" are both complete sentences, and "so" is one of the FANBOYS (for, and, nor, but, or, yet, so). A FANBOYS joining two complete sentences takes a comma right BEFORE it.',
      expWrong:{
        B:'The semicolon REPLACES the conjunction; the two never work as a team. Either "fog; the village..." or "fog, so the village...", not both.',
        C:'The comma in front of the conjunction is missing, and two complete sentences held together by a bare "so" is still a run-on.',
        D:'A colon never introduces a conjunction. A colon promises a list or an explanation, and "so the village..." is neither.'
      },
      tip:'FANBOYS = for, and, nor, but, or, yet, so. Sentence + comma + FANBOYS + sentence. The comma lives in FRONT of the conjunction, never behind it.'
    },
    {
      id:'BND-04', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: dependent clause first takes a comma',
      passage:'Because the arena ice has to be shaved and flooded between %BLANK% the crew keeps a second resurfacing machine charged in the tunnel.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'periods;', B:'periods', C:'periods,', D:'periods:'},
      correct:'C',
      expCorrect:'"Because the arena ice has to be shaved and flooded between periods" cannot stand alone — the word "Because" makes it dependent. A dependent clause placed FIRST is closed off with a comma, and then the main clause ("the crew keeps a second resurfacing machine charged in the tunnel") finishes the sentence.',
      expWrong:{
        A:'A semicolon demands a complete sentence on each side, and a clause that opens with "Because" is not one.',
        B:'Without the comma the setup runs straight into the main clause and the reader cannot see where the sentence turns.',
        D:'A colon also demands a complete sentence in front of it. A fragment has nothing to announce.'
      },
      tip:'Dependent clause FIRST, comma after it. Dependent clause LAST, usually no comma. The words that start dependent clauses: because, although, when, if, until, since, while, after.'
    },
    {
      id:'BND-05', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: nonessential appositive, the opening comma of the pair',
      passage:'The %BLANK% a layered cloth panel stitched by Guna artisans in Panama, can take a month of needlework to finish.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'mola—', B:'mola,', C:'mola:', D:'mola'},
      correct:'B',
      expCorrect:'"a layered cloth panel stitched by Guna artisans in Panama" is extra information about "The mola": delete it and "The mola can take a month of needlework to finish" still stands. Extra information is fenced off on BOTH sides, and the closing comma is already sitting there before "can," so the blank has to supply the matching opening comma.',
      expWrong:{
        A:'A dash can open an aside, but the fence has to match: dash with dash, comma with comma. An opening dash closed by a comma is a mismatched pair.',
        C:'A colon does not open an aside, and this one would cut the subject "The mola" away from its verb "can take."',
        D:'With nothing here the aside closes but never opens, so the sentence reads as if "panel ... in Panama" were the subject.'
      },
      tip:'Openers and closers are twins. When you can see one mark already fencing an aside, hunt for its partner — and match the kind of mark, not just the idea of a pause.'
    },
    {
      id:'BND-06', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: run-on repaired with a period',
      passage:'The salt crust on the flats hardens only after the last of the winter water %BLANK% Record attempts are scheduled for the end of August every year.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'evaporates,', B:'evaporates;', C:'evaporates', D:'evaporates.'},
      correct:'D',
      expCorrect:'There are two complete sentences here, and the next word, "Record," is capitalized without being a proper noun — so the first sentence has to END at the blank. The period is the only mark that closes one sentence and opens another.',
      expWrong:{
        A:'Comma splice: a comma cannot hold two complete sentences together, and nothing mid-sentence is followed by a capital letter.',
        B:'A semicolon does join two complete sentences, but it keeps them inside ONE sentence, so the next word would stay lowercase. "Record" is capitalized.',
        C:'No mark at all fuses the two sentences into a run-on.'
      },
      tip:'Look at the word right after the blank. If it is capitalized and is not a name, the answer is the period — a semicolon is never followed by a capital letter.'
    },
    {
      id:'BND-07', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: colon introducing an explanation',
      passage:'Before the night paddle, the guide\'s instructions were %BLANK% no headlamps, no splashing, and no more than a paddle\'s length between kayaks.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'blunt:', B:'blunt,', C:'blunt', D:'blunt;'},
      correct:'A',
      expCorrect:'"Before the night paddle, the guide\'s instructions were blunt" could end in a period right there, and the three phrases that follow spell out what "blunt" meant. That is a colon: a complete sentence, then the thing it promised.',
      expWrong:{
        B:'A comma turns "no headlamps" into one more item hanging off "were blunt," as though the guide had been blunt, no headlamps, and no splashing.',
        C:'With nothing in the blank, "were blunt no headlamps" fuses two pieces that were never meant to touch.',
        D:'A semicolon needs a complete sentence after it as well as before it, and three noun phrases in a row are not a sentence.'
      },
      tip:'The colon test never changes: complete sentence in front, anything you like behind. If the words before it end on an adjective or a noun that finishes the thought, you are safe.'
    },
    {
      id:'BND-08', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: essential dependent clause at the end takes no comma',
      passage:'The baker adds a third feeding to the %BLANK% whenever the kitchen drops below eighteen degrees.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'schedule,', B:'schedule:', C:'schedule', D:'schedule;'},
      correct:'C',
      expCorrect:'"whenever the kitchen drops below eighteen degrees" is doing essential work: it names the condition under which the extra feeding happens. A dependent clause that follows the main clause and narrows it takes no punctuation at all.',
      expWrong:{
        A:'The comma would demote the clause to an afterthought, but it is the point of the sentence — it says when the third feeding happens.',
        B:'A colon announces a list or an explanation, and a "whenever" clause is neither; it belongs to the sentence it follows.',
        D:'A semicolon needs a complete sentence on each side, and "whenever the kitchen drops below eighteen degrees" cannot stand alone.'
      },
      tip:'Dependent clause at the END: no comma when it answers when, where, why, or on what condition. Save the comma for the ones that contrast (although, though, whereas).'
    },
    {
      id:'BND-09', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: no comma between subject and verb',
      passage:'The one stretch of river valley where thousands of fireflies flash in unison every %BLANK% draws more visitors each year than the state park two counties over.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'June;', B:'June', C:'June,', D:'June:'},
      correct:'B',
      expCorrect:'The complete subject is "The one stretch of river valley where thousands of fireflies flash in unison every June," and its verb is "draws." However long the subject grows, nothing may stand between it and its verb, so the blank takes no punctuation.',
      expWrong:{
        A:'A semicolon needs a complete sentence on each side, and "draws more visitors each year than the state park two counties over" has no subject of its own.',
        C:'This is the comma between subject and verb. A long subject makes you want to breathe, but breathing is not a punctuation rule.',
        D:'A colon needs a complete sentence in front of it, and a subject that has not reached its verb yet is not one.'
      },
      tip:'Find the main verb, then find the subject it belongs to. Whatever sits between the two — one word or fifteen — never separate them with a single comma.'
    },
    {
      id:'BND-10', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Boundaries: paired dashes, the closing dash',
      passage:'The organ\'s largest pipe—a tin cylinder taller than the choir %BLANK% has not sounded since the roof leaked in 1974.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'loft,', B:'loft;', C:'loft', D:'loft—'},
      correct:'D',
      expCorrect:'The aside "a tin cylinder taller than the choir loft" was opened with a dash, so a dash has to close it. Lift the aside out and the sentence is intact: "The organ\'s largest pipe has not sounded since the roof leaked in 1974."',
      expWrong:{
        A:'Opening with a dash and closing with a comma is a mismatched pair; the two marks are not interchangeable halves of one fence.',
        B:'A semicolon cannot close an aside, and "has not sounded since the roof leaked in 1974" is not a complete sentence.',
        C:'With nothing here the aside never closes, and the sentence ends up claiming that the choir loft has not sounded.'
      },
      tip:'Dashes travel in pairs inside a sentence, exactly like commas and parentheses. Find the opening mark first, then match it.'
    },
    {
      id:'BND-11', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: transition word between two independent clauses',
      passage:'Stacked growing trays let the warehouse ship lettuce in the middle of %BLANK% the electricity the lamps draw makes every head cost more than a field-grown one.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'January; however,', B:'January, however,', C:'January however,', D:'January; however'},
      correct:'A',
      expCorrect:'"however" is a transition word, not a conjunction, so it cannot hold two sentences together by itself. The two complete clauses need a semicolon between them, and "however" then takes a comma after it: "...in the middle of January; however, the electricity the lamps draw..."',
      expWrong:{
        B:'This is a comma splice in disguise. Swapping "however" in for "but" does not change the fact that a comma alone cannot join two complete sentences.',
        C:'With no mark in front of it the two sentences fuse, and "January however" reads as one continuous phrase.',
        D:'The semicolon is right, but the comma after "however" is missing: a transition word at the head of a clause is set off from the clause it introduces.'
      },
      tip:'however, therefore, moreover, instead, nevertheless are NOT conjunctions. The pattern is sentence + semicolon + transition + comma + sentence.'
    },
    {
      id:'BND-12', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: semicolons between list items that contain commas',
      passage:'The grant pays for three exhibits: a survey of hand-tufted rag rugs, many of them a century %BLANK% a room of hand-drawn animation cels, most of them from a single 1957 short; and a wall of field recordings made on wax cylinders.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'old,', B:'old:', C:'old;', D:'old'},
      correct:'C',
      expCorrect:'The three exhibits are items in a list, and the items carry commas of their own ("many of them a century old"). When that happens, the items are divided by semicolons so the reader can see where each one ends — and the third item already uses one before "and a wall of field recordings," which confirms the pattern.',
      expWrong:{
        A:'A comma disappears among the commas already inside the items: the reader cannot tell whether "a room of hand-drawn animation cels" is a new exhibit or more detail about the rugs.',
        B:'The colon after "exhibits" already introduced the list. A second colon inside it has nothing left to announce.',
        D:'With no mark the first two exhibits melt into one item.'
      },
      tip:'Semicolons as "super commas": the moment ONE item in a list has a comma inside it, every divider between items becomes a semicolon.'
    },
    {
      id:'BND-13', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: nonessential element in parentheses',
      passage:'The volunteers\' thermometers (clamped to bicycle handlebars and read aloud every thirty %BLANK% recorded a nine-degree gap between the shaded park and the asphalt lot two blocks away.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'seconds),', B:'seconds)', C:'seconds,)', D:'seconds'},
      correct:'B',
      expCorrect:'The parenthesis opened before "clamped" has to close, and then the main clause goes straight on to its verb: "The volunteers\' thermometers ... recorded a nine-degree gap." Nothing else belongs at the blank.',
      expWrong:{
        A:'The closing parenthesis is right, but the comma after it splits the subject ("thermometers") from its verb ("recorded").',
        C:'The comma is trapped inside the fence. Punctuation the sentence needs goes outside the closing parenthesis, never in front of it.',
        D:'The parenthesis never closes, so the aside swallows the rest of the sentence.'
      },
      tip:'Parentheses are a fence, like paired commas or dashes. Read the sentence with everything inside them deleted: what is left has to be complete and correctly punctuated on its own.'
    },
    {
      id:'BND-14', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: paired dashes, the opening dash',
      passage:'The catcher\'s oversized %BLANK% nearly twice the width of the mitt he uses for every other pitcher—exists because no one, the pitcher included, can predict where a knuckleball will end up.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'mitt,', B:'mitt', C:'mitt;', D:'mitt—'},
      correct:'D',
      expCorrect:'The aside closes with a dash in front of "exists," so it has to open with a dash. Strip the aside and the spine of the sentence appears: "The catcher\'s oversized mitt exists because no one ... can predict where a knuckleball will end up."',
      expWrong:{
        A:'A comma opening what a dash closes is a mismatched pair; the marks that fence off an aside have to match each other.',
        B:'With nothing here the aside has a closing mark and no opening one, so "nearly twice the width" seems to modify the whole clause.',
        C:'A semicolon cannot open an aside, and it would demand a complete sentence on both sides; "nearly twice the width of the mitt he uses for every other pitcher" is a phrase.'
      },
      tip:'When one end of an aside is already a dash, the other end is a dash. Look at the mark you were GIVEN before you choose the one that is missing.'
    },
    {
      id:'BND-15', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: no comma before a conjunction joining a compound predicate',
      passage:'Rice farmers along the delta bolt nest boxes to tall poles at the edge of every field %BLANK% count the pellets underneath each spring to estimate how many rodents the barn owls have taken.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'and', B:', and', C:'and,', D:'; and'},
      correct:'A',
      expCorrect:'Cover the conjunction and read forward: "count the pellets underneath each spring..." has no subject. It is a second verb for the same farmers ("bolt ... and count ..."), which makes this a compound predicate, not two sentences — so no comma goes in front of "and."',
      expWrong:{
        B:'The comma before a FANBOYS is earned only when a COMPLETE sentence follows it. Here the second half borrows the subject "Rice farmers," so nothing is earned.',
        C:'A comma after the conjunction cuts "and" loose from the words it introduces; a FANBOYS is never followed by a comma in this pattern.',
        D:'A semicolon requires a complete sentence on both sides, and it never pairs up with a conjunction in any case.'
      },
      tip:'Before writing a comma in front of and/but/or, hide the conjunction and read what comes next. A subject there means a comma; no subject means no comma.'
    },
    {
      id:'BND-16', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: no comma before an essential clause',
      passage:'The judges take three tenths off any %BLANK% that ends with a step outside the landing zone.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'vault,', B:'vault:', C:'vault', D:'vault;'},
      correct:'C',
      expCorrect:'"that ends with a step outside the landing zone" is essential: it is the only thing telling you WHICH vaults lose three tenths. Essential material is not fenced off, so no comma goes in front of "that."',
      expWrong:{
        A:'A comma would turn the clause into an aside you could delete — and deleting it leaves "The judges take three tenths off any vault," a far harsher and entirely different rule.',
        B:'A colon announces a list or an explanation; a relative clause is neither, and the sentence would stop halfway.',
        D:'A semicolon needs a complete sentence after it, and "that ends with a step outside the landing zone" cannot stand alone.'
      },
      tip:'A clause starting with "that" is essential almost every time, and essential means no comma. Only when deleting the clause leaves the same meaning does it get fenced off.'
    },
    {
      id:'BND-17', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: no colon or comma between a verb and its object',
      passage:'At every checkpoint along the trail the race veterinarians %BLANK% heart rate, hydration, foot pads, and appetite.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'examine:', B:'examine', C:'examine,', D:'examine;'},
      correct:'B',
      expCorrect:'"At every checkpoint along the trail the race veterinarians examine" is not a sentence yet — the verb is still waiting for its object. A verb hands straight over to what it acts on, with no mark in between.',
      expWrong:{
        A:'The colon trap: a colon may introduce a list, but only after a COMPLETE sentence, and a dangling verb is not one.',
        C:'A comma between a verb and its object is wrong no matter how long the object grows.',
        D:'A semicolon needs complete sentences on both sides, and here neither side is one.'
      },
      tip:'Before any colon, cover everything after it. If what is left ends on a verb or a preposition, the colon is wrong and the answer is usually no punctuation at all.'
    },
    {
      id:'BND-18', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: comma after a long introductory phrase',
      passage:'Working through two summers with a camera bolted to a monopod and a folding rule for %BLANK% the survey team built a model of the rock face accurate to a millimeter.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'scale;', B:'scale', C:'scale:', D:'scale,'},
      correct:'D',
      expCorrect:'Everything in front of the blank is one long introductory phrase describing HOW the team worked: it has no subject and no main verb. The sentence proper starts at "the survey team," and an introduction of that size is closed off with a comma.',
      expWrong:{
        A:'A semicolon needs a complete sentence on each side, and "Working through two summers ... for scale" is a phrase, not a sentence.',
        B:'Without the comma, "a folding rule for scale the survey team" runs together and the reader has to reread to find where the sentence really begins.',
        C:'A colon needs a complete sentence in front of it, and this phrase cannot end in a period on its own.'
      },
      tip:'Introductory material — phrase or dependent clause — gets a comma where the main clause begins. Check that a subject and a verb are still waiting on the other side of the blank.'
    },
    {
      id:'BND-19', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: colon between a claim and the explanation it promises',
      passage:'The volunteers keep their antennas up all winter for one stubborn %BLANK% the first ice storm of the season always takes the cell towers down before it takes the power lines.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'reason:', B:'reason,', C:'reason, and,', D:'reason'},
      correct:'A',
      expCorrect:'"The volunteers keep their antennas up all winter for one stubborn reason" is a complete sentence that makes a promise — a reason is coming — and the words after the blank deliver it. The colon is the mark for that promise and payoff, and it is legal because what comes before it could end in a period.',
      expWrong:{
        B:'A comma between two complete sentences is a comma splice, and it also hides the fact that the second half IS the reason the first half announced.',
        C:'A coordinating conjunction is never followed by a comma, and "and" would flatten the reason into an unrelated second fact.',
        D:'With no mark the two sentences fuse into a run-on.'
      },
      tip:'Nouns like reason, problem, catch, rule, and difference in the first half are a signal that a colon is coming: the sentence sets something up and then pays it off.'
    },
    {
      id:'BND-20', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: comma before a nonessential "which" clause',
      passage:'The river dolphin swims tipped onto its %BLANK% which lets it sweep one flipper through the riverbed silt while it hunts by echolocation.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'side;', B:'side:', C:'side,', D:'side'},
      correct:'C',
      expCorrect:'A clause opening with "which" is nonessential: it adds a consequence rather than picking out which side or which dolphin is meant. Nonessential material is fenced off, and because this clause runs to the end of the sentence, the single comma in front of it is the whole fence.',
      expWrong:{
        A:'A semicolon needs a complete sentence on both sides, and "which lets it sweep one flipper through the riverbed silt" has no subject of its own.',
        B:'A colon announces a list or an explanation and cannot introduce a relative clause.',
        D:'Without the comma the "which" clause reads as though it narrowed down the side — and narrowing is the job of "that," not "which."'
      },
      tip:'"which" almost always takes a comma; "that" almost never does. Test it by deleting the clause: if the sentence still points at the same thing, fence the clause off.'
    },
    {
      id:'BND-21', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: comma splice repaired with a semicolon',
      passage:'A fine alkaline mist sprayed across the pages buys the archive another %BLANK% the treatment cannot undo the brittleness the paper already has.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'century,', B:'century;', C:'century, however', D:'century'},
      correct:'B',
      expCorrect:'Both halves are complete: "A fine alkaline mist sprayed across the pages buys the archive another century" and "the treatment cannot undo the brittleness the paper already has." No conjunction joins them, so the mark that holds them together is the semicolon.',
      expWrong:{
        A:'Comma splice. The contrast between the halves is real, but a comma is not strong enough to carry two complete sentences.',
        C:'"however" is a transition, not a conjunction, so it cannot repair a splice. It would still need the semicolon: "century; however, the treatment...".',
        D:'Nothing at all makes a fused run-on, and the reader cannot tell where the first statement stops.'
      },
      tip:'Two complete sentences and no FANBOYS between them means ";" or "." — dropping in a transition word like however or therefore does not change the mark you need.'
    },
    {
      id:'BND-22', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: dashes around an aside that already contains a comma',
      passage:'The tuner\'s hammer work—hundreds of taps, each one softer than the %BLANK% turns a flattened oil drum into an instrument with thirty separate notes.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'last;', B:'last,', C:'last', D:'last—'},
      correct:'D',
      expCorrect:'The aside "hundreds of taps, each one softer than the last" carries a comma inside it, which is exactly why it was opened with a dash — and a dash has to close it. Remove the aside and the sentence stands: "The tuner\'s hammer work turns a flattened oil drum into an instrument with thirty separate notes."',
      expWrong:{
        A:'A semicolon does not close an aside, and what follows it here ("turns a flattened oil drum...") has no subject.',
        B:'Closing with a comma leaves the pair mismatched, and it buries the edge of the aside among the commas already inside it.',
        C:'With no closing mark the aside never ends, so "each one softer than the last turns a flattened oil drum" becomes the clause.'
      },
      tip:'Dashes are the right fence when the aside has commas of its own. Whichever mark opens an aside is the mark that has to close it.'
    },
    {
      id:'BND-23', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: nonessential appositive, the closing comma of the pair',
      passage:'Kintsugi, the practice of mending broken pottery with lacquer and powdered %BLANK% treats a repair as part of the history of an object rather than something to hide.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'gold,', B:'gold—', C:'gold', D:'gold;'},
      correct:'A',
      expCorrect:'The comma after "Kintsugi" opened an aside, so an identical comma has to close it before the verb "treats." With the aside deleted the sentence reads "Kintsugi treats a repair as part of the history of an object rather than something to hide."',
      expWrong:{
        B:'The pair has to match: an opening comma cannot be closed with a dash.',
        C:'Leaving the aside open strands the subject, and the sentence seems to claim that powdered gold treats a repair.',
        D:'A semicolon needs a complete sentence on both sides, and "treats a repair as part of the history of an object" has no subject of its own.'
      },
      tip:'When a sentence opens "Noun, extra information ...", find the main verb: the comma that closes the aside sits immediately in front of it.'
    },
    {
      id:'BND-24', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Boundaries: comma before a contrasting clause at the end',
      passage:'Lichens vanish from a city block within a few years of any rise in sulfur %BLANK% although the bark they were growing on can look unchanged for decades.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'dioxide;', B:'dioxide', C:'dioxide,', D:'dioxide:'},
      correct:'C',
      expCorrect:'"although the bark they were growing on can look unchanged for decades" does not say when or why the lichens vanish; it pushes back against the main clause. A contrasting clause at the end of a sentence is an aside, so it takes a comma in front of it.',
      expWrong:{
        A:'A semicolon needs a complete sentence on each side, and an "although" clause can never stand alone.',
        B:'This is the exception students miss: most end-of-sentence dependent clauses take no comma, but one that introduces a contrast does.',
        D:'A colon announces a list or an explanation, and a clause that contradicts the sentence it hangs on is the opposite of that.'
      },
      tip:'End-of-sentence dependent clause: no comma when it answers when, why, or on what condition; comma when it contrasts (although, though, whereas).'
    },
    {
      id:'BND-25', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Boundaries: closing comma of an aside that sits just before the main verb',
      passage:'The bacteria that live inside the tubeworms, which crowd the hottest openings along the %BLANK% turn hydrogen sulfide into the sugars the worms live on.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'ridge—', B:'ridge,', C:'ridge', D:'ridge;'},
      correct:'B',
      expCorrect:'Two clauses are stacked inside the subject. "that live inside the tubeworms" is essential and takes no commas; "which crowd the hottest openings along the ridge" is nonessential and was opened with a comma, so a comma has to close it. That comma is not a subject-verb split — it is the second half of a pair, and with the aside deleted the sentence reads "The bacteria that live inside the tubeworms turn hydrogen sulfide into the sugars the worms live on."',
      expWrong:{
        A:'The opening mark was a comma, so the closing mark is a comma. Comma with dash is a mismatched pair even when the mismatch is easy to miss at this length.',
        C:'Leaving the aside open makes "the hottest openings along the ridge" the thing doing the turning.',
        D:'A semicolon needs a complete sentence on both sides, and "turn hydrogen sulfide into the sugars the worms live on" has no subject of its own.'
      },
      tip:'A comma right before the main verb is legal when it is closing an aside that a comma opened. Delete the aside and reread: if the sentence still works, the comma was a partner, not a split.'
    },
    {
      id:'BND-26', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Boundaries: colon after a clause acting as the subject',
      passage:'What the cheesemaker watches in the aging cave is never the temperature %BLANK% humidity within two points of ninety-five percent, air that moves just enough to dry the rinds, and a shelf of untreated spruce.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'alone,', B:'alone', C:'alone;', D:'alone:'},
      correct:'D',
      expCorrect:'The subject here is a whole clause, "What the cheesemaker watches in the aging cave," and its verb is "is" — so everything before the blank is already a complete sentence. That is all a colon asks for, and the three phrases after it spell out what is watched instead.',
      expWrong:{
        A:'A comma cannot introduce a list. It would make "humidity within two points of ninety-five percent" read as one more thing the cheesemaker does NOT watch.',
        B:'With no mark the list crashes into the clause: "is never the temperature alone humidity within two points" cannot be read.',
        C:'A semicolon needs a complete sentence on BOTH sides, and three noun phrases in a row are not a sentence.'
      },
      tip:'A sentence can use an entire clause as its subject ("What the crew found ... was ..."). Locate the main verb: if it is already there, the words in front of the colon are complete.'
    },
    {
      id:'BND-27', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries: no colon after an incomplete clause',
      passage:'A turf house wall is nothing more than a tall stack %BLANK% cut sod, packed gravel, and a spine of driftwood beams.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'of', B:'of:', C:'of;', D:'of,'},
      correct:'A',
      expCorrect:'"A turf house wall is nothing more than a tall stack of" cannot end in a period — the preposition "of" is still holding the door open for its objects. Those objects follow it directly, with no mark in between.',
      expWrong:{
        B:'The list is real, but the colon is not allowed: it may follow only a complete sentence, and this one ends on a preposition.',
        C:'A semicolon needs a complete sentence on both sides, and here there is not one on either side.',
        D:'A comma between a preposition and its object is never correct.'
      },
      tip:'Words like of, such as, including, and for example are a warning sign: the words in front of them are almost never a complete sentence, so the colon is almost never the answer.'
    },
    {
      id:'BND-28', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Boundaries: closing parenthesis plus the comma the sentence still needs',
      passage:'Because the only surviving print is on nitrate stock (a film base that can catch fire at room %BLANK% the reels are kept in a bunker two kilometers from the reading room.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'temperature)', B:'temperature,)', C:'temperature),', D:'temperature);'},
      correct:'C',
      expCorrect:'Two jobs land on the same spot. The parenthesis opened before "a film base" has to close, and the introductory clause "Because the only surviving print is on nitrate stock (...)" has to be closed off with a comma before the main clause begins. The parenthesis comes first, then the comma the sentence needs.',
      expWrong:{
        A:'The parenthesis closes, but the introductory "Because" clause never does, so the main clause starts with no signal at all.',
        B:'The comma is trapped inside the fence. Punctuation that belongs to the sentence goes AFTER the closing parenthesis, never before it.',
        D:'A semicolon needs a complete sentence on each side, and "Because the only surviving print is on nitrate stock" is dependent — it cannot stand alone.'
      },
      tip:'Read the sentence with the parentheses and everything inside them deleted. Whatever punctuation that stripped-down sentence needs goes immediately outside the closing parenthesis.'
    },
    {
      id:'BND-29', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Boundaries: no comma in an inverted sentence',
      passage:'Stacked along the back wall of the seed library reading %BLANK% are two hundred tins of saved seed, every one labeled in the handwriting of the donor.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'room,', B:'room', C:'room:', D:'room;'},
      correct:'B',
      expCorrect:'The sentence is inverted: the verb "are" arrives before its subject, "two hundred tins of saved seed." "Stacked along the back wall of the seed library reading room" is not an introductory aside but the piece the verb attaches to, so nothing may sit between them. Flip it back and the shape is obvious: "Two hundred tins of saved seed are stacked along the back wall..."',
      expWrong:{
        A:'It looks like the comma after an introductory phrase, but the phrase is not introductory — the verb "are" follows immediately, and the comma would split the verb from what it describes.',
        C:'A colon needs a complete sentence in front of it, and this phrase has neither a subject nor a main verb.',
        D:'A semicolon needs a complete sentence on both sides, and neither piece qualifies on its own.'
      },
      tip:'When the verb comes before its subject ("Along the ridge stand three towers"), the sentence is inverted and takes no comma. Turn it back into normal order to check.'
    },
    {
      id:'BND-30', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries: semicolons in a list whose items carry their own commas',
      passage:'Three stations still send weekly readings: Iqaluit, Nunavut, where the drill sits in %BLANK% Ny-Alesund, Norway, where it sits in gravel; and Yakutsk, where it reaches permafrost more than four hundred meters deep.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'bedrock,', B:'bedrock', C:'bedrock:', D:'bedrock;'},
      correct:'D',
      expCorrect:'Each item is a place plus a description that already contains commas ("Iqaluit, Nunavut, where the drill sits in bedrock"). Items like that are divided by semicolons, which is why the list already carries one before "and Yakutsk."',
      expWrong:{
        A:'A fourth comma in a row makes the list unreadable: "Nunavut," "where the drill sits in bedrock," and "Ny-Alesund" all start to look like pieces of the same kind.',
        B:'With no mark the first two stations become a single item.',
        C:'The colon after "readings" already introduced the list; a second colon inside it announces nothing.'
      },
      tip:'Count the commas inside one item. One or more, and every divider between items becomes a semicolon — all of them, not just the crowded one.'
    },
    {
      id:'BND-31', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries: no punctuation between a reporting verb and its clause',
      passage:'Three separate audits have now %BLANK% that the countertop pails, not the larger bins, are what change the habits of a household.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'shown', B:'shown,', C:'shown;', D:'shown:'},
      correct:'A',
      expCorrect:'"that the countertop pails ... are what change the habits of a household" is the object of "have shown." A verb and its object are never separated, and the commas you can see later belong to a different job — fencing off the aside "not the larger bins."',
      expWrong:{
        B:'A comma between the verb and the clause it takes as its object is wrong however long that clause runs.',
        C:'A semicolon needs a complete sentence on both sides, and neither "Three separate audits have now shown" nor the "that" clause is one.',
        D:'A colon may follow only a complete sentence, and this one is still waiting for its object.'
      },
      tip:'Reporting verbs — show, find, argue, conclude, report — hand straight over to "that" with no punctuation. Commas nearby usually belong to some aside buried inside the clause.'
    },
    {
      id:'BND-32', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries: compound predicate that looks like a second sentence',
      passage:'The falconer walks the same length of runway an hour before the first %BLANK% and notes on a clipboard every gull that refuses to move.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'departure,', B:'departure:', C:'departure', D:'departure;'},
      correct:'C',
      expCorrect:'Hide the conjunction and read forward: "notes on a clipboard every gull that refuses to move" has no subject. It is a second verb for the same falconer, so the sentence has one subject and two verbs — a compound predicate, which takes no comma.',
      expWrong:{
        A:'The comma in front of "and" is earned only when a complete sentence follows it, and here the second half borrows the subject "The falconer."',
        B:'A colon announces a list or an explanation, and a second verb joined by "and" is neither.',
        D:'A semicolon needs a complete sentence after it, and it never stands in front of a coordinating conjunction in any case.'
      },
      tip:'The test that always works: cover and/but/or and read what follows. Subject there, use the comma; no subject, use nothing.'
    },
    {
      id:'BND-33', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries: semicolon, not colon, between contrasting independent clauses',
      passage:'The world record for a single solve has fallen eleven times in a %BLANK% the record in the blindfolded event has not moved since 2019.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'decade,', B:'decade;', C:'decade', D:'decade:'},
      correct:'B',
      expCorrect:'Both halves are complete sentences, and the second one pushes against the first instead of growing out of it, so the mark between them is the semicolon: "...eleven times in a decade; the record in the blindfolded event has not moved since 2019."',
      expWrong:{
        A:'Comma splice. Two complete sentences cannot be held together by a comma, and there is no conjunction here to rescue it.',
        C:'With nothing between them the sentences fuse into a run-on.',
        D:'A colon promises that what follows will explain or deliver on what came before. This second half does the opposite — it names a record that has NOT moved — so the colon has nothing to announce.'
      },
      tip:'Semicolon and colon both need a complete sentence in front. Ask what the SECOND half does: explains or lists, colon; contrasts or simply adds, semicolon.'
    },
    {
      id:'BND-34', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Boundaries: parentheses plus the comma before a coordinating conjunction',
      passage:'The rooftop panels pay for themselves within four years (the array and the inverter cost about nine thousand dollars a %BLANK% but no tenants association in the district has managed to borrow the money for the first installment.',
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'building)', B:'building,)', C:'building);', D:'building),'},
      correct:'D',
      expCorrect:'Delete the parenthesis and everything inside it and what is left is two complete sentences joined by "but": "The rooftop panels pay for themselves within four years, but no tenants association in the district has managed to borrow the money..." The comma that "but" requires is what the blank needs, and it goes after the closing parenthesis.',
      expWrong:{
        A:'The aside closes correctly, but the comma before "but" is missing, and two complete sentences joined by a bare FANBOYS is a run-on.',
        B:'The comma is trapped inside the parentheses; marks the sentence needs always go outside the closing parenthesis.',
        C:'A semicolon and a conjunction do not work together: it is either "years; no tenants association..." or "years, but no tenants association...".'
      },
      tip:'Parentheses never change the punctuation a sentence needs — they only push it sideways. Strip them out, punctuate the sentence, then put the mark right after the closing parenthesis.'
    }
  ]
});
