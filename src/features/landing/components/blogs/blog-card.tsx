"use client"
import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { Blog } from "../../types/blog.types"

export function BlogCard({ blog }: { blog: Blog }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col h-full rounded-xl border bg-card overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        {/* Cover Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Card Body */}
        <div className="flex flex-col flex-1 p-6 justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {blog.tags[0]}
            </span>
            <h3 className="text-lg font-bold tracking-tight text-foreground line-clamp-2 leading-snug">
              {blog.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mt-1">
              {blog.excerpt}
            </p>
          </div>

          {/* Action Trigger */}
          <div className="flex items-center justify-between border-t pt-4">
            <span className="text-xs text-muted-foreground">{blog.publishedAt}</span>
            <Button variant="outline" size="sm" className="transition-all hover:scale-[1.02] active:scale-[0.98]" onClick={() => setOpen(true)}>
              View Details
            </Button>
          </div>
        </div>
      </div>

      {/* Modal Detailed View */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto p-0">
          <div className="relative aspect-[2/1] w-full border-b">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="800px"
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="font-semibold text-primary uppercase tracking-wider">{blog.tags[0]}</span>
              <span>•</span>
              <span>{blog.readTime} min read</span>
              <span>•</span>
              <span>{blog.publishedAt}</span>
            </div>
            <DialogTitle className="text-2xl font-bold tracking-tight text-foreground mt-2 leading-snug">
              {blog.title}
            </DialogTitle>
            <div className="text-sm text-muted-foreground leading-relaxed mt-2 whitespace-pre-wrap">
              {blog.content}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
