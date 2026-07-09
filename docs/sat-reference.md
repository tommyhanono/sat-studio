# Digital SAT Reference — for building "SAT Studio"

**Scope:** The current **Digital SAT** (2024+), administered in the U.S. via the **Bluebook** app since **March 2024**. Section-adaptive (multistage adaptive). All numbers below are verified against **College Board's official _Assessment Framework for the Digital SAT Suite_ (v3.01, Aug 2024)** and the official satsuite.collegeboard.org pages. Sources are listed at the end.

> **Accuracy note for authors:** Where College Board states a range (e.g., "≈35% / 13–15 questions"), that range is intentional — the operational counts vary slightly per form. Treat the percentages as the source of truth and the counts as target ranges.

---

## 1. TEST STRUCTURE

The SAT has **two sections**, each split into **two separately-timed modules** (College Board calls each module a "stage"). Routing is **section-adaptive**, not question-adaptive: your performance on **Module 1** determines whether **Module 2** is the easier or the harder version.

| | Reading & Writing (RW) | Math | Whole test |
|---|---|---|---|
| Modules | 2 | 2 | 4 total |
| Questions per module | **27** | **22** | — |
| → operational (scored) per module | **25** | **20** | — |
| → pretest (unscored) per module | **2** | **2** | — |
| Total questions per section | **54** (50 operational + 4 pretest) | **44** (40 operational + 4 pretest) | **98** |
| Minutes per module | **32** | **35** | — |
| Minutes per section | **64** | **70** | — |
| Avg time per question | 1.19 min | 1.59 min | — |

- **Total testing time: 2 hours 14 minutes** (134 min) — this is 64 + 70, **not** counting the break.
- **Break: 10 minutes**, between the RW section and the Math section. (RW always comes first; you cannot return to RW after moving to Math.)
- **Pretest questions** look identical to operational ones and are scattered in; students can't tell which is which. The two second-stage pretest questions are the **same** whether you got routed to the easy or hard Module 2 (so they get evaluated across the full ability range).
- **Navigation:** free movement *within* a module (preview / flag / mark-for-review), but once Module 1 time expires (or you submit), Bluebook advances you and you **cannot go back** to Module 1.

**How section-adaptive routing works (MST — multistage adaptive testing):**
- **Module 1 = the "routing module":** a broad mix of easy, medium, and hard questions across all domains.
- Based on Module-1 performance, **Module 2** is drawn from either a **lower-difficulty** or a **higher-difficulty** pool (still a mix, but with a higher or lower *average* difficulty).
- College Board's terminology (useful for the app's data model):
  - **Stage** — one of the two timed portions of a section.
  - **Module** — the question set for a stage, characterized by average difficulty.
  - **Form** — one student's experience = routing module + one targeted second module.
  - **Panel** — a set of **three** modules: one routing module + its **pair** of second-stage modules (one easier, one harder).

---

## 2. READING & WRITING — CONTENT

- **100% four-option multiple choice, single best answer.** No student-produced responses in RW.
- **Discrete questions:** every question is self-contained with its **own** short passage (25–150 words) or pair of passages. There are **no** shared long reading passages anymore.
- Passages span **literature, history/social studies, humanities, science.** No prior topic knowledge needed — everything required is in the passage. Some questions include an **informational graphic** (table, bar graph, line graph).
- **Question ordering within a module (verified — Framework Table 9):** each module presents the four domains in this **fixed sequence**, and SAT Studio's mock modules should follow it exactly:
  **1) Craft and Structure → 2) Information and Ideas → 3) Standard English Conventions → 4) Expression of Ideas.**
  Within each domain, questions run easiest→hardest and are grouped by skill — **except** Standard English Conventions, which is ordered easiest→hardest irrespective of skill. Pretest questions are slotted alongside operational questions testing the same skill. So Expression of Ideas (Rhetorical Synthesis / Transitions) always closes out the module.

### Domain weightings (of the 50 operational RW questions)

| Domain | Approx. weight | Operational questions |
|---|---|---|
| **Craft and Structure** | **≈28%** | 13–15 |
| **Information and Ideas** | **≈26%** | 12–14 |
| **Standard English Conventions** | **≈26%** | 11–15 |
| **Expression of Ideas** | **≈20%** | 8–12 |

### Craft and Structure (≈28%) — 3 skills

| Skill | 1-line description | Typical question stem |
|---|---|---|
| **Words in Context** | Determine the meaning of a high-utility academic ("tier-two") word/phrase in context, or fill a blank with the most precise word. | "As used in the text, what does the word '____' most nearly mean?" / "Which choice completes the text with the most logical and precise word or phrase?" |
| **Text Structure and Purpose** | Analyze how a text is organized or identify the **main rhetorical purpose** of a text (or of an underlined portion). | "Which choice best describes the overall structure of the text?" / "Which choice best states the main purpose of the text?" |
| **Cross-Text Connections** | Given **two** short topically-related texts, reason about how one author would respond to / relate to the other. | "Based on the texts, how would the author of Text 2 most likely respond to the [claim/view] in Text 1?" |

### Information and Ideas (≈26%) — 3 skills

| Skill | 1-line description | Typical question stem |
|---|---|---|
| **Central Ideas and Details** | Identify the main idea of a text or interpret a key supporting detail. | "Which choice best states the main idea of the text?" / "According to the text, ...?" |
| **Command of Evidence — Textual** | Choose the fact/detail/quotation that best supports, illustrates, or weakens a given claim. | "Which quotation from [work] most effectively illustrates the claim?" / "Which finding, if true, would most directly support the researcher's hypothesis?" |
| **Command of Evidence — Quantitative** | Read a table/graph and pick the data that best supports or completes a claim. | "Which choice most effectively uses data from the [table/graph] to support the claim?" / "Which choice best describes data that would ... ?" |
| **Inferences** | Draw a logical inference from stated + implied information; usually a fill-in-the-blank conclusion. | "Which choice most logically completes the text?" / "Based on the text, which statement is the most reasonable inference?" |

*(Command of Evidence is one skill with two flavors — textual and quantitative — as College Board lists it.)*

### Standard English Conventions (≈26%) — 2 skills

| Skill | 1-line description | Typical question stem |
|---|---|---|
| **Boundaries** | Punctuation between/within sentences: commas, semicolons, colons, dashes, end punctuation, joining/separating clauses. | "Which choice completes the text so that it conforms to the conventions of Standard English?" (answer options differ only in punctuation) |
| **Form, Structure, and Sense** | Grammar/usage: subject-verb & pronoun agreement, verb tense/aspect/mood/form, modifier placement, plurals/possessives. | "Which choice completes the text so that it conforms to the conventions of Standard English?" (answer options differ in verb form, pronoun, etc.) |

*Both SEC skills share the same stem; the app can distinguish them by what varies across the four choices.*

### Expression of Ideas (≈20%) — 2 skills

| Skill | 1-line description | Typical question stem |
|---|---|---|
| **Rhetorical Synthesis** | Given a bulleted list of notes/facts, combine them into one sentence that best accomplishes a **stated goal**. | "The student wants to [emphasize a contrast / present the finding / introduce the topic to an audience unfamiliar with it]. Which choice most effectively uses relevant information from the notes to accomplish this goal?" |
| **Transitions** | Pick the transition word/phrase that logically connects ideas. | "Which choice completes the text with the most logical transition?" (e.g., However, Therefore, For example, In contrast) |

---

## 3. MATH — CONTENT

- **Question formats:** **≈75% multiple choice** (28–32 of 40 operational; four options, one correct) and **≈25% student-produced response ("SPR" / grid-in)** (8–12 of 40 operational). SPR questions may have **more than one** correct answer, but the student enters only one.
- **≈30% of Math questions are set in context** (science, social studies, real-world); a majority of in-context questions are ≤50 words.
- **Calculator: allowed on ALL math questions.** A **built-in Desmos graphing calculator** is embedded in Bluebook, and students may also bring an approved handheld. (The old no-calculator section no longer exists.)
- A **reference sheet of formulas is available on every math question** (see §4).

### Domain weightings (of the 40 operational Math questions)

| Domain | Approx. weight | Operational questions |
|---|---|---|
| **Algebra** | **≈35%** | 13–15 |
| **Advanced Math** | **≈35%** | 13–15 |
| **Problem-Solving and Data Analysis** | **≈15%** | 5–7 |
| **Geometry and Trigonometry** | **≈15%** | 5–7 |

### Skills per domain (College Board "skill/knowledge testing points")

**Algebra (≈35%)**
- Linear equations in one variable
- Linear equations in two variables
- Linear functions
- Systems of two linear equations in two variables
- Linear inequalities in one or two variables

**Advanced Math (≈35%)**
- Equivalent expressions
- Nonlinear equations in one variable and systems of equations in two variables
- Nonlinear functions

**Problem-Solving and Data Analysis (≈15%)**
- Ratios, rates, proportional relationships, and units
- Percentages
- One-variable data: distributions and measures of center and spread
- Two-variable data: models and scatterplots
- Probability and conditional probability
- Inference from sample statistics and margin of error
- Evaluating statistical claims: observational studies and experiments

**Geometry and Trigonometry (≈15%)**
- Area and volume
- Lines, angles, and triangles
- Right triangles and trigonometry
- Circles

### The two answer formats

1. **Multiple choice (MCQ):** four options A–D, exactly one correct.
2. **Student-produced response (SPR / grid-in):** type your own answer into a single entry field. Bluebook shows a live **preview** of what you typed so you can confirm it.

### Exact SPR entry rules (verified — enforce these in the app's SPR validator)

- **Allowed characters:** digits `0–9`, a **decimal point** `.`, a **fraction bar** `/`, and a **negative sign** `−` (only as the **first** character).
- **Not allowed:** commas, `$`, `%`, spaces, mixed numbers, or any other symbol. (Bluebook shows an error, e.g., a minus sign anywhere but first.)
- **Character limit:**
  - **Positive answers: up to 5 characters** total.
  - **Negative answers: up to 6 characters** total (the minus sign counts as one).
  - The decimal point counts as one character; the fraction slash counts as one character.
- **Fractions:**
  - Do **not** need to be reduced/simplified — any equivalent correct fraction is accepted (e.g., `3/2` is fine even if not lowest terms), **as long as it fits** the character limit. If it doesn't fit, reduce it or enter the decimal.
  - **Mixed numbers are NOT allowed.** Convert to an improper fraction or a decimal (e.g., `2 1/3` → enter `7/3` or `2.333`). Bluebook would read `2 1/3`-style input as `21/3`, which is wrong.
- **Decimals / repeating decimals:**
  - Enter enough digits to fill the field; **don't round** unless you must to fit.
  - For a repeating decimal you must **truncate or round to fill the available space** — e.g., `2/3 = 0.6666...` → enter `.666` or `.667` (both accepted); `0.6` alone would be marked wrong (not precise enough).
- **Negatives:** the minus sign must be the first character; grid-in answers **can** be negative on the Digital SAT (unlike the old paper SAT, where grid-ins were never negative).
- **No variables, no ranges/inequalities, no π/√ symbols** — SPR answers are always a single numeric value.
- **Scoring of SPR:** Bluebook "cleanses" the response (e.g., removes a stray double slash) and compares to the key(s); match = 1 point, else 0. Any one of multiple valid keys earns credit.

---

## 4. THE OFFICIAL MATH REFERENCE SHEET (verbatim)

This box is shown **on every Digital SAT Math question** (Bluebook "Reference" button). It is **geometry-only** — no algebra, no quadratic formula, no percent/slope formulas. Reproduced exactly from College Board's official reproduction (Assessment Framework, Appendix D: Digital SAT Suite Test Directions). Notation: `r` = radius, `h` = height, `ℓ` = length, `w` = width, `b` = base, `π` = pi.

**Circle**
- Area: `A = πr²`
- Circumference: `C = 2πr`

**Rectangle**
- Area: `A = ℓw`

**Triangle**
- Area: `A = ½ bh`

**Right triangle (Pythagorean theorem)**
- `c² = a² + b²`

**Special Right Triangles**
- **30°–60°–90°:** sides are in ratio `x : x√3 : 2x`
  (side opposite 30° = `x`; opposite 60° = `x√3`; hypotenuse opposite 90° = `2x`)
- **45°–45°–90°:** sides are in ratio `s : s : s√2`
  (the two legs = `s` each; hypotenuse = `s√2`)

**Volumes**
- Rectangular solid / box: `V = ℓwh`
- Cylinder: `V = πr²h`
- Sphere: `V = (4/3)πr³`
- Cone: `V = (1/3)πr²h`
- Pyramid: `V = (1/3)ℓwh`

**Reference facts (printed verbatim below the figures):**
- "The number of degrees of arc in a circle is 360."
- "The number of radians of arc in a circle is 2π."
- "The sum of the measures in degrees of the angles of a triangle is 180."

> For SAT Studio: render this as a static, always-available panel/modal on every math item. A machine-readable version:
> ```js
> const SAT_REFERENCE = {
>   circle:    { area: "A = πr²", circumference: "C = 2πr" },
>   rectangle: { area: "A = ℓw" },
>   triangle:  { area: "A = ½bh" },
>   pythagorean: "c² = a² + b²",
>   specialRightTriangles: { "30-60-90": "x : x√3 : 2x", "45-45-90": "s : s : s√2" },
>   volume: {
>     box:      "V = ℓwh",
>     cylinder: "V = πr²h",
>     sphere:   "V = (4/3)πr³",
>     cone:     "V = (1/3)πr²h",
>     pyramid:  "V = (1/3)ℓwh"
>   },
>   facts: [
>     "The number of degrees of arc in a circle is 360.",
>     "The number of radians of arc in a circle is 2π.",
>     "The sum of the measures in degrees of the angles of a triangle is 180."
>   ]
> };
> ```

---

## 5. SCORING

**Score scales (SAT):**
- **Each section: 200–800**, in **10-point** intervals (RW score, Math score).
- **Total: 400–1600**, in 10-point intervals, = the **arithmetic sum** of the two section scores.
- There is **no separate RW-vs-Math split within a section** and no sub-score requirement — one scaled score per section.

**How scoring actually works (IRT):**
- Scoring uses an **Item Response Theory (IRT)** model, not a simple raw-count. Your scaled score is a function of (1) which questions you got right/wrong, (2) the **attributes of those questions (esp. difficulty)**, and (3) whether your response pattern suggests guessing.
- Consequence: **two students with the same number correct can get different scaled scores** if they answered different questions or different forms. Harder questions answered correctly pull the score up more.
- **No guessing penalty** (unlike pre-2016). Always answer every question; eliminate options to improve odds.

**How the adaptive Module 2 caps / enables the score range:**
- Because difficulty feeds directly into the IRT score, the **routing decision effectively bounds your attainable section score**:
  - Getting routed to the **higher-difficulty Module 2** *enables the top of the 800 range* — the hardest questions are only reachable on that path, and answering them correctly is what pushes a score toward 750–800.
  - Getting routed to the **lower-difficulty Module 2** *caps the maximum section score* below the ceiling — even a perfect lower module cannot reach the very top of the scale, because the model knows those questions carry less information/difficulty.
  - **Middle scores overlap:** by design, a large band of mid-range section scores (which includes the College & Career Readiness Benchmark) is **reachable from either path**, so middle-performing students land at their correct score regardless of route.
- **Gaming doesn't help:** College Board's simulations show a strong student who deliberately tanks Module 1 to get the easy Module 2 ends up with a **lower** score, because bombing Module 1 sharply lowers the ceiling.

**Roughly how Module-1 performance routes you (heuristic — College Board does not publish exact thresholds):**
- The routing threshold is set per-form by the ATA/IRT machinery, not a fixed "X correct." As a practical modeling approximation used across the test-prep field: getting **roughly 60–70%+ of Module 1 correct** tends to route to the **harder** Module 2; below that routes to the **easier** one. **SAT Studio should treat the threshold as a tunable parameter, not a published constant.**

---

## 6. IMPLEMENTATION PLAN FOR "SAT STUDIO"

Current per-question object fields (given):
`id, section ('rw'|'math'), domain, skill, difficulty ('Fácil'|'Media'|'Difícil'), type ('mcq'|'spr'), passage, stem, choices {A,B,C,D}, correct, answer (for spr), figure (HTML), expCorrect, expWrong {A,B,C,D}, tip`

### (a) Full-length adaptive mock exams

Model the real MST **panel** (routing module + easy/hard pair) rather than a flat test. Flow:

```
RW Module 1 (routing, 27 q, 32 min)
   └─ score M1 → threshold → RW Module 2 = {easy | hard} (27 q, 32 min)
[10-min break]
Math Module 1 (routing, 22 q, 35 min)
   └─ score M1 → threshold → Math Module 2 = {easy | hard} (22 q, 35 min)
combine all operational answers → IRT-lite estimate → scaled RW (200–800) + Math (200–800) → total (400–1600)
```

Data shape for a "mock":

```js
{
  id: "mock-01",
  label: "Simulacro completo 1",
  sections: [
    {
      section: "rw",
      routingThreshold: 0.62,          // fraction correct on M1 → hard vs easy (tunable)
      modules: [
        { stage: 1, role: "routing", timeSec: 1920, questionIds: [ /* 27 ids */ ] },
        { stage: 2, role: "easy",    timeSec: 1920, questionIds: [ /* 27 ids */ ] },
        { stage: 2, role: "hard",    timeSec: 1920, questionIds: [ /* 27 ids */ ] }
      ]
    },
    {
      section: "math",
      routingThreshold: 0.60,
      modules: [
        { stage: 1, role: "routing", timeSec: 2100, questionIds: [ /* 22 ids */ ] },
        { stage: 2, role: "easy",    timeSec: 2100, questionIds: [ /* 22 ids */ ] },
        { stage: 2, role: "hard",    timeSec: 2100, questionIds: [ /* 22 ids */ ] }
      ]
    }
  ],
  breakAfterSection: "rw",
  breakSec: 600
}
```

Runtime rules:
- Each module has **27 (RW) / 22 (Math)** items = **25/20 operational + 2/2 pretest**. Mark pretest items with `scored:false` so they render but don't affect the score (mirrors the real test and lets you trial new items).
- After Module 1, compute `fractionCorrect` over its **operational** items; if `>= routingThreshold` serve the `hard` stage-2 module, else `easy`. Lock Module 1 (no back-nav) once advanced.
- Enforce per-module countdown; auto-advance at 0. Provide flag/mark-for-review **within** a module only.
- The **same** 2 stage-2 pretest items can be shared between the easy and hard modules (optional realism).

### (b) Taxonomy of problem types to author (maps 1:1 to §2/§3 skills)

Author to these exact `domain → skill` codes so coverage matches the real blueprint. Suggested `skill` codes in brackets.

**Reading & Writing (`section:'rw'`)**
- Craft and Structure
  - Words in Context `[rw.cs.wic]`
  - Text Structure and Purpose `[rw.cs.tsp]`
  - Cross-Text Connections `[rw.cs.ctc]`
- Information and Ideas
  - Central Ideas and Details `[rw.ii.cid]`
  - Command of Evidence — Textual `[rw.ii.coe_txt]`
  - Command of Evidence — Quantitative `[rw.ii.coe_quant]` *(needs `figure`)*
  - Inferences `[rw.ii.inf]`
- Standard English Conventions
  - Boundaries `[rw.sec.bound]`
  - Form, Structure, and Sense `[rw.sec.fss]`
- Expression of Ideas
  - Rhetorical Synthesis `[rw.eoi.rhet]` *(stem carries bulleted notes + a stated goal)*
  - Transitions `[rw.eoi.trans]`

**Math (`section:'math'`)**
- Algebra
  - Linear equations in one variable `[m.alg.lin1]`
  - Linear equations in two variables `[m.alg.lin2]`
  - Linear functions `[m.alg.linfn]`
  - Systems of two linear equations `[m.alg.sys]`
  - Linear inequalities (one/two variables) `[m.alg.ineq]`
- Advanced Math
  - Equivalent expressions `[m.adv.equiv]`
  - Nonlinear equations & systems `[m.adv.nonlin_eq]`
  - Nonlinear functions `[m.adv.nonlin_fn]`
- Problem-Solving and Data Analysis
  - Ratios, rates, proportions, units `[m.psda.ratio]`
  - Percentages `[m.psda.pct]`
  - One-variable data (center/spread) `[m.psda.data1]`
  - Two-variable data (models/scatterplots) `[m.psda.data2]`
  - Probability & conditional probability `[m.psda.prob]`
  - Inference from sample statistics / margin of error `[m.psda.infer]`
  - Evaluating statistical claims (studies/experiments) `[m.psda.claims]`
- Geometry and Trigonometry
  - Area and volume `[m.geo.areavol]`
  - Lines, angles, and triangles `[m.geo.lat]`
  - Right triangles and trigonometry `[m.geo.trig]`
  - Circles `[m.geo.circ]`

Author a healthy share of Math items as `type:'spr'` (target ≈25%), especially in Algebra/Advanced Math, to match the real MC/SPR mix.

### (c) Extra metadata each question object should carry

Add these fields to support routing + score estimation:

```js
{
  // …existing fields…
  domainCode:  "m.alg.lin2",     // stable machine code (from taxonomy above)
  skillCode:   "m.alg.lin2",     // (or a finer sub-skill if you split further)
  difficultyTier: 2,             // 1=easy 2=medium 3=hard  (numeric, language-independent;
                                 //   keep 'difficulty' Fácil/Media/Difícil as the display label)
  bParam: 0.4,                   // IRT-style difficulty on ~ -3..+3 (optional but ideal for
                                 //   score estimation; can be seeded from difficultyTier)
  moduleEligibility: ["routing","hard"],  // which stage-2 pool(s) this item may appear in
                                 //   easy items → ["routing","easy"], hard → ["routing","hard"],
                                 //   medium → ["routing","easy","hard"]
  scored: true,                  // false = pretest/unscored
  inContext: false,              // math: is it a word/context problem? (~30% should be true)
  hasFigure: false,              // convenience flag (true when 'figure' present)
  calcRecommended: true,         // math UX hint (Desmos)
  timeEstSec: 90                 // authoring aid for building balanced modules
}
```

Key ones: **`difficultyTier`/`bParam`** (drives both module assembly and scoring), **`domainCode`/`skillCode`** (drives blueprint coverage + skill-level analytics), **`moduleEligibility`** (drives which pool a question can be pulled into when assembling routing vs easy vs hard modules), and **`scored`** (pretest handling).

### (d) Score-estimation approach

Two tiers, both producing a **200–800** per section (and 400–1600 total). Don't try to clone College Board's proprietary IRT; a difficulty-weighted estimate is close enough for practice feedback.

**Short practice set (a handful of questions, one skill/domain):**
- Report **% correct** + a **skill-mastery bar** per `skillCode`; do **not** show a fake scaled score from too few items (it'll be noisy). Optionally show a wide "projected band" (e.g., ±60 pts) with a disclaimer.
- Simple mastery: `mastery(skill) = Σ(correct · difficultyTier) / Σ(difficultyTier)` over attempted items in that skill.

**Full mock (both sections, adaptive):**
- **Difficulty-weighted raw score** per section: `weightedRaw = Σ over operational items ( correct ? bParam_scaled : 0 )`, where harder items contribute more. (If you only have `difficultyTier`, map 1/2/3 → weights like 1/1.5/2.2.)
- **Route bonus/ceiling:** apply the §5 rule — cap the max attainable section score for the **easy** Module-2 path (e.g., ceiling ~650–680) and unlock the top only on the **hard** path. This reproduces the real behavior where the easy module can't reach 800.
- **Map to scale:** fit a monotonic curve from `weightedRaw` → 200–800. Practical approach: pre-compute a lookup table by simulating known-difficulty forms, or use a logistic/linear fit anchored so that (all-correct on hard path)→800, (benchmark performance)→~480 RW / ~530 Math, (all-wrong)→200. Keep the mapping in one config so you can recalibrate as you gather user data.
- **Report:** section scores, total, plus a per-domain and per-skill breakdown (your differentiator vs. the real score report, which only gives coarse bands). Feed wrong-answer analytics from `expWrong{A,B,C,D}` back into the skill bars.

**Recommended constants to centralize (single config file):**
```js
const SAT_MODEL = {
  rw:   { operational: 50, perModule: 27, opPerModule: 25, minPerModule: 32, min: 200, max: 800 },
  math: { operational: 40, perModule: 22, opPerModule: 20, minPerModule: 35, min: 200, max: 800 },
  total: { min: 400, max: 1600 },
  breakSec: 600,
  routingThresholdDefault: 0.62,
  easyPathCeiling: { rw: 660, math: 670 }, // tunable; enforces §5 cap
  difficultyWeight: { 1: 1.0, 2: 1.5, 3: 2.2 }
};
```

---

## SOURCES (official / College Board)

- **Assessment Framework for the Digital SAT Suite** (v3.01, Aug 2024) — PDF. Authoritative for question counts, timing, operational/pretest split, domain weights & skills, MST terminology, scoring/IRT, score scales, and the **verbatim reference sheet (Appendix D)**. https://satsuite.collegeboard.org/media/pdf/assessment-framework-for-digital-sat-suite.pdf
- **How the SAT Is Structured** — satsuite.collegeboard.org. Sections, modules, 64/70 min, 32/35 min per module, 10-min break, 2 h 14 min, 54/44 questions. https://satsuite.collegeboard.org/sat/whats-on-the-test/structure
- **What Are Content Domains?** — satsuite.collegeboard.org. Domain + skill lists for RW and Math. https://satsuite.collegeboard.org/practice/content-domains
- **Reading and Writing question distribution / section pages** — satsuite.collegeboard.org. https://satsuite.collegeboard.org/digital/about/alignment/reading-writing/question-distribution
- **The Math Section: Overview** & **Student-Produced Responses** — satsuite.collegeboard.org. SPR format, calculator/Desmos allowed on all math. https://satsuite.collegeboard.org/sat/whats-on-the-test/math/overview · https://satsuite.collegeboard.org/sat/whats-on-the-test/math/student-produced
- **Digital SAT Sample Questions** (PDF) — satsuite.collegeboard.org. Reference sheet + sample items. https://satsuite.collegeboard.org/media/pdf/digital-sat-sample-questions.pdf

*SPR 5/6-character limit corroborated by test-prep transcriptions of the Bluebook SPR directions (e.g., Target Test Prep, UWorld); the character-count rule and "no mixed numbers / minus sign first / fractions need not be reduced" behaviors are consistent with College Board's SPR directions and Bluebook's cleansing/scoring described in the Framework §2.2.8.1.*
