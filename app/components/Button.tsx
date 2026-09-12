import React from "react";

const Buttons = ({ name }: { name: string }) => {
  return (
    <div>
      <button className="rounded-full p-3 text-purple-400 outline outline-purple-400 hover:text-white hover:outline-amber-100">
        {name}
      </button>
    </div>
  );
};

export default Buttons;
