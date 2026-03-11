import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { RecordButton } from "./SolutionScene/SolutionIcons";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";

/**
 * Minimal "Record Once" title + animated RecordButton icon
 * over the same blurred background used in SolutionScene.
 *
 * Duration should be set to 47 frames (30 fps) so the
 * RecordButton pulse (sin period = 2π / 4 * 30 ≈ 47 frames)
 * loops seamlessly when rendered as an infinite-loop GIF.
 */
export const RecordOnceGif: React.FC = () => {
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

      {/* Title + RecordButton icon — top 6 %, same as original */}
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
          }}
        >
          <span style={{ color: "#e53935" }}>Record</span>{" "}
          <span style={{ color: "#111" }}>Once</span>
          <div style={{ marginLeft: 10 }}>
            <RecordButton scale={0.8} />
          </div>
        </h2>
      </div>
    </AbsoluteFill>
  );
};
