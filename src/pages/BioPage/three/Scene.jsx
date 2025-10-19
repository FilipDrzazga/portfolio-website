/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BIO_TABLET_LG as bioImageSrc } from "../../../assets/images/images";
import { usePageStore } from "../../../store/useStore";

import Vertex from "./shaders/Vertex.glsl?raw";
import Fragment from "./shaders/Fragment.glsl?raw";

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  const meshRef = useRef(null);
  const initialScreenSize = useRef({ width: window.innerWidth, height: window.innerHeight });
  const { getMeshPosition } = usePageStore();
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      u_screenRatio: { value: size.width / size.height },
      u_texture: { value: null },
      u_textureRatio: { value: 1.0 },
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
    // Update mesh position and scale based on getMeshPosition
    if (!getMeshPosition || !meshRef.current) return;

    const { left, top, width, height } = getMeshPosition;
    const { width: screenW, height: screenH } = initialScreenSize.current;

    const x = left + width / 2 - screenW / 2;
    const y = screenH / 2 - (top + height / 2);

    meshRef.current.position.set(x, y, 0);
    meshRef.current.scale.set(1, 1, 1);

    // Load texture
    new THREE.TextureLoader().load(bioImageSrc, (loadedTexture) => {
      loadedTexture.needsUpdate = true;
      uniforms.u_texture.value = loadedTexture;
      uniforms.u_textureRatio.value = loadedTexture.image.width / loadedTexture.image.height;
    });

    const handleResize = () => {
      uniforms.u_screenRatio.value = size.width / size.height;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size, uniforms]);

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[getMeshPosition.width, getMeshPosition.height, 1, 1]} />
      <shaderMaterial wireframe={false} fragmentShader={Fragment} vertexShader={Vertex} uniforms={uniforms} />
    </mesh>
  );
};
export default Scene;
