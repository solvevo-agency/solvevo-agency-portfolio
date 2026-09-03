"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { megaMenuServices } from "../../static-data/services-nav.data";

export function ServiceDetailView({ slug }: { slug: string }) {
  const service = megaMenuServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComp = service.icon;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="section-padding-x py-16 lg:py-24 min-h-[70vh] bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-secondary text-primary shadow-inner border border-border mx-auto">
              <IconComp className="h-10 w-10" />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 border border-primary/20">
              Service
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight mb-8"
          >
            {service.title}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl"
          >
            {service.longDescription}
          </motion.p>
        </motion.div>

        {/* Features Bento Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col gap-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
            >
              What We Deliver
            </motion.h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto w-full">
            {service.features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="group relative p-8 rounded-[2rem] bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex items-start gap-5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary shadow-sm border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500 relative z-10">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                
                <div className="flex flex-col relative z-10 pt-2.5">
                  <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto w-full rounded-[3rem] bg-foreground text-background p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 relative z-10">
            Ready to build {service.title.toLowerCase()}?
          </h2>
          <p className="text-lg text-background/80 mb-10 max-w-2xl relative z-10">
            Book a free discovery call with our engineering team to discuss your project requirements, architecture, and timeline.
          </p>
          <Link 
            href="/#contact"
            className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 transition-all relative z-10 gap-2 group"
          >
            Book a Discovery Call
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
