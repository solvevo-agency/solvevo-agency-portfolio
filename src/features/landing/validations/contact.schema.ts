import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Message is too short (minimum 10 characters)"),
})

export type ContactFormValues = z.infer<typeof contactSchema>
