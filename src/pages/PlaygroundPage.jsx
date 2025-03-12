import * as THREE from "three";

const PlaygroundPage = () => {
  const renderer = new THREE.WebGLRenderer();
  const caps = renderer.capabilities;
  console.log(caps);
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center mt-50">
        <h3 className="text-black">WebGL Capabilities</h3>
        <ul className="w-full">
          <li className="text-black text-xs">WebGL2: {caps.isWebGL2.toString()}</li>
          <li className="text-black text-xs">Max Textures: {caps.maxTextures}</li>
          <li className="text-black text-xs">Max Vertex Textures: {caps.maxVertexTextures}</li>
          <li className="text-black text-xs">Max Texture Size: {caps.maxTextureSize}</li>
          <li className="text-black text-xs">Max Cubemap Size: {caps.maxCubemapSize}</li>
          <li className="text-black text-xs">Max Anisotropy: {caps.getMaxAnisotropy()}</li>
          <li className="text-black text-xs">Precision: {caps.getMaxPrecision()}</li>
          <li className="text-black text-xs">textureFormatReadable: {caps.textureFormatReadable()}</li>
          <li className="text-black text-xs">textureTypeReadable: {caps.textureTypeReadable()}</li>
        </ul>
      </div>
    </>
  );
};

export default PlaygroundPage;
