import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

export default function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <ContactMe />
      <Footer />
    </main>
  );
}
