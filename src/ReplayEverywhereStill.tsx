import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";
const GREEN = "#4caf50";
const MICROSOFT_BLUE = "#0078D4";

/**
 * Still image: "Replay Everywhere w/ AI-Powered Intelligence" title
 * over the same blurred background used in SolutionScene.
 * Registered as a <Still> for single-frame PNG export.
 */
export const ReplayEverywhereStill: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Blurred background image (same as SolutionScene) */}
      <AbsoluteFill style={{ overflow: "hidden" }}>
        <Img
          src={staticFile("background-1.png")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(20px)",
            transform: "scale(1.1)",
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }} />

      {/* Title — same position and styling as AIPoweredAct */}
      <div
        style={{
          position: "absolute",
          top: "6%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 56,
            fontWeight: 700,
            color: "#111",
            margin: 0,
          }}
        >
          <span style={{ color: GREEN }}>Replay</span> Everywhere w/{" "}
          <span
            style={{
              color: MICROSOFT_BLUE,
              textShadow: `0 0 8px ${MICROSOFT_BLUE}80, 0 0 20px ${MICROSOFT_BLUE}40, 0 0 40px ${MICROSOFT_BLUE}20`,
              letterSpacing: 1,
            }}
          >
            AI-Powered
          </span>{" "}
          Intelligence
        </h2>
      </div>
    </AbsoluteFill>
  );
};
