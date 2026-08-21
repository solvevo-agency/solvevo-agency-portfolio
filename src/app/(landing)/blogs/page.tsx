import { BlogsPageView } from "@/features/landing/components/blogs/blogs-page-view"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blogs | Solvevo",
  description: "Read the latest news, guides, and tutorials from the Solvevo development team.",
}

export default function BlogsPage() {
  return <BlogsPageView />
}
