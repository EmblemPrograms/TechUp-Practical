function Header() {
    return (
        <header className="bg-gradient-to-r from-slate-900 to-blue-700 text-white shadow-lg px-8 py-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-5">
                <div className="text-2xl font-bold tracking-wide">
                    TechUp Academy
                </div>

                <nav className="flex items-center gap-6 text-sm">
                    <a href="#" className="text-slate-200 hover:text-white transition-colors">Home</a>
                    <a href="#" className="text-slate-200 hover:text-white transition-colors">Courses</a>
                    <a href="#" className="text-slate-200 hover:text-white transition-colors">About</a>
                    <a href="#" className="text-slate-200 hover:text-white transition-colors">Contact</a>
                </nav>

                <button className="bg-slate-50 text-slate-900 font-bold rounded-full px-5 py-3 hover:bg-white transition-colors">
                    Enroll Now
                </button>
            </div>
        </header>
    );
}

export default Header
