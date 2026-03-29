import React, { useMemo } from "react";
import {
  AbsoluteFill,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";
import { Video } from "@remotion/media";

const VIDEO_FILE = "2026-03-27 14-52-26.mp4";

/**
 * Playback speed multiplier for the video.
 */
const PLAYBACK_RATE = 4;

/**
 * Duration in frames at 30fps with 4x speed — ceil(449.033333 * 30 / 4).
 */
export const AUTOTEST_DEMO_DURATION = Math.ceil(13471 / PLAYBACK_RATE);

// Raw log content embedded at build time isn't possible in Remotion without
// a fetch or static import, so we inline it via a constant.
// We read it from the .md file via fetch in calculateMetadata instead.
// For simplicity, we'll embed the log text directly.

const LOG_TEXT = `Filtered to 1 device(s) matching platform 'Windows'

╔════════════════════════════════════════════╗
║     AUTOTEST MULTI-DEVICE RUNNER           ║
╚════════════════════════════════════════════╝
App Package: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
Test sets to run: 1
Total test cases: 3
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
[DESKTOP-4TBMFAD] Session created: 7d960b3e-11fb-41bc-968a-dbdafb1ca143
[DESKTOP-4TBMFAD] 
--- TEST SET [1/1]: test ---
[DESKTOP-4TBMFAD] Preparing app...
[DESKTOP-4TBMFAD] Preparing Windows app for testing: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD]   Uninstalling UWP app: MicrosoftCorporationII.Windows365
[DESKTOP-4TBMFAD]   UWP app uninstalled (WinRT PackageManager)
[DESKTOP-4TBMFAD]   Installing Windows app: C:\\Users\\chengjiexu\\source\\repos\\WCX-AI-Autotest\\packages\\WindowsApp_x64_Release_2.0.1065.0.msix
[DESKTOP-4TBMFAD]   Windows app installed successfully
[DESKTOP-4TBMFAD] App ready (cleaned)
[DESKTOP-4TBMFAD] Launching app...
[DESKTOP-4TBMFAD] Re-creating session targeting app: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD] Found window handle 0x481006, creating session with appTopLevelWindow
[DESKTOP-4TBMFAD] App-scoped session created: 2edbab7b-9a64-4b97-a7e0-8659caedb93a
[DESKTOP-4TBMFAD] [1/3] 001-test1-20260323-160559.zip

========================================
[DESKTOP-4TBMFAD] Running test case: test1
[DESKTOP-4TBMFAD] App package: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD] Total steps: 3
[DESKTOP-4TBMFAD] Evidence source XMLs available: 4
[DESKTOP-4TBMFAD] ========================================
[DESKTOP-4TBMFAD] Pre-loaded 4 evidence screenshot(s) into cache
[DESKTOP-4TBMFAD] Pre-loaded 4 evidence XML file(s) into cache
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 1: tap - xpath="//*[@Name="Next"]"
[DESKTOP-4TBMFAD]   [Windows fast path] Element not found in 2018ms — falling through to full flow
[DESKTOP-4TBMFAD]   Waiting for page to stabilize...
[DESKTOP-4TBMFAD]   AI page readiness: loading (confidence: 90%, Presence of splash screen elements and 'loading' text indicates the page is still loading, suggested wait: 3000ms)
[DESKTOP-4TBMFAD]   AI page readiness: loading (confidence: 90%, Presence of splash screen elements and 'loading' text indicates the page is still loading, suggested wait: 3000ms)
[DESKTOP-4TBMFAD]   Page source still loading (59 -> 45 elements)
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, Multiple interactive elements and content text present, no loading indicators detected)
[DESKTOP-4TBMFAD]   Page source stabilized after 35423ms (45 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   Screen matches expected evidence (100.0%) — skipping dialog sweep
[DESKTOP-4TBMFAD]   Waiting for element: xpath="//*[@Name="Next"]"
[DESKTOP-4TBMFAD]   Element found in 1057ms
[DESKTOP-4TBMFAD]   Refreshing page source for evidence comparison (element took 1057ms to appear)
[DESKTOP-4TBMFAD]   XML structural comparison: 24/24 elements matched (100.0%, threshold: 70%)
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, Multiple interactive buttons and content text present, no loading indicators detected)
[DESKTOP-4TBMFAD]   Page source stabilized after 7825ms (46 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 25/25 elements matched (100.0%, threshold: 70%)
[DESKTOP-4TBMFAD]   Post-action verification passed (100.0%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 2: tap - xpath="//*[@Name="Next"]"
[DESKTOP-4TBMFAD]   [Windows fast path] Element found in 872ms — skipping stabilization/evidence
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, Multiple interactive buttons and content text present, no loading indicators detected)
[DESKTOP-4TBMFAD]   Page source stabilized after 8008ms (46 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 25/25 elements matched (100.0%, threshold: 70%)
[DESKTOP-4TBMFAD]   Post-action verification passed (100.0%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 3: tap - xpath="//*[@Name="Done"]"
[DESKTOP-4TBMFAD]   [Windows fast path] Element found in 859ms — skipping stabilization/evidence
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains a large number of interactive elements, buttons, labels, and content text with no visible loading indicators or spinners, indicating the page is fully loaded.)
[DESKTOP-4TBMFAD]   Page source stabilized after 12585ms (295 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 116/116 elements matched (100.0%, threshold: 70%)
[DESKTOP-4TBMFAD]   Post-action verification passed (100.0%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Verifying trailing evidence (step 7) -- final screen state check
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains a large number of interactive elements, buttons, labels, and content text with no indication of loading indicators or spinners. The presence of multiple navigation buttons, content groups, and detailed text suggests the page is fully loaded.)
[DESKTOP-4TBMFAD]   Page source stabilized after 13132ms (295 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 116/116 elements matched (100.0%, threshold: 70%)
[DESKTOP-4TBMFAD]   Trailing evidence XML verification passed
[DESKTOP-4TBMFAD]   ✓ Step 1 SUCCESS
[DESKTOP-4TBMFAD]   ✓ Step 2 SUCCESS
[DESKTOP-4TBMFAD]   ✓ Step 3 SUCCESS

----------------------------------------
[DESKTOP-4TBMFAD] Test case test1: PASSED
[DESKTOP-4TBMFAD] Success: 3, Failed: 0
----------------------------------------
[DESKTOP-4TBMFAD] [2/3] 002-select-cloudpc-20260324-115140.zip

========================================
[DESKTOP-4TBMFAD] Running test case: select cloudpc
[DESKTOP-4TBMFAD] App package: MicrosoftCorporationII.Windows365_6g9js42rzzzpp!Windows365
[DESKTOP-4TBMFAD] Total steps: 3
[DESKTOP-4TBMFAD] Evidence source XMLs available: 4
[DESKTOP-4TBMFAD] ========================================
[DESKTOP-4TBMFAD] Pre-loaded 4 evidence screenshot(s) into cache
[DESKTOP-4TBMFAD] Pre-loaded 4 evidence XML file(s) into cache
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 1: tap - accessibility id="menurj"
[DESKTOP-4TBMFAD]   [Windows fast path] Element found in 410ms — skipping stabilization/evidence
[DESKTOP-4TBMFAD]   Windows guide: teaching bubble/guide indicators detected, analyzing...
[DESKTOP-4TBMFAD]   AI guide analysis: teaching-bubble detected — name="Close" (Close, closes guide) (confidence: 100%, The XML contains a 'ms-TeachingBubble-content' element with a teaching bubble title and body text. There is a 'Close' button with Name='Close' that is enabled and visible, which is the best dismiss button. The 'Next' button advances the guide and is not suitable for dismissal.)
[DESKTOP-4TBMFAD]   Windows guide: AI suggests name="Close" (Close, closes guide)
[DESKTOP-4TBMFAD]   Windows guide: found 3 elements for name="Close", filtering by visibility...
[DESKTOP-4TBMFAD]   Windows guide: selected visible element at (498,91 41x38)
[DESKTOP-4TBMFAD]   Windows guide: dismissing teaching-bubble — tap name="Close" (AI, closes guide)
[DESKTOP-4TBMFAD]   Windows guide: teaching-bubble dismissed via AI
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains a large number of interactive elements, buttons, text labels, and content items with no visible loading indicators or progress elements, indicating the page is fully loaded.)
[DESKTOP-4TBMFAD]   Page source stabilized after 12055ms (287 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   [Windows fast path] Dismissed 1 guide(s) before action
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains a large number of interactive elements, buttons, labels, and content text with no visible loading indicators or spinners, indicating the page is fully loaded.)
[DESKTOP-4TBMFAD]   Page source stabilized after 11870ms (293 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 116/116 elements matched (100.0%, threshold: 70%)
[DESKTOP-4TBMFAD]   Post-action verification passed (100.0%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 2: tap - xpath="//*[@Name="Windows 365"]"
[DESKTOP-4TBMFAD]   [Windows fast path] Element not found in 2013ms — falling through to full flow
[DESKTOP-4TBMFAD]   Waiting for page to stabilize...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains a large number of interactive elements, buttons, text labels, and content items with no visible loading indicators or progress elements, indicating the page is fully loaded.)
[DESKTOP-4TBMFAD]   Page source stabilized after 14932ms (293 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   Screen matches expected evidence (100.0%) — skipping dialog sweep
[DESKTOP-4TBMFAD]   Waiting for element: xpath="//*[@Name="Windows 365"]"
[DESKTOP-4TBMFAD]   Element found in 3591ms
[DESKTOP-4TBMFAD]   Refreshing page source for evidence comparison (element took 3591ms to appear)
[DESKTOP-4TBMFAD]   XML structural comparison: 116/116 elements matched (100.0%, threshold: 70%)
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains many interactive elements including buttons, filters, and content text with no loading indicators present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 8245ms (102 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 59/59 elements matched (100.0%, threshold: 70%)
[DESKTOP-4TBMFAD]   Post-action verification passed (100.0%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 3: tap - accessibility id="moreOperationButton-109ea4c3-f804-49ca-a926-9cfd296bdd0d"
[DESKTOP-4TBMFAD]   [Windows fast path] Element found in 420ms — skipping stabilization/evidence
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains numerous interactive elements, buttons, and content text with no loading indicators present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 8071ms (105 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 63/63 elements matched (100.0%, threshold: 70%)
[DESKTOP-4TBMFAD]   Post-action verification passed (100.0%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Verifying trailing evidence (step 7) -- final screen state check
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains many interactive elements, buttons, and content text with no loading indicators present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 8488ms (105 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 63/63 elements matched (100.0%, threshold: 70%)
[DESKTOP-4TBMFAD]   Trailing evidence XML verification passed
[DESKTOP-4TBMFAD]   ✓ Step 1 SUCCESS
[DESKTOP-4TBMFAD]   ✓ Step 2 SUCCESS
[DESKTOP-4TBMFAD]   ✓ Step 3 SUCCESS

----------------------------------------
[DESKTOP-4TBMFAD] Test case select cloudpc: PASSED
[DESKTOP-4TBMFAD] Success: 3, Failed: 0
----------------------------------------
[DESKTOP-4TBMFAD] [3/3] 003-login-to-cpc-20260324-165724.zip

========================================
[DESKTOP-4TBMFAD] Running test case: login to cpc
[DESKTOP-4TBMFAD] App package: MicrosoftCorporationII.Windows365_8wekyb3d8bbwe!Windows365
[DESKTOP-4TBMFAD] Total steps: 3
[DESKTOP-4TBMFAD] Evidence source XMLs available: 4
[DESKTOP-4TBMFAD] ========================================
[DESKTOP-4TBMFAD] Pre-loaded 4 evidence screenshot(s) into cache
[DESKTOP-4TBMFAD] Pre-loaded 4 evidence XML file(s) into cache
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 1: tap - xpath="//*[@Name=\\"Connect\\"]"
[DESKTOP-4TBMFAD]   [Windows fast path] Element found in 1411ms — skipping stabilization/evidence
[DESKTOP-4TBMFAD]   Window switch: polling for new window (5 attempts, 2000ms interval)...
[DESKTOP-4TBMFAD]   Windows system dialog: checking via AI screenshot analysis...
[DESKTOP-4TBMFAD]   AI Windows dialog detection: no dialog (confidence: 100%, The screenshot shows an application window with device information and no visible Windows system permission or consent dialog.)
[DESKTOP-4TBMFAD]   AI Windows dialog detection: no dialog (confidence: 100%, The screenshot shows a Windows App window with device information but no Windows system permission or consent dialog is visible.)
[DESKTOP-4TBMFAD]   Windows system dialog: AI says no dialog (The screenshot shows a Windows App window with device information but no Windows system permission or consent dialog is visible.)
[DESKTOP-4TBMFAD]   Window switch: detected new child window 0x1b113e0 (attempt 1)
[DESKTOP-4TBMFAD]   Window switch: new session created 79023078-aeeb-49fd-b20f-2db9f8dcc8ee for window 0x1b113e0
[DESKTOP-4TBMFAD]   Windows system dialog: checking via AI screenshot analysis...
[DESKTOP-4TBMFAD]   AI Windows dialog detection: FOUND "camera-permission" (confidence: 100%, The dialog clearly asks 'Let Windows App access your camera?' with buttons 'Yes' and 'No', which is a standard Windows camera permission consent dialog.)
[DESKTOP-4TBMFAD]   Windows system dialog: AI detected "camera-permission" dialog, clicking "Yes"...
[DESKTOP-4TBMFAD]   Windows system dialog: permission granted via "Yes" (WinAppDriver Root)
[DESKTOP-4TBMFAD]   Window switch: post-switch dialog dismissed (permission-consent (camera-permission), attempt 1)
[DESKTOP-4TBMFAD]   Windows system dialog: checking via AI screenshot analysis...
[DESKTOP-4TBMFAD]   AI Windows dialog detection: no dialog (confidence: 100%, No Windows system permission or consent dialog is visible on the desktop screenshot.)
[DESKTOP-4TBMFAD]   AI Windows dialog detection: no dialog (confidence: 100%, No Windows system permission or consent dialog is visible on the desktop screenshot.)
[DESKTOP-4TBMFAD]   Windows system dialog: AI says no dialog (No Windows system permission or consent dialog is visible on the desktop screenshot.)
[DESKTOP-4TBMFAD]   Window switch: verification pass after dialog dismissal — stopping poll (1 dismissed)
[DESKTOP-4TBMFAD]   Window switched — now using session 79023078-aeeb-49fd-b20f-2db9f8dcc8ee for window 0x1b113e0
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 80%, Multiple window elements with descriptive texts indicating main and child windows are present, no loading indicators detected)
[DESKTOP-4TBMFAD]   Page source stabilized after 7486ms (8 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 5/13 elements matched (38.5%, below 70% threshold)
[DESKTOP-4TBMFAD]   Window title match: "devbox" — treating as verified (remote desktop window with auto-hiding toolbar)
[DESKTOP-4TBMFAD]   Post-action verification passed (38.5%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 2: tap - xpath="//*[@Name=\\"Close\\"]"
[DESKTOP-4TBMFAD]   [Windows fast path] Element not found in 166ms — falling through to full flow
[DESKTOP-4TBMFAD]   Waiting for page to stabilize...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 80%, Multiple window and container elements with meaningful text indicating main content is present; no loading indicators detected)
[DESKTOP-4TBMFAD]   Page source stabilized after 6449ms (8 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   Screen matches expected evidence (38.5%) — skipping dialog sweep
[DESKTOP-4TBMFAD]   Waiting for element: xpath="//*[@Name=\\"Close\\"]"
[DESKTOP-4TBMFAD]   Primary locator failed after 0 re-stabilization attempts, trying 3 alternative locator(s)...
[DESKTOP-4TBMFAD]   Trying alternative: xpath="//*[@Name=\\"Close\\"]"
[DESKTOP-4TBMFAD]   Trying alternative: xpath="//*[@ControlType=\\"ControlType.Button\\" and @Name=\\"Close\\"]"
[DESKTOP-4TBMFAD]   Trying alternative: xpath="/Window/Pane[1]/ToolBar[1]/Button[3]"
[DESKTOP-4TBMFAD]   All locators failed, trying smart element finder...
[DESKTOP-4TBMFAD]   Smart finder: Using stored element signature
[DESKTOP-4TBMFAD]   Smart finder attributes: Name="Close"
[DESKTOP-4TBMFAD]   Trying auto-hide bar reveal before AI pipeline...
[DESKTOP-4TBMFAD]   Auto-hide bar: moving mouse to top center to reveal hidden toolbar...
[DESKTOP-4TBMFAD]   Auto-hide bar: mouse moved to top center — toolbar should be visible
[DESKTOP-4TBMFAD]   Element found after auto-hide bar reveal
[DESKTOP-4TBMFAD]   XML structural comparison: 5/13 elements matched (38.5%, below 70% threshold)
[DESKTOP-4TBMFAD]   Window title match: "devbox" — treating as verified (remote desktop window with auto-hiding toolbar)
[DESKTOP-4TBMFAD]   Window switch: polling for new window (5 attempts, 2000ms interval)...
[DESKTOP-4TBMFAD]   Window switch: upcoming step targets a dialog button — skipping auto-dismiss
[DESKTOP-4TBMFAD]   Windows system dialog: checking via AI screenshot analysis...
[DESKTOP-4TBMFAD]   AI Windows dialog detection: no dialog (confidence: 100%, The visible dialog is a Remote Desktop informational message about session disconnection, not a Windows system permission or consent dialog.)
[DESKTOP-4TBMFAD]   AI Windows dialog detection: no dialog (confidence: 100%, The visible dialog is a Remote Desktop informational message about session disconnection, not a Windows system permission or consent dialog.)
[DESKTOP-4TBMFAD]   Windows system dialog: AI says no dialog (The visible dialog is a Remote Desktop informational message about session disconnection, not a Windows system permission or consent dialog.)
[DESKTOP-4TBMFAD]   Window switch: detected new child window 0x381128 (attempt 1)
[DESKTOP-4TBMFAD] [WARN]   Window switch: 0x381128 is not a top-level window — blacklisted
[DESKTOP-4TBMFAD]   Windows system dialog: checking via AI screenshot analysis...
[DESKTOP-4TBMFAD]   AI Windows dialog detection: no dialog (confidence: 100%, The visible dialog is a Remote Desktop informational message about session disconnection, not a Windows system permission or consent dialog.)
[DESKTOP-4TBMFAD]   AI Windows dialog detection: no dialog (confidence: 100%, The visible dialog is a Remote Desktop informational message about session disconnection, not a Windows system permission or consent dialog.)
[DESKTOP-4TBMFAD]   Windows system dialog: AI says no dialog (The visible dialog is a Remote Desktop informational message about session disconnection, not a Windows system permission or consent dialog.)
[DESKTOP-4TBMFAD]   Window switch: no actionable windows after repeated checks — exiting early
[DESKTOP-4TBMFAD]   Window switch: no new window detected within timeout
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, Page shows multiple interactive buttons, informative text, and no loading indicators present)
[DESKTOP-4TBMFAD]   Page source stabilized after 6697ms (26 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 21/23 elements matched (91.3%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: Name=Unpin the connection bar|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=98574504|IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification passed (91.3%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Step 3: tap - accessibility id="CommandButton_1"
[DESKTOP-4TBMFAD]   [Windows fast path] Element found in 157ms — skipping stabilization/evidence
[DESKTOP-4TBMFAD]   Post-action verification: checking screen matches expected state...
[DESKTOP-4TBMFAD]   Child window appears closed (0 elements for 2 consecutive polls) — returning after 1030ms
[DESKTOP-4TBMFAD]   Post-action: child window appears closed (0 elements) — switching back to main app...
[DESKTOP-4TBMFAD]   Switch-back: original app session still alive (96 elements)
[DESKTOP-4TBMFAD]   Post-action: switched back to main app session 2edbab7b-9a64-4b97-a7e0-8659caedb93a
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains many interactive elements, buttons, and visible content text with no loading indicators present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 8295ms (96 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 52/56 elements matched (92.9%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurc|Name=Filter by Type (1)|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurd|Name=Filter by Workspace|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menure|Name=Sort by A-Z|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Restore|IsEnabled=True
[DESKTOP-4TBMFAD]   Post-action verification passed (92.9%)
[DESKTOP-4TBMFAD]   Captured evidence XML source
[DESKTOP-4TBMFAD] Verifying trailing evidence (step 7) -- final screen state check
[DESKTOP-4TBMFAD]   AI page readiness: ready (confidence: 95%, The page contains many interactive elements, buttons, and visible content text with no loading indicators present.)
[DESKTOP-4TBMFAD]   Page source stabilized after 8498ms (96 elements, AI confirmed ready)
[DESKTOP-4TBMFAD]   XML structural comparison: 52/56 elements matched (92.9%, threshold: 70%)
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurc|Name=Filter by Type (1)|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menurd|Name=Filter by Workspace|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: AutomationId=menure|Name=Sort by A-Z|IsEnabled=True
[DESKTOP-4TBMFAD]     Missing: Name=Restore|IsEnabled=True
[DESKTOP-4TBMFAD]   Trailing evidence XML verification passed
[DESKTOP-4TBMFAD]   ✓ Step 1 SUCCESS
[DESKTOP-4TBMFAD]   ✓ Step 2 SUCCESS
[DESKTOP-4TBMFAD]   ✓ Step 3 SUCCESS

----------------------------------------
[DESKTOP-4TBMFAD] Test case login to cpc: PASSED
[DESKTOP-4TBMFAD] Success: 3, Failed: 0
----------------------------------------
[DESKTOP-4TBMFAD] Test Set test: PASSED (3/3)
[DESKTOP-4TBMFAD] Cleaning up sessions...

=== DEVICE COMPLETE: ALL PASSED ===

╔════════════════════════════════════════════╗
║    AUTOTEST MULTI-DEVICE RUN COMPLETE      ║
╚════════════════════════════════════════════╝
Devices: 1
Total Passed: 3, Total Failed: 0
Result: ✓ ALL PASSED

Per-Device Summary:
  ✓ DESKTOP-4TBMFAD (WindowsPC): 3 passed, 0 failed`;

const LOG_LINES = LOG_TEXT.split("\n");

/**
 * Width of the log overlay panel (right side).
 */
const LOG_PANEL_WIDTH = 580;

const FONT_FAMILY =
  "'Cascadia Code', 'Fira Code', 'Consolas', 'Courier New', monospace";

const FONT_SIZE = 13;
/**
 * Approximate character width for a 13px monospace font.
 * Used to estimate how many visual rows a long line will occupy when wrapping.
 */
const CHAR_WIDTH = 7.8;
const LINE_HEIGHT = 19;
/** Usable content width inside the panel (panel width minus padding). */
const CONTENT_WIDTH = LOG_PANEL_WIDTH - 24; // 12px padding on each side
const CHARS_PER_ROW = Math.floor(CONTENT_WIDTH / CHAR_WIDTH);

/**
 * Estimate how many visual rows a single log line occupies
 * when rendered with `white-space: pre-wrap` inside the panel.
 */
function estimateVisualRows(line: string): number {
  if (line.length === 0) return 1;
  return Math.ceil(line.length / CHARS_PER_ROW);
}

/**
 * AutotestDemo — plays the screen recording video on the left
 * with a scrolling terminal log overlay on the right side.
 *
 * The log panel has a semi-transparent black background with light green text,
 * styled like a terminal window.
 */
export const AutotestDemo: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Reveal log lines progressively over the entire video duration.
  // We spread all lines evenly across the video timeline.
  const totalLines = LOG_LINES.length;
  const framesPerLine = durationInFrames / totalLines;
  const visibleLineCount = Math.min(
    totalLines,
    Math.floor(frame / framesPerLine) + 1,
  );

  // Panel height available for log content (1080 minus title bar ~40px, minus padding)
  const panelContentHeight = 1080 - 40 - 16; // ~1024px
  const maxVisualRows = Math.floor(panelContentHeight / LINE_HEIGHT);

  // Auto-scroll: walk backwards from visibleLineCount to find how many
  // lines fit, accounting for wrapped lines taking multiple visual rows.
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

  // Apply syntax highlighting to log lines
  const highlightLine = useMemo(() => {
    return (line: string) => {
      // Success markers
      if (
        line.includes("✓") ||
        line.includes("PASSED") ||
        line.includes("ALL PASSED") ||
        line.includes("SUCCESS")
      ) {
        return { color: "#4ade80", fontWeight: 700 as const }; // brighter green for success
      }
      // Warnings
      if (line.includes("[WARN]")) {
        return { color: "#fbbf24" }; // amber for warnings
      }
      // Step headers
      if (line.match(/Step \d+:/)) {
        return { color: "#60a5fa" }; // blue for steps
      }
      // Box-drawing / headers
      if (line.includes("╔") || line.includes("╚") || line.includes("║")) {
        return { color: "#a5f3a0" }; // slightly brighter green for box art
      }
      // Section separators
      if (line.includes("========") || line.includes("--------")) {
        return { color: "#6b7280" }; // dim gray
      }
      // Default
      return { color: "#4ade80" }; // light green
    };
  }, []);

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Video — displayed at full native size (1728x1080), left-aligned */}
      <Video
        src={staticFile(VIDEO_FILE)}
        muted
        playbackRate={PLAYBACK_RATE}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "auto",
          height: 1080,
          objectFit: "contain",
        }}
      />

      {/* Log overlay — right side panel */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: LOG_PANEL_WIDTH,
          height: 1080,
          backgroundColor: "rgba(0, 0, 0, 0.80)",
          display: "flex",
          flexDirection: "column",
          borderLeft: "1px solid rgba(74, 222, 128, 0.2)",
        }}
      >
        {/* Terminal title bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 16px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderBottom: "1px solid rgba(74, 222, 128, 0.15)",
          }}
        >
          {/* Fake window dots */}
          <div style={{ display: "flex", gap: 6 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#ef4444",
              }}
            />
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#eab308",
              }}
            />
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#22c55e",
              }}
            />
          </div>
          <span
            style={{
              color: "rgba(74, 222, 128, 0.7)",
              fontFamily: FONT_FAMILY,
              fontSize: 12,
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
            // Fade in the newest line
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
