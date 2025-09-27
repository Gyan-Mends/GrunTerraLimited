import { useState } from "react";

export const meta = () => [
    { title: "Contact Us | Grun Terra Limited | Get Your Free Construction Quote" },
    { name: "description", content: "Contact Grun Terra Limited for your construction needs. Get free quotes, project consultations, and expert advice. Call us at (555) 123-4567 or visit our office." },
    { name: "keywords", content: "contact construction company, construction quote, free estimate, construction consultation, building contractor contact, construction services inquiry" },
    { property: "og:title", content: "Contact Grun Terra Limited | Free Construction Quotes & Consultations" },
    { property: "og:description", content: "Ready to start your construction project? Contact us for free quotes, expert advice, and professional consultation. Quality construction services await." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://grunterra.com/contact" },
    { property: "og:image", content: "/images/construction-hero.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "index, follow" }
];

const Contact = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const contactMethods = [
        {
            icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
            title: "Phone",
            detail: "+1 (555) 123-4567",
            description: "Call us for immediate assistance",
            color: "bg-blue-500"
        },
        {
            icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
            title: "Email",
            detail: "info@grunterra.com",
            description: "Send us a detailed message",
            color: "bg-green-500"
        },
        {
            icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
            title: "Address",
            detail: "123 Construction Avenue, Building City, BC 12345",
            description: "Visit our office for consultation",
            color: "bg-red-500"
        },
        {
            icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
            title: "Hours",
            detail: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
            description: "Our working hours",
            color: "bg-purple-500"
        }
    ];

    const services = [
        "Residential Construction",
        "Commercial Construction",
        "Infrastructure Development",
        "Project Management",
        "Design-Build Services",
        "Renovation & Remodeling"
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
                            Get In <span className="text-[#f39c3c]">Touch</span>
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                            Ready to start your construction project? Contact us today for a free consultation and discover how we can bring your vision to life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            {/* <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactMethods.map((method, index) => (
                            <div key={index} className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={method.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {method.title}
                                </h3>
                                <p className="text-[#f39c3c] font-medium mb-2">
                                    {method.detail}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    {method.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Contact Form & Info */}
            <section id="contact"  className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div data-aos="fade-right">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
                                    Request a Free Quote
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Fill out the form below and we'll get back to you within 24 hours with a detailed consultation about your project.
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f39c3c] focus:border-transparent transition-colors"
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f39c3c] focus:border-transparent transition-colors"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f39c3c] focus:border-transparent transition-colors"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f39c3c] focus:border-transparent transition-colors"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                                        Project Type *
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f39c3c] focus:border-transparent transition-colors"
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                                        Project Budget
                                    </label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f39c3c] focus:border-transparent transition-colors"
                                    >
                                        <option value="">Select budget range</option>
                                        <option value="under-50k">Under $50,000</option>
                                        <option value="50k-100k">$50,000 - $100,000</option>
                                        <option value="100k-250k">$100,000 - $250,000</option>
                                        <option value="250k-500k">$250,000 - $500,000</option>
                                        <option value="500k-1m">$500,000 - $1,000,000</option>
                                        <option value="over-1m">Over $1,000,000</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                                        Project Timeline
                                    </label>
                                    <select
                                        id="timeline"
                                        name="timeline"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f39c3c] focus:border-transparent transition-colors"
                                    >
                                        <option value="">Select timeline</option>
                                        <option value="asap">ASAP</option>
                                        <option value="1-3-months">1-3 months</option>
                                        <option value="3-6-months">3-6 months</option>
                                        <option value="6-12-months">6-12 months</option>
                                        <option value="over-1-year">Over 1 year</option>
                                        <option value="flexible">Flexible</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Project Details *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f39c3c] focus:border-transparent transition-colors resize-vertical"
                                        placeholder="Please describe your project in detail, including location, size, specific requirements, and any other relevant information..."
                                    ></textarea>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="consent"
                                        name="consent"
                                        required
                                        className="w-4 h-4 text-[#f39c3c] border-gray-300 rounded focus:ring-[#f39c3c]"
                                    />
                                    <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                                        I agree to receive communication from Grun Terra Limited regarding my inquiry. *
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#f39c3c] text-white py-4 px-8 rounded-lg font-semibold hover:bg-[#e8902f] transition-colors duration-300 flex items-center justify-center"
                                >
                                    Submit Request
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:pl-8" data-aos="fade-left">
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                                    Why Choose Grun Terra?
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        {
                                            icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                                            title: "24-Hour Response",
                                            description: "We respond to all inquiries within 24 hours"
                                        },
                                        {
                                            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                            title: "Free Consultation",
                                            description: "Initial project consultation at no cost"
                                        },
                                        {
                                            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                                            title: "Transparent Pricing",
                                            description: "No hidden fees or surprise costs"
                                        },
                                        {
                                            icon: "M13 10V3L4 14h7v7l9-11h-7z",
                                            title: "Expert Team",
                                            description: "20+ years of construction expertise"
                                        }
                                    ].map((benefit, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-[#f39c3c] rounded-lg flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">
                                                    {benefit.title}
                                                </h4>
                                                <p className="text-gray-600">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Emergency Contact */}
                            <div className="bg-[#f39c3c] text-white p-8 rounded-xl">
                                <h4 className="text-xl font-bold mb-4">
                                    Emergency Services
                                </h4>
                                <p className="mb-4">
                                    For urgent construction issues or emergencies, call our 24/7 hotline:
                                </p>
                                <div className="flex items-center text-2xl font-bold mb-4">
                                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +1 (555) 999-0000
                                </div>
                                <p className="text-white/90 text-sm">
                                    Available for structural emergencies, safety concerns, and critical project issues.
                                </p>
                            </div>

                            {/* Office Location */}
                            <div className="mt-12">
                                <h4 className="text-xl font-bold text-gray-900 mb-6">
                                    Visit Our Office
                                </h4>
                                <div className="bg-gray-100 p-6 rounded-xl">
                                    <div className="flex items-start space-x-4 mb-4">
                                        <svg className="w-6 h-6 text-[#f39c3c] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <p className="font-medium text-gray-900">Grun Terra Limited</p>
                                            <p className="text-gray-600">123 Construction Avenue</p>
                                            <p className="text-gray-600">Building City, BC 12345</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4 text-gray-600">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-[#f39c3c] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-sm">Mon-Fri: 8AM-6PM</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-sm">Sat: 9AM-4PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Visit Our Office
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Find us at our convenient location. We're always happy to meet with you in person to discuss your construction project needs.
                        </p>
                    </div>
                    <div className="h-[500px] bg-gray-300 relative overflow-hidden rounded-xl shadow-lg">
                        <iframe
                            className="w-full h-full border-0 rounded-xl"
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7940.717275457141!2d-0.15672750000000002!3d5.6611625!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1758813587653!5m2!1sen!2sgh"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Grun Terra Limited Office Location"
                        >
                        </iframe>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Get answers to common questions about our construction services and process.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                question: "How long does a typical construction project take?",
                                answer: "Project timelines vary based on scope and complexity. Residential projects typically take 3-8 months, while commercial projects can range from 6-18 months. We provide detailed timelines during the initial consultation."
                            },
                            {
                                question: "Do you provide free estimates?",
                                answer: "Yes, we offer free initial consultations and estimates for all potential projects. Our team will assess your needs and provide a detailed, transparent quote with no hidden fees."
                            },
                            {
                                question: "Are you licensed and insured?",
                                answer: "Absolutely. Grun Terra Limited is fully licensed, bonded, and insured. We maintain comprehensive insurance coverage and all necessary certifications to ensure your project is protected."
                            },
                            {
                                question: "What types of projects do you specialize in?",
                                answer: "We specialize in residential construction, commercial buildings, and infrastructure development. Our expertise includes custom homes, office buildings, retail spaces, and large-scale infrastructure projects."
                            },
                            {
                                question: "How do you ensure quality control?",
                                answer: "We maintain strict quality control through regular inspections, premium materials from trusted suppliers, experienced craftsmen, and adherence to all building codes and safety standards."
                            },
                            {
                                question: "What happens if there are changes during construction?",
                                answer: "We understand that changes may be necessary. We maintain clear communication throughout the project and handle change orders professionally with transparent pricing and timeline adjustments."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </h3>
                                    <div className="flex-shrink-0">
                                        <svg
                                            className={`w-5 h-5 text-[#f39c3c] transform transition-transform duration-200 ${
                                                openFAQ === index ? 'rotate-180' : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-6 pb-6">
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;