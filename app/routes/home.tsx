import { Button } from "~/components/ui/button"
import { ModeToggle } from "~/components/mode-toggle"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

import {
  ArrowBigDownDash,
  EarthIcon,
  Github,
  Globe,
  Linkedin,
  ArrowRight,
} from "lucide-react"
export default function Home() {
  return (
    <div>
      <div className="container mx-auto flex max-w-5xl flex-row border-x border-border">
        <div className="flex-2 p-5">
          <Card>
            <CardHeader className="flex flex-row items-center justify-center">
              <img
                src="/assets/image/profile.webp"
                alt="Profile"
                className="rounded-2xl grayscale transition-all duration-300 hover:grayscale-0"
              />
            </CardHeader>
            <CardContent>
              <h1 className="text-4xl font-bold">Soumen Samanta</h1>
              <p>Full Stack Developer</p>
            </CardContent>
            <CardFooter className="flex flex-row gap-2">
              <Button>
                <ArrowBigDownDash /> Download CV
              </Button>
              <Button variant="outline">
                <Linkedin />
              </Button>
              <Button variant="outline">
                <Github />
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-3 flex-col gap-5 p-5">
          <div className="mt-2" />
          <div className="flex flex-row items-center gap-2">
            <Globe />
            <h3 className="text-lg font-bold">ABOUT ME</h3>
          </div>
          <h1 className="text-4xl font-bold">
            Hello,
            <br /> I'm Novamaster
          </h1>
          <p className="text-xl">
            I'm a passionate Full Stack Developer with a strong background in
            web development. My expertise lies in creating dynamic and
            responsive websites that deliver exceptional user experiences.
          </p>
          <div className="mt-3 flex flex-row gap-5"></div>
        </div>
      </div>
      <div className="border-y border-border">
        <div className="mx-auto max-w-5xl border-x p-5">
          <h1>Timer</h1>
        </div>
      </div>
    </div>
  )
}
