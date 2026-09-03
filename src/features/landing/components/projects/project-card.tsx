"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/project.types";

export function ProjectCard({ project, isLarge = false }: { project: Project, isLarge?: boolean }) {
  return (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col overflow-hidden rounded-[2rem] bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${isLarge ? 'md:flex-row' : ''}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${isLarge ? 'md:w-3/5 aspect-[4/3] md:aspect-auto' : 'aspect-[4/3] w-full'}`}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={isLarge ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"}
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
      </div>

      {/* Content Area */}
      <div className={`flex flex-col justify-between p-8 md:p-10 lg:p-12 ${isLarge ? 'md:w-2/5' : 'w-full'} bg-card relative z-10`}>
        <div>
          {/* Tags / Category */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              {project.category}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30"></span>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold text-muted-foreground bg-secondary/80 px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Interactive Button */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
            View Project
          </span>
          <motion.div
            variants={{
              rest: { x: 0, y: 0 },
              hover: { x: 4, y: -4 }
            }}
            transition={{ duration: 0.3 }}
            className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}
