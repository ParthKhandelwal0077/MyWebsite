"use client";

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CodeIcon, PencilRulerIcon, LayersIcon, GanttChartIcon } from 'lucide-react';

const categories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <CodeIcon className="h-6 w-6" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "GSAP"],
  },
  {
    id: "design",
    name: "Design",
    icon: <PencilRulerIcon className="h-6 w-6" />,
    skills: ["UI/UX Design", "Figma", "Responsive Design", "Animation", ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <LayersIcon className="h-6 w-6" />,
    skills: ["Node.js", "Express", "SQL", "MongoDB", "Firebase", "REST APIs", "Redux","C++"],
  },
  {
    id: "other",
    name: "Other",
    icon: <GanttChartIcon className="h-6 w-6" />,
    skills: ["Git", "Agile", "Docker","Performance Optimization", "SEO", "Accessibility", "Testing", ],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-card">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-lg font-medium text-accent mb-3">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="cosmic-text">Skills</span> & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I specialize in modern web technologies to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`p-4 flex items-center justify-center space-x-2 rounded-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? "cosmic-border bg-background"
                  : "border border-border hover:border-primary/50"
              }`}
            >
              <span 
                className={activeCategory === category.id ? "cosmic-text" : "text-foreground"}
              >
                {category.icon}
              </span>
              <span 
                className={`font-medium ${
                  activeCategory === category.id ? "cosmic-text" : "text-foreground"
                }`}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {categories
            .find((cat) => cat.id === activeCategory)
            ?.skills.map((skill, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={itemVariants}
                className="cosmic-border bg-background p-6 rounded-lg text-center hover:bg-card/80 transition-colors"
              >
                <div className="text-lg font-medium">{skill}</div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}