import { AuroraText } from "../ui/aurora-text"
import { DotPattern } from "../ui/dot-pattern"
import { cn } from "~/lib/utils"
export default function DottedSection({
  fTitle,
  sTitle,
}: {
  fTitle: string
  sTitle: string
}) {
  return (
    <div className="relative overflow-hidden border-y border-border">
      <div className="relative mx-auto max-w-5xl overflow-hidden border-x p-5 py-10">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
          )}
        />
        <h1 className="text-center text-4xl font-bold tracking-tighter md:text-3xl lg:text-5xl">
          {fTitle} <AuroraText>{sTitle}</AuroraText>
        </h1>
      </div>
    </div>
  )
}
