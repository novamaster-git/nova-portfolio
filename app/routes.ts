import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
  index("routes/home.tsx"),
  route("portfolio", "routes/portfolio.tsx"),
  route("portfolio/client-projects", "routes/client-projects.tsx"),
] satisfies RouteConfig
