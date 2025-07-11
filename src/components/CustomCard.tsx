import React from "react";

interface Props {
  projectTitle: string;
  projectArea: string;
  projectDescription: string;
}

function CustomCard({ projectTitle, projectArea, projectDescription }: Props) {
  return (
    <div className="w-[90%] min-h-[200px] bg-blue-700 rounded-sm flex flex-col justify-around p-2">
      <header className="w-full h-[20%]">
        <h1 className="font-semibold pl-2 flex items-center">{projectTitle}</h1>
        <h3 className="pl-3 font-extralight">{projectArea}</h3>
      </header>
      <main className="w-full h-[10%]">
        <p className="pl-2">{projectDescription}</p>
      </main>
    </div>
  );
}

export default CustomCard;
