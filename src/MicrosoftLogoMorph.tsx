import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";

const badges = [
  { label: "AI-Powered", color: "#F25022" },
  { label: "All Platforms", color: "#7FBA00" },
  { label: "CI Ready", color: "#00A4EF" },
  { label: "Easy to Scale", color: "#FFB900" },
];

/**
 * Standalone video: 4 colored badges morph into the Microsoft logo,
 * logo slides left, "Windows 365 Experience Team" text appears,
 * then flips to "Autotest designed for daily work".
 *
 * Timeline (at 30fps):
 *   0-29:    4 badges visible as pills in a row
 *   30:      Morph begins → 2x2 grid (Microsoft logo)
 *   90:      Logo slides left, team text enters
 *   150:     Text flips to "Autotest designed for daily work"
 *   187:     Flip complete
 *   220:     End (hold on final state)
 */
export const MicrosoftLogoMorph: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ── Badge initial positions (horizontal row centered at top) ──
  const BADGE_W = 280;
  const BADGE_H = 90;
  // Row: 4×280 + 3×32 = 1216, offset = (1920-1216)/2 = 352
  const badgeInitialCenters = [
    { x: 492, y: 77 },
    { x: 804, y: 77 },
    { x: 1116, y: 77 },
    { x: 1428, y: 77 },
  ];

  // ── Morph timeline ──
  const MORPH_START = 30;
  const SLIDE_START = 90;
  const FLIP_START = 150;
  const FLIP_DUR = 37;

  // ── Microsoft logo target ──
  const LOGO_CX_CENTER = 960;
  const LOGO_CX_LEFT = 420;
  const LOGO_CY = 480;
  const LOGO_SQUARE = 100;
  const LOGO_GAP = 8;

  // Morph progress
  const morphSpring = spring({
    frame: frame - MORPH_START,
    fps,
    config: { damping: 14, stiffness: 120 },
  });
  const morphT = interpolate(morphSpring, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Slide progress: logo center→left
  const slideSpring = spring({
    frame: frame - SLIDE_START,
    fps,
    config: { damping: 14, stiffness: 100 },
  });
  const slideT = interpolate(slideSpring, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const logoCX = interpolate(slideT, [0, 1], [LOGO_CX_CENTER, LOGO_CX_LEFT]);

  const logoTargetCenters = (cx: number) => [
    {
      x: cx - (LOGO_SQUARE + LOGO_GAP) / 2,
      y: LOGO_CY - (LOGO_SQUARE + LOGO_GAP) / 2,
    }, // Red TL
    {
      x: cx + (LOGO_SQUARE + LOGO_GAP) / 2,
      y: LOGO_CY - (LOGO_SQUARE + LOGO_GAP) / 2,
    }, // Green TR
    {
      x: cx - (LOGO_SQUARE + LOGO_GAP) / 2,
      y: LOGO_CY + (LOGO_SQUARE + LOGO_GAP) / 2,
    }, // Blue BL
    {
      x: cx + (LOGO_SQUARE + LOGO_GAP) / 2,
      y: LOGO_CY + (LOGO_SQUARE + LOGO_GAP) / 2,
    }, // Yellow BR
  ];

  // Badge text fades as morph starts
  const textOpacity = interpolate(
    frame,
    [MORPH_START, MORPH_START + 10],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  // ── Team text entrance ──
  const teamTextEntrance = spring({
    frame: frame - (SLIDE_START + 5),
    fps,
    config: { damping: 14, stiffness: 120 },
  });
  const teamTextOpacity = interpolate(teamTextEntrance, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const teamTextX = interpolate(teamTextEntrance, [0, 1], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ── Flip animation ──
  const flipProgress = interpolate(
    frame,
    [FLIP_START, FLIP_START + FLIP_DUR / 2, FLIP_START + FLIP_DUR],
    [0, 1, 2],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const frontRotateX = interpolate(flipProgress, [0, 1, 2], [0, 90, 90], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const backRotateX = interpolate(flipProgress, [0, 1, 2], [-90, -90, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const showBackFace = frame >= FLIP_START + FLIP_DUR / 2;

  return (
    <AbsoluteFill>
      {/* Blurred background image (same as SolutionScene) */}
      <AbsoluteFill style={{ overflow: "hidden" }}>
        <Img
          src={staticFile("background-1.png")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(20px)",
            transform: "scale(1.1)",
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }} />
      {/* 4 morphing badges */}
      {badges.map((badge, i) => {
        const targets = logoTargetCenters(logoCX);

        const curX = interpolate(
          morphT,
          [0, 1],
          [badgeInitialCenters[i].x, targets[i].x],
        );
        const curY = interpolate(
          morphT,
          [0, 1],
          [badgeInitialCenters[i].y, targets[i].y],
        );
        const curW = interpolate(morphT, [0, 1], [BADGE_W, LOGO_SQUARE]);
        const curH = interpolate(morphT, [0, 1], [BADGE_H, LOGO_SQUARE]);
        const curRadius = interpolate(morphT, [0, 1], [16, 4]);

        const borderOpacity = interpolate(morphT, [0, 0.5], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const bgR = interpolate(
          morphT,
          [0, 1],
          [255, parseInt(badge.color.slice(1, 3), 16)],
        );
        const bgG = interpolate(
          morphT,
          [0, 1],
          [255, parseInt(badge.color.slice(3, 5), 16)],
        );
        const bgB = interpolate(
          morphT,
          [0, 1],
          [255, parseInt(badge.color.slice(5, 7), 16)],
        );
        const bgA = interpolate(morphT, [0, 1], [0.85, 1]);

        return (
          <div
            key={`badge-${i}`}
            style={{
              position: "absolute",
              left: curX - curW / 2,
              top: curY - curH / 2,
              width: curW,
              height: curH,
              borderRadius: curRadius,
              border: `3px solid ${badge.color}`,
              borderColor: `rgba(${parseInt(badge.color.slice(1, 3), 16)}, ${parseInt(badge.color.slice(3, 5), 16)}, ${parseInt(badge.color.slice(5, 7), 16)}, ${borderOpacity})`,
              backgroundColor: `rgba(${Math.round(bgR)}, ${Math.round(bgG)}, ${Math.round(bgB)}, ${bgA})`,
              boxShadow:
                morphT < 0.5
                  ? "0 8px 32px rgba(0,0,0,0.1)"
                  : `0 4px 20px ${badge.color}40`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 20,
              overflow: "hidden",
            }}
          >
            <span
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 34,
                fontWeight: 700,
                color: badge.color,
                textShadow: `0 0 8px ${badge.color}40`,
                letterSpacing: 1,
                opacity: textOpacity,
                whiteSpace: "nowrap",
              }}
            >
              {badge.label}
            </span>
          </div>
        );
      })}

      {/* Text panel — appears after logo slides left */}
      {frame > SLIDE_START && (
        <div
          style={{
            position: "absolute",
            left: LOGO_CX_LEFT + LOGO_SQUARE + 30,
            top: LOGO_CY - 50,
            width: 1100,
            height: 100,
            opacity: teamTextOpacity,
            zIndex: 20,
            perspective: 800,
          }}
        >
          {/* Front face: "Windows 365 Experience Team" */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              backfaceVisibility: "hidden",
              transform: `translateX(${teamTextX}px) rotateX(${frontRotateX}deg)`,
              transformOrigin: "center center",
            }}
          >
            <span
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 72,
                fontWeight: 600,
                color: "#333",
                letterSpacing: 1,
                whiteSpace: "nowrap",
              }}
            >
              Windows 365 Experience Team
            </span>
          </div>

          {/* Back face: "Autotest designed for daily work" */}
          {showBackFace && (
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                backfaceVisibility: "hidden",
                transform: `rotateX(${backRotateX}deg)`,
                transformOrigin: "center center",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 72,
                  fontWeight: 600,
                  letterSpacing: 1,
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ color: "#0078D4" }}>Autotest</span>
                <span style={{ color: "#444" }}> designed for daily work</span>
              </span>
            </div>
          )}
        </div>
      )}
    </AbsoluteFill>
  );
};
