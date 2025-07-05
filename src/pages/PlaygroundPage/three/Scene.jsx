/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import useResponsiveImages from "../../../hook/useResponsiveImages";

import Vertex from "./shaders/Vertex.glsl?raw";
import Fragment from "./shaders/Fragment.glsl?raw";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Scene = () => {
  const DUMMY_MESH_COUNT = 10;
  const meshRef = useRef(null);
  const meshWidth = useMemo(() => window.innerWidth * 0.5, []);
  const meshHeight = useMemo(() => window.innerHeight * 0.45, []);
  const meshSpacing = useMemo(() => 1.05, []);

  const { bioImageSrc } = useResponsiveImages();
  const bioImgTexture = useTexture(bioImageSrc);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTexture: { value: bioImgTexture },
    }),
    [bioImgTexture]
  );

  const meshes = useMemo(() => {
    const meshesArray = [];
    for (let i = 0; i < DUMMY_MESH_COUNT; i++) {
      const geometry = new THREE.PlaneGeometry(meshWidth, meshHeight, 100, 100);

      const material = new THREE.ShaderMaterial({
        vertexShader: Vertex,
        fragmentShader: Fragment,
        uniforms: uniforms,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.frustumCulled = false;
      meshesArray.push(mesh);
    }
    return meshesArray;
  }, []);

  useFrame((state, delta) => {
    meshes.forEach((mesh) => {
      mesh.position.x -= delta * 30;
      if (mesh.position.x < -meshWidth * 2.5) {
        mesh.position.x += DUMMY_MESH_COUNT * meshWidth * meshSpacing; // Reset position to the right
      }
    });
  });

  return (
    <>
      {meshes.map((mesh, i) => (
        <primitive
          ref={meshRef}
          key={i}
          object={mesh}
          position={[i * meshWidth * meshSpacing, 0, 0]}
          material={mesh.material}
        />
      ))}
    </>
  );
};

export default Scene;
