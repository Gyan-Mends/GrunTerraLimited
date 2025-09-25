import { team } from "~/utils/data";

export const meta = () => [
    { title: "About Us | Grun Terra Limited | Leading Construction Company" },
    { name: "description", content: "Learn about Grun Terra Limited's history, mission, and team. Over 20 years of construction excellence delivering residential, commercial & infrastructure projects." },
    { name: "keywords", content: "about construction company, construction team, building contractors history, construction expertise, professional construction services, construction company background" },
    { property: "og:title", content: "About Grun Terra Limited | Professional Construction Services" },
    { property: "og:description", content: "Discover our commitment to quality construction with broad vision, honest service, and great value. Meet our expert team of construction professionals." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://grunterra.com/about" },
    { property: "og:image", content: "/images/construction-hero.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "index, follow" }
];

const About = () => {
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
                            About <span className="text-[#f39c3c]">Grun Terra</span>
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                            Building excellence since 2003. We combine traditional craftsmanship with modern innovation to deliver exceptional construction projects.
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Story Section */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-8" data-aos="fade-right">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="w-8 h-1 bg-[#f39c3c]"></div>
                                    <span className="text-sm font-medium text-gray-600">OUR STORY</span>
                                </div>
                                <h2 className="text-3xl font-heading lg:text-4xl font-bold text-gray-900 leading-tight">
                                    Building Dreams Since 2003
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <p className="text-gray-600 leading-relaxed">
                                    Founded over two decades ago, Grun Terra Limited began with a simple mission: to provide quality construction services with broad vision, honest service, and great value. What started as a small local contractor has grown into one of the region's most trusted construction companies.
                                </p>

                                <p className="text-gray-600 leading-relaxed">
                                    Our journey has been marked by countless successful projects, satisfied clients, and a commitment to excellence that never wavers. From residential homes to commercial complexes and infrastructure development, we've built our reputation one project at a time.
                                </p>

                                <p className="text-gray-600 leading-relaxed">
                                    Today, we continue to push the boundaries of what's possible in construction, embracing new technologies while maintaining the craftsmanship values that have defined us from the beginning.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative" data-aos="fade-left">
                            <img
                                src="/images/contructor2.jpg"
                                alt="Construction team at work"
                                className="w-full h-[60vh] rounded-xl object-cover"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            />
                            <div className="absolute inset-0 border-b-4 border-r-4 border-[#f39c3c] transform translate-x-6 translate-y-6 z-10 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Our Values</span>
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Mission & Vision
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="bg-white p-8 rounded-xl shadow-sm" data-aos="fade-right">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-[#f39c3c] rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                To deliver exceptional construction services that exceed client expectations through innovative solutions, quality craftsmanship, and unwavering commitment to safety. We strive to build not just structures, but lasting relationships and stronger communities.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white p-8 rounded-xl shadow-sm" data-aos="fade-left">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-[#f39c3c] rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                To be the leading construction company recognized for transforming communities through sustainable building practices, cutting-edge technology, and exceptional project delivery. We envision a future where every structure we build contributes to a better tomorrow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Our Core Values
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            These fundamental principles guide every decision we make and every project we undertake.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                title: "Quality Excellence",
                                description: "We never compromise on quality, ensuring every project meets the highest standards of craftsmanship and durability."
                            },
                            {
                                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                                title: "Safety First",
                                description: "The safety of our team, clients, and communities is our top priority in everything we do."
                            },
                            {
                                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                                title: "Fair Pricing",
                                description: "We provide transparent, competitive pricing that delivers great value without hidden costs."
                            },
                            {
                                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                                title: "Timely Delivery",
                                description: "We respect deadlines and work diligently to complete projects on time, every time."
                            },
                            {
                                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                title: "Team Collaboration",
                                description: "We foster a collaborative environment where every team member contributes to our collective success."
                            },
                            {
                                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9c-4.97 0-9 4.03-9 9s4.03 9 9 9",
                                title: "Sustainability",
                                description: "We're committed to environmentally responsible construction practices for a sustainable future."
                            }
                        ].map((value, index) => (
                            <div key={index} className="text-center group" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="w-16 h-16 bg-[#f39c3c] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#e8902f] transition-colors duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">
                            Our Achievements
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Numbers that reflect our commitment to excellence and client satisfaction.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { number: "500+", label: "Projects Completed" },
                            { number: "20+", label: "Years of Experience" },
                            { number: "98%", label: "Client Satisfaction" },
                            { number: "50+", label: "Expert Team Members" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center" data-aos="zoom-in" data-aos-delay={index * 100}>
                                <div className="text-4xl lg:text-5xl font-bold text-[#f39c3c] mb-3">
                                    {stat.number}
                                </div>
                                <div className="text-gray-300 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Our Team</span>
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Meet Our Leadership Team
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Our experienced leadership team brings decades of combined expertise in construction, engineering, and project management.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={member.id} className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 group text-center rounded-xl overflow-hidden" data-aos="zoom-in" data-aos-delay={index * 150}>
                                <div className="relative overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.alt}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />

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
            <section className="py-24 bg-[#f39c3c]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-heading">
                        Ready to Work With Us?
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Let's discuss your construction project and see how we can bring your vision to life with our expertise and commitment to excellence.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
                        <a
                            href="/contact"
                            className="bg-white text-[#f39c3c] px-8 py-3 font-semibold rounded hover:bg-gray-100 transition-colors duration-300"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="/projects"
                            className="border-2 border-white text-white px-8 py-3 font-semibold rounded hover:bg-white hover:text-[#f39c3c] transition-colors duration-300"
                        >
                            View Our Work
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;