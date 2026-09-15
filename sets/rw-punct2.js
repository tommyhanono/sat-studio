/* SAT Studio question set — Reading & Writing: Punctuation & Boundaries Set 3 (PB2-01 to PB2-12) */
window.SAT_SETS.push({
  id: 'rw-punct2',
  title: 'Punctuation & Boundaries — Set 3',
  section: 'rw',
  level: 'Media',
  description: 'Commas, semicolons, colons, dashes, and sentence boundaries in context.',
  minutes: 14,
  questions: [
    {
      id:'PB2-01', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Sentence boundaries: comma splice',
      passage:"The potter shaped the clay entirely by %BLANK% she had learned the technique from her grandmother decades earlier.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'hand;', B:'hand,', C:'hand', D:'hand, and,'},
      correct:'A',
      expCorrect:'There are two complete sentences: "The potter shaped the clay entirely by hand" and "she had learned the technique…". To join two independent clauses with no conjunction, the semicolon is what you want.',
      expWrong:{
        B:'A single comma between two complete sentences is a comma splice.',
        C:'With no punctuation at all, the two sentences fuse (run-on).',
        D:'"and" could join the two sentences ("hand, and she had learned…"), but the comma AFTER "and" separates the conjunction from its clause; the pattern "and," is wrong.'
      },
      tip:'The period test: if you can put a period on both sides of the blank and still have complete sentences, ";" works.'
    },
    {
      id:'PB2-02', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Punctuation: colon introducing a list',
      passage:"For the week-long hike, Mara packed only what she could carry on her %BLANK% a lightweight tent, a water filter, and three days of food.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'back:', B:'back,', C:'back;', D:'back'},
      correct:'A',
      expCorrect:'Before the blank there is a complete sentence ("Mara packed only what she could carry on her back") and what follows is the list that spells it out. That is exactly the job of the colon.',
      expWrong:{
        B:'A comma cannot introduce a list this way after a complete sentence.',
        C:'A semicolon demands an independent sentence after it, and a list is not one.',
        D:'With no punctuation, "on her back a lightweight tent…" fuses into nonsense.'
      },
      tip:'Colon = only after a COMPLETE sentence. Cover it up: what comes before has to be able to end in a period.'
    },
    {
      id:'PB2-03', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Punctuation: comma before a coordinating conjunction (FANBOYS)',
      passage:"The museum's new wing was scheduled to open in %BLANK% a delay in the shipment of glass panels pushed the date back by several months.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'spring, but', B:'spring but', C:'spring; but', D:'spring, but,'},
      correct:'A',
      expCorrect:'These are two independent sentences joined by "but". When a FANBOYS (for, and, nor, but, or, yet, so) joins two independent clauses, it takes a comma BEFORE the conjunction: "…in spring, but a delay…".',
      expWrong:{
        B:'The comma before “but” is missing; without it, joining two complete sentences is wrong on the SAT.',
        C:'The semicolon REPLACES the conjunction; the two are not used together ("; but" is redundant).',
        D:'The comma after "but" is wrong: the comma goes BEFORE the conjunction, not after it.'
      },
      tip:'FANBOYS rule: two complete sentences + and/but/or… → comma right BEFORE the conjunction.'
    },
    {
      id:'PB2-04', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Nonessential elements (paired commas)',
      passage:"The %BLANK% a flightless parrot native to New Zealand, is one of the longest-lived birds in the world.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'kakapo', B:'kakapo:', C:'kakapo;', D:'kakapo,'},
      correct:'D',
      expCorrect:'"a flightless parrot native to New Zealand" is a NON-essential appositive renaming "The kakapo". It has to sit between TWO commas; since the closing comma is already there before "is", the opening one is missing.',
      expWrong:{
        A:'Without the opening comma, the aside closes but never opens → unbalanced.',
        B:'A colon does not open an aside, and it would split the subject ("The kakapo") from its verb ("is").',
        C:'A semicolon does not fence off appositives, and there is no independent sentence before it.'
      },
      tip:'Opening and closing are TWINS: comma–comma. If you spot an "orphan" comma closing the aside, the answer is usually the comma that opens it.'
    },
    {
      id:'PB2-05', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Paired dashes (non-essential element)',
      passage:"The first commercial photograph—an image that required an exposure of several %BLANK% was taken from a rooftop in France in 1826.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'hours,', B:'hours;', C:'hours:', D:'hours—'},
      correct:'D',
      expCorrect:'The aside "an image that required an exposure of several hours" opened with a dash, so it has to CLOSE with another dash: "photograph—…hours—was taken…".',
      expWrong:{
        A:'It mixes an opening dash with a closing comma; the punctuation around an aside has to match.',
        B:'A semicolon does not close asides, and there is no independent sentence before it.',
        C:'A colon does not close an aside that was opened with a dash.'
      },
      tip:'"Orphan" dash before the blank → the answer is almost always the dash that pairs with it.'
    },
    {
      id:'PB2-06', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Comma after an introductory subordinate clause',
      passage:"Because the river changes course so often from year to %BLANK% mapmakers have struggled for centuries to fix its banks on paper.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'year', B:'year;', C:'year,', D:'year:'},
      correct:'C',
      expCorrect:'"Because the river changes course so often from year to year" is an introductory subordinate clause; when it opens the sentence, it is separated from the main clause with a comma.',
      expWrong:{
        A:'It is missing the comma required after the introductory clause.',
        B:'A semicolon demands an independent sentence before it, and "Because…" is dependent.',
        D:'A colon needs a complete sentence before it; "Because… year" is not one.'
      },
      tip:'Does the sentence start with Because/After/When/While…? Comma where that introductory part ends.'
    },
    {
      id:'PB2-07', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punctuation: colon (one clause elaborating another)',
      passage:"The recipe owes its distinctive flavor to a single unexpected %BLANK% a spoonful of dark cocoa stirred into the simmering chili.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'ingredient;', B:'ingredient', C:'ingredient:', D:'ingredient, and'},
      correct:'C',
      expCorrect:'Before the blank there is a complete sentence ("The recipe owes its distinctive flavor to a single unexpected ingredient") and what follows ELABORATES on it by naming that ingredient. The colon introduces that clarification.',
      expWrong:{
        A:'A semicolon demands an independent sentence after it, and "a spoonful of dark cocoa…" is a noun phrase, not a sentence.',
        B:'With no punctuation, "ingredient a spoonful…" fuses.',
        D:'"and" would call for another clause, but "a spoonful of dark cocoa…" is a noun phrase, not a sentence; the pattern breaks.'
      },
      tip:'A colon is not only for lists: it also presents a single thing that clarifies what came before, as long as what precedes it is a complete sentence.'
    },
    {
      id:'PB2-08', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Unnecessary comma (verb and its object)',
      passage:"After months of testing, the biologists concluded %BLANK% the coral colonies were recovering faster than any model had predicted.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'that,', B:'that', C:', that', D:': that'},
      correct:'B',
      expCorrect:'"that the coral colonies were recovering…" is the direct object of "concluded". Nothing separates a verb from its object clause: "concluded that…" takes no punctuation.',
      expWrong:{
        A:'A comma between "that" and its clause → it cuts off the object right after "that".',
        C:'A comma between the verb “concluded” and “that” → it separates the verb from its object.',
        D:'A colon needs a complete sentence before it; "the biologists concluded" is left hanging without its object.'
      },
      tip:'Golden rule: NOTHING between a verb and its “that”. If in doubt, read it without the comma — if it flows, leave it out.'
    },
    {
      id:'PB2-09', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Semicolons in complex lists',
      passage:"The grant will fund three teams: a group in Oslo, which studies Arctic %BLANK% a lab in Nairobi, which tracks migratory birds; and a station in Chile, which monitors ocean acidification.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'ice,', B:'ice:', C:'ice—', D:'ice;'},
      correct:'D',
      expCorrect:'When the items in a list contain commas of their own ("a group in Oslo, which studies…"), the items are separated with semicolons. The other two items already use ";" — the parallelism hands you the answer.',
      expWrong:{
        A:'With commas you lose the separation between items: it all turns into comma soup you cannot read.',
        B:'There is already a colon introducing the list; another colon inside the list has no job to do.',
        C:'The dash does not follow the pattern of the list (the other items use ";").'
      },
      tip:'In complex lists, copy the pattern: look at how the OTHER items are separated and use the same thing.'
    },
    {
      id:'PB2-10', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Semicolon with a conjunctive adverb (therefore)',
      passage:"The archive's oldest films are printed on unstable nitrate %BLANK% they must be stored in climate-controlled vaults far from the reading rooms.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'stock, therefore,', B:'stock; therefore,', C:'stock therefore,', D:'stock; therefore'},
      correct:'B',
      expCorrect:'These are two independent sentences and the second opens with the conjunctive adverb "therefore". The correct pattern is: sentence 1 + semicolon + therefore + comma + sentence 2 → "…nitrate stock; therefore, they must…".',
      expWrong:{
        A:'“, therefore,” cannot join two complete sentences: it is still a comma splice.',
        C:'The semicolon before “therefore” is missing.',
        D:'It is missing the comma AFTER "therefore".'
      },
      tip:'therefore/however/moreover are NOT conjunctions: they do not join sentences. Between two independent clauses use "; therefore,".'
    },
    {
      id:'PB2-11', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Sentence boundaries: run-on',
      passage:"The comet will not return for another seventy-six %BLANK% most people alive today will see it only once.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'years', B:'years,', C:'years, so', D:'years so'},
      correct:'C',
      expCorrect:'These are two independent sentences ("The comet will not return for another seventy-six years" and "most people… will see it only once"). Joining them with the FANBOYS "so" preceded by a comma is correct: "…years, so most people…".',
      expWrong:{
        A:'With no punctuation and no conjunction, the two sentences fuse (run-on).',
        B:'A single comma between two complete sentences is a comma splice.',
        D:'“so” with no comma before it is not enough to join two complete sentences on the SAT.'
      },
      tip:'Two complete sentences back to back need something: “;”, “.”, or a comma + FANBOYS. Never a lone comma and never nothing.'
    },
    {
      id:'PB2-12', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Unnecessary comma between subject and verb',
      passage:"The long-held belief that lightning never strikes the same place %BLANK% has been disproven many times over by observations of tall buildings.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'twice,', B:'twice', C:'twice;', D:'twice:'},
      correct:'B',
      expCorrect:'The full subject is "The long-held belief that lightning never strikes the same place twice" and its verb is "has been disproven". The "that…" clause is essential (it defines which belief), so it takes no commas, and you never split a subject from its verb.',
      expWrong:{
        A:'A comma between the subject (however long) and "has been disproven" is wrong.',
        C:'The semicolon requires independent clauses on both sides; “has been disproven…” is not one.',
        D:'The colon would split the subject from its verb, on top of demanding a complete sentence before it.'
      },
      tip:'Long subjects "ask" for a pause when you read them, but grammar ≠ breathing. Find subject + verb and do NOT split them.'
    }
  ]
});
