"use client";
import Image from "next/image";
import { faqs } from "../../static-data/faq.data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section id="faq" className="section-padding-x section-padding-y border-t">
      <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto items-center">
        {/* Left Column: Image and Section Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Got questions about how we work? Here are answers to some of our
            most common inquiries. If you don&apos;t see your question here,
            feel free to contact us below.
          </p>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border bg-card">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b813d53a962e?auto=format&fit=crop&w=800&q=80"
              alt="People collaborating on software designs"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div>
          <Accordion className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
