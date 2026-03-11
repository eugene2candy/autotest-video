import React from "react";
import { z } from "zod";
import { AbsoluteFill } from "remotion";

export const summaryBadgeSchema = z.object({
  label: z.string(),
  color: z.string(),
});

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";

/**
 * Single summary badge with transparent background.
 * Matches the initial (pre-morph) badge styling from SummaryAct in SolutionScene:
 * 280x90, rounded white glassmorphism pill with colored border and text.
 * Fully visible (no animation). Fills the entire composition via AbsoluteFill.
 */
export const SummaryBadgeStill: React.FC<{
  label: string;
  color: string;
}> = ({ label, color }) => {
  return (
    <AbsoluteFill
      style={{
        borderRadius: 16,
        border: `3px solid ${color}`,
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 34,
          fontWeight: 700,
          color,
          textShadow: `0 0 8px ${color}40`,
          letterSpacing: 1,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </AbsoluteFill>
  );
};
