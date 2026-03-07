import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { AutotestIntro } from "./AutotestIntro";
import { ProblemScene } from "./ProblemScene";
import { SolutionScene } from "./SolutionScene";

const INTRO_DURATION = 180;
const PROBLEM_DURATION = 600;
const SOLUTION_DURATION = 2815;

export const FULL_VIDEO_DURATION =
  INTRO_DURATION + PROBLEM_DURATION + SOLUTION_DURATION; // 3595

/**
 * FullVideo – combines AutotestIntro, ProblemScene, and SolutionScene
 * into a single sequential composition with no overlap.
 */
export const FullVideo: React.FC = () => {
  return (
    <AbsoluteFill>
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
    </AbsoluteFill>
  );
};
