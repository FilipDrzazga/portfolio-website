/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useMemo } from "react";
import { usePageStore } from "../../../store/useStore";
import { useThree, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useScroll, useMotionValueEvent, animate } from "motion/react";
import { useMediaQuery } from "react-responsive";
import useResponsiveImages from "../../../hook/useResponsiveImages";

import Vertex from "./shaders/Vertex.glsl?raw";
import Fragment from "./shaders/Fragment.glsl?raw";

const ImageShaderMaterial = () => {
  const isCanvasLoaded = usePageStore((state) => state.isCanvasLoaded);
  const isScreen = useMediaQuery({ minWidth: 1024 });
  const isCustomRange = useMediaQuery({
    width: 1024,
    height: 1366,
  });
  const { bioImageSrc, contactImageSrc } = useResponsiveImages();

  const mesh = useRef(null);
  const materialRef = useRef(null);
  const documentScrollHeight = useRef(null);
  const normalizedScroll = useRef(0);
  const animationControls = useRef(null);

  const { scrollY } = useScroll();
  const { viewport } = useThree();
  // const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
  const planeWidth = isScreen && !isCustomRange ? window.innerWidth * 0.45 : window.innerWidth;

  const textureSettings = useMemo(
    () => ({
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      generateMipmaps: false,
    }),
    []
  );

  const [bioImgTexture, contactImgTexture] = useTexture([bioImageSrc, contactImageSrc], (textures) => {
    textures.forEach((texture) => {
      Object.assign(texture, textureSettings);
      texture.needsUpdate = true;
    });
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!documentScrollHeight.current) return;
    const maxScroll = documentScrollHeight.current - viewport.height;
    normalizedScroll.current = maxScroll > 0 ? latest / maxScroll : 0;
  });

  const uniforms = useMemo(
    () => ({
      u_resolution: { value: new THREE.Vector2(planeWidth, window.innerHeight) },
      u_bioImgTexture: { value: bioImgTexture },
      u_conactImgTexture: { value: contactImgTexture },
      u_bioTextureDimensions: { value: new THREE.Vector2(1, 1) },
      u_contactTextureDimensions: { value: new THREE.Vector2(1, 1) },
      u_backgroundColor: { value: new THREE.Color("#d1d1d1") },
      u_scroll: { value: 0 },
      u_time: { value: 0 },
      u_progress: { value: 0 },
      u_isScreen: { value: isScreen ? 1 : 0 },
    }),
    [bioImgTexture, contactImgTexture, isScreen, planeWidth]
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = state.clock.getElapsedTime();
      materialRef.current.uniforms.u_scroll.value = normalizedScroll.current;
    }
  });

  useEffect(() => {
    if (!mesh.current || !isCanvasLoaded || !bioImgTexture?.image || !contactImgTexture?.image) return;

    materialRef.current = mesh.current.material;

    uniforms.u_bioTextureDimensions.value.set(bioImgTexture.image.width, bioImgTexture.image.height);
    uniforms.u_contactTextureDimensions.value.set(contactImgTexture.image.width, contactImgTexture.image.height);

    const timer = setTimeout(() => {
      documentScrollHeight.current = document.body.scrollHeight;
    }, 100);

    animationControls.current = animate(0, 1.0, {
      duration: 3,
      onUpdate: (latest) => {
        if (materialRef.current) {
          materialRef.current.uniforms.u_progress.value = latest;
        }
      },
    });

    const size = new THREE.Vector3();
    new THREE.Box3().setFromObject(mesh.current).getSize(size);
    const scale = Math.min(window.innerWidth / size.x, viewport.height / size.y);
    mesh.current.scale.set(scale, scale, scale);

    return () => {
      clearTimeout(timer);
      animationControls.current?.stop();
    };
  }, [isCanvasLoaded, bioImgTexture, contactImgTexture, uniforms, viewport.height]);

  return (
    <mesh ref={mesh} position={[0, 0, 0, 0]}>
      <planeGeometry attach="geometry" args={[viewport.width, viewport.height, 1]} />
      <shaderMaterial fragmentShader={Fragment} vertexShader={Vertex} uniforms={uniforms} />
    </mesh>
  );
};

export default ImageShaderMaterial;
