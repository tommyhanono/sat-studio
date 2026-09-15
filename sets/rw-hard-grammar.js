/* SAT Studio question set — Reading & Writing: Punctuation, Agreement & Coordination — Hard (HVG-01 a HVG-12) */
window.SAT_SETS.push({
  id: 'rw-hard-grammar',
  title: 'Punctuation, Agreement & Coordination — Hard',
  section: 'rw',
  level: 'Difícil',
  description: 'Hard Standard English Conventions: tricky punctuation, subject–verb agreement, and coordination/sentence boundaries.',
  minutes: 15,
  questions: [
    {
      id:'HVG-01', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punctuation',
      passage:"After weeks of debate, the archaeologists finally agreed on what the fragile burial chamber most urgently %BLANK% a stable temperature, constant humidity, and protection from vibration.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'needed:', B:'needed,', C:'needed', D:'needed;'},
      correct:'A',
      expCorrect:'Before the blank there is a complete sentence ("the archaeologists finally agreed on what the fragile burial chamber most urgently needed") and what follows is the list spelling out that "what". Introducing a list after a complete sentence is exactly the job of the colon.',
      expWrong:{
        B:'A lone comma cannot introduce a list after a complete sentence.',
        C:'With no punctuation, the sentence collides with the list and fuses (run-on); besides, "needed" already has its object in "what".',
        D:'A semicolon demands an independent sentence after it, and a list is not one.'
      },
      tip:'Colon = only after a COMPLETE sentence. Cover it up: what comes before has to be able to end in a period.'
    },
    {
      id:'HVG-02', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punctuation',
      passage:"The 1815 eruption of Mount %BLANK% the most powerful volcanic event in recorded history—released so much ash that the following year had almost no summer across the Northern Hemisphere.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'Tambora,', B:'Tambora—', C:'Tambora', D:'Tambora:'},
      correct:'B',
      expCorrect:'The non-essential aside "the most powerful volcanic event in recorded history" CLOSES with a dash before "released", so it has to OPEN with another dash: "Mount Tambora—…history—released…". The punctuation around an aside has to match on both sides.',
      expWrong:{
        A:'It mixes an opening comma with a closing dash; the marks around an aside have to be twins.',
        C:'With nothing opening the aside, the closing dash is left orphaned and unbalanced.',
        D:'A colon does not open an aside and it would split the subject "The 1815 eruption of Mount Tambora" from its verb "released".'
      },
      tip:'An "orphan" dash closing the aside before the blank → the answer is almost always the dash that pairs with it.'
    },
    {
      id:'HVG-03', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punctuation',
      passage:"For months the comet had been predicted to blaze brightly across the winter %BLANK% it fizzled into a faint smudge barely visible through binoculars.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'sky,', B:'sky', C:'sky;', D:'sky:'},
      correct:'C',
      expCorrect:'There are two complete sentences: "…the comet had been predicted to blaze brightly across the winter sky" and "it fizzled into a faint smudge…". To join two independent clauses with no conjunction, the semicolon is what you want.',
      expWrong:{
        A:'A single comma between two complete sentences is a comma splice.',
        B:'With no punctuation, the two sentences fuse (run-on).',
        D:'A colon joins two independent clauses only when the second EXPLAINS or expands the first; here the second CONTRASTS (predicted bright, but it fizzled), so the colon does not fit.'
      },
      tip:'The period test: if both sides of the blank are complete sentences and the 2nd does not clarify the 1st, ";" is your pick.'
    },
    {
      id:'HVG-04', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punctuation',
      passage:"The long-standing suspicion that the ancient trade routes described in the manuscript had never actually %BLANK% has been steadily undermined by recent archaeological finds.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'existed,', B:'existed;', C:'existed:', D:'existed'},
      correct:'D',
      expCorrect:'The full subject is "The long-standing suspicion that… had never actually existed" and its verb is "has been undermined". The "that…" clause is essential (it defines which suspicion), so it takes no commas, and you never split a subject from its verb with a comma, semicolon or colon.',
      expWrong:{
        A:'A comma between the subject (however long) and its verb "has been" is wrong.',
        B:'A semicolon needs independent clauses on both sides; “has been undermined…” is not one.',
        C:'The colon would split the subject from its verb.'
      },
      tip:'Long subjects "ask" for a pause when you read them, but grammar ≠ breathing. Find subject + verb and do NOT split them.'
    },
    {
      id:'HVG-05', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punctuation',
      passage:"The %BLANK% first isolated from a common soil mold in the 1940s, revolutionized the treatment of bacterial infections within a single generation.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'antibiotic,', B:'antibiotic', C:'antibiotic;', D:'antibiotic:'},
      correct:'A',
      expCorrect:'"first isolated from a common soil mold in the 1940s" is a non-essential aside describing "The antibiotic". It has to sit between TWO commas; since the closing comma is already there before "revolutionized", the opening one is missing.',
      expWrong:{
        B:'Without the opening comma, the aside closes but never opens → it is left unbalanced.',
        C:'A semicolon does not open an aside and it would split the subject ("The antibiotic") from its verb ("revolutionized").',
        D:'A colon does not open an aside and it would also split the subject from its verb.'
      },
      tip:'Opening and closing are TWINS: comma–comma. If you spot an "orphan" comma closing the aside, the answer is usually the comma that opens it.'
    },
    {
      id:'HVG-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"The committee that oversees the museum’s rare-manuscript collection %BLANK% every acquisition proposal in a single closed-door session each month.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'review', B:'reviews', C:'have reviewed', D:'are reviewing'},
      correct:'B',
      expCorrect:'The subject is "The committee", a collective noun treated here as a single unit acting together. A singular subject calls for a singular verb: "reviews". The clause "that oversees… collection" only describes the subject and does not change its number.',
      expWrong:{
        A:'"review" is plural; it agrees with "collection" or "proposals", not with the singular subject "The committee".',
        C:'“have reviewed” es plural; el singular “committee” pide “has reviewed”.',
        D:'“are reviewing” is plural; the singular subject “committee” needs a singular verb.'
      },
      tip:'A collective acting as a single unit ("The committee") is singular. Ignore the "that…" clause: the verb agrees with "committee".'
    },
    {
      id:'HVG-07', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"A series of unexpected setbacks—a flooded basement, a broken furnace, and a leaking roof—%BLANK% the renovation nearly four months behind schedule.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'has put', B:'have put', C:'putting', D:'are putting'},
      correct:'A',
      expCorrect:'The real subject is "A series" (singular). The list between dashes ("a flooded basement, a broken furnace, and a leaking roof") only spells out the setbacks and does not change the subject’s number. A singular subject calls for a singular verb: "has put".',
      expWrong:{
        B:'"have put" is plural; it agrees with "setbacks", but the real subject is the singular "A series".',
        C:'"putting" is not a finite verb: it would leave the sentence with no main verb (a fragment).',
        D:'“are putting” is plural; the singular subject “A series” needs a singular verb.'
      },
      tip:'"A series of…", "a set of…" and "a pair of…" are singular. Cover the intervening phrase and agree with "A series".'
    },
    {
      id:'HVG-08', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"Among the artifacts recovered from the sunken merchant ship %BLANK% a gold astrolabe whose delicate engravings have puzzled historians for decades.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'are', B:'were', C:'is', D:'have been'},
      correct:'C',
      expCorrect:'The sentence is inverted: the subject comes AFTER the verb. The subject is "a gold astrolabe" (singular), not "the artifacts", so the verb is singular and present: "is".',
      expWrong:{
        A:'"are" is plural; it agrees with "artifacts", but the real subject is the singular "a gold astrolabe".',
        B:'"were" is plural and past tense; the subject is singular and the rest of the text is in the present ("have puzzled… for decades").',
        D:'“have been” is plural; the singular subject “a gold astrolabe” needs “has been”.'
      },
      tip:'When the sentence opens with a place ("Among the artifacts…"), look for the subject AFTER the verb. Here it is "a gold astrolabe" (singular).'
    },
    {
      id:'HVG-09', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"Neither the towering ceiling murals nor the elaborate marble fountain %BLANK% able to draw visitors’ eyes away from the cathedral’s soaring stained-glass windows.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'were', B:'have been', C:'are', D:'was'},
      correct:'D',
      expCorrect:'With "neither… nor…", the verb agrees with the NEAREST subject. The nearest is "the elaborate marble fountain" (singular), so the verb is singular: "was".',
      expWrong:{
        A:'"were" is plural; it would agree with "murals", but the rule says agree with the nearest subject, which is singular.',
        B:'"have been" is plural; the nearest subject "fountain" is singular.',
        C:'"are" is plural and present tense; the nearest one is singular and the text is in the past.'
      },
      tip:'In "neither X nor Y", look ONLY at the Y (the one closest to the verb). If Y is singular, the verb is singular.'
    },
    {
      id:'HVG-10', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Coordination',
      passage:"The startup’s first prototype barely worked in the %BLANK% within eighteen months its refined design was outperforming products from companies ten times its size.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'lab,', B:'lab;', C:'lab, and,', D:'lab and'},
      correct:'B',
      expCorrect:'These are two complete sentences ("The startup’s first prototype barely worked in the lab" and "within eighteen months its refined design was outperforming…"). With no conjunction between them, the semicolon is what joins them correctly.',
      expWrong:{
        A:'A single comma between two complete sentences is a comma splice.',
        C:'The comma after "and" separates the conjunction from its clause; on top of that there is too much punctuation.',
        D:'Two complete sentences joined by "and" demand a comma BEFORE the conjunction; "lab and" leaves it out (run-on).'
      },
      tip:'Two complete sentences with no conjunction? Semicolon. If you bring in "and", it goes with a comma BEFORE it, never after.'
    },
    {
      id:'HVG-11', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Coordination',
      passage:"Sea otters must eat close to a quarter of their body weight every %BLANK% they lack the thick layer of blubber that keeps other marine mammals warm in frigid water.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'day,', B:'day; and', C:'day, for', D:'day for'},
      correct:'C',
      expCorrect:'These are two complete sentences and the second gives the reason for the first. The coordinator "for" (meaning "because") joins two independent clauses with a comma BEFORE it: "…every day, for they lack…".',
      expWrong:{
        A:'A single comma between two complete sentences is a comma splice.',
        B:'The semicolon already joins two independent clauses; adding “and” is redundant (“; and” is one too many).',
        D:'"for" here joins two complete sentences, so it needs a comma before it; "day for" with no comma is a run-on.'
      },
      tip:'The FANBOYS "for" = "because". It joins two complete sentences with a comma BEFORE it: "…, for …".'
    },
    {
      id:'HVG-12', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Coordination',
      passage:"Volunteers had planted more than a thousand saplings along the eroded %BLANK% but a single scorching summer killed nearly half of them before their roots could take hold.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'riverbank but', B:'riverbank; but,', C:'riverbank, but,', D:'riverbank, but'},
      correct:'D',
      expCorrect:'These are two complete sentences joined by the FANBOYS "but". The rule calls for a comma BEFORE the conjunction and nothing after it: "…riverbank, but a single scorching summer…".',
      expWrong:{
        A:'The comma before “but” is missing; joining two complete sentences without it is wrong.',
        B:'The semicolon replaces the conjunction; using it alongside "but" is redundant, and the comma after "but" is wrong too.',
        C:'The comma after "but" separates the conjunction from its clause; the comma goes BEFORE, not after.'
      },
      tip:'FANBOYS rule: two complete sentences + and/but/or… → comma right BEFORE the conjunction and nothing after it.'
    }
  ]
});
