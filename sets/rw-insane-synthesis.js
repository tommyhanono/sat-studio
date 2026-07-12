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
        choices:{A:'Author A believes social media spreads misinformation; Author B denies this.', B:'Author A prioritizes accuracy over access; Author B prioritizes access even if it sacrifices some accuracy.', C:'Author A thinks misinformation is the primary problem; Author B thinks censorship is worse.', D:'Author A wants to eliminate social media; Author B wants to improve it.'},
        correct:'B',
        expCorrect:'A focuses on the *cost* (misinformation, sensationalism). B acknowledges the cost but argues the *benefit* (access, democratization) outweighs it. The disagreement is about trade-offs: accuracy vs. access.',
        expWrong:{
          A:'B doesn\'t deny misinformation exists; B acknowledges it.',
          C:'Oversimplifies; both acknowledge the trade-off, but weight it differently.',
          D:'Neither author proposes elimination; this is a false dichotomy.'
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
        choices:{A:'Acknowledge a legitimate counterargument and then dismiss it with evidence.', B:'Propose a compromise between innovation and regulation.', C:'Argue that regulation is irrelevant to innovation.', D:'Suggest that critics of regulation are uninformed.'},
        correct:'A',
        expCorrect:'"Some might argue" acknowledges the opposing view. "But...within regulatory frameworks" rebuts it with evidence. This is classic refutation structure.',
        expWrong:{
          B:'No compromise is proposed; the author defends regulation.',
          C:'Author implies regulation is important, not irrelevant.',
          D:'Attack on critics\' intelligence is not the primary move; the argument is evidence-based.'
        },
        tip:'Rhetorical moves: "Some argue...But" = acknowledge and refute. "On one hand...On the other hand" = explore both sides. "Perhaps...However" = concede but correct.'
      },
      {
        id:'INS-RW-04', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Identifying a logical fallacy or weakness in reasoning',
        stem:'An author argues: "Countries A and B both implemented universal healthcare and saw wait times increase. Therefore, universal healthcare inherently causes long wait times."\n\nWhich of the following best identifies a flaw in this reasoning?',
        choices:{A:'The argument confuses correlation with causation and ignores other variables (e.g., population growth, existing infrastructure).', B:'The argument fails to specify exactly how many additional days of waiting count as a "long" wait time.', C:'The argument assumes that wait time increases are negative, which is debatable.', D:'The argument uses the word "inherently," which is too informal for policy analysis.'},
        correct:'A',
        expCorrect:'The core flaw is inferring causation from correlation without controlling for confounds. Other factors (population, infrastructure investment, implementation speed) could explain the wait times.',
        expWrong:{
          B:'Es un detalle de precisión, no una falla lógica: aunque se definiera "largo" con un número exacto, el salto de correlación a causa seguiría siendo inválido.',
          C:'Wait time increases are generally regarded as negative; this isn\'t the logical flaw.',
          D:'"Inherently" no es informal, y el nivel de formalidad de una palabra no es una falla de razonamiento. El problema es lógico, no de estilo.'
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
        choices:{A:'Short-term fiscal gains always cause ecological damage.', B:'Prioritizing fiscal gains over environmental protection guarantees irreversible damage.', C:'If a certain condition (prioritizing fiscal gains) is met, then a specific consequence (ecological damage) follows.', D:'Environmental protection is more important than fiscal gains.'},
        correct:'C',
        expCorrect:'The author makes a conditional statement: "If X, then Y." The claim is about the logical relationship, not about absolute truths. C accurately paraphrases this.',
        expWrong:{
          A:'Overstates; the claim is conditional, not universal.',
          B:'Effectively the same as A; both overstate certainty.',
          D:'Inferred but not explicitly stated; the passage is about consequences, not values.'
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
        choices:{A:'Surveys are less reliable than experimental studies.', B:'Self-reported productivity is subjective and may not reflect actual output.', C:'The sample size of 500 is too small.', D:'Not all workers are in the tech industry.'},
        correct:'B',
        expCorrect:'"Higher productivity" based on subjective self-reports is weaker evidence than objective metrics (lines of code, projects completed, etc.). This directly undermines the evidence\'s ability to support the claim.',
        expWrong:{
          A:'True but methodological; B is more fundamental—the *type* of data is questionable.',
          C:'500 is generally adequate for surveys; sample size is less the issue than measurement validity.',
          D:'Relevant to generalization, but doesn\'t undermine the evidence\'s support for the specific claim tested.'
        },
        tip:'Evidence criticism: distinguish between sample size (how many), methodology (how measured), and generalization (to whom). B targets the measurement itself, which is most direct.'
      },
      {
        id:'INS-RW-11', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Implicit stance within neutral reporting',
        stem:'An author writes: "Proponents of the policy argue it will reduce poverty. Critics point out that similar programs in other nations have been widely criticized for creating dependency."\n\nWhich implicit stance does the author reveal through word choice?',
        choices:{A:'Unqualified support for the policy.', B:'Unqualified opposition to the policy.', C:'Skepticism toward optimistic claims, giving weight to cautionary evidence.', D:'Genuine neutrality with no leaning toward either side.'},
        correct:'C',
        expCorrect:'"Critics point out" + "similar programs...have been criticized" elevates the counterargument through framing ("point out" = discovered/revealed). The author implicitly weighs doubt heavily.',
        expWrong:{
          A:'Giving weight to criticism suggests skepticism, not support.',
          B:'The author acknowledges the proponents\' argument; not pure opposition.',
          D:'Word choice ("point out," "criticized") reveals subtle skepticism, not true neutrality.'
        },
        tip:'Neutral reporting is impossible; word choice always reveals stance. "Proponents claim" vs. "Critics point out" suggests different weights, even without explicit judgment.'
      },
      {
        id:'INS-RW-12', type:'mc', domain:'Information and Ideas', difficulty:'Difícil',
        skill:'Recognizing when claims are contradictory vs. complementary',
        stem:'Claim 1: "Climate change is primarily driven by human CO₂ emissions."\n\nClaim 2: "Natural climate variability (e.g., solar cycles) plays a significant role in observed warming."\n\nHow do these claims relate?',
        choices:{A:'Contradictory; both cannot be true.', B:'Complementary; both can be true if properly contextualized (e.g., human emissions dominate but natural factors also contribute).', C:'Unrelated; they address different phenomena.', D:'Claim 2 disproves Claim 1.'},
        correct:'B',
        expCorrect:'Claim 1 emphasizes dominant driver; Claim 2 acknowledges contributing factors. Modern climate science accepts both: humans dominate current warming, but natural variability exists. Complementary, not contradictory.',
        expWrong:{
          A:'Both can coexist if one is the major factor and the other contributory.',
          C:'They address the same phenomenon (climate warming); they interact.',
          D:'Claim 2 doesn\'t disprove 1; it adds nuance to the causal story.'
        },
        tip:'Complementary vs. contradictory: if one emphasizes degree/dominance and the other acknowledges contributing factors, they can both be true. Look for "primarily," "significantly," "plays a role"—these signal degree, not contradiction.'
      }
    ]
  });
})();
