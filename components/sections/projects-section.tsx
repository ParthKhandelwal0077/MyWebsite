"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight as ArrowUpRightIcon } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  category: string;
  link: string;
}

const projects = [
    {
      id: 1,
      title: "CaseMate- your AI legal assistant",
      description: "Casemate builds transparency between lawyers and their clients, assist clietns to understand their case better using AI generated layman english summaries and flowcharts to understand the case better and help them to make informed decisions",
      image: "/Casemate.jpeg",
      category: "Web Development | AI | Legal",
      link: "https://case-mate.vercel.app",
    },
    {
      id: 2,
      title: "Portfolio Website For artist",
      description: "A creative portfolio website showcasing artist work",
      image: "/Portfolio.png",
      category: "Web Development | UI/UX Design",
      link: "https://devershikapandit.com",
    },
    {
      id: 3,
      title: "HelpDesk for a startup",
      description: "A secure and intuitive helpdesk for a startup to help them to manage their customers and their queries",
      image: "/Ticket.png",
      category: "Web Development",
      link: "https://ask-us-helpdesk.vercel.app",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "The website you are on",
      image: "/My.png",
      category: "Web Development",
      link: "https://parthkhandelwal.vercel.app",
    },
    {
      id: 5,
      title: "Cash Minimization App",
      description: "A cash minimization app that helps you to minimize cash transactions between friends after an outing",
      image: "/Cash.png",
      category: "Web Development | Backend | Heap | DataStructure",
      link: "https://cashminimization.vercel.app",
    },
    {
      id: 6,
      title: "Apple Website Clone",
      description: "A clone of the Apple website",
      image: "/Apple.png",
      category: "Web Development | UI/UX Design",
      link: "https://appleclone.vercel.app",
    },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    <section id="projects" className="py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-lg font-medium text-accent mb-3">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="cosmic-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my latest projects showcasing creative web development
            and interactive experiences.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 max-w-[1400px] mx-auto"
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group cosmic-border rounded-xl overflow-hidden bg-card hover:bg-card/80 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <div 
                  className="aspect-[16/9] w-full bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm md:text-base font-medium bg-background/80 backdrop-blur-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 lg:p-10">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 group-hover:cosmic-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 line-clamp-2">{project.description}</p>
                <span className="inline-flex items-center text-foreground group-hover:cosmic-text transition-all text-base md:text-lg">
                  View Project <ArrowUpRightIcon className="ml-2 h-5 w-5 md:h-6 md:w-6" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}