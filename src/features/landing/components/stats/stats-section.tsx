"use client";

import { motion } from "motion/react";
import { stats } from "../../static-data/stats.data";

export function StatsSection() {
  return (
    <section className="relative py-16 overflow-hidden bg-background border-y border-border/50 dark:border-white/5">
      {/* Subtle border and ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/5 dark:via-white/[0.02] to-transparent" />
      
      {/* Glow behind the stats */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 divide-x divide-border/50 dark:divide-white/5">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-primary to-primary/80 dark:from-white dark:via-primary/50 dark:to-primary bg-clip-text text-transparent drop-shadow-sm">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground dark:text-white/50 mt-3 uppercase tracking-[0.15em]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
