"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleLinkHoverStart = () => setIsHovering(true);
    const handleLinkHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);

    // Add hover events to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleLinkHoverStart);
      element.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleLinkHoverStart);
        element.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  // Disable custom cursor on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <motion.div 
        className="custom-cursor cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ duration: 0, ease: "linear" }}
      />
      <motion.div 
        className={`custom-cursor cursor-outline ${isHovering ? 'link-hover' : ''}`}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ 
          duration: 0.15, 
          ease: "linear",
          scale: { type: "spring", stiffness: 200, damping: 15 }
        }}
      />
    </>
  );
}