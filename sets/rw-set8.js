/* SAT Studio question set — Reading & Writing: Grammar (Agreement & Coordination) Set 8 (GRM-01 to GRM-12) */
window.SAT_SETS.push({
  id: 'rw-set8',
  title: 'Grammar: Agreement & Coordination — Hard',
  section: 'rw',
  level: 'Difícil',
  description: 'Standard English Conventions (Form, Structure & Sense): subject-verb agreement, verb forms, clause coordination, pronouns, and possessives.',
  minutes: 15,
  questions: [
    {
      id:'GRM-01', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Subject-verb agreement',
      passage:"The collection of rare beetles that the museum acquired from a retired entomologist %BLANK% dozens of species never before recorded in the region.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'include', B:'includes', C:'have included', D:'were including'},
      correct:'B',
      expCorrect:'The subject is “The collection” (singular). The phrase “of rare beetles that the museum acquired…” only describes the subject and does not change it. A singular subject calls for a singular verb: “includes”.',
      expWrong:{
        A:'“include” is plural; it agrees with “beetles”, not with the real subject “The collection” (singular).',
        C:'“have included” is plural; the singular subject “collection” calls for “has”, not “have”.',
        D:'“were including” is plural and past tense; the singular subject “collection” calls for a singular present-tense verb.'
      },
      tip:'Cover the phrase between the subject and the verb (“of… entomologist”). What is left is “The collection ___”: singular calls for a singular verb.'
    },
    {
      id:'GRM-02', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Subject-verb agreement',
      passage:"Neither the lead architect nor her three assistants %BLANK% able to explain why the building’s east wing had settled several centimeters in its first year.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'was', B:'has been', C:'is', D:'were'},
      correct:'D',
      expCorrect:'With “neither… nor…”, the verb agrees with the NEAREST subject. The nearest is “her three assistants” (plural), so the verb is plural: “were”.',
      expWrong:{
        A:'“was” is singular; it would agree with “architect”, but the neither/nor rule says agree with the nearest subject, which is plural.',
        B:'“has been” is singular; the nearest subject “assistants” is plural.',
        C:'“is” is singular and present tense; the nearest subject is plural and the rest of the text is in the past.'
      },
      tip:'In “neither X nor Y”, look ONLY at the Y (the one closest to the verb). If Y is plural, the verb is plural.'
    },
    {
      id:'GRM-03', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Subject-verb agreement',
      passage:"Hidden beneath the layers of dried paint on the old canvas %BLANK% a faint pencil sketch that the artist had drawn years before beginning the final portrait.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'were', B:'are', C:'was', D:'have been'},
      correct:'C',
      expCorrect:'The sentence is inverted: the real subject comes after the verb. The subject is “a faint pencil sketch” (singular), so the verb is singular and past tense: “was”.',
      expWrong:{
        A:'“were” is plural; the subject “a faint pencil sketch” is singular.',
        B:'“are” is plural and present tense; the subject is singular and the text is in the past.',
        D:'“have been” is plural; the singular subject “a sketch” calls for a singular verb.'
      },
      tip:'When the sentence opens with a place (“Beneath…”), look for the subject AFTER the verb. Here it is “a sketch” (singular).'
    },
    {
      id:'GRM-04', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb forms and tenses',
      passage:"By the time the volunteers arrived at the coast to help with the cleanup, the storm %BLANK% most of the fragile nesting sites along the shoreline.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'has already destroyed', B:'already destroys', C:'is already destroying', D:'had already destroyed'},
      correct:'D',
      expCorrect:'“By the time the volunteers arrived” marks a point in the past; the destruction happened BEFORE that arrival. For an action earlier than another past action you use the past perfect: “had already destroyed”.',
      expWrong:{
        A:'“has destroyed” is present perfect; it does not fit the clearly past frame “arrived”.',
        B:'“destroys” is simple present; the event happened in the past.',
        C:'“is destroying” is present continuous; it clashes with the past “arrived”.'
      },
      tip:'Two things in the past and one happened BEFORE the other? The earlier one goes in the past perfect (had + participle).'
    },
    {
      id:'GRM-05', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Verb forms and tenses',
      passage:"The committee reviewed the proposal for weeks and, after countless revisions, finally %BLANK% it to the board with a unanimous recommendation.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'submits', B:'has submitted', C:'submitted', D:'submitting'},
      correct:'C',
      expCorrect:'The sentence is already in the past (“reviewed”). The verb joined by “and” has to keep the same tense: simple past “submitted”.',
      expWrong:{
        A:'“submits” is present tense; it breaks with the past “reviewed”.',
        B:'“has submitted” is present perfect; it does not fit the simple-past sequence of the sentence.',
        D:'“submitting” is not a finite verb; with no main verb the sentence is incomplete.'
      },
      tip:'If the sentence already started in the past (“reviewed”), the verb joined by “and” goes in the past too.'
    },
    {
      id:'GRM-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Joining clauses',
      passage:"The river had looked calm from the bridge that %BLANK% the kayakers soon discovered that a strong current ran just beneath its glassy surface.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'morning,', B:'morning, but', C:'morning but', D:'morning;,'},
      correct:'B',
      expCorrect:'There are two complete sentences that CONTRAST: “The river had looked calm… that morning” and “the kayakers soon discovered…”. To join them with contrast you use comma + FANBOYS: “, but”.',
      expWrong:{
        A:'A single comma between two complete sentences is a comma splice.',
        C:'“but” with no comma before it joins two complete sentences badly; the comma before the conjunction is missing.',
        D:'“;,” is not valid punctuation: you do not combine a semicolon with a comma.'
      },
      tip:'Two complete sentences that clash → comma + but. Remember: the comma goes BEFORE the FANBOYS.'
    },
    {
      id:'GRM-07', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Joining clauses',
      passage:"The mural took nearly three years to %BLANK% the artist worked on it only during the summer months, when the plaster was dry enough to hold the pigment.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'complete,', B:'complete', C:'complete;', D:'complete, however'},
      correct:'C',
      expCorrect:'These are two independent sentences (“The mural took nearly three years to complete” and “the artist worked on it only during the summer months…”). The semicolon joins two complete sentences with no conjunction, and that is what is correct.',
      expWrong:{
        A:'A single comma between two complete sentences is a comma splice.',
        B:'With no punctuation, the two sentences fuse (run-on).',
        D:'“however” is a conjunctive adverb, not a conjunction; with only a comma before it, it is still a comma splice (it would need “; however,”).'
      },
      tip:'Two complete sentences with no conjunction → semicolon. Test it: can you put a period in the blank? If so, the “;” works.'
    },
    {
      id:'GRM-08', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Joining clauses',
      passage:"Early telescopes gathered too little light to reveal distant %BLANK% modern instruments collect photons for hours, uncovering galaxies far too faint for earlier astronomers to detect.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'galaxies,', B:'galaxies however', C:'galaxies, however', D:'galaxies; however,'},
      correct:'D',
      expCorrect:'These are two complete sentences in contrast, and the second opens with the conjunctive adverb “however”. The correct pattern is: sentence 1 + semicolon + however + comma + sentence 2.',
      expWrong:{
        A:'A single comma between two complete sentences is a comma splice.',
        B:'“however” with no punctuation does not join sentences; it leaves a run-on.',
        C:'“, however” with commas alone cannot join two complete sentences: it is still a comma splice.'
      },
      tip:'however is NOT a conjunction. Between two complete sentences use the pattern “; however,”.'
    },
    {
      id:'GRM-09', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Pronoun agreement',
      passage:"Each of the researchers presenting at the conference was asked to bring a copy of %BLANK% latest findings so the panel could compare the data side by side.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'their', B:'his or her', C:'its', D:'our'},
      correct:'B',
      expCorrect:'The antecedent is “Each”, which is singular (look at “was asked”). A singular pronoun referring to an indefinite person is “his or her”.',
      expWrong:{
        A:'“their” is plural; it does not agree with the singular “Each” (which already calls for “was”).',
        C:'“its” is for things or animals, not for researchers (people).',
        D:'“our” is first person; the text speaks about the researchers in the third person, not about us.'
      },
      tip:'“Each” is SINGULAR (that is why “was”). A singular pronoun for people is “his or her”.'
    },
    {
      id:'GRM-10', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Pronoun agreement',
      passage:"The debate team celebrated after the regional finals, proud that %BLANK% months of preparation had finally paid off in a decisive victory over the defending champions.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'its', B:'their', C:'it’s', D:'they’re'},
      correct:'A',
      expCorrect:'“The debate team” is a collective noun treated as one unit (it celebrated together). The matching singular possessive pronoun is “its”.',
      expWrong:{
        B:'“their” is plural; the text treats the team as a single unit.',
        C:'“it’s” means “it is”; here you need the possessive “its”, with no apostrophe.',
        D:'“they’re” means “they are” (plural) and is not a possessive; it cannot describe “months of preparation”.'
      },
      tip:'The possessive of “it” is “its” (no apostrophe). “it’s” always means “it is”.'
    },
    {
      id:'GRM-11', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Possessives',
      passage:"After a long day guiding tourists through the canyon, the two %BLANK% boots were caked with the reddish dust that coated every trail in the park.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'guides’', B:'guide’s', C:'guides', D:'guides’s'},
      correct:'A',
      expCorrect:'It is “the two guides” (plural) and the boots belong to them. The possessive of a plural already ending in -s is formed with an apostrophe AFTER the s: “the guides’ boots”.',
      expWrong:{
        B:'“guide’s” is a SINGULAR possessive (one guide); the text says “the two”, that is, two of them.',
        C:'“guides” is a plural with no possessive; it does not mark that the boots belong to them.',
        D:'“guides’s” is not correct: a plural already ending in -s takes only an apostrophe at the end, with no extra s.'
      },
      tip:'Plural ending in -s + possession → just an apostrophe at the end: guides’.'
    },
    {
      id:'GRM-12', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Possessives',
      passage:"The novelist insisted that the success of her latest book belonged to her editors, whose careful attention to %BLANK% pacing had transformed a rough draft into a bestseller.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'its', B:'it’s', C:'their', D:'the storys'},
      correct:'A',
      expCorrect:'The “pacing” belongs to the book, which is one single thing (singular). The singular possessive for a thing is “its”, with no apostrophe.',
      expWrong:{
        B:'“it’s” means “it is”; here you need the possessive “its”.',
        C:'“their” is plural, but the pacing belongs to a single book (singular).',
        D:'“storys” is neither a possessive nor spelled correctly; the singular possessive would be “story’s”.'
      },
      tip:'The possessive of a singular thing is “its” (no apostrophe). Never mix up “its” with “it’s” (= it is).'
    }
  ]
});
