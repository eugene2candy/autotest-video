import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const MICROSOFT_BLUE = "#0078D4";

/**
 * Animated "record" button that pulses with a red dot
 */
export const RecordButton: React.FC<{ scale?: number }> = ({ scale = 1 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pulse = 1 + Math.sin((frame / fps) * 4) * 0.15;
  const glowOpacity = interpolate(
    Math.sin((frame / fps) * 4),
    [-1, 1],
    [0.3, 0.8],
  );

  return (
    <svg
      width={80 * scale}
      height={80 * scale}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle
        cx="40"
        cy="40"
        r="36"
        stroke="#e53935"
        strokeWidth="3"
        fill="none"
        opacity={glowOpacity}
      />
      {/* Inner red dot - pulsing */}
      <circle cx="40" cy="40" r={16 * pulse} fill="#e53935" />
      {/* REC label */}
      <text
        x="40"
        y="68"
        textAnchor="middle"
        fontSize="10"
        fill="#e53935"
        fontFamily="SF Pro Text, Helvetica, Arial, sans-serif"
        fontWeight="700"
      >
        REC
      </text>
    </svg>
  );
};

/**
 * A device screen that shows a green checkmark (test passed)
 */
export const DeviceWithCheck: React.FC<{
  label?: string;
  scale?: number;
  showCheck?: boolean;
}> = ({ label, scale = 1, showCheck = true }) => {
  return (
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
        stroke={showCheck ? "#4caf50" : "#555"}
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
      {showCheck && (
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
      )}

      {/* Label */}
      {label && (
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
      )}
    </svg>
  );
};

/**
 * AI Brain icon with neural network lines
 */
export const AIBrain: React.FC<{ scale?: number }> = ({ scale = 1 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Neural pulse animation
  const pulsePhase = (frame / fps) * 3;

  return (
    <svg
      width={120 * scale}
      height={120 * scale}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Brain outline */}
      <ellipse
        cx="60"
        cy="55"
        rx="42"
        ry="38"
        fill="#0d1f3c"
        stroke={MICROSOFT_BLUE}
        strokeWidth="2.5"
      />

      {/* Left hemisphere */}
      <path
        d="M 60 20 Q 35 25, 28 45 Q 22 65, 35 80 Q 48 90, 60 88"
        stroke={MICROSOFT_BLUE}
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      {/* Right hemisphere */}
      <path
        d="M 60 20 Q 85 25, 92 45 Q 98 65, 85 80 Q 72 90, 60 88"
        stroke={MICROSOFT_BLUE}
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />

      {/* Neural network nodes */}
      {[
        { x: 42, y: 35 },
        { x: 78, y: 35 },
        { x: 35, y: 55 },
        { x: 60, y: 45 },
        { x: 85, y: 55 },
        { x: 45, y: 70 },
        { x: 75, y: 70 },
        { x: 60, y: 65 },
      ].map((node, i) => {
        const glow = 0.5 + Math.sin(pulsePhase + i * 0.8) * 0.5;
        return (
          <circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={4}
            fill={MICROSOFT_BLUE}
            opacity={glow}
          />
        );
      })}

      {/* Connections between nodes */}
      {[
        [42, 35, 60, 45],
        [78, 35, 60, 45],
        [35, 55, 60, 45],
        [85, 55, 60, 45],
        [60, 45, 45, 70],
        [60, 45, 75, 70],
        [60, 45, 60, 65],
        [35, 55, 45, 70],
        [85, 55, 75, 70],
      ].map((conn, i) => {
        const lineGlow = 0.2 + Math.sin(pulsePhase + i * 0.5) * 0.3;
        return (
          <line
            key={`conn-${i}`}
            x1={conn[0]}
            y1={conn[1]}
            x2={conn[2]}
            y2={conn[3]}
            stroke={MICROSOFT_BLUE}
            strokeWidth="1.5"
            opacity={lineGlow}
          />
        );
      })}

      {/* AI label */}
      <text
        x="60"
        y="108"
        textAnchor="middle"
        fontSize="14"
        fill={MICROSOFT_BLUE}
        fontFamily="SF Pro Text, Helvetica, Arial, sans-serif"
        fontWeight="700"
      >
        AI
      </text>
    </svg>
  );
};

/**
 * Screenshot evidence frame with magnifying glass
 */
export const EvidenceFrame: React.FC<{ scale?: number }> = ({ scale = 1 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scan line moving down the screenshot
  const scanY = 12 + (((frame / fps) * 50) % 60);

  return (
    <svg
      width={90 * scale}
      height={70 * scale}
      viewBox="0 0 90 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Frame */}
      <rect
        x="2"
        y="2"
        width="86"
        height="66"
        rx="4"
        fill="#0d1f3c"
        stroke={MICROSOFT_BLUE}
        strokeWidth="1.5"
      />

      {/* Screenshot content */}
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={`content-${i}`}
          x={8}
          y={10 + i * 13}
          width={40 + ((i * 11) % 25)}
          height={6}
          rx={2}
          fill="#1a3a5c"
          opacity={0.7}
        />
      ))}

      {/* AI scan line */}
      <line
        x1="4"
        y1={scanY}
        x2="86"
        y2={scanY}
        stroke={MICROSOFT_BLUE}
        strokeWidth="1.5"
        opacity="0.7"
      />

      {/* Magnifying glass */}
      <circle
        cx="72"
        cy="52"
        r="10"
        fill="none"
        stroke={MICROSOFT_BLUE}
        strokeWidth="2"
      />
      <line
        x1="79"
        y1="59"
        x2="86"
        y2="66"
        stroke={MICROSOFT_BLUE}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Check inside magnifier */}
      <polyline
        points="66,52 70,56 78,48"
        stroke="#4caf50"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
