import React from "react";
import { AbsoluteFill, staticFile, useVideoConfig } from "remotion";
import { Video } from "@remotion/media";

const VIDEO_FILE = "2026-03-27 15-31-28.mp4";

/**
 * Trim start: 5 minutes 20 seconds = 320 seconds.
 * Total video duration: 461.87s.
 * Usable portion: 461.87 - 320 = 141.87s => ceil(141.87 * 30) = 4257 frames.
 */
const TRIM_START_SECONDS = 320;
const PLAYBACK_RATE = 4;
export const AUTOTEST_DEMO2_DURATION = Math.ceil(4257 / PLAYBACK_RATE);

const LOG_PANEL_WIDTH = 620;

const FONT_FAMILY =
  "'Cascadia Code', 'Fira Code', 'Consolas', 'Courier New', monospace";

const LOG_LINES = [
  {
    text: '[DESKTOP-4TBMFAD] Step 2: sendKeys - xpath="//Edit"',
    type: "step" as const,
  },
  { text: "...", type: "dim" as const },
  {
    text: "[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page shows multiple interactive elements including buttons, text fields, and labels with meaningful content; no loading indicators or spinners detected.)",
    type: "default" as const,
  },
  { text: "...", type: "dim" as const },
  {
    text: "(IP entered via HTTP request → WinAppDriver → Win32 API → OS keystrokes)",
    type: "default" as const,
  },
  { text: "...", type: "dim" as const },
  {
    text: '[DESKTOP-4TBMFAD] Step 3: tap - xpath="//*[@Name="Add & Connect"]"',
    type: "step" as const,
  },
  { text: "...", type: "dim" as const },
  {
    text: "[DESKTOP-4TBMFAD]   Windows system dialog: checking via AI screenshot analysis...",
    type: "default" as const,
  },
  {
    text: "[DESKTOP-4TBMFAD]   AI Windows dialog detection: FOUND \"security\" (confidence: 100%, The visible dialog is a 'Remote Desktop Connection security warning' which is a Windows system security consent dialog asking if the user wants to connect to an unknown publisher remote desktop.)",
    type: "success" as const,
  },
  {
    text: '[DESKTOP-4TBMFAD]   Windows system dialog: AI detected "security" dialog, clicking "Connect"...',
    type: "default" as const,
  },
  {
    text: '[DESKTOP-4TBMFAD]   Windows system dialog: permission granted via "Connect" (WinAppDriver Root)',
    type: "success" as const,
  },
  { text: "...", type: "dim" as const },
];

const LINE_COLORS: Record<string, React.CSSProperties> = {
  step: { color: "#60a5fa", fontWeight: 700 },
  success: { color: "#4ade80", fontWeight: 700 },
  dim: { color: "#6b7280" },
  default: { color: "#4ade80" },
};

/**
 * AutotestDemo2 — plays the second screen recording video
 * trimmed from 5:20 to end, with a static pinned log overlay on the right.
 */
export const AutotestDemo2: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <Video
        src={staticFile(VIDEO_FILE)}
        muted
        playbackRate={PLAYBACK_RATE}
        trimBefore={TRIM_START_SECONDS * fps}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "auto",
          height: 1080,
          objectFit: "contain",
        }}
      />

      {/* Static log overlay — top right, auto-height */}
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          width: LOG_PANEL_WIDTH,
          backgroundColor: "rgba(0, 0, 0, 0.80)",
          display: "flex",
          flexDirection: "column",
          borderRadius: 10,
          border: "1px solid rgba(74, 222, 128, 0.2)",
          overflow: "hidden",
        }}
      >
        {/* Terminal title bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 16px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderBottom: "1px solid rgba(74, 222, 128, 0.15)",
          }}
        >
          <div style={{ display: "flex", gap: 6 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#ef4444",
              }}
            />
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#eab308",
              }}
            />
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#22c55e",
              }}
            />
          </div>
          <span
            style={{
              color: "rgba(74, 222, 128, 0.7)",
              fontFamily: FONT_FAMILY,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 0.5,
              marginLeft: 6,
            }}
          >
            autotest — terminal
          </span>
        </div>

        {/* Static log content */}
        <div
          style={{
            padding: "12px 14px",
            overflow: "hidden",
            fontFamily: FONT_FAMILY,
            fontSize: 13,
            lineHeight: "20px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
          }}
        >
          {LOG_LINES.map((line, i) => (
            <div
              key={i}
              style={{
                ...LINE_COLORS[line.type],
                marginBottom: 2,
              }}
            >
              {line.text}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
