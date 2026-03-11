import React from "react";
import { z } from "zod";
import { AbsoluteFill } from "remotion";

export const solutionStepSchema = z.object({
  icon: z.string(),
  text: z.string(),
});

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";
const GREEN = "#4caf50";

/**
 * Single solution step (green numbered circle + label text) with transparent background.
 * Matches SolutionStep styling from SolutionScene exactly.
 * Fully visible (no animation). The step fills the composition via AbsoluteFill.
 */
export const SolutionStepStill: React.FC<{
  icon: string;
  text: string;
}> = ({ icon, text }) => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        gap: 24,
        flexDirection: "row",
      }}
    >
      <div
        style={{
          minWidth: 76,
          height: 76,
          borderRadius: 38,
          backgroundColor: GREEN,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: FONT_FAMILY,
          fontSize: 40,
          fontWeight: 700,
          color: "white",
        }}
      >
        {icon}
      </div>
      <span
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 48,
          color: "#111",
          fontWeight: 600,
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span>
    </AbsoluteFill>
  );
};
