/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useCallback, useMemo } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Box3, Vector3 } from "three";

import Vertex from "./shaders/vertex.glsl?raw";
import Fragment from "./shaders/fragment.glsl?raw";
import { BIO_MOBILE } from "../../../assets/images/images";

const ImageShaderMaterial = () => {
  const { viewport } = useThree();
  const mesh = useRef(null);
  const texture = useTexture(BIO_MOBILE);

  const width = window.innerWidth;
  const height = window.innerHeight;

  const uniforms = useMemo(
    () => ({
      u_texture: { value: texture },
      u_time: { value: 0 },
    }),
    [texture]
  );

  const updateShaderUniforms = useCallback((clockTime) => {
    if (!mesh.current) return;

    const shaderMaterial = mesh.current.material;
    const { uniforms: shaderUniforms } = shaderMaterial;

    shaderUniforms.u_time.value = clockTime;
  }, []);

  useFrame((state) => {
    updateShaderUniforms(state.clock.getElapsedTime());
  });

  useEffect(() => {
    if (!mesh.current) return;

    const box = new Box3().setFromObject(mesh.current);
    const size = new Vector3();
    box.getSize(size);

    const scaleX = viewport.width / size.x;
    const scaleY = viewport.height / size.y;
    const scale = Math.min(scaleX, scaleY);

    mesh.current.scale.set(scale, scale, scale);
  }, [viewport.width, viewport.height]);

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <planeGeometry attach="geometry" args={[width, height, 1]} />
      <shaderMaterial fragmentShader={Fragment} vertexShader={Vertex} uniforms={uniforms} />
    </mesh>
  );
};

export default ImageShaderMaterial;
