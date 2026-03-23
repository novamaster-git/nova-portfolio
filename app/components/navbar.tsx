import React from "react"
import { Link, useNavigate } from "react-router"
import { Link2, Send, Toolbox } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu"
import { ModeToggle } from "~/components/mode-toggle"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./ui/drawer"
import { FiGithub } from "react-icons/fi"

import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-5xl items-center justify-between border-x border-border px-4">
        <div className="flex items-center space-x-2">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">
              NM<span className="text-[red]">.</span>
            </span>
          </Link>
        </div>
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
    title: "Client Projects",
    href: "/portfolio#client-projects",
    description:
      "A showcase of my work with various clients, highlighting the projects I've contributed to and the impact they've had.",
  },
  {
    title: "Personal Projects",
    href: "/portfolio#personal-projects",
    description:
      "A showcase of my personal projects, highlighting the work I've done independently and the skills I've developed.",
  },
  {
    title: "Weekend Projects",
    href: "/portfolio#weekend-projects",
    description:
      "A showcase of my weekend projects, highlighting the work I've done in my spare time and the skills I've developed.",
  },
]

export function NavigationMenuDemo() {
  const navigator = useNavigate()
  const [contactOpen, setContactOpen] = React.useState(false)
  const [linksOpen, setLinksOpen] = React.useState(false)

  return (
    <>
      {/* Drawers lifted outside NavigationMenu to prevent unmount on menu close */}
      <Drawer open={contactOpen} onOpenChange={setContactOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Contact Me</DrawerTitle>
            <DrawerDescription>
              Fill out the form below and I'll get back to you as soon as
              possible.
              <form
                className="mx-auto flex max-w-3xl flex-col gap-4 p-6"
                method="post"
              >
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex flex-1 flex-col">
                    <label
                      className="mb-2 text-left font-medium"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="rounded border-border bg-background"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className="mb-2 text-left font-medium"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="rounded border-border bg-background"
                    />
                  </div>
                </div>

                <label
                  className="text-left leading-1 font-medium"
                  htmlFor="message"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="rounded border-border bg-background"
                />

                <Button type="submit" className="mt-2">
                  Send Message
                </Button>
                <DrawerClose className="w-full">
                  <Button variant="outline" className="w-full">
                    Cancel
                  </Button>
                </DrawerClose>
              </form>
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>

      <Drawer open={linksOpen} onOpenChange={setLinksOpen}>
        <DrawerContent>
          <DrawerHeader className="mx-auto w-5xl">
            <DrawerTitle>Links</DrawerTitle>
            <DrawerDescription>
              Here are some useful links to my profiles and resources.
            </DrawerDescription>
            <div className="gird gird-cols-3">
              <div className="flex flex-col">
                <Link
                  to={"https://github.com/novamaster-git"}
                  className="flex flex-row rounded-lg border px-4 py-2"
                >
                  <FiGithub size={18} />
                  <p className="ml-2">Github</p>
                </Link>
              </div>
            </div>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger onClick={() => navigator("/")}>
              About Me
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <ListItem href="/" title="Introduction">
                  This is a personal portfolio website built with React and
                  Tailwind CSS, showcasing my projects, experience, and skills
                  as a web developer. It serves as a platform to share my work
                  and connect with potential employers or collaborators.
                </ListItem>
                <ListItem href="/#experience" title="Experience">
                  This section highlights my professional experience, including
                  previous roles, projects, and accomplishments in the field of
                  web development.
                </ListItem>
                <ListItem href="/#skills" title="Skills">
                  This section highlights my key skills and expertise in web
                  development, including proficiency in React, Tailwind CSS, and
                  other relevant technologies.
                </ListItem>
                <ListItem href="/#contact" title="Contact Me">
                  This section provides information on how to get in touch with
                  me, including email, social media, and other contact methods.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger onClick={() => navigator("/portfolio")}>
              Portfolio
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-100 gap-2 md:w-125 lg:w-100">
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
              <ul className="grid w-50">
                <li>
                  <NavigationMenuLink asChild>
                    <button
                      onPointerDown={(e) => e.preventDefault()}
                      onClick={() => setContactOpen(true)}
                      className="flex w-full rounded-sm p-3 text-sm transition-colors outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="flex items-center gap-2 leading-none font-medium">
                        <Send className="h-4 w-4" />
                        Contact Me
                      </div>
                    </button>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <button
                      onPointerDown={(e) => e.preventDefault()}
                      onClick={() => setLinksOpen(true)}
                      className="flex w-full rounded-sm p-3 text-sm transition-colors outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="flex items-center gap-2 leading-none font-medium">
                        <Link2 className="h-4 w-4" />
                        Links
                      </div>
                    </button>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <button className="flex w-full rounded-sm p-3 text-sm transition-colors outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="flex items-center gap-2 leading-none font-medium">
                        <Toolbox className="h-4 w-4" />
                        Tools
                      </div>
                    </button>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
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
