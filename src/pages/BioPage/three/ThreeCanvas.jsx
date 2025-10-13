import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import Scene from "./Scene";

const ThreeCanvas = () => {
  return (
    <Canvas
      style={{ position: "fixed", top: 0, left: 0, width: "100%", maxWidth: "1920px", height: "100vh", zIndex: -1 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, Math.min(window.devicePixelRatio, 2)]}
    >
      <Camera />
      <Scene />
    </Canvas>
  );
};

export default ThreeCanvas;
