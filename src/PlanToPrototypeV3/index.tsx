import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Slide1 } from "./Slide1";
import { Slide2 } from "./Slide2";
import { Slide3 } from "./Slide3";

const SLIDE_DURATION = 450; // 15 seconds per slide

export const PLAN_TO_PROTOTYPE_V3_DURATION = SLIDE_DURATION * 3; // 1350 frames = 45s

/**
 * PlanToPrototypeV3 — 3-slide CVP presentation.
 *
 * Slide 1: "Human Thinks. AI Executes." — THINK → EXECUTE → PROVE + AI Can/Cannot
 * Slide 2: "6 Months → 2 Months" — Before/after timelines + Project Radar & Outliner Detection
 * Slide 3: "AI as Glue + What's Next" — Appium before/after + next steps
 */
export const PlanToPrototypeV3: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={SLIDE_DURATION}>
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
