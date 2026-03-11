import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { interpolate } from "remotion";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";

const platforms = [
  {
    name: "Android",
    devices: [
      "Samsung",
      "Pixel",
      "Xiaomi",
      "OnePlus",
      "Huawei",
      "Oppo",
      "Vivo",
      "Sony",
    ],
  },
  {
    name: "iOS / iPadOS",
    devices: [
      "iPhone 16",
      "iPhone 15",
      "iPhone 14",
      "iPhone 13",
      "iPad Pro",
      "iPad Air",
      "iPad Mini",
      "iPhone SE",
    ],
  },
  {
    name: "Windows",
    devices: [
      "Dell",
      "HP",
      "Lenovo",
      "Asus",
      "Acer",
      "MSI",
      "Surface",
      "Razer",
    ],
  },
  {
    name: "macOS",
    devices: [
      "MacBook Pro",
      "MacBook Air",
      "iMac",
      "Mac Mini",
      "Mac Studio",
      "Mac Pro",
      'iMac 24"',
      'MacBook 13"',
    ],
  },
  {
    name: "Linux",
    devices: [
      "Ubuntu",
      "Fedora",
      "Debian",
      "Arch",
      "RHEL",
      "SUSE",
      "Mint",
      "CentOS",
    ],
  },
  {
    name: "Browser",
    devices: [
      "Chrome",
      "Safari",
      "Firefox",
      "Edge",
      "Opera",
      "Brave",
      "Arc",
      "Vivaldi",
    ],
  },
];

/**
 * Inline DeviceWithCheck SVG — matches SolutionIcons.tsx exactly.
 * Always shows the green checkmark (showCheck = true).
 */
const DeviceWithCheck: React.FC<{ label: string; scale: number }> = ({
  label,
  scale,
}) => (
  <svg
    width={60 * scale}
    height={100 * scale}
    viewBox="0 0 60 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Phone body */}
    <rect
      x="2"
      y="2"
      width="56"
      height="96"
      rx="8"
      fill="#1a2a1e"
      stroke="#4caf50"
      strokeWidth="2"
    />
    {/* Screen */}
    <rect x="6" y="12" width="48" height="72" rx="2" fill="#0d1f12" />
    {/* Screen content - progress lines */}
    {[0, 1, 2, 3].map((i) => (
      <rect
        key={`line-${i}`}
        x={10}
        y={18 + i * 14}
        width={30 + ((i * 7) % 15)}
        height={4}
        rx={2}
        fill="#2e5a35"
        opacity={0.7}
      />
    ))}
    {/* Green checkmark */}
    <g>
      <circle cx="42" cy="70" r="10" fill="#4caf50" />
      <polyline
        points="36,70 40,74 48,66"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    {/* Label */}
    <text
      x="30"
      y="94"
      textAnchor="middle"
      fontSize="7"
      fill="#4caf50"
      fontFamily="SF Pro Text, Helvetica, Arial, sans-serif"
    >
      {label}
    </text>
  </svg>
);

/**
 * Scale Grid GIF — all 6 platform rows fully visible from frame 0.
 * Only the "→" arrows animate (bounce + pulse), looping every 30 frames.
 * Matches ScaleGrid from SolutionScene exactly.
 */
export const ScaleGridGif: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {platforms.map((platform, i) => {
          // Arrow animation: bounce right + opacity pulse, staggered per row
          const arrowTranslateX = interpolate(
            (frame + i * 5) % 30,
            [0, 15, 30],
            [0, 8, 0],
          );
          const arrowOpacity = interpolate(
            (frame + i * 5) % 30,
            [0, 15, 30],
            [0.5, 1, 0.5],
          );

          return (
            <div
              key={`scale-platform-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: 380,
                  flexShrink: 0,
                  fontFamily: FONT_FAMILY,
                  fontSize: 34,
                  fontWeight: 700,
                  color: "#111",
                  whiteSpace: "nowrap",
                }}
              >
                {platform.name} Test Cases
              </div>
              <span
                style={{
                  width: 50,
                  flexShrink: 0,
                  textAlign: "center",
                  fontFamily: FONT_FAMILY,
                  fontSize: 42,
                  color: "#333",
                  display: "inline-block",
                  transform: `translateX(${arrowTranslateX}px)`,
                  opacity: arrowOpacity,
                }}
              >
                →
              </span>
              <div style={{ display: "flex", gap: 14 }}>
                {platform.devices.map((device, j) => (
                  <div key={`scale-device-${i}-${j}`}>
                    <DeviceWithCheck scale={1.2} label={device} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
