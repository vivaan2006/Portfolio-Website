import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

type BallItem = {
  name: string;
  icon: string;
};

const BallMesh: React.FC<{ imgUrl: string; position: [number, number, number] }> = ({
  imgUrl,
  position,
}) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} position={position}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={0.95}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          // @ts-expect-error
          flatShading
        />
      </mesh>
    </Float>
  );
};

// Renders every technology ball inside ONE shared WebGL canvas/context instead of
// one <Canvas> per icon. Browsers cap the number of simultaneously-live WebGL
// contexts (commonly ~16); with 20+ tech icons, one context each caused the
// oldest contexts (including the hero computer scene) to get silently evicted.
const BallGrid: React.FC<{ technologies: BallItem[] }> = ({ technologies }) => {
  const columns = 6;
  const spacing = 3.1;
  const rows = Math.ceil(technologies.length / columns);

  return (
    <div className="h-[420px] w-full sm:h-[520px]">
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        camera={{ position: [0, 0, 14], fov: 40 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          {technologies.map((tech, index) => {
            const col = index % columns;
            const row = Math.floor(index / columns);
            const itemsInRow = Math.min(columns, technologies.length - row * columns);
            const rowOffset = (itemsInRow - 1) / 2;
            const x = (col - rowOffset) * spacing;
            const y = -(row - (rows - 1) / 2) * spacing;
            return <BallMesh key={tech.name} imgUrl={tech.icon} position={[x, y, 0]} />;
          })}
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallGrid;
