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
  <div style={{ display: "flex", alignItems: "stretch", flex: 1 }}>
    <div
      style={{
        flex: 1,
        borderRadius: 14,
        border: `2.5px solid ${accent}50`,
        backgroundColor: "rgba(255,255,255,0.55)",
        padding: "18px 16px",
        fontFamily: FONT,
        fontSize: 26,
        fontWeight: 700,
        color: "#333",
        lineHeight: 1.35,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {label}
    </div>
    {!isLast && (
      <svg
        width="44"
        height="24"
        viewBox="0 0 44 24"
        style={{ margin: "0 6px", flexShrink: 0, alignSelf: "center" }}
      >
        <line x1="0" y1="12" x2="28" y2="12" stroke={accent} strokeWidth="3.5" />
        <polygon points="26,4 44,12 26,20" fill={accent} />
      </svg>
    )}
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
            borderRadius: 18,
            border: `2.5px solid ${RED}35`,
            backgroundColor: `${RED}08`,
            padding: "24px 32px",
            marginBottom: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 18,
            }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: 26,
                fontWeight: 700,
                color: RED,
                padding: "6px 20px",
                borderRadius: 8,
                backgroundColor: `${RED}12`,
              }}
            >
              BEFORE AI
            </div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 26,
                fontWeight: 700,
                color: RED,
              }}
            >
              ~6 months
            </div>
            <div
              style={{
                fontFamily: FONT,
                fontSize: 26,
                color: "#777",
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
            borderRadius: 18,
            border: `2.5px solid ${GREEN}35`,
            backgroundColor: `${GREEN}08`,
            padding: "24px 32px",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 18,
            }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: 26,
                fontWeight: 700,
                color: GREEN,
                padding: "6px 20px",
                borderRadius: 8,
                backgroundColor: `${GREEN}12`,
              }}
            >
              WITH AI
            </div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 26,
                fontWeight: 700,
                color: GREEN,
              }}
            >
              ~2 months
            </div>
            <div
              style={{
                fontFamily: FONT,
                fontSize: 26,
                color: "#777",
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
            fontSize: 40,
            fontWeight: 800,
            color: BLUE,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Real Examples
        </div>
        <div style={{ display: "flex", gap: 24, marginBottom: 22 }}>
          {[
            { name: "Project Radar" },
            { name: "Outlier Detection" },
          ].map((ex) => (
            <div
              key={ex.name}
              style={{
                flex: 1,
                borderRadius: 16,
                border: `2.5px solid ${BLUE}45`,
                backgroundColor: "rgba(255,255,255,0.6)",
                padding: "22px 30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontFamily: FONT,
                  fontSize: 52,
                  fontWeight: 800,
                  color: BLUE,
                }}
              >
                {ex.name}
              </div>
            </div>
          ))}
        </div>

        {/* Key insight */}
        <div
          style={{
            padding: "24px 36px",
            borderRadius: 18,
            backgroundColor: `${BLUE}12`,
            border: `2.5px solid ${BLUE}50`,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 32,
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
