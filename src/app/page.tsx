import About from "./split/about-section";
import HeroSection from "./split/hero-section";
import Navigation from "./split/navigation";
import { ProjectsBoilerplate } from "./split/projects";
import Publications from "./split/publications";
import TechIcons from "./split/tech-stack-icons";
import TechSkills from "./split/technical-skills";

export default async function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
      <TechIcons />

      <div
        id="me"
        className="grid-row-2 mt-40 w-full gap-4 pt-40 md:grid lg:items-center lg:justify-center"
      >
        <About />
        <TechSkills />
        <div id="publications" className="flex flex-col py-48 ">
          <p className="md:pt-50 m-6 pb-4 text-3xl font-bold text-white">
            Publications
          </p>
          <Publications />
        </div>

        <div id="projects" className="flex flex-col pb-48 ">
          <p className="m-6 text-3xl font-bold text-white">Projects</p>

          <ProjectsBoilerplate />

          <div className="pt-40 md:pt-24"></div>
        </div>
      </div>
    </div>
  );
}
