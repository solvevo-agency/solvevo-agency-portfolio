import { AboutPageView } from "@/features/landing/components/about/about-page-view"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Solvevo",
  description: "Learn more about the Solvevo team, our values, and our custom development process.",
}

export default function AboutPage() {
  return <AboutPageView />
}
