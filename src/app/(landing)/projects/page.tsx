import { ProjectsPageView } from "@/features/landing/components/projects/projects-page-view"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Solvevo",
  description: "Browse the websites, web applications, and mobile apps built by Solvevo.",
}

export default function ProjectsPage() {
  return <ProjectsPageView />
}
