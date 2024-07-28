interface SkillsProps {
  title: string;
  array: string[];
}

export default function TechSkills() {
  const frontEndArray = ["React.js", "TypeScript", "TailwindCSS"];
  const backEndArray = ["SQL", "Express.js", "Node.js"];
  const DevOpsArray = ["Jenkins", "Git", "Terraform"];
  const OtherArray = ["Python", "C++", "C#", "Java"];

  const frontend: SkillsProps = { title: "Frontend", array: frontEndArray };
  const backend: SkillsProps = { title: "Backend", array: backEndArray };
  const devops: SkillsProps = { title: "DevOps", array: DevOpsArray };
  const other: SkillsProps = { title: "Other", array: OtherArray };
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
              {SkillsSections(frontend)}
              {SkillsSections(backend)}
            </div>
          </div>
        </div>

        {/* <!-- 2nd Row --> */}
        <div className="flex flex-col items-center pt-4">
          <div className="flex w-full flex-col justify-center gap-8 px-32 pb-10 max-md:gap-7 md:flex-row">
            {SkillsSections(devops)}
            {SkillsSections(other)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkillsSections(object: SkillsProps) {
  return (
    <div className="">
      <span className="flex items-center justify-center text-2xl font-semibold">
        {object.title}
      </span>
      <div className="ml-6 flex flex-wrap items-center justify-center md:max-w-64">
        {object.array.map((item, index) => BlackShadowButton(item))}
      </div>
    </div>
  );
}

export function BlackShadowButton(item: string) {
  return (
    <div className="m-2 rounded-xl bg-black px-4 py-1 text-white shadow-xl shadow-black/10">
      {item}
    </div>
  );
}
