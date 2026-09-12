function Sidebar() {
    const styles = {
        sidebar: {
            width: '260px',
            height: '100vh',
            background: 'linear-gradient(180deg, #1f2937 0%, #111827 100%)',
            color: '#f9fafb',
            padding: '24px 20px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            fontFamily: 'Arial, sans-serif'
        },
        brand: {
            fontSize: '1.8rem',
            fontWeight: '700',
            padding: '8px 12px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '10px'
        },
        nav: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        },
        navItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 14px',
            borderRadius: '10px',
            color: '#d1d5db',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'all 0.2s ease',
            background: 'rgba(255,255,255,0.03)'
        },
        activeItem: {
            background: '#3b82f6',
            color: '#ffffff',
            boxShadow: '0 8px 20px rgba(59,130,246,0.35)'
        },
        footer: {
            marginTop: 'auto',
            padding: '16px 12px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            color: '#cbd5e1'
        }
    };

    const menuItems = [
        { name: 'Dashboard', icon: '🏠', active: true },
        { name: 'Analytics', icon: '📊', active: false },
        { name: 'Orders', icon: '🛒', active: false },
        { name: 'Customers', icon: '👥', active: false },
        { name: 'Settings', icon: '⚙️', active: false }
    ];

    return (
        <aside style={styles.sidebar} className="sidebar">
            <div style={styles.brand}>TechUp</div>

            <nav style={styles.nav}>
                {menuItems.map((item) => (
                    <a
                        key={item.name}
                        href="#"
                        style={{
                            ...styles.navItem,
                            ...(item.active ? styles.activeItem : {})
                        }}
                    >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                    </a>
                ))}
            </nav>

            <div style={styles.footer}>
                <div>Welcome back, Admin</div>
            </div>
        </aside>
    );
}

export default Sidebar