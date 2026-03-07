"""
Compute new scene durations and audio placement for the extended video.

Strategy: For each scene, group audio segments by their scene/act.
Within each act, audio plays sequentially with a pause between clips.
The act's visual duration is extended to accommodate all its audio.
"""

import json, math
from pydub import AudioSegment

FPS = 30
PAUSE_FRAMES = 10  # ~0.33s pause between segments

with open("public/ssml/manifest.json", encoding="utf-8") as f:
    segments = json.load(f)["segments"]

# Enrich with actual audio duration
for seg in segments:
    wav = "public/audio/" + seg["file"].replace(".xml", ".wav")
    dur_ms = len(AudioSegment.from_wav(wav))
    seg["audio_frames"] = math.ceil(dur_ms / 1000 * FPS)
    seg["audio_sec"] = round(dur_ms / 1000, 2)

# Group segments by scene
# Intro: segments 1-3 (indices 0-2)
# Problem: segments 4-11 (indices 3-10)
# Solution: segments 12-31 (indices 11-30)

intro_segs = [s for s in segments if s["scene"].startswith("Intro")]
problem_segs = [s for s in segments if s["scene"].startswith("Problem")]
solution_segs = [s for s in segments if s["scene"].startswith("Solution")]


def compute_sequential_duration(segs, label):
    """Given a list of segments, compute total frames needed if played sequentially with pauses."""
    total = 0
    for i, seg in enumerate(segs):
        total += seg["audio_frames"]
        if i < len(segs) - 1:
            total += PAUSE_FRAMES
    print(f"  {label}: {len(segs)} clips, {total} frames ({total / FPS:.1f}s)")
    return total


print("=== Audio duration per scene (sequential with pauses) ===")
intro_audio = compute_sequential_duration(intro_segs, "Intro")
problem_audio = compute_sequential_duration(problem_segs, "Problem")
solution_audio = compute_sequential_duration(solution_segs, "Solution")

# Now compute what we need per scene.
# Each scene needs: its audio duration + some buffer for fade-in/out and visual breathing room

# INTRO: Original 180 frames (6s). Audio needs intro_audio frames.
# Add 30 frames buffer at start + 25 frames fade-out at end
INTRO_BUFFER_START = 0  # audio starts right away
INTRO_BUFFER_END = 30  # fade out
intro_needed = INTRO_BUFFER_START + intro_audio + INTRO_BUFFER_END

# PROBLEM: Original 600 frames (20s).
# Structure: Title (100f) + Act1 (manual) + Act2 (brittle) + Act3 (scale) + fade
# We need the title to show first, then audio plays during acts.
# Problem segments:
#   seg 4: "Problem - Title"
#   segs 5-6: "Problem - Manual Testing"
#   segs 7-9: "Problem - Brittle Scripts"
#   segs 10-11: "Problem - Cannot Scale"

problem_title_segs = [s for s in problem_segs if "Title" in s["scene"]]
problem_manual_segs = [s for s in problem_segs if "Manual" in s["scene"]]
problem_brittle_segs = [s for s in problem_segs if "Brittle" in s["scene"]]
problem_scale_segs = [
    s for s in problem_segs if "Cannot" in s["scene"] or "Scale" in s["scene"]
]

print("\n=== Problem scene breakdown ===")
problem_title_audio = compute_sequential_duration(problem_title_segs, "Title")
problem_manual_audio = compute_sequential_duration(
    problem_manual_segs, "Manual Testing"
)
problem_brittle_audio = compute_sequential_duration(
    problem_brittle_segs, "Brittle Scripts"
)
problem_scale_audio = compute_sequential_duration(problem_scale_segs, "Cannot Scale")

# Title shows for some frames then fades, then acts follow
TITLE_DUR = 30  # Just enough for title to show before title audio starts
TITLE_ACT_DUR = max(100, problem_title_audio + 30)  # title visual + audio + buffer
ACT1_DUR = max(
    200, problem_manual_audio + 60
)  # acts need visual entrance + audio + fade
ACT2_DUR = max(180, problem_brittle_audio + 60)
ACT3_DUR = max(120, problem_scale_audio + 60)
PROBLEM_FADE = 30

problem_needed = TITLE_ACT_DUR + ACT1_DUR + ACT2_DUR + ACT3_DUR + PROBLEM_FADE

# SOLUTION: Most complex.
# Structure: Title(110f) + RecordOnce(400f) + AIPowered(1555f) + Progress(270f) + Summary(480f)
# Solution segments:
#   seg 12: "Solution - Title"
#   segs 13-17: "Solution - Record Once"
#   seg 18: "Solution - AI-Powered"
#   seg 19: "Solution - AI Evidence"
#   seg 20: "Solution - Unexpected"
#   segs 21-22: "Solution - Dismiss Videos"
#   seg 23: "Solution - Smart Element" (after 20s silence gap)
#   segs 24-25: "Solution - Platform Progress"
#   segs 26-31: "Solution - Summary"

sol_title_segs = [s for s in solution_segs if "Title" in s["scene"]]
sol_record_segs = [s for s in solution_segs if "Record" in s["scene"]]
sol_ai_segs = [s for s in solution_segs if "AI-Powered" in s["scene"]]
sol_evidence_segs = [s for s in solution_segs if "Evidence" in s["scene"]]
sol_unexpected_segs = [s for s in solution_segs if "Unexpected" in s["scene"]]
sol_dismiss_segs = [s for s in solution_segs if "Dismiss" in s["scene"]]
sol_smart_segs = [s for s in solution_segs if "Smart" in s["scene"]]
sol_progress_segs = [
    s for s in solution_segs if "Platform" in s["scene"] or "Progress" in s["scene"]
]
sol_summary_segs = [s for s in solution_segs if "Summary" in s["scene"]]

print("\n=== Solution scene breakdown ===")
sol_title_audio = compute_sequential_duration(sol_title_segs, "Title")
sol_record_audio = compute_sequential_duration(sol_record_segs, "Record Once")
sol_ai_audio = compute_sequential_duration(sol_ai_segs, "AI-Powered")
sol_evidence_audio = compute_sequential_duration(sol_evidence_segs, "AI Evidence")
sol_unexpected_audio = compute_sequential_duration(sol_unexpected_segs, "Unexpected")
sol_dismiss_audio = compute_sequential_duration(sol_dismiss_segs, "Dismiss Videos")
sol_smart_audio = compute_sequential_duration(sol_smart_segs, "Smart Element")
sol_progress_audio = compute_sequential_duration(sol_progress_segs, "Platform Progress")
sol_summary_audio = compute_sequential_duration(sol_summary_segs, "Summary")

# The AIPowered act contains: AI Evidence terminal, Unexpected popups, Dismiss videos, Smart Element
# All these are sub-sections within the AIPowered act visually
ai_act_total_audio = (
    sol_ai_audio
    + PAUSE_FRAMES
    + sol_evidence_audio
    + PAUSE_FRAMES
    + sol_unexpected_audio
    + PAUSE_FRAMES
    + sol_dismiss_audio
    + PAUSE_FRAMES
    +
    # 20s silence gap for watching dismiss videos
    600  # 20s at 30fps
    + sol_smart_audio
)

SOL_TITLE_DUR = max(110, sol_title_audio + 40)
SOL_RECORD_DUR = max(400, sol_record_audio + 60)
SOL_AI_DUR = max(1555, ai_act_total_audio + 60)
SOL_PROGRESS_DUR = max(270, sol_progress_audio + 60)
SOL_SUMMARY_DUR = max(480, sol_summary_audio + 60)
SOL_FADE = 40

solution_needed = (
    SOL_TITLE_DUR
    + SOL_RECORD_DUR
    + SOL_AI_DUR
    + SOL_PROGRESS_DUR
    + SOL_SUMMARY_DUR
    + SOL_FADE
)

print(f"\n=== Scene duration summary ===")
print(
    f"  Intro:    {intro_needed:5d} frames ({intro_needed / FPS:6.1f}s)  [was 180 = 6.0s]"
)
print(
    f"  Problem:  {problem_needed:5d} frames ({problem_needed / FPS:6.1f}s)  [was 600 = 20.0s]"
)
print(
    f"  Solution: {solution_needed:5d} frames ({solution_needed / FPS:6.1f}s)  [was 2815 = 93.8s]"
)

total = intro_needed + problem_needed + solution_needed
print(f"  TOTAL:    {total:5d} frames ({total / FPS:6.1f}s)  [was 3595 = 119.8s]")

# Print the details for Problem acts
print(f"\n=== Problem act durations ===")
print(f"  Title act:   {TITLE_ACT_DUR:4d}f ({TITLE_ACT_DUR / FPS:.1f}s)")
print(f"  Act 1:       {ACT1_DUR:4d}f ({ACT1_DUR / FPS:.1f}s)")
print(f"  Act 2:       {ACT2_DUR:4d}f ({ACT2_DUR / FPS:.1f}s)")
print(f"  Act 3:       {ACT3_DUR:4d}f ({ACT3_DUR / FPS:.1f}s)")

print(f"\n=== Solution act durations ===")
print(f"  Title:       {SOL_TITLE_DUR:4d}f ({SOL_TITLE_DUR / FPS:.1f}s)")
print(f"  Record Once: {SOL_RECORD_DUR:4d}f ({SOL_RECORD_DUR / FPS:.1f}s)")
print(f"  AI-Powered:  {SOL_AI_DUR:4d}f ({SOL_AI_DUR / FPS:.1f}s)")
print(f"  Progress:    {SOL_PROGRESS_DUR:4d}f ({SOL_PROGRESS_DUR / FPS:.1f}s)")
print(f"  Summary:     {SOL_SUMMARY_DUR:4d}f ({SOL_SUMMARY_DUR / FPS:.1f}s)")
