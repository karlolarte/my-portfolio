import React from "react";
import Image from "next/image";

type ProjectCard = {
  name: string;
  description: string;
  techstack: string;
  url: string;
  image: string;
};

const ProjectCard = ({ name, description, techstack, url, image }: ProjectCard) => {
  return (
    <div>
      <a href={url} target="_blank" className="hover-3d mx-2 my-12 cursor-pointer">
        {/* content */}
        <div className="card flex h-60 w-100 flex-col bg-black bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em] p-5 text-white md:h-220 md:w-150">
          <div className="flex h-1/2 w-full justify-center p-5">
            <Image src={image} alt="{name}" height={400} width={400} />
          </div>
          <div className="card-body">
            <div className="mb-10 flex justify-between">
              <div className="text-2xl font-bold">{name}</div>
            </div>
            <div className="mb-4 text-lg opacity-40">{description}</div>
            <div className="flex justify-between italic">
              <p>{techstack}</p>
            </div>
          </div>
        </div>

        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </a>
    </div>
  );
};

export default ProjectCard;
