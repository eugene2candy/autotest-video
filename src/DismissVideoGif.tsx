import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { Video } from "@remotion/media";
import { z } from "zod";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";

export const dismissVideoSchema = z.object({
  src: z.string(),
  label: z.string(),
});

/**
 * Renders a single dismiss video at 1.8x playback speed with a device label below.
 * No fade-in/out — video plays from beginning to end.
 * Styled to match DismissVideosPanel from SolutionScene.
 */
export const DismissVideoGif: React.FC<z.infer<typeof dismissVideoSchema>> = ({
  src,
  label,
}) => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 10,
          overflow: "hidden",
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Video
          src={staticFile(src)}
          muted
          playbackRate={1.8}
          style={{
            width: "100%",
            display: "block",
          }}
        />
        {/* Device label */}
        <div
          style={{
            color: "#222",
            fontFamily: FONT_FAMILY,
            fontSize: 28,
            fontWeight: 700,
            textAlign: "center",
            padding: "6px 0",
            letterSpacing: 0.5,
            marginTop: "auto",
            backgroundColor: "white",
          }}
        >
          {label}
        </div>
      </div>
    </AbsoluteFill>
  );
};
