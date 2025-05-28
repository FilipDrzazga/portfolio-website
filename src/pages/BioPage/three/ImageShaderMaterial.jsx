/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useScroll, useMotionValueEvent, animate } from "motion/react";
import useResponsiveImages from "../../../hook/useResponsiveImages";

import Vertex from "./shaders/Vertex.glsl?raw";
import Fragment from "./shaders/Fragment.glsl?raw";

const ImageShaderMaterial = () => {
  const { bioImageSrc } = useResponsiveImages();

  const mesh = useRef(null);
  const materialRef = useRef(null);
  const documentScrollHeight = useRef(null);
  const normalizedScroll = useRef(0);
  const animationControls = useRef(null);

  const { scrollY } = useScroll();

  const bioImgTexture = useTexture(bioImageSrc);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!documentScrollHeight.current) return;
    const maxScroll = documentScrollHeight.current - window.innerHeight;
    normalizedScroll.current = maxScroll > 0 ? latest / maxScroll : 0;
  });

  const uniforms = useMemo(
    () => ({
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      u_bioImgTexture: { value: bioImgTexture },
      u_bioTextureDimensions: { value: new THREE.Vector2(1, 1) },
      u_scroll: { value: 0 },
      u_time: { value: 0 },
      u_progress: { value: 0 },
    }),
    [bioImgTexture]
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = state.clock.getElapsedTime();
      materialRef.current.uniforms.u_scroll.value = normalizedScroll.current;
    }
  });

  useEffect(() => {
    if (!mesh.current || !bioImgTexture?.image) return;

    materialRef.current = mesh.current.material;

    uniforms.u_bioTextureDimensions.value.set(bioImgTexture.image.width, bioImgTexture.image.height);

    const timer = setTimeout(() => {
      documentScrollHeight.current = document.body.scrollHeight;
    }, 100);

    animationControls.current = animate(0, 1.0, {
      duration: 3,
      onUpdate: (latest) => {
        if (materialRef.current) {
          materialRef.current.uniforms.u_progress.value = latest;
        }
      },
    });

    const size = new THREE.Vector3();
    new THREE.Box3().setFromObject(mesh.current).getSize(size);
    const scale = Math.min(window.innerWidth / size.x, window.innerHeight / size.y);
    mesh.current.scale.set(scale, scale, scale);

    return () => {
      clearTimeout(timer);
      animationControls.current?.stop();
    };
  }, [bioImgTexture, uniforms]);

  return (
    <mesh ref={mesh} position={[0, 0, 0, 0]}>
      <planeGeometry attach="geometry" args={[window.innerWidth, window.innerHeight, 1]} />
      <shaderMaterial fragmentShader={Fragment} vertexShader={Vertex} uniforms={uniforms} />
    </mesh>
  );
};

export default ImageShaderMaterial;
