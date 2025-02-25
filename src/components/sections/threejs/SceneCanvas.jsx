/* eslint-disable react/no-unknown-property */
import { useEffect, useMemo } from "react";
import { usePageStore } from "../../../store/useStore";
import { useProgress } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { AnimatePresence } from "motion/react";
import ImageShaderMaterial from "./ImageShaderMaterial";
import Loader from "../../ui/Loader";

const SceneCanvas = () => {
  const {progress} = useProgress();
  const isCanvasLoaded = usePageStore((state) => state.isCanvasLoaded);
  const setIsCanvasLoaded = usePageStore((state) => state.setIsCanvasLoaded);

  const fovPosition = useMemo(() => {
    const cameraZPosition = 600;
    const newFovPosition = 2 * Math.atan(window.innerHeight / 2 / cameraZPosition) * (180 / Math.PI);
    return newFovPosition;
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsCanvasLoaded(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <>
      <AnimatePresence>
        {!isCanvasLoaded && <Loader />}
      </AnimatePresence>
        <Canvas
          style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: -1 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, Math.min(window.devicePixelRatio, 2)]}
          camera={{ fov: fovPosition, position: [0, 0, 600] }}>
          <color attach="background" args={["#d1d1d1"]} />
          <ImageShaderMaterial />
        </Canvas>
    </>
  );
};

export default SceneCanvas;
