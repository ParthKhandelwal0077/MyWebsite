import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GroupProps, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type GLTFResult = {
  nodes: {
    [key: string]: THREE.Mesh
  }
  materials: {
    [key: string]: THREE.Material
  }
}

export default function Fireball(props: GroupProps) {
  const gltf = useGLTF('/models/fireball_vfx.glb') as unknown as GLTFResult
  const { nodes, materials } = gltf
  const groupRef = useRef<THREE.Group>(null)
  
  // Rotation animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.7 // Adjust speed by changing multiplier
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2 // Slight wobble
    }
  })
  
  // Log the available nodes to help debug
  console.log('Available nodes:', Object.keys(nodes))
  console.log('Available materials:', Object.keys(materials))

  // Find the first mesh in the nodes object
  const meshes = Object.entries(nodes).filter(([_, node]) => node instanceof THREE.Mesh)
  
  if (meshes.length < 2) {
    console.error('Required meshes not found in the model')
    return null
  }

  const [firstMesh, secondMesh] = meshes

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={firstMesh[1].geometry}
          material={materials.material}
          position={[-14.586, 75.534, -0.761]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={secondMesh[1].geometry}
          material={materials['.001']}
          position={[-13.517, 77.884, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={90.475}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/fireball_vfx.glb')
