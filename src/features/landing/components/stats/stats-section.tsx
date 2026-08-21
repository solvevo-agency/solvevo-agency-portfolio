import { stats } from "../../static-data/stats.data"

export function StatsSection() {
  return (
    <section className="section-padding-x py-10 bg-muted/30 border-y">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 max-w-6xl mx-auto">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-primary">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-muted-foreground mt-2">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
