import { megaMenuServices } from "../../static-data/services-nav.data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesGrid() {
  return (
    <section className="section-padding-x section-padding-y bg-background">
      <div className="mx-auto max-w-7xl">
        
        {/* Core Services */}
        <div className="mb-24">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Core Capabilities</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
              Our multidisciplinary teams leverage cutting-edge tech stacks to deliver exceptional digital products.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {megaMenuServices.map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                id={service.slug}
              >
                <div>
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8">
                  <Link href={service.href} className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                    View Service <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
