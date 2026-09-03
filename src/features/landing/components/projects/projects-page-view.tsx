"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../../static-data/projects.data";
import { ProjectCard } from "./project-card";

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export function ProjectsPageView() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="section-padding-x py-16 lg:py-24 min-h-[70vh] bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 border border-primary/20">
              Our Portfolio
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight"
          >
            Selected <span className="text-primary">Works</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            A curated selection of our finest digital experiences. We blend strategic thinking with world-class design and engineering to build products that perform.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12 lg:mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-foreground text-background shadow-lg scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 border border-transparent hover:border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Determine if card should be large based on its visual index in the filtered list
              const isLarge = index % 3 === 0;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                  key={project.id}
                  className={isLarge ? "md:col-span-2 lg:col-span-2" : ""}
                >
                  <ProjectCard project={project} isLarge={isLarge} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
