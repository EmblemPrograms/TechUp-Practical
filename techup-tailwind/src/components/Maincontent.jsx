function Maincontent() {
    const cards = [
        { title: 'Overview', text: 'Get a quick summary of the project and its purpose.' },
        { title: 'Features', text: 'Discover the tools and functions that make this app useful.' },
        { title: 'Progress', text: 'Track updates and see how the application is evolving.' }
    ];

    return (
        <main className="bg-linear-to-br from-indigo-50 to-blue-50 dark:from-gray-600 dark:to-gray-800 text-gray-800 dark:text-gray-100 min-h-[60vh] px-6 py-10 transition-colors duration-300">
            <div className="max-w-3xl mx-auto">
                <section className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Main Content</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        This is the main content of the application, designed to present key information clearly and professionally.
                    </p>
                </section>

                <section className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{card.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{card.text}</p>
                        </div>
                    ))}
                </section>
                <div className="mt-10 text-center">
                    <button className="bg-accent hover:bg-brand-700 dark:bg-amber-950 dark:hover:bg-cyan-900 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 font-display">
                        Enroll Now!
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Maincontent
