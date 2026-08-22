"use client"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Plus, Search, MoreVertical, Trash2, Edit3, ExternalLink, Eye, EyeOff, Newspaper, ThumbsUp, MessageSquare } from "lucide-react"
import { dashboardBlogs as initialBlogs } from "../../static-data/blogs.data"
import type { DashboardBlog } from "../../types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"

export function BlogsView() {
  const searchParams = useSearchParams()
  const [blogs, setBlogs] = useState<DashboardBlog[]>(initialBlogs)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all")

  // Modal / Form state
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingBlog, setEditingBlog] = useState<DashboardBlog | null>(null)
  
  // Fields state
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [category, setCategory] = useState("")
  const [status, setStatus] = useState<"published" | "draft">("draft")

  const openAddModal = () => {
    setEditingBlog(null)
    setTitle("")
    setSlug("")
    setCategory("")
    setStatus("draft")
    setIsFormOpen(true)
  }

  // Auto-open modal if URL query has ?new=true
  useEffect(() => {
    if (searchParams.get("new") === "true") {
      openAddModal()
    }
  }, [searchParams])

  const openEditModal = (blog: DashboardBlog) => {
    setEditingBlog(blog)
    setTitle(blog.title)
    setSlug(blog.slug)
    setCategory(blog.category)
    setStatus(blog.status)
    setIsFormOpen(true)
  }

  const handleTitleChange = (val: string) => {
    setTitle(val)
    if (!editingBlog) {
      setSlug(
        val
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "")
      )
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !slug || !category) {
      toast.error("Please fill in all required fields")
      return
    }

    if (editingBlog) {
      // Edit
      setBlogs((prev) =>
        prev.map((b) =>
          b.id === editingBlog.id
            ? {
                ...b,
                title,
                slug,
                category,
                status,
              }
            : b
        )
      )
      toast.success("Blog post updated successfully")
    } else {
      // Add
      const newBlog: DashboardBlog = {
        id: (blogs.length + 1).toString(),
        title,
        slug,
        category,
        status,
        views: 0,
        likes: 0,
        comments: 0,
        publishedAt: new Date().toISOString().split("T")[0],
      }
      setBlogs((prev) => [newBlog, ...prev])
      toast.success("New blog post created successfully")
    }
    setIsFormOpen(false)
  }

  const handleDelete = (id: string) => {
    setBlogs((prev) => prev.filter((b) => b.id !== id))
    toast.success("Blog post deleted successfully")
  }

  const toggleStatus = (blog: DashboardBlog) => {
    const nextStatus = blog.status === "published" ? "draft" : "published"
    setBlogs((prev) =>
      prev.map((b) => (b.id === blog.id ? { ...b, status: nextStatus } : b))
    )
    toast.success(`Blog post marked as ${nextStatus}`)
  }

  // Filter blogs
  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.category.toLowerCase().includes(searchTerm.toLowerCase())
    
    if (statusFilter === "all") return matchesSearch
    return matchesSearch && b.status === statusFilter
  })

  return (
    <div className="space-y-6">
      {/* Header controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card border p-4 rounded-xl">
        <div className="relative flex-1 w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search article titles, tags, categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 w-full bg-background"
          />
        </div>
        
        <div className="flex w-full sm:w-auto items-center gap-3">
          <Select value={statusFilter} onValueChange={(val: any) => setStatusFilter(val)}>
            <SelectTrigger className="w-[140px] bg-background">
              <SelectValue placeholder="Filter Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Drafts</SelectItem>
            </SelectContent>
          </Select>
          
          <Button onClick={openAddModal} className="shadow-md shadow-primary/10 cursor-pointer w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Add Article
          </Button>
        </div>
      </div>

      {/* Main Table card */}
      <Card className="border bg-card overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-bold flex items-center gap-2">
            <Newspaper className="h-5 w-5 text-primary" />
            Articles Manager
          </CardTitle>
          <CardDescription className="text-xs">
            Review views, likes, comments, and publish status of technical guides.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/30 dark:bg-card/40">
                <TableRow>
                  <TableHead className="w-[300px]">Article Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Published Date</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Engagement</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBlogs.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="h-32 text-center text-muted-foreground">
                      No blog posts found matching the criteria.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredBlogs.map((blog) => (
                    <TableRow key={blog.id} className="group hover:bg-muted/10 dark:hover:bg-card/25 transition-colors">
                      <TableCell className="font-semibold text-foreground">
                        <div className="flex flex-col">
                          <span>{blog.title}</span>
                          <span className="text-xs text-muted-foreground font-normal mt-0.5 max-w-[300px] truncate">
                            /{blog.slug}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="font-normal text-xs py-0 px-2 border-none">
                          {blog.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm font-medium text-muted-foreground">{blog.publishedAt}</TableCell>
                      <TableCell className="font-mono text-xs">{blog.views}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="h-3.5 w-3.5 text-blue-500/80" />
                            {blog.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-3.5 w-3.5 text-indigo-500/80" />
                            {blog.comments}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <button
                          onClick={() => toggleStatus(blog)}
                          className="cursor-pointer"
                        >
                          <Badge
                            className="transition-colors border-none py-0.5 px-2"
                            variant={blog.status === "published" ? "default" : "secondary"}
                          >
                            {blog.status === "published" ? "Published" : "Draft"}
                          </Badge>
                        </button>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted border-none bg-transparent">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem onClick={() => openEditModal(blog)} className="cursor-pointer">
                              <Edit3 className="mr-2 h-4 w-4" />
                              <span>Edit Details</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => toggleStatus(blog)} className="cursor-pointer">
                              {blog.status === "published" ? (
                                <>
                                  <EyeOff className="mr-2 h-4 w-4" />
                                  <span>Unpublish</span>
                                </>
                              ) : (
                                <>
                                  <Eye className="mr-2 h-4 w-4" />
                                  <span>Publish</span>
                                </>
                              )}
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              <a href={`/blogs/${blog.slug}`} target="_blank" rel="noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                <span>Preview Page</span>
                              </a>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() => handleDelete(blog.id)}
                              className="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Delete Article</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Add / Edit Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>{editingBlog ? "Edit Article Details" : "Create Technical Article"}</DialogTitle>
              <DialogDescription>
                Provide metadata. Changes impact the local state list.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="space-y-1">
                <Label htmlFor="title">Article Title *</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g. Optimizing Next.js Images"
                  required
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="optimizing-nextjs-images"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="category">Category *</Label>
                  <Input
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g. Next.js, CSS"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="status">Publish Status</Label>
                  <Select value={status} onValueChange={(val: any) => setStatus(val)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)} className="cursor-pointer">
                Cancel
              </Button>
              <Button type="submit" className="cursor-pointer">
                {editingBlog ? "Save Changes" : "Create Article"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
