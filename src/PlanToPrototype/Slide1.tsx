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
  isLast?: boolean;
}> = ({ title, subtitle, items, accent, isLast }) => (
  <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
    <div
      style={{
        flex: 1,
        minHeight: 300,
        borderRadius: 18,
        border: `3px solid ${accent}`,
        backgroundColor: "rgba(255,255,255,0.65)",
        backdropFilter: "blur(8px)",
        padding: "28px 30px",
        display: "flex",
        flexDirection: "column",
        boxShadow: `0 4px 24px ${accent}30`,
      }}
    >
      {/* Header */}
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 20,
          fontWeight: 800,
          color: accent,
          letterSpacing: 2,
          textTransform: "uppercase",
          marginBottom: 4,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 26,
          fontWeight: 700,
          color: "#222",
          marginBottom: 16,
          lineHeight: 1.25,
        }}
      >
        {subtitle}
      </div>
      {/* Items */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 22,
              color: "#444",
              lineHeight: 1.5,
              marginBottom: 6,
              paddingLeft: 16,
              borderLeft: `3px solid ${accent}40`,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
    {!isLast && (
      <svg
        width="70"
        height="32"
        viewBox="0 0 70 32"
        style={{ margin: "0 10px", flexShrink: 0 }}
      >
        <line
          x1="0"
          y1="16"
          x2="52"
          y2="16"
          stroke={MICROSOFT_BLUE}
          strokeWidth="3.5"
        />
        <polygon points="50,6 70,16 50,26" fill={MICROSOFT_BLUE} />
      </svg>
    )}
  </div>
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
        <div style={{ marginBottom: 6 }}>
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
            The Engineer Decides, AI Accelerates
          </h2>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: 2,
            backgroundColor: `${MICROSOFT_BLUE}40`,
            marginBottom: 20,
          }}
        />

        {/* Flow diagram (3 blocks) */}
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            flex: 1,
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
          <FlowBlock
            title="STEER"
            subtitle="HUMAN"
            items={[
              "Evaluates results",
              "Adjusts direction",
              "Decides next step",
            ]}
            accent={ACCENT_PURPLE}
            isLast
          />
        </div>

        {/* Repeat loop indicator */}
        <div
          style={{
            textAlign: "center",
            fontFamily: FONT_FAMILY,
            fontSize: 20,
            fontWeight: 700,
            color: MICROSOFT_BLUE,
            margin: "10px 0",
            letterSpacing: 2,
          }}
        >
          {"<"}
          {"————————————— repeat —————————————"}
          {">"}
        </div>

        {/* Key principle box */}
        <div
          style={{
            padding: "22px 32px",
            borderRadius: 16,
            backgroundColor: `${MICROSOFT_BLUE}12`,
            border: `2.5px solid ${MICROSOFT_BLUE}50`,
          }}
        >
          <div
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 26,
              fontWeight: 700,
              color: "#111",
              marginBottom: 10,
            }}
          >
            Every critical decision stays with the human:
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
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
                  fontSize: 22,
                  color: "#333",
                  padding: "6px 16px",
                  borderRadius: 8,
                  backgroundColor: `${MICROSOFT_BLUE}10`,
                  border: `1.5px solid ${MICROSOFT_BLUE}30`,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
