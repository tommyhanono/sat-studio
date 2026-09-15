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
        choices:{A:'Uniformly pessimistic, since the closing clause concedes nothing', B:'Initially critical, shifting to cautiously optimistic', C:'Optimistic from the opening sentence onward', D:'Ironic, with "opportunities" meant sarcastically'},
        correct:'B',
        expCorrect:'Opening = challenges (negative). Closing = opportunities (positive). Tone shifts from concern to cautious optimism.',
        expWrong:{
          A:'The closing clause concedes a great deal: it reports that companies are "discovering unexpected opportunities." Calling the tone uniformly negative means ignoring the last eight words of the passage.',
          C:'It skips the opening, which reports "mounting challenges." The passage never treats those challenges as solved or overstated; it ends on companies working through them.',
          D:'"Opportunities" is meant straight. The passage says innovative companies are actually finding them, so there is no gap between what is said and what is meant — and irony needs that gap.'
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
        choices:{A:'Entirely supportive, since the costs are named only to be quickly brushed aside', B:'Entirely critical, treating the benefits as outweighed by the cost', C:'Supportively realistic (supportive of the goal, realistic about obstacles)', D:'Dismissive of cost concerns as a distraction from adoption'},
        correct:'C',
        expCorrect:'The author supports renewables ("well-documented benefits") and acknowledges real obstacles ("prohibitively high," "undeniable barrier") without abandoning the goal. This is nuanced support.',
        expWrong:{
          A:'Nothing is brushed aside: the costs are called "prohibitively high" and the barrier "undeniable." The support is real, but it is not the whole sentence.',
          B:'It reverses the weighting. The benefits are "well-documented," and the author never says the cost cancels them — only that it blocks equitable adoption.',
          D:'A distraction is what you set aside. This author does the opposite, calling the cost an "undeniable barrier" to the very goal being supported.'
        },
        tip:'Supportive ≠ Uncritical. Authors can support a goal AND acknowledge real obstacles. Look for both positive and negative language to assess nuance.'
      },
      {
        id:'TONE-07', type:'mc', domain:'Craft and Structure', difficulty:'Difícil',
        skill:'Recognizing tone through punctuation and structure',
        stem:'Which sentence best conveys a tone of concern mixed with determination?\n',
        choices:{A:'The problem is insurmountable, and further effort would waste resources.', B:'The problem is significant, but our commitment to solving it remains unshaken.', C:'We are concerned about the problem, though a solution may not exist.', D:'The problem is minor, so our usual procedures will resolve it in time.'},
        correct:'B',
        expCorrect:'"Significant" = concern. "Unshaken" = determination. Conjunctions like "but" link these opposing tones.',
        expWrong:{
          A:'The concern is real, but "insurmountable" plus a call to stop spending effort is resignation. Determination requires the commitment to survive the bad news.',
          C:'This has the concern and adds doubt about whether the work can succeed. Doubt is not determination: nothing here says the effort continues.',
          D:'Confidence with no concern attached. Calling the problem minor removes the very thing the question asks the sentence to convey.'
        },
        tip:'Tone-signaling structures: "______, but ____" (first clause one tone, second clause shifts it). "______, yet ____" (acknowledgment + reaffirmation).'
      },
      {
        id:'TONE-08', type:'mc', domain:'Craft and Structure', difficulty:'Media',
        skill:'Identifying implicit attitude (not explicit)',
        stem:'An author writes: "The research has been ongoing for over a decade; still, no consensus has emerged."\n\nThe implicit attitude toward the research is:\n',
        choices:{A:'Approval of the decade of sustained effort', B:'Mild disappointment or surprise at lack of progress', C:'Detachment from a debate the author does not join', D:'Confidence that a consensus is about to emerge'},
        correct:'B',
        expCorrect:'"Over a decade" → investment. "Still, no consensus" → surprise/disappointment. The structure (contrast) implies expected progress hasn\'t arrived.',
        expWrong:{
          A:'The decade is reported as a setup, not as praise: "still" turns that long effort into the reason the missing consensus is worth remarking on.',
          C:'"Still" is the giveaway. Someone detached from the question would have had no expectation to be let down, and would not mark the absence of consensus at all.',
          D:'It reverses the sentence. "No consensus has emerged" reports a result that has not arrived, not one the author expects imminently.'
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
