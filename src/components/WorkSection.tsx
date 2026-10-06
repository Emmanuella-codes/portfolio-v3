"use client"

import { useNarrow } from "@/src/utils/useNarrow"
import { projects } from "@/src/data/portfolio"

const mono = { fontFamily: "var(--font-mono), monospace" } as const

export default function WorkSection() {
  const { ref, narrow } = useNarrow<HTMLDivElement>()

  return (
    <section
      id="work"
      style={{
        background: "#1f1712",
        color: "#f4ece0",
        padding: "clamp(56px,9vw,110px) 0 clamp(80px,12vw,160px)",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "0 clamp(18px,4vw,40px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 16,
          marginBottom: 40,
        }}
      >
        <span style={{ ...mono, fontSize: 15, color: "oklch(0.75 0.13 50)" }}>02.</span>
        <h3
          style={{
            margin: 0,
            fontSize: "clamp(28px,3.4vw,40px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Things I&apos;ve built
        </h3>
        <span style={{ flex: 1, height: 1, background: "#4a3a2e", minWidth: 24 }} />
      </div>

      <div
        ref={ref}
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "0 clamp(12px,3vw,40px)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(20px,3vw,40px)",
        }}
      >
        {projects.map((p, i) => (
          <article
            key={p.name}
            style={{
              position: "sticky",
              top: (narrow ? 72 : 84) + i * (narrow ? 22 : 36),
              background: p.tone,
              color: "#231a14",
              borderRadius: narrow ? 22 : 32,
              padding: narrow ? "28px 22px 22px" : "40px 36px",
              boxShadow: "0 -10px 30px rgba(20,12,6,0.28)",
            }}
          >
            <div style={{ display: "flex", gap: 32, alignItems: "stretch" }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ ...mono, fontSize: 14, color: "#3a2e25" }}>
                  {p.year}
                </div>
                <h4
                  style={{
                    margin: "6px 0 0",
                    fontSize: "clamp(40px,5vw,52px)",
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.035em",
                  }}
                >
                  {p.name}
                </h4>
                <p
                  style={{
                    margin: "14px 0 0",
                    maxWidth: "30em",
                    fontSize: 17,
                    fontWeight: 500,
                    lineHeight: 1.45,
                  }}
                >
                  {p.summary}
                </p>
                <div style={{ marginTop: 14, ...mono, fontSize: 13, fontWeight: 500 }}>
                  {p.stack.join("  ·  ")}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 12,
                    marginTop: 18,
                    ...mono,
                    fontSize: 15,
                  }}
                >
                  <a href={p.liveUrl} className="card-live">live ↗</a>
                  <a href={p.codeUrl} className="card-code">code</a>
                </div>
              </div>

              {!narrow && (
                <div
                  style={{
                    flex: "0 0 45%",
                    border: "2px dashed rgba(35,26,20,0.35)",
                    borderRadius: 18,
                    background: "rgba(255,255,255,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 16,
                    textAlign: "center",
                    ...mono,
                    fontSize: 13,
                    color: "#231a14",
                    minHeight: 180,
                  }}
                >
                  [ {p.shot} ]
                </div>
              )}
            </div>

            {narrow && (
              <div
                style={{
                  marginTop: 28,
                  height: 180,
                  border: "2px dashed rgba(35,26,20,0.35)",
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 16,
                  textAlign: "center",
                  ...mono,
                  fontSize: 13,
                  color: "#231a14",
                }}
              >
                [ {p.shot} ]
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
