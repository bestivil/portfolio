export default function About() {
  return (
    <div className="flex h-full w-full flex-row gap-2 max-md:flex-col md:justify-center">
      <div className="h-full md:w-2/4">
        <div className="h-full rounded-xl bg-slate-500 pb-4 shadow-lg max-md:w-full">
          <div className="flex flex-col items-center pt-4">
            <span className="pb-4 text-2xl font-bold text-white">About</span>
          </div>
          <span className="flex px-5 pt-6 text-sm font-normal text-white">
            • Mentoring Computer Science students through projects
          </span>
          <span className="flex px-7 text-sm text-white">• (Tech Cadets)</span>
          <span className="flex px-7 text-sm text-white">
            • (Black Excellence Network)
          </span>
        </div>
      </div>
      <div className="h-full rounded-xl bg-slate-700 pb-4 shadow-lg md:w-2/4">
        <div className="flex flex-col items-center pt-4">
          <span className="text-xl font-bold text-white">Experience</span>
        </div>
        <div className="p-4">
          <span className="flex px-5 pt-6 font-semibold text-white">
            J.P. Morgan
          </span>
          <span className="flex px-5 pb-4 font-mono text-sm font-light text-white">
            Software Engineer
          </span>

          <span className="flex px-5 font-semibold text-white">
            University of Nottingham
          </span>
          <span className="flex px-5 font-mono text-sm text-white">
            (MSc) Computer Science
          </span>
        </div>
      </div>
    </div>
  );
}
