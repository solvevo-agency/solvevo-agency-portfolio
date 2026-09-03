"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { blogs } from "../../static-data/blogs.data";
import { BlogCard } from "./blog-card";

export function BlogsPageView() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Extract unique tags across all blogs
  const allTags = ["All", ...Array.from(new Set(blogs.flatMap((blog) => blog.tags)))];

  // Filter blogs based on selected tag
  const filteredBlogs = activeCategory === "All"
    ? blogs
    : blogs.filter((blog) => blog.tags.includes(activeCategory));

  return (
    <div className="section-padding-x py-16 lg:py-24 min-h-[70vh] bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 border border-primary/20">
              Resources
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight"
          >
            Our <span className="text-primary">Articles</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Read our thoughts on frontend design patterns, backend structure, database migrations, animations, and how we build software that ships.
          </motion.p>
        </div>

        {/* Tag Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12 lg:mb-16"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveCategory(tag)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === tag
                  ? "bg-foreground text-background shadow-lg scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 border border-transparent hover:border-border"
              }`}
            >
              {tag === "All" ? "All Articles" : tag}
            </button>
          ))}
        </motion.div>

        {/* Blogs Grid */}
        <motion.div layout className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => {
                const isLarge = index % 3 === 0;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                    key={blog.id}
                    className={isLarge ? "md:col-span-2 lg:col-span-2" : ""}
                  >
                    <BlogCard blog={blog} isLarge={isLarge} />
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-2 text-center py-20 border rounded-3xl bg-card">
                <p className="text-muted-foreground text-lg font-medium">
                  No articles found in this category.
                </p>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
