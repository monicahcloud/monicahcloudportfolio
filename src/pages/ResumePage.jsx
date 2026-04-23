import Navbar from "../components/navbar/NavBar";
import ResumeHero from "../components/resume/ResumeHero";
import ResumeContent from "../components/resume/ResumeContent";
import Footer from "../components/footer/Footer";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-full overflow-hidden">
      <Navbar />
      <ResumeHero />
      <ResumeContent />
      <Footer />
    </main>
  );
}
