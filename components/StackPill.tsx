import React from "react";

const StackPill = ({ stack }: { stack: string }) => {
  return <h1 className="w-fit rounded-lg border px-3 py-2 transition-all duration-200 hover:scale-105">{stack}</h1>;
};

export default StackPill;
