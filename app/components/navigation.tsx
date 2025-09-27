import { useState } from "react";
import { Users, Menu, X, Facebook, Twitter, Search } from "lucide-react";
import { Link, useLocation } from "react-router";

const navigation = [
    { name: "Home", to: "/", isExternal: false },
    { name: "About", to: "/about", isExternal: false },
    { name: "Services", to: "/services", isExternal: false },
    { name: "Projects", to: "/projects", isExternal: false },
    { name: "News", to: "/news", isExternal: false },
    { name: "Team", to: "/team", isExternal: false },
    { name: "Contact", to: "/contact", isExternal: false },
];

const mobileNavigation = [
    { name: "Home", to: "/", isExternal: false },
    { name: "About", to: "/about", isExternal: false },
    { name: "Services", to: "/services", isExternal: false },
    { name: "Projects", to: "/projects", isExternal: false },
    { name: "News", to: "/news", isExternal: false },
    { name: "Team", to: "/team", isExternal: false },
    { name: "Contact", to: "/contact", isExternal: false },
];

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (href: string) => {
        if (href === "/") {
            return location.pathname === "/";
        }
        return location.pathname === href;
    };

    return (
        <header className="absolute top-0 left-0 right-0 pt-6 pb-6 z-[9999] transition-all duration-300 border-b border-white/40 ">
            <div className="">
                <div className="bg-transparent lg:bg-transparent  transition-all duration-300  lg:shadow-none">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                        <Link 
                            to="/" 
                            className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200"
                        >
                            <img 
                                src="/logo.png" 
                                alt="Grun Terra Limited" 
                                className="lg:w-52 lg:h-10 w-auto h-full"
                            />
                           
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className={`font-medium transition-colors duration-200 relative group ${
                                        isActive(item.to)
                                            ? 'text-[#f39c3c]'
                                            : 'text-white hover:text-[#f39c3c]'
                                    }`}
                                >
                                    {item.name}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                                        isActive(item.to) ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                                </Link>
                            ))}
                        </nav>

                        {/* Social Icons */}
                        <div className="hidden lg:flex items-center gap-4 text-white">
                            <a href="#" aria-label="Facebook" className="hover:text-[#f39c3c] transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" aria-label="Twitter" className="hover:text-[#f39c3c] transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" aria-label="Instagram" className="hover:text-[#f39c3c] transition-colors">
                                {/* Using Users icon placeholder for Instagram if not imported */}
                                <Users className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 rounded-md text-gray-800 lg:text-white hover:text-[#f39c3c] hover:bg-orange-800/50 transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-white" />
                            ) : (
                                <Menu className="w-6 h-6 text-white" />
                            )}
                        </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <nav className="lg:hidden mt-6 pb-6 border-t border-[#f39c3c]/20 pt-6 animate-fade-in bg-white backdrop-blur-sm ">
                            <div className="flex flex-col space-y-2 px-4">
                                {mobileNavigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className={`font-medium transition-all duration-200 py-3 px-4 rounded-lg border-l-4 ${
                                            isActive(item.to)
                                                ? 'text-[#f39c3c] bg-[#f39c3c]/10 border-[#f39c3c]'
                                                : 'text-gray-700 hover:text-[#f39c3c] hover:bg-[#f39c3c]/5 border-transparent hover:border-[#f39c3c]/30'
                                        }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                {/* Mobile Social Links */}
                                <div className="mt-6 pt-4 border-t border-gray-200">
                                    <div className="flex justify-center space-x-6">
                                        <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-[#f39c3c] transition-colors">
                                            <Facebook className="w-6 h-6" />
                                        </a>
                                        <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-[#f39c3c] transition-colors">
                                            <Twitter className="w-6 h-6" />
                                        </a>
                                        <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-[#f39c3c] transition-colors">
                                            <Users className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
}