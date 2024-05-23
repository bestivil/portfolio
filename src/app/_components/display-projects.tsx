import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function DisplayProjects() {

  return (
    <div className="min-h-screen bg-slate-900 p-6 ">
  <div className="container relative flex min-w-full flex-col justify-center overflow-hidden">
    <div className="h-18 flex w-full flex-row flex-nowrap gap-8 overflow-hidden">
      {/* <!-- Left Bar --> */}
      <div className="fixed bottom-0 left-5 hidden h-14 flex-row items-center justify-between rounded-3xl bg-black px-4 text-white shadow-2xl transition-all duration-300 md:relative md:bottom-auto md:left-0 md:ml-5 md:flex md:w-3/4 md:px-14">
        <div className="group flex flex-row items-center px-2 transition-transform hover:scale-110 md:px-5">
          <div className="icon mr-2 md:mb-0 md:mr-2">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span className="min-[900px]:block hidden">Me</span>
        </div>

        <div className="group flex items-center rounded-lg p-2 transition-transform hover:scale-110 md:p-5">
          <div className="icon mr-2">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span className="min-[900px]:block hidden">Experience</span>
        </div>

        <div className="group flex items-center rounded-lg p-2 transition-transform hover:scale-110 md:p-5">
          <div className="icon mr-2">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span className="min-[900px]:block hidden">Portfolio</span>
        </div>

        <div className="group flex items-center rounded-lg p-2 transition-transform hover:scale-110 md:p-5">
          <div className="icon mr-2">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <span className="min-[900px]:block hidden">Publications</span>
        </div>
      </div>

      {/* <!-- Right Bars --> */}
      <div className="flex w-full justify-center space-x-2 md:w-1/5 md:justify-end">
        {/* <!-- GitHub Bar --> */}
        <div className="flex flex-none items-center justify-center rounded-3xl bg-white p-4 text-black shadow-2xl">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
          </svg>
        </div>

        {/* <!-- LinkedIn Bar --> */}
        <div className="flex flex-none items-center justify-center rounded-3xl bg-white p-4 text-black shadow-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Hero Section --> */}
  <div className="flex h-40 flex-col items-center justify-center gap-4 pt-40">
    <div className="rounded-lg bg-yellow-300 px-32 py-2 text-center text-7xl font-extrabold text-black">Bruce Estivil</div>
    <div className="rounded-lg bg-yellow-300 px-4 py-2 text-center text-lg text-black">Full-stack Developer</div>
  </div>

  {/* <!-- Tech Stack --> */}
  <div className="flex justify-center pt-32">
    <div className="grid w-full max-w-[90%] md:max-w-[50%] grid-cols-4 items-center gap-8 md:grid-cols-4">
      <div className="h-24 w-24 rounded-lg bg-slate-700"></div>
      <div className="h-24 w-24 rounded-lg bg-slate-700"></div>
      <div className="h-24 w-24 rounded-lg bg-slate-700"></div>
      <div className="h-24 w-24 rounded-lg bg-slate-700"></div>
    </div>
  </div>

  {/* <!-- About and Experience --> */}
  <div className="flex flex-col items-center md:flex-row md:gap-2">
    <div className="mt-8 h-72 w-full rounded-xl bg-black md:w-3/4">
      <div className="flex flex-col items-center pt-4">
        <span className="font-bold text-white">About </span>
        
      </div>
    </div>
    <div className="mt-8 h-72 w-full rounded-xl bg-white/30 md:w-1/4">
      <div className="flex flex-col items-center pt-4">
        <span className="font-bold text-white">Experience </span>
      </div>
    </div>
  </div>

  {/* <!-- Portfolio --> */}
  <div>
    <div className="flex w-full flex-row items-center justify-center pt-8">
      <hr className="w-3/4 items-center border-t border-white"></hr>
    </div>
    
    <div>
      <div className="flex flex-row ">
        
        <div className="hover:shadow-gray-400/2 mt-8 h-72 w-full rounded-xl bg-black hover:shadow-lg text-white hover:border-slate-400 ">
        
        <p className="font-bold ml-5 mt-3 ">Weather</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 px-32 md:px-2 md:mt-0 min-w-5">
        {/* <!-- Empty Grid Items for positioning --> */}
        <div className="hidden md:block col-span-3"></div>
        
        {/* <!-- GitHub Button --> */}
        <button className=" flex items-center justify-center bg-white text-black px-8 py-2 rounded-md shadow-md col-span-1 ">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span className="ml-2">GitHub</span>
        </button>

        {/* <!-- Visit Button --> */}
        <button className="flex items-center justify-center bg-white text-black px-4 py-2 rounded-md shadow-md col-span-1">
          <span>Visit</span>
          <svg className="h-6" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero"/></svg>
          
        </button>
      </div>
          </div>
        </div>
        <div className="hover:shadow-gray-400/2 mt-8 h-72 w-full rounded-xl bg-black hover:shadow-lg text-white">Publication
        <button className="flex items-center justify-center bg-white text-black px-4 py-2 rounded-md shadow-md col-span-1"> Visit</button>
        
        
        </div>
      </div>
    </div>
  </div>



  );
}


