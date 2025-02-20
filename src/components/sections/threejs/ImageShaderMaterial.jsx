/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useCallback, useMemo } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useScroll, useMotionValueEvent } from "motion/react";

import Vertex from "./shaders/Vertex.glsl?raw";
import Fragment from "./shaders/Fragment.glsl?raw";
import { BIO_MOBILE, CONTACT_MOBILE } from "../../../assets/images/images";

const ImageShaderMaterial = () => {
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
    const clampedScroll = Math.max(0, Math.min(1, normalize));
    normalizedScroll.current = clampedScroll;
  });

  const uniforms = useMemo(
    () => ({
      u_bioImgTexture: { value: bioImgTexture },
      u_conactImgTexture: { value: contactImgTexture },
      u_scroll: { value: normalizedScroll.current || 0 },
      u_time: { value: 0 },
    }),
    [normalizedScroll.current]
  );

  const updateShaderUniforms = useCallback(
    (clockTime) => {
      if (!mesh.current) return;
      const shaderMaterial = mesh.current.material;
      const { uniforms: shaderUniforms } = shaderMaterial;

      shaderUniforms.u_time.value = clockTime;
      shaderUniforms.u_scroll.value = normalizedScroll.current;
    },
    [normalizedScroll.current]
  );

  useFrame((state) => {
    updateShaderUniforms(state.clock.getElapsedTime());
  });

  useEffect(() => {
    if (!mesh.current) return;
    documentScrollHeight.current = document.documentElement.scrollHeight;

    const box = new THREE.Box3().setFromObject(mesh.current);
    const size = new THREE.Vector3();
    box.getSize(size);

    const scaleX = viewport.width / size.x;
    const scaleY = viewport.height / size.y;
    const scale = Math.min(scaleX, scaleY);

    mesh.current.scale.set(scale, scale, scale);
  }, [viewport.width, viewport.height]);

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <planeGeometry attach="geometry" args={[window.innerWidth, window.innerHeight, 1]} />
      <shaderMaterial fragmentShader={Fragment} vertexShader={Vertex} uniforms={uniforms} />
    </mesh>
  );
};

export default ImageShaderMaterial;
