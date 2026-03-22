import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const FONT = "SF Pro Text, Helvetica, Arial, sans-serif";
const BLUE = "#0078D4";
const PURPLE = "#5B5FC7";
const CYAN = "#00A4EF";

const PhaseCard: React.FC<{
  label: string;
  role: string;
  items: string[];
  accent: string;
}> = ({ label, role, items, accent }) => (
  <div
    style={{
      flex: 1,
      borderRadius: 20,
      border: `3px solid ${accent}`,
      backgroundColor: "rgba(255,255,255,0.6)",
      backdropFilter: "blur(8px)",
      padding: "40px 36px",
      display: "flex",
      flexDirection: "column",
      gap: 28,
      boxShadow: `0 6px 28px ${accent}25`,
    }}
  >
    <div
      style={{
        fontFamily: FONT,
        fontSize: 26,
        fontWeight: 800,
        color: accent,
        letterSpacing: 3,
        textTransform: "uppercase",
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontFamily: FONT,
        fontSize: 48,
        fontWeight: 700,
        color: "#111",
        lineHeight: 1.2,
      }}
    >
      {role}
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {items.map((item) => (
        <div
          key={item}
          style={{
            fontFamily: FONT,
            fontSize: 30,
            color: "#444",
            lineHeight: 1.3,
            paddingLeft: 20,
            borderLeft: `4px solid ${accent}50`,
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
    width="70"
    height="32"
    viewBox="0 0 70 32"
    style={{ margin: "0 10px", flexShrink: 0, alignSelf: "center" }}
  >
    <line x1="0" y1="16" x2="50" y2="16" stroke={BLUE} strokeWidth="4" />
    <polygon points="48,6 70,16 48,26" fill={BLUE} />
  </svg>
);

/**
 * Slide 1 — "Human Thinks. AI Executes."
 * Three-phase flow (THINK → EXECUTE → PROVE) + AI Can / AI Cannot boxes.
 */
export const Slide1: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
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
          inset: 0,
          backgroundColor: "rgba(255,255,255,0.3)",
        }}
      />

      <AbsoluteFill
        style={{
          padding: "40px 60px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Title */}
        <div>
          <h1
            style={{
              fontFamily: FONT,
              fontSize: 56,
              fontWeight: 800,
              color: "#111",
              margin: 0,
              letterSpacing: -1,
            }}
          >
            From Plan to Prototype
          </h1>
          <h2
            style={{
              fontFamily: FONT,
              fontSize: 32,
              fontWeight: 600,
              color: BLUE,
              margin: "8px 0 0",
            }}
          >
            Human Thinks · AI Executes · Human Proves
          </h2>
        </div>

        <div
          style={{
            width: "100%",
            height: 2,
            backgroundColor: `${BLUE}40`,
            margin: "12px 0 20px",
          }}
        />

        {/* Three-phase flow */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "stretch" }}>
            <PhaseCard
              label="THINK"
              role="Human"
              items={[
                "Set direction",
                "Find blind spots with AI",
                "Make decisions",
              ]}
              accent={PURPLE}
            />
            <Arrow />
            <PhaseCard
              label="EXECUTE"
              role="AI"
              items={[
                "Build prototype fast",
                "Explore options",
                "Bridge gaps",
              ]}
              accent={CYAN}
            />
            <Arrow />
            <PhaseCard
              label="PROVE"
              role="Human"
              items={[
                "Have something to show",
                "Discuss with PM & leadership",
                "Adjust & iterate",
              ]}
              accent={PURPLE}
            />
          </div>

        </div>

        {/* AI Can / Cannot */}
        <div style={{ display: "flex", gap: 24, marginTop: 16 }}>
          <div
            style={{
              flex: 1,
              padding: "28px 36px",
              borderRadius: 18,
              backgroundColor: `${CYAN}12`,
              border: `2.5px solid ${CYAN}50`,
            }}
          >
            <div
              style={{
                fontFamily: FONT,
                fontSize: 28,
                fontWeight: 800,
                color: CYAN,
                letterSpacing: 2,
                marginBottom: 18,
              }}
            >
              ✓ AI CAN
            </div>
            {[
              "Execute at huge speed",
              "Explore options & find blind spots",
              "Build working prototypes in hours",
              "Bridge gaps between existing tools",
              "Verify our initial thinking fast",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT,
                    fontSize: 28,
                    color: CYAN,
                    flexShrink: 0,
                    lineHeight: 1.3,
                  }}
                >
                  •
                </div>
                <div
                  style={{
                    fontFamily: FONT,
                    fontSize: 28,
                    color: "#333",
                    lineHeight: 1.4,
                  }}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              flex: 1,
              padding: "28px 36px",
              borderRadius: 18,
              backgroundColor: "#e5393512",
              border: "2.5px solid #e5393550",
            }}
          >
            <div
              style={{
                fontFamily: FONT,
                fontSize: 28,
                fontWeight: 800,
                color: "#e53935",
                letterSpacing: 2,
                marginBottom: 18,
              }}
            >
              ✗ AI CANNOT
            </div>
            {[
              "Replace human thinking",
              "Make decisions for us",
              "Understand our context & constraints",
              "Set direction — that's our job",
              "Know what 'good' looks like for our team",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT,
                    fontSize: 28,
                    color: "#e53935",
                    flexShrink: 0,
                    lineHeight: 1.3,
                  }}
                >
                  •
                </div>
                <div
                  style={{
                    fontFamily: FONT,
                    fontSize: 28,
                    color: "#333",
                    lineHeight: 1.4,
                  }}
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
