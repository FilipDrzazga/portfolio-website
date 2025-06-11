/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import Scene from "./Scene";
import { OrbitControls } from "@react-three/drei";

const ThreeCanvas = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "60vh" }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, Math.min(window.devicePixelRatio, 2)]}
    >
      <Camera />
      <Scene />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default ThreeCanvas;
