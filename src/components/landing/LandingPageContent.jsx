import AboutStrip from "./AboutStrip";
import WhatIDo from "./WhatIDo";
import BookAndVlogRow from "./BookAndVlogRow";
import ProjectsVlogInspiration from "./ProjectsVlogInspiration";

export default function LandingPageContent() {
  return (
    <section className="bg-[#f8f3ee] px-4 pb-14 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <AboutStrip />
        <WhatIDo />
        <BookAndVlogRow />
        <ProjectsVlogInspiration />
      </div>
    </section>
  );
}
