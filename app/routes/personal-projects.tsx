import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router"
import PageBreadcrumb from "~/components/page-breadcrum"
import { ProjectTimelineCards } from "~/components/project-timeline-cards"
import SimpleRotatingSection from "~/components/section-headers/simple-rotating-section"

import { RippleButton } from "~/components/ui/ripple-button"
export default function PersonalProjects() {
  const navigate = useNavigate()
  return (
    <div>
      <SimpleRotatingSection
        fullWidth={false}
        titles={["Personal Projects"]}
        backButtonText={
          <RippleButton
            className="flex flex-row items-center rounded-lg p-2 text-sm font-medium text-white"
            onClick={() => navigate(-1)}
          >
            <div className="flex flex-row items-center">
              <ChevronLeft />
            </div>
          </RippleButton>
        }
      />
      <PageBreadcrumb
        links={[
          { name: "Portfolio", href: "/portfolio" },
          { name: "Personal Projects" },
        ]}
      />
      <ProjectTimelineCards />
    </div>
  )
}
