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
  <div className="absolute right-8 top-8">
    <svg className="h-12 w-12" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
    </svg>
  </div>

  {/* <!-- Content container --> */}
  <div className="mt-24 flex w-full flex-col items-center">
    {/* <!-- Horizontal line --> */}
    <div className="w-full">
      <hr className="border-t border-white" />
    </div>
    {/* <!-- Centered text --> */}
    <div className="mt-8 text-center text-4xl font-extrabold text-white">Weather</div>
    {/* <!-- Built with: --> */}
    <div className="p-4 text-white">Built with React.js, Tailwind, TypeScript</div>

    {/* <!-- Button Group (Mobile and Desktop) --> */}
    <div className="mt-4 grid w-1/2 grid-cols-2 overflow-hidden rounded-xl border font-medium shadow-md shadow-slate-300/10">
      <button className="bg-slate-700 p-3 transition-colors hover:bg-slate-600 active:bg-blue-700">Mobile</button>
      <button className="bg-slate-300 text-black transition-colors hover:bg-slate-500 active:bg-blue-700">Desktop</button>
    </div>
    <div className="mt-8 grid w-5/6 items-center justify-center border font-medium">Bruce</div>
  </div>
</div>




  );
}


