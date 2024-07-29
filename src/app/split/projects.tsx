/* eslint-disable  no-explicit-any */
import { ButtonIcon } from "../_components/button-with-icon";
import {
  CSharpIcon,
  GitHubIcon,
  ReactIcon,
  TailwindIcon,
  UnityIcon,
  VisitArrow,
} from "../_components/icons";

export interface CardProps {
  title: string;
  icons: any[];
  descrptions: string[];
  githublink?: string;
  websitelink?: string;
}

const Project1: CardProps = {
  title: "Game Development",
  icons: [<CSharpIcon />, <UnityIcon />],
  descrptions: [
    "Led group project through software development lifecycle.",
    "Leveraged Trello to organise weekly sprints.",
  ],
  githublink: "https://github.com/bestivil/COMP4024-CosmicWordQuest",
};

const Project2: CardProps = {
  title: "Weather",
  icons: [<ReactIcon />, <TailwindIcon />],
  descrptions: [
    "Fully responsive design, favourite locations, and advanced metrics.",
    "Integrated API's using Express.js",
  ],
  websitelink: "https://react-weather-application-zeta.vercel.app/",
};

const ProjectOrder = [Project1, Project2];

export function Project(object: CardProps) {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center px-3 pb-6 md:flex-row">
        {ProjectTitle(object.title)} {ProjectBuiltWith(object.icons)}
      </div>
      <div> {ProjectDescriptions(object.descrptions)} </div>
    </>
  );
}

export function ProjectTitle(name: string) {
  return (
    <span className="text-semibold flex w-3/4 items-center justify-center p-3 text-2xl">
      {name}
    </span>
  );
}

export function ProjectBuiltWith(icons: any[]) {
  return (
    <div className="flex w-full flex-row items-center justify-center md:justify-end md:pr-4">
      <span className="flex items-center justify-center max-sm:flex-col">
        Built with:
        <div className="w-4"></div>
        {icons.map((item, index) => item)}
      </span>
    </div>
  );
}

export function ProjectDescriptions(text: string[]) {
  return (
    <div className="flex p-2">
      <div className="flex w-full flex-col px-3 py-4">
        {text.map((item, index) => (
          <span className="text-semibold text-md">• {item}</span>
        ))}
      </div>
    </div>
  );
}

export function ProjectsBoilerplate() {
  return (
    <>
      {ProjectOrder.map((item, index) => (
        <div className="hover:shadow-gray-400/2 mt-8 flex h-full w-full flex-col justify-between rounded-2xl bg-slate-950 p-4 text-white hover:border-slate-400 hover:shadow-lg">
          <div className="flex-col pt-4 max-md:justify-center md:flex-row">
            {Project(item)}
          </div>

          <div className="flex w-full flex-1 flex-col gap-3 max-md:px-32 md:mt-0 md:flex-row md:px-2">
            <div className="flex-1"></div>
          </div>

          <div className="flex flex-row items-end justify-end gap-3 p-2">
            <div className="md:w-11/12"></div>

            {item.githublink
              ? ButtonIcon(item.githublink, "GitHub", <GitHubIcon />)
              : undefined}

            {item.websitelink
              ? ButtonIcon(item.websitelink, "Visit", <VisitArrow />)
              : undefined}
          </div>
        </div>
      ))}
    </>
  );
}
