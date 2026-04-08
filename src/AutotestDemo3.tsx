import React, { useMemo } from "react";
import {
  AbsoluteFill,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";
import { Video } from "@remotion/media";

const VIDEO_FILE = "2026-04-02 13-08-30.mp4";

/**
 * Video duration: 332.17s → 9965 frames at 30fps.
 * At 4× playback: ceil(9965 / 4) = 2492 frames.
 */
const PLAYBACK_RATE = 4;
export const AUTOTEST_DEMO3_DURATION = Math.ceil(
  (332.166667 * 30) / PLAYBACK_RATE,
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
[DESKTOP-4TBMFAD] Session created: 5592f803-c7f7-4758-b124-dc7bf275c57c
[DESKTOP-4TBMFAD]
--- TEST SET [1/1]: non-sso ---
[DESKTOP-4TBMFAD] Preparing app...
[DESKTOP-4TBMFAD] Preparing Windows app for testing: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD]   Skipping reinstall — launching app directly
[DESKTOP-4TBMFAD] App ready (as-is)
[DESKTOP-4TBMFAD] Launching app...
[DESKTOP-4TBMFAD] Re-creating session targeting app: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD] Found window handle 0x370abe, creating session with appTopLevelWindow
[DESKTOP-4TBMFAD] App-scoped session created: d22ab6ad-53db-4b42-a2b5-d2346b969e11
[DESKTOP-4TBMFAD] [1/2] 001-win-login-new-account-20260402-130721.zip
[DESKTOP-4TBMFAD]
========================================
[DESKTOP-4TBMFAD] Running test case: win login new account
[DESKTOP-4TBMFAD] App package: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD] Total steps: 2
[DESKTOP-4TBMFAD] Evidence source XMLs available: 3
[DESKTOP-4TBMFAD] ========================================
[DESKTOP-4TBMFAD] Pre-loaded 3 evidence screenshot(s) into cache
[DESKTOP-4TBMFAD] Pre-loaded 3 evidence XML file(s) into cache
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 1: tap - accessibility id="header-account-button"
[DESKTOP-4TBMFAD]   [Windows fast path] Element not found in 580ms — falling through to full flow
[DESKTOP-4TBMFAD]   Waiting for page to stabilize...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains a large number of interactive elements, buttons, text labels, and content items with no indication of loading indicators or spinners.)
[DESKTOP-4TBMFAD]   Page source stabilized after 19340ms (296 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   Screen matches expected evidence (99.1%) — skipping dialog sweep
[DESKTOP-4TBMFAD]   Waiting for element: accessibility id="header-account-button"
[DESKTOP-4TBMFAD]   Element found in 679ms
[DESKTOP-4TBMFAD]   XML structural comparison: 110/111 elements matched (99.1%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: Name=Restore|IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains numerous interactive elements such as buttons, labels, and content text with no visible loading indicators or spinners. The element count and variety indicate full content load.)
[DESKTOP-4TBMFAD]   Page source stabilized after 17278ms (307 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 119/120 elements matched (99.2%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: Name=Restore|IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification passed (99.2%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 2: tap - xpath="//List/Button/Image"
[DESKTOP-4TBMFAD]   [Windows fast path] Element not found in 2005ms — falling through to full flow
[DESKTOP-4TBMFAD]   Waiting for page to stabilize...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains numerous interactive elements including buttons, labels, and content text with no indication of loading indicators or spinners. The element count and variety suggest the page is fully loaded.)
[DESKTOP-4TBMFAD]   Page source stabilized after 21371ms (307 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   Screen matches expected evidence (99.2%) — skipping dialog sweep
[DESKTOP-4TBMFAD]   Waiting for element: xpath="//List/Button/Image"
[DESKTOP-4TBMFAD]   Element found in 4626ms
[DESKTOP-4TBMFAD]   Refreshing page source for evidence comparison (element took 4626ms to appear)
[DESKTOP-4TBMFAD]   XML structural comparison: 119/120 elements matched (99.2%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: Name=Restore|IsEnabled=True
[DESKTOP-4TBMFAD]   [Phase 3.5] Executing skilled action: microsoft-oauth-login
[DESKTOP-4TBMFAD]   [SkilledAction] Executing: powershell.exe -NoProfile -ExecutionPolicy Bypass -File C:\\Users\\chengjiexu\\source\\repos\\WCX-AI-Autotest\\skilled-actions\\microsoft-oauth-login\\login.ps1 -username *** -password ***
[DESKTOP-4TBMFAD]   [SkilledAction] Timeout: 120000ms
[DESKTOP-4TBMFAD]   [SkilledAction] Creating Root session...
[DESKTOP-4TBMFAD]   [SkilledAction] Root session: 3dee9a49-e230-44c7-9150-ac09dec15a65
[DESKTOP-4TBMFAD]   [SkilledAction] Waiting for email field...
[DESKTOP-4TBMFAD]   [SkilledAction] Email entered
[DESKTOP-4TBMFAD]   [SkilledAction] Clicked Next
[DESKTOP-4TBMFAD]   [SkilledAction] Waiting for password field...
[DESKTOP-4TBMFAD]   [SkilledAction] Password entered
[DESKTOP-4TBMFAD]   [SkilledAction] Clicked Sign in
[DESKTOP-4TBMFAD]   [SkilledAction] Waiting for dialog to close...
[DESKTOP-4TBMFAD]   [SkilledAction] Dialog closed after 0s
[DESKTOP-4TBMFAD]   [SkilledAction] Login completed successfully
[DESKTOP-4TBMFAD]   [SkilledAction] Exited with code 0 (84529ms)
[DESKTOP-4TBMFAD]   [Phase 3.5] Skilled action completed in 84529ms
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page shows many interactive elements, content text, and no loading indicators or spinners detected.)
[DESKTOP-4TBMFAD]   Page source stabilized after 13622ms (92 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 44/47 elements matched (93.6%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=cloudPC-card-ab25f96a-ad16-410a-b35e-567a74aea573|Name=waatest - waatest08|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=moreOperationButton-ab25f96a-ad16-410a-b35e-567a74aea573|Name=More options for waatest - waatest08|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Restore|IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification passed (93.6%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Verifying trailing evidence (step 5) -- final screen state check
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains many interactive elements, buttons, and content text with no loading indicators present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 12100ms (92 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 44/47 elements matched (93.6%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=cloudPC-card-ab25f96a-ad16-410a-b35e-567a74aea573|Name=waatest - waatest08|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=moreOperationButton-ab25f96a-ad16-410a-b35e-567a74aea573|Name=More options for waatest - waatest08|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Restore|IsEnabled=True
[DESKTOP-4TBMFAD]   Trailing evidence XML verification passed
[DESKTOP-4TBMFAD]   ✓ Step 1 SUCCESS
[DESKTOP-4TBMFAD]   ✓ Step 2 SUCCESS
[DESKTOP-4TBMFAD]
----------------------------------------
[DESKTOP-4TBMFAD] Test case win login new account: PASSED
[DESKTOP-4TBMFAD] Success: 2, Failed: 0
----------------------------------------
[DESKTOP-4TBMFAD] [2/2] 002-non-sso-cpc-20260402-130725.zip
[DESKTOP-4TBMFAD]
========================================
[DESKTOP-4TBMFAD] Running test case: non-sso cpc
[DESKTOP-4TBMFAD] App package: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD] Total steps: 2
[DESKTOP-4TBMFAD] Evidence source XMLs available: 3
[DESKTOP-4TBMFAD] ========================================
[DESKTOP-4TBMFAD] Pre-loaded 3 evidence screenshot(s) into cache
[DESKTOP-4TBMFAD] Pre-loaded 3 evidence XML file(s) into cache
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 1: tap - xpath="//ToolBar/Button"
[DESKTOP-4TBMFAD]   [Windows fast path] Element not found in 2002ms — falling through to full flow
[DESKTOP-4TBMFAD]   Waiting for page to stabilize...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains many interactive elements, buttons, and content text with no loading indicators present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 11263ms (92 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   Screen matches expected evidence (92.9%) — skipping dialog sweep
[DESKTOP-4TBMFAD]   Waiting for element: xpath="//ToolBar/Button"
[DESKTOP-4TBMFAD]   Element found in 1394ms
[DESKTOP-4TBMFAD]   Refreshing page source for evidence comparison (element took 1394ms to appear)
[DESKTOP-4TBMFAD]   XML structural comparison: 39/42 elements matched (92.9%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurr|Name=Filter by Type|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurs|Name=Sort by A-Z|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Restore|IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page has many interactive elements including buttons, labels, and menus with meaningful text, no loading indicators or spinners detected, and a typical number of elements for a fully loaded Windows app page.)
[DESKTOP-4TBMFAD]   Page source stabilized after 11527ms (105 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 49/52 elements matched (94.2%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurr|Name=Filter by Type|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurs|Name=Sort by A-Z|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur13|Name=Pin to..|IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification passed (94.2%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 2: tap - xpath="//*[@Name="Connect"]"
[DESKTOP-4TBMFAD]   [Windows fast path] Element found in 1911ms — skipping stabilization/evidence
[DESKTOP-4TBMFAD]   [Phase 3.5] Executing skilled action (1/2): windows-security-login
[DESKTOP-4TBMFAD]   [SkilledAction] Executing: cmd.exe /c powershell.exe -NoProfile -ExecutionPolicy Bypass -File C:\\Users\\chengjiexu\\source\\repos\\WCX-AI-Autotest\\skilled-actions\\windows-security-login\\login.ps1 -password ***
[DESKTOP-4TBMFAD]   [SkilledAction] Timeout: 120000ms
[DESKTOP-4TBMFAD]   [SkilledAction] Waiting for Windows Security dialog (up to 30s)...
[DESKTOP-4TBMFAD]   [SkilledAction] Dialog found: 570x522 at (675,309)
[DESKTOP-4TBMFAD]   [SkilledAction] Searching for password field via UI Automation...
[DESKTOP-4TBMFAD]   [SkilledAction] Found 2 Edit control(s) via UIA
[DESKTOP-4TBMFAD]   [SkilledAction]   Edit: Name='User name', IsPassword=False
[DESKTOP-4TBMFAD]   [SkilledAction]   Edit: Name='Password', IsPassword=True
[DESKTOP-4TBMFAD]   [SkilledAction] Password field found via UIA  ?using focused input
[DESKTOP-4TBMFAD]   [SkilledAction] Focus set on password field
[DESKTOP-4TBMFAD]   [SkilledAction] Typing password (11 chars)...
[DESKTOP-4TBMFAD]   [SkilledAction]   Button: Name='Close'
[DESKTOP-4TBMFAD]   [SkilledAction]   Button: Name='OK'
[DESKTOP-4TBMFAD]   [SkilledAction] Clicked submit button via UIA InvokePattern
[DESKTOP-4TBMFAD]   [SkilledAction] Dialog closed after 0s
[DESKTOP-4TBMFAD]   [SkilledAction] Windows Security login completed successfully
[DESKTOP-4TBMFAD]   [SkilledAction] Exited with code 0 (20803ms)
[DESKTOP-4TBMFAD]   [Phase 3.5] Skilled action (1/2) completed in 20803ms
[DESKTOP-4TBMFAD]   [Phase 3.5] Executing skilled action (2/2): remote-session-lifecycle
[DESKTOP-4TBMFAD]   [SkilledAction] Executing: cmd.exe /c powershell.exe -NoProfile -ExecutionPolicy Bypass -File C:\\Users\\chengjiexu\\source\\repos\\WCX-AI-Autotest\\skilled-actions\\remote-session-lifecycle\\lifecycle.ps1
[DESKTOP-4TBMFAD]   [SkilledAction] Timeout: 180000ms
[DESKTOP-4TBMFAD]   [SkilledAction] === Remote Session Lifecycle ===
[DESKTOP-4TBMFAD]   [SkilledAction] Max desktop wait: 120s, Window timeout: 60s
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 1: Waiting for remote session window (up to 60s)...
[DESKTOP-4TBMFAD]   [SkilledAction]   Found session window: 'waatest - waatest08' (class=TscShellContainerClass, proc=msrdc, x)
[DESKTOP-4TBMFAD]   [SkilledAction] Session window detected: 1920x1200 at (0,0)
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 2: Checking for system permission dialogs...
[DESKTOP-4TBMFAD]   [SkilledAction] No system dialogs found
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 3: Waiting for remote desktop to be ready (AI detection, up to 120s)...
[DESKTOP-4TBMFAD]   [SkilledAction]   Found session window: 'waatest - waatest08' (class=TscShellContainerClass, proc=msrdc, x)
[DESKTOP-4TBMFAD]   [SkilledAction]   Analyzing screenshot (elapsed: 0s)...
[DESKTOP-4TBMFAD]   [SkilledAction]   AI says: ready=False, reason=The screen is completely black with no visible taskbar, desktop icons, wallpaper, or any indication of a loaded desktop environment.
[DESKTOP-4TBMFAD]   [SkilledAction]   Found session window: 'waatest - waatest08' (class=TscShellContainerClass, proc=msrdc, x)
[DESKTOP-4TBMFAD]   [SkilledAction]   Analyzing screenshot (elapsed: 10s)...
[DESKTOP-4TBMFAD]   [SkilledAction]   AI says: ready=True, reason=The desktop shows the taskbar at the bottom with icons, a clear wallpaper, and desktop icons visible. There are no loading screens, connection progress indicators, or blank screens.
[DESKTOP-4TBMFAD]   [SkilledAction] Remote desktop is ready!
[DESKTOP-4TBMFAD]   [SkilledAction] Desktop detection took 25s
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 4: Closing remote session window...
[DESKTOP-4TBMFAD]   [SkilledAction]   Found session window: 'waatest - waatest08' (class=TscShellContainerClass, proc=msrdc, x)
[DESKTOP-4TBMFAD]   [SkilledAction] Killing msrdc (PID 10168)...
[DESKTOP-4TBMFAD]   [SkilledAction] Remote session lifecycle completed successfully
[DESKTOP-4TBMFAD]   [SkilledAction] Exited with code 0 (44935ms)
[DESKTOP-4TBMFAD]   [Phase 3.5] Skilled action (2/2) completed in 44935ms
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains many interactive elements, buttons, and content text with no loading indicators present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 8904ms (92 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 39/42 elements matched (92.9%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurr|Name=Filter by Type|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurs|Name=Sort by A-Z|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Restore|IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification passed (92.9%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Verifying trailing evidence (step 5) -- final screen state check
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page shows many interactive elements, buttons, and content text with no loading indicators or spinners present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 8089ms (92 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 39/42 elements matched (92.9%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurr|Name=Filter by Type|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurs|Name=Sort by A-Z|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Restore|IsEnabled=True
[DESKTOP-4TBMFAD]   Trailing evidence XML verification passed
[DESKTOP-4TBMFAD]   ✓ Step 1 SUCCESS
[DESKTOP-4TBMFAD]   ✓ Step 2 SUCCESS
[DESKTOP-4TBMFAD]
----------------------------------------
[DESKTOP-4TBMFAD] Test case non-sso cpc: PASSED
[DESKTOP-4TBMFAD] Success: 2, Failed: 0
----------------------------------------
[DESKTOP-4TBMFAD] Test Set non-sso: PASSED (2/2)
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

export const AutotestDemo3: React.FC = () => {
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
