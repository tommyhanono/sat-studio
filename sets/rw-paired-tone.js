/* SAT Studio question set — Reading & Writing: Paired Passages (Hard tier) */
(function(){
  window.SAT_SETS.push({
    id: 'rw-paired-tone',
    title: 'R&W — Paired Passages: Contrast & Tone Shifts',
    section: 'reading',
    level: 'Hard',
    description: 'Paired passages testing tone comparison, author perspective, and synthesis across two texts. Real SAT format.',
    minutes: 14,
    questions: [
      {
        id:'PAIR-01', type:'mc', domain:'Ideas', difficulty:'Difícil',
        skill:'Identifying perspective differences (Passage A vs. Passage B)',
        passageA:'Passage A (Museum Curator):\nArtificial intelligence-generated art lacks the authenticity that defines true creativity. A computer follows algorithms; it does not suffer, struggle, or question. Without the human experience—the weight of memory, failure, and emotion—can a machine truly create? This is not dismissal; it is precision. Art emerges from the human condition. A sculpture carved by a hand that trembles with doubt carries meaning a rendered image never can.',
        passageB:'Passage B (AI Researcher):\nTo claim that emotion is a prerequisite for art is to misunderstand both emotion and art. Bach\'s fugues follow mathematical rules with absolute rigor. Does their beauty diminish because they follow a formula? Conversely, human artists often work mechanically, copying styles without understanding. The question is not whether the creator suffers, but whether the artifact itself—its coherence, innovation, originality—merits consideration. A perfectly rendered digital painting has aesthetic merit regardless of its origin.',
        stem:'How would Passage B\'s author likely respond to Passage A\'s claim that "a machine does not suffer"?',
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
        id:'PAIR-02', type:'mc', domain:'Craft & Structure', difficulty:'Difícil',
        skill:'Identifying tone shifts across passages',
        stem:'The tone of Passage A can be described as:',
        choices:{A:'Dismissive and hostile toward AI', B:'Defensive yet respectful of the boundary between human and machine', C:'Uncertain and wavering in its position', D:'Condescending toward other art forms'},
        correct:'B',
        expCorrect:'Passage A says "This is not dismissal; it is precision," explicitly rejecting harsh criticism while maintaining a clear position. The author respects the distinction but doesn\'t attack AI outright. B captures this nuance.',
        expWrong:{
          A:'"Dismissive" misses the author\'s explicit claim "This is not dismissal."',
          C:'No evidence of wavering; the curator is clear and consistent.',
          D:'The passage doesn\'t compare art forms dismissively.'
        },
        tip:'Tone questions require attention to modifiers and explicit disclaimers. "Not dismissal; it is precision" signals a specific, non-hostile tone.'
      },
      {
        id:'PAIR-03', type:'mc', domain:'Ideas', difficulty:'Hard',
        skill:'Recognizing implied disagreement',
        stem:'Both authors would likely agree that:',
        choices:{A:'Art must emerge from human experience to be valuable', B:'The definition of "art" should consider the artifact, not just its origin', C:'Computers are incapable of creating meaningful art', D:'Emotion and suffering are required for artistic creation'},
        correct:'B',
        expCorrect:'Passage A emphasizes human experience, but Passage B shifts focus to the artifact\'s properties (coherence, innovation). Both implicitly agree that what matters is evaluable—it\'s just a question of *what to evaluate*. B is the only common ground.',
        expWrong:{
          A:'Passage B explicitly rejects this; emotion is not required.',
          C:'Passage B does not concede that computers are incapable.',
          D:'Passage B denies this; it argues emotion is not necessary.'
        },
        tip:'For "both would agree" questions, find the safest common ground, not the most obvious shared word.'
      },
      {
        id:'PAIR-04', type:'mc', domain:'Ideas', difficulty:'Difícil',
        skill:'Using evidence from one passage to evaluate claims in another',
        stem:'Passage B\'s reference to "human artists often work mechanically, copying styles without understanding" primarily serves to:',
        choices:{A:'Admit that humans are also capable of unthinking labor', B:'Undermine Passage A\'s assumption that human creation guarantees authenticity', C:'Prove that machines are superior to humans', D:'Show that Passage A\'s criteria are too broad'},
        correct:'B',
        expCorrect:'This example directly contradicts Passage A\'s implicit claim: humans create authentically because they feel, so human work is inherently authentic. By showing humans can work mechanically, Passage B undermines that assumption.',
        expWrong:{
          A:'True but doesn\'t capture the *rhetorical purpose* (it\'s not just admitting, it\'s using this to attack A\'s logic).',
          C:'Too extreme; Passage B doesn\'t claim superiority, just parity in potential.',
          D:'Close, but B isn\'t arguing the criteria are "too broad"—B is arguing they\'re misdirected.'
        },
        tip:'Purpose questions: identify what the statement *does to* the opposing argument, not just what it says.'
      },
      {
        id:'PAIR-05', type:'mc', domain:'Craft & Structure', difficulty:'Hard',
        skill:'Identifying the effect of a rhetorical technique (analogy)',
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
        id:'PAIR-06', type:'mc', domain:'Ideas', difficulty:'Difícil',
        skill:'Inferring unstated disagreement',
        stem:'The passages suggest that Passage A\'s author would most likely view Passage B\'s emphasis on "artifact coherence" as:',
        choices:{A:'A reasonable alternative to measuring artistic merit', B:'An evasion of the deeper question: where meaning originates', C:'A technically sound but emotionally hollow framework', D:'A valid supplement to the human experience requirement'},
        correct:'B',
        expCorrect:'Passage A grounds art in the human condition and emotional origin. Passage B shifts focus to properties of the work itself. The curator would likely see this as dodging the fundamental question of *meaning\'s source*. B captures this philosophical gulf.',
        expWrong:{
          A:'Passage A doesn\'t treat B\'s approach as "reasonable alternative"—it implies it\'s insufficient.',
          C:'Close in tone, but "emotionally hollow" is too blunt for the curator\'s measured stance.',
          D:'Passage A doesn\'t view B\'s framework as a "supplement"; the passages are in fundamental tension.'
        },
        tip:'Inference questions across paired passages: identify the *deep* disagreement, not just surface differences.'
      },
      {
        id:'PAIR-07', type:'mc', domain:'Ideas', difficulty:'Hard',
        skill:'Recognizing a logical structure (premise-counterargument)',
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
        id:'PAIR-08', type:'mc', domain:'Ideas', difficulty:'Difícil',
        skill:'Synthesizing a claim across both passages',
        stem:'Which of the following would both authors likely support as a research question for future study?',
        choices:{A:'"How can we ensure that AI art is indistinguishable from human art?"', B:'"What criteria should we use to evaluate artistic merit independent of the creator?"', C:'"Why do humans respond emotionally to certain artworks?"', D:'"Is suffering necessary for understanding beauty?"'},
        correct:'B',
        expCorrect:'A asks how to eliminate difference (not relevant); B asks about objective criteria—both authors grapple with this, just from different angles. C is too narrow (Passage A\'s concern, not B\'s). D assumes suffering matters (Passage B rejects this).',
        expWrong:{
          A:'Not aligned with either author\'s goal.',
          C:'Passage B wouldn\'t frame it as a "human suffering" question.',
          D:'Passage B explicitly argues suffering is not necessary.'
        },
        tip:'Synthesis questions: find the meta-level concern both authors share, even if they disagree on details.'
      },
      {
        id:'PAIR-09', type:'mc', domain:'Craft & Structure', difficulty:'Hard',
        skill:'Identifying word choice and its effect',
        stem:'In Passage A, the phrase "a hand that trembles with doubt" primarily conveys:',
        choices:{A:'Physical weakness in the artist', B:'The emotional vulnerability embedded in the creative act', C:'A criticism of imprecise craftsmanship', D:'A preference for sculpture over other art forms'},
        correct:'B',
        expCorrect:'"Trembles with doubt" is emotional, not literal. It illustrates the curator\'s point: authentic art embodies the creator\'s inner struggle. B captures this.",
        expWrong:{
          A:'Trembling is metaphorical, not literal weakness.',
          C:'"Doubt" is not a criticism of craft quality; it\'s a sign of authenticity.',
          D:'No comparison of art forms here.'
        },
        tip:'Word choice questions: distinguish between literal and figurative meaning. "Trembles" is emotional, not physical.'
      },
      {
        id:'PAIR-10', type:'mc', domain:'Ideas', difficulty:'Difícil',
        skill:'Recognizing implications of author position',
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
        id:'PAIR-11', type:'mc', domain:'Ideas', difficulty:'Hard',
        skill:'Evaluating a compromise position',
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
        id:'PAIR-12', type:'mc', domain:'Craft & Structure', difficulty:'Difícil',
        skill:'Identifying a rhetorical shift',
        stem:'The shift from Passage A\'s focus on "human experience" to Passage B\'s focus on "artifact properties" represents:',
        choices:{A:'A change in subject matter from creation to evaluation', B:'A rejection of Passage A\'s values in favor of practical criteria', C:'A logical progression from one step of the argument to the next', D:'An acknowledgment that Passage A was partially correct'},
        correct:'A',
        expCorrect:'A shifts the question: instead of "Where does meaning originate?" (creation), B asks "What makes something art?" (evaluation). Different subject, different frame. A is correct.',
        expWrong:{
          B:'B doesn\'t "reject" A\'s values—B reframes the question entirely.',
          C:'These are opposing views, not progressive steps.',
          D:'B doesn\'t concede A\'s correctness; it sidesteps A\'s premise.'
        },
        tip:'Shift questions: identify *what changed* in the argument\'s focus, not just how one author disagrees with another.'
      }
    ]
  });
})();
