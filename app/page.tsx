import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight } from "lucide-react";
import ExperienceRow from "@/components/ExperienceRow";
import StackPill from "@/components/StackPill";
import SocialCard from "@/components/SocialCard";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col md:w-3/8">
        <div id="profile" className="mt-30 flex flex-col items-center gap-5 p-5 md:flex-row">
          <div className="relative flex h-50 w-50 justify-center text-center md:h-100 md:w-100">
            <Image src="/profile.png" alt="profile-pic" fill className="object-cover object-center" />
          </div>
          <div className="flex flex-1 flex-col items-center gap-2 text-gray-500 md:items-start md:justify-end md:gap-5">
            <h1 className="text-xl text-black md:text-7xl">Karl Olarte</h1>
            <p className="text-md md:text-2xl">A Full-Stack Web Developer.</p>
            <p className="text-sm md:text-xl">I build modern and reliable web applications.</p>
            <p className="text-center text-sm md:text-start md:text-xl">
              Focused on backend systems, APIs, authentication and production-ready applications
            </p>
          </div>
        </div>
        <div id="projects" className="mt-10 flex flex-col">
          <h1 className="ml-5 text-lg text-gray-500 md:text-2xl">Projects</h1>
          <hr className="text mx-5 mt-5 mb-5 border-0 border-t border-gray-600/20 md:mx-0 md:w-full" />
          <div className="flex flex-col gap-5 md:flex-row">
            <ProjectCard
              src="/f1.png"
              title="Kaix Customs"
              description="Inventory Management System for my personal business."
              stack="React, Express, PostgreSQL"
            />
            <ProjectCard
              src="/f2.png"
              title="Kaix Customs Store"
              description="A web store for my personal business."
              stack="Next.js, PostgreSQL"
            />
            <ProjectCard
              src="/macra1.png"
              title="Macra"
              description="An AI-assited macro-nutrient tracker."
              stack="Next.js, Gemini, PostgreSQL"
            />
          </div>
          <div className="hover: mt-5 flex justify-end gap-1 text-gray-600 hover:text-black">
            <h1 className="text-md">All Projects</h1>
            <ArrowRight className="mr-5 size-5 md:mr-0" />
          </div>
        </div>
        <div id="projects" className="mt-10">
          <h1 className="ml-5 text-lg text-gray-500 md:text-2xl">Experience</h1>
          <hr className="text mx-5 mt-5 mb-5 border-0 border-t border-gray-600/20 md:mx-0 md:w-full" />

          <ExperienceRow year="2026" title="Software Developer Intern" company="" />
          <ExperienceRow year="2021-Present" title="Owner" company="Kaix Customs Clothing Store" />
        </div>

        <div id="stack" className="my-10">
          <h1 className="text-2xl text-gray-500">Stack</h1>
          <hr className="mt-5 mb-5 w-full border-0 border-t border-gray-600/20" />

          <div className="mb-5 flex gap-2">
            <h1 className="text-md flex w-30 items-center text-gray-500">Languages</h1>

            <div className="ml-5 flex w-220 flex-wrap gap-2">
              <StackPill stack="TypeScript" />
              <StackPill stack="JavaScript" />
              <StackPill stack="Python" />
              <StackPill stack="SQL" />
              <StackPill stack="HTML" />
              <StackPill stack="CSS" />
            </div>
          </div>
          <div className="mb-5 flex gap-2">
            <h1 className="text-md flex w-30 items-center text-gray-500">Frameworks</h1>

            <div className="ml-5 flex w-220 flex-wrap gap-2">
              <StackPill stack="Next.js" />
              <StackPill stack="React" />
              <StackPill stack="Express" />
              <StackPill stack="FastAPI" />
            </div>
          </div>
          <div className="mb-5 flex gap-2">
            <h1 className="text-md flex w-30 items-center text-gray-500">Databases</h1>

            <div className="ml-5 flex w-220 flex-wrap gap-2">
              <StackPill stack="PostgreSQL" />
              <StackPill stack="MongoDB" />
              <StackPill stack="Redis" />
              <StackPill stack="Prisma" />
              <StackPill stack="Drizzle" />
            </div>
          </div>
          <div className="mb-5 flex gap-2">
            <h1 className="text-md flex w-30 items-center text-gray-500">Tools</h1>

            <div className="ml-5 flex w-220 flex-wrap gap-2">
              <StackPill stack="Git" />
              <StackPill stack="GitHub" />
              <StackPill stack="Docker" />
              <StackPill stack="Bash" />
            </div>
          </div>
          <div className="mb-5 flex gap-2">
            <h1 className="text-md flex w-30 items-center text-gray-500">CI/CD</h1>

            <div className="ml-5 flex w-220 flex-wrap gap-2">
              <StackPill stack="GitHub Actions" />
              <StackPill stack="Vitest" />
            </div>
          </div>
        </div>
        <div id="projects" className="mb-5">
          <h1 className="text-2xl text-gray-500">Education</h1>
          <hr className="mt-5 mb-5 w-full border-0 border-t border-gray-600/20" />

          <div id="experience" className="grid grid-cols-[120px_1fr_1fr] items-center border-b py-3">
            <span className="text-sm text-gray-400">2027</span>
            <span>Bachelor of Science in Information Technolgy</span>
            <span className="text-right text-gray-500">Isabela State University - Ilagan</span>
          </div>
        </div>
        <div id="projects" className="mt-5 mb-20">
          <h1 className="text-2xl text-gray-500">Socials</h1>
          <hr className="mt-5 mb-5 w-full border-0 border-t border-gray-600/20" />

          <div className="flex gap-2">
            <SocialCard
              name="GitHub"
              username="Karl Olarte"
              href="github.com/karlolarte"
              icon={<FaGithub className="size-10" />}
            />
            <SocialCard
              name="LinkedIn"
              username="Karl Olarte"
              href="github.com/karlolarte"
              icon={<FaLinkedin className="size-10" />}
            />
            <SocialCard
              name="Email"
              username="karlolarte.dev@gmail.com"
              href="github.com/karlolarte"
              icon={<Mail className="size-10" />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
