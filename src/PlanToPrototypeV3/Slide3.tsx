import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const FONT = "SF Pro Text, Helvetica, Arial, sans-serif";
const BLUE = "#0078D4";
const RED = "#e53935";
const GREEN = "#4caf50";

/**
 * Slide 3 — "AI as Glue + What's Next"
 * Appium before/after + next steps. Minimal words.
 */
export const Slide3: React.FC = () => {
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
            Case Study 2: AI as Glue
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
            A new possibility we didn't have before
          </h2>
        </div>

        <div
          style={{
            width: "100%",
            height: 2,
            backgroundColor: `${BLUE}40`,
            margin: "12px 0 24px",
          }}
        />

        {/* Before / After side by side */}
        <div style={{ display: "flex", gap: 28, flex: 1 }}>
          {/* BEFORE */}
          <div
            style={{
              flex: 1,
              borderRadius: 20,
              border: `2.5px solid ${RED}35`,
              backgroundColor: `${RED}08`,
              padding: "36px 40px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: FONT,
                fontSize: 48,
                fontWeight: 800,
                color: RED,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 36,
              }}
            >
              Before
            </div>

            <div
              style={{
                fontFamily: FONT,
                fontSize: 56,
                fontWeight: 700,
                color: "#222",
                marginBottom: 40,
              }}
            >
              Appium + Hardcoded Scripts
            </div>

            {["Scripts break across devices", "Constant maintenance", "Developers give up"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    fontFamily: FONT,
                    fontSize: 48,
                    color: "#555",
                    lineHeight: 1.3,
                    marginBottom: 24,
                    paddingLeft: 26,
                    borderLeft: `6px solid ${RED}40`,
                  }}
                >
                  {item}
                </div>
              ),
            )}

            <div
              style={{
                fontFamily: FONT,
                fontSize: 48,
                fontWeight: 700,
                color: RED,
                marginTop: "auto",
                paddingTop: 28,
                borderTop: `3px solid ${RED}20`,
              }}
            >
              We lived with the gap.
            </div>
          </div>

          {/* WITH AI */}
          <div
            style={{
              flex: 1,
              borderRadius: 20,
              border: `2.5px solid ${GREEN}35`,
              backgroundColor: `${GREEN}08`,
              padding: "36px 40px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: FONT,
                fontSize: 48,
                fontWeight: 800,
                color: GREEN,
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 36,
              }}
            >
              With AI
            </div>

            <div
              style={{
                fontFamily: FONT,
                fontSize: 56,
                fontWeight: 700,
                color: "#222",
                marginBottom: 40,
              }}
            >
              Appium + AI Dynamic Scripts
            </div>

            {["AI finds elements dynamically", "Adapts when UI changes", "Tests self-heal"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    fontFamily: FONT,
                    fontSize: 48,
                    color: "#555",
                    lineHeight: 1.3,
                    marginBottom: 24,
                    paddingLeft: 26,
                    borderLeft: `6px solid ${GREEN}40`,
                  }}
                >
                  {item}
                </div>
              ),
            )}

            <div
              style={{
                fontFamily: FONT,
                fontSize: 48,
                fontWeight: 700,
                color: GREEN,
                marginTop: "auto",
                paddingTop: 28,
                borderTop: `3px solid ${GREEN}20`,
              }}
            >
              AI provides another possibility.
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div
          style={{
            marginTop: 24,
            padding: "26px 40px",
            borderRadius: 18,
            backgroundColor: `${BLUE}12`,
            border: `2.5px solid ${BLUE}50`,
            display: "flex",
            alignItems: "center",
            gap: 40,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 30,
              fontWeight: 800,
              color: BLUE,
              letterSpacing: 2,
              flexShrink: 0,
            }}
          >
            {"WHAT'S NEXT"}
          </div>
          <div
            style={{
              fontFamily: FONT,
              fontSize: 30,
              color: "#333",
              lineHeight: 1.5,
            }}
          >
            Apply this pattern to more gaps · Human judgment matters more than
            ever · AI makes it actionable at speed
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
