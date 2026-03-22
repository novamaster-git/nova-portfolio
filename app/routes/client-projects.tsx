import { ChevronLeft } from "lucide-react"
import { ProjectTimelineCards } from "~/components/project-timeline-cards"
import SimpleRotatingSection from "~/components/section-headers/simple-rotating-section"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"
import { RippleButton } from "~/components/ui/ripple-button"
export default function ClientProjects() {
  return (
    <div>
      <SimpleRotatingSection
        fullWidth={false}
        titles={["Client Projects"]}
        backButtonText={
          <RippleButton className="flex flex-row items-center rounded-lg p-2 text-sm font-medium text-white">
            <div className="flex flex-row items-center">
              <ChevronLeft />
            </div>
          </RippleButton>
        }
      />
      <div className="relative mx-auto max-w-5xl border-x border-y p-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Portfolio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Client Projects</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <ProjectTimelineCards />
    </div>
  )
}
