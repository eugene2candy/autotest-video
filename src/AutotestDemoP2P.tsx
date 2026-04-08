import React, { useMemo } from "react";
import {
  AbsoluteFill,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";
import { Video } from "@remotion/media";

const VIDEO_FILE = "p2p.mp4";

/**
 * Video duration: 139.43s → 4183 frames at 30fps.
 * At 4× playback: ceil(4183 / 4) = 1046 frames.
 */
const PLAYBACK_RATE = 4;
export const AUTOTEST_DEMO_P2P_DURATION = Math.ceil(
  (139.43 * 30) / PLAYBACK_RATE,
);

const LOG_TEXT = `Filtered to 1 device(s) matching platform 'Windows'

╔════════════════════════════════════════════╗
║     AUTOTEST MULTI-DEVICE RUNNER           ║
╚════════════════════════════════════════════╝
App Package: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
Test sets to run: 1
Total test cases: 1
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
[DESKTOP-4TBMFAD] Session created: 9f654e29-586d-49df-a072-07d9df499c6d
[DESKTOP-4TBMFAD]
--- TEST SET [1/1]: p2p ---
[DESKTOP-4TBMFAD] Preparing app...
[DESKTOP-4TBMFAD] Preparing Windows app for testing: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD]   Skipping reinstall — launching app directly
[DESKTOP-4TBMFAD] App ready (as-is)
[DESKTOP-4TBMFAD] Launching app...
[DESKTOP-4TBMFAD] Re-creating session targeting app: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD] Found window handle 0x721036, creating session with appTopLevelWindow
[DESKTOP-4TBMFAD] App-scoped session created: ff72b2c3-092c-4765-a35d-e547de772211
[DESKTOP-4TBMFAD] [1/1] 001-p2p-20260402-191342.zip
[DESKTOP-4TBMFAD]
========================================
[DESKTOP-4TBMFAD] Running test case: p2p
[DESKTOP-4TBMFAD] App package: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD] Total steps: 3
[DESKTOP-4TBMFAD] Evidence source XMLs available: 4
[DESKTOP-4TBMFAD] ========================================
[DESKTOP-4TBMFAD] Pre-loaded 4 evidence screenshot(s) into cache
[DESKTOP-4TBMFAD] Pre-loaded 4 evidence XML file(s) into cache
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 1: tap - accessibility id="nav-add-resources"
[DESKTOP-4TBMFAD]   [Windows fast path] Element not found in 2018ms — falling through to full flow
[DESKTOP-4TBMFAD]   Waiting for page to stabilize...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains a large number of interactive elements, buttons, and visible content text with no loading indicators or progress elements present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 13168ms (286 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   Screen matches expected evidence (78.4%) — skipping dialog sweep
[DESKTOP-4TBMFAD]   Waiting for element: accessibility id="nav-add-resources"
[DESKTOP-4TBMFAD]   Element found in 379ms
[DESKTOP-4TBMFAD]   XML structural comparison: 87/111 elements matched (78.4%, threshold: 70%)
[DESKTOP-4TBMFAD]     24 elements missing (showing first 3)
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur43|Name=Filter by Type|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur44|Name=Filter by Workspace|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur45|Name=Sort by A-Z|IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains multiple interactive elements including buttons, labels, and input fields with meaningful text, no loading indicators or spinners present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 7645ms (43 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 23/24 elements matched (95.8%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=dialog-title-r7j|Name=Add a PCPreview Enter the name of the remote PC. Need help connecting?|IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification passed (95.8%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 2: sendKeys - xpath="//Edit"
[DESKTOP-4TBMFAD]   [Windows fast path] Element found in 783ms — skipping stabilization/evidence
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, Multiple interactive elements and content text visible, no loading indicators present)
[DESKTOP-4TBMFAD]   Page source stabilized after 7901ms (43 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 23/24 elements matched (95.8%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=dialog-title-r7j|Name=Add a PCPreview Enter the name of the remote PC. Need help connecting?|IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification passed (95.8%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 3: tap - xpath="//*[@Name="Add & Connect"]"
[DESKTOP-4TBMFAD]   [Windows fast path] Element found in 804ms — skipping stabilization/evidence
[DESKTOP-4TBMFAD]   [Phase 3.5] Executing skilled action (1/2): p2p-windows-security-login
[DESKTOP-4TBMFAD]   [SkilledAction] Executing: cmd.exe /c powershell.exe -NoProfile -ExecutionPolicy Bypass -File C:\\Users\\chengjiexu\\source\\repos\\WCX-AI-Autotest\\skilled-actions\\p2p-windows-security-login\\login.ps1 -username *** -password ***
[DESKTOP-4TBMFAD]   [SkilledAction] Timeout: 120000ms
[DESKTOP-4TBMFAD]   [SkilledAction] === P2P Windows Security Login ===
[DESKTOP-4TBMFAD]   [SkilledAction] Username: Jay***
[DESKTOP-4TBMFAD]   [SkilledAction] Step 1: Waiting for 'Remote Desktop Connection security warning'...
[DESKTOP-4TBMFAD]   [SkilledAction]   Found: 'Remote Desktop Connection security warning'
[DESKTOP-4TBMFAD]   [SkilledAction]   Clicked 'Connect'
[DESKTOP-4TBMFAD]   [SkilledAction] Step 2: Waiting for 'Windows Security' dialog...
[DESKTOP-4TBMFAD]   [SkilledAction]   Found: 'Windows Security'
[DESKTOP-4TBMFAD]   [SkilledAction]   Clicked 'More choices'
[DESKTOP-4TBMFAD]   [SkilledAction] Step 3: Clicking 'Use a different account'...
[DESKTOP-4TBMFAD]   [SkilledAction]   WARNING: Could not find 'Use a different account'  ?trying to proceed anyway
[DESKTOP-4TBMFAD]   [SkilledAction] Step 4: Entering credentials...
[DESKTOP-4TBMFAD]   [SkilledAction]   Entered username
[DESKTOP-4TBMFAD]   [SkilledAction]   Entered password (12 chars)
[DESKTOP-4TBMFAD]   [SkilledAction]   Clicked 'OK'
[DESKTOP-4TBMFAD]   [SkilledAction] Step 5: Waiting for certificate warning dialog...
[DESKTOP-4TBMFAD]   [SkilledAction]   Found: 'Remote Desktop'
[DESKTOP-4TBMFAD]   [SkilledAction]   Clicked 'Yes'
[DESKTOP-4TBMFAD]   [SkilledAction] P2P Windows Security login completed successfully
[DESKTOP-4TBMFAD]   [SkilledAction] Exited with code 0 (12682ms)
[DESKTOP-4TBMFAD]   [Phase 3.5] Skilled action (1/2) completed in 12682ms
[DESKTOP-4TBMFAD]   [Phase 3.5] Executing skilled action (2/2): remote-session-lifecycle
[DESKTOP-4TBMFAD]   [SkilledAction] Executing: cmd.exe /c powershell.exe -NoProfile -ExecutionPolicy Bypass -File C:\\Users\\chengjiexu\\source\\repos\\WCX-AI-Autotest\\skilled-actions\\remote-session-lifecycle\\lifecycle.ps1
[DESKTOP-4TBMFAD]   [SkilledAction] Timeout: 180000ms
[DESKTOP-4TBMFAD]   [SkilledAction] === Remote Session Lifecycle ===
[DESKTOP-4TBMFAD]   [SkilledAction] Max desktop wait: 120s, Window timeout: 60s
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 1: Waiting for remote session window (up to 60s)...
[DESKTOP-4TBMFAD]   [SkilledAction]   Found session window: '20.42.20.45' (class=TscShellContainerClass, proc=msrdc, 7680x3377)
[DESKTOP-4TBMFAD]   [SkilledAction] Session window detected (desktop): 7680x3377 at (-2890,-2177)
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 2: Checking for system permission dialogs...
[DESKTOP-4TBMFAD]   [SkilledAction] No system dialogs found
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 3: Waiting for remote desktop to be ready (AI detection, up to 120s)...
[DESKTOP-4TBMFAD]   [SkilledAction]   Found session window: '20.42.20.45' (class=TscShellContainerClass, proc=msrdc, 7680x3377)
[DESKTOP-4TBMFAD]   [SkilledAction]   Analyzing screenshot (elapsed: 0s)...
[DESKTOP-4TBMFAD]   [SkilledAction]   AI says: ready=False, reason=The screen is completely black with no visible desktop wallpaper, taskbar, icons, or application windows.
[DESKTOP-4TBMFAD]   [SkilledAction]   Found session window: '20.42.20.45' (class=TscShellContainerClass, proc=msrdc, 7680x3377)
[DESKTOP-4TBMFAD]   [SkilledAction]   Analyzing screenshot (elapsed: 10s)...
[DESKTOP-4TBMFAD]   [SkilledAction]   AI says: ready=True, reason=An open application window (Notepad) and the taskbar are visible, indicating the desktop is loaded and usable.
[DESKTOP-4TBMFAD]   [SkilledAction] Remote desktop is ready!
[DESKTOP-4TBMFAD]   [SkilledAction] Desktop detection took 25s
[DESKTOP-4TBMFAD]   [SkilledAction] Phase 4: Closing remote session window...
[DESKTOP-4TBMFAD]   [SkilledAction]   Found session window: '20.42.20.45' (class=TscShellContainerClass, proc=msrdc, 7680x3377)
[DESKTOP-4TBMFAD]   [SkilledAction] Killing msrdc (PID 76524)...
[DESKTOP-4TBMFAD]   [SkilledAction] Remote session lifecycle completed successfully
[DESKTOP-4TBMFAD]   [SkilledAction] Exited with code 0 (45204ms)
[DESKTOP-4TBMFAD]   [Phase 3.5] Skilled action (2/2) completed in 45204ms
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains a large number of interactive elements, buttons, text labels, and content indicating full load; no loading indicators or spinners detected.)
[DESKTOP-4TBMFAD]   Page source stabilized after 11061ms (296 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 91/116 elements matched (78.4%, threshold: 70%)
[DESKTOP-4TBMFAD]     25 elements missing (showing first 3)
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur43|Name=Filter by Type|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur44|Name=Filter by Workspace|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur45|Name=Sort by A-Z|IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification passed (78.4%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Verifying trailing evidence (step 7) -- final screen state check
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains a large number of interactive elements, buttons, labels, and content text with no visible loading indicators or progress elements, indicating the page is fully loaded.)
[DESKTOP-4TBMFAD]   Page source stabilized after 11719ms (296 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 91/116 elements matched (78.4%, threshold: 70%)
[DESKTOP-4TBMFAD]     25 elements missing (showing first 3)
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur43|Name=Filter by Type|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur44|Name=Filter by Workspace|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menur45|Name=Sort by A-Z|IsEnabled=True
[DESKTOP-4TBMFAD]   Trailing evidence XML verification passed
[DESKTOP-4TBMFAD]   ✓ Step 1 SUCCESS
[DESKTOP-4TBMFAD]   ✓ Step 2 SUCCESS
[DESKTOP-4TBMFAD]   ✓ Step 3 SUCCESS
[DESKTOP-4TBMFAD]
----------------------------------------
[DESKTOP-4TBMFAD] Test case p2p: PASSED
[DESKTOP-4TBMFAD] Success: 3, Failed: 0
[DESKTOP-4TBMFAD] ----------------------------------------
[DESKTOP-4TBMFAD] Test Set p2p: PASSED (1/1)
[DESKTOP-4TBMFAD] Cleaning up sessions...
[DESKTOP-4TBMFAD]
=== DEVICE COMPLETE: ALL PASSED ===

╔════════════════════════════════════════════╗
║    AUTOTEST MULTI-DEVICE RUN COMPLETE      ║
╚════════════════════════════════════════════╝
Devices: 1
Total Passed: 1, Total Failed: 0
Result: ✓ ALL PASSED

Per-Device Summary:
  ✓ DESKTOP-4TBMFAD (WindowsPC): 1 passed, 0 failed`;

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

export const AutotestDemoP2P: React.FC = () => {
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
