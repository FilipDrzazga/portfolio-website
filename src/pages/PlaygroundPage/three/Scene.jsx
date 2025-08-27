/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import { InertiaPlugin } from "gsap/all";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import useResponsiveImages from "../../../hook/useResponsiveImages";

import Vertex from "./shaders/Vertex.glsl?raw";
import Fragment from "./shaders/Fragment.glsl?raw";

gsap.registerPlugin(useGSAP, Observer, InertiaPlugin);

const Scene = () => {
  const { gl } = useThree();
  const DUMMY_MESH_COUNT = 10;
  const meshRef = useRef(null);
  const meshStateRef = useRef({ width: window.innerWidth * 0.5, height: window.innerHeight * 0.45, spacing: 1.05 });
  const scrollStateRef = useRef({ target: 0 });

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
      const geometry = new THREE.PlaneGeometry(meshStateRef.current.width, meshStateRef.current.height, 100, 100);

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
  }, [uniforms]);

  useGSAP(() => {
    const canvas = gl.domElement;

    const observer = Observer.create({
      target: canvas,
      type: "wheel",
      preventDefault: true,
      onWheel: (self) => {
        const dy = self.deltaY;
        gsap.to(scrollStateRef.current, {
          target: scrollStateRef.current.target + dy,
          inertia: { target: { velocity: dy * 2, resistance: 100 } },
          duration: 1,
          ease: "power3.out",
        });
      },
    });
    return () => {
      observer.kill();
    };
  }, []);

  useFrame(() => {
    if (meshes.length === 0) return;
    meshes.forEach((mesh, i) => {
      mesh.position.x =
        (i - DUMMY_MESH_COUNT / 2) * meshStateRef.current.width * meshStateRef.current.spacing +
        scrollStateRef.current.target;
    });
  });

  return (
    <>
      {meshes.map((mesh, i) => (
        <primitive
          ref={meshRef}
          key={i}
          object={mesh}
          position={[(i - DUMMY_MESH_COUNT / 2) * meshStateRef.current.width * meshStateRef.current.spacing, 0, 0]}
          material={mesh.material}
        />
      ))}
    </>
  );
};

export default Scene;
