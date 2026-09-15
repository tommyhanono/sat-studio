/* SAT Studio question set — Math: Solid Geometry & Trigonometry — Hard (HMG-01 a HMG-12) */
(function(){
  var FIG_CONE =
    '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right circular cone with height 8 and base radius 6">' +
    '<ellipse cx="110" cy="155" rx="70" ry="20" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="110" y1="25" x2="40" y2="155" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="110" y1="25" x2="180" y2="155" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<line x1="110" y1="25" x2="110" y2="155" stroke="#324DC7" stroke-width="1.5" stroke-dasharray="4 3"/>' +
    '<line x1="110" y1="155" x2="180" y2="155" stroke="#324DC7" stroke-width="1.5"/>' +
    '<text x="116" y="98" font-size="16" font-family="Georgia,serif" fill="#324DC7">8</text>' +
    '<text x="140" y="148" font-size="16" font-family="Georgia,serif" fill="#324DC7">6</text>' +
    '<text x="12" y="192" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  var FIG_TRI =
    '<svg viewBox="0 0 240 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right triangle with legs 9 and 12 and hypotenuse 15, with angle theta at the lower-right vertex">' +
    '<polygon points="30,140 210,140 30,30" fill="none" stroke="#1e1e1e" stroke-width="2.5"/>' +
    '<rect x="30" y="126" width="14" height="14" fill="none" stroke="#1e1e1e" stroke-width="2"/>' +
    '<text x="120" y="158" font-size="16" font-family="Georgia,serif" text-anchor="middle">12</text>' +
    '<text x="8" y="90" font-size="16" font-family="Georgia,serif">9</text>' +
    '<text x="118" y="80" font-size="16" font-family="Georgia,serif" font-style="italic">15</text>' +
    '<text x="184" y="134" font-size="15" font-family="Georgia,serif">θ</text>' +
    '<text x="12" y="170" font-size="11" fill="#757575" font-family="Arial,sans-serif">Note: Figure not drawn to scale.</text>' +
    '</svg>';

  window.SAT_SETS.push({
    id: 'math-hard-geo',
    title: 'Solid Geometry & Trigonometry — Hard',
    section: 'math',
    level: 'Difícil',
    description: 'Hard solid geometry (volume/surface area, composite & scaled solids) plus triangle similarity and right-triangle trig.',
    minutes: 20,
    questions: [
      {
        id:'HMG-01', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volume and surface area (sphere)',
        stem:'A sphere has a volume of 288π cubic centimeters. What is the surface area of the sphere, in square centimeters?',
        choices:{A:'36π', B:'144π', C:'72π', D:'216π'},
        correct:'B',
        expCorrect:'Volume = (4/3)πr³ = 288π → r³ = 288·(3/4) = 216 → r = 6. Surface area = 4πr² = 4π(6²) = 4π(36) = 144π.',
        expWrong:{
          A:'36π is πr² = π(36): only the area of ONE great circle, forgetting the sphere’s factor of 4.',
          C:'72π is 2πr². The surface area of a sphere is 4πr², not 2πr².',
          D:'216π uses r³ = 216 straight as the answer; that number is an intermediate step for finding r, not the area.'
        },
        tip:'With spheres, always get the radius from the volume first: from (4/3)πr³ solve for r³ and then r. With r in hand, apply 4πr². Both formulas are on the Reference Sheet.'
      },
      {
        id:'HMG-02', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Effect of scaling one dimension (squared)',
        stem:'The radius of a right circular cylinder is multiplied by 3, while its height stays the same. The volume of the new cylinder is how many times the volume of the original cylinder?',
        choices:{A:'3', B:'6', C:'9', D:'27'},
        correct:'C',
        expCorrect:'Volume = πr²h. The radius appears SQUARED, so multiplying r by 3 multiplies the volume by 3² = 9. (The height does not change, so it contributes no factor.)',
        expWrong:{
          A:'3 is the factor by which the radius grows, but the volume depends on r², not on r.',
          B:'6 is 2×3; there is no reason to double it. The radius is squared, not multiplied by 2.',
          D:'27 = 3³ would be the factor if you scaled all THREE dimensions (as in a cube). Here the height does NOT change, only the radius.'
        },
        tip:'Scaling rule: if you multiply one dimension by k, every squared r contributes k² and every cubed dimension contributes k³. Notice how many dimensions change: here only the radius, and it is squared → 3² = 9.'
      },
      {
        id:'HMG-03', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volume of solids (cone)',
        figure: FIG_CONE,
        stem:'The right circular cone shown has a base radius of 6 and a height of 8. What is the volume of the cone?',
        choices:{A:'96π', B:'288π', C:'144π', D:'128π'},
        correct:'A',
        expCorrect:'Cone volume = (1/3)πr²h = (1/3)π(6²)(8) = (1/3)π(36)(8) = (1/3)(288π) = 96π.',
        expWrong:{
          B:'288π is πr²h, the CYLINDER formula. The cone is a third of that: you forgot to multiply by 1/3.',
          C:'144π uses (1/2)πr²h. The cone factor is 1/3, not 1/2.',
          D:'128π = (1/3)π(8²)(6): you swapped radius and height. The one that gets squared is the radius (6), not the height.'
        },
        tip:'A cone is 1/3 of the cylinder with the same base and height. The two classic errors: forgetting the 1/3 and squaring the height instead of the radius. Write r² first (6² = 36) and do not mix it up with h.'
      },
      {
        id:'HMG-04', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Composite solids (volume)',
        stem:'A solid is formed by placing a hemisphere of radius 3 on top of a right circular cylinder that also has radius 3 and a height of 10. What is the total volume of the solid?',
        choices:{A:'90π', B:'126π', C:'99π', D:'108π'},
        correct:'D',
        expCorrect:'Cilindro = πr²h = π(3²)(10) = 90π. Hemisferio = (1/2)(4/3)πr³ = (2/3)π(3³) = (2/3)π(27) = 18π. Total = 90π + 18π = 108π.',
        expWrong:{
          A:'90π is only the cylinder; you forgot to add the hemisphere on top.',
          B:'126π adds a WHOLE sphere ((4/3)π·27 = 36π): 90 + 36 = 126. There is only half a sphere on top, so it is 18π.',
          C:'99π uses 9π for the dome, as if it were (1/3)πr³ (the cone formula). A hemisphere is (2/3)πr³ = 18π.'
        },
        tip:'In composite solids, compute each piece separately and add. Careful with the hemisphere: it is HALF a sphere, (1/2)(4/3)πr³ = (2/3)πr³, not a whole sphere and not a cone.'
      },
      {
        id:'HMG-05', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Surface area (closed cylinder)',
        stem:'A closed right circular cylinder has a radius of 4 and a height of 10. What is the total surface area of the cylinder?',
        choices:{A:'80π', B:'112π', C:'96π', D:'224π'},
        correct:'B',
        expCorrect:'Superficie total = 2 tapas + lateral = 2πr² + 2πrh = 2π(4²) + 2π(4)(10) = 32π + 80π = 112π.',
        expWrong:{
          A:'80π is only the lateral area (2πrh). A CLOSED cylinder also has two circular caps.',
          C:'96π adds the lateral (80π) and only ONE cap (16π). The second cap is missing: there are two, 2πr² = 32π.',
          D:'224π doubles the whole result; you counted the surfaces twice. The correct total is 112π.'
        },
        tip:'Total surface of a closed cylinder = 2πr² (the TWO caps) + 2πrh (the lateral roll). Always ask whether the solid has caps or is open before you add.'
      },
      {
        id:'HMG-06', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Similar triangles (ratio of areas)',
        stem:'Triangle ABC is similar to triangle DEF, and the ratio of corresponding sides ABC : DEF is 2 : 5. If the area of triangle ABC is 12, what is the area of triangle DEF?',
        choices:{A:'30', B:'24', C:'75', D:'48'},
        correct:'C',
        expCorrect:'In similar figures, the ratio of AREAS is the square of the ratio of sides: (2/5)² = 4/25. So area(ABC)/area(DEF) = 4/25 → 12/area(DEF) = 4/25 → area(DEF) = 12·(25/4) = 75.',
        expWrong:{
          A:'30 = 12·(5/2) uses the LINEAR ratio. For areas you have to square the ratio.',
          B:'24 = 12·2 only multiplies by the number 2 in the ratio; it ignores that the proportion is squared.',
          D:'48 = 12·4 squares it correctly but in the wrong direction (multiplying by 4 instead of by 25/4). DEF is the bigger one, so its area is 75.'
        },
        tip:'Similarity: the ratio of areas is (ratio of sides)² and the ratio of volumes is (ratio of sides)³. Check the direction: the triangle with the bigger sides (DEF, scale 5) has to have the bigger area.'
      },
      {
        id:'HMG-07', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Special 30-60-90 triangle',
        stem:'In a 30-60-90 right triangle, the side opposite the 30° angle has length 5√3. What is the length of the side opposite the 60° angle?',
        answer:'15',
        expCorrect:'In a 30-60-90 the sides are x (opposite 30°), x√3 (opposite 60°) and 2x (hypotenuse). The side opposite 30° is the short one: x = 5√3. The one opposite 60° is x√3 = (5√3)(√3) = 5·3 = 15. Answer: 15.',
        expWrong:{},
        tip:'In a 30-60-90 the side opposite the 30° is the shortest (x) and the one opposite the 60° is x√3. Multiplying by √3 clears the radical: √3·√3 = 3. Locate which side is the short one before you scale.'
      },
      {
        id:'HMG-08', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Special 45-45-90 triangle (diagonal of a square)',
        stem:'A square has a diagonal of length 10. What is the area of the square?',
        choices:{A:'50', B:'100', C:'25', D:'200'},
        correct:'A',
        expCorrect:'The diagonal of a square forms a 45-45-90 triangle, so diagonal = side·√2 → 10 = s√2 → s = 10/√2 = 5√2. Area = s² = (5√2)² = 25·2 = 50. (Shortcut: area = diagonal²/2 = 100/2 = 50.)',
        expWrong:{
          B:'100 = 10² uses the diagonal as if it were the side. The diagonal is longer than the side (by a factor of √2).',
          C:'25 = (10/2)² halves the diagonal and squares it; that is not the side of the square.',
          D:'200 = 10²·2 multiplies by 2 instead of dividing. The formula with the diagonal is d²/2.'
        },
        tip:'Handy trick: for a square, area = diagonal²/2. It follows from diagonal = s√2, so s² = d²/2. Spotting the 45-45-90 inside the square saves you the algebra.'
      },
      {
        id:'HMG-09', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Right-triangle trigonometry (SOHCAHTOA)',
        figure: FIG_TRI,
        stem:'In the right triangle shown, the leg opposite angle θ has length 9, the leg adjacent to angle θ has length 12, and the hypotenuse has length 15. What is the value of cos θ?',
        choices:{A:'3/5', B:'3/4', C:'5/4', D:'4/5'},
        correct:'D',
        expCorrect:'cos θ = adjacent / hypotenuse. The leg adjacent to θ is 12 and the hypotenuse is 15, so cos θ = 12/15 = 4/5.',
        expWrong:{
          A:'3/5 is sin θ = opposite/hypotenuse = 9/15. They want the cosine, which uses the ADJACENT leg.',
          B:'3/4 es tan θ = opuesto/adyacente = 9/12. No es el coseno.',
          C:'5/4 is the reciprocal of 4/5 (that would be sec θ). A cosine in a triangle never goes above 1.'
        },
        tip:'SOHCAHTOA: Cosine = Adjacent / Hypotenuse. First work out which side is opposite and which is adjacent relative to θ. The 9-12-15 triple is a 3-4-5 times 3.'
      },
      {
        id:'HMG-10', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Trigonometry of complementary angles',
        stem:'In a right triangle, the two acute angles are A and B. If sin A = 0.6, what is the value of cos B?',
        choices:{A:'0.4', B:'0.6', C:'0.8', D:'0.36'},
        correct:'B',
        expCorrect:'A and B are complementary (they add to 90°). For complementary angles, the sine of one equals the cosine of the other: cos B = sin(90° − B) = sin A = 0.6.',
        expWrong:{
          A:'0.4 = 1 − 0.6 treats sine and cosine as if they added to 1. What adds to 1 is sin²+cos², not sin+cos.',
          C:'0.8 is cos A (from sin²A + cos²A = 1). But they want cos B, and B is the complement of A.',
          D:'0.36 = 0.6² squares the sine for no reason. The complementary relationship is direct, not quadratic.'
        },
        tip:'Key SAT identity: sin(x) = cos(90° − x). If two angles are complementary (like the two acute angles of a right triangle), the sine of one IS the cosine of the other. No computing: cos B = sin A.'
      },
      {
        id:'HMG-11', type:'mc', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Effect of scaling one dimension (surface area)',
        stem:'If every edge of a cube is doubled in length, the surface area of the new cube is how many times the surface area of the original cube?',
        choices:{A:'4', B:'2', C:'6', D:'8'},
        correct:'A',
        expCorrect:'Surface area depends on the square of the length (SA of a cube = 6s²). Multiplying each edge by 2 multiplies the area by 2² = 4.',
        expWrong:{
          B:'2 is the factor by which the edges grow, but the area grows with the square of that factor.',
          C:'6 is the number of faces of a cube, which is not the area growth factor.',
          D:'8 = 2³ is the factor by which the VOLUME grows, not the area. Area uses the square, 2² = 4.'
        },
        tip:'Scaling by a factor k: lengths ×k, areas ×k², volumes ×k³. Doubling (k = 2) makes the area ×4 and the volume ×8. Ask yourself whether they want area (squared) or volume (cubed).'
      },
      {
        id:'HMG-12', type:'spr', domain:'Geometry & Trigonometry', difficulty:'Difícil',
        skill:'Volume of solids (cone vs. cylinder)',
        stem:'A cone and a cylinder have the same base radius and the same height. The volume of the cylinder is 60 cubic inches. What is the volume of the cone, in cubic inches?',
        answer:'20',
        expCorrect:'With the same base and height, a cone is exactly 1/3 of the cylinder: cone volume = (1/3)(cylinder volume) = (1/3)(60) = 20. (Formally: cylinder = πr²h = 60, cone = (1/3)πr²h = (1/3)(60) = 20.) Answer: 20.',
        expWrong:{},
        tip:'When they share a radius and a height, the cone always fits 3 times inside the cylinder: cone = (1/3) × cylinder. You do not need r and h separately; just divide the cylinder volume by 3.'
      }
    ]
  });
})();
