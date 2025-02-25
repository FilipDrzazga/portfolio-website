import { usePageStore } from "../store/useStore";
import Navbar from "../components/ui/Navbar";
import Bio from "../components/sections/bio/Hero";
import AboutMe from "../components/sections/bio/AboutMe";
import Contact from "../components/sections/bio/Contact";
import SceneCanvas from "../components/sections/threejs/SceneCanvas";

const BioPages = () => {
  const isCanvasLoaded = usePageStore((state) => state.isCanvasLoaded);
  return (
    <>
      <SceneCanvas />
      {isCanvasLoaded && (
        <>
          <Navbar />
          <Bio />
          <AboutMe />
          <Contact />
        </>
      )}
    </>
  );
};

export default BioPages;
