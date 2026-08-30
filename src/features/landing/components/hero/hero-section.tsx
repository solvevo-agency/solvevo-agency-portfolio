"use client";
import Image from "next/image";
import Link from "next/link";
import { HeroGallery } from "./hero-gallery";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Only animate the left content, as the gallery has its own internal animations
      tl.fromTo(
        ".hero-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
      )
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.5 },
          "-=0.3",
        )
        .fromTo(
          ".hero-image",
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.8 },
          "-=0.5",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="section-padding-x section-padding-y grid items-center gap-12 md:grid-cols-2 overflow-hidden"
    >
      {/* Left side: content */}
      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="hero-title text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
          We design and build software that{" "}
          <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
            ships.
          </span>
        </h1>
        <p className="hero-desc text-lg text-muted-foreground">
          Solvevo is a premium development agency. We craft cutting-edge Next.js
          sites, mobile apps, and custom solutions with clean architecture and
          gorgeous designs.
        </p>
        <div className="hero-cta flex flex-wrap gap-4">
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]",
            )}
          >
            Start a Project
          </Link>
          <Link
            href="#projects"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "transition-all hover:bg-muted hover:scale-[1.02] active:scale-[0.98]",
            )}
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Right side: image */}
      <div className="hero-image relative flex justify-center items-center h-full w-full">
        <HeroGallery />
      </div>
    </section>
  );
}
