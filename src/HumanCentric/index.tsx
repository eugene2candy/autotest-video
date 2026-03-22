import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Slide1 } from "./Slide1";
import { Slide2 } from "./Slide2";

/**
 * Duration per slide in frames (at 30 fps).
 * These are static slides, so the duration is just how long each is shown.
 */
const SLIDE_DURATION = 450; // 15 seconds per slide

export const HUMAN_CENTRIC_DURATION = SLIDE_DURATION * 2; // 900 frames = 30s total

/**
 * HumanCentric — a two-slide composition for engineering leadership.
 * Theme: Human-centric AI — AI makes the human better.
 *
 * Slide 1: "From Plan to Prototype: How AI Amplifies the Engineer"
 * Slide 2: "Real Story: Autotest — From Pain Point to Working Product in Days"
 */
export const HumanCentric: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence  durationInFrames={SLIDE_DURATION}>
        <Slide1 />
      </Sequence>
      <Sequence from={SLIDE_DURATION} durationInFrames={SLIDE_DURATION}>
        <Slide2 />
      </Sequence>
    </AbsoluteFill>
  );
};
