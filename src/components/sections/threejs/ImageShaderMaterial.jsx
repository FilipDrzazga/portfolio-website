/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useCallback, useMemo } from "react";
import { usePageStore } from "../../../store/useStore";
import { useThree, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useScroll, useMotionValueEvent, animate, useTransform } from "motion/react";

import Vertex from "./shaders/Vertex.glsl?raw";
import Fragment from "./shaders/Fragment.glsl?raw";
import { BIO_MOBILE, CONTACT_MOBILE } from "../../../assets/images/images";

const ImageShaderMaterial = () => {
  const isCanvasLoaded = usePageStore((state) => state.isCanvasLoaded);
  const { viewport } = useThree();

  const mesh = useRef(null);
  const documentScrollHeight = useRef(null);
  const normalizedScroll = useRef(null);

  const bioImgTexture = useTexture(BIO_MOBILE);
  const contactImgTexture = useTexture(CONTACT_MOBILE);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const maxScroll = documentScrollHeight.current - window.innerHeight;
    const normalize = latest / maxScroll;
    normalizedScroll.current = normalize;
  });

  const uniforms = useMemo(
    () => ({
      u_bioImgTexture: { value: bioImgTexture },
      u_conactImgTexture: { value: contactImgTexture },
      u_backgroundColor: { value: new THREE.Color('#d1d1d1') },
      u_scroll: { value: normalizedScroll.current || 0 },
      u_time: { value: 0 },
      u_progress: { value: 0 },
    }),
    [bioImgTexture, contactImgTexture]
  );

  const updateShaderUniforms = useCallback((clockTime) => {
    if (!mesh.current) return;
    const shaderMaterial = mesh.current.material;
    const { uniforms: shaderUniforms } = shaderMaterial;

    shaderUniforms.u_time.value = clockTime;
    shaderUniforms.u_scroll.value = normalizedScroll.current;
  }, []);

  useFrame((state) => {
    updateShaderUniforms(state.clock.getElapsedTime());
  });

  useEffect(() => {
    if (!mesh.current || !isCanvasLoaded) return;

    const timer = setTimeout(() => {
      documentScrollHeight.current = document.body.scrollHeight;
    }, 100);
    
    const controls = animate(0, 1, {
      duration: 3,
      onUpdate: (latest) => {
        uniforms.u_progress.value = latest;
      },
    });
    
    const box = new THREE.Box3().setFromObject(mesh.current);
    const size = new THREE.Vector3();
    box.getSize(size);
    const scaleX = viewport.width / size.x;
    const scaleY = viewport.height / size.y;
    const scale = Math.min(scaleX, scaleY);
    mesh.current.scale.set(scale, scale, scale);

    return () => {
      clearTimeout(timer);
      controls.stop();
    };

  }, [viewport.width, viewport.height,isCanvasLoaded]);

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <planeGeometry attach="geometry" args={[window.innerWidth, window.innerHeight, 1]} />
      <shaderMaterial fragmentShader={Fragment} vertexShader={Vertex} uniforms={uniforms} />
    </mesh>
  );
};

export default ImageShaderMaterial;
