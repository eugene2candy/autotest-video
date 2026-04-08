import "./index.css";
import { Composition, Folder, Still } from "remotion";
import { FullVideo, FULL_VIDEO_DURATION } from "./FullVideo";
import { AutotestIntro } from "./AutotestIntro";
import { LogoStill } from "./AutotestIntro/LogoStill";
import { ProblemScene } from "./ProblemScene";
import { SolutionScene } from "./SolutionScene";
import { HelloWorld, myCompSchema } from "./HelloWorld";
import { Logo, myCompSchema2 } from "./HelloWorld/Logo";
import { RecordOnceGif } from "./RecordOnceGif";
import { ReplayEverywhereStill } from "./ReplayEverywhereStill";
import { AIFeatureStill, aiFeatureSchema } from "./AIFeatureStill";
import { AITerminalGif } from "./AITerminalGif";
import { SmartElementStill } from "./SmartElementStill";
import { DismissVideoGif, dismissVideoSchema } from "./DismissVideoGif";
import { SolutionStepStill, solutionStepSchema } from "./SolutionStepStill";
import { SummaryBadgeStill, summaryBadgeSchema } from "./SummaryBadgeStill";
import { CIPipelineGif } from "./CIPipelineGif";
import { ScaleGridGif } from "./ScaleGridGif";
import { MicrosoftLogoMorph } from "./MicrosoftLogoMorph";
import { TitlePageStill, titlePageSchema } from "./TitlePageStill";
import { HumanCentric, HUMAN_CENTRIC_DURATION } from "./HumanCentric";
import { PlanToPrototype, PLAN_TO_PROTOTYPE_DURATION } from "./PlanToPrototype";
import {
  PlanToPrototypeV3,
  PLAN_TO_PROTOTYPE_V3_DURATION,
} from "./PlanToPrototypeV3";
import { AutotestDemo, AUTOTEST_DEMO_DURATION } from "./AutotestDemo";
import { AutotestDemo2, AUTOTEST_DEMO2_DURATION } from "./AutotestDemo2";
import { AutotestDemo3, AUTOTEST_DEMO3_DURATION } from "./AutotestDemo3";
import { AutotestDemoSSO, AUTOTEST_DEMO_SSO_DURATION } from "./AutotestDemoSSO";
import { AutotestDemoCloudApp, AUTOTEST_DEMO_CLOUD_APP_DURATION } from "./AutotestDemoCloudApp";
import { AutotestDemoP2P, AUTOTEST_DEMO_P2P_DURATION } from "./AutotestDemoP2P";

const FEATURES = [
  {
    id: "AIFeature-Evidence",
    title: "AI Evidence Evaluation",
    description: "AI analyzes screenshots & XML to verify app state",
  },
  {
    id: "AIFeature-Unexpected",
    title: "Handles the Unexpected",
    description: "Permission dialogs, system popups — AI adapts automatically",
  },
  {
    id: "AIFeature-SmartElement",
    title: "Smart Element Finding",
    description:
      "Uses element signatures to locate elements despite UI changes",
  },
] as const;

const STEPS = [
  { id: "Step-OpenPortal", icon: "1", text: "Open Autotest Portal" },
  { id: "Step-Connect", icon: "2", text: "Connect \u2014 Tap, Type, Swipe" },
  {
    id: "Step-Captures",
    icon: "3",
    text: "Autotest captures everything",
  },
] as const;

const BADGES = [
  { id: "Badge-AIPowered", label: "AI-Powered", color: "#F25022" },
  { id: "Badge-AllPlatforms", label: "All Platforms", color: "#7FBA00" },
  { id: "Badge-CIReady", label: "CI Ready", color: "#00A4EF" },
  { id: "Badge-EasyToScale", label: "Easy to Scale", color: "#FFB900" },
] as const;

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* === Full combined video: Intro → Problem → Solution === */}
      <Composition
        id="FullVideo"
        component={FullVideo}
        durationInFrames={FULL_VIDEO_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* === Human-Centric AI slides for engineering leadership === */}
      <Composition
        id="HumanCentric"
        component={HumanCentric}
        durationInFrames={HUMAN_CENTRIC_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* === Plan to Prototype — 3-slide deck for engineering leadership === */}
      <Composition
        id="PlanToPrototype"
        component={PlanToPrototype}
        durationInFrames={PLAN_TO_PROTOTYPE_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* === Plan to Prototype v3 — CVP presentation === */}
      <Composition
        id="PlanToPrototypeV3"
        component={PlanToPrototypeV3}
        durationInFrames={PLAN_TO_PROTOTYPE_V3_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* === Autotest Demo — screen recording with scrolling terminal log overlay === */}
      <Composition
        id="AutotestDemo"
        component={AutotestDemo}
        durationInFrames={AUTOTEST_DEMO_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* === Autotest Demo 2 — second recording trimmed from 5:20 === */}
      <Composition
        id="AutotestDemo2"
        component={AutotestDemo2}
        durationInFrames={AUTOTEST_DEMO2_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* === Autotest Demo 3 — April 2 recording with bottom-right log overlay === */}
      <Composition
        id="AutotestDemo3"
        component={AutotestDemo3}
        durationInFrames={AUTOTEST_DEMO3_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* === Autotest Demo SSO — SSO CPC recording with bottom-right log overlay === */}
      <Composition
        id="AutotestDemoSSO"
        component={AutotestDemoSSO}
        durationInFrames={AUTOTEST_DEMO_SSO_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* === Autotest Demo Cloud App — cloud app recording with bottom-right log overlay === */}
      <Composition
        id="AutotestDemoCloudApp"
        component={AutotestDemoCloudApp}
        durationInFrames={AUTOTEST_DEMO_CLOUD_APP_DURATION}
        fps={30}
        width={1920}
        height={1200}
      />

      {/* === Autotest Demo P2P — P2P recording with bottom-right log overlay === */}
      <Composition
        id="AutotestDemoP2P"
        component={AutotestDemoP2P}
        durationInFrames={AUTOTEST_DEMO_P2P_DURATION}
        fps={30}
        width={1920}
        height={1200}
      />

      {/* === Individual scenes (for development / preview) === */}
      <Folder name="Scenes">
        <Composition
          id="AutotestIntro"
          component={AutotestIntro}
          durationInFrames={326}
          fps={30}
          width={1920}
          height={1080}
        />

        <Composition
          id="ProblemScene"
          component={ProblemScene}
          durationInFrames={1369}
          fps={30}
          width={1920}
          height={1080}
        />

        <Composition
          id="SolutionScene"
          component={SolutionScene}
          durationInFrames={3863}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>

      <Still
        id="AutotestLogoStill"
        component={LogoStill}
        width={512}
        height={512}
      />

      <Still
        id="ReplayEverywhereStill"
        component={ReplayEverywhereStill}
        width={1920}
        height={1080}
      />

      {FEATURES.map((feat) => (
        <Still
          key={feat.id}
          id={feat.id}
          component={AIFeatureStill}
          width={1100}
          height={166}
          schema={aiFeatureSchema}
          defaultProps={{
            title: feat.title,
            description: feat.description,
          }}
        />
      ))}

      {STEPS.map((step) => (
        <Still
          key={step.id}
          id={step.id}
          component={SolutionStepStill}
          width={950}
          height={76}
          schema={solutionStepSchema}
          defaultProps={{
            icon: step.icon,
            text: step.text,
          }}
        />
      ))}

      {BADGES.map((badge) => (
        <Still
          key={badge.id}
          id={badge.id}
          component={SummaryBadgeStill}
          width={280}
          height={90}
          schema={summaryBadgeSchema}
          defaultProps={{
            label: badge.label,
            color: badge.color,
          }}
        />
      ))}

      <Composition
        // You can take the "id" to render a video:
        // npx remotion render HelloWorld
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        schema={myCompSchema}
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
          logoColor1: "#91EAE4",
          logoColor2: "#86A8E7",
        }}
      />

      {/* Record Once title + icon for infinite-loop GIF export */}
      <Composition
        id="RecordOnceGif"
        component={RecordOnceGif}
        durationInFrames={47}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* AI Terminal typewriter animation for GIF export */}
      <Composition
        id="AITerminalGif"
        component={AITerminalGif}
        durationInFrames={122}
        fps={30}
        width={710}
        height={842}
      />

      {/* Smart Element signature panel — static still for PPT */}
      <Still
        id="SmartElementStill"
        component={SmartElementStill}
        width={750}
        height={700}
      />

      {/* CI Pipeline workflow GIF — all 4 steps visible, Testing... dots animate */}
      <Composition
        id="CIPipelineGif"
        component={CIPipelineGif}
        durationInFrames={20}
        fps={30}
        width={1650}
        height={400}
      />

      {/* Scale Grid GIF — 6 platform rows with animated arrows */}
      <Composition
        id="ScaleGridGif"
        component={ScaleGridGif}
        durationInFrames={30}
        fps={30}
        width={1200}
        height={780}
      />

      {/* Microsoft Logo Morph — badges → logo → text → flip */}
      <Composition
        id="MicrosoftLogoMorph"
        component={MicrosoftLogoMorph}
        durationInFrames={220}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Dismiss videos — individual device GIFs at 1.8x playback speed */}
      <Composition
        id="DismissVideo-Emulator"
        component={DismissVideoGif}
        durationInFrames={683}
        fps={30}
        width={360}
        height={800}
        schema={dismissVideoSchema}
        defaultProps={{
          src: "emulator - dismiss.mp4",
          label: "Emulator",
        }}
      />
      <Composition
        id="DismissVideo-Pixel"
        component={DismissVideoGif}
        durationInFrames={683}
        fps={30}
        width={360}
        height={820}
        schema={dismissVideoSchema}
        defaultProps={{
          src: "pixel - dismiss.mp4",
          label: "Pixel",
        }}
      />
      <Composition
        id="DismissVideo-Samsung"
        component={DismissVideoGif}
        durationInFrames={683}
        fps={30}
        width={360}
        height={840}
        schema={dismissVideoSchema}
        defaultProps={{
          src: "sumsung - dismiss.mp4",
          label: "Samsung",
        }}
      />

      {/* Title page stills — "The Problem" and "How Autotest Solves It" */}
      <Still
        id="TitlePage-Problem"
        component={TitlePageStill}
        width={1920}
        height={1080}
        schema={titlePageSchema}
        defaultProps={{ variant: "problem" }}
      />
      <Still
        id="TitlePage-Solution"
        component={TitlePageStill}
        width={1920}
        height={1080}
        schema={titlePageSchema}
        defaultProps={{ variant: "solution" }}
      />

      {/* Mount any React component to make it show up in the sidebar and work on it individually! */}
      <Composition
        id="OnlyLogo"
        component={Logo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema2}
        defaultProps={{
          logoColor1: "#91dAE2" as const,
          logoColor2: "#86A8E7" as const,
        }}
      />
    </>
  );
};
