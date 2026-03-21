import { AnimatedGridPattern } from "../ui/animated-grid-pattern"

export default function BlurGridContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative overflow-hidden border-y border-border">
      <div className="relative mx-auto max-w-5xl border-x p-5 py-10">
        <AnimatedGridPattern
          maxOpacity={0.3}
          numSquares={200}
          className="z-5"
        />
        <div className="absolute inset-0 z-10 backdrop-blur supports-backdrop-filter:bg-background/40" />
        {children}
      </div>
    </div>
  )
}
