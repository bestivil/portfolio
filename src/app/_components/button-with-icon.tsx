export function ButtonIcon(link: string, type: string, icon: any) {
  return (
    <a
      href={link}
      className=" group relative flex h-11 w-full flex-row items-center justify-center rounded-md bg-slate-100 p-4 text-black shadow-md md:w-1/3"
      target="_blank"
      rel="noreferrer"
    >
      <button className=" relative flex h-11 w-1/2 items-center justify-center rounded-md p-4 text-black md:w-1/4">
        <div className="flex items-center justify-center gap-2 ">
          <span className="items-center text-sm">{type}</span>
          {icon}
        </div>
      </button>
    </a>
  );
}
