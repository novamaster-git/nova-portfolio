import { SparklesText } from "../ui/sparkles-text"

export default function AboutMeSection() {
  return (
    <div
      className="container mx-auto flex max-w-5xl flex-row border-x border-border px-5 py-15"
      id="about"
    >
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
  )
}
