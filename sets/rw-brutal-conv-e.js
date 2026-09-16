/* SAT Studio question set — Reading & Writing: Standard English Conventions — Brutal (BCE-01 a BCE-32)
   32 preguntas, TODAS difficulty:'Difícil' + extreme:true. En el set, level:'Extreme'.
   16 Boundaries (BCE-01 a BCE-16) + 16 Form, Structure, and Sense (BCE-17 a BCE-32).

   OJO al agregar mas: `skillOf()` de index.html decide la destreza mirando `skill` + los
   primeros 160 caracteres de `stem`, y dentro de este dominio prueba Boundaries ANTES que
   Form. El matcher de Boundaries muerde boundar|punctuat|comma|semicolon|colon|dash|
   parenthes|clause|splice|joining|quotation mark|non-?essential|restrictive|appositive|title.
   Por eso ningun `skill` de Form nombra "clause": dice "the inner phrase", "the part that
   follows", "an added statement". El `stem` es el mismo renglon estandar en las 32 y no
   contiene ninguna de esas palabras, asi que el reparto queda 16/16 exacto.

   El pasaje NO se escanea (solo skill + stem), asi que dentro del pasaje se puede decir
   "boundary" o poner dos puntos sin mover la clasificacion.

   Lo brutal aca no es el largo: es que la opcion que suena bien es siempre una de las tres
   incorrectas. Marca que abre y marca que cierra distintas, adverbios conjuntivos que
   parecen conjunciones, listas con comas adentro, restrictivo contra no restrictivo donde
   las dos versiones son gramaticales y el pasaje decide, sujetos lejanos con un plural
   intercalado que atrae el verbo equivocado, y los tres posesivos a la vista. */
(function(){
  window.SAT_SETS.push({
    id: 'rw-brutal-conv-e',
    title: 'Standard English Conventions — Brutal',
    section: 'rw',
    level: 'Extreme',
    description: 'Thirty-two conventions items in which the tempting answer is a mark or a form that is perfectly correct in general and wrong in this particular sentence. Sixteen on boundaries, sixteen on form and sense.',
    minutes: 32,
    questions: [

      /* ══ BOUNDARIES (BCE-01 a BCE-16) ═══════════════════════════════════ */

      {
        id:'BCE-01', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: the mark that closes an aside has to match the dash that opened it',
        passage:'The tidal gauge at Puerto Salvo — a brass drum that a Dutch engineer installed in 1887 and that the harbor crew still winds by %BLANK% recorded the swell that flattened the breakwater last winter.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'hand, has', B:'hand; has', C:'hand — has', D:'hand has'},
        correct:'C',
        expCorrect:'A dash opened the aside right after “Puerto Salvo”, so a dash has to close it. Lift the fenced material out and the skeleton is “The tidal gauge at Puerto Salvo has recorded the swell…”, which proves both that the interruption is removable and that the verb “has recorded” belongs to “gauge”.',
        expWrong:{
          A:'closes with a comma what a dash opened. The two marks that fence off an interruption must be the same at both ends, and this one also leaves the lightest mark in the sentence carrying the heaviest break.',
          B:'a semicolon requires a complete sentence on each side. Everything to its left is a subject plus its aside — “The tidal gauge at Puerto Salvo … by hand” — with no main verb anywhere in it.',
          D:'leaves the opening dash with no partner. The aside never ends, so “winds by hand has recorded” collides and the subject never reaches the verb that belongs to it.'
        },
        tip:'Whatever mark opens an aside — comma, dash, or parenthesis — the same mark closes it. Delete the fenced words and read what is left: if it is a clean sentence, your marks are in the right places.'
      },

      {
        id:'BCE-02', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: semicolon before “however”, which is not a coordinating conjunction',
        passage:'The kiln crew fires the salt-glaze pots at dawn because the wind drops after %BLANK% however, the glaze that comes out of a windless firing is paler than the one the pottery advertises.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'midnight;', B:'midnight,', C:'midnight', D:'midnight:'},
        correct:'A',
        expCorrect:'Cover the blank. Left: “The kiln crew fires the salt-glaze pots at dawn because the wind drops after midnight” — complete. Right: “however, the glaze … is paler than the one the pottery advertises” — also complete. Two complete sentences with no FANBOYS between them take a semicolon, and “however” is an adverb that only comments on the second one.',
        expWrong:{
          B:'is the splice the test repeats most often. “However” looks like a connector, but it is not one of the seven words (for, and, nor, but, or, yet, so) that a comma may pair with, so a comma alone is left holding two whole sentences together.',
          C:'with no mark at all the two sentences fuse, and the reader runs “drops after midnight however the glaze” together before backing up to find the turn.',
          D:'a colon announces that what follows delivers on what came before. This second sentence does the opposite — it takes the advantage back — so there is nothing for a colon to introduce.'
        },
        tip:'However, therefore, moreover, nevertheless, and instead are adverbs, not conjunctions. They can start a sentence after a semicolon or a period, but they can never hold two sentences together with only a comma.'
      },

      {
        id:'BCE-03', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: semicolons as the major separator in a list whose items already contain commas',
        passage:'The survey team logged three wrecks in one season: a whaler off Cape Mordan, Newfoundland; a coal hulk in the Solent, near %BLANK% and a wooden ferry that had settled upright in forty meters of water.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'Portsmouth,', B:'Portsmouth:', C:'Portsmouth', D:'Portsmouth;'},
        correct:'D',
        expCorrect:'Two of the three items carry commas inside them (“Cape Mordan, Newfoundland” and “the Solent, near Portsmouth”), so the commas are already in use at the lower level. The separator between items has to be heavier, and the mark that outranks a comma in a series is the semicolon — including in front of the final “and”, exactly as the first item was already separated.',
        expWrong:{
          A:'a comma here becomes the fourth comma of equal weight in the same series, so “near Portsmouth” reads as one more wreck and the count jumps from three to five.',
          B:'a colon announces a list; it cannot separate the items of a list that is already under way. The one colon this sentence needs has already done its job after “season”.',
          C:'with no separator at all “the Solent, near Portsmouth and a wooden ferry” reads as a single item, and the third wreck disappears into the second.'
        },
        tip:'When any item in a series contains a comma, every item is separated by semicolons — including the one before the final “and”. Mixed marks are what makes the list unreadable, not the length of the items.'
      },

      {
        id:'BCE-04', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: essential information takes no commas, and “that” never opens a nonessential element',
        passage:'Ana Bellamy grafted four fig varieties onto a single rootstock in 1996, and the %BLANK% ripens a full six weeks before the other three.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'variety, which she took from a roadside tree,', B:'variety that she took from a roadside tree', C:'variety, that she took from a roadside tree', D:'variety which she took from a roadside tree,'},
        correct:'B',
        expCorrect:'Four varieties are growing on that rootstock, so “the variety” by itself identifies nothing: the information about the roadside tree is what tells you which one ripens early. Essential information is written with “that” and with no marks around it at all.',
        expWrong:{
          A:'is grammatical on its own, which is the trap. A pair of commas around “which she took from a roadside tree” says the information can be lifted out — and lifting it out leaves “the variety ripens a full six weeks before the other three”, which cannot point at one of four.',
          C:'“that” only ever introduces essential information, so it can never follow the comma that opens an aside. The comma also opens an interruption that nothing in the sentence closes.',
          D:'the closing comma has no opening partner, and it lands between the subject “the variety … tree” and its verb “ripens”, where one lone mark may never stand.'
        },
        tip:'Ask what happens if you delete the words. If the sentence can still say which one it means, the information is removable: commas plus “which”. If it cannot, the information is essential: “that”, and no marks.'
      },

      {
        id:'BCE-05', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: colon after a complete sentence, introducing a phrase rather than a list',
        passage:'What the Venetian printers of the 1490s lacked was not skill but %BLANK% a supply of rag paper steady enough to keep four presses running through the winter.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'capital:', B:'capital,', C:'capital;', D:'capital'},
        correct:'A',
        expCorrect:'Cover everything after the blank: “What the Venetian printers of the 1490s lacked was not skill but capital” can end in a period. A colon looks backward first, and this left side passes. What follows a colon is free — a list, a phrase, or another sentence — so a single noun phrase that spells out what “capital” means is exactly what a colon may introduce.',
        expWrong:{
          B:'a comma is the mark for an aside or for items in a series, and it has no power to announce. It leaves “a supply of rag paper” hanging off “capital” as an afterthought, with nothing showing that the phrase defines the word before it.',
          C:'a semicolon demands a complete sentence on both sides, and “a supply of rag paper steady enough to keep four presses running through the winter” has no verb of its own.',
          D:'with no mark the noun phrase crashes into “capital”, and the reader has to guess whether a word was dropped in typesetting.'
        },
        tip:'A colon looks BACKWARD before it looks forward. Cover everything after it: what remains has to be able to end in a period. What comes after it is unrestricted, so a single phrase is as legal as a list.'
      },

      {
        id:'BCE-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: no colon, comma, or dash between a verb and the list that is its object',
        passage:'Before the season opens, the groundskeeper at Halloran Field always %BLANK% the drainage under the infield, the tension of the outfield fence, and the depth of the warning track.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'checks:', B:'checks;', C:'checks', D:'checks —'},
        correct:'C',
        expCorrect:'The three things being checked are the object of “checks”, and a verb runs straight into its own object with nothing between them. Cover the blank and read the left side: “the groundskeeper at Halloran Field always checks” ends on a transitive verb still waiting for what it acts on, so no mark that needs a complete sentence in front of it can go there.',
        expWrong:{
          A:'this is the colon error the test likes best, because the list that follows looks exactly like what a colon introduces. A colon may only follow words that could stand alone as a sentence, and these break off mid-verb.',
          B:'a semicolon needs a full sentence on each side, and neither side is one: the left stops on a verb, and the right is three noun phrases.',
          D:'a dash can introduce a list, but it is under the same rule as the colon — the words in front of it have to be able to end in a period.'
        },
        tip:'A list that answers “checks what?” is the object of the verb, and nothing separates a verb from its object. The colon test and the dash test are the same test: cover what follows and see whether a sentence is left.'
      },

      {
        id:'BCE-07', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: the closing comma of an appositive that would otherwise read as the next item in a list',
        passage:'The plaque in the lobby lists exactly two donors: Margit Solheim, the widow of the %BLANK% and an anonymous trust that has paid for the boiler since 1974.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'founder', B:'founder;', C:'founder —', D:'founder,'},
        correct:'D',
        expCorrect:'“the widow of the founder” renames Margit Solheim, so it is an aside about her and needs a comma at each end. The comma after “Solheim” opened it; the comma after “founder” closes it. With both commas in place the sentence names two donors, which is what it promised.',
        expWrong:{
          A:'with no closing mark the phrase stops being an aside about Solheim and becomes the next name in the series: “two donors: Margit Solheim, the widow of the founder and an anonymous trust” now counts three, and the sentence contradicts itself.',
          B:'a semicolon is the major separator of a series whose items carry commas, and using it here makes the same mistake in a heavier mark: it closes with a semicolon what a comma opened, so the pair no longer matches.',
          C:'a dash can close an aside, but only one that a dash opened. The interruption here began with the comma after “Solheim”, and the two ends of a pair must be the same mark.'
        },
        tip:'When a renaming phrase follows a name inside a list, the closing comma is what keeps it from being counted as another item. Read the sentence back and count: if the number changes, the closing mark is wrong.'
      },

      {
        id:'BCE-08', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: no comma between a verb and the object clause it governs, however long the subject',
        passage:'The two hydrophones that the acoustics team moored on opposite sides of the lagoon in 2014 have now %BLANK% that the reef fish chorus on a schedule tied to the moon rather than to the tide.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'shown,', B:'shown', C:'shown;', D:'shown:'},
        correct:'B',
        expCorrect:'The subject runs sixteen words before it reaches its verb, and by then the ear wants to breathe — but “that the reef fish chorus …” is the object of “have shown”, and nothing may stand between a verb and its own object. The correct sentence has no mark at all in the blank.',
        expWrong:{
          A:'is the intrusive comma, and the long subject is exactly what makes it tempting. Length never licenses a mark: “have shown” and the statement it delivers belong to each other with nothing in between.',
          C:'a semicolon needs an independent clause on each side. The left side ends on an auxiliary and a participle with no object yet, so it is not a sentence.',
          D:'a colon has the same requirement, and “The two hydrophones … have now shown” cannot end in a period either.'
        },
        tip:'No mark ever separates a verb from its object, a subject from its verb, or a preposition from its object — no matter how many words have piled up in front. If you want to breathe, that is a reason to reread, not to punctuate.'
      },

      {
        id:'BCE-09', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: dashes, not commas, around an aside that already contains commas of its own',
        passage:'The three stones that the 1962 dig left %BLANK% one carved with a boat, one with a sledge, and one too worn to read — were finally raised last April with a crane borrowed from the port.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'unlifted —', B:'unlifted,', C:'unlifted;', D:'unlifted'},
        correct:'A',
        expCorrect:'A dash already closes the aside just before “were finally raised”, so a dash has to open it. Dashes are also the only pair that stays visible here: the interruption contains three commas of its own, and a mark heavier than a comma is what lets the reader see where the aside starts and stops.',
        expWrong:{
          B:'closes the pair with the wrong half: a comma cannot open an aside that a dash closes. It would also be the fourth comma in twelve words, so the boundary of the interruption disappears into the list inside it.',
          C:'a semicolon needs a complete sentence on each side, and “one carved with a boat, one with a sledge, and one too worn to read” is a series of noun phrases with no verb.',
          D:'with no opening mark the closing dash has nothing to close, and the subject “The three stones” runs straight into a list that was meant to interrupt it.'
        },
        tip:'When the interrupting material already contains commas, use dashes (or parentheses) for the pair. The rule about matching both ends still holds: a dash closes what a dash opened.'
      },

      {
        id:'BCE-10', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: semicolon when the second sentence opens with a long introductory phrase',
        passage:'Kovalenko rewrote the second movement in a single %BLANK% in the copy that reached the publisher three weeks later, the horn entry that the first performance had exposed as unplayable is simply gone.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'night,', B:'night and', C:'night;', D:'night'},
        correct:'C',
        expCorrect:'The long phrase on the right hides a full sentence behind it. Strip the opener and the right side is “the horn entry … is simply gone” — subject and verb, complete. The left side is complete too, and with no conjunction joining them the mark is a semicolon.',
        expWrong:{
          A:'is a splice. The introductory phrase makes the right side feel dependent, but it has its own subject (“the horn entry”) and its own verb (“is”), so a comma alone cannot hold the two sentences together.',
          B:'“and” may join two complete sentences, but it needs its own comma directly in front of it. A bare conjunction leaves them fused.',
          D:'with no mark the reader attaches “in the copy that reached the publisher” to “rewrote” and has to go back once the second subject arrives.'
        },
        tip:'Before judging the right side, delete anything before its first subject. A twenty-word opener can disguise a complete sentence, and the mark you need depends on what is underneath it, not on how it starts.'
      },

      {
        id:'BCE-11', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: no colon or comma after the verb of an inverted sentence',
        passage:'Among the objects that the divers raised from the galley of the Santa Corda %BLANK% a copper pot, two bone dice, and a wooden comb still holding three of its teeth.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'were:', B:'were;', C:'were,', D:'were'},
        correct:'D',
        expCorrect:'The sentence is inverted: the subject is the list itself, and “were” comes before it. Read it back in the ordinary order — “A copper pot, two bone dice, and a wooden comb were among the objects that the divers raised” — and it is one clean sentence with no mark anywhere near the verb.',
        expWrong:{
          A:'is the trap the inversion sets, because what follows looks like a list a colon should announce. A colon may only follow a complete statement, and “Among the objects that the divers raised from the galley of the Santa Corda were” breaks off on a verb with nothing linked to it.',
          B:'a semicolon needs a full sentence on both sides; here the left side ends on “were” and the right side is the subject that belongs to it.',
          C:'a comma between a verb and the words that complete it is the intrusive comma. The list is not an aside — it is what “were” is about.'
        },
        tip:'When a sentence starts with a place or a direction, suspect an inversion: the subject is waiting on the other side of the verb. Flip it back into normal order and punctuate what you see there.'
      },

      {
        id:'BCE-12', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: the comma pair around nonessential information the sentence has made removable',
        passage:'Bruno Ferrante planted a single medlar in the courtyard in 1959, and the %BLANK% has outlived every other tree on the block.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'medlar, which he grew from seed,', B:'medlar which he grew from seed', C:'medlar, which he grew from seed', D:'medlar which he grew from seed,'},
        correct:'A',
        expCorrect:'There is exactly one medlar, so “the medlar” already identifies it and the detail about the seed adds something the sentence can spare. Removable information is written with “which” and fenced by a comma at each end — the first after “medlar”, the second before “has”.',
        expWrong:{
          B:'leaves the information essential, which claims there are other medlars in the courtyard and this is the one grown from seed. The sentence has already said there is a single medlar, so there is nothing left to distinguish.',
          C:'opens the aside and never closes it. Without the second comma the reader cannot tell where the interruption ends, and the subject is left fenced on one side only.',
          D:'closes an aside that no comma opened, and that lone mark falls between the subject and the verb “has outlived”, which is the one place a single comma may never go.'
        },
        tip:'Count first. If only one thing of that kind exists, the description of it is extra: commas plus “which”. If several exist and the words pick one out, they are essential: “that”, no commas.'
      },

      {
        id:'BCE-13', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: the mark the main sentence needs goes outside the closing parenthesis',
        passage:'The only complete copy of the 1541 herbal sits in a library in Uppsala (the Vatican copy lost its last forty leaves in a %BLANK% and scholars who want the missing plates still work from photographs taken in 1908.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'fire,)', B:'fire),', C:'fire)', D:'fire);'},
        correct:'B',
        expCorrect:'Two complete sentences are being joined by “and”, so the main sentence needs a comma in front of that conjunction. The parenthetical closes first and the comma follows it: punctuation that belongs to the outer sentence always sits outside the closing parenthesis.',
        expWrong:{
          A:'puts the comma inside. That comma belongs to the outer sentence, not to the aside about the Vatican copy, and only marks that belong to the parenthetical stay in.',
          C:'closes the parenthesis correctly but drops the comma altogether, leaving “and” joining two complete sentences with nothing in front of it.',
          D:'a semicolon and a coordinating conjunction do the same job, so using both leaves one of them with nothing to do; a semicolon in front of “and” is the one place it cannot go.'
        },
        tip:'Delete the parenthetical and punctuate the sentence that remains. Then put the parenthetical back: its own marks stay inside, and the sentence’s marks stay outside.'
      },

      {
        id:'BCE-14', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: no comma before the “and” that joins two verbs sharing one subject',
        passage:'The cartographer Sanne Duyvis spent four years redrawing the coast of the inner sound %BLANK% and then discovered that the tide tables she had worked from were themselves copied from a 1793 survey.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'from aerial photographs,', B:'from aerial photographs;', C:'from aerial photographs', D:'from aerial photographs:'},
        correct:'C',
        expCorrect:'“spent” and “discovered” share one subject, Sanne Duyvis. That makes them a two-verb predicate, not two sentences, and a two-verb predicate takes no mark before “and”. Test it: “and then discovered that the tide tables …” has no subject of its own, so there is no second sentence to separate.',
        expWrong:{
          A:'a comma in front of “and” is correct only when “and” joins two complete sentences. Here it cuts one predicate in half and strands its second verb.',
          B:'a semicolon demands a complete sentence on its right, and everything after “and” is missing a subject.',
          D:'a colon announces a list or an explanation; what follows is simply the second thing the same person did.'
        },
        tip:'Before putting a comma in front of and/but/or/so, cover everything to its right and ask whether a whole sentence is left. No subject on the right means no comma.'
      },

      {
        id:'BCE-15', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: colon rather than semicolon when the first clause has promised what the second delivers',
        passage:'The reason the ferry still carries its 1954 wooden wheelhouse is not %BLANK% the harbor authority has never found a shipwright willing to certify a replacement.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'sentiment;', B:'sentiment,', C:'sentiment', D:'sentiment:'},
        correct:'D',
        expCorrect:'The left side announces something it has not yet supplied: “The reason … is not sentiment” tells you a real reason is coming. A colon is the mark that says what follows is that reason. The left side is also a complete sentence, which is the colon’s only requirement.',
        expWrong:{
          A:'is legal English, and that is precisely the trap: both sides are complete sentences, so a semicolon breaks no rule. What it fails to do is show the relation — a semicolon says only that the two statements sit side by side, while this sentence has promised a reason and then hands it over.',
          B:'a lone comma between two complete sentences is the splice, however tightly the two ideas are connected.',
          C:'with no mark at all the sentences run on, and “not sentiment the harbor authority” reads as one noun phrase until the reader gives up and starts over.'
        },
        tip:'Semicolon and colon can both follow a complete sentence, so the tie-breaker is meaning: a semicolon balances two related statements, a colon delivers what the first one announced. Words like “reason”, “problem”, and “one thing” are the announcement.'
      },

      {
        id:'BCE-16', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Boundaries: the comma splice that the adverb “then” leaves behind',
        passage:'Ottoline Maddox weighed each blank before it went into the kiln and again after it came %BLANK% then she plotted the loss against the depth of the glaze and found a line so straight that she repeated the whole run to be sure.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'out,', B:'out;', C:'out', D:'out and'},
        correct:'B',
        expCorrect:'Both sides are complete: “Ottoline Maddox weighed each blank … after it came out” and “then she plotted the loss … to be sure”. “Then” tells you when, not that two statements are being joined, so it leaves the sentences needing a mark of their own — the semicolon.',
        expWrong:{
          A:'“then” sounds like a connector, so this comma feels earned; it is not. “Then” is an adverb, and an adverb cannot license a comma between two complete sentences. The result is a splice.',
          C:'with no mark the two sentences are fused, and “after it came out then she plotted” gives the reader nowhere to stop.',
          D:'“and” is a conjunction that can join two sentences, but it needs a comma directly in front of it; without one the two statements are still run together.'
        },
        tip:'Then, thus, so far, meanwhile, and instead are adverbs. If a complete sentence stands on each side of one of them, the mark you need is a semicolon or a period — the adverb itself joins nothing.'
      },

      /* ══ FORM, STRUCTURE, AND SENSE (BCE-17 a BCE-32) ═══════════════════ */

      {
        id:'BCE-17', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — subject-verb agreement across a long stretch of intervening plural nouns',
        passage:'The cost of the replacement blades, together with the cranes and the two barges that the utility has to hire for a single week in September, %BLANK% now higher than what the whole turbine cost in 2009.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'are', B:'were', C:'have been', D:'is'},
        correct:'D',
        expCorrect:'Delete every “of…” and “together with…” phrase and the skeleton is “The cost … is now higher than …”. The subject is “The cost”, one figure, so the verb is singular, and “now” fixes it in the present. Check: one cost, one “is”.',
        expWrong:{
          A:'agrees with “blades”, “cranes”, or “barges” — the three plural nouns stacked between the subject and its verb. None of them is the subject; what is higher is the cost.',
          B:'plural and past. “Together with” never makes a singular subject plural, and “now” rules out the past outright.',
          C:'plural again, and the perfect form reports a change that has accumulated over time, while the sentence is stating what is true at this moment.'
        },
        tip:'“Together with”, “along with”, “as well as”, and “in addition to” add information, not subjects. Cross the whole phrase out before you choose the verb.'
      },

      {
        id:'BCE-18', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — agreement when the subject is “a number of” rather than “the number of”',
        passage:'Since the new gauge went in at the river mouth, a number of readings that the old float recorder had logged as ordinary spring floods %BLANK% as the largest discharges of the century.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'have been reclassified', B:'has been reclassified', C:'is reclassified', D:'was reclassified'},
        correct:'A',
        expCorrect:'“A number of” means “several” and is always plural, so the verb is “have been”. The reclassifying is finished but its result stands, which is what the present perfect passive reports: several readings now carry a new label.',
        expWrong:{
          B:'treats “a number of” as singular. “The number of” is singular, because it names one figure; “a number of” counts things, and the things here are readings.',
          C:'singular again, and the simple present describes a standing practice rather than a change that has already happened to a particular set of readings.',
          D:'singular and simple past. Besides the agreement error, the plain past would close the matter off in the past, while the sentence is reporting what those readings are called today.'
        },
        tip:'“The number of” = one figure = singular. “A number of” = several = plural. The noun after “of” is a decoy in the first case and the thing being counted in the second.'
      },

      {
        id:'BCE-19', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — a singular subject such as “each” keeps its singular verb',
        passage:'Each of the eleven hand presses that the museum keeps in working order %BLANK% a different platen, and the printers who volunteer on Saturdays have to relearn the pull every time they change machines.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'have', B:'having', C:'has', D:'were having'},
        correct:'C',
        expCorrect:'The subject is “Each”, and “each” is singular wherever it appears, no matter how plural the “of…” phrase behind it sounds. Cross out “of the eleven hand presses that the museum keeps in working order” and what is left is “Each … has a different platen.”',
        expWrong:{
          A:'agrees with “the eleven hand presses”, the plural sitting closest to the blank. That noun is inside the “of…” phrase, and an “of…” phrase never supplies the subject.',
          B:'“having” is not a finite verb, so the first half of the sentence loses its main verb and stops being a statement at all.',
          D:'plural and progressive: it repeats the agreement error and reports something in progress, while the sentence is describing a permanent feature of the machines.'
        },
        tip:'Each, either, neither, every, one, anyone, and everyone stay singular forever. The plural that follows “of” is there to pull your ear the wrong way.'
      },

      {
        id:'BCE-20', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — verb tense sequence: the past perfect marks the earlier of two finished actions',
        passage:'When Idris Faleiro opened the cave in 1979 he found the ochre hand stencils already flaking, because water %BLANK% along the ceiling seam for at least two decades before the entrance was ever cleared.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'has been running', B:'had been running', C:'ran', D:'runs'},
        correct:'B',
        expCorrect:'Two finished events are in play, and the sentence dates them: the cave was opened in 1979, and the water was running “for at least two decades before” that. The earlier of two past actions takes the past perfect, and the continuing sense over two decades makes it “had been running”.',
        expWrong:{
          A:'the present perfect connects the seepage to now, but the sentence closed its window in 1979 and says nothing about the state of the seam today.',
          C:'the simple past puts the seepage on the same footing as the opening of the cave, when “for at least two decades before” says one finished before the other began. Two past actions in sequence need the earlier one marked.',
          D:'the simple present reports a habit or a current fact, which contradicts both the date and “before the entrance was ever cleared”.'
        },
        tip:'When a sentence dates one past action as earlier than another past action, the earlier one goes into the past perfect (“had done”, “had been doing”). The word that gives it away is usually before, after, by the time, or already.'
      },

      {
        id:'BCE-21', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — a possessive pronoun matching a collective antecedent',
        passage:'The orchestra that Sylvie Marchetti rebuilt out of two failing ensembles has sold out every program it has announced since March, and %BLANK% first recording is due in the autumn.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'their', B:'it’s', C:'whose', D:'its'},
        correct:'D',
        expCorrect:'The word the pronoun points back to is “The orchestra”, and American usage treats an orchestra as one body — the sentence has already called it “it” in “every program it has announced”. One body takes the singular possessive “its”, spelled with no apostrophe.',
        expWrong:{
          A:'“their” agrees with the musicians that the word “orchestra” brings to mind rather than with the word itself, and it also contradicts the “it” the sentence has already used for the same group.',
          B:'“it’s” is the contraction of “it is”. Read it out: “and it is first recording is due in the autumn” has two verbs and no sense. A possessive standing in front of a noun never carries an apostrophe.',
          C:'“whose” is a relative pronoun and has to attach an added statement to a nearby noun, but the main verb “has sold out” has already come and gone. Hooking a relative on after it leaves the second half of the sentence with no subject of its own.'
        },
        tip:'Once a sentence has chosen “it” for a group, every later pronoun for that group is “it” and “its”. Mixing “it” and “their” inside one sentence is the error the test plants most often with collective nouns.'
      },

      {
        id:'BCE-22', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — plural possessive against plain plural and singular possessive',
        passage:'The two surveyors who walked the boundary in 1884 left notebooks so different in style that the county eventually published both, and the %BLANK% disagreements are still argued over at the historical society.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'surveyors’', B:'surveyor’s', C:'surveyors', D:'surveyors,'},
        correct:'A',
        expCorrect:'Two questions in this order: how many owners, and does something belong to them? There are two surveyors, and the disagreements are theirs. Write the plural first — “surveyors” — and then add the apostrophe after the s: “surveyors’ disagreements”.',
        expWrong:{
          B:'is a flawless singular possessive, which is exactly why it is the trap. It says the disagreements belong to one surveyor, and the sentence has counted two.',
          C:'supplies the plural and stops there. Two nouns stacked together show no ownership at all, and “surveyors disagreements” never says whose the disagreements are.',
          D:'puts a mark between an owner and the thing owned, where nothing may stand, and it still leaves “disagreements” with no possessor.'
        },
        tip:'Build the plural first, then add the apostrophe. “Surveyor” → “surveyors” → “surveyors’”. Writing “surveyor’s” for two people is the same error as writing “surveyors’s”.'
      },

      {
        id:'BCE-23', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — the possessive pronoun against its look-alike contraction',
        passage:'The Barnes seismograph, one of only four that survived the fire at the station, is valued less for the records it produced than for %BLANK% drum, whose smoked-paper coating the modern replicas have never matched.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'it’s', B:'their', C:'its', D:'they’re'},
        correct:'C',
        expCorrect:'The drum belongs to the seismograph — one machine — so the possessive is “its”, with no apostrophe. The long aside about the fire and the comparison with “the records it produced” are there to bury the owner; strip them and the phrase is “valued … for its drum”.',
        expWrong:{
          A:'“it’s” expands to “it is”, and “valued … for it is drum” collapses. The apostrophe form is a contraction and is never the possessive.',
          B:'“their” is plural, and the only plural nearby is “the records”, which do not own the drum. The owner is the seismograph.',
          D:'“they’re” is “they are”, so it makes both errors at once: plural where the owner is singular, and a contraction where a possessive belongs.'
        },
        tip:'Say the apostrophe form out loud as two words. If “it is” or “they are” breaks the sentence, you needed the possessive — “its” or “their” — and possessive pronouns never take an apostrophe.'
      },

      {
        id:'BCE-24', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — the possessive relative pronoun against its contracted look-alike',
        passage:'The mapmaker Delphine Aubrac, %BLANK% 1888 chart of the delta is still the one the pilots keep on the bridge, never once traveled the river she spent thirty years drawing.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'who’s', B:'whose', C:'her', D:'which'},
        correct:'B',
        expCorrect:'Two jobs have to be done at once here: own the chart, and attach the added statement to “Delphine Aubrac” so that the main verb “never once traveled” still belongs to her. Only “whose” does both — it is the possessive relative pronoun, used for people and for things alike.',
        expWrong:{
          A:'“who’s” is “who is” or “who has”, so the sentence reads “Delphine Aubrac, who is 1888 chart of the delta is still the one …”. A contraction cannot own a noun.',
          C:'“her” is the right possessive for a person but it cannot attach anything. Drop it in and the interruption becomes a complete second statement with no word linking it to the name, and the main verb is stranded.',
          D:'“which” is a relative pronoun but not a possessive one, so “which 1888 chart” leaves the chart with no owner; “which” also points at things, and the owner here is a person.'
        },
        tip:'“Whose” is the possessive of both “who” and “which”, so it is correct for people, objects, and organizations. “Who’s” is only ever “who is” or “who has”.'
      },

      {
        id:'BCE-25', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — an opening modifier has to describe the subject that follows it',
        passage:'Having spent two winters photographing the same glacier from the same ridge, %BLANK% the front had retreated by nearly ninety meters.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'the photographs showed that', B:'it was clear to Ravi Solberg that', C:'there was proof that', D:'Ravi Solberg could show that'},
        correct:'D',
        expCorrect:'An opening modifier attaches to whichever noun comes first after it, so the word right after the blank’s comma has to name whoever spent two winters on the ridge. That is Ravi Solberg, and putting his name in the subject slot makes the modifier land where it belongs.',
        expWrong:{
          A:'makes “the photographs” the thing that spent two winters photographing a glacier. Photographs take no photographs; the modifier lands on the wrong noun.',
          B:'the noun that follows the modifier is “it”, a placeholder that did nothing at all. Naming the photographer later, inside “to Ravi Solberg”, does not repair the attachment — the subject slot is what the modifier reads.',
          C:'“there” is an empty subject with no agent behind it, so the opening modifier has nothing whatever to describe.'
        },
        tip:'After a modifier that opens a sentence, the very next noun is what it describes. Read that noun and the modifier together as a mini-sentence; if it is absurd, the modifier is dangling.'
      },

      {
        id:'BCE-26', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — parallel form across the three items of a series',
        passage:'A good ringing master teaches the band to hold the rope lightly, to listen for the bell two places ahead of their own, and %BLANK% the striking gap open when the tower echo makes it sound closed.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'to keep', B:'keeping', C:'they keep', D:'for keeping'},
        correct:'A',
        expCorrect:'All three items hang off “teaches the band”, and the first two are infinitives: “to hold”, “to listen”. The third has to take the same shape, so it is “to keep”. Check by reading the frame with each item alone: teaches the band to hold, to listen, to keep.',
        expWrong:{
          B:'switches the third item to a participle. “Teaches the band … keeping the striking gap open” no longer hangs off the verb the way the first two do, so the series breaks at the last item.',
          C:'turns the third item into a statement with its own subject and finite verb, which cannot sit in a series beside two infinitives.',
          D:'is a third shape again, and it also changes the meaning: “teaches the band for keeping the gap open” reads as a reason for the teaching rather than as one of the things taught.'
        },
        tip:'Read the words before the list, then jump straight to each item in turn. If the frame plus item one works and the frame plus item three does not, the last item has changed form.'
      },

      {
        id:'BCE-27', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — the conventional expression a verb requires',
        passage:'The kiln that Odile Ferrand built into the hillside does not %BLANK% the county air rules, which is why every firing has to be booked with the district office a month in advance.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'comply to', B:'comply on', C:'comply with', D:'comply for'},
        correct:'C',
        expCorrect:'“Comply” is fixed to one preposition in English: you comply WITH a rule, a request, or an order. Nothing in the sentence changes that, and the length of the material around the verb is there only to make the ear lose the pairing.',
        expWrong:{
          A:'borrows the preposition from “conform to”, which means almost the same thing and takes a different word. The two are not interchangeable.',
          B:'“on” follows verbs such as “insist”, “rely”, and “depend”; it has no standing after “comply”.',
          D:'“for” states a purpose or a beneficiary, which is what follows “account” or “allow”. It cannot express the relation between a kiln and a rule.'
        },
        tip:'Prepositions in fixed expressions are memorized, not reasoned out: comply with, conform to, differ from, capable of, insist on, preferable to. When one appears, ignore the sentence around it and check the pairing alone.'
      },

      {
        id:'BCE-28', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — choosing the tense that the stated dates require',
        passage:'By the time the survey ship reached the bank in July 1962, the trawler crews who worked that ground %BLANK% the same snag on their nets for eleven seasons, and two of them had already marked it on a private chart.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'have been catching', B:'had been catching', C:'were catching', D:'are catching'},
        correct:'B',
        expCorrect:'“By the time … reached … in July 1962” sets a moment in the past and asks what was already true when it arrived. Eleven seasons of snagging ran up to that moment and stopped there, so the form is the past perfect progressive: “had been catching”. The second half confirms it with “had already marked”.',
        expWrong:{
          A:'the present perfect runs the eleven seasons up to today, but “By the time the survey ship reached the bank in July 1962” closes the window in 1962.',
          C:'the past progressive puts the snagging alongside the ship’s arrival instead of before it, so “for eleven seasons” has nothing to count back from.',
          D:'the present claims the crews are still catching that snag now, which both the date and “for eleven seasons” rule out.'
        },
        tip:'“By the time” plus a past event is a signal: whatever was already happening takes “had” plus the participle. The second half of these sentences usually contains a second “had”, which confirms the reading.'
      },

      {
        id:'BCE-29', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — a pronoun and its antecedent have to agree in number',
        passage:'The committee that reviews the seed bank’s exchange requests meets in February, and by then every institution on the waiting list has had to state in writing what %BLANK% intends to do with the material.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'they', B:'them', C:'it’s', D:'it'},
        correct:'D',
        expCorrect:'The pronoun points back to “every institution”, and “every” is singular wherever it appears — the sentence has already agreed with it once, in “has had to state”. The singular subject pronoun for an institution is “it”, which also matches the singular verb “intends”.',
        expWrong:{
          A:'“they” agrees with the waiting list understood as a crowd, but the word the pronoun refers to is “every institution”, and it is singular. It also clashes with the singular “intends” standing right after the blank.',
          B:'“them” is an object form, and this pronoun is the subject of “intends”. The number is wrong as well.',
          C:'“it’s” is the contraction of “it is”, so the sentence reads “what it is intends to do”. A contraction cannot serve as a plain subject pronoun.'
        },
        tip:'Find the exact word the pronoun replaces, not the idea behind it. “Every”, “each”, and “any” force a singular pronoun even when the sentence is clearly talking about many.'
      },

      {
        id:'BCE-30', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — the verb agrees with the subject that follows it in an inverted sentence',
        passage:'On the shelf above the potter’s wheel %BLANK% a row of test tiles, each one glazed with a slightly different mix of ash and feldspar.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'sits', B:'sit', C:'sitting', D:'have sat'},
        correct:'A',
        expCorrect:'The sentence is inverted, so the subject comes after the verb: what is on the shelf is “a row”. One row takes a singular verb. Turn it around to check — “A row of test tiles sits on the shelf above the potter’s wheel” — and the agreement is plain.',
        expWrong:{
          B:'agrees with “test tiles”, the plural that arrives just after the blank and is the first thing the ear grabs. The tiles are inside the “of…” phrase; the subject is the row.',
          C:'“sitting” is not a finite verb, so the words never become a statement at all.',
          D:'plural again, and the perfect reports how long the row has been there rather than describing where it stands.'
        },
        tip:'When a sentence opens with a place, the subject is hiding behind the verb. Flip the sentence into ordinary order before choosing between singular and plural.'
      },

      {
        id:'BCE-31', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — “the number of” names one figure and takes a singular verb',
        passage:'Although the trials ran in seven cities at once, the number of gardeners who reported that the new rootstock survived a hard frost %BLANK% too small for the station to publish anything at all.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'were', B:'have been', C:'was', D:'are'},
        correct:'C',
        expCorrect:'The subject is “the number”, a single figure, so the verb is singular; and “the trials ran” has already put the sentence in the past, so it is “was”. Everything from “of gardeners” to “frost” is modification wedged between the subject and its verb.',
        expWrong:{
          A:'agrees with “gardeners”, the plural nearest the blank and the noun the reader has been holding on to for fifteen words. What was too small is not the gardeners but the number.',
          B:'plural, and the perfect connects the shortfall to the present when the trials are described as finished.',
          D:'plural and present; the trials “ran”, so the verb has to be past as well as singular.'
        },
        tip:'“The number of X” is one figure and always singular. Its twin, “a number of X”, means “several” and is always plural — the article is the whole difference.'
      },

      {
        id:'BCE-32', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — the preposition that a conventional expression fixes',
        passage:'The lacquer that Hiroko Tanabe uses on the drum shells differs %BLANK% the industrial varnish in one way that matters: it stays slightly elastic, so the shell can go on ringing after the stick has left it.',
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'than', B:'from', C:'to', D:'with'},
        correct:'B',
        expCorrect:'“Differ” takes “from” when two things are being contrasted: one thing differs from another. The rest of the sentence is built to make the comparison feel like a comparative, but the verb’s pairing does not change.',
        expWrong:{
          A:'“than” follows a comparative form such as “more elastic”, “harder”, or “better”. “Differs” is not a comparative, so nothing here licenses it.',
          C:'“to” is the preposition of “similar to” and “compare to”, and borrowing it here produces “differ to”, which is not the fixed expression.',
          D:'“differ with” does exist, but it means to disagree with a person. A lacquer holds no opinions, and the sentence is contrasting two materials.'
        },
        tip:'Differ FROM two things, differ WITH a person. And “than” belongs only after a comparative word — if there is no “-er” or “more” in sight, “than” is wrong.'
      }

    ]
  });
})();
