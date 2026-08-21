"use client"
import { useState } from "react"
import { motion } from "motion/react"
import { blogs } from "../../static-data/blogs.data"
import { BlogCard } from "./blog-card"
import { Badge } from "@/components/ui/badge"

export function BlogsPageView() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Extract unique tags across all blogs
  const allTags = Array.from(
    new Set(blogs.flatMap((blog) => blog.tags))
  )

  // Filter blogs based on selected tag
  const filteredBlogs = selectedTag
    ? blogs.filter((blog) => blog.tags.includes(selectedTag))
    : blogs

  return (
    <div className="section-padding-x section-padding-y min-h-[70vh]">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Resources</span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground mt-2">
            Our Articles
          </h1>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Read our thoughts on frontend design patterns, backend structure, database migrations, animations, and how we build software that ships.
          </p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Badge
            variant={selectedTag === null ? "default" : "outline"}
            className="cursor-pointer px-3 py-1 text-xs"
            onClick={() => setSelectedTag(null)}
          >
            All Articles
          </Badge>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              className="cursor-pointer px-3 py-1 text-xs"
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Blogs Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border rounded-xl bg-card">
            <p className="text-muted-foreground text-sm">No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
