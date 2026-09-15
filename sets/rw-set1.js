/* SAT Studio question set — Reading & Writing: Punctuation Drill Set 1 (RW-001 a RW-010) */
window.SAT_SETS.push({
  id: 'rw-set1',
  title: 'Punctuation Drill — Set 1',
  section: 'rw',
  description: 'Standard English Conventions: commas, semicolons, colons, dashes, apostrophes, and sentence boundaries.',
  minutes: 15,
  questions: [
    {
      id:'RW-001', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Elementos no esenciales (comas en pareja)',
      passage:"In 2021, engineer Ada Reyes founded Solaria, a startup that converts food waste into biodegradable packaging. The company's first %BLANK% a compostable takeout container, sold out within weeks of its launch.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'product', B:'product,', C:'product:', D:'product\u2014'},
      correct:'B',
      expCorrect:'"a compostable takeout container" is a NON-essential appositive interrupting the sentence ("The company\u2019s first product \u2026 sold out"). A non-essential aside has to be fenced by TWO commas. Since the text already closes with a comma after "container,", you need the opening comma: "product, a compostable takeout container, sold out."',
      expWrong:{
        A:'Without the comma, the aside opens with no punctuation but closes with one → unbalanced.',
        C:'A colon cannot "open" an aside that later closes with a comma; on top of that the sentence keeps going ("sold out"), so the colon would break the structure.',
        D:'An opening dash demands a closing dash. Here the close is a comma → mixed punctuation, incorrect.'
      },
      tip:'Cover the aside with your finger: the sentence still has to work. And the opening and closing punctuation must be TWINS (comma–comma or dash–dash).'
    },
    {
      id:'RW-002', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Sentence boundaries: semicolon vs. comma splice',
      passage:"Some deep-sea fish produce their own light through chemical reactions in specialized %BLANK% others rely on colonies of glowing bacteria housed in organs near their eyes.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'cells; while', B:'cells,', C:'cells;', D:'cells, however,'},
      correct:'C',
      expCorrect:'There are two independent clauses: "Some deep-sea fish produce…" and "others rely…". The semicolon is the correct way to join them without a conjunction.',
      expWrong:{
        A:'A ";" has to sit between two independent clauses, but "while others rely…" is subordinate → it creates a fragment.',
        B:'Coma sola entre dos oraciones completas = comma splice.',
        D:'"however" between commas can NOT join two independent clauses; you would need "; however," → as written, it is still a comma splice.'
      },
      tip:'The period test: if you can drop in a period and both halves are complete sentences, a ";" is valid there.'
    },
    {
      id:'RW-003', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Colon introducing a list',
      passage:"Before departing for the 1907 expedition, the crew packed everything its members would need for six months on the %BLANK% dried provisions, fur-lined sleeping bags, spare sled runners, and a portable stove.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'ice;', B:'ice:', C:'ice,', D:'ice'},
      correct:'B',
      expCorrect:'Before the colon there is a complete independent clause ("the crew packed everything… on the ice"), and what follows is the list that explains it. That is exactly the job of a colon.',
      expWrong:{
        A:'A semicolon needs an independent clause after it; a list is not one.',
        C:'A comma cannot connect a complete sentence to a loose list like this.',
        D:'With no punctuation it fuses: "on the ice dried provisions…" makes no sense.'
      },
      tip:'Colon = only after a COMPLETE sentence. If what comes before it cannot end in a period, the colon is wrong.'
    },
    {
      id:'RW-004', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'No punctuation between subject and verb',
      passage:"The theory that modern birds evolved from small feathered %BLANK% supported by a series of remarkable fossil discoveries in northeastern China.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'dinosaurs, is', B:'dinosaurs; is', C:'dinosaurs is', D:'dinosaurs\u2014is'},
      correct:'C',
      expCorrect:'The full subject is "The theory that modern birds evolved from small feathered dinosaurs" and its verb is "is". The "that…" clause is ESSENTIAL (it defines which theory), so it takes no commas — and you never split a subject from its verb with a single comma, dash or semicolon.',
      expWrong:{
        A:'A single comma between subject and verb is wrong, no matter how long the subject is.',
        B:'A ";" demands independent clauses on both sides; "is supported…" is not one.',
        D:'A lone dash here cuts the subject off from its verb — the same error as the comma.'
      },
      tip:'Anti-trap trick: long subjects "ask" for a pause when you read them, but grammar ≠ breathing. Find the subject and the verb and do NOT split them.'
    },
    {
      id:'RW-005', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Rayas en pareja (elemento no esencial)',
      passage:"The city's oldest bridge\u2014built in 1883 and still carrying pedestrian %BLANK% was closed last month after inspectors found cracks in two of its support cables.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'traffic,', B:'traffic;', C:'traffic\u2014', D:'traffic:'},
      correct:'C',
      expCorrect:'The aside "built in 1883 and still carrying pedestrian traffic" opened with a dash, so it must CLOSE with another dash: "bridge—…traffic—was closed."',
      expWrong:{
        A:'It mixes an opening dash with a closing comma → the punctuation around an aside has to match.',
        B:'A ";" does not close asides, and there is no independent clause before it either.',
        D:'A colon does not close an aside that was opened with a dash.'
      },
      tip:'When you see an "orphan" dash before the blank, the answer is almost always the dash that pairs with it. Look for the opening one first.'
    },
    {
      id:'RW-006', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Possessive apostrophes (plural)',
      passage:"Many %BLANK% nests are woven from spider silk and camouflaged with flakes of lichen, making them nearly invisible among the branches.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:"hummingbird's", B:'hummingbirds', C:"hummingbirds's", D:"hummingbirds'"},
      correct:'D',
      expCorrect:'"Many" signals plural → hummingbirds. The nests belong to them → possessive. The possessive of a plural ending in -s is an apostrophe after the s: hummingbirds\u2019.',
      expWrong:{
        A:'Posesivo singular — contradice "Many".',
        B:'Plural with no apostrophe → it does not mark ownership of the "nests".',
        C:'Forma inexistente para plurales regulares terminados en -s.'
      },
      tip:'Two quick questions: is it plural? does it own something? Plural + ownership → s\u2019 (apostrophe at the end).'
    },
    {
      id:'RW-007', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punto y coma en listas complejas',
      passage:"The documentary features interviews with three pioneers of electronic music: Wendy Carlos, who popularized the %BLANK% Delia Derbyshire, who composed haunting scores for early television; and Halim El-Dabh, who experimented with tape recorders in the 1940s.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'synthesizer,', B:'synthesizer:', C:'synthesizer;', D:'synthesizer\u2014'},
      correct:'C',
      expCorrect:'When the items in a list contain commas of their own ("Wendy Carlos, who popularized…"), the items are separated with semicolons. The other two items already use ";" — the parallelism hands you the answer.',
      expWrong:{
        A:'With commas you lose the separation between items: it all turns into comma soup you cannot read.',
        B:'There is already a colon introducing the list; another colon inside the list has no job to do.',
        D:'The dash does not follow the pattern of the list (the other items use ";").'
      },
      tip:'In complex lists, copy the pattern: look at how the OTHER items are separated and use the same thing.'
    },
    {
      id:'RW-008', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'No comma between a verb and its object',
      passage:"While mapping the forest floor, researchers %BLANK% the fungal network beneath the soil can transmit electrical signals between trees located dozens of meters apart.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'discovered, that', B:'discovered that', C:'discovered that,', D:'discovered: that'},
      correct:'B',
      expCorrect:'"that the fungal network… apart" is the direct object of "discovered". Nothing separates a verb from its object clause: "researchers discovered that…" takes no punctuation.',
      expWrong:{
        A:'A comma between the verb and “that” → it cuts the verb off from its object.',
        C:'Comma between "that" and its clause → same error, one spot later.',
        D:'A colon needs a complete independent clause before it; "researchers discovered" is left hanging without its object.'
      },
      tip:'Golden rule: NOTHING between a verb and its “that”. If in doubt, read it without the comma — if it flows, leave it out.'
    },
    {
      id:'RW-009', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Colon (one clause elaborating another)',
      passage:"Octopuses have a remarkably decentralized nervous %BLANK% of their neurons are located in their arms rather than in their central brain.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'system, two-thirds', B:'system two-thirds', C:'system and two-thirds', D:'system: two-thirds'},
      correct:'D',
      expCorrect:'There are two independent clauses and the second one EXPLAINS the first (why the system is "decentralized"). A colon can join two independent clauses when the second elaborates on or illustrates the first.',
      expWrong:{
        A:'Coma sola entre dos independientes = comma splice.',
        B:'No punctuation = fused sentence (run-on).',
        C:'"and" joining two independent clauses needs a comma BEFORE it: ", and". Without the comma it is wrong on the SAT.'
      },
      tip:'A colon is not only for lists: it also joins two sentences when the second one answers "how so?" about the first.'
    },
    {
      id:'RW-010', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Comma after an introductory subordinate clause',
      passage:"Although the medieval manuscript was badly damaged in the 1966 %BLANK% conservators managed to recover nearly all of its original text using ultraviolet imaging.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'flood;', B:'flood.', C:'flood,', D:'flood'},
      correct:'C',
      expCorrect:'"Although… flood" is an introductory subordinate clause; when it comes first, it is separated from the main clause with a comma.',
      expWrong:{
        A:'El ";" exige independiente + independiente; "Although… flood" es dependiente.',
        B:'The period turns “Although… flood.” into a fragment with no main verb.',
        D:'It is missing the comma required after an introductory clause of this kind.'
      },
      tip:'If the sentence starts with Although / Because / When / While… → comma when that clause ends, period. No ";" and no ".".'
    }
  ]
});
