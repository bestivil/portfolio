import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function DisplayWeatherOverlay() {

  return (
    <div className="relative flex min-h-screen bg-slate-900 p-8">
  {/* <!-- Fixed Button Group --> */}
  <div className="fixed bottom-8 left-0 right-0 flex justify-center space-x-4">
    <button className="flex min-w-[8rem] items-center justify-center rounded-md bg-white px-8 py-2 text-black shadow-md">
      <span>GitHub</span>
    </button>
    <button className="flex min-w-[8rem] items-center justify-center rounded-md bg-white px-8 py-2 text-black shadow-md">
      <span>Visit</span>
    </button>
  </div>

  {/* <!-- X button --> */}
  <div className="fixed right-8 top-8">
    <svg className="h-12 w-12" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
    </svg>
  </div>

  {/* <!-- Content container --> */}
  <div className="mt-24 flex w-full flex-col items-center">
    {/* <!-- Horizontal line --> */}
    <div className="w-full">
      <hr className=" hidden border-t border-white" />
    </div>
    {/* <!-- Centered text --> */}
    <div className="mt-8 text-center text-4xl font-extrabold text-white">Weather</div>
    {/* <!-- Built with: --> */}
    <div className="p-4 text-white">Built with React.js, Tailwind, TypeScript</div>

    {/* <!-- Button Group (Mobile and Desktop) --> */}
    <div className="mt-4 grid w-1/2 grid-cols-2 overflow-hidden rounded-xl border font-medium shadow-md shadow-slate-300/10">
      <button className="flex flex-row justify-center gap-2 bg-slate-700 p-3 transition-colors hover:bg-slate-600 active:bg-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2c0-1.105-.896-2-2-2h-12c-1.105 0-2 .896-2 2v20c0 1.104.895 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.501 0h3.001c.276 0 .5.224.5.5s-.224.5-.5.5h-3.001c-.275 0-.499-.224-.499-.5s.224-.5.499-.5zm1.501 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm6-3h-12v-14.024h12v14.024z" /></svg>
        <span className="hidden md:block">Mobile</span>
      </button>
      <button className="flex flex-row items-center justify-center gap-3 bg-slate-300 text-black transition-colors hover:bg-slate-500 active:bg-blue-700">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M17 24h-10v-1.342c1.808-.985 2.005-2.205 2-3.658h-8c-.265 0-.52-.105-.707-.293-.188-.187-.293-.442-.293-.707v-17c0-.265.105-.52.293-.707.187-.188.442-.293.707-.293h22c.265 0 .52.105.707.293.188.187.293.442.293.707v17c0 .265-.105.52-.293.707-.187.188-.442.293-.707.293h-8c.004 1.374.155 2.66 2 3.658v1.342zm-3.984-5h-2.044c-.015.802.004 2.003-.719 3h3.493c-.757-1.02-.716-2.25-.73-3zm8.984-5h-20v3h20v-3zm-10 .537c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-10-12.537v10h20v-10h-20z" /></svg>
        <span className="hidden md:block">Desktop</span>
      </button>
    </div>
    <div className="mt-8 grid min-h-96 w-5/6 items-center justify-center border font-medium">Bruce</div>
  </div>
</div>





  );
}


