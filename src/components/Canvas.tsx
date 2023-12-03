import { Canvas } from "@react-three/fiber";
import React from "react";
import { Polestar } from "../models/Polestar";
import { Box } from "../models/Box";
import { OrbitControls } from "@react-three/drei";

type Props = {
  carColor: string;
};

export function AppCanvas({ carColor }: Props) {
  return (
    <div className="bg-white h-3/5 w-full">
      <Canvas flat linear>
        <OrbitControls autoRotate enableDamping />
        <ambientLight />
        <ambientLight />
        <ambientLight />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} />
        <Polestar isRunning={true} />
        {/* <Box color={carColor} position={[-1.2, 0, 0]} />
            <Box color={carColor} position={[1.2, 0, 0]} /> */}
      </Canvas>
    </div>
  );
}
