/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import Scene from "./Scene";

const BackgroundCanvas = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        maxWidth: "2560px",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
      camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 5] }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, Math.min(window.devicePixelRatio, 2)]}
    >
      <color attach="background" args={["#f9fafa"]} />
      <Camera />
      <Scene />
    </Canvas>
  );
};

export default BackgroundCanvas;
