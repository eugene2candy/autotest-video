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

        {/* Act 2: AI-Powered */}
        <Sequence from={280} durationInFrames={200} premountFor={30}>
          <AIPoweredAct />
        </Sequence>

        {/* Act 3: Summary */}
        <Sequence from={460} durationInFrames={320} premountFor={30}>
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
/*  Act 2: AI-Powered Intelligence                                     */
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
      title: "Handles the Unexpected",
      desc: "Permission dialogs, system popups — AI adapts automatically",
      delay: 70,
    },
    {
      title: "Smart Element Finding",
      desc: "Uses element signatures to locate elements despite UI changes",
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
          <span style={{ color: GREEN }}>Replay</span> Everywhere w/ <span style={{ color: MICROSOFT_BLUE, textShadow: `0 0 8px ${MICROSOFT_BLUE}80, 0 0 20px ${MICROSOFT_BLUE}40, 0 0 40px ${MICROSOFT_BLUE}20`, letterSpacing: 1 }}>AI-Powered</span> Intelligence
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
  const pipelineOpacity = interpolate(frame, [95, 105, 165, 175], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

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
/*  CI Pipeline Flow Diagram                                           */
/* ------------------------------------------------------------------ */
const PIPELINE_BLUE = "#00A4EF";

const CIPipelineFlow: React.FC<{ frame: number; fps: number }> = ({
  frame,
  fps,
}) => {
  // Step 1: Build App Package
  const step1 = spring({ frame, fps, config: { damping: 12, stiffness: 200 } });
  const s1 = interpolate(step1, [0, 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Arrow 1
  const arrow1Fill = interpolate(frame, [8, 18], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Step 2: Self-hosted agent with devices
  const step2 = spring({ frame: frame - 12, fps, config: { damping: 12, stiffness: 200 } });
  const s2 = interpolate(step2, [0, 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Arrow 2
  const arrow2Fill = interpolate(frame, [20, 30], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Step 3: Testing with animation
  const step3 = spring({ frame: frame - 24, fps, config: { damping: 12, stiffness: 200 } });
  const s3 = interpolate(step3, [0, 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Testing progress bar
  const testProgress = interpolate(frame, [26, 42], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const testingDots = ".".repeat(Math.max(0, Math.floor((frame / 5) % 4)));

  // Arrow 3
  const arrow3Fill = interpolate(frame, [38, 48], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Step 4: Report
  const step4 = spring({ frame: frame - 44, fps, config: { damping: 12, stiffness: 200 } });
  const s4 = interpolate(step4, [0, 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

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
    <div style={{ width: 100, position: "relative", opacity, marginLeft: 5, marginRight: 5 }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 10, backgroundColor: `${PIPELINE_BLUE}30`, borderRadius: 5 }} />
      <div style={{ position: "absolute", top: 0, left: 0, width: `${fill}%`, height: 10, backgroundColor: PIPELINE_BLUE, borderRadius: 5 }} />
      <div style={{ position: "absolute", right: -10, top: -7, width: 0, height: 0, borderTop: "12px solid transparent", borderBottom: "12px solid transparent", borderLeft: `14px solid ${PIPELINE_BLUE}`, opacity: fill > 90 ? 1 : 0 }} />
    </div>
  );

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
      {/* Step 1: Build */}
      <div style={{ transform: `scale(${s1})`, opacity: s1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ ...boxStyle(PIPELINE_BLUE), width: 280, height: 220 }}>
          <span style={{ fontSize: 64 }}>📦</span>
          <span style={labelStyle}>Build{"\n"}App Package</span>
        </div>
      </div>

      {renderArrow(arrow1Fill, interpolate(frame, [8, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }))}

      {/* Step 2: Self-Hosted Agent with devices */}
      <div style={{ transform: `scale(${s2})`, opacity: s2, display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                <span style={{ fontFamily: FONT_FAMILY, fontSize: 22, fontWeight: 600, color: "#333" }}>{device}</span>
              </div>
            ))}
          </div>
          <span style={{ fontFamily: FONT_FAMILY, fontSize: 26, fontWeight: 600, color: "#666", marginTop: 10 }}>Devices attached</span>
        </div>
      </div>

      {renderArrow(arrow2Fill, interpolate(frame, [20, 24], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }))}

      {/* Step 3: Testing with animation */}
      <div style={{ transform: `scale(${s3})`, opacity: s3, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ ...boxStyle("#4caf50"), width: 320, height: 280 }}>
          <span style={{ fontSize: 64 }}>🧪</span>
          <span style={labelStyle}>Testing{testingDots}</span>
          {/* Progress bar */}
          <div style={{ width: "85%", height: 14, backgroundColor: "#e0e0e0", borderRadius: 7, marginTop: 12, overflow: "hidden" }}>
            <div style={{ width: `${testProgress}%`, height: "100%", backgroundColor: "#4caf50", borderRadius: 7 }} />
          </div>
          <span style={{ fontFamily: FONT_FAMILY, fontSize: 22, color: testProgress >= 100 ? "#4caf50" : "#888", fontWeight: 600, marginTop: 6 }}>
            {testProgress >= 100 ? "✓ All Passed" : `${Math.floor(testProgress)}%`}
          </span>
        </div>
      </div>

      {renderArrow(arrow3Fill, interpolate(frame, [38, 42], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }))}

      {/* Step 4: Report Results */}
      <div style={{ transform: `scale(${s4})`, opacity: s4, display: "flex", flexDirection: "column", alignItems: "center" }}>
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
    { name: "Android", devices: ["Samsung", "Pixel", "Xiaomi", "OnePlus", "Huawei", "Oppo", "Vivo", "Sony"], delay: 0 },
    { name: "iOS / iPadOS", devices: ["iPhone 16", "iPhone 15", "iPhone 14", "iPhone 13", "iPad Pro", "iPad Air", "iPad Mini", "iPhone SE"], delay: 8 },
    { name: "Windows", devices: ["Dell", "HP", "Lenovo", "Asus", "Acer", "MSI", "Surface", "Razer"], delay: 16 },
    { name: "macOS", devices: ["MacBook Pro", "MacBook Air", "iMac", "Mac Mini", "Mac Studio", "Mac Pro", "iMac 24\"", "MacBook 13\""], delay: 24 },
    { name: "Linux", devices: ["Ubuntu", "Fedora", "Debian", "Arch", "RHEL", "SUSE", "Mint", "CentOS"], delay: 32 },
    { name: "Browser", devices: ["Chrome", "Safari", "Firefox", "Edge", "Opera", "Brave", "Arc", "Vivaldi"], delay: 40 },
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

