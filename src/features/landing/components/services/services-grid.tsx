import { megaMenuServices, megaMenuHiring } from "../../static-data/services-nav.data";
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
                id={service.href.split("#")[1]}
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
                  <Link href="/#contact" className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                    Let&apos;s talk <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Teams / Hiring */}
        <div>
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Dedicated Teams & Hiring</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
              Scale your engineering capacity instantly with our vetted professionals.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {megaMenuHiring.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-center justify-between rounded-xl border bg-secondary/20 p-5 transition-all hover:bg-muted hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background shadow-sm text-foreground group-hover:text-primary transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold">{item.title}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
