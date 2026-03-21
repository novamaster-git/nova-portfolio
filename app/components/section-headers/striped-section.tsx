import { StripedPattern } from "~/components/ui/striped-pattern"
import { WordRotate } from "../ui/word-rotate"
export default function StripedSection({ title }: { title: Array<string> }) {
  return (
    <div className="relative overflow-hidden border-y border-border bg-gradient-to-r from-background via-transparent to-background">
      <div className="relative mx-auto max-w-5xl overflow-hidden border-x p-5 py-5">
        <StripedPattern
          className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          style={{ opacity: 0.15 }}
        />
        <h1 className="mb-4 text-center text-5xl font-extrabold tracking-tight">
          <WordRotate words={title} />
        </h1>
      </div>
    </div>
  )
}
