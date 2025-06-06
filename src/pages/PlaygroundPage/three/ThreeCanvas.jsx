import { useMemo, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

const ThreeCanvas = () => {
  const fovPosition = useMemo(() => {
    const cameraZPosition = 600;
    const newFovPosition = 2 * Math.atan(window.innerHeight / 2 / cameraZPosition) * (180 / Math.PI);
    return newFovPosition;
  }, []);

  useEffect(() => {}, []);

  return (
    <Canvas
      style={{ width: "100%", height: "80vh" }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, Math.min(window.devicePixelRatio, 2)]}
      camera={{ fov: fovPosition, position: [0, 0, 600] }}
    >
      {/* <OrbitControls enableZoom={false} /> */}
      <Scene />
    </Canvas>
  );
};

export default ThreeCanvas;
