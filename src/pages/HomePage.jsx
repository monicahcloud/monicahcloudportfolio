import Navbar from "../components/navbar/NavBar";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import LandingPageContent from "@/components/landing/LandingPageContent";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-full overflow-hidden">
      <Navbar />
      <Hero />
      <LandingPageContent />
      <Footer />
    </main>
  );
}
