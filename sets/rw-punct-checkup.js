/* SAT Studio question set — Reading & Writing: Punctuation Check-Up (PCU-01 a PCU-10)
   Una pregunta por regla de puntuación; cada pregunta trae su clave `cheat`
   para el cheat sheet adaptativo (CHEAT_RULES en index.html). */
window.SAT_SETS.push({
  id: 'rw-punct-checkup',
  title: 'Punctuation Check-Up',
  section: 'rw',
  level: 'Media',
  description: '10 questions, one per punctuation rule — with an adaptive cheat sheet you can open on any question.',
  minutes: 12,
  questions: [
    {
      id:'PCU-01', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Punctuation: introductory comma', cheat:'comma-intro',
      passage:"To keep the mural’s colors from fading in direct %BLANK% the restorers coated the wall with a transparent mineral glaze.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'sunlight', B:'sunlight,', C:'sunlight;', D:'sunlight:'},
      correct:'B',
      expCorrect:'"To keep the mural’s colors from fading in direct sunlight" is an introductory phrase (it states the purpose). When a phrase like that opens the sentence, it is separated from the main clause ("the restorers coated…") with a comma.',
      expWrong:{
        A:'With no comma, the introductory phrase crashes into the subject "the restorers"; the comma after an introductory element is mandatory.',
        C:'A semicolon demands an independent sentence on EACH side, and "To keep… sunlight" is not a complete sentence.',
        D:'A colon goes only after a COMPLETE sentence; an introductory phrase cannot support one.'
      },
      tip:'Does the sentence open with To/After/When/Because/Although…? Mark where that introductory part ends and put the comma right there.'
    },
    {
      id:'PCU-02', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Punctuation: non-essential element', cheat:'comma-nonessential',
      passage:"Katherine Johnson, whose orbital calculations helped guide the first American crewed %BLANK% worked at NASA and its predecessor for more than three decades.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'spaceflights', B:'spaceflights;', C:'spaceflights—', D:'spaceflights,'},
      correct:'D',
      expCorrect:'"whose orbital calculations… spaceflights" is a NON-essential aside opened with a comma after "Johnson". Asides sit between twin marks: it has to close with ANOTHER comma before the main verb "worked".',
      expWrong:{
        A:'With no punctuation, the aside never closes and the subject "Katherine Johnson" crashes straight into its verb "worked".',
        B:'A semicolon calls for independent sentences on both sides; it cannot close an aside opened with a comma.',
        C:'A dash cannot close an aside that opened with a comma: opening and closing have to match (comma–comma or dash–dash).'
      },
      tip:'An aside takes TWIN marks. If it opened with a comma, close with a comma; if it opened with a dash, close with a dash. Never mix them.'
    },
    {
      id:'PCU-03', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Punctuation: comma + FANBOYS', cheat:'comma-fanboys',
      passage:"Hand-pulled noodles call for nothing more than flour, water, and %BLANK% the pulling technique itself can take a cook years to master.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'salt, but', B:'salt but', C:'salt, but,', D:'salt; but'},
      correct:'A',
      expCorrect:'There are two independent sentences ("Hand-pulled noodles call for…" and "the pulling technique… can take…") joined by the FANBOYS "but". The correct pattern is comma + conjunction: "…salt, but the pulling technique…".',
      expWrong:{
        B:'The comma before “but” is missing: when a FANBOYS joins two complete sentences, that comma is mandatory on the SAT.',
        C:'The comma after "but" is wrong: the comma goes BEFORE the conjunction, never after.',
        D:'The semicolon REPLACES the conjunction, it does not accompany it: "; but" is redundant.'
      },
      tip:'FANBOYS = for, and, nor, but, or, yet, so. Two complete sentences + FANBOYS → a comma right before the conjunction.'
    },
    {
      id:'PCU-04', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punctuation: unnecessary comma', cheat:'comma-unnecessary',
      passage:"A network of irrigation canals dug across the desert more than a thousand years ago by Hohokam %BLANK% still determines the routes of several waterways in modern Phoenix.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'farmers,', B:'farmers—', C:'farmers', D:'farmers;'},
      correct:'C',
      expCorrect:'The full subject is "A network of irrigation canals… by Hohokam farmers" and its verb is "still determines". However long the subject is, NO punctuation goes between it and its verb.',
      expWrong:{
        A:'The comma illegally separates the subject from its verb; the pause you "feel" while reading does not justify a comma.',
        B:'A lone dash here also cuts the subject off from its verb; aside dashes come in pairs.',
        D:'A semicolon demands an independent sentence on each side, and "still determines…" is not one.'
      },
      tip:'A long subject ≠ a comma. Find the head and the verb (network… determines) and check that nothing separates them.'
    },
    {
      id:'PCU-05', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Punctuation: semicolon', cheat:'semicolon',
      passage:"High-wheel bicycles of the 1880s look almost comical to modern %BLANK% in their own day, riding one at full speed was considered a daring athletic feat.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'eyes,', B:'eyes;', C:'eyes', D:'eyes:'},
      correct:'B',
      expCorrect:'There are two complete sentences: "High-wheel bicycles… look almost comical to modern eyes" and "in their own day, riding one… was considered a daring athletic feat". To join them with no conjunction, the semicolon is the right choice.',
      expWrong:{
        A:'A single comma between two complete sentences creates a comma splice.',
        C:'With no punctuation, the two sentences fuse into a run-on.',
        D:'A colon joins two independent clauses only when the second EXPLAINS the first; here the second CONTRASTS (comical today, serious in their day).'
      },
      tip:'The period test: if you could drop a period into the blank and be left with two complete sentences, ";" works.'
    },
    {
      id:'PCU-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punctuation: semicolon + adverb', cheat:'semicolon-adverb',
      passage:"City planners braced for fierce resistance to the new bike %BLANK% the proposal cleared the council without a single dissenting vote.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'lanes, however,', B:'lanes; however', C:'lanes however,', D:'lanes; however,'},
      correct:'D',
      expCorrect:'These are two independent sentences and the second opens with the conjunctive adverb "however". The pattern is: sentence 1 + semicolon + however + comma + sentence 2 → "…bike lanes; however, the proposal…".',
      expWrong:{
        A:'", however," between two complete sentences is still a comma splice: however is not a conjunction.',
        B:'The comma AFTER "however" is missing.',
        C:'The semicolon before "however" is missing; without it, the two sentences fuse.'
      },
      tip:'however/therefore/moreover are NOT FANBOYS: they do not join sentences with a plain comma. Between two independent clauses: "; however,".'
    },
    {
      id:'PCU-07', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Punctuation: colon', cheat:'colon',
      passage:"Before dawn, the balloon crew ran through a final inspection of three critical %BLANK% the burner, the envelope fabric, and the fuel lines.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'systems:', B:'systems,', C:'systems;', D:'systems'},
      correct:'A',
      expCorrect:'Before the blank there is a complete sentence ("Before dawn, the balloon crew ran through a final inspection of three critical systems") and what follows is the list spelling it out. That is exactly the job of the colon.',
      expWrong:{
        B:'After a complete sentence, a comma cannot introduce the list this way.',
        C:'A semicolon would demand an independent sentence after it, and a list is not one.',
        D:'With no punctuation, "systems the burner…" piles up into nonsense.'
      },
      tip:'Colon = only after a COMPLETE sentence. Cover what follows: what comes before has to be able to end in a period.'
    },
    {
      id:'PCU-08', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Punctuation: dashes', cheat:'dash',
      passage:"The tuatara—a reptile whose lineage split from snakes and lizards more than 200 million years %BLANK% now survives mainly on small islands off the coast of New Zealand.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'ago,', B:'ago;', C:'ago—', D:'ago:'},
      correct:'C',
      expCorrect:'The aside "a reptile whose lineage… years ago" opened with a dash after "tuatara", so it has to CLOSE with another dash before "now survives". Dash opens → dash closes.',
      expWrong:{
        A:'It mixes an opening dash with a closing comma; the marks fencing an aside have to match.',
        B:'A semicolon does not close asides and there is no independent sentence before the blank.',
        D:'A colon does not close an aside that was opened with a dash.'
      },
      tip:'An "orphan" dash before the blank → look for the option that pairs it with another dash.'
    },
    {
      id:'PCU-09', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Sentence boundaries', cheat:'boundaries',
      passage:"Wind farms now generate a third of the region’s %BLANK% plants supplied nearly all of it just fifteen years ago.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'electricity, coal', B:'electricity. Coal', C:'electricity coal', D:'electricity: coal'},
      correct:'B',
      expCorrect:'"Wind farms now generate…" and "coal plants supplied…" are two complete sentences. With no conjunction joining them, the correct repair among the options is to close with a period and start a new sentence: "…electricity. Coal plants…".',
      expWrong:{
        A:'A single comma between two complete sentences is a comma splice.',
        C:'With no punctuation you get a run-on: two sentences fused together.',
        D:'A colon would demand that the second sentence explain or develop the first; here it only contrasts the past with the present.'
      },
      tip:'A comma splice is repaired with a period, with ";", or with a comma + FANBOYS. Check which of those repairs appears among the options.'
    },
    {
      id:'PCU-10', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Posesivos', cheat:'possessive',
      passage:"The researchers followed forty families for a decade, documenting how the %BLANK% grocery budgets shifted as their children became teenagers.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'families’', B:'family’s', C:'families', D:'familys’'},
      correct:'A',
      expCorrect:'It is forty families (plural: families) and the budgets belong to them. For a plural ending in -s, the possessive is formed with the apostrophe AFTER the s: "the families’ grocery budgets".',
      expWrong:{
        B:'“family’s” is the SINGULAR possessive (of one family), but the text is about forty of them.',
        C:'With no apostrophe there is no possession marked: “the families grocery budgets” is malformed.',
        D:'The plural of family is families (with -ies); the form “familys” does not exist.'
      },
      tip:'Two steps: (1) form the plural correctly (family → families); (2) a plural in -s → apostrophe after the s. And remember: its = possessive, it’s = "it is".'
    }
  ]
});
