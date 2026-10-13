import Header from "@/src/components/Header"
import HeroSection from "@/src/components/HeroSection"
import AboutSection from "@/src/components/AboutSection"
import WorkSection from "@/src/components/WorkSection"
import ExperienceSection from "@/src/components/ExperienceSection"
import ContactSection from "@/src/components/ContactSection"
import Footer from "@/src/components/Footer"

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-display), sans-serif", background: "#f4ece0", color: "#231a14", minHeight: "100vh" }}>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
