import { Link } from "react-router";
import { services, projects, testimonials, news, team } from "~/utils/data";

export const meta = () => [
    { title: "Home | Grun Terra Limited | Professional Construction Services & Building Contractors" },
    { name: "description", content: "Expert construction services for residential, commercial & infrastructure projects. Quality craftsmanship, on-time delivery, competitive pricing. Get your free construction quote today!" },
    { name: "keywords", content: "construction services, building contractors, residential construction, commercial construction, home builders, construction company, infrastructure development, renovation services, construction projects, building services" },
    { property: "og:title", content: "Professional Construction Services | Grun Terra Limited" },
    { property: "og:description", content: "Transform your vision into reality with our expert construction services. Quality, reliability, and excellence in residential, commercial, and infrastructure projects." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://grunterra.com" },
    { property: "og:image", content: "/images/construction-hero.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Professional Construction Services | Grun Terra Limited" },
    { name: "twitter:description", content: "Quality construction services with broad vision, honest service, and great value. Get your free quote today!" },
    { name: "twitter:image", content: "/images/construction-hero.jpg" },
    { name: "robots", content: "index, follow" },
    { name: "geo.region", content: "US" },
    { name: "geo.placename", content: "Construction Services" }
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
                className="relative h-screen flex items-center "
                style={{ backgroundImage: "url('/images/construction2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
            >
                <div className="absolute inset-0 bg-black/60 "></div>
                <div className="relative  max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
                    <div className=" max-w-3xl">
                        <h1
                            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight drop-shadow-md text-white "
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Broad Vision
                            <br />
                            <span className=" text-[#f39c3c]">Honest Service</span>
                            <br />
                            Great Value
                        </h1>
                        <p
                            className="mt-6 text-lg text-white/90 max-w-2xl"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Our goal then and now is to provide quality on time projects
                        </p>
                        <div
                            className="mt-10 flex flex-wrap gap-4"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <a href="/contact/#contact" className="bg-[#f39c3c] text-white px-6 py-3  font-semibold hover:opacity-90 transition rounded">Get Free Quote →</a>
                            <a href="/contact" className="border border-white/80 text-white px-6 py-3  font-semibold hover:bg-white hover:text-[#0f6b3a] transition rounded">Get In Touch</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-8" data-aos="fade-right">
                            <div>
                                <div className="flex items-center space-x-2 mb-4" data-aos="fade-up">
                                    <div className="w-8 h-1 bg-[#f39c3c]"></div>
                                    <span className="text-sm font-medium text-gray-600">ABOUT GRUN TERRA</span>
                                </div>
                                <h2 className="text-3xl font-heading lg:text-4xl font-bold text-gray-900 leading-tight" data-aos="fade-up" data-aos-delay="100">
                                    We Are The Leader In construction
                                </h2>
                            </div>

                            <p className="text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                                With over two decades of experience in the construction industry, Grun Terra Limited has established itself as a trusted partner for residential, commercial, and infrastructure development projects. We combine traditional craftsmanship with modern technology to deliver exceptional results.
                            </p>

                            {/* Quote Block */}
                            <div className="bg-gray-50 border-l-4 border-[#f39c3c] pl-6 py-4" data-aos="fade-up" data-aos-delay="300">
                                <p className="text-gray-700 italic">
                                    "Our commitment to quality, safety, and client satisfaction has made us the preferred choice for construction projects across the region. We don't just build structures; we build lasting relationships and communities."
                                </p>
                                <span className="text-sm text-gray-500 mt-2 block">— Leadership Team, Grun Terra Limited</span>
                            </div>

                            {/* Statistics */}
                            <div className="grid grid-cols-3 gap-8 pt-8" data-aos="fade-up" data-aos-delay="400">
                                <div className="text-center" data-aos="zoom-in" data-aos-delay="500">
                                    <div className="text-3xl lg:text-4xl font-bold text-[#f39c3c] mb-2">500+</div>
                                    <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                                </div>
                                <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
                                    <div className="text-3xl lg:text-4xl font-bold text-[#f39c3c] mb-2">20+</div>
                                    <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                                </div>
                                <div className="text-center" data-aos="zoom-in" data-aos-delay="700">
                                    <div className="text-3xl lg:text-4xl font-bold text-[#f39c3c] mb-2">98%</div>
                                    <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative" data-aos="fade-left">
                            <img
                                src="/images/contructor2.jpg"
                                alt="Modern building architecture"
                                className="w-full h-[60vh] rounded-xl"
                                data-aos="zoom-in"
                                data-aos-delay="200"
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
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Our Services</span>
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            What We Can Do
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            We provide comprehensive construction services with expertise, quality, and reliability at every stage of your project.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className="overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Service Image */}
                                <div className="relative h-48 rounded-tr-lg rounded-tl-lg overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.alt}
                                        className="w-full h-full rounded-tr-lg rounded-tl-lg object-cover group-hover:scale-110 transition-transform duration-300"
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
                    <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
                        <a
                            href="#contact"
                            className="inline-flex rounded items-center px-8 py-3 bg-[#f39c3c] text-white font-semibold  hover:bg-[#e8902f] transition-colors duration-300 "
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
                    <div className="text-center mb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Our Recent Projects</span>
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Our Recent Projects
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                            Explore our portfolio of completed construction projects that showcase our expertise, quality craftsmanship, and commitment to excellence.
                        </p>
                        
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg lg:grid-cols-4 lg:grid-rows-2 gap-4">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`relative group overflow-hidden rounded-lg  ${getProjectClasses(project.size, index)}`}
                                data-aos="zoom-in"
                                data-aos-delay={index * 150}
                            >
                                <div className={`${getProjectAspectRatio(project.size)} relative rounded-lg`}>
                                    <img
                                        src={project.image}
                                        alt={project.alt}
                                        className="w-full h-full rounded-lg object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-300"></div>
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

                    <div className="flex items-center justify-center py-10">
                    <Link to="/projects">
                    <button className="bg-[#f39c3c] rounded text-white px-6 py-3  font-semibold hover:bg-[#e8902f] transition-colors duration-300" data-aos="fade-up" data-aos-delay="200">
                            View All Projects
                        </button>
                    </Link>
                    </div>
                </div>
            </section>
            
            {/* Testimonials Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Side - Header Content */}
                        <div className="lg:pr-8" data-aos="fade-right">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                                What Our Clients Say
                            </h2>
                            <div className="w-16 h-1 bg-[#f39c3c] mb-6"></div>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Don't just take our word for it. Hear from our satisfied clients who have experienced our commitment to quality construction, timely delivery, and exceptional service across residential and commercial projects.
                            </p>

                            {/* First testimonial under description */}
                            <div className="flex bg-white shadow-sm hover:shadow-md rounded-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay="200">
                                <div className="w-32  flex-shrink-0">
                                    <img
                                        src={testimonials[0].image}
                                        alt={testimonials[0].alt}
                                        className="w-full h-52 rounded-tl-lg rounded-bl-lg object-cover  grayscale"
                                    />
                                </div>
                                <div className="flex-1 p-6 flex flex-col justify-between">
                                    <div>
                                        <svg className="w-6 h-6 text-[#f39c3c] mb-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                        </svg>
                                        <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                            {testimonials[0].quote}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                                            {testimonials[0].name}
                                        </h4>
                                        <p className="text-xs text-[#f39c3c] font-medium">
                                            {testimonials[0].position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Two Testimonials */}
                        <div className="space-y-6" data-aos="fade-left">
                            {/* Second testimonial - top right */}
                            <div className="flex bg-white rounded-lg  shadow-sm hover:shadow-md transition-shadow duration-300" data-aos="fade-up" data-aos-delay="300">
                                <div className="w-40 h-52 flex-shrink-0">
                                    <img
                                        src={testimonials[1].image}
                                        alt={testimonials[1].alt}
                                        className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg  grayscale"
                                    />
                                </div>
                                <div className="flex-1 p-4 flex flex-col justify-between">
                                    <div>
                                        <svg className="w-5 h-5 text-[#f39c3c] mb-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                        </svg>
                                        <p className="text-gray-600 leading-relaxed mb-3 text-xs">
                                            {testimonials[1].quote}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-xs mb-1">
                                            {testimonials[1].name}
                                        </h4>
                                        <p className="text-xs text-[#f39c3c] font-medium">
                                            {testimonials[1].position}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Third testimonial - bottom right */}
                            <div className="flex bg-white  shadow-sm rounded-lg hover:shadow-md transition-shadow duration-300" data-aos="fade-up" data-aos-delay="400">
                            <div className="w-40 h-52 flex-shrink-0">
                            <img
                                        src={testimonials[2].image}
                                        alt={testimonials[2].alt}
                                        className="w-full h-full rounded-tl-lg rounded-bl-lg object-cover  grayscale"
                                    />
                                </div>
                                <div className="flex-1 p-4 flex flex-col justify-between">
                                    <div>
                                        <svg className="w-5 h-5 text-[#f39c3c] mb-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                        </svg>
                                        <p className="text-gray-600 leading-relaxed mb-3 text-xs">
                                            {testimonials[2].quote}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-xs mb-1">
                                            {testimonials[2].name}
                                        </h4>
                                        <p className="text-xs text-[#f39c3c] font-medium">
                                            {testimonials[2].position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* News Section */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Latest News</span>
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            News & Updates
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Stay updated with the latest news, projects, and developments from Grun Terra Limited.
                        </p>
                    </div>

                    {/* News Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((article, index) => (
                            <article key={article.id} className="bg-white shadow-sm rounded-tr-lg rounded-tl-lg hover:shadow-md transition-shadow duration-300 group" data-aos="fade-up" data-aos-delay={index * 100}>
                                {/* News Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={article.image} 
                                        alt={article.alt}
                                        className="w-full h-full  rounded-tr-lg rounded-tl-lg object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-[#f39c3c] text-white px-3 py-1 text-xs font-medium">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* News Content */}
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {article.date}
                                    </div>
                                    
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#f39c3c] transition-colors duration-300">
                                        {article.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {article.excerpt}
                                    </p>
                                    
                                    {/* Read More */}
                                    <div className="flex items-center text-[#f39c3c] font-medium group-hover:text-[#e8902f] transition-colors duration-300">
                                        <span>Read More</span>
                                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Our Team</span>
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Meet Our Experts
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Our experienced team of professionals brings expertise, dedication, and innovation to every project.
                        </p>
                    </div>

                    {/* Team Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={member.id} className="bg-white shadow-sm  rounded-tr-lg rounded-tl-lg hover:shadow-lg transition-all duration-300 group text-center" data-aos="zoom-in" data-aos-delay={index * 150}>
                                {/* Team Member Image */}
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={member.image} 
                                        alt={member.alt}
                                        className="w-full h-64  rounded-tr-lg rounded-tl-lg object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    
                                    {/* Social Links Overlay */}
                                    <div className="absolute inset-0 bg-[#f39c3c]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="flex space-x-4">
                                            {member.social.linkedin && (
                                                <a href={member.social.linkedin} className="text-white hover:text-gray-200 transition-colors">
                                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                    </svg>
                                                </a>
                                            )}
                                            {member.social.email && (
                                                <a href={`mailto:${member.social.email}`} className="text-white hover:text-gray-200 transition-colors">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Team Member Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#f39c3c] font-medium mb-3">
                                        {member.position}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="relative  py-10 bg-gray-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 items-center ">
                        {/* Left Side - CTA Content */}
                        <div className="lg:pr-8 span-col-1" data-aos="fade-right">
                            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-gray-900 leading-tight mb-8">
                                Ready To Start Your{' '}
                                <span className="text-[#f39c3c]">Construction Project?</span>
                            </h2>
                           
                            
                            <a 
                                href="#contact" 
                                className="inline-flex items-center bg-[#f39c3c] text-white px-8 py-4 font-semibold hover:bg-[#f39c3c] transition-colors duration-300 group"
                            >
                                <span>Request A Quote</span>
                                <div className="ml-3 w-8 h-8  flex items-center justify-center group-hover:bg-[#f39c3c] transition-colors duration-300">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </a>
                        </div>

                        {/* Right Side - Construction Image */}
                        <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2" data-aos="fade-left">

                            <div className="relative z-10 flex items-center justify-end h-full">
                                <img
                                    src="/images/cta.png"
                                    alt="Construction crane and building site"
                                    className="!h-[120vh] w-[150vw] object-contain !mt-20 mix-blend-multiply"
                                    data-aos="zoom-in"
                                    data-aos-delay="200"
                                   
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
            </section>

           
           
        </div>
    )
}

export default Home