import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "motion/react"

interface Project {
  img: string
  title: string
  description: string
  techStack: Array<string>
}

const projects: Array<Project> = []

function TimelineEntry({ project }: { project: Project }) {
  return (
    <div className="border-y border-border bg-transparent px-5 py-5 backdrop-blur-sm supports-backdrop-filter:bg-transparent"></div>
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
      <div className="flex flex-col gap-12">
        {projects.map((project, i) => (
          <TimelineEntry key={i} project={project} />
        ))}
      </div>
    </div>
  )
}
