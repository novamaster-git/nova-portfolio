import { FlickeringGrid } from "~/components/ui/flickering-grid"
import { WordRotate } from "~/components/ui/word-rotate"

export default function Home() {
  return (
    <div>
      <div className="relative mx-auto max-w-5xl overflow-hidden border-x">
        <div className="relative w-full">
          <FlickeringGrid
            className="relative inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
            squareSize={4}
            gridGap={6}
            color="#60A5FA"
            maxOpacity={0.5}
            flickerChance={0.1}
            height={200}
            width={1200}
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4">
            <h1 className="text-center text-4xl font-bold">My Portfolio</h1>
            <p className="mt-4 text-center text-lg text-muted-foreground">
              Welcome to my portfolio! Here you can find some of the projects
              I've worked on, along with my skills and experience.
            </p>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden border-y">
        <div className="relative mx-auto max-w-5xl border-x p-4">
          <h1 className="text-center text-3xl font-bold">
            <WordRotate words={["Client Projects", "Professional Projects"]} />
          </h1>
        </div>
      </div>
      <div className="relative mx-auto max-w-5xl overflow-hidden border-x"></div>
    </div>
  )
}
