import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { z } from "zod";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";
const RED = "#e53935";
const MICROSOFT_BLUE = "#0078D4";

export const titlePageSchema = z.object({
  variant: z.enum(["problem", "solution"]),
});

type Props = z.infer<typeof titlePageSchema>;

export const TitlePageStill: React.FC<Props> = ({ variant }) => {
  const isProblem = variant === "problem";

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Blurred background */}
      <Img
        src={staticFile("background-1.png")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(20px)",
          transform: "scale(1.1)",
        }}
      />
      {/* White overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255,255,255,0.3)",
        }}
      />
      {/* Title content */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          {isProblem ? (
            <h1
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 120,
                fontWeight: 800,
                color: "#111",
                margin: 0,
                letterSpacing: -2,
              }}
            >
              The Problem
            </h1>
          ) : (
            <h1
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 110,
                fontWeight: 800,
                color: "#111",
                margin: 0,
                letterSpacing: -2,
              }}
            >
              How <span style={{ color: MICROSOFT_BLUE }}>Autotest</span> Solves
              It
            </h1>
          )}
          {/* Underline */}
          <div
            style={{
              width: isProblem ? 360 : 580,
              height: 6,
              backgroundColor: isProblem ? RED : MICROSOFT_BLUE,
              margin: "12px auto 0",
              borderRadius: 3,
            }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
