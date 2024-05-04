import Bg from "./components/BgPelengkap";
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
      <Navbar style="sticky top-0 z-50" />
      <Home id="home" />
      <About id="about" />
      <Bg
        background="bg-[url('/public/bgglasses.jpg')]"
        title="The sexiest job in the 21st century"
      />
      <Services id="services" />
      <Bg
        background="bg-[url('/public/bglearning.jpg')]"
        title="Never stop learning and implementing"
      />
      <Portfolio id="portfolio" />
      <Bg
        background="bg-[url('/public/bgroad.jpg')]"
        title="The best way out is always through."
      />
      <ContactMe id="contact" />
      <Footer />
    </main>
  );
}
