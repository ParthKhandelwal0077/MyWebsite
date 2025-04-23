"use client";

import { useRef, useState, useId } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X as CloseIcon, ArrowUpRight as ArrowUpRightIcon } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  video?: string;
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
      link: "https://casemate.vercel.app",
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
      link: "https://helpdesk.vercel.app",
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

const ProjectMedia = ({ project }: { project: Project }) => {
  
  
  if (project.image) {
    return (
      <div className="relative h-60 w-full">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full rounded-lg object-cover"
        />
      </div>
    );
  }

  return null;
};

export default function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);
  const id = useId();
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

  const handleCardClick = (project: Project) => {
    setActive(project);
  };

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
            onClick={() => setActive(null)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-8 w-8 shadow-lg"
              onClick={() => setActive(null)}
            >
              <CloseIcon className="h-7 w-7 text-black" />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className="w-full">
                <ProjectMedia project={active} />
              </motion.div>

              <div className="flex flex-col p-4">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-medium text-neutral-700 dark:text-neutral-200 text-xl mb-2"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-base mb-4"
                >
                  {active.description}
                </motion.p>
                <motion.p className="text-sm text-neutral-500 dark:text-neutral-500">
                  {active.category}
                </motion.p>
                {active.link && (
                  <motion.a
                    href={active.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-accent rounded-md hover:bg-accent/90 transition-colors"
                  >
                    View Project <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group cosmic-border rounded-xl overflow-hidden bg-card hover:bg-card/80 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleCardClick(project);
                }}
              >
                <div className="relative">
                  <div 
                    className="aspect-video w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:cosmic-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-foreground hover:cosmic-text transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
         
          </div>
        </div>
      </section>
    </>
  );
}