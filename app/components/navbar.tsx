import { Link } from "react-router"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
  Search,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu"
import { ModeToggle } from "~/components/mode-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-5xl items-center justify-between border-x border-border px-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">
              NM<span className="text-[red]">.</span>
            </span>
          </Link>
        </div>

        {/* Right: Navigation + Controls */}
        <div className="flex items-center space-x-4">
          <NavigationMenuDemo />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]
export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/docs" title="Introduction">
                This is a personal portfolio website built with React and
                Tailwind CSS, showcasing my projects, experience, and skills as
                a web developer. It serves as a platform to share my work and
                connect with potential employers or collaborators.
              </ListItem>
              <ListItem href="/docs/installation" title="Timer">
                This showing my experience timeline, highlighting my
                professional journey, key milestones, and achievements.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Experience">
                This section highlights my professional experience, including
                previous roles, projects, and accomplishments in the field of
                web development.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Skills">
                This section highlights my key skills and expertise in web
                development, including proficiency in React, Tailwind CSS, and
                other relevant technologies.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Contact Me">
                This section provides information on how to get in touch with
                me, including email, social media, and other contact methods.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="#" className="flex-row items-center gap-2">
                    <CircleAlertIcon />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#" className="flex-row items-center gap-2">
                    <CircleDashedIcon />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
