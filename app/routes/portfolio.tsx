import { ProjectTimelineCards } from "~/components/project-timeline-cards"
import FlickeringGridSection from "~/components/section-headers/flickering-grid-section"
import SimpleRotatingSection from "~/components/section-headers/simple-rotating-section"
import { WordRotate } from "~/components/ui/word-rotate"

export default function Home() {
  return (
    <div>
      <FlickeringGridSection title="My Portfolio" />
      <SimpleRotatingSection
        titles={["Client Projects", "Professional Projects"]}
      />
      <ProjectTimelineCards />
      <SimpleRotatingSection
        titles={[
          "Personal Projects",
          "Weekend Projects",
          "Open Source Projects",
        ]}
      />
      <ProjectTimelineCards />
    </div>
  )
}
