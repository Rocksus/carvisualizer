import { Canvas } from '@react-three/fiber';
import React from 'react'
import { Polestar } from '../models/Polestar';
import { Box } from '../models/Box';

export function AppCanvas({
    ...props
}) {
    return (
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
            <Polestar isRunning={true} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    );
}