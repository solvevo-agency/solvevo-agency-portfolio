"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { faqs } from "../../static-data/faq.data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section id="faq" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="grid gap-12 lg:grid-cols-2 max-w-7xl mx-auto px-6 lg:px-8 items-center">
        
        {/* Left Column: Image Only */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[500px] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-20" />
          <Image
            src="/images/solvevo.jpg"
            alt="People collaborating on software designs"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 via-transparent to-transparent opacity-60 z-10 mix-blend-multiply" />
        </motion.div>

        {/* Right Column: Title, Description, and FAQ Accordion */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col gap-8"
        >
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground/80 mt-4 leading-relaxed text-lg">
              Got questions about how we work? Here are answers to some of our most common inquiries.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <Accordion className="w-full">
              {faqs.slice(0, 5).map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-white/50 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
