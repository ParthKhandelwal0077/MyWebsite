"use client";

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TextGenerateEffect } from '../ui/text-generation-effect';
import Link from 'next/link';
export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          <div className="order-2 md:order-1">
            <motion.div 
              className="relative w-full aspect-square rounded-2xl cosmic-border group"
              variants={itemVariants}
            >
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <img 
                  src="/profilephoto.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-[1.3]"
                />
              </div>
            </motion.div>
          </div>
          {/* 3d pobject would come here */}
          <div className="order-1 md:order-2">
            <motion.span 
              className="inline-block text-3xl md:text-4xl lg:text-5xl font-medium  mb-3 font-bold"
              variants={itemVariants}

            >
             Parth <span className="text-accent">Khandelwal</span>
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
             <span className="cosmic-text">Web Developer</span> trying to step out 
              <br />
              <span className="text-muted-foreground text-2xl md:text-3xl">Technology | Longivity | Finance | Sustainability</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-6"
              variants={itemVariants}
            >
              <TextGenerateEffect words={"I'm a creative web developer and critical thinker with a passion for building immersive, interactive digital experiences that push the boundaries of what's possible on the web. I am constantly looking towards meeting people and building a capitalistic funnel to save flora and fauna."} filter={true}/>
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              variants={itemVariants}
            >
             With expertise in mordern frontend I always looks towards working on a meaningful but fast paced startups , around people who think that their work must be done in half the given time and with full adrenaline.
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 gap-8"
              variants={itemVariants}
            >
             
              <span className="text-xl font-medium text-accent mb-3">Skills : <Link href="#skills" className="text-muted-foreground">Check Out Below</Link></span> 
              

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}