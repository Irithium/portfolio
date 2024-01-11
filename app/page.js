import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-20 sm:mt-24 lg:mt-16 mx-auto px-12 py-4 ">
        <HeroSection />
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
