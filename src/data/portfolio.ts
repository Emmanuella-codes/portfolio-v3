import type { Project, Role } from "@/src/types"

export const projects: Project[] = [
  {
    name: "Kinsittr",
    year: "2026",
    tone: "oklch(0.78 0.1 50)",
    summary: "Connecting parents to professional childcare providers.",
    stack: ["Next.js", "Go", "Postgres"],
    shot: "Kinsittr screenshot",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    name: "Olu",
    year: "2026",
    tone: "oklch(0.82 0.07 155)",
    summary: "SMS and Web voting platform for elections.",
    stack: ["Next.js", "Go", "Postgres"],
    shot: "olu screenshot",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    name: "Sceneshare",
    year: "2026",
    tone: "oklch(0.8 0.07 230)",
    summary: "Share specifc timestamps from a video with your friends.",
    stack: ["Next.js", "WXT", "Go", "Postgres"],
    shot: "sceneshare screenshot",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    name: "Burnished",
    year: "2026",
    tone: "oklch(0.85 0.1 92)",
    summary: "Optimize your CV and generate cover letter for a specific role or get roasted based on your CV.",
    stack: ["Nest.js", "Go", "Postgres"],
    shot: "burnished screenshot",
    liveUrl: "#",
    codeUrl: "#",
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
      "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    org: "Sayar",
    title: "Backend Engineer",
    // period: "2026",
    points: [
      "Built interactive data tools for climate research clients with React, D3 and WebGL.",
      "Set up accessibility audits and brought core flows to WCAG 2.2 AA.",
    ],
  },
  {
    org: "UX Design Arena",
    title: "Frontend Engineer",
    // period: "2019 — 2021",
    points: [
      "Designed the event pipeline that tracks 1M+ parcels a day across Kafka and Go services.",
      "Wrote the public REST API and its docs, used by 200+ merchant integrations.",
    ],
  },
  {
    org: "Ravenlab Solution",
    title: "Fullstack Developer",
    // period: "2018 — 2019",
    points: [
      "Shipped marketing sites and small web apps for local businesses, from design to deploy.",
    ],
  },
  {
    org: "Unboxd",
    title: "Fullstack Developer",
    // period: "2018 — 2019",
    points: [
      "Shipped marketing sites and small web apps for local businesses, from design to deploy.",
    ],
  },
]
