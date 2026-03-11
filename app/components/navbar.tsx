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
        <nav className="flex items-center gap-2 md:gap-4">
          {/* Navigation Menu */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link to="/" className="h-9">
                      About Me
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9">
                    Portfolio
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <ListItem title="Alert Dialog" href="/">
                        Client's Projects
                      </ListItem>
                      <ListItem title="Hover Card" href="/">
                        Personal Projects
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
                      Contact Me
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

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
