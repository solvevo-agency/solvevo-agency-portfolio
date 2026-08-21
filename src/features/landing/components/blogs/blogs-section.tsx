import Link from "next/link"
import { blogs } from "../../static-data/blogs.data"
import { BlogCard } from "./blog-card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function BlogsSection() {
  // Homepage renders only featured: true blogs
  const featuredBlogs = blogs.filter((blog) => blog.featured)

  return (
    <section id="blogs" className="section-padding-x section-padding-y border-t bg-muted/10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          Latest News & Articles
        </h2>
        <p className="text-muted-foreground mt-4">
          Stay up to date with the latest industry practices, architecture strategies, and tools.
        </p>
      </div>

      {/* Blogs Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {featuredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* View More Blogs Button */}
      <div className="mt-12 text-center">
        <Link
          href="/blogs"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "transition-all hover:scale-[1.02] active:scale-[0.98]"
          )}
        >
          View More Articles
        </Link>
      </div>
    </section>
  )
}
