"use client"
import Image from "next/image"
import { motion } from "motion/react"
import type { Project } from "../../types/project.types"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[3/2] overflow-hidden rounded-xl border bg-card shadow-sm cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Project Cover Image */}
      <Image
        src={project.coverImage}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Hover Overlay with text details */}
      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col justify-end bg-black/75 p-6 text-white"
      >
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/20">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
        <p className="text-sm text-white/80 mt-1 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        <span className="mt-4 text-xs font-semibold underline underline-offset-4 tracking-wide text-primary-foreground hover:text-white/100 flex items-center gap-1">
          Visit live site →
        </span>
      </motion.div>
    </motion.a>
  )
}
