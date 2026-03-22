import type { ReactNode } from "react"
import { WordRotate } from "../ui/word-rotate"
export default function SimpleRotatingSection({
  titles = ["Nothing", "Here"],
  fullWidth = true,
  rightButtonText,
  backButtonText,
}: {
  titles?: string[]
  fullWidth?: boolean
  rightButtonText?: ReactNode
  backButtonText?: ReactNode
}) {
  if (fullWidth) {
    return (
      <div className="relative overflow-hidden border-y">
        <div className="relative mx-auto max-w-5xl border-x p-4">
          <div className="flex flex-row">
            {backButtonText}
            <h1 className="ml-5 text-left text-3xl font-bold">
              <WordRotate words={titles} />
            </h1>
          </div>
          <div className="absolute top-1/2 right-5 -translate-y-1/2">
            {rightButtonText}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="relative mx-auto max-w-5xl border-x p-4">
      <div className="flex flex-row items-center">
        {backButtonText}
        <h1 className="ml-5 text-left text-3xl font-bold">
          <WordRotate words={titles} />
        </h1>
      </div>
      <div className="absolute top-1/2 right-5 -translate-y-1/2">
        {rightButtonText}
      </div>
    </div>
  )
}
