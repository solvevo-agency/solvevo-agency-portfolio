export interface OverviewStats {
  totalProjects: number
  totalBlogs: number
  pendingMessages: number
  totalViews: string
}

export interface ChartDataPoint {
  label: string
  views: number
  revenue: number
}

export interface ActivityLog {
  id: string
  text: string
  time: string
  type: "project" | "blog" | "message" | "system"
}

export interface DashboardProject {
  id: string
  title: string
  slug: string
  description: string
  clientName: string
  budget: string
  status: "published" | "draft"
  views: number
  tags: string[]
  completedAt: string
}

export interface DashboardBlog {
  id: string
  title: string
  slug: string
  category: string
  status: "published" | "draft"
  views: number
  likes: number
  comments: number
  publishedAt: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  date: string
  read: boolean
}
