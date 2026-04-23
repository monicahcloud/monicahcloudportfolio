import { BookOpen, Film, Headphones, Mail, Play } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import ResourcesHero from "../components/resources/ResourceHero";
import FeaturedPicks from "../components/resources/FeaturedPicks";
import ResourceGridSection from "../components/resources/ResourceGridSection";
import ResourcesCta from "../components/resources/ResourcesCta";
import { featuredPicks, videos, books, movies, musicList } from "/data";
import Navbar from "@/components/navbar/NavBar";

export default function ResourcesPage() {
  return (
    <main className="bg-[#f8f3ee] text-slate-700">
      <Navbar />
      <ResourcesHero />
      <FeaturedPicks />
      <ResourceGridSection
        id="videos"
        eyebrow="Watch"
        title="YouTube Videos"
        icon={Play}
        items={videos}
        buttonText="Watch Video"
      />
      <ResourceGridSection
        id="books"
        eyebrow="Read"
        title="Recommended Books"
        icon={BookOpen}
        items={books}
        buttonText="View Book"
        showAuthor
      />
      <ResourceGridSection
        id="movies"
        eyebrow="Watch"
        title="Recommended Movies"
        icon={Film}
        items={movies}
        buttonText="See Movie"
      />
      <ResourceGridSection
        id="music"
        eyebrow="Listen"
        title="Music for the Journey"
        icon={Headphones}
        items={musicList}
        buttonText="Listen Now"
        showAuthor
        authorLabel="artist"
      />
      <ResourcesCta />
    </main>
  );
}
