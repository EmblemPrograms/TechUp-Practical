import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Hero from "./components/Hero"
import  Maincontent from "./components/maincontent"
import Footer from "./components/footer"
import Students from "./pages/Studentcard"

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
    <div className="flex flex-1 flex-col">
      <Header />
      <Hero />
      <Maincontent />
      <Students />
      <Footer />
    </div>
    </div>
  );
}

export default App;
