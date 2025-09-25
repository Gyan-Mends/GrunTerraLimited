import { useState } from "react";
import { Users, Menu, X, Facebook, Twitter, Search } from "lucide-react";
import { Link, useLocation } from "react-router";

const navigation = [
    { name: "Home", to: "/", isExternal: false },
    { name: "About", to: "/#about", isExternal: false },
    { name: "Services", to: "/#services", isExternal: false },
    { name: "Projects", to: "/#projects", isExternal: false },
    { name: "Contact Us", to: "/#contact", isExternal: false },
];

const mobileNavigation = [
    { name: "Home", to: "/", isExternal: false },
    { name: "About", to: "/#about", isExternal: false },
    { name: "Services", to: "/#services", isExternal: false },
    { name: "Projects", to: "/#projects", isExternal: false },
    { name: "Contact Us", to: "/#contact", isExternal: false },
];

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (href: string) => {
        if (href === "/") {
            return location.pathname === "/";
        }
        if (href.startsWith("/#")) {
            return location.pathname === "/" && location.hash === href.substring(1);
        }
        return location.pathname === href;
    };

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
        if (isExternal) {
            setMobileMenuOpen(false);
            return;
        }
        
        setMobileMenuOpen(false);
        
        // Handle hash links (sections on home page)
        if (href.startsWith('/#')) {
            e.preventDefault();
            // If we're on the home page, scroll to section
            if (location.pathname === '/') {
                const targetId = href.replace('/#', '');
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            } else {
                // If we're on another page, navigate to home page with hash
                window.location.href = href;
            }
        }
        // For regular routes, let React Router handle navigation
    };

    return (
        <header className="absolute top-0 left-0 right-0 pt-6 pb-6 z-[9999] transition-all duration-300 border-b border-white/40 ">
            <div className="">
                <div className="bg-transparent lg:bg-transparent bg-white/95  transition-all duration-300">
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
                                item.to.startsWith('/#') ? (
                                    <a
                                        key={item.name}
                                        href={item.to}
                                        className={`font-medium transition-colors duration-200 relative group ${
                                            isActive(item.to) 
                                                ? 'text-[#f39c3c]' 
                                                : 'text-white hover:text-[#f39c3c]'
                                        }`}
                                        onClick={(e) => handleNavigation(e, item.to, item.isExternal)}
                                    >
                                        {item.name}
                                        <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                                            isActive(item.to) ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                    </a>
                                ) : (
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
                                )
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
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <nav className="lg:hidden mt-4 pb-4 border-t border-orange-400 pt-4 animate-fade-in bg-white/95 backdrop-blur-sm">
                            <div className="flex flex-col space-y-4">
                                {mobileNavigation.map((item) => (
                                    item.to.startsWith('/#') ? (
                                        <a
                                            key={item.name}
                                            href={item.to}
                                            className={`font-medium transition-colors duration-200 py-2 ${
                                                isActive(item.to) 
                                                    ? 'text-[#f39c3c]' 
                                                    : 'text-black hover:text-orange-600'
                                            }`}
                                            onClick={(e) => handleNavigation(e, item.to, item.isExternal)}
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <Link 
                                            key={item.name}
                                            to={item.to} 
                                            className={`font-medium transition-colors duration-200 py-2 ${
                                                isActive(item.to) 
                                                    ? 'text-[#f39c3c]' 
                                                    : 'text-black hover:text-orange-600'
                                            }`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
}