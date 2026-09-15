/* SAT Studio question set — Reading & Writing: Conventions — Brutal (BCV-01 to BCV-12) */
window.SAT_SETS.push({
  id: 'rw-brutal-conventions',
  title: 'Conventions — Brutal',
  section: 'rw',
  level: 'Extreme',
  description: 'Twelve conventions items in which the tempting answer is punctuation that is perfectly correct in general and wrong in this particular sentence.',
  minutes: 16,
  questions: [
    {
      id:'BCV-01', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Subject–verb agreement across two relative clauses',
      passage:"The rows of cast-iron columns that hold up the market's vaulted glass roof and that were forged in a single Belgian %BLANK% never been replaced, although the glass above them has been reglazed twice.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'foundry has', B:'foundry, have', C:'foundry have', D:'foundry having'},
      correct:'C',
      expCorrect:'Delete the "of…" phrase and both "that…" clauses and the skeleton is "The rows… have never been replaced." The subject is "The rows" (plural), so the auxiliary is plural: "have". Nothing at all goes between that subject and its verb.',
      expWrong:{
        A:'"has" is singular, and it agrees with the noun sitting closest to the blank, "a single Belgian foundry". That noun is buried inside a relative clause, and a relative clause never supplies the subject of the main verb. The subject is still "The rows".',
        B:'The comma is correctly formed and would be right if it were closing a non-essential clause. But both "that…" clauses here are essential — they tell you which rows — so no comma ever opened, and there is nothing for this one to close. All it does is split the subject "The rows" from its verb.',
        D:'"having" is not a finite verb. "The rows of cast-iron columns… having never been replaced" has no main verb at all, so the sentence collapses into a fragment.'
      },
      tip:'To find the subject, delete every "of…" phrase and every "that / which / who…" clause and agree with what is left — and never let a comma stand between that subject and its verb, however many words separate them.'
    },
    {
      id:'BCV-02', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Agreement with a collective noun followed by "of the…"',
      passage:"The board of trustees that oversees the city's three remaining public %BLANK% only twice a year, a schedule that critics blame for the months-long delays in funding urgent repairs.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'libraries meet', B:'libraries, meets', C:'libraries, meet', D:'libraries meets'},
      correct:'D',
      expCorrect:'The subject is "The board" — a collective noun, which American usage treats as one unit — and everything from "of trustees" to "libraries" is modification wedged between it and its verb. One board, one singular verb: "meets". The clause "that oversees… libraries" is essential (it tells you which board), so it takes no commas and the subject runs straight into its verb.',
      expWrong:{
        A:'"meet" is plural and agrees with "libraries" — or with "trustees", the other plural in the way. Neither is the subject: what meets twice a year is the board.',
        B:'The verb is right and the comma is not. A comma before a verb is legitimate only when it closes an aside that a comma opened; "that oversees the city’s three remaining public libraries" is an essential clause with no opening comma, so this one only cuts "The board" off from "meets".',
        C:'Both problems at once: the plural verb agrees with "libraries" instead of "board", and the comma splits the subject from the verb.'
      },
      tip:'A collective noun (board, committee, team, jury, company) is singular in American usage, and the "of…" phrase that follows it never takes over as the subject. Cover everything from "of" to the verb and look at what remains.'
    },
    {
      id:'BCV-03', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Pronoun–antecedent agreement: "neither" and a single company',
      passage:"Neither of the two firms bidding on the rail extension will say whether %BLANK% own crews would be idled by another six-month delay.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'their', B:'its', C:'it’s', D:'they’re'},
      correct:'B',
      expCorrect:'The word being referred back to is "Neither", the subject of "will say", and neither is always singular no matter how plural the "of…" phrase after it sounds. A single firm is also a single thing, and American usage calls a company "it". The possessive that matches is "its", with no apostrophe.',
      expWrong:{
        A:'"their" agrees with "the two firms", the plural noun closest to the blank — but that noun sits inside the "of…" phrase and cannot be the antecedent. "Neither" is what the pronoun points back to, and it is singular.',
        C:'"it’s" is a perfectly good word, which is exactly why it is the trap: it is the contraction of "it is" or "it has". Expand it and the sentence reads "whether it is own crews would be idled". A possessive before a noun never takes an apostrophe.',
        D:'"they’re" is the contraction of "they are", so it makes both mistakes at once — plural where the antecedent is singular, and a contraction where the slot needs a possessive.'
      },
      tip:'Each, either, neither, every, and anyone stay singular forever, and so does one company or one team. Test any apostrophe form by expanding it out loud: if "it is own crews" breaks the sentence, you needed the possessive.'
    },
    {
      id:'BCV-04', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Plural possessive vs. plain plural',
      passage:"In the group portrait of eleven Antwerp merchants, two years of conservation work went into stripping a varnish that had darkened the %BLANK% faces beyond recognition.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'merchants', B:'merchant’s', C:'merchants’', D:'merchants,'},
      correct:'C',
      expCorrect:'The faces belong to the merchants, and the portrait holds eleven of them, so the noun has to be plural AND possessive. For a plural that already ends in -s, the apostrophe goes after the s: "merchants’ faces".',
      expWrong:{
        A:'"merchants faces" is two nouns stacked with nothing to show ownership. Plural is not the same as possessive, and this choice supplies only the plural.',
        B:'"merchant’s" is a flawless singular possessive — which is what makes it the trap. It says the faces belong to one merchant, but the sentence has already counted eleven, so the apostrophe is on the wrong side of the s.',
        D:'A comma is the right mark for fencing off a non-essential element or separating items in a list, and neither is happening here. "faces" is the very noun the merchants own, and nothing may stand between a possessor and the thing possessed.'
      },
      tip:'Two questions, in this order: how many owners, and does something belong to them? Plural owner plus ownership means write the plural first and then add the apostrophe ("merchants" → "merchants’"), never "merchant’s".'
    },
    {
      id:'BCV-05', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'whose vs. who’s, its vs. it’s, inside a non-essential clause',
      passage:"The bristlecone pine, %BLANK% wood is dense enough to resist rot for thousands of years, adds fewer than three centimeters of new growth in a decade.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'whose', B:'who’s', C:'its', D:'it’s'},
      correct:'A',
      expCorrect:'"…wood is dense enough…" is a clause that has to be hooked onto "The bristlecone pine", and the word that both owns "wood" and does the hooking is the relative pronoun "whose". "Whose" is not reserved for people: it is the possessive of "which" as well as of "who".',
      expWrong:{
        B:'"who’s" is the contraction of "who is" or "who has", so the sentence reads "the bristlecone pine, who is wood is dense enough…". A contraction cannot own a noun.',
        C:'"its" is the right possessive for a tree, but it is not a relative pronoun and cannot attach the clause to anything. Read it in: "…, its wood is dense enough…, adds…" drops a complete second sentence between two commas. Commas around an added phrase are correct in general; they cannot hold a full clause.',
        D:'"it’s" means "it is", which gives "the bristlecone pine, it is wood is dense enough…", and it repeats the structural mistake in C by using a personal pronoun where a relative pronoun is needed.'
      },
      tip:'whose = possession, who’s = "who is"; its = possession, it’s = "it is". Expand every apostrophe form out loud, and remember that when the clause has to attach to the noun in front of it, only "whose" can possess and connect at the same time.'
    },
    {
      id:'BCV-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Sentence boundaries with a conjunctive adverb',
      passage:"The first two rounds of testing turned up almost no measurable antibody %BLANK% T-cell response, which the team had not thought to measure until the third round, was strong enough to justify another year of funding.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'response, however, the', B:'response; however, the', C:'response: however, the', D:'response; however the'},
      correct:'B',
      expCorrect:'Both halves are complete sentences: "The first two rounds of testing turned up almost no measurable antibody response" and "the T-cell response… was strong enough to justify another year of funding". "However" is a conjunctive adverb, so the pattern is sentence + semicolon + however + comma + sentence.',
      expWrong:{
        A:'This is the repair almost every student reaches for, and it is a comma splice. Wrapping "however" in commas does not promote it to a conjunction; two complete sentences are still being held together by a lone comma.',
        C:'A colon after a complete sentence is correct in general — but only when what follows spells out, explains, or delivers on what came before. Here the second half reverses the first (almost no antibody response, and yet enough to win another year of money), and "however" announces that reversal. The colon promises an elaboration this sentence never gives.',
        D:'The semicolon is right; the comma after "however" is missing. A conjunctive adverb opening a clause is followed by a comma: "; however, the T-cell response…".'
      },
      tip:'however, therefore, moreover, and nevertheless are adverbs, not conjunctions. Between two complete sentences they take "; adverb," — semicolon before, comma after. A colon belongs in that slot only when the second sentence explains the first.'
    },
    {
      id:'BCV-07', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Stacked non-essential elements: closing the outer pair',
      passage:"The typeface on the city's street signs (a 1958 design that its creator, a sign painter with no formal training, never bothered to %BLANK% has been copied by forty other municipalities without a single license being paid.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'copyright,', B:'copyright—', C:'copyright', D:'copyright)'},
      correct:'D',
      expCorrect:'Two interruptions are stacked here. The inner one, "a sign painter with no formal training", is already fenced by a matching pair of commas. The outer one opened with "(" and has never been closed, so the blank has to supply the closing parenthesis: "(a 1958 design… never bothered to copyright) has been copied…".',
      expWrong:{
        A:'A comma is the right mark for closing an aside, which is why it looks reasonable — but the aside it would close was opened with a parenthesis, and the inner comma pair is already complete. Pick this and the "(" is left with no partner anywhere in the sentence.',
        B:'A dash closes an aside that a dash opened. Pairing an opening parenthesis with a closing dash leaves both marks unmatched.',
        C:'With nothing to close it, the parenthesis swallows the rest of the sentence and the main verb "has been copied" ends up trapped inside the aside.'
      },
      tip:'Asides come in matched pairs — ( … ) or — … — or , … , — and pairs never cross. When interrupters are stacked, close the inner pair first, then look back for the outer mark still hanging open.'
    },
    {
      id:'BCV-08', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Essential vs. non-essential: the meaning decides',
      passage:"Hollis owns three bookshops in the city, and the %BLANK% closes for the whole of August while its owner walks in the mountains.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'shop on Fen Street', B:'shop, on Fen Street,', C:'shop (on Fen Street)', D:'shop, on Fen Street'},
      correct:'A',
      expCorrect:'The first half of the sentence says there are three shops, so "on Fen Street" is the information that picks out which one closes in August. Information that identifies is essential, and essential modifiers take no punctuation at all.',
      expWrong:{
        B:'The comma pair is correctly formed, and it would be the right answer if Hollis owned one shop — the address would then be a bonus detail. The sentence has just counted three, so commas would recast the one phrase that identifies the shop as something the reader may skip.',
        C:'Parentheses are a correctly formed pair too, and they do the same job the commas do: they tell the reader the phrase can be skipped. With three shops in play, the address is the one thing that cannot be skipped.',
        D:'This opens an aside and never closes it. Even on the reading where the phrase were non-essential, the second comma would still be missing before "closes".'
      },
      tip:'Ask what the sentence still means with the modifier deleted. If you can no longer tell which one is being discussed, the modifier is essential → no commas, no dashes, no parentheses. Count the nouns first: "three bookshops" is the word that decides this item.'
    },
    {
      id:'BCV-09', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Colon only after a complete sentence',
      passage:"The reason the bridge's deck began to twist in a crosswind that no one on the design team had thought %BLANK% a set of stiffening trusses had been cut from the final plans to save money.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'unusual:', B:'unusual was that', C:'unusual;', D:'unusual,'},
      correct:'B',
      expCorrect:'Everything before the blank is one long noun phrase — "The reason [the deck began to twist in a crosswind that no one had thought unusual]" — and a noun phrase is not a sentence, because it has no main verb. The blank has to supply that verb, and "was that" does it: "The reason… was that a set of stiffening trusses had been cut from the final plans."',
      expWrong:{
        A:'The colon rule is real: a colon goes after a complete sentence and introduces what spells it out. This choice obeys the rule everywhere except where it counts. Cover the colon and read the left side: "The reason the deck began to twist… unusual" has a subject and no verb. It only sounds finished because so many words are packed into it.',
        C:'A semicolon needs an independent clause on both sides. The right side qualifies; the left side is the same verbless noun phrase, so the semicolon has nothing to join.',
        D:'A comma leaves the noun phrase stranded: "The reason… unusual, a set of stiffening trusses had been cut…" gives "The reason" no verb of its own and splices a full sentence onto it.'
      },
      tip:'Before accepting a colon or a semicolon, cover it and hunt for the main VERB on the left, not just for length. "The reason X happened" is a subject still waiting for its verb, so what it needs is "was that", not a punctuation mark.'
    },
    {
      id:'BCV-10', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Logical comparison: "that of" vs. "those of"',
      passage:"Because the ridge blocks almost every storm that rolls in off the water, the annual rainfall recorded at the upper gauge is more than %BLANK% lowland town three kilometers away.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'double that of the', B:'double those of the', C:'double, that of the', D:'double the'},
      correct:'A',
      expCorrect:'A comparison has to set like against like. What is being measured on both sides is rainfall, not rainfall against a town, so the second half needs a stand-in for "the annual rainfall": the singular "that of the lowland town".',
      expWrong:{
        B:'"those" is the plural stand-in. The noun it replaces here is "rainfall", which is singular, so the substitute has to be "that". Save "those of" for a plural first half ("the rainfall totals of the upper gauge… those of the lowland town").',
        C:'The comma is correctly formed and would be right if "that of the lowland town" were an aside restating the figure. It is not: it is the second half of "more than double X", and nothing may stand between a comparative and the thing it is compared with.',
        D:'"more than double the lowland town" compares a quantity of rainfall with a town. The two sides of a comparison have to be the same kind of thing, and this choice drops the words that made them match.'
      },
      tip:'At every "than" and every "as", say out loud what is being compared with what. If the second item turns out to be a place, a person, or a year instead of the measurement, insert "that of" (singular) or "those of" (plural) to put both halves on the same footing.'
    },
    {
      id:'BCV-11', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Dangling participial phrase: the fix that still dangles',
      passage:"Having spent three winters photographing the colony from a blind on the ice, %BLANK% almost a kilometer from where the survey maps had placed them.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'the nests were finally found by Okafor', B:'it was Okafor who finally found the nests', C:'Okafor finally found the nests', D:'the nests, found at last by Okafor, were'},
      correct:'C',
      expCorrect:'An opening participial phrase attaches to whatever noun the main clause puts first, as its subject. Okafor is the one who spent the three winters, so "Okafor" has to be that subject — and writing the clause in the active voice puts the name exactly there: "…on the ice, Okafor finally found the nests almost a kilometer from…".',
      expWrong:{
        A:'The passive voice moves "the nests" into the subject slot, so the sentence now claims that the nests spent three winters photographing the colony from a blind. Naming Okafor later in a by-phrase does not repair it: the participle looks at the subject, never at the agent.',
        B:'This is the fix that looks like a fix — Okafor is now in the sentence, early and emphasized. But the grammatical subject is the dummy "it", not Okafor, so the opening phrase still has nothing to attach to and the modifier still dangles.',
        D:'The punctuation here is flawless: "found at last by Okafor" is a non-essential phrase correctly fenced by a matching pair of commas, and that is precisely the trap. Punctuation was never the problem. The subject is still "the nests", so the opening phrase still says the nests did the photographing.'
      },
      tip:'After an opening "-ing" or "-ed" phrase, the very next thing has to be the one performing it. Check the SUBJECT of the main clause, not whether the name appears somewhere: the passive, "it was X who…", and a tidy pair of commas all leave the modifier dangling.'
    },
    {
      id:'BCV-12', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
      skill:'Verb tense in a sequence of past events',
      passage:"When the geologists reached the summit in 1911, the glacier that their predecessors had mapped as a single unbroken sheet forty years %BLANK% into three separate tongues of ice.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'earlier had already split', B:'earlier has already split', C:'earlier, had already split', D:'earlier split'},
      correct:'A',
      expCorrect:'The time frame is set long before the blank, by "in 1911" in the opening clause. The splitting happened before that arrival — "already" says so outright — and the earlier of two past events takes the past perfect: "had already split".',
      expWrong:{
        B:'"has already split" is the present perfect, which ties an event to right now. The opening clause anchors this sentence in 1911, so the present is not available to it.',
        C:'The comma is correctly formed, and a closing comma is how a non-essential clause ends — but "that their predecessors had mapped… forty years earlier" is an essential clause introduced by "that", and essential clauses take no comma at either end. All this one does is separate the subject "the glacier" from its verb.',
        D:'The simple past puts the splitting at the same moment as the 1911 arrival, which contradicts "already". When one past event happens before another past event, the earlier one moves back into the past perfect.'
      },
      tip:'Find the anchor date first — it is usually several words away, in an opening clause — and then place every event against it: earlier than the anchor → had + past participle; at the anchor → simple past; connected to now → present perfect.'
    }
  ]
});
