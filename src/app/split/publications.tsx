import React from "react";
import { ButtonIcon } from "../_components/button-with-icon";
import { GScholarIcon, JavaIcon, PDFIcon } from "../_components/icons";
import { Project, CardProps } from "./projects";

const Publication1: CardProps = {
  title:
    "Thesis: Exploring Delay Tolerant Networks in New York's subway system",
  icons: [React.cloneElement(<JavaIcon />, { key: 1 })],
  descrptions: [
    "Evaluated pseudo-realistic traces to evaluate network protocols.",
    "Reseached network interface and environment impacts on protocol performance.",
  ],
};

export default function Publications() {
  return (
    <>
      <div className="hover:shadow-gray-400/2 mt-8 flex h-full w-full flex-col justify-between rounded-2xl bg-slate-950 p-4 text-white hover:border-slate-400 hover:shadow-lg">
        <div className="flex-col pt-4 max-md:justify-center md:flex-row">
          {Project(Publication1)}
        </div>

        <div className="flex w-full flex-1 flex-col gap-3 max-md:px-32 md:mt-0 md:flex-row md:px-2">
          <div className="flex-1"></div>
        </div>

        <div className="flex flex-row items-end justify-end gap-3 p-2">
          <div className="md:w-11/12"></div>
          {ButtonIcon(
            "https://scholar.google.com/citations?hl=en&user=ebQQOzIAAAAJ",
            "Google Scholar",
            <GScholarIcon />,
          )}
          {ButtonIcon("https://arxiv.org/pdf/2405.02647", "Read", <PDFIcon />)}
        </div>
      </div>
    </>
  );
}
