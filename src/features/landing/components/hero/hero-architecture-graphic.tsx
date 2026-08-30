"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Database, Server, Code2, MonitorSmartphone, CheckCircle } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(MotionPathPlugin);
}

export function HeroArchitectureGraphic() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll<SVGPathElement>(".c-line");
    paths.forEach((p, i) => {
      const len = p.getTotalLength();
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(p, { strokeDashoffset: 0, duration: 1.8, ease: "power2.inOut", delay: i * 0.2 + 0.5 });
    });

    const dots = svgRef.current.querySelectorAll<SVGCircleElement>(".c-dot");
    dots.forEach((dot, i) => {
      const path = paths[i % paths.length];
      if (!path) return;
      gsap.set(dot, { opacity: 0 });
      gsap.to(dot, { opacity: 1, duration: 0.3, delay: i * 0.4 + 1.5 });
      gsap.to(dot, {
        motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
        duration: 3 + i * 0.5,
        repeat: -1,
        ease: "none",
        delay: i * 0.4 + 1.5,
      });
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-[#030712]">
      {/* Ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(6,78,130,0.22),transparent)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/8 blur-[90px] rounded-full pointer-events-none" />
      {/* Dot grid */}
      <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_85%_85%_at_50%_50%,black,transparent)] pointer-events-none" />

      {/* Status pill */}
      <div className="relative z-10 flex justify-center pt-5 pb-1">
        <div className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1">
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
          />
          <span className="text-[10px] font-medium text-white/50 tracking-wider">SYSTEMS OPERATIONAL</span>
        </div>
      </div>

      {/* SVG connection layer — sits above grid, below panels */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 960 500"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="f-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* TL panel center → hub center */}
        <path className="c-line" d="M 230 165 C 340 165, 440 250, 480 250"
          stroke="#0ea5e9" strokeWidth="1" fill="none" opacity="0.5" />
        {/* TR panel center → hub center */}
        <path className="c-line" d="M 730 165 C 620 165, 520 250, 480 250"
          stroke="#0ea5e9" strokeWidth="1" fill="none" opacity="0.5" />
        {/* BL panel center → hub center */}
        <path className="c-line" d="M 230 390 C 340 390, 440 320, 480 320"
          stroke="#0ea5e9" strokeWidth="1" fill="none" opacity="0.5" />
        {/* BR panel center → hub center */}
        <path className="c-line" d="M 730 390 C 620 390, 520 320, 480 320"
          stroke="#0ea5e9" strokeWidth="1" fill="none" opacity="0.5" />

        {/* Node dots at panel ends */}
        <circle cx="230" cy="165" r="3" fill="#22d3ee" opacity="0.7" filter="url(#f-glow)" />
        <circle cx="730" cy="165" r="3" fill="#22d3ee" opacity="0.7" filter="url(#f-glow)" />
        <circle cx="230" cy="390" r="3" fill="#22d3ee" opacity="0.7" filter="url(#f-glow)" />
        <circle cx="730" cy="390" r="3" fill="#22d3ee" opacity="0.7" filter="url(#f-glow)" />
        <circle cx="480" cy="285" r="4" fill="#22d3ee" opacity="0.4" filter="url(#f-glow)" />

        {/* Data particles */}
        <circle className="c-dot" r="3" fill="#22d3ee" filter="url(#f-glow)" opacity="0" />
        <circle className="c-dot" r="3" fill="#38bdf8" filter="url(#f-glow)" opacity="0" />
        <circle className="c-dot" r="2.5" fill="#a5f3fc" filter="url(#f-glow)" opacity="0" />
        <circle className="c-dot" r="3" fill="#22d3ee" filter="url(#f-glow)" opacity="0" />
      </svg>

      {/* MAIN GRID LAYOUT */}
      <div className="relative z-20 grid grid-cols-[1fr_auto_1fr] gap-4 px-5 pb-5 pt-3 items-center">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4">
          {/* Panel 1: Web & Mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Panel icon={<MonitorSmartphone className="w-3.5 h-3.5 text-cyan-400" />} title="WEB & MOBILE" accentColor="cyan">
              <DataRow label="Next.js App" value="Active" valueColor="text-emerald-400" />
              <DataRow label="Mobile App" value="Synced" valueColor="text-cyan-300" />
              <DataRow label="Performance" value="98.4ms" valueColor="text-violet-400" />
              <div className="mt-2 space-y-1.5">
                <ProgressBar label="Load" pct={72} color="bg-cyan-400" />
                <ProgressBar label="API" pct={91} color="bg-indigo-400" />
              </div>
            </Panel>
          </motion.div>

          {/* Panel 3: Infrastructure */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Panel icon={<Server className="w-3.5 h-3.5 text-emerald-400" />} title="INFRASTRUCTURE" accentColor="emerald">
              <DataRow label="Edge Nodes" value="Global" valueColor="text-emerald-400" />
              <DataRow label="Auto-Scaling" value="Enabled" valueColor="text-cyan-300" />
              <DataRow label="Uptime SLA" value="99.99%" valueColor="text-violet-400" />
              <div className="flex gap-1 items-end h-8 mt-2">
                {[55, 38, 72, 48, 85, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [`${h}%`, `${Math.min(h + 25, 100)}%`, `${h}%`] }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                    className="flex-1 bg-emerald-400/40 rounded-t-sm"
                  />
                ))}
              </div>
            </Panel>
          </motion.div>
        </div>

        {/* CENTER COLUMN — 3D Hub */}
        <div className="flex flex-col items-center justify-center gap-3 w-[200px]">
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Glow rings behind hub */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.25, 0.12] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-48 h-48 rounded-full bg-cyan-400/20 blur-3xl"
            />
            <Image
              src="/images/solvevo-hub-3d.png"
              alt="Solvevo Engineering Hub"
              width={176}
              height={176}
              className="relative z-10 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)]"
            />
          </motion.div>

          {/* Hub label */}
          <div className="text-center">
            <p className="text-[9px] font-bold tracking-[0.15em] text-cyan-300/80 uppercase">Solvevo Hub</p>
            <p className="text-[8px] text-white/25 tracking-widest mt-0.5">Custom Ecosystem</p>
          </div>

          {/* Success Framework pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl p-3 relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
            <p className="text-[8px] font-bold tracking-[0.12em] text-white/50 text-center mb-2 uppercase">Framework</p>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
              {["Clean Arch", "Reusable", "High Perf", "Fast Ship"].map((item) => (
                <span key={item} className="flex items-center gap-1 text-[8px] text-white/40">
                  <CheckCircle className="w-2.5 h-2.5 text-cyan-500 flex-shrink-0" />{item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4">
          {/* Panel 2: Data & API */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Panel icon={<Database className="w-3.5 h-3.5 text-indigo-400" />} title="DATA & API" accentColor="indigo">
              <div className="flex gap-1.5 mb-2">
                <DbBadge label="PostgreSQL" />
                <DbBadge label="MongoDB" />
              </div>
              <DataRow label="GraphQL API" value="99.9% Up" valueColor="text-emerald-400" />
              <DataRow label="REST Endpoints" value="247 Active" valueColor="text-cyan-300" />
              <div className="mt-2 h-px bg-white/5 relative overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                />
              </div>
              <p className="text-[8.5px] text-white/25 mt-1.5">Real-time sync active</p>
            </Panel>
          </motion.div>

          {/* Panel 4: Design System */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Panel icon={<Code2 className="w-3.5 h-3.5 text-violet-400" />} title="DESIGN SYSTEM" accentColor="violet">
              <DataRow label="Component Library" value="340+ Items" valueColor="text-violet-400" />
              <DataRow label="Design Tokens" value="Active" valueColor="text-cyan-300" />
              <DataRow label="Figma Sync" value="Live" valueColor="text-emerald-400" />
              <div className="flex gap-2 mt-2.5 items-center">
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
                <div className="w-5 h-5 rounded bg-gradient-to-tr from-violet-500 to-indigo-400 shadow-[0_0_8px_rgba(167,139,250,0.3)]" />
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 w-full bg-white/8 rounded-full" />
                  <div className="h-1.5 w-3/4 bg-white/5 rounded-full" />
                </div>
              </div>
            </Panel>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ── Sub-components ──────────────────────────────────────────────────────────

function Panel({
  icon, title, accentColor, children,
}: {
  icon: React.ReactNode;
  title: string;
  accentColor: "cyan" | "emerald" | "indigo" | "violet";
  children: React.ReactNode;
}) {
  const borderMap = {
    cyan:    "via-cyan-500/30",
    emerald: "via-emerald-500/30",
    indigo:  "via-indigo-500/30",
    violet:  "via-violet-500/30",
  };
  return (
    <div className="relative bg-white/[0.03] border border-white/[0.07] rounded-xl p-3 backdrop-blur-sm overflow-hidden">
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${borderMap[accentColor]} to-transparent`} />
      <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-white/[0.06]">
        <div className="p-1 bg-white/5 rounded-md border border-white/[0.08]">{icon}</div>
        <span className="text-[9.5px] font-bold tracking-[0.08em] text-white/70 uppercase">{title}</span>
      </div>
      {children}
    </div>
  );
}

function DataRow({ label, value, valueColor }: { label: string; value: string; valueColor: string }) {
  return (
    <div className="flex items-center justify-between py-[5px] border-b border-white/[0.04] last:border-0">
      <span className="text-[10px] text-white/40 font-medium">{label}</span>
      <span className={`text-[10px] font-mono font-bold ${valueColor}`}>{value}</span>
    </div>
  );
}

function ProgressBar({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[8px] text-white/30 w-6 flex-shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className={`h-full ${color} rounded-full`}
        />
      </div>
      <span className="text-[8px] text-white/30 w-6 text-right">{pct}%</span>
    </div>
  );
}

function DbBadge({ label }: { label: string }) {
  return (
    <span className="text-[9px] text-indigo-200/60 border border-indigo-500/20 bg-indigo-500/5 rounded px-1.5 py-0.5 font-medium">
      {label}
    </span>
  );
}
