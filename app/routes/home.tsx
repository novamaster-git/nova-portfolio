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
import { LightRays } from "~/components/ui/light-rays"
import { CountupComponent } from "~/components/countup-component"

import {
  ArrowBigDownDash,
  EarthIcon,
  Github,
  Globe,
  Linkedin,
  ArrowRight,
  Crown,
} from "lucide-react"
import { SparklesText } from "~/components/ui/sparkles-text"

import { AnimatedGridPattern } from "~/components/ui/animated-grid-pattern"
export default function Home() {
  return (
    <div>
      <div className="container mx-auto flex max-w-5xl flex-row border-x border-border py-5">
        <div className="flex-2 p-5">
          <Card className="relative overflow-hidden border border-white/20 bg-white/10 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-black/20">
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
        <div className="flex flex-3 flex-col gap-5 py-5 pr-5">
          <Card className="relative overflow-hidden border border-white/20 bg-white/10 px-3 pt-5 pb-10 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-black/20">
            <LightRays speed={8} />
            <CardContent className="relative flex flex-col gap-3 bg-transparent">
              <div className="flex flex-row items-center gap-2">
                <Crown />
                <h3 className="text-lg font-bold">ABOUT ME</h3>
              </div>
              <h1 className="text-4xl font-bold">
                Hello (👋),
                <br /> I'm NOVAMASTER
              </h1>
              <p className="text-lg">
                I'm a passionate Full Stack Developer with a strong background
                in web development. My expertise lies in creating dynamic and
                responsive websites that deliver exceptional user experiences.
              </p>
            </CardContent>
          </Card>
          <div className="mt-3 flex flex-row gap-5">
            <Card className="relative flex-1 overflow-hidden border border-white/20 bg-white/10 px-3 pt-5 pb-10 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-black/20">
              <CardContent className="flex flex-col justify-center">
                <h2 className="text-6xl font-bold">4+</h2>
                <h3 className="mt-2 text-xl leading-4 font-thin">Years</h3>
                <h1 className="text-lg font-medium">Expariance</h1>
              </CardContent>
            </Card>
            <Card className="relative flex-1 overflow-hidden border border-white/20 bg-white/10 px-3 pt-5 pb-10 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-black/20">
              <CardContent className="flex flex-col justify-center">
                <h2 className="text-6xl font-bold">12+</h2>
                <h3 className="mt-2 text-xl leading-4 font-thin">Projects</h3>
                <h1 className="text-lg font-medium">Completed</h1>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden border-y border-border">
        <div className="relative mx-auto max-w-5xl border-x p-5 py-10">
          <AnimatedGridPattern
            maxOpacity={0.3}
            numSquares={200}
            className="z-5"
          />
          <div className="absolute inset-0 z-10 backdrop-blur supports-backdrop-filter:bg-background/40" />
          <div className="relative z-20">
            <h2 className="mb-2 text-center text-sm font-medium tracking-[0.3em] text-foreground/40 uppercase">
              Debugging Since
            </h2>
            <CountupComponent />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex max-w-5xl flex-row border-x border-border p-5">
        <div className="mt-5 flex flex-3 flex-col gap-4 pr-5">
          <SparklesText className="text-3xl font-medium">
            Little Bit More About Me.
          </SparklesText>
          <p>
            I started coding from scratch 5 years ago in 2020, beginning with
            HTML, CSS, and JavaScript to build websites.
          </p>
          <p>
            My first project was a simple website built with HTML, CSS, and
            JavaScript (~mid-2020). As I progressed, I mastered React.js and
            Next.js. Now, I work with all the latest tech stacks to build
            production-ready SaaS applications.
          </p>
        </div>
        <div className="mt-5 flex-1">
          <div className="h-50 border border-border">
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExczd3N2gybTdzemN4cGlpN3BrMXh1N2pmbnB4dDlpdWxkc3B1cG9tZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BomawdqbHwpbZy5faU/giphy.gif"
              alt="whoami"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
