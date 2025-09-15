import { Outlet, Link } from "react-router";
import Navigation from "../components/navigation";
import { InstagramIcon, LinkedinIcon, TwitterIcon, XIcon, YoutubeIcon } from "lucide-react";
import { FacebookIcon } from "lucide-react";

export default function AppLayout() {

    return (
        <div className="min-h-screen ">

            <Navigation />
            <Outlet />
            
        </div>
    )
}