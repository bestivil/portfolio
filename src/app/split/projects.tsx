import {
  CSharpIcon,
  GitHubIcon,
  ReactIcon,
  TailwindIcon,
  UnityIcon,
  VisitArrow,
} from "../svg/icons";

export default function Projects1() {
  return (
    <div
      id="projects"
      className="hover:shadow-gray-400/2 mb-4 flex h-full w-full flex-col justify-between rounded-2xl bg-slate-950 text-white hover:border-slate-400 hover:shadow-lg"
    >
      <div className="flex-col p-5 max-md:justify-center md:flex-row">
        <div className="flex w-full flex-col items-center justify-center px-3 pb-6 md:flex-row">
          <span className="text-semibold flex w-3/4 items-center justify-center p-3 text-2xl">
            Game Development
          </span>
          <div className="flex w-full flex-col items-center justify-center md:items-end ">
            <span className="flex items-center justify-center max-sm:flex-col ">
              Built with:
              <div className="w-4"></div>
              <CSharpIcon />
              <UnityIcon />
            </span>
          </div>
        </div>

        <div className="flex p-2">
          <div className="flex w-full flex-col px-3 py-4">
            <span className="text-semibold text-md">
              • Led group project through software development lifecycle.{" "}
            </span>
            <span className="text-semibold text-md">
              • Leveraged Trello to organise weekly sprints.{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full  flex-1 flex-col max-md:px-32 md:mt-0 md:flex-row md:px-2">
        <div className="flex-1"></div>
      </div>

      <div className="flex flex-row items-end justify-end p-2">
        <div className="md:w-5/6"></div>

        <a
          href="https://github.com/bestivil/COMP4024-CosmicWordQuest"
          className="relative flex h-11 w-full flex-row items-center justify-center gap-2 rounded-md bg-slate-100 p-4 text-black shadow-md md:w-1/3"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex flex-row items-center justify-center gap-2">
            <GitHubIcon />
            <div className="flex items-center justify-center gap-2">
              <span className="items-center text-sm">GitHub</span>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

export function Projects2() {
  return (
    <div className="hover:shadow-gray-400/2 flex h-full w-full flex-col justify-between rounded-2xl bg-slate-950 text-white hover:border-slate-400 hover:shadow-lg">
      <div className="flex-col pt-4 max-md:justify-center md:flex-row">
        <div className="flex w-full flex-col items-center justify-center px-3 pb-6 md:flex-row">
          <span className="text-semibold flex w-3/4 items-center justify-center p-3 text-2xl">
            Weather
          </span>
          <div className="flex w-full flex-row items-center justify-center md:justify-end md:pr-4">
            <span className="flex items-center justify-center max-sm:flex-col">
              Built with:
              <div className="w-4"></div>
              <ReactIcon />
              <TailwindIcon />
            </span>
          </div>
        </div>

        <div className="flex p-2">
          <div className="flex w-full flex-col px-8 py-4">
            <span className="text-semibold text-md">
              • Fully responsive design, favourite locations, and advanced
              metrics.{" "}
            </span>
            <span className="text-semibold text-md">
              • Integrated API's using Express.js{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-1 flex-col gap-3 max-md:px-32 md:mt-0 md:flex-row md:px-2">
        <div className="flex-1"></div>
      </div>

      <div className="flex flex-row items-end justify-end gap-3 p-2">
        <div className="md:w-11/12"></div>

        <button className="relative flex h-11 w-1/2 items-center justify-center gap-2 rounded-md bg-slate-100/5 p-4 text-black md:w-1/4">
          <GitHubIcon />
          <div className="flex items-center justify-center gap-2">
            <span className="items-center text-sm">GitHub</span>
          </div>
        </button>

        <a
          href="https://react-weather-application-zeta.vercel.app/"
          className="group relative flex h-11 w-1/2 flex-row items-center justify-center gap-2 rounded-md bg-slate-100 p-4 text-black md:w-1/4"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" relative flex h-11 w-1/2 items-center justify-center rounded-md bg-slate-100 p-4 text-black ">
            <div className="flex items-center justify-center">
              <span className="items-center text-sm">Visit</span>
              <div className="group-hover:-rotate-45">
                <VisitArrow />
              </div>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}
