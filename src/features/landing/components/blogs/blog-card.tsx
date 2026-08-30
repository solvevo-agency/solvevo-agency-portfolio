"use client";
import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Blog } from "../../types/blog.types";

export function BlogCard({ blog }: { blog: Blog }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setOpen(true)}
        className="group relative flex flex-col h-full rounded-[2rem] border border-border/50 dark:border-white/5 bg-card dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:bg-secondary/20 dark:hover:bg-white/[0.04] hover:border-border dark:hover:border-white/10 cursor-pointer"
      >
        {/* Subtle top edge highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 dark:via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

        {/* Cover Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/50 dark:border-white/5">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Card Body */}
        <div className="flex flex-col flex-1 p-6 sm:p-8 justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.15em]">
              {blog.tags[0]}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-foreground dark:text-white line-clamp-2 leading-snug group-hover:text-primary dark:group-hover:text-cyan-100 transition-colors">
              {blog.title}
            </h3>
            <p className="text-sm text-muted-foreground dark:text-white/50 line-clamp-3 leading-relaxed mt-1">
              {blog.excerpt}
            </p>
          </div>

          {/* Action Trigger */}
          <div className="flex items-center justify-between border-t border-border/50 dark:border-white/5 pt-5">
            <span className="text-xs font-medium text-muted-foreground/80 dark:text-white/40 tracking-wide uppercase">
              {blog.publishedAt}
            </span>
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80 dark:text-white/80 group-hover:text-foreground dark:group-hover:text-white transition-colors">
              Read
              <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Detailed View */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto p-0 border-white/10 bg-[#050505]/95 backdrop-blur-2xl shadow-2xl rounded-2xl">
          <div className="relative aspect-[21/9] w-full border-b border-white/5">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80" />
          </div>
          
          <div className="p-8 sm:p-12 flex flex-col gap-6 relative -mt-16 z-10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-white/50 tracking-wider uppercase">
              <span className="text-cyan-400 border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 rounded-full">
                {blog.tags[0]}
              </span>
              <span>{blog.readTime} min read</span>
              <span>{blog.publishedAt}</span>
            </div>
            
            <DialogTitle className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {blog.title}
            </DialogTitle>
            
            <div className="text-base text-white/70 leading-relaxed mt-4 whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
