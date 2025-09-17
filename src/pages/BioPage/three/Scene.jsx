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
      u_resolution: { value: new THREE.Vector2(size.width, size.height) },
      u_texture: { value: null },
      u_textureRatio: { value: 1 },
      u_screenRatio: { value: size.width / size.height },
      u_scroll: { value: 0 },
      u_time: { value: 0 },
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
      uniforms.u_textureRatio.value = loadedTexture.image.width / loadedTexture.image.height;
      uniforms.u_resolution.value.set(size.width, size.height);
      uniforms.u_screenRatio.value = size.width / size.height;
      textureRef.current = loadedTexture;
    });
  }, [bioImageSrc]);

  useEffect(() => {
    const handleResize = () => {
      uniforms.u_resolution.value.set(size.width, size.height);
      uniforms.u_screenRatio.value = size.width / size.height;

      if (textureRef.current) {
        uniforms.u_textureRatio.value = textureRef.current.image.width / textureRef.current.image.height; // Update the
      }
      if (meshRef.current) {
        meshRef.current.geometry.scale(size.width, size.height, 1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size, uniforms]);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[window.innerWidth, window.innerHeight, 1, 1]} />
      <shaderMaterial wireframe={false} fragmentShader={Fragment} vertexShader={Vertex} uniforms={uniforms} />
    </mesh>
  );
};
export default Scene;
