import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useCallback, useEffect, useRef, useState } from "react";

const Camera = () => {
  const { size } = useThree();
  const camRef = useRef();
  const cameraZ = useRef(600);

  const calculateFov = useCallback(() => {
    return 2 * Math.atan(size.height / 2 / cameraZ.current) * (180 / Math.PI);
  }, [size.height]);

  const [fov, setFov] = useState(calculateFov);

  useEffect(() => {
    const updateCamera = () => {
      const newFov = calculateFov();
      setFov(newFov);
      if (camRef.current) {
        camRef.current.fov = newFov;
        camRef.current.aspect = size.width / size.height;
        camRef.current.updateProjectionMatrix();
      }
    };

    window.addEventListener("resize", updateCamera);
    updateCamera();

    return () => window.removeEventListener("resize", updateCamera);
  }, [calculateFov, size]);

  return (
    <>
      <PerspectiveCamera ref={camRef} makeDefault={false} position={[0, 0, cameraZ.current]} fov={fov} layers={[0]} />
      <OrthographicCamera
        makeDefault={true}
        position={[0, 0, 1]}
        near={1}
        far={10}
        left={-1}
        right={1}
        top={1}
        bottom={-1}
        layers={[1]}
      />
    </>
  );
};

export default Camera;
