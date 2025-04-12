import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

function Model(props) {
    const { scene } = useGLTF("/planet.glb");
    return <primitive object={scene} scale={3.4} castShadow receiveShadow {...props} />;
}

function Moon() {
    return (
      <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      shadows
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Suspense>
        <Model />
      </Suspense>
      <Preload all />
    </Canvas>
    );
  }
  

export default Moon;
