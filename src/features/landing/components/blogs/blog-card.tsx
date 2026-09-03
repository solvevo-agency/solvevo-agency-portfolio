"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Blog } from "../../types/blog.types";

export function BlogCard({ blog, isLarge = false }: { blog: Blog, isLarge?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div 
        onClick={() => setOpen(true)}
        className={`group relative flex flex-col overflow-hidden rounded-[2rem] bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${isLarge ? 'md:flex-row' : ''}`}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Cover Image */}
        <div className={`relative overflow-hidden ${isLarge ? 'md:w-3/5 aspect-[16/10] md:aspect-auto' : 'aspect-[16/10] w-full'}`}>
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={isLarge ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"}
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
        </div>

        {/* Card Body */}
        <div className={`flex flex-col justify-between p-8 md:p-10 lg:p-12 ${isLarge ? 'md:w-2/5' : 'w-full'} bg-card relative z-10`}>
          <div>
            {/* Tags / Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                {blog.tags[0]}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30"></span>
              <span className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                {blog.publishedAt}
              </span>
            </div>

            {/* Title & Excerpt */}
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-3">
              {blog.title}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed line-clamp-3">
              {blog.excerpt}
            </p>
          </div>

          {/* Interactive Button */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors">
              <span>Read Article</span>
              <span className="text-muted-foreground text-xs font-medium ml-2">({blog.readTime} min read)</span>
            </div>
            <motion.div
              variants={{
                rest: { x: 0, y: 0 },
                hover: { x: 4, y: -4 }
              }}
              transition={{ duration: 0.3 }}
              className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Modal Detailed View */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto p-0 border-border bg-background shadow-2xl rounded-3xl">
          <div className="relative aspect-[21/9] w-full border-b border-border">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="800px"
            />
            {/* Soft gradient to make text readable over the bottom of the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
          
          <div className="p-8 sm:p-12 flex flex-col gap-6 relative -mt-12 sm:-mt-16 z-10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold tracking-wider uppercase text-muted-foreground">
              <span className="text-primary border border-primary/20 bg-primary/10 px-3 py-1 rounded-full backdrop-blur-sm">
                {blog.tags[0]}
              </span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-border"></span>{blog.readTime} min read</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-border"></span>{blog.publishedAt}</span>
            </div>
            
            <DialogTitle className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              {blog.title}
            </DialogTitle>
            
            <div className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4 whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
