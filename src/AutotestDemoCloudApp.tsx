import React, { useMemo } from "react";
import {
  AbsoluteFill,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";
import { Video } from "@remotion/media";

const VIDEO_FILE = "cloud app.mp4";

/**
 * Video duration: 211.50s → 6345 frames at 30fps.
 * At 4× playback: ceil(6345 / 4) = 1587 frames.
 */
const PLAYBACK_RATE = 4;
export const AUTOTEST_DEMO_CLOUD_APP_DURATION = Math.ceil(
  (211.5 * 30) / PLAYBACK_RATE,
);

const LOG_TEXT = `[DESKTOP-4TBMFAD] Session created: 42e55811-b91e-4f12-afad-376efce32e63
[DESKTOP-4TBMFAD]
--- TEST SET [1/1]: cloud app ---
[DESKTOP-4TBMFAD] Preparing app...
[DESKTOP-4TBMFAD] Preparing Windows app for testing: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD]   Skipping reinstall — launching app directly
[DESKTOP-4TBMFAD] App ready (as-is)
[DESKTOP-4TBMFAD] Launching app...
[DESKTOP-4TBMFAD] Re-creating session targeting app: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD] Found window handle 0x2d101a, creating session with appTopLevelWindow
[DESKTOP-4TBMFAD] App-scoped session created: 2fc98895-a824-4ca4-9d85-f6f2c7b24070
[DESKTOP-4TBMFAD] [1/2] 001-cloud-app-account-20260402-173326.zip
[DESKTOP-4TBMFAD]
========================================
[DESKTOP-4TBMFAD] Running test case: cloud app account
[DESKTOP-4TBMFAD] App package: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD] Total steps: 2
[DESKTOP-4TBMFAD] Evidence source XMLs available: 3
[DESKTOP-4TBMFAD] ========================================
[DESKTOP-4TBMFAD] Pre-loaded 3 evidence screenshot(s) into cache
[DESKTOP-4TBMFAD] Pre-loaded 3 evidence XML file(s) into cache
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 1: tap - accessibility id="header-account-button"
[DESKTOP-4TBMFAD]   [Windows fast path] Element not found in 1758ms — falling through to full flow
[DESKTOP-4TBMFAD]   Waiting for page to stabilize...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains a large number of interactive elements, buttons, and content text with no visible loading indicators or spinners, indicating the page is fully loaded.)
[DESKTOP-4TBMFAD]   Page source stabilized after 11492ms (286 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   Screen matches expected evidence (78.4%) — skipping dialog sweep
[DESKTOP-4TBMFAD]   Waiting for element: accessibility id="header-account-button"
[DESKTOP-4TBMFAD]   Element found in 524ms
[DESKTOP-4TBMFAD]   XML structural comparison: 87/111 elements matched (78.4%, threshold: 70%)
[DESKTOP-4TBMFAD]     24 elements missing (showing first 3)
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur43|Name=Filter by Type|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur44|Name=Filter by Workspace|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur45|Name=Sort by A-Z|IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains a large number of interactive elements, buttons, text labels, and content indicating full load; no loading indicators or spinners detected.)
[DESKTOP-4TBMFAD]   Page source stabilized after 11011ms (297 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 96/120 elements matched (80.0%, threshold: 70%)
[DESKTOP-4TBMFAD]     24 elements missing (showing first 3)
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur43|Name=Filter by Type|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur44|Name=Filter by Workspace|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur45|Name=Sort by A-Z|IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification passed (80.0%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 2: tap - xpath="//List/Button/Image"
[DESKTOP-4TBMFAD]   [Windows fast path] Element not found in 2009ms — falling through to full flow
[DESKTOP-4TBMFAD]   Waiting for page to stabilize...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains a large number of interactive elements, buttons, text labels, and content indicating full load; no loading indicators or spinners detected.)
[DESKTOP-4TBMFAD]   Page source stabilized after 11654ms (297 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   Screen matches expected evidence (80.0%) — skipping dialog sweep
[DESKTOP-4TBMFAD]   Waiting for element: xpath="//List/Button/Image"
[DESKTOP-4TBMFAD]   Element found in 2947ms
[DESKTOP-4TBMFAD]   Refreshing page source for evidence comparison (element took 2947ms to appear)
[DESKTOP-4TBMFAD]   XML structural comparison: 96/120 elements matched (80.0%, threshold: 70%)
[DESKTOP-4TBMFAD]     24 elements missing (showing first 3)
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur43|Name=Filter by Type|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur44|Name=Filter by Workspace|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur45|Name=Sort by A-Z|IsEnabled=True
[DESKTOP-4TBMFAD]   [Phase 3.5] Executing skilled action: microsoft-oauth-login
[DESKTOP-4TBMFAD]   [SkilledAction] Executing: powershell.exe -NoProfile -ExecutionPolicy Bypass -File C:\\Users\\chengjiexu\\source\\repos\\WCX-AI-Autotest\\skilled-actions\\microsoft-oauth-login\\login.ps1 -username *** -password ***
[DESKTOP-4TBMFAD]   [SkilledAction] Timeout: 120000ms
[DESKTOP-4TBMFAD]   [SkilledAction] Creating Root session...
[DESKTOP-4TBMFAD]   [SkilledAction] Root session: f9fbb3d4-ca81-4310-afd4-89d2e14bcf3c
[DESKTOP-4TBMFAD]   [SkilledAction] Waiting for email field...
[DESKTOP-4TBMFAD]   [SkilledAction] Email entered
[DESKTOP-4TBMFAD]   [SkilledAction] Clicked Next
[DESKTOP-4TBMFAD]   [SkilledAction] Waiting for password field...
[DESKTOP-4TBMFAD]   [SkilledAction] Password entered
[DESKTOP-4TBMFAD]   [SkilledAction] Clicked Sign in
[DESKTOP-4TBMFAD]   [SkilledAction] Waiting for dialog to close...
[DESKTOP-4TBMFAD]   [SkilledAction] Dialog closed after 0s
[DESKTOP-4TBMFAD]   [SkilledAction] Login completed successfully
[DESKTOP-4TBMFAD]   [SkilledAction] Exited with code 0 (44939ms)
[DESKTOP-4TBMFAD]   [Phase 3.5] Skilled action completed in 44939ms
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, Page shows multiple interactive elements and content text with no loading indicators present)
[DESKTOP-4TBMFAD]   Page source stabilized after 8444ms (56 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 32/32 elements matched (100.0%, threshold: 70%)
[DESKTOP-4TBMFAD]   Post-action verification passed (100.0%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Verifying trailing evidence (step 5) -- final screen state check
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, Page shows multiple interactive elements and content text with no loading indicators present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 7640ms (56 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 32/32 elements matched (100.0%, threshold: 70%)
[DESKTOP-4TBMFAD]   Trailing evidence XML verification passed
[DESKTOP-4TBMFAD]   ✓ Step 1 SUCCESS
[DESKTOP-4TBMFAD]   ✓ Step 2 SUCCESS
[DESKTOP-4TBMFAD]
----------------------------------------
[DESKTOP-4TBMFAD] Test case cloud app account: PASSED
[DESKTOP-4TBMFAD] Success: 2, Failed: 0
[DESKTOP-4TBMFAD] ----------------------------------------
[DESKTOP-4TBMFAD] [2/2] 002-cloud-app-connect-20260402-173331.zip
[DESKTOP-4TBMFAD]
========================================
[DESKTOP-4TBMFAD] Running test case: cloud app connect
[DESKTOP-4TBMFAD] App package: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD] Total steps: 2
[DESKTOP-4TBMFAD] Evidence source XMLs available: 3
[DESKTOP-4TBMFAD] ========================================
[DESKTOP-4TBMFAD] Pre-loaded 3 evidence screenshot(s) into cache
[DESKTOP-4TBMFAD] Pre-loaded 3 evidence XML file(s) into cache
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 1: tap - accessibility id="nav-apps"
[DESKTOP-4TBMFAD]   [Windows fast path] Element found in 360ms — skipping stabilization/evidence
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page shows many interactive elements including buttons, menus, and content text with no loading indicators present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 8237ms (103 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 56/56 elements matched (100.0%, threshold: 70%)
[DESKTOP-4TBMFAD]   Post-action verification passed (100.0%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 2: tap - xpath="//*[@Name="Calculator, WAA CloudAPP SSO 07"]"
[DESKTOP-4TBMFAD]   [Windows fast path] Element found in 1644ms — skipping stabilization/evidence
[DESKTOP-4TBMFAD]   [Phase 3.5] Executing skilled action: remote-session-lifecycle
[DESKTOP-4TBMFAD]   [SkilledAction] Executing: cmd.exe /c powershell.exe -NoProfile -ExecutionPolicy Bypass -File C:\\Users\\chengjiexu\\source\\repos\\WCX-AI-Autotest\\skilled-actions\\remote-session-lifecycle\\lifecycle.ps1
[DESKTOP-4TBMFAD]   [SkilledAction] Timeout: 180000ms
[DESKTOP-4TBMFAD]   [SkilledAction] === Remote Session Lifecycle ===
[DESKTOP-4TBMFAD]   [SkilledAction] Max desktop wait: 120s, Window timeout: 60s
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 1: Waiting for remote session window (up to 60s)...
[DESKTOP-4TBMFAD]   [SkilledAction]   Found RAIL window (remote app): 'Calculator (2bb2cf36-c692-4722-b325-d772c03c5fb9)'
[DESKTOP-4TBMFAD]   [SkilledAction] Session window detected (remoteapp): 418x675 at (50,40)
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 2: Checking for system permission dialogs...
[DESKTOP-4TBMFAD]   [SkilledAction] No system dialogs found
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 3: Remote app detected  ?skipping desktop readiness check (app is already visible)
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 4: Closing remote session window...
[DESKTOP-4TBMFAD]   [SkilledAction]   Found RAIL window (remote app): 'Calculator (2bb2cf36-c692-4722-b325-d772c03c5fb9)'
[DESKTOP-4TBMFAD]   [SkilledAction] Killing msrdc (PID 57512)...
[DESKTOP-4TBMFAD]   [SkilledAction] Remote session lifecycle completed successfully
[DESKTOP-4TBMFAD]   [SkilledAction] Exited with code 0 (45247ms)
[DESKTOP-4TBMFAD]   [Phase 3.5] Skilled action completed in 45247ms
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains many interactive elements, buttons, and content text with no loading indicators present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 8424ms (103 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 56/56 elements matched (100.0%, threshold: 70%)
[DESKTOP-4TBMFAD]   Post-action verification passed (100.0%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Verifying trailing evidence (step 5) -- final screen state check
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page shows many interactive elements including buttons, menus, and content text with no loading indicators present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 8235ms (103 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 56/56 elements matched (100.0%, threshold: 70%)
[DESKTOP-4TBMFAD]   Trailing evidence XML verification passed
[DESKTOP-4TBMFAD]   ✓ Step 1 SUCCESS
[DESKTOP-4TBMFAD]   ✓ Step 2 SUCCESS
[DESKTOP-4TBMFAD]
----------------------------------------
[DESKTOP-4TBMFAD] Test case cloud app connect: PASSED
[DESKTOP-4TBMFAD] Success: 2, Failed: 0
[DESKTOP-4TBMFAD] ----------------------------------------
[DESKTOP-4TBMFAD] Test Set cloud app: PASSED (2/2)
[DESKTOP-4TBMFAD] Cleaning up sessions...
[DESKTOP-4TBMFAD]
=== DEVICE COMPLETE: ALL PASSED ===

╔════════════════════════════════════════════╗
║    AUTOTEST MULTI-DEVICE RUN COMPLETE      ║
╚════════════════════════════════════════════╝
Devices: 1
Total Passed: 2, Total Failed: 0
Result: ✓ ALL PASSED

Per-Device Summary:
  ✓ DESKTOP-4TBMFAD (WindowsPC): 2 passed, 0 failed`;

const LOG_LINES = LOG_TEXT.split("\n");

const LOG_PANEL_WIDTH = 620;
const LOG_PANEL_HEIGHT = 520;

const FONT_FAMILY =
  "'Cascadia Code', 'Fira Code', 'Consolas', 'Courier New', monospace";

const FONT_SIZE = 12;
const CHAR_WIDTH = 7.2;
const LINE_HEIGHT = 18;
const CONTENT_WIDTH = LOG_PANEL_WIDTH - 24;
const CHARS_PER_ROW = Math.floor(CONTENT_WIDTH / CHAR_WIDTH);

function estimateVisualRows(line: string): number {
  if (line.length === 0) return 1;
  return Math.ceil(line.length / CHARS_PER_ROW);
}

export const AutotestDemoCloudApp: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const totalLines = LOG_LINES.length;
  const framesPerLine = durationInFrames / totalLines;
  const visibleLineCount = Math.min(
    totalLines,
    Math.floor(frame / framesPerLine) + 1,
  );

  const panelContentHeight = LOG_PANEL_HEIGHT - 36 - 24;
  const maxVisualRows = Math.floor(panelContentHeight / LINE_HEIGHT);

  const displayLines = useMemo(() => {
    let rowBudget = maxVisualRows;
    let startIdx = visibleLineCount;
    for (let i = visibleLineCount - 1; i >= 0; i--) {
      const rows = estimateVisualRows(LOG_LINES[i]);
      if (rowBudget - rows < 0 && startIdx < visibleLineCount) break;
      rowBudget -= rows;
      startIdx = i;
      if (rowBudget <= 0) break;
    }
    return { start: startIdx, end: visibleLineCount };
  }, [visibleLineCount, maxVisualRows]);

  const lines = LOG_LINES.slice(displayLines.start, displayLines.end);

  const highlightLine = useMemo(() => {
    return (line: string) => {
      if (
        line.includes("✓") ||
        line.includes("PASSED") ||
        line.includes("ALL PASSED") ||
        line.includes("SUCCESS")
      ) {
        return { color: "#4ade80", fontWeight: 700 as const };
      }
      if (line.match(/Step \d+:/)) {
        return { color: "#60a5fa" };
      }
      if (line.includes("╔") || line.includes("╚") || line.includes("║")) {
        return { color: "#a5f3a0" };
      }
      if (line.includes("========") || line.includes("--------")) {
        return { color: "#6b7280" };
      }
      return { color: "#4ade80" };
    };
  }, []);

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Video — full native size, no crop */}
      <Video
        src={staticFile(VIDEO_FILE)}
        muted
        playbackRate={PLAYBACK_RATE}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />

      {/* Log overlay — bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          right: 24,
          width: LOG_PANEL_WIDTH,
          height: LOG_PANEL_HEIGHT,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          display: "flex",
          flexDirection: "column",
          borderRadius: 12,
          border: "1px solid rgba(74, 222, 128, 0.25)",
          overflow: "hidden",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Terminal title bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 14px",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            borderBottom: "1px solid rgba(74, 222, 128, 0.15)",
          }}
        >
          <div style={{ display: "flex", gap: 6 }}>
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                backgroundColor: "#ef4444",
              }}
            />
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                backgroundColor: "#eab308",
              }}
            />
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                backgroundColor: "#22c55e",
              }}
            />
          </div>
          <span
            style={{
              color: "rgba(74, 222, 128, 0.7)",
              fontFamily: FONT_FAMILY,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 0.5,
              marginLeft: 6,
            }}
          >
            autotest — terminal
          </span>
        </div>

        {/* Scrolling log content */}
        <div
          style={{
            flex: 1,
            padding: "8px 12px",
            overflow: "hidden",
            fontFamily: FONT_FAMILY,
            fontSize: FONT_SIZE,
            lineHeight: `${LINE_HEIGHT}px`,
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
          }}
        >
          {lines.map((line, i) => {
            const style = highlightLine(line);
            const globalIdx = displayLines.start + i;
            const isNewest = globalIdx === visibleLineCount - 1;
            const opacity = isNewest
              ? interpolate(
                  frame - globalIdx * framesPerLine,
                  [0, framesPerLine * 0.5],
                  [0, 1],
                  { extrapolateRight: "clamp" },
                )
              : 1;

            return (
              <div
                key={globalIdx}
                style={{
                  ...style,
                  opacity,
                }}
              >
                {line || " "}
              </div>
            );
          })}

          {/* Blinking cursor */}
          <span
            style={{
              color: "#4ade80",
              opacity: Math.sin(frame * 0.3) > 0 ? 1 : 0,
              fontWeight: 700,
            }}
          >
            ▊
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
