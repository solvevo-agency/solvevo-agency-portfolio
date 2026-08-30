import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden py-24 section-padding-x lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium mb-6">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          End-to-End Digital Solutions
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          We Build Software That <span className="text-primary">Scales</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          From AI-driven applications to robust cloud infrastructures, our dedicated teams design and engineer solutions that propel your business forward.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/#contact" className={cn(buttonVariants({ size: "lg" }), "min-w-[150px]")}>
            Book a Consultation
          </Link>
          <Link href="/projects" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "min-w-[150px]")}>
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
