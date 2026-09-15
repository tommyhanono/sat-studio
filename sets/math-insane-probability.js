/* SAT Studio question set — Math: Probability & Combinatorial Logic (INSANE tier) */
(function(){
  window.SAT_SETS.push({
    id: 'math-insane-probability',
    title: 'Math — Probability & Combinatorial Logic (INSANE)',
    section: 'math',
    level: 'Difícil',
    description: 'Ultra-hard: conditional probability, combinatorics with constraints, and multi-stage reasoning.',
    minutes: 20,
    questions: [
      {
        id:'INS-PROB-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Conditional probability (Bayes reasoning)',
        stem:'A test for a rare disease has a 95% true positive rate (detects disease if present) and a 10% false positive rate (incorrectly flags absence as disease). If 1% of the population has the disease, what is the probability a positive test result indicates the person actually has the disease?',
        choices:{A:'Approximately 8.8%', B:'Approximately 50%', C:'Approximately 87%', D:'Approximately 95%'},
        correct:'A',
        expCorrect:'Let D = disease, + = positive test. P(D|+) = P(+|D) × P(D) / P(+). P(+|D) = 0.95, P(D) = 0.01, P(+|¬D) = 0.10, P(¬D) = 0.99. P(+) = 0.95 × 0.01 + 0.10 × 0.99 = 0.0095 + 0.099 = 0.1085. P(D|+) = 0.0095 / 0.1085 ≈ 0.0876 ≈ 8.8%.',
        expWrong:{
          B:'50% assumes prior probability of 50%; ignores base rate.',
          C:'87% confuses sensitivity (true positive rate) with posterior probability.',
          D:'95% is the test\'s sensitivity, not the posterior probability of disease given a positive test.'
        },
        tip:'Bayes theorem: P(D|+) = P(+|D) × P(D) / P(+). The base rate (prevalence) of disease heavily influences the posterior probability. Low-prevalence diseases often produce many false positives.'
      },
      {
        id:'INS-PROB-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Combinatorics with constraints (ordered selection)',
        stem:'A committee must select 3 officers (president, vice-president, secretary) from a group of 8 people, with the constraint that no two officers can be from the same department. If there are 3 departments with 3, 3, and 2 people respectively, how many valid selections are possible?',
        choices:{A:'18', B:'108', C:'336', D:'648'},
        correct:'B',
        expCorrect:'Since there are exactly 3 posts and 3 departments, and no two posts can repeat a department, each post comes from a different department. Choosing one person from each department: 3 × 3 × 2 = 18. Handing the 3 distinct posts to those 3 people: 3! = 6. Total: 18 × 6 = 108.',
        expWrong:{
          A:'18 counts only the ways of choosing the 3 people (3 × 3 × 2) and forgets to hand the 3 distinct posts out among them (× 3! = 6).',
          C:'336 = 8 × 7 × 6 ignores the constraint entirely: it counts every assignment of 3 posts among the 8 people regardless of department.',
          D:'648 applies the 3! factor twice (18 × 6 × 6); the posts are handed out only once.'
        },
        tip:'Combinatorics with constraints: split it into stages (choose the people, then assign the posts), compute each stage and multiply. Always verify the constraint has actually been applied.'
      },
      {
        id:'INS-PROB-03', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Probability of compound events',
        stem:'Two independent events have probabilities P(A) = 2/5 and P(B) = 3/7. What is the probability that exactly one of them occurs?',
        choices:{A:'6/35', B:'11/35', C:'12/35', D:'17/35'},
        correct:'D',
        expCorrect:'P(exactamente uno) = P(A)·(1 − P(B)) + (1 − P(A))·P(B) = (2/5)(4/7) + (3/5)(3/7) = 8/35 + 9/35 = 17/35.',
        expWrong:{
          A:'6/35 = (2/5)(3/7) = P(A and B): that BOTH happen, not exactly one.',
          B:'11/35 does not come from any correct computation; the two correct addends are 8/35 and 9/35.',
          C:'12/35 = (3/5)(4/7) = P(ninguno de los dos), no "exactamente uno".'
        },
        tip:'"Exactly one" = P(A)(1−P(B)) + P(B)(1−P(A)). Equivalently: P(A or B) − P(A and B). Do not confuse it with "at least one" or with "neither".'
      },
      {
        id:'INS-PROB-04', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Expected value with multiple scenarios',
        stem:'A game involves rolling a fair die. If you roll 1 or 2, you win $0. If you roll 3 or 4, you win $3. If you roll 5 or 6, you win $8. What is the expected value of your winnings? (Grid in your answer as a decimal or fraction.)',
        answer:'11/3',
        expCorrect:'E[X] = (1/6)(0) + (1/6)(0) + (1/6)(3) + (1/6)(3) + (1/6)(8) + (1/6)(8) = (1/6)(0 + 0 + 3 + 3 + 8 + 8) = (1/6)(22) = 22/6 = 11/3 ≈ 3.67. En el box valen 11/3, 3.666 o 3.667.',
        tip:'Expected value: E[X] = Σ (outcome × probability). For a fair die, each outcome has prob 1/6.'
      },
      {
        id:'INS-PROB-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Sampling without replacement and hypergeometric probability',
        stem:'A bag contains 5 red balls, 3 blue balls, and 1 green ball. If you draw 3 balls without replacement, what is the probability of drawing exactly 2 red balls and 1 blue ball?',
        choices:{A:'25/84', B:'30/84', C:'35/84', D:'40/84'},
        correct:'B',
        expCorrect:'Total de bolas: 5 + 3 + 1 = 9. Formas de sacar 3 de 9: C(9,3) = 84. Favorables: C(5,2) × C(3,1) = 10 × 3 = 30. Probabilidad = 30/84 = 5/14.',
        expWrong:{
          A:'25/84 cuenta mal los favorables (5 × 5 en vez de C(5,2) × C(3,1) = 10 × 3).',
          C:'35/84 sobrecuenta los favorables; el conteo correcto es C(5,2) × C(3,1) = 30.',
          D:'40/84 sobrecuenta (10 × 4 usa 4 azules, pero solo hay 3: C(3,1) = 3).'
        },
        tip:'Hypergeometric (without replacement): P = [product of the favorable combinations] / C(total, n). The numerator is the C of each color wanted; the denominator is choosing n from the total.'
      },
      {
        id:'INS-PROB-06', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Mutually exclusive vs. independent events',
        stem:'Two events are mutually exclusive if they cannot occur simultaneously. Two events are independent if occurrence of one does not affect the probability of the other. If P(A) = 0.3 and P(B) = 0.4, and A and B are mutually exclusive, what is P(A or B)?',
        choices:{A:'0.12', B:'0.7', C:'0.58', D:'1.0'},
        correct:'B',
        expCorrect:'If A and B are mutually exclusive, P(A and B) = 0. So P(A or B) = P(A) + P(B) − P(A and B) = 0.3 + 0.4 − 0 = 0.7.',
        expWrong:{
          A:'0.12 is P(A) × P(B), which would apply if they were independent, but they\'re mutually exclusive.',
          C:'0.58 confuses the formula (0.3 + 0.4 − 0.12 treats them as independent, not mutually exclusive).',
          D:'1.0 is wrong; mutually exclusive events don\'t have to cover all outcomes, so the probabilities don\'t sum to 1.'
        },
        tip:'Mutually exclusive: P(A or B) = P(A) + P(B). Independent: P(A and B) = P(A) × P(B). Don\'t mix them up.'
      },
      {
        id:'INS-PROB-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Multi-stage probability tree',
        stem:'A person draws two cards from a standard deck without replacement. What is the probability of drawing two hearts?',
        choices:{A:'1/17', B:'13/169', C:'1/26', D:'12/221'},
        correct:'A',
        expCorrect:'P(primera de corazones) = 13/52. P(segunda de corazones | primera de corazones) = 12/51. P(ambas) = (13/52) × (12/51) = 156/2652 = 1/17.',
        expWrong:{
          B:'13/169 = 1/13 does not fit: with replacement it would be (13/52)² = 1/16, and without replacement it is 1/17.',
          C:'1/26 = 2/52 divide mal el producto (13 × 12)/(52 × 51).',
          D:'12/221 simplifies 156/2652 wrong; the correctly reduced fraction is 1/17.'
        },
        tip:'Without replacement the probabilities change on every draw: P(two hearts) = (13/52) × (12/51). Simplify by cancelling common factors.'
      },
      {
        id:'INS-PROB-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Counting permutations with identical objects',
        stem:'How many distinct arrangements are there of the letters in the word "MISSISSIPPI"?',
        choices:{A:'34650', B:'39916800', C:'11!', D:'34560'},
        correct:'A',
        expCorrect:'Total letters: 11. M: 1, I: 4, S: 4, P: 2. Arrangements: 11! / (1! × 4! × 4! × 2!) = 39916800 / (1 × 24 × 24 × 2) = 39916800 / 1152 = 34650.',
        expWrong:{
          B:'39916800 = 11! doesn\'t account for identical letters.',
          C:'11! is the raw permutation count, not distinct arrangements.',
          D:'34560 is close but miscalculates the factorial division.'
        },
        tip:'Permutations with repetition: n! / (n₁! × n₂! × ... × nₖ!), where nᵢ is the count of each repeated element.'
      },
      {
        id:'INS-PROB-09', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Binomial probability',
        stem:'A coin is flipped 5 times. What is the probability of getting exactly 3 heads? (Grid in your answer as a fraction or decimal.)',
        answer:'5/16',
        expCorrect:'P(exactly 3 heads in 5 flips) = C(5,3) × (1/2)³ × (1/2)² = 10 × (1/32) = 10/32 = 5/16 = 0.3125. En el box valen 5/16 o .3125.',
        tip:'Binomial: P(k successes in n trials) = C(n,k) × p^k × (1−p)^(n−k).'
      },
      {
        id:'INS-PROB-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Conditional probability with intersection',
        stem:'In a group of 100 people, 60 like coffee, 50 like tea, and 30 like both. If a person is selected at random, what is the probability they like coffee given that they like tea?',
        choices:{A:'0.3', B:'0.5', C:'0.6', D:'0.75'},
        correct:'C',
        expCorrect:'P(coffee | tea) = P(coffee and tea) / P(tea) = 30/50 = 3/5 = 0.6.',
        expWrong:{
          A:'0.3 is P(both), not the conditional.',
          B:'0.5 is P(tea), not the conditional probability asked for.',
          D:'0.75 miscalculates the ratio (the correct ratio is 30/50).'
        },
        tip:'Conditional probability: P(A|B) = P(A ∩ B) / P(B). Numerator is intersection, denominator is the "given" event.'
      },
      {
        id:'INS-PROB-11', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Complement rule and total probability',
        stem:'The probability of rain tomorrow is 0.4. The probability of rain and flooding is 0.15. If it rains, what is the probability of flooding?',
        choices:{A:'0.375', B:'0.6', C:'0.15', D:'0.25'},
        correct:'A',
        expCorrect:'P(flooding | rain) = P(flooding and rain) / P(rain) = 0.15 / 0.4 = 15/40 = 3/8 = 0.375.',
        expWrong:{
          B:'0.6 inverts the ratio (0.4 minus something, or 0.15/0.25); the correct ratio is 0.15/0.4.',
          C:'0.15 is P(both), not the conditional.',
          D:'0.25 miscalculates 0.15/0.4.'
        },
        tip:'When given P(A and B) and P(A), solve for P(B|A) = P(A and B) / P(A).'
      },
      {
        id:'INS-PROB-12', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Difícil',
        skill:'Probability of union (at least one)',
        stem:'The probability of event A is 0.3, and the probability of event B is 0.5. If A and B are independent, what is the probability of at least one occurring? (Grid in your answer as a decimal.)',
        answer:'.65',
        expCorrect:'P(at least one) = 1 − P(neither) = 1 − (1 − 0.3)(1 − 0.5) = 1 − 0.7 × 0.5 = 1 − 0.35 = 0.65. En el box valen .65 o 0.65.',
        tip:'P(at least one) = 1 − P(none). For independence: P(at least one) = 1 − (1−P(A))(1−P(B)).'
      }
    ]
  });
})();
