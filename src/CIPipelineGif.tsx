import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";
const PIPELINE_BLUE = "#00A4EF";

/**
 * CI Pipeline Flow GIF — all 4 steps fully visible from frame 0.
 * Only the "Testing..." dots and progress bar animate.
 * Designed for looping GIF export.
 *
 * Matches CIPipelineFlow styling from SolutionScene exactly.
 */
export const CIPipelineGif: React.FC = () => {
  const frame = useCurrentFrame();

  // Testing dots cycle: "", ".", "..", "..." every 5 frames → period = 20 frames
  const testingDots = ".".repeat(Math.floor((frame / 5) % 4));

  // Progress bar loops: ramps 0→100 over 20 frames, then resets
  const testProgress = ((frame % 20) / 19) * 100;

  const boxStyle = (border: string): React.CSSProperties => ({
    borderRadius: 16,
    border: `3px solid ${border}`,
    backgroundColor: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(8px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    padding: "12px 16px",
  });

  const labelStyle: React.CSSProperties = {
    fontFamily: FONT_FAMILY,
    fontSize: 28,
    fontWeight: 700,
    color: "#111",
    textAlign: "center",
    whiteSpace: "pre-line",
    lineHeight: 1.1,
  };

  const renderArrow = () => (
    <div
      style={{
        width: 100,
        position: "relative",
        marginLeft: 5,
        marginRight: 5,
      }}
    >
      {/* Track */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 10,
          backgroundColor: `${PIPELINE_BLUE}30`,
          borderRadius: 5,
        }}
      />
      {/* Fill — fully filled */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 10,
          backgroundColor: PIPELINE_BLUE,
          borderRadius: 5,
        }}
      />
      {/* Arrowhead */}
      <div
        style={{
          position: "absolute",
          right: -10,
          top: -7,
          width: 0,
          height: 0,
          borderTop: "12px solid transparent",
          borderBottom: "12px solid transparent",
          borderLeft: `14px solid ${PIPELINE_BLUE}`,
        }}
      />
    </div>
  );

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
        {/* Step 1: Build */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ ...boxStyle(PIPELINE_BLUE), width: 280, height: 220 }}>
            <span style={{ fontSize: 64 }}>📦</span>
            <span style={labelStyle}>Build{"\n"}App Package</span>
          </div>
        </div>

        {renderArrow()}

        {/* Step 2: Self-Hosted Agent */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ ...boxStyle("#ff9800"), width: 380, height: 320 }}>
            <span style={{ fontSize: 56 }}>🖥️</span>
            <span style={{ ...labelStyle, fontSize: 26 }}>
              Self-Hosted Agent
            </span>
            <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
              {["📱 Android", "📱 iOS"].map((device, idx) => (
                <div
                  key={`dev-${idx}`}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 12,
                    backgroundColor: "rgba(0,0,0,0.08)",
                    border: "1px solid #ccc",
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONT_FAMILY,
                      fontSize: 22,
                      fontWeight: 600,
                      color: "#333",
                    }}
                  >
                    {device}
                  </span>
                </div>
              ))}
            </div>
            <span
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 26,
                fontWeight: 600,
                color: "#666",
                marginTop: 10,
              }}
            >
              Devices attached
            </span>
          </div>
        </div>

        {renderArrow()}

        {/* Step 3: Testing (animated) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ ...boxStyle("#4caf50"), width: 320, height: 280 }}>
            <span style={{ fontSize: 64 }}>🧪</span>
            <span style={labelStyle}>Testing{testingDots}</span>
            {/* Progress bar */}
            <div
              style={{
                width: "85%",
                height: 14,
                backgroundColor: "#e0e0e0",
                borderRadius: 7,
                marginTop: 12,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${testProgress}%`,
                  height: "100%",
                  backgroundColor: "#4caf50",
                  borderRadius: 7,
                }}
              />
            </div>
            <span
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 22,
                color: "#888",
                fontWeight: 600,
                marginTop: 6,
              }}
            >
              {Math.floor(testProgress)}%
            </span>
          </div>
        </div>

        {renderArrow()}

        {/* Step 4: Report */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ ...boxStyle("#9c27b0"), width: 280, height: 220 }}>
            <span style={{ fontSize: 64 }}>📊</span>
            <span style={labelStyle}>Publish{"\n"}Report</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
