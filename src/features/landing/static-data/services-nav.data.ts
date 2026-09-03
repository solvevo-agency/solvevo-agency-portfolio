import {
  Code2,
  Cpu,
  Globe,
  Database,
  Smartphone,
  Cloud,
  MonitorPlay,
  Briefcase,
  Users,
} from "lucide-react";

export const megaMenuServices = [
  {
    title: "AI & ML Development",
    slug: "ai-ml-development",
    description: "Intelligent solutions to automate and elevate your business.",
    longDescription: "We build custom Artificial Intelligence and Machine Learning models that transform your raw data into actionable insights and automated workflows. From natural language processing to predictive analytics, we help you stay ahead of the curve.",
    icon: Cpu,
    href: "/services/ai-ml-development",
    features: [
      "Custom LLM Integration & Fine-tuning",
      "Predictive Analytics & Forecasting",
      "Computer Vision & Image Processing",
      "Automated Customer Support Bots"
    ]
  },
  {
    title: "Web Development",
    slug: "web-development",
    description: "High-performance, scalable web applications.",
    longDescription: "Our web development team specializes in building lightning-fast, highly scalable applications using modern frameworks like Next.js and React. We focus on SEO, accessibility, and pixel-perfect UI implementation.",
    icon: Globe,
    href: "/services/web-development",
    features: [
      "Next.js & React Single Page Applications",
      "High-Conversion E-commerce Platforms",
      "Custom SaaS Dashboards & Portals",
      "Headless CMS Integration"
    ]
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Native and cross-platform mobile experiences.",
    longDescription: "We create fluid, engaging mobile applications for iOS and Android. Whether you need a native Swift/Kotlin app or a cross-platform React Native solution, we deliver apps that users love to interact with.",
    icon: Smartphone,
    href: "/services/mobile-app-development",
    features: [
      "React Native Cross-Platform Apps",
      "Native iOS & Android Development",
      "App Store Optimization (ASO)",
      "Real-time Chat & Notifications"
    ]
  },
  {
    title: "Data Engineering",
    slug: "data-engineering",
    description: "Robust data pipelines and analytics solutions.",
    longDescription: "Unlock the true value of your data. We design and implement robust, scalable data pipelines and warehouses that clean, store, and process massive datasets securely and efficiently in real-time.",
    icon: Database,
    href: "/services/data-engineering",
    features: [
      "ETL Pipeline Design & Automation",
      "Data Warehouse Setup (Snowflake, BigQuery)",
      "Real-time Data Streaming",
      "Business Intelligence Dashboards"
    ]
  },
  {
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Secure, scalable cloud infrastructure and migration.",
    longDescription: "Scale securely with our cloud architecture services. We help businesses migrate to AWS, GCP, or Azure, optimizing for cost, performance, and bulletproof security.",
    icon: Cloud,
    href: "/services/cloud-solutions",
    features: [
      "Cloud Migration Strategy & Execution",
      "Serverless Architecture Design",
      "DevOps & CI/CD Pipeline Automation",
      "Infrastructure Security Audits"
    ]
  },
  {
    title: "MVP Development",
    slug: "mvp-development",
    description: "Fast go-to-market prototypes for your startups.",
    longDescription: "Got an idea? Let's build it fast. We specialize in rapid Minimum Viable Product (MVP) development, helping startups launch their core features quickly to test the market and secure funding.",
    icon: MonitorPlay,
    href: "/services/mvp-development",
    features: [
      "Rapid Prototyping & Wireframing",
      "Core Feature Engineering",
      "Scalable Architecture from Day 1",
      "Post-Launch Iteration Support"
    ]
  },
];
