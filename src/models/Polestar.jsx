import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

import polestarScene from "../assets/3d/polestar.glb";

export function Polestar({
    isRunning,
    ...props
}) {
    const ref = useRef();
    const { scene, materials, animations } = useGLTF(polestarScene)
    useFrame((state, delta) => (ref.current.rotation.y += delta))

    const { actions } = useAnimations(animations, ref);
    
    console.log(materials);

    return (
        <mesh {...props} ref={ref} scale={[2, 2, 2]}>
          <primitive object={scene} />
        </mesh>
      );
}


useGLTF.preload(polestarScene);