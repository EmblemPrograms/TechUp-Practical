function Maincontent() {
    return (
        <main style={{
            padding: '40px 24px',
            background: 'linear-gradient(135deg, #f5f7ff 0%, #eef6ff 100%)',
            minHeight: '60vh',
            fontFamily: 'Arial, sans-serif',
            color: '#1f2937'
        }}>
            <div style={{
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <section style={{
                    textAlign: 'center',
                    marginBottom: '32px'
                }}>
                    <h2 style={{
                        margin: '0 0 12px',
                        fontSize: '2.5rem',
                        color: '#111827'
                    }}>Main Content</h2>
                    <p style={{
                        margin: 0,
                        fontSize: '1.1rem',
                        color: '#4b5563',
                        lineHeight: 1.6
                    }}>
                        This is the main content of the application, designed to present key information clearly and professionally.
                    </p>
                </section>

                <section style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '20px'
                }}>
                    {[
                        { title: 'Overview', text: 'Get a quick summary of the project and its purpose.' },
                        { title: 'Features', text: 'Discover the tools and functions that make this app useful.' },
                        { title: 'Progress', text: 'Track updates and see how the application is evolving.' }
                    ].map((card) => (
                        <div key={card.title} style={{
                            background: '#ffffff',
                            borderRadius: '16px',
                            padding: '24px 20px',
                            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
                            border: '1px solid #e5e7eb'
                        }}>
                            <h3 style={{
                                margin: '0 0 10px',
                                fontSize: '1.3rem',
                                color: '#1f2937'
                            }}>{card.title}</h3>
                            <p style={{
                                margin: 0,
                                color: '#6b7280',
                                lineHeight: 1.6
                            }}>{card.text}</p>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    )
}
export default Maincontent