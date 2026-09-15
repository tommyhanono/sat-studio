/* SAT Studio question set — Reading & Writing: Pronoun & Verb Agreement Set 1 (AGR-01 a AGR-12) */
window.SAT_SETS.push({
  id: 'rw-agree1',
  title: 'Pronoun & Verb Agreement — Set 1',
  section: 'rw',
  level: 'Media',
  description: 'Subject–verb agreement, pronoun–antecedent agreement, pronoun case, and possessive forms.',
  minutes: 14,
  questions: [
    {
      id:'AGR-01', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Verb Agreement',
      passage:"The box of antique silver spoons that my grandmother left me %BLANK% displayed on the top shelf of the cabinet in the dining room.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'is', B:'are', C:'were', D:'have been'},
      correct:'A',
      expCorrect:'The real subject is "The box" (singular). The phrase "of antique silver spoons" only describes the subject and does not change its number. A singular subject calls for a singular verb: "is".',
      expWrong:{
        B:'"are" is plural; it agrees with "spoons", not with the real subject "The box" (singular).',
        C:'“were” is plural; the singular subject “box” needs a singular verb, not a plural one.',
        D:'“have been” is plural; the singular subject “box” needs “has been”, not “have been”.'
      },
      tip:'Cover the phrase between the subject and the verb ("of antique silver spoons"). What is left is "The box ___": singular calls for a singular verb.'
    },
    {
      id:'AGR-02', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Verb Agreement',
      passage:"Each of the volunteers who signed up for the beach cleanup %BLANK% a reusable bag and a pair of gloves before heading down to the shoreline.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'receive', B:'receives', C:'have received', D:'are receiving'},
      correct:'B',
      expCorrect:'The subject is "Each", which is always singular no matter what phrase follows it. A singular subject calls for a singular verb: "receives".',
      expWrong:{
        A:'"receive" is plural; it agrees with "volunteers", but the real subject is the singular "Each".',
        C:'“have received” is plural; the singular “Each” needs “has”, not “have”.',
        D:'“are receiving” is plural; the singular subject “Each” needs a singular verb.'
      },
      tip:'"Each" is ALWAYS singular. Ignore "of the volunteers": the verb agrees with "Each".'
    },
    {
      id:'AGR-03', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"Beyond the ridge, where the pines grow thick and the trail nearly disappears, %BLANK% a small cabin that hikers use as a shelter during sudden storms.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'stand', B:'stands', C:'have stood', D:'were standing'},
      correct:'B',
      expCorrect:'The sentence is inverted: the subject comes AFTER the verb. The subject is "a small cabin" (singular), so the verb is singular: "stands".',
      expWrong:{
        A:'“stand” is plural; the subject “a small cabin” is singular.',
        C:'“have stood” is plural; the singular subject “a small cabin” needs “has stood”.',
        D:'"were standing" is plural; the subject is singular and the rest of the text is in the present.'
      },
      tip:'When the sentence opens with a place ("Beyond the ridge…"), look for the subject AFTER the verb. Here it is "a cabin" (singular).'
    },
    {
      id:'AGR-04', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Verb Agreement',
      passage:"Neither the coach nor the players %BLANK% satisfied with the referee’s final call, but they agreed to accept the outcome and shake hands after the match.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'was', B:'is', C:'were', D:'has been'},
      correct:'C',
      expCorrect:'With "neither… nor…", the verb agrees with the NEAREST subject. The nearest is "the players" (plural), so the verb is plural: "were".',
      expWrong:{
        A:'"was" is singular; it would agree with "coach", but the rule says agree with the nearest subject, which is plural.',
        B:'"is" is singular and present tense; the nearest subject is plural and the text is in the past.',
        D:'"has been" is singular; the nearest subject "players" is plural.'
      },
      tip:'In "neither X nor Y", look ONLY at the Y (the one closest to the verb). If Y is plural, the verb is plural.'
    },
    {
      id:'AGR-05', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"The committee, along with several outside consultants hired to review the budget, %BLANK% recommending deep cuts to the marketing department next quarter.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'are', B:'were', C:'is', D:'have been'},
      correct:'C',
      expCorrect:'The subject is "The committee" (singular, treated as one unit). The phrase "along with several outside consultants" is not part of the subject: it only accompanies it. A singular subject calls for "is".',
      expWrong:{
        A:'"are" is plural; "along with…" does not add subjects, so the subject is still the singular "committee".',
        B:'“were” is plural; the singular subject “committee” needs a singular verb.',
        D:'“have been” is plural; the singular “committee” needs “has been”, not “have been”.'
      },
      tip:'Phrases like "along with", "as well as" or "together with" do NOT add to the subject. Agree only with the real subject ("committee").'
    },
    {
      id:'AGR-06', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Pronoun Agreement',
      passage:"When a student misses more than three sessions, %BLANK% must schedule a meeting with the instructor before returning to the workshop.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'they', B:'he or she', C:'we', D:'it'},
      correct:'B',
      expCorrect:'The antecedent is "a student" (singular). A singular pronoun referring to an indefinite person is "he or she".',
      expWrong:{
        A:'“they” is plural; it does not agree with the singular antecedent “a student”.',
        C:'“we” is first person; the text speaks about the student in the third person, not about us.',
        D:'"it" is for things or animals, not for a student (a person).'
      },
      tip:'A singular antecedent ("a student") calls for a singular pronoun. For an indefinite person, use "he or she".'
    },
    {
      id:'AGR-07', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Pronoun Agreement',
      passage:"The orchestra tuned %BLANK% instruments quietly as the audience members settled into their seats and the lights above the stage began to dim.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'their', B:'its', C:'it’s', D:'our'},
      correct:'B',
      expCorrect:'"The orchestra" is a collective noun treated as one unit. The matching singular possessive pronoun is "its".',
      expWrong:{
        A:'"their" is plural; here the text treats the orchestra as a singular unit.',
        C:'"it’s" means "it is"; here you need the possessive "its", with no apostrophe.',
        D:'“our” is first person; the text talks about the orchestra in the third person.'
      },
      tip:'A collective noun treated as a unit (“The orchestra”) calls for the singular possessive “its”.'
    },
    {
      id:'AGR-08', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Pronoun Agreement',
      passage:"Any hiker who plans to camp overnight in the reserve should register at the ranger station and leave %BLANK% expected return time with the staff.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'their', B:'your', C:'its', D:'his or her'},
      correct:'D',
      expCorrect:'The antecedent is "Any hiker" (singular). A singular possessive pronoun for an indefinite person is "his or her".',
      expWrong:{
        A:'“their” is plural; it does not agree with the singular “Any hiker”.',
        B:'"your" is second person; the text speaks about the hiker in the third person, it does not address "you".',
        C:'"its" is for things or animals, not for a hiker (a person).'
      },
      tip:'"Any hiker" is singular. The singular possessive for a person is "his or her"; keep the third person throughout the sentence.'
    },
    {
      id:'AGR-09', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Pronoun Agreement',
      passage:"A person who truly wants to master a second language must push %BLANK% every single day, because even a short break can slow real progress.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'themselves', B:'yourself', C:'himself or herself', D:'ourselves'},
      correct:'C',
      expCorrect:'The antecedent is “A person” (singular, third person). The matching singular reflexive pronoun is “himself or herself”.',
      expWrong:{
        A:'“themselves” is plural; it does not agree with the singular “A person”.',
        B:'“yourself” is second person; the text talks about “A person” in the third person.',
        D:'“ourselves” is first person plural; it does not fit the third-person singular “A person”.'
      },
      tip:'A reflexive has to agree in number and person with its antecedent. "A person" (singular, 3rd person) → "himself or herself".'
    },
    {
      id:'AGR-10', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Pronoun Agreement',
      passage:"The scientist thanked the two colleagues %BLANK% had spent long nights checking her calculations before the results were submitted for publication.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'whom', B:'which', C:'who', D:'whose'},
      correct:'C',
      expCorrect:'The pronoun is the SUBJECT of the verb "had spent" (they spent the nights). The relative pronoun in the subject case, for people, is "who".',
      expWrong:{
        A:'"whom" is the object case; here the pronoun serves as the subject of "had spent", so it takes "who".',
        B:'"which" is used for things or animals, not for people ("colleagues").',
        D:'"whose" is possessive; here nothing is being possessed, it is about who performed the action.'
      },
      tip:'If the pronoun PERFORMS the action of the verb that follows, it is a subject → "who". Trick: swap it for "he/she" (who) vs "him/her" (whom).'
    },
    {
      id:'AGR-11', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Pronoun Agreement',
      passage:"The award will go to %BLANK% the judges believe has shown the most improvement over the course of the entire season.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'whom', B:'whomever', C:'which', D:'whoever'},
      correct:'D',
      expCorrect:'The pronoun is the SUBJECT of "has shown" (that person has shown the improvement). The phrase "the judges believe" is inserted in between. The subject case is "whoever".',
      expWrong:{
        A:'"whom" is the object case; here the pronoun is the subject of "has shown", so you need the subject form.',
        B:'“whomever” is the object case; the pronoun serves as the subject of the verb “has shown”, not as an object.',
        C:'"which" is used for things, not for the person who will receive the award.'
      },
      tip:'Ignore the inserted phrase ("the judges believe"). Ask: who "has shown"? That is the subject → "whoever".'
    },
    {
      id:'AGR-12', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Possessives',
      passage:"The hikers left %BLANK% backpacks by the trailhead, confident that no one would disturb them during the short walk to the overlook.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'there', B:'they’re', C:'their', D:'theirs'},
      correct:'C',
      expCorrect:'You need a possessive adjective before the noun "backpacks" (their backpacks). The correct plural possessive is "their".',
      expWrong:{
        A:'"there" indicates a place; it is not a possessive and cannot describe "backpacks".',
        B:'"they’re" means "they are"; here you need the possessive, not a contraction.',
        D:'"theirs" is a possessive pronoun and stands alone (with no noun after it); here there is a noun ("backpacks"), so "their" is what fits.'
      },
      tip:'“their” = possessive (their backpacks); “there” = place; “they’re” = they are. Before a noun, use “their”.'
    }
  ]
});
