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
    description: "Intelligent solutions to automate and elevate your business.",
    icon: Cpu,
    href: "/services#ai-ml",
  },
  {
    title: "Web Development",
    description: "High-performance, scalable web applications.",
    icon: Globe,
    href: "/services#web-development",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences.",
    icon: Smartphone,
    href: "/services#mobile",
  },
  {
    title: "Data Engineering",
    description: "Robust data pipelines and analytics solutions.",
    icon: Database,
    href: "/services#data",
  },
  {
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructure and migration.",
    icon: Cloud,
    href: "/services#cloud",
  },
  {
    title: "MVP Development",
    description: "Fast go-to-market prototypes for your startups.",
    icon: MonitorPlay,
    href: "/services#mvp",
  },
];

export const megaMenuHiring = [
  { title: "Hire React/Next.js Devs", icon: Code2, href: "/contact?intent=hire-react" },
  { title: "Hire Python/AI Devs", icon: Cpu, href: "/contact?intent=hire-python" },
  { title: "Hire Cloud Engineers", icon: Cloud, href: "/contact?intent=hire-cloud" },
  { title: "Dedicated Tech Teams", icon: Users, href: "/contact?intent=dedicated-teams" },
  { title: "Staff Augmentation", icon: Briefcase, href: "/contact?intent=staff-aug" },
];
