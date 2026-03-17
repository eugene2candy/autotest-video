import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";
const MICROSOFT_BLUE = "#0078D4";

/* ── Flow diagram stage card ── */
const StageCard: React.FC<{
  label: string;
  sublabel: string;
  quote: string;
  accent: string;
  isLast?: boolean;
}> = ({ label, sublabel, quote, accent, isLast }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <div
      style={{
        width: 390,
        minHeight: 260,
        borderRadius: 18,
        border: `3px solid ${accent}`,
        backgroundColor: "rgba(255,255,255,0.65)",
        backdropFilter: "blur(8px)",
        padding: "26px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: `0 4px 20px ${accent}30`,
      }}
    >
      <div>
        <div
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 28,
            fontWeight: 800,
            color: accent,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 20,
            fontWeight: 600,
            color: "#666",
            marginBottom: 16,
          }}
        >
          {sublabel}
        </div>
      </div>
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 22,
          color: "#333",
          lineHeight: 1.45,
          fontStyle: "italic",
        }}
      >
        "{quote}"
      </div>
    </div>
    {!isLast && (
      <svg
        width="60"
        height="28"
        viewBox="0 0 60 28"
        style={{ margin: "0 10px", flexShrink: 0 }}
      >
        <line
          x1="0"
          y1="14"
          x2="44"
          y2="14"
          stroke={MICROSOFT_BLUE}
          strokeWidth="3.5"
        />
        <polygon points="42,5 60,14 42,23" fill={MICROSOFT_BLUE} />
      </svg>
    )}
  </div>
);

/**
 * Slide 1 — "From Plan to Prototype: How AI Amplifies the Engineer"
 * Static layout: title + subtitle, 4-stage flow diagram, key takeaway box.
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
      {/* White overlay */}
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

      {/* Content layer */}
      <AbsoluteFill
        style={{
          padding: "40px 60px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ── Title block ── */}
        <div style={{ marginBottom: 6 }}>
          <h1
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 48,
              fontWeight: 800,
              color: "#111",
              margin: 0,
              letterSpacing: -1,
              lineHeight: 1.15,
            }}
          >
            From Plan to Prototype:{" "}
            <span style={{ color: MICROSOFT_BLUE }}>
              How AI Amplifies the Engineer
            </span>
          </h1>
          <p
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 24,
              color: "#444",
              marginTop: 8,
              marginBottom: 0,
              lineHeight: 1.4,
            }}
          >
            The human decides <em>what</em> and <em>why</em>. AI compresses the
            path to <em>proving it</em>.
          </p>
        </div>

        {/* ── Thin divider ── */}
        <div
          style={{
            width: "100%",
            height: 2,
            backgroundColor: `${MICROSOFT_BLUE}40`,
            marginBottom: 20,
          }}
        />

        {/* ── Flow diagram (4 stages) ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <StageCard
            label="HUMAN INTENT"
            sublabel="(Direction)"
            quote="We need to solve X. I think approach A could work."
            accent="#5B5FC7"
          />
          <StageCard
            label="HUMAN + AI EXPLORE"
            sublabel="(Exploration)"
            quote="Challenge assumptions, surface blind spots, compare trade-offs"
            accent={MICROSOFT_BLUE}
          />
          <StageCard
            label="AI BUILDS"
            sublabel="(Execution)"
            quote="Working prototype in hours, not weeks"
            accent="#00A4EF"
          />
          <StageCard
            label="HUMAN JUDGES"
            sublabel="(Judgment)"
            quote="This proves / disproves our thesis. Here's what we learned."
            accent="#5B5FC7"
            isLast
          />
        </div>

        {/* ── Key takeaway box ── */}
        <div
          style={{
            marginTop: 24,
            padding: "26px 36px",
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
              marginBottom: 10,
            }}
          >
            The human is in the driver's seat at every critical moment.
          </div>
          <div
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 25,
              color: "#333",
              lineHeight: 1.5,
            }}
          >
            AI doesn't decide what to prototype or whether the result is good.
            It eliminates the cost barrier between "I have an idea" and "I have
            evidence."
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
