import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Animated stick-figure "buddy" sitting at a desk, typing frantically.
 * All SVG, no external assets. Driven entirely by useCurrentFrame().
 */
export const TypingCharacter: React.FC<{
  scale?: number;
  mood?: "neutral" | "stressed" | "exhausted";
}> = ({ scale = 1, mood = "neutral" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Typing bounce: hands oscillate up/down
  const typingCycle = Math.sin((frame / fps) * 12) * 3;
  // Head bob (subtle)
  const headBob = Math.sin((frame / fps) * 6) * 1.5;
  // Stress sweat drops
  const sweatOpacity =
    mood === "stressed" || mood === "exhausted"
      ? interpolate(Math.sin((frame / fps) * 4), [-1, 1], [0.3, 1])
      : 0;
  // Exhausted: slump forward
  const slump = mood === "exhausted" ? 8 : 0;
  // Eye style
  const eyeScale = mood === "exhausted" ? 0.5 : 1;

  return (
    <svg
      width={200 * scale}
      height={220 * scale}
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Desk */}
      <rect x="30" y="150" width="140" height="8" rx="3" fill="#5a4a3a" />
      <rect x="45" y="158" width="8" height="50" rx="2" fill="#5a4a3a" />
      <rect x="147" y="158" width="8" height="50" rx="2" fill="#5a4a3a" />

      {/* Laptop on desk */}
      <rect x="60" y="130" width="80" height="20" rx="3" fill="#333" />
      {/* Screen */}
      <rect x="65" y="90" width="70" height="42" rx="4" fill="#1a1a2e" />
      <rect x="69" y="94" width="62" height="34" rx="2" fill="#16213e">
        {/* Screen glow */}
      </rect>
      {/* Screen content - flickering code lines */}
      {[0, 1, 2, 3, 4].map((i) => {
        const lineWidth = 20 + ((frame * 3 + i * 17) % 30);
        return (
          <rect
            key={`code-${i}`}
            x={73}
            y={98 + i * 6}
            width={lineWidth}
            height={3}
            rx={1}
            fill="#0078D4"
            opacity={0.5 + Math.sin((frame + i * 10) / 8) * 0.3}
          />
        );
      })}

      {/* Body */}
      <g transform={`translate(${slump}, ${slump / 2})`}>
        {/* Torso */}
        <ellipse cx="100" cy="128" rx="18" ry="22" fill="#4a90d9" />

        {/* Arms - typing animation */}
        {/* Left arm */}
        <line
          x1="84"
          y1="118"
          x2={70}
          y2={140 + typingCycle}
          stroke="#ffcc99"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Right arm */}
        <line
          x1="116"
          y1="118"
          x2={130}
          y2={140 - typingCycle}
          stroke="#ffcc99"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Left hand */}
        <circle cx={70} cy={142 + typingCycle} r="4" fill="#ffcc99" />
        {/* Right hand */}
        <circle cx={130} cy={142 - typingCycle} r="4" fill="#ffcc99" />

        {/* Head */}
        <circle
          cx="100"
          cy={80 + headBob}
          r="22"
          fill="#ffcc99"
          stroke="#e6b380"
          strokeWidth="1"
        />
        {/* Hair */}
        <ellipse cx="100" cy={67 + headBob} rx="22" ry="10" fill="#3d2b1f" />

        {/* Eyes */}
        <ellipse
          cx="92"
          cy={78 + headBob}
          rx="3"
          ry={3 * eyeScale}
          fill="#333"
        />
        <ellipse
          cx="108"
          cy={78 + headBob}
          rx="3"
          ry={3 * eyeScale}
          fill="#333"
        />

        {/* Mouth */}
        {mood === "stressed" ? (
          <path
            d={`M 92 ${90 + headBob} Q 100 ${86 + headBob} 108 ${90 + headBob}`}
            stroke="#333"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        ) : mood === "exhausted" ? (
          <ellipse
            cx="100"
            cy={88 + headBob}
            rx="4"
            ry="3"
            fill="#333"
            opacity="0.6"
          />
        ) : (
          <line
            x1="94"
            y1={88 + headBob}
            x2="106"
            y2={88 + headBob}
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
          />
        )}

        {/* Sweat drops for stressed/exhausted */}
        {(mood === "stressed" || mood === "exhausted") && (
          <>
            <circle
              cx="125"
              cy={72 + headBob + ((frame * 1.5) % 20)}
              r="3"
              fill="#4fc3f7"
              opacity={sweatOpacity}
            />
            <circle
              cx="122"
              cy={66 + headBob + ((frame * 2) % 25)}
              r="2"
              fill="#4fc3f7"
              opacity={sweatOpacity * 0.7}
            />
          </>
        )}
      </g>

      {/* Chair */}
      <rect x="82" y="155" width="36" height="10" rx="4" fill="#333" />
      <rect x="97" y="165" width="6" height="20" rx="2" fill="#555" />
      <rect x="85" y="185" width="30" height="5" rx="2" fill="#555" />
    </svg>
  );
};

/**
 * A single phone/device screen with optional red X overlay for "broken test"
 */
export const DeviceScreen: React.FC<{
  color?: string;
  broken?: boolean;
  label?: string;
  scale?: number;
}> = ({ color = "#1a1a2e", broken = false, label, scale = 1 }) => {
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
        fill={color}
        stroke="#555"
        strokeWidth="2"
      />
      {/* Screen */}
      <rect x="6" y="12" width="48" height="72" rx="2" fill="#16213e" />
      {/* Screen content lines */}
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={`line-${i}`}
          x={10}
          y={18 + i * 14}
          width={30 + ((i * 7) % 15)}
          height={4}
          rx={2}
          fill="#334"
          opacity={0.6}
        />
      ))}

      {/* Broken overlay - red X */}
      {broken && (
        <g opacity={0.9}>
          <line
            x1="12"
            y1="20"
            x2="48"
            y2="76"
            stroke="#e53935"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="48"
            y1="20"
            x2="12"
            y2="76"
            stroke="#e53935"
            strokeWidth="4"
            strokeLinecap="round"
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
          fill="#999"
          fontFamily="SF Pro Text, Helvetica, Arial, sans-serif"
        >
          {label}
        </text>
      )}
    </svg>
  );
};

/**
 * Clock icon that ticks - represents time wasted
 */
export const TickingClock: React.FC<{
  scale?: number;
}> = ({ scale = 1 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Minute hand rotates fast, hour hand slow
  const minuteAngle = (frame / fps) * 360 * 2; // 2 full rotations per second
  const hourAngle = (frame / fps) * 30;

  return (
    <svg
      width={80 * scale}
      height={80 * scale}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clock body */}
      <circle
        cx="40"
        cy="40"
        r="36"
        fill="#1a1a2e"
        stroke="#e53935"
        strokeWidth="3"
      />
      {/* Hour marks */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 40 + Math.sin(angle) * 30;
        const y1 = 40 - Math.cos(angle) * 30;
        const x2 = 40 + Math.sin(angle) * 33;
        const y2 = 40 - Math.cos(angle) * 33;
        return (
          <line
            key={`mark-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#999"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
      {/* Hour hand */}
      <line
        x1="40"
        y1="40"
        x2={40 + Math.sin((hourAngle * Math.PI) / 180) * 18}
        y2={40 - Math.cos((hourAngle * Math.PI) / 180) * 18}
        stroke="#ccc"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Minute hand */}
      <line
        x1="40"
        y1="40"
        x2={40 + Math.sin((minuteAngle * Math.PI) / 180) * 26}
        y2={40 - Math.cos((minuteAngle * Math.PI) / 180) * 26}
        stroke="#e53935"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Center dot */}
      <circle cx="40" cy="40" r="3" fill="#e53935" />
    </svg>
  );
};
