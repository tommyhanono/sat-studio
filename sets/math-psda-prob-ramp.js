/* SAT Studio question set — Math: Probability (PBR-01 to PBR-25) */
/* Rampa completa de la destreza oficial "Probability and conditional
   probability": Fácil lee una probabilidad simple o una casilla de la tabla;
   Media exige el denominador de la condición, el complemento encadenado, la
   cadena de dos sucesos y la diferencia entre mutuamente excluyente e
   independiente.

   OJO con la taxonomía: dentro de Problem-Solving solo `pd-claims` (pri:10) se
   prueba ANTES que `pd-prob`, mirando `skill` + los primeros 160 caracteres del
   `stem`. Por eso en ese arranque no aparece nunca "randomly select",
   "randomly assign", "assignment", "cause", "causal", "correlat", "experiment",
   "observational", "control group", "treatment group", "voluntary response",
   "lurking", "generaliz", "extends to" ni "appropriate conclusion".
   La forma segura de sacar un elemento al azar es "chosen at random" /
   "taken at random" / "drawn at random": lo que muerde es el orden
   "randomly select…", no "… at random".
   Cada `skill` lleva a propósito una palabra de `pd-prob` (probability,
   conditional, mutually, independent, expected value, two-way, counting).

   El prefijo es PBR- y estaba libre en todo el banco al escribirlo. */
(function(){

  /* ---- Tabla de PBR-02, PBR-09 y PBR-10. 300 animales.
     Las condicionales salen redondas en las dos direcciones:
     18/50 = 0.36 contra 18/180 = 0.10, y 108/150 = 0.72 contra 108/180 = 0.60. ---- */
  var TBL_SHELTER =
    '<table><thead><tr><th></th><th>Dogs</th><th>Cats</th><th>Rabbits</th><th>Total</th></tr></thead>' +
    '<tbody>' +
    '<tr><th>Adopted within 30 days</th><td>108</td><td>54</td><td>18</td><td>180</td></tr>' +
    '<tr><th>Not adopted within 30 days</th><td>42</td><td>46</td><td>32</td><td>120</td></tr>' +
    '<tr><th>Total</th><td>150</td><td>100</td><td>50</td><td>300</td></tr>' +
    '</tbody></table>';

  /* ---- Tabla de PBR-03, PBR-04, PBR-11 y PBR-12. 400 pedidos.
     96/120 = 0.80 contra 96/240 = 0.40: el mismo 96 con dos denominadores. ---- */
  var TBL_CAFE =
    '<table><thead><tr><th></th><th>Hot drink</th><th>Cold drink</th><th>Total</th></tr></thead>' +
    '<tbody>' +
    '<tr><th>Included a pastry</th><td>96</td><td>24</td><td>120</td></tr>' +
    '<tr><th>Did not include a pastry</th><td>144</td><td>136</td><td>280</td></tr>' +
    '<tr><th>Total</th><td>240</td><td>160</td><td>400</td></tr>' +
    '</tbody></table>';

  /* ---- Tabla de PBR-07, PBR-13, PBR-14 y PBR-15. 200 miembros.
     El truco vive en la fila del build team: 32/80 = 48/120 = 80/200 = 0.40,
     así que ese equipo —y solo ese— es independiente del nivel escolar. ---- */
  var TBL_ROBOTICS =
    '<table><thead><tr><th></th><th>Middle school</th><th>High school</th><th>Total</th></tr></thead>' +
    '<tbody>' +
    '<tr><th>Build team</th><td>32</td><td>48</td><td>80</td></tr>' +
    '<tr><th>Programming team</th><td>30</td><td>42</td><td>72</td></tr>' +
    '<tr><th>Drive team</th><td>18</td><td>30</td><td>48</td></tr>' +
    '<tr><th>Total</th><td>80</td><td>120</td><td>200</td></tr>' +
    '</tbody></table>';

  /* ---- Tabla INCOMPLETA de PBR-23 y PBR-24. 200 visitantes.
     La casilla vacía son los padres sin libro: 100 − 75 = 25 por columna,
     60 − 32 − 3 = 25 por fila. Las dos rutas tienen que coincidir. ---- */
  var TBL_BOOKFAIR =
    '<table><thead><tr><th></th><th>Students</th><th>Parents</th><th>Teachers</th><th>Total</th></tr></thead>' +
    '<tbody>' +
    '<tr><th>Bought at least one book</th><td>48</td><td>75</td><td>17</td><td>140</td></tr>' +
    '<tr><th>Bought no books</th><td>32</td><td>&nbsp;</td><td>3</td><td>60</td></tr>' +
    '<tr><th>Total</th><td>80</td><td>100</td><td>20</td><td>200</td></tr>' +
    '</tbody></table>';

  window.SAT_SETS.push({
    id: 'math-psda-prob-ramp',
    title: 'Probability — Warm-up to Test Level',
    section: 'math',
    level: 'Media',
    description: 'A full ramp through probability and conditional probability: simple probabilities from a described collection, two-way tables read three ways (joint, marginal and conditional), the complement, mutually exclusive against independent events, two-event chains with and without replacement, expected value, and basic counting. The distractors are built on the one mistake that decides this skill: using the grand total when the sentence already fixed a row or a column.',
    minutes: 32,
    questions: [

      /* ---------------- Fácil: una probabilidad directa o una lectura simple ---------------- */

      {
        id:'PBR-01', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Simple probability from a described collection',
        stem:'A loyalty jar at Brixley Coffee holds 50 cards: 18 are marked "free pastry", 12 are marked "free refill", and 20 are marked "no prize". One card is drawn at random from the jar. What is the probability that the card drawn is marked "free refill"?',
        choices:{A:'0.36', B:'0.40', C:'0.24', D:'0.60'},
        correct:'C',
        expCorrect:'A probability is the number of favorable cards over the total number of cards. There are 12 cards marked "free refill" out of 50, so P = 12 ÷ 50 = 0.24. (Check that the three categories cover everything: 18 + 12 + 20 = 50, and 0.36 + 0.24 + 0.40 = 1 ✓.)',
        expWrong:{
          A:'0.36 is 18 ÷ 50, the probability of a "free pastry" card. The denominator is right and the numerator counts the wrong category.',
          B:'0.40 is 20 ÷ 50, the probability of "no prize". It is the biggest group in the jar, but it is not the group the question names.',
          D:'0.60 is 30 ÷ 50, the probability of winning any prize at all, pastry and refill added together. The question asks for one of those two on its own.'
        },
        tip:'Write the numerator and the denominator as counts before dividing: favorable items over total items. When a problem lists every category, check that their probabilities add to 1 — that catches a miscounted numerator immediately.',
        desmos:'Type 12/50 and Desmos returns 0.24. Typing 18/50 and 20/50 gives the other two categories, and 0.36+0.24+0.4 returns 1.',
        desmosLatex:['12/50','18/50','20/50','0.36+0.24+0.4']
      },

      {
        id:'PBR-02', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Two-way table: a probability read from the totals',
        figure:TBL_SHELTER,
        stem:'The table shows the 300 animals taken in by the Maplewood Animal Shelter last year, grouped by species and by whether the animal was adopted within 30 days. One of the 300 animals is chosen at random. What is the probability that it was adopted within 30 days?',
        choices:{A:'0.36', B:'0.60', C:'0.40', D:'0.72'},
        correct:'B',
        expCorrect:'The animal comes from all 300, so 300 is the denominator. The "adopted within 30 days" row totals 108 + 54 + 18 = 180. P = 180 ÷ 300 = 0.60. (Check with the other row: 120 ÷ 300 = 0.40, and 0.60 + 0.40 = 1 ✓.)',
        expWrong:{
          A:'0.36 is 108 ÷ 300, which keeps only the dogs in the numerator. The row asked about runs across all three species, so all 180 adopted animals count.',
          C:'0.40 is 120 ÷ 300, the probability of NOT being adopted within 30 days. That is the complement of the event named.',
          D:'0.72 is 108 ÷ 150, which divides by the dog column total instead of by the whole table of 300. Nothing in the question narrows the choice to dogs.'
        },
        tip:'Settle the denominator first: it is the group the draw comes from. "One of the 300" always means the grand total. Only wording like "from among the dogs" moves the denominator into a single column.',
        desmos:'Type (108+54+18)/300 and Desmos returns 0.6. Compare with 108/300 = 0.36 and 108/150 = 0.72, which answer two different questions.',
        desmosLatex:['(108+54+18)/300','108/300','108/150']
      },

      {
        id:'PBR-03', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Two-way table: the complement of an event',
        figure:TBL_CAFE,
        stem:'The table shows the 400 drink orders placed at Brixley Coffee over one weekend, grouped by drink temperature and by whether the order included a pastry. One of the 400 orders is chosen at random. What is the probability that the order did NOT include a pastry?',
        answer:'0.7',
        expCorrect:'The "included a pastry" row totals 96 + 24 = 120, so P(pastry) = 120 ÷ 400 = 0.30. "Did not include a pastry" is everything else: 1 − 0.30 = 0.70. (Check the direct way: the second row totals 144 + 136 = 280, and 280 ÷ 400 = 0.70 ✓.) Answer: 0.7.',
        expWrong:{},
        tip:'P(not A) = 1 − P(A). When one row is much smaller than the other, count the small one and subtract from 1, then confirm with the direct count. Two routes that agree prove the table was read correctly.',
        desmos:'Type 1-(96+24)/400 and Desmos returns 0.7. Typing (144+136)/400 returns the same value by counting the row directly.',
        desmosLatex:['1-(96+24)/400','(144+136)/400']
      },

      {
        id:'PBR-04', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Two-way table: a joint probability from one cell',
        figure:TBL_CAFE,
        stem:'One of the 400 Brixley Coffee orders in the table is chosen at random. What is the probability that the order was for a cold drink AND included a pastry?',
        choices:{A:'0.06', B:'0.15', C:'0.20', D:'0.40'},
        correct:'A',
        expCorrect:'Both conditions point at one cell: cold drink with a pastry is the 24 in the top right. The order is drawn from all 400, so P = 24 ÷ 400 = 0.06. (Check that the four inner cells add to 1: 0.24 + 0.06 + 0.36 + 0.34 = 1 ✓.)',
        expWrong:{
          B:'0.15 is 24 ÷ 160, which divides by the cold-drink column total. That answers "given a cold drink, what is the probability of a pastry?", and this question sets no condition at all.',
          C:'0.20 is 24 ÷ 120, which divides by the pastry row total instead of by 400. It answers the reversed conditional: given a pastry, the probability the drink was cold.',
          D:'0.40 is 160 ÷ 400, the probability of a cold drink on its own. It drops the pastry half of the requirement.'
        },
        tip:'An AND with no "given" points at a single cell over the grand total. Swapping that grand total for a row or a column total is exactly what turns a joint probability into a conditional one.',
        desmos:'Type 24/400 for 0.06. Typing 24/160 = 0.15 and 24/120 = 0.2 puts the same 24 over two groups that were never asked for.',
        desmosLatex:['24/400','24/160','24/120']
      },

      {
        id:'PBR-05', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Probability of a complement from a described collection',
        stem:'Each of the 60 players at the Elmridge chess tournament falls in exactly one rating band: 21 players are rated above 1500, 27 are rated from 1200 to 1500, and 12 are rated below 1200. One player is chosen at random. What is the probability that the player is NOT rated above 1500?',
        choices:{A:'0.20', B:'0.35', C:'0.45', D:'0.65'},
        correct:'D',
        expCorrect:'Rated above 1500 covers 21 of the 60 players, so P(above 1500) = 21 ÷ 60 = 0.35. "Not above 1500" is the complement: 1 − 0.35 = 0.65. (Check directly: 27 + 12 = 39 players are not above 1500, and 39 ÷ 60 = 0.65 ✓.)',
        expWrong:{
          A:'0.20 is 12 ÷ 60, the bottom band by itself. "Not above 1500" also has to include the 27 players in the middle band.',
          B:'0.35 is 21 ÷ 60, the probability of being rated above 1500. That is the event itself and not its complement.',
          C:'0.45 is 27 ÷ 60, the middle band alone. It leaves out the 12 players below 1200, who are also not rated above 1500.'
        },
        tip:'A NOT question is the complement: 1 − P(event). When the categories are listed out, add up every category the NOT covers as a second route; the two answers have to agree.',
        desmos:'Type 1-21/60 and Desmos returns 0.65. Typing (27+12)/60 returns the same value by adding the other two bands.',
        desmosLatex:['1-21/60','(27+12)/60','21/60']
      },

      {
        id:'PBR-06', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Counting the outcomes of a multi-stage choice',
        stem:'The lunch special at Brixley Coffee lets a customer pick one of 4 sandwiches, one of 3 sides, and one of 5 drinks. How many different lunch specials are possible?',
        answer:'60',
        expCorrect:'Each stage is picked freely, so the counts multiply: 4 × 3 × 5 = 60. (Check with a smaller version you could list by hand: 2 sandwiches with 3 sides gives 2 × 3 = 6 pairs, the same rule scaled down.) Answer: 60.',
        expWrong:{},
        tip:'When a choice is made in stages and every combination is allowed, multiply the number of options at each stage. Adding them answers a different question: how many items are on the menu.',
        desmos:'Type 4*3*5 and Desmos returns 60. Typing 4+3+5 returns 12, the number of menu items, which is not what was asked.',
        desmosLatex:['4*3*5','4+3+5']
      },

      {
        id:'PBR-07', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Two-way table: a probability from a row total',
        figure:TBL_ROBOTICS,
        stem:'The table shows the 200 members of the Northgate Robotics League, grouped by school level and by the team each member serves on. One of the 200 members is chosen at random. What is the probability that the member is on the drive team?',
        choices:{A:'0.09', B:'0.15', C:'0.24', D:'0.25'},
        correct:'C',
        expCorrect:'The drive team row totals 18 + 30 = 48, and the member is drawn from all 200. P = 48 ÷ 200 = 0.24. (Check that the three team probabilities add to 1: 80/200 + 72/200 + 48/200 = 0.40 + 0.36 + 0.24 = 1 ✓.)',
        expWrong:{
          A:'0.09 is 18 ÷ 200, the middle school half of the drive team only. The row runs across both school levels, so both cells belong in the numerator.',
          B:'0.15 is 30 ÷ 200, the high school half of the drive team only. Same half-a-row slip, on the other side of the table.',
          D:'0.25 is 30 ÷ 120, which divides by the high school column. That answers "given a high school member, what is the probability of the drive team?", and this draw comes from all 200.'
        },
        tip:'A row total means every cell in the row. Add them first, then divide by the grand total whenever the draw comes from everybody. Two probabilities as close as 0.24 and 0.25 almost always differ only in the denominator.',
        desmos:'Type (18+30)/200 for 0.24 and 30/120 for 0.25. Same drive team, two different groups underneath.',
        desmosLatex:['(18+30)/200','30/120','18/200']
      },

      {
        id:'PBR-08', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Fácil',
        skill:'Mutually exclusive events: the probability that one or the other happens',
        stem:'At the Ridgeway book fair, every visitor is signed in as exactly one of student, parent, or teacher. Of the visitors, 30% are parents and 12% are teachers. What is the probability that a visitor chosen at random is a parent or a teacher?',
        choices:{A:'0.036', B:'0.42', C:'0.18', D:'0.58'},
        correct:'B',
        expCorrect:'A visitor is signed in as exactly one role, so "parent" and "teacher" can never happen together: the events are mutually exclusive and their probabilities simply add. 0.30 + 0.12 = 0.42. (Check: the remaining visitors are students, 1 − 0.42 = 0.58, and 0.42 + 0.58 = 1 ✓.)',
        expWrong:{
          A:'0.036 is 0.30 × 0.12, the rule for "parent AND teacher" when the two can overlap. Here they cannot overlap at all, so that product is not the probability of anything in this problem.',
          C:'0.18 is 0.30 − 0.12. Subtraction compares the two groups instead of combining them, and "or" combines.',
          D:'0.58 is 1 − 0.42, the probability that the visitor is a student. That is the complement of what was asked.'
        },
        tip:'Mutually exclusive means the two events cannot occur at once, so P(A or B) = P(A) + P(B) with nothing to subtract. Multiply only for AND, and only when the two events can actually occur together.',
        desmos:'Type 0.30+0.12 for 0.42, then 1-0.42 for the student share, 0.58. Typing 0.30*0.12 shows what the multiplication route would have given.',
        desmosLatex:['0.30+0.12','1-0.42','0.30*0.12']
      },

      /* ---------------- Media: la condicional, la cadena y los dos conceptos ---------------- */

      {
        id:'PBR-09', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two-way table: a conditional probability inside one column',
        figure:TBL_SHELTER,
        stem:'One animal is chosen at random from among the rabbits in the Maplewood shelter table. What is the probability that this animal was adopted within 30 days?',
        choices:{A:'0.06', B:'0.10', C:'0.64', D:'0.36'},
        correct:'D',
        expCorrect:'"From among the rabbits" shrinks the pool to the rabbit column, which holds 50 animals. Of those, 18 were adopted within 30 days, so P = 18 ÷ 50 = 0.36. (Check inside the column: 18 adopted and 32 not adopted, and 0.36 + 0.64 = 1 ✓.)',
        expWrong:{
          A:'0.06 is 18 ÷ 300, which keeps the grand total underneath. That is the joint probability of being a rabbit AND being adopted, drawn from all 300 animals.',
          B:'0.10 is 18 ÷ 180, which divides by the adopted row total. It answers the reversed question: given that an animal was adopted, the probability that it is a rabbit.',
          C:'0.64 is 32 ÷ 50, the right denominator with the wrong numerator: those are the rabbits that were NOT adopted within 30 days.'
        },
        tip:'A condition replaces the denominator with the group it names — "from among the rabbits" means 50, not 300. Fix that column first, then take the numerator from inside it.',
        desmos:'Type 18/50 for 0.36. Typing 18/300 = 0.06 and 18/180 = 0.1 puts the same 18 over two denominators nobody asked for.',
        desmosLatex:['18/50','18/300','18/180']
      },

      {
        id:'PBR-10', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two-way table: a conditional probability and its reverse',
        figure:TBL_SHELTER,
        stem:'One animal is chosen at random from among the animals in the Maplewood shelter table that were adopted within 30 days. What is the probability that this animal is a dog?',
        choices:{A:'0.60', B:'0.36', C:'0.50', D:'0.72'},
        correct:'A',
        expCorrect:'The condition is now "adopted within 30 days", so the pool is that row: 108 + 54 + 18 = 180 animals. Of those, 108 are dogs, so P = 108 ÷ 180 = 0.60. The reverse is a different number: among dogs, 108 ÷ 150 = 0.72 were adopted. Same 108 on top, different group underneath.',
        expWrong:{
          B:'0.36 is 108 ÷ 300, the joint probability of dog AND adopted taken from all 300 animals. The condition should have cut the denominator down to the 180 adopted.',
          C:'0.50 is 150 ÷ 300, the share of all the animals that are dogs, with the condition never applied.',
          D:'0.72 is 108 ÷ 150, the reversed conditional: the probability of adoption GIVEN a dog. It divides by the dog column instead of by the adopted row.'
        },
        tip:'P(A given B) and P(B given A) share a numerator and differ in the denominator, so they are almost never equal. The group named after "from among" or "given" is the one that goes underneath.',
        desmos:'Type 108/180 for 0.6 and 108/150 for 0.72. Both use the same 108, which is exactly why the reversal slips past.',
        desmosLatex:['108/180','108/150','108/300']
      },

      {
        id:'PBR-11', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two-way table: a conditional probability given a column',
        figure:TBL_CAFE,
        stem:'One order is chosen at random from among the Brixley Coffee orders in the table that were for a cold drink. What is the probability that this order included a pastry?',
        answer:'0.15',
        expCorrect:'Conditioning on cold drinks makes that column the whole pool: 160 orders. Of those, 24 included a pastry, so P = 24 ÷ 160 = 0.15. (Check inside the column: 24 with a pastry and 136 without, and 0.15 + 0.85 = 1 ✓.) Answer: 0.15.',
        expWrong:{},
        tip:'Circle the column the condition names before doing anything else, then read both numbers from inside it. Dividing by 400 here gives 0.06, which answers a question about the whole table instead.',
        desmos:'Type 24/160 for 0.15 and 24/400 for 0.06, the joint probability that was not asked for.',
        desmosLatex:['24/160','24/400']
      },

      {
        id:'PBR-12', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two-way table: a conditional probability given a row',
        figure:TBL_CAFE,
        stem:'One order is chosen at random from among the Brixley Coffee orders in the table that included a pastry. What is the probability that this order was for a hot drink?',
        choices:{A:'0.24', B:'0.80', C:'0.40', D:'0.60'},
        correct:'B',
        expCorrect:'The condition is "included a pastry", so the pool is that row: 120 orders. Of those, 96 were hot drinks, so P = 96 ÷ 120 = 0.80. (Check inside the row: 96 hot and 24 cold, and 0.80 + 0.20 = 1 ✓.)',
        expWrong:{
          A:'0.24 is 96 ÷ 400, the joint probability of a hot drink with a pastry, taken from the whole table. Conditioning means dividing by the condition group, not by the grand total.',
          C:'0.40 is 96 ÷ 240, which divides by the hot-drink column. That is the reversed conditional: given a hot drink, the probability of a pastry.',
          D:'0.60 is 240 ÷ 400, the share of all the orders that were hot drinks, with the pastry condition ignored.'
        },
        tip:'Name the condition group out loud before dividing: here it is the 120 pastry orders. The numerator is the part of that group that also matches the second description.',
        desmos:'Type 96/120 for 0.8 and 96/240 for 0.4. The first conditions on pastries, the second on hot drinks.',
        desmosLatex:['96/120','96/240','96/400']
      },

      {
        id:'PBR-13', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two-way table: a conditional probability given the school level',
        figure:TBL_ROBOTICS,
        stem:'One member is chosen at random from among the high school members in the Northgate league table. What is the probability that this member is on the programming team?',
        choices:{A:'0.21', B:'0.25', C:'0.35', D:'0.36'},
        correct:'C',
        expCorrect:'Conditioning on high school makes that column the pool: 120 members. Of those, 42 are on the programming team, so P = 42 ÷ 120 = 0.35. (Check that the column adds to 1: 48/120 + 42/120 + 30/120 = 0.40 + 0.35 + 0.25 = 1 ✓.)',
        expWrong:{
          A:'0.21 is 42 ÷ 200, which keeps the grand total underneath. That is the joint probability of high school AND programming, not a conditional one.',
          B:'0.25 is 30 ÷ 120, the right denominator with the wrong row: those are the high school members on the drive team.',
          D:'0.36 is 72 ÷ 200, the share of all 200 members on the programming team, with the high school condition never applied.'
        },
        tip:'Once a condition fixes a column, every number comes from inside that column, and the conditional probabilities down that column have to add to 1. That sum is the fastest check that the denominator is right.',
        desmos:'Type 42/120 for 0.35 and 42/200 for 0.21. Typing 48/120+42/120+30/120 returns 1, which confirms the column denominator.',
        desmosLatex:['42/120','42/200','48/120+42/120+30/120']
      },

      {
        id:'PBR-14', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two-way table: reversing the conditional probability',
        figure:TBL_ROBOTICS,
        stem:'One member is chosen at random from among the members of the drive team in the Northgate league table. What is the probability that this member is in middle school?',
        answer:'0.375',
        expCorrect:'The condition is the drive team, so the pool is that row: 18 + 30 = 48 members. Of those, 18 are in middle school, so P = 18 ÷ 48 = 0.375. The reverse is a different number: among middle school members, 18 ÷ 80 = 0.225 are on the drive team. Answer: 0.375.',
        expWrong:{},
        tip:'Read the sentence to see which group the draw comes from — that group is the denominator. Swapping it turns P(A given B) into P(B given A), and the two agree only by coincidence.',
        desmos:'Type 18/48 for 0.375 and 18/80 for 0.225, the reversed conditional.',
        desmosLatex:['18/48','18/80']
      },

      {
        id:'PBR-15', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two-way table: deciding whether two events are independent',
        figure:TBL_ROBOTICS,
        stem:'Exactly one of the three teams in the Northgate league table is independent of school level for the 200 members shown. Which of the following is correct?',
        choices:{
          A:'The build team: 40% of middle school members, 40% of high school members and 40% of all 200 are on it.',
          B:'The programming team: it holds more high school members than middle school members, 42 against 30.',
          C:'The drive team: it is the smallest of the three teams at both school levels, 18 and 30.',
          D:'None of them: the two school levels do not supply equal numbers of members, 80 against 120.'
        },
        correct:'A',
        expCorrect:'Independence means that conditioning on one event leaves the other unchanged. Overall, 80 ÷ 200 = 0.40 of the members are on the build team. Column by column: middle school 32 ÷ 80 = 0.40, high school 48 ÷ 120 = 0.40. Both match the overall 0.40, so the build team is independent of school level. (The count version agrees: 80 × 80 ÷ 200 = 32, exactly the cell ✓.)',
        expWrong:{
          B:'The two counts are read correctly, but independence is about rates, not raw counts: 30 ÷ 80 = 0.375 against 42 ÷ 120 = 0.35. Those differ, so school level does change the programming team odds.',
          C:'Team size says nothing about independence. The drive team rates are 18 ÷ 80 = 0.225 and 30 ÷ 120 = 0.25, which do not match, so it is dependent.',
          D:'Unequal column totals are expected and harmless; a school level does not have to supply half the league. What matters is whether a team rate holds steady across the columns, and for the build team it does.'
        },
        tip:'Independence test on a two-way table: compare the conditional rate with the overall rate. P(A given B) = P(A) means independent. The count version reads (row total × column total) ÷ grand total = the cell.',
        desmos:'Type 80/200 for the overall build rate, then 32/80 and 48/120. Only the build team returns 0.4 all three times. Typing 80*80/200 returns 32, the cell itself.',
        desmosLatex:['80/200','32/80','48/120','80*80/200']
      },

      {
        id:'PBR-16', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Mutually exclusive events versus independent events',
        stem:'At the Elmridge chess tournament, event J is "the player is in the junior section" and event W is "the player wins the first round". Of the players, 40% are in the junior section, 50% win the first round, and 20% are juniors who win the first round. Which of the following is true of J and W?',
        choices:{
          A:'They are mutually exclusive, and therefore they are also independent.',
          B:'They are independent, and they are not mutually exclusive.',
          C:'They are mutually exclusive, and they are not independent.',
          D:'They are neither independent nor mutually exclusive.'
        },
        correct:'B',
        expCorrect:'Mutually exclusive would mean the two never happen together, so P(J and W) would have to be 0. It is 0.20, so they do happen together and they are not mutually exclusive. Independence is a separate test: P(J) × P(W) = 0.40 × 0.50 = 0.20, which matches the stated P(J and W) = 0.20, so J and W are independent. (Second check: P(W given J) = 0.20 ÷ 0.40 = 0.50, the same as P(W) ✓.)',
        expWrong:{
          A:'Mutually exclusive and independent are closer to opposites than to partners. If two events with nonzero probabilities never occur together, then one happening forces the other to fail, which is the strongest dependence there is.',
          C:'Mutually exclusive would require P(J and W) = 0, and the problem states 0.20. It also fails the independence test the wrong way: 0.40 × 0.50 = 0.20 matches, so the events are independent.',
          D:'This rejects independence without running the test. Multiplying the two separate probabilities gives 0.40 × 0.50 = 0.20, exactly the stated overlap, so independence does hold.'
        },
        tip:'Two tests, two formulas. Mutually exclusive: P(A and B) = 0. Independent: P(A and B) = P(A) × P(B). Events with nonzero probabilities can never satisfy both at once.',
        desmos:'Type 0.4*0.5 and Desmos returns 0.2, matching the stated overlap. Typing 0.2/0.4 returns 0.5, which is P(W) again.',
        desmosLatex:['0.4*0.5','0.2/0.4']
      },

      {
        id:'PBR-17', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Probability of two events in a chain without replacement',
        stem:'A bin in the Northgate robotics workshop holds 12 identical-looking motors: 5 are worn out and 7 are new. Two motors are taken from the bin at random, one after the other, and the first is not put back. What is the probability that both motors are worn out?',
        choices:{A:'25/144', B:'25/132', C:'103/132', D:'5/33'},
        correct:'D',
        expCorrect:'The first motor is worn out with probability 5 ÷ 12. That motor is gone, so 4 worn-out motors remain among 11, and the second has probability 4 ÷ 11. Multiply along the chain: (5/12)(4/11) = 20/132 = 5/33 ≈ 0.152. (Check the size: 5/33 sits just below (5/12)(5/12) = 0.174, as it must, because removing a worn-out motor makes the second draw slightly less likely.)',
        expWrong:{
          A:'25/144 is (5/12)(5/12), which puts the first motor back in the bin. The problem says it is not returned, so the second fraction cannot repeat the first.',
          B:'25/132 is (5/12)(5/11): the denominator drops from 12 to 11 but the numerator stays at 5. Removing a worn-out motor takes one out of both counts.',
          C:'103/132 is 5/12 + 4/11. Chained events multiply; adding belongs to "or" between events that cannot both happen.'
        },
        tip:'Without replacement, the item you removed leaves both the numerator and the denominator. Multiply the stages: P(first) × P(second given the first).',
        desmos:'Type (5/12)*(4/11) and Desmos returns 0.1515…, the decimal of 5/33. Typing (5/12)*(5/12) returns 0.1736, the with-replacement value.',
        desmosLatex:['(5/12)*(4/11)','5/33','(5/12)*(5/12)']
      },

      {
        id:'PBR-18', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Probability of two independent stages with replacement',
        stem:'A prize wheel at Brixley Coffee has 8 equal sections: 3 are marked "free refill" and 5 are marked "try again". A customer spins the wheel twice, and the wheel is unchanged for the second spin. What is the probability that both spins land on "free refill"?',
        choices:{A:'9/64', B:'3/28', C:'3/32', D:'3/4'},
        correct:'A',
        expCorrect:'The wheel is the same for both spins, so the spins are independent and each lands on "free refill" with probability 3 ÷ 8. Multiply: (3/8)(3/8) = 9/64 ≈ 0.141. (Check the size: 9/64 is smaller than 3/8, as every "both happen" probability must be.)',
        expWrong:{
          B:'3/28 is (3/8)(2/7), which removes a section after the first spin. Nothing is removed from a wheel; that computation belongs to objects drawn without replacement.',
          C:'3/32 is (3/8)(1/4), which doubles the denominator instead of squaring the whole fraction. Both parts of the fraction get multiplied.',
          D:'3/4 is 3/8 + 3/8. Adding answers a question about "at least one" spin, and even there it would be wrong, because both spins can land on "free refill" together.'
        },
        tip:'Ask whether the pool changes between stages. A wheel, a coin or a die resets, so the same probability is multiplied again; objects drawn and kept change both counts.',
        desmos:'Type (3/8)*(3/8) and Desmos returns 0.140625, the decimal of 9/64. Typing (3/8)*(2/7) returns about 0.107, the without-replacement value that does not apply here.',
        desmosLatex:['(3/8)*(3/8)','9/64','(3/8)*(2/7)']
      },

      {
        id:'PBR-19', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Expected value of a single outcome',
        stem:'A booth at the Ridgeway book fair runs a prize wheel with 10 equal sections: 1 section pays $10, 3 sections pay $5, and the other 6 sections pay nothing. What is the expected payout of one spin?',
        choices:{A:'$1.00', B:'$1.50', C:'$2.50', D:'$7.50'},
        correct:'C',
        expCorrect:'Expected value weights every payout by its probability and adds them: (1/10)($10) + (3/10)($5) + (6/10)($0) = $1.00 + $1.50 + $0 = $2.50. (Check over 100 spins: about 10 payouts of $10 and 30 of $5 is $100 + $150 = $250, which is $2.50 per spin ✓.)',
        expWrong:{
          A:'$1.00 is only the (1/10)($10) term. The three $5 sections pay out as well, and their $1.50 belongs in the sum.',
          B:'$1.50 is only the (3/10)($5) term, which leaves the $10 section out of the total.',
          D:'$7.50 is ($10 + $5) ÷ 2, the average of the two prize amounts. It treats the two prizes as equally likely and ignores the 6 sections that pay nothing.'
        },
        tip:'Expected value = the sum of payout × probability over every outcome, including the outcomes worth zero. Averaging the prize amounts skips the weights and always comes out too high.',
        desmos:'Type (1/10)*10+(3/10)*5 and Desmos returns 2.5. Typing (10+5)/2 returns 7.5, the unweighted average.',
        desmosLatex:['(1/10)*10+(3/10)*5','(10+5)/2']
      },

      {
        id:'PBR-20', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Expected value: turning a probability into an expected count',
        stem:'Records at the Maplewood Animal Shelter show that the probability an adopted dog comes back to the shelter within a year is 0.08. If the shelter places 250 dogs this year, what is the expected number of those dogs that will come back within a year?',
        answer:'20',
        expCorrect:'An expected count is the probability times the number of trials: 0.08 × 250 = 20 dogs. (Check the ratio: 20 out of 250 is 20 ÷ 250 = 0.08, the stated probability ✓.) Answer: 20.',
        expWrong:{},
        tip:'Expected number = probability × number of trials. It does not have to come out a whole number, and it is a long-run average rather than a promise about any single year.',
        desmos:'Type 0.08*250 and Desmos returns 20. Typing 20/250 returns 0.08, which confirms the rate.',
        desmosLatex:['0.08*250','20/250']
      },

      {
        id:'PBR-21', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Independent events: the probability that at least one occurs',
        stem:'At the Ridgeway book fair, the probability that a visitor buys a novel is 0.40 and the probability that a visitor buys a cookbook is 0.25. For any one visitor these two purchases are independent. What is the probability that a visitor buys at least one of the two?',
        choices:{A:'0.10', B:'0.45', C:'0.65', D:'0.55'},
        correct:'D',
        expCorrect:'"At least one" is easiest through its complement, "neither". P(no novel) = 1 − 0.40 = 0.60 and P(no cookbook) = 1 − 0.25 = 0.75. The purchases are independent, so P(neither) = 0.60 × 0.75 = 0.45, and P(at least one) = 1 − 0.45 = 0.55. (Check the long way: 0.40 + 0.25 − (0.40)(0.25) = 0.65 − 0.10 = 0.55 ✓.)',
        expWrong:{
          A:'0.10 is (0.40)(0.25), the probability of buying BOTH. That is one slice of "at least one", not the whole of it.',
          B:'0.45 is P(neither), the complement computed on the way to the answer. Subtracting it from 1 is the step that was skipped.',
          C:'0.65 is 0.40 + 0.25. Adding counts the visitors who buy both books twice, so the 0.10 overlap has to come back out.'
        },
        tip:'"At least one" = 1 − P(none). For independent events, multiply the individual "not" probabilities to get P(none). The addition route also works, as long as the overlap is subtracted exactly once.',
        desmos:'Type 1-0.6*0.75 and Desmos returns 0.55. Typing 0.4+0.25-0.4*0.25 returns the same 0.55 by adding and removing the overlap.',
        desmosLatex:['1-0.6*0.75','0.4+0.25-0.4*0.25']
      },

      {
        id:'PBR-22', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Counting the outcomes when one stage can be skipped',
        stem:'A drink at Brixley Coffee is built in three stages: one of 3 sizes, one of 4 flavors, and then either one of 2 syrup add-ins or no add-in at all. How many different drinks can be built?',
        choices:{A:'9', B:'36', C:'24', D:'14'},
        correct:'B',
        expCorrect:'The third stage really has 3 outcomes, not 2: the first syrup, the second syrup, or nothing. Multiply the stages: 3 × 4 × 3 = 36. (Check by splitting the cases: 3 × 4 = 12 drinks with no add-in, plus 12 × 2 = 24 with one, and 12 + 24 = 36 ✓.)',
        expWrong:{
          A:'9 is 3 + 4 + 2, adding the stages instead of multiplying them. Addition counts the items on the menu board, not the drinks that can be built from them.',
          C:'24 is 3 × 4 × 2, which forces every drink to carry a syrup. "No add-in" is a legal third choice and has to be counted as an outcome.',
          D:'14 is 3 × 4 + 2, which multiplies the first two stages and then tacks the syrups on at the end instead of multiplying them in.'
        },
        tip:'Multiply the number of options at each stage, and count "none" as an option whenever a stage may be skipped: 2 add-ins with a skip allowed is 3 outcomes, not 2.',
        desmos:'Type 3*4*3 and Desmos returns 36. Typing 3*4*2 returns 24, the count that forbids a plain drink, and 3*4+3*4*2 returns 36 again by splitting the cases.',
        desmosLatex:['3*4*3','3*4*2','3*4+3*4*2']
      },

      {
        id:'PBR-23', type:'spr', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two-way table: a conditional probability that needs a missing cell',
        figure:TBL_BOOKFAIR,
        stem:'The incomplete table summarizes the 200 visitors to the Ridgeway book fair by role and by whether they bought a book. One visitor is chosen at random from among the parents. What is the probability that this visitor bought no books?',
        answer:'0.25',
        expCorrect:'The empty cell is the parents who bought no books. Down the column: 100 parents in all and 75 of them bought at least one book, so 100 − 75 = 25. Conditioning on parents makes 100 the denominator, so P = 25 ÷ 100 = 0.25. (Check across the row instead: the "bought no books" row totals 60, and 60 − 32 − 3 = 25 ✓.) Answer: 0.25.',
        expWrong:{},
        tip:'Fill the missing cell before answering, and fill it twice — once down its column and once across its row. The two routes have to agree, and that agreement is the only proof the table was read correctly.',
        desmos:'Type 100-75 for the missing 25, then 25/100 for 0.25. Typing 60-32-3 returns 25 again by the other route.',
        desmosLatex:['100-75','25/100','60-32-3']
      },

      {
        id:'PBR-24', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Two-way table: a joint probability against a conditional one',
        figure:TBL_BOOKFAIR,
        stem:'One of the 200 visitors in the Ridgeway book fair table is chosen at random. What is the probability that this visitor is a parent who bought at least one book?',
        choices:{A:'0.375', B:'0.50', C:'0.70', D:'0.75'},
        correct:'A',
        expCorrect:'Both halves of the description point at a single cell: parents who bought at least one book, which is 75. The visitor is drawn from all 200, so P = 75 ÷ 200 = 0.375. (Check: the parent column holds 75 + 25 = 100 visitors, and 75 ÷ 200 is indeed less than 100 ÷ 200 = 0.50 ✓.)',
        expWrong:{
          B:'0.50 is 100 ÷ 200, the probability of being a parent. It drops the book half of the description.',
          C:'0.70 is 140 ÷ 200, the probability of having bought at least one book. It drops the parent half instead.',
          D:'0.75 is 75 ÷ 100, which divides by the parent column total. That answers "given a parent, what is the probability of buying a book?", a conditional the question never set up.'
        },
        tip:'A description joined by AND with no "given" is a joint probability: one cell over the grand total. The moment a sentence names the group being drawn from, the denominator moves to that group.',
        desmos:'Type 75/200 for 0.375 and 75/100 for 0.75. The same cell over two denominators answers two different questions.',
        desmosLatex:['75/200','75/100','140/200']
      },

      {
        id:'PBR-25', type:'mc', domain:'Problem-Solving & Data Analysis', difficulty:'Media',
        skill:'Total probability: combining two conditional probabilities',
        stem:'At the Maplewood Animal Shelter, 60% of the dogs arrive from a county pound and the other 40% arrive as private surrenders. Of the pound dogs, 80% pass the behavior screen, and of the surrendered dogs, 90% pass. What is the probability that a dog at the shelter passes the behavior screen?',
        choices:{A:'0.48', B:'0.72', C:'0.84', D:'0.85'},
        correct:'C',
        expCorrect:'Split the dogs by where they came from and weight each branch by how common it is: (0.60)(0.80) + (0.40)(0.90) = 0.48 + 0.36 = 0.84. (Check with counts: out of 100 dogs, 60 pound dogs give 48 passes and 40 surrendered dogs give 36, so 84 of the 100 pass ✓.)',
        expWrong:{
          A:'0.48 is (0.60)(0.80), the pound branch on its own. The surrendered dogs pass too, and their 0.36 belongs in the total.',
          B:'0.72 is (0.80)(0.90), the two pass rates multiplied together. That would be the probability of two separate dogs both passing, not of one dog passing.',
          D:'0.85 is (80% + 90%) ÷ 2, the unweighted average of the two rates. The sources are not equally common, so the 80% branch carries more weight and pulls the answer below 0.85.'
        },
        tip:'When a population splits into groups with different rates, weight each rate by its group share and add: P = share 1 × rate 1 + share 2 × rate 2. The result always lands between the two rates, closer to the bigger group.',
        desmos:'Type 0.6*0.8+0.4*0.9 and Desmos returns 0.84. Typing (0.8+0.9)/2 returns 0.85, the unweighted average that ignores the 60-40 split.',
        desmosLatex:['0.6*0.8+0.4*0.9','(0.8+0.9)/2']
      }

    ]
  });
})();
