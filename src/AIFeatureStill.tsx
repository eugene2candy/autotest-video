import React from "react";
import { z } from "zod";
import { AbsoluteFill } from "remotion";

export const aiFeatureSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";
const MICROSOFT_BLUE = "#0078D4";

const ALL_FEATURES = [
  {
    title: "AI Evidence Evaluation",
    description: "AI analyzes screenshots & XML to verify app state",
  },
  {
    title: "Handles the Unexpected",
    description: "Permission dialogs, system popups — AI adapts automatically",
  },
  {
    title: "Smart Element Finding",
    description:
      "Uses element signatures to locate elements despite UI changes",
  },
];

/**
 * Measures all 3 cards together in a fit-content container.
 * Render as a still on a large canvas, then crop to find the natural size.
 */
export const AIFeatureMeasure: React.FC = () => {
  return (
    <AbsoluteFill>
      <div style={{ width: "fit-content" }}>
        {ALL_FEATURES.map((feat, i) => (
          <div
            key={i}
            style={{
              marginBottom: 28,
              padding: "20px 24px",
              borderRadius: 12,
              border: `2px solid ${MICROSOFT_BLUE}40`,
              backgroundColor: "rgba(255, 255, 255, 0.25)",
            }}
          >
            <div
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 46,
                fontWeight: 700,
                color: MICROSOFT_BLUE,
                textShadow: `0 0 8px ${MICROSOFT_BLUE}80, 0 0 20px ${MICROSOFT_BLUE}40, 0 0 40px ${MICROSOFT_BLUE}20`,
                letterSpacing: 1,
                marginBottom: 6,
              }}
            >
              {feat.title}
            </div>
            <div
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 34,
                color: "#444",
                lineHeight: 1.4,
              }}
            >
              {feat.description}
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

/**
 * Single AI feature card with transparent background.
 * Uses the exact same styling as AIFeatureCard in SolutionScene,
 * fully visible (opacity 1, no translate).
 * The card fills the entire composition — set composition width/height
 * to match the measured card dimensions.
 */
export const AIFeatureStill: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <AbsoluteFill
      style={{
        padding: "20px 24px",
        borderRadius: 12,
        border: `2px solid ${MICROSOFT_BLUE}40`,
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 46,
          fontWeight: 700,
          color: MICROSOFT_BLUE,
          textShadow: `0 0 8px ${MICROSOFT_BLUE}80, 0 0 20px ${MICROSOFT_BLUE}40, 0 0 40px ${MICROSOFT_BLUE}20`,
          letterSpacing: 1,
          marginBottom: 6,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: 34,
          color: "#444",
          lineHeight: 1.4,
        }}
      >
        {description}
      </div>
    </AbsoluteFill>
  );
};
