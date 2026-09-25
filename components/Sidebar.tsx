import React from "react";
import { inter } from "@/app/fonts";
import { GrProjects } from "react-icons/gr";
import { IoShareSocialSharp } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { openSans } from "@/app/fonts";
import { HiMenu } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="sticky top-0 hidden h-screen w-1/8 shrink-0 flex-col border border-gray-600/20 md:flex">
        <div className="text flex h-1/8 flex-col items-start justify-center ps-10">
          <h1 className={`${inter.className} text-2xl tracking-tighter`}> Karl Olarte</h1>
          <hr className="mt-5 w-[90%] border-0 border-t border-gray-600/20" />
        </div>

        <div className="h-220 ps-10 text-center">
          <ul className={`flex flex-col gap-5 text-start text-xl text-gray-500 ${openSans.className}`}>
            <li className="flex items-center gap-5 transition-colors hover:text-black">
              <GrProjects />
              Projects
            </li>
            <li className="flex items-center gap-5 transition-colors hover:text-black">
              <IoShareSocialSharp />
              Socials
            </li>
            <li className="flex items-center gap-5 transition-colors hover:text-black">
              <CiUser />
              Experience
            </li>
          </ul>
        </div>
        <div className={`flex flex-1 flex-col items-center justify-center ${inter.className}`}>
          <hr className="mt-5 mb-5 w-[90%] border-0 border-t border-gray-600/20" />
          <p className="p-2 text-[13px] text-gray-600/60">For work and projects, you can reach me at.</p>
          <h1>karlolarte.dev@gmail.com</h1>
        </div>
      </div>
      <div className="text flex h-18 items-center justify-between border px-5 md:hidden">
        <h1 className={`${inter.className} text-2xl tracking-tighter`}> Karl Olarte</h1>
        <a href="https://github.com/karlolarte">
          <FaGithub size={24} />
        </a>
      </div>
    </>
  );
};

export default Sidebar;
