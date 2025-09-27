import { Link, useParams } from "react-router";
import { news } from "~/utils/data";

export const meta = ({ params }: { params: { id: string } }) => {
    const article = news.find(n => n.id === parseInt(params.id));
    if (!article) {
        return [
            { title: "Article Not Found | Grun Terra Limited" },
            { name: "description", content: "The requested article could not be found." }
        ];
    }
    return [
        { title: `${article.title} | News | Grun Terra Limited` },
        { name: "description", content: article.excerpt },
        { name: "keywords", content: `${article.category}, construction news, ${article.tags?.join(', ') || ''}` },
        { property: "og:title", content: `${article.title} | Grun Terra Limited` },
        { property: "og:description", content: article.excerpt },
        { property: "og:image", content: article.image },
        { property: "og:type", content: "article" },
        { property: "article:author", content: article.author || "Grun Terra Limited" },
        { property: "article:published_time", content: article.date }
    ];
};

const NewsDetail = () => {
    const { id } = useParams();
    const article = news.find(n => n.id === parseInt(id!));

    if (!article) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
                    <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
                    <Link to="/news" className="bg-[#f39c3c] text-white px-6 py-3 rounded font-semibold hover:bg-[#e8902f] transition-colors">
                        Back to News
                    </Link>
                </div>
            </div>
        );
    }

    const relatedArticles = news.filter(n => n.category === article.category && n.id !== article.id).slice(0, 3);

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-end">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${article.image}')` }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
                    <div className="mb-4">
                        <span className="bg-[#f39c3c] text-white px-4 py-2 rounded-full text-sm font-medium">
                            {article.category}
                        </span>
                    </div>
                    <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-6">
                        {article.title}
                    </h1>
                    <div className="flex items-center space-x-6 text-white/90">
                        {article.author && (
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span>{article.author}</span>
                            </div>
                        )}
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{article.date}</span>
                        </div>
                        {article.readTime && (
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{article.readTime}</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Article Body */}
                    <div className="max-w-none">
                        {/* Lead Paragraph */}
                        <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border-l-4 border-[#f39c3c] mb-12">
                            <p className="text-xl text-gray-700 leading-relaxed font-medium italic">
                                {article.excerpt}
                            </p>
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            <div className="text-gray-700 leading-relaxed space-y-8">
                                {article.content ? (
                                    article.content.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="text-lg leading-8 text-gray-700">
                                            {paragraph}
                                        </p>
                                    ))
                                ) : (
                                    <p className="text-lg leading-8 text-gray-700">
                                        {article.excerpt}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Article Meta */}
                        <div className="mt-16 pt-8 border-t border-gray-200">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Tags */}
                                {article.tags && article.tags.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <div className="w-6 h-6 bg-[#f39c3c] rounded-lg flex items-center justify-center mr-2">
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                                </svg>
                                            </div>
                                            Tags
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {article.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-[#f39c3c]/10 text-[#f39c3c] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#f39c3c]/20 transition-colors"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Share Section */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <div className="w-6 h-6 bg-[#f39c3c] rounded-lg flex items-center justify-center mr-2">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                            </svg>
                                        </div>
                                        Share This Article
                                    </h3>
                                    <div className="flex space-x-3">
                                        <button className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                            </svg>
                                        </button>
                                        <button className="flex items-center justify-center w-10 h-10 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                            </svg>
                                        </button>
                                        <button className="flex items-center justify-center w-10 h-10 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </button>
                                        <button className="flex items-center justify-center w-10 h-10 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="py-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
                                Related Articles
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                More articles in {article.category}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedArticles.map((relatedArticle) => (
                                <Link
                                    key={relatedArticle.id}
                                    to={`/news/${relatedArticle.id}`}
                                    className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={relatedArticle.image}
                                            alt={relatedArticle.alt}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs text-[#f39c3c] font-medium">
                                                {relatedArticle.category}
                                            </span>
                                            {relatedArticle.readTime && (
                                                <span className="text-xs text-gray-500">
                                                    {relatedArticle.readTime}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#f39c3c] transition-colors">
                                            {relatedArticle.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3">
                                            {relatedArticle.excerpt}
                                        </p>
                                        <div className="text-xs text-gray-500">
                                            {relatedArticle.date}
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
                        Stay Updated with Our Latest News
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter to receive the latest updates on construction technology, project completions, and industry insights.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="bg-white text-[#f39c3c] px-8 py-4 font-semibold rounded hover:bg-gray-100 transition-colors"
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="/news"
                            className="border-2 border-white text-white px-8 py-4 font-semibold rounded hover:bg-white hover:text-[#f39c3c] transition-colors"
                        >
                            More News
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsDetail;