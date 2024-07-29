import React from "react";
import { JavaIcon, PythonIcon, TypeScriptIcon } from "../_components/icons";

export default function TechIcons() {
  const icons = [<TypeScriptIcon />, <PythonIcon />, <JavaIcon />];
  return (
    <div className=" flex min-w-28 items-center justify-center md:pt-24">
      <div className=" flex min-w-[40%] grid-cols-5 flex-row items-center justify-between gap-4 px-6 md:min-w-[60%] md:grid-cols-5 md:gap-16 md:px-8 lg:justify-center">
        {icons.map((item, index) =>
          React.cloneElement(
            <div
              id={index.toString()}
              className="flex h-16 w-16 items-center justify-center rounded-lg bg-slate-700 md:h-24 md:w-24"
            >
              {item}
            </div>,
            { key: index },
          ),
        )}
      </div>
    </div>
  );
}
