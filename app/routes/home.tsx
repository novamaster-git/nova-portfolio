import { ExperienceTimeline } from "~/components/sections/experience.section"
import { CountupComponent } from "~/components/countup-component"
import DottedSection from "~/components/section-headers/dotted-section"
import StripedSection from "~/components/section-headers/striped-section"
import StripedAuroraSection from "~/components/section-headers/striped-aurora-section"
import ContactMeSection from "~/components/sections/contact-me.section"
import SkillsSection from "~/components/sections/skills.section"
import AboutMeSection from "~/components/sections/about-me.section"
import BlurGridContainer from "~/components/section-containers/blur-grid.container"
import HeroSection from "~/components/sections/hero.section"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BlurGridContainer>
        <div className="relative z-20">
          <h2 className="mb-2 text-center text-sm font-medium tracking-[0.3em] text-foreground/40 uppercase">
            Debugging Since
          </h2>
          <CountupComponent />
        </div>
      </BlurGridContainer>
      <AboutMeSection />
      <div id="experience" />
      <DottedSection fTitle="Professional" sTitle="Experience" />
      <ExperienceTimeline />
      <div id="skills" />
      <StripedSection title={["Skills", "Tools", "Technologies"]} />
      <SkillsSection />
      <div id="contact" />
      <StripedAuroraSection fTitle="Let's" sTitle="Connect" />
      <ContactMeSection />
    </div>
  )
}
