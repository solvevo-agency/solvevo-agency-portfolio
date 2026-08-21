"use client"
import Link from "next/link"
import { motion } from "motion/react"
import { projects } from "../../static-data/projects.data"
import { ProjectCard } from "./project-card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ProjectsSection() {
  // Show exactly six cards
  const displayProjects = projects.slice(0, 6)

  return (
    <section id="projects" className="section-padding-x section-padding-y bg-muted/10 border-t">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          Our Featured Projects
        </h2>
        <p className="text-muted-foreground mt-4">
          Explore a selection of our latest client work, built using modern web stacks and fine-tuned for performance.
        </p>
      </div>

      {/* Projects Grid with Staggered Scroll-Reveal Animations */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {displayProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {/* More Button */}
      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "transition-all hover:scale-[1.02] active:scale-[0.98]"
          )}
        >
          View More Projects
        </Link>
      </div>
    </section>
  )
}
