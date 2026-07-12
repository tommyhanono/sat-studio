/* SAT Studio question set — Reading & Writing: Author's Tone & Attitude (Media-Hard) */
(function(){
  window.SAT_SETS.push({
    id: 'rw-tone-attitude',
    title: 'R&W — Author\'s Tone & Attitude (Advanced)',
    section: 'rw',
    level: 'Difícil',
    description: 'Nuanced tone questions: identify author\'s attitude, tone shifts, rhetorical effect of word choice, and implicit skepticism or irony.',
    minutes: 12,
    questions: [
      {
        id:'TONE-01', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Identifying tone markers (word choice)',
        stem:'As used in the text, the author\'s tone toward the proposed policy can best be described as:\n\n"While the policy has merit, the implementation timeline fails to account for existing infrastructure constraints—a critical oversight that will strain resources for years."\n',
        choices:{A:'Enthusiastic and unqualified support', B:'Cautious support with reservations', C:'Indifferent neutrality', D:'Outright hostility'},
        correct:'B',
        expCorrect:'"Has merit" signals support; "critical oversight" signals concern. The combination = cautious support with reservations.',
        expWrong:{
          A:'The word "oversight" (mistake) contradicts enthusiasm.',
          C:'The author clearly holds a position (merit + concern), not indifference.',
          D:'"Hostility" would require language like "dangerous," "foolish," or "unacceptable." This is measured, not hostile.'
        },
        tip:'Tone nuance: look for BOTH positive and negative markers. "Merit...but" = cautious support. Don\'t overweight the negative word alone.'
      },
      {
        id:'TONE-02', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Recognizing irony or sarcasm',
        stem:'The author\'s tone in "Surely this brilliant new algorithm will solve decades of unsolved problems overnight" is best described as:\n',
        choices:{A:'Sincere and optimistic', B:'Skeptical and sarcastic', C:'Uncertain and exploratory', D:'Resigned and defeatist'},
        correct:'B',
        expCorrect:'"Surely" + "brilliant" + "overnight" is excessive praise that signals sarcasm. The author is mocking an unrealistic expectation.',
        expWrong:{
          A:'If sincere, the author would not use such exaggeration.',
          C:'Not exploratory; the author is making a definite point.',
          D:'Not defeatist (passive); sarcasm is active criticism.'
        },
        tip:'Sarcasm signals: extreme exaggeration, ironic positivity masking criticism, "surely" preceding an absurd claim.'
      },
      {
        id:'TONE-03', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Distinguishing related tones (skeptical vs. dismissive)',
        stem:'Which description best captures the difference between "skeptical" and "dismissive" tones?\n\n(A) "The evidence is questionable and requires more rigorous testing." (Author X)\n(B) "This idea is obviously wrong and not worth serious consideration." (Author Y)\n',
        choices:{A:'Author X is dismissive; Author Y is skeptical', B:'Author X is skeptical; Author Y is dismissive', C:'Both authors are equally skeptical', D:'Both authors are equally dismissive'},
        correct:'B',
        expCorrect:'Skeptical = doubts but is open to evidence ("questionable, requires more testing"). Dismissive = closes off discussion ("obviously wrong, not worth consideration").',
        expWrong:{
          A:'Reversed. X is skeptical (open to evidence), Y is dismissive (closed).',
          C:'They differ in openness to further investigation.',
          D:'Y is dismissive, X is skeptical—not the same.'
        },
        tip:'Skeptical = open doubt. Dismissive = closed rejection. Skeptical writers use phrases like "requires testing" or "further evidence needed." Dismissive writers use "obviously," "not worth," "folly."'
      },
      {
        id:'TONE-04', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Recognizing tone shift',
        stem:'The passage begins with "Traditional manufacturing faces mounting challenges..." and concludes with "...yet innovative companies are discovering unexpected opportunities in this transition." The overall tone of the passage is best described as:\n',
        choices:{A:'Entirely pessimistic', B:'Initially critical, shifting to cautiously optimistic', C:'Entirely optimistic', D:'Ironic throughout'},
        correct:'B',
        expCorrect:'Opening = challenges (negative). Closing = opportunities (positive). Tone shifts from concern to cautious optimism.',
        expWrong:{
          A:'Ignores the optimistic conclusion.',
          C:'Ignores the critical opening.',
          D:'No irony present; this is a genuine tonal progression.'
        },
        tip:'Tone shift questions: identify the opening tone, the closing tone, and the trajectory. Phrases like "yet" and "despite" often signal shifts.'
      },
      {
        id:'TONE-05', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Word choice and implied attitude',
        stem:'The author\'s use of the word "ambitious" in "The government\'s ambitious new infrastructure plan..." suggests the author views the plan as:\n',
        choices:{A:'Bold and worthy of respect', B:'Dangerously overconfident', C:'Appropriately modest', D:'Unclear in its intent'},
        correct:'A',
        expCorrect:'"Ambitious" is generally positive, implying the scale and boldness are admirable (not naive or reckless in this neutral context).',
        expWrong:{
          B:'"Ambitious" alone doesn\'t convey overconfidence. Context would clarify (e.g., "ambitious but untested" = risky).',
          C:'"Ambitious" means large-scale, the opposite of modest.',
          D:'No indication of unclear intent.'
        },
        tip:'Word choice reflects tone. "Ambitious" = bold/large-scale (respect). "Reckless" = dangerous (disapproval). "Tentative" = cautious (doubt).'
      },
      {
        id:'TONE-06', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Identifying tone within an argument (not overall tone)',
        stem:'In the passage, the author supports renewable energy but writes: "Despite solar panels\' well-documented benefits, installation costs remain prohibitively high for low-income households—an undeniable barrier to equitable adoption."\n\nThe tone of this sentence regarding renewable energy is:\n',
        choices:{A:'Entirely supportive', B:'Entirely critical', C:'Supportively realistic (supportive of the goal, realistic about obstacles)', D:'Dismissive of cost concerns'},
        correct:'C',
        expCorrect:'The author supports renewables ("well-documented benefits") and acknowledges real obstacles ("prohibitively high," "undeniable barrier") without abandoning the goal. This is nuanced support.',
        expWrong:{
          A:'Ignores the realistic acknowledgment of cost barriers.',
          B:'Ignores the supportive language about benefits.',
          D:'The author takes cost concerns seriously, not dismissively.'
        },
        tip:'Supportive ≠ Uncritical. Authors can support a goal AND acknowledge real obstacles. Look for both positive and negative language to assess nuance.'
      },
      {
        id:'TONE-07', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Recognizing tone through punctuation and structure',
        stem:'Which sentence best conveys a tone of concern mixed with determination?\n',
        choices:{A:'The problem is insurmountable; we might as well give up.', B:'The problem is significant, but our commitment to solving it remains unshaken.', C:'We are uncertain whether a solution exists.', D:'The problem is trivial.'},
        correct:'B',
        expCorrect:'"Significant" = concern. "Unshaken" = determination. Conjunctions like "but" link these opposing tones.',
        expWrong:{
          A:'Resignation, not determination.',
          C:'Uncertainty, not determination.',
          D:'Dismissal, not concern.'
        },
        tip:'Tone-signaling structures: "______, but ____" (first clause one tone, second clause shifts it). "______, yet ____" (acknowledgment + reaffirmation).'
      },
      {
        id:'TONE-08', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Identifying implicit attitude (not explicit)',
        stem:'An author writes: "The research has been ongoing for over a decade; still, no consensus has emerged."\n\nThe implicit attitude toward the research is:\n',
        choices:{A:'Complete approval', B:'Mild disappointment or surprise at lack of progress', C:'Indifference', D:'Enthusiasm for continued funding'},
        correct:'B',
        expCorrect:'"Over a decade" → investment. "Still, no consensus" → surprise/disappointment. The structure (contrast) implies expected progress hasn\'t arrived.',
        expWrong:{
          A:'No approval is indicated; the author notes *lack* of consensus.',
          C:'"Still" signals the author cares about the outcome.',
          D:'No recommendation for funding present; only observation of lack of progress.'
        },
        tip:'Implicit tone: read between the lines. "Still" and "yet" signal the author expected X but got ¬X. That\'s disappointment or surprise.'
      },
      {
        id:'TONE-09', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Tone in a qualified statement (neither fully positive nor negative)',
        stem:'An educator writes: "Project-based learning shows promise for engaging students, though logistical challenges and variable implementation quality have limited its widespread adoption."\n\nThe educator\'s tone is best described as:\n',
        choices:{A:'Enthusiastic endorsement without reservations', B:'Cautious optimism tempered by practical concerns', C:'Hopeful that obstacles will eventually disappear', D:'Resigned acceptance that the method cannot work at scale'},
        correct:'B',
        expCorrect:'"Shows promise" = optimism. "Limited widespread adoption" due to challenges = practical concern. Balanced and cautious.',
        expWrong:{
          A:'The "logistical challenges" are not treated as minor.',
          C:'The author doesn\'t suggest challenges will disappear, only acknowledges them.',
          D:'"Cannot work at scale" is too pessimistic; the author sees promise.'
        },
        tip:'Cautious optimism = positive potential + real-world obstacles acknowledged. Authors use "though," "despite," "however" to add realism to optimism.'
      },
      {
        id:'TONE-10', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Distinguishing author tone from subject description',
        stem:'An author writes about a political speech: "The candidate delivered a fiery, emotionally charged rant, peppered with bold accusations and sweeping generalizations."\n\nThe author\'s tone toward the speech is:\n',
        choices:{A:'Neutral reporting of facts', B:'Critical and disapproving', C:'Admiring of the candidate\'s passion', D:'Uncertain about the speech\'s impact'},
        correct:'B',
        expCorrect:'"Rant," "sweeping generalizations," and "accusations" are loaded terms. The author\'s word choices suggest disapproval.',
        expWrong:{
          A:'"Rant" and "generalizations" are judgmental, not neutral.',
          C:'"Rant" contradicts admiration; the author frames passion negatively.',
          D:'The author holds a clear position, not uncertainty.'
        },
        tip:'Author tone ≠ subject properties. Don\'t confuse "the candidate was emotional" (neutral) with "the candidate ranted" (critical). Word choice reveals tone.'
      }
    ]
  });
})();
