import {useEffect} from "react";
import { usePageStore } from "../../store/useStore";
import SceneCanvas from "./three/SceneCanvas";
import Loader from "../../components/Loader/Loader";
import { BioPageWrapper } from "./BioPage.styled";
import { Hero, AboutMe, Contact } from "./components";

const BioPage = () => {
  const isCanvasLoaded = usePageStore((state) => state.isCanvasLoaded);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    },1500);

    return () => {
      clearTimeout(timer);
    };
  },[])

  return (
    <>
      <SceneCanvas />
      {!isCanvasLoaded ? (
        <Loader />
      ) : (
        <BioPageWrapper>
          <Hero/>
          <AboutMe/>
          <Contact/>
        </BioPageWrapper>
      )}
    </>
  );
};

export default BioPage;
