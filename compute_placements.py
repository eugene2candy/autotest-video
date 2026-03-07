"""
Compute exact frame positions for each audio segment — COMPACT timeline.
Reduced pauses (4 frames) and minimal visual entrance delays (8-12 frames).
Derives act/scene durations bottom-up from audio content.
"""

import json, math
from pydub import AudioSegment

FPS = 30
PAUSE_FRAMES = 1  # ~0.03s between clips (minimal gap)

with open("public/ssml/manifest.json", encoding="utf-8") as f:
    segments = json.load(f)["segments"]

for seg in segments:
    wav = "public/audio/" + seg["file"].replace(".xml", ".wav")
    dur_ms = len(AudioSegment.from_wav(wav))
    seg["audio_frames"] = math.ceil(dur_ms / 1000 * FPS)


def audio_span(scene_labels):
    """Total audio frames for segments matching any of the given scene labels."""
    segs = [s for s in segments if s["scene"] in scene_labels]
    total = sum(s["audio_frames"] for s in segs)
    pauses = max(0, len(segs) - 1) * PAUSE_FRAMES
    return total + pauses, len(segs)


# ============================================================
# COMPUTE MINIMUM ACT DURATIONS (bottom-up from audio)
# ============================================================

# Intro: 3 clips
intro_audio, intro_n = audio_span(["Intro"])
INTRO_DUR = intro_audio + 0 + 8  # no entrance delay + 8 frames tail for fade-out

# Problem acts
prob_title_audio, _ = audio_span(["Problem - Title"])
prob_act1_audio, _ = audio_span(["Problem - Manual Testing"])
prob_act2_audio, _ = audio_span(["Problem - Brittle Scripts"])
prob_act3_audio, _ = audio_span(["Problem - Cannot Scale"])

# Each act: entrance_delay + audio + fade_tail
PROB_TITLE_DUR = 3 + prob_title_audio + 0  # title flows straight into act1
PROB_ACT1_DUR = 3 + prob_act1_audio + 0
PROB_ACT2_DUR = 3 + prob_act2_audio + 0
PROB_ACT3_DUR = 3 + prob_act3_audio + 0
PROB_FADE = 3  # scene fade-out

PROB_TITLE_START = 0
PROB_ACT1_START = PROB_TITLE_DUR
PROB_ACT2_START = PROB_ACT1_START + PROB_ACT1_DUR
PROB_ACT3_START = PROB_ACT2_START + PROB_ACT2_DUR
PROBLEM_DUR = PROB_ACT3_START + PROB_ACT3_DUR + PROB_FADE

# Solution acts
sol_title_audio, _ = audio_span(["Solution - Title"])
sol_record_audio, _ = audio_span(["Solution - Record Once"])
sol_ai_audio, _ = audio_span(
    [
        "Solution - AI-Powered",
        "Solution - AI Evidence",
        "Solution - Unexpected",
        "Solution - Dismiss Videos",
        "Solution - Smart Element",
    ]
)
sol_progress_audio, _ = audio_span(["Solution - Platform Progress"])
sol_summary_audio, _ = audio_span(["Solution - Summary"])

SOL_TITLE_DUR = 3 + sol_title_audio + 0
SOL_RECORD_DUR = 3 + sol_record_audio + 0

# AI act is special: needs time for dismiss videos + visual transitions
# Entrance (3) + all AI sub-section audio + tail (3)
SOL_AI_DUR = 3 + sol_ai_audio + 3  # tail for act fade

SOL_PROGRESS_DUR = 3 + sol_progress_audio + 0
SOL_SUMMARY_DUR = 3 + sol_summary_audio + 3  # slight tail for final scene
SOL_FADE = 3

SOL_TITLE_START = 0
SOL_RECORD_START = SOL_TITLE_DUR
SOL_AI_START = SOL_RECORD_START + SOL_RECORD_DUR
SOL_PROGRESS_START = SOL_AI_START + SOL_AI_DUR
SOL_SUMMARY_START = SOL_PROGRESS_START + SOL_PROGRESS_DUR
SOLUTION_DUR = SOL_SUMMARY_START + SOL_SUMMARY_DUR + SOL_FADE

# Scene offsets
INTRO_OFFSET = 0
PROBLEM_OFFSET = INTRO_DUR
SOLUTION_OFFSET = INTRO_DUR + PROBLEM_DUR
TOTAL = INTRO_DUR + PROBLEM_DUR + SOLUTION_DUR


# ============================================================
# PLACE AUDIO CLIPS
# ============================================================


def place_clips(segs, act_start_absolute, visual_entrance_delay=12):
    """Place clips sequentially starting at act_start_absolute + visual_entrance_delay."""
    cursor = act_start_absolute + visual_entrance_delay
    placements = []
    for seg in segs:
        placements.append((seg, cursor))
        cursor += seg["audio_frames"] + PAUSE_FRAMES
    return placements


all_placements = []

# --- INTRO ---
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Intro"],
        INTRO_OFFSET,
        visual_entrance_delay=0,
    )
)

# --- PROBLEM ---
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Problem - Title"],
        PROBLEM_OFFSET + PROB_TITLE_START,
        visual_entrance_delay=3,
    )
)
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Problem - Manual Testing"],
        PROBLEM_OFFSET + PROB_ACT1_START,
        visual_entrance_delay=3,
    )
)
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Problem - Brittle Scripts"],
        PROBLEM_OFFSET + PROB_ACT2_START,
        visual_entrance_delay=3,
    )
)
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Problem - Cannot Scale"],
        PROBLEM_OFFSET + PROB_ACT3_START,
        visual_entrance_delay=3,
    )
)

# --- SOLUTION ---
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Solution - Title"],
        SOLUTION_OFFSET + SOL_TITLE_START,
        visual_entrance_delay=3,
    )
)
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Solution - Record Once"],
        SOLUTION_OFFSET + SOL_RECORD_START,
        visual_entrance_delay=3,
    )
)

# AI-Powered group — placed sequentially within the act
ai_act_abs_start = SOLUTION_OFFSET + SOL_AI_START
ai_cursor = ai_act_abs_start + 3  # visual entrance delay

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

# Smart Element Finding (no extra gap)
smart_segs = [s for s in segments if s["scene"] == "Solution - Smart Element"]
for seg in smart_segs:
    all_placements.append((seg, ai_cursor))
    ai_cursor += seg["audio_frames"] + PAUSE_FRAMES

# Progress
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Solution - Platform Progress"],
        SOLUTION_OFFSET + SOL_PROGRESS_START,
        visual_entrance_delay=3,
    )
)

# Summary
all_placements.extend(
    place_clips(
        [s for s in segments if s["scene"] == "Solution - Summary"],
        SOLUTION_OFFSET + SOL_SUMMARY_START,
        visual_entrance_delay=3,
    )
)

# ============================================================
# OUTPUT
# ============================================================

print(f"TOTAL VIDEO: {TOTAL} frames ({TOTAL / FPS:.1f}s)")
print(f"\nINTRO_DURATION = {INTRO_DUR}")
print(f"PROBLEM_DURATION = {PROBLEM_DUR}")
print(f"SOLUTION_DURATION = {SOLUTION_DUR}")
print(
    f"\nProblem act starts (local): title={PROB_TITLE_START}, act1={PROB_ACT1_START}, "
    f"act2={PROB_ACT2_START}, act3={PROB_ACT3_START}"
)
print(
    f"Problem act durations: title={PROB_TITLE_DUR}, act1={PROB_ACT1_DUR}, "
    f"act2={PROB_ACT2_DUR}, act3={PROB_ACT3_DUR}"
)
print(
    f"\nSolution act starts (local): title={SOL_TITLE_START}, record={SOL_RECORD_START}, "
    f"ai={SOL_AI_START}, progress={SOL_PROGRESS_START}, summary={SOL_SUMMARY_START}"
)
print(
    f"Solution act durations: title={SOL_TITLE_DUR}, record={SOL_RECORD_DUR}, "
    f"ai={SOL_AI_DUR}, progress={SOL_PROGRESS_DUR}, summary={SOL_SUMMARY_DUR}"
)

print(
    f"\n{'':>3s}  {'File':>35s}  {'AbsFrame':>8s}  {'AbsSec':>7s}  "
    f"{'DurF':>5s}  {'DurSec':>6s}  {'EndF':>6s}"
)
print("-" * 85)
for seg, abs_frame in all_placements:
    name = seg["file"].replace(".xml", "")
    dur_f = seg["audio_frames"]
    end_f = abs_frame + dur_f
    print(
        f"{'':>3s}  {name:>35s}  {abs_frame:>8d}  {abs_frame / FPS:>7.1f}  "
        f"{dur_f:>5d}  {dur_f / FPS:>6.1f}  {end_f:>6d}"
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
            f"  OVERLAP: {seg_a['file']} ends at {end_a} but "
            f"{seg_b['file']} starts at {start_b} (overlap={end_a - start_b}f)"
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
        f"\n  Last clip ends at frame {last_end} ({last_end / FPS:.1f}s), "
        f"video is {TOTAL} frames ({TOTAL / FPS:.1f}s). OK!"
    )

# Generate the NARRATION_SEGMENTS array for FullVideo.tsx
print("\n\n=== NARRATION_SEGMENTS for FullVideo.tsx ===")
print("const NARRATION_SEGMENTS: [string, number][] = [")
for seg, abs_frame in sorted_placements:
    name = seg["file"].replace(".xml", "")
    print(f'  ["{name}", {abs_frame}],')
print("];")
