/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BIO_TABLET_LG as bioImageSrc } from "../../../assets/images/images";
import { usePageStore } from "../../../store/useStore";
import { useFBO } from "@react-three/drei";

import Vertex from "./shaders/Vertex.glsl?raw";
import ImageFragment from "./shaders/ImageFragment.glsl?raw";
import EffectFragment from "./shaders/EffectFragment.glsl?raw";

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  const imageMeshRef = useRef(null);
  const effectMeshRef = useRef(null);
  const initialScreenSize = useRef({ width: window.innerWidth, height: window.innerHeight });
  const { getMeshPosition } = usePageStore();
  const { size } = useThree();
  const fbo = useFBO(size.width, size.height, {
    depthBuffer: true,
  });

  const imageUniforms = useMemo(
    () => ({
      u_screenRatio: { value: size.width / size.height },
      u_texture: { value: null },
      u_textureRatio: { value: 1.0 },
    }),
    []
  );
  const effectUniforms = useMemo(
    () => ({
      u_fbo: { value: fbo.texture },
      u_scroll: { value: 0 },
      u_time: { value: 0 },
    }),
    []
  );

  useGSAP(() => {
    ScrollTrigger.create({
      onUpdate: (self) => {
        effectUniforms.u_scroll.value = self.progress;
      },
    });
  });

  useFrame((state) => {
    const cameraMain = state.scene.children.find((obj) => obj.isPerspectiveCamera);
    const cameraFx = state.scene.children.find((obj) => obj.isOrthographicCamera);

    // Render layer 0  to FBO
    state.gl.setRenderTarget(fbo);
    state.gl.clear();
    cameraMain.layers.set(0);
    state.gl.render(state.scene, cameraMain);
    state.gl.setRenderTarget(null);
    state.gl.setClearColor("#f9fafa");

    effectUniforms.u_time.value = state.clock.getElapsedTime();
    effectUniforms.u_fbo.value = fbo.texture;

    // Render layer 1 to screen
    // cameraFx.layers.set(1);
    // state.gl.clearDepth();
    // state.gl.render(state.scene, cameraFx);
  });

  useEffect(() => {
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
      loadedTexture.needsUpdate = true;
      imageUniforms.u_texture.value = loadedTexture;
      imageUniforms.u_textureRatio.value = loadedTexture.image.width / loadedTexture.image.height;
    });

    const handleResize = () => {
      imageUniforms.u_screenRatio.value = size.width / size.height;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size, imageUniforms]);

  return (
    <>
      <mesh ref={imageMeshRef} layers={[0]}>
        <planeGeometry args={[getMeshPosition.width, getMeshPosition.height, 1, 1]} />
        <shaderMaterial fragmentShader={ImageFragment} vertexShader={Vertex} uniforms={imageUniforms} />
      </mesh>
      <mesh ref={effectMeshRef} layers={[1]}>
        <planeGeometry args={[size.width, size.height, 1, 1]} />
        <shaderMaterial fragmentShader={EffectFragment} vertexShader={Vertex} uniforms={effectUniforms} />
      </mesh>
    </>
  );
};
export default Scene;
