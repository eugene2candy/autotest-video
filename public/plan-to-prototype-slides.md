# Plan to Prototype — Slide Deck Content (v2)

> 3 slides for engineering leadership.
> Three themes: (1) Human-centric, (2) AI shortens the path, (3) AI links the workflow.

---

## Slide 1: Human-Centric — "The Human Drives, AI Amplifies"

> **Layout:** Title at top. Center — a diagram showing the human at both ends, AI in the middle. Bottom — key principle box.

### Title
**Human-Centric AI: The Engineer Decides, AI Accelerates**

### Subtitle
AI doesn't replace thinking. It removes the friction between thinking and proving.

### Diagram (center, horizontal flow)

```
┌─────────────────┐                                    ┌─────────────────┐
│     HUMAN       │                                    │     HUMAN       │
│   ───────────   │         ┌───────────────┐          │   ───────────   │
│   Sets intent   │  ────>  │   AI assists  │  ────>   │   Evaluates    │
│   Defines       │         │   Explores    │          │   Adjusts      │
│   constraints   │         │   Builds      │          │   Decides next │
│   Makes design  │         │   Iterates    │          │   step         │
│   choices       │         └───────────────┘          │                 │
└─────────────────┘                                    └─────────────────┘
      START                    ACCELERATE                     STEER
  "What do we need?           "Make it real,            "Does this solve
   Why this approach?"         fast."                    our problem?"

         ◄──────────────── repeat ─────────────────►
```

### Key Principle Box (bottom, highlighted)

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  Every critical decision stays with the human:                       │
│                                                                      │
│    • What problem to solve                                           │
│    • Which approach to take (architecture, trade-offs, constraints)  │
│    • Whether the result is good enough                               │
│    • When to pivot, iterate, or ship                                 │
│                                                                      │
│  AI handles the cost of exploration and execution — so the human    │
│  can focus on judgment, taste, and direction.                        │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Speaker Notes
- The core message: AI is not autonomous. The human is at both the beginning (intent, direction) and the end (evaluation, judgment) of every cycle.
- This is a loop, not a one-shot. The human steers continuously — AI doesn't run off and build something in isolation.
- Connect to the "three buckets" framework: Capability (AI levels this up), Judgment/Taste (human's true differentiator), Willpower (human drives things to completion).
- Why this matters for leadership: the engineers who get the most out of AI are the ones with the strongest domain expertise and judgment — AI amplifies their strengths, it doesn't compensate for gaps.

---

## Slide 2: AI Shortens the Path — "From 6 Months to 2 Months"

> **Layout:** Top — title. Middle — before/after timeline comparison (stacked, not side-by-side). Bottom — the insight.

### Title
**AI Shortens Every Path — From Idea to Feature, From Gap to Solution**

### Subtitle
Two patterns we're seeing across the team.

---

### Pattern A: Feature Delivery — The "One-Pager Bottleneck" Is Gone

```
BEFORE AI — A typical new feature lifecycle
══════════════════════════════════════════════════════════════════════

  Month 1        Month 2        Month 3        Month 4       Month 5-6
  ┌──────┐      ┌──────┐      ┌──────┐      ┌──────┐      ┌────────┐
  │ Dev  │ ───> │ More │ ───> │ PM's │ ───> │ Dev  │ ───> │ Build  │
  │ + PM │      │ disc-│      │ one- │      │ starts│     │ + Ship │
  │ talk │      │ ussion│     │ pager│      │ coding│     │        │
  │      │      │      │      │ ready│      │       │     │        │
  └──────┘      └──────┘      └──────┘      └──────┘      └────────┘
  Idea vs.      Still         Finally a      Now we can    Released
  nothing       abstract      spec           build

  ─────────────────────── ~6 months ───────────────────────────────


WITH AI — Same feature, different path
══════════════════════════════════════════════════════════════════════

  Week 1-2              Week 3-4              Month 2
  ┌────────────┐      ┌──────────────┐      ┌────────────┐
  │ Dev + PM   │ ───> │ Iterate on   │ ───> │ Evolve     │
  │ have a     │      │ prototype    │      │ prototype  │
  │ rough idea │      │ together     │      │ into       │
  │            │      │              │      │ production │
  │ AI builds  │      │ Adjust,      │      │ feature    │
  │ a working  │      │ validate,    │      │            │
  │ prototype  │      │ align        │      │ Ship       │
  └────────────┘      └──────────────┘      └────────────┘
  Idea becomes        Prototype replaces     Prototype evolves
  tangible in days    the one-pager          — not thrown away

  ──────────────────── ~2 months ──────────────────────────────────
```

**What changed:**
- The one-pager used to be the bottleneck — months of abstract discussion before anything concrete existed
- Now, a rough idea + AI = a working prototype in days
- Dev and PM discuss around **something tangible**, not words on paper
- The prototype isn't thrown away — it evolves into the real feature
- **AI shortened both the discussion path (idea → alignment) and the execution path (aligned idea → shipped feature)**

---

### Pattern B: Internal Tooling — Filling Gaps That Were "Not Worth the Investment"

```
BEFORE AI                                WITH AI
─────────────────────────────            ─────────────────────────────
"We have a gap in our                    "One engineer + AI built
workflow — testing is manual,            internal tools in days to
process X is tedious, system Y           fill these exact gaps.
has no good tooling."                    
                                         Not side projects —
"To fix it properly would                working solutions that
take a dedicated team and                the team actually uses."
months. Not worth the
investment right now."                   The calculus changed:
                                         the cost of trying
Result: We live with the gap.            dropped to near zero.
```

**What changed:**
- Problems that were "known but tolerated" because the fix was too expensive — now get solved
- Individual engineers build targeted internal tools that address their team's specific pain points
- These aren't polished products — they're practical solutions that work, built in days not months
- **AI turned "not worth the investment" into "why not try it this week"**

---

### Bottom: Key Insight (highlighted box)

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  AI doesn't just make us faster at what we already do.              │
│                                                                      │
│  It changes WHAT WE ATTEMPT:                                        │
│    • Features that took 6 months now ship in 2                      │
│    • Workflow gaps that "weren't worth fixing" now get solved        │
│    • Prototypes that used to be throwaway now become the product    │
│                                                                      │
│  The path from idea to impact got shorter in every direction.       │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Speaker Notes
- Pattern A is about production features. The key insight isn't just "we code faster" — it's that AI removed the bottleneck that existed BEFORE coding even started. The one-pager process was a necessary evil because without a prototype, alignment was expensive. Now the prototype IS the alignment tool.
- Pattern B is about internal efficiency. Every team has gaps — manual processes, missing tooling, tedious workflows. These used to stay unfixed because the ROI didn't justify a team project. AI made it possible for individual engineers to solve their own problems.
- Both patterns share the same principle: AI didn't replace human judgment about WHAT to build. It removed the cost barrier that prevented humans from acting on their judgment.
- For leadership: this means your engineers' domain expertise is now directly convertible to solutions. The bottleneck is no longer "can we afford to build this?" — it's "does someone on the team understand the problem well enough to direct AI?"

---

## Slide 3: AI Links the Workflow — "The Intelligent Glue Layer"

> **Layout:** Title at top. Center — a before/after diagram showing disconnected vs. connected workflow. Bottom — implications.

### Title
**AI as the Glue: Connecting What Was Previously Disconnected**

### Subtitle
AI doesn't just speed up individual steps — it bridges the gaps between them.

### Diagram: Before AI — Disconnected Steps

```
BEFORE: Capable tools exist, but they don't talk to each other
═══════════════════════════════════════════════════════════════════

  ┌──────────┐         ┌──────────┐         ┌──────────┐
  │ Tool A   │   ???   │ Tool B   │   ???   │ Tool C   │
  │          │         │          │         │          │
  │ Powerful │         │ Powerful │         │ Powerful │
  │ but      │         │ but      │         │ but      │
  │ isolated │         │ isolated │         │ isolated │
  └──────────┘         └──────────┘         └──────────┘
       │                    │                    │
       ▼                    ▼                    ▼
   Human writes         Human writes         Human writes
   scripts to           scripts to           scripts to
   bridge gaps          bridge gaps          bridge gaps
       │                    │                    │
       ▼                    ▼                    ▼
   Scripts are          Scripts are          Scripts are
   brittle, break       rigid, can't         a maintenance
   on edge cases        adapt                burden

  Result: Humans spend more time on glue code than on the actual work.
```

### Diagram: With AI — Intelligent, Adaptive Connections

```
WITH AI: AI becomes the adaptive layer between tools
═══════════════════════════════════════════════════════════════════

  ┌──────────┐         ┌──────────┐         ┌──────────┐
  │ Tool A   │         │ Tool B   │         │ Tool C   │
  │          │         │          │         │          │
  └────┬─────┘         └────┬─────┘         └────┬─────┘
       │                    │                    │
       └────────┬───────────┴───────────┬────────┘
                │                       │
         ┌──────┴───────────────────────┴──────┐
         │          AI GLUE LAYER              │
         │                                      │
         │  • Understands what each tool does   │
         │  • Adapts when interfaces change     │
         │  • Handles edge cases dynamically    │
         │  • Translates between formats        │
         │  • Decides HOW to trigger actions    │
         │    based on context, not rigid       │
         │    scripts                           │
         └─────────────────────────────────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │  HUMAN DEFINES      │
              │  the WHAT and WHY   │
              │                     │
              │  AI figures out     │
              │  the HOW — and      │
              │  adapts when        │
              │  things change      │
              └─────────────────────┘
```

### Concrete Pattern (generalized, no project names)

```
EXAMPLE: Automating UI testing with an existing framework
─────────────────────────────────────────────────────────────────────

  BEFORE                              WITH AI
  ──────                              ───────
  The framework (e.g., Appium)        AI sits between the human
  is powerful, but to automate:       and the framework:

  → Dev writes scripts                → Human records actions
  → Scripts use brittle locators        through a visual interface
  → Locators break across devices     → AI dynamically determines
  → Dev rewrites scripts                HOW to locate elements
  → Scripts break again                 (not fixed locators, but
  → Dev gives up, goes back to          intelligent signatures)
    manual testing                    → AI evaluates screen state
                                        to verify actions worked
  The tool was capable.               → When UI changes, AI adapts
  The glue was the problem.             — tests don't break

                                      The tool is the same.
                                      AI replaced the brittle glue
                                      with an intelligent layer.
```

### Bottom: Implications (highlighted box)

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  AI as glue changes the engineering equation:                        │
│                                                                      │
│  BEFORE: "We have great tools, but connecting them is expensive     │
│           and fragile. We spend more time on integration than on    │
│           the actual problem."                                       │
│                                                                      │
│  AFTER:  "AI handles the connections — adapting dynamically when    │
│           things change. Engineers define WHAT should happen.        │
│           AI figures out HOW to make the tools do it."               │
│                                                                      │
│  This is not about replacing tools.                                  │
│  It's about making existing tools work together intelligently.       │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Speaker Notes
- The key insight: most engineering pain isn't in the tools themselves — it's in the glue between them. Connecting systems, translating formats, handling edge cases, maintaining brittle scripts. AI is uniquely suited to be this glue because it can adapt dynamically.
- The UI testing example is representative of a broader pattern: we have powerful tools (Appium, testing frameworks, CI/CD systems, monitoring platforms), but the scripts and integrations that connect them are rigid and break constantly. AI replaces rigid scripts with an adaptive layer.
- This connects to the "plasticity and adhesiveness" concepts from the original AI productivity doc: AI is moldable (you shape it to your need) and sticky (it connects previously disconnected things).
- For leadership: this means the ROI of existing tool investments goes up. You don't need to replace your toolchain — AI makes the tools you already have work together in ways that were previously too expensive to maintain.
- This slide completes the three-part story: (1) Human stays in the driver's seat, (2) AI shortens every path, (3) AI connects the pieces. Together, these three effects compound — the engineer who directs AI well, moves faster, AND connects more dots, becomes dramatically more effective.

---

## Narrative Arc (for presenter)

**Slide 1 — Human-Centric:** Establish the principle. AI amplifies, humans steer. Every critical decision remains with the engineer. This is the foundation.

**Slide 2 — AI Shortens the Path:** Show the proof with two patterns:
- Production features: 6 months → 2 months. The one-pager bottleneck is eliminated because prototypes replace abstract discussions.
- Internal tooling: Gaps that were "not worth fixing" now get solved by individual engineers in days.

**Slide 3 — AI Links the Workflow:** Reveal the deeper shift. AI isn't just faster — it's a new kind of connector that makes existing tools work together intelligently, replacing brittle scripts with adaptive behavior.

### The arc builds:
1. First, we trust AI because the human stays in control
2. Then, we see it compress timelines dramatically
3. Finally, we realize it's changing something structural — how systems connect

### Landing message:
> "We're not just using AI to write code faster. We're using it to think faster, validate faster, and connect faster. The human's judgment is more important than ever — because AI makes that judgment actionable at a scale and speed that wasn't possible before."
