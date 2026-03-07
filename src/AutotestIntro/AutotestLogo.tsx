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
/*  Geometry – same proportions as LogoStill (512×512 coordinate       */
/*  space).  The SVG viewBox is shifted so the logo sits in the upper  */
/*  portion of the 1920×1080 frame, leaving room for text below.       */
/* ------------------------------------------------------------------ */

const STROKE_WIDTH = 8;
const GLOW_DOT = 12;

// Source circle (left-centre)
const SRC_CX = 100;
const SRC_CY = 256;
const SRC_R = 48;

// Branch point
const BRANCH_X = 260;
const BRANCH_Y = SRC_CY;

// Target circles
const TARGETS = [
  { cx: 430, cy: 100, r: 34 }, // top
  { cx: 430, cy: 256, r: 28 }, // middle
  { cx: 430, cy: 412, r: 34 }, // bottom
];

// Stem: left circle edge → middle target left edge
const MID = TARGETS[1];
const STEM_PATH = `M ${SRC_CX + SRC_R} ${SRC_CY} L ${MID.cx - MID.r} ${MID.cy}`;

// Branches: only top and bottom (stem covers middle)
const branchPath = (tx: number, ty: number, tr: number): string => {
  const cpx1 = BRANCH_X + (tx - BRANCH_X) * 0.45;
  const cpy1 = BRANCH_Y;
  const cpx2 = BRANCH_X + (tx - BRANCH_X) * 0.55;
  const cpy2 = ty;
  return `M ${BRANCH_X} ${BRANCH_Y} C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${tx - tr} ${ty}`;
};

const BRANCH_PATHS = [TARGETS[0], TARGETS[2]].map((t) =>
  branchPath(t.cx, t.cy, t.r),
);

const STEM_FALLBACK = 280;
const BRANCH_FALLBACK = 250;

/* ------------------------------------------------------------------ */
/*  Animated path with draw-on + glow dot                              */
/* ------------------------------------------------------------------ */
const AnimatedPath: React.FC<{
  d: string;
  fallbackLength: number;
  progress: number;
  filterId: string;
  glowGradientId: string;
  useFilter?: boolean;
}> = ({
  d,
  fallbackLength,
  progress,
  filterId,
  glowGradientId,
  useFilter = true,
}) => {
  const totalLen = measurePath(d, fallbackLength);
  const offset = totalLen - progress * totalLen;

  return (
    <>
      <path
        d={d}
        fill="none"
        stroke={MICROSOFT_BLUE}
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        strokeDasharray={totalLen}
        strokeDashoffset={offset}
      />
      {progress > 0 && progress < 1 && useFilter && (
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
      {progress > 0 && progress < 1 && useFilter && (
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
/*  Animated circle                                                    */
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
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export const AutotestLogo: React.FC<{
  drawDuration?: number;
}> = ({ drawDuration }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const dur = drawDuration ?? Math.round(2.5 * fps);

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

  // Stem
  const stem = interpolate(frame, [dur * 0.2, dur * 0.55], [0, 1], {
    easing: ease,
    ...clamp,
  });

  // Branches (2 — top and bottom, staggered)
  const branchProgress = BRANCH_PATHS.map((_, i) =>
    interpolate(
      frame,
      [dur * (0.45 + i * 0.08), dur * (0.75 + i * 0.08)],
      [0, 1],
      { easing: ease, ...clamp },
    ),
  );

  // Target circles (3 — top, middle, bottom, staggered)
  const targetProgress = TARGETS.map((_, i) =>
    interpolate(
      frame,
      [dur * (0.6 + i * 0.06), dur * (0.88 + i * 0.06)],
      [0, 1],
      { easing: ease, ...clamp },
    ),
  );

  // Post-draw glow
  const postGlow = interpolate(frame, [dur, dur + 15], [0, 1], clamp);

  const filterId = "logo-glow";
  const glowGradientId = "logo-glow-grad";

  /*
   * The logo paths are in a 512×512 coordinate space (matching LogoStill).
   * We render at ~700px (≈65% of 1080 height), centred horizontally and
   * pushed into the upper portion so there is room for title + tagline below.
   */
  const logoSize = 700;

  return (
    <svg
      viewBox="0 0 512 512"
      style={{
        position: "absolute",
        top: "5%",
        left: "50%",
        transform: "translateX(-50%)",
        width: logoSize,
        height: logoSize,
        filter:
          postGlow > 0
            ? `drop-shadow(0 0 ${6 + postGlow * 10}px ${MICROSOFT_BLUE})`
            : undefined,
      }}
    >
      <defs>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
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

      {/* 2. Curved branches (top & bottom) */}
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

      {/* 3. Horizontal stem – on top of branches, no glow filter */}
      <AnimatedPath
        d={STEM_PATH}
        fallbackLength={STEM_FALLBACK}
        progress={stem}
        filterId={filterId}
        glowGradientId={glowGradientId}
        useFilter={false}
      />

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
