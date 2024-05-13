import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ContactMe from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

export default function App() {
  return (
    <main>
      <Navbar style="sticky top-0 z-50" />
      <Home id="home" />
      <About id="about" />
      <Services />
      <Portfolio />
      <ContactMe />
      <Footer />
    </main>
  );
}
