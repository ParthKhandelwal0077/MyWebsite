import React from 'react'
import { motion } from 'framer-motion'
export default function HeroSectionContent() {
  return (
    <div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Creative <span className="cosmic-text">Web Developer</span> & Digital Craftsman
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Building immersive digital experiences with modern web technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#projects"
                className="cosmic-gradient inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold text-white shadow-md hover:brightness-110 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background/80 backdrop-blur-sm px-6 py-3 text-base font-semibold shadow-md hover:bg-accent/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
    </div>
  )
}
