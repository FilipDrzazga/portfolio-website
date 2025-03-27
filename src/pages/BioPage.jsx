// import { usePageStore } from "../store/useStore";
import SceneCanvas from "../components/sections/threejs/SceneCanvas";
import Hero from "../components/sections/bio/Hero/Hero";
import AboutMe from "../components/sections/bio/AboutMe/AboutMe";
import Contact from "../components/sections/bio/Contact/Contact";

const BioPage = () => {
  // const isCanvasLoaded = usePageStore((state) => state.isCanvasLoaded);
  return (
    <>
      <SceneCanvas />
      <Hero />
      <AboutMe />
      <Contact />
      {/* <SceneCanvas />
      {isCanvasLoaded && (
        <>
          <Hero />
          <AboutMe />
          <Contact />
        </>
      )} */}
    </>
  );
};

export default BioPage;
