export default function Navigation() {
  return (
    <div className="container relative flex min-w-full flex-col justify-center overflow-hidden">
      <div className="h-18 lg:p-18 hidden w-full flex-row flex-nowrap gap-8 overflow-hidden p-8 min-[300px]:flex ">
        {/* <!-- Left Bar --> */}
        <div className=" duration-450 min-w-3/4 3xl:max-w-[25%] fixed bottom-7 left-1/2 z-50 flex h-14 w-full max-w-[50%] transform flex-row items-center justify-between rounded-3xl border-4 border-white/10 bg-slate-800 p-4 px-4 text-white shadow-2xl shadow-black/80 transition-all max-md:min-w-72 max-md:-translate-x-1/2 md:bottom-auto md:left-0 md:ml-5 md:w-3/4 md:px-14 lg:max-w-[55%] xl:max-w-[45%] 2xl:max-w-[35%] ">
          <div className="group flex flex-row items-center px-2 transition-transform hover:scale-110 md:px-5">
            <a href="#me" className="flex flex-row">
              <div className="icon mr-2 md:mb-0 md:mr-2">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  style={{ fill: "#FFFFFF" }}
                >
                  <path d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189" />
                </svg>
              </div>
            </a>
            <a href="#me" className="hidden min-[900px]:block">
              Me
            </a>
          </div>

          <div className="group flex items-center gap-1 rounded-lg p-2 transition-transform hover:scale-110 md:p-5">
            <a href="#publications" className="flex flex-row ">
              <div className="icon mr-2">
                <svg
                  width="22"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  style={{ fill: "#FFFFFF" }}
                >
                  <path d="M14 0v10l2-1.518 2 1.518v-10h4v24h-17c-1.657 0-3-1.343-3-3v-18c0-1.657 1.343-3 3-3h9zm6 20h-14.505c-1.375 0-1.375 2 0 2h14.505v-2z" />
                </svg>
              </div>
            </a>
            <a href="#publications" className="hidden min-[900px]:block">
              Publication
            </a>
          </div>

          <div className="group flex items-center rounded-lg p-2 transition-transform hover:scale-110 md:p-5">
            <a href="#projects" className="flex flex-row">
              <div className="icon mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{ fill: "#FFFFFF" }}
                >
                  <path d="M1 9v-7h6c1.695 1.942 2.371 3 4 3h12v4h-22zm-1 2l2 11h20l2-11h-24z" />
                </svg>
              </div>
            </a>
            <a href="#projects" className="hidden min-[900px]:block">
              Projects
            </a>
          </div>

          <div className="xl:1/2 hidden lg:w-1/4 "></div>
        </div>

        {/* <!-- Right Bars --> */}
        <div className="z-50 flex w-full justify-center space-x-2 md:w-full md:justify-end md:justify-items-end">
          <div className="flex flex-row rounded-3xl bg-slate-700 shadow-lg shadow-black/80 max-md:gap-3 md:fixed">
            {/* <!-- Email Bar --> */}
            <div className="flex flex-none items-center justify-center rounded-3xl p-4 text-black shadow-2xl">
              <a
                href="mailto:baestivil@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  style={{ fill: "#FFFFFF" }}
                >
                  <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                </svg>
              </a>
            </div>

            {/* <!-- LinkedIn Bar --> */}
            <div className="flex flex-none items-center justify-center rounded-3xl p-4 text-black shadow-2xl">
              <a
                href="https://www.linkedin.com/in/bruce-estivil/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "#FFFFFF" }}
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
