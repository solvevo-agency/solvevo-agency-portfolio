"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, FolderKanban, Newspaper, Mail, LogOut, Sparkles, User } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { logout } from "@/store/slices/auth.slice"
import { dashboardNavLinks } from "@/config/nav.config"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

const iconMap = {
  LayoutDashboard,
  FolderKanban,
  Newspaper,
  Mail,
}

interface DashboardSidebarProps {
  onLinkClick?: () => void
}

export function DashboardSidebar({ onLinkClick }: DashboardSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const adminName = useAppSelector((state) => state.auth.adminName) || "Admin User"

  const handleLogout = () => {
    // Clear cookie
    document.cookie = "solvevo_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;"
    // Dispatch logout
    dispatch(logout())
    toast.success("Logged out successfully")
    router.push("/dashboard/login")
  }

  return (
    <div className="flex h-full flex-col justify-between p-4 bg-card border-r border-border">
      <div className="space-y-6">
        {/* Branding header */}
        <Link href="/dashboard" className="flex items-center gap-2 px-2 py-1 font-sans text-xl font-bold tracking-tight">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/20">
            <Sparkles className="h-5 w-5 animate-pulse" />
          </div>
          <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent dark:to-indigo-400">
            Solvevo Hub
          </span>
        </Link>

        {/* Navigation list */}
        <nav className="space-y-1">
          {dashboardNavLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap] || LayoutDashboard
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onLinkClick}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{link.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* User profile / Logout panel at bottom */}
      <div className="border-t border-border pt-4 mt-auto space-y-3">
        <div className="flex items-center gap-3 px-2 py-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <User className="h-4 w-4" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-semibold truncate text-foreground">{adminName}</span>
            <span className="text-xs text-muted-foreground truncate">Administrator</span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-destructive hover:bg-destructive/10 transition-colors cursor-pointer"
        >
          <LogOut className="h-4 w-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  )
}
