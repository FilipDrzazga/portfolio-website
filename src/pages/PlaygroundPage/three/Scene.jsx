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

  const DUMMY_MESH_COUNT = 4;
  const meshRef = useRef(null);
  const meshStateRef = useRef({
    width: window.innerWidth * 0.5,
    height: window.innerHeight * 0.45,
    spacing: 1.05,
  });
  const scrollStateRef = useRef({ target: 0, lastScroll: 0, velocity: 0 });

  const { bioImageSrc } = useResponsiveImages();
  const bioImgTexture = useTexture(bioImageSrc);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTexture: { value: bioImgTexture },
      uShapeActivation: { value: 0 },
    }),
    [bioImgTexture]
  );

  const meshesFactory = useMemo(() => {
    const meshesArray = [];
    for (let i = 0; i < DUMMY_MESH_COUNT; i++) {
      const geometry = new THREE.PlaneGeometry(meshStateRef.current.width, meshStateRef.current.height, 100, 100);

      const material = new THREE.ShaderMaterial({
        vertexShader: Vertex,
        fragmentShader: Fragment,
        uniforms: uniforms,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData = { isExpanded: false };
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

        const now = performance.now();
        const dt = now - scrollStateRef.current.lastTime;
        scrollStateRef.current.lastTime = now;
        scrollStateRef.current.velocity = 1 / (dt || 1);
        const scrollPower = gsap.utils.clamp(0, 1, scrollStateRef.current.velocity * 15);

        gsap.to(scrollStateRef.current, {
          target: scrollStateRef.current.target + dy,
          inertia: { target: { velocity: dy * 2, resistance: 100 } },
          duration: 1,
          ease: "power3.out",
          onComplete: () => {
            gsap.killTweensOf(uniforms.uShapeActivation);
            const slotPx = meshStateRef.current.width * meshStateRef.current.spacing;
            let snapped = gsap.utils.snap(slotPx, scrollStateRef.current.target);

            gsap.to(scrollStateRef.current, {
              target: snapped,
              duration: 1,
              ease: "power3.out",
            });
          },
        });

        if (scrollPower > uniforms.uShapeActivation.value) {
          gsap.killTweensOf(uniforms.uShapeActivation);

          gsap.to(uniforms.uShapeActivation, {
            value: scrollPower,
            duration: 0.7,
            ease: "power3.out",
            onComplete: () => {
              gsap.killTweensOf(uniforms.uShapeActivation);
              gsap.to(uniforms.uShapeActivation, {
                value: 0,
                duration: 0.5,
                ease: "power3.out",
              });
            },
          });
        }
      },
      onPress: () => {
        gsap.killTweensOf(scrollStateRef.current);
        gsap.killTweensOf(uniforms.uShapeActivation);
      },
      onDrag: (self) => {
        const dx = self.deltaX * 0.2;
        scrollStateRef.current.target += dx;
        const scrollPower = gsap.utils.clamp(0, 1, Math.abs(dx) * 0.1);

        if (scrollPower > uniforms.uShapeActivation.value) {
          gsap.killTweensOf(uniforms.uShapeActivation);
          gsap.to(uniforms.uShapeActivation, {
            value: scrollPower,
            duration: 0.5,
            ease: "power3.out",
            onComplete: () => {
              gsap.killTweensOf(uniforms.uShapeActivation);
              gsap.to(uniforms.uShapeActivation, {
                value: 0,
                duration: 0.3,
                ease: "power3.out",
              });
            },
          });
        }
      },
      onRelease: (self) => {
        const clampedVelocity = gsap.utils.clamp(-50, 50, self.velocityX);

        gsap.to(scrollStateRef.current, {
          target: scrollStateRef.current.target + clampedVelocity,
          duration: 1,
          ease: "power3.out",
          inertia: {
            target: {
              velocity: clampedVelocity * 2,
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
    if (meshesFactory.length === 0) return;

    meshesFactory.forEach((mesh, i) => {
      const base = (i - DUMMY_MESH_COUNT / 2) * meshStateRef.current.width * meshStateRef.current.spacing;
      const x = infinitySlider(base + scrollStateRef.current.target);
      mesh.position.set(x, 0, 0);
    });
  });

  const handleClick = (mesh, i) => {
    if (!mesh) return;
    if (!mesh.userData.isExpanded && mesh.position.x === 0) {
      mesh.userData.isExpanded = true;

      gsap.to(mesh.scale, { x: 1.2, y: 1.2, duration: 0.5 });
      meshesFactory.forEach((otherMesh, j) => {
        if (j !== i) {
          gsap.to(otherMesh.scale, { x: 0.8, y: 0.8, duration: 0.5, ease: "power3.out" });
          gsap.to(uniforms.uShapeActivation, {
            value: 0.3,
            duration: 0.5,
          });
          gsap.to(uniforms.uShapeActivation, {
            value: 0,
            duration: 0.5,
            delay: 0.5,
          });
        }
      });
    } else {
      mesh.userData.isExpanded = false;

      gsap.to(mesh.scale, { x: 1, y: 1, duration: 0.5 });
      meshesFactory.forEach((otherMesh, j) => {
        if (j !== i) {
          gsap.to(otherMesh.scale, { x: 1, y: 1, duration: 0.5, ease: "power3.out" });
          gsap.to(uniforms.uShapeActivation, {
            value: -0.3,
            duration: 0.5,
          });
          gsap.to(uniforms.uShapeActivation, {
            value: 0,
            duration: 0.5,
            delay: 0.5,
          });
        }
      });
    }
  };

  return (
    <>
      {meshesFactory.map((mesh, i) => (
        <primitive
          ref={meshRef}
          key={i}
          object={mesh}
          material={mesh.material}
          geometry={mesh.geometry}
          onClick={() => handleClick(mesh, i)}
        />
      ))}
    </>
  );
};

export default Scene;
