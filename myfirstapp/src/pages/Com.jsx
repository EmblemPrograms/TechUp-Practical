import StudentCard from './Studentcard.jsx'
import Form from '../form.jsx'
function Navbar() {
    return <nav>TechUp Academy</nav>
}

function Hero() {
    return <h1>Become a FrontEnd Developer</h1>
}

function About() {
    return <p>We teach modern FrontEnd Development</p>
}

function Contact() {
    return <p>Email: Hello@techup.com</p>
}

function Footer() {
    return <footer>© 2026 TechUp</footer>
}

function App() {
    return (
        <>
        <Navbar />
        <Hero />
        <About />
        <StudentCard />
        <Form />
        <Contact />
        <Footer />
        </>
    )
}
export default App