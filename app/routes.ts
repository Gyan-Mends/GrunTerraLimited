import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/_layout.tsx", [
        route("/","routes/home.tsx"),
     
    ]),

    route("/hero","routes/hero.tsx"),


] satisfies RouteConfig;
