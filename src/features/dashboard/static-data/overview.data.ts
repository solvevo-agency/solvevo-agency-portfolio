import type { OverviewStats, ChartDataPoint, ActivityLog } from "../types"

export const overviewStats: OverviewStats = {
  totalProjects: 12,
  totalBlogs: 6,
  pendingMessages: 3,
  totalViews: "45.2K",
}

export const chartData: ChartDataPoint[] = [
  { label: "Jan", views: 2400, revenue: 4000 },
  { label: "Feb", views: 1398, revenue: 3000 },
  { label: "Mar", views: 9800, revenue: 8000 },
  { label: "Apr", views: 3908, revenue: 2780 },
  { label: "May", views: 4800, revenue: 5890 },
  { label: "Jun", views: 3800, revenue: 2390 },
  { label: "Jul", views: 4300, revenue: 3490 },
  { label: "Aug", views: 8200, revenue: 9500 },
]

export const recentActivities: ActivityLog[] = [
  {
    id: "1",
    text: "New contact form submission from Sarah Mitchell (Nova Retail)",
    time: "25 minutes ago",
    type: "message",
  },
  {
    id: "2",
    text: "Project 'Nova Ecommerce' updated to 'published' status",
    time: "2 hours ago",
    type: "project",
  },
  {
    id: "3",
    text: "New blog post 'Why We Chose Next.js for Every Client Project' published",
    time: "1 day ago",
    type: "blog",
  },
  {
    id: "4",
    text: "Database backup completed successfully",
    time: "1 day ago",
    type: "system",
  },
  {
    id: "5",
    text: "Project 'Fintrack' updated to 'published' status",
    time: "3 days ago",
    type: "project",
  },
]
