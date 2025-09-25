import { services } from "~/utils/data";

export const meta = () => [
    { title: "Our Services | Grun Terra Limited | Construction & Building Services" },
    { name: "description", content: "Comprehensive construction services including residential, commercial, and infrastructure development. Quality craftsmanship, project management, and renovation services." },
    { name: "keywords", content: "construction services, residential construction, commercial construction, infrastructure development, project management, renovation services, building contractors, construction company services" },
    { property: "og:title", content: "Professional Construction Services | Grun Terra Limited" },
    { property: "og:description", content: "From residential homes to commercial complexes and infrastructure projects, we deliver comprehensive construction solutions with quality and reliability." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://grunterra.com/services" },
    { property: "og:image", content: "/images/construction-hero.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "index, follow" }
];

const Services = () => {
    const detailedServices = [
        {
            id: 1,
            title: "Residential Construction",
            description: "From custom homes to multi-unit developments, we create living spaces that combine comfort, functionality, and style.",
            image: "/images/construction-hero.jpg",
            alt: "Residential Construction",
            features: [
                "Custom Home Design & Build",
                "Multi-Family Housing",
                "Home Additions & Extensions",
                "Luxury Residential Projects",
                "Energy-Efficient Construction",
                "Smart Home Integration"
            ],
            process: [
                "Initial consultation and site analysis",
                "Design development and planning",
                "Permit acquisition and approvals",
                "Construction and project management",
                "Quality inspections and final walkthrough"
            ]
        },
        {
            id: 2,
            title: "Commercial Construction",
            description: "Professional commercial spaces designed for business success, from offices to retail establishments and industrial facilities.",
            image: "/images/resident2.jpg",
            alt: "Commercial Construction",
            features: [
                "Office Buildings & Corporate Centers",
                "Retail Spaces & Shopping Centers",
                "Industrial Facilities & Warehouses",
                "Healthcare & Medical Facilities",
                "Educational Buildings",
                "Hospitality & Entertainment Venues"
            ],
            process: [
                "Project feasibility and planning",
                "Architectural design and engineering",
                "Construction documentation",
                "Project execution and management",
                "Commissioning and handover"
            ]
        },
        {
            id: 3,
            title: "Infrastructure Development",
            description: "Building the foundation for communities with roads, bridges, utilities, and essential infrastructure projects.",
            image: "/images/resident3.jpg",
            alt: "Infrastructure Development",
            features: [
                "Road Construction & Highway Projects",
                "Bridge Design & Construction",
                "Water & Sewer Systems",
                "Utility Infrastructure",
                "Site Development & Grading",
                "Environmental Remediation"
            ],
            process: [
                "Site survey and environmental assessment",
                "Engineering design and specifications",
                "Environmental and regulatory approvals",
                "Construction and project coordination",
                "Testing, inspection, and certification"
            ]
        }
    ];

    const additionalServices = [
        {
            icon: "M19.428 15.428l-3.429-3.428m0 0l-3.428-3.429m3.428 3.429l3.429 3.428m-3.429-3.428l-3.428 3.429M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
            title: "Project Management",
            description: "End-to-end project coordination ensuring timely delivery, budget control, and quality standards."
        },
        {
            icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
            title: "Design-Build Services",
            description: "Integrated design and construction services for streamlined project delivery and single-point responsibility."
        },
        {
            icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
            title: "Renovation & Remodeling",
            description: "Transform existing spaces with expert renovation services that enhance functionality and aesthetics."
        },
        {
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            title: "Quality Assurance",
            description: "Rigorous quality control processes and inspections to ensure all work meets or exceeds industry standards."
        },
        {
            icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
            title: "Construction Consulting",
            description: "Expert advice on construction methods, materials, regulations, and best practices for your projects."
        },
        {
            icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
            title: "Safety Management",
            description: "Comprehensive safety programs and protocols to ensure the well-being of all project stakeholders."
        }
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section
                className="relative h-[70vh] flex items-center"
                style={{
                    backgroundImage: "url('/images/construction2.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl">
                        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-6" data-aos="fade-up" data-aos-delay="200">
                            Our <span className="text-[#f39c3c]">Services</span>
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                            Comprehensive construction solutions for residential, commercial, and infrastructure projects. Quality craftsmanship backed by decades of experience.
                        </p>
                        <div className="mt-10" data-aos="fade-up" data-aos-delay="600">
                            <a
                                href="#services"
                                className="bg-[#f39c3c] text-white px-8 py-3 font-semibold hover:bg-[#e8902f] transition-colors duration-300 rounded"
                            >
                                Explore Services
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Services Section */}
            <section id="services" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">What We Do</span>
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Our Core Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            We offer a comprehensive range of construction services designed to meet your unique project requirements with excellence and precision.
                        </p>
                    </div>

                    <div className="space-y-24">
                        {detailedServices.map((service, index) => (
                            <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                                {/* Image */}
                                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <img
                                        src={service.image}
                                        alt={service.alt}
                                        className="w-full h-[50vh] rounded-xl object-cover"
                                    />
                                    <div className="absolute inset-0 border-b-4 border-r-4 border-[#f39c3c] transform translate-x-6 translate-y-6 z-10 rounded-xl"></div>
                                </div>

                                {/* Content */}
                                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center space-x-3">
                                                    <svg className="w-5 h-5 text-[#f39c3c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Process */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Process:</h4>
                                        <div className="space-y-2">
                                            {service.process.map((step, idx) => (
                                                <div key={idx} className="flex items-start space-x-3">
                                                    <div className="w-6 h-6 bg-[#f39c3c] text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                                                        {idx + 1}
                                                    </div>
                                                    <span className="text-gray-600">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <a
                                            href="/contact"
                                            className="inline-flex items-center bg-[#f39c3c] text-white px-6 py-3 font-semibold hover:bg-[#e8902f] transition-colors duration-300 rounded"
                                        >
                                            Get Quote
                                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Additional Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Beyond our core construction services, we offer specialized solutions to support every aspect of your project.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {additionalServices.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="w-12 h-12 bg-[#f39c3c] rounded-lg flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-1 bg-[#f39c3c]"></div>
                                <span className="text-sm font-medium text-gray-600">WHY CHOOSE US</span>
                            </div>
                            <h2 className="text-3xl font-heading lg:text-4xl font-bold text-gray-900 leading-tight mb-8">
                                What Sets Us Apart
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Proven Track Record",
                                        description: "Over 500 successful projects completed with a 98% client satisfaction rate."
                                    },
                                    {
                                        title: "Expert Team",
                                        description: "Skilled professionals with decades of combined experience in construction and engineering."
                                    },
                                    {
                                        title: "Quality Materials",
                                        description: "We use only premium materials from trusted suppliers to ensure durability and longevity."
                                    },
                                    {
                                        title: "Transparent Pricing",
                                        description: "Clear, competitive pricing with no hidden costs or unexpected surprises."
                                    },
                                    {
                                        title: "On-Time Delivery",
                                        description: "Rigorous project management ensures completion within agreed timelines."
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="w-6 h-6 bg-[#f39c3c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/images/contructor2.jpg"
                                alt="Construction team working"
                                className="w-full h-[60vh] rounded-xl object-cover"
                            />
                            <div className="absolute inset-0 border-b-4 border-r-4 border-[#f39c3c] transform translate-x-6 translate-y-6 z-10 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-heading">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Contact us today for a free consultation and see how we can bring your construction vision to life with professional expertise and quality craftsmanship.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
                        <a
                            href="/contact"
                            className="bg-[#f39c3c] text-white px-8 py-4 font-semibold rounded hover:bg-[#e8902f] transition-colors duration-300"
                        >
                            Get Free Quote
                        </a>
                        <a
                            href="/projects"
                            className="border-2 border-white text-white px-8 py-4 font-semibold rounded hover:bg-white hover:text-gray-900 transition-colors duration-300"
                        >
                            View Our Projects
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;