"use client";

import * as Icons from "lucide-react";
import { motion } from "motion/react";
import { services } from "../../static-data/services.data";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-[#02040a] -z-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 blur-[120px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-cyan-500/5 blur-[100px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent drop-shadow-sm"
          >
            Build Software That Moves Your Business Forward
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground/80 leading-relaxed"
          >
            From idea to launch and beyond — we design, build, automate, and support software that helps businesses operate better, serve customers, and grow.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group relative h-full bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 overflow-hidden backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  
                  {/* Subtle top inner glow */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating glow orb behind the icon */}
                  <div className="absolute top-8 left-8 w-16 h-16 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Icon */}
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-cyan-300 shadow-inner group-hover:text-white group-hover:bg-primary/80 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all duration-500">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="relative text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {service.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
