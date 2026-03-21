import { FlickeringGrid } from "../ui/flickering-grid"

export default function FlickeringGridSection({ title }: { title?: string }) {
  return (
    <div className="relative mx-auto max-h-38 max-w-5xl overflow-hidden border-x">
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
        <div className="absolute inset-0 z-10 flex max-h-38 flex-col items-center justify-center">
          <h1 className="text-center text-5xl font-bold">
            {title || "My Portfolio"}
          </h1>
        </div>
      </div>
    </div>
  )
}
