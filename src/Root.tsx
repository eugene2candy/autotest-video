import "./index.css";
import { Composition, Folder, Still } from "remotion";
import { FullVideo, FULL_VIDEO_DURATION } from "./FullVideo";
import { AutotestIntro } from "./AutotestIntro";
import { LogoStill } from "./AutotestIntro/LogoStill";
import { ProblemScene } from "./ProblemScene";
import { SolutionScene } from "./SolutionScene";
import { HelloWorld, myCompSchema } from "./HelloWorld";
import { Logo, myCompSchema2 } from "./HelloWorld/Logo";

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

      {/* === Individual scenes (for development / preview) === */}
      <Folder name="Scenes">
        <Composition
          id="AutotestIntro"
          component={AutotestIntro}
          durationInFrames={366}
          fps={30}
          width={1920}
          height={1080}
        />

        <Composition
          id="ProblemScene"
          component={ProblemScene}
          durationInFrames={1630}
          fps={30}
          width={1920}
          height={1080}
        />

        <Composition
          id="SolutionScene"
          component={SolutionScene}
          durationInFrames={4894}
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
