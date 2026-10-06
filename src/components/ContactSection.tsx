const mono = { fontFamily: "var(--font-mono), monospace" } as const
const serif = { fontFamily: "var(--font-serif), serif" } as const

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        borderTop: "1px solid #e2d4bf",
        backgroundImage:
          "linear-gradient(#e6d9c5 1px,transparent 1px),linear-gradient(90deg,#e6d9c5 1px,transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    >
      <div
        style={{
          maxWidth: 820,
          margin: "0 auto",
          padding:
            "clamp(72px,12vw,140px) clamp(18px,4vw,40px)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 22,
        }}
      >
        <span style={{ ...mono, fontSize: 15, color: "oklch(0.5 0.15 40)" }}>
          04. what&apos;s next?
        </span>

        <h3
          style={{
            margin: 0,
            fontSize: "clamp(44px,8vw,96px)",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
          }}
        >
          Let&apos;s build the{" "}
          <em style={{ ...serif, fontStyle: "italic", fontWeight: 400 }}>whole</em>{" "}
          thing.
        </h3>

        <p
          style={{
            margin: 0,
            maxWidth: "30em",
            fontSize: 19,
            lineHeight: 1.5,
            color: "#4e3e32",
          }}
        >
          I&apos;m open to fullstack roles and freelance projects. My inbox is always
          open.
        </p>

        <a href="mailto:ellafchukwu@gmail.com" className="email-btn">
          send an email
        </a>
      </div>
    </section>
  )
}
