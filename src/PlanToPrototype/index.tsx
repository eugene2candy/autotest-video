import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Slide1 } from "./Slide1";
import { Slide2 } from "./Slide2";
import { Slide3 } from "./Slide3";

/**
 * Duration per slide in frames (at 30 fps).
 * Static slides — duration is how long each is displayed.
 */
const SLIDE_DURATION = 450; // 15 seconds per slide

export const PLAN_TO_PROTOTYPE_DURATION = SLIDE_DURATION * 3; // 1350 frames = 45s total

/**
 * PlanToPrototype — a three-slide composition for engineering leadership.
 * Three themes:
 *   1. Human-centric — The Engineer Decides, AI Accelerates
 *   2. AI shortens the path — From 6 Months to 2 Months
 *   3. AI links the workflow — The Intelligent Glue Layer
 */
export const PlanToPrototype: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence  durationInFrames={SLIDE_DURATION}>
        <Slide1 />
      </Sequence>
      <Sequence from={SLIDE_DURATION} durationInFrames={SLIDE_DURATION}>
        <Slide2 />
      </Sequence>
      <Sequence from={SLIDE_DURATION * 2} durationInFrames={SLIDE_DURATION}>
        <Slide3 />
      </Sequence>
    </AbsoluteFill>
  );
};
