import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { AutotestLogo } from "./AutotestLogo";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";
const MICROSOFT_BLUE = "#004E8C";

/**
 * AutotestIntro – opening scene of the Autotest demo video.
 *
 * Timeline (at 30 fps, ~6 s total = 180 frames):
 *   0-75   : Autotest logo draws on (left circle, stem, branches, target circles)
 *   45-105 : "Welcome to Autotest" fades / springs in
 *   85-135 : Subtitle "one time record, replay everywhere" fades in
 *   155-180: Everything fades out
 */
export const AutotestIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // --- Global fade-out near the end ---
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 25, durationInFrames - 5],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Blurred background image */}
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
      <AbsoluteFill style={{ opacity: fadeOut }}>
        {/* ---- Autotest Logo (starts at frame 0) ---- */}
        <Sequence from={0}>
          <AutotestLogo drawDuration={Math.round(2.5 * fps)} />
        </Sequence>

        {/* ---- Title: "Welcome to Autotest" ---- */}
        <Sequence from={Math.round(1.5 * fps)} layout="none">
          <WelcomeTitle />
        </Sequence>

        {/* ---- Subtitle ---- */}
        <Sequence from={Math.round(2.8 * fps)} layout="none">
          <Tagline />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

/* ---------- Title Component ---------- */
const WelcomeTitle: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = "Welcome to Autotest".split(" ");

  return (
    <div
      style={{
        position: "absolute",
        bottom: "12%",
        width: "100%",
        textAlign: "center",
      }}
    >
      {words.map((word, i) => {
        const delay = i * 4;
        const scale = spring({
          fps,
          frame: frame - delay,
          config: { damping: 200 },
        });
        const opacity = interpolate(
          spring({ fps, frame: frame - delay, config: { damping: 200 } }),
          [0, 1],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        );

        return (
          <span
            key={`${word}-${i}`}
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 700,
              fontSize: 130,
              color: "#111",
              display: "inline-block",
              marginLeft: 14,
              marginRight: 14,
              transform: `scale(${scale})`,
              opacity,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

/* ---------- Tagline / Subtitle Component ---------- */
const Tagline: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, Math.round(1 * fps)], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame, [0, Math.round(1 * fps)], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: "5%",
        width: "100%",
        textAlign: "center",
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <span
        style={{
          fontFamily: FONT_FAMILY,
          fontWeight: 600,
          fontSize: 60,
          color: "#333",
          letterSpacing: 3,
        }}
      >
        one time record, replay everywhere
      </span>
    </div>
  );
};
