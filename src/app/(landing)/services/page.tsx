import { ServicesHero } from "@/features/landing/components/services/services-hero";
import { ServicesGrid } from "@/features/landing/components/services/services-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Solvevo Agency",
  description: "End-to-End Digital Solutions for modern businesses.",
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ServicesHero />
      <ServicesGrid />
    </main>
  );
}
