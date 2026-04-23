import AboutStorySection from "../components/about/AboutStorySection";
import AboutCtaBanner from "../components/about/AboutCtaBanner";
import HobbiesAndFunFacts from "../components/about/HobbiesAndFunFacts";
import AboutHero from "../components/about/AboutHero";
import Navbar from "../components/navbar/NavBar";

export default function AboutMe() {
  return (
    <main className="bg-[#f8f3ee] text-slate-700">
      <Navbar />
      <AboutHero />
      <AboutStorySection />
      <HobbiesAndFunFacts />
      <AboutCtaBanner />
    </main>
  );
}
