import { Link } from "react-router"
import { Search } from "lucide-react"

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
import { Separator } from "~/components/ui/separator"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/100 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-xl items-center justify-between border-x border-border/100 px-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">
              NM<span className="text-muted-foreground">.</span>
            </span>
          </Link>
        </div>

        {/* Right: Navigation + Controls */}
        <nav className="flex items-center gap-2 md:gap-4">
          {/* Navigation Menu */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9">
                    Getting started
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none select-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium">
                              NM.
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix
                              UI and Tailwind CSS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="/" title="Typography">
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9">
                    Components
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem title="Alert Dialog" href="/">
                        A modal dialog that interrupts the user with important
                        content and expects a response.
                      </ListItem>
                      <ListItem title="Hover Card" href="/">
                        For sighted users to preview content available behind a
                        link.
                      </ListItem>
                      <ListItem title="Progress" href="/">
                        Displays an indicator showing the completion progress of
                        a task, typically displayed as a progress bar.
                      </ListItem>
                      <ListItem title="Scroll-area" href="/">
                        Visually or semantically separates content.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9">
                    With Icon
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <ListItem title="Item 1" href="/">
                        Description 1
                      </ListItem>
                      <ListItem title="Item 2" href="/">
                        Description 2
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link to="/" className="h-9">
                      Docs
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <button className="relative inline-flex h-8 w-full items-center justify-start gap-2 rounded-[0.5rem] border border-input bg-muted/50 px-4 py-2 text-sm font-normal whitespace-nowrap text-muted-foreground shadow-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:pr-12 md:w-32 lg:w-56">
            <span className="hidden items-center gap-2 lg:inline-flex">
              <Search className="h-4 w-4" />
              Search...
            </span>
            <span className="inline-flex items-center gap-2 lg:hidden">
              <Search className="h-4 w-4" />
              Search...
            </span>
            <kbd className="pointer-events-none absolute top-[0.3rem] right-[0.3rem] hidden h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>

          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

function ListItem({
  className,
  title,
  children,
  href,
}: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={
            "block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground " +
            (className || "")
          }
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
