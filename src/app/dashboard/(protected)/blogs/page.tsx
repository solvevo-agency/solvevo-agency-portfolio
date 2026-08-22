import { BlogsView } from "@/features/dashboard/components/blogs/blogs-view"
import { Suspense } from "react"

export default function DashboardBlogsPage() {
  return (
    <Suspense fallback={<div>Loading blogs...</div>}>
      <BlogsView />
    </Suspense>
  )
}

