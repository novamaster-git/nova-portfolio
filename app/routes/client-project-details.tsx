import { ChevronLeft } from "lucide-react"
import {
  useLoaderData,
  useNavigate,
  type LoaderFunctionArgs,
} from "react-router"
import { fileURLToPath } from "node:url"
import { join, dirname } from "node:path"
import { marked } from "marked"
import { ThumbnailCarousel } from "~/components/image-carousel"
import PageBreadcrumb from "~/components/page-breadcrum"
import SimpleRotatingSection from "~/components/section-headers/simple-rotating-section"
import { RippleButton } from "~/components/ui/ripple-button"
import { readFile } from "node:fs/promises"

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const filePath = join(__dirname, "../docs/md/pro.md")
  const markdown = await readFile(filePath, "utf-8")
  const html = await marked(markdown)
  // 👉 fetch data using id
  const project = {
    projectName: "DTC: Dev Time Converter",
    description:
      "A tool to convert between different time formats used in software development.",
    html,
  }

  return project
}
export default function PersonalProjectDetails() {
  const navigate = useNavigate()
  const project = useLoaderData()
  return (
    <div>
      <SimpleRotatingSection
        fullWidth={false}
        titles={[project?.projectName]}
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
          { name: "Client Projects", href: "/portfolio/client-projects" },
          { name: "Project Details" },
        ]}
      />
      <div className="relative mx-auto max-w-5xl border-x p-4">
        <ThumbnailCarousel />
      </div>
      <div className="relative mx-auto max-w-5xl border-x border-t p-4">
        <div
          className="prose-md mx-auto prose max-w-4xl pt-5 dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </div>
      <div className="relative mx-auto max-w-5xl border-x border-t p-4">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          <div>
            <p>Last Updated: 12 Jan 2026, 12:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}
