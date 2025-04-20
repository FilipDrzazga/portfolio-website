import { useEffect, useMemo } from "react";
import { usePageStore } from "../../../store/useStore";
import { useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ImageShaderMaterial from "./ImageShaderMaterial";

const SceneCanvas = () => {
  const { progress } = useProgress();
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
  }, [progress, setIsCanvasLoaded]);

  return (
    <Canvas
      style={{ position: "fixed", top: 0, left: 0, maxWidth: "100%", height: "100vh", zIndex: -1 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, Math.min(window.devicePixelRatio, 2)]}
      camera={{ fov: fovPosition, position: [0, 0, 600] }}
    >
      <ImageShaderMaterial />
    </Canvas>
  );
};

export default SceneCanvas;
