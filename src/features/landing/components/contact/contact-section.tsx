"use client";
import { useForm } from "@tanstack/react-form";
import { contactSchema } from "@/features/landing/validations/contact.schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "motion/react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    defaultValues: { name: "", email: "", message: "" },
    validators: {
      onChange: contactSchema,
    },
    onSubmit: async ({ value }) => {
      setIsSubmitting(true);
      // Simulate API submit
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Contact Form Submitted:", value);
      setIsSubmitting(false);
      toast.success(
        "Message sent successfully! We will get back to you shortly.",
      );
      form.reset();
    },
  });

  return (
    <section id="contact" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] -z-10 rounded-full pointer-events-none" />

      <div className="grid gap-16 lg:grid-cols-2 max-w-7xl mx-auto px-6 lg:px-8 items-start">
        
        {/* Left Column: Contact Details */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 lg:max-w-md"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 dark:from-white dark:to-white/60 bg-clip-text text-transparent">
              Let&apos;s Build Something Great
            </h2>
            <p className="text-lg text-muted-foreground/80 mt-6 leading-relaxed">
              Have an idea or a project in mind? We&apos;d love to hear from you.
              Send us a message and we will respond within 24 business hours.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="group flex items-center gap-6 p-4 rounded-2xl transition-colors hover:bg-secondary/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/50 border border-border text-primary shadow-inner group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/50 transition-all duration-300">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground tracking-wide">
                  Email Us
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  hello@solvevo.com
                </p>
              </div>
            </div>

            <div className="group flex items-center gap-6 p-4 rounded-2xl transition-colors hover:bg-secondary/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/50 border border-border text-primary shadow-inner group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/50 transition-all duration-300">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground tracking-wide">
                  Office Location
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  San Francisco, California
                </p>
              </div>
            </div>

            <div className="group flex items-center gap-6 p-4 rounded-2xl transition-colors hover:bg-secondary/30">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/50 border border-border text-primary shadow-inner group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/50 transition-all duration-300">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground tracking-wide">
                  Call Us
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  +1 (555) 019-2834
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Premium Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative rounded-[2.5rem] border border-border/50 dark:border-white/10 bg-card dark:bg-[#050505]/80 backdrop-blur-xl p-8 md:p-12 shadow-lg dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
        >
          {/* Subtle top edge highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 dark:via-white/20 to-transparent z-20 rounded-t-[2.5rem]" />
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="space-y-6 relative z-10"
          >
            {/* Name Field */}
            <form.Field name="name">
              {(field) => (
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-sm font-semibold text-foreground dark:text-white/80 uppercase tracking-wider">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-secondary/50 dark:bg-white/[0.02] border-border dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/20 h-14 rounded-2xl focus-visible:ring-primary focus-visible:border-primary px-5 text-base transition-all"
                  />
                  {field.state.meta.errors ? (
                    <p className="text-xs text-red-400 mt-1 font-medium">
                      {field.state.meta.errors.join(", ")}
                    </p>
                  ) : null}
                </div>
              )}
            </form.Field>

            {/* Email Field */}
            <form.Field name="email">
              {(field) => (
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-semibold text-foreground dark:text-white/80 uppercase tracking-wider">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-secondary/50 dark:bg-white/[0.02] border-border dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/20 h-14 rounded-2xl focus-visible:ring-primary focus-visible:border-primary px-5 text-base transition-all"
                  />
                  {field.state.meta.errors ? (
                    <p className="text-xs text-red-400 mt-1 font-medium">
                      {field.state.meta.errors.join(", ")}
                    </p>
                  ) : null}
                </div>
              )}
            </form.Field>

            {/* Message Field */}
            <form.Field name="message">
              {(field) => (
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-sm font-semibold text-foreground dark:text-white/80 uppercase tracking-wider">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Describe your project, budget, and timeline..."
                    rows={5}
                    className="w-full resize-none bg-secondary/50 dark:bg-white/[0.02] border-border dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/20 rounded-2xl focus-visible:ring-primary focus-visible:border-primary p-5 text-base transition-all"
                  />
                  {field.state.meta.errors ? (
                    <p className="text-xs text-red-400 mt-1 font-medium">
                      {field.state.meta.errors.join(", ")}
                    </p>
                  ) : null}
                </div>
              )}
            </form.Field>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 mt-4 text-base tracking-wide"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
