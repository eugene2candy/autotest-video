import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";

const MICROSOFT_BLUE = "#0078D4";

/**
 * Measure the total length of an SVG path string via a temporary DOM element.
 * Falls back to a provided default if the DOM is not available.
 */
const measurePath = (d: string, fallback: number): number => {
  try {
    const el = document.createElementNS("http://www.w3.org/2000/svg", "path");
    el.setAttribute("d", d);
    return el.getTotalLength();
  } catch {
    return fallback;
  }
};

/* ------------------------------------------------------------------ */
/*  Geometry – all values in the SVG viewBox coordinate space          */
/* ------------------------------------------------------------------ */

// Left source circle
const SRC_CX = 380;
const SRC_CY = 400;
const SRC_R = 80;

// Branch‑point (where the horizontal line meets the fan‑out)
const BRANCH_X = 960;
const BRANCH_Y = SRC_CY;

// Right target circles (top / middle / bottom)
const TARGETS = [
  { cx: 1540, cy: 150, r: 55 }, // top
  { cx: 1540, cy: 400, r: 45 }, // middle
  { cx: 1540, cy: 650, r: 55 }, // bottom
];

// SVG path: horizontal line from left circle edge to branch point
const STEM_PATH = `M ${SRC_CX + SRC_R} ${SRC_CY} L ${BRANCH_X} ${BRANCH_Y}`;

// SVG paths: curved branches from branch‑point to each target circle
const branchPath = (tx: number, ty: number, tr: number): string => {
  // Cubic bezier that curves out from the branch point to the target
  const cpx1 = BRANCH_X + (tx - BRANCH_X) * 0.45;
  const cpy1 = BRANCH_Y;
  const cpx2 = BRANCH_X + (tx - BRANCH_X) * 0.55;
  const cpy2 = ty;
  // End at the left edge of the target circle
  return `M ${BRANCH_X} ${BRANCH_Y} C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${tx - tr} ${ty}`;
};

const BRANCH_PATHS = TARGETS.map((t) => branchPath(t.cx, t.cy, t.r));

/* Approximate fallback lengths (close enough for dash calculations) */
const STEM_FALLBACK = 200;
const BRANCH_FALLBACK = 300;
const STROKE_WIDTH = 10;
const GLOW_DOT = 16;

/* ------------------------------------------------------------------ */
/*  Shared helper: render one path with draw‑on + glow‑dot animation  */
/* ------------------------------------------------------------------ */
const AnimatedPath: React.FC<{
  d: string;
  fallbackLength: number;
  progress: number; // 0‑1 draw progress
  filterId: string;
  glowGradientId: string;
}> = ({ d, fallbackLength, progress, filterId, glowGradientId }) => {
  const totalLen = measurePath(d, fallbackLength);
  const offset = totalLen - progress * totalLen;

  return (
    <>
      {/* Drawn stroke */}
      <path
        d={d}
        fill="none"
        stroke={MICROSOFT_BLUE}
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        strokeDasharray={totalLen}
        strokeDashoffset={offset}
      />
      {/* Leading glow halo */}
      {progress > 0 && progress < 1 && (
        <path
          d={d}
          fill="none"
          stroke={`url(#${glowGradientId})`}
          strokeWidth={STROKE_WIDTH + GLOW_DOT}
          strokeLinecap="round"
          strokeDasharray={`${GLOW_DOT} ${totalLen}`}
          strokeDashoffset={offset}
          filter={`url(#${filterId})`}
        />
      )}
      {/* Leading bright core */}
      {progress > 0 && progress < 1 && (
        <path
          d={d}
          fill="none"
          stroke="white"
          strokeWidth={STROKE_WIDTH - 2}
          strokeLinecap="round"
          strokeDasharray={`${4} ${totalLen}`}
          strokeDashoffset={offset}
          filter={`url(#${filterId})`}
          opacity={0.9}
        />
      )}
    </>
  );
};

/* ------------------------------------------------------------------ */
/*  Animated circle drawn with stroke‑dashoffset on an SVG <circle>   */
/* ------------------------------------------------------------------ */
const AnimatedCircle: React.FC<{
  cx: number;
  cy: number;
  r: number;
  progress: number;
  filterId: string;
  glowGradientId: string;
}> = ({ cx, cy, r, progress, filterId, glowGradientId }) => {
  const circumference = 2 * Math.PI * r;
  const offset = circumference - progress * circumference;

  return (
    <>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={MICROSOFT_BLUE}
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      {/* glow dot on circle edge */}
      {progress > 0 && progress < 1 && (
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={`url(#${glowGradientId})`}
          strokeWidth={STROKE_WIDTH + GLOW_DOT}
          strokeLinecap="round"
          strokeDasharray={`${GLOW_DOT} ${circumference}`}
          strokeDashoffset={offset}
          filter={`url(#${filterId})`}
        />
      )}
      {progress > 0 && progress < 1 && (
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="white"
          strokeWidth={STROKE_WIDTH - 2}
          strokeLinecap="round"
          strokeDasharray={`${4} ${circumference}`}
          strokeDashoffset={offset}
          filter={`url(#${filterId})`}
          opacity={0.9}
        />
      )}
    </>
  );
};

/* ------------------------------------------------------------------ */
/*  Main exported component                                            */
/* ------------------------------------------------------------------ */

export const AutotestLogo: React.FC<{
  /** Total draw duration in frames */
  drawDuration?: number;
}> = ({ drawDuration }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const dur = drawDuration ?? Math.round(2.5 * fps); // ~75 frames at 30fps

  /*
   * Timeline (all values as fraction of `dur`):
   *
   *  0.00 – 0.30  Draw the left (source) circle
   *  0.20 – 0.55  Draw the horizontal stem  (overlaps slightly with circle)
   *  0.45 – 0.80  Draw the three curved branches (staggered)
   *  0.65 – 1.00  Draw the three target circles (staggered)
   */

  const ease = Easing.inOut(Easing.quad);
  const clamp = {
    extrapolateLeft: "clamp" as const,
    extrapolateRight: "clamp" as const,
  };

  // Source circle
  const srcCircle = interpolate(frame, [0, dur * 0.3], [0, 1], {
    easing: ease,
    ...clamp,
  });

  // Stem (horizontal line)
  const stem = interpolate(frame, [dur * 0.2, dur * 0.55], [0, 1], {
    easing: ease,
    ...clamp,
  });

  // Branches (staggered by 0.06 of dur)
  const branchProgress = BRANCH_PATHS.map((_, i) =>
    interpolate(
      frame,
      [dur * (0.45 + i * 0.06), dur * (0.75 + i * 0.06)],
      [0, 1],
      {
        easing: ease,
        ...clamp,
      },
    ),
  );

  // Target circles (staggered, start when their branch is ~halfway done)
  const targetProgress = TARGETS.map((_, i) =>
    interpolate(
      frame,
      [dur * (0.6 + i * 0.06), dur * (0.88 + i * 0.06)],
      [0, 1],
      {
        easing: ease,
        ...clamp,
      },
    ),
  );

  // Post‑draw glow on everything
  const postGlow = interpolate(frame, [dur, dur + 15], [0, 1], clamp);

  const filterId = "logo-glow";
  const glowGradientId = "logo-glow-grad";

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        filter:
          postGlow > 0
            ? `drop-shadow(0 0 ${6 + postGlow * 10}px ${MICROSOFT_BLUE})`
            : undefined,
      }}
    >
      <defs>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id={glowGradientId}>
          <stop offset="0%" stopColor="white" stopOpacity={1} />
          <stop offset="60%" stopColor="white" stopOpacity={0.6} />
          <stop offset="100%" stopColor={MICROSOFT_BLUE} stopOpacity={0} />
        </radialGradient>
      </defs>

      {/* 1. Source circle */}
      <AnimatedCircle
        cx={SRC_CX}
        cy={SRC_CY}
        r={SRC_R}
        progress={srcCircle}
        filterId={filterId}
        glowGradientId={glowGradientId}
      />

      {/* 2. Horizontal stem */}
      <AnimatedPath
        d={STEM_PATH}
        fallbackLength={STEM_FALLBACK}
        progress={stem}
        filterId={filterId}
        glowGradientId={glowGradientId}
      />

      {/* 3. Curved branches */}
      {BRANCH_PATHS.map((d, i) => (
        <AnimatedPath
          key={`branch-${i}`}
          d={d}
          fallbackLength={BRANCH_FALLBACK}
          progress={branchProgress[i]}
          filterId={filterId}
          glowGradientId={glowGradientId}
        />
      ))}

      {/* 4. Target circles */}
      {TARGETS.map((t, i) => (
        <AnimatedCircle
          key={`target-${i}`}
          cx={t.cx}
          cy={t.cy}
          r={t.r}
          progress={targetProgress[i]}
          filterId={filterId}
          glowGradientId={glowGradientId}
        />
      ))}
    </svg>
  );
};
