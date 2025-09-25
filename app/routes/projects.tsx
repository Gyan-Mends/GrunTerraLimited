import { projects } from "~/utils/data";

export const meta = () => [
    { title: "Our Projects | Grun Terra Limited | Construction Portfolio" },
    { name: "description", content: "Explore our portfolio of successful construction projects including residential homes, commercial buildings, and infrastructure development. Quality craftsmanship showcase." },
    { name: "keywords", content: "construction projects, construction portfolio, residential projects, commercial construction projects, infrastructure projects, building projects, construction gallery" },
    { property: "og:title", content: "Construction Projects Portfolio | Grun Terra Limited" },
    { property: "og:description", content: "View our completed construction projects showcasing quality craftsmanship in residential, commercial, and infrastructure development." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://grunterra.com/projects" },
    { property: "og:image", content: "/images/project1.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "index, follow" }
];

const Projects = () => {
    const categories = ["All", "Residential", "Commercial", "Mixed Use", "Infrastructure"];

    const allProjects = [
        ...projects,
        {
            id: 5,
            title: "Luxury Villa Estate",
            category: "Residential",
            image: "/images/construction-hero.jpg",
            size: "large" as const,
            alt: "Luxury Villa Estate",
            description: "A stunning luxury villa featuring modern architecture, premium finishes, and state-of-the-art amenities.",
            completionDate: "March 2025",
            client: "Private Residence",
            location: "Beverly Hills, CA"
        },
        {
            id: 6,
            title: "Corporate Headquarters",
            category: "Commercial",
            image: "/images/resident2.jpg",
            size: "wide" as const,
            alt: "Corporate Headquarters",
            description: "A modern 15-story corporate headquarters with sustainable design features and cutting-edge technology infrastructure.",
            completionDate: "January 2025",
            client: "Tech Solutions Inc.",
            location: "Downtown City"
        },
        {
            id: 7,
            title: "Residential Complex",
            category: "Mixed Use",
            image: "/images/resident3.jpg",
            size: "medium" as const,
            alt: "Residential Complex",
            description: "A mixed-use development combining residential units with retail spaces and community amenities.",
            completionDate: "December 2024",
            client: "Urban Development Corp",
            location: "Midtown District"
        },
        {
            id: 8,
            title: "Highway Bridge Project",
            category: "Infrastructure",
            image: "/images/tower.jpg",
            size: "wide" as const,
            alt: "Highway Bridge Project",
            description: "A major highway bridge construction project designed to improve regional transportation connectivity.",
            completionDate: "October 2024",
            client: "State Transportation Dept",
            location: "Interstate 95"
        },
        {
            id: 9,
            title: "Shopping Center",
            category: "Commercial",
            image: "/images/scrapper.jpg",
            size: "medium" as const,
            alt: "Shopping Center",
            description: "A modern shopping center featuring retail spaces, restaurants, and entertainment facilities.",
            completionDate: "September 2024",
            client: "Retail Properties LLC",
            location: "Suburban Plaza"
        }
    ];

    const getProjectClasses = (size: string, index: number) => {
        const gridItems = [
            'lg:col-span-2 lg:row-span-2',
            'lg:col-span-1 lg:row-span-1',
            'lg:col-span-1 lg:row-span-1',
            'lg:col-span-2 lg:row-span-1',
            'lg:col-span-1 lg:row-span-2',
            'lg:col-span-2 lg:row-span-1',
            'lg:col-span-1 lg:row-span-1',
            'lg:col-span-2 lg:row-span-1',
            'lg:col-span-1 lg:row-span-1'
        ];
        return gridItems[index % gridItems.length] || '';
    };

    const getProjectAspectRatio = (size: string) => {
        switch (size) {
            case 'large':
                return 'aspect-square';
            case 'wide':
                return 'aspect-[2/1]';
            default:
                return 'aspect-square';
        }
    };

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section
                className="relative h-[70vh] flex items-center"
                style={{
                    backgroundImage: "url('/images/project1.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl">
                        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-6" data-aos="fade-up" data-aos-delay="200">
                            Our <span className="text-[#f39c3c]">Projects</span>
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                            Explore our portfolio of successful construction projects that showcase our expertise, quality craftsmanship, and commitment to excellence across various sectors.
                        </p>
                        <div className="mt-10" data-aos="fade-up" data-aos-delay="600">
                            <a
                                href="#portfolio"
                                className="bg-[#f39c3c] text-white px-8 py-3 font-semibold hover:bg-[#e8902f] transition-colors duration-300 rounded"
                            >
                                View Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Filter & Stats */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            { number: "500+", label: "Projects Completed" },
                            { number: "$50M+", label: "Total Project Value" },
                            { number: "98%", label: "Client Satisfaction" },
                            { number: "20+", label: "Years of Experience" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl lg:text-4xl font-bold text-[#f39c3c] mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Filter Buttons */}
                    <div className="text-center">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 font-heading">
                            Filter by Category
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className="px-6 py-2 rounded-full border-2 border-[#f39c3c] text-[#f39c3c] hover:bg-[#f39c3c] hover:text-white transition-colors duration-300 font-medium"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section id="portfolio" className="py-24 bg-white">
                <div className="w-full">
                    <div className="text-center mb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Our Portfolio</span>
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Featured Projects
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Each project represents our commitment to quality, innovation, and client satisfaction. From residential homes to large-scale infrastructure, we deliver excellence in every build.
                        </p>
                    </div>

                    {/* Masonry Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
                        {allProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${getProjectClasses(project.size, index)}`}
                            >
                                <div className={`${getProjectAspectRatio(project.size)} relative`}>
                                    <img
                                        src={project.image}
                                        alt={project.alt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                                    {/* Project Info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="mb-2">
                                            <span className="bg-[#f39c3c] text-white px-3 py-1 text-xs font-medium rounded-full">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#f39c3c] transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        {project.description && (
                                            <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {project.description}
                                            </p>
                                        )}

                                        {/* View Details Button */}
                                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                                            <button className="text-[#f39c3c] font-medium flex items-center hover:text-white transition-colors duration-300">
                                                View Details
                                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Process */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Our Project Process
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            We follow a systematic approach to ensure every project is completed on time, within budget, and to the highest quality standards.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Planning & Design",
                                description: "Initial consultation, site analysis, design development, and detailed project planning.",
                                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            },
                            {
                                step: "02",
                                title: "Permits & Approvals",
                                description: "Handling all necessary permits, approvals, and regulatory compliance requirements.",
                                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            },
                            {
                                step: "03",
                                title: "Construction",
                                description: "Professional construction execution with regular quality checks and progress monitoring.",
                                icon: "M19.428 15.428l-3.429-3.428m0 0l-3.428-3.429m3.428 3.429l3.429 3.428m-3.429-3.428l-3.428 3.429"
                            },
                            {
                                step: "04",
                                title: "Final Delivery",
                                description: "Final inspections, walkthrough, and project handover with warranty support.",
                                icon: "M5 13l4 4L19 7"
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative mb-8">
                                    <div className="w-20 h-20 bg-white border-4 border-[#f39c3c] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#f39c3c] transition-colors duration-300">
                                        <svg className="w-8 h-8 text-[#f39c3c] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={process.icon} />
                                        </svg>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#f39c3c] text-white rounded-full flex items-center justify-center text-sm font-bold">
                                        {process.step}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {process.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {process.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Testimonials for Projects */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Client Success Stories
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Hear from our satisfied clients about their experience working with us on their construction projects.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Grun Terra exceeded our expectations with their attention to detail and professional approach. Our office building was completed on time and within budget.",
                                author: "Sarah Johnson",
                                position: "CEO, Tech Solutions Inc.",
                                project: "Corporate Headquarters"
                            },
                            {
                                quote: "The team's expertise in luxury residential construction is unmatched. They brought our dream home vision to life with exceptional craftsmanship.",
                                author: "Michael Chen",
                                position: "Homeowner",
                                project: "Luxury Villa Estate"
                            },
                            {
                                quote: "Their infrastructure expertise and project management skills made our complex bridge project a success. Highly professional team.",
                                author: "David Rodriguez",
                                position: "Project Manager, State Transportation",
                                project: "Highway Bridge Project"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-xl">
                                <div className="mb-6">
                                    <svg className="w-8 h-8 text-[#f39c3c]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                    </svg>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-6 italic">
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-sm text-gray-500 mb-1">
                                        {testimonial.position}
                                    </p>
                                    <p className="text-sm text-[#f39c3c] font-medium">
                                        Project: {testimonial.project}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#f39c3c]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-heading">
                        Ready to Start Your Next Project?
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Let us help you bring your construction vision to life. Contact us today for a free consultation and project estimate.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/contact"
                            className="bg-white text-[#f39c3c] px-8 py-4 font-semibold rounded hover:bg-gray-100 transition-colors duration-300"
                        >
                            Start Your Project
                        </a>
                        <a
                            href="/services"
                            className="border-2 border-white text-white px-8 py-4 font-semibold rounded hover:bg-white hover:text-[#f39c3c] transition-colors duration-300"
                        >
                            Our Services
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;