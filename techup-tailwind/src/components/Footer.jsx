function Footer () {
    return (
        <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">&copy; 2026 TechUp Academy. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;