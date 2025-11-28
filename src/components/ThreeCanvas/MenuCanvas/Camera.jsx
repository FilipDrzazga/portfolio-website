import { OrthographicCamera } from "@react-three/drei";

const Camera = () => {
  return (
    <OrthographicCamera
      makeDefault={true}
      position={[0, 0, 1]}
      near={1}
      far={10}
      left={-1}
      right={1}
      top={1}
      bottom={-1}
    />
  );
};

export default Camera;
