import { useState } from "react";
import { Link, useParams } from "react-router";
import { projects } from "~/utils/data";

export const meta = ({ params }: { params: { id: string } }) => {
    const project = projects.find(p => p.id === parseInt(params.id));
    if (!project) {
        return [
            { title: "Project Not Found | Grun Terra Limited" },
            { name: "description", content: "The requested project could not be found." }
        ];
    }
    return [
        { title: `${project.title} | Project Details | Grun Terra Limited` },
        { name: "description", content: project.description || project.alt },
        { name: "keywords", content: `${project.category}, construction project, ${project.title}, building project` },
        { property: "og:title", content: `${project.title} | Grun Terra Limited` },
        { property: "og:description", content: project.description || project.alt },
        { property: "og:image", content: project.image },
        { property: "og:type", content: "article" }
    ];
};

const ProjectDetail = () => {
    const { id } = useParams();
    const [activeImage, setActiveImage] = useState(0);

    const project = projects.find(p => p.id === parseInt(id!));

    if (!project) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
                    <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
                    <Link to="/projects" className="bg-[#f39c3c] text-white px-6 py-3 rounded font-semibold hover:bg-[#e8902f] transition-colors">
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    const gallery = project.gallery || [project.image];
    const relatedProjects = projects.filter(p => p.category === project.category && p.id !== project.id).slice(0, 3);

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-end">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${project.image}')` }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
                    <div className="max-w-3xl">
                        <div className="mb-4">
                            <span className="bg-[#f39c3c] text-white px-4 py-2 rounded-full text-sm font-medium">
                                {project.category}
                            </span>
                        </div>
                        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-6">
                            {project.title}
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Project Gallery */}
                            <div className="mb-12">
                                <div className="flex items-center space-x-2 mb-6">
                                    <div className="w-8 h-1 bg-[#f39c3c]"></div>
                                    <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Project Gallery</span>
                                    <div className="w-8 h-1 bg-[#f39c3c]"></div>
                                </div>
                                <div className="space-y-6">
                                    {/* Main Image */}
                                    <div className="relative group">
                                        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                                            <img
                                                src={gallery[activeImage]}
                                                alt={`${project.title} - Image ${activeImage + 1}`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl"></div>
                                    </div>

                                    {/* Thumbnail Gallery */}
                                    {gallery.length > 1 && (
                                        <div className="grid grid-cols-4 gap-4">
                                            {gallery.map((image, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setActiveImage(index)}
                                                    className={`group aspect-video rounded-xl overflow-hidden border-3 transition-all duration-300 ${
                                                        activeImage === index
                                                            ? 'border-[#f39c3c] shadow-lg scale-105'
                                                            : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                                                    }`}
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`${project.title} - Thumbnail ${index + 1}`}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Project Features */}
                            {project.features && (
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                        <div className="w-8 h-8 bg-[#f39c3c] rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        Key Features
                                    </h2>
                                    <div className="bg-gray-50 p-8 rounded-2xl">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {project.features.map((feature, index) => (
                                                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                                    <div className="w-2 h-2 bg-[#f39c3c] rounded-full flex-shrink-0"></div>
                                                    <span className="text-gray-700 font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Project Description */}
                            <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <div className="w-8 h-8 bg-[#f39c3c] rounded-lg flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                    About This Project
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {project.description}
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">
                                {/* Header */}
                                <div className="bg-gradient-to-r from-[#f39c3c] to-[#e8902f] p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2">Project Information</h3>
                                    <p className="text-white/90 text-sm">Key details about this construction project</p>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="space-y-6">
                                        {project.client && (
                                            <div className="flex items-start space-x-3">
                                                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <dt className="text-sm font-medium text-gray-500 mb-1">Client</dt>
                                                    <dd className="text-gray-900 font-semibold">{project.client}</dd>
                                                </div>
                                            </div>
                                        )}
                                        {project.location && (
                                            <div className="flex items-start space-x-3">
                                                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <dt className="text-sm font-medium text-gray-500 mb-1">Location</dt>
                                                    <dd className="text-gray-900 font-semibold">{project.location}</dd>
                                                </div>
                                            </div>
                                        )}
                                        {project.completionDate && (
                                            <div className="flex items-start space-x-3">
                                                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <dt className="text-sm font-medium text-gray-500 mb-1">Completion Date</dt>
                                                    <dd className="text-gray-900 font-semibold">{project.completionDate}</dd>
                                                </div>
                                            </div>
                                        )}
                                        {project.projectValue && (
                                            <div className="flex items-start space-x-3">
                                                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <dt className="text-sm font-medium text-gray-500 mb-1">Project Value</dt>
                                                    <dd className="text-gray-900 font-semibold">{project.projectValue}</dd>
                                                </div>
                                            </div>
                                        )}
                                        {project.duration && (
                                            <div className="flex items-start space-x-3">
                                                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <dt className="text-sm font-medium text-gray-500 mb-1">Duration</dt>
                                                    <dd className="text-gray-900 font-semibold">{project.duration}</dd>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex items-start space-x-3">
                                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500 mb-1">Category</dt>
                                                <dd>
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#f39c3c]/10 text-[#f39c3c]">
                                                        {project.category}
                                                    </span>
                                                </dd>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="p-6 bg-gray-50 border-t border-gray-100">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                        Interested in a Similar Project?
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Get in touch with our team for a consultation and detailed quote.
                                    </p>
                                    <Link
                                        to="/contact"
                                        className="w-full bg-[#f39c3c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e8902f] transition-colors text-center block flex items-center justify-center"
                                    >
                                        <span>Get a Quote</span>
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <section className="py-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                                Related Projects
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Explore more projects in the {project.category.toLowerCase()} category
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedProjects.map((relatedProject) => (
                                <Link
                                    key={relatedProject.id}
                                    to={`/projects/${relatedProject.id}`}
                                    className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={relatedProject.image}
                                            alt={relatedProject.alt}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-2">
                                            <span className="text-xs text-[#f39c3c] font-medium">
                                                {relatedProject.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#f39c3c] transition-colors">
                                            {relatedProject.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {relatedProject.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProjectDetail;