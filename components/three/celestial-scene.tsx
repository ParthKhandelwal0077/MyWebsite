"use client";

import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';

function Planet({ position, size, rotationSpeed, textureUrl, onClick }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Use external texture URLs instead of local files
  const texture = new THREE.TextureLoader().load(textureUrl);
  
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed * delta;
    }
  });

  return (
    <mesh ref={meshRef} position={position} onClick={onClick} castShadow>
      <sphereGeometry args={[size, 64, 32]} />
      <meshStandardMaterial 
        map={texture}
        metalness={0.2}
        roughness={0.8}
      />
    </mesh>
  );
}

function Nebula() {
  const { viewport, camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  
  useEffect(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        duration: 200,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);
  
  useFrame(() => {
    if (groupRef.current) {
      // Slowly rotate the entire nebula
      groupRef.current.rotation.z += 0.0001;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 15 }).map((_, i) => {
        const size = Math.random() * 30 + 10;
        const position = new THREE.Vector3(
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100 - 50 // Push most clouds behind the scene
        );
        
        const opacity = Math.random() * 0.5 + 0.1;
        const color = new THREE.Color(
          Math.random() * 0.1 + 0.1,
          Math.random() * 0.1 + 0.05,
          Math.random() * 0.3 + 0.5
        );
        
        return (
          <mesh key={i} position={position}>
            <sphereGeometry args={[size, 16, 16]} />
            <meshBasicMaterial 
              color={color} 
              transparent 
              opacity={opacity} 
              side={THREE.DoubleSide} 
            />
          </mesh>
        );
      })}
    </group>
  );
}

function ShootingStars() {
  const groupRef = useRef<THREE.Group>(null);
  
  useEffect(() => {
    const createShootingStar = () => {
      if (!groupRef.current) return;
      
      // Create a shooting star
      const geometry = new THREE.BufferGeometry();
      const startPoint = new THREE.Vector3(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200 + 50,
        -50
      );
      
      const endPoint = new THREE.Vector3(
        startPoint.x - Math.random() * 100 - 50,
        startPoint.y - Math.random() * 100 - 50,
        startPoint.z
      );
      
      const positions = new Float32Array([
        startPoint.x, startPoint.y, startPoint.z,
        endPoint.x, endPoint.y, endPoint.z
      ]);
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        opacity: 1,
        transparent: true
      });
      
      const star = new THREE.Line(geometry, material);
      groupRef.current.add(star);
      
      // Animate the shooting star
      gsap.to(material, {
        opacity: 0,
        duration: Math.random() * 1.5 + 0.5,
        onComplete: () => {
          groupRef.current?.remove(star);
          star.geometry.dispose();
          material.dispose();
        }
      });
    };
    
    // Create shooting stars at random intervals
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to create a shooting star
        createShootingStar();
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return <group ref={groupRef} />;
}

function Scene() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const { camera } = useThree();
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Calculate normalized device coordinates
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useFrame(() => {
    // Subtly move camera based on mouse position
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.position.x += (mousePosition.current.x * 5 - camera.position.x) * 0.01;
      camera.position.y += (mousePosition.current.y * 3 - camera.position.y) * 0.01;
      camera.lookAt(0, 0, 0);
    }
  });
  
  // External texture URLs from Pexels for planets
  const planetTextures = {
    planet1: "https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=512",
    planet2: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=512",
    planet3: "https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&cs=tinysrgb&w=512"
  };
  
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} castShadow />
      
      <Nebula />
      <ShootingStars />
      
      <Planet 
        position={[0, 0, -5]} 
        size={3} 
        rotationSpeed={0.1} 
        textureUrl={planetTextures.planet1}
      />
      
      <Planet 
        position={[-8, 4, -15]} 
        size={1.5} 
        rotationSpeed={0.15} 
        textureUrl={planetTextures.planet2}
      />
      
      <Planet 
        position={[10, -5, -20]} 
        size={2} 
        rotationSpeed={0.08} 
        textureUrl={planetTextures.planet3}
      />
      
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0.5} 
        fade 
        speed={1}
      />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={false} 
      />
    </>
  );
}

export default function CelestialScene() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
}