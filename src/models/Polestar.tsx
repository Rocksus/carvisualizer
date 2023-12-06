import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshPhysicalMaterial } from "three";

type Props = {
    carColor: string
}

export function Polestar({ carColor, ...props}: Props) {
  const ref = useRef();
  const { nodes, scene, materials, animations } = useLoader(
    GLTFLoader,
    "/assets/3d/polestar.glb"
  );

  const { actions } = useAnimations(animations, ref);

  const paintColor = new MeshPhysicalMaterial({
      roughness: 0.8,
      metalness: 0.2,
      color: carColor,
      envMapIntensity: 0.75,
      clearcoatRoughness: 0,
      clearcoat: 1
    })

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Polestar_1_Polestar_1_Car_Paint_0.geometry}
            material={paintColor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Polestar_1_Polestar_1_Windows_Red_Glass_0.geometry}
            material={materials.Polestar_1_Windows_Red_Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes.Polestar_1_Polestar_1_Windows_White_Glass_0.geometry
            }
            material={materials.Polestar_1_Windows_White_Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Polestar_1_Polestar_1_Windows_0.geometry}
            material={materials.Polestar_1_Windows}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Polestar_1_Polestar1_Blackout_0.geometry}
            material={materials.Polestar1_Blackout}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Polestar_1_Polestar_1_Lamps_0.geometry}
            material={materials.Polestar_1_Lamps}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Polestar_1_Polestar_1_Reflector_White_0.geometry}
            material={materials.Polestar_1_Reflector_White}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Polestar_1_Polestar_1_Reflector_Red_0.geometry}
            material={materials.Polestar_1_Reflector_Red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Polestar_1_Polestar_1_Reverse_Light_0.geometry}
            material={materials.Polestar_1_Reverse_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Polestar_1_Polestar_1_Chrome_0.geometry}
            material={materials.Polestar_1_Chrome}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Polestar_1_Polestar_1_Side_View_Mirror_0.geometry}
            material={materials.Polestar_1_Side_View_Mirror}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Polestar_1_Polestar_1_Plastic_0.geometry}
            material={materials.Polestar_1_Plastic}
          />
        </group>
        <group
          position={[77.792, 34.782, 137.827]}
          rotation={[-2.113, 0.209, -0.394]}
          scale={8.135}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Brembo_Calipers_Brembo_Calipers_0.geometry}
            material={materials.Brembo_Calipers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Plane_Logo_Plane_0.geometry}
            material={materials.Logo_Plane}
            position={[-0.004, 0, 0]}
          />
        </group>
        <group
          position={[-77.792, 34.782, 137.827]}
          rotation={[1.029, -0.209, -2.748]}
          scale={8.135}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Brembo_Calipers002_Brembo_Calipers_0.geometry}
            material={materials.Brembo_Calipers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Plane001_Logo_Plane_0.geometry}
            material={materials.Logo_Plane}
            position={[-0.004, 0, 0]}
          />
        </group>
        <group
          position={[77.792, 34.782, -137.065]}
          rotation={[-2.147, 0, 0]}
          scale={8.135}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Brembo_Calipers001_Brembo_Calipers_0.geometry}
            material={materials.Brembo_Calipers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Plane002_Logo_Plane_0.geometry}
            material={materials.Logo_Plane}
            position={[-0.004, 0, 0]}
            rotation={[0.034, 0.209, -0.394]}
          />
        </group>
        <group
          position={[-77.792, 34.782, -137.065]}
          rotation={[0.995, 0, -Math.PI]}
          scale={8.135}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Brembo_Calipers003_Brembo_Calipers_0.geometry}
            material={materials.Brembo_Calipers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Plane003_Logo_Plane_0.geometry}
            material={materials.Logo_Plane}
            position={[-0.004, 0, 0]}
            rotation={[-0.034, 0.209, 0.394]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pirelli_P_Zero_Tire_Pirelli_P_Zero_Tire_0.geometry}
          material={materials.Pirelli_P_Zero_Tire}
          position={[77.792, 34.782, 137.827]}
          rotation={[-1.589, -0.036, -0.464]}
          scale={46.815}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Polestar1_Rim_Chrome002_Polestar1_Rim_Chrome_0.geometry
          }
          material={materials.Polestar1_Rim_Chrome}
          position={[77.792, 34.782, 137.827]}
          rotation={[-1.589, -0.036, -0.464]}
          scale={105.847}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Brake_disc_Brake_Disc_0.geometry}
          material={materials.Brake_Disc}
          position={[77.792, 34.782, 137.827]}
          rotation={[-1.589, -0.036, -0.464]}
          scale={8.135}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Brake_disc002_Brake_Disc_0.geometry}
          material={materials.Brake_Disc}
          position={[-77.792, 34.782, 137.827]}
          rotation={[-1.553, 0.036, 2.677]}
          scale={8.135}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pirelli_P_Zero_Tire002_Pirelli_P_Zero_Tire_0.geometry}
          material={materials.Pirelli_P_Zero_Tire}
          position={[-77.792, 34.782, 137.827]}
          rotation={[-1.553, 0.036, 2.677]}
          scale={46.815}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Polestar1_Rim_Chrome003_Polestar1_Rim_Chrome_0.geometry
          }
          material={materials.Polestar1_Rim_Chrome}
          position={[-77.792, 34.782, 137.827]}
          rotation={[-1.553, 0.036, 2.677]}
          scale={105.847}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Brake_disc001_Brake_Disc_0.geometry}
          material={materials.Brake_Disc}
          position={[77.792, 34.782, -137.065]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={8.135}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pirelli_P_Zero_Tire001_Pirelli_P_Zero_Tire_0.geometry}
          material={materials.Pirelli_P_Zero_Tire}
          position={[77.792, 34.782, -137.065]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={46.815}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Polestar1_Rim_Chrome001_Polestar1_Rim_Chrome_0.geometry
          }
          material={materials.Polestar1_Rim_Chrome}
          position={[77.792, 34.782, -137.065]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={105.847}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Brake_disc003_Brake_Disc_0.geometry}
          material={materials.Brake_Disc}
          position={[-77.792, 34.782, -137.065]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={8.135}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pirelli_P_Zero_Tire003_Pirelli_P_Zero_Tire_0.geometry}
          material={materials.Pirelli_P_Zero_Tire}
          position={[-77.792, 34.782, -137.065]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={46.815}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes.Polestar1_Rim_Chrome004_Polestar1_Rim_Chrome_0.geometry
          }
          material={materials.Polestar1_Rim_Chrome}
          position={[-77.792, 34.782, -137.065]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={105.847}
        />
      </group>
    </group>
  );
}
