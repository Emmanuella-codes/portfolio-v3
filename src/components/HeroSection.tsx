const mono = { fontFamily: "var(--font-mono), monospace" } as const
const serif = { fontFamily: "var(--font-serif), serif" } as const

export default function HeroSection() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        backgroundImage:
          "linear-gradient(#e6d9c5 1px,transparent 1px),linear-gradient(90deg,#e6d9c5 1px,transparent 1px)",
        backgroundSize: "72px 72px",
        backgroundPosition: "-1px -1px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg,rgba(244,236,224,0) 60%,#f4ece0 100%)",
          pointerEvents: "none",
        }}
        aria-hidden
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1160,
          margin: "0 auto",
          padding:
            "clamp(72px,14vw,160px) clamp(18px,4vw,40px) clamp(64px,10vw,120px)",
        }}
      >
        <div
          style={{
            ...mono,
            fontSize: 15,
            color: "oklch(0.5 0.15 40)",
            marginBottom: 18,
          }}
        >
          Hi, my name is
        </div>

        <h1
          style={{
            margin: 0,
            fontWeight: 800,
            fontSize: "clamp(52px,11vw,148px)",
            lineHeight: 0.9,
            letterSpacing: "-0.035em",
          }}
        >
          Emmanuella Chukwu.
        </h1>

        <h2
          style={{
            margin: "14px 0 0",
            fontWeight: 700,
            fontSize: "clamp(30px,5.6vw,72px)",
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            color: "#7a6656",
          }}
        >
          I build both sides of the{" "}
          <em style={{ ...serif, fontStyle: "italic", fontWeight: 400, color: "#231a14" }}>
            web
          </em>
          .
        </h2>

        <p
          style={{
            margin: "32px 0 0",
            maxWidth: "30em",
            fontSize: "clamp(19px,2.1vw,24px)",
            lineHeight: 1.4,
          }}
        >
          Full-stack engineer shipping{" "}
          <strong style={{ fontWeight: 700 }}>interfaces people enjoy</strong> on top of{" "}
          <strong style={{ fontWeight: 700 }}>systems that hold up in production</strong>.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginTop: 40,
            ...mono,
            fontSize: 14,
          }}
        >
          <a href="#work" className="cta-primary">
            see my work ↓
          </a>
          <a href="#contact" className="cta-secondary">
            say hello
          </a>
        </div>
      </div>
    </section>
  )
}
