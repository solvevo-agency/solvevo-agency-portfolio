"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function HeroGallery() {
  return (
    <div className="relative w-full h-full min-h-[550px] flex items-center justify-center p-4 lg:p-12 overflow-hidden rounded-[2.5rem]">
      
      {/* --- BACKGROUND: CONCENTRIC CIRCLES --- */}
      <div 
        className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)"
        }}
      >
        <svg
          viewBox="0 0 1000 1000"
          className="w-[200%] max-w-none h-auto object-cover animate-[spin_120s_linear_infinite]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <circle
              key={i}
              cx="500"
              cy="500"
              r={(i + 1) * 35}
              stroke="currentColor"
              strokeWidth={i % 3 === 0 ? "1" : "0.5"}
              className={i % 3 === 0 ? "text-primary/20" : "text-primary/10"}
              strokeDasharray={i % 2 === 0 ? "4 6" : "none"}
            />
          ))}
        </svg>
      </div>

      {/* Deep Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent z-0 pointer-events-none" />

      {/* --- STAGGERED 2x2 GRID --- */}
      <div className="relative z-10 w-full max-w-[700px] grid grid-cols-2 gap-6 sm:gap-10 items-center">
        
        {/* Top Left: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="col-span-1"
        >
          <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/40 border border-border/50 dark:border-white/10 group">
             {/* Subtle top edge highlight */}
             <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-20" />
             <Image 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
               alt="Team Collaboration"
               fill
               className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />
          </div>
        </motion.div>

        {/* Top Right: Stat */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="col-span-1 flex flex-col justify-center items-center text-center p-8 bg-card dark:bg-white/[0.02] border border-border/50 dark:border-white/[0.05] rounded-[2rem] backdrop-blur-sm shadow-sm"
        >
          <h3 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-primary to-primary/80 dark:from-white dark:via-primary/50 dark:to-primary bg-clip-text text-transparent">
            900+
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground dark:text-primary/80 font-semibold tracking-[0.1em] uppercase">
            Tech Professionals
          </p>
        </motion.div>

        {/* Bottom Left: Stat */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="col-span-1 flex flex-col justify-center items-center text-center p-8 bg-card dark:bg-white/[0.02] border border-border/50 dark:border-white/[0.05] rounded-[2rem] backdrop-blur-sm shadow-sm"
        >
          <h3 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-primary to-primary/80 dark:from-white dark:via-primary/50 dark:to-primary bg-clip-text text-transparent">
            36+
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground dark:text-primary/80 font-semibold tracking-[0.1em] uppercase">
            Countries Served
          </p>
        </motion.div>

        {/* Bottom Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="col-span-1"
        >
          <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/40 border border-border/50 dark:border-white/10 group">
             {/* Subtle top edge highlight */}
             <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-20" />
             <Image 
               src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
               alt="Global Operations"
               fill
               className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
