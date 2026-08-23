import * as Icons from "lucide-react"
import { services } from "../../static-data/services.data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section id="services" className="section-padding-x section-padding-y">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          Build Software That Moves Your Business Forward
        </h2>
        <p className="text-muted-foreground mt-4">
          From idea to launch and beyond — we design, build, automate, and support software that helps businesses operate better, serve customers, and grow.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service) => {
          const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle
          return (
            <Card key={service.id} className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <CardHeader>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <IconComponent className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
