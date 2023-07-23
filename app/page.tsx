import HeroSection from "@/components/HeroSection"
import AboutMeSection from "@/components/AboutMeSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection/>
      <AboutMeSection/>
      <ProjectsSection/>
      <ContactSection/>
    </main>
  )
}
