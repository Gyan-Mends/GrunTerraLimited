import { Link, useParams } from "react-router";
import { services, projects } from "~/utils/data";

export const meta = ({ params }: { params: { id: string } }) => {
    const service = services.find(s => s.id === parseInt(params.id));
    if (!service) {
        return [
            { title: "Service Not Found | Grun Terra Limited" },
            { name: "description", content: "The requested service could not be found." }
        ];
    }
    return [
        { title: `${service.title} | Services | Grun Terra Limited` },
        { name: "description", content: service.description },
        { name: "keywords", content: `${service.title}, construction services, building services, construction company` },
        { property: "og:title", content: `${service.title} | Grun Terra Limited` },
        { property: "og:description", content: service.description },
        { property: "og:image", content: service.image },
        { property: "og:type", content: "service" }
    ];
};

const ServiceDetail = () => {
    const { id } = useParams();
    const service = services.find(s => s.id === parseInt(id!));

    if (!service) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
                    <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
                    <Link to="/services" className="bg-[#f39c3c] text-white px-6 py-3 rounded font-semibold hover:bg-[#e8902f] transition-colors">
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    // Get related projects based on service type
    const getRelatedProjects = () => {
        const categoryMap: { [key: string]: string[] } = {
            "Residential Construction": ["Residential"],
            "Commercial Projects": ["Commercial"],
            "Infrastructure Development": ["Infrastructure"]
        };

        const relatedCategories = categoryMap[service.title] || [];
        return projects.filter(project =>
            relatedCategories.some(category => project.category.includes(category))
        ).slice(0, 3);
    };

    const relatedProjects = getRelatedProjects();

    const getServiceFeatures = () => {
        const featureMap: { [key: string]: string[] } = {
            "Residential Construction": [
                "Custom Home Design",
                "New Home Construction",
                "Home Renovations & Additions",
                "Kitchen & Bathroom Remodeling",
                "Basement Finishing",
                "Exterior & Interior Improvements"
            ],
            "Commercial Projects": [
                "Office Building Construction",
                "Retail Space Development",
                "Warehouse & Industrial Buildings",
                "Restaurant & Hospitality Construction",
                "Healthcare Facility Development",
                "Educational Building Projects"
            ],
            "Infrastructure Development": [
                "Road & Highway Construction",
                "Bridge & Overpass Projects",
                "Municipal Infrastructure",
                "Utility Installation",
                "Site Preparation & Grading",
                "Public Works Projects"
            ]
        };

        return featureMap[service.title] || [];
    };

    const features = getServiceFeatures();

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-end">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${service.image}')` }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 w-full pb-16">
                    <div className="max-w-3xl">
                        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-6">
                            {service.title}
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div>
                            <div className="mb-8">
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="w-8 h-1 bg-[#f39c3c]"></div>
                                    <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Our Expertise</span>
                                    <div className="w-8 h-1 bg-[#f39c3c]"></div>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-heading">
                                    Professional {service.title}
                                </h2>

                                {/* Enhanced description with professional styling */}
                                <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-[#f39c3c] mb-8">
                                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-base">
                                    Our experienced team brings decades of expertise to deliver exceptional results that exceed client expectations. We combine innovative techniques with proven methodologies to ensure your project success.
                                </p>
                            </div>

                            {/* Features */}
                            {features.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                        <div className="w-6 h-6 bg-[#f39c3c] rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        What We Offer
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {features.map((feature, index) => (
                                            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-3 h-3 bg-[#f39c3c] rounded-full flex-shrink-0"></div>
                                                    <span className="text-gray-700 font-medium">{feature}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center bg-[#f39c3c] text-white px-8 py-4 font-semibold rounded-lg hover:bg-[#e8902f] transition-colors shadow-lg hover:shadow-xl"
                                >
                                    <span>Get a Free Quote</span>
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link
                                    to="/projects"
                                    className="inline-flex items-center justify-center border-2 border-[#f39c3c] text-[#f39c3c] px-8 py-4 font-semibold rounded-lg hover:bg-[#f39c3c] hover:text-white transition-colors"
                                >
                                    View Our Work
                                </Link>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={service.image}
                                    alt={service.alt}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 border-b-4 border-r-4 border-[#f39c3c] transform translate-x-6 translate-y-6 z-10 rounded-2xl opacity-80"></div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#f39c3c]/10 rounded-full blur-xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Our Process
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We follow a proven process to ensure your project is completed on time, within budget, and to the highest quality standards.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Consultation",
                                description: "Initial meeting to understand your needs, vision, and budget requirements.",
                                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            },
                            {
                                step: "02",
                                title: "Planning",
                                description: "Detailed project planning, design development, and permit acquisition.",
                                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            },
                            {
                                step: "03",
                                title: "Execution",
                                description: "Professional construction with regular progress updates and quality control.",
                                icon: "M19.428 15.428l-3.429-3.428m0 0l-3.428-3.429m3.428 3.429l3.429 3.428m-3.429-3.428l-3.428 3.429"
                            },
                            {
                                step: "04",
                                title: "Completion",
                                description: "Final inspections, walkthrough, and project handover with warranty.",
                                icon: "M5 13l4 4L19 7"
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                                    <div className="relative mb-6">
                                        <div className="w-20 h-20 bg-gradient-to-br from-[#f39c3c] to-[#e8902f] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={process.icon} />
                                            </svg>
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-[#f39c3c] text-[#f39c3c] rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                                            {process.step}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#f39c3c] transition-colors">
                                        {process.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {process.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <section className="py-24 bg-white">
                    <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                                Related Projects
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Explore some of our recent {service.title.toLowerCase()} projects
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedProjects.map((project) => (
                                <Link
                                    key={project.id}
                                    to={`/projects/${project.id}`}
                                    className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                                >
                                    <div className="aspect-video overflow-hidden relative">
                                        <img
                                            src={project.image}
                                            alt={project.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-3">
                                            <span className="bg-[#f39c3c]/10 text-[#f39c3c] px-3 py-1 rounded-full text-xs font-semibold">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#f39c3c] transition-colors line-clamp-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <div className="flex items-center text-[#f39c3c] text-sm font-medium group-hover:text-[#e8902f] transition-colors">
                                                <span>View Project</span>
                                                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-24 bg-[#f39c3c]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-heading">
                        Ready to Start Your {service.title} Project?
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Contact us today for a free consultation and detailed quote for your project.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="bg-white text-[#f39c3c] px-8 py-4 font-semibold rounded hover:bg-gray-100 transition-colors"
                        >
                            Get Free Quote
                        </Link>
                        <Link
                            to="/projects"
                            className="border-2 border-white text-white px-8 py-4 font-semibold rounded hover:bg-white hover:text-[#f39c3c] transition-colors"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;