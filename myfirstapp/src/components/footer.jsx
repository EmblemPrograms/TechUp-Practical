function Footer() {
    const footerStyle = {
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#e2e8f0',
        padding: '28px 20px 18px',
        marginTop: '40px',
        boxShadow: '0 -4px 16px rgba(15, 23, 42, 0.2)'
    };

    const innerStyle = {
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap'
    };

    const linksStyle = {
        display: 'flex',
        gap: '18px',
        flexWrap: 'wrap',
        fontSize: '0.95rem'
    };

    const linkStyle = {
        color: '#cbd5e1',
        textDecoration: 'none',
        transition: 'color 0.2s ease'
    };

    return (
        <footer style={footerStyle}>
            <div style={innerStyle}>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                    &copy; 2026 <strong style={{ color: '#fff' }}>TechUp Academy</strong>. All rights reserved.
                </p>

                <div style={linksStyle}>
                    <a href="#" style={linkStyle}>Privacy</a>
                    <a href="#" style={linkStyle}>Terms</a>
                    <a href="#" style={linkStyle}>Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer