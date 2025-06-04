/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import * as THREE from "three";

const Slider = () => {
  const mesh = useRef(null);
  return (
    <>
      <mesh ref={mesh} position={[0, 0, 0]}>
        <boxGeometry args={[100, 200, 100]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
};

export default Slider;
