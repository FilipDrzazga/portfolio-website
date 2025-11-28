/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePageStore } from "../../../store/useStore";

import Vertex from "./shaders/Vertex.glsl?raw";
import MenuFragment from "./shaders/MenuFragment.glsl?raw";

const Scene = () => {
  const menuMeshRef = useRef(null);
  const { isMenuOpen } = usePageStore();

  const menuUniforms = useMemo(
    () => ({
      u_time: { value: 0.0 },
      u_isOpen: { value: 1.0 },
      u_progress: { value: 0.0 },
      u_direction: { value: null },
    }),
    []
  );

  useGSAP(() => {
    gsap.to(menuUniforms.u_progress, {
      value: isMenuOpen ? 1.0 : 0.0,
      duration: 2.0,
      ease: "power4.out",
    });
  }, [isMenuOpen]);

  useFrame((state) => {
    if (menuMeshRef.current) {
      menuMeshRef.current.material.uniforms.u_time.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={menuMeshRef} visible={true}>
      <planeGeometry args={[2, 2, 1, 1]} />
      <shaderMaterial transparent fragmentShader={MenuFragment} vertexShader={Vertex} uniforms={menuUniforms} />
    </mesh>
  );
};
export default Scene;
