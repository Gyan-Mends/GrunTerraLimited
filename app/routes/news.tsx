import { news } from "~/utils/data";

export const meta = () => [
    { title: "News & Updates | Grun Terra Limited | Construction Industry Insights" },
    { name: "description", content: "Stay updated with the latest construction industry news, project updates, and insights from Grun Terra Limited. Expert perspectives on building trends and innovations." },
    { name: "keywords", content: "construction news, building industry updates, construction blog, project updates, construction trends, building innovations, construction company news" },
    { property: "og:title", content: "Construction News & Industry Updates | Grun Terra Limited" },
    { property: "og:description", content: "Get the latest construction industry insights, project updates, and expert perspectives from Grun Terra Limited's construction professionals." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://grunterra.com/news" },
    { property: "og:image", content: "/images/construction-hero.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "index, follow" }
];

const News = () => {
    const featuredArticle = news[0];
    const otherArticles = news.slice(1);

    const allArticles = [
        ...news,
        {
            id: 4,
            title: "Safety First: Our Comprehensive Site Safety Program",
            excerpt: "Learn about our industry-leading safety protocols and training programs that keep our workers and sites secure throughout every construction phase.",
            date: "August 28, 2025",
            image: "/images/construction-hero.jpg",
            alt: "Construction Site Safety",
            category: "Safety"
        },
        {
            id: 5,
            title: "The Future of Smart Buildings and IoT Integration",
            excerpt: "Exploring how Internet of Things (IoT) technology is revolutionizing building management systems and creating more efficient, responsive structures.",
            date: "August 25, 2025",
            image: "/images/resident2.jpg",
            alt: "Smart Building Technology",
            category: "Technology"
        },
        {
            id: 6,
            title: "Grun Terra Celebrates 20 Years of Construction Excellence",
            excerpt: "Join us in celebrating two decades of successful construction projects, client partnerships, and community development achievements.",
            date: "August 20, 2025",
            image: "/images/resident3.jpg",
            alt: "Company Anniversary",
            category: "Company News"
        },
        {
            id: 7,
            title: "Innovative Materials: The Rise of Cross-Laminated Timber",
            excerpt: "Discovering how cross-laminated timber (CLT) is changing the landscape of sustainable construction and offering new possibilities for building design.",
            date: "August 15, 2025",
            image: "/images/tower.jpg",
            alt: "Cross-Laminated Timber",
            category: "Materials"
        },
        {
            id: 8,
            title: "Project Management Excellence: Keys to On-Time Delivery",
            excerpt: "Our project managers share insights on the methodologies and tools that ensure consistent on-time project completion and client satisfaction.",
            date: "August 10, 2025",
            image: "/images/scrapper.jpg",
            alt: "Project Management",
            category: "Management"
        }
    ];

    const categories = ["All", "Technology", "Sustainability", "Company News", "Safety", "Materials", "Management"];

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
                            News & <span className="text-[#f39c3c]">Updates</span>
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                            Stay informed with the latest construction industry insights, project updates, and expert perspectives from our team of construction professionals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Article */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Featured Article</span>
                            <div className="w-8 h-1 bg-[#f39c3c]"></div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Latest News
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="relative rounded-xl overflow-hidden">
                                <img
                                    src={featuredArticle.image}
                                    alt={featuredArticle.alt}
                                    className="w-full h-[40vh] object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[#f39c3c] text-white px-4 py-2 text-sm font-medium rounded-full">
                                        {featuredArticle.category}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center text-sm text-gray-500">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {featuredArticle.date}
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                                {featuredArticle.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-lg">
                                {featuredArticle.excerpt}
                            </p>

                            <div className="flex items-center">
                                <button className="bg-[#f39c3c] text-white px-8 py-3 font-semibold hover:bg-[#e8902f] transition-colors duration-300 rounded mr-4">
                                    Read Full Article
                                </button>
                                <button className="flex items-center text-[#f39c3c] font-medium hover:text-[#e8902f] transition-colors duration-300">
                                    <span>Share Article</span>
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="px-6 py-2 rounded-full border-2 border-[#f39c3c] text-[#f39c3c] hover:bg-[#f39c3c] hover:text-white transition-colors duration-300 font-medium"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            All Articles
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Explore our complete collection of construction industry insights, project updates, and expert commentary.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allArticles.map((article, index) => (
                            <article key={article.id} className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 group rounded-xl overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-[#f39c3c] text-white px-3 py-1 text-xs font-medium rounded-full">
                                            {article.category}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {article.date}
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#f39c3c] transition-colors duration-300 leading-tight">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <button className="flex items-center text-[#f39c3c] font-medium group-hover:text-[#e8902f] transition-colors duration-300">
                                            <span>Read More</span>
                                            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>

                                        <div className="flex items-center space-x-2">
                                            <button className="text-gray-400 hover:text-[#f39c3c] transition-colors duration-300">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </button>
                                            <button className="text-gray-400 hover:text-[#f39c3c] transition-colors duration-300">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <button className="bg-gray-100 text-gray-700 px-8 py-3 font-semibold hover:bg-gray-200 transition-colors duration-300 rounded">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter Subscription */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">
                            Stay Updated
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Subscribe to our newsletter and get the latest construction industry news, project updates, and expert insights delivered directly to your inbox.
                        </p>
                    </div>

                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#f39c3c] rounded-lg"
                            />
                            <button className="bg-[#f39c3c] text-white px-6 py-3 font-semibold hover:bg-[#e8902f] transition-colors duration-300 rounded-lg">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-gray-400 text-sm mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-12">
                        <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
                        <div className="flex justify-center space-x-6">
                            <a href="#" className="text-gray-400 hover:text-[#f39c3c] transition-colors duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#f39c3c] transition-colors duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#f39c3c] transition-colors duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#f39c3c] transition-colors duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.739.099.120.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Topics */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Explore Related Topics
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "Construction Technology",
                            "Sustainable Building",
                            "Project Management",
                            "Safety Protocols",
                            "Building Materials",
                            "Green Construction",
                            "Smart Buildings",
                            "Construction Trends",
                            "Industry Standards",
                            "Building Codes"
                        ].map((topic, index) => (
                            <button
                                key={index}
                                className="bg-white text-gray-700 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:text-[#f39c3c] transition-all duration-300 text-sm"
                            >
                                #{topic.replace(/\s+/g, '')}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;