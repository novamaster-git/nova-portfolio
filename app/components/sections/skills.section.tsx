import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs"
const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Redux",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Sass",
    "Figma",
    "Vite",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "REST API",
    "GraphQL",
    "Redis",
    "Docker",
  ],
  ai: [
    "Python",
    "TensorFlow",
    "PyTorch",
    "OpenAI API",
    "LangChain",
    "Hugging Face",
    "Scikit-learn",
    "Pandas",
    "NLP",
    "Computer Vision",
  ],
}
export default function SkillsSection() {
  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden border-x pb-12">
      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="mb-8 flex justify-center gap-4 rounded-lg bg-background/60 shadow">
          <TabsTrigger
            value="frontend"
            className="px-6 py-2 text-lg font-semibold"
          >
            Frontend
          </TabsTrigger>
          <TabsTrigger
            value="backend"
            className="px-6 py-2 text-lg font-semibold"
          >
            Backend
          </TabsTrigger>
          <TabsTrigger value="ai" className="px-6 py-2 text-lg font-semibold">
            AI
          </TabsTrigger>
        </TabsList>
        <TabsContent value="frontend">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {skills.frontend.map((skill) => (
              <div
                key={skill}
                className="rounded-lg border border-border bg-background/80 px-4 py-3 text-center font-medium shadow-md transition-colors hover:bg-primary/10"
              >
                {skill}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="backend">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {skills.backend.map((skill) => (
              <div
                key={skill}
                className="rounded-lg border border-border bg-background/80 px-4 py-3 text-center font-medium shadow-md transition-colors hover:bg-primary/10"
              >
                {skill}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ai">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {skills.ai.map((skill) => (
              <div
                key={skill}
                className="rounded-lg border border-border bg-background/80 px-4 py-3 text-center font-medium shadow-md transition-colors hover:bg-primary/10"
              >
                {skill}
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
