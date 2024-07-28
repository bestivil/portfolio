import Navigation from "../split/navigation";
import HeroSection from "../split/hero-section";
import TechIcons from "../split/tech-stack-icons";
import About from "../split/about-section";
import Projects1, { Projects2 } from "../split/projects";
import Publications from "../split/publications";
import TechSkills from "../split/technical-skills";

export default async function DisplayProjects() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <HeroSection />

      <TechIcons />

      {/* <!-- About and Experience and Technical --> */}
      <div
        id="me"
        className="grid-row-2 mt-40 w-full gap-4 pt-40 md:grid lg:items-center lg:justify-center"
      >
        <About />

        <TechSkills />

        {/* <!-- Publication --> */}
        <Publications />

        {/* <!-- Projects --> */}

        <div className="flex flex-col ">
          <p className="m-6 pb-4 pt-80 text-3xl font-bold text-white md:pt-96">
            Projects
          </p>

          {/* <!-- Project 1 --> */}
          <Projects1 />

          {/* <!-- Project 2 --> */}
          <Projects2 />

          <div className="pt-40 md:pt-24"></div>
        </div>
      </div>
    </div>
  );
}
