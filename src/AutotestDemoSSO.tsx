import React, { useMemo } from "react";
import {
  AbsoluteFill,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";
import { Video } from "@remotion/media";

const VIDEO_FILE = "sso.mp4";

/**
 * Video duration: 329.90s → 9897 frames at 30fps.
 * At 4× playback: ceil(9897 / 4) = 2475 frames.
 */
const PLAYBACK_RATE = 4;
export const AUTOTEST_DEMO_SSO_DURATION = Math.ceil(
  (329.9 * 30) / PLAYBACK_RATE,
);

const LOG_TEXT = `Filtered to 1 device(s) matching platform 'Windows'

╔════════════════════════════════════════════╗
║     AUTOTEST MULTI-DEVICE RUNNER           ║
╚════════════════════════════════════════════╝
App Package: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
Test sets to run: 1
Total test cases: 2
Devices: 1
Mode: SEQUENTIAL (one device at a time)
  1. DESKTOP-4TBMFAD (WindowsPC) - desktop

--- Cleaning up all existing Appium sessions ---
No existing sessions to clean up

╔════════════════════════════════════════════╗
║  DEVICE [1/1]: DESKTOP-4TBMFAD
║  UDID: WindowsPC
╚════════════════════════════════════════════╝
[DESKTOP-4TBMFAD] Starting test execution...
[DESKTOP-4TBMFAD] Checking for stale Appium sessions...
[DESKTOP-4TBMFAD] No existing sessions found
[DESKTOP-4TBMFAD] Creating Appium session (attempt 1/2, UDID: WindowsPC, systemPort: 8200)...
[DESKTOP-4TBMFAD] Session created: ee4abd7d-c861-4af9-95b1-eed4a4503051
[DESKTOP-4TBMFAD]
--- TEST SET [1/1]: sso cpc ---
[DESKTOP-4TBMFAD] Preparing app...
[DESKTOP-4TBMFAD] Preparing Windows app for testing: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD]   Skipping reinstall — launching app directly
[DESKTOP-4TBMFAD] App ready (as-is)
[DESKTOP-4TBMFAD] Launching app...
[DESKTOP-4TBMFAD] Re-creating session targeting app: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD] Found window handle 0x2509e2, creating session with appTopLevelWindow
[DESKTOP-4TBMFAD] App-scoped session created: 2b299a0e-a186-46f1-bf28-7e8257529fd3
[DESKTOP-4TBMFAD] [1/2] 001-login-sso-account-20260402-145114.zip
[DESKTOP-4TBMFAD]
========================================
[DESKTOP-4TBMFAD] Running test case: login sso account
[DESKTOP-4TBMFAD] App package: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD] Total steps: 2
[DESKTOP-4TBMFAD] Evidence source XMLs available: 3
[DESKTOP-4TBMFAD] ========================================
[DESKTOP-4TBMFAD] Pre-loaded 3 evidence screenshot(s) into cache
[DESKTOP-4TBMFAD] Pre-loaded 3 evidence XML file(s) into cache
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 1: tap - accessibility id="header-account-button"
[DESKTOP-4TBMFAD]   [Windows fast path] Element not found in 514ms — falling through to full flow
[DESKTOP-4TBMFAD]   Waiting for page to stabilize...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains a large number of interactive elements, buttons, text labels, and content indicating full load; no loading indicators or spinners detected.)
[DESKTOP-4TBMFAD]   Page source stabilized after 14703ms (290 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   Screen matches expected evidence (95.7%) — skipping dialog sweep
[DESKTOP-4TBMFAD]   Waiting for element: accessibility id="header-account-button"
[DESKTOP-4TBMFAD]   Element found in 614ms
[DESKTOP-4TBMFAD]   XML structural comparison: 111/116 elements matched (95.7%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=group-header-Remote PCs|Name=Remote PCs Preview|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=DESKTOP-R4PAGOF|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Local PC background image|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Favorite DESKTOP-R4PAGOF|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur3h|Name=More options for |IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains a large number of interactive elements, content text, and no visible loading indicators or spinners. The presence of multiple buttons, labels, and content items indicates the page is fully loaded.)
[DESKTOP-4TBMFAD]   Page source stabilized after 13971ms (301 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 120/125 elements matched (96.0%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=group-header-Remote PCs|Name=Remote PCs Preview|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=DESKTOP-R4PAGOF|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Local PC background image|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Favorite DESKTOP-R4PAGOF|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur3h|Name=More options for |IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification passed (96.0%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 2: tap - xpath="//List/Button/Image"
[DESKTOP-4TBMFAD]   [Windows fast path] Element not found in 2005ms — falling through to full flow
[DESKTOP-4TBMFAD]   Waiting for page to stabilize...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains a large number of interactive elements, content text, and no visible loading indicators or spinners. The presence of buttons, navigation items, and detailed content suggests the page is fully loaded.)
[DESKTOP-4TBMFAD]   Page source stabilized after 16371ms (301 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   Screen matches expected evidence (96.0%) — skipping dialog sweep
[DESKTOP-4TBMFAD]   Waiting for element: xpath="//List/Button/Image"
[DESKTOP-4TBMFAD]   Element found in 3738ms
[DESKTOP-4TBMFAD]   Refreshing page source for evidence comparison (element took 3738ms to appear)
[DESKTOP-4TBMFAD]   XML structural comparison: 120/125 elements matched (96.0%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=group-header-Remote PCs|Name=Remote PCs Preview|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=DESKTOP-R4PAGOF|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Local PC background image|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Favorite DESKTOP-R4PAGOF|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur3h|Name=More options for |IsEnabled=True
[DESKTOP-4TBMFAD]   [Phase 3.5] Executing skilled action: microsoft-oauth-login
[DESKTOP-4TBMFAD]   [SkilledAction] Executing: powershell.exe -NoProfile -ExecutionPolicy Bypass -File C:\\Users\\chengjiexu\\source\\repos\\WCX-AI-Autotest\\skilled-actions\\microsoft-oauth-login\\login.ps1 -username *** -password ***
[DESKTOP-4TBMFAD]   [SkilledAction] Timeout: 120000ms
[DESKTOP-4TBMFAD]   [SkilledAction] Creating Root session...
[DESKTOP-4TBMFAD]   [SkilledAction] Root session: 31679fd6-84da-4427-838d-efe33cb8e691
[DESKTOP-4TBMFAD]   [SkilledAction] Waiting for email field...
[DESKTOP-4TBMFAD]   [SkilledAction] Email entered
[DESKTOP-4TBMFAD]   [SkilledAction] Clicked Next
[DESKTOP-4TBMFAD]   [SkilledAction] Waiting for password field...
[DESKTOP-4TBMFAD]   [SkilledAction] Password entered
[DESKTOP-4TBMFAD]   [SkilledAction] Clicked Sign in
[DESKTOP-4TBMFAD]   [SkilledAction] Waiting for dialog to close...
[DESKTOP-4TBMFAD]   [SkilledAction] Dialog closed after 0s
[DESKTOP-4TBMFAD]   [SkilledAction] Login completed successfully
[DESKTOP-4TBMFAD]   [SkilledAction] Exited with code 0 (99947ms)
[DESKTOP-4TBMFAD]   [Phase 3.5] Skilled action completed in 99947ms
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: loading (confidence: 90%, Presence of 'loading' text and splash screen elements indicates the page is still loading, suggested wait: 3000ms)
[DESKTOP-4TBMFAD]   Page source still loading (59 -> 75 elements)
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains many interactive elements including buttons, labels, and resource cards with descriptive text, indicating the content is fully loaded and no loading indicators are present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 23103ms (75 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 42/47 elements matched (89.4%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=group-header-Remote PCs|Name=Remote PCs Preview|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=DESKTOP-R4PAGOF|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Local PC background image|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Favorite DESKTOP-R4PAGOF|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurl|Name=More options for |IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification passed (89.4%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Verifying trailing evidence (step 5) -- final screen state check
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains many interactive elements including buttons, labels, and resource cards with descriptive text, indicating full content load without any loading indicators or spinners.)
[DESKTOP-4TBMFAD]   Page source stabilized after 9220ms (75 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 42/47 elements matched (89.4%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=group-header-Remote PCs|Name=Remote PCs Preview|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=DESKTOP-R4PAGOF|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Local PC background image|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Favorite DESKTOP-R4PAGOF|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurl|Name=More options for |IsEnabled=True
[DESKTOP-4TBMFAD]   Trailing evidence XML verification passed
[DESKTOP-4TBMFAD]   ✓ Step 1 SUCCESS
[DESKTOP-4TBMFAD]   ✓ Step 2 SUCCESS
[DESKTOP-4TBMFAD]
----------------------------------------
[DESKTOP-4TBMFAD] Test case login sso account: PASSED
[DESKTOP-4TBMFAD] Success: 2, Failed: 0
[DESKTOP-4TBMFAD] ----------------------------------------
[DESKTOP-4TBMFAD] [2/2] 002-connect-to-sso-cpc-20260402-145123.zip
[DESKTOP-4TBMFAD]
========================================
[DESKTOP-4TBMFAD] Running test case: connect to sso cpc
[DESKTOP-4TBMFAD] App package: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD] Total steps: 2
[DESKTOP-4TBMFAD] Evidence source XMLs available: 3
[DESKTOP-4TBMFAD] ========================================
[DESKTOP-4TBMFAD] Pre-loaded 3 evidence screenshot(s) into cache
[DESKTOP-4TBMFAD] Pre-loaded 3 evidence XML file(s) into cache
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 1: tap - xpath="//ToolBar/Button"
[DESKTOP-4TBMFAD]   [Windows fast path] Element found in 1418ms — skipping stabilization/evidence
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains many interactive elements, buttons, and content text with no loading indicators or spinners present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 9994ms (88 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 52/58 elements matched (89.7%, threshold: 70%)
[DESKTOP-4TBMFAD]     6 elements missing (showing first 3)
[DESKTOP-4TBMFAD]     Missing: AutomationId=group-header-Remote PCs|Name=Remote PCs Preview|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=DESKTOP-R4PAGOF|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Local PC background image|IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification passed (89.7%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 2: tap - xpath="//*[@Name="Connect"]"
[DESKTOP-4TBMFAD]   [Windows fast path] Element found in 1245ms — skipping stabilization/evidence
[DESKTOP-4TBMFAD]   [Phase 3.5] Executing skilled action: remote-session-lifecycle
[DESKTOP-4TBMFAD]   [SkilledAction] Executing: cmd.exe /c powershell.exe -NoProfile -ExecutionPolicy Bypass -File C:\\Users\\chengjiexu\\source\\repos\\WCX-AI-Autotest\\skilled-actions\\remote-session-lifecycle\\lifecycle.ps1
[DESKTOP-4TBMFAD]   [SkilledAction] Timeout: 180000ms
[DESKTOP-4TBMFAD]   [SkilledAction] === Remote Session Lifecycle ===
[DESKTOP-4TBMFAD]   [SkilledAction] Max desktop wait: 120s, Window timeout: 60s
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 1: Waiting for remote session window (up to 60s)...
[DESKTOP-4TBMFAD]   [SkilledAction]   Found session window: 'WAA-SSO - WAA Auto Test 01' (class=TscShellContainerClass, proc=msrdc, x)
[DESKTOP-4TBMFAD]   [SkilledAction] Session window detected: 1920x1200 at (0,0)
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 2: Checking for system permission dialogs...
[DESKTOP-4TBMFAD]   [SkilledAction] No system dialogs found
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 3: Waiting for remote desktop to be ready (AI detection, up to 120s)...
[DESKTOP-4TBMFAD]   [SkilledAction]   Found session window: 'WAA-SSO - WAA Auto Test 01' (class=TscShellContainerClass, proc=msrdc, x)
[DESKTOP-4TBMFAD]   [SkilledAction]   Analyzing screenshot (elapsed: 0s)...
[DESKTOP-4TBMFAD]   [SkilledAction]   AI says: ready=False, reason=The screen is completely black with no visible taskbar, desktop icons, or wallpaper, indicating the desktop is not loaded or ready for interaction.
[DESKTOP-4TBMFAD]   [SkilledAction]   Found session window: 'WAA-SSO - WAA Auto Test 01' (class=TscShellContainerClass, proc=msrdc, x)
[DESKTOP-4TBMFAD]   [SkilledAction]   Analyzing screenshot (elapsed: 10s)...
[DESKTOP-4TBMFAD]   [SkilledAction]   AI says: ready=True, reason=The taskbar is visible at the bottom, desktop wallpaper is displayed, and there are no loading or connection progress screens. The presence of application windows indicates the desktop is fully loaded and ready for interaction.
[DESKTOP-4TBMFAD]   [SkilledAction] Remote desktop is ready!
[DESKTOP-4TBMFAD]   [SkilledAction] Desktop detection took 28s
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 4: Closing remote session window...
[DESKTOP-4TBMFAD]   [SkilledAction]   Found session window: 'WAA-SSO - WAA Auto Test 01' (class=TscShellContainerClass, proc=msrdc, x)
[DESKTOP-4TBMFAD]   [SkilledAction] Killing msrdc (PID 52568)...
[DESKTOP-4TBMFAD]   [SkilledAction] Remote session lifecycle completed successfully
[DESKTOP-4TBMFAD]   [SkilledAction] Exited with code 0 (61618ms)
[DESKTOP-4TBMFAD]   [Phase 3.5] Skilled action completed in 61618ms
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains many interactive elements including buttons, labels, and resource cards with descriptive text, indicating full content load. No loading indicators or spinners detected.)
[DESKTOP-4TBMFAD]   Page source stabilized after 8432ms (75 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 42/47 elements matched (89.4%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=group-header-Remote PCs|Name=Remote PCs Preview|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=DESKTOP-R4PAGOF|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Local PC background image|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Favorite DESKTOP-R4PAGOF|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurl|Name=More options for |IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification passed (89.4%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Verifying trailing evidence (step 5) -- final screen state check
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains many interactive elements, buttons, labels, and content text indicating full load; no loading indicators or spinners detected.)
[DESKTOP-4TBMFAD]   Page source stabilized after 8435ms (75 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 42/47 elements matched (89.4%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=group-header-Remote PCs|Name=Remote PCs Preview|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=DESKTOP-R4PAGOF|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Local PC background image|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Favorite DESKTOP-R4PAGOF|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurl|Name=More options for |IsEnabled=True
[DESKTOP-4TBMFAD]   Trailing evidence XML verification passed
[DESKTOP-4TBMFAD]   ✓ Step 1 SUCCESS
[DESKTOP-4TBMFAD]   ✓ Step 2 SUCCESS
[DESKTOP-4TBMFAD]
----------------------------------------
[DESKTOP-4TBMFAD] Test case connect to sso cpc: PASSED
[DESKTOP-4TBMFAD] Success: 2, Failed: 0
[DESKTOP-4TBMFAD] ----------------------------------------
[DESKTOP-4TBMFAD] Test Set sso cpc: PASSED (2/2)
[DESKTOP-4TBMFAD] Cleaning up sessions...

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

export const AutotestDemoSSO: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const totalLines = LOG_LINES.length;
  const framesPerLine = durationInFrames / totalLines;
  const visibleLineCount = Math.min(
    totalLines,
    Math.floor(frame / framesPerLine) + 1,
  );

  // Title bar ~36px + padding 24px
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
      {/* Video — full frame */}
      <Video
        src={staticFile(VIDEO_FILE)}
        muted
        playbackRate={PLAYBACK_RATE}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1920,
          height: 1080,
          objectFit: "cover",
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
