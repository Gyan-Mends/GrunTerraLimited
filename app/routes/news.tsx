import { useState } from "react";
import { Link } from "react-router";
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
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const categories = ["All", "Technology", "Sustainability", "Company News", "Safety"];

    // Filter news based on active filter and search term
    const filteredNews = news.filter(article => {
        const matchesCategory = activeFilter === "All" || article.category === activeFilter;
        const matchesSearch = searchTerm === "" ||
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.category.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const featuredArticle = news[0];

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

                    <Link
                        to={`/news/${featuredArticle.id}`}
                        className="group grid lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                        <div className="aspect-video lg:aspect-square overflow-hidden">
                            <img
                                src={featuredArticle.image}
                                alt={featuredArticle.alt}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-8 lg:p-12">
                            <div className="mb-4">
                                <span className="bg-[#f39c3c] text-white px-4 py-2 rounded-full text-sm font-medium">
                                    {featuredArticle.category}
                                </span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#f39c3c] transition-colors">
                                {featuredArticle.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {featuredArticle.excerpt}
                            </p>
                            <div className="flex items-center space-x-6 text-gray-500 text-sm">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>{featuredArticle.date}</span>
                                </div>
                                {featuredArticle.author && (
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span>{featuredArticle.author}</span>
                                    </div>
                                )}
                                {featuredArticle.readTime && (
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{featuredArticle.readTime}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Filter and Search */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 font-heading">
                            All News Articles
                        </h2>

                        {/* Search Bar */}
                        <div className="max-w-md mx-auto mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f39c3c] focus:border-transparent"
                                />
                                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    className={`px-6 py-2 rounded-full border-2 border-[#f39c3c] font-medium transition-colors duration-300 ${
                                        activeFilter === category
                                            ? "bg-[#f39c3c] text-white"
                                            : "text-[#f39c3c] hover:bg-[#f39c3c] hover:text-white"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNews.slice(1).map((article) => ( // Skip first article as it's featured
                            <Link
                                key={article.id}
                                to={`/news/${article.id}`}
                                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="bg-[#f39c3c] text-white px-3 py-1 text-xs font-medium rounded-full">
                                            {article.category}
                                        </span>
                                        {article.readTime && (
                                            <span className="text-xs text-gray-500">
                                                {article.readTime}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#f39c3c] transition-colors">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span>{article.date}</span>
                                        </div>
                                        {article.author && (
                                            <span>By {article.author}</span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredNews.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47.898-6.06 2.37l-.894-.894L3.515 18.01a1 1 0 00-1.414-1.414l1.536-1.536A9.977 9.977 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.958 9.958 0 01-1.639 5.476l-.894-.894zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Articles Found</h3>
                            <p className="text-gray-600 mb-4">
                                {searchTerm
                                    ? `No articles found matching "${searchTerm}"`
                                    : `No articles found in the ${activeFilter} category`}
                            </p>
                            <button
                                onClick={() => {
                                    setActiveFilter("All");
                                    setSearchTerm("");
                                }}
                                className="bg-[#f39c3c] text-white px-6 py-2 rounded font-medium hover:bg-[#e8902f] transition-colors"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
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