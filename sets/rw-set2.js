/* SAT Studio question set — Reading & Writing: Punctuation Drill Set 2 (RW-011 to RW-020) */
window.SAT_SETS.push({
  id: 'rw-set2',
  title: 'Punctuation Drill — Set 2',
  section: 'rw',
  description: 'More Standard English Conventions (Boundaries): semicolons, colons, nonessential commas, FANBOYS, essential clauses, apostrophes, and conjunctive adverbs.',
  minutes: 15,
  questions: [
    {
      id:'RW-011', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Semicolon between two independent sentences',
      passage:"Marie Tharp’s hand-drawn maps of the ocean floor were at first dismissed by many %BLANK% within a decade, her detailed rendering of the Mid-Atlantic Ridge had become central to the theory of plate tectonics.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'geologists,', B:'geologists', C:'geologists;', D:'geologists:'},
      correct:'C',
      expCorrect:'There are two complete sentences: “Marie Tharp’s maps… were at first dismissed by many geologists” and “within a decade, her… rendering… had become central…”. To join two independent sentences with no conjunction, the semicolon is what you want.',
      expWrong:{
        A:'A single comma between two complete sentences is a comma splice.',
        B:'With no punctuation, the two sentences fuse (run-on).',
        D:'A colon joins two independent clauses only when the second one EXPLAINS or illustrates the first; here the second one CONTRASTS (first she was dismissed, then she prevailed), so the colon does not fit.'
      },
      tip:'The period test: if you can put a period on both sides of the blank and still have complete sentences, ";" works. Reach for the colon only when the 2nd part clarifies the 1st.'
    },
    {
      id:'RW-012', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Colon introducing a list',
      passage:"To restore the old wooden sailboat, the two brothers spent a year tracking down the materials they %BLANK% marine-grade plywood, bronze fittings, and yards of waxed sailcloth.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'needed:', B:'needed,', C:'needed;', D:'needed'},
      correct:'A',
      expCorrect:'Before the blank there is a complete sentence (“the two brothers spent a year tracking down the materials they needed”) and what follows is the list that spells it out. That is exactly the job of the colon.',
      expWrong:{
        B:'A comma cannot introduce a list this way after a complete sentence.',
        C:'A semicolon demands an independent sentence after it, and a list is not one.',
        D:'With no punctuation, “needed marine-grade plywood…” fuses onto what came before.'
      },
      tip:'Colon = only after a COMPLETE sentence. Cover it up: what comes before has to be able to end in a period.'
    },
    {
      id:'RW-013', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Non-essential element (paired commas)',
      passage:"The %BLANK% a salamander that never fully leaves its larval stage, can regrow not only lost limbs but also portions of its heart and brain.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'axolotl', B:'axolotl:', C:'axolotl;', D:'axolotl,'},
      correct:'D',
      expCorrect:'“a salamander that never fully leaves its larval stage” is a NON-essential appositive renaming “The axolotl”. It has to sit between TWO commas; since the closing comma is already there before “can”, the opening one is missing.',
      expWrong:{
        A:'Without the opening comma, the aside closes but never opens → unbalanced.',
        B:'A colon does not open an aside, and it would split the subject (“The axolotl”) from its verb (“can regrow”).',
        C:'A semicolon does not fence off appositives, and there is no independent sentence before it.'
      },
      tip:'Opening and closing are TWINS: comma–comma. If you spot an “orphan” comma closing the aside, the answer is usually the comma that opens it.'
    },
    {
      id:'RW-014', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Comma before a coordinating conjunction (FANBOYS)',
      passage:"The new space telescope can detect faint infrared light invisible to earlier %BLANK% it must be chilled to nearly −270°C so that its own warmth does not drown out the signals it gathers.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'instruments but', B:'instruments, but', C:'instruments, but,', D:'instruments; but'},
      correct:'B',
      expCorrect:'These are two independent sentences joined by “but”. When a FANBOYS (for, and, nor, but, or, yet, so) joins two independent clauses, it takes a comma BEFORE the conjunction: “…instruments, but it must…”.',
      expWrong:{
        A:'The comma before “but” is missing; without it, joining two complete sentences is wrong on the SAT.',
        C:'The comma after “but” is wrong: the comma goes BEFORE the conjunction, not after it.',
        D:'The semicolon REPLACES the conjunction; the two are not used together (“; but” is redundant).'
      },
      tip:'FANBOYS rule: two complete sentences + and/but/or… → comma right BEFORE the conjunction.'
    },
    {
      id:'RW-015', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Comma after an introductory phrase',
      passage:"After tracking the wolf pack across the tundra for nearly two %BLANK% the researchers finally located the den where the pups had been born.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'months', B:'months:', C:'months,', D:'months;'},
      correct:'C',
      expCorrect:'“After tracking the wolf pack… for nearly two months” is an introductory phrase; when it opens the sentence, it is separated from the main clause with a comma.',
      expWrong:{
        A:'The required comma after the introductory phrase is missing.',
        B:'A colon needs a complete sentence before it; this phrase is not one.',
        D:'A semicolon demands an independent sentence before it, and “After tracking…” is not one.'
      },
      tip:'Does the sentence start with After/When/Because/Having…? Comma where that introductory part ends.'
    },
    {
      id:'RW-016', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Do not separate subject and verb',
      passage:"The claim that regular exposure to natural daylight improves both sleep quality and daytime %BLANK% is now supported by dozens of independent studies.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'focus', B:'focus,', C:'focus;', D:'focus:'},
      correct:'A',
      expCorrect:'The full subject is “The claim that… daytime focus” and its verb is “is”. The “that…” clause is essential (it defines which claim), so it takes no commas, and you never split a subject from its verb with a single comma, semicolon or colon.',
      expWrong:{
        B:'A comma between the subject (however long) and “is” is wrong.',
        C:'A semicolon calls for independent sentences on both sides; “is supported…” is not one.',
        D:'The colon would split the subject from its verb.'
      },
      tip:'Long subjects “ask” for a pause when you read them, but grammar ≠ breathing. Find subject + verb and do NOT split them.'
    },
    {
      id:'RW-017', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Paired dashes (non-essential element)',
      passage:"Bessie Coleman—the first African American woman to earn a pilot’s %BLANK% trained in France because no U.S. flight school of the era would admit her.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'license,', B:'license;', C:'license:', D:'license—'},
      correct:'D',
      expCorrect:'The aside “the first African American woman to earn a pilot’s license” opened with a dash, so it has to CLOSE with another dash: “Coleman—…license—trained…”.',
      expWrong:{
        A:'It mixes an opening dash with a closing comma; the punctuation around an aside has to match.',
        B:'A semicolon does not close asides, and there is no independent sentence before it.',
        C:'A colon does not close an aside that was opened with a dash.'
      },
      tip:'“Orphan” dash before the blank → the answer is almost always the dash that pairs with it.'
    },
    {
      id:'RW-018', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Possessive apostrophe (singular)',
      passage:"Because it can glide for hours without a single %BLANK% wingspan—close to 3.5 meters—is the largest of any bird alive today.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'flap, the albatross', B:'flap, the albatrosses', C:'flap, the albatross’s', D:'flap, the albatrosses’'},
      correct:'C',
      expCorrect:'“it” and “the largest of any bird alive today” indicate ONE bird (singular). The wingspan belongs to it → singular possessive = noun + ’s: “the albatross’s wingspan”.',
      expWrong:{
        A:'With no apostrophe, “the albatross wingspan” does not mark possession.',
        B:'A plural with no possessive, and it contradicts the singular “it”.',
        D:'That is a plural possessive (“of the albatrosses”), but the text is talking about a single one.'
      },
      tip:'Two questions: singular or plural? does it own something? Singular + ownership → ’s.'
    },
    {
      id:'RW-019', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Essential clause (no commas)',
      passage:"Of the dozens of composers working in Vienna at the time, the one %BLANK% most shaped the young Beethoven was not Mozart but Haydn.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:', who', B:'who', C:', who,', D:'who,'},
      correct:'B',
      expCorrect:'“who most shaped the young Beethoven” is essential: it picks out THAT composer among the dozens mentioned. Essential information is not fenced off with commas.',
      expWrong:{
        A:'An opening comma with no closing one is unbalanced, and it turns something essential into a non-essential aside.',
        C:'The commas make it NON-essential, but the text needs that clause to identify who is being talked about.',
        D:'The comma between “who… Beethoven” and its verb “was” separates the subject from its verb.'
      },
      tip:'Can you delete the clause without losing who or what is being talked about? If NOT → it is essential → no commas.'
    },
    {
      id:'RW-020', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Semicolon with a conjunctive adverb (however)',
      passage:"The footbridge was engineered to flex slightly under heavy foot %BLANK% the designers had not accounted for the way hundreds of people unconsciously fall into step, amplifying its sway.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'traffic, however,', B:'traffic however,', C:'traffic; however', D:'traffic; however,'},
      correct:'D',
      expCorrect:'These are two independent sentences and the second one opens with the conjunctive adverb “however”. The correct pattern is: sentence 1 + semicolon + however + comma + sentence 2 → “…foot traffic; however, the designers…”.',
      expWrong:{
        A:'“, however,” cannot join two complete sentences: it is still a comma splice.',
        B:'The semicolon before “however” is missing.',
        C:'It is missing the comma AFTER “however”.'
      },
      tip:'however/therefore/moreover are NOT conjunctions: they do not join sentences. Between two independent clauses use “; however,”.'
    }
  ]
});
