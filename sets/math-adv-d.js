/* SAT Studio question set — Math: Advanced Math — tier duro (AVD-01 a AVD-34)

   Las tres destrezas oficiales del dominio, en el orden en que las prueba skillOf():
     · am-equiv     "Equivalent expressions"            → AVD-01 a AVD-11  (11)
     · am-nonlin-eq "Nonlinear equations and systems"   → AVD-12 a AVD-22  (11)
     · am-nonlin-fn "Nonlinear functions"               → AVD-23 a AVD-34  (12)

   OJO con el clasificador: dentro de Advanced Math se prueba am-equiv PRIMERO,
   después am-nonlin-eq y al final am-nonlin-fn (el cajón). Gana el primero que
   calce contra `skill` + los primeros 160 caracteres del `stem`.
     · Las de ECUACIONES no pueden decir "equivalent", "expand", "simplif",
       "remainder", "polynomial division", "rational expression",
       "complex fraction", "grouping", "difference of squares" ni "exponent rule".
     · Las de FUNCIONES tampoco pueden decir nada de eso Y ADEMÁS tienen que
       evitar "quadratic", "discriminant", "root(s)" (incluido "square root"),
       "solution(s)", "extraneous", "nonlinear system", "intersect" y "tangen".
   Verificado en el banco vivo del 16-sep-2026: las alternativas "factor" y
   "radical" de am-equiv están escritas \\b (barra literal, no borde de palabra),
   así que HOY no matchean nada. Por eso ninguna pregunta de acá depende de ellas
   para caer donde tiene que caer, y "factoring" aparece libremente en las de
   ecuaciones sin desviarlas. Si alguna vez se arregla ese \\b, este set sigue
   clasificando igual.

   Reparto pedido: 27 MC + 7 SPR · 0 Fácil · 12 Media · 22 Difícil (10 con extreme).
   Clave repartida a mano: 7 A · 7 B · 8 C · 5 D.
   Todos los números se verificaron con un script desechable (sustitución de cada
   raíz, evaluación del original y de las cuatro opciones en 5-6 valores de x). */
(function(){

  /* ---- Tabla de AVD-29. Trae x = 10 a propósito: es el valor que agarra quien
         corre la gráfica para el lado equivocado (f(x + 4) en vez de f(x − 4)),
         y así ese error tiene una opción donde caer en vez de quedarse sin tabla. ---- */
  var TBL_F =
    '<table border="1" cellpadding="6" style="border-collapse:collapse">' +
    '<tr><th>x</th><th>2</th><th>4</th><th>6</th><th>10</th></tr>' +
    '<tr><th>f(x)</th><td>7</td><td>−1</td><td>5</td><td>0</td></tr></table>';

  window.SAT_SETS.push({
    id: 'math-adv-d',
    title: 'Advanced Math — Hard Tier',
    section: 'math',
    level: 'Difícil',
    description: 'Thirty-four Advanced Math questions at the level of a real Module 2: parameters instead of numbers, systems where one answer has to be thrown away, and forms of a function chosen for what is being asked.',
    minutes: 44,
    questions: [

      /* ================= Equivalent expressions (AVD-01 a AVD-11) ================= */

      {
        id:'AVD-01', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Rational expressions: the excluded value that survives simplifying',
        stem:'The rational expression (3x² − 12)/(x² + x − 6) can be rewritten as 3(x + 2)/(x + 3) wherever both are defined. For which value of x is 3(x + 2)/(x + 3) defined while the original expression is not?',
        choices:{A:'−3', B:'−2', C:'2', D:'3'},
        correct:'C',
        expCorrect:'Factor both parts: 3x² − 12 = 3(x − 2)(x + 2), and x² + x − 6 = (x + 3)(x − 2). The (x − 2) cancels, which is what produces 3(x + 2)/(x + 3). But canceling does not give the original expression a value it never had: at x = 2 the original denominator is 4 + 2 − 6 = 0, while the rewritten one gives 3(4)/5 = 2.4. Check: x = 2 is exactly the factor that was canceled.',
        expWrong:{
          A:'−3 is excluded from BOTH: (x + 3) is still in the denominator after the cancellation, so neither expression has a value there.',
          B:'−2 is a zero of the numerator, not of a denominator. Both expressions are defined at x = −2 and both are equal to 0 there.',
          D:'3 is a sign slip on the canceled factor. The factor is (x − 2), so the input it kills is 2, not 3.'
        },
        tip:'Every factor you cancel leaves a hole behind. The excluded values of a rational expression come from the denominator you STARTED with, not from the tidy one you end up with.',
        desmos:'Graph both. The curves look identical, but trace to x=2: only the second one has a point there.',
        desmosLatex:['y=(3x^2-12)/(x^2+x-6)','y=3(x+2)/(x+3)']
      },

      {
        id:'AVD-02', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'The remainder theorem used twice: first the coefficient, then a second value',
        stem:'The polynomial p is defined by p(x) = 2x³ + kx² − 5x + 6, where k is a constant. When p(x) is divided by x − 2, the remainder is 20. What is the value of p(−1)?',
        choices:{A:'1', B:'2', C:'11', D:'17'},
        correct:'C',
        expCorrect:'The remainder on division by x − 2 is p(2). So p(2) = 16 + 4k − 10 + 6 = 12 + 4k = 20, which gives 4k = 8 and k = 2. Now p(x) = 2x³ + 2x² − 5x + 6, so p(−1) = −2 + 2 + 5 + 6 = 11. Check: p(2) = 16 + 8 − 10 + 6 = 20 ✓.',
        expWrong:{
          A:'1 comes from mishandling the sign of −5x at a negative input: −5(−1) is +5, not −5. With −5 the total is −2 + 2 − 5 + 6 = 1.',
          B:'2 is k itself — the next-to-last step. The question asks for p(−1), and k is only the tool for getting there.',
          D:'17 comes from solving 12 + 4k = 20 as 4k = 32 (adding the 12 instead of subtracting it), which gives k = 8 and p(−1) = −2 + 8 + 5 + 6 = 17.'
        },
        tip:'Dividing by x − a leaves a remainder of p(a) — no long division needed. If the question hands you a remainder, it is handing you one equation in the unknown coefficient.',
        desmos:'Define f(x)=2x^3+2x^2-5x+6, then type f(2) and f(-1). The first must print 20 and the second is the answer.',
        desmosLatex:['f(x)=2x^3+2x^2-5x+6','f(2)','f(-1)']
      },

      {
        id:'AVD-03', type:'spr', domain:'Advanced Math', difficulty:'Media',
        skill:'A complex fraction that collapses to a constant',
        stem:'For every value of x in its domain, the complex fraction ( 1/x − 1/(x + 4) ) ÷ ( 1/(x(x + 4)) ) has the same value. What is that value?',
        answer:'4',
        expCorrect:'Combine the top over the common denominator x(x + 4): 1/x − 1/(x + 4) = ((x + 4) − x)/(x(x + 4)) = 4/(x(x + 4)). Dividing by 1/(x(x + 4)) means multiplying by x(x + 4), so everything with an x in it cancels and 4 is left. Check with x = 1: (1 − 1/5) ÷ (1/5) = (4/5)(5) = 4 ✓.',
        tip:'In a complex fraction, combine the top into a single fraction and the bottom into a single fraction FIRST, then divide by multiplying by the reciprocal. Doing it term by term is where these fall apart.',
        desmos:'Graph y=(1/x-1/(x+4))/(1/(x(x+4))). It is the horizontal line y=4, with holes at x=0 and x=-4.',
        desmosLatex:['y=(1/x-1/(x+4))/(1/(x(x+4)))','y=4']
      },

      {
        id:'AVD-04', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Polynomial division: the quotient and the remainder are different answers',
        stem:'For x ≠ 2, the expression (2x³ − 3x² + 4x − 1)/(x − 2) can be written in the form 2x² + ax + b + c/(x − 2), where a, b, and c are constants. What is the value of a + b + c?',
        choices:{A:'−26', B:'7', C:'11', D:'18'},
        correct:'D',
        expCorrect:'Divide by x − 2 with the coefficients 2, −3, 4, −1. Bring down 2; 2(2) = 4 and −3 + 4 = 1; 1(2) = 2 and 4 + 2 = 6; 6(2) = 12 and −1 + 12 = 11. So the quotient is 2x² + x + 6 and the remainder is 11: a = 1, b = 6, c = 11, and a + b + c = 18. Check: (x − 2)(2x² + x + 6) + 11 = 2x³ − 3x² + 4x − 1 ✓.',
        expWrong:{
          A:'−26 is the same division run with the wrong multiplier. Dividing by x − 2 means using +2; using −2 gives a = −7, b = 18, c = −37, which add to −26.',
          B:'7 is a + b, the quotient only. The remainder is part of the requested form, so c belongs in the sum.',
          C:'11 is c alone, the remainder. It is the last number the division produces, which is why it feels like the answer.'
        },
        tip:'In synthetic division the number you multiply by is the ROOT of the divisor: x − 2 gives +2, x + 4 gives −4. The last number that drops out is the remainder; everything before it is the quotient.',
        desmos:'Graph y=(2x^3-3x^2+4x-1)/(x-2) and y=2x^2+x+6+11/(x-2). They coincide exactly.',
        desmosLatex:['y=(2x^3-3x^2+4x-1)/(x-2)','y=2x^2+x+6+11/(x-2)']
      },

      {
        id:'AVD-05', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponent rules: a negative exponent sitting in the denominator',
        stem:'For x &gt; 0, which of the following is equivalent to (x^(3/4) · x^(1/2)) / x^(−1/4) ?',
        choices:{A:'x^(3/2)', B:'x', C:'x^(5/8)', D:'x^(5/4)'},
        correct:'A',
        expCorrect:'Multiplying adds exponents: 3/4 + 1/2 = 5/4. Dividing subtracts the exponent below, and that exponent is −1/4, so you subtract a negative: 5/4 − (−1/4) = 5/4 + 1/4 = 3/2. Check at x = 16: (16^(3/4))(16^(1/2))/16^(−1/4) = (8)(4)/(1/2) = 64, and 16^(3/2) = 64 ✓.',
        expWrong:{
          B:'x is 5/4 − 1/4: the minus sign of the exponent was used once instead of twice. Subtracting an exponent of −1/4 ADDS 1/4.',
          C:'x^(5/8) comes from multiplying the two exponents on top (3/4 · 1/2 = 3/8) and then adding 1/4. Multiplying powers with the same base adds the exponents; it does not multiply them.',
          D:'x^(5/4) is the numerator alone. The denominator x^(−1/4) never got used.'
        },
        tip:'A factor of x^(−n) in the denominator is a factor of x^(+n) on top. Move it up first, then just add exponents — that turns two sign decisions into zero.',
        desmos:'Graph y=(x^(3/4)*x^(1/2))/(x^(-1/4)) and y=x^(3/2) for x>0; the curves sit on top of each other.',
        desmosLatex:['y=(x^{0.75}x^{0.5})/(x^{-0.25})','y=x^{1.5}']
      },

      {
        id:'AVD-06', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Simplifying a rational expression: canceling factors, never terms',
        stem:'For x ≠ 1 and x ≠ −3/2, which of the following is equivalent to (4x² − 9)/(2x² + x − 3) ?',
        choices:{A:'(2x + 3)/(x − 1)', B:'(2x − 3)/(x − 1)', C:'(2x − 3)/(x + 1)', D:'4x/(2x + 1)'},
        correct:'B',
        expCorrect:'The top is a difference of two squares: 4x² − 9 = (2x − 3)(2x + 3). The bottom factors as (2x + 3)(x − 1), since (2x + 3)(x − 1) = 2x² − 2x + 3x − 3 = 2x² + x − 3. The shared factor (2x + 3) cancels and (2x − 3)/(x − 1) is left. Check at x = 0: the original is −9/−3 = 3, and (−3)/(−1) = 3 ✓.',
        expWrong:{
          A:'(2x + 3)/(x − 1) keeps the wrong half of the top. The factor that cancels is (2x + 3), so the one that stays is (2x − 3). At x = 0 this gives −3, not 3.',
          C:'(2x − 3)/(x + 1) mis-factors the bottom. (2x + 3)(x + 1) = 2x² + 5x + 3, not 2x² + x − 3.',
          D:'4x/(2x + 1) comes from crossing out the −9 against the −3 and the x² against the x. Only whole FACTORS cancel; single terms of a sum never do. At x = 0 this gives 0, not 3.'
        },
        tip:'Before canceling anything, both the top and the bottom have to be written as products. If either one is still a sum, there is nothing you are allowed to cross out yet.',
        desmos:'Graph y=(4x^2-9)/(2x^2+x-3) and y=(2x-3)/(x-1). Same curve, except for the hole at x=-1.5.',
        desmosLatex:['y=(4x^2-9)/(2x^2+x-3)','y=(2x-3)/(x-1)']
      },

      {
        id:'AVD-07', type:'spr', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Polynomial division with no remainder: the missing coefficient, then the quotient',
        stem:'The polynomial q is defined by q(x) = x³ + 7x² + kx − 16, where k is a constant. When q(x) is divided by x + 4 the remainder is 0, and the quotient is x² + bx + c. What is the value of b − c ?',
        answer:'7',
        expCorrect:'A remainder of 0 on division by x + 4 means q(−4) = 0: −64 + 112 − 4k − 16 = 0, so 32 − 4k = 0 and k = 8. Now divide x³ + 7x² + 8x − 16 by x + 4 using −4: bring down 1; 1(−4) = −4 and 7 − 4 = 3; 3(−4) = −12 and 8 − 12 = −4; (−4)(−4) = 16 and −16 + 16 = 0 ✓. The quotient is x² + 3x − 4, so b = 3, c = −4 and b − c = 3 − (−4) = 7.',
        tip:'Remainder 0 and "x + 4 is a factor" are the same statement, and both mean q(−4) = 0. Find the unknown coefficient that way first; only then do the division, with the value that makes the divisor zero.',
        desmos:'Graph y=x^3+7x^2+8x-16 and check it crosses at x=-4. Then graph y=(x+4)(x^2+3x-4): same curve.',
        desmosLatex:['y=x^3+7x^2+8x-16','y=(x+4)(x^2+3x-4)']
      },

      {
        id:'AVD-08', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'A difference of squares hiding inside the subtraction of two squares',
        stem:'Which of the following is equivalent to (x + 3)² − (x − 5)² ?',
        choices:{A:'64', B:'2x − 2', C:'16x + 34', D:'16x − 16'},
        correct:'D',
        expCorrect:'Treat it as A² − B² with A = x + 3 and B = x − 5: the value is (A − B)(A + B) = ((x + 3) − (x − 5))((x + 3) + (x − 5)) = (8)(2x − 2) = 16x − 16. Expanding confirms it: (x² + 6x + 9) − (x² − 10x + 25) = 16x − 16. Check at x = 1: (4)² − (−4)² = 16 − 16 = 0, and 16(1) − 16 = 0 ✓.',
        expWrong:{
          A:'64 is ((x + 3) − (x − 5))², that is, subtracting the bases and then squaring. Squaring is not something you can do to a difference first; (A − B)² is not A² − B².',
          B:'2x − 2 is only the second factor of (A − B)(A + B). The first factor, 8, was dropped — one step short of the answer.',
          C:'16x + 34 comes from distributing the minus sign to only the first term of the second square: x² + 6x + 9 − x² + 10x + 25. The minus applies to all three terms, so the 25 becomes −25.'
        },
        tip:'Whenever you see (something)² − (something else)², reach for (A − B)(A + B) before expanding. And when a minus sign sits in front of a parenthesis, it belongs to every term inside.',
        desmos:'Graph y=(x+3)^2-(x-5)^2 and y=16x-16. It is a straight line, and the two coincide.',
        desmosLatex:['y=(x+3)^2-(x-5)^2','y=16x-16']
      },

      {
        id:'AVD-09', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Factoring a four-term polynomial by grouping',
        stem:'Which of the following is equivalent to 10x³ + 15x² − 4x − 6 ?',
        choices:{A:'(2x + 3)(5x² − 2)', B:'(2x + 3)(5x² + 2)', C:'(2x − 3)(5x² − 2)', D:'5x² − 2'},
        correct:'A',
        expCorrect:'Group in pairs: (10x³ + 15x²) + (−4x − 6) = 5x²(2x + 3) − 2(2x + 3). Both pieces now share the factor (2x + 3), so the result is (2x + 3)(5x² − 2). Check by expanding: (2x + 3)(5x² − 2) = 10x³ − 4x + 15x² − 6 ✓.',
        expWrong:{
          B:'(2x + 3)(5x² + 2) pulls +2 out of −4x − 6, which would give +4x + 6. To keep the SAME binomial (2x + 3) in both groups, the number in front has to be −2.',
          C:'(2x − 3)(5x² − 2) changes the common binomial. Both groups produced (2x + 3); flipping its sign changes the polynomial — at x = 0 this gives 6, not −6.',
          D:'5x² − 2 is only the factor that was pulled out at the end. Factoring produces a product, so the binomial (2x + 3) stays in the answer.'
        },
        tip:'After grouping, the two parentheses have to match EXACTLY. If one reads (2x + 3) and the other (2x − 3), the sign you pulled out of the second pair is the wrong one — change it and try again.',
        desmos:'Graph y=10x^3+15x^2-4x-6 and y=(2x+3)(5x^2-2): one curve, not two.',
        desmosLatex:['y=10x^3+15x^2-4x-6','y=(2x+3)(5x^2-2)']
      },

      {
        id:'AVD-10', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Subtracting rational expressions: the minus sign in front of the second numerator',
        stem:'For x ≠ 2 and x ≠ −1, which of the following is equivalent to 3/(x − 2) − 2/(x + 1) ?',
        choices:{A:'(x + 7)/((x − 2)(x + 1))', B:'(x − 1)/((x − 2)(x + 1))', C:'(5x − 1)/((x − 2)(x + 1))', D:'1/((x − 2)(x + 1))'},
        correct:'A',
        expCorrect:'The common denominator is (x − 2)(x + 1). Rewrite each piece: 3(x + 1)/((x − 2)(x + 1)) − 2(x − 2)/((x − 2)(x + 1)). The top becomes 3x + 3 − 2x + 4 = x + 7, because the minus applies to both terms of 2(x − 2). Check at x = 0: 3/(−2) − 2/1 = −3.5, and 7/((−2)(1)) = −3.5 ✓.',
        expWrong:{
          B:'(x − 1) comes from 3x + 3 − 2x − 4: the minus sign reached the 2x but not the −4. Subtracting 2(x − 2) means subtracting 2x and ADDING 4.',
          C:'(5x − 1) is what you get by adding instead of subtracting: 3x + 3 + 2x − 4. The expression has a minus between the two fractions.',
          D:'1/((x − 2)(x + 1)) subtracts the numerators (3 − 2 = 1) while multiplying the denominators. Numerators can only be combined after both fractions already sit over the same denominator.'
        },
        tip:'Put brackets around the second numerator before you subtract: 3(x + 1) − [2(x − 2)]. Distributing a minus over two terms is the single most common place these questions are lost.',
        desmos:'Graph y=3/(x-2)-2/(x+1) and y=(x+7)/((x-2)(x+1)). Identical, asymptotes included.',
        desmosLatex:['y=3/(x-2)-2/(x+1)','y=(x+7)/((x-2)(x+1))']
      },

      {
        id:'AVD-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Simplifying a square root of a perfect square over a given interval',
        stem:'For −4 &lt; x &lt; 3, which of the following is equivalent to √(x² − 6x + 9) + √(x² + 8x + 16) ?',
        choices:{A:'2x + 1', B:'7', C:'7 − 2x', D:'2x + 7'},
        correct:'B',
        expCorrect:'Both insides are perfect squares: x² − 6x + 9 = (x − 3)² and x² + 8x + 16 = (x + 4)². Taking a square root gives the ABSOLUTE value: |x − 3| + |x + 4|. On the interval −4 &lt; x &lt; 3 the first is negative, so |x − 3| = 3 − x, while the second is positive, so |x + 4| = x + 4. The sum is (3 − x) + (x + 4) = 7 — the x cancels. Check at x = 0: √9 + √16 = 3 + 4 = 7 ✓.',
        expWrong:{
          A:'2x + 1 drops the absolute values and writes (x − 3) + (x + 4). That is the right answer for x ≥ 3, which is exactly the interval the question excluded. At x = 0 it gives 1, not 7.',
          C:'7 − 2x flips both signs, as if x + 4 were negative too. On −4 &lt; x &lt; 3 the quantity x + 4 is positive, so it comes out of the square root unchanged.',
          D:'2x + 7 reads x² − 6x + 9 as (x + 3)². The middle term is −6x, so the binomial is (x − 3).'
        },
        tip:'√(A²) is |A|, not A. Once the interval tells you the sign of A, replace the absolute value: positive A stays, negative A flips to −A. Test a number inside the interval before you commit.',
        desmos:'Graph y=sqrt(x^2-6x+9)+sqrt(x^2+8x+16). Between x=-4 and x=3 it is a flat line at 7, and it bends outside.',
        desmosLatex:['y=sqrt(x^2-6x+9)+sqrt(x^2+8x+16)','y=7']
      },

      /* ============ Nonlinear equations and systems (AVD-12 a AVD-22) ============ */

      {
        id:'AVD-12', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Discriminant: the parameter that leaves exactly one solution',
        stem:'In the quadratic equation kx² − 24x + 18 = 0, k is a nonzero constant. The equation has exactly one real solution. What is the value of k?',
        choices:{A:'−8', B:'1/3', C:'8', D:'32'},
        correct:'C',
        expCorrect:'Exactly one real solution means the discriminant b² − 4ac is 0. Here a = k, b = −24 and c = 18, so (−24)² − 4(k)(18) = 0, that is 576 − 72k = 0 and k = 8. Check: 8x² − 24x + 18 = 2(2x − 3)², which is zero only at x = 1.5 ✓.',
        expWrong:{
          A:'−8 is a sign slip: 576 − 72k = 0 gives 72k = +576. With k = −8 the discriminant is 1152, which is positive — two solutions, not one.',
          B:'1/3 comes from using b instead of b², that is 24 − 72k = 0. The discriminant squares the middle coefficient.',
          D:'32 comes from b² − ac = 0 (576 = 18k), dropping the 4. The formula is b² − 4ac.'
        },
        tip:'One real solution ⇔ discriminant = 0; two ⇔ positive; none ⇔ negative. Write b² − 4ac out with parentheses around each substitution — that is where the squared negative and the missing 4 both get lost.',
        desmos:'Graph y=kx^2-24x+18 with a slider for k. The curve just touches the x-axis at one value of k.',
        desmosLatex:['y=kx^2-24x+18','k=8']
      },

      {
        id:'AVD-13', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Discriminant: the largest integer that still gives two distinct solutions',
        stem:'In the equation x² − 10x + m = 0, m is a positive integer and the equation has two distinct real solutions. What is the greatest possible value of m?',
        choices:{A:'9', B:'24', C:'25', D:'99'},
        correct:'B',
        expCorrect:'Two DISTINCT real solutions means b² − 4ac &gt; 0, strictly: 100 − 4m &gt; 0, so m &lt; 25. The greatest integer below 25 is 24. Check: at m = 24 the discriminant is 100 − 96 = 4 &gt; 0, and the equation factors as (x − 4)(x − 6) — two different solutions ✓.',
        expWrong:{
          A:'9 comes from taking the square root of 100 first and reading the condition as m &lt; 10. The discriminant compares 100 with 4m, not 10 with m.',
          C:'25 is the boundary. At m = 25 the discriminant is exactly 0 and the equation is (x − 5)² = 0: one repeated solution, so "two distinct" fails.',
          D:'99 comes from 100 − m &gt; 0, dropping the 4 in b² − 4ac. At m = 99 the discriminant is 100 − 396 = −296, so there are no real solutions at all.'
        },
        tip:'"Two distinct" is a strict inequality, so the boundary value is excluded — and when the answer must be an integer, that is exactly one step below the boundary.',
        desmos:'Graph y=x^2-10x+m with a slider for m. Watch the curve lift off the x-axis: at m=25 it only touches.',
        desmosLatex:['y=x^2-10x+m','m=24']
      },

      {
        id:'AVD-14', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Nonlinear system: the value of k that lets a line meet a curve exactly once',
        stem:'The system of equations y = x² − 4x + 7 and y = 2x + k has exactly one solution, where k is a constant. What is the value of k?',
        choices:{A:'−8', B:'−2', C:'2', D:'3'},
        correct:'B',
        expCorrect:'Set them equal: x² − 4x + 7 = 2x + k, so x² − 6x + (7 − k) = 0. One solution means the discriminant is 0: 36 − 4(7 − k) = 0, that is 36 − 28 + 4k = 0, so 4k = −8 and k = −2. Check: with k = −2 the equation is x² − 6x + 9 = (x − 3)² = 0, so the only meeting point is x = 3, where the curve gives 9 − 12 + 7 = 4 and the line gives 6 − 2 = 4 ✓.',
        expWrong:{
          A:'−8 is 4k, the next-to-last line of the work. One division by 4 was still owed.',
          C:'2 flips the sign when moving 2x across: the constant term is 7 − k, so the discriminant is 36 − 28 + 4k, not 36 − 28 − 4k.',
          D:'3 is the y-coordinate of the vertex of the curve (at x = 2, y = 4 − 8 + 7 = 3). That would be the answer for a HORIZONTAL line touching once; this line has slope 2, so it touches somewhere else.'
        },
        tip:'For "exactly one solution" in a curve-and-line system: substitute, move everything to one side, and set the discriminant of THAT equation to zero. The vertex only matters when the line is horizontal.',
        desmos:'Graph y=x^2-4x+7 and y=2x+k with a slider for k. Slide until the line just grazes the curve.',
        desmosLatex:['y=x^2-4x+7','y=2x+k','k=-2']
      },

      {
        id:'AVD-15', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Radical equation: the extraneous solution that has to be thrown out',
        stem:'What is the solution to the equation √(3x + 10) = x + 2 ?',
        answer:'2',
        expCorrect:'Square both sides: 3x + 10 = x² + 4x + 4, so 0 = x² + x − 6 = (x + 3)(x − 2) and the candidates are x = −3 and x = 2. Now test both in the ORIGINAL equation. At x = 2: √16 = 4 and 2 + 2 = 4 ✓. At x = −3: √1 = 1 but −3 + 2 = −1, and 1 ≠ −1, so x = −3 is extraneous. The only solution is 2.',
        tip:'Squaring both sides can invent solutions, because it forgets that a square root is never negative. Every candidate has to be checked in the equation you started with, not in the squared one.',
        desmos:'Graph y=sqrt(3x+10) and y=x+2. They cross once, at x=2 — the point at x=-3 is not there.',
        desmosLatex:['y=sqrt(3x+10)','y=x+2']
      },

      {
        id:'AVD-16', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Rational equation: the candidate that the domain throws out',
        stem:'Which of the following describes all solutions to the equation x²/(x − 1) = 1/(x − 1) ?',
        choices:{A:'x = −1 only', B:'x = 1 only', C:'x = 1 and x = −1', D:'There is no solution'},
        correct:'A',
        expCorrect:'The denominators are identical, so multiplying both sides by (x − 1) gives x² = 1 and the candidates are x = 1 and x = −1. But x = 1 makes x − 1 equal to 0, and neither side of the original equation exists there, so it is extraneous. At x = −1 both sides equal 1/(−2) = −0.5 ✓. Only x = −1 works.',
        expWrong:{
          B:'x = 1 is precisely the value the denominator forbids. It appears only because multiplying by (x − 1) quietly assumed x − 1 was not zero.',
          C:'Keeping both means the domain was never checked. x² = 1 is true at x = 1, but the equation it came from has no value there.',
          D:'"No solution" throws out one candidate too many. x = −1 does not break any denominator and satisfies the equation.'
        },
        tip:'Before solving a rational equation, write down the values that make any denominator zero. Whatever the algebra produces, those values are out — no matter how clean they look.',
        desmos:'Graph y=x^2/(x-1) and y=1/(x-1). They meet at x=-1; at x=1 both curves are missing.',
        desmosLatex:['y=x^2/(x-1)','y=1/(x-1)']
      },

      {
        id:'AVD-17', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Nonlinear system: how many points a curve and a horizontal line share',
        stem:'How many solutions does the system of equations y = x² − 6x + 11 and y = 3 have?',
        choices:{A:'Zero', B:'One', C:'Two', D:'Infinitely many'},
        correct:'C',
        expCorrect:'Substitute y = 3: x² − 6x + 11 = 3, so x² − 6x + 8 = 0. The discriminant is 36 − 32 = 4, which is positive, so there are two different values of x. Factoring confirms it: (x − 2)(x − 4) = 0 gives x = 2 and x = 4, and both produce y = 3 ✓.',
        expWrong:{
          A:'Zero would require a negative discriminant. The lowest point of the curve is at x = 3, where y = 9 − 18 + 11 = 2, so the line y = 3 sits above the bottom and does cut through.',
          B:'One happens only when the horizontal line passes through the lowest point, which here is y = 2. At y = 3 the line is above it.',
          D:'Infinitely many would mean the two graphs are the same. One is a curve and the other is a straight line, so they can share at most two points.'
        },
        tip:'A horizontal line y = c cuts a parabola twice, once, or never, depending on whether c is above, exactly at, or below the vertex value. Find the vertex value first and the count is immediate.',
        desmos:'Graph y=x^2-6x+11 and y=3, then count the crossings. Move the line to y=2 and watch two become one.',
        desmosLatex:['y=x^2-6x+11','y=3']
      },

      {
        id:'AVD-18', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Sum of the solutions of a quadratic equation without solving it',
        stem:'The solutions to the equation 3x² − 11x + 6 = 0 are p and q. What is the value of p + q?',
        choices:{A:'−11/3', B:'2', C:'11/3', D:'11'},
        correct:'C',
        expCorrect:'For ax² + bx + c = 0 the two solutions add up to −b/a, so p + q = −(−11)/3 = 11/3. Solving the long way agrees: 3x² − 11x + 6 = (3x − 2)(x − 3), so the solutions are 2/3 and 3, and 2/3 + 3 = 11/3 ✓.',
        expWrong:{
          A:'−11/3 forgets that b is already −11, so −b/a is +11/3. The two solutions here are both positive, so a negative sum cannot be right.',
          B:'2 is the PRODUCT of the solutions, c/a = 6/3. The question asks for the sum.',
          D:'11 uses −b and skips the division by a. The leading coefficient is 3, and it belongs in both shortcuts.'
        },
        tip:'Sum of the solutions is −b/a and the product is c/a. They are worth memorizing: many hard questions ask for a combination of the solutions and never need the solutions themselves.',
        desmos:'Graph y=3x^2-11x+6 and read the two x-intercepts; their sum is the answer.',
        desmosLatex:['y=3x^2-11x+6','y=0']
      },

      {
        id:'AVD-19', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Nonlinear system: solving for x and then answering about y',
        stem:'The solutions to the system of equations y = x² + x − 6 and y = 4x − 6 are (x₁, y₁) and (x₂, y₂), where x₁ &lt; x₂. What is the value of y₂?',
        answer:'6',
        expCorrect:'Set the right sides equal: x² + x − 6 = 4x − 6, so x² − 3x = 0 and x(x − 3) = 0. That gives x = 0 and x = 3, so x₁ = 0 and x₂ = 3. The question asks for y₂, the y that goes with the LARGER x: y₂ = 4(3) − 6 = 6. Check in the curve: 9 + 3 − 6 = 6 ✓. (The other point is (0, −6).)',
        tip:'Solving a nonlinear system gives you x values; the question often wants a y, or a sum, or a difference. Underline what is being asked before you start, and finish by putting x back into the easier equation.',
        desmos:'Graph y=x^2+x-6 and y=4x-6 and click the right-hand intersection point to read its coordinates.',
        desmosLatex:['y=x^2+x-6','y=4x-6']
      },

      {
        id:'AVD-20', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Quadratic with a parameter: one solution plus a condition on the parameter',
        stem:'In the equation x² + (k − 3)x + 9 = 0, k is a constant and k &gt; 0. The equation has exactly one real solution. What is the value of k?',
        choices:{A:'−3', B:'3', C:'6', D:'9'},
        correct:'D',
        expCorrect:'One real solution means the discriminant is 0: (k − 3)² − 4(1)(9) = 0, so (k − 3)² = 36 and k − 3 = ±6. That gives k = 9 or k = −3, and the condition k &gt; 0 keeps only k = 9. Check: with k = 9 the equation is x² + 6x + 9 = (x + 3)², whose only solution is x = −3 ✓.',
        expWrong:{
          A:'−3 is the second value that makes the discriminant zero, and it is the one the condition k &gt; 0 was written to eliminate. Whenever a square root produces ±, expect one of the two to be excluded.',
          B:'3 comes from setting k − 3 = 0, which makes the middle term disappear, not the discriminant. With k = 3 the equation is x² + 9 = 0, which has no real solution.',
          C:'6 is √36 — the value of k − 3, not of k. One step short: add the 3 back.'
        },
        tip:'Taking a square root of both sides always gives two branches. Write both, then read the sentence again: a condition like k &gt; 0 or x is a length is there to kill exactly one of them.',
        desmos:'Graph y=x^2+(k-3)x+9 with a slider for k. Two values of k make the curve touch the axis; only one is positive.',
        desmosLatex:['y=x^2+(k-3)x+9','k=9']
      },

      {
        id:'AVD-21', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Nonlinear system with a circle: discarding the point that fails the condition',
        stem:'The system of equations x² + y² = 25 and y = x + 1 has two solutions. In the solution where y &gt; 0, what is the value of x?',
        choices:{A:'−4', B:'−3', C:'3', D:'4'},
        correct:'C',
        expCorrect:'Substitute y = x + 1 into the first equation: x² + (x + 1)² = 25, so 2x² + 2x + 1 = 25, then 2x² + 2x − 24 = 0 and x² + x − 12 = 0. Factoring gives (x + 4)(x − 3) = 0, so x = −4 or x = 3, with y = −3 and y = 4. The condition y &gt; 0 selects the point (3, 4), so x = 3. Check: 9 + 16 = 25 ✓ and 4 = 3 + 1 ✓.',
        expWrong:{
          A:'−4 is the x of the other point, (−4, −3). Its y is negative, which is what the condition rules out.',
          B:'−3 is the y of that discarded point, not an x at all — the right point was thrown away and the wrong coordinate reported.',
          D:'4 is the y of the correct point (3, 4). The point satisfies the condition; the question asks for its x.'
        },
        tip:'In a system with a condition, finish the work in three separate moves: find both points, apply the condition to drop one, then read off the coordinate that was actually requested.',
        desmos:'Graph x^2+y^2=25 and y=x+1. Click the crossing in the upper right to confirm (3,4).',
        desmosLatex:['x^2+y^2=25','y=x+1']
      },

      {
        id:'AVD-22', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Quadratic equation: the difference between the two solutions',
        stem:'The solutions to the equation 2x² − 9x + 4 = 0 are r and s, where r &gt; s. What is the value of r − s?',
        answer:'3.5',
        expCorrect:'The discriminant is (−9)² − 4(2)(4) = 81 − 32 = 49, so x = (9 ± 7)/4, which gives x = 4 and x = 0.5. With r = 4 and s = 0.5, r − s = 3.5. Check both: 2(16) − 36 + 4 = 0 ✓ and 2(0.25) − 4.5 + 4 = 0 ✓. (Grid in 3.5 or 7/2.)',
        tip:'The difference of the two solutions is √(b² − 4ac)/|a| — the ± part of the formula, doubled and divided by 2a. The sum is −b/a; do not mix the two up when the question asks for one of them.',
        desmos:'Graph y=2x^2-9x+4 and read the two x-intercepts, then subtract the smaller from the larger.',
        desmosLatex:['y=2x^2-9x+4','y=0']
      },

      /* ================== Nonlinear functions (AVD-23 a AVD-34) ================== */

      {
        id:'AVD-23', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Nonlinear functions: the minimum value of a parabola, not where it happens',
        stem:'The function h is defined by h(x) = x² − 10x + 31. What is the minimum value of h?',
        choices:{A:'−6', B:'5', C:'6', D:'31'},
        correct:'C',
        expCorrect:'The graph is a parabola opening upward, so the minimum sits at the axis of symmetry x = −b/(2a) = 10/2 = 5. The minimum VALUE is h(5) = 25 − 50 + 31 = 6. Rewriting confirms it: h(x) = (x − 5)² + 6, and (x − 5)² is never negative, so h is never below 6 ✓.',
        expWrong:{
          A:'−6 is a sign slip in the last step: 25 − 50 + 31 is +6. A quick sanity check also rules it out, since h(0) = 31 and h(5) cannot be far below the axis.',
          B:'5 is where the minimum occurs, not the minimum itself. The question asks for the output, not the input.',
          D:'31 is h(0), the value where the graph meets the y-axis. On this parabola the vertex is to the right of x = 0, so 31 is not the smallest value.'
        },
        tip:'Find the input with x = −b/(2a), then substitute it back to get the value. Most wrong answers on these are the input reported as if it were the output.',
        desmos:'Graph y=x^2-10x+31 and click the lowest point of the curve to read (5, 6).',
        desmosLatex:['y=x^2-10x+31']
      },

      {
        id:'AVD-24', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Parabola: the form of a function that displays the minimum as a constant',
        stem:'The function g is defined by g(x) = 2x² − 12x + 10. Which of the following both defines g and displays the minimum value of g as a constant or coefficient?',
        choices:{A:'2(x − 1)(x − 5)', B:'2x² − 12x + 10', C:'2(x − 6)² − 62', D:'2(x − 3)² − 8'},
        correct:'D',
        expCorrect:'Vertex form a(x − h)² + k puts the minimum value in plain sight as k. Rewrite: 2x² − 12x + 10 = 2(x² − 6x) + 10 = 2((x − 3)² − 9) + 10 = 2(x − 3)² − 8. Since 2(x − 3)² is never negative, the smallest value of g is −8, reached at x = 3. Check by expanding: 2(x − 3)² − 8 = 2x² − 12x + 18 − 8 = 2x² − 12x + 10 ✓.',
        expWrong:{
          A:'2(x − 1)(x − 5) really does define g, but the numbers it displays are the x-intercepts, 1 and 5. The minimum, −8, appears nowhere in it.',
          B:'2x² − 12x + 10 is g as given. What the constant 10 displays is the value at x = 0, not the smallest value.',
          C:'2(x − 6)² − 62 does not define g at all: it expands to 2x² − 24x + 10. Halving −12 before the 2 was factored out doubled the shift.'
        },
        tip:'Each form shows one thing: standard form shows the value at x = 0, factored form shows the x-intercepts, vertex form shows the maximum or minimum. Decide which feature the question wants, then pick the matching form — and confirm the form is still the same function.',
        desmos:'Graph all four expressions at once. Three land on the same curve; the odd one out is visibly shifted.',
        desmosLatex:['y=2x^2-12x+10','y=2(x-3)^2-8','y=2(x-1)(x-5)','y=2(x-6)^2-62']
      },

      {
        id:'AVD-25', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponential functions: what the base means when the period is not one unit',
        stem:'The function V models the value, in dollars, of a delivery van t years after it was bought, where V(t) = 24000(0.75)^(t/2). Which of the following is the best interpretation of 0.75 in this context?',
        choices:{A:'The value drops to 75% of its value every 2 years', B:'The value drops to 75% of its value every year', C:'The value drops by 75% every 2 years', D:'The value drops by 25% every year'},
        correct:'A',
        expCorrect:'The base is applied once each time the exponent t/2 increases by 1, and that happens every 2 years. Multiplying by 0.75 leaves 75% of the value, which is a drop of 25%. Check: V(0) = 24000 and V(2) = 24000(0.75) = 18000, which is 75% of 24000 ✓.',
        expWrong:{
          B:'Every year would be right only if the exponent were t. With t/2 in the exponent, one full application of the base takes 2 years.',
          C:'Dropping BY 75% would leave 25% of the value. Multiplying by 0.75 keeps 75% and removes 25%.',
          D:'25% is the correct percentage lost, but not per year: it is per 2-year period. The yearly drop would come from 0.75^(1/2), about 13.4%.'
        },
        tip:'In a(b)^(t/n), the base b acts once every n time units. Read two things separately: how much the base changes the amount, and how long one period lasts.',
        desmos:'Graph y=24000(0.75)^(x/2) and use a table of x=0,1,2,4 to see the value only reach 75% at x=2.',
        desmosLatex:['y=24000(0.75)^{x/2}','y=18000']
      },

      {
        id:'AVD-26', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Exponential functions: rewriting a model in a different time unit',
        stem:'The function B models the number of bees in a hive, where B(t) = 400(3)^(t/12) and t is the number of months since the hive was counted. Which function gives the number of bees y years after the count?',
        choices:{A:'400(3)^(y/12)', B:'400(36)^y', C:'4800(3)^y', D:'400(3)^y'},
        correct:'D',
        expCorrect:'One year is 12 months, so t = 12y. Substituting: B = 400(3)^(12y/12) = 400(3)^y. In words, the hive triples every 12 months, and 12 months is exactly one year, so in years the base 3 is applied once per year. Check at y = 1: 400(3)^(12/12) = 1200, and 400(3)^1 = 1200 ✓.',
        expWrong:{
          A:'400(3)^(y/12) leaves the model exactly as it was and just renames the variable. It would predict 400(3)^(1/12) ≈ 439 bees after a full year instead of 1200.',
          B:'400(36)^y multiplies the base by 12. Changing the time unit changes the EXPONENT, never the base by multiplication.',
          C:'4800(3)^y multiplies the starting amount by 12 instead. At y = 0 it predicts 4800 bees, but the hive started with 400.'
        },
        tip:'To change the time unit, substitute for the old variable (t = 12y) and simplify the exponent. The starting amount out front never changes, because at time zero both models describe the same moment.',
        desmos:'Graph y=400*3^(12x/12) and y=400*3^x on the same screen; they are one curve.',
        desmosLatex:['y=400\\cdot3^{12x/12}','y=400\\cdot3^{x}']
      },

      {
        id:'AVD-27', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Composition of functions with a condition on the input',
        stem:'The functions f and g are defined by f(x) = x² − 3 and g(x) = 2x + 1. If f(g(a)) = 46 and a &gt; 0, what is the value of a?',
        answer:'3',
        expCorrect:'Work from the inside out: g(a) = 2a + 1, so f(g(a)) = (2a + 1)² − 3 = 46. Then (2a + 1)² = 49, so 2a + 1 = 7 or 2a + 1 = −7, giving a = 3 or a = −4. The condition a &gt; 0 keeps a = 3. Check: g(3) = 7 and f(7) = 49 − 3 = 46 ✓.',
        tip:'In f(g(a)) the inner function runs first. And when a squared quantity is undone, write both branches before applying any condition — the condition is there precisely because there are two.',
        desmos:'Graph y=(2x+1)^2-3 and y=46. The two crossings are at x=3 and x=-4.',
        desmosLatex:['y=(2x+1)^2-3','y=46']
      },

      {
        id:'AVD-28', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Transformations: a horizontal shift and a vertical shift at once',
        stem:'In the xy-plane, the graph of y = f(x) is translated 3 units to the left and 5 units down to produce the graph of y = g(x). Which equation defines g?',
        choices:{A:'g(x) = f(x − 3) − 5', B:'g(x) = f(x + 3) − 5', C:'g(x) = f(x + 3) + 5', D:'g(x) = f(x − 3) + 5'},
        correct:'B',
        expCorrect:'A vertical shift acts outside the function and matches its sign: down 5 means −5 at the end. A horizontal shift acts inside and is backwards: left 3 means replacing x by x + 3. So g(x) = f(x + 3) − 5. Check with a point: if f has a peak at x = 4, then g(1) = f(4) − 5, and the peak has indeed moved 3 to the left and 5 down ✓.',
        expWrong:{
          A:'f(x − 3) − 5 moves the graph 3 units to the RIGHT. Inside the parentheses the sign is reversed: x − 3 shifts right, x + 3 shifts left.',
          C:'f(x + 3) + 5 has the horizontal shift right but moves the graph up. Outside the function, +5 raises the graph.',
          D:'f(x − 3) + 5 gets both directions backwards: right and up instead of left and down.'
        },
        tip:'Inside the parentheses, the graph does the opposite of the sign; outside, it does exactly what the sign says. Test one point if you are unsure — it takes five seconds and settles it.',
        desmos:'Graph y=x^2, then y=(x+3)^2-5. The vertex moves from (0,0) to (-3,-5).',
        desmosLatex:['y=x^2','y=(x+3)^2-5']
      },

      {
        id:'AVD-29', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Transformations from a table: a shift inside and a stretch with a flip outside',
        figure: TBL_F,
        stem:'The table shows four values of the function f. The function g is defined by g(x) = −2f(x − 4) + 1. What is the value of g(6)?',
        choices:{A:'−13', B:'−9', C:'1', D:'13'},
        correct:'A',
        expCorrect:'Substitute x = 6 into the rule: g(6) = −2f(6 − 4) + 1 = −2f(2) + 1. The table gives f(2) = 7, so g(6) = −2(7) + 1 = −14 + 1 = −13 ✓.',
        expWrong:{
          B:'−9 uses f(6) = 5 and skips the shift: −2(5) + 1 = −9. The rule asks for f at 6 − 4, not at 6.',
          C:'1 uses f(10) = 0, which is what you get by adding the 4 instead of subtracting it inside the function.',
          D:'13 comes from 2f(2) − 1: the minus sign was attached to the 1 instead of to the 2. The −2 multiplies the output of f.'
        },
        tip:'With a rule like g(x) = a·f(x − h) + k, do it in one order every time: compute the inner input x − h first, look that up, then multiply and add. The shift belongs to the input, the stretch and the shift up belong to the output.',
        desmos:'Plot the four points of f. Then plot each one moved to (x+4, -2y+1): those are the points of g, and one of them sits at x=6.',
        desmosLatex:['(2,7)','(4,-1)','(6,5)','(10,0)','(6,-13)']
      },

      {
        id:'AVD-30', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Nonlinear functions: the maximum value of a downward parabola',
        stem:'The function p is defined by p(x) = −2x² + 16x + 3. The graph of y = p(x) in the xy-plane has a highest point. What is the maximum value of p?',
        choices:{A:'3', B:'4', C:'35', D:'131'},
        correct:'C',
        expCorrect:'The axis of symmetry is at x = −b/(2a) = −16/(2(−2)) = 4. The maximum value is p(4) = −2(16) + 64 + 3 = −32 + 64 + 3 = 35. Check a neighbor: p(3) = −18 + 48 + 3 = 33 and p(5) = −50 + 80 + 3 = 33, both below 35 ✓.',
        expWrong:{
          A:'3 is p(0), the value at the y-axis. It is also what you get from x = 8, the input you land on by forgetting the 2 in −b/(2a) — which is exactly the mirror image of x = 0.',
          B:'4 is where the maximum happens, not the maximum itself. The question asks for the value of p.',
          D:'131 comes from squaring the whole −2x: (−2·4)² + 16(4) + 3 = 64 + 64 + 3. Only the x is squared; the −2 multiplies afterwards.'
        },
        tip:'In −b/(2a), a carries its own sign. Then substitute and evaluate the squared term before multiplying by a — the leading coefficient is never inside the square.',
        desmos:'Graph y=-2x^2+16x+3 and click the peak to read (4, 35).',
        desmosLatex:['y=-2x^2+16x+3']
      },

      {
        id:'AVD-31', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponential functions: the constant factor between consecutive outputs',
        stem:'The function f is defined by f(x) = 3(4)^x. If f(x + 1) = k·f(x) for every value of x, what is the value of k?',
        choices:{A:'3', B:'4', C:'7', D:'12'},
        correct:'B',
        expCorrect:'Write out f(x + 1) = 3(4)^(x + 1) = 3(4)^x · 4 = 4·f(x), so k = 4. Check with numbers: f(0) = 3, f(1) = 12, f(2) = 48 — each output is 4 times the one before ✓.',
        expWrong:{
          A:'3 is the initial amount f(0), the factor out front. It scales the whole function once; it is not what multiplies from one step to the next.',
          C:'7 comes from adding 3 and 4. In a(b)^x the two constants play different roles and are never combined.',
          D:'12 is f(1), the output after one step from f(0) = 3, not the ratio between steps. The ratio is 12/3 = 4.'
        },
        tip:'In a(b)^x the base b is the factor between consecutive outputs, and a is only the value at x = 0. Increasing the exponent by 1 always multiplies by b once.',
        desmos:'Graph y=3*4^x and build a table at x=0,1,2,3. Divide each output by the previous one.',
        desmosLatex:['y=3\\cdot4^{x}']
      },

      {
        id:'AVD-32', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Parabola: using the symmetry of a graph to find another value',
        stem:'The function g is defined by g(x) = a(x − 3)² + 11, where a is a constant. The graph of y = g(x) in the xy-plane passes through the point (1, 3). What is the value of g(5)?',
        answer:'3',
        expCorrect:'Use the point to find a: 3 = a(1 − 3)² + 11, so 3 = 4a + 11, then 4a = −8 and a = −2. Now g(5) = −2(5 − 3)² + 11 = −2(4) + 11 = 3. There is also a one-line route: the graph is symmetric about x = 3, and 1 and 5 are both 2 units away from 3, so they must have the same output, 3 ✓.',
        tip:'In the form a(x − h)² + k the graph is a mirror about x = h. Two inputs the same distance from h always give the same output — sometimes that answers the question with no algebra at all.',
        desmos:'Graph y=-2(x-3)^2+11 and check that (1,3) and (5,3) are both on the curve.',
        desmosLatex:['y=-2(x-3)^2+11','y=3']
      },

      {
        id:'AVD-33', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Exponential decay: the percent lost over one full period',
        stem:'The function B models the value, in dollars, of a boat t years after it was bought, where B(t) = 18500(0.88)^(t/3). By what percent does the value of the boat decrease every 3 years?',
        choices:{A:'4%', B:'12%', C:'36%', D:'88%'},
        correct:'B',
        expCorrect:'Every time t grows by 3, the exponent t/3 grows by 1 and the value is multiplied by 0.88. Keeping 88% means losing 12%. Check: B(0) = 18500 and B(3) = 18500(0.88) = 16280, and 18500 − 16280 = 2220, which is 12% of 18500 ✓.',
        expWrong:{
          A:'4% is 12 divided by 3, as if the loss spread evenly across the three years. Percent change compounds, so a 12% drop over 3 years is about 4.2% per year, not exactly 4%, and in any case the question asks for the 3-year drop.',
          C:'36% is 12 times 3, as if the loss were added up over three years. Multiplying percentages by the number of years overshoots, because each year applies to a smaller amount.',
          D:'88% is the fraction of the value that REMAINS. The decrease is what is missing from 100%.'
        },
        tip:'For a(b)^(t/n) with b below 1, the decrease per period is (1 − b) as a percent, and the period is n. Never divide or multiply that percent by n to change the period; change the exponent instead.',
        desmos:'Graph y=18500(0.88)^(x/3) and build a table at x=0,3,6. Each value is 0.88 times the previous one.',
        desmosLatex:['y=18500(0.88)^{x/3}','y=16280']
      },

      {
        id:'AVD-34', type:'mc', domain:'Advanced Math', difficulty:'Difícil', extreme:true,
        skill:'Transformations: a flip and two shifts turn a maximum into a minimum',
        stem:'In the xy-plane, the graph of y = f(x) has a highest point at (−1, 6). What are the coordinates of the lowest point of the graph of y = 4 − f(x + 2)?',
        choices:{A:'(−3, −2)', B:'(−3, 2)', C:'(−3, 10)', D:'(1, −2)'},
        correct:'A',
        expCorrect:'Take the two changes one at a time. Inside, f(x + 2) shifts the graph 2 units LEFT, so the special point moves from x = −1 to x = −3, still at height 6. Outside, 4 − f(...) multiplies the output by −1 and then adds 4, and the minus flips the highest point into the lowest one: its height becomes 4 − 6 = −2. So the lowest point is (−3, −2). Check with a concrete f, say f(x) = 6 − (x + 1)²: then 4 − f(x + 2) = (x + 3)² − 2, whose vertex is (−3, −2) ✓.',
        expWrong:{
          B:'(−3, 2) computes 6 − 4 instead of 4 − 6. The 4 comes first: the output is 4 minus the old output.',
          C:'(−3, 10) adds 4 to 6 and ignores the minus sign in front of f. Without that minus there would be no lowest point at all, since the graph would still open the same way.',
          D:'(1, −2) shifts the graph 2 units to the right. Inside the function, x + 2 moves the graph left.'
        },
        tip:'Untangle transformations one at a time, inputs before outputs: x + c moves left, −f(x) turns maxima into minima, and a constant added outside moves the whole thing up. Substituting a concrete f is a fast way to check a chain of them.',
        desmos:'Graph y=6-(x+1)^2 and y=4-(6-((x+2)+1)^2) together: the peak at (-1,6) becomes a valley at (-3,-2).',
        desmosLatex:['y=6-(x+1)^2','y=4-(6-((x+2)+1)^2)']
      }

    ]
  });
})();
