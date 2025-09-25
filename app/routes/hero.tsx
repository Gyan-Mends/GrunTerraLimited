export const meta = () => [
    { title: "Construction Services | Grun Terra Limited | Professional Building Solutions" },
    { name: "description", content: "Professional construction services including residential, commercial, and infrastructure development. Quality craftsmanship, on-time delivery, and competitive pricing." },
    { name: "keywords", content: "construction services, building contractors, residential construction, commercial construction, infrastructure development, project management, renovation services" },
    { property: "og:title", content: "Professional Construction Services | Grun Terra Limited" },
    { property: "og:description", content: "Transform your vision into reality with our expert construction services. Quality, reliability, and excellence in every project." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Professional Construction Services | Grun Terra Limited" },
    { name: "twitter:description", content: "Quality construction services with broad vision, honest service, and great value." }
];

const Hero = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center bg-gray-900"
            style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('/images/construction-hero.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-8">
                    <span className="inline-block bg-[#f39c3c] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase">
                        Premium Construction Services
                    </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    Building Your
                    <br />
                    <span className="text-[#f39c3c]">Future Today</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                    From residential homes to commercial complexes, we deliver exceptional construction
                    services with unmatched quality, reliability, and craftsmanship. Your vision, our expertise.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                        href="#quote"
                        className="bg-[#f39c3c] hover:bg-[#e8902f] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Get Free Quote →
                    </a>
                    <a
                        href="#projects"
                        className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                    >
                        View Our Work
                    </a>
                </div>

                {/* Key Features */}
                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#f39c3c] rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Quality Construction</h3>
                        <p className="text-gray-300">Premium materials and skilled craftsmanship in every project</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#f39c3c] rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">On-Time Delivery</h3>
                        <p className="text-gray-300">Reliable project completion within agreed timeframes</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#f39c3c] rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Great Value</h3>
                        <p className="text-gray-300">Competitive pricing without compromising on quality</p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero