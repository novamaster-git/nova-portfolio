import { StripedPattern } from "~/components/ui/striped-pattern"

import { Globe, Linkedin, Github } from "lucide-react"
export default function Footer() {
  return (
    <div className="relative overflow-hidden border-y border-border">
      <div className="relative mx-auto max-w-5xl overflow-hidden border-x">
        <StripedPattern
          className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          style={{ opacity: 0.4 }}
        />
        <div className="flex flex-col items-center justify-between px-4 py-6 md:flex-row">
          <div>
            <div className="flex flex-row items-center gap-1 text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>
                <span className="leading-none">1,234</span> visitors
              </span>
            </div>
            <p>
              <span>&copy; {new Date().getFullYear()} Novamaster</span>
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4 text-muted-foreground md:mt-0">
            <div className="flex flex-col items-end md:items-center">
              <div className="flex gap-4">
                <a
                  href="https://github.com/novamaster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/novamaster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
