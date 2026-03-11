import React from "react";
import { AbsoluteFill } from "remotion";

const FONT_FAMILY = "SF Pro Text, Helvetica, Arial, sans-serif";
const MICROSOFT_BLUE = "#0078D4";

const SIGNATURE_DEVICES = [
  { name: "Emulator", match: 18, total: 18, pct: 100, color: "#4caf50" },
  { name: "Pixel", match: 31, total: 34, pct: 91.2, color: "#FFB900" },
  { name: "Samsung", match: 19, total: 20, pct: 95.0, color: "#FFB900" },
] as const;

const sigLines = [
  'accessibility_id: "Add"',
  "class: android.widget.Button",
  "parent: LinearLayout",
  "siblings: [TextView, ImageView]",
  "depth: 5 / tree_size: 18",
];

const cardStyle = (borderColor: string): React.CSSProperties => ({
  borderRadius: 16,
  border: `3px solid ${borderColor}`,
  backgroundColor: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  padding: "14px 20px",
  overflow: "hidden",
});

const monoStyle: React.CSSProperties = {
  fontFamily: "SF Mono, Consolas, monospace",
  fontSize: 35,
  lineHeight: 1.55,
  color: "#444",
};

/**
 * Static still of the SmartElementPanel at its fully-completed state.
 * All animations resolved: every element visible, bars filled, checkmarks shown, summary label visible.
 * Transparent background for PPT overlay use.
 */
export const SmartElementStill: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
          width: "100%",
        }}
      >
        {/* TOP: Source signature card */}
        <div style={{ width: "100%" }}>
          <div style={{ ...cardStyle(MICROSOFT_BLUE), width: "100%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 8,
              }}
            >
              <span style={{ fontSize: 36 }}>🔍</span>
              <span
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: 32,
                  fontWeight: 700,
                  color: MICROSOFT_BLUE,
                }}
              >
                Recorded Element Signature
              </span>
            </div>
            {sigLines.map((line, i) => (
              <div key={`sig-${i}`} style={monoStyle}>
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE: Downward arrows — one per device, side-by-side */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            height: 60,
            flexShrink: 0,
          }}
        >
          {SIGNATURE_DEVICES.map((_, i) => (
            <div
              key={`arrow-${i}`}
              style={{
                width: 8,
                height: 50,
                position: "relative",
              }}
            >
              {/* Track */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 8,
                  height: "100%",
                  backgroundColor: `${MICROSOFT_BLUE}25`,
                  borderRadius: 4,
                }}
              />
              {/* Fill — fully filled */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 8,
                  height: "100%",
                  backgroundColor: MICROSOFT_BLUE,
                  borderRadius: 4,
                }}
              />
              {/* Arrowhead (downward) */}
              <div
                style={{
                  position: "absolute",
                  bottom: -10,
                  left: -6,
                  width: 0,
                  height: 0,
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderTop: `12px solid ${MICROSOFT_BLUE}`,
                }}
              />
            </div>
          ))}
        </div>

        {/* BOTTOM: Device match cards — side-by-side in a row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 14,
            width: "100%",
          }}
        >
          {SIGNATURE_DEVICES.map((dev, i) => {
            const isFullMatch = dev.pct >= 100;
            return (
              <div
                key={`dev-${i}`}
                style={{
                  flex: 1,
                  transformOrigin: "top center",
                }}
              >
                <div style={cardStyle(dev.color)}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      marginBottom: 6,
                    }}
                  >
                    <span style={{ fontSize: 32 }}>📱</span>
                    <span
                      style={{
                        fontFamily: FONT_FAMILY,
                        fontSize: 30,
                        fontWeight: 700,
                        color: "#222",
                      }}
                    >
                      {dev.name}
                    </span>
                  </div>
                  {/* Match fraction */}
                  <div
                    style={{
                      fontFamily: "SF Mono, Consolas, monospace",
                      fontSize: 35,
                      fontWeight: 700,
                      color: dev.color,
                      textAlign: "center",
                      marginBottom: 6,
                    }}
                  >
                    {dev.match}/{dev.total}
                    <span
                      style={{
                        fontSize: 24,
                        marginLeft: 8,
                      }}
                    >
                      ✅
                    </span>
                  </div>
                  {/* Match progress bar */}
                  <div
                    style={{
                      width: "100%",
                      height: 10,
                      backgroundColor: "#e8e8e8",
                      borderRadius: 5,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${dev.pct}%`,
                        height: "100%",
                        backgroundColor: isFullMatch ? "#4caf50" : dev.color,
                        borderRadius: 5,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary label */}
        <div
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 30,
            fontWeight: 700,
            color: "#333",
            textAlign: "center",
            marginTop: 14,
          }}
        >
          All devices matched via element signatures
        </div>
      </div>
    </AbsoluteFill>
  );
};
