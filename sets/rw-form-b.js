/* SAT Studio question set — Reading & Writing: Form, Structure, and Sense — Form B (FSB-01 a FSB-34) */
/* El tier duro de la misma destreza, escrito para NO pisar rw-form-a: sujetos que
   enganan por su forma (news, mathematics, the number of / a number of, a series of,
   criteria, data), either/or y neither/nor con el sujeto invertido, concordancia a
   traves de "one of the ... who", discurso indirecto y tercer condicional, subjuntivo
   tras recommend/require/ask that, each y every como determinantes, el reflexivo mal
   puesto, propiedad conjunta contra separada, paralelismo correlativo y en "as ... as",
   modificadores limitantes (only / nearly / just) y comparaciones incompletas.
   34 MC · 6 Facil · 14 Media · 14 Dificil (6 de las dificiles con extreme:true).
   OJO: nada de participio fusionado ni de "that" para personas: los dos admiten dos
   lecturas defendibles hoy y una pregunta con dos respuestas no ensena nada. */
(function(){
  window.SAT_SETS.push({
    id: 'rw-form-b',
    title: 'Form, Structure, and Sense — Form B',
    section: 'rw',
    level: 'Difícil',
    description: 'Deceptive subjects, correlative agreement, reported speech, conditionals, the subjunctive, reflexives, ownership forms, parallel structure, limiting modifiers, and complete comparisons.',
    minutes: 30,
    questions: [

      /* ── Sujetos que enganan por su forma (01-07) ─────────────────────── */
      {
        id:'FSB-01', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — a singular noun that ends in -s takes a singular verb',
        passage:"News of the four canceled sailings %BLANK% posted on the harbor board before the ticket office even opened.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'were', B:'was', C:'have been', D:'are'},
        correct:'B',
        expCorrect:'“News” ends in -s, but it names one uncountable thing, so it takes a singular verb. “Of the four canceled sailings” only says what the news is about, and a noun inside an “of” phrase is never the subject. The office “opened”, so the sentence is past: “was posted”.',
        expWrong:{
          A:'“were” is plural. It agrees with “sailings”, the noun closest to the blank, but that noun sits inside a prepositional phrase.',
          C:'“have been” is plural, and the present perfect ties the posting to right now, while the rest of the sentence looks back at one morning.',
          D:'“are” is plural and present; nothing in the sentence is happening as you read it.'
        },
        tip:'Do not count the -s. News, mathematics, physics, and civics each name one thing and take a singular verb. Then cross out the “of” phrase before you match anything.'
      },
      {
        id:'FSB-02', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — subject-verb agreement with an “-ics” field name',
        passage:"Mathematics, a subject the two teacher-training colleges had once left entirely to specialists, %BLANK% now part of every first-year program there.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'is', B:'are', C:'were', D:'have been'},
        correct:'A',
        expCorrect:'“Mathematics” names one field of study; the -s belongs to the word and is not a plural ending. The description set off in the middle of the sentence cannot change the number of the subject, and “now” keeps the sentence in the present: “is”.',
        expWrong:{
          B:'“are” treats the final -s as a plural ending. A field of study is one thing.',
          C:'“were” is plural and past, which fights the word “now”.',
          D:'“have been” is plural; a singular subject would need “has been”.'
        },
        tip:'Field names ending in -ics — mathematics, physics, economics, statistics as a discipline — are singular, and so are news and civics.'
      },
      {
        id:'FSB-03', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — “the number of” takes a singular verb',
        passage:"The number of pearl divers still working the shallow beds off the cape %BLANK% smaller every year.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'are getting', B:'get', C:'is getting', D:'have gotten'},
        correct:'C',
        expCorrect:'The subject is “The number”, and a number is one figure however many people it counts. Everything after it — “of pearl divers still working the shallow beds off the cape” — only says what is being counted. So: “The number … is getting smaller.”',
        expWrong:{
          A:'“are getting” is plural. It agrees with “divers”, which is the object of “of”, not the subject.',
          B:'“get” is the plural present, pulled in by the same noun inside the “of” phrase.',
          D:'“have gotten” is plural, and the present perfect reports a finished change rather than the year-by-year decline the sentence describes.'
        },
        tip:'The article decides. “THE number of …” is one figure and takes a singular verb; “A number of …” means “several” and takes a plural one.'
      },
      {
        id:'FSB-04', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — “a number of” takes a plural verb',
        passage:"A number of the oak beams pulled from the collapsed pier %BLANK% still sound enough to be used in the new footbridge.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'is', B:'was', C:'has been', D:'are'},
        correct:'D',
        expCorrect:'“A number of” is a quantity word, not a count: it works exactly like “several”. What the verb really belongs to is “the oak beams”, which is plural, so the verb is plural: “are”.',
        expWrong:{
          A:'“is” treats “number” as the head noun. With the article “a”, the phrase has stopped naming a figure and started meaning “several”.',
          B:'“was” is singular and past, while “still sound” describes the beams as they are now.',
          C:'“has been” is singular; the plural subject would need “have been”.'
        },
        tip:'Swap in “several”. If “several of the beams” reads right, you are looking at “a number of” and the verb is plural. Only “the number of” stays singular.'
      },
      {
        id:'FSB-05', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — “a series of” keeps a singular verb',
        passage:"A series of tremors too faint for anyone in the valley to feel %BLANK% recorded by the new seismometer during its first week underground.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'were', B:'was', C:'have been', D:'are'},
        correct:'B',
        expCorrect:'The subject is “A series” — one series, however many tremors it holds. Two things stand between it and the verb: the “of” phrase and the description “too faint for anyone in the valley to feel”. Neither can be the subject, and “during its first week” places the sentence in the past: “was recorded”.',
        expWrong:{
          A:'“were” is plural. It agrees with “tremors”, which belongs to the “of” phrase and cannot be the subject.',
          C:'“have been” is plural, and the present perfect reaches to the present, while the instrument’s first week is over.',
          D:'“are” is plural and present, so it misses both the number and the time frame.'
        },
        tip:'Collection words — a series, a set, a batch, a stack, a pair, a run — are singular no matter how many items follow “of”.'
      },
      {
        id:'FSB-06', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — subject-verb agreement with the plural form “criteria”',
        passage:"The criteria the review board finally settled on %BLANK% printed on the first page of every application packet.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'are', B:'was', C:'is', D:'has been'},
        correct:'A',
        expCorrect:'“Criteria” is the plural of “criterion”, so the verb is plural: “are printed”. The words in the middle (“the review board finally settled on”) form a separate description with its own subject and verb, and they do not touch the main one.',
        expWrong:{
          B:'“was” is singular and past; the packets are described as they are printed now.',
          C:'“is” treats “criteria” as a singular noun. The singular is “criterion”.',
          D:'“has been” is singular as well, and it agrees with “board”, the noun closest to the blank.'
        },
        tip:'Learn the pairs that change shape: criterion/criteria, phenomenon/phenomena, datum/data, medium/media. The -a form is the plural one.'
      },
      {
        id:'FSB-07', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — holding one number for a noun the writer already treated as plural',
        passage:"The data the survey team brought back from the estuary %BLANK% inconsistent enough that they had to be collected all over again the following spring.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'was', B:'were', C:'has been', D:'is'},
        correct:'B',
        expCorrect:'Later in the same sentence the data are called “they” (“they had to be collected”). The sentence has therefore already chosen to treat the word as a plural, and the verb has to match that choice: “were inconsistent”. One sentence keeps one treatment.',
        expWrong:{
          A:'“was” is the singular treatment. Some writing does take “data” as singular, but then the later pronoun would have to be “it”, and this sentence says “they”.',
          C:'“has been” is singular, and the present perfect also clashes with “brought back” and “had to be collected”, which are past.',
          D:'“is” is singular and present; the whole sentence looks back at one field season.'
        },
        tip:'When a noun can go either way, let the rest of the sentence decide. A pronoun or a second verb that has already committed to one number locks in the other.'
      },

      /* ── either/or y neither/nor con el sujeto invertido (08-09) ───────── */
      {
        id:'FSB-08', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — “either … or …” agrees with the nearer subject',
        passage:"Either the two night watchmen or the yard manager %BLANK% required to sign the gate log at midnight.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'are', B:'were', C:'have been', D:'is'},
        correct:'D',
        expCorrect:'With “either … or …”, the verb agrees with whichever subject stands nearer to it. The nearer one is “the yard manager”, which is singular, so the verb is singular: “is required”.',
        expWrong:{
          A:'“are” agrees with “the two night watchmen”, the subject farther from the verb. The rule looks at the nearer one.',
          B:'“were” is plural and past, while the rule about signing the log is a standing one.',
          C:'“have been” is plural; a singular nearer subject would need “has been”.'
        },
        tip:'For “either X or Y” and “neither X nor Y”, cover X completely and match the verb to Y alone. Test writers put the plural first on purpose.'
      },
      {
        id:'FSB-09', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — “neither … nor …” agreeing in person with the nearer subject',
        passage:"Even now, neither the archivists nor I %BLANK% able to explain how a ledger from the harbor office ended up in a drawer of railway maps.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'am', B:'is', C:'are', D:'was'},
        correct:'A',
        expCorrect:'The verb matches the nearer subject, and the nearer subject is “I”. In the present, the form of “to be” that goes with “I” is “am”, and “Even now” is what fixes the tense as present.',
        expWrong:{
          B:'“is” is the third-person singular form. “I” never takes “is”, however far it sits from the verb.',
          C:'“are” agrees with “the archivists”, the subject on the far side of “nor”.',
          D:'“was” would agree with “I” in number, but it is past, and “Even now” places the sentence in the present.'
        },
        tip:'The nearer-subject rule covers person, not just number. “Neither they nor I am …” looks odd and is still right; if it bothers you, reorder so the smoother subject lands second.'
      },

      /* ── Concordancia a traves de "one of the ... who" (10-11) ─────────── */
      {
        id:'FSB-10', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — verb agreement in “one of the … who …”',
        passage:"Ramirez is one of the volunteers who %BLANK% the trail markers on the ridge every spring.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'repaint', B:'repaints', C:'has repainted', D:'is repainting'},
        correct:'A',
        expCorrect:'Ask who does the repainting: the volunteers, all of them. “Who” points at “the volunteers”, which is plural, so the verb is plural. Read it backwards to hear it: “of the volunteers who repaint the markers, Ramirez is one.”',
        expWrong:{
          B:'“repaints” is singular. It treats “who” as standing for Ramirez alone, but “one of” puts him inside a larger group that does the work.',
          C:'“has repainted” is singular, and the present perfect reports finished work rather than the yearly routine “every spring” describes.',
          D:'“is repainting” is singular and progressive, so it puts the work in progress at this moment instead of once a year.'
        },
        tip:'In “one of the X who …”, the word “who” refers to X, not to the one. Flip the sentence around and the plural becomes obvious.'
      },
      {
        id:'FSB-11', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — verb agreement in “the only one of the … who …”',
        passage:"Okoye is the only one of the twelve archivists on staff who %BLANK% been trained to handle nitrate film.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'have', B:'are', C:'were', D:'has'},
        correct:'D',
        expCorrect:'The word “only” changes what “who” points at. Exactly one person on the staff has the training, so “who” stands for “the only one”, which is singular: “who has been trained”. Read it backwards: “of the twelve archivists, Okoye is the only one who has been trained.”',
        expWrong:{
          A:'“have” is the right choice for a plain “one of the X who …”, but “the only one” narrows the group to a single person.',
          B:'“are” is plural, and “are been trained” is not a possible verb form in the first place.',
          C:'“were” is plural and past, while the training is something Okoye still has.'
        },
        tip:'“One of the X who” → plural verb. “The ONLY one of the X who” → singular verb. A single word flips the rule, because only one member does the thing.'
      },

      /* ── Discurso indirecto, condicionales y subjuntivo (12-17) ────────── */
      {
        id:'FSB-12', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — verb tense in reported speech',
        passage:"When the inspector asked about the missing seals, the foreman said that the crew %BLANK% them in a locked bin the night before.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'has put', B:'puts', C:'had put', D:'will put'},
        correct:'C',
        expCorrect:'The reporting verb “said” is in the past, so the verb inside the report shifts one step further back. The crew put the seals away before the foreman spoke — “the night before” says so — and that earlier past is “had put”.',
        expWrong:{
          A:'“has put” is the present perfect, which ties the action to right now; the whole exchange is being reported from a past moment.',
          B:'“puts” is the simple present, which turns a single act into a habit.',
          D:'“will put” points forward, but “the night before” is already over by the time the foreman answers.'
        },
        tip:'When the reporting verb is past (said, told, explained), shift the reported verb back one step: present → past, past → had + participle, will → would.'
      },
      {
        id:'FSB-13', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — tense in reported speech: will becomes would',
        passage:"In a letter sent from the works in 1911, Bramwell wrote that the tunnel %BLANK% finished within two years, a prediction that the flooding of the following winter made impossible.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'will be', B:'would be', C:'is', D:'has been'},
        correct:'B',
        expCorrect:'“Wrote” is past, so a future seen from 1911 gets reported as “would be”, the past form of “will”. The prediction pointed forward from Bramwell’s moment, not from the reader’s.',
        expWrong:{
          A:'“will be” keeps the 1911 forecast as though it still lay ahead of us; the reporting verb has already moved the whole sentence into the past.',
          C:'“is” is the simple present, which states the tunnel’s condition today rather than what Bramwell expected.',
          D:'“has been” is the present perfect, which also anchors a hundred-year-old forecast to the present.'
        },
        tip:'Reported future: “will” becomes “would”. Keep the report anchored to the moment the speaker spoke, not to the moment you are reading.'
      },
      {
        id:'FSB-14', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — verb tense in the unreal past (third conditional)',
        passage:"If the sluice gate %BLANK% cleared of silt that October, the lower orchard would never have flooded.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'would have been', B:'was', C:'had been', D:'has been'},
        correct:'C',
        expCorrect:'The second half of the sentence is “would never have flooded”, which puts the whole thing in the unreal past — the opposite of what happened. That pattern takes the past perfect in the “if” half: “If the sluice gate had been cleared …”.',
        expWrong:{
          A:'“would have been” puts “would have” inside the “if” half. In this pattern “would have” appears only in the other half, and the sentence already has it there.',
          B:'“was” is the simple past, which reports something that really happened and leaves “would never have flooded” without a partner.',
          D:'“has been” is the present perfect, which reaches into the present, while the October in question is long over.'
        },
        tip:'The third conditional has a fixed shape: if + had + participle, then would have + participle. “Would have” never appears in the “if” half.'
      },
      {
        id:'FSB-15', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — verb tense after an inverted conditional opener',
        passage:"Had the surveyors checked the new benchmark against the brass plate set into the wall in 1884, they %BLANK% the six-centimeter error before the first foundations were poured.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'would have caught', B:'had already caught', C:'would catch', D:'caught'},
        correct:'A',
        expCorrect:'“Had the surveyors checked …” is an inverted way of writing “If the surveyors had checked …”, so the sentence is an unreal statement about the past. The other half of that pattern takes “would have” plus a past participle: “would have caught”.',
        expWrong:{
          B:'“had already caught” repeats the past perfect, which leaves the sentence with two “if” halves and no result.',
          C:'“would catch” is the unreal PRESENT form. It belongs with “If the surveyors checked”, not with “Had the surveyors checked”.',
          D:'“caught” is the plain past, which reports something that really happened — but the point of the sentence is that the error was missed.'
        },
        tip:'When a sentence opens with “Had …”, “Were …”, or “Should …” and no “if”, rewrite it with “if” before you choose. “Had + participle” in front means “would have + participle” behind.'
      },
      {
        id:'FSB-16', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — base-form verb after “recommend that”',
        passage:"The conservator recommended that the painted panel %BLANK% in an unheated room for a full winter before anyone tries to lift the varnish.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'remains', B:'remained', C:'remain', D:'will remain'},
        correct:'C',
        expCorrect:'After verbs such as recommend, insist, ask, and demand, the word “that” introduces a demand rather than a fact, and the verb drops to its base form: “that the painted panel remain”. It keeps that form whatever the subject is.',
        expWrong:{
          A:'“remains” is the ordinary third-person present, which would state a fact about the panel instead of what the conservator asked for.',
          B:'“remained” is the simple past, which reports something that already happened rather than something being recommended.',
          D:'“will remain” is a prediction, and a recommendation is not a forecast.'
        },
        tip:'recommend / insist / demand / require / ask / suggest + that → base form of the verb, for every subject. The negative is “that it not remain”, with no “does”.'
      },
      {
        id:'FSB-17', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — base-form verb “be” after “requires that”',
        passage:"The charter requires that every member of the water board %BLANK% present in the room before a vote on rates can be taken.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'is', B:'be', C:'are', D:'was'},
        correct:'B',
        expCorrect:'After “requires that”, the verb takes its base form, and the base form of “to be” is “be”. It stays “be” for every subject, singular or plural: “that every member be present”.',
        expWrong:{
          A:'“is” is the ordinary present, which would report that the members happen to be there rather than set the condition the charter imposes.',
          C:'“are” is plural as well as ordinary, and “every member” is singular in any case.',
          D:'“was” is past, so it describes one meeting instead of a standing rule.'
        },
        tip:'The bare “be” is the giveaway. If a sentence after “require / insist / recommend that” sounds wrong with “is”, try “be” — that form is the whole point of the pattern.'
      },

      /* ── Pronombres: colectivos, each/every, reflexivos (18-22) ────────── */
      {
        id:'FSB-18', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — pronoun agreement with a collective noun antecedent',
        passage:"The jury, which had deliberated for nine hours without a break, finally sent word that %BLANK% verdict was ready.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'their', B:'its', C:"it's", D:'theirs'},
        correct:'B',
        expCorrect:'The sentence has already treated “the jury” as a single body: “which HAD deliberated”, “sent word”. A pronoun pointing back at it has to keep that treatment, so the singular “its verdict” is what fits.',
        expWrong:{
          A:'“their” is plural. The twelve people are real, but the sentence names them as one jury and holds singular verbs throughout.',
          C:'“it’s” is the contraction of “it is”. Spelled out, the sentence would read “that it is verdict was ready”.',
          D:'“theirs” is plural and stands alone, with no noun after it; the blank sits in front of “verdict”.'
        },
        tip:'Decide once and hold it. If a group noun took a singular verb, every pronoun that points back at it is “it” or “its”, never “they” or “their”.'
      },
      {
        id:'FSB-19', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — pronoun agreement after “each of …”',
        passage:"Each of the fourteen lighthouses along that stretch of coast keeps %BLANK% own logbook, and no two of them are written up the same way.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'their', B:"it's", C:'his or her', D:'its'},
        correct:'D',
        expCorrect:'The subject is “Each”, not “lighthouses”: “each” counts the towers one at a time and is singular, which is why the verb is “keeps”. The pronoun has to match it: “its own logbook”.',
        expWrong:{
          A:'“their” is plural. It agrees with “lighthouses”, which sits inside the “of” phrase and is not the subject.',
          B:'“it’s” means “it is”, and “keeps it is own logbook” is not English.',
          C:'“his or her” is singular but points at a person, and a lighthouse is not a person.'
        },
        tip:'Each, every, either, neither, one, and anyone are singular no matter what plural noun follows “of”. The verb usually settles it first: “keeps” already did.'
      },
      {
        id:'FSB-20', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — pronoun number when “each” follows a plural subject',
        passage:"The three curators disagreed about the attribution, and at the next meeting they each brought %BLANK% own file of comparison photographs.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'his or her', B:'its', C:'their', D:'theirs'},
        correct:'C',
        expCorrect:'The subject is “they”, standing for “the three curators”, and the verb “brought” belongs to it. “Each” here only spreads the action over the members; it does not take over as the subject. So the pronoun stays plural: “their own file”.',
        expWrong:{
          A:'“his or her” treats “each” as the subject. When “each” comes AFTER the subject, the subject keeps its own number.',
          B:'“its” is singular and points at a thing, while the owners are three people.',
          D:'“theirs” is the form that stands alone (“the file is theirs”) and cannot sit in front of “own file”.'
        },
        tip:'“Each of the curators brought …” → singular. “The curators each brought …” → plural. Where “each” sits decides who is in charge of the verb and the pronoun.'
      },
      {
        id:'FSB-21', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — object pronoun after a preposition',
        passage:"The application for the kiln grant had to be signed by the studio director and %BLANK% before the county would release any of the money.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'I', B:'me', C:'myself', D:'mine'},
        correct:'B',
        expCorrect:'Both names after “by” are governed by that preposition, so both take the object form. Delete the other name and the ear settles it at once: “signed by me”, never “signed by I”.',
        expWrong:{
          A:'“I” is the subject form. It belongs in front of a verb (“I signed the form”), not after a preposition.',
          C:'“myself” is a reflexive, and a reflexive works only when the same person is already the subject. The subject here is the application.',
          D:'“mine” is a possessive standing alone; it names a thing, not the person doing the signing.'
        },
        tip:'To choose between “X and I” and “X and me”, delete “X and” and read what is left. And “myself” is never a more polite “me”.'
      },
      {
        id:'FSB-22', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — when a reflexive pronoun is the right choice',
        passage:"I checked the load calculations %BLANK% before signing off on the design, because the last set had come back with a decimal in the wrong place.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'myself', B:'my own', C:'me', D:'mine'},
        correct:'A',
        expCorrect:'Here the subject already IS “I”, and the point of the sentence is that nobody else did the checking. That is exactly what a reflexive adds: “I checked them myself.”',
        expWrong:{
          B:'“my own” is a possessive that has to sit in front of a noun (“my own calculations”), not after the object.',
          C:'“me” is an object form, and the verb already has its object: “the load calculations”.',
          D:'“mine” stands in place of a noun (“the calculations are mine”) and says nothing about who did the checking.'
        },
        tip:'A reflexive — myself, herself, themselves — is right only when the same person is already the subject. No “I” in the sentence, no “myself”.'
      },

      /* ── Propiedad: duenos en plural, conjunta y separada (23-25) ──────── */
      {
        id:'FSB-23', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — plural owner in front of an -ing subject',
        passage:"The house has had five caretakers since it was finished in 1902, and %BLANK% replacing the copper flashing every twelve years has kept the roof watertight ever since.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'the caretakers', B:'the caretakers’', C:'the caretaker’s', D:'the caretakers’s'},
        correct:'B',
        expCorrect:'What has kept the roof watertight is the replacing, not the people, so “replacing” is the subject of “has kept” and the people who do it stand in front of it in the ownership form. There have been five of them, and a plural that already ends in s takes the mark after the s: “the caretakers’ replacing … has kept”.',
        expWrong:{
          A:'“the caretakers” makes the people themselves the subject, and a plural subject cannot take “has kept”; it would have to be “have kept”.',
          C:'“the caretaker’s” names one owner, and the sentence has just counted five of them.',
          D:'“the caretakers’s” marks the same plural twice: either add ’s to a singular or an apostrophe alone to a plural ending in s.'
        },
        tip:'Check the main verb. A singular verb like “has kept” proves that the -ing word, not the people, is the subject — and then the people in front of it take the ownership form.'
      },
      {
        id:'FSB-24', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — two singular owners of one shared thing',
        passage:"%BLANK% joint reconstruction of the burned choir screen took the two of them six years, and the finished drawing was entered under both names.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'Hulme’s and Raczak’s', B:'Hulmes’ and Raczaks’', C:'Hulme and Raczak', D:'Hulme and Raczak’s'},
        correct:'D',
        expCorrect:'One drawing belongs to both people, so the pair counts as a single owner and only the second name carries the mark: “Hulme and Raczak’s joint reconstruction”. The words “joint”, “the two of them”, and “both names” all say there is one shared thing.',
        expWrong:{
          A:'“Hulme’s and Raczak’s” marks each name separately, which says there were two reconstructions, one apiece. The sentence describes a single drawing.',
          B:'“Hulmes’ and Raczaks’” turns two surnames into plurals, as if several people named Hulme and several named Raczak had each done the work.',
          C:'“Hulme and Raczak” marks no ownership at all, so the sentence never says whose reconstruction it was.'
        },
        tip:'One thing owned together → mark only the last name. Before deciding, hunt for the clue that says how many things are owned.'
      },
      {
        id:'FSB-25', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — two singular owners of two separate things',
        passage:"Set side by side, %BLANK% accounts of the night the relay station burned disagree about almost every detail, including which man raised the alarm.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'Marlowe and Achterberg’s', B:'Marlowe’s and Achterberg’s', C:'Marlowes and Achterbergs', D:'Marlowe’s and Achterberg'},
        correct:'B',
        expCorrect:'Two accounts that disagree with each other cannot be one account written together, so each man owns his own and both names carry the mark. The plural “accounts”, the verb “disagree”, and “side by side” all point the same way.',
        expWrong:{
          A:'“Marlowe and Achterberg’s” is the shared form, which would mean the two men wrote a single account together — and a single account cannot disagree with itself.',
          C:'“Marlowes and Achterbergs” makes the surnames plural and marks no ownership at all.',
          D:'“Marlowe’s and Achterberg” leaves the second name unmarked, so only the first man owns anything.'
        },
        tip:'Count the things owned, not the owners. Two reports that contradict each other are two things, and two owners each get the mark.'
      },

      /* ── Paralelismo correlativo y en "as ... as" (26-28) ──────────────── */
      {
        id:'FSB-26', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — parallel forms across “either … or …”',
        passage:"Under the new rules the council can either raise the tolls on the bridge or %BLANK% the ferry subsidy, but it cannot do both in the same budget year.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'cutting', B:'to cut', C:'it can cut', D:'cut'},
        correct:'D',
        expCorrect:'“Either … or …” joins two pieces that have to be built the same way. After “can”, the first piece is the bare verb “raise”, so the second has to be the bare verb “cut”.',
        expWrong:{
          A:'“cutting” is an -ing form, so the two sides of “or” no longer match.',
          B:'“to cut” adds “to”, and “can” is never followed by “to”.',
          C:'“it can cut” is a whole clause with its own subject and verb, while the other side of “or” is a single bare verb.'
        },
        tip:'With either/or, neither/nor, both/and, not only/but also: cover the middle and compare the two sides. Whatever follows the first word of the pair sets the shape for the second.'
      },
      {
        id:'FSB-27', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — parallel forms across an “as … as” comparison',
        passage:"Learning to read the clerk’s shorthand turned out to be as slow as %BLANK% the ledgers themselves, and the project ran two years over.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'to transcribe', B:'the transcription of', C:'transcribing', D:'transcribe'},
        correct:'C',
        expCorrect:'“As … as …” sets two things side by side, and they have to be the same kind of thing. The first is the -ing phrase “Learning to read the clerk’s shorthand”, so the second has to be an -ing phrase too: “transcribing the ledgers themselves”.',
        expWrong:{
          A:'“to transcribe” is an infinitive, which does not match the -ing form on the other side of the comparison.',
          B:'“the transcription of” is a noun phrase with an article, so the sentence would measure an activity against a thing.',
          D:'“transcribe” is a bare verb with no subject; it cannot be set against an activity.'
        },
        tip:'Both halves of an “as … as” comparison must take the same grammatical shape. Cover the middle of the sentence and read the two halves back to back.'
      },
      {
        id:'FSB-28', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — parallel forms plus the base-form verb after “asks that”',
        passage:"The apprenticeship asks not only that the student keep a daily sketchbook but also that she %BLANK% one finished panel at the end of every term.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'submits', B:'submitting', C:'to submit', D:'submit'},
        correct:'D',
        expCorrect:'Two rules point at the same blank. “Asks that” calls for the base form of the verb, and “not only … but also …” means the second half has to be built exactly like the first, which is “that the student keep”. Both give the bare “submit”.',
        expWrong:{
          A:'“submits” is the ordinary third-person present. It neither matches “keep” nor survives the demand pattern after “asks that”.',
          B:'“submitting” is an -ing form, so the second half of the pair stops matching the first.',
          C:'“to submit” adds “to” right after “that”, which the pattern does not allow.'
        },
        tip:'When two rules land on one blank, they normally agree. Here the demand pattern and the correlative pair both call for the plain, unmarked form of the verb.'
      },

      /* ── Modificadores limitantes: only, nearly, just (29-31) ──────────── */
      {
        id:'FSB-29', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — where the modifier “only” belongs',
        passage:"Three of the four bells in the tower were recast in 1902; the tenor was left exactly as it had hung since 1631. %BLANK%",
        stem:'Which choice completes the text so that “only” limits the part of the sentence the passage is actually about?',
        choices:{
          A:'Only three bells were recast that year.',
          B:'Three bells were only recast that year.',
          C:'Three only bells were recast that year.',
          D:'Three bells were recast only that year.'
        },
        correct:'A',
        expCorrect:'“Only” limits whatever comes right after it. The passage is about how many bells were recast — three of the four — so “only” belongs in front of “three”: “Only three bells were recast that year.”',
        expWrong:{
          B:'Putting “only” in front of the verb limits the action: it says the bells were recast and nothing else was done to them. The passage never compares one treatment with another.',
          C:'English does not allow “only” between a number and its noun; “Three only bells” is not a possible phrase.',
          D:'In front of “that year”, “only” limits the time, claiming 1902 was the one year in which any recasting happened. The passage counts bells, not years.'
        },
        tip:'Put “only” directly in front of the words it limits. Sliding it one slot changes what the sentence claims, and the reader has no way to guess what you meant.'
      },
      {
        id:'FSB-30', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — where the modifier “nearly” belongs',
        passage:"The portfolio holds sixty prints. Fifty-seven of them carry the engraver’s signature in the lower margin. %BLANK%",
        stem:'Which choice completes the text so that “nearly” limits the part of the sentence the passage is actually about?',
        choices:{
          A:'All of the prints carry nearly a signature.',
          B:'All of the prints nearly carry a signature.',
          C:'Nearly all of the prints carry a signature.',
          D:'All of the nearly sixty prints carry a signature.'
        },
        correct:'C',
        expCorrect:'“Nearly” limits whatever follows it, and the word that is only nearly true here is “all”: fifty-seven out of sixty is almost all of them, but not all. So “nearly” goes in front of “all”.',
        expWrong:{
          A:'Attached to “a signature”, “nearly” says each print carries something that falls short of being a signature. The passage says fifty-seven carry a real one.',
          B:'Attached to the verb, “nearly carry” says every print comes close to carrying a signature, which means none of them actually does.',
          D:'Attached to “sixty”, “nearly” only makes the count approximate, and the sentence still claims that every print is signed. Three of them are not.'
        },
        tip:'Nearly, almost, only, and just all limit the words immediately to their right. Before placing one, decide which single word in the sentence is the one that is not quite true.'
      },
      {
        id:'FSB-31', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — where the modifier “just” belongs',
        passage:"Eleven tower clocks stood in the hall. The workshop that took the job got two of them running again; the other nine were past saving. The work was finished in 1998, and nothing has been done to the clocks since. %BLANK%",
        stem:'Which choice completes the text so that “just” limits the part of the sentence the passage is actually about?',
        choices:{
          A:'The workshop repaired just two of the clocks in the hall.',
          B:'The workshop just repaired two of the clocks in the hall.',
          C:'Just the workshop repaired two of the clocks in the hall.',
          D:'The workshop repaired two of the clocks just in the hall.'
        },
        correct:'A',
        expCorrect:'In front of a quantity, “just” means “no more than”, and the point of the passage is how few clocks were saved: two out of eleven. So “just” belongs in front of “two”.',
        expWrong:{
          B:'Next to the verb, “just” is read as “a moment ago”. The passage dates the work to 1998 and says nothing has been done since.',
          C:'In front of the subject, “just” means “the workshop and nobody else”. The passage never raises the question of who else might have worked on the clocks.',
          D:'In front of “in the hall”, “just” limits the place, claiming the shop repaired clocks there and nowhere else. The passage counts clocks, not rooms.'
        },
        tip:'The same limiting word can mean “only” or “a moment ago”, and its position is what decides. Put it next to the number when the number is the point.'
      },

      /* ── Comparaciones incompletas o ilogicas (32-34) ──────────────────── */
      {
        id:'FSB-32', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — “than any other”: keeping the subject out of its own comparison',
        passage:"Built in 1847 and never converted to steam, the Kepler press at the museum still prints more sheets an hour %BLANK% in the collection.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'than any press', B:'as any other press', C:'than any other presses', D:'than any other press'},
        correct:'D',
        expCorrect:'The Kepler press is itself one of the presses in the collection, so it has to be measured against the OTHERS. “Other” takes it out of the group it is being compared with, and “any other” is followed by a singular noun.',
        expWrong:{
          A:'“than any press” leaves the Kepler press inside the group, so the sentence ends up saying it prints more sheets than itself.',
          B:'“as any other press” pairs “as” with “more”. A comparative built with “more” is finished with “than”.',
          C:'“than any other presses” puts a plural noun after “any other”, which counts the group one member at a time and needs the singular.'
        },
        tip:'When a thing belongs to the group it is measured against, add “other”: “older than any other bridge in the county”. Without it, the sentence compares the thing with itself.'
      },
      {
        id:'FSB-33', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — matching the subject to the noun named in an “unlike” opener',
        passage:"Unlike the wooden gears in the older mill, which had to be recut every few winters, %BLANK% almost never need to be replaced.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{
          A:'the newer mill',
          B:'cast iron, used in the newer mill,',
          C:'the cast-iron gears in the newer mill',
          D:'the newer mill and its cast-iron gears'
        },
        correct:'C',
        expCorrect:'A comparison has to set one thing against another of the same kind. The opening phrase names gears, so the subject that follows has to name gears as well: “the cast-iron gears in the newer mill”. Being plural, it also agrees with “need”.',
        expWrong:{
          A:'“the newer mill” measures a whole mill against a set of gears, and as a singular subject it would need “needs”, not “need”.',
          B:'“cast iron” is a material, not a set of gears, and it is singular as well, so it clashes with “need” too.',
          D:'Naming the mill alongside its gears drags the wrong kind of thing back into the comparison; half of the subject is still a building.'
        },
        tip:'After “unlike”, “like”, or “compared with”, look at the noun on each side. Gears go with gears and a roof with a roof; if the two sides name different kinds of thing, the sentence is comparing apples with orchards.'
      },
      {
        id:'FSB-34', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — parallel frames in a doubled comparison',
        passage:"The replacement bearings turned out to be %BLANK% the originals, and they cost a third as much.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{
          A:'as durable as, if not more durable than,',
          B:'as durable, if not more durable than,',
          C:'as durable or more durable than',
          D:'more durable than, if not as durable as,'
        },
        correct:'A',
        expCorrect:'Two comparisons are packed into one sentence, and each needs its own complete frame: “as durable as …” and “more durable than …”. Written out in full it is “as durable as the originals, if not more durable than the originals”, and both frames survive the shortcut.',
        expWrong:{
          B:'Dropping the second “as” leaves “as durable the originals”, which is not a finished comparison.',
          C:'The same “as” goes missing, and the single “than” at the end cannot serve both halves: “as durable … than the originals”.',
          D:'The two claims are reversed, so the sentence first says the bearings beat the originals and then retreats to saying they merely match them. “If not” is supposed to move from the weaker claim to the stronger one.'
        },
        tip:'Test a doubled comparison by reading each half on its own with the noun put back. “As durable as the originals” and “more durable than the originals” both have to come out whole.'
      }

    ]
  });
})();
