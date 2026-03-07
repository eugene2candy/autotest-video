"""Analyze gaps between narration clips to find where time can be saved."""

clips = [
    ("s1-intro-01", 0, 59),
    ("s1-intro-02", 69, 227),
    ("s1-intro-03", 237, 336),
    ("s2-problem-01", 381, 486),
    ("s2-problem-02", 521, 820),
    ("s2-problem-03", 830, 1082),
    ("s2-problem-04", 1142, 1305),
    ("s2-problem-05", 1315, 1480),
    ("s2-problem-06", 1490, 1632),
    ("s2-problem-07", 1692, 1815),
    ("s2-problem-08", 1825, 1926),
    ("s3-solution-01", 2011, 2091),
    ("s3-solution-02", 2141, 2227),
    ("s3-solution-03", 2237, 2417),
    ("s3-solution-04", 2427, 2577),
    ("s3-solution-05", 2587, 2847),
    ("s3-solution-06", 2857, 2921),
    ("s3-solution-07", 2976, 3107),
    ("s3-solution-08", 3117, 3388),
    ("s3-solution-09", 3398, 3625),
    ("s3-solution-10", 3635, 3950),
    ("s3-solution-11", 3960, 4341),
    ("s3-solution-12", 4351, 4833),
    ("s3-solution-13", 4941, 5018),
    ("s3-solution-14", 5028, 5375),
    ("s3-solution-15", 5430, 5502),
    ("s3-solution-16", 5512, 5587),
    ("s3-solution-17", 5597, 5810),
    ("s3-solution-18", 5820, 5980),
    ("s3-solution-19", 5990, 6140),
    ("s3-solution-20", 6150, 6253),
]

SCENE_TRANSITIONS = {
    ("s1-intro-03", "s2-problem-01"),
    ("s2-problem-08", "s3-solution-01"),
}

ACT_TRANSITIONS = {
    ("s2-problem-01", "s2-problem-02"),
    ("s2-problem-03", "s2-problem-04"),
    ("s2-problem-06", "s2-problem-07"),
    ("s3-solution-01", "s3-solution-02"),
    ("s3-solution-06", "s3-solution-07"),
    ("s3-solution-12", "s3-solution-13"),
    ("s3-solution-14", "s3-solution-15"),
}

total_gap = 0
total_narration = sum(e - s for _, s, e in clips)
big_gaps = []

print(
    f"Current: 6298 frames (209.9s). Target: 5400 frames (180s). Need to cut: 898 frames (29.9s)"
)
print(f"Total narration audio: {total_narration} frames ({total_narration / 30:.1f}s)")
print()
print(f"{'Transition':<50s} {'Gap':>5s} {'Type':<25s}")
print("-" * 85)

for i in range(len(clips) - 1):
    name_a, start_a, end_a = clips[i]
    name_b, start_b, end_b = clips[i + 1]
    gap = start_b - end_a
    total_gap += gap

    pair = (name_a, name_b)
    if pair in SCENE_TRANSITIONS:
        typ = "SCENE TRANSITION"
    elif pair in ACT_TRANSITIONS:
        typ = "ACT TRANSITION"
    else:
        typ = "intra-act pause"

    marker = " ***" if gap > 15 else ""
    print(f"  {name_a} -> {name_b:<25s} {gap:>5d} {typ:<25s}{marker}")
    if gap > 10:
        big_gaps.append((name_a, name_b, gap, typ))

tail = 6298 - 6253
print(f"\nTotal inter-clip gap: {total_gap} frames ({total_gap / 30:.1f}s)")
print(f"Tail after last clip: {tail} frames ({tail / 30:.1f}s)")
print(f"Total dead time: {total_gap + tail} frames ({(total_gap + tail) / 30:.1f}s)")
print(
    f"\nNarration: {total_narration / 30:.1f}s + dead time: {(total_gap + tail) / 30:.1f}s = {(total_narration + total_gap + tail) / 30:.1f}s"
)

print(f"\n=== Big gaps (>15 frames) ===")
for a, b, gap, typ in big_gaps:
    print(f"  {a} -> {b}: {gap} frames ({gap / 30:.1f}s) [{typ}]")
