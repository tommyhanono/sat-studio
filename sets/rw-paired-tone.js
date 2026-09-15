/* SAT Studio question set — Reading & Writing: Paired Passages (Hard tier) */
(function(){
  var PASSAGE = '<b>Passage A (Museum Curator):</b> Artificial intelligence-generated art lacks the authenticity that defines true creativity. A computer follows algorithms; it does not suffer, struggle, or question. Without the human experience—the weight of memory, failure, and emotion—can a machine truly create? This is not dismissal; it is precision. Art emerges from the human condition. A sculpture carved by a hand that trembles with doubt carries meaning a rendered image never can.<br><br><b>Passage B (AI Researcher):</b> To claim that emotion is a prerequisite for art is to misunderstand both emotion and art. Bach\'s fugues follow mathematical rules with absolute rigor. Does their beauty diminish because they follow a formula? Conversely, human artists often work mechanically, copying styles without understanding. The question is not whether the creator suffers, but whether the artifact itself—its coherence, innovation, originality—merits consideration. A perfectly rendered digital painting has aesthetic merit regardless of its origin.';

  window.SAT_SETS.push({
    id: 'rw-paired-tone',
    title: 'R&W — Paired Passages: Contrast & Tone Shifts',
    section: 'rw',
    level: 'Difícil',
    description: 'Paired passages testing tone comparison, author perspective, and synthesis across two texts. Real SAT format.',
    minutes: 14,
    questions: [
      {
        id:'PAIR-01', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Identifying perspective differences (Passage A vs. Passage B)',
        passage:PASSAGE,
        stem:'How would Passage B\'s author most likely respond to Passage A\'s claim that a computer "does not suffer, struggle, or question"?',
        choices:{A:'By pointing out that suffering is not necessary for artistic achievement', B:'By suggesting that computers will eventually be programmed to experience suffering', C:'By acknowledging that this is a genuine disadvantage of AI-generated art', D:'By arguing that suffering is a form of mathematical computation'},
        correct:'A',
        expCorrect:'Passage B argues that art\'s merit depends on the artifact\'s "coherence, innovation, originality," not on the creator\'s emotional state. The author would dismiss the suffering requirement as irrelevant. A is the only choice that aligns with this counterargument.',
        expWrong:{
          B:'Plausible but Passage B never suggests computers will be programmed to suffer. This is beyond the author\'s actual position.',
          C:'Passage B does not concede this as a disadvantage; instead, it reframes the entire criteria for artistic merit.',
          D:'Distractor: Passage B mentions mathematics (Bach\'s fugues) but never equates suffering with computation.'
        },
        tip:'When comparing passages, identify each author\'s main claim, then match the response to that claim. Look for author B\'s explicit counterargument, not plausible but unsupported responses.'
      },
      {
        id:'PAIR-02', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Identifying tone shifts across passages',
        passage:PASSAGE,
        stem:'The tone of Passage A can be described as:',
        choices:{A:'Openly hostile toward machine-made images and toward those who defend them', B:'Defensive yet respectful of the boundary between human and machine', C:'Uncertain and wavering, unsettled by the question it raises', D:'Condescending toward the digital artists whose work it judges'},
        correct:'B',
        expCorrect:'Passage A says "This is not dismissal; it is precision," explicitly rejecting harsh criticism while maintaining a clear position. The author respects the distinction but doesn\'t attack AI outright. B captures this nuance.',
        expWrong:{
          A:'The curator refuses that label outright — "This is not dismissal; it is precision" — and never turns on the people who make or defend AI images.',
          C:'The question ("can a machine truly create?") is rhetorical: the curator answers it in the next breath with "Art emerges from the human condition", and never wavers.',
          D:'The passage sets a rendered image beside a carved sculpture, but it judges the works rather than the people who make them, and looks down on no one.'
        },
        tip:'Tone questions require attention to modifiers and explicit disclaimers. "Not dismissal; it is precision" signals a specific, non-hostile tone.'
      },
      {
        id:'PAIR-03', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Recognizing implied agreement across passages',
        passage:PASSAGE,
        stem:'Both authors would likely agree that:',
        choices:{A:'Art must emerge from human experience—memory, failure, doubt—to be valuable', B:'The question of what gives art its value deserves serious examination', C:'Computers, which follow algorithms without struggling or questioning, cannot make real art', D:'Emotion and suffering are required before a work can count as art'},
        correct:'B',
        expCorrect:'Passage A defends its position carefully ("This is not dismissal; it is precision") and passage B proposes concrete criteria (coherence, innovation, originality). Both treat the question of what gives art its value as something serious and worth examining; they only disagree on the answer. That is the only common ground among the four options.',
        expWrong:{
          A:'This is Passage A alone: Passage B opens by calling the idea that emotion is a prerequisite for art a misunderstanding of both emotion and art.',
          C:'It is Passage A’s conclusion and the exact claim Passage B sets out to deny: for B a rendered painting has merit regardless of its origin.',
          D:'Passage B says the opposite in so many words — the question is not whether the creator suffers — so suffering cannot be common ground.'
        },
        tip:'For "both would agree" questions, find the safest common ground, not the most obvious shared word.'
      },
      {
        id:'PAIR-04', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Using evidence from one passage to evaluate claims in another',
        passage:PASSAGE,
        stem:'Passage B\'s reference to "human artists often work mechanically, copying styles without understanding" primarily serves to:',
        choices:{A:'Admit that human artists, too, can copy styles without understanding them', B:'Undermine Passage A\'s assumption that human creation guarantees authenticity', C:'Prove that machines now produce more original work than human imitators', D:'Show that Passage A\'s criteria for authenticity are too broad to sort good art from bad'},
        correct:'B',
        expCorrect:'This example directly contradicts Passage A\'s implicit claim: humans create authentically because they feel, so human work is inherently authentic. By showing humans can work mechanically, Passage B undermines that assumption.',
        expWrong:{
          A:'True to the words but not to the purpose: the clause is not a concession about humans, it is a weapon against A\'s equation of human origin with authenticity.',
          C:'Too extreme: B never ranks machines above people; it refuses to rank by maker at all and judges the artifact instead.',
          D:'Close, but the complaint is not width: B says A\'s criteria point at the wrong thing—the maker rather than the work—not that they admit too much.'
        },
        tip:'Purpose questions: identify what the statement *does to* the opposing argument, not just what it says.'
      },
      {
        id:'PAIR-05', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Identifying the effect of a rhetorical technique (analogy)',
        passage:PASSAGE,
        stem:'Passage B uses the example of Bach\'s fugues primarily to:',
        choices:{A:'Show that mathematical rigor can coexist with beauty', B:'Prove that music is more valuable than visual art', C:'Suggest that all classical composers lacked emotion', D:'Demonstrate that computers can now write music better than humans'},
        correct:'A',
        expCorrect:'Bach\'s fugues follow "mathematical rules with absolute rigor" yet possess undeniable beauty. This analogy supports the claim that rigor (like algorithm-following) doesn\'t eliminate aesthetic merit. A captures the rhetorical function.',
        expWrong:{
          B:'The example doesn\'t compare music to visual art.',
          C:'The passage doesn\'t claim composers lacked emotion; it separates emotion from artistic merit.',
          D:'The passage doesn\'t claim computers write better music.'
        },
        tip:'Analogy questions: identify what property or principle the analogy illustrates, not just what it describes.'
      },
      {
        id:'PAIR-06', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Inferring unstated disagreement',
        passage:PASSAGE,
        stem:'The passages suggest that Passage A\'s author would most likely view Passage B\'s emphasis on the artifact\'s "coherence, innovation, originality" as:',
        choices:{A:'A reasonable alternative to the human-experience standard', B:'An evasion of the deeper question: where meaning originates', C:'A technically sound but emotionally hollow test of merit', D:'A valid supplement to the requirement of human experience'},
        correct:'B',
        expCorrect:'Passage A grounds art in the human condition and emotional origin. Passage B shifts focus to properties of the work itself. The curator would likely see this as dodging the fundamental question of *meaning\'s source*. B captures this philosophical gulf.',
        expWrong:{
          A:'The curator grounds art in the human condition, so a standard that leaves it out is not one he would call reasonable; he implies it is insufficient.',
          C:'"Emotionally hollow" is too blunt for a curator who insists "This is not dismissal", and his objection is to what the test measures, not to how it feels.',
          D:'For Passage A meaning originates in human experience, so B\'s object-based test replaces that requirement rather than adding to it.'
        },
        tip:'Inference questions across paired passages: identify the *deep* disagreement, not just surface differences.'
      },
      {
        id:'PAIR-07', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Recognizing a logical structure (premise-counterargument)',
        passage:PASSAGE,
        stem:'Passage A\'s structure can be described as:',
        choices:{A:'Thesis → evidence → conclusion', B:'Claim → anticipation of objection → reaffirmation', C:'Question → exploration → open debate', D:'Anecdote → generalization → recommendation'},
        correct:'B',
        expCorrect:'A states AI art lacks authenticity (thesis), then preempts criticism ("This is not dismissal..."), then reaffirms the position with reasoning. This is Claim → anticipation → reaffirmation.',
        expWrong:{
          A:'Too generic; doesn\'t capture the defensive posture.',
          C:'The passage doesn\'t leave the issue open.',
          D:'No anecdote or recommendation present.'
        },
        tip:'Structure questions: look for signal phrases ("This is not," "However," "To be clear") that reveal the author\'s argumentative moves.'
      },
      {
        id:'PAIR-08', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Synthesizing a claim across both passages',
        passage:PASSAGE,
        stem:'Which of the following would both authors likely support as a research question for future study?',
        choices:{A:'"How can we ensure that AI art is indistinguishable from human art?"', B:'"What standards should we use to judge whether a work of art has merit?"', C:'"Why do humans respond emotionally to certain artworks?"', D:'"Is suffering necessary for understanding beauty?"'},
        correct:'B',
        expCorrect:'The two authors are already debating exactly that: A holds that merit comes from human experience and B proposes criteria from the object (coherence, innovation, originality). An investigation into what standards to use in judging artistic merit interests both, each from their own angle.',
        expWrong:{
          A:'Not aligned with either author\'s goal.',
          C:'It interests mainly author A, who ties art to human emotion; B centers his criterion on the object, not on the audience’s emotional reaction.',
          D:'Passage B explicitly argues suffering is not necessary.'
        },
        tip:'Synthesis questions: find the meta-level concern both authors share, even if they disagree on details.'
      },
      {
        id:'PAIR-09', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Identifying word choice and its effect',
        passage:PASSAGE,
        stem:'In Passage A, the phrase "a hand that trembles with doubt" primarily conveys:',
        choices:{A:'Physical frailty in a sculptor whose hands can no longer hold steady', B:'The emotional vulnerability embedded in the creative act', C:'A criticism of the imprecise craftsmanship of hand-carving', D:'A preference for sculpture over rendered digital images'},
        correct:'B',
        expCorrect:'"Trembles with doubt" is emotional, not literal. It illustrates the curator\'s point: authentic art embodies the creator\'s inner struggle. B captures this.',
        expWrong:{
          A:'The trembling is figurative: nothing describes a failing body, only "the weight of memory, failure, and emotion" carried into the work.',
          C:'The curator offers the trembling hand as proof of authentic meaning, not as a fault in craft; doubt is what he admires, not what he faults.',
          D:'The sculpture illustrates human making rather than ranking media; a hand-drawn image would serve the curator\'s point just as well.'
        },
        tip:'Word choice questions: distinguish between literal and figurative meaning. "Trembles" is emotional, not physical.'
      },
      {
        id:'PAIR-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Recognizing implications of author position',
        passage:PASSAGE,
        stem:'Passage B\'s argument implies that the value of an artwork depends on:',
        choices:{A:'The artist\'s emotional state during creation', B:'The amount of conscious effort invested by the creator', C:'Measurable properties of the work itself', D:'The audience\'s understanding of the creator\'s intent'},
        correct:'C',
        expCorrect:'Passage B lists "coherence, innovation, originality" as criteria—all properties of the artifact, not the creator or audience. C is the only option aligned with this.',
        expWrong:{
          A:'Passage B explicitly argues emotion is irrelevant.',
          B:'Effort is not mentioned; criteria are outcome-based.',
          D:'Passage B doesn\'t emphasize audience understanding; it focuses on the work itself.'
        },
        tip:'Implication questions: trace the author\'s logic to unstated but necessary conclusions.'
      },
      {
        id:'PAIR-11', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Evaluating a compromise position',
        passage:PASSAGE,
        stem:'A third author argues that "both emotion and algorithm matter in art—human creation without thought is soulless, and algorithmic creation without purpose is meaningless." This position is most consistent with which of the following?',
        choices:{A:'Passage A\'s emphasis on human struggle', B:'Passage B\'s rejection of emotion as necessary', C:'A synthesis of both passages\' concerns', D:'Neither passage\'s core argument'},
        correct:'C',
        expCorrect:'The third author takes emotion (A\'s concern) and adds the requirement for coherence/purpose (B\'s concern). This is a synthesis, not a full endorsement of either position.',
        expWrong:{
          A:'Overweights emotion; ignores algorithm.',
          B:'Doesn\'t capture Passage B\'s position—B doesn\'t reject emotion, just necessity.',
          D:'This position actually bridges both passages.'
        },
        tip:'Synthesis questions: recognize when a new position borrows from both original positions without fully endorsing either.'
      },
      {
        id:'PAIR-12', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Identifying a rhetorical shift',
        passage:PASSAGE,
        stem:'The shift from Passage A\'s focus on "the human experience" to Passage B\'s focus on "the artifact itself" represents:',
        choices:{A:'A change in subject matter from creation to evaluation', B:'A concession that machines cannot match human creativity', C:'A logical progression from one step of the argument to the next', D:'An acknowledgment that Passage A was partially correct'},
        correct:'A',
        expCorrect:'A shifts the question: instead of "Where does meaning originate?" (creation), B asks "What makes something art?" (evaluation). Different subject, different frame. A is correct.',
        expWrong:{
          B:'Passage B holds the opposite: it defends the merit of machine-generated art, so it does not concede that machines cannot match human creativity.',
          C:'These are opposing views, not progressive steps.',
          D:'B doesn\'t concede A\'s correctness; it sidesteps A\'s premise.'
        },
        tip:'Shift questions: identify *what changed* in the argument\'s focus, not just how one author disagrees with another.'
      }
    ]
  });
})();
