import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

const AI_TERMINAL_LINES: { text: string; color?: string }[] = [
  { text: '[Emulator] Step 1: tap - id="Add"' },
  { text: "  Waiting for page to stabilize..." },
  {
    text: "  AI readiness: loading (90%)",
    color: "#FFB900",
  },
  {
    text: "    ProgressBar indicating loading...",
    color: "#FFB900",
  },
  { text: "  Extending timeout to 30s, polling 4s" },
  { text: "  Page source: 8 -> 46 elements" },
  {
    text: "  AI readiness: ready (95%)",
    color: "#4caf50",
  },
  {
    text: "    Buttons and text fields detected.",
    color: "#4caf50",
  },
  {
    text: "    AI confirmed ready.",
    color: "#4caf50",
  },
  { text: "  Stabilized 14991ms (46 elements)" },
  { text: "  Element found in 207ms" },
  { text: "  XML match: 31/34 (91.2%)" },
  { text: "" },
  { text: "[Emulator] Step 2: sendKeys" },
  { text: "  Waiting for page to stabilize..." },
  {
    text: "  AI readiness: loading (90%)",
    color: "#FFB900",
  },
  {
    text: "    ProgressBar indicates loading...",
    color: "#FFB900",
  },
  { text: "  Page source: 8 -> 46 elements" },
  {
    text: "  AI readiness: ready (95%)",
    color: "#4caf50",
  },
  {
    text: "    Fully loaded. AI confirmed ready.",
    color: "#4caf50",
  },
  { text: "  Stabilized 12467ms (46 elements)" },
  { text: "" },
  { text: "[Emulator] Verifying trailing evidence" },
  {
    text: "  AI readiness: loading (90%)",
    color: "#FFB900",
  },
  {
    text: "    Downloading managed resources...",
    color: "#FFB900",
  },
  { text: "  Page source: 12 -> 68 elements" },
  {
    text: "  AI readiness: ready (95%)",
    color: "#4caf50",
  },
  {
    text: "    Fully loaded. AI confirmed ready.",
    color: "#4caf50",
  },
  { text: "  Stabilized 28567ms (68 elements)" },
  { text: "  XML match: 29/29 (100.0%)" },
  {
    text: "  Evidence verification passed",
    color: "#4caf50",
  },
];

/**
 * Standalone AI Terminal animation for GIF export.
 * Exact same styling as the AITerminal in SolutionScene,
 * but fills the entire composition (no absolute positioning offsets).
 */
export const AITerminalGif: React.FC = () => {
  const frame = useCurrentFrame();

  // Terminal is always fully visible (no entrance animation)
  // Typing starts immediately at frame 0
  const charsPerFrame = 10;
  const totalCharsTyped = frame * charsPerFrame;

  // Build visible lines
  let charsRemaining = totalCharsTyped;
  const visibleLines: { text: string; color?: string; partial: boolean }[] = [];
  for (const line of AI_TERMINAL_LINES) {
    if (charsRemaining <= 0) break;
    if (charsRemaining >= line.text.length) {
      visibleLines.push({ ...line, partial: false });
      charsRemaining -= line.text.length;
    } else {
      visibleLines.push({
        text: line.text.slice(0, charsRemaining),
        color: line.color,
        partial: true,
      });
      charsRemaining = 0;
    }
  }

  // Only show the last N lines that fit
  const maxVisibleLines = 20;
  const displayLines = visibleLines.slice(-maxVisibleLines);

  return (
    <AbsoluteFill
      style={{
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          height: 36,
          backgroundColor: "#2d2d2d",
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          gap: 8,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#ff5f56",
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#ffbd2e",
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#27c93f",
          }}
        />
        <span
          style={{
            fontFamily: "SF Mono, Consolas, monospace",
            fontSize: 13,
            color: "#999",
            marginLeft: 10,
          }}
        >
          autotest -- AI Evidence Evaluation
        </span>
      </div>
      {/* Terminal body */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#1a1a2e",
          padding: "10px 16px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        {displayLines.map((line, i) => (
          <div
            key={`tl-${i}`}
            style={{
              fontFamily: "SF Mono, Consolas, monospace",
              fontSize: 24,
              lineHeight: 1.55,
              color: line.color || "#b0c4de",
              whiteSpace: "pre",
              minHeight: line.text === "" ? 16 : undefined,
            }}
          >
            {line.text}
            {line.partial && (
              <span
                style={{
                  display: "inline-block",
                  width: 12,
                  height: 26,
                  backgroundColor: "#b0c4de",
                  marginLeft: 1,
                  verticalAlign: "text-bottom",
                  opacity: Math.sin(frame * 0.4) > 0 ? 1 : 0,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
