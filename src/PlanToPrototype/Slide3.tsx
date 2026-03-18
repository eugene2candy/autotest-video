import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";
const MICROSOFT_BLUE = "#0078D4";
const RED = "#e53935";
const GREEN = "#E87B00";

/* ── Tool box (for Before diagram) ── */
const ToolBox: React.FC<{
  label: string;
  sub: string;
}> = ({ label, sub }) => (
  <div
    style={{
      flex: 1,
      borderRadius: 14,
      border: `2px solid ${RED}50`,
      backgroundColor: "rgba(255,255,255,0.55)",
      padding: "18px 20px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        fontFamily: FONT_FAMILY,
        fontSize: 29,
        fontWeight: 700,
        color: "#333",
        marginBottom: 4,
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontFamily: FONT_FAMILY,
        fontSize: 23,
        color: "#777",
        lineHeight: 1.35,
      }}
    >
      {sub}
    </div>
  </div>
);

/**
 * Slide 3 — "AI as the Glue: Connecting What Was Previously Disconnected"
 * Before/After diagrams: disconnected tools vs. AI glue layer.
 * Concrete example + implications box at the bottom.
 */
export const Slide3: React.FC = () => {
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
            {"From Plan to Prototype Cont'd"}
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
            AI as the Glue — Connecting Disconnected Workflows
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

        {/* ── Before / After side-by-side ── */}
        <div
          style={{
            display: "flex",
            gap: 20,
            flex: 1,
          }}
        >
          {/* BEFORE — Disconnected */}
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
                fontSize: 29,
                fontWeight: 800,
                color: RED,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Before: Isolated Tools
            </div>

            {/* Tool boxes */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <ToolBox label="Tool A" sub="Powerful but isolated" />
              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 31,
                  fontWeight: 700,
                  color: `${RED}60`,
                  margin: "0 10px",
                  flexShrink: 0,
                }}
              >
                ???
              </div>
              <ToolBox label="Tool B" sub="Powerful but isolated" />
              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 31,
                  fontWeight: 700,
                  color: `${RED}60`,
                  margin: "0 10px",
                  flexShrink: 0,
                }}
              >
                ???
              </div>
              <ToolBox label="Tool C" sub="Powerful but isolated" />
            </div>

            {/* Problem description */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {[
                "Human writes scripts to bridge gaps",
                "Scripts are brittle, break on edge cases",
                "Scripts are rigid, can't adapt",
                "Scripts become a maintenance burden",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    marginBottom: 7,
                  }}
                >
                  <div
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontSize: 27,
                      color: RED,
                      flexShrink: 0,
                    }}
                  >
                    -
                  </div>
                  <div
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontSize: 27,
                      color: "#444",
                      lineHeight: 1.35,
                    }}
                  >
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 27,
                fontWeight: 700,
                color: RED,
                marginTop: 8,
              }}
            >
              Result: More time on glue code than the actual work.
            </div>
          </div>

          {/* WITH AI — Connected */}
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
                fontSize: 29,
                fontWeight: 800,
                color: GREEN,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              With AI: Intelligent Connections
            </div>

            {/* Connected tools + AI layer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                marginBottom: 10,
              }}
            >
              {["Tool A", "Tool B", "Tool C"].map((tool) => (
                <div
                  key={tool}
                  style={{
                    borderRadius: 12,
                    border: `2px solid ${GREEN}50`,
                    backgroundColor: "rgba(255,255,255,0.55)",
                    padding: "10px 24px",
                    fontFamily: FONT_FAMILY,
                    fontSize: 27,
                    fontWeight: 700,
                    color: "#333",
                    textAlign: "center",
                  }}
                >
                  {tool}
                </div>
              ))}
            </div>

            {/* Connector lines visual */}
            <div
              style={{
                textAlign: "center",
                fontFamily: FONT_FAMILY,
                fontSize: 27,
                color: GREEN,
                marginBottom: 8,
              }}
            >
              {"|||"}
            </div>

            {/* AI Glue Layer box */}
            <div
              style={{
                borderRadius: 14,
                border: `2.5px solid ${MICROSOFT_BLUE}60`,
                backgroundColor: `${MICROSOFT_BLUE}12`,
                padding: "14px 20px",
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 27,
                  fontWeight: 800,
                  color: MICROSOFT_BLUE,
                  marginBottom: 8,
                  textAlign: "center",
                }}
              >
                AI GLUE LAYER
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  justifyContent: "center",
                }}
              >
                {[
                  "Understands what each tool does",
                  "Adapts when interfaces change",
                  "Handles edge cases dynamically",
                  "Translates between formats",
                  "Decides HOW based on context",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontSize: 23,
                      color: "#333",
                      padding: "5px 12px",
                      borderRadius: 8,
                      backgroundColor: "rgba(255,255,255,0.6)",
                      border: `1px solid ${MICROSOFT_BLUE}30`,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Human defines */}
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
                  fontFamily: FONT_FAMILY,
                  fontSize: 27,
                  color: "#333",
                  textAlign: "center",
                  lineHeight: 1.45,
                }}
              >
                <strong style={{ color: "#111" }}>
                  Human defines the WHAT and WHY.
                </strong>
                <br />
                AI figures out the HOW — and adapts when things change.
              </div>
            </div>
          </div>
        </div>

        {/* ── Implications box ── */}
        <div
          style={{
            marginTop: 10,
            padding: "16px 28px",
            borderRadius: 14,
            backgroundColor: `${MICROSOFT_BLUE}12`,
            border: `2.5px solid ${MICROSOFT_BLUE}50`,
          }}
        >
          <div style={{ display: "flex", gap: 32 }}>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 27,
                  fontWeight: 700,
                  color: RED,
                  marginBottom: 6,
                }}
              >
                BEFORE:
              </div>
              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 25,
                  color: "#444",
                  lineHeight: 1.4,
                }}
              >
                {
                  '"We have great tools, but connecting them is expensive and fragile. We spend more time on integration than on the actual problem."'
                }
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 27,
                  fontWeight: 700,
                  color: GREEN,
                  marginBottom: 6,
                }}
              >
                AFTER:
              </div>
              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 25,
                  color: "#444",
                  lineHeight: 1.4,
                }}
              >
                {
                  '"AI handles the connections — adapting dynamically. Engineers define WHAT should happen. AI figures out HOW to make the tools do it."'
                }
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: 10,
              paddingTop: 8,
              borderTop: `1.5px solid ${MICROSOFT_BLUE}30`,
              fontFamily: FONT_FAMILY,
              fontSize: 27,
              fontWeight: 700,
              color: "#222",
              textAlign: "center",
            }}
          >
            {
              "This is not about replacing tools. It's about making existing tools work together intelligently."
            }
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
