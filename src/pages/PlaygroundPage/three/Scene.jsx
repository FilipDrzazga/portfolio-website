/* eslint-disable react/no-unknown-property */
import { useRef, useMemo, useCallback } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import useResponsiveImages from "../../../hook/useResponsiveImages";

import Vertex from "./shaders/Vertex.glsl?raw";
import Fragment from "./shaders/Fragment.glsl?raw";

const Scene = () => {
  const worldCenterPos = new THREE.Vector3(0, 0, 0);
  const meshRef = useRef(null);
  const { bioImageSrc } = useResponsiveImages();
  const bioImgTexture = useTexture(bioImageSrc);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTexture: { value: bioImgTexture },
    }),
    []
  );

  const meshes = useMemo(() => {
    const COUNT = 10; // Number of meshes to create
    const meshesArray = [];
    for (let i = 0; i < COUNT; i++) {
      const geometry = new THREE.PlaneGeometry(window.innerWidth * 0.45, window.innerHeight * 0.4, 100, 100);

      const material = new THREE.ShaderMaterial({
        vertexShader: Vertex,
        fragmentShader: Fragment,
        uniforms: uniforms,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.frustumCulled = false; // Disable frustum culling for all meshes
      meshesArray.push(mesh);
    }
    console.log(meshesArray);
    return meshesArray;
  }, []);

  const meshScaleInterpolation = useCallback((mesh) => {
    const targetScale = 1.02;
    const initialScale = 1.0;
    let direction = 1;

    const distance = mesh.position.distanceTo(worldCenterPos);
    const scaleFactor = THREE.MathUtils.lerp(
      initialScale,
      targetScale,
      direction - distance / (window.innerWidth * 0.45)
    );
    mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
  }, []);

  useFrame((state, delta) => {
    meshes.forEach((mesh) => {
      meshScaleInterpolation(mesh);
      mesh.position.x -= delta * 20;
    });
  });

  return (
    <>
      {meshes.map((mesh, i) => (
        <primitive
          ref={meshRef}
          key={i}
          object={mesh}
          position={[i * window.innerWidth * 0.48, 0, 0]}
          material={mesh.material}
        />
      ))}
    </>
  );
};

export default Scene;
