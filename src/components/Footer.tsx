const mono = { fontFamily: "var(--font-mono), monospace" } as const

export default function Footer() {
  return (
    <footer
      style={{
        maxWidth: 1160,
        margin: "0 auto",
        padding: "24px clamp(18px,4vw,40px) 36px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 14,
        ...mono,
        fontSize: 13,
        color: "#6e5a4a",
      }}
    >
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <a href="https://read.cv" target="_blank" rel="noopener noreferrer">
          read.cv
        </a>
      </div>
      <span>designed &amp; built by Emmanuella · 2026</span>
    </footer>
  )
}
