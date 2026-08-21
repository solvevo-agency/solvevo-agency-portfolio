"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAppSelector } from "@/store/hooks"
import { DashboardLayout } from "@/layouts/dashboard-layout"
import { Loader2 } from "lucide-react"

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const reduxAuth = useAppSelector((state) => state.auth.isAuthenticated)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    // Check if session cookie exists
    const hasCookie = document.cookie.split(";").some((item) => item.trim().startsWith("solvevo_session="))
    
    if (!reduxAuth && !hasCookie) {
      router.replace("/dashboard/login")
    } else {
      setIsChecking(false)
    }
  }, [reduxAuth, router])

  if (isChecking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="text-sm text-muted-foreground font-medium">Authorizing access...</span>
        </div>
      </div>
    )
  }

  return <DashboardLayout>{children}</DashboardLayout>
}
