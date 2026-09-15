/* SAT Studio question set — Reading & Writing: Extreme Transitions & Synthesis (XT-01 to XT-12) */
window.SAT_SETS.push({
  id: 'rw-x-rhetoric',
  title: 'Extreme — Transitions & Synthesis',
  section: 'rw',
  level: 'Extreme',
  description: 'Hard-Module-2 level: adjacent-category transitions, concession pivots, and dual-constraint synthesis goals.',
  minutes: 16,
  questions: [
    /* ===== TRANSITIONS — adjacent-category traps ===== */
    {
      id:'XT-01', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions',
      passage:"The clinic's redesign was organized around a single priority: cutting the time patients spend waiting. %BLANK% it set the concrete target of moving every arrival from the front desk into an exam room within ten minutes.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Specifically,', B:'For example,', C:'Consequently,', D:'Similarly,'},
      correct:'A',
      expCorrect:'The 2nd sentence does not add a new case: it restates that SAME priority (cutting the wait) more precisely and more narrowly, putting an exact figure on it (ten minutes). That is “Specifically”.',
      expWrong:{
        B:'“For example” would announce ONE case among several illustrating the idea, but there are no examples here: the 2nd sentence is the same goal stated in more detail, not an instance.',
        C:'“Consequently” marks cause→effect, and the ten-minute target is not a CONSEQUENCE of having a priority: it is that priority stated more exactly.',
        D:'“Similarly” compares two similar things, but here there is only one idea being made precise, not two items being compared.'
      },
      tip:'When the 2nd sentence says the same thing as the 1st but more precisely (“that is, specifically…”), use “Specifically”, not “For example”. An example supplies a case; precision rewrites the same idea.'
    },
    {
      id:'XT-02', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions',
      passage:"The bridge's steel cables expand and contract sharply as the temperature swings between the cold of night and the heat of afternoon. %BLANK% the engineers anchored them to joints that can slide a few centimeters instead of to rigid, fixed mounts.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In addition,', B:'Therefore,', C:'For instance,', D:'However,'},
      correct:'B',
      expCorrect:'The movement of the steel (the cause) is what FORCES the use of sliding joints (the engineers’ response). The 2nd sentence is the consequence of the 1st, so “Therefore” is what you want.',
      expWrong:{
        A:'“In addition” adds a fact of the same kind, but the decision about the joints is not “one more fact”: it is what the problem in the 1st sentence forces.',
        C:'“For instance” introduces an example of something said before, and the joints are not an example of steel expanding, but the response to it.',
        D:'“However” marks contrast, but the two ideas do not clash: the 2nd solves what the 1st raises.'
      },
      tip:'Watch the false twin “In addition”: both move forward, but only “Therefore” works when the 2nd sentence is what the 1st CAUSES. Ask yourself: is this one more fact or is it the consequence?'
    },
    {
      id:'XT-03', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions',
      passage:"The volunteer crew had only three days and a single truck to haul away the storm debris scattered across the entire park. %BLANK% they managed to clear every last trail before the weekend festival opened.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Furthermore,', B:'Instead,', C:'Nevertheless,', D:'As a result,'},
      correct:'C',
      expCorrect:'The 1st sentence is a real obstacle (little time, one truck); the 2nd says they pulled it off anyway. That “despite the obstacle, it happened all the same” is exactly “Nevertheless”.',
      expWrong:{
        A:'“Furthermore” adds an idea in the same direction, but here the 2nd sentence opposes what the obstacle led you to expect (that they would NOT finish).',
        B:'“Instead” swaps a rejected plan A for a plan B, but no plan is discarded and replaced: there is a difficulty and a success achieved despite it.',
        D:'“As a result” marks consequence, but finishing on time is not the EFFECT of having little time and one truck; it happens against that limitation.'
      },
      tip:'“Nevertheless” vs “Instead”: use “Nevertheless” when the result happens DESPITE an obstacle; use “Instead” only when something replaces another thing that was ruled out.'
    },
    /* ===== CONCESSION-THEN-RETURN pivots ===== */
    {
      id:'XT-04', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions',
      passage:"Coral reefs generally thrive only in warm, shallow water bathed in bright sunlight. A few hardy species, it is true, build colonies in cold, pitch-dark water thousands of feet below the surface. %BLANK% the overwhelming majority of the world's reefs remain confined to the sunlit shallows their biology evolved for.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In fact,', B:'Likewise,', C:'Furthermore,', D:'Still,'},
      correct:'D',
      expCorrect:'The 2nd sentence is a counterexample (a few species in cold, dark water). The 3rd leaves that exception behind and RETURNS to the original claim (almost all reefs live in shallow, sunlit water). That return to the initial claim despite the exception is “Still”.',
      expWrong:{
        A:'“In fact” would intensify the counterexample (the deep-water species), but the 3rd sentence does not reinforce that exception: it returns to the general rule.',
        B:'“Likewise” would mark the 3rd sentence as similar to the 2nd (more cases of reefs in darkness), and it actually says the opposite.',
        C:'“Furthermore” would add another fact along the lines of the counterexample, but the 3rd sentence does not extend the exception: it counters it.'
      },
      tip:'In chains of “rule → but a rare case → ___ the rule still holds”, the blank RETURNS to the initial claim: use “Still”, “Even so” or “Nonetheless”, not transitions that add to the counterexample.'
    },
    {
      id:'XT-05', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions',
      passage:"Most of the composer’s symphonies were greeted warmly at their premieres. One early work, admittedly, was booed so fiercely that the orchestra could barely play it to the end. %BLANK% audiences of his era generally embraced his music the moment they first heard it.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'Even so,', B:'Indeed,', C:'What is more,', D:'Likewise,'},
      correct:'A',
      expCorrect:'The 2nd sentence concedes a failure (a work that was booed). The 3rd sets that exception aside and returns to the initial idea: audiences in general took to his music right away. Returning to the original claim despite the concession is “Even so”.',
      expWrong:{
        B:'“Indeed” would confirm and reinforce what was just said (the booing), but the 3rd sentence does not reinforce the failure: it returns to the general acceptance.',
        C:'“What is more” adds another point along the counterexample’s line, and here the opposite happens: the favorable rule is taken back up.',
        D:'“Likewise” would mark a similarity with the booed work, when the 3rd sentence describes the opposite situation.'
      },
      tip:'“Even so” is the signal that, after granting a case against you, you go back to defending the original claim. The distractors here push you to keep talking about the counterexample.'
    },
    {
      id:'XT-06', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Transitions',
      passage:"The park's main trail is usually an easy walk suitable for young children. After a heavy rain, granted, one low stretch turns into ankle-deep mud that can stop a stroller cold. %BLANK% for most of the year families push strollers along its packed-gravel surface without any trouble at all.",
      stem:'Which choice completes the text with the most logical transition?',
      choices:{A:'In fact,', B:'Nonetheless,', C:'Similarly,', D:'Consequently,'},
      correct:'B',
      expCorrect:'The 2nd sentence admits an exception (the mud after rain). The 3rd gets past that objection and RETURNS to the initial claim: for almost the whole year the trail is easy for strollers. That return despite the concession is “Nonetheless”.',
      expWrong:{
        A:'“In fact” would intensify the mud problem, but the 3rd sentence does not worsen the exception: it returns to how easy the trail is.',
        C:'“Similarly” would mark a similarity with the muddy stretch, and the 3rd sentence describes the opposite (a firm surface, no trouble).',
        D:'“Consequently” would make the easy trail a consequence of the mud, which makes no sense: they are opposing ideas, not cause and effect.'
      },
      tip:'Spot the pattern “usually yes → once no → ___ usually yes”. The blank returns to the start: “Nonetheless”. Rule out anything that keeps describing the exception.'
    },
    /* ===== SYNTHESIS — dual-constraint goals ===== */
    {
      id:'XT-07', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>Letterpress printing presses inked, raised metal type directly onto the paper.</li><li>It leaves a slight indentation you can feel on the page.</li><li>Offset printing transfers ink from a plate to a rubber roller and then to the paper.</li><li>Offset leaves a completely flat, smooth image.</li><li>Offset can print thousands of pages per hour; letterpress is far slower.</li></ul>The student wants to emphasize a difference between the two methods while introducing letterpress printing to an audience unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'Letterpress printing presses inked, raised metal type directly onto the paper.',
        B:'Letterpress leaves a tactile indentation on the page, while offset leaves a perfectly flat image.',
        C:'Letterpress printing, which presses raised metal type directly onto paper, leaves an indentation you can feel—unlike offset printing, whose image is perfectly flat.',
        D:'Offset printing can produce thousands of pages an hour, far more than letterpress can.'
      },
      correct:'C',
      expCorrect:'It meets BOTH goals. It introduces what letterpress is for someone who does not know it (“presses raised metal type into the paper”) AND marks the difference from offset (it leaves an impression vs. a completely flat image).',
      expWrong:{
        A:'It fails the DIFFERENCE goal: it defines letterpress well for a new audience, but never contrasts it with offset.',
        B:'It fails the INTRODUCE goal: it does contrast letterpress and offset, but it assumes you already know what letterpress is; it never explains it to someone unfamiliar.',
        D:'It fails the goal of INTRODUCING letterpress: the sentence is about offset and its speed, without saying what letterpress is or defining it.'
      },
      tip:'With double goals, tick both boxes in your head: (1) does it introduce what the term is to someone who does not know it? (2) does it contrast with the other thing? Only the option ticking BOTH works.'
    },
    {
      id:'XT-08', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>A regressive tax takes a larger share of income from people who earn less.</li><li>A progressive tax takes a larger share from people who earn more.</li><li>Sales taxes are usually regressive.</li><li>Income taxes in many countries are progressive.</li></ul>The student wants to emphasize a difference between the two kinds of tax while introducing the term \"regressive tax\" to an audience unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'A regressive tax takes a larger share of income from people who earn less.',
        B:'A regressive tax and a progressive tax pull in opposite directions.',
        C:'Income taxes in many countries are progressive, while sales taxes are usually regressive.',
        D:'A regressive tax, one that takes a bigger share of income from lower earners, works in the opposite direction from a progressive tax, which takes more from higher earners.'
      },
      correct:'D',
      expCorrect:'It meets BOTH goals. It defines the term “regressive tax” within the same sentence (“takes a larger share of income from those who earn less”) AND contrasts it with a progressive tax (the opposite direction). It introduces and differentiates at once.',
      expWrong:{
        A:'It fails the DIFFERENCE goal: it defines a regressive tax well, but does not compare it with a progressive one.',
        B:'It fails the INTRODUCE goal: it states that they run in opposite directions (the difference), but never explains what “regressive tax” means to someone unfamiliar with the term.',
        C:'It fails the goal of INTRODUCING the term: it gives examples (sales taxes vs. income taxes), but does not define what “regressive” means for a new audience.'
      },
      tip:'When the goal asks you to “introduce the term X”, the right option usually defines it right there (“X, which is…”). If it only names it without explaining, it does not introduce.'
    },
    {
      id:'XT-09', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>The maned wolf lives on the grasslands of central South America.</li><li>It has very long, thin legs and a reddish coat.</li><li>Despite its name, it is not a true wolf.</li><li>True wolves hunt in packs.</li><li>The maned wolf lives and hunts entirely alone.</li></ul>The student wants to introduce the maned wolf to an audience unfamiliar with the animal while emphasizing a difference between it and true wolves. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'The maned wolf, a long-legged, reddish animal of central South America’s grasslands, differs from true wolves in that it lives and hunts entirely alone rather than in a pack.',
        B:'The maned wolf is a long-legged, reddish animal native to the grasslands of central South America.',
        C:'Unlike true wolves, which hunt in packs, the maned wolf lives and hunts entirely alone.',
        D:'Despite its name, the maned wolf is not actually a true wolf.'
      },
      correct:'A',
      expCorrect:'It meets BOTH goals. It introduces the animal for someone who does not know it (long legs, reddish coat, South American grasslands) AND marks the difference from true wolves (it hunts alone, not in packs).',
      expWrong:{
        B:'It fails the DIFFERENCE goal: it describes the animal well for a new audience, but does not compare it with true wolves.',
        C:'It fails the INTRODUCE goal: it does contrast (hunting alone vs. in packs), but it does not say what a maned wolf is or what it looks like to someone unfamiliar.',
        D:'It fails both almost entirely: it gives an isolated fact (that it is not a true wolf) without introducing the animal or marking how its way of living or hunting differs.'
      },
      tip:'“Introduce to someone unfamiliar” calls for the overview (what it is, what it is like, where it is from). Add the contrast the goal asks for and you will see only one option carries both.'
    },
    {
      id:'XT-10', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>The theremin is an electronic musical instrument.</li><li>A performer moves both hands near two metal antennas to control pitch and volume.</li><li>The player never actually touches the instrument.</li><li>Most instruments make sound only when a player presses, strikes, or blows into them.</li></ul>The student wants to introduce the theremin to an audience unfamiliar with it while emphasizing a difference between it and most instruments. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'The theremin is an electronic musical instrument that was first demonstrated in the early twentieth century.',
        B:'The theremin is an electronic instrument that, unlike ones a musician strikes or blows into, is played by moving the hands near two metal antennas without any physical contact.',
        C:'Unlike most instruments, the theremin makes its sound without ever being touched.',
        D:'A theremin player moves both hands near two metal antennas to control pitch and volume.'
      },
      correct:'B',
      expCorrect:'It meets BOTH goals. It introduces what a theremin is (an electronic instrument played by moving your hands near two antennas) AND differentiates it from most instruments (which are struck or blown; this one is never touched).',
      expWrong:{
        A:'It fails the DIFFERENCE goal: it introduces the theremin, but only adds its date; it does not contrast it with how other instruments are played.',
        C:'It fails the INTRODUCE goal: it marks the difference (it is never touched), but does not explain what a theremin is or how it works for a new audience.',
        D:'It fails the DIFFERENCE goal: it describes how it is played (introducing it), but does not compare it with other instruments.'
      },
      tip:'Check that the option ticks BOTH boxes. Several “almost” make it by introducing or contrasting; only one does both in the same sentence.'
    },
    {
      id:'XT-11', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>Tidal power plants generate electricity from the ocean's daily rise and fall.</li><li>Their output can be predicted years in advance from tide tables.</li><li>Wind and solar plants depend on weather.</li><li>Weather cannot be forecast far in advance.</li></ul>The student wants to introduce tidal power to an audience unfamiliar with it while emphasizing a difference between it and wind and solar power. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'Tidal power plants generate electricity from the daily rise and fall of the ocean’s tides.',
        B:'Unlike wind and solar, tidal power can be predicted years in advance.',
        C:'Tidal power plants, which draw electricity from the ocean’s daily rise and fall, differ from wind and solar in that their output can be forecast years ahead.',
        D:'Wind and solar plants depend on weather that cannot be forecast far in advance.'
      },
      correct:'C',
      expCorrect:'It meets BOTH goals. It introduces what tidal power is (it draws electricity from the daily rise and fall of the sea) AND differentiates it from wind and solar (its output can be predicted years in advance).',
      expWrong:{
        A:'It fails the DIFFERENCE goal: it introduces tidal power well, but does not compare it with wind or solar.',
        B:'It fails the INTRODUCE goal: it marks the difference (it can be predicted), but does not explain what tidal power is to someone unfamiliar.',
        D:'It fails the goal of INTRODUCING tidal power: the sentence is about wind and solar, without saying what tidal power is.'
      },
      tip:'If the sentence is only about the OTHER side of the comparison, it is not introducing the subject being asked about. The right one defines the subject and contrasts it too.'
    },
    {
      id:'XT-12', type:'mc', domain:'Expression of Ideas', difficulty:'Difícil', extreme:true,
      skill:'Rhetorical Synthesis',
      stem:"While researching a topic, a student has taken the following notes:<ul><li>Bamboo is a type of grass, not a tree.</li><li>Some species can grow nearly a meter in a single day.</li><li>Most trees add only a few centimeters of height per year.</li><li>Bamboo is found in many parts of the world.</li></ul>The student wants to introduce bamboo to an audience unfamiliar with it while emphasizing a difference between its growth and that of trees. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      choices:{
        A:'Bamboo is a fast-growing plant found in many parts of the world.',
        B:'Bamboo can grow nearly a meter in a single day, while most trees add only a few centimeters a year.',
        C:'Bamboo is a type of grass rather than a tree.',
        D:'Bamboo, a giant grass rather than a tree, can shoot up nearly a meter in a single day—far faster than the few centimeters most trees add in a year.'
      },
      correct:'D',
      expCorrect:'It meets BOTH goals. It introduces what bamboo is (a giant grass, not a tree) AND marks the difference in growth (nearly a meter a day against the few centimeters a year of trees).',
      expWrong:{
        A:'It fails the DIFFERENCE goal: it introduces bamboo vaguely, but does not compare it with trees or give the growth figures.',
        B:'It fails the INTRODUCE goal: it gives the growth difference with numbers, but does not say what bamboo is (a grass, not a tree) to someone unfamiliar.',
        C:'It fails the GROWTH DIFFERENCE goal: it classifies bamboo (a grass, not a tree), but never mentions its speed compared with trees.'
      },
      tip:'When the difference asked for is specific (here, the GROWTH), any old contrast will not do: the right one introduces the subject and hits exactly that difference with the data.'
    }
  ]
});
