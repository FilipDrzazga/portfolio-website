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
      u_scale: { value: new THREE.Vector2(0.75, 0.65) },
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
      console.log(size.width);
      // to refactor later with DEVICE breakpoints
      if (size.width <= 359) {
        uniforms.u_scale.value = new THREE.Vector2(0.65, 0.63);
      } else if (size.width >= 360 && size.width <= 374) {
        uniforms.u_scale.value = new THREE.Vector2(0.75, 0.65);
      } else if (size.width >= 375 && size.width <= 389) {
        uniforms.u_scale.value = new THREE.Vector2(0.65, 0.65);
      } else if (size.width >= 390 && size.width <= 430) {
        uniforms.u_scale.value = new THREE.Vector2(0.75, 0.6);
      } else if (size.width >= 431 && size.width <= 767) {
        uniforms.u_scale.value = new THREE.Vector2(0.8, 0.65);
      } else if (size.width >= 768 && size.width <= 819) {
        uniforms.u_scale.value = new THREE.Vector2(0.5, 0.65);
      } else if (size.width >= 820 && size.width <= 1023) {
        uniforms.u_scale.value = new THREE.Vector2(0.5, 0.64);
      } else if (size.width >= 1024 && size.width <= 1366) {
        uniforms.u_scale.value = new THREE.Vector2(0.5, 0.66);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, uniforms, bioImageSrc]);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[size.width, size.height, 1, 1]} />
      <shaderMaterial wireframe={false} fragmentShader={Fragment} vertexShader={Vertex} uniforms={uniforms} />
    </mesh>
  );
};
export default Scene;
