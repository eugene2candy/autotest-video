import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Video } from "@remotion/media";
import { RecordButton, DeviceWithCheck } from "./SolutionIcons";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";
const GREEN = "#4caf50";
const MICROSOFT_BLUE = "#0078D4";

/* ====================================================================
 * SolutionScene – Scene 2: "How Autotest Solves It"
 *
 * Timeline (30 fps, 750 frames = 25 s):
 *   0-70     : Title "How Autotest Solves It" with blue underline
 *   70-250   : Act 1 – Record Once (recording animation + proxy capture)
 *   250-430  : Act 2 – Replay Everywhere (multi-device green checks)
 *   430-620  : Act 3 – AI-Powered Intelligence
 *   620-710  : Act 4 – Summary badges (all platforms, CI/CD)
 *   710-750  : Fade out
 * ==================================================================== */

export const SolutionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 40, durationInFrames - 5],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill>
      {/* Blurred background image */}
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
      <AbsoluteFill style={{ opacity: fadeOut }}>
        {/* Title */}
        <Sequence from={0} durationInFrames={130} premountFor={10}>
          <SectionTitle />
        </Sequence>

        {/* Act 1: Record Once */}
        <Sequence from={80} durationInFrames={430} premountFor={30}>
          <RecordOnceAct />
        </Sequence>

        {/* Act 2: AI-Powered */}
        <Sequence from={490} durationInFrames={1585} premountFor={30}>
          <AIPoweredAct />
        </Sequence>

        {/* Act 3: Summary */}
        <Sequence from={2055} durationInFrames={320} premountFor={30}>
          <SummaryAct />
        </Sequence>

        {/* Act 4: Progress */}
        <Sequence from={2355} durationInFrames={280} premountFor={30}>
          <ProgressAct />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Section Title                                                      */
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

  const underlineWidth = interpolate(frame, [15, 55], [0, 580], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const titleFadeOut = interpolate(frame, [100, 130], [1, 0], {
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
            fontSize: 110,
            fontWeight: 800,
            color: "#111",
            margin: 0,
            letterSpacing: -2,
          }}
        >
          How <span style={{ color: MICROSOFT_BLUE }}>Autotest</span> Solves It
        </h1>
        <div
          style={{
            width: underlineWidth,
            height: 6,
            backgroundColor: MICROSOFT_BLUE,
            margin: "12px auto 0",
            borderRadius: 3,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Act 1: Record Once                                                 */
/* ------------------------------------------------------------------ */
const RecordOnceAct: React.FC = () => {
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

  // Recording steps appearing one by one
  // Each bullet appears after the previous bullet's images finish
  const steps = [
    { label: "Open Autotest Portal", delay: 25, icon: "1" },
    {
      label: "Connect — Tap, Type, Swipe",
      delay: 160,
      icon: "2",
    },
    { label: "Autotest captures everything", delay: 235, icon: "3" },
  ];

  // Screenshot images grouped by bullet point:
  // Each image lasts 30 frames (1 second). Next image replaces instantly.
  //
  // Bullet 1 (fully at frame 40): 1-1-0, 1-2-0, 1-3-0, 1-4-0
  // Bullet 2 (fully at frame 175): 2-1-0, 2-2-0
  // Bullet 3 (fully at frame 250): 2-4-0, 2-5-0, 2-6-0, 2-7-0
  const screenshots = [
    // Bullet 1 images
    { src: staticFile("1-1-0.png"), start: 40 },
    { src: staticFile("1-2-0.png"), start: 70 },
    { src: staticFile("1-3-0.png"), start: 100 },
    { src: staticFile("1-4-0.png"), start: 130 },
    // Bullet 2 images
    { src: staticFile("2-1-0.png"), start: 175 },
    { src: staticFile("2-2-0.png"), start: 205 },
    // Bullet 3 images
    { src: staticFile("2-4-0.png"), start: 250 },
    { src: staticFile("2-5-0.png"), start: 280 },
    { src: staticFile("2-6-0.png"), start: 310 },
    { src: staticFile("2-7-0.png"), start: 340 },
  ];
  // Determine which screenshot is active (last one whose start <= frame)
  const activeScreenshotIndex = screenshots.reduce(
    (acc, s, i) => (frame >= s.start ? i : acc),
    -1,
  );

  // Portrait images (2-4-0 to 2-7-0, indices 6-9) need to sit lower to avoid covering the title
  const isPortraitImage = activeScreenshotIndex >= 6;

  const actFade = interpolate(frame, [385, 420], [1, 0], {
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
          top: "6%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 56,
            fontWeight: 700,
            color: "#111",
            margin: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
          }}
        >
          <span style={{ color: "#e53935" }}>Record</span>{" "}
          <span style={{ color: "#111" }}>Once</span>
          <div style={{ marginLeft: 10 }}>
            <RecordButton scale={0.8} />
          </div>
        </h2>
      </div>

      {/* Steps */}
      <div
        style={{
          position: "absolute",
          left: "8%",
          top: "22%",
          width: "38%",
        }}
      >
        {steps.map((step, i) => (
          <SolutionStep
            key={`step-${i}`}
            frame={frame}
            delay={step.delay}
            icon={step.icon}
            text={step.label}
          />
        ))}
      </div>

      {/* Right side: Screenshot showcase */}
      <div
        style={{
          position: "absolute",
          right: isPortraitImage ? "10%" : "4%",
          top: isPortraitImage ? "55%" : "70%",
          transform: "translateY(-50%)",
          maxWidth: isPortraitImage ? "55%" : "60%",
          maxHeight: "80%",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          border: "2px solid rgba(0,0,0,0.08)",
        }}
      >
        {activeScreenshotIndex >= 0 && (
          <Img
            src={screenshots[activeScreenshotIndex].src}
            style={{
              display: "block",
              maxWidth: "100%",
              maxHeight: "95vh",
            }}
          />
        )}
      </div>

      {/* Bottom-left caption below bullet points */}
      <div
        style={{
          position: "absolute",
          left: "8%",
          bottom: "12%",
        }}
      >
        <span
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 56,
            color: "#333",
            fontWeight: 700,
            opacity: interpolate(frame, [350, 370], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          No code writing needed !
        </span>
      </div>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Act 2: AI-Powered Intelligence                                     */
/* ------------------------------------------------------------------ */
/* ---- AI Terminal log lines (curated from real device logs) ---- */
const AI_TERMINAL_LINES: { text: string; color?: string }[] = [
  { text: '[Emulator] Step 1: tap - id="Add"' },
  { text: "  Waiting for page to stabilize..." },
  {
    text: "  AI readiness: loading (90%)",
    color: "#FFB900",
  },
  {
    text: "    ProgressBar indicating loading...",
    color: "#FFB900",
  },
  { text: "  Extending timeout to 30s, polling 4s" },
  { text: "  Page source: 8 -> 46 elements" },
  {
    text: "  AI readiness: ready (95%)",
    color: "#4caf50",
  },
  {
    text: "    Buttons and text fields detected.",
    color: "#4caf50",
  },
  {
    text: "    AI confirmed ready.",
    color: "#4caf50",
  },
  { text: "  Stabilized 14991ms (46 elements)" },
  { text: "  Element found in 207ms" },
  { text: "  XML match: 31/34 (91.2%)" },
  { text: "" },
  { text: "[Emulator] Step 2: sendKeys" },
  { text: "  Waiting for page to stabilize..." },
  {
    text: "  AI readiness: loading (90%)",
    color: "#FFB900",
  },
  {
    text: "    ProgressBar indicates loading...",
    color: "#FFB900",
  },
  { text: "  Page source: 8 -> 46 elements" },
  {
    text: "  AI readiness: ready (95%)",
    color: "#4caf50",
  },
  {
    text: "    Fully loaded. AI confirmed ready.",
    color: "#4caf50",
  },
  { text: "  Stabilized 12467ms (46 elements)" },
  { text: "" },
  { text: "[Emulator] Verifying trailing evidence" },
  {
    text: "  AI readiness: loading (90%)",
    color: "#FFB900",
  },
  {
    text: "    Downloading managed resources...",
    color: "#FFB900",
  },
  { text: "  Page source: 12 -> 68 elements" },
  {
    text: "  AI readiness: ready (95%)",
    color: "#4caf50",
  },
  {
    text: "    Fully loaded. AI confirmed ready.",
    color: "#4caf50",
  },
  { text: "  Stabilized 28567ms (68 elements)" },
  { text: "  XML match: 29/29 (100.0%)" },
  {
    text: "  Evidence verification passed",
    color: "#4caf50",
  },
];

/** Animated terminal window showing typed-out log lines */
const AITerminal: React.FC<{
  frame: number;
  startFrame: number;
  /** Frame (relative to parent, not local) at which the terminal begins to fade out */
  endFrame?: number;
  /** Log lines to display */
  lines?: { text: string; color?: string }[];
  /** Title bar text */
  title?: string;
}> = ({
  frame,
  startFrame,
  endFrame,
  lines = AI_TERMINAL_LINES,
  title = "autotest -- AI Evidence Evaluation",
}) => {
  const localFrame = frame - startFrame;
  if (localFrame < 0) return null;

  // If past the fade-out window, don't render at all
  const fadeOutDuration = 12; // frames to fade out
  if (endFrame !== undefined && frame > endFrame + fadeOutDuration) return null;

  // Terminal entrance animation
  const entranceOpacity = interpolate(localFrame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Terminal exit fade-out
  const exitOpacity =
    endFrame !== undefined
      ? interpolate(frame, [endFrame, endFrame + fadeOutDuration], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : 1;

  const terminalOpacity = entranceOpacity * exitOpacity;
  const terminalScale = interpolate(localFrame, [0, 12], [0.95, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // How many characters have been "typed" so far
  // Start typing after the terminal fades in (frame 8)
  const typingFrame = Math.max(0, localFrame - 8);
  const charsPerFrame = 10;
  const totalCharsTyped = typingFrame * charsPerFrame;

  // Build visible lines
  let charsRemaining = totalCharsTyped;
  const visibleLines: { text: string; color?: string; partial: boolean }[] = [];
  for (const line of lines) {
    if (charsRemaining <= 0) break;
    if (charsRemaining >= line.text.length) {
      visibleLines.push({ ...line, partial: false });
      charsRemaining -= line.text.length;
    } else {
      visibleLines.push({
        text: line.text.slice(0, charsRemaining),
        color: line.color,
        partial: true,
      });
      charsRemaining = 0;
    }
  }

  // Only show the last N lines that fit in the terminal
  const maxVisibleLines = 20;
  const displayLines = visibleLines.slice(-maxVisibleLines);

  return (
    <div
      style={{
        position: "absolute",
        left: "2.5%",
        top: "16%",
        width: "37%",
        height: "78%",
        opacity: terminalOpacity,
        transform: `scale(${terminalScale})`,
        transformOrigin: "top left",
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          height: 36,
          backgroundColor: "#2d2d2d",
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          gap: 8,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#ff5f56",
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#ffbd2e",
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#27c93f",
          }}
        />
        <span
          style={{
            fontFamily: "SF Mono, Consolas, monospace",
            fontSize: 13,
            color: "#999",
            marginLeft: 10,
          }}
        >
          {title}
        </span>
      </div>
      {/* Terminal body */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#1a1a2e",
          padding: "10px 16px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        {displayLines.map((line, i) => (
          <div
            key={`tl-${i}`}
            style={{
              fontFamily: "SF Mono, Consolas, monospace",
              fontSize: 24,
              lineHeight: 1.55,
              color: line.color || "#b0c4de",
              whiteSpace: "pre",
              minHeight: line.text === "" ? 16 : undefined,
            }}
          >
            {line.text}
            {line.partial && (
              <span
                style={{
                  display: "inline-block",
                  width: 12,
                  height: 26,
                  backgroundColor: "#b0c4de",
                  marginLeft: 1,
                  verticalAlign: "text-bottom",
                  opacity: Math.sin(localFrame * 0.4) > 0 ? 1 : 0,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Dismiss Videos Panel – 3 device dismiss videos side-by-side        */
/* ------------------------------------------------------------------ */
const DISMISS_VIDEOS = [
  { src: "emulator - dismiss.mp4", label: "Emulator" },
  { src: "pixel - dismiss.mp4", label: "Pixel" },
  { src: "sumsung - dismiss.mp4", label: "Samsung" },
] as const;

/** Shows 3 dismiss videos side-by-side in the left panel area.
 *  Wrapped in a <Sequence> by the parent so videos start at the right time.
 *  Fades out after the longest video finishes (~1230 frames). */
const DISMISS_VIDEO_DURATION = 1230; // ~41s at 30fps (longest video)
const DismissVideosPanel: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [DISMISS_VIDEO_DURATION, DISMISS_VIDEO_DURATION + 15],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const slideUp = interpolate(frame, [0, 15], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "2.5%",
        top: "50%",
        width: "37%",
        opacity: fadeIn * fadeOut,
        transform: `translateY(calc(-50% + ${slideUp}px))`,
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        gap: 8,
      }}
    >
      {DISMISS_VIDEOS.map((vid, i) => {
        // Stagger each video entrance slightly
        const stagger = i * 4;
        const itemOpacity = interpolate(
          frame,
          [stagger, stagger + 12],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        );

        return (
          <div
            key={vid.label}
            style={{
              flex: 1,
              opacity: itemOpacity,
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Video
              src={staticFile(vid.src)}
              muted
              style={{
                width: "100%",
                display: "block",
              }}
            />
            {/* Device label — pushed to bottom so all labels align */}
            <div
              style={{
                color: "#222",
                fontFamily: FONT_FAMILY,
                fontSize: 28,
                fontWeight: 700,
                textAlign: "center",
                padding: "6px 0",
                letterSpacing: 0.5,
                marginTop: "auto",
              }}
            >
              {vid.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Smart Element Panel – Workflow showing element signature matching   */
/* ------------------------------------------------------------------ */
const SIGNATURE_DEVICES = [
  { name: "Emulator", match: 18, total: 18, pct: 100, color: "#4caf50" },
  { name: "Pixel", match: 31, total: 34, pct: 91.2, color: "#FFB900" },
  { name: "Samsung", match: 19, total: 20, pct: 95.0, color: "#FFB900" },
] as const;

/** Workflow-style panel showing how an element signature recorded on one device
 *  is matched across multiple devices despite UI differences.
 *  Top-to-bottom layout: source signature card on top, arrows down, device cards below. */
const SmartElementPanel: React.FC<{ frame: number; startFrame: number }> = ({
  frame,
  startFrame,
}) => {
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;
  if (localFrame < 0) return null;

  // Entrance
  const entranceOpacity = interpolate(localFrame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const entranceScale = interpolate(localFrame, [0, 15], [0.92, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // Source card (the recorded signature) – springs in first
  const srcSpring = spring({
    frame: localFrame,
    fps,
    config: { damping: 14, stiffness: 180 },
  });
  const srcScale = interpolate(srcSpring, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Signature lines in the source card – reveal one by one
  const sigLines = [
    'accessibility_id: "Add"',
    "class: android.widget.Button",
    "parent: LinearLayout",
    "siblings: [TextView, ImageView]",
    "depth: 5 / tree_size: 18",
  ];

  const cardStyle = (borderColor: string): React.CSSProperties => ({
    borderRadius: 16,
    border: `3px solid ${borderColor}`,
    backgroundColor: "rgba(255,255,255,0.55)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    padding: "14px 20px",
    overflow: "hidden",
  });

  const monoStyle: React.CSSProperties = {
    fontFamily: "SF Mono, Consolas, monospace",
    fontSize: 35,
    lineHeight: 1.55,
    color: "#444",
  };

  // Device cards arrive with stagger
  const deviceStagger = 18;

  return (
    <div
      style={{
        position: "absolute",
        left: "1.5%",
        top: "55%",
        width: "39%",
        opacity: entranceOpacity,
        transform: `scale(${entranceScale}) translateY(-50%)`,
        transformOrigin: "center center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
      }}
    >
      {/* TOP: Source signature card */}
      <div
        style={{
          transform: `scale(${srcScale})`,
          opacity: srcScale,
          width: "100%",
        }}
      >
        <div style={{ ...cardStyle(MICROSOFT_BLUE), width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 36 }}>🔍</span>
            <span
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 32,
                fontWeight: 700,
                color: MICROSOFT_BLUE,
              }}
            >
              Recorded Element Signature
            </span>
          </div>
          {sigLines.map((line, i) => {
            const lineDelay = 8 + i * 5;
            const lineOpacity = interpolate(
              localFrame,
              [lineDelay, lineDelay + 6],
              [0, 1],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              },
            );
            return (
              <div
                key={`sig-${i}`}
                style={{ ...monoStyle, opacity: lineOpacity }}
              >
                {line}
              </div>
            );
          })}
        </div>
      </div>

      {/* MIDDLE: Downward arrows — one per device, side-by-side */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: 60,
          flexShrink: 0,
        }}
      >
        {SIGNATURE_DEVICES.map((_, i) => {
          const arrowDelay = 30 + i * deviceStagger;
          const arrowFill = interpolate(
            localFrame,
            [arrowDelay, arrowDelay + 12],
            [0, 100],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          const arrowOpacity = interpolate(
            localFrame,
            [arrowDelay, arrowDelay + 4],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          return (
            <div
              key={`arrow-${i}`}
              style={{
                width: 8,
                height: 50,
                position: "relative",
                opacity: arrowOpacity,
              }}
            >
              {/* Track */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 8,
                  height: "100%",
                  backgroundColor: `${MICROSOFT_BLUE}25`,
                  borderRadius: 4,
                }}
              />
              {/* Fill */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 8,
                  height: `${arrowFill}%`,
                  backgroundColor: MICROSOFT_BLUE,
                  borderRadius: 4,
                }}
              />
              {/* Arrowhead (downward) */}
              <div
                style={{
                  position: "absolute",
                  bottom: -10,
                  left: -6,
                  width: 0,
                  height: 0,
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderTop: `12px solid ${MICROSOFT_BLUE}`,
                  opacity: arrowFill > 85 ? 1 : 0,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* BOTTOM: Device match cards — side-by-side in a row */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 14,
          width: "100%",
        }}
      >
        {SIGNATURE_DEVICES.map((dev, i) => {
          const devDelay = 38 + i * deviceStagger;
          const devSpring = spring({
            frame: localFrame - devDelay,
            fps,
            config: { damping: 14, stiffness: 180 },
          });
          const devScale = interpolate(devSpring, [0, 1], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          // Match bar fills after device card arrives
          const barDelay = devDelay + 10;
          const barFill = interpolate(
            localFrame,
            [barDelay, barDelay + 18],
            [0, dev.pct],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );

          // Checkmark appears when bar is full
          const showCheck = localFrame > barDelay + 20;
          const checkOpacity = interpolate(
            localFrame,
            [barDelay + 20, barDelay + 26],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );

          const isFullMatch = dev.pct >= 100;

          return (
            <div
              key={`dev-${i}`}
              style={{
                flex: 1,
                transform: `scale(${devScale})`,
                opacity: devScale,
                transformOrigin: "top center",
              }}
            >
              <div style={cardStyle(dev.color)}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    marginBottom: 6,
                  }}
                >
                  <span style={{ fontSize: 32 }}>📱</span>
                  <span
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontSize: 30,
                      fontWeight: 700,
                      color: "#222",
                    }}
                  >
                    {dev.name}
                  </span>
                </div>
                {/* Match fraction */}
                <div
                  style={{
                    fontFamily: "SF Mono, Consolas, monospace",
                    fontSize: 35,
                    fontWeight: 700,
                    color: dev.color,
                    textAlign: "center",
                    marginBottom: 6,
                  }}
                >
                  {barFill >= dev.pct
                    ? `${dev.match}/${dev.total}`
                    : `${Math.floor((barFill / 100) * dev.total)}/${dev.total}`}
                  {showCheck && (
                    <span
                      style={{
                        fontSize: 24,
                        marginLeft: 8,
                        opacity: checkOpacity,
                      }}
                    >
                      ✅
                    </span>
                  )}
                </div>
                {/* Match progress bar */}
                <div
                  style={{
                    width: "100%",
                    height: 10,
                    backgroundColor: "#e8e8e8",
                    borderRadius: 5,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${barFill}%`,
                      height: "100%",
                      backgroundColor:
                        isFullMatch && barFill >= 100 ? "#4caf50" : dev.color,
                      borderRadius: 5,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary label after all devices match */}
      {(() => {
        const summaryDelay = 38 + 2 * deviceStagger + 30 + 26;
        const summaryOpacity = interpolate(
          localFrame,
          [summaryDelay, summaryDelay + 12],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        );
        return (
          <div
            style={{
              opacity: summaryOpacity,
              fontFamily: FONT_FAMILY,
              fontSize: 30,
              fontWeight: 700,
              color: "#333",
              textAlign: "center",
              marginTop: 14,
            }}
          >
            All devices matched via element signatures
          </div>
        );
      })()}
    </div>
  );
};

const AIPoweredAct: React.FC = () => {
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

  const features = [
    {
      title: "AI Evidence Evaluation",
      desc: "AI analyzes screenshots & XML to verify app state",
      delay: 20,
    },
    {
      title: "Handles the Unexpected",
      desc: "Permission dialogs, system popups — AI adapts automatically",
      delay: 140,
    },
    {
      title: "Smart Element Finding",
      desc: "Uses element signatures to locate elements despite UI changes",
      delay: 1400,
    },
  ];

  const actFade = interpolate(frame, [1550, 1585], [1, 0], {
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
          top: "6%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 56,
            fontWeight: 700,
            color: "#111",
            margin: 0,
          }}
        >
          <span style={{ color: GREEN }}>Replay</span> Everywhere w/{" "}
          <span
            style={{
              color: MICROSOFT_BLUE,
              textShadow: `0 0 8px ${MICROSOFT_BLUE}80, 0 0 20px ${MICROSOFT_BLUE}40, 0 0 40px ${MICROSOFT_BLUE}20`,
              letterSpacing: 1,
            }}
          >
            AI-Powered
          </span>{" "}
          Intelligence
        </h2>
      </div>

      {/* AI Terminal - left side (fades out when bullet 2 "Handles the Unexpected" appears) */}
      <AITerminal frame={frame} startFrame={30} endFrame={140} />

      {/* Dismiss videos - left side (appears after bullet 2 fade-in completes) */}
      <Sequence from={155}>
        <DismissVideosPanel />
      </Sequence>

      {/* Smart Element workflow - left side (appears with bullet 3) */}
      <SmartElementPanel frame={frame} startFrame={1405} />

      {/* Feature list */}
      <div
        style={{
          position: "absolute",
          left: "42%",
          top: "28%",
          width: "fit-content",
        }}
      >
        {features.map((feat, i) => (
          <AIFeatureCard
            key={`feat-${i}`}
            frame={frame}
            delay={feat.delay}
            title={feat.title}
            description={feat.desc}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Act 4: Summary                                                     */
/* ------------------------------------------------------------------ */
const SummaryAct: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });
  const opacity = interpolate(entrance, [0, 1], [0, 1]);

  const badges = [
    { label: "AI-Powered", color: "#F25022", delay: 15 },
    { label: "All Platforms", color: "#7FBA00", delay: 50 },
    { label: "CI Ready", color: "#00A4EF", delay: 85 },
    { label: "Easy to Scale", color: "#FFB900", delay: 170 },
  ];

  // Image zoom/pan timeline (badges 1-2 zoom architecture, then fade for CI Ready)
  const zoomScale = interpolate(
    frame,
    [0, 15, 20, 45, 55, 80],
    [1, 1, 3, 3, 2, 2],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const panX = interpolate(
    frame,
    [0, 15, 20, 45, 55, 80],
    [0, 0, 450, 450, -80, -80],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const panY = interpolate(
    frame,
    [0, 15, 20, 45, 55, 80],
    [0, 0, -20, -20, -260, -260],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  // Architecture fades when CI Ready badge arrives
  const imgOpacity = interpolate(frame, [80, 95], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // CI Pipeline appears with CI Ready badge (85), fades out for Easy to Scale
  const pipelineOpacity = interpolate(
    frame,
    [95, 105, 165, 175],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  // Scale Grid (test cases + device icons) appears AFTER Easy to Scale badge
  const gridOpacity = interpolate(frame, [175, 185], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        opacity,
      }}
    >
      {/* Platform grid for Easy to Scale */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          opacity: gridOpacity,
          zIndex: 10,
        }}
      >
        <ScaleGrid frame={frame - 175} />
      </div>

      {/* 4 badges at top */}
      <div
        style={{
          position: "absolute",
          top: "3%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 32,
          zIndex: 11,
        }}
      >
        {badges.map((badge, i) => {
          const badgeEntrance = spring({
            frame: frame - badge.delay,
            fps,
            config: { damping: 12, stiffness: 200 },
          });
          const scale = interpolate(badgeEntrance, [0, 1], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={`badge-${i}`}
              style={{
                transform: `scale(${scale})`,
                opacity: scale,
                width: 280,
                height: 90,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
                border: `3px solid ${badge.color}`,
                backgroundColor: `rgba(255,255,255,0.85)`,
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
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
                }}
              >
                {badge.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Architecture image below badges with zoom/pan */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          opacity: imgOpacity,
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: `scale(${zoomScale}) translate(${panX}px, ${panY}px)`,
            transformOrigin: "center center",
          }}
        >
          <Img
            src={staticFile("architecture.png")}
            style={{
              maxWidth: "95%",
              maxHeight: "100%",
              objectFit: "contain",
              borderRadius: 16,
            }}
          />
        </div>
      </div>

      {/* CI Pipeline Flow */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: pipelineOpacity,
          zIndex: 5,
        }}
      >
        <CIPipelineFlow frame={frame - 95} fps={fps} />
      </div>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Act 5: Progress                                                    */
/* ------------------------------------------------------------------ */
const PLATFORM_STATUS = [
  {
    name: "Android",
    status: "Fully Implemented",
    color: "#4caf50",
    icon: "🤖",
    pct: 100,
    delay: 15,
  },
  {
    name: "iOS / iPadOS",
    status: "Technically Verified — In Progress",
    color: "#ff7a00",
    icon: "🍎",
    pct: 45,
    delay: 30,
  },
  {
    name: "Windows",
    status: "Technically Verified — In Progress",
    color: "#ff7a00",
    icon: "🪟",
    pct: 35,
    delay: 45,
  },
  {
    name: "macOS",
    status: "On the Roadmap",
    color: "#888",
    icon: "💻",
    pct: 0,
    delay: 60,
  },
  {
    name: "Linux",
    status: "On the Roadmap",
    color: "#888",
    icon: "🐧",
    pct: 0,
    delay: 75,
  },
  {
    name: "Browser",
    status: "On the Roadmap",
    color: "#888",
    icon: "🌐",
    pct: 0,
    delay: 90,
  },
] as const;

const ProgressAct: React.FC = () => {
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

  // Fade out at the end
  const actFade = interpolate(frame, [230, 260], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Blinking cursor for AI thinking feel
  const cursorOn = Math.sin(frame * 0.35) > 0;

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
          top: "7%",
          width: "100%",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontFamily: "SF Mono, Consolas, monospace",
            fontSize: 60,
            fontWeight: 700,
            color: "#1a3a5c",
            margin: 0,
            textShadow: "0 0 12px rgba(26,58,92,0.2)",
            letterSpacing: 2,
          }}
        >
          {">"} Platform Progress
          <span
            style={{
              display: "inline-block",
              width: 22,
              height: 48,
              backgroundColor: "#1a3a5c",
              marginLeft: 6,
              verticalAlign: "text-bottom",
              opacity: cursorOn ? 0.8 : 0,
            }}
          />
        </h2>
      </div>

      {/* Platform rows */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          zIndex: 1,
        }}
      >
        {PLATFORM_STATUS.map((plat, i) => {
          const rowSpring = spring({
            frame: frame - plat.delay,
            fps,
            config: { damping: 14, stiffness: 180 },
          });
          const rowScale = interpolate(rowSpring, [0, 1], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const rowX = interpolate(rowSpring, [0, 1], [60, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          // Progress bar fill animates after row appears
          const barDelay = plat.delay + 12;
          const barFill = interpolate(
            frame,
            [barDelay, barDelay + 20],
            [0, plat.pct],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );

          // Checkmark for fully implemented
          const showCheck = plat.pct >= 100 && frame > barDelay + 22;
          const checkOpacity = interpolate(
            frame,
            [barDelay + 22, barDelay + 28],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );

          // AI-style status color mapping
          const glowColor =
            plat.pct >= 100 ? "#4caf50" : plat.pct > 0 ? "#ff7a00" : "#556677";

          return (
            <div
              key={`plat-${i}`}
              style={{
                opacity: rowScale,
                transform: `translateX(${rowX}px)`,
                borderRadius: 12,
                border: `2px solid ${glowColor}50`,
                backgroundColor: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(10px)",
                boxShadow: `0 4px 20px ${glowColor}15`,
                padding: "14px 28px",
                display: "flex",
                alignItems: "center",
                gap: 24,
              }}
            >
              {/* Icon */}
              <span style={{ fontSize: 48, flexShrink: 0 }}>{plat.icon}</span>

              {/* Name + status + bar */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "SF Mono, Consolas, monospace",
                      fontSize: 42,
                      fontWeight: 700,
                      color: "#222",
                    }}
                  >
                    {plat.name}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "SF Mono, Consolas, monospace",
                        fontSize: 30,
                        fontWeight: 600,
                        color: glowColor,
                        textShadow: `0 0 8px ${glowColor}60`,
                      }}
                    >
                      {plat.status}
                    </span>
                    {showCheck && (
                      <span style={{ fontSize: 32, opacity: checkOpacity }}>
                        ✅
                      </span>
                    )}
                  </div>
                </div>
                {/* Progress bar */}
                <div
                  style={{
                    width: "100%",
                    height: 14,
                    backgroundColor: "#e0e0e0",
                    borderRadius: 7,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${barFill}%`,
                      height: "100%",
                      backgroundColor: glowColor,
                      borderRadius: 5,
                      boxShadow: `0 0 8px ${glowColor}80`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  CI Pipeline Flow Diagram                                           */
/* ------------------------------------------------------------------ */
const PIPELINE_BLUE = "#00A4EF";

const CIPipelineFlow: React.FC<{ frame: number; fps: number }> = ({
  frame,
  fps,
}) => {
  // Step 1: Build App Package
  const step1 = spring({ frame, fps, config: { damping: 12, stiffness: 200 } });
  const s1 = interpolate(step1, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Arrow 1
  const arrow1Fill = interpolate(frame, [8, 18], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Step 2: Self-hosted agent with devices
  const step2 = spring({
    frame: frame - 12,
    fps,
    config: { damping: 12, stiffness: 200 },
  });
  const s2 = interpolate(step2, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Arrow 2
  const arrow2Fill = interpolate(frame, [20, 30], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Step 3: Testing with animation
  const step3 = spring({
    frame: frame - 24,
    fps,
    config: { damping: 12, stiffness: 200 },
  });
  const s3 = interpolate(step3, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Testing progress bar
  const testProgress = interpolate(frame, [26, 42], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const testingDots = ".".repeat(Math.max(0, Math.floor((frame / 5) % 4)));

  // Arrow 3
  const arrow3Fill = interpolate(frame, [38, 48], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Step 4: Report
  const step4 = spring({
    frame: frame - 44,
    fps,
    config: { damping: 12, stiffness: 200 },
  });
  const s4 = interpolate(step4, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Report checkmark
  const reportCheck = frame > 48;

  const boxStyle = (border: string): React.CSSProperties => ({
    borderRadius: 16,
    border: `3px solid ${border}`,
    backgroundColor: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(8px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    padding: "12px 16px",
  });

  const labelStyle: React.CSSProperties = {
    fontFamily: FONT_FAMILY,
    fontSize: 28,
    fontWeight: 700,
    color: "#111",
    textAlign: "center",
    whiteSpace: "pre-line",
    lineHeight: 1.1,
  };

  const renderArrow = (fill: number, opacity: number) => (
    <div
      style={{
        width: 100,
        position: "relative",
        opacity,
        marginLeft: 5,
        marginRight: 5,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 10,
          backgroundColor: `${PIPELINE_BLUE}30`,
          borderRadius: 5,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${fill}%`,
          height: 10,
          backgroundColor: PIPELINE_BLUE,
          borderRadius: 5,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -10,
          top: -7,
          width: 0,
          height: 0,
          borderTop: "12px solid transparent",
          borderBottom: "12px solid transparent",
          borderLeft: `14px solid ${PIPELINE_BLUE}`,
          opacity: fill > 90 ? 1 : 0,
        }}
      />
    </div>
  );

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
      {/* Step 1: Build */}
      <div
        style={{
          transform: `scale(${s1})`,
          opacity: s1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ ...boxStyle(PIPELINE_BLUE), width: 280, height: 220 }}>
          <span style={{ fontSize: 64 }}>📦</span>
          <span style={labelStyle}>Build{"\n"}App Package</span>
        </div>
      </div>

      {renderArrow(
        arrow1Fill,
        interpolate(frame, [8, 12], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      )}

      {/* Step 2: Self-Hosted Agent with devices */}
      <div
        style={{
          transform: `scale(${s2})`,
          opacity: s2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ ...boxStyle("#ff9800"), width: 380, height: 320 }}>
          <span style={{ fontSize: 56 }}>🖥️</span>
          <span style={{ ...labelStyle, fontSize: 26 }}>Self-Hosted Agent</span>
          <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
            {["📱 Android", "📱 iOS"].map((device, idx) => (
              <div
                key={`dev-${idx}`}
                style={{
                  padding: "8px 18px",
                  borderRadius: 12,
                  backgroundColor: "rgba(0,0,0,0.08)",
                  border: "1px solid #ccc",
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: 22,
                    fontWeight: 600,
                    color: "#333",
                  }}
                >
                  {device}
                </span>
              </div>
            ))}
          </div>
          <span
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 26,
              fontWeight: 600,
              color: "#666",
              marginTop: 10,
            }}
          >
            Devices attached
          </span>
        </div>
      </div>

      {renderArrow(
        arrow2Fill,
        interpolate(frame, [20, 24], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      )}

      {/* Step 3: Testing with animation */}
      <div
        style={{
          transform: `scale(${s3})`,
          opacity: s3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ ...boxStyle("#4caf50"), width: 320, height: 280 }}>
          <span style={{ fontSize: 64 }}>🧪</span>
          <span style={labelStyle}>Testing{testingDots}</span>
          {/* Progress bar */}
          <div
            style={{
              width: "85%",
              height: 14,
              backgroundColor: "#e0e0e0",
              borderRadius: 7,
              marginTop: 12,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${testProgress}%`,
                height: "100%",
                backgroundColor: "#4caf50",
                borderRadius: 7,
              }}
            />
          </div>
          <span
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 22,
              color: testProgress >= 100 ? "#4caf50" : "#888",
              fontWeight: 600,
              marginTop: 6,
            }}
          >
            {testProgress >= 100
              ? "✓ All Passed"
              : `${Math.floor(testProgress)}%`}
          </span>
        </div>
      </div>

      {renderArrow(
        arrow3Fill,
        interpolate(frame, [38, 42], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      )}

      {/* Step 4: Report Results */}
      <div
        style={{
          transform: `scale(${s4})`,
          opacity: s4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ ...boxStyle("#9c27b0"), width: 280, height: 220 }}>
          <span style={{ fontSize: 64 }}>{reportCheck ? "✅" : "📊"}</span>
          <span style={labelStyle}>Publish{"\n"}Report</span>
        </div>
      </div>
    </div>
  );
};

const ScaleGrid: React.FC<{ frame: number }> = ({ frame }) => {
  const { fps } = useVideoConfig();
  const platforms = [
    {
      name: "Android",
      devices: [
        "Samsung",
        "Pixel",
        "Xiaomi",
        "OnePlus",
        "Huawei",
        "Oppo",
        "Vivo",
        "Sony",
      ],
      delay: 0,
    },
    {
      name: "iOS / iPadOS",
      devices: [
        "iPhone 16",
        "iPhone 15",
        "iPhone 14",
        "iPhone 13",
        "iPad Pro",
        "iPad Air",
        "iPad Mini",
        "iPhone SE",
      ],
      delay: 8,
    },
    {
      name: "Windows",
      devices: [
        "Dell",
        "HP",
        "Lenovo",
        "Asus",
        "Acer",
        "MSI",
        "Surface",
        "Razer",
      ],
      delay: 16,
    },
    {
      name: "macOS",
      devices: [
        "MacBook Pro",
        "MacBook Air",
        "iMac",
        "Mac Mini",
        "Mac Studio",
        "Mac Pro",
        'iMac 24"',
        'MacBook 13"',
      ],
      delay: 24,
    },
    {
      name: "Linux",
      devices: [
        "Ubuntu",
        "Fedora",
        "Debian",
        "Arch",
        "RHEL",
        "SUSE",
        "Mint",
        "CentOS",
      ],
      delay: 32,
    },
    {
      name: "Browser",
      devices: [
        "Chrome",
        "Safari",
        "Firefox",
        "Edge",
        "Opera",
        "Brave",
        "Arc",
        "Vivaldi",
      ],
      delay: 40,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {platforms.map((platform, i) => {
        const rowEntrance = spring({
          frame: frame - platform.delay,
          fps,
          config: { damping: 15, stiffness: 200 },
        });
        const rowOpacity = interpolate(rowEntrance, [0, 1], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const rowX = interpolate(rowEntrance, [0, 1], [40, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        return (
          <div
            key={`scale-platform-${i}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              opacity: rowOpacity,
              transform: `translateX(${rowX}px)`,
            }}
          >
            <div
              style={{
                width: 380,
                flexShrink: 0,
                fontFamily: FONT_FAMILY,
                fontSize: 34,
                fontWeight: 700,
                color: "#111",
                whiteSpace: "nowrap",
              }}
            >
              {platform.name} Test Cases
            </div>
            <span
              style={{
                width: 50,
                flexShrink: 0,
                textAlign: "center",
                fontFamily: FONT_FAMILY,
                fontSize: 42,
                color: "#333",
                display: "inline-block",
                transform: `translateX(${interpolate(
                  (frame + i * 5) % 30,
                  [0, 15, 30],
                  [0, 8, 0],
                )}px)`,
                opacity: interpolate(
                  (frame + i * 5) % 30,
                  [0, 15, 30],
                  [0.5, 1, 0.5],
                ),
              }}
            >
              →
            </span>
            <div style={{ display: "flex", gap: 14 }}>
              {platform.devices.map((device, j) => {
                const deviceDelay = platform.delay + 5 + j * 4;
                const showCheck = frame > deviceDelay + 10;
                const deviceEntrance = spring({
                  frame: frame - deviceDelay,
                  fps,
                  config: { damping: 15, stiffness: 200 },
                });
                const s = interpolate(deviceEntrance, [0, 1], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                });

                return (
                  <div
                    key={`scale-device-${i}-${j}`}
                    style={{
                      transform: `scale(${s})`,
                      opacity: s,
                    }}
                  >
                    <DeviceWithCheck
                      scale={1.2}
                      label={device}
                      showCheck={showCheck}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Shared sub-components                                              */
/* ------------------------------------------------------------------ */

const SolutionStep: React.FC<{
  frame: number;
  delay: number;
  icon: string;
  text: string;
}> = ({ frame, delay, icon, text }) => {
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
        alignItems: "center",
        gap: 24,
        marginBottom: 44,
        opacity,
        transform: `translateX(${translateX}px)`,
      }}
    >
      <div
        style={{
          minWidth: 76,
          height: 76,
          borderRadius: 38,
          backgroundColor: GREEN,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: FONT_FAMILY,
          fontSize: 40,
          fontWeight: 700,
          color: "white",
        }}
      >
        {icon}
      </div>
      <span
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 48,
          color: "#111",
          fontWeight: 600,
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span>
    </div>
  );
};

const AIFeatureCard: React.FC<{
  frame: number;
  delay: number;
  title: string;
  description: string;
}> = ({ frame, delay, title, description }) => {
  const localFrame = frame - delay;
  const opacity = interpolate(localFrame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateX = interpolate(localFrame, [0, 20], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  return (
    <div
      style={{
        marginBottom: 28,
        padding: "20px 24px",
        borderRadius: 12,
        border: `2px solid ${MICROSOFT_BLUE}40`,
        backgroundColor: `rgba(255, 255, 255, 0.25)`,
        backdropFilter: "blur(16px)",
        opacity,
        transform: `translateX(${translateX}px)`,
      }}
    >
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 46,
          fontWeight: 700,
          color: MICROSOFT_BLUE,
          textShadow: `0 0 8px ${MICROSOFT_BLUE}80, 0 0 20px ${MICROSOFT_BLUE}40, 0 0 40px ${MICROSOFT_BLUE}20`,
          letterSpacing: 1,
          marginBottom: 6,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 34,
          color: "#444",
          lineHeight: 1.4,
        }}
      >
        {description}
      </div>
    </div>
  );
};
