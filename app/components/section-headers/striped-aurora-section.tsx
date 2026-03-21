import { StripedPattern } from "../ui/striped-pattern"
import { AuroraText } from "../ui/aurora-text"

export default function StripedAuroraSection({
  fTitle,
  sTitle,
}: {
  fTitle: string
  sTitle: string
}) {
  return (
    <div className="relative overflow-hidden border-y border-border">
      <div className="relative mx-auto max-w-5xl overflow-hidden border-x p-5 py-10">
        <StripedPattern
          className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          style={{ opacity: 0.2 }}
        />
        <h1 className="text-center text-4xl font-bold tracking-tighter md:text-3xl lg:text-5xl">
          {fTitle} <AuroraText>{sTitle}</AuroraText>
        </h1>
      </div>
    </div>
  )
}
