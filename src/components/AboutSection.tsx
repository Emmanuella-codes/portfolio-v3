const mono = { fontFamily: "var(--font-mono), monospace" } as const
const serif = { fontFamily: "var(--font-serif), serif" } as const

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        maxWidth: 1160,
        margin: "0 auto",
        padding: "clamp(56px,9vw,110px) clamp(18px,4vw,40px)",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}
      >
        <span style={{ ...mono, fontSize: 15, color: "oklch(0.5 0.15 40)" }}>01.</span>
        <h3
          style={{
            margin: 0,
            fontSize: "clamp(28px,3.4vw,40px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          How I think about a product
        </h3>
        <span style={{ flex: 1, height: 1, background: "#d8c7ad", minWidth: 24 }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
          gap: "clamp(28px,5vw,64px)",
          alignItems: "start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            fontSize: 18,
            lineHeight: 1.6,
            maxWidth: "34em",
          }}
        >
          <p style={{ margin: 0 }}>
            I started out styling buttons and ended up designing databases. Somewhere in
            between I realised the best interfaces come from people who understand the data
            underneath them.
          </p>
          <p style={{ margin: 0 }}>
            Today I work across the whole path — the{" "}
            <em style={{ ...serif, fontStyle: "italic", fontSize: 21 }}>interface</em>, the{" "}
            <em style={{ ...serif, fontStyle: "italic", fontSize: 21 }}>service</em> and the{" "}
            <em style={{ ...serif, fontStyle: "italic", fontSize: 21 }}>store</em> — and I
            treat each one as part of the same design.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
            gap: 28,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ ...mono, fontSize: 13, color: "oklch(0.5 0.15 40)" }}>
              {"// interface"}
            </span>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 17,
              }}
            >
              <li>React &amp; TypeScript</li>
              <li>Design systems</li>
              <li>Accessibility</li>
              <li>Motion &amp; interaction</li>
            </ul>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ ...mono, fontSize: 13, color: "oklch(0.45 0.1 180)" }}>
              {"// systems"}
            </span>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 17,
              }}
            >
              <li>Go &amp; Node</li>
              <li>Postgres &amp; data modelling</li>
              <li>API design</li>
              <li>Queues &amp; infra</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
