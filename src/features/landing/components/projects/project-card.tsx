"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/project.types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/5 bg-[#050505] shadow-2xl cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Background Image */}
      <Image
        src={project.coverImage}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Persistent Bottom Gradient for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

      {/* Hover Deepen Gradient */}
      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
      />

      {/* Content Area */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 relative z-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Description */}
        <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
          <h3 className="text-2xl font-extrabold tracking-tight text-white mb-2">
            {project.title}
          </h3>
          
          <motion.div
            variants={{
              rest: { opacity: 0, height: 0, marginTop: 0 },
              hover: { opacity: 1, height: "auto", marginTop: 12 },
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </motion.div>
        </div>

        {/* Live Site Icon / Button */}
        <motion.div 
          variants={{
            rest: { scale: 0.8, opacity: 0 },
            hover: { scale: 1, opacity: 1 }
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-6 right-6 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-transform hover:scale-110"
        >
          <ArrowUpRight className="w-6 h-6" />
        </motion.div>

      </div>
    </motion.a>
  );
}
