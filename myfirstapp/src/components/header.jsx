function Header() {
    return (
        <header style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)',
            color: '#ffffff',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.2)',
            padding: '16px 32px'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px'
            }}>
                <div style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    letterSpacing: '0.05em'
                }}>
                    TechUp Academy
                </div>

                <nav style={{
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'center',
                    fontSize: '0.95rem'
                }}>
                    <a href="#" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Home</a>
                    <a href="#" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Courses</a>
                    <a href="#" style={{ color: '#e2e8f0', textDecoration: 'none' }}>About</a>
                    <a href="#" style={{ color: '#e2e8f0', textDecoration: 'none' }}>Contact</a>
                </nav>

                <button style={{
                    background: '#f8fafc',
                    color: '#0f172a',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '12px 20px',
                    fontWeight: '700',
                    cursor: 'pointer'
                }}>
                    Enroll Now
                </button>
            </div>
        </header>
    )
}

export default Header