import json, math
from pydub import AudioSegment

FPS = 30
PAUSE_FRAMES = 8  # ~0.27s pause between segments
TOTAL_FRAMES = 3595

with open("public/ssml/manifest.json", encoding="utf-8") as f:
    manifest = json.load(f)

segments = manifest["segments"]

# Get actual audio durations
for seg in segments:
    wav = f"public/audio/{seg['file'].replace('.xml', '.wav')}"
    dur_ms = len(AudioSegment.from_wav(wav))
    seg["audio_duration_ms"] = dur_ms
    seg["audio_duration_frames"] = math.ceil(dur_ms / 1000 * FPS)

# Compute sequential placement
cursor = 0  # current frame
results = []
for i, seg in enumerate(segments):
    # Start at the original intended frame OR after previous clip, whichever is later
    intended_frame = round(seg["videoStartSec"] * FPS)
    start = max(intended_frame, cursor)
    dur_frames = seg["audio_duration_frames"]
    end = start + dur_frames

    results.append(
        {
            "name": seg["file"].replace(".xml", ""),
            "original_start_sec": seg["videoStartSec"],
            "actual_start_frame": start,
            "actual_start_sec": round(start / FPS, 2),
            "dur_frames": dur_frames,
            "dur_sec": round(dur_frames / FPS, 2),
            "end_frame": end,
            "end_sec": round(end / FPS, 2),
        }
    )
    cursor = end + PAUSE_FRAMES

# Check if we exceed total
last = results[-1]
print(f"Last segment ends at frame {last['end_frame']} ({last['end_sec']}s)")
print(f"Total video frames: {TOTAL_FRAMES} ({TOTAL_FRAMES / FPS:.1f}s)")
print()
for r in results:
    drift = r["actual_start_sec"] - r["original_start_sec"]
    flag = " ** SHIFTED" if drift > 0.5 else ""
    print(
        f"{r['name']:>30s}  start={r['actual_start_frame']:5d} ({r['actual_start_sec']:6.1f}s)  dur={r['dur_frames']:4d}f ({r['dur_sec']:5.1f}s)  end={r['end_frame']:5d} ({r['end_sec']:6.1f}s)  drift={drift:+.1f}s{flag}"
    )
