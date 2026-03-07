import React from "react";
import { AbsoluteFill, Audio, Sequence, Series, staticFile } from "remotion";
import { AutotestIntro } from "./AutotestIntro";
import { ProblemScene } from "./ProblemScene";
import { SolutionScene } from "./SolutionScene";

const INTRO_DURATION = 326;
const PROBLEM_DURATION = 1369;
const SOLUTION_DURATION = 3863;

export const FULL_VIDEO_DURATION =
  INTRO_DURATION + PROBLEM_DURATION + SOLUTION_DURATION; // 5558

/**
 * Narration audio segments mapped to their absolute start frame in the full video.
 * Computed by compute_placements.py — each clip plays sequentially with ~1-frame pauses,
 * no overlaps verified.
 * Each entry: [filename (without .xml, with .wav), startFrame]
 */
const NARRATION_SEGMENTS: [string, number][] = [
  ["s1-intro-01_0.0s", 0],
  ["s1-intro-02_1.5s", 60],
  ["s1-intro-03_4.0s", 219],
  ["s2-problem-01_6.0s", 329],
  ["s2-problem-02_9.3s", 437],
  ["s2-problem-03_12.5s", 737],
  ["s2-problem-04_16.7s", 992],
  ["s2-problem-05_19.0s", 1156],
  ["s2-problem-06_21.0s", 1322],
  ["s2-problem-07_22.7s", 1467],
  ["s2-problem-08_24.5s", 1591],
  ["s3-solution-01_26.0s", 1698],
  ["s3-solution-02_29.7s", 1781],
  ["s3-solution-03_31.5s", 1868],
  ["s3-solution-04_34.5s", 2049],
  ["s3-solution-05_37.5s", 2200],
  ["s3-solution-06_41.0s", 2461],
  ["s3-solution-07_43.0s", 2528],
  ["s3-solution-08_45.5s", 2660],
  ["s3-solution-09_50.0s", 2932],
  ["s3-solution-10_53.0s", 3160],
  ["s3-solution-11_60.0s", 3476],
  ["s3-solution-12_87.0s", 3858],
  ["s3-solution-13_95.0s", 4346],
  ["s3-solution-14_97.0s", 4424],
  ["s3-solution-15_104.0s", 4774],
  ["s3-solution-16_105.5s", 4847],
  ["s3-solution-17_107.0s", 4923],
  ["s3-solution-18_110.0s", 5137],
  ["s3-solution-19_114.5s", 5298],
  ["s3-solution-20_117.0s", 5449],
];

/**
 * FullVideo – combines AutotestIntro, ProblemScene, and SolutionScene
 * into a single sequential composition with no overlap, plus narration audio.
 */
export const FullVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Visual scenes */}
      <Series>
        <Series.Sequence durationInFrames={INTRO_DURATION} premountFor={10}>
          <AutotestIntro />
        </Series.Sequence>
        <Series.Sequence durationInFrames={PROBLEM_DURATION} premountFor={30}>
          <ProblemScene />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SOLUTION_DURATION} premountFor={30}>
          <SolutionScene />
        </Series.Sequence>
      </Series>

      {/* Narration audio overlay */}
      {NARRATION_SEGMENTS.map(([name, startFrame]) => (
        <Sequence key={name} from={startFrame}>
          <Audio src={staticFile(`audio/${name}.wav`)} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
