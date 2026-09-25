import React from "react";

type ExperienceRowType = {
  year: string;
  title: string;
  company: string;
};

const ExperienceRow = ({ year, company, title }: ExperienceRowType) => {
  return (
    <div
      id="experience"
      className="mx-5 grid w-[93%] grid-cols-[80px_1fr_1fr] items-center border-b py-3 md:mx-0 md:w-full md:grid-cols-[120px_1fr_1fr]"
    >
      <span className="ml-5 text-[10px] text-gray-400 md:text-sm">{year}</span>
      <span className="text-[10px] md:text-lg">{title}</span>
      <span className="mr-5 text-right text-[10px] text-gray-500 md:text-[15px]">{company}</span>
    </div>
  );
};

export default ExperienceRow;
