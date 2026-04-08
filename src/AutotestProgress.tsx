import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";
const MICROSOFT_BLUE = "#0078D4";
const GREEN = "#4caf50";
const PURPLE = "#5B5FC7";
const ORANGE = "#FFB900";

/* ── Inline SVG Icons ─────────────────────────────────────────────── */

const UsersIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 36,
  color = MICROSOFT_BLUE,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const AndroidIcon: React.FC<{ size?: number }> = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#3DDC84">
    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-2.12-1.1-3.98-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
  </svg>
);

const WindowsIcon: React.FC<{ size?: number }> = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="winTL" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#50E6FF" />
        <stop offset="100%" stopColor="#0078D4" />
      </linearGradient>
      <linearGradient id="winTR" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0078D4" />
        <stop offset="100%" stopColor="#005BA1" />
      </linearGradient>
      <linearGradient id="winBL" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#29B6F6" />
        <stop offset="100%" stopColor="#0078D4" />
      </linearGradient>
      <linearGradient id="winBR" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0078D4" />
        <stop offset="100%" stopColor="#004E8C" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="43" height="43" rx="6" fill="url(#winTL)" />
    <rect x="53" y="4" width="43" height="43" rx="6" fill="url(#winTR)" />
    <rect x="4" y="53" width="43" height="43" rx="6" fill="url(#winBL)" />
    <rect x="53" y="53" width="43" height="43" rx="6" fill="url(#winBR)" />
  </svg>
);

const RocketIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 28,
  color = ORANGE,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const AppleIcon: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#333">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GlobeIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 22,
  color = "#00A4EF",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

/* ── People group icon (shows N+ person silhouettes) ──────────────── */

const PeopleGroup: React.FC<{
  count: number;
  label: string;
  color?: string;
  size?: number;
}> = ({ count, label, color = "#666", size = 28 }) => {
  // Show 3 visible person silhouettes + "N+" label
  const personW = size * 0.6;
  const overlap = size * 0.32;
  const totalPeopleW = personW * 3 - overlap * 2;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <div
        style={{
          display: "flex",
          position: "relative",
          width: totalPeopleW,
          height: size,
        }}
      >
        {[0, 1, 2].map((i) => (
          <svg
            key={i}
            width={personW}
            height={size}
            viewBox="0 0 20 28"
            fill={color}
            style={{
              position: "absolute",
              left: i * (personW - overlap),
              opacity: 1 - i * 0.15,
            }}
          >
            <circle cx="10" cy="8" r="5.5" />
            <path d="M1 26c0-5 4-9 9-9s9 4 9 9" />
          </svg>
        ))}
      </div>
      <span
        style={{
          fontFamily: FONT_FAMILY,
          fontSize: size * 1.1,
          fontWeight: 800,
          color,
          lineHeight: 1,
        }}
      >
        {count}+ {label}
      </span>
    </div>
  );
};

/* ── Glass card wrapper ───────────────────────────────────────────── */

const GlassCard: React.FC<{
  children: React.ReactNode;
  accent?: string;
  style?: React.CSSProperties;
}> = ({ children, accent = MICROSOFT_BLUE, style }) => (
  <div
    style={{
      borderRadius: 18,
      border: `2.5px solid ${accent}40`,
      backgroundColor: "rgba(255,255,255,0.6)",
      backdropFilter: "blur(12px)",
      boxShadow: `0 6px 28px ${accent}18`,
      padding: "44px 48px",
      ...style,
    }}
  >
    {children}
  </div>
);

/* ── Team row component ───────────────────────────────────────────── */

const TeamRow: React.FC<{
  icon: React.ReactNode;
  label: string;
  count?: number;
  countLabel?: string;
  accent?: string;
}> = ({ icon, label, count, countLabel, accent = MICROSOFT_BLUE }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 26,
      padding: "26px 0",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
    }}
  >
    <div
      style={{
        width: 76,
        height: 76,
        borderRadius: 18,
        backgroundColor: `${accent}14`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {icon}
    </div>
    {count != null ? (
      <PeopleGroup
        count={count}
        label={countLabel || label}
        color={accent}
        size={38}
      />
    ) : (
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 44,
            fontWeight: 600,
            color: "#222",
            lineHeight: 1.3,
          }}
        >
          {label}
        </div>
      </div>
    )}
  </div>
);

/* ── Coming soon platform pill ────────────────────────────────────── */

const PlatformPill: React.FC<{
  icon: React.ReactNode;
  label: string;
}> = ({ icon, label }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 18,
      backgroundColor: "rgba(255,255,255,0.7)",
      border: "1.5px dashed rgba(0,0,0,0.15)",
      borderRadius: 18,
      padding: "22px 30px",
    }}
  >
    {icon}
    <span
      style={{
        fontFamily: FONT_FAMILY,
        fontSize: 40,
        fontWeight: 500,
        color: "#444",
      }}
    >
      {label}
    </span>
  </div>
);

/* ══════════════════════════════════════════════════════════════════════
   AutotestProgress — static 1-frame "Who's Using" overview
   ══════════════════════════════════════════════════════════════════════ */

export const AutotestProgress: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        fontFamily: FONT_FAMILY,
      }}
    >
      {/* ── Blurred background ── */}
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

      {/* ── Content layer ── */}
      <AbsoluteFill
        style={{
          padding: "60px 80px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 10,
          }}
        >
          <UsersIcon size={56} color={MICROSOFT_BLUE} />
          <h1
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 64,
              fontWeight: 800,
              color: "#111",
              margin: 0,
              letterSpacing: -0.5,
            }}
          >
            Who's Using Autotest
          </h1>
        </div>

        <div
          style={{
            width: 120,
            height: 4,
            borderRadius: 2,
            backgroundColor: MICROSOFT_BLUE,
            marginBottom: 40,
          }}
        />

        {/* Main 2-column layout */}
        <div
          style={{
            display: "flex",
            gap: 40,
            flex: 1,
          }}
        >
          {/* ── Left column: Active Teams & Vendors ── */}
          <div
            style={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <GlassCard accent={MICROSOFT_BLUE} style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 28,
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: GREEN,
                    boxShadow: `0 0 8px ${GREEN}60`,
                  }}
                />
                <span
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: 34,
                    fontWeight: 700,
                    color: "#444",
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                  }}
                >
                  Active Teams
                </span>
              </div>

              <TeamRow
                icon={<WindowsIcon size={44} />}
                label="Windows App for Android Team"
                accent={MICROSOFT_BLUE}
              />
              <TeamRow
                icon={<WindowsIcon size={44} />}
                label="Windows App for Windows Team"
                accent={MICROSOFT_BLUE}
              />

              {/* Divider */}
              <div style={{ height: 28 }} />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: PURPLE,
                    boxShadow: `0 0 8px ${PURPLE}60`,
                  }}
                />
                <span
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: 34,
                    fontWeight: 700,
                    color: "#444",
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                  }}
                >
                  Testing Vendors
                </span>
              </div>

              <TeamRow
                icon={<AndroidIcon size={42} />}
                label="Android Testing Vendors"
                count={6}
                countLabel="Android Testing Vendors"
                accent="#3DDC84"
              />
              <TeamRow
                icon={<WindowsIcon size={42} />}
                label="Windows Testing Vendors"
                count={7}
                countLabel="Windows Testing Vendors"
                accent={MICROSOFT_BLUE}
              />
            </GlassCard>
          </div>

          {/* ── Right column: Coming Soon ── */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <GlassCard accent={ORANGE} style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 36,
                }}
              >
                <RocketIcon size={44} color={ORANGE} />
                <span
                  style={{
                    fontFamily: FONT_FAMILY,
                    fontSize: 34,
                    fontWeight: 700,
                    color: "#444",
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                  }}
                >
                  Coming Soon
                </span>
              </div>

              <div
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 38,
                  fontWeight: 600,
                  color: "#333",
                  marginBottom: 32,
                  lineHeight: 1.5,
                }}
              >
                Autotest expanding to more platforms:
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 28,
                }}
              >
                <PlatformPill icon={<AppleIcon size={38} />} label="iOS" />
                <PlatformPill icon={<AppleIcon size={38} />} label="macOS" />
                <PlatformPill
                  icon={<GlobeIcon size={38} color="#00A4EF" />}
                  label="Browser (Web)"
                />
              </div>
            </GlassCard>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
