import { team } from "~/utils/data";

export const meta = () => [
    { title: "Our Team | Grun Terra Limited | Construction Experts & Professionals" },
    { name: "description", content: "Meet the expert team behind Grun Terra Limited. Our experienced construction professionals, engineers, and project managers delivering quality construction services." },
    { name: "keywords", content: "construction team, construction professionals, building experts, construction engineers, project managers, construction leadership, construction company team" },
    { property: "og:title", content: "Expert Construction Team | Grun Terra Limited Professionals" },
    { property: "og:description", content: "Meet our experienced team of construction professionals who bring expertise, dedication, and innovation to every project." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://grunterra.com/team" },
    { property: "og:image", content: "/images/construction-hero.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "index, follow" }
];

const Team = () => {
    const extendedTeam = [
        ...team,
        {
            id: 5,
            name: "Robert Wilson",
            position: "Safety Manager",
            bio: "Robert ensures all projects meet the highest safety standards with over 15 years of experience in construction safety management.",
            image: "/images/section_two_image.jpg",
            alt: "Robert Wilson - Safety Manager",
            social: {
                linkedin: "#",
                email: "robert@grunterra.com"
            }
        },
        {
            id: 6,
            name: "Lisa Chen",
            position: "Quality Control Specialist",
            bio: "Lisa oversees quality assurance processes with meticulous attention to detail and extensive knowledge of building standards.",
            image: "/images/section_two_image.jpg",
            alt: "Lisa Chen - Quality Control Specialist",
            social: {
                linkedin: "#",
                email: "lisa@grunterra.com"
            }
        },
        {
            id: 7,
            name: "David Thompson",
            position: "Site Supervisor",
            bio: "David coordinates on-site operations with 18 years of hands-on construction experience and exceptional leadership skills.",
            image: "/images/section_two_image.jpg",
            alt: "David Thompson - Site Supervisor",
            social: {
                linkedin: "#",
                email: "david@grunterra.com"
            }
        },
        {
            id: 8,
            name: "Amanda Rodriguez",
            position: "Business Development Manager",
            bio: "Amanda builds strong client relationships and identifies new opportunities to expand our construction services.",
            image: "/images/section_two_image.jpg",
            alt: "Amanda Rodriguez - Business Development Manager",
            social: {
                linkedin: "#",
                email: "amanda@grunterra.com"
            }
        }
    ];

    const departments = [
        {
            name: "Executive Leadership",
            description: "Strategic vision and overall company direction",
            members: extendedTeam.filter(member =>
                member.position.includes("CEO") || member.position.includes("Executive")
            )
        },
        {
            name: "Project Management",
            description: "End-to-end project coordination and delivery",
            members: extendedTeam.filter(member =>
                member.position.includes("Project Manager") || member.position.includes("Site Supervisor")
            )
        },
        {
            name: "Engineering & Design",
            description: "Technical expertise and architectural innovation",
            members: extendedTeam.filter(member =>
                member.position.includes("Engineer") || member.position.includes("Architecture")
            )
        },
        {
            name: "Quality & Safety",
            description: "Ensuring excellence and safety in every project",
            members: extendedTeam.filter(member =>
                member.position.includes("Safety") || member.position.includes("Quality")
            )
        },
        {
            name: "Business Development",
            description: "Growing relationships and expanding opportunities",
            members: extendedTeam.filter(member =>
                member.position.includes("Business Development")
            )
        }
    ].filter(dept => dept.members.length > 0);

    const companyValues = [
        {
            icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
            title: "Collaborative Excellence",
            description: "We believe in the power of teamwork and shared expertise to deliver outstanding results."
        },
        {
            icon: "M13 10V3L4 14h7v7l9-11h-7z",
            title: "Innovation Focus",
            description: "Our team constantly seeks new technologies and methods to improve construction processes."
        },
        {
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            title: "Quality Commitment",
            description: "Every team member is dedicated to maintaining the highest standards of workmanship."
        },
        {
            icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
            title: "Safety First",
            description: "The well-being of our team and clients is our top priority in everything we do."
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
                        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-6">
                            Our <span className="text-[#f39c3c]">Team</span>
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                            Meet the dedicated professionals who bring expertise, passion, and innovation to every construction project. Our team is the foundation of our success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Overview */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Meet Our Team</span>
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Experienced Professionals
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Our diverse team combines decades of construction experience with fresh perspectives and innovative approaches. Together, we deliver exceptional results that exceed client expectations.
                        </p>
                    </div>

                    {/* Team Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            { number: "50+", label: "Team Members" },
                            { number: "200+", label: "Years Combined Experience" },
                            { number: "15", label: "Professional Certifications" },
                            { number: "5", label: "Specialized Departments" }
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
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Leadership Team
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Our experienced leadership team guides the company with vision, expertise, and a commitment to excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {extendedTeam.slice(0, 4).map((member) => (
                            <div key={member.id} className="bg-white shadow-sm hover:shadow-xl transition-all duration-300 group text-center rounded-xl overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.alt}
                                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
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

            {/* Departments */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Our Departments
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Each department brings specialized expertise to ensure comprehensive project delivery and exceptional client service.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {departments.map((department, index) => (
                            <div key={index} className="border-b border-gray-200 pb-16 last:border-b-0 last:pb-0">
                                <div className="text-center mb-12">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {department.name}
                                    </h3>
                                    <p className="text-gray-600 max-w-xl mx-auto">
                                        {department.description}
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {department.members.map((member) => (
                                        <div key={member.id} className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                                            <img
                                                src={member.image}
                                                alt={member.alt}
                                                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                                            />
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-900 mb-1">
                                                    {member.name}
                                                </h4>
                                                <p className="text-[#f39c3c] text-sm font-medium mb-2">
                                                    {member.position}
                                                </p>
                                                <div className="flex space-x-2">
                                                    {member.social.linkedin && (
                                                        <a href={member.social.linkedin} className="text-gray-400 hover:text-[#f39c3c] transition-colors">
                                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                            </svg>
                                                        </a>
                                                    )}
                                                    {member.social.email && (
                                                        <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-[#f39c3c] transition-colors">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                            </svg>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Culture & Values */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Our Team Values
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            The principles that guide our team and drive our success in every project we undertake.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="grid grid-cols-2 gap-6">
                            {companyValues.map((value, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-[#f39c3c] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">
                                Building Success Together
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our team's strength lies in our diversity of skills, shared commitment to excellence, and collaborative approach to problem-solving. Every team member contributes their unique expertise to deliver outstanding results.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We foster a culture of continuous learning, professional development, and mutual respect that enables each team member to grow and contribute to our collective success.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="text-3xl font-bold text-[#f39c3c]">20+</div>
                                <div className="text-gray-600">Years of combined leadership experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Careers CTA */}
            <section className="py-24 bg-[#f39c3c]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-heading">
                        Join Our Team
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        We're always looking for talented professionals who share our passion for quality construction and commitment to excellence. Discover opportunities to grow your career with Grun Terra Limited.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/contact"
                            className="bg-white text-[#f39c3c] px-8 py-4 font-semibold rounded hover:bg-gray-100 transition-colors duration-300"
                        >
                            View Open Positions
                        </a>
                        <a
                            href="/contact"
                            className="border-2 border-white text-white px-8 py-4 font-semibold rounded hover:bg-white hover:text-[#f39c3c] transition-colors duration-300"
                        >
                            Submit Resume
                        </a>
                    </div>
                    <div className="mt-8 text-white/80">
                        <p className="text-sm">
                            Equal opportunity employer committed to diversity and inclusion
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Recognition */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">
                            Awards & Recognition
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Excellence in Safety</h4>
                                <p className="text-gray-600 text-sm">Construction Industry Safety Award 2024</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Best Employer</h4>
                                <p className="text-gray-600 text-sm">Regional Business Excellence Award 2024</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Innovation Leader</h4>
                                <p className="text-gray-600 text-sm">Construction Technology Innovation Award 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;