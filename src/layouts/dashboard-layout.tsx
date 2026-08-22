import { DashboardSidebar } from "@/components/shared/dashboard-sidebar"
import { DashboardNavbar } from "@/components/shared/dashboard-navbar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - Desktop only */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 border-r bg-card">
        <DashboardSidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 md:pl-64">
        <DashboardNavbar />
        <main className="flex-1 p-4 md:p-8 bg-muted/10 dark:bg-card/20 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
