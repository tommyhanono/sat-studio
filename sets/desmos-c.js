/* SAT Studio — Desmos how-to hints for Math sets: math-data (DAT-01..10) + math-data2 (DT2-01..12) */
window.SAT_DESMOS = Object.assign(window.SAT_DESMOS || {}, {
  'DAT-01': {
    note: 'This is pure arithmetic: type 0.40*350 in Desmos and it gives you 140 right away. Convert the percent to a decimal before multiplying.',
    latex: ['0.40*350']
  },
  'DAT-02': {
    note: 'For percent change, type (75-60)/60*100 and Desmos gives you 25. The denominator is always the old value (60).',
    latex: ['(75-60)/60*100']
  },
  'DAT-03': {
    note: 'Split the ratio with Desmos: type 240/8*5 (8 is the total number of parts, 5 of them girls) and it gives you 150.',
    latex: ['240/8*5']
  },
  'DAT-04': {
    note: 'Find the speed and multiply on a single line: type 150/2.5*4 and Desmos gives you 240 miles. Divide before you multiply.',
    latex: ['150/2.5*4']
  },
  'DAT-05': {
    note: 'Use Desmos as a mean calculator: type A=[12,15,18,20,25] and then mean(A); it gives you 18. (12+15+18+20+25)/5 works too.',
    latex: ['A=[12,15,18,20,25]', 'mean(A)']
  },
  'DAT-06': {
    note: 'You do not need to compute anything, but to check: define X=[48,49,50,51,52] and Y=[10,30,50,70,90], then stdev(X) and stdev(Y). You will see that the one for Y is much larger.',
    latex: ['X=[48,49,50,51,52]', 'Y=[10,30,50,70,90]', 'stdev(X)', 'stdev(Y)']
  },
  'DAT-07': {
    note: 'Simple probability in Desmos: type 12/30 and it shows 0.4, which is 2/5. Desmos can also display it as a fraction.',
    latex: ['12/30']
  },
  'DAT-08': {
    note: 'The condition fixes the denominator at the 120 adults: type 90/120 and Desmos gives you 0.75.',
    latex: ['90/120']
  },
  'DAT-09': {
    note: 'Evaluate the line of best fit: type 2.5*8+60 and it gives you 80. Multiply the slope by x before adding the intercept.',
    latex: ['2.5*8+60']
  },
  'DAT-10': {
    note: 'Successive changes multiply: type 1.20*0.90 and it gives you 1.08 (or 1.20*0.90*100 to see 108). The final price is 108% of the original.',
    latex: ['1.20*0.90', '1.20*0.90*100']
  },
  'DT2-01': {
    note: 'Straight arithmetic: type 0.36*250 and Desmos gives you 90. Convert 36% to 0.36 before multiplying.',
    latex: ['0.36*250']
  },
  'DT2-02': {
    note: 'Percent change: type (54-45)/45*100 and it gives you 20. Always divide by the old value (45), not by the new one.',
    latex: ['(54-45)/45*100']
  },
  'DT2-03': {
    note: 'Reverse percent: if you paid 85% of the original, type 51/0.85 and Desmos gives you 60, the original price.',
    latex: ['51/0.85']
  },
  'DT2-04': {
    note: 'Watch what the percent is taken of: type 0.15*(80-0.25*80) and Desmos gives you 9 (15% of the 60 guests). 0.15*60 works too.',
    latex: ['0.15*(80-0.25*80)', '0.15*60']
  },
  'DT2-05': {
    note: 'Three-part ratio: type 480/8*2 (8 total parts, 2 of them sugar) and it gives you 120 grams.',
    latex: ['480/8*2']
  },
  'DT2-06': {
    note: 'Find the unit rate and multiply: type 210/6*10 and Desmos gives you 350 pages.',
    latex: ['210/6*10']
  },
  'DT2-07': {
    note: 'For the median, use the already sorted list: type median([8,11,14,14,17,20,30]) and Desmos gives you 14.',
    latex: ['median([8,11,14,14,17,20,30])']
  },
  'DT2-08': {
    note: 'Rebuild the sum with Desmos: type (8*5+20)/6 and it gives you 10 (original sum 40, plus 20, divided by 6).',
    latex: ['(8*5+20)/6']
  },
  'DT2-09': {
    note: 'To check the spread: define P=[20,40,60,80,100] and Q=[58,59,60,61,62], then stdev(P) and stdev(Q). The one for P comes out much larger.',
    latex: ['P=[20,40,60,80,100]', 'Q=[58,59,60,61,62]', 'stdev(P)', 'stdev(Q)']
  },
  'DT2-10': {
    note: 'What is NOT white is 40-16=24: type (40-16)/40 and Desmos gives you 0.6, which is 3/5.',
    latex: ['(40-16)/40']
  },
  'DT2-11': {
    note: 'The denominator is the 21 who play a sport: type 9/21 and Desmos shows you 0.4286 (3/7).',
    latex: ['9/21']
  },
  'DT2-12': {
    note: 'Successive changes multiply: type 0.80*1.25 and it gives you 1.00 (or 0.80*1.25*100 to see 100). The value returns exactly to where it started.',
    latex: ['0.80*1.25', '0.80*1.25*100']
  }
});
