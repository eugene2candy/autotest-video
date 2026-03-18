import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";
const MONO_FONT = "SF Mono, Consolas, monospace";
const MICROSOFT_BLUE = "#0078D4";
const RED = "#e53935";
const GREEN = "#E87B00";

/* ── Timeline step box ── */
const TimelineStep: React.FC<{
  label: string;
  detail: string;
  accent: string;
  isLast?: boolean;
}> = ({ label, detail, accent, isLast }) => (
  <div style={{ display: "flex", alignItems: "stretch", flex: 1 }}>
    <div
      style={{
        flex: 1,
        borderRadius: 14,
        border: `2px solid ${accent}40`,
        backgroundColor: "rgba(255,255,255,0.55)",
        padding: "16px 18px",
      }}
    >
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 22,
          fontWeight: 700,
          color: accent,
          marginBottom: 5,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 20,
          color: "#444",
          lineHeight: 1.35,
        }}
      >
        {detail}
      </div>
    </div>
    {!isLast && (
      <svg
        width="40"
        height="22"
        viewBox="0 0 40 22"
        style={{ margin: "0 4px", flexShrink: 0, alignSelf: "center" }}
      >
        <line x1="0" y1="11" x2="26" y2="11" stroke={accent} strokeWidth="3" />
        <polygon points="24,3 40,11 24,19" fill={accent} />
      </svg>
    )}
  </div>
);

/**
 * Slide 2 — "AI Shortens Every Path — From Idea to Feature, From Gap to Solution"
 * Two patterns stacked: Feature Delivery (before/after timelines) + Internal Tooling.
 * Bottom: key insight box.
 */
export const Slide2: React.FC = () => {
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
        <div style={{ marginBottom: 2 }}>
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
            {"From Plan to Prototype Cont'd"}
          </h1>
          <h2
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 30,
              fontWeight: 700,
              color: MICROSOFT_BLUE,
              margin: 0,
              marginTop: 4,
              lineHeight: 1.2,
            }}
          >
            AI Shortens Every Path — From Idea to Impact
          </h2>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: 2,
            backgroundColor: `${MICROSOFT_BLUE}40`,
            marginBottom: 12,
          }}
        />

        {/* ── Pattern A: Feature Delivery ── */}
        <div
          style={{
            borderRadius: 14,
            border: `2px solid ${MICROSOFT_BLUE}35`,
            backgroundColor: `${MICROSOFT_BLUE}08`,
            padding: "16px 24px",
            marginBottom: 14,
          }}
        >
          <div
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 26,
              fontWeight: 800,
              color: MICROSOFT_BLUE,
              marginBottom: 12,
            }}
          >
            {'Pattern A: Feature Delivery — The "One-Pager Bottleneck" Is Gone'}
          </div>

          {/* BEFORE */}
          <div style={{ marginBottom: 10 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  fontFamily: MONO_FONT,
                  fontSize: 20,
                  fontWeight: 700,
                  color: RED,
                  padding: "3px 14px",
                  borderRadius: 6,
                  backgroundColor: `${RED}12`,
                }}
              >
                BEFORE AI
              </div>
              <div
                style={{
                  fontFamily: MONO_FONT,
                  fontSize: 20,
                  fontWeight: 700,
                  color: RED,
                }}
              >
                ~6 months
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "stretch" }}>
              <TimelineStep
                label="Month 1"
                detail="Dev + PM talk"
                accent={RED}
              />
              <TimelineStep
                label="Month 2"
                detail="More discussion"
                accent={RED}
              />
              <TimelineStep
                label="Month 3"
                detail="PM's one-pager ready"
                accent={RED}
              />
              <TimelineStep
                label="Month 4"
                detail="Dev starts coding"
                accent={RED}
              />
              <TimelineStep
                label="Month 5-6"
                detail="Build + Ship"
                accent={RED}
                isLast
              />
            </div>
          </div>

          {/* WITH AI */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  fontFamily: MONO_FONT,
                  fontSize: 20,
                  fontWeight: 700,
                  color: GREEN,
                  padding: "3px 14px",
                  borderRadius: 6,
                  backgroundColor: `${GREEN}12`,
                }}
              >
                WITH AI
              </div>
              <div
                style={{
                  fontFamily: MONO_FONT,
                  fontSize: 20,
                  fontWeight: 700,
                  color: GREEN,
                }}
              >
                ~2 months
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "stretch" }}>
              <TimelineStep
                label="Week 1-2"
                detail="Rough idea + AI builds a working prototype"
                accent={GREEN}
              />
              <TimelineStep
                label="Week 3-4"
                detail="Iterate on prototype together — adjust, validate, align"
                accent={GREEN}
              />
              <TimelineStep
                label="Month 2"
                detail="Evolve prototype into production feature — Ship"
                accent={GREEN}
                isLast
              />
            </div>
          </div>
        </div>

        {/* ── Pattern B: Internal Tooling ── */}
        <div
          style={{
            display: "flex",
            gap: 22,
            marginBottom: 14,
            flex: 1,
          }}
        >
          {/* Before */}
          <div
            style={{
              flex: 1,
              borderRadius: 14,
              border: `2px solid ${RED}35`,
              backgroundColor: `${RED}08`,
              padding: "18px 24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 24,
                fontWeight: 800,
                color: RED,
                marginBottom: 12,
              }}
            >
              Pattern B: Before AI — Gaps We Lived With
            </div>
            <div
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 27,
                color: "#333",
                lineHeight: 1.45,
              }}
            >
              {
                '"We have a gap in our workflow — testing is manual, process X is tedious, system Y has no good tooling."'
              }
            </div>
            <div
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 25,
                color: "#555",
                lineHeight: 1.4,
                marginTop: 10,
              }}
            >
              {
                '"To fix it properly would take a dedicated team and months. Not worth the investment right now."'
              }
            </div>
            <div
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 24,
                fontWeight: 700,
                color: RED,
                marginTop: 12,
              }}
            >
              Result: We live with the gap.
            </div>
          </div>

          {/* With AI */}
          <div
            style={{
              flex: 1,
              borderRadius: 14,
              border: `2px solid ${GREEN}35`,
              backgroundColor: `${GREEN}08`,
              padding: "18px 24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 24,
                fontWeight: 800,
                color: GREEN,
                marginBottom: 12,
              }}
            >
              With AI — Gaps Get Solved
            </div>
            <div
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 27,
                color: "#333",
                lineHeight: 1.45,
              }}
            >
              {
                '"One engineer + AI built internal tools in days to fill these exact gaps. Not side projects — working solutions the team actually uses."'
              }
            </div>
            <div
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 24,
                fontWeight: 700,
                color: GREEN,
                marginTop: 12,
              }}
            >
              The cost of trying dropped to near zero.
            </div>
          </div>
        </div>

        {/* ── Key insight box ── */}
        <div
          style={{
            padding: "18px 30px",
            borderRadius: 14,
            backgroundColor: `${MICROSOFT_BLUE}12`,
            border: `2.5px solid ${MICROSOFT_BLUE}50`,
          }}
        >
          <div
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 25,
              fontWeight: 700,
              color: "#111",
              marginBottom: 10,
            }}
          >
            {
              "AI doesn't just make us faster at what we already do. It changes "
            }
            <span style={{ color: "#E87B00" }}>WHAT WE ATTEMPT</span>:
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {[
              "Features that took 6 months now ship in 2",
              'Workflow gaps that "weren\'t worth fixing" now get solved',
              "Prototypes that used to be throwaway now become the product",
            ].map((item) => (
              <div
                key={item}
                style={{
                  flex: 1,
                  fontFamily: FONT_FAMILY,
                  fontSize: 27,
                  color: "#333",
                  padding: "10px 16px",
                  borderRadius: 8,
                  backgroundColor: `${MICROSOFT_BLUE}10`,
                  border: `1.5px solid ${MICROSOFT_BLUE}30`,
                  lineHeight: 1.4,
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
