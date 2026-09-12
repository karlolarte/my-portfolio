import React from "react";
import ProjectCard from "./ProjectCard";
import SocialLink from "../SocialLink";
import { FaGithub } from "react-icons/fa";

const MyProjects = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-start p-5">
      <div className="flex items-center justify-center pt-5">
        <h1 className="text-5xl text-white">My Projects</h1>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
        <ProjectCard
          image="/macra2.png"
          url="https://macro-tracker-delta-gray.vercel.app/"
          name="Macra - Track Your Macros "
          description="A Personal Macro-Tracker App using MCP via Gemini Free API Key."
          techstack="Next.js, Neon PostgeSQL, "
        />
        <ProjectCard
          image="/farfalla2.png"
          url="https://kaix-inventory-client.vercel.app/"
          name="Kaix Customs Inventory Management System"
          description="A Inventory Management System for my Personal Business, designed to streamline business operations."
          techstack="React, Express, Neon PostgeSQL, TailwindCSS "
        />
        <ProjectCard
          image="/bus.png"
          url="https://macro-tracker-delta-gray.vercel.app/"
          name="Ilagan Bus Tracker"
          description="A Real-Time Bus Tracker for Ilagan City's local busline."
          techstack="Next.js, Neon PostgeSQL, "
        />
      </div>
      <div>
        <SocialLink name="Github" href="https://github.com/champagniee" Icon={FaGithub} />
      </div>
    </section>
  );
};

export default MyProjects;
