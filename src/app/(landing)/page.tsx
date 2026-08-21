import { HeroSection } from "@/features/landing/components/hero/hero-section"
import { StatsSection } from "@/features/landing/components/stats/stats-section"
import { ServicesSection } from "@/features/landing/components/services/services-section"
import { ProjectsSection } from "@/features/landing/components/projects/projects-section"
import { ReviewsSection } from "@/features/landing/components/reviews/reviews-section"
import { FaqSection } from "@/features/landing/components/faq/faq-section"
import { BlogsSection } from "@/features/landing/components/blogs/blogs-section"
import { ContactSection } from "@/features/landing/components/contact/contact-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <ReviewsSection />
      <FaqSection />
      <BlogsSection />
      <ContactSection />
    </>
  )
}
