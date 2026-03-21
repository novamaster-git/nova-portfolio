import { RippleButton } from "../ui/ripple-button"
import { WordRotate } from "../ui/word-rotate"
import { ArrowRight } from "lucide-react"
export default function SimpleRotatingSection({
  titles = ["Nothing", "Here"],
}: {
  titles?: string[]
}) {
  return (
    <div className="relative overflow-hidden border-y">
      <div className="relative mx-auto max-w-5xl border-x p-4">
        <h1 className="ml-5 text-left text-3xl font-bold">
          <WordRotate words={titles} />
        </h1>
        <div className="absolute top-1/2 right-5 -translate-y-1/2">
          <RippleButton className="flex flex-row items-center rounded-lg px-3 py-2 text-sm font-medium text-white">
            <div className="flex flex-row items-center">
              See All <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </RippleButton>
        </div>
      </div>
    </div>
  )
}
