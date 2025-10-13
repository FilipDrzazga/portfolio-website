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
      u_yAdjust: { value: 0.1 },
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
        uniforms.u_scale.value = new THREE.Vector2(0.7, 0.58);
      } else if (size.width >= 431 && size.width <= 767) {
        uniforms.u_scale.value = new THREE.Vector2(0.8, 0.65);
      } else if (size.width >= 768 && size.width <= 819) {
        uniforms.u_scale.value = new THREE.Vector2(0.5, 0.65);
      } else if (size.width >= 820 && size.width <= 1023) {
        uniforms.u_scale.value = new THREE.Vector2(0.5, 0.64);
      } else if (size.width >= 1024 && size.width <= 1350) {
        uniforms.u_scale.value = new THREE.Vector2(0.5, 0.66);
      } else if (size.width >= 1351 && size.width <= 1439) {
        uniforms.u_scale.value = new THREE.Vector2(0.23, 0.7);
        uniforms.u_yAdjust.value = 0.06;
      } else if (size.width >= 1440 && size.width <= 1727) {
        uniforms.u_scale.value = new THREE.Vector2(0.25, 0.7);
        uniforms.u_yAdjust.value = 0.05;
      } else if (size.width >= 1728 && size.width <= 1900) {
        uniforms.u_scale.value = new THREE.Vector2(0.2, 0.7);
        uniforms.u_yAdjust.value = 0.04;
      } else if (size.width >= 1905) {
        uniforms.u_scale.value = new THREE.Vector2(0.21, 0.7);
        uniforms.u_yAdjust.value = 0.05;
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
