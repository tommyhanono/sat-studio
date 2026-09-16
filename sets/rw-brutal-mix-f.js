/* SAT Studio question set — Reading & Writing: Brutal Mix (BMF-01 a BMF-19) */
/* Relleno medido para tres destrezas oficiales que venian cortas de margen en
   los simulacros brutales. No es un set tematico: el reparto ES el encargo.
   6 Form, Structure, and Sense (Standard English Conventions)
   7 Words in Context (Craft and Structure)
   6 Transitions (Expression of Ideas)
   19 MC, todas difficulty:'Difícil' + extreme:true. Sin tablas ni graficos.
   OJO con la taxonomia: en las seis de Conventions no puede aparecer la palabra
   "clause" (ni ninguna de la lista de Boundaries) en `skill` ni en los primeros
   160 caracteres del `stem`, porque Boundaries se prueba antes que Form. */
(function(){
  window.SAT_SETS.push({
    id: 'rw-brutal-mix-f',
    title: 'Reading & Writing — Brutal Mix',
    section: 'rw',
    level: 'Extreme',
    description: 'Nineteen brutal Reading and Writing questions in three blocks: grammar that hides the subject, near-synonyms that split on connotation, and transitions whose two closest options come from the same logical family.',
    minutes: 22,
    questions: [

      /* ── Form, Structure, and Sense (01-06) ──────────────────────────── */
      {
        id:'BMF-01', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — subject-verb agreement with “the number of”',
        passage:"Because a dry spring can keep the fungus from fruiting at all, the number of mushroom caps that Ivorne Sattler counts along her transect in a given autumn %BLANK% a poor guide to how much fungal tissue is spreading under the litter.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'are', B:'have been', C:'is', D:'were'},
        correct:'C',
        expCorrect:'The subject is “the number”, and “the number” stays singular however large the count: the number of caps IS a poor guide. Everything after it — “of mushroom caps that Ivorne Sattler counts along her transect in a given autumn” — only tells you which number, and none of it can hand the verb over to “caps”. Note the pair the test keeps setting against each other: “a number of caps ARE”, because there the words work as a plural quantifier, but “THE number of caps IS”, because there the number itself is the thing being judged.',
        expWrong:{
          A:'“are” is plural and agrees with “caps”, the noun sitting closest to the blank. “Caps” is the object of “of” and can never be the subject; switching from “a number of” to “the number of” is exactly what changes the verb.',
          B:'“have been” is plural, so it fails for the same reason “are” does, and the present perfect adds a second error: it turns a standing judgment about the method into a stretch of time that has now finished.',
          D:'“were” is plural and past. Beyond the number error, the sentence states what the count is worth in general — “a poor guide” — not what it happened to be worth on some past occasion.'
        },
        tip:'“A number of” is a plural quantifier and takes a plural verb; “the number of” makes “number” itself the subject and takes a singular one. Cross out the whole “of…” stretch and read what is left: “the number ___ a poor guide”.'
      },
      {
        id:'BMF-02', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — verb tense sequence and the past perfect',
        passage:"By the time the Longitude Commission announced its award in 1765, Hesper Callowell %BLANK% four sea trials of her improved backstaff, the last of them on a run to Barbados that ended a full year before the announcement.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'completed', B:'had completed', C:'has completed', D:'was completing'},
        correct:'B',
        expCorrect:'Two past events are in play: the award announced in 1765, and the four sea trials. The sentence dates them for you — the last trial “ended a full year before the announcement” — so the trials are the earlier of the two. English marks the earlier of two past events with the past perfect, “had completed”, and the opening frame “By the time X happened” is the standard signal that one is coming.',
        expWrong:{
          A:'“completed” is the simple past, which puts the trials on the same footing as the announcement. That is precisely the information the sentence is at pains to supply: the trials were finished a year before the Commission spoke.',
          C:'“has completed” is the present perfect, which ties a past action to the present moment. Everything in this sentence is fixed in 1765 and earlier, so there is no present for the trials to reach.',
          D:'“was completing” is the past progressive, which would leave the trials still under way when the award was announced. The sentence says the last of them ended a full year before that.'
        },
        tip:'When one past action is explicitly dated before another past action, the earlier one takes “had” + past participle. The giveaway frames are “by the time”, “before”, “by 1765”, and “until”.'
      },
      {
        id:'BMF-03', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — plural possessive against singular possessive and plain plural',
        passage:"Klaas and Pieter Verhoeven cut every punch in the Marnier case between them, and the archive still files the drawings by hand: the %BLANK% notebooks fill one long shelf, and a single apprentice’s trial alphabets fill another.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'brothers’', B:'brother’s', C:'brothers', D:'brothers’s'},
        correct:'A',
        expCorrect:'Two men cut the punches, so the notebooks have more than one owner. Build the form in that order: write the owner as a plural first, “brothers”, and then add the possessive mark to a word that already ends in s — “brothers’”. The sentence even prints the contrast beside the blank: “a single apprentice’s” is one owner and takes ’s, while the notebooks have two owners and take s’.',
        expWrong:{
          B:'“brother’s” is a singular possessive: one owner. The sentence names two, Klaas and Pieter, and says they cut the punches “between them”.',
          C:'“brothers” is a plain plural with no possessive mark, so nothing shows that the notebooks belong to anybody. Read straight through and the sentence claims the notebooks are the brothers.',
          D:'“brothers’s” adds a second s to a plural that already ends in one. A plural ending in s takes the mark alone: brothers’, never brothers’s.'
        },
        tip:'Build a possessive in two steps and never reverse them. First write the owner as it actually stands — “brother” or “brothers” — and only then add the mark: nothing extra if the word already ends in s, ’s if it does not.'
      },
      {
        id:'BMF-04', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — dangling modifier at the head of a sentence',
        passage:"Having measured the loss from the same hillside for eleven straight seasons, %BLANK% that the contour terraces, and not the cover crop sown between them, were holding the topsoil in place.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'the conclusion of Mireia Ocampo was', B:'it became clear to Mireia Ocampo', C:'the terraces suggested to Mireia Ocampo', D:'Mireia Ocampo could conclude'},
        correct:'D',
        expCorrect:'An opening “Having measured…” carries no subject of its own, so it attaches to whatever the main part of the sentence names first. The measuring was done by Mireia Ocampo, so her name has to be the first thing after the comma: “Having measured the loss… for eleven straight seasons, Mireia Ocampo could conclude that the contour terraces… were holding the topsoil in place.”',
        expWrong:{
          A:'“the conclusion of Mireia Ocampo was” puts “the conclusion” in the attaching position, so the sentence reports that a conclusion spent eleven seasons measuring a hillside.',
          B:'“it became clear to Mireia Ocampo” makes the empty “it” the thing that did the measuring. Ocampo survives in the sentence only as the person something became clear to, not as the observer who took the measurements.',
          C:'“the terraces suggested to Mireia Ocampo” hands the eleven seasons of fieldwork to the terraces, which are the object being studied rather than anyone capable of studying.'
        },
        tip:'When a sentence opens with an -ing or -ed phrase, read straight from the comma and ask “who did that?” The very next noun has to be the answer; if it is not, the opening is left dangling no matter how sensible the rest sounds.'
      },
      {
        id:'BMF-05', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — parallel structure across a series of three',
        passage:"The notation that Aurel Bencze devised for the Kolozs company records the weight shift of the dancer, the angle of the working leg, and %BLANK%, three things that film alone had never made legible.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'how long the dancer pauses before the next step', B:'the duration of the pause before the next step', C:'pausing before each step in the phrase', D:'that the pause before the next step is measurable'},
        correct:'B',
        expCorrect:'The three items after “records” have to share one grammatical shape, and the first two set it: “the weight shift of the dancer”, “the angle of the working leg”. Both are a noun followed by an “of” phrase, so the third has to be built the same way — “the duration of the pause before the next step”. Read the verb into each item in turn and all three hold: records the weight shift, records the angle, records the duration.',
        expWrong:{
          A:'“how long the dancer pauses before the next step” is an indirect question, not a noun phrase. It can follow “records” on its own, which is what makes it tempting, but it abandons the shape the first two items established.',
          C:'“pausing before each step in the phrase” switches the third item to an -ing form, so the series runs noun, noun, gerund. It also swaps a measurement for an action, which the other two items are not.',
          D:'“that the pause before the next step is measurable” turns the third item into a full statement, so the notation would be recording a claim rather than a quantity — and neither of the first two items can be read that way.'
        },
        tip:'In a series, say the governing word out loud with each item in turn. If it will not take all of them in the same shape, the odd one is the error, and it is usually planted third, where the ear has already stopped checking.'
      },
      {
        id:'BMF-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil', extreme:true,
        skill:'Form, Structure, and Sense — pronoun agreement with a collective antecedent',
        passage:"The ringing team on the Tavira flats, nine volunteers working in two shifts, publishes a tally every evening; on the night the sanderlings arrived early, %BLANK% before the light failed.",
        stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
        choices:{A:'they posted their count', B:'the volunteers posted its count', C:'it posted its count', D:'it posted their count'},
        correct:'C',
        expCorrect:'The antecedent is “The ringing team”, and the sentence has already settled how that team is being treated: “the ringing team… publishes”, singular. A pronoun standing in for it has to keep the same number, so the pronoun and the possessive both go singular: “it posted its count”. The nine volunteers are there to describe the team, not to replace it.',
        expWrong:{
          A:'“they posted their count” switches the team to plural, contradicting the singular “publishes” earlier in the very same sentence. It is pulled in by “nine volunteers”, the nearest noun, which is describing the team rather than serving as the antecedent.',
          B:'“the volunteers posted its count” makes the doer plural and then attaches a singular “its” to it, so the possessive is left with nothing in the sentence it can agree with.',
          D:'“it posted their count” splits the pair down the middle. The same team cannot be “it” in one half of the phrase and “their” in the other.'
        },
        tip:'Collective nouns — team, committee, foundry, board — are singular in American usage, and whatever number the first verb assigns them, every later pronoun has to keep. Decide once, then hold it across the whole sentence.'
      },

      /* ── Words in Context (07-13) ────────────────────────────────────── */
      {
        id:'BMF-07', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — precision against correctness among near synonyms',
        passage:"Brenninger reported the focal length of every lens she ground to a tenth of a millimeter, a refinement nobody at the Ersby observatory had asked for. That her numbers were %BLANK% was never in doubt; whether they described the lens that actually reached the mounting, rather than the one still on her bench when she wrote them down, was another question entirely.",
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{A:'precise', B:'accurate', C:'truthful', D:'reliable'},
        correct:'A',
        expCorrect:'The sentence establishes exactly one property of the numbers — their fineness of grain, a tenth of a millimeter, finer than anyone wanted — and then suspends the other property on purpose, since whether the figures matched the lens that shipped is “another question entirely”. “Precise” names fineness of measurement and claims nothing about correspondence to the object, so it is the only choice the second half of the sentence does not take back.',
        expWrong:{
          B:'“Accurate” means close to the true value, which is exactly the claim the second half of the sentence puts in question. A figure given to a tenth of a millimeter can be finely stated and still describe the wrong lens.',
          C:'“Truthful” judges the reporter rather than the report. Nothing here suggests Brenninger misrepresented anything; the open question is which lens the figures belong to, not whether she was honest about them.',
          D:'“Reliable” means it can be depended on to hold up, which again is the property the sentence withholds. A number whose referent is uncertain cannot be depended on, however finely it is expressed.'
        },
        tip:'“Precise” and “accurate” split cleanly: precise is about the grain of the measurement, accurate is about its match with reality. When a passage grants one and openly suspends the other, the granted one is the answer.'
      },
      {
        id:'BMF-08', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — connotation in an evaluative passage',
        passage:"The move of the Kerrigane letters into the city archive is usually told as a rescue. The finding aid that the new keeper drew up in 1911, however, %BLANK% two thirds of the correspondence into one line — “family matters, 1840–1867” — and nobody has located an individual letter from those years since.",
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{A:'condensed', B:'consolidated', C:'compressed', D:'collapsed'},
        correct:'D',
        expCorrect:'The paragraph is building a case against the rescue story: hundreds of letters were reduced to a seven-word label, and the loss has turned out to be permanent. “Collapse” is the only verb here that treats the reduction as a failure — the internal structure gives way and what was many becomes one, with nothing left to distinguish the parts.',
        expWrong:{
          A:'“Condensed” is an editorial compliment: it means the essentials were kept and the bulk boiled off. The closing clause says the opposite happened, since what survived is a label and the contents are unfindable.',
          B:'“Consolidated” means scattered things were gathered into one orderly whole, and it credits the keeper with exactly the organizing care the second half of the sentence denies him.',
          C:'“Compressed” is neutral about value and implies the material is still there under pressure, recoverable at full size. The sentence ends by stating that it is not recoverable at all.'
        },
        tip:'When four verbs name the same physical motion, sort them by the verdict each one carries. Ask what the paragraph as a whole is doing — praising, reporting, or indicting — and keep only the word whose built-in judgment matches it.'
      },
      {
        id:'BMF-09', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — the relation a verb takes for granted',
        passage:"Okonkwo is careful to say that the Nsukka potters did not copy the imported enamel wares. They had been firing the same slip-painted forms for two centuries before the first crate came up the river, and they went on firing them afterward; what the imports changed was the range of colors, and nothing else. The new reds and greens, she argues, were %BLANK% onto a tradition that was already whole.",
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{A:'imposed', B:'grafted', C:'transplanted', D:'substituted'},
        correct:'B',
        expCorrect:'To graft is to join new growth onto a living stock that goes on growing as itself, and that is the exact relation Okonkwo insists on: the tradition was “already whole”, the forms and the firing continued unchanged, and the colors were joined to it without displacing anything.',
        expWrong:{
          A:'“Imposed” brings in force from outside and requires somebody doing the forcing. The passage supplies no such party: the colors arrived by trade, and the potters, who “went on firing” exactly as before, are the ones who took them up.',
          C:'“Transplanted” means a whole living thing was lifted out of one ground and set to root in another. That makes the colors the organism and Nsukka the new soil, when the passage says the tradition is the organism and the colors are the addition.',
          D:'“Substituted” means put in place of something removed, and the passage rules out any removal twice over: the forms continued for two more centuries, and the imports changed “the range of colors, and nothing else”.'
        },
        tip:'Verbs of joining smuggle in a relationship. Before you choose, state the relationship the passage actually describes — added to, replaced by, forced on, moved into — and eliminate any word that requires a piece the passage never supplies.'
      },
      {
        id:'BMF-10', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — a technical sense inside a specialized text',
        passage:"The Ardagh basin does not so much store its rain as %BLANK% it. Water that falls on the limestone in March reaches the springs below the escarpment in July, and it arrives at a steady few liters a second rather than in a flood; the rock has never held a great deal at any one moment, and what keeps the valley green in August is the pace at which it lets the water go.",
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{A:'ration', B:'hoard', C:'meter', D:'release'},
        correct:'C',
        expCorrect:'The final clause names what the paragraph cares about — “the pace at which it lets the water go” — and the sentence before it gives that pace in numbers: a steady few liters a second, March to July. “Meter” is the verb for letting something out at a controlled rate, so it is the only choice that carries the timing the passage spends its whole length establishing.',
        expWrong:{
          A:'“Ration” means handing out a scarce supply in fixed allowances, so it needs both a shortage and somebody doing the allotting. The passage grants that the rock holds little, but its subject is the schedule, not scarcity, and limestone decides nothing.',
          B:'“Hoard” means piling up and keeping back, which is a stronger form of the “store” this sentence is rejecting, and it adds a note of greed besides. The basin is defined here by what it gives out.',
          D:'“Release” stops one step short: it names the fact that the water comes out and says nothing about the rate. Rate is the only thing separating this basin from a reservoir, and it is the one thing the rest of the passage measures.'
        },
        tip:'In a technical passage, look for the sentence that states the mechanism in plain words — here, “the pace at which it lets the water go” — and pick the choice whose definition contains that mechanism. A word that is merely true but silent about the mechanism is the trap.'
      },
      {
        id:'BMF-11', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — a word that must not overstate the claim',
        passage:"Marchetti is at pains to say that she is not the first to notice how seldom the lunar-distance method was actually used at sea; three earlier historians remarked on it in passing, and she quotes all three on her opening page. Her contribution is %BLANK%: she counts the entries in eighty logbooks and shows that the method appears in fewer than one crossing in forty.",
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{A:'original', B:'polemical', C:'derivative', D:'evidentiary'},
        correct:'D',
        expCorrect:'The half-sentence after the blank says precisely what she adds: a count, drawn from eighty logbooks, of how often the method actually appears. She supplies proof for a claim other people had already made, and “evidentiary” is the word for a contribution that consists of evidence.',
        expWrong:{
          A:'“Original” claims the idea is new, and the first sentence exists to deny that. She names three predecessors and quotes them before she begins her own argument.',
          B:'“Polemical” requires an opponent and a position under attack. She is agreeing with the historians she cites, and no rival view appears anywhere in the passage for her to fight.',
          C:'“Derivative” means taken over from others with nothing added, which would erase the eighty logbooks. The sentence is naming what she puts in, and what she puts in is a count nobody had made before.'
        },
        tip:'When a passage carefully limits what an author is claiming, the blank almost always names that limit. Read the qualifying sentences first, then reject every choice that claims more ground than the author allowed herself.'
      },
      {
        id:'BMF-12', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — the word the rest of the paragraph requires',
        passage:"Sattler’s article on the Armillaria mats is not, as the summaries have it, a celebration of size. She gives the hectares and the tonnes in a single paragraph near the front and spends the remaining twenty pages on the line where two mats of the same species meet and neither one advances. Her interest throughout is %BLANK%, and the number that reached the newspapers is the one thing in the paper she seems bored by.",
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{A:'spatial', B:'quantitative', C:'taxonomic', D:'ecological'},
        correct:'A',
        expCorrect:'Twenty of the article’s twenty-one pages go to a single question: where the mats stop, and why the boundary between two of them holds. That is a question about position and extent, which is what “spatial” names, and the clause after the blank confirms the reading by discarding the alternative outright.',
        expWrong:{
          B:'“Quantitative” is the reading the final clause was written to block: the hectares and tonnes occupy one paragraph, and the sentence says the famous number bores her.',
          C:'“Taxonomic” would make identification the issue, but the passage removes it in advance — the two mats are “of the same species”, so nothing is being sorted, named, or told apart.',
          D:'“Ecological” is true in the loose sense that any study of a fungus in a forest is ecological, and that looseness is the defect: it names the field instead of the one feature that holds her attention for twenty pages.'
        },
        tip:'A word can be true of a passage and still be wrong, because “most precise” outranks “not false”. Find the narrowest thing the paragraph actually spends its space on and pick the word that names that, not the field it belongs to.'
      },
      {
        id:'BMF-13', type:'mc', domain:'Craft and Structure', difficulty:'Difícil', extreme:true,
        skill:'Words in Context — what a verb presupposes about knowledge',
        passage:"What Bencze’s system cannot record is intention, and he says so on his first page. A dancer reading the score knows the weight, the angle and the count; whether the arm rose because the phrase required it or because the dancer that evening felt like raising it, the score simply %BLANK%. The gap is deliberate — he wanted a document a company could rehearse from, not a portrait of one performance.",
        stem:'Which choice completes the text with the most logical and precise word or phrase?',
        choices:{A:'conceals', B:'omits', C:'withholds', D:'ignores'},
        correct:'B',
        expCorrect:'Bencze built a system that never took intention in at all: he announces the limit on page one, and the closing sentence says he designed the document that way on purpose. “Omit” describes something left out of a record and claims nothing about the record ever having held it, which is the only description the passage supports.',
        expWrong:{
          A:'“Conceals” means hiding what is present. It would require the intention to be sitting somewhere in the notation under a disguise, and the first sentence rules that out: the system “cannot record” it.',
          C:'“Withholds” means keeping back something one has and could hand over, which grants the score both possession of the information and a motive for not sharing it. Bencze’s page never had it to give.',
          D:'“Ignores” means noticing something and treating it as unimportant. The score notices nothing; the decision belongs to Bencze, and the passage frames it as a choice about what the system is for, not as a dismissal.'
        },
        tip:'Verbs about missing information differ in what they assume was there to begin with. Decide first whether the text ever contained the thing — if it never did, only the neutral “leaving out” word survives.'
      },

      /* ── Transitions (14-19) ─────────────────────────────────────────── */
      {
        id:'BMF-14', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
        skill:'Transitions — a cause stated after its effect',
        passage:"The springs below the Ardagh escarpment run at very nearly the same rate in August as in April, which is why the valley has never needed to build a reservoir. %BLANK% the limestone above them takes in four months of rain and lets it out a few liters at a time.",
        stem:'Which choice completes the text with the most logical transition?',
        choices:{A:'Therefore,', B:'Even so,', C:'After all,', D:'Moreover,'},
        correct:'C',
        expCorrect:'The second sentence does not follow from the first — it explains it. The steady springs are the fact being asserted; the behavior of the limestone is the reason that fact is true. “After all” is the transition that introduces a reason offered in support of what was just claimed, with the cause arriving second in the order of sentences.',
        expWrong:{
          A:'“Therefore” points the arrow the wrong way. It would make the limestone’s behavior a consequence of the steady springs, when the geology is what produces the springs rather than the other way round.',
          B:'“Even so” sets the two sentences against each other, so the limestone would have to be an obstacle that the steady flow survives. It is not an obstacle; it is the mechanism that creates the flow.',
          D:'“Moreover” treats the second sentence as an extra fact piled on top of the first. The two are not independent: take the limestone away and the first sentence stops being true.'
        },
        tip:'Before choosing a cause-and-effect transition, say which sentence is the cause. If the cause is printed second, “therefore” and “consequently” are both wrong, and the sentence wants “after all” — the marker for a reason supplied after the claim.'
      },
      {
        id:'BMF-15', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
        skill:'Transitions — example against addition',
        passage:"Ringing has turned up the same surprise at three sites along the Tavira coast: the sanderlings that spend the winter there are not the birds that pass through in spring. %BLANK% the flats at Cacela, where a decade of work has produced fourteen hundred recoveries, have yielded exactly nine birds recorded in both seasons.",
        stem:'Which choice completes the text with the most logical transition?',
        choices:{A:'For example,', B:'In addition,', C:'However,', D:'That is,'},
        correct:'A',
        expCorrect:'The first sentence reports a finding that holds at three sites; the second gives the figures from one of them. A single site standing in for a pattern already said to appear at three is an instance of that pattern, which is what “For example” marks.',
        expWrong:{
          B:'“In addition” would make Cacela a separate fact added onto the finding, but Cacela is one of the three sites the first sentence has already counted. Nothing new is being added to the list.',
          C:'“However” would set the Cacela figures against the claim. Nine birds out of fourteen hundred is the claim, restated in numbers, so the two sentences agree rather than clash.',
          D:'“That is” promises a restatement of the first sentence in different words. The second sentence does not restate it; it supplies a count from one location that the first sentence never mentions.'
        },
        tip:'Ask whether the second sentence is a member of the group the first sentence described or a fact from outside it. Inside the group is “for example”; outside the group is “in addition”. Naming the group first settles it every time.'
      },
      {
        id:'BMF-16', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
        skill:'Transitions — contrast against the academic-sounding addition',
        passage:"The Marnier foundry cut its revival from photographs of printed sheets rather than from the surviving punches, and because the old ink spread into damp paper, the letters came out heavier than anything Aubriot ever cut. The foundry’s own specimen book admits as much. %BLANK% the face has outsold every revival taken from the punches themselves, and the printers who buy it say the weight is the reason.",
        stem:'Which choice completes the text with the most logical transition?',
        choices:{A:'Moreover,', B:'Likewise,', C:'For instance,', D:'Nevertheless,'},
        correct:'D',
        expCorrect:'The first two sentences establish a defect that the foundry itself concedes; the third reports that the face has beaten its rivals in the market, and beaten them because of that very defect. An outcome that holds in spite of what was just granted is contrast, and “Nevertheless” is the transition that carries a concession forward into the sentence that overturns it.',
        expWrong:{
          A:'“Moreover” adds a further point pushing the same way. Outselling the competition is not more evidence that the letters are too heavy; it cuts directly against the admission just made.',
          B:'“Likewise” claims the third sentence is a parallel case of the second. A sales record is not a second instance of a foundry conceding a flaw in its own type.',
          C:'“For instance” would make the sales figures an example of what the specimen book admits. They are not an example of the admission; they are what happened despite it.'
        },
        tip:'“Moreover” is the option that sounds most scholarly and is therefore the easiest to pick without checking. It is only correct when the new sentence pushes in the same direction as the last one; the moment the direction flips, it is wrong no matter how well it reads.'
      },
      {
        id:'BMF-17', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
        skill:'Transitions — intensification against contrast',
        passage:"The eleven-year record from the Ocampo plots is usually summarized as showing that contour terraces cut soil loss by about half. The summary understates the case. %BLANK% on the two steepest plots, where the slope passes twenty degrees, the terraces cut loss by more than four fifths, and it is on slopes like those that the method is worth what it costs to build.",
        stem:'Which choice completes the text with the most logical transition?',
        choices:{A:'However,', B:'In fact,', C:'By contrast,', D:'Similarly,'},
        correct:'B',
        expCorrect:'The middle sentence announces that the usual figure is too low; the sentence after the blank supplies a far higher figure from the plots that matter most. The third sentence pushes further in the direction the second one already pointed, and “In fact” is the marker for that kind of strengthening.',
        expWrong:{
          A:'“However” sets the third sentence against the second, but the second has already declared the summary too modest and the third is the evidence for exactly that. The two agree, so there is nothing for “however” to reverse.',
          C:'“By contrast” sets two comparable cases side by side. The steepest plots are not being compared with the summary; they are the reason the summary comes out too low.',
          D:'“Similarly” claims the second and third sentences are two instances of one pattern. One is a judgment about how a study has been reported and the other is a measurement, so there is no shared pattern for them to belong to.'
        },
        tip:'When the previous sentence says a claim is too weak, too low, or understated, the next sentence is almost always strengthening it: “in fact”, “indeed”. Contrast words feel right because a correction is happening, but the correction points the same way, not the other way.'
      },
      {
        id:'BMF-18', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
        skill:'Transitions — the concession marker that faces forward',
        passage:"The 1911 finding aid is still the only guide the archive has to the Kerrigane letters, and it is wrong about very nearly everything it describes. %BLANK% it is the reason anyone outside the family knows the collection exists: the keeper who compiled it wrote to four newspapers that same winter, and the donations that followed paid for the shelving the letters sit on.",
        stem:'Which choice completes the text with the most logical transition?',
        choices:{A:'Admittedly,', B:'In short,', C:'All the same,', D:'Otherwise,'},
        correct:'C',
        expCorrect:'The first sentence names a serious fault; the second credits the same flawed document with the one thing that saved the collection. Holding onto a positive claim after granting a point against it is concession, and “All the same” is the phrase that makes that turn.',
        expWrong:{
          A:'“Admittedly” introduces a concession — a point granted against the writer’s own position. The concession here is the first sentence, and the second sentence is the turn away from it, so this marker faces backward.',
          B:'“In short” announces a summary of what came before. The second sentence adds facts the first never contained, including the letters to the newspapers and the money they raised.',
          D:'“Otherwise” states what would be true under the opposite condition. Nothing in either sentence is conditional; both report what actually happened.'
        },
        tip:'Concession comes in a pair, and the two halves need different words. Use “admittedly” or “granted” on the point you are giving away, and “all the same”, “still”, or “nevertheless” on the point you are keeping. Check which half the blank sits in.'
      },
      {
        id:'BMF-19', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
        skill:'Transitions — restatement against consequence',
        passage:"Okonkwo’s claim about the Nsukka enamels is narrower than the reviews have made it sound. %BLANK% she argues only that the potters took up a wider range of colors, and she says twice, in the same chapter, that the forms, the clay bodies and the firing schedule are unchanged from the century before the first imports.",
        stem:'Which choice completes the text with the most logical transition?',
        choices:{A:'That is,', B:'Therefore,', C:'Even so,', D:'Meanwhile,'},
        correct:'A',
        expCorrect:'The first sentence says the claim is narrow; the second says what the narrow claim actually is. The second sentence neither follows from the first nor adds to it — it spells out the word the first sentence leaned on, which is restatement.',
        expWrong:{
          B:'“Therefore” makes the content of the claim a consequence of its being narrow. Nothing is deduced here: the second sentence tells you what “narrower” is referring to, and a definition is not a conclusion.',
          C:'“Even so” requires the second sentence to hold against the first. It does not resist the first sentence at all; it is the evidence that the first sentence is right.',
          D:'“Meanwhile” places two things side by side in time, as if the narrowness of a claim and the content of that claim were separate events going on at once.'
        },
        tip:'If you could delete the second sentence and lose no new information — only the explanation of a word already used — the relation is restatement: “that is”, “in other words”. Consequence words need something genuinely new to have been derived.'
      }

    ]
  });
})();
