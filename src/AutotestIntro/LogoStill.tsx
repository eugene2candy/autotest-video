import React from "react";
import { AbsoluteFill } from "remotion";

const MICROSOFT_BLUE = "#0078D4";

/*
 * Square-friendly logo geometry.
 * Everything is defined in a 512x512 coordinate space so the viewBox
 * maps 1:1 to the output size – no awkward scaling.
 */

const STROKE_WIDTH = 8;

// Source circle (left-centre)
const SRC_CX = 100;
const SRC_CY = 256;
const SRC_R = 48;

// Branch point (centre of the square)
const BRANCH_X = 260;
const BRANCH_Y = SRC_CY;

// Target circles (right side, spread vertically)
const TARGETS = [
  { cx: 430, cy: 100, r: 34 },
  { cx: 430, cy: 256, r: 28 },
  { cx: 430, cy: 412, r: 34 },
];

// Stem runs all the way from left circle to the middle target circle
const MID = TARGETS[1];
const STEM_PATH = `M ${SRC_CX + SRC_R} ${SRC_CY} L ${MID.cx - MID.r} ${MID.cy}`;

const branchPath = (tx: number, ty: number, tr: number): string => {
  const cpx1 = BRANCH_X + (tx - BRANCH_X) * 0.45;
  const cpy1 = BRANCH_Y;
  const cpx2 = BRANCH_X + (tx - BRANCH_X) * 0.55;
  const cpy2 = ty;
  return `M ${BRANCH_X} ${BRANCH_Y} C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${tx - tr} ${ty}`;
};

// Only top and bottom branches -- the stem covers the middle path
const BRANCH_PATHS = [TARGETS[0], TARGETS[2]].map((t) =>
  branchPath(t.cx, t.cy, t.r),
);

/**
 * Static, fully-drawn Autotest logo for use with <Still>.
 * Renders at whatever composition size is set (512x512 recommended).
 */
export const LogoStill: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "transparent" }}>
      <svg viewBox="0 0 512 512" style={{ width: "100%", height: "100%" }}>
        <defs>
          <filter id="still-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Source circle */}
        <circle
          cx={SRC_CX}
          cy={SRC_CY}
          r={SRC_R}
          fill="none"
          stroke={MICROSOFT_BLUE}
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          filter="url(#still-glow)"
        />
        {/* Branches */}
        {BRANCH_PATHS.map((d, i) => (
          <path
            key={`b-${i}`}
            d={d}
            fill="none"
            stroke={MICROSOFT_BLUE}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            filter="url(#still-glow)"
          />
        ))}
        {/* Target circles */}
        {TARGETS.map((t, i) => (
          <circle
            key={`t-${i}`}
            cx={t.cx}
            cy={t.cy}
            r={t.r}
            fill="none"
            stroke={MICROSOFT_BLUE}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            filter="url(#still-glow)"
          />
        ))}
        {/* Stem – rendered last (on top), no filter so it stays crisp */}
        <path
          d={STEM_PATH}
          fill="none"
          stroke={MICROSOFT_BLUE}
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
        />
      </svg>
    </AbsoluteFill>
  );
};
