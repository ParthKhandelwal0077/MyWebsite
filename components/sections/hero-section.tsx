"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
import HeroSectionContent from '../hero-section-content';
import ProjectsPreview from '@/components/projects/projects-preview';
import { Canvas } from '@react-three/fiber';
import Fireball from '@/components/fireball';
import { OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';


export default function HeroSection() {
 

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateMousePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      container.style.setProperty("--mouse-x", `${x}`);
      container.style.setProperty("--mouse-y", `${y}`);
    };

    window.addEventListener("mousemove", updateMousePosition);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col justify-center mt-28"
      ref={containerRef}
      style={{
        "--mouse-x": "0.5",
        "--mouse-y": "0.5"
      } as React.CSSProperties}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="h-[300px] md:h-[600px] w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} id="canvas" >
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Fireball position={[0, -1, 0]} scale={typeof window !== 'undefined' && window.innerWidth < 768 ? 1.2 : 1.8} />
              <OrbitControls enableZoom={false} enablePan={false} enableRotate={false}/>
            </Canvas>
          </div>

          {/* Projects Preview on the right side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden md:block"
          >
            <ProjectsPreview />
          </motion.div>
        </div>
        <HeroSectionContent />
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDownIcon className="w-6 h-6 text-foreground/80" />
      </motion.div>
    </section>
  );
}