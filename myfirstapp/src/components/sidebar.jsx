function Sidebar() {
    const menuItems = [
        { name: 'Dashboard', icon: '🏠', active: true },
        { name: 'Analytics', icon: '📊', active: false },
        { name: 'Orders', icon: '🛒', active: false },
        { name: 'Customers', icon: '👥', active: false },
        { name: 'Settings', icon: '⚙️', active: false }
    ];

    return (
        <aside className="w-64 min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-gray-50 flex flex-col gap-5 px-5 py-6">
            <div className="text-2xl font-bold px-3 py-2 border-b border-white/10 mb-2">
                TechUp
            </div>

            <nav className="flex flex-col gap-2.5">
                {menuItems.map((item) => (
                    <a
                        key={item.name}
                        href="#"
                        className={
                            "flex items-center gap-3 px-3.5 py-3 rounded-lg text-base transition-all " +
                            (item.active
                                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/35"
                                : "bg-white/5 text-gray-300 hover:bg-white/10")
                        }
                    >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                    </a>
                ))}
            </nav>

            <div className="mt-auto px-3 py-4 border-t border-white/10 text-slate-300">
                <div>Welcome back, Admin</div>
            </div>
        </aside>
    );
}

export default Sidebar
