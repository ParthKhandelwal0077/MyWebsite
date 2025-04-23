"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const marqueeItems = [
  "CREATIVE WEB DEVELOPER",
  "✦",
  "BUILD BIGGG",
  "✦",
  "INTERACTIVE EXPERIENCES",
  "✦",
  "3D ANIMATIONS",
  "✦",
  "FASTTTT",
  "✦",
  "FRONTEND DEVELOPER",
  "✦",
  "MOVIES",
  "✦",
  "BACKEND DEVELOPER",
  "✦",
  "ENVIRONMENTALIST",
  "✦",
  "CRACK HEAD",
  "✦",
  "BOOKS",
  "✦",
  "MOVIES",
  "✦",
  "LETS BUILDDDD",
  "✦",
  "SOMETIMES GOOD AT CODING",
  "✦",
  

  
  
];

export default function MarqueeSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current || !itemsRef.current) return;

    const marqueeEl = marqueeRef.current;
    const itemsEl = itemsRef.current;
    
    // Clone the items to create a seamless loop
    const cloneItems = itemsEl.cloneNode(true);
    marqueeEl.appendChild(cloneItems);
    
    // Setup horizontal scrolling animation
    const setupMarquee = () => {
      const totalWidth = itemsEl.offsetWidth;
      
      gsap.to(marqueeEl.children, {
        xPercent: -100,
        repeat: -1,
        duration: 20,
        ease: "none",
        modifiers: {
          xPercent: gsap.utils.unitize(x => parseFloat(x) % 100)
        }
      });
    };
    
    setupMarquee();
    
    // Update the animation on window resize
    const handleResize = () => {
      gsap.killTweensOf(marqueeEl.children);
      setupMarquee();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      gsap.killTweensOf(marqueeEl.children);
    };
  }, []);

  return (
    <div className="relative mt-25 -rotate-6 scale-110 py-12 md:py-20 overflow-hidden bg-card">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10"></div>
      
      {/* Marquee container */}
      <div className="relative flex">
        <div className="flex whitespace-nowrap" ref={marqueeRef}>
          <div className="flex items-center" ref={itemsRef}>
            {marqueeItems.map((item, index) => (
              <div 
                key={`${item}-${index}`} 
                className={`text-4xl md:text-6xl lg:text-7xl font-bold px-4 md:px-8 ${item === "✦" ? "text-accent" : "cosmic-text"}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}