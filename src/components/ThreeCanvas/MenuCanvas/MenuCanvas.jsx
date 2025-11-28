/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import Scene from "./Scene";

const MenuCanvas = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        maxWidth: "2560px",
        height: "100vh",
        zIndex: 999,
        pointerEvents: "none",
      }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, Math.min(window.devicePixelRatio, 2)]}
    >
      <Camera />
      <Scene />
    </Canvas>
  );
};

export default MenuCanvas;
