import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Slider from "./Slider";

const SceneCanvas = () => {
  const fovPosition = useMemo(() => {
    const cameraZPosition = 600;
    const newFovPosition = 2 * Math.atan(window.innerHeight / 2 / cameraZPosition) * (180 / Math.PI);
    return newFovPosition;
  }, []);

  return (
    <Canvas
      style={{ width: "100%", height: "100vh" }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, Math.min(window.devicePixelRatio, 2)]}
      camera={{ fov: fovPosition, position: [0, 0, 600] }}
    >
      <OrbitControls />
      <Slider />
    </Canvas>
  );
};

export default SceneCanvas;
