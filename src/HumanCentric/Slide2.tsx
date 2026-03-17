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
      marginBottom: 14,
      gap: 24,
    }}
  >
    {/* Left column — human decision */}
    <div style={{ flex: 1 }}>
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 20,
          fontWeight: 700,
          color: MICROSOFT_BLUE,
          marginBottom: 3,
        }}
      >
        {decision}
      </div>
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 17,
          color: "#555",
          fontStyle: "italic",
          lineHeight: 1.35,
        }}
      >
        "{detail}"
      </div>
    </div>
    {/* Arrow */}
    <svg
      width="40"
      height="24"
      viewBox="0 0 40 24"
      style={{ marginTop: 4, flexShrink: 0 }}
    >
      <line
        x1="0"
        y1="12"
        x2="28"
        y2="12"
        stroke={MICROSOFT_BLUE}
        strokeWidth="3.5"
      />
      <polygon points="26,4 40,12 26,20" fill={MICROSOFT_BLUE} />
    </svg>
    {/* Right column — what got built */}
    <div
      style={{
        flex: 1,
        fontFamily: FONT_FAMILY,
        fontSize: 18,
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
      marginBottom: 10,
      gap: 10,
    }}
  >
    <div
      style={{
        fontFamily: MONO_FONT,
        fontSize: 20,
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
        fontSize: 20,
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
              flex: "0 0 480px",
              borderRadius: 14,
              backgroundColor: `${RED}0C`,
              border: `2px solid ${RED}40`,
              padding: "22px 26px",
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
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              THE PROBLEM
            </div>
            <div
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 21,
                color: "#333",
                lineHeight: 1.5,
                marginBottom: 14,
              }}
            >
              Mobile UI testing is broken:
            </div>
            {[
              "Heavily relied on manual tests",
              "Scripted automation requires dev expertise",
              "Manual testing doesn't scale",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: 20,
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
                    fontSize: 20,
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
                marginTop: 16,
                padding: "16px 20px",
                borderRadius: 10,
                backgroundColor: "rgba(255,255,255,0.5)",
                border: `1.5px solid ${RED}30`,
                flex: 1,
              }}
            >
              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 19,
                  fontWeight: 700,
                  color: "#555",
                  marginBottom: 8,
                }}
              >
                Traditional path:
              </div>
              <div
                style={{
                  fontFamily: MONO_FONT,
                  fontSize: 17,
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
                  fontSize: 19,
                  fontWeight: 700,
                  color: RED,
                  marginTop: 10,
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
              padding: "22px 26px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 24,
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
                  fontSize: 20,
                  fontWeight: 700,
                  color: GREEN,
                  padding: "5px 14px",
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
                gap: 24,
                marginBottom: 12,
                paddingBottom: 10,
                borderBottom: `1.5px solid ${MICROSOFT_BLUE}25`,
              }}
            >
              <div
                style={{
                  flex: 1,
                  fontFamily: FONT_FAMILY,
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#888",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Human Decided
              </div>
              <div style={{ width: 28 }} />
              <div
                style={{
                  flex: 1,
                  fontFamily: FONT_FAMILY,
                  fontSize: 16,
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
              <DecisionRow
                decision="AI handles the unexpected"
                detail="Non-app noise handled by AI, not the tester"
                built="Auto-detection and dismissal of permission dialogs, system popups, and OS interruptions — tests continue without manual intervention"
              />
            </div>
          </div>
        </div>

        {/* ── Bottom "So What" box ── */}
        <div
          style={{
            marginTop: 16,
            padding: "20px 32px",
            borderRadius: 14,
            backgroundColor: `${MICROSOFT_BLUE}10`,
            border: `2px solid ${MICROSOFT_BLUE}45`,
          }}
        >
          <div
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 22,
              fontWeight: 800,
              color: MICROSOFT_BLUE,
              marginBottom: 12,
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
              marginTop: 12,
              paddingTop: 12,
              borderTop: `1.5px solid ${MICROSOFT_BLUE}30`,
              fontFamily: FONT_FAMILY,
              fontSize: 21,
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
