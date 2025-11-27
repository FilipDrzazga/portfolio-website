/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useMemo, useState } from "react";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePageStore } from "../../store/useStore";
import { useLocation } from "react-router";
import { useFBO } from "@react-three/drei";
import { BIO_TABLET_LG as bioImageSrc } from "../../assets/images/images";

import Vertex from "./shaders/Vertex.glsl?raw";
import ImageFragment from "./shaders/ImageFragment.glsl?raw";
import EffectFragment from "./shaders/EffectFragment.glsl?raw";
import MenuFragment from "./shaders/MenuFragment.glsl?raw";

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  const location = useLocation();
  const imageMeshRef = useRef(null);
  const effectMeshRef = useRef(null);
  const menuMeshRef = useRef(null);
  const [isTextureLoaded, setIsTextureLoaded] = useState(false);
  const initialScreenSize = useRef({ width: window.innerWidth, height: window.innerHeight });
  const { getMeshPosition, isMenuOpen } = usePageStore();
  const { camera, size, gl } = useThree();
  const fbo = useFBO(size.width * gl.getPixelRatio(), size.height * gl.getPixelRatio(), {
    depthBuffer: true,
  });

  const imageUniforms = useMemo(
    () => ({
      u_meshRatio: { value: 1.0 },
      u_texture: { value: null },
      u_textureRatio: { value: 1.0 },
    }),
    []
  );
  const effectUniforms = useMemo(
    () => ({
      u_mouse: { value: new THREE.Vector2(0, 0) },
      u_resolution: { value: new THREE.Vector2(size.width, size.height) },
      u_fbo: { value: fbo.texture },
      u_scroll: { value: 0 },
      u_time: { value: 0 },
    }),
    []
  );

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
    ScrollTrigger.create({
      onUpdate: (self) => {
        effectUniforms.u_scroll.value = self.progress;
      },
    });
    gsap.to(menuUniforms.u_progress, {
      value: isMenuOpen ? 1.0 : 0.0,
      duration: 2.0,
      ease: "power4.out",
    });
  }, [isMenuOpen]);

  useFrame((state) => {
    if (!isTextureLoaded) return;
    const cameraMain = state.scene.children.find((obj) => obj.isPerspectiveCamera);

    // Render layer 0  to FBO
    state.gl.setRenderTarget(fbo);
    state.gl.clear();
    state.gl.render(state.scene, cameraMain);
    state.gl.setRenderTarget(null);

    if (menuMeshRef.current) {
      menuMeshRef.current.material.uniforms.u_time.value = state.clock.getElapsedTime();
    }
    if (effectMeshRef.current) {
      effectMeshRef.current.material.uniforms.u_time.value = state.clock.getElapsedTime();
      effectMeshRef.current.material.uniforms.u_fbo.value = fbo.texture;
    }
  });

  useEffect(() => {
    camera.layers.enable(2); // Enable layer 2 for menu
    // Update mesh position and scale based on getMeshPosition
    if (!getMeshPosition || !imageMeshRef.current) return;

    const { left, top, width, height } = getMeshPosition;
    const { width: screenW, height: screenH } = initialScreenSize.current;

    const x = left + width / 2 - screenW / 2;
    const y = screenH / 2 - (top + height / 2);

    imageMeshRef.current.position.set(x, y, 0);
    imageMeshRef.current.scale.set(1, 1, 1);

    // Load texture
    new THREE.TextureLoader().load(bioImageSrc, (loadedTexture) => {
      setIsTextureLoaded(true);
      loadedTexture.needsUpdate = true;
      imageUniforms.u_texture.value = loadedTexture;
      imageUniforms.u_textureRatio.value = loadedTexture.image.width / loadedTexture.image.height;
    });

    const handleMouseMove = (event) => {
      const x = event.clientX / size.width;
      const y = 1 - event.clientY / size.height;
      effectUniforms.u_mouse.value.set(x, y);
    };

    const handleResize = () => {
      imageUniforms.u_meshRatio.value = width / height;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size, imageUniforms, isTextureLoaded, effectUniforms, getMeshPosition, camera]);

  return (
    <>
      <mesh ref={imageMeshRef} layers={[0]} visible={location.pathname === "/bio" && isTextureLoaded}>
        <planeGeometry args={[getMeshPosition.width, getMeshPosition.height, 1, 1]} />
        <shaderMaterial fragmentShader={ImageFragment} vertexShader={Vertex} uniforms={imageUniforms} />
      </mesh>
      <mesh ref={effectMeshRef} layers={[1]} visible={location.pathname === "/bio" && isTextureLoaded}>
        <planeGeometry args={[2, 2, 1, 1]} />
        <shaderMaterial fragmentShader={EffectFragment} vertexShader={Vertex} uniforms={effectUniforms} />
      </mesh>
      <mesh ref={menuMeshRef} layers={[2]} visible={true}>
        <planeGeometry args={[2, 2, 1, 1]} />
        <shaderMaterial transparent fragmentShader={MenuFragment} vertexShader={Vertex} uniforms={menuUniforms} />
      </mesh>
    </>
  );
};
export default Scene;
