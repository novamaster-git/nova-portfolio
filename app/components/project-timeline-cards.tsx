import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "motion/react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
interface Project {
  img: string
  title: string
  description: string
  techStack: Array<string>
  bullets: Array<string>
}

const projects: Array<Project> = [
  {
    title: "DTC: Dev Time Converter",
    description:
      "A Google chrome extension that converts timestamps to your local timezone. Built with React and Node.js.",
    bullets: [
      "Built a Chrome extension that converts timestamps to the user's local timezone, enhancing user experience across different regions.",
      "Implemented the extension using React for the frontend and Node.js for backend processing, ensuring a responsive and efficient user interface.",
      "Deployed the extension on the Chrome Web Store, achieving over 10,000 downloads and receiving positive feedback for its functionality and ease of use.",
    ],
    techStack: ["React", "Node.js", "Chrome Extensions API"],
    img: "/assets/image/projects/dtc_ss.png",
  },
  {
    title: "DSA Visualizer",
    description:
      "A web application that visualizes data structures and algorithms. Built with Vue and Django.",
    bullets: [
      "Developed a web application that visualizes data structures and algorithms, aiding in the understanding of complex concepts.",
      "Implemented interactive visualizations using Vue.js, providing a dynamic and engaging user experience.",
      "Integrated Django for backend processing, ensuring efficient data handling and seamless user interactions.",
    ],
    techStack: ["Vue", "Django"],
    img: "/assets/image/projects/dtc_ss.png",
  },
]

function TimelineEntry({ project }: { project: Project }) {
  return (
    <div className="border-y border-border bg-transparent px-5 py-5 backdrop-blur-sm supports-backdrop-filter:bg-transparent">
      <div className="flex flex-row">
        <div className="flex-1">
          <img
            src={project.img}
            alt={project.title}
            className="h-auto w-full rounded-lg"
          />
        </div>
        <div className="flex-1">
          <div className="flex h-full flex-col px-5">
            <div className="flex-1">
              <h2 className="mt-3 text-3xl font-bold">{project.title}</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-4 list-inside list-disc text-sm text-muted-foreground">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="my-2">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <Badge key={i} variant={"default"} className="p-3">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant={"secondary"}>Read more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectTimelineCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const lineOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden border-x">
      <div ref={containerRef} className="relative py-5">
        {/* Static track line */}
        <div className="absolute top-0 bottom-0 left-24 w-0.5 bg-border/40" />

        {/* Animated progress line */}
        <motion.div
          className="absolute top-0 left-24 w-0.5 origin-top bg-linear-to-b from-primary via-primary/80 to-primary/40"
          style={{ height: lineHeight, opacity: lineOpacity }}
        >
          {/* Glow at the tip */}
          <div className="absolute bottom-0 left-1/2 h-8 w-4 -translate-x-1/2 rounded-full bg-primary/50 blur-md" />
        </motion.div>

        {/* Timeline entries */}
        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <TimelineEntry key={i} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
