import "./index.css";
import { Composition, Still } from "remotion";
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
      <Composition
        id="AutotestIntro"
        component={AutotestIntro}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Scene 1: The Problem with UI Testing */}
      <Composition
        id="ProblemScene"
        component={ProblemScene}
        durationInFrames={600}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Scene 2: How Autotest Solves It */}
      <Composition
        id="SolutionScene"
        component={SolutionScene}
        durationInFrames={990}
        fps={30}
        width={1920}
        height={1080}
      />

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
