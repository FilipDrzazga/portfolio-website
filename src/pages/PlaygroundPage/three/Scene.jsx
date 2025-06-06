/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import useResponsiveImages from "../../../hook/useResponsiveImages";

import Vertex from "./shaders/Vertex.glsl?raw";
import Fragment from "./shaders/Fragment.glsl?raw";

const Scene = () => {
  const mesh = useRef(null);
  const { bioImageSrc } = useResponsiveImages();
  const bioImgTexture = useTexture(bioImageSrc);

  const uniforms = useMemo(
    () => ({
      u_bioImgTexture: { value: bioImgTexture },
      u_time: { value: 0 },
    }),
    [bioImgTexture]
  );

  useFrame((state) => {
    if (!mesh.current) return;
    uniforms.u_time.value = state.clock.getElapsedTime();
  });

  return (
    <>
      <mesh ref={mesh} position={THREE.Vector3.ZERO}>
        <planeGeometry attach="geometry" args={[window.innerWidth * 0.75, window.innerHeight * 0.75, 1]} />
        <shaderMaterial fragmentShader={Fragment} vertexShader={Vertex} uniforms={uniforms} />
      </mesh>
    </>
  );
};

export default Scene;
