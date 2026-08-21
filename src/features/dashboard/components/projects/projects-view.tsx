"use client"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Plus, Search, MoreVertical, Trash2, Edit3, ExternalLink, Eye, EyeOff, FolderKanban } from "lucide-react"
import { dashboardProjects as initialProjects } from "../../static-data/projects.data"
import type { DashboardProject } from "../../types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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

export function ProjectsView() {
  const searchParams = useSearchParams()
  const [projects, setProjects] = useState<DashboardProject[]>(initialProjects)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all")

  // Modal / Form state
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<DashboardProject | null>(null)
  
  // Fields state
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [description, setDescription] = useState("")
  const [clientName, setClientName] = useState("")
  const [budget, setBudget] = useState("")
  const [status, setStatus] = useState<"published" | "draft">("draft")
  const [tags, setTags] = useState("")

  // Auto-open modal if URL query has ?new=true
  useEffect(() => {
    if (searchParams.get("new") === "true") {
      openAddModal()
    }
  }, [searchParams])

  const openAddModal = () => {
    setEditingProject(null)
    setTitle("")
    setSlug("")
    setDescription("")
    setClientName("")
    setBudget("")
    setStatus("draft")
    setTags("")
    setIsFormOpen(true)
  }

  const openEditModal = (project: DashboardProject) => {
    setEditingProject(project)
    setTitle(project.title)
    setSlug(project.slug)
    setDescription(project.description)
    setClientName(project.clientName)
    setBudget(project.budget)
    setStatus(project.status)
    setTags(project.tags.join(", "))
    setIsFormOpen(true)
  }

  // Handle Slug generation
  const handleTitleChange = (val: string) => {
    setTitle(val)
    if (!editingProject) {
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
    if (!title || !slug || !description) {
      toast.error("Please fill in all required fields")
      return
    }

    const tagArray = tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0)

    if (editingProject) {
      // Edit mode
      setProjects((prev) =>
        prev.map((p) =>
          p.id === editingProject.id
            ? {
                ...p,
                title,
                slug,
                description,
                clientName,
                budget,
                status,
                tags: tagArray,
              }
            : p
        )
      )
      toast.success("Project updated successfully")
    } else {
      // Add mode
      const newProj: DashboardProject = {
        id: (projects.length + 1).toString(),
        title,
        slug,
        description,
        clientName: clientName || "N/A",
        budget: budget || "N/A",
        status,
        views: 0,
        tags: tagArray,
        completedAt: new Date().toISOString().split("T")[0],
      }
      setProjects((prev) => [newProj, ...prev])
      toast.success("New project created successfully")
    }
    setIsFormOpen(false)
  }

  const handleDelete = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id))
    toast.success("Project deleted successfully")
  }

  const toggleStatus = (project: DashboardProject) => {
    const nextStatus = project.status === "published" ? "draft" : "published"
    setProjects((prev) =>
      prev.map((p) => (p.id === project.id ? { ...p, status: nextStatus } : p))
    )
    toast.success(`Project marked as ${nextStatus}`)
  }

  // Filter projects
  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
    
    if (statusFilter === "all") return matchesSearch
    return matchesSearch && p.status === statusFilter
  })

  return (
    <div className="space-y-6">
      {/* Header card with quick search controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card border p-4 rounded-xl">
        <div className="relative flex-1 w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects, client, tags..."
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
            Add Project
          </Button>
        </div>
      </div>

      {/* Main Table view */}
      <Card className="border bg-card overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-bold flex items-center gap-2">
            <FolderKanban className="h-5 w-5 text-primary" />
            Projects Register
          </CardTitle>
          <CardDescription className="text-xs">
            Manage your project archive, live links, and publishing metadata.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/30 dark:bg-card/40">
                <TableRow>
                  <TableHead className="w-[200px]">Project</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProjects.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="h-32 text-center text-muted-foreground">
                      No projects found matching the criteria.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredProjects.map((project) => (
                    <TableRow key={project.id} className="group hover:bg-muted/10 dark:hover:bg-card/25 transition-colors">
                      <TableCell className="font-semibold text-foreground">
                        <div className="flex flex-col">
                          <span>{project.title}</span>
                          <span className="text-xs text-muted-foreground font-normal mt-0.5 max-w-[200px] truncate">
                            {project.description}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{project.clientName}</TableCell>
                      <TableCell className="font-medium text-foreground">{project.budget}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-[10px] py-0 px-1.5 font-normal">
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 3 && (
                            <Badge variant="outline" className="text-[10px] py-0 px-1 font-normal">
                              +{project.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-xs">{project.views}</TableCell>
                      <TableCell>
                        <button
                          onClick={() => toggleStatus(project)}
                          className="cursor-pointer"
                        >
                          <Badge
                            className="transition-colors border-none py-0.5 px-2"
                            variant={project.status === "published" ? "default" : "secondary"}
                          >
                            {project.status === "published" ? "Published" : "Draft"}
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
                            <DropdownMenuItem onClick={() => openEditModal(project)} className="cursor-pointer">
                              <Edit3 className="mr-2 h-4 w-4" />
                              <span>Edit Details</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => toggleStatus(project)} className="cursor-pointer">
                              {project.status === "published" ? (
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
                              <a href={`/projects/${project.slug}`} target="_blank" rel="noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                <span>Preview Page</span>
                              </a>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() => handleDelete(project.id)}
                              className="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Delete Project</span>
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
        <DialogContent className="sm:max-w-[500px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>{editingProject ? "Edit Project Details" : "Create New Project"}</DialogTitle>
              <DialogDescription>
                Specify portfolio metadata. Changes affect the local interactive dashboard state.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="title">Project Title *</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. Nova Retail Portal"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="slug">Slug *</Label>
                  <Input
                    id="slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="nova-retail-portal"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="description">Short Description *</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter project summary..."
                  className="h-20"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="clientName">Client Name</Label>
                  <Input
                    id="clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Nova Retail Inc."
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="budget">Budget Estimate</Label>
                  <Input
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g. $15,000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Next.js, Tailwind, Stripe"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="status">Initial Status</Label>
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
                {editingProject ? "Save Changes" : "Create Project"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
