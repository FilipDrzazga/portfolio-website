/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { Box3, Vector3 } from "three";

const ImageShaderMaterial = () => {
  const { viewport } = useThree();
  const mesh = useRef(null);
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    if (!mesh.current) return;

    // Get the bounding box of the mesh
    const box = new Box3().setFromObject(mesh.current);
    const size = new Vector3();
    box.getSize(size);

    // Calculate scale factor
    const scaleX = viewport.width / size.x;
    const scaleY = viewport.height / size.y;
    const scale = Math.min(scaleX, scaleY); // Maintain aspect ratio

    mesh.current.scale.set(scale, scale, scale);
  }, [viewport.width, viewport.height]);

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <planeGeometry attach="geometry" args={[width, height, 1]} />
      <meshBasicMaterial wireframe color="red" />
    </mesh>
  );
};

export default ImageShaderMaterial;
