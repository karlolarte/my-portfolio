import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight } from "lucide-react";
import ExperienceRow from "@/components/ExperienceRow";
import StackPill from "@/components/StackPill";
import SocialCard from "@/components/SocialCard";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiClaude } from "react-icons/si";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col md:w-3/8">
        <div id="profile" className="mt-5 flex flex-col items-center gap-5 p-5 md:mt-30 md:flex-row">
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
          <h1 className="pl-5 text-lg text-gray-500 md:text-2xl">Experience</h1>
          <hr className="text mx-5 mt-5 border-0 border-t border-gray-600/20 md:mx-0 md:w-full" />
          <div className="flex flex-col items-center justify-center">
            <ExperienceRow year="2026" title="Software Developer Intern" company="" />
            <ExperienceRow year="2021-Present" title="Owner" company="Kaix Customs Clothing Store" />
          </div>
        </div>

        <div id="stack" className="my-10">
          <h1 className="pl-5 text-lg text-gray-500 md:text-2xl">Stack</h1>
          <hr className="text mx-5 mt-5 mb-5 border-0 border-t border-gray-600/20 md:mx-0 md:w-full" />

          <div className="flex flex-col gap-2 pb-5 md:ml-0 md:flex-row">
            <h1 className="md:text-md flex w-full items-center pl-5 text-sm text-gray-500 md:ml-0 md:w-30 md:pl-0">
              Languages
            </h1>

            <div className="flex w-full flex-wrap gap-5 pl-5 md:ml-0 md:w-220 md:justify-start md:gap-2">
              <StackPill stack="TypeScript" icon="devicon-typescript-plain" />
              <StackPill stack="JavaScript" icon="devicon-javascript-plain" />
              <StackPill stack="Python" icon="devicon-python-plain" />
              <StackPill stack="SQL" icon="devicon-azuresqldatabase-plain" />
              <StackPill stack="HTML" icon="devicon-html5-plain" />
              <StackPill stack="CSS" icon="devicon-css3-plain" />
            </div>
          </div>
          <div className="mb-5 flex flex-col gap-2 md:ml-0 md:flex-row">
            <h1 className="md:text-md ml-5 flex w-30 items-center text-sm text-gray-500 md:ml-0">Frameworks</h1>

            <div className="flex w-full flex-wrap gap-2 pl-5 md:w-220">
              <StackPill stack="Next.js" icon="devicon-nextjs-plain" />
              <StackPill stack="React" icon="devicon-react-plain" />
              <StackPill stack="Express" icon="devicon-express-original" />
              <StackPill stack="FastAPI" icon="devicon-fastapi-plain" />
            </div>
          </div>
          <div className="mb-5 ml-5 flex flex-col gap-2 md:ml-0 md:flex-row">
            <h1 className="md:text-md flex w-full items-center text-sm text-gray-500 md:w-30">Databases</h1>

            <div className="ml-0 flex w-full flex-wrap gap-2 md:ml-5 md:w-220">
              <StackPill stack="PostgreSQL" icon="devicon-postgresql-plain" />
              <StackPill stack="MongoDB" icon="devicon-mongodb-plain" />
              <StackPill stack="Redis" icon="devicon-redis-plain" />
            </div>
          </div>
          <div className="mb-5 ml-5 flex flex-col gap-2 md:ml-0 md:flex-row">
            <h1 className="md:text-md flex w-30 items-center text-sm text-gray-500">Tools</h1>

            <div className="ml-0 flex w-full flex-wrap gap-2 md:ml-5 md:w-220">
              <StackPill stack="Node.js" icon="devicon-nodejs-plain" />
              <StackPill stack="Git" icon="devicon-git-plain" />
              <StackPill stack="GitHub" icon="devicon-github-plain" />
              <StackPill stack="Docker" icon="devicon-docker-plain" />
              <StackPill stack="Bash" icon="devicon-bash-plain" />
              <StackPill stack="NPM" icon="devicon-npm-original-wordmark" />
              <StackPill stack="Prisma" icon="devicon-prisma-plain" />
              <div className="flex flex-col items-center gap-2 p-0 text-gray-500 transition-all duration-200 hover:scale-105 md:px-3 md:py-2">
                <SiClaude className="text-4xl md:text-5xl" />
                <h1 className="hidden text-xs md:block md:text-sm">Claude Code</h1>
              </div>
            </div>
          </div>
          <div className="mb-5 ml-5 flex flex-col gap-2 md:ml-0 md:flex-row">
            <h1 className="md:text-md flex w-full items-center text-sm text-gray-500 md:w-30">CI/CD</h1>

            <div className="ml-0 flex w-full flex-wrap gap-2 md:ml-5 md:w-220">
              <StackPill stack="GitHub Actions" icon="devicon-githubactions-plain" />
            </div>
          </div>
          <div className="mb-5 ml-5 flex flex-col gap-2 md:ml-0 md:flex-row">
            <h1 className="md:text-md flex w-full items-center text-sm text-gray-500 md:w-30">Cloud</h1>

            <div className="ml-0 flex w-full flex-wrap gap-2 md:ml-5 md:w-220">
              <StackPill stack="Amazon Web Services" icon="devicon-amazonwebservices-plain-wordmark" />
            </div>
          </div>
        </div>
        <div id="projects" className="mb-5">
          <h1 className="pl-5 text-lg text-gray-500 md:text-2xl">Education</h1>
          <hr className="text mx-5 mt-5 mb-5 border-0 border-t border-gray-600/20 md:mx-0 md:w-full" />

          <div
            id="experience"
            className="mx-5 grid grid-cols-[80px_1fr_1fr] items-center border-b py-3 md:mx-0 md:grid-cols-[120px_1fr_1fr]"
          >
            <span className="text-[10px] text-gray-400 md:text-sm">2027</span>
            <span className="text-[10px] md:text-[15px]">Bachelor of Science in Information Technology</span>
            <span className="text-right text-[9px] text-gray-500 md:text-[15px]">
              Isabela State University - Ilagan
            </span>
          </div>
        </div>
        <div id="projects" className="mt-5 mb-20">
          <h1 className="pl-5 text-lg text-gray-500 md:text-2xl">Socials</h1>
          <hr className="text mx-5 mt-5 mb-5 border-0 border-t border-gray-600/20 md:mx-0 md:w-full" />

          <div className="mx-5 flex flex-col gap-2 md:mx-0 md:flex-row">
            <SocialCard
              name="GitHub"
              username="Karl Olarte"
              href="https://github.com/karlolarte"
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
