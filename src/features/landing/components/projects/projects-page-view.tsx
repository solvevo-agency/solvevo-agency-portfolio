"use client"
import { motion } from "motion/react"
import { projects } from "../../static-data/projects.data"
import { ProjectCard } from "./project-card"

export function ProjectsPageView() {
  return (
    <div className="section-padding-x section-padding-y min-h-[70vh]">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Portfolio</span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground mt-2">
            Our Projects
          </h1>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            A comprehensive look at the products, applications, and websites we have delivered. Each project represents our dedication to clean code, responsive design, and robust performance.
          </p>
        </div>

        {/* Full Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
