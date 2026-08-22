import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Compass, Eye, ShieldCheck } from "lucide-react";

export function AboutPageView() {
  const values = [
    {
      icon: Compass,
      title: "Clarity & Direction",
      desc: "We work closely with founders to map out clear development pipelines. No vagueness, just milestones and ship dates.",
    },
    {
      icon: Award,
      title: "Technical Excellence",
      desc: "Our stack (Next.js, TypeScript, Tailwind) is selected for scalability and speed. We write clean, linted, high-quality code.",
    },
    {
      icon: ShieldCheck,
      title: "Reliability & Support",
      desc: "When we say we ship, we ship. We guarantee bug-free deployments and post-launch support to keep things running.",
    },
    {
      icon: Eye,
      title: "Transparency",
      desc: "Weekly check-ins and shared code repos ensure you always know exactly where the project stands. No surprises.",
    },
  ];

  return (
    <div className="section-padding-x py-8 lg:py-12 min-h-[70vh]">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Banner Section */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              We Craft Software That Ships
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              At Solvevo, we believe that great software is defined by its
              ability to deliver real-world value. We don&apos;t just build
              specs; we focus on ship speed, UX excellence, and robust backend
              architectures.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded by developers who were tired of bloated agency processes,
              Solvevo was built to be fast, clear, and highly skilled. We act as
              a trusted extension of your technical or founding team.
            </p>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border bg-card shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Solvevo team collaborating"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Agency Values Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Our Core Values
            </h2>
            <p className="text-muted-foreground mt-2">
              The fundamental principles that guide our development team and
              client relationships.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <Card key={idx} className="border bg-card">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {val.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
