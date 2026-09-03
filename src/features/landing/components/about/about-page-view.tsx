"use client";

import Image from "next/image";
import { motion } from "motion/react";
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
      <div className="max-w-7xl mx-auto flex flex-col gap-24 lg:gap-32">
        
        {/* Banner Section */}
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col gap-8"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold tracking-widest uppercase border border-primary/20">
                About Us
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight"
            >
              We Craft Software That <span className="text-primary">Ships.</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="flex flex-col gap-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                At Solvevo, we believe that great software is defined by its
                ability to deliver real-world value. We don&apos;t just build
                specs; we focus on ship speed, UX excellence, and robust backend
                architectures.
              </p>
              <p>
                Founded by developers who were tired of bloated agency processes,
                Solvevo was built to be fast, clear, and highly skilled. We act as
                a trusted extension of your technical or founding team.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative aspect-square md:aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Solvevo team collaborating"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Agency Values Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col gap-16"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.div variants={itemVariants}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 border border-border">
                Our DNA
              </span>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-6"
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              The fundamental principles that guide our development team, our process, and our client relationships.
            </motion.p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-6xl mx-auto w-full">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="group relative p-8 md:p-10 rounded-[2rem] bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col gap-6 h-full">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500 shadow-inner">
                      <IconComp className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {val.title}
                      </h4>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
