"""
Compute exact frame positions for each audio segment in the new extended timeline.
Each clip plays after the previous one finishes + PAUSE_FRAMES gap.
Clips are grouped by visual act and placed within that act's time window.
"""

import json, math
from pydub import AudioSegment

FPS = 30
PAUSE_FRAMES = 10  # ~0.33s between clips

with open("public/ssml/manifest.json", encoding="utf-8") as f:
    segments = json.load(f)["segments"]

for seg in segments:
    wav = "public/audio/" + seg["file"].replace(".xml", ".wav")
    dur_ms = len(AudioSegment.from_wav(wav))
    seg["audio_frames"] = math.ceil(dur_ms / 1000 * FPS)

# ============================================================
# NEW SCENE STRUCTURE
# ============================================================

# INTRO: 366 frames
INTRO_DUR = 366
# Audio starts at frame 0 of the full video

# PROBLEM: 1630 frames
PROBLEM_DUR = 1630
PROB_TITLE_DUR = 135
PROB_ACT1_DUR = 621
PROB_ACT2_DUR = 550
PROB_ACT3_DUR = 294
PROB_FADE = 30
# Sequence starts within Problem scene (local frames):
PROB_TITLE_START = 0
PROB_ACT1_START = PROB_TITLE_DUR  # 135
PROB_ACT2_START = PROB_ACT1_START + PROB_ACT1_DUR  # 756
PROB_ACT3_START = PROB_ACT2_START + PROB_ACT2_DUR  # 1306

# SOLUTION: 4302 frames (was 4894 — shrunk by eliminating 20s dismiss gap)
SOLUTION_DUR = 4302
SOL_TITLE_DUR = 120
SOL_RECORD_DUR = 840
SOL_AI_DUR = 1965  # was 2517 — shrunk after removing dismiss gap
SOL_PROGRESS_DUR = 494
SOL_SUMMARY_DUR = 883
SOL_FADE = 40
# Sequence starts within Solution scene (local frames):
SOL_TITLE_START = 0
SOL_RECORD_START = SOL_TITLE_DUR  # 120
SOL_AI_START = SOL_RECORD_START + SOL_RECORD_DUR  # 960
SOL_PROGRESS_START = SOL_AI_START + SOL_AI_DUR  # 2925
SOL_SUMMARY_START = SOL_PROGRESS_START + SOL_PROGRESS_DUR  # 3419

# ============================================================
# COMPUTE ABSOLUTE FRAME POSITIONS FOR AUDIO
# ============================================================

# Scene offsets in full video
INTRO_OFFSET = 0
PROBLEM_OFFSET = INTRO_DUR  # 366
SOLUTION_OFFSET = INTRO_DUR + PROBLEM_DUR  # 1996


def place_clips(segs, act_start_absolute, visual_entrance_delay=20):
    """Place clips sequentially starting at act_start_absolute + visual_entrance_delay.
    Returns list of (segment, absolute_start_frame)."""
    cursor = act_start_absolute + visual_entrance_delay
    placements = []
    for i, seg in enumerate(segs):
        placements.append((seg, cursor))
        cursor += seg["audio_frames"] + PAUSE_FRAMES
    return placements


all_placements = []

# --- INTRO ---
# Audio starts at frame 0 (no visual delay needed, logo draws immediately)
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Intro"],
        INTRO_OFFSET,
        visual_entrance_delay=0,
    )
)

# --- PROBLEM ---
# Title
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Problem - Title"],
        PROBLEM_OFFSET + PROB_TITLE_START,
        visual_entrance_delay=15,
    )
)

# Manual Testing (Act 1)
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Problem - Manual Testing"],
        PROBLEM_OFFSET + PROB_ACT1_START,
        visual_entrance_delay=20,
    )
)

# Brittle Scripts (Act 2)
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Problem - Brittle Scripts"],
        PROBLEM_OFFSET + PROB_ACT2_START,
        visual_entrance_delay=20,
    )
)

# Cannot Scale (Act 3)
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Problem - Cannot Scale"],
        PROBLEM_OFFSET + PROB_ACT3_START,
        visual_entrance_delay=20,
    )
)

# --- SOLUTION ---
# Title
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Solution - Title"],
        SOLUTION_OFFSET + SOL_TITLE_START,
        visual_entrance_delay=15,
    )
)

# Record Once
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Solution - Record Once"],
        SOLUTION_OFFSET + SOL_RECORD_START,
        visual_entrance_delay=25,
    )
)

# AI-Powered group (AI-Powered, AI Evidence, Unexpected, Dismiss, Smart Element)
# These are sub-sections of the AI act, placed sequentially
ai_act_abs_start = SOLUTION_OFFSET + SOL_AI_START
ai_cursor = ai_act_abs_start + 20  # visual entrance delay

for scene_label in [
    "Solution - AI-Powered",
    "Solution - AI Evidence",
    "Solution - Unexpected",
    "Solution - Dismiss Videos",
]:
    sub_segs = [s for s in segments if s["scene"] == scene_label]
    for seg in sub_segs:
        all_placements.append((seg, ai_cursor))
        ai_cursor += seg["audio_frames"] + PAUSE_FRAMES

# Small pause after dismiss narration before smart element narration
# (Previously 20s / 600 frames gap — now just the standard pause)
ai_cursor += 0  # No extra gap — standard PAUSE_FRAMES already applied above

# Smart Element Finding
smart_segs = [s for s in segments if s["scene"] == "Solution - Smart Element"]
for seg in smart_segs:
    all_placements.append((seg, ai_cursor))
    ai_cursor += seg["audio_frames"] + PAUSE_FRAMES

# Progress
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Solution - Platform Progress"],
        SOLUTION_OFFSET + SOL_PROGRESS_START,
        visual_entrance_delay=20,
    )
)

# Summary
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Solution - Summary"],
        SOLUTION_OFFSET + SOL_SUMMARY_START,
        visual_entrance_delay=15,
    )
)

# ============================================================
# OUTPUT
# ============================================================
TOTAL = INTRO_DUR + PROBLEM_DUR + SOLUTION_DUR

print(f"TOTAL VIDEO: {TOTAL} frames ({TOTAL / FPS:.1f}s)")
print(f"\nINTRO_DURATION = {INTRO_DUR}")
print(f"PROBLEM_DURATION = {PROBLEM_DUR}")
print(f"SOLUTION_DURATION = {SOLUTION_DUR}")
print(
    f"\nProblem act starts (local): title={PROB_TITLE_START}, act1={PROB_ACT1_START}, act2={PROB_ACT2_START}, act3={PROB_ACT3_START}"
)
print(
    f"Problem act durations: title={PROB_TITLE_DUR}, act1={PROB_ACT1_DUR}, act2={PROB_ACT2_DUR}, act3={PROB_ACT3_DUR}"
)
print(
    f"\nSolution act starts (local): title={SOL_TITLE_START}, record={SOL_RECORD_START}, ai={SOL_AI_START}, progress={SOL_PROGRESS_START}, summary={SOL_SUMMARY_START}"
)
print(
    f"Solution act durations: title={SOL_TITLE_DUR}, record={SOL_RECORD_DUR}, ai={SOL_AI_DUR}, progress={SOL_PROGRESS_DUR}, summary={SOL_SUMMARY_DUR}"
)

print(
    f"\n{'':>3s}  {'File':>35s}  {'AbsFrame':>8s}  {'AbsSec':>7s}  {'DurF':>5s}  {'DurSec':>6s}  {'EndF':>6s}"
)
print("-" * 85)
for seg, abs_frame in all_placements:
    name = seg["file"].replace(".xml", "")
    dur_f = seg["audio_frames"]
    end_f = abs_frame + dur_f
    print(
        f"{'':>3s}  {name:>35s}  {abs_frame:>8d}  {abs_frame / FPS:>7.1f}  {dur_f:>5d}  {dur_f / FPS:>6.1f}  {end_f:>6d}"
    )

# Verify no overlaps
print("\n=== Overlap check ===")
sorted_placements = sorted(all_placements, key=lambda x: x[1])
overlaps = 0
for i in range(len(sorted_placements) - 1):
    seg_a, start_a = sorted_placements[i]
    seg_b, start_b = sorted_placements[i + 1]
    end_a = start_a + seg_a["audio_frames"]
    if end_a > start_b:
        overlaps += 1
        print(
            f"  OVERLAP: {seg_a['file']} ends at {end_a} but {seg_b['file']} starts at {start_b} (overlap={end_a - start_b}f)"
        )

if overlaps == 0:
    print("  No overlaps found!")

# Check last clip fits within video
last_seg, last_start = sorted_placements[-1]
last_end = last_start + last_seg["audio_frames"]
if last_end > TOTAL:
    print(
        f"\n  WARNING: Last clip ends at frame {last_end} but video is only {TOTAL} frames!"
    )
else:
    print(
        f"\n  Last clip ends at frame {last_end} ({last_end / FPS:.1f}s), video is {TOTAL} frames ({TOTAL / FPS:.1f}s). OK!"
    )

# Generate the NARRATION_SEGMENTS array for FullVideo.tsx
print("\n\n=== NARRATION_SEGMENTS for FullVideo.tsx ===")
print("const NARRATION_SEGMENTS: [string, number][] = [")
for seg, abs_frame in sorted_placements:
    name = seg["file"].replace(".xml", "")
    print(f'  ["{name}", {abs_frame}],')
print("];")
