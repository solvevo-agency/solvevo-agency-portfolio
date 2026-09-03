import { ServiceDetailView } from "@/features/landing/components/services/service-detail-view";
import { megaMenuServices } from "@/features/landing/static-data/services-nav.data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return megaMenuServices.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  
  const service = megaMenuServices.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailView slug={resolvedParams.slug} />;
}
