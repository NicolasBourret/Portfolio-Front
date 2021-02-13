import React, { useRef, useState, Suspense } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  Canvas,
  useLoader,
  useThree,
  useFrame,
  extend,
} from "react-three-fiber";
import {
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter,
} from "three";
import posx from "../../images/textures/posx.png";
import negx from "../../images/textures/negx.png";
import posy from "../../images/textures/posy.png";
import negy from "../../images/textures/negy.png";
import posz from "../../images/textures/posz.png";
import negz from "../../images/textures/negz.png";
import "./ThreeElement.scss";

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();
  useFrame(() => {
    orbitRef.current.update();
  });
  return (
    <orbitControls autoRotate args={[camera, gl.domElement]} ref={orbitRef} />
  );
};

const urls = [posx, negx, posy, negy, posz, negz];

function Asset({ urls }) {
  const [cubeMapTexture] = useLoader(CubeTextureLoader, [urls]);
  const { scene } = useThree();
  scene.background = cubeMapTexture;
  return <></>;
}

function Box(props) {
  const { scene, gl } = useThree();
  // The cubeRenderTarget is used to generate a texture for the reflective sphere.
  // It must be updated on each frame in order to track camera movement and other changes.
  const cubeRenderTarget = new WebGLCubeRenderTarget(128, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter,
  });
  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 100, 0);
  scene.add(cubeCamera);
  // Update the cubeCamera with current renderer and scene.
  useFrame(() => cubeCamera.update(gl, scene));

  return (
    <mesh {...props}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshPhongMaterial envMap={cubeCamera.renderTarget.texture} />
    </mesh>
  );
}

function Box2(props) {
  return (
    <mesh {...props}>
      <sphereGeometry args={[1.7, 32, 32]} />
      <meshPhongMaterial color={"#ecf0f3"} transparent={true} opacity={0.3} />
    </mesh>
  );
}

export default function Three() {
  return (
    <div className="three">
      <Canvas>
        <directionalLight args={["#ecf0f3", 1]} position={[-10, 10, 5]} />
        <Controls />
        <Suspense fallback={<Box />}>
          <Asset urls={urls} />
        </Suspense>
        <Box position={[0, 0, 0]} />
        <Box2 position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
