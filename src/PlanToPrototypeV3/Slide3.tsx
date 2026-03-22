import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const FONT = "SF Pro Text, Helvetica, Arial, sans-serif";
const BLUE = "#0078D4";
const RED = "#e53935";
const GREEN = "#4caf50";

const BulletItem: React.FC<{
  text: string;
  accent: string;
}> = ({ text, accent }) => (
  <div
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
        color: accent,
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
        color: "#444",
        lineHeight: 1.35,
      }}
    >
      {text}
    </div>
  </div>
);

/**
 * Slide 3 — "AI as Glue + What's Next"
 * Appium before/after example + next steps.
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
            AI as Glue
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
            A new possibility — connecting what was previously disconnected
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

        {/* Before / After side by side */}
        <div style={{ display: "flex", gap: 24, flex: 1 }}>
          {/* BEFORE */}
          <div
            style={{
              flex: 1,
              borderRadius: 18,
              border: `2px solid ${RED}35`,
              backgroundColor: `${RED}08`,
              padding: "28px 32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: FONT,
                fontSize: 28,
                fontWeight: 800,
                color: RED,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Before: The Bottleneck
            </div>

            <div
              style={{
                fontFamily: FONT,
                fontSize: 30,
                fontWeight: 700,
                color: "#333",
                marginBottom: 16,
              }}
            >
              Appium is powerful, BUT:
            </div>

            <BulletItem text="Scripts are hardcoded" accent={RED} />
            <BulletItem text="Break across devices" accent={RED} />
            <BulletItem text="Regular maintenance required" accent={RED} />
            <BulletItem text="Dev gives up → back to manual" accent={RED} />

            <div style={{ flex: 1 }} />

            <div
              style={{
                fontFamily: FONT,
                fontSize: 26,
                color: "#666",
                fontStyle: "italic",
                lineHeight: 1.45,
                paddingTop: 16,
                borderTop: `1.5px solid ${RED}25`,
              }}
            >
              The tool was capable. The glue was the problem.
              <br />
              <strong style={{ color: RED, fontStyle: "normal" }}>
                We lived with it.
              </strong>
            </div>
          </div>

          {/* WITH AI */}
          <div
            style={{
              flex: 1,
              borderRadius: 18,
              border: `2px solid ${GREEN}35`,
              backgroundColor: `${GREEN}08`,
              padding: "28px 32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: FONT,
                fontSize: 28,
                fontWeight: 800,
                color: GREEN,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              With AI: Gap Solved
            </div>

            <div
              style={{
                fontFamily: FONT,
                fontSize: 30,
                fontWeight: 700,
                color: "#333",
                marginBottom: 16,
              }}
            >
              Same Appium, AI replaces scripts:
            </div>

            <BulletItem text="Dynamic element finding" accent={GREEN} />
            <BulletItem text="AI adapts when UI changes" accent={GREEN} />
            <BulletItem text="No regular script maintenance" accent={GREEN} />
            <BulletItem text="Tests self-heal across devices" accent={GREEN} />

            <div style={{ flex: 1 }} />

            <div
              style={{
                fontFamily: FONT,
                fontSize: 26,
                color: "#666",
                fontStyle: "italic",
                lineHeight: 1.45,
                paddingTop: 16,
                borderTop: `1.5px solid ${GREEN}25`,
              }}
            >
              The tool is the same.
              <br />
              <strong style={{ color: GREEN, fontStyle: "normal" }}>
                AI provides another possibility.
              </strong>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div
          style={{
            marginTop: 20,
            padding: "24px 36px",
            borderRadius: 16,
            backgroundColor: `${BLUE}12`,
            border: `2px solid ${BLUE}50`,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 24,
              fontWeight: 800,
              color: BLUE,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            {"WHAT'S NEXT"}
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {[
              "Apply this pattern to more workflow gaps",
              "Engineer + PM + AI: faster cycles, better outcomes",
              "Human judgment is MORE important — AI makes it actionable at speed",
            ].map((item) => (
              <div
                key={item}
                style={{
                  flex: 1,
                  fontFamily: FONT,
                  fontSize: 26,
                  color: "#333",
                  padding: "14px 20px",
                  borderRadius: 10,
                  backgroundColor: "rgba(255,255,255,0.55)",
                  border: `1.5px solid ${BLUE}35`,
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
