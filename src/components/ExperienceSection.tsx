"use client"

import { useState } from "react"
import { useNarrow } from "@/src/utils/useNarrow"
import { roles } from "@/src/data/portfolio"

const mono = { fontFamily: "var(--font-mono), monospace" } as const
const serif = { fontFamily: "var(--font-serif), serif" } as const

export default function ExperienceSection() {
  const [tab, setTab] = useState(0)
  const { ref, narrow } = useNarrow<HTMLDivElement>()
  const role = roles[tab]

  return (
    <section
      id="experience"
      style={{
        maxWidth: 1160,
        margin: "0 auto",
        padding: "clamp(56px,9vw,110px) clamp(18px,4vw,40px)",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}
      >
        <span style={{ ...mono, fontSize: 15, color: "oklch(0.5 0.15 40)" }}>03.</span>
        <h3
          style={{
            margin: 0,
            fontSize: "clamp(28px,3.4vw,40px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Where I&apos;ve worked
        </h3>
        <span style={{ flex: 1, height: 1, background: "#d8c7ad", minWidth: 24 }} />
      </div>

      <div
        ref={ref}
        style={{
          display: "flex",
          flexDirection: narrow ? "column" : "row",
          gap: narrow ? 28 : 48,
        }}
      >
        <div
          role="tablist"
          style={
            narrow
              ? {
                  display: "flex",
                  overflowX: "auto",
                  borderBottom: "2px solid #e2d4bf",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  borderLeft: "2px solid #e2d4bf",
                  flex: "0 0 200px",
                }
          }
        >
          {roles.map((r, i) => {
            const active = i === tab
            const edge = active
              ? "2px solid oklch(0.55 0.15 40)"
              : "2px solid transparent"
            return (
              <button
                key={r.org}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(i)}
                style={{
                  ...mono,
                  font: "500 14px var(--font-mono,monospace)",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  minHeight: 44,
                  padding: narrow ? "10px 16px" : "12px 18px",
                  background: active ? "#ecdfcb" : "transparent",
                  color: active ? "oklch(0.48 0.15 40)" : "#4e3e32",
                  borderTop: "none",
                  borderRight: "none",
                  borderBottom: narrow ? edge : "none",
                  borderLeft: narrow ? "none" : edge,
                  ...(narrow ? { marginBottom: -2 } : { marginLeft: -2 }),
                }}
              >
                {r.org}
              </button>
            )
          })}
        </div>

        <div style={{ flex: 1, minWidth: 0, maxWidth: 640 }}>
          <h4
            style={{
              margin: 0,
              fontSize: 24,
              fontWeight: 700,
              display: "flex",
              flexDirection: narrow ? "column" : "row",
              flexWrap: "wrap",
              gap: narrow ? 2 : 6,
              alignItems: narrow ? "flex-start" : "baseline",
            }}
          >
            <span>{role.title}</span>
            <span
              style={{
                ...serif,
                fontStyle: "italic",
                fontWeight: 400,
                color: "oklch(0.5 0.15 40)",
              }}
            >
              @ {role.org}
            </span>
          </h4>
          <div
            style={{ marginTop: 6, ...mono, fontSize: 13, color: "#6e5a4a" }}
          >
            {role.period}
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: "22px 0 0",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              fontSize: 17,
              lineHeight: 1.55,
            }}
          >
            {role.points.map((pt) => (
              <li key={pt} style={{ display: "flex", gap: 12 }}>
                <span
                  style={{ color: "oklch(0.55 0.15 40)", ...mono, flexShrink: 0 }}
                >
                  ▹
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
