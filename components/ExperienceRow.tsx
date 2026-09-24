import React from "react";

type ExperienceRowType = {
  year: string;
  title: string;
  company: string;
};

const ExperienceRow = ({ year, company, title }: ExperienceRowType) => {
  return (
    <div id="experience" className="grid items-center border-b py-3 md:grid-cols-[120px_1fr_1fr]">
      <span className="text-sm text-gray-400">{year}</span>
      <span>{title}</span>
      <span className="text-right text-gray-500">{company}</span>
    </div>
  );
};

export default ExperienceRow;
