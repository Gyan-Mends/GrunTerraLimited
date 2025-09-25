import { Outlet, Link } from "react-router";
import { useEffect } from "react";
import AOS from "aos";
import Navigation from "../components/navigation";
import { InstagramIcon, LinkedinIcon, TwitterIcon, XIcon, YoutubeIcon } from "lucide-react";
import { FacebookIcon } from "lucide-react";

export const meta = () => [
    { title: "Grun Terra Limited | Premier Construction & Building Services" },
    { name: "description", content: "Leading construction company providing residential, commercial, and infrastructure development services. Quality craftsmanship, reliable project delivery, and competitive pricing." },
    { name: "keywords", content: "construction company, building contractors, residential construction, commercial construction, infrastructure development, construction services, building projects, renovation, remodeling" },
    { property: "og:title", content: "Grun Terra Limited | Premier Construction & Building Services" },
    { property: "og:description", content: "Professional construction services with broad vision, honest service, and great value. Transform your building dreams into reality." },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Grun Terra Limited" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Grun Terra Limited | Premier Construction Services" },
    { name: "twitter:description", content: "Quality construction services with broad vision, honest service, and great value." },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Grun Terra Limited" }
];

export default function AppLayout() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out-cubic',
            once: true,
            mirror: false,
            anchorPlacement: 'top-bottom',
            offset: 50,
        });

        // Refresh AOS when route changes
        AOS.refresh();
    }, []);

    return (
        <div className="min-h-screen ">

            <Navigation />
            <Outlet />
            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                {/* Main Footer Content */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <img 
                                src="/logo.png" 
                                alt="Grun Terra Limited" 
                                className="w-48 h-auto mb-6 filter brightness-0 invert"
                            />
                            <p className="text-gray-300 leading-relaxed mb-6">
                                We are committed to delivering quality construction projects with broad vision, honest service, and great value for our clients.
                            </p>
                            
                            {/* Social Media */}
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-[#f39c3c] transition-colors duration-300">
                                    <TwitterIcon className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-[#f39c3c] transition-colors duration-300">
                                    <FacebookIcon className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-[#f39c3c] transition-colors duration-300">
                                    <LinkedinIcon className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-[#f39c3c] transition-colors duration-300">
                                    <InstagramIcon className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><Link to="/#about" className="text-gray-300 hover:text-[#f39c3c] transition-colors duration-300">About Us</Link></li>
                                <li><Link to="/#services" className="text-gray-300 hover:text-[#f39c3c] transition-colors duration-300">Our Services</Link></li>
                                <li><Link to="/#projects" className="text-gray-300 hover:text-[#f39c3c] transition-colors duration-300">Projects</Link></li>
                                <li><Link to="/#contact" className="text-gray-300 hover:text-[#f39c3c] transition-colors duration-300">Contact Us</Link></li>
                                <li><Link to="#" className="text-gray-300 hover:text-[#f39c3c] transition-colors duration-300">Get Quote</Link></li>
                                <li><Link to="#" className="text-gray-300 hover:text-[#f39c3c] transition-colors duration-300">Careers</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
                            <ul className="space-y-3">
                                <li><Link to="#" className="text-gray-300 hover:text-[#f39c3c] transition-colors duration-300">Residential Construction</Link></li>
                                <li><Link to="#" className="text-gray-300 hover:text-[#f39c3c] transition-colors duration-300">Commercial Projects</Link></li>
                                <li><Link to="#" className="text-gray-300 hover:text-[#f39c3c] transition-colors duration-300">Infrastructure Development</Link></li>
                                <li><Link to="#" className="text-gray-300 hover:text-[#f39c3c] transition-colors duration-300">Project Management</Link></li>
                                <li><Link to="#" className="text-gray-300 hover:text-[#f39c3c] transition-colors duration-300">Renovation & Remodeling</Link></li>
                                <li><Link to="#" className="text-gray-300 hover:text-[#f39c3c] transition-colors duration-300">Consulting Services</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <svg className="w-5 h-5 text-[#f39c3c] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <p className="text-gray-300">123 Construction Avenue</p>
                                        <p className="text-gray-300">Building City, BC 12345</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-[#f39c3c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <p className="text-gray-300">+1 (555) 123-4567</p>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-[#f39c3c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-gray-300">info@grunterra.com</p>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-[#f39c3c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <p className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</p>
                                        <p className="text-gray-300">Sat: 9:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="border-t border-gray-800">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                                <p className="text-gray-300">Subscribe to our newsletter for the latest construction news and project updates.</p>
                            </div>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#f39c3c] w-64"
                                />
                                <button className="bg-[#f39c3c] text-white px-6 py-2 hover:bg-[#e8902f] transition-colors duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-800 bg-gray-950">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="text-center md:text-left mb-4 md:mb-0">
                                <p className="text-gray-400">
                                    © 2025 Grun Terra Limited. All rights reserved.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                                <Link to="#" className="text-gray-400 hover:text-[#f39c3c] transition-colors duration-300">Privacy Policy</Link>
                                <Link to="#" className="text-gray-400 hover:text-[#f39c3c] transition-colors duration-300">Terms of Service</Link>
                                <Link to="#" className="text-gray-400 hover:text-[#f39c3c] transition-colors duration-300">Cookie Policy</Link>
                                <Link to="#" className="text-gray-400 hover:text-[#f39c3c] transition-colors duration-300">Sitemap</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}