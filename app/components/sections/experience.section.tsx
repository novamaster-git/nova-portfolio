import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "motion/react"

import { Calendar } from "lucide-react"
import { Badge } from "~/components/ui/badge"

interface Experience {
  title: string
  company: string
  description: string
  techStack: Array<string>
  type: "fulltime" | "freelance" | "internship"
  location: string
  time: string
  achievements?: Array<string>
}

const experiences: Array<Experience> = [
  {
    title: "Full Stack Developer",
    company: "Marko & Brando",
    description:
      "Leading the development of scalable web applications using React, Node.js, and cloud services. Architecting microservices and building real-time features for enterprise clients.",
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
    type: "fulltime",
    achievements: [
      "Spearheaded the migration of legacy codebase to modern React architecture, improving maintainability and performance.",
      "Implemented CI/CD pipelines using GitHub Actions, reducing deployment times by 50%.",
      "Mentored junior developers and conducted code reviews to ensure high-quality standards.",
    ],
    location: "Girish Park, Kolkata (Remote)",
    time: "Jan 2024 - Present",
  },
  {
    title: "React & React Native Developer",
    company: "Weavers Web Solutions",
    description:
      "Built pixel-perfect responsive interfaces and interactive experiences for high-profile clients. Improved web performance scores by 40% across multiple projects.",
    achievements: [
      "Successfully delivered multiple client projects ahead of schedule.",
      "Implemented advanced animations and transitions using Framer Motion.",
      "Collaborated with designers to create seamless UI/UX workflows.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Figma",
    ],
    type: "fulltime",
    location: "Sector V, Salt Lake City, Kolkata",
    time: "July 2022 - Jan 2024",
  },
  {
    title: "React Native Developer",
    company: "Underscore Technologies",
    description:
      "Delivered end-to-end web solutions for small businesses and startups. Created custom e-commerce platforms, landing pages, and admin dashboards.",
    techStack: ["Next.js", "MongoDB", "Stripe", "Vercel", "Sass"],
    achievements: [
      "Successfully completed 12+ projects for clients across various industries.",
      "Received positive client feedback for delivering high-quality work on time.",
      "Implemented custom features and integrations to meet unique client needs.",
    ],
    type: "fulltime",
    location: "New Town, Kolkata",
    time: "Oct 2021 - June 2022",
  },
]

const typeColorMap: Record<string, string> = {
  fulltime:
    "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/20",
  freelance:
    "bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20",
  internship:
    "bg-sky-500/10 text-sky-500 border-sky-500/20 hover:bg-sky-500/20",
}

function TimelineEntry({ experience }: { experience: Experience }) {
  return (
    <div className="border-y border-border bg-transparent px-5 py-5 backdrop-blur-sm supports-backdrop-filter:bg-transparent">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-lg font-semibold">{experience.company}</h1>
        <p className="flex flex-row items-center gap-2 text-sm text-gray-300">
          <Calendar className="size-4" /> {experience.time}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p className="text-sm text-gray-200">{experience.title}</p>
        <p className="text-sm text-gray-500">{experience.location}</p>
      </div>
      <p className="mt-2 text-sm text-gray-500">{experience.description}</p>
      {experience.achievements && (
        <ul className="mt-2 list-inside list-disc text-sm text-gray-500">
          {experience.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-row flex-wrap items-center gap-2">
        {experience.techStack.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className={`border-2 ${typeColorMap[experience.type] ?? ""}`}
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export function ExperienceTimeline() {
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
        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => (
            <TimelineEntry key={i} experience={exp} />
          ))}
        </div>
      </div>
    </div>
  )
}
