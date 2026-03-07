import json, math
from pydub import AudioSegment

FPS = 30
with open("public/ssml/manifest.json", encoding="utf-8") as f:
    segments = json.load(f)["segments"]

for seg in segments:
    wav = "public/audio/" + seg["file"].replace(".xml", ".wav")
    seg["dur_ms"] = len(AudioSegment.from_wav(wav))

print(f"{'File':>35s}  {'Window':>7s}  {'Audio':>7s}  {'Status'}")
print("-" * 75)
total_audio = 0
for i, seg in enumerate(segments):
    start_sec = seg["videoStartSec"]
    # Use next segment's start as the real end, or videoEndSec for last
    if i + 1 < len(segments):
        next_start = segments[i + 1]["videoStartSec"]
    else:
        next_start = 119.83
    gap_to_next = next_start - start_sec
    audio_sec = seg["dur_ms"] / 1000
    total_audio += audio_sec
    overflow = audio_sec - gap_to_next
    if overflow > 0.3:
        print(
            f"{seg['file']:>35s}  {gap_to_next:6.1f}s  {audio_sec:6.1f}s  OVERFLOW {overflow:+.1f}s"
        )
    else:
        print(f"{seg['file']:>35s}  {gap_to_next:6.1f}s  {audio_sec:6.1f}s  OK")

print(f"\nTotal audio duration: {total_audio:.1f}s")
print(f"Video duration: 119.8s")
