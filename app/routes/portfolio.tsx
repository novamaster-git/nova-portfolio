import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router"
import { ProjectTimelineCards } from "~/components/project-timeline-cards"
import FlickeringGridSection from "~/components/section-headers/flickering-grid-section"
import SimpleRotatingSection from "~/components/section-headers/simple-rotating-section"
import { RippleButton } from "~/components/ui/ripple-button"

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <FlickeringGridSection title="My Portfolio" />
      <SimpleRotatingSection
        rightButtonText={
          <RippleButton
            onClick={() => navigate("/portfolio/client-projects")}
            className="flex flex-row items-center rounded-lg px-4 py-2 text-sm font-medium text-white"
          >
            <div className="flex flex-row items-center">
              See All <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </RippleButton>
        }
        titles={["Client Projects", "Professional Projects"]}
      />
      <ProjectTimelineCards />
      <SimpleRotatingSection
        rightButtonText={
          <RippleButton
            onClick={() => navigate("/portfolio/personal-projects")}
            className="flex flex-row items-center rounded-lg px-4 py-2 text-sm font-medium text-white"
          >
            <div className="flex flex-row items-center">
              See All <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </RippleButton>
        }
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
