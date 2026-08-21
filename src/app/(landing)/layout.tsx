import { LandingNavbar } from "@/components/shared/landing-navbar"
import { LandingFooter } from "@/components/shared/landing-footer"

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LandingNavbar />
      <main className="flex-1">{children}</main>
      <LandingFooter />
    </>
  )
}
