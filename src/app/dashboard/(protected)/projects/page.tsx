import { ProjectsView } from "@/features/dashboard/components/projects/projects-view"
import { Suspense } from "react"

export default function DashboardProjectsPage() {
  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <ProjectsView />
    </Suspense>
  )
}

