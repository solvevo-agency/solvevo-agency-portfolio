"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { blogs } from "../../static-data/blogs.data";
import { BlogCard } from "./blog-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BlogsSection() {
  const featuredBlogs = blogs.filter((blog) => blog.featured);

  return (
    <section id="blogs" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-indigo-500/5 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent drop-shadow-sm"
          >
            Insights & Engineering
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground/80 leading-relaxed"
          >
            Stay up to date with the latest industry practices, scalable architecture strategies, and modern tools.
          </motion.p>
        </div>

        {/* Blogs Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>

        {/* View More Blogs Button */}
        <div className="mt-16 text-center">
          <Link
            href="/blogs"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "shadow-[0_0_20px_rgba(255,255,255,0.05)]",
            )}
          >
            Read More Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
