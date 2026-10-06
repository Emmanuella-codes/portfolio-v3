const mono = { fontFamily: "var(--font-mono), monospace" } as const

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "rgba(244,236,224,0.88)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #e2d4bf",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "14px clamp(18px,4vw,40px)",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <a
          href="#top"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 38,
            height: 38,
            flex: "0 0 auto",
            border: "1.5px solid #231a14",
            borderRadius: 10,
            fontWeight: 800,
            fontSize: 18,
          }}
        >
          E
        </a>

        <nav
          style={{
            display: "flex",
            gap: 22,
            marginLeft: "auto",
            overflowX: "auto",
            ...mono,
            fontSize: 13,
            whiteSpace: "nowrap",
          }}
        >
          {(
            [
              ["01.", "about", "#about"],
              ["02.", "work", "#work"],
              ["03.", "experience", "#experience"],
              ["04.", "contact", "#contact"],
            ] as const
          ).map(([num, label, href]) => (
            <a key={href} href={href} style={{ textDecoration: "none" }}>
              <span style={{ color: "oklch(0.55 0.15 40)" }}>{num}</span> {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
