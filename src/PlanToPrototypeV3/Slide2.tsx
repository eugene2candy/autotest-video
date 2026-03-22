import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const FONT = "SF Pro Text, Helvetica, Arial, sans-serif";
const MONO = "SF Mono, Consolas, monospace";
const BLUE = "#0078D4";
const RED = "#e53935";
const GREEN = "#4caf50";

const Step: React.FC<{
  label: string;
  accent: string;
  isLast?: boolean;
}> = ({ label, accent, isLast }) => (
  <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
    <div
      style={{
        flex: 1,
        borderRadius: 12,
        border: `2px solid ${accent}50`,
        backgroundColor: "rgba(255,255,255,0.55)",
        padding: "14px 18px",
        fontFamily: FONT,
        fontSize: 24,
        fontWeight: 600,
        color: "#333",
        lineHeight: 1.35,
        textAlign: "center",
      }}
    >
      {label}
    </div>
    {!isLast && (
      <svg
        width="36"
        height="20"
        viewBox="0 0 36 20"
        style={{ margin: "0 4px", flexShrink: 0 }}
      >
        <line x1="0" y1="10" x2="22" y2="10" stroke={accent} strokeWidth="3" />
        <polygon points="20,3 36,10 20,17" fill={accent} />
      </svg>
    )}
  </div>
);

const ExampleBadge: React.FC<{ name: string; detail: string }> = ({
  name,
  detail,
}) => (
  <div
    style={{
      flex: 1,
      borderRadius: 14,
      border: `2px solid ${BLUE}40`,
      backgroundColor: "rgba(255,255,255,0.6)",
      padding: "20px 24px",
    }}
  >
    <div
      style={{
        fontFamily: FONT,
        fontSize: 28,
        fontWeight: 800,
        color: BLUE,
        marginBottom: 6,
      }}
    >
      {name}
    </div>
    <div
      style={{
        fontFamily: FONT,
        fontSize: 22,
        color: "#555",
        lineHeight: 1.4,
      }}
    >
      {detail}
    </div>
  </div>
);

/**
 * Slide 2 — "6 Months → 2 Months"
 * Before/after timelines + real project examples (Project Radar, Outliner Detection).
 */
export const Slide2: React.FC = () => {
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
            AI Shortens Every Path
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
            From idea to feature — 6 months → 2 months
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

        {/* Before timeline */}
        <div
          style={{
            borderRadius: 16,
            border: `2px solid ${RED}30`,
            backgroundColor: `${RED}08`,
            padding: "20px 28px",
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: 22,
                fontWeight: 700,
                color: RED,
                padding: "4px 16px",
                borderRadius: 6,
                backgroundColor: `${RED}12`,
              }}
            >
              BEFORE AI
            </div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 22,
                fontWeight: 700,
                color: RED,
              }}
            >
              ~6 months
            </div>
            <div
              style={{
                fontFamily: FONT,
                fontSize: 22,
                color: "#888",
                fontStyle: "italic",
              }}
            >
              — discussed with PM with nothing on hands
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "stretch" }}>
            <Step label="Idea" accent={RED} />
            <Step label="Discuss with PM" accent={RED} />
            <Step label="More discussion" accent={RED} />
            <Step label="One-pager ready" accent={RED} />
            <Step label="Start coding" accent={RED} />
            <Step label="Build + Ship" accent={RED} isLast />
          </div>
        </div>

        {/* After timeline */}
        <div
          style={{
            borderRadius: 16,
            border: `2px solid ${GREEN}30`,
            backgroundColor: `${GREEN}08`,
            padding: "20px 28px",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: 22,
                fontWeight: 700,
                color: GREEN,
                padding: "4px 16px",
                borderRadius: 6,
                backgroundColor: `${GREEN}12`,
              }}
            >
              WITH AI
            </div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 22,
                fontWeight: 700,
                color: GREEN,
              }}
            >
              ~2 months
            </div>
            <div
              style={{
                fontFamily: FONT,
                fontSize: 22,
                color: "#888",
                fontStyle: "italic",
              }}
            >
              — discuss with prototype on hands
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "stretch" }}>
            <Step label="Idea + AI prototype" accent={GREEN} />
            <Step label="Discuss with tangible thing" accent={GREEN} />
            <Step label="Iterate & adjust" accent={GREEN} />
            <Step label="Evolve to production" accent={GREEN} isLast />
          </div>
        </div>

        {/* Real examples */}
        <div
          style={{
            fontFamily: FONT,
            fontSize: 24,
            fontWeight: 800,
            color: BLUE,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          REAL EXAMPLES — Windows 365 / Azure MEM Portal
        </div>
        <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
          <ExampleBadge
            name="Project Radar"
            detail="Feature on Azure MEM portal. Normally ~6 months from init to release. With AI: ~2 months."
          />
          <ExampleBadge
            name="Outliner Detection"
            detail="Feature on Windows 365 service. Same pattern — AI shortened every step from init to release."
          />
        </div>

        {/* Key insight */}
        <div
          style={{
            padding: "20px 32px",
            borderRadius: 16,
            backgroundColor: `${BLUE}12`,
            border: `2px solid ${BLUE}50`,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 28,
              fontWeight: 700,
              color: "#222",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Prototype replaces abstract discussion. Engineer + PM still work
            together — AI just shortened every path.
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
