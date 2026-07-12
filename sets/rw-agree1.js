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
      expCorrect:'El sujeto real es “The box” (singular). La frase “of antique silver spoons” solo describe al sujeto y no cambia su número. Un sujeto singular pide un verbo singular: “is”.',
      expWrong:{
        B:'“are” es plural; concuerda con “spoons”, no con el verdadero sujeto “The box” (singular).',
        C:'“were” es plural; el sujeto singular “box” pide un verbo singular, no plural.',
        D:'“have been” es plural; el sujeto singular “box” pide “has been”, no “have been”.'
      },
      tip:'Tapa la frase entre el sujeto y el verbo (“of antique silver spoons”). Queda “The box ___”: singular pide verbo singular.'
    },
    {
      id:'AGR-02', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Verb Agreement',
      passage:"Each of the volunteers who signed up for the beach cleanup %BLANK% a reusable bag and a pair of gloves before heading down to the shoreline.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'receive', B:'receives', C:'have received', D:'are receiving'},
      correct:'B',
      expCorrect:'El sujeto es “Each”, que siempre es singular sin importar la frase que lo siga. Un sujeto singular pide un verbo singular: “receives”.',
      expWrong:{
        A:'“receive” es plural; concuerda con “volunteers”, pero el sujeto real es el singular “Each”.',
        C:'“have received” es plural; el singular “Each” pide “has”, no “have”.',
        D:'“are receiving” es plural; el sujeto singular “Each” pide un verbo singular.'
      },
      tip:'“Each” (cada uno) es SIEMPRE singular. Ignora “of the volunteers”: el verbo concuerda con “Each”.'
    },
    {
      id:'AGR-03', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"Beyond the ridge, where the pines grow thick and the trail nearly disappears, %BLANK% a small cabin that hikers use as a shelter during sudden storms.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'stand', B:'stands', C:'have stood', D:'were standing'},
      correct:'B',
      expCorrect:'La oración está invertida: el sujeto viene DESPUÉS del verbo. El sujeto es “a small cabin” (singular), así que el verbo es singular: “stands”.',
      expWrong:{
        A:'“stand” es plural; el sujeto “a small cabin” es singular.',
        C:'“have stood” es plural; el sujeto singular “a small cabin” pide “has stood”.',
        D:'“were standing” es plural; el sujeto es singular y el resto del texto está en presente.'
      },
      tip:'Cuando la oración empieza con lugar (“Beyond the ridge…”), busca el sujeto DESPUÉS del verbo. Aquí es “a cabin” (singular).'
    },
    {
      id:'AGR-04', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Verb Agreement',
      passage:"Neither the coach nor the players %BLANK% satisfied with the referee’s final call, but they agreed to accept the outcome and shake hands after the match.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'was', B:'is', C:'were', D:'has been'},
      correct:'C',
      expCorrect:'Con “neither… nor…”, el verbo concuerda con el sujeto MÁS CERCANO. El más cercano es “the players” (plural), así que el verbo va en plural: “were”.',
      expWrong:{
        A:'“was” es singular; concordaría con “coach”, pero la regla manda concordar con el sujeto más cercano, que es plural.',
        B:'“is” es singular y presente; el sujeto más cercano es plural y el texto está en pasado.',
        D:'“has been” es singular; el sujeto más cercano “players” es plural.'
      },
      tip:'En “neither X nor Y”, mira SOLO la Y (lo más cercano al verbo). Si Y es plural, el verbo es plural.'
    },
    {
      id:'AGR-05', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Verb Agreement',
      passage:"The committee, along with several outside consultants hired to review the budget, %BLANK% recommending deep cuts to the marketing department next quarter.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'are', B:'were', C:'is', D:'have been'},
      correct:'C',
      expCorrect:'El sujeto es “The committee” (singular, tratado como una unidad). La frase “along with several outside consultants” no forma parte del sujeto: solo lo acompaña. Un sujeto singular pide “is”.',
      expWrong:{
        A:'“are” es plural; “along with…” no suma sujetos, así que el sujeto sigue siendo el singular “committee”.',
        B:'“were” es plural; el sujeto singular “committee” pide un verbo singular.',
        D:'“have been” es plural; el singular “committee” pide “has been”, no “have been”.'
      },
      tip:'Frases como “along with”, “as well as” o “together with” NO agregan al sujeto. Concuerda solo con el sujeto real (“committee”).'
    },
    {
      id:'AGR-06', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Pronoun Agreement',
      passage:"When a student misses more than three sessions, %BLANK% must schedule a meeting with the instructor before returning to the workshop.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'they', B:'he or she', C:'we', D:'it'},
      correct:'B',
      expCorrect:'El antecedente es “a student” (singular). Un pronombre singular que se refiere a una persona indefinida es “he or she”.',
      expWrong:{
        A:'“they” es plural; no concuerda con el antecedente singular “a student”.',
        C:'“we” es primera persona; el texto habla del estudiante en tercera persona, no de nosotros.',
        D:'“it” es para cosas o animales, no para un estudiante (persona).'
      },
      tip:'Un antecedente singular (“a student”) pide un pronombre singular. Para una persona indefinida, usa “he or she”.'
    },
    {
      id:'AGR-07', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Pronoun Agreement',
      passage:"The orchestra tuned %BLANK% instruments quietly as the audience members settled into their seats and the lights above the stage began to dim.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'their', B:'its', C:'it’s', D:'our'},
      correct:'B',
      expCorrect:'“The orchestra” es un sustantivo colectivo tratado como una sola unidad. El pronombre posesivo singular que le corresponde es “its”.',
      expWrong:{
        A:'“their” es plural; aquí el texto trata a la orquesta como una unidad singular.',
        C:'“it’s” significa “it is”; aquí se necesita el posesivo “its”, sin apóstrofo.',
        D:'“our” es primera persona; el texto habla de la orquesta en tercera persona.'
      },
      tip:'Un sustantivo colectivo tratado como unidad (“The orchestra”) pide el posesivo singular “its”.'
    },
    {
      id:'AGR-08', type:'mc', domain:'Standard English Conventions', difficulty:'Media',
      skill:'Pronoun Agreement',
      passage:"Any hiker who plans to camp overnight in the reserve should register at the ranger station and leave %BLANK% expected return time with the staff.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'their', B:'your', C:'its', D:'his or her'},
      correct:'D',
      expCorrect:'El antecedente es “Any hiker” (singular). Un pronombre posesivo singular para una persona indefinida es “his or her”.',
      expWrong:{
        A:'“their” es plural; no concuerda con el singular “Any hiker”.',
        B:'“your” es segunda persona; el texto habla del excursionista en tercera persona, no le habla a “tú”.',
        C:'“its” es para cosas o animales, no para un excursionista (persona).'
      },
      tip:'“Any hiker” es singular. El posesivo singular para una persona es “his or her”; mantén la tercera persona en toda la oración.'
    },
    {
      id:'AGR-09', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Pronoun Agreement',
      passage:"A person who truly wants to master a second language must push %BLANK% every single day, because even a short break can slow real progress.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'themselves', B:'yourself', C:'himself or herself', D:'ourselves'},
      correct:'C',
      expCorrect:'El antecedente es “A person” (singular, tercera persona). El pronombre reflexivo singular que le corresponde es “himself or herself”.',
      expWrong:{
        A:'“themselves” es plural; no concuerda con el singular “A person”.',
        B:'“yourself” es segunda persona; el texto habla de “A person” en tercera persona.',
        D:'“ourselves” es primera persona plural; no encaja con el singular en tercera persona “A person”.'
      },
      tip:'El reflexivo debe concordar en número y persona con su antecedente. “A person” (singular, 3ª persona) → “himself or herself”.'
    },
    {
      id:'AGR-10', type:'mc', domain:'Standard English Conventions', difficulty:'Difícil',
      skill:'Pronoun Agreement',
      passage:"The scientist thanked the two colleagues %BLANK% had spent long nights checking her calculations before the results were submitted for publication.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'whom', B:'which', C:'who', D:'whose'},
      correct:'C',
      expCorrect:'El pronombre es el SUJETO del verbo “had spent” (ellos gastaron las noches). El pronombre relativo en caso sujeto, para personas, es “who”.',
      expWrong:{
        A:'“whom” es caso objeto; aquí el pronombre hace de sujeto de “had spent”, así que va “who”.',
        B:'“which” se usa para cosas o animales, no para personas (“colleagues”).',
        D:'“whose” es posesivo; aquí no se indica posesión, sino quién realizó la acción.'
      },
      tip:'Si el pronombre HACE la acción del verbo que sigue, es sujeto → “who”. Truco: cámbialo por “he/she” (who) vs “him/her” (whom).'
    },
    {
      id:'AGR-11', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Pronoun Agreement',
      passage:"The award will go to %BLANK% the judges believe has shown the most improvement over the course of the entire season.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'whom', B:'whomever', C:'which', D:'whoever'},
      correct:'D',
      expCorrect:'El pronombre es el SUJETO de “has shown” (esa persona ha mostrado la mejora). La frase “the judges believe” está intercalada. El caso sujeto es “whoever”.',
      expWrong:{
        A:'“whom” es caso objeto; aquí el pronombre es sujeto de “has shown”, así que se necesita la forma sujeto.',
        B:'“whomever” es caso objeto; el pronombre hace de sujeto del verbo “has shown”, no de objeto.',
        C:'“which” se usa para cosas, no para la persona que recibirá el premio.'
      },
      tip:'Ignora la frase intercalada (“the judges believe”). Pregunta: ¿quién “has shown”? Es el sujeto → “whoever”.'
    },
    {
      id:'AGR-12', type:'mc', domain:'Standard English Conventions', difficulty:'Fácil',
      skill:'Possessives',
      passage:"The hikers left %BLANK% backpacks by the trailhead, confident that no one would disturb them during the short walk to the overlook.",
      stem:'Which choice completes the text so that it conforms to the conventions of Standard English?',
      choices:{A:'there', B:'they’re', C:'their', D:'theirs'},
      correct:'C',
      expCorrect:'Se necesita un adjetivo posesivo antes del sustantivo “backpacks” (las mochilas de ellos). El posesivo plural correcto es “their”.',
      expWrong:{
        A:'“there” indica lugar (“allí”); no es posesivo y no puede describir “backpacks”.',
        B:'“they’re” significa “they are”; aquí se necesita el posesivo, no una contracción.',
        D:'“theirs” es pronombre posesivo y va solo (sin sustantivo después); aquí hay un sustantivo (“backpacks”), así que corresponde “their”.'
      },
      tip:'“their” = posesivo (their backpacks); “there” = lugar; “they’re” = they are. Antes de un sustantivo, usa “their”.'
    }
  ]
});
