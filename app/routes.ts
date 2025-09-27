import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/_layout.tsx", [
        route("/", "routes/home.tsx"),
        route("/about", "routes/about.tsx"),
        route("/services", "routes/services.tsx"),
        route("/services/:id", "routes/services.$id.tsx"),
        route("/projects", "routes/projects.tsx"),
        route("/projects/:id", "routes/projects.$id.tsx"),
        route("/contact", "routes/contact.tsx"),
        route("/news", "routes/news.tsx"),
        route("/news/:id", "routes/news.$id.tsx"),
        route("/team", "routes/team.tsx"),
        route("/team/:id", "routes/team.$id.tsx"),
    ]),

    route("/hero", "routes/hero.tsx"),

] satisfies RouteConfig;
