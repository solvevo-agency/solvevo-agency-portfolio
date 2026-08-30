"use client"
import Link from "next/link"
import { FolderKanban, Newspaper, Mail, TrendingUp, Clock, Sparkles, MessageSquare, Plus, ChevronRight } from "lucide-react"
import { dashboardProjects } from "../../static-data/projects.data"
import { dashboardBlogs } from "../../static-data/blogs.data"
import { contactMessages } from "../../static-data/messages.data"
import { recentActivities, chartData } from "../../static-data/overview.data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function OverviewView() {
  const totalProjects = dashboardProjects.length
  const totalBlogs = dashboardBlogs.length
  const pendingMessages = contactMessages.filter((m) => !m.read).length
  const totalViews = "45.2K"

  // Quick stats array
  const stats = [
    {
      title: "Total Projects",
      value: totalProjects,
      desc: "Delivered & active portfolios",
      icon: FolderKanban,
      color: "text-blue-500 bg-blue-500/10",
      href: "/dashboard/projects",
    },
    {
      title: "Blog Articles",
      value: totalBlogs,
      desc: "Published insights & news",
      icon: Newspaper,
      color: "text-emerald-500 bg-emerald-500/10",
      href: "/dashboard/blogs",
    },
    {
      title: "Unread Messages",
      value: pendingMessages,
      desc: "Awaiting response",
      icon: Mail,
      color: "text-indigo-500 bg-indigo-500/10",
      href: "/dashboard/messages",
      alert: pendingMessages > 0,
    },
    {
      title: "Platform Traffic",
      value: totalViews,
      desc: "+12.4% traffic this month",
      icon: TrendingUp,
      color: "text-violet-500 bg-violet-500/10",
    },
  ]

  // Render a responsive SVG line path for views
  // Chart width 500, height 120
  const maxVal = 10000
  const points = chartData.map((d, i) => {
    const x = (i / (chartData.length - 1)) * 500
    const y = 120 - (d.views / maxVal) * 100
    return { x, y }
  })
  
  const linePath = points.map((p) => `${p.x},${p.y}`).join(" ")
  const areaPath = `0,120 ${linePath} 500,120`

  return (
    <div className="space-y-8">
      {/* Welcome banner */}
      <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground flex items-center gap-2">
            Welcome to the Console <Sparkles className="h-5 w-5 text-primary animate-pulse" />
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your digital footprint, projects, technical blog posts, and review contact messages.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/dashboard/projects?new=true">
            <Button size="sm" className="shadow-md shadow-primary/10 cursor-pointer">
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Button>
          </Link>
          <Link href="/dashboard/blogs?new=true">
            <Button size="sm" variant="outline" className="cursor-pointer">
              <Plus className="mr-2 h-4 w-4" />
              Add Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          const content = (
            <Card className="hover:shadow-md transition-all duration-300 border bg-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-semibold text-muted-foreground">{stat.title}</CardTitle>
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-extrabold tracking-tight flex items-baseline gap-2">
                  <span>{stat.value}</span>
                  {stat.alert && (
                    <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
              </CardContent>
            </Card>
          )

          return stat.href ? (
            <Link href={stat.href} key={stat.title}>
              {content}
            </Link>
          ) : (
            <div key={stat.title}>{content}</div>
          )
        })}
      </div>

      {/* Double Column Layout */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Graphic SVG Chart Card */}
        <Card className="lg:col-span-4 border bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
              <CardTitle className="text-base font-bold">Monthly Reach</CardTitle>
              <CardDescription className="text-xs">Unique platform interactions this year</CardDescription>
            </div>
            <div className="flex gap-4 text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>Page Views</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="w-full relative h-[140px] flex items-end">
              {/* Dynamic SVG chart */}
              <svg className="w-full h-full overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Y-axis gridlines */}
                <line x1="0" y1="30" x2="500" y2="30" stroke="currentColor" className="text-border" strokeWidth="0.5" strokeDasharray="4 4" />
                <line x1="0" y1="60" x2="500" y2="60" stroke="currentColor" className="text-border" strokeWidth="0.5" strokeDasharray="4 4" />
                <line x1="0" y1="90" x2="500" y2="90" stroke="currentColor" className="text-border" strokeWidth="0.5" strokeDasharray="4 4" />
                <line x1="0" y1="120" x2="500" y2="120" stroke="currentColor" className="text-border" strokeWidth="0.5" />

                {/* Area under curve */}
                <polygon points={areaPath} fill="url(#viewsGrad)" />

                {/* Main line */}
                <polyline
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="3"
                  points={linePath}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Intersect points */}
                {points.map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r="4"
                    className="fill-background stroke-primary stroke-[2px] transition-all hover:r-[6]"
                  />
                ))}
              </svg>
            </div>
            
            {/* Chart X Labels */}
            <div className="flex justify-between text-[10px] text-muted-foreground font-medium mt-4 px-1">
              {chartData.map((d, i) => (
                <span key={i} className="w-[50px] text-center">{d.label}</span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity feed */}
        <Card className="lg:col-span-3 border bg-card">
          <CardHeader>
            <CardTitle className="text-base font-bold">Recent Activities</CardTitle>
            <CardDescription className="text-xs">System logs & notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((act) => {
                const getColors = (type: string) => {
                  switch (type) {
                    case "project":
                      return "bg-blue-500/10 text-blue-500"
                    case "blog":
                      return "bg-emerald-500/10 text-emerald-500"
                    case "message":
                      return "bg-indigo-500/10 text-indigo-500"
                    default:
                      return "bg-amber-500/10 text-amber-500"
                  }
                }
                const getIcon = (type: string) => {
                  switch (type) {
                    case "project":
                      return FolderKanban
                    case "blog":
                      return Newspaper
                    case "message":
                      return MessageSquare
                    default:
                      return Clock
                  }
                }
                const ActIcon = getIcon(act.type)

                return (
                  <div key={act.id} className="flex items-start gap-3 text-sm">
                    <div className={`p-2 rounded-lg shrink-0 ${getColors(act.type)}`}>
                      <ActIcon className="h-4 w-4" />
                    </div>
                    <div className="space-y-0.5 min-w-0 flex-1">
                      <p className="font-medium text-foreground leading-snug break-words">{act.text}</p>
                      <span className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <Clock className="h-3 w-3" />
                        {act.time}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links section */}
      <Card className="border bg-card">
        <CardHeader>
          <CardTitle className="text-base font-bold">Action Quick Links</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-3">
          <Link href="/dashboard/projects" className="group flex items-center justify-between p-4 border rounded-xl hover:bg-accent/40 transition-colors">
            <div className="space-y-1">
              <p className="font-semibold text-sm">Portfolio Projects</p>
              <p className="text-xs text-muted-foreground">Manage your work listings</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-0.5" />
          </Link>
          <Link href="/dashboard/blogs" className="group flex items-center justify-between p-4 border rounded-xl hover:bg-accent/40 transition-colors">
            <div className="space-y-1">
              <p className="font-semibold text-sm">Technical Blog</p>
              <p className="text-xs text-muted-foreground">Draft and publish articles</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-0.5" />
          </Link>
          <Link href="/dashboard/messages" className="group flex items-center justify-between p-4 border rounded-xl hover:bg-accent/40 transition-colors">
            <div className="space-y-1">
              <p className="font-semibold text-sm">Contact Inquiries</p>
              <p className="text-xs text-muted-foreground">Review form submissions</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-0.5" />
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
