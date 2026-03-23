import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from "react-router"

import { ThemeProvider } from "~/components/theme-provider"
import { Navbar } from "~/components/navbar"
import type { Route } from "./+types/root"
import "./app.css"
import Footer from "./components/footer"

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  Drawer,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer"
import { Button } from "./components/ui/button"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="NovaMaster Portfolio - Showcase of my projects, experience, and skills as a web developer."
        />

        <title>NovaMaster Portfolio</title>
        <link rel="icon" type="image/svg+xml" href="/assets/image/crown.svg" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const storageKey = "ui-theme";
                const theme = localStorage.getItem(storageKey) || "system";
                const root = document.documentElement;
                root.classList.remove("light", "dark");
                if (theme === "system") {
                  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";
                  root.classList.add(systemTheme);
                } else {
                  root.classList.add(theme);
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="dark">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!"
  let details = "An unexpected error occurred."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error"
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
