/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import Scene from "./Scene";

const ThreeCanvas = () => {
  return (
    <Canvas
      style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "60vh" }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, Math.min(window.devicePixelRatio, 2)]}
    >
      <color attach="background" args={["#f9fafa"]} />
      <Camera />
      <Scene />
    </Canvas>
  );
};

export default ThreeCanvas;
