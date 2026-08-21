"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, Bell, User, Settings } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DashboardSidebar } from "./dashboard-sidebar"
import { useAppSelector } from "@/store/hooks"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function DashboardNavbar() {
  const pathname = usePathname()
  const adminName = useAppSelector((state) => state.auth.adminName) || "Admin User"
  const [isOpen, setIsOpen] = useState(false)

  // Get active title
  const getPageTitle = () => {
    switch (pathname) {
      case "/dashboard":
        return "Overview"
      case "/dashboard/projects":
        return "Projects Portfolio"
      case "/dashboard/blogs":
        return "Blog Publications"
      case "/dashboard/messages":
        return "Client Messages"
      default:
        return "Dashboard"
    }
  }

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b bg-background/80 backdrop-blur-md px-4 md:px-8">
      {/* Left side: Mobile menu & Page Title */}
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar sheet trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9 text-muted-foreground hover:text-foreground border"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[260px] border-r-0">
            <DashboardSidebar onLinkClick={() => setIsOpen(false)} />
          </SheetContent>
        </Sheet>

        <h1 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
          {getPageTitle()}
        </h1>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center gap-4">
        <ThemeToggle />

        {/* Notifications mock */}
        <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-full border text-muted-foreground hover:text-foreground">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 flex h-2 w-2 rounded-full bg-primary" />
        </Button>

        {/* User drop down menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full border bg-muted/20 p-0 flex items-center justify-center">
              <User className="h-4 w-4 text-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{adminName}</p>
                <p className="text-xs leading-none text-muted-foreground">admin@solvevo.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Profile Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>System Settings</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
