import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { TypingCharacter, DeviceScreen, TickingClock } from "./Character";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";
const RED = "#e53935";
const DARK_BG = "#0a0a0a";

/* ====================================================================
 * ProblemScene – Scene 1: "The Problem with UI Testing Today"
 *
 * Timeline (30 fps, 600 frames = 20 s):
 *   0-60     : Title "The Problem" fades in with red underline
 *   60-240   : Act 1 – Manual Testing pain (buddy typing, clock ticking)
 *   240-420  : Act 2 – Hard-coded scripts breaking across devices
 *   420-540  : Act 3 – Cannot scale (device wall + red Xs)
 *   540-600  : Fade out
 * ==================================================================== */

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 30, durationInFrames - 5],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ backgroundColor: DARK_BG }}>
      <AbsoluteFill style={{ opacity: fadeOut }}>
        {/* ---- ACT 0: Section title ---- */}
        <Sequence from={0} durationInFrames={120} premountFor={10}>
          <SectionTitle />
        </Sequence>

        {/* ---- ACT 1: Manual testing burden ---- */}
        <Sequence from={80} durationInFrames={220} premountFor={30}>
          <ManualTestingAct />
        </Sequence>

        {/* ---- ACT 2: Hard-coded scripts break ---- */}
        <Sequence from={280} durationInFrames={200} premountFor={30}>
          <BrittleScriptsAct />
        </Sequence>

        {/* ---- ACT 3: Cannot scale ---- */}
        <Sequence from={460} durationInFrames={140} premountFor={30}>
          <CannotScaleAct />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Section Title: "The Problem"                                       */
/* ------------------------------------------------------------------ */
const SectionTitle: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 25,
  });

  const opacity = interpolate(titleProgress, [0, 1], [0, 1]);
  const translateY = interpolate(titleProgress, [0, 1], [40, 0]);

  // Red underline draws on
  const underlineWidth = interpolate(frame, [15, 50], [0, 360], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // Fade out the title to make room for acts
  const titleFadeOut = interpolate(frame, [90, 120], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: opacity * titleFadeOut,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 120,
            fontWeight: 800,
            color: "white",
            margin: 0,
            letterSpacing: -2,
          }}
        >
          The Problem
        </h1>
        {/* Red underline */}
        <div
          style={{
            width: underlineWidth,
            height: 6,
            backgroundColor: RED,
            margin: "12px auto 0",
            borderRadius: 3,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Act 1: Manual testing – buddy typing frantically                   */
/* ------------------------------------------------------------------ */
const ManualTestingAct: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const entrance = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });
  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateY = interpolate(entrance, [0, 1], [60, 0]);

  // Character mood transitions: neutral -> stressed -> exhausted
  const mood: "neutral" | "stressed" | "exhausted" =
    frame < 60 ? "neutral" : frame < 140 ? "stressed" : "exhausted";

  // Subtitle text fades in
  const subtitleOpacity = interpolate(frame, [20, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Clock appears at frame 50
  const clockEntrance = spring({
    frame: frame - 50,
    fps,
    config: { damping: 15, stiffness: 200 },
  });
  const clockScale = interpolate(clockEntrance, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // "Cannot scale" caption
  const captionOpacity = interpolate(frame, [80, 105], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out this act
  const actFade = interpolate(frame, [180, 220], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        opacity: opacity * actFade,
        transform: `translateY(${translateY}px)`,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Left side: character */}
      <div
        style={{
          position: "absolute",
          left: "15%",
          top: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TypingCharacter scale={2.5} mood={mood} />
        <div
          style={{
            marginTop: 20,
            fontFamily: FONT_FAMILY,
            fontSize: 40,
            color: "white",
            fontWeight: 700,
            opacity: subtitleOpacity,
            textAlign: "center",
          }}
        >
          UI Test Vendor
        </div>
      </div>

      {/* Right side: problem description */}
      <div
        style={{
          position: "absolute",
          right: "3%",
          top: "12%",
          width: "55%",
        }}
      >
        <ProblemBullet
          frame={frame}
          delay={10}
          icon="1"
          text="UI testing fully relies on human manual testing"
        />
        <ProblemBullet
          frame={frame}
          delay={50}
          icon="2"
          text="Repetitive, slow, and error-prone"
        />
        <ProblemBullet
          frame={frame}
          delay={90}
          icon="3"
          text="Every device, every OS version, every update..."
          subtext="tested by hand, again and again"
        />
      </div>

      {/* Clock - time wasted (top-left of the buddy) */}
      <div
        style={{
          position: "absolute",
          left: "12%",
          top: "18%",
          transform: `scale(${clockScale})`,
          opacity: captionOpacity,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <TickingClock scale={1} />
        <span
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 22,
            color: RED,
            fontWeight: 600,
          }}
        >
          Time wasted
        </span>
      </div>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Act 2: Hard-coded scripts break across devices                     */
/* ------------------------------------------------------------------ */
const BrittleScriptsAct: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });
  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateY = interpolate(entrance, [0, 1], [60, 0]);

  // Code block typing animation
  const codeLines = [
    'driver.findElement(By.id("btn_login"))',
    "  .click();",
    'driver.findElement(By.xpath("//div[@class=',
    "  'submit-form']/button[2]\")).sendKeys(...);",
    "// Breaks on Samsung, Pixel, Xiaomi...",
  ];

  const totalChars = codeLines.join("").length;
  const charsTyped = Math.min(
    totalChars,
    Math.floor((frame * totalChars) / 90),
  );

  // Red flash when code "breaks"
  const breakFrame = 100;
  const breakFlash =
    frame > breakFrame
      ? interpolate(
          Math.sin(((frame - breakFrame) / fps) * 8),
          [-1, 1],
          [0, 0.3],
        )
      : 0;

  // Devices with red X appearing one by one
  const devices = [
    { label: "Samsung", delay: 110 },
    { label: "Pixel", delay: 125 },
    { label: "Xiaomi", delay: 140 },
    { label: "iOS 17", delay: 155 },
    { label: "iOS 16", delay: 170 },
  ];

  // Act fade out
  const actFade = interpolate(frame, [165, 200], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        opacity: opacity * actFade,
        transform: `translateY(${translateY}px)`,
      }}
    >
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            margin: 0,
          }}
        >
          Hard-Coded Scripts Are <span style={{ color: RED }}>Fragile</span>
        </h2>
      </div>

      {/* Code block */}
      <div
        style={{
          position: "absolute",
          left: "8%",
          top: "22%",
          width: "50%",
          backgroundColor: `rgba(229, 57, 53, ${breakFlash})`,
          border: "2px solid #333",
          borderRadius: 12,
          padding: 28,
          transition: "none",
        }}
      >
        <div
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: 34,
            color: "#4fc3f7",
            lineHeight: 1.9,
            whiteSpace: "pre-wrap",
          }}
        >
          {renderTypedCode(codeLines, charsTyped)}
          <span
            style={{
              opacity: interpolate(frame % 20, [0, 10, 20], [1, 0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            |
          </span>
        </div>
      </div>

      {/* Device wall - breaking one by one */}
      <div
        style={{
          position: "absolute",
          right: "6%",
          top: "25%",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 40,
            color: "#999",
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          Different devices, different results:
        </span>
        <div style={{ display: "flex", gap: 20, flexWrap: "nowrap" }}>
          {devices.map((d, i) => {
            const deviceEntrance = spring({
              frame: frame - d.delay,
              fps,
              config: { damping: 15, stiffness: 200 },
            });
            const s = interpolate(deviceEntrance, [0, 1], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <div
                key={`device-${i}`}
                style={{ transform: `scale(${s})`, opacity: s }}
              >
                <DeviceScreen
                  scale={1.5}
                  broken={frame > d.delay + 10}
                  label={d.label}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom caption */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 46,
            color: RED,
            fontWeight: 600,
            opacity: interpolate(frame, [130, 155], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Especially Android — so many OEM customized devices
        </span>
      </div>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Act 3: Cannot scale                                                */
/* ------------------------------------------------------------------ */
const CannotScaleAct: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });
  const opacity = interpolate(entrance, [0, 1], [0, 1]);

  // Devices multiply: start with 2, grow to many
  const deviceCount = Math.min(18, 2 + Math.floor(frame / 8));

  // Red "X" slam effect on the whole grid
  const slamFrame = 80;
  const slamScale =
    frame > slamFrame
      ? spring({
          frame: frame - slamFrame,
          fps,
          config: { damping: 8 },
        })
      : 0;

  return (
    <AbsoluteFill
      style={{
        opacity,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            margin: 0,
          }}
        >
          This Doesn't <span style={{ color: RED }}>Scale</span>
        </h2>
      </div>

      {/* Device grid growing */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 18,
          justifyContent: "center",
          maxWidth: 1200,
          marginTop: 40,
        }}
      >
        {Array.from({ length: deviceCount }).map((_, i) => {
          const deviceSpring = spring({
            frame: frame - i * 4,
            fps,
            config: { damping: 15, stiffness: 200 },
          });
          return (
            <div
              key={`scale-device-${i}`}
              style={{
                transform: `scale(${deviceSpring})`,
                opacity: deviceSpring,
              }}
            >
              <DeviceScreen
                scale={1.5}
                label={["Android", "iOS", "Win", "Mac", "Linux", "Web"][i % 6]}
              />
            </div>
          );
        })}
      </div>

      {/* Big red X overlay */}
      {frame > slamFrame && (
        <div
          style={{
            position: "absolute",
            transform: `scale(${slamScale})`,
            opacity: slamScale * 0.8,
          }}
        >
          <svg width="400" height="400" viewBox="0 0 400 400">
            <line
              x1="50"
              y1="50"
              x2="350"
              y2="350"
              stroke={RED}
              strokeWidth="20"
              strokeLinecap="round"
            />
            <line
              x1="350"
              y1="50"
              x2="50"
              y2="350"
              stroke={RED}
              strokeWidth="20"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {/* Bottom text */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 46,
            color: "#999",
            opacity: interpolate(frame, [40, 65], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          More devices = more manual effort = more bugs slipping through
        </span>
      </div>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Shared sub-components                                              */
/* ------------------------------------------------------------------ */

/** Animated problem bullet point */
const ProblemBullet: React.FC<{
  frame: number;
  delay: number;
  icon: string;
  text: string;
  subtext?: string;
}> = ({ frame, delay, icon, text, subtext }) => {
  const localFrame = frame - delay;
  const opacity = interpolate(localFrame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateX = interpolate(localFrame, [0, 15], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 24,
        marginBottom: 48,
        opacity,
        transform: `translateX(${translateX}px)`,
      }}
    >
      <div
        style={{
          minWidth: 64,
          height: 64,
          borderRadius: 32,
          backgroundColor: RED,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: FONT_FAMILY,
          fontSize: 32,
          fontWeight: 700,
          color: "white",
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 48,
            color: "white",
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          {text}
        </div>
        {subtext && (
          <div
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 36,
              color: "#999",
              fontWeight: 400,
              marginTop: 6,
            }}
          >
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
};

/** Helper: render typed code with color */
function renderTypedCode(lines: string[], charsTyped: number): React.ReactNode {
  let remaining = charsTyped;
  const result: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    if (remaining <= 0) break;
    const lineChars = Math.min(remaining, lines[i].length);
    const lineText = lines[i].slice(0, lineChars);
    remaining -= lineChars;

    const isComment = lineText.trimStart().startsWith("//");
    result.push(
      <div
        key={`codeline-${i}`}
        style={{ color: isComment ? "#666" : "#4fc3f7" }}
      >
        {lineText}
      </div>,
    );
  }

  return result;
}
