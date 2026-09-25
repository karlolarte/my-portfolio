import React from "react";

const StackPill = ({ stack, icon }: { stack: string; icon: string }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-0 text-gray-500 transition-all duration-200 hover:scale-105 md:px-3 md:py-2">
      <i className={`${icon} text-4xl md:text-5xl`}></i>
      <h1 className="hidden text-xs md:block md:text-sm">{stack}</h1>
    </div>
  );
};

export default StackPill;
