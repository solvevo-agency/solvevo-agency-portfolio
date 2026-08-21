import type { ContactMessage } from "../types"

export const contactMessages: ContactMessage[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    email: "sarah@novaretail.com",
    subject: "Ecommerce Platform Redevelopment",
    message: "Hello, we are looking to rebuild our current Shopify store onto Next.js for better page speeds and customization. Do you have availability for a September kick-off? We would love to hop on a discovery call to discuss further details and get a ballpark quote.",
    date: "2026-08-21",
    read: false,
  },
  {
    id: "2",
    name: "David Cole",
    email: "david@fintrack.io",
    subject: "Mobile App Companion",
    message: "We recently launched our web dashboard and want to build a React Native mobile app companion. We already have the Figma designs completed and a fully-documented REST API. We'd love to chat about scope and timeline.",
    date: "2026-08-20",
    read: false,
  },
  {
    id: "3",
    name: "Amina Yusuf",
    email: "yusuf.a@healthbridge.org",
    subject: "WebRTC Consultation System",
    message: "We need to optimize our WebRTC video pipeline for low-bandwidth environments. Can your team join us for a short 2-week consulting sprint? Looking forward to your response.",
    date: "2026-08-18",
    read: true,
  },
  {
    id: "4",
    name: "Marcus Vance",
    email: "mvance@cargoo.com",
    subject: "AI Routing System",
    message: "We are interested in adding an AI-based route planning and cargo packing optimization module to our logistics platform. Please let me know if your team has experience in linear programming or neural routing networks.",
    date: "2026-08-15",
    read: true,
  },
]
