export default function TechSkils() {
  return (
    <div className="flex flex-col items-center gap-2 pt-2 md:min-h-96 lg:justify-center">
      <div className="h-full min-h-96 w-full rounded-xl bg-slate-400 pt-6 shadow-lg lg:items-center lg:justify-center">
        <div className="flex justify-center text-4xl font-bold">
          Technical Skills
        </div>
        {/* <!-- 1st Row --> */}
        <div className="p-8">
          <div className="flex flex-col items-center">
            <div className="flex w-full flex-col justify-center gap-8 px-32 max-md:gap-7 md:flex-row">
              <div className="">
                <span className="flex items-center justify-center text-2xl font-semibold">
                  Frontend
                </span>
                <div className="ml-6 flex flex-wrap items-center justify-center md:max-w-64">
                  <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">
                    React.js
                  </div>
                  <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">
                    TypeScript
                  </div>
                  <div className="m-2 flex items-center justify-center rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">
                    Tailwind CSS
                  </div>
                </div>
              </div>
              <div className="">
                <span className="flex items-center justify-center text-2xl font-semibold">
                  Backend
                </span>
                <div className="ml-6 flex flex-wrap items-center justify-center md:max-w-64">
                  <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">
                    SQL
                  </div>
                  <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">
                    Express.js
                  </div>
                  <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">
                    Node.js
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- 2nd Row --> */}
          <div className="flex flex-col items-center pt-4">
            <div className="flex w-full flex-col justify-center gap-8 px-32 max-md:gap-7 md:flex-row">
              <div className="">
                <span className="flex items-center justify-center text-2xl font-semibold">
                  DevOps
                </span>
                <div className="ml-6 flex flex-wrap items-center justify-center md:max-w-64">
                  <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">
                    Jenkins
                  </div>
                  <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">
                    Git
                  </div>
                  <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">
                    Terraform
                  </div>
                </div>
              </div>
              <div className="">
                <span className="flex items-center justify-center text-2xl font-semibold">
                  Other
                </span>
                <div className="ml-6 flex flex-wrap items-center justify-center md:max-w-64">
                  <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">
                    Python
                  </div>
                  <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">
                    C++
                  </div>
                  <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">
                    C#
                  </div>
                  <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">
                    Java
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
