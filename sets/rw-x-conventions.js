/* SAT Studio question set — Reading & Writing EXTREME: Conventions (XC-01 to XC-12) */
window.SAT_SETS.push({
  id: 'rw-x-conventions',
  title: 'Extreme — Conventions',
  section: 'rw',
  level: 'Extreme',
  description: 'Hard-Module-2 level: stacked interrupters, inverted subjects, reduced relatives, and citation punctuation.',
  minutes: 15,
  questions: [
    {
      id:'XC-01', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Stacked interrupters: closing the aside with an em dash',
      passage:"The architect Zaha Hadid—whose design for the Vitra Fire Station, completed in 1993, was her first major built %BLANK% that a building could be as dynamic as the motion around it.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'work—insisted', B:'work, insisted', C:'work insisted', D:'work; insisted'},
      correct:'A',
      expCorrect:'The big aside opened with an em dash after “Hadid”, so it HAS to close with another em dash. Notice that inside that aside lives a smaller one between commas (“, completed in 1993,”); that comma pair is already complete, and what is missing is closing the outer layer: “—whose design… was her first major built work—insisted…”. The skeleton reads: “The architect Zaha Hadid… insisted that…”.',
      expWrong:{
        B:'It mixes the delimiters: you opened the aside with an em dash and you cannot close it with a comma. Dash opens → dash closes.',
        C:'With no punctuation, the aside never closes and “work insisted” fuses the relative clause into the main verb.',
        D:'A semicolon demands an independent sentence after it, and “insisted that a building…” with no subject is not one; besides, it leaves the opening dash without a partner.'
      },
      tip:'With stacked asides, identify each layer: the dash layer closes with a dash, the comma layer closes with a comma. They are never swapped.'
    },
    {
      id:'XC-02', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Stacked interrupters: internal comma inside a dash parenthetical',
      passage:"The astronomer Vera Rubin—whose measurements of spiral galaxies, made with a spectrograph she had helped %BLANK% some of the first persuasive evidence for dark matter—remained skeptical of easy fame throughout her career.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'design—provided', B:'design, provided', C:'design provided', D:'design; provided'},
      correct:'B',
      expCorrect:'The blank falls INSIDE the big dash aside. Within it there is a small comma aside: “, made with a spectrograph she had helped design,”. That layer opened with a comma after “galaxies”, so it closes with a comma, and then the verb of the relative clause follows: “whose measurements… provided some of the first… evidence”. The em dash closing the outer layer already sits after “dark matter”.',
      expWrong:{
        A:'A dash here would close the big aside prematurely and leave three loose dashes in the sentence; the layer due to close is the comma one, not the dash one.',
        C:'The phrase “made with a spectrograph…” opened with a comma; without the closing comma, the pair is unbalanced.',
        D:'A semicolon cannot close a comma parenthesis or live inside an aside; besides, “provided some of the first…” is not an independent sentence.'
      },
      tip:'Draw the layers: —dashes— on the outside, ,commas, on the inside. The blank belongs to whichever layer is open at that exact point.'
    },
    {
      id:'XC-03', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Stacked interrupters: the opening that pairs with the closing dash',
      passage:"The political economist Elinor %BLANK% whose fieldwork on shared resources, conducted in fisheries and irrigation districts on several continents, overturned a long-standing assumption about the “tragedy of the commons”—became the first woman to receive the Nobel Memorial Prize in Economic Sciences.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'Ostrom,', B:'Ostrom', C:'Ostrom—', D:'Ostrom;'},
      correct:'C',
      expCorrect:'Read to the end before deciding: after “commons” there is an em dash CLOSING an aside. A dash close demands a dash open, so the blank has to open it: “Elinor Ostrom—whose fieldwork…—became…”. The commas around “conducted in fisheries… continents” are the inner layer and are already complete.',
      expWrong:{
        A:'A comma to open and a dash to close is a mismatched pair; the delimiters of one aside have to be twins.',
        B:'With no punctuation the aside never opens, and the closing dash after “commons” is left orphaned.',
        D:'A semicolon separates independent sentences; “whose fieldwork… overturned…” is a relative clause, not a complete sentence.'
      },
      tip:'On questions about opening an aside, jump to the end of the aside and see what it closes with: that same mark is the one that opens it.'
    },
    {
      id:'XC-04', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Inverted subject: agreement with the postponed subject',
      passage:"Among the artifacts recovered from the wreck of a sixteenth-century merchant vessel %BLANK% a bronze astrolabe engraved with its maker's initials, an instrument that has allowed historians to date the sinking with unusual precision.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'were', B:'are', C:'have been', D:'was'},
      correct:'D',
      expCorrect:'The sentence is inverted: the subject is NOT “artifacts” (that noun lives inside the prepositional phrase “Among…”), but what comes AFTER the verb: “a bronze astrolabe”, singular. Reorder it: “A bronze astrolabe… was among the artifacts recovered…”. Singular + narrative past → “was”.',
      expWrong:{
        A:'“Were” agrees with “artifacts”, but that noun is the object of the preposition and cannot be the subject.',
        B:'“Are” fails twice: plural with the wrong noun and present tense where the account of the discovery calls for the past.',
        C:'“Have been” is also plural; the real subject (“a bronze astrolabe”) is singular.'
      },
      tip:'If the sentence opens with a prepositional phrase (“Among…”, “Beneath…”), flip it around: the subject is usually after the verb.'
    },
    {
      id:'XC-05', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Agreement across reduced relative clauses',
      passage:"The set of instructions distributed to the volunteers who staffed the region's forty polling stations %BLANK% revised twice before election day to close loopholes that observers had flagged.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'was', B:'were', C:'have been', D:'are being'},
      correct:'A',
      expCorrect:'Peel the layers: “distributed to the volunteers…” is a reduced relative clause (= “that was distributed…”) and “who staffed… stations” describes the volunteers, not the subject. The head of the subject is “The set”, singular. “The set… was revised twice” is the only combination that agrees and keeps the past tense.',
      expWrong:{
        B:'“Were” agrees with “instructions”, “volunteers” or “stations”: pure plural magnets sitting inside modifiers, not in the head of the subject.',
        C:'“Have been” is plural, and the time frame (“before election day”, “had flagged”) calls for the simple past, not the present perfect.',
        D:'“Are being” is plural and present progressive; the revision already happened.'
      },
      tip:'Cross out anything starting with a participle (“distributed…”, “collected…”) or with “who/that”: whatever survives on the left is the real subject.'
    },
    {
      id:'XC-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Postponed subject after an initial participial phrase',
      passage:"Tucked between the pages of the ledgers kept by the expedition's quartermaster %BLANK% letters that were never sent, along with a hand-drawn map of the coastline the crew had charted.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'was', B:'were', C:'is', D:'sits'},
      correct:'B',
      expCorrect:'Another inversion: “Tucked between the pages…” is an opening participial phrase and the subject comes after the verb: “letters”, plural. Reordered: “Letters that were never sent were tucked between the pages…”. Plural + past → “were”. Careful: “ledgers” and “quartermaster” are decoys inside the opening phrase.',
      expWrong:{
        A:'“Was” agrees with “quartermaster” or with “map”, but the postponed subject is “letters”, plural.',
        C:'“Is” is singular and present; the subject is plural and the account is in the past (“were never sent”, “had charted”).',
        D:'“Sits” is singular; “letters sits” breaks agreement no matter the word order.'
      },
      tip:'The verb coming before the subject does not change the rule: agree with what comes after, not with the decorative opening phrase.'
    },
    {
      id:'XC-07', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Restrictive title: no commas when it identifies the work',
      passage:"Many scholars regard the 1929 novel %BLANK% as the most incisive fictional treatment of racial passing in American literature, a judgment that has only strengthened since the book's rediscovery in the 1970s.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'Passing,', B:', Passing,', C:'Passing', D:'Passing—'},
      correct:'C',
      expCorrect:'“The 1929 novel” on its own does not tell you WHICH novel: the title “Passing” is essential (restrictive) information identifying the work, and essential elements take NO commas. Compare: “the 1929 novel Passing” (essential, no commas) vs. “Larsen’s second novel, Passing,” (already identified work, with commas).',
      expWrong:{
        A:'The closing comma treats the title as dispensable, but without it you do not know which novel is meant; on top of that it interrupts the “regard X as Y” structure.',
        B:'Fencing the title in commas implies you could delete it without losing information: here you cannot.',
        D:'The dash also marks extra information; the title is essential and takes no delimiters of any kind.'
      },
      tip:'The deletion test: if removing the title costs the sentence the identity of the work, the title is essential → zero commas.'
    },
    {
      id:'XC-08', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Non-restrictive appositive: the title of an already identified work',
      passage:"Toni Morrison's final %BLANK% returns to the fierce, compressed style of her earliest fiction, distilling a lifetime of themes into fewer than two hundred pages.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'novel God Help the Child', B:'novel, God Help the Child', C:'novel God Help the Child,', D:'novel, God Help the Child,'},
      correct:'D',
      expCorrect:'“Toni Morrison’s final novel” already identifies the work completely (there can only be ONE final novel), so the title is a non-essential appositive and sits between TWO commas: “Toni Morrison’s final novel, God Help the Child, returns…”. Delete the title and the sentence still works.',
      expWrong:{
        A:'With no commas you treat the title as essential, but “final novel” is already unique; the comma-free pattern is for cases like “the 1929 novel Passing”.',
        B:'It opens the aside but never closes it: the title ends up glued to the verb (“Child returns”).',
        C:'It closes an aside that never opened; the orphan comma also separates the subject from its verb.'
      },
      tip:'Does the noun already identify the work on its own (final, first, only, possessive + unique)? → title between two commas. Does it not identify it? → no commas.'
    },
    {
      id:'XC-09', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Punctuating titles: restrictive title + non-essential participle',
      passage:"The %BLANK% published just eight months earlier, was quietly retracted after three independent laboratories failed to replicate its key measurement.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'study, “Room-Temperature Superconductivity in Hydrides,”', B:'study “Room-Temperature Superconductivity in Hydrides,”', C:'study “Room-Temperature Superconductivity in Hydrides”', D:'study, “Room-Temperature Superconductivity in Hydrides”'},
      correct:'B',
      expCorrect:'Two rules at once. (1) The title identifies WHICH study → it is essential → NO comma before it: “The study “Room-Temperature…””. (2) “published just eight months earlier” is a non-essential aside: its closing comma is already in the text (before “was”) and the opening one goes right after the title. Result: no comma before the title, comma after it.',
      expWrong:{
        A:'The comma before the title makes it non-essential, but “The study” alone identifies nothing: the title is indispensable.',
        C:'Without the comma after the title, the aside “published… earlier,” closes with a comma but never opens → an unbalanced pair.',
        D:'It gets everything backwards: it puts the comma where it does not belong (before the essential title) and leaves out the one that is needed (to open “published…”).'
      },
      tip:'Split the problem: first decide whether the title is essential (is “the study” alone enough?), then check that the participial aside has BOTH its commas.'
    },
    {
      id:'XC-10', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Dangling modifier with a possessive antecedent',
      passage:"Hoping to preserve her grandmother's handwritten recipes before the ink faded further, %BLANK% and stored the images in three separate digital archives.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'Amara photographed each page of the fragile notebook', B:'the fragile notebook was photographed page by page by Amara', C:"the fragile notebook's pages were photographed by Amara", D:'photographs were taken of each page of the fragile notebook'},
      correct:'A',
      expCorrect:'Who was hoping to preserve the recipes (“Hoping to preserve…”)? A person: Amara. The subject following the opening modifier has to be whoever performs that action, so “Amara photographed…” is the only correct choice. Verify it with the ending: only Amara can have “stored the images”; a notebook does not store digital files.',
      expWrong:{
        B:'“The fragile notebook was photographed” says the NOTEBOOK was hoping to preserve the recipes: a dangling modifier. And note: mentioning Amara at the end does not rescue it.',
        C:'The same problem with “the notebook’s pages”: pages do not hope for anything, and the second half (“and stored the images”) is left with no logical subject.',
        D:'“Photographs were taken” leaves the modifier dangling (the photographs were not hoping to preserve anything) and nobody performs “stored”.'
      },
      tip:'Opening modifier + comma → ask yourself “who does this?” and demand that THAT person be the first word after the comma.'
    },
    {
      id:'XC-11', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Logical comparison: “than that of” vs. “than those of”',
      passage:"At more than three meters from tip to tip, the wingspan of the wandering albatross is greater %BLANK% enabling the bird to glide for hours without a single flap.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'than any other seabird,', B:'than those of any other seabird,', C:"than any other seabird's wingspans,", D:'than that of any other seabird,'},
      correct:'D',
      expCorrect:'It compares WINGSPANS, not birds. “The wingspan” is singular, so its stand-in has to be singular too: “that of any other seabird” = “the wingspan of any other seabird”. A parallel comparison in the singular: wingspan against wingspan.',
      expWrong:{
        A:'It compares a wingspan with a whole BIRD: an illogical comparison (apples against birds, literally).',
        B:'“Those” is plural, but “any other seabird” is singular and has ONE wingspan; the plural breaks the parallel with “the wingspan”.',
        C:'“Any other seabird’s wingspans” gives one bird several wingspans; each bird has one.'
      },
      tip:'In comparisons, match category AND number: singular “that of”, plural “those of”. If the left side says “the wingspan”, the right side needs another “wingspan”.'
    },
    {
      id:'XC-12', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Plural possessive inside a parenthetical',
      passage:"The observatory's archive—a collection that includes several nineteenth-century %BLANK% earliest glass photographic plates—was fully digitized last year after decades of neglect.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:"astronomer's", B:'astronomers', C:"astronomers'", D:"astronomers's"},
      correct:'C',
      expCorrect:'“Several” forces the plural: several astronomers. And the plates BELONG to them, so you need a possessive. A plural ending in -s → apostrophe after the s: “several… astronomers’ earliest glass photographic plates”. The blank sitting inside a dash aside does not change the rule; do not let the outer punctuation distract you.',
      expWrong:{
        A:'“Astronomer’s” is a SINGULAR possessive, but “several” requires the plural.',
        B:'“Astronomers” is a plural with no possessive: “astronomers earliest plates” leaves two nouns colliding with no relationship of ownership.',
        D:'“Astronomers’s” does not exist: regular plurals in -s form the possessive with the final apostrophe alone.'
      },
      tip:'Two quick questions: how many? (several → plural) and do they own something? (yes → apostrophe). Plural in -s + possession = s’.'
    }
  ]
});
