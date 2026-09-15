/* SAT Studio question set — Reading & Writing: Advanced Synthesis (INSANE tier) */
(function(){
  window.SAT_SETS.push({
    id: 'rw-insane-synthesis',
    title: 'R&W — Synthesis & Rhetorical Mastery (INSANE)',
    section: 'rw',
    level: 'Difícil',
    description: 'Ultra-hard synthesis: multi-clause logic, rhetorical intent mastery, and evidence-claim mismatches. 750+ level.',
    minutes: 16,
    questions: [
      {
        id:'INS-RW-01', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Multi-clause synthesis (AND/BUT logic)',
        passage:'<b>Text 1 (Author A)</b><br>While social media facilitates rapid information sharing, the lack of editorial oversight creates a vector for misinformation. Crucially, the incentive structures reward sensationalism over accuracy, eroding public discourse.<br><br><b>Text 2 (Author B)</b><br>Yet even with these challenges, the alternative—centralized gatekeeping—suppresses minority voices. The democratization of publishing, despite its flaws, has empowered previously marginalized communities to participate directly in public conversation.',
        stem:'Which statement best captures the fundamental disagreement between the two authors?',
        choices:{A:'Author A believes the absence of editorial oversight spreads misinformation; Author B denies that it does.', B:'Author A prioritizes accuracy over access; Author B prioritizes access even if it sacrifices some accuracy.', C:'Author A thinks misinformation is the primary problem; Author B thinks censorship is worse.', D:'Author A wants publishing returned to centralized gatekeepers; Author B wants the open platforms left exactly as they are.'},
        correct:'B',
        expCorrect:'A focuses on the *cost* (misinformation, sensationalism). B acknowledges the cost but argues the *benefit* (access, democratization) outweighs it. The disagreement is about trade-offs: accuracy vs. access.',
        expWrong:{
          A:'Author B never denies the problem — "even with these challenges" concedes it outright; the disagreement is over what that cost buys, not over whether it exists.',
          C:'Oversimplifies; both acknowledge the trade-off, but weight it differently.',
          D:'Neither remedy is proposed: A only diagnoses the incentive problem, and B calls the open system flawed ("despite its flaws") rather than fine as it stands.'
        },
        tip:'Synthesis disagreements often aren\'t black-and-white. Look for authors who agree on the problem but disagree on priorities or solutions.'
      },
      {
        id:'INS-RW-02', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Evidence matching under ambiguity',
        stem:'An author writes: "Recent studies show that remote work increases productivity for knowledge workers. However, team cohesion suffers, particularly in organizations that lack robust virtual collaboration tools."\n\nWhich claim below is MOST strongly supported by this passage?',
        choices:{A:'Remote work is universally beneficial for all types of jobs.', B:'Organizations should invest in virtual collaboration tools to mitigate cohesion loss.', C:'Productivity gains and cohesion loss are independently variable based on tool availability.', D:'Remote work is more productive than office work for knowledge workers under certain conditions.'},
        correct:'D',
        expCorrect:'The passage states studies show productivity increases for knowledge workers (with implicit conditions, given the "However"). C is supported but overreaches ("independently variable"). B is inferred but not directly stated. D is the closest match to what\'s explicitly stated.',
        expWrong:{
          A:'Passage qualifies to "knowledge workers," not universally.',
          B:'Inferred but not explicitly supported; passage doesn\'t advocate for tool investment.',
          C:'Overstates the relationship; passage doesn\'t isolate tool availability as the variable.'
        },
        tip:'Strongest evidence: match exact claims in the passage. Inferred claims (B, C) are weaker than explicitly stated claims (D), even if plausible.'
      },
      {
        id:'INS-RW-03', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Rhetorical intent (implicit persuasion)',
        stem:'An author writes: "Some might argue that strict regulations stifle innovation. But every major industry breakthrough has occurred within regulatory frameworks that balanced safety and progress."\n\nThe author\'s primary rhetorical goal is to:',
        choices:{A:'Acknowledge a legitimate counterargument and then dismiss it with evidence.', B:'Propose a compromise in which safety rules are traded for faster progress.', C:'Argue that regulation has had no bearing on where breakthroughs occur.', D:'Suggest that critics of regulation are too uninformed to be answered.'},
        correct:'A',
        expCorrect:'"Some might argue" acknowledges the opposing view. "But...within regulatory frameworks" rebuts it with evidence. This is classic refutation structure.',
        expWrong:{
          B:'No bargain is offered: the author defends the frameworks that already exist rather than proposing to trade safety away for speed.',
          C:'The author claims the reverse — every breakthrough happened *within* a regulatory framework, so regulation is part of the story, not beside the point.',
          D:'The author does answer the critics, and with evidence; nothing in the sentence questions what they know or waves them off as not worth a reply.'
        },
        tip:'Rhetorical moves: "Some argue...But" = acknowledge and refute. "On one hand...On the other hand" = explore both sides. "Perhaps...However" = concede but correct.'
      },
      {
        id:'INS-RW-04', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Identifying a logical fallacy or weakness in reasoning',
        stem:'An author argues: "Countries A and B both implemented universal healthcare and saw wait times increase. Therefore, universal healthcare inherently causes long wait times."\n\nWhich of the following best identifies a flaw in this reasoning?',
        choices:{A:'The argument confuses correlation with causation and ignores other variables (e.g., population growth, existing infrastructure).', B:'The argument fails to specify exactly how many additional days of waiting count as a "long" wait time.', C:'The argument assumes that longer waits are always bad, when they may simply reflect more people finally gaining access to the care they need.', D:'The argument uses the word "inherently," which is too vague to carry a policy recommendation.'},
        correct:'A',
        expCorrect:'The core flaw is inferring causation from correlation without controlling for confounds. Other factors (population, infrastructure investment, implementation speed) could explain the wait times.',
        expWrong:{
          B:'That is a matter of precision, not a logical flaw: even if "long" were defined with an exact number, the leap from correlation to cause would still be invalid.',
          C:'That quarrels with the argument’s values, not with its logic: even if longer waits were welcome, inferring an inherent cause from two cases would still be invalid.',
          D:'How precise one word is has no bearing on whether the inference holds; the problem is the jump from two cases to an inherent cause, not the vocabulary.'
        },
        tip:'Causation fallacies: "X happened, then Y happened" doesn\'t mean X caused Y. Always look for confounding variables or alternative explanations.'
      },
      {
        id:'INS-RW-05', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Word choice reflecting implicit attitude toward complexity',
        stem:'An author describes a policy as having "admirable ambitions but labyrinthine implementation requirements."\n\nThe phrase "labyrinthine implementation requirements" implies the author views the policy as:',
        choices:{A:'Too simple and lacking detail.', B:'Needlessly complex and difficult to navigate.', C:'Well-designed despite surface-level confusion.', D:'Impossible to execute under any circumstances.'},
        correct:'B',
        expCorrect:'"Labyrinthine" = maze-like, intricate, and hard to navigate. Combined with "implementation requirements," it suggests excessive complexity.',
        expWrong:{
          A:'Labyrinthine means intricate/complex, opposite of simple.',
          C:'No indication of hidden elegance; the implication is negative.',
          D:'"Labyrinthine" suggests difficult, but not necessarily "impossible."'
        },
        tip:'Negative modifiers: "labyrinthine," "opaque," "byzantine" = complex/confusing (negative). "Elegant," "streamlined" = simple/clear (positive).'
      },
      {
        id:'INS-RW-06', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Evaluating a conditional claim',
        stem:'An author writes: "If policymakers prioritize short-term fiscal gains over environmental protection, irreversible ecological damage will inevitably follow."\n\nWhich statement most accurately reflects what the author actually claims?',
        choices:{A:'Short-term fiscal gains always cause irreversible ecological damage, whatever else policymakers may choose to protect.', B:'Prioritizing fiscal gains over environmental protection has already set irreversible damage in motion.', C:'If a certain condition (prioritizing fiscal gains) is met, then a specific consequence (ecological damage) follows.', D:'Environmental protection matters more than any short-term fiscal gain a government might capture.'},
        correct:'C',
        expCorrect:'The author makes a conditional statement: "If X, then Y." The claim is about the logical relationship, not about absolute truths. C accurately paraphrases this.',
        expWrong:{
          A:'Turns a conditional into a universal law: the author’s claim depends on those gains being prioritized *over* environmental protection, not on their occurring at all.',
          B:'The author states a condition; he never says it has been met. Reporting the damage as already under way asserts the "if" instead of leaving it hypothetical.',
          D:'A ranking of values the author may well share but never states: the sentence predicts a consequence rather than declaring which goal is worthier.'
        },
        tip:'Conditional claims: "If X, then Y" does NOT mean "X always causes Y" or "X is bad." It means a specific logical relationship under a specific condition.'
      },
      {
        id:'INS-RW-07', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Identifying tone shift within a paragraph',
        stem:'Paragraph: "The research is groundbreaking and has attracted international attention. Critics, however, raise valid concerns about methodology. Despite these limitations, the findings offer a compelling roadmap for future investigation."\n\nThe overall tone of the paragraph is best described as:',
        choices:{A:'Unequivocal enthusiasm for the research.', B:'Balanced optimism with acknowledgment of flaws.', C:'Skepticism tempered by recognition of potential.', D:'Dismissal of the research\'s value.'},
        correct:'B',
        expCorrect:'"Groundbreaking," "compelling roadmap" = optimism. "Valid concerns," "limitations" = acknowledgment of flaws. "Despite" = balancing the two.',
        expWrong:{
          A:'Ignores the acknowledgment of flaws.',
          C:'Skepticism is too strong; the author leans positive overall.',
          D:'Dismissal contradicts "groundbreaking" and "compelling."'
        },
        tip:'Balanced tone: look for both positive and negative language linked by conjunctions like "but," "however," "despite." They signal nuance, not pure approval or disapproval.'
      },
      {
        id:'INS-RW-08', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Synthesizing implicit author agreement',
        stem:'Passage A: "Language shapes thought; we cannot conceive of what our language does not contain words for."\n\nPassage B: "While language influences cognition, the relationship is bidirectional. Thought often precedes and drives language evolution."\n\nWhich statement reflects a claim BOTH authors would likely accept?',
        choices:{A:'Language and thought are entirely separate phenomena.', B:'Language has some influence on cognitive processes.', C:'Thought is the sole driver of language change.', D:'Bilingual individuals are more intelligent than monolinguals.'},
        correct:'B',
        expCorrect:'A claims language shapes thought (unidirectional). B acknowledges this influence but adds a counterflow. B\'s statement—"language has some influence"—is acceptable to both.',
        expWrong:{
          A:'Contradicts both passages.',
          C:'Passage A would reject this; A emphasizes language\'s role.',
          D:'Neither passage addresses intelligence or bilingualism.'
        },
        tip:'Common ground in disagreement: find the claim that both authors accept, even if they disagree on magnitude or directionality.'
      },
      {
        id:'INS-RW-09', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Recognizing rhetorical counterargument strategy',
        stem:'An author writes: "Critics claim that artificial intelligence will displace workers en masse. Yet the Industrial Revolution, despite dire predictions, ultimately created more jobs than it destroyed. History suggests adaptation, not catastrophe."\n\nWhich logical move does the author make?',
        choices:{A:'Uses an historical analogy to suggest a similar outcome is likely.', B:'Proves that AI will not displace workers.', C:'Dismisses all concerns about automation.', D:'Argues that historical events and modern technology are identical.'},
        correct:'A',
        expCorrect:'The author draws a parallel between the Industrial Revolution and AI: both sparked fears, yet resulted in adaptation. This is an historical analogy suggesting a similar outcome.',
        expWrong:{
          B:'Analogy doesn\'t prove; it suggests probability based on precedent.',
          C:'The author acknowledges the concern ("Critics claim"); doesn\'t dismiss.',
          D:'No claim of identity; analogy requires structural similarity, not identity.'
        },
        tip:'Analogical arguments: compare structure, not identity. "Like X led to Y, Z will likely lead to similar outcomes." Stronger if structural similarities are explicit.'
      },
      {
        id:'INS-RW-10', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Evaluating whether evidence supports a claim',
        stem:'An author claims: "Remote work has revolutionized productivity." The supporting evidence: "A survey of 500 tech workers showed 70% reported higher productivity at home."\n\nWhich criticism most directly challenges the evidence\'s relevance?',
        choices:{A:'Surveys are less reliable than experiments that assign workers to home or office at random.', B:'Self-reported productivity is subjective and may not reflect actual output.', C:'The sample of 500 workers is too small to support a claim about a revolution.', D:'Tech workers are not representative of the workforce the claim describes.'},
        correct:'B',
        expCorrect:'"Higher productivity" based on subjective self-reports is weaker evidence than objective metrics (lines of code, projects completed, etc.). This directly undermines the evidence\'s ability to support the claim.',
        expWrong:{
          A:'A ranking of methods in the abstract; it never says what is wrong with *this* measurement, which is the relevance the question asks you to judge.',
          C:'500 responses is ample for a survey estimate, and no sample size fixes the deeper trouble: the workers graded themselves.',
          D:'That limits how far the finding travels, but the claim is about knowledge workers in the first place; the evidence fails them before it fails anyone else.'
        },
        tip:'Evidence criticism: distinguish between sample size (how many), methodology (how measured), and generalization (to whom). B targets the measurement itself, which is most direct.'
      },
      {
        id:'INS-RW-11', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Implicit stance within neutral reporting',
        stem:'An author writes: "Proponents of the policy argue it will reduce poverty. Critics point out that similar programs in other nations have been widely criticized for creating dependency."\n\nWhich implicit stance does the author reveal through word choice?',
        choices:{A:'Unqualified support for the policy and its promise to reduce poverty.', B:'Unqualified opposition to the policy as a breeder of dependency.', C:'Skepticism toward optimistic claims, giving weight to cautionary evidence.', D:'Genuine neutrality, since the author only reports what each side says.'},
        correct:'C',
        expCorrect:'"Critics point out" + "similar programs...have been criticized" elevates the counterargument through framing ("point out" = discovered/revealed). The author implicitly weighs doubt heavily.',
        expWrong:{
          A:'Handing the critics the stronger verb is not support; the author never endorses the promise to reduce poverty.',
          B:'The author reports the dependency charge rather than making it, and still gives the proponents their argument; the leaning is a tilt, not a verdict.',
          D:'Reporting both sides is not weighting them equally: "argue" leaves the proponents with an assertion, while "point out" grants the critics a finding.'
        },
        tip:'Neutral reporting is impossible; word choice always reveals stance. "Proponents claim" vs. "Critics point out" suggests different weights, even without explicit judgment.'
      },
      {
        id:'INS-RW-12', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Recognizing when claims are contradictory vs. complementary',
        stem:'Claim 1: "Climate change is primarily driven by human CO₂ emissions."\n\nClaim 2: "Natural climate variability (e.g., solar cycles) plays a significant role in observed warming."\n\nHow do these claims relate?',
        choices:{A:'Contradictory; if human emissions are the primary driver of the warming, then natural variability cannot also be playing a significant role in it.', B:'Complementary; both can be true if properly contextualized (e.g., human emissions dominate but natural factors also contribute).', C:'Unrelated; Claim 1 is about emissions policy while Claim 2 is about the physics of the sun.', D:'Claim 2 disproves Claim 1, since any natural contribution rules out a human cause.'},
        correct:'B',
        expCorrect:'Claim 1 emphasizes dominant driver; Claim 2 acknowledges contributing factors. Modern climate science accepts both: humans dominate current warming, but natural variability exists. Complementary, not contradictory.',
        expWrong:{
          A:'A primary driver leaves room for lesser ones: "primarily" ranks causes rather than excluding them, so both statements can hold at the same time.',
          C:'Both claims are about what is warming the same climate; they name competing contributions to one phenomenon, not two separate subjects.',
          D:'Only if causes were exclusive: Claim 2 says natural variability "plays a significant role", which adds a contributor instead of removing one.'
        },
        tip:'Complementary vs. contradictory: if one emphasizes degree/dominance and the other acknowledges contributing factors, they can both be true. Look for "primarily," "significantly," "plays a role"—these signal degree, not contradiction.'
      }
    ]
  });
})();
