import { Outlet, Link } from "react-router";
import Navigation from "../components/navigation";
import { InstagramIcon, LinkedinIcon, TwitterIcon, XIcon, YoutubeIcon } from "lucide-react";
import { FacebookIcon } from "lucide-react";

export default function AppLayout() {

    return (
        <div className="min-h-screen ">

            <Navigation />
            <Outlet />
            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="bg-gray-950 py-6">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-gray-400 text-sm">
                                © {new Date().getFullYear()} Grun Terra Limited. All rights reserved.
                            </div>
                            <div className="flex gap-6 text-sm">
                                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}