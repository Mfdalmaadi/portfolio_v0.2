// import { Canvas } from "@react-three/fiber";
// import { useGLTF, Stage, PresentationControls, ContactShadows } from "@react-three/drei";

// function Model(props) {
//     const { scene } = useGLTF("/gaming_desktop_pc.glb");
//     return <primitive object={scene} castShadow receiveShadow {...props} />;
// }

// function Pc() {
//     return (
//         <Canvas
//             dpr={[1, 2]}
//             shadows
//             camera={{ fov: 45, position: [0, 0, 3] }}
//             style={{ position: "absolute"}}
//         >
//             <ambientLight intensity={0.5} />
//             <directionalLight 
//                 position={[2, 5, 5]} 
//                 intensity={1.5} 
//                 castShadow 
//                 shadow-mapSize={[1024, 1024]}
//             />

//             <PresentationControls speed={1.4} global polar={[-0.1, Math.PI / 4]}>
//                     <Stage>
//                         <Model scale={0.001} />
//                     </Stage>
//             </PresentationControls>

//             <ContactShadows 
//                 position={[0, -0.5, 0]} 
//                 opacity={0.4} 
//                 blur={2} 
//                 far={10} 
//             />
//         </Canvas>
//     );
// }

// export default Pc;


import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const ComputerModel = () => {
  const { scene } = useGLTF("/gaming_desktop_pc.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.3} groundColor="black" />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[5, 5, 5]} intensity={1} />

      {/* Reduced scale to make the model smaller */}
      <primitive object={scene} scale={0.3} position={[0, -1.5, 0]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

const Pc = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [2, 2, 4], fov: 50 }} // Adjusted for better framing
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <ComputerModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Pc;
