import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";
const MONO_FONT = "SF Mono, Consolas, monospace";
const MICROSOFT_BLUE = "#0078D4";
const RED = "#e53935";
const GREEN = "#4caf50";

/* ── Decision row: Human decided ↔ Human+AI built ── */
const DecisionRow: React.FC<{
  decision: string;
  detail: string;
  built: string;
}> = ({ decision, detail, built }) => (
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      marginBottom: 10,
      gap: 20,
    }}
  >
    {/* Left column — human decision */}
    <div style={{ flex: 1 }}>
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 15,
          fontWeight: 700,
          color: MICROSOFT_BLUE,
          marginBottom: 2,
        }}
      >
        {decision}
      </div>
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 13,
          color: "#555",
          fontStyle: "italic",
          lineHeight: 1.35,
        }}
      >
        "{detail}"
      </div>
    </div>
    {/* Arrow */}
    <div
      style={{
        fontFamily: MONO_FONT,
        fontSize: 16,
        color: GREEN,
        marginTop: 2,
        flexShrink: 0,
      }}
    >
      {"->"}
    </div>
    {/* Right column — what got built */}
    <div
      style={{
        flex: 1,
        fontFamily: FONT_FAMILY,
        fontSize: 14,
        color: "#333",
        lineHeight: 1.35,
      }}
    >
      {built}
    </div>
  </div>
);

/* ── Insight point in the bottom box ── */
const InsightPoint: React.FC<{ num: string; bold: string; rest: string }> = ({
  num,
  bold,
  rest,
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      marginBottom: 6,
      gap: 8,
    }}
  >
    <div
      style={{
        fontFamily: MONO_FONT,
        fontSize: 15,
        fontWeight: 700,
        color: MICROSOFT_BLUE,
        flexShrink: 0,
        marginTop: 1,
      }}
    >
      {num}.
    </div>
    <div
      style={{
        fontFamily: FONT_FAMILY,
        fontSize: 15,
        color: "#222",
        lineHeight: 1.4,
      }}
    >
      <strong>{bold}</strong> {rest}
    </div>
  </div>
);

/**
 * Slide 2 — "Real Story: Autotest — From Pain Point to Working Product in Days"
 * Static layout: title, problem section, journey section, "so what" insight box.
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

      {/* Content layer */}
      <AbsoluteFill
        style={{
          padding: "36px 68px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ── Title ── */}
        <div style={{ marginBottom: 6 }}>
          <h1
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 40,
              fontWeight: 800,
              color: "#111",
              margin: 0,
              letterSpacing: -0.5,
              lineHeight: 1.15,
            }}
          >
            Real Story:{" "}
            <span style={{ color: MICROSOFT_BLUE }}>
              One Engineer Built a No-Code UI Testing Framework — in Days
            </span>
          </h1>
          <p
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 19,
              color: "#555",
              marginTop: 6,
              marginBottom: 0,
              lineHeight: 1.3,
            }}
          >
            Autotest: AI-powered mobile test automation that records, replays,
            and self-heals — built by a single engineer collaborating with AI.
          </p>
        </div>

        {/* ── Two-column body: Problem (left) + Journey (right) ── */}
        <div
          style={{
            display: "flex",
            flex: 1,
            gap: 28,
            marginTop: 12,
          }}
        >
          {/* LEFT — The Problem */}
          <div
            style={{
              flex: "0 0 420px",
              borderRadius: 14,
              backgroundColor: `${RED}0C`,
              border: `2px solid ${RED}40`,
              padding: "18px 22px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 18,
                fontWeight: 800,
                color: RED,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              THE PROBLEM
            </div>
            <div
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 16,
                color: "#333",
                lineHeight: 1.5,
                marginBottom: 14,
              }}
            >
              Mobile UI testing is broken:
            </div>
            {[
              "Manual testing doesn't scale",
              "Scripted automation requires dev expertise",
              "Record-and-replay tools produce brittle tests",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: 15,
                    color: RED,
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  -
                </div>
                <div
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: 15,
                    color: "#444",
                    lineHeight: 1.4,
                  }}
                >
                  {item}
                </div>
              </div>
            ))}

            {/* Traditional path box */}
            <div
              style={{
                marginTop: 14,
                padding: "14px 16px",
                borderRadius: 10,
                backgroundColor: "rgba(255,255,255,0.5)",
                border: `1.5px solid ${RED}30`,
              }}
            >
              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#555",
                  marginBottom: 6,
                }}
              >
                Traditional path:
              </div>
              <div
                style={{
                  fontFamily: MONO_FONT,
                  fontSize: 13,
                  color: "#666",
                  lineHeight: 1.5,
                }}
              >
                3-5 engineers x 2-3 months
                <br />
                Backend + Frontend + Proxy + AI engine + Orchestration +
                Dashboard
              </div>
              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 14,
                  fontWeight: 700,
                  color: RED,
                  marginTop: 8,
                }}
              >
                Reality: most teams wouldn't even attempt it
              </div>
            </div>
          </div>

          {/* RIGHT — What Actually Happened */}
          <div
            style={{
              flex: 1,
              borderRadius: 14,
              backgroundColor: `${MICROSOFT_BLUE}0C`,
              border: `2px solid ${MICROSOFT_BLUE}40`,
              padding: "18px 22px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 18,
                  fontWeight: 800,
                  color: MICROSOFT_BLUE,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                }}
              >
                ONE ENGINEER + AI
              </div>
              <div
                style={{
                  fontFamily: MONO_FONT,
                  fontSize: 16,
                  fontWeight: 700,
                  color: GREEN,
                  padding: "4px 12px",
                  borderRadius: 6,
                  backgroundColor: `${GREEN}15`,
                }}
              >
                DAYS, NOT MONTHS
              </div>
            </div>

            {/* Column headers */}
            <div
              style={{
                display: "flex",
                gap: 20,
                marginBottom: 10,
                paddingBottom: 8,
                borderBottom: `1.5px solid ${MICROSOFT_BLUE}25`,
              }}
            >
              <div
                style={{
                  flex: 1,
                  fontFamily: FONT_FAMILY,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#888",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Human Decided
              </div>
              <div style={{ width: 24 }} />
              <div
                style={{
                  flex: 1,
                  fontFamily: FONT_FAMILY,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#888",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Human + AI Built Together
              </div>
            </div>

            {/* Decision rows */}
            <div style={{ flex: 1, overflow: "hidden" }}>
              <DecisionRow
                decision="Proxy-based architecture"
                detail="Intercept the protocol, don't modify Appium Inspector"
                built="W3C WebDriver proxy layer that transparently captures every interaction"
              />
              <DecisionRow
                decision="AI evidence evaluation"
                detail="Use screenshots + XML to verify app state"
                built="Engine that analyzes screenshots + XML page structure to verify expected state"
              />
              <DecisionRow
                decision="Dual step model"
                detail="Every test = actions + evidence, creating an audit trail"
                built="Interleaved action + evidence steps with full audit trail"
              />
              <DecisionRow
                decision="14-level locator ranking"
                detail="Enhance weak locators with robust alternatives"
                built="Automatic locator enhancement: resource IDs, accessibility labels, parent-child context"
              />
              <DecisionRow
                decision="Multi-device, CI/CD-ready"
                detail="It has to work in real pipelines, not just demos"
                built="CLI runner, JUnit XML reports, GitHub Actions / Azure DevOps integration, video recording"
              />
              <DecisionRow
                decision="Platform adapter pattern"
                detail="Design for Android first, but don't paint into a corner"
                built="Architecture that extends from Android to iOS, Windows, macOS, Web"
              />
            </div>
          </div>
        </div>

        {/* ── Bottom "So What" box ── */}
        <div
          style={{
            marginTop: 14,
            padding: "18px 28px",
            borderRadius: 14,
            backgroundColor: `${MICROSOFT_BLUE}10`,
            border: `2px solid ${MICROSOFT_BLUE}45`,
          }}
        >
          <div
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 16,
              fontWeight: 800,
              color: MICROSOFT_BLUE,
              marginBottom: 10,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            What AI Changed
          </div>
          <div
            style={{
              display: "flex",
              gap: 40,
            }}
          >
            <div style={{ flex: 1 }}>
              <InsightPoint
                num="1"
                bold="ONE engineer could attempt what normally requires a TEAM"
                rest="-- AI expanded what one person can realistically build"
              />
              <InsightPoint
                num="2"
                bold="DAYS instead of MONTHS"
                rest={
                  '-- AI compressed the path from "I know the problem" to "I have a solution I can put in people\'s hands"'
                }
              />
            </div>
            <div style={{ flex: 1 }}>
              <InsightPoint
                num="3"
                bold="The HUMAN made every critical design decision"
                rest="-- Proxy architecture, AI evaluation, locator strategy, platform extensibility -- all human judgment"
              />
              <InsightPoint
                num="4"
                bold="The engineer became MORE capable, not less essential"
                rest="-- Domain expertise + AI execution = outcomes previously impossible"
              />
            </div>
          </div>
          {/* Closing statement */}
          <div
            style={{
              marginTop: 10,
              paddingTop: 10,
              borderTop: `1.5px solid ${MICROSOFT_BLUE}30`,
              fontFamily: FONT_FAMILY,
              fontSize: 16,
              fontWeight: 700,
              color: "#333",
              textAlign: "center",
              lineHeight: 1.45,
            }}
          >
            AI didn't replace the engineer. It turned a side project into a real
            product. It turned one person into a team.
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
