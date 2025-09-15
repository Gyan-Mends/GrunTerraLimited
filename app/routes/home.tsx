export const meta = () => [
    { title: "Grun Terra Limited | Broad Vision. Honest Service. Great Value." },
    { name: "description", content: "Grun Terra Limited provides quality, on-time construction projects. Get a free quote today." }
];

const Home = () => {
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
                        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-tight drop-shadow-md">
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
                            <a href="#quote" className="bg-[#FCB339] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">Get Free Quote →</a>
                            <a href="#contact" className="border border-white/80 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">Get In Touch</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Placeholder sections for navigation anchors */}
            <section id="about" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold">About</h2>
                    <p className="mt-4 text-gray-600">Content coming soon.</p>
                </div>
            </section>
            <section id="services" className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold">Services</h2>
                    <p className="mt-4 text-gray-600">Content coming soon.</p>
                </div>
            </section>
            <section id="projects" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold">Projects</h2>
                    <p className="mt-4 text-gray-600">Content coming soon.</p>
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