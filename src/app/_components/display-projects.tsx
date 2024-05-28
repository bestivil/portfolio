import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function DisplayProjects() {

  return (
    <div className="min-h-screen bg-slate-900">
    <div className="container relative flex min-w-full flex-col justify-center overflow-hidden">
      <div className="h-18 flex w-full flex-row flex-nowrap gap-8 overflow-hidden p-8 lg:p-18">
        {/* <!-- Left Bar --> */}
        <div className=" p-4 duration-450 fixed bottom-7 left-1/2 z-50 min-w-3/4 flex h-14 w-full max-w-[50%] lg:max-w-[55%] xl:max-w-[45%] 2xl:max-w-[35%] 3xl:max-w-[25%] transform flex-row items-center justify-between rounded-3xl border-4 border-white/10 bg-slate-800 px-4 text-white shadow-2xl shadow-black/80 transition-all max-md:min-w-72 max-md:-translate-x-1/2 md:bottom-auto md:left-0 md:ml-5 md:w-3/4 md:px-14">
          <div className="group flex flex-row items-center px-2 transition-transform hover:scale-110 md:px-5">
            <a href="#me" className="flex flex-row">
            <div className="icon mr-2 md:mb-0 md:mr-2">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" style={{ fill: "#FFFFFF" }}><path d="M12 0c-5.083 0-8.465 4.949-3.733 13.678 1.596 2.945-1.725 3.641-5.09 4.418-3.073.709-3.187 2.235-3.177 4.904l.004 1h23.99l.004-.969c.012-2.688-.093-4.223-3.177-4.935-3.438-.794-6.639-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.731-13.678m0 1c1.89 0 3.39.764 4.225 2.15 1.354 2.251.866 5.824-1.377 10.06-.577 1.092-.673 2.078-.283 2.932.937 2.049 4.758 2.632 6.032 2.928 2.303.534 2.412 1.313 2.401 3.93h-21.998c-.01-2.615.09-3.396 2.401-3.93 1.157-.266 5.138-.919 6.049-2.94.387-.858.284-1.843-.304-2.929-2.231-4.115-2.744-7.764-1.405-10.012.84-1.412 2.353-2.189 4.259-2.189" /></svg>
            </div>
            </a>
            <a href="#me" className="hidden min-[900px]:block">Me</a>
            
          </div>
  
          
        <div className="group flex items-center gap-1 rounded-lg p-2 transition-transform hover:scale-110 md:p-5">
            <a href="#publications" className="flex flex-row ">
            <div className="icon mr-2">
              <svg width="22" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" style={{ fill: "#FFFFFF" }}><path d="M14 0v10l2-1.518 2 1.518v-10h4v24h-17c-1.657 0-3-1.343-3-3v-18c0-1.657 1.343-3 3-3h9zm6 20h-14.505c-1.375 0-1.375 2 0 2h14.505v-2z" /></svg>
            </div>
            </a>
            <a href="#publications" className="hidden min-[900px]:block">Publication</a>
          </div>
          
          <div className="group flex items-center rounded-lg p-2 transition-transform hover:scale-110 md:p-5">
            <a href="#projects" className="flex flex-row">
            <div className="icon mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: "#FFFFFF" }}>
                <path d="M1 9v-7h6c1.695 1.942 2.371 3 4 3h12v4h-22zm-1 2l2 11h20l2-11h-24z" />
              </svg>
            </div>
             </a>
             <a href="#projects" className="hidden min-[900px]:block">Projects</a>
          </div>
  
          

          <div className="lg:w-1/4 hidden xl:1/2 " ></div>
        </div>
  
        {/* <!-- Right Bars --> */}
        <div className="z-50 flex w-full justify-center space-x-2 md:w-full md:justify-end md:justify-items-end">
          <div className="flex flex-row rounded-3xl bg-slate-700 shadow-lg shadow-black/80 md:fixed max-md:gap-3">
            {/* <!-- Email Bar --> */}
            <div className="flex flex-none items-center justify-center rounded-3xl p-4 text-black shadow-2xl">
                <a href="mailto:baestivil@gmail.com" target="_blank" rel="noreferrer">
              <svg width="24" height="24" fill-rule="evenodd" clip-rule="evenodd" style={{ fill: "#FFFFFF" }}>
                <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
              </svg>
            </a>
            </div>
  
            {/* <!-- LinkedIn Bar --> */}
            <div className="flex flex-none items-center justify-center rounded-3xl p-4 text-black shadow-2xl">
            <a href="https://www.linkedin.com/in/bruce-estivil/" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#FFFFFF" }}>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    {/* <!-- Hero Section --> */}
    <div className=" flex h-40 flex-col items-center justify-center gap-4 mb-40 mt-72">
      <div className="lg:text-8xl rounded-lg bg-yellow-300 px-32 py-2 text-center text-6xl font-extrabold text-black">Bruce Estivil</div>
      <div className="rounded-lg lg:text-3xl bg-yellow-300 px-4 py-2 text-center text-lg text-black">Full-stack Developer</div>
    </div>
  
    {/* <!-- Tech Stack --> */}
    <div className=" flex min-w-28 items-center justify-center md:pt-32">
      <div className=" flex-row flex justify-between min-w-[40%] gap-4 grid-cols-5 items-center md:gap-16 md:px-8 md:min-w-[60%] md:grid-cols-5 lg:justify-center px-6">
        <div className="flex h-16 w-16 md:w-24 md:h-24 items-center justify-center rounded-lg bg-slate-700">
        <svg width="50%" height="50%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_typescript_official</title><rect x="2" y="2" width="28" height="28" rx="1.312" style={{ fill:'#3178c6'}}></rect><path d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z" style={{ fill:'#ffffff'}}></path></g></svg>
          
        </div>
        <div className="flex h-16 w-16 md:w-24 md:h-24 items-center justify-center rounded-lg bg-slate-700">
            <svg fill="#000000" width="50%" height="50%" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>python</title> <path d="M19.212 26.447l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.412 0.412 0.287 0.512 0.1 0.512-0.1 0.412-0.287 0.287-0.412 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.287-0.512-0.1-0.512 0.1zM27.297 8.64l0.35 0.075 0.4 0.15 0.437 0.225 0.45 0.337 0.45 0.437 0.437 0.587 0.4 0.737 0.35 0.912 0.262 1.1 0.175 1.3 0.062 1.537-0.075 1.537-0.2 1.3-0.3 1.075-0.4 0.887-0.45 0.712-0.5 0.562-0.525 0.412-0.525 0.3-0.5 0.2-0.45 0.112-0.4 0.062-0.3 0.025-0.2-0.012h-10.272v1.025h7.298l0.012 3.449 0.025 0.45-0.062 0.425-0.137 0.387-0.212 0.362-0.312 0.312-0.387 0.3-0.475 0.25-0.55 0.212-0.637 0.187-0.725 0.162-0.8 0.112-0.887 0.087-0.962 0.050-1.050 0.012-1.587-0.050-1.337-0.175-1.125-0.25-0.912-0.312-0.737-0.375-0.562-0.412-0.425-0.425-0.312-0.425-0.2-0.412-0.125-0.375-0.050-0.312-0.025-0.25 0.012-0.162v-6.673l0.063-0.8 0.162-0.675 0.262-0.575 0.325-0.475 0.375-0.4 0.412-0.3 0.437-0.25 0.437-0.175 0.412-0.125 0.375-0.075 0.325-0.050 0.262-0.025 0.162-0.012h7.298l0.862-0.062 0.737-0.175 0.625-0.262 0.512-0.35 0.412-0.4 0.337-0.437 0.25-0.45 0.187-0.45 0.125-0.437 0.087-0.4 0.050-0.35 0.025-0.262v-3.824h2.612l0.175 0.012zM10.939 3.704l-0.287 0.412-0.1 0.512 0.1 0.512 0.287 0.425 0.412 0.275 0.512 0.112 0.512-0.113 0.412-0.275 0.287-0.425 0.1-0.512-0.1-0.512-0.287-0.412-0.412-0.275-0.512-0.112-0.512 0.112zM18.812 1.229l1.125 0.25 0.912 0.325 0.737 0.375 0.562 0.4 0.425 0.425 0.312 0.425 0.2 0.412 0.125 0.375 0.050 0.325 0.025 0.25-0.012 0.162v6.673l-0.062 0.787-0.162 0.687-0.262 0.575-0.325 0.475-0.375 0.387-0.412 0.312-0.437 0.237-0.437 0.175-0.412 0.125-0.375 0.087-0.325 0.050-0.263 0.025h-7.46l-0.862 0.062-0.737 0.175-0.625 0.275-0.512 0.337-0.412 0.4-0.337 0.437-0.25 0.45-0.187 0.462-0.125 0.437-0.087 0.4-0.050 0.337-0.025 0.262v3.824h-2.787l-0.262-0.037-0.35-0.087-0.4-0.15-0.437-0.225-0.45-0.325-0.45-0.45-0.437-0.575-0.4-0.737-0.35-0.912-0.262-1.1-0.175-1.312-0.062-1.537 0.075-1.524 0.2-1.3 0.3-1.087 0.4-0.887 0.45-0.712 0.5-0.55 0.525-0.412 0.525-0.3 0.5-0.2 0.45-0.125 0.4-0.062 0.3-0.012h0.2l0.075 0.012h10.197v-1.037h-7.298l-0.012-3.436-0.025-0.462 0.062-0.425 0.137-0.387 0.212-0.35 0.312-0.325 0.387-0.287 0.475-0.25 0.55-0.225 0.637-0.187 0.725-0.15 0.8-0.125 0.887-0.075 0.962-0.050 1.050-0.025 1.587 0.063z"></path> </g></svg>
        </div>
        <div className="flex h-16 w-16 md:w-24 md:h-24 items-center justify-center rounded-lg bg-slate-700">
            <svg width="50%" height="50%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z" fill="#E76F00"></path> <path d="M17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677Z" fill="#E76F00"></path> <path d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456Z" fill="#5382A1"></path> <path d="M10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969Z" fill="#5382A1"></path> <path d="M11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758Z" fill="#5382A1"></path> <path d="M12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991Z" fill="#5382A1"></path> <path d="M25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388Z" fill="#5382A1"></path> <path d="M28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z" fill="#5382A1"></path> </g></svg>
        </div>
        
      </div>
    </div>
  
    {/* <!-- About and Experience and Technical --> */}
    <div id ="me" className="grid-row-2 auto-cols-auto mt-40 pt-40 grid gap-4 lg:items-center lg:justify-center w-full ">
      <div className="flex h-full w-full flex-row gap-2 max-md:flex-col md:justify-center ">
        <div className="h-full md:w-2/4">
          <div className="h-full rounded-xl bg-slate-500 shadow-lg max-md:w-full pb-4">
            <div className="flex flex-col items-center pt-4">
              <span className="pb-4 text-2xl font-bold text-white">About</span>
            </div>
            <span className="flex px-5 pt-6 font-normal text-white">• Mentor A-level Computer Science students</span>
            <span className="flex px-7 text-sm text-white">(Black Excellence Network)</span>
          </div>
        </div>
        <div className="h-full rounded-xl bg-slate-700 pb-4 shadow-lg md:w-2/4">
          <div className="flex flex-col items-center pt-4">
            <span className="text-xl font-bold text-white">Experience</span>
          </div>
          <div className="p-4">
            <span className="flex px-5 pt-6 font-semibold text-white">J.P. Morgan</span>
            <span className="flex px-5 pb-4 font-mono text-sm font-light text-white">Software Engineer</span>
  
            <span className="flex px-5 font-semibold text-white">University of Nottingham</span>
            <span className="flex px-5 font-mono text-sm text-white">MSc Computer Science</span>
          </div>
        </div>
      </div>
  
      {/* <!-- Technical Skills --> */}
      <div className="flex flex-col items-center gap-2 md:min-h-96 lg:justify-center">
        <div className="h-full min-h-96 w-full rounded-xl bg-slate-400 pt-6 shadow-lg lg:items-center lg:justify-center">
          <div className="flex justify-center text-4xl font-bold">Technical Skills</div>
          {/* <!-- 1st Row --> */}
          <div className="p-8">
            <div className="flex flex-col items-center">
              <div className="flex w-full flex-col justify-center gap-8 px-32 max-md:gap-7 md:flex-row">
                <div className="">
                  <span className="flex items-center justify-center text-2xl font-semibold">Frontend</span>
                  <div className="ml-6 flex flex-wrap items-center justify-center md:max-w-64">
                    <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">React.js</div>
                    <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">TypeScript</div>
                    <div className="m-2 rounded-xl items-center justify-center flex bg-black px-4 py-1 text-white shadow-xl shadow-black/10">Tailwind CSS</div>
                  </div>
                </div>
                <div className="">
                  <span className="flex items-center justify-center text-2xl font-semibold">Backend</span>
                  <div className="ml-6 flex flex-wrap items-center justify-center md:max-w-64">
                    <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">SQL</div>
                    <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">Express.js</div>
                    <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">Node.js</div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* <!-- 2nd Row --> */}
            <div className="flex flex-col items-center pt-4">
              <div className="flex w-full flex-col justify-center gap-8 px-32 max-md:gap-7 md:flex-row">
                <div className="">
                  <span className="flex items-center justify-center text-2xl font-semibold">DevOps</span>
                  <div className="ml-6 flex flex-wrap items-center justify-center md:max-w-64">
                    <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">Jenkins</div>
                    <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">Git</div>
                    <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">Terraform</div>
                  </div>
                </div>
                <div className="">
                  <span className="flex items-center justify-center text-2xl font-semibold">Other</span>
                  <div className="ml-6 flex flex-wrap items-center justify-center md:max-w-64">
                    <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">Python</div>
                    <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">C++</div>
                    <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">C#</div>
                    <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">Java</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* <!-- Publication --> */}
      <div id ="publications" className="flex flex-col">
        <p className="m-6 pt-24 pb-4 text-3xl font-bold text-white">Publications</p>
        <div className="hover:shadow-gray-400/2 flex h-full w-full flex-col justify-between rounded-2xl bg-slate-950 text-white hover:border-slate-400 hover:shadow-lg">
          <div className="flex-col pt-4 max-md:justify-center md:flex-row">
            <div className="flex w-full flex-col items-center justify-center px-3 pb-6 md:flex-row">
              <span className=" font-bold flex items-center justify-center p-3 px-10 text-md">Thesis: Exploring Delay Tolerant Networks in New York's subway system</span>
              <div className="bflex w-full flex-row items-center justify-center">
                <span className="flex items-center justify-center md:justify-end md:pr-4"
                  >Built with:
                  
                  {/* <!-- Java SVG --> */}
                  <svg width="64px" height="64px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z" fill="#E76F00"></path>
                      <path d="M17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677Z" fill="#E76F00"></path>
                      <path d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456Z" fill="#5382A1"></path>
                      <path d="M10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969Z" fill="#5382A1"></path>
                      <path d="M11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758Z" fill="#5382A1"></path>
                      <path d="M12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991Z" fill="#5382A1"></path>
                      <path d="M25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388Z" fill="#5382A1"></path>
                      <path d="M28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z" fill="#5382A1"></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
  
            <div className="flex p-4">
              <div className="flex w-full flex-col px-8 py-4">
                <span className="text-semibold text-md">• Evaluated pseudo-realistic traces to evaluate network protocols. </span>
                <span className="text-semibold text-md">• Reseached network interface and environment impacts on protocol performance. </span>
              </div>
            </div>
          </div>
  
          <div className="md:px flex flex-1 flex-col gap-3 max-md:px-32 md:mt-0 md:flex-row">
            <div className="flex-1"></div>
          </div>
  
          <div className="flex flex-row items-end justify-end gap-3 p-2">
            <div className="md:w-11/12"></div>
  
            <a href="https://scholar.google.com/citations?hl=en&user=ebQQOzIAAAAJ" className="relative flex flex-row h-11 w-1/2 items-center justify-center gap-2 rounded-md bg-slate-100 p-4 text-black  md:w-1/4" target="_blank" rel="noreferrer">
            <button className="group relative flex h-11 w-1/2 md:w-1/4 items-center justify-center rounded-md bg-slate-100 p-4 text-black ">
              <div className="flex items-center justify-center gap-3">
                <svg fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier"><path d="M14.573 2.729c-0.729 0.484-4.292 2.849-7.917 5.255s-6.589 4.396-6.589 4.422c0 0.026 0.182 0.146 0.406 0.266 0.224 0.13 3.797 2.109 7.953 4.411l7.542 4.193 0.193-0.099c0.109-0.052 2.891-1.641 6.188-3.521l5.99-3.427 0.036 10.599h3.557v-12.401l-4.615-3.094c-6.219-4.167-11.188-7.448-11.307-7.474-0.063-0.010-0.703 0.38-1.438 0.87zM7.141 22.177l0.016 2.672 8.828 5.292 8.891-5.339v-2.641c0-1.458-0.016-2.646-0.031-2.646-0.021 0-1.76 1.042-3.87 2.323l-4.406 2.661-0.578 0.339-1.755-1.052c-1.464-0.875-2.927-1.755-4.385-2.641l-2.672-1.615c-0.031-0.010-0.042 1.177-0.036 2.646z"></path></g>
                </svg>
                <span className="items-center text-xs">Google Scholar</span>
              </div>
            </button>
            </a>
  
            <a href="https://arxiv.org/pdf/2405.02647" className="group relative flex flex-row h-11 w-1/2 items-center justify-center gap-2 rounded-md bg-slate-100 p-4 text-black  md:w-1/4" target="_blank" rel="noreferrer">
            <button className="relative flex h-11 w-1/2 items-center justify-center rounded-md bg-slate-100 p-4 text-black">
              <div className="flex items-center justify-center gap-2">
                <span className="items-center text-sm">Read</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z" /></svg>
              </div>
            </button>
            </a>
          </div>
        </div>
      </div>
  
      {/* <!-- Projects --> */}
  
      <div className="flex flex-col ">
        <p className="m-6 pt-80 md:pt-96 pb-4 text-3xl font-bold text-white">Projects</p>
  
        {/* <!-- Project 1 --> */}
        <div id ="projects" className="hover:shadow-gray-400/2 flex h-full w-full flex-col justify-between rounded-2xl bg-slate-950 text-white hover:border-slate-400 hover:shadow-lg mb-4">
          <div className="flex-col p-5 max-md:justify-center md:flex-row">
            <div className="flex w-full flex-col items-center justify-center px-3 pb-6 md:flex-row">
              <span className="text-semibold flex w-3/4 items-center justify-center p-3 text-2xl">Game Development</span>
              <div className="flex w-full flex-col items-center justify-center md:items-end ">
                <span className="flex items-center justify-center "
                  >Built with:
                  <div className="w-4"></div>
                  <svg height="45" preserveAspectRatio="xMidYMid" viewBox="0 -1.428 255.582 290.108" width="45" xmlns="http://www.w3.org/2000/svg">
                    <path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76-2.052-3.603-5.125-6.622-9.247-9.009-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.1-27.163.27-13.543 7.986-81.348 46.833-101.553 58.536-8.321 4.818-12.37 12.19-12.372 21.771-.013 39.455 0 78.91-.013 118.365 0 4.724.991 8.91 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.987-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#a179dc" />
                    <path d="m128.182 143.241-125.194 72.084c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252z" fill="#280068" />
                    <path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76l-124.263 71.55 124.413 72.073c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#390091" />
                    <g fill="#fff">
                      <path d="m201.892 116.294v13.474h13.474v-13.474h6.737v13.474h13.474v6.737h-13.474v13.473h13.474v6.737h-13.474v13.474h-6.737v-13.474h-13.474v13.474h-6.737v-13.474h-13.473v-6.737h13.473v-13.473h-13.473v-6.737h13.473v-13.474zm13.474 20.21h-13.474v13.474h13.474z" />
                      <path d="m128.457 48.626c35.144 0 65.827 19.086 82.262 47.456l-.16-.273-41.35 23.808c-8.146-13.793-23.08-23.102-40.213-23.294l-.54-.003c-26.125 0-47.305 21.18-47.305 47.305a47.08 47.08 0 0 0 6.239 23.47c8.154 14.235 23.483 23.836 41.067 23.836 17.693 0 33.109-9.723 41.221-24.11l-.197.345 41.287 23.918c-16.255 28.13-46.518 47.157-81.253 47.536l-1.058.006c-35.255 0-66.025-19.204-82.419-47.724-8.003-13.923-12.582-30.064-12.582-47.277 0-52.466 42.532-95 95-95z" />
                    </g>
                  </svg>
                  {/* <!-- Unity Logo --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" fill="#ffff"><path d="M65.852 22.815h-3.498V30.9c0 2.074-.853 3.732-3.36 3.732-2.48.027-3.2-1.68-3.2-3.84v-7.97h-3.5v8.85c0 2.56.907 6.2 5.704 6.237 2.64.027 3.945-1.253 4.557-2.4v1.945h3.284zm1.382 14.63h3.492V29.37c0-2.052.853-3.704 3.332-3.732 2.452 0 3.172 1.68 3.172 3.865v7.942h3.492v-8.822c0-2.585-.907-6.237-5.677-6.264-2.612-.027-3.92 1.253-4.557 2.4l.027-1.945h-3.28v14.63zm14.82-16.605h3.492v-3.12h-3.492v3.1zm0 16.604h3.492v-14.63h-3.492zm7.145.002h3.492v-11.94h2.505l-1.037-2.692H92.7V17.72h-3.5v5.096h-2.425v2.692H89.2zm9.367 5.117h3.73L110 22.815h-3.732l-3.52 9.727-3.564-9.727h-3.738l5.517 14.074zM45.53 26.256l-3.9-14.464L27.1 15.67l-2.148 3.776-4.35-.03L10 30.003l10.622 10.585 4.357-.033 2.15 3.776 14.5 3.876 3.887-14.462L43.32 30zm-9.1-9.046l-6.37 11.004H17.32l8.02-8.16zm-6.37 14.6l6.37 11.003-11.1-2.852-8.02-8.148h12.74zm3.1-1.787L39.542 19l3.08 11.004-3.08 11z" /></svg>
                </span>
              </div>
            </div>
  
            <div className="flex p-2">
              <div className="flex w-full flex-col px-3 py-4">
                <span className="text-semibold text-md">• Led group project through software development lifecycle. </span>
                <span className="text-semibold text-md">• Leveraged Trello to organise weekly sprints. </span>
              </div>
            </div>
          </div>
  
          <div className="flex w-full  flex-1 flex-col max-md:px-32 md:mt-0 md:flex-row md:px-2">
            <div className="flex-1"></div>
          </div>
  
          <div className="flex flex-row items-end justify-end p-2">
            <div className="md:w-5/6"></div>
  
            <a href="https://github.com/bestivil/COMP4024-CosmicWordQuest" className="relative flex flex-row h-11 w-full items-center justify-center gap-2 rounded-md bg-slate-100 p-4 text-black shadow-md md:w-1/3" target="_blank" rel="noreferrer">
            <button className="flex flex-row items-center justify-center gap-2">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <div className="flex items-center justify-center gap-2">
                <span className="items-center text-sm">GitHub</span>
              </div>
            </button>
            </a>
  
            
          </div>
        </div>
  
        {/* <!-- Project 2 --> */}
        <div className="hover:shadow-gray-400/2 flex h-full w-full flex-col justify-between rounded-2xl bg-slate-950 text-white hover:border-slate-400 hover:shadow-lg">
          <div className="flex-col pt-4 max-md:justify-center md:flex-row">
            <div className="flex w-full flex-col items-center justify-center px-3 pb-6 md:flex-row">
              <span className="text-semibold flex w-3/4 items-center justify-center p-3 text-2xl">Weather</span>
              <div className="flex w-full flex-row items-center justify-center md:justify-end md:pr-4">
                <span className="flex items-center justify-center"
                  >Built with:
                  <div className="w-4"></div>
                  {/* <!-- React SVG --> */}
                  <svg width="64px" height="64px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"></path>
                    </g>
                  </svg>
                  {/* <!-- TailwindCSS SVG --> */}
                  <svg width="64px" height="64px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{fill: "#44a8b3"}}>
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>file_type_tailwind</title>
                      <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
  
            <div className="flex p-2">
              <div className="flex w-full flex-col px-8 py-4">
                <span className="text-semibold text-md">• Fully responsive design, favourite locations, and advanced metrics. </span>
                <span className="text-semibold text-md">• Integrated API's using Express.js </span>
              </div>
            </div>
          </div>
  
          <div className="flex w-full flex-1 flex-col gap-3 max-md:px-32 md:mt-0 md:flex-row md:px-2">
            <div className="flex-1"></div>
          </div>
  
          <div className="flex flex-row items-end justify-end gap-3 p-2">
            <div className="md:w-11/12"></div>
  
            <button className="relative flex h-11 w-1/2 items-center justify-center gap-2 rounded-md bg-slate-100/5 p-4 text-black md:w-1/4">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <div className="flex items-center justify-center gap-2">
                <span className="items-center text-sm">GitHub</span>
              </div>
            </button>
  
            <a href="https://react-weather-application-zeta.vercel.app/" className="group relative flex flex-row h-11 w-1/2 items-center justify-center gap-2 rounded-md bg-slate-100 p-4 text-black md:w-1/4" target="_blank" rel="noreferrer">
            <button className=" relative flex h-11 w-1/2 items-center justify-center rounded-md bg-slate-100 p-4 text-black ">
              <div className="flex items-center justify-center">
                <span className="items-center text-sm">Visit</span>
                <div className="group-hover:-rotate-45">
                  <svg className="ml-1 h-6" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero" />
                  </svg>
                </div>
              </div>
            </button>
            </a>
          </div>
        </div>
        <div className="pt-40 md:pt-24"></div>
      </div>
    </div>
  </div>
  


  );
}


