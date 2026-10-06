import type { Metadata } from "next"
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-display",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Emmanuella Chukwu — Full-stack Engineer",
  description:
    "Full-stack engineer shipping interfaces people enjoy on top of systems that hold up in production.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body style={{ fontFamily: "var(--font-display), sans-serif" }}>{children}</body>
    </html>
  )
}
