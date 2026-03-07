Record application interactions visually. One time record, replay everywhere. 

The Problem
Mobile UI testing is painful. Manual testing doesn't scale. Scripted automation (Appium, Espresso, XCTest) requires developer expertise and breaks with every UI change. Existing record-and-replay tools produce fragile tests tied to brittle locators that fail across devices.

The Solution
Autotest is a native test automation tool that turns any Appium Inspector session into a recording studio. By transparently intercepting the W3C WebDriver protocol through a proxy layer, Autotest captures every user interaction -- taps, text input, gestures -- alongside rich screen evidence (screenshots + XML snapshots), without modifying Appium Inspector at all.

What makes Autotest different is its AI-enhanced shared step executor -- a unified execution engine that powers recording, replay, and CI/CD test runs with intelligent capabilities:

AI-Powered Evidence Evaluation: During test execution, AI analyzes captured screen evidence (screenshots and XML page structure) to verify the app is in the expected state before and after each action. Rather than relying on exact pixel matches or rigid structural comparisons, AI understands what the screen should look like, enabling robust verification that tolerates normal UI variations across devices and OS versions.

Smart Action Triggering: When the recorded locator can't find an element (due to UI changes, different devices, or dynamic content), AI uses element signatures -- a rich fingerprint of text, accessibility labels, parent/sibling context, and spatial position -- to intelligently locate the right element through a multi-strategy cascade. This makes tests resilient to UI changes that would break traditional automation.

Key Features
Zero-code test creation: Record tests by simply using the app through Appium Inspector's visual interface
Proxy-based architecture: Transparent WebDriver interception -- works with any standard Appium Inspector, no plugins or modifications needed
Dual step types: Every test case captures interleaved action steps and evidence steps, creating a complete audit trail of what the app looked like at each stage
14-level locator ranking: Automatically enhances weak locators with robust alternatives (resource IDs, accessibility labels, parent-child context, UiAutomator selectors)
Multi-device execution: Run test sets across all connected devices with per-device sessions, fail-fast behavior, and video recording
CI/CD ready: CLI runner with JUnit XML reports, GitHub Actions / Azure DevOps integration, and secret parameter management for sensitive test data
Portable test packages: Export test cases as self-contained ZIP files organized into test sets -- share, version control, and run them anywhere
Real-time dashboard: Live Socket.IO progress tracking during recording, replay, and batch execution
Multi-platform architecture: Platform adapter pattern enables expansion from Android to iOS, Windows, macOS, and Web
Impact
QA engineers go from manual clicking to automated test suites in minutes, not days
Developers get reliable regression tests that survive UI refactors
CI/CD pipelines get JUnit-compatible reports with video evidence
Teams reduce test maintenance burden through AI-powered self-healing tests
Tech Stack
Node.js + Express backend, React + TypeScript frontend, SQLite, Appium 3.x, Socket.IO, Vite -- all running natively on macOS, Windows, and Linux.s