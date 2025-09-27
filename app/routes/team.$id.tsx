import { Link, useParams } from "react-router";
import { team } from "~/utils/data";

export const meta = ({ params }: { params: { id: string } }) => {
    const member = team.find(t => t.id === parseInt(params.id));
    if (!member) {
        return [
            { title: "Team Member Not Found | Grun Terra Limited" },
            { name: "description", content: "The requested team member could not be found." }
        ];
    }
    return [
        { title: `${member.name} - ${member.position} | Team | Grun Terra Limited` },
        { name: "description", content: member.bio },
        { name: "keywords", content: `${member.name}, ${member.position}, construction team, construction expert, building professional` },
        { property: "og:title", content: `${member.name} - ${member.position} | Grun Terra Limited` },
        { property: "og:description", content: member.bio },
        { property: "og:image", content: member.image },
        { property: "og:type", content: "profile" },
        { property: "profile:first_name", content: member.name.split(' ')[0] },
        { property: "profile:last_name", content: member.name.split(' ')[1] || '' }
    ];
};

const TeamMemberDetail = () => {
    const { id } = useParams();
    const member = team.find(t => t.id === parseInt(id!));

    if (!member) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Team Member Not Found</h1>
                    <p className="text-gray-600 mb-8">The team member you're looking for doesn't exist.</p>
                    <Link to="/team" className="bg-[#f39c3c] text-white px-6 py-3 rounded font-semibold hover:bg-[#e8902f] transition-colors">
                        Back to Team
                    </Link>
                </div>
            </div>
        );
    }

    const otherMembers = team.filter(t => t.id !== member.id).slice(0, 3);

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Member Photo */}
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 border-b-4 border-r-4 border-[#f39c3c] transform translate-x-6 translate-y-6 z-10 rounded-2xl"></div>
                        </div>

                        {/* Member Info */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
                                    {member.name}
                                </h1>
                                <h2 className="text-2xl text-[#f39c3c] font-semibold mb-6">
                                    {member.position}
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {member.social.linkedin && (
                                    <a
                                        href={member.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                )}
                                {member.social.email && (
                                    <a
                                        href={`mailto:${member.social.email}`}
                                        className="w-12 h-12 bg-[#f39c3c] text-white rounded-full flex items-center justify-center hover:bg-[#e8902f] transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </a>
                                )}
                                {member.social.twitter && (
                                    <a
                                        href={member.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                        </svg>
                                    </a>
                                )}
                            </div>

                            {/* Contact CTA */}
                            <div className="pt-6">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center bg-[#f39c3c] text-white px-8 py-4 font-semibold rounded hover:bg-[#e8902f] transition-colors"
                                >
                                    <span>Get In Touch</span>
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise & Experience */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Professional Experience
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Learn more about {member.name.split(' ')[0]}'s background and expertise in construction.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Expertise Areas */}
                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <div className="w-8 h-8 bg-[#f39c3c] rounded-lg flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                Areas of Expertise
                            </h3>
                            <div className="space-y-4">
                                {member.position.includes("CEO") && [
                                    "Strategic Planning & Leadership",
                                    "Business Development",
                                    "Client Relations",
                                    "Project Oversight",
                                    "Team Management"
                                ].map((skill, index) => (
                                    <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                        <div className="w-2 h-2 bg-[#f39c3c] rounded-full flex-shrink-0"></div>
                                        <span className="text-gray-700 font-medium">{skill}</span>
                                    </div>
                                ))}

                                {member.position.includes("Project Manager") && [
                                    "Project Planning & Coordination",
                                    "Resource Management",
                                    "Quality Control",
                                    "Timeline Management",
                                    "Client Communication"
                                ].map((skill, index) => (
                                    <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                        <div className="w-2 h-2 bg-[#f39c3c] rounded-full flex-shrink-0"></div>
                                        <span className="text-gray-700 font-medium">{skill}</span>
                                    </div>
                                ))}

                                {member.position.includes("Engineer") && [
                                    "Structural Engineering",
                                    "Technical Design",
                                    "Safety Analysis",
                                    "Innovation & Problem Solving",
                                    "Regulatory Compliance"
                                ].map((skill, index) => (
                                    <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                        <div className="w-2 h-2 bg-[#f39c3c] rounded-full flex-shrink-0"></div>
                                        <span className="text-gray-700 font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Achievements */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <div className="w-8 h-8 bg-[#f39c3c] rounded-lg flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                Key Achievements
                            </h3>
                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-[#f39c3c]/10 to-transparent p-6 rounded-xl border-l-4 border-[#f39c3c]">
                                    <div className="flex items-start mb-3">
                                        <div className="w-12 h-12 bg-[#f39c3c] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                                {member.position.includes("CEO") && "Company Growth"}
                                                {member.position.includes("Project Manager") && "Project Success Rate"}
                                                {member.position.includes("Engineer") && "Innovation Leadership"}
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed">
                                                {member.position.includes("CEO") && "Led the company to achieve 300% growth over the past 5 years, expanding from regional to national operations while maintaining our commitment to quality."}
                                                {member.position.includes("Project Manager") && "Maintains a 98% on-time completion rate across all managed projects, with consistent delivery within budget constraints."}
                                                {member.position.includes("Engineer") && "Developed innovative solutions that reduced construction time by 20% while improving structural integrity and safety standards."}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-6 rounded-xl border-l-4 border-blue-500">
                                    <div className="flex items-start mb-3">
                                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Industry Recognition</h4>
                                            <p className="text-gray-600 leading-relaxed">
                                                Recipient of multiple industry awards for excellence in construction and project management, including recognition from the National Association of Home Builders.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-500/10 to-transparent p-6 rounded-xl border-l-4 border-green-500">
                                    <div className="flex items-start mb-3">
                                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Professional Development</h4>
                                            <p className="text-gray-600 leading-relaxed">
                                                Holds multiple professional certifications and actively mentors junior team members, contributing to the overall growth of our organization.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Team Members */}
            {otherMembers.length > 0 && (
                <section className="py-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="flex items-center justify-center space-x-2 mb-4">
                                <div className="w-8 h-1 bg-[#f39c3c]"></div>
                                <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Our Team</span>
                                <div className="w-8 h-1 bg-[#f39c3c]"></div>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                                Meet Other Team Members
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Get to know more professionals who make up our expert construction team and contribute to our success.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otherMembers.map((otherMember) => (
                                <Link
                                    key={otherMember.id}
                                    to={`/team/${otherMember.id}`}
                                    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                                >
                                    <div className="relative overflow-hidden">
                                        <div className="aspect-[4/3] overflow-hidden">
                                            <img
                                                src={otherMember.image}
                                                alt={otherMember.alt}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#f39c3c] transition-colors">
                                            {otherMember.name}
                                        </h3>
                                        <p className="text-[#f39c3c] font-medium mb-3 text-sm">
                                            {otherMember.position}
                                        </p>
                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                            {otherMember.bio}
                                        </p>
                                        <div className="mt-4 flex justify-center">
                                            <span className="inline-flex items-center text-sm font-medium text-[#f39c3c] group-hover:text-gray-900 transition-colors">
                                                View Profile
                                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
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
                        Ready to Work with Our Expert Team?
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Our experienced professionals are ready to bring your construction project to life with expertise, dedication, and quality craftsmanship.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="bg-white text-[#f39c3c] px-8 py-4 font-semibold rounded hover:bg-gray-100 transition-colors"
                        >
                            Start Your Project
                        </Link>
                        <Link
                            to="/team"
                            className="border-2 border-white text-white px-8 py-4 font-semibold rounded hover:bg-white hover:text-[#f39c3c] transition-colors"
                        >
                            View Full Team
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamMemberDetail;