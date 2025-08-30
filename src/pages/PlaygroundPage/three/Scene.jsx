/* eslint-disable react/no-unknown-property */
import { useRef, useMemo, useCallback } from "react";
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

  const infinitySlider = useCallback((value) => {
    const totalWidth = DUMMY_MESH_COUNT * meshStateRef.current.width * meshStateRef.current.spacing;
    const halfWidth = totalWidth / 2;
    let v = (((value + halfWidth) % totalWidth) + totalWidth) % totalWidth;
    return v - halfWidth;
  }, []);

  useGSAP(() => {
    const canvas = gl.domElement;

    const observer = Observer.create({
      target: canvas,
      type: "wheel,pointer",
      preventDefault: true,
      onWheel: (self) => {
        gsap.killTweensOf(scrollStateRef.current);
        const dy = self.deltaY;
        gsap.to(scrollStateRef.current, {
          target: scrollStateRef.current.target + dy,
          inertia: { target: { velocity: dy * 2, resistance: 100 } },
          duration: 1,
          ease: "power3.out",
          onComplete: () => {
            const slotPx = meshStateRef.current.width * meshStateRef.current.spacing;
            let snapped = gsap.utils.snap(slotPx, scrollStateRef.current.target);

            gsap.to(scrollStateRef.current, {
              target: snapped,
              duration: 1,
              ease: "power3.out",
              // IF I WANT TO DO SOMETHING WITH THE ACTIVE INDEX WHEN SNAP COMPLETE, UNCOMMENT BELOW
              // onComplete: () => {
              //   const k = Math.round(snapped / slotPx);
              //   const activeIndex = ((k % DUMMY_MESH_COUNT) + DUMMY_MESH_COUNT) % DUMMY_MESH_COUNT;
              // },
            });
          },
        });
      },
      onPress: () => {
        gsap.killTweensOf(scrollStateRef.current);
      },
      onDrag: (self) => {
        const dx = self.deltaX * 0.2;
        scrollStateRef.current.target += dx;
      },
      onRelease(self) {
        const clampedV = gsap.utils.clamp(-50, 50, self.velocityX);

        gsap.to(scrollStateRef.current, {
          target: scrollStateRef.current.target + clampedV,
          duration: 1,
          ease: "power3.out",
          inertia: {
            target: {
              velocity: clampedV * 2,
              resistance: 100,
            },
          },
          onComplete: () => {
            const slotPx = meshStateRef.current.width * meshStateRef.current.spacing;
            let snapped = gsap.utils.snap(slotPx, scrollStateRef.current.target);

            gsap.to(scrollStateRef.current, {
              target: snapped,
              duration: 1,
              ease: "power3.out",
              // IF I WANT TO DO SOMETHING WITH THE ACTIVE INDEX WHEN SNAP COMPLETE, UNCOMMENT BELOW
              // onComplete: () => {
              //   const k = Math.round(snapped / slotPx);
              //   const activeIndex = ((k % DUMMY_MESH_COUNT) + DUMMY_MESH_COUNT) % DUMMY_MESH_COUNT;
              // },
            });
          },
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
      const base = (i - DUMMY_MESH_COUNT / 2) * meshStateRef.current.width * meshStateRef.current.spacing;
      const x = infinitySlider(base + scrollStateRef.current.target);
      mesh.position.set(x, 0, 0);
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
