/* SAT Studio question set — Reading & Writing: Form, Structure, and Sense — Form A (FSS-01 a FSS-34) */
/* La gramatica que NO es puntuacion: concordancia, tiempo verbal, pronombres,
   posesivos, modificadores, paralelismo, comparativos y palabras confundibles.
   34 MC · 10 Facil · 14 Media · 10 Dificil (4 de las dificiles con extreme:true). */
(function(){
  window.SAT_SETS.push({
    id: 'rw-form-a',
    title: 'Form, Structure, and Sense — Form A',
    section: 'rw',
    level: 'Media',
    description: 'Subject-verb agreement, verb tense, pronouns, possessives, modifiers, parallel structure, comparatives, and commonly confused words.',
    minutes: 28,
    questions: [

      /* ── Concordancia sujeto-verbo (01-09) ───────────────────────────── */
      {
        id:'FSS-01', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — subject-verb agreement across a prepositional phrase',
        passage:"A crate of brass doorknobs salvaged from the old Ashworth Hotel %BLANK% still sitting, unopened, in the back room of the salvage yard.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'is', B:'are', C:'were', D:'have been'},
        correct:'A',
        expCorrect:'The subject is “A crate” (singular). Everything between the subject and the blank — “of brass doorknobs salvaged from the old Ashworth Hotel” — only describes the crate and cannot change its number. A singular subject takes the singular verb “is”.',
        expWrong:{
          B:'“are” is plural. It agrees with “doorknobs”, the nearest noun, but that noun sits inside a prepositional phrase and is never the subject.',
          C:'“were” is plural and past. The subject is singular, and the rest of the sentence (“still sitting”) describes the present.',
          D:'“have been” is plural. The singular “crate” would need “has been”, not “have been”.'
        },
        tip:'Cross out everything between the subject and the verb. Whatever is left — here “A crate ___ still sitting” — is the pair that has to agree.'
      },
      {
        id:'FSS-02', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — plural subject separated from its verb by a relative clause',
        passage:"The field notebooks that Dr. Halloran filled during her long season at the bat roost %BLANK% now catalogued and shelved in the university archive.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'is', B:'was', C:'are', D:'has been'},
        correct:'C',
        expCorrect:'The subject is “The field notebooks” (plural). The relative clause “that Dr. Halloran filled during her long season at the bat roost” comes between the subject and the verb and carries its own subject and verb (“Halloran filled”). The main verb still belongs to “notebooks”, so it is plural: “are”.',
        expWrong:{
          A:'“is” is singular. It agrees with “roost”, the noun closest to the blank, but “roost” sits inside a prepositional phrase inside a relative clause.',
          B:'“was” is singular, and the sentence describes the present state of the archive (“now catalogued”).',
          D:'“has been” is singular. The plural subject “notebooks” would need “have been”.'
        },
        tip:'A relative clause (“that … filled …”) already has its own subject and verb. Skip the whole clause and match the main verb to the noun in front of “that”.'
      },
      {
        id:'FSS-03', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — subject-verb agreement across a chain of clauses',
        passage:"The set of emergency protocols that the port authority drafted after two container ships, each of them carrying more than a thousand tons of cargo, ran aground in the same week %BLANK% formally adopted by the harbor board.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'have never been', B:'were never', C:'are never', D:'has never been'},
        correct:'D',
        expCorrect:'The subject is “The set” (singular). Three separate things stand between it and the main verb: a prepositional phrase (“of emergency protocols”), a relative clause with its own subject and verb (“that the port authority drafted”), and a subordinate clause with its own subject and verb (“two container ships … ran aground”). None of them is the subject. “The set … has never been formally adopted.”',
        expWrong:{
          A:'“have never been” is plural. It agrees with “protocols”, which is the object of “of”, not the subject of the sentence.',
          B:'“were never” is plural and agrees with “ships”, the subject of the subordinate clause “after two container ships … ran aground”, not of the main sentence.',
          C:'“are never” is plural and present. Besides the number error, the present tense turns a one-time failure to act into a general habit.'
        },
        tip:'When the subject is buried, find the main verb first and ask “who or what does this verb belong to?” Any noun inside an “of” phrase, a “that” clause, or an “after” clause is disqualified.'
      },
      {
        id:'FSS-04', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — compound subject joined by “and”',
        passage:"The stone bread oven behind the mill and the cast-iron bell in the chapel tower %BLANK% restored by the same crew of masons last autumn.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'was', B:'were', C:'has been', D:'is'},
        correct:'B',
        expCorrect:'Two separate things are joined by “and”: the oven and the bell. A compound subject joined by “and” names more than one thing, so the verb is plural: “were restored”.',
        expWrong:{
          A:'“was” is singular. It matches only the second half of the subject (“the bell”), but “and” has already made the subject plural.',
          C:'“has been” is singular, so it too counts only one of the two things being restored.',
          D:'“is” is singular and present, while the restoration is finished and dated (“last autumn”).'
        },
        tip:'Count the nouns that “and” actually joins. Two or more real things → plural verb, no matter how singular each one is on its own.'
      },
      {
        id:'FSS-05', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — “every … and every …” takes a singular verb',
        passage:"Every ledger and every loose receipt that the auditors pulled from the co-op filing cabinet %BLANK% photographed before being returned to the shelf.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'were', B:'are', C:'was', D:'have been'},
        correct:'C',
        expCorrect:'When “every” (or “each”) introduces each part of a compound subject, the parts are counted one at a time, so the whole subject is singular: “Every ledger and every loose receipt … was photographed.”',
        expWrong:{
          A:'“were” applies the usual rule that “and” makes a subject plural, but “every … and every …” overrides it and keeps the subject singular.',
          B:'“are” is plural and present, while “pulled” and “returned” place the sentence in the past.',
          D:'“have been” is plural; the singular subject would need “has been”.'
        },
        tip:'“And” usually makes a subject plural — except when “each” or “every” sits in front of the parts. Then the verb goes singular.'
      },
      {
        id:'FSS-06', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — collective noun treated as a single unit',
        passage:"The string quartet %BLANK% for ninety minutes every morning in a rented room above the hardware store.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'rehearses', B:'rehearse', C:'have rehearsed', D:'are rehearsing'},
        correct:'A',
        expCorrect:'“The string quartet” is a collective noun: four players, one group. Treated as one unit it takes a singular verb, and “every morning” calls for the simple present, which describes a routine: “rehearses”.',
        expWrong:{
          B:'“rehearse” is the plural form. It agrees with the four musicians rather than with the single group named in the sentence.',
          C:'“have rehearsed” is plural, and the present perfect reports a stretch of past practice instead of the daily routine “every morning” describes.',
          D:'“are rehearsing” is plural, and the progressive describes something happening right now rather than a habit.'
        },
        tip:'A group noun acting as one body (quartet, board, staff, team) takes a singular verb. And a habit marked by “every day / every morning” takes the simple present, not the progressive.'
      },
      {
        id:'FSS-07', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — “neither … nor …” agrees with the nearer subject',
        passage:"Neither the head brewer nor her two apprentices %BLANK% able to explain why the batch had soured overnight.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'was', B:'is', C:'has been', D:'were'},
        correct:'D',
        expCorrect:'With “neither … nor …”, the verb agrees with whichever subject is nearer to it. The nearer one here is “her two apprentices” (plural), so the verb is plural: “were able”.',
        expWrong:{
          A:'“was” is singular. It agrees with “the head brewer”, the subject farther from the verb; the rule looks at the nearer one.',
          B:'“is” is singular and present, while “had soured” places the sentence in the past.',
          C:'“has been” is singular; the nearer subject, “apprentices”, is plural.'
        },
        tip:'In “neither X nor Y”, cover X completely and match the verb to Y alone. The same trick works for “either … or …”.'
      },
      {
        id:'FSS-08', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — “neither … nor …” with the singular subject second',
        passage:"Neither the flood barriers raised along the quay nor the pumping station at the mouth of the two drainage channels %BLANK% designed to hold back a surge of that size.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'were', B:'have been', C:'was', D:'are'},
        correct:'C',
        expCorrect:'The verb agrees with the subject nearer to it, and the subject after “nor” is “the pumping station” (singular). “Channels” is plural, but it belongs to the prepositional phrase “at the mouth of the two drainage channels”, not to the subject. So: “was designed”.',
        expWrong:{
          A:'“were” agrees with “the flood barriers”, the plural subject before “nor”. The rule points to the nearer subject, which is singular.',
          B:'“have been” is plural, pulled in by “channels”, the plural noun sitting right before the blank — but that noun is inside an “of” phrase and cannot be a subject.',
          D:'“are” is plural and present, while the sentence looks back at how the structures were built.'
        },
        tip:'Two traps stack here: the plural subject comes first, and a plural noun sits right before the verb. Find the subject after “nor”, strip its prepositional phrases, and match that.'
      },
      {
        id:'FSS-09', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — inverted sentence with the subject after the verb',
        passage:"Wedged beneath the floorboards of the old telegraph office %BLANK% a bundle of undelivered messages that no one had thought to look for.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'were', B:'was', C:'have been', D:'are'},
        correct:'B',
        expCorrect:'The sentence is inverted: it opens with a modifier, so the subject comes after the verb. Put it back in normal order — “a bundle of undelivered messages was wedged beneath the floorboards” — and the subject is “a bundle” (singular), which takes “was”.',
        expWrong:{
          A:'“were” is plural. It agrees with “messages” or “floorboards”, both of which sit inside prepositional phrases.',
          C:'“have been” is plural; the singular “a bundle” would need “has been”.',
          D:'“are” is plural and present, while “had thought” places the sentence firmly in the past.'
        },
        tip:'When a sentence opens with a place or a modifier instead of a noun, look for the subject AFTER the verb, then rewrite it mentally in normal order before deciding.'
      },

      /* ── Tiempo verbal y consistencia (10-13) ────────────────────────── */
      {
        id:'FSS-10', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — keeping one tense across a series of past actions',
        passage:"Last winter the dairy cheese cave lost power for three days. The cheesemakers wrapped every wheel in wool blankets, propped the door shut with a crate, and %BLANK% the temperature by hand every two hours until the electricity returned.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'check', B:'are checking', C:'will check', D:'checked'},
        correct:'D',
        expCorrect:'Every other verb in the passage is in the simple past: “lost”, “wrapped”, “propped”, “returned”. The last item in the series has to stay in that same tense: “checked”.',
        expWrong:{
          A:'“check” is the present. It breaks a paragraph that is entirely about “last winter”.',
          B:'“are checking” is the present progressive, which puts the action in progress right now, three seasons after the outage.',
          C:'“will check” is the future, but the blackout and everything the crew did about it are already over.'
        },
        tip:'When verbs sit in a series joined by “and”, read the first one and copy its tense. If the paragraph is dated (“last winter”), the tense is settled before you reach the blank.'
      },
      {
        id:'FSS-11', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — present perfect for an action that began in the past and continues',
        passage:"The tide mill on Skeff Creek ground grain for two centuries and then stood idle after 1954. Since a volunteer group rebuilt its wooden gearing in 2019, the mill %BLANK% flour for the village bakery every Saturday.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'has produced', B:'produced', C:'had produced', D:'was producing'},
        correct:'A',
        expCorrect:'“Since 2019” marks a stretch of time that starts in the past and reaches the present — the mill still runs “every Saturday”. English uses the present perfect for that: “has produced”. The subject “the mill” is singular, so “has”, not “have”.',
        expWrong:{
          B:'“produced” is the simple past, which shuts the action off in the past and contradicts the ongoing “every Saturday”.',
          C:'“had produced” is the past perfect, which marks an action finished BEFORE some other past event. No later past event appears in the sentence.',
          D:'“was producing” is the past progressive: something that was under way in the past and then stopped, which is the opposite of what “Since 2019” sets up.'
        },
        tip:'“Since” plus a past date almost always calls for the present perfect (has/have + past participle). The action is still alive at the moment of writing.'
      },
      {
        id:'FSS-12', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — past perfect for the earlier of two past events',
        passage:"By the time the conservators opened the crate in 2018, the humidity inside %BLANK% the glue on every one of the bottles.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'loosened', B:'has loosened', C:'had loosened', D:'loosens'},
        correct:'C',
        expCorrect:'Two past events are in play: the crate was opened (2018) and the glue came loose. The glue gave way FIRST, so it takes the past perfect: “had loosened”. “By the time” is the signal that one past action finished before another.',
        expWrong:{
          A:'“loosened” is the simple past, which puts both events on the same plane and erases the order that “By the time” exists to establish.',
          B:'“has loosened” is the present perfect, which ties the action to the present; the whole sentence is anchored in 2018.',
          D:'“loosens” is the simple present, which describes a general habit rather than something that happened inside a sealed crate before 2018.'
        },
        tip:'Two past events, one clearly earlier: the earlier one takes “had” + past participle. Phrases like “by the time”, “before”, and “by 1990” are the tip-off.'
      },
      {
        id:'FSS-13', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — holding the present tense across a paragraph',
        passage:"Mapping a cave system is slow work. A surveyor sets a station, reads the compass and the inclinometer, calls the numbers back to a partner, and then %BLANK% the whole process forty meters farther in. Only later, aboveground, does the sketch become a map.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'repeated', B:'repeats', C:'had repeated', D:'was repeating'},
        correct:'B',
        expCorrect:'The paragraph describes a general routine, and every verb around the blank is in the simple present: “is”, “sets”, “reads”, “calls”, “does … become”. The fourth verb in the series has to match them, and it also has to be singular to agree with “A surveyor”: “repeats”.',
        expWrong:{
          A:'“repeated” is the simple past. “Only later” suggests a sequence, but a sequence inside a routine is still described in the present.',
          C:'“had repeated” is the past perfect, which needs a later past event to sit before. The paragraph contains no past event at all.',
          D:'“was repeating” is the past progressive, which narrates one particular occasion instead of the standing procedure the paragraph describes.'
        },
        tip:'Before choosing a tense, scan the verbs on either side of the blank. A paragraph written about how something is generally done stays in the present, even where words like “then” or “only later” imply an order.'
      },

      /* ── Pronombres (14-20) ──────────────────────────────────────────── */
      {
        id:'FSS-14', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — its vs. it’s',
        passage:"The carillon in the market tower is known for %BLANK% forty-eight bronze bells, the smallest of which is no bigger than a teacup.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:"it's", B:'their', C:"its'", D:'its'},
        correct:'D',
        expCorrect:'The blank is a possessive sitting in front of the noun “bells”: the bells belong to the carillon. The possessive form is “its”, spelled with no apostrophe at all.',
        expWrong:{
          A:'“it’s” is the contraction of “it is”. Spell it out and the sentence reads “known for it is forty-eight bronze bells”, which is not English.',
          B:'“their” is plural, but the owner is “The carillon”, a single instrument.',
          C:'“its’” is not a word. “Its” is already possessive and never takes an apostrophe, before the s or after it.'
        },
        tip:'Read the sentence with “it is” in place of the word. If it collapses, you want “its” — the possessive pronoun that never carries an apostrophe.'
      },
      {
        id:'FSS-15', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — there vs. their vs. they’re',
        passage:"%BLANK% are three ways to date a lichen patch, and the field team argued about which one to use for most of the morning.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'Their', B:'There', C:"They're", D:'Theirs'},
        correct:'B',
        expCorrect:'The sentence opens with the “there is / there are” pattern, which announces that something exists. What follows the verb is “three ways” (plural), so “There are” is the right opening.',
        expWrong:{
          A:'“Their” is a possessive and has to sit in front of a noun that belongs to someone (“their notes”). Nothing in this sentence belongs to anyone.',
          C:'“They’re” means “they are”. That would claim the people themselves are three ways of dating a lichen patch.',
          D:'“Theirs” is a possessive pronoun that stands alone, with no noun after it; it cannot open a sentence built on “___ are three ways”.'
        },
        tip:'“There” = existence or a place; “their” = belongs to them, always before a noun; “they’re” = they are. Substitute “they are” out loud to rule the last one out.'
      },
      {
        id:'FSS-16', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — pronoun-antecedent number agreement with a collective noun',
        passage:"A ferry crew that has worked the same channel for years learns the sandbars by feel, and %BLANK% can often tell from the sound of the hull alone when the water is shoaling.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'it', B:'they', C:'one', D:'its'},
        correct:'A',
        expCorrect:'The antecedent is “A ferry crew”, and the sentence has already decided to treat it as one unit: “has worked”, “learns”. A pronoun pointing back at it has to keep that number, so the singular “it” is what fits.',
        expWrong:{
          B:'“they” is plural. The sentence committed to the singular with “has worked” and “learns”, so switching to a plural pronoun halfway through contradicts it.',
          C:'“one” is an indefinite pronoun meaning people in general; it does not point back to this particular crew.',
          D:'“its” is possessive and must be followed by a noun it owns (“its captain”). The blank is the subject of “can tell”.'
        },
        tip:'Let the earlier verbs decide. If a collective noun took a singular verb (“the team has”), every pronoun that refers to it stays singular too — pick one treatment and hold it.'
      },
      {
        id:'FSS-17', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — who vs. whom as the object of a preposition',
        passage:"The luthier kept a short list of players to %BLANK% she would sell an instrument, and a much longer list of those she would not.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'who', B:'whomever', C:'whom', D:'which'},
        correct:'C',
        expCorrect:'The pronoun is the object of the preposition “to”: she would sell an instrument TO those players. The object form for people is “whom”.',
        expWrong:{
          A:'“who” is the subject form. The selling is done by the luthier, who is already named as the subject, so the pronoun is not performing the verb.',
          B:'“whomever” means “anyone whom” and introduces an open-ended group. The pronoun here points back to the specific players already named in the list.',
          D:'“which” refers to things or animals, never to people such as “players”.'
        },
        tip:'Rebuild the clause with “he/him”. “She would sell an instrument to HIM” → him means whom. A preposition sitting right before the blank is nearly always a sign of “whom”.'
      },
      {
        id:'FSS-18', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — who vs. whom when a phrase is inserted into the clause',
        passage:"The fellowship went to the one candidate %BLANK% the selection panel, after four rounds of interviews, had quietly ranked last in the first round.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'who', B:'whose', C:'which', D:'whom'},
        correct:'D',
        expCorrect:'Strip out the inserted phrase “after four rounds of interviews” and the clause reads “the selection panel had quietly ranked ___ last”. The panel does the ranking; the pronoun receives it, which makes it an object: “whom”.',
        expWrong:{
          A:'“who” is the subject form, but the verb “had ranked” already has a subject — “the selection panel”. A clause does not get two subjects.',
          B:'“whose” is possessive and has to be followed by something the candidate owns (“whose file”). Here the next words are the panel and its verb.',
          C:'“which” refers to things, not to a candidate.'
        },
        tip:'Find the verb inside the relative clause and check whether it already has a subject. If it does, the relative pronoun must be an object → “whom”. Swapping in “him/her” confirms it.'
      },
      {
        id:'FSS-19', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — a pronoun with two possible antecedents',
        passage:"Nadia brought the finished marionette to the workshop, where Delia was already at the bench, and %BLANK% noticed the hinged jaw right away.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'she', B:'Delia', C:'one', D:'her'},
        correct:'B',
        expCorrect:'The blank is the subject of “noticed”, and the sentence has already named two people. Naming the one who noticed is the only version a reader can follow without guessing.',
        expWrong:{
          A:'“she” has two possible antecedents in the same sentence, Nadia and Delia, so the reader cannot tell which of them noticed the jaw. A pronoun has to point to exactly one noun.',
          C:'“one” is an indefinite pronoun standing for people in general; it points to neither of the two people the sentence has just introduced.',
          D:'“her” is the object form. The blank is the subject of “noticed”, and an object form cannot fill a subject slot.'
        },
        tip:'When two people (or two things) of the same kind appear before the blank, any pronoun becomes a guess. The test rewards naming the noun outright.'
      },
      {
        id:'FSS-20', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — ambiguous plural pronoun after a two-clause opener',
        passage:"After the archivist transferred the reel-to-reel tapes to digital files and then stored the originals in a climate-controlled vault, %BLANK% were checked for dropouts one final time.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'they', B:'each', C:'the new files', D:'them'},
        correct:'C',
        expCorrect:'The opening clause puts two plural things on the table — the tapes and the digital files — and either could be what was checked. Naming the one that was actually checked, “the new files”, is what makes the sentence readable.',
        expWrong:{
          A:'“they” is grammatically plural and sounds natural before “were checked”, but it has two plural antecedents to choose from; the reader cannot tell whether the tapes or the files were inspected.',
          B:'“each” is singular and would need “was checked”, not “were checked”. It also never says each WHAT.',
          D:'“them” is the object form of the pronoun; the blank is the subject of “were checked”.'
        },
        tip:'A pronoun that agrees in number can still be wrong. Count the candidate antecedents first: two or more of the same number means the pronoun is ambiguous and the noun has to be written out.'
      },

      /* ── Posesivos (21-23) ───────────────────────────────────────────── */
      {
        id:'FSS-21', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — singular possessive',
        passage:"The station had a single keeper in those years, and the %BLANK% logbook records the exact minute the fog rolled in on each of those December nights.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:"keeper's", B:'keepers', C:"keepers'", D:"keepers's"},
        correct:'A',
        expCorrect:'The text says there was “a single keeper”, and the logbook belongs to him. A singular noun becomes possessive by adding apostrophe + s: “keeper’s logbook”.',
        expWrong:{
          B:'“keepers” is a plain plural. It shows no ownership at all, and it also contradicts “a single keeper”.',
          C:'“keepers’” is the plural possessive, which would mean several keepers shared one logbook; the text allows only one keeper.',
          D:'“keepers’s” marks the noun twice: either add ’s to the singular or add an apostrophe after a plural s, never both.'
        },
        tip:'Settle the number before you place the apostrophe. One owner → owner’s. More than one → owners’. The apostrophe goes after whatever the plain form of the noun is.'
      },
      {
        id:'FSS-22', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — plural possessive of a noun ending in -ies',
        passage:"Forty families share the hillside terraces, and after the roof beams split in a cold snap they voted to rebuild the %BLANK% packing shed before the next harvest.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:"family's", B:'families', C:"families's", D:"families'"},
        correct:'D',
        expCorrect:'The shed belongs to forty families, so the owner is plural. The plural of “family” is “families”, and because that plural already ends in s, the possessive is formed with an apostrophe alone: “families’ packing shed”.',
        expWrong:{
          A:'“family’s” is the singular possessive — one family. The sentence names forty of them.',
          B:'“families” is the bare plural with no apostrophe, so it marks no ownership; “the families packing shed” is two nouns jammed together.',
          C:'“families’s” adds ’s to a plural that already ends in s. The apostrophe by itself does the whole job.'
        },
        tip:'Build the plural first, then add the apostrophe: family → families → families’. Never respell the noun to make it possessive.'
      },
      {
        id:'FSS-23', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — the determiner decides whether the possessive is singular or plural',
        passage:"The fire-insurance atlases are colored by building material, so a single page shows at a glance how much of each %BLANK% frontage was brick and how much was wood.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'blocks', B:"blocks'", C:"block's", D:"blocks's"},
        correct:'C',
        expCorrect:'The only clue to the number is the little word in front of the blank. “Each” counts the blocks one at a time, so the owner is singular, and a singular noun takes apostrophe + s: “each block’s frontage”. The singular verb “was” confirms it.',
        expWrong:{
          A:'“blocks” is the plural with no possessive marking, and it clashes with “each”, which can only be followed by a singular noun.',
          B:'“blocks’” is the plural possessive. It would put several blocks in front of “each”, which counts items individually.',
          D:'“blocks’s” marks the plural and then marks it again; and the number was wrong to begin with.'
        },
        tip:'Look at the word directly before the blank. “A”, “each”, “every”, and “one” force a singular possessive; “several”, “many”, “both”, and “the two” force a plural one.'
      },

      /* ── Modificadores (24-26) ───────────────────────────────────────── */
      {
        id:'FSS-24', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — the noun after an introductory modifier',
        passage:"Stitched from forty scraps of indigo cloth and backed with flour sacking, %BLANK%",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{
          A:'the quilt hung in the stairwell of the farmhouse for nearly sixty years.',
          B:'the family hung the quilt in the stairwell of the farmhouse for years.',
          C:'it hung in the stairwell of the farmhouse for nearly sixty years.',
          D:'nearly sixty years passed with the quilt hanging in the stairwell.'
        },
        correct:'A',
        expCorrect:'The opening phrase describes whatever was stitched from cloth and backed with sacking — the quilt. An introductory modifier attaches to the first noun after the comma, so “the quilt” has to be the subject.',
        expWrong:{
          B:'The first noun after the comma is “the family”, which makes the sentence say the family was stitched from forty scraps of indigo cloth.',
          C:'“it” names nothing; the quilt is never mentioned as a noun, so the opening phrase has no antecedent to describe.',
          D:'The subject becomes “nearly sixty years”, so the sentence claims a stretch of time was stitched together and backed with sacking.'
        },
        tip:'Read the opening phrase, then look at the very first noun after the comma. Ask: is that the thing the phrase describes? If not, the modifier is misattached.'
      },
      {
        id:'FSS-25', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — dangling participial phrase',
        passage:"Having tracked the same pod of pilot whales for eleven summers, %BLANK%",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{
          A:'the dorsal fin of each animal was as familiar to Okonkwo as a signature.',
          B:'Okonkwo could name each animal from the notch pattern on its dorsal fin.',
          C:'it was easy for Okonkwo to name each animal by its notched dorsal fin.',
          D:'each notched dorsal fin had become as familiar to her as a signature.'
        },
        correct:'B',
        expCorrect:'“Having tracked …” describes whoever did the tracking, and only a person can spend eleven summers following a pod. Putting “Okonkwo” directly after the comma attaches the phrase to the right noun.',
        expWrong:{
          A:'The subject is “the dorsal fin of each animal”, so the sentence says a fin spent eleven summers tracking the whales.',
          C:'The subject is the placeholder “it”, which names nothing; Okonkwo is buried inside a prepositional phrase and can no longer be the one who tracked the pod.',
          D:'The subject is “each notched dorsal fin”, which again makes a fin, rather than the researcher, the one doing the tracking.'
        },
        tip:'An introductory -ing or -ed phrase always modifies the subject of the main clause. If the doer of that phrase is a person, a person has to follow the comma.'
      },
      {
        id:'FSS-26', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — dangling modifier disguised by the passive voice',
        passage:"Left for decades in an unheated attic above a print shop on Dover Street, %BLANK%",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{
          A:'a volunteer found that the glass plates had fused to one another at the edges.',
          B:'fusing along their edges, the glass plates were what the volunteer found.',
          C:'it was discovered that the glass plates had fused along their edges.',
          D:'the glass plates were found to have fused to one another along their edges.'
        },
        correct:'D',
        expCorrect:'The opening phrase describes what sat in the attic for decades: the glass plates. Only the version that puts “the glass plates” immediately after the comma attaches the modifier to the right noun. The passive voice is not the error here — the mismatched subject is, and the correct sentence is passive too.',
        expWrong:{
          A:'The first noun after the comma is “a volunteer”, so the sentence says the volunteer was left for decades in an unheated attic.',
          B:'What follows the comma is a second modifier, “fusing along their edges”, so the opening phrase still has no noun to land on; the plates finally appear as part of “were what the volunteer found”.',
          C:'The subject is the placeholder “it”, a word with no content of its own, which leaves the opening phrase describing nothing at all.'
        },
        tip:'Do not choose by voice. Active and passive are both fine; the only test is whether the noun right after the comma is the thing the opening phrase describes.'
      },

      /* ── Paralelismo (27-29) ─────────────────────────────────────────── */
      {
        id:'FSS-27', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — parallel items in a list',
        passage:"The apprenticeship at the bindery covers three tasks: sewing the signatures, trimming the text block, and %BLANK% the leather for the cover.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'to pare', B:'paring', C:'pares', D:'the paring of'},
        correct:'B',
        expCorrect:'The list is made of three -ing phrases: “sewing …”, “trimming …”, and “paring …”. The last item has to take the same form as the first two.',
        expWrong:{
          A:'“to pare” is an infinitive, so the series switches forms at the final item.',
          C:'“pares” is a conjugated verb, which needs a subject of its own; the list holds noun-like phrases instead.',
          D:'“the paring of” turns the last item into a noun phrase with an article, which no longer matches “sewing” and “trimming”.'
        },
        tip:'Check a list by pairing the last item against the first. If the two do not take the same grammatical shape, the last one is what needs fixing.'
      },
      {
        id:'FSS-28', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — parallelism across a correlative pair',
        passage:"The cooperative decided not only to sell its beans at the Saturday market but also %BLANK% roasted samples to the three cafes on Rivet Street.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'to send', B:'sending', C:'it would send', D:'sent'},
        correct:'A',
        expCorrect:'“Not only … but also …” has to join two pieces of the same shape. The first is the infinitive “to sell”, so the second must be the infinitive “to send”.',
        expWrong:{
          B:'“sending” is an -ing form and does not match the infinitive “to sell” on the other side of “but also”.',
          C:'“it would send” is a full clause with its own subject, while “not only” is followed by a phrase; the two halves no longer balance.',
          D:'“sent” is a past-tense verb left without a subject after “but also”.'
        },
        tip:'With correlative pairs — not only/but also, either/or, neither/nor, both/and — cover the middle and compare the two sides. They must be the same kind of unit.'
      },
      {
        id:'FSS-29', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — comparing like with like',
        passage:"The glaze on the Kangxi bowl is noticeably thinner than %BLANK% in the same case.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'the other bowls', B:'those of the other bowls', C:'that of the other bowls', D:'the other bowls are'},
        correct:'C',
        expCorrect:'A comparison has to set one thing against another of the same kind: this glaze against the glaze on the other bowls. “That of the other bowls” stands in for “the glaze of the other bowls”, and the singular “that” matches the singular “The glaze”.',
        expWrong:{
          A:'“the other bowls” measures a glaze against whole bowls, which are two different kinds of thing.',
          B:'“those” is plural, but the thing being compared is “The glaze”, which is singular; the stand-in has to be “that”.',
          D:'“the other bowls are” finishes the sentence with the bowls themselves, so it still compares a glaze with bowls, and “are” is left with no adjective after it.'
        },
        tip:'In any comparison, name what is on both sides. Use “that of” to stand in for a singular noun and “those of” for a plural one, so you repeat the noun without writing it twice.'
      },

      /* ── Comparativo vs. superlativo (30-31) ─────────────────────────── */
      {
        id:'FSS-30', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — comparative form for exactly two things',
        passage:"Of the two kilns in the yard, the wood-fired one is %BLANK% to load but gives the ash glaze the potters want.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'hardest', B:'more hard', C:'most hard', D:'harder'},
        correct:'D',
        expCorrect:'The sentence compares exactly two kilns, and two calls for the comparative. A one-syllable adjective forms its comparative with -er: “harder”.',
        expWrong:{
          A:'“hardest” is the superlative, which singles one item out of three or more; the text names only two kilns.',
          B:'“more hard” builds a comparative with “more”, but short adjectives like “hard” take the -er ending instead.',
          C:'“most hard” is a superlative, wrong for two things, and it also uses “most” where the -est ending belongs.'
        },
        tip:'Count the items being compared. Two → comparative (-er or more). Three or more → superlative (-est or most). Short adjectives take the endings, not the extra word.'
      },
      {
        id:'FSS-31', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — superlative form for three or more',
        passage:"Among the seven bells cast for the tower in 1876, the tenor is %BLANK%, and it is the only one still rung by hand.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'the heavier', B:'the heaviest', C:'more heavy', D:'heavier than any'},
        correct:'B',
        expCorrect:'The tenor is being singled out from a group of seven. Three or more calls for the superlative, and an adjective ending in -y takes -iest: “the heaviest”.',
        expWrong:{
          A:'“the heavier” is the comparative, which picks one out of exactly two; the text names seven bells.',
          C:'“more heavy” is a comparative, wrong for a group of seven, and it is also built the wrong way: “heavy” takes -ier.',
          D:'“heavier than any” leaves the tenor inside the group it is measured against, so it ends up heavier than itself; that phrasing needs “than any OTHER bell”.'
        },
        tip:'Count the group first. More than two → superlative with “the”. And if you do write “than any”, it has to be “than any other”, or the subject is compared with itself.'
      },

      /* ── Palabras que se confunden (32-34) ───────────────────────────── */
      {
        id:'FSS-32', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
        skill:'Form, Structure, and Sense — affect vs. effect',
        passage:"The curators wanted to know how a week of tropical humidity would %BLANK% the parchment before they agreed to lend the manuscript.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'affect', B:'effect', C:'effects', D:'affects'},
        correct:'A',
        expCorrect:'The blank follows “would”, so it needs a base-form verb, and the meaning required is “to have an influence on”. That verb is “affect”.',
        expWrong:{
          B:'“effect” as a verb means “to bring something into being” (“effect a change”); humidity does not bring parchment into being. Most of the time “effect” is a noun — the result.',
          C:'“effects” is the plural noun (results) or a third-person verb, and neither can follow “would”.',
          D:'“affects” is the right word with the wrong ending: after “would”, a verb takes its base form, with no -s.'
        },
        tip:'Affect is almost always the verb (A for Action); effect is almost always the noun (the End result). Try putting “the” in front: if “the ___” works, you want effect.'
      },
      {
        id:'FSS-33', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
        skill:'Form, Structure, and Sense — fewer vs. less',
        passage:"The new sorting table sends %BLANK% bruised pears to the cider press, which has cut the waste at the orchard by nearly a third.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'less', B:'lesser', C:'fewer', D:'least'},
        correct:'C',
        expCorrect:'Pears can be counted one at a time, and countable nouns take “fewer”. Note how the same sentence uses “waste” with an amount word: waste is measured rather than counted, which is the other half of the rule.',
        expWrong:{
          A:'“less” is for quantities that are measured rather than counted — less juice, less time, less waste. Pears come in whole units.',
          B:'“lesser” means inferior in rank or quality (“a lesser work”), not smaller in number.',
          D:'“least” is a superlative, which singles one item out of three or more; the sentence compares the new table with how things used to be, not three options.'
        },
        tip:'Try putting a number in front of the noun. “Three pears” works → fewer. “Three wastes” does not → less. A plural -s on the noun is the usual giveaway.'
      },
      {
        id:'FSS-34', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
        skill:'Form, Structure, and Sense — than vs. then in a comparison',
        passage:"By the third week the apprentice was setting type faster %BLANK% the foreman, who had trained her, had ever managed in thirty years at the same case.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'then', B:'as', C:'from', D:'than'},
        correct:'D',
        expCorrect:'“Faster” is a comparative, and a comparative is completed with “than”. What follows is the second half of the comparison: “the foreman … had ever managed”.',
        expWrong:{
          A:'“then” is an adverb of time (“first this, then that”). It cannot introduce the second half of a comparison; the opening “By the third week” is what makes it sound plausible.',
          B:'“as” belongs to the frame “as fast as”, which measures two things as equal. Once the comparative “faster” is on the page, only “than” can finish it.',
          C:'“from” completes “different from”, not a comparative. “Faster from the foreman” is not English.'
        },
        tip:'A word ending in -er, or one following “more”, is a comparative, and comparatives are always finished with “than”. “Then” answers WHEN; “than” answers COMPARED WITH WHAT.'
      }

    ]
  });
})();
