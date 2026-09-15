/* SAT Studio question set — Reading & Writing: B-1 Weak Skills Mixed Exam (B1X-01 a B1X-15) */
window.SAT_SETS.push({
  id: 'rw-b1exam',
  title: 'B-1 Weak Skills — Mixed Exam',
  section: 'rw',
  level: 'Difícil',
  description: 'A mixed Verbal exam targeting the skills you missed on B-1: data, grammar agreement, structure & purpose, punctuation, transitions, and words in context.',
  minutes: 20,
  questions: [
    {
      id:'B1X-01', type:'mc', domain:'Information and Ideas', difficulty:'Media',
      skill:'Interpreting Data in Context',
      passage:"A biologist compared how quickly four species of frog reached the far side of a 10-meter test channel. She recorded the average crossing time for each species during trials held at the same water temperature.<br><br><table border=\"1\" cellpadding=\"6\" style=\"border-collapse:collapse\"><tr><th>Species</th><th>Avg. crossing time (seconds)</th></tr><tr><td>Green tree frog</td><td>42</td></tr><tr><td>Marsh frog</td><td>31</td></tr><tr><td>Clawed frog</td><td>19</td></tr><tr><td>Painted frog</td><td>55</td></tr></table><br>The biologist noted that the clawed frog, whose webbed feet are unusually large, crossed the channel faster than any other species tested. To support her observation with the data, she might point out that the clawed frog completed the crossing ______",
      stem:'Which choice most effectively uses data from the table to complete the example?',
      choices:{
        A:'in 55 seconds, the longest time of any species.',
        B:'in 19 seconds, less time than each of the other three species.',
        C:'in 31 seconds, faster than the green tree frog.',
        D:'in 42 seconds, slightly faster than the painted frog.'
      },
      correct:'B',
      expCorrect:'The biologist says the clawed frog was the FASTEST. In the table its time is 19 s, the lowest of the four, so it took less than each of the other three species. Option B uses the right figure and backs up her observation.',
      expWrong:{
        A:'55 s is the painted frog’s time (the slowest), not the clawed frog’s, and "the longest" contradicts it having been the fastest.',
        C:'31 s is the marsh frog’s time, not the clawed frog’s; the figure is assigned to the wrong species.',
        D:'42 s is the green tree frog’s time; besides, the clawed frog was not "slightly" faster than the painted frog, it was far faster.'
      },
      tip:'First pin down the claim ("the fastest"), then find in the table the number belonging to THAT species. Watch out for options citing the time from another row.'
    },
    {
      id:'B1X-02', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Interpreting Data in Context',
      passage:"Researchers surveyed how many hours per week residents of three neighborhoods spent in local parks before and after new walking trails were installed. The results are shown below.<br><br><table border=\"1\" cellpadding=\"6\" style=\"border-collapse:collapse\"><tr><th>Neighborhood</th><th>Before trails (hrs/week)</th><th>After trails (hrs/week)</th></tr><tr><td>Riverside</td><td>3.0</td><td>5.4</td></tr><tr><td>Oakhill</td><td>2.5</td><td>2.8</td></tr><tr><td>Bellview</td><td>4.0</td><td>7.2</td></tr></table><br>The team concluded that the new trails were followed by a large increase in park use in some neighborhoods but only a small change in others. This conclusion is best supported by the fact that ______",
      stem:'Which choice most effectively uses data from the table to support the researchers’ conclusion?',
      choices:{
        A:'Bellview’s park use rose from 4.0 to 7.2 hours, while Oakhill’s rose only from 2.5 to 2.8 hours.',
        B:'all three neighborhoods reported exactly the same park use after the trails were installed.',
        C:'Riverside’s park use fell from 5.4 to 3.0 hours after the trails were added.',
        D:'Oakhill showed the largest increase in park use of the three neighborhoods.'
      },
      correct:'A',
      expCorrect:'The conclusion contrasts a big increase in some neighborhoods with a small change in others. Bellview rose from 4.0 to 7.2 (a big jump) and Oakhill only from 2.5 to 2.8 (a minimal change). Option A cites both extremes and backs up exactly that conclusion.',
      expWrong:{
        B:'False according to the table: the three neighborhoods report DIFFERENT values after the trails (5.4, 2.8, 7.2).',
        C:'It reverses the data: Riverside ROSE from 3.0 to 5.4, it did not fall from 5.4 to 3.0.',
        D:'Oakhill had the SMALLEST increase (0.3 h), not the largest; the biggest was Bellview (+3.2 h).'
      },
      tip:'When the conclusion says "large in some, small in others", the best option shows BOTH cases. Verify that the direction (rose/fell) matches the table.'
    },
    {
      id:'B1X-03', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Words in Context',
      passage:"Although early critics found her novels difficult, later readers came to admire their ______ structure: every subplot, however minor it first appeared, eventually locked into place to serve the larger story.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'chaotic', B:'intricate', C:'careless', D:'plain'},
      correct:'B',
      expCorrect:'The text explains that every subplot, however minor it seemed, ended up fitting in service of the larger story. That describes an "intricate" structure (complex but well articulated), exactly what readers admired.',
      expWrong:{
        A:'"Chaotic" clashes with the idea that everything fits into place; there would be no order to admire.',
        C:'"Careless" is negative and contradicts the fact that readers ADMIRED it.',
        D:'"Plain" contradicts early critics finding it difficult and every subplot contributing to the whole.'
      },
      tip:'Look for the clue after the colon: if everything "fits in service of the story", the word has to mean complex and well woven, not messy or simple.'
    },
    {
      id:'B1X-04', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Words in Context',
      passage:"The committee’s report did not openly criticize the mayor’s plan; instead, its praise was so heavily qualified that its disapproval was merely ______, evident only to readers who looked past the polite surface.",
      stem:'Which choice completes the text with the most logical and precise word or phrase?',
      choices:{A:'implicit', B:'explicit', C:'exaggerated', D:'accidental'},
      correct:'A',
      expCorrect:'The report does not criticize openly and is evident only to someone looking past the polite surface. That disapproval is suggested without being stated = "implicit".',
      expWrong:{
        B:'"Explicit" is the opposite: it means stated openly, but the text says it does NOT criticize openly.',
        C:'"Exaggerated" does not fit: the problem is that the disapproval is hidden, not inflated.',
        D:'"Accidental" clashes with the tone: the disapproval is deliberately dressed up in "heavily qualified" praise, not accidental.'
      },
      tip:'"Did not openly… evident only to readers who looked past the surface" points to something hinted at. Implicit = implied; explicit = stated outright. Pick the opposite of "open".'
    },
    {
      id:'B1X-05', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Punctuation',
      passage:"The museum’s newest wing houses a single, breathtaking ______ a 12-meter skeleton of a whale suspended from the ceiling as if mid-dive.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'exhibit,', B:'exhibit', C:'exhibit:', D:'exhibit;'},
      correct:'C',
      expCorrect:'Before the blank there is a complete sentence ("The museum’s newest wing houses a single, breathtaking exhibit") and what follows describes and names that exhibit. The colon introduces that clarification after a complete sentence.',
      expWrong:{
        A:'A lone comma cannot introduce the clarification this way; it leaves the loose phrase "a 12-meter skeleton…" badly connected.',
        B:'With no punctuation, "exhibit a 12-meter skeleton…" fuses and reads wrong.',
        D:'A semicolon demands an independent sentence after it, and "a 12-meter skeleton… suspended…" is not a complete sentence.'
      },
      tip:'Colon = after a COMPLETE sentence that announces what follows. Here what comes before can end in a period, so the colon fits.'
    },
    {
      id:'B1X-06', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Punctuation',
      passage:"Dr. Alvarez had spent a decade studying volcanic ______ that background made her the first to recognize that the mountain’s recent tremors signaled an imminent eruption.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'soil,', B:'soil', C:'soil:', D:'soil;'},
      correct:'D',
      expCorrect:'On both sides of the blank there are complete sentences: "Dr. Alvarez had spent a decade studying volcanic soil" and "that background made her the first to recognize…". To join two independent clauses with no conjunction, the semicolon is what you want.',
      expWrong:{
        A:'A single comma between two complete sentences is a comma splice.',
        B:'With no punctuation, the two sentences fuse (run-on).',
        C:'A colon would join two independent clauses only if the second EXPLAINED or illustrated the first; here the second adds a narrative consequence, so it does not fit better than the semicolon.'
      },
      tip:'The period test: if both sides of the blank are complete sentences and there is no conjunction, the semicolon is the safe join.'
    },
    {
      id:'B1X-07', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Pronoun Agreement',
      passage:"Each of the volunteers who signed up for the coastal cleanup was asked to bring ______ own reusable gloves and a refillable water bottle.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'their', B:'they’re', C:'his or her', D:'its'},
      correct:'C',
      expCorrect:'The subject is “Each of the volunteers”, and “each” is singular. The matching singular possessive pronoun is “his or her”: “bring his or her own gloves”.',
      expWrong:{
        A:'“Their” is plural; it does not agree with the singular subject “each”.',
        B:'"They’re" = "they are", a contraction, not a possessive; it cannot modify "gloves".',
        D:'"Its" is used for things or animals, not for volunteers, who are people.'
      },
      tip:'"Each / every / one of…" are SINGULAR even with a plural after them. For people, the singular possessive is "his or her".'
    },
    {
      id:'B1X-08', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"The collection of rare butterfly specimens gathered during the 1890s expeditions ______ now displayed in a climate-controlled room to prevent fading.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'are', B:'is', C:'were', D:'have been'},
      correct:'B',
      expCorrect:'The subject is “The collection” (singular); “of rare butterfly specimens… expeditions” is only a modifier. The singular present-tense verb that agrees is “is”: “The collection… is now displayed”.',
      expWrong:{
        A:'"Are" is plural and agrees with "specimens", but that is not the subject; the subject is "collection", singular.',
        C:'"Were" is plural and past tense on top of that; the marker "now" calls for the singular present.',
        D:'“Have been” is plural; it does not agree with the singular subject “collection”.'
      },
      tip:'Ignore the phrase between the subject and the verb ("of… specimens…"). Ask: what is displayed? The COLLECTION → singular → "is".'
    },
    {
      id:'B1X-09', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
      skill:'Text Structure and Purpose',
      passage:"Historians once assumed that the ancient city had been abandoned suddenly after a single catastrophe. Recent excavations tell a more gradual story. Layer by layer, the ruins reveal shrinking households, patched-up walls, and dwindling trade goods—signs of a community that declined slowly over generations rather than vanishing overnight.",
      stem:'Which choice best describes the overall structure of the text?',
      choices:{
        A:'It presents an earlier belief and then offers evidence that revises it.',
        B:'It lists several unrelated theories without favoring any of them.',
        C:'It describes a catastrophe and then predicts a similar future event.',
        D:'It compares two ancient cities that declined for the same reason.'
      },
      correct:'A',
      expCorrect:'The text opens with what historians "once assumed" (a sudden abandonment) and then presents recent excavations whose layers show a gradual decline. It is the structure of old belief → evidence that corrects it.',
      expWrong:{
        B:'It is not a neutral list of theories: the text DOES take a side, backing the gradual version supported by the new evidence.',
        C:'It predicts no future event; it contrasts a sudden past with a gradual decline, projecting nothing.',
        D:'Only ONE city is discussed; there is no comparison between two cities.'
      },
      tip:'Spot the turn: "once assumed… Recent excavations tell a more gradual story". That "it used to be believed / now the evidence shows" is the revision structure.'
    },
    {
      id:'B1X-10', type:'mc', domain:'Craft and Structure', difficulty:'Media',
      skill:'Purpose',
      passage:"In the opening chapter, the author does not describe the storm directly. Instead, she lingers on small details: a shutter banging, a candle guttering, a dog refusing to leave the doorway. Only through these uneasy images does the reader sense the danger gathering outside.",
      stem:'Which choice best states the main purpose of the text?',
      choices:{
        A:'To explain how the author builds a sense of danger through indirect, telling details.',
        B:'To argue that the novel’s opening chapter is too slow and should be cut.',
        C:'To summarize the entire plot of the novel for new readers.',
        D:'To describe the scientific causes of severe storms.'
      },
      correct:'A',
      expCorrect:'The text points out that the author does NOT describe the storm directly, but uses small unsettling details so the reader senses the danger. The purpose is to explain how she builds that sense of danger indirectly.',
      expWrong:{
        B:'It does not claim the chapter is slow or that it should be cut; it describes a technique, it does not criticize it.',
        C:'It does not summarize the plot of the novel; it focuses only on the effect of the opening chapter.',
        D:'It does not explain the scientific causes of storms; the storm is a narrative device, not a physical topic.'
      },
      tip:'"Main purpose" = why this was written. Here everything points to one thing: how the author suggests danger with details instead of describing it.'
    },
    {
      id:'B1X-11', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Conclusions',
      passage:"A student is writing about a community garden. She wants to conclude her paragraph by emphasizing the garden’s broad benefit to the neighborhood. She has noted the following: the garden supplies fresh vegetables to nearby families; it hosts weekend classes for children; and it has become a gathering spot where longtime and new residents meet.",
      stem:'Which choice most effectively uses the notes to accomplish this goal?',
      choices:{
        A:'The garden grows several kinds of tomatoes that ripen in late summer.',
        B:'More than anything, the garden needs additional volunteers to weed its beds.',
        C:'By feeding families, teaching children, and bringing neighbors together, the garden has become a resource the whole community relies on.',
        D:'The weekend classes for children are held on Saturday mornings.'
      },
      correct:'C',
      expCorrect:'The goal is to close by highlighting the BROAD benefit to the neighborhood. Option C gathers the three notes (it feeds families, it teaches children, it brings neighbors together) and presents them as a resource the whole community depends on. Exactly what was asked.',
      expWrong:{
        A:'It is a detail about tomatoes; it does not convey the broad benefit to the neighborhood.',
        B:'It is about a need (volunteers), not about the benefit the garden brings; it shifts the focus.',
        D:'It gives a minor fact (the class schedule) instead of summing up the overall impact.'
      },
      tip:'When they ask for a conclusion that "emphasizes the broad benefit", pick the option that pulls SEVERAL notes into one general idea, not the one giving a single detail.'
    },
    {
      id:'B1X-12', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil',
      skill:'Transitions',
      passage:"Solar panels are often praised for producing electricity without burning fuel. Manufacturing them, ______ requires mining and processing materials that carry their own environmental costs.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'therefore,', B:'however,', C:'for example,', D:'likewise,'},
      correct:'B',
      expCorrect:'The first sentence praises the panels (electricity without burning fuel); the second presents a downside (their manufacture has environmental costs). That contrast calls for "however".',
      expWrong:{
        A:'“Therefore” marca consecuencia, pero la segunda idea no es un resultado de la primera; es un contrapunto.',
        C:'"For example" announces an example of what came before, and the manufacturing cost does not exemplify what is good about the panel: it contradicts it.',
        D:'"Likewise" adds something similar, but here the ideas CLASH, they are not alike.'
      },
      tip:'Praise first, then a problem → a contrast signal. "However" marks that "yes, but on the other hand".'
    },
    {
      id:'B1X-13', type:'mc', domain:'Expression of Ideas', difficulty:'Media',
      skill:'Transitions',
      passage:"The trail was far steeper than the map had suggested, and a cold rain began to fall an hour into the hike. ______ the group decided to turn back and try again on a clearer day.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Nevertheless,', B:'For instance,', C:'In contrast,', D:'As a result,'},
      correct:'D',
      expCorrect:'The first sentence gives the causes (a very steep trail and cold rain); the second is the consequence (they decided to turn back). That cause→effect relationship calls for "as a result".',
      expWrong:{
        A:'"Nevertheless" marks contrast, but turning back is the EXPECTED reaction to those conditions, not something in spite of them.',
        B:'"For instance" introduces an example; the second sentence does not exemplify the first, it is its result.',
        C:'"In contrast" sets ideas against each other, but here the second sentence FOLLOWS logically from the first, it does not contradict it.'
      },
      tip:'If the first thing is the reason and the second is what happened because of it, the connection is result-based: "as a result" / "therefore".'
    },
    {
      id:'B1X-14', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Inferences',
      passage:"When a species of fig tree is introduced to a new region without the specific wasp that pollinates it, the tree may grow tall and healthy yet never produce viable seeds. Gardeners admiring its glossy leaves often have no idea that, biologically speaking, the transplanted tree has reached a dead end.",
      stem:'Which choice best states the main idea of the text?',
      choices:{
        A:'Fig trees cannot survive at all outside their native region.',
        B:'A fig tree can appear thriving while being unable to reproduce without its pollinating wasp.',
        C:'Gardeners generally prefer fig trees to any other ornamental plant.',
        D:'The pollinating wasp is more important to gardeners than the fig tree itself.'
      },
      correct:'B',
      expCorrect:'The text says that without its pollinating wasp the tree grows tall and healthy but never produces viable seeds: a biological "dead end". The central idea is that it can LOOK thriving and at the same time be unable to reproduce.',
      expWrong:{
        A:'It contradicts the text: the tree DOES survive and grows healthy; what it cannot do is reproduce.',
        C:'Not supported: the text does not compare gardeners’ preference for one plant over another.',
        D:'It distorts it: the text is about the wasp’s biological role, not about what matters most to a gardener.'
      },
      tip:'The central idea reconciles the two halves of the text: it looks healthy BUT produces no seeds. Rule out options that take only half ("it does not survive").'
    },
    {
      id:'B1X-15', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
      skill:'Central Ideas and Inferences',
      passage:"A conservation team reintroduced beavers to a stretch of river that had been straightened and channelized decades earlier. Within a few years, the beavers’ dams slowed the current, spread water across the floodplain, and created ponds where fish and insects returned in growing numbers. The team had expected to restore the river’s wildlife only through direct human effort.",
      stem:'Based on the text, which statement is the most reasonable inference?',
      choices:{
        A:'Beavers can drive ecological recovery that people had assumed would require direct human intervention.',
        B:'Straightened rivers can never support any fish or insect life.',
        C:'The conservation team regretted reintroducing the beavers to the river.',
        D:'Beavers build dams mainly to provide habitats for human researchers.'
      },
      correct:'A',
      expCorrect:'The team expected to restore the wildlife through direct human effort alone, but it was the beavers who, with their dams, brought fish and insects back. You infer that beavers can drive the recovery that was thought to require direct human intervention.',
      expWrong:{
        B:'Too extreme: the river was channelized, but the text does not say fish or insects can NEVER be there; in fact they returned.',
        C:'It contradicts the text: the reintroduction worked, there is no sign of regret.',
        D:'Illogical: beavers build dams because of their own behavior; the benefit to researchers is not their "purpose".'
      },
      tip:'Notice the clash between what the team EXPECTED (human effort alone) and what HAPPENED (the beavers pulled it off). The inference captures that surprise.'
    }
  ]
});
