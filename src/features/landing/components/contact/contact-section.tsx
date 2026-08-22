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
    <section
      id="contact"
      className="section-padding-x section-padding-y border-t"
    >
      <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto items-start">
        {/* Left Column: Contact Details */}
        <div className="flex flex-col gap-6 lg:max-w-md">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Have an idea or a project in mind? We&apos;d love to hear from you.
            Send us a message and we will respond within 24 business hours.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">
                  Email Us
                </h4>
                <p className="text-sm text-muted-foreground">
                  hello@solvevo.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">
                  Office Location
                </h4>
                <p className="text-sm text-muted-foreground">
                  San Francisco, California
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">
                  Call Us
                </h4>
                <p className="text-sm text-muted-foreground">
                  +1 (555) 019-2834
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="rounded-xl border bg-card p-6 md:p-8 shadow-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="space-y-6"
          >
            {/* Name Field */}
            <form.Field name="name">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Your name"
                    className="w-full"
                  />
                  {field.state.meta.errors ? (
                    <p className="text-xs text-destructive mt-1">
                      {field.state.meta.errors.join(", ")}
                    </p>
                  ) : null}
                </div>
              )}
            </form.Field>

            {/* Email Field */}
            <form.Field name="email">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
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
                    className="w-full"
                  />
                  {field.state.meta.errors ? (
                    <p className="text-xs text-destructive mt-1">
                      {field.state.meta.errors.join(", ")}
                    </p>
                  ) : null}
                </div>
              )}
            </form.Field>

            {/* Message Field */}
            <form.Field name="message">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
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
                    className="w-full resize-none"
                  />
                  {field.state.meta.errors ? (
                    <p className="text-xs text-destructive mt-1">
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
              className="w-full shadow-md shadow-primary/10 transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
