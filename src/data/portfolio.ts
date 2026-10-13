import type { Project, Role } from "@/src/types"

export const projects: Project[] = [
  {
    name: "Kinsittr",
    year: "2026",
    tone: "oklch(0.78 0.1 50)",
    summary: "Childcare marketplace connecting parents with professional caregivers.",
    stack: ["Next.js", "Go", "Postgres"],
    shot: "Kinsittr screenshot",
    video: "/assets/kinsittr.mp4",
    liveUrl: "https://kinsittr.vercel.app/",
    codeUrl: "#",
  },
  {
    name: "Olu",
    year: "2026",
    tone: "oklch(0.82 0.07 155)",
    summary: "A digital voting platform built for accessible elections.",
    stack: ["Next.js", "Go", "Postgres"],
    shot: "olu screenshot",
    video: "/assets/olu.mp4",
    liveUrl: "#",
    codeUrl: "https://github.com/Emmanuella-codes/olu",
  },
  {
    name: "Sceneshare",
    year: "2026",
    tone: "oklch(0.8 0.07 230)",
    summary: "Share specifc timestamps from a video with your friends.",
    stack: ["Next.js", "WXT", "Go", "Postgres"],
    shot: "sceneshare screenshot",
    video: "/assets/sceneshare.mp4",
    liveUrl: "#",
    codeUrl: "https://github.com/Emmanuella-codes/sceneshare",
  },
  {
    name: "Burnished",
    year: "2026",
    tone: "oklch(0.85 0.1 92)",
    summary: "Optimize your CV and generate cover letter for a specific role or get roasted based on your CV.",
    stack: ["Nest.js", "Go", "Postgres"],
    shot: "burnished screenshot",
    video: "/assets/burnished.mp4",
    liveUrl: "https://burnished.netlify.app/",
    codeUrl: "https://github.com/Emmanuella-codes/burnished",
  },
  {
    name: "Nox",
    year: "2026",
    tone: "oklch(0.85 0.1 92)",
    summary: "Post anonymously or not? your choice, buy tickets for event in-app, share live location with friends during an event, create and manage event, post dj recording sessions, report harassment at events in-app.",
    stack: ["Nest.js", "Go", "Postgres"],
    shot: "burnished screenshot",
    liveUrl: "#",
    codeUrl: "#",
  },
]

export const roles: Role[] = [
  {
    org: "Kinsittr",
    title: "Founding Engineer",
    // period: "2025 — present",
    points: [
      "Built the backend and database structure supporting parents, caregivers, bookings, and platform administration.",
      "Implemented role-based access, booking workflows, messaging, and notifications.",
      "Integrated Stripe payments and payouts with reconciliation logic and audit-logged moderation workflows.",
    ],
  },
  {
    org: "Sayar",
    title: "Backend Engineer",
    // period: "2026",
    points: [
      "Built stateful order flows covering customer details, delivery selection, and checkout.",
      "Implemented Paystack webhook processing and scheduled jobs to reconcile payment states and handle abandoned checkouts.",
      "Developed step-based merchant onboarding with WhatsApp Business and Meta catalogue integration.",
    ],
  },
  {
    org: "UX Design Arena",
    title: "Frontend Engineer",
    // period: "2019 — 2021",
    points: [
      "Developed dashboard and job discovery features using Next.js and TypeScript.",
      "Translated Figma designs into a reusable Tailwind CSS component library.",
    ],
  },
  {
    org: "Ravenlab Solution",
    title: "Fullstack Developer",
    // period: "2018 — 2019",
    points: [
      "Built Go services supporting trivia scoring and scheduled content delivery.",
      "Refactored MySQL queries and indexes to address inefficient data retrieval.",
      "Added automated tests and Docker-based environments to support repeatable builds and deployments.",
    ],
  },
  {
    org: "Unboxd",
    title: "Fullstack Developer",
    // period: "2018 — 2019",
    points: [
      "Developed backend services supporting bookings, payment processing, and campaign workflows.",
      "Implemented Redis caching and database query optimizations to improve API responsiveness.",
      "Built React interfaces and integrated Paystack and Flutterwave payment flows.",
    ],
  },
]
