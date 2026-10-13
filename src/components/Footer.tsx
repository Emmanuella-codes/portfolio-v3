const mono = { fontFamily: "var(--font-mono), monospace" } as const
const currentYear = new Date().getFullYear()

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
        <a href="https://github.com/Emmanuella-codes" target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a href="https://www.linkedin.com/in/emmanuella-chukwu-fullstack-developer/" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <a href="https://flowcv.com/resume/bksvh2m0om54" target="_blank" rel="noopener noreferrer">
          read.cv
        </a>
      </div>
      <span>designed &amp; built by Emmanuella · {currentYear}</span>
    </footer>
  )
}
