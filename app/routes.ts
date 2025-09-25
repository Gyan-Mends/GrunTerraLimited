import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/_layout.tsx", [
        route("/", "routes/home.tsx"),
        route("/about", "routes/about.tsx"),
        route("/services", "routes/services.tsx"),
        route("/projects", "routes/projects.tsx"),
        route("/contact", "routes/contact.tsx"),
        route("/news", "routes/news.tsx"),
        route("/team", "routes/team.tsx"),
    ]),

    route("/hero", "routes/hero.tsx"),

] satisfies RouteConfig;
