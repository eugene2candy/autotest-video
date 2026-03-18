import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";
const MICROSOFT_BLUE = "#0078D4";
const ACCENT_PURPLE = "#5B5FC7";
const LIGHT_BLUE = "#00A4EF";

/* ── Flow block (START / ACCELERATE / STEER) ── */
const FlowBlock: React.FC<{
  title: string;
  subtitle: string;
  items: string[];
  accent: string;
}> = ({ title, subtitle, items, accent }) => (
  <div
    style={{
      flex: 1,
      borderRadius: 18,
      border: `3px solid ${accent}`,
      backgroundColor: "rgba(255,255,255,0.55)",
      backdropFilter: "blur(8px)",
      padding: "36px 38px",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      boxShadow: `0 4px 24px ${accent}30`,
    }}
  >
    {/* Header */}
    <div>
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 32,
          fontWeight: 800,
          color: accent,
          letterSpacing: 2,
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 44,
          fontWeight: 700,
          color: "#222",
          lineHeight: 1.25,
        }}
      >
        {subtitle}
      </div>
    </div>
    {/* Items */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {items.map((item) => (
        <div
          key={item}
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 36,
            color: "#333",
            lineHeight: 1.4,
            paddingLeft: 22,
            borderLeft: `5px solid ${accent}40`,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

const Arrow: React.FC = () => (
  <svg
    width="80"
    height="36"
    viewBox="0 0 80 36"
    style={{ margin: "0 12px", flexShrink: 0, alignSelf: "center" }}
  >
    <line
      x1="0"
      y1="18"
      x2="58"
      y2="18"
      stroke={MICROSOFT_BLUE}
      strokeWidth="4"
    />
    <polygon points="56,6 80,18 56,30" fill={MICROSOFT_BLUE} />
  </svg>
);

/**
 * Slide 1 — "Human-Centric AI: The Engineer Decides, AI Accelerates"
 * Title + subtitle, 3-block horizontal flow (START -> ACCELERATE -> STEER),
 * "repeat" loop indicator, key principle box.
 */
export const Slide1: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Blurred background */}
      <Img
        src={staticFile("background-1.png")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(20px)",
          transform: "scale(1.1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255,255,255,0.3)",
        }}
      />

      {/* Content */}
      <AbsoluteFill
        style={{
          padding: "36px 56px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Title */}
        <div style={{ marginBottom: 4 }}>
          <h1
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 52,
              fontWeight: 800,
              color: "#111",
              margin: 0,
              letterSpacing: -1,
              lineHeight: 1.15,
            }}
          >
            From Plan to Prototype
          </h1>
          <h2
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 30,
              fontWeight: 700,
              color: MICROSOFT_BLUE,
              margin: 0,
              marginTop: 6,
              lineHeight: 1.2,
            }}
          >
            Human-Centric — The Engineer Decides, AI Accelerates
          </h2>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: 2,
            backgroundColor: `${MICROSOFT_BLUE}40`,
            marginBottom: 16,
          }}
        />

        {/* Middle section: blocks centered, repeat below, principle at bottom */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Spacer top */}
          <div style={{ flex: 1 }} />

          {/* Flow diagram (3 blocks) */}
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <FlowBlock
              title="START"
              subtitle="HUMAN"
              items={[
                "Sets intent",
                "Defines constraints",
                "Makes design choices",
              ]}
              accent={ACCENT_PURPLE}
            />
            <Arrow />
            <FlowBlock
              title="ACCELERATE"
              subtitle="AI ASSISTS"
              items={[
                "Explores options",
                "Builds prototypes",
                "Iterates rapidly",
              ]}
              accent={LIGHT_BLUE}
            />
            <Arrow />
            <FlowBlock
              title="STEER"
              subtitle="HUMAN"
              items={[
                "Evaluates results",
                "Adjusts direction",
                "Decides next step",
              ]}
              accent={ACCENT_PURPLE}
            />
          </div>

          {/* Spacer + Repeat centered in gap */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontFamily: FONT_FAMILY,
                fontSize: 30,
                fontWeight: 700,
                color: "#111",
                letterSpacing: 3,
              }}
            >
              {"<————————————— repeat —————————————>"}
            </div>
          </div>

          {/* Key principle box — at bottom */}
          <div
            style={{
              padding: "24px 36px",
              borderRadius: 16,
              backgroundColor: `${MICROSOFT_BLUE}12`,
              border: `2.5px solid ${MICROSOFT_BLUE}50`,
            }}
          >
            <div
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 30,
                fontWeight: 700,
                color: "#111",
                marginBottom: 14,
              }}
            >
              Every critical decision stays with the human:
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
              }}
            >
              {[
                "What problem to solve",
                "Which approach to take",
                "Whether the result is good enough",
                "When to pivot, iterate, or ship",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: 28,
                    color: "#333",
                    padding: "8px 20px",
                    borderRadius: 8,
                    backgroundColor: "rgba(255,255,255,0.55)",
                    border: `1.5px solid ${MICROSOFT_BLUE}40`,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
