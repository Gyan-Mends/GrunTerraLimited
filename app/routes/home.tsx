import { services, projects } from "~/utils/data";

export const meta = () => [
    { title: "Grun Terra Limited | Broad Vision. Honest Service. Great Value." },
    { name: "description", content: "Grun Terra Limited provides quality, on-time construction projects. Get a free quote today." }
];

const Home = () => {
    const getProjectClasses = (size: string, index: number) => {
        // Explicit grid positioning for 4 projects layout
        if (index === 0) return 'lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1'; // Large project - left side
        if (index === 1) return 'lg:col-start-3 lg:row-start-1'; // Medium - top right
        if (index === 2) return 'lg:col-start-4 lg:row-start-1'; // Medium - top right  
        if (index === 3) return 'lg:col-span-2 lg:col-start-3 lg:row-start-2'; // Wide - bottom right
        return '';
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

    return(
        <div className="w-full">
            {/* Hero Section */}
            <section
                className="relative h-screen flex items-center"
                style={{ backgroundImage: "url('/images/home-bg-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
                    <div className="text-white max-w-3xl">
                        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight drop-shadow-md text-white">
                            Broad Vision
                            <br />
                            Honest Service
                            <br />
                            Great Value
                        </h1>
                        <p className="mt-6 text-lg text-white/90 max-w-2xl">
                            Our goal then and now is to provide quality on time projects
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a href="#quote" className="bg-[#f39c3c] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">Get Free Quote →</a>
                            <a href="#contact" className="border border-white/80 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0f6b3a] transition">Get In Touch</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-8">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="w-8 h-1 bg-[#f39c3c]"></div>
                                    <span className="text-sm font-medium text-gray-600">ABOUT GRUN TERRA</span>
                                </div>
                                <h2 className="text-3xl font-heading lg:text-4xl font-bold text-gray-900 leading-tight">
                                    We Are The Leader In construction
                                </h2>
                            </div>
                            
                            <p className="text-gray-600 leading-relaxed">
                                In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready.
                            </p>
                            
                            {/* Quote Block */}
                            <div className="bg-gray-50 border-l-4 border-[#f39c3c] pl-6 py-4">
                                <p className="text-gray-700 italic">
                                    In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready.
                                </p>
                            </div>
                            
                            {/* Statistics */}
                            <div className="grid grid-cols-3 gap-8 pt-8">
                                <div className="text-center">
                                    <div className="text-3xl lg:text-4xl font-bold text-[#f39c3c] mb-2">53K</div>
                                    <div className="text-sm text-gray-600 font-medium">Layout Done</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl lg:text-4xl font-bold text-[#f39c3c] mb-2">10K</div>
                                    <div className="text-sm text-gray-600 font-medium">Projects Done</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl lg:text-4xl font-bold text-[#f39c3c] mb-2">120</div>
                                    <div className="text-sm text-gray-600 font-medium">Get Award</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Image */}
                        <div className="relative">
                            <img 
                                src="/images/section_two_image.jpg" 
                                alt="Modern building architecture" 
                                className="w-full h-[80vh] rounded-xl"
                            />
                            {/* Orange border frame behind image - bottom and right only */}
                            <div className="absolute inset-0 border-b-4 border-r-4 border-[#f39c3c] transform translate-x-6 translate-y-6 z-10 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* What We Can Do Section */}
            <section id="services" className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Our Services</span>
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            What We Can Do
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            We provide comprehensive construction services with expertise, quality, and reliability at every stage of your project.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                                {/* Service Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={service.image} 
                                        alt={service.alt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                                </div>
                                
                                {/* Service Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                    
                                    {/* Call to Action */}
                                    <div className="flex items-center text-[#f39c3c] font-medium group-hover:text-[#e8902f] transition-colors duration-300">
                                        <span>Learn More</span>
                                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <a 
                            href="#contact" 
                            className="inline-flex items-center px-8 py-3 bg-[#f39c3c] text-white font-semibold rounded-lg hover:bg-[#e8902f] transition-colors duration-300"
                        >
                            Get Free Consultation
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            {/* Projects Section */}
            <section id="projects" className="py-24 bg-white">
                <div className="w-full">
                    {/* Section Header */}
                    <div className="text-center mb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Our Recent Projects</span>
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Our Recent Projects
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                            Explore our portfolio of completed construction projects that showcase our expertise, quality craftsmanship, and commitment to excellence.
                        </p>
                        <button className="bg-[#f39c3c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e8902f] transition-colors duration-300">
                            View All Projects
                        </button>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4   ">
                        {projects.map((project, index) => (
                            <div key={project.id} className={`relative group overflow-hidden  ${getProjectClasses(project.size, index)}`}>
                                <div className={`${getProjectAspectRatio(project.size)} relative`}>
                                    <img 
                                        src={project.image} 
                                        alt={project.alt} 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                                    <div className={`absolute text-white ${project.size === 'large' || project.size === 'wide' ? 'bottom-6 left-6' : 'bottom-4 left-4'}`}>
                                        <h3 className={`font-semibold mb-${project.size === 'large' || project.size === 'wide' ? '2' : '1'} ${project.size === 'large' || project.size === 'wide' ? 'text-xl' : 'text-lg'}`}>
                                            {project.title}
                                        </h3>
                                        <p className={`text-white/80 ${project.size === 'large' || project.size === 'wide' ? 'text-sm' : 'text-xs'}`}>
                                            {project.category}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="contact" className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold">Contact Us</h2>
                    <p className="mt-4 text-gray-600">Content coming soon.</p>
                </div>
            </section>
        </div>
    )
}

export default Home