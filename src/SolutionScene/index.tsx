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
import {
  RecordButton,
  DeviceWithCheck,
  AIBrain,
  EvidenceFrame,
} from "./SolutionIcons";

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
        <Sequence from={80} durationInFrames={220} premountFor={30}>
          <RecordOnceAct />
        </Sequence>

        {/* Act 2: Replay Everywhere */}
        <Sequence from={280} durationInFrames={200} premountFor={30}>
          <ReplayEverywhereAct />
        </Sequence>

        {/* Act 3: AI-Powered */}
        <Sequence from={460} durationInFrames={200} premountFor={30}>
          <AIPoweredAct />
        </Sequence>

        {/* Act 4: Summary */}
        <Sequence from={640} durationInFrames={110} premountFor={30}>
          <SummaryAct />
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
  const steps = [
    { label: "Open Autotest Portal", delay: 25, icon: "1" },
    {
      label: "Connect — Tap, Type, Swipe",
      delay: 60,
      icon: "2",
    },
    { label: "Autotest captures everything", delay: 95, icon: "3" },
  ];

  // Evidence capture animation (screenshots + XML flying into storage)
  const evidenceEntrance = spring({
    frame: frame - 120,
    fps,
    config: { damping: 15, stiffness: 200 },
  });

  const actFade = interpolate(frame, [180, 220], [1, 0], {
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
          width: "48%",
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

      {/* Right side: Evidence capture visualization */}
      <div
        style={{
          position: "absolute",
          right: "8%",
          top: "22%",
          width: "38%",
          opacity: interpolate(evidenceEntrance, [0, 1], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          transform: `scale(${interpolate(evidenceEntrance, [0, 1], [0.8, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })})`,
        }}
      >
        {/* Proxy visualization */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <ProxyFlowDiagram frame={frame - 120} />
        </div>
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
            opacity: interpolate(frame, [130, 155], [0, 1], {
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
/*  Act 2: Replay Everywhere                                           */
/* ------------------------------------------------------------------ */
const ReplayEverywhereAct: React.FC = () => {
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

  const platforms = [
    { name: "Android", devices: ["Samsung", "Pixel", "Xiaomi", "OnePlus", "Huawei", "Oppo", "Vivo", "Sony"], delay: 20 },
    { name: "iOS / iPadOS", devices: ["iPhone 16", "iPhone 15", "iPhone 14", "iPhone 13", "iPad Pro", "iPad Air", "iPad Mini", "iPhone SE"], delay: 40 },
    { name: "Windows", devices: ["Dell", "HP", "Lenovo", "Asus", "Acer", "MSI", "Surface", "Razer"], delay: 60 },
    { name: "macOS", devices: ["MacBook Pro", "MacBook Air", "iMac", "Mac Mini", "Mac Studio", "Mac Pro", "iMac 24\"", "MacBook 13\""], delay: 80 },
    { name: "Linux", devices: ["Ubuntu", "Fedora", "Debian", "Arch", "RHEL", "SUSE", "Mint", "CentOS"], delay: 100 },
    { name: "Browser", devices: ["Chrome", "Safari", "Firefox", "Edge", "Opera", "Brave", "Arc", "Vivaldi"], delay: 120 },
  ];

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
          top: "4%",
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
          One Time <span style={{ color: "#e53935" }}>Record</span>, <span style={{ color: GREEN }}>Replay</span> Everywhere
        </h2>
      </div>

      {/* Platform rows */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
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
              key={`platform-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                opacity: rowOpacity,
                transform: `translateX(${rowX}px)`,
              }}
            >
              {/* Left: platform test case label */}
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

              {/* Arrow */}
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

              {/* Right: device icons */}
              <div style={{ display: "flex", gap: 14 }}>
                {platform.devices.map((device, j) => {
                  const deviceDelay = platform.delay + 10 + j * 8;
                  const showCheck = frame > deviceDelay + 15;
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
                      key={`device-${i}-${j}`}
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

    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Act 3: AI-Powered Intelligence                                     */
/* ------------------------------------------------------------------ */
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
      title: "Smart Element Finding",
      desc: "Uses element signatures to locate elements despite UI changes",
      delay: 70,
    },
    {
      title: "Handles the Unexpected",
      desc: "Permission dialogs, system popups — AI adapts automatically",
      delay: 120,
    },
  ];

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
          <span style={{ color: MICROSOFT_BLUE }}>AI-Powered</span> Intelligence
        </h2>
      </div>

      {/* AI Brain - center */}
      <div
        style={{
          position: "absolute",
          left: "8%",
          top: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        <AIBrain scale={2} />
        <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
          <EvidenceFrame scale={1.2} />
          <EvidenceFrame scale={1.2} />
        </div>
      </div>

      {/* Feature list */}
      <div
        style={{
          position: "absolute",
          left: "42%",
          top: "20%",
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

      {/* Bottom: element signature visualization */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          opacity: interpolate(frame, [100, 125], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <ElementSignatureViz frame={frame - 100} />
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
    { label: "All Platforms", color: MICROSOFT_BLUE, delay: 10 },
    { label: "CI/CD Ready", color: GREEN, delay: 25 },
    { label: "AI-Powered", color: "#ff9800", delay: 40 },
    { label: "Easy to Scale", color: "#9c27b0", delay: 55 },
  ];

  return (
    <AbsoluteFill
      style={{
        opacity,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 32,
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: 1200,
        }}
      >
        {badges.map((badge, i) => {
          const badgeEntrance = spring({
            frame: frame - badge.delay,
            fps,
            config: { damping: 8 },
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
                padding: "24px 48px",
                borderRadius: 16,
                border: `3px solid ${badge.color}`,
                backgroundColor: `${badge.color}15`,
              }}
            >
              <span
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 36,
                  fontWeight: 700,
                  color: badge.color,
                }}
              >
                {badge.label}
              </span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
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
        backgroundColor: `${MICROSOFT_BLUE}10`,
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

/** Proxy flow diagram: Inspector -> Proxy -> Appium -> Device */
const ProxyFlowDiagram: React.FC<{ frame: number }> = ({ frame }) => {
  const arrowProgress = interpolate(frame, [0, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const boxes = [
    { label: "Appium\nInspector", color: "#e53935" },
    { label: "Autotest\nProxy", color: MICROSOFT_BLUE },
    { label: "Appium\nServer", color: "#ff9800" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
      }}
    >
      {boxes.map((box, i) => {
        const boxOpacity = interpolate(frame, [i * 12, i * 12 + 15], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        return (
          <React.Fragment key={`proxy-box-${i}`}>
            <div
              style={{
                padding: "22px 40px",
                borderRadius: 14,
                border: `3px solid ${box.color}`,
                backgroundColor: `${box.color}20`,
                opacity: boxOpacity,
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 32,
                  color: box.color,
                  fontWeight: 600,
                  whiteSpace: "pre-line",
                }}
              >
                {box.label}
              </span>
            </div>
            {i < boxes.length - 1 && (
              <svg
                width="28"
                height="40"
                viewBox="0 0 28 40"
                style={{ opacity: arrowProgress }}
              >
                <line
                  x1="14"
                  y1="0"
                  x2="14"
                  y2="30"
                  stroke="#999"
                  strokeWidth="3"
                />
                <polygon points="6,26 14,38 22,26" fill="#999" />
              </svg>
            )}
          </React.Fragment>
        );
      })}

      {/* Capture label */}
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 28,
          color: GREEN,
          fontWeight: 600,
          opacity: interpolate(frame, [40, 55], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          textAlign: "center",
        }}
      >
        Screenshots + XML + Actions captured transparently
      </div>
    </div>
  );
};

/** Element signature visualization */
const ElementSignatureViz: React.FC<{ frame: number }> = ({ frame }) => {
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const signatures = [
    { key: "text", value: '"Login"', color: "#4fc3f7" },
    { key: "a11y", value: '"login_button"', color: "#81c784" },
    { key: "parent", value: '"form_container"', color: "#ffb74d" },
    { key: "position", value: "{x: 180, y: 420}", color: "#ce93d8" },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        alignItems: "center",
        opacity,
        padding: "16px 28px",
        borderRadius: 12,
        border: `1px solid ${MICROSOFT_BLUE}40`,
        backgroundColor: `${MICROSOFT_BLUE}08`,
      }}
    >
      <span
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 18,
          color: "#555",
          fontWeight: 600,
          marginRight: 8,
        }}
      >
        Element Signature:
      </span>
      {signatures.map((sig, i) => {
        const sigOpacity = interpolate(frame, [i * 10, i * 10 + 12], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={`sig-${i}`}
            style={{
              opacity: sigOpacity,
              padding: "6px 12px",
              borderRadius: 6,
              backgroundColor: `${sig.color}20`,
              border: `1px solid ${sig.color}60`,
            }}
          >
            <span
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: 16,
                color: sig.color,
              }}
            >
              {sig.key}: {sig.value}
            </span>
          </div>
        );
      })}
    </div>
  );
};
