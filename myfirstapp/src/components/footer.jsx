function Footer() {
    return (
        <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-slate-200 shadow-inner px-5 pt-7 pb-4 mt-10">
            <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-5">
                <p className="text-sm">
                    &copy; 2026 <strong className="text-white">TechUp Academy</strong>. All rights reserved.
                </p>

                <div className="flex flex-wrap gap-4 text-sm">
                    <a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="text-slate-300 hover:text-white transition-colors">Terms</a>
                    <a href="#" className="text-slate-300 hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer
