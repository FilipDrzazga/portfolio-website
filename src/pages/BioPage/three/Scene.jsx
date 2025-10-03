/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useResponsiveImages from "../../../hook/useResponsiveImages";

import Vertex from "./shaders/Vertex.glsl?raw";
import Fragment from "./shaders/Fragment.glsl?raw";

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  const meshRef = useRef(null);
  const textureRef = useRef(null);
  const { size } = useThree();
  const { bioImageSrc } = useResponsiveImages();

  const uniforms = useMemo(
    () => ({
      u_screenRatio: { value: size.width / size.height },
      u_texture: { value: null },
      u_scroll: { value: 0 },
      u_time: { value: 0 },
      u_scale: { value: new THREE.Vector2(1.0, 1.0) },
    }),
    []
  );

  useGSAP(() => {
    ScrollTrigger.create({
      onUpdate: (self) => {
        uniforms.u_scroll.value = self.progress;
      },
    });
  });

  useFrame((state) => {
    uniforms.u_time.value = state.clock.getElapsedTime();
  });

  useEffect(() => {
    new THREE.TextureLoader().load(bioImageSrc, (loadedTexture) => {
      loadedTexture.needsUpdate = true;
      uniforms.u_texture.value = loadedTexture;
      textureRef.current = loadedTexture;
    });

    const handleResize = () => {
      uniforms.u_screenRatio.value = size.width / size.height;

      if (uniforms.u_screenRatio.value < 0.75) {
        uniforms.u_scale.value = new THREE.Vector2(0.75, 0.65);
      } else if (uniforms.u_screenRatio.value > 0.74) {
        uniforms.u_scale.value = new THREE.Vector2(0.5, 0.65);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size, uniforms, bioImageSrc]);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[size.width, size.height, 1, 1]} />
      <shaderMaterial wireframe={false} fragmentShader={Fragment} vertexShader={Vertex} uniforms={uniforms} />
    </mesh>
  );
};
export default Scene;
