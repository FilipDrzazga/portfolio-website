import { usePageStore } from "../store/useStore";
import Bio from "../components/sections/bio/Hero";
import AboutMe from "../components/sections/bio/AboutMe";
import Contact from "../components/sections/bio/Contact";
import SceneCanvas from "../components/sections/threejs/SceneCanvas";

const BioPage = () => {
  const isCanvasLoaded = usePageStore((state) => state.isCanvasLoaded);
  return (
    <>
      <SceneCanvas />
      {isCanvasLoaded && (
        <>
          <Bio />
          <AboutMe />
          <Contact />
        </>
      )}
    </>
  );
};

export default BioPage;
